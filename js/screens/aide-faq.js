// The Roots — "Aide & FAQ", en deux onglets (demande d'Ashley, 01/10) :
//  - AIDE : à quoi sert chaque partie de l'appli (carrés → explications) ;
//  - QUESTIONS FRÉQUENTES : les questions qu'un(e) apprenant(e) se pose au
//    quotidien (carrés par thème → questions/réponses).
// Une barre de recherche filtre l'onglet affiché. Contenu en français quelle
// que soit la langue de l'interface (il décrit le fonctionnement de l'appli).
import { store } from "../data/store.js?v=20260930a";

const AIDE = [
  { id: "accueil", e: "🏠", n: "Accueil", d: "Ta page de départ", c: 1, items: [
    { q: "À quoi sert l'Accueil ?", a: "C'est ta page de départ. Tant que le test de niveau n'est pas fait, tu y trouves le test à passer. Ensuite : ta mission du jour, « J'ai 5 minutes », la question culture, l'expression, la citation et la vidéo." },
    { q: "Les petites cartes changent-elles ?", a: "Oui. L'expression et la citation changent tous les 3 jours, la question culture et la vidéo changent régulièrement." },
  ] },
  { id: "menu", e: "☰", n: "Le menu", d: "Pour aller partout", c: 2, items: [
    { q: "Comment ouvrir le menu ?", a: "Touche l'icône en haut à gauche, ou glisse depuis le bord gauche de l'écran." },
    { q: "Comment est-il rangé ?", a: "En 4 parties. Apprendre : Mes arbres, Mes cours, Compréhension, Expression, Conversation. Ressources : Dictionnaire, Traduction, Bibliothèque. Explorer : My World. Réglages : Paramètres et Aide & FAQ." },
  ] },
  { id: "arbres", e: "🌳", n: "Mes arbres", d: "Ton niveau en image", c: 6, items: [
    { q: "À quoi servent les arbres ?", a: "Une plante par langue apprise, qui grandit avec ton niveau réel : graine (test à faire), pousse (A1), jeune arbre (A2), arbuste (B1), arbre (B2), grand arbre (C1), arbre centenaire (C2)." },
    { q: "Que se passe-t-il si je touche un arbre ?", a: "Tu arrives sur le test de niveau s'il reste à faire, sinon sur la suite de tes leçons." },
  ] },
  { id: "cours", e: "📚", n: "Mes cours", d: "Ton parcours", c: 3, items: [
    { q: "Comment est organisé le parcours ?", a: "Chaque niveau (A1, A2, B1, B2…) est découpé en paliers (A1.1, A1.2…). Chaque palier a ses leçons et se termine par un contrôle noté. Une fois validé, le palier suivant s'ouvre." },
    { q: "Qu'y a-t-il dans une leçon ?", a: "Quand tu touches une case, tu vois d'abord le plan de la leçon : vocabulaire, jeux, grammaire, conjugaison, compréhension, expression, contrôle. Tu peux choisir de commencer par l'ordre du cours, par parler d'abord, par les règles ou par le jeu." },
    { q: "Où voir ce qui m'attend ?", a: "Le bouton « Voir le programme » montre le détail de chaque palier à l'avance : vocabulaire, grammaire, objectif." },
  ] },
  { id: "compr", e: "🎧", n: "Compréhension", d: "Lire et écouter", c: 4, items: [
    { q: "Lecture (compréhension écrite)", a: "Choisis ta langue et ton niveau, puis une « Série » de textes. Tu lis, tu réponds aux questions, et l'appli corrige ta réponse." },
    { q: "Écoute (compréhension orale)", a: "Des vidéos à regarder en A1 et A2, et des dialogues interactifs sur des sujets du quotidien en B1 et B2 (anglais). Tu écoutes, tu choisis tes réponses, puis tu vois les expressions utiles." },
    { q: "Est-ce que ça compte pour mes notes ?", a: "Oui, ces exercices remplissent tes jauges de compréhension écrite et orale. Ils n'ont pas de contrôle obligatoire." },
  ] },
  { id: "expr", e: "✍️", n: "Expression", d: "Écrire et parler", c: 5, items: [
    { q: "Expression écrite", a: "Tu reçois un message ou un e-mail et tu écris ta réponse. L'appli corrige l'orthographe et la grammaire, puis vérifie que tu as bien traité les points attendus." },
    { q: "Expression orale", a: "Un appel est lu à voix haute, tu réponds au micro. L'appli vérifie ensuite ce qu'elle a compris de ta réponse. Autorise le micro quand ton téléphone te le demande." },
  ] },
  { id: "conv", e: "💬", n: "Conversation", d: "Parler avec l'IA", c: 2, items: [
    { q: "Comment ça marche ?", a: "Chaque leçon réussie te donne un crédit de conversation (refaire la même leçon n'en redonne pas). Les crédits se cumulent, avec 3 conversations maximum par jour." },
  ] },
  { id: "dico", e: "🔤", n: "Dico & Traduction", d: "Chercher un mot", c: 3, items: [
    { q: "Dictionnaire", a: "Cherche un mot ou une expression et retrouve son sens." },
    { q: "Traduction", a: "Traduis un mot ou une phrase entre le français et la langue que tu apprends." },
  ] },
  { id: "biblio", e: "📖", n: "Bibliothèque", d: "12 livres conseillés", c: 5, items: [
    { q: "À quoi sert la Bibliothèque ?", a: "Une sélection de 12 livres en anglais pour les niveaux A1 et A2 : jeunesse, aventure, policier, classiques. Touche un livre pour voir sa fiche et le marquer comme lu. Les niveaux sont indicatifs : cherche de préférence une édition simplifiée." },
  ] },
  { id: "world", e: "🌍", n: "My World", d: "La partie voyage", c: 6, items: [
    { q: "Qu'est-ce que My World ?", a: "Un globe lumineux que tu fais tourner du doigt. Chaque point est un pays où l'on parle l'une de tes langues : touche-le pour ouvrir sa fiche. Tu peux passer du jour à la nuit avec l'interrupteur ☀️ / 🌙." },
  ] },
  { id: "five", e: "⏱️", n: "J'ai 5 minutes", d: "Petite activité", c: 1, items: [
    { q: "Quand l'utiliser ?", a: "Les jours sans grande leçon : une petite activité (erreurs à revoir, grammaire express, conversation ou surprise) pour garder le rythme." },
  ] },
  { id: "params", e: "⚙️", n: "Paramètres", d: "Réglages", c: 4, items: [
    { q: "Que puis-je régler ?", a: "Le thème clair ou sombre, la sécurité (Face ID / Touch ID, rester connecté(e)) et ton compte." },
  ] },
];

