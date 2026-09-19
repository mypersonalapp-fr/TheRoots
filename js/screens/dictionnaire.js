// The Roots — Dictionnaire : recherche de mots (définitions, prononciation,
// exemples) dans la langue apprise choisie, indépendant de l'outil de
// traduction (traduction.js). Utilise l'API gratuite et libre d'utilisation
// dictionaryapi.dev (pas de clé nécessaire), qui couvre l'anglais,
// l'espagnol et le portugais (variante brésilienne "pt-BR" uniquement).
//
// En plus des définitions (dans la langue apprise, donc pas toujours faciles
// à comprendre pour un niveau A1), on affiche aussi une petite traduction du
// mot cherché vers la langue de l'interface, via MyMemory (même service que
// traduction.js, sans clé). Les deux recherches partent en parallèle : si le
// dictionnaire échoue ou met du temps (API externe, parfois lente ou
// temporairement indisponible), la traduction peut quand même s'afficher —
// et inversement. Un timeout est posé sur l'appel au dictionnaire pour ne
// jamais rester bloqué indéfiniment sur "Recherche en cours…".

import { store } from "../data/store.js";
import { t, langName } from "../data/i18n.js";

// Nos codes de langue (en/es/pt) vers les codes attendus par l'API.
const API_LANG = { en: "en", es: "es", pt: "pt-BR" };
const DICT_LANGS = ["en", "es", "pt"];
const LOOKUP_TIMEOUT_MS = 12000;

async function lookupWord(word, apiLang) {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), LOOKUP_TIMEOUT_MS);
  try {
    const url = `https://api.dictionaryapi.dev/api/v2/entries/${apiLang}/${encodeURIComponent(word)}`;
    const res = await fetch(url, { signal: controller.signal });
    if (res.status === 404) return null; // mot introuvable
    if (!res.ok) throw new Error("dict_network");
    return await res.json();
  } finally {
    clearTimeout(timeoutId);
  }
}

