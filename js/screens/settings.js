// The Roots — onglet Paramètres, organisé en dossiers, dans cet ordre :
// 1) Réglages généraux (apparence, langue de l'interface)
// 2) Attribution des niveaux (3 onglets : méthode, grille de score, définitions par langue)
// 3) Sécurité (modifier l'adresse e-mail et le mot de passe)
// 4) Version de l'application (tout en bas)
// "Mon niveau actuel" ne vit plus ici : il est désormais dans Mes cours,
// par langue, avec le "Niveau d'entrée" gardé en référence permanente.

import { store } from "../data/store.js";

const APP_VERSION = "1.2";

// --- Grille de score CECR : universelle pour l'instant (même repère pour
// toutes les langues), pensée pour couvrir tout de suite les 6 paliers
// A1 → C2, même si seul le contenu A1 existe pour l'instant côté leçons.
// Elle sera affinée langue par langue au fur et à mesure. ---
const SCORE_BANDS = [
  { level: "A1", min: 0, max: 39, desc: "Découverte" },
  { level: "A2", min: 40, max: 54, desc: "Survie" },
  { level: "B1", min: 55, max: 69, desc: "Seuil" },
  { level: "B2", min: 70, max: 79, desc: "Avancé" },
  { level: "C1", min: 80, max: 89, desc: "Autonome" },
  { level: "C2", min: 90, max: 100, desc: "Maîtrise" },
];

// Définitions CECR (échelle globale du Conseil de l'Europe) — génériques par
// défaut, avec la possibilité d'affiner par langue au cas par cas plus tard
// (ex. LEVEL_DEFINITIONS["pt-br"] pour des nuances propres au portugais).
const GENERIC_DEFINITIONS = {
  A1: "Peut comprendre et utiliser des expressions familières et quotidiennes, se présenter, poser des questions simples sur des sujets familiers (où il/elle habite, les gens qu'il/elle connaît) et y répondre.",
  A2: "Peut comprendre des phrases isolées et des expressions fréquemment utilisées en relation avec des domaines immédiats (informations personnelles, achats, environnement proche) et communiquer lors de tâches simples et habituelles.",
  B1: "Peut comprendre les points essentiels quand un langage clair et standard est utilisé sur des choses familières, produire un discours simple et cohérent, raconter un événement ou une expérience.",
  B2: "Peut comprendre le contenu essentiel de sujets concrets ou abstraits, communiquer avec spontanéité et aisance, s'exprimer sur une grande gamme de sujets.",
  C1: "Peut comprendre une grande gamme de textes longs et exigeants, en saisir les significations implicites, s'exprimer spontanément et couramment sans trop chercher ses mots.",
  C2: "Peut comprendre sans effort pratiquement tout ce qu'il/elle lit ou entend, s'exprimer spontanément, très couramment et avec précision, même sur des sujets complexes.",
};
const LEVEL_DEFINITIONS = {
  // "en-gb": { A1: "...", ... } — à personnaliser langue par langue si besoin ;
  // sans entrée ici, GENERIC_DEFINITIONS s'applique (voir defsFor()).
};
function defsFor(code) {
  return { ...GENERIC_DEFINITIONS, ...(LEVEL_DEFINITIONS[code] || {}) };
}

