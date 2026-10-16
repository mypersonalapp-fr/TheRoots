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
  { who: "Emma", text: "Hello! My name is Emma. I am ten years old. I am from France. I live in Paris. I am a student. I have brown eyes. I like music and I love my school.",
    fr: "Emma habite à Paris. Elle a dix ans, elle est française et a les yeux marron. Elle aime la musique et adore son école.",
    qs: [["How old is Emma?", ["10", "12", "20"], 0, "Ten = 10."], ["Where does Emma live?", ["London", "Paris", "Madrid"], 1, "She lives in Paris."]] },
  { who: "Lucas", text: "Hi! I'm Lucas. I'm twenty-five years old. I'm Portuguese. I live in Porto. I'm a teacher. I have green eyes. I like music and I play the guitar. My school is big.",
    fr: "Lucas est portugais, habite à Porto, enseigne et a les yeux verts. Il aime la musique et joue de la guitare ; son école est grande.",
    qs: [["What is Lucas's job?", ["Teacher", "Doctor", "Student"], 0, "I'm a teacher."], ["What colour are his eyes?", ["Brown", "Green", "Blue"], 1, "He has green eyes."]] },
  { who: "Maya", text: "Good morning! My first name is Maya and my last name is Smith. I'm British. I live in Manchester. I have a sister. Her name is Lily. My sister is eight. We like dancing.",
    fr: "Maya Smith est britannique. Elle vit à Manchester et sa sœur s'appelle Lily. Sa sœur a huit ans ; elles aiment danser.",
    qs: [["What is Maya's last name?", ["Lily", "Smith", "Manchester"], 1, "Her last name is Smith."], ["What is her sister's name?", ["Lily", "Emma", "Anna"], 0, "Her name is Lily."]] },
  { who: "Alex", text: "Hello, my name is Alex. I'm from Canada but I live in London. I'm not a student. I'm a doctor. My eyes are blue. I speak English and French. I like my job.",
    fr: "Alex vient du Canada, habite Londres, est médecin et n'est pas étudiant. Il parle anglais et français et aime son travail.",
    qs: [["Where is Alex from?", ["Canada", "London", "France"], 0, "I'm from Canada."], ["Is Alex a student?", ["Yes", "No", "We don't know"], 1, "I'm not a student."]] },
];

export const LISTENING_PAGES = [
  { title: "At school", text: "Hello! What's your name? My name is Anna. How old are you? I'm twelve. Where are you from? I'm from Spain.",
    qs: [["What is her name?", ["Anna", "Emma", "Lila"], 0, "My name is Anna."], ["How old is she?", ["10", "12", "20"], 1, "Twelve = 12."], ["Where is she from?", ["Spain", "France", "Italy"], 0, "I'm from Spain."]] },
  { title: "At work", text: "Good morning. Are you a teacher? No, I'm not. I'm a doctor. Do you live here? Yes, I do.",
    qs: [["Is the speaker a teacher?", ["Yes", "No", "We don't know"], 1, "No, I'm not."], ["What is the speaker’s job?", ["Teacher", "Doctor", "Student"], 1, "I'm a doctor."], ["Does the speaker live here?", ["Yes", "No", "We don't know"], 0, "Yes, I do."]] },
  { title: "New friends", text: "Hi, I'm James. What's your nationality? I'm British. Do you have brothers or sisters? Yes, I have one brother.",
    qs: [["What is James's nationality?", ["British", "Canadian", "Spanish"], 0, "I'm British."], ["How many brothers does he have?", ["None", "One", "Two"], 1, "One brother."]] },
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
    checks: [["Ton prénom", "my (first )?name( is|'s)\\s+\\w+"], ["Ton âge", "(i am|i'm)\\s+[\\w-]+\\s+years? old|(i am|i'm)\\s+\\d{1,3}\\b"], ["D’où tu viens", "(i am|i'm|i come)\\s+from\\s+\\w+"], ["Ce que tu aimes", "\\bi (really )?(like|love|enjoy)\\s+\\w+"]] },
  { title: "Présente une autre personne", icon: "🧑‍🤝‍🧑",
    prompts: ["Dis son prénom.", "Dis son âge.", "Dis d’où il / elle vient.", "Dis ce qu’il / elle aime."],
    model: "This is Lucas. He is twenty-five years old. He is from Portugal. He likes football.",
    checks: [["Son prénom", "(this is|his name is|her name is)\\s+\\w+"], ["Son âge", "(he|she)(\\s+is|'s)\\s+[\\w-]+\\s+years? old"], ["D’où il / elle vient", "(he|she)(\\s+is|'s)\\s+from\\s+\\w+"], ["Ce qu’il / elle aime", "(he|she) (likes|loves)\\s+\\w+"]] },
];

