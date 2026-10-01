// The Roots — Expression écrite et orale : immersion libre, indépendante de
// la progression par palier. Contenu réel pour l'anglais niveau A1 :
// - Expression écrite : réponse écrite à un email/message reçu, corrigée
//   avec LanguageTool (grammaire/orthographe, API publique gratuite, sans
//   clé) + une checklist de contenu (points attendus détectés par mots-clés
//   — voir EXPRESSION_ECRITE_PROMPTS_EN).
// - Expression orale : "appel" lu à voix haute (synthèse vocale), réponse
//   au micro captée par la reconnaissance vocale du navigateur (quand
//   disponible), même checklist de contenu sur ce qui a été capté.
//
// Ni l'une ni l'autre ne fait de correction grammaticale "par IA" à
// proprement parler (pas de backend branché sur l'appli) — LanguageTool est
// un vrai correcteur grammatical gratuit, mais reste un outil séparé, pas
// une IA qui comprend le sens ; la checklist de contenu comble ce manque en
// vérifiant simplement la présence des idées attendues.

import { store } from "../data/store.js?v=20260930a";
import { t } from "../data/i18n.js?v=20260930a";
import { recordSkill } from "../data/progress.js?v=20260930a";
import { EXPRESSION_ECRITE_PROMPTS_EN } from "../data/expression-ecrite-prompts-en.js?v=20260930a";
import { EXPRESSION_ORALE_PROMPTS_EN } from "../data/expression-orale-prompts-en.js?v=20260930a";
import { EXPRESSION_ORALE_PROMPTS_A2_EN } from "../data/expression-orale-prompts-a2-en.js?v=20260930a";
import { EXPRESSION_ECRITE_PROMPTS_A2_EN } from "../data/expression-ecrite-prompts-a2-en.js?v=20260930a";
import { EXPRESSION_ORALE_PROMPTS_B1_EN } from "../data/expression-orale-prompts-b1-en.js?v=20260930a";
import { EXPRESSION_ECRITE_PROMPTS_B1_EN } from "../data/expression-ecrite-prompts-b1-en.js?v=20260930a";
import { EXPRESSION_ORALE_PROMPTS_B2_EN } from "../data/expression-orale-prompts-b2-en.js?v=20260930a";
import { EXPRESSION_ECRITE_PROMPTS_B2_EN } from "../data/expression-ecrite-prompts-b2-en.js?v=20260930a";
import { EXPRESSION_ORALE_PROMPTS_A1_ES } from "../data/expression-orale-prompts-a1-es.js?v=20261001d";
import { EXPRESSION_ECRITE_PROMPTS_A1_ES } from "../data/expression-ecrite-prompts-a1-es.js?v=20261001d";
import { EXPRESSION_ORALE_PROMPTS_A2_ES } from "../data/expression-orale-prompts-a2-es.js?v=20261001d";
import { EXPRESSION_ECRITE_PROMPTS_A2_ES } from "../data/expression-ecrite-prompts-a2-es.js?v=20261001d";
import { EXPRESSION_ORALE_PROMPTS_B1_ES } from "../data/expression-orale-prompts-b1-es.js?v=20261001d";
import { EXPRESSION_ECRITE_PROMPTS_B1_ES } from "../data/expression-ecrite-prompts-b1-es.js?v=20261001d";
import { EXPRESSION_ORALE_PROMPTS_B2_ES } from "../data/expression-orale-prompts-b2-es.js?v=20261001d";
import { EXPRESSION_ECRITE_PROMPTS_B2_ES } from "../data/expression-ecrite-prompts-b2-es.js?v=20261001d";
import { AI_RELAY_URL } from "../data/ai-config.js?v=20260930a";

const LEVELS = ["A1", "A2", "B1", "B2", "C1", "C2"];

