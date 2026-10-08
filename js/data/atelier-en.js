// The Roots — contenu de l'« Atelier de grammaire anglaise » (écran js/screens/atelier-en.js).
// 9 temps, au moins 100 exercices chacun, 50 % formel / 50 % informel (reg: "formal" | "informal").
// Le contenu pédagogique est en français ; les phrases cibles en anglais britannique (champ `en`).
export const ATELIER_EN = { chapters: [
 {
  "id": "temps-en-present-simple",
  "group": "temps",
  "icon": "🕘",
  "title": "Le present simple",
  "level": "A1",
  "intro": "Le present simple dit ce qui est vrai et ce qu'on fait <b>d'habitude</b> : routines, goûts, faits. Ici, deux registres : <b>formel</b> (travail, administration, service) et <b>informel</b> (amis, famille).",
  "lessons": [
   {
    "id": "present-simple-formal-1",
    "reg": "formal",
    "title": "Se présenter et décrire son travail · Formel",
    "why": "Au bureau, on décrit son poste et ses tâches habituelles avec le <b>present simple</b> : le verbe de base, auquel on ajoute <b>-s</b> à he / she / it.",
    "rule": "1. I / you / we / they : verbe de base (I work).<br>2. he / she / it : verbe + <b>-s</b> (works) ; <b>-es</b> après -s, -sh, -ch, -x, -o (watches, goes) ; consonne + y → <b>-ies</b> (studies).<br>3. be : I <b>am</b>, you / we / they <b>are</b>, he / she / it <b>is</b>.<br>4. have : he / she / it <b>has</b>.",
    "table": {
     "caption": "be · have · work",
     "headers": [
      "Personne",
      "be",
      "have",
      "work"
     ],
     "rows": [
      [
       "I",
       "am",
       "have",
       "work"
      ],
      [
       "you",
       "are",
       "have",
       "work"
      ],
      [
       "he / she / it",
       "is",
       "has",
       "works"
      ],
      [
       "we",
       "are",
       "have",
       "work"
      ],
      [
       "they",
       "are",
       "have",
       "work"
      ]
     ]
    },
    "timeline": "● lundi ● mardi ● mercredi ● jeudi ● vendredi  →  une habitude qui se répète, pas une action en cours",
    "examples": [
     {
      "en": "I am the sales manager of this company.",
      "fr": "Je suis le responsable commercial de cette entreprise."
     },
     {
      "en": "Our office opens at nine o'clock.",
      "fr": "Notre bureau ouvre à neuf heures."
     },
     {
      "en": "Mr Clarke has a meeting every Monday.",
      "fr": "M. Clarke a une réunion tous les lundis.",
      "note": "has = forme de have à la 3e personne"
     },
     {
      "en": "We provide support to clients in Europe.",
      "fr": "Nous assurons une assistance aux clients en Europe."
     },
     {
      "en": "The receptionist greets visitors at the main entrance.",
      "fr": "La réceptionniste accueille les visiteurs à l'entrée principale."
     },
     {
      "en": "My colleagues work in the London branch.",
      "fr": "Mes collègues travaillent à l'agence de Londres."
     }
    ],
    "pitfalls": [
     {
      "wrong": "Mr Clarke have a meeting every Monday.",
      "right": "Mr Clarke has a meeting every Monday.",
      "why": "À he / she / it, <b>have</b> devient <b>has</b>."
     },
     {
      "wrong": "Ms Evans work in the accounts department.",
      "right": "Ms Evans works in the accounts department.",
      "why": "À la 3e personne du singulier, on ajoute <b>-s</b> au verbe."
     },
     {
      "wrong": "The manager watchs the figures.",
      "right": "The manager watches the figures.",
      "why": "Après -ch, -sh, -s, -x, -o, on ajoute <b>-es</b>."
     }
    ],
    "exercises": [
     {
      "type": "mcq",
      "q": "Choisissez la phrase correcte.",
      "opts": [
       "Ms Evans work in the accounts department.",
       "Ms Evans work's in the accounts department.",
       "Ms Evans works in the accounts department."
      ],
      "correct": 2,
      "why": "3e personne du singulier : verbe + <b>-s</b>."
     },
     {
      "type": "fill",
      "text": "Our manager ___ (be) the head of the department.",
      "answers": [
       "is"
      ],
      "why": "he / she / it → <b>is</b>."
     },
     {
      "type": "fill",
      "text": "The bank ___ (open) at nine o'clock every morning.",
      "answers": [
       "opens"
      ],
      "why": "Sujet singulier « the bank » (it) : <b>opens</b>."
     },
     {
      "type": "mcq",
      "q": "« Mon assistante a un diplôme de droit. »",
      "opts": [
       "My assistant have a degree in law.",
       "My assistant has a degree in law.",
       "My assistant is have a degree in law."
      ],
      "correct": 1,
      "why": "3e personne : <b>has</b>, jamais « have »."
     },
     {
      "type": "speak",
      "en": "Our company has offices in Leeds and Paris.",
      "fr": "Notre entreprise a des bureaux à Leeds et à Paris."
     },
     {
      "type": "fill",
      "text": "We ___ (be) pleased to welcome our guests.",
      "answers": [
       "are"
      ],
      "why": "we → <b>are</b>."
     },
     {
      "type": "mcq",
      "q": "Complétez : « The secretary ___ the reports every Friday. »",
      "opts": [
       "prepares",
       "prepare",
       "is prepare"
      ],
      "correct": 0,
      "why": "Sujet singulier : <b>prepares</b>."
     },
     {
      "type": "fill",
      "text": "Ms Patel ___ (go) to the bank on Thursdays.",
      "answers": [
       "goes"
      ],
      "why": "Verbe en -o : on ajoute <b>-es</b>."
     },
     {
      "type": "mcq",
      "q": "Complétez : « The guard ___ the entrance all night. »",
      "opts": [
       "watchs",
       "watches",
       "watch"
      ],
      "correct": 1,
      "why": "Verbe en -ch + he / she / it → <b>-es</b>."
     },
     {
      "type": "speak",
      "en": "I work for an insurance company in Manchester.",
      "fr": "Je travaille pour une compagnie d'assurances à Manchester."
     },
     {
      "type": "fill",
      "text": "The director ___ (study) the monthly figures carefully.",
      "answers": [
       "studies"
      ],
      "why": "Consonne + y → <b>-ies</b>."
     },
     {
      "type": "fill",
      "text": "I ___ (have) ten years of experience in banking.",
      "answers": [
       "have"
      ],
      "why": "À I, <b>have</b> ne change pas."
     },
     {
      "type": "mcq",
      "q": "« L'hôtel a un restaurant. »",
      "opts": [
       "The hotel have a restaurant.",
       "The hotel is a restaurant.",
       "The hotel has a restaurant."
      ],
      "correct": 2,
      "why": "The hotel = it → <b>has</b>."
     }
    ]
   },
   {
    "id": "present-simple-formal-2",
    "reg": "formal",
    "title": "Refuser poliment : la négation · Formel",
    "why": "Dans un courriel ou à un guichet, on nie avec les <b>formes pleines</b> (do not, does not) : c'est plus soigné que les contractions.",
    "rule": "1. be : <b>am / is / are + not</b> (is not).<br>2. Autres verbes : <b>do not</b> (I, you, we, they) ou <b>does not</b> (he, she, it) + verbe de base <b>sans -s</b>.<br>3. Possession : do not have / does not have.<br>4. À l'écrit professionnel, on garde les formes pleines.",
    "examples": [
     {
      "en": "The office does not open on Sundays.",
      "fr": "Le bureau n'ouvre pas le dimanche."
     },
     {
      "en": "I do not have your reference number.",
      "fr": "Je n'ai pas votre numéro de référence."
     },
     {
      "en": "We do not accept personal cheques.",
      "fr": "Nous n'acceptons pas les chèques personnels."
     },
     {
      "en": "Mr Singh is not available today.",
      "fr": "M. Singh n'est pas disponible aujourd'hui."
     },
     {
      "en": "The hotel does not allow pets in the rooms.",
      "fr": "L'hôtel n'autorise pas les animaux dans les chambres."
     },
     {
      "en": "Our clients do not pay in cash.",
      "fr": "Nos clients ne paient pas en espèces."
     }
    ],
    "pitfalls": [
     {
      "wrong": "The manager does not signs the form.",
      "right": "The manager does not sign the form.",
      "why": "Après <b>does not</b>, le verbe reste à la forme de base : le -s est déjà porté par does."
     },
     {
      "wrong": "We not accept cards.",
      "right": "We do not accept cards.",
      "why": "Un verbe ordinaire demande l'auxiliaire <b>do / does</b> pour nier."
     },
     {
      "wrong": "She does not has a reservation.",
      "right": "She does not have a reservation.",
      "why": "Après does not : <b>have</b>, pas has."
     }
    ],
    "exercises": [
     {
      "type": "mcq",
      "q": "« Le directeur ne répond pas aux appels personnels. »",
      "opts": [
       "The director not answers personal calls.",
       "The director does not answer personal calls.",
       "The director does not answers personal calls."
      ],
      "correct": 1,
      "why": "does not + verbe de base : <b>answer</b>."
     },
     {
      "type": "fill",
      "text": "The bank ___ offer loans to students. (present simple négatif)",
      "answers": [
       "does not",
       "doesn't"
      ],
      "why": "Sujet « the bank » (it) : <b>does not</b>."
     },
     {
      "type": "fill",
      "text": "I ___ have your invoice number, I am afraid. (present simple négatif)",
      "answers": [
       "do not",
       "don't"
      ],
      "why": "À I : <b>do not</b>."
     },
     {
      "type": "mcq",
      "q": "« Ces chambres ne sont pas disponibles. »",
      "opts": [
       "These rooms do not are available.",
       "These rooms not are available.",
       "These rooms are not available."
      ],
      "correct": 2,
      "why": "be se nie directement : <b>are not</b>."
     },
     {
      "type": "speak",
      "en": "We do not accept payments after the deadline.",
      "fr": "Nous n'acceptons pas les paiements après la date limite."
     },
     {
      "type": "fill",
      "text": "Ms Walker ___ work here any more. (present simple négatif)",
      "answers": [
       "does not",
       "doesn't"
      ],
      "why": "3e personne : <b>does not</b> + work."
     },
     {
      "type": "mcq",
      "q": "Quelle phrase est correcte ?",
      "opts": [
       "The receptionist does not speak German.",
       "The receptionist do not speak German.",
       "The receptionist does not speaks German."
      ],
      "correct": 0,
      "why": "does not + <b>speak</b> (sans -s)."
     },
     {
      "type": "fill",
      "text": "I ___ not the person in charge of complaints.",
      "answers": [
       "am"
      ],
      "why": "Avec be, on garde <b>am</b> + not."
     },
     {
      "type": "mcq",
      "q": "« Nous n'avons pas de table libre. »",
      "opts": [
       "We does not have a free table.",
       "We do not has a free table.",
       "We do not have a free table."
      ],
      "correct": 2,
      "why": "we → <b>do not</b> + have."
     },
     {
      "type": "speak",
      "en": "Mr Brown does not attend meetings on Fridays.",
      "fr": "M. Brown n'assiste pas aux réunions le vendredi."
     },
     {
      "type": "fill",
      "text": "The documents ___ not ready for signature.",
      "answers": [
       "are"
      ],
      "why": "Sujet pluriel avec be : <b>are</b> not."
     },
     {
      "type": "fill",
      "text": "The hotel ___ have a swimming pool, but it ___ a small gym.",
      "answers": [
       [
        "does not",
        "doesn't"
       ],
       [
        "has"
       ]
      ],
      "why": "Première partie négative : <b>does not</b> ; seconde affirmative : <b>has</b>."
     },
     {
      "type": "mcq",
      "q": "« Elles ne travaillent pas le week-end. »",
      "opts": [
       "They not work at weekends.",
       "They do not work at weekends.",
       "They does not work at weekends."
      ],
      "correct": 1,
      "why": "they → <b>do not</b>."
     }
    ]
   },
   {
    "id": "present-simple-formal-3",
    "reg": "formal",
    "title": "Questions et réponses courtes : réception et banque · Formel",
    "why": "Pour renseigner un client ou demander une information, on pose des questions avec <b>Do / Does</b> et on répond de façon brève et polie.",
    "rule": "1. be : inversion → <b>Am / Is / Are</b> + sujet.<br>2. Autres verbes : <b>Do</b> (I, you, we, they) ou <b>Does</b> (he, she, it) + sujet + verbe de base (sans -s).<br>3. Réponses courtes : Yes, I <b>do</b>. / No, it <b>does not</b>. / Yes, he <b>is</b>.<br>4. Mot interrogatif d'abord : What time <b>does</b> the bank close ?",
    "examples": [
     {
      "en": "Does the hotel provide breakfast?",
      "fr": "L'hôtel propose-t-il le petit-déjeuner ?"
     },
     {
      "en": "Do you have a reservation, madam?",
      "fr": "Avez-vous une réservation, madame ?"
     },
     {
      "en": "What time does the bank close?",
      "fr": "À quelle heure la banque ferme-t-elle ?"
     },
     {
      "en": "Is your manager available today?",
      "fr": "Votre responsable est-il disponible aujourd'hui ?"
     },
     {
      "en": "Does Mr Allen work in this department? Yes, he does.",
      "fr": "M. Allen travaille-t-il dans ce service ? Oui."
     },
     {
      "en": "Where do your clients live?",
      "fr": "Où vivent vos clients ?"
     }
    ],
    "pitfalls": [
     {
      "wrong": "Does the bank opens at nine?",
      "right": "Does the bank open at nine?",
      "why": "<b>Does</b> porte déjà le -s : le verbe reste à la forme de base."
     },
     {
      "wrong": "Does he work here? — Yes, he works.",
      "right": "Does he work here? — Yes, he does.",
      "why": "La réponse courte reprend l'auxiliaire : <b>Yes, he does</b>."
     },
     {
      "wrong": "What time the bank closes?",
      "right": "What time does the bank close?",
      "why": "Avec un mot interrogatif, on garde <b>do / does</b> + sujet."
     }
    ],
    "exercises": [
     {
      "type": "mcq",
      "q": "« Votre banque ouvre-t-elle le samedi ? »",
      "opts": [
       "Does your bank opens on Saturdays?",
       "Do your bank open on Saturdays?",
       "Does your bank open on Saturdays?"
      ],
      "correct": 2,
      "why": "Does + sujet + <b>open</b> (base)."
     },
     {
      "type": "fill",
      "text": "___ you have a reservation, sir?",
      "answers": [
       "Do",
       "do"
      ],
      "why": "you → <b>Do</b>."
     },
     {
      "type": "fill",
      "text": "___ the hotel provide free Wi-Fi?",
      "answers": [
       "Does",
       "does"
      ],
      "why": "The hotel = it → <b>Does</b>."
     },
     {
      "type": "mcq",
      "q": "« Does Ms Lee work here? — Yes, ___. »",
      "opts": [
       "she does",
       "she works",
       "she is"
      ],
      "correct": 0,
      "why": "La réponse courte reprend <b>does</b>."
     },
     {
      "type": "speak",
      "en": "What time does the conference room open?",
      "fr": "À quelle heure la salle de conférence ouvre-t-elle ?"
     },
     {
      "type": "fill",
      "text": "Is Mr Hall in the office? — No, he ___.",
      "answers": [
       "is not",
       "isn't"
      ],
      "why": "Question avec be → réponse avec <b>is not</b>."
     },
     {
      "type": "mcq",
      "q": "Quelle question est correcte ?",
      "opts": [
       "Where does your company sell its products?",
       "Where your company sells its products?",
       "Where does your company sells its products?"
      ],
      "correct": 0,
      "why": "mot interrogatif + does + sujet + verbe de base."
     },
     {
      "type": "fill",
      "text": "___ your colleagues speak French? — Yes, they ___.",
      "answers": [
       [
        "Do",
        "do"
       ],
       [
        "do"
       ]
      ],
      "why": "they → <b>Do</b> ... <b>do</b>."
     },
     {
      "type": "mcq",
      "q": "« Êtes-vous satisfait de votre chambre ? »",
      "opts": [
       "Do you be satisfied with your room?",
       "Are you satisfied with your room?",
       "Does you satisfied with your room?"
      ],
      "correct": 1,
      "why": "Avec be, on inverse : <b>Are you</b>."
     },
     {
      "type": "speak",
      "en": "Do you need a receipt for this payment?",
      "fr": "Avez-vous besoin d'un reçu pour ce paiement ?"
     },
     {
      "type": "fill",
      "text": "What time ___ the manager arrive in the morning?",
      "answers": [
       "does"
      ],
      "why": "Sujet singulier : <b>does</b>."
     },
     {
      "type": "fill",
      "text": "Where ___ your guests usually park?",
      "answers": [
       "do"
      ],
      "why": "Sujet pluriel : <b>do</b>."
     },
     {
      "type": "mcq",
      "q": "« Does Ms Clark have a company car? — No, ___. »",
      "opts": [
       "she is not",
       "she not",
       "she does not"
      ],
      "correct": 2,
      "why": "On reprend l'auxiliaire : <b>she does not</b>."
     }
    ]
   },
   {
    "id": "present-simple-formal-4",
    "reg": "formal",
    "title": "Habitudes, faits généraux et fréquence · Formel",
    "why": "Le present simple exprime les <b>habitudes</b>, les <b>horaires</b> et les <b>faits généraux</b> ; les adverbes de fréquence précisent « combien de fois ».",
    "rule": "1. Habitude, horaire, fait général : present simple.<br>2. always, usually, often, sometimes, rarely, never se placent <b>avant</b> le verbe (We usually meet…) mais <b>après</b> be (He is always punctual).<br>3. every week, on Mondays, twice a week : en fin de phrase.<br>4. <b>never</b> est déjà négatif : pas de do not avec lui.",
    "examples": [
     {
      "en": "Our directors usually meet on the first Monday of the month.",
      "fr": "Nos directeurs se réunissent généralement le premier lundi du mois."
     },
     {
      "en": "Mr Evans is always punctual.",
      "fr": "M. Evans est toujours ponctuel."
     },
     {
      "en": "The bank rarely closes before five o'clock.",
      "fr": "La banque ferme rarement avant dix-sept heures."
     },
     {
      "en": "Interest rates influence the price of loans.",
      "fr": "Les taux d'intérêt influencent le prix des prêts.",
      "note": "fait général"
     },
     {
      "en": "I never reply to messages after seven in the evening.",
      "fr": "Je ne réponds jamais aux messages après dix-neuf heures."
     },
     {
      "en": "The accounts team sends the invoices twice a week.",
      "fr": "L'équipe comptable envoie les factures deux fois par semaine."
     }
    ],
    "pitfalls": [
     {
      "wrong": "We usually are busy in December.",
      "right": "We are usually busy in December.",
      "why": "Avec <b>be</b>, l'adverbe se place après le verbe."
     },
     {
      "wrong": "Always he arrives on time.",
      "right": "He always arrives on time.",
      "why": "L'adverbe de fréquence se place devant le verbe, pas en début de phrase."
     },
     {
      "wrong": "The company does not never pay late.",
      "right": "The company never pays late.",
      "why": "<b>never</b> est déjà négatif : pas de double négation."
     }
    ],
    "exercises": [
     {
      "type": "mcq",
      "q": "« Elle arrive toujours à l'heure. »",
      "opts": [
       "She arrives always on time.",
       "She always arrives on time.",
       "Always she arrives on time."
      ],
      "correct": 1,
      "why": "L'adverbe se place <b>avant</b> le verbe."
     },
     {
      "type": "fill",
      "text": "Mr Evans ___ (be) always very punctual.",
      "answers": [
       "is"
      ],
      "why": "Avec be, l'adverbe suit le verbe : <b>is</b> always."
     },
     {
      "type": "fill",
      "text": "The bank ___ (close) at five o'clock on weekdays.",
      "answers": [
       "closes"
      ],
      "why": "it → <b>closes</b>."
     },
     {
      "type": "mcq",
      "q": "Quelle phrase est correcte ?",
      "opts": [
       "We are usually busy in December.",
       "We usually are busy in December.",
       "Usually we busy are in December."
      ],
      "correct": 0,
      "why": "Après be : <b>are usually</b>."
     },
     {
      "type": "speak",
      "en": "Our clients usually pay within thirty days.",
      "fr": "Nos clients paient généralement sous trente jours."
     },
     {
      "type": "fill",
      "text": "Interest rates ___ (affect) the cost of borrowing.",
      "answers": [
       "affect"
      ],
      "why": "Sujet pluriel : verbe de base <b>affect</b>."
     },
     {
      "type": "mcq",
      "q": "« Le directeur ne répond jamais aux courriels le dimanche. »",
      "opts": [
       "The director does not never reply to emails on Sundays.",
       "The director never reply to emails on Sundays.",
       "The director never replies to emails on Sundays."
      ],
      "correct": 2,
      "why": "never + verbe en <b>-s</b>, sans do not."
     },
     {
      "type": "fill",
      "text": "We ___ work on public holidays. (present simple négatif)",
      "answers": [
       "do not",
       "don't"
      ],
      "why": "we → <b>do not</b>."
     },
     {
      "type": "mcq",
      "q": "Complétez : « A cheque usually ___ three days to clear. »",
      "opts": [
       "takes",
       "take",
       "taking"
      ],
      "correct": 0,
      "why": "Sujet singulier : <b>takes</b>."
     },
     {
      "type": "speak",
      "en": "The finance director always checks the figures twice.",
      "fr": "Le directeur financier vérifie toujours les chiffres deux fois."
     },
     {
      "type": "fill",
      "text": "The manager always ___ (check) the figures before the meeting.",
      "answers": [
       "checks"
      ],
      "why": "3e personne : <b>checks</b>."
     },
     {
      "type": "fill",
      "text": "She ___ (be) rarely late, and she usually ___ (finish) her work on time.",
      "answers": [
       [
        "is"
       ],
       [
        "finishes"
       ]
      ],
      "why": "be → <b>is</b> ; finish + she → <b>finishes</b> (-sh → -es)."
     },
     {
      "type": "mcq",
      "q": "« Nous n'ouvrons jamais le dimanche. »",
      "opts": [
       "We open never on Sundays.",
       "We do not never open on Sundays.",
       "We never open on Sundays."
      ],
      "correct": 2,
      "why": "never avant le verbe, sans do not."
     }
    ]
   },
   {
    "id": "present-simple-informal-1",
    "reg": "informal",
    "title": "Parler de soi, des amis et de la famille · Informel",
    "why": "Entre amis, on dit « I'm », « he's », « they're » : le verbe <b>be</b> se contracte presque toujours à l'oral et dans les messages.",
    "rule": "1. be : I'm, you're, he's / she's / it's, we're, they're.<br>2. Autres verbes : verbe de base (I live, we play) ; he / she / it → <b>-s / -es / -ies</b> (lives, watches, tries).<br>3. have : I have, he / she <b>has</b> (en britannique on dit aussi I've got, he's got).<br>4. Routines : I get up at seven, she walks to work.",
    "table": {
     "caption": "be (contracté) · have · like",
     "headers": [
      "Personne",
      "be",
      "have",
      "like"
     ],
     "rows": [
      [
       "I",
       "I'm",
       "have",
       "like"
      ],
      [
       "you",
       "you're",
       "have",
       "like"
      ],
      [
       "he / she / it",
       "he's / she's / it's",
       "has",
       "likes"
      ],
      [
       "we",
       "we're",
       "have",
       "like"
      ],
      [
       "they",
       "they're",
       "have",
       "like"
      ]
     ]
    },
    "timeline": "● chaque jour ● chaque dimanche ● chaque été  →  ce qui revient souvent",
    "examples": [
     {
      "en": "I'm from Birmingham, but I live in London.",
      "fr": "Je viens de Birmingham, mais j'habite à Londres."
     },
     {
      "en": "My sister works in a café near the station.",
      "fr": "Ma sœur travaille dans un café près de la gare."
     },
     {
      "en": "We play football every Sunday.",
      "fr": "On joue au foot tous les dimanches."
     },
     {
      "en": "He's really funny.",
      "fr": "Il est vraiment drôle."
     },
     {
      "en": "My mum has a big flat in Leeds.",
      "fr": "Ma mère a un grand appartement à Leeds."
     },
     {
      "en": "They love pizza and watch films on Fridays.",
      "fr": "Ils adorent la pizza et regardent des films le vendredi."
     }
    ],
    "pitfalls": [
     {
      "wrong": "My brother play football on Sundays.",
      "right": "My brother plays football on Sundays.",
      "why": "À he / she / it, le verbe prend <b>-s</b>."
     },
     {
      "wrong": "She have two dogs.",
      "right": "She has two dogs.",
      "why": "À la 3e personne, <b>have</b> devient <b>has</b>."
     },
     {
      "wrong": "My dad gos fishing.",
      "right": "My dad goes fishing.",
      "why": "go + he / she / it → <b>goes</b> (-o → -es)."
     }
    ],
    "exercises": [
     {
      "type": "mcq",
      "q": "« Mon frère joue au foot le dimanche. »",
      "opts": [
       "My brother play football on Sundays.",
       "My brother plays football on Sundays.",
       "My brother is play football on Sundays."
      ],
      "correct": 1,
      "why": "3e personne : <b>plays</b>."
     },
     {
      "type": "fill",
      "text": "My sister ___ (live) in a tiny flat in Bristol.",
      "answers": [
       "lives"
      ],
      "why": "she → <b>lives</b>."
     },
     {
      "type": "fill",
      "text": "Me and Jack ___ (be) best mates.",
      "answers": [
       "are"
      ],
      "why": "Me and Jack = they → <b>are</b>."
     },
     {
      "type": "mcq",
      "q": "« Elle a deux chats. »",
      "opts": [
       "She have two cats.",
       "She haves two cats.",
       "She has two cats."
      ],
      "correct": 2,
      "why": "she → <b>has</b>."
     },
     {
      "type": "speak",
      "en": "My mum makes the best chips ever.",
      "fr": "Ma mère fait les meilleures frites du monde."
     },
     {
      "type": "fill",
      "text": "Dan ___ (watch) telly every night after work.",
      "answers": [
       "watches"
      ],
      "why": "Verbe en -ch → <b>watches</b>."
     },
     {
      "type": "mcq",
      "q": "Comment dit-on « Ils sont super sympas » ?",
      "opts": [
       "They're really nice.",
       "They is really nice.",
       "They be really nice."
      ],
      "correct": 0,
      "why": "they → <b>are</b>, contracté en they're."
     },
     {
      "type": "fill",
      "text": "I ___ (have) a younger brother called Sam.",
      "answers": [
       "have"
      ],
      "why": "À I : <b>have</b>."
     },
     {
      "type": "mcq",
      "q": "« Il étudie le soir. » — He ___ in the evenings.",
      "opts": [
       "studys",
       "studies",
       "study"
      ],
      "correct": 1,
      "why": "Consonne + y → <b>-ies</b>."
     },
     {
      "type": "speak",
      "en": "I get up at seven and walk to work.",
      "fr": "Je me lève à sept heures et je vais travailler à pied."
     },
     {
      "type": "fill",
      "text": "My nan ___ (go) to bingo on Thursdays.",
      "answers": [
       "goes"
      ],
      "why": "go + she → <b>goes</b>."
     },
     {
      "type": "fill",
      "text": "Tom ___ (be) mad about cars, and he ___ (have) a vintage Mini.",
      "answers": [
       [
        "is"
       ],
       [
        "has"
       ]
      ],
      "why": "he → <b>is</b> et <b>has</b>."
     },
     {
      "type": "mcq",
      "q": "« Nous habitons près de la gare. »",
      "opts": [
       "We live near the station.",
       "We lives near the station.",
       "We are live near the station."
      ],
      "correct": 0,
      "why": "we → verbe de base : <b>live</b>."
     }
    ]
   },
   {
    "id": "present-simple-informal-2",
    "reg": "informal",
    "title": "Dire non et râler : la négation · Informel",
    "why": "Entre amis ou en famille, on nie avec les <b>contractions</b> : don't, doesn't, isn't, aren't. « Do not » sonnerait trop raide à l'oral.",
    "rule": "1. be : I'm not, you / we / they <b>aren't</b>, he / she / it <b>isn't</b>.<br>2. Autres verbes : <b>don't</b> (I, you, we, they) ou <b>doesn't</b> (he, she, it) + verbe de base sans -s.<br>3. Possession : don't have / doesn't have.<br>4. Expression figée : <b>I can't be bothered</b> = « j'ai la flemme ».",
    "examples": [
     {
      "en": "I don't like mushrooms.",
      "fr": "Je n'aime pas les champignons."
     },
     {
      "en": "She doesn't eat meat.",
      "fr": "Elle ne mange pas de viande."
     },
     {
      "en": "We aren't late.",
      "fr": "On n'est pas en retard."
     },
     {
      "en": "My phone doesn't work properly.",
      "fr": "Mon téléphone ne marche pas bien."
     },
     {
      "en": "I don't fancy a pizza tonight.",
      "fr": "Je n'ai pas envie d'une pizza ce soir."
     },
     {
      "en": "My brother doesn't text me back.",
      "fr": "Mon frère ne me répond jamais par message."
     }
    ],
    "pitfalls": [
     {
      "wrong": "She doesn't likes sprouts.",
      "right": "She doesn't like sprouts.",
      "why": "Après <b>doesn't</b>, le verbe reste à la forme de base."
     },
     {
      "wrong": "I no like cold tea.",
      "right": "I don't like cold tea.",
      "why": "En anglais, on nie un verbe avec <b>don't / doesn't</b>, pas avec « no »."
     },
     {
      "wrong": "He don't know.",
      "right": "He doesn't know.",
      "why": "À he / she / it : <b>doesn't</b>."
     }
    ],
    "exercises": [
     {
      "type": "mcq",
      "q": "« Je n'aime pas le thé froid. »",
      "opts": [
       "I not like cold tea.",
       "I no like cold tea.",
       "I don't like cold tea."
      ],
      "correct": 2,
      "why": "I → <b>don't</b> + like."
     },
     {
      "type": "fill",
      "text": "My brother ___ eat vegetables, mate. (present simple négatif)",
      "answers": [
       "doesn't",
       "does not"
      ],
      "why": "he → <b>doesn't</b>."
     },
     {
      "type": "fill",
      "text": "I ___ fancy going out tonight. (present simple négatif)",
      "answers": [
       "don't",
       "do not"
      ],
      "why": "I → <b>don't</b>."
     },
     {
      "type": "mcq",
      "q": "« Il n'est pas à la maison. »",
      "opts": [
       "He doesn't at home.",
       "He isn't at home.",
       "He don't be at home."
      ],
      "correct": 1,
      "why": "be se nie avec <b>isn't</b>."
     },
     {
      "type": "speak",
      "en": "I can't be bothered to cook tonight.",
      "fr": "J'ai la flemme de cuisiner ce soir."
     },
     {
      "type": "fill",
      "text": "They ___ live near us any more. (present simple négatif)",
      "answers": [
       "don't",
       "do not"
      ],
      "why": "they → <b>don't</b>."
     },
     {
      "type": "mcq",
      "q": "Quelle phrase est correcte ?",
      "opts": [
       "She don't text me back.",
       "She doesn't texts me back.",
       "She doesn't text me back."
      ],
      "correct": 2,
      "why": "doesn't + <b>text</b> (sans -s)."
     },
     {
      "type": "fill",
      "text": "My phone ___ work properly. (present simple négatif)",
      "answers": [
       "doesn't",
       "does not"
      ],
      "why": "it → <b>doesn't</b>."
     },
     {
      "type": "mcq",
      "q": "« Nous ne sommes pas fatigués. »",
      "opts": [
       "We aren't tired.",
       "We don't tired.",
       "We not are tired."
      ],
      "correct": 0,
      "why": "be → <b>aren't</b>."
     },
     {
      "type": "speak",
      "en": "Our neighbours don't make much noise at night.",
      "fr": "Nos voisins ne font pas beaucoup de bruit la nuit."
     },
     {
      "type": "fill",
      "text": "My parents ___ in at the weekend.",
      "answers": [
       "aren't",
       "are not"
      ],
      "why": "Sujet pluriel avec be : <b>aren't</b>."
     },
     {
      "type": "fill",
      "text": "He ___ have a car, so he ___ (take) the bus everywhere.",
      "answers": [
       [
        "doesn't",
        "does not"
       ],
       [
        "takes"
       ]
      ],
      "why": "<b>doesn't</b> + have ; so he <b>takes</b>."
     },
     {
      "type": "mcq",
      "q": "« Ils ne parlent pas français. »",
      "opts": [
       "They don't speak French.",
       "They doesn't speak French.",
       "They aren't speak French."
      ],
      "correct": 0,
      "why": "they → <b>don't</b> + speak."
     }
    ]
   },
   {
    "id": "present-simple-informal-3",
    "reg": "informal",
    "title": "Inviter et prendre des nouvelles : les questions · Informel",
    "why": "Pour proposer une sortie ou demander des nouvelles, on pose des questions courtes avec <b>Do / Does</b> ; à l'oral, on répond aussi court.",
    "rule": "1. be : <b>Are</b> you OK ? <b>Is</b> she at home ?<br>2. Autres verbes : <b>Do</b> + I / you / we / they ; <b>Does</b> + he / she / it ; puis le verbe de base.<br>3. Réponses courtes : Yeah, I <b>do</b>. / No, she <b>doesn't</b>. / Yeah, it <b>is</b>.<br>4. Familier : Do you <b>fancy</b> a pint ? Do you <b>wanna</b> grab a coffee ? (wanna = want to).",
    "examples": [
     {
      "en": "Do you fancy a pint after work?",
      "fr": "Ça te dit un verre après le boulot ?"
     },
     {
      "en": "Does your sister live in Manchester?",
      "fr": "Ta sœur habite à Manchester ?"
     },
     {
      "en": "Do you wanna grab a coffee?",
      "fr": "Tu veux prendre un café ?",
      "note": "wanna = want to, très familier"
     },
     {
      "en": "What time does the match start?",
      "fr": "À quelle heure commence le match ?"
     },
     {
      "en": "Are you hungry? Yeah, I'm starving.",
      "fr": "Tu as faim ? Ouais, je meurs de faim."
     },
     {
      "en": "Does he like curry? Yeah, he does.",
      "fr": "Il aime le curry ? Ouais."
     }
    ],
    "pitfalls": [
     {
      "wrong": "Does she plays guitar?",
      "right": "Does she play guitar?",
      "why": "Après <b>Does</b>, le verbe reste à la forme de base."
     },
     {
      "wrong": "Do you like pasta? — Yes, I like.",
      "right": "Do you like pasta? — Yes, I do.",
      "why": "La réponse courte reprend <b>do</b>."
     },
     {
      "wrong": "Where lives your cousin?",
      "right": "Where does your cousin live?",
      "why": "Il faut <b>does</b> + sujet avant le verbe."
     }
    ],
    "exercises": [
     {
      "type": "mcq",
      "q": "« Tu veux un café ? »",
      "opts": [
       "Do you wanna a coffee?",
       "Does you want a coffee?",
       "Do you want a coffee?"
      ],
      "correct": 2,
      "why": "you → <b>Do you want</b>."
     },
     {
      "type": "fill",
      "text": "___ your brother play in a band?",
      "answers": [
       "Does",
       "does"
      ],
      "why": "he → <b>Does</b>."
     },
     {
      "type": "fill",
      "text": "___ you fancy a curry tonight?",
      "answers": [
       "Do",
       "do"
      ],
      "why": "you → <b>Do</b>."
     },
     {
      "type": "mcq",
      "q": "« Do you like Indian food? — Yeah, I ___. »",
      "opts": [
       "do",
       "like",
       "am"
      ],
      "correct": 0,
      "why": "Réponse courte : <b>I do</b>."
     },
     {
      "type": "speak",
      "en": "Do you wanna grab a coffee after class?",
      "fr": "Tu veux prendre un café après les cours ?"
     },
     {
      "type": "fill",
      "text": "Is your flat near the station? — Yeah, it ___.",
      "answers": [
       "is"
      ],
      "why": "Question avec be → <b>it is</b>."
     },
     {
      "type": "mcq",
      "q": "Quelle question est correcte ?",
      "opts": [
       "Where does your cousin live?",
       "Where lives your cousin?",
       "Where does your cousin lives?"
      ],
      "correct": 0,
      "why": "mot interrogatif + does + sujet + <b>live</b>."
     },
     {
      "type": "fill",
      "text": "___ your parents like camping? — No, they ___.",
      "answers": [
       [
        "Do",
        "do"
       ],
       [
        "don't",
        "do not"
       ]
      ],
      "why": "they → <b>Do</b> ... <b>don't</b>."
     },
     {
      "type": "mcq",
      "q": "« Il joue de la guitare ? »",
      "opts": [
       "Do he play the guitar?",
       "Does he play the guitar?",
       "Does he plays the guitar?"
      ],
      "correct": 1,
      "why": "he → <b>Does</b> + play."
     },
     {
      "type": "speak",
      "en": "What time does the match start tonight?",
      "fr": "À quelle heure commence le match ce soir ?"
     },
     {
      "type": "fill",
      "text": "How often ___ you see your cousins?",
      "answers": [
       "do"
      ],
      "why": "you → <b>do</b>."
     },
     {
      "type": "fill",
      "text": "___ Lucy live alone? — No, she ___ with her cousin.",
      "answers": [
       [
        "Does",
        "does"
       ],
       [
        "lives"
       ]
      ],
      "why": "she → <b>Does</b> ... she <b>lives</b>."
     },
     {
      "type": "mcq",
      "q": "« Does your mum cook? — ___ »",
      "opts": [
       "Yes, she cooks.",
       "Yes, she do.",
       "Yes, she does."
      ],
      "correct": 2,
      "why": "Réponse courte : <b>Yes, she does</b>."
     }
    ]
   },
   {
    "id": "present-simple-informal-4",
    "reg": "informal",
    "title": "Fréquence, pièges et petites histoires · Informel",
    "why": "Pour raconter sa semaine, on combine le present simple avec <b>always, often, sometimes, never</b> et des expressions courantes comme « I'm knackered ».",
    "rule": "1. always, usually, often, sometimes, never : <b>avant</b> le verbe, <b>après</b> be.<br>2. every weekend, on Saturdays, once a week, at night : en fin de phrase.<br>3. Une habitude = present simple, jamais « I am go ».<br>4. never est déjà négatif : pas de don't avec lui.<br>5. Expressions : I'm knackered (= épuisé), I'm starving (= j'ai une faim de loup).",
    "examples": [
     {
      "en": "Dave is always late for everything.",
      "fr": "Dave est toujours en retard pour tout."
     },
     {
      "en": "We sometimes order a takeaway on Friday nights.",
      "fr": "On commande parfois à emporter le vendredi soir."
     },
     {
      "en": "She never drinks coffee after six.",
      "fr": "Elle ne boit jamais de café après dix-huit heures."
     },
     {
      "en": "My cousin often stays at ours at the weekend.",
      "fr": "Mon cousin dort souvent chez nous le week-end."
     },
     {
      "en": "Dad usually falls asleep in front of the telly.",
      "fr": "Papa s'endort en général devant la télé."
     },
     {
      "en": "I'm knackered on Mondays.",
      "fr": "Je suis claqué le lundi."
     }
    ],
    "pitfalls": [
     {
      "wrong": "I am go to the gym on Saturdays.",
      "right": "I go to the gym on Saturdays.",
      "why": "Pour une habitude, on utilise le verbe seul, sans « am »."
     },
     {
      "wrong": "He often is late.",
      "right": "He is often late.",
      "why": "Avec <b>be</b>, l'adverbe se place après."
     },
     {
      "wrong": "I don't never watch football.",
      "right": "I never watch football.",
      "why": "<b>never</b> est déjà négatif : pas de double négation."
     }
    ],
    "exercises": [
     {
      "type": "mcq",
      "q": "« Je suis toujours claqué le lundi. »",
      "opts": [
       "I always am knackered on Mondays.",
       "I'm always knackered on Mondays.",
       "I'm knackered always on Mondays."
      ],
      "correct": 1,
      "why": "Après be : <b>I'm always</b>."
     },
     {
      "type": "fill",
      "text": "My little brother never ___ (tidy) his room.",
      "answers": [
       "tidies"
      ],
      "why": "Consonne + y → <b>tidies</b>."
     },
     {
      "type": "fill",
      "text": "We often ___ (go) to the cinema on Sundays.",
      "answers": [
       "go"
      ],
      "why": "we → verbe de base."
     },
     {
      "type": "mcq",
      "q": "« Dad usually ___ asleep in front of the telly. »",
      "opts": [
       "falls",
       "fall",
       "fallen"
      ],
      "correct": 0,
      "why": "he → <b>falls</b>."
     },
     {
      "type": "speak",
      "en": "We sometimes order a takeaway on Fridays.",
      "fr": "On commande parfois à emporter le vendredi."
     },
     {
      "type": "fill",
      "text": "She ___ (be) usually in a good mood in the morning.",
      "answers": [
       "is"
      ],
      "why": "she → <b>is</b>."
     },
     {
      "type": "mcq",
      "q": "« Je ne regarde jamais le foot. »",
      "opts": [
       "I watch never football.",
       "I don't never watch football.",
       "I never watch football."
      ],
      "correct": 2,
      "why": "never avant le verbe, sans don't."
     },
     {
      "type": "fill",
      "text": "My mates and I ___ (play) five-a-side every Tuesday.",
      "answers": [
       "play"
      ],
      "why": "Sujet pluriel : verbe de base."
     },
     {
      "type": "mcq",
      "q": "Quelle phrase est correcte ?",
      "opts": [
       "He often is late.",
       "He is often late.",
       "He is often lates."
      ],
      "correct": 1,
      "why": "Après be : <b>is often</b>."
     },
     {
      "type": "speak",
      "en": "I'm starving, but I never eat before noon.",
      "fr": "Je meurs de faim, mais je ne mange jamais avant midi."
     },
     {
      "type": "fill",
      "text": "Gran ___ like loud music, but she ___ (love) a good natter.",
      "answers": [
       [
        "doesn't",
        "does not"
       ],
       [
        "loves"
       ]
      ],
      "why": "Négation : <b>doesn't</b> ; she <b>loves</b>."
     },
     {
      "type": "fill",
      "text": "Mia ___ (study) hard, so she usually ___ (get) good marks.",
      "answers": [
       [
        "studies"
       ],
       [
        "gets"
       ]
      ],
      "why": "<b>studies</b> (y → ies) ; she <b>gets</b>."
     },
     {
      "type": "mcq",
      "q": "« Mon cousin reste souvent chez nous. »",
      "opts": [
       "My cousin often stay at ours.",
       "My cousin often stays at ours.",
       "My cousin often is stay at ours."
      ],
      "correct": 1,
      "why": "often + verbe en <b>-s</b>."
     }
    ]
   }
  ]
 },
 {
  "id": "temps-en-present-continuous",
  "group": "temps",
  "icon": "⏳",
  "title": "Le present continuous",
  "level": "A1",
  "intro": "On l'utilise pour ce qui se passe <b>en ce moment</b> ou pour un projet déjà arrangé. Ici, deux registres : <b>formel</b> (travail, administration, service) et <b>informel</b> (amis, famille).",
  "lessons": [
   {
    "id": "present-continuous-formal-1",
    "reg": "formal",
    "title": "Present continuous : la forme de base · Formel",
    "why": "Dans un courriel pro ou au téléphone, <b>I am writing to…</b> et <b>We are currently reviewing…</b> décrivent ce qui se passe <b>en ce moment</b>. En français on dit « je suis en train de… » ou simplement le présent ; en anglais il faut le <b>present continuous</b>.",
    "rule": "1. Sujet + <b>am / is / are</b> + verbe en <b>-ing</b>.<br>2. I <b>am</b>, he/she/it <b>is</b>, you/we/they <b>are</b>.<br>3. Marqueurs : <b>at the moment, currently, right now, now</b>.<br>4. En registre formel, on garde souvent la forme complète (I am, We are).",
    "table": {
     "caption": "be + verbe en -ing",
     "headers": [
      "Personne",
      "Auxiliaire",
      "Exemple"
     ],
     "rows": [
      [
       "I",
       "<b>am</b>",
       "I am writing to you."
      ],
      [
       "you",
       "<b>are</b>",
       "You are speaking to our team."
      ],
      [
       "he / she / it",
       "<b>is</b>",
       "The manager is waiting."
      ],
      [
       "we",
       "<b>are</b>",
       "We are reviewing your file."
      ],
      [
       "they",
       "<b>are</b>",
       "They are arriving at noon."
      ]
     ]
    },
    "timeline": "passé ─────── ● maintenant (I am writing) ───────▶ futur",
    "examples": [
     {
      "en": "I am writing to confirm your reservation.",
      "fr": "Je vous écris pour confirmer votre réservation."
     },
     {
      "en": "We are currently reviewing your application.",
      "fr": "Nous examinons actuellement votre candidature."
     },
     {
      "en": "The manager is waiting for you in Room 4.",
      "fr": "Le directeur vous attend en salle 4."
     },
     {
      "en": "Our engineers are working on the problem at the moment.",
      "fr": "Nos ingénieurs travaillent sur le problème en ce moment."
     },
     {
      "en": "You are speaking to the customer service team.",
      "fr": "Vous êtes en communication avec le service client."
     }
    ],
    "pitfalls": [
     {
      "wrong": "I writing to you about the invoice.",
      "right": "I am writing to you about the invoice.",
      "why": "Le français n'a pas besoin d'auxiliaire ici, l'anglais si : il faut <b>am/is/are</b> avant le -ing."
     },
     {
      "wrong": "The manager waiting for you.",
      "right": "The manager is waiting for you.",
      "why": "Sans <b>is</b>, la phrase est incomplète : be + -ing, toujours."
     },
     {
      "wrong": "He are leaving the office.",
      "right": "He is leaving the office.",
      "why": "L'auxiliaire s'accorde : <b>is</b> avec he/she/it, <b>are</b> avec we/you/they."
     }
    ],
    "exercises": [
     {
      "type": "mcq",
      "q": "Quelle phrase est correcte ?",
      "opts": [
       "I am writing to you about the invoice.",
       "I writing to you about the invoice.",
       "I am write to you about the invoice."
      ],
      "correct": 0,
      "why": "Il faut <b>am</b> + verbe en <b>-ing</b>."
     },
     {
      "type": "fill",
      "text": "___ (I / write) to confirm your appointment on Monday.",
      "answers": [
       "I am writing",
       "I'm writing"
      ],
      "why": "I + <b>am</b> + writing (le -e de write tombe)."
     },
     {
      "type": "mcq",
      "q": "Our team ___ on your request at the moment.",
      "opts": [
       "are working",
       "is working",
       "am working"
      ],
      "correct": 1,
      "why": "<b>Team</b> est singulier ici : <b>is</b> working."
     },
     {
      "type": "speak",
      "en": "I am writing to confirm your reservation.",
      "fr": "Je vous écris pour confirmer votre réservation."
     },
     {
      "type": "fill",
      "text": "The receptionist ___ (speak) to a guest right now.",
      "answers": [
       "is speaking"
      ],
      "why": "Sujet singulier : <b>is</b> + speaking."
     },
     {
      "type": "fill",
      "text": "___ (we / review) your application at the moment.",
      "answers": [
       "We are reviewing",
       "We're reviewing"
      ],
      "why": "We + <b>are</b> + reviewing."
     },
     {
      "type": "mcq",
      "q": "Quelle expression de temps va avec le present continuous ?",
      "opts": [
       "every morning",
       "at the moment",
       "last week"
      ],
      "correct": 1,
      "why": "<b>At the moment</b> = en ce moment, donc action en cours."
     },
     {
      "type": "fill",
      "text": "Our engineers ___ (work) on the problem.",
      "answers": [
       "are working"
      ],
      "why": "Sujet pluriel : <b>are</b> + working."
     },
     {
      "type": "mcq",
      "q": "Mr Dupont ___ for you in the meeting room.",
      "opts": [
       "is waiting",
       "wait",
       "waiting",
       "are waiting"
      ],
      "correct": 0,
      "why": "Mr Dupont = he : <b>is waiting</b>."
     },
     {
      "type": "fill",
      "text": "The waiters ___ (serve) dinner in the main hall.",
      "answers": [
       "are serving"
      ],
      "why": "Sujet pluriel : <b>are</b> + serving."
     },
     {
      "type": "speak",
      "en": "We are currently reviewing your application.",
      "fr": "Nous examinons actuellement votre candidature."
     },
     {
      "type": "mcq",
      "q": "« Elle est en train de préparer le contrat. » =",
      "opts": [
       "She prepares the contract.",
       "She preparing the contract.",
       "She is preparing the contract."
      ],
      "correct": 2,
      "why": "« En train de » se rend par <b>is + -ing</b>."
     },
     {
      "type": "fill",
      "text": "Thank you for calling. ___ (you / speak) to the customer service team.",
      "answers": [
       "You are speaking",
       "You're speaking"
      ],
      "why": "You + <b>are</b> + speaking."
     }
    ]
   },
   {
    "id": "present-continuous-formal-2",
    "reg": "formal",
    "title": "Orthographe -ing et négation · Formel",
    "why": "Une faute sur <b>booking</b> ou <b>planning</b> fait mauvais effet dans un courriel pro. Et pour refuser poliment, <b>We are not accepting…</b> est la forme complète attendue.",
    "rule": "1. Cas normal : base + <b>-ing</b> (book → booking).<br>2. Verbe en <b>-e</b> : on supprime le e (arrange → arranging).<br>3. Une voyelle + une consonne accentuée : on <b>double</b> la consonne (plan → planning, stop → stopping).<br>4. Britannique : -l final doublé (travel → travelling, cancel → cancelling).<br>5. Négation : <b>am / is / are + not</b> + -ing.",
    "examples": [
     {
      "en": "We are booking a room for the conference.",
      "fr": "Nous réservons une salle pour la conférence."
     },
     {
      "en": "The bank is not accepting cheques today.",
      "fr": "La banque n'accepte pas les chèques aujourd'hui."
     },
     {
      "en": "I am arranging a meeting for Thursday.",
      "fr": "J'organise une réunion pour jeudi."
     },
     {
      "en": "Our delegates are travelling from Manchester.",
      "fr": "Nos délégués viennent de Manchester."
     },
     {
      "en": "The director is not attending the lunch.",
      "fr": "Le directeur n'assiste pas au déjeuner."
     },
     {
      "en": "We are planning a new training programme.",
      "fr": "Nous préparons un nouveau programme de formation."
     }
    ],
    "pitfalls": [
     {
      "wrong": "We are planing the event.",
      "right": "We are planning the event.",
      "why": "Après une voyelle courte accentuée, on <b>double</b> la consonne : plan → planning."
     },
     {
      "wrong": "He is makeing a call.",
      "right": "He is making a call.",
      "why": "Le <b>e</b> final disparaît devant -ing."
     },
     {
      "wrong": "We don't accepting credit cards.",
      "right": "We are not accepting credit cards.",
      "why": "La négation se fait avec <b>be + not</b>, pas avec don't."
     }
    ],
    "exercises": [
     {
      "type": "mcq",
      "q": "Quelle est l'orthographe de « make » + -ing ?",
      "opts": [
       "making",
       "makeing",
       "makking"
      ],
      "correct": 0,
      "why": "Le <b>e</b> final tombe : mak<b>ing</b>."
     },
     {
      "type": "fill",
      "text": "We ___ (plan) a new training programme.",
      "answers": [
       "are planning"
      ],
      "why": "plan → <b>planning</b> (consonne doublée)."
     },
     {
      "type": "mcq",
      "q": "Quelle phrase est correcte ?",
      "opts": [
       "Our guests are travelings from Leeds.",
       "Our guests are travelleing from Leeds.",
       "Our guests are travelling from Leeds."
      ],
      "correct": 2,
      "why": "En anglais britannique : travel → <b>travelling</b>."
     },
     {
      "type": "fill",
      "text": "___ (I / arrange) a meeting for Thursday.",
      "answers": [
       "I am arranging",
       "I'm arranging"
      ],
      "why": "arrange → <b>arranging</b> (le e tombe)."
     },
     {
      "type": "speak",
      "en": "The director is not attending the lunch today.",
      "fr": "Le directeur n'assiste pas au déjeuner aujourd'hui."
     },
     {
      "type": "mcq",
      "q": "« La banque n'accepte pas les chèques aujourd'hui. » =",
      "opts": [
       "The bank doesn't accepting cheques today.",
       "The bank not is accepting cheques today.",
       "The bank is no accepting cheques today.",
       "The bank is not accepting cheques today."
      ],
      "correct": 3,
      "why": "Négation : <b>is not</b> + -ing."
     },
     {
      "type": "fill",
      "text": "The bank ___ (not / accept) cheques today.",
      "answers": [
       "is not accepting",
       "isn't accepting"
      ],
      "why": "is + <b>not</b> + accepting."
     },
     {
      "type": "mcq",
      "q": "Quelle est l'orthographe de « stop » + -ing ?",
      "opts": [
       "stoping",
       "stopping",
       "stopeing"
      ],
      "correct": 1,
      "why": "Voyelle courte + consonne : <b>stopping</b>."
     },
     {
      "type": "fill",
      "text": "Our delegates ___ (travel) from Manchester.",
      "answers": [
       "are travelling"
      ],
      "why": "Britannique : travel → <b>travelling</b>."
     },
     {
      "type": "fill",
      "text": "___ (I / not / use) the lift because it is out of order.",
      "answers": [
       "I am not using",
       "I'm not using"
      ],
      "why": "I + <b>am not</b> + using."
     },
     {
      "type": "speak",
      "en": "We are booking a room for the conference.",
      "fr": "Nous réservons une salle pour la conférence."
     },
     {
      "type": "mcq",
      "q": "Ms Patel ___ the meeting because she is ill.",
      "opts": [
       "not attending",
       "aren't attending",
       "isn't attending",
       "doesn't attending"
      ],
      "correct": 2,
      "why": "Ms Patel = she : <b>isn't attending</b>."
     },
     {
      "type": "fill",
      "text": "The guests ___ (sit) down for dinner.",
      "answers": [
       "are sitting"
      ],
      "why": "sit → <b>sitting</b> (consonne doublée)."
     }
    ]
   },
   {
    "id": "present-continuous-formal-3",
    "reg": "formal",
    "title": "Questions et réponses courtes · Formel",
    "why": "À la réception, au guichet ou en réunion, on pose sans cesse des questions : <b>Are you waiting for someone, madam?</b> Savoir inverser l'auxiliaire et répondre court rend l'échange fluide et poli.",
    "rule": "1. Question oui/non : <b>Am / Is / Are</b> + sujet + -ing ?<br>2. Mot interrogatif devant : <b>What, Where, Who, How long</b> + is/are + sujet + -ing ?<br>3. Réponse courte : <b>Yes, I am. / No, she is not.</b> (on ne répète pas le verbe en -ing).<br>4. Oui = jamais de contraction : « Yes, I am. » (pas « Yes, I'm. »).",
    "examples": [
     {
      "en": "Are you waiting for someone, madam?",
      "fr": "Attendez-vous quelqu'un, madame ?"
     },
     {
      "en": "Is Mr Lee joining us for dinner?",
      "fr": "M. Lee se joint-il à nous pour dîner ?"
     },
     {
      "en": "What are you looking for, sir?",
      "fr": "Que cherchez-vous, monsieur ?"
     },
     {
      "en": "Where is the delegation staying?",
      "fr": "Où la délégation séjourne-t-elle ?"
     },
     {
      "en": "Is the manager coming this afternoon? Yes, he is.",
      "fr": "Le directeur vient-il cet après-midi ? Oui."
     },
     {
      "en": "Are they still using the old system?",
      "fr": "Utilisent-ils encore l'ancien système ?"
     }
    ],
    "pitfalls": [
     {
      "wrong": "Do you waiting for someone, madam?",
      "right": "Are you waiting for someone, madam?",
      "why": "La question se forme avec <b>be</b> inversé, jamais avec do."
     },
     {
      "wrong": "What you are looking for?",
      "right": "What are you looking for?",
      "why": "Après le mot interrogatif, l'auxiliaire passe <b>avant</b> le sujet."
     },
     {
      "wrong": "Yes, I'm.",
      "right": "Yes, I am.",
      "why": "Dans une réponse courte affirmative, l'auxiliaire est accentué : pas de contraction."
     }
    ],
    "exercises": [
     {
      "type": "mcq",
      "q": "Quelle question est correcte ?",
      "opts": [
       "Do you waiting for someone, madam?",
       "Are you waiting for someone, madam?",
       "Are you wait for someone, madam?"
      ],
      "correct": 1,
      "why": "<b>Are</b> + you + waiting."
     },
     {
      "type": "fill",
      "text": "___ Mr Lee ___ (join) us for dinner?",
      "answers": [
       [
        "Is"
       ],
       [
        "joining"
       ]
      ],
      "why": "Is + sujet + <b>joining</b> (le e tombe)."
     },
     {
      "type": "mcq",
      "q": "« Are you staying at the hotel? » Réponse courte (oui) :",
      "opts": [
       "Yes, I'm.",
       "Yes, I do.",
       "Yes, I am.",
       "Yes, I staying."
      ],
      "correct": 2,
      "why": "On reprend seulement l'auxiliaire : <b>Yes, I am.</b>"
     },
     {
      "type": "fill",
      "text": "What ___ you ___ (look) for, sir?",
      "answers": [
       [
        "are"
       ],
       [
        "looking"
       ]
      ],
      "why": "What + <b>are</b> + you + looking."
     },
     {
      "type": "speak",
      "en": "Are you waiting for someone, madam?",
      "fr": "Attendez-vous quelqu'un, madame ?"
     },
     {
      "type": "mcq",
      "q": "« Où le comité séjourne-t-il ? » =",
      "opts": [
       "Where the committee is staying?",
       "Where does the committee staying?",
       "Where is the committee staying?",
       "Where staying the committee?"
      ],
      "correct": 2,
      "why": "Where + <b>is</b> + sujet + staying."
     },
     {
      "type": "fill",
      "text": "Are the guests checking out today? No, they ___. They are leaving tomorrow.",
      "answers": [
       "are not",
       "aren't"
      ],
      "why": "Réponse négative courte : No, they <b>are not</b>."
     },
     {
      "type": "mcq",
      "q": "« Is the manager coming this afternoon? » Réponse courte (non) :",
      "opts": [
       "No, he not is.",
       "No, he is not.",
       "No, he doesn't."
      ],
      "correct": 1,
      "why": "On reprend l'auxiliaire : <b>No, he is not.</b>"
     },
     {
      "type": "fill",
      "text": "How long ___ (you / stay) in London, Mrs Evans?",
      "answers": [
       "are you staying"
      ],
      "why": "How long + <b>are you</b> + staying."
     },
     {
      "type": "fill",
      "text": "Are they still ___ (use) the old booking system?",
      "answers": [
       "using"
      ],
      "why": "Après are + sujet : verbe en <b>-ing</b>, le e tombe."
     },
     {
      "type": "speak",
      "en": "Is the delegation staying at the Grand Hotel?",
      "fr": "La délégation séjourne-t-elle au Grand Hôtel ?"
     },
     {
      "type": "mcq",
      "q": "« Qui attendez-vous, monsieur ? » =",
      "opts": [
       "Who do you waiting for, sir?",
       "Who you are waiting for, sir?",
       "Who are waiting you for, sir?",
       "Who are you waiting for, sir?"
      ],
      "correct": 3,
      "why": "Who + <b>are you</b> + waiting for (préposition à la fin)."
     },
     {
      "type": "fill",
      "text": "Are the directors ___ (come) to the meeting? Yes, they ___.",
      "answers": [
       [
        "coming"
       ],
       [
        "are"
       ]
      ],
      "why": "come → <b>coming</b> ; réponse courte : Yes, they <b>are</b>."
     }
    ]
   },
   {
    "id": "present-continuous-formal-4",
    "reg": "formal",
    "title": "Projets, verbes d'état et situations · Formel",
    "why": "En contexte pro, le present continuous sert aussi à annoncer un <b>rendez-vous déjà fixé</b> : <b>We are meeting the client on Friday.</b> Mais certains verbes (need, understand, want…) ne s'y mettent <b>pas</b>.",
    "rule": "1. Projet arrangé : present continuous + <b>marqueur de futur</b> (tomorrow, on Friday, next week).<br>2. Verbes d'état, <b>sans -ing</b> : know, understand, want, need, prefer, believe.<br>3. Ex. : <b>I need</b> your signature (pas « I am needing »).<br>4. En contexte actuel : at the moment ; en projet : tomorrow, next month.",
    "examples": [
     {
      "en": "We are meeting the client on Friday at ten.",
      "fr": "Nous rencontrons le client vendredi à dix heures."
     },
     {
      "en": "The board is announcing the results next week.",
      "fr": "Le conseil annonce les résultats la semaine prochaine."
     },
     {
      "en": "I need your signature on this form.",
      "fr": "J'ai besoin de votre signature sur ce formulaire."
     },
     {
      "en": "We understand your concerns.",
      "fr": "Nous comprenons vos préoccupations."
     },
     {
      "en": "Our CEO is flying to Zurich tomorrow evening.",
      "fr": "Notre PDG s'envole pour Zurich demain soir."
     },
     {
      "en": "Are you attending the conference next month?",
      "fr": "Assisterez-vous à la conférence le mois prochain ?"
     }
    ],
    "pitfalls": [
     {
      "wrong": "I am needing your signature.",
      "right": "I need your signature.",
      "why": "<b>Need</b> est un verbe d'état : pas de -ing."
     },
     {
      "wrong": "We are understanding your concerns.",
      "right": "We understand your concerns.",
      "why": "<b>Understand</b> n'a pas de forme en -ing ici."
     },
     {
      "wrong": "He is believing you.",
      "right": "He believes you.",
      "why": "<b>Believe</b> (croire) est un verbe d'état : présent simple."
     }
    ],
    "exercises": [
     {
      "type": "mcq",
      "q": "Quelle phrase est correcte ?",
      "opts": [
       "I am needing your signature on this form.",
       "I need your signature on this form.",
       "I needing your signature on this form."
      ],
      "correct": 1,
      "why": "<b>Need</b> est un verbe d'état : pas de -ing."
     },
     {
      "type": "fill",
      "text": "___ (we / meet) the client on Friday at ten.",
      "answers": [
       "We are meeting",
       "We're meeting"
      ],
      "why": "Rendez-vous fixé : <b>are meeting</b> + marqueur de futur."
     },
     {
      "type": "mcq",
      "q": "Quel verbe ne s'utilise PAS normalement au present continuous ?",
      "opts": [
       "wait",
       "travel",
       "write",
       "understand"
      ],
      "correct": 3,
      "why": "<b>Understand</b> est un verbe d'état."
     },
     {
      "type": "fill",
      "text": "Our CEO ___ (fly) to Zurich tomorrow evening.",
      "answers": [
       "is flying"
      ],
      "why": "Projet fixé : <b>is flying</b>."
     },
     {
      "type": "speak",
      "en": "The board is announcing the results next week.",
      "fr": "Le conseil annonce les résultats la semaine prochaine."
     },
     {
      "type": "fill",
      "text": "We ___ (understand) your concerns and we ___ (want) to help.",
      "answers": [
       [
        "understand"
       ],
       [
        "want"
       ]
      ],
      "why": "Verbes d'état : présent simple, pas de -ing."
     },
     {
      "type": "mcq",
      "q": "Are you ___ the conference next month?",
      "opts": [
       "attends",
       "attend",
       "attending"
      ],
      "correct": 2,
      "why": "<b>Are you</b> + attending."
     },
     {
      "type": "fill",
      "text": "Mrs Roy ___ (prefer) the window seat.",
      "answers": [
       "prefers"
      ],
      "why": "<b>Prefer</b> est un verbe d'état : prefers (3e personne)."
     },
     {
      "type": "mcq",
      "q": "Quelle phrase est correcte ?",
      "opts": [
       "The manager is knowing the answer.",
       "I am wanting a quiet room.",
       "We are interviewing three candidates tomorrow."
      ],
      "correct": 2,
      "why": "<b>Know</b> et <b>want</b> sont des verbes d'état ; <b>interview</b> peut avoir -ing."
     },
     {
      "type": "fill",
      "text": "I ___ (believe) that the delegates ___ (arrive) at noon tomorrow.",
      "answers": [
       [
        "believe"
       ],
       [
        "are arriving"
       ]
      ],
      "why": "believe = état ; arrival fixée = <b>are arriving</b>."
     },
     {
      "type": "speak",
      "en": "I need your signature on this form, please.",
      "fr": "J'ai besoin de votre signature sur ce formulaire, s'il vous plaît."
     },
     {
      "type": "mcq",
      "q": "Our colleagues ___ the contract now, but they ___ more time.",
      "opts": [
       "read / are needing",
       "is reading / need",
       "are reading / are needing",
       "are reading / need"
      ],
      "correct": 3,
      "why": "Action en cours : <b>are reading</b> ; état : <b>need</b>."
     },
     {
      "type": "fill",
      "text": "Ms Brown ___ (not / come) to Monday's meeting because she is on holiday.",
      "answers": [
       "is not coming",
       "isn't coming"
      ],
      "why": "Projet négatif : <b>is not coming</b>."
     }
    ]
   },
   {
    "id": "present-continuous-informal-1",
    "reg": "informal",
    "title": "Present continuous : la forme de base · Informel",
    "why": "Entre amis, on dit <b>I'm waiting</b>, <b>She's coming</b>, <b>They're playing</b>. Les contractions sont la norme à l'oral et dans les messages.",
    "rule": "1. Sujet + <b>'m / 're / 's</b> + verbe en <b>-ing</b>.<br>2. I<b>'m</b>, you<b>'re</b>, he<b>'s</b>, she<b>'s</b>, it<b>'s</b>, we<b>'re</b>, they<b>'re</b>.<br>3. Marqueurs : <b>now, right now, at the moment</b>, ou « Look! / Listen! ».",
    "table": {
     "caption": "Les contractions de be",
     "headers": [
      "Personne",
      "Contraction",
      "Exemple"
     ],
     "rows": [
      [
       "I",
       "<b>I'm</b>",
       "I'm waiting."
      ],
      [
       "you",
       "<b>you're</b>",
       "You're standing on my foot!"
      ],
      [
       "he / she / it",
       "<b>he's / she's / it's</b>",
       "It's raining."
      ],
      [
       "we",
       "<b>we're</b>",
       "We're walking home."
      ],
      [
       "they",
       "<b>they're</b>",
       "They're playing football."
      ]
     ]
    },
    "timeline": "passé ─────── ● maintenant (I'm waiting) ───────▶ futur",
    "examples": [
     {
      "en": "I'm waiting outside the cinema.",
      "fr": "Je t'attends devant le cinéma."
     },
     {
      "en": "Look! It's raining again.",
      "fr": "Regarde ! Il pleut encore."
     },
     {
      "en": "My mum's cooking dinner right now.",
      "fr": "Ma mère prépare le dîner en ce moment."
     },
     {
      "en": "They're playing football in the park.",
      "fr": "Ils jouent au foot dans le parc."
     },
     {
      "en": "You're standing on my foot!",
      "fr": "Tu me marches sur le pied !"
     },
     {
      "en": "He's watching a film on his phone.",
      "fr": "Il regarde un film sur son téléphone."
     }
    ],
    "pitfalls": [
     {
      "wrong": "I waiting for you.",
      "right": "I'm waiting for you.",
      "why": "Il faut <b>'m</b> (am) avant le -ing."
     },
     {
      "wrong": "It rains now.",
      "right": "It's raining now.",
      "why": "« Maintenant, en ce moment » : on utilise le <b>present continuous</b>."
     },
     {
      "wrong": "She's play football.",
      "right": "She's playing football.",
      "why": "Après 's, le verbe prend <b>-ing</b>."
     }
    ],
    "exercises": [
     {
      "type": "mcq",
      "q": "Quelle phrase est correcte ?",
      "opts": [
       "I waiting outside.",
       "I am wait outside.",
       "I'm waiting outside."
      ],
      "correct": 2,
      "why": "<b>I'm</b> + verbe en -ing."
     },
     {
      "type": "fill",
      "text": "___ (it / rain) again! Take an umbrella.",
      "answers": [
       "It's raining",
       "It is raining"
      ],
      "why": "it + <b>'s</b> + raining."
     },
     {
      "type": "mcq",
      "q": "Quelle contraction correspond à « she is » ?",
      "opts": [
       "she're",
       "she's",
       "she'm"
      ],
      "correct": 1,
      "why": "she + is = <b>she's</b>."
     },
     {
      "type": "fill",
      "text": "___ (they / play) football in the park.",
      "answers": [
       "They're playing",
       "They are playing"
      ],
      "why": "they + <b>'re</b> + playing."
     },
     {
      "type": "speak",
      "en": "I'm waiting outside the cinema, hurry up!",
      "fr": "Je t'attends devant le cinéma, dépêche-toi !"
     },
     {
      "type": "mcq",
      "q": "Look! He ___ a film on his phone.",
      "opts": [
       "watches",
       "watching",
       "are watching",
       "is watching"
      ],
      "correct": 3,
      "why": "« Look! » = action en cours : <b>is watching</b>."
     },
     {
      "type": "fill",
      "text": "My mum ___ (cook) dinner right now.",
      "answers": [
       "is cooking",
       "'s cooking"
      ],
      "why": "Sujet singulier : <b>is</b> / <b>'s</b> + cooking."
     },
     {
      "type": "mcq",
      "q": "Quelle phrase est correcte ?",
      "opts": [
       "You're standing on my foot!",
       "You standing on my foot!",
       "You is standing on my foot!"
      ],
      "correct": 0,
      "why": "you + <b>'re</b> + standing."
     },
     {
      "type": "fill",
      "text": "___ (we / walk) home because the bus is late.",
      "answers": [
       "We're walking",
       "We are walking"
      ],
      "why": "we + <b>'re</b> + walking."
     },
     {
      "type": "fill",
      "text": "Shh! The baby ___ (sleep).",
      "answers": [
       "is sleeping",
       "'s sleeping"
      ],
      "why": "Action en cours : <b>is sleeping</b>."
     },
     {
      "type": "speak",
      "en": "Look, it's snowing and the kids are playing outside.",
      "fr": "Regarde, il neige et les enfants jouent dehors."
     },
     {
      "type": "mcq",
      "q": "Sorry, I can't talk. I___ driving.",
      "opts": [
       "'s",
       "'re",
       "'ve",
       "'m"
      ],
      "correct": 3,
      "why": "I + <b>'m</b> (am) + driving."
     },
     {
      "type": "fill",
      "text": "My brother and his girlfriend ___ (stay) at our flat at the moment.",
      "answers": [
       "are staying",
       "'re staying"
      ],
      "why": "Sujet pluriel : <b>are staying</b>."
     }
    ]
   },
   {
    "id": "present-continuous-informal-2",
    "reg": "informal",
    "title": "Négation, questions et réponses courtes · Informel",
    "why": "Pour proposer, demander ou refuser entre amis : <b>What are you doing tonight?</b> <b>I'm not coming.</b> Tout repose sur <b>be</b> : on l'inverse pour questionner, on ajoute <b>not</b> pour nier.",
    "rule": "1. Négation : <b>I'm not</b> / <b>you aren't</b> / <b>he isn't</b> + -ing.<br>2. Question : <b>Are / Is</b> + sujet + -ing ? ; mot interrogatif devant (What, Who, Where…).<br>3. Réponse courte : <b>Yes, I am. / No, I'm not. / No, he isn't.</b><br>4. Jamais de « do » ici.",
    "examples": [
     {
      "en": "What are you doing tonight?",
      "fr": "Qu'est-ce que tu fais ce soir ?"
     },
     {
      "en": "Are you coming to the pub?",
      "fr": "Tu viens au pub ?"
     },
     {
      "en": "I'm not joking, mate!",
      "fr": "Je ne plaisante pas, mon pote !"
     },
     {
      "en": "She isn't answering her phone.",
      "fr": "Elle ne répond pas à son téléphone."
     },
     {
      "en": "Is it raining? No, it isn't.",
      "fr": "Il pleut ? Non."
     },
     {
      "en": "Who are you texting?",
      "fr": "À qui tu envoies un texto ?"
     }
    ],
    "pitfalls": [
     {
      "wrong": "Do you coming to the pub?",
      "right": "Are you coming to the pub?",
      "why": "On inverse <b>be</b>, on n'utilise pas do."
     },
     {
      "wrong": "I'm no listening.",
      "right": "I'm not listening.",
      "why": "La négation est <b>not</b>, pas no."
     },
     {
      "wrong": "Yes, I'm.",
      "right": "Yes, I am.",
      "why": "Pas de contraction dans une réponse courte affirmative."
     }
    ],
    "exercises": [
     {
      "type": "mcq",
      "q": "Quelle question est correcte ?",
      "opts": [
       "Are you come to the pub?",
       "Do you coming to the pub?",
       "Are you coming to the pub?"
      ],
      "correct": 2,
      "why": "<b>Are you</b> + coming."
     },
     {
      "type": "fill",
      "text": "___ (I / not / joke), mate!",
      "answers": [
       "I'm not joking",
       "I am not joking"
      ],
      "why": "I + <b>'m not</b> + joking (le e tombe)."
     },
     {
      "type": "mcq",
      "q": "« Are you working tomorrow? » Réponse courte (non) :",
      "opts": [
       "No, I don't.",
       "No, I not.",
       "No, I'm no.",
       "No, I'm not."
      ],
      "correct": 3,
      "why": "Réponse négative : <b>No, I'm not.</b>"
     },
     {
      "type": "fill",
      "text": "She ___ (not / answer) her phone.",
      "answers": [
       "isn't answering",
       "is not answering",
       "'s not answering"
      ],
      "why": "she + <b>isn't</b> + answering."
     },
     {
      "type": "speak",
      "en": "What are you doing tonight, mate?",
      "fr": "Tu fais quoi ce soir, mon pote ?"
     },
     {
      "type": "mcq",
      "q": "Is it raining? — No, ___.",
      "opts": [
       "it doesn't",
       "it not",
       "it isn't",
       "it don't"
      ],
      "correct": 2,
      "why": "Réponse courte : <b>No, it isn't.</b>"
     },
     {
      "type": "fill",
      "text": "Who ___ you ___ (text)?",
      "answers": [
       [
        "are"
       ],
       [
        "texting"
       ]
      ],
      "why": "Who + <b>are</b> + you + texting."
     },
     {
      "type": "mcq",
      "q": "Quelle phrase est correcte ?",
      "opts": [
       "I'm no listening to you.",
       "I not listening to you.",
       "I'm not listening to you.",
       "I don't listening to you."
      ],
      "correct": 2,
      "why": "I + <b>'m not</b> + listening."
     },
     {
      "type": "fill",
      "text": "A: Are you having a good time? B: Yes, I ___.",
      "answers": [
       "am"
      ],
      "why": "Réponse courte affirmative : <b>Yes, I am.</b>"
     },
     {
      "type": "fill",
      "text": "___ (we / not / go) out tonight; we're skint.",
      "answers": [
       "We're not going",
       "We aren't going",
       "We are not going"
      ],
      "why": "we + <b>aren't</b> + going. (<i>skint</i> = fauché)"
     },
     {
      "type": "speak",
      "en": "I'm not coming, I'm absolutely knackered.",
      "fr": "Je ne viens pas, je suis crevé."
     },
     {
      "type": "mcq",
      "q": "Where ___ they going?",
      "opts": [
       "do",
       "is",
       "does",
       "are"
      ],
      "correct": 3,
      "why": "they → <b>are</b> : Where are they going?"
     },
     {
      "type": "fill",
      "text": "Is Tom ___ (wait) for us outside? No, he ___.",
      "answers": [
       [
        "waiting"
       ],
       [
        "isn't",
        "is not"
       ]
      ],
      "why": "Question avec -ing ; réponse courte : <b>No, he isn't.</b>"
     }
    ]
   },
   {
    "id": "present-continuous-informal-3",
    "reg": "informal",
    "title": "Orthographe -ing et vie du moment · Informel",
    "why": "Dans un message ou un chat, on écrit vite : <b>running late</b>, <b>chatting</b>, <b>getting ready</b>. Autant bien orthographier le -ing ! Et le present continuous dit aussi ce qui change <b>ces jours-ci</b>.",
    "rule": "1. Cas normal : base + -ing (text → texting).<br>2. Verbe en -e : on enlève le e (dance → dancing).<br>3. Voyelle + consonne : on double (chat → chatting, run → running, swim → swimming, get → getting).<br>4. Britannique : travel → travelling.<br>5. Situation temporaire : <b>this week, these days, at the moment</b>.",
    "examples": [
     {
      "en": "I'm running late, sorry!",
      "fr": "Je suis en retard, désolé !"
     },
     {
      "en": "We're chatting online right now.",
      "fr": "On discute en ligne là, maintenant."
     },
     {
      "en": "Jess is swimming at the leisure centre.",
      "fr": "Jess nage à la piscine municipale."
     },
     {
      "en": "I'm staying at my mum's this week.",
      "fr": "Je loge chez ma mère cette semaine."
     },
     {
      "en": "They're getting ready for the party.",
      "fr": "Ils se préparent pour la soirée."
     },
     {
      "en": "Are you still shopping?",
      "fr": "Tu fais encore les magasins ?"
     }
    ],
    "pitfalls": [
     {
      "wrong": "I'm runing late.",
      "right": "I'm running late.",
      "why": "Voyelle courte + consonne : on <b>double</b> le n."
     },
     {
      "wrong": "She's danceing in the kitchen.",
      "right": "She's dancing in the kitchen.",
      "why": "Le <b>e</b> final disparaît devant -ing."
     },
     {
      "wrong": "He's swiming in the sea.",
      "right": "He's swimming in the sea.",
      "why": "swim → <b>swimming</b> : on double le m."
     }
    ],
    "exercises": [
     {
      "type": "mcq",
      "q": "Quelle est l'orthographe de « swim » + -ing ?",
      "opts": [
       "swiming",
       "swimming",
       "swimeing"
      ],
      "correct": 1,
      "why": "Voyelle courte + m : <b>swimming</b>."
     },
     {
      "type": "fill",
      "text": "Sorry, ___ (I / run) late!",
      "answers": [
       "I'm running",
       "I am running"
      ],
      "why": "run → <b>running</b>."
     },
     {
      "type": "mcq",
      "q": "Quelle phrase est correcte ?",
      "opts": [
       "She's danceing in the kitchen.",
       "She's danncing in the kitchen.",
       "She's dancing in the kitchen."
      ],
      "correct": 2,
      "why": "dance → <b>dancing</b> (le e tombe)."
     },
     {
      "type": "fill",
      "text": "Jess ___ (swim) at the leisure centre right now.",
      "answers": [
       "is swimming",
       "'s swimming"
      ],
      "why": "swim → <b>swimming</b>."
     },
     {
      "type": "speak",
      "en": "I'm staying at my mum's this week.",
      "fr": "Je loge chez ma mère cette semaine."
     },
     {
      "type": "mcq",
      "q": "Quelle est l'orthographe de « get » + -ing ?",
      "opts": [
       "geting",
       "getteing",
       "getting",
       "geteing"
      ],
      "correct": 2,
      "why": "get → <b>getting</b> (double t)."
     },
     {
      "type": "fill",
      "text": "We ___ (chat) online right now.",
      "answers": [
       "are chatting",
       "'re chatting"
      ],
      "why": "chat → <b>chatting</b>."
     },
     {
      "type": "mcq",
      "q": "Quelle phrase décrit une situation temporaire ?",
      "opts": [
       "I live in Leeds.",
       "I work at a bank.",
       "I'm working from home this week."
      ],
      "correct": 2,
      "why": "<b>This week</b> + present continuous = situation temporaire."
     },
     {
      "type": "fill",
      "text": "They ___ (get) ready for the party.",
      "answers": [
       "are getting",
       "'re getting"
      ],
      "why": "get → <b>getting</b>."
     },
     {
      "type": "fill",
      "text": "Prices ___ (go) up these days.",
      "answers": [
       "are going"
      ],
      "why": "<b>These days</b> = tendance du moment : are going."
     },
     {
      "type": "speak",
      "en": "Everyone is dancing and the music is brilliant.",
      "fr": "Tout le monde danse et la musique est géniale."
     },
     {
      "type": "mcq",
      "q": "Quelle expression va avec le present continuous ?",
      "opts": [
       "every Sunday",
       "last year",
       "yesterday",
       "right now"
      ],
      "correct": 3,
      "why": "<b>Right now</b> = en ce moment."
     },
     {
      "type": "fill",
      "text": "He ___ (not / run) today because his knee hurts.",
      "answers": [
       "isn't running",
       "is not running",
       "'s not running"
      ],
      "why": "he + <b>isn't</b> + running."
     }
    ]
   },
   {
    "id": "present-continuous-informal-4",
    "reg": "informal",
    "title": "Projets entre amis, verbes d'état et pièges · Informel",
    "why": "Pour organiser une sortie : <b>What are you doing on Saturday?</b> <b>I'm meeting Sam at six.</b> Mais attention aux verbes d'état : on dit <b>I want a coffee</b>, jamais « I'm wanting ».",
    "rule": "1. Projet déjà arrangé : present continuous + <b>marqueur de futur</b> (tonight, on Saturday, next week).<br>2. Verbes d'état, <b>sans -ing</b> : want, need, know, like, love, hate, understand.<br>3. Négation d'un verbe d'état : <b>I don't like</b> (pas « I'm not liking »).<br>4. Pour les plans : <b>What are you doing…?</b>",
    "examples": [
     {
      "en": "I'm meeting Sam at six on Saturday.",
      "fr": "Je retrouve Sam samedi à six heures."
     },
     {
      "en": "Are you doing anything tonight?",
      "fr": "Tu fais quelque chose ce soir ?"
     },
     {
      "en": "We're cooking for ten people next Sunday.",
      "fr": "On cuisine pour dix personnes dimanche prochain."
     },
     {
      "en": "I know what you mean.",
      "fr": "Je vois ce que tu veux dire."
     },
     {
      "en": "They're flying to Spain on Friday.",
      "fr": "Ils partent en Espagne vendredi en avion."
     },
     {
      "en": "I want a coffee. Do you fancy one?",
      "fr": "Je veux un café. Ça te dit ?"
     }
    ],
    "pitfalls": [
     {
      "wrong": "I'm wanting a coffee.",
      "right": "I want a coffee.",
      "why": "<b>Want</b> est un verbe d'état : pas de -ing."
     },
     {
      "wrong": "I'm knowing what you mean.",
      "right": "I know what you mean.",
      "why": "<b>Know</b> ne se met pas au present continuous."
     },
     {
      "wrong": "I'm not liking this film.",
      "right": "I don't like this film.",
      "why": "<b>Like</b> est un verbe d'état : présent simple."
     }
    ],
    "exercises": [
     {
      "type": "mcq",
      "q": "Quelle phrase est correcte ?",
      "opts": [
       "I'm wanting a coffee.",
       "I wanting a coffee.",
       "I want a coffee."
      ],
      "correct": 2,
      "why": "<b>Want</b> est un verbe d'état : pas de -ing."
     },
     {
      "type": "fill",
      "text": "___ (I / meet) Sam at six on Saturday.",
      "answers": [
       "I'm meeting",
       "I am meeting"
      ],
      "why": "Plan arrangé : <b>I'm meeting</b> + marqueur de futur."
     },
     {
      "type": "mcq",
      "q": "Quel verbe est un verbe d'état ?",
      "opts": [
       "chat",
       "know",
       "plan",
       "wait"
      ],
      "correct": 1,
      "why": "<b>Know</b> n'est pas une action en cours."
     },
     {
      "type": "fill",
      "text": "We ___ (cook) for ten people next Sunday. Wanna come?",
      "answers": [
       "are cooking",
       "'re cooking"
      ],
      "why": "Plan pour dimanche : <b>are cooking</b>."
     },
     {
      "type": "speak",
      "en": "Wanna grab a coffee? I'm meeting Sam later.",
      "fr": "Ça te dit un café ? Je retrouve Sam plus tard."
     },
     {
      "type": "mcq",
      "q": "I ___ what you mean.",
      "opts": [
       "am knowing",
       "knowing",
       "'m knowing",
       "know"
      ],
      "correct": 3,
      "why": "<b>Know</b> : pas de -ing."
     },
     {
      "type": "fill",
      "text": "I ___ (not / like) this film. It's boring.",
      "answers": [
       "don't like",
       "do not like"
      ],
      "why": "<b>Like</b> est un verbe d'état : don't like."
     },
     {
      "type": "mcq",
      "q": "« Ils partent en Espagne vendredi. » =",
      "opts": [
       "They flying to Spain on Friday.",
       "They're fly to Spain on Friday.",
       "They're flying to Spain on Friday."
      ],
      "correct": 2,
      "why": "Plan arrangé : <b>they're flying</b>."
     },
     {
      "type": "fill",
      "text": "What ___ you ___ (do) on Saturday night?",
      "answers": [
       [
        "are"
       ],
       [
        "doing"
       ]
      ],
      "why": "What + <b>are</b> + you + doing."
     },
     {
      "type": "fill",
      "text": "I'm knackered, so I ___ (not / go) out tonight.",
      "answers": [
       "am not going",
       "'m not going"
      ],
      "why": "Plan négatif : I'm <b>not going</b>."
     },
     {
      "type": "speak",
      "en": "Fancy a pint on Friday? We're meeting at eight.",
      "fr": "Une bière vendredi ? On se retrouve à huit heures."
     },
     {
      "type": "mcq",
      "q": "« Are you doing anything tonight? » Réponse naturelle :",
      "opts": [
       "Yes, I'm meeting my cousin.",
       "Yes, I meet my cousin tonight.",
       "Yes, I'm knowing my cousin."
      ],
      "correct": 0,
      "why": "Plan pour ce soir : <b>I'm meeting</b>."
     },
     {
      "type": "fill",
      "text": "I can't come. ___ (I / help) my brother move flat tomorrow.",
      "answers": [
       "I'm helping",
       "I am helping"
      ],
      "why": "Plan fixé : <b>I'm helping</b> + tomorrow."
     }
    ]
   }
  ]
 },
 {
  "id": "temps-en-going-to",
  "group": "temps",
  "icon": "🧭",
  "title": "Le futur proche : be going to",
  "level": "A2",
  "intro": "<b>Be going to</b> : un plan décidé ou une prévision appuyée sur ce qu'on voit. Ici, deux registres : <b>formel</b> (travail, administration, service) et <b>informel</b> (amis, famille).",
  "lessons": [
   {
    "id": "going-to-formal-1",
    "reg": "formal",
    "title": "Annoncer un projet : be going to + verbe · Formel",
    "why": "Pour annoncer poliment un <b>projet déjà décidé</b> (courriel, réunion, hôtel, banque), on utilise <b>be going to</b> : la décision est prise <b>avant</b> de parler.",
    "rule": "1. <b>sujet + am / is / are + going to + verbe de base</b>.<br>2. I <b>am</b> · he / she / it <b>is</b> · you / we / they <b>are</b>.<br>3. Le verbe après <b>to</b> ne change jamais : <i>She is going to call</i> (pas <i>calls</i>, pas <i>calling</i>).<br>4. Dans un courriel professionnel, on écrit volontiers la forme complète : <i>I am going to…</i>, <i>We are going to…</i>",
    "timeline": "avant : ● décision prise ───▶ ● je l'annonce maintenant ───▶ ● le projet (next week)",
    "table": {
     "caption": "be going to : la forme affirmative",
     "headers": [
      "Sujet",
      "Forme",
      "Exemple"
     ],
     "rows": [
      [
       "I",
       "<b>am</b> going to",
       "I am going to attend the meeting."
      ],
      [
       "he / she / it",
       "<b>is</b> going to",
       "The manager is going to reply."
      ],
      [
       "you",
       "<b>are</b> going to",
       "You are going to receive an email."
      ],
      [
       "we",
       "<b>are</b> going to",
       "We are going to open a new branch."
      ],
      [
       "they",
       "<b>are</b> going to",
       "They are going to inspect the hotel."
      ]
     ]
    },
    "examples": [
     {
      "en": "I am going to send you the contract on Monday.",
      "fr": "Je vais vous envoyer le contrat lundi."
     },
     {
      "en": "The bank is going to contact you by letter.",
      "fr": "La banque va vous contacter par courrier."
     },
     {
      "en": "We are going to hold the interview in room 4.",
      "fr": "Nous allons tenir l'entretien en salle 4."
     },
     {
      "en": "Our guests are going to arrive at six o'clock.",
      "fr": "Nos invités vont arriver à dix-huit heures."
     },
     {
      "en": "The receptionist is going to prepare your keys.",
      "fr": "La réceptionniste va préparer vos clés."
     }
    ],
    "pitfalls": [
     {
      "wrong": "We going to open a new branch.",
      "right": "We are going to open a new branch.",
      "why": "Le verbe <b>be</b> est obligatoire : on ne peut pas dire « going to » seul."
     },
     {
      "wrong": "She is going to calls the client.",
      "right": "She is going to call the client.",
      "why": "Après <b>to</b>, le verbe reste à la forme de base : pas de <b>-s</b>."
     },
     {
      "wrong": "I go to send the report tomorrow.",
      "right": "I am going to send the report tomorrow.",
      "why": "« Aller + infinitif » ne se traduit pas par <i>go to</i> mais par <b>be going to</b>."
     }
    ],
    "exercises": [
     {
      "type": "mcq",
      "q": "Our director ___ going to announce the results.",
      "opts": [
       "are",
       "is",
       "am"
      ],
      "correct": 1,
      "why": "Sujet à la 3e personne du singulier : <b>is</b>."
     },
     {
      "type": "fill",
      "text": "We ___ going to open a new branch in Lyon.",
      "answers": [
       "are"
      ],
      "why": "<b>We</b> se conjugue avec <b>are</b>."
     },
     {
      "type": "speak",
      "en": "I am going to send you the report tomorrow.",
      "fr": "Je vais vous envoyer le rapport demain."
     },
     {
      "type": "fill",
      "text": "___ going to reserve a double room for two nights. (I)",
      "answers": [
       "I am",
       "I'm"
      ],
      "why": "<b>I am</b> (ou I'm) + going to + verbe de base."
     },
     {
      "type": "mcq",
      "q": "Quelle phrase est correcte ?",
      "opts": [
       "The manager is going to approves the budget.",
       "The manager going to approve the budget.",
       "The manager is going to approve the budget."
      ],
      "correct": 2,
      "why": "<b>is going to</b> + verbe de base, sans <b>-s</b>."
     },
     {
      "type": "fill",
      "text": "The bank ___ going to contact you by post.",
      "answers": [
       "is"
      ],
      "why": "<b>The bank</b> = it : on emploie <b>is</b>."
     },
     {
      "type": "mcq",
      "q": "« Nous allons vous envoyer une facture. »",
      "opts": [
       "We are going to send you an invoice.",
       "We go to send you an invoice.",
       "We are going send you an invoice."
      ],
      "correct": 0,
      "why": "Il faut <b>are going to</b> : ni <i>go to</i>, ni l'oubli de <i>to</i>."
     },
     {
      "type": "fill",
      "text": "Ms Clarke and Mr Evans ___ going to ___ the contract on Friday. (be / sign)",
      "answers": [
       [
        "are"
       ],
       [
        "sign"
       ]
      ],
      "why": "Sujet pluriel → <b>are</b> ; verbe de base <b>sign</b>."
     },
     {
      "type": "speak",
      "en": "Our colleagues are going to join us at ten o'clock.",
      "fr": "Nos collègues vont nous rejoindre à dix heures."
     },
     {
      "type": "mcq",
      "q": "Après « going to », le verbe est…",
      "opts": [
       "au -ing",
       "conjugué avec -s à he / she / it",
       "à la forme de base, sans -s ni -ing"
      ],
      "correct": 2,
      "why": "<b>to</b> + verbe de base : le verbe ne se conjugue jamais."
     },
     {
      "type": "fill",
      "text": "The accountant is going to ___ the figures this afternoon. (check)",
      "answers": [
       "check"
      ],
      "why": "Après <b>going to</b>, on met la forme de base : <b>check</b>."
     },
     {
      "type": "fill",
      "text": "They ___ going to ___ the new software in March. (be / install)",
      "answers": [
       [
        "are"
       ],
       [
        "install"
       ]
      ],
      "why": "Sujet <b>they</b> → <b>are</b> ; verbe de base <b>install</b>."
     },
     {
      "type": "mcq",
      "q": "Quelle phrase traduit « Je vais examiner votre demande » ?",
      "opts": [
       "I am going to examining your request.",
       "I going to examine your request.",
       "I am going examine your request.",
       "I am going to examine your request."
      ],
      "correct": 3,
      "why": "Structure complète : <b>am going to</b> + verbe de base."
     }
    ]
   },
   {
    "id": "going-to-formal-2",
    "reg": "formal",
    "title": "Nier et questionner poliment · Formel",
    "why": "Au travail, il faut pouvoir dire qu'on <b>ne prévoit pas</b> quelque chose et s'informer des projets de l'autre sans brusquer.",
    "rule": "1. Négation : <b>am not / is not / are not + going to + verbe</b> (isn't, aren't dans les messages courants).<br>2. Question : on inverse <b>be</b> et le sujet : <b>Are you going to…? Is the director going to…?</b> (jamais <i>do</i>).<br>3. Avec un mot interrogatif : <b>What are you going to propose?</b><br>4. Réponse courte : <i>Yes, I am.</i> / <i>No, we are not.</i> On ne reprend que <b>be</b>.",
    "examples": [
     {
      "en": "We are not going to change the schedule.",
      "fr": "Nous n'allons pas modifier le planning."
     },
     {
      "en": "Are you going to attend the meeting?",
      "fr": "Allez-vous assister à la réunion ?"
     },
     {
      "en": "Is the manager going to reply today?",
      "fr": "Le directeur va-t-il répondre aujourd'hui ?"
     },
     {
      "en": "What are you going to propose to the client?",
      "fr": "Que comptez-vous proposer au client ?"
     },
     {
      "en": "No, I am not.",
      "fr": "Non (je ne vais pas le faire)."
     }
    ],
    "pitfalls": [
     {
      "wrong": "You going to attend?",
      "right": "Are you going to attend?",
      "why": "La question se forme en inversant <b>be</b> et le sujet."
     },
     {
      "wrong": "Do you going to sign the contract?",
      "right": "Are you going to sign the contract?",
      "why": "Avec <b>going to</b>, l'auxiliaire est <b>be</b>, jamais <b>do</b>."
     },
     {
      "wrong": "She isn't going to arrives before noon.",
      "right": "She isn't going to arrive before noon.",
      "why": "Après <b>going to</b>, forme de base, même à la forme négative."
     },
     {
      "wrong": "Yes, I do.",
      "right": "Yes, I am.",
      "why": "La réponse courte reprend l'auxiliaire de la question : <b>am / is / are</b>."
     }
    ],
    "exercises": [
     {
      "type": "mcq",
      "q": "Quelle est la forme négative de « The hotel is going to close the spa. » ?",
      "opts": [
       "The hotel does not going to close the spa.",
       "The hotel is not going to close the spa.",
       "The hotel not is going to close the spa."
      ],
      "correct": 1,
      "why": "On place <b>not</b> après <b>is</b> : <b>is not going to</b>."
     },
     {
      "type": "fill",
      "text": "We ___ going to raise our prices this year.",
      "answers": [
       "are not",
       "aren't",
       "'re not",
       "’re not"
      ],
      "why": "Négation : <b>are not</b> / <b>aren't</b>."
     },
     {
      "type": "mcq",
      "q": "Quelle question est correcte ?",
      "opts": [
       "Are you going to attend the meeting?",
       "Do you going to attend the meeting?",
       "You are going attend the meeting?"
      ],
      "correct": 0,
      "why": "On inverse : <b>Are you going to…?</b>"
     },
     {
      "type": "fill",
      "text": "___ the director going to sign the agreement today?",
      "answers": [
       "Is"
      ],
      "why": "Question : <b>Is</b> + sujet + going to."
     },
     {
      "type": "speak",
      "en": "Are you going to attend the conference in May?",
      "fr": "Allez-vous assister à la conférence en mai ?"
     },
     {
      "type": "fill",
      "text": "What ___ you going to say to the board?",
      "answers": [
       "are"
      ],
      "why": "Mot interrogatif + <b>are</b> + sujet + going to."
     },
     {
      "type": "mcq",
      "q": "« Are you going to renew the contract? » — Réponse courte négative :",
      "opts": [
       "No, I don't.",
       "No, I am not going.",
       "No, I am not."
      ],
      "correct": 2,
      "why": "La réponse courte reprend <b>am</b> : <b>No, I am not.</b>"
     },
     {
      "type": "fill",
      "text": "Is Mr Brown going to join us for lunch? Yes, he ___.",
      "answers": [
       "is"
      ],
      "why": "On reprend l'auxiliaire de la question : <b>is</b>."
     },
     {
      "type": "fill",
      "text": "I am afraid we ___ going to offer you the position.",
      "answers": [
       "are not",
       "aren't",
       "'re not",
       "’re not"
      ],
      "why": "Refus poli : <b>are not going to</b>."
     },
     {
      "type": "mcq",
      "q": "Quelle phrase est correcte ?",
      "opts": [
       "She isn't going to arrives before noon.",
       "She doesn't going to arrive before noon.",
       "She not going to arrive before noon.",
       "She isn't going to arrive before noon."
      ],
      "correct": 3,
      "why": "<b>isn't going to</b> + forme de base."
     },
     {
      "type": "speak",
      "en": "We are not going to cancel the reservation.",
      "fr": "Nous n'allons pas annuler la réservation."
     },
     {
      "type": "fill",
      "text": "Excuse me, ___ you going to ___ the invoice today? (be / pay)",
      "answers": [
       [
        "are"
       ],
       [
        "pay"
       ]
      ],
      "why": "Question : <b>are</b> + sujet + going to + <b>pay</b>."
     },
     {
      "type": "mcq",
      "q": "« Que va faire la banque ? »",
      "opts": [
       "What the bank is going to do?",
       "What does the bank going to do?",
       "What is the bank going to do?"
      ],
      "correct": 2,
      "why": "Mot interrogatif + <b>is</b> + sujet + going to + verbe."
     }
    ]
   },
   {
    "id": "going-to-formal-3",
    "reg": "formal",
    "title": "Plan, prévision ou offre : going to, will, Shall I · Formel",
    "why": "<b>Be going to</b> sert pour un <b>plan décidé avant</b> la parole et pour une <b>prévision appuyée sur un indice visible</b>. Une décision ou une offre faite <b>sur le moment</b> se dit avec <b>will</b> ou <b>Shall I…?</b>",
    "rule": "1. Plan déjà décidé : <i>We are going to move to a new office.</i><br>2. Prévision avec indice visible : <i>The profits are rising fast: we are going to beat the record.</i><br>3. Décision ou service immédiat : <i>Certainly, I will bring it now.</i><br>4. Offre polie : <b>Shall I…?</b> / <b>Shall we…?</b><br>5. Test : ai-je décidé avant de parler ? Oui → <b>going to</b>. Non → <b>will</b>.",
    "timeline": "● j'ai décidé hier ───▶ ● je parle (going to)      |      ● je décide en parlant (will)",
    "examples": [
     {
      "en": "We are going to move to a new office in June.",
      "fr": "Nous allons déménager dans de nouveaux bureaux en juin."
     },
     {
      "en": "The sky is very dark. It is going to rain during the reception.",
      "fr": "Le ciel est très sombre. Il va pleuvoir pendant la réception."
     },
     {
      "en": "Certainly, madam. I will bring you a towel.",
      "fr": "Bien sûr, madame. Je vais vous apporter une serviette."
     },
     {
      "en": "Shall I book a taxi for you?",
      "fr": "Souhaitez-vous que je vous réserve un taxi ?"
     },
     {
      "en": "The chairman is going to resign at the end of the year.",
      "fr": "Le président va démissionner à la fin de l'année."
     }
    ],
    "pitfalls": [
     {
      "wrong": "Do I carry your bag, sir?",
      "right": "Shall I carry your bag, sir?",
      "why": "Pour proposer son aide poliment, on dit <b>Shall I…?</b>, pas <i>Do I…?</i>"
     },
     {
      "wrong": "Is it going to to rain?",
      "right": "Is it going to rain?",
      "why": "On n'écrit <b>to</b> qu'une seule fois : <b>going to</b> + verbe de base."
     }
    ],
    "exercises": [
     {
      "type": "mcq",
      "q": "Nuages noirs au-dessus du jardin avant votre réception. Que dites-vous ?",
      "opts": [
       "It is going to rain.",
       "It is going to rains.",
       "It going to rain."
      ],
      "correct": 0,
      "why": "Indice visible → <b>is going to</b> + forme de base."
     },
     {
      "type": "fill",
      "text": "The hotel has already ordered the paint: it ___ going to repaint the lobby.",
      "answers": [
       "is"
      ],
      "why": "Plan déjà décidé → <b>is going to</b>."
     },
     {
      "type": "mcq",
      "q": "Le client dit : « I cannot find a pen. » Vous proposez poliment :",
      "opts": [
       "Am I going to lend you one?",
       "Do I lend you one?",
       "Shall I lend you one?"
      ],
      "correct": 2,
      "why": "Offre polie : <b>Shall I…?</b>"
     },
     {
      "type": "speak",
      "en": "Shall I book a table for you, sir?",
      "fr": "Souhaitez-vous que je vous réserve une table, monsieur ?"
     },
     {
      "type": "fill",
      "text": "The profits are rising fast: we ___ going to beat last year's record.",
      "answers": [
       "are"
      ],
      "why": "Indice visible, sujet <b>we</b> → <b>are going to</b>."
     },
     {
      "type": "mcq",
      "q": "« I am going to apply for the manager's position. » exprime…",
      "opts": [
       "une offre immédiate",
       "un plan déjà décidé",
       "un ordre"
      ],
      "correct": 1,
      "why": "<b>Be going to</b> exprime un plan décidé avant de parler."
     },
     {
      "type": "fill",
      "text": "Certainly, madam. ___ bring your luggage to your room now. (sujet : I)",
      "answers": [
       "I will",
       "I'll",
       "I shall"
      ],
      "why": "Service décidé sur le moment : <b>will</b> (ou <b>shall</b> à la 1re personne, plus soutenu)."
     },
     {
      "type": "mcq",
      "q": "Pour proposer de commencer la réunion :",
      "opts": [
       "Shall we begin the meeting?",
       "Are we shall begin the meeting?",
       "Do we going to begin the meeting?"
      ],
      "correct": 0,
      "why": "Proposition polie : <b>Shall we…?</b>"
     },
     {
      "type": "fill",
      "text": "We have decided: we ___ going to ___ a new supplier next month. (be / choose)",
      "answers": [
       [
        "are"
       ],
       [
        "choose"
       ]
      ],
      "why": "Décision déjà prise → <b>are going to</b> + <b>choose</b>."
     },
     {
      "type": "fill",
      "text": "Shall I ___ your coat, sir? (take)",
      "answers": [
       "take"
      ],
      "why": "Après <b>Shall I</b>, forme de base : <b>take</b>."
     },
     {
      "type": "mcq",
      "q": "Mr Lee a déjà réservé son vol. Quelle phrase est correcte ?",
      "opts": [
       "He goes to travel to Dublin on Monday.",
       "He is going travel to Dublin on Monday.",
       "He is going to travel to Dublin on Monday."
      ],
      "correct": 2,
      "why": "Plan arrêté → <b>is going to travel</b>."
     },
     {
      "type": "speak",
      "en": "The new manager is going to introduce herself tomorrow.",
      "fr": "La nouvelle directrice va se présenter demain."
     },
     {
      "type": "fill",
      "text": "Look at the queue outside! The bank ___ going to be very busy this morning.",
      "answers": [
       "is"
      ],
      "why": "Indice visible + sujet <b>the bank</b> (it) → <b>is going to</b>."
     }
    ]
   },
   {
    "id": "going-to-formal-4",
    "reg": "formal",
    "title": "Marqueurs de temps et situations pros · Formel",
    "why": "Les <b>marqueurs de temps</b> (tomorrow, next week, in two days…) placent le projet dans l'avenir. Ils évitent les erreurs de francophones sur les prépositions et les articles.",
    "rule": "1. Marqueurs : <b>tomorrow, this afternoon, next week / month, soon, later, in two days, on Monday, at the end of the month</b>.<br>2. <b>next</b> et <b>this</b> s'emploient sans <i>the</i> ni <i>on</i> : <i>next week</i>, <i>this evening</i>.<br>3. <b>in</b> + durée = « dans » : <i>in two days</i>.<br>4. En tête de phrase : virgule → <i>Next week, we are going to…</i><br>5. Pas de réflexif : <i>We are going to meet on Monday</i> (pas <i>meet us</i>) ; <b>ask the director</b> (pas <i>ask to</i>).",
    "examples": [
     {
      "en": "Next week, we are going to review your application.",
      "fr": "La semaine prochaine, nous allons examiner votre candidature."
     },
     {
      "en": "The bank is going to send you a statement in two days.",
      "fr": "La banque va vous envoyer un relevé dans deux jours."
     },
     {
      "en": "I am going to call you this afternoon.",
      "fr": "Je vais vous appeler cet après-midi."
     },
     {
      "en": "We are going to announce the results at the end of the month.",
      "fr": "Nous allons annoncer les résultats à la fin du mois."
     },
     {
      "en": "The guests are going to dine in the main restaurant.",
      "fr": "Les invités vont dîner dans le restaurant principal."
     }
    ],
    "pitfalls": [
     {
      "wrong": "We are going to write to you the next week.",
      "right": "We are going to write to you next week.",
      "why": "Pas d'article devant <b>next</b>."
     },
     {
      "wrong": "I am going to ask to the director.",
      "right": "I am going to ask the director.",
      "why": "<b>ask</b> se construit sans préposition devant la personne."
     },
     {
      "wrong": "We are going to meet us on Monday.",
      "right": "We are going to meet on Monday.",
      "why": "<b>meet</b> n'est pas pronominal en anglais."
     }
    ],
    "exercises": [
     {
      "type": "mcq",
      "q": "« Nous vous écrirons la semaine prochaine. »",
      "opts": [
       "We are going to write to you the next week.",
       "We are going to write to you next week.",
       "We are going to write you in next week."
      ],
      "correct": 1,
      "why": "Pas d'article devant <b>next week</b>."
     },
     {
      "type": "fill",
      "text": "The delivery is going to arrive ___ two days.",
      "answers": [
       "in"
      ],
      "why": "<b>in</b> + durée = « dans »."
     },
     {
      "type": "fill",
      "text": "The auditors are going to visit our office ___ Monday. (préposition)",
      "answers": [
       "on"
      ],
      "why": "Un jour de la semaine se construit avec <b>on</b>."
     },
     {
      "type": "mcq",
      "q": "« Je vais demander au directeur. »",
      "opts": [
       "I am going to ask to the director.",
       "I am going to ask the director.",
       "I am going to ask for the director."
      ],
      "correct": 1,
      "why": "<b>ask</b> + personne, sans préposition."
     },
     {
      "type": "speak",
      "en": "The bank is going to send you a statement soon.",
      "fr": "La banque va vous envoyer un relevé bientôt."
     },
     {
      "type": "fill",
      "text": "___ week, we are going to review your application. (prochaine)",
      "answers": [
       "Next",
       "next"
      ],
      "why": "Marqueur de temps : <b>next week</b>, sans article."
     },
     {
      "type": "mcq",
      "q": "Quelle phrase est correcte ?",
      "opts": [
       "We are going to meet us on Monday.",
       "We are going to us meet on Monday.",
       "We are going to meet on Monday."
      ],
      "correct": 2,
      "why": "<b>meet</b> n'est pas réfléchi : « se retrouver » = <b>meet</b>."
     },
     {
      "type": "fill",
      "text": "I apologise for the error. We ___ going to ___ a corrected invoice tomorrow. (be / send)",
      "answers": [
       [
        "are"
       ],
       [
        "send"
       ]
      ],
      "why": "Projet : <b>are going to send</b>."
     },
     {
      "type": "mcq",
      "q": "Quelle phrase est correcte et polie ?",
      "opts": [
       "I am going to send you the contract tomorrow morning.",
       "I am going to send to you the contract tomorrow morning.",
       "I am going send you the contract tomorrow morning."
      ],
      "correct": 0,
      "why": "<b>send you the contract</b> : pas de <i>to</i> devant le complément indirect court."
     },
     {
      "type": "fill",
      "text": "At the end of the year, the company ___ going to ___ a new branch in Bordeaux. (be / open)",
      "answers": [
       [
        "is"
       ],
       [
        "open"
       ]
      ],
      "why": "<b>The company</b> = it → <b>is going to open</b>."
     },
     {
      "type": "speak",
      "en": "Our guests are going to arrive at eight this evening.",
      "fr": "Nos invités vont arriver à vingt heures ce soir."
     },
     {
      "type": "fill",
      "text": "I ___ not going to ___ the meeting tomorrow because I am abroad. (be / attend)",
      "answers": [
       [
        "am"
       ],
       [
        "attend"
       ]
      ],
      "why": "<b>I am not going to attend</b> : <b>am</b> avec <b>I</b>."
     },
     {
      "type": "mcq",
      "q": "« Dans deux jours, nous allons recevoir les résultats. »",
      "opts": [
       "Since two days we are going to receive the results.",
       "In two days we are going receive the results.",
       "During two days we are going to receive the results.",
       "In two days, we are going to receive the results."
      ],
      "correct": 3,
      "why": "<b>in two days</b> = « dans deux jours » ; <b>going to</b> garde son <b>to</b>."
     }
    ]
   },
   {
    "id": "going-to-informal-1",
    "reg": "informal",
    "title": "Dire ce qu'on va faire : I'm going to… · Informel",
    "why": "Entre amis, on dit tout le temps <b>I'm going to…</b> (et à l'oral rapide <b>I'm gonna…</b>) pour annoncer ce qu'on a prévu.",
    "rule": "1. <b>sujet + am / is / are + going to + verbe de base</b>.<br>2. Contractions : <b>I'm, you're, he's, she's, it's, we're, they're</b> + going to.<br>3. À l'oral : <b>gonna</b> = going to. On l'écrit dans les SMS, mais pas dans un courriel pro.<br>4. Le verbe reste à la forme de base : <i>She's going to text you.</i>",
    "timeline": "avant : ● j'ai décidé ───▶ ● maintenant j'en parle ───▶ ● plus tard : je le fais",
    "table": {
     "caption": "be going to : formes courtes",
     "headers": [
      "Sujet",
      "Forme courte",
      "Exemple"
     ],
     "rows": [
      [
       "I",
       "<b>I'm</b> going to",
       "I'm going to order a pizza tonight."
      ],
      [
       "you",
       "<b>you're</b> going to",
       "You're going to love it."
      ],
      [
       "he / she / it",
       "<b>he's / she's / it's</b> going to",
       "She's going to text you."
      ],
      [
       "we",
       "<b>we're</b> going to",
       "We're going to watch a film."
      ],
      [
       "they",
       "<b>they're</b> going to",
       "They're going to stay with us."
      ]
     ]
    },
    "examples": [
     {
      "en": "I'm going to order a pizza tonight.",
      "fr": "Je vais commander une pizza ce soir."
     },
     {
      "en": "We're going to visit my gran on Sunday.",
      "fr": "On va rendre visite à ma grand-mère dimanche."
     },
     {
      "en": "He's going to paint his room.",
      "fr": "Il va peindre sa chambre."
     },
     {
      "en": "She's gonna love this present!",
      "fr": "Elle va adorer ce cadeau !"
     },
     {
      "en": "They're going to stay at our flat.",
      "fr": "Ils vont loger chez nous (dans notre appart)."
     }
    ],
    "pitfalls": [
     {
      "wrong": "We going to eat out.",
      "right": "We're going to eat out.",
      "why": "Il faut <b>be</b> : <b>we're</b> going to."
     },
     {
      "wrong": "I'm going to cooking pasta.",
      "right": "I'm going to cook pasta.",
      "why": "Après <b>to</b>, forme de base, pas de <b>-ing</b>."
     },
     {
      "wrong": "I go to call my mum.",
      "right": "I'm going to call my mum.",
      "why": "« Aller + infinitif » = <b>be going to</b>, pas <i>go to</i>."
     }
    ],
    "exercises": [
     {
      "type": "mcq",
      "q": "My sister ___ going to move to Leeds.",
      "opts": [
       "are",
       "am",
       "is"
      ],
      "correct": 2,
      "why": "<b>My sister</b> = she → <b>is</b>."
     },
     {
      "type": "fill",
      "text": "___ going to bake a cake for Mum's birthday. (I)",
      "answers": [
       "I'm",
       "I am"
      ],
      "why": "<b>I'm</b> (= I am) + going to."
     },
     {
      "type": "speak",
      "en": "We're going to watch a film at my place.",
      "fr": "On va regarder un film chez moi."
     },
     {
      "type": "mcq",
      "q": "« Il va réparer mon vélo. »",
      "opts": [
       "He goes to fix my bike.",
       "He's going to fix my bike.",
       "He's going to fixing my bike."
      ],
      "correct": 1,
      "why": "<b>He's going to</b> + forme de base."
     },
     {
      "type": "fill",
      "text": "My mates ___ going to come round on Saturday.",
      "answers": [
       "are"
      ],
      "why": "<b>My mates</b> = they → <b>are</b>."
     },
     {
      "type": "fill",
      "text": "___ gonna love this present! (she)",
      "answers": [
       "She's",
       "She is"
      ],
      "why": "<b>gonna</b> = going to : <b>She's gonna</b>."
     },
     {
      "type": "mcq",
      "q": "Que veut dire « gonna » ?",
      "opts": [
       "going to",
       "gone to",
       "go on"
      ],
      "correct": 0,
      "why": "<b>gonna</b> est la prononciation rapide de <b>going to</b>."
     },
     {
      "type": "fill",
      "text": "We ___ going to ___ at Tom's flat this weekend. (be / stay)",
      "answers": [
       [
        "are"
       ],
       [
        "stay"
       ]
      ],
      "why": "<b>We are going to stay</b>."
     },
     {
      "type": "mcq",
      "q": "Quelle phrase est correcte ?",
      "opts": [
       "I'm going to cooking pasta tonight.",
       "I'm go to cook pasta tonight.",
       "I going to cook pasta tonight.",
       "I'm going to cook pasta tonight."
      ],
      "correct": 3,
      "why": "<b>I'm going to</b> + forme de base."
     },
     {
      "type": "fill",
      "text": "They ___ going to ___ a new game tomorrow. (be / play)",
      "answers": [
       [
        "are"
       ],
       [
        "play"
       ]
      ],
      "why": "<b>They are going to play</b>."
     },
     {
      "type": "speak",
      "en": "I'm gonna grab a sandwich before the match.",
      "fr": "Je vais me prendre un sandwich avant le match."
     },
     {
      "type": "fill",
      "text": "Mum says she's ___ to call us at six. (going)",
      "answers": [
       "going"
      ],
      "why": "<b>she's going to</b> : projet de maman."
     },
     {
      "type": "mcq",
      "q": "« Je vais faire du café, tu en veux ? »",
      "opts": [
       "I'm going to make some coffee. Do you want some?",
       "I go to make some coffee. Do you want some?",
       "I'm going make some coffee. Do you want some?"
      ],
      "correct": 0,
      "why": "<b>I'm going to make</b> : be + going + to + forme de base."
     }
    ]
   },
   {
    "id": "going-to-informal-2",
    "reg": "informal",
    "title": "Nier, questionner, répondre vite · Informel",
    "why": "Entre amis, on dit vite « je ne vais pas… » et on pose des questions courtes avec des réponses encore plus courtes.",
    "rule": "1. Négation : <b>I'm not / you aren't / he isn't + going to + verbe</b>.<br>2. Question : <b>Are you going to come? Is she going to cook?</b> On inverse, on n'utilise pas <i>do</i>.<br>3. Mot interrogatif en tête : <b>Where are you going to stay?</b><br>4. Réponse courte : <i>Yes, I am. / No, I'm not. / Yes, she is. / No, they aren't.</i> Jamais <i>Yes, I'm</i> ni <i>I amn't</i>.",
    "examples": [
     {
      "en": "I'm not going to watch that film again.",
      "fr": "Je ne vais pas revoir ce film."
     },
     {
      "en": "Are you going to come to Sam's party?",
      "fr": "Tu vas venir à la fête de Sam ?"
     },
     {
      "en": "Where are you going to stay in Rome?",
      "fr": "Tu vas loger où à Rome ?"
     },
     {
      "en": "Is Jack going to cook? No, he isn't.",
      "fr": "Jack va cuisiner ? Non."
     },
     {
      "en": "We aren't going to wait for Jack.",
      "fr": "On ne va pas attendre Jack."
     }
    ],
    "pitfalls": [
     {
      "wrong": "Yes, I'm.",
      "right": "Yes, I am.",
      "why": "En réponse courte, <b>am</b> ne se contracte pas."
     },
     {
      "wrong": "Do you going to come?",
      "right": "Are you going to come?",
      "why": "L'auxiliaire est <b>be</b> : on inverse <b>are</b> et le sujet."
     },
     {
      "wrong": "I amn't going to pay.",
      "right": "I'm not going to pay.",
      "why": "La négation de <b>I am</b> se dit <b>I'm not</b> (pas d'<i>amn't</i>)."
     }
    ],
    "exercises": [
     {
      "type": "mcq",
      "q": "« Je ne vais pas payer. »",
      "opts": [
       "I amn't going to pay.",
       "I'm not going to pay.",
       "I don't going to pay."
      ],
      "correct": 1,
      "why": "Négation : <b>I'm not going to</b>."
     },
     {
      "type": "fill",
      "text": "We ___ going to miss the bus again!",
      "answers": [
       "are not",
       "aren't"
      ],
      "why": "Négation : <b>aren't going to</b>."
     },
     {
      "type": "mcq",
      "q": "Quelle question est correcte ?",
      "opts": [
       "Are you going to come to the party?",
       "Do you going to come to the party?",
       "You are going come to the party?"
      ],
      "correct": 0,
      "why": "<b>Are you going to…?</b> : on inverse <b>are</b> et le sujet."
     },
     {
      "type": "fill",
      "text": "Where ___ you going to stay in Rome?",
      "answers": [
       "are"
      ],
      "why": "Mot interrogatif + <b>are</b> + sujet."
     },
     {
      "type": "speak",
      "en": "Are you going to cook tonight or order a takeaway?",
      "fr": "Tu vas cuisiner ce soir ou commander à emporter ?"
     },
     {
      "type": "mcq",
      "q": "Is Jack going to cook? — « Non. »",
      "opts": [
       "No, he doesn't.",
       "No, he isn't going.",
       "No, he isn't."
      ],
      "correct": 2,
      "why": "Réponse courte : on reprend <b>is</b> : <b>No, he isn't.</b>"
     },
     {
      "type": "fill",
      "text": "Are they going to come tonight? Yes, they ___.",
      "answers": [
       "are"
      ],
      "why": "On reprend l'auxiliaire : <b>are</b>."
     },
     {
      "type": "fill",
      "text": "I'm ___ going to lend him any more money. (not)",
      "answers": [
       "not"
      ],
      "why": "<b>I'm not going to</b>."
     },
     {
      "type": "mcq",
      "q": "« Are you going to tell her? » — Réponse courte positive :",
      "opts": [
       "Yes, I'm.",
       "Yes, I do.",
       "Yes, I'm going.",
       "Yes, I am."
      ],
      "correct": 3,
      "why": "<b>Yes, I am.</b> : jamais de contraction en fin de réponse."
     },
     {
      "type": "fill",
      "text": "What ___ they going to ___ for dinner? (be / cook)",
      "answers": [
       [
        "are"
       ],
       [
        "cook"
       ]
      ],
      "why": "<b>What are they going to cook?</b>"
     },
     {
      "type": "speak",
      "en": "I'm not going to tell you what she said.",
      "fr": "Je ne vais pas te dire ce qu'elle a dit."
     },
     {
      "type": "fill",
      "text": "Is your brother going to ___ to the party? (come)",
      "answers": [
       "come"
      ],
      "why": "Après <b>going to</b>, forme de base : <b>come</b>."
     },
     {
      "type": "mcq",
      "q": "Quelle phrase est correcte ?",
      "opts": [
       "She isn't going to ask him.",
       "She doesn't going to ask him.",
       "She not going to ask him.",
       "She isn't going to asks him."
      ],
      "correct": 0,
      "why": "<b>isn't going to</b> + forme de base."
     }
    ]
   },
   {
    "id": "going-to-informal-3",
    "reg": "informal",
    "title": "Plan, prévision ou « j'y vais » : going to ou I'll · Informel",
    "why": "Entre amis : <b>going to</b> pour ce qu'on a déjà décidé et pour ce qu'on voit venir (« Watch out! You're going to fall! »). Pour une décision prise sur le coup, on dit <b>I'll…</b>",
    "rule": "1. Plan décidé : <i>I'm going to start jogging.</i><br>2. Prévision avec indice visible : <i>Look at those clouds. It's going to rain.</i><br>3. Décision ou réflexe sur le moment : <i>There's no milk. I'll pop to the shop.</i><br>4. Test rapide : j'y avais déjà pensé ? Oui → <b>going to</b>. Non, je décide là → <b>I'll</b>.",
    "examples": [
     {
      "en": "I'm going to visit my cousin in Glasgow next month.",
      "fr": "Je vais rendre visite à mon cousin à Glasgow le mois prochain."
     },
     {
      "en": "Watch out! You're going to spill your tea.",
      "fr": "Attention ! Tu vas renverser ton thé."
     },
     {
      "en": "There's no milk. I'll pop to the shop.",
      "fr": "Il n'y a plus de lait. Je file au magasin."
     },
     {
      "en": "Look at his face. He's going to cry.",
      "fr": "Regarde sa tête. Il va pleurer."
     },
     {
      "en": "I'm knackered, so I'm going to have an early night.",
      "fr": "Je suis crevé, donc je vais me coucher tôt."
     },
     {
      "en": "This bag is heavy. I'll carry it.",
      "fr": "Ce sac est lourd. Je le porte."
     }
    ],
    "pitfalls": [
     {
      "wrong": "I think it rains tomorrow.",
      "right": "I think it's going to rain tomorrow.",
      "why": "Le présent ne sert pas à prévoir en anglais : on dit <b>it's going to rain</b>."
     },
     {
      "wrong": "Tonight I stay in.",
      "right": "Tonight I'm going to stay in.",
      "why": "Pour un projet, le présent simple ne convient pas : <b>be going to</b>."
     }
    ],
    "exercises": [
     {
      "type": "mcq",
      "q": "Le verre est au bord de la table. Que dites-vous ?",
      "opts": [
       "It's going to fall!",
       "It falls!",
       "It's going fall!"
      ],
      "correct": 0,
      "why": "Indice visible → <b>it's going to</b> + forme de base."
     },
     {
      "type": "fill",
      "text": "I'm shattered, so I'm ___ to have a nap. (going)",
      "answers": [
       "going"
      ],
      "why": "<b>I'm going to have</b> : plan de sieste."
     },
     {
      "type": "mcq",
      "q": "Il n'y a plus de lait. Décision sur le moment :",
      "opts": [
       "I pop to the shop.",
       "I'll pop to the shop.",
       "I'm go to pop to the shop."
      ],
      "correct": 1,
      "why": "Décision immédiate → <b>I'll</b> + forme de base."
     },
     {
      "type": "fill",
      "text": "Look at those black clouds! It ___ going to ___ . (be / rain)",
      "answers": [
       [
        "is"
       ],
       [
        "rain"
       ]
      ],
      "why": "Indice visible → <b>is going to rain</b>."
     },
     {
      "type": "speak",
      "en": "I'm going to learn the guitar this summer.",
      "fr": "Je vais apprendre la guitare cet été."
     },
     {
      "type": "mcq",
      "q": "« I'm going to start jogging next week. » exprime…",
      "opts": [
       "une offre",
       "une décision sur le moment",
       "un plan déjà décidé"
      ],
      "correct": 2,
      "why": "<b>Be going to</b> annonce un plan décidé avant de parler."
     },
     {
      "type": "fill",
      "text": "There's no sugar. OK, ___ get some from next door. (I will)",
      "answers": [
       "I'll",
       "I will"
      ],
      "why": "Décision sur le moment → <b>I'll</b>."
     },
     {
      "type": "mcq",
      "q": "« Je pense qu'il pleuvra demain. »",
      "opts": [
       "I think it rains tomorrow.",
       "I think it will to rain tomorrow.",
       "I think it is going rain tomorrow.",
       "I think it's going to rain tomorrow."
      ],
      "correct": 3,
      "why": "Prévision : <b>it's going to rain</b> (pas de présent simple)."
     },
     {
      "type": "fill",
      "text": "I can't be bothered to cook, so we ___ going to order a takeaway.",
      "answers": [
       "are"
      ],
      "why": "Plan décidé → <b>we are going to order</b>."
     },
     {
      "type": "fill",
      "text": "My brother says he's ___ going to lend me his car. (not)",
      "answers": [
       "not"
      ],
      "why": "Négation : <b>he's not going to</b>."
     },
     {
      "type": "speak",
      "en": "It's freezing in here. I'll shut the window.",
      "fr": "Il fait glacial ici. Je ferme la fenêtre."
     },
     {
      "type": "mcq",
      "q": "— It's hot in here! — « ___ open a window. »",
      "opts": [
       "I'm going",
       "I'll",
       "I go to"
      ],
      "correct": 1,
      "why": "Réflexe immédiat : <b>I'll open</b>."
     },
     {
      "type": "fill",
      "text": "Tonight ___ going to stay in and watch telly. (I)",
      "answers": [
       "I'm",
       "I am"
      ],
      "why": "<b>I'm going to stay</b> : plan pour ce soir."
     }
    ]
   },
   {
    "id": "going-to-informal-4",
    "reg": "informal",
    "title": "Marqueurs, pièges et petites histoires · Informel",
    "why": "Pour dire <b>ce soir, demain, ce week-end</b>, on ajoute un marqueur de temps. Les francophones butent sur le présent à la place de <b>going to</b>, sur les verbes pronominaux et sur les prépositions (<b>wait for</b>).",
    "rule": "1. Marqueurs : <b>tonight, tomorrow, this weekend, next summer, later, soon, in a bit, in ten minutes, any minute now</b>.<br>2. Pas de <i>the</i> devant <b>next</b> ; <b>in</b> + durée = « dans ».<br>3. <b>wait for</b>, <b>look at</b>, <b>listen to</b> gardent leur préposition après going to.<br>4. Pas de réfléchi : <i>We're going to meet at eight</i> (pas <i>meet us</i>).",
    "examples": [
     {
      "en": "Tomorrow I'm going to see my gran.",
      "fr": "Demain je vais voir ma grand-mère."
     },
     {
      "en": "We're going to meet at the pub at eight.",
      "fr": "On va se retrouver au pub à vingt heures."
     },
     {
      "en": "Hang on, I'm going to wait for you outside.",
      "fr": "Attends, je vais t'attendre dehors."
     },
     {
      "en": "Next summer, we're going to rent a villa in Portugal.",
      "fr": "L'été prochain, on va louer une villa au Portugal."
     },
     {
      "en": "The film is going to start in ten minutes.",
      "fr": "Le film va commencer dans dix minutes."
     },
     {
      "en": "Fancy a pint? I'm going to buy a round.",
      "fr": "Une bière ? Je paie une tournée."
     }
    ],
    "pitfalls": [
     {
      "wrong": "Tomorrow I visit my gran.",
      "right": "Tomorrow I'm going to visit my gran.",
      "why": "Pour un projet, on utilise <b>be going to</b>, pas le présent simple."
     },
     {
      "wrong": "We're going to meet us at eight.",
      "right": "We're going to meet at eight.",
      "why": "<b>meet</b> n'est pas pronominal en anglais."
     },
     {
      "wrong": "I'm going to wait you outside.",
      "right": "I'm going to wait for you outside.",
      "why": "<b>wait</b> demande <b>for</b> devant la personne."
     }
    ],
    "exercises": [
     {
      "type": "mcq",
      "q": "« Ce soir je vais cuisiner pour mes amis. »",
      "opts": [
       "Tonight I'm going to cook for my friends.",
       "Tonight I cook for my friends.",
       "Tonight I'm going cook for my friends."
      ],
      "correct": 0,
      "why": "<b>I'm going to cook</b> : be + going + to + forme de base."
     },
     {
      "type": "fill",
      "text": "We're going to ___ at the pub at eight. (meet)",
      "answers": [
       "meet"
      ],
      "why": "Forme de base, sans réfléchi : <b>meet</b>."
     },
     {
      "type": "fill",
      "text": "Hang on, I'm going to wait ___ you outside. (préposition)",
      "answers": [
       "for"
      ],
      "why": "<b>wait for</b> quelqu'un."
     },
     {
      "type": "mcq",
      "q": "« Le film va commencer dans dix minutes. »",
      "opts": [
       "The film is going to start since ten minutes.",
       "The film is going to start in ten minutes.",
       "The film is going to start during ten minutes.",
       "The film is going to start for ten minutes."
      ],
      "correct": 1,
      "why": "<b>in</b> + durée = « dans »."
     },
     {
      "type": "speak",
      "en": "Fancy a pint? I'm going to buy the first round.",
      "fr": "Une bière ? Je paie la première tournée."
     },
     {
      "type": "fill",
      "text": "Next summer, we ___ going to rent a villa in Portugal. (be)",
      "answers": [
       "are"
      ],
      "why": "<b>We are going to rent</b>."
     },
     {
      "type": "mcq",
      "q": "Quelle phrase est correcte ?",
      "opts": [
       "She's going to gets up early tomorrow.",
       "She's going to get up early the tomorrow.",
       "She's going to get up early tomorrow.",
       "She's going to getting up early tomorrow."
      ],
      "correct": 2,
      "why": "Forme de base après <b>to</b> ; pas d'article devant <b>tomorrow</b>."
     },
     {
      "type": "fill",
      "text": "Any minute now, the bus ___ going to ___ . (be / arrive)",
      "answers": [
       [
        "is"
       ],
       [
        "arrive"
       ]
      ],
      "why": "<b>The bus is going to arrive</b>."
     },
     {
      "type": "mcq",
      "q": "« On va regarder le match chez Tom. »",
      "opts": [
       "We go to watch the match at Tom's.",
       "We're going to watch the match at Tom's.",
       "We're going to look the match at Tom's."
      ],
      "correct": 1,
      "why": "<b>watch</b> un match ; <b>we're going to</b> + forme de base."
     },
     {
      "type": "fill",
      "text": "I'm ___ to tell you a secret, but don't tell anyone. (going)",
      "answers": [
       "going"
      ],
      "why": "<b>I'm going to tell</b>."
     },
     {
      "type": "speak",
      "en": "He's gonna be so happy with his new bike!",
      "fr": "Il va être trop content de son nouveau vélo !"
     },
     {
      "type": "fill",
      "text": "It's late and I can't be bothered. I'm ___ going to cook tonight. (not)",
      "answers": [
       "not"
      ],
      "why": "<b>I'm not going to cook</b>."
     },
     {
      "type": "mcq",
      "q": "Quelle phrase est correcte et naturelle ?",
      "opts": [
       "Are you going to wait me outside later?",
       "Do you going to wait for me outside later?",
       "Are you going wait for me outside later?",
       "Are you going to wait for me outside later?"
      ],
      "correct": 3,
      "why": "<b>Are you going to wait for me</b> : inversion, <b>to</b>, et <b>wait for</b>."
     }
    ]
   }
  ]
 },
 {
  "id": "temps-en-past-simple",
  "group": "temps",
  "icon": "⏪",
  "title": "Le past simple",
  "level": "A1-A2",
  "intro": "Le past simple raconte une action <b>terminée</b> à un moment du passé. Ici, deux registres : <b>formel</b> (travail, administration, service) et <b>informel</b> (amis, famille).",
  "lessons": [
   {
    "id": "past-simple-formal-1",
    "reg": "formal",
    "title": "Past simple régulier : -ed et orthographe · Formel",
    "why": "Dans un courriel ou une réunion, on raconte ce qui s'est <b>terminé</b> à un moment précis du passé : « I called the bank yesterday ». Le past simple n'a <b>qu'une seule forme</b> pour toutes les personnes.",
    "rule": "1. Verbe régulier : base + <b>-ed</b> (work → worked).<br>2. Verbe en -e : + <b>-d</b> (arrive → arrived).<br>3. Consonne + y : <b>-ied</b> (study → studied) ; voyelle + y : + -ed (play → played).<br>4. Une syllabe voyelle + consonne : on <b>double</b> la consonne (stop → stopped).<br>5. Même forme pour I, you, he, she, we, they.<br>6. Marqueurs : <b>yesterday</b>, <b>last week</b>, <b>on Monday</b>, <b>in 2019</b>.",
    "timeline": "● yesterday (we discussed) ─────────── now ───▶",
    "table": {
     "caption": "Verbes réguliers : formation",
     "headers": [
      "Règle",
      "Base",
      "Past simple"
     ],
     "rows": [
      [
       "+ -ed",
       "work",
       "work<b>ed</b>"
      ],
      [
       "verbe en -e : + -d",
       "arrive",
       "arrive<b>d</b>"
      ],
      [
       "consonne + y : -ied",
       "study",
       "stud<b>ied</b>"
      ],
      [
       "consonne doublée",
       "stop",
       "stop<b>ped</b>"
      ],
      [
       "voyelle + y : + -ed",
       "play",
       "play<b>ed</b>"
      ]
     ]
    },
    "examples": [
     {
      "en": "I called the bank yesterday.",
      "fr": "J'ai appelé la banque hier."
     },
     {
      "en": "We discussed the budget on Monday.",
      "fr": "Nous avons discuté du budget lundi."
     },
     {
      "en": "She arrived at the hotel at nine.",
      "fr": "Elle est arrivée à l'hôtel à neuf heures."
     },
     {
      "en": "The manager approved my request.",
      "fr": "Le directeur a approuvé ma demande."
     },
     {
      "en": "I studied finance at university.",
      "fr": "J'ai étudié la finance à l'université."
     },
     {
      "en": "They stopped the meeting at noon.",
      "fr": "Ils ont arrêté la réunion à midi."
     }
    ],
    "pitfalls": [
     {
      "wrong": "Yesterday I call the bank.",
      "right": "Yesterday I called the bank.",
      "why": "Avec « yesterday », le verbe prend <b>-ed</b>."
     },
     {
      "wrong": "She arriveed at nine.",
      "right": "She arrived at nine.",
      "why": "Verbe déjà en -e : on ajoute seulement <b>-d</b>."
     },
     {
      "wrong": "He studyed finance.",
      "right": "He studied finance.",
      "why": "Consonne + y : le y devient <b>-ied</b>."
     }
    ],
    "exercises": [
     {
      "type": "mcq",
      "q": "« Hier, j'ai appelé la banque. » =",
      "opts": [
       "I call the bank yesterday.",
       "I called the bank yesterday.",
       "I calling the bank yesterday."
      ],
      "correct": 1,
      "why": "Action terminée : base + <b>-ed</b>."
     },
     {
      "type": "fill",
      "text": "The manager ___ (approve) my request on Friday.",
      "answers": [
       "approved"
      ],
      "why": "Verbe en -e : + <b>-d</b>."
     },
     {
      "type": "fill",
      "text": "We ___ (discuss) the budget with the auditors.",
      "answers": [
       "discussed"
      ],
      "why": "Base + <b>-ed</b> : discussed."
     },
     {
      "type": "mcq",
      "q": "Quel est le past simple de « study » ?",
      "opts": [
       "studyed",
       "studed",
       "studdied",
       "studied"
      ],
      "correct": 3,
      "why": "Consonne + y → <b>-ied</b>."
     },
     {
      "type": "speak",
      "en": "We discussed the new contract yesterday morning.",
      "fr": "Nous avons discuté du nouveau contrat hier matin."
     },
     {
      "type": "fill",
      "text": "The driver ___ (stop) outside the hotel entrance.",
      "answers": [
       "stopped"
      ],
      "why": "Une syllabe voyelle + consonne : on <b>double</b> le p."
     },
     {
      "type": "mcq",
      "q": "Quelle phrase est correcte ?",
      "opts": [
       "She arrive at nine yesterday.",
       "She arriveed at nine yesterday.",
       "She arrived at nine yesterday."
      ],
      "correct": 2,
      "why": "arrive finit par -e : seulement <b>-d</b>."
     },
     {
      "type": "fill",
      "text": "Our director ___ (open) the conference at nine o'clock.",
      "answers": [
       "opened"
      ],
      "why": "Base + <b>-ed</b> : opened."
     },
     {
      "type": "mcq",
      "q": "Dans « He worked late », le -ed de worked se prononce…",
      "opts": [
       "/d/",
       "/ɪd/",
       "/t/"
      ],
      "correct": 2,
      "why": "Après un son sourd (k), -ed se prononce <b>/t/</b>."
     },
     {
      "type": "fill",
      "text": "I ___ (call) the supplier and he ___ (reply) immediately.",
      "answers": [
       [
        "called"
       ],
       [
        "replied"
       ]
      ],
      "why": "call + ed ; reply : consonne + y → <b>-ied</b>."
     },
     {
      "type": "speak",
      "en": "The manager approved my holiday request last week.",
      "fr": "Le directeur a approuvé ma demande de congé la semaine dernière."
     },
     {
      "type": "mcq",
      "q": "Quel verbe double sa consonne finale au past simple ?",
      "opts": [
       "plan → planned",
       "open → opened",
       "visit → visited"
      ],
      "correct": 0,
      "why": "plan : une syllabe, voyelle + consonne → <b>double</b> n. Open et visit ne doublent pas."
     },
     {
      "type": "fill",
      "text": "Last year the company ___ (employ) fifty new staff.",
      "answers": [
       "employed"
      ],
      "why": "voyelle + y : on ajoute simplement <b>-ed</b>."
     }
    ]
   },
   {
    "id": "past-simple-formal-2",
    "reg": "formal",
    "title": "Verbes irréguliers courants et marqueurs de temps · Formel",
    "why": "Beaucoup des verbes les plus utiles au bureau sont <b>irréguliers</b> : il faut apprendre leur forme passée, qui ne prend pas -ed. Ils restent invariables à toutes les personnes.",
    "rule": "1. go → <b>went</b>, have → <b>had</b>, see → <b>saw</b>, take → <b>took</b>, give → <b>gave</b>.<br>2. write → <b>wrote</b>, send → <b>sent</b>, meet → <b>met</b>, pay → <b>paid</b>, buy → <b>bought</b>.<br>3. speak → <b>spoke</b>, tell → <b>told</b>, come → <b>came</b>, make → <b>made</b>.<br>4. Pas de -ed sur ces verbes.<br>5. Marqueurs : <b>yesterday</b>, <b>last Friday</b>, <b>two days ago</b>, <b>in March</b>.",
    "examples": [
     {
      "en": "I wrote to the manager last week.",
      "fr": "J'ai écrit au directeur la semaine dernière."
     },
     {
      "en": "Our guests came by taxi.",
      "fr": "Nos invités sont venus en taxi."
     },
     {
      "en": "The client paid the invoice on Tuesday.",
      "fr": "Le client a réglé la facture mardi."
     },
     {
      "en": "We met the director at the conference.",
      "fr": "Nous avons rencontré le directeur à la conférence."
     },
     {
      "en": "She sent the documents by courier.",
      "fr": "Elle a envoyé les documents par coursier."
     },
     {
      "en": "He took a taxi to the airport.",
      "fr": "Il a pris un taxi pour l'aéroport."
     }
    ],
    "pitfalls": [
     {
      "wrong": "I writed an email to the client.",
      "right": "I wrote an email to the client.",
      "why": "write est irrégulier : <b>wrote</b>, jamais « writed »."
     },
     {
      "wrong": "She buyed the tickets online.",
      "right": "She bought the tickets online.",
      "why": "buy → <b>bought</b>."
     },
     {
      "wrong": "He gived me the keys.",
      "right": "He gave me the keys.",
      "why": "give → <b>gave</b>."
     }
    ],
    "exercises": [
     {
      "type": "mcq",
      "q": "Quel est le past simple de « go » ?",
      "opts": [
       "goed",
       "went",
       "gone"
      ],
      "correct": 1,
      "why": "go → <b>went</b>."
     },
     {
      "type": "fill",
      "text": "I ___ (write) to the manager last week.",
      "answers": [
       "wrote"
      ],
      "why": "write → <b>wrote</b>."
     },
     {
      "type": "fill",
      "text": "The client ___ (pay) the invoice on Tuesday.",
      "answers": [
       "paid"
      ],
      "why": "pay → <b>paid</b>."
     },
     {
      "type": "mcq",
      "q": "Quelle phrase est correcte ?",
      "opts": [
       "We met the director yesterday.",
       "We meeted the director yesterday.",
       "We meet the director yesterday."
      ],
      "correct": 0,
      "why": "meet → <b>met</b>."
     },
     {
      "type": "speak",
      "en": "The receptionist gave me the room key.",
      "fr": "La réceptionniste m'a donné la clé de la chambre."
     },
     {
      "type": "fill",
      "text": "She ___ (send) the documents by courier on Monday.",
      "answers": [
       "sent"
      ],
      "why": "send → <b>sent</b>."
     },
     {
      "type": "mcq",
      "q": "« Il a pris un taxi. » =",
      "opts": [
       "He taked a taxi.",
       "He tooked a taxi.",
       "He took a taxi."
      ],
      "correct": 2,
      "why": "take → <b>took</b>."
     },
     {
      "type": "fill",
      "text": "The delegation ___ (have) lunch at the hotel restaurant.",
      "answers": [
       "had"
      ],
      "why": "have → <b>had</b>."
     },
     {
      "type": "fill",
      "text": "Mr Brown ___ (buy) the tickets and ___ (give) them to his assistant.",
      "answers": [
       [
        "bought"
       ],
       [
        "gave"
       ]
      ],
      "why": "buy → bought ; give → gave."
     },
     {
      "type": "mcq",
      "q": "Laquelle de ces formes est fausse ?",
      "opts": [
       "spoke",
       "sended",
       "made"
      ],
      "correct": 1,
      "why": "send → <b>sent</b>, pas « sended »."
     },
     {
      "type": "speak",
      "en": "I spoke to the bank manager this morning.",
      "fr": "J'ai parlé au directeur de la banque ce matin."
     },
     {
      "type": "fill",
      "text": "Our colleagues ___ (see) the new offices and ___ (tell) us about them.",
      "answers": [
       [
        "saw"
       ],
       [
        "told"
       ]
      ],
      "why": "see → saw ; tell → told."
     },
     {
      "type": "fill",
      "text": "The company opened its first branch ten years ___.",
      "answers": [
       "ago"
      ],
      "why": "<b>ago</b> se place après la durée et appelle le past simple."
     }
    ]
   },
   {
    "id": "past-simple-formal-3",
    "reg": "formal",
    "title": "Négation, questions et réponses courtes avec did · Formel",
    "why": "Pour poser une question polie ou signaler un manque (« I did not receive… »), on utilise l'auxiliaire <b>did</b>. Il porte le passé : le verbe qui suit reste à la <b>base</b>.",
    "rule": "1. Négation : sujet + <b>did not</b> (didn't) + base : I did not receive.<br>2. Question : <b>Did</b> + sujet + base ? : Did you attend ?<br>3. Question en wh- : When / Where / Why / What time + <b>did</b> + sujet + base.<br>4. Réponses courtes : Yes, I <b>did</b>. / No, I <b>did not</b> (didn't).<br>5. Après did, jamais de -ed ni de forme irrégulière.",
    "examples": [
     {
      "en": "I did not receive your email on Monday.",
      "fr": "Je n'ai pas reçu votre courriel lundi."
     },
     {
      "en": "Did you attend the meeting this morning?",
      "fr": "Avez-vous assisté à la réunion ce matin ?"
     },
     {
      "en": "When did you apply for this position?",
      "fr": "Quand avez-vous postulé à ce poste ?"
     },
     {
      "en": "Did you enjoy your stay? – Yes, we did, thank you.",
      "fr": "Avez-vous apprécié votre séjour ? – Oui, merci."
     },
     {
      "en": "The bank did not accept my application.",
      "fr": "La banque n'a pas accepté ma demande."
     },
     {
      "en": "What time did the delegation leave?",
      "fr": "À quelle heure la délégation est-elle partie ?"
     }
    ],
    "pitfalls": [
     {
      "wrong": "Did you received my letter?",
      "right": "Did you receive my letter?",
      "why": "Après <b>did</b>, le verbe reste à la base."
     },
     {
      "wrong": "I did not wrote to him.",
      "right": "I did not write to him.",
      "why": "did not porte déjà le passé : <b>write</b>, pas wrote."
     },
     {
      "wrong": "Where you stayed last night?",
      "right": "Where did you stay last night?",
      "why": "En anglais, la question au passé demande <b>did</b>."
     }
    ],
    "exercises": [
     {
      "type": "mcq",
      "q": "« Je n'ai pas reçu votre courriel. » =",
      "opts": [
       "I not received your email.",
       "I did not receive your email.",
       "I did not received your email."
      ],
      "correct": 1,
      "why": "did not + <b>base</b>."
     },
     {
      "type": "fill",
      "text": "Négatif : I ___ (receive) your invoice last week.",
      "answers": [
       "did not receive",
       "didn't receive"
      ],
      "why": "Négation : <b>did not</b> + base."
     },
     {
      "type": "fill",
      "text": "___ you attend the training session yesterday?",
      "answers": [
       "Did",
       "did"
      ],
      "why": "Question au passé : <b>Did</b> + sujet + base."
     },
     {
      "type": "mcq",
      "q": "Réponse courte à « Did you enjoy your stay? »",
      "opts": [
       "Yes, I enjoyed.",
       "Yes, I do.",
       "Yes, I did."
      ],
      "correct": 2,
      "why": "On reprend l'auxiliaire : <b>Yes, I did</b>."
     },
     {
      "type": "speak",
      "en": "I did not receive the confirmation yesterday.",
      "fr": "Je n'ai pas reçu la confirmation hier."
     },
     {
      "type": "fill",
      "text": "When ___ you apply for this position?",
      "answers": [
       "did"
      ],
      "why": "Question en wh- : mot interrogatif + <b>did</b> + sujet + base."
     },
     {
      "type": "fill",
      "text": "Négatif : The bank ___ (accept) my application.",
      "answers": [
       "did not accept",
       "didn't accept"
      ],
      "why": "<b>did not</b> + base : accept."
     },
     {
      "type": "mcq",
      "q": "Quelle question est correcte ?",
      "opts": [
       "What time did the delegation leave?",
       "What time did the delegation left?",
       "What time the delegation left?"
      ],
      "correct": 0,
      "why": "Après did : <b>leave</b> à la base."
     },
     {
      "type": "fill",
      "text": "Did you see the ceremony? – No, we ___. We arrived too late.",
      "answers": [
       "did not",
       "didn't"
      ],
      "why": "Réponse négative courte : <b>No, we did not</b>."
     },
     {
      "type": "fill",
      "text": "Why ___ you leave your previous job? – I ___ (want) a new challenge.",
      "answers": [
       [
        "did"
       ],
       [
        "wanted"
       ]
      ],
      "why": "Question : did + base ; réponse affirmative : <b>wanted</b>."
     },
     {
      "type": "mcq",
      "q": "Dans « Did she sign the contract? », le verbe sign est…",
      "opts": [
       "à la base, sans -ed",
       "au passé : signed",
       "à la 3e personne : signs"
      ],
      "correct": 0,
      "why": "did porte le passé : <b>sign</b> reste à la base."
     },
     {
      "type": "speak",
      "en": "Did you attend the conference in Manchester?",
      "fr": "Avez-vous assisté à la conférence à Manchester ?"
     },
     {
      "type": "fill",
      "text": "Négatif : The shipment ___ (leave) the warehouse on time.",
      "answers": [
       "did not leave",
       "didn't leave"
      ],
      "why": "<b>did not</b> + base : leave."
     }
    ]
   },
   {
    "id": "past-simple-formal-4",
    "reg": "formal",
    "title": "Was / were, pièges et mises en situation · Formel",
    "why": "Le verbe <b>be</b> est une exception : il a son propre past simple (<b>was / were</b>) et il n'utilise <b>jamais did</b>. C'est la source de nombreuses erreurs de francophones.",
    "rule": "1. I, he, she, it → <b>was</b> ; you, we, they → <b>were</b>.<br>2. Négation : <b>was not</b> (wasn't) / <b>were not</b> (weren't).<br>3. Question : <b>Was</b> he… ? / <b>Were</b> you… ? (inversion, sans did).<br>4. Réponses courtes : Yes, it was. / No, we were not.<br>5. Marqueurs : <b>last month</b>, <b>two days ago</b>, <b>yesterday</b>.",
    "examples": [
     {
      "en": "I was in a meeting at ten o'clock.",
      "fr": "J'étais en réunion à dix heures."
     },
     {
      "en": "The rooms were not ready when we arrived.",
      "fr": "Les chambres n'étaient pas prêtes à notre arrivée."
     },
     {
      "en": "Were you satisfied with the service?",
      "fr": "Étiez-vous satisfait du service ?"
     },
     {
      "en": "Mr Smith was absent last Thursday.",
      "fr": "M. Smith était absent jeudi dernier."
     },
     {
      "en": "Was the invoice correct?",
      "fr": "La facture était-elle correcte ?"
     },
     {
      "en": "We were delighted with your assistance.",
      "fr": "Nous avons été ravis de votre aide."
     }
    ],
    "pitfalls": [
     {
      "wrong": "Did you were at the meeting?",
      "right": "Were you at the meeting?",
      "why": "<b>be</b> ne prend pas did : on inverse directement."
     },
     {
      "wrong": "I didn't was in the office.",
      "right": "I was not in the office.",
      "why": "Négation de be : <b>was not</b>, sans did."
     },
     {
      "wrong": "The rooms was not ready.",
      "right": "The rooms were not ready.",
      "why": "Sujet pluriel → <b>were</b>."
     }
    ],
    "exercises": [
     {
      "type": "mcq",
      "q": "The directors ___ in Paris last week.",
      "opts": [
       "was",
       "were",
       "did be"
      ],
      "correct": 1,
      "why": "Sujet pluriel : <b>were</b>."
     },
     {
      "type": "fill",
      "text": "I ___ in a meeting at ten o'clock yesterday.",
      "answers": [
       "was"
      ],
      "why": "I → <b>was</b>."
     },
     {
      "type": "fill",
      "text": "The rooms ___ not ready when we arrived.",
      "answers": [
       "were"
      ],
      "why": "Sujet pluriel → <b>were</b>."
     },
     {
      "type": "mcq",
      "q": "« Étiez-vous satisfait du service ? » =",
      "opts": [
       "Did you be satisfied with the service?",
       "Was you satisfied with the service?",
       "Were you satisfied with the service?"
      ],
      "correct": 2,
      "why": "you → <b>were</b>, question par inversion."
     },
     {
      "type": "speak",
      "en": "The hotel was excellent and the staff were helpful.",
      "fr": "L'hôtel était excellent et le personnel serviable."
     },
     {
      "type": "fill",
      "text": "Mr Smith ___ in the office last Thursday. He was ill.",
      "answers": [
       "was not",
       "wasn't"
      ],
      "why": "Négation de be : <b>was not</b>."
     },
     {
      "type": "fill",
      "text": "___ the invoice correct? – No, it ___ not.",
      "answers": [
       [
        "Was"
       ],
       [
        "was"
       ]
      ],
      "why": "Question : <b>Was</b> it… ? ; réponse : it <b>was</b> not."
     },
     {
      "type": "mcq",
      "q": "Quelle question est correcte ?",
      "opts": [
       "Was the manager in the office?",
       "Did the manager was in the office?",
       "Did the manager be in the office?"
      ],
      "correct": 0,
      "why": "be s'inverse, <b>sans did</b>."
     },
     {
      "type": "fill",
      "text": "The conference ___ in Leeds two days ___.",
      "answers": [
       [
        "was"
       ],
       [
        "ago"
       ]
      ],
      "why": "Sujet singulier → was ; <b>ago</b> marque le passé."
     },
     {
      "type": "mcq",
      "q": "Quel groupe de mots est typique du past simple ?",
      "opts": [
       "next month",
       "last month",
       "at the moment"
      ],
      "correct": 1,
      "why": "<b>last month</b> désigne un moment terminé."
     },
     {
      "type": "fill",
      "text": "Where ___ you last night? – We ___ at a business dinner.",
      "answers": [
       [
        "were"
       ],
       [
        "were"
       ]
      ],
      "why": "you et we → <b>were</b>."
     },
     {
      "type": "speak",
      "en": "We were very pleased with your assistance.",
      "fr": "Nous avons été très satisfaits de votre aide."
     },
     {
      "type": "fill",
      "text": "The speakers ___ (be) excellent, and the audience ___ (ask) many questions.",
      "answers": [
       [
        "were"
       ],
       [
        "asked"
       ]
      ],
      "why": "Pluriel → were ; ask + <b>-ed</b>."
     }
    ]
   },
   {
    "id": "past-simple-informal-1",
    "reg": "informal",
    "title": "Past simple régulier : -ed et orthographe · Informel",
    "why": "Entre amis, on raconte sa soirée ou son week-end avec le <b>past simple</b> : « I texted Mum last night ». Une seule forme pour toutes les personnes, c'est très simple.",
    "rule": "1. Verbe régulier : base + <b>-ed</b> (walk → walked).<br>2. Verbe en -e : + <b>-d</b> (love → loved).<br>3. Consonne + y : <b>-ied</b> (cry → cried) ; voyelle + y : + -ed (play → played).<br>4. Une syllabe voyelle + consonne : on <b>double</b> la consonne (chat → chatted).<br>5. Même forme pour I, you, he, she, we, they.<br>6. Marqueurs : <b>last night</b>, <b>yesterday</b>, <b>ten minutes ago</b>.",
    "timeline": "● last night (I texted) ─────────── now ───▶",
    "table": {
     "caption": "Verbes réguliers : formation",
     "headers": [
      "Règle",
      "Base",
      "Past simple"
     ],
     "rows": [
      [
       "+ -ed",
       "walk",
       "walk<b>ed</b>"
      ],
      [
       "verbe en -e : + -d",
       "love",
       "love<b>d</b>"
      ],
      [
       "consonne + y : -ied",
       "cry",
       "cr<b>ied</b>"
      ],
      [
       "consonne doublée",
       "chat",
       "chat<b>ted</b>"
      ],
      [
       "voyelle + y : + -ed",
       "play",
       "play<b>ed</b>"
      ]
     ]
    },
    "examples": [
     {
      "en": "I texted Mum last night.",
      "fr": "J'ai envoyé un texto à maman hier soir."
     },
     {
      "en": "We walked home after the gig.",
      "fr": "Nous sommes rentrés à pied après le concert."
     },
     {
      "en": "Dan called me ten minutes ago.",
      "fr": "Dan m'a appelé il y a dix minutes."
     },
     {
      "en": "I loved that film!",
      "fr": "J'ai adoré ce film !"
     },
     {
      "en": "We chatted for ages.",
      "fr": "On a discuté pendant des heures."
     },
     {
      "en": "She cried at the end of the film.",
      "fr": "Elle a pleuré à la fin du film."
     }
    ],
    "pitfalls": [
     {
      "wrong": "Yesterday I walk home.",
      "right": "Yesterday I walked home.",
      "why": "Avec « yesterday », on met <b>-ed</b>."
     },
     {
      "wrong": "She cryed all night.",
      "right": "She cried all night.",
      "why": "Consonne + y → <b>-ied</b>."
     },
     {
      "wrong": "We chated for ages.",
      "right": "We chatted for ages.",
      "why": "Une syllabe voyelle + consonne : on <b>double</b> le t."
     }
    ],
    "exercises": [
     {
      "type": "mcq",
      "q": "« On est rentrés à pied. » =",
      "opts": [
       "We walked home.",
       "We walk home.",
       "We walkd home."
      ],
      "correct": 0,
      "why": "Action terminée : base + <b>-ed</b>."
     },
     {
      "type": "fill",
      "text": "I ___ (text) Mum last night.",
      "answers": [
       "texted"
      ],
      "why": "Base + <b>-ed</b> : texted."
     },
     {
      "type": "fill",
      "text": "We ___ (chat) for ages after the gig.",
      "answers": [
       "chatted"
      ],
      "why": "Une syllabe voyelle + consonne : <b>double</b> le t."
     },
     {
      "type": "mcq",
      "q": "Quel est le past simple de « cry » ?",
      "opts": [
       "cryed",
       "criied",
       "cried"
      ],
      "correct": 2,
      "why": "Consonne + y → <b>-ied</b>."
     },
     {
      "type": "speak",
      "en": "I loved that film so much!",
      "fr": "J'ai tellement adoré ce film !"
     },
     {
      "type": "fill",
      "text": "Dan ___ (call) me ten minutes ago.",
      "answers": [
       "called"
      ],
      "why": "Base + <b>-ed</b> : called."
     },
     {
      "type": "fill",
      "text": "My mate ___ (invite) us to his birthday party.",
      "answers": [
       "invited"
      ],
      "why": "invite + <b>-d</b> à la fin."
     },
     {
      "type": "mcq",
      "q": "Quel verbe prend seulement un -d ?",
      "opts": [
       "play → played",
       "love → loved",
       "visit → visited"
      ],
      "correct": 1,
      "why": "love finit déjà par -e : on ajoute <b>-d</b>."
     },
     {
      "type": "fill",
      "text": "We ___ (laugh) all night and Tom ___ (try) karaoke.",
      "answers": [
       [
        "laughed"
       ],
       [
        "tried"
       ]
      ],
      "why": "laugh + ed ; try : consonne + y → <b>-ied</b>."
     },
     {
      "type": "mcq",
      "q": "Dans « I wanted pizza », le -ed de wanted se prononce…",
      "opts": [
       "/t/",
       "/d/",
       "/ɪd/"
      ],
      "correct": 2,
      "why": "Après t ou d, -ed se prononce <b>/ɪd/</b>."
     },
     {
      "type": "speak",
      "en": "We watched three episodes last night.",
      "fr": "On a regardé trois épisodes hier soir."
     },
     {
      "type": "fill",
      "text": "She ___ (stay) at her nan's last weekend.",
      "answers": [
       "stayed"
      ],
      "why": "voyelle + y : on ajoute simplement <b>-ed</b>."
     },
     {
      "type": "fill",
      "text": "I ___ (miss) the bus, so I ___ (phone) my dad.",
      "answers": [
       [
        "missed"
       ],
       [
        "phoned"
       ]
      ],
      "why": "Verbes réguliers : base + <b>-ed</b>."
     }
    ]
   },
   {
    "id": "past-simple-informal-2",
    "reg": "informal",
    "title": "Verbes irréguliers courants et marqueurs de temps · Informel",
    "why": "Quand on raconte sa journée à un ami, les verbes les plus fréquents sont <b>irréguliers</b> : went, had, saw, ate… Il faut les connaître par cœur, ils ne prennent pas -ed.",
    "rule": "1. go → <b>went</b>, have → <b>had</b>, get → <b>got</b>, come → <b>came</b>, see → <b>saw</b>.<br>2. eat → <b>ate</b>, drink → <b>drank</b>, sleep → <b>slept</b>, say → <b>said</b>.<br>3. buy → <b>bought</b>, take → <b>took</b>, lose → <b>lost</b>.<br>4. Pas de -ed sur ces verbes.<br>5. Marqueurs : <b>last weekend</b>, <b>on Saturday</b>, <b>two days ago</b>, <b>this morning</b>.",
    "examples": [
     {
      "en": "I went to a gig on Saturday.",
      "fr": "Je suis allé à un concert samedi."
     },
     {
      "en": "We had a blast!",
      "fr": "On s'est éclatés !"
     },
     {
      "en": "She got a new phone last week.",
      "fr": "Elle a eu un nouveau portable la semaine dernière."
     },
     {
      "en": "I ate loads of chips.",
      "fr": "J'ai mangé plein de chips."
     },
     {
      "en": "He lost his keys again.",
      "fr": "Il a encore perdu ses clés."
     },
     {
      "en": "I saw Jess two days ago.",
      "fr": "J'ai vu Jess il y a deux jours."
     }
    ],
    "pitfalls": [
     {
      "wrong": "I goed to the pub.",
      "right": "I went to the pub.",
      "why": "go est irrégulier : <b>went</b>."
     },
     {
      "wrong": "We eated pizza.",
      "right": "We ate pizza.",
      "why": "eat → <b>ate</b>."
     },
     {
      "wrong": "She comed late.",
      "right": "She came late.",
      "why": "come → <b>came</b>."
     }
    ],
    "exercises": [
     {
      "type": "mcq",
      "q": "Quel est le past simple de « eat » ?",
      "opts": [
       "eated",
       "eaten",
       "ate"
      ],
      "correct": 2,
      "why": "eat → <b>ate</b>."
     },
     {
      "type": "fill",
      "text": "I ___ (go) to Ben's party on Saturday.",
      "answers": [
       "went"
      ],
      "why": "go → <b>went</b>."
     },
     {
      "type": "fill",
      "text": "We ___ (have) a blast at the festival!",
      "answers": [
       "had"
      ],
      "why": "have → <b>had</b>."
     },
     {
      "type": "mcq",
      "q": "She ___ a new phone last week.",
      "opts": [
       "got",
       "gets",
       "getted"
      ],
      "correct": 0,
      "why": "get → <b>got</b>."
     },
     {
      "type": "speak",
      "en": "I went to the pub with my cousins.",
      "fr": "Je suis allé au pub avec mes cousins."
     },
     {
      "type": "fill",
      "text": "Jess ___ (come) round for dinner on Friday.",
      "answers": [
       "came"
      ],
      "why": "come → <b>came</b>."
     },
     {
      "type": "fill",
      "text": "He ___ (lose) his keys again, the muppet!",
      "answers": [
       "lost"
      ],
      "why": "lose → <b>lost</b>."
     },
     {
      "type": "mcq",
      "q": "Quelle phrase est correcte ?",
      "opts": [
       "I sleeped till noon.",
       "I slept till noon.",
       "I sleep till noon yesterday."
      ],
      "correct": 1,
      "why": "sleep → <b>slept</b>."
     },
     {
      "type": "fill",
      "text": "I ___ (buy) a hoodie, but I ___ (take) it back the next day.",
      "answers": [
       [
        "bought"
       ],
       [
        "took"
       ]
      ],
      "why": "buy → bought ; take → took."
     },
     {
      "type": "mcq",
      "q": "Laquelle de ces formes est un passé irrégulier ?",
      "opts": [
       "said",
       "watched",
       "wanted"
      ],
      "correct": 0,
      "why": "say → <b>said</b> ; les autres sont réguliers."
     },
     {
      "type": "speak",
      "en": "We ate loads of chips after the match.",
      "fr": "On a mangé plein de chips après le match."
     },
     {
      "type": "fill",
      "text": "I ___ (see) Jess in town two days ago.",
      "answers": [
       "saw"
      ],
      "why": "see → <b>saw</b>."
     },
     {
      "type": "fill",
      "text": "Mia ___ (say) bye and ___ (go) home early.",
      "answers": [
       [
        "said"
       ],
       [
        "went"
       ]
      ],
      "why": "say → said ; go → went."
     }
    ]
   },
   {
    "id": "past-simple-informal-3",
    "reg": "informal",
    "title": "Négation, questions et réponses courtes avec did · Informel",
    "why": "Entre amis, on demande « Did you watch the match? » et on répond « Yeah, I did ». L'auxiliaire <b>did / didn't</b> porte le passé : le verbe reste à la <b>base</b>.",
    "rule": "1. Négation : sujet + <b>didn't</b> + base : I didn't go.<br>2. Question : <b>Did</b> + sujet + base ? : Did you see it ?<br>3. Question en wh- : Where / Why / What time + <b>did</b> + sujet + base.<br>4. Réponses courtes : Yeah, I <b>did</b>. / Nope, I <b>didn't</b>.<br>5. Après did / didn't, jamais de -ed ni de forme irrégulière.",
    "examples": [
     {
      "en": "I didn't go out last night.",
      "fr": "Je ne suis pas sorti hier soir."
     },
     {
      "en": "Did you see the match? – Yeah, I did.",
      "fr": "Tu as vu le match ? – Ouais."
     },
     {
      "en": "Where did you get those trainers?",
      "fr": "Où as-tu eu ces baskets ?"
     },
     {
      "en": "Why didn't Sam text you back?",
      "fr": "Pourquoi Sam ne t'a pas répondu ?"
     },
     {
      "en": "He didn't fancy a pint.",
      "fr": "Il n'avait pas envie d'une pinte."
     },
     {
      "en": "Did she like the pizza? – No, she didn't.",
      "fr": "Elle a aimé la pizza ? – Non."
     }
    ],
    "pitfalls": [
     {
      "wrong": "I didn't went to school.",
      "right": "I didn't go to school.",
      "why": "Après <b>didn't</b>, le verbe reste à la base."
     },
     {
      "wrong": "Did you saw the match?",
      "right": "Did you see the match?",
      "why": "Après <b>did</b>, base : see, pas saw."
     },
     {
      "wrong": "I no watched it.",
      "right": "I didn't watch it.",
      "why": "La négation du passé se fait avec <b>didn't</b>, pas avec « no »."
     }
    ],
    "exercises": [
     {
      "type": "mcq",
      "q": "« Je n'ai pas aimé le film. » =",
      "opts": [
       "I didn't liked the film.",
       "I didn't like the film.",
       "I no liked the film."
      ],
      "correct": 1,
      "why": "didn't + <b>base</b>."
     },
     {
      "type": "fill",
      "text": "Négatif : We ___ (go) out last night. We stayed in.",
      "answers": [
       "didn't go",
       "did not go"
      ],
      "why": "Négation : <b>didn't</b> + base."
     },
     {
      "type": "fill",
      "text": "___ you watch the match on Saturday?",
      "answers": [
       "Did",
       "did"
      ],
      "why": "Question au passé : <b>Did</b> + sujet + base."
     },
     {
      "type": "mcq",
      "q": "Réponse courte à « Did you fancy a pint? »",
      "opts": [
       "Yeah, I fancied.",
       "Yeah, I do.",
       "Yeah, I did."
      ],
      "correct": 2,
      "why": "On reprend l'auxiliaire : <b>Yeah, I did</b>."
     },
     {
      "type": "speak",
      "en": "Why didn't you call me back?",
      "fr": "Pourquoi tu ne m'as pas rappelé ?"
     },
     {
      "type": "fill",
      "text": "Where ___ you get those trainers?",
      "answers": [
       "did"
      ],
      "why": "Question en wh- : mot interrogatif + <b>did</b> + sujet + base."
     },
     {
      "type": "fill",
      "text": "Négatif : Dan ___ (eat) breakfast, so now he wants pizza.",
      "answers": [
       "didn't eat",
       "did not eat"
      ],
      "why": "<b>didn't</b> + base : eat."
     },
     {
      "type": "mcq",
      "q": "Quelle question est correcte ?",
      "opts": [
       "Did you saw Tom yesterday?",
       "Did you seen Tom yesterday?",
       "Did you see Tom yesterday?"
      ],
      "correct": 2,
      "why": "Après did : <b>see</b> à la base."
     },
     {
      "type": "fill",
      "text": "Did Mia like the pizza? – No, she ___.",
      "answers": [
       "didn't",
       "did not"
      ],
      "why": "Réponse négative courte : <b>No, she didn't</b>."
     },
     {
      "type": "fill",
      "text": "What time ___ you get home? – I ___ (get) back at midnight.",
      "answers": [
       [
        "did"
       ],
       [
        "got"
       ]
      ],
      "why": "Question : did + base ; réponse affirmative : <b>got</b>."
     },
     {
      "type": "mcq",
      "q": "Dans « He didn't ring me », pourquoi dit-on ring et pas rang ?",
      "opts": [
       "didn't porte déjà le passé",
       "ring est irrégulier",
       "he est au singulier"
      ],
      "correct": 0,
      "why": "Après <b>didn't</b>, le verbe reste à la base."
     },
     {
      "type": "speak",
      "en": "I didn't have time to text you.",
      "fr": "Je n'ai pas eu le temps de t'envoyer un texto."
     },
     {
      "type": "fill",
      "text": "___ your sister ___ (come) to the party?",
      "answers": [
       [
        "Did"
       ],
       [
        "come"
       ]
      ],
      "why": "Question : <b>Did</b> + sujet + base."
     }
    ]
   },
   {
    "id": "past-simple-informal-4",
    "reg": "informal",
    "title": "Was / were, pièges et mises en situation · Informel",
    "why": "« It was brilliant! », « We weren't home »… Le verbe <b>be</b> a son propre passé (<b>was / were</b>) et n'utilise <b>jamais did / didn't</b>. Les francophones ont aussi tendance à calquer « je suis allé ».",
    "rule": "1. I, he, she, it → <b>was</b> ; you, we, they → <b>were</b>.<br>2. Négation : <b>wasn't</b> / <b>weren't</b>.<br>3. Question : <b>Was</b> it… ? / <b>Were</b> you… ? (inversion, sans did).<br>4. « Je suis allé » = <b>I went</b> (jamais « I was went »).<br>5. Marqueurs : <b>last night</b>, <b>last summer</b>, <b>an hour ago</b>.",
    "examples": [
     {
      "en": "I was knackered after the gig.",
      "fr": "J'étais crevé après le concert."
     },
     {
      "en": "The party was brilliant.",
      "fr": "La fête était géniale."
     },
     {
      "en": "We weren't at home last weekend.",
      "fr": "On n'était pas à la maison le week-end dernier."
     },
     {
      "en": "Were you at Sam's last night?",
      "fr": "Tu étais chez Sam hier soir ?"
     },
     {
      "en": "It was freezing, so we left.",
      "fr": "Il faisait un froid glacial, alors on est partis."
     },
     {
      "en": "My mates were late again.",
      "fr": "Mes potes étaient encore en retard."
     }
    ],
    "pitfalls": [
     {
      "wrong": "Did you were at the party?",
      "right": "Were you at the party?",
      "why": "<b>be</b> ne prend pas did : on inverse."
     },
     {
      "wrong": "I was went to the cinema.",
      "right": "I went to the cinema.",
      "why": "went est déjà un passé : pas de <b>was</b> devant (≠ « je suis allé »)."
     },
     {
      "wrong": "It were a great night.",
      "right": "It was a great night.",
      "why": "it → <b>was</b>."
     }
    ],
    "exercises": [
     {
      "type": "mcq",
      "q": "The party ___ brilliant!",
      "opts": [
       "was",
       "were",
       "did be"
      ],
      "correct": 0,
      "why": "Sujet singulier : <b>was</b>."
     },
     {
      "type": "fill",
      "text": "I ___ so tired on Sunday that I stayed in bed.",
      "answers": [
       "was"
      ],
      "why": "I → <b>was</b>."
     },
     {
      "type": "fill",
      "text": "We ___ at home last weekend; we were at my gran's.",
      "answers": [
       "weren't",
       "were not"
      ],
      "why": "Négation de be : <b>weren't</b>."
     },
     {
      "type": "mcq",
      "q": "Quelle question est correcte ?",
      "opts": [
       "Did you be at Sam's last night?",
       "Was you at Sam's last night?",
       "Were you at Sam's last night?"
      ],
      "correct": 2,
      "why": "you → <b>were</b>, question par inversion."
     },
     {
      "type": "speak",
      "en": "It was freezing, so we went home.",
      "fr": "Il faisait glacial, alors on est rentrés."
     },
     {
      "type": "fill",
      "text": "My mates ___ late again, as usual.",
      "answers": [
       "were"
      ],
      "why": "Sujet pluriel → <b>were</b>."
     },
     {
      "type": "mcq",
      "q": "« Je suis allé au cinéma hier. » =",
      "opts": [
       "I went to the cinema yesterday.",
       "I was went to the cinema yesterday.",
       "I am went to the cinema yesterday."
      ],
      "correct": 0,
      "why": "En anglais, <b>went</b> suffit : pas d'auxiliaire be."
     },
     {
      "type": "fill",
      "text": "___ the film good? – Nah, it ___.",
      "answers": [
       [
        "Was"
       ],
       [
        "wasn't",
        "was not"
       ]
      ],
      "why": "Question : <b>Was</b> it… ? ; réponse négative : it <b>wasn't</b>."
     },
     {
      "type": "mcq",
      "q": "Quelle phrase est au past simple ?",
      "opts": [
       "I'm at the gym now.",
       "I was at the gym an hour ago.",
       "I'll be at the gym later."
      ],
      "correct": 1,
      "why": "<b>an hour ago</b> + was : action passée."
     },
     {
      "type": "fill",
      "text": "We ___ (go) to Brighton last summer and the weather ___ awful.",
      "answers": [
       [
        "went"
       ],
       [
        "was"
       ]
      ],
      "why": "go → went ; weather singulier → <b>was</b>."
     },
     {
      "type": "speak",
      "en": "Last night was a proper laugh.",
      "fr": "Hier soir, on s'est vraiment marrés."
     },
     {
      "type": "fill",
      "text": "Where ___ you last Friday? – We ___ at the cinema.",
      "answers": [
       [
        "were"
       ],
       [
        "were"
       ]
      ],
      "why": "you et we → <b>were</b>."
     },
     {
      "type": "fill",
      "text": "I ___ (wake) up late, ___ (miss) my bus and ___ (text) my flatmate.",
      "answers": [
       [
        "woke"
       ],
       [
        "missed"
       ],
       [
        "texted"
       ]
      ],
      "why": "wake → woke (irrégulier) ; missed et texted : <b>-ed</b>."
     }
    ]
   }
  ]
 },
 {
  "id": "temps-en-present-perfect",
  "group": "temps",
  "icon": "🧳",
  "title": "Le present perfect",
  "level": "A2",
  "intro": "<b>Have/has + participe passé</b> : expérience, résultat présent, durée avec for/since. Ici, deux registres : <b>formel</b> (travail, administration, service) et <b>informel</b> (amis, famille).",
  "lessons": [
   {
    "id": "present-perfect-formal-1",
    "reg": "formal",
    "title": "Formation : have / has + participe passé · Formel",
    "why": "En contexte professionnel, le <b>present perfect</b> annonce ce qui <b>est fait</b> et qui compte maintenant : « I have attached the invoice » (la facture est jointe).",
    "rule": "1. <b>have</b> (I, you, we, they) ou <b>has</b> (he, she, it, un nom singulier).<br>2. + <b>participe passé</b> : réguliers en <b>-ed</b> (attach → attached) ; irréguliers à connaître (send → sent, write → written, see → seen, make → made, give → given, buy → bought).<br>3. Dans un courriel formel, on garde souvent la forme complète (I have, she has) plutôt que I've, she's.",
    "timeline": "passé ──────●────────▶ MAINTENANT : le résultat compte",
    "table": {
     "caption": "have / has + participe passé",
     "headers": [
      "Sujet",
      "Auxiliaire",
      "Exemple"
     ],
     "rows": [
      [
       "I / you / we / they",
       "have",
       "We have booked a table."
      ],
      [
       "he / she / it",
       "has",
       "She has approved the plan."
      ],
      [
       "verbes réguliers",
       "+ -ed",
       "attach → have attached"
      ],
      [
       "verbes irréguliers",
       "forme à apprendre",
       "send → have sent"
      ]
     ]
    },
    "examples": [
     {
      "en": "I have attached the invoice to this email.",
      "fr": "J'ai joint la facture à ce courriel."
     },
     {
      "en": "Our manager has approved your request.",
      "fr": "Notre responsable a approuvé votre demande."
     },
     {
      "en": "We have booked a table for eight o'clock.",
      "fr": "Nous avons réservé une table pour huit heures."
     },
     {
      "en": "The bank has sent you a new card.",
      "fr": "La banque vous a envoyé une nouvelle carte."
     },
     {
      "en": "Ms Taylor has written to the committee.",
      "fr": "Mme Taylor a écrit au comité."
     },
     {
      "en": "The guests have arrived at reception.",
      "fr": "Les invités sont arrivés à la réception.",
      "note": "« arrive » se conjugue avec have, pas avec be."
     }
    ],
    "pitfalls": [
     {
      "wrong": "I have wrote to the director.",
      "right": "I have written to the director.",
      "why": "Le participe passé de write est <b>written</b>, pas wrote."
     },
     {
      "wrong": "She have approved the budget.",
      "right": "She has approved the budget.",
      "why": "À la 3e personne du singulier, on utilise <b>has</b>."
     },
     {
      "wrong": "I have finish the report.",
      "right": "I have finished the report.",
      "why": "Après have, il faut le <b>participe passé</b> (-ed)."
     }
    ],
    "exercises": [
     {
      "type": "mcq",
      "q": "« Nous avons réservé une salle. »",
      "opts": [
       "We are booked a room.",
       "We has booked a room.",
       "We have booked a room."
      ],
      "correct": 2,
      "why": "Sujet <b>we</b> → have + participe passé (booked)."
     },
     {
      "type": "fill",
      "text": "I ___ (attach) the contract to this email.",
      "answers": [
       "have attached",
       "'ve attached",
       "’ve attached"
      ],
      "why": "I → <b>have</b> + attached."
     },
     {
      "type": "mcq",
      "q": "Quel est le participe passé de « write » ?",
      "opts": [
       "wrote",
       "written",
       "writed"
      ],
      "correct": 1,
      "why": "Write est irrégulier : write – wrote – <b>written</b>."
     },
     {
      "type": "fill",
      "text": "Our director ___ (approve) the budget.",
      "answers": [
       "has approved"
      ],
      "why": "Our director = he/she → <b>has</b> + approved."
     },
     {
      "type": "speak",
      "en": "I have attached the invoice to this email.",
      "fr": "J'ai joint la facture à ce courriel."
     },
     {
      "type": "mcq",
      "q": "Choisissez la phrase correcte.",
      "opts": [
       "The receptionist has called a taxi.",
       "The receptionist have called a taxi.",
       "The receptionist has call a taxi."
      ],
      "correct": 0,
      "why": "Sujet singulier → <b>has</b> + participe passé (called)."
     },
     {
      "type": "fill",
      "text": "The hotel ___ (send) us a confirmation.",
      "answers": [
       "has sent"
      ],
      "why": "Send est irrégulier : sent. Hotel → <b>has</b>."
     },
     {
      "type": "fill",
      "text": "Mr Evans and Ms Clark ___ (arrive) at the meeting room.",
      "answers": [
       "have arrived"
      ],
      "why": "Deux personnes = they → <b>have</b> arrived."
     },
     {
      "type": "mcq",
      "q": "« Elle a pris une décision. »",
      "opts": [
       "She has maked a decision.",
       "She have made a decision.",
       "She has made a decision."
      ],
      "correct": 2,
      "why": "Make est irrégulier : make – made – made ; she → has."
     },
     {
      "type": "fill",
      "text": "We ___ (see) your advertisement on the website.",
      "answers": [
       "have seen",
       "'ve seen",
       "’ve seen"
      ],
      "why": "See – saw – <b>seen</b>."
     },
     {
      "type": "speak",
      "en": "Our manager has approved your request.",
      "fr": "Notre responsable a approuvé votre demande."
     },
     {
      "type": "fill",
      "text": "The bank ___ (give) us all the information.",
      "answers": [
       "has given"
      ],
      "why": "Give – gave – <b>given</b> ; the bank → has."
     },
     {
      "type": "mcq",
      "q": "Dans quelle phrase le participe passé est-il irrégulier ?",
      "opts": [
       "We have decided.",
       "We have bought tickets.",
       "We have visited the office."
      ],
      "correct": 1,
      "why": "Buy – bought – <b>bought</b> n'est pas en -ed."
     }
    ]
   },
   {
    "id": "present-perfect-formal-2",
    "reg": "formal",
    "title": "Négation et questions polies · Formel",
    "why": "Pour signaler un manque (« I have not received… ») ou demander poliment si quelque chose est fait (« Have you completed…? »), on utilise <b>have / has</b> comme auxiliaire, jamais do.",
    "rule": "1. Négation : <b>have not / has not</b> + participe (haven't / hasn't à l'oral).<br>2. Question : <b>Have / Has</b> + sujet + participe passé ?<br>3. Réponse courte : <b>Yes, I have. / No, he has not.</b> (on ne répète pas le verbe).<br>4. Jamais de do / does / did avec cette structure.",
    "examples": [
     {
      "en": "I have not received your email.",
      "fr": "Je n'ai pas reçu votre courriel."
     },
     {
      "en": "Has the manager signed the contract?",
      "fr": "Le directeur a-t-il signé le contrat ?"
     },
     {
      "en": "Have you completed the form, Mr Brown?",
      "fr": "Avez-vous rempli le formulaire, Monsieur Brown ?"
     },
     {
      "en": "We have not heard from the supplier.",
      "fr": "Nous n'avons pas eu de nouvelles du fournisseur."
     },
     {
      "en": "Has the client confirmed the date?",
      "fr": "Le client a-t-il confirmé la date ?"
     },
     {
      "en": "No, I have not.",
      "fr": "Non, pas encore / non, je ne l'ai pas fait.",
      "note": "Réponse courte : on s'arrête à have not."
     }
    ],
    "pitfalls": [
     {
      "wrong": "I not have received your message.",
      "right": "I have not received your message.",
      "why": "Le <b>not</b> se place après have, pas avant."
     },
     {
      "wrong": "Do you have finished the form?",
      "right": "Have you finished the form?",
      "why": "Le present perfect se construit avec <b>have</b> seul : pas de do."
     },
     {
      "wrong": "Have you received the invoice? — Yes, I received.",
      "right": "Have you received the invoice? — Yes, I have.",
      "why": "La réponse courte reprend l'auxiliaire : <b>Yes, I have</b>."
     }
    ],
    "exercises": [
     {
      "type": "mcq",
      "q": "« Je n'ai pas reçu votre message. »",
      "opts": [
       "I not have received your message.",
       "I have not received your message.",
       "I do not have received your message."
      ],
      "correct": 1,
      "why": "Négation : have + <b>not</b> + participe passé."
     },
     {
      "type": "fill",
      "text": "I ___ (not / receive) your payment.",
      "answers": [
       "have not received",
       "haven't received",
       "haven’t received",
       "'ve not received",
       "’ve not received"
      ],
      "why": "Have not + received."
     },
     {
      "type": "fill",
      "text": "___ you ___ (complete) the form, Mr Adams?",
      "answers": [
       [
        "Have"
       ],
       [
        "completed"
       ]
      ],
      "why": "Question : <b>Have</b> + sujet + participe passé."
     },
     {
      "type": "mcq",
      "q": "« Has the manager signed the letter? » Quelle réponse courte convient ?",
      "opts": [
       "Yes, he has.",
       "Yes, he does.",
       "Yes, he is."
      ],
      "correct": 0,
      "why": "On reprend l'auxiliaire de la question : <b>has</b>."
     },
     {
      "type": "speak",
      "en": "Have you received the invoice, Mrs Clark?",
      "fr": "Avez-vous reçu la facture, Madame Clark ?"
     },
     {
      "type": "fill",
      "text": "The supplier ___ (not / reply) to our letter.",
      "answers": [
       "has not replied",
       "hasn't replied",
       "hasn’t replied"
      ],
      "why": "Supplier = it → <b>has not</b> + replied."
     },
     {
      "type": "mcq",
      "q": "Quelle phrase est correcte ?",
      "opts": [
       "Does your assistant sent the report?",
       "Has your assistant send the report?",
       "Has your assistant sent the report?"
      ],
      "correct": 2,
      "why": "Has + sujet + participe passé (<b>sent</b>)."
     },
     {
      "type": "fill",
      "text": "___ the committee ___ (make) a decision?",
      "answers": [
       [
        "Has"
       ],
       [
        "made"
       ]
      ],
      "why": "Committee singulier → <b>Has</b> ; make → made."
     },
     {
      "type": "fill",
      "text": "We ___ (not / hear) from the client this week.",
      "answers": [
       "have not heard",
       "haven't heard",
       "haven’t heard",
       "'ve not heard",
       "’ve not heard"
      ],
      "why": "Hear – heard – heard : <b>have not heard</b>."
     },
     {
      "type": "speak",
      "en": "The bank has not confirmed the appointment.",
      "fr": "La banque n'a pas confirmé le rendez-vous."
     },
     {
      "type": "mcq",
      "q": "Complétez : « ___ you checked the schedule? »",
      "opts": [
       "Do",
       "Have",
       "Are"
      ],
      "correct": 1,
      "why": "Le present perfect utilise <b>have</b> comme auxiliaire."
     },
     {
      "type": "fill",
      "text": "Has Mr Hall paid the bill? — No, he ___ .",
      "answers": [
       "has not",
       "hasn't",
       "hasn’t"
      ],
      "why": "Réponse courte négative : <b>has not</b>."
     },
     {
      "type": "mcq",
      "q": "« Votre assistante a-t-elle appelé l'hôtel ? »",
      "opts": [
       "Did your assistant has called the hotel?",
       "Have your assistant called the hotel?",
       "Has your assistant called the hotel?"
      ],
      "correct": 2,
      "why": "Assistant singulier → <b>Has</b> ; pas de did."
     }
    ]
   },
   {
    "id": "present-perfect-formal-3",
    "reg": "formal",
    "title": "Marqueurs : ever, never, just, already, yet, for, since · Formel",
    "why": "Ces petits mots précisent le message : ce qui vient d'arriver, ce qui est déjà fait, ou depuis quand une situation dure. En français on dit « je travaille ici depuis 2019 » ; en anglais, on dit <b>I have worked here since 2019</b>.",
    "rule": "1. <b>just</b> (à l'instant) et <b>already</b> (déjà) se placent entre have et le participe.<br>2. <b>yet</b> (encore / déjà) va en <b>fin de phrase</b>, dans les questions et les négations.<br>3. <b>ever</b> (déjà, dans une question) et <b>never</b> (jamais) se placent avant le participe.<br>4. <b>for</b> + durée (for six years) ; <b>since</b> + point de départ (since 2019, since Monday).",
    "examples": [
     {
      "en": "I have just spoken to the manager.",
      "fr": "Je viens de parler au directeur."
     },
     {
      "en": "We have already signed the agreement.",
      "fr": "Nous avons déjà signé l'accord."
     },
     {
      "en": "Have you finished the report yet?",
      "fr": "Avez-vous déjà terminé le rapport ?"
     },
     {
      "en": "I have worked in this bank for six years.",
      "fr": "Je travaille dans cette banque depuis six ans."
     },
     {
      "en": "She has lived in London since 2018.",
      "fr": "Elle habite à Londres depuis 2018."
     },
     {
      "en": "Have you ever stayed at this hotel?",
      "fr": "Avez-vous déjà séjourné dans cet hôtel ?"
     }
    ],
    "pitfalls": [
     {
      "wrong": "I work here since 2020.",
      "right": "I have worked here since 2020.",
      "why": "Pour une situation qui a commencé dans le passé et continue, l'anglais utilise le <b>present perfect</b>."
     },
     {
      "wrong": "I have worked here since three years.",
      "right": "I have worked here for three years.",
      "why": "<b>For</b> + durée ; <b>since</b> + date de départ."
     },
     {
      "wrong": "Have you yet signed the form?",
      "right": "Have you signed the form yet?",
      "why": "<b>Yet</b> se place en fin de phrase."
     }
    ],
    "exercises": [
     {
      "type": "mcq",
      "q": "« Je travaille ici depuis 2019. »",
      "opts": [
       "I work here since 2019.",
       "I have worked here since 2019.",
       "I am working here since 2019."
      ],
      "correct": 1,
      "why": "Situation commencée dans le passé et toujours vraie → <b>present perfect</b> + since."
     },
     {
      "type": "fill",
      "text": "Mr Lewis has worked for this bank ___ ten years.",
      "answers": [
       "for"
      ],
      "why": "Durée (ten years) → <b>for</b>."
     },
     {
      "type": "fill",
      "text": "She has lived in Leeds ___ 2017.",
      "answers": [
       "since"
      ],
      "why": "Point de départ (2017) → <b>since</b>."
     },
     {
      "type": "mcq",
      "q": "Où place-t-on « yet » ?",
      "opts": [
       "Have you paid the invoice yet?",
       "Have you yet paid the invoice?",
       "Yet have you paid the invoice?"
      ],
      "correct": 0,
      "why": "<b>Yet</b> se met en fin de phrase."
     },
     {
      "type": "speak",
      "en": "I have just spoken to the manager.",
      "fr": "Je viens de parler au directeur."
     },
     {
      "type": "fill",
      "text": "We have ___ signed the agreement. (déjà)",
      "answers": [
       "already"
      ],
      "why": "<b>Already</b> = déjà, dans une phrase affirmative."
     },
     {
      "type": "mcq",
      "q": "« Avez-vous déjà séjourné dans cet hôtel ? »",
      "opts": [
       "Are you ever stayed at this hotel?",
       "Have you ever stay at this hotel?",
       "Have you ever stayed at this hotel?"
      ],
      "correct": 2,
      "why": "Have you <b>ever</b> + participe passé."
     },
     {
      "type": "fill",
      "text": "I have ___ visited your Paris office, so I do not know it. (jamais)",
      "answers": [
       "never"
      ],
      "why": "<b>Never</b> = jamais, avant le participe passé."
     },
     {
      "type": "fill",
      "text": "The delegates have ___ arrived. (à l'instant)",
      "answers": [
       "just"
      ],
      "why": "<b>Just</b> = à l'instant, juste avant le participe."
     },
     {
      "type": "fill",
      "text": "Has the courier delivered the package ___?",
      "answers": [
       "yet"
      ],
      "why": "Question sur un fait attendu : <b>yet</b> en fin de phrase."
     },
     {
      "type": "speak",
      "en": "She has lived in London since 2018.",
      "fr": "Elle habite à Londres depuis 2018."
     },
     {
      "type": "mcq",
      "q": "Quelle phrase est correcte ?",
      "opts": [
       "I have been here since two years.",
       "I have been here for two years.",
       "I have been here from two years."
      ],
      "correct": 1,
      "why": "« Two years » est une durée → <b>for</b>."
     },
     {
      "type": "fill",
      "text": "Mrs Jones has been our client ___ last March.",
      "answers": [
       "since"
      ],
      "why": "« Last March » est un point de départ → <b>since</b>."
     }
    ]
   },
   {
    "id": "present-perfect-formal-4",
    "reg": "formal",
    "title": "Present perfect ou passé simple ? Mises en situation · Formel",
    "why": "Pour un message pro précis, il faut choisir : lien avec <b>maintenant</b> (present perfect) ou moment <b>fini et daté</b> (passé simple : yesterday, last week, in 2019, ago).",
    "rule": "1. <b>Present perfect</b> : le moment n'est pas précisé, le résultat compte maintenant (I have sent the file).<br>2. <b>Passé simple</b> (-ed ou forme irrégulière) : un moment fini est donné (I sent the file yesterday).<br>3. Marqueurs du passé simple : yesterday, last Tuesday, in 2019, two days ago.<br>4. <b>has been to</b> = est allé et revenu ; <b>has gone to</b> = est parti, n'est pas encore revenu.",
    "examples": [
     {
      "en": "I have sent you the file; could you confirm receipt?",
      "fr": "Je vous ai envoyé le fichier ; pourriez-vous en confirmer la réception ?"
     },
     {
      "en": "I sent the file yesterday.",
      "fr": "J'ai envoyé le fichier hier."
     },
     {
      "en": "Mr Smith has gone to Berlin, so he is not in the office.",
      "fr": "M. Smith est parti à Berlin, il n'est donc pas au bureau."
     },
     {
      "en": "Mrs Reid has been to our Paris office twice.",
      "fr": "Mme Reid est déjà allée deux fois à notre bureau de Paris."
     },
     {
      "en": "We met the client last Tuesday.",
      "fr": "Nous avons rencontré le client mardi dernier."
     },
     {
      "en": "I visited your website yesterday.",
      "fr": "J'ai visité votre site hier."
     }
    ],
    "pitfalls": [
     {
      "wrong": "I have sent the email yesterday.",
      "right": "I sent the email yesterday.",
      "why": "Avec <b>yesterday</b> (moment fini), on emploie le passé simple."
     },
     {
      "wrong": "We have met the director in 2019.",
      "right": "We met the director in 2019.",
      "why": "Une date précise dans le passé exige le <b>passé simple</b>."
     },
     {
      "wrong": "Mr Smith has been to Berlin, he is not here.",
      "right": "Mr Smith has gone to Berlin, he is not here.",
      "why": "<b>Gone</b> = parti et absent ; <b>been</b> = allé et revenu."
     }
    ],
    "exercises": [
     {
      "type": "mcq",
      "q": "Quelle phrase est correcte ?",
      "opts": [
       "I have sent the report yesterday.",
       "I sent the report yesterday.",
       "I have send the report yesterday."
      ],
      "correct": 1,
      "why": "<b>Yesterday</b> impose le passé simple."
     },
     {
      "type": "fill",
      "text": "We ___ (meet) the client last Tuesday.",
      "answers": [
       "met"
      ],
      "why": "Last Tuesday = moment fini → passé simple : <b>met</b>."
     },
     {
      "type": "fill",
      "text": "I ___ (send) you the file. Could you confirm receipt?",
      "answers": [
       "have sent",
       "'ve sent",
       "’ve sent"
      ],
      "why": "Résultat présent, pas de date → <b>have sent</b>."
     },
     {
      "type": "mcq",
      "q": "« M. Smith est parti à Berlin (il n'est pas là). »",
      "opts": [
       "Mr Smith has gone to Berlin.",
       "Mr Smith has been to Berlin.",
       "Mr Smith has go to Berlin."
      ],
      "correct": 0,
      "why": "<b>Has gone</b> = parti, pas encore revenu."
     },
     {
      "type": "speak",
      "en": "Mrs Reid has been to our Paris office twice.",
      "fr": "Mme Reid est déjà allée deux fois à notre bureau de Paris."
     },
     {
      "type": "fill",
      "text": "The manager ___ (leave) the building ten minutes ago.",
      "answers": [
       "left"
      ],
      "why": "<b>Ago</b> = moment fini → passé simple : left."
     },
     {
      "type": "mcq",
      "q": "Quel mot impose le passé simple ?",
      "opts": [
       "already",
       "ever",
       "ago"
      ],
      "correct": 2,
      "why": "<b>Ago</b> situe l'action à un moment fini du passé."
     },
     {
      "type": "fill",
      "text": "Our company ___ (open) a new office in Lyon in 2021.",
      "answers": [
       "opened"
      ],
      "why": "Date précise (2021) → <b>opened</b>."
     },
     {
      "type": "fill",
      "text": "I ___ (not / see) the report yet, so I cannot comment.",
      "answers": [
       "have not seen",
       "haven't seen",
       "haven’t seen",
       "'ve not seen",
       "’ve not seen"
      ],
      "why": "Avec <b>yet</b>, on garde le present perfect."
     },
     {
      "type": "speak",
      "en": "I visited your website yesterday and called your office.",
      "fr": "J'ai visité votre site hier et appelé votre bureau."
     },
     {
      "type": "mcq",
      "q": "« Mrs Reid ___ to our Paris office twice. She knows it well. »",
      "opts": [
       "has gone",
       "has been",
       "went"
      ],
      "correct": 1,
      "why": "Elle y est allée et revenue : <b>has been</b>."
     },
     {
      "type": "fill",
      "text": "Have you ever ___ in a hotel? — Yes, I ___ at the Ritz in 2015.",
      "answers": [
       [
        "worked"
       ],
       [
        "worked"
       ]
      ],
      "why": "Expérience sans date : participe <b>worked</b> ; avec « in 2015 » : passé simple worked."
     },
     {
      "type": "mcq",
      "q": "Entretien : « Avez-vous déjà dirigé une équipe ? »",
      "opts": [
       "Have you ever managed a team?",
       "Have you ever manage a team?",
       "Do you ever managed a team?"
      ],
      "correct": 0,
      "why": "Have you ever + participe passé (<b>managed</b>)."
     }
    ]
   },
   {
    "id": "present-perfect-informal-1",
    "reg": "informal",
    "title": "Formation : I've, she's, we've… · Informel",
    "why": "Entre amis, on dit <b>I've lost my keys!</b>, <b>She's gone home</b> : le present perfect avec contractions pour raconter ce qui vient de se passer et qui a un effet maintenant.",
    "rule": "1. have / has + <b>participe passé</b>.<br>2. Contractions : <b>I've, you've, we've, they've, he's, she's, it's</b>.<br>3. <b>'s</b> + participe = <b>has</b> (She's lost her keys).<br>4. Irréguliers courants : eat → eaten, drink → drunk, go → gone, see → seen, lose → lost, break → broken, forget → forgotten, buy → bought.",
    "timeline": "passé ──────●────────▶ MAINTENANT : on voit le résultat",
    "table": {
     "caption": "have + participe passé, en version courte",
     "headers": [
      "Pronom",
      "Contraction",
      "Exemple"
     ],
     "rows": [
      [
       "I",
       "I've",
       "I've lost my phone."
      ],
      [
       "you",
       "you've",
       "You've broken it!"
      ],
      [
       "he / she / it",
       "he's / she's / it's",
       "She's gone home."
      ],
      [
       "we",
       "we've",
       "We've missed the bus."
      ],
      [
       "they",
       "they've",
       "They've found a flat."
      ]
     ]
    },
    "examples": [
     {
      "en": "I've lost my keys!",
      "fr": "J'ai perdu mes clés !"
     },
     {
      "en": "She's eaten all the biscuits.",
      "fr": "Elle a mangé tous les biscuits."
     },
     {
      "en": "We've missed the bus.",
      "fr": "On a raté le bus."
     },
     {
      "en": "Dad's broken the TV again.",
      "fr": "Papa a encore cassé la télé."
     },
     {
      "en": "They've found a flat in Leeds.",
      "fr": "Ils ont trouvé un appartement à Leeds."
     },
     {
      "en": "You've done a great job!",
      "fr": "Tu as fait du super boulot !"
     }
    ],
    "pitfalls": [
     {
      "wrong": "I've forgot my phone.",
      "right": "I've forgotten my phone.",
      "why": "Le participe passé de forget est <b>forgotten</b>."
     },
     {
      "wrong": "He have lost his wallet.",
      "right": "He's lost his wallet.",
      "why": "À la 3e personne : <b>has</b> ou 's, jamais have."
     },
     {
      "wrong": "I've went to the shop.",
      "right": "I've gone to the shop.",
      "why": "Le participe de go est <b>gone</b>, pas went."
     }
    ],
    "exercises": [
     {
      "type": "mcq",
      "q": "« J'ai perdu mes clés ! »",
      "opts": [
       "I've lost my keys!",
       "I have lose my keys!",
       "I'm lost my keys!"
      ],
      "correct": 0,
      "why": "I've = I have + participe passé (<b>lost</b>)."
     },
     {
      "type": "fill",
      "text": "My brother ___ (eat) all the pizza!",
      "answers": [
       "has eaten",
       "'s eaten",
       "’s eaten"
      ],
      "why": "Eat – ate – <b>eaten</b> ; brother → has."
     },
     {
      "type": "mcq",
      "q": "Que signifie le 's dans « She's broken my phone » ?",
      "opts": [
       "is",
       "has",
       "does"
      ],
      "correct": 1,
      "why": "'s + participe passé = <b>has</b>."
     },
     {
      "type": "fill",
      "text": "We ___ (miss) the bus again.",
      "answers": [
       "have missed",
       "'ve missed",
       "’ve missed"
      ],
      "why": "We → have + missed."
     },
     {
      "type": "speak",
      "en": "I've left my phone at Sam's house.",
      "fr": "J'ai laissé mon téléphone chez Sam."
     },
     {
      "type": "fill",
      "text": "Mum ___ (make) a huge cake for the party.",
      "answers": [
       "has made",
       "'s made",
       "’s made"
      ],
      "why": "Make – made – made ; Mum → has."
     },
     {
      "type": "mcq",
      "q": "Quel est le participe passé de « drink » ?",
      "opts": [
       "drank",
       "drinked",
       "drunk"
      ],
      "correct": 2,
      "why": "Drink – drank – <b>drunk</b>."
     },
     {
      "type": "fill",
      "text": "They ___ (find) a cheap flat in Leeds.",
      "answers": [
       "have found",
       "'ve found",
       "’ve found"
      ],
      "why": "Find – found – found ; they → have."
     },
     {
      "type": "mcq",
      "q": "Choisissez la phrase correcte.",
      "opts": [
       "You've done a great job!",
       "You've did a great job!",
       "You has done a great job!"
      ],
      "correct": 0,
      "why": "Après 've, il faut le participe <b>done</b>."
     },
     {
      "type": "fill",
      "text": "Oh no, I ___ (forget) my wallet!",
      "answers": [
       "have forgotten",
       "'ve forgotten",
       "’ve forgotten"
      ],
      "why": "Forget – forgot – <b>forgotten</b>."
     },
     {
      "type": "speak",
      "en": "Dad's broken the TV again!",
      "fr": "Papa a encore cassé la télé !"
     },
     {
      "type": "fill",
      "text": "Look! It ___ (stop) raining.",
      "answers": [
       "has stopped",
       "'s stopped",
       "’s stopped"
      ],
      "why": "It's stopped = it <b>has</b> stopped."
     },
     {
      "type": "mcq",
      "q": "Choisissez la phrase correcte.",
      "opts": [
       "Emma's buy a new bike.",
       "Emma's bought a new bike.",
       "Emma have bought a new bike."
      ],
      "correct": 1,
      "why": "Emma's = Emma <b>has</b> + bought."
     }
    ]
   },
   {
    "id": "present-perfect-informal-2",
    "reg": "informal",
    "title": "Négation et questions entre amis · Informel",
    "why": "Pour demander « Tu as vu… ? » ou dire « Je n'ai pas… », on joue avec <b>haven't / hasn't</b> et <b>Have you…?</b> : jamais avec do.",
    "rule": "1. Négation : <b>haven't / hasn't</b> + participe (ou I've not + participe).<br>2. Question : <b>Have you…? Has he…?</b> + participe passé.<br>3. Réponse courte : <b>Yes, I have. / No, I haven't.</b><br>4. Questions de bavardage : « Have you heard…? », « Have you seen…? ».",
    "examples": [
     {
      "en": "Have you seen my keys?",
      "fr": "Tu as vu mes clés ?"
     },
     {
      "en": "I haven't had a break all day.",
      "fr": "Je n'ai pas fait de pause de la journée."
     },
     {
      "en": "Has Tom called you?",
      "fr": "Tom t'a appelé ?"
     },
     {
      "en": "We haven't watched that film.",
      "fr": "On n'a pas regardé ce film."
     },
     {
      "en": "Have you heard the news?",
      "fr": "Tu as entendu la nouvelle ?"
     },
     {
      "en": "She hasn't answered my text.",
      "fr": "Elle n'a pas répondu à mon message."
     }
    ],
    "pitfalls": [
     {
      "wrong": "Have you see my keys?",
      "right": "Have you seen my keys?",
      "why": "Après have, on met le <b>participe passé</b> : seen."
     },
     {
      "wrong": "I didn't have eaten.",
      "right": "I haven't eaten.",
      "why": "Pas de did avec le present perfect : <b>haven't</b> + participe."
     },
     {
      "wrong": "Have you finished? — Yes, I did.",
      "right": "Have you finished? — Yes, I have.",
      "why": "La réponse reprend l'auxiliaire de la question."
     }
    ],
    "exercises": [
     {
      "type": "mcq",
      "q": "« Tu as vu mes clés ? »",
      "opts": [
       "Have you seen my keys?",
       "Do you seen my keys?",
       "Are you seen my keys?"
      ],
      "correct": 0,
      "why": "Have you + participe passé <b>seen</b>."
     },
     {
      "type": "fill",
      "text": "I ___ (not / eat) anything today.",
      "answers": [
       "haven't eaten",
       "haven’t eaten",
       "have not eaten",
       "'ve not eaten",
       "’ve not eaten"
      ],
      "why": "Négation : <b>haven't</b> + eaten."
     },
     {
      "type": "fill",
      "text": "___ Tom ___ (call) you back?",
      "answers": [
       [
        "Has"
       ],
       [
        "called"
       ]
      ],
      "why": "Tom = he → <b>Has</b> + called."
     },
     {
      "type": "mcq",
      "q": "« Have you finished? » Quelle réponse courte ?",
      "opts": [
       "Yes, I did.",
       "Yes, I have.",
       "Yes, I finished."
      ],
      "correct": 1,
      "why": "On reprend <b>have</b>."
     },
     {
      "type": "speak",
      "en": "Have you heard the news about Jess?",
      "fr": "Tu as entendu la nouvelle sur Jess ?"
     },
     {
      "type": "fill",
      "text": "She ___ (not / answer) my text.",
      "answers": [
       "hasn't answered",
       "hasn’t answered",
       "has not answered"
      ],
      "why": "She → <b>hasn't</b> + answered."
     },
     {
      "type": "mcq",
      "q": "Quelle phrase est correcte ?",
      "opts": [
       "We don't watched that film.",
       "We haven't watch that film.",
       "We haven't watched that film."
      ],
      "correct": 2,
      "why": "Haven't + <b>participe passé</b> (watched)."
     },
     {
      "type": "fill",
      "text": "___ you ___ (read) my message?",
      "answers": [
       [
        "Have"
       ],
       [
        "read"
       ]
      ],
      "why": "Read – read – read : le participe s'écrit pareil."
     },
     {
      "type": "fill",
      "text": "Has Mia texted you? — No, she ___ .",
      "answers": [
       "hasn't",
       "hasn’t",
       "has not"
      ],
      "why": "Réponse courte : <b>hasn't</b>."
     },
     {
      "type": "speak",
      "en": "I haven't had a break all day.",
      "fr": "Je n'ai pas fait de pause de la journée."
     },
     {
      "type": "mcq",
      "q": "« Ils n'ont pas appelé. »",
      "opts": [
       "They haven't called.",
       "They not have called.",
       "They don't have called."
      ],
      "correct": 0,
      "why": "They + <b>haven't</b> + participe passé."
     },
     {
      "type": "fill",
      "text": "We ___ (not / play) football this month.",
      "answers": [
       "haven't played",
       "haven’t played",
       "have not played",
       "'ve not played",
       "’ve not played"
      ],
      "why": "We → haven't + played."
     },
     {
      "type": "mcq",
      "q": "« Have they arrived? » Quelle réponse négative ?",
      "opts": [
       "No, they don't.",
       "No, they haven't.",
       "No, they aren't."
      ],
      "correct": 1,
      "why": "Réponse courte : <b>haven't</b>."
     }
    ]
   },
   {
    "id": "present-perfect-informal-3",
    "reg": "informal",
    "title": "Marqueurs : ever, never, just, already, yet, for, since · Informel",
    "why": "Entre potes : « I've just got home », « I've never tried it », « I've known her for ages ». Ces petits mots donnent la couleur du message.",
    "rule": "1. <b>just</b> (à l'instant) et <b>already</b> (déjà) entre 've / 's et le participe.<br>2. <b>yet</b> en fin de phrase (questions et négations).<br>3. <b>ever</b> (dans une question) et <b>never</b> (jamais) avant le participe.<br>4. <b>for</b> + durée (for ages, for two weeks) ; <b>since</b> + point de départ (since Monday).",
    "examples": [
     {
      "en": "I've just got home, and I'm knackered.",
      "fr": "Je viens de rentrer, et je suis crevé."
     },
     {
      "en": "Have you ever tried haggis?",
      "fr": "Tu as déjà goûté le haggis ?"
     },
     {
      "en": "I've never ridden a horse.",
      "fr": "Je n'ai jamais monté à cheval."
     },
     {
      "en": "We've already eaten, sorry.",
      "fr": "On a déjà mangé, désolé."
     },
     {
      "en": "Has the pizza come yet?",
      "fr": "La pizza est déjà arrivée ?"
     },
     {
      "en": "I've known Sam since primary school.",
      "fr": "Je connais Sam depuis l'école primaire."
     }
    ],
    "pitfalls": [
     {
      "wrong": "I know her since ages.",
      "right": "I've known her for ages.",
      "why": "Une situation qui dure depuis le passé = <b>present perfect</b>, et « ages » est une durée → for."
     },
     {
      "wrong": "Have you yet seen it?",
      "right": "Have you seen it yet?",
      "why": "<b>Yet</b> se met à la fin."
     },
     {
      "wrong": "I've never ate sushi.",
      "right": "I've never eaten sushi.",
      "why": "Le participe de eat est <b>eaten</b>."
     }
    ],
    "exercises": [
     {
      "type": "mcq",
      "q": "« Je la connais depuis des années. »",
      "opts": [
       "I've known her for years.",
       "I know her since years.",
       "I know her for years."
      ],
      "correct": 0,
      "why": "Situation qui continue → present perfect + <b>for</b> + durée."
     },
     {
      "type": "fill",
      "text": "I've known Sam ___ primary school.",
      "answers": [
       "since"
      ],
      "why": "Point de départ → <b>since</b>."
     },
     {
      "type": "fill",
      "text": "Have you ___ tried haggis?",
      "answers": [
       "ever"
      ],
      "why": "Dans une question d'expérience : <b>ever</b>."
     },
     {
      "type": "mcq",
      "q": "« Je n'ai jamais monté à cheval. »",
      "opts": [
       "I've never rode a horse.",
       "I've never ridden a horse.",
       "I never have ridden a horse."
      ],
      "correct": 1,
      "why": "Never + participe <b>ridden</b>."
     },
     {
      "type": "speak",
      "en": "I've just got home and I'm knackered.",
      "fr": "Je viens de rentrer et je suis crevé."
     },
     {
      "type": "fill",
      "text": "Has the pizza arrived ___?",
      "answers": [
       "yet"
      ],
      "why": "Question sur un fait attendu : <b>yet</b>."
     },
     {
      "type": "mcq",
      "q": "Complétez : « Jo's lived here ___ six months. »",
      "opts": [
       "since",
       "from",
       "for"
      ],
      "correct": 2,
      "why": "Six months = durée → <b>for</b>."
     },
     {
      "type": "fill",
      "text": "We've lived in this flat ___ last September.",
      "answers": [
       "since"
      ],
      "why": "Last September = point de départ → <b>since</b>."
     },
     {
      "type": "fill",
      "text": "I haven't seen Dan ___ ages.",
      "answers": [
       "for"
      ],
      "why": "Ages = une durée longue → <b>for</b>."
     },
     {
      "type": "fill",
      "text": "We've ___ eaten, sorry! (déjà)",
      "answers": [
       "already"
      ],
      "why": "<b>Already</b> = déjà."
     },
     {
      "type": "speak",
      "en": "Fancy a pint? I've just finished work.",
      "fr": "Un verre ? Je viens de finir le boulot."
     },
     {
      "type": "mcq",
      "q": "Complétez : « Have you ___ been to Spain? »",
      "opts": [
       "ever",
       "yet",
       "since"
      ],
      "correct": 0,
      "why": "Question d'expérience : <b>ever</b>."
     },
     {
      "type": "fill",
      "text": "I've ___ had such a great weekend! (jamais)",
      "answers": [
       "never"
      ],
      "why": "<b>Never</b> = jamais, avant le participe."
     }
    ]
   },
   {
    "id": "present-perfect-informal-4",
    "reg": "informal",
    "title": "Present perfect ou passé simple ? Mises en situation · Informel",
    "why": "Dans une conversation, tout dépend de la date : si tu donnes un moment fini (last night, yesterday, in May), on passe au <b>passé simple</b>. Sinon, c'est le present perfect.",
    "rule": "1. <b>Present perfect</b> : pas de date, le résultat compte maintenant (I've lost my phone).<br>2. <b>Passé simple</b> : moment fini précisé (I lost my phone yesterday).<br>3. Marqueurs du passé simple : yesterday, last night, on Tuesday, in May, two days ago.<br>4. <b>has gone</b> = parti (absent) ; <b>has been</b> = allé et revenu.",
    "examples": [
     {
      "en": "I've lost my phone. Have you seen it?",
      "fr": "J'ai perdu mon téléphone. Tu l'as vu ?"
     },
     {
      "en": "I lost my phone on the bus yesterday.",
      "fr": "J'ai perdu mon téléphone dans le bus hier."
     },
     {
      "en": "Jack's gone to the shops, so he's not here.",
      "fr": "Jack est parti faire les courses, donc il n'est pas là."
     },
     {
      "en": "I've been to Rome twice.",
      "fr": "Je suis déjà allé deux fois à Rome."
     },
     {
      "en": "We saw that film last night.",
      "fr": "On a vu ce film hier soir."
     },
     {
      "en": "We had a dog when I was little.",
      "fr": "On avait un chien quand j'étais petit."
     }
    ],
    "pitfalls": [
     {
      "wrong": "I've seen her yesterday.",
      "right": "I saw her yesterday.",
      "why": "<b>Yesterday</b> = moment fini → passé simple."
     },
     {
      "wrong": "Jack has been to the shops, he's not here.",
      "right": "Jack has gone to the shops, he's not here.",
      "why": "<b>Gone</b> = parti et pas encore revenu."
     },
     {
      "wrong": "We have gone to Spain in 2019.",
      "right": "We went to Spain in 2019.",
      "why": "Une date passée précise → <b>passé simple</b>."
     }
    ],
    "exercises": [
     {
      "type": "mcq",
      "q": "Quelle phrase est correcte ?",
      "opts": [
       "I saw Ben last night.",
       "I've seen Ben last night.",
       "I have see Ben last night."
      ],
      "correct": 0,
      "why": "<b>Last night</b> = moment fini → passé simple (saw)."
     },
     {
      "type": "fill",
      "text": "We ___ (go) to Spain in 2019.",
      "answers": [
       "went"
      ],
      "why": "En 2019 : date précise → <b>went</b>."
     },
     {
      "type": "fill",
      "text": "I ___ (lose) my phone. Have you seen it?",
      "answers": [
       "have lost",
       "'ve lost",
       "’ve lost"
      ],
      "why": "Pas de date, le téléphone est toujours perdu → <b>have lost</b>."
     },
     {
      "type": "mcq",
      "q": "« Jack est parti au magasin, il n'est pas là. »",
      "opts": [
       "Jack's gone to the shop.",
       "Jack's been to the shop.",
       "Jack went to the shop now."
      ],
      "correct": 0,
      "why": "<b>Gone</b> = parti et absent."
     },
     {
      "type": "speak",
      "en": "I've been to Rome twice, and I loved it.",
      "fr": "Je suis allé deux fois à Rome, et j'ai adoré."
     },
     {
      "type": "fill",
      "text": "I ___ (see) her at the party last Saturday.",
      "answers": [
       "saw"
      ],
      "why": "Last Saturday → passé simple : <b>saw</b>."
     },
     {
      "type": "mcq",
      "q": "Quel mot ou groupe impose le passé simple ?",
      "opts": [
       "just",
       "last night",
       "ever"
      ],
      "correct": 1,
      "why": "<b>Last night</b> est un moment fini du passé."
     },
     {
      "type": "fill",
      "text": "I've ___ (be) to Rome twice.",
      "answers": [
       "been"
      ],
      "why": "Expérience sans date : <b>been</b>."
     },
     {
      "type": "fill",
      "text": "My phone ___ (break) on Tuesday.",
      "answers": [
       "broke"
      ],
      "why": "Un jour précis (Tuesday) → <b>broke</b>."
     },
     {
      "type": "speak",
      "en": "We saw that film last night. It was brilliant.",
      "fr": "On a vu ce film hier soir. C'était génial."
     },
     {
      "type": "mcq",
      "q": "« Have you ever had a pet? — Yes, we ___ a dog when I was little. »",
      "opts": [
       "had",
       "have had",
       "has had"
      ],
      "correct": 0,
      "why": "« When I was little » = période finie → passé simple <b>had</b>."
     },
     {
      "type": "fill",
      "text": "I can't find my bag. Someone ___ (take) it!",
      "answers": [
       "has taken",
       "'s taken",
       "’s taken"
      ],
      "why": "Take – took – <b>taken</b>."
     },
     {
      "type": "mcq",
      "q": "Choisissez la phrase correcte.",
      "opts": [
       "She's just text me.",
       "She just have texted me.",
       "She's just texted me."
      ],
      "correct": 2,
      "why": "She's just + <b>texted</b>."
     }
    ]
   }
  ]
 },
 {
  "id": "temps-en-past-continuous",
  "group": "temps",
  "icon": "🎞️",
  "title": "Le past continuous",
  "level": "A2",
  "intro": "<b>Was/were + -ing</b> : décor et action en cours dans le passé. Ici, deux registres : <b>formel</b> (travail, administration, service) et <b>informel</b> (amis, famille).",
  "lessons": [
   {
    "id": "past-continuous-formal-1",
    "reg": "formal",
    "title": "Past continuous : was / were + -ing · Formel",
    "why": "Le <b>past continuous</b> décrit une action <b>en cours</b> à un moment précis du passé (« j'étais en train de… »). Au travail, il sert à dire ce que vous ou vos collègues faisiez à une heure donnée.",
    "rule": "1. <b>was / were</b> (passé de <i>be</i>) + verbe en <b>-ing</b>.<br>2. <b>I / he / she / it</b> + nom singulier → <b>was</b> ; <b>you / we / they</b> + nom pluriel → <b>were</b>.<br>3. Orthographe : <b>write → writing</b> (on enlève le -e), <b>sit → sitting</b> (consonne doublée), <b>travel → travelling</b> (britannique).<br>4. Marqueurs : <b>at ten o'clock</b>, <b>at that moment</b>, <b>that morning</b>.",
    "timeline": "──── 9h ● [ I was writing a report ………… ] ● 10h ────▶",
    "table": {
     "caption": "be (passé) + -ing",
     "headers": [
      "Sujet",
      "Forme",
      "Exemple professionnel"
     ],
     "rows": [
      [
       "I / he / she / it",
       "<b>was</b> + -ing",
       "I was writing a report."
      ],
      [
       "you / we / they",
       "<b>were</b> + -ing",
       "We were discussing the budget."
      ]
     ]
    },
    "examples": [
     {
      "en": "I was writing a report at nine o'clock.",
      "fr": "À neuf heures, je rédigeais un rapport."
     },
     {
      "en": "The manager was waiting in reception.",
      "fr": "Le directeur attendait à l'accueil."
     },
     {
      "en": "We were discussing the budget at that moment.",
      "fr": "Nous discutions du budget à ce moment-là."
     },
     {
      "en": "The guests were arriving at the hotel.",
      "fr": "Les clients arrivaient à l'hôtel."
     },
     {
      "en": "You were sitting in the waiting room, sir.",
      "fr": "Vous étiez assis dans la salle d'attente, monsieur."
     }
    ],
    "pitfalls": [
     {
      "wrong": "I writing a report at nine.",
      "right": "I was writing a report at nine.",
      "why": "L'auxiliaire <b>was / were</b> est obligatoire : -ing seul ne suffit pas."
     },
     {
      "wrong": "We was discussing the budget.",
      "right": "We were discussing the budget.",
      "why": "<b>we / you / they</b> prennent toujours <b>were</b>."
     },
     {
      "wrong": "The assistant was makeing coffee.",
      "right": "The assistant was making coffee.",
      "why": "On enlève le <b>-e</b> final avant -ing (make → making)."
     }
    ],
    "exercises": [
     {
      "type": "mcq",
      "q": "« Je rédigeais un courriel. »",
      "opts": [
       "I wrote an email.",
       "I was writing an email.",
       "I am writing an email."
      ],
      "correct": 1,
      "why": "Action en cours dans le passé : <b>was writing</b>."
     },
     {
      "type": "fill",
      "text": "The manager ___ (wait – past continuous) in reception at noon.",
      "answers": [
       "was waiting"
      ],
      "why": "<i>The manager</i> = he → <b>was</b> + waiting."
     },
     {
      "type": "fill",
      "text": "We ___ (discuss – past continuous) the budget at ten o'clock.",
      "answers": [
       "were discussing"
      ],
      "why": "<b>we</b> → <b>were</b> + discussing."
     },
     {
      "type": "mcq",
      "q": "The guests ___ at the hotel at six.",
      "opts": [
       "were arriving",
       "was arriving",
       "were arrive",
       "arriving"
      ],
      "correct": 0,
      "why": "Sujet pluriel : <b>were</b> + verbe en -ing."
     },
     {
      "type": "speak",
      "en": "I was writing to the client at three o'clock.",
      "fr": "J'écrivais au client à trois heures."
     },
     {
      "type": "fill",
      "text": "The receptionist ___ (check – past continuous) the reservation at that moment.",
      "answers": [
       "was checking"
      ],
      "why": "<i>The receptionist</i> = she → <b>was checking</b>."
     },
     {
      "type": "mcq",
      "q": "Mr and Mrs Lewis ___ reviewing the contract.",
      "opts": [
       "was",
       "been",
       "were"
      ],
      "correct": 2,
      "why": "Deux personnes = pluriel → <b>were</b>."
     },
     {
      "type": "fill",
      "text": "I ___ (read – past continuous) your letter while my colleague ___ (prepare – past continuous) the file.",
      "answers": [
       [
        "was reading"
       ],
       [
        "was preparing"
       ]
      ],
      "why": "I et <i>my colleague</i> (he/she) prennent <b>was</b>."
     },
     {
      "type": "mcq",
      "q": "Quelle phrase est correctement écrite ?",
      "opts": [
       "The assistant was makeing coffee.",
       "The assistant was making coffee.",
       "The assistant was maked coffee."
      ],
      "correct": 1,
      "why": "make → <b>making</b> : on supprime le -e."
     },
     {
      "type": "fill",
      "text": "Ms Clarke and I ___ (travel – past continuous) to Leeds that morning.",
      "answers": [
       "were travelling",
       "were traveling"
      ],
      "why": "Ms Clarke and I = we → <b>were</b> ; en britannique <b>travelling</b>."
     },
     {
      "type": "speak",
      "en": "The guests were arriving at the hotel at six.",
      "fr": "Les clients arrivaient à l'hôtel à six heures."
     },
     {
      "type": "fill",
      "text": "You ___ (sit – past continuous) in the waiting room at two, sir.",
      "answers": [
       "were sitting"
      ],
      "why": "<b>you</b> → <b>were</b> ; sit → <b>sitting</b> (consonne doublée)."
     },
     {
      "type": "mcq",
      "q": "Which sentence is correct?",
      "opts": [
       "We were waiting for the client.",
       "We was waiting for the client.",
       "We waiting for the client."
      ],
      "correct": 0,
      "why": "<b>we were</b> + -ing."
     }
    ]
   },
   {
    "id": "past-continuous-formal-2",
    "reg": "formal",
    "title": "Past continuous : la négation · Formel",
    "why": "En contexte professionnel, on précise poliment ce qui <b>ne se passait pas</b> à un moment donné (une panne, un malentendu). On utilise les formes <b>complètes</b> : <i>was not</i>, <i>were not</i>.",
    "rule": "1. Négation : <b>was not / were not</b> + -ing.<br>2. À l'écrit formel, on évite les contractions : <b>was not</b> plutôt que <i>wasn't</i> (les deux sont corrects).<br>3. Jamais <b>did not</b> + <i>was</i> : l'auxiliaire est déjà <i>was / were</i>.<br>4. Durée : <b>all morning</b>, <b>all day</b>, <b>at that time</b>.",
    "examples": [
     {
      "en": "I was not working at that time.",
      "fr": "Je ne travaillais pas à ce moment-là."
     },
     {
      "en": "The system was not responding all morning.",
      "fr": "Le système ne répondait pas de toute la matinée."
     },
     {
      "en": "The visitors were not wearing badges.",
      "fr": "Les visiteurs ne portaient pas de badge."
     },
     {
      "en": "We were not expecting your call, madam.",
      "fr": "Nous n'attendions pas votre appel, madame."
     },
     {
      "en": "The bank was not offering that service last year.",
      "fr": "La banque ne proposait pas ce service l'an dernier."
     },
     {
      "en": "They were not using the meeting room.",
      "fr": "Ils n'utilisaient pas la salle de réunion."
     }
    ],
    "pitfalls": [
     {
      "wrong": "I did not was working.",
      "right": "I was not working.",
      "why": "Pas de <b>did</b> : on place <b>not</b> après <b>was / were</b>."
     },
     {
      "wrong": "We not were expecting your call.",
      "right": "We were not expecting your call.",
      "why": "<b>not</b> se place <b>après</b> l'auxiliaire."
     },
     {
      "wrong": "The system was not responded.",
      "right": "The system was not responding.",
      "why": "Après was / were, on garde la forme en <b>-ing</b>."
     }
    ],
    "exercises": [
     {
      "type": "mcq",
      "q": "« Je ne travaillais pas à ce moment-là. »",
      "opts": [
       "I did not was working at that time.",
       "I was not working at that time.",
       "I not was working at that time."
      ],
      "correct": 1,
      "why": "Négation : <b>was not</b> + -ing."
     },
     {
      "type": "fill",
      "text": "The system ___ (not respond – past continuous) all morning.",
      "answers": [
       "was not responding",
       "wasn't responding"
      ],
      "why": "<i>The system</i> = it → <b>was not</b> + responding."
     },
     {
      "type": "fill",
      "text": "Sorry, we ___ (not expect – past continuous) anyone before noon.",
      "answers": [
       "were not expecting",
       "weren't expecting"
      ],
      "why": "<b>we</b> → <b>were not</b> + expecting."
     },
     {
      "type": "mcq",
      "q": "The visitors ___ badges.",
      "opts": [
       "were not wearing",
       "was not wearing",
       "were not wear"
      ],
      "correct": 0,
      "why": "Sujet pluriel : <b>were not</b> + -ing."
     },
     {
      "type": "speak",
      "en": "The bank was not offering that service last year.",
      "fr": "La banque ne proposait pas ce service l'an dernier."
     },
     {
      "type": "fill",
      "text": "I am sorry, I ___ (not listen – past continuous) at that moment.",
      "answers": [
       "was not listening",
       "wasn't listening"
      ],
      "why": "<b>I</b> → <b>was not</b> + listening."
     },
     {
      "type": "mcq",
      "q": "Quelle phrase est incorrecte ?",
      "opts": [
       "The staff were not wearing uniforms.",
       "The bank was not opening on Saturdays.",
       "The clerk not was helping us."
      ],
      "correct": 2,
      "why": "<b>not</b> vient après <i>was</i> : <i>The clerk was not helping us</i>."
     },
     {
      "type": "fill",
      "text": "The printer ___ (not work – past continuous) and the technicians ___ (not answer – past continuous) the phone.",
      "answers": [
       [
        "was not working",
        "wasn't working"
       ],
       [
        "were not answering",
        "weren't answering"
       ]
      ],
      "why": "<i>printer</i> = it → was not ; <i>technicians</i> = they → were not."
     },
     {
      "type": "mcq",
      "q": "« The director was not listening. » signifie :",
      "opts": [
       "Le directeur n'écoutait pas.",
       "Le directeur n'écoutera pas.",
       "Le directeur n'a pas écouté la fin."
      ],
      "correct": 0,
      "why": "<b>was not listening</b> = action en cours qui n'avait pas lieu."
     },
     {
      "type": "fill",
      "text": "Mr Evans ___ (not stay – past continuous) at the hotel that week.",
      "answers": [
       "was not staying",
       "wasn't staying"
      ],
      "why": "<i>Mr Evans</i> = he → <b>was not staying</b>."
     },
     {
      "type": "speak",
      "en": "The system was not responding all morning.",
      "fr": "Le système ne répondait pas de toute la matinée."
     },
     {
      "type": "fill",
      "text": "Our guests ___ (not use – past continuous) the lift because it was out of order.",
      "answers": [
       "were not using",
       "weren't using"
      ],
      "why": "<i>guests</i> = they → <b>were not using</b>."
     },
     {
      "type": "mcq",
      "q": "Quelle expression de durée est correcte ? « The line was not working ___. »",
      "opts": [
       "during all the morning",
       "the all morning",
       "all morning"
      ],
      "correct": 2,
      "why": "On dit simplement <b>all morning</b>."
     }
    ]
   },
   {
    "id": "past-continuous-formal-3",
    "reg": "formal",
    "title": "Past continuous : questions et réponses courtes · Formel",
    "why": "Pour poser des questions polies sur ce qui se passait (à un client, à un témoin, à un collègue), on <b>inverse</b> was / were et le sujet. Les réponses courtes reprennent l'auxiliaire.",
    "rule": "1. Question fermée : <b>Was / Were</b> + sujet + -ing ?<br>2. Question ouverte : <b>What / Where / Why</b> + <b>was / were</b> + sujet + -ing ?<br>3. Réponse courte : <b>Yes, I was.</b> / <b>No, I was not.</b> (pas de verbe répété).<br>4. Jamais <b>did</b> dans la question.",
    "examples": [
     {
      "en": "Were you waiting for Mr Hill, madam?",
      "fr": "Attendiez-vous M. Hill, madame ?",
      "note": "Réponse : Yes, I was. / No, I was not."
     },
     {
      "en": "What were you doing at four o'clock, sir?",
      "fr": "Que faisiez-vous à seize heures, monsieur ?"
     },
     {
      "en": "Was the lift working at that time?",
      "fr": "L'ascenseur fonctionnait-il à ce moment-là ?"
     },
     {
      "en": "Where was the delegation staying?",
      "fr": "Où la délégation séjournait-elle ?"
     },
     {
      "en": "Why were they waiting outside?",
      "fr": "Pourquoi attendaient-ils dehors ?"
     }
    ],
    "pitfalls": [
     {
      "wrong": "Did you were waiting for Mr Hill?",
      "right": "Were you waiting for Mr Hill?",
      "why": "On inverse <b>were</b> et le sujet : pas de <i>did</i>."
     },
     {
      "wrong": "— Were you waiting? — Yes, I waited.",
      "right": "— Were you waiting? — Yes, I was.",
      "why": "La réponse courte reprend <b>was / were</b>."
     },
     {
      "wrong": "What you were doing at four?",
      "right": "What were you doing at four?",
      "why": "Après le mot interrogatif, l'auxiliaire passe <b>avant</b> le sujet."
     }
    ],
    "exercises": [
     {
      "type": "mcq",
      "q": "« Attendiez-vous quelqu'un ? »",
      "opts": [
       "Was you waiting for someone?",
       "Were you waiting for someone?",
       "Did you were waiting for someone?"
      ],
      "correct": 1,
      "why": "<b>you</b> → <b>Were you</b> + -ing."
     },
     {
      "type": "fill",
      "text": "___ the lift working at that time? – No, it was not.",
      "answers": [
       "Was"
      ],
      "why": "<i>the lift</i> = it → <b>Was</b> en tête de question."
     },
     {
      "type": "fill",
      "text": "___ you waiting for Mr Hill, madam? – Yes, I ___.",
      "answers": [
       [
        "Were"
       ],
       [
        "was"
       ]
      ],
      "why": "Question : <b>Were you</b> ; réponse courte : <b>I was</b>."
     },
     {
      "type": "mcq",
      "q": "Were the directors meeting clients? – No, ___.",
      "opts": [
       "they were not",
       "they did not",
       "they not were"
      ],
      "correct": 0,
      "why": "On répond avec l'auxiliaire : <b>they were not</b>."
     },
     {
      "type": "speak",
      "en": "What were you doing at four o'clock, sir?",
      "fr": "Que faisiez-vous à seize heures, monsieur ?"
     },
     {
      "type": "fill",
      "text": "What ___ the engineers ___ (do) in the server room?",
      "answers": [
       [
        "were"
       ],
       [
        "doing"
       ]
      ],
      "why": "Mot interrogatif + <b>were</b> + sujet + <b>doing</b>."
     },
     {
      "type": "mcq",
      "q": "« Pourquoi attendaient-ils dehors ? »",
      "opts": [
       "Why they were waiting outside?",
       "Why did they waiting outside?",
       "Why were they waiting outside?"
      ],
      "correct": 2,
      "why": "Why + <b>were</b> + they + -ing."
     },
     {
      "type": "fill",
      "text": "Where ___ the delegation ___ (stay) last week?",
      "answers": [
       [
        "was",
        "were"
       ],
       [
        "staying"
       ]
      ],
      "why": "<i>the delegation</i> (singulier) → <b>was</b> + <b>staying</b>."
     },
     {
      "type": "mcq",
      "q": "Was the bank offering loans then? – Yes, ___.",
      "opts": [
       "it offered",
       "it was",
       "it did"
      ],
      "correct": 1,
      "why": "Réponse courte : <b>it was</b>."
     },
     {
      "type": "fill",
      "text": "Was Ms Brown ___ (attend – past continuous) the conference at noon?",
      "answers": [
       "attending"
      ],
      "why": "Après <b>Was</b> + sujet, on met le verbe en <b>-ing</b>."
     },
     {
      "type": "speak",
      "en": "Why were the clients waiting outside the building?",
      "fr": "Pourquoi les clients attendaient-ils devant le bâtiment ?"
     },
     {
      "type": "fill",
      "text": "___ Mr Hill and his assistant meeting the clients? – Yes, they ___.",
      "answers": [
       [
        "Were"
       ],
       [
        "were"
       ]
      ],
      "why": "Sujet pluriel : <b>Were</b> … / <b>they were</b>."
     },
     {
      "type": "mcq",
      "q": "Choisissez la question correcte.",
      "opts": [
       "Were the engineers working yesterday evening?",
       "Did the engineers working yesterday evening?",
       "Was the engineers working yesterday evening?"
      ],
      "correct": 0,
      "why": "<i>engineers</i> = pluriel → <b>Were</b> + sujet + -ing."
     }
    ]
   },
   {
    "id": "past-continuous-formal-4",
    "reg": "formal",
    "title": "Past continuous et past simple : when / while · Formel",
    "why": "Dans un compte rendu ou un courriel professionnel, on raconte souvent <b>ce qui se passait</b> (past continuous) quand <b>quelque chose est arrivé</b> (past simple).",
    "rule": "1. <b>was / were + -ing</b> = l'action longue, le « décor ».<br>2. <b>past simple</b> = l'action courte qui l'interrompt.<br>3. <b>when</b> + past simple (l'interruption) ; <b>while</b> + past continuous (la durée).<br>4. Deux actions longues en même temps : <b>while</b> + was / were + -ing.<br>5. <b>during</b> se place devant un nom, pas devant un verbe.",
    "timeline": "──── [ I was presenting the results ………… ] ────▶  ● the fire alarm rang",
    "examples": [
     {
      "en": "I was presenting the results when the fire alarm rang.",
      "fr": "Je présentais les résultats quand l'alarme incendie a sonné."
     },
     {
      "en": "While the manager was speaking, a client arrived.",
      "fr": "Pendant que le directeur parlait, un client est arrivé."
     },
     {
      "en": "The accountant was checking the figures when he noticed an error.",
      "fr": "Le comptable vérifiait les chiffres quand il a remarqué une erreur."
     },
     {
      "en": "We were reviewing the contract when the lawyer telephoned.",
      "fr": "Nous examinions le contrat quand l'avocat a téléphoné."
     },
     {
      "en": "While she was interviewing the candidate, her assistant was taking notes.",
      "fr": "Pendant qu'elle faisait passer l'entretien, son assistante prenait des notes."
     }
    ],
    "pitfalls": [
     {
      "wrong": "I was presenting the results when the alarm was ringing.",
      "right": "I was presenting the results when the alarm rang.",
      "why": "L'événement court qui interrompt se met au <b>past simple</b>."
     },
     {
      "wrong": "During the manager was speaking, a client arrived.",
      "right": "While the manager was speaking, a client arrived.",
      "why": "<b>During</b> + nom ; <b>while</b> + sujet + verbe."
     }
    ],
    "exercises": [
     {
      "type": "mcq",
      "q": "« Je présentais les résultats quand l'alarme a sonné. »",
      "opts": [
       "I presented the results when the alarm was ringing.",
       "I was presenting the results when the alarm rang.",
       "I was presenting the results when the alarm rings."
      ],
      "correct": 1,
      "why": "Action longue : <b>was presenting</b> ; interruption : <b>rang</b>."
     },
     {
      "type": "fill",
      "text": "The accountant ___ (check – past continuous) the figures when he ___ (notice – past simple) an error.",
      "answers": [
       [
        "was checking"
       ],
       [
        "noticed"
       ]
      ],
      "why": "Longue : was checking ; courte : noticed."
     },
     {
      "type": "mcq",
      "q": "___ she was interviewing the candidate, her assistant was taking notes.",
      "opts": [
       "During",
       "While",
       "Then"
      ],
      "correct": 1,
      "why": "Deux actions longues en parallèle : <b>while</b>."
     },
     {
      "type": "fill",
      "text": "We ___ (review – past continuous) the contract when the lawyer ___ (telephone – past simple).",
      "answers": [
       [
        "were reviewing"
       ],
       [
        "telephoned"
       ]
      ],
      "why": "Longue : were reviewing ; courte : telephoned."
     },
     {
      "type": "speak",
      "en": "I was presenting the results when the fire alarm rang.",
      "fr": "Je présentais les résultats quand l'alarme incendie a sonné."
     },
     {
      "type": "fill",
      "text": "While the clerk ___ (serve – past continuous) another customer, I filled in the form.",
      "answers": [
       "was serving"
      ],
      "why": "Après <b>while</b>, l'action en cours : <b>was serving</b>."
     },
     {
      "type": "mcq",
      "q": "Dans « I was reading when the phone rang », le past simple (rang) sert pour :",
      "opts": [
       "une habitude",
       "l'action longue en cours",
       "l'action courte qui interrompt"
      ],
      "correct": 2,
      "why": "<b>rang</b> interrompt l'action en cours."
     },
     {
      "type": "fill",
      "text": "The receptionist ___ (answer – past continuous) a call when the guest ___ (come – past simple) in.",
      "answers": [
       [
        "was answering"
       ],
       [
        "came"
       ]
      ],
      "why": "Longue : was answering ; courte : came."
     },
     {
      "type": "mcq",
      "q": "Corrigez : « During the manager was speaking, a client arrived. »",
      "opts": [
       "While the manager was speaking, a client arrived.",
       "While the manager speak, a client arrived.",
       "Since the manager was speaking, a client arrived."
      ],
      "correct": 0,
      "why": "<b>While</b> + sujet + was speaking."
     },
     {
      "type": "fill",
      "text": "At eleven Ms Reed ___ (give – past continuous) a presentation when the projector ___ (stop – past simple).",
      "answers": [
       [
        "was giving"
       ],
       [
        "stopped"
       ]
      ],
      "why": "Longue : was giving ; courte : stopped."
     },
     {
      "type": "speak",
      "en": "While I was waiting for the lift, the director telephoned me.",
      "fr": "Pendant que j'attendais l'ascenseur, la directrice m'a téléphoné."
     },
     {
      "type": "fill",
      "text": "Mr Khan ___ (leave – past continuous) the building when it ___ (begin – past simple) to rain.",
      "answers": [
       [
        "was leaving"
       ],
       [
        "began"
       ]
      ],
      "why": "Longue : was leaving ; courte : began."
     },
     {
      "type": "mcq",
      "q": "Lequel est correct ?",
      "opts": [
       "The guests had lunch when the manager were arriving.",
       "The guests were having lunch when the manager was arrive.",
       "The guests were having lunch when the manager arrived."
      ],
      "correct": 2,
      "why": "Longue : <b>were having</b> ; interruption : <b>arrived</b>."
     }
    ]
   },
   {
    "id": "past-continuous-informal-1",
    "reg": "informal",
    "title": "Past continuous : was / were + -ing · Informel",
    "why": "Entre amis, on raconte ce qu'on <b>était en train de faire</b> : « I was watching telly », « we were hanging out ». Le past continuous plante le décor de l'histoire.",
    "rule": "1. <b>was / were</b> + verbe en <b>-ing</b>.<br>2. <b>I / he / she / it → was</b> ; <b>you / we / they → were</b>.<br>3. Orthographe : <b>run → running</b>, <b>chat → chatting</b>, <b>make → making</b>.<br>4. À l'oral, <i>was</i> et <i>were</i> sont prononcés très vite et faiblement.",
    "timeline": "──── 8h ● [ I was watching telly ………… ] ● 10h ────▶",
    "table": {
     "caption": "be (passé) + -ing",
     "headers": [
      "Sujet",
      "Forme",
      "Exemple décontracté"
     ],
     "rows": [
      [
       "I / he / she / it",
       "<b>was</b> + -ing",
       "He was watching telly."
      ],
      [
       "you / we / they",
       "<b>were</b> + -ing",
       "We were hanging out."
      ]
     ]
    },
    "examples": [
     {
      "en": "I was chatting with Sam on the bus.",
      "fr": "Je discutais avec Sam dans le bus."
     },
     {
      "en": "We were hanging out in the park.",
      "fr": "On traînait au parc."
     },
     {
      "en": "He was watching telly in his room.",
      "fr": "Il regardait la télé dans sa chambre."
     },
     {
      "en": "The kids were making a racket.",
      "fr": "Les gamins faisaient un vacarme."
     },
     {
      "en": "Mum was cooking tea.",
      "fr": "Maman préparait le dîner.",
      "note": "En britannique, <i>tea</i> = repas du soir."
     }
    ],
    "pitfalls": [
     {
      "wrong": "I watching telly.",
      "right": "I was watching telly.",
      "why": "Il faut <b>was / were</b> avant le verbe en -ing."
     },
     {
      "wrong": "They was making a racket.",
      "right": "They were making a racket.",
      "why": "<b>they / we / you</b> → <b>were</b>."
     },
     {
      "wrong": "He was runing home.",
      "right": "He was running home.",
      "why": "On double le <b>n</b> : run → running."
     }
    ],
    "exercises": [
     {
      "type": "mcq",
      "q": "« Je regardais la télé. »",
      "opts": [
       "I was watch telly.",
       "I am watching telly.",
       "I was watching telly."
      ],
      "correct": 2,
      "why": "<b>was</b> + watching."
     },
     {
      "type": "fill",
      "text": "Mum ___ (cook – past continuous) tea at six.",
      "answers": [
       "was cooking"
      ],
      "why": "<i>Mum</i> = she → <b>was cooking</b>."
     },
     {
      "type": "fill",
      "text": "We ___ (hang out – past continuous) in the park all afternoon.",
      "answers": [
       "were hanging out"
      ],
      "why": "<b>we</b> → <b>were</b> + hanging out."
     },
     {
      "type": "mcq",
      "q": "Dave and Liz ___ a row.",
      "opts": [
       "were having",
       "was having",
       "were have"
      ],
      "correct": 0,
      "why": "Deux personnes → <b>were having</b>."
     },
     {
      "type": "speak",
      "en": "I was chatting with Sam on the bus.",
      "fr": "Je discutais avec Sam dans le bus."
     },
     {
      "type": "fill",
      "text": "He ___ (watch – past continuous) telly in his room last night.",
      "answers": [
       "was watching"
      ],
      "why": "<b>he</b> → <b>was watching</b>."
     },
     {
      "type": "mcq",
      "q": "The kids were ___ around the garden.",
      "opts": [
       "runing",
       "running",
       "runneing"
      ],
      "correct": 1,
      "why": "run → <b>running</b> (on double le n)."
     },
     {
      "type": "fill",
      "text": "You ___ (make – past continuous) a racket and I ___ (try – past continuous) to sleep.",
      "answers": [
       [
        "were making"
       ],
       [
        "was trying"
       ]
      ],
      "why": "<b>you</b> → were ; <b>I</b> → was."
     },
     {
      "type": "mcq",
      "q": "Nan ___ knitting by the fire.",
      "opts": [
       "was",
       "were",
       "is"
      ],
      "correct": 0,
      "why": "<i>Nan</i> (singulier) → <b>was</b>."
     },
     {
      "type": "fill",
      "text": "Sophie and I ___ (get – past continuous) ready for the party at eight.",
      "answers": [
       "were getting"
      ],
      "why": "<i>Sophie and I</i> = we → <b>were</b> ; get → <b>getting</b>."
     },
     {
      "type": "speak",
      "en": "We were hanging out at the pub all night.",
      "fr": "On traînait au pub toute la nuit."
     },
     {
      "type": "fill",
      "text": "I ___ (sit – past continuous) on the sofa, eating crisps.",
      "answers": [
       "was sitting"
      ],
      "why": "<b>I</b> → <b>was</b> ; sit → <b>sitting</b>."
     },
     {
      "type": "mcq",
      "q": "Which sentence is correct?",
      "opts": [
       "You laughing at me.",
       "You was laughing at me.",
       "You were laughing at me."
      ],
      "correct": 2,
      "why": "<b>you were</b> + -ing."
     }
    ]
   },
   {
    "id": "past-continuous-informal-2",
    "reg": "informal",
    "title": "Past continuous : la négation · Informel",
    "why": "Pour s'excuser ou se justifier (« I wasn't really listening »), on utilise les formes <b>contractées</b> <i>wasn't</i> et <i>weren't</i>, très naturelles à l'oral.",
    "rule": "1. Négation : <b>wasn't / weren't</b> + -ing (= was not / were not).<br>2. <b>I / he / she / it → wasn't</b> ; <b>you / we / they → weren't</b>.<br>3. Pas de <b>didn't</b> : l'auxiliaire est déjà <i>was / were</i>.<br>4. Renforts : <b>really</b>, <b>at all</b>, <b>even</b>.",
    "examples": [
     {
      "en": "I wasn't really listening, sorry.",
      "fr": "Je n'écoutais pas vraiment, désolé."
     },
     {
      "en": "We weren't doing anything special.",
      "fr": "On ne faisait rien de spécial."
     },
     {
      "en": "She wasn't answering her phone.",
      "fr": "Elle ne répondait pas à son téléphone."
     },
     {
      "en": "The kids weren't sleeping at all.",
      "fr": "Les gamins ne dormaient pas du tout."
     },
     {
      "en": "It wasn't raining at the weekend.",
      "fr": "Il ne pleuvait pas pendant le week-end."
     },
     {
      "en": "He wasn't joking, you know.",
      "fr": "Il ne plaisantait pas, tu sais."
     }
    ],
    "pitfalls": [
     {
      "wrong": "I didn't was listening.",
      "right": "I wasn't listening.",
      "why": "Pas de <b>didn't</b> : on dit <b>wasn't</b> + -ing."
     },
     {
      "wrong": "They wasn't sleeping.",
      "right": "They weren't sleeping.",
      "why": "<b>they</b> → <b>weren't</b>."
     },
     {
      "wrong": "She wasn't answer her phone.",
      "right": "She wasn't answering her phone.",
      "why": "Après wasn't / weren't, il faut le verbe en <b>-ing</b>."
     }
    ],
    "exercises": [
     {
      "type": "mcq",
      "q": "« Je n'écoutais pas vraiment. »",
      "opts": [
       "I didn't was listening.",
       "I don't was listening.",
       "I wasn't really listening."
      ],
      "correct": 2,
      "why": "Négation : <b>wasn't</b> + -ing."
     },
     {
      "type": "fill",
      "text": "We ___ (not do – past continuous) anything special.",
      "answers": [
       "weren't doing",
       "were not doing"
      ],
      "why": "<b>we</b> → <b>weren't</b> + doing."
     },
     {
      "type": "fill",
      "text": "She ___ (not answer – past continuous) her phone all day.",
      "answers": [
       "wasn't answering",
       "was not answering"
      ],
      "why": "<b>she</b> → <b>wasn't</b> + answering."
     },
     {
      "type": "mcq",
      "q": "The kids ___ at all.",
      "opts": [
       "wasn't sleeping",
       "weren't sleeping",
       "didn't sleeping"
      ],
      "correct": 1,
      "why": "<i>The kids</i> = they → <b>weren't sleeping</b>."
     },
     {
      "type": "speak",
      "en": "I wasn't really listening, sorry.",
      "fr": "Je n'écoutais pas vraiment, désolé."
     },
     {
      "type": "fill",
      "text": "It ___ (not rain – past continuous) at the weekend, thank goodness.",
      "answers": [
       "wasn't raining",
       "was not raining"
      ],
      "why": "<b>it</b> → <b>wasn't</b> + raining."
     },
     {
      "type": "mcq",
      "q": "Which sentence is correct?",
      "opts": [
       "He wasn't joking.",
       "He weren't joking.",
       "He didn't joking."
      ],
      "correct": 0,
      "why": "<b>he wasn't</b> + -ing."
     },
     {
      "type": "fill",
      "text": "I ___ (not look – past continuous) and Tom ___ (not pay – past continuous) attention either.",
      "answers": [
       [
        "wasn't looking",
        "was not looking"
       ],
       [
        "wasn't paying",
        "was not paying"
       ]
      ],
      "why": "<b>I</b> et <b>Tom</b> → wasn't."
     },
     {
      "type": "mcq",
      "q": "Que veut dire « You weren't thinking! » ?",
      "opts": [
       "Tu ne penseras pas !",
       "Tu n'as pas pensé à moi !",
       "Tu ne réfléchissais pas !"
      ],
      "correct": 2,
      "why": "<b>weren't thinking</b> = action en cours qui n'avait pas lieu."
     },
     {
      "type": "fill",
      "text": "My phone ___ (not work – past continuous) properly yesterday.",
      "answers": [
       "wasn't working",
       "was not working"
      ],
      "why": "<i>My phone</i> = it → <b>wasn't working</b>."
     },
     {
      "type": "speak",
      "en": "We weren't doing anything special, honestly.",
      "fr": "On ne faisait rien de spécial, franchement."
     },
     {
      "type": "fill",
      "text": "You ___ (not wear – past continuous) a coat and you were freezing.",
      "answers": [
       "weren't wearing",
       "were not wearing"
      ],
      "why": "<b>you</b> → <b>weren't</b> + wearing."
     },
     {
      "type": "mcq",
      "q": "Were you sleeping? – No, I ___.",
      "opts": [
       "wasn't",
       "didn't",
       "weren't"
      ],
      "correct": 0,
      "why": "Réponse courte : <b>I wasn't</b>."
     }
    ]
   },
   {
    "id": "past-continuous-informal-3",
    "reg": "informal",
    "title": "Past continuous : questions et réponses courtes · Informel",
    "why": "Pour demander à un ami ce qu'il faisait (« What were you up to? »), on inverse <b>was / were</b> et le sujet. Les réponses courtes sont très fréquentes à l'oral.",
    "rule": "1. Question fermée : <b>Was / Were</b> + sujet + -ing ?<br>2. Question ouverte : <b>What / Who / Why / Where</b> + <b>was / were</b> + sujet + -ing ?<br>3. Réponses : <b>Yeah, I was.</b> / <b>No, I wasn't.</b><br>4. Pas de <b>did</b> dans la question.",
    "examples": [
     {
      "en": "What were you up to last night?",
      "fr": "Tu faisais quoi hier soir ?"
     },
     {
      "en": "Were you sleeping?",
      "fr": "Tu dormais ?",
      "note": "Réponse : Yeah, I was. / No, I wasn't."
     },
     {
      "en": "Who were you texting?",
      "fr": "À qui tu envoyais des messages ?"
     },
     {
      "en": "Was it raining at the festival?",
      "fr": "Il pleuvait au festival ?"
     },
     {
      "en": "Why were they shouting?",
      "fr": "Pourquoi ils criaient ?"
     },
     {
      "en": "Were you two arguing again?",
      "fr": "Vous vous disputiez encore, tous les deux ?"
     }
    ],
    "pitfalls": [
     {
      "wrong": "Did you were sleeping?",
      "right": "Were you sleeping?",
      "why": "On inverse <b>were</b> et <b>you</b> : pas de <i>did</i>."
     },
     {
      "wrong": "— Were you sleeping? — Yes, I slept.",
      "right": "— Were you sleeping? — Yeah, I was.",
      "why": "La réponse courte reprend <b>was / were</b>."
     },
     {
      "wrong": "What you were doing?",
      "right": "What were you doing?",
      "why": "L'auxiliaire passe <b>avant</b> le sujet."
     }
    ],
    "exercises": [
     {
      "type": "mcq",
      "q": "« Qu'est-ce que tu faisais hier soir ? »",
      "opts": [
       "What did you doing last night?",
       "What were you doing last night?",
       "What you were doing last night?"
      ],
      "correct": 1,
      "why": "What + <b>were you</b> + doing."
     },
     {
      "type": "fill",
      "text": "___ you sleeping? – Yeah, I ___.",
      "answers": [
       [
        "Were"
       ],
       [
        "was"
       ]
      ],
      "why": "Question : <b>Were you</b> ; réponse : <b>I was</b>."
     },
     {
      "type": "fill",
      "text": "Who ___ you ___ (text – past continuous)?",
      "answers": [
       [
        "were"
       ],
       [
        "texting"
       ]
      ],
      "why": "Who + <b>were you</b> + <b>texting</b>."
     },
     {
      "type": "mcq",
      "q": "Were they shouting? – No, ___.",
      "opts": [
       "they weren't",
       "they didn't",
       "they wasn't"
      ],
      "correct": 0,
      "why": "Réponse courte : <b>they weren't</b>."
     },
     {
      "type": "speak",
      "en": "Who were you texting at midnight?",
      "fr": "À qui tu envoyais des messages à minuit ?"
     },
     {
      "type": "fill",
      "text": "___ it raining at the festival?",
      "answers": [
       "Was"
      ],
      "why": "<b>it</b> → <b>Was</b> en début de question."
     },
     {
      "type": "mcq",
      "q": "Which question is right?",
      "opts": [
       "Did you two arguing again?",
       "Was you two arguing again?",
       "Were you two arguing again?"
      ],
      "correct": 2,
      "why": "<i>you two</i> = vous → <b>Were</b>."
     },
     {
      "type": "fill",
      "text": "Why ___ they ___ (shout – past continuous) at each other?",
      "answers": [
       [
        "were"
       ],
       [
        "shouting"
       ]
      ],
      "why": "Why + <b>were they</b> + <b>shouting</b>."
     },
     {
      "type": "mcq",
      "q": "Réponse naturelle à « Was he joking? »",
      "opts": [
       "Yeah, he did.",
       "Yeah, he were.",
       "Yeah, he was."
      ],
      "correct": 2,
      "why": "<b>he was</b> : on reprend l'auxiliaire."
     },
     {
      "type": "fill",
      "text": "What ___ (you / do – past continuous) in my room?",
      "answers": [
       "were you doing"
      ],
      "why": "What + <b>were you doing</b>."
     },
     {
      "type": "speak",
      "en": "What were you up to last night?",
      "fr": "Tu faisais quoi hier soir ?"
     },
     {
      "type": "fill",
      "text": "Where ___ you two ___ (go – past continuous) in that taxi?",
      "answers": [
       [
        "were"
       ],
       [
        "going"
       ]
      ],
      "why": "Where + <b>were</b> + you two + <b>going</b>."
     },
     {
      "type": "mcq",
      "q": "Was she crying? – Which short answer is right?",
      "opts": [
       "No, she wasn't.",
       "No, she isn't.",
       "No, she weren't."
      ],
      "correct": 0,
      "why": "<b>she wasn't</b>."
     }
    ]
   },
   {
    "id": "past-continuous-informal-4",
    "reg": "informal",
    "title": "Past continuous et past simple : when / while · Informel",
    "why": "Pour raconter une anecdote entre amis : <b>ce qui se passait</b> (past continuous) quand <b>un truc est arrivé</b> (past simple). « I was walking home when it started to pour. »",
    "rule": "1. <b>was / were + -ing</b> = l'action longue, le décor.<br>2. <b>past simple</b> = l'action courte qui interrompt.<br>3. <b>when</b> + past simple ; <b>while</b> + past continuous.<br>4. Deux actions longues en même temps : <b>while</b> + was / were + -ing.",
    "examples": [
     {
      "en": "I was walking home when it started to pour.",
      "fr": "Je rentrais à pied quand il s'est mis à pleuvoir à verse."
     },
     {
      "en": "While I was making tea, the cat knocked over a mug.",
      "fr": "Pendant que je préparais le thé, le chat a renversé une tasse."
     },
     {
      "en": "We were chatting when Mum walked in.",
      "fr": "On discutait quand maman est entrée."
     },
     {
      "en": "Dan was texting me while he was watching the match.",
      "fr": "Dan m'envoyait des messages pendant qu'il regardait le match."
     },
     {
      "en": "I was dancing when I ripped my jeans.",
      "fr": "Je dansais quand j'ai déchiré mon jean."
     },
     {
      "en": "While you were snoring, I was doing the washing-up.",
      "fr": "Pendant que tu ronflais, je faisais la vaisselle."
     }
    ],
    "pitfalls": [
     {
      "wrong": "I was walking home when it was starting to pour.",
      "right": "I was walking home when it started to pour.",
      "why": "L'événement qui interrompt se met au <b>past simple</b>."
     },
     {
      "wrong": "During I was making tea, the cat knocked over a mug.",
      "right": "While I was making tea, the cat knocked over a mug.",
      "why": "<b>During</b> + nom ; <b>while</b> + sujet + verbe."
     }
    ],
    "exercises": [
     {
      "type": "mcq",
      "q": "« Je marchais quand il s'est mis à pleuvoir. »",
      "opts": [
       "I walked when it was starting to rain.",
       "I was walking when it started to rain.",
       "I was walking when it starts to rain."
      ],
      "correct": 1,
      "why": "Longue : <b>was walking</b> ; courte : <b>started</b>."
     },
     {
      "type": "fill",
      "text": "We ___ (chat – past continuous) when Mum walked in.",
      "answers": [
       "were chatting"
      ],
      "why": "<b>we</b> → <b>were chatting</b> (chat → chatting)."
     },
     {
      "type": "mcq",
      "q": "___ you were snoring, I was doing the washing-up.",
      "opts": [
       "While",
       "During",
       "Then"
      ],
      "correct": 0,
      "why": "Deux actions longues en parallèle : <b>while</b>."
     },
     {
      "type": "fill",
      "text": "Dan ___ (watch – past continuous) the match when the telly ___ (go – past simple) off.",
      "answers": [
       [
        "was watching"
       ],
       [
        "went"
       ]
      ],
      "why": "Longue : was watching ; courte : went."
     },
     {
      "type": "speak",
      "en": "I was cooking tea when my brother rang.",
      "fr": "Je préparais le dîner quand mon frère a appelé."
     },
     {
      "type": "fill",
      "text": "While I ___ (make – past continuous) tea, the cat knocked over a mug.",
      "answers": [
       "was making"
      ],
      "why": "Après <b>while</b> : <b>was making</b> (make → making)."
     },
     {
      "type": "mcq",
      "q": "Dans « We were laughing when the teacher came in », quelle action interrompt l'autre ?",
      "opts": [
       "came in",
       "were laughing",
       "les deux"
      ],
      "correct": 0,
      "why": "<b>came in</b> (past simple) interrompt."
     },
     {
      "type": "fill",
      "text": "I ___ (dance – past continuous) when I ___ (rip – past simple) my jeans.",
      "answers": [
       [
        "was dancing"
       ],
       [
        "ripped"
       ]
      ],
      "why": "Longue : was dancing ; courte : ripped."
     },
     {
      "type": "mcq",
      "q": "Lequel est correct ?",
      "opts": [
       "I eating crisps when my phone rang.",
       "I was eating crisps when my phone was ring.",
       "I was eating crisps when my phone rang."
      ],
      "correct": 2,
      "why": "Longue : <b>was eating</b> ; courte : <b>rang</b>."
     },
     {
      "type": "fill",
      "text": "Gran ___ (sleep – past continuous) in the armchair while we ___ (play – past continuous) cards.",
      "answers": [
       [
        "was sleeping"
       ],
       [
        "were playing"
       ]
      ],
      "why": "Deux actions longues en parallèle."
     },
     {
      "type": "speak",
      "en": "While you were snoring, I was doing the washing-up.",
      "fr": "Pendant que tu ronflais, je faisais la vaisselle."
     },
     {
      "type": "fill",
      "text": "She ___ (cross – past continuous) the road when she dropped her phone.",
      "answers": [
       "was crossing"
      ],
      "why": "Action longue : <b>was crossing</b> ; <i>dropped</i> interrompt."
     },
     {
      "type": "mcq",
      "q": "Pourquoi « started » dans « I was walking home when it started to pour » ?",
      "opts": [
       "Habitude",
       "Action longue en cours",
       "Action courte qui interrompt"
      ],
      "correct": 2,
      "why": "Le past simple marque l'événement soudain."
     }
    ]
   }
  ]
 },
 {
  "id": "temps-en-will",
  "group": "temps",
  "icon": "🔮",
  "title": "Le futur : will / won't",
  "level": "A2",
  "intro": "<b>Will</b> : décision sur le moment, promesse, offre, prédiction. Ici, deux registres : <b>formel</b> (travail, administration, service) et <b>informel</b> (amis, famille).",
  "lessons": [
   {
    "id": "will-formal-1",
    "reg": "formal",
    "title": "Annoncer ce qu'on fera : will + verbe · Formel",
    "why": "Dans un courriel ou au téléphone professionnel, on annonce une action avec <b>will</b> : « Je vous enverrai… », « Nous vous contacterons… ». Un seul petit mot invariable remplace les terminaisons françaises du futur.",
    "rule": "1. Sujet + <b>will</b> + verbe à la base (sans <b>to</b>).<br>2. Will ne change jamais : I will, he will, they will (pas de -s).<br>3. À l'écrit formel on garde souvent la forme pleine ; à l'oral on contracte : I'll, we'll.<br>4. Marqueurs : <b>tomorrow</b>, <b>next week</b>, <b>by Friday</b>, <b>shortly</b>, <b>in due course</b>.",
    "table": {
     "caption": "will · forme pleine et contraction",
     "headers": [
      "Sujet",
      "Forme pleine",
      "Contraction"
     ],
     "rows": [
      [
       "I",
       "I <b>will</b> call",
       "I<b>'ll</b> call"
      ],
      [
       "you",
       "you <b>will</b> call",
       "you<b>'ll</b> call"
      ],
      [
       "he / she / it",
       "she <b>will</b> call",
       "she<b>'ll</b> call"
      ],
      [
       "we",
       "we <b>will</b> call",
       "we<b>'ll</b> call"
      ],
      [
       "they",
       "they <b>will</b> call",
       "they<b>'ll</b> call"
      ]
     ]
    },
    "timeline": "maintenant ───▶ tomorrow · next week · by Friday (I will send)",
    "examples": [
     {
      "en": "I will send you the report by Friday.",
      "fr": "Je vous enverrai le rapport d'ici vendredi."
     },
     {
      "en": "Mr Clarke will call you tomorrow morning.",
      "fr": "M. Clarke vous appellera demain matin."
     },
     {
      "en": "The bank will contact you next week.",
      "fr": "La banque vous contactera la semaine prochaine."
     },
     {
      "en": "Our team will be in the office on Monday.",
      "fr": "Notre équipe sera au bureau lundi.",
      "note": "will be : le verbe « être » aussi se met à la base (be)."
     },
     {
      "en": "The conference will start at nine o'clock.",
      "fr": "La conférence commencera à neuf heures."
     },
     {
      "en": "We will reply to your enquiry shortly.",
      "fr": "Nous répondrons à votre demande sous peu."
     }
    ],
    "pitfalls": [
     {
      "wrong": "I will to send the file.",
      "right": "I will send the file.",
      "why": "Après <b>will</b>, jamais de <b>to</b> : le verbe reste nu."
     },
     {
      "wrong": "She will calls our clients.",
      "right": "She will call our clients.",
      "why": "Will est invariable : pas de -s au verbe, même à she / he / it."
     },
     {
      "wrong": "I send you the document tomorrow.",
      "right": "I will send you the document tomorrow.",
      "why": "Le français dit « je vous envoie demain » ; en anglais, annoncer une action à venir demande <b>will</b>."
     }
    ],
    "exercises": [
     {
      "type": "mcq",
      "q": "« Je vous enverrai le dossier. » =",
      "opts": [
       "I will send you the file.",
       "I send you the file.",
       "I will to send you the file."
      ],
      "correct": 0,
      "why": "Futur annoncé : <b>will</b> + verbe sans to."
     },
     {
      "type": "fill",
      "text": "Mr Hill ___ (call) you tomorrow morning.",
      "answers": [
       "will call",
       "'ll call",
       "’ll call"
      ],
      "why": "Sujet + <b>will</b> + verbe à la base."
     },
     {
      "type": "mcq",
      "q": "Quelle phrase est correcte ?",
      "opts": [
       "She will calls our clients.",
       "She will call our clients.",
       "She wills call our clients.",
       "She will to call our clients."
      ],
      "correct": 1,
      "why": "Will est invariable et suivi du verbe nu."
     },
     {
      "type": "fill",
      "text": "We ___ (confirm) your reservation shortly.",
      "answers": [
       "will confirm",
       "'ll confirm",
       "’ll confirm"
      ],
      "why": "We + <b>will</b> + verbe à la base."
     },
     {
      "type": "speak",
      "en": "I will send you the report by Friday.",
      "fr": "Je vous enverrai le rapport d'ici vendredi."
     },
     {
      "type": "fill",
      "text": "The meeting ___ (start) at nine o'clock.",
      "answers": [
       "will start",
       "'ll start",
       "’ll start",
       "starts"
      ],
      "why": "Même forme pour un sujet singulier : <b>will start</b>."
     },
     {
      "type": "mcq",
      "q": "Après will, le verbe est…",
      "opts": [
       "à l'infinitif avec to",
       "avec -s à la 3e personne",
       "à la base, sans to"
      ],
      "correct": 2,
      "why": "<b>will</b> + base : jamais de to, jamais de -s."
     },
     {
      "type": "fill",
      "text": "Our assistant ___ (book) the room and I ___ (send) the agenda.",
      "answers": [
       [
        "will book",
        "'ll book",
        "’ll book"
       ],
       [
        "will send",
        "'ll send",
        "’ll send"
       ]
      ],
      "why": "Deux sujets, deux fois <b>will</b> + verbe à la base."
     },
     {
      "type": "fill",
      "text": "The bank ___ (contact) you next week.",
      "answers": [
       "will contact",
       "'ll contact",
       "’ll contact"
      ],
      "why": "<b>next week</b> annonce le futur : will contact."
     },
     {
      "type": "speak",
      "en": "We will confirm your booking in due course.",
      "fr": "Nous confirmerons votre réservation en temps utile."
     },
     {
      "type": "mcq",
      "q": "« Nous vous répondrons sous peu. » =",
      "opts": [
       "We will reply to you shortly.",
       "We reply you shortly.",
       "We will to reply you shortly."
      ],
      "correct": 0,
      "why": "<b>will</b> + reply, sans to."
     },
     {
      "type": "fill",
      "text": "I ___ (be) in the office on Monday.",
      "answers": [
       "will be",
       "'ll be",
       "’ll be"
      ],
      "why": "« Être » se met aussi à la base : <b>will be</b>."
     },
     {
      "type": "mcq",
      "q": "Which sentence is correct?",
      "opts": [
       "The director will attend the conference.",
       "The director will to attend the conference.",
       "The director wills attend the conference.",
       "The director attends will the conference."
      ],
      "correct": 0,
      "why": "Ordre : sujet + <b>will</b> + verbe."
     }
    ]
   },
   {
    "id": "will-formal-2",
    "reg": "formal",
    "title": "Refuser ou nuancer : will not / won't · Formel",
    "why": "Dans le monde professionnel, on doit souvent dire poliment ce qu'on ne pourra <b>pas</b> faire : une date, un service, une information. La négation de will se fait sans aucun auxiliaire supplémentaire.",
    "rule": "1. Sujet + <b>will not</b> + verbe à la base.<br>2. Contraction irrégulière : will not → <b>won't</b> (pas « willn't »).<br>3. Jamais de do / does : « I do not will » est faux.<br>4. À l'écrit très formel : <b>will not</b> ; à l'oral et dans un courriel courant : <b>won't</b>.<br>5. Utile : <b>not until</b> (pas avant), <b>never</b>, <b>unfortunately</b>.",
    "examples": [
     {
      "en": "Unfortunately, we will not be able to attend.",
      "fr": "Malheureusement, nous ne pourrons pas y assister."
     },
     {
      "en": "The office will not open until nine o'clock.",
      "fr": "Le bureau n'ouvrira pas avant neuf heures."
     },
     {
      "en": "Mr Dale won't be available on Friday.",
      "fr": "M. Dale ne sera pas disponible vendredi."
     },
     {
      "en": "I will not discuss this matter by telephone.",
      "fr": "Je ne discuterai pas de cette question par téléphone."
     },
     {
      "en": "Our staff will never share your details.",
      "fr": "Notre personnel ne communiquera jamais vos coordonnées."
     },
     {
      "en": "The parcel won't arrive before Tuesday.",
      "fr": "Le colis n'arrivera pas avant mardi."
     }
    ],
    "pitfalls": [
     {
      "wrong": "I willn't attend the meeting.",
      "right": "I won't attend the meeting.",
      "why": "La contraction de will not est irrégulière : <b>won't</b>."
     },
     {
      "wrong": "We do not will accept cash.",
      "right": "We will not accept cash.",
      "why": "Pas de <b>do</b> avec will : on place <b>not</b> directement après will."
     },
     {
      "wrong": "The shop will not to open today.",
      "right": "The shop will not open today.",
      "why": "Même à la négative, le verbe reste à la base, sans to."
     }
    ],
    "exercises": [
     {
      "type": "mcq",
      "q": "« Le directeur ne sera pas disponible. » =",
      "opts": [
       "The director willn't be available.",
       "The director doesn't will be available.",
       "The director won't be available."
      ],
      "correct": 2,
      "why": "Négation : <b>won't</b> + base."
     },
     {
      "type": "fill",
      "text": "The office ___ (not / open) until nine o'clock.",
      "answers": [
       "will not open",
       "won't open",
       "won’t open"
      ],
      "why": "<b>will not</b> ou <b>won't</b> + verbe à la base."
     },
     {
      "type": "mcq",
      "q": "La contraction de will not est…",
      "opts": [
       "won't",
       "willn't",
       "wo'nt"
      ],
      "correct": 0,
      "why": "Forme irrégulière à retenir : <b>won't</b>."
     },
     {
      "type": "fill",
      "text": "I ___ (not / share) your details with anyone.",
      "answers": [
       "will not share",
       "won't share",
       "won’t share"
      ],
      "why": "Négation : will not + base."
     },
     {
      "type": "speak",
      "en": "The delivery won't arrive before Tuesday.",
      "fr": "La livraison n'arrivera pas avant mardi."
     },
     {
      "type": "fill",
      "text": "We ___ (not / be) able to attend the meeting.",
      "answers": [
       "will not be",
       "won't be",
       "won’t be"
      ],
      "why": "« Be » se met aussi à la base après will not."
     },
     {
      "type": "mcq",
      "q": "Which sentence is correct?",
      "opts": [
       "Our staff do not will discuss this by telephone.",
       "Our staff not will discuss this by telephone.",
       "Our staff will not to discuss this by telephone.",
       "Our staff will not discuss this by telephone."
      ],
      "correct": 3,
      "why": "Sujet + <b>will not</b> + verbe, sans do ni to."
     },
     {
      "type": "fill",
      "text": "Mr Dale ___ (not / be) in tomorrow, so he ___ (not / attend) the call.",
      "answers": [
       [
        "will not be",
        "won't be",
        "won’t be"
       ],
       [
        "will not attend",
        "won't attend",
        "won’t attend"
       ]
      ],
      "why": "Deux négations : <b>won't be</b>, <b>won't attend</b>."
     },
     {
      "type": "fill",
      "text": "Unfortunately, the bank ___ (not / process) the payment before Monday.",
      "answers": [
       "will not process",
       "won't process",
       "won’t process"
      ],
      "why": "Refus poli : will not + verbe."
     },
     {
      "type": "speak",
      "en": "I will not share your details with anyone.",
      "fr": "Je ne communiquerai vos coordonnées à personne."
     },
     {
      "type": "mcq",
      "q": "« Notre société n'acceptera pas ce paiement. » =",
      "opts": [
       "Our company not will accept this payment.",
       "Our company doesn't will accept this payment.",
       "Our company will not accept this payment."
      ],
      "correct": 2,
      "why": "Négation de will : <b>will not</b> directement."
     },
     {
      "type": "fill",
      "text": "The hotel ___ (not / serve) breakfast before seven o'clock.",
      "answers": [
       "will not serve",
       "won't serve",
       "won’t serve"
      ],
      "why": "<b>won't serve</b> ou will not serve."
     },
     {
      "type": "mcq",
      "q": "Dans « We will never share your data », never se place…",
      "opts": [
       "après will",
       "avant will",
       "après le verbe"
      ],
      "correct": 0,
      "why": "Les adverbes comme <b>never</b> se placent entre will et le verbe."
     }
    ]
   },
   {
    "id": "will-formal-3",
    "reg": "formal",
    "title": "Questions, réponses courtes et offres : Will…? Shall I…? · Formel",
    "why": "Pour interroger poliment un client ou un collègue, ou pour proposer votre aide, l'anglais inverse <b>will</b> et le sujet. Pour une offre, <b>Shall I…?</b> sonne plus professionnel que Will I.",
    "rule": "1. <b>Will</b> + sujet + verbe à la base ?<br>2. Pas de do / does : « Do you will… » est faux.<br>3. Réponses courtes : <b>Yes, I will.</b> / <b>No, I won't.</b> (jamais « Yes, I'll. »).<br>4. Offre ou suggestion : <b>Shall I…?</b> / <b>Shall we…?</b> (surtout avec I et we).<br>5. Demande polie : <b>Will you…, please?</b>",
    "examples": [
     {
      "en": "Will you attend the conference next month?",
      "fr": "Assisterez-vous à la conférence le mois prochain ?"
     },
     {
      "en": "Will the manager be available on Thursday?",
      "fr": "Le directeur sera-t-il disponible jeudi ?"
     },
     {
      "en": "Shall I book a taxi for you, Mr Evans?",
      "fr": "Puis-je vous réserver un taxi, Monsieur Evans ?"
     },
     {
      "en": "Will your colleagues join us for dinner?",
      "fr": "Vos collègues se joindront-ils à nous pour le dîner ?"
     },
     {
      "en": "Will you need a receipt? — Yes, I will.",
      "fr": "Aurez-vous besoin d'un reçu ? — Oui."
     },
     {
      "en": "Will the hotel provide a shuttle? — No, it won't.",
      "fr": "L'hôtel fournira-t-il une navette ? — Non."
     }
    ],
    "pitfalls": [
     {
      "wrong": "Do you will attend the meeting?",
      "right": "Will you attend the meeting?",
      "why": "Pas de <b>do</b> : on inverse will et le sujet."
     },
     {
      "wrong": "Will you need a receipt? — Yes, I'll.",
      "right": "Will you need a receipt? — Yes, I will.",
      "why": "Une réponse courte affirmative garde la forme pleine <b>will</b>."
     },
     {
      "wrong": "Will I send you the invoice?",
      "right": "Shall I send you the invoice?",
      "why": "Pour proposer son aide, on emploie <b>Shall I</b> ; « Will I » pose une question sur l'avenir."
     }
    ],
    "exercises": [
     {
      "type": "mcq",
      "q": "Comment demander : « Assistera-t-il à la réunion ? »",
      "opts": [
       "Does he will attend the meeting?",
       "Will he attend the meeting?",
       "He will attend the meeting?"
      ],
      "correct": 1,
      "why": "Question : <b>Will</b> + sujet + base."
     },
     {
      "type": "fill",
      "text": "___ you attend the conference next month?",
      "answers": [
       "Will",
       "will"
      ],
      "why": "On inverse : Will + sujet."
     },
     {
      "type": "mcq",
      "q": "Offre polie : « Puis-je vous envoyer la facture ? »",
      "opts": [
       "Will I send you the invoice?",
       "Do I will send you the invoice?",
       "Shall I send you the invoice?"
      ],
      "correct": 2,
      "why": "Une offre se fait avec <b>Shall I</b>."
     },
     {
      "type": "fill",
      "text": "___ I book a taxi for you, Mr Evans? (offre)",
      "answers": [
       "Shall",
       "shall"
      ],
      "why": "Offre à la 1re personne : <b>Shall I</b>."
     },
     {
      "type": "speak",
      "en": "Will the manager be available on Thursday?",
      "fr": "Le directeur sera-t-il disponible jeudi ?"
     },
     {
      "type": "fill",
      "text": "Will your colleagues join us for dinner? — No, they ___.",
      "answers": [
       "won't",
       "won’t",
       "will not"
      ],
      "why": "Réponse courte négative : <b>No, they won't.</b>"
     },
     {
      "type": "mcq",
      "q": "Will you need a receipt ? Réponse courte affirmative :",
      "opts": [
       "Yes, I will.",
       "Yes, I'll.",
       "Yes, I do."
      ],
      "correct": 0,
      "why": "Réponse courte : on répète <b>will</b>, sans contraction."
     },
     {
      "type": "fill",
      "text": "___ the documents be ready by Friday? — Yes, they ___.",
      "answers": [
       [
        "Will",
        "will"
       ],
       [
        "will"
       ]
      ],
      "why": "Question : Will + sujet ; réponse : <b>Yes, they will.</b>"
     },
     {
      "type": "fill",
      "text": "___ we send the contract to your solicitor? (offre)",
      "answers": [
       "Shall",
       "shall"
      ],
      "why": "Offre avec we : <b>Shall we</b>."
     },
     {
      "type": "speak",
      "en": "Shall I send you the invoice?",
      "fr": "Puis-je vous envoyer la facture ?"
     },
     {
      "type": "mcq",
      "q": "Which question is correct?",
      "opts": [
       "Will you to sign the form today?",
       "Will you sign the form today?",
       "Do you will sign the form today?"
      ],
      "correct": 1,
      "why": "Will + sujet + base, sans to ni do."
     },
     {
      "type": "fill",
      "text": "Will the hotel ___ (provide) a shuttle to the airport?",
      "answers": [
       "provide"
      ],
      "why": "Après la question avec <b>Will</b>, le verbe reste à la base."
     },
     {
      "type": "mcq",
      "q": "Shall s'emploie surtout…",
      "opts": [
       "avec they et she pour les prédictions",
       "avec tous les sujets pour refuser",
       "avec I et we pour proposer quelque chose"
      ],
      "correct": 2,
      "why": "<b>Shall I / Shall we</b> : proposer, suggérer."
     }
    ]
   },
   {
    "id": "will-formal-4",
    "reg": "formal",
    "title": "Promesses, offres, décisions et prédictions · Formel",
    "why": "Dans les affaires, will sert à <b>promettre</b>, à <b>proposer</b>, à <b>décider sur le moment</b> et à <b>prédire</b>. Quand un plan est déjà organisé, on préfère <b>be going to</b> : c'est l'opposition à connaître.",
    "rule": "1. Promesse : <b>I will</b> + verbe (« I will reply today »).<br>2. Décision prise au moment de parler : « Very well, I will take the room. »<br>3. Offre spontanée : « I will carry your bag. »<br>4. Prédiction / opinion : <b>I think</b>, <b>I expect</b>, <b>probably</b> + will.<br>5. Négatif d'opinion : <b>I don't think</b> + sujet + will (pas « I think … will not »).<br>6. Plan déjà décidé : <b>be going to</b> (« We are going to open a branch : the contract is signed »).",
    "examples": [
     {
      "en": "I promise that I will reply within 24 hours.",
      "fr": "Je vous promets de répondre sous 24 heures."
     },
     {
      "en": "The room is rather small. I will take the larger one, please.",
      "fr": "La chambre est plutôt petite. Je prendrai la plus grande, s'il vous plaît."
     },
     {
      "en": "I will carry your suitcase to your room, madam.",
      "fr": "Je porterai votre valise jusqu'à votre chambre, Madame."
     },
     {
      "en": "I expect the market will recover next year.",
      "fr": "Je pense que le marché se redressera l'an prochain."
     },
     {
      "en": "We are going to open a new branch in Leeds ; the contract is signed.",
      "fr": "Nous allons ouvrir une agence à Leeds ; le contrat est signé.",
      "note": "Plan déjà décidé : be going to."
     },
     {
      "en": "I think our clients will appreciate the new service.",
      "fr": "Je pense que nos clients apprécieront le nouveau service."
     }
    ],
    "pitfalls": [
     {
      "wrong": "I promise that I reply today.",
      "right": "I promise that I will reply today.",
      "why": "Une promesse demande <b>will</b>."
     },
     {
      "wrong": "The room is too small. I am going to take the larger one.",
      "right": "The room is too small. I will take the larger one.",
      "why": "Une décision prise à l'instant s'exprime avec <b>will</b>, pas going to."
     },
     {
      "wrong": "I think the report will be not ready.",
      "right": "I don't think the report will be ready.",
      "why": "On nie le verbe d'opinion : <b>I don't think</b> + will."
     }
    ],
    "exercises": [
     {
      "type": "mcq",
      "q": "Décision sur le moment : « Très bien, je prends la chambre. »",
      "opts": [
       "Very well, I will take the room.",
       "Very well, I am going to take the room.",
       "Very well, I take the room."
      ],
      "correct": 0,
      "why": "Décision prise à l'instant : <b>will</b>."
     },
     {
      "type": "fill",
      "text": "I promise that I ___ (send) the contract today.",
      "answers": [
       "will send",
       "'ll send",
       "’ll send"
      ],
      "why": "Promesse : <b>will</b> + base."
     },
     {
      "type": "mcq",
      "q": "Quelle phrase est une offre spontanée ?",
      "opts": [
       "I carry your suitcase, madam.",
       "I will carry your suitcase, madam.",
       "I will to carry your suitcase, madam."
      ],
      "correct": 1,
      "why": "Offre : <b>I will</b> + verbe."
     },
     {
      "type": "fill",
      "text": "I expect the market ___ (recover) next year.",
      "answers": [
       "will recover",
       "'ll recover",
       "’ll recover"
      ],
      "why": "Prédiction : will + base."
     },
     {
      "type": "speak",
      "en": "I will carry your suitcase to your room, madam.",
      "fr": "Je porterai votre valise jusqu'à votre chambre, Madame."
     },
     {
      "type": "fill",
      "text": "The room is rather small. I ___ (take) the larger one, please.",
      "answers": [
       "will take",
       "'ll take",
       "’ll take"
      ],
      "why": "Décision immédiate : <b>will take</b>."
     },
     {
      "type": "mcq",
      "q": "Dans « The printer is jammed. — I will fix it. », will exprime…",
      "opts": [
       "un plan prévu de longue date",
       "une habitude",
       "une offre spontanée"
      ],
      "correct": 2,
      "why": "Proposition faite au moment même : <b>will</b>."
     },
     {
      "type": "fill",
      "text": "I don't think the report ___ (be) ready on time.",
      "answers": [
       "will be",
       "'ll be",
       "’ll be"
      ],
      "why": "<b>I don't think</b> + sujet + will."
     },
     {
      "type": "fill",
      "text": "Thank you for your call. I ___ (check) the file and I ___ (phone) you back this afternoon.",
      "answers": [
       [
        "will check",
        "'ll check",
        "’ll check"
       ],
       [
        "will phone",
        "'ll phone",
        "’ll phone"
       ]
      ],
      "why": "Deux engagements : <b>will check</b>, <b>will phone</b>."
     },
     {
      "type": "speak",
      "en": "I promise that I will reply within twenty-four hours.",
      "fr": "Je promets de répondre sous vingt-quatre heures."
     },
     {
      "type": "mcq",
      "q": "Which sentence is correct?",
      "opts": [
       "I think the meeting won't be long.",
       "I think the meeting will be not long.",
       "I think the meeting not will be long."
      ],
      "correct": 0,
      "why": "Négation : <b>won't</b> juste après le sujet."
     },
     {
      "type": "fill",
      "text": "I ___ (not / forget) your request, Mr Brown.",
      "answers": [
       "will not forget",
       "won't forget",
       "won’t forget"
      ],
      "why": "Promesse négative : <b>won't forget</b>."
     },
     {
      "type": "mcq",
      "q": "Quelle phrase n'est PAS correcte ?",
      "opts": [
       "We will contact you tomorrow.",
       "We will to contact you tomorrow.",
       "We will not contact you tomorrow."
      ],
      "correct": 1,
      "why": "Jamais de <b>to</b> après will."
     }
    ]
   },
   {
    "id": "will-informal-1",
    "reg": "informal",
    "title": "Dire ce qu'on fera : 'll + verbe · Informel",
    "why": "Entre amis, en famille ou par SMS, on contracte presque toujours : <b>I'll</b>, <b>we'll</b>, <b>she'll</b>. C'est le futur de tous les jours pour dire « je t'appelle », « on te voit samedi ».",
    "rule": "1. Sujet + <b>'ll</b> + verbe à la base (sans <b>to</b>).<br>2. Contractions : I'll, you'll, he'll, she'll, it'll, we'll, they'll.<br>3. Invariable : jamais de -s au verbe.<br>4. Marqueurs : <b>later</b>, <b>tonight</b>, <b>tomorrow</b>, <b>soon</b>, <b>next week</b>.",
    "table": {
     "caption": "will → 'll",
     "headers": [
      "Sujet",
      "Forme pleine",
      "Oral / SMS"
     ],
     "rows": [
      [
       "I",
       "I will",
       "I<b>'ll</b> text"
      ],
      [
       "you",
       "you will",
       "you<b>'ll</b> text"
      ],
      [
       "he / she / it",
       "she will",
       "she<b>'ll</b> text"
      ],
      [
       "we",
       "we will",
       "we<b>'ll</b> text"
      ],
      [
       "they",
       "they will",
       "they<b>'ll</b> text"
      ]
     ]
    },
    "timeline": "now ───▶ later · tonight · tomorrow · next week (I'll text you)",
    "examples": [
     {
      "en": "I'll text you later.",
      "fr": "Je t'envoie un message plus tard."
     },
     {
      "en": "We'll see you on Saturday!",
      "fr": "On se voit samedi !"
     },
     {
      "en": "She'll love this present.",
      "fr": "Elle va adorer ce cadeau."
     },
     {
      "en": "They'll be here soon.",
      "fr": "Ils seront là bientôt."
     },
     {
      "en": "It'll be fun, trust me.",
      "fr": "Ça va être drôle, crois-moi."
     },
     {
      "en": "You'll feel better tomorrow.",
      "fr": "Tu te sentiras mieux demain."
     }
    ],
    "pitfalls": [
     {
      "wrong": "I'll to call you.",
      "right": "I'll call you.",
      "why": "Après <b>'ll</b>, le verbe reste nu : pas de to."
     },
     {
      "wrong": "I call you later.",
      "right": "I'll call you later.",
      "why": "Le français dit « je t'appelle plus tard » ; en anglais, on annonce avec <b>'ll</b>."
     },
     {
      "wrong": "He'll comes with us.",
      "right": "He'll come with us.",
      "why": "'ll est invariable : pas de -s au verbe."
     }
    ],
    "exercises": [
     {
      "type": "mcq",
      "q": "« Je t'appelle ce soir. » =",
      "opts": [
       "I call you tonight.",
       "I'll to call you tonight.",
       "I'll call you tonight."
      ],
      "correct": 2,
      "why": "Annoncer une action : <b>'ll</b> + base."
     },
     {
      "type": "fill",
      "text": "I ___ (text) you later.",
      "answers": [
       "'ll text",
       "’ll text",
       "ll text",
       "will text"
      ],
      "why": "I + <b>'ll</b> + verbe à la base."
     },
     {
      "type": "mcq",
      "q": "Quelle phrase est correcte ?",
      "opts": [
       "She'll loves this present.",
       "She'll love this present.",
       "She'll to love this present.",
       "She love'll this present."
      ],
      "correct": 1,
      "why": "'ll + verbe nu, sans -s."
     },
     {
      "type": "fill",
      "text": "We ___ (meet) you at the station.",
      "answers": [
       "'ll meet",
       "’ll meet",
       "ll meet",
       "will meet"
      ],
      "why": "We + 'll + base."
     },
     {
      "type": "speak",
      "en": "I'll text you later, I promise.",
      "fr": "Je t'enverrai un message plus tard, promis."
     },
     {
      "type": "fill",
      "text": "They ___ (be) here soon.",
      "answers": [
       "'ll be",
       "’ll be",
       "ll be",
       "will be"
      ],
      "why": "« Be » aussi à la base : <b>'ll be</b>."
     },
     {
      "type": "mcq",
      "q": "Après 'll, on met…",
      "opts": [
       "to + verbe",
       "le verbe nu (sans to)",
       "le verbe + s"
      ],
      "correct": 1,
      "why": "Comme will : verbe à la base."
     },
     {
      "type": "fill",
      "text": "You ___ (feel) better tomorrow.",
      "answers": [
       "'ll feel",
       "’ll feel",
       "ll feel",
       "will feel"
      ],
      "why": "<b>tomorrow</b> annonce le futur : you'll feel."
     },
     {
      "type": "fill",
      "text": "It ___ (be) fun, and Mum ___ (love) it.",
      "answers": [
       [
        "'ll be",
        "’ll be",
        "ll be",
        "will be"
       ],
       [
        "'ll love",
        "’ll love",
        "ll love",
        "will love"
       ]
      ],
      "why": "Deux sujets, deux fois <b>'ll</b> + base."
     },
     {
      "type": "speak",
      "en": "We'll see you on Saturday!",
      "fr": "On se voit samedi !"
     },
     {
      "type": "mcq",
      "q": "« Il apportera la pizza. » =",
      "opts": [
       "Tom wills bring the pizza.",
       "Tom 'll to bring the pizza.",
       "Tom'll bring the pizza."
      ],
      "correct": 2,
      "why": "Nom + 'll + verbe : possible à l'oral."
     },
     {
      "type": "fill",
      "text": "He ___ (come) with us, I'm sure.",
      "answers": [
       "'ll come",
       "’ll come",
       "ll come",
       "will come"
      ],
      "why": "Même forme à he : <b>'ll come</b>."
     },
     {
      "type": "mcq",
      "q": "« Ça va être génial, crois-moi. » =",
      "opts": [
       "It'll be great, trust me.",
       "It be great, trust me.",
       "It'll to be great, trust me."
      ],
      "correct": 0,
      "why": "it + 'll + be."
     }
    ]
   },
   {
    "id": "will-informal-2",
    "reg": "informal",
    "title": "Rassurer, refuser, promettre que non : won't · Informel",
    "why": "Entre proches, <b>won't</b> sert à rassurer (« Don't worry, it won't hurt »), à refuser (« I won't go ») ou à promettre de ne pas faire quelque chose. C'est la négation de will.",
    "rule": "1. Sujet + <b>won't</b> + verbe à la base.<br>2. Won't = will not (contraction irrégulière, pas « willn't »).<br>3. Jamais de do : « I don't will » est faux.<br>4. Aussi : <b>never</b> (« I'll never tell »), <b>not tonight</b>.<br>5. « I'll not » existe mais est rare : préfère <b>won't</b>.",
    "examples": [
     {
      "en": "I won't tell anyone, I promise.",
      "fr": "Je ne le dirai à personne, promis."
     },
     {
      "en": "Don't worry, the dog won't bite.",
      "fr": "Pas de panique, le chien ne mord pas."
     },
     {
      "en": "She won't be happy about this!",
      "fr": "Elle ne va pas être contente !"
     },
     {
      "en": "The kids won't eat that.",
      "fr": "Les enfants ne mangeront pas ça."
     },
     {
      "en": "We won't be late, I swear.",
      "fr": "On ne sera pas en retard, je te jure."
     },
     {
      "en": "It won't take long.",
      "fr": "Ça ne prendra pas longtemps."
     }
    ],
    "pitfalls": [
     {
      "wrong": "I willn't tell anyone.",
      "right": "I won't tell anyone.",
      "why": "La contraction de will not est irrégulière : <b>won't</b>."
     },
     {
      "wrong": "I don't will tell anyone.",
      "right": "I won't tell anyone.",
      "why": "Pas de <b>do</b> avec will : la négation est dans won't."
     },
     {
      "wrong": "He no will come.",
      "right": "He won't come.",
      "why": "Le français « ne … pas » devient <b>won't</b>, qui se place après le sujet."
     }
    ],
    "exercises": [
     {
      "type": "mcq",
      "q": "« Je ne le dirai à personne. » =",
      "opts": [
       "I willn't tell anyone.",
       "I won't tell anyone.",
       "I don't will tell anyone."
      ],
      "correct": 1,
      "why": "Négation : <b>won't</b> + base."
     },
     {
      "type": "fill",
      "text": "Don't worry, the dog ___ (not / bite).",
      "answers": [
       "won't bite",
       "won’t bite",
       "will not bite"
      ],
      "why": "Pour rassurer : <b>won't bite</b>."
     },
     {
      "type": "mcq",
      "q": "La contraction de will not est…",
      "opts": [
       "willn't",
       "woln't",
       "won't"
      ],
      "correct": 2,
      "why": "Forme irrégulière : <b>won't</b>."
     },
     {
      "type": "fill",
      "text": "She ___ (not / be) happy about this!",
      "answers": [
       "won't be",
       "won’t be",
       "will not be"
      ],
      "why": "Won't + be."
     },
     {
      "type": "speak",
      "en": "I won't tell anyone, I promise.",
      "fr": "Je ne le dirai à personne, promis."
     },
     {
      "type": "fill",
      "text": "We ___ (not / be) late, I swear.",
      "answers": [
       "won't be",
       "won’t be",
       "will not be"
      ],
      "why": "Promesse négative : won't be."
     },
     {
      "type": "mcq",
      "q": "Which one is correct?",
      "opts": [
       "The kids won't to eat that.",
       "The kids not will eat that.",
       "The kids don't will eat that.",
       "The kids won't eat that."
      ],
      "correct": 3,
      "why": "Sujet + won't + base."
     },
     {
      "type": "fill",
      "text": "It ___ (not / rain) tonight, trust me.",
      "answers": [
       "won't rain",
       "won’t rain",
       "will not rain"
      ],
      "why": "Prédiction négative : <b>won't rain</b>."
     },
     {
      "type": "fill",
      "text": "Dad ___ (not / mind) and Mum ___ (not / know).",
      "answers": [
       [
        "won't mind",
        "won’t mind",
        "will not mind"
       ],
       [
        "won't know",
        "won’t know",
        "will not know"
       ]
      ],
      "why": "Deux négations avec <b>won't</b>."
     },
     {
      "type": "speak",
      "en": "Don't worry, it won't take long.",
      "fr": "Pas de panique, ça ne prendra pas longtemps."
     },
     {
      "type": "mcq",
      "q": "« Il n'ira pas à la fête. » =",
      "opts": [
       "He doesn't will go to the party.",
       "He won't go to the party.",
       "He won't to go to the party."
      ],
      "correct": 1,
      "why": "Won't + verbe nu."
     },
     {
      "type": "fill",
      "text": "I ___ (not / forget) your birthday, I promise.",
      "answers": [
       "won't forget",
       "won’t forget",
       "will not forget"
      ],
      "why": "Promesse : <b>won't forget</b>."
     },
     {
      "type": "mcq",
      "q": "Dans « I won't », won't veut dire…",
      "opts": [
       "I was not",
       "I do not",
       "I will not"
      ],
      "correct": 2,
      "why": "Won't = will not."
     }
    ]
   },
   {
    "id": "will-informal-3",
    "reg": "informal",
    "title": "Poser des questions et proposer : Will you…? Shall we…? · Informel",
    "why": "Pour inviter un ami, demander un coup de main ou proposer quelque chose (« On commande une pizza ? »), on utilise <b>Will you…?</b> et <b>Shall we…?</b>. Les réponses courtes sont très fréquentes à l'oral.",
    "rule": "1. <b>Will</b> + sujet + verbe à la base ?<br>2. Jamais de do : « Do you will come ? » est faux.<br>3. Réponses courtes : <b>Yes, I will.</b> / <b>No, I won't.</b> (pas de 'll).<br>4. Proposer : <b>Shall I…?</b> / <b>Shall we…?</b><br>5. Demander un service : <b>Will you give me a hand?</b>",
    "examples": [
     {
      "en": "Will you come to my party on Saturday?",
      "fr": "Tu viendras à ma fête samedi ?"
     },
     {
      "en": "Will it be sunny at the weekend?",
      "fr": "Il fera beau ce week-end ?"
     },
     {
      "en": "Shall I get the drinks?",
      "fr": "Je vais chercher les boissons ?"
     },
     {
      "en": "Shall we go to the beach?",
      "fr": "On va à la plage ?"
     },
     {
      "en": "Will Dave bring his guitar? — Yes, he will.",
      "fr": "Dave apportera sa guitare ? — Oui."
     },
     {
      "en": "Will you give me a hand with this box?",
      "fr": "Tu peux me donner un coup de main avec ce carton ?"
     }
    ],
    "pitfalls": [
     {
      "wrong": "Do you will come tonight?",
      "right": "Will you come tonight?",
      "why": "On inverse will et le sujet, sans do."
     },
     {
      "wrong": "Will Dave come? — Yes, he'll.",
      "right": "Will Dave come? — Yes, he will.",
      "why": "Une réponse courte affirmative ne se contracte pas."
     },
     {
      "wrong": "Will I get the drinks?",
      "right": "Shall I get the drinks?",
      "why": "Pour proposer, on emploie <b>Shall I</b>."
     }
    ],
    "exercises": [
     {
      "type": "mcq",
      "q": "« Tu viendras à ma fête ? » =",
      "opts": [
       "Will you come to my party?",
       "Do you will come to my party?",
       "You will to come to my party?"
      ],
      "correct": 0,
      "why": "Question : <b>Will</b> + sujet + base."
     },
     {
      "type": "fill",
      "text": "___ it be sunny at the weekend?",
      "answers": [
       "Will",
       "will"
      ],
      "why": "Will + sujet."
     },
     {
      "type": "mcq",
      "q": "Will Dave bring his guitar ? Réponse courte :",
      "opts": [
       "Yes, he'll.",
       "Yes, he will.",
       "Yes, he does."
      ],
      "correct": 1,
      "why": "Réponse courte : <b>will</b> en forme pleine."
     },
     {
      "type": "fill",
      "text": "___ I get the drinks? (proposition)",
      "answers": [
       "Shall",
       "shall"
      ],
      "why": "Je propose : <b>Shall I</b>."
     },
     {
      "type": "speak",
      "en": "Will you give me a hand with this box?",
      "fr": "Tu peux me donner un coup de main avec ce carton ?"
     },
     {
      "type": "fill",
      "text": "Will you come to the cinema? — No, I ___.",
      "answers": [
       "won't",
       "won’t",
       "will not"
      ],
      "why": "Réponse courte négative : <b>No, I won't.</b>"
     },
     {
      "type": "mcq",
      "q": "Proposition : « On va à la plage ? »",
      "opts": [
       "Will we go to the beach?",
       "Do we will go to the beach?",
       "Shall we go to the beach?"
      ],
      "correct": 2,
      "why": "Proposer ensemble : <b>Shall we</b>."
     },
     {
      "type": "fill",
      "text": "___ you help me tomorrow? — Yes, I ___.",
      "answers": [
       [
        "Will",
        "will"
       ],
       [
        "will"
       ]
      ],
      "why": "Question en will, réponse courte en <b>will</b>."
     },
     {
      "type": "fill",
      "text": "Will your sister ___ (come) too?",
      "answers": [
       "come"
      ],
      "why": "Après le sujet, verbe à la base."
     },
     {
      "type": "speak",
      "en": "Shall we order a pizza after the match?",
      "fr": "On commande une pizza après le match ?"
     },
     {
      "type": "mcq",
      "q": "Which question is right?",
      "opts": [
       "Will you help me?",
       "Do you will help me?",
       "Will you to help me?"
      ],
      "correct": 0,
      "why": "Will + sujet + base."
     },
     {
      "type": "fill",
      "text": "Will they ___ (be) at the party tonight? — Yes, they will.",
      "answers": [
       "be"
      ],
      "why": "« Be » à la base après le sujet."
     },
     {
      "type": "mcq",
      "q": "« Yes, I'll. » comme réponse courte est…",
      "opts": [
       "correct à l'oral comme à l'écrit",
       "incorrect : on dit Yes, I will.",
       "correct seulement à l'écrit"
      ],
      "correct": 1,
      "why": "En réponse courte positive, on garde <b>will</b> en entier."
     }
    ]
   },
   {
    "id": "will-informal-4",
    "reg": "informal",
    "title": "Décisions, offres, prédictions entre amis · Informel",
    "why": "Au quotidien, 'll sert à décider sur le moment (« Go on then, I'll have a lager »), à proposer son aide, à promettre et à deviner l'avenir. Pour un plan déjà prévu, on passe à <b>be going to</b>.",
    "rule": "1. Décision sur le moment : <b>I'll have</b> a coffee.<br>2. Offre : <b>I'll get it</b>, <b>I'll help you</b>.<br>3. Promesse : <b>I'll be there</b>, I promise.<br>4. Prédiction : <b>I reckon</b> / <b>I bet</b> / <b>I think</b> + it'll…<br>5. Plan déjà décidé : <b>be going to</b> (« I'm going to visit Gran on Sunday »).",
    "examples": [
     {
      "en": "I'm knackered. I think I'll go to bed.",
      "fr": "Je suis crevé. Je crois que je vais aller me coucher."
     },
     {
      "en": "Fancy a pint? — Go on then, I'll have a lager.",
      "fr": "Une bière ? — Allez, d'accord, je prends une blonde."
     },
     {
      "en": "Leave it, mate. I'll get this one.",
      "fr": "Laisse, mon vieux. Je paie celui-ci."
     },
     {
      "en": "I bet it'll rain on Saturday.",
      "fr": "Je parie qu'il pleuvra samedi."
     },
     {
      "en": "I'm going to visit Gran on Sunday ; it's all planned.",
      "fr": "Je vais rendre visite à mamie dimanche ; tout est organisé.",
      "note": "Plan déjà décidé : be going to."
     },
     {
      "en": "I'll be there at eight, I promise.",
      "fr": "Je serai là à huit heures, promis."
     }
    ],
    "pitfalls": [
     {
      "wrong": "Fancy a pizza? — Yes, I'm going to have a margherita.",
      "right": "Fancy a pizza? — Go on then, I'll have a margherita.",
      "why": "Réponse décidée à l'instant : <b>I'll</b>, pas going to."
     },
     {
      "wrong": "I bet it rains on Saturday.",
      "right": "I bet it'll rain on Saturday.",
      "why": "Une prédiction demande <b>'ll</b>."
     },
     {
      "wrong": "Leave it, I get this one.",
      "right": "Leave it, I'll get this one.",
      "why": "Une offre spontanée demande <b>'ll</b>."
     }
    ],
    "exercises": [
     {
      "type": "mcq",
      "q": "« Une pizza ? — Allez, d'accord, je prends la margherita. »",
      "opts": [
       "Go on then, I'll to have the margherita.",
       "Go on then, I have the margherita will.",
       "Go on then, I'll have the margherita."
      ],
      "correct": 2,
      "why": "Décision sur le moment : <b>I'll</b> + base."
     },
     {
      "type": "fill",
      "text": "I'm knackered. I think I ___ (go) to bed.",
      "answers": [
       "'ll go",
       "’ll go",
       "ll go",
       "will go"
      ],
      "why": "Décision spontanée : <b>I'll go</b>."
     },
     {
      "type": "mcq",
      "q": "Prédiction : « Je parie qu'il pleuvra samedi. »",
      "opts": [
       "I bet it'll rain on Saturday.",
       "I bet it rains on Saturday.",
       "I bet it'll to rain on Saturday."
      ],
      "correct": 0,
      "why": "Prédiction : <b>it'll</b> + base."
     },
     {
      "type": "fill",
      "text": "Leave it, mate. I ___ (get) this one.",
      "answers": [
       "'ll get",
       "’ll get",
       "ll get",
       "will get"
      ],
      "why": "Offre spontanée : <b>I'll get</b>."
     },
     {
      "type": "speak",
      "en": "I can't be bothered, so I'll just stay in.",
      "fr": "J'ai la flemme, donc je reste à la maison."
     },
     {
      "type": "fill",
      "text": "I reckon it ___ (be) brilliant.",
      "answers": [
       "'ll be",
       "’ll be",
       "ll be",
       "will be"
      ],
      "why": "Prédiction avec reckon : <b>it'll be</b>."
     },
     {
      "type": "mcq",
      "q": "Plan déjà décidé : « Dimanche, je rends visite à mamie, tout est organisé. »",
      "opts": [
       "I'll to visit Gran on Sunday.",
       "I'm going to visit Gran on Sunday.",
       "I'm visit Gran on Sunday."
      ],
      "correct": 1,
      "why": "Plan prévu : <b>be going to</b>."
     },
     {
      "type": "fill",
      "text": "Tonight? I can't be bothered. I ___ (stay) in.",
      "answers": [
       "'ll stay",
       "’ll stay",
       "ll stay",
       "will stay"
      ],
      "why": "Décision prise à l'instant : <b>I'll stay</b>."
     },
     {
      "type": "fill",
      "text": "Don't worry, I ___ (be) there and Jo ___ (bring) the snacks.",
      "answers": [
       [
        "'ll be",
        "’ll be",
        "ll be",
        "will be"
       ],
       [
        "'ll bring",
        "’ll bring",
        "ll bring",
        "will bring"
       ]
      ],
      "why": "Promesse et offre : <b>I'll be</b>, <b>Jo'll bring</b>."
     },
     {
      "type": "speak",
      "en": "Fancy a pint? Go on then, I'll have a lager.",
      "fr": "Une bière ? Allez, d'accord, je prends une blonde."
     },
     {
      "type": "mcq",
      "q": "Le téléphone sonne. Tu proposes de répondre :",
      "opts": [
       "I get it!",
       "I'll to get it!",
       "I'll get it!"
      ],
      "correct": 2,
      "why": "Offre spontanée : <b>I'll</b> + base."
     },
     {
      "type": "fill",
      "text": "Don't worry, I ___ (not / tell) Mum.",
      "answers": [
       "won't tell",
       "won’t tell",
       "will not tell"
      ],
      "why": "Promesse négative : <b>won't tell</b>."
     },
     {
      "type": "mcq",
      "q": "Quelle phrase est une promesse correcte ?",
      "opts": [
       "I'll be there at eight, I promise.",
       "I'll to be there at eight, I promise.",
       "I be there at eight, I promise."
      ],
      "correct": 0,
      "why": "Promesse : <b>I'll be</b>."
     }
    ]
   }
  ]
 },
 {
  "id": "temps-en-conditionals",
  "group": "temps",
  "icon": "🔀",
  "title": "Les conditionnels (if…)",
  "level": "A2-B1",
  "intro": "<b>If + présent, will</b> pour le réel ; <b>if + past simple, would</b> pour l'irréel ; <b>would</b> pour la politesse. Ici, deux registres : <b>formel</b> (travail, administration, service) et <b>informel</b> (amis, famille).",
  "lessons": [
   {
    "id": "conditionals-formal-1",
    "reg": "formal",
    "title": "Si + présent, will : le réel et le probable · Formel",
    "why": "En français on dit « si vous confirmez, nous réserverons ». En anglais aussi, mais <b>jamais de will après if</b> : dans un courriel pro, if + <b>présent</b> annonce la condition et <b>will</b> annonce la conséquence.",
    "rule": "1. <b>Zéro</b> (règle, procédure) : if + présent, présent.<br>2. <b>First</b> (probable) : if + présent simple, <b>will + verbe de base</b>.<br>3. Jamais <b>will</b> dans la partie if.<br>4. Virgule si if ouvre la phrase, pas de virgule sinon.<br>5. Négation : <b>do not / does not</b> dans if, <b>will not</b> (won't) dans la principale.",
    "timeline": "● maintenant ── if you confirm (condition) ──▶ we will book the room (résultat à venir)",
    "table": {
     "caption": "If + présent, puis présent ou will",
     "headers": [
      "Type",
      "Partie if",
      "Partie principale",
      "Exemple"
     ],
     "rows": [
      [
       "Zéro",
       "présent",
       "présent",
       "If an employee works overtime, the company <b>pays</b> extra."
      ],
      [
       "First",
       "présent",
       "<b>will</b> + base",
       "If you send the form today, we <b>will process</b> it tomorrow."
      ]
     ]
    },
    "examples": [
     {
      "en": "If you send the form today, we will process it tomorrow.",
      "fr": "Si vous envoyez le formulaire aujourd'hui, nous le traiterons demain."
     },
     {
      "en": "If the client agrees, I will sign the contract on Friday.",
      "fr": "Si le client est d'accord, je signerai le contrat vendredi."
     },
     {
      "en": "We will refund you if the goods arrive damaged.",
      "fr": "Nous vous rembourserons si la marchandise arrive abîmée."
     },
     {
      "en": "If an employee works overtime, the company pays extra.",
      "fr": "Si un employé fait des heures supplémentaires, l'entreprise paie un supplément."
     },
     {
      "en": "If the meeting finishes early, I will call you.",
      "fr": "Si la réunion finit tôt, je vous appellerai."
     }
    ],
    "pitfalls": [
     {
      "wrong": "If you will send the form, we will reply.",
      "right": "If you send the form, we will reply.",
      "why": "Après if on utilise le <b>présent</b>, jamais will, même pour parler de l'avenir."
     },
     {
      "wrong": "If the manager approve it, we start.",
      "right": "If the manager approves it, we will start.",
      "why": "Le sujet he/she/it prend le <b>-s</b> au présent, et la conséquence probable prend <b>will</b>."
     },
     {
      "wrong": "If you do not pay, we will to cancel the order.",
      "right": "If you do not pay, we will cancel the order.",
      "why": "<b>will</b> est suivi du verbe de base, sans <b>to</b>."
     }
    ],
    "exercises": [
     {
      "type": "mcq",
      "q": "« Si vous confirmez, nous réserverons la salle. »",
      "opts": [
       "If you will confirm, we book the room.",
       "If you confirm, we will book the room.",
       "If you confirmed, we will book the room."
      ],
      "correct": 1,
      "why": "if + <b>présent</b>, puis <b>will</b> + verbe de base."
     },
     {
      "type": "fill",
      "text": "If the client ___ (agree), I will sign the contract.",
      "answers": [
       "agrees"
      ],
      "why": "Sujet the client = he/she/it : présent avec <b>-s</b>."
     },
     {
      "type": "fill",
      "text": "We ___ (send) you the invoice if you give us your address.",
      "answers": [
       "will send",
       "'ll send"
      ],
      "why": "Conséquence probable : <b>will</b> + verbe de base."
     },
     {
      "type": "mcq",
      "q": "Choisissez la phrase correcte.",
      "opts": [
       "If the train is late, I will email you.",
       "If the train will be late, I email you.",
       "If the train would be late, I will email you."
      ],
      "correct": 0,
      "why": "Pas de will ni de would après <b>if</b>."
     },
     {
      "type": "speak",
      "en": "If you confirm today, we will book the room.",
      "fr": "Si vous confirmez aujourd'hui, nous réserverons la salle."
     },
     {
      "type": "fill",
      "text": "If you ___ (not pay) by Friday, we will cancel the order.",
      "answers": [
       "do not pay",
       "don't pay"
      ],
      "why": "Négation au présent : <b>do not</b> + verbe de base."
     },
     {
      "type": "mcq",
      "q": "« If an employee works overtime, the company pays extra » exprime…",
      "opts": [
       "un projet précis pour demain",
       "une hypothèse irréelle",
       "une règle générale"
      ],
      "correct": 2,
      "why": "Présent + présent : c'est le conditionnel <b>zéro</b>, une règle ou une procédure."
     },
     {
      "type": "fill",
      "text": "If the manager ___ (be) away, her assistant answers the phone.",
      "answers": [
       "is"
      ],
      "why": "Zéro conditionnel : présent simple des deux côtés."
     },
     {
      "type": "mcq",
      "q": "Laquelle est incorrecte ?",
      "opts": [
       "If the budget is approved, we will start in May.",
       "We will start in May if the budget is approved.",
       "If the budget will be approved, we will start in May."
      ],
      "correct": 2,
      "why": "<b>will</b> n'a pas sa place après if : il faut <b>is approved</b>."
     },
     {
      "type": "fill",
      "text": "If the meeting ___ (finish) early, I ___ (call) you.",
      "answers": [
       [
        "finishes"
       ],
       [
        "will call",
        "'ll call"
       ]
      ],
      "why": "if + présent (-s à la 3e personne), puis <b>will</b> + base."
     },
     {
      "type": "speak",
      "en": "If the client agrees, I will sign the contract on Friday.",
      "fr": "Si le client est d'accord, je signerai le contrat vendredi."
     },
     {
      "type": "mcq",
      "q": "Après if, le verbe se met…",
      "opts": [
       "avec will",
       "au conditionnel would",
       "au présent simple"
      ],
      "correct": 2,
      "why": "Même pour l'avenir, if est suivi du <b>présent simple</b>."
     },
     {
      "type": "fill",
      "text": "If the guest ___ (not arrive) by six, the hotel will give the room to someone else.",
      "answers": [
       "does not arrive",
       "doesn't arrive"
      ],
      "why": "Sujet the guest : négation avec <b>does not</b> + base."
     }
    ]
   },
   {
    "id": "conditionals-formal-2",
    "reg": "formal",
    "title": "Si + passé simple, would : l'hypothèse · Formel",
    "why": "Pour parler de ce qui est <b>peu probable ou imaginaire</b> (négocier, conseiller, envisager), le français dit « si + imparfait, conditionnel ». L'anglais dit <b>if + past simple, would + verbe</b>. Le past simple ne parle pas du passé ici : il crée de la distance avec la réalité.",
    "rule": "1. <b>If + past simple, would + verbe de base</b>.<br>2. Le past simple marque l'hypothèse, pas le passé.<br>3. Verbe be : <b>if I were</b>, if she were (plus soutenu que was).<br>4. Négation : <b>did not</b> dans if, <b>would not</b> (wouldn't) dans la principale.<br>5. Jamais <b>would</b> dans la partie if.",
    "examples": [
     {
      "en": "If we had a larger budget, we would hire two more analysts.",
      "fr": "Si nous avions un budget plus important, nous embaucherions deux analystes de plus."
     },
     {
      "en": "If I were you, I would speak to the bank first.",
      "fr": "À votre place, je parlerais d'abord à la banque."
     },
     {
      "en": "Would the hotel offer a discount if we booked ten rooms?",
      "fr": "L'hôtel ferait-il une remise si nous réservions dix chambres ?"
     },
     {
      "en": "If the company did not need the space, it would sell the building.",
      "fr": "Si l'entreprise n'avait pas besoin de l'espace, elle vendrait le bâtiment."
     },
     {
      "en": "We would be delighted if you joined us on Thursday.",
      "fr": "Nous serions ravis que vous vous joigniez à nous jeudi."
     }
    ],
    "pitfalls": [
     {
      "wrong": "If we would have more time, we would finish.",
      "right": "If we had more time, we would finish.",
      "why": "Après if on met le <b>past simple</b>, pas would."
     },
     {
      "wrong": "If we had a bigger budget, we hire more staff.",
      "right": "If we had a bigger budget, we would hire more staff.",
      "why": "La conséquence de l'hypothèse prend <b>would</b> + verbe de base."
     },
     {
      "wrong": "If I would be in your position, I accept.",
      "right": "If I were in your position, I would accept.",
      "why": "Avec be on dit <b>were</b> (formel), et la principale a would."
     }
    ],
    "exercises": [
     {
      "type": "mcq",
      "q": "« Si nous avions un budget plus important, nous embaucherions deux analystes. »",
      "opts": [
       "If we had a bigger budget, we would hire two analysts.",
       "If we have a bigger budget, we would hire two analysts.",
       "If we would have a bigger budget, we would hire two analysts."
      ],
      "correct": 0,
      "why": "if + <b>past simple</b>, puis <b>would</b> + base."
     },
     {
      "type": "fill",
      "text": "If the supplier ___ (deliver) on time, we would not lose customers.",
      "answers": [
       "delivered"
      ],
      "why": "Hypothèse : <b>past simple</b> après if."
     },
     {
      "type": "fill",
      "text": "If I ___ (be) you, I would speak to the bank first.",
      "answers": [
       "were",
       "was"
      ],
      "why": "Avec be : <b>were</b> (formel) ; was s'entend à l'oral."
     },
     {
      "type": "mcq",
      "q": "Dans « If I had more time, I would attend », had exprime…",
      "opts": [
       "une situation hypothétique, présente ou future",
       "le passé",
       "une habitude"
      ],
      "correct": 0,
      "why": "Le past simple crée ici l'<b>hypothèse</b>, pas le passé."
     },
     {
      "type": "speak",
      "en": "If we had more time, we would visit the factory.",
      "fr": "Si nous avions plus de temps, nous visiterions l'usine."
     },
     {
      "type": "fill",
      "text": "The company ___ (sell) the building if it did not need the space.",
      "answers": [
       "would sell",
       "'d sell"
      ],
      "why": "Conséquence de l'hypothèse : <b>would</b> + base."
     },
     {
      "type": "mcq",
      "q": "Laquelle est correcte ?",
      "opts": [
       "If the director would be here, she would sign it.",
       "If the director were here, she would sign it.",
       "If the director is here, she would sign it."
      ],
      "correct": 1,
      "why": "if + <b>were</b>, puis would + base."
     },
     {
      "type": "fill",
      "text": "We ___ (be) delighted if you joined us on Thursday.",
      "answers": [
       "would be",
       "'d be"
      ],
      "why": "Principale d'une hypothèse : <b>would be</b>."
     },
     {
      "type": "mcq",
      "q": "Dans « if we booked ten rooms », booked est…",
      "opts": [
       "un passé réel : la réservation a déjà eu lieu",
       "un present perfect",
       "un past simple qui marque l'hypothèse"
      ],
      "correct": 2,
      "why": "Aucune réservation n'a eu lieu : <b>past simple</b> d'hypothèse."
     },
     {
      "type": "fill",
      "text": "If a customer ___ (ask) for a refund, we ___ (not refuse) it.",
      "answers": [
       [
        "asked"
       ],
       [
        "would not refuse",
        "wouldn't refuse"
       ]
      ],
      "why": "if + past simple, puis <b>would not</b> + base."
     },
     {
      "type": "speak",
      "en": "If I were you, I would contact the bank today.",
      "fr": "À votre place, je contacterais la banque aujourd'hui."
     },
     {
      "type": "mcq",
      "q": "Choisissez la question correcte.",
      "opts": [
       "What you would do if the client would refuse?",
       "What would you do if the client would refuse?",
       "What will you do if the client refused?",
       "What would you do if the client refused?"
      ],
      "correct": 3,
      "why": "Question : <b>would</b> + sujet + base, puis if + <b>past simple</b>."
     },
     {
      "type": "fill",
      "text": "If she ___ (have) the authority, she would approve the request today.",
      "answers": [
       "had"
      ],
      "why": "Hypothèse : <b>had</b> (past simple de have)."
     }
    ]
   },
   {
    "id": "conditionals-formal-3",
    "reg": "formal",
    "title": "Would pour être poli : demandes et offres · Formel",
    "why": "À l'hôtel, à la banque, par courriel, <b>would</b> adoucit la demande, comme notre conditionnel de politesse (« je voudrais », « pourriez-vous »). <b>I want</b> est trop direct : on dit <b>I would like</b>.",
    "rule": "1. Souhait : <b>I would like</b> + nom ou to + verbe (I'd like).<br>2. Offre : <b>Would you like</b> + nom ou to + verbe ?<br>3. Demande : <b>Could you</b> / <b>Would you</b> + base ... ?<br>4. <b>Would you mind</b> + verbe en -ing ?<br>5. <b>I would be grateful if you could</b> + base.<br>6. Je voudrais que vous : <b>I would like you to</b> + base.<br>7. Réponses courtes : Yes, I would. / Yes, please. / No, thank you.",
    "examples": [
     {
      "en": "I would like to book a table for four, please.",
      "fr": "Je voudrais réserver une table pour quatre, s'il vous plaît."
     },
     {
      "en": "Would you like a window seat?",
      "fr": "Souhaitez-vous une place côté fenêtre ?"
     },
     {
      "en": "Could you send me the report by noon?",
      "fr": "Pourriez-vous m'envoyer le rapport avant midi ?"
     },
     {
      "en": "Would you mind waiting a moment?",
      "fr": "Auriez-vous l'obligeance d'attendre un instant ?"
     },
     {
      "en": "I would be grateful if you could confirm the date.",
      "fr": "Je vous serais reconnaissant de bien vouloir confirmer la date."
     },
     {
      "en": "Would you prefer tea or coffee?",
      "fr": "Préférez-vous du thé ou du café ?"
     }
    ],
    "pitfalls": [
     {
      "wrong": "I would like that you send me the invoice.",
      "right": "I would like you to send me the invoice.",
      "why": "Après I would like, pas de « that » : <b>like + personne + to + verbe</b>."
     },
     {
      "wrong": "I want a room for two nights.",
      "right": "I would like a room for two nights, please.",
      "why": "<b>I want</b> est brusque ; <b>I would like</b> est la forme polie."
     },
     {
      "wrong": "Would you mind to wait?",
      "right": "Would you mind waiting?",
      "why": "Après <b>mind</b> on met le verbe en <b>-ing</b>."
     }
    ],
    "exercises": [
     {
      "type": "mcq",
      "q": "« Je voudrais réserver une chambre. » (poli)",
      "opts": [
       "I want to book a room.",
       "I would like to book a room.",
       "I would to book a room."
      ],
      "correct": 1,
      "why": "<b>I would like to</b> + base : la formule polie."
     },
     {
      "type": "fill",
      "text": "I ___ like to speak to the manager, please.",
      "answers": [
       "would"
      ],
      "why": "I would like (I'd like) = je voudrais."
     },
     {
      "type": "fill",
      "text": "___ you like a window seat? – Yes, please.",
      "answers": [
       "Would"
      ],
      "why": "Offre polie : <b>Would you like</b> ... ?"
     },
     {
      "type": "mcq",
      "q": "Quelle demande est la plus polie ?",
      "opts": [
       "Could you send me the report by noon, please?",
       "Send me the report by noon.",
       "I want the report by noon."
      ],
      "correct": 0,
      "why": "<b>Could you</b> ... please adoucit la demande."
     },
     {
      "type": "speak",
      "en": "I would like to book a table for four, please.",
      "fr": "Je voudrais réserver une table pour quatre, s'il vous plaît."
     },
     {
      "type": "fill",
      "text": "Would you mind ___ (wait) a moment?",
      "answers": [
       "waiting"
      ],
      "why": "Après <b>Would you mind</b>, verbe en -ing."
     },
     {
      "type": "mcq",
      "q": "Complétez : I would be grateful if you ___ confirm the date.",
      "opts": [
       "confirming",
       "to confirm",
       "could"
      ],
      "correct": 2,
      "why": "<b>I would be grateful if you could</b> + base."
     },
     {
      "type": "fill",
      "text": "I would like you ___ (send) me the report.",
      "answers": [
       "to send"
      ],
      "why": "<b>would like + personne + to + verbe</b>."
     },
     {
      "type": "mcq",
      "q": "Laquelle est correcte ?",
      "opts": [
       "I would like that you send me the invoice.",
       "I would like you to send me the invoice.",
       "I would like you send me the invoice."
      ],
      "correct": 1,
      "why": "Pas de « that » : <b>like you to send</b>."
     },
     {
      "type": "fill",
      "text": "___ you prefer tea or coffee? – I ___ prefer tea, thank you.",
      "answers": [
       [
        "Would"
       ],
       [
        "would"
       ]
      ],
      "why": "Offre et réponse avec <b>would</b> (would prefer)."
     },
     {
      "type": "speak",
      "en": "I would be grateful if you could confirm the date.",
      "fr": "Je vous serais reconnaissant de bien vouloir confirmer la date."
     },
     {
      "type": "mcq",
      "q": "Réponse courte à « Would you like some water? »",
      "opts": [
       "Yes, I like.",
       "Yes, I will like.",
       "Yes, I do like it.",
       "Yes, I would, thank you."
      ],
      "correct": 3,
      "why": "On reprend le modal de la question : <b>Yes, I would</b>."
     },
     {
      "type": "fill",
      "text": "Could you ___ (give) me a receipt, please?",
      "answers": [
       "give"
      ],
      "why": "<b>Could you</b> est suivi du verbe de base."
     }
    ]
   },
   {
    "id": "conditionals-formal-4",
    "reg": "formal",
    "title": "Choisir et combiner : situations pro · Formel",
    "why": "En réunion ou au guichet, il faut choisir : <b>will</b> pour un scénario réaliste, <b>would</b> pour une hypothèse. Ici on ajoute <b>unless</b> (sauf si), les questions et les réponses courtes, sans erreurs de francophone.",
    "rule": "1. Probable : if + présent, <b>will</b> + base.<br>2. Peu probable ou imaginaire : if + past simple, <b>would</b> + base.<br>3. <b>Unless</b> = if ... not : jamais de négation après unless.<br>4. Questions : <b>What will you do if ...?</b> / <b>What would you do if ...?</b><br>5. Réponses courtes : <b>Yes, it will. / No, it won't. / Yes, it would. / No, it wouldn't.</b>",
    "examples": [
     {
      "en": "Unless we receive payment today, we will suspend the account.",
      "fr": "Sauf si nous recevons le paiement aujourd'hui, nous suspendrons le compte."
     },
     {
      "en": "What will you do if the bank refuses the loan?",
      "fr": "Que ferez-vous si la banque refuse le prêt ?"
     },
     {
      "en": "What would you do if you were the manager?",
      "fr": "Que feriez-vous si vous étiez le directeur ?"
     },
     {
      "en": "Will the hotel refund us if we cancel? – Yes, it will.",
      "fr": "L'hôtel nous remboursera-t-il si nous annulons ? – Oui."
     },
     {
      "en": "Would the committee approve the plan if we reduced the cost? – No, it would not.",
      "fr": "Le comité approuverait-il le plan si nous réduisions le coût ? – Non."
     },
     {
      "en": "If we offered a longer warranty, customers would trust us more.",
      "fr": "Si nous offrions une garantie plus longue, les clients nous feraient davantage confiance."
     }
    ],
    "pitfalls": [
     {
      "wrong": "Unless you don't pay, we will cancel the booking.",
      "right": "Unless you pay, we will cancel the booking.",
      "why": "<b>Unless</b> contient déjà la négation (= if you do not pay)."
     },
     {
      "wrong": "What will you do if the bank would refuse?",
      "right": "What will you do if the bank refuses?",
      "why": "Même dans une question, pas de would ni de will après <b>if</b>."
     },
     {
      "wrong": "Will the hotel refund us? – Yes, it refunds.",
      "right": "Will the hotel refund us? – Yes, it will.",
      "why": "La réponse courte reprend le <b>modal</b> de la question."
     }
    ],
    "exercises": [
     {
      "type": "mcq",
      "q": "Laquelle décrit une possibilité réaliste ?",
      "opts": [
       "If the bank refused, we would go to another one.",
       "If the bank refuses, we will go to another one.",
       "If the bank would refuse, we go to another one."
      ],
      "correct": 1,
      "why": "Réaliste : if + <b>présent</b>, puis <b>will</b>."
     },
     {
      "type": "fill",
      "text": "___ you pay today, we will suspend your account. (= sauf si)",
      "answers": [
       "Unless"
      ],
      "why": "<b>Unless</b> = if you do not : sauf si."
     },
     {
      "type": "fill",
      "text": "What ___ you do if the bank refuses the loan?",
      "answers": [
       "will"
      ],
      "why": "Scénario réaliste : <b>What will you do</b> ..."
     },
     {
      "type": "mcq",
      "q": "Choisissez la phrase correcte.",
      "opts": [
       "Unless you don't sign, we will cancel.",
       "If you don't sign unless, we will cancel.",
       "Unless you not sign, we will cancel.",
       "Unless you sign today, we will cancel the booking."
      ],
      "correct": 3,
      "why": "Unless + verbe affirmatif, sans négation."
     },
     {
      "type": "speak",
      "en": "Unless we receive payment today, we will suspend the account.",
      "fr": "Sauf si nous recevons le paiement aujourd'hui, nous suspendrons le compte."
     },
     {
      "type": "fill",
      "text": "What ___ you do if you were the manager?",
      "answers": [
       "would"
      ],
      "why": "Hypothèse (were) : <b>What would you do</b> ..."
     },
     {
      "type": "mcq",
      "q": "Will the hotel refund us if we cancel? Meilleure réponse courte :",
      "opts": [
       "Yes, it will.",
       "Yes, it does refund.",
       "Yes, it is."
      ],
      "correct": 0,
      "why": "On reprend <b>will</b>."
     },
     {
      "type": "fill",
      "text": "Would the committee approve the plan if we reduced the cost? – No, it ___.",
      "answers": [
       "would not",
       "wouldn't"
      ],
      "why": "Réponse courte négative : <b>would not</b>."
     },
     {
      "type": "mcq",
      "q": "« If we offered a longer warranty, customers would trust us more » est…",
      "opts": [
       "une règle générale",
       "une promesse pour demain",
       "une hypothèse peu probable ou imaginaire"
      ],
      "correct": 2,
      "why": "past simple + would : l'<b>hypothèse</b>."
     },
     {
      "type": "fill",
      "text": "If the shipment ___ (arrive) late, we ___ (inform) our clients.",
      "answers": [
       [
        "arrives"
       ],
       [
        "will inform",
        "'ll inform"
       ]
      ],
      "why": "Scénario réaliste : présent après if, <b>will</b> dans la principale."
     },
     {
      "type": "speak",
      "en": "Will the hotel refund us if we cancel?",
      "fr": "L'hôtel nous remboursera-t-il si nous annulons ?"
     },
     {
      "type": "mcq",
      "q": "Complétez : If I ___ the director, I would reduce costs.",
      "opts": [
       "am",
       "were",
       "will be"
      ],
      "correct": 1,
      "why": "Hypothèse irréelle avec be : <b>were</b>."
     },
     {
      "type": "fill",
      "text": "If I ___ (have) your authority, I ___ (accept) their offer.",
      "answers": [
       [
        "had"
       ],
       [
        "would accept",
        "'d accept"
       ]
      ],
      "why": "Je n'ai pas cette autorité : if + <b>past simple</b>, would + base."
     }
    ]
   },
   {
    "id": "conditionals-informal-1",
    "reg": "informal",
    "title": "Si + présent, will : plans et promesses · Informel",
    "why": "Entre amis on fait des plans et des promesses : <b>If it's sunny, we'll go to the park</b>. Même logique qu'en français (si + présent, futur), mais <b>jamais de will après if</b>. À l'oral, on contracte : I'll, we'll, won't.",
    "rule": "1. <b>Zéro</b> (toujours vrai) : if + présent, présent.<br>2. <b>First</b> (probable) : if + présent, <b>'ll / will</b> + verbe de base.<br>3. Contractions : <b>I'll, you'll, we'll, won't</b>.<br>4. Jamais will après if.<br>5. Négation : <b>don't / doesn't</b> dans if, <b>won't</b> dans la principale.<br>6. Virgule si if ouvre la phrase.",
    "timeline": "● maintenant ── if it's sunny (condition) ──▶ we'll go to the park (demain ?)",
    "table": {
     "caption": "If + présent, puis 'll",
     "headers": [
      "Type",
      "Partie if",
      "Partie principale",
      "Exemple"
     ],
     "rows": [
      [
       "Zéro",
       "présent",
       "présent",
       "If I drink coffee late, I <b>can't</b> sleep."
      ],
      [
       "First",
       "présent",
       "<b>'ll</b> + base",
       "If it's sunny, we<b>'ll go</b> to the park."
      ]
     ]
    },
    "examples": [
     {
      "en": "If it's sunny tomorrow, we'll go to the park.",
      "fr": "S'il fait beau demain, on ira au parc."
     },
     {
      "en": "If you're late, I'll start without you.",
      "fr": "Si tu es en retard, je commence sans toi."
     },
     {
      "en": "I'll text you if I find your keys.",
      "fr": "Je t'envoie un message si je retrouve tes clés."
     },
     {
      "en": "If I drink coffee late, I can't sleep.",
      "fr": "Si je bois du café tard, je n'arrive pas à dormir."
     },
     {
      "en": "We won't go out if it rains.",
      "fr": "On ne sortira pas s'il pleut."
     }
    ],
    "pitfalls": [
     {
      "wrong": "If it will be sunny, we go to the park.",
      "right": "If it's sunny, we'll go to the park.",
      "why": "if + <b>présent</b>, puis <b>'ll</b> pour la conséquence."
     },
     {
      "wrong": "I'll text you if I will find your keys.",
      "right": "I'll text you if I find your keys.",
      "why": "Jamais will après <b>if</b>."
     },
     {
      "wrong": "If it rains, we not go.",
      "right": "If it rains, we won't go.",
      "why": "La négation du futur est <b>won't</b> (will not)."
     }
    ],
    "exercises": [
     {
      "type": "mcq",
      "q": "« S'il fait beau demain, on ira au parc. »",
      "opts": [
       "If it will be sunny tomorrow, we go to the park.",
       "If it was sunny tomorrow, we would go to the park.",
       "If it's sunny tomorrow, we'll go to the park."
      ],
      "correct": 2,
      "why": "if + <b>présent</b>, puis <b>'ll</b> + base."
     },
     {
      "type": "fill",
      "text": "If you ___ (be) late, I'll start without you.",
      "answers": [
       "are",
       "'re"
      ],
      "why": "if + présent : you <b>are</b> (you're)."
     },
     {
      "type": "fill",
      "text": "I ___ (text) you if I find your keys.",
      "answers": [
       "will text",
       "'ll text"
      ],
      "why": "Promesse : <b>'ll</b> + verbe de base."
     },
     {
      "type": "mcq",
      "q": "Choisissez la phrase correcte.",
      "opts": [
       "If it will rain, we'll stay in.",
       "If it rains, we'll stay in.",
       "If it rain, we stay in."
      ],
      "correct": 1,
      "why": "Pas de will après if, et <b>-s</b> à it."
     },
     {
      "type": "speak",
      "en": "If it's sunny tomorrow, we'll go to the park.",
      "fr": "S'il fait beau demain, on ira au parc."
     },
     {
      "type": "fill",
      "text": "We ___ (not go) out if it rains.",
      "answers": [
       "won't go",
       "will not go"
      ],
      "why": "Futur négatif : <b>won't</b> + base."
     },
     {
      "type": "mcq",
      "q": "« If I drink coffee late, I can't sleep » =",
      "opts": [
       "Ça m'arrive à chaque fois (règle générale)",
       "Je vais en boire demain",
       "Je n'en bois jamais"
      ],
      "correct": 0,
      "why": "Présent + présent : conditionnel <b>zéro</b>."
     },
     {
      "type": "fill",
      "text": "If my brother ___ (cook), we always order a pizza afterwards.",
      "answers": [
       "cooks"
      ],
      "why": "Sujet my brother : présent avec <b>-s</b>."
     },
     {
      "type": "mcq",
      "q": "Laquelle est incorrecte ?",
      "opts": [
       "If you ring me, I'll pick you up.",
       "I'll call you if I get the job.",
       "If I will get the job, I'll call you."
      ],
      "correct": 2,
      "why": "On ne met pas <b>will</b> après if."
     },
     {
      "type": "fill",
      "text": "If Tom ___ (bring) snacks, we ___ (watch) the match at mine.",
      "answers": [
       [
        "brings"
       ],
       [
        "will watch",
        "'ll watch"
       ]
      ],
      "why": "if + présent (-s), puis <b>'ll</b> + base."
     },
     {
      "type": "speak",
      "en": "If you're late, I'll start without you.",
      "fr": "Si tu es en retard, je commence sans toi."
     },
     {
      "type": "mcq",
      "q": "Après « if », le verbe est…",
      "opts": [
       "au présent simple",
       "avec 'll",
       "avec would"
      ],
      "correct": 0,
      "why": "Même pour l'avenir, if est suivi du <b>présent</b>."
     },
     {
      "type": "fill",
      "text": "If the shop ___ (be) closed, we'll go to the café.",
      "answers": [
       "is",
       "'s"
      ],
      "why": "if + présent : the shop <b>is</b>."
     }
    ]
   },
   {
    "id": "conditionals-informal-2",
    "reg": "informal",
    "title": "Si + passé, would : rêves et conseils · Informel",
    "why": "Pour rêver (<b>If I won the lottery...</b>) ou donner un conseil à un ami (<b>If I were you, I'd...</b>), on utilise <b>if + past simple, 'd + verbe</b>. Comme « si j'avais..., je ferais... » en français : le past simple n'est pas du passé, c'est de l'imaginaire.",
    "rule": "1. <b>If + past simple, would ('d) + base</b>.<br>2. Le past simple dit « imaginaire », pas « hier ».<br>3. Conseil : <b>If I were you, I'd ...</b> (If I was you s'entend aussi).<br>4. Négation : <b>didn't</b> dans if, <b>wouldn't</b> dans la principale.<br>5. Jamais would après if.",
    "examples": [
     {
      "en": "If I won the lottery, I'd buy a flat in Lisbon.",
      "fr": "Si je gagnais au loto, j'achèterais un appart à Lisbonne."
     },
     {
      "en": "If I were you, I'd just text her.",
      "fr": "À ta place, je lui enverrais juste un message."
     },
     {
      "en": "What would you do if you had a free day?",
      "fr": "Que ferais-tu si tu avais une journée libre ?"
     },
     {
      "en": "If we lived by the sea, we'd go surfing every weekend.",
      "fr": "Si on habitait au bord de la mer, on ferait du surf tous les week-ends."
     },
     {
      "en": "She'd be so happy if you came.",
      "fr": "Elle serait trop contente si tu venais."
     }
    ],
    "pitfalls": [
     {
      "wrong": "If I would win the lottery, I'd buy a flat.",
      "right": "If I won the lottery, I'd buy a flat.",
      "why": "Après if on met le <b>past simple</b>, pas would."
     },
     {
      "wrong": "If I'd be you, I text her.",
      "right": "If I were you, I'd text her.",
      "why": "<b>If I were you</b> + <b>I'd</b> + base."
     },
     {
      "wrong": "If I won the lottery, I buy a flat.",
      "right": "If I won the lottery, I'd buy a flat.",
      "why": "La conséquence d'un rêve prend <b>'d</b> (would)."
     }
    ],
    "exercises": [
     {
      "type": "mcq",
      "q": "« Si je gagnais au loto, j'achèterais un appart. »",
      "opts": [
       "If I win the lottery, I'd buy a flat.",
       "If I won the lottery, I'd buy a flat.",
       "If I would win the lottery, I'd buy a flat."
      ],
      "correct": 1,
      "why": "if + <b>past simple</b>, puis <b>'d</b> + base."
     },
     {
      "type": "fill",
      "text": "If we ___ (live) by the sea, we'd go surfing every weekend.",
      "answers": [
       "lived"
      ],
      "why": "Rêve : <b>past simple</b> après if."
     },
     {
      "type": "fill",
      "text": "If I ___ (be) you, I'd just text her.",
      "answers": [
       "were",
       "was"
      ],
      "why": "<b>If I were you</b> (was s'entend à l'oral)."
     },
     {
      "type": "mcq",
      "q": "Complétez : She ___ be so happy if you came.",
      "opts": [
       "will",
       "did",
       "would"
      ],
      "correct": 2,
      "why": "Conséquence imaginaire : <b>would be</b> (she'd be)."
     },
     {
      "type": "speak",
      "en": "If I won the lottery, I'd buy a flat in Lisbon.",
      "fr": "Si je gagnais au loto, j'achèterais un appart à Lisbonne."
     },
     {
      "type": "fill",
      "text": "What ___ you do if you had a free day?",
      "answers": [
       "would"
      ],
      "why": "Question d'hypothèse : <b>What would you do</b> ..."
     },
     {
      "type": "mcq",
      "q": "« If I had a car, I'd drive to the coast » signifie que je…",
      "opts": [
       "n'ai pas de voiture",
       "ai une voiture",
       "avais une voiture hier"
      ],
      "correct": 0,
      "why": "Le past simple d'hypothèse décrit une situation <b>irréelle</b> maintenant."
     },
     {
      "type": "fill",
      "text": "If I ___ (have) more time, I'd learn the guitar.",
      "answers": [
       "had"
      ],
      "why": "Hypothèse : <b>had</b> après if."
     },
     {
      "type": "mcq",
      "q": "Laquelle est correcte ?",
      "opts": [
       "If I'd have more money, I'd travel more.",
       "If I had more money, I'd travel more.",
       "If I would have more money, I would travel."
      ],
      "correct": 1,
      "why": "if + <b>had</b>, jamais I'd have ni would have."
     },
     {
      "type": "fill",
      "text": "If my flatmate ___ (not snore), I ___ (sleep) better.",
      "answers": [
       [
        "didn't snore",
        "did not snore"
       ],
       [
        "would sleep",
        "'d sleep"
       ]
      ],
      "why": "if + <b>didn't</b> + base, puis <b>would</b> + base."
     },
     {
      "type": "speak",
      "en": "If I were you, I'd just text her.",
      "fr": "À ta place, je lui enverrais juste un message."
     },
     {
      "type": "mcq",
      "q": "Réponse naturelle à « What would you do if it rained? »",
      "opts": [
       "I stay at home.",
       "I would to stay at home.",
       "I will stay at home if.",
       "I'd stay at home."
      ],
      "correct": 3,
      "why": "Conséquence imaginaire : <b>I'd</b> + base."
     },
     {
      "type": "fill",
      "text": "We ___ (not need) a taxi if we lived nearer.",
      "answers": [
       "wouldn't need",
       "would not need"
      ],
      "why": "Principale négative : <b>wouldn't</b> + base."
     }
    ]
   },
   {
    "id": "conditionals-informal-3",
    "reg": "informal",
    "title": "Would entre amis : inviter, proposer, demander · Informel",
    "why": "Entre amis aussi, <b>would</b> rend une invitation ou une demande sympa et naturelle : <b>Would you like a cuppa?</b>, <b>I'd love to!</b>. Pas besoin du ton formel, mais « You want a tea? » ou « Give me a lift » sonnent secs.",
    "rule": "1. Offre ou invitation : <b>Would you like</b> + nom ou to + verbe ?<br>2. Accepter : <b>I'd love to!</b> / <b>I'd love a coffee.</b><br>3. Refuser gentiment : <b>I'd love to, but ...</b> / <b>I'd rather not.</b><br>4. Demande : <b>Would you mind</b> + verbe en -ing ?<br>5. Je voudrais que tu : <b>I'd like you to</b> + base.<br>6. Préférence : <b>I'd rather</b> + base.",
    "examples": [
     {
      "en": "Would you like a cuppa?",
      "fr": "Tu veux une tasse de thé ?"
     },
     {
      "en": "I'd love to come, but I'm working tonight.",
      "fr": "J'adorerais venir, mais je travaille ce soir."
     },
     {
      "en": "Would you mind giving me a lift?",
      "fr": "Ça te dérangerait de m'emmener en voiture ?"
     },
     {
      "en": "I'd rather stay in tonight.",
      "fr": "Je préfère rester à la maison ce soir."
     },
     {
      "en": "I'd love a slice of that cake!",
      "fr": "Je mangerais bien une part de ce gâteau !"
     }
    ],
    "pitfalls": [
     {
      "wrong": "I would like that you come to my party.",
      "right": "I'd like you to come to my party.",
      "why": "Pas de « that » : <b>like + personne + to + verbe</b>."
     },
     {
      "wrong": "Would you mind to give me a lift?",
      "right": "Would you mind giving me a lift?",
      "why": "Après <b>mind</b>, verbe en <b>-ing</b>."
     },
     {
      "wrong": "Yes, I love!",
      "right": "Yes, I'd love to!",
      "why": "Pour accepter une invitation : <b>I'd love to</b>, pas « I love »."
     }
    ],
    "exercises": [
     {
      "type": "mcq",
      "q": "Un ami propose : « Tu veux une tasse de thé ? »",
      "opts": [
       "Would you like a cuppa?",
       "Do you would like a cuppa?",
       "You would like a cuppa?"
      ],
      "correct": 0,
      "why": "Offre : <b>Would you like</b> ... ?"
     },
     {
      "type": "fill",
      "text": "___ you like to grab a coffee after work?",
      "answers": [
       "Would"
      ],
      "why": "Invitation : <b>Would you like to</b> + base."
     },
     {
      "type": "fill",
      "text": "Would you mind ___ (give) me a lift?",
      "answers": [
       "giving"
      ],
      "why": "Après <b>Would you mind</b>, verbe en -ing."
     },
     {
      "type": "mcq",
      "q": "Tu es ravi(e) par l'invitation. Quelle réponse ?",
      "opts": [
       "Yes, I love!",
       "Yes, I'd love to!",
       "Yes, I will love."
      ],
      "correct": 1,
      "why": "Accepter : <b>I'd love to!</b>"
     },
     {
      "type": "speak",
      "en": "Would you like a cuppa before we leave?",
      "fr": "Tu veux une tasse de thé avant qu'on parte ?"
     },
     {
      "type": "fill",
      "text": "I'd like you ___ (come) to my party on Saturday.",
      "answers": [
       "to come"
      ],
      "why": "<b>like + personne + to + verbe</b>."
     },
     {
      "type": "mcq",
      "q": "Quelle phrase refuse poliment ?",
      "opts": [
       "Come here, I need you.",
       "Not me.",
       "I'd love to, but I'm working tonight."
      ],
      "correct": 2,
      "why": "Refus sympa : <b>I'd love to, but ...</b>"
     },
     {
      "type": "fill",
      "text": "I'd rather ___ (stay) in tonight, to be honest.",
      "answers": [
       "stay"
      ],
      "why": "<b>I'd rather</b> + verbe de base."
     },
     {
      "type": "mcq",
      "q": "Laquelle est correcte ?",
      "opts": [
       "Would you mind opening the window?",
       "Would you mind to open the window?",
       "Would you mind open the window?"
      ],
      "correct": 0,
      "why": "<b>Would you mind</b> + verbe en -ing."
     },
     {
      "type": "fill",
      "text": "I'd love ___ come to your party, but I'm away.",
      "answers": [
       "to"
      ],
      "why": "<b>I'd love to</b> + verbe."
     },
     {
      "type": "speak",
      "en": "I'd love to come, but I'm working tonight.",
      "fr": "J'adorerais venir, mais je travaille ce soir."
     },
     {
      "type": "mcq",
      "q": "« Would you like to come to the cinema? » Réponse naturelle :",
      "opts": [
       "Yes, I like.",
       "Yes, I will like.",
       "Yes, I would love.",
       "Yes, I'd love to!"
      ],
      "correct": 3,
      "why": "Réponse naturelle : <b>I'd love to!</b>"
     },
     {
      "type": "fill",
      "text": "___ you mind ___ (turn) the music down?",
      "answers": [
       [
        "Would"
       ],
       [
        "turning"
       ]
      ],
      "why": "<b>Would you mind</b> + verbe en -ing."
     }
    ]
   },
   {
    "id": "conditionals-informal-4",
    "reg": "informal",
    "title": "Mélanger, questionner, répondre vite · Informel",
    "why": "Entre amis, on passe sans cesse du réaliste (<b>'ll</b>) au rêve (<b>'d</b>), et on répond court : <b>Yeah, I will. / No, I wouldn't.</b> Avec <b>unless</b> (sauf si), les phrases deviennent plus naturelles.",
    "rule": "1. Réaliste : if + présent, <b>'ll</b> + base.<br>2. Rêve : if + past simple, <b>'d</b> + base.<br>3. <b>Unless</b> = if ... not : pas de négation derrière.<br>4. Questions : <b>What'll you do if ...?</b> / <b>What would you do if ...?</b><br>5. Réponses courtes : <b>Yeah, I will. / No, I won't. / Yeah, I would. / No, I wouldn't.</b><br>6. À l'oral : <b>If I was ...</b> remplace souvent If I were ...",
    "examples": [
     {
      "en": "If I'm knackered tomorrow, I'll stay in bed.",
      "fr": "Si je suis crevé demain, je reste au lit."
     },
     {
      "en": "We'll go for a pint if you fancy one.",
      "fr": "On ira boire une bière si ça te dit."
     },
     {
      "en": "I'd tidy up if I could be bothered.",
      "fr": "Je rangerais si j'avais le courage."
     },
     {
      "en": "Will you come if I buy you a pint? – Yeah, I will.",
      "fr": "Tu viendras si je t'offre une bière ? – Ouais."
     },
     {
      "en": "Unless it rains, we'll have a barbecue.",
      "fr": "Sauf s'il pleut, on fera un barbecue."
     },
     {
      "en": "What would you say if he asked you out?",
      "fr": "Que dirais-tu s'il te proposait un rendez-vous ?"
     }
    ],
    "pitfalls": [
     {
      "wrong": "Unless it doesn't rain, we'll have a barbecue.",
      "right": "Unless it rains, we'll have a barbecue.",
      "why": "<b>Unless</b> contient déjà la négation (= if it doesn't rain)."
     },
     {
      "wrong": "Will you come? – Yes, I would.",
      "right": "Will you come? – Yes, I will.",
      "why": "La réponse courte reprend le <b>même modal</b> que la question."
     },
     {
      "wrong": "If I would be less tired, I'd come.",
      "right": "If I weren't so tired, I'd come.",
      "why": "Après if on met le past simple (weren't ou wasn't), jamais would."
     }
    ],
    "exercises": [
     {
      "type": "mcq",
      "q": "Choisissez la phrase correcte.",
      "opts": [
       "If I will be knackered tomorrow, I stay in bed.",
       "If I was knackered tomorrow, I'll stay in bed.",
       "If I'd be knackered tomorrow, I'd stay in bed.",
       "If I'm knackered tomorrow, I'll stay in bed."
      ],
      "correct": 3,
      "why": "Réaliste : if + <b>présent</b>, puis <b>'ll</b>."
     },
     {
      "type": "fill",
      "text": "___ you hurry up, we'll miss the bus. (= sauf si)",
      "answers": [
       "Unless"
      ],
      "why": "<b>Unless</b> = if you don't hurry up."
     },
     {
      "type": "fill",
      "text": "Will you come if I buy you a pint? – Yeah, I ___.",
      "answers": [
       "will"
      ],
      "why": "On reprend le modal : <b>I will</b>."
     },
     {
      "type": "mcq",
      "q": "Would you tell her if you knew? Réponse négative courte :",
      "opts": [
       "No, I won't.",
       "No, I wouldn't.",
       "No, I don't."
      ],
      "correct": 1,
      "why": "Question en would : réponse en <b>wouldn't</b>."
     },
     {
      "type": "speak",
      "en": "We'll go for a pint if you fancy one.",
      "fr": "On ira boire une bière si ça te dit."
     },
     {
      "type": "fill",
      "text": "I ___ (tidy) up if I could be bothered.",
      "answers": [
       "would tidy",
       "'d tidy"
      ],
      "why": "Hypothèse : <b>'d</b> + verbe de base."
     },
     {
      "type": "mcq",
      "q": "Pourquoi « Unless it doesn't rain » est-il faux ?",
      "opts": [
       "Unless contient déjà la négation",
       "Unless se met toujours à la fin",
       "Il manque will"
      ],
      "correct": 0,
      "why": "Unless = if ... not : on ne double pas la négation."
     },
     {
      "type": "fill",
      "text": "What ___ you say if he asked you out?",
      "answers": [
       "would"
      ],
      "why": "Hypothèse avec asked : <b>What would you say</b> ..."
     },
     {
      "type": "mcq",
      "q": "Will you call me if you need a lift? Réponse correcte :",
      "opts": [
       "Yes, I would.",
       "Yes, I call.",
       "Yes, I will."
      ],
      "correct": 2,
      "why": "Question en will : réponse en <b>will</b>."
     },
     {
      "type": "fill",
      "text": "If I ___ (be) taller, I ___ (play) basketball.",
      "answers": [
       [
        "were",
        "was"
       ],
       [
        "would play",
        "'d play"
       ]
      ],
      "why": "Rêve : <b>were</b>, puis <b>'d</b> + base."
     },
     {
      "type": "speak",
      "en": "Would you tell her if you knew?",
      "fr": "Tu le lui dirais si tu savais ?"
     },
     {
      "type": "mcq",
      "q": "Complétez : If I ___ so tired, I'd come to the party.",
      "opts": [
       "wouldn't be",
       "won't be",
       "weren't",
       "am not"
      ],
      "correct": 2,
      "why": "Hypothèse : past simple (<b>weren't</b>, wasn't à l'oral)."
     },
     {
      "type": "fill",
      "text": "If you ___ (finish) early, I ___ (pick) you up.",
      "answers": [
       [
        "finish"
       ],
       [
        "will pick",
        "'ll pick"
       ]
      ],
      "why": "Réaliste : présent après if, <b>'ll</b> dans la principale."
     }
    ]
   }
  ]
 },
 {
  "id": "temps-en-imperative",
  "group": "temps",
  "icon": "📣",
  "title": "L'impératif",
  "level": "A1",
  "intro": "Ordres, consignes, conseils, invitations : le verbe nu, <b>Don't</b>, <b>Let's</b>, <b>please</b>. Ici, deux registres : <b>formel</b> (travail, administration, service) et <b>informel</b> (amis, famille).",
  "lessons": [
   {
    "id": "imperative-formal-1",
    "reg": "formal",
    "title": "Consignes polies : verbe de base + please · Formel",
    "why": "Au bureau, à l'accueil ou à la banque, on donne une consigne avec le <b>verbe de base</b> et <b>please</b>, ou on adoucit avec <b>Could you…?</b>.",
    "rule": "1. Impératif = <b>verbe de base</b>, sans sujet et sans to : <b>Sign here.</b><br>2. Ajoute <b>please</b> au début ou à la fin : <b>Please sit down. / Sit down, please.</b><br>3. Même forme pour « tu » et « vous », au singulier comme au pluriel.<br>4. Plus poli encore : <b>Could you + verbe de base… ?</b><br>5. Le verbe be fait <b>Be</b> : <b>Please be on time.</b>",
    "table": {
     "caption": "Trois niveaux de politesse",
     "headers": [
      "Niveau",
      "Anglais",
      "Français"
     ],
     "rows": [
      [
       "Consigne",
       "Wait here.",
       "Attendez ici."
      ],
      [
       "Consigne polie",
       "Please wait here.",
       "Veuillez attendre ici."
      ],
      [
       "Demande très polie",
       "Could you wait here, please?",
       "Pourriez-vous attendre ici, s'il vous plaît ?"
      ]
     ]
    },
    "timeline": "● vous parlez ──▶ l'autre agit tout de suite : Please take a seat.",
    "examples": [
     {
      "en": "Please take a seat.",
      "fr": "Veuillez vous asseoir."
     },
     {
      "en": "Fill in this form, please.",
      "fr": "Remplissez ce formulaire, s'il vous plaît."
     },
     {
      "en": "Could you send me the report?",
      "fr": "Pourriez-vous m'envoyer le rapport ?"
     },
     {
      "en": "Please sign here.",
      "fr": "Veuillez signer ici."
     },
     {
      "en": "Wait in reception, please.",
      "fr": "Veuillez patienter à l'accueil."
     },
     {
      "en": "Could you confirm your address?",
      "fr": "Pourriez-vous confirmer votre adresse ?"
     }
    ],
    "pitfalls": [
     {
      "wrong": "You please sit down.",
      "right": "Please sit down.",
      "why": "L'impératif n'a pas de sujet : pas de <b>you</b>."
     },
     {
      "wrong": "Please to sit down.",
      "right": "Please sit down.",
      "why": "Jamais de <b>to</b> après please : on garde le verbe de base."
     },
     {
      "wrong": "Could you to send me the file?",
      "right": "Could you send me the file?",
      "why": "Après <b>Could you</b>, on met le verbe de base sans to."
     }
    ],
    "exercises": [
     {
      "type": "mcq",
      "q": "« Veuillez vous asseoir. » =",
      "opts": [
       "You please sit down.",
       "Please sit down.",
       "Please to sit down."
      ],
      "correct": 1,
      "why": "Pas de sujet et pas de to : <b>Please sit down.</b>"
     },
     {
      "type": "fill",
      "text": "Please ___ (come) in and take a seat.",
      "answers": [
       "come"
      ],
      "why": "Verbe de base après please : <b>come</b>."
     },
     {
      "type": "mcq",
      "q": "Quelle phrase est la plus polie ?",
      "opts": [
       "Give me your passport.",
       "Could you show me your passport?",
       "You show passport."
      ],
      "correct": 1,
      "why": "<b>Could you…?</b> adoucit la demande."
     },
     {
      "type": "fill",
      "text": "___ (open) the file and read the first page.",
      "answers": [
       "Open",
       "open"
      ],
      "why": "Impératif = verbe de base : <b>open</b>."
     },
     {
      "type": "speak",
      "en": "Please take a seat and wait here.",
      "fr": "Veuillez vous asseoir et attendre ici."
     },
     {
      "type": "fill",
      "text": "Could you ___ (send) me the invoice, please?",
      "answers": [
       "send"
      ],
      "why": "Après <b>Could you</b> : verbe de base, <b>send</b>."
     },
     {
      "type": "mcq",
      "q": "Complétez : Could you ___ the window, please?",
      "opts": [
       "to close",
       "closing",
       "close"
      ],
      "correct": 2,
      "why": "Verbe de base sans to : <b>close</b>."
     },
     {
      "type": "fill",
      "text": "Fill in this form, ___.",
      "answers": [
       "please"
      ],
      "why": "On ajoute <b>please</b> à la fin pour être poli."
     },
     {
      "type": "mcq",
      "q": "« Veuillez patienter un instant. » =",
      "opts": [
       "Please wait a moment.",
       "Please you wait a moment.",
       "Please waiting a moment."
      ],
      "correct": 0,
      "why": "<b>Please + verbe de base</b>, rien d'autre."
     },
     {
      "type": "fill",
      "text": "Please ___ (sign) here and ___ (return) the form.",
      "answers": [
       [
        "sign"
       ],
       [
        "return"
       ]
      ],
      "why": "Deux consignes, deux verbes de base : <b>sign</b>, <b>return</b>."
     },
     {
      "type": "speak",
      "en": "Could you confirm your name and address, please?",
      "fr": "Pourriez-vous confirmer votre nom et votre adresse, s'il vous plaît ?"
     },
     {
      "type": "mcq",
      "q": "Quelle phrase est une consigne sans sujet ?",
      "opts": [
       "You will wait here.",
       "He waits here.",
       "We wait here.",
       "Wait here, please."
      ],
      "correct": 3,
      "why": "L'impératif commence directement par le <b>verbe</b>."
     },
     {
      "type": "fill",
      "text": "Please ___ (be) on time for the meeting.",
      "answers": [
       "be"
      ],
      "why": "L'impératif de <b>be</b> est <b>Be</b> (jamais are / is)."
     }
    ]
   },
   {
    "id": "imperative-formal-2",
    "reg": "formal",
    "title": "Interdire poliment : Do not / Please do not · Formel",
    "why": "Panneaux, règlements et courriels pros utilisent <b>Do not…</b> pour interdire ou déconseiller sans être brusque.",
    "rule": "1. Négatif = <b>Do not + verbe de base</b> (à l'oral et dans les messages souples : <b>Don't</b>).<br>2. Plus doux : <b>Please do not…</b><br>3. Jamais <b>Not + verbe</b> ni <b>No + verbe</b>.<br>4. Avec be : <b>Do not be late.</b><br>5. Formule classique : <b>Do not hesitate to…</b> = n'hésitez pas à…",
    "examples": [
     {
      "en": "Please do not smoke in the building.",
      "fr": "Veuillez ne pas fumer dans le bâtiment."
     },
     {
      "en": "Do not leave your luggage unattended.",
      "fr": "Ne laissez pas vos bagages sans surveillance."
     },
     {
      "en": "Please do not hesitate to call our office.",
      "fr": "N'hésitez pas à appeler notre bureau."
     },
     {
      "en": "Do not forward this email, please.",
      "fr": "Ne transférez pas ce courriel, s'il vous plaît."
     },
     {
      "en": "Please don't park in front of the entrance.",
      "fr": "Veuillez ne pas vous garer devant l'entrée."
     },
     {
      "en": "Do not enter without authorisation.",
      "fr": "N'entrez pas sans autorisation."
     }
    ],
    "pitfalls": [
     {
      "wrong": "Not smoke here.",
      "right": "Do not smoke here.",
      "why": "On forme le négatif avec <b>do not</b>, pas avec not seul."
     },
     {
      "wrong": "Please no park here.",
      "right": "Please do not park here.",
      "why": "<b>No</b> ne se place pas devant un verbe."
     },
     {
      "wrong": "Do not to hesitate.",
      "right": "Do not hesitate.",
      "why": "Après <b>do not</b>, verbe de base sans to."
     }
    ],
    "exercises": [
     {
      "type": "mcq",
      "q": "Panneau poli : « Veuillez ne pas fumer. »",
      "opts": [
       "Please do not smoke.",
       "Please not smoke.",
       "Please no smoke."
      ],
      "correct": 0,
      "why": "Négatif : <b>do not + verbe de base</b>."
     },
     {
      "type": "fill",
      "text": "Please ___ leave your bags here.",
      "answers": [
       "do not",
       "don't"
      ],
      "why": "Forme négative : <b>do not</b> ou <b>don't</b>."
     },
     {
      "type": "fill",
      "text": "Do not ___ (hesitate) to ask if you have a question.",
      "answers": [
       "hesitate"
      ],
      "why": "Verbe de base après do not : <b>hesitate</b>."
     },
     {
      "type": "mcq",
      "q": "« N'oubliez pas de signer. » =",
      "opts": [
       "Not forget to sign.",
       "Do not forget sign.",
       "Do not forget to sign."
      ],
      "correct": 2,
      "why": "<b>Do not forget</b> + <b>to</b> + verbe : forget to sign."
     },
     {
      "type": "speak",
      "en": "Do not hesitate to contact me.",
      "fr": "N'hésitez pas à me contacter."
     },
     {
      "type": "fill",
      "text": "___ not use the lift during a fire.",
      "answers": [
       "Do",
       "do"
      ],
      "why": "Le négatif commence par <b>Do not</b>."
     },
     {
      "type": "mcq",
      "q": "Quelle phrase est incorrecte ?",
      "opts": [
       "Please do not park here.",
       "Please not park here.",
       "Do not touch the screen."
      ],
      "correct": 1,
      "why": "Il manque <b>do</b> : <b>Please do not park here</b>."
     },
     {
      "type": "fill",
      "text": "Please do ___ touch the equipment.",
      "answers": [
       "not"
      ],
      "why": "Après <b>do</b>, on place <b>not</b>."
     },
     {
      "type": "mcq",
      "q": "À l'oral, poliment : « Ne vous garez pas ici, s'il vous plaît. »",
      "opts": [
       "No park here, please.",
       "Not park here, please.",
       "Don't to park here, please.",
       "Don't park here, please."
      ],
      "correct": 3,
      "why": "<b>Don't + verbe de base</b>, sans to."
     },
     {
      "type": "fill",
      "text": "Do not ___ (open) attachments from unknown senders.",
      "answers": [
       "open"
      ],
      "why": "Verbe de base : <b>open</b>."
     },
     {
      "type": "speak",
      "en": "Do not leave your luggage alone, please.",
      "fr": "Ne laissez pas vos bagages seuls, s'il vous plaît."
     },
     {
      "type": "mcq",
      "q": "Que signifie « Please do not hesitate to ask. » ?",
      "opts": [
       "Surtout ne demandez rien.",
       "Hésitez avant de demander.",
       "N'hésitez pas à demander."
      ],
      "correct": 2,
      "why": "<b>Do not hesitate</b> = n'hésitez pas."
     },
     {
      "type": "fill",
      "text": "Please do not ___ (be) late for the interview.",
      "answers": [
       "be"
      ],
      "why": "Avec be : <b>do not be</b>."
     }
    ]
   },
   {
    "id": "imperative-formal-3",
    "reg": "formal",
    "title": "Demandes et offres : Could you, Would you, Shall I · Formel",
    "why": "Dans un échange professionnel, on <b>demande</b> avec Could you / Would you et on <b>propose son aide</b> avec Shall I / Would you like me to.",
    "rule": "1. Demande : <b>Could you + verbe de base… ?</b><br>2. Très poli : <b>Would you please + verbe de base… ?</b><br>3. Offre : <b>Shall I + verbe de base… ?</b> (Dois-je… ?)<br>4. Offre : <b>Would you like me to + verbe de base… ?</b><br>5. Réponses courtes : <b>Certainly. / Of course. / I'm afraid not.</b>",
    "examples": [
     {
      "en": "Could you tell me the time of the meeting?",
      "fr": "Pourriez-vous me dire l'heure de la réunion ?"
     },
     {
      "en": "Would you please wait a moment?",
      "fr": "Voudriez-vous patienter un instant ?"
     },
     {
      "en": "Shall I take your coat?",
      "fr": "Dois-je prendre votre manteau ?"
     },
     {
      "en": "Shall I book a table for you?",
      "fr": "Dois-je vous réserver une table ?"
     },
     {
      "en": "Would you like me to arrange a car?",
      "fr": "Souhaitez-vous que j'organise une voiture ?"
     },
     {
      "en": "Could you repeat that, please?",
      "fr": "Pourriez-vous répéter, s'il vous plaît ?"
     }
    ],
    "pitfalls": [
     {
      "wrong": "Could you helping me?",
      "right": "Could you help me?",
      "why": "Après <b>Could you</b>, verbe de base : pas de -ing."
     },
     {
      "wrong": "Shall I to open the window?",
      "right": "Shall I open the window?",
      "why": "Après <b>Shall I</b>, pas de to."
     },
     {
      "wrong": "Would you like that I call a taxi?",
      "right": "Would you like me to call a taxi?",
      "why": "On dit <b>like me to + verbe</b>, pas « like that I »."
     }
    ],
    "exercises": [
     {
      "type": "mcq",
      "q": "Vous proposez : « Dois-je porter vos bagages ? »",
      "opts": [
       "Shall I carry your bags?",
       "Do I carry your bags?",
       "Shall I to carry your bags?"
      ],
      "correct": 0,
      "why": "Offre : <b>Shall I + verbe de base</b>."
     },
     {
      "type": "fill",
      "text": "Shall I ___ (book) a taxi for you?",
      "answers": [
       "book"
      ],
      "why": "Verbe de base après Shall I : <b>book</b>."
     },
     {
      "type": "fill",
      "text": "Could you ___ (repeat) the question, please?",
      "answers": [
       "repeat"
      ],
      "why": "Après Could you : <b>repeat</b>."
     },
     {
      "type": "mcq",
      "q": "Quelle phrase propose de l'aide ?",
      "opts": [
       "Could you carry this?",
       "Shall I carry this for you?",
       "Carry this, please."
      ],
      "correct": 1,
      "why": "<b>Shall I…?</b> = je propose de le faire."
     },
     {
      "type": "speak",
      "en": "Would you like me to print the documents?",
      "fr": "Souhaitez-vous que j'imprime les documents ?"
     },
     {
      "type": "fill",
      "text": "Would you ___ wait a moment, please?",
      "answers": [
       "please"
      ],
      "why": "<b>Would you please + verbe</b> : demande très polie."
     },
     {
      "type": "mcq",
      "q": "Pour demander poliment de répéter :",
      "opts": [
       "Repeat now!",
       "Why you repeat?",
       "Could you say that again, please?"
      ],
      "correct": 2,
      "why": "<b>Could you…, please?</b> est la forme polie."
     },
     {
      "type": "fill",
      "text": "___ I take your coat, madam?",
      "answers": [
       "Shall"
      ],
      "why": "Offre : <b>Shall I</b> + verbe de base."
     },
     {
      "type": "mcq",
      "q": "« Souhaitez-vous que j'appelle un taxi ? » =",
      "opts": [
       "Would you like I call a taxi?",
       "Do you want that I call a taxi?",
       "Would you like me calling a taxi?",
       "Would you like me to call a taxi?"
      ],
      "correct": 3,
      "why": "<b>Would you like me to + verbe de base</b>."
     },
     {
      "type": "fill",
      "text": "Could you ___ (tell) me where reception is?",
      "answers": [
       "tell"
      ],
      "why": "Verbe de base après Could you : <b>tell</b>."
     },
     {
      "type": "speak",
      "en": "Shall I take your coat, madam?",
      "fr": "Dois-je prendre votre manteau, madame ?"
     },
     {
      "type": "mcq",
      "q": "Quelle phrase est correcte ?",
      "opts": [
       "Could you to help me?",
       "Could you help me?",
       "Could you helping me?"
      ],
      "correct": 1,
      "why": "<b>Could you help</b> : verbe de base, rien d'autre."
     },
     {
      "type": "fill",
      "text": "Would you like me to ___ (show) you the way?",
      "answers": [
       "show"
      ],
      "why": "Après <b>like me to</b> : verbe de base, <b>show</b>."
     }
    ]
   },
   {
    "id": "imperative-formal-4",
    "reg": "formal",
    "title": "Courriels, réunions, service client · Formel",
    "why": "Les formules figées de l'écrit professionnel reposent presque toutes sur l'impératif : <b>Please find attached…, Please note that…, Kindly confirm…</b>",
    "rule": "1. <b>Please find attached + document</b> = veuillez trouver ci-joint.<br>2. <b>Please note that…</b> = veuillez noter que…<br>3. <b>Please let me know…</b> = faites-moi savoir…<br>4. <b>Kindly + verbe de base</b> : très formel, à l'écrit.<br>5. <b>Please accept my apologies</b> / <b>Please bear with me</b> : excuses et patience.<br>6. Formule pour demander : <b>I would be grateful if you could + verbe de base.</b>",
    "examples": [
     {
      "en": "Please find attached the contract.",
      "fr": "Veuillez trouver ci-joint le contrat."
     },
     {
      "en": "Please note that the office closes at six.",
      "fr": "Veuillez noter que le bureau ferme à dix-huit heures."
     },
     {
      "en": "Kindly confirm your attendance.",
      "fr": "Veuillez confirmer votre présence."
     },
     {
      "en": "Please let me know if you need anything else.",
      "fr": "Faites-moi savoir si vous avez besoin d'autre chose."
     },
     {
      "en": "Please call the front desk if you need help.",
      "fr": "Veuillez appeler la réception si vous avez besoin d'aide."
     },
     {
      "en": "I would be grateful if you could send me the details.",
      "fr": "Je vous serais reconnaissant de m'envoyer les détails."
     }
    ],
    "pitfalls": [
     {
      "wrong": "Please find attach the contract.",
      "right": "Please find attached the contract.",
      "why": "On écrit <b>attached</b>, avec -ed."
     },
     {
      "wrong": "Please let me to know.",
      "right": "Please let me know.",
      "why": "Après <b>let me</b>, verbe de base sans to."
     },
     {
      "wrong": "Kindly to confirm your name.",
      "right": "Kindly confirm your name.",
      "why": "Après <b>Kindly</b>, verbe de base sans to."
     }
    ],
    "exercises": [
     {
      "type": "mcq",
      "q": "Dans un courriel : « Veuillez trouver ci-joint le planning. »",
      "opts": [
       "Please find attached the schedule.",
       "Please find attach the schedule.",
       "Please found attached the schedule."
      ],
      "correct": 0,
      "why": "Formule figée : <b>Please find attached</b>."
     },
     {
      "type": "fill",
      "text": "Please ___ (note) that the office closes at six.",
      "answers": [
       "note"
      ],
      "why": "<b>Please note that…</b> = veuillez noter que…"
     },
     {
      "type": "fill",
      "text": "Please let me ___ if you need anything else.",
      "answers": [
       "know"
      ],
      "why": "<b>Let me know</b> : verbe de base, sans to."
     },
     {
      "type": "mcq",
      "q": "Complétez : ___ confirm your attendance by Monday.",
      "opts": [
       "Quickly",
       "Hardly",
       "Kindly"
      ],
      "correct": 2,
      "why": "<b>Kindly</b> + verbe de base : formule très polie à l'écrit."
     },
     {
      "type": "speak",
      "en": "Please find attached the agenda for Tuesday's meeting.",
      "fr": "Veuillez trouver ci-joint l'ordre du jour de la réunion de mardi."
     },
     {
      "type": "fill",
      "text": "Please ___ (accept) my apologies for the delay.",
      "answers": [
       "accept"
      ],
      "why": "Impératif poli : <b>accept</b>."
     },
     {
      "type": "mcq",
      "q": "Que dit un employé à un client qui attend ?",
      "opts": [
       "You take a seat while I checking your file.",
       "Please take a seat while I check your file.",
       "Please to take a seat while I check your file."
      ],
      "correct": 1,
      "why": "<b>Please take</b> : verbe de base, sans to ni -ing."
     },
     {
      "type": "fill",
      "text": "Kindly ___ (return) the signed form by Friday.",
      "answers": [
       "return"
      ],
      "why": "<b>Kindly</b> + verbe de base : <b>return</b>."
     },
     {
      "type": "mcq",
      "q": "Que signifie « Please bear with me. » ?",
      "opts": [
       "Ne me dérangez pas.",
       "Veuillez m'excuser, je pars.",
       "Merci de patienter un instant."
      ],
      "correct": 2,
      "why": "<b>Bear with me</b> = soyez patient, un instant."
     },
     {
      "type": "fill",
      "text": "I would be grateful if you could ___ (send) me the details.",
      "answers": [
       "send"
      ],
      "why": "Après <b>could</b> : verbe de base, <b>send</b>."
     },
     {
      "type": "speak",
      "en": "I would be grateful if you could reply by Friday.",
      "fr": "Je vous serais reconnaissant de répondre d'ici vendredi."
     },
     {
      "type": "mcq",
      "q": "Choisissez la phrase la plus professionnelle.",
      "opts": [
       "Send me the file now!",
       "Gimme the file.",
       "File, now.",
       "Could you please send me the file?"
      ],
      "correct": 3,
      "why": "<b>Could you please…?</b> convient à un contexte pro."
     },
     {
      "type": "fill",
      "text": "Please ___ (call) the front desk if you need help.",
      "answers": [
       "call"
      ],
      "why": "Verbe de base après please : <b>call</b>."
     }
    ]
   },
   {
    "id": "imperative-informal-1",
    "reg": "informal",
    "title": "Ordres et conseils entre proches : la base · Informel",
    "why": "Entre amis et en famille, l'impératif est <b>direct et court</b> : le verbe de base seul, comme en français (« Viens ! »).",
    "rule": "1. Impératif = <b>verbe de base</b>, sans sujet : <b>Come here.</b><br>2. Même forme pour « tu » et « vous » : <b>Sit down.</b><br>3. Avec be : <b>Be quiet!</b> (jamais Is / Are).<br>4. On l'adoucit avec le prénom ou <b>mate</b>, <b>love</b> : <b>Grab a seat, mate.</b><br>5. <b>please</b> est facultatif entre proches.",
    "table": {
     "caption": "Forme de base",
     "headers": [
      "Français",
      "Anglais",
      "À retenir"
     ],
     "rows": [
      [
       "Entre !",
       "Come in!",
       "verbe seul"
      ],
      [
       "Assieds-toi.",
       "Sit down.",
       "aucun sujet"
      ],
      [
       "Sois sage !",
       "Be good!",
       "be → Be"
      ],
      [
       "Appelle-moi.",
       "Call me.",
       "même forme pour tous"
      ]
     ]
    },
    "timeline": "● vous parlez ──▶ l'autre agit : Hurry up!",
    "examples": [
     {
      "en": "Come in and sit down.",
      "fr": "Entre et assieds-toi."
     },
     {
      "en": "Hurry up, we're late!",
      "fr": "Dépêche-toi, on est en retard !"
     },
     {
      "en": "Be quiet, the baby's asleep.",
      "fr": "Chut, le bébé dort."
     },
     {
      "en": "Grab a biscuit, they're lovely.",
      "fr": "Prends un biscuit, ils sont délicieux."
     },
     {
      "en": "Call me tonight.",
      "fr": "Appelle-moi ce soir."
     },
     {
      "en": "Pass the salt, Mum.",
      "fr": "Passe-moi le sel, maman."
     }
    ],
    "pitfalls": [
     {
      "wrong": "You come here!",
      "right": "Come here!",
      "why": "Pas de sujet à l'impératif (« you » ajoute de l'agacement)."
     },
     {
      "wrong": "Are quiet!",
      "right": "Be quiet!",
      "why": "L'impératif de be est <b>Be</b>."
     },
     {
      "wrong": "To come here!",
      "right": "Come here!",
      "why": "Pas de <b>to</b> : verbe de base seul."
     }
    ],
    "exercises": [
     {
      "type": "mcq",
      "q": "« Viens ici ! » =",
      "opts": [
       "Come here!",
       "To come here!",
       "You are come here!"
      ],
      "correct": 0,
      "why": "Verbe de base seul : <b>Come here!</b>"
     },
     {
      "type": "fill",
      "text": "___ (sit) down, mate.",
      "answers": [
       "Sit",
       "sit"
      ],
      "why": "Impératif : <b>sit</b>."
     },
     {
      "type": "mcq",
      "q": "« Sois sage ! » =",
      "opts": [
       "Is good!",
       "Be good!",
       "Are good!"
      ],
      "correct": 1,
      "why": "Impératif de be : <b>Be</b>."
     },
     {
      "type": "fill",
      "text": "Hurry ___ and finish your breakfast!",
      "answers": [
       "up"
      ],
      "why": "<b>Hurry up</b> = dépêche-toi."
     },
     {
      "type": "speak",
      "en": "Come in and have a cup of tea.",
      "fr": "Entre et prends une tasse de thé."
     },
     {
      "type": "fill",
      "text": "___ (call) me tonight, okay?",
      "answers": [
       "Call",
       "call"
      ],
      "why": "Impératif : <b>call</b>."
     },
     {
      "type": "mcq",
      "q": "Quelle phrase est correcte ?",
      "opts": [
       "Waits here.",
       "To wait here.",
       "Wait here.",
       "Are wait here."
      ],
      "correct": 2,
      "why": "Verbe de base : <b>Wait here.</b>"
     },
     {
      "type": "fill",
      "text": "___ (be) careful with that glass!",
      "answers": [
       "Be",
       "be"
      ],
      "why": "Avec be, l'impératif est <b>Be</b>."
     },
     {
      "type": "mcq",
      "q": "Pour dire à un ami « Donne-moi ton numéro » :",
      "opts": [
       "You give me your number.",
       "To give me your number.",
       "Giving me your number.",
       "Give me your number."
      ],
      "correct": 3,
      "why": "Verbe de base, sans sujet : <b>Give</b>."
     },
     {
      "type": "fill",
      "text": "___ (open) the window, it's boiling in here!",
      "answers": [
       "Open",
       "open"
      ],
      "why": "Impératif : <b>open</b>."
     },
     {
      "type": "speak",
      "en": "Hurry up and put your shoes on.",
      "fr": "Dépêche-toi et mets tes chaussures."
     },
     {
      "type": "mcq",
      "q": "Lequel est l'impératif de be ?",
      "opts": [
       "Be quiet!",
       "Is quiet!",
       "Are quiet!",
       "Being quiet!"
      ],
      "correct": 0,
      "why": "L'impératif de be = <b>Be</b>."
     },
     {
      "type": "fill",
      "text": "___ (look) at this photo of my cat!",
      "answers": [
       "Look",
       "look"
      ],
      "why": "Impératif : <b>look</b>."
     }
    ]
   },
   {
    "id": "imperative-informal-2",
    "reg": "informal",
    "title": "Don't : rassurer, avertir, refuser · Informel",
    "why": "Entre proches, <b>Don't…</b> sert à rassurer (Don't worry), avertir (Don't touch!) ou refuser gentiment (Don't be daft).",
    "rule": "1. Négatif = <b>Don't + verbe de base</b> : <b>Don't shout.</b><br>2. Avec be : <b>Don't be late.</b><br>3. Jamais <b>Not + verbe</b>, ni <b>Don't + verbe avec -s</b>.<br>4. Expressions : <b>Don't worry</b>, <b>Don't mention it</b>, <b>Never mind</b>, <b>Don't be daft</b>.",
    "examples": [
     {
      "en": "Don't worry, it's only a scratch.",
      "fr": "Ne t'inquiète pas, ce n'est qu'une égratignure."
     },
     {
      "en": "Don't forget your keys, love.",
      "fr": "N'oublie pas tes clés, ma chérie."
     },
     {
      "en": "Don't be so shy, come and say hello.",
      "fr": "Ne sois pas si timide, viens dire bonjour."
     },
     {
      "en": "Don't touch that, it's hot!",
      "fr": "Ne touche pas ça, c'est chaud !"
     },
     {
      "en": "Don't mention it, mate.",
      "fr": "Il n'y a pas de quoi, mon pote."
     },
     {
      "en": "Never mind the mess, come in.",
      "fr": "Peu importe le désordre, entre."
     }
    ],
    "pitfalls": [
     {
      "wrong": "Not worry!",
      "right": "Don't worry!",
      "why": "On forme le négatif avec <b>Don't</b>."
     },
     {
      "wrong": "Don't to be late.",
      "right": "Don't be late.",
      "why": "Pas de <b>to</b> après Don't."
     },
     {
      "wrong": "Don't worries.",
      "right": "Don't worry.",
      "why": "Après <b>Don't</b>, le verbe ne prend jamais de -s."
     }
    ],
    "exercises": [
     {
      "type": "mcq",
      "q": "« Ne t'inquiète pas. » =",
      "opts": [
       "Not worry.",
       "Don't worry.",
       "Don't worries."
      ],
      "correct": 1,
      "why": "<b>Don't + verbe de base</b>."
     },
     {
      "type": "fill",
      "text": "___ forget your umbrella, it's raining.",
      "answers": [
       "Don't",
       "Do not"
      ],
      "why": "Négatif : <b>Don't</b>."
     },
     {
      "type": "fill",
      "text": "Don't ___ (be) silly, it's only a joke.",
      "answers": [
       "be"
      ],
      "why": "Avec be : <b>Don't be</b>."
     },
     {
      "type": "mcq",
      "q": "Quelle phrase est correcte ?",
      "opts": [
       "Don't to shout!",
       "Not shout!",
       "Don't shout!",
       "No shouting you!"
      ],
      "correct": 2,
      "why": "<b>Don't shout</b> : Don't + verbe de base."
     },
     {
      "type": "speak",
      "en": "Don't worry, we've got plenty of time.",
      "fr": "Ne t'inquiète pas, on a largement le temps."
     },
     {
      "type": "fill",
      "text": "Don't ___ (eat) all the crisps, mate!",
      "answers": [
       "eat"
      ],
      "why": "Verbe de base : <b>eat</b>."
     },
     {
      "type": "mcq",
      "q": "Réponse à « Thanks for the lift! » :",
      "opts": [
       "Not mention it.",
       "Don't mention it.",
       "Don't to mention it."
      ],
      "correct": 1,
      "why": "<b>Don't mention it</b> = de rien."
     },
     {
      "type": "fill",
      "text": "Don't ___ (go) without me!",
      "answers": [
       "go"
      ],
      "why": "Verbe de base : <b>go</b>."
     },
     {
      "type": "mcq",
      "q": "Que signifie « Never mind! » ?",
      "opts": [
       "Jamais d'esprit.",
       "Ne pense pas à moi.",
       "Peu importe, laisse tomber."
      ],
      "correct": 2,
      "why": "<b>Never mind</b> = ce n'est pas grave."
     },
     {
      "type": "fill",
      "text": "Don't ___ (interrupt) your brother when he's talking.",
      "answers": [
       "interrupt"
      ],
      "why": "Verbe de base : <b>interrupt</b>."
     },
     {
      "type": "speak",
      "en": "Don't be daft, it's not your fault.",
      "fr": "Ne sois pas bête, ce n'est pas ta faute."
     },
     {
      "type": "mcq",
      "q": "« Ne cours pas ! » dit à un enfant :",
      "opts": [
       "No run!",
       "Not to run!",
       "Don't running!",
       "Don't run!"
      ],
      "correct": 3,
      "why": "<b>Don't run</b> : verbe de base, sans -ing."
     },
     {
      "type": "fill",
      "text": "Don't ___ (lose) my phone charger!",
      "answers": [
       "lose"
      ],
      "why": "Verbe de base : <b>lose</b>."
     }
    ]
   },
   {
    "id": "imperative-informal-3",
    "reg": "informal",
    "title": "Let's, Shall we, invitations · Informel",
    "why": "Pour proposer quelque chose <b>ensemble</b> ou inviter un ami, l'anglais utilise <b>Let's</b>, <b>Shall we</b> et <b>Why don't we</b>.",
    "rule": "1. <b>Let's + verbe de base</b> = on + verbe : <b>Let's go.</b><br>2. Négatif : <b>Let's not + verbe de base</b>.<br>3. Question : <b>Shall we + verbe de base… ?</b><br>4. <b>Why don't we + verbe de base… ?</b> = et si on… ?<br>5. Invitations : <b>Come round for tea.</b> / <b>Fancy a pint?</b>",
    "examples": [
     {
      "en": "Let's grab a coffee.",
      "fr": "Allons prendre un café."
     },
     {
      "en": "Let's not argue about it.",
      "fr": "Ne nous disputons pas pour ça."
     },
     {
      "en": "Shall we get a takeaway?",
      "fr": "On prend des plats à emporter ?"
     },
     {
      "en": "Why don't we go to the cinema?",
      "fr": "Et si on allait au cinéma ?"
     },
     {
      "en": "Come round for dinner on Saturday.",
      "fr": "Viens dîner à la maison samedi."
     },
     {
      "en": "Fancy a pint after work?",
      "fr": "Ça te dit une bière après le travail ?"
     }
    ],
    "pitfalls": [
     {
      "wrong": "Let's to go.",
      "right": "Let's go.",
      "why": "Après <b>Let's</b>, verbe de base sans to."
     },
     {
      "wrong": "Don't let's go.",
      "right": "Let's not go.",
      "why": "Le négatif est <b>Let's not</b>."
     },
     {
      "wrong": "Shall we to go?",
      "right": "Shall we go?",
      "why": "Après <b>Shall we</b>, pas de to."
     }
    ],
    "exercises": [
     {
      "type": "mcq",
      "q": "« Allons prendre un café ! » =",
      "opts": [
       "Let's go for a coffee!",
       "Let's to go for a coffee!",
       "We let's go for a coffee!"
      ],
      "correct": 0,
      "why": "<b>Let's + verbe de base</b>."
     },
     {
      "type": "fill",
      "text": "Let's ___ (watch) a film tonight.",
      "answers": [
       "watch"
      ],
      "why": "Verbe de base : <b>watch</b>."
     },
     {
      "type": "fill",
      "text": "Let's ___ argue about it again.",
      "answers": [
       "not"
      ],
      "why": "Négatif : <b>Let's not</b>."
     },
     {
      "type": "mcq",
      "q": "« Ne parlons plus de ça. » =",
      "opts": [
       "Don't let's talk about it.",
       "Let's not talk about it.",
       "Let's no talk about it.",
       "Not let's talk about it."
      ],
      "correct": 1,
      "why": "Négatif : <b>Let's not</b>."
     },
     {
      "type": "speak",
      "en": "Let's grab a pizza and watch something.",
      "fr": "Prenons une pizza et regardons quelque chose."
     },
     {
      "type": "fill",
      "text": "Shall ___ get a takeaway?",
      "answers": [
       "we"
      ],
      "why": "Proposition à plusieurs : <b>Shall we</b>."
     },
     {
      "type": "mcq",
      "q": "Quelle phrase est une invitation ?",
      "opts": [
       "Don't come round on Sunday.",
       "Coming round on Sunday.",
       "Come round for tea on Sunday."
      ],
      "correct": 2,
      "why": "<b>Come round for…</b> = viens chez moi pour…"
     },
     {
      "type": "fill",
      "text": "Why don't we ___ (try) that new Thai place?",
      "answers": [
       "try"
      ],
      "why": "Verbe de base : <b>try</b>."
     },
     {
      "type": "mcq",
      "q": "Que veut dire « Fancy a pint? » ?",
      "opts": [
       "Tu es chic ce soir ?",
       "Tu paies la bière ?",
       "Tu n'as pas soif ?",
       "Ça te dit d'aller boire une bière ?"
      ],
      "correct": 3,
      "why": "<b>Fancy a pint?</b> = ça te dit une bière ?"
     },
     {
      "type": "fill",
      "text": "Let's ___ (meet) outside the cinema at seven.",
      "answers": [
       "meet"
      ],
      "why": "Verbe de base : <b>meet</b>."
     },
     {
      "type": "speak",
      "en": "Why don't we go to the beach on Sunday?",
      "fr": "Et si on allait à la plage dimanche ?"
     },
     {
      "type": "mcq",
      "q": "Pour refuser gentiment une idée :",
      "opts": [
       "Let's no.",
       "Let's not, I'm tired.",
       "Not let's, I'm tired."
      ],
      "correct": 1,
      "why": "<b>Let's not</b> refuse la proposition."
     },
     {
      "type": "fill",
      "text": "Come ___ for dinner on Saturday, mate.",
      "answers": [
       "round",
       "over"
      ],
      "why": "<b>Come round</b> (ou <b>over</b>) = viens chez moi."
     }
    ]
   },
   {
    "id": "imperative-informal-4",
    "reg": "informal",
    "title": "Expressions du quotidien : Hang on, Cheer up… · Informel",
    "why": "À l'oral, l'impératif forme des <b>expressions toutes faites</b> qu'on entend partout entre amis : Hang on, Come on, Cheer up, Take care.",
    "rule": "1. <b>Hang on</b> = attends. <b>Come on</b> = allez.<br>2. <b>Cheer up</b> = courage, souris. <b>Take care</b> = prends soin de toi.<br>3. <b>Give me a ring / a shout</b> = appelle-moi / fais-moi signe.<br>4. <b>Mind your head</b> / <b>Watch out</b> = attention.<br>5. Piège : <b>Wait for me</b> (avec for) et <b>Call me</b> (sans to).",
    "examples": [
     {
      "en": "Hang on a minute, I need my coat.",
      "fr": "Attends une minute, il me faut mon manteau."
     },
     {
      "en": "Come on, don't be shy!",
      "fr": "Allez, ne sois pas timide !"
     },
     {
      "en": "Cheer up, it's Friday!",
      "fr": "Courage, c'est vendredi !"
     },
     {
      "en": "Give me a shout if you need a hand.",
      "fr": "Fais-moi signe si tu as besoin d'un coup de main."
     },
     {
      "en": "Mind your head on that door.",
      "fr": "Attention à ta tête avec cette porte."
     },
     {
      "en": "Take care and keep in touch.",
      "fr": "Prends soin de toi et donne des nouvelles."
     }
    ],
    "pitfalls": [
     {
      "wrong": "Make attention!",
      "right": "Watch out!",
      "why": "« Faire attention » se dit <b>Watch out</b> ou <b>Be careful</b>."
     },
     {
      "wrong": "Wait me!",
      "right": "Wait for me!",
      "why": "On attend quelqu'un avec <b>wait for</b>."
     },
     {
      "wrong": "Call to me.",
      "right": "Call me.",
      "why": "<b>Call</b> prend directement son objet, sans to."
     }
    ],
    "exercises": [
     {
      "type": "mcq",
      "q": "« Attends une minute ! » (familier)",
      "opts": [
       "Hang on a minute!",
       "Hang a minute on!",
       "Wait me a minute!"
      ],
      "correct": 0,
      "why": "<b>Hang on</b> = attends."
     },
     {
      "type": "fill",
      "text": "___ (cheer) up, mate, it's the weekend tomorrow!",
      "answers": [
       "Cheer",
       "cheer"
      ],
      "why": "<b>Cheer up</b> = courage."
     },
     {
      "type": "fill",
      "text": "Wait ___ me, my shoes are in the car!",
      "answers": [
       "for"
      ],
      "why": "On dit <b>wait for</b> quelqu'un."
     },
     {
      "type": "mcq",
      "q": "Pour dire « appelle-moi » :",
      "opts": [
       "Call to me.",
       "Give me a ring.",
       "Phone to me."
      ],
      "correct": 1,
      "why": "<b>Give me a ring</b> ou <b>Call me</b>, sans to."
     },
     {
      "type": "speak",
      "en": "Wanna grab a coffee after work, mate?",
      "fr": "Ça te dit de prendre un café après le travail ?"
     },
     {
      "type": "fill",
      "text": "Come ___, it's your turn!",
      "answers": [
       "on"
      ],
      "why": "<b>Come on</b> = allez."
     },
     {
      "type": "mcq",
      "q": "Un ami est déprimé. Que lui dire ?",
      "opts": [
       "Mind the gap!",
       "Hang on!",
       "Cheer up!"
      ],
      "correct": 2,
      "why": "<b>Cheer up</b> = courage, souris."
     },
     {
      "type": "fill",
      "text": "Mind your ___ on the low door.",
      "answers": [
       "head"
      ],
      "why": "<b>Mind your head</b> = attention à ta tête."
     },
     {
      "type": "mcq",
      "q": "« Attention ! » à un ami qui va traverser devant une voiture :",
      "opts": [
       "Make attention!",
       "Do attention!",
       "Be attention!",
       "Watch out!"
      ],
      "correct": 3,
      "why": "<b>Watch out</b> ou <b>Look out</b> = attention."
     },
     {
      "type": "fill",
      "text": "Give me a ___ when you get home.",
      "answers": [
       "ring",
       "call",
       "buzz",
       "shout"
      ],
      "why": "<b>Give me a ring / call</b> = appelle-moi."
     },
     {
      "type": "speak",
      "en": "Cheer up, it's nearly the weekend!",
      "fr": "Courage, c'est bientôt le week-end !"
     },
     {
      "type": "mcq",
      "q": "Que veut dire « Can't be bothered. » ?",
      "opts": [
       "Je n'ai pas le courage, la flemme.",
       "Je ne peux pas être dérangé.",
       "Je ne suis pas inquiet."
      ],
      "correct": 0,
      "why": "<b>Can't be bothered</b> = j'ai la flemme."
     },
     {
      "type": "fill",
      "text": "___ (grab) your coat and ___ (follow) me, mate!",
      "answers": [
       [
        "Grab",
        "grab"
       ],
       [
        "follow"
       ]
      ],
      "why": "Deux impératifs : <b>grab</b>, <b>follow</b>."
     }
    ]
   }
  ]
 }
], decoder: null, texts: [] };
