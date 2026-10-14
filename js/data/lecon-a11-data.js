// The Roots — contenu A1.1 « Mon identité » : Grammaire, Lecture, Écoute.
// Repris des prototypes (a11-complete.html, a11-competences.html) ; les questions
// de lecture et des dialogues ont été ajoutées pour l'intégration. À relire.
// q = [question, choix, index de la bonne réponse, explication]

export const GRAMMAR_PAGES = [
  {
    title: "Le verbe to be (au présent)", icon: "⚙️",
    table: [["I", "am", "Je suis"], ["You", "are", "Tu es / Vous êtes"], ["He", "is", "Il est"], ["She", "is", "Elle est"], ["It", "is", "Il/Elle est (objet)"], ["We", "are", "Nous sommes"], ["They", "are", "Ils / Elles sont"]],
    examples: [["I am {name}.", "Je suis {name}."], ["You are a student.", "Tu es étudiant(e)."], ["He is my friend.", "Il est mon ami."]],
    qs: [["I ___ French.", ["am", "is", "are"], 0, "Avec I, on utilise am."]],
  },
  {
    title: "Les formes courtes et la négation", icon: "✂️",
    table: [["I", "I’m / I am not", "Je suis / Je ne suis pas"], ["You", "you’re / aren’t", "Tu es / Tu n’es pas"], ["He", "he’s / isn’t", "Il est / Il n’est pas"], ["She", "she’s / isn’t", "Elle est / Elle n’est pas"], ["We", "we’re / aren’t", "Nous sommes / ne sommes pas"], ["They", "they’re / aren’t", "Ils sont / ne sont pas"]],
    examples: [["I’m not a teacher.", "Je ne suis pas enseignant(e)."], ["She isn’t from Spain.", "Elle n’est pas d’Espagne."]],
    qs: [["He ___ a doctor. (négatif)", ["isn’t", "aren’t", "am not"], 0, "He + isn’t."]],
  },
  {
    title: "Poser une question avec be", icon: "❓",
    table: [["Am", "I?", "Suis-je… ?"], ["Are", "you?", "Es-tu… ?"], ["Is", "she?", "Est-elle… ?"], ["Is", "he?", "Est-il… ?"], ["Are", "we / they?", "Sommes-nous / Sont-ils… ?"]],
    examples: [["Are you a student? — Yes, I am.", "Es-tu étudiant(e) ? — Oui."], ["Is she French? — No, she isn’t.", "Est-elle française ? — Non."]],
    qs: [["___ you from Spain?", ["Is", "Are", "Am"], 1, "Avec you : Are you… ?"], ["What ___ your name?", ["are", "am", "is"], 2, "What is your name ?"]],
  },
  {
    title: "Le verbe to have", icon: "🎒",
    table: [["I", "have", "J’ai"], ["You", "have", "Tu as / Vous avez"], ["He / She", "has", "Il / Elle a"], ["We", "have", "Nous avons"], ["They", "have", "Ils / Elles ont"]],
    examples: [["I have brown eyes.", "J’ai les yeux marron."], ["She has a brother.", "Elle a un frère."], ["Do you have a sister? — Yes, I do.", "As-tu une sœur ? — Oui."]],
    qs: [["He ___ a car.", ["have", "has", "am"], 1, "He / she → has."]],
  },
  {
    title: "Questions et possessifs", icon: "💬",
    table: [["What?", "Quoi ? / Quel ?", "What is your name?"], ["Where?", "Où ?", "Where are you from?"], ["How old?", "Quel âge ?", "How old are you?"], ["my / your", "mon / ton", "my name, your age"], ["his / her", "son (à lui / à elle)", "his name, her age"]],
    examples: [["Where are you from?", "D’où viens-tu ?"], ["Her name is Lily.", "Elle s’appelle Lily."]],
    qs: [["___ old are you?", ["What", "How", "Where"], 1, "How old are you ?"], ["This is Emma. ___ name is Emma.", ["His", "Her", "My"], 1, "Emma est une fille → her."]],
  },
];

