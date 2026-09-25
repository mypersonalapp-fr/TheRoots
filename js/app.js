// The Roots — contrôleur principal :
// démarrage (racines + bonjour → nom de l'appli) → menu (inscription /
// connexion / mot de passe oublié) → coquille de l'application.

import { store } from "./data/store.js?v=20260924j";
import { renderSplash } from "./screens/splash.js?v=20260924j";
import { renderAuthMenu } from "./screens/auth-menu.js?v=20260924j";
import { renderLogin } from "./screens/login.js?v=20260924j";
import { renderForgotPassword } from "./screens/forgot-password.js?v=20260924j";
import { renderShell } from "./screens/shell.js?v=20260924l";
import { renderFaceIdLock } from "./screens/faceid-lock.js?v=20260924j";
import { renderChooseLanguage } from "./screens/choose-language.js?v=20260924j";
import { renderOnboarding, hasSeenOnboarding } from "./screens/onboarding.js?v=20260924j";

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
    renderChooseLanguage(root, { onDone: () => enterShellMaybeOnboarding() });
  } else {
    enterShellMaybeOnboarding();
  }
}

// Tutoriel de première connexion (validé sur maquette le 23/09) : montré
// une seule fois, juste après le choix de la langue apprise principale
// (ou dès la prochaine ouverture si elle était déjà choisie), jamais
// ensuite — revisitable à la main depuis Réglages > Aide & FAQ.
function enterShellMaybeOnboarding() {
  if (!hasSeenOnboarding()) {
    renderOnboarding(root, { onDone: () => renderShell(root) });
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
  // Si l'appli a déjà été déverrouillée pendant cette même ouverture (ex.
  // retour depuis lessons.html via "‹ Retour à l'app", qui recharge
  // index.html — ou juste après connexion, ou après un rechargement
  // déclenché par un changement dans Paramètres), on saute complètement
  // l'écran de démarrage (racines + "Hello/Bonjour/Hola...") : il ne doit
  // s'afficher qu'à une VRAIE réouverture de l'appli, pas à chaque retour
  // à l'Accueil. Avant ce correctif (retour d'Ashley le 23/09 : "pourquoi
  // à chaque que je reviens en arrière il y'a hello et tout ?"), le splash
  // était toujours affiché en premier, et ce n'est qu'ensuite qu'on
  // vérifiait si on était déjà déverrouillé — trop tard, l'animation avait
  // déjà tourné.
  if (store.isLoggedIn() && isUnlockedThisSession()) {
    enterApp();
    return;
  }
  renderSplash(root, () => {
    if (store.isLoggedIn()) {
      const faceId = store.getFaceId();
      if (faceId.enabled && faceId.credentialId) {
        renderFaceIdLock(root, {
          credentialId: faceId.credentialId,
          onUnlocked: () => { markUnlockedThisSession(); enterApp(); },
          onUsePassword: () => { store.logout(); showAuthMenu(); },
        });
      } else {
        // "Rester connecté sans mot de passe" (24/09, Paramètres > Sécurité) :
        // si activé et pas encore expiré (30 jours par défaut), on saute la
        // reconnexion complètement, sans pour autant activer Face ID. Passé
        // le délai, le réglage expire tout seul et on redemande le mot de
        // passe normalement, comme avant.
        const passwordSkip = store.getPasswordSkip();
        if (passwordSkip.enabled && passwordSkip.until && Date.now() < passwordSkip.until) {
          markUnlockedThisSession();
          enterApp();
          return;
        }
        if (passwordSkip.enabled) store.disablePasswordSkip();
        // Appli rouverte après une vraie fermeture, sans Face ID activé et
        // sans "rester connecté" actif : on redemande le mot de passe avant
        // d'entrer.
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
