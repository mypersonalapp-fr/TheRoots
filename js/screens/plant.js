// The Roots — la plante d'une langue (dessin SVG, sans image à charger).
// 0 Graine (test à faire) · 1 Pousse A1 · 2 Jeune arbre A2 · 3 Arbuste B1
// · 4 Arbre B2 · 5 Grand arbre C1 · 6 Arbre centenaire C2.
// Les racines s'allongent avec le niveau et, dans un niveau, avec le
// pourcentage de leçons maîtrisées (option "grow" = 0..1).

export function plantSvg(stage, { w = 120, h = 150, roots = true, grow = 0 } = {}) {
  stage = Math.max(0, Math.min(6, stage | 0));
  const f = (n) => n.toFixed(1);
  const gy = h * 0.62;
  const cx = w / 2;
  const p = [
    `<rect x="0" y="${f(gy)}" width="${w}" height="${f(h - gy)}" fill="#8a5a3b" opacity="0.18"/>`,
    `<path d="M0 ${f(gy)}H${w}" stroke="#6b4a2f" stroke-width="2"/>`,
  ];
  if (roots) {
    const base = [6, 10, 16, 22, 28, 34, 40][stage];
    const next = [10, 16, 22, 28, 34, 40, 44][stage];
    const depth = (base + (next - base) * Math.max(0, Math.min(1, grow))) * (h / 150);
    const n = stage + 1;
    for (let i = 0; i < n; i++) {
      const ang = (i - (n - 1) / 2) * 0.35;
      const x2 = cx + Math.sin(ang) * depth * 1.1;
      const y2 = gy + depth * (0.8 + 0.2 * Math.cos(ang));
      p.push(`<path d="M${f(cx)} ${f(gy)} Q${f(cx + (x2 - cx) * 0.4)} ${f(gy + depth * 0.5)} ${f(x2)} ${f(y2)}" stroke="#8a5a3b" stroke-width="${f(Math.max(1, 2.4 - i * 0.15))}" fill="none" stroke-linecap="round"/>`);
    }
  }
  if (stage === 0) {
    p.push(`<ellipse cx="${f(cx)}" cy="${f(gy + 4)}" rx="7" ry="5" fill="#9b6b3f"/>`);
    p.push(`<path d="M${f(cx)} ${f(gy)} q2 -6 6 -8" stroke="#5fae62" stroke-width="2" fill="none" stroke-linecap="round"/>`);
  } else {
    const th = [0, 22, 38, 52, 62, 72, 80][stage] * (h / 150);
    const tw = [0, 2, 3, 5, 7, 9, 11][stage] * (w / 120);
    const col = stage <= 2 ? "#5fae62" : "#6b4a2f";
    p.push(`<rect x="${f(cx - tw / 2)}" y="${f(gy - th)}" width="${f(tw)}" height="${f(th)}" rx="${f(tw / 2)}" fill="${col}"/>`);
    const top = gy - th;
    if (stage === 1) {
      p.push(`<ellipse cx="${f(cx - 7)}" cy="${f(top + 4)}" rx="8" ry="4" fill="#6cc070" transform="rotate(-25 ${f(cx - 7)} ${f(top + 4)})"/>`);
      p.push(`<ellipse cx="${f(cx + 7)}" cy="${f(top + 4)}" rx="8" ry="4" fill="#5fae62" transform="rotate(25 ${f(cx + 7)} ${f(top + 4)})"/>`);
    } else if (stage === 2) {
      [[-10, 6, 9], [10, 4, 10], [0, -4, 11]].forEach(([dx, dy, r]) => p.push(`<circle cx="${f(cx + dx)}" cy="${f(top + dy)}" r="${r}" fill="#63b86a"/>`));
    } else {
      const R = [0, 0, 0, 22, 28, 34, 40][stage] * (w / 120);
      const cols = ["#3f8f4f", "#4fa25c", "#66b56d"];
      [[-R * 0.55, R * 0.25, R * 0.62], [R * 0.55, R * 0.2, R * 0.66], [0, -R * 0.35, R * 0.75], [0, R * 0.2, R * 0.7]]
        .forEach(([dx, dy, r], j) => p.push(`<circle cx="${f(cx + dx)}" cy="${f(top + dy)}" r="${f(r)}" fill="${cols[j % 3]}"/>`));
      if (stage >= 5) {
        [[-R * 0.4, -R * 0.1], [R * 0.35, R * 0.15], [0, -R * 0.55]]
          .forEach(([dx, dy]) => p.push(`<circle cx="${f(cx + dx)}" cy="${f(top + dy)}" r="3" fill="#e2a13d"/>`));
      }
    }
  }
  return `<svg class="roots-plant" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" aria-hidden="true" style="flex-shrink:0">${p.join("")}</svg>`;
}
