// The Roots — chapitre espagnol « Les blocages du francophone » : liste STATIQUE des 8 chapitres,
// affichée dans Mes cours › Espagnol (carte « 🧠 Atelier : les blocages du francophone »).
// Mes cours fait partie de l'appli principale et ne charge pas js/data/lessons-es.js (le gros
// fichier des leçons) : cette petite liste en est le résumé. Chaque chapitre s'ouvre dans le
// moteur de leçons : lessons.html?lang=es#lesson=<n> (accès libre, sans verrou).
// Si un titre change dans les leçons (META.vocabTitle de LESSONS_ES[n]), le changer ici aussi.
// NB : ce fichier est distinct de js/data/atelier-es.js (données de l'écran « Atelier espagnol »).

export const BLOCAGES_ES_TITLE = "🧠 Atelier : les blocages du francophone";

export const BLOCAGES_ES = [
  { n: 301, code: "X1", title: "Ser ou Estar ?" },
  { n: 302, code: "X2", title: "Les verbes pronominaux" },
  { n: 303, code: "X3", title: "Le présent qui bouge" },
  { n: 304, code: "X4", title: "Le passé (1) : he comido ou comí ?" },
  { n: 305, code: "X5", title: "Le passé (2) : imparfait ou indéfini" },
  { n: 306, code: "X6", title: "Le futur et le conditionnel" },
  { n: 307, code: "X7", title: "Por ou Para ?" },
  { n: 308, code: "X8", title: "Les petits mots : lo, le, te lo, se lo, lo que" },
];

// Adresse du chapitre dans le moteur de leçons.
export function blocageHref(n) {
  return `lessons.html?lang=es#lesson=${n}`;
}

// Chapitres terminés (contrôle réussi) : écrits par lessons.html en mode espagnol dans
// localStorage "the_roots_lesson_passes_v1" → { es: { "301": date, … } } (jamais dans l'anglais).
export function blocagesDone() {
  try {
    const all = JSON.parse(localStorage.getItem("the_roots_lesson_passes_v1") || "null") || {};
    return all.es || {};
  } catch (e) {
    return {};
  }
}
