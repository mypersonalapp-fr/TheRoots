// The Roots — onglet Paramètres, organisé en dossiers, dans cet ordre :
// 1) Réglages généraux (apparence, langue de l'interface, voix audio)
// 2) Attribution des niveaux (3 onglets : méthode, grille de score, définitions par langue)
// 3) Sécurité (modifier l'adresse e-mail et le mot de passe)
// 4) Version de l'application (tout en bas)
// "Mon niveau actuel" ne vit plus ici : il est désormais dans Mes cours,
// par langue, avec le "Niveau d'entrée" gardé en référence permanente.

import { store } from "../data/store.js";
import { t } from "../data/i18n.js";
import { webauthn } from "../data/webauthn.js";

const APP_VERSION = "1.2";

// --- Grille de score CECR : universelle pour l'instant (même repère pour
// toutes les langues), pensée pour couvrir tout de suite les 6 paliers
// A1 → C2, même si seul le contenu A1 existe pour l'instant côté leçons.
// Elle sera affinée langue par langue au fur et à mesure. ---
function scoreBands(lang) {
  return [
    { level: "A1", min: 0, max: 39, desc: t("band_decouverte", lang) },
    { level: "A2", min: 40, max: 54, desc: t("band_survie", lang) },
    { level: "B1", min: 55, max: 69, desc: t("band_seuil", lang) },
    { level: "B2", min: 70, max: 79, desc: t("band_avance", lang) },
    { level: "C1", min: 80, max: 89, desc: t("band_autonome", lang) },
    { level: "C2", min: 90, max: 100, desc: t("band_maitrise", lang) },
  ];
}

// Définitions CECR (échelle globale du Conseil de l'Europe) — génériques par
// défaut, avec la possibilité d'affiner par langue au cas par cas plus tard.
function genericDefinitions(lang) {
  return {
    A1: t("cefr_a1", lang),
    A2: t("cefr_a2", lang),
    B1: t("cefr_b1", lang),
    B2: t("cefr_b2", lang),
    C1: t("cefr_c1", lang),
    C2: t("cefr_c2", lang),
  };
}

// --- Voix audio : liste les voix anglaises disponibles sur l'appareil
// (Web Speech API) pour laisser choisir autre chose que la voix par défaut
// du téléphone. Le choix est gardé dans settings.preferredVoiceURI (une clé
// stable : "nom|langue", le voiceURI natif n'étant pas toujours fiable
// d'un appareil à l'autre) et relu par lessons.html et le test de niveau. ---
function englishVoices() {
  if (!window.speechSynthesis) return [];
  return window.speechSynthesis.getVoices()
    .filter((v) => v.lang && v.lang.toLowerCase().startsWith("en"))
    .sort((a, b) => a.name.localeCompare(b.name));
}
function voiceKey(v) { return `${v.name}|${v.lang}`; }

