// The Roots — écran de connexion : l'illustration (logo + texte déjà dessinés
// dedans) remplit tout l'écran, téléphone comme tablette, portrait comme
// paysage. Les boutons sont de vrais boutons HTML, posés dans la zone vide
// de l'image (sous le logo, au-dessus de l'illustration du bas) — jamais de
// texte "The Roots" en double, puisqu'il est déjà dans l'image.

export function renderAuthMenu(root, { onSignup, onLogin, onForgot }) {
  const el = document.createElement("div");
  el.className = "screen login-hero-screen";
  el.innerHTML = `
    <img class="screen-cover-bg" src="assets/img/login-bg.jpg" alt="The Roots — apprends, parle, voyage" aria-hidden="true"/>
    <div class="auth-menu-panel card">
      <button class="btn btn-primary" id="btnLogin">Se connecter →</button>
      <button class="btn btn-ghost" id="btnSignup">Créer un compte</button>
      <button class="auth-menu-forgot" id="btnForgot">Mot de passe oublié ?</button>
    </div>
  `;
  root.appendChild(el);

  function leave(next) { el.remove(); next(); }
  el.querySelector("#btnSignup").addEventListener("click", () => leave(onSignup));
  el.querySelector("#btnLogin").addEventListener("click", () => leave(onLogin));
  el.querySelector("#btnForgot").addEventListener("click", () => leave(onForgot));
}
