# Checklist de sortie — The Roots

À faire dans l'ordre, uniquement avec le feu vert d'Ashley.

1. Sauvegarde : tag git `sauvegarde-avant-sortie-AAAAMMJJ` sur `main` ET sur `audit-pedagogique-a1-1-20261013`.
2. Relecture native : faire lire `documentation/RELECTURE_NATIF_A2.md` (régénérer avec `node tools/export-relecture-a2.mjs`). Corriger, relancer.
3. Drapeaux de développement : `sh tools/release-flags.sh` → `CREATOR_MODE`, `UNLOCK_COURSES_PREVIEW`, `UNLOCK_ALL_PREVIEW` = false.
4. Retester avec les drapeaux à false : réponses obligatoires avant « Suivant », cours verrouillés avant le test de niveau, test de leçon verrouillé après un échec jusqu'à une série de rattrapage.
5. Parcours complet A1.1 → Grand contrôle → A2.0 → dernière leçon construite (Playwright), 0 erreur console, 0 image 404.
6. Fusion dans `main` (jamais avant 1 et 2).
