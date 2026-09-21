// The Roots — mot de passe oublié (formulaire minimal, pas de backend
// pour l'instant : simule l'envoi d'un lien de réinitialisation).

import { store } from "../data/store.js?v=20260920i";
import { t } from "../data/i18n.js?v=20260920i";

export function renderForgotPassword(root, { onBack }) {
  const { settings } = store.get();
  const lang = settings.interfaceLang;
  const el = document.createElement("div");
  el.className = "screen auth-form-screen";
  el.innerHTML = `
    <div class="shell-bg" id="forgotShellBg">
      <img class="screen-cover-bg bg-img-light" src="assets/img/shell-bg.jpg" alt="" aria-hidden="true"/>
      <img class="screen-cover-bg bg-img-dark" src="assets/img/shell-bg-dark.jpg" alt="" aria-hidden="true"/>
      <img class="screen-cover-bg bg-img-landscape" src="assets/img/shell-bg-landscape.jpg" alt="" aria-hidden="true"/>
      <img class="screen-cover-bg bg-img-landscape-dark" src="assets/img/shell-bg-landscape-dark.jpg" alt="" aria-hidden="true"/>
    </div>
    <div class="auth-form-top">
      <button class="back-btn" id="backBtn" aria-label="${t("aria_back", lang)}">‹</button>
      <div class="title">${t("forgot_title", lang)}</div>
      <span style="width:38px"></span>
    </div>
    <div class="auth-form-body">
      <p style="color:var(--ink-soft)">${t("forgot_desc", lang)}</p>
      <form class="login-form card" id="forgotForm">
        <label class="field">
          <span>${t("login_email_label", lang)}</span>
          <input type="email" name="email" required placeholder="${t("login_email_placeholder", lang)}"/>
        </label>
        <button type="submit" class="btn btn-primary">${t("forgot_submit", lang)}</button>
      </form>
      <div id="forgotConfirm" class="card" style="display:none;margin-top:14px;text-align:center;color:var(--success)">
        ${t("forgot_confirm", lang)}
      </div>
    </div>
  `;
  root.appendChild(el);

  el.querySelector("#backBtn").addEventListener("click", () => { el.remove(); onBack(); });
  el.querySelector("#forgotForm").addEventListener("submit", (e) => {
    e.preventDefault();
    el.querySelector("#forgotConfirm").style.display = "block";
  });
}
