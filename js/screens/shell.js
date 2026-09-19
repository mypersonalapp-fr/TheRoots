// The Roots — coquille principale : menu hamburger (haut à gauche) ouvrant
// un panneau de navigation à 6 entrées (Accueil, Mes cours, Compréhension
// orale et écrite, Expression écrite et orale, Traduction, Paramètres),
// bouton retour, et routage entre les onglets.

import { renderDashboard } from "./dashboard.js";
import { renderSettings } from "./settings.js";
import { renderMesCours } from "./mes-cours.js";
import { renderComprehension } from "./comprehension.js";
import { renderExpression } from "./expression.js";
import { renderTraduction } from "./traduction.js";
import { renderDictionnaire } from "./dictionnaire.js";
import { store } from "../data/store.js";
import { t } from "../data/i18n.js";

function menuItems(lang) {
  return [
    { id: "accueil", label: t("menu_accueil", lang), icon: "🏠" },
    { id: "mes-cours", label: t("menu_mescours", lang), icon: "📚" },
    { id: "comprehension", label: t("menu_comprehension", lang), icon: "🎧" },
    { id: "expression", label: t("menu_expression", lang), icon: "🗣️" },
    { id: "dictionnaire", label: t("menu_dictionnaire", lang), icon: "📕" },
    { id: "traduction", label: t("menu_traduction", lang), icon: "🌐" },
    { id: "parametres", label: t("menu_parametres", lang), icon: "⚙️" },
  ];
}

function titles(lang) {
  return {
    "accueil": "The Roots",
    "mes-cours": t("title_mescours", lang),
    "comprehension": t("title_comprehension", lang),
    "expression": t("title_expression", lang),
    "dictionnaire": t("title_dictionnaire", lang),
    "traduction": t("title_traduction", lang),
    "parametres": t("title_parametres", lang),
  };
}

