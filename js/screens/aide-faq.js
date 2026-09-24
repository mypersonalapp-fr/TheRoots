// The Roots — "Aide & FAQ" (nouveau, validé sur maquette le 23/09). Deux
// parties : "comment naviguer" et "questions fréquentes". La FAQ était
// volontairement vide au début ("pour l'instant il n'y a pas besoin de
// questions, on va les créer plus tard avec les réponses") — remplie le
// 24/09 sur demande explicite d'Ashley ("Créer des questions auquel les
// apprentis vont se poser s'il ne comprenne pas les notes. Mes test. Les
// cours ect et tu apporte une réponse.").
//
// Comme le reste du contenu pédagogique/informatif de l'appli (programme,
// leçons), ces questions/réponses restent en français quelle que soit la
// langue de l'interface — elles décrivent le fonctionnement de l'appli,
// elles ne sont pas à traduire (même logique que programme-a1-en.js etc.).
// Affichées en accordéon (<details>/<summary>) : replié par défaut pour ne
// pas surcharger l'écran vu le nombre de questions, mais à la différence
// des petites cartes de l'Accueil (qu'Ashley voulait TOUJOURS visibles),
// une FAQ est justement l'endroit où replier par défaut est l'usage
// attendu — chaque question s'ouvre individuellement au clic.
import { store } from "../data/store.js?v=20260924j";
import { t } from "../data/i18n.js?v=20260924j";

const FAQ_ITEMS = [
  {
    q: "Comment fonctionne le test de niveau ?",
    a: "Le test de niveau se lance depuis « Mes cours » en touchant la langue pas encore testée. Il détermine ton niveau CECRL de départ (A1, A2, B1...). Ce résultat devient ton « niveau d'entrée » : il reste gardé pour toujours, même si ton niveau actuel évolue ensuite avec tes leçons — c'est ce qui te permet de te comparer dans le temps (voir ton livret dans « Mes cours »).",
  },
  {
    q: "Je peux repasser le test de niveau si je ne suis pas d'accord avec le résultat ?",
    a: "Pas encore depuis Paramètres pour l'instant — cette fonctionnalité arrive. En attendant, ton niveau actuel n'est de toute façon pas figé : il évolue avec tes leçons et tes contrôles, palier après palier, même après le test initial.",
  },
  {
    q: "À quoi correspondent mes notes et mes jauges (compréhension, expression...) ?",
    a: "Chaque compétence a sa propre jauge : compréhension orale (co), compréhension écrite (ce), expression orale (eo), expression écrite (ee), grammaire (gr), vocabulaire (vo), prononciation (pr). Elles se remplissent au fur et à mesure de tes leçons, contrôles, et des espaces Compréhension/Expression — une jauge reste vide tant qu'il n'y a pas encore assez de données pour être fiable.",
  },
  {
    q: "Que représente « Mes arbres » ?",
    a: "Une plante par langue apprise, qui grandit avec ton niveau réel : graine (test à faire), pousse (A1), jeune arbre (A2), arbuste (B1), arbre (B2), grand arbre (C1), arbre centenaire (C2). Toucher un arbre t'emmène directement vers le test de niveau (s'il reste à faire) ou vers la suite de tes leçons.",
  },
  {
    q: "Comment progresser dans « Mes cours » ?",
    a: "Chaque niveau (A1, A2, B1, B2...) est découpé en paliers (ex. A1.1, A1.2...). Un palier se termine toujours par un contrôle noté ; une fois validé, le palier suivant se débloque. Le détail d'un palier (vocabulaire, grammaire, objectif) est consultable à l'avance depuis « Voir le programme ».",
  },
  {
    q: "Que se passe-t-il si je rate un contrôle de fin de palier ?",
    a: "En dessous de 70/100, le palier n'est pas validé : tu es renvoyé(e) vers les leçons du palier pendant 7 jours avant de pouvoir retenter le contrôle. Entre 70 et 79, le palier est validé mais des renforts te sont proposés. Au-dessus, le palier est validé normalement (avec des rappels ponctuels si le score est entre 80 et 92).",
  },
  {
    q: "Quelle est la différence entre « Mes cours » et les espaces « Compréhension »/« Expression » du menu ?",
    a: "« Mes cours » suit un parcours structuré, palier par palier, avec un contrôle à la fin de chacun. « Compréhension » et « Expression » (dans le menu) sont des espaces libres et indépendants : ils te proposent du contenu à ton niveau pour garder le contact avec la langue en dehors du parcours, sans obligation ni contrôle.",
  },
  {
    q: "C'est quoi la Bibliothèque ?",
    a: "Une future liste de livres à lire, proposés selon ton niveau (A1, A2...). Le contenu précis (quels livres, comment y accéder) est encore en cours de préparation — cette section affiche pour l'instant un message d'attente.",
  },
  {
    q: "Comment activer ou désactiver Face ID / Touch ID ?",
    a: "Depuis Paramètres > Sécurité, en bas de la fiche « Face ID ». Une fois activé, l'appli demande ton visage/empreinte au lieu du mot de passe à chaque vraie réouverture. Tu peux le désactiver à tout moment depuis le même endroit.",
  },
  {
    q: "C'est quoi « Rester connecté(e) sans mot de passe » ?",
    a: "Un réglage dans Paramètres > Sécurité, indépendant de Face ID : une fois activé, l'appli ne redemande plus ton mot de passe à la réouverture pendant 30 jours. Passé ce délai, une reconnexion normale est de nouveau demandée automatiquement.",
  },
  {
    q: "Comment fonctionne la Conversation (avec l'IA) ?",
    a: "Chaque leçon réussie te donne un crédit de conversation (refaire la même leçon n'en redonne pas). Ces crédits se cumulent et sont utilisables depuis le menu, avec une limite de 3 conversations utilisées par jour.",
  },
  {
    q: "Je peux changer la langue que j'apprends en priorité ?",
    a: "La langue apprise principale se choisit une seule fois, à la toute première connexion. Elle sert notamment à déterminer l'état de l'Accueil. Tu peux tout de même apprendre plusieurs langues en parallèle (anglais, espagnol, portugais) — chacune a son propre niveau, sa propre progression et son propre test.",
  },
];

