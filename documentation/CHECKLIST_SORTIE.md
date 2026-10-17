# Checklist de sortie — The Roots

À faire dans l'ordre, uniquement avec le feu vert d'Ashley.

1. Sauvegarde : tag git `sauvegarde-avant-sortie-AAAAMMJJ` sur `main` ET sur `audit-pedagogique-a1-1-20261013`.
2. Relecture native : faire lire `documentation/RELECTURE_NATIF_A2.md` (régénérer avec `node tools/export-relecture-a2.mjs`). Corriger, relancer.
3. Drapeaux de développement : `sh tools/release-flags.sh` → `CREATOR_MODE`, `UNLOCK_COURSES_PREVIEW`, `UNLOCK_ALL_PREVIEW` = false.
4. Retester avec les drapeaux à false : réponses obligatoires avant « Suivant », cours verrouillés avant le test de niveau, test de leçon verrouillé après un échec jusqu'à une série de rattrapage.
5. Parcours complet A1.1 → Grand contrôle → A2.0 → dernière leçon construite (Playwright), 0 erreur console, 0 image 404.
6. Fusion dans `main` (jamais avant 1 et 2).

## Règle permanente pour TOUTES les leçons (A1 → C2)
Un contrôle change entièrement à chaque passage : autre texte, autre audio, autres questions de grammaire, autres sujets d'expression écrite et orale.
Chaque nouvelle leçon doit donc fournir au minimum : 3 textes, 3 audios, 30 questions de grammaire, 6 sujets d'expression.
Vérifier après chaque leçon : `python3 tools/verifier-controles.py` (aucune ligne KO).

## Règle des exercices (A2 et au-delà)
Chaque niveau a au moins 2× les questions d'exercices du niveau précédent. A1 ≈ 36 par leçon, donc A2 ≥ 72 (12 séries de 6). Les niveaux suivants : au moins 2× le niveau d'avant (B1 ≥ 144, etc.). Vérifié par `tools/verifier-controles.py`.
Chaque nouvelle leçon passe aussi `node tools/valider-lecon.mjs N` (réponses valides, choix distincts, modèles d'expression conformes à leurs critères).
