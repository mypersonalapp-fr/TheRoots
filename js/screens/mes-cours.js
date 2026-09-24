// The Roots — onglet "Mes cours" : une grille de petits "cubes", un par
// langue (anglais/espagnol/portugais) plus un 4e cube "Mon livret". On
// touche un cube langue pour voir son niveau actuel et ses cours en PDF ;
// si la langue n'a pas encore de niveau, le test de niveau se lance depuis
// là et les cours restent verrouillés tant qu'il n'est pas fait. Une fois
// le test passé, le score obtenu reste gardé pour toujours comme "niveau
// d'entrée" (distinct du "niveau actuel", qui lui peut évoluer avec la
// progression), pour pouvoir se comparer dans le temps. "Mon livret"
// rassemble ces résultats pour toutes les langues, façon livret scolaire.

import { store } from "../data/store.js?v=20260924j";
import { CREATOR_MODE } from "../data/dev-config.js?v=20260924j";
import { renderLevelTest } from "./level-test.js?v=20260924j";
import { t, formatDate } from "../data/i18n.js?v=20260924j";
import { A1_EN_GENERAL_OBJECTIVE, A1_EN_PALIERS } from "../data/programme-a1-en.js?v=20260924j";
import { A2_EN_GENERAL_OBJECTIVE, A2_EN_PALIERS } from "../data/programme-a2-en.js?v=20260924j";
import { B1_EN_GENERAL_OBJECTIVE, B1_EN_PALIERS } from "../data/programme-b1-en.js?v=20260924j";
import { B2_EN_GENERAL_OBJECTIVE, B2_EN_PALIERS } from "../data/programme-b2-en.js?v=20260924j";
import { A1_ES_GENERAL_OBJECTIVE, A1_ES_PALIERS } from "../data/programme-a1-es.js?v=20260924j";
import { langGrowth, skillGauges, profileSummary, controls, boosts, missions, lessonTitle } from "../data/progress.js?v=20260924j";
import { plantSvg } from "./plant.js?v=20260924j";

// --- Petits blocs du livret (24/09) : jauges, contrôles, missions, renforts ---
const DAY = 24 * 3600 * 1000;
// Niveau actuel réel : pour l'anglais il suit les leçons et les contrôles
// (langGrowth), pas seulement le résultat du test de positionnement.
function currentOf(l) {
  const g = langGrowth(l.code);
  return g.level ? { level: g.level, pct: g.pct } : { level: l.level, pct: Math.round((l.progress || 0) * 100) };
}
function gaugeColor(p) { return p >= 70 ? "var(--success)" : p >= 50 ? "var(--accent)" : "var(--pop)"; }
function shortDate(ts) { const d = new Date(ts); return `${String(d.getDate()).padStart(2, "0")}/${String(d.getMonth() + 1).padStart(2, "0")}`; }