// Contenu disponible par palier, oral et écrit indépendamment l'un de
// l'autre (même logique que comprehension.js) : un palier peut avoir l'un
// sans l'autre. Pour A2, l'oral et l'écrit sont maintenant prêts tous les
// deux (10 appels + 10 messages, sur les mêmes 5 thèmes : santé, imprévus
// de voyage, goûts alimentaires, scolarité et un mariage familial).
//
// Depuis le 23/09 : rangé aussi PAR LANGUE (onglets Anglais / Espagnol /
// Portugais en haut de l'écran). Une langue sans contenu pour un palier
// affiche simplement "bientôt disponible", sans cas particulier.
const ORAL_BY_LANG = {
  en: { A1: EXPRESSION_ORALE_PROMPTS_EN, A2: EXPRESSION_ORALE_PROMPTS_A2_EN, B1: EXPRESSION_ORALE_PROMPTS_B1_EN, B2: EXPRESSION_ORALE_PROMPTS_B2_EN },
  es: { A1: EXPRESSION_ORALE_PROMPTS_A1_ES, A2: EXPRESSION_ORALE_PROMPTS_A2_ES, B1: EXPRESSION_ORALE_PROMPTS_B1_ES, B2: EXPRESSION_ORALE_PROMPTS_B2_ES },
};
const ECRITE_BY_LANG = {
  en: { A1: EXPRESSION_ECRITE_PROMPTS_EN, A2: EXPRESSION_ECRITE_PROMPTS_A2_EN, B1: EXPRESSION_ECRITE_PROMPTS_B1_EN, B2: EXPRESSION_ECRITE_PROMPTS_B2_EN },
  es: { A1: EXPRESSION_ECRITE_PROMPTS_A1_ES, A2: EXPRESSION_ECRITE_PROMPTS_A2_ES, B1: EXPRESSION_ECRITE_PROMPTS_B1_ES, B2: EXPRESSION_ECRITE_PROMPTS_B2_ES },
};
const LANG_FLAGS = { en: "🇬🇧", es: "🇪🇸", pt: "🇵🇹" };
const LANGUAGETOOL_LANG = { en: "en-US", es: "es", pt: "pt-PT" };
const SPEAK_LANG_BY_CODE = { en: "en-GB", es: "es-ES", pt: "pt-PT" };

function checklistResults(text, expectedPoints) {
  const lower = (text || "").toLowerCase();
  return expectedPoints.map((p) => ({
    label: p.label,
    met: p.keywords.some((k) => lower.includes(k.toLowerCase())),
  }));
}

// Voix préférée choisie dans Paramètres > Réglages généraux > Voix (ex.
// "Samantha", voix américaine) — mémorisée dans settings.preferredVoiceURI.
// "Écouter l'appel" l'ignorait complètement et forçait toujours une voix
// britannique par défaut, ce qui explique une voix différente de celle
// choisie ("Sam" au lieu de "Samantha") : même logique que lessons.html.
function pickPreferredVoice(langCode) {
  // La voix choisie dans Paramètres est une voix anglaise : on ne l'applique
  // qu'à l'anglais (sinon l'espagnol serait lu avec un accent anglais).
  if (!window.speechSynthesis || (langCode && langCode !== "en")) return null;
  try {
    const { settings } = store.get();
    const key = settings.preferredVoiceURI;
    if (!key) return null;
    const [name, voiceLang] = key.split("|");
    const voices = window.speechSynthesis.getVoices();
    return voices.find((v) => v.name === name && v.lang === voiceLang) || null;
  } catch (e) {
    return null;
  }
}

function esc(s) {
  return String(s == null ? "" : s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

// Correction détaillée par l'IA (B1/B2 : champ rubric du sujet) — même relais Cloudflare que les
// examens (mode "grade", voir cloudflare-worker-gemini.js). Barème sur 10.
async function gradeWithAi(prompt, answer, kind, level, confidence) {
  if (!/^https:\/\//.test(AI_RELAY_URL || "")) throw new Error("not_configured");
  const rubric = Array.isArray(prompt.rubric)
    ? prompt.rubric.map((r) => `${r.criterion} (${r.points} pts)`).join("; ")
    : String(prompt.rubric || "");
  const body = {
    mode: "grade", lang: "en", variant: "en-gb", level,
    task: {
      title: `Expression ${kind === "oral" ? "orale" : "écrite"} ${prompt.palier || level}`,
      instructions: [prompt.callText || prompt.message || "", prompt.task ? "Task: " + prompt.task : ""].join(" ").trim(),
      rubric, maxPoints: 10, reference: prompt.model || "", kind,
    },
    answer,
  };
  if (kind === "oral") body.mic = { confidence: confidence || null, typed: false };
  const ctrl = new AbortController();
  const timer = setTimeout(() => ctrl.abort(), 30000);
  try {
    const res = await fetch(AI_RELAY_URL, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body), signal: ctrl.signal });
    const g = await res.json().catch(() => ({}));
    if (!res.ok || typeof g.score !== "number") throw new Error(g.error || "relay_error");
    return { score: Math.max(0, Math.min(10, g.score)), feedback: String(g.feedback || ""), strengths: String(g.strengths || ""),
      corrections: Array.isArray(g.corrections) ? g.corrections.filter((c) => typeof c === "string").slice(0, 8) : [] };
  } finally { clearTimeout(timer); }
}

async function checkGrammar(text, ltLang) {
  const res = await fetch("https://api.languagetool.org/v2/check", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({ text, language: ltLang || "en-US" }).toString(),
  });
  if (!res.ok) throw new Error("languagetool_network");
  const data = await res.json();
  return data.matches || [];
}

