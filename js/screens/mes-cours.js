// The Roots — onglet "Mes cours" : un dossier par langue. On y entre pour
// voir son niveau actuel et ses cours en PDF ; si la langue n'a pas encore
// de niveau, le test de niveau se lance depuis là et les cours restent
// verrouillés tant qu'il n'est pas fait. Une fois le test passé, le score
// obtenu reste gardé pour toujours comme "niveau d'entrée" (distinct du
// "niveau actuel", qui lui peut évoluer avec la progression), pour pouvoir
// se comparer dans le temps.

function frenchDate(iso) {
  if (!iso) return "";
  try {
    return new Intl.DateTimeFormat("fr-FR", { day: "numeric", month: "long", year: "numeric" }).format(new Date(iso));
  } catch (e) { return ""; }
}

import { store } from "../data/store.js";
import { renderLevelTest } from "./level-test.js";

export function renderMesCours(container, shellRoot) {
  let openCode = null; // code de la langue ouverte, ou null = liste

  paint();

  function paint() {
    if (openCode) return paintLangDetail(openCode);
    return paintList();
  }

  function paintList() {
    const { settings } = store.get();
    container.innerHTML = `
      <div class="dash-box">
        <h3>Mes langues</h3>
        ${settings.langs.map((l) => {
          const variant = l.variants?.find((v) => v.code === l.selectedVariant);
          const status = !l.leveled
            ? "Test de niveau à faire"
            : variant ? `Niveau ${l.level} — ${variant.label}` : `Niveau ${l.level} — choisir le cours`;
          return `
          <div class="card mc-lang-card" data-code="${l.code}">
            <div class="mc-lang-top">
              <div>
                <div style="font-weight:800">${l.label}</div>
                <div style="font-size:12px;color:var(--ink-soft)">${status}</div>
              </div>
              <span class="chev">›</span>
            </div>
            ${l.leveled ? `
              <div class="dash-progress-bar" style="margin-top:10px"><div class="dash-progress-fill" style="width:${Math.round((l.progress||0)*100)}%"></div></div>
              <div style="font-size:12px;margin-top:4px;color:var(--ink-soft)">${Math.round((l.progress||0)*100)}%</div>
            ` : ""}
          </div>
        `;
        }).join("")}
      </div>
    `;
    container.querySelectorAll(".mc-lang-card").forEach((cardEl) => {
      cardEl.addEventListener("click", () => { openCode = cardEl.dataset.code; paint(); });
    });
  }

  function paintLangDetail(code) {
    const lang = store.getLang(code);
    if (!lang) { openCode = null; return paint(); }
    const variant = lang.variants?.find((v) => v.code === lang.selectedVariant);
    const needsVariantChoice = lang.leveled && !variant;

    container.innerHTML = `
      <button class="settings-back" id="mcBack">‹ Mes cours</button>
      <div class="dash-box">
        <h3>${lang.label}</h3>
        <div class="card">
          <div style="font-weight:700;font-size:13px;color:var(--ink-soft)">Mon niveau actuel</div>
          ${lang.leveled ? `
            <div style="font-size:22px;font-weight:800;margin-top:4px">${lang.level}</div>
            <div class="dash-progress-bar" style="margin-top:10px"><div class="dash-progress-fill" style="width:${Math.round((lang.progress||0)*100)}%"></div></div>
            <div style="font-size:12px;margin-top:4px">${Math.round((lang.progress||0)*100)}% de la leçon en cours</div>
            ${!needsVariantChoice ? `
              <div style="font-size:12px;color:var(--ink-soft);margin-top:10px">Cours suivi : <strong style="color:var(--ink)">${variant.label}</strong> — <button class="mc-variant-change" id="mcChangeVariant">changer</button></div>
              <button class="btn btn-primary" id="mcContinue" style="width:100%;margin-top:14px">Continuer mes leçons →</button>
            ` : ""}
          ` : `
            <div class="mc-locked-msg">
              <span class="mc-lock-icon">🔒</span>
              <div>
                <div style="font-weight:700;color:var(--accent)">Test de niveau pas encore fait</div>
                <p style="font-size:13px;color:var(--ink-soft);margin:4px 0 0">Tes cours restent verrouillés tant que ce petit test (5-10 min) n'est pas fait — il détermine ton niveau de départ. Un seul test pour ${lang.label.toLowerCase()}, quel que soit l'accent choisi ensuite.</p>
              </div>
            </div>
            <button class="btn btn-primary" id="mcStartTest" style="width:100%;margin-top:12px">Faire le test de niveau →</button>
          `}
        </div>
      </div>

      ${needsVariantChoice ? `
        <div class="dash-box">
          <h3>Quel cours veux-tu suivre ?</h3>
          <div class="card">
            <p style="font-size:13px;color:var(--ink-soft);margin:0 0 10px">Ton niveau est déjà acquis — choisis juste l'accent/variante à suivre dans tes leçons.</p>
            <div style="display:flex;flex-direction:column;gap:10px">
              ${lang.variants.map((v) => `<button class="lt-opt mc-variant-btn" data-variant="${v.code}">${v.label}</button>`).join("")}
            </div>
          </div>
        </div>
      ` : ""}

      ${lang.leveled ? `
        <div class="dash-box">
          <h3>Niveau d'entrée</h3>
          <div class="card">
            <div style="display:flex;align-items:center;gap:10px">
              <span class="cefr-level-badge" style="font-size:15px">${lang.entryLevel || lang.level}</span>
              <div style="font-size:12px;color:var(--ink-soft)">
                Résultat de ton tout premier test${lang.entryDate ? `, passé le ${frenchDate(lang.entryDate)}` : ""}.
              </div>
            </div>
            <p style="font-size:12px;color:var(--ink-soft);margin-top:8px">
              Cette référence ne change jamais, même si ton niveau actuel évolue avec tes leçons —
              elle sert à mesurer ton chemin parcouru dans le temps.
            </p>
          </div>
        </div>
      ` : ""}

      <div class="dash-box">
        <h3>Mes cours en PDF</h3>
        <div class="card" style="color:var(--ink-soft);font-size:13px">
          ${lang.leveled
            ? "Une fiche mémo téléchargeable apparaîtra ici à la fin de chaque leçon."
            : `<span class="mc-lock-icon" style="font-size:14px">🔒</span> Débloqués dès que le test de niveau est fait.`}
        </div>
      </div>
    `;

    container.querySelector("#mcBack").addEventListener("click", () => { openCode = null; paint(); });

    const continueBtn = container.querySelector("#mcContinue");
    if (continueBtn) continueBtn.addEventListener("click", () => { window.location.href = "lessons.html"; });

    const changeBtn = container.querySelector("#mcChangeVariant");
    if (changeBtn) changeBtn.addEventListener("click", () => {
      store.selectVariant(code, null);
      paint();
    });

    container.querySelectorAll(".mc-variant-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        store.selectVariant(code, btn.dataset.variant);
        paint();
      });
    });

    const startBtn = container.querySelector("#mcStartTest");
    if (startBtn) startBtn.addEventListener("click", () => {
      renderLevelTest(shellRoot, {
        langCode: code,
        langLabel: lang.label,
        onDone: () => { window.location.href = "lessons.html"; },
      });
    });
  }
}
