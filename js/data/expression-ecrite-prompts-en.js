// The Roots — Expression écrite (Anglais, niveau A1).
//
// Messages/emails auxquels l'apprenant doit répondre par écrit. Chaque
// prompt a une petite liste de "points attendus" (expectedPoints) : des
// mots-clés qu'on s'attend à retrouver dans une bonne réponse (utilisés pour
// la checklist automatique "As-tu pensé à…", en complément de la correction
// grammaire/orthographe faite par LanguageTool — voir expression.js).

export const EXPRESSION_ECRITE_PROMPTS_EN = [
  {
    id: 1,
    from: "Sam",
    subject: "Weekend plans?",
    message: "Hi! How are you? What did you do last weekend? Write back soon! — Sam",
    expectedPoints: [
      { label: "Dire comment tu vas", keywords: ["fine", "good", "great", "well", "ok", "okay", "tired", "happy"] },
      { label: "Parler de ton week-end", keywords: ["weekend", "saturday", "sunday"] },
      { label: "Utiliser un verbe au passé (went, saw, watched, ate…)", keywords: ["went", "saw", "watched", "ate", "had", "visited", "played", "stayed", "met"] },
    ],
  },
  {
    id: 2,
    from: "Alex",
    subject: "Coffee this week?",
    message: "Hey! Are you free this week? Would you like to have a coffee together? Let me know what day works for you. — Alex",
    expectedPoints: [
      { label: "Dire si tu es libre ou non", keywords: ["free", "busy", "yes", "no", "sure"] },
      { label: "Proposer un jour", keywords: ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"] },
      { label: "Proposer une heure ou un lieu", keywords: ["o'clock", "am", "pm", "morning", "afternoon", "café", "cafe"] },
    ],
  },
  {
    id: 3,
    from: "Maria",
    subject: "Hello neighbour!",
    message: "Hi, I'm Maria, your new neighbour! I just moved in. Can you tell me a bit about the area? Are there any nice shops or parks nearby? — Maria",
    expectedPoints: [
      { label: "Te présenter", keywords: ["my name", "i am", "i'm", "nice to meet"] },
      { label: "Parler d'un magasin ou d'un parc", keywords: ["shop", "park", "supermarket", "market"] },
      { label: "Souhaiter la bienvenue", keywords: ["welcome"] },
    ],
  },
  {
    id: 4,
    from: "The Green Table restaurant",
    subject: "Your reservation",
    message: "Hello, this is The Green Table restaurant. We would like to confirm your reservation. Can you tell us the time and the number of people? — The Green Table",
    expectedPoints: [
      { label: "Donner une heure", keywords: ["o'clock", "am", "pm"] },
      { label: "Donner un nombre de personnes", keywords: ["people", "person", "of us"] },
      { label: "Confirmer poliment", keywords: ["please", "thank you", "yes"] },
    ],
  },
  {
    id: 5,
    from: "Lucas",
    subject: "Tell me about your family",
    message: "Hi! I don't know much about your family. Can you tell me about them? How many brothers or sisters do you have? — Lucas",
    expectedPoints: [
      { label: "Parler d'un membre de ta famille", keywords: ["mother", "father", "brother", "sister", "parents", "family"] },
      { label: "Donner un nombre", keywords: ["one", "two", "three", "four", "no"] },
      { label: "Utiliser have/has got", keywords: ["have got", "has got", "have", "has"] },
    ],
  },
];
