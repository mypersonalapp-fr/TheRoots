// The Roots — Programme du niveau B1 (Anglais), palier par palier.
//
// Contenu construit à partir de la proposition détaillée fournie par Ashley
// (structure "The Roots — Parcours complet B1→B2, 24 paliers", elle-même
// enrichie par rapport à une première ébauche générique) le 24/09, restructurée
// ici en 12 paliers B1 (palier 1 à 12 de la proposition) pour respecter la
// convention déjà en place pour A1/A2 (voir programme-a1-en.js /
// programme-a2-en.js) : un fichier de données par niveau, câblé dans
// mes-cours.js via PROGRAMS_BY_LANG.en.B1. Les 12 paliers B2 correspondants
// sont dans programme-b2-en.js.
//
// Contrairement à A1/A2, le B1/B2 introduit des axes supplémentaires propres
// au niveau intermédiaire/avancé (communication détaillée, verbes ciblés,
// collocations, phrasal verbs, "Secret English" — pièges typiques des
// francophones et nuances anglais réel vs anglais scolaire, mission de fin de
// palier). Ces champs sont optionnels et affichés par mes-cours.js seulement
// quand ils sont présents (même principe que "whyHow" pour l'espagnol) : pas
// de risque de plantage si un champ manque sur un palier donné.
//
// Comme le reste du contenu pédagogique, ce texte reste en français quelle
// que soit la langue de l'interface : il décrit le programme, il n'est pas
// lui-même à traduire. Le contenu interactif complet (moteur lessons.html,
// exercices d'écoute/lecture/expression/contrôle) n'est pas encore construit
// pour B1/B2 — cet écran "Voir le programme" est la première étape ; les
// leçons jouables viendront ensuite, palier par palier, comme A1/A2.

export const B1_EN_GENERAL_OBJECTIVE =
  "À la fin du niveau B1, l'apprenant doit pouvoir passer de « Je peux construire une phrase en anglais » à « Je peux comprendre, réfléchir, interagir, m'adapter et m'exprimer en anglais » sur les sujets courants de la vie quotidienne, professionnelle et sociale — c'est l'autonomie fonctionnelle (« I can function in English »). Chaque palier travaille en parallèle la communication, la grammaire, le vocabulaire, les verbes, les collocations, l'écoute, l'expression orale et écrite, la pragmatique (comprendre l'intention et le ton), la culture anglophone et l'anglais de survie (continuer à communiquer même sans connaître un mot). Une transversale spécifique, le « French Interference Lab », corrige en continu les erreurs typiques des francophones (I am agree, I did a mistake, I explain you...). Chaque palier se termine par un contrôle noté sur 40 (compréhension 15, expression 15, grammaire/vocabulaire/verbes 10) ; une fois validé, on passe au palier suivant.";