export function renderShell(root) {
  const lang = store.get().settings.interfaceLang;
  const MENU_ITEMS = menuItems(lang);
  const TITLES = titles(lang);
  const el = document.createElement("div");
  el.className = "screen app-shell";
  el.innerHTML = `
    <div class="shell-bg" id="shellBg">
      <img class="screen-cover-bg bg-img-light" src="assets/img/shell-bg.jpg" alt="" aria-hidden="true"/>
      <img class="screen-cover-bg bg-img-dark" src="assets/img/shell-bg-dark.jpg" alt="" aria-hidden="true"/>
      <img class="screen-cover-bg bg-img-landscape" src="assets/img/shell-bg-landscape.jpg" alt="" aria-hidden="true"/>
      <img class="screen-cover-bg bg-img-landscape-dark" src="assets/img/shell-bg-landscape-dark.jpg" alt="" aria-hidden="true"/>
    </div>
    <div class="app-topbar">
      <button class="hamburger-btn" id="hamburgerBtn" aria-label="${t("aria_menu", lang)}" aria-expanded="false">
        <span></span><span></span><span></span>
      </button>
      <div class="title" id="screenTitle">The Roots</div>
      <button class="back-btn" id="backBtn" aria-label="${t("aria_back", lang)}" style="visibility:hidden">‹</button>
    </div>
    <div class="app-body" id="appBody"></div>

    <div class="nav-drawer-backdrop" id="navBackdrop" hidden></div>
    <nav class="nav-drawer" id="navDrawer" aria-hidden="true">
      <div class="nav-drawer-head">
        <div class="nav-drawer-brand">The Roots</div>
        <button class="nav-drawer-close" id="navClose" aria-label="${t("aria_close_menu", lang)}">✕</button>
      </div>
      <div class="nav-drawer-items">
        ${MENU_ITEMS.map(mi => `
          <button class="nav-drawer-item" data-tab="${mi.id}">
            <span class="nav-drawer-icon">${mi.icon}</span>
            <span class="nav-drawer-label">${mi.label}</span>
            <span class="nav-drawer-chev">›</span>
          </button>`).join("")}
      </div>
    </nav>
  `;
  root.appendChild(el);

  const body = el.querySelector("#appBody");
  const titleEl = el.querySelector("#screenTitle");
  const backBtn = el.querySelector("#backBtn");
  const hamburgerBtn = el.querySelector("#hamburgerBtn");
  const drawer = el.querySelector("#navDrawer");
  const drawerBackdrop = el.querySelector("#navBackdrop");
  let current = "accueil";

  function openDrawer() {
    drawer.classList.add("open");
    drawerBackdrop.hidden = false;
    requestAnimationFrame(() => drawerBackdrop.classList.add("show"));
    hamburgerBtn.setAttribute("aria-expanded", "true");
    drawer.setAttribute("aria-hidden", "false");
  }
  function closeDrawer() {
    drawer.classList.remove("open");
    drawerBackdrop.classList.remove("show");
    hamburgerBtn.setAttribute("aria-expanded", "false");
    drawer.setAttribute("aria-hidden", "true");
    setTimeout(() => { if (!drawer.classList.contains("open")) drawerBackdrop.hidden = true; }, 250);
  }

  function renderTab(id) {
    current = id;
    titleEl.textContent = TITLES[id];
    backBtn.style.visibility = id === "accueil" ? "hidden" : "visible";
    el.querySelectorAll(".nav-drawer-item").forEach(b => b.classList.toggle("active", b.dataset.tab === id));

    if (id === "accueil") renderDashboard(body, { onGoToCourses: () => renderTab("mes-cours") });
    else if (id === "parametres") renderSettings(body, () => {});
    else if (id === "mes-cours") renderMesCours(body, root);
    else if (id === "comprehension") renderComprehension(body);
    else if (id === "expression") renderExpression(body);
    else if (id === "dictionnaire") renderDictionnaire(body);
    else if (id === "traduction") renderTraduction(body);
  }

  hamburgerBtn.addEventListener("click", openDrawer);
  drawerBackdrop.addEventListener("click", closeDrawer);
  el.querySelector("#navClose").addEventListener("click", closeDrawer);
  el.querySelector(".nav-drawer-items").addEventListener("click", (e) => {
    const btn = e.target.closest("button[data-tab]");
    if (btn) { renderTab(btn.dataset.tab); closeDrawer(); }
  });
  backBtn.addEventListener("click", () => renderTab("accueil"));

  // Geste "glisser à droite" depuis le bord gauche de l'écran pour rouvrir
  // le menu (comme le bouton hamburger) — parti du bord pour ne pas gêner
  // les zones qui défilent horizontalement ailleurs dans l'appli (cartes de
  // progression, sélecteurs de traduction, etc.).
  let touchStartX = null;
  let touchStartY = null;
  let touchStartedAtEdge = false;
  el.addEventListener("touchstart", (e) => {
    const t = e.touches[0];
    touchStartX = t.clientX;
    touchStartY = t.clientY;
    touchStartedAtEdge = t.clientX < 24;
  }, { passive: true });
  el.addEventListener("touchend", (e) => {
    if (touchStartX === null) return;
    const t = e.changedTouches[0];
    const dx = t.clientX - touchStartX;
    const dy = Math.abs(t.clientY - touchStartY);
    if (touchStartedAtEdge && dx > 60 && dy < 60 && !drawer.classList.contains("open")) {
      openDrawer();
    }
    touchStartX = null;
  }, { passive: true });

  // Si Paramètres a mémorisé un onglet avant un rechargement (ex. juste
  // après un changement de langue d'interface), on rouvre cet onglet-là au
  // lieu de retomber systématiquement sur l'Accueil.
  let startTab = "accueil";
  try {
    const savedTab = sessionStorage.getItem("the_roots_last_tab");
    if (savedTab) { startTab = savedTab; sessionStorage.removeItem("the_roots_last_tab"); }
  } catch (e) { /* stockage indisponible */ }
  renderTab(startTab);
}
