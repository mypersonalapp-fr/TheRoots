// The Roots — Conversation IA (Google Gemini), à l'écrit ET à l'oral.
//
// - Texte : on écrit sa réponse, l'IA répond dans la langue apprise, au
//   niveau de l'apprenant, et ajoute une ligne "💡" en français quand il y
//   a une faute à corriger.
// - Voix : 🔊 sur chaque réponse de l'IA (synthèse vocale du téléphone,
//   dans la langue apprise) + "lecture automatique" ; 🎤 pour dicter sa
//   réponse (reconnaissance vocale du navigateur, dans la langue apprise).
// - Prononciation : l'IA n'entend PAS le son (seul le texte compris par le
//   micro lui est envoyé, avec le "taux de confiance" du micro). Quand le
//   micro comprend un autre mot que celui visé, c'est en général un souci
//   de prononciation : l'IA le signale et donne une astuce. C'est dit
//   honnêtement à l'écran.
// - Accès : 1 conversation débloquée par leçon réussie, 3 max par jour,
//   cumulables d'un jour à l'autre (voir js/data/ai-credits.js).
// - Technique : l'appli n'appelle JAMAIS Google directement (la clé serait
//   publique sur GitHub) : elle passe par le relais Cloudflare
//   cloudflare-worker-gemini.js, dont l'adresse se colle dans
//   js/data/ai-config.js.

import { store } from "../data/store.js?v=20260924g";
import { aiCredits } from "../data/ai-credits.js?v=20260924g";
import { AI_RELAY_URL, AI_MAX_PER_DAY, AI_MAX_TURNS } from "../data/ai-config.js?v=20260924g";

const LANG_FLAGS = { en: "🇬🇧", es: "🇪🇸", pt: "🇵🇹" };
const SPEECH_BY_VARIANT = { "en-gb": "en-GB", "en-us": "en-US", "es-es": "es-ES", "es-co": "es-CO", "pt-pt": "pt-PT", "pt-br": "pt-BR" };
const SPEECH_BY_LANG = { en: "en-GB", es: "es-ES", pt: "pt-PT" };
const AUTO_READ_KEY = "the_roots_ai_autoread";

function esc(s) {
  return String(s == null ? "" : s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
}

function isRelayConfigured() {
  return /^https:\/\//.test(AI_RELAY_URL || "");
}

function speechTag(active) {
  return SPEECH_BY_VARIANT[active.variant] || SPEECH_BY_LANG[active.lang] || "en-GB";
}

// Voix choisie dans Paramètres (voix anglaise) : seulement pour l'anglais.
function preferredVoice(lang) {
  if (!window.speechSynthesis || lang !== "en") return null;
  try {
    const key = store.get().settings.preferredVoiceURI;
    if (!key) return null;
    const [name, voiceLang] = key.split("|");
    return window.speechSynthesis.getVoices().find((v) => v.name === name && v.lang === voiceLang) || null;
  } catch (e) { return null; }
}

// On ne lit pas à voix haute la ligne "💡" (en français) : seulement la
// réponse dans la langue apprise.
function spokenPart(text) {
  return String(text || "").split("\n").filter((l) => !l.trim().startsWith("💡")).join(" ").trim();
}

function speak(text, active) {
  if (!window.speechSynthesis) return;
  const toSay = spokenPart(text);
  if (!toSay) return;
  try {
    const u = new SpeechSynthesisUtterance(toSay);
    const v = preferredVoice(active.lang);
    if (v) { u.voice = v; u.lang = v.lang; } else { u.lang = speechTag(active); }
    u.rate = 0.92;
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(u);
  } catch (e) { /* synthèse vocale indisponible */ }
}

async function callRelay(active, mode) {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 25000);
  try {
    const res = await fetch(AI_RELAY_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      signal: controller.signal,
      body: JSON.stringify({
        mode,
        lang: active.lang, variant: active.variant, level: active.level,
        topic: active.topic, lede: active.lede,
        messages: active.messages.map((m) => ({ role: m.role, text: m.role === "user" && m.mic ? `${m.text} [micro: confiance ${m.mic}]` : m.text })),
      }),
    });
    const data = await res.json().catch(() => ({}));
    if (!res.ok || !data.text) throw new Error(data.error || "relay_error");
    return data.text;
  } finally {
    clearTimeout(timeoutId);
  }
}

