// The Roots — coquille principale : menu hamburger (haut à gauche) ouvrant
// un tiroir de navigation rangé en 4 sections (validé sur maquette le
// 23/09) — Apprendre, Ressources, Explorer, Réglages —, bouton retour, et
// routage entre les onglets.

import { renderDashboard } from "./dashboard.js?v=20260924j";
import { renderSettings } from "./settings.js?v=20260924j";
import { renderMesCours } from "./mes-cours.js?v=20260924j";
import { renderMesArbres } from "./mes-arbres.js?v=20260924j";
import { renderComprehension } from "./comprehension.js?v=20260924j";
import { renderExpression } from "./expression.js?v=20260924j";
import { renderTraduction } from "./traduction.js?v=20260924j";
import { renderDictionnaire } from "./dictionnaire.js?v=20260924j";
import { renderConversation } from "./conversation.js?v=20260924j";
import { renderBibliotheque } from "./bibliotheque.js?v=20260924j";
import { renderAideFaq } from "./aide-faq.js?v=20260924j";
import { mountMyWorld } from "./my-world.js?v=20260924j";
import { renderCountry } from "./country.js?v=20260924j";
import { store } from "../data/store.js?v=20260924j";
import { t } from "../data/i18n.js?v=20260924j";

// Structure du tiroir : "Accueil" seul en haut, puis 4 sections. Les noms
// de "Conversation" (avant "Conversation IA") et de la section
// "Ressources" restent à confirmer avec Ashley (voir badge "à valider"
// dans la maquette) — faciles à renommer ensuite, juste une clé i18n.
function menuSections(lang) {
  return [
    { items: [{ id: "accueil", label: t("menu_accueil", lang), icon: "🏠" }] },
    { title: t("menu_section_apprendre", lang), items: [
      { id: "mes-arbres", label: t("menu_mesarbres", lang), icon: "🌳" },
      { id: "mes-cours", label: t("menu_mescours", lang), icon: "📚" },
      { id: "comprehension", label: t("menu_comprehension", lang), icon: "🎧" },
      { id: "expression", label: t("menu_expression", lang), icon: "🗣️" },
      { id: "conversation", label: t("menu_conversation", lang), icon: "💬" },
    ] },
    { title: t("menu_section_ressources", lang), items: [
      { id: "dictionnaire", label: t("menu_dictionnaire", lang), icon: "📕" },
      { id: "traduction", label: t("menu_traduction", lang), icon: "🌐" },
      { id: "bibliotheque", label: t("menu_bibliotheque", lang), icon: "📖", badge: t("menu_badge_new", lang) },
    ] },
    { title: t("menu_section_explorer", lang), items: [
      { id: "my-world", label: t("menu_myworld", lang), icon: "🌍" },
    ] },
    { title: t("menu_section_reglages", lang), items: [
      { id: "parametres", label: t("menu_parametres", lang), icon: "⚙️" },
      { id: "aide", label: t("menu_aide", lang), icon: "❓", badge: t("menu_badge_new", lang) },
    ] },
  ];
}

function titles(lang) {
  return {
    "accueil": "The Roots",
    "mes-arbres": t("title_mesarbres", lang),
    "mes-cours": t("title_mescours", lang),
    "comprehension": t("title_comprehension", lang),
    "expression": t("title_expression", lang),
    "conversation": t("title_conversation", lang),
    "dictionnaire": t("title_dictionnaire", lang),
    "traduction": t("title_traduction", lang),
    "bibliotheque": t("title_bibliotheque", lang),
    "my-world": t("title_myworld", lang),
    "parametres": t("title_parametres", lang),
    "aide": t("title_aide", lang),
  };
}

