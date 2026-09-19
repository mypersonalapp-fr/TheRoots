// The Roots — Programme du niveau A2 (Anglais), palier par palier.
//
// Contenu défini par The Roots (voir claude/contenu-paliers-a2-lot1.md dans
// le projet Claude) — ce fichier ne fait que structurer ce contenu déjà
// rédigé pour l'affichage dans l'appli (écran "Voir le programme", ouvert
// depuis Mes cours), exactement comme programme-a1-en.js pour le niveau A1.
// Comme le reste du contenu pédagogique (leçons, test de niveau), ce texte
// reste en français quelle que soit la langue de l'interface : il décrit le
// programme, il n'est pas lui-même à traduire.
//
// A2.0 "Bases transversales A2" (verbes irréguliers, marqueurs temporels,
// connecteurs de récit, formation des questions passé/futur) n'est pas listé
// ici comme un palier à part entière, par cohérence avec A1 : là-bas non plus
// "Les fondamentaux" n'apparaît pas dans A1_EN_PALIERS — ce sont des briques
// transversales avant le premier palier noté, pas un palier en soi. Le
// contenu de A2.0 reste bien présent et jouable dans lessons.html.
//
// Pour l'espagnol et le portugais, ce même fichier de données n'existe pas
// encore (leurs leçons n'ont pas encore été rédigées) — l'écran programme.js
// affiche alors un message "bientôt disponible" plutôt que de planter.

export const A2_EN_GENERAL_OBJECTIVE =
  "À la fin du niveau A2, l'apprenant doit pouvoir comprendre des phrases isolées et des expressions fréquemment utilisées, communiquer lors de tâches simples et habituelles, et décrire avec des moyens simples sa formation, son environnement immédiat et des sujets familiers. Chaque palier reprend des acquis du niveau A1 dans des situations plus complexes, sans jamais repartir de zéro ; chaque palier se termine par un contrôle noté, et le dernier palier sert de grand contrôle de fin de niveau A2.";

