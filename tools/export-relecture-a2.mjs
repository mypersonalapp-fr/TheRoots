// Exporte tout l'anglais des leçons A2 construites dans documentation/RELECTURE_NATIF_A2.md + contrôles automatiques.
import fs from "fs";
const mods = { "A2.0": "../js/data/lecon-a20-data.js", "A2.1": "../js/data/lecon-a21-data.js", "A2.2": "../js/data/lecon-a22-data.js", "A2.3": "../js/data/lecon-a23-data.js", "A2.4": "../js/data/lecon-a24-data.js", "A2.5": "../js/data/lecon-a25-data.js", "A2.6": "../js/data/lecon-a26-data.js" };
const extra = { dialogues: ["../js/data/dialogues-a2.js", "DIALOGUES_A2"], situations: ["../js/data/situations-a2.js", "SITUATIONS_A2"] };
const isEn = (s) => typeof s === "string" && s.length > 8 && /[A-Za-z]/.test(s) && !/[éèêàâçùûôîïœ]/i.test(s) && / /.test(s) && !/^(https?:|assets\/|js\/)/.test(s) && !/[\\^$]|\(\?:/.test(s);
const walk = (o, out, path) => { if (typeof o === "string") { if (isEn(o)) out.push([path, o]); } else if (Array.isArray(o)) o.forEach((x, i) => walk(x, out, path)); else if (o && typeof o === "object") for (const k of Object.keys(o)) walk(o[k], out, path + "." + k); };
const issues = []; let md = "# Relecture native — anglais des leçons A2\n\nÀ relire par un anglophone : fautes, phrases peu naturelles, registre. Les lignes marquées ⚠ sont des alertes automatiques.\n";
const check = (code, path, s) => {
  const w = [];
  if (/\b(\w+) \1\b/i.test(s) && !/\b(had had|that that)\b/i.test(s)) w.push("mot répété");
  if (/\ba [aeiou]\w+/i.test(s) && !/\ba (unique|university|uniform|European|one)\b/i.test(s)) w.push("« a » devant voyelle");
  if (/\ban [^aeiouh\W]\w+/i.test(s) && !/\ban (hour|honest)/i.test(s)) w.push("« an » devant consonne");
  if (/\s{2,}|\s[,.?!]|,[A-Za-z]/.test(s)) w.push("espacement/ponctuation");
  if (/\bdont\b|\bcant\b|\bwont\b|\bim\b/.test(s)) w.push("apostrophe manquante");
  if (/\bdid(n't)? \w+(ed)\b/i.test(s) && !/\b(need|feed|speed|bed)\b/i.test(s)) w.push("did + verbe au passé ?");
  if (/\bwas \w+ing\b.*\bwere\b|\bwere I\b/i.test(s)) w.push("was/were à vérifier");
  if (w.length) issues.push(`- ⚠ ${code} ${path} : « ${s.slice(0, 110)} » → ${w.join(", ")}`);
  return w.length ? " ⚠ " + w.join(", ") : "";
};
const seen = new Set();
for (const [code, f] of Object.entries(mods)) {
  const m = await import(f); const out = [];
  for (const [k, v] of Object.entries(m)) if (/^[A-Z_0-9]+$/.test(k) && k !== "DATA_" + code.replace(".", "")) walk(v, out, k);
  md += `\n## ${code} (${out.length} lignes)\n\n`;
  for (const [p, s] of out) { const key = code + s; if (seen.has(key)) continue; seen.add(key); md += `- \`${p.split(".")[0]}\` ${s}${check(code, p, s)}\n`; }
}
for (const [name, [f, exp]] of Object.entries(extra)) {
  const m = await import(f); const out = []; const d = m[exp];
  for (const code of ["A2.0", "A2.1", "A2.2", "A2.3", "A2.4", "A2.5", "A2.6"]) if (d[code]) walk(d[code], out, name + "." + code);
  md += `\n## ${name}\n\n`; for (const [p, s] of out) md += `- \`${p}\` ${s}${check(p, "", s)}\n`;
}
md += `\n## Alertes automatiques (${issues.length})\n\n` + issues.join("\n") + "\n";
fs.writeFileSync(new URL("../documentation/RELECTURE_NATIF_A2.md", import.meta.url), md);
console.log("lignes:", md.split("\n").length, "alertes:", issues.length);
