// The Roots — réglage de la Conversation IA.
//
// Colle ici, entre les guillemets, l'adresse de TON relais Cloudflare
// (cloudflare-worker-gemini.js, à la racine du dépôt), donnée à la fin du
// déploiement — du style "https://the-roots-ia.ton-compte.workers.dev".
// Tant que c'est vide, l'onglet Conversation IA explique simplement que
// l'IA n'est pas encore branchée (rien ne plante).
export const AI_RELAY_URL = "";

// Nombre maximum de conversations par jour (les conversations débloquées
// et non utilisées restent en réserve pour les jours suivants).
export const AI_MAX_PER_DAY = 3;

// Nombre maximum de messages de l'apprenant dans UNE conversation, avant
// le bilan final (garde le coût quasi nul et la séance courte).
export const AI_MAX_TURNS = 12;