// Transversale : module « Foundations » (7 jours) — couleurs, nombres, jours, mois, dates, années, heure.
export const TRANSV_DAYS = [
 {
  "title": "Jour 1 · Les couleurs",
  "goal": "Red, blue, green… décrire avec les couleurs",
  "words": [
   [
    "red",
    "rouge"
   ],
   [
    "blue",
    "bleu"
   ],
   [
    "green",
    "vert"
   ],
   [
    "yellow",
    "jaune"
   ],
   [
    "black",
    "noir"
   ],
   [
    "white",
    "blanc"
   ],
   [
    "orange",
    "orange"
   ],
   [
    "pink",
    "rose"
   ],
   [
    "purple",
    "violet"
   ],
   [
    "brown",
    "marron"
   ],
   [
    "grey",
    "gris"
   ]
  ],
  "qs": [
   [
    "What colour is the sky?",
    [
     "blue",
     "red",
     "brown"
    ],
    0,
    "The sky is blue."
   ],
   [
    "Banana = ?",
    [
     "green",
     "yellow",
     "purple"
    ],
    1,
    "A banana is yellow."
   ],
   [
    "“Marron” en anglais :",
    [
     "brown",
     "grey",
     "pink"
    ],
    0,
    "Marron = brown."
   ]
  ],
  "writing": "Écris 4 phrases : « My favourite colour is… », « My eyes are… », « My hair is… », « My bag is… »."
 },
 {
  "title": "Jour 2 · Les nombres et les âges",
  "goal": "0 à 100 et « I am … years old »",
  "words": [
   [
    "zero",
    "zéro"
   ],
   [
    "one, two, three",
    "un, deux, trois"
   ],
   [
    "four, five, six",
    "quatre, cinq, six"
   ],
   [
    "seven, eight, nine, ten",
    "sept, huit, neuf, dix"
   ],
   [
    "eleven, twelve",
    "onze, douze"
   ],
   [
    "thirteen … nineteen",
    "treize … dix-neuf"
   ],
   [
    "twenty",
    "vingt"
   ],
   [
    "thirty, forty, fifty",
    "trente, quarante, cinquante"
   ],
   [
    "sixty, seventy",
    "soixante, soixante-dix"
   ],
   [
    "eighty, ninety, a hundred",
    "quatre-vingts, quatre-vingt-dix, cent"
   ]
  ],
  "qs": [
   [
    "How do you say 15?",
    [
     "fifty",
     "fifteen",
     "fourteen"
    ],
    1,
    "15 = fifteen (≠ fifty = 50)."
   ],
   [
    "“Thirty” =",
    [
     "13",
     "30",
     "3"
    ],
    1,
    "Thirty = 30."
   ],
   [
    "“I am ___ years old.” (22)",
    [
     "twenty-two",
     "two-twenty",
     "twelve-two"
    ],
    0,
    "22 = twenty-two."
   ]
  ],
  "writing": "Écris ton âge, l’âge d’un ami et l’âge d’un membre de ta famille, en toutes lettres."
 },
 {
  "title": "Jour 3 · Les jours de la semaine",
  "goal": "Monday to Sunday",
  "words": [
   [
    "Monday",
    "lundi"
   ],
   [
    "Tuesday",
    "mardi"
   ],
   [
    "Wednesday",
    "mercredi"
   ],
   [
    "Thursday",
    "jeudi"
   ],
   [
    "Friday",
    "vendredi"
   ],
   [
    "Saturday",
    "samedi"
   ],
   [
    "Sunday",
    "dimanche"
   ],
   [
    "today",
    "aujourd’hui"
   ],
   [
    "tomorrow",
    "demain"
   ],
   [
    "weekend",
    "week-end"
   ]
  ],
  "qs": [
   [
    "The day after Monday is…",
    [
     "Sunday",
     "Tuesday",
     "Friday"
    ],
    1,
    "Monday → Tuesday."
   ],
   [
    "“Samedi” =",
    [
     "Sunday",
     "Saturday",
     "Thursday"
    ],
    1,
    "Samedi = Saturday."
   ],
   [
    "“Today is Friday.” Tomorrow is…",
    [
     "Saturday",
     "Thursday",
     "Sunday"
    ],
    0,
    "After Friday: Saturday."
   ]
  ],
  "writing": "Écris : « Today is… », « Tomorrow is… », « My favourite day is… because… »."
 },
 {
  "title": "Jour 4 · Les mois et les saisons",
  "goal": "January to December · spring, summer…",
  "words": [
   [
    "January, February, March",
    "janvier, février, mars"
   ],
   [
    "April, May, June",
    "avril, mai, juin"
   ],
   [
    "July, August, September",
    "juillet, août, septembre"
   ],
   [
    "October, November, December",
    "octobre, novembre, décembre"
   ],
   [
    "spring",
    "printemps"
   ],
   [
    "summer",
    "été"
   ],
   [
    "autumn",
    "automne"
   ],
   [
    "winter",
    "hiver"
   ],
   [
    "month",
    "mois"
   ],
   [
    "season",
    "saison"
   ]
  ],
  "qs": [
   [
    "“Août” =",
    [
     "April",
     "August",
     "October"
    ],
    1,
    "Août = August."
   ],
   [
    "Summer is…",
    [
     "l’hiver",
     "l’été",
     "l’automne"
    ],
    1,
    "Summer = été."
   ],
   [
    "The month after June is…",
    [
     "July",
     "May",
     "August"
    ],
    0,
    "June → July."
   ]
  ],
  "writing": "Écris : « My birthday is in… », « My favourite month is… », « My favourite season is… »."
 },
 {
  "title": "Jour 5 · Les dates et les ordinaux",
  "goal": "first, second, third… et « on the 5th of May »",
  "words": [
   [
    "first (1st)",
    "premier"
   ],
   [
    "second (2nd)",
    "deuxième"
   ],
   [
    "third (3rd)",
    "troisième"
   ],
   [
    "fourth (4th)",
    "quatrième"
   ],
   [
    "fifth (5th)",
    "cinquième"
   ],
   [
    "tenth (10th)",
    "dixième"
   ],
   [
    "twentieth (20th)",
    "vingtième"
   ],
   [
    "date",
    "date"
   ],
   [
    "birthday",
    "anniversaire"
   ],
   [
    "on the 5th of May",
    "le 5 mai"
   ]
  ],
  "qs": [
   [
    "“3rd” se dit…",
    [
     "three",
     "third",
     "thirty"
    ],
    1,
    "3rd = third."
   ],
   [
    "“My birthday is ___ the 12th of June.”",
    [
     "in",
     "on",
     "at"
    ],
    1,
    "Avec une date : on."
   ],
   [
    "“1st” =",
    [
     "first",
     "one",
     "second"
    ],
    0,
    "1st = first."
   ]
  ],
  "writing": "Écris ta date de naissance complète : « I was born on the … of … ». Puis la date d’aujourd’hui."
 },
 {
  "title": "Jour 6 · Les années",
  "goal": "Dire une année en anglais",
  "words": [
   [
    "year",
    "année"
   ],
   [
    "nineteen ninety-five (1995)",
    "1995"
   ],
   [
    "two thousand (2000)",
    "2000"
   ],
   [
    "two thousand and ten (2010)",
    "2010"
   ],
   [
    "twenty twenty-six (2026)",
    "2026"
   ],
   [
    "I was born in…",
    "je suis né(e) en…"
   ],
   [
    "last year",
    "l’année dernière"
   ],
   [
    "this year",
    "cette année"
   ],
   [
    "next year",
    "l’année prochaine"
   ],
   [
    "century",
    "siècle"
   ]
  ],
  "qs": [
   [
    "1990 se dit…",
    [
     "nineteen ninety",
     "one nine nine zero",
     "ninety-nine"
    ],
    0,
    "On coupe en deux : nineteen ninety."
   ],
   [
    "“I was born ___ 2001.”",
    [
     "in",
     "on",
     "at"
    ],
    0,
    "Avec une année : in."
   ],
   [
    "2026 se dit souvent…",
    [
     "twenty twenty-six",
     "two zero two six",
     "twenty-two six"
    ],
    0,
    "twenty twenty-six."
   ]
  ],
  "writing": "Écris : « I was born in… », « This year is… », « Next year is… »."
 },
 {
  "title": "Jour 7 · L’heure",
  "goal": "What time is it?",
  "words": [
   [
    "What time is it?",
    "Quelle heure est-il ?"
   ],
   [
    "It’s three o’clock.",
    "Il est trois heures."
   ],
   [
    "It’s half past three.",
    "Il est trois heures et demie."
   ],
   [
    "It’s a quarter past three.",
    "Il est trois heures et quart."
   ],
   [
    "It’s a quarter to four.",
    "Il est quatre heures moins le quart."
   ],
   [
    "morning",
    "matin"
   ],
   [
    "afternoon",
    "après-midi"
   ],
   [
    "evening",
    "soir"
   ],
   [
    "night",
    "nuit"
   ],
   [
    "noon / midnight",
    "midi / minuit"
   ]
  ],
  "qs": [
   [
    "“It’s half past two” =",
    [
     "2h30",
     "2h15",
     "1h30"
    ],
    0,
    "Half past = et demie."
   ],
   [
    "“A quarter to five” =",
    [
     "5h15",
     "4h45",
     "4h15"
    ],
    1,
    "Quarter to five = 4h45."
   ],
   [
    "“What time is it?” =",
    [
     "Quel jour ?",
     "Quelle heure ?",
     "Quel âge ?"
    ],
    1,
    "What time = quelle heure."
   ]
  ],
  "writing": "Écris l’heure de ton réveil, de ton déjeuner et de ton coucher : « I wake up at… »."
 }
];

