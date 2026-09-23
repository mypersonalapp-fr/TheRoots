// The Roots — onglet Accueil : date/heure, mes arbres (une plante par
// langue), « J'ai 5 minutes » (avec la question culture), mission du jour,
// et 3 petites cartes qui s'ouvrent : expression, vidéo, citation du jour.

import { store } from "../data/store.js?v=20260924b";
import { t } from "../data/i18n.js?v=20260924b";
import { langGrowth, dueMissions } from "../data/progress.js?v=20260924b";
import { aiCredits } from "../data/ai-credits.js?v=20260924b";
import { plantSvg } from "./plant.js?v=20260924b";
import { EXPRESSIONS, QUOTES, VIDEOS, pickDaily, pickEveryTwoDays } from "../data/daily-content.js?v=20260924b";

const LOCALE_MAP = { fr: "fr-FR", en: "en-GB", es: "es-ES", pt: "pt-PT" };

// Expression, citation et vidéo du jour : voir js/data/daily-content.js
// (31 expressions par langue, 31 proverbes, 15 vidéos par langue qui
// changent tous les 2 jours). Avant le 23/09, il n'y avait ici que 2
// expressions, 3 citations et 1 seule vidéo : rien ne pouvait changer.

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

function localizedDateTime(lang) {
  const now = new Date();
  const locale = LOCALE_MAP[lang] || "fr-FR";
  const date = new Intl.DateTimeFormat(locale, {
    weekday: "long", day: "numeric", month: "long", year: "numeric",
  }).format(now);
  const time = new Intl.DateTimeFormat(locale, { hour: "2-digit", minute: "2-digit" }).format(now);
  return { date: date.charAt(0).toUpperCase() + date.slice(1), time };
}

const GROUP_FLAGS = { en: "🇬🇧", es: "🇪🇸", pt: "🇵🇹" };
const VARIANT_FLAGS = { "en-gb": "🇬🇧", "en-us": "🇺🇸", "es-co": "🇨🇴", "es-es": "🇪🇸", "pt-br": "🇧🇷", "pt-pt": "🇵🇹" };
const flagOf = (l) => VARIANT_FLAGS[l.selectedVariant] || GROUP_FLAGS[l.code] || "";