function faqAccordionHtml() {
  return FAQ_ITEMS.map((item) => `
    <details class="faq-item">
      <summary class="faq-item-q">${item.q}</summary>
      <div class="faq-item-a">${item.a}</div>
    </details>
  `).join("");
}

export function renderAideFaq(container) {
  const { settings } = store.get();
  const lang = settings.interfaceLang;
  container.innerHTML = `
    <div class="dash-box">
      <h3>${t("aide_nav_title", lang)}</h3>
      <p style="font-size:12.5px;color:var(--ink-soft);margin:0 0 12px">${t("aide_nav_intro", lang)}</p>

      <div class="card" style="margin-bottom:10px">
        <div style="font-weight:800;font-size:13.5px">${t("aide_nav_accueil_title", lang)}</div>
        <p style="font-size:13px;color:var(--ink-soft);margin:6px 0 0;line-height:1.5">${t("aide_nav_accueil_desc", lang)}</p>
      </div>
      <div class="card" style="margin-bottom:10px">
        <div style="font-weight:800;font-size:13.5px">${t("aide_nav_menu_title", lang)}</div>
        <p style="font-size:13px;color:var(--ink-soft);margin:6px 0 0;line-height:1.5">${t("aide_nav_menu_desc", lang)}</p>
      </div>
      <div class="card" style="margin-bottom:10px">
        <div style="font-weight:800;font-size:13.5px">${t("aide_nav_arbres_title", lang)}</div>
        <p style="font-size:13px;color:var(--ink-soft);margin:6px 0 0;line-height:1.5">${t("aide_nav_arbres_desc", lang)}</p>
      </div>
      <div class="card">
        <div style="font-weight:800;font-size:13.5px">${t("aide_nav_five_title", lang)}</div>
        <p style="font-size:13px;color:var(--ink-soft);margin:6px 0 0;line-height:1.5">${t("aide_nav_five_desc", lang)}</p>
      </div>
    </div>

    <div class="dash-box">
      <h3>${t("aide_faq_title", lang)}</h3>
      <div class="faq-list">${faqAccordionHtml()}</div>
    </div>
  `;
}
