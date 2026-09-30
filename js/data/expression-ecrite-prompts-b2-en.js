// The Roots — Expression écrite (Anglais, niveau B2).
//
// Même mécanique qu'en A1/A2/B1 (voir expression-ecrite-prompts-b1-en.js) :
// un message ou une consigne, auquel l'apprenant répond par écrit, corrigé
// avec LanguageTool + une checklist de points attendus.
//
// Contenu : les 10 sujets écrits B2 fournis par Ashley, alignés sur les
// paliers B2.1 → B2.12 (voir programme-b2-en.js), + 2 sujets ajoutés pour
// combler les paliers sans sujet écrit (B2.10 Thinking in English —
// écriture minutée sans traduction ; B2.11 One Day in English — réponse à
// un imprévu du quotidien). Les réponses types d'Ashley sont reprises,
// corrigées si besoin et étoffées pour atteindre 60-120 mots.
//
// Champs : id, palier, from, subject, message, task (consigne en anglais),
// fr (traduction du message + de la consigne), focus, expectedPoints,
// model (réponse type, montrée APRÈS la réponse), rubric (barème sur 10).

export const EXPRESSION_ECRITE_PROMPTS_B2_EN = [
  // ---- B2.1 Argumentation ----
  {
    id: 1,
    palier: "B2.1",
    from: "Debate club",
    subject: "Essay: free university for all?",
    message: "Write a short essay (approx. 100 words) discussing whether university education should be entirely free for everyone.",
    task: "Write an argued essay of about 100 words: state your position, give reasons and an example, address a counterargument and conclude.",
    fr: "Message : « Écris un court essai (environ 100 mots) pour discuter de la question : l'enseignement universitaire devrait-il être entièrement gratuit pour tous ? » — Consigne : prends position, donne des raisons et un exemple, réponds à un contre-argument et conclus.",
    focus: "Essai argumenté : claim → reason → example → counterargument → conclusion, connecteurs avancés (however, whereas, therefore, provided that).",
    expectedPoints: [
      { label: "Prendre position", keywords: ["i believe", "i would argue", "in my view", "should be free", "should not be free", "shouldn't be free", "providing free", "it is essential"] },
      { label: "Argumenter (cause / conséquence)", keywords: ["because", "since", "therefore", "consequently", "as a result", "social mobility", "equal opportunities", "talent"] },
      { label: "Traiter la contre-objection", keywords: ["however", "nevertheless", "admittedly", "some might argue", "critics", "on the other hand", "although", "whereas"] },
      { label: "Aborder le financement", keywords: ["funding", "taxes", "tax", "cost", "public finances", "budget", "taxpayers", "afford"] },
      { label: "Conclure", keywords: ["in conclusion", "to conclude", "overall", "ultimately", "all things considered", "on balance"] },
    ],
    model: "Providing free university education is a powerful catalyst for social mobility. By removing financial barriers, society ensures that talent, rather than wealth, dictates professional success. In countries such as Germany, where tuition is free, students from modest backgrounds are far less likely to give up their studies for financial reasons. Admittedly, critics argue that someone has to pay, and they are right: funding such a system requires careful tax restructuring to avoid straining public finances. Nevertheless, a better-educated population ultimately generates more tax revenue. On balance, free higher education is an investment, not an expense.",
    rubric: [
      { criterion: "Task: clear position, about 100 words", points: 2 },
      { criterion: "Argument structure (reason, example, counterargument, conclusion)", points: 3 },
      { criterion: "Advanced connectors used accurately", points: 2 },
      { criterion: "Grammatical range and accuracy", points: 2 },
      { criterion: "Formal essay vocabulary", points: 1 },
    ],
  },

  // ---- B2.2 Nuance & Certainty ----
  {
    id: 2,
    palier: "B2.2",
    from: "Writing workshop",
    subject: "Qualify this statement",
    message: "Write a paragraph qualifying the statement: 'Technology always improves human communication.' Use nuance markers (e.g., arguably, to some extent, while).",
    task: "Write one paragraph (80-100 words) that neither fully accepts nor rejects the statement, using at least three nuance markers.",
    fr: "Message : « Écris un paragraphe qui nuance l'affirmation : \"La technologie améliore toujours la communication humaine.\" Utilise des marqueurs de nuance (par ex. arguably, to some extent, while). » — Consigne : ni accepter ni rejeter totalement l'affirmation, avec au moins trois marqueurs de nuance.",
    focus: "Nuancer une opinion : marqueurs de nuance et de degré (arguably, to some extent, largely, partly, while), éviter les absolus.",
    expectedPoints: [
      { label: "Marqueurs de nuance", keywords: ["arguably", "to some extent", "to a certain extent", "partly", "largely", "relatively", "potentially", "in some cases"] },
      { label: "Concession (while / although)", keywords: ["while", "although", "even though", "whereas", "admittedly", "granted"] },
      { label: "Aspect positif de la technologie", keywords: ["bridged", "connect", "distance", "instant", "keep in touch", "video calls", "accessible", "reach"] },
      { label: "Limite de la technologie", keywords: ["face-to-face", "body language", "misunderstanding", "superficial", "isolation", "tone", "impoverished", "distraction"] },
      { label: "Rejeter l'absolu « always »", keywords: ["not always", "universally", "overlooks", "oversimplification", "too simplistic", "it depends", "rather than"] },
    ],
    model: "While digital tools have arguably bridged geographical divides, allowing families and colleagues to stay in touch across continents, they have, to some extent, impoverished face-to-face interactions. Instant messaging is undeniably efficient, yet it often strips messages of tone, which can partly explain why misunderstandings are so frequent online. Similarly, video calls are largely convenient but rarely replace the warmth of a real conversation. Thus, claiming that technology always improves communication overlooks the subtle importance of body language. It would be more accurate to say that technology changes communication, sometimes for the better, sometimes not.",
    rubric: [
      { criterion: "Task: statement qualified (neither fully accepted nor rejected)", points: 3 },
      { criterion: "At least three nuance markers used naturally", points: 3 },
      { criterion: "Balanced examples (benefit + limit)", points: 2 },
      { criterion: "Accuracy and cohesion", points: 2 },
    ],
  },

  // ---- B2.3 Register Master ----
  {
    id: 3,
    palier: "B2.3",
    from: "Office manager",
    subject: "Rewrite in formal English",
    message: "Rewrite this informal text into a formal corporate announcement: 'Hey guys, our office is moving next month, so pack your stuff.'",
    task: "Rewrite the message as a formal company announcement (60-90 words): add the necessary details and use formal vocabulary and structures.",
    fr: "Message : « Réécris ce texte informel sous forme d'annonce officielle d'entreprise : \"Salut tout le monde, le bureau déménage le mois prochain, donc faites vos cartons.\" » — Consigne : rédige une annonce formelle en ajoutant les détails nécessaires et en utilisant un vocabulaire et des structures formels.",
    focus: "Changement de registre : passer du familier au formel (vocabulaire soutenu, passif, formules institutionnelles).",
    expectedPoints: [
      { label: "Formule d'annonce formelle", keywords: ["please be advised", "please note", "we would like to inform", "we are pleased to announce", "dear colleagues", "dear all", "this is to inform"] },
      { label: "Vocabulaire soutenu (déménager)", keywords: ["relocate", "relocation", "will be relocating", "headquarters", "premises", "new offices", "transfer"] },
      { label: "Consigne formelle (faire ses cartons)", keywords: ["are requested", "are kindly requested", "are required", "are asked to", "workstations", "belongings", "personal items", "pack"] },
      { label: "Détails pratiques", keywords: ["date", "address", "boxes", "further information", "schedule", "logistics", "movers", "by friday"] },
      { label: "Clôture formelle", keywords: ["thank you for your cooperation", "we appreciate", "should you have", "do not hesitate", "kind regards", "the management"] },
    ],
    model: "Dear colleagues,\n\nPlease be advised that our corporate headquarters will relocate to 25 Riverside Avenue next month. The move is scheduled for the weekend of 14 November. Consequently, all employees are requested to pack their individual workstations and organise their departmental archives accordingly by Thursday 12 November. Labelled boxes will be provided by the facilities team. Should you have any questions regarding the relocation, please do not hesitate to contact the Office Manager.\n\nThank you for your cooperation.\n\nThe Management",
    rubric: [
      { criterion: "Task: all original information kept + useful details added", points: 2 },
      { criterion: "Consistent formal register (no contractions, no slang)", points: 3 },
      { criterion: "Formal structures (passive, 'are requested', 'should you…')", points: 3 },
      { criterion: "Announcement layout and accuracy", points: 2 },
    ],
  },

  // ---- B2.4 The Collocation Lab ----
  {
    id: 4,
    palier: "B2.4",
    from: "Project manager",
    subject: "Weekly update needed",
    message: "Draft a brief professional update using at least three strong collocations (e.g., to launch a campaign, to meet a deadline, to raise awareness).",
    task: "Write a short professional update (60-90 words) for your team, using at least three natural collocations correctly.",
    fr: "Message : « Rédige un bref point professionnel en utilisant au moins trois collocations fortes (par ex. lancer une campagne, respecter un délai, sensibiliser). » — Consigne : écris un court point d'avancement pour ton équipe avec au moins trois collocations naturelles.",
    focus: "Collocations professionnelles : combinaisons naturelles (meet a deadline, launch a campaign, raise awareness, make progress, take into account).",
    expectedPoints: [
      { label: "Collocations de projet", keywords: ["meet the deadline", "meet our deadline", "meet a deadline", "launch a campaign", "launching a", "set a goal", "set targets", "reach a target", "reached our target"] },
      { label: "Collocations avec make / take", keywords: ["make progress", "made progress", "making progress", "significant progress", "into account", "take action", "make a decision", "take part", "make a difference"] },
      { label: "Autres collocations fortes", keywords: ["raise awareness", "awareness", "draw attention", "gain momentum", "run a survey", "conduct research", "carry out", "hold a meeting", "hold a short meeting"] },
      { label: "Structure d'un point d'avancement", keywords: ["update", "this week", "next steps", "so far", "status", "on track", "going forward", "moving forward"] },
    ],
    model: "Hi team,\n\nHere is a quick update on the Green Office project. We have made significant progress this week: the design team has finalised the visuals, and we are on track to meet our deadline of 30 October. Next Monday, the marketing team is launching a new digital campaign designed to raise environmental awareness among our global customer base. We have also taken your feedback into account and adjusted the budget. Next step: we will hold a short meeting on Friday to review the launch plan.\n\nThanks, everyone!",
    rubric: [
      { criterion: "At least three collocations, used naturally and correctly", points: 4 },
      { criterion: "Task: a coherent professional update (status + next steps)", points: 2 },
      { criterion: "Grammar accuracy (present perfect, future, passive)", points: 2 },
      { criterion: "Professional tone and concision", points: 2 },
    ],
  },

  // ---- B2.5 Sound Like English (style & fluidité à l'écrit) ----
  {
    id: 5,
    palier: "B2.5",
    from: "Company blog editor",
    subject: "Blog post on leadership",
    message: "Write a compelling opening paragraph for a professional blog post about modern leadership.",
    task: "Write an engaging opening paragraph (60-100 words) with a strong hook, a natural rhythm and a clear main idea.",
    fr: "Message : « Écris un paragraphe d'ouverture percutant pour un article de blog professionnel sur le leadership moderne. » — Consigne : rédige un premier paragraphe accrocheur, au rythme naturel, avec une idée principale claire.",
    focus: "Style & fluidité : accroche, rythme des phrases (courtes / longues), contraste, formulation idiomatique et naturelle.",
    expectedPoints: [
      { label: "Accroche forte", keywords: ["isn't about", "is not about", "forget", "imagine", "what if", "the best leaders", "true leadership", "let's be honest"] },
      { label: "Contraste ancien / nouveau leadership", keywords: ["giving orders", "corner office", "command", "control", "rather", "instead", "no longer", "used to"] },
      { label: "Idée clé du leadership moderne", keywords: ["empower", "empowering", "empathy", "trust", "listen", "listening", "inspire", "vision", "collaboration"] },
      { label: "Contexte actuel", keywords: ["today", "today's", "fast-paced", "modern", "hybrid", "changing", "workplace", "landscape"] },
    ],
    model: "True leadership isn't about giving orders from a corner office; it's about empowering people to exceed their own expectations. For decades, we admired the boss who had all the answers. Today, the most effective leaders are the ones who ask the best questions, and then genuinely listen. In today's fast-paced and often hybrid workplace, empathy is just as critical as strategic vision. So what does it really take to lead a team that doesn't just follow, but truly believes? Let's find out.",
    rubric: [
      { criterion: "Engaging hook that makes the reader want to continue", points: 3 },
      { criterion: "Rhythm and flow (varied sentence length, smooth transitions)", points: 3 },
      { criterion: "Natural, idiomatic phrasing (no literal translation)", points: 2 },
      { criterion: "Accuracy and punctuation", points: 2 },
    ],
  },

  // ---- B2.6 Diplomatic English ----
  {
    id: 6,
    palier: "B2.6",
    from: "Mr. Taylor, NovaServe",
    subject: "Partnership proposal",
    message: "Write a formal email refusing a partnership proposal from a vendor without burning bridges.",
    task: "Write a formal email (70-110 words) that clearly declines the proposal, gives a tactful reason and keeps the door open for the future.",
    fr: "Message : « Écris un email formel pour refuser une proposition de partenariat d'un fournisseur, sans couper les ponts. » — Consigne : refuse clairement, donne une raison avec tact et laisse la porte ouverte pour l'avenir.",
    focus: "Courrier diplomatique : refuser clairement mais avec tact (remercier, adoucir, justifier, laisser la porte ouverte).",
    expectedPoints: [
      { label: "Remercier", keywords: ["thank you for", "we appreciate", "we are grateful", "we were impressed", "for taking the time"] },
      { label: "Refuser avec tact", keywords: ["unfortunately", "regret", "we are unable", "we will not be able", "not in a position", "have decided not to", "decline", "not to proceed"] },
      { label: "Justifier sans blesser", keywords: ["align", "strategic", "priorities", "at this stage", "currently", "roadmap", "budget", "timing"] },
      { label: "Adoucir / compliment", keywords: ["undoubtedly", "high quality", "impressive", "valuable", "while", "although", "clearly"] },
      { label: "Laisser la porte ouverte", keywords: ["future", "keep in touch", "stay in touch", "revisit", "hope to", "opportunity", "wish you", "success"] },
    ],
    model: "Dear Mr. Taylor,\n\nThank you for presenting your partnership proposal and for the time your team invested in preparing it. While your services are undoubtedly of high quality, they do not currently align with our strategic roadmap, which is focused on internal development for the next twelve months. We have therefore decided not to proceed at this stage.\n\nWe nevertheless wish you great success and would be glad to revisit a collaboration in the future, should our priorities evolve. Please keep us informed of your new offers.\n\nKind regards,\nClaire Dubois",
    rubric: [
      { criterion: "Task: clear refusal + tactful reason + door left open", points: 3 },
      { criterion: "Diplomatic language (softeners, compliments, no blunt 'no')", points: 3 },
      { criterion: "Formal email conventions", points: 2 },
      { criterion: "Grammar and accuracy", points: 2 },
    ],
  },

  // ---- B2.7 Humour, Irony & Sarcasm ----
  {
    id: 7,
    palier: "B2.7",
    from: "App store",
    subject: "Rate our latest update",
    message: "Write a short, subtly ironic review of a software update that removed features users loved.",
    task: "Write a short review (60-90 words) that pretends to praise the update while making your real criticism clear through irony.",
    fr: "Message : « Écris un court avis, subtilement ironique, sur une mise à jour de logiciel qui a supprimé des fonctionnalités que les utilisateurs adoraient. » — Consigne : fais semblant de féliciter tout en rendant ta vraie critique évidente grâce à l'ironie.",
    focus: "Humour, ironie & sarcasme à l'écrit : faux compliments, exagération, understatement, contraste entre sens littéral et sens réel.",
    expectedPoints: [
      { label: "Faux compliment / ironie", keywords: ["heartfelt thank you", "thank you so much", "a big thank you", "brilliant", "genius", "what a treat", "truly", "how thoughtful"] },
      { label: "Mentionner la fonctionnalité supprimée", keywords: ["removing", "removed", "no longer", "gone", "disappeared", "got rid of", "search bar", "dark mode"] },
      { label: "Exagération / conséquence absurde", keywords: ["nostalgic", "throwback", "the 90s", "hours", "manually", "character-building", "exercise", "adventure"] },
      { label: "Sens réel perceptible", keywords: ["productivity", "can't wait", "next update", "bring back", "five stars", "one star", "1 star", "bring it back"] },
    ],
    model: "A heartfelt thank you to the developers for removing the search bar. Searching for files manually is a delightfully nostalgic throwback to the 90s, and it has truly enhanced our daily productivity: I now spend a relaxing twenty minutes a day scrolling through folders. I also appreciate the decision to hide the settings menu; guessing where things are keeps my brain young. I honestly can't wait to see what you remove next. Perhaps the 'save' button? One star, for tradition's sake.",
    rubric: [
      { criterion: "Irony clear: literal praise, real criticism obvious", points: 3 },
      { criterion: "Subtlety (not openly aggressive or insulting)", points: 2 },
      { criterion: "Use of exaggeration / understatement", points: 2 },
      { criterion: "Accuracy and natural expression", points: 2 },
      { criterion: "Review format and length", points: 1 },
    ],
  },

  // ---- B2.8 Read Between the Lines ----
  {
    id: 8,
    palier: "B2.8",
    from: "Your mentor",
    subject: "What do they really mean?",
    message: "Read this excerpt from a client's reply: 'We appreciate your innovative approach.' Write a short analysis of the underlying corporate tone.",
    task: "Write a short analysis (60-90 words): explain the literal meaning, the probable implied meaning, and what the writer should do next.",
    fr: "Message : « Lis cet extrait de la réponse d'un client : \"Nous apprécions votre approche innovante.\" Rédige une courte analyse du ton sous-jacent. » — Consigne : explique le sens littéral, le sens implicite probable et ce que l'auteur devrait faire ensuite.",
    focus: "Analyse implicite : identifier le sous-entendu, l'attitude et l'intention derrière une formule professionnelle polie.",
    expectedPoints: [
      { label: "Sens littéral", keywords: ["on the surface", "literally", "at face value", "seems positive", "sounds positive", "appears", "compliment"] },
      { label: "Sous-entendu identifié", keywords: ["subtext", "implies", "implying", "suggests", "signals", "hidden meaning", "underlying", "between the lines"] },
      { label: "Attitude réelle (scepticisme)", keywords: ["skepticism", "scepticism", "sceptical", "skeptical", "cautious", "reservations", "hesitant", "too risky", "too radical"] },
      { label: "Nuancer / recommander une action", keywords: ["may", "might", "probably", "likely", "depends", "follow up", "clarify", "not certain"] },
    ],
    model: "On the surface, the sentence sounds like a compliment, but it carries a cautious subtext. In corporate communication, \"innovative approach\" often signals scepticism, implying that the proposal departs too radically from standard company protocols. The absence of any concrete next step reinforces this impression: the client praises the idea without committing to it. However, this reading is not certain, since tone depends on context. The best response would be to follow up politely and ask which aspects they would like to adjust.",
    rubric: [
      { criterion: "Task: literal vs implied meaning clearly contrasted", points: 3 },
      { criterion: "Justification based on key words and what is missing", points: 2 },
      { criterion: "Hedging / nuance (may, likely, not certain)", points: 2 },
      { criterion: "Analytical vocabulary (subtext, imply, signal, underlying)", points: 2 },
      { criterion: "Accuracy", points: 1 },
    ],
  },

  // ---- B2.9 Digital English ----
  {
    id: 9,
    palier: "B2.9",
    from: "LinkedIn",
    subject: "Share a milestone",
    message: "Draft a professional LinkedIn post announcing a professional milestone in clear, engaging English.",
    task: "Write a LinkedIn post (60-100 words): announce the milestone, thank the people involved and end with a forward-looking line. Keep it concise and engaging.",
    fr: "Message : « Rédige une publication LinkedIn professionnelle pour annoncer une étape importante de ta carrière, dans un anglais clair et engageant. » — Consigne : annonce l'étape, remercie les personnes impliquées et termine par une phrase tournée vers l'avenir, de façon concise.",
    focus: "Rédaction digitale concise : adapter le message au canal (LinkedIn), ton positif et professionnel, phrases courtes et impactantes.",
    expectedPoints: [
      { label: "Annonce enthousiaste", keywords: ["thrilled", "excited", "delighted", "proud", "happy to announce", "pleased to share", "i'm happy to share"] },
      { label: "Préciser l'étape franchie", keywords: ["completed", "wrapped up", "launched", "promoted", "certified", "certification", "new role", "joined", "milestone"] },
      { label: "Remerciements", keywords: ["thanks to", "thank you", "huge thanks", "grateful", "shout-out", "shoutout", "couldn't have done"] },
      { label: "Ouverture vers l'avenir", keywords: ["onward", "next challenge", "what's next", "looking forward", "can't wait", "next chapter", "the journey continues"] },
    ],
    model: "Thrilled to announce that our team has officially wrapped up our Q3 sustainability project! 🌱\n\nIn just three months, we cut our office energy use by 18% and switched 70% of our suppliers to greener logistics.\n\nHuge thanks to everyone whose dedication turned this ambitious vision into reality, especially our facilities and procurement teams, who went above and beyond.\n\nLesson learned: big change starts with small, consistent steps.\n\nOnward to the next challenge! #Sustainability #Teamwork",
    rubric: [
      { criterion: "Task: milestone + thanks + forward-looking ending", points: 3 },
      { criterion: "Adapted to the channel (short paragraphs, positive tone, optional hashtags)", points: 3 },
      { criterion: "Concise, engaging phrasing (no filler)", points: 2 },
      { criterion: "Accuracy", points: 2 },
    ],
  },

  // ---- B2.10 Thinking in English (ajouté) ----
  {
    id: 10,
    palier: "B2.10",
    from: "The Roots coach (3-minute challenge)",
    subject: "Write without translating",
    message: "You have three minutes. No dictionary, no translator, no French draft. Describe what you can see around you right now and how it makes you feel.",
    task: "Write for three minutes (60-100 words) directly in English: describe your surroundings and your feelings. If you don't know a word, rephrase instead of translating.",
    fr: "Message : « Tu as trois minutes. Pas de dictionnaire, pas de traducteur, pas de brouillon en français. Décris ce que tu vois autour de toi en ce moment et ce que cela te fait ressentir. » — Consigne : écris directement en anglais pendant trois minutes ; si un mot te manque, reformule au lieu de traduire.",
    focus: "Pensée directe en anglais : écrire sans traduction mentale, avec des structures simples mais naturelles et des stratégies de reformulation.",
    expectedPoints: [
      { label: "Décrire l'environnement (présent)", keywords: ["i can see", "there is", "there are", "in front of me", "next to", "outside", "window", "room", "desk"] },
      { label: "Décrire l'ambiance (sens)", keywords: ["i can hear", "quiet", "noisy", "light", "smell", "sunny", "grey", "cold", "warm"] },
      { label: "Exprimer un ressenti", keywords: ["i feel", "it makes me", "calm", "relaxed", "peaceful", "tired", "motivated", "cosy", "cozy"] },
      { label: "Reformuler au lieu de traduire", keywords: ["a kind of", "a sort of", "something like", "the thing you use to", "i mean", "i'm not sure what it's called"] },
    ],
    model: "Right now, I'm sitting at my kitchen table. In front of me, there's a cold cup of coffee and a pile of letters I really should open. Through the window, I can see a grey sky and a kind of small tree that is losing its leaves. I can hear the washing machine in the background, which is strangely relaxing. It makes me feel calm, but also a bit lazy, like a typical Sunday afternoon. I think I need some fresh air.",
    rubric: [
      { criterion: "Natural English (no word-for-word translation, no French structures)", points: 3 },
      { criterion: "Task: surroundings + feelings described", points: 2 },
      { criterion: "Rephrasing strategies when a word is missing", points: 2 },
      { criterion: "Fluency: enough content for three minutes of writing", points: 2 },
      { criterion: "Basic accuracy", points: 1 },
    ],
  },

  // ---- B2.11 One Day in English (ajouté) ----
  {
    id: 11,
    palier: "B2.11",
    from: "Mrs. Lewis, your landlord",
    subject: "Urgent: plumber visit tomorrow",
    message: "Hello, I'm afraid there's a leak in the flat below yours, and the plumber needs to access your bathroom tomorrow between 9 am and 12 pm. Will someone be at home? If not, would you mind if I let him in with my spare key? Sorry for the short notice. — Mrs. Lewis",
    task: "Reply to your landlord (70-110 words): react to the situation, explain your availability, propose a practical solution and set any conditions you need.",
    fr: "Message : « Bonjour, je suis désolée, mais il y a une fuite dans l'appartement du dessous et le plombier doit accéder à votre salle de bains demain entre 9 h et 12 h. Y aura-t-il quelqu'un chez vous ? Sinon, cela vous dérangerait-il que je le fasse entrer avec mon double des clés ? Désolée de prévenir si tard. — Mme Lewis » — Consigne : réponds en réagissant à la situation, en expliquant tes disponibilités, en proposant une solution pratique et en posant tes éventuelles conditions.",
    focus: "Simulation d'une journée en anglais : répondre à un imprévu du quotidien, registre poli-neutre, proposer une solution et poser des conditions (as long as, provided that).",
    expectedPoints: [
      { label: "Réagir à la situation", keywords: ["sorry to hear", "no problem", "of course", "thank you for letting me know", "i hope", "oh no", "that's fine"] },
      { label: "Expliquer ses disponibilités", keywords: ["i'll be at work", "i will be at work", "i won't be", "i'm working", "until", "i can be home", "available", "nobody will be"] },
      { label: "Proposer une solution", keywords: ["spare key", "you can let him in", "feel free", "i could", "leave the key", "neighbour", "neighbor", "come back"] },
      { label: "Poser des conditions / précautions", keywords: ["as long as", "provided that", "could you make sure", "please make sure", "the cat", "lock the door", "text me", "let me know"] },
    ],
    model: "Hello Mrs. Lewis,\n\nThank you for letting me know, and I'm sorry to hear about the leak downstairs. Unfortunately, I'll be at work tomorrow from 8:30 until 6 pm, so nobody will be at home. You're very welcome to let the plumber in with your spare key, as long as someone stays with him during the visit. Could you also make sure the cat doesn't get out? She usually hides under the bed. Please text me once the work is done, and let me know if anything in the bathroom needs to be replaced.\n\nBest regards,\nNina",
    rubric: [
      { criterion: "Task: availability + solution + conditions", points: 3 },
      { criterion: "Appropriate polite-neutral register for a landlord", points: 2 },
      { criterion: "Conditions and requests expressed naturally (as long as, could you make sure)", points: 2 },
      { criterion: "Grammar accuracy (future, modals)", points: 2 },
      { criterion: "Spelling and message format", points: 1 },
    ],
  },

  // ---- B2.12 B2 Real World ----
  {
    id: 12,
    palier: "B2.12",
    from: "Chief Operating Officer",
    subject: "Executive summary needed",
    message: "Write a short executive summary (approx. 90 words) addressing a logistical delay and outlining the recovery strategy for company stakeholders.",
    task: "Write an executive summary of about 90 words: state the problem and its impact, the actions taken, and the expected timeline.",
    fr: "Message : « Rédige une courte synthèse (environ 90 mots) destinée aux parties prenantes de l'entreprise, qui traite d'un retard logistique et présente la stratégie de redressement. » — Consigne : expose le problème et son impact, les mesures prises et le calendrier prévu.",
    focus: "Rapport de mission réelle : synthèse exécutive concise, registre formel, chiffres et calendrier, passif et vocabulaire de gestion.",
    expectedPoints: [
      { label: "Exposer le problème et son impact", keywords: ["delay", "bottleneck", "bottlenecks", "disruption", "caused", "drop", "impact", "shortage"] },
      { label: "Donner un chiffre précis", keywords: ["%", "percent", "per cent", "days", "weeks", "orders", "shipments"] },
      { label: "Présenter la stratégie de redressement", keywords: ["mitigate", "diversified", "diversify", "optimised", "optimized", "alternative", "measures", "recovery", "secured"] },
      { label: "Donner un calendrier / une prévision", keywords: ["projected", "expected", "within", "by the end of", "stabilise", "stabilize", "next two weeks", "timeline"] },
      { label: "Rassurer les parties prenantes", keywords: ["minimal impact", "client satisfaction", "ensure", "ensuring", "confident", "monitor", "updates", "stakeholders"] },
    ],
    model: "Executive Summary\n\nRecent supply chain bottlenecks at our main European port caused a temporary 15% drop in our shipping efficiency, delaying approximately 300 customer orders. To mitigate this risk, we have diversified our supplier network, secured an alternative shipping route through Rotterdam, and optimised our local warehousing capacity. Priority customers have been contacted individually. Operations are projected to stabilise fully within the next two weeks, ensuring minimal impact on client satisfaction. A progress report will be shared with all stakeholders every Friday until full recovery.",
    rubric: [
      { criterion: "Task: problem + impact + actions + timeline, about 90 words", points: 3 },
      { criterion: "Executive-summary style: concise, factual, figures", points: 2 },
      { criterion: "Formal register and management vocabulary", points: 2 },
      { criterion: "Grammar range (present perfect, passive, projections)", points: 2 },
      { criterion: "Accuracy and punctuation", points: 1 },
    ],
  },
];
