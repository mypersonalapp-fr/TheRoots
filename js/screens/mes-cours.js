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
        ${settings.langs.map((l) => `
          <div class="card mc-lang-card" data-code="${l.code}">
            <div class="mc-lang-top">
              <div>
                <div style="font-weight:800">${l.label}</div>
                <div style="font-size:12px;color:var(--ink-soft)">
                  ${l.leveled ? `Niveau ${l.level}` : "Test de niveau à faire"}
                </div>
              </div>
              <span class="chev">›</span>
            </div>
          </div>
        `).join("")}
      </div>
    `;
    container.querySelectorAll(".mc-lang-card").forEach((cardEl) => {
      cardEl.addEventListener("click", () => { openCode = cardEl.dataset.code; paint(); });
    });
  }

  function paintLangDetail(code) {
    const lang = store.getLang(code);
    if (!lang) { openCode = null; return paint(); }

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
            <button class="btn btn-primary" id="mcContinue" style="width:100%;margin-top:14px">Continuer mes leçons →</button>
          ` : `
            <div class="mc-locked-msg">
              <span class="mc-lock-icon">🔒</span>
              <div>
                <div style="font-weight:700;color:var(--accent)">Test de niveau pas encore fait</div>
                <p style="font-size:13px;color:var(--ink-soft);margin:4px 0 0">Tes cours restent verrouillés tant que ce petit test (5-10 min) n'est pas fait — il détermine ton niveau de départ.</p>
              </div>
            </div>
            <button class="btn btn-primary" id="mcStartTest" style="width:100%;margin-top:12px">Faire le test de niveau →</button>
          `}
        </div>
      </div>

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
