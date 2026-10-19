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
  "A2.4": [
    { title: "Réserver une chambre", icon: "🏨", scene: "Tu réserves une chambre d'hôtel par téléphone.", turns: [
      { npc: "Good morning, Sunrise Hotel. How can I help you?", ok: ["\\b(i.d like|i would like|can i|could i|i want|book|reserve|room)\\b"], model: "I'd like to book a double room, please.", hint: "Demande poliment : I'd like to book…" },
      { npc: "For how many nights?", ok: ["\\b(\\w+ nights?|for (one|two|three|four|five|a week|\\d+)|a week|one night)\\b"], model: "For three nights, please.", hint: "Dis la durée avec for." },
      { npc: "And when are you arriving?", ok: ["\\b(on (monday|tuesday|wednesday|thursday|friday|saturday|sunday)|next \\w+|tomorrow|tonight|arriving|in \\w+)\\b"], model: "We're arriving on Friday.", hint: "Projet organisé : We're arriving…" },
      { npc: "Perfect. I'll book it for you. Is there anything else?", ok: ["\\b(no|yes|is breakfast|thank|thanks|that.s all|what time|do you)\\b"], model: "Is breakfast included?", hint: "Pose une question ou remercie." }] },
    { title: "Nos projets", icon: "📅", scene: "Un collègue te demande tes projets pour le week-end.", turns: [
      { npc: "Hi! What are you doing this weekend?", ok: ["\\b(i.m|i am|we.re|we are)\\s+(going|visiting|meeting|seeing|having|staying|working)\\b"], model: "I'm going to visit my parents.", hint: "I'm going to + verbe, ou I'm + verbe en -ing." },
      { npc: "Nice! When are you leaving?", ok: ["\\b(on (friday|saturday|sunday|monday)|tomorrow|tonight|this (evening|afternoon|morning)|at \\w+|after work|next \\w+)\\b"], model: "I'm leaving on Friday evening.", hint: "Dis quand avec on, at ou tomorrow." },
      { npc: "Will you drive or take the train?", ok: ["\\b(i.ll|i will|i.m going to|i.m taking|i.m driving|by (car|train)|drive|train|take)\\b"], model: "I'll take the train.", hint: "Décision : I'll + verbe." },
      { npc: "Great! I think the weather will be nice.", ok: ["\\b(i hope|hope so|me too|great|thanks|thank you|i think so|yes)\\b"], model: "I hope so too!", hint: "Réponds gentiment." }] },
  ],
  "A2.5": [
    { title: "Choisir un appartement", icon: "🏠", scene: "Un agent immobilier te montre deux appartements.", turns: [
      { npc: "Hello! Here are two flats. This one is bigger, and that one is cheaper. Which do you prefer?", ok: ["\\b(i prefer|i.d prefer|i.d rather|i like|the (first|second|big|bigger|small|smaller|cheap|cheaper)|this one|that one)\\b"], model: "I prefer the bigger one.", hint: "Dis ta préférence : I prefer…" },
      { npc: "Why do you like it better?", ok: ["\\b(because|it.s|it is|bigger|quieter|brighter|more|cheaper)\\b"], model: "Because it's brighter and more comfortable.", hint: "Donne une raison avec because." },
      { npc: "It's more expensive, you know. Is that a problem?", ok: ["\\b(no|yes|not really|a bit|it.s|that.s|too|fine|ok|okay)\\b"], model: "No, it isn't as expensive as I thought.", hint: "Réponds, avec as … as si tu veux." },
      { npc: "Great choice! Would you like to visit it again tomorrow?", ok: ["\\b(yes|no|sure|of course|please|thank|thanks|i.d like|i.ll|tomorrow)\\b"], model: "Yes, please. I'll come at ten.", hint: "Réponds poliment." }] },
    { title: "Au restaurant : deux plats", icon: "🍽️", scene: "Le serveur t'aide à choisir ton repas.", turns: [
      { npc: "Good evening. The fish is fresher today, but the pasta is cheaper. What would you like?", ok: ["\\b(i.d like|i would like|i.ll have|i.ll take|can i have|the (fish|pasta)|fish|pasta)\\b"], model: "I'll have the fish, please.", hint: "Commande avec I'll have…" },
      { npc: "Excellent choice. And to drink? We have tea, coffee and juice.", ok: ["\\b(tea|coffee|juice|water|i.d like|i.ll have|i prefer|i.d rather)\\b"], model: "I'd rather have a tea than a coffee.", hint: "I'd rather… ou I prefer…" },
      { npc: "Here is your fish. Is everything all right?", ok: ["\\b(yes|it.s|looks|thank|great|perfect|delicious|good|very)\\b"], model: "Yes, it looks delicious. It's the biggest fish I've ever seen!", hint: "Réponds avec un superlatif si tu peux." },
      { npc: "Would you like a dessert?", ok: ["\\b(yes|no|please|thank|thanks|i.d like|i.ll have|not|maybe)\\b"], model: "No, thank you. The bill, please.", hint: "Réponds poliment." }] },
  ],
  "A2.6": [
    { title: "Chez le médecin : le diagnostic", icon: "🩺", scene: "Le médecin te pose des questions pour comprendre ce que tu as.", turns: [
      { npc: "Good morning. What's the matter?", ok: ["\\b(i have|i.ve got|my \\w+ (hurts?|aches?)|i feel|it hurts|sore|headache|cough|cold|fever)\\b"], model: "I have a sore throat and a cough.", hint: "Dis ce que tu as : I have… ou My … hurts." },
      { npc: "Do you have a fever?", ok: ["\\b(yes|no|a (little|bit)|temperature|degrees|fever|not)\\b"], model: "Yes, a little. My temperature is thirty-eight.", hint: "Réponds par yes / no, puis précise." },
      { npc: "When did it start?", ok: ["\\b(ago|since|yesterday|monday|tuesday|days?|last night|this morning|started|weekend)\\b"], model: "It started three days ago.", hint: "Utilise « ago » : two days ago." },
      { npc: "It looks like a cold. You should rest and drink plenty of water. You have to take these tablets twice a day.", ok: ["\\b(thank|thanks|ok|okay|yes|sure|understand|rest|water|twice)\\b"], model: "Thank you, doctor. I'll rest and drink water.", hint: "Remercie et confirme." }] },
    { title: "À la pharmacie", icon: "💊", scene: "Tu demandes un médicament à la pharmacienne.", turns: [
      { npc: "Hello! How can I help you?", ok: ["\\b(i need|i.d like|i would like|do you have|something for|headache|cough|cold)\\b"], model: "I need something for a headache.", hint: "I need something for…" },
      { npc: "Do you have any other symptoms?", ok: ["\\b(yes|no|also|tired|fever|dizzy|sick|just|only|cough|sore)\\b"], model: "No, just a headache, and I feel tired.", hint: "Dis oui ou non, puis ajoute un symptôme." },
      { npc: "Take one tablet, but you mustn't take more than four a day.", ok: ["\\b(thank|thanks|ok|okay|yes|sure|understand|got it|four)\\b"], model: "OK, I understand. Thank you.", hint: "Confirme poliment." },
      { npc: "And you should drink plenty of water. Get well soon!", ok: ["\\b(thank|thanks|bye|goodbye|you too|see you)\\b"], model: "Thank you, goodbye!", hint: "Remercie et dis au revoir." }] },
  ],
  "A2.7": [
    { title: "Que fait-on s'il pleut ?", icon: "☔", scene: "Tu organises le week-end avec un ami et tu regardes la météo.", turns: [
      { npc: "What's the weather going to be like on Saturday?", ok: ["\\b(it will|it.ll|it might|sunny|rain|rainy|cloudy|cold|warm|windy|forecast|i think|probably)\\b"], model: "I think it will be sunny, but it might rain in the evening.", hint: "Fais une prédiction avec will ou might." },
      { npc: "Great! Shall we have a picnic in the park?", ok: ["\\b(yes|ok|okay|sure|good idea|great|let.s|why not|sounds)\\b"], model: "Yes, good idea! I will bring some sandwiches.", hint: "Accepte et propose d'apporter quelque chose." },
      { npc: "And what will we do if it rains?", ok: ["\\b(if it rains|we will|we.ll|stay|cinema|home|indoors|go to)\\b"], model: "If it rains, we will go to the cinema.", hint: "Utilise if + présent, will + base." },
      { npc: "Perfect. I'll check the forecast on Friday and send you a message.", ok: ["\\b(thank|thanks|ok|okay|great|perfect|see you|bye|good)\\b"], model: "Thanks! See you on Saturday.", hint: "Remercie et dis au revoir." }] },
    { title: "Un vol retardé par le brouillard", icon: "✈️", scene: "À l'aéroport, tu demandes des informations sur ton vol.", turns: [
      { npc: "Good morning. How can I help you?", ok: ["\\b(flight|plane|delay|late|cancel|fog|when|what time|my flight|i.m)\\b"], model: "Hello. Is my flight to Rome late because of the fog?", hint: "Demande si ton vol est en retard." },
      { npc: "Yes, it will be about two hours late. It might even be cancelled if the fog gets thicker.", ok: ["\\b(oh|what|really|sorry|thank|if it|will|what should|what do|wait|how long)\\b"], model: "Oh no! What will happen if it is cancelled?", hint: "Pose une question avec What will happen if…" },
      { npc: "If it is cancelled, you will get a seat on tomorrow's flight.", ok: ["\\b(thank|thanks|ok|okay|good|great|understand|fine|wait)\\b"], model: "OK, thank you. I will wait here.", hint: "Remercie et dis ce que tu feras." },
      { npc: "Please check the screen every thirty minutes. Have a nice day!", ok: ["\\b(thank|thanks|you too|bye|goodbye|see you)\\b"], model: "Thank you, you too!", hint: "Remercie." }] },
  ],
  "A2.8": [
    { title: "Visiter un appartement", icon: "🔑", scene: "Tu appelles pour visiter un appartement à louer.", turns: [
      { npc: "Hello, how can I help you?", ok: ["\\b(flat|apartment|rent|visit|advert|ad|calling|look)\\b"], model: "Hello, I'm calling about the flat to rent.", hint: "Dis que tu appelles pour l'appartement à louer." },
      { npc: "Yes, of course. It has two bedrooms, a living room and a kitchen.", ok: ["\\b(is there|are there|how much|rent|lift|balcony|furnished|garden|how many)\\b"], model: "Is there a lift? And how much is the rent?", hint: "Demande s'il y a un ascenseur ou le prix du loyer." },
      { npc: "There isn't a lift, but it is on the first floor. The rent is seven hundred euros a month.", ok: ["\\b(ok|okay|good|great|visit|see|can i|could i|thank|fine|furnished)\\b"], model: "OK, that's good. Can I visit it tomorrow?", hint: "Réagis et propose une visite." },
      { npc: "Yes. Come tomorrow at five. See you then!", ok: ["\\b(thank|thanks|see you|bye|goodbye|ok|okay|great)\\b"], model: "Thank you, see you tomorrow!", hint: "Remercie et dis au revoir." }] },
    { title: "Demander son chemin dans le quartier", icon: "📍", scene: "Tu cherches la pharmacie dans un quartier que tu ne connais pas.", turns: [
      { npc: "Hello! Can I help you?", ok: ["\\b(excuse me|pharmacy|is there|where|looking for|near here)\\b"], model: "Excuse me, is there a pharmacy near here?", hint: "Demande s'il y a une pharmacie près d'ici." },
      { npc: "Yes, there is one. It is next to the bakery, opposite the bank.", ok: ["\\b(is it far|how far|far|where|how long|minutes|thank)\\b"], model: "Is it far from here?", hint: "Demande si c'est loin." },
      { npc: "No, it is only two minutes on foot. Turn left at the corner.", ok: ["\\b(thank|thanks|ok|okay|great|left|corner|got it)\\b"], model: "Thank you very much!", hint: "Remercie." },
      { npc: "You're welcome. Have a nice day!", ok: ["\\b(you too|thank|bye|goodbye|see you)\\b"], model: "You too, goodbye!", hint: "Dis au revoir." }] },
  ],
  "A2.9": [
    { title: "Un appel au bureau", icon: "💼", scene: "Tu appelles une entreprise pour parler à un responsable.", turns: [
      { npc: "Good morning, Green Office. How can I help you?", ok: ["\\b(could i|can i|may i|speak to|talk to|this is|i.d like)\\b"], model: "Hello, this is Sam. Could I speak to Mr Brown, please?", hint: "Présente-toi et demande à parler à M. Brown." },
      { npc: "I'm sorry, Mr Brown is in a meeting. Would you like to leave a message?", ok: ["\\b(yes|please|message|tell him|ask him|call me back|call back)\\b"], model: "Yes, please. Could you ask him to call me back?", hint: "Accepte et demande qu'il te rappelle." },
      { npc: "Of course. Can I have your number, please?", ok: ["\\b(zero|oh|[0-9]|number|it.s|my number|my mobile)\\b"], model: "My number is zero seven, nine one one, two three.", hint: "Donne ton numéro." },
      { npc: "Thank you. I'll give him your message. Goodbye!", ok: ["\\b(thank|thanks|goodbye|bye|you too|see you)\\b"], model: "Thank you very much, goodbye!", hint: "Remercie et dis au revoir." }] },
    { title: "Rapporter un appel à un ami", icon: "🗣️", scene: "Ton ami te demande ce que ta sœur a dit au téléphone.", turns: [
      { npc: "Did your sister call? What did she say?", ok: ["\\b(she said|she told me|said that|told me that|she asked)\\b"], model: "Yes, she said that she was at the airport.", hint: "Utilise « She said that… »." },
      { npc: "Oh, really? Is her flight on time?", ok: ["\\b(no|yes|late|delayed|on time|she said|she told)\\b"], model: "No, she told me that it was late.", hint: "Utilise « She told me that… »." },
      { npc: "And what did she ask you to do?", ok: ["\\b(asked me to|told me to|wait|call|pick|bring)\\b"], model: "She asked me to wait for her at home.", hint: "Utilise « She asked me to… »." },
      { npc: "Did she say when she would arrive?", ok: ["\\b(she said|she promised|would|tomorrow|the next day|tonight|that night|later|at)\\b"], model: "She promised she would call again when she landed.", hint: "Utilise would." }] },
  ],
  "A2.10": [
    { title: "Inviter un ami", icon: "🎬", scene: "Tu invites un ami au cinéma ce week-end.", turns: [
      { npc: "Hi! What are you doing on Saturday?", ok: ["\\b(nothing|not much|i.m (free|not doing)|i have no plans|why|saturday)\\b"], model: "Nothing special. Why? Would you like to do something?", hint: "Dis que tu es libre ou pose une question." },
      { npc: "Would you like to come to the cinema with me?", ok: ["\\b(i.d love to|yes|sounds (good|great|fun)|great idea|of course|love to)\\b"], model: "I'd love to! What time does the film start?", hint: "Accepte avec enthousiasme." },
      { npc: "At seven. Shall we have dinner before the film?", ok: ["\\b(good idea|sounds (good|great)|yes|great|why not|of course|let.s)\\b"], model: "Good idea! Let's meet at half past five.", hint: "Accepte et propose une heure." },
      { npc: "Perfect. Let's meet outside the cinema.", ok: ["\\b(see you|perfect|great|thank|thanks|can.t wait|ok|okay)\\b"], model: "Perfect, see you on Saturday! I can't wait.", hint: "Conclus." }] },
    { title: "Refuser et proposer", icon: "🙏", scene: "Un collègue t'invite, mais tu es occupé vendredi.", turns: [
      { npc: "Would you like to come to a concert on Friday?", ok: ["\\b(thank|thanks|i.d love to|i.m afraid|sorry|unfortunately)\\b"], model: "Thank you for asking! I'd love to, but I'm afraid I can't.", hint: "Remercie et refuse poliment." },
      { npc: "Oh, what a pity! Are you busy?", ok: ["\\b(i have to|i.m (busy|working)|i must|work|other plans|family)\\b"], model: "Yes, I have to work late on Friday.", hint: "Donne une raison." },
      { npc: "That's OK. Maybe another time?", ok: ["\\b(how about|what about|saturday|sunday|next|another time|instead|maybe|yes)\\b"], model: "How about Saturday instead? I'm free all day.", hint: "Propose un autre jour." },
      { npc: "Saturday is perfect. Let's go!", ok: ["\\b(great|perfect|thank|thanks|see you|sounds good|can.t wait)\\b"], model: "Great, thank you! See you on Saturday.", hint: "Conclus." }] },
  ],
};
