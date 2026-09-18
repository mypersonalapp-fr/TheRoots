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
const MENU_ITEMS = [
  { id: "accueil", label: "Accueil", icon: "🏠" },
  { id: "mes-cours", label: "Mes cours", icon: "📚" },
  { id: "comprehension", label: "Compréhension orale et écrite", icon: "🎧" },
  { id: "expression", label: "Expression écrite et orale", icon: "🗣️" },
  { id: "traduction", label: "Traduction", icon: "🌐" },
  { id: "parametres", label: "Paramètres", icon: "⚙️" },
];

const TITLES = {
  "accueil": "The Roots",
  "mes-cours": "Mes cours",
  "comprehension": "Compréhension",
  "expression": "Expression",
  "traduction": "Traduction",
  "parametres": "Paramètres",
};

export function renderShell(root) {
  const el = document.createElement("div");
  el.className = "screen app-shell";
  el.innerHTML = `
    <div class="shell-bg" id="shellBg">
      <img class="screen-cover-bg" src="assets/img/shell-bg.jpg" alt="" aria-hidden="true"/>
    </div>
    <div class="app-topbar">
      <button class="hamburger-btn" id="hamburgerBtn" aria-label="Menu" aria-expanded="false">
        <span></span><span></span><span></span>
      </button>
      <div class="title" id="screenTitle">The Roots</div>
      <button class="back-btn" id="backBtn" aria-label="Retour" style="visibility:hidden">‹</button>
    </div>
    <div class="app-body" id="appBody"></div>

    <div class="nav-drawer-backdrop" id="navBackdrop" hidden></div>
    <nav class="nav-drawer" id="navDrawer" aria-hidden="true">
      <div class="nav-drawer-head">
        <div class="nav-drawer-brand">The Roots</div>
        <button class="nav-drawer-close" id="navClose" aria-label="Fermer le menu">✕</button>
      </div>
      <div class="nav-drawer-items">
        ${MENU_ITEMS.map(t => `
          <button class="nav-drawer-item" data-tab="${t.id}">
            <span class="nav-drawer-icon">${t.icon}</span>
            <span class="nav-drawer-label">${t.label}</span>
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

  renderTab("accueil");
}