export function renderShell(root) {
  const lang = store.get().settings.interfaceLang;
  const SECTIONS = menuSections(lang);
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
        ${SECTIONS.map(sec => `
          ${sec.title ? `<div class="nav-drawer-section">${sec.title}</div>` : ""}
          ${sec.items.map(mi => `
            <button class="nav-drawer-item" data-tab="${mi.id}">
              <span class="nav-drawer-icon">${mi.icon}</span>
              <span class="nav-drawer-label">${mi.label}${mi.badge ? `<span class="nav-drawer-badge">${mi.badge}</span>` : ""}</span>
              <span class="nav-drawer-chev">›</span>
            </button>`).join("")}
        `).join("")}
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

  let renderedDay = new Date().toDateString();
  // Le globe de My World tourne en continu : on l'arrête quand on quitte l'onglet.
  let mwCleanup = null;
  function stopMyWorld() { if (mwCleanup) { try { mwCleanup(); } catch (e) { /* rien */ } mwCleanup = null; } }
  // My World › Royaume-Uni : Explorer ce pays / Mode Survie (écran plein, fond habituel).
  function openCountry(countryId, mode) {
    stopMyWorld();
    el.classList.remove("is-myworld", "mw-night");
    titleEl.textContent = countryId === "gb" ? "Royaume-Uni" : TITLES["my-world"];
    body.innerHTML = "";
    body.scrollTop = 0;
    renderCountry(body, { countryId, mode, onBack: () => renderTab("my-world") });
  }
  function renderTab(id) {
    stopMyWorld();
    body.onclick = null;
    if (!TITLES[id]) id = "accueil";
    current = id;
    renderedDay = new Date().toDateString();
    // Chaque onglet s'ouvre en haut de page (la zone qui défile est
    // .app-body, elle garderait sinon la position de l'onglet précédent).
    body.scrollTop = 0;
    try { window.speechSynthesis && window.speechSynthesis.cancel(); } catch (e) { /* rien */ }
    titleEl.textContent = TITLES[id];
    // My World occupe tout l'écran (son propre fond jour/nuit) : on masque
    // le fond habituel de la coquille le temps de l'onglet.
    el.classList.toggle("is-myworld", id === "my-world");
    el.classList.remove("mw-night");
    backBtn.style.visibility = id === "accueil" ? "hidden" : "visible";
    el.querySelectorAll(".nav-drawer-item").forEach(b => b.classList.toggle("active", b.dataset.tab === id));

    if (id === "accueil") renderDashboard(body, { onGoToCourses: () => renderTab("mes-cours"), onGoToTab: (tab) => renderTab(tab) });
    else if (id === "mes-arbres") renderMesArbres(body, { onGoToCourses: () => renderTab("mes-cours") });
    else if (id === "parametres") renderSettings(body, () => {});
    else if (id === "mes-cours") renderMesCours(body, root);
    else if (id === "comprehension") renderComprehension(body);
    else if (id === "expression") renderExpression(body);
    else if (id === "conversation") renderConversation(body);
    else if (id === "dictionnaire") renderDictionnaire(body);
    else if (id === "traduction") renderTraduction(body);
    else if (id === "bibliotheque") renderBibliotheque(body);
    else if (id === "aide") renderAideFaq(body);
    else if (id === "my-world") {
      body.innerHTML = "";
      const topbar = el.querySelector(".app-topbar");
      mountMyWorld(body, {
        topOffset: topbar ? topbar.offsetHeight : 64,
        onNightChange: (on) => { if (current === "my-world") el.classList.toggle("mw-night", on); },
        onExplore: (countryId, mode) => openCountry(countryId, mode),
      }).then((cleanup) => { if (current === "my-world" && el.classList.contains("is-myworld")) mwCleanup = cleanup; else if (cleanup) cleanup(); });
    }
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

  // Appli installée sur l'écran d'accueil : iOS la "réveille" sans la
  // recharger, donc l'Accueil pouvait rester figé sur la date (et donc
  // l'expression, la citation, la vidéo) du jour où il avait été affiché —
  // c'est pour ça que "l'expression du jour" semblait ne plus changer. Au
  // retour dans l'appli, si on a changé de jour, on réaffiche l'Accueil.
  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState !== "visible") return;
    if (current === "accueil" && new Date().toDateString() !== renderedDay) renderTab("accueil");
  });

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
