// Contrôle d'intégrité d'une leçon A2 : node tools/valider-lecon.mjs 3   (A2.3)
// Vérifie : 3 choix distincts, bonne réponse valide, aucune question en double dans un même jeu, missions cohérentes.
const n = process.argv[2], S = `A2${n}`;
const m = await import(`../js/data/lecon-a2${n}-data.js`);
const err = [];
const qcheck = (where, q) => {
  const [stem, ch, ok] = q;
  if (!stem || !Array.isArray(ch) || ch.length !== 3) err.push(`${where}: 3 choix attendus — ${stem}`);
  else {
    if (new Set(ch.map((c) => c.toLowerCase())).size !== 3) err.push(`${where}: choix en double — ${stem} ${JSON.stringify(ch)}`);
    if (!(ok >= 0 && ok < 3)) err.push(`${where}: index invalide — ${stem}`);
  }
};
const dupStems = (where, qs) => { const s = qs.map((q) => q[0]); s.forEach((x, i) => { if (s.indexOf(x) !== i) err.push(`${where}: question en double — ${x}`); }); };
for (const v of m[`VOCAB_${S}`]) if (v.q) qcheck("vocab " + v.title, v.q);
for (const g of m[`GRAMMAR_${S}`]) { g.qs.forEach((q) => qcheck("grammaire " + g.title, q)); if (g.table.length !== 4) err.push("table != 4 : " + g.title); }
for (const r of m[`READING_${S}`]) r.qs.forEach((q) => qcheck("lecture " + r.who, q));
for (const l of m[`LISTENING_${S}`]) l.qs.forEach((q) => qcheck("écoute " + l.title, q));
for (const e of m[`EXERCISES_${S}`]) { e.qs.forEach((q) => qcheck("exercices " + e.title, q)); dupStems("exercices " + e.title, e.qs); }
for (const t of m[`TEST_TEXTS_${S}`]) t.q.forEach((q) => qcheck("test texte " + t.title, q));
for (const t of m[`TEST_AUDIOS_${S}`]) t.q.forEach((q) => qcheck("test audio", q));
m[`TEST_GRAMMAR_${S}`].forEach((q) => qcheck("test grammaire", q)); dupStems("test grammaire", m[`TEST_GRAMMAR_${S}`]);
for (const x of m[`EXPRESSION_${S}`]) {
  const low = x.model.toLowerCase();
  x.checks.forEach(([l, re]) => { if (!new RegExp(re, "i").test(low)) err.push(`expression ${x.title}: le modèle ne passe pas « ${l} »`); });
  if (x.checks.length !== x.prompts.length) err.push("expression: prompts != checks " + x.title);
}
const D = m[`DATA_${S}`];
for (const [k, arr] of Object.entries(D)) for (const it of arr) {
  if (it.groups) for (const g of it.groups) { if (!g.opts.some((o) => o.v === g.answer)) err.push(`mission ${k}: réponse absente — ${it.say}`); if (new Set(g.opts.map((o) => o.v)).size !== g.opts.length) err.push(`mission ${k}: options en double — ${it.say}`); }
  else { const b = [...it.bank]; for (const a of it.answer) { const i = b.indexOf(a); if (i < 0) err.push(`mission ${k}: « ${a} » absent de la banque — ${it.prompt}`); else b.splice(i, 1); } }
}
const E = (await import("../js/data/expression-plus-a1.js")).EXPRESSION_PLUS_A2[n] || [];
for (const x of E) x.checks.forEach(([l, re]) => { if (!new RegExp(re, "i").test(x.model.toLowerCase())) err.push(`expression+ ${x.title}: le modèle ne passe pas « ${l} »`); });
const DL = (await import("../js/data/dialogues-a2.js")).DIALOGUES_A2["A2." + n] || [], SI = (await import("../js/data/situations-a2.js")).SITUATIONS_A2["A2." + n] || [];
for (const d of DL) for (const t of d.turns) if (!t.ok.some((re) => new RegExp(re, "i").test(t.model.toLowerCase()))) err.push(`dialogue ${d.title}: le modèle « ${t.model} » ne passe pas`);
for (const s of SI) if (!s.ok.some((re) => new RegExp(re, "i").test(s.model.toLowerCase()))) err.push(`situation: le modèle « ${s.model} » ne passe pas`);
console.log(`A2.${n} : ${m[`VOCAB_${S}`].length} vocab, ${m[`GRAMMAR_${S}`].length} grammaire, ${m[`READING_${S}`].length} lectures, ${m[`LISTENING_${S}`].length} écoutes, ${m[`EXERCISES_${S}`].length} exercices, ${E.length} expressions+, ${DL.length} dialogues, ${SI.length} situations`);
console.log(err.length ? err.join("\n") : "OK : aucune erreur d'intégrité");
process.exit(err.length ? 1 : 0);
