// The Roots — Traduction multi-langue : outil ponctuel de traduction.
// Branché sur MyMemory (api.mymemory.translated.net), un dictionnaire de
// traduction libre d'utilisation, gratuit et sans clé — appelé directement
// depuis le téléphone (pas de backend). Limite connue : ce service rend une
// traduction "neutre", sans distinguer fiablement le registre formel/informel
// (ex. tu/vous en français) — voir la note affichée sous le résultat.

const LANGS = [
  { label: "Français", code: "fr" },
  { label: "Anglais (UK)", code: "en-GB" },
  { label: "Anglais (US)", code: "en-US" },
  { label: "Espagnol", code: "es" },
  { label: "Portugais", code: "pt-PT" },
];

async function translateWith(text, fromCode, toCode) {
  const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=${fromCode}|${toCode}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error("network");
  const data = await res.json();
  const translated = data?.responseData?.translatedText;
  if (!translated) throw new Error("empty");
  return translated;
}

export function renderTraduction(container) {
  container.innerHTML = `
    <div class="dash-greeting" style="padding:4px 0 10px">
      Traduis un mot ou une phrase à la volée, dans la langue de ton choix.
    </div>

    <div class="card-3d">
      <div class="translate-box">
        <div class="translate-lang-row">
          <select class="translate-lang-select" id="langFrom">
            ${LANGS.map((l, i) => `<option value="${l.code}"${i === 0 ? " selected" : ""}>${l.label}</option>`).join("")}
          </select>
          <button class="translate-swap" id="langSwap" aria-label="Inverser les langues">⇄</button>
          <select class="translate-lang-select" id="langTo">
            ${LANGS.map((l, i) => `<option value="${l.code}"${i === 1 ? " selected" : ""}>${l.label}</option>`).join("")}
          </select>
        </div>

        <textarea class="translate-area" id="translateInput" placeholder="Tape un mot ou une phrase…"></textarea>

        <button class="btn btn-primary" id="translateBtn" style="width:100%">Traduire</button>

        <div class="translate-output" id="translateOutput">La traduction apparaîtra ici.</div>
        <div class="translate-hint">Dictionnaire libre d'utilisation (MyMemory) — traduction automatique à titre indicatif ; les nuances de politesse (tutoiement/vouvoiement, formel/informel) ne sont pas garanties.</div>
      </div>
    </div>
  `;

  const fromSel = container.querySelector("#langFrom");
  const toSel = container.querySelector("#langTo");
  const input = container.querySelector("#translateInput");
  const output = container.querySelector("#translateOutput");
  const btn = container.querySelector("#translateBtn");

  container.querySelector("#langSwap").addEventListener("click", () => {
    const tmp = fromSel.value; fromSel.value = toSel.value; toSel.value = tmp;
  });

  btn.addEventListener("click", async () => {
    const text = input.value.trim();
    if (!text) { output.textContent = "Tape d'abord un mot ou une phrase."; return; }
    output.textContent = "Traduction en cours…";
    btn.disabled = true;
    try {
      const translated = await translateWith(text, fromSel.value, toSel.value);
      output.textContent = translated;
    } catch (e) {
      output.textContent = "Traduction indisponible pour le moment (vérifie ta connexion internet et réessaie).";
    } finally {
      btn.disabled = false;
    }
  });
}
