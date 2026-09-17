// The Roots — Expression écrite et orale : immersion libre, indépendante
// de la progression par palier. Maquette visuelle.

const LEVELS = ["A1", "A2", "B1", "B2", "C1", "C2"];

export function renderExpression(container) {
  container.innerHTML = `
    <div class="dash-greeting" style="padding:4px 0 10px">
      T'entraîner à parler et à écrire à partir de contenus réels, pour t'imprégner de l'accent et de la langue naturelle.
    </div>

    <div class="level-chip-row" id="exprLevels">
      ${LEVELS.map((l, i) => `<button class="level-chip${i === 0 ? " active" : ""}" data-level="${l}">${l}</button>`).join("")}
    </div>

    <div class="card-3d" style="margin-bottom:14px">
      <div class="immersion-card" style="margin-bottom:0">
        <div class="immersion-icon">🗣️</div>
        <div>
          <div class="immersion-title">Expression orale</div>
          <div class="immersion-note">Répète un extrait vidéo phrase par phrase pour t'imprégner de l'accent. Enregistre-toi, réécoute-toi, compare avec le modèle.</div>
        </div>
      </div>
      <div class="card-media" style="margin-top:14px;aspect-ratio:16/9;display:flex;align-items:center;justify-content:center;color:var(--ink-soft);font-size:13px;text-shadow:none">
        ▶️ Extrait vidéo du niveau sélectionné (maquette)
      </div>
      <button class="btn btn-primary" style="margin-top:12px;width:100%">🎙️ S'enregistrer</button>
    </div>

    <div class="card-3d">
      <div class="immersion-card" style="margin-bottom:0">
        <div class="immersion-icon">✍️</div>
        <div>
          <div class="immersion-title">Expression écrite</div>
          <div class="immersion-note">Réécris ce que tu entends (dictée), toujours selon ton niveau. Correction affichée à la fin.</div>
        </div>
      </div>
      <button class="q-audio-btn-lt" style="margin-top:14px">🔊 Écouter l'extrait</button>
      <textarea class="translate-area" placeholder="Écris ici ce que tu entends…" style="min-height:100px"></textarea>
      <button class="btn btn-ghost" style="width:100%;margin-top:10px">Vérifier ma réponse</button>
    </div>
  `;

  container.querySelector("#exprLevels").addEventListener("click", (e) => {
    const chip = e.target.closest(".level-chip");
    if (!chip) return;
    container.querySelectorAll("#exprLevels .level-chip").forEach(c => c.classList.toggle("active", c === chip));
  });
}