const FAQ = [
  { id: "niveau", e: "🎯", n: "Niveau & test", d: "Où j'en suis", c: 1, items: [
    { q: "Comment fonctionne le test de niveau ?", a: "Il se lance depuis « Mes cours » ou « Mes arbres », en touchant la langue pas encore testée. Il détermine ton niveau de départ (A1, A2, B1…). Ce « niveau d'entrée » est gardé pour toujours : tu peux ainsi te comparer dans le temps." },
    { q: "Puis-je repasser le test de niveau ?", a: "Pas encore directement depuis les Paramètres, cette fonction arrive. En attendant, ton niveau n'est pas figé : il évolue avec tes leçons et tes contrôles." },
    { q: "Mon niveau peut-il changer ?", a: "Oui. Il monte palier après palier, à chaque contrôle validé." },
  ] },
  { id: "notes", e: "📝", n: "Notes & jauges", d: "Comment c'est noté", c: 2, items: [
    { q: "Comment suis-je noté(e) ?", a: "Chaque palier se termine par un contrôle noté sur 100. Sous 70, le palier n'est pas validé. De 70 à 79, il est validé avec des renforts proposés. À partir de 80, il est validé, avec des rappels ponctuels jusqu'à 92." },
    { q: "À quoi correspondent mes jauges ?", a: "Une jauge par compétence : compréhension orale, compréhension écrite, expression orale, expression écrite, grammaire, vocabulaire, prononciation. Elles se remplissent avec tes leçons, tes contrôles et les espaces Compréhension et Expression." },
    { q: "Pourquoi une jauge est-elle vide ?", a: "Elle reste vide tant qu'il n'y a pas assez de données pour être fiable. Fais quelques exercices de cette compétence." },
  ] },
  { id: "recom", e: "🔁", n: "Recommencer", d: "Repartir à zéro", c: 3, items: [
    { q: "Puis-je recommencer depuis le début ?", a: "Oui. Dans « Mes leçons », touche « ↻ Recommencer… ». Tu choisis entre recommencer une seule leçon, ou tout (leçons et test de positionnement). Rien n'est effacé avant ta confirmation." },
    { q: "Que se passe-t-il si je rate un contrôle ?", a: "Sous 70/100, le palier n'est pas validé : tu retournes aux leçons du palier pendant 7 jours avant de retenter le contrôle." },
    { q: "Une leçon est verrouillée, pourquoi ?", a: "Les leçons s'ouvrent dans l'ordre : il faut avoir fini la précédente. Le contrôle de fin de palier ouvre le palier suivant." },
  ] },
  { id: "cours", e: "📚", n: "Cours & langues", d: "Mon parcours", c: 4, items: [
    { q: "Mes cours, Compréhension, Expression : quelle différence ?", a: "« Mes cours » est un parcours structuré, palier par palier, avec un contrôle à la fin. « Compréhension » et « Expression » sont des espaces libres, sans obligation ni contrôle, pour t'entraîner à ton niveau." },
    { q: "Puis-je apprendre plusieurs langues ?", a: "Oui : anglais, espagnol, portugais. Chacune a son niveau, sa progression et son test." },
    { q: "Puis-je changer ma langue principale ?", a: "Elle se choisit une seule fois, à la première connexion, et sert à l'état de l'Accueil. Les autres langues restent accessibles." },
  ] },
  { id: "world", e: "🌍", n: "My World", d: "Le globe", c: 6, items: [
    { q: "Comment mettre à jour My World ?", a: "Le contenu de My World vient avec l'appli et se met à jour quand une nouvelle version est installée. Ferme complètement l'appli puis rouvre-la pour voir les nouveautés." },
    { q: "Le globe ne s'affiche pas", a: "Il a besoin d'internet pour charger la carte. Vérifie ta connexion, puis rouvre My World." },
  ] },
  { id: "conv", e: "💬", n: "Conversation", d: "Crédits IA", c: 5, items: [
    { q: "Comment gagner des crédits de conversation ?", a: "Chaque leçon réussie en donne un. Refaire la même leçon n'en redonne pas. Tu peux utiliser jusqu'à 3 conversations par jour." },
  ] },
  { id: "lire", e: "📖", n: "Lectures", d: "Livres", c: 3, items: [
    { q: "Comment choisir un livre ?", a: "Dans la Bibliothèque, choisis ton niveau (A1 ou A2) puis touche un livre. Cherche si possible une édition simplifiée (« graded reader »). Marque-le « lu » quand tu l'as fini." },
  ] },
  { id: "compte", e: "🔐", n: "Compte", d: "Sécurité, thème", c: 4, items: [
    { q: "Comment activer Face ID / Touch ID ?", a: "Dans Paramètres > Sécurité, en bas de la fiche « Face ID ». L'appli demande alors ton visage ou ton empreinte au lieu du mot de passe. Tu peux le désactiver au même endroit." },
    { q: "C'est quoi « Rester connecté(e) sans mot de passe » ?", a: "Un réglage indépendant de Face ID : l'appli ne redemande pas ton mot de passe pendant 30 jours, puis une reconnexion normale est demandée." },
    { q: "Comment passer en mode sombre ou clair ?", a: "Dans Paramètres, bouton du thème. Le choix s'applique partout, y compris dans les leçons." },
  ] },
];