/* ---- Extension A1.1 (octobre 2026) ---- */
GRAMMAR_PAGES.push(
  {
    title: "This / that / these / those", icon: "👉",
    table: [["this", "ce / cet / cette (proche, 1)", "This is my book."], ["that", "ce… là (loin, 1)", "That is her car."], ["these", "ces (proches, plusieurs)", "These are my friends."], ["those", "ces… là (loin, plusieurs)", "Those are his shoes."]],
    examples: [["This is my passport.", "Voici mon passeport."], ["Those are my sisters.", "Ce sont mes sœurs (là-bas)."], ["What is that? — It’s a bag.", "C’est quoi, ça ? — C’est un sac."]],
    qs: [["___ are my shoes. (plusieurs, proches)", ["This", "These", "That"], 1, "Plusieurs + proche → these."], ["___ is my teacher. (un, loin)", ["That", "These", "Those"], 0, "Un seul + loin → that."]],
  },
  {
    title: "To do : questions et réponses courtes", icon: "↩️",
    table: [["Do I / you / we / they…?", "Yes, I do. / No, I don’t.", "Do you live in Paris?"], ["Does he / she / it…?", "Yes, she does. / No, she doesn’t.", "Does she like music?"], ["don’t", "= do not", "I don’t have a car."], ["doesn’t", "= does not", "He doesn’t speak Spanish."]],
    examples: [["Do you have a brother? — Yes, I do.", "As-tu un frère ? — Oui."], ["Does Lucas live in Porto? — No, he doesn’t.", "Lucas habite-t-il à Porto ? — Non."], ["I don’t speak German.", "Je ne parle pas allemand."]],
    qs: [["___ she have a sister?", ["Do", "Does", "Is"], 1, "she → Does."], ["Do you like tea? — No, I ___.", ["don’t", "doesn’t", "isn’t"], 0, "Réponse courte : No, I don’t."], ["He ___ live in London.", ["don’t", "doesn’t", "isn’t"], 1, "he → doesn’t."]],
  },
);

