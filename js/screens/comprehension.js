// The Roots — Compréhension orale et écrite : espace d'immersion libre,
// indépendant de la progression par palier. Maquette visuelle (lot suivant :
// brancher de vrais contenus curatés par niveau — vidéos, audio, textes).

import { store } from "../data/store.js";
import { t } from "../data/i18n.js";

const LEVELS = ["A1", "A2", "B1", "B2", "C1", "C2"];

export function renderComprehension(container) {
  const { settings } = store.get();
  const lang = settings.interfaceLang;
  container.innerHTML = `
    <div class="dash-greeting" style="padding:4px 0 10px">
      ${t("comp_intro", lang)}
    </div>

    <div class="level-chip-row" id="compLevels">
      ${LEVELS.map((l, i) => `<button class="level-chip${i === 0 ? " active" : ""}" data-level="${l}">${l}</button>`).join("")}
    </div>

    <div class="video-refresh-badge">
      <span class="video-refresh-icon">🔄</span>
      <span>${t("comp_badge", lang)}</span>
    </div>

    <div class="card-3d" style="margin-bottom:14px">
      <div class="immersion-card" style="margin-bottom:0">
        <div class="immersion-icon">🎧</div>
        <div>
          <div class="immersion-title">${t("comp_oral_title", lang)}</div>
          <div class="immersion-note">${t("comp_oral_desc", lang)}</div>
        </div>
      </div>
      <div class="card-media" style="margin-top:14px;aspect-ratio:16/9;display:flex;align-items:center;justify-content:center;color:var(--ink-soft);font-size:13px;text-shadow:none">
        ${t("comp_video_mock", lang)}
      </div>
      <button class="btn btn-ghost" style="margin-top:12px;width:100%">${t("comp_summary_btn", lang)}</button>
    </div>

    <div class="card-3d">
      <div class="immersion-card" style="margin-bottom:0">
        <div class="immersion-icon">📖</div>
        <div>
          <div class="immersion-title">${t("comp_written_title", lang)}</div>
          <div class="immersion-note">${t("comp_written_desc", lang)}</div>
        </div>
      </div>
      <div class="lt-passage" style="margin-top:14px">
        ${t("comp_text_mock", lang)}
      </div>
      <button class="btn btn-ghost" style="width:100%">${t("comp_summary_btn", lang)}</button>
    </div>
  `;

  container.querySelector("#compLevels").addEventListener("click", (e) => {
    const chip = e.target.closest(".level-chip");
    if (!chip) return;
    container.querySelectorAll("#compLevels .level-chip").forEach(c => c.classList.toggle("active", c === chip));
  });
}
