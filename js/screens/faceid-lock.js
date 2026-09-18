// The Roots — écran de verrouillage affiché à l'ouverture de l'appli quand
// Face ID / Touch ID est activé : on redemande le visage/l'empreinte avant
// d'entrer, au lieu de retaper le mot de passe (voir js/data/webauthn.js).

import { webauthn } from "../data/webauthn.js";

export function renderFaceIdLock(root, { credentialId, onUnlocked, onUsePassword }) {
  const el = document.createElement("div");
  el.className = "screen login-hero-screen faceid-lock-screen";
  el.innerHTML = `
    <img class="screen-cover-bg bg-img-light" src="assets/img/shell-bg.jpg" alt="" aria-hidden="true"/>
    <img class="screen-cover-bg bg-img-dark" src="assets/img/shell-bg-dark.jpg" alt="" aria-hidden="true"/>
    <div class="auth-menu-panel card faceid-panel">
      <div class="faceid-icon">🔒</div>
      <div class="faceid-title">The Roots est verrouillée</div>
      <button class="btn btn-primary" id="btnUnlock">Déverrouiller avec Face ID</button>
      <button class="auth-menu-forgot" id="btnUsePassword">Utiliser mon mot de passe</button>
      <div class="faceid-error" id="faceidError" hidden>Ça n'a pas fonctionné — réessaie.</div>
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
