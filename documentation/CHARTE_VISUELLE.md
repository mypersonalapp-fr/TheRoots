# Charte visuelle The Roots (règle valable pour TOUS les niveaux A1→C2 et TOUTES les langues)

Décision d'Ashley (15/10/2026) : un seul type de visuel partout. Référence = leçon A1.1 « Mon identité » telle que vue sur iPhone.

## Interface
- Fond : ciel/paysage de `assets/img/shell-bg*.jpg` (clair et sombre), jamais de fond uni.
- Cartes crème/blanc très arrondies, titres en gras, une ligne d'icône + titre par section.
- Bouton principal orange (Suivant), bouton vert pour valider, bouton de retour crème en haut à gauche, compteur « n/N » + barre de progression ambre.
- Un écran = une tâche. Pas de page de plus de ~1,5 écran : réponses compactes, bouton « Valider » collant en bas, défilement conservé à chaque choix.
- Clair et sombre obligatoires, 390 px de large minimum, aucun défilement horizontal.

## Illustrations
- Film d'animation 3D type Pixar, jamais 2D ni dessin au trait ; enfants de 10-12 ans ; sweats unis, pantalons cargo, baskets ; lumière chaude.
- Personnages fixes : Emma, Lucas et les 18 avatars en pied (`assets/img/characters`).
- Aucun texte dans les images : tout texte est du vrai HTML (lisible, traduisible, corrigeable).
- Images en WebP (≤ 1280 px), fonds propres sans interface, recadrés en bandeau 16:9.
- Un décor par activité (place, comptoir, classe, gymnase, terrasse, festival…), réutilisé d'une langue à l'autre.

## Langue des contenus
- Tout ce que l'élève lit, écoute ou choisit est dans la langue apprise ; les consignes et la navigation sont dans la langue de l'interface (français par défaut).

## Fonctionnement commun
- Entraînement ludique (type Roots City) non noté ; la note officielle reste le test de fin de leçon (40 pts, réussite ≥ 32).
- Son : voix du navigateur pour l'écoute ; micro = confort, jamais bloquant (case « Je l'ai dit à voix haute » en repli).

## Règle permanente (Ashley)
Garder partout la MÊME présentation : toute nouvelle leçon (A1, A2, B1…) utilise le même moteur (js/screens/lecon-a11.js), le même menu (Vocabulaire, Grammaire, Lecture, Écoute, Expression, Dialogue, Écrit, Exercices, Roots City, Test de fin) et les mêmes styles. Ne jamais créer une présentation différente.

## Règle permanente : « Décris l'image » (de A1.8 jusqu'à C2)
À partir de A1.8 et dans TOUTES les leçons suivantes jusqu'à la fin du niveau C2, chaque leçon contient des sujets d'expression « Décris l'image » : une image simple, neutre et descriptible (étudiants, lieux, scènes du quotidien), que l'apprenti décrit à l'écrit ou à l'oral. Même moteur, même présentation (champ `img` d'un sujet d'expression, image dans `assets/img/lesson/describe-<leçon>-<nom>.webp`, 1280 × 720, sans texte lisible).
Progression : A1.8–A1.12 qui / quoi / où (there is, présent continu) · A2 habitudes + maintenant + futur proche + comparaison · B1 opinion, cause, hypothèse · B2 déduction, nuance, argumentation · C1 analyse critique et registre · C2 images abstraites ou symboliques, maîtrise fine.
Chaque nouvelle leçon livre donc ses images à décrire (liste des images demandée avant la construction).