export const READING_PAGES = [
  { who: "Emma", text: "Hello! My name is Emma. I am ten years old. I am from France. I live in Paris. I am a student. I have brown eyes.",
    fr: "Emma habite à Paris. Elle a dix ans, elle est française et a les yeux marron.",
    qs: [["How old is Emma?", ["10", "12", "20"], 0, "Ten = 10."], ["Where does Emma live?", ["London", "Paris", "Madrid"], 1, "She lives in Paris."]] },
  { who: "Lucas", text: "Hi! I'm Lucas. I'm twenty-five years old. I'm Portuguese. I live in Porto. I'm a teacher. I have green eyes.",
    fr: "Lucas est portugais, habite à Porto, enseigne et a les yeux verts.",
    qs: [["What is Lucas's job?", ["Teacher", "Doctor", "Student"], 0, "I'm a teacher."], ["What colour are his eyes?", ["Brown", "Green", "Blue"], 1, "He has green eyes."]] },
  { who: "Maya", text: "Good morning! My first name is Maya and my last name is Smith. I'm British. I live in Manchester. I have a sister. Her name is Lily.",
    fr: "Maya Smith est britannique. Elle vit à Manchester et sa sœur s'appelle Lily.",
    qs: [["What is Maya's last name?", ["Lily", "Smith", "Manchester"], 1, "Her last name is Smith."], ["What is her sister's name?", ["Lily", "Emma", "Anna"], 0, "Her name is Lily."]] },
  { who: "Alex", text: "Hello, my name is Alex. I'm from Canada but I live in London. I'm not a student. I'm a doctor. My eyes are blue.",
    fr: "Alex vient du Canada, habite Londres, est médecin et n'est pas étudiant.",
    qs: [["Where is Alex from?", ["Canada", "London", "France"], 0, "I'm from Canada."], ["Is Alex a student?", ["Yes", "No", "We don't know"], 1, "I'm not a student."]] },
];

export const LISTENING_PAGES = [
  { title: "At school", text: "Hello! What's your name? My name is Anna. How old are you? I'm twelve. Where are you from? I'm from Spain.",
    qs: [["What is her name?", ["Anna", "Emma", "Lila"], 0, "My name is Anna."], ["How old is she?", ["10", "12", "20"], 1, "Twelve = 12."], ["Where is she from?", ["Spain", "France", "Italy"], 0, "I'm from Spain."]] },
  { title: "At work", text: "Good morning. Are you a teacher? No, I'm not. I'm a doctor. Do you live here? Yes, I do.",
    qs: [["Is he a teacher?", ["Yes", "No", "We don't know"], 1, "No, I'm not."], ["What is his job?", ["Teacher", "Doctor", "Student"], 1, "I'm a doctor."], ["Does he live here?", ["Yes", "No", "We don't know"], 0, "Yes, I do."]] },
  { title: "New friends", text: "Hi, I'm James. What's your nationality? I'm British. Do you have brothers or sisters? Yes, I have one brother.",
    qs: [["What is the nationality?", ["British", "Canadian", "Spanish"], 0, "I'm British."], ["How many brothers does he have?", ["None", "One", "Two"], 1, "One brother."]] },
  { title: "Sam", text: "Hello! I am Sam. I am twenty. I am British. I live in London.",
    qs: [["How old is Sam?", ["10", "20", "30"], 1, "Twenty = 20."], ["Where does Sam live?", ["Paris", "London", "Rome"], 1, "He lives in London."], ["Is Sam British?", ["Yes", "No", "Unknown"], 0, "I am British."]] },
  { title: "Anna", text: "Hi! My name is Anna. I am from Spain. I live in Madrid. I am a student.",
    qs: [["Where is Anna from?", ["Spain", "France", "Italy"], 0, "I am from Spain."], ["Where does Anna live?", ["London", "Madrid", "Porto"], 1, "She lives in Madrid."], ["Is Anna a student?", ["Yes", "No", "Unknown"], 0, "I am a student."]] },
  { title: "David", text: "Good morning. I am David. I am thirty years old. I am Canadian. I live in Toronto.",
    qs: [["How old is David?", ["20", "30", "40"], 1, "Thirty = 30."], ["What is his nationality?", ["British", "Canadian", "Spanish"], 1, "I am Canadian."]] },
];

