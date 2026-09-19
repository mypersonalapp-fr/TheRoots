// The Roots — Compréhension orale (Anglais, niveau A1).
//
// Les 4 vidéos fournies directement par Ashley (liens vérifiés par elle —
// voir claude/themes-videos-a2.md dans le projet Claude). Claude n'a pas
// regardé ces vidéos (pas de lecture vidéo possible côté Claude) : le champ
// "transcript" reste donc vide pour l'instant ("à compléter"), ce qui
// désactive juste la correction du résumé écrit tant qu'il n'est pas
// rempli — la vidéo, elle, fonctionne déjà normalement. Ashley peut
// compléter "transcript" plus tard (elle ou une prochaine session) pour
// activer la comparaison résumé écrit / résumé réel.
//
// videoId = identifiant YouTube extrait du lien fourni, utilisé pour le
// lecteur intégré (https://www.youtube.com/embed/<videoId>).

export const COMPREHENSION_ORALE_EN = [
  { id: 1, title: "Vidéo A1 — 1", videoId: "Gzq3dSBHs_w", transcript: "" },
  { id: 2, title: "Vidéo A1 — 2", videoId: "sMkzwmMs0jM", transcript: "" },
  { id: 3, title: "Vidéo A1 — 3", videoId: "ypW3RqOp6rU", transcript: "" },
  { id: 4, title: "Vidéo A1 — 4", videoId: "Exyvfd1AZdg", transcript: "" },
];
