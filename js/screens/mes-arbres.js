// The Roots — "Mes arbres" : sorti de l'Accueil vers le menu (validé sur
// maquette le 23/09, "tu insère mes arbres avant mes cours"). Une plante
// par langue, qui grandit avec le niveau — on touche un arbre pour aller
// dans "Mes cours" (test de niveau ou suite des leçons selon l'état).

import { store } from "../data/store.js?v=20260924e";
import { t } from "../data/i18n.js?v=20260924e";
import { langGrowth } from "../data/progress.js?v=20260924e";
import { plantSvg } from "./plant.js?v=20260924e";

const GROUP_FLAGS = { en: "🇬🇧", es: "🇪🇸", pt: "🇵🇹" };
const VARIANT_FLAGS = { "en-gb": "🇬🇧", "en-us": "🇺🇸", "es-co": "🇨🇴", "es-es": "🇪🇸", "pt-br": "🇧🇷", "pt-pt": "🇵🇹" };
const flagOf = (l) => VARIANT_FLAGS[l.selectedVariant] || GROUP_FLAGS[l.code] || "";

export function renderMesArbres(container, { onGoToCourses } = {}) {
  const { settings } = store.get();
  const lang = settings.interfaceLang;

  const trees = settings.langs.map((l) => {
    const g = langGrowth(l.code);
    const status = g.stage === 0
      ? `${t("stage_0", lang)} · ${t("stage_test", lang)}`
      : `${t("stage_" + g.stage, lang)} · ${g.level}`;
    return `
      <button class="card dash-tree clickable" data-goto-courses="1">
        ${plantSvg(g.stage, { w: 64, h: 78, grow: g.pct / 100 })}
        <div class="dash-tree-lang">${flagOf(l)} ${l.label}</div>
        <div class="dash-tree-status">${status}</div>
        ${g.stage > 0 ? `<div class="dash-progress-bar"><div class="dash-progress-fill" style="width:${g.pct}%"></div></div>` : ""}
      </button>`;
  }).join("");

  container.innerHTML = `
    <div class="dash-box">
      <p style="font-size:13px;color:var(--ink-soft);margin:0 0 12px">${t("arbres_intro", lang)}</p>
      <div class="dash-trees">${trees}</div>
    </div>
  `;

  container.querySelectorAll("[data-goto-courses]").forEach((btn) => {
    btn.addEventListener("click", () => onGoToCourses && onGoToCourses());
  });
}
