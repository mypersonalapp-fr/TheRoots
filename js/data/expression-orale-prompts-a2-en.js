// The Roots — Expression orale (Anglais, niveau A2).
//
// Même mécanique qu'en A1 (voir expression-orale-prompts-en.js) : l'appli
// lit le texte à voix haute, puis l'apprenant répond à l'oral avec son
// micro. Les phrases sont un peu plus longues et utilisent un peu plus de
// temps (passé, futur, comparatifs) qu'en A1, pour rester dans l'esprit A2.
//
// Deux familles d'entrées dans ce fichier, sur les 5 mêmes thèmes (2 fois
// chacun) : santé, imprévus de voyage, goûts alimentaires, scolarité
// (diplômes/cours/devoirs/examens), et un mariage familial —
// - id 1 à 10 : des "appels" (comme en A1) ;
// - id 11 à 20 : des "extraits de film" — une courte scène imaginée, lue à
//   voix haute (toujours de la synthèse vocale, pas une vraie vidéo — voir
//   Compréhension orale pour du vrai contenu vidéo), qui se termine par une
//   consigne demandant à l'apprenant de réagir comme s'il était dans la
//   scène. Ashley a demandé "des extraits de film" en plus des appels ; vu
//   que le but ici est de faire PARLER l'apprenant (pas de lui faire
//   regarder une vidéo), ce sont des scènes écrites, pas de vrais extraits
//   de film existants.

