// The Roots — répartit la bonne réponse sur les positions 1/2/3 (sinon elle serait souvent en première position).
// Déterministe : même résultat à chaque chargement. Appelé en fin de chaque fichier de données de leçon.
export function balanceAll(root) {
  let n = 0;
  const swapTo = (arr, from, to) => { [arr[from], arr[to]] = [arr[to], arr[from]]; };
  const walk = (x) => {
    if (!x || typeof x !== "object") return;
    if (Array.isArray(x)) {
      if (typeof x[0] === "string" && Array.isArray(x[1]) && typeof x[2] === "number" && x[1].every((o) => typeof o === "string")) {
        const len = x[1].length, to = Math.floor(((n++ * 0.618034) % 1) * len);
        swapTo(x[1], x[2], to); x[2] = to; return;
      }
      x.forEach(walk); return;
    }
    if (Array.isArray(x.groups)) {
      for (const g of x.groups) {
        if (g.tiles) continue;
        const i = g.opts.findIndex((o) => o.v === g.answer), to = Math.floor(((n++ * 0.618034) % 1) * g.opts.length);
        if (i >= 0) swapTo(g.opts, i, to);
      }
      return;
    }
    Object.values(x).forEach(walk);
  };
  walk(root);
}
