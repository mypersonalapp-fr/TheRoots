// The Roots — réglages "créatrice" (pendant la construction de l'appli).
//
// CREATOR_MODE = true : Ashley peut repasser le test de positionnement de
// chaque langue autant de fois qu'elle veut (bouton "Repasser le test" dans
// Mes cours), et chaque nouveau passage remplace aussi le "niveau d'entrée"
// (sinon il resterait figé sur le tout premier essai).
//
// Quand Ashley dit que c'est bon : passer à false → retour à la règle
// normale (un seul test par langue, niveau d'entrée gardé pour toujours).
export const CREATOR_MODE = false;

// UNLOCK_COURSES_PREVIEW = true : OUVRE TEMPORAIREMENT l'accès aux cours (bouton
// « 🔓 Ouvrir les cours ») dans Mes cours, même si le test de niveau de la langue
// n'a pas été passé. Sert uniquement à vérifier l'appli pendant l'installation.
// Quand tout est validé : passer à false → les cours redeviennent verrouillés
// tant que le test de niveau n'est pas fait.
export const UNLOCK_COURSES_PREVIEW = false;

// UNLOCK_ALL_PREVIEW = true : pendant la construction, TOUT est accessible dans la
// leçon A1.1 « Mon identité » : on peut passer à la page suivante sans répondre,
// ouvrir le test de fin sans avoir fait le reste, et le bouton de la leçon est
// visible dans Mes cours même si le test de niveau n'est pas passé.
// Quand tout est validé et officiel : passer à false → les blocages reviennent
// (réponses obligatoires avant « Suivant », cours verrouillés avant le test).
export const UNLOCK_ALL_PREVIEW = false;
