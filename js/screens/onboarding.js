// The Roots — tutoriel de première connexion (validé sur maquette le
// 23/09, board "Onboarding.dc.html") : 4 écrans courts (points de
// pagination + Passer/Suivant), affichés une seule fois, juste après le
// choix de la langue apprise principale et avant d'entrer dans l'appli
// (voir app.js). "Passer" ferme le tutoriel entièrement (pas juste
// l'écran en cours) — comme "Suivant" au dernier écran ("Commencer").

import { store } from "../data/store.js?v=20260924j";
import { t } from "../data/i18n.js?v=20260924j";

const SEEN_KEY = "the_roots_onboarding_seen_v1";

export function hasSeenOnboarding() {
  try { return localStorage.getItem(SEEN_KEY) === "1"; } catch (e) { return false; }
}
function markSeen() {
  try { localStorage.setItem(SEEN_KEY, "1"); } catch (e) { /* stockage indisponible */ }
}

const STEPS = [
  { icon: "🌱", titleKey: "onb1_title", bodyKey: "onb1_body" },
  { icon: "☰", titleKey: "onb2_title", bodyKey: "onb2_body" },
  { icon: "🌳", titleKey: "onb3_title", bodyKey: "onb3_body" },
  { icon: "❓", titleKey: "onb4_title", bodyKey: "onb4_body" },
];

export function renderOnboarding(root, { onDone }) {
  const { settings } = store.get();
  const lang = settings.interfaceLang;
  let step = 0;

  const el = document.createElement("div");
  el.className = "screen app-shell onboarding-screen";
  root.appendChild(el);

  function finish() {
    markSeen();
    el.remove();
    onDone();
  }

  function paint() {
    const s = STEPS[step];
    const isLast = step === STEPS.length - 1;
    el.innerHTML = `
      <div class="shell-bg" id="onbBg">
        <img class="screen-cover-bg bg-img-light" src="assets/img/shell-bg.jpg" alt="" aria-hidden="true"/>
        <img class="screen-cover-bg bg-img-dark" src="assets/img/shell-bg-dark.jpg" alt="" aria-hidden="true"/>
        <img class="screen-cover-bg bg-img-landscape" src="assets/img/shell-bg-landscape.jpg" alt="" aria-hidden="true"/>
        <img class="screen-cover-bg bg-img-landscape-dark" src="assets/img/shell-bg-landscape-dark.jpg" alt="" aria-hidden="true"/>
      </div>
      <div class="onb-body">
        <div class="card-3d onb-panel">
          <div class="onb-icon">${s.icon}</div>
          <div class="onb-title">${t(s.titleKey, lang)}</div>
          <div class="onb-text">${t(s.bodyKey, lang)}</div>
          <div class="onb-dots">
            ${STEPS.map((_, i) => `<div class="onb-dot${i === step ? " on" : ""}"></div>`).join("")}
          </div>
          <div class="onb-actions">
            <button type="button" class="btn btn-ghost" id="onbSkip">${t("onb_skip", lang)}</button>
            <button type="button" class="btn btn-primary" id="onbNext">${isLast ? t("onb_start", lang) : t("onb_next", lang)}</button>
          </div>
        </div>
      </div>
    `;
    el.querySelector("#onbSkip").addEventListener("click", finish);
    el.querySelector("#onbNext").addEventListener("click", () => {
      if (isLast) { finish(); return; }
      step += 1;
      paint();
    });
  }

  paint();
}
