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
//       skill:   "vo"              jauge : vo vocabulaire · cj conjugaison · gr grammaire · ce compréhension écrite ·
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

  E[29] = {
    code: "B1.3",
    title: "Level test: B1.3 – Real Conversations",
    titleFr: "Contrôle de niveau : B1.3 – De vraies conversations",
    objective: "Pass level B1.3 and move on to B1.4: reacting, asking for clarification, interrupting politely, showing interest and ending a conversation, indirect questions, question tags, reading, listening, writing and speaking.",
    objectiveFr: "Valider le niveau B1.3 et passer au B1.4 : réagir, demander une précision, interrompre poliment, montrer son intérêt et terminer une conversation, questions indirectes, question tags, compréhension écrite et orale, expression écrite et orale.",
    sections: [
      // ---------------------------------------------------------------- I
      {
        id: "vocab", num: "I", title: "Conversation Expressions", titleFr: "Expressions de conversation",
        points: 15, skill: "vo", type: "fill",
        instructions: "Complete each line of dialogue with a word or expression from the list. Each answer is used once.",
        instructionsFr: "Complète chaque réplique avec un mot ou une expression de la liste. Chaque réponse ne sert qu'une fois.",
        bank: ["No way!", "I see", "Exactly", "You mean", "mean", "by", "catch", "Sorry", "going", "catch up", "Hold", "That's a good point"],
        items: [
          { text: "— I've just been offered a job in New York! — ___ That's amazing, tell me everything!",
            blanks: [["No way!", "No way", "Really?", "Really"]],
            why: "« No way! » = sans blague ! : forte surprise, très naturelle entre amis (« Really? » est aussi possible)." },
          { text: "— The meeting is moved to Thursday because the manager is away. — Oh, ___. Thanks for telling me.",
            blanks: [["I see"]],
            why: "« I see » = je vois, d'accord : on montre qu'on a compris l'information, sans forcément donner son avis." },
          { text: "— ___ we should cancel the whole trip? — Yes, I'm afraid so.",
            blanks: [["You mean", "So you mean", "So, you mean"]],
            why: "« You mean…? » = tu veux dire… ? : on reformule pour vérifier qu'on a bien compris." },
          { text: "— The project is a bit of a mess. — What do you mean ___ “a mess”?",
            blanks: [["by"]],
            why: "« What do you mean by…? » = qu'entends-tu par… ? Toujours « by » devant le mot à préciser." },
          { text: "Sorry, I didn't ___ that. Could you say it again?",
            blanks: [["catch", "hear", "get"]],
            why: "« I didn't catch that » = je n'ai pas bien entendu / compris. Ici « catch » = saisir à l'oral, pas « attraper »." },
          { text: "___ to interrupt, but your taxi is here.",
            blanks: [["Sorry", "I'm sorry", "I am sorry"]],
            why: "« Sorry to interrupt, but… » = désolé(e) de t'interrompre, mais… : la formule sûre pour couper la parole poliment." },
          { text: "Anyway, I should get ___ — it was great talking to you!",
            blanks: [["going"]],
            why: "« Anyway, I should get going » = bon, il faut que j'y aille : « anyway » annonce la fin de la conversation." },
          { text: "— I find phone calls in English really hard. — I know what you ___. It's much harder when you can't see the person.",
            blanks: [["mean"]],
            why: "« I know what you mean » = je vois ce que tu veux dire : on montre de l'empathie." },
          { text: "It was lovely to see you. Let's ___ again soon!",
            blanks: [["catch up"]],
            why: "« Let's catch up again soon » = on se refait un point / on se revoit bientôt pour échanger des nouvelles." },
          { text: "— Can I just say something? — Of course, but ___ that thought for a second: let me finish my point first.",
            blanks: [["hold"]],
            why: "« Hold that thought » = garde ton idée pour tout à l'heure : on reprend la parole sans faire oublier l'idée de l'autre." }
        ]
      },
      // --------------------------------------------------------------- II
      {
        id: "grammar", num: "II", title: "Grammar – Indirect Questions & Question Tags", titleFr: "Grammaire – questions indirectes et question tags",
        points: 20, skill: "gr", type: "fill",
        instructions: "A. Make the questions polite: complete the indirect question. B. Add the correct question tag. Type only the missing words.",
        instructionsFr: "A. Rends les questions polies : complète la question indirecte. B. Ajoute la question tag qui convient. Tape seulement les mots manquants.",
        items: [
          { header: { en: "A. Indirect questions", fr: "A. Questions indirectes" },
            text: "Where is the station? → Do you know ___?",
            blanks: [["where the station is"]],
            why: "Dans une question indirecte, pas d'inversion : sujet + verbe → « where the station is » (jamais « where is the station »)." },
          { text: "What time does the film start? → Could you tell me ___?",
            blanks: [["what time the film starts"]],
            why: "L'auxiliaire « does » disparaît et le verbe reprend son -s : « what time the film starts »." },
          { text: "Is the shop open on Sundays? → Do you know ___ open on Sundays?",
            blanks: [["if the shop is", "whether the shop is", "if the shop's", "whether the shop's"]],
            why: "Question fermée (oui/non) → « if » ou « whether » + sujet + verbe : « if the shop is open »." },
          { text: "Why did she leave early? → I wonder ___ early.",
            blanks: [["why she left"]],
            why: "« did » disparaît et le verbe passe au prétérit : « why she left » (pas « why did she leave »)." },
          { text: "Where can I buy a ticket? → Could you tell me ___ a ticket?",
            blanks: [["where I can buy"]],
            why: "Ordre sujet + modal + verbe : « where I can buy » (pas « where can I buy »)." },
          { header: { en: "B. Question tags", fr: "B. Question tags" },
            text: "It's a lovely day, ___?",
            blanks: [["isn't it"]],
            why: "Phrase affirmative avec « is » → tag négatif : « isn't it? »." },
          { text: "You don't eat meat, ___?",
            blanks: [["do you"]],
            why: "Phrase négative (don't) → tag affirmatif : « do you? »." },
          { text: "He works in a bank, ___?",
            blanks: [["doesn't he"]],
            why: "Pas d'auxiliaire au présent simple (3e personne) → on reprend « does », au négatif : « doesn't he? »." },
          { text: "You've been to London before, ___?",
            blanks: [["haven't you"]],
            why: "L'auxiliaire est « have » (Present Perfect) → « haven't you? »." },
          { text: "They didn't call you back, ___?",
            blanks: [["did they"]],
            why: "Phrase négative au passé (didn't) → tag affirmatif : « did they? »." }
        ]
      },
      // -------------------------------------------------------------- III
      {
        id: "secret", num: "III", title: "Secret English – Conversation Management", titleFr: "Secret English – gérer une conversation",
        points: 10, skill: "gr", type: "ai-text",
        instructions: "Max isn't rude on purpose, but he doesn't know how to manage a conversation. For each situation (1 to 4), write what Max should say instead. Then explain in one or two sentences why it matters. You may explain in English or in French.",
        instructionsFr: "Max n'est pas impoli exprès, mais il ne sait pas gérer une conversation. Pour chaque situation (1 à 4), écris ce que Max devrait dire à la place. Puis explique en une ou deux phrases pourquoi c'est important. Tu peux expliquer en anglais ou en français.",
        quotes: [
          "1. Anna says: “We stayed in a bothy in the Highlands.” Max doesn't know the word “bothy” and says: “What?”",
          "2. Anna is still talking, but Max wants to speak and says: “Stop. I want to talk now.”",
          "3. Anna says: “And then someone stole my passport!” Max answers: “OK.”",
          "4. Max has to leave. He says “Bye.” and walks away."
        ],
        prompt: "Rewrite Max's four lines using conversation-management expressions, then explain why these expressions matter.",
        promptFr: "Réécris les quatre répliques de Max avec des expressions de gestion de la conversation, puis explique pourquoi ces expressions sont importantes.",
        minWords: 30,
        rubric: "Total 10 points. The explanation may be written in English OR in French: do not penalise French. 2 points per situation (8 points): 1 = asking for clarification (e.g. \"Sorry, what do you mean by 'bothy'?\", \"Sorry, I didn't catch that\"); 2 = interrupting politely (\"Sorry to interrupt, but…\", \"Can I just say something?\"); 3 = reacting AND showing interest, ideally with a follow-up question (\"No way! / Really? What happened?\"); 4 = ending the conversation politely (\"Anyway, I should get going. It was great talking to you. Let's catch up soon.\"). Give 1 point instead of 2 if the function is right but the English is clearly incorrect or the line is still abrupt. 2 points: a sensible explanation (speaking is not only producing sentences; you also manage turns, show interest and close politely; interrupting directly or answering 'OK' sounds rude or uninterested in English-speaking cultures).",
        reference: "1. Sorry, what do you mean by “bothy”? 2. Sorry to interrupt, but… 3. No way! Really? What did you do? 4. Anyway, I should get going — it was great talking to you. Let's catch up again soon!"
      },
      // --------------------------------------------------------------- IV
      {
        id: "writing", num: "IV", title: "Writing – A Real Conversation", titleFr: "Expression écrite – une vraie conversation",
        points: 15, skill: "ee", type: "ai-text",
        instructions: "Write a dialogue of about 120 to 160 words.",
        instructionsFr: "Écris un dialogue d'environ 120 à 160 mots.",
        prompt: "At a friend's party, you meet someone you don't know. Write your conversation, from “Hi” to “Goodbye”. Use at least five conversation-management expressions (react, show interest, ask for clarification, interrupt politely, end the conversation), at least one indirect question and at least one question tag.",
        promptFr: "À une soirée chez un ami, tu rencontres quelqu'un que tu ne connais pas. Écris votre conversation, du « Hi » au « Goodbye ». Utilise au moins cinq expressions de gestion de la conversation (réagir, montrer son intérêt, demander une précision, interrompre poliment, terminer la conversation), au moins une question indirecte et au moins une question tag.",
        minWords: 120, maxWords: 160,
        rubric: "Total 15 points. Conversation management (5 pts): at least five different expressions from the lesson (Really?, No way!, I see, Exactly, That's a good point, I know what you mean, You mean…?, What do you mean by…?, Sorry, I didn't catch that, Sorry to interrupt, but…, Can I just say something?, Hold that thought, Anyway, I should get going, It was great talking to you, Let's catch up soon), used in a natural and appropriate way (1 point each, up to 5). Grammar (5 pts): at least one correct indirect question with subject-verb order (e.g. \"Do you know where…is?\") and at least one correct question tag (2 pts each if correct, 1 if attempted with an error); 1 pt for general B1 accuracy. Natural flow (3 pts): the dialogue has a clear beginning, middle and polite ending, and the two speakers really react to each other. Length and presentation (2 pts): about 120-160 words, set out as a dialogue; deduct up to 1 point if clearly under 90 or over 220 words.",
        reference: "Example: A: Hi, I'm Léa. You're a friend of Tom's, aren't you? B: Yes, we work together. A: Really? Do you know what he's planning for his birthday? B: No idea! … A: Sorry to interrupt, but is that your phone ringing? … A: Anyway, I should get going. It was great talking to you! B: You too, let's catch up soon."
      },
      // ---------------------------------------------------------------- V
      {
        id: "reading", num: "V", title: "Reading Comprehension", titleFr: "Compréhension écrite",
        points: 15, skill: "ce", type: "mcq",
        instructions: "Read the text, then choose the right answer for each question.",
        instructionsFr: "Lis le texte, puis choisis la bonne réponse pour chaque question.",
        passage: "When Julien moved to Dublin for work, his English was already quite good. He could write reports and follow meetings without any problem. But at the office coffee machine, he often felt lost. His colleagues chatted easily about the weather, the weekend or last night's football match, and Julien never knew what to say.\n\nOne day, his colleague Siobhan gave him a piece of advice. “You don't need to talk a lot,” she said. “Just show that you're listening. Say ‘Really?’ or ‘No way!’, ask a question, and people will keep talking.” She also explained that interrupting someone directly is considered quite rude in Ireland, so it's better to wait for a pause or to say “Sorry to interrupt, but…”.\n\nJulien decided to try. The next morning, when a colleague mentioned her trip to Galway, he asked, “You mean the city on the west coast? Do you know if it's worth visiting in winter?” Twenty minutes later, they were still talking.\n\nToday, Julien says small talk is his favourite part of the working day. “It isn't about being brilliant,” he explains. “It's about being interested.”",
        items: [
          { q: "What was Julien's problem at first?", qFr: "Quel était le problème de Julien au début ?",
            opts: ["His written English was weak.", "He couldn't follow meetings.", "He didn't know what to say in informal chats.", "His colleagues never spoke to him."], correct: 2,
            why: "Il écrivait et suivait les réunions sans problème, mais à la machine à café « Julien never knew what to say »." },
          { q: "According to Siobhan, what is the key to small talk?", qFr: "D'après Siobhan, quelle est la clé du small talk ?",
            opts: ["Talking a lot about yourself", "Showing that you're listening and asking questions", "Always talking about the weather", "Avoiding questions"], correct: 1,
            why: "« Just show that you're listening. Say ‘Really?’… ask a question, and people will keep talking »." },
          { q: "What does Siobhan say about interrupting?", qFr: "Que dit Siobhan au sujet des interruptions ?",
            opts: ["It's normal in Ireland.", "You should never speak during a pause.", "Interrupting directly is considered quite rude.", "You must raise your hand first."], correct: 2,
            why: "« interrupting someone directly is considered quite rude in Ireland » : mieux vaut attendre une pause ou dire « Sorry to interrupt, but… »." },
          { q: "“Do you know if it's worth visiting in winter?” is…", qFr: "« Do you know if it's worth visiting in winter? » est…",
            opts: ["a question tag.", "an indirect question.", "a direct question with inversion.", "an order."], correct: 1,
            why: "« Do you know if… » + sujet-verbe (it's) : c'est une question indirecte, plus polie." },
          { q: "What is the main message of the text?", qFr: "Quel est le message principal du texte ?",
            opts: ["Small talk is about being interested, not brilliant.", "You need perfect English to make friends.", "People in Dublin are unfriendly.", "Galway is not worth visiting in winter."], correct: 0,
            why: "« It isn't about being brilliant. It's about being interested. »" }
        ]
      },
      // --------------------------------------------------------------- VI
      {
        id: "listening", num: "VI", title: "Listening Comprehension", titleFr: "Compréhension orale",
        points: 15, skill: "co", type: "mcq",
        instructions: "Listen to each recording (you can play it again), then choose the right answer.",
        instructionsFr: "Écoute chaque enregistrement (tu peux le réécouter), puis choisis la bonne réponse.",
        items: [
          { audio: [{ who: "A", text: "I'm thinking of moving to Canada next year." }, { who: "B", text: "No way! Really? What made you decide that?" }],
            q: "How does the second speaker react?", qFr: "Comment réagit la deuxième personne ?",
            opts: ["She is angry.", "She is surprised and interested.", "She changes the subject.", "She isn't listening."], correct: 1,
            why: "« No way! Really? » = surprise ; « What made you decide that? » = une question de relance qui montre son intérêt." },
          { audio: [{ who: "A", text: "The deadline's been moved to the fifteenth." }, { who: "B", text: "Sorry, I didn't catch that. Could you say that again?" }, { who: "A", text: "The deadline. It's now the fifteenth." }],
            q: "Why does the second speaker ask a question?", qFr: "Pourquoi la deuxième personne pose-t-elle une question ?",
            opts: ["She disagrees with the new date.", "She wants to end the conversation.", "She didn't hear the information properly.", "She wants to change the subject."], correct: 2,
            why: "« Sorry, I didn't catch that. Could you say that again? » = elle n'a pas bien entendu et demande de répéter." },
          { audio: "Sorry to interrupt, but before we go on, could you tell me where the toilets are? I'll be right back.",
            q: "What does the speaker want to know?", qFr: "Que veut savoir la personne ?",
            opts: ["Where the toilets are", "What time it is", "Where the exit is", "Who is speaking next"], correct: 0,
            why: "« could you tell me where the toilets are? » : une question indirecte polie, après « Sorry to interrupt »." },
          { audio: [{ who: "A", text: "So that's why I think the café should open earlier." }, { who: "B", text: "That's a good point. You mean at seven instead of nine?" }, { who: "A", text: "Exactly." }],
            q: "What does the first speaker suggest?", qFr: "Que propose la première personne ?",
            opts: ["Closing the café", "Opening at nine", "Opening at seven in the evening", "Opening at seven instead of nine"], correct: 3,
            why: "B reformule (« You mean at seven instead of nine? ») et A confirme : « Exactly »." },
          { audio: [{ who: "A", text: "Anyway, I should get going. My train leaves in ten minutes. It was great talking to you!" }, { who: "B", text: "You too! Let's catch up again soon." }],
            q: "What are the speakers doing?", qFr: "Que font les deux personnes ?",
            opts: ["Starting a conversation", "Ending a conversation politely", "Arguing about a train", "Buying a train ticket"], correct: 1,
            why: "« Anyway, I should get going… It was great talking to you… Let's catch up again soon » : une clôture polie." }
        ]
      },
      // -------------------------------------------------------------- VII
      {
        id: "speaking", num: "VII", title: "Speaking", titleFr: "Expression orale",
        points: 10, skill: "eo", type: "ai-oral",
        instructions: "Press the microphone and speak for about one minute. You can try again, or add to your answer. If the microphone doesn't work, type what you would say.",
        instructionsFr: "Appuie sur le micro et parle environ une minute. Tu peux recommencer, ou compléter ta réponse. Si le micro ne fonctionne pas, écris ce que tu dirais.",
        prompt: "At the coffee machine, a new colleague tells you: “This weekend I went to a concert in London, and I lost my phone!” Continue the conversation: react, show interest, ask for a detail you didn't understand, ask one indirect question, use one question tag, then end the conversation politely.",
        promptFr: "À la machine à café, un nouveau collègue te dit : « Ce week-end, je suis allé à un concert à Londres, et j'ai perdu mon téléphone ! » Continue la conversation : réagis, montre ton intérêt, demande une précision, pose une question indirecte, utilise une question tag, puis termine poliment la conversation.",
        minWords: 40, targetSeconds: 60,
        rubric: "Total 10 points. Conversation management (4 pts): a reaction (Really?, No way!), a sign of interest or follow-up question, a request for clarification (You mean…?, What do you mean by…?) and a polite ending (Anyway, I should get going / It was great talking to you) — 1 point each. Grammar (3 pts): one correct indirect question without inversion (e.g. \"Do you know where you lost it?\") and one correct question tag (e.g. \"It was a great concert, wasn't it?\"); 1 pt for general accuracy. Fluency and pronunciation (3 pts): judged from the transcript (about one minute ≈ 90-150 words, natural sentences; recognition errors suggesting mispronounced words lower this score; mention the words to practise).",
        reference: "Example: \"No way! You lost your phone? What happened? … You mean you left it on the train? Do you know if anyone found it? … That's really annoying, isn't it? … Anyway, I should get going, I've got a meeting. It was great talking to you — let me know if you find it!\""
      }
    ]
  };

  E[30] = {
    code: "B1.4",
    title: "Level test: B1.4 – Everyday English",
    titleFr: "Contrôle de niveau : B1.4 – L'anglais du quotidien",
    objective: "Pass level B1.4 and move on to B1.5: shopping, restaurants, transport, the phone, services and housing, polite requests, offers, dealing with an unexpected problem, reading, listening, writing and speaking.",
    objectiveFr: "Valider le niveau B1.4 et passer au B1.5 : magasin, restaurant, transports, téléphone, services et logement, demandes polies, propositions d'aide, gérer un imprévu, compréhension écrite et orale, expression écrite et orale.",
    sections: [
      // ---------------------------------------------------------------- I
      {
        id: "vocab", num: "I", title: "Vocabulary & Verbs", titleFr: "Vocabulaire et verbes",
        points: 15, skill: "vo", type: "fill",
        instructions: "Complete the sentences with the right word or verb from the list. Change the form of the verb if necessary.",
        instructionsFr: "Complète les phrases avec le mot ou le verbe qui convient dans la liste. Change la forme du verbe si nécessaire.",
        bank: ["bill", "receipt", "refund", "out of stock", "out of order", "deposit", "appointment", "landlord", "afford", "charge", "sort", "book"],
        items: [
          { text: "Could I have the ___, please? We'd like to pay.",
            blanks: [["bill", "check"]],
            why: "« the bill » = l'addition (UK) ; aux États-Unis, « the check »." },
          { text: "These shoes are too small. I'd like to give them back and get a ___.",
            blanks: [["refund"]],
            why: "« get a refund » = être remboursé(e)." },
          { text: "You can't get your money back without the ___, so keep it safe.",
            blanks: [["receipt"]],
            why: "« a receipt » = un ticket de caisse, un reçu (le « p » ne se prononce pas)." },
          { text: "I'm afraid this model is ___, but we'll have more next week.",
            blanks: [["out of stock"]],
            why: "« out of stock » = en rupture de stock (≠ « out of order » = en panne)." },
          { text: "The lift is ___, so you'll have to take the stairs.",
            blanks: [["out of order"]],
            why: "« out of order » = en panne, hors service (pour une machine publique)." },
          { text: "When I moved into the flat, I paid one month's rent as a ___.",
            blanks: [["deposit"]],
            why: "« a deposit » = une caution, un acompte." },
          { text: "I love that car, but I can't ___ it at the moment.",
            blanks: [["afford"]],
            why: "« I can't afford it » = je n'ai pas les moyens de me l'offrir." },
          { text: "They ___ me twice for the same coffee! Look at my bank statement.",
            blanks: [["charged"]],
            why: "« charge » = faire payer, facturer ; au prétérit : « they charged me twice »." },
          { text: "Don't worry, madam, we'll ___ it out straight away.",
            blanks: [["sort"]],
            why: "« sort out » = régler, arranger un problème : « we'll sort it out »." },
          { text: "I need to make an ___ with the doctor for next week.",
            blanks: [["appointment"]],
            why: "« an appointment » = un rendez-vous officiel ou médical." }
        ]
      },
      // --------------------------------------------------------------- II
      {
        id: "grammar", num: "II", title: "Grammar – Polite Requests & Offers", titleFr: "Grammaire – demandes polies et propositions",
        points: 20, skill: "gr", type: "fill",
        instructions: "Complete the sentences. Put the verbs in brackets into the correct form. Type only the missing words.",
        instructionsFr: "Complète les phrases. Mets les verbes entre parenthèses à la forme qui convient. Tape seulement les mots manquants.",
        items: [
          { header: { en: "A. Polite requests", fr: "A. Demandes polies" },
            text: "Would you mind ___ (wait) a moment, please?",
            blanks: [["waiting"]],
            why: "« Would you mind » est TOUJOURS suivi de -ing : « Would you mind waiting…? » (jamais « to wait »)." },
          { text: "___ it be possible to change my table? It's very noisy here.",
            blanks: [["Would"]],
            why: "« Would it be possible to…? » = serait-il possible de… ? : la demande la plus polie pour une exception." },
          { text: "I ___ (like) to exchange this shirt for a bigger size.",
            blanks: [["'d like", "would like"]],
            why: "« I'd like to… » = je voudrais… : plus poli que « I want », qui sonne exigeant." },
          { text: "Do you ___ to have a phone charger I could borrow?",
            blanks: [["happen"]],
            why: "« Do you happen to have…? » = est-ce que par hasard vous auriez… ? : une demande très douce." },
          { text: "I'm looking ___ the post office. Is it far from here?",
            blanks: [["for"]],
            why: "« look for » = chercher : toujours avec « for » (jamais « I'm looking the post office »)." },
          { header: { en: "B. Offers", fr: "B. Proposer son aide" },
            text: "___ I call you a taxi? It's raining. (the typical way to offer help: « voulez-vous que je… ? »)",
            blanks: [["Shall", "Should"]],
            why: "« Shall I…? » = voulez-vous que je… ? : la forme typique pour proposer son aide." },
          { text: "Do you want ___ (I / fill in) the form for you?",
            blanks: [["me to fill in"]],
            why: "« want + personne + to + verbe » : « Do you want me to fill in…? » — jamais « want that I… »." },
          { text: "Would you like ___ (I / check) if there's a table free?",
            blanks: [["me to check"]],
            why: "« Would you like me to check…? » = voulez-vous que je vérifie… ? (même structure que « want me to »)." },
          { text: "The printer isn't working? Don't worry, I ___ (help) you with that.",
            blanks: [["'ll help", "will help"]],
            why: "Offre spontanée, décidée sur le moment → « I'll help you »." },
          { text: "— Would you mind opening the window? — ___, not at all. Here you are.",
            blanks: [["No", "Oh no"]],
            why: "« mind » = être dérangé(e) : pour accepter, on répond « No, not at all » (non, ça ne me dérange pas). « Yes » voudrait dire que ça dérange !" }
        ]
      },
      // -------------------------------------------------------------- III
      {
        id: "situations", num: "III", title: "Real-Life Situations", titleFr: "Situations de la vie réelle",
        points: 10, skill: "gr", type: "mcq",
        instructions: "For each situation, choose the most natural and polite sentence.",
        instructionsFr: "Pour chaque situation, choisis la phrase la plus naturelle et la plus polie.",
        items: [
          { q: "At the restaurant, the waiter brings you the wrong dish.", qFr: "Au restaurant, le serveur t'apporte le mauvais plat.",
            opts: ["You made a mistake. Bring me the right one.", "I think there's been a mistake — I ordered the fish.", "This is wrong, obviously.", "I want the fish now."], correct: 1,
            why: "« I think there's been a mistake » signale le problème sans accuser personne : c'est le ton attendu." },
          { q: "In a small shop, you want to pay by card.", qFr: "Dans une petite boutique, tu veux payer par carte.",
            opts: ["Would it be possible to pay by card?", "I want pay by card.", "Give me the card machine.", "Is possible pay with card?"], correct: 0,
            why: "« Would it be possible to…? » : demande polie et correcte (les autres sont incorrectes ou trop directes)." },
          { q: "On the phone, the line is very bad.", qFr: "Au téléphone, la ligne est très mauvaise.",
            opts: ["You're breaking down.", "Your phone is cutting.", "Sorry, you're breaking up. Could you say that again?", "Stop, I don't hear."], correct: 2,
            why: "« You're breaking up » = ça coupe, je t'entends mal (« breaking down » = tomber en panne)." },
          { q: "The receptionist asks: “Would you mind filling in this form?” You accept.", qFr: "La réceptionniste demande : « Would you mind filling in this form? » Tu acceptes.",
            opts: ["Yes, I mind.", "Yes, I don't.", "No, I mind.", "No, not at all."], correct: 3,
            why: "« Would you mind…? » = ça vous dérange ? → pour accepter : « No, not at all »." },
          { q: "At a train station in England, you want to go to Leeds and come back the same day.", qFr: "Dans une gare en Angleterre, tu veux aller à Leeds et revenir le jour même.",
            opts: ["A back ticket to Leeds, please.", "A return ticket to Leeds, please.", "A single ticket to Leeds and back, please.", "A round ticket to Leeds, please."], correct: 1,
            why: "UK : « a return ticket » = un aller-retour (US : « round-trip ») ; « a single » = un aller simple." }
        ]
      },
      // --------------------------------------------------------------- IV
      {
        id: "writing", num: "IV", title: "Writing – A Polite Complaint", titleFr: "Expression écrite – une réclamation polie",
        points: 15, skill: "ee", type: "ai-text",
        instructions: "Write an email of about 120 to 160 words.",
        instructionsFr: "Écris un e-mail d'environ 120 à 160 mots.",
        prompt: "You ordered a sofa online. It arrived a week late, one leg was broken, and you were charged twice. Write an email to customer service. Follow the four steps from the course: explain the problem → ask for something → negotiate → conclude politely.",
        promptFr: "Tu as commandé un canapé en ligne. Il est arrivé avec une semaine de retard, un pied était cassé et on t'a débité deux fois. Écris un e-mail au service client en suivant les quatre étapes du cours : expliquer le problème → demander quelque chose → négocier → conclure poliment.",
        quotes: ["Explain (expliquer)", "Ask (demander)", "Negotiate (négocier)", "Conclude (conclure)"],
        minWords: 120, maxWords: 160,
        rubric: "Total 15 points. Task (5 pts): the email mentions the three problems (late delivery, broken leg, charged twice) and follows the four steps: explain, ask (refund / replacement / repair), negotiate (e.g. a discount or free delivery as compensation, a deadline), conclude politely (lose about 1 point per missing step or problem). Politeness and register (4 pts): polite, firm but not aggressive; uses at least three polite structures from the lesson (I'd like to…, Would it be possible to…?, Could you…?, Would you mind + -ing, I'm afraid…, I think there's been a mistake), no \"I want\" / \"You must\"; appropriate opening and closing (Dear… / Kind regards). Grammar and vocabulary (4 pts): B1 accuracy; everyday vocabulary (refund, replace, charge, receipt, delivery, exchange…). Length and organisation (2 pts): about 120-160 words, clear paragraphs; deduct up to 1 point if clearly under 90 or over 220 words.",
        reference: "Model: Dear Sir or Madam, I ordered a sofa on 3 May (order 4521). I'm afraid it arrived a week late, one of the legs was broken, and I think there's been a mistake with the payment: I was charged twice. Could you refund the second payment, please? I would also like the broken leg to be replaced. Would it be possible to send a technician this week? Given the delay, I'd be grateful if you could offer free delivery on my next order. I look forward to your reply. Kind regards, …"
      },
      // ---------------------------------------------------------------- V
      {
        id: "reading", num: "V", title: "Reading Comprehension", titleFr: "Compréhension écrite",
        points: 15, skill: "ce", type: "mcq",
        instructions: "Read the text, then choose the right answer for each question.",
        instructionsFr: "Lis le texte, puis choisis la bonne réponse pour chaque question.",
        passage: "When Priya moved to Bristol last September, she found a lovely one-bedroom flat near the city centre. She paid a one-month deposit, filled in all the forms and gave the landlord a proof of address. Everything seemed perfect — until the first cold night in November.\n\nThe heating wasn't working, and there was no hot water. Priya called the landlord, Mr Harris, but he didn't answer. She left a polite message: “Hello, this is Priya from Flat 2. I'm afraid the boiler seems to be out of order. Would it be possible to send someone to look at it?”\n\nTwo days later, she still hadn't heard anything, so she called the letting agency instead. The woman on the phone was very helpful. “I'm so sorry about that,” she said. “Leave it with me — we'll sort it out today.” She put Priya through to the maintenance team, and a technician came that same afternoon.\n\nThe technician replaced a broken part, and the agency agreed not to charge Priya for the repair. They also offered her a small discount on December's rent. “Being polite but firm really works,” Priya says. “I didn't shout at anyone, but I didn't give up either.”",
        items: [
          { q: "What did Priya give the landlord before moving in?", qFr: "Qu'a donné Priya au propriétaire avant d'emménager ?",
            opts: ["Only her phone number", "Two months' rent", "A deposit and a proof of address", "A new boiler"], correct: 2,
            why: "« She paid a one-month deposit… and gave the landlord a proof of address »." },
          { q: "What was the problem in November?", qFr: "Quel était le problème en novembre ?",
            opts: ["The heating and the hot water weren't working.", "The flat was too noisy.", "The landlord asked for more money.", "The lift was out of order."], correct: 0,
            why: "« The heating wasn't working, and there was no hot water »." },
          { q: "Why did Priya call the letting agency?", qFr: "Pourquoi Priya a-t-elle appelé l'agence ?",
            opts: ["She wanted to leave the flat.", "The landlord still hadn't answered after two days.", "She wanted a discount.", "The technician told her to."], correct: 1,
            why: "« Two days later, she still hadn't heard anything, so she called the letting agency instead »." },
          { q: "“Leave it with me — we'll sort it out today” means…", qFr: "« Leave it with me — we'll sort it out today » veut dire…",
            opts: ["“You must repair it yourself today.”", "“We're leaving today.”", "“We'll deal with the problem today.”", "“Please call back tomorrow.”"], correct: 2,
            why: "« sort out » = régler un problème ; « Leave it with me » = je m'en occupe." },
          { q: "How did the story end?", qFr: "Comment l'histoire s'est-elle terminée ?",
            opts: ["Priya paid for the repair.", "Priya had to move out.", "Priya lost her deposit.", "The repair was free and she got a small discount."], correct: 3,
            why: "« the agency agreed not to charge Priya for the repair. They also offered her a small discount »." }
        ]
      },
      // --------------------------------------------------------------- VI
      {
        id: "listening", num: "VI", title: "Listening Comprehension", titleFr: "Compréhension orale",
        points: 15, skill: "co", type: "mcq",
        instructions: "Listen to each recording (you can play it again), then choose the right answer.",
        instructionsFr: "Écoute chaque enregistrement (tu peux le réécouter), puis choisis la bonne réponse.",
        items: [
          { audio: "Good evening. I booked a table for four under the name Dupont, but I think there's been a mistake. You've given us a table for two.",
            q: "What is the problem?", qFr: "Quel est le problème ?",
            opts: ["The table is too small.", "They have no booking.", "The food is cold.", "The bill is wrong."], correct: 0,
            why: "Réservation pour quatre, mais « You've given us a table for two »." },
          { audio: [{ who: "A", text: "Hello, I'd like to return these shoes. They're too small." }, { who: "B", text: "No problem. Would you like a refund, or would you prefer to exchange them for a bigger size?" }, { who: "A", text: "I'll exchange them, please." }],
            q: "What does the customer choose?", qFr: "Que choisit la cliente ?",
            opts: ["A refund", "A smaller size", "An exchange for a bigger size", "To keep the shoes"], correct: 2,
            why: "« I'll exchange them » : elle les échange contre une taille au-dessus." },
          { audio: "Thank you for calling City Bank. All our advisers are busy at the moment. Please hold on, or visit our website to book an appointment.",
            q: "What can the caller do on the website?", qFr: "Que peut faire la personne sur le site internet ?",
            opts: ["Open an account", "Book an appointment", "Speak to an adviser", "Cancel a card"], correct: 1,
            why: "« visit our website to book an appointment »." },
          { audio: [{ who: "A", text: "Hi, a return ticket to Oxford, please." }, { who: "B", text: "Coming back today?" }, { who: "A", text: "No, on Sunday." }, { who: "B", text: "That's twenty-four pounds, then." }],
            q: "When is the passenger coming back?", qFr: "Quand le voyageur revient-il ?",
            opts: ["Today", "On Saturday", "Next week", "On Sunday"], correct: 3,
            why: "« Coming back today? — No, on Sunday. »" },
          { audio: [{ who: "A", text: "Excuse me, do you happen to have this jumper in a medium?" }, { who: "B", text: "I'm afraid it's out of stock, but we can order it for you. It'll be here on Thursday." }],
            q: "What does the shop assistant offer?", qFr: "Que propose le vendeur ?",
            opts: ["A discount", "To order the jumper, which will arrive on Thursday", "A different colour", "A refund"], correct: 1,
            why: "« it's out of stock, but we can order it for you. It'll be here on Thursday »." }
        ]
      },
      // -------------------------------------------------------------- VII
      {
        id: "speaking", num: "VII", title: "Speaking – Role Play", titleFr: "Expression orale – jeu de rôle",
        points: 10, skill: "eo", type: "ai-oral",
        instructions: "Press the microphone and speak for about one minute. You can try again, or add to your answer. If the microphone doesn't work, type what you would say.",
        instructionsFr: "Appuie sur le micro et parle environ une minute. Tu peux recommencer, ou compléter ta réponse. Si le micro ne fonctionne pas, écris ce que tu dirais.",
        prompt: "You are at a hotel reception. You booked a double room with a sea view, but you've been given a small room next to the lift, and the air conditioning is out of order. Speak to the receptionist: explain the problem, ask politely for a solution, negotiate, and conclude.",
        promptFr: "Tu es à la réception d'un hôtel. Tu avais réservé une chambre double avec vue sur la mer, mais on t'a donné une petite chambre à côté de l'ascenseur, et la climatisation est en panne. Parle au réceptionniste : explique le problème, demande poliment une solution, négocie et conclus.",
        minWords: 40, targetSeconds: 60,
        rubric: "Total 10 points. Task (3 pts): the four steps are present — explain the two problems, ask for a solution (another room, a repair), negotiate (e.g. a discount, a free breakfast, an upgrade), conclude (thank / accept). Politeness (3 pts): polite structures from the lesson (I think there's been a mistake, I'm afraid…, Would it be possible to…?, Could you…?, I'd like to…, Would you mind + -ing), no \"I want\" / aggressive tone. Grammar and vocabulary (2 pts): B1 accuracy, everyday vocabulary (booking, out of order, replace, sort out…). Fluency and pronunciation (2 pts): judged from the transcript (about one minute ≈ 90-150 words, natural sentences; recognition errors suggesting mispronounced words lower this score; mention the words to practise).",
        reference: "Example: \"Good evening. I'm afraid there's been a mistake with my room. I booked a double room with a sea view, but I've been given a small room next to the lift, and the air conditioning is out of order. Would it be possible to change rooms? … If there's no sea view available tonight, could you offer us a discount or breakfast? … That would be great, thank you very much.\""
      }
    ]
  };

  E[31] = {
    code: "B1.5",
    title: "Level test: B1.5 – Working in English",
    titleFr: "Contrôle de niveau : B1.5 – Travailler en anglais",
    objective: "Pass level B1.5 and move on to B1.6: talking about your job and responsibilities, meetings, office phrasal verbs, modals of obligation, permission, advice and probability, reading, listening, writing and speaking.",
    objectiveFr: "Valider le niveau B1.5 et passer au B1.6 : parler de son travail et de ses responsabilités, réunions, phrasal verbs du bureau, modaux d'obligation, de permission, de conseil et de probabilité, compréhension écrite et orale, expression écrite et orale.",
    sections: [
      // ---------------------------------------------------------------- I
      {
        id: "vocab", num: "I", title: "Vocabulary & Phrasal Verbs", titleFr: "Vocabulaire et phrasal verbs",
        points: 15, skill: "vo", type: "fill",
        instructions: "Complete the sentences with the right word or phrasal verb from the list. Change the form of the verb if necessary.",
        instructionsFr: "Complète les phrases avec le mot ou le phrasal verb qui convient dans la liste. Change la forme du verbe si nécessaire.",
        bank: ["deadline", "agenda", "minutes", "workload", "behind schedule", "in charge of", "promotion", "follow up", "set up", "look into", "bring up", "wrap up"],
        items: [
          { text: "The ___ for the report is Friday at 5 pm, so we can't be late.",
            blanks: [["deadline"]],
            why: "« a deadline » = une date limite. On « meet » une deadline (on la respecte) ou on la « miss »." },
          { text: "Could you send everyone the ___ before the meeting, so we know what we're going to discuss?",
            blanks: [["agenda"]],
            why: "« an agenda » = un ordre du jour. Faux ami : un agenda (carnet) = « a diary » / « a planner »." },
          { text: "Who's taking the ___ today? Someone needs to write down the decisions.",
            blanks: [["minutes"]],
            why: "« the minutes » = le compte rendu de réunion, toujours au pluriel dans ce sens." },
          { text: "I have a very heavy ___ this month: three projects at the same time!",
            blanks: [["workload"]],
            why: "« a heavy workload » = une grosse charge de travail." },
          { text: "I'm ___ a team of six people in the marketing department.",
            blanks: [["in charge of", "responsible for"]],
            why: "« be in charge of » = être responsable de, diriger (+ nom ou -ing)." },
          { text: "We're two weeks ___ because a supplier delivered late.",
            blanks: [["behind schedule"]],
            why: "« behind schedule » = en retard sur le planning (≠ « on schedule », « ahead of schedule »)." },
          { text: "Let's ___ a meeting with the client next Tuesday.",
            blanks: [["set up", "arrange"]],
            why: "« set up a meeting » = organiser une réunion." },
          { text: "Our manager is ___ the problem; she'll tell us what she finds.",
            blanks: [["looking into"]],
            why: "« look into » = examiner, se pencher sur. Au présent continu : « she is looking into it »." },
          { text: "Before we finish, I'd like to ___ the question of the budget.",
            blanks: [["bring up", "raise"]],
            why: "« bring up a subject » = soulever, aborder un sujet." },
          { text: "It's almost twelve. Let's ___ here and continue tomorrow.",
            blanks: [["wrap up", "wrap things up", "stop"]],
            why: "« Let's wrap up here » = on va s'arrêter là, on conclut." },
          { text: "I'll ___ on this with an email tomorrow morning.",
            blanks: [["follow up"]],
            why: "« follow up on something » = assurer le suivi, relancer." },
          { text: "She got a ___ last year: she's now head of the sales team.",
            blanks: [["promotion"]],
            why: "« get a promotion » = être promu(e)." }
        ]
      },
      // --------------------------------------------------------------- II
      {
        id: "grammar", num: "II", title: "Grammar – Modals", titleFr: "Grammaire – les modaux",
        points: 20, skill: "gr", type: "fill",
        instructions: "Complete the sentences with the right modal form. The meaning is given in brackets when necessary. Type only the missing words.",
        instructionsFr: "Complète les phrases avec la forme modale qui convient. Le sens est indiqué entre parenthèses si nécessaire. Tape seulement les mots manquants.",
        items: [
          { header: { en: "A. Obligation and permission", fr: "A. Obligation et permission" },
            text: "In our office, everyone ___ wear a badge. It's the company rule. (obligation)",
            blanks: [["has to", "must", "needs to", "has got to"]],
            why: "Règle extérieure (l'entreprise) → « has to » (avec -s à la 3e personne). « must » est aussi possible." },
          { text: "You ___ come to the meeting on Friday if you're busy. It's optional. (not necessary)",
            blanks: [["don't have to", "do not have to", "don't need to", "do not need to", "needn't", "need not"]],
            why: "Pas d'obligation → « don't have to » (tu n'es pas obligé(e)). Surtout pas « mustn't » (= interdit)." },
          { text: "You ___ smoke in the building. It's strictly forbidden. (prohibition)",
            blanks: [["mustn't", "must not", "can't", "cannot", "can not", "aren't allowed to", "are not allowed to"]],
            why: "Interdiction → « mustn't » (ou « can't », « aren't allowed to »)." },
          { text: "Yesterday I ___ (have to) stay late to finish the report.",
            blanks: [["had to"]],
            why: "Au passé, l'obligation (must ou have to) devient « had to »." },
          { text: "___ we allowed to work from home on Fridays?",
            blanks: [["Are"]],
            why: "Permission → « be allowed to » ; question : « Are we allowed to…? »." },
          { text: "I must ___ (call) the client before noon.",
            blanks: [["call"]],
            why: "Jamais de « to » après must : « I must call » (pas « I must to call »)." },
          { header: { en: "B. Advice and probability", fr: "B. Conseil et probabilité" },
            text: "You look exhausted. You ___ take a break. (advice)",
            blanks: [["should", "ought to"]],
            why: "Conseil → « should » (ou « ought to »)." },
          { text: "She's been in meetings since 8 am. She ___ be exhausted! (I'm almost sure)",
            blanks: [["must"]],
            why: "Déduction quasi certaine → « must » : « she must be exhausted » (= elle doit être épuisée)." },
          { text: "That ___ be right! The figures were perfect yesterday. (I'm sure it's impossible)",
            blanks: [["can't", "cannot", "can not", "couldn't", "could not"]],
            why: "Le contraire du « must » de déduction, c'est « can't » (quasi impossible), pas « mustn't »." },
          { text: "I'm not sure where Tom is. He ___ be in a meeting. (maybe)",
            blanks: [["might", "may", "could"]],
            why: "Possibilité → « might / may / could » : il est peut-être en réunion." }
        ]
      },
      // -------------------------------------------------------------- III
      {
        id: "traps", num: "III", title: "Office English – French Traps", titleFr: "L'anglais du bureau – les pièges du français",
        points: 10, skill: "vo", type: "fill",
        instructions: "Translate the underlined idea into natural English. Type only the missing words.",
        instructionsFr: "Traduis l'idée en anglais naturel. Tape seulement les mots manquants.",
        items: [
          { text: "« J'assiste à une réunion à 10 h. » → I'm ___ a meeting at 10.",
            blanks: [["attending", "going to", "in"]],
            why: "« attend a meeting » = assister à une réunion. Faux ami : « attendre » = « wait (for) »." },
          { text: "« Je note ça dans mon agenda. » → I'll write it in my ___.",
            blanks: [["diary", "planner", "calendar", "agenda"]],
            why: "Le carnet = « a diary » (UK) ou « a planner » (US). En anglais, « an agenda » est surtout l'ordre du jour d'une réunion." },
          { text: "« Je suggère qu'on reporte la réunion. » → I suggest ___ the meeting.",
            blanks: [["postponing", "we postpone", "that we postpone", "putting off", "delaying"]],
            why: "« suggest + -ing » ou « suggest (that) we + base verbale ». Jamais « I suggest you to… »." },
          { text: "« Mon supérieur direct est la directrice financière. » → I ___ the finance director.",
            blanks: [["report to", "report directly to"]],
            why: "« I report to… » = je dépends de…, je rends compte à…" },
          { text: "« Elle est chargée des relations clients. » → She's responsible ___ customer relations.",
            blanks: [["for"]],
            why: "« responsible for » : toujours « for », jamais « of »." }
        ]
      },
      // --------------------------------------------------------------- IV
      {
        id: "writing", num: "IV", title: "Writing – A Meeting Report", titleFr: "Expression écrite – un compte rendu",
        points: 15, skill: "ee", type: "ai-text",
        instructions: "Write an email of about 120 to 160 words.",
        instructionsFr: "Écris un e-mail d'environ 120 à 160 mots.",
        prompt: "You have just attended a team meeting about a project that is behind schedule. Write a short report email to your line manager, who couldn't attend: explain the problem, the solution the team suggested, who is responsible for what, and the next steps. Use at least three modals (must, have to, should, might…) and at least three office phrasal verbs (follow up, set up, deal with, look into, bring up, wrap up).",
        promptFr: "Tu viens d'assister à une réunion d'équipe sur un projet en retard. Écris un court e-mail de compte rendu à ton/ta supérieur(e), qui n'a pas pu venir : explique le problème, la solution proposée par l'équipe, qui s'occupe de quoi, et les prochaines étapes. Utilise au moins trois modaux (must, have to, should, might…) et au moins trois phrasal verbs du bureau (follow up, set up, deal with, look into, bring up, wrap up).",
        minWords: 120, maxWords: 160,
        rubric: "Total 15 points. Task (5 pts): the email clearly presents the problem, the proposed solution, who is responsible for what, and the next steps (lose about 1 point per missing element). Modals (3 pts): at least three modals used correctly with the right meaning (obligation, absence of obligation, advice, probability); no \"to\" after must/should; mustn't vs don't have to used correctly if present. Phrasal verbs and work vocabulary (3 pts): at least three office phrasal verbs used correctly, plus vocabulary such as deadline, behind schedule, agenda, minutes, update. Register and organisation (2 pts): neutral-professional email with an appropriate greeting and closing, clear paragraphs. Accuracy and length (2 pts): B1 accuracy; about 120-160 words (deduct up to 1 point if clearly under 90 or over 220 words).",
        reference: "Model: Hi Sarah, here's a quick update on this morning's meeting. We're two weeks behind schedule because a supplier delivered late, so we might not meet the deadline. Tom brought up an idea: splitting the project into two phases. We don't have to deliver everything on 30 June — the client only needs the first phase. Anna is looking into the costs, and I'll follow up with the supplier. We should set up a call with the client this week. Could you let me know if you agree? Best, …"
      },
      // ---------------------------------------------------------------- V
      {
        id: "reading", num: "V", title: "Reading Comprehension", titleFr: "Compréhension écrite",
        points: 15, skill: "ce", type: "mcq",
        instructions: "Read the text, then choose the right answer for each question.",
        instructionsFr: "Lis le texte, puis choisis la bonne réponse pour chaque question.",
        passage: "Every Thursday at nine, Karim's team has an online meeting with their colleagues in Singapore. Karim is in charge of the project, so he usually starts with a quick update and then goes through the agenda.\n\nLast week, the meeting didn't go as planned. The Singapore team announced that they were three weeks behind schedule because two developers had left the company. Everyone looked worried: the client's deadline was only a month away.\n\nInstead of looking for someone to blame, Karim asked everyone to suggest solutions. Mei, a young engineer, brought up an interesting idea: “What if we deliver the most important features first, and the rest in a second phase?” Karim liked the idea, but he explained that they had to check with the client before making any promises.\n\nAfter the meeting, he wrote the minutes and sent them to both teams. He also called the client, who agreed to the two-phase plan. “You don't have to do everything at once,” she said, “but you must keep us informed.”\n\nKarim's line manager was impressed. “You dealt with that really well,” she told him. “You might be ready for a promotion soon.”",
        items: [
          { q: "What is Karim's role?", qFr: "Quel est le rôle de Karim ?",
            opts: ["He is a developer in Singapore.", "He is the client.", "He is Mei's line manager.", "He is in charge of the project."], correct: 3,
            why: "« Karim is in charge of the project »." },
          { q: "Why is the Singapore team behind schedule?", qFr: "Pourquoi l'équipe de Singapour est-elle en retard ?",
            opts: ["Two developers had left the company.", "The client changed the project.", "They had internet problems.", "They forgot the deadline."], correct: 0,
            why: "« because two developers had left the company »." },
          { q: "Who suggested the two-phase plan?", qFr: "Qui a proposé le plan en deux phases ?",
            opts: ["Karim", "The client", "Mei", "Karim's line manager"], correct: 2,
            why: "« Mei, a young engineer, brought up an interesting idea »." },
          { q: "“You don't have to do everything at once, but you must keep us informed” means…", qFr: "« You don't have to do everything at once, but you must keep us informed » veut dire…",
            opts: ["doing everything at once is forbidden, and informing the client is optional.", "doing everything at once isn't necessary, but informing the client is compulsory.", "both things are optional.", "both things are forbidden."], correct: 1,
            why: "« don't have to » = pas obligatoire ; « must » = obligatoire. (Interdit serait « mustn't ».)" },
          { q: "What does Karim's line manager think?", qFr: "Que pense la supérieure de Karim ?",
            opts: ["He should have blamed the Singapore team.", "He might get a promotion soon.", "He might lose his job.", "He must write better minutes."], correct: 1,
            why: "« You might be ready for a promotion soon » (might = probabilité)." }
        ]
      },
      // --------------------------------------------------------------- VI
      {
        id: "listening", num: "VI", title: "Listening Comprehension", titleFr: "Compréhension orale",
        points: 15, skill: "co", type: "mcq",
        instructions: "Listen to each recording (you can play it again), then choose the right answer.",
        instructionsFr: "Écoute chaque enregistrement (tu peux le réécouter), puis choisis la bonne réponse.",
        items: [
          { audio: "Hi everyone, just a quick reminder: the meeting has been moved to three o'clock, and it'll be in room four, not room two. Please bring your laptops.",
            q: "Where will the meeting take place?", qFr: "Où la réunion aura-t-elle lieu ?",
            opts: ["In room two", "Online", "In room four", "In the café"], correct: 2,
            why: "« it'll be in room four, not room two »." },
          { audio: [{ who: "A", text: "Do we have to wear a suit on Fridays?" }, { who: "B", text: "No, you don't have to. Casual clothes are fine, but you mustn't wear shorts." }],
            q: "What is forbidden on Fridays?", qFr: "Qu'est-ce qui est interdit le vendredi ?",
            opts: ["Wearing shorts", "Wearing a suit", "Wearing casual clothes", "Wearing jeans"], correct: 0,
            why: "« you mustn't wear shorts » (mustn't = interdit) ; le costume n'est pas obligatoire (don't have to)." },
          { audio: [{ who: "A", text: "Where's Laura? She's never late." }, { who: "B", text: "She might be stuck in traffic. There was an accident on the motorway this morning." }],
            q: "What does the second speaker think?", qFr: "Que pense la deuxième personne ?",
            opts: ["Laura is certainly ill.", "Laura has left the company.", "Laura is in another meeting.", "Laura is maybe stuck in traffic."], correct: 3,
            why: "« She might be stuck in traffic » : « might » = peut-être." },
          { audio: "Hello, it's Ben from the IT department. I'm calling about the problem with your email. We're looking into it, and I'll follow up with you this afternoon.",
            q: "What will Ben do this afternoon?", qFr: "Que fera Ben cet après-midi ?",
            opts: ["Contact the person again with news", "Repair the computer at the person's desk", "Send a new laptop", "Cancel a meeting"], correct: 0,
            why: "« I'll follow up with you this afternoon » = je reviendrai vers vous cet après-midi." },
          { audio: [{ who: "A", text: "Right, I think we've covered everything. Let's wrap up." }, { who: "B", text: "Before we finish, can I just bring up the holiday schedule?" }],
            q: "What does the second speaker want?", qFr: "Que veut la deuxième personne ?",
            opts: ["To end the meeting now", "To raise one more topic", "To take a holiday now", "To take the minutes"], correct: 1,
            why: "« can I just bring up the holiday schedule? » = aborder encore un sujet avant de conclure." }
        ]
      },
      // -------------------------------------------------------------- VII
      {
        id: "speaking", num: "VII", title: "Speaking – In a Meeting", titleFr: "Expression orale – en réunion",
        points: 10, skill: "eo", type: "ai-oral",
        instructions: "Press the microphone and speak for about one minute. You can try again, or add to your answer. If the microphone doesn't work, type what you would say.",
        instructionsFr: "Appuie sur le micro et parle environ une minute. Tu peux recommencer, ou compléter ta réponse. Si le micro ne fonctionne pas, écris ce que tu dirais.",
        prompt: "You are in a meeting with a new manager. Briefly present your job and your responsibilities (real or imaginary). Then explain a problem your team has (for example, a project behind schedule or too heavy a workload) and propose a solution.",
        promptFr: "Tu es en réunion avec un(e) nouveau/nouvelle responsable. Présente brièvement ton poste et tes responsabilités (réels ou imaginaires). Puis explique un problème de ton équipe (par exemple un projet en retard ou une charge de travail trop lourde) et propose une solution.",
        minWords: 40, targetSeconds: 60,
        rubric: "Total 10 points. Content (3 pts): the learner presents their job and responsibilities, explains a problem and proposes a concrete solution. Modals and phrasal verbs (3 pts): correct use of modals (have to, must, don't have to, should, might…) and at least two office phrasal verbs (follow up, set up, deal with, look into, bring up, wrap up). Vocabulary (2 pts): work vocabulary (in charge of, responsible for, deadline, workload, behind schedule, colleague…). Fluency and pronunciation (2 pts): judged from the transcript (about one minute ≈ 90-150 words, natural sentences; recognition errors suggesting mispronounced words lower this score; mention the words to practise, e.g. colleague, career).",
        reference: "Example: \"I'm a project manager, so I'm in charge of a team of five and I'm responsible for the budget. At the moment we're behind schedule because we have to deal with a lot of client requests. I'd like to suggest setting up a weekly update meeting, and I think we should hire a temporary assistant. I can look into the costs and follow up next week.\""
      }
    ]
  };

  E[32] = {
    code: "B1.6",
    title: "Level test: B1.6 – Travel Without Panic",
    titleFr: "Contrôle de niveau : B1.6 – Voyager sans paniquer",
    objective: "Pass level B1.6 and move on to B1.7: travel vocabulary (airport, hotel, train, car hire, luggage, delays), future forms (will, going to, present continuous, present simple for timetables), the first conditional, reading, listening, writing and speaking about a travel problem.",
    objectiveFr: "Valider le niveau B1.6 et passer au B1.7 : vocabulaire du voyage (aéroport, hôtel, train, location de voiture, bagages, retards), formes du futur (will, going to, présent continu, présent simple pour les horaires), premier conditionnel, compréhension écrite et orale, expression écrite et orale autour d'un imprévu de voyage.",
    sections: [
      // ---------------------------------------------------------------- I
      {
        id: "vocab", num: "I", title: "Travel Vocabulary", titleFr: "Vocabulaire du voyage",
        points: 15, skill: "vo", type: "fill",
        instructions: "Complete each sentence with a word or expression from the list. Each answer is used once. Three words are not needed.",
        instructionsFr: "Complète chaque phrase avec un mot ou une expression de la liste. Chaque réponse ne sert qu'une fois. Trois mots ne servent pas.",
        bank: ["boarding pass", "delayed", "cancelled", "fully booked", "baggage reclaim", "voucher", "platform", "hand luggage", "confirmation number", "check out", "gate", "insurance", "fuel"],
        items: [
          { text: "Can I see your passport and your ___, please?",
            blanks: [["boarding pass"]],
            why: "« A boarding pass » = la carte d'embarquement : on la montre avec le passeport à chaque contrôle." },
          { text: "Our flight is ___ by two hours because of the fog, so we're going to have lunch at the airport.",
            blanks: [["delayed"]],
            why: "« delayed by two hours » = retardé de deux heures : le vol partira, mais plus tard (≠ cancelled)." },
          { text: "The 7:40 to Rome has been ___. The airline is going to rebook everybody on tomorrow's flight.",
            blanks: [["cancelled", "canceled"]],
            why: "« cancelled » = annulé : le vol n'aura pas lieu, d'où le « rebook » sur le vol du lendemain. UK : deux l." },
          { text: "I'm sorry, we're ___ tonight — there isn't a single room left.",
            blanks: [["fully booked"]],
            why: "« fully booked » = complet : toutes les chambres sont réservées." },
          { text: "When I arrived in Dublin, my suitcase wasn't on the belt at ___.",
            blanks: [["baggage reclaim"]],
            why: "« baggage reclaim » = la zone de récupération des bagages, avec le tapis (« the belt »). US : baggage claim." },
          { text: "Because of the delay, the airline gave every passenger a meal ___ worth ten pounds.",
            blanks: [["voucher"]],
            why: "« a voucher » = un bon (repas, réduction) offert par la compagnie en cas de retard." },
          { text: "The next train to York leaves from ___ 4 in five minutes.",
            blanks: [["platform"]],
            why: "Pour un train, on parle de « platform » (quai / voie) ; « gate » est réservé à l'avion." },
          { text: "On this cheap flight, you can only take one small bag as ___.",
            blanks: [["hand luggage"]],
            why: "« hand luggage » = le bagage cabine. Indénombrable : jamais « a luggage » ni « luggages »." },
          { text: "Could you give me your ___? It's the reference at the top of your booking email.",
            blanks: [["confirmation number"]],
            why: "« a confirmation number » = le numéro de réservation qui figure sur l'e-mail de confirmation." },
          { text: "Guests must ___ of their rooms before 11 a.m. on the day they leave.",
            blanks: [["check out"]],
            why: "« to check out (of a hotel) » = libérer la chambre et régler la note ; le contraire de « to check in »." }
        ]
      },
      // --------------------------------------------------------------- II
      {
        id: "verbs", num: "II", title: "Verb Forms – Talking About the Future", titleFr: "Conjugaison – parler du futur",
        points: 15, skill: "cj", type: "fill",
        instructions: "Put the verbs in brackets in the correct form. Read the whole sentence first: the context tells you which future form to use (will, going to, present continuous or present simple). Some sentences revise tenses you already know.",
        instructionsFr: "Mets les verbes entre parenthèses à la bonne forme. Lis toute la phrase d'abord : le contexte t'indique quelle forme du futur employer (will, going to, présent continu ou présent simple). Certaines phrases révisent des temps déjà vus.",
        items: [
          { text: "Look at those black clouds over the runway! It ___ (rain).",
            blanks: [["is going to rain"]],
            why: "Prédiction fondée sur ce qu'on voit (les nuages noirs) → « going to » : « It's going to rain »." },
          { text: "— Oh no, the printer isn't working! — Don't worry, I ___ (print) your boarding pass at the desk.",
            blanks: [["will print"]],
            why: "Décision prise au moment où l'on parle, ou offre de service → « will » : « I'll print it »." },
          { text: "I ___ (meet) my sister at the airport at six tomorrow — we arranged it last week.",
            blanks: [["am meeting", "am going to meet"]],
            why: "Projet organisé avec une autre personne, une heure et un lieu → présent continu : « I'm meeting my sister »." },
          { text: "According to the timetable, the last train to Manchester ___ (leave) at 23:40 tonight.",
            blanks: [["leaves"]],
            why: "Horaire officiel (train, vol, cours) → présent simple, même pour le futur : « the train leaves at 23:40 »." },
          { text: "If the flight ___ (be) late, we ___ (miss) our connection in London.",
            blanks: [["is"], ["will miss"]],
            why: "Premier conditionnel : If + présent simple, will + base verbale. Jamais « will » après « if » : « If the flight is late, we'll miss… »." },
          { text: "I ___ (call) you as soon as I ___ (land) in Edinburgh.",
            blanks: [["will call"], ["land"]],
            why: "Après « as soon as » (comme après when, before, after), on met le présent simple ; « will » va dans l'autre partie de la phrase." },
          { text: "Unless you ___ (hurry), you'll miss the bus to the airport.",
            blanks: [["hurry"]],
            why: "« Unless » = if… not, suivi du présent simple (forme affirmative) : « Unless you hurry » = si tu ne te dépêches pas." },
          { text: "We ___ (hire) a car when we ___ (get) to Lisbon — we decided that last night.",
            blanks: [["are going to hire", "are hiring"], ["get"]],
            why: "Intention déjà décidée → « going to » ; après « when » à sens futur → présent simple : « when we get to Lisbon »." },
          { header: { en: "Revision: tenses you already know", fr: "Révision : temps déjà vus" },
            text: "I'm still waiting at the belt: my suitcase ___ (not / arrive) yet.",
            blanks: [["hasn't arrived", "has not arrived"]],
            why: "Révision du Present Perfect : « yet » en phrase négative = pas encore, résultat visible maintenant." },
          { text: "Last summer, our plane ___ (take) off three hours late.",
            blanks: [["took"]],
            why: "Révision du prétérit : « last summer » = moment passé terminé. « take » est irrégulier : take – took – taken." }
        ]
      },
      // -------------------------------------------------------------- III
      {
        id: "grammar", num: "III", title: "Grammar – Conditions, Requests and Travel Words", titleFr: "Grammaire – conditions, demandes et petits mots du voyage",
        points: 15, skill: "gr", type: "fill",
        instructions: "Complete each sentence with ONE missing word.",
        instructionsFr: "Complète chaque phrase avec UN seul mot manquant.",
        items: [
          { text: "You'll miss your train ___ you leave now.",
            blanks: [["unless"]],
            why: "« unless » = à moins que / si… ne… pas : « You'll miss your train unless you leave now » = si tu ne pars pas maintenant." },
          { text: "I'll text you as ___ as I get to the hotel.",
            blanks: [["soon"]],
            why: "« as soon as » = dès que. L'expression est figée : as + soon + as." },
          { text: "We'll wait here ___ the taxi arrives. Then we'll leave together.",
            blanks: [["until", "till", "til"]],
            why: "« until » = jusqu'à ce que ; comme après « when », on garde le présent simple : « until the taxi arrives »." },
          { text: "I've only got two pieces ___ luggage: a suitcase and a backpack.",
            blanks: [["of"]],
            why: "« luggage » est indénombrable : pour compter, on dit « a piece of luggage / two pieces of luggage »." },
          { text: "How ___ luggage are you taking on the plane?",
            blanks: [["much"]],
            why: "Nom indénombrable → « How much…? » (et non « How many… ? »)." },
          { text: "It's cheaper to travel from London to Edinburgh ___ train than by plane.",
            blanks: [["by"]],
            why: "Moyen de transport sans article → « by » : by train, by plane, by car (mais « on the train »)." },
          { text: "Excuse me, ___ it be possible to change my seat? I'd like a window seat.",
            blanks: [["would", "could"]],
            why: "Révision B1.4 : « Would it be possible to…? » = demande très polie, idéale au comptoir." },
          { text: "Do you happen ___ know where the car hire desk is?",
            blanks: [["to"]],
            why: "« Do you happen to know…? » = vous ne sauriez pas… ? : « happen » est suivi de « to + base verbale »." },
          { text: "Could you tell me where the lost luggage desk ___?",
            blanks: [["is"]],
            why: "Révision B1.3 : dans une question indirecte, sujet + verbe sans inversion : « where the desk is »." },
          { text: "My flight has been cancelled. Could you rebook me ___ the next one, please?",
            blanks: [["on"]],
            why: "« to rebook someone on a flight » = replacer quelqu'un sur un vol ; on est « on a flight / on the plane »." }
        ]
      },
      // --------------------------------------------------------------- IV
      {
        id: "writing", num: "IV", title: "Writing – Fixing a Travel Problem by Email", titleFr: "Expression écrite – régler un imprévu de voyage par e-mail",
        points: 15, skill: "ee", type: "ai-text",
        instructions: "Write an email of about 100 to 140 words.",
        instructionsFr: "Écris un e-mail d'environ 100 à 140 mots.",
        prompt: "You are flying to Edinburgh for a three-night holiday. Your flight tonight has been cancelled and the airline has rebooked you on a flight tomorrow morning. Write to your hotel (the Castle View Hotel). Explain the situation, give your booking name and confirmation number, say when you are arriving now, ask them to keep your room for the other two nights and ask one practical question (for example, about late check-in, luggage or the airport shuttle). Use at least one future form (will / going to / present continuous) and at least one first-conditional sentence (If…, … will…).",
        promptFr: "Tu pars trois nuits en vacances à Édimbourg. Ton vol de ce soir a été annulé et la compagnie t'a replacé(e) sur un vol demain matin. Écris à ton hôtel (le Castle View Hotel). Explique la situation, donne le nom de la réservation et ton numéro de confirmation, dis quand tu arrives maintenant, demande de garder ta chambre pour les deux autres nuits et pose une question pratique (par exemple sur l'arrivée tardive, les bagages ou la navette de l'aéroport). Utilise au moins une forme du futur (will / going to / présent continu) et au moins une phrase au premier conditionnel (If…, … will…).",
        minWords: 100, maxWords: 140,
        rubric: "Total 15 points. Task achievement (5 pts): 1 pt each for — explaining that the flight was cancelled; booking name and confirmation number; new arrival day/time; asking to keep the room for the remaining nights; one practical question. Grammar & verb forms (4 pts): at least one correct future form used appropriately (e.g. \"I'm arriving tomorrow at 11\", \"I'll pay for tonight\", \"I'm going to take the shuttle\") — 2 pts; at least one correct first conditional with present simple after 'if' (e.g. \"If my flight is on time, I'll arrive at noon\") — 2 pts; give 1 pt instead of 2 if the structure is attempted with an error (e.g. \"If it will be late\"). Vocabulary & register (3 pts): travel vocabulary from the lesson (cancelled, rebook, booking, confirmation number, check in/out, fully booked, luggage…) and a polite, neutral email register (Dear…, I'm writing to…, Could you…?, Would it be possible…?, Best regards). Coherence & length (3 pts): clear order (situation → request → question → closing), linking words, about 100-140 words; deduct up to 1 point if clearly under 70 or over 200 words.",
        reference: "Example: Dear Sir or Madam, I have a booking under the name Martin (confirmation number CV4821) for three nights from today. Unfortunately, my flight tonight has been cancelled, and the airline has rebooked me on the 8:15 flight tomorrow. I'm arriving in Edinburgh at 9:30, so I'll be at the hotel around 11. Could you please keep my room for the other two nights? I'm happy to pay for tonight if necessary. Would it be possible to leave my luggage at reception if the room isn't ready? If the flight is on time, I'll take the airport bus. Best regards, Léa Martin"
      },
      // ---------------------------------------------------------------- V
      {
        id: "reading", num: "V", title: "Reading Comprehension", titleFr: "Compréhension écrite",
        points: 15, skill: "ce", type: "mcq",
        instructions: "Read the text, then choose the right answer for each question.",
        instructionsFr: "Lis le texte, puis choisis la bonne réponse pour chaque question.",
        passage: "Thirty days before their holiday in Portugal, the Diallo family had a perfect plan. Aminata, her husband Karim and their two children were flying from Lyon to Lisbon on 2 August. They were picking up a hire car at the airport and driving to a small hotel by the sea.\n\nThen the problems started. First, an email arrived: their flight had been moved to 3 August, at six in the morning. “If we arrive a day late, we'll lose one night at the hotel,” Karim said. Aminata called the hotel at once. The receptionist was helpful: the hotel was fully booked in August, but they agreed to move the booking by one day, so the family wouldn't lose any money.\n\nNext, the car. The hire company only had one car left for the new date, and it was much bigger and more expensive. Aminata compared prices online and found a cheaper company with an office in the city centre. “We're going to take the metro from the airport and pick up the car in town,” she decided. It meant thirty more minutes of travel, but it saved them almost two hundred euros.\n\nFinally, their son's passport was going to expire in September. Karim checked the rules: for Portugal, an identity card is enough for EU citizens, so the problem disappeared.\n\n“The secret,” Aminata says, “is to deal with one problem at a time. Panic doesn't fix anything — a phone call usually does.”",
        items: [
          { q: "What was the first change to the family's plan?", qFr: "Quel a été le premier changement dans le programme de la famille ?",
            opts: ["The hotel cancelled their booking.", "Their flight was moved to the next day.", "The hire company closed its airport office.", "Their son lost his passport."], correct: 1,
            why: "« their flight had been moved to 3 August » : le vol a été décalé d'un jour (du 2 au 3 août)." },
          { q: "How did the hotel solve the problem?", qFr: "Comment l'hôtel a-t-il réglé le problème ?",
            opts: ["It gave the family a voucher.", "It found them a room in another hotel.", "It changed the dates of the booking.", "It offered them one free night."], correct: 2,
            why: "« they agreed to move the booking by one day » : les dates ont été décalées, sans perte d'argent." },
          { q: "Why did Aminata choose a different car hire company?", qFr: "Pourquoi Aminata a-t-elle choisi un autre loueur de voitures ?",
            opts: ["It was cheaper, even if the journey was a little longer.", "It had an office at the airport.", "It offered bigger cars.", "The first company refused to rent them a car."], correct: 0,
            why: "Le premier loueur ne proposait qu'une voiture plus grande et plus chère ; l'autre fait économiser presque 200 € contre 30 minutes de trajet en plus." },
          { q: "“We're going to take the metro” expresses…", qFr: "« We're going to take the metro » exprime…",
            opts: ["a timetable.", "a prediction based on evidence.", "a decision she has just made and intends to carry out.", "a promise to her husband."], correct: 2,
            why: "« she decided » : elle vient de choisir cette solution et en fait son intention → « going to »." },
          { q: "What is Aminata's advice for travel problems?", qFr: "Quel est le conseil d'Aminata face aux imprévus de voyage ?",
            opts: ["Always book everything at the last minute.", "Stay calm and solve problems one by one.", "Never travel in August.", "Avoid hiring a car abroad."], correct: 1,
            why: "« deal with one problem at a time. Panic doesn't fix anything » = rester calme et traiter un problème après l'autre." }
        ]
      },
      // --------------------------------------------------------------- VI
      {
        id: "listening", num: "VI", title: "Listening Comprehension", titleFr: "Compréhension orale",
        points: 15, skill: "co", type: "mcq",
        instructions: "Listen to each recording (you can play it again), then choose the right answer.",
        instructionsFr: "Écoute chaque enregistrement (tu peux le réécouter), puis choisis la bonne réponse.",
        items: [
          { audio: "Good morning, ladies and gentlemen. This is an announcement for passengers on flight BA 214 to Glasgow. Because of a technical problem, this flight is now delayed by ninety minutes. Boarding will start at eleven fifteen, from gate 22 instead of gate 14. Passengers can collect a meal voucher at the information desk. We apologise for the delay.",
            q: "What should passengers on the Glasgow flight do now?", qFr: "Que doivent faire maintenant les passagers du vol pour Glasgow ?",
            opts: ["Go to gate 14 immediately", "Rebook on another flight", "Collect a voucher and board later from gate 22", "Collect their luggage at baggage reclaim"], correct: 2,
            why: "Le vol a 90 minutes de retard, l'embarquement se fera porte 22 (et non 14), et un bon repas est disponible au bureau d'information." },
          { audio: [{ who: "A", text: "Good evening. I have a booking under the name Rossi, for two nights." }, { who: "B", text: "Let me check… I'm sorry, I can't find it. Do you have a confirmation number?" }, { who: "A", text: "Yes, it's on my phone: RT-5590." }, { who: "B", text: "Ah, I see. It's for next weekend, not tonight. And tonight we're fully booked, I'm afraid." }],
            q: "What is the problem?", qFr: "Quel est le problème ?",
            opts: ["The guest has lost his confirmation number.", "The booking is for the wrong dates.", "The hotel has cancelled the booking.", "The room is too expensive."], correct: 1,
            why: "« It's for next weekend, not tonight » : la réservation existe, mais pour d'autres dates — et l'hôtel est complet ce soir." },
          { audio: [{ who: "A", text: "Hi, it's me. My train's been cancelled because of the storm." }, { who: "B", text: "Oh no! So what are you going to do?" }, { who: "A", text: "There's a bus at eight. If it leaves on time, I'll be home around eleven." }, { who: "B", text: "OK. I'll pick you up at the bus station, then." }],
            q: "What will happen if the bus leaves on time?", qFr: "Que se passera-t-il si le bus part à l'heure ?",
            opts: ["The speaker will arrive home around eleven.", "The speaker will take the train at eight.", "The speaker will stay at a hotel.", "The speaker will drive home."], correct: 0,
            why: "Premier conditionnel : « If it leaves on time, I'll be home around eleven »." },
          { audio: [{ who: "A", text: "Here are your keys. The car's full of fuel, so please bring it back full." }, { who: "B", text: "Of course. Is insurance included?" }, { who: "A", text: "Basic insurance, yes. For full cover, it's twelve euros a day extra." }, { who: "B", text: "Hmm… I'll take the basic one, thanks. I'm only driving to the coast and back." }],
            q: "What does the customer decide?", qFr: "Que décide le client ?",
            opts: ["To pay for full insurance", "To keep only the basic insurance", "To bring the car back empty", "To hire a smaller car"], correct: 1,
            why: "« I'll take the basic one » : décision prise sur le moment → « will ». Il refuse l'option à 12 € par jour." },
          { audio: "Hi Tom, it's Sarah. Just to let you know, my suitcase didn't arrive in Montreal. I've filled in a form at the lost luggage desk, and they're delivering it to the hotel tomorrow morning. So tonight I'm going to buy a toothbrush and a T-shirt, and I'll see you at the conference as planned.",
            q: "What is Sarah going to do tonight?", qFr: "Que va faire Sarah ce soir ?",
            opts: ["Go back to the airport", "Buy a few essential things", "Cancel the conference", "Wait for her suitcase at the hotel"], correct: 1,
            why: "« tonight I'm going to buy a toothbrush and a T-shirt » : quelques achats de première nécessité ; la valise arrive demain matin." }
        ]
      },
      // -------------------------------------------------------------- VII
      {
        id: "speaking", num: "VII", title: "Speaking – A Travel Problem", titleFr: "Expression orale – un imprévu de voyage",
        points: 10, skill: "eo", type: "ai-oral",
        instructions: "Press the microphone and speak for about one minute. You can try again, or add to your answer. If the microphone doesn't work, type what you would say.",
        instructionsFr: "Appuie sur le micro et parle environ une minute. Tu peux recommencer, ou compléter ta réponse. Si le micro ne fonctionne pas, écris ce que tu dirais.",
        prompt: "You are at the airport transfer desk. Your first flight landed late and you have missed your connecting flight to Dublin. Speak to the agent: explain the situation, say what you are doing tomorrow (an important appointment), ask to be rebooked, ask what will happen to your luggage, and react to the solution. Use will, going to or the present continuous, and at least one sentence with “if”.",
        promptFr: "Tu es au comptoir des correspondances à l'aéroport. Ton premier vol a atterri en retard et tu as raté ta correspondance pour Dublin. Parle à l'agent : explique la situation, dis ce que tu fais demain (un rendez-vous important), demande à être replacé(e) sur un autre vol, demande ce qui va arriver à tes bagages, et réagis à la solution. Utilise will, going to ou le présent continu, et au moins une phrase avec « if ».",
        minWords: 50, targetSeconds: 60,
        rubric: "Total 10 points. Task achievement (4 pts): explains the missed connection; mentions tomorrow's appointment; asks to be rebooked politely; asks about the luggage — 1 pt each. Grammar & verb forms (3 pts): at least one correct future form (e.g. \"I'm meeting a client at ten tomorrow\", \"I'll take the evening flight\") and at least one correct first conditional with present simple after 'if' (e.g. \"If I miss the meeting, I'll lose the contract\"); 1 pt for general accuracy. Fluency and pronunciation (3 pts): judged from the transcript (about one minute ≈ 90-150 words, natural sentences, polite register; recognition errors suggesting mispronounced words lower this score — mention the words to practise, e.g. 'luggage', 'delayed', 'boarding').",
        reference: "Example: \"Hello. My flight from Paris landed an hour late, so I've missed my connecting flight to Dublin. I'm meeting a client at ten tomorrow morning, so it's really important. Could you rebook me on the next flight, please? … The 7 a.m.? Perfect, I'll take it. And what's going to happen to my luggage? Will it go on the same flight? … OK, if it doesn't arrive, I'll go to the lost luggage desk. Thank you so much for your help.\""
      }
    ]
  };

  E[33] = {
    code: "B1.7",
    title: "Level test: B1.7 – Say What You Think",
    titleFr: "Contrôle de niveau : B1.7 – Dire ce que l'on pense",
    objective: "Pass level B1.7 and move on to B1.8: giving and explaining an opinion, agreeing and disagreeing politely, giving examples, comparatives and connectors, verb forms in an argument, fact vs opinion, reading, listening, writing and speaking.",
    objectiveFr: "Valider le niveau B1.7 et passer au B1.8 : donner et justifier une opinion, être d'accord ou non poliment, donner des exemples, comparatifs et connecteurs, conjugaison au service d'un argument, fait ou opinion, compréhension écrite et orale, expression écrite et orale.",
    sections: [
      // ---------------------------------------------------------------- I
      {
        id: "vocab", num: "I", title: "Opinion Vocabulary", titleFr: "Vocabulaire de l'opinion",
        points: 10, skill: "vo", type: "fill",
        instructions: "Complete each sentence with a word from the list. Each word is used once. Three words are not needed.",
        instructionsFr: "Complète chaque phrase avec un mot de la liste. Chaque mot ne sert qu'une fois. Trois mots ne servent pas.",
        bank: ["point", "concerned", "tend", "agree", "instance", "screen", "cons", "argue", "convinced", "whereas", "issue", "doubt", "therefore"],
        items: [
          { text: "I ___ to think that people work better when they can choose their hours.",
            blanks: [["tend"]],
            why: "« I tend to think that… » = j'ai tendance à penser que… : une opinion nuancée, pas catégorique." },
          { text: "As far as I'm ___, family comes first.",
            blanks: [["concerned"]],
            why: "« As far as I'm concerned » = en ce qui me concerne, pour ma part. Expression figée." },
          { text: "— Public transport should be free for students. — I couldn't ___ more! It would help so many families.",
            blanks: [["agree"]],
            why: "« I couldn't agree more » = je suis tout à fait d'accord (littéralement : je ne pourrais pas être plus d'accord)." },
          { text: "I see your ___, but I'm not so sure about that.",
            blanks: [["point"]],
            why: "« I see your point, but… » = je comprends ton argument, mais… : le désaccord poli par excellence." },
          { text: "Some jobs are perfect for remote working. For ___, many designers only need a laptop.",
            blanks: [["instance"]],
            why: "« For instance » = par exemple (synonyme de « for example ») : il introduit l'exemple qui soutient l'opinion." },
          { text: "Many parents are worried about how much ___ time their children have every day.",
            blanks: [["screen"]],
            why: "« screen time » = le temps passé devant les écrans (téléphone, tablette, télé)." },
          { text: "Before we decide, let's look at the pros and ___ of moving to the countryside.",
            blanks: [["cons"]],
            why: "« the pros and cons » = le pour et le contre, les avantages et les inconvénients." },
          { text: "Some people ___ that social media makes us lonelier, but others say it keeps us connected.",
            blanks: [["argue", "think", "believe", "say", "claim"]],
            why: "« to argue that… » = soutenir que… (et non « se disputer » ici) : on présente l'opinion des autres." },
          { text: "I'm absolutely ___ that learning a language changes the way you see the world.",
            blanks: [["convinced"]],
            why: "« I'm convinced that… » = je suis convaincu(e) que… : une opinion forte, affirmée avec certitude." },
          { text: "Trains are slow, ___ planes are very fast.",
            blanks: [["whereas", "while", "but"]],
            why: "« whereas » = alors que : oppose deux idées dans une même phrase." }
        ]
      },
      // --------------------------------------------------------------- II
      {
        id: "verbs", num: "II", title: "Verb Forms – Building an Argument", titleFr: "Conjugaison – construire un argument",
        points: 15, skill: "cj", type: "fill",
        instructions: "Put the verbs in brackets in the correct form. Look for time clues (since, last year, these days, in the future…) before you choose the tense.",
        instructionsFr: "Mets les verbes entre parenthèses à la bonne forme. Repère les indices de temps (since, last year, these days, in the future…) avant de choisir le temps.",
        items: [
          { text: "These days, more and more people ___ (work) from home, at least two days a week.",
            blanks: [["are working"]],
            why: "« these days / more and more » = une tendance en cours, qui évolue → présent continu : « are working »." },
          { text: "I'm sorry, but I ___ (not / agree) with you on this point.",
            blanks: [["don't agree", "do not agree"]],
            why: "« agree » est un verbe (pas un adjectif) : au présent simple négatif → « I don't agree ». Jamais « I'm not agree »." },
          { text: "Screen time among teenagers ___ (increase) a lot since 2020.",
            blanks: [["has increased", "has been increasing"]],
            why: "« since 2020 » = depuis 2020 jusqu'à maintenant → Present Perfect (« has increased »), pas le présent comme en français." },
          { text: "When I was a child, we ___ (not / have) smartphones, and we played outside all the time.",
            blanks: [["didn't have", "did not have"]],
            why: "« When I was a child » = période passée terminée → prétérit, négatif avec « didn't + base verbale »." },
          { text: "I'm sure that if schools ___ (ban) phones next year, students ___ (focus) better in class.",
            blanks: [["ban"], ["will focus"]],
            why: "Révision B1.6 — premier conditionnel (situation réaliste) : If + présent simple, will + base verbale." },
          { text: "From my point of view, remote working ___ (become) the norm in the future.",
            blanks: [["will become", "is going to become"]],
            why: "Prédiction fondée sur une opinion (« From my point of view ») → « will » ; « going to » est aussi possible." },
          { text: "Last year, my company ___ (decide) to let us work from home on Fridays.",
            blanks: [["decided"]],
            why: "« Last year » = moment passé précis → prétérit : « decided »." },
          { text: "In my opinion, the government ___ (should / invest) more money in education.",
            blanks: [["should invest"]],
            why: "Modal de conseil « should » + base verbale, sans « to » : « should invest »." },
          { text: "My aunt ___ (live) in Paris for twenty years, so she knows the traffic problems very well.",
            blanks: [["has lived", "has been living"]],
            why: "« for twenty years » + elle y vit toujours → Present Perfect (simple ou continu). « She lives there for twenty years » est un calque du français." },
          { text: "Nobody ___ (know) for sure what schools will look like in 2050.",
            blanks: [["knows"]],
            why: "« Nobody » se conjugue au singulier : 3e personne → « knows ». « know » est un verbe d'état, jamais à la forme en -ing." }
        ]
      },
      // -------------------------------------------------------------- III
      {
        id: "grammar", num: "III", title: "Grammar – Comparatives, Connectors and Opinion Structures", titleFr: "Grammaire – comparatifs, connecteurs et structures de l'opinion",
        points: 10, skill: "gr", type: "fill",
        instructions: "Complete each sentence with ONE word in each gap. The words in brackets help you.",
        instructionsFr: "Complète chaque phrase avec UN mot par trou. Les mots entre parenthèses t'aident.",
        items: [
          { text: "Trains are much ___ (green) than planes.",
            blanks: [["greener"]],
            why: "Adjectif court → -er than : green → greener." },
          { text: "Living in London is ___ expensive ___ living in a small town.",
            blanks: [["more"], ["than"]],
            why: "Adjectif long (expensive) → « more … than » (jamais « more expensiver »)." },
          { text: "The bus isn't ___ fast ___ the metro, but it's cheaper.",
            blanks: [["as"], ["as"]],
            why: "Comparatif d'égalité négatif : « not as + adjectif + as » = pas aussi… que." },
          { text: "In my view, cycling is the ___ (good) way to get around a city.",
            blanks: [["best"]],
            why: "Superlatif irrégulier : good → better → the best." },
          { text: "Correct the French calque — “According to me, it's a good idea.” → “___ my opinion, it's a good idea.”",
            blanks: [["In"]],
            why: "« According to me » n'existe pas en anglais : on dit « In my opinion » ou « From my point of view »." },
          { text: "— Do you think the new law will work? — Yes, I think ___.",
            blanks: [["so"]],
            why: "« I think so » = je pense que oui (et non « I think that yes ») ; le contraire : « I don't think so »." },
          { text: "Flying is fast. On the other ___, it's very bad for the planet.",
            blanks: [["hand"]],
            why: "« On the other hand » = d'un autre côté : introduit un point de vue opposé." },
          { text: "Remote working saves a lot of time. ___, many companies now offer it.",
            blanks: [["Therefore", "So", "Consequently"]],
            why: "« Therefore » = par conséquent : introduit une conséquence logique (plus soutenu que « so »)." },
          { text: "Outdoor sports, ___ as cycling or running, are cheap and good for your health.",
            blanks: [["such"]],
            why: "« such as » = comme, tels que : introduit des exemples dans la phrase." },
          { text: "I love my neighbourhood ___ it's lively and full of small shops.",
            blanks: [["because", "as", "since"]],
            why: "« because » introduit la raison : une opinion B1 solide = opinion + raison + exemple." }
        ]
      },
      // --------------------------------------------------------------- IV
      {
        id: "secret", num: "IV", title: "Secret English – Fact, Opinion, Assumption or Interpretation?", titleFr: "Secret English – fait, opinion, supposition ou interprétation ?",
        points: 10, skill: "ce", type: "fill",
        instructions: "Read each statement carefully. Is it a fact, an opinion, an assumption or an interpretation? Type one word from the list.",
        instructionsFr: "Lis attentivement chaque énoncé. Est-ce un fait, une opinion, une supposition ou une interprétation ? Tape un mot de la liste.",
        bank: ["fact", "opinion", "assumption", "interpretation"],
        items: [
          { text: "“According to the school's own survey, 60% of our students own a smartphone.” → This is a(n) ___.",
            blanks: [["fact"]],
            why: "Un fait se vérifie : ici un chiffre, avec sa source (le sondage de l'école)." },
          { text: "“I think smartphones are ruining real conversation.” → This is a(n) ___.",
            blanks: [["opinion"]],
            why: "« I think… » + un jugement personnel (« ruining ») = une opinion : d'autres peuvent penser le contraire." },
          { text: "“Tom is always on his phone, so he probably never reads books.” → The second part is a(n) ___.",
            blanks: [["assumption"]],
            why: "« probably » : on suppose sans l'avoir vérifié. C'est une supposition (assumption), pas un fait." },
          { text: "“Sales of paper books went up last year. This shows that people are getting tired of screens.” → The second sentence is a(n) ___.",
            blanks: [["interpretation"]],
            why: "On donne un sens à un fait (la hausse des ventes) : c'est une interprétation — il pourrait y avoir d'autres explications." },
          { text: "“She hasn't answered my message for two hours — she must be angry with me.” → The second part is a(n) ___.",
            blanks: [["assumption"]],
            why: "« she must be angry » : on suppose ses sentiments sans preuve. Elle est peut-être simplement occupée." }
        ]
      },
      // ---------------------------------------------------------------- V
      {
        id: "writing", num: "V", title: "Writing – An Opinion Post", titleFr: "Expression écrite – un message d'opinion",
        points: 15, skill: "ee", type: "ai-text",
        instructions: "Write a forum post of about 120 to 160 words.",
        instructionsFr: "Écris un message de forum d'environ 120 à 160 mots.",
        prompt: "A local news website asks its readers: “Should smartphones be banned in secondary schools?” Write your answer for the comments section. Give your opinion clearly, explain it with at least two reasons, give one concrete example, mention one argument of the other side and answer it politely (I see the point, but…), then conclude. Use at least two opinion expressions, two connectors (because, whereas, on the other hand, therefore, for instance…) and one comparative.",
        promptFr: "Un site d'information local demande à ses lecteurs : « Faut-il interdire les smartphones au collège et au lycée ? » Écris ta réponse dans l'espace commentaires. Donne clairement ton opinion, justifie-la avec au moins deux raisons, donne un exemple concret, mentionne un argument de l'autre camp et réponds-y poliment (I see the point, but…), puis conclus. Utilise au moins deux expressions d'opinion, deux connecteurs (because, whereas, on the other hand, therefore, for instance…) et un comparatif.",
        minWords: 120, maxWords: 160,
        rubric: "Total 15 points. Task achievement (5 pts): a clear opinion (1), at least two reasons (1 each, max 2), one concrete example (1), one opposing argument acknowledged and answered (1). Grammar & verb forms (4 pts): at least one correct comparative (e.g. \"more focused than\", \"not as dangerous as\") — 1 pt; correct tenses for trends, facts and predictions (present continuous for trends, Present Perfect with since/for, will/first conditional) — 2 pts; no French calques such as \"I am agree\", \"according to me\", \"I think that yes\" — 1 pt (0 if any appear). Vocabulary & register (3 pts): at least two different opinion expressions (I believe, From my point of view, As far as I'm concerned, I tend to think, It seems to me that, I'm convinced that…) and a polite, reasoned tone. Coherence (3 pts): logical structure (opinion → reasons → example → other side → conclusion) with at least two connectors used correctly; about 120-160 words, deduct up to 1 point if clearly under 90 or over 220 words.",
        reference: "Example: From my point of view, smartphones should be banned in class, but not in the whole school. First, students are much more focused without notifications. For instance, my nephew's school banned phones last year, and his teachers say the lessons are calmer than before. Second, pupils talk to each other more at break time. Some parents argue that children need their phones for emergencies. I see their point, but they can leave them in their bags and use them after school. On the other hand, phones can be useful for research, so teachers should be allowed to use them for specific activities. Therefore, I believe a partial ban is the best solution: it protects concentration while keeping the advantages of technology."
      },
      // --------------------------------------------------------------- VI
      {
        id: "reading", num: "VI", title: "Reading Comprehension", titleFr: "Compréhension écrite",
        points: 15, skill: "ce", type: "mcq",
        instructions: "Read the text, then choose the right answer for each question.",
        instructionsFr: "Lis le texte, puis choisis la bonne réponse pour chaque question.",
        passage: "Two years ago, the small town of Millbrook closed its high street to cars. Since then, the question has divided its 9,000 inhabitants.\n\nFor Grace Holt, who owns a café in the centre, the change has been positive. “As far as I'm concerned, it's the best decision the council has ever made,” she says. “The street is quieter and much cleaner than before, and families stay longer. On sunny days, I've got twice as many customers on the terrace.”\n\nNot everyone agrees. Martin Lee runs a hardware shop at the end of the street. “I see why people like it, but I'm not so sure it works for everybody,” he explains. “My customers often buy heavy things, such as paint or tools. Now they have to park five minutes away, whereas before they could stop right outside. Some of them have started going to the big shopping centre instead.”\n\nThe council's figures show that the number of visitors to the high street has risen by 15%. However, they also show that two shops have closed. Supporters say those shops were already in difficulty; opponents believe the car ban was the reason.\n\nA compromise is now being discussed: the street would stay car-free, but delivery vans and customers with heavy purchases could use it early in the morning. “It isn't perfect,” admits Martin, “but it's better than nothing.”",
        items: [
          { q: "What is Grace's opinion of the car-free street?", qFr: "Quelle est l'opinion de Grace sur la rue sans voitures ?",
            opts: ["She thinks it's a very good decision.", "She thinks it's bad for families.", "She has no clear opinion.", "She thinks it's good only on sunny days."], correct: 0,
            why: "« the best decision the council has ever made » : un avis très positif (plus calme, plus propre, plus de clients)." },
          { q: "Why is Martin less enthusiastic?", qFr: "Pourquoi Martin est-il moins enthousiaste ?",
            opts: ["The street has become too noisy.", "His customers find it harder to carry heavy items to their cars.", "He wants to open a café.", "The council closed his shop."], correct: 1,
            why: "Ses clients achètent des objets lourds et doivent désormais se garer à cinq minutes, alors qu'avant ils s'arrêtaient devant la boutique." },
          { q: "Which statement from the text is a FACT, not an opinion?", qFr: "Quelle phrase du texte est un FAIT, et non une opinion ?",
            opts: ["The car ban was the reason two shops closed.", "It's the best decision the council has ever made.", "The number of visitors has risen by 15%.", "Those shops were already in difficulty."], correct: 2,
            why: "Les chiffres du conseil municipal sont vérifiables. Les autres propositions sont des opinions ou des interprétations de ces chiffres." },
          { q: "“Supporters say those shops were already in difficulty” — this is…", qFr: "« Supporters say those shops were already in difficulty » — c'est…",
            opts: ["a fact proved by the council.", "an interpretation of why the shops closed.", "Martin's opinion.", "a comparative."], correct: 1,
            why: "Les partisans donnent une explication à un fait (la fermeture de deux boutiques) : c'est une interprétation, contestée par les opposants." },
          { q: "What does Martin think of the compromise?", qFr: "Que pense Martin du compromis ?",
            opts: ["He's completely against it.", "He thinks it's ideal.", "He accepts it, even if it isn't perfect.", "He hasn't heard about it."], correct: 2,
            why: "« It isn't perfect, but it's better than nothing » : il l'accepte, avec des réserves." }
        ]
      },
      // -------------------------------------------------------------- VII
      {
        id: "listening", num: "VII", title: "Listening Comprehension", titleFr: "Compréhension orale",
        points: 15, skill: "co", type: "mcq",
        instructions: "Listen to each recording (you can play it again), then choose the right answer.",
        instructionsFr: "Écoute chaque enregistrement (tu peux le réécouter), puis choisis la bonne réponse.",
        items: [
          { audio: [{ who: "A", text: "I think remote working is the future. You save two hours a day, and you're less stressed. Don't you agree?" }, { who: "B", text: "I see your point, but I tend to think people need to meet in person too. Ideas come more easily when you're in the same room." }],
            q: "What is the second speaker's position?", qFr: "Quelle est la position de la deuxième personne ?",
            opts: ["She completely agrees.", "She partly disagrees: meeting in person is important too.", "She thinks offices should close.", "She has never worked from home."], correct: 1,
            why: "« I see your point, but… » = désaccord poli : elle pense que se rencontrer en personne reste important." },
          { audio: [{ who: "A", text: "Honestly, I think reading on paper is much better than reading on a screen." }, { who: "B", text: "I couldn't agree more. I remember things much better when I read a real book, and my eyes aren't as tired in the evening. For instance, I've read six novels on paper this year." }],
            q: "How does the second speaker react?", qFr: "Comment réagit la deuxième personne ?",
            opts: ["She strongly agrees.", "She strongly disagrees.", "She changes the subject.", "She isn't sure."], correct: 0,
            why: "« I couldn't agree more » = je suis entièrement d'accord ; elle ajoute même deux raisons." },
          { audio: "From my point of view, cities should invest in cycle lanes rather than new roads. For instance, in my city, the council built twenty kilometres of cycle lanes three years ago. Since then, traffic in the centre has fallen, and the air is cleaner. Of course, it's harder for older people, so we also need better buses.",
            q: "What example does the speaker give?", qFr: "Quel exemple la personne donne-t-elle ?",
            opts: ["A city that built new roads", "Her own city, where cycle lanes reduced traffic", "A city with free buses", "A city where older people cycle more"], correct: 1,
            why: "« For instance, in my city… twenty kilometres of cycle lanes… traffic in the centre has fallen »." },
          { audio: [{ who: "A", text: "Young people don't read any more. They're always on their phones." }, { who: "B", text: "Hmm, I'm not so sure about that. My students read a lot — they just read on their phones. Is that a fact, or is it just an impression?" }],
            q: "What does the second speaker suggest?", qFr: "Que suggère la deuxième personne ?",
            opts: ["That the first speaker is right", "That young people never use phones", "That the first statement may be an assumption, not a fact", "That phones should be banned"], correct: 2,
            why: "Elle doute (« I'm not so sure about that ») et demande si c'est un fait ou une impression : l'affirmation n'est pas prouvée." },
          { audio: [{ who: "A", text: "So, train or plane for our trip to Barcelona?" }, { who: "B", text: "The plane is faster, whereas the train is more comfortable, and it isn't as bad for the planet." }, { who: "A", text: "True. And we can work on the train. Therefore, let's book the train!" }],
            q: "What do they decide, and why?", qFr: "Que décident-ils, et pourquoi ?",
            opts: ["The plane, because it's faster", "The plane, because it's cheaper", "The train, because it's more comfortable and greener", "Neither: they stay at home"], correct: 2,
            why: "Le train est plus confortable, moins polluant et permet de travailler ; « Therefore, let's book the train »." }
        ]
      },
      // ------------------------------------------------------------- VIII
      {
        id: "speaking", num: "VIII", title: "Speaking – One Minute, One Opinion", titleFr: "Expression orale – une minute, une opinion",
        points: 10, skill: "eo", type: "ai-oral",
        instructions: "Press the microphone and speak for about one minute. You can try again, or add to your answer. If the microphone doesn't work, type what you would say.",
        instructionsFr: "Appuie sur le micro et parle environ une minute. Tu peux recommencer, ou compléter ta réponse. Si le micro ne fonctionne pas, écris ce que tu dirais.",
        prompt: "A friend says: “Honestly, working from home is much better than working in an office.” Give your opinion in about one minute: say if you agree or disagree (politely), explain why with at least one reason, give a concrete example from your life or someone you know, and compare the two options with at least one comparative.",
        promptFr: "Un ami te dit : « Franchement, le télétravail, c'est bien mieux que le bureau. » Donne ton avis en une minute environ : dis si tu es d'accord ou non (poliment), explique pourquoi avec au moins une raison, donne un exemple concret tiré de ta vie ou de celle d'un proche, et compare les deux options avec au moins un comparatif.",
        minWords: 50, targetSeconds: 60,
        rubric: "Total 10 points. Task achievement (4 pts): a clear, polite position (agree / disagree / partly agree, e.g. \"I see your point, but…\", \"I couldn't agree more\") — 1; at least one reason — 1; a concrete example (For instance…) — 1; a comparison of the two options — 1. Grammar & verb forms (3 pts): correct comparatives (more … than, -er than, not as … as), correct tenses for the example (past simple / Present Perfect), no calques such as \"I am agree\" or \"according to me\". Fluency and pronunciation (3 pts): judged from the transcript (about one minute ≈ 90-150 words, connected ideas with connectors; recognition errors suggesting mispronounced words lower this score — mention the words to practise).",
        reference: "Example: \"I see your point, but I'm not so sure about that. Working from home is more comfortable, and you don't waste time on the train. For instance, I work from home on Fridays and I finish my tasks faster. On the other hand, I tend to think the office is better for teamwork. Last month we had a difficult project, and we solved it in one afternoon because we were in the same room. So, as far as I'm concerned, a mix of both is the best solution.\""
      }
    ]
  };

  E[34] = {
    code: "B1.8",
    title: "Level test: B1.8 – Emotional English",
    titleFr: "Contrôle de niveau : B1.8 – Exprimer ses émotions",
    objective: "Pass level B1.8 and move on to B1.9: describing emotions precisely and with the right intensity, adjective + preposition, very vs absolutely, gerunds and infinitives, verb forms to tell an emotional story, reading, listening, writing and speaking without basic words like happy, sad or angry.",
    objectiveFr: "Valider le niveau B1.8 et passer au B1.9 : décrire ses émotions avec précision et la bonne intensité, adjectif + préposition, very ou absolutely, gérondif et infinitif, conjugaison pour raconter un moment fort, compréhension écrite et orale, expression écrite et orale sans les mots basiques happy, sad ou angry.",
    sections: [
      // ---------------------------------------------------------------- I
      {
        id: "vocab", num: "I", title: "Emotions and Their Intensity", titleFr: "Les émotions et leur intensité",
        points: 15, skill: "vo", type: "fill",
        instructions: "Complete each sentence with the most precise word from the list. Read the context carefully: it tells you the emotion AND its intensity. Two words are not needed.",
        instructionsFr: "Complète chaque phrase avec le mot le plus précis de la liste. Lis bien le contexte : il t'indique l'émotion ET son intensité. Deux mots ne servent pas.",
        bank: ["fed", "devastated", "relieved", "homesick", "thrilled", "disappointed", "nervous", "terrified", "overwhelmed", "annoyed", "furious", "pleased"],
        items: [
          { text: "I've been waiting for this bus for an hour. I'm ___ up with it!",
            blanks: [["fed"]],
            why: "« to be fed up (with) » = en avoir marre (de) : un agacement qui dure depuis longtemps." },
          { text: "She wasn't just a bit sad — she was absolutely ___ when her grandmother died.",
            blanks: [["devastated"]],
            why: "« devastated » = anéanti(e) : le degré le plus fort de la tristesse (disappointed → upset → miserable → devastated)." },
          { text: "We were so ___ when the doctor told us everything was fine. We could finally breathe again.",
            blanks: [["relieved"]],
            why: "« relieved » = soulagé(e) : l'émotion qui suit la fin d'une inquiétude." },
          { text: "Kofi has been living in Canada for six months. He misses his family and his mum's cooking — he's a bit ___.",
            blanks: [["homesick"]],
            why: "« homesick » = qui a le mal du pays : la nostalgie de chez soi quand on vit loin." },
          { text: "I got the job I've wanted for years! I'm absolutely ___!",
            blanks: [["thrilled", "overjoyed", "delighted"]],
            why: "« absolutely » exige un adjectif extrême : « thrilled » = ravi(e), fou/folle de joie (bien plus fort que « pleased »)." },
          { text: "Everybody said the film was brilliant, but I found it a bit slow. I was a little ___.",
            blanks: [["disappointed"]],
            why: "« disappointed » = déçu(e) : la réalité est moins bien que ce qu'on attendait. Faux ami : « déçu » ≠ « deceived » (trompé)." },
          { text: "I always get ___ before a job interview — my hands shake and I can't eat.",
            blanks: [["nervous", "anxious"]],
            why: "« nervous » = nerveux / anxieux avant un événement (et non « énervé », qui se dit « annoyed »)." },
          { text: "My little brother is ___ of spiders — he screams and runs out of the room every time he sees one.",
            blanks: [["terrified"]],
            why: "« terrified of » = terrifié(e) par : une peur extrême, comme le montrent les cris et la fuite." },
          { text: "Three exams, a new job and a house move in the same month: I feel completely ___.",
            blanks: [["overwhelmed"]],
            why: "« overwhelmed » = submergé(e), débordé(e) : trop de choses à gérer en même temps." },
          { text: "It's only a small thing, but I'm a bit ___ that he forgot to call me back.",
            blanks: [["annoyed", "irritated"]],
            why: "« a bit annoyed » = un peu agacé(e) : le degré le plus faible de la colère (annoyed → irritated → frustrated → angry → furious)." }
        ]
      },
      // --------------------------------------------------------------- II
      {
        id: "verbs", num: "II", title: "Verb Forms – Gerunds, Infinitives and Telling a Story", titleFr: "Conjugaison – gérondif, infinitif et récit",
        points: 15, skill: "cj", type: "fill",
        instructions: "Put the verbs in brackets in the correct form: -ing, to + base form, or the right tense. Some sentences have two gaps.",
        instructionsFr: "Mets les verbes entre parenthèses à la bonne forme : -ing, to + base verbale, ou le bon temps. Certaines phrases ont deux trous.",
        items: [
          { header: { en: "A. -ing or to + base form?", fr: "A. -ing ou to + base verbale ?" },
            text: "I'm really looking forward to ___ (see) you next week!",
            blanks: [["seeing"]],
            why: "« look forward to » : ici « to » est une préposition, donc suivie de -ing : « looking forward to seeing you »." },
          { text: "After months of stress, she decided ___ (leave) her job.",
            blanks: [["to leave"]],
            why: "« decide » est suivi de « to + base verbale » (comme want, hope, plan, refuse, manage)." },
          { text: "I can't stand ___ (wait) in long queues — it drives me mad.",
            blanks: [["waiting"]],
            why: "« can't stand » (ne pas supporter) est suivi de -ing, comme enjoy, avoid, don't mind." },
          { text: "He really regrets ___ (not / tell) her the truth.",
            blanks: [["not telling", "not having told"]],
            why: "« regret » + -ing = regretter une action passée ; la négation se place devant : « not telling »." },
          { text: "Remember ___ (call) your mum tonight — it's her birthday!",
            blanks: [["to call"]],
            why: "« Remember to + base » = n'oublie pas de (action à faire). ≠ « I remember calling » = je me souviens d'avoir appelé." },
          { text: "I stopped ___ (drink) coffee in the evening because it made me anxious.",
            blanks: [["drinking"]],
            why: "« stop + -ing » = arrêter une habitude. ≠ « stop to drink » = s'arrêter pour boire." },
          { header: { en: "B. Revision: tenses to tell an emotional story", fr: "B. Révision : les temps pour raconter un moment fort" },
            text: "I ___ (feel) so nervous yesterday while I ___ (wait) for my exam results.",
            blanks: [["felt"], ["was waiting"]],
            why: "Prétérit pour l'émotion ressentie (« felt », irrégulier) + past continuous pour l'action en cours à ce moment-là (« was waiting »)." },
          { text: "When they finally called to say the children were safe, we ___ (be) so relieved.",
            blanks: [["were"]],
            why: "Moment passé précis (« When they finally called ») → prétérit : « we were »." },
          { text: "I ___ (feel) a bit homesick since I moved to Manchester.",
            blanks: [["have been feeling", "have felt"]],
            why: "« since I moved » = depuis un moment passé jusqu'à maintenant → Present Perfect (continu ici, car le sentiment dure)." },
          { text: "Don't be upset. I ___ (help) you with your application — let's do it together tonight.",
            blanks: [["will help", "am going to help"]],
            why: "Offre spontanée pour réconforter quelqu'un → « will » : « I'll help you »." }
        ]
      },
      // -------------------------------------------------------------- III
      {
        id: "grammar", num: "III", title: "Grammar – Adjective + Preposition, Intensity", titleFr: "Grammaire – adjectif + préposition, intensité",
        points: 15, skill: "gr", type: "fill",
        instructions: "A. Complete with the correct preposition. B. Choose very or absolutely. C. Complete the adjective ending in -ed or -ing.",
        instructionsFr: "A. Complète avec la bonne préposition. B. Choisis very ou absolutely. C. Complète l'adjectif en -ed ou -ing.",
        items: [
          { header: { en: "A. Adjective + preposition", fr: "A. Adjectif + préposition" },
            text: "I'm really worried ___ my exam next week.",
            blanks: [["about"]],
            why: "« worried about » = inquiet pour / au sujet de. Bloc à retenir tel quel." },
          { text: "She's very proud ___ her son: he's just finished university.",
            blanks: [["of"]],
            why: "« proud of » = fier/fière de (comme « afraid of », « tired of »)." },
          { text: "I'm fed up ___ this rainy weather.",
            blanks: [["with"]],
            why: "« fed up with » = en avoir marre de." },
          { text: "Tom is annoyed ___ his brother for borrowing his car without asking.",
            blanks: [["with"]],
            why: "« annoyed with + une personne » (mais « annoyed about + une chose »)." },
          { text: "The children are so excited ___ the holidays!",
            blanks: [["about"]],
            why: "« excited about » = impatient(e), enthousiaste à l'idée de." },
          { text: "I'm tired ___ waiting for him — he's always late.",
            blanks: [["of"]],
            why: "« tired of » + nom ou -ing : après une préposition, le verbe prend -ing (« of waiting »)." },
          { header: { en: "B. very or absolutely?", fr: "B. very ou absolutely ?" },
            text: "When he saw the damage to his car, he was ___ furious.",
            blanks: [["absolutely"]],
            why: "« furious » est un adjectif extrême → « absolutely furious », jamais « very furious »." },
          { text: "I was ___ disappointed with my results, but I'll try again.",
            blanks: [["very"]],
            why: "« disappointed » est un adjectif ordinaire (gradable) → « very disappointed » ; « absolutely » ne convient pas." },
          { header: { en: "C. -ed or -ing?", fr: "C. -ed ou -ing ?" },
            text: "The lecture was so bor___ that half the students fell asleep.",
            blanks: [["ing"]],
            why: "-ing décrit ce qui provoque l'émotion (la conférence est ennuyeuse : boring) ; -ed décrit ce qu'on ressent (bored)." },
          { text: "I was really surpris___ by the news — I didn't expect it at all.",
            blanks: [["ed"]],
            why: "-ed décrit ce que la personne ressent : « I was surprised » (≠ « the news was surprising »)." }
        ]
      },
      // --------------------------------------------------------------- IV
      {
        id: "writing", num: "IV", title: "Writing – A Message Full of Emotions", titleFr: "Expression écrite – un message chargé d'émotions",
        points: 15, skill: "ee", type: "ai-text",
        instructions: "Write a message of about 120 to 160 words. Do NOT use the words happy, sad, angry, good or bad.",
        instructionsFr: "Écris un message d'environ 120 à 160 mots. N'utilise PAS les mots happy, sad, angry, good ou bad.",
        prompt: "Write a message to an English-speaking friend about a day with a lot of ups and downs (for example, an important interview, a trip, a moving day, or bad news followed by good news). Tell the story in order and describe how you felt at each stage, with precise words and the right intensity (at least five different emotion words from the lesson). Include at least two adjective + preposition combinations (e.g. worried about, fed up with) and at least two verbs followed by -ing or to + base form (e.g. I can't stand…, I decided to…).",
        promptFr: "Écris un message à un(e) ami(e) anglophone à propos d'une journée pleine de hauts et de bas (par exemple un entretien important, un voyage, un déménagement, ou une mauvaise nouvelle suivie d'une bonne). Raconte l'histoire dans l'ordre et décris ce que tu as ressenti à chaque étape, avec des mots précis et la bonne intensité (au moins cinq mots d'émotion différents de la leçon). Utilise au moins deux combinaisons adjectif + préposition (ex. worried about, fed up with) et au moins deux verbes suivis de -ing ou de to + base verbale (ex. I can't stand…, I decided to…).",
        minWords: 120, maxWords: 160,
        rubric: "Total 15 points. Task achievement (4 pts): a clear story with at least two emotional stages (ups and downs) — 2; message format to a friend (greeting, closing) — 1; none of the banned words happy / sad / angry / good / bad — 1 (0 if any appear). Vocabulary & precision (4 pts): at least five different emotion words from the lesson (annoyed, frustrated, furious, fed up, disappointed, upset, devastated, homesick, pleased, delighted, thrilled, overjoyed, relieved, worried, anxious, nervous, terrified, overwhelmed…) used with the right intensity — very with ordinary adjectives, absolutely with extreme ones (never \"very furious\"). Grammar & verb forms (4 pts): at least two correct adjective + preposition combinations — 1; at least two correct gerund / infinitive patterns — 1; correct narrative tenses (past simple, past continuous, Present Perfect where needed) — 2. Coherence (3 pts): chronological order with time linkers (at first, then, when, in the end…), natural informal register; about 120-160 words, deduct up to 1 point if clearly under 90 or over 220 words.",
        reference: "Example: Hi Sam, what a day! This morning I was so nervous about my interview that I couldn't eat anything. Then my train was cancelled, and I was absolutely furious — I can't stand being late. I was terrified of missing the interview, so I decided to take a taxi. When I arrived, the manager was really friendly and I felt relieved. But in the afternoon, they called to say they had chosen someone else. I was very disappointed, and a bit fed up with job hunting. Then, an hour later, another company offered me a job! I'm absolutely thrilled. I'm looking forward to telling you everything on Saturday. Love, Léa"
      },
      // ---------------------------------------------------------------- V
      {
        id: "reading", num: "V", title: "Reading Comprehension", titleFr: "Compréhension écrite",
        points: 15, skill: "ce", type: "mcq",
        instructions: "Read the text, then choose the right answer for each question.",
        instructionsFr: "Lis le texte, puis choisis la bonne réponse pour chaque question.",
        passage: "When Nadia moved from Casablanca to Leeds to study nursing, she was thrilled. She had dreamed of studying in England for years, and she was looking forward to meeting new people.\n\nThe first weeks were harder than she expected. The lectures were fast, the weather was grey, and she hardly knew anyone. In the evenings, she called her family and tried not to cry. “I wasn't devastated,” she remembers, “but I was really homesick, and a bit disappointed with myself. I had imagined something different.”\n\nThings got worse in November. She applied for a part-time job in a hospital café and received a rejection. The same week, she failed a practical test. “I was fed up with everything. I seriously thought about giving up and going home.”\n\nIt was her flatmate, Ellie, who changed everything. Ellie noticed that Nadia looked down and invited her to a cooking evening with friends. Nadia made her grandmother's tagine, and everyone loved it. “For the first time, I felt part of something,” she says.\n\nAfter that, Nadia stopped avoiding people. She joined a study group, passed her test on the second try, and started volunteering at a local hospital. Today, in her second year, she describes herself as “pleased, but not satisfied — I still want to learn so much.”\n\nHer advice to new students? “Don't pretend you're fine. Tell someone how you feel. You'll be surprised by how many people feel the same.”",
        items: [
          { q: "How did Nadia feel before she arrived in Leeds?", qFr: "Comment Nadia se sentait-elle avant d'arriver à Leeds ?",
            opts: ["Terrified", "Very excited", "Homesick", "Indifferent"], correct: 1,
            why: "« she was thrilled… she was looking forward to meeting new people » : une joie intense et de l'impatience." },
          { q: "During her first weeks, Nadia's feelings were…", qFr: "Pendant ses premières semaines, les sentiments de Nadia étaient…",
            opts: ["extreme despair.", "strong but not extreme: she missed home and felt a little disappointed.", "anger with her family.", "total happiness."], correct: 1,
            why: "Elle précise elle-même « I wasn't devastated… but I was really homesick, and a bit disappointed » : l'intensité est nuancée." },
          { q: "Why did Nadia think about giving up in November?", qFr: "Pourquoi Nadia a-t-elle pensé à abandonner en novembre ?",
            opts: ["Her family asked her to come home.", "She lost her job at the hospital.", "She had two setbacks in the same week.", "Her flatmate left."], correct: 2,
            why: "La même semaine : un refus pour un petit boulot (« a rejection ») et un échec à un test pratique." },
          { q: "What was the turning point for Nadia?", qFr: "Quel a été le tournant pour Nadia ?",
            opts: ["Passing her test the first time", "A social evening where she shared her cooking", "A phone call from her grandmother", "Finding a job in a café"], correct: 1,
            why: "La soirée cuisine organisée par Ellie : « For the first time, I felt part of something »." },
          { q: "What is Nadia's main advice?", qFr: "Quel est le principal conseil de Nadia ?",
            opts: ["Hide your feelings to look strong.", "Talk about your feelings: many people feel the same.", "Avoid studying abroad.", "Only make friends from your own country."], correct: 1,
            why: "« Don't pretend you're fine. Tell someone how you feel. You'll be surprised by how many people feel the same »." }
        ]
      },
      // --------------------------------------------------------------- VI
      {
        id: "listening", num: "VI", title: "Listening Comprehension", titleFr: "Compréhension orale",
        points: 15, skill: "co", type: "mcq",
        instructions: "Listen to each recording (you can play it again), then choose the right answer.",
        instructionsFr: "Écoute chaque enregistrement (tu peux le réécouter), puis choisis la bonne réponse.",
        items: [
          { audio: [{ who: "A", text: "You look a bit down. What's wrong?" }, { who: "B", text: "Oh, I'm just fed up with my job. My manager keeps changing the deadlines, and I've been working every weekend for a month." }, { who: "A", text: "That sounds exhausting. Have you talked to him about it?" }],
            q: "How does the second speaker feel about her job?", qFr: "Que ressent la deuxième personne à propos de son travail ?",
            opts: ["Thrilled", "Fed up, because of the pressure", "Terrified of her manager", "Relieved"], correct: 1,
            why: "« I'm just fed up with my job » : des délais qui changent et un mois de week-ends travaillés." },
          { audio: "Hi Mum, it's me. Guess what? I passed my driving test! I was so nervous this morning that I nearly cancelled it, but it went really well. The examiner said my driving was very calm. I'm absolutely delighted. I'll call you tonight and tell you everything!",
            q: "How did the speaker feel before the test and after it?", qFr: "Qu'a ressenti la personne avant et après l'examen ?",
            opts: ["Relaxed, then disappointed", "Nervous, then delighted", "Furious, then relieved", "Excited, then upset"], correct: 1,
            why: "« I was so nervous this morning » puis « I'm absolutely delighted »." },
          { audio: [{ who: "A", text: "Were you angry when they cancelled the concert?" }, { who: "B", text: "Angry? I was absolutely furious! I'd travelled three hundred kilometres, and they told us ten minutes before the start. And they still haven't said if we'll get our money back." }],
            q: "What does the second speaker mean?", qFr: "Que veut dire la deuxième personne ?",
            opts: ["She was only a bit annoyed.", "She was much angrier than 'angry'.", "She wasn't angry at all.", "She was relieved the concert was cancelled."], correct: 1,
            why: "Elle corrige « angry » par « absolutely furious » : le degré maximal de la colère." },
          { audio: [{ who: "A", text: "So, have you decided what to do about the offer in Singapore?" }, { who: "B", text: "Yes, I've decided to accept it. I'm a bit worried about leaving my friends, but I'm really looking forward to living abroad. And my brother has promised to visit me at Christmas." }],
            q: "What has the second speaker decided?", qFr: "Qu'a décidé la deuxième personne ?",
            opts: ["To refuse the offer because of her friends", "To accept the offer, even if she's a little worried", "To wait before deciding", "To stop working abroad"], correct: 1,
            why: "« I've decided to accept it » ; elle est un peu inquiète (« a bit worried about leaving my friends ») mais impatiente de partir." },
          { audio: "I remember sitting in the waiting room for three hours. Nobody told us anything, and I was getting more and more anxious. Then, finally, the nurse came out and said: “Your father's operation went well.” I've never been so relieved in my life. I just sat down and laughed.",
            q: "Which emotion best describes the speaker at the end?", qFr: "Quelle émotion décrit le mieux la personne à la fin ?",
            opts: ["Relief", "Frustration", "Homesickness", "Disappointment"], correct: 0,
            why: "« I've never been so relieved in my life » : l'inquiétude (anxious) laisse place à un immense soulagement." }
        ]
      },
      // -------------------------------------------------------------- VII
      {
        id: "speaking", num: "VII", title: "Speaking – Describe a Strong Emotion", titleFr: "Expression orale – décrire une émotion forte",
        points: 10, skill: "eo", type: "ai-oral",
        instructions: "Press the microphone and speak for about one minute. You can try again, or add to your answer. If the microphone doesn't work, type what you would say.",
        instructionsFr: "Appuie sur le micro et parle environ une minute. Tu peux recommencer, ou compléter ta réponse. Si le micro ne fonctionne pas, écris ce que tu dirais.",
        prompt: "Talk about a moment in your life when your feelings changed a lot (for example: waiting for important news, a first day somewhere, a journey that went wrong, a surprise). Say what happened, how you felt before, during and after, and why. Do not use happy, sad, angry, good or bad: use precise emotion words, with very or absolutely, and at least one adjective + preposition.",
        promptFr: "Parle d'un moment de ta vie où tes émotions ont beaucoup changé (par exemple : attendre une nouvelle importante, un premier jour quelque part, un voyage qui a mal tourné, une surprise). Dis ce qui s'est passé, ce que tu as ressenti avant, pendant et après, et pourquoi. N'utilise pas happy, sad, angry, good ou bad : emploie des mots d'émotion précis, avec very ou absolutely, et au moins un adjectif + préposition.",
        minWords: 50, targetSeconds: 75,
        rubric: "Total 10 points. Task achievement (3 pts): a real situation with a before / during / after structure — 2; none of the banned words happy / sad / angry / good / bad — 1 (0 if any appear). Vocabulary & grammar (4 pts): at least four precise emotion words with the right intensity (very + ordinary adjective, absolutely + extreme adjective) — 2; at least one correct adjective + preposition (worried about, fed up with, terrified of…) — 1; correct past tenses (past simple, past continuous) — 1. Fluency and pronunciation (3 pts): judged from the transcript (about 60-75 seconds ≈ 100-170 words, connected ideas; recognition errors suggesting mispronounced words lower this score — mention the words to practise, e.g. 'relieved', 'devastated', 'anxious', 'overwhelmed').",
        reference: "Example: \"Last year I was waiting for the results of a very important exam. The week before, I was really anxious — I was worried about failing, and I couldn't sleep. On the day, I was absolutely terrified when I opened the email. Then I saw that I had passed, and I was so relieved that I started crying. In the evening I was absolutely thrilled, and I celebrated with my family. Now I'm looking forward to starting my new course.\""
      }
    ]
  };

  E[35] = {
    code: "B1.9",
    title: "Level test: B1.9 – Internet & Informal English",
    titleFr: "Contrôle de niveau : B1.9 – L'anglais d'Internet et l'anglais informel",
    objective: "Pass level B1.9 and move on to B1.10: understand informal written English (gonna, wanna, gotta, BTW, TBH…), switch to neutral English when the situation requires it, use the right verb forms, and read, listen, write and speak in both registers.",
    objectiveFr: "Valider le niveau B1.9 et passer au B1.10 : comprendre l'anglais écrit informel (gonna, wanna, gotta, BTW, TBH…), passer à l'anglais neutre quand la situation l'exige, employer les bonnes formes verbales, et lire, écouter, écrire et parler dans les deux registres.",
    sections: [
      // ---------------------------------------------------------------- I
      {
        id: "vocab", num: "I", title: "Vocabulary – Informal English & Messages", titleFr: "Vocabulaire – anglais informel et messages",
        points: 15, skill: "vo", type: "fill",
        instructions: "Complete each message with a word or expression from the list. The neutral meaning is given in brackets. Each answer is used once; three words are not needed.",
        instructionsFr: "Complète chaque message avec un mot ou une expression de la liste. Le sens neutre est donné entre parenthèses. Chaque réponse ne sert qu'une fois ; trois mots ne servent pas.",
        bank: ["gotta", "Lemme", "Dunno", "kinda", "BTW", "TBH", "ASAP", "No worries", "scrolling", "DM", "wanna", "LOL", "stuff"],
        items: [
          { text: "Sorry guys, I ___ go — my bus is here! (= have to)",
            blanks: [["gotta"]],
            why: "« gotta » = (have) got to = have to : l'obligation, très fréquent pour terminer un message." },
          { text: "___ know when you get home, OK? (= let me)",
            blanks: [["Lemme"]],
            why: "« lemme » = let me, suivi de la base verbale sans « to » : « lemme know » = tiens-moi au courant." },
          { text: "— Are you coming on Saturday? — ___, I haven't checked my diary yet. (= I don't know)",
            blanks: [["Dunno", "IDK"]],
            why: "« dunno » = I don't know (IDK est la version acronyme) : familier, un peu nonchalant." },
          { text: "I'm ___ tired, so I think I'll stay in tonight. (= a bit, rather)",
            blanks: [["kinda"]],
            why: "« kinda » = kind of = un peu, plutôt : il adoucit l'adjectif qui suit." },
          { text: "___, the meeting has moved to 3 pm. (= by the way)",
            blanks: [["BTW"]],
            why: "« BTW » = by the way : introduit une information secondaire. Jamais dans un e-mail formel." },
          { text: "___, I didn't like the ending at all. (= to be honest)",
            blanks: [["TBH"]],
            why: "« TBH » = to be honest : annonce souvent un avis franc ou une petite critique." },
          { text: "Can you send me the file ___? The deadline is today. (= as soon as possible)",
            blanks: [["ASAP"]],
            why: "« ASAP » = as soon as possible. Compris partout, mais un peu pressant : dans un e-mail poli, on l'écrit en entier." },
          { text: "— Thanks so much for helping me move! — ___! It was fun. (= you're welcome)",
            blanks: [["No worries"]],
            why: "« No worries » = pas de souci, de rien : réponse détendue mais polie à « thanks » ou « sorry »." },
          { text: "I spent the whole evening ___ through my phone instead of sleeping. (= moving down the screen)",
            blanks: [["scrolling"]],
            why: "« to scroll » = faire défiler. Après « spend time », le verbe se met en -ing : « spent the evening scrolling »." },
          { text: "Can you ___ me your address? I don't want to post it in the group chat. (= send a private message)",
            blanks: [["DM"]],
            why: "« to DM » = envoyer un message privé (direct message), par opposition à « post » (publier pour tout le groupe)." }
        ]
      },
      // --------------------------------------------------------------- II
      {
        id: "verbs", num: "II", title: "Verb Forms – Conjugation", titleFr: "Formes verbales – conjugaison",
        points: 15, skill: "cj", type: "fill",
        instructions: "Put the verb in brackets into the correct form. Write neutral English: full forms such as “going to” or “have to”, never “gonna” or “gotta”.",
        instructionsFr: "Mets le verbe entre parenthèses à la forme qui convient. Écris en anglais neutre : des formes complètes comme « going to » ou « have to », jamais « gonna » ou « gotta ».",
        items: [
          { text: "(Message: “gonna call u later”) → I ___ (call) you later: I've already planned it.",
            blanks: [["am going to call", "am calling"]],
            why: "« gonna call » = « am going to call » : intention déjà décidée (rappel B1.6 : going to). Le présent continu d'arrangement est aussi possible." },
          { text: "(Message: “had 2 leave early, sorry”) → Sorry, I ___ (have to) leave early yesterday because my train was cancelled.",
            blanks: [["had to"]],
            why: "« have to » au passé = « had to » (yesterday). Jamais « must » au passé, et jamais « gotta » dans un message neutre." },
          { text: "Sorry, I ___ (not / reply) to your email yet. I'll do it this afternoon.",
            blanks: [["have not replied", "haven't replied"]],
            why: "« yet » + action pas encore faite jusqu'à maintenant → Present Perfect négatif : « haven't replied ». Et toujours « reply TO »." },
          { text: "I ___ (scroll) through my phone when your message arrived.",
            blanks: [["was scrolling"]],
            why: "Action en cours (Past Continuous) interrompue par une action courte (Past Simple « arrived ») : rappel B1.2." },
          { text: "She ___ (post) three photos on Instagram since this morning!",
            blanks: [["has posted"]],
            why: "« since this morning » : période qui n'est pas terminée → Present Perfect « has posted » (rappel B1.1)." },
          { text: "If you ___ (text) me the address, I'll come straight away.",
            blanks: [["text"]],
            why: "Premier conditionnel : « If + présent, will… ». Jamais « will » juste après « if » (rappel B1.6)." },
          { text: "When I finally got to the party, most of my friends ___ (already / leave).",
            blanks: [["had already left"]],
            why: "Action antérieure à une autre action passée (« got to the party ») → Past Perfect : « had already left » (rappel B1.2)." },
          { text: "___ you ___ (share) the link with the team yesterday?",
            blanks: [["Did"], ["share"]],
            why: "Question au Past Simple (« yesterday ») : auxiliaire « did » + base verbale « share » (pas « shared »)." },
          { text: "Tom usually ___ (reply) to messages within an hour, but today he's on holiday.",
            blanks: [["replies"]],
            why: "Habitude (« usually ») → Present Simple ; 3e personne : consonne + y → -ies : « replies »." },
          { text: "Look at the time! We ___ (miss) the last bus if we don't leave now.",
            blanks: [["will miss", "are going to miss"]],
            why: "Conséquence future dans un premier conditionnel : « will miss » (« are going to miss » est aussi possible : on voit déjà les signes)." }
        ]
      },
      // -------------------------------------------------------------- III
      {
        id: "grammar", num: "III", title: "Grammar – From Informal to Neutral", titleFr: "Grammaire – de l'informel au neutre",
        points: 10, skill: "gr", type: "fill",
        instructions: "Each informal message must be rewritten in neutral English. Complete the neutral version with the missing word or words.",
        instructionsFr: "Chaque message informel doit être réécrit en anglais neutre. Complète la version neutre avec le ou les mots manquants.",
        items: [
          { text: "“Wanna join the call?” → Do you ___ join the call?",
            blanks: [["want to"]],
            why: "« wanna » = « want to » devant un verbe. En neutre, on remet aussi l'auxiliaire « Do you… ? »." },
          { text: "“Lemme check.” → ___ check.",
            blanks: [["Let me"]],
            why: "« lemme » = « let me » + base verbale, sans « to »." },
          { text: "“Dunno if he's free.” → I ___ if he's free.",
            blanks: [["don't know", "am not sure", "do not know"]],
            why: "« dunno » = « I don't know ». En neutre, on remet le sujet ; « I'm not sure » est encore plus diplomatique." },
          { text: "“Running late, sorry.” → Sorry, ___ running late.",
            blanks: [["I'm", "I am"]],
            why: "Les messages suppriment le sujet et l'auxiliaire : en neutre, on les remet → « I'm running late »." },
          { text: "“Can u send it asap pls?” → ___ you send it as soon as possible, please?",
            blanks: [["Could", "Would", "Can"]],
            why: "u → you, asap → as soon as possible, pls → please ; « Could you… ? » est la formule polie (rappel B1.4)." },
          { text: "“Sounds good!” → ___ sounds good!",
            blanks: [["That", "It"]],
            why: "Le message supprime le sujet : en anglais neutre, on écrit « That sounds good »." },
          { text: "“TBH I didn't like it.” → ___, I didn't like it.",
            blanks: [["To be honest", "Honestly"]],
            why: "On remplace l'acronyme par l'expression complète : TBH → « To be honest »." },
          { text: "“IMO we should wait.” → ___ my opinion, we should wait.",
            blanks: [["In"]],
            why: "IMO = « in my opinion » : toujours la préposition « in » (pas « for my opinion », calque du français « pour moi »)." },
          { text: "“Thx 4 ur help!” → Thank you ___ your help!",
            blanks: [["for"]],
            why: "« 4 » = for : « thank you FOR + nom » ; « ur » = your." },
          { text: "“BTW the office is closed on Fri.” → ___ the way, the office is closed on Friday.",
            blanks: [["By"]],
            why: "BTW = « by the way » ; en neutre, on écrit aussi le jour en entier (Fri → Friday)." }
        ]
      },
      // --------------------------------------------------------------- IV
      {
        id: "writing", num: "IV", title: "Writing – Two Messages, Two Registers", titleFr: "Expression écrite – deux messages, deux registres",
        points: 15, skill: "ee", type: "ai-text",
        instructions: "Write two short texts (about 100 to 140 words in total). Label them “Message 1” and “Message 2”.",
        instructionsFr: "Écris deux textes courts (environ 100 à 140 mots au total). Indique « Message 1 » et « Message 2 ».",
        quotes: [
          "Text from your friend Jess: “hey!! wanna come to my bday drinks on fri? 8ish at the Red Lion. lemme know asap so I can book a table x”"
        ],
        prompt: "You can't go to Jess's birthday drinks on Friday because your manager has asked you to finish an urgent report. Message 1: reply to Jess in a friendly, informal way (about 30-40 words); you may use two or three informal forms. Message 2: write an email to your manager, Mr Hughes, to confirm that you will finish the report, ask one question about it and say when you will send it (about 70-100 words). Message 2 must be in neutral English only.",
        promptFr: "Tu ne peux pas aller au verre d'anniversaire de Jess vendredi, car ton manager t'a demandé de finir un rapport urgent. Message 1 : réponds à Jess de façon amicale et informelle (environ 30-40 mots) ; tu peux utiliser deux ou trois formes informelles. Message 2 : écris un e-mail à ton manager, M. Hughes, pour confirmer que tu finiras le rapport, poser une question à son sujet et dire quand tu l'enverras (environ 70-100 mots). Le message 2 doit être entièrement en anglais neutre.",
        minWords: 100, maxWords: 140,
        rubric: "Total 15 points. Task achievement (4 pts): Message 1 declines the invitation, gives the reason and stays friendly (2 pts); Message 2 confirms the report, asks one relevant question and gives a time for sending it (2 pts). Register control (4 pts): Message 1 is natural and informal (2-3 informal forms such as gonna, gotta, BTW, TBH, no worries, cheers, x are welcome but not required) — 1 pt; Message 2 contains NO informal forms, acronyms or abbreviations (no gonna/wanna/gotta, u, pls, asap, BTW, lol) and uses a proper greeting and closing (Dear Mr Hughes… Kind regards / Best regards) and polite forms (Could you…?, I'm afraid…) — 3 pts, minus 1 pt per informal form in Message 2. Grammar & verb forms (4 pts): correct future forms (I'm going to / I'll / I'm working on Friday), have to / had to, present perfect where relevant, questions with correct word order; B1 accuracy. Coherence & length (3 pts): two clearly separated messages, logical organisation, about 100-140 words in total; deduct up to 1 point if clearly under 80 or over 180 words.",
        reference: "Message 1: “Hey Jess! So sorry, I can't make it on Friday — gotta finish a report for work, TBH I'm gutted. Have an amazing time and let's celebrate next week! x” Message 2: “Dear Mr Hughes, Thank you for your message. I confirm that I will finish the sales report by Friday. Could you please tell me whether I should include the figures for September? I'm going to work on it on Thursday and Friday, and I will send it to you on Friday by 6 pm at the latest. Kind regards, [Name]”"
      },
      // ---------------------------------------------------------------- V
      {
        id: "reading", num: "V", title: "Reading Comprehension", titleFr: "Compréhension écrite",
        points: 15, skill: "ce", type: "mcq",
        instructions: "Read the text, then choose the right answer for each question.",
        instructionsFr: "Lis le texte, puis choisis la bonne réponse pour chaque question.",
        passage: "When Karim joined a small design agency in Bristol, his manager added him to the team chat on his first morning. Within minutes, his phone was full of messages: “gotta leave at 4 today”, “FYI the printer's dead again lol”, “TBH the new logo is kinda weird”. Karim's English was good, but he felt like he was reading a secret code.\n\nFor a week, he replied to everything in long, perfect sentences. Then his colleague Amy sent him a private message: “No worries if you wanna keep it short in here — nobody expects essays!” Karim laughed and started writing “cheers” and “sounds good” like everyone else.\n\nA month later, however, he made the opposite mistake. A client asked for a new version of a poster, and Karim answered: “np, will send asap”. The client didn't complain, but the manager called Karim into her office. She wasn't angry. She simply explained that the agency's clients paid for a professional service, and that a message like that could make them think the team was careless.\n\nSince then, Karim has followed a simple rule: before he writes anything, he asks himself who is going to read it. “The words are easy,” he says. “Choosing the right ones for the right person — that's the real skill.”",
        items: [
          { q: "How did Karim feel when he first read the team chat?", qFr: "Qu'a ressenti Karim en lisant le chat de l'équipe pour la première fois ?",
            opts: ["Bored, because the messages were about work", "Confused, because of the informal forms and abbreviations", "Angry, because nobody said hello", "Relaxed, because his English was good"], correct: 1,
            why: "« he felt like he was reading a secret code » : son anglais était bon, mais les formes familières (gotta, FYI, TBH, kinda) le déroutaient." },
          { q: "What was Amy's message really about?", qFr: "De quoi parlait vraiment le message d'Amy ?",
            opts: ["She was complaining about Karim's English.", "She wanted Karim to write longer answers.", "She was telling him that short, relaxed replies were fine in the team chat.", "She was asking him to leave the chat."], correct: 2,
            why: "« No worries if you wanna keep it short in here — nobody expects essays! » = tu peux répondre court et détendu dans ce chat." },
          { q: "Why was “np, will send asap” a mistake?", qFr: "Pourquoi « np, will send asap » était-il une erreur ?",
            opts: ["Because it was sent to a client, who expects a professional tone", "Because the client complained to the manager", "Because Karim sent the wrong poster", "Because “asap” is always rude"], correct: 0,
            why: "Le client n'a pas protesté ; c'est le registre qui posait problème : face à un client, un message aussi familier peut paraître « careless »." },
          { q: "How did the manager react?", qFr: "Comment la manager a-t-elle réagi ?",
            opts: ["She shouted at Karim.", "She calmly explained why the message was a problem.", "She sent the client an apology in slang.", "She removed Karim from the team chat."], correct: 1,
            why: "« She wasn't angry. She simply explained… » : elle a expliqué calmement le problème." },
          { q: "What is the main idea of the text?", qFr: "Quelle est l'idée principale du texte ?",
            opts: ["Informal English should never be used at work.", "Perfect English is the most important skill.", "You should always write long messages to be polite.", "The key skill is adapting your language to the person who will read it."], correct: 3,
            why: "« Choosing the right ones for the right person — that's the real skill » : c'est le Secret English de B1.9 (savoir QUAND utiliser l'informel)." }
        ]
      },
      // --------------------------------------------------------------- VI
      {
        id: "listening", num: "VI", title: "Listening Comprehension", titleFr: "Compréhension orale",
        points: 15, skill: "co", type: "mcq",
        instructions: "Listen to each recording (you can play it again), then choose the right answer.",
        instructionsFr: "Écoute chaque enregistrement (tu peux le réécouter), puis choisis la bonne réponse.",
        items: [
          { audio: "Hey, it's me. I'm gonna be about twenty minutes late, sorry. The traffic's terrible — there's been an accident on the ring road and nothing's moving. Wanna order without me? I'll have the usual, the veggie burger with chips. And BTW, don't let Sam pay for everything again, OK? See you soon. Cheers!",
            q: "What does the speaker suggest?", qFr: "Que propose la personne ?",
            opts: ["Cancelling dinner", "Meeting at a different restaurant", "Ordering food before she arrives", "Waiting for her outside"], correct: 2,
            why: "« Wanna order without me? » = Do you want to order without me? ; « I'll have the usual » = je prendrai comme d'habitude." },
          { audio: [{ who: "A", text: "Did you see the email about the training day?" }, { who: "B", text: "Dunno, I haven't checked my inbox yet. I've been in meetings all morning. Why, is there a problem?" }, { who: "A", text: "It's been moved to Monday, because the trainer can't come on Thursday. Same time, same room. Just FYI." }, { who: "B", text: "Oh, cheers. Good thing you told me!" }],
            q: "What do we learn from this conversation?", qFr: "Qu'apprend-on dans cette conversation ?",
            opts: ["B has read the email but forgot it.", "The training day is on a different day now.", "The training day has been cancelled.", "A is angry with B."], correct: 1,
            why: "« It's been moved to Monday » = la journée a été déplacée ; « Just FYI » = juste pour info. B ne savait pas : « I haven't checked my inbox yet »." },
          { audio: "Good morning, Ms Clarke. This is Daniel Moreau from the marketing department. I'm afraid I won't be able to attend this afternoon's meeting, as I have to visit a client in Leeds. Could you please send me the notes as soon as possible? I would also be grateful if you could forward the new budget figures. Many thanks, and have a good afternoon.",
            q: "What is the register of this message and why?", qFr: "Quel est le registre de ce message, et pourquoi ?",
            opts: ["Neutral or formal: full forms, polite requests and no abbreviations", "Informal: the speaker uses slang", "Informal: the speaker says “thanks”", "Rude: the speaker gives an order"], correct: 0,
            why: "« I'm afraid… », « Could you please… », « as soon as possible » en entier : c'est un message professionnel neutre, sans « ASAP »." },
          { audio: [{ who: "A", text: "So, what did you think of the new café on the corner?" }, { who: "B", text: "TBH, it was kinda disappointing. The place looks amazing and the staff are lovely, but the coffee was just OK, and it was way too expensive. Four pounds fifty for a small latte!" }, { who: "A", text: "No way! I think I'll stick to our usual place, then." }],
            q: "What is B's opinion of the café?", qFr: "Quel est l'avis de B sur le café ?",
            opts: ["B loved it.", "B hasn't been there yet.", "B found it rather disappointing, mainly because of the prices.", "B thought the coffee was terrible."], correct: 2,
            why: "« TBH » = to be honest ; « kinda disappointing » = plutôt décevant ; « way too expensive » = beaucoup trop cher." },
          { audio: "Sorry mate, gotta run — my train's leaving in five minutes and I still haven't got a ticket. Thanks for the coffee, by the way, it was great to catch up. Lemme know how the interview goes tomorrow, yeah? I'm sure you'll be brilliant. Text me as soon as you get out. Good luck!",
            q: "What does the speaker ask his friend to do?", qFr: "Que demande la personne à son ami ?",
            opts: ["To run to the station", "To tell him how the interview goes", "To give him a lift", "To call the company"], correct: 1,
            why: "« Lemme know how the interview goes » = let me know… = tiens-moi au courant. « Gotta run » = I have to go." }
        ]
      },
      // -------------------------------------------------------------- VII
      {
        id: "speaking", num: "VII", title: "Speaking – Two Voice Messages", titleFr: "Expression orale – deux messages vocaux",
        points: 15, skill: "eo", type: "ai-oral",
        instructions: "Press the microphone and speak for about one and a half minutes. You can try again, or add to your answer. If the microphone doesn't work, type what you would say.",
        instructionsFr: "Appuie sur le micro et parle environ une minute et demie. Tu peux recommencer, ou compléter ta réponse. Si le micro ne fonctionne pas, écris ce que tu dirais.",
        prompt: "You are ill and can't come to two appointments tomorrow. Leave two voice messages, one after the other. Message 1: to your best friend, to cancel your cinema plans (relaxed and friendly). Message 2: to a client, Mrs Patel, to cancel your meeting, apologise, and suggest a new day and time (neutral and polite, no informal forms). Say “Message one” and “Message two” before each message.",
        promptFr: "Tu es malade et tu ne peux pas aller à deux rendez-vous demain. Laisse deux messages vocaux, l'un après l'autre. Message 1 : à ton/ta meilleur(e) ami(e), pour annuler votre séance de cinéma (détendu et amical). Message 2 : à une cliente, Mme Patel, pour annuler votre réunion, t'excuser et proposer un autre jour et une autre heure (neutre et poli, sans forme familière). Dis « Message one » et « Message two » avant chaque message.",
        minWords: 60, targetSeconds: 90,
        rubric: "Total 15 points. Task achievement (4 pts): both messages are present; message 1 cancels and stays friendly; message 2 cancels, apologises and suggests a new day and time. Register contrast (4 pts): message 1 sounds natural and relaxed (e.g. \"Hey, it's me…\", \"sorry, I'm gonna have to cancel\", \"no worries\", \"cheers\"); message 2 uses neutral, polite English (\"Good morning Mrs Patel, this is… I'm afraid I won't be able to…, Would it be possible to…?, I apologise for the inconvenience\") with NO informal forms — deduct 1 pt per informal form in message 2. Grammar & verb forms (4 pts): correct future forms (will / going to / present continuous), polite modals (could / would), B1 accuracy. Fluency and pronunciation (3 pts): judged from the transcript (about 90 seconds ≈ 120-200 words, natural sentences, little hesitation; recognition errors suggesting mispronounced words lower this score; mention the words to practise).",
        reference: "Message one: \"Hey, it's me! Sorry, I'm gonna have to cancel the cinema tomorrow — I'm really not feeling well. Let's go next week instead? Lemme know when you're free. Cheers!\" Message two: \"Good morning Mrs Patel, this is [Name] from [Company]. I'm afraid I won't be able to attend our meeting tomorrow at ten, as I'm unwell. I apologise for the short notice. Would it be possible to meet on Thursday at the same time instead? Please let me know if that suits you. Thank you, and have a good day.\""
      }
    ]
  };

  E[36] = {
    code: "B1.10",
    title: "Level test: B1.10 – Problem Solving",
    titleFr: "Contrôle de niveau : B1.10 – Résoudre un problème",
    objective: "Pass level B1.10 and move on to B1.11: identify a problem, make suggestions (could, why don't we, how about, what if), compare options with conditionals, decide, and use these skills in reading, listening, writing and speaking.",
    objectiveFr: "Valider le niveau B1.10 et passer au B1.11 : identifier un problème, faire des suggestions (could, why don't we, how about, what if), comparer des options avec les conditionnels, décider, et mobiliser ces compétences à l'écrit comme à l'oral.",
    sections: [
      // ---------------------------------------------------------------- I
      {
        id: "vocab", num: "I", title: "Vocabulary – Solving Problems", titleFr: "Vocabulaire – résoudre un problème",
        points: 15, skill: "vo", type: "fill",
        instructions: "Complete each sentence with a word or expression from the list. Each answer is used once; three words are not needed.",
        instructionsFr: "Complète chaque phrase avec un mot ou une expression de la liste. Chaque réponse ne sert qu'une fois ; trois mots ne servent pas.",
        bank: ["issue", "running out of", "went wrong", "drawback", "worth it", "trade-off", "rule out", "go for", "sort it out", "came up with", "weigh up", "makes sense", "advantage"],
        items: [
          { text: "There's an ___ with your booking: the hotel has no record of your payment.",
            blanks: [["issue"]],
            why: "« an issue » = un problème, un souci : plus neutre et diplomatique que « problem », très courant au travail (attention : « an » devant voyelle)." },
          { text: "Hurry up! We're ___ time and the shop closes in ten minutes.",
            blanks: [["running out of"]],
            why: "« to run out of » = manquer de, ne plus avoir de ; toujours « of » avant le nom." },
          { text: "The presentation was ready, but then something ___ with the projector.",
            blanks: [["went wrong"]],
            why: "« to go wrong » = mal tourner, ne pas marcher ; passé irrégulier : « went wrong »." },
          { text: "The flat is lovely. The only ___ is that it's very far from the station.",
            blanks: [["drawback"]],
            why: "« a drawback » = un inconvénient, plus naturel que « disadvantage » à l'oral." },
          { text: "The tickets are expensive, but it's a once-in-a-lifetime concert, so I think it's ___.",
            blanks: [["worth it"]],
            why: "« it's worth it » = ça en vaut la peine : on accepte l'inconvénient (le prix) pour l'avantage." },
          { text: "The train is cheaper but slower, the plane is faster but more expensive: it's a ___ between price and time.",
            blanks: [["trade-off", "trade off"]],
            why: "« a trade-off » = un compromis : on gagne d'un côté, on perd de l'autre." },
          { text: "The restaurant is fully booked on Saturday, so we can ___ that option.",
            blanks: [["rule out"]],
            why: "« to rule out » = écarter, exclure une option (ici impossible car complet)." },
          { text: "We've compared all three hotels. Let's ___ the one near the beach.",
            blanks: [["go for"]],
            why: "« to go for » = choisir, opter pour : la formule naturelle pour décider." },
          { text: "Don't worry about the broken printer. I'll call the technician and ___.",
            blanks: [["sort it out"]],
            why: "« to sort (something) out » = régler, arranger. Avec un pronom, il se place au milieu : « sort it out »." },
          { text: "Before we choose, let's sit down and ___ the pros and cons.",
            blanks: [["weigh up"]],
            why: "« to weigh up the pros and cons » = peser le pour et le contre." }
        ]
      },
      // --------------------------------------------------------------- II
      {
        id: "verbs", num: "II", title: "Verb Forms – Conjugation", titleFr: "Formes verbales – conjugaison",
        points: 15, skill: "cj", type: "fill",
        instructions: "Put the verbs in brackets into the correct form. Think about the type of conditional, the time expressions and the tense of the story.",
        instructionsFr: "Mets les verbes entre parenthèses à la forme qui convient. Pense au type de conditionnel, aux expressions de temps et au temps du récit.",
        items: [
          { header: { en: "A. Comparing options: conditionals", fr: "A. Comparer des options : les conditionnels" },
            text: "If we ___ (take) the motorway, we'll arrive before lunch.",
            blanks: [["take"]],
            why: "Premier conditionnel (option réelle et probable) : « If + présent, will… ». Jamais « will » après « if »." },
          { text: "If we take the train, we ___ (arrive) late for the ceremony.",
            blanks: [["will arrive"]],
            why: "Conséquence réelle et probable → « will + base verbale » dans l'autre partie de la phrase." },
          { text: "If we ___ (drive), we'd have to leave at six in the morning.",
            blanks: [["drove"]],
            why: "Option plus hypothétique : « If + prétérit, would… » → « If we drove » (drive → drove, irrégulier)." },
          { text: "If we had a bigger budget, we ___ (book) the room above the café.",
            blanks: [["would book", "could book"]],
            why: "Hypothèse (« If we had… ») → « would / could + base verbale ». « will » est impossible ici." },
          { text: "What if we ___ (leave) an hour earlier? We'd avoid the traffic.",
            blanks: [["left", "leave"]],
            why: "« What if + prétérit » = suggestion prudente (et « we'd avoid » confirme l'hypothèse) ; le présent « leave » est aussi accepté." },
          { header: { en: "B. Review: telling the story of a problem", fr: "B. Révision : raconter un problème" },
            text: "Three days before the party, the venue suddenly ___ (cancel) our booking.",
            blanks: [["cancelled", "canceled"]],
            why: "Événement ponctuel et terminé dans le passé → Past Simple (UK : deux l, « cancelled »)." },
          { text: "We ___ (look) for a new venue when Tom called with an idea.",
            blanks: [["were looking"]],
            why: "Action en cours (Past Continuous) interrompue par une action courte (« called ») : rappel B1.2." },
          { text: "By the time we found a solution, we ___ (already / spend) two hours on the phone.",
            blanks: [["had already spent"]],
            why: "« By the time » + action antérieure à une autre action passée → Past Perfect « had already spent » (spend → spent)." },
          { text: "Good news: I ___ (just / sort) out the problem with the supplier!",
            blanks: [["have just sorted"]],
            why: "Action récente avec un résultat visible maintenant (« just ») → Present Perfect : « have just sorted »." },
          { text: "The supplier can't deliver on Friday, so we ___ (have to) find another one.",
            blanks: [["have to", "will have to"]],
            why: "Obligation au présent : « have to » (ou « will have to » pour une conséquence future) — rappel B1.5." }
        ]
      },
      // -------------------------------------------------------------- III
      {
        id: "grammar", num: "III", title: "Grammar – Suggestions and Decisions", titleFr: "Grammaire – suggestions et décisions",
        points: 10, skill: "gr", type: "fill",
        instructions: "Complete each suggestion or decision with the correct form of the verb in brackets. Type only the missing word or words.",
        instructionsFr: "Complète chaque suggestion ou décision avec la bonne forme du verbe entre parenthèses. Tape seulement le ou les mots manquants.",
        items: [
          { text: "Why don't we ___ (ask) the neighbours for help?",
            blanks: [["ask"]],
            why: "« Why don't we » + base verbale : c'est une suggestion, pas une vraie question." },
          { text: "How about ___ (call) another supplier?",
            blanks: [["calling"]],
            why: "« How about » est toujours suivi d'un nom ou d'un verbe en -ing." },
          { text: "I suggest ___ (book) the tickets online tonight.",
            blanks: [["booking"]],
            why: "« suggest » + -ing (ou « suggest that we book »). Jamais « suggest to book » ni « suggest you to book »." },
          { text: "Another option would be ___ (rent) a van.",
            blanks: [["to rent"]],
            why: "« Another option would be » + « to + base verbale »." },
          { text: "We could ___ (move) the meeting to Thursday.",
            blanks: [["move"]],
            why: "Modal « could » + base verbale, sans « to » : la façon la plus douce de proposer." },
          { text: "I'd rather ___ (leave) early than miss the start of the ceremony.",
            blanks: [["leave"]],
            why: "« I'd rather » + base verbale (+ than…) = je préfère." },
          { text: "It's getting late. We'd better ___ (make) a decision now.",
            blanks: [["make"]],
            why: "« We'd better » (= we had better) + base verbale = on ferait mieux de. Et on « MAKE » une décision." },
          { text: "Let's ___ (go) for the second option — it's cheaper and more flexible.",
            blanks: [["go"]],
            why: "« Let's » + base verbale ; « go for » = choisir, opter pour." },
          { text: "The problem ___ (be) that we don't have enough staff on Saturdays.",
            blanks: [["is"]],
            why: "« The problem is that… » : pas de « it » en plus (« The problem it is » est un calque du français)." },
          { text: "That ___ (make) sense: if we share the cost, it's only ten pounds each.",
            blanks: [["makes"]],
            why: "« It / That makes sense » = c'est logique ; jamais « has sense ». 3e personne → « makes »." }
        ]
      },
      // --------------------------------------------------------------- IV
      {
        id: "writing", num: "IV", title: "Writing – Proposing Solutions", titleFr: "Expression écrite – proposer des solutions",
        points: 15, skill: "ee", type: "ai-text",
        instructions: "Write an email of about 120 to 160 words.",
        instructionsFr: "Écris un e-mail d'environ 120 à 160 mots.",
        quotes: [
          "Message from your manager: “Bad news — the hotel where we booked our team training day on 14 November has just closed for repairs. We have 25 people, a budget of £1,500 and only two weeks. Can you suggest some solutions by Friday? Thanks, Claire”"
        ],
        prompt: "Reply to Claire. Identify the problem and the constraints, suggest at least two different solutions, compare them (advantages, drawbacks, consequences with “if”), and recommend one option with a reason.",
        promptFr: "Réponds à Claire. Identifie le problème et les contraintes, propose au moins deux solutions différentes, compare-les (avantages, inconvénients, conséquences avec « if ») et recommande une option en donnant une raison.",
        minWords: 120, maxWords: 160,
        rubric: "Total 15 points. Task achievement (4 pts): the problem and at least two constraints are mentioned (people, budget, time); at least two different solutions are proposed and compared; one option is clearly recommended with a reason. Suggestion & decision language (4 pts): at least three different structures used correctly (We could + base verb, Why don't we…?, How about + -ing, What if we…?, Another option would be to…, I suggest + -ing / I suggest that we…, Let's go for…, The main advantage / drawback is…, It's worth it, trade-off, rule out) — deduct 1 pt for \"suggest you to\" or \"how about + base verb\". Grammar & verb forms (4 pts): at least one correct conditional (If + present, will… / If + past, would…), correct present perfect for the news (has closed), B1 accuracy. Register & organisation (3 pts): neutral professional email (greeting, clear paragraphs, polite closing, no slang or abbreviations), about 120-160 words; deduct up to 1 point if clearly under 90 or over 220 words.",
        reference: "Example: Dear Claire, Thank you for letting me know. The problem is that we have only two weeks to find a new venue for 25 people, with a budget of £1,500. One option would be to book a meeting room at the conference centre near the station. The main advantage is that it's big and easy to reach; the drawback is the price, which is close to our budget. Alternatively, we could hold the training day in our own office and order lunch from a caterer. If we did that, we would save a lot of money, but the space would be quite small. We can probably rule out the other hotels in town, as they are fully booked. I suggest going for the conference centre: it's more expensive, but I think it's worth it. Shall I call them today? Best regards, [Name]"
      },
      // ---------------------------------------------------------------- V
      {
        id: "reading", num: "V", title: "Reading Comprehension", titleFr: "Compréhension écrite",
        points: 15, skill: "ce", type: "mcq",
        instructions: "Read the text, then choose the right answer for each question.",
        instructionsFr: "Lis le texte, puis choisis la bonne réponse pour chaque question.",
        passage: "Nadia runs a small bakery in York. Last December, two days before her biggest order of the year — three hundred mince pies for a school Christmas fair — her main oven broke down. The repair company said a technician couldn't come until the following week.\n\nNadia's first reaction was to panic. Her second was to make a list. The problem was clear: she needed to bake three hundred pies in forty-eight hours with only one small oven. She called her two employees and they weighed up the options together.\n\nThe first idea was to buy ready-made pies from a supermarket. It was quick, but they quickly ruled it out: the school had chosen Nadia's bakery because everything was homemade. Another option was to rent an oven, but none were available so close to Christmas. Then Liam, the youngest employee, came up with an idea: “Why don't we ask the restaurant next door? They don't open until the evening, so their kitchen is empty every morning.”\n\nThe owner agreed immediately, on one condition: Nadia would make desserts for his restaurant for a week. It was a trade-off, and it meant more work, but everyone agreed it was worth it. The pies were delivered on time, still warm.\n\n“I learnt something that week,” Nadia says. “When something goes wrong, the answer is rarely inside your own four walls. You just have to ask.”",
        items: [
          { q: "What exactly was Nadia's problem?", qFr: "Quel était exactement le problème de Nadia ?",
            opts: ["The school had cancelled its order.", "She had a big order to prepare but her main oven had stopped working.", "Her employees were ill.", "She had forgotten to buy ingredients."], correct: 1,
            why: "« two days before her biggest order… her main oven broke down » : une grosse commande et plus de four principal." },
          { q: "Why did they rule out the supermarket pies?", qFr: "Pourquoi ont-ils écarté les tartelettes du supermarché ?",
            opts: ["They were too expensive.", "The supermarket was closed.", "The school wanted homemade pies from the bakery.", "There weren't enough of them."], correct: 2,
            why: "« the school had chosen Nadia's bakery because everything was homemade » : acheter tout prêt ne répondait pas à la demande." },
          { q: "Why was Liam's idea a good one?", qFr: "Pourquoi l'idée de Liam était-elle bonne ?",
            opts: ["The restaurant's kitchen wasn't used in the mornings.", "The restaurant sold mince pies.", "The restaurant owner was his father.", "The restaurant had a new oven for sale."], correct: 0,
            why: "« They don't open until the evening, so their kitchen is empty every morning. »" },
          { q: "What was the “trade-off” in the text?", qFr: "Quel était le « trade-off » (compromis) dans le texte ?",
            opts: ["Nadia paid a lot of money to rent the kitchen.", "Nadia had to close her bakery for a week.", "The school accepted fewer pies.", "Nadia got the kitchen but had to make desserts for the restaurant in return."], correct: 3,
            why: "Un compromis : elle gagne l'accès à la cuisine, mais doit faire les desserts du restaurant pendant une semaine (« more work »)." },
          { q: "What lesson does Nadia draw from the experience?", qFr: "Quelle leçon Nadia tire-t-elle de cette expérience ?",
            opts: ["You should always have two ovens.", "Big orders are not worth it.", "When you have a problem, asking other people for help can be the solution.", "You should never panic."], correct: 2,
            why: "« the answer is rarely inside your own four walls. You just have to ask » = la solution vient souvent des autres." }
        ]
      },
      // --------------------------------------------------------------- VI
      {
        id: "listening", num: "VI", title: "Listening Comprehension", titleFr: "Compréhension orale",
        points: 15, skill: "co", type: "mcq",
        instructions: "Listen to each recording (you can play it again), then choose the right answer.",
        instructionsFr: "Écoute chaque enregistrement (tu peux le réécouter), puis choisis la bonne réponse.",
        items: [
          { audio: [{ who: "A", text: "The problem is that the flight's been cancelled and the next one isn't until tomorrow afternoon." }, { who: "B", text: "Why don't we get the train instead? It takes longer, and it's a bit more expensive, but at least we'd be home tonight." }, { who: "A", text: "That makes sense. If we stay here, we'll have to pay for a hotel anyway." }],
            q: "What does B suggest, and why?", qFr: "Que propose B, et pourquoi ?",
            opts: ["Taking the train, to get home the same day", "Waiting for tomorrow's flight, because it's quicker", "Renting a car, because it's cheaper", "Staying at a hotel near the airport"], correct: 0,
            why: "« Why don't we get the train instead? … at least we'd be home tonight » : plus long, mais ils rentrent le soir même." },
          { audio: [{ who: "A", text: "What if we held the weekly meeting online from now on? It would save everyone the journey." }, { who: "B", text: "Hmm, that might be a bit tricky. Half the team has a terrible internet connection at home, and last time the call kept cutting out." }, { who: "A", text: "Fair point. Let's think of another option, then." }],
            q: "What does B really think of the idea?", qFr: "Que pense vraiment B de l'idée ?",
            opts: ["B thinks it's an excellent idea.", "B is politely rejecting it.", "B hasn't understood the idea.", "B wants to organise it."], correct: 1,
            why: "« That might be a bit tricky » : le refus poli à la britannique (Secret English B1.10), justifié par la mauvaise connexion." },
          { audio: "OK, we've weighed up the pros and cons, so let's decide. We can rule out the big hotel — it's way over budget, even with the discount. The guesthouse is small and a bit old-fashioned, but it's close to the beach and it's half the price. So let's go for the guesthouse. I'll book it tonight.",
            q: "What is the final decision?", qFr: "Quelle est la décision finale ?",
            opts: ["The big hotel, because it's near the beach", "The guesthouse, even though it's small", "Neither: they'll look again tomorrow", "The big hotel, because the budget is bigger now"], correct: 1,
            why: "« rule out the big hotel » = on l'écarte (trop cher) ; « let's go for the guesthouse » = on choisit la maison d'hôtes, malgré sa petite taille." },
          { audio: [{ who: "A", text: "We're running out of time. The client wants the report by five, and we haven't even started the summary." }, { who: "B", text: "Don't worry, I'll sort it out. You finish the charts, and I'll write the summary. If we work separately, we'll be done by half past four." }, { who: "A", text: "Great. Thanks, that's a relief." }],
            q: "How does B react to the problem?", qFr: "Comment B réagit-il au problème ?",
            opts: ["B panics.", "B asks the client for more time.", "B takes charge and shares out the work.", "B refuses to help."], correct: 2,
            why: "« I'll sort it out » = je m'en occupe ; puis B répartit les tâches (charts / summary)." },
          { audio: "Right, how do we get to the airport? If we take the bus, we'll save about thirty pounds, but it takes two hours and we'd have to change in the city centre. If we got a taxi, we'd be there in forty minutes. Honestly, I'd rather pay more and arrive fresh. It's worth it.",
            q: "Which option does the speaker prefer?", qFr: "Quelle option la personne préfère-t-elle ?",
            opts: ["The bus, because it's cheaper", "Walking, because it's free", "The bus, because it's faster", "The taxi, because it's quicker, even if it costs more"], correct: 3,
            why: "« I'd rather pay more and arrive fresh » = je préfère payer plus : le taxi (40 minutes au lieu de deux heures)." }
        ]
      },
      // -------------------------------------------------------------- VII
      {
        id: "speaking", num: "VII", title: "Speaking – Solve the Problem", titleFr: "Expression orale – résous le problème",
        points: 15, skill: "eo", type: "ai-oral",
        instructions: "Press the microphone and speak for about one and a half minutes. You can try again, or add to your answer. If the microphone doesn't work, type what you would say.",
        instructionsFr: "Appuie sur le micro et parle environ une minute et demie. Tu peux recommencer, ou compléter ta réponse. Si le micro ne fonctionne pas, écris ce que tu dirais.",
        prompt: "Your friend calls you: “My car has broken down, and I have to take my son to his football match two hours from here on Saturday morning. The garage can't repair it before Monday. What should I do?” Help your friend: say what the problem and the constraints are, suggest at least two solutions, compare them (use “if”), then help them decide.",
        promptFr: "Un(e) ami(e) t'appelle : « Ma voiture est en panne, et je dois emmener mon fils à son match de foot à deux heures d'ici samedi matin. Le garage ne peut pas la réparer avant lundi. Qu'est-ce que je fais ? » Aide ton ami(e) : dis quel est le problème et quelles sont les contraintes, propose au moins deux solutions, compare-les (utilise « if »), puis aide-le/la à décider.",
        minWords: 60, targetSeconds: 90,
        rubric: "Total 15 points. Task achievement (4 pts): the problem and constraints are identified (no car, distance, Saturday morning), at least two realistic solutions are suggested and compared, and a clear decision or recommendation is reached. Problem-solving language (4 pts): varied suggestion and decision structures used correctly (Why don't you/we…?, You could…, How about + -ing?, What if…?, Another option would be to…, The drawback is…, It's worth it, Let's go for… / I'd go for…) — 1 pt per correct, different structure, up to 4. Grammar & verb forms (4 pts): at least one correct conditional (If you take the train, you'll… / If you rented a car, you'd…), correct base verb after could / why don't / let's and -ing after how about; B1 accuracy. Fluency and pronunciation (3 pts): judged from the transcript (about 90 seconds ≈ 120-200 words, natural and connected sentences; recognition errors suggesting mispronounced words lower this score; mention the words to practise).",
        reference: "Example: \"Oh no! So the problem is that you've got no car until Monday and the match is two hours away on Saturday morning. Why don't you ask another parent from the team for a lift? That's the cheapest option. Another option would be to rent a car for the weekend. If you rented one, you'd be completely free, but it would cost about sixty pounds. You could also take the train, but if you take the first train, you'll probably arrive late. Honestly, I'd go for the lift: call the coach tonight and ask who's driving. If nobody can, rent a car — it's worth it.\""
      }
    ]
  };

  E[37] = {
    code: "B1.11",
    title: "Level test: B1.11 – Stories, Movies & Culture",
    titleFr: "Contrôle de niveau : B1.11 – Histoires, films et culture",
    objective: "Pass level B1.11 and move on to B1.12: talk about films, series and stories, summarise a plot in the present with relative clauses, recognise irony, sarcasm, exaggeration and understatement, and use these skills in reading, listening, writing and speaking.",
    objectiveFr: "Valider le niveau B1.11 et passer au B1.12 : parler de films, de séries et d'histoires, résumer une intrigue au présent avec des relatives, reconnaître l'ironie, le sarcasme, l'exagération et l'understatement, et mobiliser ces compétences à l'écrit comme à l'oral.",
    sections: [
      // ---------------------------------------------------------------- I
      {
        id: "vocab", num: "I", title: "Vocabulary – Films, Series & Humour", titleFr: "Vocabulaire – films, séries et humour",
        points: 15, skill: "vo", type: "fill",
        instructions: "Complete each sentence with a word or expression from the list. Each answer is used once; three words are not needed.",
        instructionsFr: "Complète chaque phrase avec un mot ou une expression de la liste. Chaque réponse ne sert qu'une fois ; trois mots ne servent pas.",
        bank: ["plot", "cast", "twist", "spoilers", "subtitles", "gripping", "moving", "overrated", "far-fetched", "understatement", "literally", "hilarious", "binge-watched"],
        items: [
          { text: "No ___, please! I haven't seen the last episode yet.",
            blanks: [["spoilers"]],
            why: "« No spoilers! » = ne me raconte pas la fin ! Un spoiler révèle une information importante de l'histoire." },
          { text: "I didn't see that ___ coming! I was sure the brother was the killer.",
            blanks: [["twist"]],
            why: "« a (plot) twist » = un rebondissement, un retournement de situation." },
          { text: "The ___ is quite simple, but the characters are brilliant.",
            blanks: [["plot"]],
            why: "« the plot » = l'intrigue, ce qui se passe dans l'histoire (≠ les personnages)." },
          { text: "The ___ is amazing: every actor is perfect in their role.",
            blanks: [["cast"]],
            why: "« the cast » = la distribution, l'ensemble des acteurs." },
          { text: "I watch series in English with English ___ — it really helps my listening.",
            blanks: [["subtitles"]],
            why: "« subtitles » = sous-titres ; lire et écouter en même temps est un excellent exercice au B1." },
          { text: "It was so ___ that I couldn't stop reading until 2 a.m.",
            blanks: [["gripping"]],
            why: "« gripping » = captivant : on n'arrive pas à décrocher de l'histoire." },
          { text: "Everyone says it's a masterpiece, but honestly, I think it's a bit ___.",
            blanks: [["overrated"]],
            why: "« overrated » = surcoté : moins bon que ce que tout le monde dit. Contraire : « underrated »." },
          { text: "A dog who drives a bus and saves the city? The story is a bit ___, but it's fun to watch.",
            blanks: [["far-fetched", "far fetched"]],
            why: "« far-fetched » = tiré par les cheveux, peu crédible." },
          { text: "It was minus fifteen, and he said: “It's a bit chilly.” What an ___!",
            blanks: [["understatement"]],
            why: "« understatement » = dire beaucoup moins que la réalité : un classique de l'humour britannique." },
          { text: "Don't take it ___ — he was being sarcastic!",
            blanks: [["literally"]],
            why: "« to take something literally » = prendre quelque chose au pied de la lettre, au premier degré." }
        ]
      },
      // --------------------------------------------------------------- II
      {
        id: "verbs", num: "II", title: "Verb Forms – Conjugation", titleFr: "Formes verbales – conjugaison",
        points: 15, skill: "cj", type: "fill",
        instructions: "Put the verbs in brackets into the correct form. Remember: a plot summary is in the present, but your own experience of a film is in the past.",
        instructionsFr: "Mets les verbes entre parenthèses à la forme qui convient. Rappel : un résumé d'intrigue se fait au présent, mais ta propre expérience d'un film se raconte au passé.",
        items: [
          { header: { en: "A. Summarising a plot", fr: "A. Résumer une intrigue" },
            text: "The film ___ (set) in a small Scottish village in the 1920s.",
            blanks: [["is set"]],
            why: "« to be set in » est une forme passive : « The film is set in… » (jamais « sets » ni « is setting »)." },
          { text: "In the first episode, a young chef ___ (move) to London and ___ (meet) a strange neighbour.",
            blanks: [["moves"], ["meets"]],
            why: "Résumé d'intrigue → Present Simple, 3e personne : « moves », « meets » (le présent de narration)." },
          { text: "The series ___ (base) on a true story.",
            blanks: [["is based"]],
            why: "« to be based on » = être tiré de : forme passive, « is based on »." },
          { text: "At the end, she finally ___ (discover) who ___ (send) her the letters.",
            blanks: [["discovers"], ["sends", "has been sending", "has sent", "sent"]],
            why: "Le résumé reste au présent : « discovers ». Pour l'expéditeur des lettres, plusieurs temps sont possibles selon le point de vue (sends / has been sending / sent)." },
          { header: { en: "B. Your own experience (review)", fr: "B. Ta propre expérience (révision)" },
            text: "I ___ (watch) it last night and I absolutely ___ (love) it.",
            blanks: [["watched"], ["loved"]],
            why: "Ton expérience personnelle, terminée (« last night ») → Past Simple : « watched », « loved »." },
          { text: "I ___ (binge-watch) the whole first series last weekend.",
            blanks: [["binge-watched", "binge watched"]],
            why: "Moment passé précis (« last weekend ») → Past Simple : « binge-watched »." },
          { text: "I ___ (never / see) such a gripping thriller in my life!",
            blanks: [["have never seen"]],
            why: "Expérience de toute une vie (« never… in my life ») → Present Perfect : « have never seen » (see → seen)." },
          { text: "By the time I switched on the TV, the film ___ (already / start).",
            blanks: [["had already started"]],
            why: "Action antérieure à une autre action passée (« By the time I switched on ») → Past Perfect (rappel B1.2)." },
          { text: "He ___ (be) sarcastic when he said “Great. Just great.” — he wasn't happy at all.",
            blanks: [["was being", "was"]],
            why: "« He was being sarcastic » = il faisait du sarcasme à ce moment-là : Past Continuous de « be » pour un comportement temporaire (« was » aussi accepté)." },
          { text: "Sorry, I ___ (not / get) the joke at first.",
            blanks: [["did not get", "didn't get"]],
            why: "Past Simple négatif : « didn't + base verbale ». Ici « get » = comprendre (une blague)." }
        ]
      },
      // -------------------------------------------------------------- III
      {
        id: "grammar", num: "III", title: "Grammar – Relative Clauses & Recommending", titleFr: "Grammaire – relatives et recommandations",
        points: 10, skill: "gr", type: "fill",
        instructions: "A. Complete with who, which or where. B. Complete with the correct form of the verb in brackets. Type only the missing word.",
        instructionsFr: "A. Complète avec who, which ou where. B. Complète avec la bonne forme du verbe entre parenthèses. Tape seulement le mot manquant.",
        items: [
          { header: { en: "A. Relative clauses", fr: "A. Les propositions relatives" },
            text: "It's about a detective ___ solves crimes in a small village.",
            blanks: [["who", "that"]],
            why: "« who » (ou « that ») pour une personne. Pas de pronom en double : jamais « who he solves »." },
          { text: "It's set in a seaside town ___ nothing ever happens.",
            blanks: [["where"]],
            why: "« where » pour un lieu, suivi d'une phrase complète (nothing ever happens)." },
          { text: "It's a comedy ___ makes fun of office life.",
            blanks: [["which", "that"]],
            why: "« which » (ou « that ») pour une chose ou une œuvre." },
          { text: "The daughter is the character ___ is always sarcastic.",
            blanks: [["who", "that"]],
            why: "« who / that » pour une personne (le personnage), suivi directement du verbe." },
          { text: "They run a hotel ___ almost nobody visits.",
            blanks: [["which", "that"]],
            why: "« which / that » pour une chose (le complément : « nobody visits the hotel »). On pourrait même l'omettre ici." },
          { header: { en: "B. Recommending and giving your opinion", fr: "B. Recommander et donner son avis" },
            text: "I'd definitely recommend ___ (watch) it with subtitles.",
            blanks: [["watching"]],
            why: "« recommend » + -ing. Jamais « recommend you to watch » (calque du français)." },
          { text: "The book is long, but it's really worth ___ (read).",
            blanks: [["reading"]],
            why: "« worth » + verbe en -ing : « worth reading », « worth watching »." },
          { text: "The show ___ (make) fun of British politicians.",
            blanks: [["makes"]],
            why: "« to make fun of » = se moquer de ; fait général → Present Simple, 3e personne « makes »." },
          { text: "It ___ (tell) the story of a woman who finds a letter in an old book.",
            blanks: [["tells"]],
            why: "« It tells the story of… » = ça raconte l'histoire de… : présent de narration." },
          { text: "What did you ___ (mean)? Were you being serious?",
            blanks: [["mean"]],
            why: "Question au Past Simple : « did » + base verbale « mean » (pas « meant »)." }
        ]
      },
      // --------------------------------------------------------------- IV
      {
        id: "writing", num: "IV", title: "Writing – A Short Review", titleFr: "Expression écrite – une courte critique",
        points: 15, skill: "ee", type: "ai-text",
        instructions: "Write a review of about 120 to 160 words.",
        instructionsFr: "Écris une critique d'environ 120 à 160 mots.",
        prompt: "An English-language website for learners is looking for short reviews: “A film or series that made me laugh”. Write about a film or series you know (real or invented). Say where and when it is set, summarise the beginning of the plot in the present without spoilers, describe one or two characters with relative clauses, explain what kind of humour it uses (irony, sarcasm, exaggeration or understatement) with one example, say when and how you watched it, and give a recommendation.",
        promptFr: "Un site anglophone pour apprenants cherche de courtes critiques : « Un film ou une série qui m'a fait rire ». Parle d'un film ou d'une série que tu connais (réel ou inventé). Dis où et quand l'histoire se déroule, résume le début de l'intrigue au présent sans spoiler, décris un ou deux personnages avec des relatives, explique quel type d'humour est utilisé (ironie, sarcasme, exagération ou understatement) avec un exemple, dis quand et comment tu l'as regardé, puis donne une recommandation.",
        minWords: 120, maxWords: 160,
        rubric: "Total 15 points. Do not reward or penalise the choice of film; if the learner quotes real dialogue, only give credit for their own sentences. Task achievement (4 pts): setting (be set in), plot summary without giving away the ending, at least one character description, the type of humour explained with an example, a personal recommendation. Grammar & verb forms (4 pts): plot summary in the Present Simple (moves, meets, tells the story of…), personal experience in the past (I watched / I binge-watched / I've seen it twice), at least two correct relative clauses (who / which / that / where, no double pronoun), recommend + -ing or I'd recommend it, worth + -ing. Vocabulary (4 pts): at least five words from the lesson used correctly (plot, character, cast, twist, spoiler, set in, based on, gripping, moving, hilarious, overrated, far-fetched, irony / sarcastic, understatement, tongue-in-cheek, make fun of, binge-watch, subtitles). Coherence & length (3 pts): clear organisation (setting → plot → characters → humour → opinion), linking words, about 120-160 words; deduct up to 1 point if clearly under 90 or over 220 words.",
        reference: "Example: “Rainy Tuesdays is a British comedy series which is set in a small seaside town. It follows a family who run a hotel where almost nobody stays. In the first episode, a famous food critic arrives, and everything goes wrong. The plot is simple, but the characters are brilliant. The father is a man who never panics: when the kitchen floods, he calls it ‘a slight inconvenience’ — a perfect understatement. His daughter is the sarcastic one; whenever there's a disaster, she says it's the best day ever. I binge-watched the first series last month with English subtitles, and at first I didn't get all the jokes. There's a great twist at the end, but no spoilers! If you want to understand British humour, I'd definitely recommend watching it. It's absolutely hilarious.”"
      },
      // ---------------------------------------------------------------- V
      {
        id: "reading", num: "V", title: "Reading Comprehension", titleFr: "Compréhension écrite",
        points: 15, skill: "ce", type: "mcq",
        instructions: "Read the text, then choose the right answer for each question.",
        instructionsFr: "Lis le texte, puis choisis la bonne réponse pour chaque question.",
        passage: "When Inès arrived in Leeds as an exchange student, she thought her English was ready for anything. Then she met her flatmate, Joe.\n\nOn her first evening, the heating broke and the flat was freezing. Joe looked at the thermometer — eight degrees — and said, “Bit fresh tonight.” Inès nodded politely. A few days later, she burnt the pasta so badly that the smoke alarm went off. Joe opened the window and said, “Well, that smells delicious.” Inès apologised for twenty minutes before she noticed that he was trying not to laugh.\n\nShe was confused, so she asked her tutor about it. The tutor smiled and explained that British people often say the opposite of what they mean, or much less than they mean. “If you only listen to the words, you'll miss half the message,” she said. “Look at the situation, and listen to the tone.”\n\nThe tutor gave Inès some homework: watch an episode of a British sitcom every week, with English subtitles. At first, Inès didn't get most of the jokes. But by the end of the term, she could tell when a character was being sarcastic before the audience laughed.\n\nThe real test came in June. After a very difficult exam, Joe asked her how it had gone. Inès sighed, looked out at the grey rain and said, “Not bad. Could've been worse.” Joe burst out laughing. “You're practically British now,” he said.",
        items: [
          { q: "When Joe said “Bit fresh tonight”, what did he really mean?", qFr: "Quand Joe a dit « Bit fresh tonight », que voulait-il vraiment dire ?",
            opts: ["That the air in the flat was nice and clean", "That it was extremely cold — an understatement", "That he wanted to open a window", "That he was happy with the temperature"], correct: 1,
            why: "À 8 °C, « a bit fresh » dit beaucoup moins que la réalité : c'est un understatement." },
          { q: "Why did Inès apologise for twenty minutes?", qFr: "Pourquoi Inès s'est-elle excusée pendant vingt minutes ?",
            opts: ["She took Joe's comment literally and didn't realise he was joking.", "Joe was really angry with her.", "She had broken the smoke alarm.", "Joe had asked her to cook for him."], correct: 0,
            why: "« Well, that smells delicious » était ironique ; elle l'a pris au premier degré, jusqu'à voir qu'il retenait un rire." },
          { q: "According to the tutor, how can you understand what British people really mean?", qFr: "D'après la tutrice, comment comprendre ce que les Britanniques veulent vraiment dire ?",
            opts: ["By learning more words", "By asking them to repeat", "By paying attention to the situation and the tone", "By reading the newspaper every day"], correct: 2,
            why: "« Look at the situation, and listen to the tone » : le sens voulu ne se lit pas seulement dans les mots." },
          { q: "What progress did Inès make by the end of the term?", qFr: "Quels progrès Inès a-t-elle faits à la fin du trimestre ?",
            opts: ["She stopped using subtitles.", "She wrote her own sitcom.", "She understood every word of every joke.", "She could recognise sarcasm on her own."], correct: 3,
            why: "« she could tell when a character was being sarcastic before the audience laughed » = elle repérait le sarcasme seule." },
          { q: "Why does Joe say “You're practically British now”?", qFr: "Pourquoi Joe dit-il « You're practically British now » ?",
            opts: ["Because she has decided to stay in Leeds", "Because she used a typically British understatement about a hard exam", "Because she passed her exam with top marks", "Because she complained about the rain"], correct: 1,
            why: "« Not bad. Could've been worse » après un examen très difficile : elle minimise à la britannique, et Joe le remarque." }
        ]
      },
      // --------------------------------------------------------------- VI
      {
        id: "listening", num: "VI", title: "Listening Comprehension – Literal or Intended Meaning?", titleFr: "Compréhension orale – sens littéral ou sens voulu ?",
        points: 15, skill: "co", type: "mcq",
        instructions: "Listen to each recording (you can play it again), then choose the right answer. Pay attention to the situation, not only to the words.",
        instructionsFr: "Écoute chaque enregistrement (tu peux le réécouter), puis choisis la bonne réponse. Fais attention à la situation, pas seulement aux mots.",
        items: [
          { audio: [{ who: "A", text: "Bad news, I'm afraid. The train's been cancelled, and the next one is in two hours." }, { who: "B", text: "Oh, fantastic. That's exactly what I needed today. I've got a job interview at three, my phone's nearly dead, and now this." }, { who: "A", text: "Sorry. Shall we get a coffee while we wait?" }],
            q: "How does B really feel?", qFr: "Que ressent vraiment B ?",
            opts: ["Pleased, because B can relax", "Surprised in a good way", "Annoyed: B is being sarcastic", "Indifferent"], correct: 2,
            why: "« fantastic », « exactly what I needed » face à une mauvaise nouvelle : le sens voulu est l'inverse, c'est du sarcasme." },
          { audio: [{ who: "A", text: "So, did you enjoy the film last night?" }, { who: "B", text: "Well, it's set in Rome in the sixties, and the cast is great — the two main actors are brilliant together. But the plot is a bit far-fetched: nobody finds a lost diamond in a pizza! Still worth watching, though." }],
            q: "What is B's opinion of the film?", qFr: "Quel est l'avis de B sur le film ?",
            opts: ["B liked it overall, despite an unrealistic story.", "B hated everything about it.", "B only liked the story.", "B hasn't seen it yet."], correct: 0,
            why: "« the plot is a bit far-fetched » (peu crédible) mais « Still worth watching » : avis globalement positif." },
          { audio: "Right, everyone, listen. I've told you a million times: don't leave your shoes in the middle of the corridor! This morning I nearly fell down the stairs. If I find one more pair of trainers here tonight, they're going straight in the bin. Is that clear?",
            q: "What figure of speech does the speaker use?", qFr: "Quel procédé la personne utilise-t-elle ?",
            opts: ["Understatement", "Exaggeration", "A spoiler", "A polite request"], correct: 1,
            why: "« a million times » : personne ne compte vraiment, c'est une exagération pour montrer l'agacement." },
          { audio: [{ who: "A", text: "How was the marathon on Sunday?" }, { who: "B", text: "Oh, not bad. Forty-two kilometres in the pouring rain, and I can't feel my legs. I've got blisters on both feet and I slept for twelve hours. A bit tiring, maybe." }, { who: "A", text: "A bit tiring? You're amazing!" }],
            q: "What is B doing?", qFr: "Que fait B ?",
            opts: ["Complaining angrily", "Telling a lie about the race", "Minimising a very hard experience with understatement", "Saying the marathon was easy"], correct: 2,
            why: "« Not bad… a bit tiring, maybe » pour 42 km sous la pluie : B minimise volontairement, c'est un understatement." },
          { audio: [{ who: "A", text: "What's the series about? No spoilers, please!" }, { who: "B", text: "Don't worry. It follows a teacher who moves to a tiny island where nobody wants to go to school. In every episode, she tries a new idea to get the children into the classroom. It's based on a true story, and it's absolutely hilarious." }],
            q: "Which statement is correct?", qFr: "Quelle affirmation est correcte ?",
            opts: ["B tells A how the series ends.", "B thinks the series is very sad.", "The series is set in a big city.", "The main character is a teacher on a small island."], correct: 3,
            why: "« a teacher who moves to a tiny island » : B résume au présent avec des relatives, sans révéler la fin, et la trouve « hilarious »." }
        ]
      },
      // -------------------------------------------------------------- VII
      {
        id: "speaking", num: "VII", title: "Speaking – Tell Me About It (No Spoilers!)", titleFr: "Expression orale – raconte-moi (sans spoiler !)",
        points: 15, skill: "eo", type: "ai-oral",
        instructions: "Press the microphone and speak for about one and a half minutes. You can try again, or add to your answer. If the microphone doesn't work, type what you would say.",
        instructionsFr: "Appuie sur le micro et parle environ une minute et demie. Tu peux recommencer, ou compléter ta réponse. Si le micro ne fonctionne pas, écris ce que tu dirais.",
        prompt: "A British colleague asks you: “Seen anything good lately?” Tell them about a film, series or book you enjoyed (real or invented): where and when it is set, what it is about (no spoilers!), one character, and what you thought of it. Then your colleague says about their weekend: “Oh, it was brilliant. It rained for two days and my flight was delayed six hours.” React, and explain what they really mean.",
        promptFr: "Un(e) collègue britannique te demande : « Seen anything good lately? » (tu as vu quelque chose de bien récemment ?). Parle-lui d'un film, d'une série ou d'un livre que tu as aimé (réel ou inventé) : où et quand l'histoire se déroule, de quoi ça parle (sans spoiler !), un personnage, et ce que tu en as pensé. Puis ton/ta collègue dit à propos de son week-end : « Oh, it was brilliant. It rained for two days and my flight was delayed six hours. » Réagis, et explique ce qu'il/elle veut vraiment dire.",
        minWords: 60, targetSeconds: 90,
        rubric: "Total 15 points. Task achievement (4 pts): setting, short plot summary without spoilers, one character and a personal opinion (3 pts); a reaction to the colleague's sarcastic comment that shows it was NOT literally brilliant (e.g. \"Oh no, you're being sarcastic, aren't you? That sounds awful!\") — 1 pt. Grammar & verb forms (4 pts): plot in the Present Simple, own experience in the past (I watched / I've seen), at least one correct relative clause (who / which / where), recommend + -ing or worth + -ing; B1 accuracy. Vocabulary (4 pts): at least four words from the lesson (plot, character, cast, twist, spoiler, set in, based on, gripping, moving, hilarious, overrated, far-fetched, sarcastic, irony, understatement, binge-watch, subtitles). Fluency and pronunciation (3 pts): judged from the transcript (about 90 seconds ≈ 120-200 words, natural and connected sentences; recognition errors suggesting mispronounced words lower this score, e.g. hilarious, character; mention the words to practise).",
        reference: "Example: \"Yes! I've just binge-watched a series called Rainy Tuesdays. It's set in a small seaside town and it follows a family who run a hotel where nobody ever stays. The father is a man who describes every disaster as a slight inconvenience — it's hilarious. The plot is simple, but the characters are so well written. There's a great twist at the end, but no spoilers! I'd definitely recommend watching it with subtitles. … Oh no, brilliant? You're being sarcastic, aren't you? Two days of rain and a six-hour delay — that sounds awful! So what you really mean is that it was a terrible weekend.\""
      }
    ]
  };

  E[38] = {
    code: "B1.12",
    title: "Level test: B1.12 – B1 Real-Life Mission",
    titleFr: "Contrôle de niveau : B1.12 – Mission finale du B1",
    objective: "Pass the final B1 test and move on to B2: live a whole day in English — survival English, tenses and verb forms from the whole of B1, register, reading, listening, writing and speaking.",
    objectiveFr: "Réussir le grand contrôle de fin de B1 et passer au B2 : vivre une journée entière en anglais — anglais de survie, temps et formes verbales de tout le B1, registre, compréhension écrite et orale, expression écrite et orale.",
    sections: [
      // ---------------------------------------------------------------- I
      {
        id: "vocab", num: "I", title: "Vocabulary – A Day in English", titleFr: "Vocabulaire – une journée en anglais",
        points: 12, skill: "vo", type: "fill",
        instructions: "Complete each sentence with a word or expression from the list. Change the form if necessary (verb tense, -ing…). Some words are not used.",
        instructionsFr: "Complète chaque phrase avec un mot ou une expression de la liste. Change la forme si nécessaire (temps du verbe, -ing…). Certains mots ne sont pas utilisés.",
        bank: ["oversleep", "commute", "mix-up", "double-check", "follow up", "update", "in charge of", "unwind", "overall", "get by", "cope", "catch up", "handle", "look back"],
        items: [
          { text: "My alarm didn't go off, so I ___ and arrived at work at ten.",
            blanks: [["overslept"]],
            why: "« to oversleep » = ne pas se réveiller à temps. Verbe irrégulier : oversleep → overslept → overslept." },
          { text: "My ___ takes almost an hour, so I listen to podcasts on the train.",
            blanks: [["commute"]],
            why: "« commute » = le trajet domicile-travail (nom). « My commute takes an hour » : pas besoin de « the way to work »." },
          { text: "There's been a ___ with your booking: we've given your room to someone else by mistake.",
            blanks: [["mix-up", "mixup"]],
            why: "« a mix-up » = une confusion, une erreur d'organisation. Formule typique : « There's been a mix-up with… »." },
          { text: "Could you ___ the address before you send the parcel? I'm not sure it's correct.",
            blanks: [["double-check", "double check"]],
            why: "« to double-check » = revérifier, par prudence. Plus naturel que « verify again »." },
          { text: "Thanks for the meeting. I'll ___ with an email tomorrow morning.",
            blanks: [["follow up"]],
            why: "« to follow up (with an email) » = faire un suivi, relancer. Après « will », base verbale." },
          { text: "Sophie is ___ the new project, so ask her if you have any questions.",
            blanks: [["in charge of"]],
            why: "« to be in charge of » = être responsable de. Suivi d'un nom ou d'un verbe en -ing." },
          { text: "After a stressful day, I usually go for a walk to ___.",
            blanks: [["unwind"]],
            why: "« to unwind » = décompresser. Après « to », base verbale (passé irrégulier : unwound)." },
          { text: "I haven't seen Jess for months. We're meeting on Saturday to ___ with each other.",
            blanks: [["catch up"]],
            why: "« to catch up with someone » = prendre des nouvelles de quelqu'un. « catch up ON » s'emploie pour une tâche en retard." },
          { text: "My English isn't perfect, but it's good enough to ___ when I travel.",
            blanks: [["get by"]],
            why: "« to get by » = se débrouiller, s'en sortir avec ce qu'on a. C'est l'esprit même du B1." },
          { text: "The customer was really angry, but Tom ___ the situation very calmly.",
            blanks: [["handled"]],
            why: "« to handle » = gérer, sans préposition (jamais « handle with »). « cope » demanderait « coped WITH »." },
          { text: "___, it was a difficult week, but I learnt a lot.",
            blanks: [["Overall"]],
            why: "« Overall » = dans l'ensemble : on l'emploie pour faire un bilan, en début de phrase." },
          { text: "___ on it now, I think moving abroad was the best decision of my life.",
            blanks: [["Looking back"]],
            why: "« Looking back on it » = avec le recul. « to look back on » + souvenir ; ici participe en -ing en début de phrase." }
        ]
      },
      // --------------------------------------------------------------- II
      {
        id: "verbs", num: "II", title: "Verb Forms – The Whole B1 Toolbox", titleFr: "Conjugaison – toute la boîte à outils du B1",
        points: 15, skill: "cj", type: "fill",
        instructions: "Put the verbs in brackets into the correct form. Look for the signals (since, while, by the time, tonight…). Type only the verb form (with its auxiliary if needed).",
        instructionsFr: "Mets les verbes entre parenthèses à la forme qui convient. Repère les signaux (since, while, by the time, tonight…). Tape seulement la forme verbale (avec son auxiliaire si besoin).",
        items: [
          { text: "I ___ (work) for this company since 2021, and I still enjoy it.",
            blanks: [["have worked", "have been working"]],
            why: "« since » + situation toujours vraie → Present Perfect (ou Present Perfect Continuous). Jamais le présent simple comme en français (« je travaille depuis »)." },
          { text: "Yesterday I ___ (miss) my train, so I ___ (take) a taxi.",
            blanks: [["missed"], ["took"]],
            why: "Actions terminées à un moment passé précis (yesterday) → Past Simple. « take » est irrégulier : took." },
          { text: "I ___ (wait) for the bus when my manager called me.",
            blanks: [["was waiting"]],
            why: "Action longue en cours (arrière-plan) interrompue par une action courte → Past Continuous + Past Simple (rappel B1.2)." },
          { text: "By the time I arrived at the station, the last train ___ (already / leave).",
            blanks: [["had already left"]],
            why: "« By the time » + action antérieure à un autre moment du passé → Past Perfect : had + participe passé (leave → left)." },
          { text: "It turned out that the meeting ___ (cancel) the day before.",
            blanks: [["had been cancelled", "had been canceled"]],
            why: "Action antérieure (Past Perfect) ET subie par le sujet (passif) : had been + participe passé." },
          { text: "I ___ (meet) Jess at the café at seven tonight — we booked a table last week.",
            blanks: [["am meeting"]],
            why: "Projet déjà organisé (réservation faite) → Present Continuous à valeur de futur (rappel B1.6)." },
          { text: "— The printer isn't working. — Don't worry, I ___ (call) the technician right now.",
            blanks: [["will call"]],
            why: "Décision prise sur le moment, en réaction → « will » + base verbale. « going to » annoncerait une intention déjà prévue." },
          { text: "When I was a student, I ___ (hate) speaking English on the phone, but now I love it.",
            blanks: [["used to hate", "hated"]],
            why: "Situation passée qui n'est plus vraie → « used to » + base verbale (le Past Simple est aussi correct)." },
          { text: "If the train ___ (be) late again tomorrow, I ___ (work) from home.",
            blanks: [["is"], ["will work"]],
            why: "Premier conditionnel : If + présent simple, will + base verbale. Jamais « will » juste après « if »." },
          { text: "I'm not used to ___ (get) up so early, but I'm slowly getting used to it.",
            blanks: [["getting"]],
            why: "« be used to » + verbe en -ing (to est ici une préposition) = être habitué(e) à. À ne pas confondre avec « used to + base verbale » (rappel B1.1)." }
        ]
      },
      // -------------------------------------------------------------- III
      {
        id: "grammar", num: "III", title: "Grammar – Getting Things Done in English", titleFr: "Grammaire – se débrouiller en anglais",
        points: 10, skill: "gr", type: "fill",
        instructions: "Complete each sentence with the missing word(s). Type only the missing words.",
        instructionsFr: "Complète chaque phrase avec le ou les mots manquants. Tape seulement les mots manquants.",
        items: [
          { text: "Excuse me, could you tell me where the nearest pharmacy ___?",
            blanks: [["is"]],
            why: "Question indirecte : ordre sujet + verbe (« where the pharmacy is »), jamais d'inversion (rappel B1.3)." },
          { text: "You're the new manager, ___ you?",
            blanks: [["aren't"]],
            why: "Phrase affirmative avec « are » → tag négatif « aren't you? » pour vérifier une information (rappel B1.3)." },
          { text: "Would it be ___ to change my seat? I'd prefer a window.",
            blanks: [["possible"]],
            why: "« Would it be possible to…? » = demande très polie, idéale avec un inconnu ou au guichet (rappel B1.4)." },
          { text: "You ___ bring anything to the party, but you can if you want.",
            blanks: [["don't have to", "do not need to", "don't need to", "needn't"]],
            why: "Absence d'obligation → « don't have to / don't need to ». « mustn't » voudrait dire que c'est interdit (rappel B1.5)." },
          { text: "I apologise ___ the delay; it was due to a technical problem.",
            blanks: [["for"]],
            why: "« apologise FOR » + nom ou -ing. En registre formel, plus soutenu que « Sorry for »." },
          { text: "I was really disappointed ___ the hotel: the room was dirty.",
            blanks: [["with", "by"]],
            why: "« disappointed with/by » + une chose ; jamais « disappointed of » (rappel B1.8)." },
          { text: "What if we ___ (move) the meeting to Friday? Everyone would be available then.",
            blanks: [["moved", "move"]],
            why: "« What if we + prétérit » = suggestion prudente pour résoudre un problème (le présent est aussi accepté) (rappel B1.10)." },
          { text: "I don't know the word, but it's the thing you use ___ open a bottle of wine.",
            blanks: [["to"]],
            why: "« the thing you use TO + verbe » : paraphrase de survie quand un mot manque (a corkscrew = un tire-bouchon)." },
          { text: "I'd like to catch up ___ my emails before the meeting.",
            blanks: [["on"]],
            why: "« catch up ON » + une tâche en retard ; « catch up WITH » + une personne." },
          { text: "Sorry, I didn't understand. Could you say that ___, a bit more slowly?",
            blanks: [["again"]],
            why: "« Could you say that again? » est plus naturel que « Can you repeat? » pour faire répéter poliment." }
        ]
      },
      // --------------------------------------------------------------- IV
      {
        id: "writing", num: "IV", title: "Writing – Two Messages, Two Registers", titleFr: "Expression écrite – deux messages, deux registres",
        points: 18, skill: "ee", type: "ai-text",
        instructions: "Write TWO short messages about the same situation: (1) a formal email of 70 to 100 words, (2) an informal message to a friend of 40 to 70 words. Use narrative tenses and at least one future form.",
        instructionsFr: "Écris DEUX courts messages sur la même situation : (1) un e-mail formel de 70 à 100 mots, (2) un message informel à un(e) ami(e) de 40 à 70 mots. Utilise les temps du récit et au moins une forme du futur.",
        prompt: "This morning you overslept, missed your train and arrived late for an important meeting with a client, Mr Evans. When you arrived, it turned out that there had been a mix-up with the meeting room. (1) Write a formal email to Mr Evans: apologise, explain briefly what happened and suggest a new time. (2) Write an informal message to your friend Sam telling them about your crazy morning and suggesting you meet tonight to unwind.",
        promptFr: "Ce matin, tu ne t'es pas réveillé(e), tu as raté ton train et tu es arrivé(e) en retard à une réunion importante avec un client, M. Evans. En arrivant, il s'est avéré qu'il y avait eu une confusion avec la salle de réunion. (1) Écris un e-mail formel à M. Evans : excuse-toi, explique brièvement ce qui s'est passé et propose un nouvel horaire. (2) Écris un message informel à ton ami(e) Sam pour lui raconter ta matinée folle et proposer de vous voir ce soir pour décompresser.",
        minWords: 110, maxWords: 170,
        rubric: "Total 18 points. Task achievement (5 pts): BOTH messages are present; the email apologises, explains what happened and suggests a new time; the message to Sam tells the story and suggests meeting tonight. Register (4 pts): the email is clearly formal (Dear Mr Evans, I apologise for…, Would it be possible to…?, Best regards / Kind regards, no contractions or slang); the message to Sam is clearly informal (Hi / Hey, contractions, short sentences, possibly 'gonna' or 'BTW'); lose 2 pts per message in the wrong register. Grammar & verb forms (5 pts): correct narrative tenses (Past Simple, Past Continuous, Past Perfect, e.g. 'it turned out that there had been a mix-up'), at least one correct future form (will / going to / Present Continuous), correct polite structures; B1 accuracy expected. Vocabulary (2 pts): B1.12 vocabulary used correctly (overslept, running late, mix-up, follow up, unwind, catch up…). Coherence (2 pts): clear order of events, linking words (when, so, because, then, it turned out that). Length: about 110-170 words in total; deduct up to 2 points if under 90 or over 210 words.",
        reference: "Email: \"Dear Mr Evans, I apologise for my late arrival this morning. My train was cancelled and, when I finally arrived, it turned out that the meeting room had been double-booked. Would it be possible to meet on Thursday at 10 a.m.? I will follow up with the updated documents. Kind regards, …\" Message: \"Hey Sam! What a morning! I overslept, missed my train and then there was a mix-up with the room. I'm exhausted. Fancy a drink tonight to unwind? I'll be free at 7. xx\""
      },
      // ---------------------------------------------------------------- V
      {
        id: "reading", num: "V", title: "Reading Comprehension", titleFr: "Compréhension écrite",
        points: 15, skill: "ce", type: "mcq",
        instructions: "Read the text, then choose the right answer for each question.",
        instructionsFr: "Lis le texte, puis choisis la bonne réponse pour chaque question.",
        passage: "Six months ago, Inès left Marseille to work as a nurse in a hospital in Bristol. Before she moved, she had studied English for years, but she had never really used it outside the classroom. Her first week, she says, was \"like running a marathon without any training\".\n\nThe hardest part was not the medical vocabulary, which she had learnt carefully, but the small talk. Patients chatted about the weather, football and television programmes she had never heard of. At first she just smiled and nodded. Then a colleague gave her some advice: \"Nobody expects you to know everything. Just ask.\" From that day on, whenever she didn't understand, Inès said, \"Sorry, what's the word for that?\" or \"Could you say that again?\" To her surprise, most patients were delighted to explain.\n\nThere were difficult moments, of course. One night, a patient asked for something she couldn't identify. She didn't panic: she asked him to describe it, and together they worked out that he wanted a hot-water bottle. \"It's a kind of rubber bag you fill with hot water,\" he explained, laughing.\n\nToday Inès still makes mistakes, and she sometimes switches to a more formal tone than necessary. However, she no longer feels exhausted at the end of each shift. \"I used to translate everything in my head,\" she explains. \"Now I just react. My English isn't perfect, but I can cope with almost any situation — and that's what really matters.\"",
        items: [
          { q: "What was Inès's main difficulty at the beginning?", qFr: "Quelle était la principale difficulté d'Inès au début ?",
            opts: ["Medical vocabulary", "Everyday conversation with patients", "Writing reports in English", "Understanding her manager's instructions"], correct: 1,
            why: "Le texte dit que le plus dur n'était pas le vocabulaire médical « but the small talk » : la conversation courante (météo, foot, télévision)." },
          { q: "What does the comparison with \"running a marathon without any training\" suggest?", qFr: "Que suggère la comparaison avec « courir un marathon sans entraînement » ?",
            opts: ["Her first week was exhausting because she had studied English but never really practised it.", "She was good at sport.", "She had not studied English before moving.", "Her job involved a lot of running."], correct: 0,
            why: "Elle avait étudié l'anglais des années mais « never really used it outside the classroom » : la théorie sans la pratique, d'où l'épuisement." },
          { q: "How did the patients react when Inès asked for help with words?", qFr: "Comment les patients ont-ils réagi quand Inès demandait de l'aide sur un mot ?",
            opts: ["They were annoyed.", "They asked for another nurse.", "Most of them were happy to explain.", "They answered in French."], correct: 2,
            why: "« most patients were delighted to explain » : demander de l'aide ne gêne pas, au contraire (l'anglais de survie fonctionne)." },
          { q: "What does the hot-water bottle story show?", qFr: "Que montre l'histoire de la bouillotte ?",
            opts: ["Inès had forgotten her medical training.", "Describing something can solve a problem when a word is missing.", "The patient was not serious.", "Hot-water bottles are not used in British hospitals."], correct: 1,
            why: "Elle ne connaissait pas le mot, mais grâce à la description (« It's a kind of rubber bag… ») ils ont trouvé ensemble : c'est la stratégie de paraphrase." },
          { q: "Which sentence best describes Inès today?", qFr: "Quelle phrase décrit le mieux Inès aujourd'hui ?",
            opts: ["Her English is perfect and she never makes mistakes.", "She still translates everything in her head.", "She has stopped working in Bristol.", "She still makes some mistakes, but she can function in English with confidence."], correct: 3,
            why: "« I used to translate everything… Now I just react » et « My English isn't perfect, but I can cope with almost any situation » : l'autonomie fonctionnelle du B1." }
        ]
      },
      // --------------------------------------------------------------- VI
      {
        id: "listening", num: "VI", title: "Listening Comprehension", titleFr: "Compréhension orale",
        points: 15, skill: "co", type: "mcq",
        instructions: "Listen to each recording from a busy day (you can play it again), then choose the right answer.",
        instructionsFr: "Écoute chaque enregistrement tiré d'une journée chargée (tu peux le réécouter), puis choisis la bonne réponse.",
        items: [
          { audio: "Hi, it's Karen. Sorry, I'm running late — there's been an accident on the motorway and the traffic isn't moving at all. Could you start the meeting without me? I'll join you on the video call as soon as I can.",
            q: "What does Karen ask the listener to do?", qFr: "Que demande Karen à la personne qui écoute ?",
            opts: ["Cancel the meeting", "Start the meeting without her", "Call her back immediately", "Come and pick her up"], correct: 1,
            why: "« Could you start the meeting without me? » ; elle rejoindra la visio plus tard." },
          { audio: [{ who: "A", text: "Good afternoon. I'm afraid there's been a mix-up with your table. We've given it to another party by mistake." }, { who: "B", text: "Oh no. We booked it two weeks ago." }, { who: "A", text: "I know, I do apologise. We can seat you on the terrace in ten minutes, and your desserts will be on the house." }],
            q: "What does the restaurant offer?", qFr: "Que propose le restaurant ?",
            opts: ["A table on the terrace and free desserts", "A full refund", "A table at another restaurant", "A discount on their next visit"], correct: 0,
            why: "« seat you on the terrace in ten minutes » + « your desserts will be on the house » (= offerts par la maison)." },
          { audio: [{ who: "A", text: "Excuse me, do you sell… oh, what's the word… it's a kind of small cable you use to charge your phone in the car? I'm driving to Scotland tomorrow and my battery never lasts." }, { who: "B", text: "Ah, you mean a car charger! Yes, they're just behind you, next to the batteries. The cheaper ones work fine too." }],
            q: "What strategy does the customer use?", qFr: "Quelle stratégie utilise le client ?",
            opts: ["He points at the product.", "He asks to speak to the manager.", "He spells the word.", "He describes the object because he can't remember the word."], correct: 3,
            why: "« what's the word… it's a kind of… you use to… » : il décrit l'objet au lieu de s'arrêter — l'anglais de survie." },
          { audio: [{ who: "A", text: "Did you manage to see the flat on Green Street?" }, { who: "B", text: "Yes, I went this morning. Well… the kitchen is tiny, the bedroom has no window, the neighbours were shouting the whole time and it's twice our budget. Apart from that, it's perfect." }, { who: "A", text: "Right. So we keep looking, then?" }],
            q: "What does B really think of the flat?", qFr: "Que pense vraiment B de l'appartement ?",
            opts: ["It's perfect.", "It's a bit small but fine.", "It's not suitable at all; B is being ironic.", "B hasn't decided yet."], correct: 2,
            why: "Tous les défauts cités contredisent « it's perfect » : c'est de l'ironie (sens littéral ≠ sens voulu, rappel B1.11)." },
          { audio: "So, how was my day? Well, it started badly, to be honest. But in the afternoon I sorted out the problem with the supplier, and this evening I caught up with an old friend. Overall, I'd say it was a pretty good day.",
            q: "How does the speaker sum up the day?", qFr: "Comment la personne résume-t-elle sa journée ?",
            opts: ["It was bad from start to finish.", "It started badly but was quite good overall.", "It was boring.", "She didn't see anyone."], correct: 1,
            why: "« it started badly » puis « Overall, I'd say it was a pretty good day » : « overall » introduit le bilan global." }
        ]
      },
      // -------------------------------------------------------------- VII
      {
        id: "speaking", num: "VII", title: "Speaking – Tell Me About Your Day", titleFr: "Expression orale – raconte-moi ta journée",
        points: 15, skill: "eo", type: "ai-oral",
        instructions: "Press the microphone and speak for about two minutes. You can try again, or add to your answer. If the microphone doesn't work, type what you would say.",
        instructionsFr: "Appuie sur le micro et parle environ deux minutes. Tu peux recommencer, ou compléter ta réponse. Si le micro ne fonctionne pas, écris ce que tu dirais.",
        prompt: "An English-speaking friend calls you in the evening and asks: \"So, how was your day?\" Tell them about a day (real or invented) when something unexpected happened: say what happened, how you handled it and how you felt. Then give your opinion: is it better to plan everything, or to stay flexible? Give one example. Finish by saying what you are going to do this weekend.",
        promptFr: "Un(e) ami(e) anglophone t'appelle le soir et te demande : « Alors, ta journée ? » Raconte une journée (réelle ou inventée) où un imprévu s'est produit : ce qui s'est passé, comment tu l'as géré et ce que tu as ressenti. Donne ensuite ton avis : vaut-il mieux tout prévoir ou rester flexible ? Donne un exemple. Termine en disant ce que tu vas faire ce week-end.",
        minWords: 100, targetSeconds: 120,
        rubric: "Total 15 points. Task (4 pts): an account of an unexpected event, how it was handled and feelings; an opinion with one example; a plan for the weekend. Grammar & verb forms (4 pts): correct narrative tenses (Past Simple, Past Continuous, Past Perfect), a correct future form, opinion structures (I think…, In my view…, As far as I'm concerned…); B1 accuracy. Vocabulary (3 pts): B1 range — B1.12 words (overslept, running late, mix-up, handle, cope with, unwind, overall, it turned out that…) and precise emotion words (frustrated, relieved, delighted…) rather than only good/bad. Fluency and pronunciation (4 pts): judged from the transcript (about 2 minutes ≈ 180-260 words, natural flow, self-correction or paraphrase instead of stopping is a strength; recognition errors suggesting mispronounced words lower this score — mention them).",
        reference: "Example: \"It was a bit of a crazy day, actually. I overslept, so I was running late, and when I got to work it turned out that my meeting had been moved. I was quite frustrated, but I stayed calm and handled it. In my view, it's better to stay flexible, because… For example… This weekend I'm going to visit my sister / I'm meeting friends on Saturday.\""
      }
    ]
  };

  // =========================================================================
    // GRAND CONTRÔLE B1 (leçon 39) — passage B1 → B2. Examen global qui reprend
    // tout le B1 (B1.1 à B1.12). Sujet de rattrapage (secondChance), plus guidé
    // et plus accessible, proposé automatiquement en cas d'échec.
    // =========================================================================
    E[39] = {
      code: "GC-B1",
      label: "Grand Contrôle B1",
      standalone: true,
      title: "Final B1 Exam – From B1 to B2",
      titleFr: "Grand Contrôle B1 – passer du B1 au B2",
      objective: "Prove that you can function in English at B1 level before moving on to B2: vocabulary from all twelve B1 units, all the B1 verb forms, grammar, register, reading, listening, writing and speaking.",
      objectiveFr: "Prouver que tu te débrouilles en anglais au niveau B1 avant de passer au B2 : le vocabulaire des douze paliers B1, tous les temps du B1, la grammaire, le registre, la compréhension écrite et orale, l'expression écrite et orale.",
      sections: [
        // ---------------------------------------------------------------- I
        {
          id: "vocab", num: "I", title: "Vocabulary – The Whole of B1", titleFr: "Vocabulaire – tout le B1",
          points: 10, skill: "vo", type: "fill",
          instructions: "Complete each sentence with a word from the list. Each word is used once; there are two extra words.",
          instructionsFr: "Complète chaque phrase avec un mot de la liste. Chaque mot ne sert qu'une fois ; il y a deux mots en trop.",
          bank: ["refund", "deadline", "boarding", "point", "fed", "relieved", "drawback", "twist", "double-check", "used", "gripping", "agenda"],
          items: [
            { text: "I'm not ___ to working at night yet; I still feel tired all the time. (B1.1)",
              blanks: [["used"]],
              why: "« be used to + -ing / nom » = être habitué à. À ne pas confondre avec « used to + base verbale » (habitude passée)." },
            { text: "The shoes were too small, so I took them back and asked for a ___. (B1.4)",
              blanks: [["refund"]],
              why: "« a refund » = un remboursement. « to exchange » = échanger contre un autre article." },
            { text: "We have to finish the report by Friday: the ___ can't be changed. (B1.5)",
              blanks: [["deadline"]],
              why: "« a deadline » = une date limite. On dit « to meet a deadline » = respecter une échéance." },
            { text: "You'll need your ___ pass to get through security and onto the plane. (B1.6)",
              blanks: [["boarding"]],
              why: "« a boarding pass » = une carte d'embarquement (to board = embarquer)." },
            { text: "I see your ___, but I'm not sure I agree with you. (B1.7)",
              blanks: [["point"]],
              why: "« I see your point, but… » = je comprends ton argument, mais… : désaccord poli." },
            { text: "I'm ___ up with this noise — it's been going on for three hours! (B1.8)",
              blanks: [["fed"]],
              why: "« to be fed up (with) » = en avoir marre (de) : agacement qui dure." },
            { text: "When the doctor said it was nothing serious, I felt really ___. (B1.8)",
              blanks: [["relieved"]],
              why: "« relieved » = soulagé(e) : la peur ou l'inquiétude disparaît." },
            { text: "The flat is cheap, but the main ___ is that it's far from the station. (B1.10)",
              blanks: [["drawback"]],
              why: "« a drawback » = un inconvénient ; son contraire est « an advantage »." },
            { text: "I didn't see the ___ coming: the hero was actually the villain's brother! (B1.11)",
              blanks: [["twist"]],
              why: "« a (plot) twist » = un rebondissement inattendu dans une histoire." },
            { text: "Before you send the email, could you ___ the time of the meeting? (B1.12)",
              blanks: [["double-check", "double check"]],
              why: "« to double-check » = revérifier, contrôler une seconde fois pour éviter une erreur." }
          ]
        },
        // --------------------------------------------------------------- II
        {
          id: "verbs", num: "II", title: "Verb Forms – Choosing the Right Tense", titleFr: "Formes verbales – choisir le bon temps",
          points: 15, skill: "cj", type: "fill",
          instructions: "Put the verbs in brackets into the correct form. Think about the time, the situation and the signal words. Type only the missing words.",
          instructionsFr: "Mets les verbes entre parenthèses à la forme qui convient. Pense au moment, à la situation et aux mots-repères. Tape seulement les mots manquants.",
          items: [
            { text: "I ___ (live) in Lyon since 2019, but I ___ (grow up) in Lille.",
              blanks: [["have lived", "have been living"], ["grew up"]],
              why: "« since 2019 » + situation toujours vraie → Present Perfect (have lived / have been living). Enfance terminée → Past Simple : grew up (irrégulier)." },
            { text: "___ you ever ___ (be) to Scotland? — Yes, I ___ (go) there last summer.",
              blanks: [["have"], ["been"], ["went"]],
              why: "« ever » = expérience de vie → Present Perfect (Have you been). « last summer » = moment passé précis → Past Simple (went)." },
            { text: "When I was a child, I ___ (hate) vegetables, but now I love them.",
              blanks: [["used to hate", "hated"]],
              why: "Habitude/état passé qui n'est plus vrai : « used to + base verbale » (ou Past Simple). « I'm used to… » voudrait dire « je suis habitué à »." },
            { text: "I ___ (walk) to work when I ___ (see) the accident.",
              blanks: [["was walking"], ["saw"]],
              why: "Action en cours (décor) → Past Continuous : was walking ; action courte qui l'interrompt → Past Simple : saw." },
            { text: "By the time we arrived at the cinema, the film ___ already ___ (start).",
              blanks: [["had"], ["started"]],
              why: "« By the time » + action antérieure à une autre action passée → Past Perfect : had already started." },
            { text: "Look at those dark clouds! It ___ (rain).",
              blanks: [["is going to rain", "'s going to rain"]],
              why: "Prédiction fondée sur un indice présent (les nuages) → « be going to »." },
            { text: "— The phone's ringing. — Don't worry, I ___ (get) it!",
              blanks: [["will get", "'ll get"]],
              why: "Décision prise sur le moment → « will » (I'll get it)." },
            { text: "If I miss the last bus, I ___ (take) a taxi.",
              blanks: [["will take", "'ll take"]],
              why: "Premier conditionnel (situation réelle, possible) : If + présent, will + base verbale." },
            { text: "If I ___ (have) more time, I ___ (learn) to play the piano.",
              blanks: [["had"], ["would learn", "'d learn"]],
              why: "Deuxième conditionnel (situation imaginaire/peu probable) : If + Past Simple, would + base verbale." },
            { text: "My flight ___ (cancel) this morning, so I'm still at the airport.",
              blanks: [["has been cancelled", "was cancelled"]],
              why: "Passif (on ne dit pas qui a annulé) : be + participe passé. Lien avec le présent (je suis encore là) → has been cancelled ; « was cancelled » est aussi accepté avec « this morning »." }
          ]
        },
        // -------------------------------------------------------------- III
        {
          id: "grammar", num: "III", title: "Grammar – Structures of B1", titleFr: "Grammaire – les structures du B1",
          points: 10, skill: "gr", type: "fill",
          instructions: "Complete each sentence with the missing word(s). The clue in brackets tells you which structure to use.",
          instructionsFr: "Complète chaque phrase avec le ou les mots manquants. L'indice entre parenthèses t'indique la structure à utiliser.",
          items: [
            { text: "Could you tell me where the station ___? (indirect question)",
              blanks: [["is"]],
              why: "Question indirecte : pas d'inversion, sujet + verbe à la fin → « where the station is »." },
            { text: "You're coming to the party, ___ you? (question tag)",
              blanks: [["aren't"]],
              why: "Phrase affirmative avec « are » → tag négatif : aren't you?" },
            { text: "Would you mind ___ (open) the window, please? (polite request)",
              blanks: [["opening"]],
              why: "« Would you mind + -ing » : demande très polie. Toujours le gérondif après « mind »." },
            { text: "You ___ smoke in here — it's forbidden. (prohibition)",
              blanks: [["mustn't", "must not", "can't", "cannot"]],
              why: "Interdiction → mustn't (ou can't). « don't have to » = ce n'est pas nécessaire, ce n'est pas une interdiction." },
            { text: "She isn't answering. She ___ be in a meeting. (possibility)",
              blanks: [["might", "may", "could", "must"]],
              why: "Probabilité/déduction : might / may / could (possible) ou must (quasi certain)." },
            { text: "This hotel is much ___ (comfortable) than the one we stayed in last year. (comparative)",
              blanks: [["more comfortable"]],
              why: "Adjectif long → more + adjectif + than : more comfortable than." },
            { text: "I'm really looking forward ___ (see) you next week. (verb pattern)",
              blanks: [["to seeing"]],
              why: "« look forward to + -ing » : ici « to » est une préposition, donc le verbe prend -ing (to seeing, jamais « to see »)." },
            { text: "We decided ___ (stay) at home because of the storm. (verb pattern)",
              blanks: [["to stay"]],
              why: "« decide + to + base verbale » (comme want, hope, manage), à la différence de « enjoy / avoid + -ing »." },
            { text: "I'm very disappointed ___ the result. (adjective + preposition)",
              blanks: [["with", "by", "in"]],
              why: "« disappointed with / by + résultat » (« in » pour une personne) : chaque adjectif a sa préposition." },
            { text: "It's the woman ___ helped me when I lost my bag. (relative pronoun)",
              blanks: [["who", "that"]],
              why: "Pronom relatif sujet pour une personne : who (ou that). « which » est réservé aux choses." }
          ]
        },
        // --------------------------------------------------------------- IV
        {
          id: "register", num: "IV", title: "Register – Formal, Neutral or Informal?", titleFr: "Registre – formel, neutre ou familier ?",
          points: 10, skill: "gr", type: "mcq",
          instructions: "Choose the best answer. Think about who is speaking to whom, and in what situation.",
          instructionsFr: "Choisis la meilleure réponse. Pense à qui parle à qui, et dans quelle situation.",
          items: [
            { q: "You are writing an email to a hotel manager you don't know. Which opening is the most appropriate?", qFr: "Tu écris un e-mail à un directeur d'hôtel que tu ne connais pas. Quelle formule d'ouverture est la plus appropriée ?",
              opts: ["Hey mate,", "Dear Sir or Madam,", "Hi guys!", "Yo,"], correct: 1,
              why: "Destinataire inconnu, contexte formel → « Dear Sir or Madam ». Les autres sont familières." },
            { q: "What does this text message mean in neutral English? \"BTW gonna be late, dunno when I'll get there.\"", qFr: "Que veut dire ce texto en anglais neutre ? « BTW gonna be late, dunno when I'll get there. »",
              opts: ["By the way, I'm going to be late; I don't know when I'll arrive.", "Before the weekend, I'm going to leave late.", "By the way, I was late; I didn't know where to go.", "Be there on time, I don't know the way."], correct: 0,
              why: "BTW = by the way ; gonna = going to ; dunno = I don't know. Il faut comprendre le familier… et savoir le reformuler." },
            { q: "You need to ask your manager for a day off. Which sentence is the most appropriate?", qFr: "Tu dois demander un jour de congé à ta responsable. Quelle phrase est la plus appropriée ?",
              opts: ["Give me Friday off.", "I wanna take Friday off, OK?", "Would it be possible for me to take Friday off?", "Friday, no work for me, TBH."], correct: 2,
              why: "« Would it be possible…? » : demande polie et professionnelle (B1.4/B1.5). L'impératif est trop direct ; « wanna », « TBH » sont trop familiers." },
            { q: "Which sentence would be too informal in a formal complaint letter?", qFr: "Quelle phrase serait trop familière dans une lettre de réclamation formelle ?",
              opts: ["I am writing to complain about the service I received.", "The product was damaged on arrival.", "I would be grateful if you could refund me.", "Tbh the stuff you sent was kinda rubbish."], correct: 3,
              why: "« Tbh », « stuff », « kinda », « rubbish » : registre familier, à éviter dans un courrier formel. Les trois autres phrases sont correctes et neutres/formelles." },
            { q: "A friend says: \"Great. Just great. The train's cancelled again.\" What does your friend really mean?", qFr: "Un ami dit : « Great. Just great. The train's cancelled again. » Que veut-il vraiment dire ?",
              opts: ["He is happy the train is cancelled.", "He is annoyed: \"great\" is sarcastic.", "He thinks the train is great.", "He wants to take the train again."], correct: 1,
              why: "Sens littéral ≠ sens voulu (B1.11) : « Great. Just great. » avec un ton plat = sarcasme, il est agacé." }
          ]
        },
        // ---------------------------------------------------------------- V
        {
          id: "reading", num: "V", title: "Reading Comprehension", titleFr: "Compréhension écrite",
          points: 15, skill: "ce", type: "mcq",
          instructions: "Read the blog post, then choose the right answer for each question.",
          instructionsFr: "Lis l'article de blog, puis choisis la bonne réponse pour chaque question.",
          passage: "My first month in Manchester\n\nWhen I moved from Nantes to Manchester for a new job last month, I thought my English was good enough. I had studied it for years at school, I used to watch series with subtitles, and I had passed all my exams. Within a week, I realised that real life was a different story.\n\nOn my first morning, the woman at the bakery said something that sounded like \"You alright, love?\". I thought she was asking if I was ill, so I explained that I felt fine, thank you. She just smiled. Later, a colleague told me it simply means \"hello\" in the north of England.\n\nWork was even more challenging. In meetings, my colleagues spoke fast, interrupted each other and made jokes I didn't get. At first, I stayed silent because I was afraid of making mistakes. Then my line manager, Priya, gave me some advice that changed everything: \"Nobody expects you to be perfect. If you don't understand, just say so.\" Since then, I have asked people to repeat, to slow down or to explain what they mean — and, to my surprise, nobody has been annoyed.\n\nThe biggest problem happened in my second week. My bank card was blocked while I was paying for my shopping, and I had no cash. I felt terribly embarrassed, but I managed to explain the situation, called my bank and sorted it out in twenty minutes — entirely in English.\n\nLooking back, I don't think my English has improved dramatically in a month. What has changed is my attitude. I no longer wait until I have the perfect sentence before I speak. If I had known this before, I would have enjoyed my first week much more.",
          items: [
            { q: "What did the writer think before arriving in Manchester?", qFr: "Que pensait l'autrice avant d'arriver à Manchester ?",
              opts: ["That her English was not good enough for the job.", "That her English was sufficient.", "That people in Manchester would speak slowly.", "That she would need subtitles."], correct: 1,
              why: "« I thought my English was good enough » : elle pensait que son niveau suffisait." },
            { q: "Why did the woman at the bakery smile?", qFr: "Pourquoi la boulangère a-t-elle souri ?",
              opts: ["Because the writer had misunderstood a simple greeting.", "Because the writer looked ill.", "Because the writer spoke perfect English.", "Because she knew the writer."], correct: 0,
              why: "« You alright, love? » = simple « bonjour » dans le nord de l'Angleterre ; l'autrice a répondu comme à une question sur sa santé." },
            { q: "What was Priya's advice?", qFr: "Quel était le conseil de Priya ?",
              opts: ["To avoid speaking in meetings.", "To take English lessons.", "To admit it when she doesn't understand.", "To make more jokes."], correct: 2,
              why: "« If you don't understand, just say so » = dis-le simplement quand tu ne comprends pas." },
            { q: "What does the bank card episode show?", qFr: "Que montre l'épisode de la carte bancaire ?",
              opts: ["That the writer's bank was not reliable.", "That she was able to solve a real problem in English.", "That she always carries cash.", "That she needed a colleague to help her."], correct: 1,
              why: "« I managed to explain the situation… and sorted it out… entirely in English » : elle a résolu le problème seule, en anglais." },
            { q: "According to the last paragraph, what has changed most?", qFr: "D'après le dernier paragraphe, qu'est-ce qui a le plus changé ?",
              opts: ["Her level of grammar.", "Her accent.", "Her vocabulary.", "Her attitude to speaking."], correct: 3,
              why: "« I don't think my English has improved dramatically… What has changed is my attitude » : elle n'attend plus la phrase parfaite pour parler." }
          ]
        },
        // --------------------------------------------------------------- VI
        {
          id: "listening", num: "VI", title: "Listening Comprehension", titleFr: "Compréhension orale",
          points: 10, skill: "co", type: "mcq",
          instructions: "Listen to each recording (you can play it again), then choose the right answer.",
          instructionsFr: "Écoute chaque enregistrement (tu peux le réécouter), puis choisis la bonne réponse.",
          items: [
            { audio: [{ who: "A", text: "Good afternoon. I'm afraid your flight to Dublin has been cancelled because of the fog." }, { who: "B", text: "Oh no. Could you rebook me on the next one, please?" }, { who: "A", text: "Of course. There's one at eight tomorrow morning, and we'll give you a hotel voucher for tonight." }],
              q: "What will the passenger do tonight?", qFr: "Que va faire le passager ce soir ?",
              opts: ["Fly to Dublin at eight.", "Stay in a hotel paid by the airline.", "Sleep at the airport.", "Take a train to Dublin."], correct: 1,
              why: "Vol annulé → nouveau vol demain à 8 h et « a hotel voucher for tonight » : une nuit d'hôtel offerte." },
            { audio: [{ who: "A", text: "So, how was your first week in the new job?" }, { who: "B", text: "Honestly? I was really nervous on Monday, but everyone's been so friendly. I'm actually enjoying it now." }],
              q: "How does B feel now?", qFr: "Comment B se sent-il maintenant ?",
              opts: ["Still very nervous.", "Bored.", "Positive about the job.", "Disappointed with colleagues."], correct: 2,
              why: "« I was really nervous on Monday » (avant) → « I'm actually enjoying it now » (maintenant) : l'émotion a changé." },
            { audio: "Right, just a quick update before we wrap up. The client meeting has been moved to Thursday, so the deadline for the presentation is now Wednesday at five. Tom, could you follow up with the designers? And please don't forget to send me your slides by Tuesday evening.",
              q: "When is the presentation deadline?", qFr: "Quelle est la date limite pour la présentation ?",
              opts: ["Tuesday evening.", "Wednesday at five.", "Thursday.", "Friday at five."], correct: 1,
              why: "« the deadline for the presentation is now Wednesday at five ». Mardi soir = envoi des slides ; jeudi = réunion client." },
            { audio: [{ who: "A", text: "The restaurant's fully booked. What if we tried the Italian place round the corner?" }, { who: "B", text: "Hmm, it's a bit expensive. Why don't we just get a takeaway and eat at home?" }, { who: "A", text: "That makes sense. Let's do that." }],
              q: "What do they decide to do?", qFr: "Que décident-ils de faire ?",
              opts: ["Eat at the Italian restaurant.", "Wait for a table.", "Order food and eat at home.", "Cook dinner together."], correct: 2,
              why: "B propose « get a takeaway and eat at home », A accepte : « That makes sense. Let's do that. »" },
            { audio: [{ who: "A", text: "I think working from home is better for everyone." }, { who: "B", text: "I see your point, but I'm not so sure. Some people feel really isolated at home." }],
              q: "What is B's opinion?", qFr: "Quelle est l'opinion de B ?",
              opts: ["B totally agrees with A.", "B politely disagrees and gives a reason.", "B has no opinion.", "B thinks working from home is better."], correct: 1,
              why: "« I see your point, but I'm not so sure » = désaccord poli, suivi d'un argument (isolement)." }
          ]
        },
        // -------------------------------------------------------------- VII
        {
          id: "writing", num: "VII", title: "Writing – An Email About an Unexpected Problem", titleFr: "Expression écrite – un e-mail sur un problème imprévu",
          points: 15, skill: "ee", type: "ai-text",
          instructions: "Write an email of 120 to 160 words. Use a neutral or formal register and organise your ideas in paragraphs.",
          instructionsFr: "Rédige un e-mail de 120 à 160 mots. Utilise un registre neutre ou formel et organise tes idées en paragraphes.",
          prompt: "Last weekend you stayed two nights at the Riverside Hotel in York. There was a problem with your room (choose it: noise, cleanliness, broken heating…). Write an email to the hotel manager: tell what happened (use narrative tenses), explain how you felt (precise emotion words), say what you would like the hotel to do, and give your opinion about whether you would come back.",
          promptFr: "Le week-end dernier, tu as passé deux nuits au Riverside Hotel à York. Il y a eu un problème avec ta chambre (choisis-le : bruit, propreté, chauffage en panne…). Écris un e-mail au directeur de l'hôtel : raconte ce qui s'est passé (temps du récit), explique ce que tu as ressenti (mots d'émotion précis), dis ce que tu voudrais que l'hôtel fasse et donne ton avis : reviendrais-tu ?",
          minWords: 120, maxWords: 160,
          rubric: "Total 15 points. This is the final B1 writing task. Task achievement (5 pts): clear purpose; the problem is narrated (what happened, when); feelings are described; a clear request (refund, partial refund, apology, voucher); an opinion about returning. Grammar and verb forms (4 pts): correct narrative tenses (Past Simple, Past Continuous, Past Perfect), polite requests (I would be grateful if…, Could you…?), at least one conditional (If…, I would / will…). Vocabulary and register (3 pts): precise emotion vocabulary (disappointed, frustrated, exhausted, annoyed…) instead of good/bad/sad; neutral-formal register with correct opening and closing (Dear Sir or Madam / Dear Mr…, Yours faithfully / Kind regards); no slang or text abbreviations. Coherence (3 pts): paragraphs and B1 connectors (first of all, however, therefore, in the end). Length: 120-160 words; deduct up to 2 points if under 90 or over 200 words.",
          reference: "Dear Sir or Madam, I am writing about my stay at your hotel from 12 to 14 September (room 214). On the first night, the heating was not working. I called reception twice, but nobody came, and by the time a technician arrived the next morning, I had already spent a cold night in my coat. I was very disappointed, especially because I had booked your hotel for a special occasion, and I felt frustrated that the staff did not seem to care. I would be grateful if you could offer me a partial refund for the first night. To be honest, the location and breakfast were excellent. If the problem is dealt with properly, I will certainly consider coming back. Yours faithfully, …"
        },
        // ------------------------------------------------------------- VIII
        {
          id: "speaking", num: "VIII", title: "Speaking – Tell, Solve and Give Your Opinion", titleFr: "Expression orale – raconter, résoudre et donner son avis",
          points: 15, skill: "eo", type: "ai-oral",
          instructions: "Read the three questions, then press the microphone and answer them in one go, for about ninety seconds. You can try again, or add to your answer. If the microphone doesn't work, type what you would say.",
          instructionsFr: "Lis les trois questions, puis appuie sur le micro et réponds-y d'une traite, pendant environ quatre-vingt-dix secondes. Tu peux recommencer, ou compléter ta réponse. Si le micro ne fonctionne pas, écris ce que tu dirais.",
          prompt: "1. Tell me about an important change in your life: what was your life like before, and what is it like now? 2. Tell me about a time something went wrong (a trip, a day at work…): what happened and how did you solve it? 3. In your opinion, is it better to learn a language at school or by living abroad? Why?",
          promptFr: "1. Parle-moi d'un changement important dans ta vie : comment était ta vie avant, et comment est-elle maintenant ? 2. Raconte une fois où quelque chose s'est mal passé (un voyage, une journée de travail…) : que s'est-il passé et comment as-tu résolu le problème ? 3. À ton avis, vaut-il mieux apprendre une langue à l'école ou en vivant à l'étranger ? Pourquoi ?",
          minWords: 110, targetSeconds: 90,
          rubric: "Total 15 points; give a one-line comment for each criterion. Task achievement (4 pts): the three questions are answered — a before/now comparison (used to, Present Perfect), a structured story with a problem and a solution, and an opinion with a reason and an example. Grammar and verb forms (4 pts): accurate B1 range — Past Simple / Past Continuous / Past Perfect in the story, used to, Present Perfect, a conditional or modal; small self-corrected slips are fine. Vocabulary and interaction strategies (3 pts): varied B1 vocabulary (emotions, travel, work, opinion phrases: From my point of view…, I tend to think…) and survival strategies if a word is missing (It's a kind of…). Fluency and pronunciation (4 pts): judged from the transcript (about ninety seconds ≈ 130-200 words, connectors such as first of all, then, in the end, however; few long hesitations); recognition errors suggesting mispronounced words lower this score — mention them.",
          reference: "Example: \"Well, I used to live in a small village, but three years ago I moved to Paris for work, and I've got used to the noise now… Last year, I was travelling to London when my train was cancelled. I had already booked a hotel, so I was quite stressed, but I asked for a refund and took a coach instead. In the end, I arrived only two hours late… From my point of view, living abroad is better, because you have to use the language every day. For instance, … However, school gives you the basics.\""
        }
      ],

      // =======================================================================
      // SUJET DE RATTRAPAGE — plus accessible et plus guidé (mêmes thèmes)
      // =======================================================================
      secondChance: {
        title: "Final B1 Exam – Second Chance",
        titleFr: "Grand Contrôle B1 – rattrapage",
        objective: "A second, more guided chance to show your B1 level: the same themes with simpler questions, clues for every verb and shorter writing and speaking tasks.",
        objectiveFr: "Une seconde chance, plus guidée, pour montrer ton niveau B1 : les mêmes thèmes avec des questions plus simples, un indice pour chaque verbe et des productions écrites et orales plus courtes.",
        sections: [
          // -------------------------------------------------------------- I
          {
            id: "sc-vocab", num: "I", title: "Vocabulary and Register", titleFr: "Vocabulaire et registre",
            points: 15, skill: "vo", type: "fill",
            instructions: "A. Complete each sentence with a word from the list (each word is used once; there is one extra word). B. Rewrite the informal word in neutral English.",
            instructionsFr: "A. Complète chaque phrase avec un mot de la liste (chaque mot ne sert qu'une fois ; il y a un mot en trop). B. Réécris le mot familier en anglais neutre.",
            bank: ["receipt", "delayed", "colleague", "worried", "agree", "plot", "decision", "ticket"],
            items: [
              { header: { en: "A. Everyday vocabulary", fr: "A. Vocabulaire du quotidien" },
                text: "To return the jacket, you need to show the ___ with the price and the date.",
                blanks: [["receipt"]],
                why: "« a receipt » = un ticket de caisse (le « p » ne se prononce pas)." },
              { text: "Our train is ___ by forty minutes because of a technical problem.",
                blanks: [["delayed"]],
                why: "« delayed » = retardé ; « cancelled » = annulé." },
              { text: "My ___ Sam sits next to me in the office.",
                blanks: [["colleague"]],
                why: "« a colleague » = un(e) collègue de travail." },
              { text: "I'm a bit ___ about the exam tomorrow.",
                blanks: [["worried"]],
                why: "« worried about » = inquiet de : adjectif + préposition « about »." },
              { text: "I ___ with you: it's a very good idea.",
                blanks: [["agree"]],
                why: "« I agree » sans « am » : « I am agree » est un calque du français." },
              { text: "I liked the actors, but the ___ of the film was too complicated.",
                blanks: [["plot"]],
                why: "« the plot » = l'intrigue, l'histoire d'un film ou d'un livre." },
              { text: "We have two options, and we need to make a ___ today.",
                blanks: [["decision"]],
                why: "Collocation : « make a decision » = prendre une décision : la collocation la plus courante (jamais « do a decision »)." },
              { header: { en: "B. Informal → neutral", fr: "B. Familier → neutre" },
                text: "\"I'm gonna call you later.\" → I'm ___ call you later.",
                blanks: [["going to"]],
                why: "« gonna » = going to (forme orale familière)." },
              { text: "\"I dunno.\" → I ___ know.",
                blanks: [["don't", "do not"]],
                why: "« dunno » = I don't know." },
              { text: "\"FYI, the meeting is at 3.\" → For your ___, the meeting is at 3.",
                blanks: [["information"]],
                why: "FYI = for your information (pour info)." }
            ]
          },
          // ------------------------------------------------------------- II
          {
            id: "sc-verbs", num: "II", title: "Verb Forms – Guided", titleFr: "Formes verbales – guidé",
            points: 15, skill: "cj", type: "fill",
            instructions: "Put the verb in brackets into the correct form. The clue after the sentence tells you which tense to use.",
            instructionsFr: "Mets le verbe entre parenthèses à la bonne forme. L'indice après la phrase t'indique le temps à utiliser.",
            items: [
              { text: "She ___ (work) here for five years. [Present Perfect]",
                blanks: [["has worked", "has been working", "'s worked"]],
                why: "« for five years » + toujours vrai → Present Perfect : has worked." },
              { text: "We ___ (visit) Edinburgh last year. [Past Simple]",
                blanks: [["visited"]],
                why: "« last year » = moment passé terminé → Past Simple : visited." },
              { text: "I ___ (cook) dinner when you called. [Past Continuous]",
                blanks: [["was cooking"]],
                why: "Action en cours au moment d'une autre action → was/were + -ing." },
              { text: "When we got to the station, the train ___ (leave). [Past Perfect]",
                blanks: [["had left"]],
                why: "Le train était parti AVANT notre arrivée → had + participe passé : had left." },
              { text: "I ___ (play) tennis every Saturday when I was young, but I don't now. [used to]",
                blanks: [["used to play"]],
                why: "Habitude passée terminée → used to + base verbale." },
              { text: "Next week I ___ (start) a new job — I've already signed the contract. [going to]",
                blanks: [["am going to start", "'m going to start", "am starting", "'m starting"]],
                why: "Projet déjà décidé → be going to (ou présent continu pour un arrangement fixé)." },
              { text: "If it rains tomorrow, we ___ (stay) at home. [first conditional]",
                blanks: [["will stay", "'ll stay"]],
                why: "If + présent, will + base verbale : situation possible." },
              { text: "If I ___ (be) rich, I would travel around the world. [second conditional]",
                blanks: [["were", "was"]],
                why: "Situation imaginaire : If + prétérit (were, ou was à l'oral), would + base verbale." },
              { text: "You ___ (wear) a seatbelt in the car. [obligation: must]",
                blanks: [["must wear"]],
                why: "Obligation → must + base verbale, sans « to »." },
              { text: "The bridge ___ (build) in 1890. [passive, Past Simple]",
                blanks: [["was built"]],
                why: "Passif au passé : was/were + participe passé (build → built)." }
            ]
          },
          // ------------------------------------------------------------ III
          {
            id: "sc-grammar", num: "III", title: "Grammar – Choose the Right Structure", titleFr: "Grammaire – choisir la bonne structure",
            points: 15, skill: "gr", type: "mcq",
            instructions: "Choose the correct option to complete each sentence.",
            instructionsFr: "Choisis la bonne réponse pour compléter chaque phrase.",
            items: [
              { q: "Could you tell me what time ___?", qFr: "Complète : « Could you tell me what time ___? »",
                opts: ["does the shop open", "the shop opens", "opens the shop"], correct: 1,
                why: "Question indirecte : pas d'inversion, pas de « does » → what time the shop opens." },
              { q: "It's a nice day, ___?", qFr: "Complète la question tag : « It's a nice day, ___? »",
                opts: ["isn't it", "is it", "doesn't it"], correct: 0,
                why: "Phrase affirmative avec « is » → tag négatif : isn't it?" },
              { q: "I enjoy ___ to music in the car.", qFr: "Complète : « I enjoy ___ to music in the car. »",
                opts: ["listen", "to listen", "listening"], correct: 2,
                why: "« enjoy + -ing » : I enjoy listening…" },
              { q: "You ___ come if you don't want to — it's optional.", qFr: "Complète : « You ___ come if you don't want to — it's optional. »",
                opts: ["mustn't", "don't have to", "have to"], correct: 1,
                why: "« don't have to » = pas obligé. « mustn't » = interdit." },
              { q: "My new flat is ___ than my old one.", qFr: "Complète : « My new flat is ___ than my old one. »",
                opts: ["more big", "bigger", "biggest"], correct: 1,
                why: "Adjectif court → -er + than : bigger (on double le g)." }
            ]
          },
          // ------------------------------------------------------------- IV
          {
            id: "sc-reading", num: "IV", title: "Reading Comprehension", titleFr: "Compréhension écrite",
            points: 15, skill: "ce", type: "mcq",
            instructions: "Read the message, then choose the right answer for each question.",
            instructionsFr: "Lis le message, puis choisis la bonne réponse pour chaque question.",
            passage: "Hi Emma,\n\nI hope you're well! I'm writing to tell you about my trip to London last weekend. It didn't start very well. When I arrived at the airport, I realised I had left my phone charger at home. Then my flight was delayed by two hours, so I missed the dinner with my cousins.\n\nBut the rest of the weekend was brilliant. On Saturday, we visited the Science Museum, which is free, and in the evening we saw a musical. I didn't understand all the jokes, but the songs were amazing. On Sunday, it was raining, so we stayed at my cousin's flat and watched films with subtitles. I think my English has improved a lot this year: I didn't need to translate everything in my head!\n\nIf you go to London one day, I'll give you the name of a great café near the museum.\n\nSpeak soon,\nLéa",
            items: [
              { q: "What did Léa forget?", qFr: "Qu'est-ce que Léa a oublié ?",
                opts: ["Her passport.", "Her phone charger.", "Her ticket.", "Her phone."], correct: 1,
                why: "« I had left my phone charger at home »." },
              { q: "Why did she miss the dinner?", qFr: "Pourquoi a-t-elle manqué le dîner ?",
                opts: ["Because her flight was late.", "Because she was ill.", "Because her cousins cancelled it.", "Because she got lost."], correct: 0,
                why: "« my flight was delayed by two hours, so I missed the dinner »." },
              { q: "What does Léa say about the musical?", qFr: "Que dit Léa de la comédie musicale ?",
                opts: ["It was boring.", "She understood every joke.", "She loved the songs but missed some jokes.", "It was too expensive."], correct: 2,
                why: "« I didn't understand all the jokes, but the songs were amazing »." },
              { q: "What did they do on Sunday?", qFr: "Qu'ont-ils fait dimanche ?",
                opts: ["They went to the museum.", "They watched films at home.", "They went shopping.", "They flew back early."], correct: 1,
                why: "« it was raining, so we stayed at my cousin's flat and watched films »." },
              { q: "How does Léa feel about her English?", qFr: "Que pense Léa de son anglais ?",
                opts: ["She thinks it has got better.", "She thinks it is worse than before.", "She still translates everything.", "She doesn't say."], correct: 0,
                why: "« I think my English has improved a lot… I didn't need to translate everything »." }
            ]
          },
          // -------------------------------------------------------------- V
          {
            id: "sc-listening", num: "V", title: "Listening Comprehension", titleFr: "Compréhension orale",
            points: 15, skill: "co", type: "mcq",
            instructions: "Listen to each recording (you can play it again as many times as you like), then choose the right answer.",
            instructionsFr: "Écoute chaque enregistrement (tu peux le réécouter autant de fois que tu veux), puis choisis la bonne réponse.",
            items: [
              { audio: [{ who: "A", text: "Excuse me, is this the train to Oxford?" }, { who: "B", text: "No, sorry. The Oxford train leaves from platform four, in ten minutes." }],
                q: "Where does the Oxford train leave from?", qFr: "D'où part le train pour Oxford ?",
                opts: ["Platform two.", "Platform four.", "Platform ten.", "This platform."], correct: 1,
                why: "« The Oxford train leaves from platform four »." },
              { audio: [{ who: "A", text: "Hello, I ordered a vegetarian pizza, but this one has ham on it." }, { who: "B", text: "Oh, I'm so sorry. I'll bring you a new one straight away." }],
                q: "What is the problem?", qFr: "Quel est le problème ?",
                opts: ["The pizza is cold.", "The pizza is late.", "The customer got the wrong pizza.", "The pizza is too expensive."], correct: 2,
                why: "Elle a commandé une pizza végétarienne mais il y a du jambon : mauvaise commande." },
              { audio: "Hi, it's Mark. Just to let you know, I'm running late — there's a lot of traffic. I'll be there at about half past nine, not nine. Sorry!",
                q: "What time will Mark arrive?", qFr: "À quelle heure Mark va-t-il arriver ?",
                opts: ["At nine.", "At half past eight.", "At about half past nine.", "He isn't coming."], correct: 2,
                why: "« I'll be there at about half past nine, not nine »." },
              { audio: [{ who: "A", text: "How did you feel when you got the job?" }, { who: "B", text: "I was absolutely delighted! I'd waited for that phone call for weeks." }],
                q: "How did B feel?", qFr: "Comment B s'est-il senti ?",
                opts: ["Very happy.", "Nervous.", "Disappointed.", "Angry."], correct: 0,
                why: "« delighted » = ravi, très content." },
              { audio: [{ who: "A", text: "I think social media is bad for teenagers." }, { who: "B", text: "I agree up to a point, but it also helps them stay in touch with friends." }],
                q: "What does B think?", qFr: "Que pense B ?",
                opts: ["B completely agrees.", "B partly agrees and gives another point of view.", "B completely disagrees.", "B has no opinion."], correct: 1,
                why: "« I agree up to a point, but… » = d'accord en partie, avec une nuance." }
            ]
          },
          // ------------------------------------------------------------- VI
          {
            id: "sc-writing", num: "VI", title: "Writing – A Short Message", titleFr: "Expression écrite – un court message",
            points: 10, skill: "ee", type: "ai-text",
            instructions: "Write a short email of 70 to 100 words. Follow the plan.",
            instructionsFr: "Rédige un court e-mail de 70 à 100 mots. Suis le plan.",
            quotes: ["Plan: 1. Say sorry and explain what happened. 2. Say how you felt. 3. Propose a new date."],
            prompt: "Yesterday you missed a dinner with an English-speaking friend because something went wrong (your train was cancelled, you had to stay late at work…). Write an email to your friend: say sorry, explain what happened, say how you felt, and propose a new date.",
            promptFr: "Hier, tu as manqué un dîner avec un(e) ami(e) anglophone parce que quelque chose s'est mal passé (ton train a été annulé, tu as dû rester tard au travail…). Écris-lui un e-mail : excuse-toi, explique ce qui s'est passé, dis ce que tu as ressenti et propose une nouvelle date.",
            minWords: 70, maxWords: 100,
            rubric: "Total 10 points. Be encouraging: this is a second-chance task. Task achievement (4 pts): apology, explanation of what happened, a feeling, a new date. Grammar and verb forms (3 pts): mostly correct past tenses (Past Simple, possibly Past Continuous or Past Perfect) and a future form (Shall we…? / Are you free on…? / I'll…). Vocabulary and register (2 pts): friendly but correct register (Hi…, Sorry about…, See you soon), precise feeling words (disappointed, annoyed, embarrassed). Coherence (1 pt): simple connectors (because, so, but, then). Length: 70-100 words; deduct 1 point if under 50 words.",
            reference: "Hi Tom, I'm really sorry about last night. I was on my way to the restaurant when my train was cancelled, and there were no buses. My phone battery had died, so I couldn't call you. I felt so embarrassed and disappointed because I was really looking forward to seeing you. Are you free next Friday? I'll book a table at the Italian place and dinner is on me! See you soon, Julie"
          },
          // ------------------------------------------------------------ VII
          {
            id: "sc-speaking", num: "VII", title: "Speaking – Guided Answer", titleFr: "Expression orale – réponse guidée",
            points: 15, skill: "eo", type: "ai-oral",
            instructions: "Read the question and the help below, then press the microphone and answer for about one minute. You can try again, or add to your answer. If the microphone doesn't work, type what you would say.",
            instructionsFr: "Lis la question et l'aide ci-dessous, puis appuie sur le micro et réponds pendant environ une minute. Tu peux recommencer, ou compléter ta réponse. Si le micro ne fonctionne pas, écris ce que tu dirais.",
            quotes: ["Help: Before, I used to… / Now, I… / I have… since… / I think it's better because… / For example, …"],
            prompt: "Talk about how your daily life has changed in the last few years: what did you use to do before, what do you do now, and do you prefer your life now? Why?",
            promptFr: "Parle de la façon dont ta vie quotidienne a changé ces dernières années : que faisais-tu avant, que fais-tu maintenant, et préfères-tu ta vie actuelle ? Pourquoi ?",
            minWords: 70, targetSeconds: 60,
            rubric: "Total 15 points; give a one-line, encouraging comment for each criterion. Task achievement (5 pts): describes the past (used to / Past Simple), the present (Present Simple / Present Perfect), and gives an opinion with a reason. Grammar and verb forms (4 pts): used to, Present Perfect with for/since, Present Simple mostly correct; slips are acceptable if the meaning is clear. Vocabulary (2 pts): everyday B1 vocabulary (work, habits, free time, feelings), opinion phrases (I think…, In my opinion…). Fluency and pronunciation (4 pts): judged from the transcript (about one minute ≈ 80-130 words, simple connectors such as before, now, because, but); recognition errors suggesting mispronounced words lower this score — mention them.",
            reference: "Example: \"Before, I used to work in an office in the city centre, and I spent two hours on the train every day. Now I work from home three days a week. I've had this new rhythm since 2023. I think my life is better now because I have more time for my son and for sport. For example, I go running before work. But sometimes I miss my colleagues.\""
          }
        ]
      }
    };

  E[40] = {
      code: "B2.1",
      title: "Level test: B2.1 – Argumentation",
      titleFr: "Contrôle de niveau : B2.1 – Argumentation",
      objective: "Pass level B2.1 and move on to B2.2: build a complete argument (claim → reason → example → counterargument → conclusion), choose the right advanced connector, anticipate and rebut objections, in writing and in speech.",
      objectiveFr: "Valider le niveau B2.1 et passer au B2.2 : construire une argumentation complète (thèse → raison → exemple → contre-argument → conclusion), choisir le bon connecteur avancé, anticiper et réfuter les objections, à l'écrit comme à l'oral.",
      sections: [
        // ---------------------------------------------------------------- I
        {
          id: "vocab", num: "I", title: "Vocabulary – The Language of Argument", titleFr: "Vocabulaire – la langue de l'argumentation",
          points: 15, skill: "vo", type: "fill",
          instructions: "Complete the sentences with a word or phrase from the list. Change the form if necessary (tense, -s, -ed…). Each word is used only once.",
          instructionsFr: "Complète les phrases avec un mot ou une expression de la liste. Change la forme si nécessaire (temps, -s, -ed…). Chaque mot ne sert qu'une fois.",
          bank: ["evidence", "claim", "back up", "outweigh", "undermine", "acknowledge", "rebut", "valid", "challenge", "counterargument"],
          items: [
            { text: "There is no scientific ___ that this diet works; it's pure marketing.",
              blanks: [["evidence", "proof"]],
              why: "« evidence » = des preuves. Faux ami (≠ « une évidence ») et indénombrable : jamais « an evidence » ni « evidences »." },
            { text: "The minister ___ that crime had fallen by 20%, but offered no figures at all.",
              blanks: [["claimed"]],
              why: "« to claim that… » = affirmer que… (sans forcément apporter de preuve). Récit au passé → claimed." },
            { text: "That's an interesting idea, but can you ___ it ___ with some reliable data?",
              blanks: [["back"], ["up"]],
              why: "« to back something up » = étayer. Verbe à particule séparable : le pronom « it » se place entre « back » et « up »." },
            { text: "In my view, the long-term benefits of the scheme clearly ___ its short-term costs.",
              blanks: [["outweigh"]],
              why: "« to outweigh » = l'emporter sur. Sujet pluriel (« the benefits ») → pas de -s." },
            { text: "Repeated delays have seriously ___ public confidence in the rail network.",
              blanks: [["undermined"]],
              why: "« to undermine » = saper, fragiliser. Present Perfect (« have… ») → participe passé : undermined." },
            { text: "I ___ that the project is expensive; nevertheless, I believe it is worth the investment.",
              blanks: [["acknowledge", "admit", "concede", "recognise", "recognize", "accept"]],
              why: "« I acknowledge that… » = je reconnais que… : c'est la concession, juste avant de maintenir sa position avec « nevertheless »." },
            { text: "A strong essay doesn't ignore the ___; it presents it fairly and then responds to it.",
              blanks: [["counterargument", "counter-argument", "objection", "opposing view"]],
              why: "« the counterargument » = l'objection, le contre-argument : l'étape 4 de l'argumentation B2.1." },
            { text: "The candidate managed to ___ every objection the panel raised, one after the other.",
              blanks: [["rebut", "refute", "counter"]],
              why: "« to rebut an objection » = réfuter, contrer une objection (registre soutenu ; nom : a rebuttal)." },
            { text: "That's a perfectly ___ point, and I'll take it into account.",
              blanks: [["valid", "fair"]],
              why: "« a valid point » = un argument recevable, fondé — plus soutenu que « a good point »." },
            { text: "Good scientists are expected to ___ accepted ideas rather than simply repeat them.",
              blanks: [["challenge", "question"]],
              why: "« to challenge an idea » = la remettre en question — ce n'est pas agressif, c'est valorisé dans un débat." }
          ]
        },
        // --------------------------------------------------------------- II
        {
          id: "grammar", num: "II", title: "Grammar – Advanced Connectors", titleFr: "Grammaire – les connecteurs avancés",
          points: 15, skill: "gr", type: "fill",
          instructions: "A. Complete each sentence with a suitable connector: however, nevertheless, whereas, although, even though, despite, therefore, provided that, unless, owing to. B. Complete the second sentence so that it means the same as the first.",
          instructionsFr: "A. Complète chaque phrase avec un connecteur qui convient : however, nevertheless, whereas, although, even though, despite, therefore, provided that, unless, owing to. B. Complète la deuxième phrase pour qu'elle ait le même sens que la première.",
          items: [
            { header: { en: "A. Choose the right connector", fr: "A. Choisis le bon connecteur" },
              text: "___ the heavy snow, the conference went ahead as planned.",
              blanks: [["despite", "in spite of"]],
              why: "Suivi d'un NOM (« the heavy snow ») → préposition : despite (sans « of ») ou in spite of. « Although » exigerait sujet + verbe." },
            { text: "Northern regions have grown steadily richer, ___ the south has struggled to keep up.",
              blanks: [["whereas", "while", "whilst"]],
              why: "« whereas » oppose deux faits comparables (le nord / le sud). « while » est possible dans ce sens de contraste." },
            { text: "We will sign the contract ___ they agree to lower the price.",
              blanks: [["provided that", "providing that", "provided", "providing", "as long as", "on condition that", "if"]],
              why: "« provided that » = à condition que ; suivi du présent (« they agree ») même pour parler du futur." },
            { text: "___ we act now, the problem will only get worse.",
              blanks: [["unless"]],
              why: "« Unless we act » = si nous n'agissons pas. « unless » contient déjà la négation : jamais « unless we don't act »." },
            { text: "All flights were cancelled ___ a technical fault in the control tower.",
              blanks: [["owing to", "due to", "because of"]],
              why: "Cause + NOM → « owing to » (formel) ou « due to » / « because of »." },
            { text: "Sales have fallen for three years in a row; ___, the company has decided to close two shops.",
              blanks: [["therefore", "consequently", "as a result", "as a consequence", "thus", "hence"]],
              why: "Conséquence après un point-virgule → « therefore » (raisonnement) ou « consequently / as a result » (enchaînement des faits), suivis d'une virgule." },
            { text: "___ she had prepared for weeks, she still felt nervous before the debate.",
              blanks: [["although", "even though", "though"]],
              why: "Suivi d'une proposition complète (sujet + verbe) → conjonction : although / even though. Pas de subjonctif en anglais." },
            { text: "The plan carries some risks. ___, it remains our best option.",
              blanks: [["nevertheless", "however", "nonetheless", "even so", "that said", "still"]],
              why: "Adverbe en tête de nouvelle phrase + virgule : « Nevertheless, … » reconnaît l'obstacle mais maintient la position." },
            { header: { en: "B. Same meaning, different structure", fr: "B. Même sens, autre structure" },
              text: "Although he was exhausted, he finished the report. → Despite ___, he finished the report.",
              blanks: [["being exhausted", "his exhaustion", "being so exhausted", "the fact that he was exhausted", "his being exhausted", "feeling exhausted", "his tiredness", "being tired"]],
              why: "« Despite » + nom ou -ing : « Despite being exhausted » / « Despite his exhaustion ». Pour garder une proposition : « despite the fact that he was exhausted »." },
            { text: "The budget will only be approved if the board agrees. → The budget won't be approved ___ the board agrees.",
              blanks: [["unless"]],
              why: "« only if » = « not… unless » : le budget ne sera pas approuvé à moins que le conseil ne donne son accord." },
            { text: "It's a costly plan. However, it will save money in the long run. → ___ it's a costly plan, it will save money in the long run.",
              blanks: [["although", "even though", "though", "while", "whilst", "despite the fact that"]],
              why: "On relie les deux phrases avec une conjonction de concession : Although / Even though + proposition complète." },
            { text: "We'll launch in May if the tests are successful. → We'll launch in May provided that the tests ___ successful.",
              blanks: [["are", "prove", "turn out to be"]],
              why: "Après « provided that » (comme après « if » et « unless »), présent simple pour un événement futur : « the tests ARE successful », jamais « will be »." }
          ]
        },
        // -------------------------------------------------------------- III
        {
          id: "secret", num: "III", title: "Secret English – Anticipating the Counterargument", titleFr: "Secret English – anticiper le contre-argument",
          points: 10, skill: "gr", type: "ai-text",
          instructions: "You SUPPORT the claim below. Write one paragraph (60 to 100 words) in which you present the opposing view yourself, concede what is fair in it, and then rebut it.",
          instructionsFr: "Tu SOUTIENS l'affirmation ci-dessous. Écris un paragraphe (60 à 100 mots) dans lequel tu présentes toi-même le point de vue adverse, tu concèdes ce qu'il a de juste, puis tu le réfutes.",
          quotes: ["Claim: \"Every city centre should be closed to private cars.\""],
          prompt: "Write the counterargument paragraph: start with \"Some might argue that…\", concede part of the objection (e.g. although / admittedly / I acknowledge that…), rebut it with \"However,…\" or \"Nevertheless,…\" and a piece of evidence or an example, then finish with a one-sentence conclusion.",
          promptFr: "Écris le paragraphe du contre-argument : commence par « Some might argue that… », concède une partie de l'objection (although / admittedly / I acknowledge that…), réfute-la avec « However, … » ou « Nevertheless, … » et une preuve ou un exemple, puis termine par une phrase de conclusion.",
          minWords: 60, maxWords: 100,
          rubric: "Total 10 points. The learner supports the claim that city centres should be closed to private cars and writes a counterargument paragraph. (1) Objection (2 pts): a realistic opposing view is presented with \"Some might argue that…\" or an equivalent (e.g. shops lose customers, elderly/disabled people need cars, deliveries, commuters from rural areas). (2) Concession (2 pts): the learner explicitly admits what is fair in the objection (although / even though / admittedly / I acknowledge that / this concern is valid). (3) Rebuttal (3 pts): introduced by However / Nevertheless / That said, and supported by a concrete piece of evidence, example or solution (studies, a named city, park-and-ride, exemptions for disabled drivers…); a bare contradiction with no support earns at most 1 pt. (4) Conclusion (1 pt): one sentence restating the position (All things considered / Therefore…). (5) Accuracy (2 pts): correct use of connectors (no \"despite of\", \"however\" not used as a conjunction after a comma, no subjunctive after although), B2 accuracy. Deduct 1 point if under 50 words or over 130 words.",
          reference: "Model: \"Some might argue that banning cars would hurt local shops, since fewer drivers could mean fewer customers. This concern is understandable, and elderly or disabled residents clearly need special access. However, studies from cities such as Oslo and Pontevedra show that footfall actually increased after pedestrianisation, and exemptions can easily be granted for those who need them. Therefore, the benefits of car-free centres clearly outweigh the drawbacks.\""
        },
        // --------------------------------------------------------------- IV
        {
          id: "writing", num: "IV", title: "Writing – A Five-Step Argumentative Essay", titleFr: "Expression écrite – essai argumentatif en 5 étapes",
          points: 20, skill: "ee", type: "ai-text",
          instructions: "Write an argumentative essay of 200 to 250 words. Follow the five steps from the course and use at least five DIFFERENT advanced connectors.",
          instructionsFr: "Rédige un essai argumentatif de 200 à 250 mots. Suis les cinq étapes du cours et utilise au moins cinq connecteurs avancés DIFFÉRENTS.",
          prompt: "\"Popular tourist cities should limit the number of visitors they receive each year.\" Do you agree? Give your position, justify it, illustrate it with a concrete example, present and rebut the strongest counterargument, and conclude.",
          promptFr: "« Les villes très touristiques devraient limiter le nombre de visiteurs qu'elles accueillent chaque année. » Es-tu d'accord ? Donne ta position, justifie-la, illustre-la par un exemple concret, présente et réfute le contre-argument le plus fort, puis conclus.",
          quotes: ["1. Claim (ta thèse)", "2. Reason (pourquoi)", "3. Example (un cas concret)", "4. Counterargument (« Some might argue that… However, … »)", "5. Conclusion (« All things considered, … »)"],
          minWords: 200, maxWords: 250,
          rubric: "Total 20 points. B2 level expected. (1) Argument structure (6 pts): the five steps are all present, clearly identifiable and in a logical order — claim, reason, example, counterargument (explicitly anticipated, e.g. \"Some might argue that…\") with a rebuttal, conclusion; lose about 1.5 pts per missing or confused step; the counterargument must be REBUTTED, not just mentioned. (2) Connectors and grammar (6 pts): at least five different advanced connectors (however, nevertheless, whereas, although, even though, despite, therefore, consequently, as a result, provided that, unless, owing to…) used correctly: despite + noun/-ing, although + clause, however/nevertheless starting a new sentence or after a semicolon, present tense after provided that/unless; lose 1 pt per missing connector below five and for each connector error; general accuracy of tenses, articles and agreement. (3) Vocabulary (4 pts): range and precision of argument vocabulary (claim, evidence, back up, outweigh, undermine, acknowledge, valid, drawbacks, benefits…) and topic vocabulary (overtourism, residents, housing, local economy…); \"evidence\" must be uncountable. (4) Coherence and persuasiveness (4 pts): paragraphs, clear position maintained throughout, relevant and specific example (a real or realistic city), convincing rebuttal. Length: 200-250 words; deduct up to 2 pts if under 170 or over 300 words.",
          reference: "Expected: a clear position (for or against limits); reasons such as housing prices, pressure on infrastructure, damage to heritage, or conversely jobs and income; example such as Venice's entry fee, Amsterdam's restrictions on holiday rentals, Barcelona; counterargument e.g. tourism brings jobs / limits are unfair to less wealthy travellers, rebutted with evidence or a solution (quotas, seasonal pricing, spreading visitors); conclusion with All things considered / Therefore, possibly with a condition (provided that…)."
        },
        // ---------------------------------------------------------------- V
        {
          id: "reading", num: "V", title: "Reading Comprehension", titleFr: "Compréhension écrite",
          points: 15, skill: "ce", type: "mcq",
          instructions: "Read the opinion article, then choose the right answer for each question.",
          instructionsFr: "Lis la tribune, puis choisis la bonne réponse pour chaque question.",
          passage: "Should the standard working week be cut to four days? I would argue that it should, at least in sectors where productivity is measured by results rather than by hours spent at a desk.\n\nThe main reason is that tired employees are rarely efficient ones. People who enjoy a three-day weekend tend to return to work rested and focused, and they are less likely to take sick leave. In a recent British trial involving around sixty companies, the vast majority of employers reported that output stayed the same or even rose, and almost all of them chose to keep the new schedule once the six-month experiment had ended.\n\nSome might argue that a shorter week is simply unrealistic for hospitals, schools or shops, which need staff on site every day. This concern is certainly valid, and no serious supporter claims that one model fits every workplace. However, rotating schedules already exist in many of these sectors, and they could be adapted so that each employee works four days while the service remains open for five or more.\n\nCritics also point out that squeezing the same workload into fewer days might increase stress. Nevertheless, the evidence so far suggests the opposite, largely because meetings become shorter and unnecessary tasks quietly disappear.\n\nAll things considered, the benefits of a four-day week clearly outweigh the drawbacks. Governments should therefore encourage further trials, provided that salaries are not reduced and that each sector remains free to design the system that suits it best.",
          items: [
            { q: "What is the writer's main claim?", qFr: "Quelle est la thèse principale de l'auteur ?",
              opts: ["A four-day week should be compulsory in every sector immediately.", "A four-day week is a good idea, at least where results matter more than hours.", "A four-day week is unrealistic for most companies.", "Employees should work longer days to get a three-day weekend."], correct: 1,
              why: "« I would argue that it should, at least in sectors where productivity is measured by results rather than by hours » : une thèse forte, mais limitée (« at least »)." },
            { q: "What does the British trial show, according to the writer?", qFr: "Que montre l'essai britannique, selon l'auteur ?",
              opts: ["Most companies saw output fall and went back to five days.", "Only a few employers were satisfied with the results.", "Most employers saw stable or higher output and kept the new schedule.", "Employees took more sick leave during the trial."], correct: 2,
              why: "« output stayed the same or even rose, and almost all of them chose to keep the new schedule » : c'est l'exemple (étape 3) qui appuie la thèse." },
            { q: "How does the writer respond to the objection about hospitals, schools and shops?", qFr: "Comment l'auteur répond-il à l'objection sur les hôpitaux, les écoles et les commerces ?",
              opts: ["He ignores it.", "He admits it is valid, then suggests adapting rotating schedules.", "He says these sectors should close one day a week.", "He agrees that the idea should be abandoned."], correct: 1,
              why: "Concession (« This concern is certainly valid ») puis réfutation (« However, rotating schedules… could be adapted ») : la structure du contre-argument." },
            { q: "In paragraph 4, the word \"Nevertheless\" shows that the writer…", qFr: "Dans le paragraphe 4, le mot « Nevertheless » montre que l'auteur…",
              opts: ["agrees completely with the critics.", "is changing the subject.", "recognises the critics' concern but maintains that the evidence points the other way.", "gives an example of a stressful job."], correct: 2,
              why: "« Nevertheless » = néanmoins : on reconnaît l'objection (le stress) mais on maintient sa position, preuves à l'appui (« the evidence so far suggests the opposite »)." },
            { q: "Under what conditions should governments encourage further trials?", qFr: "À quelles conditions les gouvernements devraient-ils encourager d'autres essais ?",
              opts: ["If salaries are not reduced and each sector can design its own system.", "If all companies agree to take part.", "If hospitals and schools are excluded.", "Unless the results of the British trial are confirmed."], correct: 0,
              why: "« provided that salaries are not reduced and that each sector remains free to design the system that suits it best » : « provided that » = à condition que." }
          ]
        },
        // --------------------------------------------------------------- VI
        {
          id: "listening", num: "VI", title: "Listening Comprehension", titleFr: "Compréhension orale",
          points: 10, skill: "co", type: "mcq",
          instructions: "Listen to each recording (you can play it again), then choose the right answer.",
          instructionsFr: "Écoute chaque enregistrement (tu peux le réécouter), puis choisis la bonne réponse.",
          items: [
            { audio: "Some people say that learning to code should be compulsory at school. I can see why, but I'm not convinced. Although digital skills matter, forcing every child to code could take time away from reading and maths, which are arguably even more important.",
              q: "What is the speaker's position on compulsory coding?", qFr: "Quelle est la position de la personne sur le code obligatoire ?",
              opts: ["She is strongly in favour of it.", "She understands the idea but is against making it compulsory.", "She thinks maths should be replaced by coding.", "She has no opinion."], correct: 1,
              why: "« I can see why, but I'm not convinced » : elle comprend l'argument mais s'y oppose, car le code prendrait du temps sur la lecture et les maths." },
            { audio: [{ who: "A", text: "So, are we going ahead with the new office?" }, { who: "B", text: "Yes, provided that the landlord accepts a three-year lease. Otherwise, we'll stay where we are." }],
              q: "What will happen if the landlord refuses a three-year lease?", qFr: "Que se passera-t-il si le propriétaire refuse un bail de trois ans ?",
              opts: ["They will sign a longer lease.", "They will look for another landlord.", "They will stay in their current office.", "They will move anyway."], correct: 2,
              why: "« provided that the landlord accepts… Otherwise, we'll stay where we are » : sinon, ils restent là où ils sont." },
            { audio: "Owing to a strike by rail staff, all trains to the airport have been cancelled this morning. As a result, passengers are advised to allow at least an extra hour for their journey.",
              q: "What are passengers advised to do?", qFr: "Que conseille-t-on aux voyageurs ?",
              opts: ["Cancel their flights", "Allow at least an extra hour for their journey", "Wait for the strike to end", "Take the train later in the day"], correct: 1,
              why: "« As a result, passengers are advised to allow at least an extra hour » ; la cause est introduite par « Owing to a strike »." },
            { audio: [{ who: "A", text: "Honestly, that new software cost us a fortune." }, { who: "B", text: "Admittedly, it wasn't cheap. Nevertheless, it's saving us about ten hours a week, so I'd say it was worth every penny." }],
              q: "What does the second speaker think about the software?", qFr: "Que pense la deuxième personne du logiciel ?",
              opts: ["It was cheap and useful.", "It was expensive and useless.", "It was expensive, but it was worth it.", "They should ask for a refund."], correct: 2,
              why: "Concession (« Admittedly, it wasn't cheap ») puis position maintenue (« Nevertheless… worth every penny »)." },
            { audio: "My brother lives in a tiny village, whereas I've always lived in big cities. He thinks I'm crazy to pay such high rent, and I think he's crazy to drive an hour just to see a film. Even so, neither of us would ever swap.",
              q: "Which sentence is true?", qFr: "Quelle phrase est vraie ?",
              opts: ["The brothers are planning to swap homes.", "Both brothers live in big cities.", "They live very differently, and neither wants to change.", "The speaker wants to move to the countryside."], correct: 2,
              why: "« whereas » oppose leurs deux modes de vie ; « Even so, neither of us would ever swap » = malgré tout, aucun des deux n'échangerait." }
          ]
        },
        // -------------------------------------------------------------- VII
        {
          id: "speaking", num: "VII", title: "Speaking – Debate", titleFr: "Expression orale – débat",
          points: 15, skill: "eo", type: "ai-oral",
          instructions: "Press the microphone and speak for about ninety seconds. You can try again, or add to your answer. If the microphone doesn't work, type what you would say.",
          instructionsFr: "Appuie sur le micro et parle environ une minute trente. Tu peux recommencer, ou compléter ta réponse. Si le micro ne fonctionne pas, écris ce que tu dirais.",
          prompt: "In a meeting, a colleague says: \"Meetings are a total waste of time — we should cancel them all.\" Respond with a complete argument: your claim, a reason, an example, the counterargument you expect (\"Some might argue that…\") and your conclusion.",
          promptFr: "En réunion, un collègue déclare : « Les réunions sont une perte de temps totale — on devrait toutes les supprimer. » Réponds par une argumentation complète : ta thèse, une raison, un exemple, le contre-argument que tu anticipes (« Some might argue that… ») et ta conclusion.",
          minWords: 70, targetSeconds: 90,
          rubric: "Total 15 points. (1) Argument structure (5 pts): claim, reason, example, anticipated counterargument WITH a rebuttal, and conclusion, in a logical order; about 1 pt lost per missing step. (2) Connectors and grammar (4 pts): varied advanced connectors used correctly in speech (however, nevertheless, although, even though, whereas, therefore, as a result, provided that, unless, that said, all things considered); B2 accuracy with tenses and articles. (3) Vocabulary and interaction (3 pts): argument vocabulary (valid point, evidence, outweigh, acknowledge…) and a respectful debating tone (e.g. \"I take your point, but…\", attacking the idea, not the person). (4) Fluency and pronunciation (3 pts): judged from the transcript — about ninety seconds of speech ≈ 140-220 words, connected sentences rather than a list, few recognition errors suggesting mispronounced words; mention any words to practise.",
          reference: "Example: \"I take your point — some meetings really are too long. However, I'd argue that we shouldn't cancel them all, because some decisions need everyone in the same room. For example, last month our project meeting helped us spot a budget problem in ten minutes. Some might argue that emails would do the same job. Nevertheless, emails are easily ignored, whereas a short meeting forces a decision. All things considered, we should keep fewer, shorter meetings, provided that each one has a clear agenda.\""
        }
      ]
    };

  E[41] = {
      code: "B2.2",
      title: "Level test: B2.2 – Nuance & Certainty",
      titleFr: "Contrôle de niveau : B2.2 – Nuance et certitude",
      objective: "Pass level B2.2 and move on to B2.3: express exactly how certain you are (certainty → probability → possibility → doubt), use modals of deduction in the present and the past, and give nuanced opinions without absolute words.",
      objectiveFr: "Valider le niveau B2.2 et passer au B2.3 : exprimer exactement son degré de certitude (certitude → probabilité → possibilité → doute), employer les modaux de déduction au présent et au passé, et donner des opinions nuancées sans mots absolus.",
      sections: [
        // ---------------------------------------------------------------- I
        {
          id: "vocab", num: "I", title: "Vocabulary – The Language of Nuance", titleFr: "Vocabulaire – le langage de la nuance",
          points: 15, skill: "vo", type: "fill",
          instructions: "Complete the sentences with a word or phrase from the list. Each one is used only once.",
          instructionsFr: "Complète les phrases avec un mot ou une expression de la liste. Chacun ne sert qu'une fois.",
          bank: ["apparently", "arguably", "largely", "partly", "bound", "likely", "tend", "doubtful", "presumably", "potentially", "few", "to some extent"],
          items: [
            { text: "___, the meeting has been moved to Thursday — at least, that's what Sarah told me.",
              blanks: [["apparently"]],
              why: "« Apparently » = à ce qu'il paraît : l'information est rapportée, pas vérifiée (« that's what Sarah told me »)." },
            { text: "It's ___ the best film of the decade, although some critics would strongly disagree.",
              blanks: [["arguably"]],
              why: "« arguably » = on peut soutenir que : on avance une idée forte en admettant qu'elle se discute." },
            { text: "The rise in prices is ___ due to energy costs, although transport also played a small part.",
              blanks: [["largely", "mainly", "mostly"]],
              why: "« largely » = en grande partie (faux ami : pas « largement »). La cause secondaire (« a small part ») confirme le sens." },
            { text: "The accident was only ___ the driver's fault; the road was also extremely icy.",
              blanks: [["partly"]],
              why: "« partly » = en partie : une cause parmi d'autres (la route verglacée)." },
            { text: "If he keeps driving like that, he's ___ to have an accident sooner or later.",
              blanks: [["bound"]],
              why: "« to be bound to » = ne pas manquer de, forcément : certitude sur le futur." },
            { text: "According to most economists, interest rates are ___ to rise again next year.",
              blanks: [["likely"]],
              why: "« be likely to + base verbale » = il est probable que (≈ 70-80 %)." },
            { text: "Teenagers ___ to go to bed later than adults, but there are plenty of exceptions.",
              blanks: [["tend"]],
              why: "« tend to » = avoir tendance à : l'antidote à « always ». Sujet pluriel → « tend » sans -s." },
            { text: "It is ___ whether the new law will actually reduce crime.",
              blanks: [["doubtful", "unclear", "uncertain"]],
              why: "« It is doubtful whether… » = il est peu probable / douteux que… : le bas de l'échelle de certitude." },
            { text: "___, you've already heard the news — it's been all over the internet since this morning.",
              blanks: [["presumably"]],
              why: "« Presumably » = je suppose que, vraisemblablement : une déduction à partir de ce qu'on sait (« it's been all over the internet »)." },
            { text: "This is a ___ dangerous situation, so we need to act before it gets any worse.",
              blanks: [["potentially"]],
              why: "« potentially dangerous » : le danger existe mais ne s'est pas encore réalisé." },
            { text: "Very ___ people came to the talk, so the organisers were bitterly disappointed.",
              blanks: [["few"]],
              why: "« (very) few » sans « a » = trop peu, sens négatif (d'où la déception). « a few » = quelques-uns, sens positif." },
            { text: "I agree with you ___: the idea is good, but the timing is wrong.",
              blanks: [["to some extent", "to a certain extent", "up to a point", "partly", "in part"]],
              why: "« To some extent » = dans une certaine mesure : accord partiel, suivi d'une réserve." }
          ]
        },
        // --------------------------------------------------------------- II
        {
          id: "grammar", num: "II", title: "Grammar – Modals of Deduction & Hedging", titleFr: "Grammaire – modaux de déduction et atténuation",
          points: 15, skill: "gr", type: "fill",
          instructions: "A. Put the verb in brackets into the correct form with must, might, could, can't or should (present or past). B. Place the adverb correctly. C. Rewrite the absolute statement in a more nuanced way.",
          instructionsFr: "A. Mets le verbe entre parenthèses à la bonne forme avec must, might, could, can't ou should (présent ou passé). B. Place correctement l'adverbe. C. Réécris l'affirmation absolue de façon plus nuancée.",
          items: [
            { header: { en: "A. Modals of deduction", fr: "A. Modaux de déduction" },
              text: "The lights are off and nobody's answering the door. They ___ (go) away for the weekend.",
              blanks: [["must have gone"]],
              why: "Déduction quasi certaine sur le passé → « must have + participe passé » : they must have gone." },
            { text: "He ___ (see) us — he had his back to us the whole time.",
              blanks: [["can't have seen", "cannot have seen", "couldn't have seen", "could not have seen"]],
              why: "Impossibilité dans le passé → « can't have + p.p. ». Jamais « mustn't have » (qui exprimerait une interdiction)." },
            { text: "I'm not sure where Anna is. She ___ (be) in a meeting, or she ___ (be) at lunch.",
              blanks: [["might be", "could be", "may be"], ["might be", "could be", "may be"]],
              why: "Deux hypothèses possibles, sans certitude (≈ 50 %) → might / could / may + base verbale." },
            { text: "You ___ (be) hungry already — you've just had an enormous lunch!",
              blanks: [["can't be", "cannot be", "couldn't be", "could not be"]],
              why: "Impossibilité logique au présent → « can't be ». « mustn't be » est un piège : c'est une interdiction." },
            { text: "The streets are wet, but the sky is clear now. It ___ (rain) during the night.",
              blanks: [["must have rained"]],
              why: "Indice concret (rues mouillées) → déduction quasi certaine sur le passé : must have rained." },
            { text: "Tom still hasn't arrived. He ___ (miss) the train, but I really don't know.",
              blanks: [["might have missed", "may have missed", "could have missed"]],
              why: "Simple possibilité sur le passé (« I really don't know ») → might / may / could have + p.p." },
            { text: "The parcel was sent on Monday, so it ___ (arrive) tomorrow.",
              blanks: [["should arrive", "ought to arrive", "will probably arrive", "is likely to arrive"]],
              why: "Attente logique → « should + base verbale » : le colis devrait arriver demain." },
            { header: { en: "B. Adverb position", fr: "B. Place de l'adverbe" },
              text: "She ___ (probably / not come) to the party tonight — she's exhausted.",
              blanks: [["probably won't come", "probably will not come", "is probably not coming", "'s probably not coming", "probably isn't coming"]],
              why: "Au négatif, « probably » se place AVANT « won't » : she probably won't come. Jamais « won't probably »." },
            { text: "They ___ (probably / win) the match — they're a much stronger team.",
              blanks: [["will probably win", "'ll probably win", "are probably going to win", "'re probably going to win"]],
              why: "À l'affirmatif, « probably » se place APRÈS « will » : they'll probably win." },
            { header: { en: "C. No absolutes (always / never / everyone / nobody)", fr: "C. Zéro absolu (always / never / everyone / nobody)" },
              text: "\"Everyone hates Mondays.\" → ___ people tend to find Mondays difficult.",
              blanks: [["most", "many", "a lot of", "lots of", "plenty of"]],
              why: "« everyone » → « most / many people » + « tend to » : on généralise sans prétendre que c'est vrai pour tout le monde." },
            { text: "\"Politicians never keep their promises.\" → Politicians ___ keep their promises.",
              blanks: [["hardly ever", "rarely", "seldom", "don't always", "do not always", "don't often", "do not often", "tend not to"]],
              why: "« never » → « hardly ever / rarely » (sans « not » en plus) ou « don't always ». On laisse la place aux exceptions." },
            { text: "\"This study proves that the policy works.\" → This study ___ that the policy works.",
              blanks: [["suggests", "indicates", "seems to show", "appears to show", "would suggest", "seems to suggest", "appears to suggest"]],
              why: "« prove » est trop catégorique : un verbe prudent (« suggests », « indicates », « appears to show ») est la norme à l'écrit B2." }
          ]
        },
        // -------------------------------------------------------------- III
        {
          id: "mission", num: "III", title: "Mission – Zero Absolutes", titleFr: "Mission – zéro absolu",
          points: 10, skill: "gr", type: "ai-text",
          instructions: "Rewrite each of the four statements below so that it becomes nuanced and defensible. Use a DIFFERENT nuancing tool each time, and don't use always, never, everyone, everybody, nobody or no one.",
          instructionsFr: "Réécris chacune des quatre affirmations ci-dessous pour qu'elle devienne nuancée et défendable. Utilise un outil de nuance DIFFÉRENT à chaque fois, sans employer always, never, everyone, everybody, nobody ni no one.",
          quotes: ["1. \"Young people never read books any more.\"", "2. \"Everybody knows that working from home is less productive.\"", "3. \"Electric cars will definitely solve the pollution problem.\"", "4. \"Nobody trusts the news these days.\""],
          prompt: "Write your four nuanced versions (one or two sentences each), numbered 1 to 4.",
          promptFr: "Écris tes quatre versions nuancées (une ou deux phrases chacune), numérotées de 1 à 4.",
          minWords: 40,
          rubric: "Total 10 points: 2.5 points per statement. For each rewritten statement: (a) 1 pt — the absolute word is removed and the meaning becomes defensible (no always / never / everyone / everybody / nobody / no one / definitely-type overstatement left); (b) 1 pt — a correct B2 nuancing tool is used: frequency or quantity limiter (hardly ever, rarely, most, the vast majority of, few), tend to, be likely / unlikely / bound to, a hedging adverb (arguably, largely, partly, to some extent, probably, potentially), a cautious verb (suggest, indicate, appear, seem), or a modal (might, could, may); (c) 0.5 pt — grammatical accuracy (e.g. probably placed before won't, few vs a few, likely + to-infinitive). Deduct 1 point overall if the same tool is used for all four statements (the instructions require variety). Do not reward statements that simply reverse the opinion without nuance.",
          reference: "Possible answers: 1. \"Young people arguably read fewer books than previous generations, although many of them read a lot online.\" 2. \"Some studies suggest that working from home may be less productive for certain tasks.\" 3. \"Electric cars are likely to reduce pollution to some extent, but they probably won't solve the problem on their own.\" 4. \"Trust in the news appears to have fallen, and relatively few people say they fully trust the media.\""
        },
        // --------------------------------------------------------------- IV
        {
          id: "writing", num: "IV", title: "Writing – A Nuanced Opinion Article", titleFr: "Expression écrite – une tribune nuancée",
          points: 20, skill: "ee", type: "ai-text",
          instructions: "Write an opinion article of 200 to 250 words for a general-interest magazine. Show clearly how certain you are about each idea.",
          instructionsFr: "Rédige une tribune de 200 à 250 mots pour un magazine grand public. Montre clairement ton degré de certitude pour chaque idée.",
          prompt: "\"Artificial intelligence will destroy more jobs than it creates.\" Give your nuanced opinion. Distinguish what is certain, what is probable, what is possible and what is doubtful. You must NOT use always, never, everyone, everybody, nobody or no one. Use at least two modals of deduction or probability (must, might, could, can't, should…) and at least four hedging expressions (arguably, largely, to some extent, tend to, be likely to, suggest…).",
          promptFr: "« L'intelligence artificielle détruira plus d'emplois qu'elle n'en créera. » Donne ton opinion nuancée. Distingue ce qui est certain, probable, possible et douteux. Tu ne dois PAS utiliser always, never, everyone, everybody, nobody ni no one. Emploie au moins deux modaux de déduction ou de probabilité (must, might, could, can't, should…) et au moins quatre expressions de nuance (arguably, largely, to some extent, tend to, be likely to, suggest…).",
          minWords: 200, maxWords: 250,
          rubric: "Total 20 points. B2 level expected. (1) Degrees of certainty (6 pts): the article clearly distinguishes several levels — something presented as (almost) certain, something probable, something possible, something doubtful or unlikely; the writer's own position is clear but not absolute. (2) Grammar of nuance (6 pts): at least two modals of deduction/probability used correctly (must/might/could/can't/should + base or + have + past participle), correct adverb position (probably before won't, after will), correct be likely/bound to + base verb, few vs a few; general B2 accuracy. Deduct 1 pt for each use of always / never / everyone / everybody / nobody / no one (the mission forbids them), up to 3 pts. (3) Vocabulary (4 pts): at least four different hedging expressions (arguably, largely, partly, relatively, potentially, to some extent, by and large, tend to, the vast majority of, in most cases, suggest, indicate, appear, presumably, apparently…) plus relevant topic vocabulary (automation, workforce, skills, retrain, sector…). (4) Organisation (4 pts): an engaging introduction, paragraphs with a logical progression, linking words (however, whereas, therefore — recycled from B2.1), a conclusion. Length: 200-250 words; deduct up to 2 pts if under 170 or over 300 words.",
          reference: "Expected: e.g. \"AI will undoubtedly change the way we work.\" (certain) / \"Routine office jobs are likely to disappear.\" (probable) / \"New professions could emerge.\" (possible) / \"It is doubtful whether governments will retrain workers quickly enough.\" (doubtful); hedges such as arguably, to some extent, largely depends on, recent studies suggest; a balanced conclusion (By and large, …)."
        },
        // ---------------------------------------------------------------- V
        {
          id: "reading", num: "V", title: "Reading Comprehension", titleFr: "Compréhension écrite",
          points: 15, skill: "ce", type: "mcq",
          instructions: "Read the article, then choose the right answer for each question.",
          instructionsFr: "Lis l'article, puis choisis la bonne réponse pour chaque question.",
          passage: "Coffee lovers were delighted last month when a large study appeared to show that drinking three cups a day could add years to your life. Headlines were quick to announce that coffee \"prevents disease\". The reality, however, is considerably more nuanced.\n\nThe researchers followed around 400,000 adults for more than a decade and found that regular coffee drinkers were, on average, slightly less likely to die during the study period. That finding is undoubtedly interesting. What the study cannot tell us is why. People who drink coffee regularly tend to differ from those who don't in many other ways: they may be wealthier, more active or simply healthier to begin with. The link, in other words, is arguably as much about lifestyle as about coffee itself.\n\nThe authors themselves were careful. They wrote that their results \"suggest\" a possible benefit and that further research is \"likely to be needed\". Apparently, several journalists did not read beyond the summary.\n\nSo should you order another espresso? For most healthy adults, moderate coffee drinking is probably harmless and may well be beneficial. For pregnant women and people with certain heart conditions, the picture is less clear, and doctors tend to recommend caution.\n\nBy and large, the lesson is not really about coffee. It is about the difference between \"is linked to\" and \"causes\" — a distinction that is bound to become more important as we are bombarded with ever more health news.",
          items: [
            { q: "What does the writer think of the headlines about the study?", qFr: "Que pense l'auteur des gros titres sur l'étude ?",
              opts: ["They were accurate and well researched.", "They were far more certain than the study itself.", "They underestimated the benefits of coffee.", "They were written by the researchers."], correct: 1,
              why: "« coffee \"prevents disease\" » vs « The reality… is considerably more nuanced » : les titres affirmaient une certitude que l'étude ne permettait pas." },
            { q: "What did the study actually find?", qFr: "Qu'a réellement trouvé l'étude ?",
              opts: ["Coffee prevents heart disease.", "Coffee drinkers live exactly ten years longer.", "Regular coffee drinkers were slightly less likely to die during the study period.", "Coffee is dangerous for most adults."], correct: 2,
              why: "« regular coffee drinkers were, on average, slightly less likely to die during the study period » : un lien statistique modeste (« slightly »)." },
            { q: "Why can't the study prove that coffee makes people live longer?", qFr: "Pourquoi l'étude ne peut-elle pas prouver que le café fait vivre plus longtemps ?",
              opts: ["Because too few people took part.", "Because coffee drinkers may differ from non-drinkers in other important ways.", "Because the study lasted less than a year.", "Because the researchers only studied espresso."], correct: 1,
              why: "« they may be wealthier, more active or simply healthier to begin with » : d'autres facteurs peuvent expliquer le lien." },
            { q: "\"Apparently, several journalists did not read beyond the summary.\" What does \"apparently\" show here?", qFr: "« Apparently, several journalists did not read beyond the summary. » Que montre « apparently » ici ?",
              opts: ["The writer has proof that every journalist lied.", "The writer is drawing a conclusion from what seems to be the case, without claiming certainty.", "The writer agrees with the journalists.", "The writer is quoting the researchers."], correct: 1,
              why: "« Apparently » = à ce qu'il semble : l'auteur suggère (ironiquement) une explication sans prétendre la certitude." },
            { q: "What, according to the writer, is the real lesson of the story?", qFr: "Selon l'auteur, quelle est la vraie leçon de cette histoire ?",
              opts: ["Everybody should drink three cups of coffee a day.", "Health news can never be trusted.", "A link between two things does not mean that one causes the other.", "Pregnant women should stop drinking coffee completely."], correct: 2,
              why: "« the difference between \"is linked to\" and \"causes\" » : corrélation ≠ causalité." }
          ]
        },
        // --------------------------------------------------------------- VI
        {
          id: "listening", num: "VI", title: "Listening Comprehension", titleFr: "Compréhension orale",
          points: 10, skill: "co", type: "mcq",
          instructions: "Listen to each recording (you can play it again), then choose the right answer.",
          instructionsFr: "Écoute chaque enregistrement (tu peux le réécouter), puis choisis la bonne réponse.",
          items: [
            { audio: "Where's Mark? His car isn't in the car park, and his coat's gone from the hook. He must have gone home early.",
              q: "How sure is the speaker that Mark has left?", qFr: "À quel point la personne est-elle sûre que Mark est parti ?",
              opts: ["Not sure at all", "About fifty-fifty", "Almost certain", "She knows he hasn't left"], correct: 2,
              why: "« must have gone » + deux indices (voiture, manteau) = déduction quasi certaine." },
            { audio: [{ who: "A", text: "Do you think house prices will go up again?" }, { who: "B", text: "Oh, they're bound to, sooner or later. The only real question is when." }],
              q: "What does the second speaker think?", qFr: "Que pense la deuxième personne ?",
              opts: ["Prices will certainly rise, but the timing is unclear.", "Prices will probably fall.", "Prices will rise next month.", "She has no idea what will happen."], correct: 0,
              why: "« they're bound to » = c'est certain ; « The only real question is when » = seul le moment est incertain." },
            { audio: "Apparently, the museum is closing for renovation next spring, but nothing has been officially announced yet.",
              q: "How reliable is this information?", qFr: "Quelle est la fiabilité de cette information ?",
              opts: ["It has been officially confirmed.", "It's a rumour that hasn't been confirmed.", "The museum has already closed.", "The renovation has been cancelled."], correct: 1,
              why: "« Apparently » + « nothing has been officially announced yet » : information rapportée, non confirmée." },
            { audio: [{ who: "A", text: "Julia can't have written this report — she was on holiday all week." }, { who: "B", text: "True. It might have been Ben, then. He was working on the same figures." }],
              q: "What do the speakers conclude?", qFr: "Que concluent les deux personnes ?",
              opts: ["Julia definitely wrote the report.", "It's impossible that Julia wrote it; Ben possibly did.", "Ben certainly didn't write it.", "Nobody wrote the report."], correct: 1,
              why: "« can't have written » = impossibilité ; « might have been Ben » = simple possibilité." },
            { audio: "The fall in sales was partly caused by the bad weather, but it was largely due to a new competitor opening just down the road.",
              q: "What was the MAIN cause of the fall in sales?", qFr: "Quelle a été la cause PRINCIPALE de la baisse des ventes ?",
              opts: ["The bad weather", "A new competitor nearby", "Higher prices", "Road works"], correct: 1,
              why: "« partly » (en partie) = la météo ; « largely » (en grande partie) = le nouveau concurrent." }
          ]
        },
        // -------------------------------------------------------------- VII
        {
          id: "speaking", num: "VII", title: "Speaking – A Nuanced Opinion", titleFr: "Expression orale – une opinion nuancée",
          points: 15, skill: "eo", type: "ai-oral",
          instructions: "Press the microphone and speak for about ninety seconds. You can try again, or add to your answer. If the microphone doesn't work, type what you would say.",
          instructionsFr: "Appuie sur le micro et parle environ une minute trente. Tu peux recommencer, ou compléter ta réponse. Si le micro ne fonctionne pas, écris ce que tu dirais.",
          prompt: "A friend says: \"Social media makes people lonelier.\" Give your nuanced opinion. Show different degrees of certainty, and don't use always, never, everyone or nobody.",
          promptFr: "Un ami affirme : « Les réseaux sociaux rendent les gens plus seuls. » Donne ton opinion nuancée. Montre différents degrés de certitude, sans utiliser always, never, everyone ni nobody.",
          minWords: 70, targetSeconds: 90,
          rubric: "Total 15 points. (1) Nuance and degrees of certainty (5 pts): the speaker expresses a clear but nuanced position, distinguishing what is likely, possible or doubtful (to some extent, partly, largely, arguably, tend to, be likely to, probably, might/could, it depends on…); deduct 1 pt per use of always / never / everyone / everybody / nobody (max 3). (2) Grammar (4 pts): correct modals (might/could/must/can't + base or + have + past participle), correct position of probably, B2 accuracy. (3) Vocabulary and argument (3 pts): relevant vocabulary (isolation, connect, online/offline relationships, studies suggest…) and at least one reason or example. (4) Fluency and pronunciation (3 pts): judged from the transcript — about ninety seconds ≈ 140-220 words, connected speech, few recognition errors; note words to practise (e.g. doubt /daʊt/ with a silent b).",
          reference: "Example: \"To some extent, I agree. Heavy users of social media tend to feel more isolated, and some studies suggest there might be a link with anxiety. However, it largely depends on how people use it. My grandmother, for instance, is probably less lonely thanks to video calls with her grandchildren. So I'd say social media can make people lonelier, but it's doubtful whether it's the main cause.\""
        }
      ]
    };

  E[42] = {
      code: "B2.3",
      title: "Level test: B2.3 – Register Master",
      titleFr: "Contrôle de niveau : B2.3 – Maître du registre",
      objective: "Pass level B2.3 and move on to B2.4: adapt your English to the person you are addressing, express the same request in casual, neutral, polite and formal English, and write a correct formal e-mail.",
      objectiveFr: "Valider le niveau B2.3 et passer au B2.4 : adapter son anglais à son interlocuteur, formuler une même demande en registre casual, neutral, polite et formal, et rédiger un e-mail formel correct.",
      sections: [
        // ---------------------------------------------------------------- I
        {
          id: "vocab", num: "I", title: "Vocabulary – Formal English", titleFr: "Vocabulaire – l'anglais formel",
          points: 15, skill: "vo", type: "fill",
          instructions: "A. Give the formal equivalent of each everyday verb. B. Complete the formal e-mail phrases.",
          instructionsFr: "A. Donne l'équivalent formel de chaque verbe courant. B. Complète les formules de l'e-mail formel.",
          items: [
            { header: { en: "A. Everyday → formal", fr: "A. Courant → formel" },
              text: "to get (a visa) → to ___ a visa",
              blanks: [["obtain", "acquire", "secure"]],
              why: "« to obtain » = obtenir (formel, formulaires officiels). À l'oral, on dit « get »." },
            { text: "to buy (a ticket) → to ___ a ticket",
              blanks: [["purchase"]],
              why: "« to purchase » = acheter (formel), prononcé /ˈpɜːtʃəs/." },
            { text: "to ask for (information) → to ___ information",
              blanks: [["request"]],
              why: "« to request information » : le VERBE « request » s'emploie sans « for » (le nom, lui, prend « for » : « a request for »)." },
            { text: "to need (a signature) → to ___ a signature",
              blanks: [["require"]],
              why: "« to require » = nécessiter, exiger (formel pour « need »)." },
            { text: "to help (a customer) → to ___ a customer",
              blanks: [["assist", "aid", "support"]],
              why: "« to assist » = aider (formel). Faux ami : « assister à » = « to attend »." },
            { text: "to let (someone) know → to ___ (someone)",
              blanks: [["inform", "notify", "advise"]],
              why: "« to inform someone » = informer (formel) : « We regret to inform you that… »." },
            { header: { en: "B. The formal e-mail", fr: "B. L'e-mail formel" },
              text: "Dear Sir or ___,",
              blanks: [["Madam"]],
              why: "« Dear Sir or Madam, » = Madame, Monsieur, quand on ne connaît pas le nom du destinataire." },
            { text: "I am writing to ___ about the availability of your conference room in June.",
              blanks: [["enquire", "inquire", "ask"]],
              why: "« to enquire about » = se renseigner sur (US : inquire). Faux ami : ≠ « enquêter » (= investigate)." },
            { text: "Please find ___ a copy of my CV and two references.",
              blanks: [["attached", "enclosed"]],
              why: "« Please find attached… » = veuillez trouver ci-joint… (« enclosed » pour une lettre papier)." },
            { text: "I would be grateful if you could reply at your earliest ___.",
              blanks: [["convenience"]],
              why: "« at your earliest convenience » = dans les meilleurs délais : version très polie d'« as soon as possible »." },
            { text: "I look forward to ___ from you.",
              blanks: [["hearing"]],
              why: "Dans « look forward to », « to » est une préposition → verbe en -ing : hearing." },
            { text: "(after \"Dear Sir or Madam,\") Yours ___,",
              blanks: [["faithfully"]],
              why: "Règle britannique : « Yours faithfully » après « Dear Sir or Madam » ; « Yours sincerely » après un nom (« Dear Ms Taylor »)." }
          ]
        },
        // --------------------------------------------------------------- II
        {
          id: "grammar", num: "II", title: "Grammar – Structures of Politeness", titleFr: "Grammaire – les structures de la politesse",
          points: 15, skill: "gr", type: "fill",
          instructions: "A. Complete the sentences with the missing word(s). B. Rewrite the request in the register indicated: type only the missing word(s).",
          instructionsFr: "A. Complète les phrases avec le ou les mots manquants. B. Réécris la demande dans le registre indiqué : tape seulement le ou les mots manquants.",
          items: [
            { header: { en: "A. Polite structures", fr: "A. Structures polies" },
              text: "Would you mind ___ (close) the window? It's getting rather cold.",
              blanks: [["closing"]],
              why: "« Would you mind » est toujours suivi du -ing : Would you mind closing…?" },
            { text: "I would appreciate ___ if you could send me the invoice by Friday.",
              blanks: [["it"]],
              why: "« I'd appreciate IT if you could… » : le « it » est obligatoire (complément du verbe « appreciate »)." },
            { text: "I ___ (wonder) if you could possibly help me with this form.",
              blanks: [["was wondering", "am wondering", "were wondering"]],
              why: "« I was wondering if… » : le passé et la forme en -ing créent une distance polie, même pour une demande présente." },
            { text: "___ it be possible to move my appointment to Thursday?",
              blanks: [["would", "could"]],
              why: "« Would it be possible to…? » : tournure impersonnelle au conditionnel, très diplomate." },
            { text: "We sincerely apologise ___ any inconvenience this may cause.",
              blanks: [["for"]],
              why: "« apologise FOR something » : We apologise for the delay / for any inconvenience." },
            { text: "All applicants ___ (require) to provide two references.",
              blanks: [["are required"]],
              why: "Registre formel → passif : « Applicants are required to… » = les candidats doivent…" },
            { header: { en: "B. Change the register", fr: "B. Change de registre" },
              text: "Casual → Neutral: \"Can you send me the file?\" → \"___ you send me the file, please?\"",
              blanks: [["could", "would"]],
              why: "Neutral : « Could you…? » convient à presque tout le monde, inconnu comme collègue." },
            { text: "Neutral → Polite: \"Could you wait here?\" → \"Would you mind ___ here for a moment?\"",
              blanks: [["waiting"]],
              why: "Polite : « Would you mind + -ing ». On y répond « No, not at all » pour accepter." },
            { text: "Neutral → Formal: \"Please tell me the price.\" → \"I would be grateful if you could ___ me of the price.\"",
              blanks: [["inform", "advise", "notify"]],
              why: "Formal : « to inform someone OF something » (« tell » → « inform »)." },
            { text: "Formal → Casual: \"Thank you very much for your assistance.\" → \"___ for helping me out!\"",
              blanks: [["cheers", "thanks", "thanks a lot", "thanks so much"]],
              why: "Casual (britannique) : « Cheers for… » ou « Thanks for… » + « help out » (verbe à particule, familier)." },
            { text: "Casual → Formal: \"I'm gonna send it tomorrow.\" → \"I ___ send it tomorrow.\"",
              blanks: [["will", "shall", "am going to"]],
              why: "« gonna » est une forme orale familière, bannie de l'écrit professionnel : « I will send it tomorrow » (sans contraction)." },
            { text: "Casual → Formal: \"Sorry about the mix-up!\" → \"We sincerely ___ for the error.\"",
              blanks: [["apologise", "apologize"]],
              why: "« Sorry about… » (casual) → « We apologise for… » (formal). Orthographe US : apologize." }
          ]
        },
        // -------------------------------------------------------------- III
        {
          id: "mission", num: "III", title: "Mission – One Request, Four Registers", titleFr: "Mission – une demande, quatre registres",
          points: 10, skill: "ee", type: "ai-text",
          instructions: "Express the SAME request four times, adapting it to each person. Write one or two sentences for each register.",
          instructionsFr: "Exprime la MÊME demande quatre fois, en l'adaptant à chaque personne. Écris une ou deux phrases par registre.",
          quotes: ["The request: you need more time — you'd like to hand in your work next Monday instead of this Friday.", "1. Casual → a close friend who is helping you", "2. Neutral → a colleague you work with every day", "3. Polite → your line manager", "4. Formal → an external client you have never met (in writing)"],
          prompt: "Write your four versions, numbered 1 to 4.",
          promptFr: "Écris tes quatre versions, numérotées de 1 à 4.",
          minWords: 50,
          rubric: "Total 10 points: 2.5 points per version. For each version: (a) 1 pt — the register matches the person: casual (contractions, phrasal verbs, e.g. \"Any chance I could…?\", \"Can you give me till Monday?\", \"no worries\"); neutral (\"Could I…?\", \"Could you…?\"); polite (\"Would you mind if…\", \"I was wondering if…\", \"Would it be possible to…\"); formal (no contractions, formal vocabulary such as request / require / inform / extension, \"I would be grateful if…\", \"I would appreciate it if…\", \"at your earliest convenience\"); (b) 1 pt — the request is the same each time and is clear (more time, Monday instead of Friday), with a short reason where natural; (c) 0.5 pt — grammatical accuracy (would you mind + -ing, appreciate IT if, was wondering if…). Penalise register mismatch in both directions: a formal version to the friend is as wrong as \"gonna\" or \"ASAP\" to the client. The four versions must be clearly different from each other.",
          reference: "1. \"Hey, any chance you could give me till Monday? This week's been crazy!\" 2. \"Could I hand it in on Monday instead of Friday?\" 3. \"I was wondering if it would be possible to hand in the report on Monday rather than Friday.\" 4. \"I would be grateful if you could grant me a short extension until Monday. I apologise for any inconvenience this may cause.\""
        },
        // --------------------------------------------------------------- IV
        {
          id: "writing", num: "IV", title: "Writing – Same Situation, Two Registers", titleFr: "Expression écrite – même situation, deux registres",
          points: 20, skill: "ee", type: "ai-text",
          instructions: "Write TWO texts about the same situation: A. a formal e-mail (150 to 180 words); B. a casual message to a friend (40 to 60 words). Write \"A.\" and \"B.\" before each text.",
          instructionsFr: "Écris DEUX textes sur la même situation : A. un e-mail formel (150 à 180 mots) ; B. un message familier à un ami (40 à 60 mots). Écris « A. » et « B. » devant chaque texte.",
          prompt: "You booked and paid for a two-day training course in London. One week before the course, the organiser changed the dates, and you can no longer attend. A. Write to the course organiser (you don't know the name of the person in charge): explain the situation, request either a full refund or a place on a later course, and ask for a reply. B. Write to a friend who was going to put you up in London: tell them what happened and change your plans.",
          promptFr: "Tu as réservé et payé une formation de deux jours à Londres. Une semaine avant, l'organisateur a changé les dates et tu ne peux plus y assister. A. Écris à l'organisateur (tu ne connais pas le nom du responsable) : explique la situation, demande soit un remboursement intégral, soit une place dans une session ultérieure, et demande une réponse. B. Écris à un ami qui devait t'héberger à Londres : raconte ce qui s'est passé et modifie vos plans.",
          minWords: 190, maxWords: 250,
          rubric: "Total 20 points. (1) Formal e-mail — conventions and register (6 pts): correct opening (Dear Sir or Madam,), clear statement of purpose (I am writing to…), no contractions, no slang, formal vocabulary (request, inform, refund, attend, unfortunately, regret, inconvenience, at your earliest convenience), polite distance (I would be grateful if…, I would appreciate it if…, Would it be possible…), correct closing (I look forward to hearing from you. Yours faithfully, + name). Note: \"Yours faithfully\" is the British norm after \"Dear Sir or Madam\"; do not penalise \"Kind regards\" by more than 0.5 pt. (2) Formal e-mail — task (4 pts): explains the date change and why they cannot attend, requests a refund OR a place on a later course, asks for a reply; firm but courteous tone. (3) Casual message (4 pts): informal register clearly different from A — first name, contractions, phrasal verbs, casual expressions (Hey, gonna/wanna acceptable here, no worries, catch up, cheers, sort out…), tells the friend what happened and changes the plans (e.g. suggests another visit). (4) Accuracy (4 pts): B2 grammar and spelling across both texts (look forward to + -ing, apologise for, appreciate it if…, attend vs assist). (5) Length and organisation (2 pts): about 150-180 + 40-60 words, paragraphs in the e-mail. Major penalty (up to 4 pts) if the two texts use the same register.",
          reference: "A: \"Dear Sir or Madam, I am writing regarding my booking for the Project Management course (ref. 4521), originally scheduled for 12-13 May. I was informed last week that the course has been moved to 19-20 May. Unfortunately, I am unable to attend on these dates owing to professional commitments. I would therefore be grateful if you could either issue a full refund or offer me a place on a later session… I look forward to hearing from you at your earliest convenience. Yours faithfully, …\" B: \"Hi Sam! Bad news — they've moved my course, so I'm not coming down next week after all. So sorry! Can we sort out another weekend soon? I still wanna see your new flat. Cheers!\""
        },
        // ---------------------------------------------------------------- V
        {
          id: "reading", num: "V", title: "Reading Comprehension", titleFr: "Compréhension écrite",
          points: 15, skill: "ce", type: "mcq",
          instructions: "Read the text, then choose the right answer for each question.",
          instructionsFr: "Lis le texte, puis choisis la bonne réponse pour chaque question.",
          passage: "When Tomás moved from Madrid to London to work for a design agency, his English was excellent — on paper. Within a month, however, he had managed to upset both his manager and his most important client, and neither problem had anything to do with grammar.\n\nThe first incident happened on his second day. His manager, Helen, had sent a short message asking whether he could join a call at four. Tomás replied: \"I want to know the agenda first.\" He meant it as a perfectly reasonable question. Helen read it as a demand. A colleague later explained that \"Could you send me the agenda beforehand?\" would have caused no trouble at all.\n\nThe second incident was the opposite. Writing to a long-standing client who signed her e-mails \"Cheers, Kate\", Tomás began: \"Dear Madam, I am writing to inform you that your request has been duly received and will be processed in due course.\" Kate forwarded the e-mail to Helen with a single line: \"Is everything OK between us?\" The message had sounded so cold that she assumed the agency was unhappy with her.\n\nLooking back, Tomás says the lesson was simple but uncomfortable. \"I thought being formal was always the safe option. It isn't. The right register is the one that matches the relationship.\" He now reads the other person's message carefully before replying and mirrors its tone: informal with Kate, polite but friendly with Helen, and formal only with people he has never met.\n\nHis English hasn't changed much since then. His e-mails, on the other hand, have.",
          items: [
            { q: "What caused Tomás's problems at work?", qFr: "Qu'est-ce qui a causé les problèmes de Tomás au travail ?",
              opts: ["His grammar mistakes", "Choosing the wrong register", "His Spanish accent", "Missing important meetings"], correct: 1,
              why: "« neither problem had anything to do with grammar » : les deux incidents viennent d'un mauvais registre (trop direct, puis trop formel)." },
            { q: "Why was Helen annoyed by Tomás's reply?", qFr: "Pourquoi Helen a-t-elle été agacée par la réponse de Tomás ?",
              opts: ["He refused to join the call.", "\"I want…\" sounded like a demand rather than a request.", "He answered too late.", "He wrote in Spanish."], correct: 1,
              why: "« I want to know the agenda first » = trop direct ; « Could you send me the agenda beforehand? » aurait été neutre et poli." },
            { q: "Why did Kate ask whether everything was OK?", qFr: "Pourquoi Kate a-t-elle demandé si tout allait bien ?",
              opts: ["Tomás's e-mail was far too formal and sounded cold.", "Tomás had forgotten her order.", "Tomás had used slang.", "Helen had complained about her."], correct: 0,
              why: "« The message had sounded so cold that she assumed the agency was unhappy with her » : trop de formalité avec une cliente habituée au registre casual (« Cheers, Kate »)." },
            { q: "What does Tomás do now before replying to a message?", qFr: "Que fait Tomás aujourd'hui avant de répondre à un message ?",
              opts: ["He always writes formally, to be safe.", "He asks Helen to check it.", "He reads the other person's message and matches its tone.", "He only uses informal English."], correct: 2,
              why: "« He now reads the other person's message carefully… and mirrors its tone » : il s'aligne sur le registre de son interlocuteur." },
            { q: "\"His English hasn't changed much since then. His e-mails, on the other hand, have.\" This means that…", qFr: "« His English hasn't changed much since then. His e-mails, on the other hand, have. » Cela signifie que…",
              opts: ["his English has got worse.", "his level is the same, but he now adapts his register.", "he has stopped writing e-mails.", "his e-mails are now all formal."], correct: 1,
              why: "Son niveau n'a guère évolué, mais sa manière d'écrire (le registre) a changé : c'est tout le message du palier." }
          ]
        },
        // --------------------------------------------------------------- VI
        {
          id: "listening", num: "VI", title: "Listening Comprehension", titleFr: "Compréhension orale",
          points: 10, skill: "co", type: "mcq",
          instructions: "Listen to each recording (you can play it again), then choose the right answer.",
          instructionsFr: "Écoute chaque enregistrement (tu peux le réécouter), puis choisis la bonne réponse.",
          items: [
            { audio: "Hey, you got a sec? Can you help me out with this printer? It's jammed again, and I've got to print the slides before ten.",
              q: "Who is the speaker most probably talking to?", qFr: "À qui la personne parle-t-elle le plus probablement ?",
              opts: ["A colleague she knows well", "A client she has never met", "The company's director at an official event", "A customer service robot"], correct: 0,
              why: "« Hey, you got a sec? », « help me out », « got to » : registre casual, réservé à quelqu'un de proche." },
            { audio: "Good afternoon. I was wondering if it would be possible to speak to someone about my account. I seem to have been charged twice for the same order.",
              q: "What is the purpose of this call?", qFr: "Quel est l'objet de cet appel ?",
              opts: ["To place a new order", "To complain politely about a double payment", "To close an account angrily", "To ask for a job"], correct: 1,
              why: "« I was wondering if it would be possible… » (poli) + « charged twice for the same order » (le problème)." },
            { audio: "We regret to inform you that, owing to unforeseen circumstances, this evening's performance has been cancelled. All ticket holders will receive a full refund.",
              q: "What is happening?", qFr: "Que se passe-t-il ?",
              opts: ["The performance will start late.", "The performance is cancelled and tickets will be refunded.", "Tickets are no longer valid and cannot be refunded.", "The performance has moved to another theatre."], correct: 1,
              why: "« We regret to inform you… has been cancelled » + « will receive a full refund » : annonce formelle." },
            { audio: [{ who: "A", text: "Would you mind if I opened the window?" }, { who: "B", text: "No, not at all — go ahead." }],
              q: "How does the second speaker react?", qFr: "Comment réagit la deuxième personne ?",
              opts: ["She refuses.", "She agrees.", "She doesn't understand the question.", "She asks to close the door."], correct: 1,
              why: "« Would you mind…? » → « No, not at all » = non, ça ne me dérange pas → elle accepte (« go ahead »)." },
            { audio: [{ who: "A", text: "Morning! Cheers for covering for me yesterday." }, { who: "B", text: "No worries. Shall we catch up over lunch? I want to hear all about the interview." }],
              q: "What does the second speaker suggest?", qFr: "Que propose la deuxième personne ?",
              opts: ["Having lunch together to talk", "Covering for her again tomorrow", "Going to an interview together", "Working through lunch"], correct: 0,
              why: "« Shall we catch up over lunch? » = on se raconte tout pendant le déjeuner ? (« catch up » = prendre des nouvelles)." }
          ]
        },
        // -------------------------------------------------------------- VII
        {
          id: "speaking", num: "VII", title: "Speaking – Two Voicemails", titleFr: "Expression orale – deux messages vocaux",
          points: 15, skill: "eo", type: "ai-oral",
          instructions: "Press the microphone and leave TWO voicemail messages, one after the other (about ninety seconds in total). You can try again, or add to your answer. If the microphone doesn't work, type what you would say.",
          instructionsFr: "Appuie sur le micro et laisse DEUX messages vocaux, l'un après l'autre (environ une minute trente au total). Tu peux recommencer, ou compléter ta réponse. Si le micro ne fonctionne pas, écris ce que tu dirais.",
          prompt: "You can't come on Friday. Message 1: call a close friend — you were supposed to go to a concert together. Message 2: call the HR department of a company — you had a job interview on Friday and would like to reschedule it.",
          promptFr: "Tu ne peux pas venir vendredi. Message 1 : appelle un ami proche — vous deviez aller à un concert ensemble. Message 2 : appelle le service RH d'une entreprise — tu avais un entretien d'embauche vendredi et tu voudrais le reprogrammer.",
          minWords: 70, targetSeconds: 90,
          rubric: "Total 15 points. (1) Register contrast (6 pts): message 1 is clearly casual (Hey/Hi + first name, contractions, phrasal verbs, e.g. \"I can't make it\", \"so sorry\", \"let's catch up\", \"no worries\"); message 2 is clearly polite/formal (Good morning/afternoon, full name, \"I'm calling regarding…\", \"I was wondering if it would be possible to reschedule…\", \"I would be grateful if…\", \"I apologise for any inconvenience\", thanks and a way to be contacted). 3 pts per message. (2) Task (3 pts): both messages say they can't come on Friday, give a brief reason, and propose a solution (another date / call back). (3) Accuracy (3 pts): would you mind + -ing, was wondering if, appreciate it if, B2 grammar. (4) Fluency and pronunciation (3 pts): judged from the transcript — about ninety seconds ≈ 140-220 words, natural voicemail style, few recognition errors.",
          reference: "1: \"Hey Léa, it's me! Listen, I'm really sorry, but I can't make it on Friday — work's gone crazy. Can you take someone else? Let's catch up next week, OK? Bye!\" 2: \"Good morning, this is Julien Martin. I'm calling regarding my interview on Friday at ten. Unfortunately, I'm unable to attend owing to a family matter. I was wondering if it would be possible to reschedule it for early next week. I apologise for any inconvenience. You can reach me on… Thank you very much.\""
        }
      ]
    };

  E[43] = {
      code: "B2.4",
      title: "Level test: B2.4 – The Collocation Lab",
      titleFr: "Contrôle de niveau : B2.4 – Le laboratoire des collocations",
      objective: "Pass level B2.4 and move on to B2.5: choose the most natural word combinations (verb + noun, adjective + noun, adverb + adjective), avoid French calques, and use collocations accurately in writing and speech.",
      objectiveFr: "Valider le niveau B2.4 et passer au B2.5 : choisir les combinaisons de mots les plus naturelles (verbe + nom, adjectif + nom, adverbe + adjectif), éviter les calques du français et employer les collocations avec précision à l'écrit comme à l'oral.",
      sections: [
        // ---------------------------------------------------------------- I
        {
          id: "vocab", num: "I", title: "Vocabulary – Verb + Noun Collocations", titleFr: "Vocabulaire – collocations verbe + nom",
          points: 15, skill: "vo", type: "fill",
          instructions: "Complete each sentence with the right verb from the list, in the correct form. Each verb is used only once.",
          instructionsFr: "Complète chaque phrase avec le bon verbe de la liste, à la bonne forme. Chaque verbe ne sert qu'une fois.",
          bank: ["make", "do", "take", "keep", "set", "put", "raise", "reach", "pay", "draw", "meet", "run"],
          items: [
            { text: "After months of negotiation, the two sides finally ___ an agreement last night.",
              blanks: [["reached"]],
              why: "« reach an agreement » = parvenir à un accord. Au passé : reached. Jamais « arrive to an agreement »." },
            { text: "Could you ___ me a favour and water my plants while I'm away?",
              blanks: [["do"]],
              why: "« do somebody a favour » = rendre service : « do » pour les services et les tâches." },
            { text: "I've ___ a lot of progress since I started this course.",
              blanks: [["made"]],
              why: "« make progress » (indénombrable : jamais « a progress »). Present Perfect → made." },
            { text: "Nobody on the team was willing to ___ responsibility for the mistake.",
              blanks: [["take"]],
              why: "« take responsibility for » = assumer la responsabilité de." },
            { text: "Please ___ attention: the instructions have changed since last year.",
              blanks: [["pay"]],
              why: "« pay attention » = faire attention. Calque à éviter : « make attention »." },
            { text: "The campaign aims to ___ awareness of mental health at work.",
              blanks: [["raise"]],
              why: "« raise awareness of » = sensibiliser à. « raise » a un complément d'objet (≠ « rise »)." },
            { text: "We have to ___ the deadline, or we'll lose the contract.",
              blanks: [["meet"]],
              why: "« meet a deadline » = respecter un délai." },
            { text: "It's far too early to ___ any firm conclusions from these figures.",
              blanks: [["draw", "reach"]],
              why: "« draw a conclusion » = tirer une conclusion (« reach a conclusion » est aussi naturel)." },
            { text: "She ___ her own restaurant for ten years before she retired.",
              blanks: [["ran"]],
              why: "« run a business / a restaurant » = diriger, gérer. Passé irrégulier : run → ran." },
            { text: "It was lovely to meet you — let's ___ in touch!",
              blanks: [["keep", "stay"]],
              why: "« keep in touch » = rester en contact (« get in touch » = prendre contact)." },
            { text: "Don't ___ too much pressure on yourself before the interview.",
              blanks: [["put"]],
              why: "« put pressure on somebody » = mettre la pression sur quelqu'un." },
            { text: "At the start of each year, I ___ myself three realistic goals.",
              blanks: [["set"]],
              why: "« set (yourself) a goal » = se fixer un objectif. (« score a goal » = marquer un but.)" }
          ]
        },
        // --------------------------------------------------------------- II
        {
          id: "grammar", num: "II", title: "Grammar – Beyond Verbs", titleFr: "Grammaire – au-delà des verbes",
          points: 15, skill: "gr", type: "fill",
          instructions: "Complete each sentence with ONE word that forms a natural collocation.",
          instructionsFr: "Complète chaque phrase avec UN seul mot qui forme une collocation naturelle.",
          items: [
            { header: { en: "A. Adjective + noun", fr: "A. Adjectif + nom" },
              text: "We were delayed for an hour by ___ traffic on the motorway.",
              blanks: [["heavy"]],
              why: "« heavy traffic », comme « heavy rain » : « heavy » exprime l'intensité (jamais « strong traffic »)." },
            { text: "I need a really ___ coffee to wake up this morning.",
              blanks: [["strong"]],
              why: "« strong coffee » (et « strong wind », « a strong accent »)." },
            { text: "They're asking a very ___ price for such a small flat.",
              blanks: [["high"]],
              why: "« a high price » : le prix est « high », jamais « expensive » (c'est l'objet qui est expensive)." },
            { text: "Emma and I have been ___ friends since primary school.",
              blanks: [["close", "best", "good"]],
              why: "« close friends » = des amis proches (« near friends » n'existe pas)." },
            { header: { en: "B. Adverb + adjective", fr: "B. Adverbe + adjectif" },
              text: "I'm afraid it's ___ unlikely that the parcel will arrive before Friday.",
              blanks: [["highly", "very", "extremely"]],
              why: "« highly unlikely » = très peu probable. « strongly unlikely » n'existe pas." },
            { text: "The fans were ___ disappointed when the final was cancelled at the last minute.",
              blanks: [["bitterly", "deeply", "very", "extremely"]],
              why: "« bitterly disappointed » = profondément déçu(e) : plus naturel et plus fort que « very »." },
            { text: "The management is ___ aware of the problem and is taking action.",
              blanks: [["fully", "well", "very"]],
              why: "« fully aware » (ou « well aware ») = parfaitement conscient(e)." },
            { text: "This little hotel comes ___ recommended by everyone who has stayed there.",
              blanks: [["highly"]],
              why: "« highly recommended » = vivement recommandé : collocation figée." },
            { header: { en: "C. Prepositions and articles inside collocations", fr: "C. Prépositions et articles dans les collocations" },
              text: "More than two hundred people took part ___ the survey.",
              blanks: [["in"]],
              why: "« take part IN » (comme « participate in ») : jamais « participate to »." },
            { text: "Please take the extra costs ___ account before you decide.",
              blanks: [["into"]],
              why: "« take something into account » = prendre en compte ; l'objet se place au milieu." },
            { text: "The CEO refused to take responsibility ___ the delay.",
              blanks: [["for"]],
              why: "« take responsibility FOR », jamais « of »." },
            { text: "My manager gave me ___ very useful feedback on my presentation.",
              blanks: [["some"]],
              why: "« feedback » est indénombrable : « some feedback » / « a piece of feedback », jamais « a feedback »." }
          ]
        },
        // -------------------------------------------------------------- III
        {
          id: "calques", num: "III", title: "The Collocation Lab – Fix the Calques", titleFr: "Le labo des collocations – corrige les calques",
          points: 10, skill: "vo", type: "fill",
          instructions: "Each sentence contains a French-style collocation. Type the natural English version of the missing part.",
          instructionsFr: "Chaque phrase contient une collocation calquée sur le français. Tape la version anglaise naturelle de la partie manquante.",
          items: [
            { text: "\"I did a mistake in the report.\" → I ___ in the report.",
              blanks: [["made a mistake", "made an error"]],
              why: "« make a mistake » : on ne « do » jamais une erreur." },
            { text: "\"Can I take an appointment with the dentist?\" → Can I ___ with the dentist?",
              blanks: [["make an appointment", "book an appointment"]],
              why: "« prendre rendez-vous » = make (ou book) an appointment." },
            { text: "\"I'm going to participate to the meeting.\" → I'm going to ___ the meeting.",
              blanks: [["take part in", "participate in", "attend"]],
              why: "« take part in » / « participate in » ; et pour une réunion, « attend » (≠ « assist »)." },
            { text: "\"It doesn't have any sense.\" → It doesn't ___.",
              blanks: [["make sense", "make any sense"]],
              why: "« make sense » = avoir du sens. « have sense » est un calque." },
            { text: "\"We arrived to an agreement.\" → We ___.",
              blanks: [["reached an agreement", "came to an agreement"]],
              why: "« reach an agreement » (ou « come to an agreement »)." },
            { text: "\"Everyone must do an effort.\" → Everyone must ___.",
              blanks: [["make an effort"]],
              why: "« make an effort » : jamais « do an effort »." },
            { text: "\"There was a strong rain all weekend.\" → There was ___ all weekend.",
              blanks: [["heavy rain"]],
              why: "« heavy rain » (indénombrable, sans « a ») ; « strong » s'emploie pour le vent, pas pour la pluie." },
            { text: "\"Prices raised by 5% last year.\" → Prices ___ by 5% last year.",
              blanks: [["rose", "went up", "increased"]],
              why: "Sans complément d'objet → « rise » (rose, risen) ; « raise » exige un objet : « they raised prices »." }
          ]
        },
        // --------------------------------------------------------------- IV
        {
          id: "writing", num: "IV", title: "Writing – A Project Review E-mail", titleFr: "Expression écrite – un e-mail de bilan de projet",
          points: 20, skill: "ee", type: "ai-text",
          instructions: "Write a professional e-mail of 200 to 250 words, in a neutral-to-polite register. Use at least EIGHT different collocations from this level.",
          instructionsFr: "Rédige un e-mail professionnel de 200 à 250 mots, dans un registre neutre à poli. Utilise au moins HUIT collocations différentes de ce palier.",
          prompt: "Your team has just finished a project (real or imaginary). Write to your manager to review it: what progress was made, what mistakes or problems arose, what the team learned, and what action should be taken next time.",
          promptFr: "Ton équipe vient de terminer un projet (réel ou imaginaire). Écris à ton/ta manager pour en faire le bilan : les progrès réalisés, les erreurs ou problèmes rencontrés, ce que l'équipe a appris et les mesures à prendre la prochaine fois.",
          quotes: ["make progress · make a decision · make a mistake · make an effort · make a difference", "take action · take into account · take responsibility · take part in", "set a goal · meet a deadline · raise an issue · reach an agreement · give feedback · draw a conclusion"],
          minWords: 200, maxWords: 250,
          rubric: "Total 20 points. (1) Collocations (8 pts): at least eight DIFFERENT correct collocations from B2.4 (verb + noun such as make progress / a decision / an effort / a difference, take action / responsibility / into account / part in, set a goal, meet a deadline, raise an issue, reach an agreement, give feedback, draw a conclusion, run a project, pay attention, keep in touch; adjective + noun such as heavy workload, high cost, close cooperation; adverb + adjective such as highly effective, fully aware, deeply concerned). 1 pt per correct collocation up to 8; deduct 0.5 pt for each French calque (do a mistake, take a decision is acceptable but less natural, participate to, make a progress, a feedback, arrive to an agreement…). (2) Task (5 pts): progress made, problems or mistakes, lessons learned, recommendations for next time — all four covered. (3) Register and accuracy (4 pts): neutral-to-polite professional e-mail (appropriate greeting and closing, no slang, polite suggestions such as \"I would suggest…\", \"It might be worth…\"), B2 grammar (tenses, uncountable nouns: progress, feedback, advice). (4) Organisation (3 pts): clear paragraphs and linking words (however, as a result, therefore). Length: 200-250 words; deduct up to 2 pts if under 170 or over 300 words.",
          reference: "Example sentences: \"Overall, we made significant progress and managed to meet the deadline.\" / \"However, we made a few mistakes in the planning phase and did not take the suppliers' delays into account.\" / \"Several team members raised the issue of workload.\" / \"Next time, I would suggest setting clearer goals and taking action earlier.\" / \"Your feedback made a real difference.\""
        },
        // ---------------------------------------------------------------- V
        {
          id: "reading", num: "V", title: "Reading Comprehension", titleFr: "Compréhension écrite",
          points: 15, skill: "ce", type: "mcq",
          instructions: "Read the article, then choose the right answer for each question.",
          instructionsFr: "Lis l'article, puis choisis la bonne réponse pour chaque question.",
          passage: "When the council announced that Hollings Green library would close at the end of the year, few residents believed they could do anything about it. The decision had been made, the budget had been cut, and the building was already up for sale.\n\nMargaret Owusu, a retired teacher, refused to accept it. She set up a small action group, and within a month more than two hundred people had taken part in a public meeting. \"We weren't trying to put pressure on the council for the sake of it,\" she explains. \"We simply wanted them to take our needs into account.\"\n\nThe group ran a campaign to raise awareness of what the library actually offered: not just books, but free internet access for job seekers, a homework club and the only warm, quiet space in town for many older residents. Local businesses gave their support, and an online fundraising page reached its target in six weeks.\n\nProgress was slow at first. The council raised several issues, including insurance and staffing, and the talks nearly broke down twice. Nevertheless, both sides made an effort to find common ground, and in March they finally reached an agreement: volunteers would run the library three days a week, while the council would keep paying for heating and repairs.\n\nA year later, visitor numbers have risen by forty per cent. \"It's made a real difference to people's lives,\" Margaret says. \"But the lesson is that you have to take action early. Once a building has been sold, it's gone for good.\"",
          items: [
            { q: "How did most residents react to the council's announcement at first?", qFr: "Comment la plupart des habitants ont-ils réagi à l'annonce du conseil au début ?",
              opts: ["They immediately organised a protest.", "They thought nothing could be done.", "They offered to buy the building.", "They were pleased with the decision."], correct: 1,
              why: "« few residents believed they could do anything about it » : « few » (sans « a ») = très peu, sens négatif." },
            { q: "What did Margaret's group want from the council?", qFr: "Qu'attendait le groupe de Margaret de la part du conseil ?",
              opts: ["To take residents' needs into account", "To pay the volunteers", "To build a new library", "To lower local taxes"], correct: 0,
              why: "« We simply wanted them to take our needs into account » = prendre nos besoins en compte." },
            { q: "Which service is NOT mentioned as part of what the library offered?", qFr: "Quel service n'est PAS cité parmi ce que proposait la bibliothèque ?",
              opts: ["Free internet access for job seekers", "A homework club", "Language classes for adults", "A warm, quiet space for older residents"], correct: 2,
              why: "Le texte cite l'accès internet, le club de devoirs et un espace chauffé et calme — pas de cours de langues." },
            { q: "What was agreed in March?", qFr: "Qu'a-t-on convenu en mars ?",
              opts: ["The council would reopen the library full-time.", "Volunteers would run the library three days a week, and the council would pay for heating and repairs.", "The library would be sold to local businesses.", "The action group would buy the building."], correct: 1,
              why: "« volunteers would run the library three days a week, while the council would keep paying for heating and repairs » (« reach an agreement »)." },
            { q: "What is Margaret's main advice?", qFr: "Quel est le principal conseil de Margaret ?",
              opts: ["Never trust the council.", "Raise as much money as possible online.", "Act early, before it is too late.", "Let volunteers run every public service."], correct: 2,
              why: "« you have to take action early. Once a building has been sold, it's gone for good » = agir tôt, avant qu'il ne soit trop tard." }
          ]
        },
        // --------------------------------------------------------------- VI
        {
          id: "listening", num: "VI", title: "Listening Comprehension", titleFr: "Compréhension orale",
          points: 10, skill: "co", type: "mcq",
          instructions: "Listen to each recording (you can play it again), then choose the right answer.",
          instructionsFr: "Écoute chaque enregistrement (tu peux le réécouter), puis choisis la bonne réponse.",
          items: [
            { audio: "I know you're really busy, but could you take a quick look at my presentation? I'd really appreciate some feedback before tomorrow's meeting.",
              q: "What is the speaker asking for?", qFr: "Que demande la personne ?",
              opts: ["Help to write the presentation from scratch", "Comments on her presentation before the meeting", "To cancel tomorrow's meeting", "To give the presentation instead of her"], correct: 1,
              why: "« take a quick look » = jeter un œil ; « some feedback » = un retour, des commentaires." },
            { audio: [{ who: "A", text: "Have we made any progress with the supplier?" }, { who: "B", text: "Some. We haven't reached an agreement yet, but they've agreed to lower the delivery costs." }],
              q: "What is the situation with the supplier?", qFr: "Où en est-on avec le fournisseur ?",
              opts: ["A final agreement has been signed.", "Talks have completely broken down.", "There has been some progress, but no final agreement.", "The supplier has raised its prices."], correct: 2,
              why: "« We haven't reached an agreement yet » mais « they've agreed to lower the delivery costs » : un progrès partiel." },
            { audio: "If you get the chance, take part in the charity run on Sunday. Last year it raised over ten thousand pounds for the local hospital.",
              q: "What does the speaker suggest?", qFr: "Que suggère la personne ?",
              opts: ["Taking part in a charity run", "Visiting the hospital on Sunday", "Giving ten thousand pounds", "Organising a new race"], correct: 0,
              why: "« take part in the charity run » = participer à la course caritative ; « if you get the chance » = si tu en as l'occasion." },
            { audio: [{ who: "A", text: "I'm so sorry — I completely forgot to book the meeting room." }, { who: "B", text: "Don't worry, everyone makes mistakes. Just make sure you do it today." }],
              q: "How does the second speaker react?", qFr: "Comment réagit la deuxième personne ?",
              opts: ["She is furious and books it herself.", "She is understanding but asks for the room to be booked today.", "She cancels the meeting.", "She says it doesn't matter at all."], correct: 1,
              why: "« everyone makes mistakes » (compréhensive) + « Just make sure you do it today » (mais il faut le faire aujourd'hui)." },
            { audio: "We need to take action now. If we don't meet the deadline, the client will run out of patience and take their business elsewhere.",
              q: "What is the risk, according to the speaker?", qFr: "Quel est le risque, selon la personne ?",
              opts: ["Losing the client", "Paying a fine", "Running out of money", "Having to work at the weekend"], correct: 0,
              why: "« take their business elsewhere » = aller voir la concurrence : on risque de perdre le client si on ne respecte pas le délai (« meet the deadline »)." }
          ]
        },
        // -------------------------------------------------------------- VII
        {
          id: "speaking", num: "VII", title: "Speaking – A Goal You Set Yourself", titleFr: "Expression orale – un objectif que tu t'es fixé",
          points: 15, skill: "eo", type: "ai-oral",
          instructions: "Press the microphone and speak for about ninety seconds. You can try again, or add to your answer. If the microphone doesn't work, type what you would say.",
          instructionsFr: "Appuie sur le micro et parle environ une minute trente. Tu peux recommencer, ou compléter ta réponse. Si le micro ne fonctionne pas, écris ce que tu dirais.",
          prompt: "Talk about a goal you set yourself (learning English, sport, work, a personal project…): why you set it, the progress you have made, the mistakes you made along the way, and what made a real difference. Use at least six different collocations.",
          promptFr: "Parle d'un objectif que tu t'es fixé (apprendre l'anglais, le sport, le travail, un projet personnel…) : pourquoi tu te l'es fixé, les progrès que tu as faits, les erreurs commises en chemin et ce qui a vraiment fait la différence. Utilise au moins six collocations différentes.",
          minWords: 70, targetSeconds: 90,
          rubric: "Total 15 points. (1) Collocations (6 pts): at least six different natural collocations used correctly (set a goal, make progress, make a mistake, make an effort, make a decision, make a difference, take a break, take part in, take action, pay attention, keep in touch, have a go, reach a goal, highly motivated, heavy workload…); 1 pt each up to 6; deduct 0.5 pt per French calque (do a mistake, make a progress, participate to…). (2) Content (3 pts): the goal, the reason, progress, mistakes and what made a difference are all mentioned. (3) Grammar (3 pts): correct tenses (Present Perfect for progress so far, Past Simple for specific events), B2 accuracy. (4) Fluency and pronunciation (3 pts): judged from the transcript — about ninety seconds ≈ 140-220 words, natural connected sentences, few recognition errors.",
          reference: "Example: \"Two years ago I set myself a goal: to run a half-marathon. At first I made a lot of mistakes — I didn't take enough breaks and I didn't pay attention to my diet. But I made an effort to train three times a week, and I took part in a running club. What really made a difference was the feedback from the coach. I've made a lot of progress, and last spring I finally reached my goal.\""
        }
      ]
    };

  E[44] = {
    code: "B2.5",
    title: "Level test: B2.5 – Sound Like English",
    titleFr: "Contrôle de niveau : B2.5 – Sonner vraiment anglais",
    objective: "Pass level B2.5 and move on to B2.6: understand English as it is really spoken — reduced forms, weak forms, linking, word and sentence stress, rhythm and intonation — through vocabulary, verb forms, reading, listening, writing and speaking.",
    objectiveFr: "Valider le niveau B2.5 et passer au B2.6 : comprendre l'anglais tel qu'il est réellement prononcé — formes réduites, formes faibles, liaisons, accent de mot et de phrase, rythme et intonation — à travers le vocabulaire, la conjugaison, la compréhension écrite et orale, l'expression écrite et orale.",
    sections: [
      // ---------------------------------------------------------------- I
      {
        id: "vocab", num: "I", title: "Vocabulary – Talking About Pronunciation", titleFr: "Vocabulaire – parler de la prononciation",
        points: 10, skill: "vo", type: "fill",
        instructions: "Complete each sentence with a word or expression from the list. Change the form if necessary. Some words are not used.",
        instructionsFr: "Complète chaque phrase avec un mot ou une expression de la liste. Change la forme si nécessaire. Certains mots ne sont pas utilisés.",
        bank: ["schwa", "weak form", "strong form", "stress-timed", "syllable-timed", "content word", "linking", "intonation", "drop", "catch", "stress", "accent"],
        items: [
          { text: "The ___ /ə/ is the most common vowel sound in English: you hear it in \"a\", \"to\", \"of\" and in the first syllable of \"about\".",
            blanks: [["schwa"]],
            why: "« the schwa » = la voyelle neutre /ə/, non accentuée. C'est le son le plus fréquent de l'anglais parlé." },
          { text: "In \"a cup of tea\", \"of\" is pronounced /əv/ or just /ə/: this is its ___.",
            blanks: [["weak form"]],
            why: "« weak form » = la prononciation réduite, avec schwa, d'un petit mot grammatical non accentué." },
          { text: "English is a ___ language: the stressed syllables come at regular intervals, like the beat of a song.",
            blanks: [["stress-timed", "stress timed"]],
            why: "« stress-timed » = rythme accentuel (anglais). Le français est « syllable-timed » : chaque syllabe a presque la même durée." },
          { text: "French, by contrast, is ___: every syllable has roughly the same length.",
            blanks: [["syllable-timed", "syllable timed"]],
            why: "« syllable-timed » = rythme syllabique, d'où l'impression d'un anglais « martelé » chez les francophones." },
          { text: "Nouns, main verbs and adjectives are called ___: they carry the meaning and are usually stressed.",
            blanks: [["content words", "content word"]],
            why: "« content words » = les mots porteurs de sens (noms, verbes, adjectifs, adverbes), accentués ; les « function words » se réduisent." },
          { text: "In \"turn it off\", the final consonant of each word joins the next vowel. This is called ___.",
            blanks: [["linking"]],
            why: "« linking » = l'enchaînement consonne + voyelle : « turn it off » sonne comme « tur-ni-toff »." },
          { text: "Native speakers often ___ the /t/ in \"next door\", so it sounds like \"nex door\".",
            blanks: [["drop"]],
            why: "« to drop a sound » = avaler, laisser tomber un son (élision). Après le sujet « speakers », présent simple sans -s." },
          { text: "Sorry, I didn't ___ what you said. The music is too loud.",
            blanks: [["catch"]],
            why: "« to catch » = saisir, comprendre à l'oral. Après « didn't », base verbale." },
          { text: "In \"Are you coming?\", the voice goes up at the end: this rising ___ shows it's a yes/no question.",
            blanks: [["intonation"]],
            why: "« intonation » = la mélodie de la phrase : montante pour une question fermée, descendante pour une affirmation ou une question en wh-." },
          { text: "To correct someone, you can ___ the key word: \"No, I said THURSDAY, not Tuesday.\"",
            blanks: [["stress"]],
            why: "« to stress a word » = insister sur un mot (accent contrastif). Faux ami partiel : ici « stress » ne veut pas dire « stresser »." }
        ]
      },
      // --------------------------------------------------------------- II
      {
        id: "verbs", num: "II", title: "Verb Forms – Decode the Spoken Form", titleFr: "Conjugaison – décode la forme orale",
        points: 15, skill: "cj", type: "fill",
        instructions: "Each sentence was said in fast, natural English. Write the full verb form you would use in careful written English. The verb in brackets gives you the base form.",
        instructionsFr: "Chaque phrase a été dite en anglais rapide et naturel. Écris la forme verbale complète que tu utiliserais à l'écrit soigné. Le verbe entre parenthèses donne la base verbale.",
        items: [
          { text: "Heard: \"Didja finish the report?\" → Written: \"___ you ___ (finish) the report?\"",
            blanks: [["Did"], ["finish"]],
            why: "« didja » = Did you (assimilation /d/ + /j/ → /dʒ/). Question au Past Simple : Did + sujet + base verbale." },
          { text: "Heard: \"Whatcha doing tonight?\" → Written: \"What ___ you ___ (do) tonight?\"",
            blanks: [["are"], ["doing"]],
            why: "« whatcha » = What are you. Present Continuous (are + -ing), ici pour un projet ce soir." },
          { text: "Heard: \"I'm gonna call her later.\" → Written: \"I ___ (call) her later.\"",
            blanks: [["am going to call"]],
            why: "« gonna » = going to, uniquement devant un verbe : am going to + base verbale (intention)." },
          { text: "Heard: \"She hasta leave at six.\" → Written: \"She ___ (leave) at six.\"",
            blanks: [["has to leave"]],
            why: "« hasta » = has to (/v/ → /f/, /z/ → /s/ devant /t/). À la 3e personne : has to + base verbale." },
          { text: "Heard: \"I've gotta go.\" → Written: \"I ___ (go).\"",
            blanks: [["have got to go", "have to go"]],
            why: "« gotta » = got to : « I've gotta » = I have got to (= I have to) + base verbale." },
          { text: "Heard: \"We wanna try the new place.\" → Written: \"We ___ (try) the new place.\"",
            blanks: [["want to try"]],
            why: "« wanna » = want to, seulement avec I/you/we/they. Avec « he/she », on garde « wants to » (jamais « he wanna »)." },
          { text: "Heard: \"Where've ya been?\" → Written: \"Where ___ you ___ (be)?\"",
            blanks: [["have"], ["been"]],
            why: "« Where've ya been? » = Where have you been? Present Perfect : have + participe passé (be → been)." },
          { text: "Heard: \"I shoulda told you.\" → Written: \"I ___ (tell) you.\"",
            blanks: [["should have told"]],
            why: "« shoulda » = should have (have réduit en /ə/). Regret sur le passé : should have + participe passé (tell → told)." },
          { text: "Heard: \"I was gonna ring you, but my phone died.\" → Written: \"I ___ (ring) you, but my phone died.\"",
            blanks: [["was going to ring"]],
            why: "« was gonna » = was going to : futur dans le passé, une intention qui ne s'est pas réalisée." },
          { text: "Heard: \"She's been workin' here for ages.\" → Written: \"She ___ (work) here for ages.\"",
            blanks: [["has been working"]],
            why: "« She's been » = She has been (pas « she is »). Present Perfect Continuous + « for » : action commencée dans le passé et toujours en cours." }
        ]
      },
      // -------------------------------------------------------------- III
      {
        id: "stress", num: "III", title: "Grammar of Speech – Stress & Weak Forms", titleFr: "La grammaire de l'oral – accent et formes faibles",
        points: 15, skill: "gr", type: "fill",
        instructions: "A. Type the stressed syllable of the word (e.g. ba-NA-na → na). B. Say whether the word in CAPITALS is pronounced with its WEAK or STRONG form. C. Say whether the intonation goes UP or DOWN at the end.",
        instructionsFr: "A. Tape la syllabe accentuée du mot (ex. ba-NA-na → na). B. Dis si le mot en MAJUSCULES se prononce avec sa forme faible (weak) ou forte (strong). C. Dis si l'intonation monte (up) ou descend (down) à la fin.",
        items: [
          { header: { en: "A. Word stress: type the stressed syllable", fr: "A. Accent de mot : tape la syllabe accentuée" },
            text: "photograph (pho-to-graph) → stressed syllable: ___",
            blanks: [["pho"]],
            why: "PHOtograph : accent sur la 1re syllabe. Les deux autres se réduisent (/ˈfəʊtəɡrɑːf/)." },
          { text: "photography (pho-to-gra-phy) → stressed syllable: ___",
            blanks: [["to"]],
            why: "phoTOgraphy : avec le suffixe -graphy, l'accent se place sur l'antépénultième syllabe (/fəˈtɒɡrəfi/)." },
          { text: "a record (noun: re-cord) → stressed syllable: ___",
            blanks: [["re"]],
            why: "Nom/verbe de deux syllabes : le NOM est accentué sur la 1re (a REcord), le VERBE sur la 2e (to reCORD)." },
          { text: "to present (verb: pre-sent) → stressed syllable: ___",
            blanks: [["sent"]],
            why: "Verbe → accent sur la 2e syllabe : to preSENT. Le nom et l'adjectif, eux, sont accentués sur la 1re (a PREsent)." },
          { header: { en: "B. Weak or strong form? (type weak or strong)", fr: "B. Forme faible ou forte ? (tape weak ou strong)" },
            text: "\"I need TO go now.\" → \"to\" is ___",
            blanks: [["weak"]],
            why: "Au milieu de la phrase, devant une consonne et non accentué, « to » prend sa forme faible /tə/." },
          { text: "\"I'd love TO.\" → \"to\" is ___",
            blanks: [["strong"]],
            why: "En fin de phrase, un function word reprend sa forme forte : « I'd love to » → /tuː/." },
          { text: "\"Who is this present FOR?\" → \"for\" is ___",
            blanks: [["strong"]],
            why: "Préposition en fin de question → forme forte /fɔː/ (même règle que « What are you looking at? »)." },
          { text: "\"Yes, I CAN.\" (short answer) → \"can\" is ___",
            blanks: [["strong"]],
            why: "Réponse courte : « can » est accentué, forme forte /kæn/. Dans « I can swim », il est faible : /kən/." },
          { header: { en: "C. Intonation: type up or down", fr: "C. Intonation : tape up ou down" },
            text: "\"Where do you live?\" → the voice goes ___",
            blanks: [["down"]],
            why: "Question ouverte en wh- (where, what, who…) → intonation descendante." },
          { text: "\"Do you live near here?\" → the voice goes ___",
            blanks: [["up"]],
            why: "Question fermée (réponse yes/no) → intonation montante à la fin." }
        ]
      },
      // --------------------------------------------------------------- IV
      {
        id: "writing", num: "IV", title: "Writing – Advice for a Fellow Learner", titleFr: "Expression écrite – des conseils à un autre apprenant",
        points: 15, skill: "ee", type: "ai-text",
        instructions: "Write an email of 150 to 200 words in a neutral, friendly register. Give at least TWO concrete examples of connected speech (reduced forms, weak forms or linking).",
        instructionsFr: "Écris un e-mail de 150 à 200 mots dans un registre neutre et amical. Donne au moins DEUX exemples concrets de discours connecté (formes réduites, formes faibles ou liaisons).",
        prompt: "An English-speaking friend, Liam, is learning French. He writes to you: \"You speak English so well — how did you learn to understand native speakers? They always seem to talk so fast!\" Reply to Liam. Explain why spoken English sounds different from written English, give examples of what happens in fast speech, and suggest three practical ways to improve listening skills.",
        promptFr: "Un ami anglophone, Liam, apprend le français. Il t'écrit : « Tu parles si bien anglais — comment as-tu appris à comprendre les natifs ? Ils ont toujours l'air de parler si vite ! » Réponds à Liam. Explique pourquoi l'anglais parlé ne ressemble pas à l'anglais écrit, donne des exemples de ce qui se passe quand on parle vite et propose trois façons concrètes d'améliorer la compréhension orale.",
        minWords: 150, maxWords: 200,
        rubric: "Total 15 points. Task achievement (4 pts): explains why spoken English differs from written English (reductions, weak forms, linking, stress-timed rhythm) AND suggests three practical tips. Content accuracy (3 pts): at least two correct examples of connected speech (e.g. going to → gonna, did you → didja, a cup of tea → a cuppa, turn it off → tur-ni-toff, 'to' → /tə/); lose 1.5 pts per missing or wrong example. Grammar & verb forms (3 pts): B2 accuracy, a range of tenses (Present Perfect for experience, e.g. 'I've learnt that…'), modals for advice (should, could, it might be worth…). Vocabulary (3 pts): B2.5 vocabulary used precisely (stress, schwa, weak form, linking, content words, catch, drop…). Organisation & register (2 pts): email format, paragraphs, friendly neutral tone. Length: 150-200 words; deduct up to 2 points if under 120 or over 250 words.",
        reference: "Model elements: \"The problem isn't really speed. In spoken English, small words like 'to' and 'of' are reduced to a schwa, so 'I'm going to have a cup of tea' sounds like 'I'm gonna have a cuppa tea'. Words are also linked: 'turn it off' sounds like one word.\" Tips: listen for the stressed words first; shadow short podcast extracts; watch series with English subtitles; tap the rhythm."
      },
      // ---------------------------------------------------------------- V
      {
        id: "reading", num: "V", title: "Reading Comprehension", titleFr: "Compréhension écrite",
        points: 15, skill: "ce", type: "mcq",
        instructions: "Read the text, then choose the right answer for each question.",
        instructionsFr: "Lis le texte, puis choisis la bonne réponse pour chaque question.",
        passage: "When Julien started working for a logistics company in Manchester, he was confident about his English. He had a B2 certificate, he wrote excellent emails and he could discuss almost any topic in a meeting. Phone calls, however, were a different story. On the phone, his colleagues seemed to swallow half their words, and he often had to ask them to repeat themselves two or three times.\n\nThe turning point came when a colleague, Priya, recorded herself reading a short paragraph twice: once slowly and carefully, and once at normal speed. On paper the two versions were identical, but they sounded like two different languages. In the fast version, \"What are you going to do?\" had become something like \"Whatcha gonna do?\", and \"a lot of\" had shrunk to \"a lotta\". \"We're not being lazy,\" Priya laughed. \"This is simply how English is spoken.\"\n\nJulien decided to change the way he practised. Instead of trying to hear every single word, he trained himself to listen for the stressed ones — the nouns, verbs and adjectives that carry the message. He also started \"shadowing\": playing a short extract from a podcast and repeating it at the same time as the speaker, copying the rhythm rather than the individual sounds.\n\nThe results surprised him. Within two months, he was following phone calls without difficulty, and his own speech had become more natural. His manager even remarked that he sounded \"far more relaxed\". Julien still pronounces \"to\" and \"for\" in full when he wants to be especially clear, but he now understands something important: being understood depends less on pronouncing every sound perfectly than on getting the rhythm and the stress right.",
        items: [
          { q: "What was Julien's problem when he arrived in Manchester?", qFr: "Quel était le problème de Julien à son arrivée à Manchester ?",
            opts: ["His written English was weak.", "He couldn't take part in meetings.", "He didn't have an English certificate.", "He found it hard to understand people on the phone."], correct: 3,
            why: "Il écrivait très bien et participait aux réunions, mais « Phone calls, however, were a different story » : au téléphone, il ne comprenait pas tout." },
          { q: "What did Priya's recording show?", qFr: "Qu'a montré l'enregistrement de Priya ?",
            opts: ["The same text can sound very different at normal speed.", "Priya was a lazy speaker.", "Written and spoken English use different words.", "Slow speech is easier to record."], correct: 0,
            why: "« On paper the two versions were identical, but they sounded like two different languages » : c'est le discours connecté, pas un autre vocabulaire." },
          { q: "What does Priya mean by \"We're not being lazy\"?", qFr: "Que veut dire Priya par « We're not being lazy » ?",
            opts: ["She is apologising for speaking badly.", "Reduced forms are a normal feature of standard spoken English.", "She will speak more slowly in future.", "Julien should work harder."], correct: 1,
            why: "« This is simply how English is spoken » : les formes réduites sont l'anglais standard parlé, pas une paresse ni une faute." },
          { q: "What was the key change in Julien's listening strategy?", qFr: "Quel a été le changement clé dans la stratégie d'écoute de Julien ?",
            opts: ["He tried harder to hear every word.", "He asked colleagues to speak more slowly.", "He focused on the stressed words that carry the meaning.", "He stopped listening to podcasts."], correct: 2,
            why: "« Instead of trying to hear every single word, he trained himself to listen for the stressed ones » : les content words portent le message." },
          { q: "What is the main lesson of the text?", qFr: "Quelle est la principale leçon du texte ?",
            opts: ["Rhythm and stress matter more than perfect individual sounds.", "You must use reduced forms in every situation.", "Only native speakers can understand phone calls.", "A B2 certificate guarantees good listening skills."], correct: 0,
            why: "Dernière phrase : être compris dépend moins de chaque son parfait que du bon rythme et du bon accent." }
        ]
      },
      // --------------------------------------------------------------- VI
      {
        id: "listening", num: "VI", title: "Listening Comprehension – Connected Speech", titleFr: "Compréhension orale – le discours connecté",
        points: 15, skill: "co", type: "mcq",
        instructions: "Listen to each recording in natural, connected English (you can play it again). Focus on the stressed words, then choose the right answer.",
        instructionsFr: "Écoute chaque enregistrement en anglais naturel et enchaîné (tu peux le réécouter). Concentre-toi sur les mots accentués, puis choisis la bonne réponse.",
        items: [
          { audio: [{ who: "A", text: "Whatcha doing after work? D'you wanna grab a bite? There's a new Thai place next door." }, { who: "B", text: "I'd love to, but I've gotta finish this report for the boss. I'm gonna be here till seven at least." }, { who: "A", text: "Shame. Maybe tomorrow, then?" }, { who: "B", text: "Yeah, go on — tomorrow's perfect." }],
            q: "Why can't B go out after work?", qFr: "Pourquoi B ne peut-il pas sortir après le travail ?",
            opts: ["B isn't hungry.", "B has to finish a report.", "B is going home at seven.", "B doesn't like A."], correct: 1,
            why: "« I've gotta finish this report » = I have got to finish : il doit terminer un rapport, il restera jusqu'à 19 h." },
          { audio: [{ who: "A", text: "Right, so you're meeting the clients on Tuesday, and then you're flying to Dublin?" }, { who: "B", text: "No, I'm meeting them on THURSDAY. It's the suppliers I'm seeing on Tuesday. And I'm not flying — I'm taking the ferry." }, { who: "A", text: "Ah, sorry, I must've got it mixed up." }],
            q: "Why does B stress the word \"Thursday\"?", qFr: "Pourquoi B accentue-t-il le mot « Thursday » ?",
            opts: ["To correct wrong information", "To ask a question", "Because B is angry", "Because it's the first word of the sentence"], correct: 0,
            why: "Accent contrastif : on déplace l'accent sur le mot qui corrige l'erreur (Tuesday → THURSDAY)." },
          { audio: "Hi, it's me. Didja see the message from Tom? He's gotta cancel tomorrow's meeting — his daughter's school called and he has to pick her up. So we're gonna move it to next week, probably Wednesday. I'll send you the new time as soon as I've checked with everyone.",
            q: "What is going to happen to the meeting?", qFr: "Que va-t-il se passer pour la réunion ?",
            opts: ["It will take place tomorrow as planned.", "Tom will lead it.", "It will be moved to next week.", "It has been cancelled for good."], correct: 2,
            why: "« He's gotta cancel tomorrow's meeting, so we're gonna move it to next week » : elle est reportée, pas annulée définitivement." },
          { audio: [{ who: "A", text: "Can you turn it off? It's far too loud, and I need to get up early." }, { who: "B", text: "Sure. I'll put it on next door, then. The kids are asleep over there, aren't they?" }, { who: "A", text: "No, they're at their gran's tonight. She's taking them to the zoo in the morning." }, { who: "B", text: "Oh, lucky them!" }],
            q: "Where are the children tonight?", qFr: "Où sont les enfants ce soir ?",
            opts: ["Asleep next door", "At their grandmother's", "Watching TV", "At a friend's party"], correct: 1,
            why: "« they're at their gran's » = chez leur grand-mère (gran = granny). Attention aux liaisons : « turn it off », « put it on »." },
          { audio: "Sorry, I was gonna call you yesterday, but I didn't have time — it was one of those days. Anyway, the good news is we don't hafta send the report till Friday, so there's no need to panic. Let's have a look at it together on Wednesday morning.",
            q: "What is the good news?", qFr: "Quelle est la bonne nouvelle ?",
            opts: ["The speaker called yesterday.", "The report must be sent today.", "The deadline for the report is Friday.", "There is no report to write."], correct: 2,
            why: "« we don't hafta send the report till Friday » = we don't have to… until Friday : le rapport n'est à rendre que vendredi." }
        ]
      },
      // -------------------------------------------------------------- VII
      {
        id: "speaking", num: "VII", title: "Speaking – Rhythm and Stress", titleFr: "Expression orale – rythme et accent",
        points: 15, skill: "eo", type: "ai-oral",
        instructions: "Press the microphone and speak for about one and a half minutes. First read the three sentences aloud naturally, then answer the question. If the microphone doesn't work, type what you would say.",
        instructionsFr: "Appuie sur le micro et parle environ une minute et demie. Lis d'abord les trois phrases à voix haute, naturellement, puis réponds à la question. Si le micro ne fonctionne pas, écris ce que tu dirais.",
        quotes: [
          "1. I'm going to have a cup of tea and a piece of cake.",
          "2. No, I didn't say Tuesday — I said Thursday.",
          "3. Could you turn it off? I need to get up early."
        ],
        prompt: "Read the three sentences aloud with natural rhythm, weak forms and linking. Then answer this question: \"What is the most difficult thing for you when you listen to English, and what are you going to do to improve?\"",
        promptFr: "Lis les trois phrases à voix haute avec un rythme naturel, des formes faibles et des liaisons. Puis réponds à la question : « Qu'est-ce qui est le plus difficile pour toi quand tu écoutes de l'anglais, et que vas-tu faire pour progresser ? »",
        minWords: 70, targetSeconds: 90,
        rubric: "Total 15 points. Reading aloud (5 pts): the three sentences are all read; judged from the transcript and recognition confidence — words recognised correctly and in the right order suggest clear pronunciation; contrastive stress on 'Thursday' in sentence 2 is a plus if perceptible. Task (4 pts): a clear answer naming a real listening difficulty (speed, reduced forms, accents, phone calls…) AND at least one concrete plan with a future form. Grammar & vocabulary (3 pts): B2 accuracy, correct future forms (going to / will / Present Continuous), B2.5 vocabulary (stress, rhythm, weak forms, linking, catch, connected speech…). Fluency and pronunciation (3 pts): about 90 seconds ≈ 140-220 words in total, natural flow; recognition errors suggesting mispronounced words (e.g. 'Thursday' / 'Tuesday', 'cup of tea') lower this score — mention them.",
        reference: "Example answer: \"For me, the hardest thing is phone calls, because people link their words and I can't always catch the small words. I'm going to listen to short podcasts every day and focus on the stressed words, and I'll try shadowing to copy the rhythm.\""
      }
    ]
  };

  E[45] = {
    code: "B2.6",
    title: "Level test: B2.6 – Diplomatic English",
    titleFr: "Contrôle de niveau : B2.6 – L'anglais diplomatique",
    objective: "Pass level B2.6 and move on to B2.7: disagree without creating unnecessary conflict — tactful expressions, softening verb forms and structures, from direct to diplomatic, reading, listening, writing and speaking.",
    objectiveFr: "Valider le niveau B2.6 et passer au B2.7 : exprimer un désaccord sans conflit inutile — expressions de tact, formes verbales et structures qui adoucissent, passer du direct au diplomatique, compréhension écrite et orale, expression écrite et orale.",
    sections: [
      // ---------------------------------------------------------------- I
      {
        id: "vocab", num: "I", title: "Vocabulary – The Language of Tact", titleFr: "Vocabulaire – le langage du tact",
        points: 10, skill: "vo", type: "fill",
        instructions: "Complete each sentence with a word or expression from the list. Change the form if necessary. Some words are not used.",
        instructionsFr: "Complète chaque phrase avec un mot ou une expression de la liste. Change la forme si nécessaire. Certains mots ne sont pas utilisés.",
        bank: ["point", "convinced", "respect", "differ", "common ground", "halfway", "compromise", "fair enough", "agree to disagree", "concede", "object", "wrong"],
        items: [
          { text: "I see your ___, but I think the budget is too tight for such a big event.",
            blanks: [["point"]],
            why: "« I see your point, but… » = je comprends ton point de vue, mais… : on reconnaît l'idée de l'autre avant de nuancer." },
          { text: "It's an interesting idea, but I'm not entirely ___ that customers will pay more.",
            blanks: [["convinced"]],
            why: "« I'm not entirely convinced » = je ne suis pas complètement convaincu(e) : désaccord adouci par « not entirely »." },
          { text: "With all due ___, sir, the figures don't support that conclusion.",
            blanks: [["respect"]],
            why: "« With all due respect » = sauf votre respect : formule formelle, souvent avant un désaccord ferme avec un supérieur." },
          { text: "You say it's the best solution, but I beg to ___.",
            blanks: [["differ"]],
            why: "« I beg to differ » = permettez-moi de ne pas être d'accord : formule polie et assez soutenue." },
          { text: "We don't agree on everything, but we do have some ___: we both want the project to succeed.",
            blanks: [["common ground"]],
            why: "« common ground » = terrain d'entente, points communs sur lesquels construire un accord." },
          { text: "You want £5,000 and we offered £3,000. Could we meet you ___ at £4,000?",
            blanks: [["halfway"]],
            why: "« to meet somebody halfway » = faire chacun la moitié du chemin, couper la poire en deux." },
          { text: "— We can't finish everything by Friday, but we can deliver the main part. — ___. Let's do that.",
            blanks: [["Fair enough"]],
            why: "« Fair enough » = c'est juste, ça se tient : on accepte un argument raisonnable." },
          { text: "We've discussed it for an hour and we still don't agree. Let's just ___ and move on.",
            blanks: [["agree to disagree"]],
            why: "« to agree to disagree » = accepter de ne pas être d'accord, pour clore la discussion sans conflit." },
          { text: "I ___ that your plan is cheaper, but it will take much longer.",
            blanks: [["concede"]],
            why: "« to concede (that) » = concéder, admettre un point de l'autre avant d'ajouter une réserve." },
          { text: "Several members of staff have ___ to the new working hours.",
            blanks: [["objected"]],
            why: "« to object TO + nom / -ing » = s'opposer à. Present Perfect : have + participe passé (objected)." }
        ]
      },
      // --------------------------------------------------------------- II
      {
        id: "verbs", num: "II", title: "Verb Forms – Softening With Tenses and Modals", titleFr: "Conjugaison – adoucir avec les temps et les modaux",
        points: 15, skill: "cj", type: "fill",
        instructions: "Put the verbs in brackets into the correct form. Some forms soften the message (past, continuous, modals); others revise tenses you already know. Type only the verb form (with its auxiliary if needed).",
        instructionsFr: "Mets les verbes entre parenthèses à la forme qui convient. Certaines formes adoucissent le message (passé, forme progressive, modaux) ; d'autres révisent des temps déjà vus. Tape seulement la forme verbale (avec son auxiliaire si besoin).",
        items: [
          { text: "I ___ (wonder) if we could discuss the deadline again.",
            blanks: [["was wondering"]],
            why: "Distance du passé + forme progressive : « I was wondering if… » est bien plus doux que « I wonder » ou « I want »." },
          { text: "We ___ (hope) you could send the files today, if possible.",
            blanks: [["were hoping", "had hoped"]],
            why: "« We were hoping… » : le Past Continuous crée une distance polie ; la demande porte bien sur le présent." },
          { text: "___ you ___ (consider) asking the client first? It might save time.",
            blanks: [["Have"], ["considered"]],
            why: "« Have you considered + -ing? » : Present Perfect (have + participe passé) pour suggérer une alternative sous forme de question." },
          { text: "It might be worth ___ (check) the figures again before the meeting.",
            blanks: [["checking"]],
            why: "« It might be worth + verbe en -ing » = il vaudrait peut-être la peine de… : « worth » est toujours suivi du -ing." },
          { text: "What if we ___ (postpone) the launch by a week?",
            blanks: [["postponed", "postpone"]],
            why: "« What if we + prétérit » = suggestion prudente et hypothétique (le présent est possible mais plus direct)." },
          { text: "___ it ___ (be) better to wait until we've tested it properly?",
            blanks: [["Wouldn't"], ["be"]],
            why: "Question négative « Wouldn't it be better to…? » : on propose sans imposer. Après un modal, base verbale." },
          { text: "I'm not sure that ___ (work). Perhaps we should test it first.",
            blanks: [["would work", "will work", "might work", "could work", "works"]],
            why: "Avec un modal (would/might/could), la réserve paraît moins tranchante qu'une affirmation au présent ou au futur." },
          { text: "I agree with you in theory, but we ___ (already / try) that twice and it didn't work.",
            blanks: [["have already tried"]],
            why: "Expérience passée qui compte pour la discussion actuelle, avec « already » → Present Perfect : have + already + participe passé." },
          { text: "When I joined the team, I ___ (not / realise) that direct criticism could sound so rude.",
            blanks: [["didn't realise", "did not realise", "didn't realize", "hadn't realised", "hadn't realized"]],
            why: "Récit au passé (« When I joined ») → Past Simple négatif : didn't + base verbale (le Past Perfect est aussi possible)." },
          { text: "If you ___ (explain) your reasons more calmly, they would have listened to you.",
            blanks: [["had explained"]],
            why: "Troisième conditionnel (regret sur le passé) : If + Past Perfect, would have + participe passé." }
        ]
      },
      // -------------------------------------------------------------- III
      {
        id: "grammar", num: "III", title: "Grammar – Tools for Softening", titleFr: "Grammaire – les outils de l'adoucissement",
        points: 10, skill: "gr", type: "fill",
        instructions: "Complete each sentence with the missing word to make it more diplomatic. Type only the missing word.",
        instructionsFr: "Complète chaque phrase avec le mot manquant pour la rendre plus diplomatique. Tape seulement le mot manquant.",
        items: [
          { text: "Direct: \"That's impractical.\" → Diplomatic: \"That's not ___ practical.\"",
            blanks: [["very"]],
            why: "« not very + adjectif positif » est plus doux qu'un adjectif négatif : « not very practical » au lieu de « impractical »." },
          { text: "Direct: \"There's a problem.\" → Diplomatic: \"There's a bit ___ a problem.\"",
            blanks: [["of"]],
            why: "« a bit of a + nom » minimise le problème (understatement) : a bit OF a problem." },
          { text: "Direct: \"The price is high.\" → Diplomatic: \"The price is ___ higher than we expected.\"",
            blanks: [["slightly", "a bit", "a little", "somewhat"]],
            why: "Un minimiseur (slightly, a bit, a little) devant un comparatif atténue la critique." },
          { text: "Direct: \"You're wrong.\" → Diplomatic: \"I'm not ___ I agree with that.\"",
            blanks: [["sure"]],
            why: "« I'm not sure I agree » : on vise l'idée, pas la personne, et on exprime un doute plutôt qu'un verdict." },
          { text: "Direct: \"We can't do that.\" → Diplomatic: \"I'm ___ we can't do that at the moment.\"",
            blanks: [["afraid"]],
            why: "« I'm afraid (that)… » = malheureusement… : annonce une mauvaise nouvelle avec regret, sans agressivité." },
          { text: "Direct: \"That will be a problem.\" → Diplomatic: \"That ___ be a problem.\"",
            blanks: [["might", "could", "may"]],
            why: "Un modal de possibilité (might / could / may) remplace une certitude par une hypothèse." },
          { text: "Direct: \"Do it tomorrow.\" → Diplomatic: \"Could we ___ do it tomorrow?\"",
            blanks: [["perhaps", "maybe"]],
            why: "« Could we perhaps…? » : question + modal + « perhaps », trois adoucisseurs dans la même phrase." },
          { text: "It's a good plan, ___ it? But I'm worried about the cost.",
            blanks: [["isn't"]],
            why: "Question tag : affirmation avec « is » → tag négatif « isn't it? ». On reconnaît le positif avant d'exprimer une réserve (rappel B1.3)." },
          { text: "I take your ___, but we also need to think about the staff.",
            blanks: [["point"]],
            why: "« I take your point » = j'entends ton argument : étape 1 (reconnaître) avant d'ajouter sa nuance." },
          { text: "That's a fair point. ___, I think we need more data before deciding.",
            blanks: [["However", "Nevertheless", "Even so", "Still"]],
            why: "Un connecteur de concession (However, Nevertheless) marque le passage de « reconnaître » à « nuancer » (rappel B2.1)." }
        ]
      },
      // --------------------------------------------------------------- IV
      {
        id: "rewrite", num: "IV", title: "From Direct to Diplomatic", titleFr: "Du direct au diplomatique",
        points: 10, skill: "ee", type: "ai-text",
        instructions: "Rewrite each direct sentence in diplomatic English for the situation given. Keep the same message, but change its social effect. Write one or two sentences for each.",
        instructionsFr: "Réécris chaque phrase directe en anglais diplomatique, adaptée à la situation donnée. Garde le même message, mais change son effet social. Écris une ou deux phrases pour chacune.",
        quotes: [
          "1. To your manager, in a meeting: \"Your plan won't work.\"",
          "2. To a colleague: \"Your report is full of mistakes.\"",
          "3. To a client: \"No, we can't give you a discount.\"",
          "4. To a friend who wants to book an expensive holiday: \"That's a stupid idea.\""
        ],
        prompt: "Rewrite the four direct sentences diplomatically, adapting your level of formality to each person.",
        promptFr: "Réécris les quatre phrases directes de manière diplomatique, en adaptant ton niveau de formalité à chaque personne.",
        minWords: 50, maxWords: 140,
        rubric: "Total 10 points, 2.5 points per sentence. For each: 1 pt if the original message is kept (the disagreement or refusal is still clear, not hidden or reversed); 1 pt for effective softening using B2.6 tools (I see your point but…, I'm not entirely convinced, I'm afraid…, might/could, I was wondering if…, Have you considered…?, not very + positive adjective, slightly / a bit, negative questions); 0.5 pt for a register suited to the person (more formal for the manager and the client — e.g. 'With respect', 'I'm afraid we're unable to…' — warmer and lighter with the friend) and for accuracy. Deduct if the answer is still aggressive or becomes so vague that the message disappears.",
        reference: "1: \"I see your point, but I'm not entirely convinced it will work — could we perhaps look at the risks first?\" 2: \"Thanks for the report. There are a few small things that might be worth checking again before we send it.\" 3: \"I'm afraid we're not able to offer a discount on this order, but we could offer free delivery.\" 4: \"It sounds amazing, but isn't it a bit expensive? Have you considered going in May, when it's cheaper?\""
      },
      // ---------------------------------------------------------------- V
      {
        id: "writing", num: "V", title: "Writing – A Diplomatic Email", titleFr: "Expression écrite – un e-mail diplomatique",
        points: 15, skill: "ee", type: "ai-text",
        instructions: "Write an email of 150 to 200 words. Follow the three steps: acknowledge → nuance → suggest. Use at least three different softening techniques.",
        instructionsFr: "Rédige un e-mail de 150 à 200 mots. Suis les trois étapes : reconnaître → nuancer → proposer. Utilise au moins trois techniques d'adoucissement différentes.",
        prompt: "Your manager, Mrs Harper, has announced by email that, from next month, all team meetings will take place at 8 a.m. every day. You think this is a bad idea: several colleagues have long commutes or take their children to school, and daily meetings take too much time. Write a reply to Mrs Harper expressing your disagreement diplomatically and suggesting an alternative.",
        promptFr: "Ta responsable, Mme Harper, a annoncé par e-mail qu'à partir du mois prochain, toutes les réunions d'équipe auront lieu à 8 h tous les jours. Tu penses que c'est une mauvaise idée : plusieurs collègues ont de longs trajets ou emmènent leurs enfants à l'école, et des réunions quotidiennes prennent trop de temps. Réponds à Mme Harper pour exprimer ton désaccord de manière diplomatique et proposer une alternative.",
        minWords: 150, maxWords: 200,
        rubric: "Total 15 points. Task achievement (4 pts): the email acknowledges the manager's aim, clearly expresses disagreement with reasons (commutes, school runs, time) and suggests at least one concrete alternative (e.g. later time, two meetings a week, a short online stand-up). Diplomacy (4 pts): the three steps acknowledge → nuance → suggest are visible; at least three different softening techniques (modals might/could/would, past distance 'I was wondering / I was hoping', negative question 'Wouldn't it be…?', minimisers 'slightly / a bit', 'not very' + positive adjective, 'I'm afraid', 'Have you considered…?'); lose 1.5 pts per missing technique; deduct if the tone is aggressive or if the disagreement is so hidden it is unclear. Grammar & verb forms (3 pts): B2 accuracy, correct softening verb forms and modals. Vocabulary & register (2 pts): formal-neutral workplace register (Dear Mrs Harper, Kind regards, no slang), B2.6 vocabulary. Organisation (2 pts): paragraphs, logical order, linking words. Length: 150-200 words; deduct up to 2 points if under 120 or over 250 words.",
        reference: "Model elements: \"Dear Mrs Harper, Thank you for your email. I completely understand the need to keep the team informed. However, I'm not entirely convinced that daily meetings at 8 a.m. would be the best solution. Several colleagues have quite long commutes, and some take their children to school, so it might be slightly difficult for them. I was wondering if we could perhaps meet twice a week at 9.30 instead? Wouldn't that give us the same benefits with less pressure? Kind regards, …\""
      },
      // --------------------------------------------------------------- VI
      {
        id: "reading", num: "VI", title: "Reading Comprehension", titleFr: "Compréhension écrite",
        points: 15, skill: "ce", type: "mcq",
        instructions: "Read the text, then choose the right answer for each question.",
        instructionsFr: "Lis le texte, puis choisis la bonne réponse pour chaque question.",
        passage: "Marc had worked in Paris for ten years before his company sent him to its London office to lead a small team. In France, he had a reputation for being honest and efficient: if an idea was bad, he said so, and everyone moved on. In London, the same approach produced very different results.\n\nIn his second week, a young analyst named Hannah presented a new reporting system. Marc listened, then said, \"This is too complicated. Nobody will use it.\" He thought he was being helpful. Hannah said nothing, but for the next few days she hardly spoke in meetings, and two other team members started sending their ideas to Marc's deputy instead of to him.\n\nIt was his deputy, Owen, who finally explained the problem over lunch. \"Your point was absolutely right,\" he said. \"But the way you said it made Hannah feel her work was worthless. Here, we'd probably say something like, 'There are some really good ideas here — I was wondering if we could perhaps simplify it a bit?' Everyone would understand exactly what you meant.\"\n\nMarc was sceptical at first. Wasn't this just a polite way of hiding the truth? Owen shook his head. \"It's not about hiding anything. The message stays the same. You're just giving the other person a way to accept it without losing face.\"\n\nThe following week, Marc tried again. He thanked Hannah for her work, pointed out two features he really liked, and then asked whether a simpler version might be easier for the sales team. Hannah not only agreed, she came back two days later with a much better design. Marc now tells new managers that diplomacy is not the opposite of honesty — it is what makes honesty work.",
        items: [
          { q: "How was Marc seen when he worked in Paris?", qFr: "Comment Marc était-il perçu quand il travaillait à Paris ?",
            opts: ["As rude and aggressive", "As honest and efficient", "As shy and indirect", "As a poor manager"], correct: 1,
            why: "« he had a reputation for being honest and efficient » : en France, sa franchise était appréciée." },
          { q: "What does Hannah's reaction after the meeting show?", qFr: "Que montre la réaction de Hannah après la réunion ?",
            opts: ["She agreed with Marc's criticism.", "She wanted to leave the company.", "She didn't understand Marc's English.", "She was hurt and lost confidence, although she said nothing."], correct: 3,
            why: "Elle ne dit rien mais « hardly spoke in meetings » : elle s'est sentie blessée — le désaccord direct a eu un effet social négatif." },
          { q: "According to Owen, what was wrong with Marc's comment?", qFr: "D'après Owen, qu'est-ce qui n'allait pas dans la remarque de Marc ?",
            opts: ["His opinion was completely wrong.", "He should not have given any opinion.", "The idea was right, but the way it was expressed was too harsh.", "He spoke too quietly."], correct: 2,
            why: "« Your point was absolutely right. But the way you said it… » : Same idea ≠ same social effect." },
          { q: "What does Owen mean by giving someone \"a way to accept it without losing face\"?", qFr: "Que veut dire Owen par donner à quelqu'un « un moyen de l'accepter sans perdre la face » ?",
            opts: ["Letting the person keep their dignity while receiving criticism", "Hiding the criticism completely", "Asking someone else to give the bad news", "Accepting a bad idea to avoid conflict"], correct: 0,
            why: "« losing face » = perdre la face. La diplomatie garde le même message mais protège l'amour-propre de l'autre." },
          { q: "Which sentence best sums up what Marc learned?", qFr: "Quelle phrase résume le mieux ce que Marc a appris ?",
            opts: ["British people prefer not to hear criticism.", "It is better never to disagree with colleagues.", "Diplomacy helps honest feedback to be heard and accepted.", "Being indirect is a form of dishonesty."], correct: 2,
            why: "« diplomacy is not the opposite of honesty — it is what makes honesty work » : la diplomatie permet au message d'être entendu." }
        ]
      },
      // -------------------------------------------------------------- VII
      {
        id: "listening", num: "VII", title: "Listening Comprehension", titleFr: "Compréhension orale",
        points: 10, skill: "co", type: "mcq",
        instructions: "Listen to each recording (you can play it again). Pay attention to what the speaker really means, then choose the right answer.",
        instructionsFr: "Écoute chaque enregistrement (tu peux le réécouter). Fais attention à ce que la personne veut vraiment dire, puis choisis la bonne réponse.",
        items: [
          { audio: [{ who: "A", text: "So, I think we should launch the new website on Friday. The design is ready and the clients are waiting." }, { who: "B", text: "I see your point, and the design looks great. But wouldn't it be slightly safer to wait until we've tested it properly? If something goes wrong over the weekend, nobody will be here to fix it." }],
            q: "What does B think?", qFr: "Que pense B ?",
            opts: ["B fully agrees with Friday.", "B disagrees and would prefer to test the website first.", "B wants to launch it earlier.", "B has no opinion."], correct: 1,
            why: "« I see your point, but wouldn't it be… safer to wait » : désaccord diplomatique, B préfère attendre les tests." },
          { audio: "Hello Sarah, thanks for sending the proposal. There are some really interesting ideas in it, and the team liked the design. I'm afraid the budget is a bit higher than we'd hoped, though. Could we perhaps look at a simpler version — maybe without the video part — and discuss it again next week?",
            q: "What is the speaker's main message?", qFr: "Quel est le message principal de la personne ?",
            opts: ["The proposal is accepted as it is.", "The proposal is too expensive and needs to be simplified.", "The ideas are not interesting.", "She wants a bigger budget."], correct: 1,
            why: "Derrière les adoucisseurs (I'm afraid, a bit higher, Could we perhaps…) : c'est trop cher, il faut simplifier." },
          { audio: [{ who: "A", text: "We're really behind. We could ask the team to work on Saturday to finish on time." }, { who: "B", text: "Hmm, I'm not sure that would be very popular with the staff — they've already worked late all month. Have you considered moving the deadline instead? The client did say they were flexible." }],
            q: "What does B suggest?", qFr: "Que suggère B ?",
            opts: ["Moving the deadline", "Working on Saturday", "Hiring more staff", "Asking the staff to vote"], correct: 0,
            why: "« Have you considered moving the deadline instead? » : B propose une alternative sous forme de question." },
          { audio: [{ who: "A", text: "Honestly, I still think the office should close at five. People are tired by then." }, { who: "B", text: "Fair enough, but I still think six is better for the clients. Well, we're not going to solve it today. Let's agree to disagree — and ask the rest of the team what they prefer." }],
            q: "How does the conversation end?", qFr: "Comment se termine la conversation ?",
            opts: ["A changes her mind.", "They accept that they disagree and decide to consult others.", "They choose five o'clock.", "They have an argument."], correct: 1,
            why: "« let's agree to disagree — and ask the rest of the team » : ils acceptent leur désaccord sans conflit et consultent l'équipe." },
          { audio: "With all due respect, I'm not entirely convinced by these figures. Last year's sales were much lower, and I can't see where this increase comes from. I was wondering if we could double-check them before we present them to the board on Monday.",
            q: "How does the speaker feel about the figures?", qFr: "Que pense la personne de ces chiffres ?",
            opts: ["She has doubts and wants them checked.", "She thinks they are perfect.", "She wants to present them immediately.", "She doesn't understand them."], correct: 0,
            why: "« I'm not entirely convinced » + « could we double-check them » : elle doute fortement, mais le dit avec tact." }
        ]
      },
      // ------------------------------------------------------------- VIII
      {
        id: "speaking", num: "VIII", title: "Speaking – Disagree Diplomatically", titleFr: "Expression orale – exprimer un désaccord avec tact",
        points: 15, skill: "eo", type: "ai-oral",
        instructions: "Press the microphone and speak for about one and a half minutes. You can try again, or add to your answer. If the microphone doesn't work, type what you would say.",
        instructionsFr: "Appuie sur le micro et parle environ une minute et demie. Tu peux recommencer, ou compléter ta réponse. Si le micro ne fonctionne pas, écris ce que tu dirais.",
        prompt: "In a team meeting, a colleague says: \"To save money, I suggest we cancel all training courses next year.\" You disagree. Respond diplomatically: acknowledge their point, explain why you are not convinced (give two reasons), and suggest an alternative. Finish by trying to find common ground.",
        promptFr: "En réunion d'équipe, un collègue dit : « Pour faire des économies, je propose d'annuler toutes les formations l'année prochaine. » Tu n'es pas d'accord. Réponds de manière diplomatique : reconnais son argument, explique pourquoi tu n'es pas convaincu(e) (deux raisons) et propose une alternative. Termine en cherchant un terrain d'entente.",
        minWords: 70, targetSeconds: 90,
        rubric: "Total 15 points. Task (4 pts): the three steps are present — acknowledge (I see your point / I take your point / Fair enough), nuance with two clear reasons, suggest an alternative (What if we…? / Have you considered…? / Could we perhaps…?) — and an attempt to find common ground or a compromise. Diplomacy (4 pts): the disagreement is clear but tactful, with several softening tools (modals, I'm not entirely convinced, I'm afraid, slightly / a bit, negative question); deduct if the tone is blunt ('You're wrong', 'That's stupid') or if the disagreement disappears. Grammar & vocabulary (4 pts): B2 accuracy, correct softening verb forms (I was wondering if…, it might be worth + -ing, wouldn't it be…), B2.6 vocabulary (common ground, compromise, meet halfway, concede…). Fluency and pronunciation (3 pts): judged from the transcript (about 90 seconds ≈ 140-220 words, natural flow; a calm, polite tone is a plus; recognition errors suggesting mispronounced words lower this score — mention them).",
        reference: "Example: \"I take your point — we do need to save money. However, I'm not entirely convinced that cancelling all training is the best way. Firstly, it might affect motivation… Secondly, new staff would find it harder to learn… What if we kept the essential courses and moved some of them online? That could cut costs quite a bit. I think we all want the same thing — a strong team and a healthy budget — so perhaps we could meet halfway.\""
      }
    ]
  };

  // =========================================================================
    // B2.7 — HUMOUR, IRONY & SARCASM (leçon 46)
    // =========================================================================
    E[46] = {
      code: "B2.7",
      title: "Level test: B2.7 – Humour, Irony & Sarcasm",
      titleFr: "Contrôle de niveau : B2.7 – Humour, ironie et sarcasme",
      objective: "Pass level B2.7 and move on to B2.8: vocabulary of humour, understatement structures, literal vs intended meaning, reading, listening, writing and speaking with irony and self-deprecation.",
      objectiveFr: "Valider le niveau B2.7 et passer au B2.8 : vocabulaire de l'humour, structures de l'understatement, sens littéral et sens réel, compréhension écrite et orale, expression écrite et orale avec ironie et autodérision.",
      sections: [
        // ---------------------------------------------------------------- I
        {
          id: "vocab", num: "I", title: "Vocabulary – The Language of Humour", titleFr: "Vocabulaire – le langage de l'humour",
          points: 10, skill: "vo", type: "fill",
          instructions: "Complete each sentence with a word or expression from the list. Change the form if necessary (verb tense, plural…). Some words are not used.",
          instructionsFr: "Complète chaque phrase avec un mot ou une expression de la liste. Change la forme si nécessaire (temps du verbe, pluriel…). Certains mots ne sont pas utilisés.",
          bank: ["pun", "banter", "deadpan", "wit", "tease", "mock", "crack", "pull", "laugh off", "tongue-in-cheek", "self-deprecating", "literally"],
          items: [
            { text: "He told the whole story with a completely ___ expression, so nobody realised he was joking until the very end.",
              blanks: [["deadpan"]],
              why: "« a deadpan expression / delivery » = un air impassible, pince-sans-rire : on dit quelque chose de drôle sans sourire." },
            { text: "\"I used to be a banker, but I lost interest\" is a ___: \"interest\" has two meanings here.",
              blanks: [["pun"]],
              why: "« a pun » = un jeu de mots qui joue sur les deux sens d'un mot (interest = intérêt ET intérêts bancaires)." },
            { text: "Don't worry, the ___ in our office is always friendly; if they tease you, it means they like you.",
              blanks: [["banter"]],
              why: "« banter » = taquineries amicales, indénombrable (jamais « a banter »). C'est un signe de complicité." },
            { text: "Relax! I wasn't serious, I was just ___ your leg.",
              blanks: [["pulling"]],
              why: "« to pull someone's leg » = faire marcher quelqu'un. Après « was », forme en -ing (Past Continuous)." },
            { text: "My uncle can't stop ___ jokes at family dinners, even when nobody laughs.",
              blanks: [["cracking"]],
              why: "« to crack a joke » = lancer une blague. Après « can't stop », le verbe prend -ing. Jamais « do a joke »." },
            { text: "It's cruel to ___ someone for their accent; it's not the same as gently teasing a friend.",
              blanks: [["mock"]],
              why: "« to mock » = tourner en ridicule, avec une intention de rabaisser — plus négatif que « to tease »." },
            { text: "When he fell off the stage, he just ___ it ___ and carried on with his speech.",
              blanks: [["laughed"], ["off"]],
              why: "« to laugh something off » = en rire pour dédramatiser. Le pronom « it » se place entre le verbe et la particule : laughed it off." },
            { text: "Her comment about being \"the world's worst cook\" was ___; she is actually an excellent chef.",
              blanks: [["tongue-in-cheek", "self-deprecating"]],
              why: "« tongue-in-cheek » = au second degré, pas à prendre au pied de la lettre (« self-deprecating », autodérision, est aussi accepté)." },
            { text: "British people often use ___ humour: they make fun of themselves rather than of others.",
              blanks: [["self-deprecating"]],
              why: "« self-deprecating humour » = l'autodérision, très appréciée au Royaume-Uni." },
            { text: "Oscar Wilde was famous for his sharp ___; his conversation was full of clever remarks.",
              blanks: [["wit"]],
              why: "« a sharp wit » = un esprit vif. Adjectif : witty. Attention au faux ami : « spiritual » = spirituel au sens religieux." }
          ]
        },
        // --------------------------------------------------------------- II
        {
          id: "grammar", num: "II", title: "Grammar – The Mechanics of Understatement and Irony", titleFr: "Grammaire – les mécanismes de l'understatement et de l'ironie",
          points: 15, skill: "gr", type: "fill",
          instructions: "A. Rewrite the reality as a British understatement by completing the sentence. B. Complete with the correct form of the verb or the missing word. Type only the missing words.",
          instructionsFr: "A. Reformule la réalité sous forme d'understatement britannique en complétant la phrase. B. Complète avec la bonne forme du verbe ou le mot manquant. Tape seulement les mots manquants.",
          items: [
            { header: { en: "A. Say less to mean more (understatement)", fr: "A. Dire moins pour dire plus (understatement)" },
              text: "Reality: the restaurant is extremely expensive. → \"It's ___ ___ cheap.\"",
              blanks: [["not"], ["exactly"]],
              why: "« not exactly + adjectif positif » = litote ironique : « It's not exactly cheap » = c'est très cher." },
            { text: "Reality: the whole project has collapsed. → \"We've got ___ ___ ___ a problem.\"",
              blanks: [["a"], ["bit"], ["of"]],
              why: "« a bit of a + nom » minimise une situation grave : « a bit of a problem » peut annoncer une catastrophe." },
            { text: "Reality: her cake is delicious. → \"Mmm, that's ___ bad at all.\"",
              blanks: [["not"]],
              why: "« not bad at all » = un vrai compliment dans la bouche d'un Britannique (not + adjectif négatif)." },
            { text: "Reality: it's minus fifteen degrees outside. → \"It's ___ chilly today, isn't it?\"",
              blanks: [["a bit", "a little", "slightly", "rather", "quite"]],
              why: "Atténuateur + adjectif faible : « a bit / a little / slightly chilly » par un froid glacial = understatement typique." },
            { text: "Reality: he is late every single day. → \"He's not ___ the most punctual person in the office.\"",
              blanks: [["exactly"]],
              why: "« He's not exactly the most punctual… » = il est toujours en retard. « not exactly » annonce le contraire." },
            { header: { en: "B. Tenses and structures used in jokes and irony", fr: "B. Temps et structures de l'humour et de l'ironie" },
              text: "Wait, ___ you ___ (be) sarcastic right now, or do you really like my haircut?",
              blanks: [["are"], ["being"]],
              why: "« Are you being sarcastic? » : « be » au présent continu décrit un comportement temporaire, ici et maintenant." },
            { text: "Don't be upset, I ___ only ___ (joke) when I said your car was older than me.",
              blanks: [["was"], ["joking"]],
              why: "« I was only joking » : Past Continuous pour une action en cours au moment où l'on parlait." },
            { text: "Oh, brilliant. The printer has jammed again. This ___ (go) swimmingly, isn't it?",
              blanks: [["is going", "'s going"]],
              why: "« This is going swimmingly » (sarcastique) : Present Continuous pour une situation en cours ; le tag « isn't it » confirme l'auxiliaire « is »." },
            { text: "It's not exactly warm in here, ___ it?",
              blanks: [["is"]],
              why: "Phrase négative → question tag positif : « It's not… , is it? ». Le tag renforce l'ironie ou l'understatement." },
            { text: "If you ___ (take) everything literally, you'll never understand British humour.",
              blanks: [["take"]],
              why: "Premier conditionnel : « If + présent simple, will + base verbale ». Jamais « will » après « if »." }
          ]
        },
        // -------------------------------------------------------------- III
        {
          id: "literal", num: "III", title: "Literally Said vs Actually Meant", titleFr: "Ce qui est dit vs ce qui est voulu",
          points: 10, skill: "ce", type: "ai-text",
          instructions: "For each quote, say (1) what the speaker literally said, (2) what the speaker actually meant, and (3) which form of humour it is (irony, sarcasm, understatement, exaggeration, self-deprecation). Answer in English.",
          instructionsFr: "Pour chaque citation, dis (1) ce que la personne a dit littéralement, (2) ce qu'elle a vraiment voulu dire et (3) de quelle forme d'humour il s'agit (ironie, sarcasme, understatement, exagération, autodérision). Réponds en anglais.",
          quotes: [
            "1. Your friend arrives 45 minutes late for dinner. You say: \"Oh, thanks for coming so early.\"",
            "2. The office flooded overnight. Your manager says: \"Hmm. That's slightly inconvenient.\"",
            "3. After tripping in front of everyone, your colleague says: \"As you can see, I'm a natural dancer.\"",
            "4. After a 10-minute wait, your sister says: \"I've been waiting here for centuries!\""
          ],
          prompt: "Analyse the four quotes: literal meaning, intended meaning and type of humour.",
          promptFr: "Analyse les quatre citations : sens littéral, sens voulu et type d'humour.",
          minWords: 60,
          rubric: "Total 10 points, 2.5 points per quote. For each quote: 1 point for a correct intended meaning (not only a paraphrase of the literal words), 1 point for the correct type of humour, 0.5 point for English accuracy. Expected: 1 = sarcasm (literal: thanks for being early; meant: you are very late and I'm annoyed; it targets a person with a reproach); 2 = understatement (literal: a small problem; meant: a serious problem/disaster, said calmly); 3 = self-deprecating humour / self-deprecation, ironic (literal: I dance well; meant: I'm clumsy, I'm laughing at myself); 4 = exaggeration / hyperbole (literal: centuries; meant: I waited a bit too long and I'm slightly impatient). Accept \"irony\" for quote 1 with half credit on the type point if the learner explains the reproach, and accept \"ironic self-deprecation\" for quote 3.",
          reference: "1: sarcasm — you're very late. 2: understatement — it's a disaster. 3: self-deprecation — I'm clumsy. 4: exaggeration/hyperbole — I've waited too long."
        },
        // --------------------------------------------------------------- IV
        {
          id: "writing", num: "IV", title: "Writing – A Humorous Anecdote", titleFr: "Expression écrite – une anecdote humoristique",
          points: 20, skill: "ee", type: "ai-text",
          instructions: "Write a well-structured text of 180 to 230 words. Use at least TWO different forms of humour from this unit and at least one narrative tense (Past Continuous or Past Perfect).",
          instructionsFr: "Rédige un texte bien structuré de 180 à 230 mots. Utilise au moins DEUX formes d'humour différentes vues dans ce palier et au moins un temps du récit (Past Continuous ou Past Perfect).",
          prompt: "Write a blog post for an English-speaking audience titled \"The day nothing went to plan\". Tell a real or invented story in which things went wrong, using British-style humour: understatement, irony, deadpan comments or self-deprecation. End with a short reflection on why laughing at yourself can help in difficult moments.",
          promptFr: "Écris un article de blog pour un public anglophone intitulé « Le jour où rien ne s'est passé comme prévu ». Raconte une histoire vraie ou inventée où tout a mal tourné, avec de l'humour à la britannique : understatement, ironie, remarques pince-sans-rire ou autodérision. Termine par une courte réflexion sur l'intérêt de savoir rire de soi dans les moments difficiles.",
          minWords: 180, maxWords: 230,
          rubric: "Total 20 points. Task achievement (5 pts): a story about a day when things went wrong, AND a short reflection on laughing at oneself. Humour (5 pts): at least TWO clearly identifiable forms of humour from B2.7 (understatement with not exactly / a bit of a / slightly / not bad; irony or deadpan comments; self-deprecation; exaggeration used deliberately); the humour must be effective and appropriate, not just labelled (lose 2.5 pts per missing form). Grammar (4 pts): B2 accuracy, correct narrative tenses (Past Simple, Past Continuous, Past Perfect) and correct understatement structures. Vocabulary (3 pts): range and precision (deadpan, laugh it off, crack a joke, tongue-in-cheek, banter…), natural collocations. Organisation and register (3 pts): blog style, engaging opening, paragraphs, linking words, coherent ending. Length: 180-230 words; deduct up to 2 points if under 150 or over 280 words.",
          reference: "Model elements: \"It wasn't exactly my finest hour.\" / \"By the time I'd found my keys, the train had left — a bit of a setback, you might say.\" / \"As a natural athlete, I then tripped over my own suitcase.\" / reflection: laughing at yourself reduces stress and helps others relax."
        },
        // ---------------------------------------------------------------- V
        {
          id: "reading", num: "V", title: "Reading Comprehension", titleFr: "Compréhension écrite",
          points: 15, skill: "ce", type: "mcq",
          instructions: "Read the text, then choose the right answer for each question. Pay attention to what the writer really means.",
          instructionsFr: "Lis le texte, puis choisis la bonne réponse pour chaque question. Fais attention à ce que l'auteur veut vraiment dire.",
          passage: "When Camille moved from Lyon to Edinburgh to work for a software company, she thought her English was more than good enough. She had passed every exam, read novels in the original and watched countless series without subtitles. What nobody had warned her about was the humour.\n\nOn her first day, the heating in the office broke down. The temperature was barely above freezing, yet her team leader, Alistair, rubbed his hands together and announced, without the slightest smile, \"Bit fresh this morning.\" Camille nodded seriously and put on a second jumper. Nobody else seemed to find the situation remotely worrying, which confused her even more.\n\nA few weeks later, after she had spent an entire weekend fixing a bug that had crashed the whole website, Alistair read her report and said, \"Not bad.\" She went home convinced she was about to be fired. The next morning, a colleague explained that from Alistair, \"not bad\" was practically a medal.\n\nThe turning point came at the Christmas party. Camille, who had famously got lost three times in the building, raised her glass and said, \"I'd like to thank the team for their patience, and the fire exit signs for their guidance.\" The room burst out laughing, and Alistair told her she had finally become \"almost Scottish\".\n\nLooking back, Camille says the lesson was simple: in Britain, the less people say, the more they usually mean.",
          items: [
            { q: "What does the first paragraph suggest about Camille's English?", qFr: "Que suggère le premier paragraphe à propos de l'anglais de Camille ?",
              opts: ["It was poor, which explains her difficulties.", "It was very good academically, but it hadn't prepared her for everyday humour.", "She had never read books in English.", "She relied on subtitles to understand series."], correct: 1,
              why: "Examens réussis, romans en VO, séries sans sous-titres… mais « What nobody had warned her about was the humour » : son niveau scolaire ne l'avait pas préparée à l'humour." },
            { q: "\"Bit fresh this morning,\" said with a straight face on a freezing day, is an example of…", qFr: "« Bit fresh this morning », dit sans sourire par un froid glacial, est un exemple de…",
              opts: ["exaggeration delivered with enthusiasm.", "deadpan understatement.", "a sincere weather report.", "sarcasm aimed at Camille."], correct: 1,
              why: "« a bit fresh » pour une température proche de zéro = understatement, dit « without the slightest smile » = deadpan." },
            { q: "Why did Camille think she was going to be fired?", qFr: "Pourquoi Camille a-t-elle cru qu'elle allait être licenciée ?",
              opts: ["Because she had crashed the website.", "Because she took \"Not bad\" literally, as weak praise.", "Because Alistair criticised her report in front of the team.", "Because she had arrived late on her first day."], correct: 1,
              why: "Elle a pris « Not bad » au premier degré (« pas mal, sans plus ») alors que, chez Alistair, c'était « practically a medal », un vrai compliment." },
            { q: "What form of humour does Camille use in her Christmas speech?", qFr: "Quelle forme d'humour Camille utilise-t-elle dans son discours de Noël ?",
              opts: ["Self-deprecating humour", "Mockery of her colleagues", "A pun on the word \"patience\"", "Sarcasm aimed at Alistair"], correct: 0,
              why: "Elle remercie les panneaux de sortie de secours pour leur « guidance » : elle se moque d'elle-même (elle se perdait sans cesse) = autodérision." },
            { q: "Which sentence best sums up the lesson Camille learned?", qFr: "Quelle phrase résume le mieux la leçon qu'a apprise Camille ?",
              opts: ["British people rarely say what they think, so it's better not to listen to them.", "In Britain, understated words often carry a strong meaning.", "Scottish people never joke at work.", "Good grammar is enough to understand humour."], correct: 1,
              why: "« the less people say, the more they usually mean » : l'understatement cache souvent un message fort." }
          ]
        },
        // --------------------------------------------------------------- VI
        {
          id: "listening", num: "VI", title: "Listening Comprehension", titleFr: "Compréhension orale",
          points: 15, skill: "co", type: "mcq",
          instructions: "Listen to each recording (you can play it again). Ask yourself: what did the speaker literally say, and what did they actually mean? Then choose the right answer.",
          instructionsFr: "Écoute chaque enregistrement (tu peux le réécouter). Demande-toi : qu'a dit la personne littéralement, et qu'a-t-elle vraiment voulu dire ? Puis choisis la bonne réponse.",
          items: [
            { audio: [{ who: "A", text: "So, how was your first week in the new flat?" }, { who: "B", text: "Oh, wonderful. The neighbours play drums until three in the morning, the shower is freezing and the roof leaks. I honestly couldn't be happier." }],
              q: "How does the second speaker really feel about the flat?", qFr: "Que pense vraiment la deuxième personne de son appartement ?",
              opts: ["She is delighted with it.", "She is very unhappy with it and is being ironic.", "She hasn't moved in yet.", "She likes the neighbours' music."], correct: 1,
              why: "Les faits (batterie, douche glacée, fuite) contredisent « wonderful » et « couldn't be happier » : c'est de l'ironie." },
            { audio: "Right, everyone. We may have a slight issue with the launch tomorrow. The factory has just told us that none of the products have been made.",
              q: "How serious is the situation?", qFr: "Quelle est la gravité de la situation ?",
              opts: ["It's a minor detail.", "It's extremely serious, but the speaker is understating it.", "It's good news.", "The speaker is joking; there's no problem."], correct: 1,
              why: "« a slight issue » alors qu'aucun produit n'a été fabriqué la veille du lancement : c'est un understatement typique." },
            { audio: [{ who: "A", text: "Don't worry, Dave said he'll definitely finish the report by tonight." }, { who: "B", text: "Yeah, right. And I'm going to win the lottery tomorrow." }],
              q: "What does the second speaker think?", qFr: "Que pense la deuxième personne ?",
              opts: ["Dave will certainly finish the report.", "She is going to buy a lottery ticket.", "Dave will not finish the report on time.", "She will help Dave with the report."], correct: 2,
              why: "« Yeah, right » + une comparaison absurde (gagner au loto) : sarcasme, elle ne croit pas du tout que Dave finira." },
            { audio: "Honestly, I'm a terrible cook. Last week I managed to burn a salad. Don't ask me how — it's a rare talent.",
              q: "What is the speaker doing?", qFr: "Que fait la personne ?",
              opts: ["Complaining about a restaurant.", "Boasting about her cooking skills.", "Making fun of herself.", "Giving a recipe."], correct: 2,
              why: "« burn a salad » (impossible) et « a rare talent » : elle se moque d'elle-même = autodérision (self-deprecating humour)." },
            { audio: [{ who: "A", text: "I can't believe you told the boss I'm leaving the company!" }, { who: "B", text: "Calm down, I was only pulling your leg. I didn't say a word to him." }],
              q: "What happened?", qFr: "Que s'est-il passé ?",
              opts: ["B told the boss the news.", "B was teasing A; the boss knows nothing.", "A is really leaving the company.", "The boss pulled A's leg."], correct: 1,
              why: "« I was only pulling your leg » = je te faisais marcher : B n'a rien dit au patron." }
          ]
        },
        // -------------------------------------------------------------- VII
        {
          id: "speaking", num: "VII", title: "Speaking", titleFr: "Expression orale",
          points: 15, skill: "eo", type: "ai-oral",
          instructions: "Press the microphone and speak for about one and a half minutes. You can try again, or add to your answer. If the microphone doesn't work, type what you would say.",
          instructionsFr: "Appuie sur le micro et parle environ une minute et demie. Tu peux recommencer, ou compléter ta réponse. Si le micro ne fonctionne pas, écris ce que tu dirais.",
          prompt: "A British colleague asks you: \"So, how was your weekend?\" Your weekend was a small disaster. Tell them about it using British-style humour — at least one understatement and one self-deprecating remark. Then explain, in a more serious tone, one difference between French and British humour.",
          promptFr: "Un collègue britannique te demande : « Alors, ton week-end ? » Ton week-end a été un petit désastre. Raconte-le avec de l'humour à la britannique — au moins un understatement et une remarque d'autodérision. Puis explique, sur un ton plus sérieux, une différence entre l'humour français et l'humour britannique.",
          minWords: 70, targetSeconds: 90,
          rubric: "Total 15 points. Content (4 pts): a short account of a disastrous weekend AND a serious explanation of one difference between French and British humour (e.g. the French tend to exaggerate, the British tend to understate; deadpan delivery; self-deprecation). Humour (4 pts): at least one clear understatement (not exactly, a bit of a, slightly, could be worse, not ideal) and one self-deprecating remark, used naturally. Grammar and vocabulary (4 pts): B2 accuracy in narrative tenses and a range of B2.7 vocabulary (deadpan, understatement, tongue-in-cheek, laugh it off…). Fluency and pronunciation (3 pts): judged from the transcript (about 90 seconds ≈ 140-220 words, natural flow, clear shift of tone between the joke and the serious part; recognition errors suggesting mispronounced words lower this score — mention them).",
          reference: "Example: \"Well, it wasn't exactly relaxing. I was trying to fix a shelf when I drilled straight into a water pipe — a bit of a mistake, as it turned out. As you can imagine, I'm a gifted handyman… Seriously though, I think French people often exaggerate, whereas British people understate things and keep a straight face.\""
        }
      ]
    };

  // =========================================================================
    // B2.8 — READ BETWEEN THE LINES (leçon 47)
    // =========================================================================
    E[47] = {
      code: "B2.8",
      title: "Level test: B2.8 – Read Between the Lines",
      titleFr: "Contrôle de niveau : B2.8 – Lire entre les lignes",
      objective: "Pass level B2.8 and move on to B2.9: vocabulary of implication, attitude adverbs, distancing structures (apparently, be said to…), inference, reading, listening, writing and speaking.",
      objectiveFr: "Valider le niveau B2.8 et passer au B2.9 : vocabulaire de l'implicite, adverbes d'attitude, structures de mise à distance (apparently, be said to…), inférence, compréhension écrite et orale, expression écrite et orale.",
      sections: [
        // ---------------------------------------------------------------- I
        {
          id: "vocab", num: "I", title: "Vocabulary – Decoding the Unsaid", titleFr: "Vocabulaire – décoder le non-dit",
          points: 10, skill: "vo", type: "fill",
          instructions: "Complete each sentence with a word from the list. Change the form if necessary. Some words are not used.",
          instructionsFr: "Complète chaque phrase avec un mot de la liste. Change la forme si nécessaire. Certains mots ne sont pas utilisés.",
          bank: ["imply", "infer", "assume", "hint", "downplay", "bias", "assumption", "loaded", "euphemism", "vague", "subtext", "tone"],
          items: [
            { text: "What exactly are you ___? That I'm not good enough for the job?",
              blanks: [["implying"]],
              why: "« to imply » = sous-entendre : c'est le locuteur qui sous-entend. Présent continu : are you implying." },
            { text: "From her silence, I ___ that she wasn't happy with the decision.",
              blanks: [["inferred"]],
              why: "« to infer » = déduire : c'est l'auditeur qui déduit. Au passé : inferred (double r)." },
            { text: "Don't ___ that everyone agrees with you just because nobody said anything.",
              blanks: [["assume"]],
              why: "« to assume » = supposer, présumer. Faux ami : « assumer » une responsabilité = « to take responsibility »." },
            { text: "The minister ___ the risks, saying there was \"nothing to worry about\".",
              blanks: [["downplayed"]],
              why: "« to downplay » = minimiser. Au passé : downplayed." },
            { text: "She didn't say it directly, but she ___ at a possible promotion.",
              blanks: [["hinted"]],
              why: "« to hint at » = faire allusion à. La préposition « at » est déjà dans la phrase." },
            { text: "\"Why are you always so lazy?\" is a ___ question: it already contains a judgement.",
              blanks: [["loaded"]],
              why: "« a loaded question » = une question orientée, qui contient un présupposé (ici : tu es paresseux)." },
            { text: "\"Between jobs\" is a polite ___ for \"unemployed\".",
              blanks: [["euphemism"]],
              why: "« a euphemism » = un mot doux pour une réalité dure." },
            { text: "The article was clearly ___: it only interviewed people who supported the project.",
              blanks: [["biased"]],
              why: "« biased » = partial, qui a un parti pris (nom : bias). On attend ici un adjectif → biased." },
            { text: "His answer was deliberately ___: \"We'll see\" usually means no.",
              blanks: [["vague"]],
              why: "« vague » = flou. Une réponse volontairement vague est souvent un refus poli." },
            { text: "On the surface it was a friendly email, but the ___ was clear: \"Don't do that again.\"",
              blanks: [["subtext"]],
              why: "« the subtext » = le sous-texte, le message non dit." }
          ]
        },
        // --------------------------------------------------------------- II
        {
          id: "grammar", num: "II", title: "Grammar – Attitude Adverbs and Distancing Structures", titleFr: "Grammaire – adverbes d'attitude et structures de mise à distance",
          points: 15, skill: "gr", type: "fill",
          instructions: "A. Complete with finally, even, still, apparently, supposedly or so-called. B. Rewrite the idea using be said / thought / believed + to. Type only the missing words.",
          instructionsFr: "A. Complète avec finally, even, still, apparently, supposedly ou so-called. B. Reformule l'idée avec be said / thought / believed + to. Tape seulement les mots manquants.",
          bank: ["finally", "even", "still", "apparently", "supposedly", "so-called"],
          items: [
            { header: { en: "A. Attitude adverbs", fr: "A. Les adverbes d'attitude" },
              text: "After three months of negotiations, the client has ___ signed the contract. What a relief!",
              blanks: [["finally"]],
              why: "« finally » = enfin, après une longue attente ou une résistance ; « What a relief! » confirme le soulagement." },
            { text: "It's been two weeks and she ___ hasn't replied to my email.",
              blanks: [["still"]],
              why: "« still » + négation (placé devant l'auxiliaire) : impatience ou agacement." },
            { text: "The film was so funny that ___ my grandfather, who never laughs, was in tears.",
              blanks: [["even"]],
              why: "« even » marque la surprise : on ne s'y attendait pas de la part de ce grand-père." },
            { text: "Our ___ expert got the figures wrong for the third time.",
              blanks: [["so-called"]],
              why: "« so-called » devant un nom = soi-disant, prétendu : l'auteur met en doute ce titre." },
            { text: "I wasn't there, but ___ the meeting ended in a huge argument.",
              blanks: [["apparently"]],
              why: "« apparently » = à ce qu'on dit : information rapportée, non vérifiée (« I wasn't there »)." },
            { text: "This app ___ saves you two hours a day, but I haven't noticed any difference.",
              blanks: [["supposedly"]],
              why: "« supposedly » = soi-disant : on rapporte une affirmation tout en la mettant en doute (« but I haven't noticed… »)." },
            { header: { en: "B. Be said / thought / believed + to", fr: "B. Be said / thought / believed + to" },
              text: "People say that the new manager is very demanding. → The new manager ___ ___ ___ ___ very demanding.",
              blanks: [["is"], ["said"], ["to"], ["be"]],
              why: "« be said + to + base verbale » = on dit que… : The new manager is said to be very demanding." },
            { text: "People think that the thieves left the country last week. → The thieves ___ thought to ___ ___ the country last week.",
              blanks: [["are"], ["have"], ["left"]],
              why: "Action passée → « to have + participe passé » : The thieves are thought to have left the country." },
            { text: "It is believed that the company is losing money. → The company ___ believed to ___ ___ money.",
              blanks: [["is"], ["be"], ["losing"]],
              why: "Action en cours → « to be + -ing » : The company is believed to be losing money." },
            { text: "She seems ___ (forget) about the meeting; she hasn't arrived yet.",
              blanks: [["to have forgotten"]],
              why: "« seem to have + participe passé » pour une action antérieure : she seems to have forgotten (forget → forgotten)." }
          ]
        },
        // -------------------------------------------------------------- III
        {
          id: "inference", num: "III", title: "Secret English – What Is Not Being Said?", titleFr: "Secret English – qu'est-ce qui n'est pas dit ?",
          points: 10, skill: "ce", type: "ai-text",
          instructions: "Read the three short situations. For each one, explain what is suggested without being said (implication, attitude, assumption or hidden meaning) and which words give it away. You may answer in English or in French.",
          instructionsFr: "Lis les trois courtes situations. Pour chacune, explique ce qui est suggéré sans être dit (sous-entendu, attitude, présupposé ou sens caché) et quels mots le révèlent. Tu peux répondre en anglais ou en français.",
          quotes: [
            "1. A reference letter for a job applicant says only: \"Mr Hart always arrived on time and was polite to visitors.\"",
            "2. Your manager replies to your proposal: \"Thanks — some interesting ideas here. I'll bear them in mind.\"",
            "3. A journalist asks a politician: \"When did you stop lying to voters?\""
          ],
          prompt: "Explain the implicit message in each situation and quote the words that reveal it.",
          promptFr: "Explique le message implicite de chaque situation et cite les mots qui le révèlent.",
          minWords: 50,
          rubric: "The learner may answer in English OR in French: do not penalise French. Total 10 points. Situation 1 (3 pts): faint praise / damning with faint praise — by mentioning only punctuality and politeness, the writer implies Mr Hart had no real professional qualities worth mentioning (2 pts meaning, 1 pt identifies what is missing: skills, results). Situation 2 (3 pts): polite rejection or serious reservations — \"interesting\", \"some\" (not all) ideas, \"I'll bear them in mind\" (= probably no action), and no next steps (2 pts meaning, 1 pt quotes at least two revealing words). Situation 3 (4 pts): a loaded question — it assumes the politician has lied (whatever the answer, he admits lying); 2 pts for the assumption/presupposition, 1 pt for the term \"loaded question\" or equivalent, 1 pt for explaining why it is a trap. If the answer is in English, lightly reward accurate use of imply / infer / assumption.",
          reference: "1: faint praise → he wasn't a good employee. 2: polite no / serious doubts (interesting, some, bear in mind, no next steps). 3: loaded question → presupposes he lied."
        },
        // --------------------------------------------------------------- IV
        {
          id: "writing", num: "IV", title: "Writing – Analysing a Biased Text", titleFr: "Expression écrite – analyser un texte partial",
          points: 20, skill: "ee", type: "ai-text",
          instructions: "Read the short news extract below, then write a structured analysis of 180 to 230 words.",
          instructionsFr: "Lis le court extrait d'article ci-dessous, puis rédige une analyse structurée de 180 à 230 mots.",
          quotes: ["\"Once again, so-called 'eco-activists' blocked a major road yesterday, causing misery for thousands of hard-working families who simply wanted to get home. Apparently, the group believes this will save the planet. Local shopkeepers, who have finally had enough, are demanding action.\""],
          prompt: "Analyse the extract: identify the writer's bias and attitude, explain how word choice and small words (once again, so-called, simply, apparently, finally…) reveal it, point out what the text leaves out, and then rewrite the first sentence in a neutral way.",
          promptFr: "Analyse l'extrait : identifie le parti pris et l'attitude de l'auteur, explique comment le choix des mots et les petits mots (once again, so-called, simply, apparently, finally…) le révèlent, montre ce que le texte passe sous silence, puis réécris la première phrase de façon neutre.",
          minWords: 180, maxWords: 230,
          rubric: "Total 20 points. Analysis (7 pts): clearly identifies the bias against the activists / in favour of drivers and shopkeepers; explains at least FOUR revealing words or phrases with their implication (once again = repeated annoyance; so-called + quotation marks = contempt, doubt about their legitimacy; misery / hard-working families / simply wanted = emotional, sympathetic framing of the victims; apparently = distance and scepticism; finally had enough = long-suffering patience, justifies anger). What is left out (3 pts): e.g. the activists' reasons or demands, their voice, numbers, the length of the blockade, other opinions. Neutral rewrite (3 pts): a genuinely neutral first sentence (e.g. \"Yesterday, climate protesters blocked a major road, causing delays for thousands of commuters.\"). Language (4 pts): B2 accuracy, precise use of imply / infer / bias / assumption / word choice / tone. Organisation (3 pts): introduction, structured paragraphs, linking words, conclusion. Length: 180-230 words; deduct up to 2 points if under 150 or over 280.",
          reference: "Key words: once again, so-called + inverted commas, misery, hard-working families, simply, apparently, finally had enough. Missing: protesters' arguments, facts, balance. Neutral: \"Climate activists blocked a main road yesterday, delaying thousands of commuters.\""
        },
        // ---------------------------------------------------------------- V
        {
          id: "reading", num: "V", title: "Reading Comprehension", titleFr: "Compréhension écrite",
          points: 15, skill: "ce", type: "mcq",
          instructions: "Read the text, then choose the right answer for each question. Most answers are implied, not stated directly.",
          instructionsFr: "Lis le texte, puis choisis la bonne réponse pour chaque question. La plupart des réponses sont suggérées, pas écrites directement.",
          passage: "Tom had been at the agency for exactly six months when his annual review arrived. His manager, Helen, was known for choosing her words carefully, so he read her comments twice.\n\n\"Tom has settled in well and is always keen to share his opinions in meetings,\" she wrote. \"His presentations are certainly very creative. He has finally started to meet most of his deadlines, and his relationship with the design team has improved considerably since the spring.\"\n\nTom showed the review to his colleague Aisha, expecting congratulations. She read it slowly and put it down. \"Well,\" she said, \"it could be worse.\"\n\n\"What do you mean? It's all positive!\"\n\n\"Is it? 'Keen to share his opinions' — that usually means you interrupt people. 'Certainly very creative' says nothing about whether the content was any good. 'Finally' and 'most of' tell me you missed a lot of deadlines before. And if your relationship with the designers has improved 'considerably', it must have been pretty bad in the spring.\"\n\nTom was quiet for a moment. \"She didn't mention the Harrison account at all,\" he said. \"I spent weeks on that.\"\n\n\"Exactly,\" replied Aisha. \"Sometimes what isn't there is the loudest part of the message.\"\n\nThe following week, Tom asked Helen for a meeting. He didn't argue; he simply asked, \"Just to make sure I understand, what are the two things you'd most like me to improve?\" Helen seemed relieved, and for the first time, the conversation was completely open.",
          items: [
            { q: "According to Aisha, what does \"always keen to share his opinions in meetings\" imply?", qFr: "D'après Aisha, que sous-entend « always keen to share his opinions in meetings » ?",
              opts: ["That Tom is a natural leader.", "That Tom tends to interrupt or talk too much.", "That Tom is too shy in meetings.", "That Helen agrees with all his opinions."], correct: 1,
              why: "« that usually means you interrupt people » : sous l'apparence d'un compliment, c'est une critique." },
            { q: "What do the words \"finally\" and \"most of\" suggest?", qFr: "Que suggèrent les mots « finally » et « most of » ?",
              opts: ["Tom has always been perfectly punctual.", "Tom used to miss deadlines and still misses some.", "Tom has no deadlines any more.", "Helen is impatient with the design team."], correct: 1,
              why: "« finally » = après une longue attente (il les ratait avant) ; « most of » = pas toutes (il en rate encore)." },
            { q: "What is the significance of the Harrison account not being mentioned?", qFr: "Quelle est la signification de l'absence de mention du dossier Harrison ?",
              opts: ["Helen forgot about it.", "It was confidential.", "Helen was probably not satisfied with his work on it.", "It was not Tom's project."], correct: 2,
              why: "« Sometimes what isn't there is the loudest part of the message » : le silence sur ce dossier est un message négatif implicite." },
            { q: "When Aisha says \"it could be worse\", she means that…", qFr: "Quand Aisha dit « it could be worse », elle veut dire que…",
              opts: ["the review is excellent.", "the review is not really good, although it isn't a disaster.", "Tom should leave the company.", "she hasn't read it properly."], correct: 1,
              why: "« It could be worse » relativise une situation plutôt mauvaise (understatement, rappel B2.7) : l'évaluation n'est pas bonne." },
            { q: "Why did Helen seem relieved at the end?", qFr: "Pourquoi Helen a-t-elle semblé soulagée à la fin ?",
              opts: ["Because Tom accepted to leave the agency.", "Because Tom understood the hidden message and asked a clear, non-aggressive question.", "Because Tom thanked her for the positive review.", "Because the Harrison account was finished."], correct: 1,
              why: "Tom a compris le non-dit et a demandé calmement de clarifier (« Just to make sure I understand… ») : Helen peut enfin parler franchement." }
          ]
        },
        // --------------------------------------------------------------- VI
        {
          id: "listening", num: "VI", title: "Listening Comprehension", titleFr: "Compréhension orale",
          points: 15, skill: "co", type: "mcq",
          instructions: "Listen to each recording (you can play it again), then choose what the speaker is really suggesting.",
          instructionsFr: "Écoute chaque enregistrement (tu peux le réécouter), puis choisis ce que la personne suggère vraiment.",
          items: [
            { audio: [{ who: "A", text: "Sorry I'm late, the bus was delayed." }, { who: "B", text: "Ah, you've finally decided to join us. We were just finishing, actually." }],
              q: "What is B suggesting?", qFr: "Que suggère B ?",
              opts: ["A is early.", "A is very late and B is annoyed.", "The meeting is about to start.", "B is happy to see A."], correct: 1,
              why: "« finally decided to join us » (comme si c'était un choix) + « we were just finishing » : reproche ironique, A est très en retard." },
            { audio: "Apparently, the new CEO is going to cut the budget by half. That's what I heard in the lift, anyway, so don't quote me on it.",
              q: "How reliable is the information?", qFr: "L'information est-elle fiable ?",
              opts: ["It's official and confirmed.", "It's a rumour the speaker hasn't checked.", "The speaker read it in a report.", "The CEO told the speaker directly."], correct: 1,
              why: "« Apparently », « what I heard in the lift », « don't quote me on it » : information rapportée, non vérifiée." },
            { audio: [{ who: "A", text: "Would you be interested in joining the weekend training programme?" }, { who: "B", text: "Hmm, it sounds really interesting. I'll definitely think about it." }],
              q: "What will B probably do?", qFr: "Que va probablement faire B ?",
              opts: ["Sign up immediately.", "Politely decline, or not join.", "Organise the programme.", "Ask for more weekend work."], correct: 1,
              why: "« It sounds interesting » + « I'll think about it », sans engagement ni question : un refus poli et implicite." },
            { audio: "Even Mr Fletcher said the presentation was good, and he hasn't praised anyone since 2015.",
              q: "What do we learn about Mr Fletcher?", qFr: "Qu'apprend-on sur M. Fletcher ?",
              opts: ["He praises everyone.", "He is rarely positive, so his praise is significant.", "He gave the presentation.", "He didn't like the presentation."], correct: 1,
              why: "« Even Mr Fletcher » + « hasn't praised anyone since 2015 » : il ne complimente presque jamais, donc son avis compte." },
            { audio: [{ who: "A", text: "How's your new flatmate?" }, { who: "B", text: "Well, he's very… tidy. And he's got a lot of rules. Printed rules. On the fridge." }],
              q: "What does B think of the flatmate?", qFr: "Que pense B de son colocataire ?",
              opts: ["B finds him too controlling.", "B admires his organisation.", "B has never met him.", "B wants to add more rules."], correct: 0,
              why: "Hésitation (« very… tidy »), accumulation (« rules. Printed rules. On the fridge. ») : B trouve le colocataire excessif, sans le dire directement." }
          ]
        },
        // -------------------------------------------------------------- VII
        {
          id: "speaking", num: "VII", title: "Speaking", titleFr: "Expression orale",
          points: 15, skill: "eo", type: "ai-oral",
          instructions: "Press the microphone and speak for about one and a half minutes. You can try again, or add to your answer. If the microphone doesn't work, type what you would say.",
          instructionsFr: "Appuie sur le micro et parle environ une minute et demie. Tu peux recommencer, ou compléter ta réponse. Si le micro ne fonctionne pas, écris ce que tu dirais.",
          prompt: "Imagine this situation: your friend says, \"My boss said my report was 'interesting' and that she'd 'get back to me at some point'. She finally replied after two weeks.\" Explain to your friend what the boss is probably implying and why (quote the key words), then advise them on how to clarify the situation politely.",
          promptFr: "Imagine la situation : ton ami(e) te dit : « Ma cheffe a dit que mon rapport était « interesting » et qu'elle « reviendrait vers moi à un moment ». Elle a fini par répondre au bout de deux semaines. » Explique-lui ce que la cheffe sous-entend probablement et pourquoi (cite les mots clés), puis conseille-lui comment clarifier la situation poliment.",
          minWords: 70, targetSeconds: 90,
          rubric: "Total 15 points. Interpretation (5 pts): explains the probable implication (reservations / lack of enthusiasm / low priority) and analyses at least THREE clues: \"interesting\", \"at some point\" (vague, no commitment), \"finally\" and the two-week delay. Advice (3 pts): a polite way to clarify, ideally with a model sentence (Just to make sure I understand, are you saying that…? / Could we have a quick chat about the report?). Language (4 pts): B2 accuracy, use of imply / suggest / infer / seem to / apparently, hedging (probably, might, I'd say). Fluency and pronunciation (3 pts): judged from the transcript (about 90 seconds ≈ 140-220 words, natural flow; recognition errors suggesting mispronounced words lower this score — mention them).",
          reference: "Example: \"I think she's implying that she isn't very impressed. 'Interesting' is often a polite way of saying 'I have doubts', 'at some point' is vague, and 'finally' after two weeks suggests it isn't a priority. I'd ask her: 'Just to make sure I understand, is there anything you'd like me to change?'\""
        }
      ]
    };

  // =========================================================================
    // B2.9 — DIGITAL ENGLISH (leçon 48)
    // =========================================================================
    E[48] = {
      code: "B2.9",
      title: "Level test: B2.9 – Digital English",
      titleFr: "Contrôle de niveau : B2.9 – L'anglais numérique",
      objective: "Pass level B2.9 and move on to B2.10: digital vocabulary and abbreviations, softened written requests, adapting a message to the channel and the reader, reading, listening, writing and speaking.",
      objectiveFr: "Valider le niveau B2.9 et passer au B2.10 : vocabulaire et abréviations du numérique, demandes écrites adoucies, adaptation du message au canal et au destinataire, compréhension écrite et orale, expression écrite et orale.",
      sections: [
        // ---------------------------------------------------------------- I
        {
          id: "vocab", num: "I", title: "Vocabulary – Emails, Chats and Social Media", titleFr: "Vocabulaire – emails, messageries et réseaux sociaux",
          points: 10, skill: "vo", type: "fill",
          instructions: "A. Write the full meaning of the abbreviation in English. B. Complete each sentence with a word or expression from the list, in the right form.",
          instructionsFr: "A. Écris en anglais la signification complète de l'abréviation. B. Complète chaque phrase avec un mot ou une expression de la liste, à la bonne forme.",
          bank: ["follow up", "loop in", "escalate", "reach out", "forward", "get back to", "subject line", "caption", "thread", "mute"],
          items: [
            { header: { en: "A. What do these abbreviations stand for?", fr: "A. Que signifient ces abréviations ?" },
              text: "FYI = ___",
              blanks: [["for your information"]],
              why: "FYI = for your information (pour info). À éviter seul, sans explication : il peut sembler sec." },
            { text: "ASAP = ___",
              blanks: [["as soon as possible"]],
              why: "ASAP = as soon as possible. Peut paraître pressant avec un supérieur : préfère « when you get a chance »." },
            { text: "EOD = ___",
              blanks: [["end of day", "end of the day"]],
              why: "EOD = end of (the) day : « I'll send it by EOD » = d'ici ce soir." },
            { header: { en: "B. Complete with a word or expression from the list", fr: "B. Complète avec un mot ou une expression de la liste" },
              text: "Just ___ on my email from Monday — have you had a chance to look at the budget?",
              blanks: [["following up"]],
              why: "« Just following up on… » = la relance polie par excellence (sujet et auxiliaire omis : I'm just following up)." },
            { text: "I'm ___ Sarah ___, as she's in charge of the budget.",
              blanks: [["looping"], ["in"]],
              why: "« to loop someone in » = mettre quelqu'un dans la boucle. Le nom se place entre le verbe et la particule, ou après : looping in Sarah." },
            { text: "The agent couldn't solve my problem, so I asked her to ___ it to a manager.",
              blanks: [["escalate"]],
              why: "« to escalate » = faire remonter à un niveau supérieur. Après « to », base verbale." },
            { text: "Thanks for ___ ___! A member of our team will contact you shortly.",
              blanks: [["reaching"], ["out"]],
              why: "« Thanks for reaching out » = merci de nous avoir contactés. Après « for », -ing." },
            { text: "I'll look into it and ___ ___ ___ you by Friday.",
              blanks: [["get"], ["back"], ["to"]],
              why: "« to get back to someone » = revenir vers quelqu'un. Plus naturel que « I will answer you »." },
            { text: "Your email has no ___, so nobody will know what it's about before opening it.",
              blanks: [["subject line", "subject"]],
              why: "« subject line » = l'objet d'un email. Faux ami : jamais « object »." },
            { text: "Sorry, can you say that again? You were on ___ for the first two minutes.",
              blanks: [["mute"]],
              why: "« You're on mute! » = ton micro est coupé. « on mute » (nom) après la préposition." }
          ]
        },
        // --------------------------------------------------------------- II
        {
          id: "grammar", num: "II", title: "Grammar – Softened Requests and Informal Ellipsis", titleFr: "Grammaire – demandes adoucies et ellipses informelles",
          points: 15, skill: "gr", type: "fill",
          instructions: "A. Make the direct requests polite by completing the sentences. B. Write the full sentence that the informal message stands for. Type only the missing words.",
          instructionsFr: "A. Rends les demandes directes polies en complétant les phrases. B. Écris la phrase complète que le message informel sous-entend. Tape seulement les mots manquants.",
          items: [
            { header: { en: "A. From direct to polite", fr: "A. Du direct au poli" },
              text: "\"Help me with my order.\" → \"I ___ ___ if you could help me with my order.\"",
              blanks: [["was"], ["wondering"]],
              why: "« I was wondering if you could… » : le Past Continuous adoucit la demande, il ne parle pas du passé." },
            { text: "\"Send it again.\" → \"Would you mind ___ it again?\"",
              blanks: [["sending"]],
              why: "« Would you mind + -ing » : Would you mind sending it again?" },
            { text: "\"Give me an update.\" → \"Would it ___ ___ to have an update on my case?\"",
              blanks: [["be"], ["possible"]],
              why: "« Would it be possible to + base verbale…? » = serait-il possible de… ?" },
            { text: "\"Answer before Friday.\" → \"I'd really ___ your feedback by Friday.\"",
              blanks: [["appreciate"]],
              why: "« I'd really appreciate your feedback by Friday » = une demande ferme mais polie, avec une échéance." },
            { text: "\"Call me.\" → \"Could you ___ give me a call when you get a ___?\"",
              blanks: [["possibly"], ["chance"]],
              why: "« Could you possibly…? » renforce la politesse ; « when you get a chance » = quand vous aurez un moment." },
            { text: "\"I want to check something.\" → \"I ___ wanted to check one thing.\"",
              blanks: [["just"]],
              why: "« just » adoucit la demande : I just wanted to check… (le passé « wanted » ajoute de la distance polie)." },
            { header: { en: "B. Informal messages: what is the full sentence?", fr: "B. Messages informels : quelle est la phrase complète ?" },
              text: "\"Running late!\" = \"___ ___ running late!\"",
              blanks: [["I"], ["am", "'m"]],
              why: "Dans un message informel, le sujet et l'auxiliaire disparaissent : Running late = I'm running late." },
            { text: "\"Can't make it tonight.\" = \"___ can't make it tonight.\"",
              blanks: [["I"]],
              why: "« Can't make it » = I can't make it (je ne peux pas venir) : ellipse du sujet." },
            { text: "\"Sounds good!\" = \"___ sounds good!\"",
              blanks: [["that", "it"]],
              why: "« Sounds good » = That / It sounds good : le sujet « that » est sous-entendu." },
            { text: "\"Be there in 5.\" = \"I ___ be there in five minutes.\"",
              blanks: [["will", "'ll"]],
              why: "« Be there in 5 » = I'll be there in five minutes : sujet + « will » omis." }
          ]
        },
        // -------------------------------------------------------------- III
        {
          id: "registers", num: "III", title: "Mission – One Message, Four Readers", titleFr: "Mission – un message, quatre destinataires",
          points: 10, skill: "ee", type: "ai-text",
          instructions: "Write the same message four times, adapting the channel, the length and the tone to each reader. Label each version (1, 2, 3, 4). About 15 to 40 words per version.",
          instructionsFr: "Écris le même message quatre fois, en adaptant le canal, la longueur et le ton à chaque destinataire. Numérote chaque version (1, 2, 3, 4). Environ 15 à 40 mots par version.",
          quotes: [
            "Message: you can't attend the Thursday 4 pm meeting / appointment and want to reschedule it for next week.",
            "1. A close friend (WhatsApp)",
            "2. A colleague (team chat)",
            "3. Your manager (email)",
            "4. A company's customer service (live chat — appointment ref. 7730)"
          ],
          prompt: "Write the four versions of the message.",
          promptFr: "Écris les quatre versions du message.",
          minWords: 70, maxWords: 170,
          rubric: "Total 10 points, 2.5 points per version. For each version: register and tone appropriate to the reader and channel (1.5 pts), clear message: cancelling + proposing to reschedule next week (0.5 pt), accuracy (0.5 pt). Expected: 1 = informal, elliptical (Can't make Thursday, sorry! Next week?), emoji acceptable; 2 = neutral, direct but friendly (Hi Tom, I won't be able to make Thursday's 4 pm meeting — could we move it to next week?); 3 = polite, complete sentences, greeting and sign-off, softened request (Hi Anna, I'm afraid I won't be able to attend… Would it be possible to reschedule…? Apologies for the inconvenience. Kind regards); 4 = factual and precise with the reference number 7730 and a clear request (I'd like to reschedule my appointment ref. 7730 on Thursday at 4 pm to next week, if possible). Deduct if the manager version is too casual (TBH, BTW, ASAP) or the friend version absurdly formal.",
          reference: "1: Hey! Can't make Thurs, sorry 😕 Next week? 2: Hi Tom, can't make Thursday's 4 pm, could we push it to next week? 3: Hi Anna, I'm afraid I won't be able to attend… Would it be possible to reschedule it for next week? Kind regards. 4: Hello, I'd like to reschedule my appointment (ref. 7730) on Thursday at 4 pm to next week, if possible."
        },
        // --------------------------------------------------------------- IV
        {
          id: "writing", num: "IV", title: "Writing – A Complaint to Customer Service", titleFr: "Expression écrite – une réclamation au service client",
          points: 20, skill: "ee", type: "ai-text",
          instructions: "Write a professional email of 170 to 220 words. Stay polite but firm.",
          instructionsFr: "Rédige un email professionnel de 170 à 220 mots. Reste poli(e) mais ferme.",
          prompt: "Three weeks ago you ordered a laptop online (order no. 58214). It arrived with a cracked screen. You contacted customer service via live chat ten days ago and were promised a replacement \"within 48 hours\", but nothing has happened and your two follow-up messages have received no reply. Write an email to the company: give a clear subject line, explain the situation with the key facts, say what you expect (a replacement or a full refund, by a specific date), ask for your case to be escalated if necessary, and close appropriately.",
          promptFr: "Il y a trois semaines, tu as commandé un ordinateur portable en ligne (commande n° 58214). Il est arrivé avec l'écran fissuré. Tu as contacté le service client par chat il y a dix jours et on t'a promis un remplacement « sous 48 heures », mais rien ne s'est passé et tes deux relances sont restées sans réponse. Écris un email à l'entreprise : un objet clair, la situation avec les faits essentiels, ce que tu attends (un remplacement ou un remboursement complet, avant une date précise), une demande de transmission à un responsable si nécessaire, et une formule de fin adaptée.",
          minWords: 170, maxWords: 220,
          rubric: "Total 20 points. Task achievement (6 pts): clear subject line; order number; the facts in logical order (order, cracked screen, live chat promise, two unanswered follow-ups); a precise expectation (replacement or refund) with a deadline; a request to escalate; appropriate closing. Register and tone (5 pts): polite but firm, factual, no aggression, no sarcasm or passive-aggressive phrases (e.g. \"As per my last email\"), no informal abbreviations (ASAP, TBH…); softened yet clear requests (I would appreciate…, Could you please…, I would be grateful if…). Grammar (4 pts): B2 accuracy, correct tenses (Past Simple, Present Perfect for the unresolved situation: I have not received…), indirect requests. Vocabulary (3 pts): B2.9 vocabulary used naturally (follow up, reference/order number, live chat, escalate, get back to, replacement, refund). Organisation (2 pts): clear paragraphs following the email structure (greeting → purpose → details → action expected → sign-off). Length: 170-220 words; deduct up to 2 points if under 140 or over 270 words.",
          reference: "Subject: Order no. 58214 – damaged laptop, replacement still pending. Dear Customer Service team, I am writing regarding… On [date] I contacted you via live chat… I was assured that… However, I have not received… despite two follow-up messages. I would therefore appreciate a replacement or a full refund by [date]. If this is not possible, could you please escalate my case to a manager? I look forward to hearing from you. Kind regards,"
        },
        // ---------------------------------------------------------------- V
        {
          id: "reading", num: "V", title: "Reading Comprehension", titleFr: "Compréhension écrite",
          points: 15, skill: "ce", type: "mcq",
          instructions: "Read the email thread, then choose the right answer for each question.",
          instructionsFr: "Lis cet échange d'emails, puis choisis la bonne réponse pour chaque question.",
          passage: "From: Leila Haddad\nTo: Marcus Webb\nCc: Sophie Grant\nSubject: Spring campaign – visuals needed by Wednesday\n\nHi Marcus,\n\nHope you had a good weekend. Just following up on the spring campaign visuals we discussed on Tuesday. The client has moved the launch forward by a week, so we now need the final versions by Wednesday at noon rather than Friday.\n\nI realise this is short notice, and I'm sorry for the change. Would it be possible to send me a first draft by tomorrow evening, even if it isn't polished? That way, Sophie can check the colours with the client before the final deadline. I've looped her in so she has the full context.\n\nIf Wednesday isn't realistic, please let me know today and I'll see if I can negotiate a few extra hours.\n\nThanks so much,\nLeila\n\n—\n\nFrom: Marcus Webb\nTo: Leila Haddad\nCc: Sophie Grant\nSubject: RE: Spring campaign – visuals needed by Wednesday\n\nHi Leila,\n\nThanks for the heads-up. Wednesday is tight but doable, as long as the client doesn't change the slogan again (fingers crossed!). I'll send you a rough draft by 6 pm tomorrow.\n\nOne quick question: are we still using the green logo, or the new blue one? I'd rather not redo everything on Tuesday night.\n\nBest,\nMarcus",
          items: [
            { q: "Why is Leila writing to Marcus?", qFr: "Pourquoi Leila écrit-elle à Marcus ?",
              opts: ["To cancel the spring campaign.", "To tell him the deadline is now earlier and ask for a first draft.", "To complain about the quality of his work.", "To invite him to meet the client."], correct: 1,
              why: "« The client has moved the launch forward… we now need the final versions by Wednesday… Would it be possible to send me a first draft by tomorrow evening? »" },
            { q: "Why has Sophie been copied into the email?", qFr: "Pourquoi Sophie est-elle en copie ?",
              opts: ["She is Marcus's manager.", "She will check the colours with the client and needs the context.", "She made a mistake in the campaign.", "She is replacing Leila."], correct: 1,
              why: "« Sophie can check the colours with the client… I've looped her in so she has the full context »." },
            { q: "How does Leila make her request sound polite?", qFr: "Comment Leila rend-elle sa demande polie ?",
              opts: ["She uses ASAP and capital letters.", "She apologises, uses an indirect question and offers flexibility.", "She threatens to tell the client.", "She doesn't make any request."], correct: 1,
              why: "« I'm sorry for the change », « Would it be possible to…? », « If Wednesday isn't realistic, please let me know » : excuse + demande indirecte + souplesse." },
            { q: "What does Marcus imply with \"as long as the client doesn't change the slogan again (fingers crossed!)\"?", qFr: "Que sous-entend Marcus avec « as long as the client doesn't change the slogan again (fingers crossed!) » ?",
              opts: ["The client has already changed the slogan before.", "Marcus wrote the slogan himself.", "The slogan is perfect and will never change.", "Marcus refuses to work on Wednesday."], correct: 0,
              why: "« again » présuppose que le client a déjà changé le slogan (lire entre les lignes, rappel B2.8) ; « fingers crossed » = croisons les doigts." },
            { q: "What does Marcus want to avoid?", qFr: "Qu'est-ce que Marcus veut éviter ?",
              opts: ["Sending a draft tomorrow.", "Talking to Sophie.", "Having to redo all the visuals at the last minute because of the logo.", "Working with the green logo."], correct: 2,
              why: "« I'd rather not redo everything on Tuesday night » : il demande quel logo utiliser pour ne pas devoir tout refaire au dernier moment." }
          ]
        },
        // --------------------------------------------------------------- VI
        {
          id: "listening", num: "VI", title: "Listening Comprehension", titleFr: "Compréhension orale",
          points: 15, skill: "co", type: "mcq",
          instructions: "Listen to each voice note, call or online meeting extract (you can play it again), then choose the right answer.",
          instructionsFr: "Écoute chaque message vocal, appel ou extrait de visioconférence (tu peux le réécouter), puis choisis la bonne réponse.",
          items: [
            { audio: "Hey, it's Priya. Quick voice note because I'm driving. Can you forward me the hotel booking? I can't find the email anywhere. And FYI, the dinner's been pushed back to eight. Talk later!",
              q: "What does Priya ask the listener to do?", qFr: "Que demande Priya ?",
              opts: ["Book a hotel.", "Send her the hotel booking email.", "Call her back immediately.", "Cancel the dinner."], correct: 1,
              why: "« Can you forward me the hotel booking? » = transfère-moi la réservation. Le dîner est seulement décalé à 20 h." },
            { audio: [{ who: "A", text: "Okay, so as I was saying, the figures for March are… Hello? Can everyone hear me?" }, { who: "B", text: "Sorry, Mike, you're on mute. We haven't heard anything for the last minute." }],
              q: "What is the problem during the online meeting?", qFr: "Quel est le problème pendant la visioconférence ?",
              opts: ["Mike's camera is off.", "Mike's microphone is muted.", "The figures are wrong.", "B has left the meeting."], correct: 1,
              why: "« you're on mute » = ton micro est coupé : personne ne l'a entendu depuis une minute." },
            { audio: "Thank you for calling. Your case has been escalated to our complaints team. Please keep your reference number, K-4-9-2, and expect an email within three working days.",
              q: "What will happen next?", qFr: "Que va-t-il se passer ensuite ?",
              opts: ["The customer will get a refund today.", "The complaints team will send an email within three working days.", "The customer must call again tomorrow.", "The case is closed."], correct: 1,
              why: "« escalated to our complaints team » + « expect an email within three working days »." },
            { audio: [{ who: "A", text: "Did you see the email Rob sent to the whole company?" }, { who: "B", text: "The one where he replied all to complain about his manager? Yes. Awkward. I don't think he meant everyone to read it." }],
              q: "What mistake did Rob make?", qFr: "Quelle erreur Rob a-t-il faite ?",
              opts: ["He forgot the attachment.", "He clicked \"reply all\" and his complaint went to everyone.", "He sent the email to the wrong client.", "He didn't reply at all."], correct: 1,
              why: "« he replied all to complain about his manager » : son message privé est parti à toute l'entreprise." },
            { audio: "Hi Anna, it's Ben from Accounts. Sorry to bother you. I just wanted to check whether you'd had a chance to look at the invoice I sent on Monday. No rush, but if you could get back to me by Thursday, that'd be great.",
              q: "What is the tone and purpose of Ben's message?", qFr: "Quels sont le ton et le but du message de Ben ?",
              opts: ["An angry complaint about a late payment.", "A polite follow-up with a soft deadline.", "An invitation to a meeting.", "A reminder that Anna owes him money personally."], correct: 1,
              why: "« Sorry to bother you », « I just wanted to check », « No rush… by Thursday, that'd be great » : relance polie avec une échéance souple." }
          ]
        },
        // -------------------------------------------------------------- VII
        {
          id: "speaking", num: "VII", title: "Speaking – Leaving a Voice Message", titleFr: "Expression orale – laisser un message vocal",
          points: 15, skill: "eo", type: "ai-oral",
          instructions: "Press the microphone and record your message (about one minute). You can try again, or add to your answer. If the microphone doesn't work, type what you would say.",
          instructionsFr: "Appuie sur le micro et enregistre ton message (environ une minute). Tu peux recommencer, ou compléter ta réponse. Si le micro ne fonctionne pas, écris ce que tu dirais.",
          prompt: "Record TWO voice messages about the same problem: your train is cancelled and you will miss the start of tomorrow's 9 am workshop that you are running. Message 1: to your manager (polite, clear, with a solution). Message 2: to a close colleague and friend who will attend (relaxed and informal, asking a favour).",
          promptFr: "Enregistre DEUX messages vocaux sur le même problème : ton train est annulé et tu vas rater le début de l'atelier de 9 h demain, que tu animes. Message 1 : à ta ou ton manager (poli, clair, avec une solution). Message 2 : à un(e) collègue proche et ami(e) qui y participe (détendu et informel, en lui demandant un service).",
          minWords: 70, targetSeconds: 75,
          rubric: "Total 15 points. Content (4 pts): both messages explain the problem (train cancelled, late for the 9 am workshop); message 1 proposes a solution (arrival time, starting later, a colleague starting, joining online); message 2 asks a favour. Register contrast (5 pts): message 1 is polite and structured (Hi…, it's…, I'm afraid…, Would it be possible…, I'll keep you posted, Sorry for the inconvenience); message 2 is clearly more relaxed (Hey, nightmare, could you do me a favour, cheers…) — the difference between the two must be obvious. Language (3 pts): B2 accuracy; softened requests (I was wondering if…, Would you mind + -ing). Fluency and pronunciation (3 pts): judged from the transcript (about 60-90 seconds ≈ 100-180 words, natural flow; recognition errors suggesting mispronounced words lower this score — mention them).",
          reference: "1: \"Hi Karen, it's Julien. I'm afraid my train has been cancelled, so I'll probably arrive around 9:45. Would it be possible for Sam to start the workshop with the introduction? I'll keep you posted. Sorry for the inconvenience.\" 2: \"Hey Sam, total nightmare, my train's cancelled! Could you do me a massive favour and kick off the workshop? Slides are in the shared folder. Cheers, I owe you one!\""
        }
      ]
    };

  // =========================================================================
    // B2.10 — THINKING IN ENGLISH (leçon 49)
    // =========================================================================
    E[49] = {
      code: "B2.10",
      title: "Level test: B2.10 – Thinking in English",
      titleFr: "Contrôle de niveau : B2.10 – Penser en anglais",
      objective: "Pass level B2.10 and move on to B2.11: time-buying chunks, paraphrasing a missing word with relative clauses, describing a scene, answering hypothetical questions (If I had to…, I'd…), reading, listening, writing and spontaneous speaking.",
      objectiveFr: "Valider le niveau B2.10 et passer au B2.11 : formules pour gagner du temps, paraphrase d'un mot manquant avec les relatives, description d'une scène, réponses aux questions hypothétiques (If I had to…, I'd…), compréhension écrite et orale, expression écrite et orale spontanée.",
      sections: [
        // ---------------------------------------------------------------- I
        {
          id: "vocab", num: "I", title: "Vocabulary – Chunks for Thinking on Your Feet", titleFr: "Vocabulaire – les blocs de mots pour improviser",
          points: 10, skill: "vo", type: "fill",
          instructions: "Complete each sentence with the missing word(s). The first letter is sometimes given. Use the expressions from this unit.",
          instructionsFr: "Complète chaque phrase avec le ou les mots manquants. La première lettre est parfois donnée. Utilise les expressions de ce palier.",
          bank: ["tricky", "tip", "top", "put", "escapes", "background", "foreground", "judging", "gut", "feet", "across", "come up with"],
          items: [
            { text: "Hmm, that's a ___ one — let me think for a second.",
              blanks: [["tricky"]],
              why: "« That's a tricky one » = c'est une question délicate : tu gagnes du temps en valorisant la question." },
            { text: "Off the ___ of my head, I'd say the trip costs about 500 euros.",
              blanks: [["top"]],
              why: "« Off the top of my head » = comme ça, de mémoire, sans vérifier." },
            { text: "What's the word again? It's on the ___ of my tongue!",
              blanks: [["tip"]],
              why: "« on the tip of my tongue » = sur le bout de la langue : même image qu'en français." },
            { text: "I'm sorry, the word ___ me, but it's a kind of tool for cutting metal.",
              blanks: [["escapes"]],
              why: "« The word escapes me » = le mot m'échappe (3e personne : escapes). Version soutenue, idéale en réunion." },
            { text: "How can I ___ it? It's not exactly a problem, more of a challenge.",
              blanks: [["put"]],
              why: "« How can I put it? » = comment dire ? Ici « put » = formuler." },
            { text: "In the ___ of the photo, a little girl is holding a balloon, and in the ___, you can see some mountains.",
              blanks: [["foreground"], ["background"]],
              why: "« in the foreground » = au premier plan ; « in the background » = à l'arrière-plan. Jamais « in the first plan »." },
            { text: "___ by their heavy coats, it must be winter.",
              blanks: [["judging"]],
              why: "« Judging by… » = à en juger par… : on justifie une hypothèse par un indice." },
            { text: "My ___ reaction was to refuse, but after thinking about it, I accepted.",
              blanks: [["gut"]],
              why: "« gut reaction » = réaction instinctive, première impression." },
            { text: "Good presenters can think on their ___ when someone asks an unexpected question.",
              blanks: [["feet"]],
              why: "« to think on your feet » = réagir vite, improviser." },
            { text: "My English isn't perfect, but I always manage to get my point ___.",
              blanks: [["across"]],
              why: "« to get one's point across » = faire passer son idée. « pass my message » est un calque." }
          ]
        },
        // --------------------------------------------------------------- II
        {
          id: "grammar", num: "II", title: "Grammar – Relative Clauses and Hypotheses", titleFr: "Grammaire – propositions relatives et hypothèses",
          points: 15, skill: "gr", type: "fill",
          instructions: "A. Complete the definitions with who, which / that, where or when. B. Put the verbs in brackets into the correct form. Type only the missing words.",
          instructionsFr: "A. Complète les définitions avec who, which / that, where ou when. B. Mets les verbes entre parenthèses à la forme qui convient. Tape seulement les mots manquants.",
          items: [
            { header: { en: "A. Paraphrase with relative clauses", fr: "A. Paraphraser avec les relatives" },
              text: "A plumber is someone ___ repairs pipes and taps.",
              blanks: [["who", "that"]],
              why: "Pour une personne : « someone who » (« that » est aussi possible). Jamais « which » pour une personne." },
            { text: "A fridge is something ___ keeps food cold.",
              blanks: [["that", "which"]],
              why: "Pour une chose, sujet du verbe : « something that / which keeps… »." },
            { text: "A library is a place ___ you can borrow books for free.",
              blanks: [["where"]],
              why: "« a place where + sujet + verbe » : where you can borrow books." },
            { text: "Rush hour is the time ___ everyone is travelling to or from work.",
              blanks: [["when"]],
              why: "Pour un moment : « the time when + sujet + verbe »." },
            { text: "It's similar ___ a spoon, but it has holes in it.",
              blanks: [["to"]],
              why: "Toujours « similar TO » — jamais « similar of » ni « similar than »." },
            { header: { en: "B. Answering hypothetical questions", fr: "B. Répondre aux questions hypothétiques" },
              text: "If I ___ (have to) choose one superpower, I ___ (choose) invisibility.",
              blanks: [["had to"], ["would choose", "'d choose"]],
              why: "Hypothèse : « If + Past Simple, would + base verbale » : If I had to choose, I'd choose… Jamais « would » après « if »." },
            { text: "What ___ you ___ (do) if you won a million euros?",
              blanks: [["would"], ["do"]],
              why: "Question hypothétique : « What would you do if you won…? » (won = Past Simple de win)." },
            { text: "If I ___ (be) you, I'd accept the job offer without hesitating.",
              blanks: [["were", "was"]],
              why: "« If I were you » est la forme soignée (« If I was you » est courant à l'oral, plus familier)." },
            { text: "If I could live anywhere, I ___ (rather / live) by the sea than in a big city.",
              blanks: [["would rather live", "'d rather live"]],
              why: "« I'd rather + base verbale (+ than…) » = je préférerais : I'd rather live by the sea." },
            { text: "It looks as if it ___ (rain) any minute now: the sky is completely black.",
              blanks: [["is going to rain", "'s going to rain", "is about to rain", "'s about to rain"]],
              why: "« It looks as if + proposition complète » ; prédiction fondée sur un indice visible → « be going to » (ou « be about to »)." }
          ]
        },
        // -------------------------------------------------------------- III
        {
          id: "paraphrase", num: "III", title: "Mission – The Word Escapes Me", titleFr: "Mission – le mot m'échappe",
          points: 10, skill: "vo", type: "ai-text",
          instructions: "Imagine you have forgotten the English word for each object or idea below. Describe each one in English WITHOUT using the word itself (or the French word), so that a native speaker could guess it. One or two sentences per item.",
          instructionsFr: "Imagine que tu as oublié le mot anglais pour chaque objet ou idée ci-dessous. Décris chacun en anglais SANS utiliser le mot lui-même (ni le mot français), pour qu'un anglophone puisse le deviner. Une ou deux phrases par élément.",
          quotes: ["1. un tire-bouchon", "2. un(e) pharmacien(ne)", "3. une salle d'attente", "4. la rentrée (des classes)", "5. un parapluie"],
          prompt: "Describe the five items using paraphrase strategies (It's a kind of…, It's something that…, someone who…, a place where…, the time when…, It's similar to…).",
          promptFr: "Décris les cinq éléments avec les stratégies de paraphrase (It's a kind of…, It's something that…, someone who…, a place where…, the time when…, It's similar to…).",
          minWords: 50,
          rubric: "Total 10 points, 2 points per item. For each item: 1 point if the description is clear and precise enough for a native speaker to guess the word (corkscrew; pharmacist / chemist; waiting room; the start of the school year / back to school; umbrella); 1 point for correct use of a paraphrase structure (something that / which, someone who, a place where, the time when, it's a kind of, it's what you use to, it's similar to) with correct grammar. Give 0 for an item if the learner simply writes the English word or uses the French word. Penalise typical errors: \"the person which\", \"a place where is\", \"similar of / than\".",
          reference: "1: It's what you use to open a bottle of wine. 2: It's someone who sells medicine and gives advice in a shop. 3: It's a room where you sit before seeing the doctor. 4: It's the time when children go back to school after the summer holidays. 5: It's something that protects you from the rain."
        },
        // --------------------------------------------------------------- IV
        {
          id: "writing", num: "IV", title: "Writing – Advice Article", titleFr: "Expression écrite – article de conseils",
          points: 20, skill: "ee", type: "ai-text",
          instructions: "Write an article of 180 to 230 words. Give it a title.",
          instructionsFr: "Rédige un article de 180 à 230 mots. Donne-lui un titre.",
          prompt: "An English-language website for adult learners has asked readers to write an article titled \"How to stop translating in your head\". Describe your own experience (what used to happen when you spoke English, and what has changed), then give at least three practical strategies (e.g. time-buying chunks, paraphrasing a missing word, the 10-second challenge, learning chunks rather than single words). Include at least one hypothetical sentence (If I had to…, I'd…) and one relative clause used for paraphrase.",
          promptFr: "Un site en anglais pour apprenants adultes demande à ses lecteurs un article intitulé « Comment arrêter de traduire dans sa tête ». Décris ta propre expérience (ce qui se passait quand tu parlais anglais, et ce qui a changé), puis donne au moins trois stratégies concrètes (formules pour gagner du temps, paraphrase d'un mot manquant, 10-second challenge, apprendre des blocs de mots plutôt que des mots isolés…). Inclus au moins une phrase hypothétique (If I had to…, I'd…) et une relative de paraphrase.",
          minWords: 180, maxWords: 230,
          rubric: "Total 20 points. Task achievement (6 pts): a title; personal experience comparing then and now; at least THREE distinct, practical strategies clearly explained (2 pts lost per missing strategy). Required structures (4 pts): at least one correct second conditional / hypothetical (If I had to…, I'd… / If I could…, I would…) and at least one correct relative clause used for paraphrase (something that…, someone who…, a place where…). Grammar (4 pts): B2 accuracy (tenses: used to / Present Perfect for change; no \"would\" after \"if\"). Vocabulary (3 pts): B2.10 vocabulary used naturally (mental translation, fluency vs accuracy, chunk, gut reaction, think on your feet, come up with, get my point across, rephrase). Organisation (3 pts): engaging introduction, paragraphs, linking words, conclusion addressed to the reader. Length: 180-230 words; deduct up to 2 points if under 150 or over 280 words.",
          reference: "Model elements: \"I used to build every sentence in French first… Since I started learning whole chunks, I've become much more fluent.\" Strategies: 1) use chunks such as \"That's a tricky one\" to buy time; 2) if a word escapes you, describe it: \"it's something that…\"; 3) practise the 10-second challenge: communication first, then fluency, then accuracy. \"If I had to give only one piece of advice, I'd say: stop aiming for perfection.\""
        },
        // ---------------------------------------------------------------- V
        {
          id: "reading", num: "V", title: "Reading Comprehension", titleFr: "Compréhension écrite",
          points: 15, skill: "ce", type: "mcq",
          instructions: "Read the text, then choose the right answer for each question.",
          instructionsFr: "Lis le texte, puis choisis la bonne réponse pour chaque question.",
          passage: "Researchers who study bilingual speakers have long noticed a curious pattern. Learners who speak slowly and carefully are not always the ones who understand best, and those who make a few mistakes are not always the least effective communicators. What seems to matter most is not how many words people know, but how directly they can reach them.\n\nWhen beginners hear a question, they usually go through a long chain: they translate it into their first language, build an answer there, and then convert it back into English, word by word. Each step takes time, and by the end, the conversation has often moved on. More advanced speakers, by contrast, tend to store language in ready-made blocks, or \"chunks\": \"as far as I know\", \"to be honest\", \"it depends on\". Because these blocks are retrieved as a whole, they free up the brain to focus on ideas rather than grammar.\n\nInterestingly, fluent speakers are not people who never forget a word. They simply handle the gap differently. Instead of stopping, they describe the missing item — \"that thing you use to peel potatoes\" — and keep going. Listeners rarely notice, and often supply the word themselves.\n\nTeachers who apply these findings encourage students to answer quickly, even imperfectly. One popular exercise gives learners ten seconds to start answering an unexpected question. The aim is not accuracy, but momentum: once the words are flowing, precision can follow. As one teacher puts it, \"A small mistake is forgotten in seconds. A long silence is remembered.\"",
          items: [
            { q: "According to the first paragraph, what matters most for effective communication?", qFr: "D'après le premier paragraphe, qu'est-ce qui compte le plus pour bien communiquer ?",
              opts: ["The number of words a person knows.", "Speaking slowly and without any mistakes.", "How quickly and directly a person can access words.", "Having studied grammar for many years."], correct: 2,
              why: "« What seems to matter most is not how many words people know, but how directly they can reach them »." },
            { q: "Why is the beginners' \"long chain\" a problem?", qFr: "Pourquoi la « longue chaîne » des débutants pose-t-elle problème ?",
              opts: ["Because it produces too many grammar mistakes.", "Because it takes so long that the conversation moves on.", "Because it makes people speak too fast.", "Because it only works with written English."], correct: 1,
              why: "« Each step takes time, and by the end, the conversation has often moved on »." },
            { q: "What advantage of \"chunks\" does the text mention?", qFr: "Quel avantage des « chunks » le texte mentionne-t-il ?",
              opts: ["They allow the brain to concentrate on ideas rather than grammar.", "They make speakers sound more formal.", "They replace the need to learn vocabulary.", "They are easier to translate into French."], correct: 0,
              why: "« they free up the brain to focus on ideas rather than grammar »." },
            { q: "What do fluent speakers do when they forget a word?", qFr: "Que font les locuteurs à l'aise quand ils oublient un mot ?",
              opts: ["They stop and look it up.", "They switch to their first language.", "They describe it and continue speaking.", "They change the subject."], correct: 2,
              why: "« Instead of stopping, they describe the missing item… and keep going »." },
            { q: "What does the teacher's quote at the end suggest?", qFr: "Que suggère la citation de l'enseignant à la fin ?",
              opts: ["Mistakes should be avoided at all costs.", "Silence is more damaging to communication than a small error.", "Learners should always think before speaking.", "Only native speakers can speak without mistakes."], correct: 1,
              why: "« A small mistake is forgotten in seconds. A long silence is remembered » : un silence gêne plus qu'une petite erreur." }
          ]
        },
        // --------------------------------------------------------------- VI
        {
          id: "listening", num: "VI", title: "Listening Comprehension", titleFr: "Compréhension orale",
          points: 15, skill: "co", type: "mcq",
          instructions: "Listen to each recording (you can play it again), then choose the right answer.",
          instructionsFr: "Écoute chaque enregistrement (tu peux le réécouter), puis choisis la bonne réponse.",
          items: [
            { audio: "Sorry, what's it called again? It's on the tip of my tongue… You know, it's a kind of machine that you put dirty plates in, and it washes them for you.",
              q: "What is the speaker trying to name?", qFr: "Quel objet la personne essaie-t-elle de nommer ?",
              opts: ["A washing machine", "A dishwasher", "A fridge", "A microwave"], correct: 1,
              why: "« a machine that you put dirty plates in, and it washes them » = a dishwasher (lave-vaisselle)." },
            { audio: [{ who: "A", text: "Quick question: if you could have dinner with anyone in history, who would it be?" }, { who: "B", text: "Ooh, that's a tricky one. Let me think… I'd probably go for Marie Curie. I'd love to ask her how she kept going when nobody believed in her." }],
              q: "Why would the speaker choose Marie Curie?", qFr: "Pourquoi la personne choisirait-elle Marie Curie ?",
              opts: ["To talk about chemistry experiments.", "To ask how she stayed motivated despite others' doubts.", "Because she is her favourite author.", "Because she wants to become a scientist."], correct: 1,
              why: "« I'd love to ask her how she kept going when nobody believed in her »." },
            { audio: "Right, so, in the foreground there's an old man sitting on a bench, feeding some pigeons. In the background, judging by the tall buildings and the yellow taxis, I'd say it's probably New York.",
              q: "How does the speaker guess the location?", qFr: "Comment la personne devine-t-elle le lieu ?",
              opts: ["From the pigeons in the foreground.", "From the old man's clothes.", "From the buildings and taxis in the background.", "From a sign in the photo."], correct: 2,
              why: "« In the background, judging by the tall buildings and the yellow taxis… it's probably New York »." },
            { audio: [{ who: "A", text: "How many people work in your company?" }, { who: "B", text: "Off the top of my head, around two hundred, but don't quote me on that — it changes all the time." }],
              q: "How precise is the answer?", qFr: "La réponse est-elle précise ?",
              opts: ["It's an exact, verified figure.", "It's a quick estimate, not checked.", "B refuses to answer.", "B has no idea at all."], correct: 1,
              why: "« Off the top of my head » + « don't quote me on that » = estimation donnée de mémoire, sans garantie." },
            { audio: "When I started my job in London, I used to freeze every time my boss asked me something in a meeting. Now I just say 'Let me think' or 'What I mean is…', and the words come. I still make mistakes, but people understand me.",
              q: "What has changed for the speaker?", qFr: "Qu'est-ce qui a changé pour la personne ?",
              opts: ["She no longer makes any mistakes.", "She no longer attends meetings.", "She uses chunks to buy time and no longer freezes.", "She asks her boss to speak French."], correct: 2,
              why: "« I used to freeze… Now I just say 'Let me think'… and the words come » : les formules toutes faites l'ont débloquée." }
          ]
        },
        // -------------------------------------------------------------- VII
        {
          id: "speaking", num: "VII", title: "Speaking – The 10-Second Challenge", titleFr: "Expression orale – le 10-second challenge",
          points: 15, skill: "eo", type: "ai-oral",
          instructions: "Read the three questions, then press the microphone and answer them one after the other, without preparing. Start each answer within 10 seconds and speak for about 30 seconds per question. If the microphone doesn't work, type what you would say.",
          instructionsFr: "Lis les trois questions, puis appuie sur le micro et réponds-y l'une après l'autre, sans préparation. Commence chaque réponse en moins de 10 secondes et parle environ 30 secondes par question. Si le micro ne fonctionne pas, écris ce que tu dirais.",
          quotes: ["1. If you could master any skill overnight, what would it be and why?", "2. Describe the view from the window of the room you're in right now.", "3. What's something that people in your country do that might surprise a foreigner?"],
          prompt: "Answer the three unexpected questions spontaneously, one after the other.",
          promptFr: "Réponds spontanément aux trois questions imprévues, l'une après l'autre.",
          minWords: 90, targetSeconds: 90,
          rubric: "Total 15 points. Remember the priority order of the challenge: communication → fluency → accuracy. Communication (5 pts): all three questions are answered with a clear main idea and at least one reason or detail each (lose about 1.5 pts per question missing or answered with only a few words). Strategies for thinking in English (4 pts): natural use of time-buying chunks (That's a tricky one, Let me think, Off the top of my head, How can I put it?, I'd say…) and, if a word is missing, paraphrase rather than silence or French words; for question 2, scene-description language (in the foreground / background, it looks as if, judging by…). Language (3 pts): correct second conditional for question 1 (If I could…, I'd…), relative clauses, B2 range; do not over-penalise small slips that are self-corrected. Fluency and pronunciation (3 pts): judged from the transcript (about 90 seconds ≈ 140-220 words, few long hesitations, no French fillers such as \"euh\"; recognition errors suggesting mispronounced words lower this score — mention them).",
          reference: "Example: \"Ooh, that's a tricky one. If I could master any skill overnight, I'd probably choose playing the piano, because… / Right, from my window, in the foreground there's a small garden, and in the background, judging by the cranes, they're building something… / Off the top of my head, I'd say the way we greet people with kisses on the cheek…\""
        }
      ]
    };

  // =========================================================================
    // B2.11 — ONE DAY IN ENGLISH (leçon 50)
    // =========================================================================
    E[50] = {
      code: "B2.11",
      title: "Level test: B2.11 – One Day in English",
      titleFr: "Contrôle de niveau : B2.11 – Une journée en anglais",
      objective: "Pass level B2.11 and move on to B2.12: vocabulary for meetings, restaurants, phone calls and debates, polite requests (I was wondering if…, Would you mind + -ing), cleft sentences, reacting to a chain of real-life situations, reading, listening, writing and speaking.",
      objectiveFr: "Valider le niveau B2.11 et passer au B2.12 : vocabulaire des réunions, du restaurant, du téléphone et du débat, demandes polies (I was wondering if…, Would you mind + -ing), phrases clivées, réactions à une suite de situations réelles, compréhension écrite et orale, expression écrite et orale.",
      sections: [
        // ---------------------------------------------------------------- I
        {
          id: "vocab", num: "I", title: "Vocabulary – From Morning to Evening", titleFr: "Vocabulaire – du matin au soir",
          points: 10, skill: "vo", type: "fill",
          instructions: "Complete each sentence with a word or expression from the list, in the right form. Some words are not used.",
          instructionsFr: "Complète chaque phrase avec un mot ou une expression de la liste, à la bonne forme. Certains mots ne sont pas utilisés.",
          bank: ["push back", "bring forward", "agenda", "action points", "fully booked", "get through to", "faulty", "refund", "put through", "sort out", "gripping", "overrated", "thought-provoking"],
          items: [
            { text: "The client can only come in the morning, so we've had to ___ the meeting ___ from 3 pm to 10 am.",
              blanks: [["bring"], ["forward"]],
              why: "« to bring forward » = avancer (une réunion). Jamais « advance a meeting ». Après « had to », base verbale." },
            { text: "I'm stuck in traffic. Could we ___ the call ___ to half past four?",
              blanks: [["push"], ["back"]],
              why: "« to push back » = repousser, décaler plus tard. Contraire : bring forward." },
            { text: "Before we finish, let's go over the ___: who is doing what by Friday?",
              blanks: [["action points", "action items"]],
              why: "« action points » (UK) / « action items » (US) = les actions décidées en réunion : qui fait quoi." },
            { text: "The first item on the ___ is the budget for next year.",
              blanks: [["agenda"]],
              why: "« agenda » = l'ordre du jour. Faux ami : ton agenda papier = a diary / a planner." },
            { text: "I'm afraid we're ___ tonight, but we could fit you in tomorrow at eight.",
              blanks: [["fully booked"]],
              why: "« fully booked » = complet (côté réservations)." },
            { text: "I've been trying for an hour, but I can't ___ ___ ___ customer service.",
              blanks: [["get"], ["through"], ["to"]],
              why: "« to get through to » = réussir à joindre (au téléphone)." },
            { text: "The kettle I bought last week is ___: it switches off after ten seconds.",
              blanks: [["faulty"]],
              why: "« faulty » = défectueux. À ne pas confondre avec « guilty » (coupable)." },
            { text: "Please hold the line; I'll ___ you ___ to the manager.",
              blanks: [["put"], ["through"]],
              why: "« to put someone through to… » = passer quelqu'un (au téléphone). « I'll pass you the manager » est un calque." },
            { text: "Don't worry about the double charge — we'll ___ it ___ by tomorrow.",
              blanks: [["sort"], ["out"]],
              why: "« to sort something out » = régler un problème. Le pronom « it » se place au milieu : sort it out." },
            { text: "Everyone raves about that series, but honestly, I found it a bit ___.",
              blanks: [["overrated"]],
              why: "« overrated » = surestimé : une critique nuancée (« a bit ») d'une série que tout le monde encense." }
          ]
        },
        // --------------------------------------------------------------- II
        {
          id: "grammar", num: "II", title: "Grammar – Polite Requests and Cleft Sentences", titleFr: "Grammaire – demandes polies et phrases clivées",
          points: 15, skill: "gr", type: "fill",
          instructions: "A. Complete the polite requests with the correct form of the verb in brackets. B. Complete the cleft sentences. Type only the missing words.",
          instructionsFr: "A. Complète les demandes polies avec la bonne forme du verbe entre parenthèses. B. Complète les phrases clivées. Tape seulement les mots manquants.",
          items: [
            { header: { en: "A. Polite requests", fr: "A. Les demandes polies" },
              text: "Would you mind ___ (hold) the line for a moment?",
              blanks: [["holding"]],
              why: "« Would you mind + -ing » : toujours le gérondif → holding." },
            { text: "I ___ ___ (wonder) if we could push the meeting back to Thursday.",
              blanks: [["was"], ["wondering"]],
              why: "« I was wondering if… » : le passé de politesse adoucit la demande ; il ne parle pas du passé." },
            { text: "Would you mind if I ___ (open) the window? It's very hot in here.",
              blanks: [["opened"]],
              why: "Pour demander la permission : « Would you mind if I + prétérit » → opened." },
            { text: "\"Would you mind waiting five minutes?\" — \"No, not ___ ___. Take your time.\"",
              blanks: [["at"], ["all"]],
              why: "« mind » = être gêné(e) : pour accepter, on répond NON → « No, not at all »." },
            { text: "I was ___ (hope) you could give me a hand with the presentation.",
              blanks: [["hoping"]],
              why: "« I was hoping you could… » : autre demande très délicate au passé continu." },
            { header: { en: "B. Cleft sentences: giving your opinion with emphasis", fr: "B. Phrases clivées : donner son avis avec relief" },
              text: "I loved the acting most. → ___ I loved most ___ the acting.",
              blanks: [["what"], ["was"]],
              why: "« What + sujet + verbe + was + élément » : What I loved most was the acting. Pas de « it » en plus." },
            { text: "The ending surprised me. → The thing ___ surprised me ___ the ending.",
              blanks: [["that", "which"], ["was"]],
              why: "« The thing that + verbe + was… » ; jamais « the thing what »." },
            { text: "The music made the film. → It ___ the music ___ made the film.",
              blanks: [["was"], ["that", "which"]],
              why: "« It was + élément + that… » : It was the music that made the film." },
            { text: "The plot struck me most. → What struck me most ___ the plot.",
              blanks: [["was"]],
              why: "What struck me most was… — le calque « What struck me, it was… » est une erreur typique." },
            { text: "It depends ___ the price: if it's under fifty euros, I'll buy it.",
              blanks: [["on"]],
              why: "Toujours « depend ON » — « depend of » est une erreur très fréquente chez les francophones." }
          ]
        },
        // -------------------------------------------------------------- III
        {
          id: "situations", num: "III", title: "Situation by Situation", titleFr: "Situation après situation",
          points: 10, skill: "gr", type: "mcq",
          instructions: "Your day in English goes on. For each situation, choose the most natural and appropriate reply (grammar AND register).",
          instructionsFr: "Ta journée en anglais continue. Pour chaque situation, choisis la réponse la plus naturelle et la plus adaptée (grammaire ET registre).",
          items: [
            { q: "8.30 am — Your manager emails: \"Can we move our 9 am to 11?\" You're fine with it. You reply:", qFr: "8 h 30 — Ta manager t'écrit : « On peut décaler notre réunion de 9 h à 11 h ? » Ça te convient. Tu réponds :",
              opts: ["\"No problem, 11 works for me. See you then.\"", "\"I regret to inform you that I accept.\"", "\"Yes, I mind.\"", "\"OK advance it.\""], correct: 0,
              why: "« 11 works for me » = 11 h me convient : clair, neutre et poli. Les autres sont trop formels, contradictoires ou incorrects." },
            { q: "12.30 pm — The waiter asks: \"Do you have any dietary requirements?\" You're vegetarian. You say:", qFr: "12 h 30 — Le serveur demande : « Do you have any dietary requirements? » Tu es végétarien(ne). Tu dis :",
              opts: ["\"I'm vegetarian, so I'll go for the mushroom risotto.\"", "\"I will take a vegetarian.\"", "\"I require nothing.\"", "\"I don't eat the meats, I take the risotto.\""], correct: 0,
              why: "« I'll go for… » est la façon naturelle de commander ; on précise d'abord son régime (« I'm vegetarian »)." },
            { q: "3 pm — On the phone, the agent says: \"Would you mind holding for a moment?\" You agree. You say:", qFr: "15 h — Au téléphone, l'agent dit : « Would you mind holding for a moment? » Tu acceptes. Tu dis :",
              opts: ["\"Yes, I would.\"", "\"No, not at all.\"", "\"Yes, I mind.\"", "\"I would mind.\""], correct: 1,
              why: "« mind » = être gêné : pour accepter on dit NON → « No, not at all ». « Yes, I would » voudrait dire que ça te dérange." },
            { q: "4 pm — The agent can't help you with your faulty product. You want to speak to someone else. You say:", qFr: "16 h — L'agent ne peut pas t'aider pour ton produit défectueux. Tu veux parler à quelqu'un d'autre. Tu dis :",
              opts: ["\"Give me your boss now.\"", "\"I was wondering if you could escalate this to a supervisor.\"", "\"Pass me the manager.\"", "\"You are useless, bye.\""], correct: 1,
              why: "« I was wondering if you could escalate this… » : ferme mais poli, avec le bon verbe (escalate). « Pass me the manager » est un calque." },
            { q: "9 pm — After the film, a friend asks: \"So, what did you think?\" You say:", qFr: "21 h — Après le film, un ami demande : « Alors, t'en as pensé quoi ? » Tu dis :",
              opts: ["\"What I liked most, it was the soundtrack.\"", "\"What I liked most was the soundtrack, but the ending felt a bit rushed.\"", "\"The thing what I liked was the soundtrack.\"", "\"I have liked the soundtrack most.\""], correct: 1,
              why: "Phrase clivée correcte (What I liked most was…) + nuance (but… a bit rushed). Les autres contiennent un « it » en trop, « the thing what » ou un Present Perfect incorrect." }
          ]
        },
        // --------------------------------------------------------------- IV
        {
          id: "writing", num: "IV", title: "Writing – Review and Debate", titleFr: "Expression écrite – critique et débat",
          points: 20, skill: "ee", type: "ai-text",
          instructions: "Write a text of 180 to 230 words for an English-language film and culture website. Use at least two cleft sentences.",
          instructionsFr: "Rédige un texte de 180 à 230 mots pour un site anglophone consacré au cinéma et à la culture. Utilise au moins deux phrases clivées.",
          prompt: "Write a review of a film or series you have seen recently (real or invented). Briefly present the plot without spoiling the ending, say what you liked and what disappointed you, and then discuss a controversial issue the film raises (e.g. technology, work, family, the environment), giving a nuanced opinion. Finish by saying who you would recommend it to.",
          promptFr: "Écris la critique d'un film ou d'une série vu(e) récemment (réel ou inventé). Présente brièvement l'intrigue sans dévoiler la fin, dis ce qui t'a plu et ce qui t'a déçu(e), puis discute un sujet controversé que le film soulève (technologie, travail, famille, environnement…) en donnant un avis nuancé. Termine en disant à qui tu le recommanderais.",
          minWords: 180, maxWords: 230,
          rubric: "Total 20 points. Task achievement (6 pts): brief plot summary without spoilers; what the writer liked AND what disappointed them; a controversial issue discussed with a nuanced opinion; a recommendation (lose about 1.5 pts per missing element). Cleft sentences (3 pts): at least TWO correct cleft sentences (What I liked most was… / The thing that… was… / It was… that…); no \"What I liked, it was…\". Grammar (4 pts): B2 accuracy; correct use of \"recommend + -ing / that\" (not \"recommend you to\"), \"depend on\", tenses. Vocabulary (4 pts): B2.11 film and debate vocabulary (plot, plot twist, gripping, thought-provoking, overrated, a controversial issue, it depends on…), plus nuance (to some extent, arguably, I'm not entirely convinced). Organisation (3 pts): clear paragraphs, linking words, engaging conclusion. Length: 180-230 words; deduct up to 2 points if under 150 or over 280 words.",
          reference: "Model elements: \"What struck me most was the soundtrack… The thing that disappointed me was the ending, which felt rushed.\" Issue: \"The film raises a controversial issue: should we let AI make decisions for us? To some extent, it can save time, but…\" \"I'd recommend watching it with friends, as it's a great conversation starter.\""
        },
        // ---------------------------------------------------------------- V
        {
          id: "reading", num: "V", title: "Reading Comprehension", titleFr: "Compréhension écrite",
          points: 15, skill: "ce", type: "mcq",
          instructions: "Read the text, then choose the right answer for each question.",
          instructionsFr: "Lis le texte, puis choisis la bonne réponse pour chaque question.",
          passage: "Nadia had been living in Toronto for exactly one week when she had what she now calls \"the longest Tuesday of my life\".\n\nIt began at 7.30 with a text from her new team leader: the weekly meeting had been brought forward to 8.30, and could she present the sales figures? She hadn't even finished her coffee. On the bus, she rehearsed a few sentences, and during the meeting, when a director asked her a question she hadn't prepared for, she took a breath, said \"That's a good question — let me think for a second,\" and gave an answer that, to her surprise, seemed to satisfy everyone.\n\nLunch was supposed to be relaxing. Instead, the restaurant her colleagues had chosen was fully booked, and the café they ended up in had nothing she could eat. When the waiter noticed her hesitation, he offered to ask the chef to make something off the menu. She has been going back there every Friday since.\n\nThe afternoon was the real test. Her new laptop, delivered the day before, refused to switch on. After forty minutes on hold, she finally got through to an agent who kept reading from a script. Rather than losing her temper, Nadia politely asked whether the case could be escalated. Within ten minutes, a supervisor had arranged a replacement for the next morning.\n\nThat evening, exhausted, she joined some colleagues at the cinema. Afterwards, over dinner, they debated the film for two hours. Walking home, Nadia realised that she hadn't once wished she could switch to French.",
          items: [
            { q: "What happened at the beginning of Nadia's day?", qFr: "Que s'est-il passé au début de la journée de Nadia ?",
              opts: ["The meeting was cancelled.", "The meeting was moved earlier and she was asked to present.", "Her bus broke down.", "She was late for the meeting."], correct: 1,
              why: "« the weekly meeting had been brought forward to 8.30, and could she present the sales figures? »" },
            { q: "How did Nadia deal with the director's unexpected question?", qFr: "Comment Nadia a-t-elle géré la question imprévue du directeur ?",
              opts: ["She refused to answer.", "She bought time with a set phrase, then answered.", "She asked her team leader to answer.", "She answered in French."], correct: 1,
              why: "« That's a good question — let me think for a second » : une formule pour gagner du temps (rappel B2.10), puis une réponse." },
            { q: "What does \"She has been going back there every Friday since\" suggest?", qFr: "Que suggère « She has been going back there every Friday since » ?",
              opts: ["The café was terrible.", "She was grateful for the waiter's kindness and liked the place.", "She works at the café on Fridays.", "Her colleagues forced her to go back."], correct: 1,
              why: "Elle y retourne chaque vendredi depuis : l'attention du serveur l'a conquise (il faut lire entre les lignes)." },
            { q: "How was the laptop problem solved?", qFr: "Comment le problème d'ordinateur a-t-il été résolu ?",
              opts: ["The first agent repaired it by phone.", "Nadia asked for a refund and got it.", "After Nadia politely asked to escalate the case, a supervisor arranged a replacement.", "Nadia lost her temper and shouted."], correct: 2,
              why: "« Nadia politely asked whether the case could be escalated. Within ten minutes, a supervisor had arranged a replacement »." },
            { q: "What did Nadia realise at the end of the day?", qFr: "De quoi Nadia s'est-elle rendu compte à la fin de la journée ?",
              opts: ["That she wanted to go back to France.", "That she had managed the whole day in English without wanting to switch to French.", "That she didn't like her colleagues.", "That the film was overrated."], correct: 1,
              why: "« she hadn't once wished she could switch to French » : elle a traversé toute la journée en anglais." }
          ]
        },
        // --------------------------------------------------------------- VI
        {
          id: "listening", num: "VI", title: "Listening Comprehension", titleFr: "Compréhension orale",
          points: 15, skill: "co", type: "mcq",
          instructions: "Listen to each moment of the day (you can play it again), then choose the right answer.",
          instructionsFr: "Écoute chaque moment de la journée (tu peux le réécouter), puis choisis la bonne réponse.",
          items: [
            { audio: "Morning, everyone. Quick change of plan: the client's flight is delayed, so we're pushing the presentation back to Thursday. That gives us two extra days to finish the slides.",
              q: "What has happened to the presentation?", qFr: "Qu'est-il arrivé à la présentation ?",
              opts: ["It has been brought forward.", "It has been postponed to Thursday.", "It has been cancelled.", "It will take place online."], correct: 1,
              why: "« we're pushing the presentation back to Thursday » = on la repousse à jeudi." },
            { audio: [{ who: "A", text: "Are you ready to order?" }, { who: "B", text: "Almost. Is the lamb very spicy? I'm not great with hot food." }, { who: "A", text: "It's quite spicy, yes. I'd recommend the chicken instead — it's much milder." }],
              q: "What does the waiter recommend and why?", qFr: "Que recommande le serveur, et pourquoi ?",
              opts: ["The lamb, because it's the house speciality.", "The chicken, because it's less spicy.", "The fish, because it's cheaper.", "Nothing, the kitchen is closed."], correct: 1,
              why: "« I'd recommend the chicken instead — it's much milder » : moins épicé." },
            { audio: [{ who: "A", text: "Customer service, Jake speaking. How can I help?" }, { who: "B", text: "Hi, the headphones I ordered arrived faulty — the left side doesn't work. I'd like a replacement, please." }, { who: "A", text: "I'm sorry to hear that. Could I take your order number?" }],
              q: "What does the customer want?", qFr: "Que veut la cliente ?",
              opts: ["A refund.", "A replacement.", "To cancel the order.", "To speak to a manager."], correct: 1,
              why: "« I'd like a replacement, please » : un échange du produit défectueux." },
            { audio: [{ who: "A", text: "I think social media does more harm than good." }, { who: "B", text: "I see your point, but I'm not entirely convinced. It depends on how you use it. For people who live far from their families, it can be a lifeline." }],
              q: "What is B's position?", qFr: "Quelle est la position de B ?",
              opts: ["B completely agrees with A.", "B disagrees diplomatically and gives a nuanced view.", "B has no opinion.", "B thinks social media should be banned."], correct: 1,
              why: "« I see your point, but I'm not entirely convinced. It depends on… » : désaccord diplomatique et nuancé." },
            { audio: "Honestly? What I liked most was the cinematography — every shot looked like a painting. But the thing that annoyed me was the plot twist at the end. You could see it coming from miles away.",
              q: "What did the speaker dislike about the film?", qFr: "Qu'est-ce que la personne n'a pas aimé dans le film ?",
              opts: ["The images", "The acting", "The predictable plot twist", "The soundtrack"], correct: 2,
              why: "« the thing that annoyed me was the plot twist… You could see it coming from miles away » : un rebondissement trop prévisible." }
          ]
        },
        // -------------------------------------------------------------- VII
        {
          id: "speaking", num: "VII", title: "Speaking – Solving a Problem on the Phone", titleFr: "Expression orale – régler un problème au téléphone",
          points: 15, skill: "eo", type: "ai-oral",
          instructions: "Press the microphone and speak for about one and a half minutes, as if you were on the phone. You can try again, or add to your answer. If the microphone doesn't work, type what you would say.",
          instructionsFr: "Appuie sur le micro et parle environ une minute et demie, comme si tu étais au téléphone. Tu peux recommencer, ou compléter ta réponse. Si le micro ne fonctionne pas, écris ce que tu dirais.",
          prompt: "You booked a hotel room in Edinburgh for two nights for a work trip. When you arrive at 11 pm, the receptionist says there is no reservation in your name and the hotel is fully booked. You call the hotel chain's customer service. Explain the problem calmly, give the key details (booking reference HX-2291, dates, confirmation email), say what you need tonight, ask for the issue to be escalated if necessary, and suggest what compensation would be fair.",
          promptFr: "Tu as réservé une chambre d'hôtel à Édimbourg pour deux nuits, pour un déplacement professionnel. En arrivant à 23 h, la réceptionniste t'annonce qu'il n'y a aucune réservation à ton nom et que l'hôtel est complet. Tu appelles le service client de la chaîne. Explique le problème calmement, donne les détails essentiels (référence HX-2291, dates, email de confirmation), dis ce dont tu as besoin ce soir, demande que le dossier soit transmis à un responsable si nécessaire, et propose une compensation qui te semble juste.",
          minWords: 90, targetSeconds: 90,
          rubric: "Total 15 points. Task achievement (4 pts): clear explanation of the problem; key details (reference HX-2291, dates, confirmation email); an immediate need (a room tonight in this or another hotel nearby); a request to escalate if needed; a suggestion of fair compensation (refund, free night, taxi paid…). Register and interaction (4 pts): calm, polite but firm; polite request structures (I was wondering if…, Would it be possible…, Could you possibly…, Would you mind + -ing); phone language (I'm calling about…, Could you put me through to…?). Grammar (2 pts): B2 accuracy (Past Simple / Present Perfect for what happened, indirect requests, conditionals). Vocabulary (2 pts): B2.11 vocabulary (fully booked, booking reference, sort out, escalate, put through, refund…). Fluency and pronunciation (3 pts): judged from the transcript (about 90 seconds ≈ 140-220 words, natural flow; recognition errors suggesting mispronounced words lower this score — mention them).",
          reference: "Example: \"Hello, I'm calling about a booking at your Edinburgh hotel. My reference is HX-2291, for tonight and tomorrow night. I've just arrived and I've been told there's no reservation in my name, although I have the confirmation email. I was wondering if you could find me a room tonight, either here or in another hotel nearby. If that's not possible, could you put me through to a supervisor? Given the inconvenience, I think it would be fair to refund the taxi…\""
        }
      ]
    };

  // =========================================================================
    // B2.12 — B2 REAL WORLD (leçon 51) — examen de fin de niveau B2.
    // Spec d'Ashley (75 pts) : analyse de situation 25 · maîtrise lexicale et
    // registres 20 · écrit argumenté 30 ; complétée à 100 par la compréhension
    // orale (10) et l'expression orale (15). Pas de section « Verb forms » :
    // impossible sans réduire la spec d'Ashley, qui prime.
    // =========================================================================
    E[51] = {
      code: "B2.12",
      title: "Level test: B2.12 – B2 Real World",
      titleFr: "Contrôle de niveau : B2.12 – B2 dans le monde réel",
      objective: "Pass level B2.12 and complete level B2: analyse a complex professional situation, report to management, master register and advanced connectors, argue critically, negotiate in writing with tact and firmness, and manage a crisis orally, mobilising all of B2.",
      objectiveFr: "Valider le palier B2.12 et terminer le niveau B2 : analyser une situation professionnelle complexe, rendre compte à la direction, maîtriser les registres et les connecteurs avancés, argumenter de façon critique, négocier par écrit avec tact et fermeté, et gérer une crise à l'oral, en mobilisant tout le B2.",
      sections: [
        // ---------------------------------------------------------------- I
        {
          id: "analysis", num: "I", title: "Situation Analysis – (a) Analysis Question", titleFr: "Analyse de situation – (a) question d'analyse",
          points: 10, skill: "ce", type: "ai-text",
          instructions: "Read the case carefully. Then explain, in 5 or 6 lines, what is really at stake (the underlying issues) and the communication strategy of EACH of the four people involved.",
          instructionsFr: "Lis attentivement le cas. Puis explique, en 5 ou 6 lignes, ce qui est réellement en jeu (les enjeux sous-jacents) et la stratégie de communication de CHACUNE des quatre personnes impliquées.",
          passage: "Lumeo, a mid-sized electric-bike manufacturer based in Lyon, is facing the worst week in its history. On Monday, its sole battery supplier, Kestrel Cells in Taiwan, announced that a fire at one of its plants would delay all deliveries by at least six weeks. Kestrel's sales director, Daniel Lin, sent a brief, carefully worded email: the fire was \"beyond our control\", the contract's force majeure clause \"applies in full\", and Lumeo would \"be kept informed as the situation evolves\". He did not mention compensation.\n\nThe timing could hardly be worse. Radhaus, a German retail chain that accounts for 40% of Lumeo's revenue, is expecting 3,000 bikes for its spring campaign. Its head of purchasing, Jonas Weber, called Lumeo's CEO, Claire Martin, the same afternoon. He was polite but cold: if the bikes were not delivered by 15 March, Radhaus would apply the late-delivery penalty of €400,000 and \"reconsider the partnership\". He added, almost casually, that a Dutch competitor had recently approached him with an attractive offer.\n\nMeanwhile, a post on a cycling forum claimed that the fire had been caused by \"unstable batteries — the same ones inside Lumeo bikes\". By Wednesday, a journalist from a consumer magazine, Sophie Allard, was asking for a comment and had given Lumeo 24 hours to respond before publishing her article.\n\nClaire Martin now has to act on three fronts at once. She knows that about 1,200 bikes could still be delivered on time using the batteries in stock, and that a smaller supplier in Poland could provide the rest within four weeks, but at a 15% higher cost. What she cannot afford is to lose Radhaus, to see her brand associated with a safety scandal, or to appear to be panicking.",
          prompt: "In 5-6 lines (about 80-120 words): (1) identify the underlying issues for Lumeo (financial, commercial, reputational); (2) explain the communication strategy of Daniel Lin, Jonas Weber, Sophie Allard and Claire Martin — what each of them says or does, and what they are really trying to achieve.",
          promptFr: "En 5-6 lignes (environ 80 à 120 mots) : (1) identifie les enjeux sous-jacents pour Lumeo (financiers, commerciaux, d'image) ; (2) explique la stratégie de communication de Daniel Lin, Jonas Weber, Sophie Allard et Claire Martin — ce que chacun dit ou fait, et ce qu'il cherche réellement à obtenir.",
          minWords: 70, maxWords: 150,
          rubric: "Total 10 points. This is a reading-comprehension and analysis task: judge understanding of the text first, language second. Underlying issues (3 pts): the learner identifies at least three of: dependence on a single supplier; financial risk (€400,000 penalty, 15% extra cost); commercial risk of losing a client worth 40% of revenue to a competitor; reputational risk (unproven safety rumour, 24-hour deadline). Actors' strategies (4 pts, 1 per actor): Lin — formal, minimal and legalistic, hides behind force majeure to avoid liability/compensation; Weber — polite but cold, uses the penalty and the implicit threat of the Dutch competitor as leverage to put pressure on Lumeo (reading between the lines: \"almost casually\" is deliberate); Allard — creates urgency with a deadline, seeks a reaction/story; Martin — must stay calm, avoid appearing to panic, and use her options (1,200 bikes in stock, Polish supplier) to reassure and negotiate. Implicit meaning (1 pt): at least one inference beyond the literal text (e.g. Weber's remark is a negotiating tactic, Lin's silence on compensation is intentional). Language (2 pts): clear, concise, analytical English with B2 structures (hedging, reporting verbs, connectors); length roughly 5-6 lines.",
          reference: "Lumeo is overly dependent on one supplier, so a single fire threatens its finances (a €400,000 penalty, higher costs), its main client (40% of revenue) and its reputation (an unverified safety rumour). Lin adopts a defensive, legalistic stance: by invoking force majeure and saying nothing about compensation, he limits Kestrel's liability. Weber stays courteous but applies pressure: the penalty and the 'casual' mention of a Dutch competitor are leverage. Allard creates urgency with a 24-hour deadline to obtain a reaction. Martin must reassure everyone and show control, using the stock and the Polish supplier as bargaining chips."
        },
        // --------------------------------------------------------------- II
        {
          id: "report", num: "II", title: "Situation Analysis – (b) Case Study Report", titleFr: "Analyse de situation – (b) rapport d'étude de cas",
          points: 15, skill: "ee", type: "ai-text",
          instructions: "You are Claire Martin's chief operating officer. Using the same case, write a formal report of about 100 words to the board of directors proposing strategic solutions, with figures.",
          instructionsFr: "Tu es le directeur ou la directrice des opérations de Claire Martin. À partir du même cas, rédige un rapport formel d'environ 100 mots au conseil d'administration, proposant des solutions stratégiques chiffrées.",
          passage: "Lumeo, a mid-sized electric-bike manufacturer based in Lyon, is facing the worst week in its history. On Monday, its sole battery supplier, Kestrel Cells in Taiwan, announced that a fire at one of its plants would delay all deliveries by at least six weeks. Kestrel's sales director, Daniel Lin, sent a brief, carefully worded email: the fire was \"beyond our control\", the contract's force majeure clause \"applies in full\", and Lumeo would \"be kept informed as the situation evolves\". He did not mention compensation.\n\nThe timing could hardly be worse. Radhaus, a German retail chain that accounts for 40% of Lumeo's revenue, is expecting 3,000 bikes for its spring campaign. Its head of purchasing, Jonas Weber, called Lumeo's CEO, Claire Martin, the same afternoon. He was polite but cold: if the bikes were not delivered by 15 March, Radhaus would apply the late-delivery penalty of €400,000 and \"reconsider the partnership\". He added, almost casually, that a Dutch competitor had recently approached him with an attractive offer.\n\nMeanwhile, a post on a cycling forum claimed that the fire had been caused by \"unstable batteries — the same ones inside Lumeo bikes\". By Wednesday, a journalist from a consumer magazine, Sophie Allard, was asking for a comment and had given Lumeo 24 hours to respond before publishing her article.\n\nClaire Martin now has to act on three fronts at once. She knows that about 1,200 bikes could still be delivered on time using the batteries in stock, and that a smaller supplier in Poland could provide the rest within four weeks, but at a 15% higher cost. What she cannot afford is to lose Radhaus, to see her brand associated with a safety scandal, or to appear to be panicking.",
          prompt: "Write a formal report (about 100 words) to the board. Include: a title or subject line; a one-sentence summary of the situation; at least THREE concrete, costed or quantified recommendations (e.g. partial delivery, alternative supplier, renegotiating the penalty, media statement, long-term supplier strategy); a short conclusion.",
          promptFr: "Rédige un rapport formel (environ 100 mots) au conseil d'administration. Inclus : un titre ou un objet ; une phrase qui résume la situation ; au moins TROIS recommandations concrètes, chiffrées ou quantifiées (ex. livraison partielle, fournisseur alternatif, renégociation de la pénalité, communiqué de presse, stratégie fournisseurs à long terme) ; une courte conclusion.",
          minWords: 85, maxWords: 140,
          rubric: "Total 15 points. Task achievement (5 pts): title/subject; concise summary; at least three strategic recommendations that are realistic AND quantified using the figures in the case (e.g. deliver the 1,200 bikes from stock by 15 March; order the remaining 1,800 from the Polish supplier at +15%; propose to Radhaus a phased delivery in exchange for waiving or reducing the €400,000 penalty; issue a factual safety statement within 24 hours; diversify suppliers to at least two in future); a conclusion. Deduct if figures are invented inconsistently with the case. Register and format (4 pts): formal report style — impersonal or measured tone, headings or numbered points, no contractions or slang, recommendation language (It is recommended that…, We propose…, The board is advised to…). Grammar (3 pts): B2+ accuracy — passive, conditionals, modals of recommendation, subjunctive-like structures (recommend that + base). Vocabulary and cohesion (3 pts): precise business collocations (mitigate the risk, phased delivery, waive a penalty, contingency plan, cost-benefit) and advanced connectors (consequently, whereas, provided that). Length: about 100 words; deduct up to 2 points if under 70 or over 170 words.",
          reference: "REPORT: Kestrel supply disruption – recommended response. Summary: a six-week battery delay puts €400,000 in penalties and our main client (40% of revenue) at risk. Recommendations: 1. Deliver the 1,200 bikes built with existing stock to Radhaus by 15 March. 2. Source the remaining 1,800 batteries from our Polish supplier; the 15% surcharge is far lower than the penalty. 3. Propose a phased delivery to Radhaus in exchange for waiving the penalty. 4. Issue a factual safety statement within 24 hours. 5. Going forward, secure at least two battery suppliers. Conclusion: provided these measures are implemented this week, the financial and reputational risk should be contained."
        },
        // -------------------------------------------------------------- III
        {
          id: "register", num: "III", title: "Lexical Mastery & Registers – (a) Rephrasing", titleFr: "Maîtrise lexicale et registres – (a) reformulation",
          points: 10, skill: "vo", type: "mcq",
          instructions: "Choose the best rephrasing in the register indicated. Pay attention to tone, precision and naturalness, not just grammar.",
          instructionsFr: "Choisis la meilleure reformulation dans le registre indiqué. Fais attention au ton, à la précision et au naturel, pas seulement à la grammaire.",
          items: [
            { q: "Informal → formal (email to a client): \"Sorry, we messed up your order. We'll sort it ASAP.\"", qFr: "Familier → formel (e-mail à un client) : « Désolés, on a raté votre commande. On règle ça au plus vite. »",
              opts: ["We are sorry because we did a mistake with your order and we will solve it quickly.", "Please accept our apologies for the error in your order; we are taking steps to rectify it without delay.", "Sorry for the mess with your order — we'll fix it super fast, promise!", "Your order has had some errors, which will be sorted as soon as possible by us."], correct: 1,
              why: "Registre formel : « Please accept our apologies », « rectify », « without delay ». « did a mistake » est un calque fautif (make a mistake) ; « super fast, promise » reste familier ; la dernière est lourde (passif maladroit) et garde « sorted »." },
            { q: "Informal → formal (report to the board): \"Basically, the new app flopped because nobody really wanted it.\"", qFr: "Familier → formel (rapport au conseil) : « En gros, la nouvelle appli a fait un flop parce que personne n'en voulait vraiment. »",
              opts: ["The new app failed very much because people didn't want it.", "Basically, the new app was a flop since there was no want for it.", "The new application failed largely owing to a lack of market demand.", "The new app has flopped, as nobody was really wanting it."], correct: 2,
              why: "« largely owing to a lack of market demand » : nominalisation + nuance (largely) + connecteur soutenu. « failed very much » est incorrect ; « flop », « basically » restent familiers ; « was wanting » est un emploi incorrect du continu avec un verbe d'état." },
            { q: "Formal → informal (message to a close colleague): \"I would be grateful if you could forward the aforementioned document at your earliest convenience.\"", qFr: "Formel → familier (message à un collègue proche) : « Je vous serais reconnaissant(e) de bien vouloir transférer le document susmentionné dans les meilleurs délais. »",
              opts: ["Could you send me that doc when you get a sec? Cheers!", "Please forward the document mentioned above as soon as possible.", "Send the document. Now.", "I'd be grateful if you'd forward the aforementioned doc, mate."], correct: 0,
              why: "Familier ET poli : « when you get a sec », « doc », « Cheers ». La 2e reste neutre-formelle ; la 3e est impolie ; la 4e mélange les registres (« aforementioned » + « mate »)." },
            { q: "Informal → formal (negotiation): \"No way are we paying that much — it's a rip-off.\"", qFr: "Familier → formel (négociation) : « Hors de question qu'on paie autant — c'est de l'arnaque. »",
              opts: ["We cannot pay this because it is a rip-off.", "I'm afraid this price falls well outside what we would consider reasonable for a contract of this scale.", "Your price is completely unacceptable and dishonest.", "There is no way that we are going to be paying so much money."], correct: 1,
              why: "Refus diplomatique (B2.6) : « I'm afraid » + understatement « falls well outside what we would consider reasonable ». « rip-off » est argotique ; « dishonest » est une accusation ; la 4e reste familière (« no way »)." },
            { q: "Formal → neutral spoken English (explaining to a team): \"Notwithstanding the aforementioned constraints, the project shall proceed as scheduled.\"", qFr: "Formel → anglais oral neutre (explication à une équipe) : « Nonobstant les contraintes susmentionnées, le projet se poursuivra comme prévu. »",
              opts: ["Notwithstanding the problems, the project will proceed.", "The problems are big, so the project is maybe late.", "Although the constraints, we continue the project.", "Despite the problems I've just mentioned, we're still going ahead as planned."], correct: 3,
              why: "« Despite… I've just mentioned… we're still going ahead as planned » : même sens, registre oral naturel. La 1re reste soutenue ; la 2e change le sens ; « Although + nom » est incorrect (although + proposition, despite + nom)." }
          ]
        },
        // --------------------------------------------------------------- IV
        {
          id: "idioms", num: "IV", title: "Lexical Mastery & Registers – (b) Idioms and Advanced Connectors", titleFr: "Maîtrise lexicale et registres – (b) expressions idiomatiques et connecteurs avancés",
          points: 10, skill: "vo", type: "fill",
          instructions: "Complete the extract from a negotiation debrief with a word from the list. Each word is used once; there are two extra words.",
          instructionsFr: "Complète l'extrait de compte rendu de négociation avec un mot de la liste. Chaque mot ne sert qu'une fois ; il y a deux mots en trop.",
          bank: ["page", "court", "table", "win-win", "line", "provided", "albeit", "whereby", "notwithstanding", "hence", "moreover", "despite"],
          items: [
            { text: "Before discussing prices, we checked that both teams were on the same ___ regarding the delivery dates.",
              blanks: [["page"]],
              why: "« to be on the same page » = être sur la même longueur d'onde, avoir la même compréhension." },
            { text: "We have sent our final offer, so the ball is now in their ___.",
              blanks: [["court"]],
              why: "« The ball is in their court » = c'est à eux de jouer, la décision leur revient." },
            { text: "Both sides agreed to put all the options on the ___ before making any commitment.",
              blanks: [["table"]],
              why: "« to put something on the table » = mettre sur la table, proposer ouvertement." },
            { text: "A phased delivery would be a ___ solution: they receive the goods earlier and we avoid the penalty.",
              blanks: [["win-win", "win win"]],
              why: "« a win-win solution » = gagnant-gagnant : chaque partie y trouve son intérêt." },
            { text: "The bottom ___ is that we cannot accept any further delay.",
              blanks: [["line"]],
              why: "« The bottom line is… » = l'essentiel, c'est que… (vu en B2.12)." },
            { text: "We will agree to the new terms, ___ that payment is made within 30 days.",
              blanks: [["provided"]],
              why: "« provided (that) » = à condition que : condition stricte, plus soutenu que « if »." },
            { text: "The agreement was reached, ___ after three exhausting rounds of talks.",
              blanks: [["albeit"]],
              why: "« albeit » = bien que, quoique ; suivi d'un adjectif ou d'un complément, sans verbe conjugué (registre soutenu)." },
            { text: "They proposed a new system ___ any delay would be compensated with a discount.",
              blanks: [["whereby"]],
              why: "« whereby » = par lequel, selon lequel : introduit un mécanisme ou une règle (registre formel)." },
            { text: "___ the difficult context, the negotiation ended on a positive note.",
              blanks: [["notwithstanding", "despite"]],
              why: "« Notwithstanding / Despite + nom » = malgré. « Notwithstanding » est plus formel ; « despite » est aussi correct ici." },
            { text: "The supplier was unable to guarantee the new deadline, ___ our decision to look for an alternative.",
              blanks: [["hence"]],
              why: "« hence + nom » = d'où : introduit une conséquence de façon concise et soutenue." }
          ]
        },
        // ---------------------------------------------------------------- V
        {
          id: "essay", num: "V", title: "Advanced Writing – (a) Critical Essay", titleFr: "Écrit argumenté – (a) essai critique",
          points: 15, skill: "ee", type: "ai-text",
          instructions: "Write a critical essay of about 150 words. Take a clear, nuanced position and support it with arguments and examples.",
          instructionsFr: "Rédige un essai critique d'environ 150 mots. Prends une position claire et nuancée, et appuie-la sur des arguments et des exemples.",
          quotes: ["\"Artificial intelligence will not replace workers; it will replace the workers who refuse to use it.\""],
          prompt: "To what extent is artificial intelligence changing work ethics — our ideas of effort, responsibility, fairness and trust at work? Discuss, considering at least one argument for and one argument against, and give your own conclusion.",
          promptFr: "Dans quelle mesure l'intelligence artificielle transforme-t-elle l'éthique du travail — nos idées d'effort, de responsabilité, d'équité et de confiance au travail ? Discute la question en examinant au moins un argument pour et un argument contre, puis donne ta propre conclusion.",
          minWords: 130, maxWords: 200,
          rubric: "Total 15 points. Task achievement and argumentation (5 pts): addresses the question \"to what extent\" (not just yes/no); at least one argument on each side, each supported by an example or explanation; a personal, reasoned conclusion. Nuance and critical thinking (3 pts): hedging and concession (arguably, to some extent, while it is true that…, admittedly…, that said…), distinguishes facts from assumptions, avoids sweeping generalisations. Organisation and cohesion (3 pts): introduction, body, conclusion; advanced connectors (whereas, nevertheless, consequently, on the other hand, all things considered). Language (4 pts): B2+ range and accuracy — complex sentences, relative clauses, passive, conditionals, precise vocabulary (accountability, transparency, bias, productivity, to outsource, to undermine, to enhance). Length: about 150 words; deduct up to 2 points if under 110 or over 240 words.",
          reference: "Intro: AI is reshaping not only what we do at work but how we judge effort and responsibility. For: AI removes repetitive tasks, arguably allowing employees to focus on creative, higher-value work; example of automated reporting. Against: it blurs accountability (who is responsible for an AI error?), may conceal bias in recruitment and can undermine trust if employees use it without transparency. Conclusion: all things considered, AI does not destroy work ethics but forces us to redefine them — transparency and human accountability should remain non-negotiable."
        },
        // --------------------------------------------------------------- VI
        {
          id: "negotiation", num: "VI", title: "Advanced Writing – (b) Written Negotiation", titleFr: "Écrit argumenté – (b) négociation écrite",
          points: 15, skill: "ee", type: "ai-text",
          instructions: "Read the letter from your dissatisfied business partner. Write a reply that defuses the situation with tact, courtesy and firmness.",
          instructionsFr: "Lis la lettre de ton partenaire commercial mécontent. Rédige une réponse qui désamorce la situation avec tact, courtoisie et fermeté.",
          passage: "Dear Ms Laurent,\n\nI am writing to express my deep dissatisfaction with the way your company has handled our latest order (ref. HB-2291). The 500 office chairs were delivered eleven days late, which forced us to postpone the opening of our new Manchester office. To make matters worse, 40 chairs arrived damaged, and your customer service team took four days to reply to our emails.\n\nFrankly, this is not the level of service we expect from a partner we have worked with for six years. Unless you agree to a 30% discount on the whole order and free replacement of the damaged chairs within a week, we will have no choice but to review our contract and consider other suppliers.\n\nI look forward to your prompt response.\n\nYours sincerely,\nRichard Hale\nOperations Director, Hale & Barnes Ltd",
          prompt: "You are Ms Laurent, key account manager. Reply to Richard Hale (about 150 words). Acknowledge the problems and apologise sincerely without over-apologising; explain briefly (without making excuses); agree to what is reasonable (replacement of the 40 chairs) but firmly decline the 30% discount; make a counter-proposal (e.g. a smaller discount, free delivery on the next order, a dedicated contact); reaffirm the value of the partnership and propose a next step.",
          promptFr: "Tu es Mme Laurent, responsable grands comptes. Réponds à Richard Hale (environ 150 mots). Reconnais les problèmes et excuse-toi sincèrement sans excès ; explique brièvement (sans te chercher d'excuses) ; accepte ce qui est raisonnable (remplacement des 40 chaises) mais refuse fermement la remise de 30 % ; fais une contre-proposition (ex. une remise plus faible, la livraison gratuite de la prochaine commande, un interlocuteur dédié) ; réaffirme la valeur du partenariat et propose une prochaine étape.",
          minWords: 130, maxWords: 200,
          rubric: "Total 15 points. Task achievement (5 pts): acknowledges each problem (delay, damaged chairs, slow customer service); apologises without grovelling; accepts the replacement of the 40 chairs with a clear timeframe; declines the 30% discount clearly; makes a concrete counter-proposal; proposes a next step (call, meeting). Tact and firmness (4 pts): diplomatic language (I fully appreciate…, I understand your frustration, however…, I'm afraid we are unable to…, what we can offer is…), no defensiveness or blame, no weak or ambiguous refusal; the relationship is valued (six-year partnership). Register and format (3 pts): formal business letter: correct opening/closing (Dear Mr Hale / Yours sincerely), reference to the order, no contractions or slang. Language (3 pts): B2+ accuracy and range — passive, conditionals, modals, advanced connectors, precise collocations (take full responsibility, as a gesture of goodwill, rest assured, going forward). Length: about 150 words; deduct up to 2 points if under 110 or over 240 words.",
          reference: "Dear Mr Hale, Thank you for your letter regarding order HB-2291. I fully appreciate your frustration: the delay, the damaged chairs and our slow response fell short of the standards you rightly expect, and I sincerely apologise. The 40 damaged chairs will be replaced free of charge and delivered by Friday. However, I am afraid we are unable to offer a 30% discount on the entire order. As a gesture of goodwill, we can offer a 10% discount and free delivery on your next order, together with a dedicated contact to ensure faster responses going forward. Our six-year partnership matters greatly to us. Would you be available for a call this week to discuss these measures? Yours sincerely, Claire Laurent"
        },
        // -------------------------------------------------------------- VII
        {
          id: "listening", num: "VII", title: "Listening Comprehension – Crisis and Negotiation", titleFr: "Compréhension orale – crise et négociation",
          points: 10, skill: "co", type: "mcq",
          instructions: "Listen to each recording (you can play it again), then choose the right answer. Pay attention to tone and implied meaning as well as facts.",
          instructionsFr: "Écoute chaque enregistrement (tu peux le réécouter), puis choisis la bonne réponse. Fais attention au ton et au sous-entendu autant qu'aux faits.",
          items: [
            { audio: "Good morning, everyone. As some of you will have heard, our payment system was down for about three hours last night. No customer data was compromised — I want to be absolutely clear about that. Our priority this morning is to contact every customer whose order failed and offer them free delivery. We'll hold a full review on Friday.",
              q: "What is the speaker's main priority this morning?", qFr: "Quelle est la priorité principale de la personne ce matin ?",
              opts: ["Finding who is responsible for the failure.", "Contacting affected customers and offering them compensation.", "Checking whether customer data was stolen.", "Organising a review meeting immediately."], correct: 1,
              why: "« Our priority this morning is to contact every customer… and offer them free delivery ». La revue a lieu vendredi ; les données n'ont pas été compromises." },
            { audio: [{ who: "A", text: "We could stretch to a five per cent discount, but that's really our limit." }, { who: "B", text: "I appreciate that. Although, bearing in mind the volume we're ordering, I'd have thought there was a little more room for manoeuvre." }],
              q: "What is B implying?", qFr: "Que sous-entend B ?",
              opts: ["B accepts the five per cent discount.", "B wants to reduce the order volume.", "B thinks A can offer a bigger discount.", "B is ending the negotiation."], correct: 2,
              why: "« I'd have thought there was a little more room for manoeuvre » = demande indirecte et polie d'une meilleure remise (implicite, B2.8)." },
            { audio: [{ who: "A", text: "The journalist wants a statement by five. What do we say?" }, { who: "B", text: "Nothing we can't prove. We confirm the recall, explain the steps we're taking, and we don't speculate about the cause until the lab results are in." }],
              q: "What communication strategy does B recommend?", qFr: "Quelle stratégie de communication B recommande-t-il ?",
              opts: ["Refusing to talk to the journalist.", "Stating only verified facts and the actions taken, without speculating.", "Blaming the supplier for the problem.", "Waiting for the lab results before saying anything at all."], correct: 1,
              why: "« Nothing we can't prove… we don't speculate » : on s'en tient aux faits vérifiés et aux mesures prises. B répond bien au journaliste, sans attendre les résultats pour TOUT dire." },
            { audio: [{ who: "A", text: "So, where does that leave us?" }, { who: "B", text: "Well, if I've got this right, you'll cover the shipping costs, we'll accept a two-week delay, and the price stays as it is. Is that a fair summary?" }, { who: "A", text: "That's a fair summary." }],
              q: "What is B doing at the end of the negotiation?", qFr: "Que fait B à la fin de la négociation ?",
              opts: ["Making a new demand.", "Summarising the agreement to check they both understand it.", "Rejecting A's proposal.", "Asking for a price reduction."], correct: 1,
              why: "« If I've got this right… Is that a fair summary? » : B récapitule l'accord pour vérifier qu'ils sont d'accord (to sum up / wrap up)." },
            { audio: "Look, I won't pretend this has been an easy quarter. We lost our biggest client, and that hurt. But we've kept every member of staff, we've signed two new contracts, and, frankly, we're leaner and more focused than we were a year ago. So no, it's not a disaster. It's a wake-up call.",
              q: "How does the speaker present the situation?", qFr: "Comment la personne présente-t-elle la situation ?",
              opts: ["As a disaster with no positive side.", "As completely positive, with no real problem.", "As difficult, but as an opportunity to improve.", "As the fault of the staff."], correct: 2,
              why: "Elle reconnaît la difficulté (« that hurt ») puis la recadre positivement : « not a disaster… a wake-up call » = un signal d'alarme utile." }
          ]
        },
        // ------------------------------------------------------------- VIII
        {
          id: "speaking", num: "VIII", title: "Speaking – Crisis Management", titleFr: "Expression orale – gestion de crise",
          points: 15, skill: "eo", type: "ai-oral",
          instructions: "Read the situation once, then press the microphone and speak for about two minutes, without preparing a script. You can try again, or add to your answer. If the microphone doesn't work, type what you would say.",
          instructionsFr: "Lis la situation une fois, puis appuie sur le micro et parle pendant environ deux minutes, sans préparer de texte. Tu peux recommencer, ou compléter ta réponse. Si le micro ne fonctionne pas, écris ce que tu dirais.",
          prompt: "You are the event manager of an international conference for 400 people in Edinburgh. One hour before the opening, you learn that: the keynote speaker's flight has been cancelled; the main hall's sound system has failed; and a sponsor is threatening to withdraw because its logo is missing from the programme. Speak to your team in an emergency briefing: sum up the situation calmly, set priorities, give clear instructions (who does what), propose at least one workaround or fallback option for each problem, say how you will communicate with the delegates and the sponsor, and conclude.",
          promptFr: "Tu es responsable de l'organisation d'une conférence internationale de 400 personnes à Édimbourg. Une heure avant l'ouverture, tu apprends que : le vol de l'intervenant principal est annulé ; la sonorisation de la grande salle est en panne ; un sponsor menace de se retirer parce que son logo manque dans le programme. Parle à ton équipe lors d'un point de crise : résume calmement la situation, fixe les priorités, donne des consignes claires (qui fait quoi), propose au moins une solution de contournement ou un plan B pour chaque problème, dis comment tu vas communiquer avec les participants et le sponsor, et conclus.",
          minWords: 150, targetSeconds: 120,
          rubric: "Total 15 points; give a one-line comment for each criterion. Task achievement (4 pts): the three problems are addressed, with priorities, a clear division of tasks (who does what) and at least one workaround or fallback per problem (e.g. keynote by video link or moved to the afternoon; backup microphones or switching rooms; apology and immediate reprint/on-screen display for the sponsor), plus a communication plan and a conclusion. Leadership and register (3 pts): calm, reassuring, decisive tone (Right, here's what we're going to do… / Let's not panic… / Bottom line: …), diplomatic about the sponsor. Range (3 pts): B2+ structures — imperatives softened where needed, We'd better…, It might be worth + -ing, What if we…?, conditionals, passive, advanced connectors, crisis vocabulary (contingency plan, workaround, fallback option, to reassure, to deal with, to keep someone posted). Accuracy (2 pts): B2 grammatical control; self-corrections acceptable. Fluency and pronunciation (3 pts): judged from the transcript (about two minutes ≈ 200-300 words, few long hesitations, clear structure ending with a summary such as \"So, to sum up…\"); recognition errors suggesting mispronounced words lower this score — mention them.",
          reference: "Right, everyone, bear with me — we've got three problems and one hour, so let's not panic. First, the keynote: Anna, could you call Dr Reed and set up a video link? If that doesn't work, we'll move the keynote to the afternoon and open with the panel. Second, the sound: Tom, get the technicians on it now; it might be worth moving the opening to Room B, which has a working system, as a fallback. Third, the sponsor: I'll call them myself, apologise, and offer to display their logo on every screen and mention them in the opening speech. We'd better keep delegates informed, so Sara will send an update at 9.30. So, to sum up: video link or reschedule, Room B as plan B, and I'll deal with the sponsor. Let's keep each other posted."
        }
      ]
    };

  E[68] = {
    code: "GC-B2",
    label: "Grand Contrôle final A1 → B2",
    standalone: true,
    title: "Global Synthesis Exam (Levels A1 – B2.12)",
    titleFr: "Grand contrôle de synthèse (niveaux A1 – B2.12)",
    objective: "This final comprehensive exam covers the entire learning path, from A1 basics to advanced B2.12 subtleties, and validates your readiness to move on to level C1.",
    objectiveFr: "Ce contrôle final couvre l'ensemble du parcours, des bases de l'A1 aux subtilités avancées du B2.12, et valide que tu es prêt(e) à passer au niveau C1.",
    sections: [
      // ---------------------------------------------------------------- I
      {
        id: "mcq", num: "I", title: "Global Multiple Choice Questions – Fundamentals & Registers", titleFr: "QCM global – fondamentaux et registres",
        points: 15, skill: "gr", type: "mcq",
        instructions: "Select the correct answer for each question.",
        instructionsFr: "Choisis la bonne réponse pour chaque question.",
        items: [
          { q: "(Formal / Informal) Which phrase is the most appropriate to write a professional email to an important client?",
            qFr: "(Formel / informel) Quelle phrase est la plus appropriée pour écrire un e-mail professionnel à un client important ?",
            opts: ["Hey, what's up? Here is your file.", "Yo Smith, check this out.", "Dear Mr Smith, please find attached the requested document."],
            correct: 2,
            why: "Registre professionnel formel : formule d'appel « Dear Mr Smith » + expression figée « please find attached ». « Hey, what's up? » et « Yo » sont familiers, réservés aux proches." },
          { q: "(Past Tenses) \"By the time we arrived at the station, the train _______.\"",
            qFr: "(Temps du passé) « Quand nous sommes arrivés à la gare, le train _______. »",
            opts: ["had left", "has left", "left"],
            correct: 0,
            why: "Past Perfect (had + participe passé) : l'action (le départ du train) est terminée AVANT une autre action passée (notre arrivée). « By the time » appelle souvent le Past Perfect." },
          { q: "(Conditionals / Hypotheses) \"If I knew the answer, I _______ you.\"",
            qFr: "(Conditionnels / hypothèses) « Si je connaissais la réponse, je te _______. »",
            opts: ["will tell", "would tell", "had told"],
            correct: 1,
            why: "Conditionnel de type 2 (hypothèse irréelle au présent) : If + prétérit (knew), would + base verbale (would tell). « will » = type 1, « had told » ne va pas dans la proposition principale." },
          { q: "(Modal Verbs) \"You _______ submit your report before Friday; it is a strict company policy.\"",
            qFr: "(Verbes modaux) « Tu _______ rendre ton rapport avant vendredi ; c'est une règle stricte de l'entreprise. »",
            opts: ["must / have to", "don't have to", "might"],
            correct: 0,
            why: "« must / have to » exprime une obligation stricte (ici une règle de l'entreprise). « don't have to » = absence d'obligation, « might » = simple possibilité." },
          { q: "(Business Vocabulary) Which expression is the appropriate formal way to say \"to cancel a meeting\" in a business email?",
            qFr: "(Vocabulaire professionnel) Quelle expression est la bonne façon formelle de dire « annuler une réunion » dans un e-mail professionnel ?",
            opts: ["To drop it", "To throw it away", "To call it off", "To cancel / to postpone the meeting (formally)"],
            correct: 3,
            why: "En registre formel, on emploie les verbes précis « to cancel » (annuler) ou « to postpone » (reporter) : « We regret to inform you that the meeting has been cancelled / postponed ». « To call it off » veut bien dire annuler, mais c'est un phrasal verb familier, à éviter dans un écrit formel. « To drop it » (laisser tomber) et « to throw it away » (jeter) ne conviennent pas." }
        ]
      },
      // --------------------------------------------------------------- II
      {
        id: "qa", num: "II", title: "Guided Contextual Q&A", titleFr: "Questions-réponses guidées en contexte",
        points: 15, skill: "ee", type: "ai-text",
        instructions: "Answer the following questions in complete sentences in English. Number your answers 1, 2 and 3 (3 to 4 lines each).",
        instructionsFr: "Réponds aux questions suivantes par des phrases complètes en anglais. Numérote tes réponses 1, 2 et 3 (3 à 4 lignes chacune).",
        prompt: "1. (Level A1/A2 – Memory & Daily Life) Tell us in 3-4 lines about a memorable event or a trip from your past, using simple past tenses.\n2. (Level B1 – Experience & Profession) Explain in 3-4 lines the advantages and disadvantages of working in a team compared to working individually.\n3. (Level B2 – Projection) Project yourself 5 years into the future. How do you see your professional growth? Use future structures and conditionals.",
        promptFr: "1. (Niveau A1/A2 – souvenirs et vie quotidienne) Raconte en 3-4 lignes un événement marquant ou un voyage de ton passé, en utilisant des temps simples du passé.\n2. (Niveau B1 – expérience et profession) Explique en 3-4 lignes les avantages et les inconvénients du travail en équipe par rapport au travail individuel.\n3. (Niveau B2 – projection) Projette-toi 5 ans dans le futur. Comment vois-tu ton évolution professionnelle ? Utilise des structures du futur et des conditionnels.",
        minWords: 80, maxWords: 200,
        rubric: "Total 15 points, 5 points per question. Question 1 (5 pts): task (2 pts) a memorable event or trip in the past, 3-4 lines; verb forms (2 pts) correct Past Simple of regular AND irregular verbs (went, drove, met, was/were…), no present tense for finished past actions; vocabulary and accuracy (1 pt). Question 2 (5 pts): task (2 pts) at least one advantage AND one disadvantage of teamwork compared to working alone; organisation (1 pt) contrast linkers (however, on the other hand, whereas, while); grammar and vocabulary (2 pts) B1 accuracy, work vocabulary (share ideas, divide tasks, deadlines, concentration…). Question 3 (5 pts): task (1 pt) a projection 5 years ahead about professional growth; verb forms (3 pts) correct future structures (will / going to / Future Perfect \"will have + past participle\") AND at least one correctly formed conditional (If + present, will/might/may + base verb, or If + past, would + base verb) — deduct 1.5 pts if no conditional, 1 pt per wrong tense form; vocabulary and range (1 pt). If an answer is missing, give 0 for that question. Do not penalise British/American spelling differences.",
        reference: "1: \"Last summer, I travelled to Ireland with my best friends. We rented a small car and drove along the coast for five days. It was an unforgettable experience because we discovered amazing landscapes and met very welcoming local people.\" 2: \"Working in a team allows us to share different ideas, divide tasks efficiently, and solve complex problems faster. However, individual work offers more personal concentration, fewer distractions, and allows people to work at their own pace without depending on others.\" 3: \"In five years, I am going to hold a senior management position within an international company. I hope I will have developed strong leadership skills, and if I keep working hard, I might even lead my own department on global projects.\""
      },
      // -------------------------------------------------------------- III
      {
        id: "case-analysis", num: "III", title: "Cross-Cutting Case Study – 1. Analysis", titleFr: "Étude de cas transversale – 1. Analyse",
        points: 8, skill: "ce", type: "ai-text",
        instructions: "Read the scenario below. Identify in one clear sentence the main problem and the critical challenge for Eco Logistics.",
        instructionsFr: "Lis la situation ci-dessous. Identifie en une phrase claire le problème principal et l'enjeu critique pour Eco Logistics.",
        passage: "Eco Logistics, an eco-friendly transport company, is facing a major crisis. Due to a supplier strike and an IT failure in their GPS tracking system, 40% of this week's deliveries are blocked. Key corporate clients are threatening to cancel their contracts. Sarah, the Operations Manager, must react immediately.",
        prompt: "Analysis question: in one clear sentence, what is the main problem and what is the critical challenge for Eco Logistics?",
        promptFr: "Question d'analyse : en une phrase claire, quel est le problème principal et quel est l'enjeu critique pour Eco Logistics ?",
        minWords: 20, maxWords: 60,
        rubric: "Total 8 points. Main problem (3 pts): 40% of deliveries are blocked this week, with its two causes (supplier strike AND GPS/IT failure) — 1.5 pts if only one cause or no figure. Critical challenge (3 pts): keeping/saving the key corporate clients who are threatening to cancel their contracts (e.g. by communicating transparently and offering quick solutions). Language (2 pts): one clear, well-built sentence in correct English, reformulated rather than copied word for word; deduct 1 pt if it is a list of fragments or several unconnected sentences.",
        reference: "The main problem is that Eco Logistics is facing a 40% delivery blockage due to a supplier strike and an IT failure, and the critical challenge is to save key client contracts by communicating transparently and offering immediate solutions."
      },
      // --------------------------------------------------------------- IV
      {
        id: "case-email", num: "IV", title: "Cross-Cutting Case Study – 2. Professional Writing", titleFr: "Étude de cas transversale – 2. Rédaction professionnelle",
        points: 12, skill: "ee", type: "ai-text",
        instructions: "Use the same scenario. Write a short formal email (5 to 6 lines) from Sarah to one of her major clients.",
        instructionsFr: "Reprends la même situation. Rédige un court e-mail formel (5 à 6 lignes) de Sarah à l'un de ses clients importants.",
        passage: "Eco Logistics, an eco-friendly transport company, is facing a major crisis. Due to a supplier strike and an IT failure in their GPS tracking system, 40% of this week's deliveries are blocked. Key corporate clients are threatening to cancel their contracts. Sarah, the Operations Manager, must react immediately.",
        prompt: "Write Sarah's email to a major client: inform them of the delivery delay, offer formal apologies with tact, and propose an immediate fallback solution.",
        promptFr: "Rédige l'e-mail de Sarah à un client important : informe-le du retard de livraison, présente des excuses formelles avec tact et propose une solution de repli immédiate.",
        minWords: 50, maxWords: 110,
        rubric: "Total 12 points. Task achievement (5 pts): the three elements are present — informs the client of the delay (1.5), apologises formally and tactfully (1.5), proposes a concrete, immediate fallback solution (2: e.g. alternative carrier, new delivery date, priority dispatch, partial delivery). Register and email conventions (3 pts): formal greeting (Dear Mr/Ms …), formal phrases (I am writing to…, please accept our apologies, please rest assured, we regret…), no contractions or slang, polite closing (Kind regards / Best regards) and signature (Sarah, Operations Manager). Grammar and verb forms (2 pts): correct tenses (Present Continuous for ongoing action, will/future for the solution), B2 accuracy. Coherence and tact (2 pts): logical order, reassuring tone, does not blame the client; it may mention the causes briefly. Length 5-6 lines; deduct 1 pt if clearly too short (under 40 words).",
        reference: "Dear Mr Davis, I am writing to sincerely apologise for the unexpected delay regarding your current shipment. Due to unforeseen supply chain disruptions, your delivery is temporarily on hold. Please rest assured that our operations team is actively working on an alternative solution to dispatch your order by tomorrow morning. Thank you for your patience and understanding. Best regards, Sarah (Operations Manager)"
      },
      // ---------------------------------------------------------------- V
      {
        id: "summary", num: "V", title: "Text Summary & Restitution", titleFr: "Résumé et restitution de texte",
        points: 15, skill: "ce", type: "ai-text",
        instructions: "Read the source text and write a faithful summary in English (about 40-50 words) using your own words.",
        instructionsFr: "Lis le texte source et rédige un résumé fidèle en anglais (environ 40 à 50 mots) avec tes propres mots.",
        passage: "The rise of remote work has fundamentally shifted the expectations of modern employees. Beyond simple flexibility regarding working hours, professionals now look for a deeper sense of purpose and better work-life integration. Companies that fail to adapt to this cultural evolution struggle to attract and retain top talent. Consequently, forward-thinking organizations are redesigning their management structures, moving away from micro-management based on physical presence toward a culture of trust, accountability, and results-oriented performance.",
        prompt: "Summarise the source text in about 40-50 words, in your own words.",
        promptFr: "Résume le texte source en 40 à 50 mots environ, avec tes propres mots.",
        minWords: 40, maxWords: 60,
        rubric: "Total 15 points. Content fidelity (6 pts): the four key ideas — remote work has changed employees' expectations (1.5); they want more than flexibility: purpose and work-life balance/integration (1.5); companies that do not adapt lose/cannot attract talent (1.5); modern companies replace micro-management/presence with trust, accountability and results (1.5). No added opinions or invented information (deduct 1 pt). Reformulation (4 pts): own words and structures; deduct up to 4 pts if whole sentences are copied from the text. Grammar and accuracy (3 pts): B2 accuracy, correct verb forms (Present Perfect \"has changed\", Present Continuous \"are redesigning\"…). Concision and cohesion (2 pts): 40-60 words, linked ideas (so, as a result, therefore…).",
        reference: "Remote work has changed employee expectations, shifting the focus from office presence to purpose and work-life balance. To retain top talent, forward-thinking organizations are modernizing their management styles, replacing old micro-management habits with a strong workplace culture built on trust, accountability, and performance results."
      },
      // --------------------------------------------------------------- VI
      {
        id: "present", num: "VI", title: "Temporal Writing – A. The Daily Routine in the Present (A1-A2)", titleFr: "Écriture et temps – A. La routine quotidienne au présent (A1-A2)",
        points: 10, skill: "ee", type: "ai-text",
        instructions: "Write a paragraph of at least 60 words in the present tense, using the Present Simple and adverbs of frequency.",
        instructionsFr: "Rédige un paragraphe d'au moins 60 mots au présent, en utilisant le Present Simple et des adverbes de fréquence.",
        prompt: "Describe your habits, your daily routine and your workplace or studies.",
        promptFr: "Décris tes habitudes, ta routine quotidienne et ton lieu de travail ou tes études.",
        minWords: 60,
        rubric: "Total 10 points. Task (2 pts): habits, daily routine AND workplace or studies are described. Present Simple conjugation (4 pts): consistently correct Present Simple, including third person -s (she works, he goes, it starts), do/does in questions and negatives (I don't…, he doesn't…), no -ing forms instead of habits; deduct 1 pt per recurring error type. Adverbs of frequency (2 pts): at least three (always, usually, often, sometimes, never…) correctly placed (before the main verb, after \"be\"). Vocabulary and coherence (2 pts): daily-life and work vocabulary, time markers (in the morning, then, after that). Length: at least 60 words; deduct 1 pt if under 50.",
        reference: "I usually wake up at 7:00 AM every day and start my morning with a cup of coffee while checking my emails. I generally work from an open-plan office where I collaborate closely with my colleagues on daily tasks. In the evening, I always go to the gym before cooking dinner and relaxing with a book."
      },
      // -------------------------------------------------------------- VII
      {
        id: "past", num: "VII", title: "Temporal Writing – B. A Day in the Past (A2-B1)", titleFr: "Écriture et temps – B. Une journée au passé (A2-B1)",
        points: 10, skill: "ee", type: "ai-text",
        instructions: "Write a paragraph of at least 60 words, using a combination of the Past Simple and the Past Continuous.",
        instructionsFr: "Rédige un paragraphe d'au moins 60 mots, en combinant le Past Simple et le Past Continuous.",
        prompt: "Describe an extraordinary day or a specific challenge you faced in the past.",
        promptFr: "Décris une journée extraordinaire ou un défi particulier que tu as vécu dans le passé.",
        minWords: 60,
        rubric: "Total 10 points. Task (2 pts): a clearly past, extraordinary day or specific challenge, with a beginning and an outcome. Past Simple (3 pts): correct forms of regular (-ed) AND irregular verbs (went, took, began, felt…), negatives and questions with did + base verb. Past Continuous (3 pts): at least two correct uses (was/were + -ing) for background or an action in progress interrupted by a Past Simple action (while/when: \"While I was preparing…, the server crashed\"); deduct 1.5 pts if the Past Continuous is absent, 1 pt per wrong form (e.g. \"we was\", \"I was prepare\"). Vocabulary and coherence (2 pts): time linkers (suddenly, while, when, then, finally, fortunately). Length: at least 60 words; deduct 1 pt if under 50.",
        reference: "Last month, while we were preparing a major presentation for an important audit, our main computer server suddenly crashed. While my team was panicking and trying to save their documents manually, I managed to contact the IT emergency service. Fortunately, they restored the system just in time."
      },
      // ------------------------------------------------------------- VIII
      {
        id: "future", num: "VIII", title: "Temporal Writing – C. 6-Month Projects (B1-B2)", titleFr: "Écriture et temps – C. Projets à 6 mois (B1-B2)",
        points: 15, skill: "ee", type: "ai-text",
        instructions: "Write a paragraph of at least 60 words, using going to, will, the Present Continuous for the future, and modals of probability.",
        instructionsFr: "Rédige un paragraphe d'au moins 60 mots, en utilisant going to, will, le Present Continuous à valeur de futur et des modaux de probabilité.",
        prompt: "Detail your projects, career objectives and prospects for the next 6 months.",
        promptFr: "Détaille tes projets, tes objectifs professionnels et tes perspectives pour les 6 prochains mois.",
        minWords: 60,
        rubric: "Total 15 points. Task (2 pts): projects, career objectives and prospects for the next 6 months. Future forms (8 pts), 2 pts each, each correctly formed AND used with the right meaning: \"going to\" for an intention/plan (I am going to + base verb); \"will\" for a decision, promise or prediction (will + base verb, no \"will to\"); Present Continuous for a fixed arrangement (I am starting a course in January, I am meeting…); a modal of probability (might / may / could / should / will probably) + base verb. Deduct the 2 pts of any form that is missing or wrong. Grammar accuracy elsewhere (2 pts): B2 accuracy, correct conditionals if used (If + present, will/might…). Vocabulary (2 pts): career vocabulary (promotion, certification, responsibilities, goals…). Coherence (1 pt): logical progression, linkers. Length: at least 60 words; deduct 1 pt if under 50.",
        reference: "Over the next six months, I am going to complete an intensive certification course in project management. I will also take on more leadership responsibilities within my team. If everything goes according to plan, I might be promoted to a senior coordinator role by the end of the year. (A full answer also needs a Present Continuous with future meaning, e.g. \"I am starting the course in January\".)"
      }
    ],

    // =========================================================================
    // RATTRAPAGE — SECOND CHANCE SYNTHESIS EXAM (Levels A1 – B2)
    // =========================================================================
    secondChance: {
      title: "Second Chance Synthesis Exam (Levels A1 – B2)",
      titleFr: "Contrôle de rattrapage – synthèse (niveaux A1 – B2)",
      objective: "This second chance exam covers the same core themes (present, past, future, formal and professional vocabulary, a short case study and paragraph writing) with a more guided and accessible approach, to validate what you have learnt.",
      objectiveFr: "Ce contrôle de rattrapage aborde les mêmes thèmes fondamentaux (présent, passé, futur, vocabulaire formel et professionnel, courte étude de cas et rédaction de paragraphes) avec une approche plus guidée et accessible, pour valider tes acquis.",
      sections: [
        // -------------------------------------------------------------- I
        {
          id: "sc-mcq", num: "I", title: "Multiple Choice Questions – Core Grammar & Vocabulary", titleFr: "QCM – grammaire et vocabulaire essentiels",
          points: 20, skill: "gr", type: "mcq",
          instructions: "Choose the correct answer for each question.",
          instructionsFr: "Sélectionnez la bonne réponse pour chaque question.",
          items: [
            { q: "(Present Routine) \"Every morning, she _______ to work by bus.\"",
              qFr: "(Routine au présent) « Tous les matins, elle _______ au travail en bus. »",
              opts: ["goes", "go", "going"],
              correct: 0,
              why: "Présent simple, troisième personne du singulier (she) : on ajoute -s / -es au verbe → she goes. « going » seul n'est pas un verbe conjugué." },
            { q: "(Past Simple) \"Yesterday, we _______ a great movie at the cinema.\"",
              qFr: "(Prétérit) « Hier, nous _______ un super film au cinéma. »",
              opts: ["watch", "have watched", "watched"],
              correct: 2,
              why: "Prétérit simple pour une action passée et terminée à un moment précis (yesterday). Le Present Perfect (have watched) est impossible avec « yesterday »." },
            { q: "(Future Intentions) \"I have already signed the contract for a new flat: next month, I _______ move into it.\"",
              qFr: "(Intentions futures) « J'ai déjà signé le bail d'un nouvel appartement : le mois prochain, je _______ y emménager. »",
              opts: ["will", "am going to", "go"],
              correct: 1,
              why: "« be going to » exprime une intention ou un projet déjà planifié (le bail est signé). « will » sert plutôt à une décision prise sur le moment ou à une prédiction ; « go move » est incorrect." },
            { q: "(Formal vs Informal) Which sentence is more polite and professional for an email?",
              qFr: "(Formel / informel) Quelle phrase est la plus polie et professionnelle pour un e-mail ?",
              opts: ["Could you please send me the file?", "Send me the file now.", "Give it to me."],
              correct: 0,
              why: "Registre professionnel et poli : la question avec « Could you please… ? » adoucit la demande. L'impératif seul (Send…, Give…) sonne comme un ordre." },
            { q: "(Modal Verbs) \"You _______ smoke inside the office; it is strictly prohibited.\"",
              qFr: "(Verbes modaux) « Tu _______ fumer dans les bureaux ; c'est strictement interdit. »",
              opts: ["don't have to", "can", "must not"],
              correct: 2,
              why: "« must not (mustn't) » exprime une interdiction stricte. Attention : « don't have to » = ce n'est pas obligatoire (absence d'obligation), pas une interdiction." }
          ]
        },
        // ------------------------------------------------------------- II
        {
          id: "sc-sentences", num: "II", title: "Guided Sentences & Short Answers", titleFr: "Phrases guidées et réponses courtes",
          points: 20, skill: "ee", type: "ai-text",
          instructions: "Answer the questions with simple, correct sentences in English. Write 2 sentences for each question and number your answers 1, 2 and 3.",
          instructionsFr: "Répondez aux questions suivantes en faisant des phrases simples et correctes en anglais. Écrivez 2 phrases par question et numérotez vos réponses 1, 2 et 3.",
          prompt: "1. (Daily Routine) What do you usually do on weekends? Write 2 sentences.\n2. (Past Event) What did you do last weekend? Write 2 sentences using the past tense.\n3. (Future Plans) What are your plans for your next holidays? Write 2 sentences.",
          promptFr: "1. (Routine) Que fais-tu d'habitude le week-end ? Écris 2 phrases.\n2. (Événement passé) Qu'as-tu fait le week-end dernier ? Écris 2 phrases au passé.\n3. (Projets) Quels sont tes projets pour tes prochaines vacances ? Écris 2 phrases.",
          minWords: 30, maxWords: 120,
          rubric: "Total 20 points. Question 1 – present (6 pts): task, 2 sentences about usual weekend activities (2); correct Present Simple, including third person -s if used, and at least one adverb of frequency correctly placed (3); vocabulary (1). Question 2 – past (7 pts): task, 2 sentences about last weekend (2); correct Past Simple of regular and irregular verbs (visited, had, went, stayed…), no present tense for finished actions (4); vocabulary (1). Question 3 – future (7 pts): task, 2 sentences about next holiday plans (2); correct future forms: going to + base verb, will + base verb or Present Continuous for arrangements (4); vocabulary (1). Deduct 1 pt per recurring conjugation error type within a question. Give 0 for a missing answer; half the task points if only 1 sentence is written. Simple A2 sentences are enough: do not penalise the lack of complex structures.",
          reference: "1: \"On weekends, I usually sleep a little longer and spend time with my family. We often go for a walk in the park on Sunday afternoons.\" 2: \"Last weekend, I visited my grandparents and we had a great lunch together. On Sunday, I stayed at home to read a book.\" 3: \"For my next holidays, I am going to travel to Spain with some friends. We will stay in a small hotel near the beach.\""
        },
        // ------------------------------------------------------------ III
        {
          id: "sc-case", num: "III", title: "Short Case Study & Simple Professional Writing", titleFr: "Courte étude de cas et rédaction professionnelle simple",
          points: 20, skill: "ee", type: "ai-text",
          instructions: "Read the situation and write a short reply.",
          instructionsFr: "Lisez la situation et rédigez une réponse courte.",
          passage: "A customer sent a message saying their package is arriving one day late. They are a bit unhappy. You need to reply briefly to apologise and reassure them.",
          prompt: "Write a short professional message (3 to 4 lines) to apologise for the short delay and confirm that the package will arrive tomorrow.",
          promptFr: "Rédige un court message professionnel (3 à 4 lignes) pour t'excuser de ce petit retard et confirmer que le colis arrivera demain.",
          minWords: 25, maxWords: 80,
          rubric: "Total 20 points. Task achievement (8 pts): apologises for the one-day delay (3); confirms clearly that the package will arrive tomorrow (3); reassures the customer / thanks them for their patience (2). Register (5 pts): polite professional tone, greeting (Dear Customer / Dear Mr/Ms …), polite phrases (I am sorry / please accept our apologies / thank you for your patience), closing (Kind regards / Best regards) — no slang. Grammar and verb forms (5 pts): correct sentences, future with will for the delivery (will arrive), correct Present Simple/Continuous. Length and coherence (2 pts): 3-4 lines, logical order. Do not penalise British/American spelling (apologise/apologize).",
          reference: "Dear Customer, I am writing to sincerely apologise for the short one-day delay regarding your package. Please be assured that it is securely on its way and will arrive at your address tomorrow. Thank you for your patience."
        },
        // ------------------------------------------------------------- IV
        {
          id: "sc-summary", num: "IV", title: "Guided Text Summary", titleFr: "Résumé de texte guidé",
          points: 20, skill: "ce", type: "ai-text",
          instructions: "Read the short text and answer the two questions in your own words. Answer each question in 1 sentence and number your answers 1 and 2.",
          instructionsFr: "Lisez le texte court et répondez aux questions avec vos propres mots. Répondez à chaque question en 1 phrase et numérotez vos réponses 1 et 2.",
          passage: "Learning a new language requires patience and daily practice. Instead of studying for hours once a week, it is much more effective to practise vocabulary and listen to short audio clips every single day. Consistency is the true key to fluency.",
          prompt: "1. What are the two main requirements to learn a new language, according to the text? (Answer in 1 sentence.)\n2. Why is daily practice better than studying once a week? (Answer in 1 sentence.)",
          promptFr: "1. Selon le texte, quelles sont les deux conditions principales pour apprendre une nouvelle langue ? (Réponds en 1 phrase.)\n2. Pourquoi la pratique quotidienne est-elle meilleure qu'une étude une fois par semaine ? (Réponds en 1 phrase.)",
          minWords: 15, maxWords: 70,
          rubric: "Total 20 points. Question 1 (8 pts): both requirements named — patience (3) AND daily practice (3); a complete, correct sentence (2). Question 2 (8 pts): the idea that consistency / regular practice is the key to fluency and is more effective than long sessions once a week (5); a complete sentence with a correct reason (because…) (3). Language (4 pts): own words rather than whole copied sentences (2), grammar and spelling (2). Accept simple A2-B1 language.",
          reference: "1: The two main requirements to learn a new language are patience and daily practice. 2: Daily practice is much more effective because consistency is the true key to fluency, rather than studying for hours once a week."
        },
        // -------------------------------------------------------------- V
        {
          id: "sc-paragraph", num: "V", title: "Guided Paragraph Writing", titleFr: "Rédaction de paragraphe guidée",
          points: 20, skill: "ee", type: "ai-text",
          instructions: "Write a short paragraph (about 40 to 50 words).",
          instructionsFr: "Rédigez un court paragraphe (environ 40 à 50 mots).",
          prompt: "Describe your current job or your studies, your main daily tasks, and what you like about them.",
          promptFr: "Décris ton travail actuel ou tes études, tes principales tâches quotidiennes et ce que tu aimes dans ce travail ou ces études.",
          minWords: 40, maxWords: 70,
          rubric: "Total 20 points. Task achievement (6 pts): current job or studies (2), main daily tasks (2), what the learner likes about it (2). Verb forms (6 pts): correct Present Simple for habits and facts (I work, my tasks include, she manages…), including third person -s; correct use of like/enjoy + -ing or noun; deduct 1 pt per recurring error type. Vocabulary (4 pts): relevant work/study vocabulary (tasks, colleagues, schedule, manage, organise…). Coherence (4 pts): logical order, simple linkers (and, but, also, what I like most is…). Length: about 40-50 words; deduct 2 pts if under 30 words.",
          reference: "I currently work as an administrative assistant in a dynamic office environment. My daily tasks include managing emails, organizing schedules, and coordinating with different teams. What I like most about my job is the variety of projects and the friendly atmosphere among my colleagues."
        }
      ]
    }
  };
})(window.LESSON_EXAMS);
