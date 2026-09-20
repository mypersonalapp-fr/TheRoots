// The Roots — onglet "Mes cours" : une grille de petits "cubes", un par
// langue (anglais/espagnol/portugais) plus un 4e cube "Mon livret". On
// touche un cube langue pour voir son niveau actuel et ses cours en PDF ;
// si la langue n'a pas encore de niveau, le test de niveau se lance depuis
// là et les cours restent verrouillés tant qu'il n'est pas fait. Une fois
// le test passé, le score obtenu reste gardé pour toujours comme "niveau
// d'entrée" (distinct du "niveau actuel", qui lui peut évoluer avec la
// progression), pour pouvoir se comparer dans le temps. "Mon livret"
// rassemble ces résultats pour toutes les langues, façon livret scolaire.

import { store } from "../data/store.js?v=20260920e";
import { renderLevelTest } from "./level-test.js?v=20260920e";
import { t, formatDate } from "../data/i18n.js?v=20260920e";
import { A1_EN_GENERAL_OBJECTIVE, A1_EN_PALIERS } from "../data/programme-a1-en.js?v=20260920e";
import { A2_EN_GENERAL_OBJECTIVE, A2_EN_PALIERS } from "../data/programme-a2-en.js?v=20260920e";

// Programme par palier, par langue ET par niveau — seul l'anglais A1 et A2
// sont rédigés pour l'instant (voir claude/cahier-des-charges-the-roots-v1.md
// et claude/contenu-paliers-a2-lot1.md dans le projet Claude) ; l'espagnol et
// le portugais, ainsi que les niveaux B1 à C2, afficheront "bientôt
// disponible" tant qu'ils n'auront pas été rédigés au même niveau de détail.
const PROGRAM_LEVELS = ["A1", "A2", "B1", "B2", "C1", "C2"];
const PROGRAMS_BY_LANG = {
  en: {
    A1: { objective: A1_EN_GENERAL_OBJECTIVE, paliers: A1_EN_PALIERS },
    A2: { objective: A2_EN_GENERAL_OBJECTIVE, paliers: A2_EN_PALIERS },
  },
};

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

// Les deux drapeaux des accents proposés pour une langue (ex. 🇬🇧🇺🇸 pour
// l'anglais, 🇪🇸🇨🇴 pour l'espagnol, 🇵🇹🇧🇷 pour le portugais) — utilisé dans
// la grille de cubes pour montrer d'un coup d'oeil les deux accents
// disponibles, même avant qu'un accent soit choisi.
function bothFlagsFor(l) {
  if (l.variants && l.variants.length) {
    return l.variants.map((v) => VARIANT_FLAGS[v.code] || "").join("");
  }
  return GROUP_FLAGS[l.code] || "";
}