function bubbleHtml(m, i) {
  if (m.role === "user") {
    return `<div class="chat-row chat-row-user"><div class="chat-bubble chat-user">${m.mic ? `<span class="chat-mic-tag">🎤</span> ` : ""}${esc(m.text)}</div></div>`;
  }
  const lines = String(m.text).split("\n").filter((l) => l.trim());
  const main = lines.filter((l) => !l.trim().startsWith("💡")).map(esc).join("<br>");
  const tips = lines.filter((l) => l.trim().startsWith("💡")).map((l) => `<div class="chat-tip">${esc(l)}</div>`).join("");
  return `
    <div class="chat-row chat-row-ai">
      <div class="chat-bubble chat-ai">
        <div>${main}</div>
        ${tips}
        <button class="chat-speak" data-msg="${i}" aria-label="Écouter">🔊</button>
      </div>
    </div>`;
}

export function renderConversation(container) {
  const { settings } = store.get();
  let welcomeLang = ["en", "es", "pt"].includes(settings.primaryLearningLang) ? settings.primaryLearningLang : "en";
  let busy = false;
  let errorMsg = "";
  let draft = "";
  let draftMic = null; // taux de confiance si le brouillon vient du micro
  let recording = false;
  let recognition = null;
  let autoRead = true;
  try { autoRead = localStorage.getItem(AUTO_READ_KEY) !== "0"; } catch (e) { /* défaut : oui */ }

  function langInfo(code) {
    const l = settings.langs.find((x) => x.code === code) || {};
    return { level: l.level || "A1", variant: l.selectedVariant || null, label: l.label || code };
  }

  function paint() {
    const active = aiCredits.active();
    if (active) paintChat(active); else paintHub();
  }

  // ---------- Accueil de l'onglet : conversations disponibles ----------
  function paintHub() {
    const available = aiCredits.available();
    const remaining = aiCredits.remainingToday();
    const relayOk = isRelayConfigured();
    container.innerHTML = `
      <div class="dash-greeting" style="padding:4px 0 10px">Discute avec l'IA dans ta langue d'apprentissage, à l'écrit ou au micro. Chaque leçon réussie débloque une conversation sur son thème.</div>

      <div class="card chat-counters">
        <div><strong>${available.length}</strong><span>conversation${available.length > 1 ? "s" : ""} en réserve</span></div>
        <div><strong>${remaining}/${AI_MAX_PER_DAY}</strong><span>encore possible${remaining > 1 ? "s" : ""} aujourd'hui</span></div>
      </div>

      ${relayOk ? "" : `
        <div class="card" style="margin-top:12px;font-size:13px;line-height:1.5">
          <strong>🔌 L'IA n'est pas encore branchée.</strong><br>
          Il reste une étape à faire une seule fois : créer ta clé Google Gemini et le petit relais Cloudflare (voir les instructions pas à pas). Tes conversations débloquées t'attendent en réserve.
        </div>`}

      ${remaining === 0 && available.length ? `<div class="card" style="margin-top:12px;font-size:13px">Tu as utilisé tes ${AI_MAX_PER_DAY} conversations du jour. Celles qui restent sont gardées pour demain 🙂</div>` : ""}

      <div style="margin-top:14px">
        ${available.length ? available.map((c) => `
          <div class="card chat-credit">
            <div class="chat-credit-head">
              <span class="chat-credit-flag">${c.lang ? LANG_FLAGS[c.lang] || "" : "🌍"}</span>
              <div>
                <div class="chat-credit-title">${esc(c.topic)}</div>
                <div class="chat-credit-sub">${c.id === "welcome" ? "Offerte pour essayer" : `Débloquée le ${esc(c.earnedAt.split("-").reverse().join("/"))}`}</div>
              </div>
            </div>
            ${c.lang ? "" : `
              <div class="level-chip-row" style="margin:10px 0 0" data-welcome-langs>
                ${settings.langs.map((l) => `<button class="level-chip${l.code === welcomeLang ? " active" : ""}" data-lang="${l.code}">${LANG_FLAGS[l.code] || ""} ${esc(l.label)}</button>`).join("")}
              </div>`}
            <button class="btn btn-primary" style="width:100%;margin-top:10px" data-start="${esc(c.id)}" ${!relayOk || remaining === 0 ? "disabled" : ""}>💬 Commencer la conversation</button>
          </div>
        `).join("") : `
          <div class="card" style="font-size:13px;color:var(--ink-soft)">Aucune conversation en réserve pour l'instant. Termine (et réussis) une leçon dans Mes cours pour débloquer la suivante.</div>`}
      </div>
    `;

    container.querySelectorAll("[data-welcome-langs]").forEach((row) => row.addEventListener("click", (e) => {
      const chip = e.target.closest(".level-chip");
      if (!chip) return;
      welcomeLang = chip.dataset.lang;
      paint();
    }));
    container.querySelectorAll("[data-start]").forEach((btn) => btn.addEventListener("click", async () => {
      const credit = available.find((c) => c.id === btn.dataset.start);
      if (!credit) return;
      const code = credit.lang || welcomeLang;
      const info = langInfo(code);
      const r = aiCredits.start(credit.id, { lang: code, variant: info.variant, level: credit.level || info.level });
      if (!r.ok) { paint(); return; }
      if (!credit.lang) aiCredits.updateActive({ lang: code });
      errorMsg = "";
      paint();
      await askAi("start");
    }));
  }

  // ---------- La conversation elle-même ----------
  function paintChat(active) {
    const userTurns = active.messages.filter((m) => m.role === "user").length;
    const micSupported = !!(window.SpeechRecognition || window.webkitSpeechRecognition);
    container.innerHTML = `
      <div class="chat-head card">
        <span class="chat-credit-flag">${LANG_FLAGS[active.lang] || ""}</span>
        <div style="flex:1;min-width:0">
          <div class="chat-credit-title">${esc(active.topic)}</div>
          <div class="chat-credit-sub">Niveau ${esc(active.level)} · message ${Math.min(userTurns, AI_MAX_TURNS)}/${AI_MAX_TURNS}</div>
        </div>
        <label class="chat-autoread"><input type="checkbox" id="chatAutoRead" ${autoRead ? "checked" : ""}/> 🔊 auto</label>
      </div>

      <div class="chat-log" id="chatLog">
        ${active.messages.map(bubbleHtml).join("")}
        ${busy ? `<div class="chat-row chat-row-ai"><div class="chat-bubble chat-ai chat-typing"><span></span><span></span><span></span></div></div>` : ""}
        ${errorMsg ? `<div class="card chat-error">${esc(errorMsg)} <button class="btn btn-ghost" id="chatRetry" style="padding:6px 12px;margin-left:6px">Réessayer</button></div>` : ""}
        ${active.feedback ? `<div class="card chat-feedback"><div style="font-weight:800;margin-bottom:6px">📋 Ton bilan</div>${esc(active.feedback).replace(/\n/g, "<br>")}</div>` : ""}
      </div>

      ${active.ended ? `
        <button class="btn btn-primary" id="chatClose" style="width:100%;margin-top:12px">Fermer la conversation</button>
      ` : `
        <div class="chat-compose card">
          <textarea id="chatInput" class="translate-area" rows="2" placeholder="Écris ta réponse… ou appuie sur 🎤">${esc(draft)}</textarea>
          <div class="chat-compose-row">
            ${micSupported ? `<button class="btn btn-ghost chat-mic${recording ? " recording" : ""}" id="chatMic" ${busy ? "disabled" : ""}>${recording ? "⏺ J'écoute…" : "🎤"}</button>` : ""}
            <button class="btn btn-primary" id="chatSend" style="flex:1" ${busy || userTurns >= AI_MAX_TURNS ? "disabled" : ""}>Envoyer</button>
          </div>
          <div class="chat-note">🎤 L'IA n'entend pas ta voix : elle lit ce que le micro a compris. Si le micro se trompe de mot, c'est souvent un son à travailler — l'IA te le signale.</div>
          <button class="auth-menu-forgot" id="chatEnd" style="display:block;margin:6px auto 0" ${busy ? "disabled" : ""}>${userTurns >= AI_MAX_TURNS ? "✅ Voir mon bilan" : "Terminer et voir mon bilan"}</button>
        </div>
      `}
    `;

    const log = container.querySelector("#chatLog");
    log.addEventListener("click", (e) => {
      const b = e.target.closest(".chat-speak");
      if (!b) return;
      const m = active.messages[Number(b.dataset.msg)];
      if (m) speak(m.text, active);
    });
    const autoEl = container.querySelector("#chatAutoRead");
    if (autoEl) autoEl.addEventListener("change", () => {
      autoRead = autoEl.checked;
      try { localStorage.setItem(AUTO_READ_KEY, autoRead ? "1" : "0"); } catch (e) { /* rien */ }
    });
    const retry = container.querySelector("#chatRetry");
    if (retry) retry.addEventListener("click", () => {
      errorMsg = "";
      const last = active.messages[active.messages.length - 1];
      askAi(active.messages.length === 0 ? "start" : (last && last.role === "user" ? "chat" : "feedback"));
    });
    const closeBtn = container.querySelector("#chatClose");
    if (closeBtn) closeBtn.addEventListener("click", () => { aiCredits.closeActive(); draft = ""; paint(); });

    const input = container.querySelector("#chatInput");
    if (input) input.addEventListener("input", () => { draft = input.value; draftMic = null; });
    const send = container.querySelector("#chatSend");
    if (send) send.addEventListener("click", () => sendDraft());
    const endBtn = container.querySelector("#chatEnd");
    if (endBtn) endBtn.addEventListener("click", () => askAi("feedback"));
    const mic = container.querySelector("#chatMic");
    if (mic) mic.addEventListener("click", () => toggleMic(active));

    // Toujours afficher le dernier message (la zone qui défile est .app-body).
    requestAnimationFrame(() => { container.scrollTop = container.scrollHeight; });
  }

  function sendDraft() {
    const active = aiCredits.active();
    const text = draft.trim();
    if (!active || !text || busy) return;
    const msg = { role: "user", text };
    if (draftMic !== null) msg.mic = draftMic;
    aiCredits.updateActive({ messages: [...active.messages, msg] });
    draft = ""; draftMic = null;
    askAi("chat");
  }

  function toggleMic(active) {
    const Recognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!Recognition) return;
    if (recording && recognition) { try { recognition.stop(); } catch (e) { /* rien */ } return; }
    try {
      window.speechSynthesis && window.speechSynthesis.cancel();
      recognition = new Recognition();
      recognition.lang = speechTag(active);
      recognition.interimResults = false;
      recognition.maxAlternatives = 1;
      recognition.onresult = (e) => {
        const alt = e.results[0][0];
        draft = alt.transcript;
        draftMic = typeof alt.confidence === "number" && alt.confidence > 0 ? alt.confidence.toFixed(2) : "?";
        recording = false;
        paint();
      };
      recognition.onerror = () => { recording = false; paint(); };
      recognition.onend = () => { if (recording) { recording = false; paint(); } };
      recording = true;
      paint();
      recognition.start();
    } catch (e) { recording = false; paint(); }
  }

  async function askAi(mode) {
    const active = aiCredits.active();
    if (!active || busy) return;
    busy = true; errorMsg = "";
    paint();
    try {
      const text = await callRelay(active, mode);
      const fresh = aiCredits.active();
      if (mode === "feedback") {
        aiCredits.updateActive({ feedback: text, ended: true });
      } else {
        aiCredits.updateActive({ messages: [...fresh.messages, { role: "model", text }] });
        if (autoRead) speak(text, fresh);
      }
    } catch (e) {
      const code = e && e.message;
      errorMsg = code === "quota_exceeded"
        ? "L'IA a atteint sa limite pour le moment. Réessaie dans une minute."
        : "L'IA ne répond pas pour l'instant (connexion ou relais). Ta conversation est gardée.";
    } finally {
      busy = false;
      paint();
    }
  }

  paint();
}
