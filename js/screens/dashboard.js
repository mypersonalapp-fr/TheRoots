// The Roots — onglet Accueil : date/heure, progression par langue, citation,
// expression du jour (équivalent idiomatique, pas une traduction littérale),
// question de culture, vidéo du jour par langue.

import { store } from "../data/store.js";
import { t, langName, formatDate } from "../data/i18n.js";

const LOCALE_MAP = { fr: "fr-FR", en: "en-GB", es: "es-ES", pt: "pt-PT" };

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
    byLang: { en: "“Practice makes perfect.”" },
  },
  {
    fr: "« Petit à petit, l'oiseau fait son nid. »",
    byLang: { en: "“Slow and steady wins the race.”" },
  },
  {
    fr: "« Qui cherche trouve. »",
    byLang: { en: "“Seek and you shall find.”" },
  },
];

const CULTURE_QUESTIONS = {
  en: {
    question: "Sais-tu quel est le nom du célèbre marché couvert de Londres, près de Covent Garden ?",
    answer: "Réponse : Covent Garden Market (aussi appelé Apple Market).",
  },
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

function localizedDateTime(lang) {
  const now = new Date();
  const locale = LOCALE_MAP[lang] || "fr-FR";
  const date = new Intl.DateTimeFormat(locale, {
    weekday: "long", day: "numeric", month: "long", year: "numeric",
  }).format(now);
  const time = new Intl.DateTimeFormat(locale, { hour: "2-digit", minute: "2-digit" }).format(now);
  return { date: date.charAt(0).toUpperCase() + date.slice(1), time };
}

export function renderDashboard(container, { onGoToCourses } = {}) {
  const { settings } = store.get();
  const lang = settings.interfaceLang;
  const { date, time } = localizedDateTime(lang);
  const expr = EXPRESSIONS_EN[new Date().getDate() % EXPRESSIONS_EN.length];
  const quote = QUOTES[new Date().getDate() % QUOTES.length];
  const video = pickVideoOfTheDay(VIDEOS_EN);
  const leveledLangs = settings.langs.filter((l) => l.leveled);

  container.innerHTML = `
    <div class="dash-greeting card">${date} · <strong>${time}</strong></div>

    <div class="dash-box">
      <h3>${t("dash_progress_title", lang)}</h3>
      <div class="dash-progress-row">
        ${leveledLangs.length === 0 ? `
          <button class="card dash-progress-card clickable" data-goto-courses="1">
            <div>${t("dash_level_test_todo", lang)}</div>
            <div style="font-size:12px;color:var(--accent);margin-top:4px;font-weight:700">${t("dash_choose_lang", lang)}</div>
          </button>
        ` : leveledLangs.map((l) => {
          const variant = l.variants?.find((v) => v.code === l.selectedVariant);
          const label = variant ? `${l.label} (${variant.label})` : l.label;
          return `
          <button class="card dash-progress-card clickable" data-goto-courses="1">
            <div>${label}</div>
            <div style="font-size:12px;color:var(--ink-soft)">${t("dash_level", lang, { level: l.level })}</div>
            <div class="dash-progress-bar"><div class="dash-progress-fill" style="width:${Math.round((l.progress||0)*100)}%"></div></div>
            <div style="font-size:12px;margin-top:4px">${Math.round((l.progress||0)*100)}%</div>
          </button>
        `;
        }).join("")}

        <div class="card dash-culture-card">
          <div class="dash-culture-label">${t("dash_culture_label", lang)}</div>
          <div class="dash-culture-text">${CULTURE_QUESTIONS.en.question}</div>
          <div class="dash-culture-answer">${CULTURE_QUESTIONS.en.answer}</div>
        </div>
      </div>
    </div>

    <div class="dash-box">
      <h3>${t("dash_expression_title", lang)}</h3>
      <div class="card">
        <div style="font-weight:700">${expr.en}</div>
        <div style="color:var(--accent);margin-top:4px">${expr.fr_equiv}</div>
        <div style="font-size:13px;color:var(--ink-soft);margin-top:6px">${expr.note}</div>
      </div>
    </div>

    <div class="dash-box">
      <h3>${t("dash_video_title", lang)}</h3>
      <div class="card card-media dash-video-card">
        ${video ? `
          <a class="dash-video-thumb" href="https://www.youtube.com/watch?v=${video.id}" target="_blank" rel="noopener">
            <img src="https://img.youtube.com/vi/${video.id}/hqdefault.jpg" alt="${video.title}" loading="lazy"/>
            <span class="dash-video-play">▶</span>
          </a>
          <div class="dash-video-info">
            <div class="dash-video-title">${video.title}</div>
            <div class="dash-video-cta">${t("dash_video_cta", lang)}</div>
          </div>
        ` : `<div style="text-align:center;color:var(--ink-soft);padding:20px">${t("dash_video_placeholder", lang)}</div>`}
      </div>
    </div>

    <div class="dash-box">
      <h3>${t("dash_quote_title", lang)}</h3>
      ${leveledLangs.filter((l) => quote.byLang[l.code]).length > 0 ? leveledLangs.filter((l) => quote.byLang[l.code]).map((l) => `
        <div class="card dash-quote-card">
          <div class="dash-quote">${quote.byLang[l.code]}</div>
          <div class="dash-quote-equiv-label">${t("dash_quote_equiv", lang, { lang: l.label, fr: quote.fr })}</div>
        </div>
      `).join("") : `
        <div class="card dash-quote-card">
          <div class="dash-quote">${quote.fr}</div>
        </div>
      `}
    </div>
  `;

  container.querySelectorAll('[data-goto-courses]').forEach((btn) => {
    btn.addEventListener("click", () => onGoToCourses && onGoToCourses());
  });
}
