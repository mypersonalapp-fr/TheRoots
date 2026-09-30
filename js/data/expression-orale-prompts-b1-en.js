// The Roots — Expression orale (Anglais, niveau B1).
//
// Même mécanique qu'en A1/A2 (voir expression-orale-prompts-a2-en.js) :
// l'appli lit le texte à voix haute, puis l'apprenant répond à l'oral avec
// son micro ; la checklist expectedPoints détecte les idées attendues.
//
// Contenu : les 8 sujets oraux B1 fournis par Ashley (« 8 Oral & Writing
// Exercises — Level B1 »). Ses « Audio Prompt » sont des questions
// d'interlocuteur : ils deviennent le callText, avec un `from` plausible.
// Les sujets sont rangés par palier (B1.1 → B1.11).
//
// Champs ajoutés par rapport à A2 :
// - palier : palier B1 le plus proche du thème (voir programme-b1-en.js) ;
// - focus  : ce qui est travaillé (repris de l'« Expected Level Focus » d'Ashley) ;
// - fr     : traduction française du callText (bouton « Traduire la consigne ») ;
// - task   : la consigne en anglais (ce que l'apprenant doit faire) ;
// - model  : une réponse type B1 (60-110 mots), montrée APRÈS la réponse ;
// - rubric : barème sur 10 points, pour la correction détaillée par IA.