export const B1_EN_PALIERS = [
  {
    code: "B1.1", title: "My Identity Today",
    objective: "Se présenter de manière développée, parler de sa personnalité et de ses habitudes, expliquer ses goûts, parler de son évolution et comparer son présent avec son passé.",
    communication: "Se présenter de manière développée ; parler de sa personnalité ; parler de ses habitudes ; expliquer ses goûts ; parler de son évolution ; comparer son présent avec son passé.",
    vocab: ["personality, lifestyle, habits, preferences, personal development"],
    grammar: ["Present Simple, Present Continuous, Present Perfect", "Past Simple", "used to / be used to / get used to"],
    verbs: ["become", "change", "feel", "seem", "prefer", "enjoy", "avoid", "matter", "depend"],
    conjugation: "Present Simple, Present Continuous, Present Perfect, Past Simple ; used to vs be used to vs get used to.",
    secretEnglish: "Comprendre pourquoi « I used to… » n'a pas le même sens que « I'm used to… ».",
    mission: "Introduce yourself to someone you have just met and explain three important changes in your life.",
    activities: ["Vocabulaire", "Verbes", "Grammaire", "Compréhension orale", "Compréhension écrite", "Expression écrite", "Expression orale", "Secret English", "Mission", "Contrôle de niveau", "Bonus : Reformulate", "Fiche PDF"],
  },
  {
    code: "B1.2", title: "Tell Me What Happened",
    objective: "Raconter un événement de manière structurée (setting → event → problem → reaction → consequence → ending).",
    communication: "Raconter un événement de manière structurée.",
    vocab: ["events, accidents, memories, experiences"],
    grammar: ["Past Simple, Past Continuous, Past Perfect (narrative tenses)", "when / while / as / by the time"],
    verbs: ["happen", "occur", "realize", "notice", "remember", "forget", "decide", "manage", "fail"],
    conjugation: "Narrative tenses : Past Simple, Past Continuous, Past Perfect.",
    secretEnglish: "Storytelling — structure fixe d'un récit anglais : setting → event → problem → reaction → consequence → ending.",
    mission: "Raconter un événement inattendu en 2 minutes.",
    activities: ["Vocabulaire", "Verbes", "Grammaire", "Compréhension orale", "Compréhension écrite", "Expression écrite (récit)", "Expression orale (récit)", "Secret English", "Mission", "Contrôle de niveau", "Bonus : Reformulate", "Fiche PDF"],
  },
  {
    code: "B1.3", title: "Real Conversations",
    objective: "Réagir, interrompre poliment, demander une précision, montrer son intérêt, reprendre la parole, terminer une conversation.",
    communication: "Réagir ; interrompre ; demander une précision ; montrer son intérêt ; reprendre la parole ; terminer une conversation.",
    vocab: ["conversation, reactions, social interaction", "Really?, No way!, I see., Exactly., You mean…?, What do you mean by…?, I know what you mean., That's a good point."],
    grammar: ["Question forms, indirect questions, question tags"],
    conjugation: "Réemploi des temps déjà vus dans un contexte de conversation naturelle.",
    secretEnglish: "Conversation management — parler ne consiste pas uniquement à produire des phrases : il faut aussi savoir gérer la conversation (tours de parole, relances, clôture).",
    mission: "Tenir une conversation de 3 minutes en utilisant au moins 5 expressions de gestion de conversation.",
    activities: ["Vocabulaire", "Grammaire", "Compréhension orale", "Compréhension écrite", "Expression orale (dialogue)", "Secret English", "Mission", "Contrôle de niveau", "Bonus : Reformulate", "Fiche PDF"],
  },
  {
    code: "B1.4", title: "Everyday English",
    objective: "Gérer des situations quotidiennes imprévues : shopping, restaurant, transports, téléphone, administration, services, logement.",
    communication: "Gérer une situation quotidienne avec un imprévu : expliquer → demander → négocier → conclure.",
    vocab: ["shopping, restaurant, transports, téléphone, administration, services, logement", "Could I…?, Would it be possible…?, Do you happen to…?, I'd like to…, I'm looking for…"],
    grammar: ["Polite requests, modal verbs, questions, offers"],
    conjugation: "Modaux de politesse (could, would) appliqués aux demandes du quotidien.",
    mission: "Une situation réelle avec un problème imprévu (ex. commande incorrecte) : expliquer → demander → négocier → conclure.",
    activities: ["Vocabulaire", "Grammaire", "Compréhension orale", "Compréhension écrite", "Expression orale (jeu de rôle)", "Mission", "Contrôle de niveau", "Bonus : Reformulate", "Fiche PDF"],
  },
  {
    code: "B1.5", title: "Working in English",
    objective: "Parler de son travail, expliquer ses responsabilités, participer à une réunion, demander quelque chose, donner une information, faire un compte rendu.",
    communication: "Parler de son travail ; expliquer ses responsabilités ; participer à une réunion ; demander quelque chose ; donner une information ; faire un compte rendu.",
    vocab: ["workplace, responsibilities, deadlines, meetings, projects, career"],
    grammar: ["Modals : obligation, permission, advice, probability"],
    phrasalVerbs: ["follow up", "set up", "deal with", "look into", "bring up", "wrap up"],
    conjugation: "Modaux de l'entreprise (must, have to, should, might).",
    mission: "Participer à une réunion et proposer une solution à un problème.",
    activities: ["Vocabulaire", "Phrasal verbs", "Grammaire", "Compréhension orale", "Compréhension écrite", "Expression orale (réunion)", "Expression écrite (compte rendu)", "Mission", "Contrôle de niveau", "Fiche PDF"],
  },
  {
    code: "B1.6", title: "Travel Without Panic",
    objective: "Gérer les situations de voyage : aéroport, hôtel, train, location de voiture, bagages, retards, problèmes de réservation.",
    communication: "Gérer un imprévu de voyage du début à la fin.",
    vocab: ["airport, hotel, train, car rental, luggage, delays, booking problems"],
    grammar: ["Future forms : will, going to, present continuous for future", "Introduction aux conditionnels"],
    conjugation: "will / going to / present continuous pour le futur ; premier conditionnel introduit.",
    mission: "Your travel plans have gone wrong. Fix the situation in English.",
    activities: ["Vocabulaire", "Grammaire", "Compréhension orale", "Compréhension écrite", "Expression orale (imprévu de voyage)", "Mission", "Contrôle de niveau", "Fiche PDF"],
  },
  {
    code: "B1.7", title: "Say What You Think",
    objective: "Donner une opinion, expliquer pourquoi, être d'accord, être en désaccord, donner un exemple.",
    communication: "Donner une opinion ; expliquer pourquoi ; être d'accord ; être en désaccord ; donner un exemple.",
    vocab: ["society, technology, education, lifestyle", "I think…, I believe…, From my point of view…, As far as I'm concerned…, I tend to think…"],
    grammar: ["Opinion structures, connectors, comparatives"],
    conjugation: "Réemploi des structures déjà vues pour construire une opinion argumentée.",
    secretEnglish: "Différence entre fact / opinion / assumption / interpretation.",
    mission: "Donner son avis sur un sujet de société en 1 minute, avec un exemple concret.",
    activities: ["Vocabulaire", "Grammaire", "Compréhension écrite", "Expression orale (opinion)", "Secret English", "Mission", "Contrôle de niveau", "Fiche PDF"],
  },
  {
    code: "B1.8", title: "Emotional English",
    objective: "Décrire des émotions avec nuance plutôt qu'avec des mots basiques (happy / sad / angry).",
    communication: "Décrire précisément une émotion et son intensité.",
    vocab: ["Colère : annoyed → irritated → frustrated → angry → furious", "Tristesse : disappointed → upset → miserable → devastated", "Joie : pleased → happy → delighted → thrilled → overjoyed"],
    grammar: ["Adjective + preposition", "Gerunds et infinitifs"],
    conjugation: "Adjectifs graduels + prépositions (annoyed at, frustrated with, delighted by).",
    mission: "Décrire une situation émotionnelle sans utiliser happy / sad / angry / good / bad.",
    activities: ["Vocabulaire (nuances émotionnelles)", "Grammaire", "Compréhension orale", "Expression écrite", "Mission", "Contrôle de niveau", "Fiche PDF"],
  },
  {
    code: "B1.9", title: "Internet & Informal English",
    objective: "Comprendre l'anglais informel écrit (textos, réseaux sociaux) et savoir quand NE PAS l'utiliser.",
    communication: "Comprendre un échange informel écrit et distinguer les registres.",
    vocab: ["gonna, wanna, gotta, kinda, lemme, dunno", "Acronymes : BTW, FYI, IMO, TBH, IDK"],
    secretEnglish: "When NOT to use them — l'objectif est de comprendre le registre informel, pas de transformer l'apprenant en utilisateur permanent de slang.",
    mission: "Repérer 5 formes informelles dans un échange de messages et les reformuler en anglais neutre.",
    activities: ["Vocabulaire informel", "Compréhension écrite (messages)", "Secret English", "Mission", "Contrôle de niveau", "Fiche PDF"],
  },
  {
    code: "B1.10", title: "Problem Solving",
    objective: "Identifier un problème, demander des informations, proposer une solution, comparer des options, décider.",
    communication: "Identifier un problème ; demander des informations ; proposer une solution ; comparer des options ; décider.",
    vocab: ["What if we…?, Another option would be…, We could…, Why don't we…?, The problem is…"],
    conjugation: "Modaux de suggestion (could, should) et structures conditionnelles simples.",
    mission: "Résoudre un problème réel avec plusieurs contraintes, en proposant et en comparant au moins deux solutions.",
    activities: ["Vocabulaire", "Compréhension orale", "Expression orale (résolution de problème)", "Mission", "Contrôle de niveau", "Fiche PDF"],
  },
  {
    code: "B1.11", title: "Stories, Movies & Culture",
    objective: "Comprendre l'humour, l'ironie, le sarcasme, l'exagération, l'understatement et les références culturelles anglophones.",
    communication: "Reconnaître l'humour, l'ironie et le sarcasme dans un contenu anglophone.",
    secretEnglish: "Literal meaning ≠ intended meaning — exemple : « Great. Just great. » L'apprenant doit déterminer si le locuteur est réellement satisfait.",
    mission: "Regarder un extrait au ton ironique et expliquer ce que le locuteur veut vraiment dire.",
    activities: ["Compréhension orale (extrait culturel)", "Secret English", "Mission", "Contrôle de niveau", "Fiche PDF"],
  },
  {
    code: "B1.12", title: "B1 Real-Life Mission",
    objective: "Palier de synthèse : vivre une journée fictive entièrement en anglais en mobilisant tous les acquis du niveau B1 (écouter, lire, répondre, parler, écrire, raconter, résoudre un problème, exprimer une opinion).",
    communication: "Mission finale du niveau B1 : une journée fictive en anglais, du réveil au soir, avec des situations imprévues à gérer une par une.",
    mission: "Vivre une journée fictive en anglais et réussir chaque situation rencontrée : écouter, lire, répondre, parler, écrire, raconter, résoudre un problème, exprimer une opinion.",
    activities: ["Écoute", "Lecture", "Expression orale", "Expression écrite", "Récit", "Résolution de problème", "Opinion", "Grand contrôle de fin de niveau B1 (/40 — compréhension 15, expression 15, grammaire/vocabulaire/verbes 10)", "Fiche PDF"],
  },
];