function profileHtml(code) {
  const g = skillGauges(code);
  const sum = profileSummary(code);
  const rows = g.map((x) => `
    <div class="mc-gauge">
      <span class="mc-gauge-label">${x.label}</span>
      <div class="mc-gauge-track"><div class="mc-gauge-fill" style="width:${x.pct == null ? 0 : x.pct}%;background:${x.pct == null ? "transparent" : gaugeColor(x.pct)}"></div></div>
      <span class="mc-gauge-val">${x.pct == null ? "—" : x.pct}</span>
    </div>`).join("");
  return `
    <div class="mc-gauges">${rows}</div>
    ${sum ? `<div class="mc-profile-notes">
      ${sum.strength ? `<div><span class="dot" style="background:var(--success)"></span><strong>Tes forces :</strong> ${sum.strength}</div>` : ""}
      <div><span class="dot" style="background:var(--accent)"></span><strong>À travailler :</strong> ${sum.work}</div>
      <div><span class="dot" style="background:var(--brand-teal)"></span><strong>Ton objectif :</strong> ${sum.goal}</div>
    </div>` : `<p style="font-size:12px;color:var(--ink-soft);margin:10px 0 0">« — » = pas encore assez d'exercices faits pour mesurer. Les jauges se remplissent avec tes leçons, tes contrôles, Compréhension et Expression.</p>`}
  `;
}

const CTRL_DEF = [
  ["A1", "Contrôle A1", "après la leçon A1.12"],
  ["A2", "Contrôle A2", "après la leçon A2.11"],
  ["FINAL", "Grand contrôle final A1 + A2", "ouvre le niveau B1"],
];
const DECISION_NOTE = {
  net: "validé net",
  rappel: "rappels glissés dans les leçons suivantes",
  renfort: "leçons de renfort ajoutées",
};
function controlsHtml(code) {
  if (code !== "en") return `<p style="font-size:12.5px;color:var(--ink-soft);margin:0">Les contrôles arrivent avec les leçons de cette langue.</p>`;
  const c = controls(code);
  return CTRL_DEF.map(([lvl, name, when]) => {
    const r = c[lvl];
    let tag, note;
    if (r && r.passed) {
      tag = `<span class="mc-tag ok">Validé · ${r.best} %</span>`;
      note = `${shortDate(r.passedAt)} · ${DECISION_NOTE[r.last && r.last.decision !== "fail" ? r.last.decision : "net"] || ""}`;
    } else if (r && r.last && r.last.decision === "fail") {
      tag = `<span class="mc-tag ko">Non validé · ${r.last.pct} %</span>`;
      note = CREATOR_MODE ? "mode créatrice : nouvel essai possible tout de suite"
        : `nouvel essai à partir du ${shortDate(r.last.at + 7 * DAY)}, après avoir refait les leçons à revoir`;
    } else {
      const locked = lvl === "FINAL" && !(c.A2 && c.A2.passed);
      tag = `<span class="mc-tag mute">${locked ? "Verrouillé" : "À venir"}</span>`;
      note = when;
    }
    return `<div class="mc-ctrl-row"><div style="flex-grow:1"><div class="mc-ctrl-name">${name}</div><div class="mc-ctrl-note">${note}</div></div>${tag}</div>`;
  }).join("");
}

function missionsHtml(code) {
  const list = missions(code);
  if (!list.length) return `<p style="font-size:12.5px;color:var(--ink-soft);margin:0">Aucune erreur en attente 🎉 Les notions ratées dans tes leçons et contrôles apparaîtront ici, puis reviendront en petites missions (aujourd'hui → demain → dans 7 jours → acquis).</p>`;
  const col = (n) => n >= 4 ? "var(--pop)" : n >= 2 ? "var(--accent)" : "#caa21b";
  const STEP = ["à revoir", "rappel J+1 fait", "vérif. J+7 à venir"];
  return list.slice(0, 8).map((m) => `
    <div class="mc-mission"><span class="dot" style="background:${col(m.count)}"></span>
      <div style="flex-grow:1"><div style="font-weight:800">${m.title}</div><div style="font-size:11.5px;color:var(--ink-soft)">${m.count} erreur${m.count > 1 ? "s" : ""} · ${STEP[Math.min(2, m.stage || 0)]}${m.due ? " · aujourd'hui" : ""}</div></div>
    </div>`).join("") + (list.some((m) => m.due) ? `<button class="btn btn-primary" data-href="lessons.html#practice=auto" style="width:100%;margin-top:10px">Commencer la mission du jour</button>` : "");
}

function renfortsHtml(code) {
  if (code !== "en") return "";
  const b = boosts(code);
  const parts = [];
  Object.keys(b).forEach((lvl) => {
    const x = b[lvl] || {};
    const done = x.done || [];
    const todo = (x.renfort || []).filter((id) => done.indexOf(id) < 0);
    if (todo.length) parts.push(`<div style="font-size:12.5px;font-weight:700;margin:4px 0 6px">Leçons de renfort avant ${lvl} :</div>` +
      todo.map((id) => `<button class="lt-opt" data-href="lessons.html#renfort=${id}" style="text-align:left;margin-bottom:6px">↺ ${lessonTitle(id)}</button>`).join(""));
    if (done.length) parts.push(`<div style="font-size:12px;color:var(--success);margin:4px 0">✓ Déjà refaites : ${done.map((id) => lessonTitle(id)).join(", ")}</div>`);
    if ((x.rappel || []).length) parts.push(`<div style="font-size:12.5px;color:var(--ink-soft);margin:4px 0">🔁 Rappels glissés dans les leçons ${lvl} : ${x.rappel.map((id) => lessonTitle(id)).join(", ")}</div>`);
  });
  return parts.join("");
}

// Programme par palier, par langue ET par niveau — l'anglais A1/A2 et
// l'espagnol A1 sont rédigés pour l'instant (voir claude/cahier-des-charges-
// the-roots-v1.md et claude/contenu-paliers-a2-lot1.md dans le projet
// Claude) ; le reste (espagnol A2+, portugais, niveaux B1 à C2) affichera
// "bientôt disponible" tant qu'il n'aura pas été rédigé au même niveau de
// détail. Le programme espagnol a un champ en plus par palier ("whyHow",
// voir programme-a1-es.js) — absent des paliers anglais, donc son affichage
// plus bas est conditionnel pour ne rien casser côté anglais.
const PROGRAM_LEVELS = ["A1", "A2", "B1", "B2", "C1", "C2"];
const PROGRAMS_BY_LANG = {
  en: {
    A1: { objective: A1_EN_GENERAL_OBJECTIVE, paliers: A1_EN_PALIERS },
    A2: { objective: A2_EN_GENERAL_OBJECTIVE, paliers: A2_EN_PALIERS },
    B1: { objective: B1_EN_GENERAL_OBJECTIVE, paliers: B1_EN_PALIERS },
    B2: { objective: B2_EN_GENERAL_OBJECTIVE, paliers: B2_EN_PALIERS },
  },
  es: {
    A1: { objective: A1_ES_GENERAL_OBJECTIVE, paliers: A1_ES_PALIERS },
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
              : variant ? t("mc_level_variant", lang, { level: currentOf(l).level, variant: variant.label }) : t("mc_level_choose_course", lang, { level: currentOf(l).level });
            return `
            <div class="mc-cube-wrap">
              <button class="card mc-cube has-plant" data-code="${l.code}">
                ${plantSvg(langGrowth(l.code).stage, { w: 70, h: 80, grow: langGrowth(l.code).pct / 100 })}
                <div class="mc-cube-lang">${bothFlagsFor(l)} ${l.label}</div>
                <div class="mc-cube-status">${status}</div>
              </button>
              <div class="mc-cube-gauge${l.leveled ? "" : " mc-cube-gauge-empty"}"><div class="mc-cube-gauge-fill" style="width:${l.leveled ? currentOf(l).pct : 0}%"></div></div>
            </div>
          `;
          }).join("")}

          <div class="mc-cube-wrap">
            <button class="card mc-cube mc-cube-livret" id="mcOpenLivret">
              <div class="mc-cube-lang">📘 ${t("mc_livret_title", lang)}</div>
              <div class="mc-cube-status">${t("mc_livret_subtitle", lang)}</div>
              <div class="mc-cube-status" style="margin-top:4px">Mon profil · Mes contrôles · Mes missions</div>
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
  let livretLang = null;
  function paintLivret() {
    const { settings } = store.get();
    const lang = settings.interfaceLang;
    const leveledLangs = settings.langs.filter((l) => l.leveled);
    if (!livretLang || !leveledLangs.some((l) => l.code === livretLang)) livretLang = (leveledLangs.find((l) => l.code === "en") || leveledLangs[0] || {}).code || null;
    const shown = leveledLangs.filter((l) => l.code === livretLang);
    container.innerHTML = `
      <button class="settings-back" id="mcLivretBack">${t("mc_back", lang)}</button>
      <div class="dash-box">
        <h3>📘 ${t("mc_livret_title", lang)}</h3>
        ${leveledLangs.length === 0 ? `
          <div class="card" style="color:var(--ink-soft);font-size:13px">${t("mc_livret_empty", lang)}</div>
        ` : `
          ${leveledLangs.length > 1 ? `<div class="mc-livret-tabs">${leveledLangs.map((l) => `<button class="level-chip${l.code === livretLang ? " active" : ""}" data-livret-lang="${l.code}">${flagFor(l)} ${l.label}</button>`).join("")}</div>` : ""}
          ${shown.map((l) => `
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
                <span class="cefr-level-badge">${currentOf(l).level}</span>
                <div class="mc-livret-cell-sub">${t("mc_lesson_progress", lang, { pct: currentOf(l).pct })}</div>
              </div>
            </div>
          </div>
          <div class="dash-box"><h3>Mon profil</h3><div class="card">${profileHtml(l.code)}</div></div>
          <div class="dash-box"><h3>Mes contrôles</h3><div class="card">${controlsHtml(l.code)}</div></div>
          <div class="dash-box"><h3>Mes missions</h3><div class="card">${missionsHtml(l.code)}</div></div>
          `).join("")}
        `}
      </div>
    `;
    container.querySelector("#mcLivretBack").addEventListener("click", () => { openLivret = false; paint(); });
    container.querySelectorAll("[data-livret-lang]").forEach((b) => b.addEventListener("click", () => { livretLang = b.dataset.livretLang; paint(); }));
    container.querySelectorAll("[data-href]").forEach((b) => b.addEventListener("click", () => { window.location.href = b.dataset.href; }));
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
            <div style="display:flex;align-items:center;gap:12px;margin-top:4px">
              ${plantSvg(langGrowth(code).stage, { w: 64, h: 78, grow: langGrowth(code).pct / 100 })}
              <div style="font-size:22px;font-weight:800">${currentOf(langData).level}</div>
            </div>
            <div class="dash-progress-bar" style="margin-top:10px"><div class="dash-progress-fill" style="width:${currentOf(langData).pct}%"></div></div>
            <div style="font-size:12px;margin-top:4px">${t("mc_lesson_progress", lang, { pct: currentOf(langData).pct })}</div>
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

      ${langData.leveled && code === "en" ? `
        ${renfortsHtml(code) ? `<div class="dash-box"><h3>Mes renforts</h3><div class="card">${renfortsHtml(code)}</div></div>` : ""}
        <div class="dash-box"><h3>Contrôles A1 · A2 · final</h3><div class="card">${controlsHtml(code)}</div></div>
      ` : ""}

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
          ${CREATOR_MODE ? `
            <button class="btn btn-ghost" id="mcRetakeTest" style="width:100%;margin-top:10px">🔁 Repasser le test de positionnement</button>
            <div style="font-size:11.5px;color:var(--ink-soft);margin-top:6px;text-align:center">Mode créatrice : essais illimités (à verrouiller plus tard dans dev-config.js).</div>
          ` : ""}
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
    container.querySelectorAll("[data-href]").forEach((b) => b.addEventListener("click", () => { window.location.href = b.dataset.href; }));
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

    const retakeBtn = container.querySelector("#mcRetakeTest");
    if (retakeBtn) retakeBtn.addEventListener("click", () => {
      renderLevelTest(shellRoot, {
        langCode: code,
        langLabel: langData.label,
        // En mode créatrice, on revient sur la fiche de la langue pour voir
        // tout de suite le nouveau résultat (et pouvoir recommencer).
        onDone: () => paint(),
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
            <h3>${t("prog_paliers_title", lang, { count: program.paliers.length, level })}</h3>
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
      ${p.whyHow ? `
      <div class="dash-box">
        <h3>${t("prog_why_how_label", lang)}</h3>
        <div class="card" style="font-size:13px;line-height:1.55">${p.whyHow}</div>
      </div>
      ` : ""}
      ${p.communication ? `
      <div class="dash-box">
        <h3>${t("prog_communication_label", lang)}</h3>
        <div class="card" style="font-size:13px;line-height:1.55">${p.communication}</div>
      </div>
      ` : ""}
      ${p.vocab ? `
      <div class="dash-box">
        <h3>${t("prog_vocab_label", lang)}</h3>
        <div class="card"><ul style="margin:0;padding-left:18px;font-size:13px">${p.vocab.map((v) => `<li style="margin-bottom:6px">${v}</li>`).join("")}</ul></div>
      </div>
      ` : ""}
      ${p.verbs ? `
      <div class="dash-box">
        <h3>${t("prog_verbs_label", lang)}</h3>
        <div class="card" style="font-size:13px">${p.verbs.join(" · ")}</div>
      </div>
      ` : ""}
      ${p.collocations ? `
      <div class="dash-box">
        <h3>${t("prog_collocations_label", lang)}</h3>
        <div class="card"><ul style="margin:0;padding-left:18px;font-size:13px">${p.collocations.map((c) => `<li style="margin-bottom:6px">${c}</li>`).join("")}</ul></div>
      </div>
      ` : ""}
      ${p.phrasalVerbs ? `
      <div class="dash-box">
        <h3>${t("prog_phrasal_verbs_label", lang)}</h3>
        <div class="card" style="font-size:13px">${p.phrasalVerbs.join(" · ")}</div>
      </div>
      ` : ""}
      ${p.grammar ? `
      <div class="dash-box">
        <h3>${t("prog_grammar_label", lang)}</h3>
        <div class="card"><ul style="margin:0;padding-left:18px;font-size:13px">${p.grammar.map((g) => `<li style="margin-bottom:6px">${g}</li>`).join("")}</ul></div>
      </div>
      ` : ""}
      ${p.conjugation ? `
      <div class="dash-box">
        <h3>${t("prog_conjugation_label", lang)}</h3>
        <div class="card" style="font-size:13px">${p.conjugation}</div>
      </div>
      ` : ""}
      ${p.secretEnglish ? `
      <div class="dash-box">
        <h3>${t("prog_secret_english_label", lang)}</h3>
        <div class="card" style="font-size:13px;line-height:1.55">${p.secretEnglish}</div>
      </div>
      ` : ""}
      ${p.mission ? `
      <div class="dash-box">
        <h3>${t("prog_mission_label", lang)}</h3>
        <div class="card" style="font-size:13px;font-style:italic">${p.mission}</div>
      </div>
      ` : ""}
      <div class="dash-box">
        <h3>${t("prog_activities_label", lang)}</h3>
        <div class="card"><ol style="margin:0;padding-left:18px;font-size:13px">${p.activities.map((a) => `<li style="margin-bottom:4px">${a}</li>`).join("")}</ol></div>
        <p style="font-size:11.5px;color:var(--ink-soft);margin-top:10px">${t("prog_end_note", lang)}</p>
      </div>
    `;
    container.querySelector("#progBackToOverview").addEventListener("click", () => { openProgram = { code, level, palier: null }; paint(); });
  }
}
