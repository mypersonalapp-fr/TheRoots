// The Roots — écran de verrouillage affiché à l'ouverture de l'appli quand
// Face ID / Touch ID est activé : on redemande le visage/l'empreinte avant
// d'entrer, au lieu de retaper le mot de passe (voir js/data/webauthn.js).

import { webauthn } from "../data/webauthn.js?v=20260924b";
import { store } from "../data/store.js?v=20260924b";
import { t } from "../data/i18n.js?v=20260924b";
import { greetingHtml } from "./greeting.js?v=20260924b";

export function renderFaceIdLock(root, { credentialId, onUnlocked, onUsePassword }) {
  const { settings } = store.get();
  const lang = settings.interfaceLang;
  const el = document.createElement("div");
  el.className = "screen login-hero-screen faceid-lock-screen";
  el.innerHTML = `
    <img class="screen-cover-bg bg-img-light" src="assets/img/shell-bg.jpg" alt="" aria-hidden="true"/>
    <img class="screen-cover-bg bg-img-dark" src="assets/img/shell-bg-dark.jpg" alt="" aria-hidden="true"/>
    <img class="screen-cover-bg bg-img-landscape" src="assets/img/shell-bg-landscape.jpg" alt="" aria-hidden="true"/>
    <img class="screen-cover-bg bg-img-landscape-dark" src="assets/img/shell-bg-landscape-dark.jpg" alt="" aria-hidden="true"/>
    <div class="auth-menu-panel card faceid-panel">
      ${greetingHtml(lang)}
      <div class="faceid-icon">🔒</div>
      <div class="faceid-title">${t("fid_locked", lang)}</div>
      <button class="btn btn-primary" id="btnUnlock">${t("fid_unlock_btn", lang)}</button>
      <button class="auth-menu-forgot" id="btnUsePassword">${t("fid_use_password", lang)}</button>
      <div class="faceid-error" id="faceidError" hidden>${t("fid_error", lang)}</div>
    </div>
  `;
  root.appendChild(el);

  let busy = false;
  async function tryUnlock() {
    if (busy) return;
    busy = true;
    const errorEl = el.querySelector("#faceidError");
    errorEl.hidden = true;
    const ok = await webauthn.verify(credentialId);
    busy = false;
    if (ok) { el.remove(); onUnlocked(); }
    else { errorEl.hidden = false; }
  }

  el.querySelector("#btnUnlock").addEventListener("click", tryUnlock);
  el.querySelector("#btnUsePassword").addEventListener("click", () => { el.remove(); onUsePassword(); });

  // Tentative automatique dès l'ouverture de l'écran — sur la plupart des
  // téléphones ça suffit à afficher directement Face ID sans avoir à
  // appuyer sur le bouton (qui reste là en secours si ça ne se déclenche pas).
  tryUnlock();
}
