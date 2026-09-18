// The Roots — Expression écrite et orale : immersion libre, indépendante
// de la progression par palier. Maquette visuelle.

import { store } from "../data/store.js";
import { t } from "../data/i18n.js";

const LEVELS = ["A1", "A2", "B1", "B2", "C1", "C2"];

export function renderExpression(container) {
  const { settings } = store.get();
  const lang = settings.interfaceLang;
  container.innerHTML = `
    <div class="dash-greeting" style="padding:4px 0 10px">
      ${t("expr_intro", lang)}
    </div>

    <div class="level-chip-row" id="exprLevels">
      ${LEVELS.map((l, i) => `<button class="level-chip${i === 0 ? " active" : ""}" data-level="${l}">${l}</button>`).join("")}
    </div>

    <div class="card-3d" style="margin-bottom:14px">
      <div class="immersion-card" style="margin-bottom:0">
        <div class="immersion-icon">🗣️</div>
        <div>
          <div class="immersion-title">${t("expr_oral_title", lang)}</div>
          <div class="immersion-note">${t("expr_oral_desc", lang)}</div>
        </div>
      </div>
      <div class="card-media" style="margin-top:14px;aspect-ratio:16/9;display:flex;align-items:center;justify-content:center;color:var(--ink-soft);font-size:13px;text-shadow:none">
        ${t("expr_video_mock", lang)}
      </div>
      <button class="btn btn-primary" style="margin-top:12px;width:100%">${t("expr_record_btn", lang)}</button>
    </div>

    <div class="card-3d">
      <div class="immersion-card" style="margin-bottom:0">
        <div class="immersion-icon">✍️</div>
        <div>
          <div class="immersion-title">${t("expr_written_title", lang)}</div>
          <div class="immersion-note">${t("expr_written_desc", lang)}</div>
        </div>
      </div>
      <button class="q-audio-btn-lt" style="margin-top:14px">${t("expr_listen_btn", lang)}</button>
      <textarea class="translate-area" placeholder="${t("expr_write_placeholder", lang)}" style="min-height:100px"></textarea>
      <button class="btn btn-ghost" style="width:100%;margin-top:10px">${t("expr_check_btn", lang)}</button>
    </div>
  `;

  container.querySelector("#exprLevels").addEventListener("click", (e) => {
    const chip = e.target.closest(".level-chip");
    if (!chip) return;
    container.querySelectorAll("#exprLevels .level-chip").forEach(c => c.classList.toggle("active", c === chip));
  });
}
