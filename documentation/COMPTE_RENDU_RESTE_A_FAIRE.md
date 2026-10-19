# The Roots — Compte rendu : ce qui manque et ce qu'il reste à faire
État au 19/10/2026 · branche de travail `audit-pedagogique-a1-1-20261013` (jamais fusionnée dans `main`)

## 1. Ce qui est fait
- **Leçons construites :** A1.1 → A1.12 et A2.0 → A2.10 (contenu, test de 40 points, validé à 40/40 sur A1.3 et A2.10).
- **Conversation :** au moins 10 conversations par leçon, avec correction à la fin, de A1.1 à A2.10 (≈ 184 conversations ajoutées). Visuel en bulles pleine page.
- **Menu mosaïque :** 12 matières colorées + Exercices, Roots City, Transversale en tuiles normales ; pastille de matière en haut de chaque écran ; majuscule à chaque mot sur les titres, boutons, onglets et tuiles.
- **Jeux :** 8 jeux jouables (Mots mêlés, Spelling Bee, Memory, Speed Match, Bulles, Course de mots, Pendu, Écoute et touche), difficulté A1/A2. Indices ajoutés sur Mots mêlés, Spelling Bee et Pendu.
- **Déjà faits avant :** Traduction EN↔FR, Dictée, livret (deux présentations).

## 2. Ce qui manque
### Images (91 au total) — prompts dans `PROMPTS_IMAGES_MANQUANTES.md`
| Lot | Nombre |
|---|---|
| Scènes de vocabulaire A2.7 → A2.10 | 36 |
| « Décris l'image » A2.6 → A2.10 | 10 |
| Roots City A2.6 → A2.10 (6 par leçon) | 30 |
| À refaire : `scene-a25-price` (deux vestes de couleurs différentes) | 1 |
| Icônes : Conjugaison, Expression écrite, Conversation, Dictée, Traduction, Jeux (manette) | 6 |
| Icônes des 8 jeux (facultatives) | 8 |

Tant qu'une image manque, la leçon fonctionne : la vignette est masquée ou remplacée par un emoji provisoire.

### Leçons non construites
- **A2.11 « Opinions et sentiments »** et **A2.12 « Imprévus en voyage »** : contenu complet, test 40 pts, Traduction, Conversation (≥ 10), situations, expression, export de relecture, liste d'images.

### Matières absentes
- **Conjugaison** : tuile « Bientôt ». Matière à part, contenu neuf, pour A1.1 → A2.10 puis A2.11 / A2.12 (décision d'Ashley, non commencée).
- **Jeux A1/A2 en anglais** : les jeux utilisent encore le français (consignes, indices, réponses). Option A (contenu en anglais) et option B (consignes en anglais) en attente de décision.

## 3. Décisions en attente d'Ashley
1. Jeux : passer en anglais ? A (contenu), B (consignes), A+B à partir de A2 (recommandé), ou rien ?
2. Jeux plus difficiles / plus faciles : d'autres indices à ajouter ?
3. Icônes : manette seule pour la tuile « Jeux », ou une image par jeu ?
4. Dictée et Traduction : emplacement définitif dans le menu.
5. Maquettes des matières restantes : Compréhension orale/écrite, Expression, Traduction, Contrôle.

## 4. À vérifier
- Mode nuit des écrans de Conversation, des Jeux, du nouveau menu (vérifié seulement en maquette et sur A1.3).
- Dialogues A1 avec Formel/Informel dans la correction.
- Audios d'écoute sans séparateur « — » (ajouter des marqueurs).
- Chaque jeu joué jusqu'au bout à la main (testé techniquement, pas par un humain).
- Relecture des textes A2 par un natif (`RELECTURE_NATIF_A2.md`).

## 5. Avant la mise en ligne (rien à faire maintenant)
1. Passer les drapeaux `CREATOR_MODE`, `UNLOCK_COURSES_PREVIEW`, `UNLOCK_ALL_PREVIEW` à `false`.
2. Sauvegarde du dépôt, puis fusion dans `main` **uniquement avec l'autorisation explicite d'Ashley**.
3. Un seul prompt d'images final pour les leçons A2.11 / A2.12 une fois construites.

## 6. Règles permanentes à respecter
- Même présentation, même moteur, même menu dans toutes les leçons (A1 → fin) ; test de 40 points, réussite à 32/40.
- « Décris l'image » dans chaque leçon à partir de A1.8 ; images Pixar 3D, jamais recadrées.
- Une présentation différente par matière ; vocabulaire pur (liste), jamais mélangé à la conversation.
- Aucun grand espace vide. Peu de gras. Majuscule au début de chaque mot sur l'interface.
- Ne rien changer sans demande ; valider avant tout gros changement.
- Ne jamais toucher à `main` sans autorisation et sauvegarde.
