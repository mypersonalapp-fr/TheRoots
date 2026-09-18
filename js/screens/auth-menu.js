// The Roots — écran de connexion : l'illustration remplit tout l'écran
// (téléphone comme tablette, portrait comme paysage), et les boutons sont
// de vrais boutons posés dans un panneau flottant par-dessus — plus besoin
// d'aligner des zones invisibles sur des pixels précis de l'image.

export function renderAuthMenu(root, { onSignup, onLogin, onForgot }) {
  const el = document.createElement("div");
  el.className = "screen login-hero-screen";
  el.innerHTML = `
    <img class="screen-cover-bg" src="assets/img/login-bg.jpg" alt="The Roots — apprends, parle, voyage" aria-hidden="true"/>
    <div class="auth-menu-panel card">
      <div class="auth-menu-brand">The Roots</div>
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
