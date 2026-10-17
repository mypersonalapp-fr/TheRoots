// The Roots — bulletin scolaire A1 : lit les tests de fin de leçon (stockage local) et en déduit notes, lacunes et rattrapage.
import { A1_LIST } from "./lecons-a1.js?v=20261018z";
import { A2_LIST, A2_BUILT } from "./lecons-a2.js?v=20261018z";
export const PASS = 32;
export const SK = [["Compréhension écrite", 7.5], ["Compréhension orale", 7.5], ["Grammaire", 10], ["Expression écrite", 7.5], ["Expression orale", 7.5]];
const read = (key) => { try { return JSON.parse(localStorage.getItem(key) || "{}"); } catch (e) { return {}; } };
export function bulletinA1(level = "A1") {
  const LIST = level === "A2" ? A2_LIST.filter((L) => A2_BUILT.includes(L.n)) : A1_LIST;
  const tests = LIST.map((L) => {
    const p = read(L.key), sc = parseInt(((p.scores || {}).test || "").split("/")[0], 10);
    // Mise à jour : un test noté avant l'enregistrement du détail (testHist) entre dans la même norme, marqué « ancien » jusqu'à ce qu'il soit repassé.
    const h = (p.testHist && p.testHist.length) ? p.testHist : (Number.isFinite(sc) ? [{ total: sc, passed: sc >= PASS }] : []), last = h[h.length - 1] || null;
    const best = h.reduce((m, x) => Math.max(m, x.total), 0);
    return { n: L.n, id: L.code, code: L.code, title: L.titleFr, done: h.length > 0, best, passed: !!(p.done && p.done.test) || best >= PASS, last, tries: h.length, started: !!p.scores || Object.keys(p.done || {}).length > 0 };
  });
  const done = tests.filter((t) => t.done);
  const withPts = done.filter((t) => t.last && t.last.pts);
  const skills = SK.map(([name, max], i) => ({ name, max, avg: withPts.length ? withPts.reduce((a, t) => a + t.last.pts[i], 0) / withPts.length : null }));
  const gaps = tests.filter((t) => t.done && !t.passed).map((t) => ({ n: t.n, id: t.id, legacy: !t.last.pts, code: t.code, title: t.title, miss: PASS - t.last.total, list: (t.last.gaps || []).slice(0, 3), weak: t.last.pts ? SK.filter(([, m], i) => t.last.pts[i] / m < 0.8).map(([nm]) => nm) : [] }));
  const avg = done.length ? done.reduce((a, t) => a + t.best, 0) / done.length : null;
  return { tests, skills, gaps, avg, nDone: done.length, nOk: done.filter((t) => t.passed).length };
}

// ---- Exercices en plus (rattrapage) : 5 questions tirées des exercices corrigés de la leçon, selon la compétence faible ----
const RT_KEY = "the_roots_a1_rattrapage_v1";
export const rtLoad = () => read(RT_KEY);
export function rtSave(id, ok, tot) { const o = rtLoad(); o[id] = { series: ((o[id] || {}).series || 0) + 1, last: `${ok}/${tot}`, d: new Date().toISOString().slice(0, 10) }; try { localStorage.setItem(RT_KEY, JSON.stringify(o)); } catch (e) { /* stockage indisponible */ } }
const kindOf = (t) => /^Vocabulaire/.test(t) ? "voc" : /^(Mise en situation|Lecture|Écoute)/.test(t) ? "lis" : "gram";
export function pickRattrapage(exercises, weak, seed) {
  const want = new Set();
  (weak.length ? weak : ["Grammaire"]).forEach((w) => { if (/Grammaire/.test(w)) want.add("gram"); else if (/Expression/.test(w)) { want.add("gram"); want.add("voc"); } else want.add("lis"); });
  const pools = [...want].map((k) => exercises.filter((p) => kindOf(p.title) === k).flatMap((p) => p.qs.map((q) => ({ page: p.title, q }))));
  const out = []; let i = seed || 0;
  for (let r = 0; out.length < 5 && r < 40; r++) { const pool = pools[r % pools.length]; if (!pool.length) continue; const it = pool[(i * 7 + r * 3) % pool.length]; if (!out.includes(it)) out.push(it); }
  return out.slice(0, 5);
}
