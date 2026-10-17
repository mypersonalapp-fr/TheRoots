// The Roots — A2 : activité « Conversation » (même format que dialogues-a1.js). Clés : "A2.0", "A2.1"…
// turn = { npc, ok: [regex acceptées], model, hint? }
export const DIALOGUES_A2 = {
  "A2.0": [
    { title: "Une journée normale ?", icon: "📅", scene: "Un collègue te pose des questions sur ta journée.", turns: [
      { npc: "Hi! What time do you usually get up?", ok: ["\\b(i (usually |always |often )?(get up|wake up)|at (five|six|seven|eight|nine|half past|quarter past|\\d))\\b"], model: "I usually get up at seven.", hint: "Habitude : présent simple + une heure." },
      { npc: "And what are you doing right now?", ok: ["\\b(i'm|i am)\\s+\\w+ing\\b"], model: "I'm talking to you.", hint: "Maintenant : I'm + verbe en -ing." },
      { npc: "Do you work on Saturdays?", ok: ["\\b(yes|no)\\b", "\\bi (do|don't|do not|work|never|sometimes)\\b"], model: "No, I don't work on Saturdays.", hint: "Réponds par oui ou non." },
      { npc: "What are you going to do tomorrow?", ok: ["\\b(i'm|i am) going to\\s+\\w+"], model: "I'm going to visit my sister.", hint: "Projet : I'm going to + verbe." },
      { npc: "Thanks! See you tomorrow.", ok: ["\\b(see you|bye|goodbye|thanks|thank you)\\b"], model: "See you! Bye!", hint: "Dis au revoir." }] },
    { title: "Au café", icon: "☕", scene: "Tu commandes dans un café.", turns: [
      { npc: "Hello! What would you like?", ok: ["\\b(i'd like|i would like|can i have|a coffee|a tea|a juice)\\b"], model: "I'd like a tea, please.", hint: "Demande poliment : I'd like…" },
      { npc: "Are you going to have something to eat?", ok: ["\\b(yes|no)\\b", "\\b(i'm|i am) (going to|not going to)\\b", "\\b(i'd like|i would like)\\b"], model: "Yes, I'd like a sandwich.", hint: "Réponds par oui ou non." },
      { npc: "Do you like cheese?", ok: ["\\b(yes|no)\\b", "\\bi (like|love|don't like|do not like|hate)\\b"], model: "Yes, I love cheese.", hint: "I like / I don't like." },
      { npc: "That's five pounds, please.", ok: ["\\b(here you are|here's|thank you|thanks|ok|okay)\\b"], model: "Here you are. Thank you!", hint: "Paye et remercie." }] },
  ],
  "A2.1": [
    { title: "À la machine à café", icon: "☕", scene: "Un collègue te parle de ta routine.", turns: [
      { npc: "Hi! How do you usually come to work?", ok: ["\\b(i (usually |always |often )?(walk|take|catch|drive|cycle|go)|by (bus|train|car|bike))\\b"], model: "I usually take the bus.", hint: "Habitude : I usually…" },
      { npc: "What time do you start work?", ok: ["\\b(seven|eight|nine|ten|half past|quarter|\\d)"], model: "I start at nine.", hint: "Dis l'heure." },
      { npc: "Do you always have lunch at the office?", ok: ["\\b(yes|no|sometimes|always|never|usually|often)\\b"], model: "No, I sometimes eat out.", hint: "Utilise un adverbe de fréquence." },
      { npc: "See you at lunch!", ok: ["\\b(see you|bye|goodbye|thanks|thank you)\\b"], model: "See you! Bye!", hint: "Dis au revoir." }] },
    { title: "Aujourd'hui, c'est différent", icon: "🔄", scene: "Un collègue te voit travailler chez toi.", turns: [
      { npc: "You look busy! What are you doing today?", ok: ["\\b(i'm|i am)\\s+\\w+ing\\b"], model: "I'm working from home.", hint: "Maintenant : I'm + -ing." },
      { npc: "Why are you working from home?", ok: ["\\bbecause\\b", "\\bso\\b"], model: "Because the bus is on strike.", hint: "Explique avec « because »." },
      { npc: "Is that normal?", ok: ["\\b(yes|no|usually|normally)\\b"], model: "No, I usually work in the office.", hint: "Compare avec ton habitude." },
      { npc: "I hope the bus is back tomorrow!", ok: ["\\b(thanks|thank you|me too|i hope so|yes|see you)\\b"], model: "I hope so too!", hint: "Réponds gentiment." }] },
  ],
};