READING_PAGES.push(
  { who: "Noah", text: "Hi! I'm Noah. I'm fifteen. My birthday is on the 3rd of March. I'm tall: I'm one metre eighty. I have short black hair and brown eyes. My shoe size is forty-two. I play basketball. I love sport and I'm very happy.",
    fr: "Noah a quinze ans, son anniversaire est le 3 mars. Il est grand (1,80 m), a les cheveux courts et noirs, les yeux marron et chausse du 42. Il joue au basket, adore le sport et est très heureux.",
    qs: [["When is Noah's birthday?", ["3rd of March", "13th of March", "3rd of May"], 0, "On the 3rd of March."], ["What colour is his hair?", ["Brown", "Black", "Blond"], 1, "Short black hair."], ["What is his shoe size?", ["Forty", "Forty-two", "Fourteen"], 1, "Forty-two = 42."]] },
);

LISTENING_PAGES.push(
  { title: "Phone number and age", text: "Hello, my name is Sophie. I am twenty-eight years old. My phone number is oh seven, one two, three four. My birthday is in July.",
    qs: [["How old is Sophie?", ["18", "28", "38"], 1, "Twenty-eight = 28."], ["When is her birthday?", ["June", "July", "August"], 1, "In July."]] },
  { title: "What does she look like?", text: "This is my friend Mia. She is tall. She has long brown hair and green eyes. Her shoes are red.",
    qs: [["What colour are her eyes?", ["Green", "Blue", "Brown"], 0, "Green eyes."], ["What colour are her shoes?", ["Red", "Pink", "Black"], 0, "Her shoes are red."]] },
);

