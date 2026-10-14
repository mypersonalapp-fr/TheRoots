# The Roots — état réel de l'intégration A1.1 (14/10/2026)

Branche de travail : `audit-pedagogique-a1-1-20261013`. `main` n'est pas modifié.

## Routage réel de l'application
`index.html` → `js/app.js` → `js/screens/shell.js` → onglets (`mes-cours.js`, `settings.js`, …).
Les anciennes leçons vivent dans `lessons.html` (page autonome, ~1 Mo), ouverte par `window.location.href`.
Les fichiers `a11-complete.html`, `a11-demo.html`, `a11-competences.html`, `a11-transversale.html`,
`js/a11-drills.js`, `js/a11-adaptive-preview.js` sont des **prototypes isolés** : ils ne sont pas dans le routage.

## Intégré dans le vrai routage (testé en navigateur, jour/nuit)
- `js/screens/lecon-a11.js` + `css/lecon-a11.css` + `js/data/lecon-a11-data.js` : **Introduction A1.1**, **Menu A1.1**, **Vocabulaire** (5 pages), **Grammaire** (5 pages : be, formes courtes/négation, questions, have, questions/possessifs), **Lecture** (4 textes), **Écoute** (6 audios), **Expression** (2 pages parler/écrire : validée si ≥ 3 éléments repérés, ou case « dit à voix haute » ; micro via reconnaissance vocale si disponible) **Exercices** (5 séries, 32 questions corrigées avec rattrapage ; score du premier essai sauvegardé), **Transversale** (7 jours : mots, 3 questions à réussir, expression écrite ≥ 15 caractères ; progression n/7) et **Test de fin de leçon** (6 pages, 40 points : lecture 7,5 + écoute 7,5 + grammaire 10 + expression écrite 7,5 + orale 7,5 ; seuil 32/40 repris de `a11-competences.html` ; 3 versions de texte/audio, 10 questions de grammaire tirées au sort sur 15 ; résultat détaillé, « Revoir mes réponses », historique des essais). Pagination X/Y, « Suivant » bloqué tant que les réponses ne sont pas justes, progression sauvegardée (`the_roots_a11_lesson_v1`).
- Ouverture : Mes cours → anglais → bouton « Leçon A1.1 — Mon identité (nouvelle version) ».
- Personnage : Paramètres → Réglages généraux → Mon personnage pédagogique (9 filles / 9 garçons, vrais PNG transparents 512×512 fournis par Ashley, `assets/img/characters/girl-N.png`, `boy-N.png`). Emma (girl-1) et Lucas (boy-1) ont aussi `*-intro.png` (signe de la main, introduction) et `*-win.png` (bras levés, résultat du test).
  Le choix (`settings.avatarGender`, `settings.avatarIndex`) est sauvegardé et repris dans la leçon (Emma / Lucas).
- Fonds : images d'origine `shell-bg*.jpg` (clair/nuit). Le bouton de test flottant d'`index.html` est masqué sur les leçons.
- Audio : `speechSynthesis` appelé directement dans le clic (Safari iPhone), voix choisie dans Paramètres si définie.

## Pas encore intégré
Les 8 activités du menu A1.1 sont intégrées. Non fait : verrouillage/déverrouillage lié au parcours global, synchronisation avec la progression de `lessons.html`, corrections par IA de l'expression, enregistrements audio natifs, intégration de A1.2 et suivants.

## Limites connues
- Les questions de Lecture et des dialogues d'Écoute (et les textes « Sam », « Anna », « David ») viennent des prototypes ou ont été ajoutées ; le contenu anglais reste à relire.
- L'expression écrite est notée par repérage de formules (regex, 4 éléments) ; l'expression orale du test est une **auto-évaluation** (cases à cocher, ou transcription si la reconnaissance vocale existe). Pas de correction par une personne ou une IA.
- L'audio utilise la synthèse vocale de l'appareil (pas d'enregistrements natifs).
- Les personnages en pied (`*-intro.png`, `*-win.png`) font ≈ 250 px de haut dans la planche d'origine : un peu flous sur écrans très haute définition. À régénérer en 1400 px de haut si possible.
- Seuls Emma et Lucas (n°1) ont une version en pied ; les autres personnages s'affichent en portrait dans l'introduction.
- Pas testé sur un vrai iPhone / Safari (seulement Chromium 390×844).
- Barème du bilan à trancher : 40 points (15/15/10) retenu dans `a11-competences.html`.
