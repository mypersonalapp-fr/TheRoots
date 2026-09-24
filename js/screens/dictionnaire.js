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

// --- 23/09 : dictionnaire "langue étrangère → FRANÇAIS" ---
// Source principale désormais : le Wiktionnaire FRANÇAIS (fr.wiktionary.org),
// qui décrit aussi les mots anglais, espagnols et portugais… mais avec des
// définitions et des traductions d'exemples EN FRANÇAIS — bien plus utile
// pour un niveau A1/A2 qu'une définition "anglais → anglais". API publique
// de Wikimedia, gratuite, sans clé, autorisée depuis un navigateur
// (origin=*). Contenu sous licence CC BY-SA : la source est affichée sous
// les résultats. Si le Wiktionnaire ne connaît pas le mot (ou ne répond
// pas), on retombe automatiquement sur l'ancien dictionnaire
// (dictionaryapi.dev, définitions dans la langue apprise).

import { store } from "../data/store.js?v=20260924j";
import { t, langName } from "../data/i18n.js?v=20260924j";

// Nos codes de langue (en/es/pt) vers les codes attendus par l'API.
const API_LANG = { en: "en", es: "es", pt: "pt-BR" };
const DICT_LANGS = ["en", "es", "pt"];
const LOOKUP_TIMEOUT_MS = 8000;

// Cache en mémoire (le temps de la session dans l'appli, vidé à la
// fermeture) : une recherche déjà faite pour un mot + langue donnés
// réapparaît instantanément, sans repasser par le réseau. C'est ce qui
// réglait le plus la lenteur ressentie — Ashley cherche souvent plusieurs
// fois le même mot (pour le réécouter, comparer, etc.) et chaque recherche
// repartait sinon à zéro vers les APIs externes (dictionaryapi.dev,
// MyMemory), qui sont parfois lentes de leur côté.
const dictCache = new Map(); // clé "entries:<apiLang>:<mot>" -> résultat (ou null)
const translationCache = new Map(); // clé "tr:<from>:<to>:<mot>" -> texte (ou null)

async function lookupWord(word, apiLang, timeoutMs) {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeoutMs);
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

// L'API gratuite dictionaryapi.dev est parfois lente ou temporairement en
// erreur (panne passagère côté serveur) — plutôt que d'afficher tout de
// suite "dictionnaire indisponible", on retente une seconde fois (délai plus
// court) avant d'abandonner pour de bon. Un mot vraiment introuvable (404,
// lookupWord renvoie null sans lever d'erreur) ne déclenche jamais cette
// deuxième tentative.
async function lookupWordWithRetry(word, apiLang) {
  const cacheKey = `entries:${apiLang}:${word.toLowerCase()}`;
  if (dictCache.has(cacheKey)) return dictCache.get(cacheKey);
  let result;
  try {
    result = await lookupWord(word, apiLang, LOOKUP_TIMEOUT_MS);
  } catch (e) {
    result = await lookupWord(word, apiLang, 4000);
  }
  dictCache.set(cacheKey, result);
  return result;
}

