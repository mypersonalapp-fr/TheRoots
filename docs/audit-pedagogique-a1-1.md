# The Roots — cadrage de refonte pédagogique A1.1

Statut : audit initial ; aucune règle de progression n'est modifiée par ce document.

## Objectif observable
À la fin de A1.1, l'apprenant peut saluer, se présenter, donner son prénom, son nom, son âge et son pays d'origine ; comprendre une présentation courte ; remplir une fiche d'identité simple ; demander de répéter ; produire une présentation personnelle courte sans modèle intégral.

## Périmètre à enseigner
- Lexique prioritaire : hello, hi, good morning, goodbye, please, thank you, sorry, first name, last name, name, age, country, city, from, numbers utiles aux âges, quelques pays/nationalités.
- Grammaire explicite : I/you/he/she ; be (am/is/are) en affirmatif, négatif, interrogatif ; contractions et réponses courtes ; my/your ; What's your name? How old are you? Where are you from?
- Expressions en blocs mémorisés : My name is…, I'm … years old, I'm from…, I live in… (sans enseigner encore toute la conjugaison de live), Could you repeat, please?
- Compréhension : profil très court, dialogue de présentation, formulaire simple.
- Production : présentation personnelle, questions/réponses d'identité, micro-mission authentique.

## À déplacer ou différer (après vérification item par item)
- A1.2 : his/her, démonstratifs, pluriels productifs, descriptions personnelles plus développées.
- A1.3 ou palier où le présent simple est explicitement enseigné : Where do you live?, She lives…, questions avec do/does.
- Description physique ultérieure : height, weight, shoe size, skin colour, beard, moustache, glasses, smile.
- Personnalité ultérieure : shy, confident, friendly, serious.
- Lexique secondaire, non bloquant en A1.1 : nickname, place of birth, hometown, abroad.

## Séquence de travail proposée
1. Saluer et se présenter.
2. Identifier et renseigner les informations personnelles.
3. Construire des phrases avec be.
4. Dire son origine et des informations simples.
5. Demander de répéter et clarifier.
6. Lire et comprendre un profil.
7. Réaliser une mission d'identité sans script intégral.

## Cinq modules transversaux à concevoir
1. Grammar Lab : be, pronoms, questions et négation.
2. Forms & Conjugation : formes et contractions de be.
3. Vocabulary in Context : identité et formules utiles.
4. Comprehension Lab : lecture et écoute de profils.
5. Production & Transfer : formulaire, mini-dialogue et présentation libre.

Ces modules ne sont **pas encore intégrés** au moteur de déverrouillage.

## Évaluation proposée (à piloter, non norme CECRL)
- Vocabulaire : 15 points.
- Grammaire/conjugaison : 20 points.
- Compréhension orale : 15 points.
- Compréhension écrite : 15 points.
- Expression écrite : 15 points.
- Mission pratique : 20 points.
Total : 100 points. Hypothèse de validation : 80/100 avec minima par compétence à définir après tests utilisateurs.

## Règles de qualité avant intégration
- Chaque objectif doit avoir au moins un enseignement, un entraînement et une évaluation.
- Prévoir plusieurs variantes réellement distinctes par famille de question, notamment après échec ; un simple mélange des réponses ne suffit pas.
- Ne jamais bloquer une réponse correcte à cause d'une contraction, apostrophe, capitale ou variante britannique/américaine acceptable.
- Tester les corrections, l'audio, l'accessibilité mobile, les sauvegardes et le déverrouillage avant fusion.
- Garder main intacte jusqu'à revue et validation.

## Fichiers repérés
- `lessons.html` : contenu A1 et logique de leçon.
- `js/data/transversal.js` : modules transversaux existants, surtout B1/B2.
- `js/data/exams.js` : moteur et données d'examens, surtout à partir de B1.
- `README.md` : documentation du prototype.

## Prochain lot technique
Cartographier les objets A1.1 et les fonctions de rendu/notation/déverrouillage, puis préparer une modification ciblée, testable et réversible sur cette branche.
