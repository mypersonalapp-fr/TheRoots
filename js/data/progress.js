// The Roots — progression détaillée (23/09) : jauges par compétence,
// contrôles A1 / A2 / final, renforts et rappels, missions de récupération,
// et la plante (graine → arbre) de chaque langue.
//
// Ces données sont écrites à la fois par l'appli (Compréhension, Expression)
// et par lessons.html (leçons, contrôles, missions), avec les MÊMES clés du
// stockage du téléphone — lessons.html ne peut pas importer ce fichier, il a
// sa propre copie des petites fonctions d'écriture (voir le bloc
// "CONTRÔLES A1 / A2 / FINAL" dans lessons.html).

import { store } from "./store.js?v=20260924j";

const K_SKILLS = "the_roots_skills_v1";
const K_CTRL = "the_roots_controls_v1";
const K_ERR = "the_roots_errors_v1";
const K_BOOST = "the_roots_boosts_v1";
const K_TITLES = "the_roots_lesson_titles_v1";
const K_LESSON_EN = "the_roots_lesson_en_gb";

export const SKILLS = [
  ["co", "Compréhension orale"],
  ["ce", "Compréhension écrite"],
  ["eo", "Expression orale"],
  ["ee", "Expression écrite"],
  ["gr", "Grammaire"],
  ["vo", "Vocabulaire"],
  ["pr", "Prononciation"],
];
const SKILL_NAME = Object.fromEntries(SKILLS);

const STAGES = [
  { name: "Graine", level: "Test à faire" },
  { name: "Pousse", level: "A1" },
  { name: "Jeune arbre", level: "A2" },
  { name: "Arbuste", level: "B1" },
  { name: "Arbre", level: "B2" },
  { name: "Grand arbre", level: "C1" },
  { name: "Arbre centenaire", level: "C2" },
];
const LEVELS = ["A1", "A2", "B1", "B2", "C1", "C2"];

function get(key, dflt) {
  try { const v = JSON.parse(localStorage.getItem(key) || "null"); return v == null ? dflt : v; } catch (e) { return dflt; }
}
function set(key, val) {
  try { localStorage.setItem(key, JSON.stringify(val)); } catch (e) { /* stockage indisponible */ }
}

// Enregistre un résultat (depuis Compréhension / Expression). ok = 0..1.
export function recordSkill(lang, skill, ok, weight = 1) {
  const all = get(K_SKILLS, {});
  const m = all[lang] || {};
  const s = m[skill] || { ok: 0, total: 0 };
  s.ok += Math.max(0, Math.min(1, ok)) * weight;
  s.total += weight;
  if (s.total > 80) { s.ok *= 0.8; s.total *= 0.8; }
  s.at = Date.now();
  m[skill] = s; all[lang] = m; set(K_SKILLS, all);
}

// Jauges : pourcentage par compétence, null tant qu'il y a trop peu de données.
export function skillGauges(lang) {
  const m = get(K_SKILLS, {})[lang] || {};
  return SKILLS.map(([id, label]) => {
    const s = m[id];
    return { id, label, pct: s && s.total >= 3 ? Math.round((s.ok / s.total) * 100) : null };
  });
}

// Forces / à travailler / objectif, à partir des jauges.
export function profileSummary(lang) {
  const g = skillGauges(lang).filter((x) => x.pct != null);
  if (g.length < 2) return null;
  const sorted = g.slice().sort((a, b) => b.pct - a.pct);
  const best = sorted[0], worst = sorted[sorted.length - 1];
  const GOAL = {
    co: "Mieux comprendre à l'oral : écouter un peu chaque jour, sans lire.",
    ce: "Lire plus souvent de petits textes pour gagner en aisance.",
    eo: "Passer de « je comprends » à « je parle ».",
    ee: "Écrire tes propres phrases, sans modèle sous les yeux.",
    gr: "Consolider la grammaire des dernières leçons.",
    vo: "Enrichir ton vocabulaire avec les missions de récupération.",
    pr: "Travailler la prononciation au micro dans Expression orale.",
  };
  return {
    strength: best.pct >= 70 ? `${best.label} (${best.pct} %)` : null,
    work: `${worst.label} (${worst.pct} %)`,
    goal: GOAL[worst.id],
  };
}

export function lessonTitles() { return get(K_TITLES, {}); }
export function lessonTitle(id) { return lessonTitles()[id] || `Leçon ${id}`; }

export function controls(lang) { return get(K_CTRL, {})[lang] || {}; }

export function boosts(lang) { return get(K_BOOST, {})[lang] || {}; }

