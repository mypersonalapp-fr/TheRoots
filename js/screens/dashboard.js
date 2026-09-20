// The Roots — onglet Accueil : date/heure, progression par langue, citation,
// expression du jour (équivalent idiomatique, pas une traduction littérale),
// question de culture, vidéo du jour par langue.

import { store } from "../data/store.js?v=20260920b";
import { t, langName, formatDate } from "../data/i18n.js?v=20260920b";

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

// Question de culture du jour — un pool avec une question par jour du mois
// (31 questions ci-dessous), choisie selon la date : "new Date().getDate() %
// CULTURE_QUESTIONS_EN.length". Avec exactement 31 questions, chaque jour du
// mois (1 à 31) tombe sur un index différent — donc une vraie question
// différente chaque jour, sans jamais répéter dans le même mois. Avant le
// 20/09, il n'y avait qu'UNE SEULE question ici, donc rien ne pouvait jamais
// changer d'un jour à l'autre — le bug n'était pas un "délai" à régler, c'est
// qu'il n'y avait tout simplement pas d'autres questions dans le pool.
const CULTURE_QUESTIONS_EN = [
  {
    question: "Sais-tu quel est le nom du célèbre marché couvert de Londres, près de Covent Garden ?",
    answer: "Réponse : Covent Garden Market (aussi appelé Apple Market).",
  },
  {
    question: "Combien de temps peut durer un match de cricket \"test-match\" ?",
    answer: "Réponse : jusqu'à 5 jours !",
  },
  {
    question: "Comment s'appelle le garde royal posté devant Buckingham Palace ?",
    answer: "Réponse : The King's Guard (autrefois The Queen's Guard).",
  },
  {
    question: "À quelle heure prend-on traditionnellement l'\"afternoon tea\" au Royaume-Uni ?",
    answer: "Réponse : en général entre 15h et 17h.",
  },
  {
    question: "Quel plat, pourtant d'origine indienne, est souvent considéré comme le plat national britannique ?",
    answer: "Réponse : le chicken tikka masala.",
  },
  {
    question: "\"Big Ben\", est-ce le nom de la tour de l'horloge à Londres ou d'autre chose ?",
    answer: "Réponse : c'est le nom de la grosse cloche à l'intérieur — la tour s'appelle officiellement Elizabeth Tower.",
  },
  {
    question: "Comment les Londoniens surnomment-ils leur métro ?",
    answer: "Réponse : \"The Tube\".",
  },
  {
    question: "De quelle couleur sont les célèbres cabines téléphoniques de Londres ?",
    answer: "Réponse : rouges (le modèle \"K2\", dessiné par Giles Gilbert Scott).",
  },
  {
    question: "Comment appelle-t-on les taxis noirs traditionnels de Londres ?",
    answer: "Réponse : les \"black cabs\".",
  },
  {
    question: "Combien d'étages ont les célèbres bus rouges de Londres ?",
    answer: "Réponse : deux étages — ce sont des \"double-decker buses\".",
  },
  {
    question: "Comment s'appelle le drapeau du Royaume-Uni ?",
    answer: "Réponse : the Union Jack.",
  },
  {
    question: "Sais-tu où se trouve le célèbre cercle de pierres préhistorique de Stonehenge ?",
    answer: "Réponse : dans le comté du Wiltshire, en Angleterre.",
  },
  {
    question: "Comment surnomme-t-on le mystérieux monstre du Loch Ness, en Écosse ?",
    answer: "Réponse : \"Nessie\".",
  },
  {
    question: "Quelle est la résidence officielle du roi/de la reine à Londres ?",
    answer: "Réponse : Buckingham Palace.",
  },
  {
    question: "Quel est le plus grand château habité du monde, résidence de week-end du monarque ?",
    answer: "Réponse : Windsor Castle.",
  },
  {
    question: "Que fête-t-on le 26 décembre au Royaume-Uni ?",
    answer: "Réponse : \"Boxing Day\" — un jour férié, avec traditionnellement les soldes.",
  },
  {
    question: "Que célèbre-t-on le 5 novembre avec des feux d'artifice au Royaume-Uni ?",
    answer: "Réponse : \"Bonfire Night\" (ou \"Guy Fawkes Night\").",
  },
  {
    question: "Que fait-on de spécial pour \"Pancake Day\" (Shrove Tuesday) ?",
    answer: "Réponse : on mange des crêpes, et certaines villes organisent des courses de crêpes dans la rue !",
  },
  {
    question: "Comment s'appelle la plus ancienne compétition de football du monde, jouée en Angleterre ?",
    answer: "Réponse : la FA Cup.",
  },
  {
    question: "Quel célèbre tournoi de tennis se joue chaque année à Londres, avec fraises et crème ?",
    answer: "Réponse : Wimbledon.",
  },
  {
    question: "Comment s'appelle le plat traditionnel britannique de poisson pané avec des frites ?",
    answer: "Réponse : \"fish and chips\", souvent servi enveloppé dans du papier.",
  },
  {
    question: "Que mangent traditionnellement les Britanniques le dimanche midi ?",
    answer: "Réponse : un \"Sunday roast\" — une viande rôtie avec légumes et \"Yorkshire pudding\".",
  },
  {
    question: "Comment s'appelle la grande roue géante installée au bord de la Tamise à Londres ?",
    answer: "Réponse : le London Eye.",
  },
  {
    question: "Quelles deux universités s'affrontent chaque année dans une célèbre course d'aviron sur la Tamise ?",
    answer: "Réponse : Oxford et Cambridge — \"The Boat Race\".",
  },
  {
    question: "Dans quelle ville anglaise est né le célèbre écrivain William Shakespeare ?",
    answer: "Réponse : Stratford-upon-Avon.",
  },
  {
    question: "Quel festival d'arts, l'un des plus grands du monde, a lieu chaque août en Écosse ?",
    answer: "Réponse : l'Edinburgh Festival (Fringe).",
  },
  {
    question: "Comment s'appelle le grand festival de musique classique organisé chaque été par la BBC ?",
    answer: "Réponse : \"The Proms\", avec sa célèbre soirée finale \"Last Night of the Proms\".",
  },
  {
    question: "Que trouve-t-on à l'intérieur d'un \"Christmas cracker\", tiré à deux à table le jour de Noël ?",
    answer: "Réponse : une petite couronne en papier, une blague et un petit cadeau surprise.",
  },
  {
    question: "Comment s'appelle le défilé militaire annuel qui célèbre l'anniversaire officiel du monarque ?",
    answer: "Réponse : \"Trooping the Colour\".",
  },
  {
    question: "De quel côté de la route conduit-on au Royaume-Uni ?",
    answer: "Réponse : à gauche !",
  },
  {
    question: "Pour quoi les Britanniques sont-ils connus, quand il s'agit d'attendre son tour (au bus, au magasin...) ?",
    answer: "Réponse : \"queueing\" — faire la queue proprement et dans l'ordre, une vraie institution culturelle !",
  },
];

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
  // La date/l'heure de l'Accueil suivent la langue APPRISE (choisie une
  // fois à la première connexion — voir choose-language.js), pas la langue
  // de l'INTERFACE (menus) : ça reste en français par défaut tant
  // qu'aucune langue apprise n'a encore été choisie (cas impossible en
  // pratique, app.js pose la question avant d'arriver ici, mais on garde
  // un repli sûr).
  const { date, time } = localizedDateTime(settings.primaryLearningLang || lang);
  const expr = EXPRESSIONS_EN[new Date().getDate() % EXPRESSIONS_EN.length];
  const quote = QUOTES[new Date().getDate() % QUOTES.length];
  const culture = CULTURE_QUESTIONS_EN[new Date().getDate() % CULTURE_QUESTIONS_EN.length];
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
          <div class="dash-culture-text">${culture.question}</div>
          <div class="dash-culture-answer">${culture.answer}</div>
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