export function renderMesCours(container, shellRoot) {
  let openCode = null; // code de la langue ouverte, ou null = liste
  let openLivret = false;
  let openProgram = null; // { code, level, palier: string|null } — null = fermé

  paint();

  function paint() {
    if (openProgram) return paintProgram();
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
                <div class="mc-cube-lang">${bothFlagsFor(l)} ${l.label}</div>
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
        <button class="btn btn-ghost" id="mcOpenProgram" style="width:100%;margin-top:10px">${t("prog_btn", lang)}</button>
      </div>
    `;

    container.querySelector("#mcBack").addEventListener("click", () => { openCode = null; paint(); });
    container.querySelector("#mcOpenProgram").addEventListener("click", () => { openProgram = { code, level: "A1", palier: null }; paint(); });

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

  // --- Programme affiché par palier (voir claude/specs-programme-...
  // .md, section 1) : vue d'ensemble du niveau choisi (objectif général +
  // les 12 paliers), puis programme+attentes détaillés d'un palier précis au
  // clic. Un sélecteur de niveau (A1 à C2, même principe que Compréhension/
  // Expression) permet de changer de niveau depuis la vue d'ensemble ; seuls
  // l'anglais A1 et A2 ont un programme rédigé pour l'instant, les autres
  // niveaux/langues affichent "bientôt disponible" sans jamais planter. ---
  function paintProgram() {
    const { code, level, palier } = openProgram;
    const langData = store.getLang(code);
    const { settings } = store.get();
    const lang = settings.interfaceLang;
    const program = (PROGRAMS_BY_LANG[code] || {})[level];

    if (!palier) {
      container.innerHTML = `
        <button class="settings-back" id="progBack">${t("prog_back", lang)}</button>
        <div class="level-chip-row" id="progLevelRow">
          ${PROGRAM_LEVELS.map((lvl) => `<button class="level-chip${lvl === level ? " active" : ""}" data-level="${lvl}">${lvl}</button>`).join("")}
        </div>
        ${!program ? `
          <div class="dash-box"><div class="card" style="color:var(--ink-soft);font-size:13px">${t("prog_not_ready", lang)}</div></div>
        ` : `
          <div class="dash-box">
            <h3>${flagFor(langData)} ${t("prog_overview_title", lang, { level })}</h3>
            <div class="card">
              <div style="font-weight:700;font-size:12.5px;color:var(--ink-soft)">${t("prog_general_objective_label", lang)}</div>
              <p style="font-size:13.5px;margin:6px 0 0">${program.objective}</p>
            </div>
          </div>
          <div class="dash-box">
            <h3>${t("prog_paliers_title", lang)}</h3>
            <p style="font-size:12px;color:var(--ink-soft);margin:0 0 10px">${t("prog_palier_tap_hint", lang)}</p>
            <div style="display:flex;flex-direction:column;gap:10px">
              ${program.paliers.map((p) => `
                <button class="lt-opt" data-palier="${p.code}" style="text-align:left">
                  <strong>${p.code}</strong> — ${p.title}
                </button>
              `).join("")}
            </div>
            <p style="font-size:11.5px;color:var(--ink-soft);margin-top:10px">${t("prog_end_note", lang)}</p>
          </div>
        `}
      `;
      container.querySelector("#progBack").addEventListener("click", () => { openProgram = null; paint(); });
      container.querySelector("#progLevelRow").addEventListener("click", (e) => {
        const chip = e.target.closest(".level-chip");
        if (!chip) return;
        openProgram = { code, level: chip.dataset.level, palier: null };
        paint();
      });
      container.querySelectorAll("button[data-palier]").forEach((btn) => {
        btn.addEventListener("click", () => { openProgram = { code, level, palier: btn.dataset.palier }; paint(); });
      });
      return;
    }

    const p = program.paliers.find((x) => x.code === palier);
    container.innerHTML = `
      <button class="settings-back" id="progBackToOverview">${t("prog_back", lang)}</button>
      <div class="dash-box">
        <h3>${p.code} — ${p.title}</h3>
        <div class="card">
          <div style="font-weight:700;font-size:12.5px;color:var(--ink-soft)">${t("prog_objective_label", lang)}</div>
          <p style="font-size:13.5px;margin:6px 0 0">${p.objective}</p>
        </div>
      </div>
      <div class="dash-box">
        <h3>${t("prog_vocab_label", lang)}</h3>
        <div class="card"><ul style="margin:0;padding-left:18px;font-size:13px">${p.vocab.map((v) => `<li style="margin-bottom:6px">${v}</li>`).join("")}</ul></div>
      </div>
      <div class="dash-box">
        <h3>${t("prog_grammar_label", lang)}</h3>
        <div class="card"><ul style="margin:0;padding-left:18px;font-size:13px">${p.grammar.map((g) => `<li style="margin-bottom:6px">${g}</li>`).join("")}</ul></div>
      </div>
      <div class="dash-box">
        <h3>${t("prog_conjugation_label", lang)}</h3>
        <div class="card" style="font-size:13px">${p.conjugation}</div>
      </div>
      <div class="dash-box">
        <h3>${t("prog_activities_label", lang)}</h3>
        <div class="card"><ol style="margin:0;padding-left:18px;font-size:13px">${p.activities.map((a) => `<li style="margin-bottom:4px">${a}</li>`).join("")}</ol></div>
        <p style="font-size:11.5px;color:var(--ink-soft);margin-top:10px">${t("prog_end_note", lang)}</p>
      </div>
    `;
    container.querySelector("#progBackToOverview").addEventListener("click", () => { openProgram = { code, level, palier: null }; paint(); });
  }
}