// Accueil (validé sur maquette le 23/09) — volontairement léger :
// 1. mes arbres (une plante par langue, qui grandit avec le niveau) ;
// 2. deux boutons : « J'ai 5 minutes » et « Mission du jour » ;
// 3. expression / vidéo / citation du jour en 3 PETITES cartes qui
//    s'ouvrent quand on les touche.
// La question culture est rangée dans « J'ai 5 minutes ».
export function renderDashboard(container, { onGoToCourses, onGoToTab } = {}) {
  let view = "home";
  paint();

  function paint() {
    container.scrollTop = 0;
    if (view === "five") return paintFive();
    return paintHome();
  }

  function paintHome() {
    const { settings } = store.get();
    const lang = settings.interfaceLang;
    const { date, time } = localizedDateTime(settings.primaryLearningLang || lang);
    const learnLang = EXPRESSIONS[settings.primaryLearningLang] ? settings.primaryLearningLang : "en";
    const learnLabel = (settings.langs.find((l) => l.code === learnLang) || {}).label || "";
    const expr = pickDaily(EXPRESSIONS[learnLang]);
    const quote = pickDaily(QUOTES);
    const video = pickEveryTwoDays(VIDEOS[learnLang] || VIDEOS.en);
    const leveledLangs = settings.langs.filter((l) => l.leveled);
    const quoteLangs = leveledLangs.length ? leveledLangs : settings.langs.filter((l) => l.code === learnLang);
    const due = dueMissions("en");

    const trees = settings.langs.map((l) => {
      const g = langGrowth(l.code);
      const status = g.stage === 0
        ? `${t("stage_0", lang)} · ${t("stage_test", lang)}`
        : `${t("stage_" + g.stage, lang)} · ${g.level}`;
      return `
        <button class="card dash-tree clickable" data-goto-courses="1">
          ${plantSvg(g.stage, { w: 64, h: 78, grow: g.pct / 100 })}
          <div class="dash-tree-lang">${flagOf(l)} ${l.label}</div>
          <div class="dash-tree-status">${status}</div>
          ${g.stage > 0 ? `<div class="dash-progress-bar"><div class="dash-progress-fill" style="width:${g.pct}%"></div></div>` : ""}
        </button>`;
    }).join("");

    container.innerHTML = `
      <div class="dash-date">${date} · <strong>${time}</strong></div>

      <div class="dash-box">
        <h3>${t("dash_trees_title", lang)}</h3>
        <div class="dash-trees">${trees}</div>
      </div>

      <div class="dash-actions">
        <button class="dash-five" id="dashFive">
          <span class="dash-five-icon">⏱️</span>
          <span class="dash-five-title">${t("dash_5min", lang)}</span>
          <span class="dash-five-sub">${t("dash_5min_sub", lang)}</span>
        </button>
        <button class="card dash-mission clickable" id="dashMission">
          <span class="dash-mission-label">${t("dash_mission_label", lang)}</span>
          ${due.length
            ? `<span class="dash-mission-title">${t("dash_mission_min", lang, { title: esc(due[0].title) })}</span>
               <span class="dash-mission-sub">${due.length > 1 ? t("five_errors_sub_n", lang, { n: due.length }) : ""}</span>`
            : `<span class="dash-mission-title">${t("dash_mission_none", lang)}</span>
               <span class="dash-mission-sub">${t("dash_mission_none_sub", lang)}</span>`}
        </button>
      </div>

      <details class="card dash-mini">
        <summary><span class="dash-mini-label">${t("dash_expression_title", lang)} · ${learnLabel}</span><span class="dash-mini-line">${esc(expr.text)}</span></summary>
        <div class="dash-mini-body">
          <div style="color:var(--accent);font-weight:700">${esc(expr.fr)}</div>
          <div style="font-size:13px;color:var(--ink-soft);margin-top:6px">${esc(expr.note)}</div>
        </div>
      </details>

      <details class="card dash-mini">
        <summary><span class="dash-mini-label">${t("dash_video_short", lang)} · ${learnLabel}</span><span class="dash-mini-line">${video ? esc(video.title) : t("dash_video_placeholder", lang)}</span></summary>
        ${video ? `
        <div class="dash-mini-body">
          <a class="dash-video-thumb" href="https://www.youtube.com/watch?v=${video.id}" target="_blank" rel="noopener">
            <img src="https://img.youtube.com/vi/${video.id}/hqdefault.jpg" alt="${esc(video.title)}" loading="lazy"/>
            <span class="dash-video-play">▶</span>
          </a>
          <div class="dash-video-cta" style="margin-top:6px">${t("dash_video_cta", lang)}</div>
        </div>` : ""}
      </details>

      <details class="card dash-mini">
        <summary><span class="dash-mini-label">${t("dash_quote_title", lang)}</span><span class="dash-mini-line">« ${esc(quote.fr)} »</span></summary>
        <div class="dash-mini-body">
          ${quoteLangs.filter((l) => quote.byLang[l.code]).map((l) => `
            <div class="dash-quote-equiv-label"><strong>${l.label} :</strong> “${esc(quote.byLang[l.code])}”</div>
          `).join("")}
        </div>
      </details>
    `;

    container.querySelectorAll("[data-goto-courses]").forEach((btn) => {
      btn.addEventListener("click", () => onGoToCourses && onGoToCourses());
    });
    container.querySelector("#dashFive").addEventListener("click", () => { view = "five"; paint(); });
    container.querySelector("#dashMission").addEventListener("click", () => {
      window.location.href = due.length ? "lessons.html#practice=auto" : "lessons.html";
    });
    // Une seule petite carte ouverte à la fois : l'Accueil reste léger.
    const minis = [...container.querySelectorAll("details.dash-mini")];
    minis.forEach((d) => d.addEventListener("toggle", () => {
      if (d.open) minis.forEach((o) => { if (o !== d) o.open = false; });
    }));
  }

  // --- « J'ai 5 minutes » : 4 activités courtes + la question culture. ---
  function paintFive() {
    const { settings } = store.get();
    const lang = settings.interfaceLang;
    const due = dueMissions("en");
    const credits = aiCredits.available().length;
    const culture = pickDaily(CULTURE_QUESTIONS_EN);
    container.innerHTML = `
      <button class="settings-back" id="fiveBack">${t("five_back", lang)}</button>
      <div class="card five-head">
        <span style="font-size:26px">⏱️</span>
        <div><div class="five-title">${t("five_title", lang)}</div><div class="five-sub">${t("five_sub", lang)}</div></div>
      </div>
      <div class="five-grid">
        <button class="five-tile five-errors" data-act="errors"><span class="five-ic">🔁</span><strong>${t("five_errors", lang)}</strong><span>${due.length ? t("five_errors_sub_n", lang, { n: due.length }) : t("five_errors_sub_0", lang)}</span></button>
        <button class="five-tile five-express" data-act="express"><span class="five-ic">✍️</span><strong>${t("five_express", lang)}</strong><span>${t("five_express_sub", lang)}</span></button>
        <button class="five-tile five-chat" data-act="chat"><span class="five-ic">💬</span><strong>${t("five_chat", lang)}</strong><span>${t("five_chat_sub", lang, { n: credits })}</span></button>
        <button class="five-tile five-surprise" data-act="surprise"><span class="five-ic">✨</span><strong>${t("five_surprise", lang)}</strong><span>${t("five_surprise_sub", lang)}</span></button>
      </div>
      <div class="card dash-culture-card five-culture">
        <div class="dash-culture-label">${t("dash_culture_label", lang)} · 🇬🇧</div>
        <div class="dash-culture-text">${esc(culture.question)}</div>
        <button class="btn btn-ghost five-reveal" id="fiveReveal">${t("five_culture_reveal", lang)}</button>
        <div class="dash-culture-answer" id="fiveAnswer" hidden>${esc(culture.answer)}</div>
      </div>
    `;
    container.querySelector("#fiveBack").addEventListener("click", () => { view = "home"; paint(); });
    container.querySelector("#fiveReveal").addEventListener("click", (e) => {
      e.currentTarget.hidden = true;
      container.querySelector("#fiveAnswer").hidden = false;
    });
    const go = (act) => {
      if (act === "errors") window.location.href = due.length ? "lessons.html#practice=auto" : "lessons.html#practice=mix";
      else if (act === "express") window.location.href = "lessons.html#practice=mix";
      else if (act === "chat") { if (onGoToTab) onGoToTab("conversation"); }
      else if (act === "surprise") {
        const pool = ["express", "chat"];
        if (due.length) pool.push("errors");
        go(pool[Math.floor(Math.random() * pool.length)]);
      }
    };
    container.querySelectorAll(".five-tile").forEach((b) => b.addEventListener("click", () => go(b.dataset.act)));
  }
}

function esc(s) {
  return String(s == null ? "" : s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
}
