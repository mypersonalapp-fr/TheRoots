// The Roots — écran affiché à l'ouverture de l'application : l'image
// d'Ashley (assets/img/splash-bg.jpg), fixe, affichée EN ENTIER (jamais
// coupée) quel que soit l'écran, grâce au cadre "contain" partagé.

import { mountContainFrame } from "./contain-frame.js";

const IMG_W = 768, IMG_H = 1352;

export function renderSplash(root, onDone) {
  const el = document.createElement("div");
  el.className = "screen splash-screen";
  root.appendChild(el);

  const backdrop = document.createElement("img");
  backdrop.className = "screen-backdrop";
  backdrop.src = "assets/img/splash-bg.jpg";
  backdrop.alt = "";
  backdrop.setAttribute("aria-hidden", "true");
  el.appendChild(backdrop);

  mountContainFrame(el, IMG_W, IMG_H,
    `<img src="assets/img/splash-bg.jpg" alt="The Roots — apprends, parle, voyage"/>`);

  requestAnimationFrame(() => el.classList.add("splash-in"));

  setTimeout(() => {
    el.classList.add("splash-fade-out");
    setTimeout(() => { el.remove(); onDone(); }, 350);
  }, 2650);
}
