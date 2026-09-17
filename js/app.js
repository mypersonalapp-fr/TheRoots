// The Roots — contrôleur principal :
// démarrage (racines + bonjour → nom de l'appli) → menu (inscription /
// connexion / mot de passe oublié) → coquille de l'application.

import { store } from "./data/store.js";
import { renderSplash } from "./screens/splash.js";
import { renderAuthMenu } from "./screens/auth-menu.js";
import { renderLogin } from "./screens/login.js";
import { renderForgotPassword } from "./screens/forgot-password.js";
import { renderShell } from "./screens/shell.js";

const root = document.getElementById("app");

function showAuthMenu() {
  renderAuthMenu(root, {
    onSignup: () => renderLogin(root, { mode: "signup", onDone: () => renderShell(root), onBack: showAuthMenu }),
    onLogin: () => renderLogin(root, { mode: "login", onDone: () => renderShell(root), onBack: showAuthMenu }),
    onForgot: () => renderForgotPassword(root, { onBack: showAuthMenu }),
  });
}

function start() {
  renderSplash(root, () => {
    if (store.isLoggedIn()) {
      renderShell(root);
    } else {
      showAuthMenu();
    }
  });
}

// applique le thème sauvegardé avant le premier rendu
document.documentElement.setAttribute("data-theme", store.get().settings.theme);

start();
