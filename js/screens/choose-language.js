// The Roots — "Quelle langue veux-tu apprendre ?" : demandé une seule fois,
// juste après la toute première connexion (inscription ou premier login —
// voir app.js, qui n'affiche cet écran que tant que
// settings.primaryLearningLang est vide). Une fois choisie, la langue sert
// à personnaliser la date/l'heure affichées sur l'Accueil (voir
// dashboard.js) ; elle reste modifiable ensuite depuis Paramètres.
//
// Ne remplace PAS le choix de langue(s) à apprendre pour de vrai (ça reste
// dans l'onglet "Mes cours", où on peut tester son niveau dans plusieurs
// langues en parallèle) — c'est juste la langue "principale" pour cette
// personnalisation-là.

import { store } from "../data/store.js?v=20260923a";
import { t, langName } from "../data/i18n.js?v=20260923a";

const LANGS = ["en", "es", "pt"];
const FLAGS = { en: "🇬🇧", es: "🇪🇸", pt: "🇵🇹" };

export function renderChooseLanguage(root, { onDone }) {
  const { settings } = store.get();
  const lang = settings.interfaceLang;
  const el = document.createElement("div");
  el.className = "screen app-shell choose-lang-screen";
  el.innerHTML = `
    <div class="shell-bg" id="chooseLangBg">
      <img class="screen-cover-bg bg-img-light" src="assets/img/shell-bg.jpg" alt="" aria-hidden="true"/>
      <img class="screen-cover-bg bg-img-dark" src="assets/img/shell-bg-dark.jpg" alt="" aria-hidden="true"/>
      <img class="screen-cover-bg bg-img-landscape" src="assets/img/shell-bg-landscape.jpg" alt="" aria-hidden="true"/>
      <img class="screen-cover-bg bg-img-landscape-dark" src="assets/img/shell-bg-landscape-dark.jpg" alt="" aria-hidden="true"/>
    </div>
    <div class="choose-lang-body">
      <div class="card-3d choose-lang-panel">
        <div class="choose-lang-title">${t("chooselang_title", lang)}</div>
        <div class="choose-lang-desc">${t("chooselang_desc", lang)}</div>
        <div class="choose-lang-options" id="chooseLangOptions">
          ${LANGS.map((code) => `
            <button type="button" class="btn btn-primary choose-lang-btn" data-lang="${code}">
              <span class="choose-lang-flag">${FLAGS[code]}</span> ${langName(code, lang)}
            </button>
          `).join("")}
        </div>
      </div>
    </div>
  `;
  root.appendChild(el);

  el.querySelector("#chooseLangOptions").addEventListener("click", (e) => {
    const btn = e.target.closest("button[data-lang]");
    if (!btn) return;
    store.setPrimaryLearningLang(btn.dataset.lang);
    el.remove();
    onDone();
  });
}
