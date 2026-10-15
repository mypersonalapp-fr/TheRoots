// The Roots — la plante d'une langue (dessin SVG, sans image à charger).
// 0 Graine (test à faire) · 1 Pousse A1 · 2 Jeune arbre A2 · 3 Arbuste B1
// · 4 Arbre B2 · 5 Grand arbre C1 · 6 Arbre centenaire C2.
// Les racines s'allongent avec le niveau et, dans un niveau, avec le
// pourcentage de leçons maîtrisées (option "grow" = 0..1).

export function plantSvg(stage, { w = 120, h = 150, roots = true, grow = 0 } = {}) {
  stage = Math.max(0, Math.min(6, stage | 0));
  const f = (n) => n.toFixed(1);
  const k = h / 150;
  const gy = h * 0.58;
  const cx = w / 2;
  // g = avancement sur TOUT le parcours A1 → C2 (0..1). L'arbre n'est complet qu'au C2 ;
  // à l'entrée en A1, il n'y a presque rien au-dessus du sol : seules les racines partent déjà de très bas.
  const g = stage === 0 ? 0 : Math.min(1, (stage - 1 + Math.max(0, Math.min(1, grow))) / 6);
  const p = [
    `<rect x="0" y="${f(gy)}" width="${w}" height="${f(h - gy)}" fill="#8a5a3b" opacity="0.18"/>`,
    `<path d="M0 ${f(gy)}H${w}" stroke="#6b4a2f" stroke-width="2"/>`,
  ];
  if (roots) {
    // Racines profondes dès le début, qui s'étendent et se ramifient avec le niveau.
    const depth = h * (0.30 + 0.08 * Math.sqrt(g));
    const n = 2 + Math.round(g * 5);
    for (let i = 0; i < n; i++) {
      const ang = (i - (n - 1) / 2) * 0.32;
      const x2 = cx + Math.sin(ang) * depth * 1.15;
      const y2 = gy + depth * (0.82 + 0.18 * Math.cos(ang));
      p.push(`<path d="M${f(cx)} ${f(gy)} Q${f(cx + (x2 - cx) * 0.35)} ${f(gy + depth * 0.55)} ${f(x2)} ${f(y2)}" stroke="#8a5a3b" stroke-width="${f(Math.max(0.9, 2.4 - i * 0.2))}" fill="none" stroke-linecap="round" opacity="${f(0.95 - i * 0.04)}"/>`);
    }
  }
  if (stage === 0) {
    // Graine bien enterrée (retour d'Ashley le 23/09) : petite et entièrement sous la ligne du sol.
    p.push(`<ellipse cx="${f(cx)}" cy="${f(gy + 9 * k)}" rx="5" ry="3.5" fill="#9b6b3f"/>`);
  } else {
    const th = (3 + 35 * Math.pow(g, 1.15)) * k;       // tronc : 3 → 38
    const tw = (1.4 + 9.6 * Math.pow(g, 1.1)) * (w / 120); // épaisseur : 1,4 → 11
    const col = g < 0.34 ? "#5fae62" : "#6b4a2f";
    const top = gy - th;
    p.push(`<rect x="${f(cx - tw / 2)}" y="${f(top)}" width="${f(tw)}" height="${f(th)}" rx="${f(tw / 2)}" fill="${col}"/>`);
    // Petites feuilles : seulement au début, elles s'effacent quand la couronne apparaît.
    const lf = Math.max(0, 1 - g / 0.34);
    if (lf > 0) {
      const lx = 3 + 5 * (1 - lf);
      p.push(`<ellipse cx="${f(cx - lx)}" cy="${f(top + 1)}" rx="${f(1.5 + 2.5 * lf)}" ry="${f(0.8 + 1.2 * lf)}" fill="#6cc070" transform="rotate(-25 ${f(cx - lx)} ${f(top + 1)})"/>`);
      p.push(`<ellipse cx="${f(cx + lx)}" cy="${f(top + 1)}" rx="${f(1.5 + 2.5 * lf)}" ry="${f(0.8 + 1.2 * lf)}" fill="#5fae62" transform="rotate(25 ${f(cx + lx)} ${f(top + 1)})"/>`);
    }
    // Couronne : commence vers le B1 et ne devient grande qu'au C2.
    const cg = Math.max(0, (g - 0.3) / 0.7);
    if (cg > 0) {
      const R = 5 + 31 * Math.pow(cg, 1.05);
      const R2 = R * (w / 120);
      const cols = ["#3f8f4f", "#4fa25c", "#66b56d"];
      [[-R2 * 0.55, R2 * 0.25, R2 * 0.62], [R2 * 0.55, R2 * 0.2, R2 * 0.66], [0, -R2 * 0.35, R2 * 0.75], [0, R2 * 0.2, R2 * 0.7]]
        .forEach(([dx, dy, r], j) => p.push(`<circle cx="${f(cx + dx)}" cy="${f(top + dy)}" r="${f(r)}" fill="${cols[j % 3]}"/>`));
      if (g >= 0.8) {
        [[-R2 * 0.4, -R2 * 0.1], [R2 * 0.35, R2 * 0.15], [0, -R2 * 0.55]]
          .forEach(([dx, dy]) => p.push(`<circle cx="${f(cx + dx)}" cy="${f(top + dy)}" r="3" fill="#e2a13d"/>`));
      }
    }
  }
  return `<svg class="roots-plant" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" aria-hidden="true" style="flex-shrink:0">${p.join("")}</svg>`;
}