// Traduction du mot cherché vers la langue de l'interface — un bonus qui ne
// doit jamais faire échouer la recherche : toute erreur renvoie simplement
// "pas de traduction" plutôt que de remonter une exception.
async function translateWord(word, fromLang, toLang) {
  if (!word || fromLang === toLang) return null;
  const cacheKey = `tr:${fromLang}:${toLang}:${word.toLowerCase()}`;
  if (translationCache.has(cacheKey)) return translationCache.get(cacheKey);
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), LOOKUP_TIMEOUT_MS);
    try {
      const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(word)}&langpair=${fromLang}|${toLang}`;
      const res = await fetch(url, { signal: controller.signal });
      if (!res.ok) { translationCache.set(cacheKey, null); return null; }
      const data = await res.json();
      const result = data?.responseData?.translatedText || null;
      translationCache.set(cacheKey, result);
      return result;
    } finally {
      clearTimeout(timeoutId);
    }
  } catch (e) {
    return null;
  }
}

// Wiktionnaire : nom de la section de langue et identifiant utilisés sur
// fr.wiktionary.org pour chaque langue apprise.
const WIKT_SECTION = { en: ["Anglais", "en"], es: ["Espagnol", "es"], pt: ["Portugais", "pt"] };
// Titres de sections qui ne sont PAS des natures de mot (on les ignore).
const WIKT_SKIP = /^(étymologie|prononciation|voir aussi|références|anagrammes|synonymes|antonymes|dérivés|apparentés|traductions|homophones|paronymes|vocabulaire|hyperonymes|hyponymes|holonymes|méronymes|variantes|notes|forme|faux-amis|expressions|phrases|proverbes|citations|dérivés dans d'autres langues)/i;
const wiktCache = new Map();

function textOf(node) {
  return (node && node.textContent ? node.textContent : "").replace(/\s+/g, " ").trim();
}

// Lit la page Wiktionnaire du mot et garde uniquement la section de la
// langue demandée. Renvoie le même format que dictionaryapi.dev (pour
// réutiliser l'affichage existant) : [{ word, phonetic, meanings: [{
// partOfSpeech, definitions: [{ definition, example, exampleTr }] }] }].
async function lookupWiktionnaire(word, dictLang) {
  const key = `${dictLang}:${word}`;
  if (wiktCache.has(key)) return wiktCache.get(key);
  const [sectionName, sectionId] = WIKT_SECTION[dictLang] || WIKT_SECTION.en;
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), LOOKUP_TIMEOUT_MS);
  let html;
  try {
    const url = `https://fr.wiktionary.org/w/api.php?action=parse&format=json&formatversion=2&prop=text&redirects=1&origin=*&page=${encodeURIComponent(word)}`;
    const res = await fetch(url, { signal: controller.signal });
    if (!res.ok) throw new Error("wikt_network");
    const data = await res.json();
    if (data.error) { wiktCache.set(key, null); return null; } // page inexistante
    html = data.parse && data.parse.text;
  } finally {
    clearTimeout(timeoutId);
  }
  if (!html) { wiktCache.set(key, null); return null; }

  const doc = new DOMParser().parseFromString(html, "text/html");
  const rootEl = doc.querySelector(".mw-parser-output") || doc.body;
  let inLang = false;
  let phonetic = "";
  let currentPos = null;
  const meanings = [];

  for (const child of Array.from(rootEl.children)) {
    // Les titres sont soit <h2>/<h3> directement, soit enveloppés dans
    // <div class="mw-heading mw-heading2|3"> (nouvelle présentation).
    const h = /^H[2-4]$/.test(child.tagName) ? child : child.querySelector(":scope > h2, :scope > h3, :scope > h4");
    if (h && h.tagName === "H2") {
      const langSpan = h.querySelector(".sectionlangue");
      const id = (langSpan && langSpan.id) || h.id || "";
      const title = textOf(h).replace(/\[.*?\]/g, "").trim();
      inLang = id === sectionId || id === sectionName || title === sectionName;
      currentPos = null;
      continue;
    }
    if (!inLang) continue;
    if (h) {
      const titredef = h.querySelector(".titredef");
      const title = textOf(titredef || h).replace(/\[.*?\]/g, "").trim();
      const isPos = (titredef || h.tagName === "H3") && !WIKT_SKIP.test(title);
      currentPos = isPos ? { partOfSpeech: title, definitions: [] } : null;
      if (currentPos) meanings.push(currentPos);
      continue;
    }
    if (!currentPos) continue;
    if (child.tagName === "P" && !phonetic) {
      const api = child.querySelector(".API");
      if (api) phonetic = textOf(api);
    }
    if (child.tagName === "OL") {
      for (const li of Array.from(child.children)) {
        if (li.tagName !== "LI") continue;
        const clone = li.cloneNode(true);
        clone.querySelectorAll("ul, ol, dl, .reference, sup").forEach((n) => n.remove());
        const definition = textOf(clone);
        if (!definition) continue;
        let example = "", exampleTr = "";
        const ex = li.querySelector(".example") || li.querySelector("ul > li");
        if (ex) {
          const q = ex.querySelector("q, bdi, i");
          example = textOf(q);
          const exClone = ex.cloneNode(true);
          exClone.querySelectorAll("q, bdi, .sources, .reference, sup").forEach((n) => n.remove());
          exClone.querySelectorAll("i").forEach((n) => { if (textOf(n) === example) n.remove(); });
          exampleTr = textOf(exClone).replace(/^[—–\-:\s]+/, "");
          if (!example) { example = textOf(ex); exampleTr = ""; }
        }
        currentPos.definitions.push({ definition, example, exampleTr });
        if (currentPos.definitions.length >= 5) break;
      }
    }
  }
  const useful = meanings.filter((m) => m.definitions.length);
  const result = useful.length ? [{ word, phonetic: phonetic || "", meanings: useful, source: "wiktionnaire" }] : null;
  wiktCache.set(key, result);
  return result;
}

// Wiktionnaire d'abord (définitions en français), puis ancien dictionnaire
// en secours. Une panne du Wiktionnaire ne bloque jamais la recherche.
async function lookupBest(word, dictLang) {
  try {
    const w = await lookupWiktionnaire(word, dictLang);
    if (w) return w;
    if (word !== word.toLowerCase()) {
      const w2 = await lookupWiktionnaire(word.toLowerCase(), dictLang);
      if (w2) return w2;
    }
  } catch (e) { /* on passe au dictionnaire de secours */ }
  return lookupWordWithRetry(word, API_LANG[dictLang]);
}

