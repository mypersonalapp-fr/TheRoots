// The Roots — Traduction multi-langue : outil ponctuel de traduction.
// Maquette visuelle non fonctionnelle (décision sur le moteur — dictionnaire
// simple vs traduction libre via un service tiers — encore en suspens).

const LANGS = ["Français", "Anglais (UK)", "Anglais (US)", "Espagnol", "Portugais"];

export function renderTraduction(container) {
  container.innerHTML = `
    <div class="dash-greeting" style="padding:4px 0 10px">
      Traduis un mot ou une phrase à la volée, dans la langue de ton choix.
    </div>

    <div class="card-3d">
      <div class="translate-box">
        <div class="translate-lang-row">
          <select class="translate-lang-select" id="langFrom">
            ${LANGS.map((l, i) => `<option${i === 0 ? " selected" : ""}>${l}</option>`).join("")}
          </select>
          <button class="translate-swap" id="langSwap" aria-label="Inverser les langues">⇄</button>
          <select class="translate-lang-select" id="langTo">
            ${LANGS.map((l, i) => `<option${i === 1 ? " selected" : ""}>${l}</option>`).join("")}
          </select>
        </div>

        <textarea class="translate-area" id="translateInput" placeholder="Tape un mot ou une phrase…"></textarea>

        <div class="translate-output" id="translateOutput">La traduction apparaîtra ici.</div>
        <div class="translate-hint">Maquette — moteur de traduction à brancher (dictionnaire simple ou service de traduction).</div>
      </div>
    </div>
  `;

  container.querySelector("#langSwap").addEventListener("click", () => {
    const from = container.querySelector("#langFrom");
    const to = container.querySelector("#langTo");
    const tmp = from.value; from.value = to.value; to.value = tmp;
  });
}
