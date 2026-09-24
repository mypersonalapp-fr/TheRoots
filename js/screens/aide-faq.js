// The Roots — "Aide & FAQ" (nouveau, validé sur maquette le 23/09). Deux
// parties : "comment naviguer" (prête tout de suite, Ashley l'a demandée
// pour cette rubrique) et "questions fréquentes" — vide pour l'instant,
// sur sa demande explicite ("pour l'instant il n'y a pas besoin de
// questions, on va les créer plus tard avec les réponses").

import { store } from "../data/store.js?v=20260924f";
import { t } from "../data/i18n.js?v=20260924f";

export function renderAideFaq(container) {
  const { settings } = store.get();
  const lang = settings.interfaceLang;
  container.innerHTML = `
    <div class="dash-box">
      <h3>${t("aide_nav_title", lang)}</h3>
      <p style="font-size:12.5px;color:var(--ink-soft);margin:0 0 12px">${t("aide_nav_intro", lang)}</p>

      <div class="card" style="margin-bottom:10px">
        <div style="font-weight:800;font-size:13.5px">${t("aide_nav_accueil_title", lang)}</div>
        <p style="font-size:13px;color:var(--ink-soft);margin:6px 0 0;line-height:1.5">${t("aide_nav_accueil_desc", lang)}</p>
      </div>
      <div class="card" style="margin-bottom:10px">
        <div style="font-weight:800;font-size:13.5px">${t("aide_nav_menu_title", lang)}</div>
        <p style="font-size:13px;color:var(--ink-soft);margin:6px 0 0;line-height:1.5">${t("aide_nav_menu_desc", lang)}</p>
      </div>
      <div class="card" style="margin-bottom:10px">
        <div style="font-weight:800;font-size:13.5px">${t("aide_nav_arbres_title", lang)}</div>
        <p style="font-size:13px;color:var(--ink-soft);margin:6px 0 0;line-height:1.5">${t("aide_nav_arbres_desc", lang)}</p>
      </div>
      <div class="card">
        <div style="font-weight:800;font-size:13.5px">${t("aide_nav_five_title", lang)}</div>
        <p style="font-size:13px;color:var(--ink-soft);margin:6px 0 0;line-height:1.5">${t("aide_nav_five_desc", lang)}</p>
      </div>
    </div>

    <div class="dash-box">
      <h3>${t("aide_faq_title", lang)}</h3>
      <div class="card" style="color:var(--ink-soft);font-size:13px">${t("aide_faq_empty", lang)}</div>
    </div>
  `;
}
