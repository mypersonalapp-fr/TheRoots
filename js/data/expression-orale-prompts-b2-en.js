// The Roots — Expression orale (Anglais, niveau B2).
//
// Même mécanique qu'en A1/A2/B1 (voir expression-orale-prompts-b1-en.js) :
// l'appli lit le texte à voix haute, puis l'apprenant répond à l'oral avec
// son micro ; la checklist expectedPoints détecte les idées attendues.
//
// Contenu : les 10 sujets oraux B2 fournis par Ashley, alignés sur les
// paliers B2.1 → B2.12 (voir programme-b2-en.js), + 2 sujets ajoutés pour
// combler les paliers sans sujet oral (B2.9 Digital English — message vocal
// concis ; B2.11 One Day in English — imprévu du quotidien). Les réponses
// types d'Ashley sont reprises, corrigées si besoin et étoffées pour
// atteindre 60-120 mots.
//
// Champs : id, palier, from, callText, fr (traduction), focus, task,
// expectedPoints, model (réponse type, montrée APRÈS la réponse), rubric
// (barème sur 10 points pour la correction détaillée par IA).

export const EXPRESSION_ORALE_PROMPTS_B2_EN = [
  // ---- B2.1 Argumentation ----
  {
    id: 1,
    palier: "B2.1",
    from: "Debate host",
    callText: "Some argue that remote work destroys corporate culture, while others see it as the ultimate freedom. What is your standpoint, and how can companies balance both?",
    fr: "Certains affirment que le télétravail détruit la culture d'entreprise, tandis que d'autres y voient la liberté absolue. Quelle est ta position, et comment les entreprises peuvent-elles concilier les deux ?",
    focus: "Argumentation & choix de société : prendre position, justifier, anticiper la contre-objection, proposer une solution (claim → reason → example → counterargument → conclusion).",
    task: "State your position on remote work, justify it, acknowledge the opposing view and suggest how companies can balance both.",
    expectedPoints: [
      { label: "Prendre clairement position", keywords: ["from my perspective", "my standpoint", "in my view", "i'm convinced", "i firmly believe", "as i see it", "i would argue"] },
      { label: "Justifier avec un argument et un exemple", keywords: ["because", "since", "for instance", "for example", "this is why", "given that", "research shows"] },
      { label: "Anticiper la contre-objection", keywords: ["some people might argue", "admittedly", "it's true that", "granted", "although", "even though", "however", "nevertheless"] },
      { label: "Proposer un équilibre / une solution", keywords: ["hybrid", "balance", "combining", "a mix", "in-person", "on-site", "flexible", "days in the office"] },
    ],
    model: "From my perspective, remote work doesn't destroy corporate culture; rather, it forces it to evolve. Admittedly, spontaneous conversations at the coffee machine are harder to replace, and new employees may feel isolated. Nevertheless, remote work gives people autonomy and saves them hours of commuting; because they feel trusted, they are often more committed. Companies can therefore achieve a healthy balance by implementing a hybrid model, combining two days of in-person collaboration with three days of focused remote work, provided that those office days are used for genuine teamwork rather than for sitting on video calls.",
    rubric: [
      { criterion: "Task: clear standpoint + balancing solution", points: 2 },
      { criterion: "Argument structure: reason, example, counterargument, conclusion", points: 3 },
      { criterion: "Advanced connectors (nevertheless, whereas, provided that, therefore)", points: 2 },
      { criterion: "Grammatical accuracy and range", points: 2 },
      { criterion: "Fluency and intonation", points: 1 },
    ],
  },

  // ---- B2.2 Nuance & Certainty ----
  {
    id: 2,
    palier: "B2.2",
    from: "Podcast host",
    callText: "Do you believe that artificial intelligence will completely replace human creativity in the next decade? Express your degree of certainty using nuanced language.",
    fr: "Penses-tu que l'intelligence artificielle remplacera complètement la créativité humaine dans les dix prochaines années ? Exprime ton degré de certitude avec un langage nuancé.",
    focus: "Nuance & certitude : exprimer des degrés de certitude (certainty → probability → possibility → doubt) sans parler en termes absolus.",
    task: "Answer the question while clearly showing how certain you are, avoiding absolutes like always, never or everyone.",
    expectedPoints: [
      { label: "Exprimer un degré de certitude", keywords: ["highly unlikely", "unlikely", "likely", "probably", "definitely", "certainly", "i doubt", "i'm fairly sure", "it's doubtful"] },
      { label: "Nuancer avec des adverbes", keywords: ["arguably", "to some extent", "partly", "largely", "relatively", "potentially", "to a certain degree", "in some ways"] },
      { label: "Reconnaître ce que l'IA sait faire", keywords: ["while", "although", "can generate", "impressive", "useful", "efficient", "patterns", "admittedly"] },
      { label: "Expliquer ce qui manque à l'IA", keywords: ["lacks", "emotion", "emotional", "experience", "intention", "human touch", "feelings", "authentic", "genuine"] },
    ],
    model: "It is highly unlikely that AI will entirely replace human creativity within the next decade. While it can generate impressive patterns and huge amounts of content, it arguably lacks genuine emotional depth and lived experience, which are core to true artistic expression. That said, it will probably transform creative jobs to a large extent: designers, writers and musicians are likely to use it as a tool to speed up their work. So I'd say AI may well change how we create, but I doubt it will ever replace why we create.",
    rubric: [
      { criterion: "Task: a clear answer with an explicit degree of certainty", points: 2 },
      { criterion: "Range of nuance markers (highly unlikely, arguably, to some extent…)", points: 3 },
      { criterion: "Absolute statements avoided (always, never, everyone)", points: 2 },
      { criterion: "Grammatical accuracy (modals of probability, future)", points: 2 },
      { criterion: "Fluency", points: 1 },
    ],
  },

  // ---- B2.3 Register Master ----
  {
    id: 3,
    palier: "B2.3",
    from: "Communication coach",
    callText: "Imagine you are explaining a major technical failure to a casual friend, and then to your company's CEO. Briefly give a sample of both explanations.",
    fr: "Imagine que tu expliques une panne technique majeure à un ami, puis au PDG de ton entreprise. Donne brièvement un exemple des deux explications.",
    focus: "Maîtrise des registres : dire la même chose en registre familier puis formel (vocabulaire, structures, ton).",
    task: "Give two short versions of the same news: one casual (to a friend), one formal (to the CEO).",
    expectedPoints: [
      { label: "Version familière (ami)", keywords: ["hey", "totally", "crashed", "what a mess", "nightmare", "you won't believe", "guess what", "kind of", "basically"] },
      { label: "Version formelle (PDG)", keywords: ["good morning", "regrettably", "unfortunately", "i regret to inform", "we are currently experiencing", "outage", "disruption", "unforeseen"] },
      { label: "Rassurer sur l'action en cours (formel)", keywords: ["actively", "addressing", "working on", "resolve", "restore", "keep you informed", "update you", "our team"] },
      { label: "Contraste net entre les deux registres", keywords: ["to my friend", "to the ceo", "casually", "formally", "whereas", "on the other hand"] },
    ],
    model: "To my friend: \"Hey, you won't believe my day! Our servers totally crashed this morning, nothing worked for hours, what a mess! Everyone was running around like crazy.\" To the CEO: \"Good morning. I regret to inform you that we are currently experiencing an unforeseen system outage affecting our primary servers. Our technical team is actively addressing the issue, and we expect to restore full service within the next two hours. I will keep you informed of any developments and provide a detailed incident report by the end of the day.\"",
    rubric: [
      { criterion: "Task: both versions given, same information", points: 2 },
      { criterion: "Casual register natural (contractions, informal expressions)", points: 2 },
      { criterion: "Formal register precise (regrettably, outage, addressing, keep you informed)", points: 3 },
      { criterion: "Clear contrast between the two registers", points: 2 },
      { criterion: "Tone and intonation adapted to each listener", points: 1 },
    ],
  },

  // ---- B2.4 The Collocation Lab ----
  {
    id: 4,
    palier: "B2.4",
    from: "Job interviewer",
    callText: "Describe a challenging professional situation where you had to 'face a tough choice' or 'take heavy responsibility'. How did you handle it?",
    fr: "Décris une situation professionnelle difficile où tu as dû « faire face à un choix difficile » ou « assumer une lourde responsabilité ». Comment l'as-tu gérée ?",
    focus: "Collocations & précision lexicale : utiliser des combinaisons de mots naturelles (make a decision, take responsibility, meet a deadline…) dans un récit professionnel.",
    task: "Tell a short professional story using at least four natural collocations, and explain the outcome.",
    expectedPoints: [
      { label: "Poser la situation (passé)", keywords: ["last year", "a few years ago", "when i was", "i had to", "i was working", "at the time"] },
      { label: "Utiliser des collocations avec make / take", keywords: ["make a decision", "made a decision", "take responsibility", "took responsibility", "full responsibility", "take action", "took action", "into account", "made an effort", "make sense"] },
      { label: "Autres collocations naturelles", keywords: ["face a tough choice", "faced a tough choice", "meet a deadline", "met the deadline", "raise prices", "raised their prices", "reach an agreement", "reached an agreement", "run a risk", "launch an audit"] },
      { label: "Expliquer le résultat / ce que tu en retires", keywords: ["as a result", "in the end", "eventually", "successfully", "managed to", "i learned", "outcome", "paid off"] },
    ],
    model: "Last year, I had to face a tough choice when our main supplier abruptly raised their prices by twenty percent, just before a major deadline. I decided to take full responsibility for the situation instead of waiting for management. First, I launched an immediate audit of our costs and took into account every alternative. Then I contacted two other vendors and, after a week of tough negotiations, we reached an agreement with one of them. As a result, we met the deadline and built a more sustainable long-term partnership, which saved the company money.",
    rubric: [
      { criterion: "Task: a clear situation, action and outcome", points: 2 },
      { criterion: "At least four natural collocations used correctly", points: 4 },
      { criterion: "Narrative tenses accurate (past simple / continuous / perfect)", points: 2 },
      { criterion: "Fluency and coherence", points: 2 },
    ],
  },

  // ---- B2.5 Sound Like English ----
  {
    id: 5,
    palier: "B2.5",
    from: "Mr. Grant, sceptical partner",
    callText: "Convince a sceptical partner to invest in an eco-friendly project using strong persuasive phrasing and natural intonation.",
    fr: "Convaincs un partenaire sceptique d'investir dans un projet écologique en utilisant des formulations persuasives fortes et une intonation naturelle.",
    focus: "Prononciation & rhétorique : accent de phrase, rythme, intonation persuasive, formes réduites naturelles (connected speech).",
    task: "Persuade the partner in under a minute: stress the key words, use rhetorical phrases and end with a call to action.",
    expectedPoints: [
      { label: "Accroche persuasive", keywords: ["let's face it", "the truth is", "imagine", "here's the thing", "think about it", "the reality is", "make no mistake"] },
      { label: "Argument économique / stratégique", keywords: ["strategic", "invest", "investment", "return", "profit", "costs", "savings", "customers", "market"] },
      { label: "Conséquence de l'inaction (conditionnel)", keywords: ["if we don't", "if we do not", "unless we", "lag behind", "fall behind", "competitors", "miss out", "too late"] },
      { label: "Appel à l'action", keywords: ["let's", "now is the time", "right now", "join us", "i'm asking you", "we can't afford", "the time to act"] },
    ],
    model: "Let's face it: sustainability is no longer just a nice-to-have option; it's a strategic imperative. Our customers are asking for greener products, and regulations are getting stricter every year. This project will cut our energy costs by almost a third, so it's not just good for the planet, it's good for business. If we don't invest in green technologies right now, we will inevitably lag behind our competitors. So here's what I'm asking: give this project six months. I'm convinced you won't regret it.",
    rubric: [
      { criterion: "Task: a persuasive case with a clear call to action", points: 2 },
      { criterion: "Rhetorical devices (hook, contrast, rule of three, rhetorical questions)", points: 2 },
      { criterion: "Sentence stress and intonation that highlight key words", points: 3 },
      { criterion: "Natural connected speech (weak forms, linking, contractions)", points: 2 },
      { criterion: "Grammatical accuracy", points: 1 },
    ],
  },

  // ---- B2.6 Diplomatic English ----
  {
    id: 6,
    palier: "B2.6",
    from: "Ms. Carter, furious client",
    callText: "A client is furious because their project is two weeks late. How do you handle the phone call diplomatically to de-escalate the tension?",
    fr: "Une cliente est furieuse parce que son projet a deux semaines de retard. Comment gères-tu l'appel avec diplomatie pour faire retomber la tension ?",
    focus: "Diplomatie & négociation : reconnaître l'émotion, désamorcer, proposer des solutions sans se justifier à l'excès.",
    task: "Speak directly to the client: acknowledge her frustration, take ownership and propose concrete next steps.",
    expectedPoints: [
      { label: "Reconnaître l'émotion du client", keywords: ["i completely understand", "i understand your frustration", "i can see why", "you're right", "you are right", "i hear you", "understandably"] },
      { label: "Assumer sans excuses excessives", keywords: ["i apologise", "i apologize", "full responsibility", "we take full responsibility", "that's on us", "we should have", "sincerely sorry"] },
      { label: "Proposer des mesures concrètes", keywords: ["let's look at", "mitigation", "immediate steps", "priority", "expedite", "expedited", "extra resources", "new date", "revised schedule"] },
      { label: "S'engager personnellement / rassurer", keywords: ["personally", "oversee", "i will", "i'll", "keep you updated", "daily update", "you have my word", "direct line"] },
    ],
    model: "Ms. Carter, I completely understand your frustration, and you are entirely right to expect punctuality. A two-week delay is not the standard we hold ourselves to, and I take full responsibility for it. Here is what I propose: let's look at immediate mitigation steps together. I've already assigned two additional developers to your project, and we can deliver the most critical features by next Friday. I will personally oversee the expedited delivery and send you a short progress update every evening until it's finished. Would that work for you?",
    rubric: [
      { criterion: "Task: tension acknowledged + concrete plan offered", points: 3 },
      { criterion: "Diplomatic language (softeners, empathy, no blame)", points: 3 },
      { criterion: "Negotiation moves (proposal, commitment, checking agreement)", points: 2 },
      { criterion: "Calm, controlled tone and accuracy", points: 2 },
    ],
  },

  // ---- B2.7 Humour, Irony & Sarcasm ----
  {
    id: 7,
    palier: "B2.7",
    from: "Colleague at lunch",
    callText: "Give a slightly sarcastic or humorous take on how modern office meetings could easily be replaced by a simple email.",
    fr: "Donne une version légèrement sarcastique ou humoristique de la façon dont les réunions de bureau modernes pourraient facilement être remplacées par un simple email.",
    focus: "Humour, ironie & sarcasme : dire le contraire de ce qu'on pense, exagération, understatement, ton pince-sans-rire (deadpan).",
    task: "Make a short humorous or ironic comment about pointless meetings, using exaggeration or understatement.",
    expectedPoints: [
      { label: "Ouverture ironique", keywords: ["ah, the joy", "ah the joy", "oh, i love", "nothing beats", "my favourite", "my favorite", "what a treat", "truly"] },
      { label: "Exagération", keywords: ["hours", "forever", "endless", "every single", "at least", "the entire", "twenty slides", "never-ending"] },
      { label: "Le cœur du sarcasme : ça aurait pu être un email", keywords: ["could have been an email", "have been an email", "could've been an email", "one email", "a simple email", "two lines", "a quick message", "reply all"] },
      { label: "Chute / understatement", keywords: ["slightly", "a tiny bit", "a little", "another meeting", "schedule a meeting", "productivity", "cornerstone"] },
    ],
    model: "Ah, the joy of a one-hour meeting that could easily have been an email, truly the cornerstone of corporate productivity. Twelve people, twenty slides, and at least ten minutes spent asking, \"Can you hear me? You're on mute.\" Then, at the very end, someone bravely suggests we gather again next week to schedule another meeting to discuss the previous meeting. Honestly, I'm starting to think our most productive moment of the day is the two seconds after someone says, \"I think we can end early.\"",
    rubric: [
      { criterion: "Task: a clearly humorous / ironic take on the topic", points: 2 },
      { criterion: "Irony or sarcasm recognisable (saying the opposite of what you mean)", points: 3 },
      { criterion: "Use of exaggeration and/or understatement", points: 2 },
      { criterion: "Deadpan delivery and intonation", points: 2 },
      { criterion: "Accuracy", points: 1 },
    ],
  },

  // ---- B2.8 Read Between the Lines ----
  {
    id: 8,
    palier: "B2.8",
    from: "Mentor",
    callText: "When a colleague tells you, 'That's an interesting proposal, we'll certainly think about it,' what subtext or hidden meaning can you extract from that?",
    fr: "Quand un collègue te dit « C'est une proposition intéressante, nous allons certainement y réfléchir », quel sous-entendu ou sens caché peux-tu en tirer ?",
    focus: "Lire entre les lignes : identifier le sous-entendu, l'intention et l'attitude derrière une formule polie.",
    task: "Explain the literal meaning, then the probable real meaning, and say how you would react.",
    expectedPoints: [
      { label: "Distinguer sens littéral et sens réel", keywords: ["literally", "on the surface", "at face value", "actually means", "really means", "what they mean", "subtext"] },
      { label: "Identifier un refus poli", keywords: ["polite rejection", "polite no", "soft no", "not going to happen", "rejection", "turn it down", "brush-off", "not interested"] },
      { label: "Nuancer selon le contexte", keywords: ["depends", "context", "tone", "body language", "often", "usually", "not always", "it could also"] },
      { label: "Dire comment réagir", keywords: ["follow up", "ask for feedback", "clarify", "i would ask", "next step", "timeline", "check"] },
    ],
    model: "On the surface, it sounds positive, but in professional settings that phrase is often a polite rejection when you read between the lines. It usually means: \"We don't want to hurt your feelings, but this idea is not going to happen.\" The word \"interesting\" is neutral rather than enthusiastic, and \"we'll think about it\" commits them to nothing. Of course, it depends on the tone and context. To find out, I would politely follow up and ask for a concrete next step, for example a date to discuss it again.",
    rubric: [
      { criterion: "Task: literal vs implied meaning clearly explained", points: 3 },
      { criterion: "Analysis of key words (interesting, certainly, think about it)", points: 2 },
      { criterion: "Nuance: context, tone and uncertainty acknowledged", points: 2 },
      { criterion: "Vocabulary of implication (subtext, imply, suggest, polite rejection)", points: 2 },
      { criterion: "Fluency", points: 1 },
    ],
  },

  // ---- B2.9 Digital English (ajouté) ----
  {
    id: 9,
    palier: "B2.9",
    from: "Sarah, your manager (voicemail)",
    callText: "Hi, it's Sarah. I'm stuck in meetings all day, so just leave me a quick voice message after the beep: where are we with the client presentation, and is there anything you need from me before Thursday? Thanks!",
    fr: "Salut, c'est Sarah. Je suis coincée en réunion toute la journée, alors laisse-moi juste un petit message vocal après le bip : où en est-on de la présentation client, et as-tu besoin de quelque chose de ma part avant jeudi ? Merci !",
    focus: "Communication numérique concise : message vocal professionnel clair et court (30 secondes), adapté au canal.",
    task: "Leave a concise voice message (about 30 seconds): identify yourself, give a clear status, make one precise request and close.",
    expectedPoints: [
      { label: "S'identifier et donner le contexte", keywords: ["hi sarah", "it's me", "this is", "calling about", "quick update", "regarding", "about the presentation"] },
      { label: "Donner un point d'avancement clair", keywords: ["done", "finished", "almost", "on track", "ready", "draft", "slides", "percent", "nearly"] },
      { label: "Formuler une demande précise", keywords: ["i need", "could you", "would you mind", "can you", "approve", "sign off", "feedback", "the figures", "by wednesday"] },
      { label: "Conclure brièvement", keywords: ["that's all", "thanks", "speak soon", "talk soon", "call me back", "no need to call", "bye"] },
    ],
    model: "Hi Sarah, it's Alex, just a quick update on the client presentation. The slides are about ninety percent done: the market analysis and the pricing section are finished, and I'm polishing the final recommendations today. There's just one thing I need from you: could you confirm the Q3 budget figures by Wednesday midday, so I can add them before the rehearsal? Other than that, we're on track for Thursday. No need to call back, a quick text is fine. Thanks, speak soon!",
    rubric: [
      { criterion: "Task: status + one clear request + closing", points: 3 },
      { criterion: "Concision: short, no unnecessary details (≈30 seconds)", points: 3 },
      { criterion: "Register adapted to a voice message to a manager (friendly but professional)", points: 2 },
      { criterion: "Clear pronunciation and pace for a recording", points: 2 },
    ],
  },

  // ---- B2.10 Thinking in English ----
  {
    id: 10,
    palier: "B2.10",
    from: "The Roots coach (10-second challenge)",
    callText: "Stop translating mentally from your native language. Express spontaneously how you feel about the changing job market today.",
    fr: "Arrête de traduire mentalement depuis ta langue maternelle. Exprime spontanément ce que tu ressens face à l'évolution actuelle du marché du travail.",
    focus: "Pensée directe en anglais : répondre spontanément (commencer en moins de 10 secondes), priorité à la communication puis à la fluidité et enfin à la précision.",
    task: "Start speaking within 10 seconds and share your feelings and one concrete example, without preparing your answer.",
    expectedPoints: [
      { label: "Exprimer un ressenti", keywords: ["i feel", "honestly", "to be honest", "it's exciting", "worried", "anxious", "optimistic", "a bit scary", "i'm hopeful"] },
      { label: "Décrire le changement", keywords: ["shifting", "changing", "fast", "artificial intelligence", "automation", "remote", "new jobs", "disappearing", "skills"] },
      { label: "Donner un exemple ou une expérience", keywords: ["for example", "for instance", "in my job", "in my field", "i've noticed", "i have noticed", "a friend of mine", "recently"] },
      { label: "Conclure par une idée ou une attitude", keywords: ["adaptability", "adapt", "keep learning", "lifelong learning", "the key", "the only way", "stay curious", "upskill"] },
    ],
    model: "Honestly, I feel both excited and a bit nervous. The job market is shifting so fast that adaptability has become the ultimate currency. You simply can't rely on a static skill set anymore. For example, in my field, tasks that took me a whole day three years ago are now partly done by software in minutes. At first that scared me, but now I see it as a chance to focus on the human side of my job. So I'd say lifelong learning is the only way forward.",
    rubric: [
      { criterion: "Spontaneity: starts quickly, no long hesitation", points: 3 },
      { criterion: "Task: feelings + description of change + example", points: 2 },
      { criterion: "Natural English structures (no word-for-word translation, no French calques)", points: 3 },
      { criterion: "Fluency and recovery strategies (rephrasing, fillers like 'I mean')", points: 2 },
    ],
  },

  // ---- B2.11 One Day in English (ajouté) ----
  {
    id: 11,
    palier: "B2.11",
    from: "Restaurant host",
    callText: "Good evening! I'm terribly sorry, but it looks like your reservation for four at eight o'clock was given away by mistake. We can offer you a table on the terrace in about twenty-five minutes, or a spot at the bar right now. What would you like to do?",
    fr: "Bonsoir ! Je suis vraiment désolé, mais il semble que votre réservation pour quatre personnes à vingt heures ait été donnée par erreur. Nous pouvons vous proposer une table en terrasse d'ici environ vingt-cinq minutes, ou une place au bar tout de suite. Que souhaitez-vous faire ?",
    focus: "Simulation d'une journée en anglais : réagir à un imprévu sans préparation, exprimer son mécontentement poliment, négocier et décider.",
    task: "React on the spot: express your disappointment politely, negotiate a better arrangement and make a decision.",
    expectedPoints: [
      { label: "Exprimer sa déception poliment", keywords: ["that's disappointing", "i'm a bit disappointed", "to be honest", "i did book", "we booked", "confirmation", "that's a shame", "frustrating"] },
      { label: "Négocier une compensation / un arrangement", keywords: ["would it be possible", "could you", "complimentary", "on the house", "discount", "drinks", "in the meantime", "while we wait"] },
      { label: "Comparer les options", keywords: ["terrace", "bar", "rather", "prefer", "i'd rather", "whereas", "since", "four of us"] },
      { label: "Prendre une décision claire", keywords: ["we'll take", "we'll wait", "let's go with", "that works", "fine", "deal", "ok then", "we'll have"] },
    ],
    model: "Oh, that's a bit disappointing. We booked two weeks ago and I actually have the confirmation email here. But these things happen. Since there are four of us, the bar wouldn't really work, so I'd rather wait for the terrace table. Would it be possible to have a drink at the bar while we wait, maybe on the house given the mix-up? And could you make sure the terrace is heated? It's getting quite chilly. If that's OK, we'll take the terrace in twenty-five minutes. Thank you for being so understanding.",
    rubric: [
      { criterion: "Task: reaction + negotiation + clear decision", points: 3 },
      { criterion: "Polite but firm tone (disappointment without aggression)", points: 2 },
      { criterion: "Negotiation language (would it be possible, given…, if that's OK)", points: 2 },
      { criterion: "Spontaneity and fluency", points: 2 },
      { criterion: "Accuracy", points: 1 },
    ],
  },

  // ---- B2.12 B2 Real World ----
  {
    id: 12,
    palier: "B2.12",
    from: "Head of department",
    callText: "You are managing a sudden crisis: a key team member just resigned on the eve of a major product launch. What is your immediate action plan?",
    fr: "Tu gères une crise soudaine : un membre clé de l'équipe vient de démissionner à la veille d'un grand lancement de produit. Quel est ton plan d'action immédiat ?",
    focus: "Mission réelle / gestion de crise : comprendre, réfléchir, décider et présenter un plan d'action structuré face à l'imprévu.",
    task: "Present a clear, prioritised action plan, using the conditional (I would…) and sequencing words.",
    expectedPoints: [
      { label: "Garder son calme et rassurer l'équipe", keywords: ["remain calm", "stay calm", "reassure", "team morale", "don't panic", "keep calm", "reassuring"] },
      { label: "Réorganiser les tâches", keywords: ["redistribute", "reassign", "delegate", "tasks", "strengths", "cover", "take over", "priorities"] },
      { label: "Actions concrètes et immédiates", keywords: ["emergency meeting", "briefing", "handover", "contact", "freelancer", "postpone", "plan b", "backup", "stakeholders"] },
      { label: "Structurer le plan (conditionnel + étapes)", keywords: ["first", "then", "next", "finally", "i would", "i'd", "meanwhile", "in parallel"] },
    ],
    model: "First, I would remain calm to reassure the rest of the team, because panic spreads fast. Then I would ask the person who resigned for a proper handover tonight: passwords, files and the status of their tasks. Next, I would redistribute critical tasks according to each member's core strengths and hold an emergency briefing to realign our priorities. In parallel, I'd contact a trusted freelancer as a backup. Finally, I would inform stakeholders honestly: if a non-essential feature has to be postponed, it's better to say so now than to fail publicly tomorrow.",
    rubric: [
      { criterion: "Task: realistic, prioritised crisis plan", points: 3 },
      { criterion: "Structure and sequencing (first, then, in parallel, finally)", points: 2 },
      { criterion: "Conditional forms used correctly (I would…, if…)", points: 2 },
      { criterion: "Professional vocabulary (handover, stakeholders, priorities…)", points: 2 },
      { criterion: "Fluency under pressure", points: 1 },
    ],
  },
];