// Exercices : séries corrigées (js/a11-drills.js) — la correction s'affiche à chaque réponse, rattrapage possible.
export const EXERCISE_PAGES = [
 {
  "title": "Vocabulaire — Se présenter",
  "help": "Choisis le sens correct de chaque expression.",
  "qs": [
   [
    "Nice to meet you.",
    [
     "Enchanté(e).",
     "À demain.",
     "Je suis fatigué(e)."
    ],
    0,
    "Nice to meet you = enchanté(e)."
   ],
   [
    "surname",
    [
     "prénom",
     "nom de famille",
     "nationalité"
    ],
    1,
    "Surname ou last name = nom de famille."
   ],
   [
    "I live in Paris.",
    [
     "Je viens de Paris.",
     "J’habite à Paris.",
     "Je travaille à Paris."
    ],
    1,
    "Live in = habiter à."
   ],
   [
    "I am from Portugal.",
    [
     "Je viens du Portugal.",
     "Je vais au Portugal.",
     "Je parle portugais."
    ],
    0,
    "Be from = venir de."
   ],
   [
    "teacher",
    [
     "médecin",
     "enseignant",
     "étudiant"
    ],
    1,
    "Teacher = enseignant ; student = étudiant."
   ],
   [
    "brown eyes",
    [
     "yeux marron",
     "cheveux bruns",
     "yeux bleus"
    ],
    0,
    "Eyes = yeux ; hair = cheveux."
   ],
   [
    "How old are you?",
    [
     "Quel est ton nom ?",
     "Où habites-tu ?",
     "Quel âge as-tu ?"
    ],
    2,
    "How old = quel âge."
   ],
   [
    "Good evening",
    [
     "Bonsoir",
     "Bonjour (matin)",
     "Bonne nuit"
    ],
    0,
    "Good evening s’utilise en saluant le soir."
   ]
  ]
 },
 {
  "title": "Grammaire — Be, have, do",
  "help": "Complète chaque phrase.",
  "qs": [
   [
    "She ___ from Spain.",
    [
     "are",
     "is",
     "am"
    ],
    1,
    "Avec she, on utilise is."
   ],
   [
    "They ___ British.",
    [
     "is",
     "are",
     "am"
    ],
    1,
    "Avec they, on utilise are."
   ],
   [
    "I ___ a brother.",
    [
     "has",
     "have",
     "is"
    ],
    1,
    "I have, she has."
   ],
   [
    "___ you live in London?",
    [
     "Do",
     "Does",
     "Are"
    ],
    0,
    "Do + you + base verbale."
   ],
   [
    "He ___ not have a car.",
    [
     "do",
     "does",
     "is"
    ],
    1,
    "He does not have / he doesn’t have."
   ],
   [
    "___ she a student?",
    [
     "Do",
     "Does",
     "Is"
    ],
    2,
    "Avec be : Is she a student?"
   ],
   [
    "This is ___ mother.",
    [
     "I",
     "my",
     "me"
    ],
    1,
    "My est l’adjectif possessif."
   ],
   [
    "___ are my shoes.",
    [
     "This",
     "That",
     "These"
    ],
    2,
    "These désigne plusieurs objets proches."
   ]
  ]
 },
 {
  "title": "Lecture — Comprendre une identité",
  "help": "Lis le texte, puis réponds sans regarder les solutions.",
  "passage": "Hello! My name is Sofia. I am twenty-two years old. I am Spanish, but I live in Lyon, France. I am a student. I have a brother called Pablo. I have green eyes.",
  "qs": [
   [
    "How old is Sofia?",
    [
     "20",
     "22",
     "12"
    ],
    1,
    "Twenty-two = 22."
   ],
   [
    "Where does Sofia live?",
    [
     "Lyon",
     "Madrid",
     "London"
    ],
    0,
    "She lives in Lyon."
   ],
   [
    "What is her nationality?",
    [
     "French",
     "British",
     "Spanish"
    ],
    2,
    "She is Spanish."
   ],
   [
    "Who is Pablo?",
    [
     "Her teacher",
     "Her brother",
     "Her father"
    ],
    1,
    "She has a brother called Pablo."
   ],
   [
    "What colour are her eyes?",
    [
     "Blue",
     "Brown",
     "Green"
    ],
    2,
    "She has green eyes."
   ]
  ]
 },
 {
  "title": "Écoute — Comprendre sans lire",
  "help": "Appuie sur Écouter, puis réponds. Tu peux réécouter.",
  "audio": "Hello. My name is Daniel. I am thirty years old. I am Canadian. I live in Toronto. I am a doctor. I have brown eyes.",
  "qs": [
   [
    "What is his first name?",
    [
     "David",
     "Daniel",
     "Samuel"
    ],
    1,
    "His name is Daniel."
   ],
   [
    "How old is he?",
    [
     "13",
     "30",
     "40"
    ],
    1,
    "Thirty = 30."
   ],
   [
    "Where does he live?",
    [
     "Toronto",
     "London",
     "Paris"
    ],
    0,
    "He lives in Toronto."
   ],
   [
    "What is his job?",
    [
     "Teacher",
     "Student",
     "Doctor"
    ],
    2,
    "He is a doctor."
   ],
   [
    "What colour are his eyes?",
    [
     "Blue",
     "Green",
     "Brown"
    ],
    2,
    "He has brown eyes."
   ]
  ]
 },
 {
  "title": "Expression — Construire des phrases",
  "help": "Sélectionne la phrase anglaise correcte.",
  "qs": [
   [
    "Je m’appelle Mia.",
    [
     "My name is Mia.",
     "I name Mia.",
     "I am name Mia."
    ],
    0,
    "My name is…"
   ],
   [
    "J’ai 19 ans.",
    [
     "I have 19 years.",
     "I am 19 years old.",
     "I is 19."
    ],
    1,
    "En anglais, on utilise be pour l’âge."
   ],
   [
    "Je viens de France.",
    [
     "I live France.",
     "I am French from.",
     "I am from France."
    ],
    2,
    "I am from + pays."
   ],
   [
    "Je ne suis pas médecin.",
    [
     "I am not a doctor.",
     "I do not a doctor.",
     "I not doctor."
    ],
    0,
    "Négation de be : am not."
   ],
   [
    "Est-elle étudiante ?",
    [
     "Does she a student?",
     "Is she a student?",
     "She is student?"
    ],
    1,
    "Inversion de be : Is she…?"
   ],
   [
    "C’est mon frère.",
    [
     "This is my brother.",
     "This is me brother.",
     "This is I brother."
    ],
    0,
    "My + nom."
   ]
  ]
 }
];