export const EXPRESSION_ORALE_PROMPTS_A2_EN = [
  // ---- Santé ----
  {
    id: 1,
    from: "Chloé",
    callText: "Hi, it's Chloé. I heard you weren't feeling well last week. How are you feeling now? Did you go to the doctor?",
    expectedPoints: [
      { label: "Dire comment tu te sens maintenant", keywords: ["better", "fine", "still", "tired", "ok", "okay", "good", "bad"] },
      { label: "Parler d'une visite chez le médecin (passé)", keywords: ["went", "saw the doctor", "doctor", "appointment", "didn't go"] },
    ],
  },
  {
    id: 2,
    from: "Dr. Martin's clinic",
    callText: "Hello, this is a reminder call from Dr. Martin's clinic. You have an appointment next week. Can you tell us what symptoms you have, so the doctor can prepare?",
    expectedPoints: [
      { label: "Décrire un symptôme", keywords: ["headache", "cough", "fever", "pain", "tired", "sore throat", "stomach"] },
      { label: "Depuis combien de temps", keywords: ["since", "for", "days", "week", "yesterday"] },
    ],
  },

  // ---- Imprévus de voyage ----
  {
    id: 3,
    from: "Julien",
    callText: "Hey, it's Julien! I just heard your flight was delayed yesterday. What happened exactly, and how long did you have to wait at the airport?",
    expectedPoints: [
      { label: "Expliquer ce qui s'est passé (passé)", keywords: ["delayed", "cancelled", "waited", "lost", "missed"] },
      { label: "Donner une durée", keywords: ["hour", "hours", "minutes", "two", "three", "four"] },
    ],
  },
  {
    id: 4,
    from: "Unknown caller",
    callText: "Hi, sorry to call so early. I just missed my train because of a taxi problem. What should I do now — wait for the next one or take the bus instead?",
    expectedPoints: [
      { label: "Donner un conseil", keywords: ["should", "you could", "why don't you", "better", "wait", "take the bus"] },
      { label: "Justifier le conseil", keywords: ["because", "faster", "cheaper", "quicker", "sooner"] },
    ],
  },

  // ---- Goûts et dégoûts alimentaires ----
  {
    id: 5,
    from: "Sam",
    callText: "Hi! I'm cooking dinner for us on Friday. Is there anything you really don't like, or any food you're allergic to? And what's your favourite dish?",
    expectedPoints: [
      { label: "Dire ce que tu n'aimes pas / une allergie", keywords: ["don't like", "hate", "allergic", "can't eat", "no thanks"] },
      { label: "Dire ce que tu aimes", keywords: ["love", "like", "favourite", "favorite", "prefer"] },
    ],
  },
  {
    id: 6,
    from: "Léa",
    callText: "Hey, it's Léa. I'm looking for a new restaurant to try this weekend. Do you prefer sweet or salty food? And is there a dish you find disgusting?",
    expectedPoints: [
      { label: "Exprimer une préférence (sucré/salé)", keywords: ["sweet", "salty", "prefer", "rather"] },
      { label: "Parler d'un dégoût", keywords: ["disgusting", "don't like", "can't stand", "horrible", "hate"] },
    ],
  },

  // ---- Scolarité : diplômes, cours, devoirs, examens ----
  {
    id: 7,
    from: "Nora",
    callText: "Hi, it's Nora from class. Have you finished the homework for tomorrow? And are you ready for the exam next week? I'm a bit stressed about it.",
    expectedPoints: [
      { label: "Parler des devoirs (fini ou non)", keywords: ["finished", "homework", "not yet", "almost", "done"] },
      { label: "Parler de l'examen à venir", keywords: ["exam", "ready", "studying", "revising", "nervous"] },
    ],
  },
  {
    id: 8,
    from: "Mr. Dubois",
    callText: "Hello, this is Mr. Dubois calling about your diploma results. Congratulations! What course are you planning to take next year?",
    expectedPoints: [
      { label: "Remercier / réagir au résultat", keywords: ["thank you", "thanks", "happy", "great news"] },
      { label: "Parler d'un futur cours ou projet", keywords: ["next year", "going to", "plan to", "want to study", "course"] },
    ],
  },

  // ---- Mariage familial ----
  {
    id: 9,
    from: "Tata Rose",
    callText: "Hi, it's your aunt Rose! We're organising your cousin's wedding for next month. What do you think about the date, and have you decided what you're going to wear?",
    expectedPoints: [
      { label: "Donner ton avis sur la date", keywords: ["good", "perfect", "works for me", "fine", "great"] },
      { label: "Parler de la tenue (futur)", keywords: ["going to wear", "will wear", "dress", "suit"] },
    ],
  },
  {
    id: 10,
    from: "Marc",
    callText: "Hey, it's Marc. The wedding is quite far from here. Are you going to drive, or would you prefer to take the train with the rest of the family?",
    expectedPoints: [
      { label: "Choisir un moyen de transport", keywords: ["drive", "car", "train", "prefer", "rather"] },
      { label: "Dire avec qui tu voyages", keywords: ["with", "family", "alone", "together"] },
    ],
  },

  // =====================================================================
  // Extraits de film (scènes imaginées, voir la note en haut du fichier)
  // =====================================================================

  // ---- Santé ----
  {
    id: 11,
    from: "Film excerpt — \"Getting Better\"",
    callText: "Scene: two friends are in a kitchen. One of them says: \"You look really tired today. Have you been sleeping enough? Maybe you should see a doctor.\" Now imagine you are in this scene. How do you feel, and what are you going to do about it?",
    expectedPoints: [
      { label: "Dire comment tu te sens", keywords: ["tired", "fine", "not great", "ok", "okay", "bad"] },
      { label: "Dire ce que tu vas faire (futur)", keywords: ["going to", "will", "see a doctor", "rest", "sleep"] },
    ],
  },
  {
    id: 12,
    from: "Film excerpt — \"The Check-up\"",
    callText: "Scene: a nurse in a clinic waiting room turns to the next patient and asks: \"So, what symptoms have you had this week?\" Imagine you are the patient. Describe your symptoms.",
    expectedPoints: [
      { label: "Décrire un symptôme", keywords: ["headache", "cough", "fever", "pain", "tired", "sore throat", "stomach"] },
      { label: "Donner une durée", keywords: ["since", "for", "days", "week", "yesterday"] },
    ],
  },

  // ---- Imprévus de voyage ----
  {
    id: 13,
    from: "Film excerpt — \"Missed Connection\"",
    callText: "Scene: at an airport, an announcement says the flight is delayed by three hours. A traveller next to you sighs and says: \"This is a disaster! What are you going to do now?\"",
    expectedPoints: [
      { label: "Réagir à la situation", keywords: ["annoying", "frustrating", "terrible", "don't worry", "it's fine"] },
      { label: "Dire ce que tu vas faire (futur)", keywords: ["going to", "will", "wait", "call", "find"] },
    ],
  },
  {
    id: 14,
    from: "Film excerpt — \"Lost Luggage\"",
    callText: "Scene: at the baggage carousel, a woman looks worried and says: \"I don't see my suitcase anywhere. Has this ever happened to you before? What did you do?\"",
    expectedPoints: [
      { label: "Dire si c'est déjà arrivé (passé)", keywords: ["once", "never", "happened", "before", "last year"] },
      { label: "Dire ce que tu as fait", keywords: ["went", "called", "waited", "asked", "filled"] },
    ],
  },

  // ---- Goûts et dégoûts alimentaires ----
  {
    id: 15,
    from: "Film excerpt — \"Sunday Dinner\"",
    callText: "Scene: a family is sitting around the table. A grandmother pushes a dish towards you and says: \"Try this, it's my speciality! Do you like it?\"",
    expectedPoints: [
      { label: "Donner un avis sur le plat", keywords: ["delicious", "good", "tasty", "not bad", "interesting"] },
      { label: "Dire si tu aimes ou non", keywords: ["like", "love", "don't like", "prefer"] },
    ],
  },
  {
    id: 16,
    from: "Film excerpt — \"The Food Market\"",
    callText: "Scene: at a busy food market, a vendor smiles and says: \"We have so many things to try today! Is there any food you usually avoid?\"",
    expectedPoints: [
      { label: "Dire ce que tu évites ou n'aimes pas", keywords: ["avoid", "don't like", "allergic", "can't eat"] },
      { label: "Donner une raison", keywords: ["because", "too spicy", "too sweet", "don't like the taste"] },
    ],
  },

  // ---- Scolarité : diplômes, cours, devoirs, examens ----
  {
    id: 17,
    from: "Film excerpt — \"Exam Week\"",
    callText: "Scene: in a school corridor, a classmate looks nervous and says: \"I studied all night for this exam. Are you ready for it?\"",
    expectedPoints: [
      { label: "Dire si tu es prêt(e)", keywords: ["ready", "not ready", "a bit", "nervous"] },
      { label: "Parler de ta préparation (étude)", keywords: ["studied", "revised", "didn't study", "prepared"] },
    ],
  },
  {
    id: 18,
    from: "Film excerpt — \"Graduation Day\"",
    callText: "Scene: at a graduation ceremony, a teacher shakes your hand and says: \"Congratulations on your diploma! What are your plans for next year?\"",
    expectedPoints: [
      { label: "Remercier / réagir", keywords: ["thank you", "thanks", "happy", "proud"] },
      { label: "Parler d'un projet futur", keywords: ["going to", "want to", "plan to", "study", "course"] },
    ],
  },

  // ---- Mariage familial ----
  {
    id: 19,
    from: "Film excerpt — \"The Big Day\"",
    callText: "Scene: at a wedding reception, a guest sitting next to you smiles and says: \"What a beautiful wedding! How do you know the bride and groom?\"",
    expectedPoints: [
      { label: "Expliquer ton lien avec les mariés", keywords: ["cousin", "friend", "family", "know", "sister", "brother"] },
      { label: "Donner un avis sur la cérémonie", keywords: ["beautiful", "lovely", "amazing", "wonderful"] },
    ],
  },
  {
    id: 20,
    from: "Film excerpt — \"The Wedding Toast\"",
    callText: "Scene: at the wedding reception, someone hands you a microphone and says: \"It's your turn to make a toast! What would you like to say to the couple?\"",
    expectedPoints: [
      { label: "Faire un vœu ou un compliment", keywords: ["wish", "hope", "happy", "congratulations", "love"] },
      { label: "S'adresser directement au couple", keywords: ["you", "your", "both of you"] },
    ],
  },
];
