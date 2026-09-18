// The Roots — contrôleur principal :
// démarrage (racines + bonjour → nom de l'appli) → menu (inscription /
// connexion / mot de passe oublié) → coquille de l'application.

import { store } from "./data/store.js";
import { renderSplash } from "./screens/splash.js";
import { renderAuthMenu } from "./screens/auth-menu.js";
import { renderLogin } from "./screens/login.js";
import { renderForgotPassword } from "./screens/forgot-password.js";
import { renderShell } from "./screens/shell.js";
import { renderFaceIdLock } from "./screens/faceid-lock.js";

const root = document.getElementById("app");

// Marque que l'appli a déjà été déverrouillée pendant cette "ouverture" (cet
// onglet/cette instance de l'appli) — sessionStorage est vidé à chaque
// fermeture réelle de l'appli (contrairement à localStorage, qui lui garde
// le compte connecté). C'est ce qui permet de redemander une reconnexion à
// chaque vraie réouverture, sans pour autant déconnecter le compte.
const UNLOCK_KEY = "the_roots_unlocked_session";
function markUnlockedThisSession() {
  try { sessionStorage.setItem(UNLOCK_KEY, "1"); } catch (e) { /* stockage indisponible */ }
}
function isUnlockedThisSession() {
  try { return sessionStorage.getItem(UNLOCK_KEY) === "1"; } catch (e) { return false; }
}

function showAuthMenu() {
  renderAuthMenu(root, {
    onSignup: () => renderLogin(root, { mode: "signup", onDone: () => { markUnlockedThisSession(); renderShell(root); }, onBack: showAuthMenu }),
    onLogin: () => renderLogin(root, { mode: "login", onDone: () => { markUnlockedThisSession(); renderShell(root); }, onBack: showAuthMenu }),
    onForgot: () => renderForgotPassword(root, { onBack: showAuthMenu }),
  });
}

function start() {
  renderSplash(root, () => {
    if (store.isLoggedIn()) {
      // Si l'appli a déjà été déverrouillée pendant cette même ouverture
      // (ex. juste après connexion, ou après un rechargement déclenché par
      // un changement dans Paramètres comme la langue de l'interface), on
      // n'a pas à redemander Face ID ni le mot de passe une deuxième fois —
      // sessionStorage garde ce drapeau tant que l'appli reste ouverte, et
      // c'est seulement à une VRAIE réouverture qu'il redevient absent.
      if (isUnlockedThisSession()) {
        renderShell(root);
        return;
      }
      const faceId = store.getFaceId();
      if (faceId.enabled && faceId.credentialId) {
        renderFaceIdLock(root, {
          credentialId: faceId.credentialId,
          onUnlocked: () => { markUnlockedThisSession(); renderShell(root); },
          onUsePassword: () => { store.logout(); showAuthMenu(); },
        });
      } else {
        // Appli rouverte après une vraie fermeture, sans Face ID activé :
        // on redemande le mot de passe avant d'entrer.
        const { session } = store.get();
        renderLogin(root, {
          mode: "reconnect",
          prefillEmail: session ? session.email : "",
          onDone: () => { markUnlockedThisSession(); renderShell(root); },
          onBack: () => { store.logout(); showAuthMenu(); },
        });
      }
    } else {
      showAuthMenu();
    }
  });
}

// applique le thème sauvegardé avant le premier rendu
document.documentElement.setAttribute("data-theme", store.get().settings.theme);

start();