// Prononciation : lit à voix haute (Web Speech API) dans la langue apprise
// cherchée (pas la langue de l'interface) — le mot trouvé, et chaque exemple.
// Les boutons ne portent pas le texte à lire directement (des exemples avec
// des apostrophes/guillemets casseraient sinon l'attribut HTML) : ils portent
// juste des index, et le texte est relu depuis "lastEntries" au clic (voir
// plus bas, dans renderDictionnaire).
const SPEECH_LOCALE = { en: "en-GB", es: "es-ES", pt: "pt-BR", fr: "fr-FR" };

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
                    <span>“${d.example}”${d.exampleTr ? `<span style="display:block;font-style:normal;font-size:12.5px;margin-top:2px">→ ${d.exampleTr}</span>` : ""}</span>
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
  let dictLang = DICT_LANGS.includes(settings.primaryLearningLang) ? settings.primaryLearningLang : "en";

  container.innerHTML = `
    <div class="dash-greeting" style="padding:4px 0 10px">${t("dict_intro", lang)}</div>

    <div class="level-chip-row" id="dictLangRow">
      ${DICT_LANGS.map((c) => `<button class="level-chip${c === dictLang ? " active" : ""}" data-lang="${c}">${langName(c, lang)}</button>`).join("")}
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
  let lastTranslation = null;
  // Compteur de recherche : si une nouvelle recherche démarre avant que
  // l'ancienne ait fini de répondre (nouveau mot tapé vite), on ignore la
  // réponse tardive de l'ancienne au lieu de laisser un vieux résultat
  // s'afficher par-dessus le nouveau par accident.
  let searchSeq = 0;

  results.addEventListener("click", (e) => {
    const speakBtn = e.target.closest(".dict-speak");
    if (!speakBtn) return;
    if (speakBtn.dataset.kind === "translation") {
      if (lastTranslation) speak(lastTranslation, lang);
      return;
    }
    if (!lastEntries) return;
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

  // Recherche "progressive" : la traduction (rapide, via MyMemory) et la
  // définition (dictionaryapi.dev, parfois plus lente) s'affichent chacune
  // dès qu'elle est prête, au lieu d'attendre que les deux soient revenues
  // avant de montrer quoi que ce soit — avant, une définition lente faisait
  // patienter Ashley même quand la traduction, elle, était déjà prête
  // depuis longtemps. Avec le cache (voir plus haut), une recherche déjà
  // faite pour ce mot + cette langue revient maintenant instantanément.
  function doSearch() {
    const word = input.value.trim();
    if (!word) { results.innerHTML = `<div class="card" style="color:var(--ink-soft);font-size:13px">${t("dict_empty_input", lang)}</div>`; return; }

    const searchDictLang = dictLang;
    const searchToken = ++searchSeq;
    btn.disabled = true;

    const spinner = `<div class="card" style="color:var(--ink-soft);font-size:13px;display:flex;align-items:center"><span class="mini-spinner"></span>${t("dict_loading", lang)}</div>`;
    results.innerHTML = `<div id="dictTranslationBox"></div><div id="dictEntriesBox">${spinner}</div>`;

    const translationPromise = translateWord(word, searchDictLang, lang).then((translation) => {
      if (searchToken !== searchSeq) return;
      lastTranslation = translation;
      const box = results.querySelector("#dictTranslationBox");
      if (!box) return;
      box.innerHTML = translation ? `
        <div class="card" style="margin-bottom:10px">
          <div style="font-size:11.5px;color:var(--ink-soft);text-transform:uppercase;letter-spacing:.03em;font-weight:700">${t("dict_translation_label", lang)}</div>
          <div style="display:flex;align-items:baseline;gap:8px">
            <div style="font-size:16px;font-weight:800;margin-top:4px">${translation}</div>
            <button type="button" class="btn btn-ghost dict-speak" data-kind="translation" aria-label="${t("dict_listen_aria", lang)}" style="padding:2px 10px;font-size:15px;margin-left:auto">🔊</button>
          </div>
        </div>
      ` : "";
    });

    const entriesPromise = lookupBest(word, searchDictLang)
      .then((entries) => {
        if (searchToken !== searchSeq) return;
        lastDictLang = searchDictLang;
        lastEntries = entries;
        const box = results.querySelector("#dictEntriesBox");
        if (!box) return;
        box.innerHTML = entries
          ? renderEntries(entries, lang) + (entries[0] && entries[0].source === "wiktionnaire"
            ? `<div style="font-size:11px;color:var(--ink-soft);text-align:center;margin-top:4px">Source : <a href="https://fr.wiktionary.org/wiki/${encodeURIComponent(entries[0].word)}" target="_blank" rel="noopener" style="color:inherit">Wiktionnaire</a> (licence CC BY-SA)</div>`
            : "")
          : `<div class="card" style="color:var(--ink-soft);font-size:13px">${t("dict_not_found", lang)}</div>`;
      })
      .catch(() => {
        if (searchToken !== searchSeq) return;
        const box = results.querySelector("#dictEntriesBox");
        if (box) box.innerHTML = `<div class="card" style="color:var(--ink-soft);font-size:13px">${t("dict_error", lang)}</div>`;
      });

    Promise.allSettled([translationPromise, entriesPromise]).then(() => {
      if (searchToken === searchSeq) btn.disabled = false;
    });
  }

  btn.addEventListener("click", doSearch);
  input.addEventListener("keydown", (e) => { if (e.key === "Enter") doSearch(); });
}
