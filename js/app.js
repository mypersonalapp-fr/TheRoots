// The Roots — contrôleur principal :
// démarrage (racines + bonjour → nom de l'appli) → menu (inscription /
// connexion / mot de passe oublié) → coquille de l'application.

import { store } from "./data/store.js?v=20260924a";
import { renderSplash } from "./screens/splash.js?v=20260924a";
import { renderAuthMenu } from "./screens/auth-menu.js?v=20260924a";
import { renderLogin } from "./screens/login.js?v=20260924a";
import { renderForgotPassword } from "./screens/forgot-password.js?v=20260924a";
import { renderShell } from "./screens/shell.js?v=20260924a";
import { renderFaceIdLock } from "./screens/faceid-lock.js?v=20260924a";
import { renderChooseLanguage } from "./screens/choose-language.js?v=20260924a";

const root = document.getElementById("app");

// Précharge le plus tôt possible la liste des voix de synthèse vocale
// (speechSynthesis.getVoices()) : sur Safari/iOS, cette liste est souvent
// vide au tout premier appel et se remplit en arrière-plan un peu après —
// sans ce préchargement au démarrage, un écran ouvert plus tard
// (Dictionnaire, Traduction, Expression orale, une leçon...) peut appeler
// getVoices() avant que "Samantha" (ou toute autre voix choisie dans
// Paramètres) ne soit dans la liste, et retombe alors silencieusement sur
// la voix par défaut de l'appareil.
if (window.speechSynthesis) {
  window.speechSynthesis.getVoices();
  window.speechSynthesis.addEventListener("voiceschanged", () => {
    window.speechSynthesis.getVoices();
  });
}

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

// Point d'entrée dans l'appli une fois déverrouillée (après connexion,
// inscription, reconnexion ou Face ID) : pose la question "quelle langue
// veux-tu apprendre ?" une seule fois, tant que settings.primaryLearningLang
// est encore vide, puis n'affiche plus jamais cet écran ensuite (voir
// choose-language.js et store.setPrimaryLearningLang).
function enterApp() {
  const { settings } = store.get();
  if (!settings.primaryLearningLang) {
    renderChooseLanguage(root, { onDone: () => renderShell(root) });
  } else {
    renderShell(root);
  }
}

function showAuthMenu() {
  renderAuthMenu(root, {
    onSignup: () => renderLogin(root, { mode: "signup", onDone: () => { markUnlockedThisSession(); enterApp(); }, onBack: showAuthMenu }),
    onLogin: () => renderLogin(root, { mode: "login", onDone: () => { markUnlockedThisSession(); enterApp(); }, onBack: showAuthMenu }),
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
        enterApp();
        return;
      }
      const faceId = store.getFaceId();
      if (faceId.enabled && faceId.credentialId) {
        renderFaceIdLock(root, {
          credentialId: faceId.credentialId,
          onUnlocked: () => { markUnlockedThisSession(); enterApp(); },
          onUsePassword: () => { store.logout(); showAuthMenu(); },
        });
      } else {
        // Appli rouverte après une vraie fermeture, sans Face ID activé :
        // on redemande le mot de passe avant d'entrer.
        const { session } = store.get();
        renderLogin(root, {
          mode: "reconnect",
          prefillEmail: session ? session.email : "",
          onDone: () => { markUnlockedThisSession(); enterApp(); },
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
