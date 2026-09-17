// The Roots — écran de connexion : l'illustration d'Ashley affichée EN
// ENTIER (jamais coupée, sur téléphone comme sur tablette), avec de
// vraies zones cliquables invisibles posées exactement sur les boutons
// dessinés dans l'image.

import { mountContainFrame } from "./contain-frame.js";

const IMG_W = 720, IMG_H = 1455;

export function renderAuthMenu(root, { onSignup, onLogin, onForgot }) {
  const el = document.createElement("div");
  el.className = "screen login-hero-screen";
  root.appendChild(el);

  const backdrop = document.createElement("img");
  backdrop.className = "screen-backdrop";
  backdrop.src = "assets/img/login-bg.jpg";
  backdrop.alt = "";
  backdrop.setAttribute("aria-hidden", "true");
  el.appendChild(backdrop);

  const { frame } = mountContainFrame(el, IMG_W, IMG_H, `
    <img src="assets/img/login-bg.jpg" alt="The Roots — apprends, parle, voyage"/>
    <button class="hero-hit hero-hit-login" id="btnLogin" aria-label="Se connecter"></button>
    <button class="hero-hit hero-hit-signup" id="btnSignup" aria-label="Créer un compte"></button>
    <button class="hero-forgot" id="btnForgot">Mot de passe oublié ?</button>
  `);

  function leave(next) { el.remove(); next(); }
  frame.querySelector("#btnSignup").addEventListener("click", () => leave(onSignup));
  frame.querySelector("#btnLogin").addEventListener("click", () => leave(onLogin));
  frame.querySelector("#btnForgot").addEventListener("click", () => leave(onForgot));
}
