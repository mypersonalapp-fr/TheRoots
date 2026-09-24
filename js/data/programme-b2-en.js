// The Roots — Programme du niveau B2 (Anglais), palier par palier.
//
// Suite directe de programme-b1-en.js — voir l'en-tête de ce fichier pour le
// contexte complet (source, convention, champs optionnels). Ces 12 paliers
// correspondent aux paliers 13 à 24 de la proposition B1→B2 fournie par
// Ashley le 24/09.
//
// Comme le reste du contenu pédagogique, ce texte reste en français quelle
// que soit la langue de l'interface. Le contenu interactif complet (moteur
// lessons.html) n'est pas encore construit pour B2 — cet écran "Voir le
// programme" est la première étape.

export const B2_EN_GENERAL_OBJECTIVE =
  "À la fin du niveau B2, l'apprenant doit pouvoir comprendre des contenus complexes, argumenter, nuancer, interagir, s'adapter au contexte et maintenir une conversation même lorsque la situation devient imprévisible — c'est l'indépendance (« I can operate independently in English »). Le niveau B2 approfondit l'argumentation structurée, la nuance et la certitude, la maîtrise du registre (casual/neutral/polite/formal), les collocations naturelles, la prononciation réelle (connected speech), l'anglais diplomatique, l'humour et l'implicite, l'anglais numérique, la pensée directe en anglais (sans traduction mentale) et la mise en situation réelle imprévisible. L'objectif final n'est pas de connaître tous les mots anglais, mais de savoir comprendre, parler, reformuler, nuancer, s'adapter, interpréter et interagir même face à l'inconnu. Chaque palier se termine par un contrôle noté sur 40 (compréhension 15, expression 15, grammaire/vocabulaire/verbes 10), complété par un diagnostic sur 6 dimensions (accuracy, fluency, range, interaction, naturalness, adaptability) ; une fois validé, on passe au palier suivant.";

