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
  "A2.2": [
    { title: "Tes dernières vacances", icon: "🏖️", scene: "Un collègue te demande où tu es allé(e) en vacances.", turns: [
      { npc: "Hi! Did you go on holiday last summer?", ok: ["\\b(yes|no|i did|i didn.t|i went|we went)\\b"], model: "Yes, I went to Spain.", hint: "Réponds avec did / went." },
      { npc: "Nice! What did you do there?", ok: ["\\b(i|we) (swam|visited|ate|walked|saw|played|climbed|stayed|relaxed|took|had|met|bought)\\b"], model: "We swam and we visited old towns.", hint: "Past Simple : swam, visited…" },
      { npc: "How long did you stay?", ok: ["\\b(a week|two weeks|ten days|\\w+ (days|weeks|nights)|for \\w+|\\d)"], model: "We stayed for a week.", hint: "Dis la durée avec for." },
      { npc: "Sounds great! Did you like it?", ok: ["\\b(yes|no|loved|liked|enjoyed|it was|i did|i didn.t)\\b"], model: "Yes, I loved it!", hint: "Dis si tu as aimé." }] },
    { title: "Quand tu étais petit(e)", icon: "🧸", scene: "Un ami te pose des questions sur ton enfance.", turns: [
      { npc: "Where did you live when you were a child?", ok: ["\\b(i (used to live|lived|grew up)|in (a|the|my))\\b"], model: "I used to live in a small village.", hint: "Used to live / lived." },
      { npc: "What did you use to do after school?", ok: ["\\b(i used to|i (played|watched|rode|read|did))\\b"], model: "I used to play football with my friends.", hint: "I used to + verbe." },
      { npc: "Do you still do that?", ok: ["\\b(yes|no|not any ?more|no longer|sometimes|i still|i do|i don.t)\\b"], model: "No, not any more.", hint: "Réponds avec not any more." },
      { npc: "Times change! Thanks for sharing.", ok: ["\\b(thanks|thank you|yes|true|you.re welcome|bye)\\b"], model: "Yes, times change!", hint: "Réponds gentiment." }] },
  ],
  "A2.3": [
    { title: "Que faisais-tu hier soir ?", icon: "🌙", scene: "Un ami te demande ce que tu faisais hier soir.", turns: [
      { npc: "Hi! I called you last night at nine. Were you sleeping?", ok: ["\\b(no|yes|i wasn.t|i was|i didn.t)\\b"], model: "No, I wasn't. I was watching a film.", hint: "Réponds avec was / wasn't." },
      { npc: "Oh, sorry. What were you watching?", ok: ["\\b(i was watching|we were watching|a (film|movie|series|show|comedy)|the news|football)\\b"], model: "I was watching a comedy.", hint: "I was watching + ce que tu regardais." },
      { npc: "Was anybody with you?", ok: ["\\b(yes|no|my (brother|sister|friend|mum|mother|dad|father|husband|wife)|i was (alone|with)|nobody)\\b"], model: "Yes, my brother was watching it with me.", hint: "Dis qui était avec toi." },
      { npc: "Nice! Did you hear the thunder?", ok: ["\\b(yes|no|i did|i didn.t|i heard|it was|too loud|asleep)\\b"], model: "Yes, I did. It was very loud!", hint: "Réponds avec did / didn't." }] },
    { title: "Un témoin", icon: "🕵️", scene: "Un policier te pose des questions sur ce que tu faisais.", turns: [
      { npc: "Good morning. What were you doing at six o'clock yesterday?", ok: ["\\b(i was|we were)\\s+\\w+ing\\b"], model: "I was walking my dog.", hint: "I was + verbe en -ing." },
      { npc: "Did you see anything unusual?", ok: ["\\b(yes|no|i (saw|didn.t see)|nothing|a (man|woman|car))\\b"], model: "Yes, I saw a man near the bank.", hint: "Dis ce que tu as vu." },
      { npc: "What was he doing?", ok: ["\\b(he was|he wasn.t)\\s+\\w+ing\\b|\\bhe (ran|walked|stood|looked)\\b"], model: "He was running very fast.", hint: "He was + verbe en -ing." },
      { npc: "Thank you for your help.", ok: ["\\b(you.re welcome|no problem|thank you|thanks|bye|goodbye)\\b"], model: "You're welcome!", hint: "Réponds poliment." }] },
  ],
};
