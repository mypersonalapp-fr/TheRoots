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

## Mise à jour 2026-10-14 (images ChatGPT intégrées)
- Personnages plein pied Emma/Lucas (intro + win) : détourés/nettoyés (fragments voisins retirés), `assets/img/characters/*-intro|win.png` (hauteur 900 px). Limite : pied droit d'Emma (win) légèrement coupé à l'origine.
- Icônes menu : `assets/img/lesson/ic-*.png`. vocab, reading, listening, speaking, exercises = fournies par ChatGPT (nettoyées). grammar, transversal = redessinées (originales inutilisables : barre/ombre parasites). test (trophée) = absent des fichiers fournis, dessiné par Claude.
- Scènes : `assets/img/lesson/scene-*.jpg` affichées sur la page Salutations (« En situation »).
- Versions `?v=20261014f`.

## Relecture anglais + corrections (2026-10-14, v20261014g)
- Correcteur d'expression : accepte apostrophes iPhone (’), « twenty-two », « I'm 12 », « My name's », « I come from », « I really like », « He's … ».
- Questions ambiguës corrigées : écoute « At work » (locuteur sans genre → « the speaker »), « What is the nationality? » → James, transversale jour 3 (« I am ___ Portugal » acceptait « in » → précisé « origine »).
- Vocabulaire : page « Origine et adresse » renommée, exemple « My city is Paris » → « I live in Paris ».
- Tests Playwright (clair/sombre) : activités, transversale, test 40/40, avatars : 0 erreur JS.

## Personnages en pied (2026-10-14, v20261014h)
- Intégrés : filles 2 à 9 et garçons 2, 3, 5, 7, 9 (`assets/img/characters/{girl|boy}-N-intro.png`, détourés, liseré retiré, damier incrusté supprimé pour 4 d'entre eux). Utilisés aussi à l'écran de résultat.
- En attente (portrait en repli) : garçon 4 (cheveux noirs lisses, sweat rouge), garçon 6 (veste en jean), garçon 8 (cheveux noirs bouclés, peau plus foncée, sweat jaune). Les versions reçues ne correspondaient pas aux portraits (visage/cheveux), ou manquaient.
- Reçus mais non utilisés : garçon sweat vert blond, garçon sweat noir.

- Mise à jour v20261014i : garçons 4, 6, 8 reçus et intégrés. Les 18 personnages ont désormais une version en pied (plus aucun repli portrait nécessaire).

## Aperçu direct (2026-10-14, v20261014j)
- `apercu-a11.html` : ouvre la leçon A1.1 directement, sans connexion ni test de niveau. Options : `?g=girl|boy&i=0..8&t=light|dark`.
- Dans l'app normale, la leçon s'ouvre seulement après connexion + test de niveau, puis Mes cours → Anglais → bouton « Leçon A1.1 — Mon identité (nouvelle version) ».

## Blocages retirés pendant la construction (v20261014k)
- Interrupteur unique : `UNLOCK_ALL_PREVIEW = true` dans `js/data/dev-config.js`.
- Effet : dans la leçon A1.1, « Suivant » n'est jamais bloqué (réponse non obligatoire), le test de fin s'ouvre sans conditions ; le bouton de la leçon apparaît dans Mes cours (anglais) même sans test de niveau.
- À l'officialisation : passer à `false` pour remettre les blocages (réponses obligatoires, test de niveau avant les cours).

## Images allégées (v20261014l)
- Personnages, icônes et scènes convertis en WebP (`assets/img/characters/*.webp`, `assets/img/lesson/*.webp`) : environ 12 Mo → 2 Mo. Les PNG/JPG d'origine sont retirés (historique git conservé).

## Conseil IA facultatif (v20261014m)
- Bouton « 💡 Obtenir un conseil » sous les zones d'écriture (Expression écrite, Transversale, Test). Utilise le relais Cloudflare existant (`AI_RELAY_URL`, mode `feedback`, aucun redéploiement nécessaire).
- Ne compte JAMAIS dans la note (les mots-clés/coches vertes restent la note officielle). Phrase d'information avant l'envoi : le texte est envoyé à Google (clé gratuite : usage possible par Google pour améliorer ses produits).
- Limite : 5 conseils par jour (localStorage). Repli : message simple si pas de réseau/quota.
- À faire avant l'ouverture aux vrais élèves : information parents/mineurs (RGPD), clé payante si besoin.
