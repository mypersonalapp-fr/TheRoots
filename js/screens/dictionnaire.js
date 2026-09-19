// The Roots — Dictionnaire : recherche de mots (définitions, prononciation,
// exemples) dans la langue apprise choisie, indépendant de l'outil de
// traduction (traduction.js). Utilise l'API gratuite et libre d'utilisation
// dictionaryapi.dev (pas de clé nécessaire), qui couvre l'anglais,
// l'espagnol et le portugais (variante brésilienne "pt-BR" uniquement).

import { store } from "../data/store.js";
import { t, langName } from "../data/i18n.js";

// Nos codes de langue (en/es/pt) vers les codes attendus par l'API.
const API_LANG = { en: "en", es: "es", pt: "pt-BR" };
const DICT_LANGS = ["en", "es", "pt"];

async function lookupWord(word, apiLang) {
  const url = `https://api.dictionaryapi.dev/api/v2/entries/${apiLang}/${encodeURIComponent(word)}`;
  const res = await fetch(url);
  if (res.status === 404) return null; // mot introuvable
  if (!res.ok) throw new Error("dict_network");
  return res.json();
}

function renderEntries(entries, lang) {
  return entries.map((entry) => `
    <div class="card" style="margin-bottom:10px">
      <div style="display:flex;align-items:baseline;gap:8px;flex-wrap:wrap">
        <div style="font-weight:800;font-size:17px">${entry.word}</div>
        ${entry.phonetic ? `<div style="color:var(--ink-soft);font-size:13px">${entry.phonetic}</div>` : ""}
      </div>
      ${(entry.meanings || []).map((m) => `
        <div style="margin-top:10px">
          <div style="font-weight:700;font-size:12.5px;color:var(--accent);text-transform:uppercase;letter-spacing:.03em">${m.partOfSpeech || ""}</div>
          <ol style="margin:6px 0 0;padding-left:18px;font-size:13.5px">
            ${(m.definitions || []).slice(0, 4).map((d) => `
              <li style="margin-bottom:6px">
                ${d.definition}
                ${d.example ? `<div style="color:var(--ink-soft);font-style:italic;margin-top:2px">“${d.example}”</div>` : ""}
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
    try {
      const entries = await lookupWord(word, API_LANG[dictLang]);
      if (!entries) {
        results.innerHTML = `<div class="card" style="color:var(--ink-soft);font-size:13px">${t("dict_not_found", lang)}</div>`;
      } else {
        results.innerHTML = renderEntries(entries, lang);
      }
    } catch (e) {
      results.innerHTML = `<div class="card" style="color:var(--ink-soft);font-size:13px">${t("dict_error", lang)}</div>`;
    } finally {
      btn.disabled = false;
    }
  }

  btn.addEventListener("click", doSearch);
  input.addEventListener("keydown", (e) => { if (e.key === "Enter") doSearch(); });
}
