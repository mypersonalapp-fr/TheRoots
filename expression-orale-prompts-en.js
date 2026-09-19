// The Roots — Expression orale (Anglais, niveau A1).
//
// "Appels" simulés : l'appli lit le message à voix haute (synthèse vocale,
// comme un appel entrant), puis l'apprenant répond à l'oral avec son micro
// (reconnaissance vocale du navigateur). Mêmes "points attendus" que pour
// l'expression écrite, utilisés pour la checklist automatique sur ce que le
// micro a capté.

export const EXPRESSION_ORALE_PROMPTS_EN = [
  {
    id: 1,
    from: "Sam",
    callText: "Hi! It's Sam. Do you want to have dinner together this week? What day is good for you?",
    expectedPoints: [
      { label: "Dire si tu es disponible", keywords: ["yes", "sure", "no", "sorry", "free", "busy"] },
      { label: "Proposer un jour", keywords: ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"] },
    ],
  },
  {
    id: 2,
    from: "Unknown caller",
    callText: "Hello, sorry to bother you. I'm lost. Can you tell me how to get to the train station from here?",
    expectedPoints: [
      { label: "Donner une direction (turn left/right, go straight)", keywords: ["turn", "straight", "left", "right"] },
      { label: "Mentionner un repère (next to, near, opposite…)", keywords: ["next to", "near", "opposite", "in front of", "behind"] },
    ],
  },
  {
    id: 3,
    from: "Lucas",
    callText: "Hey, it's Lucas! How was your weekend? What did you do?",
    expectedPoints: [
      { label: "Dire comment était ton week-end", keywords: ["good", "great", "nice", "fine", "tired", "busy"] },
      { label: "Utiliser un verbe au passé", keywords: ["went", "saw", "watched", "ate", "had", "visited", "played", "stayed", "met"] },
    ],
  },
  {
    id: 4,
    from: "Maria",
    callText: "Hi, this is Maria, your new neighbour. I just wanted to introduce myself. What's your name, and what do you do?",
    expectedPoints: [
      { label: "Te présenter (my name is…)", keywords: ["my name", "i am", "i'm"] },
      { label: "Parler de ton travail ou tes études", keywords: ["work", "job", "study", "student", "teacher", "engineer"] },
    ],
  },
];
