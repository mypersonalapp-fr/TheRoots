// The Roots — Expression écrite (Anglais, niveau B1).
//
// Même mécanique qu'en A1/A2 (voir expression-ecrite-prompts-a2-en.js) : un
// message reçu (ou une consigne), auquel l'apprenant répond par écrit,
// corrigé avec LanguageTool + une checklist de points attendus.
//
// Contenu : les 8 sujets écrits B1 fournis par Ashley (« 8 Oral & Writing
// Exercises — Level B1 »), rangés par palier (B1.4 → B1.12). Quand Ashley
// donne une simple consigne (« Prompt ») et non un message reçu, le message
// est présenté comme venant d'un expéditeur plausible (manager, RH…).
//
// Champs ajoutés par rapport à A2 :
// - palier : palier B1 le plus proche du thème (voir programme-b1-en.js) ;
// - focus  : ce qui est travaillé (repris de l'« Expected Task » d'Ashley) ;
// - fr     : traduction française du message + de la consigne ;
// - task   : la consigne en anglais ;
// - model  : une réponse type B1 (60-110 mots), montrée APRÈS la réponse ;
// - rubric : barème sur 10 points, pour la correction détaillée par IA.

export const EXPRESSION_ECRITE_PROMPTS_B1_EN = [
  // ---- B1.4 Everyday English (polite requests) ----
  {
    id: 1,
    palier: "B1.4",
    from: "ProTech Solutions",
    subject: "Our new catalog",
    message: "Dear Customer, please review our new catalog and let us know if you require any specific product training for your team. — ProTech Solutions",
    task: "Write a formal reply requesting specific details about training dates and pricing.",
    fr: "Message : « Cher client, nous vous invitons à consulter notre nouveau catalogue et à nous indiquer si votre équipe a besoin d'une formation spécifique sur nos produits. — ProTech Solutions » — Consigne : écris une réponse formelle pour demander des précisions sur les dates de formation et les tarifs.",
    focus: "Email professionnel formel : demandes polies (Could you…?, Would it be possible…?, I would like to…).",
    expectedPoints: [
      { label: "Ouvrir et remercier formellement", keywords: ["dear", "thank you for", "thank you for sending", "i have reviewed", "we have reviewed", "i am writing"] },
      { label: "Demander les dates de formation", keywords: ["dates", "date", "when", "available", "schedule", "session", "sessions"] },
      { label: "Demander les tarifs", keywords: ["price", "prices", "pricing", "cost", "costs", "fee", "fees", "quote", "how much"] },
      { label: "Formuler poliment la demande", keywords: ["could you", "would it be possible", "i would like", "i would be grateful", "would you", "please let me know", "i would appreciate"] },
      { label: "Conclure formellement", keywords: ["i look forward", "looking forward", "kind regards", "best regards", "yours sincerely", "yours faithfully"] },
    ],
    model: "Dear Sir or Madam,\n\nThank you for sending us your new catalog. We have reviewed it carefully, and we are interested in a training session on your new software for our team of eight people.\n\nCould you please send us the available training dates for next month? We would also like to know whether the training can take place at our office or only online. Finally, would it be possible to receive a detailed quote, including the price per participant?\n\nI look forward to hearing from you.\n\nKind regards,\nAlex Martin",
    rubric: [
      { criterion: "Task: asks clearly for dates AND pricing (plus useful details)", points: 3 },
      { criterion: "Formal email structure (greeting, body, closing, signature)", points: 2 },
      { criterion: "Polite request forms (could you, would it be possible, I would like)", points: 2 },
      { criterion: "Grammar and spelling accuracy", points: 2 },
      { criterion: "Consistent formal register (no contractions or slang)", points: 1 },
    ],
  },

  // ---- B1.5 Working in English ----
  {
    id: 2,
    palier: "B1.5",
    from: "Rachel, team leader",
    subject: "End-of-shift summary",
    message: "Hi, can you send me a quick written summary of what you achieved during your shift today and any pending issues? Thanks! — Rachel",
    task: "Write a concise report combining past actions (what you did) with a current status update (what is still pending).",
    fr: "Message : « Bonjour, tu peux m'envoyer un petit résumé écrit de ce que tu as fait pendant ton service aujourd'hui et des points encore en suspens ? Merci ! — Rachel » — Consigne : écris un compte rendu concis qui combine les actions passées et un point sur la situation actuelle.",
    focus: "Compte rendu de travail : prétérit / present perfect pour les actions, présent pour la situation actuelle, style concis.",
    expectedPoints: [
      { label: "Lister ce qui a été fait (passé)", keywords: ["i completed", "i finished", "i have finished", "i've finished", "i dealt with", "i answered", "i sent", "i checked", "i called", "done"] },
      { label: "Signaler les points en suspens", keywords: ["pending", "still", "not yet", "waiting for", "hasn't", "haven't", "open", "outstanding", "to do"] },
      { label: "Proposer la suite / une action", keywords: ["tomorrow", "i will", "i'll", "next step", "follow up", "need to", "should"] },
      { label: "Rester concis et organisé", keywords: ["summary", "done:", "pending issues", "here is", "here's", "today", "overall"] },
    ],
    model: "Hi Rachel,\n\nHere is a quick summary of my shift today.\nDone:\n- I answered 25 customer emails and closed 18 tickets.\n- I checked the stock for next week's orders.\n- I have updated the client database.\n\nPending issues:\n- The Brown order hasn't arrived yet; I'm waiting for the carrier's answer.\n- Two clients are still waiting for a refund confirmation from Accounts.\n\nI'll follow up on both first thing tomorrow morning.\n\nBest,\nSam",
    rubric: [
      { criterion: "Task: both achievements AND pending issues are covered", points: 3 },
      { criterion: "Correct tenses: past simple / present perfect for actions, present for status", points: 3 },
      { criterion: "Concise, clear layout (short lines or bullet points)", points: 2 },
      { criterion: "Workplace vocabulary and spelling", points: 2 },
    ],
  },
  {
    id: 3,
    palier: "B1.5",
    from: "Mark, HR manager",
    subject: "Interns' first week",
    message: "Hi, we need to organize the upcoming training schedule for our new interns. What is your plan for their first week? — Mark",
    task: "Write a structured schedule for the interns' first week using temporal connectors (first, next, then, finally).",
    fr: "Message : « Bonjour, nous devons organiser le planning de formation de nos nouveaux stagiaires. Quel est ton programme pour leur première semaine ? — Mark » — Consigne : écris un planning structuré en utilisant des connecteurs de temps (first, next, then, finally).",
    focus: "Planning structuré : connecteurs temporels (first, next, then, finally) et futur (will, going to).",
    expectedPoints: [
      { label: "Utiliser des connecteurs temporels", keywords: ["first", "next", "then", "after that", "finally", "to begin with", "at the end"] },
      { label: "Répartir les activités par jour", keywords: ["monday", "tuesday", "wednesday", "thursday", "friday", "day one", "day 1", "morning", "afternoon"] },
      { label: "Décrire les activités de formation", keywords: ["welcome", "tour", "training", "meet", "team", "presentation", "shadow", "workshop", "introduction", "tools"] },
      { label: "Parler au futur", keywords: ["will", "they'll", "are going to", "is going to", "we'll", "they will"] },
    ],
    model: "Hi Mark,\n\nHere is my plan for the interns' first week.\nFirst, on Monday, we will welcome them with a short presentation of the company and a tour of the office. Next, on Tuesday and Wednesday, they will follow training sessions on our main tools and safety rules. Then, on Thursday, each intern will shadow a member of the team to see how we work day to day. Finally, on Friday afternoon, we will have a short meeting to answer their questions and collect their feedback.\n\nLet me know if you'd like any changes.\nBest,\nJulia",
    rubric: [
      { criterion: "Task: a realistic plan covering the whole first week", points: 3 },
      { criterion: "Temporal connectors used correctly and in a logical order", points: 3 },
      { criterion: "Future forms accurate (will / going to)", points: 2 },
      { criterion: "Professional tone and spelling", points: 2 },
    ],
  },

  // ---- B1.6 Future forms & first conditionals ----
  {
    id: 4,
    palier: "B1.6",
    from: "Your career coach",
    subject: "Your 6-month strategy",
    message: "Where do you see yourself in six months regarding your career goals? Outline your strategy to get there.",
    task: "Describe your career goal for the next six months and outline your strategy, using future forms and at least one conditional (If I…, I will…).",
    fr: "Message : « Où te vois-tu dans six mois par rapport à tes objectifs professionnels ? Présente ta stratégie pour y arriver. » — Consigne : décris ton objectif et ta stratégie en utilisant le futur et au moins une phrase conditionnelle (If I…, I will…).",
    focus: "Structures du futur, propositions conditionnelles (premier conditionnel) et ambitions professionnelles.",
    expectedPoints: [
      { label: "Présenter l'objectif", keywords: ["in six months", "my goal", "i would like to", "i want to", "i hope to", "i see myself", "i'd like to"] },
      { label: "Utiliser les formes du futur", keywords: ["going to", "will", "i'll", "i'm starting", "i am starting", "plan to"] },
      { label: "Utiliser une phrase conditionnelle", keywords: ["if i", "if i get", "if everything", "unless", "as long as", "provided that"] },
      { label: "Détailler la stratégie (étapes)", keywords: ["first", "then", "course", "training", "network", "improve", "skills", "apply", "certificate", "step"] },
    ],
    model: "In six months, I see myself working as a team coordinator in my company. To get there, I'm going to follow a management course online, which starts next month. I will also ask my manager for more responsibilities, for example organising our weekly meetings. At the same time, I'm going to improve my English, because our team works with international clients. If I complete the course successfully, I will apply for the coordinator position in the spring. If it doesn't work immediately, I'll keep developing my skills and try again.",
    rubric: [
      { criterion: "Task: a clear goal + a concrete strategy with steps", points: 3 },
      { criterion: "Future forms used appropriately (going to / will / present continuous)", points: 2 },
      { criterion: "First conditional correctly formed (If + present, will + verb)", points: 2 },
      { criterion: "Professional vocabulary (skills, responsibilities, position…)", points: 2 },
      { criterion: "Spelling and punctuation", points: 1 },
    ],
  },

  // ---- B1.7 Say What You Think ----
  {
    id: 5,
    palier: "B1.7",
    from: "Your English teacher",
    subject: "Opinion paragraph",
    message: "Write a short paragraph (around 80 words) giving your opinion on how digital tools and AI are changing the way students learn today.",
    task: "Write an argumentative paragraph of about 80 words: give your opinion, support it with examples, and mention one limit.",
    fr: "Message : « Écris un court paragraphe (environ 80 mots) pour donner ton avis sur la façon dont les outils numériques et l'IA changent la manière d'apprendre des étudiants aujourd'hui. » — Consigne : rédige un paragraphe argumenté avec des exemples et une limite.",
    focus: "Écriture argumentative : paragraphe structuré, opinion, exemples et connecteurs.",
    expectedPoints: [
      { label: "Donner une opinion claire", keywords: ["i think", "in my opinion", "i believe", "personally", "from my point of view", "i feel that"] },
      { label: "Donner des exemples concrets", keywords: ["for example", "for instance", "such as", "apps", "videos", "chatbot", "online"] },
      { label: "Mentionner une limite / un contraste", keywords: ["however", "but", "on the other hand", "although", "whereas", "risk", "danger", "copy", "cheat"] },
      { label: "Conclure", keywords: ["in conclusion", "to sum up", "overall", "that's why", "therefore", "all in all"] },
    ],
    model: "In my opinion, digital tools and AI are making learning more flexible and more personal. For example, students can watch video lessons at their own pace or ask an AI assistant to explain a difficult concept again and again. Apps also make practice more fun. However, there is a real risk: some students use AI to do their homework instead of thinking for themselves. That's why I believe these tools are excellent, but only if teachers show students how to use them responsibly.",
    rubric: [
      { criterion: "Task: clear opinion on the topic, about 80 words", points: 2 },
      { criterion: "Arguments supported by concrete examples", points: 3 },
      { criterion: "Logical structure with connectors (for example, however, that's why)", points: 2 },
      { criterion: "Grammar accuracy (present simple/continuous, modals)", points: 2 },
      { criterion: "Vocabulary range on technology and education", points: 1 },
    ],
  },

  // ---- B1.9 Internet & Informal English ----
  {
    id: 6,
    palier: "B1.9",
    from: "Jess",
    subject: "Friday dinner!",
    message: "Hey! Are we still on for our dinner this Friday? Let me know what time we can meet up and what you'd like to eat. — Jess",
    task: "Write a warm, informal reply confirming the time and place (and suggest what to eat).",
    fr: "Message : « Coucou ! Notre dîner de vendredi tient toujours ? Dis-moi à quelle heure on peut se retrouver et ce que tu aimerais manger. — Jess » — Consigne : écris une réponse chaleureuse et informelle pour confirmer l'heure et le lieu.",
    focus: "Registre informel écrit (message à un ami) : ton chaleureux, formules naturelles, sans excès de slang.",
    expectedPoints: [
      { label: "Confirmer le dîner avec enthousiasme", keywords: ["yes", "of course", "definitely", "can't wait", "sure", "still on", "looking forward"] },
      { label: "Proposer une heure", keywords: ["at 7", "at 8", "7 pm", "8 pm", "o'clock", "half past", "pm", "around"] },
      { label: "Proposer un lieu", keywords: ["meet", "restaurant", "outside", "at my place", "in front of", "station", "café", "cafe"] },
      { label: "Dire ce que tu aimerais manger", keywords: ["pizza", "sushi", "thai", "italian", "indian", "burger", "i'd love", "fancy", "how about"] },
      { label: "Ton informel et chaleureux", keywords: ["hey", "see you", "xx", "can't wait", "love", "cheers", "catch you", "take care"] },
    ],
    model: "Hey Jess!\n\nYes, of course we're still on, I can't wait! How about meeting at 7:30 in front of the cinema on Park Street? There's a great little Italian place just around the corner. I'm really in the mood for pizza, but they also do amazing pasta if you fancy something else. I'll book a table for two, just in case it's busy. Let me know if the time works for you.\n\nSee you Friday!\nxx",
    rubric: [
      { criterion: "Task: confirms the dinner, gives a time AND a place", points: 3 },
      { criterion: "Warm, informal register appropriate for a friend (not too formal, no heavy slang)", points: 3 },
      { criterion: "Natural informal expressions (How about…?, can't wait, fancy…)", points: 2 },
      { criterion: "Grammar and spelling", points: 2 },
    ],
  },

  // ---- B1.10 Problem Solving ----
  {
    id: 7,
    palier: "B1.10",
    from: "Mr. Harris (angry client)",
    subject: "License not working!",
    message: "The software license I bought yesterday is not working properly, and your support team hasn't answered my emails. I want a solution immediately! — Mr. Harris",
    task: "Write a formal, polite apology letter that de-escalates the conflict and offers an immediate solution.",
    fr: "Message : « La licence de logiciel que j'ai achetée hier ne fonctionne pas correctement, et votre service d'assistance n'a pas répondu à mes emails. Je veux une solution immédiatement ! — M. Harris » — Consigne : écris une lettre d'excuses formelle et polie qui apaise le conflit et propose une solution immédiate.",
    focus: "Registre formel, excuses et désamorçage d'un conflit, proposition de solution.",
    expectedPoints: [
      { label: "S'excuser sincèrement", keywords: ["apologise", "apologize", "apologies", "sorry", "we regret", "i regret"] },
      { label: "Montrer de l'empathie / reconnaître le problème", keywords: ["understand", "frustrating", "frustration", "you are right", "should have", "unacceptable", "inconvenience"] },
      { label: "Proposer une solution immédiate", keywords: ["new license", "new licence", "new key", "refund", "call you", "today", "immediately", "within the hour", "resolve", "fix"] },
      { label: "Geste commercial / suivi", keywords: ["free", "discount", "extra month", "compensation", "personally", "direct line", "contact me"] },
      { label: "Formules formelles", keywords: ["dear", "yours sincerely", "kind regards", "best regards", "please do not hesitate"] },
    ],
    model: "Dear Mr. Harris,\n\nPlease accept our sincere apologies for the problem with your software license and for our slow response. I completely understand your frustration; you should have received an answer much sooner.\n\nI have already generated a new license key, which you will find attached to this email. One of our technicians will also call you today to make sure everything works properly. As a gesture of goodwill, we are offering you one extra month of subscription free of charge.\n\nIf you need anything else, please contact me directly.\n\nYours sincerely,\nEmma Clarke, Customer Support",
    rubric: [
      { criterion: "Task: apology + empathy + immediate, concrete solution", points: 3 },
      { criterion: "De-escalating, polite tone (no blame on the client)", points: 2 },
      { criterion: "Formal letter structure and register", points: 2 },
      { criterion: "Grammar accuracy (present perfect, will, modals)", points: 2 },
      { criterion: "Spelling and punctuation", points: 1 },
    ],
  },

  // ---- B1.12 B1 Real-Life Mission ----
  {
    id: 8,
    palier: "B1.12",
    from: "Management team",
    subject: "Annual company seminar",
    message: "We are organizing our annual company seminar. Write an internal email to all staff members to announce the dates, location, and main goals.",
    task: "Write a clear, motivating internal email announcing the dates, the location and the main goals of the seminar.",
    fr: "Message : « Nous organisons notre séminaire annuel d'entreprise. Écris un email interne à tous les membres du personnel pour annoncer les dates, le lieu et les principaux objectifs. » — Consigne : rédige un email interne professionnel, clair et motivant.",
    focus: "Communication interne professionnelle : format email, informations claires, ton motivant.",
    expectedPoints: [
      { label: "Annoncer les dates", keywords: ["will take place on", "from the", "june", "september", "october", "november", "dates", "two days", "2 days", "save the date"] },
      { label: "Annoncer le lieu", keywords: ["hotel", "venue", "location", "centre", "center", "resort", "will take place at", "will be held", "held at", "conference"] },
      { label: "Présenter les objectifs", keywords: ["goal", "goals", "aim", "objective", "objectives", "to share", "to discuss", "to plan", "strategy", "team building"] },
      { label: "Ton motivant et invitation à agir", keywords: ["we are delighted", "we're delighted", "we are pleased", "excited", "look forward", "please confirm", "please register", "don't miss", "see you there"] },
    ],
    model: "Subject: Save the date: Annual Company Seminar 2026\n\nDear colleagues,\n\nWe are delighted to announce that our annual seminar will take place on 15 and 16 October at the Lakeside Conference Centre in Annecy.\n\nThis year, we have three main goals: to review our results, to share our strategy for next year, and to strengthen team spirit through workshops and team-building activities.\n\nTransport and accommodation will be organised by the company. Please confirm your attendance by 30 September.\n\nWe look forward to seeing you all there!\n\nBest regards,\nThe Management Team",
    rubric: [
      { criterion: "Task: dates, location AND goals all clearly stated", points: 3 },
      { criterion: "Internal email format (subject, greeting, paragraphs, sign-off)", points: 2 },
      { criterion: "Clear, motivating professional tone", points: 2 },
      { criterion: "Grammar accuracy (future, passive: will take place, will be organised)", points: 2 },
      { criterion: "Spelling and punctuation", points: 1 },
    ],
  },
];