export function renderSettings(container, onChange) {
  let view = "root"; // "root" | "general" | "niveaux" | "securite"
  let niveauxTab = "methode"; // "methode" | "grille" | "definitions"
  const expandedGrille = {};
  const expandedDefs = {};
  let securityMsg = "";
  let faceidMsg = "";
  let editingEmail = false;
  let editingPassword = false;
  let voicesLoaded = englishVoices().length > 0;
  let voicesListenerAttached = false;
  let voicesPollId = null;

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
    const { settings } = store.get();
    const lang = settings.interfaceLang;
    container.innerHTML = `
      <div class="settings-tabs">
        <div class="card settings-tab" id="openGeneral">
          <div><strong>${t("set_general", lang)}</strong><div style="font-size:12px;color:var(--ink-soft)">${t("set_general_desc", lang)}</div></div>
          <span class="chev">›</span>
        </div>

        <div class="card settings-tab" id="openNiveaux">
          <div><strong>${t("set_levels", lang)}</strong><div style="font-size:12px;color:var(--ink-soft)">${t("set_levels_desc", lang)}</div></div>
          <span class="chev">›</span>
        </div>

        <div class="card settings-tab" id="openSecurite">
          <div><strong>${t("set_security", lang)}</strong><div style="font-size:12px;color:var(--ink-soft)">${t("set_security_desc", lang)}</div></div>
          <span class="chev">›</span>
        </div>

        <div class="card settings-tab">
          <div><strong>${t("set_version", lang)}</strong></div>
          <span style="color:var(--ink-soft)">${APP_VERSION}</span>
        </div>
      </div>
    `;
    container.querySelector("#openGeneral").addEventListener("click", () => { view = "general"; paint(); });
    container.querySelector("#openNiveaux").addEventListener("click", () => { view = "niveaux"; niveauxTab = "methode"; paint(); });
    container.querySelector("#openSecurite").addEventListener("click", () => {
      view = "securite"; securityMsg = ""; faceidMsg = ""; editingEmail = false; editingPassword = false; paint();
    });
  }

  function paintGeneral() {
    const { settings } = store.get();
    const lang = settings.interfaceLang;
    const voices = englishVoices();
    const currentVoiceKey = settings.preferredVoiceURI || "";

    // Sur iPhone/Safari, l'évènement "voiceschanged" ne se déclenche pas
    // toujours de façon fiable (bug connu de WebKit) : sans ce filet, la
    // liste peut rester bloquée sur "Chargement…" indéfiniment. En plus de
    // l'évènement, on retente donc aussi par petites relances pendant
    // quelques secondes après l'ouverture de l'écran.
    if (!voicesLoaded && window.speechSynthesis) {
      if (!voicesListenerAttached) {
        voicesListenerAttached = true;
        window.speechSynthesis.onvoiceschanged = () => {
          voicesLoaded = englishVoices().length > 0;
          if (view === "general") paintGeneral();
        };
      }
      if (!voicesPollId) {
        let tries = 0;
        voicesPollId = setInterval(() => {
          tries++;
          const found = englishVoices().length > 0;
          if (found || tries >= 20) {
            clearInterval(voicesPollId);
            voicesPollId = null;
            if (found) {
              voicesLoaded = true;
              if (view === "general") paintGeneral();
            }
          }
        }, 300);
      }
    }

    container.innerHTML = `
      ${backRow(t("title_parametres", lang))}
      <div class="settings-tabs">
        <div class="card settings-tab">
          <div><strong>${t("set_appearance", lang)}</strong><div style="font-size:12px;color:var(--ink-soft)">${t("set_appearance_desc", lang)}</div></div>
          <button class="btn btn-ghost" id="themeToggle">${settings.theme === "dark" ? t("set_theme_dark_btn", lang) : t("set_theme_light_btn", lang)}</button>
        </div>

        <div class="card settings-tab">
          <div><strong>${t("set_interface_lang", lang)}</strong><div style="font-size:12px;color:var(--ink-soft)">${t("set_interface_lang_desc", lang)}</div></div>
          <select id="interfaceLang">
            <option value="fr" ${settings.interfaceLang==="fr"?"selected":""}>Français</option>
            <option value="en" ${settings.interfaceLang==="en"?"selected":""}>English</option>
            <option value="pt" ${settings.interfaceLang==="pt"?"selected":""}>Português</option>
            <option value="es" ${settings.interfaceLang==="es"?"selected":""}>Español</option>
          </select>
        </div>

        <div class="card settings-tab" style="flex-direction:column;align-items:stretch;gap:10px">
          <div><strong>${t("set_voice", lang)}</strong><div style="font-size:12px;color:var(--ink-soft)">${t("set_voice_desc", lang)}</div></div>
          ${!voicesLoaded ? `
            <div style="font-size:12px;color:var(--ink-soft)">${t("set_voice_loading", lang)}</div>
          ` : voices.length === 0 ? `
            <div style="font-size:12px;color:var(--ink-soft)">${t("set_voice_none", lang)}</div>
          ` : `
            <select id="voiceSelect">
              <option value="">${t("set_voice_default_option", lang)}</option>
              ${voices.map((v) => `<option value="${voiceKey(v)}" ${currentVoiceKey === voiceKey(v) ? "selected" : ""}>${v.name} (${v.lang})</option>`).join("")}
            </select>
            <button class="btn btn-ghost" id="voicePreview">${t("set_voice_preview", lang)}</button>
          `}
          <p style="font-size:11.5px;color:var(--ink-soft);line-height:1.5;margin:2px 0 0">${t("set_voice_tip", lang)}</p>
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
      // La langue de l'interface change tout l'habillage de l'appli (menus,
      // titres, boutons...) déjà construit au premier rendu : le plus sûr et
      // le plus simple est de recharger, ça prend une seconde et applique le
      // changement partout d'un coup, sans écran à moitié traduit. On garde
      // juste une trace de l'onglet ouvert (ici "Paramètres") pour y revenir
      // directement après le rechargement, plutôt que de retomber sur
      // l'Accueil à chaque changement de langue.
      try { sessionStorage.setItem("the_roots_last_tab", "parametres"); } catch (err) { /* stockage indisponible */ }
      window.location.reload();
    });
    const voiceSelect = container.querySelector("#voiceSelect");
    if (voiceSelect) voiceSelect.addEventListener("change", (e) => {
      store.updateSettings({ preferredVoiceURI: e.target.value || null });
    });
    const voicePreview = container.querySelector("#voicePreview");
    if (voicePreview) voicePreview.addEventListener("click", () => {
      if (!window.speechSynthesis) return;
      const key = voiceSelect.value;
      const u = new SpeechSynthesisUtterance(t("set_voice_sample", lang));
      const match = voices.find((v) => voiceKey(v) === key);
      if (match) u.voice = match;
      u.lang = match ? match.lang : "en-GB";
      window.speechSynthesis.cancel();
      window.speechSynthesis.speak(u);
    });
  }

  // --- Attribution des niveaux : 3 onglets nommés ---
  function paintNiveaux() {
    const { settings } = store.get();
    const lang = settings.interfaceLang;
    container.innerHTML = `
      ${backRow(t("title_parametres", lang))}
      <div class="settings-pill-tabs">
        <button class="settings-pill ${niveauxTab === "methode" ? "active" : ""}" data-tab="methode">${t("set_tab_methode", lang)}</button>
        <button class="settings-pill ${niveauxTab === "grille" ? "active" : ""}" data-tab="grille">${t("set_tab_grille", lang)}</button>
        <button class="settings-pill ${niveauxTab === "definitions" ? "active" : ""}" data-tab="definitions">${t("set_tab_definitions", lang)}</button>
      </div>
      <div id="niveauxBody"></div>
    `;
    container.querySelector("#settingsBack").addEventListener("click", () => { view = "root"; paint(); });
    container.querySelectorAll(".settings-pill").forEach((btn) => {
      btn.addEventListener("click", () => { niveauxTab = btn.dataset.tab; paint(); });
    });
    const body = container.querySelector("#niveauxBody");
    if (niveauxTab === "methode") paintMethode(body, lang);
    else if (niveauxTab === "grille") paintGrille(body, lang);
    else paintDefinitions(body, lang);
  }

  function paintMethode(body, lang) {
    body.innerHTML = `
      <div class="card">
        <h3 style="margin:0 0 10px">${t("set_methode_title", lang)}</h3>
        <p style="font-size:13px;color:var(--ink-soft);line-height:1.6">${t("set_methode_p1", lang)}</p>
        <p style="font-size:13px;color:var(--ink-soft);line-height:1.6;margin-top:10px">${t("set_methode_p2", lang)}</p>
        <p style="font-size:12px;color:var(--ink-soft);margin-top:10px">${t("set_methode_p3", lang)}</p>
      </div>
    `;
  }

  function paintGrille(body, lang) {
    const { settings } = store.get();
    const allOpen = settings.langs.every((l) => expandedGrille[l.code]);
    const bands = scoreBands(lang);
    body.innerHTML = `
      <div class="lvl-toolbar">
        <button class="btn btn-ghost" id="lvlToggleAll">${allOpen ? t("set_toggle_all_hide", lang) : t("set_toggle_all_show", lang)}</button>
      </div>
      <p style="font-size:12px;color:var(--ink-soft);margin:0 0 12px">${t("set_grille_desc", lang)}</p>
      ${settings.langs.map((l) => `
        <div class="card lvl-lang-group">
          <div class="lvl-lang-head" data-code="${l.code}">
            <strong>${l.label}</strong>
            <span class="chev">${expandedGrille[l.code] ? "⌄" : "›"}</span>
          </div>
          <div class="lvl-lang-body" ${expandedGrille[l.code] ? "" : "hidden"}>
            <div class="cefr-table">
              <div class="cefr-row cefr-head"><span>${t("set_grille_col_score", lang)}</span><span>${t("set_grille_col_level", lang)}</span><span>${t("set_grille_col_desc", lang)}</span></div>
              ${bands.map((b) => `
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
        paintGrille(body, lang);
      });
    });
    body.querySelector("#lvlToggleAll").addEventListener("click", () => {
      const next = !allOpen;
      settings.langs.forEach((l) => { expandedGrille[l.code] = next; });
      paintGrille(body, lang);
    });
  }

  function paintDefinitions(body, lang) {
    const { settings } = store.get();
    const allOpen = settings.langs.every((l) => expandedDefs[l.code]);
    const defs0 = genericDefinitions(lang);
    body.innerHTML = `
      <div class="lvl-toolbar">
        <button class="btn btn-ghost" id="defToggleAll">${allOpen ? t("set_toggle_all_hide", lang) : t("set_toggle_all_show", lang)}</button>
      </div>
      <p style="font-size:12px;color:var(--ink-soft);margin:0 0 12px">${t("set_definitions_desc", lang)}</p>
      ${settings.langs.map((l) => {
        return `
        <div class="card lvl-lang-group">
          <div class="lvl-lang-head" data-code="${l.code}">
            <strong>${l.label}</strong>
            <span class="chev">${expandedDefs[l.code] ? "⌄" : "›"}</span>
          </div>
          <div class="lvl-lang-body" ${expandedDefs[l.code] ? "" : "hidden"}>
            ${Object.keys(defs0).map((lvl) => `
              <div class="lvl-def-row">
                <span class="cefr-level-badge">${lvl}</span>
                <span>${defs0[lvl]}</span>
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
        paintDefinitions(body, lang);
      });
    });
    body.querySelector("#defToggleAll").addEventListener("click", () => {
      const next = !allOpen;
      settings.langs.forEach((l) => { expandedDefs[l.code] = next; });
      paintDefinitions(body, lang);
    });
  }

  // --- Sécurité : compte actuel affiché, avec une action "Changer" séparée
  // pour l'adresse e-mail et pour le mot de passe (pas un seul formulaire
  // combiné) — plus la déconnexion. ---
  function paintSecurite() {
    const { session, settings, faceId } = store.get();
    const lang = settings.interfaceLang;
    container.innerHTML = `
      ${backRow(t("title_parametres", lang))}
      <div class="card">
        <h3 style="margin:0 0 14px">${t("set_security_title", lang)}</h3>

        <div class="sec-row">
          <div>
            <div class="sec-row-label">${t("set_email_label", lang)}</div>
            <div class="sec-row-value">${session ? session.email : ""}</div>
          </div>
          <button class="mc-variant-change" id="toggleEmail">${editingEmail ? t("set_cancel", lang) : t("set_change", lang)}</button>
        </div>
        ${editingEmail ? `
          <form class="login-form" id="emailForm" style="margin-top:10px">
            <label class="field">
              <span>${t("set_new_email_label", lang)}</span>
              <input type="email" name="email" value="${session ? session.email : ""}" required/>
            </label>
            <button type="submit" class="btn btn-primary" style="width:100%">${t("set_save_email", lang)}</button>
          </form>
        ` : ""}

        <div class="sec-row" style="margin-top:18px">
          <div>
            <div class="sec-row-label">${t("set_password_label", lang)}</div>
            <div class="sec-row-value">••••••••</div>
          </div>
          <button class="mc-variant-change" id="togglePassword">${editingPassword ? t("set_cancel", lang) : t("set_change", lang)}</button>
        </div>
        ${editingPassword ? `
          <form class="login-form" id="passwordForm" style="margin-top:10px">
            <label class="field">
              <span>${t("set_new_password_label", lang)}</span>
              <input type="password" name="password" required autocomplete="new-password"/>
            </label>
            <button type="submit" class="btn btn-primary" style="width:100%">${t("set_save_password", lang)}</button>
          </form>
        ` : ""}

        ${securityMsg ? `<div class="lt-ok" style="margin-top:14px;font-weight:700;font-size:13px">${securityMsg}</div>` : ""}

        <div class="sec-row" style="margin-top:18px">
          <div>
            <div class="sec-row-label">${t("sec_faceid_label", lang)}</div>
            <div class="sec-row-value">${faceId.enabled ? t("sec_faceid_on", lang) : t("sec_faceid_off", lang)}</div>
          </div>
          <button class="mc-variant-change" id="toggleFaceid">${faceId.enabled ? t("sec_faceid_disable_btn", lang) : t("sec_faceid_enable_btn", lang)}</button>
        </div>
        ${faceidMsg ? `<div class="lt-cloze-fb" style="margin-top:8px"><span class="${faceidMsg.ok ? 'lt-ok' : 'lt-bad'}">${faceidMsg.text}</span></div>` : ""}

        <button class="btn btn-ghost" id="logoutBtn" style="width:100%;margin-top:22px;color:var(--pop);border-color:var(--pop)">${t("set_logout", lang)}</button>
      </div>
    `;
    container.querySelector("#settingsBack").addEventListener("click", () => { view = "root"; paint(); });

    container.querySelector("#toggleEmail").addEventListener("click", () => {
      editingEmail = !editingEmail; securityMsg = ""; paintSecurite();
    });
    container.querySelector("#togglePassword").addEventListener("click", () => {
      editingPassword = !editingPassword; securityMsg = ""; paintSecurite();
    });

    container.querySelector("#toggleFaceid").addEventListener("click", async () => {
      if (faceId.enabled) {
        store.disableFaceId();
        faceidMsg = { ok: true, text: t("sec_faceid_disabled_msg", lang) };
        paintSecurite();
        return;
      }
      const available = await webauthn.isAvailable();
      if (!available) {
        faceidMsg = { ok: false, text: t("sec_faceid_unavailable", lang) };
        paintSecurite();
        return;
      }
      const credentialId = await webauthn.register(session ? session.email : "");
      if (credentialId) {
        store.enableFaceId(credentialId);
        faceidMsg = { ok: true, text: t("sec_faceid_enabled_msg", lang) };
      } else {
        faceidMsg = { ok: false, text: t("sec_faceid_failed", lang) };
      }
      paintSecurite();
    });

    const emailForm = container.querySelector("#emailForm");
    if (emailForm) emailForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const email = e.target.email.value.trim();
      store.updateAccount({ email });
      securityMsg = t("set_email_updated", lang);
      editingEmail = false;
      paintSecurite();
    });

    const passwordForm = container.querySelector("#passwordForm");
    if (passwordForm) passwordForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const password = e.target.password.value;
      store.updateAccount({ password });
      securityMsg = t("set_password_updated", lang);
      editingPassword = false;
      paintSecurite();
    });

    container.querySelector("#logoutBtn").addEventListener("click", () => {
      store.logout();
      window.location.reload();
    });
  }
}
