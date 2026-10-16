// The Roots — A1 : activité « Conversation » (écrire/dire sa réplique en anglais).
// turn = { npc: réplique du personnage (anglais), ok: [regex acceptées], model: réponse modèle, hint?: aide facultative en français }
export const DIALOGUES_A1 = {
  1: [
    { title: "Un nouveau camarade", icon: "🎒", scene: "C’est ton premier jour à l’école. Un élève te parle.", turns: [
      { npc: "Hi! What's your name?", ok: ["\\b(my name is|i am|i'm|im|it's|it is)\\s+[a-z]+"], model: "My name is Lucas.", hint: "Dis ton prénom." },
      { npc: "Nice to meet you! How old are you?", ok: ["\\b(i am|i'm|im|my age is)\\s+(\\d{1,2}|one|two|three|four|five|six|seven|eight|nine|ten|eleven|twelve|thirteen|fourteen|fifteen|sixteen|seventeen|eighteen|nineteen|twenty|thirty|forty|fifty|sixty|seventy|eighty|ninety)\\b"], model: "I'm ten years old.", hint: "Dis ton âge." },
      { npc: "Where are you from?", ok: ["\\b(i am|i'm|im)\\s+from\\s+[a-z]+", "\\bi come from\\s+[a-z]+"], model: "I'm from France.", hint: "Dis d’où tu viens." },
      { npc: "Do you have brothers or sisters?", ok: ["\\bi have\\s+(a|an|one|two|three|no)\\b", "\\bno,?\\s+i (do not|don't|haven't)", "\\bi (do not|don't) have\\b"], model: "Yes, I have a sister.", hint: "Réponds avec « I have… » ou « I don’t have… »." },
      { npc: "Great! See you tomorrow!", ok: ["\\b(see you|goodbye|good bye|bye)\\b"], model: "Goodbye! See you tomorrow!", hint: "Dis au revoir." } ] },
    { title: "Au secrétariat", icon: "📝", scene: "Tu t’inscris dans un club. La secrétaire pose des questions.", turns: [
      { npc: "Hello. What is your last name?", ok: ["\\b(my (last name|surname) is|it is|it's)\\s+[a-z]+"], model: "My last name is Smith.", hint: "Dis ton nom de famille." },
      { npc: "And what is your nationality?", ok: ["\\b(i am|i'm|im|my nationality is)\\s+(a\\s+)?[a-z]+"], model: "I'm French.", hint: "Dis ta nationalité." },
      { npc: "What is your phone number?", ok: ["\\d[\\d\\s.-]{5,}", "\\b(zero|oh|one|two|three|four|five|six|seven|eight|nine)(\\W+(zero|oh|one|two|three|four|five|six|seven|eight|nine)){4,}"], model: "My phone number is 06 12 34 56 78.", hint: "Dis ou écris un numéro (par exemple 06 12 34 56 78)." },
      { npc: "Thank you. Is this your bag?", ok: ["\\b(yes|no)\\b", "\\b(it is|it's|this is|that is|that's)\\b"], model: "Yes, it is my bag.", hint: "Réponds par oui ou non." } ] },
  ],
  6: [
    { title: "Au petit-déjeuner", icon: "🍳", scene: "Un ami te parle de nourriture le matin.", turns: [
      { npc: "Good morning! What do you eat for breakfast?", ok: ["\\bi (eat|have)\\s+\\w+"], model: "I eat bread for breakfast.", hint: "Dis ce que tu manges." },
      { npc: "And what do you drink?", ok: ["\\bi (drink|have)\\s+(a\\s+|some\\s+|a glass of\\s+|a cup of\\s+)?\\w+"], model: "I drink milk.", hint: "Dis ce que tu bois." },
      { npc: "Do you like fish?", ok: ["\\b(yes|no)\\b", "\\bi (do not |don't )?(like|love|hate)\\b"], model: "No, I don't like fish.", hint: "Réponds par oui ou non." },
      { npc: "What is your favourite meal?", ok: ["\\b(my favourite meal is|i like|i love)\\s+\\w+"], model: "My favourite meal is dinner.", hint: "Dis ton repas préféré." },
      { npc: "Enjoy your meal!", ok: ["\\b(thank you|thanks|you too)\\b"], model: "Thank you!", hint: "Remercie." } ] },
    { title: "Au restaurant", icon: "🍽️", scene: "Tu commandes dans un restaurant. Le serveur te parle.", turns: [
      { npc: "Hello! Here is the menu. What would you like?", ok: ["\\b(i'd like|i would like|can i have|i want|i'll have|i will have)\\s+\\w+"], model: "I'd like a soup, please.", hint: "Commande avec « I’d like… »." },
      { npc: "Would you like something to drink?", ok: ["\\b(yes|no)\\b", "\\b(water|tea|coffee|juice|milk|lemonade)\\b", "\\b(i'd like|i would like|can i have)\\s+\\w+"], model: "Yes, a glass of water, please.", hint: "Dis ce que tu veux boire." },
      { npc: "Here you are.", ok: ["\\b(thank you|thanks)\\b"], model: "Thank you!", hint: "Remercie." },
      { npc: "Would you like dessert?", ok: ["\\b(yes|no)\\b"], model: "No, thank you.", hint: "Réponds par oui ou non." },
      { npc: "Here is the bill.", ok: ["\\b(thank you|thanks|here you are|can i pay)\\b"], model: "Thank you. Can I pay by card?", hint: "Remercie ou demande à payer." } ] },
  ],
};
