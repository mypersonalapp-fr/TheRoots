// Questions complémentaires générées à partir du texte lui-même (phrases à compléter).
// Objectif : jamais un écran avec une seule question et beaucoup de vide ; la bonne réponse est toujours dans le texte.
const STOP = new Set("this that with from have has had were been will would could should about there their they them then than what when where which while your yours ours into some very also just only each many much more most over such like does doing done".split(" "));
const h = (s) => { let x = 7; for (const c of String(s)) x = (x * 31 + c.charCodeAt(0)) >>> 0; return x; };
const words = (s) => (String(s).match(/[A-Za-zÀ-ÿ'’-]+/g) || []);
const clean = (w) => w.replace(/^['’-]+|['’-]+$/g, "");
const sentences = (t) => String(t).replace(/\s+/g, " ").split(/(?<=[.!?])\s+/).map((x) => x.trim()).filter((x) => words(x).length >= 4);

function cloze(sent, pool, pref, gloss, seed) {
  const ws = words(sent).map(clean).filter(Boolean);
  const low = ws.map((w) => w.toLowerCase());
  const cnt = (w) => low.filter((x) => x === w.toLowerCase()).length;
  let cands = ws.filter((w, i) => w.length >= 4 && !STOP.has(w.toLowerCase()) && cnt(w) === 1 && !(i === 0 && /^[A-Z]/.test(w) && ws.length > 1 && false));
  const pf = cands.filter((w) => pref.has(w.toLowerCase()));
  if (pf.length) cands = pf;
  if (!cands.length) return null;
  const target = cands.sort((a, b) => b.length - a.length || a.localeCompare(b))[h(seed) % Math.min(cands.length, 2)] || cands[0];
  const inSent = new Set(low);
  const dis = [];
  [...pool].sort((a, b) => h(a + seed) - h(b + seed)).forEach((w) => {
    const lw = w.toLowerCase();
    if (dis.length < 2 && lw !== target.toLowerCase() && !inSent.has(lw) && Math.abs(w.length - target.length) <= 4) dis.push(w);
  });
  if (dis.length < 2) return null;
  const opts = [target, ...dis].sort((a, b) => h(a + seed + "o") - h(b + seed + "o"));
  const blanked = sent.replace(new RegExp("\\b" + target.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + "\\b"), "___");
  return [`« ${blanked} »${gloss ? " — " + gloss : ""}`, opts, opts.indexOf(target), `La phrase : « ${sent} »`];
}

// kind : "reading" | "listening" | "grammar". need : nombre minimum de questions par page.
export function withExtraQs(kind, p, vocabWords, need = 3) {
  const qs = (p.qs || []).slice();
  if (qs.length >= need) return qs;
  const src = kind === "grammar" ? (p.examples || []).map(([en, fr]) => ({ s: en, g: fr })) : sentences(p.text || "").map((s) => ({ s }));
  if (!src.length) return qs;
  const pool = new Set([...words(src.map((x) => x.s).join(" ")).map(clean).filter((w) => w.length >= 4 && !STOP.has(w.toLowerCase())), ...vocabWords.filter((w) => /^[A-Za-z]{4,}$/.test(w))]);
  const pref = new Set(kind === "grammar" ? (p.table || []).flatMap((r) => words(r[0] + " " + r[1])).map((w) => clean(w).toLowerCase()).filter((w) => w.length >= 2) : []);
  const asked = new Set(qs.map((q) => q[0]));
  let k = 0;
  for (const x of src) {
    if (qs.length >= need) break;
    const c = cloze(x.s, pool, pref, x.g && "(" + x.g + ")", (p.title || "") + x.s + k++);
    if (c && !asked.has(c[0])) { qs.push(c); asked.add(c[0]); }
  }
  return qs;
}
