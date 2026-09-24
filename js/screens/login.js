// The Roots — formulaire de connexion / création de compte (email + mot de
// passe). Connexion simulée en local tant qu'il n'y a pas de vrai backend —
// voir js/data/store.js.

import { store } from "../data/store.js?v=20260924j";
import { webauthn } from "../data/webauthn.js?v=20260924j";
import { t } from "../data/i18n.js?v=20260924j";
import { greetingHtml } from "./greeting.js?v=20260924j";

// Petite carte qui propose d'activer Face ID / Touch ID juste après une
// connexion réussie — seulement si le téléphone le permet et que ce n'est
// pas déjà activé. On ne bloque jamais l'entrée dans l'appli : si ça
// échoue ou si l'utilisateur dit "Plus tard", on continue normalement.
function offerFaceId(email, lang, done) {
  const overlay = document.createElement("div");
  overlay.className = "faceid-offer-backdrop";
  overlay.innerHTML = `
    <div class="faceid-offer-card">
      <div class="faceid-offer-icon">🔒</div>
      <div class="faceid-offer-title">${t("login_faceid_offer_title", lang)}</div>
      <div class="faceid-offer-text">${t("login_faceid_offer_desc", lang)}</div>
      <button class="btn btn-primary" id="faceidYes">${t("login_faceid_yes", lang)}</button>
      <button class="faceid-offer-later" id="faceidLater">${t("login_faceid_later", lang)}</button>
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
    // Mémorisé : on ne reproposera plus Face ID à chaque connexion (24/09,
    // demandé par Ashley — "je veux que ce choix ne soit pas demandé à
    // chaque fois"). Réactivable manuellement depuis Paramètres > Sécurité.
    store.declineFaceIdOffer();
    overlay.remove();
    done();
  });
}

export function renderLogin(root, { mode = "login", prefillEmail = "", onDone, onBack }) {
  const { settings } = store.get();
  const lang = settings.interfaceLang;
  const isSignup = mode === "signup";
  const isReconnect = mode === "reconnect";
  const el = document.createElement("div");
  el.className = "screen auth-form-screen";
  el.innerHTML = `
    <div class="shell-bg" id="loginShellBg">
      <img class="screen-cover-bg bg-img-light" src="assets/img/shell-bg.jpg" alt="" aria-hidden="true"/>
      <img class="screen-cover-bg bg-img-dark" src="assets/img/shell-bg-dark.jpg" alt="" aria-hidden="true"/>
      <img class="screen-cover-bg bg-img-landscape" src="assets/img/shell-bg-landscape.jpg" alt="" aria-hidden="true"/>
      <img class="screen-cover-bg bg-img-landscape-dark" src="assets/img/shell-bg-landscape-dark.jpg" alt="" aria-hidden="true"/>
    </div>
    <div class="auth-form-top">
      <button class="back-btn" id="backBtn" aria-label="${t("aria_back", lang)}">‹</button>
      <div class="title">${isSignup ? t("login_title_signup", lang) : isReconnect ? t("login_title_reconnect", lang) : t("login_title_login", lang)}</div>
      <span style="width:38px"></span>
    </div>
    <div class="auth-form-body">
      ${isSignup ? "" : greetingHtml(lang)}
      ${isReconnect ? `<p style="font-size:13px;color:var(--ink-soft);margin:0 0 14px">${t("login_reconnect_desc", lang)}</p>` : ""}
      <form class="login-form card" id="loginForm">
        <label class="field">
          <span>${t("login_email_label", lang)}</span>
          <input type="email" name="email" required placeholder="${t("login_email_placeholder", lang)}" autocomplete="email" value="${prefillEmail}"/>
        </label>
        <label class="field">
          <span>${t("login_password_label", lang)}</span>
          <input type="password" name="password" required placeholder="••••••••" autocomplete="${isSignup ? 'new-password' : 'current-password'}"/>
        </label>
        <button type="submit" class="btn btn-primary login-submit">${isSignup ? t("login_submit_signup", lang) : isReconnect ? t("login_submit_reconnect", lang) : t("login_submit_login", lang)}</button>
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
    const canOfferFaceId = !faceId.enabled && !faceId.declined && await webauthn.isAvailable();
    if (canOfferFaceId) {
      offerFaceId(email, lang, finish);
    } else {
      finish();
    }
  });
}
