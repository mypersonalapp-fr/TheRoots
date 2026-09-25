// The Roots — Programme du niveau A1 (Anglais), palier par palier.
//
// Contenu défini par The Roots (voir claude/cahier-des-charges-the-roots-v1.md
// dans le projet Claude) — ce fichier ne fait que structurer ce contenu déjà
// rédigé pour l'affichage dans l'appli (écran "Voir le programme", ouvert
// depuis Mes cours). Comme le reste du contenu pédagogique (leçons, test de
// niveau), ce texte reste en français quelle que soit la langue de
// l'interface : il décrit le programme, il n'est pas lui-même à traduire.
//
// Pour l'espagnol et le portugais, ce même fichier de données n'existe pas
// encore (leurs leçons n'ont pas encore été rédigées) — l'écran programme.js
// affiche alors un message "bientôt disponible" plutôt que de planter.

export const A1_EN_GENERAL_OBJECTIVE =
  "À la fin du niveau A1, l'apprenant doit pouvoir comprendre et utiliser des expressions très courantes et des phrases simples : se présenter, demander, commander, parler de son environnement proche. Chaque palier se termine par un contrôle noté ; une fois validé, on passe au palier suivant.";

export const A1_EN_PALIERS = [
  {
    code: "A1.1", title: "Identity",
    objective: "Donner et demander des informations simples permettant d'identifier une personne et décrire des caractéristiques physiques élémentaires.",
    vocab: ["first name, last name, nickname, age, numbers, date of birth, place of birth", "origin, country, city, nationality, live, residence", "height, weight, shoe size, skin colour, eye colour, main body parts"],
    grammar: ["Pronoms personnels (I, you, he, she, we, they), TO BE et TO HAVE de base, phrases affirmatives", "Questions : What is your name? / How old are you? / Where are you from? / Where do you live?", "Négation", "Possessifs : my, your, his, her", "Démonstratifs : this, that, these, those"],
    conjugation: "Présent — TO BE, TO HAVE, TO DO (affirmatif, négatif, questions, réponses courtes, formes contractées).",
    activities: ["Vocabulaire", "Jeux", "Grammaire", "Jeux", "Conjugaison", "Jeux", "Compréhension orale", "Compréhension écrite", "Expression écrite (courte présentation de soi)", "Expression orale (se présenter)", "Contrôle de niveau", "Bonus : 10 expressions", "Fiche PDF"],
  },
  {
    code: "A1.2", title: "Family",
    objective: "Parler simplement de sa famille proche et lointaine, présenter un membre de sa famille et comprendre une description familiale simple.",
    vocab: ["mother, father, parents, brother, sister, children, son, daughter, husband, wife", "grandmother, grandfather, grandparents, aunt, uncle, cousin, niece, nephew", "young, old, tall, short, kind, funny, married, single"],
    grammar: ["Possessif 's (Tom's sister)", "Pluriels réguliers et child → children", "have got / has got", "Questions : How many brothers/sisters do you have?"],
    conjugation: "Présent — TO HAVE (got), réemploi de TO BE.",
    activities: ["Vocabulaire", "Jeux", "Grammaire", "Jeux", "Conjugaison", "Jeux", "Compréhension orale", "Compréhension écrite", "Expression écrite (présenter sa famille)", "Expression orale (parler de sa famille)", "Contrôle de niveau", "Bonus : 10 expressions", "Fiche PDF"],
  },
  {
    code: "A1.3", title: "Friends / Social Relationships",
    objective: "Parler de ses amis, présenter quelqu'un, décrire simplement une relation et parler d'activités partagées.",
    vocab: ["friend, best friend, neighbour, colleague, classmate, boyfriend, girlfriend, relationship", "This is..., Nice to meet you, Let me introduce...", "play sport, go to the cinema, hang out, chat, meet up, have a coffee"],
    grammar: ["Présent simple pour les habitudes sociales", "Fréquence : always, often, sometimes, never", "Pronoms compléments : me, you, him, her, us, them"],
    conjugation: "Réemploi de TO BE / TO HAVE / présent simple des verbes d'activité (play, go, meet, chat).",
    activities: ["Vocabulaire", "Jeux", "Grammaire", "Jeux", "Conjugaison", "Jeux", "Compréhension orale", "Compréhension écrite", "Expression écrite (présenter un ami)", "Expression orale (présenter un ami)", "Contrôle de niveau", "Bonus : 10 expressions", "Fiche PDF"],
  },
  {
    code: "A1.4", title: "Transport / Directions",
    objective: "Demander son chemin, comprendre une indication simple, expliquer un trajet et utiliser les transports dans une situation quotidienne.",
    vocab: ["bus, train, car, bike, taxi, plane, on foot, underground/subway", "station, stop, street, road, corner, traffic lights, bridge, square", "turn left/right, go straight on, next to, opposite, between, in front of, behind, near, far"],
    grammar: ["Impératif : Turn left, Go straight on, Take the bus", "Prépositions de lieu", "Questions : How do I get to...? Where is the nearest...?"],
    conjugation: "Présent simple + impératif ; to go / to take au présent.",
    activities: ["Vocabulaire", "Jeux", "Grammaire", "Jeux", "Conjugaison", "Jeux", "Compréhension orale", "Compréhension écrite", "Expression écrite (décrire un itinéraire)", "Expression orale (expliquer un trajet)", "Contrôle de niveau", "Bonus : 10 expressions", "Fiche PDF"],
  },
  {
    code: "A1.5", title: "Likes and Preferences",
    objective: "Dire ce que l'on aime ou n'aime pas, exprimer une préférence, demander les goûts d'une autre personne et comprendre ses réponses.",
    vocab: ["like, love, hate, don't mind + reading, cooking, sport, music, travelling, dancing", "prefer, would rather, favourite", "interesting, boring, fun, difficult, easy, great, terrible"],
    grammar: ["Verbe + -ing après un verbe d'opinion", "Questions : Do you like...? What's your favourite...?", "Réponses courtes : Yes, I do / No, I don't"],
    conjugation: "Présent simple ; like / love / hate / prefer + -ing.",
    activities: ["Vocabulaire", "Jeux", "Grammaire", "Jeux", "Conjugaison", "Jeux", "Compréhension orale", "Compréhension écrite", "Expression écrite (fiche de préférences)", "Expression orale (interroger un partenaire)", "Contrôle de niveau", "Bonus : 10 expressions", "Fiche PDF"],
  },
  {
    code: "A1.6", title: "Food and Drinks",
    objective: "Parler simplement de ce qu'il mange et boit, exprimer ses goûts alimentaires, commander et comprendre un menu ou une commande simple.",
    vocab: ["bread, rice, meat, fish, vegetables, fruit, water, coffee, tea, juice", "breakfast, lunch, dinner, some, a lot of, a little, a piece of, a glass of", "Can I have...?, I'd like..., the bill please, a table for two"],
    grammar: ["Dénombrable/indénombrable : some / any", "I'd like vs I want", "Réemploi de like/love/hate + -ing appliqué à la nourriture"],
    conjugation: "Présent simple ; would like introduit de façon fonctionnelle.",
    activities: ["Vocabulaire", "Jeux", "Grammaire", "Jeux", "Conjugaison", "Jeux", "Compréhension orale", "Compréhension écrite", "Expression écrite (liste de courses/repas)", "Expression orale (commander au restaurant)", "Contrôle de niveau", "Bonus : 10 expressions", "Fiche PDF"],
  },
  {
    code: "A1.7", title: "Shopping",
    objective: "Demander un produit, une taille ou un prix, comprendre une réponse simple, choisir un article et effectuer un achat basique.",
    vocab: ["shirt, trousers, shoes, dress, jacket, bag, size, colour", "How much is it?, Can I try it on?, It's too big/small, I'll take it", "prices, currency, pay, cash, card, receipt"],
    grammar: ["Comparatifs : bigger, smaller, cheaper, more expensive", "this/that/these/those appliqué aux objets", "Questions : How much...? Do you have this in...?"],
    conjugation: "Présent simple ; réemploi de to have (Do you have this in blue?).",
    activities: ["Vocabulaire", "Jeux", "Grammaire", "Jeux", "Conjugaison", "Jeux", "Compréhension orale", "Compréhension écrite", "Expression écrite (liste d'achats)", "Expression orale (jeu de rôle achat)", "Contrôle de niveau", "Bonus : 10 expressions", "Fiche PDF"],
  },
  {
    code: "A1.8", title: "Getting Around",
    objective: "Se déplacer dans un environnement connu ou inconnu et communiquer pour trouver son chemin.",
    vocab: ["shop, park, library, hospital, pharmacy, bank, post office, supermarket, gym", "Excuse me, Could you repeat that?, I don't understand, Is it far?, on the left/right", "change trains/buses, get off, get on, miss (the bus), lost, wrong way"],
    grammar: ["Impératif dans des consignes plus longues (First..., then..., after that...)", "Présent continu : I'm looking for..., I'm going to...", "Questions de clarification"],
    conjugation: "Présent simple + présent continu (be + -ing), réemploi de l'impératif.",
    activities: ["Vocabulaire", "Jeux", "Grammaire", "Jeux", "Conjugaison", "Jeux", "Compréhension orale", "Compréhension écrite", "Expression écrite (indications écrites)", "Expression orale (guider un touriste)", "Contrôle de niveau", "Bonus : 10 expressions", "Fiche PDF"],
  },
  {
    code: "A1.9", title: "Travel",
    objective: "Gérer les principales situations linguistiques d'un voyage simple (réservation, aéroport, hôtel).",
    vocab: ["book, ticket, one-way, return, seat, reservation, departure, arrival", "airport, gate, luggage, suitcase, passport, boarding pass, check in", "room, check in/check out, key, reception, breakfast included, Wi-Fi"],
    grammar: ["Futur avec going to", "Réemploi de would like pour réserver poliment", "Questions : What time does the flight leave? / Is breakfast included?"],
    conjugation: "Présent simple, going to + verbe, réemploi de would like.",
    activities: ["Vocabulaire", "Jeux", "Grammaire", "Jeux", "Conjugaison", "Jeux", "Compréhension orale", "Compréhension écrite", "Expression écrite (projet de voyage)", "Expression orale (réception d'hôtel)", "Contrôle de niveau", "Bonus : 10 expressions", "Fiche PDF"],
  },
  {
    code: "A1.10", title: "Work and Study",
    objective: "Dire ce qu'il fait, parler simplement de son travail ou de ses études, décrire une journée type.",
    vocab: ["job, teacher, doctor, engineer, student, office, factory, colleague, boss", "school, university, subject, class, homework, exam, degree", "start/finish work, meeting, break, lesson, timetable"],
    grammar: ["Présent simple pour les routines", "Questions : What do you do? / Where do you work? / What are you studying?", "Prépositions de temps at/on/in"],
    conjugation: "Présent simple, réemploi de to work / to study à toutes les personnes.",
    activities: ["Vocabulaire", "Jeux", "Grammaire", "Jeux", "Conjugaison", "Jeux", "Compréhension orale", "Compréhension écrite", "Expression écrite (décrire son travail/ses études)", "Expression orale (décrire sa journée type)", "Contrôle de niveau", "Bonus : 10 expressions", "Fiche PDF"],
  },
  {
    code: "A1.11", title: "Time and Weather",
    objective: "Dire l'heure, parler d'une date ou d'un moment, décrire simplement la météo et comprendre des informations temporelles courantes.",
    vocab: ["sunny, rainy, cloudy, windy, snowy, hot, cold, warm, degrees", "in the morning, in the afternoon, in the evening, at night, early, late", "yesterday, today, tomorrow, next week, last month"],
    grammar: ["it impersonnel météo : What's the weather like? It's sunny / It's raining", "Réemploi combiné des structures horaires", "Prépositions de temps at / on / in"],
    conjugation: "Présent simple (It rains a lot in April) ; présent continu pour une météo en cours.",
    activities: ["Vocabulaire", "Jeux", "Grammaire", "Jeux", "Conjugaison", "Jeux", "Compréhension orale", "Compréhension écrite", "Expression écrite (météo du jour + projet)", "Expression orale (décrire météo et plans)", "Contrôle de niveau", "Bonus : 10 expressions", "Fiche PDF"],
  },
  {
    code: "A1.12", title: "Social English",
    objective: "Participer à une interaction sociale simple — commencer une conversation, répondre, poser une question, remercier, s'excuser et terminer une interaction. Palier de synthèse de l'ensemble des acquis A1.",
    vocab: ["Hi, Hello, Good morning/afternoon/evening, Goodbye, See you soon, How are you?", "Thank you, You're welcome, Sorry, Excuse me, Could you..., please, Can I...?", "How's it going?, Long time no see, What's new?, Have a good day"],
    grammar: ["Réemploi synthétique de toutes les formes de questions vues en A1", "Réemploi des formules polies (Could you..., Can I...)", "Connecteurs : and, but, so, because"],
    conjugation: "Réemploi complet des acquis A1 (to be, to have, présent simple, présent continu, going to, would like).",
    activities: ["Vocabulaire", "Jeux", "Grammaire", "Jeux", "Conjugaison", "Jeux", "Compréhension orale", "Compréhension écrite", "Expression écrite (message informel)", "Expression orale (conversation complète)", "Grand contrôle de fin de niveau A1", "Bonus : 10 expressions", "Fiche PDF"],
  },
];


// Module d'entrée « Les Fondamentaux » (ajouté au programme le 25/09) : joué AVANT A1.1 dans
// lessons.html (module transversal, leçon -1). Affiché dans « Voir le programme » au-dessus
// des paliers, sans être compté comme un palier.
export const A1_EN_ENTRY_MODULE = {
  code: "A1.0", title: "Les Fondamentaux (bases transversales)",
  objective: "Poser, avant le premier palier, les bases dont tu auras besoin dans tous les paliers A1 : couleurs, nombres, jours, mois, saisons, dates et heure.",
  vocab: ["Les couleurs", "Les nombres (0 à 100 et au-delà)", "Les jours de la semaine, les mois, les saisons", "Dire la date et l'heure"],
  grammar: ["Dire la date en anglais (on the 5th of May / May 5th)", "Dire l'heure (It's half past three / It's 3:30)"],
  activities: ["Vocabulaire", "Jeux", "Prononciation", "Lecture", "Contrôle"],
};
