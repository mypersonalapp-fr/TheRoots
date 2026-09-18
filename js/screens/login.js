// The Roots — formulaire de connexion / création de compte (email + mot de
// passe). Connexion simulée en local tant qu'il n'y a pas de vrai backend —
// voir js/data/store.js.

import { store } from "../data/store.js";
import { webauthn } from "../data/webauthn.js";

// Petite carte qui propose d'activer Face ID / Touch ID juste après une
// connexion réussie — seulement si le téléphone le permet et que ce n'est
// pas déjà activé. On ne bloque jamais l'entrée dans l'appli : si ça
// échoue ou si l'utilisateur dit "Plus tard", on continue normalement.
function offerFaceId(email, done) {
  const overlay = document.createElement("div");
  overlay.className = "faceid-offer-backdrop";
  overlay.innerHTML = `
    <div class="faceid-offer-card">
      <div class="faceid-offer-icon">🔒</div>
      <div class="faceid-offer-title">Activer Face ID ?</div>
      <div class="faceid-offer-text">La prochaine fois, tu pourras ouvrir l'appli juste avec ton visage ou ton empreinte, sans retaper ton mot de passe.</div>
      <button class="btn btn-primary" id="faceidYes">Activer Face ID</button>
      <button class="faceid-offer-later" id="faceidLater">Plus tard</button>
    </div>
  `;
  document.body.appendChild(overlay);

  overlay.querySelector("#faceidYes").addEventListener("click", async () => {
    const credentialId = await webauthn.register(email);
    if (credentialId) store.enableFaceId(credentialId);
    overlay.remove();
    done();
  });
  overlay.querySelector("#faceidLater").addEventListener("click", () => {
    overlay.remove();
    done();
  });
}

export function renderLogin(root, { mode = "login", onDone, onBack }) {
  const isSignup = mode === "signup";
  const el = document.createElement("div");
  el.className = "screen auth-form-screen";
  el.innerHTML = `
    <div class="shell-bg" id="loginShellBg">
      <img class="screen-cover-bg bg-img-light" src="assets/img/shell-bg.jpg" alt="" aria-hidden="true"/>
      <img class="screen-cover-bg bg-img-dark" src="assets/img/shell-bg-dark.jpg" alt="" aria-hidden="true"/>
    </div>
    <div class="auth-form-top">
      <button class="back-btn" id="backBtn" aria-label="Retour">‹</button>
      <div class="title">${isSignup ? "Créer un compte" : "Se connecter"}</div>
      <span style="width:38px"></span>
    </div>
    <div class="auth-form-body">
      <form class="login-form card" id="loginForm">
        <label class="field">
          <span>Adresse e-mail</span>
          <input type="email" name="email" required placeholder="toi@exemple.com" autocomplete="email"/>
        </label>
        <label class="field">
          <span>Mot de passe</span>
          <input type="password" name="password" required placeholder="••••••••" autocomplete="${isSignup ? 'new-password' : 'current-password'}"/>
        </label>
        <button type="submit" class="btn btn-primary login-submit">${isSignup ? "Créer mon compte" : "Se connecter"}</button>
      </form>
    </div>
  `;
  root.appendChild(el);

  el.querySelector("#backBtn").addEventListener("click", () => { el.remove(); onBack(); });
  el.querySelector("#loginForm").addEventListener("submit", async (e) => {
    e.preventDefault();
    const email = e.target.email.value.trim();
    const password = e.target.password.value;
    if (!email) return;
    store.login(email, password);

    const finish = () => { el.remove(); onDone(); };
    const faceId = store.getFaceId();
    const canOfferFaceId = !faceId.enabled && await webauthn.isAvailable();
    if (canOfferFaceId) {
      offerFaceId(email, finish);
    } else {
      finish();
    }
  });
}