export function renderExpression(container) {
  const { settings } = store.get();
  const lang = settings.interfaceLang;
  let selectedLang = settings.primaryLearningLang || "en";
  let selectedLevel = "A1";

  let ecriteIndex = 0;
  let ecriteChecking = false;
  let ecriteMatches = null;
  let ecriteError = false;
  let ecriteReplyText = "";

  // Aides B1/B2 : traduction de la consigne, réponse type (après avoir répondu), correction IA.
  const help = { oralFr: false, ecriteFr: false, oralModel: false, ecriteModel: false,
    oralAi: null, ecriteAi: null, oralAiBusy: false, ecriteAiBusy: false, oralAiErr: false, ecriteAiErr: false, oralConf: null };
  function resetHelp(which) {
    const keys = which === "oral" ? ["oralFr", "oralModel", "oralAi", "oralAiBusy", "oralAiErr"] : ["ecriteFr", "ecriteModel", "ecriteAi", "ecriteAiBusy", "ecriteAiErr"];
    keys.forEach((k) => { help[k] = (k.endsWith("Ai") ? null : false); });
  }

  let oraleIndex = 0;
  let oraleTranscript = "";
  let oraleRecording = false;
  let oraleSpeaking = false;
  let recognition = null;

  function paint() {
    const oralePrompts = (ORAL_BY_LANG[selectedLang] || {})[selectedLevel] || null;
    const ecritePrompts = (ECRITE_BY_LANG[selectedLang] || {})[selectedLevel] || null;

    container.innerHTML = `
      <div class="dash-greeting" style="padding:4px 0 10px">${t("expr_intro", lang)}</div>

      <div class="level-chip-row lang-chip-row" id="exprLangs">
        ${settings.langs.map((l) => `<button class="level-chip${l.code === selectedLang ? " active" : ""}" data-lang="${l.code}">${LANG_FLAGS[l.code] || ""} ${l.label}</button>`).join("")}
      </div>

      <div class="level-chip-row" id="exprLevels">
        ${LEVELS.map((l) => `<button class="level-chip${l === selectedLevel ? " active" : ""}" data-level="${l}">${l}</button>`).join("")}
      </div>

      <div class="card-3d" style="margin-bottom:14px">
        <div class="immersion-card" style="margin-bottom:0">
          <div class="immersion-icon">🗣️</div>
          <div>
            <div class="immersion-title">${t("expr_oral_title", lang)}</div>
            <div class="immersion-note">${t("expr_oral_desc", lang)}</div>
          </div>
        </div>
        ${oralePrompts ? oraleHtml(oralePrompts) : `<div class="card" style="color:var(--ink-soft);font-size:13px;margin-top:10px">${t("prog_not_ready", lang)}</div>`}
      </div>

      <div class="card-3d">
        <div class="immersion-card" style="margin-bottom:0">
          <div class="immersion-icon">✍️</div>
          <div>
            <div class="immersion-title">${t("expr_written_title", lang)}</div>
            <div class="immersion-note">${t("expr_written_desc", lang)}</div>
          </div>
        </div>
        ${ecritePrompts ? ecriteHtml(ecritePrompts) : `<div class="card" style="color:var(--ink-soft);font-size:13px;margin-top:10px">${t("prog_not_ready", lang)}</div>`}
      </div>
    `;

    container.querySelector("#exprLangs").addEventListener("click", (e) => {
      const chip = e.target.closest(".level-chip");
      if (!chip) return;
      selectedLang = chip.dataset.lang;
      try { window.speechSynthesis && window.speechSynthesis.cancel(); } catch (err) { /* rien */ }
      oraleIndex = 0; oraleTranscript = ""; oraleRecording = false; oraleSpeaking = false;
      ecriteIndex = 0; ecriteMatches = null; ecriteError = false; ecriteReplyText = "";
      resetHelp("oral"); resetHelp("ecrite");
      paint();
    });

    container.querySelector("#exprLevels").addEventListener("click", (e) => {
      const chip = e.target.closest(".level-chip");
      if (!chip) return;
      selectedLevel = chip.dataset.level;
      // On repart du premier appel/message du nouveau palier, et on efface
      // tout ce qui avait été capté/écrit pour l'ancien (sinon on pourrait
      // se retrouver avec l'index d'un palier qui n'existe pas dans l'autre).
      oraleIndex = 0; oraleTranscript = ""; oraleRecording = false; oraleSpeaking = false;
      ecriteIndex = 0; ecriteMatches = null; ecriteError = false; ecriteReplyText = "";
      resetHelp("oral"); resetHelp("ecrite");
      paint();
    });

    if (oralePrompts) wireOrale(oralePrompts);
    if (ecritePrompts) wireEcrite(ecritePrompts);
  }

  // ---------- Aides communes (B1/B2) ----------
  function helpTopHtml(prompt, which) {
    const open = help[which + "Fr"];
    return `
      ${prompt.palier ? `<div style="font-size:11.5px;color:var(--ink-soft);margin-top:6px">${t("expr_palier", lang)} ${esc(prompt.palier)}${prompt.focus ? ` · ${t("expr_focus_label", lang)} : ${esc(prompt.focus)}` : ""}</div>` : ""}
      ${prompt.task ? `<div class="card" style="margin-top:8px;font-size:13px"><b>${t("expr_task_label", lang)} :</b> ${esc(prompt.task)}</div>` : ""}
      ${prompt.fr ? `<button class="btn btn-ghost" data-help="${which}Fr" style="width:100%;margin-top:8px;font-size:13px">${open ? t("expr_translate_hide", lang) : t("expr_translate_btn", lang)}</button>
        ${open ? `<div class="card" style="margin-top:6px;font-size:13px;color:var(--ink-soft)">${esc(prompt.fr)}</div>` : ""}` : ""}
    `;
  }
  function helpBottomHtml(prompt, which, answered) {
    if (!prompt.model && !prompt.rubric) return "";
    const ai = help[which + "Ai"];
    return `
      ${prompt.rubric ? (answered ? `<button class="btn btn-primary" data-ai="${which}" style="width:100%;margin-top:10px" ${help[which + "AiBusy"] ? "disabled" : ""}>${help[which + "AiBusy"] ? t("expr_ai_busy", lang) : t("expr_ai_btn", lang)}</button>` : "") : ""}
      ${help[which + "AiErr"] ? `<div class="card" style="margin-top:8px;font-size:12.5px;color:var(--ink-soft)">${t("expr_ai_error", lang)}</div>` : ""}
      ${ai ? `<div class="card" style="margin-top:8px;font-size:13px">
          <div style="font-weight:800">${t("expr_ai_score", lang)} : ${Math.round(ai.score * 10) / 10} / 10</div>
          ${ai.feedback ? `<div style="margin-top:6px">${esc(ai.feedback).replace(/\n/g, "<br>")}</div>` : ""}
          ${ai.strengths ? `<div style="margin-top:6px">👍 ${esc(ai.strengths)}</div>` : ""}
          ${ai.corrections.length ? `<div style="font-weight:700;margin-top:6px">${t("expr_ai_fix", lang)}</div><ul style="margin:4px 0 0;padding-left:18px">${ai.corrections.map((c) => `<li>${esc(c)}</li>`).join("")}</ul>` : ""}
        </div>` : ""}
      ${prompt.model ? (answered
        ? `<button class="btn btn-ghost" data-help="${which}Model" style="width:100%;margin-top:10px">${help[which + "Model"] ? t("expr_model_hide", lang) : t("expr_model_btn", lang)}</button>
           ${help[which + "Model"] ? `<div class="card" style="margin-top:6px;font-size:13px"><div style="font-weight:700;margin-bottom:4px">${t("expr_model_title", lang)}</div>${esc(prompt.model)}</div>` : ""}`
        : `<div style="font-size:11.5px;color:var(--ink-soft);margin-top:8px">💡 ${t("expr_model_locked", lang)}</div>`) : ""}
    `;
  }
  function wireHelp(prompt, which, getAnswer) {
    container.querySelectorAll(`[data-help^="${which}"]`).forEach((b) => b.addEventListener("click", () => {
      const k = b.dataset.help; help[k] = !help[k]; paint();
    }));
    const aiBtn = container.querySelector(`[data-ai="${which}"]`);
    if (aiBtn) aiBtn.addEventListener("click", async () => {
      const answer = (getAnswer() || "").trim();
      if (!answer) return;
      help[which + "AiBusy"] = true; help[which + "AiErr"] = false; paint();
      try {
        help[which + "Ai"] = await gradeWithAi(prompt, answer, which === "oral" ? "oral" : "text", selectedLevel, help.oralConf);
        recordSkill(selectedLang, which === "oral" ? "eo" : "ee", help[which + "Ai"].score / 10);
      } catch (e) { help[which + "AiErr"] = true; }
      finally { help[which + "AiBusy"] = false; paint(); }
    });
  }

  // ---------- Expression orale ----------

  function oraleHtml(prompts) {
    const prompt = prompts[oraleIndex];
    const supported = !!(window.SpeechRecognition || window.webkitSpeechRecognition);
    return `
      <div class="card" style="margin-top:14px">
        <div style="font-weight:700;font-size:13px;color:var(--ink-soft)">${t("expr_orale_incoming", lang)} — ${prompt.from}</div>
        ${helpTopHtml(prompt, "oral")}
        <button class="btn btn-ghost" id="oraleListenBtn" style="width:100%;margin-top:10px" ${oraleSpeaking ? "disabled" : ""}>${t("expr_orale_listen_call_btn", lang)}</button>
        ${supported ? `
          <button class="btn btn-primary" id="oraleRecordBtn" style="width:100%;margin-top:10px" ${oraleSpeaking ? "disabled" : ""}>${oraleRecording ? t("expr_orale_recording", lang) : t("expr_orale_record_btn", lang)}</button>
          ${oraleSpeaking ? `<div style="font-size:11.5px;color:var(--ink-soft);margin-top:6px">${t("expr_orale_playing_note", lang)}</div>` : ""}
        ` : `<div class="card" style="margin-top:10px;font-size:12.5px;color:var(--ink-soft)">${t("expr_orale_not_supported", lang)}</div>`}
        ${oraleTranscript ? `
          <div style="margin-top:12px">
            <div style="font-weight:700;font-size:12.5px;color:var(--ink-soft)">${t("expr_orale_transcript_label", lang)}</div>
            <div class="card" style="margin-top:6px;font-size:13.5px">${oraleTranscript}</div>
            ${checklistHtml(checklistResults(oraleTranscript, prompt.expectedPoints), lang)}
          </div>
        ` : ""}
        ${helpBottomHtml(prompt, "oral", !!oraleTranscript)}
        <button class="btn btn-ghost" id="oraleNextBtn" style="width:100%;margin-top:10px">${t("expr_orale_next_prompt", lang)}</button>
      </div>
    `;
  }

  function wireOrale(prompts) {
    const prompt = prompts[oraleIndex];
    wireHelp(prompt, "oral", () => oraleTranscript);
    const listenBtn = container.querySelector("#oraleListenBtn");
    if (listenBtn) listenBtn.addEventListener("click", () => {
      try {
        if (!window.speechSynthesis) return;
        const u = new SpeechSynthesisUtterance(prompt.callText);
        const chosen = pickPreferredVoice(selectedLang);
        if (chosen) { u.voice = chosen; u.lang = chosen.lang; } else { u.lang = SPEAK_LANG_BY_CODE[selectedLang] || "en-GB"; }
        u.rate = 0.92;
        // Tant que l'appel se lit à voix haute, on bloque "Répondre à l'oral" :
        // sinon, sur un téléphone sans écouteurs, le micro capte le son du
        // haut-parleur (l'appel lui-même) au lieu de la voix de l'apprenant —
        // c'est ce qui causait des transcriptions absurdes (le texte de
        // l'appel recopié tel quel dans "Ce que l'app a entendu").
        oraleSpeaking = true;
        paint();
        u.onend = () => { oraleSpeaking = false; paint(); };
        u.onerror = () => { oraleSpeaking = false; paint(); };
        window.speechSynthesis.cancel();
        window.speechSynthesis.speak(u);
      } catch (e) { oraleSpeaking = false; /* synthèse vocale indisponible */ }
    });

    const recordBtn = container.querySelector("#oraleRecordBtn");
    if (recordBtn) recordBtn.addEventListener("click", () => {
      const Recognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      if (!Recognition) return;
      try {
        // Filet de sécurité supplémentaire : on coupe toute synthèse vocale
        // encore active avant de démarrer l'écoute, au cas où l'appel jouerait
        // encore (ou un reliquat d'une lecture précédente).
        window.speechSynthesis.cancel();
        recognition = new Recognition();
        recognition.lang = SPEAK_LANG_BY_CODE[selectedLang] || "en-GB";
        recognition.interimResults = false;
        recognition.maxAlternatives = 1;
        oraleRecording = true;
        paint();
        recognition.onresult = (e) => {
          oraleTranscript = e.results[0][0].transcript;
          // Jauges : expression orale = points attendus trouvés dans ce que le
          // micro a compris ; prononciation = confiance du micro (uniquement
          // quand le téléphone la donne — sinon on ne mesure rien).
          try {
            const pr = prompts[oraleIndex];
            const items = checklistResults(oraleTranscript, pr.expectedPoints || []);
            if (items.length) recordSkill(selectedLang, "eo", items.filter((x) => x.met).length / items.length);
            const conf = e.results[0][0].confidence;
            help.oralConf = conf > 0 ? Math.round(conf * 100) / 100 : null;
            help.oralAi = null; help.oralModel = false;
            if (conf > 0) recordSkill(selectedLang, "pr", conf);
          } catch (err) { /* mesure facultative */ }
          oraleRecording = false;
          paint();
        };
        recognition.onerror = () => { oraleRecording = false; paint(); };
        recognition.onend = () => { oraleRecording = false; };
        recognition.start();
      } catch (e) { oraleRecording = false; }
    });

    const nextBtn = container.querySelector("#oraleNextBtn");
    if (nextBtn) nextBtn.addEventListener("click", () => {
      oraleIndex = (oraleIndex + 1) % prompts.length;
      oraleTranscript = "";
      resetHelp("oral");
      paint();
    });
  }

  // ---------- Expression écrite ----------

  function ecriteHtml(prompts) {
    const prompt = prompts[ecriteIndex];
    return `
      <div class="card" style="margin-top:14px">
        <div style="font-weight:700;font-size:12.5px;color:var(--ink-soft)">${t("expr_ecrite_prompt_label", lang)} — ${prompt.from}</div>
        <div style="margin-top:6px;font-size:13.5px">${prompt.message}</div>
        ${helpTopHtml(prompt, "ecrite")}
      </div>
      <div style="font-weight:700;font-size:12.5px;color:var(--ink-soft);margin-top:12px">${t("expr_ecrite_reply_label", lang)}</div>
      <textarea class="translate-area" id="exprReplyInput" placeholder="${t("expr_write_placeholder", lang)}" style="min-height:100px;margin-top:6px">${ecriteReplyText}</textarea>
      <button class="btn btn-ghost" id="exprCheckBtn" style="width:100%;margin-top:10px" ${ecriteChecking ? "disabled" : ""}>${ecriteChecking ? t("expr_ecrite_checking", lang) : t("expr_check_btn", lang)}</button>
      ${ecriteError ? `<div class="card" style="margin-top:10px;font-size:12.5px;color:var(--ink-soft)">${t("expr_ecrite_error", lang)}</div>` : ""}
      ${ecriteMatches !== null ? `
        <div class="card" style="margin-top:10px">
          <div style="font-weight:800">${t("expr_ecrite_grammar_title", lang)}</div>
          ${ecriteMatches.length === 0 ? `<div style="font-size:13px;color:var(--accent);margin-top:4px">${t("expr_ecrite_no_issues", lang)}</div>` : `
            <ul style="margin:6px 0 0;padding-left:18px;font-size:13px">
              ${ecriteMatches.slice(0, 8).map((m) => `<li style="margin-bottom:4px">${m.message}${m.replacements && m.replacements[0] ? ` → <strong>${m.replacements[0].value}</strong>` : ""}</li>`).join("")}
            </ul>
          `}
        </div>
        <div class="card" style="margin-top:10px">
          <div style="font-weight:800">${t("expr_ecrite_checklist_title", lang)}</div>
          ${checklistHtml(checklistResults(ecriteReplyText, prompt.expectedPoints), lang)}
        </div>
      ` : ""}
      ${helpBottomHtml(prompt, "ecrite", ecriteMatches !== null)}
      <button class="btn btn-ghost" id="exprNextBtn" style="width:100%;margin-top:10px">${t("expr_ecrite_next_prompt", lang)}</button>
    `;
  }

  function wireEcrite(prompts) {
    wireHelp(prompts[ecriteIndex], "ecrite", () => ecriteReplyText);
    const textarea = container.querySelector("#exprReplyInput");
    if (textarea) textarea.addEventListener("input", (e) => { ecriteReplyText = e.target.value; });

    const checkBtn = container.querySelector("#exprCheckBtn");
    if (checkBtn) checkBtn.addEventListener("click", async () => {
      const text = ecriteReplyText.trim();
      if (!text) { ecriteMatches = null; ecriteError = false; return; }
      ecriteChecking = true; ecriteError = false; ecriteMatches = null;
      paint();
      try {
        ecriteMatches = await checkGrammar(text, LANGUAGETOOL_LANG[selectedLang]);
        // Jauges : expression écrite = points attendus présents ; grammaire =
        // moins il y a de fautes relevées, plus la jauge monte.
        const items = checklistResults(text, prompts[ecriteIndex].expectedPoints || []);
        if (items.length) recordSkill(selectedLang, "ee", items.filter((x) => x.met).length / items.length);
        recordSkill(selectedLang, "gr", Math.max(0, 1 - ecriteMatches.length / 5));
      } catch (e) {
        ecriteError = true;
        ecriteMatches = [];
      } finally {
        ecriteChecking = false;
        paint();
      }
    });
    const nextBtn = container.querySelector("#exprNextBtn");
    if (nextBtn) nextBtn.addEventListener("click", () => {
      ecriteIndex = (ecriteIndex + 1) % prompts.length;
      ecriteMatches = null; ecriteError = false; ecriteReplyText = "";
      resetHelp("ecrite");
      paint();
    });
  }

  // Résumé explicite au-dessus de la liste : c'est lui qui donne le vrai
  // verdict (contenu attendu trouvé ou non), pas le bloc grammaire — celui-ci
  // ne vérifie que l'orthographe/la grammaire et peut très bien ne "voir"
  // aucune faute dans une réponse hors sujet ("It's love" est grammaticalement
  // correct, mais ne répond à rien). Sans ce résumé, "Aucune erreur détectée"
  // pouvait donner l'impression trompeuse que tout était bon.
  function checklistHtml(items, lang) {
    const total = items.length;
    const metCount = items.filter((it) => it.met).length;
    const summaryKey = total === 0 ? null
      : metCount === total ? "expr_checklist_all_met"
      : metCount === 0 ? "expr_checklist_none_met"
      : "expr_checklist_partial";
    const summaryClass = metCount === total ? "lt-ok" : "lt-bad";
    return `
      ${summaryKey ? `<div class="${summaryClass}" style="font-weight:700;font-size:13px;margin-bottom:6px">${t(summaryKey, lang, { count: metCount, total })}</div>` : ""}
      <ul style="list-style:none;margin:6px 0 0;padding:0;font-size:13px">
        ${items.map((it) => `<li style="margin-bottom:4px">${it.met ? "✅" : "▫️"} ${it.label}</li>`).join("")}
      </ul>
    `;
  }

  paint();
}
