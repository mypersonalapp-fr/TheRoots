// The Roots — formulaire de connexion / création de compte (email + mot de
// passe). Connexion simulée en local tant qu'il n'y a pas de vrai backend —
// voir js/data/store.js.

import { store } from "../data/store.js";

export function renderLogin(root, { mode = "login", onDone, onBack }) {
  const isSignup = mode === "signup";
  const el = document.createElement("div");
  el.className = "screen auth-form-screen";
  el.innerHTML = `
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
  el.querySelector("#loginForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const email = e.target.email.value.trim();
    const password = e.target.password.value;
    if (!email) return;
    store.login(email, password);
    el.remove();
    onDone();
  });
}
