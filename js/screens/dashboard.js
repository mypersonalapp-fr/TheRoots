// The Roots — onglet Accueil : date/heure, progression par langue, citation,
// expression du jour (équivalent idiomatique, pas une traduction littérale),
// question de culture, vidéo du jour par langue.

import { store } from "../data/store.js";

// Petit pool de contenu "du jour" — à terme, généré/tiré selon la date réelle
// et la langue apprise. Pour l'instant : exemples illustrant le format attendu.
const EXPRESSIONS_EN = [
  {
    en: "It's raining cats and dogs.",
    fr_equiv: "Il pleut des cordes.",
    note: "Pas une traduction mot à mot (« il pleut des chats et des chiens » ne veut rien dire en français) — c'est l'expression française qu'on utilise dans la même situation.",
  },
  {
    en: "Break a leg!",
    fr_equiv: "Merde ! (pour souhaiter bonne chance avant une épreuve)",
    note: "Équivalent du souhait de bonne chance avant une représentation ou un examen.",
  },
];

// Citation du jour : la citation française est accompagnée, pour chaque
// langue apprise, de son équivalent le plus proche dans cette langue — un
// vrai dicton/expression équivalent, pas une traduction mot à mot (même
// esprit que l'« Expression du jour » ci-dessus).
const QUOTES = [
  {
    fr: "« C'est en forgeant qu'on devient forgeron. »",
    byLang: { "en-gb": "“Practice makes perfect.”" },
  },
  {
    fr: "« Petit à petit, l'oiseau fait son nid. »",
    byLang: { "en-gb": "“Slow and steady wins the race.”" },
  },
  {
    fr: "« Qui cherche trouve. »",
    byLang: { "en-gb": "“Seek and you shall find.”" },
  },
];

const CULTURE_QUESTIONS = {
  "en-gb": "Sais-tu quel est le nom du célèbre marché couvert de Londres, près de Covent Garden ?",
};

// Vidéo du jour — playlist qui change tous les 2 jours (pas tous les jours).
// Pour l'instant : une seule vidéo A1 proposée en test (Ashley enverra les
// siennes ensuite) — dès qu'il y en a plusieurs, la rotation choisit
// automatiquement selon la date, tous les 2 jours.
const VIDEOS_EN = [
  {
    id: "Yj4JSvVUHkg",
    title: "Daily English Conversation for Beginners (A1-A2) — Slow English",
    why: "Anglais A1-A2 : conversations du quotidien, débit volontairement lent — bon point de départ pour tester l'encadré. À remplacer par tes propres vidéos.",
  },
];

function pickVideoOfTheDay(list) {
  if (!list.length) return null;
  const dayIndex = Math.floor(Date.now() / (1000 * 60 * 60 * 24));
  const rotationIndex = Math.floor(dayIndex / 2); // change tous les 2 jours
  return list[rotationIndex % list.length];
}

function frenchDateTime() {
  const now = new Date();
  const date = new Intl.DateTimeFormat("fr-FR", {
    weekday: "long", day: "numeric", month: "long", year: "numeric",
  }).format(now);
  const time = new Intl.DateTimeFormat("fr-FR", { hour: "2-digit", minute: "2-digit" }).format(now);
  return { date: date.charAt(0).toUpperCase() + date.slice(1), time };
}

export function renderDashboard(container) {
  const { settings } = store.get();
  const { date, time } = frenchDateTime();
  const expr = EXPRESSIONS_EN[new Date().getDate() % EXPRESSIONS_EN.length];
  const quote = QUOTES[new Date().getDate() % QUOTES.length];
  const video = pickVideoOfTheDay(VIDEOS_EN);

  container.innerHTML = `
    <div class="dash-greeting card">${date} · <strong>${time}</strong></div>

    <div class="dash-box">
      <h3>Ma progression</h3>
      <div class="dash-progress-row">
        ${settings.langs.map(l => l.leveled ? `
          <div class="card dash-progress-card">
            <div>${l.label}</div>
            <div style="font-size:12px;color:var(--ink-soft)">Niveau ${l.level}</div>
            <div class="dash-progress-bar"><div class="dash-progress-fill" style="width:${Math.round((l.progress||0)*100)}%"></div></div>
            <div style="font-size:12px;margin-top:4px">${Math.round((l.progress||0)*100)}%</div>
          </div>
        ` : `
          <div class="card dash-progress-card">
            <div>${l.label}</div>
            <div style="font-size:12px;color:var(--accent);margin-top:4px;font-weight:700">Test de niveau à faire → onglet « Mes cours »</div>
          </div>
        `).join("")}
      </div>
    </div>

    <div class="dash-box">
      <h3>Expression du jour</h3>
      <div class="card">
        <div style="font-weight:700">${expr.en}</div>
        <div style="color:var(--accent);margin-top:4px">${expr.fr_equiv}</div>
        <div style="font-size:13px;color:var(--ink-soft);margin-top:6px">${expr.note}</div>
      </div>
    </div>

    <div class="dash-box">
      <h3>Question culture</h3>
      <div class="card">${CULTURE_QUESTIONS["en-gb"]}</div>
    </div>

    <div class="dash-box">
      <h3>Vidéo du jour — Anglais</h3>
      <div class="card card-media" style="padding:0">
        ${video ? `
          <div style="position:relative;padding-top:56.25%">
            <iframe src="https://www.youtube-nocookie.com/embed/${video.id}" title="${video.title}"
              style="position:absolute;inset:0;width:100%;height:100%;border:0"
              allow="accelerometer; encrypted-media; picture-in-picture" allowfullscreen loading="lazy"></iframe>
          </div>
          <div style="padding:12px 14px">
            <div style="font-weight:700;font-size:13px">${video.title}</div>
            <div style="font-size:12px;color:var(--ink-soft);margin-top:4px">${video.why}</div>
          </div>
        ` : `<div style="text-align:center;color:var(--ink-soft);padding:20px">🎬 Emplacement vidéo (à intégrer)</div>`}
      </div>
    </div>

    <div class="dash-box">
      <h3>Citation du jour</h3>
      <div class="card" style="text-align:center">
        <div class="dash-quote" style="padding:4px 4px 0">${quote.fr}</div>
        ${settings.langs.filter((l) => l.leveled && quote.byLang[l.code]).map((l) => `
          <div style="font-size:13px;color:var(--accent);font-weight:700;margin-top:8px">${quote.byLang[l.code]}</div>
          <div style="font-size:11px;color:var(--ink-soft)">${l.label} — équivalent le plus proche, pas une traduction mot à mot</div>
        `).join("")}
      </div>
    </div>
  `;
}
