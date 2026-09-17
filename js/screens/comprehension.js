// The Roots — Compréhension orale et écrite : espace d'immersion libre,
// indépendant de la progression par palier. Maquette visuelle (lot suivant :
// brancher de vrais contenus curatés par niveau — vidéos, audio, textes).

const LEVELS = ["A1", "A2", "B1", "B2", "C1", "C2"];

export function renderComprehension(container) {
  container.innerHTML = `
    <div class="dash-greeting" style="padding:4px 0 10px">
      Immersion libre en anglais : écoute et lecture, à ton rythme, en dehors du déroulé des paliers.
    </div>

    <div class="level-chip-row" id="compLevels">
      ${LEVELS.map((l, i) => `<button class="level-chip${i === 0 ? " active" : ""}" data-level="${l}">${l}</button>`).join("")}
    </div>

    <div class="video-refresh-badge">
      <span class="video-refresh-icon">🔄</span>
      <span>Nouvelles vidéos tous les 30 jours — la sélection tourne pour que le contenu reste frais.</span>
    </div>

    <div class="card-3d" style="margin-bottom:14px">
      <div class="immersion-card" style="margin-bottom:0">
        <div class="immersion-icon">🎧</div>
        <div>
          <div class="immersion-title">Compréhension orale</div>
          <div class="immersion-note">Écoute une vidéo et/ou un audio choisi pour ton niveau. Sous-titres activables, transcription disponible après écoute.</div>
        </div>
      </div>
      <div class="card-media" style="margin-top:14px;aspect-ratio:16/9;display:flex;align-items:center;justify-content:center;color:var(--ink-soft);font-size:13px;text-shadow:none">
        ▶️ Vidéo du niveau sélectionné (maquette)
      </div>
      <button class="btn btn-ghost" style="margin-top:12px;width:100%">Faire un résumé écrit (facultatif)</button>
    </div>

    <div class="card-3d">
      <div class="immersion-card" style="margin-bottom:0">
        <div class="immersion-icon">📖</div>
        <div>
          <div class="immersion-title">Compréhension écrite</div>
          <div class="immersion-note">Lis un texte, un mail ou un extrait de livre calibré pour ton niveau. Vocabulaire nouveau signalé, traduction disponible au clic.</div>
        </div>
      </div>
      <div class="lt-passage" style="margin-top:14px">
        Texte d'exemple pour le niveau sélectionné — s'affichera ici selon le contenu réel choisi (mail, article court, extrait libre de droits).
      </div>
      <button class="btn btn-ghost" style="width:100%">Faire un résumé écrit (facultatif)</button>
    </div>
  `;

  container.querySelector("#compLevels").addEventListener("click", (e) => {
    const chip = e.target.closest(".level-chip");
    if (!chip) return;
    container.querySelectorAll("#compLevels .level-chip").forEach(c => c.classList.toggle("active", c === chip));
  });
}