// Missions : leçons avec des erreurs, triées ; "due" = à faire aujourd'hui.
export function missions(lang) {
  const m = get(K_ERR, {})[lang] || {};
  const now = Date.now();
  return Object.keys(m).map((id) => ({ id: Number(id), title: lessonTitle(id), ...m[id], due: (m[id].due || 0) <= now }))
    .filter((x) => x.count > 0)
    .sort((a, b) => (b.due - a.due) || (b.count - a.count));
}
export function dueMissions(lang) { return missions(lang).filter((x) => x.due); }

export function stageLabel(stage) { return STAGES[Math.max(0, Math.min(6, stage))]; }

// Ordre pédagogique des leçons d'anglais par niveau (miroir de LESSON_ORDER dans lessons.html).
// B1.0 (52) et B2.0 (53) ne comptent que si lessons.html les a publiés dans les titres de leçons
// (the_roots_lesson_titles_v1 — c.-à-d. si leur fichier de données est déposé) : sans eux, les
// pourcentages restent exactement ceux d'avant. "B2ctrl" = place d'un futur contrôle B2.
function levelLessons() {
  const titles = lessonTitles();
  const has = (n) => Object.prototype.hasOwnProperty.call(titles, String(n));
  const range = (a, b) => { const o = []; for (let i = a; i <= b; i++) o.push(i); return o; };
  return {
    A1: range(-1, 12),
    A2: range(13, 26),
    B1: (has(52) ? [52] : []).concat(range(27, 39)),
    B2: (has(53) ? [53] : []).concat(range(40, 51), ["B2ctrl"]),
  };
}
// Niveau et pourcentage (position dans le niveau, 1re leçon = 1/N) d'un numéro de leçon, ou null.
function lessonLevelPos(lesson) {
  if (lesson == null) return null;
  const lv = levelLessons();
  for (const level of ["A1", "A2", "B1", "B2"]) {
    const i = lv[level].indexOf(lesson);
    if (i >= 0) return { level, pct: Math.round(((i + 1) / lv[level].length) * 100) };
  }
  // Numéro inconnu au-delà du B2 (ne devrait pas arriver) : fin du B2, comme avant.
  if (lesson > 53) return { level: "B2", pct: 100 };
  return null;
}

// Niveau de travail + plante d'une langue. Pour l'anglais (seule langue avec
// des leçons pour l'instant), on suit les leçons et les contrôles ; sinon, le
// résultat du test de positionnement.
export function langGrowth(code) {
  const l = store.getLang(code) || {};
  if (code === "en") {
    let lesson = null;
    try { const v = parseInt(localStorage.getItem(K_LESSON_EN), 10); if (!isNaN(v)) lesson = v; } catch (e) { /* rien */ }
    const c = controls("en");
    // Tant que le test de positionnement n'est pas passé (leveled=false), la
    // plante reste une graine — même si "the_roots_lesson_en_gb" contient déjà
    // une valeur (ex. -1 "Fondamentaux" écrite dès l'ouverture de lessons.html,
    // avant tout accès normalement bloqué ; voir la garde ajoutée dans
    // lessons.html le 24/09). Avant ce correctif, une simple ouverture de
    // lessons.html sans test ni leçon faisait déjà apparaître une pousse.
    if (!l.leveled) return { stage: 0, level: null, pct: 0 };
    let level = "A1", pct = 0;
    // Numéros de leçon (voir lessons.html, LESSON_ORDER) : A1 -1..12 · A2 13..26 (26 = grand contrôle
    // final) · B1 52 (B1.0) puis 27..38 (+ 39 réservée au futur Grand Contrôle B1) · B2 53 (B2.0) puis
    // 40..51 (+ une place pour un futur contrôle B2). 52 et 53 ne suivent pas l'ordre des numéros :
    // le niveau et le pourcentage se calculent d'après la POSITION dans l'ordre pédagogique.
    const r = lessonLevelPos(lesson);
    if (r && r.level === "B2") { level = "B2"; pct = r.pct; }
    else if ((c.FINAL && c.FINAL.passed) || (r && r.level === "B1")) { level = "B1"; pct = r && r.level === "B1" ? r.pct : 0; }
    else if ((c.A1 && c.A1.passed) || (r && r.level === "A2")) { level = "A2"; pct = r && r.level === "A2" ? r.pct : 0; }
    else { level = "A1"; pct = r && r.level === "A1" ? r.pct : 0; }
    // Test de positionnement plus haut que le parcours (ex. B1 d'entrée) : on garde le plus haut.
    if (l.level && LEVELS.indexOf(l.level) > LEVELS.indexOf(level) && (lesson == null || lesson === -1 || lesson === 0)) { level = l.level; pct = 0; }
    return { stage: LEVELS.indexOf(level) + 1, level, pct };
  }
  if (!l.leveled) return { stage: 0, level: null, pct: 0 };
  return { stage: Math.max(1, LEVELS.indexOf(l.level) + 1), level: l.level, pct: Math.round((l.progress || 0) * 100) };
}

export { SKILL_NAME };
