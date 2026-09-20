// The Roots — Expression écrite (Anglais, niveau A2).
//
// Même mécanique qu'en A1 (voir expression-ecrite-prompts-en.js) : un
// message/email reçu, auquel l'apprenant répond par écrit, corrigé avec
// LanguageTool + une checklist de points attendus (voir expression.js). Les
// messages sont un peu plus longs et demandent un peu plus (passé, futur,
// comparatifs, opinion) qu'en A1, pour rester dans l'esprit A2. 10 messages
// sur les mêmes 5 thèmes que l'Expression orale A2 (2 par thème) : santé,
// imprévus de voyage, goûts alimentaires, scolarité, et un mariage familial.

export const EXPRESSION_ECRITE_PROMPTS_A2_EN = [
  // ---- Santé ----
  {
    id: 1,
    from: "Chloé",
    subject: "Feeling better?",
    message: "Hi! I heard you were sick last week. How are you feeling now? Did you have to see a doctor, and what did you do to get better? Write back soon! — Chloé",
    expectedPoints: [
      { label: "Dire comment tu vas maintenant", keywords: ["better", "fine", "still", "tired", "good", "bad"] },
      { label: "Parler du passé (ce que tu as fait)", keywords: ["went", "saw", "took", "stayed", "rested", "drank"] },
      { label: "Donner un conseil ou une habitude santé", keywords: ["sleep", "water", "rest", "exercise", "eat"] },
    ],
  },
  {
    id: 2,
    from: "GreenLife Gym",
    subject: "How is your fitness routine?",
    message: "Hello! We hope you are enjoying your membership. How often do you exercise each week, and what is your favourite activity? Do you think your health has improved since you started? — GreenLife Gym",
    expectedPoints: [
      { label: "Dire une fréquence", keywords: ["once", "twice", "times a week", "every day", "sometimes"] },
      { label: "Nommer une activité", keywords: ["running", "swimming", "walking", "yoga", "gym", "cycling"] },
      { label: "Comparer avant/maintenant", keywords: ["better", "more", "less", "since", "improved"] },
    ],
  },

  // ---- Imprévus de voyage ----
  {
    id: 3,
    from: "Julien",
    subject: "Your trip!",
    message: "Hey! How was your trip last week? I heard something went wrong at the airport. What happened exactly, and how did you solve the problem? — Julien",
    expectedPoints: [
      { label: "Raconter ce qui s'est passé (passé)", keywords: ["missed", "lost", "delayed", "cancelled", "waited"] },
      { label: "Expliquer comment tu as réglé le problème", keywords: ["called", "found", "took", "asked", "solved"] },
    ],
  },
  {
    id: 4,
    from: "SkyFly Airlines",
    subject: "Your baggage claim",
    message: "Dear customer, we are sorry your luggage was lost during your last flight. Can you describe what happened and what was in your suitcase? We will contact you as soon as possible. — SkyFly Airlines",
    expectedPoints: [
      { label: "Décrire ce qui s'est passé", keywords: ["lost", "never arrived", "missing", "didn't arrive"] },
      { label: "Décrire le contenu de la valise", keywords: ["clothes", "shoes", "bag", "gifts", "things"] },
    ],
  },

  // ---- Goûts et dégoûts alimentaires ----
  {
    id: 5,
    from: "Sam",
    subject: "Dinner on Friday",
    message: "Hi! I'm planning to cook dinner for us on Friday. What food do you like, and is there anything you don't like or can't eat? Also, do you prefer something sweet or salty for dessert? — Sam",
    expectedPoints: [
      { label: "Dire ce que tu aimes", keywords: ["like", "love", "favourite", "favorite", "enjoy"] },
      { label: "Dire ce que tu n'aimes pas ou une allergie", keywords: ["don't like", "hate", "allergic", "can't eat"] },
      { label: "Choisir sucré ou salé", keywords: ["sweet", "salty", "prefer", "rather"] },
    ],
  },
  {
    id: 6,
    from: "The Olive Tree restaurant",
    subject: "Tell us about your visit",
    message: "Thank you for visiting The Olive Tree last week! What did you think of the food? Was there a dish you found delicious, or one you didn't enjoy? — The Olive Tree",
    expectedPoints: [
      { label: "Donner un avis (passé)", keywords: ["was", "were", "delicious", "good", "bad", "disappointing"] },
      { label: "Parler d'un plat précis", keywords: ["dish", "starter", "dessert", "main course", "soup"] },
    ],
  },

  // ---- Scolarité : diplômes, cours, devoirs, examens ----
  {
    id: 7,
    from: "Nora",
    subject: "Exam next week!",
    message: "Hi! Are you ready for the exam next week? Did you finish all the homework? What subject are you most worried about? — Nora",
    expectedPoints: [
      { label: "Dire si tu es prêt(e)", keywords: ["ready", "not ready", "studying", "revising", "nervous"] },
      { label: "Parler des devoirs (fait ou non)", keywords: ["finished", "homework", "not yet", "almost done"] },
      { label: "Nommer une matière", keywords: ["maths", "english", "history", "science", "subject"] },
    ],
  },
  {
    id: 8,
    from: "City College",
    subject: "Your diploma and next steps",
    message: "Congratulations on your diploma! What course would you like to take next year, and why did you choose it? — City College",
    expectedPoints: [
      { label: "Remercier ou réagir", keywords: ["thank you", "thanks", "happy", "proud"] },
      { label: "Nommer un futur cours et une raison", keywords: ["because", "want to", "going to", "course", "study"] },
    ],
  },

  // ---- Mariage familial ----
  {
    id: 9,
    from: "Tata Rose",
    subject: "Wedding preparations",
    message: "Hi! We are preparing your cousin's wedding for next month. What do you think about the date? And have you decided what you are going to wear? — Tata Rose",
    expectedPoints: [
      { label: "Donner ton avis sur la date", keywords: ["good", "perfect", "works", "fine", "great"] },
      { label: "Parler de la tenue (futur)", keywords: ["going to wear", "will wear", "dress", "suit"] },
    ],
  },
  {
    id: 10,
    from: "Marc",
    subject: "How are you getting there?",
    message: "Hey! The wedding is quite far from here. Are you going to drive, or would you rather take the train with the rest of the family? Also, will you stay for the whole weekend? — Marc",
    expectedPoints: [
      { label: "Choisir un moyen de transport", keywords: ["drive", "car", "train", "prefer", "rather"] },
      { label: "Parler de la durée du séjour (futur)", keywords: ["weekend", "stay", "will", "going to", "night"] },
    ],
  },
];