export function renderSettings(container, onChange) {
  let view = "root"; // "root" | "general" | "niveaux" | "securite"
  let niveauxTab = "methode"; // "methode" | "grille" | "definitions"
  const expandedGrille = {};
  const expandedDefs = {};
  let securityMsg = "";
  let editingEmail = false;
  let editingPassword = false;

  paint();

  function paint() {
    if (view === "general") return paintGeneral();
    if (view === "niveaux") return paintNiveaux();
    if (view === "securite") return paintSecurite();
    return paintRoot();
  }

  function backRow(label) {
    return `<button class="settings-back" id="settingsBack">‹ ${label}</button>`;
  }

  function paintRoot() {
    container.innerHTML = `
      <div class="settings-tabs">
        <div class="card settings-tab" id="openGeneral">
          <div><strong>Réglages généraux</strong><div style="font-size:12px;color:var(--ink-soft)">Apparence, langue de l'interface</div></div>
          <span class="chev">›</span>
        </div>

        <div class="card settings-tab" id="openNiveaux">
          <div><strong>Attribution des niveaux</strong><div style="font-size:12px;color:var(--ink-soft)">Méthode, grille de score, définitions par langue</div></div>
          <span class="chev">›</span>
        </div>

        <div class="card settings-tab" id="openSecurite">
          <div><strong>Sécurité</strong><div style="font-size:12px;color:var(--ink-soft)">Adresse e-mail, mot de passe</div></div>
          <span class="chev">›</span>
        </div>

        <div class="card settings-tab">
          <div><strong>Version de l'application</strong></div>
          <span style="color:var(--ink-soft)">${APP_VERSION}</span>
        </div>
      </div>
    `;
    container.querySelector("#openGeneral").addEventListener("click", () => { view = "general"; paint(); });
    container.querySelector("#openNiveaux").addEventListener("click", () => { view = "niveaux"; niveauxTab = "methode"; paint(); });
    container.querySelector("#openSecurite").addEventListener("click", () => {
      view = "securite"; securityMsg = ""; editingEmail = false; editingPassword = false; paint();
    });
  }

  function paintGeneral() {
    const { settings } = store.get();
    container.innerHTML = `
      ${backRow("Paramètres")}
      <div class="settings-tabs">
        <div class="card settings-tab">
          <div><strong>Apparence</strong><div style="font-size:12px;color:var(--ink-soft)">Mode clair / sombre</div></div>
          <button class="btn btn-ghost" id="themeToggle">${settings.theme === "dark" ? "Mode sombre" : "Mode clair"}</button>
        </div>

        <div class="card settings-tab">
          <div><strong>Langue de l'interface</strong><div style="font-size:12px;color:var(--ink-soft)">Menus de l'application</div></div>
          <select id="interfaceLang">
            <option value="fr" ${settings.interfaceLang==="fr"?"selected":""}>Français</option>
            <option value="en" ${settings.interfaceLang==="en"?"selected":""}>English</option>
            <option value="pt" ${settings.interfaceLang==="pt"?"selected":""}>Português</option>
            <option value="es" ${settings.interfaceLang==="es"?"selected":""}>Español</option>
          </select>
        </div>
      </div>
    `;
    container.querySelector("#settingsBack").addEventListener("click", () => { view = "root"; paint(); });
    container.querySelector("#themeToggle").addEventListener("click", () => {
      const next = settings.theme === "dark" ? "light" : "dark";
      store.updateSettings({ theme: next });
      document.documentElement.setAttribute("data-theme", next);
      onChange && onChange();
      paint();
    });
    container.querySelector("#interfaceLang").addEventListener("change", (e) => {
      store.updateSettings({ interfaceLang: e.target.value });
    });
  }

  // --- Attribution des niveaux : 3 onglets nommés ---
  function paintNiveaux() {
    container.innerHTML = `
      ${backRow("Paramètres")}
      <div class="settings-pill-tabs">
        <button class="settings-pill ${niveauxTab === "methode" ? "active" : ""}" data-tab="methode">Comment ça marche</button>
        <button class="settings-pill ${niveauxTab === "grille" ? "active" : ""}" data-tab="grille">Grille de score</button>
        <button class="settings-pill ${niveauxTab === "definitions" ? "active" : ""}" data-tab="definitions">Définitions par langue</button>
      </div>
      <div id="niveauxBody"></div>
    `;
    container.querySelector("#settingsBack").addEventListener("click", () => { view = "root"; paint(); });
    container.querySelectorAll(".settings-pill").forEach((btn) => {
      btn.addEventListener("click", () => { niveauxTab = btn.dataset.tab; paint(); });
    });
    const body = container.querySelector("#niveauxBody");
    if (niveauxTab === "methode") paintMethode(body);
    else if (niveauxTab === "grille") paintGrille(body);
    else paintDefinitions(body);
  }

  function paintMethode(body) {
    body.innerHTML = `
      <div class="card">
        <h3 style="margin:0 0 10px">Comment on détermine ton niveau</h3>
        <p style="font-size:13px;color:var(--ink-soft);line-height:1.6">
          Dès que tu choisis une langue à apprendre, un test de niveau te place automatiquement
          dans le bon palier de départ (échelle CECR : A1 à C2) — pour que tu ne perdes pas de
          temps sur des choses déjà acquises, et que tu ne sois pas non plus mise en difficulté
          trop tôt.
        </p>
        <p style="font-size:13px;color:var(--ink-soft);line-height:1.6;margin-top:10px">
          Ton tout premier résultat est gardé pour toujours comme <strong>« niveau d'entrée »</strong>
          (visible dans Mes cours, par langue) : même si ton niveau progresse ensuite avec les
          leçons, cette référence de départ ne bouge pas, pour que tu puisses mesurer ton chemin
          parcouru dans le temps.
        </p>
        <p style="font-size:12px;color:var(--ink-soft);margin-top:10px">
          Le test est en cours de retravail pour se rapprocher des standards des grandes
          applications de langues — la méthode ci-dessus restera la même, seul le test lui-même
          va s'affiner.
        </p>
      </div>
    `;
  }

  function paintGrille(body) {
    const { settings } = store.get();
    const allOpen = settings.langs.every((l) => expandedGrille[l.code]);
    body.innerHTML = `
      <div class="lvl-toolbar">
        <button class="btn btn-ghost" id="lvlToggleAll">${allOpen ? "Tout masquer" : "Tout afficher"}</button>
      </div>
      <p style="font-size:12px;color:var(--ink-soft);margin:0 0 12px">
        Grille commune A1 → C2 (sera affinée langue par langue). Le pourcentage correspond au
        score obtenu au test de placement de cette langue.
      </p>
      ${settings.langs.map((l) => `
        <div class="card lvl-lang-group">
          <div class="lvl-lang-head" data-code="${l.code}">
            <strong>${l.label}</strong>
            <span class="chev">${expandedGrille[l.code] ? "⌄" : "›"}</span>
          </div>
          <div class="lvl-lang-body" ${expandedGrille[l.code] ? "" : "hidden"}>
            <div class="cefr-table">
              <div class="cefr-row cefr-head"><span>Score au test</span><span>Niveau</span><span>Repère</span></div>
              ${SCORE_BANDS.map((b) => `
                <div class="cefr-row">
                  <span>${b.min}–${b.max}%</span>
                  <span class="cefr-level-badge">${b.level}</span>
                  <span>${b.desc}</span>
                </div>
              `).join("")}
            </div>
          </div>
        </div>
      `).join("")}
    `;
    body.querySelectorAll(".lvl-lang-head").forEach((head) => {
      head.addEventListener("click", () => {
        const code = head.dataset.code;
        expandedGrille[code] = !expandedGrille[code];
        paintGrille(body);
      });
    });
    body.querySelector("#lvlToggleAll").addEventListener("click", () => {
      const next = !allOpen;
      settings.langs.forEach((l) => { expandedGrille[l.code] = next; });
      paintGrille(body);
    });
  }

  function paintDefinitions(body) {
    const { settings } = store.get();
    const allOpen = settings.langs.every((l) => expandedDefs[l.code]);
    body.innerHTML = `
      <div class="lvl-toolbar">
        <button class="btn btn-ghost" id="defToggleAll">${allOpen ? "Tout masquer" : "Tout afficher"}</button>
      </div>
      <p style="font-size:12px;color:var(--ink-soft);margin:0 0 12px">
        Ce que chaque niveau veut dire, langue par langue — un « A2 » n'a pas exactement le même
        contenu selon la langue apprise, ces définitions seront affinées au fur et à mesure.
      </p>
      ${settings.langs.map((l) => {
        const defs = defsFor(l.code);
        return `
        <div class="card lvl-lang-group">
          <div class="lvl-lang-head" data-code="${l.code}">
            <strong>${l.label}</strong>
            <span class="chev">${expandedDefs[l.code] ? "⌄" : "›"}</span>
          </div>
          <div class="lvl-lang-body" ${expandedDefs[l.code] ? "" : "hidden"}>
            ${Object.keys(defs).map((lvl) => `
              <div class="lvl-def-row">
                <span class="cefr-level-badge">${lvl}</span>
                <span>${defs[lvl]}</span>
              </div>
            `).join("")}
          </div>
        </div>
      `;}).join("")}
    `;
    body.querySelectorAll(".lvl-lang-head").forEach((head) => {
      head.addEventListener("click", () => {
        const code = head.dataset.code;
        expandedDefs[code] = !expandedDefs[code];
        paintDefinitions(body);
      });
    });
    body.querySelector("#defToggleAll").addEventListener("click", () => {
      const next = !allOpen;
      settings.langs.forEach((l) => { expandedDefs[l.code] = next; });
      paintDefinitions(body);
    });
  }

  // --- Sécurité : compte actuel affiché, avec une action "Changer" séparée
  // pour l'adresse e-mail et pour le mot de passe (pas un seul formulaire
  // combiné) — plus la déconnexion. ---
  function paintSecurite() {
    const { session } = store.get();
    container.innerHTML = `
      ${backRow("Paramètres")}
      <div class="card">
        <h3 style="margin:0 0 14px">Sécurité du compte</h3>

        <div class="sec-row">
          <div>
            <div class="sec-row-label">Adresse e-mail</div>
            <div class="sec-row-value">${session ? session.email : ""}</div>
          </div>
          <button class="mc-variant-change" id="toggleEmail">${editingEmail ? "Annuler" : "Changer"}</button>
        </div>
        ${editingEmail ? `
          <form class="login-form" id="emailForm" style="margin-top:10px">
            <label class="field">
              <span>Nouvelle adresse e-mail</span>
              <input type="email" name="email" value="${session ? session.email : ""}" required/>
            </label>
            <button type="submit" class="btn btn-primary" style="width:100%">Enregistrer l'adresse e-mail</button>
          </form>
        ` : ""}

        <div class="sec-row" style="margin-top:18px">
          <div>
            <div class="sec-row-label">Mot de passe</div>
            <div class="sec-row-value">••••••••</div>
          </div>
          <button class="mc-variant-change" id="togglePassword">${editingPassword ? "Annuler" : "Changer"}</button>
        </div>
        ${editingPassword ? `
          <form class="login-form" id="passwordForm" style="margin-top:10px">
            <label class="field">
              <span>Nouveau mot de passe</span>
              <input type="password" name="password" required autocomplete="new-password"/>
            </label>
            <button type="submit" class="btn btn-primary" style="width:100%">Enregistrer le mot de passe</button>
          </form>
        ` : ""}

        ${securityMsg ? `<div class="lt-ok" style="margin-top:14px;font-weight:700;font-size:13px">${securityMsg}</div>` : ""}

        <button class="btn btn-ghost" id="logoutBtn" style="width:100%;margin-top:22px;color:var(--pop);border-color:var(--pop)">Se déconnecter</button>
      </div>
    `;
    container.querySelector("#settingsBack").addEventListener("click", () => { view = "root"; paint(); });

    container.querySelector("#toggleEmail").addEventListener("click", () => {
      editingEmail = !editingEmail; securityMsg = ""; paintSecurite();
    });
    container.querySelector("#togglePassword").addEventListener("click", () => {
      editingPassword = !editingPassword; securityMsg = ""; paintSecurite();
    });

    const emailForm = container.querySelector("#emailForm");
    if (emailForm) emailForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const email = e.target.email.value.trim();
      store.updateAccount({ email });
      securityMsg = "Adresse e-mail mise à jour ✓";
      editingEmail = false;
      paintSecurite();
    });

    const passwordForm = container.querySelector("#passwordForm");
    if (passwordForm) passwordForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const password = e.target.password.value;
      store.updateAccount({ password });
      securityMsg = "Mot de passe mis à jour ✓";
      editingPassword = false;
      paintSecurite();
    });

    container.querySelector("#logoutBtn").addEventListener("click", () => {
      store.logout();
      window.location.reload();
    });
  }
}