function norm(x) {
  return String(x).toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");
}

export function renderAideFaq(container) {
  store.get();
  let tab = "aide";
  let sel = "";
  let query = "";
  container.innerHTML = `
    <div class="dash-box aide-box">
      <div class="aide-tabs" role="tablist">
        <button type="button" class="aide-tab on" data-tab="aide">Aide</button>
        <button type="button" class="aide-tab" data-tab="faq">Questions fréquentes</button>
      </div>
      <p id="aide-intro" class="aide-intro"></p>
      <input id="aide-search" class="aide-search" type="search" autocomplete="off">
      <div id="aide-grid" class="aide-grid"></div>
      <h3 id="aide-title" class="aide-title"></h3>
      <div id="aide-list" class="faq-list"></div>
    </div>`;
  const $ = (s) => container.querySelector(s);
  function groups() { return tab === "aide" ? AIDE : FAQ; }
  function refresh() {
    const gs = groups();
    $("#aide-intro").textContent = tab === "aide"
      ? "À quoi sert chaque partie de l'application. Touche un carré."
      : "Les questions que l'on se pose le plus souvent. Touche un carré.";
    $("#aide-search").placeholder = tab === "aide" ? "🔎 Chercher une rubrique…" : "🔎 Chercher : Face ID, notes, test…";
    $("#aide-grid").innerHTML = gs.map((g) => `<button type="button" class="aide-sq aide-c${g.c}${g.id === sel ? " on" : ""}" data-g="${g.id}"><span class="aide-e">${g.e}</span><b>${g.n}</b><small>${g.d}</small></button>`).join("");
    const q = norm(query.trim());
    let rows = [];
    gs.forEach((g) => { if (q || !sel || g.id === sel) g.items.forEach((i) => rows.push({ g, i })); });
    if (q) rows = rows.filter((r) => norm(r.i.q + " " + r.i.a + " " + r.g.n).indexOf(q) !== -1);
    const g0 = gs.filter((g) => g.id === sel)[0];
    $("#aide-title").textContent = q ? "Résultats (" + rows.length + ")" : g0 ? g0.e + " " + g0.n : "";
    const open = sel && rows.length <= 3;
    $("#aide-list").innerHTML = !q && !sel ? "" : rows.length
      ? rows.map((r) => `<details class="faq-item"${open ? " open" : ""}><summary class="faq-item-q">${r.i.q}</summary><div class="faq-item-a">${r.i.a}</div></details>`).join("")
      : '<p class="aide-empty">Rien trouvé. Essaie un autre mot.</p>';
    container.querySelectorAll(".aide-tab").forEach((b) => b.classList.toggle("on", b.dataset.tab === tab));
  }
  container.addEventListener("click", (e) => {
    const tb = e.target.closest(".aide-tab");
    if (tb) { tab = tb.dataset.tab; sel = ""; query = ""; $("#aide-search").value = ""; refresh(); return; }
    const sq = e.target.closest(".aide-sq");
    if (sq) { sel = sel === sq.dataset.g ? "" : sq.dataset.g; refresh(); }
  });
  $("#aide-search").addEventListener("input", (e) => { query = e.target.value; refresh(); });
  refresh();
}