EXERCISE_PAGES.push(
  { title: "Vocabulaire — Nombres et description", help: "Choisis la bonne réponse.",
    qs: [["shoe size", ["pointure", "taille", "poids"], 0, "Shoe size = pointure."], ["height", ["poids", "taille", "âge"], 1, "Height = taille."], ["“Eighteen” =", ["8", "18", "80"], 1, "Eighteen = 18."], ["“Skin colour” =", ["couleur des yeux", "couleur de peau", "couleur de cheveux"], 1, "Skin colour = couleur de peau."], ["“Hand” =", ["pied", "main", "tête"], 1, "Hand = main."], ["“Leg” =", ["bras", "jambe", "dos"], 1, "Leg = jambe."]] },
  { title: "Grammaire — This/that et do/does", help: "Complète la phrase.",
    qs: [["___ is my pen. (proche, 1)", ["This", "These", "Those"], 0, "This."], ["___ are my parents. (loin, plusieurs)", ["That", "Those", "This"], 1, "Those."], ["___ you have a phone?", ["Does", "Do", "Is"], 1, "you → Do."], ["Does he play football? — Yes, he ___.", ["do", "does", "is"], 1, "Yes, he does."], ["I ___ like coffee.", ["doesn’t", "don’t", "isn’t"], 1, "I don’t."]] },
);