export const A2_EN_PALIERS = [
  {
    code: "A2.1", title: "Daily Routine (in depth)",
    objective: "Décrire sa journée en détail, dire à quelle fréquence on fait quelque chose, et distinguer une habitude d'une action ponctuelle — s'appuie sur A1.10 (Work and Study) et A1.11 (Time and Weather).",
    vocab: ["wake up, get dressed, commute, have a break, run errands, relax, go to bed"],
    grammar: [
      "Present Simple : habitude régulière, routine, vérité générale ou horaire fixe — « I walk to work every day. », « The train leaves at 8am. »",
      "Present Continuous : action en train de se dérouler maintenant, ou situation temporaire autour du moment présent — « I'm walking to work right now. », « I'm staying with my sister this week. »",
      "Comment choisir : si on peut dire « d'habitude / normalement » → Present Simple ; si on peut dire « là, maintenant / en ce moment » → Present Continuous.",
    ],
    conjugation: "Present Simple vs Present Continuous — choisir le bon temps selon la circonstance (habitude vs action en cours).",
    activities: ["Vocabulaire", "Jeux", "Grammaire", "Jeux", "Conjugaison", "Jeux", "Compréhension orale", "Compréhension écrite", "Expression écrite (décrire sa routine en détail)", "Expression orale (comparer sa routine de semaine et de week-end)", "Contrôle de niveau", "Bonus : 10 expressions", "Fiche PDF"],
  },
  {
    code: "A2.2", title: "The Past & \"Used To\"",
    objective: "Raconter un souvenir ou un événement passé, dire ce qu'on faisait avant mais plus maintenant, et poser des questions sur le passé de quelqu'un — s'appuie sur A1.9 (Travel) et A1.3 (Friends), fait le pont avec le présent (A2.1).",
    vocab: ["childhood, memory, once, adventure, surprise, journey, not anymore, when I was young"],
    grammar: [
      "Past Simple : action précise et terminée à un moment identifié du passé — « I went to Rome last summer. », « She called me yesterday. »",
      "Used to : habitude ou état vrai dans le passé mais plus vrai aujourd'hui — « I used to play football, but I don't play anymore. », « She used to live in Paris. »",
      "Used to (habitude répétée) vs Past Simple (action unique) : « I used to go swimming every Sunday » vs « I went swimming last Sunday ».",
      "Used to (avant, plus maintenant) vs Present Simple (habitude actuelle, A2.1) : « I used to play football » vs « I play football ».",
    ],
    conjugation: "Past Simple (verbes réguliers en -ed et irréguliers) et Used to.",
    activities: ["Vocabulaire", "Jeux", "Grammaire", "Jeux", "Conjugaison", "Jeux", "Compréhension orale", "Compréhension écrite", "Expression écrite (raconter un souvenir de voyage)", "Expression orale (raconter ce qu'on faisait enfant)", "Contrôle de niveau", "Bonus : 10 expressions", "Fiche PDF"],
  },
  {
    code: "A2.3", title: "While It Was Happening...",
    objective: "Raconter une histoire avec deux actions en même temps, et décrire une interruption — s'appuie sur A2.2.",
    vocab: ["interrupt, suddenly, at that moment, in the middle of, while"],
    grammar: [
      "Past Continuous : action en train de se dérouler à un moment du passé, souvent interrompue par une action plus courte au Past Simple — « I was cooking when the phone rang. »",
      "Deux actions simultanées : « While I was reading, she was watching TV. »",
      "Différence avec Past Simple : Past Simple = action complète, terminée ; Past Continuous = action « en cours », pas encore finie au moment dont on parle.",
    ],
    conjugation: "Past Continuous, en contraste avec le Past Simple déjà vu en A2.2.",
    activities: ["Vocabulaire", "Jeux", "Grammaire", "Jeux", "Conjugaison", "Jeux", "Compréhension orale", "Compréhension écrite", "Expression écrite (raconter une anecdote avec une interruption)", "Expression orale (raconter une histoire à deux actions simultanées)", "Contrôle de niveau", "Bonus : 10 expressions", "Fiche PDF"],
  },
  {
    code: "A2.4", title: "My Plans",
    objective: "Parler de tes projets, faire une prédiction, et réserver quelque chose (hôtel, restaurant, billet) — s'appuie sur A1.9 (Travel) et A1.10 (Work and Study).",
    vocab: ["plan, intend to, book, arrange, look forward to"],
    grammar: [
      "Going to : intention ou projet déjà décidé avant le moment où on parle — « I'm going to visit my parents next week. »",
      "Will : décision prise à l'instant (spontanée) ou prédiction sans preuve concrète — « I'll help you with that. », « I think it will rain tomorrow. »",
      "Present Continuous : projet déjà organisé, avec une date/heure fixée (réservation, rendez-vous) — « I'm meeting the doctor at 3pm. »",
    ],
    conjugation: "Going to / will / Present Continuous pour parler du futur, selon la circonstance.",
    activities: ["Vocabulaire", "Jeux", "Grammaire", "Jeux", "Conjugaison", "Jeux", "Compréhension orale", "Compréhension écrite", "Expression écrite (décrire un projet de voyage ou d'événement)", "Expression orale (faire une réservation par téléphone)", "Contrôle de niveau", "Bonus : 10 expressions", "Fiche PDF"],
  },
  {
    code: "A2.5", title: "Comparing",
    objective: "Comparer deux lieux, objets ou personnes, et justifier une préférence — s'appuie sur A1.5 (Likes and Preferences), en plus argumenté.",
    vocab: ["adjectifs descriptifs : expensive, comfortable, crowded, quiet, modern"],
    grammar: [
      "Comparatif (-er / more) : comparer deux choses/personnes entre elles — « This flat is bigger than that one. »",
      "Superlatif (-est / most) : désigner l'extrême dans un groupe de trois ou plus — « This is the biggest flat in the building. »",
      "As...as : exprimer une égalité entre deux choses — « This flat is as expensive as that one. »",
    ],
    conjugation: "Réemploi du présent ; formation des comparatifs et superlatifs réguliers et irréguliers.",
    activities: ["Vocabulaire", "Jeux", "Grammaire", "Jeux", "Conjugaison", "Jeux", "Compréhension orale", "Compréhension écrite", "Expression écrite (comparer deux appartements ou deux villes)", "Expression orale (justifier une préférence à l'oral)", "Contrôle de niveau", "Bonus : 10 expressions", "Fiche PDF"],
  },
  {
    code: "A2.6", title: "Health and Well-being",
    objective: "Décrire un symptôme, donner et recevoir un conseil, et exprimer une obligation — nouveau champ lexical qui prépare les conseils/obligations utiles dans plusieurs paliers suivants.",
    vocab: ["le corps : head, stomach, back, throat, ear...", "symptômes : headache, fever, sore throat, cough", "chez le médecin : appointment, prescription, pharmacy"],
    grammar: [
      "Should/shouldn't : conseil ou suggestion, pas obligatoire — « You should see a doctor. »",
      "Have to / must : obligation réelle (règle, nécessité, pas de choix) — « You have to take this medicine twice a day. »",
      "Différence clé : should = avis ; have to/must = obligation.",
    ],
    conjugation: "Modaux should / have to / must.",
    activities: ["Vocabulaire", "Jeux", "Grammaire", "Jeux", "Conjugaison", "Jeux", "Compréhension orale", "Compréhension écrite", "Expression écrite (décrire un symptôme par écrit)", "Expression orale (consultation chez le médecin)", "Contrôle de niveau", "Bonus : 10 expressions", "Fiche PDF"],
  },
  {
    code: "A2.7", title: "Weather and Environment",
    objective: "Décrire le temps qu'il fait en détail, faire une prédiction, et réagir à une situation météo avec une condition — s'appuie sur A1.11 (Time and Weather), approfondi.",
    vocab: ["climate, forecast, storm, temperature, season (approfondi), sunny/cloudy/windy (nuances)"],
    grammar: [
      "Will : prédire la météo ou un événement futur, sans condition — « It will rain tomorrow. »",
      "If + présent, ... will + base : conséquence probable liée à une condition — « If it rains, we'll stay home. »",
    ],
    conjugation: "Will (prédiction) et conditionnel simple avec « if ».",
    activities: ["Vocabulaire", "Jeux", "Grammaire", "Jeux", "Conjugaison", "Jeux", "Compréhension orale", "Compréhension écrite", "Expression écrite (rédiger un bulletin météo simplifié)", "Expression orale (réagir à la météo et planifier sa journée)", "Contrôle de niveau", "Bonus : 10 expressions", "Fiche PDF"],
  },
  {
    code: "A2.8", title: "Housing and Neighbourhood",
    objective: "Décrire son logement et son quartier, et comparer deux logements — s'appuie sur A1.4 (Transport/Directions) et A1.7 (Shopping).",
    vocab: ["la maison : kitchen, living room, balcony, bedroom, bathroom", "le quartier : bakery, pharmacy, park, bus stop"],
    grammar: [
      "Some : quantité indéterminée positive, phrase affirmative — « There are some shops nearby. »",
      "Any : phrase négative ou question — « There aren't any shops nearby. », « Are there any shops nearby? »",
      "A lot of : grande quantité, affirmatif ou question — « There are a lot of parks in this area. »",
      "Prépositions de lieu (next to, between, opposite, near) : chacune décrit une position précise par rapport à un repère — « The bakery is next to the pharmacy. » vs « opposite » (en face).",
    ],
    conjugation: "There is/are + some/any/a lot of ; prépositions de lieu.",
    activities: ["Vocabulaire", "Jeux", "Grammaire", "Jeux", "Conjugaison", "Jeux", "Compréhension orale", "Compréhension écrite", "Expression écrite (décrire son logement et son quartier)", "Expression orale (jeu de rôle visite d'appartement)", "Contrôle de niveau", "Bonus : 10 expressions", "Fiche PDF"],
  },
  {
    code: "A2.9", title: "On the Phone",
    objective: "Passer et recevoir un appel, laisser un message, et rapporter ce que quelqu'un a dit — nouveau champ qui prépare les compétences de communication à distance.",
    vocab: ["hang up, call back, leave a message, hold on, wrong number"],
    grammar: [
      "Discours rapporté (reported speech) : rapporter ce que quelqu'un a dit sans le citer mot pour mot — le temps du verbe recule d'un cran (présent → passé).",
      "« I am busy » → « She said that she was busy. »",
      "« I will call you » → « He said that he would call me. »",
    ],
    conjugation: "Discours rapporté simple (reported speech).",
    activities: ["Vocabulaire", "Jeux", "Grammaire", "Jeux", "Conjugaison", "Jeux", "Compréhension orale", "Compréhension écrite", "Expression écrite (rédiger un message téléphonique rapporté)", "Expression orale (jeu de rôle appel professionnel)", "Contrôle de niveau", "Bonus : 10 expressions", "Fiche PDF"],
  },
  {
    code: "A2.10", title: "Going Out and Invitations",
    objective: "Inviter quelqu'un, accepter ou refuser poliment, et proposer une alternative — s'appuie sur A1.6 (Food and Drinks) et A1.3 (Friends).",
    vocab: ["cinema, concert, exhibition, book a table, cancel, reschedule"],
    grammar: [
      "Would like to : souhait poli, plus poli que « want to » — « I would like to invite you to dinner. »",
      "Shall we...? / Why don't we...? : proposer ou suggérer une activité ensemble — « Shall we go to the cinema? », « Why don't we try that new restaurant? »",
    ],
    conjugation: "Would like to / shall we / why don't we — formules d'invitation et de proposition.",
    activities: ["Vocabulaire", "Jeux", "Grammaire", "Jeux", "Conjugaison", "Jeux", "Compréhension orale", "Compréhension écrite", "Expression écrite (écrire une invitation)", "Expression orale (organiser une sortie entre amis)", "Contrôle de niveau", "Bonus : 10 expressions", "Fiche PDF"],
  },
  {
    code: "A2.11", title: "Opinions and Feelings",
    objective: "Donner son avis, le justifier avec « because/so », et exprimer un sentiment — s'appuie sur A1.5 (Likes and Preferences), à un niveau plus nuancé.",
    vocab: ["émotions : disappointed, excited, worried, relieved", "opinions : I think that..., in my opinion..."],
    grammar: [
      "Like/love/hate/enjoy + -ing : goût général, préférence durable — « I enjoy reading in the evening. »",
      "Want/decide/plan + to : intention ou décision précise — « I decided to read that book this week. »",
    ],
    conjugation: "Verbe + gérondif (-ing) ou infinitif (to), selon le sens.",
    activities: ["Vocabulaire", "Jeux", "Grammaire", "Jeux", "Conjugaison", "Jeux", "Compréhension orale", "Compréhension écrite", "Expression écrite (donner son avis sur un film ou un livre)", "Expression orale (débattre gentiment d'une opinion)", "Contrôle de niveau", "Bonus : 10 expressions", "Fiche PDF"],
  },
  {
    code: "A2.12", title: "Travel Mishaps",
    objective: "Gérer un imprévu en voyage, demander de l'aide, et mobiliser l'ensemble des acquis du niveau A2 — s'appuie sur A1.4 (Transport/Directions), A1.8 (Getting Around) et A1.9 (Travel). Palier de synthèse : sert aussi de Grand Contrôle de fin de niveau A2.",
    vocab: ["aéroport, urgences, objets perdus (lost property)", "demander de l'aide : Could you help me...?"],
    grammar: [
      "What if...? : envisager un imprévu ou une hypothèse inquiétante, et demander ce qu'il faut faire — « What if we miss the flight? »",
      "Révision globale : mobilise, selon la situation, tous les temps déjà vus (présent/passé/futur) et les modaux (should/have to) du niveau A2.",
    ],
    conjugation: "Révision de l'ensemble des temps et modaux vus dans le niveau A2.",
    activities: ["Vocabulaire", "Jeux", "Grammaire", "Jeux", "Conjugaison", "Jeux", "Compréhension orale", "Compréhension écrite", "Expression écrite (message informel avancé)", "Expression orale (conversation complète)", "Grand contrôle de fin de niveau A2", "Bonus : 10 expressions", "Fiche PDF"],
  },
];