// Traduction du mot cherché vers la langue de l'interface — un bonus qui ne
// doit jamais faire échouer la recherche : toute erreur renvoie simplement
// "pas de traduction" plutôt que de remonter une exception.
async function translateWord(word, fromLang, toLang) {
  if (!word || fromLang === toLang) return null;
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), LOOKUP_TIMEOUT_MS);
    try {
      const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(word)}&langpair=${fromLang}|${toLang}`;
      const res = await fetch(url, { signal: controller.signal });
      if (!res.ok) return null;
      const data = await res.json();
      return data?.responseData?.translatedText || null;
    } finally {
      clearTimeout(timeoutId);
    }
  } catch (e) {
    return null;
  }
}

// Prononciation : lit à voix haute (Web Speech API) dans la langue apprise
// cherchée (pas la langue de l'interface) — le mot trouvé, et chaque exemple.
// Les boutons ne portent pas le texte à lire directement (des exemples avec
// des apostrophes/guillemets casseraient sinon l'attribut HTML) : ils portent
// juste des index, et le texte est relu depuis "lastEntries" au clic (voir
// plus bas, dans renderDictionnaire).
const SPEECH_LOCALE = { en: "en-GB", es: "es-ES", pt: "pt-BR" };

// Voix préférée choisie dans Paramètres > Réglages généraux > Voix (ex.
// "Samantha", voix américaine) — ce réglage ne couvre que l'anglais (voir
// settings.js, englishVoices()), donc on ne l'applique que pour dictLang
// "en" ; pour l'espagnol/le portugais on garde la voix par défaut du système.
function pickPreferredVoice(dictLang) {
  if (!window.speechSynthesis || dictLang !== "en") return null;
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

function speak(text, dictLang) {
  if (!window.speechSynthesis || !text) return;
  try {
    const u = new SpeechSynthesisUtterance(text);
    const chosen = pickPreferredVoice(dictLang);
    if (chosen) { u.voice = chosen; u.lang = chosen.lang; } else { u.lang = SPEECH_LOCALE[dictLang] || "en-GB"; }
    u.rate = 0.92;
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(u);
  } catch (e) { /* synthèse vocale indisponible sur cet appareil */ }
}

function renderEntries(entries, lang) {
  return entries.map((entry, ei) => `
    <div class="card" style="margin-bottom:10px">
      <div style="display:flex;align-items:baseline;gap:8px;flex-wrap:wrap">
        <div style="font-weight:800;font-size:17px">${entry.word}</div>
        ${entry.phonetic ? `<div style="color:var(--ink-soft);font-size:13px">${entry.phonetic}</div>` : ""}
        <button type="button" class="btn btn-ghost dict-speak" data-entry="${ei}" data-kind="word" aria-label="${t("dict_listen_aria", lang)}" style="padding:2px 10px;font-size:15px;margin-left:auto">🔊</button>
      </div>
      ${(entry.meanings || []).map((m, mi) => `
        <div style="margin-top:10px">
          <div style="font-weight:700;font-size:12.5px;color:var(--accent);text-transform:uppercase;letter-spacing:.03em">${m.partOfSpeech || ""}</div>
          <ol style="margin:6px 0 0;padding-left:18px;font-size:13.5px">
            ${(m.definitions || []).slice(0, 4).map((d, di) => `
              <li style="margin-bottom:6px">
                ${d.definition}
                ${d.example ? `
                  <div style="color:var(--ink-soft);font-style:italic;margin-top:2px;display:flex;align-items:center;gap:6px">
                    <span>“${d.example}”</span>
                    <button type="button" class="btn btn-ghost dict-speak" data-entry="${ei}" data-kind="example" data-meaning="${mi}" data-def="${di}" aria-label="${t("dict_listen_aria", lang)}" style="padding:0 7px;font-size:12.5px;flex:0 0 auto">🔊</button>
                  </div>
                ` : ""}
              </li>
            `).join("")}
          </ol>
        </div>
      `).join("")}
    </div>
  `).join("");
}

export function renderDictionnaire(container) {
  const { settings } = store.get();
  const lang = settings.interfaceLang;
  let dictLang = "en";

  container.innerHTML = `
    <div class="dash-greeting" style="padding:4px 0 10px">${t("dict_intro", lang)}</div>

    <div class="level-chip-row" id="dictLangRow">
      ${DICT_LANGS.map((c, i) => `<button class="level-chip${i === 0 ? " active" : ""}" data-lang="${c}">${langName(c, lang)}</button>`).join("")}
    </div>

    <div class="card-3d">
      <div class="translate-box">
        <div class="translate-lang-row">
          <input type="text" class="translate-lang-select" id="dictInput" style="flex:1" placeholder="${t("dict_search_placeholder", lang)}" autocapitalize="none" autocorrect="off"/>
          <button class="btn btn-primary" id="dictSearchBtn" style="flex:0 0 auto;padding:11px 16px">${t("dict_search_btn", lang)}</button>
        </div>
        <div id="dictPtNote" style="font-size:11.5px;color:var(--ink-soft);margin-top:6px;display:none">${t("dict_pt_note", lang)}</div>
      </div>
    </div>

    <div id="dictResults" style="margin-top:14px"></div>
  `;

  const langRow = container.querySelector("#dictLangRow");
  const input = container.querySelector("#dictInput");
  const btn = container.querySelector("#dictSearchBtn");
  const results = container.querySelector("#dictResults");
  const ptNote = container.querySelector("#dictPtNote");

  // Dernier résultat affiché + langue de cette recherche — utilisés par les
  // boutons 🔊 (voir renderEntries/speak plus haut) pour retrouver le texte
  // exact à lire sans avoir eu à l'encoder dans un attribut HTML.
  let lastEntries = null;
  let lastDictLang = dictLang;

  results.addEventListener("click", (e) => {
    const speakBtn = e.target.closest(".dict-speak");
    if (!speakBtn || !lastEntries) return;
    const entry = lastEntries[Number(speakBtn.dataset.entry)];
    if (!entry) return;
    if (speakBtn.dataset.kind === "word") {
      speak(entry.word, lastDictLang);
    } else if (speakBtn.dataset.kind === "example") {
      const meaning = entry.meanings && entry.meanings[Number(speakBtn.dataset.meaning)];
      const def = meaning && meaning.definitions && meaning.definitions[Number(speakBtn.dataset.def)];
      if (def && def.example) speak(def.example, lastDictLang);
    }
  });

  function updatePtNote() {
    ptNote.style.display = dictLang === "pt" ? "block" : "none";
  }
  updatePtNote();

  langRow.addEventListener("click", (e) => {
    const chip = e.target.closest(".level-chip");
    if (!chip) return;
    dictLang = chip.dataset.lang;
    langRow.querySelectorAll(".level-chip").forEach((c) => c.classList.toggle("active", c === chip));
    updatePtNote();
  });

  async function doSearch() {
    const word = input.value.trim();
    if (!word) { results.innerHTML = `<div class="card" style="color:var(--ink-soft);font-size:13px">${t("dict_empty_input", lang)}</div>`; return; }
    results.innerHTML = `<div class="card" style="color:var(--ink-soft);font-size:13px">${t("dict_loading", lang)}</div>`;
    btn.disabled = true;

    const [entriesResult, translationResult] = await Promise.allSettled([
      lookupWord(word, API_LANG[dictLang]),
      translateWord(word, dictLang, lang),
    ]);

    const translation = translationResult.status === "fulfilled" ? translationResult.value : null;
    const translationHtml = translation ? `
      <div class="card" style="margin-bottom:10px">
        <div style="font-size:11.5px;color:var(--ink-soft);text-transform:uppercase;letter-spacing:.03em;font-weight:700">${t("dict_translation_label", lang)}</div>
        <div style="font-size:16px;font-weight:800;margin-top:4px">${translation}</div>
      </div>
    ` : "";

    lastDictLang = dictLang;
    lastEntries = entriesResult.status === "fulfilled" ? entriesResult.value : null;

    if (entriesResult.status === "rejected") {
      results.innerHTML = translationHtml + `<div class="card" style="color:var(--ink-soft);font-size:13px">${t("dict_error", lang)}</div>`;
    } else if (!entriesResult.value) {
      results.innerHTML = translationHtml + `<div class="card" style="color:var(--ink-soft);font-size:13px">${t("dict_not_found", lang)}</div>`;
    } else {
      results.innerHTML = translationHtml + renderEntries(entriesResult.value, lang);
    }
    btn.disabled = false;
  }

  btn.addEventListener("click", doSearch);
  input.addEventListener("keydown", (e) => { if (e.key === "Enter") doSearch(); });
}
