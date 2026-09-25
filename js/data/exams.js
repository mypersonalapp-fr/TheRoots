// The Roots — EXAMENS de fin de palier (phase d'immersion, à partir du B1).
//
// Chargé par lessons.html (balise <script src="js/data/exams.js?v=…">, comme
// lessons-b1.js). Quand un palier a un examen ici, l'étape « Contrôle » de ce
// palier devient cet examen (au lieu du QCM de la leçon, qui reste utilisé pour
// tout le reste : missions, renforts, pratique…). Si ce fichier est absent, ou
// si un palier n'a pas d'examen, rien ne change : QCM classique.
//
// L'examen est entièrement en anglais (consignes comprises) ; chaque consigne
// a sa traduction française (champs …Fr), affichée en petit en dessous.
//
// ---------------------------------------------------------------------------
// FORMAT — window.LESSON_EXAMS[numéro de leçon] = {
//   code:        "B1.1"            code du palier (sert aussi de clé pour le résultat enregistré)
//   title, titleFr                 titre de l'examen (anglais / français)
//   objective, objectiveFr         objectif (anglais / français)
//   sections: [                    une section = un écran ; total conseillé = 100 points
//     {
//       id:      "vocab"           identifiant unique dans l'examen (sert à la sauvegarde)
//       num:     "I"               numéro affiché
//       title, titleFr             titre de la section
//       points:  15                points de la section
//       skill:   "vo"              jauge : vo vocabulaire · gr grammaire · ce compréhension écrite ·
//                                  co compréhension orale · ee expression écrite · eo expression orale
//       instructions, instructionsFr   consigne (anglais / français)
//       type:    "fill" | "mcq" | "ai-text" | "ai-oral"
//
//       — type "fill" (phrases à trous tapées) —
//       bank:  ["become", …]       banque de mots (facultatif, affichée en pastilles)
//       items: [{
//         header: { en, fr }       (facultatif) sous-consigne affichée avant cet item (A., B., C.)
//         text:  "… ___ … ___ …"   la phrase ; chaque « ___ » est un trou
//         blanks: [["is wearing", "'s wearing"], ["prefers"]]
//                                  une liste de réponses acceptées PAR trou (la 1re est la
//                                  réponse affichée en correction). Comparaison souple :
//                                  majuscules, espaces, apostrophes ’/', contractions
//                                  (I've = I have, 'm = am, 'll = will, 're = are, n't = not…),
//                                  orthographe UK/US (travelled = traveled), sujet retapé
//                                  (« I have lived » accepté pour « I ___ »).
//         why:   "…"               courte explication en français (affichée en correction)
//         points: 2.5              (facultatif) sinon points de la section / nombre d'items ;
//                                  les points d'un item sont répartis entre ses trous
//       }]
//
//       — type "mcq" (QCM, 1 seul essai) —
//       passage: "…"               (facultatif) texte à lire (paragraphes séparés par une ligne vide)
//       items: [{
//         audio: "…" ou [{ who:"A", text:"…" }, { who:"B", text:"…" }]
//                                  (facultatif) enregistrement lu par la synthèse vocale,
//                                  texte caché jusqu'à la correction ; un dialogue alterne
//                                  deux hauteurs de voix
//         q, qFr                   question (anglais / français)
//         opts: ["…", …], correct: 0, why: "…" (français)
//         points                   (facultatif) sinon points de la section / nombre d'items
//       }]
//
//       — types "ai-text" (écrit libre) et "ai-oral" (au micro), corrigés par l'IA —
//       prompt, promptFr           le sujet (anglais / français)
//       quotes: ["…", …]           (facultatif) phrases à afficher en exergue
//       minWords, maxWords         (facultatif) compteur de mots ; en dessous du minimum,
//                                  l'apprenant doit confirmer avant d'envoyer
//       targetSeconds              (ai-oral, facultatif) durée conseillée
//       rubric                     barème envoyé à l'IA (en anglais, points détaillés)
//       reference                  (facultatif) éléments attendus, pour l'IA seulement
//     }
//   ]
// }
//
// AJOUTER L'EXAMEN D'UN AUTRE PALIER : copier le bloc E[27] ci-dessous, changer
// le numéro de leçon (B1.2 = 28, B1.3 = 29, … B1.12 = 38, B2.1 = 40 …), le code
// et le contenu. Rien d'autre à toucher dans lessons.html.
// ---------------------------------------------------------------------------

window.LESSON_EXAMS = window.LESSON_EXAMS || {};

