// The Roots — Traduction multi-langue : outil ponctuel de traduction.
//
// Branché sur DeepL (souvent jugé supérieur à Google Traduction), via un petit
// relais technique séparé (Cloudflare Worker) qui garde la clé DeepL secrète —
// elle n'apparaît jamais dans le code de l'appli ni dans le téléphone.
// Voir cloudflare-worker-deepl.js à la racine du dépôt pour ce relais.
//
// Si le relais DeepL est indisponible (pas encore configuré, ou en panne), on
// retombe automatiquement sur MyMemory (dictionnaire libre, sans clé) pour que
// la traduction continue de fonctionner quand même, en moins bonne qualité.
//
// DeepL gère le formel/informel (ex. tu/vous) pour le français, l'espagnol et
// le portugais, mais pas pour l'anglais (qui ne fait pas cette distinction).
// DeepL ne distingue pas non plus l'espagnol colombien de l'espagnol d'Espagne
// (un seul "ES" côté DeepL) — les deux variantes choisies dans l'appli donnent
// donc la même traduction espagnole pour l'instant.

import { store } from "../data/store.js?v=20260924e";
import { t, langName, variantName } from "../data/i18n.js?v=20260924e";

// Remplace cette URL par celle de TON Worker une fois déployé sur Cloudflare
// (donnée à la fin du déploiement, du style https://xxxxx.ton-compte.workers.dev).
const DEEPL_RELAY_URL = "REMPLACE-PAR-TON-URL-CLOUDFLARE-WORKER";

// Nom du français lui-même (pas dans LANG_NAMES de i18n.js, qui ne couvre que
// les langues apprises) — traduit dans les 4 langues d'interface disponibles.
const FR_NAME = { fr: "Français", en: "French", es: "Francés", pt: "Francês" };

// Correspondance entre les codes utilisés ici (ceux attendus par DeepL/MyMemory)
// et les codes groupe/variante de i18n.js (en/es/pt + en-gb/en-us/es-co/es-es/pt-br/pt-pt).
const CODE_MAP = {
  "en-GB": { group: "en", variant: "en-gb" },
  "en-US": { group: "en", variant: "en-us" },
  "es-CO": { group: "es", variant: "es-co" },
  "es-ES": { group: "es", variant: "es-es" },
  "pt-BR": { group: "pt", variant: "pt-br" },
  "pt-PT": { group: "pt", variant: "pt-pt" },
};

function labelFor(code, uiLang) {
  if (code === "fr") return FR_NAME[uiLang] || FR_NAME.fr;
  const m = CODE_MAP[code];
  if (!m) return code;
  return `${langName(m.group, uiLang)} (${variantName(m.variant, uiLang)})`;
}

const LANGS = ["fr", "en-GB", "en-US", "es-CO", "es-ES", "pt-BR", "pt-PT"];

// Correspondance entre nos codes de langue et ceux attendus par DeepL.
const DEEPL_SOURCE = { "fr": "FR", "en-GB": "EN", "en-US": "EN", "es-CO": "ES", "es-ES": "ES", "pt-BR": "PT", "pt-PT": "PT" };
const DEEPL_TARGET = { "fr": "FR", "en-GB": "EN-GB", "en-US": "EN-US", "es-CO": "ES", "es-ES": "ES", "pt-BR": "PT-BR", "pt-PT": "PT-PT" };

// Langues cibles pour lesquelles DeepL sait adapter le registre formel/informel.
const SUPPORTS_FORMALITY = new Set(["fr", "es-CO", "es-ES", "pt-BR", "pt-PT"]);

function isRelayConfigured() {
  return DEEPL_RELAY_URL && !DEEPL_RELAY_URL.startsWith("REMPLACE-PAR-TON-URL");
}

async function translateWithDeepL(text, fromCode, toCode, formality) {
  const res = await fetch(DEEPL_RELAY_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      text,
      source_lang: DEEPL_SOURCE[fromCode],
      target_lang: DEEPL_TARGET[toCode],
      formality: SUPPORTS_FORMALITY.has(toCode) ? formality : undefined,
    }),
  });
  if (!res.ok) throw new Error("deepl_network");
  const data = await res.json();
  const translated = data?.translations?.[0]?.text;
  if (!translated) throw new Error("deepl_empty");
  return translated;
}

async function translateWithMyMemory(text, fromCode, toCode) {
  // MyMemory attend des codes courts sans variante régionale (fr, en, es, pt).
  const short = (c) => c.split("-")[0];
  const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=${short(fromCode)}|${short(toCode)}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error("mymemory_network");
  const data = await res.json();
  const translated = data?.responseData?.translatedText;
  if (!translated) throw new Error("mymemory_empty");
  return translated;
}

async function translateWith(text, fromCode, toCode, formality) {
  if (isRelayConfigured()) {
    try {
      return { text: await translateWithDeepL(text, fromCode, toCode, formality), source: "deepl" };
    } catch (e) {
      // Le relais DeepL a échoué (panne, quota dépassé…) → on retombe sur MyMemory plutôt que d'échouer complètement.
    }
  }
  return { text: await translateWithMyMemory(text, fromCode, toCode), source: "mymemory" };
}

