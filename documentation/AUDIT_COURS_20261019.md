# Audit des cours — 19/10/2026 (A1.1 → A2.6)

Outils : `node tools/audit-contenu.mjs` (volumes), `node tools/audit-programme.mjs` (grammaire/vocabulaire/expression par leçon), `tools/valider-lecon.mjs N`, parcours automatique Playwright (test 40/40).

## 1. Complétude et jouabilité
- 19 leçons construites : A1.1–A1.12, A2.0 (passerelle), A2.1–A2.6. A2.7–A2.12 : non construites.
- Parcours automatique complet (menu → test → résultat) : A2.0–A2.6 = 40/40 ; A1.3–A1.6, A1.8–A1.12 = 40/40 ; A1.1, A1.2, A1.7 = 38/40 (artefact du script : questions identiques dans deux textes avec réponses différentes, ou modèle contenant le champ {name} — pas d'erreur côté apprenant).
- Intégrité (3 choix distincts, tables à 4 lignes, pas de doublon) : A2.1–A2.6 OK, tests A1/A2 OK.
- Volumes (questions d'exercices) : A1 = 36 ; A2 = 72–84 (≥ 2× A1 : respecté).
- Tests : A1 = 5 textes + 5 audios + 30 grammaire ; A2 = 8 + 7 + 40 (barème 40 pts, seuil 32 : respecté).
- Images : toutes présentes sauf A2.6 (6 city a26-m1..m6 + describe-a26-waiting/park). Provisoires : A2.4 (6 images approximatives), scene-a25-price (vestes de couleurs différentes).
- « Décris l'image » : présent de A1.8 à A2.6 (2 par leçon).

## 2. Écarts de cohérence trouvés
1. (Corrigé après vérification : A1.1 a bien ses 6 missions « Roots City », jeu par défaut du moteur, images city/m1..m6 présentes. Fausse alerte.)
2. Aucune traduction EN↔FR dans A1/A2 → CORRIGÉ le 19/10 : 2 exercices de traduction (EN→FR et FR→EN, 4 phrases, 4 critères) dans A1.6 → A2.7 (js/data/traduction-a1a2.js), écrits seulement (hors onglet « Parler » et hors tirage du test).
3. Le corps humain n'est enseigné qu'en A2.6 (A1 n'a que « décrire un proche » : adjectifs/visage en A1.1).
4. « Lire un journal » : seulement The Roots Daily A1 (8 numéros) ; aucun Daily A2.
5. Météo vue en A1.11 puis approfondie en A2.7 (prévu) : cohérent, à garder.
6. Ordre des fichiers : A1.10–A1.12 sont nommés a110–a112 (nommage seulement).

## 3. Ce que l'apprenant sait faire (A1 + A2.0–A2.6)
- Se présenter / présenter quelqu'un, famille, amis, adresse, téléphone, date, nombres : OUI (A1.1–A1.3).
- Faire des phrases simples (be/have, présent simple, continu, going to, passé, passé continu, futur will, comparatifs, should/must) : OUI.
- Demander son chemin, voyager, commander, acheter, parler travail/météo, politesse : OUI (A1.4–A1.12).
- Raconter sa journée, le passé, une histoire, ses projets, comparer : OUI (A2.1–A2.5).
- Décrire son corps, symptômes, chez le médecin, pharmacie, conseils : OUI (A2.6).
- Décrire une image : OUI (A1.8 → A2.6).
- Lire un court texte / journal : OUI niveau A (lectures de leçon + Daily A1), pas encore de presse A2.
- Traduire EN→FR / FR→EN : NON (à créer, A2.3 → A2.12).

## 4. Plan
- Section « Traduction » dans chaque leçon à partir d'A2.3 (EN→FR sur texte inventé lié au thème : article, revue, chanson, message ; FR→EN avec 4 critères) ; construite dès A2.7.
- Daily A2.
- Prompt général d'images à la fin des cours (A2.4 à refaire si besoin, A2.6, A2.7–A2.12).