// Test de fin de leçon (a11-competences.html) : 3 textes, 3 audios, 15 questions de grammaire (10 tirées au sort).
export const TEST_TEXTS = [{"title": "Emma à Paris", "text": "Hello! My name is Emma. I am ten years old. I am French. I live in Paris. I am a student. I like my school and my teacher is very kind.", "q": [["Where does Emma live?", ["London", "Paris", "Madrid"], 1], ["How old is Emma?", ["10", "12", "20"], 0], ["Is Emma a student?", ["Yes", "No", "Not stated"], 0]]}, {"title": "Lucas à Porto", "text": "Hi! I am Lucas. I am twenty-five. I am Portuguese and I live in Porto. I am a teacher. My school is near my house. I like my job.", "q": [["Where does Lucas live?", ["Porto", "Lisbon", "Rome"], 0], ["How old is Lucas?", ["15", "25", "35"], 1], ["What is his job?", ["Doctor", "Teacher", "Student"], 1]]}, {"title": "Maya à Manchester", "text": "Good morning! My name is Maya Smith. I am British. I live in Manchester. I have a sister called Lily. She is a student. We live in a big house.", "q": [["What is her last name?", ["Lily", "Maya", "Smith"], 2], ["Where does she live?", ["Manchester", "Paris", "London"], 0], ["Who is Lily?", ["Her sister", "Her mother", "Her friend"], 0]]}];
export const TEST_AUDIOS = [{"script": "Hello! I am Sam. I am twenty. I am British. I live in London.", "q": [["How old is Sam?", ["10", "20", "30"], 1], ["Where does Sam live?", ["Paris", "London", "Rome"], 1], ["Is Sam British?", ["Yes", "No", "Unknown"], 0]]}, {"script": "Hi! My name is Anna. I am from Spain. I live in Madrid. I am a student.", "q": [["Where is Anna from?", ["Spain", "France", "Italy"], 0], ["Where does Anna live?", ["London", "Madrid", "Porto"], 1], ["Is Anna a student?", ["Yes", "No", "Unknown"], 0]]}, {"script": "Good morning. I am David. I am thirty years old. I am Canadian. I live in Toronto.", "q": [["How old is David?", ["13", "30", "40"], 1], ["What nationality is David?", ["British", "Canadian", "French"], 1], ["Where does he live?", ["Toronto", "Paris", "Madrid"], 0]]}];
export const TEST_GRAMMAR = [["I ___ French.", ["am", "is", "are"], 0], ["She ___ 12.", ["am", "is", "are"], 1], ["We ___ students.", ["is", "are", "am"], 1], ["I ___ not British.", ["am", "is", "are"], 0], ["___ he live in Paris?", ["Do", "Does", "Is"], 1], ["I ___ a sister.", ["has", "have", "am"], 1], ["She ___ blue eyes.", ["have", "has", "is"], 1], ["This is ___ bag.", ["my", "me", "I"], 0], ["___ is your name?", ["Where", "What", "When"], 1], ["___ are my shoes.", ["These", "This", "That"], 0], ["They ___ not from Spain.", ["are", "is", "am"], 0], ["Where ___ you live?", ["does", "do", "is"], 1], ["He ___ not a teacher.", ["are", "is", "do"], 1], ["My ___ name is Smith.", ["last", "old", "from"], 0], ["___ she have a brother?", ["Does", "Do", "Is"], 0]];