// Prononciation du résultat traduit, dans la langue cible choisie (pas la
// langue de départ). La préférence de voix choisie dans Paramètres >
// Réglages généraux > Voix ne couvre que l'anglais (voir settings.js,
// englishVoices()), donc on ne l'applique que pour en-GB/en-US ; pour les
// autres langues on garde la voix par défaut du système.
const SPEECH_LOCALE = { fr: "fr-FR", "en-GB": "en-GB", "en-US": "en-US", "es-CO": "es-CO", "es-ES": "es-ES", "pt-BR": "pt-BR", "pt-PT": "pt-PT" };

function pickPreferredVoice(code) {
  if (!window.speechSynthesis || (code !== "en-GB" && code !== "en-US")) return null;
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

function speak(text, code) {
  if (!window.speechSynthesis || !text) return;
  try {
    const u = new SpeechSynthesisUtterance(text);
    const chosen = pickPreferredVoice(code);
    if (chosen) { u.voice = chosen; u.lang = chosen.lang; } else { u.lang = SPEECH_LOCALE[code] || "en-GB"; }
    u.rate = 0.92;
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(u);
  } catch (e) { /* synthèse vocale indisponible sur cet appareil */ }
}

export function renderTraduction(container) {
  const { settings } = store.get();
  const lang = settings.interfaceLang;
  container.innerHTML = `
    <div class="dash-greeting" style="padding:4px 0 10px">
      ${t("tr_intro", lang)}
    </div>

    <div class="card-3d">
      <div class="translate-box">
        <div class="translate-lang-row">
          <select class="translate-lang-select" id="langFrom">
            ${LANGS.map((code, i) => `<option value="${code}"${i === 0 ? " selected" : ""}>${labelFor(code, lang)}</option>`).join("")}
          </select>
          <button class="translate-swap" id="langSwap" aria-label="${t("tr_aria_swap", lang)}">⇄</button>
          <select class="translate-lang-select" id="langTo">
            ${LANGS.map((code, i) => `<option value="${code}"${i === 1 ? " selected" : ""}>${labelFor(code, lang)}</option>`).join("")}
          </select>
        </div>

        <div class="translate-lang-row" id="formalityRow">
          <select class="translate-lang-select" id="formalitySelect">
            <option value="default">${t("tr_formality_standard", lang)}</option>
            <option value="less">${t("tr_formality_informal", lang)}</option>
            <option value="more">${t("tr_formality_formal", lang)}</option>
          </select>
        </div>

        <textarea class="translate-area" id="translateInput" placeholder="${t("tr_input_placeholder", lang)}"></textarea>

        <button class="btn btn-primary" id="translateBtn" style="width:100%">${t("tr_translate_btn", lang)}</button>

        <div style="display:flex;align-items:flex-start;gap:8px">
          <div class="translate-output" id="translateOutput" style="flex:1">${t("tr_output_placeholder", lang)}</div>
          <button type="button" class="btn btn-ghost" id="translateSpeakBtn" aria-label="${t("dict_listen_aria", lang)}" style="display:none;flex:0 0 auto;padding:6px 12px;font-size:16px">🔊</button>
        </div>
        <div class="translate-hint" id="translateHint">${isRelayConfigured() ? t("tr_hint_deepl", lang) : t("tr_hint_fallback_static", lang)}</div>
      </div>
    </div>
  `;

  const fromSel = container.querySelector("#langFrom");
  const toSel = container.querySelector("#langTo");
  const formalityRow = container.querySelector("#formalityRow");
  const formalitySel = container.querySelector("#formalitySelect");
  const input = container.querySelector("#translateInput");
  const output = container.querySelector("#translateOutput");
  const hint = container.querySelector("#translateHint");
  const btn = container.querySelector("#translateBtn");
  const speakBtn = container.querySelector("#translateSpeakBtn");
  let lastResultText = "";

  function updateFormalityVisibility() {
    formalityRow.style.display = SUPPORTS_FORMALITY.has(toSel.value) ? "flex" : "none";
  }
  updateFormalityVisibility();
  toSel.addEventListener("change", updateFormalityVisibility);

  container.querySelector("#langSwap").addEventListener("click", () => {
    const tmp = fromSel.value; fromSel.value = toSel.value; toSel.value = tmp;
    updateFormalityVisibility();
  });

  btn.addEventListener("click", async () => {
    const text = input.value.trim();
    speakBtn.style.display = "none";
    if (!text) { output.textContent = t("tr_empty_input", lang); return; }
    output.textContent = t("tr_translating", lang);
    btn.disabled = true;
    try {
      const result = await translateWith(text, fromSel.value, toSel.value, formalitySel.value);
      output.textContent = result.text;
      lastResultText = result.text;
      speakBtn.style.display = "inline-flex";
      hint.textContent = result.source === "deepl"
        ? t("tr_hint_deepl", lang)
        : (isRelayConfigured() ? t("tr_hint_fallback", lang) : t("tr_hint_fallback_static", lang));
    } catch (e) {
      output.textContent = t("tr_error", lang);
    } finally {
      btn.disabled = false;
    }
  });

  speakBtn.addEventListener("click", () => speak(lastResultText, toSel.value));
}
