// The Roots — onglet "Mes cours" : une grille de petits "cubes", un par
// langue (anglais/espagnol/portugais) plus un 4e cube "Mon livret". On
// touche un cube langue pour voir son niveau actuel et ses cours en PDF ;
// si la langue n'a pas encore de niveau, le test de niveau se lance depuis
// là et les cours restent verrouillés tant qu'il n'est pas fait. Une fois
// le test passé, le score obtenu reste gardé pour toujours comme "niveau
// d'entrée" (distinct du "niveau actuel", qui lui peut évoluer avec la
// progression), pour pouvoir se comparer dans le temps. "Mon livret"
// rassemble ces résultats pour toutes les langues, façon livret scolaire.

import { store } from "../data/store.js";
import { renderLevelTest } from "./level-test.js";
import { t, formatDate } from "../data/i18n.js";

// Petit drapeau à côté du nom de chaque langue — celui de l'accent choisi
// une fois qu'une variante est suivie (ex. 🇺🇸 pour l'anglais américain),
// sinon un drapeau générique pour le groupe de langue tant qu'aucun accent
// n'est encore choisi.
const GROUP_FLAGS = { en: "🇬🇧", es: "🇪🇸", pt: "🇵🇹" };
const VARIANT_FLAGS = { "en-gb": "🇬🇧", "en-us": "🇺🇸", "es-co": "🇨🇴", "es-es": "🇪🇸", "pt-br": "🇧🇷", "pt-pt": "🇵🇹" };
function flagFor(l) {
  const variantCode = l.variants?.find((v) => v.code === l.selectedVariant)?.code;
  return (variantCode && VARIANT_FLAGS[variantCode]) || GROUP_FLAGS[l.code] || "";
}