(function (E) {
  // =========================================================================
  // B1.1 — MY IDENTITY TODAY (leçon 27) — contrôle écrit d'Ashley (25/09),
  // complété d'une compréhension écrite, d'une compréhension orale et d'une
  // partie orale au micro.
  // =========================================================================
  E[27] = {
    code: "B1.1",
    title: "Level test: B1.1 – My Identity Today",
    titleFr: "Contrôle de niveau : B1.1 – Mon identité aujourd'hui",
    objective: "Pass level B1.1 and move on to B1.2: vocabulary, verbs, grammar, tenses, reading, listening, writing and speaking.",
    objectiveFr: "Valider le niveau B1.1 et passer au B1.2 : vocabulaire, verbes, grammaire, conjugaison, compréhension écrite et orale, expression écrite et orale.",
    sections: [
      // ---------------------------------------------------------------- I
      {
        id: "vocab", num: "I", title: "Vocabulary & Verbs", titleFr: "Vocabulaire et verbes",
        points: 15, skill: "vo", type: "fill",
        instructions: "Complete the sentences with the right word or verb from the list. Change the form of the word if necessary.",
        instructionsFr: "Complète les phrases avec le mot ou le verbe qui convient dans la liste. Change la forme du mot si nécessaire.",
        bank: ["become", "change", "feel", "seem", "prefer", "enjoy", "avoid", "matter", "depend", "personality", "lifestyle", "habits", "preferences"],
        items: [
          { text: "My best friend has a very outgoing ___; she loves meeting new people.",
            blanks: [["personality"]],
            why: "« an outgoing personality » = une personnalité extravertie. Il faut un nom après l'adjectif « outgoing »." },
          { text: "Since moving to the countryside, my daily ___ have completely transformed; I wake up earlier.",
            blanks: [["habits"]],
            why: "« my daily habits » = mes habitudes quotidiennes. Le verbe « have » (pluriel) impose un nom au pluriel : « lifestyle » est singulier." },
          { text: "I really ___ reading autobiographies rather than fiction.",
            blanks: [["enjoy", "prefer"]],
            why: "« I really enjoy reading… » = j'aime vraiment lire… (« prefer » est aussi possible avec « rather than »). Après « enjoy », le verbe prend -ing." },
          { text: "Do you ___ working in a team or working independently?",
            blanks: [["prefer"]],
            why: "« Do you prefer A or B? » = tu préfères A ou B ? Le choix entre deux options appelle « prefer »." },
          { text: "Over the last five years, my career goals have started to ___ significantly.",
            blanks: [["change"]],
            why: "« started to change » = ont commencé à changer. Après « to », le verbe reste à la base verbale." },
          { text: "I try to ___ stressful situations whenever possible by practicing meditation.",
            blanks: [["avoid"]],
            why: "« to avoid » = éviter. Après « try to », base verbale." },
          { text: "Does it ___ to you whether we meet on Saturday or Sunday?",
            blanks: [["matter"]],
            why: "« Does it matter to you…? » = est-ce que ça t'importe… ? Après « does », base verbale (pas de -s)." },
          { text: "Whether we go out for dinner ___ on the weather.",
            blanks: [["depends", "will depend"]],
            why: "« depend on » = dépendre de. Le sujet (« Whether we go out… ») est singulier : présent simple avec -s → « depends »." }
        ]
      },
      // --------------------------------------------------------------- II
      {
        id: "grammar", num: "II", title: "Grammar & Conjugation", titleFr: "Grammaire et conjugaison",
        points: 25, skill: "gr", type: "fill",
        instructions: "Put the verbs in brackets into the correct form. Type only the missing words.",
        instructionsFr: "Mets les verbes entre parenthèses à la forme qui convient. Tape seulement les mots manquants.",
        items: [
          { header: { en: "A. Present Simple, Present Continuous & Present Perfect", fr: "A. Présent simple, présent continu et present perfect" },
            text: "Look at him! He ___ (wear) a suit today, which is unusual because he usually ___ (prefer) casual clothes.",
            blanks: [["is wearing", "'s wearing"], ["prefers"]],
            why: "« today » + action en cours visible → Present Continuous (is wearing) ; « usually » = habitude → Present Simple, avec -s à la 3e personne (prefers)." },
          { text: "I ___ (live) in this city for five years, and I still love it here.",
            blanks: [["have lived", "have been living", "'ve lived", "'ve been living"]],
            why: "« for five years » + situation qui dure encore → Present Perfect (have lived / have been living). En français on dit « j'habite depuis », en anglais JAMAIS le présent simple ici." },
          { text: "Right now, she ___ (try) to improve her lifestyle by eating healthier food.",
            blanks: [["is trying", "'s trying"]],
            why: "« Right now » = en ce moment → Present Continuous : is trying." },
          { text: "How long ___ you ___ (know) your best friend?",
            blanks: [["have"], ["known"]],
            why: "« How long…? » + situation qui dure → Present Perfect : How long have you known…? (know → known). « know » ne se met pas au continu." },
          { text: "Every morning, I ___ (wake) up at 7:00 AM and check my emails.",
            blanks: [["wake"]],
            why: "« Every morning » = habitude → Present Simple : I wake up." },
          { header: { en: "B. Past Simple vs Present Perfect", fr: "B. Prétérit ou present perfect" },
            text: "When I ___ (be) a child, I ___ (play) tennis every weekend.",
            blanks: [["was"], ["played", "used to play", "would play"]],
            why: "« When I was a child » = période terminée → Past Simple : was, played (« used to play » est aussi correct pour une habitude passée)." },
          { text: "I ___ (travel) to Spain three times so far this year.",
            blanks: [["have travelled", "have traveled", "have been", "'ve travelled", "'ve traveled", "'ve been"]],
            why: "« so far this year » = période pas terminée → Present Perfect : I have travelled (UK) / traveled (US). « I've been to Spain » est aussi très naturel." },
          { header: { en: "C. Used to / Be used to / Get used to", fr: "C. Used to / be used to / get used to" },
            text: "When I lived in London, I ___ (take) the red double-decker bus every day, but now I live in Paris.",
            blanks: [["used to take"]],
            why: "Habitude passée qui n'existe plus → « used to + base verbale » : I used to take (je prenais)." },
          { text: "At first, waking up at 5:00 AM was difficult, but now I ___ (wake) up early without any problem.",
            blanks: [["am used to waking", "'m used to waking", "have got used to waking", "have gotten used to waking", "'ve got used to waking", "'ve gotten used to waking", "have become used to waking", "'ve become used to waking"]],
            why: "« now » + être habitué → « be used to + -ing » : I am used to waking up (ou « I have got used to waking up » = je me suis habitué(e)). Attention : après « used to » dans ce sens, le verbe prend -ing." },
          { text: "Don't worry about the noisy neighbors; you ___ (it) soon.",
            blanks: [["will get used to it", "'ll get used to it", "are going to get used to it", "'re going to get used to it"]],
            why: "« soon » + s'habituer (processus à venir) → « get used to » au futur : you will get used to it (tu vas t'y habituer)." }
        ]
      },
      // -------------------------------------------------------------- III
      {
        id: "secret", num: "III", title: "Secret English", titleFr: "Secret English (les pièges de l'anglais)",
        points: 10, skill: "gr", type: "ai-text",
        instructions: "Briefly explain the difference in meaning between the two sentences below, then give your own example for each one. You may answer in English or in French.",
        instructionsFr: "Explique brièvement la différence de sens entre les deux phrases ci-dessous, puis donne ton propre exemple pour chacune. Tu peux répondre en anglais ou en français.",
        quotes: ["1. \"I used to live in New York.\"", "2. \"I am used to living in New York.\""],
        prompt: "Explain the difference, then give one example for each structure.",
        promptFr: "Explique la différence, puis donne un exemple pour chaque structure.",
        minWords: 25,
        rubric: "The learner may answer in English OR in French: do not penalise French. 3 points: correct explanation of sentence 1 (\"used to + base verb\" = a past habit or state that is no longer true: I lived in New York before, I don't now). 3 points: correct explanation of sentence 2 (\"be used to + -ing\" = to be accustomed to something now: living in New York is normal/familiar for me). 2 points: a correct personal example with \"used to + base verb\". 2 points: a correct personal example with \"be used to + -ing\" (or a noun). Deduct points for grammar errors in the examples (e.g. \"I am used to live\").",
        reference: "Sentence 1: past habit/state, finished (= j'habitais à New York avant, plus maintenant). Sentence 2: present familiarity (= j'ai l'habitude de vivre à New York, c'est normal pour moi). Examples: \"I used to smoke, but I stopped.\" / \"I'm used to getting up early.\""
      },
      // --------------------------------------------------------------- IV
      {
        id: "writing", num: "IV", title: "Writing Mission", titleFr: "Mission d'écriture",
        points: 20, skill: "ee", type: "ai-text",
        instructions: "Write a structured text of about 150 to 200 words.",
        instructionsFr: "Rédige un texte structuré et argumenté d'environ 150 à 200 mots.",
        prompt: "Introduce yourself in detail to someone you have just met. Explain your personality, your current habits and your tastes, and describe three important changes in your life by comparing your present with your past (use the structures you have studied, such as \"used to\" and the Present Perfect).",
        promptFr: "Présente-toi de manière développée à quelqu'un que tu viens de rencontrer. Explique ta personnalité, tes habitudes actuelles, tes goûts, et décris trois changements importants dans ta vie en comparant ton présent avec ton passé (en utilisant notamment les structures étudiées comme « used to » ou le Present Perfect).",
        minWords: 150, maxWords: 200,
        rubric: "Total 20 points. Task achievement (6 pts): the learner introduces themself, describes personality, current habits and tastes, and describes THREE important life changes comparing past and present (2 pts lost per missing element, proportionally). Grammar (6 pts): accurate use of Present Simple / Present Perfect / Past Simple and of \"used to\" / \"be used to\" / \"get used to\"; B1-level accuracy expected. Vocabulary (4 pts): range and precision of vocabulary about identity, personality, lifestyle and change (B1.1). Organisation (4 pts): clear structure, paragraphs, linking words (first, however, since then, nowadays…). Length: about 150-200 words; deduct up to 2 points if clearly under 120 words or over 260 words.",
        reference: "Expected elements: introduction, personality adjectives, present habits (Present Simple), tastes (enjoy/prefer + -ing), three changes with then/now comparison (used to…, but now…; I have… since/for…)."
      },
      // ---------------------------------------------------------------- V
      {
        id: "reading", num: "V", title: "Reading Comprehension", titleFr: "Compréhension écrite",
        points: 10, skill: "ce", type: "mcq",
        instructions: "Read the text, then choose the right answer for each question.",
        instructionsFr: "Lis le texte, puis choisis la bonne réponse pour chaque question.",
        passage: "My name is Daniel and I'm thirty-four. Ten years ago, I was a shy accountant in Manchester who spent most evenings alone in front of the TV. I used to think that my personality couldn't change. Then, in 2019, my company sent me to Lisbon for six months, and everything started to move.\n\nAt first, it was hard to live in a city where I didn't speak the language. But little by little, I got used to asking strangers for help, and I discovered that I actually enjoy meeting new people. I've lived in Lisbon for five years now, and I've never regretted my decision.\n\nToday, my lifestyle is very different. I cycle to work instead of driving, I cook fresh food, and I've joined a hiking club. My friends back home say I seem more relaxed. I still prefer quiet weekends to big parties — that part of me hasn't changed! But I'm used to being outside my comfort zone now, and I think that's the most important change of all.",
        items: [
          { q: "What was Daniel like ten years ago?", qFr: "Comment était Daniel il y a dix ans ?",
            opts: ["Outgoing and sporty", "Shy and quite lonely", "Stressed because he travelled a lot", "Unhappy with his job in Lisbon"], correct: 1,
            why: "« I was a shy accountant… who spent most evenings alone » : timide et souvent seul." },
          { q: "Why did Daniel go to Lisbon?", qFr: "Pourquoi Daniel est-il allé à Lisbonne ?",
            opts: ["He wanted to learn Portuguese.", "He followed a friend.", "His company sent him there.", "He lost his job in Manchester."], correct: 2,
            why: "« my company sent me to Lisbon for six months » : c'est son entreprise qui l'y a envoyé." },
          { q: "What was difficult for him at first?", qFr: "Qu'est-ce qui était difficile pour lui au début ?",
            opts: ["Living in a city where he didn't speak the language", "Finding a flat", "Cycling to work", "Cooking fresh food"], correct: 0,
            why: "« At first, it was hard to live in a city where I didn't speak the language »." },
          { q: "Which of these is NOT part of his life today?", qFr: "Laquelle de ces activités ne fait PAS partie de sa vie aujourd'hui ?",
            opts: ["Cycling to work", "Hiking with a club", "Cooking fresh food", "Going to big parties every weekend"], correct: 3,
            why: "« I still prefer quiet weekends to big parties » : il préfère toujours les week-ends calmes." },
          { q: "\"I'm used to being outside my comfort zone now\" means that Daniel…", qFr: "« I'm used to being outside my comfort zone now » veut dire que Daniel…",
            opts: ["is now comfortable with new situations.", "was outside his comfort zone in the past, but not any more.", "wants to go back to his old life.", "finds new situations more and more difficult."], correct: 0,
            why: "« be used to + -ing » = être habitué à : sortir de sa zone de confort est devenu normal pour lui (≠ « used to » = habitude passée)." }
        ]
      },
      // --------------------------------------------------------------- VI
      {
        id: "listening", num: "VI", title: "Listening Comprehension", titleFr: "Compréhension orale",
        points: 10, skill: "co", type: "mcq",
        instructions: "Listen to each recording (you can play it again), then choose the right answer.",
        instructionsFr: "Écoute chaque enregistrement (tu peux le réécouter), puis choisis la bonne réponse.",
        items: [
          { audio: "Hi, it's Emma. I just wanted to tell you that I've finally changed jobs! I used to work in a bank, but since March I've been working for a small travel company. It's less money, but I'm much happier. Call me back when you can!",
            q: "What has Emma done recently?", qFr: "Qu'a fait Emma récemment ?",
            opts: ["She has moved to a new city.", "She has changed jobs.", "She has started working in a bank.", "She has booked a holiday."], correct: 1,
            why: "« I've finally changed jobs… I used to work in a bank, but since March I've been working for a small travel company »." },
          { audio: [{ who: "A", text: "So, how long have you known Mark?" }, { who: "B", text: "Oh, for ages! We met at university, about fifteen years ago. He hasn't changed at all." }],
            q: "How long have the two friends known each other?", qFr: "Depuis combien de temps les deux amis se connaissent-ils ?",
            opts: ["Since last year", "For five years", "For about fifteen years", "Since they started work"], correct: 2,
            why: "« We met at university, about fifteen years ago » : environ quinze ans." },
          { audio: "When I first moved to Canada, the winters were a nightmare. Minus twenty degrees! But after three years here, I'm used to the cold. I even go running when it's snowing.",
            q: "How does the speaker feel about the cold now?", qFr: "Que ressent la personne face au froid maintenant ?",
            opts: ["It's normal for them now.", "They still hate it.", "They have moved to a warmer country.", "They never go out in winter."], correct: 0,
            why: "« I'm used to the cold » = je suis habitué(e) au froid : c'est devenu normal." },
          { audio: [{ who: "A", text: "Do you still play the guitar?" }, { who: "B", text: "Not really. I used to play every day when I was a teenager, but now I prefer painting. It helps me relax." }],
            q: "What does the second speaker do to relax now?", qFr: "Que fait la deuxième personne pour se détendre maintenant ?",
            opts: ["Playing the guitar", "Going running", "Listening to music", "Painting"], correct: 3,
            why: "« I used to play every day… but now I prefer painting. It helps me relax. » La guitare, c'était avant." },
          { audio: "People say I'm quite organised, and it's true: I plan everything. But my sister is the opposite. She's very spontaneous and she hates making plans. Funnily enough, we get on really well.",
            q: "Which sentence is true?", qFr: "Quelle phrase est vraie ?",
            opts: ["The speaker hates making plans.", "The two sisters often argue.", "The sisters are very different, but they get on well.", "The sister is more organised than the speaker."], correct: 2,
            why: "« my sister is the opposite… we get on really well » : très différentes, mais elles s'entendent bien." }
        ]
      },
      // -------------------------------------------------------------- VII
      {
        id: "speaking", num: "VII", title: "Speaking", titleFr: "Expression orale",
        points: 10, skill: "eo", type: "ai-oral",
        instructions: "Press the microphone and speak for about one minute. You can try again, or add to your answer. If the microphone doesn't work, type what you would say.",
        instructionsFr: "Appuie sur le micro et parle environ une minute. Tu peux recommencer, ou compléter ta réponse. Si le micro ne fonctionne pas, écris ce que tu dirais.",
        prompt: "Introduce yourself to someone you've just met and describe one important change in your life, comparing then and now.",
        promptFr: "Présente-toi à quelqu'un que tu viens de rencontrer et décris un changement important dans ta vie, en comparant avant et maintenant.",
        minWords: 40, targetSeconds: 60,
        rubric: "Total 10 points. Content (3 pts): the learner introduces themself AND describes one important change, clearly comparing then and now. Grammar (3 pts): correct use of the Present Perfect and/or \"used to\" / \"be used to\", and of present tenses. Vocabulary (2 pts): varied B1 vocabulary about identity, personality, habits and change. Fluency and pronunciation (2 pts): judged from the transcript (length close to one minute of speech ≈ 90-150 words, natural sentences, few recognition errors that suggest mispronounced words).",
        reference: "Example: \"Hi, I'm Julie, I'm from Lyon and I work as a nurse. I'm quite outgoing… I used to live in a big city, but two years ago I moved to the countryside. Now I'm used to the quiet, and I've started gardening…\""
      }
    ]
  };

  // =========================================================================
  // B1.2 — TELL ME WHAT HAPPENED (leçon 28) — contrôle écrit d'Ashley (25/09),
  // complété d'une compréhension écrite, d'une compréhension orale et d'une
  // partie orale au micro. Barème d'Ashley (sur 50) conservé en proportions,
  // + 50 points d'immersion (lecture, écoute, oral).
  // =========================================================================
  E[28] = {
    code: "B1.2",
    title: "Level test: B1.2 – Tell Me What Happened",
    titleFr: "Contrôle de niveau : B1.2 – Raconte-moi ce qui s'est passé",
    objective: "Pass level B1.2 and move on to B1.3: vocabulary of events and experiences, key verbs, narrative tenses, time conjunctions, storytelling, reading, listening and speaking.",
    objectiveFr: "Valider le niveau B1.2 et passer au B1.3 : vocabulaire des événements et expériences, verbes clés, temps du récit, conjonctions de temps, storytelling, compréhension écrite et orale, expression orale.",
    sections: [
      // ---------------------------------------------------------------- I
      {
        id: "vocab", num: "I", title: "Vocabulary & Verbs", titleFr: "Vocabulaire et verbes",
        points: 10, skill: "vo", type: "fill",
        instructions: "A. Translate the words into English. B. Complete the sentences with the correct verb from the list, in the right form.",
        instructionsFr: "A. Traduis les mots en anglais. B. Complète les phrases avec le verbe qui convient dans la liste, à la bonne forme.",
        bank: ["happen", "occur", "realize", "notice", "remember", "forget", "decide", "manage", "fail"],
        items: [
          { header: { en: "A. Translate into English", fr: "A. Traduis en anglais" },
            text: "« un souvenir » = ___",
            blanks: [["a memory", "memory"]],
            why: "« a memory » = un souvenir (dans la tête). Piège : « a souvenir » en anglais, c'est un objet-souvenir acheté en voyage !" },
          { text: "« un événement inattendu » = ___",
            blanks: [["an unexpected event", "unexpected event", "an unforeseen event", "unforeseen event"]],
            why: "« an unexpected event » = un événement inattendu (« an » devant la voyelle de « unexpected »)." },
          { text: "« une expérience » = ___",
            blanks: [["an experience", "experience"]],
            why: "« an experience » = une expérience vécue. (« an experiment » = une expérience scientifique.)" },
          { header: { en: "B. Complete with the correct verb", fr: "B. Complète avec le bon verbe" },
            text: "Yesterday, a strange thing ___ to me while I was walking in the park.",
            blanks: [["happened", "occurred"]],
            why: "« something happened to me » = il m'est arrivé quelque chose. Au passé : happened (ou occurred, plus formel)." },
          { text: "I tried to open the door, but I ___ because it was locked.",
            blanks: [["failed", "didn't manage", "did not manage"]],
            why: "« I failed » = je n'ai pas réussi (échec). « I didn't manage » dit la même chose." },
          { text: "Suddenly, she ___ that she had left her keys at home.",
            blanks: [["realized", "realised", "noticed", "remembered"]],
            why: "« she realized that… » = elle s'est rendu compte que… (UK : realised). Ensuite, Past Perfect : she had left." },
          { text: "He didn't want to go to the party at first, but finally, he ___ to come with us.",
            blanks: [["decided"]],
            why: "« decide to + base verbale » = décider de : he decided to come." },
          { text: "Did you ___ to turn off the oven before leaving the house?",
            blanks: [["remember", "forget"]],
            why: "Après « Did you », base verbale : « Did you remember to turn off…? » = as-tu pensé à éteindre… ? (« Did you forget to…? » est aussi correct)." }
        ]
      },
      // --------------------------------------------------------------- II
      {
        id: "grammar", num: "II", title: "Grammar – Narrative Tenses", titleFr: "Grammaire – les temps du récit",
        points: 15, skill: "gr", type: "fill",
        instructions: "Put the verbs in brackets into the correct tense: Past Simple, Past Continuous or Past Perfect. Type only the missing words.",
        instructionsFr: "Mets les verbes entre parenthèses au bon temps : Past Simple, Past Continuous ou Past Perfect. Tape seulement les mots manquants.",
        items: [
          { text: "While I ___ (drive) to work, it ___ (start) to rain heavily.",
            blanks: [["was driving"], ["started"]],
            why: "Action longue en cours (Past Continuous : was driving) interrompue par une action courte (Past Simple : started)." },
          { text: "When we arrived at the station, the train ___ (already / leave).",
            blanks: [["had already left", "had left already"]],
            why: "Le train est parti AVANT notre arrivée → Past Perfect : had already left." },
          { text: "She ___ (walk) down the street when she ___ (notice) an old friend.",
            blanks: [["was walking"], ["noticed"]],
            why: "Action en cours (was walking) + événement soudain (noticed)." },
          { text: "By the time the police ___ (arrive), the thief ___ (escape).",
            blanks: [["arrived"], ["had escaped", "had already escaped"]],
            why: "« By the time » + Past Simple (arrived) ; l'action antérieure au Past Perfect (had escaped)." },
          { text: "I ___ (remember) where I ___ (put) my passport yesterday.",
            blanks: [["remembered"], ["had put", "put"]],
            why: "remembered (Past Simple) ; j'avais rangé le passeport AVANT de m'en souvenir → had put (Past Perfect)." }
        ]
      },
      // -------------------------------------------------------------- III
      {
        id: "conjunctions", num: "III", title: "Time Conjunctions", titleFr: "Conjonctions de temps",
        points: 10, skill: "gr", type: "fill",
        instructions: "Complete the sentences with when, while, as or by the time.",
        instructionsFr: "Complète les phrases avec when, while, as ou by the time.",
        bank: ["when", "while", "as", "by the time"],
        items: [
          { text: "___ I was cooking dinner, the phone rang.",
            blanks: [["while", "as", "when"]],
            why: "« While / As I was cooking… » = pendant que je cuisinais (action longue au Past Continuous). « When » est aussi possible." },
          { text: "The lights went out ___ we were watching a movie.",
            blanks: [["while", "as", "when"]],
            why: "« while / as / when we were watching » : l'action en cours (Past Continuous) est interrompue." },
          { text: "___ we got to the cinema, the film had already started.",
            blanks: [["by the time", "when"]],
            why: "« By the time we got there » = le temps qu'on arrive… : l'autre action était déjà terminée (Past Perfect : had already started). C'est la structure étudiée en B1.2." },
          { text: "He dropped his coffee cup ___ he was running for the bus.",
            blanks: [["while", "as", "when"]],
            why: "« while / as he was running » = pendant qu'il courait." }
        ]
      },
      // --------------------------------------------------------------- IV
      {
        id: "writing", num: "IV", title: "Writing – Structured Storytelling", titleFr: "Expression écrite – storytelling structuré",
        points: 15, skill: "ee", type: "ai-text",
        instructions: "Write your story in English, between 100 and 150 words. Use at least one Past Continuous, one Past Simple and one Past Perfect.",
        instructionsFr: "Écris ton texte en anglais, entre 100 et 150 mots. Utilise au moins un Past Continuous, un Past Simple et un Past Perfect.",
        prompt: "Tell the story of an unexpected event that happened to you, following the compulsory structure from the course: Setting → Event → Problem → Reaction → Consequence → Ending.",
        promptFr: "Raconte un événement inattendu que tu as vécu en suivant strictement la structure obligatoire du cours : Décor → Événement déclencheur → Problème → Réaction → Conséquence → Fin.",
        quotes: ["Setting (le décor, le contexte)", "Event (l'événement déclencheur)", "Problem (le problème rencontré)", "Reaction (ta réaction)", "Consequence (la conséquence)", "Ending (la fin, la conclusion)"],
        minWords: 100, maxWords: 150,
        rubric: "Total 15 points. Structure (5 pts): the six storytelling steps are all present and in order — Setting, Event, Problem, Reaction, Consequence, Ending (lose about 1 point per missing or confused step). Narrative tenses (5 pts): correct use of the Past Simple, the Past Continuous and the Past Perfect; at least one of each is required (lose 1.5 points for each tense that is missing, and points for tense errors). Vocabulary (3 pts): range and precision (happen, notice, realize, manage, suddenly, an unexpected event…) and time conjunctions (when, while, as, by the time). Accuracy and length (2 pts): B1 accuracy; about 100-150 words (deduct up to 1 point if clearly under 80 or over 200 words).",
        reference: "Model: Last summer I was travelling in Italy (setting). One evening, while I was walking back to my hotel, it started to rain (event). When I arrived, I realized I had lost my key (problem). I stayed calm and asked the receptionist for help (reaction). I had to wait an hour (consequence). In the end, I learnt to always check my pockets (ending)."
      },
      // ---------------------------------------------------------------- V
      {
        id: "reading", num: "V", title: "Reading Comprehension", titleFr: "Compréhension écrite",
        points: 15, skill: "ce", type: "mcq",
        instructions: "Read the story, then choose the right answer for each question.",
        instructionsFr: "Lis l'histoire, puis choisis la bonne réponse pour chaque question.",
        passage: "Last February, I was flying from Paris to Montreal for a job interview. I had prepared everything carefully: my suit was in my suitcase, and I had printed my CV twice, just in case.\n\nWhile the plane was flying over the Atlantic, the captain announced that there was a technical problem and that we had to land in Iceland. By the time we landed in Reykjavik, it was already dark, and the airline told us that the next flight wouldn't leave until the following afternoon. My interview was at ten o'clock the next morning!\n\nAt first, I panicked. Then I remembered that the company had offered interviews by video. I found a quiet corner in the hotel lobby, borrowed a shirt from a kind passenger, and emailed the manager to explain what had happened. She answered immediately and agreed to meet online.\n\nThe interview went surprisingly well, and two weeks later, they offered me the job. Looking back, I realise that the unexpected stop in Iceland taught me something important: when things go wrong, staying calm is the best solution.",
        items: [
          { q: "Why was the narrator travelling to Montreal?", qFr: "Pourquoi le narrateur allait-il à Montréal ?",
            opts: ["For a holiday", "For a job interview", "To visit family", "For a conference"], correct: 1,
            why: "« I was flying from Paris to Montreal for a job interview »." },
          { q: "What happened during the flight?", qFr: "Que s'est-il passé pendant le vol ?",
            opts: ["The plane had to land in Iceland because of a technical problem.", "A passenger felt ill.", "The flight was cancelled before take-off.", "The narrator lost his suitcase."], correct: 0,
            why: "« there was a technical problem and… we had to land in Iceland »." },
          { q: "\"By the time we landed in Reykjavik, it was already dark\" means that…", qFr: "« By the time we landed in Reykjavik, it was already dark » veut dire que…",
            opts: ["it got dark after they landed.", "night had fallen before they landed.", "they landed early in the morning.", "they couldn't land because it was dark."], correct: 1,
            why: "« By the time… » : l'autre situation (la nuit) était déjà là au moment de l'atterrissage." },
          { q: "How did the narrator solve the problem?", qFr: "Comment le narrateur a-t-il résolu le problème ?",
            opts: ["He took a taxi to the airport.", "He cancelled the interview.", "He did the interview online.", "He changed his flight to arrive earlier."], correct: 2,
            why: "« the company had offered interviews by video… She… agreed to meet online »." },
          { q: "What lesson does the narrator learn?", qFr: "Quelle leçon le narrateur en tire-t-il ?",
            opts: ["Always travel with two suitcases.", "Never fly in winter.", "Staying calm is the best solution when things go wrong.", "Video interviews are always better."], correct: 2,
            why: "« when things go wrong, staying calm is the best solution » : c'est la chute (Ending) de l'histoire." }
        ]
      },
      // --------------------------------------------------------------- VI
      {
        id: "listening", num: "VI", title: "Listening Comprehension", titleFr: "Compréhension orale",
        points: 15, skill: "co", type: "mcq",
        instructions: "Listen to each recording (you can play it again), then choose the right answer.",
        instructionsFr: "Écoute chaque enregistrement (tu peux le réécouter), puis choisis la bonne réponse.",
        items: [
          { audio: "I was jogging in the park this morning when I saw a small dog running alone. It had lost its owner, so I took it to the vet, and they found the owner's phone number on its collar.",
            q: "What did the speaker find in the park?", qFr: "Qu'a trouvé la personne dans le parc ?",
            opts: ["A phone", "A lost dog", "A wallet", "A friend"], correct: 1,
            why: "« I saw a small dog running alone. It had lost its owner »." },
          { audio: [{ who: "A", text: "Why were you so late yesterday?" }, { who: "B", text: "Sorry! By the time I got to the station, my train had already left, so I had to wait forty minutes for the next one." }],
            q: "Why was the second speaker late?", qFr: "Pourquoi la deuxième personne était-elle en retard ?",
            opts: ["She missed her train.", "Her train broke down.", "She forgot the meeting.", "She was stuck in traffic."], correct: 0,
            why: "« my train had already left » : le train était déjà parti, elle l'a raté." },
          { audio: "While we were having dinner, all the lights suddenly went out. At first we laughed, but then we realised the whole street was dark. We finished our meal by candlelight — it was actually quite romantic.",
            q: "How did the evening end?", qFr: "Comment la soirée s'est-elle terminée ?",
            opts: ["They went to a restaurant.", "They called an electrician.", "They finished dinner by candlelight.", "They went to bed early."], correct: 2,
            why: "« We finished our meal by candlelight »." },
          { audio: [{ who: "A", text: "Did you manage to find your keys?" }, { who: "B", text: "Yes, finally! I had left them in my jacket pocket. I'd looked everywhere except there!" }],
            q: "Where were the keys?", qFr: "Où étaient les clés ?",
            opts: ["In the car", "In a jacket pocket", "At the office", "On the kitchen table"], correct: 1,
            why: "« I had left them in my jacket pocket »." },
          { audio: "I'll never forget my first day at work. I was so nervous that I spilled coffee on my new boss! She just smiled and said it had happened to her too. Since then, we've become good friends.",
            q: "How did the boss react?", qFr: "Comment la cheffe a-t-elle réagi ?",
            opts: ["She was angry.", "She sent the speaker home.", "She smiled and was understanding.", "She didn't notice."], correct: 2,
            why: "« She just smiled and said it had happened to her too » : elle a été compréhensive." }
        ]
      },
      // -------------------------------------------------------------- VII
      {
        id: "speaking", num: "VII", title: "Speaking", titleFr: "Expression orale",
        points: 20, skill: "eo", type: "ai-oral",
        instructions: "Press the microphone and tell your story for about one minute. You can try again, or add to your answer. If the microphone doesn't work, type what you would say.",
        instructionsFr: "Appuie sur le micro et raconte ton histoire pendant environ une minute. Tu peux recommencer, ou compléter ta réponse. Si le micro ne fonctionne pas, écris ce que tu dirais.",
        prompt: "Tell a friend about something unexpected that happened to you — a trip, a day at work or an evening out. Say where you were and what you were doing, what happened, how you reacted and how it ended.",
        promptFr: "Raconte à un ami quelque chose d'inattendu qui t'est arrivé — un voyage, une journée de travail ou une soirée. Dis où tu étais et ce que tu faisais, ce qui s'est passé, comment tu as réagi et comment ça s'est terminé.",
        minWords: 40, targetSeconds: 60,
        rubric: "Total 20 points. Story structure (6 pts): setting, event, problem/reaction and ending are clearly told, in a logical order. Narrative tenses (6 pts): correct Past Simple, Past Continuous (was/were + -ing) and ideally one Past Perfect (had + past participle). Vocabulary and linking (4 pts): time conjunctions (when, while, as, by the time, suddenly, in the end) and B1.2 vocabulary (happen, realize, notice, manage…). Fluency and pronunciation (4 pts): judged from the transcript (about one minute of speech ≈ 90-150 words, natural sentences; recognition errors suggesting mispronounced words, especially -ed endings, lower this score; mention the words to practise).",
        reference: "Example: \"Last year I was travelling in Spain with my sister. One night, while we were walking back to our hotel, we realised we had lost the key card. The receptionist had gone home, so we waited in the lobby… In the end, a security guard helped us, and now we always keep the card in a safe place.\""
      }
    ]
  };
})(window.LESSON_EXAMS);