// Expression : tâche guidée (écrire ou parler). Une page est validée si au moins 3 des 4 éléments sont repérés
// (ou si l'apprenant confirme avoir dit sa présentation à voix haute).
export const EXPRESSION_PAGES = [
  { title: "Présente-toi", icon: "🎤",
    prompts: ["Dis ton prénom.", "Dis ton âge.", "Dis d’où tu viens.", "Dis ce que tu aimes."],
    model: "My name is {name}. I am ten years old. I am from France. I like music.",
    checks: [["Ton prénom", "my (first )?name is\\s+\\w+"], ["Ton âge", "(i am|i'm)\\s+\\w+\\s+years? old"], ["D’où tu viens", "(i am|i'm)\\s+from\\s+\\w+"], ["Ce que tu aimes", "\\bi (like|love)\\s+\\w+"]] },
  { title: "Présente une autre personne", icon: "🧑‍🤝‍🧑",
    prompts: ["Dis son prénom.", "Dis son âge.", "Dis d’où il / elle vient.", "Dis ce qu’il / elle aime."],
    model: "This is Lucas. He is twenty-five years old. He is from Portugal. He likes football.",
    checks: [["Son prénom", "(this is|his name is|her name is)\\s+\\w+"], ["Son âge", "(he|she) is\\s+\\w+\\s+years? old"], ["D’où il / elle vient", "(he|she) is from\\s+\\w+"], ["Ce qu’il / elle aime", "(he|she) (likes|loves)\\s+\\w+"]] },
];
