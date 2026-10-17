// The Roots — bulletin scolaire A1 : lit les tests de fin de leçon (stockage local) et en déduit notes, lacunes et rattrapage.
import { A1_LIST } from "./lecons-a1.js?v=20261018y";
export const PASS = 32;
export const SK = [["Compréhension écrite", 7.5], ["Compréhension orale", 7.5], ["Grammaire", 10], ["Expression écrite", 7.5], ["Expression orale", 7.5]];
const read = (key) => { try { return JSON.parse(localStorage.getItem(key) || "{}"); } catch (e) { return {}; } };
export function bulletinA1() {
  const tests = A1_LIST.map((L) => {
    const p = read(L.key), h = p.testHist || [], last = h[h.length - 1] || null;
    const best = h.reduce((m, x) => Math.max(m, x.total), 0);
    return { n: L.n, code: L.code, title: L.titleFr, done: h.length > 0, best, passed: !!(p.done && p.done.test) || best >= PASS, last, tries: h.length, started: !!p.scores || Object.keys(p.done || {}).length > 0 };
  });
  const done = tests.filter((t) => t.done);
  const withPts = done.filter((t) => t.last && t.last.pts);
  const skills = SK.map(([name, max], i) => ({ name, max, avg: withPts.length ? withPts.reduce((a, t) => a + t.last.pts[i], 0) / withPts.length : null }));
  const gaps = tests.filter((t) => t.done && !t.passed).map((t) => ({ code: t.code, title: t.title, miss: PASS - t.last.total, list: (t.last.gaps || []).slice(0, 3), weak: t.last.pts ? SK.filter(([, m], i) => t.last.pts[i] / m < 0.8).map(([nm]) => nm) : [] }));
  const avg = done.length ? done.reduce((a, t) => a + t.best, 0) / done.length : null;
  return { tests, skills, gaps, avg, nDone: done.length, nOk: done.filter((t) => t.passed).length };
}
