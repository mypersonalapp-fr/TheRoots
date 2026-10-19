// The Roots — bulletin scolaire A1 : lit les tests de fin de leçon (stockage local) et en déduit notes, lacunes et rattrapage.
import { A1_LIST, EXAM_KEY } from "./lecons-a1.js?v=20261019d2";
import { A2_LIST, A2_BUILT } from "./lecons-a2.js?v=20261019d2";
import { TRADUCTION_A1, TRADUCTION_A2 } from "./traduction-a1a2.js?v=20261019d2";
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
  let exam = null;
  if (level === "A1") {
    const p = read(EXAM_KEY), h = p.testHist || [], sc = parseInt(((p.scores || {}).test || "").split("/")[0], 10), best = h.length ? h.reduce((m, x) => Math.max(m, x.total), 0) : (Number.isFinite(sc) ? sc : 0);
    exam = { done: h.length > 0 || Number.isFinite(sc), best, passed: !!(p.done && p.done.test) || best >= PASS, open: tests.every((t) => t.passed) };
    // Grand contrôle raté : il a lui aussi sa série de rattrapage (questions tirées des 12 leçons, selon la compétence faible).
    if (exam.done && !exam.passed) {
      const l = h[h.length - 1] || null;
      gaps.push({ n: 0, id: "EXAM-A1", legacy: !(l && l.pts), code: "A1", title: "Grand contrôle", miss: PASS - best, list: ((l && l.gaps) || []).slice(0, 3), weak: l && l.pts ? SK.filter(([, m], i) => l.pts[i] / m < 0.8).map(([nm]) => nm) : [] });
    }
  }
  // Traduction (EN→FR et FR→EN) : meilleur score par sens, enregistré par la page « Traduction » de chaque leçon.
  const TR = level === "A2" ? TRADUCTION_A2 : TRADUCTION_A1;
  const trad = LIST.filter((L) => TR[L.n]).map((L) => { const t = read(L.key).trad || {}, g = (d) => t[d] || null; return { n: L.n, code: L.code, title: L.titleFr, fr: g("fr"), en: g("en") }; });
  const tOk = trad.reduce((a, x) => a + (x.fr ? x.fr.ok : 0) + (x.en ? x.en.ok : 0), 0), tTot = trad.reduce((a, x) => a + (x.fr ? x.fr.tot : 0) + (x.en ? x.en.tot : 0), 0);
  const tradAvg = tTot ? Math.round((tOk / tTot) * 100) : null;
  // Dictée : meilleur score (phrases justes du premier coup) par leçon.
  const dict = LIST.map((L) => { const d = read(L.key).dict || null; return { n: L.n, code: L.code, title: L.titleFr, d }; }).filter((x) => x.d);
  const dOk = dict.reduce((a, x) => a + x.d.ok, 0), dTot = dict.reduce((a, x) => a + x.d.tot, 0);
  const dictAvg = dTot ? Math.round((dOk / dTot) * 100) : null;
  return { exam, tests, skills, gaps, avg, trad, tradAvg, dict, dictAvg, nDone: done.length, nOk: done.filter((t) => t.passed).length };
}

// ---- Exercices en plus (rattrapage) : 5 questions tirées des exercices corrigés de la leçon, selon la compétence faible ----
const RT_KEY = "the_roots_a1_rattrapage_v1";
export const rtLoad = () => read(RT_KEY);
export const rtSeries = (id) => (rtLoad()[id] || {}).series || 0;
/** Verrou « Repasser le test » : après un échec, il faut terminer au moins une série de rattrapage faite APRÈS cet échec. */
export function retakeLocked(prog, id) {
  const h = (prog && prog.testHist) || [], last = h[h.length - 1];
  const sc = parseInt((((prog || {}).scores || {}).test || "").split("/")[0], 10);
  const failed = last ? !last.passed : (Number.isFinite(sc) && sc < PASS && !((prog.done || {}).test));
  if (!failed || (prog.done || {}).test) return false;
  return rtSeries(id) <= ((last && last.rt) || 0);
}
export function rtSave(id, ok, tot) { const o = rtLoad(), d = new Date().toISOString().slice(0, 10), h = ((o[id] || {}).hist || []).concat([{ d, ok, tot }]).slice(-20); o[id] = { series: ((o[id] || {}).series || 0) + 1, last: `${ok}/${tot}`, d, hist: h }; try { localStorage.setItem(RT_KEY, JSON.stringify(o)); } catch (e) { /* stockage indisponible */ } }
// Rattrapages faits, avec l'évolution du test : première note → meilleure note.
export function rattrapagesFaits(level) {
  const o = rtLoad(), B = bulletinA1(level);
  return B.tests.filter((t) => o[t.id] && o[t.id].series).map((t) => {
    const p = read((level === "A2" ? A2_LIST : A1_LIST).find((L) => L.code === t.id).key), h = p.testHist || [];
    return { id: t.id, title: t.title, series: o[t.id].series, hist: o[t.id].hist || [], first: h.length ? h[0].total : null, best: t.best, passed: t.passed, retaken: h.length > 1 };
  });
}
const kindOf = (t) => /^Vocabulaire/.test(t) ? "voc" : /^(Mise en situation|Lecture|Écoute)/.test(t) ? "lis" : "gram";
export function pickRattrapage(exercises, weak, seed) {
  const want = new Set();
  (weak.length ? weak : ["Grammaire"]).forEach((w) => { if (/Grammaire/.test(w)) want.add("gram"); else if (/Expression/.test(w)) { want.add("gram"); want.add("voc"); } else want.add("lis"); });
  const pools = [...want].map((k) => exercises.filter((p) => kindOf(p.title) === k).flatMap((p) => p.qs.map((q) => ({ page: p.title, q }))));
  const out = []; let i = seed || 0;
  for (let r = 0; out.length < 5 && r < 40; r++) { const pool = pools[r % pools.length]; if (!pool.length) continue; const it = pool[(i * 7 + r * 3) % pool.length]; if (!out.includes(it)) out.push(it); }
  return out.slice(0, 5);
}
