# The Roots — état réel de l'intégration A1.1 (14/10/2026)

Branche de travail : `audit-pedagogique-a1-1-20261013`. `main` n'est pas modifié.

## Routage réel de l'application
`index.html` → `js/app.js` → `js/screens/shell.js` → onglets (`mes-cours.js`, `settings.js`, …).
Les anciennes leçons vivent dans `lessons.html` (page autonome, ~1 Mo), ouverte par `window.location.href`.
Les fichiers `a11-complete.html`, `a11-demo.html`, `a11-competences.html`, `a11-transversale.html`,
`js/a11-drills.js`, `js/a11-adaptive-preview.js` sont des **prototypes isolés** : ils ne sont pas dans le routage.

## Intégré dans le vrai routage (testé en navigateur, jour/nuit)
- `js/screens/lecon-a11.js` + `css/lecon-a11.css` + `js/data/lecon-a11-data.js` : **Introduction A1.1**, **Menu A1.1**, **Vocabulaire** (5 pages), **Grammaire** (5 pages : be, formes courtes/négation, questions, have, questions/possessifs), **Lecture** (4 textes), **Écoute** (6 audios), **Expression** (2 pages parler/écrire : validée si ≥ 3 éléments repérés, ou case « dit à voix haute » ; micro via reconnaissance vocale si disponible) et **Exercices** (5 séries, 32 questions corrigées avec rattrapage ; score du premier essai sauvegardé). Pagination X/Y, « Suivant » bloqué tant que les réponses ne sont pas justes, progression sauvegardée (`the_roots_a11_lesson_v1`).
- Ouverture : Mes cours → anglais → bouton « Leçon A1.1 — Mon identité (nouvelle version) ».
- Personnage : Paramètres → Réglages généraux → Mon personnage pédagogique (fille 8 / garçon 9, images `assets/img/characters/`).
  Le choix (`settings.avatarGender`, `settings.avatarIndex`) est sauvegardé et repris dans la leçon (Emma / Lucas).
- Fonds : images d'origine `shell-bg*.jpg` (clair/nuit). Le bouton de test flottant d'`index.html` est masqué sur les leçons.
- Audio : `speechSynthesis` appelé directement dans le clic (Safari iPhone), voix choisie dans Paramètres si définie.

## Pas encore intégré
Transversale (7 jours) et Test de fin de leçon (affichés « bientôt » dans le menu). Contenu existant dans `a11-transversale.html`, `a11-competences.html`.
Le contenu pédagogique de ces parties existe dans les prototypes `a11-*` (voir l'extraction fournie à Ashley).

## Limites connues
- Les questions de Lecture et des dialogues d'Écoute (et les textes « Sam », « Anna », « David ») viennent des prototypes ou ont été ajoutées ; le contenu anglais reste à relire.
- L'expression écrite/orale n'est pas corrigée par une IA : seul le repérage de formules (regex) est fait, sans note de 7,5 pts.
- L'audio utilise la synthèse vocale de l'appareil (pas d'enregistrements natifs).
- Portraits recadrés depuis la maquette 09 (≈ 80 px à l'origine, agrandis à 256 px) : qualité moyenne. À remplacer par de vrais PNG fond transparent.
- La maquette 09 contient 8 filles (le 9e portrait « fille » est un garçon à lunettes) et 9 garçons.
- Pas de personnage plein corps (Emma en pied de la maquette) : l'introduction utilise le portrait choisi.
- Pas testé sur un vrai iPhone / Safari (seulement Chromium 390×844).
- Barème du bilan à trancher : 40 points (15/15/10) retenu dans `a11-competences.html`.
