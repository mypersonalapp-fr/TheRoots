// The Roots — registre des 12 leçons du niveau A1 (anglais) : charge à la demande les données de chaque leçon
// et les met au format attendu par renderLesson() (js/screens/lecon-a11.js).
import { A1_EN_PALIERS } from "./programme-a1-en.js?v=20260930a";

// Objectifs courts pour l'écran d'accueil : une ligne chacun (le détail reste dans les pages de grammaire).
const cut = (t, n = 64) => { let x = String(t).split(/ [—–-] | \(|\.\s/)[0].replace(/^Grammaire : /, ""); x = x.split(" : ")[0]; if (x.length > n) { x = x.slice(0, n); x = x.slice(0, x.lastIndexOf(" ")) + "…"; } return x; };
export const shortGoals = (base) => [cut(base.objective.split(", ")[0], 70), ...base.grammar.slice(0, 2).map((g) => "Grammaire : " + cut(g, 40))];
export const A1_TITLES_FR = ["Mon identité", "Ma famille", "Mes amis", "Transports et directions", "Mes goûts", "Manger et boire", "Faire les achats", "Se repérer en ville", "Voyager", "Travail et études", "Le temps et la météo", "Parler avec les autres"];
const KEYS = (n) => (n === 1 ? "the_roots_a11_lesson_v1" : `the_roots_a1${n}_lesson_v1`);

export const A1_LIST = A1_EN_PALIERS.slice(0, 12).map((p, i) => ({ n: i + 1, code: p.code, titleEn: p.title, titleFr: A1_TITLES_FR[i], key: KEYS(i + 1) }));

/** Statut d'une leçon lu dans le stockage local : { started, passed, score } */
export function lessonStatus(n) {
  try {
    const p = JSON.parse(localStorage.getItem(KEYS(n)) || "{}");
    return { started: Object.keys(p.done || {}).length > 0 || !!p.scores, passed: !!(p.done && p.done.test), score: (p.scores || {}).test || null };
  } catch (e) { return { started: false, passed: false, score: null }; }
}

/** Une leçon est ouverte si la précédente est validée (ou si le mode vérification est actif). */
export function isUnlocked(n, unlockAll) { return unlockAll || n === 1 || lessonStatus(n - 1).passed; }
export function nextLessonN(unlockAll) {
  for (let n = 1; n <= 12; n++) if (isUnlocked(n, unlockAll) && !lessonStatus(n).passed) return n;
  return 12;
}

const V = "20261018b9";
import { EXPRESSION_PLUS_A1 } from "./expression-plus-a1.js?v=20261018b9";
import { plusPages } from "./vocab-plus-a1.js?v=20261018b9";
import { TEST_PLUS_A1 } from "./test-plus-a1.js?v=20261018b9";
const coreSet = (pages) => new Set(pages.flatMap((p) => (p.words || []).map((w) => String(w[0]).toLowerCase())));
export async function loadBundle(n) {
  if (n === 1) { const m = await import("../screens/lecon-a11.js?v=20261018b9"); return m.BUNDLE_A11; }
  const s = `A1${n}`, base = A1_EN_PALIERS[n - 1];
  const m = await import(`./lecon-a1${n}-data.js?v=${V}`);
  const city = n === 2 ? await import(`./roots-city-a12-data.js?v=${V}`) : m;
  const core = m[`VOCAB_${s}`], vocab = [...core, ...plusPages(n, coreSet(core))], exprs0 = m[`EXPRESSION_${s}`], exprs = [...exprs0, ...(EXPRESSION_PLUS_A1[n] || [])];
  const w = exprs0[0], o = exprs0[1] || exprs0[0];
  return {
    code: base.code, head: `${base.code} – ${A1_TITLES_FR[n - 1]}`, titleFr: A1_TITLES_FR[n - 1], progressKey: KEYS(n),
    goals: shortGoals(base),
    vocab, grammar: m[`GRAMMAR_${s}`], grammarSub: "Les règles de la leçon, avec des exemples.",
    reading: m[`READING_${s}`], listening: m[`LISTENING_${s}`], exercises: m[`EXERCISES_${s}`], expression: exprs, transv: null,
    testTexts: [...m[`TEST_TEXTS_${s}`], ...TEST_PLUS_A1[n].texts], testAudios: [...m[`TEST_AUDIOS_${s}`], ...TEST_PLUS_A1[n].audios], testGrammar: [...m[`TEST_GRAMMAR_${s}`], ...TEST_PLUS_A1[n].gram], testW: 0, testO: exprs0[1] ? 1 : 0,
    testWriteTitle: w.title, testWriteLead: `Écris 4 phrases : ${w.prompts.join(" ")}`,
    testOralTitle: o.title, testOralLead: o.prompts.join(" "),
    adviceTopic: `${base.title} (${base.code})`, adviceLede: "Réponds avec bienveillance.",
    city: { missions: city[`MISSIONS_${s}`], data: city[`DATA_${s}`] },
  };
}

/* ----- Grand contrôle de fin de A1 : tire dans les banques de test des 12 leçons ----- */
export const EXAM_KEY = "the_roots_a1_exam_v1";
export function examStatus() {
  try { const p = JSON.parse(localStorage.getItem(EXAM_KEY) || "{}"); return { passed: !!(p.done && p.done.test), score: (p.scores || {}).test || null }; }
  catch (e) { return { passed: false, score: null }; }
}
export const examUnlocked = (unlockAll) => unlockAll || A1_LIST.every((L) => lessonStatus(L.n).passed);
export async function loadExamBundle() {
  const all = [];
  for (let n = 1; n <= 12; n++) all.push(await loadBundle(n));
  const base = all[0];
  return {
    exam: true, code: "A1", head: "le Grand contrôle A1", titleFr: "Grand contrôle de fin de A1", progressKey: EXAM_KEY,
    goals: [], vocab: [], grammar: [], reading: [], listening: [], exercises: [], expression: base.expression, transv: null,
    testTexts: all.map((b) => b.testTexts[0]), testAudios: all.map((b) => b.testAudios[0]),
    testGrammar: all.flatMap((b) => b.testGrammar.slice(0, 5)), testW: 0, testO: 1,
    testWriteTitle: "Présente-toi et parle de ta vie", testWriteLead: "Écris 4 phrases : ton nom et ton âge, ta famille, ce que tu aimes, où tu vas aujourd’hui.",
    testOralTitle: base.testOralTitle, testOralLead: base.testOralLead, adviceTopic: "Grand contrôle A1", adviceLede: "Réponds avec bienveillance.", city: null,
  };
}