export const EXPRESSION_ORALE_PROMPTS_B1_EN = [
  // ---- B1.1 My Identity Today ----
  {
    id: 1,
    palier: "B1.1",
    from: "Emma",
    callText: "Hi! Can you describe your typical daily routine during the week? Tell me how you manage your time between work, relaxation, and other activities.",
    fr: "Salut ! Tu peux me décrire ta routine quotidienne typique pendant la semaine ? Dis-moi comment tu gères ton temps entre le travail, la détente et tes autres activités.",
    focus: "Présent simple, adverbes de fréquence (usually, always, sometimes…) et connecteurs de temps (first, then, after that…).",
    task: "Describe a typical weekday from morning to evening and explain how you balance work, rest and other activities.",
    expectedPoints: [
      { label: "Décrire sa routine au présent simple", keywords: ["get up", "wake up", "i start", "i go to", "i finish", "i leave", "i come home", "i work", "i take", "i cook"] },
      { label: "Utiliser des adverbes de fréquence", keywords: ["usually", "always", "often", "sometimes", "never", "rarely", "every day", "generally"] },
      { label: "Enchaîner avec des connecteurs de temps", keywords: ["first", "then", "after that", "afterwards", "in the morning", "in the evening", "at lunchtime", "finally", "before", "while"] },
      { label: "Expliquer comment tu gères ton temps / te détends", keywords: ["relax", "free time", "manage", "organise", "organize", "balance", "rest", "hobby", "sport", "family"] },
    ],
    model: "On weekdays, I usually get up at 6:30. First, I have a quick breakfast and take my son to school, then I take the train to work. I generally start at nine and finish around six. At lunchtime, I always try to go for a short walk, because it helps me relax. In the evening, I cook dinner and help with homework. I rarely watch TV during the week; I prefer reading for half an hour before bed. To manage my time, I plan my week every Sunday.",
    rubric: [
      { criterion: "Task: a complete day (morning → evening) with work, rest and other activities", points: 3 },
      { criterion: "Present simple used correctly (third person, do/does)", points: 2 },
      { criterion: "Adverbs of frequency correctly placed (before the main verb, after be)", points: 2 },
      { criterion: "Time connectors that make the description easy to follow", points: 2 },
      { criterion: "Fluency and pronunciation (clear, natural pace)", points: 1 },
    ],
  },

  // ---- B1.2 Tell Me What Happened ----
  {
    id: 2,
    palier: "B1.2",
    from: "Nathan",
    callText: "Hello! I heard about your amazing trip last year. Could you tell me about your best memory and what happened during that specific day?",
    fr: "Bonjour ! J'ai entendu parler de ton super voyage l'année dernière. Tu pourrais me raconter ton meilleur souvenir et ce qui s'est passé ce jour-là ?",
    focus: "Prétérit (Past Simple) et passé progressif (Past Continuous) pour raconter un souvenir.",
    task: "Tell the story of your best day during a trip: set the scene, explain what happened and how you felt.",
    expectedPoints: [
      { label: "Situer le voyage (où, quand, avec qui)", keywords: ["last year", "last summer", "we went", "i went", "travelled", "traveled", "visited", "trip to", "with my"] },
      { label: "Raconter les événements au prétérit", keywords: ["went", "saw", "met", "took", "decided", "arrived", "found", "happened", "started", "told"] },
      { label: "Décrire le décor au passé progressif", keywords: ["was shining", "were walking", "was raining", "was sitting", "were having", "was waiting", "was playing", "while"] },
      { label: "Dire pourquoi c'est ton meilleur souvenir", keywords: ["best", "unforgettable", "amazing", "felt", "i'll never forget", "i will never forget", "because", "magical", "wonderful"] },
    ],
    model: "Last summer, I travelled to Portugal with two friends. My best memory is our day in Sintra. We were walking up to the castle when it suddenly started to rain. While we were looking for shelter, an old man invited us into his small café. He made us hot chocolate and told us stories about the town. When the rain stopped, the view over the hills was incredible. I'll never forget that day, because a small problem turned into the most beautiful moment of the trip.",
    rubric: [
      { criterion: "Task: a clear story with setting, main event and personal feeling", points: 3 },
      { criterion: "Past simple forms correct (regular and irregular verbs)", points: 2 },
      { criterion: "Past continuous used for background / interrupted action (was -ing when…)", points: 2 },
      { criterion: "Vocabulary of travel and feelings, varied and precise", points: 2 },
      { criterion: "Fluency: the story is easy to follow", points: 1 },
    ],
  },

  // ---- B1.4 Everyday English ----
  {
    id: 3,
    palier: "B1.4",
    from: "A lost tourist",
    callText: "Excuse me, I am completely lost in the city center. I need to get to the main train station quickly, but my phone GPS is broken. Can you guide me step by step?",
    fr: "Excusez-moi, je suis complètement perdu(e) dans le centre-ville. Je dois aller à la gare principale rapidement, mais le GPS de mon téléphone ne marche plus. Vous pouvez me guider étape par étape ?",
    focus: "Impératif, prépositions de lieu et de direction, formules de politesse.",
    task: "Politely give clear, step-by-step directions to the main train station.",
    expectedPoints: [
      { label: "Réagir poliment", keywords: ["of course", "sure", "no problem", "don't worry", "let me help", "happy to help", "no worries"] },
      { label: "Donner des directions à l'impératif", keywords: ["go straight", "turn left", "turn right", "take the", "cross", "walk", "follow", "keep going"] },
      { label: "Utiliser des prépositions de lieu", keywords: ["next to", "opposite", "in front of", "at the end of", "on your left", "on your right", "behind", "past the", "along", "between"] },
      { label: "Donner un repère ou une durée", keywords: ["minutes", "you'll see", "you will see", "can't miss it", "traffic lights", "roundabout", "corner", "bridge", "square"] },
    ],
    model: "Of course, don't worry, it's not far. First, go straight along this street until you reach the traffic lights. Then turn left and walk past the big supermarket. At the end of that street, you'll see a small square with a fountain. Cross the square and take the second street on your right. The station is at the end of that street, opposite a hotel. It takes about ten minutes on foot. If you're in a hurry, you can also take bus 12 from the stop in front of the bank.",
    rubric: [
      { criterion: "Task: directions are complete and would really get the person to the station", points: 3 },
      { criterion: "Imperatives used correctly (go, turn, take, cross)", points: 2 },
      { criterion: "Prepositions of place and movement accurate", points: 2 },
      { criterion: "Polite, reassuring tone (of course, don't worry…)", points: 2 },
      { criterion: "Clarity and pronunciation", points: 1 },
    ],
  },

  // ---- B1.5 Working in English ----
  {
    id: 4,
    palier: "B1.5",
    from: "Mr. Davies, partner company",
    callText: "Good morning. I am calling from our partner company regarding the delay on our latest contract. Can you explain the situation professionally and reassure me?",
    fr: "Bonjour. Je vous appelle de la part de notre société partenaire au sujet du retard sur notre dernier contrat. Pouvez-vous m'expliquer la situation de manière professionnelle et me rassurer ?",
    focus: "Registre formel, formulations polies et vocabulaire professionnel.",
    task: "Answer formally: apologise, explain the reason for the delay, give a new date and reassure the partner.",
    expectedPoints: [
      { label: "Saluer et s'excuser formellement", keywords: ["good morning", "thank you for calling", "i apologise", "i apologize", "we apologise", "sorry for", "i understand your concern"] },
      { label: "Expliquer la cause du retard", keywords: ["due to", "because of", "the reason", "caused by", "unfortunately", "we had", "issue", "problem"] },
      { label: "Donner un nouveau délai", keywords: ["by", "next week", "deadline", "new date", "will be ready", "will send", "within", "friday", "monday"] },
      { label: "Rassurer / s'engager", keywords: ["rest assured", "i assure you", "i can assure", "personally", "keep you informed", "keep you updated", "priority", "don't hesitate"] },
    ],
    model: "Good morning, Mr. Davies, and thank you for calling. First of all, I would like to apologise for the delay. It is due to a problem with one of our suppliers, who sent us the documents late. However, the situation is now under control. We have already completed most of the work, and the signed contract will be sent to you by Friday at the latest. I can assure you that this project is our priority, and I will personally keep you informed of any progress. Please don't hesitate to contact me directly.",
    rubric: [
      { criterion: "Task: apology + reason + new deadline + reassurance", points: 3 },
      { criterion: "Formal register kept throughout (no casual expressions)", points: 2 },
      { criterion: "Business vocabulary (deadline, contract, supplier, priority…)", points: 2 },
      { criterion: "Grammar accuracy (future with will, present perfect, due to)", points: 2 },
      { criterion: "Calm, professional delivery", points: 1 },
    ],
  },

  // ---- B1.6 Travel Without Panic (future forms) ----
  {
    id: 5,
    palier: "B1.6",
    from: "Karim",
    callText: "What are your main professional or personal projects for the next six months? How are you planning to organize everything?",
    fr: "Quels sont tes principaux projets professionnels ou personnels pour les six prochains mois ? Comment comptes-tu tout organiser ?",
    focus: "Les formes du futur : going to, will, et présent progressif pour un futur planifié.",
    task: "Present two or three projects for the next six months and explain how you are going to organise them.",
    expectedPoints: [
      { label: "Annoncer des intentions avec going to", keywords: ["going to", "gonna", "i plan to", "i intend to", "my plan is"] },
      { label: "Parler d'un futur planifié (présent progressif)", keywords: ["i'm starting", "i am starting", "i'm moving", "i'm taking", "i'm meeting", "i'm travelling", "next month", "in january"] },
      { label: "Faire une prévision ou une promesse avec will", keywords: ["will", "i'll", "probably", "i think i'll", "won't"] },
      { label: "Expliquer l'organisation", keywords: ["organise", "organize", "schedule", "step by step", "every week", "first", "then", "priority", "calendar", "time"] },
    ],
    model: "In the next six months, I have two main projects. Professionally, I'm going to prepare for a certification in my field. I'm starting an online course next month, and the exam is in March. On a personal level, I'm going to spend more time on sport, because I want to feel fitter. To organise everything, I'll use a weekly schedule: two evenings for studying, two sessions at the gym, and the weekend for my family. I think it will be tiring at times, but I'm sure it will be worth it.",
    rubric: [
      { criterion: "Task: at least two projects + how they will be organised", points: 3 },
      { criterion: "Correct choice between going to / will / present continuous", points: 3 },
      { criterion: "Time expressions (next month, by March, in six months)", points: 2 },
      { criterion: "Fluency and pronunciation", points: 2 },
    ],
  },

  // ---- B1.7 Say What You Think ----
  {
    id: 6,
    palier: "B1.7",
    from: "Sophie",
    callText: "Some people say that working from home is much better than working in a traditional office. What is your opinion? Give two clear arguments.",
    fr: "Certaines personnes disent que le télétravail est bien mieux que le travail dans un bureau traditionnel. Quel est ton avis ? Donne deux arguments clairs.",
    focus: "Exprimer une opinion (I think, in my opinion) et opposer des idées avec des connecteurs de contraste (however, whereas).",
    task: "Give your opinion on working from home vs working in an office, with two clear arguments and one contrast.",
    expectedPoints: [
      { label: "Donner clairement son opinion", keywords: ["i think", "in my opinion", "i believe", "personally", "from my point of view", "as far as i'm concerned", "i feel that"] },
      { label: "Présenter deux arguments structurés", keywords: ["first", "firstly", "secondly", "another reason", "moreover", "what's more", "because", "for example"] },
      { label: "Nuancer avec un connecteur de contraste", keywords: ["however", "whereas", "but", "on the other hand", "although", "while"] },
      { label: "Conclure", keywords: ["to sum up", "in conclusion", "overall", "that's why", "for these reasons", "the best solution"] },
    ],
    model: "In my opinion, working from home is better for most people, but not in every situation. Firstly, you save a lot of time, because you don't have to commute. For example, I save almost two hours a day when I work from home. Secondly, it's easier to concentrate without constant interruptions. However, the office is important for team spirit, whereas at home you can feel isolated. That's why I think a mix of both, two or three days at home and the rest at the office, is the best solution.",
    rubric: [
      { criterion: "Task: a clear opinion + two developed arguments", points: 3 },
      { criterion: "Opinion expressions used naturally (no 'I am agree')", points: 2 },
      { criterion: "Contrast connectors used correctly (however, whereas)", points: 2 },
      { criterion: "Example or personal experience to support an argument", points: 2 },
      { criterion: "Fluency and clear conclusion", points: 1 },
    ],
  },

  // ---- B1.10 Problem Solving ----
  {
    id: 7,
    palier: "B1.10",
    from: "Laura, your manager",
    callText: "We have a slight issue: a client just called to say their delivery is missing. What steps should we take right now to fix this?",
    fr: "On a un petit problème : un client vient d'appeler pour dire que sa livraison n'est pas arrivée. Quelles mesures devrions-nous prendre tout de suite pour régler ça ?",
    focus: "Modaux de conseil et d'obligation (should, must, have to).",
    task: "Propose clear steps to solve the missing delivery problem, using should, must and have to.",
    expectedPoints: [
      { label: "Conseiller avec should", keywords: ["should", "we should", "i think we should", "shouldn't", "it would be good to"] },
      { label: "Exprimer une obligation avec must / have to", keywords: ["must", "have to", "has to", "need to", "we've got to", "it's essential"] },
      { label: "Donner des étapes concrètes", keywords: ["call", "check", "contact", "track", "tracking number", "carrier", "send", "replace", "refund"] },
      { label: "Ordonner les étapes", keywords: ["first", "then", "after that", "next", "finally", "right now", "immediately", "as soon as"] },
    ],
    model: "OK, first, we should check the tracking number to see where the parcel is. Then we have to contact the carrier immediately and ask them what happened. At the same time, someone must call the client back to apologise and tell them we're dealing with it. If the parcel is really lost, we should send a new delivery by express today, at no extra cost. Finally, we have to write a short report, so that we can avoid the same problem in the future.",
    rubric: [
      { criterion: "Task: realistic, ordered steps that solve the problem", points: 3 },
      { criterion: "Correct use of should (advice) vs must / have to (obligation)", points: 3 },
      { criterion: "Workplace vocabulary (carrier, tracking, refund, report…)", points: 2 },
      { criterion: "Sequencing connectors and fluency", points: 2 },
    ],
  },

  // ---- B1.11 Stories, Movies & Culture ----
  {
    id: 8,
    palier: "B1.11",
    from: "Tom",
    callText: "Imagine you just watched an inspiring movie or documentary based on a true story. Summarize it briefly and explain why it touched you.",
    fr: "Imagine que tu viens de regarder un film ou un documentaire inspirant tiré d'une histoire vraie. Résume-le brièvement et explique pourquoi il t'a touché(e).",
    focus: "Structure narrative, adjectifs pour exprimer ses émotions, discours fluide.",
    task: "Briefly summarise a film or documentary based on a true story and explain how it made you feel.",
    expectedPoints: [
      { label: "Présenter le film (titre, sujet)", keywords: ["it's about", "it is about", "tells the story", "based on a true story", "documentary", "film", "movie", "true story"] },
      { label: "Résumer l'histoire", keywords: ["at the beginning", "then", "in the end", "finally", "manages to", "decides", "has to", "tries to"] },
      { label: "Exprimer ses émotions avec précision", keywords: ["moving", "inspiring", "touching", "moved", "impressed", "amazed", "heartbreaking", "powerful", "emotional"] },
      { label: "Expliquer pourquoi il t'a touché(e)", keywords: ["because", "it reminded me", "it made me", "it shows", "i realised", "i realized", "lesson", "message"] },
    ],
    model: "I recently watched The Pursuit of Happyness, which is based on a true story. It tells the story of Chris Gardner, a father who loses his home and has to sleep in stations with his young son. At the same time, he does an unpaid internship to become a stockbroker. In the end, he gets the job and completely changes his life. I found it incredibly moving, especially the scenes with his son. It touched me because it shows that determination and love can help you through the hardest moments.",
    rubric: [
      { criterion: "Task: short summary + personal reaction with reasons", points: 3 },
      { criterion: "Narrative structure (beginning → problem → ending)", points: 2 },
      { criterion: "Precise feeling adjectives (moving, inspiring… not only good/sad)", points: 2 },
      { criterion: "Grammar accuracy (present for summaries, past for own experience)", points: 2 },
      { criterion: "Fluency and natural pace", points: 1 },
    ],
  },
];