export function renderMesCours(container, shellRoot) {
  let openCode = null; // code de la langue ouverte, ou null = liste
  let openLivret = false;

  paint();

  function paint() {
    if (openLivret) return paintLivret();
    if (openCode) return paintLangDetail(openCode);
    return paintList();
  }

  function paintList() {
    const { settings } = store.get();
    const lang = settings.interfaceLang;
    container.innerHTML = `
      <div class="dash-box">
        <h3>${t("mc_my_languages", lang)}</h3>
        <div class="mc-cube-grid">
          ${settings.langs.map((l) => {
            const variant = l.variants?.find((v) => v.code === l.selectedVariant);
            const status = !l.leveled
              ? t("mc_level_test_todo", lang)
              : variant ? t("mc_level_variant", lang, { level: l.level, variant: variant.label }) : t("mc_level_choose_course", lang, { level: l.level });
            return `
            <div class="mc-cube-wrap">
              <button class="card mc-cube" data-code="${l.code}">
                <div class="mc-cube-lang">${flagFor(l)} ${l.label}</div>
                <div class="mc-cube-status">${status}</div>
              </button>
              <div class="mc-cube-gauge${l.leveled ? "" : " mc-cube-gauge-empty"}"><div class="mc-cube-gauge-fill" style="width:${l.leveled ? Math.round((l.progress||0)*100) : 0}%"></div></div>
            </div>
          `;
          }).join("")}

          <div class="mc-cube-wrap">
            <button class="card mc-cube mc-cube-livret" id="mcOpenLivret">
              <div class="mc-cube-lang">📘 ${t("mc_livret_title", lang)}</div>
              <div class="mc-cube-status">${t("mc_livret_subtitle", lang)}</div>
            </button>
            <div class="mc-cube-gauge mc-cube-gauge-empty" style="visibility:hidden"><div class="mc-cube-gauge-fill"></div></div>
          </div>
        </div>
      </div>
    `;
    container.querySelectorAll(".mc-cube[data-code]").forEach((cardEl) => {
      cardEl.addEventListener("click", () => { openCode = cardEl.dataset.code; paint(); });
    });
    const livretBtn = container.querySelector("#mcOpenLivret");
    if (livretBtn) livretBtn.addEventListener("click", () => { openLivret = true; paint(); });
  }

  // --- "Mon livret" : vue d'ensemble façon livret scolaire — le résultat du
  // test de niveau (niveau d'entrée, daté) et le niveau/progression actuels,
  // pour chaque langue déjà nivelée. Les notes détaillées par leçon/contrôle
  // ne sont pas encore remontées ici (elles vivent aujourd'hui uniquement
  // dans lessons.html) — prochaine étape si besoin : faire remonter chaque
  // score de Grand Contrôle jusqu'ici pour un vrai historique de notes. ---
  function paintLivret() {
    const { settings } = store.get();
    const lang = settings.interfaceLang;
    const leveledLangs = settings.langs.filter((l) => l.leveled);
    container.innerHTML = `
      <button class="settings-back" id="mcLivretBack">${t("mc_back", lang)}</button>
      <div class="dash-box">
        <h3>📘 ${t("mc_livret_title", lang)}</h3>
        ${leveledLangs.length === 0 ? `
          <div class="card" style="color:var(--ink-soft);font-size:13px">${t("mc_livret_empty", lang)}</div>
        ` : leveledLangs.map((l) => `
          <div class="card mc-livret-row">
            <div style="font-weight:800">${flagFor(l)} ${l.label}</div>
            <div class="mc-livret-grid">
              <div class="mc-livret-cell">
                <div class="mc-livret-cell-label">${t("mc_entry_level", lang)}</div>
                <span class="cefr-level-badge">${l.entryLevel || l.level}</span>
                <div class="mc-livret-cell-sub">${l.entryDate ? formatDate(l.entryDate, lang) : ""}</div>
              </div>
              <div class="mc-livret-cell">
                <div class="mc-livret-cell-label">${t("mc_current_level", lang)}</div>
                <span class="cefr-level-badge">${l.level}</span>
                <div class="mc-livret-cell-sub">${t("mc_lesson_progress", lang, { pct: Math.round((l.progress||0)*100) })}</div>
              </div>
            </div>
          </div>
        `).join("")}
        <p style="font-size:11.5px;color:var(--ink-soft);margin-top:2px">${t("mc_livret_note", lang)}</p>
      </div>
    `;
    container.querySelector("#mcLivretBack").addEventListener("click", () => { openLivret = false; paint(); });
  }

  function paintLangDetail(code) {
    const langData = store.getLang(code);
    if (!langData) { openCode = null; return paint(); }
    const { settings } = store.get();
    const lang = settings.interfaceLang;
    const variant = langData.variants?.find((v) => v.code === langData.selectedVariant);
    const needsVariantChoice = langData.leveled && !variant;

    container.innerHTML = `
      <button class="settings-back" id="mcBack">${t("mc_back", lang)}</button>
      <div class="dash-box">
        <h3>${flagFor(langData)} ${langData.label}</h3>
        <div class="card">
          <div style="font-weight:700;font-size:13px;color:var(--ink-soft)">${t("mc_my_level", lang)}</div>
          ${langData.leveled ? `
            <div style="font-size:22px;font-weight:800;margin-top:4px">${langData.level}</div>
            <div class="dash-progress-bar" style="margin-top:10px"><div class="dash-progress-fill" style="width:${Math.round((langData.progress||0)*100)}%"></div></div>
            <div style="font-size:12px;margin-top:4px">${t("mc_lesson_progress", lang, { pct: Math.round((langData.progress||0)*100) })}</div>
            ${!needsVariantChoice ? `
              <div style="font-size:12px;color:var(--ink-soft);margin-top:10px">${t("mc_course_followed", lang)}<strong style="color:var(--ink)">${variant.label}</strong> — <button class="mc-variant-change" id="mcChangeVariant">${t("mc_change", lang)}</button></div>
              <button class="btn btn-primary" id="mcContinue" style="width:100%;margin-top:14px">${t("mc_continue", lang)}</button>
            ` : ""}
          ` : `
            <div class="mc-locked-msg">
              <span class="mc-lock-icon">🔒</span>
              <div>
                <div style="font-weight:700;color:var(--accent)">${t("mc_test_not_done", lang)}</div>
                <p style="font-size:13px;color:var(--ink-soft);margin:4px 0 0">${t("mc_locked_desc", lang, { lang: langData.label.toLowerCase() })}</p>
              </div>
            </div>
            <button class="btn btn-primary" id="mcStartTest" style="width:100%;margin-top:12px">${t("mc_start_test", lang)}</button>
          `}
        </div>
      </div>

      ${needsVariantChoice ? `
        <div class="dash-box">
          <h3>${t("mc_which_course", lang)}</h3>
          <div class="card">
            <p style="font-size:13px;color:var(--ink-soft);margin:0 0 10px">${t("mc_already_leveled_desc", lang)}</p>
            <div style="display:flex;flex-direction:column;gap:10px">
              ${langData.variants.map((v) => `<button class="lt-opt mc-variant-btn" data-variant="${v.code}">${v.label}</button>`).join("")}
            </div>
          </div>
        </div>
      ` : ""}

      ${langData.leveled ? `
        <div class="dash-box">
          <h3>${t("mc_entry_level", lang)}</h3>
          <div class="card">
            <div style="display:flex;align-items:center;gap:10px">
              <span class="cefr-level-badge" style="font-size:15px">${langData.entryLevel || langData.level}</span>
              <div style="font-size:12px;color:var(--ink-soft)">
                ${t("mc_first_result", lang, { date: langData.entryDate ? t("mc_first_result_date", lang, { date: formatDate(langData.entryDate, lang) }) : "" })}
              </div>
            </div>
            <p style="font-size:12px;color:var(--ink-soft);margin-top:8px">${t("mc_entry_desc", lang)}</p>
          </div>
        </div>
      ` : ""}

      <div class="dash-box">
        <h3>${t("mc_pdf_title", lang)}</h3>
        <div class="card" style="color:var(--ink-soft);font-size:13px">
          ${langData.leveled
            ? t("mc_pdf_available", lang)
            : `<span class="mc-lock-icon" style="font-size:14px">🔒</span> ${t("mc_pdf_locked", lang).replace("🔒 ", "")}`}
        </div>
      </div>
    `;

    container.querySelector("#mcBack").addEventListener("click", () => { openCode = null; paint(); });

    const continueBtn = container.querySelector("#mcContinue");
    if (continueBtn) continueBtn.addEventListener("click", () => { window.location.href = "lessons.html"; });

    const changeBtn = container.querySelector("#mcChangeVariant");
    if (changeBtn) changeBtn.addEventListener("click", () => {
      store.selectVariant(code, null);
      paint();
    });

    container.querySelectorAll(".mc-variant-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        store.selectVariant(code, btn.dataset.variant);
        paint();
      });
    });

    const startBtn = container.querySelector("#mcStartTest");
    if (startBtn) startBtn.addEventListener("click", () => {
      renderLevelTest(shellRoot, {
        langCode: code,
        langLabel: langData.label,
        onDone: () => { window.location.href = "lessons.html"; },
      });
    });
  }
}
