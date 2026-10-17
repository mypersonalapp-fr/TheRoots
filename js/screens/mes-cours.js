// The Roots — onglet "Mes cours" : une grille de petits "cubes", un par
// langue (anglais/espagnol/portugais) plus un 4e cube "Mon livret". On
// touche un cube langue pour voir son niveau actuel et ses cours en PDF ;
// si la langue n'a pas encore de niveau, le test de niveau se lance depuis
// là et les cours restent verrouillés tant qu'il n'est pas fait. Une fois
// le test passé, le score obtenu reste gardé pour toujours comme "niveau
// d'entrée" (distinct du "niveau actuel", qui lui peut évoluer avec la
// progression), pour pouvoir se comparer dans le temps. "Mon livret"
// rassemble ces résultats pour toutes les langues, façon livret scolaire.

import { store } from "../data/store.js?v=20260930a";
import { renderLesson } from "./lecon-a11.js?v=20261018a3";
import { A1_LIST, lessonStatus, isUnlocked, nextLessonN, loadBundle, loadExamBundle, examStatus, examUnlocked } from "../data/lecons-a1.js?v=20261018a3";
import { renderShell } from "./shell.js?v=20261018a3";
import { CREATOR_MODE, UNLOCK_COURSES_PREVIEW } from "../data/dev-config.js?v=20261018a3";
import { UNLOCK_ALL_PREVIEW } from "../data/dev-config.js?v=20261018a3";
import { renderLevelTest } from "./level-test.js?v=20260930a";
import { t, formatDate } from "../data/i18n.js?v=20260930a";
import { A1_EN_GENERAL_OBJECTIVE, A1_EN_PALIERS, A1_EN_ENTRY_MODULE } from "../data/programme-a1-en.js?v=20260930a";
import { A2_EN_GENERAL_OBJECTIVE, A2_EN_PALIERS, A2_EN_ENTRY_MODULE } from "../data/programme-a2-en.js?v=20260930a";
import { B1_EN_GENERAL_OBJECTIVE, B1_EN_PALIERS, B1_EN_ENTRY_MODULE } from "../data/programme-b1-en.js?v=20260930a";
import { B2_EN_GENERAL_OBJECTIVE, B2_EN_PALIERS, B2_EN_ENTRY_MODULE } from "../data/programme-b2-en.js?v=20260930a";
import { C1_EN_GENERAL_OBJECTIVE, C1_EN_PALIERS, C1_EN_ENTRY_MODULE } from "../data/programme-c1-en.js?v=20260930a";
import { A1_ES_GENERAL_OBJECTIVE, A1_ES_PALIERS } from "../data/programme-a1-es.js?v=20260930a";
import { A2_ES_GENERAL_OBJECTIVE, A2_ES_PALIERS } from "../data/programme-a2-es.js?v=20261007a";
import { langGrowth, skillGauges, profileSummary, controls, boosts, missions, lessonTitle } from "../data/progress.js?v=20261018a3";
import { plantSvg } from "./plant.js?v=20261018a3";
import { BLOCAGES_ES, BLOCAGES_ES_TITLE, blocageHref, blocagesDone } from "../data/atelier-es-blocages.js?v=20260930a";
import { renderAtelierEs } from "./atelier-es.js?v=20261008a";
import { currentCharacter } from "./lecon-a11.js?v=20261018a3";
import { loadBundleA2 } from "../data/lecons-a2.js?v=20261018a3";
import { bulletinA1, PASS, pickRattrapage, rtLoad, rtSave } from "../data/bulletin-a1.js?v=20261018a3";
import { renderAtelierEn } from "./atelier-en.js?v=20261008a";

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
  ["A2", "Contrôle A2", "après la leçon A2.12"],
  ["FINAL", "Grand contrôle final A1 + A2", "ouvre le niveau B1"],
];
const DECISION_NOTE = {
  net: "validé net",
  rappel: "rappels glissés dans les leçons suivantes",
  renfort: "leçons de renfort ajoutées",
};
const CTRL_DEF_ES = [
  ["GC-A1", "Grand Contrôle A1", "après la leçon A1.12 · ouvre le niveau A2"],
  ["GC-A2", "Grand Contrôle A2", "après la leçon A2.12"],
  ["GC-A1A2", "Grand Contrôle A1 + A2", "ouvre le niveau B1"],
];
function controlsHtml(code) {
  if (code !== "en" && code !== "es") return `<p style="font-size:12.5px;color:var(--ink-soft);margin:0">Les contrôles arrivent avec les leçons de cette langue.</p>`;
  const c = controls(code);
  return (code === "es" ? CTRL_DEF_ES : CTRL_DEF).map(([lvl, name, when]) => {
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
      const locked = (lvl === "FINAL" && !(c.A2 && c.A2.passed)) || (lvl === "GC-A2" && !(c["A2.12"] && c["A2.12"].passed)) || (lvl === "GC-A1A2" && !(c["GC-A2"] && c["GC-A2"].passed));
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

// (26/09) Espagnol : carte « Atelier : les blocages du francophone » — les 8 chapitres du moteur de
// leçons en mode espagnol (lessons.html?lang=es), en accès libre, avec ✓ pour ceux déjà réussis.
function blocagesHtml() {
  const done = blocagesDone();
  return `
    <div class="dash-box">
      <h3>${BLOCAGES_ES_TITLE}</h3>
      <div class="card">
        <p style="font-size:12.5px;color:var(--ink-soft);margin:0 0 10px">Les 8 points où l'on « bugue » en espagnol, expliqués simplement : le pourquoi avant la règle, un entraînement intensif et un texte légendé mot par mot. Accès libre, dans l'ordre que tu veux.</p>
        <div style="display:flex;flex-direction:column;gap:8px">
          ${BLOCAGES_ES.map((c) => `
            <button class="lt-opt" data-href="${blocageHref(c.n)}" style="text-align:left;display:flex;align-items:center;gap:8px">
              <span style="flex-grow:1"><strong>${c.code}</strong> — ${c.title}</span>
              ${done[c.n] ? `<span style="color:var(--success);font-weight:800" aria-label="Chapitre terminé">✓</span>` : ""}
            </button>`).join("")}
        </div>
      </div>
    </div>`;
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
    A1: { objective: A1_EN_GENERAL_OBJECTIVE, paliers: A1_EN_PALIERS, entry: A1_EN_ENTRY_MODULE },
    A2: { objective: A2_EN_GENERAL_OBJECTIVE, paliers: A2_EN_PALIERS, entry: A2_EN_ENTRY_MODULE },
    B1: { objective: B1_EN_GENERAL_OBJECTIVE, paliers: B1_EN_PALIERS, entry: B1_EN_ENTRY_MODULE },
    B2: { objective: B2_EN_GENERAL_OBJECTIVE, paliers: B2_EN_PALIERS, entry: B2_EN_ENTRY_MODULE },
    C1: { objective: C1_EN_GENERAL_OBJECTIVE, paliers: C1_EN_PALIERS, entry: C1_EN_ENTRY_MODULE },
  },
  es: {
    A1: { objective: A1_ES_GENERAL_OBJECTIVE, paliers: A1_ES_PALIERS },
    A2: { objective: A2_ES_GENERAL_OBJECTIVE, paliers: A2_ES_PALIERS },
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

// --- Bulletin scolaire (maquette 1) : notes par compétence, lacunes détectées, tests réussis / à repasser ---
const BL_IMG = (f) => `assets/img/lesson/${f}.webp?v=20261018a3`;
const BL_SK = [BL_IMG("exam-a1-reading"), BL_IMG("exam-a1-listening"), BL_IMG("ic-grammar"), BL_IMG("exam-a1-writing"), BL_IMG("exam-a1-speaking")];
const BL_GAP = { "Grammaire": "ic-grammar", "Lecture": "ic-reading", "Écoute": "ic-listening" };
export function bulletinHtml(level = "A1") {
  const B = bulletinA1(level), f = (n) => String(Math.round(n * 10) / 10).replace(".", ","), ch = currentCharacter();
  const nk = B.nDone - B.nOk;
  if (!B.nDone) return `<div class="card bl-card"><h3 class="bl-h">Mon bulletin ${level}</h3><p class="bl-soft">Passe ton premier test de fin de leçon : tes notes et tes lacunes apparaîtront ici.</p></div>`;
  const head = `<div class="card bl-card bl-head"><img class="bl-ava" src="${ch.src}" alt=""/><div class="bl-hd"><div class="bl-big">Niveau ${level}</div><div class="bl-soft">${B.nDone} test${B.nDone > 1 ? "s" : ""} passé${B.nDone > 1 ? "s" : ""} · ${B.nOk} réussi${B.nOk > 1 ? "s" : ""} · ${nk} à repasser</div></div><div class="bl-avg"><b>${f(B.avg)}</b><small>moyenne / 40</small></div></div>`;
  const sk = B.skills.filter((s) => s.avg !== null).map((s, i) => { const r = s.avg / s.max, ok = r >= 0.85; return `<div class="bl-skrow"><img class="bl-sk-img" src="${BL_SK[i]}" alt="" loading="lazy"/><div class="bl-sk"><div class="bl-sk-top"><b>${s.name}</b><b>${f(s.avg)} <span class="bl-soft">/ ${f(s.max)}</span></b></div><div class="bl-bar"><i style="width:${Math.round(r * 100)}%;background:${ok ? "#2fa35e" : "#e2a13d"}"></i></div><small style="color:${ok ? "#1f7a45" : "#8a5a00"}">${ok ? "Très bien" : "À consolider"}</small></div></div>`; }).join("");
  const skills = sk ? `<div class="card bl-card"><div class="bl-sp"><h3 class="bl-h">Mes notes par compétence</h3><span class="bl-soft">Moyenne des tests</span></div>${sk}</div>` : "";
  const gaps = B.gaps.length ? `<div class="card bl-card bl-gaps"><h3 class="bl-h">🔎 Lacunes détectées</h3><p class="bl-soft" style="color:#7a1d12">Repérées à partir de tes erreurs aux tests. L'appli a déjà préparé des exercices en plus.</p>${B.gaps.map((g) => `<button type="button" class="bl-gap" data-rt="${g.id}"><img src="${BL_IMG(BL_GAP[(g.list[0] || {}).sk] || "ic-test")}" alt="" width="40" height="40"/><span class="bl-gt"><b>${g.code} · ${g.title}</b><small>Il manque ${f(g.miss)} point${g.miss > 1 ? "s" : ""}${g.weak.length ? " · " + g.weak.join(", ") : ""}</small>${g.list.slice(0, 2).map((e) => `<small>• ${e.sk} : ${e.q}</small>`).join("")}${g.legacy ? `<small>Test passé avant la mise à jour : le détail se précisera quand tu le repasseras.</small>` : ""}</span><span class="bl-tag bl-ko">${(rtLoad()[g.id] || {}).series ? "Refaire · " + rtLoad()[g.id].last : "À revoir"}</span></button>`).join("")}<button type="button" class="lc-cta bl-cta" data-rt="${B.gaps[0].id}"><img src="${BL_IMG("ic-exercises")}" alt="" width="30" height="30"/>Faire mes exercices de rattrapage</button><div class="bl-soft" style="text-align:center">${B.gaps.length} série${B.gaps.length > 1 ? "s" : ""} · environ 5 minutes chacune</div></div>` : "";
  const tiles = B.tests.map((t) => { const c = t.done ? (t.passed ? "ok" : "ko") : "no"; return `<div class="bl-tile bl-${c}"><b>${t.code}</b><span>${t.done ? t.best + "/40" : "—"}</span><small>${t.done ? (t.passed ? "Réussi" : "À repasser") : "À venir"}</small></div>`; }).join("");
  const grid = `<div class="card bl-card"><h3 class="bl-h">Mes tests de fin de leçon</h3><div class="bl-tiles">${tiles}</div>${B.exam ? (() => { const e = B.exam, st = e.done ? (e.passed ? "Réussi" : "À repasser") : (e.open ? "Disponible" : "Verrouillé"), c = e.done ? (e.passed ? "ok" : "ko") : "no"; return `<div class="bl-lock bl-ex-${c}"><img src="${BL_IMG("ic-test")}" alt="" width="34" height="34" style="opacity:${e.done || e.open ? 1 : .55}"/><span class="bl-soft" style="color:inherit"><b>Grand contrôle A1</b><br/>${e.done ? e.best + "/40" : e.open ? "Les 12 leçons sont réussies : tu peux le passer" : "S'ouvre quand les 12 leçons sont réussies"}</span><span class="bl-tag bl-st-${c}">${st}</span></div>`; })() : ""}<p class="bl-soft">Réussi à partir de ${PASS}/40.</p></div>`;
  const emma = B.gaps.length ? `Beau travail ! Il te manque juste ${f(B.gaps[0].miss)} point${B.gaps[0].miss > 1 ? "s" : ""} à la leçon ${B.gaps[0].code}. Une petite série et tu repasses le test.` : "Tous tes tests sont réussis. Continue comme ça !";
  const word = `<div class="card bl-card bl-emma"><img src="${ch.full || ch.src}" alt="" loading="lazy"/><div><div class="bl-lab">LE MOT D'${ch.name.toUpperCase()}</div><div class="bl-say">${emma}</div></div></div>`;
  return head + skills + gaps + grid + word;
}
export function renderMesCours(container, shellRoot) {
  let openCode = null; // code de la langue ouverte, ou null = liste
  let openLivret = false;
  let openProgram = null; // { code, level, palier: string|null } — null = fermé
  let openAteliers = null; // espagnol : null = fermé, "home" = rubrique Mes ateliers, "blocages" ou "atelier" = un des deux ateliers

  paint();

  function paint() {
    if (openAteliers) return paintAteliers();
    if (openProgram) return paintProgram();
    if (openLivret) return paintLivret();
    if (openCode) return paintLangDetail(openCode);
    return paintList();
  }

  // --- Espagnol : rubrique « Mes ateliers » = Atelier des blocages du francophone + Atelier de grammaire espagnole ---
  function paintAteliers() {
    if (openAteliers === "atelier-en") {
      container.innerHTML = `<button class="settings-back" id="atBack">← Anglais</button><div id="atBody"></div>`;
      container.querySelector("#atBack").addEventListener("click", () => { openAteliers = null; paint(); });
      renderAtelierEn(container.querySelector("#atBody"));
      return;
    }
    if (openAteliers === "atelier") {
      container.innerHTML = `<button class="settings-back" id="atBack">← Mes ateliers</button><div id="atBody"></div>`;
      container.querySelector("#atBack").addEventListener("click", () => { openAteliers = "home"; paint(); });
      renderAtelierEs(container.querySelector("#atBody"));
      return;
    }
    if (openAteliers === "blocages") {
      container.innerHTML = `<button class="settings-back" id="atBack">← Mes ateliers</button>${blocagesHtml()}`;
      container.querySelector("#atBack").addEventListener("click", () => { openAteliers = "home"; paint(); });
      container.querySelectorAll("[data-href]").forEach((b) => b.addEventListener("click", () => { window.location.href = b.dataset.href; }));
      return;
    }
    container.innerHTML = `
      <button class="settings-back" id="atBack">← Espagnol</button>
      <div class="dash-box">
        <h3>🧠 Mes ateliers</h3>
        <div style="display:flex;flex-direction:column;gap:10px">
          <button class="lt-opt" id="atBlocages" style="text-align:left"><strong>Atelier des blocages du francophone</strong><span style="display:block;font-size:11.5px;color:var(--ink-soft);margin-top:2px">X1 à X8 : les 8 points où l'on « bugue » en espagnol</span></button>
          <button class="lt-opt" id="atGrammaire" style="text-align:left"><strong>Atelier espagnol</strong><span style="display:block;font-size:11.5px;color:var(--ink-soft);margin-top:2px">Tous les temps, les verbes clés, les structures, la prononciation et l'espagnol de la rue</span></button>
        </div>
      </div>`;
    container.querySelector("#atBack").addEventListener("click", () => { openAteliers = null; paint(); });
    container.querySelector("#atBlocages").addEventListener("click", () => { openAteliers = "blocages"; paint(); });
    container.querySelector("#atGrammaire").addEventListener("click", () => { openAteliers = "atelier"; paint(); });
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
          ${l.code === "en" ? bulletinHtml("A1") + bulletinHtml("A2") : ""}
          <div class="dash-box"><h3>Mon profil</h3><div class="card">${profileHtml(l.code)}</div></div>
          <div class="dash-box"><h3>Mes contrôles</h3><div class="card">${controlsHtml(l.code)}</div></div>
          <div class="dash-box"><h3>Mes missions</h3><div class="card">${missionsHtml(l.code)}</div></div>
          `).join("")}
        `}
      </div>
    `;
    container.querySelector("#mcLivretBack").addEventListener("click", () => { openLivret = false; paint(); });
    container.querySelectorAll("[data-rt]").forEach((b) => b.addEventListener("click", () => paintRattrapage(b.dataset.rt)));
    container.querySelectorAll("[data-livret-lang]").forEach((b) => b.addEventListener("click", () => { livretLang = b.dataset.livretLang; paint(); }));
    container.querySelectorAll("[data-href]").forEach((b) => b.addEventListener("click", () => { window.location.href = b.dataset.href; }));
  }

  // --- Exercices en plus : 5 questions corrigées, une explication à chaque réponse ---
  async function paintRattrapage(id) {
    const lv = id.startsWith("A2") ? "A2" : "A1", B = bulletinA1(lv), g = B.gaps.find((x) => x.id === id), n = g ? g.n : Number(id.split(".")[1]);
    const bundle = lv === "A2" ? await loadBundleA2(n) : await loadBundle(n);
    const att = (rtLoad()[id] || {}).series || 0;
    const items = pickRattrapage(bundle.exercises, g ? g.weak : [], att + n);
    let i = 0, firstOk = 0, tried = false;
    const esc = (x) => String(x).replace(/&/g, "&amp;").replace(/</g, "&lt;");
    const draw = () => {
      if (i >= items.length) {
        rtSave(id, firstOk, items.length);
        container.innerHTML = `<button class="settings-back" id="rtBack">Retour au livret</button><div class="card bl-card"><h3 class="bl-h">Série terminée</h3><div class="bl-big">${firstOk} / ${items.length}</div><p class="bl-soft">${firstOk >= 4 ? "Très bien : la notion est solide. Repasse le test de la leçon." : "Relis les explications, refais une série puis repasse le test."}</p><button type="button" class="lc-cta bl-cta" id="rtRetest">Repasser le test ${g ? g.code : ""}</button><button type="button" class="lc-sec-btn bl-cta" id="rtAgain">Refaire une série</button></div>`;
        container.querySelector("#rtBack").onclick = () => { openLivret = true; paint(); };
        container.querySelector("#rtAgain").onclick = () => paintRattrapage(id);
        container.querySelector("#rtRetest").onclick = () => { openLivret = false; openCode = "en"; paint(); };
        return;
      }
      const { page, q } = items[i]; tried = false;
      container.innerHTML = `<button class="settings-back" id="rtBack">Quitter</button><div class="card bl-card"><div class="bl-soft">Exercices en plus · ${g ? g.code : ""} · ${i + 1} / ${items.length}</div><div class="bl-bar"><i style="width:${Math.round(i / items.length * 100)}%;background:#2fa35e"></i></div><div class="bl-soft">${esc(page)}</div><h3 class="bl-h">${esc(q[0])}</h3>${q[1].map((c, k) => `<button type="button" class="lc-choice" data-k="${k}">${esc(c)}</button>`).join("")}<div class="bl-fb" id="rtFb" aria-live="polite"></div><button type="button" class="lc-cta bl-cta" id="rtNext" style="display:none">${i + 1 < items.length ? "Question suivante" : "Voir mon résultat"}</button></div>`;
      container.querySelector("#rtBack").onclick = () => { openLivret = true; paint(); };
      const fb = container.querySelector("#rtFb");
      container.querySelectorAll(".lc-choice").forEach((b) => b.addEventListener("click", () => {
        if (b.classList.contains("lc-right")) return;
        const ok = Number(b.dataset.k) === q[2];
        if (ok) { if (!tried) firstOk++; b.classList.add("lc-right"); fb.className = "bl-fb bl-fb-ok"; fb.textContent = "Bravo ! " + (q[3] || ""); container.querySelector("#rtNext").style.display = ""; container.querySelectorAll(".lc-choice").forEach((x) => x.disabled = true); }
        else { tried = true; b.classList.add("lc-wrong"); b.disabled = true; fb.className = "bl-fb bl-fb-ko"; fb.textContent = "Pas tout à fait — " + (q[3] || "") + " Réessaie."; }
      }));
      container.querySelector("#rtNext").onclick = () => { i++; draw(); };
    };
    draw();
  }

  function paintLangDetail(code) {
    const langData = store.getLang(code);
    if (!langData) { openCode = null; return paint(); }
    const { settings } = store.get();
    const lang = settings.interfaceLang;
    const variant = langData.variants?.find((v) => v.code === langData.selectedVariant);
    const needsVariantChoice = langData.leveled && !variant;

    const a1PathHtml = () => {
      const rows = A1_LIST.map((L) => {
        const st = lessonStatus(L.n), open = isUnlocked(L.n, UNLOCK_ALL_PREVIEW);
        return `<button class="lt-opt" data-a1="${L.n}" ${open ? "" : "disabled"} style="width:100%;text-align:left;display:flex;align-items:center;gap:8px;${open ? "" : "opacity:.55"}">
          <span style="flex-grow:1"><strong>${L.code}</strong> — ${L.titleFr}<span style="display:block;font-size:11.5px;color:var(--ink-soft);margin-top:2px">${L.titleEn}${st.score ? ` · test ${st.score}` : ""}</span></span>
          <span aria-hidden="true">${st.passed ? "✓" : open ? "›" : "🔒"}</span></button>`;
      }).join("");
      const done = A1_LIST.filter((L) => lessonStatus(L.n).passed).length;
      const ex = examStatus(), exOpen = examUnlocked(UNLOCK_ALL_PREVIEW);
      const examRow = `<button class="lt-opt" id="mcExam" ${exOpen ? "" : "disabled"} style="width:100%;text-align:left;display:flex;align-items:center;gap:8px;${exOpen ? "" : "opacity:.55"}"><span style="flex-grow:1"><strong>🏁 Grand contrôle de fin de A1</strong><span style="display:block;font-size:11.5px;color:var(--ink-soft);margin-top:2px">${exOpen ? "Teste tout le niveau A1" : "S’ouvre quand les 12 leçons sont validées"}${ex.score ? ` · ${ex.score}` : ""}</span></span><span aria-hidden="true">${ex.passed ? "✓" : exOpen ? "›" : "🔒"}</span></button>`;
      return `<div class="dash-box"><h3>📘 Mon parcours A1</h3><div class="card"><div style="font-size:12px;color:var(--ink-soft)">${done}/12 leçons validées${UNLOCK_ALL_PREVIEW ? " · mode vérification : tout est ouvert" : ""}</div><div style="display:flex;flex-direction:column;gap:8px;margin-top:10px">${rows}${examRow}</div></div></div>`;
    };
    const openA1 = async (n) => {
      try { const B = await loadBundle(n); renderLesson(shellRoot, B, { onExit: () => renderShell(shellRoot) }); }
      catch (e) { console.error(e); alert("Cette leçon n’a pas pu s’ouvrir."); }
    };
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
            ${UNLOCK_COURSES_PREVIEW ? `<button class="btn btn-ghost" id="mcPreviewOpen" style="width:100%;margin-top:10px">🔓 Ouvrir les cours (mode vérification)</button>
            <div style="font-size:11.5px;color:var(--ink-soft);margin-top:6px;text-align:center">Accès temporaire pendant l'installation : à verrouiller ensuite (UNLOCK_COURSES_PREVIEW dans dev-config.js).</div>` : ""}
          `}
        </div>
      </div>

      ${code === "en" && (langData.leveled || UNLOCK_ALL_PREVIEW) ? a1PathHtml() : ""}

      ${langData.leveled && code === "en" ? `
        ${renfortsHtml(code) ? `<div class="dash-box"><h3>Mes renforts</h3><div class="card">${renfortsHtml(code)}</div></div>` : ""}
        <div class="dash-box"><h3>Contrôles A1 · A2 · final</h3><div class="card">${controlsHtml(code)}</div></div>
      ` : ""}

      ${code === "en" ? `
        <div class="dash-box">
          <h3>🧠 Mes ateliers</h3>
          <button class="lt-opt" id="mcOpenAtelierEn" style="width:100%;text-align:left;display:flex;align-items:center;gap:8px">
            <span style="flex-grow:1"><strong>Atelier anglais</strong><span style="display:block;font-size:11.5px;color:var(--ink-soft);margin-top:2px">Tous les temps, plus de 100 exercices chacun · formel et informel</span></span>
            <span aria-hidden="true">›</span>
          </button>
        </div>` : ""}

      ${code === "es" ? `
        <div class="dash-box">
          <h3>🧠 Mes ateliers</h3>
          <button class="lt-opt" id="mcOpenAteliers" style="width:100%;text-align:left;display:flex;align-items:center;gap:8px">
            <span style="flex-grow:1"><strong>Mes ateliers</strong><span style="display:block;font-size:11.5px;color:var(--ink-soft);margin-top:2px">Les blocages du francophone · L'atelier de grammaire espagnole</span></span>
            <span aria-hidden="true">›</span>
          </button>
        </div>` : ""}

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
    const atEn = container.querySelector("#mcOpenAtelierEn");
    if (atEn) atEn.addEventListener("click", () => { openAteliers = "atelier-en"; paint(); });
    const atBtn = container.querySelector("#mcOpenAteliers");
    if (atBtn) atBtn.addEventListener("click", () => { openAteliers = "home"; paint(); });

    const previewBtn = container.querySelector("#mcPreviewOpen");
    if (previewBtn) previewBtn.addEventListener("click", () => { window.location.href = code === "es" ? "lessons.html?lang=es#lesson=200" : "lessons.html"; });
    const exB = container.querySelector("#mcExam");
    if (exB) exB.addEventListener("click", async () => { try { renderLesson(shellRoot, await loadExamBundle(), { onExit: () => renderShell(shellRoot) }); } catch (e) { console.error(e); alert("Le contrôle n’a pas pu s’ouvrir."); } });
    container.querySelectorAll("[data-a1]").forEach((b) => b.addEventListener("click", () => openA1(Number(b.dataset.a1))));
    const continueBtn = container.querySelector("#mcContinue");
    if (continueBtn) continueBtn.addEventListener("click", () => { if (code === "es") {
        // Premier lancement (aucune progression espagnole) : on ouvre le premier palier, A1.1.
        let saved = null;
        try { saved = localStorage.getItem("the_roots_lesson_es"); } catch (e) {}
        window.location.href = saved ? "lessons.html?lang=es" : "lessons.html?lang=es#lesson=200";
      } else if (code === "en" && currentOf(langData).level === "A1") { openA1(nextLessonN(UNLOCK_ALL_PREVIEW));
      } else { window.location.href = "lessons.html"; } });

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
              ${program.entry ? `
                <button class="lt-opt" data-palier="${program.entry.code}" style="text-align:left">
                  <strong>${program.entry.code}</strong> — ${program.entry.title}
                  <span style="display:block;font-size:11.5px;color:var(--ink-soft);margin-top:2px">Module d'entrée, avant ${level}.1</span>
                </button>` : ""}
              ${program.paliers.map((p) => `
                <button class="lt-opt" data-palier="${p.code}" style="text-align:left">
                  <strong>${p.code}</strong> — ${p.title}${p.media ? ` <span style="font-size:12px">${p.media.slice(0, 2)}</span>` : ""}
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

    const p = program.paliers.find((x) => x.code === palier) || (program.entry && program.entry.code === palier ? program.entry : null);
    container.innerHTML = `
      <button class="settings-back" id="progBackToOverview">${t("prog_back", lang)}</button>
      <div class="dash-box">
        <h3>${p.code} — ${p.title}</h3>
        <div class="card">
          <div style="font-weight:700;font-size:12.5px;color:var(--ink-soft)">${t("prog_objective_label", lang)}</div>
          <p style="font-size:13.5px;margin:6px 0 0">${p.objective}</p>
          ${code === "en" && level === "A1" && A1_LIST.some((L) => L.code === p.code) && (UNLOCK_ALL_PREVIEW || langData.leveled) ? `<button class="btn btn-primary" id="progOpenLesson" style="width:100%;margin-top:12px"${isUnlocked(A1_LIST.find((L) => L.code === p.code).n, UNLOCK_ALL_PREVIEW) ? "" : " disabled"}>Ouvrir la leçon ${p.code}</button>` : ""}
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
      ${p.media ? `
      <div class="dash-box">
        <h3>🎵🎬 Musique &amp; Ciné</h3>
        <div class="card" style="font-size:13px;line-height:1.55">${p.media}<div style="font-size:11.5px;color:var(--ink-soft);margin-top:6px">Dans la leçon, à l'étape « Lecture », juste après le texte.</div></div>
      </div>
      ` : ""}
      <div class="dash-box">
        <h3>${t("prog_activities_label", lang)}</h3>
        <div class="card"><ol style="margin:0;padding-left:18px;font-size:13px">${p.activities.map((a) => `<li style="margin-bottom:4px">${a}</li>`).join("")}</ol></div>
        <p style="font-size:11.5px;color:var(--ink-soft);margin-top:10px">${t("prog_end_note", lang)}</p>
      </div>
    `;
    container.querySelector("#progBackToOverview").addEventListener("click", () => { openProgram = { code, level, palier: null }; paint(); });
    const openLesson = container.querySelector("#progOpenLesson");
    if (openLesson) openLesson.addEventListener("click", async () => {
      try { const B = await loadBundle(A1_LIST.find((L) => L.code === p.code).n); renderLesson(shellRoot, B, { onExit: () => renderShell(shellRoot) }); }
      catch (e) { console.error(e); alert("Cette leçon n’a pas pu s’ouvrir."); }
    });
  }
}