/* ---- Extension du test de fin de leçon (octobre 2026) : banque élargie ---- */
TEST_TEXTS.push(
  { title: "Noah le sportif", text: "Hi! I'm Noah. I'm fifteen years old. My birthday is on the 3rd of March. I'm tall and I have short black hair and brown eyes. My shoe size is forty-two.", q: [["When is Noah's birthday?", ["3rd of March", "13th of March", "3rd of May"], 0], ["What colour is his hair?", ["Brown", "Black", "Blond"], 1], ["What is his shoe size?", ["Forty", "Forty-two", "Fourteen"], 1]] },
  { title: "Sofia à Madrid", text: "Hello! My name is Sofia. I'm twelve and I'm Spanish. I live in Madrid with my parents. I don't have a brother but I have two sisters. My favourite colour is green.", q: [["How many sisters does Sofia have?", ["One", "Two", "None"], 1], ["Does Sofia have a brother?", ["Yes", "No", "Not stated"], 1], ["What is her favourite colour?", ["Green", "Pink", "Blue"], 0]] },
  { title: "Un nouvel élève", text: "This is Liam. He is eleven. He is from Canada but he lives in London. He has curly hair and green eyes. He doesn't speak French. He speaks English and a little Spanish. He likes football.", q: [["Where is Liam from?", ["London", "Canada", "France"], 1], ["What colour are his eyes?", ["Green", "Blue", "Brown"], 0], ["Does Liam speak French?", ["Yes", "No", "Not stated"], 1]] },
  { title: "Ma journée", text: "I'm Mia and I'm Brazilian. On Monday I get up at seven o'clock. My school starts at half past eight. My English class is on Friday afternoon. My birthday is in July.", q: [["What time does Mia get up on Monday?", ["7:00", "8:30", "7:30"], 0], ["When is her English class?", ["Monday", "Friday afternoon", "Sunday"], 1], ["What is Mia's nationality?", ["Brazilian", "Spanish", "Portuguese"], 0]] },
  { title: "La fiche d'inscription", text: "Name: Chloe Martin. Age: thirteen. Nationality: French. Address: twelve, Rose Street, Lyon. Eyes: blue. Hobby: she loves music. Favourite subject: English. Phone: not given.", q: [["What is Chloe's last name?", ["Chloe", "Martin", "Lyon"], 1], ["How old is she?", ["12", "13", "30"], 1], ["What does she love?", ["Music", "Football", "Cinema"], 0]] },
);
TEST_AUDIOS.push(
  { script: "Hello! My name is Sophie. I am twenty-eight years old. I am French. My birthday is in July. I have two brothers.", q: [["How old is Sophie?", ["18", "28", "38"], 1], ["When is her birthday?", ["June", "July", "August"], 1], ["How many brothers does she have?", ["One", "Two", "Three"], 1]] },
  { script: "This is my friend Mia. She is tall. She has long brown hair and green eyes. Her shoes are red.", q: [["What colour are her eyes?", ["Green", "Blue", "Brown"], 0], ["What colour are her shoes?", ["Red", "Pink", "Black"], 0], ["Is Mia tall?", ["Yes", "No", "Unknown"], 0]] },
  { script: "Good afternoon. My name is Alex. I am from Canada. I am a doctor. I live in London. I do not have a car.", q: [["What is Alex's job?", ["Teacher", "Doctor", "Student"], 1], ["Where does Alex live?", ["Canada", "London", "Paris"], 1], ["Does Alex have a car?", ["Yes", "No", "Unknown"], 1]] },
  { script: "What time is it? It is half past three. My English class starts at four o'clock on Wednesday.", q: [["What time is it now?", ["3:30", "4:00", "2:30"], 0], ["What day is the class?", ["Tuesday", "Wednesday", "Thursday"], 1], ["What time does the class start?", ["3:30", "4:00", "5:00"], 1]] },
  { script: "Hi! I am Lucas. I am Portuguese. My phone number is oh seven, one two, three four. I live in Porto with my family.", q: [["What is Lucas's nationality?", ["Spanish", "Portuguese", "Brazilian"], 1], ["Where does he live?", ["Porto", "Lisbon", "Madrid"], 0], ["Who does he live with?", ["His family", "His friend", "Alone"], 0]] },
);
TEST_GRAMMAR.push(
  ["How ___ are you?", ["old", "many", "much"], 0], ["I ___ twelve years old.", ["am", "have", "do"], 0], ["She ___ not a student.", ["are", "is", "do"], 1], ["___ you have a phone?", ["Do", "Does", "Are"], 0],
  ["He ___ not like coffee.", ["don't", "doesn't", "isn't"], 1], ["Does she live in Rome? — No, she ___.", ["don't", "doesn't", "isn't"], 1], ["___ is my passport. (un seul, proche)", ["This", "These", "Those"], 0], ["___ are his sisters. (plusieurs, loin)", ["That", "Those", "This"], 1],
  ["Fifteen = ", ["15", "50", "5"], 0], ["Thirty = ", ["13", "30", "3"], 1], ["What ___ is your skin?", ["colour", "size", "weight"], 0], ["My shoe ___ is thirty-nine.", ["size", "height", "age"], 0],
  ["The day after Monday is ___.", ["Sunday", "Tuesday", "Friday"], 1], ["“Août” in English:", ["April", "August", "October"], 1], ["My birthday is ___ the 5th of May.", ["in", "on", "at"], 1], ["I was born ___ 1998.", ["in", "on", "at"], 0],
  ["Quarter to five =", ["4:45", "5:15", "4:15"], 0], ["It's half past two =", ["2:30", "2:15", "1:30"], 0], ["She has long ___ hair.", ["brown", "browns", "a brown"], 0], ["I have ___ eyes.", ["a blue", "blue", "blues"], 1],
  ["My ___ are very long. (jambes)", ["legs", "hands", "arms"], 0], ["He ___ two brothers.", ["have", "has", "is"], 1], ["They ___ from Brazil.", ["is", "are", "am"], 1], ["“Teacher” =", ["étudiant", "enseignant", "métier"], 1],
  ["“Last name” =", ["prénom", "nom de famille", "surnom"], 1], ["What is ___ nationality?", ["you", "your", "yours"], 1], ["___ do you live? — In Lyon.", ["Where", "What", "Who"], 0], ["I'm from Spain. I'm ___.", ["Spanish", "Spain", "Spaniard"], 0],
  ["Mia is Brazilian. ___ is from Brazil.", ["She", "He", "It"], 0], ["Is he British? — Yes, he ___.", ["is", "does", "has"], 0], ["The third month is ___.", ["March", "May", "June"], 0], ["“Winter” =", ["été", "hiver", "automne"], 1],
);
