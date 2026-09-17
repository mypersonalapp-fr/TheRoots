// The Roots — mot de passe oublié (formulaire minimal, pas de backend
// pour l'instant : simule l'envoi d'un lien de réinitialisation).

import { mountContainFrame } from "./contain-frame.js";

const BG_IMG_W = 768, BG_IMG_H = 1352;

export function renderForgotPassword(root, { onBack }) {
  const el = document.createElement("div");
  el.className = "screen auth-form-screen";
  el.innerHTML = `
    <div class="shell-bg" id="forgotShellBg">
      <img class="screen-backdrop" src="assets/img/shell-bg.jpg" alt="" aria-hidden="true"/>
    </div>
    <div class="auth-form-top">
      <button class="back-btn" id="backBtn" aria-label="Retour">‹</button>
      <div class="title">Mot de passe oublié</div>
      <span style="width:38px"></span>
    </div>
    <div class="auth-form-body">
      <p style="color:var(--ink-soft)">Indique ton adresse e-mail, on t'enverra un lien pour réinitialiser ton mot de passe.</p>
      <form class="login-form card" id="forgotForm">
        <label class="field">
          <span>Adresse e-mail</span>
          <input type="email" name="email" required placeholder="toi@exemple.com"/>
        </label>
        <button type="submit" class="btn btn-primary">Envoyer le lien</button>
      </form>
      <div id="forgotConfirm" class="card" style="display:none;margin-top:14px;text-align:center;color:var(--success)">
        Lien envoyé (simulation — pas encore de vrai envoi d'e-mail).
      </div>
    </div>
  `;
  root.appendChild(el);
  mountContainFrame(el.querySelector("#forgotShellBg"), BG_IMG_W, BG_IMG_H,
    `<img src="assets/img/shell-bg.jpg" alt=""/>`);

  el.querySelector("#backBtn").addEventListener("click", () => { el.remove(); onBack(); });
  el.querySelector("#forgotForm").addEventListener("submit", (e) => {
    e.preventDefault();
    el.querySelector("#forgotConfirm").style.display = "block";
  });
}