export const B2_EN_PALIERS = [
  {
    code: "B2.1", title: "Argumentation",
    objective: "Construire une argumentation complète et anticiper la contre-objection.",
    communication: "Construire une argumentation : claim → reason → example → counterargument → conclusion.",
    grammar: ["Connecteurs avancés : however, nevertheless, whereas, therefore, consequently, although, even though, provided that", "Concession et contraste, cause et conséquence"],
    conjugation: "Réemploi de tous les temps déjà vus au service de l'argumentation.",
    secretEnglish: "Anticipating the counterargument — « Some people might argue that…, however… ».",
    mission: "Construire une argumentation complète (les 5 étapes) sur un sujet donné.",
    activities: ["Connecteurs", "Grammaire", "Compréhension écrite", "Expression écrite (argumentation)", "Expression orale (débat)", "Secret English", "Mission", "Contrôle de niveau", "Fiche PDF"],
  },
  {
    code: "B2.2", title: "Nuance & Certainty",
    objective: "Nuancer un propos selon son degré de certitude plutôt que de parler en termes absolus.",
    communication: "Distinguer certainty → probability → possibility → doubt dans son discours.",
    vocab: ["definitely, probably, apparently, arguably, partly, relatively, largely, potentially, to some extent"],
    mission: "Exprimer une opinion sans utiliser always / never / everyone / nobody.",
    activities: ["Vocabulaire de la nuance", "Compréhension écrite", "Expression orale (opinion nuancée)", "Mission", "Contrôle de niveau", "Fiche PDF"],
  },
  {
    code: "B2.3", title: "Register Master",
    objective: "Adapter son anglais à l'interlocuteur : ami, collègue, supérieur, administration, client, inconnu, professionnel.",
    communication: "Formuler la même demande selon 4 registres : casual, neutral, polite, formal.",
    vocab: ["Casual : Can you help me out?", "Neutral : Could you help me?", "Polite : Would you mind helping me?", "Formal : I would appreciate your assistance."],
    mission: "Exprimer la même demande en anglais casual, neutral, polite puis formal.",
    activities: ["Vocabulaire par registre", "Expression écrite (4 registres)", "Expression orale", "Mission", "Contrôle de niveau", "Fiche PDF"],
  },
  {
    code: "B2.4", title: "The Collocation Lab",
    objective: "Passer des mots isolés aux groupes de mots naturels (collocations).",
    communication: "Choisir la combinaison de mots la plus naturelle selon le contexte.",
    collocations: ["make : make a decision, make a mistake, make progress, make an effort, make a difference, make sense, make an appointment", "take : take responsibility, take part, take a break, take action, take into account"],
    mission: "Choisir la combinaison la plus naturelle dans un contexte donné.",
    activities: ["Collocations (make / take / get / have / give / keep / set / put / raise / reach)", "Compréhension écrite", "Expression écrite", "Mission", "Contrôle de niveau", "Fiche PDF"],
  },
  {
    code: "B2.5", title: "Sound Like English",
    objective: "Comprendre l'anglais tel qu'il est réellement prononcé (connected speech).",
    communication: "Reconnaître à l'oral des formes réduites : going to, want to, have to, did you, what are you.",
    grammar: ["Word stress, sentence stress, rhythm, intonation", "Linking, weak forms, connected speech"],
    mission: "Écouter un extrait audio et repérer 5 formes de discours connecté (connected speech).",
    activities: ["Prononciation (word/sentence stress, rhythm, intonation)", "Compréhension orale (connected speech)", "Mission", "Contrôle de niveau", "Fiche PDF"],
  },
  {
    code: "B2.6", title: "Diplomatic English",
    objective: "Exprimer un désaccord sans créer inutilement un conflit.",
    communication: "Passer d'un désaccord direct à un désaccord diplomatique selon le contexte.",
    vocab: ["Direct : You're wrong.", "Neutral : I don't agree.", "Diplomatic : I'm not sure I agree with that.", "Advanced : I see your point, but I'm not entirely convinced."],
    secretEnglish: "Same idea ≠ same social effect.",
    mission: "Exprimer un désaccord avec un collègue de manière diplomatique.",
    activities: ["Vocabulaire du désaccord", "Expression orale (désaccord diplomatique)", "Secret English", "Mission", "Contrôle de niveau", "Fiche PDF"],
  },
  {
    code: "B2.7", title: "Humour, Irony & Sarcasm",
    objective: "Comprendre l'humour anglophone dans ses différentes formes.",
    communication: "Comprendre l'irony, le sarcasm, le deadpan humour, l'exaggeration, l'understatement, le double meaning.",
    mission: "Écouter un dialogue et répondre : « What did the speaker literally say? » puis « What did the speaker actually mean? ».",
    activities: ["Compréhension orale (humour)", "Analyse (sens littéral vs sens réel)", "Mission", "Contrôle de niveau", "Fiche PDF"],
  },
  {
    code: "B2.8", title: "Read Between the Lines",
    objective: "Identifier l'implicite dans un discours ou un dialogue.",
    communication: "Identifier l'implication, l'intention, l'attitude, le bias, l'assumption, le hidden meaning derrière une phrase.",
    secretEnglish: "Exemple : « He finally agreed. » — que suggère « finally » ?",
    mission: "Analyser un court dialogue et expliquer ce qui est suggéré sans être explicitement dit.",
    activities: ["Compréhension écrite (implicite)", "Secret English", "Mission", "Contrôle de niveau", "Fiche PDF"],
  },
  {
    code: "B2.9", title: "Digital English",
    objective: "Adapter son message écrit selon le canal numérique utilisé.",
    communication: "Adapter son message selon le canal : email, WhatsApp, réseaux sociaux, LinkedIn, message vocal, service client en ligne, commentaires.",
    mission: "Écrire le même message pour un ami, un collègue, un manager et un service client.",
    activities: ["Expression écrite (email, message, post)", "Compréhension écrite", "Mission", "Contrôle de niveau", "Fiche PDF"],
  },
  {
    code: "B2.10", title: "Thinking in English",
    objective: "Réduire progressivement la traduction mentale pour penser directement en anglais.",
    communication: "Progression : image → phrase, image → description, situation → réaction, intention → formulation, question imprévisible → réponse.",
    secretEnglish: "10-second challenge — l'apprenant dispose de 10 secondes pour commencer à répondre ; la priorité est communication → fluidité → précision.",
    mission: "Répondre à 5 questions imprévisibles en moins de 10 secondes chacune.",
    activities: ["Exercices de réaction rapide", "Expression orale spontanée", "Secret English (10-second challenge)", "Mission", "Contrôle de niveau", "Fiche PDF"],
  },
  {
    code: "B2.11", title: "One Day in English",
    objective: "Simulation complète d'une journée en anglais, situation après situation.",
    communication: "Répondre à un message, participer à une réunion, commander au restaurant, résoudre un problème, téléphoner, discuter d'un sujet de société, donner son avis sur un film — sans savoir à l'avance quelle situation arrivera.",
    mission: "Vivre une journée simulée en anglais, situation par situation, sans préparation préalable.",
    activities: ["Simulation multi-situations", "Compréhension orale et écrite", "Expression orale et écrite", "Mission", "Contrôle de niveau", "Fiche PDF"],
  },
  {
    code: "B2.12", title: "B2 Real World",
    objective: "Le défi final : réagir à une situation totalement inconnue, sans traduction, sans phrase pré-écrite, sans choix évident.",
    communication: "Understand → think → respond → interact → rephrase → adapt → conclude, face à une situation imprévue de bout en bout.",
    mission: "Réagir à une situation totalement inconnue et inattendue, du début à la fin, sans aide.",
    activities: ["Simulation imprévue", "Grand contrôle final B2 (/40 — compréhension 15, expression 15, grammaire/vocabulaire/verbes 10)", "Diagnostic 6 dimensions (accuracy, fluency, range, interaction, naturalness, adaptability)", "Fiche PDF"],
  },
];
