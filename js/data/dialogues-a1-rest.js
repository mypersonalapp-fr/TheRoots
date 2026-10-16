// The Roots — A1.2 à A1.12 : dialogues « Conversation » (généré). Format identique à dialogues-a1.js.
export const DIALOGUES_A1_REST = {
 "2": [
  {
   "title": "Ma famille",
   "icon": "🏠",
   "scene": "Une amie te pose des questions sur ta famille.",
   "turns": [
    {
     "npc": "Do you have brothers or sisters?",
     "ok": [
      "\\bi (have|don't have|do not have)\\b",
      "\\bno\\b",
      "\\bi have no\\b"
     ],
     "model": "I have one brother and one sister.",
     "hint": "Réponds avec « I have… »."
    },
    {
     "npc": "What is your mother's job?",
     "ok": [
      "\\b(my )?(mother|mum|mom)('s| is)\\b.+",
      "\\bshe('s| is) (a|an)\\s+\\w+"
     ],
     "model": "My mother is a nurse.",
     "hint": "Dis le métier de ta mère."
    },
    {
     "npc": "How old is your father?",
     "ok": [
      "\\b(he is|he's|my (father|dad) is)\\s+[a-z0-9-]+"
     ],
     "model": "He is forty-five.",
     "hint": "Dis son âge."
    },
    {
     "npc": "Do you have a pet?",
     "ok": [
      "\\b(yes|no)\\b",
      "\\bi (have|don't have)\\b"
     ],
     "model": "Yes, I have a cat.",
     "hint": "Réponds par oui ou non."
    }
   ]
  },
  {
   "title": "Ma maison",
   "icon": "🏡",
   "scene": "Tu décris ta maison à un ami.",
   "turns": [
    {
     "npc": "Where do you live?",
     "ok": [
      "\\b(i live|i'm|i am)\\s+(in|at|near)\\s+\\w+"
     ],
     "model": "I live in a small house.",
     "hint": "Commence par « I live in… »."
    },
    {
     "npc": "How many bedrooms are there?",
     "ok": [
      "\\bthere (is|are)\\b.+",
      "\\b(one|two|three|four|five|\\d)\\b"
     ],
     "model": "There are three bedrooms.",
     "hint": "Utilise « There are… »."
    },
    {
     "npc": "Is there a garden?",
     "ok": [
      "\\b(yes|no)\\b",
      "\\bthere (is|isn't|is not)\\b"
     ],
     "model": "Yes, there is a small garden.",
     "hint": "Réponds par oui ou non."
    },
    {
     "npc": "Who is in your family photo?",
     "ok": [
      "\\b(this is|these are|it's|there (is|are))\\b.+",
      "\\bmy (mother|father|brother|sister|mum|dad|family)\\b"
     ],
     "model": "This is my mother and my brother.",
     "hint": "Présente les personnes."
    }
   ]
  }
 ],
 "3": [
  {
   "title": "Inviter un ami",
   "icon": "🎬",
   "scene": "Un ami t'invite au cinéma.",
   "turns": [
    {
     "npc": "Hi! Do you want to come to the cinema?",
     "ok": [
      "\\b(yes|no|sure|of course|great|sorry)\\b"
     ],
     "model": "Yes, of course! Great idea!",
     "hint": "Accepte ou refuse poliment."
    },
    {
     "npc": "Let's meet at six. Is that OK?",
     "ok": [
      "\\b(yes|ok|okay|sure|fine|great)\\b",
      "\\bsee you\\b",
      "\\bsorry\\b"
     ],
     "model": "Yes, OK. See you at six!",
     "hint": "Dis si ça te va."
    },
    {
     "npc": "Where do we meet?",
     "ok": [
      "\\b(let's meet|we meet|meet me|at the|in front of|outside)\\b.+"
     ],
     "model": "Let's meet at the cinema.",
     "hint": "Propose un lieu avec « Let's meet… »."
    },
    {
     "npc": "Do you like action films?",
     "ok": [
      "\\b(yes|no)\\b",
      "\\bi (like|love|don't like|do not like|hate)\\b"
     ],
     "model": "Yes, I love action films.",
     "hint": "Réponds par oui ou non."
    },
    {
     "npc": "See you later!",
     "ok": [
      "\\b(see you|bye|goodbye)\\b"
     ],
     "model": "See you later! Bye!",
     "hint": "Dis au revoir."
    }
   ]
  },
  {
   "title": "Mon meilleur ami",
   "icon": "👫",
   "scene": "Tu parles de ton meilleur ami.",
   "turns": [
    {
     "npc": "Who is your best friend?",
     "ok": [
      "\\bmy best friend is\\s+\\w+",
      "\\b\\w+ is my (best )?friend",
      "\\b(he|she)('s| is)\\b"
     ],
     "model": "My best friend is Max.",
     "hint": "Commence par « My best friend is… »."
    },
    {
     "npc": "What does he do after school?",
     "ok": [
      "\\b(he|we|they) (plays?|goes?|watches?|do|does|chats?|hang)\\b.+",
      "\\bwe (play|go|watch|chat|walk)\\b.+"
     ],
     "model": "He plays football after school.",
     "hint": "Dis une activité."
    },
    {
     "npc": "Does he like sport?",
     "ok": [
      "\\b(yes|no)\\b",
      "\\bhe (likes|doesn't|does not|loves)\\b"
     ],
     "model": "Yes, he does.",
     "hint": "Réponds par oui ou non."
    },
    {
     "npc": "How often do you meet?",
     "ok": [
      "\\b(every|always|often|sometimes|never|on)\\b.+"
     ],
     "model": "We meet every Saturday.",
     "hint": "Utilise « every », « often »…"
    }
   ]
  }
 ],
 "4": [
  {
   "title": "Aller à l'école",
   "icon": "🚌",
   "scene": "Un camarade te demande comment tu vas à l'école.",
   "turns": [
    {
     "npc": "How do you go to school?",
     "ok": [
      "\\bi (go|walk|take|ride)\\b.+",
      "\\bby (bus|bike|car|train|foot)\\b",
      "\\bon foot\\b"
     ],
     "model": "I go to school by bus.",
     "hint": "Dis comment tu y vas."
    },
    {
     "npc": "How long does it take?",
     "ok": [
      "\\b(it takes|about|\\d+|ten|five|fifteen|twenty|thirty)\\b.*(minutes?|hour)"
     ],
     "model": "It takes fifteen minutes.",
     "hint": "Dis la durée en minutes."
    },
    {
     "npc": "Is the bus stop near your house?",
     "ok": [
      "\\b(yes|no)\\b",
      "\\b(next to|near|opposite|far)\\b"
     ],
     "model": "Yes, it's next to my house.",
     "hint": "Réponds par oui ou non."
    },
    {
     "npc": "Do you take the bus every day?",
     "ok": [
      "\\b(yes|no)\\b",
      "\\b(always|never|sometimes|every)\\b"
     ],
     "model": "Yes, I always take the bus.",
     "hint": "Réponds avec « always », « never »…"
    }
   ]
  },
  {
   "title": "Demander son chemin",
   "icon": "🗺️",
   "scene": "Un touriste te demande son chemin.",
   "turns": [
    {
     "npc": "Excuse me! Where is the station?",
     "ok": [
      "\\b(go straight|turn (left|right)|it's|it is|next to|opposite|between)\\b"
     ],
     "model": "Go straight on and turn left.",
     "hint": "Donne le chemin."
    },
    {
     "npc": "Is it far?",
     "ok": [
      "\\b(yes|no)\\b",
      "\\b(it's|it is|five|ten|minutes|near|far)\\b"
     ],
     "model": "No, it's five minutes away.",
     "hint": "Dis si c'est loin."
    },
    {
     "npc": "Thank you very much!",
     "ok": [
      "\\b(you're welcome|you are welcome|no problem)\\b"
     ],
     "model": "You're welcome!",
     "hint": "Réponds poliment."
    },
    {
     "npc": "Where is the bank?",
     "ok": [
      "\\b(it's|it is|next to|opposite|between|on the)\\b.+"
     ],
     "model": "It's opposite the station.",
     "hint": "Dis où est la banque."
    }
   ]
  }
 ],
 "5": [
  {
   "title": "Tes loisirs",
   "icon": "🎸",
   "scene": "Un ami veut savoir ce que tu aimes.",
   "turns": [
    {
     "npc": "What do you like doing?",
     "ok": [
      "\\bi (like|love|enjoy)\\b.+"
     ],
     "model": "I like drawing.",
     "hint": "Commence par « I like… »."
    },
    {
     "npc": "Do you like music?",
     "ok": [
      "\\b(yes|no)\\b",
      "\\bi (like|love|don't like|do not like)\\b"
     ],
     "model": "Yes, I love music.",
     "hint": "Réponds par oui ou non."
    },
    {
     "npc": "What is your favourite colour?",
     "ok": [
      "\\bmy favou?rite colou?r is\\s+\\w+",
      "\\b(red|blue|green|yellow|purple|pink|black|white|orange|brown)\\b"
     ],
     "model": "My favourite colour is purple.",
     "hint": "Dis ta couleur préférée."
    },
    {
     "npc": "Do you like cooking?",
     "ok": [
      "\\b(yes|no)\\b",
      "\\bi (like|love|hate|don't like|do not like)\\b"
     ],
     "model": "No, I hate cooking.",
     "hint": "Réponds par oui ou non."
    },
    {
     "npc": "What do you prefer: tea or coffee?",
     "ok": [
      "\\bi prefer\\b.+",
      "\\b(tea|coffee)\\b"
     ],
     "model": "I prefer tea.",
     "hint": "Utilise « I prefer… »."
    }
   ]
  },
  {
   "title": "Un concert",
   "icon": "🎤",
   "scene": "Tu parles de musique avec un ami.",
   "turns": [
    {
     "npc": "Do you go to concerts?",
     "ok": [
      "\\b(yes|no)\\b",
      "\\bi (go|don't go|do not go)\\b"
     ],
     "model": "Yes, I go to a concert every month.",
     "hint": "Réponds par oui ou non."
    },
    {
     "npc": "Who is your favourite singer?",
     "ok": [
      "\\b(my favou?rite|i like|i love)\\b.+"
     ],
     "model": "My favourite singer is Adele.",
     "hint": "Dis ton chanteur préféré."
    },
    {
     "npc": "Do you prefer pop or rock?",
     "ok": [
      "\\bi prefer\\b.+",
      "\\b(pop|rock|jazz|rap)\\b"
     ],
     "model": "I prefer pop.",
     "hint": "Utilise « I prefer… »."
    },
    {
     "npc": "Do you play an instrument?",
     "ok": [
      "\\b(yes|no)\\b",
      "\\bi play\\b.+"
     ],
     "model": "Yes, I play the guitar.",
     "hint": "Réponds par oui ou non."
    }
   ]
  }
 ],
 "7": [
  {
   "title": "Au magasin de vêtements",
   "icon": "👗",
   "scene": "Tu achètes une veste dans un magasin.",
   "turns": [
    {
     "npc": "Hello! Can I help you?",
     "ok": [
      "\\b(yes|i'd like|i would like|i want|i'm looking for|i am looking for|can i)\\b"
     ],
     "model": "Yes, I'm looking for a jacket.",
     "hint": "Dis ce que tu cherches."
    },
    {
     "npc": "What size do you take?",
     "ok": [
      "\\b(small|medium|large|size|\\d{2}|i take|i'm|i am)\\b"
     ],
     "model": "I take a medium.",
     "hint": "Dis ta taille."
    },
    {
     "npc": "Do you like this blue jacket?",
     "ok": [
      "\\b(yes|no)\\b",
      "\\bi (like|love|don't like)\\b",
      "\\bit's\\b"
     ],
     "model": "Yes, I like it. How much is it?",
     "hint": "Dis si elle te plaît."
    },
    {
     "npc": "It's forty pounds.",
     "ok": [
      "\\b(too|expensive|cheap|i'll take|i will take|ok|okay|can i pay|card)\\b"
     ],
     "model": "OK, I'll take it. Can I pay by card?",
     "hint": "Décide : tu la prends ?"
    }
   ]
  },
  {
   "title": "Au marché",
   "icon": "🍎",
   "scene": "Tu fais tes courses au marché.",
   "turns": [
    {
     "npc": "Good morning! What would you like?",
     "ok": [
      "\\b(i'd like|i would like|can i have|i want)\\b.+"
     ],
     "model": "I'd like two kilos of apples, please.",
     "hint": "Commande avec « I'd like… »."
    },
    {
     "npc": "Anything else?",
     "ok": [
      "\\b(yes|no)\\b",
      "\\b(that's all|that is all)\\b",
      "\\b(i'd like|can i have)\\b"
     ],
     "model": "No, that's all, thank you.",
     "hint": "Dis si tu veux autre chose."
    },
    {
     "npc": "That's six euros.",
     "ok": [
      "\\b(here you are|here is|can i pay|cash|card)\\b"
     ],
     "model": "Here you are.",
     "hint": "Paie."
    },
    {
     "npc": "Thank you! Goodbye!",
     "ok": [
      "\\b(goodbye|bye|thank|see you|have a nice day)\\b"
     ],
     "model": "Thank you! Goodbye!",
     "hint": "Dis au revoir."
    }
   ]
  }
 ],
 "8": [
  {
   "title": "Tu es perdu",
   "icon": "🧭",
   "scene": "Tu es perdu en ville. Une passante te parle.",
   "turns": [
    {
     "npc": "Hello! You look lost. Can I help you?",
     "ok": [
      "\\b(yes|please|thank|excuse me)\\b",
      "\\bwhere is\\b"
     ],
     "model": "Yes, please. Where is the library?",
     "hint": "Demande ton chemin."
    },
    {
     "npc": "Go straight on, then turn left at the bank. Do you understand?",
     "ok": [
      "\\b(yes|no|sorry|could you repeat|repeat|slowly)\\b"
     ],
     "model": "Sorry, could you repeat that, please?",
     "hint": "Demande de répéter."
    },
    {
     "npc": "Of course! Go straight on and turn left.",
     "ok": [
      "\\b(thank|thanks|ok|okay|i understand|yes)\\b"
     ],
     "model": "Thank you very much!",
     "hint": "Remercie."
    },
    {
     "npc": "Is there anything else?",
     "ok": [
      "\\b(no|yes|where)\\b"
     ],
     "model": "No, thank you. Goodbye!",
     "hint": "Réponds poliment."
    }
   ]
  },
  {
   "title": "À l'office de tourisme",
   "icon": "🏛️",
   "scene": "Tu es touriste et tu demandes de l'aide.",
   "turns": [
    {
     "npc": "Welcome to the tourist office. How can I help?",
     "ok": [
      "\\b(i'd like|i would like|i want|i'm looking for|where is|can you)\\b"
     ],
     "model": "Where is the post office, please?",
     "hint": "Pose ta question."
    },
    {
     "npc": "It's near the park. Is that OK?",
     "ok": [
      "\\b(yes|ok|okay|thank|thanks|great)\\b"
     ],
     "model": "Yes, thank you!",
     "hint": "Réponds."
    },
    {
     "npc": "Do you need a map?",
     "ok": [
      "\\b(yes|no)\\b",
      "\\b(please|thank)\\b"
     ],
     "model": "Yes, please. Thank you!",
     "hint": "Réponds par oui ou non."
    },
    {
     "npc": "Have a nice day!",
     "ok": [
      "\\b(you too|thank|thanks|goodbye|bye)\\b"
     ],
     "model": "Thank you! You too!",
     "hint": "Réponds poliment."
    }
   ]
  }
 ],
 "9": [
  {
   "title": "À l'aéroport",
   "icon": "✈️",
   "scene": "Tu enregistres ton vol.",
   "turns": [
    {
     "npc": "Good morning. Your passport, please.",
     "ok": [
      "\\b(here you are|here is|here it is|here's)\\b"
     ],
     "model": "Here you are.",
     "hint": "Donne ton passeport."
    },
    {
     "npc": "Where are you going?",
     "ok": [
      "\\b(i'm going|i am going|i'm flying|to)\\s*\\w+"
     ],
     "model": "I'm going to Madrid.",
     "hint": "Dis ta destination."
    },
    {
     "npc": "Do you have a suitcase?",
     "ok": [
      "\\b(yes|no)\\b",
      "\\bi have\\b"
     ],
     "model": "Yes, I have one suitcase.",
     "hint": "Réponds par oui ou non."
    },
    {
     "npc": "Here is your boarding pass. The gate is number twelve.",
     "ok": [
      "\\b(thank|thanks)\\b"
     ],
     "model": "Thank you. Goodbye!",
     "hint": "Remercie."
    }
   ]
  },
  {
   "title": "À l'hôtel",
   "icon": "🏨",
   "scene": "Tu arrives à l'hôtel.",
   "turns": [
    {
     "npc": "Welcome! Do you have a reservation?",
     "ok": [
      "\\b(yes|no)\\b",
      "\\bi have\\b",
      "\\bi (don't|do not) have\\b"
     ],
     "model": "Yes, I have a reservation.",
     "hint": "Réponds par oui ou non."
    },
    {
     "npc": "Your name, please?",
     "ok": [
      "\\b(my name is|it's|it is|i am|i'm)\\s+\\w+"
     ],
     "model": "My name is Lily Brown.",
     "hint": "Dis ton nom."
    },
    {
     "npc": "How many nights?",
     "ok": [
      "\\b(one|two|three|four|five|six|seven|\\d+)\\b",
      "\\bfor\\b"
     ],
     "model": "For three nights, please.",
     "hint": "Dis le nombre de nuits."
    },
    {
     "npc": "Breakfast is included. Here is your key. Room 205.",
     "ok": [
      "\\b(thank|thanks)\\b"
     ],
     "model": "Thank you very much!",
     "hint": "Remercie."
    }
   ]
  }
 ],
 "10": [
  {
   "title": "Ton travail",
   "icon": "💼",
   "scene": "Un collègue fait ta connaissance.",
   "turns": [
    {
     "npc": "What do you do?",
     "ok": [
      "\\b(i'm|i am)\\s+(a|an)\\s+\\w+",
      "\\bi work\\b.+",
      "\\bi study\\b"
     ],
     "model": "I'm a nurse.",
     "hint": "Dis ton métier."
    },
    {
     "npc": "Where do you work?",
     "ok": [
      "\\bi work (in|at|for)\\b.+"
     ],
     "model": "I work in a hospital.",
     "hint": "Commence par « I work in… »."
    },
    {
     "npc": "What time do you start?",
     "ok": [
      "\\b(i start|i begin|at)\\b.+\\b(\\d|one|two|three|four|five|six|seven|eight|nine|ten|eleven|twelve)\\b"
     ],
     "model": "I start at eight.",
     "hint": "Dis l'heure."
    },
    {
     "npc": "Do you like your job?",
     "ok": [
      "\\b(yes|no)\\b",
      "\\bi (like|love|don't like)\\b"
     ],
     "model": "Yes, I love it.",
     "hint": "Réponds par oui ou non."
    }
   ]
  },
  {
   "title": "À l'université",
   "icon": "🎓",
   "scene": "Un étudiant te pose des questions.",
   "turns": [
    {
     "npc": "What do you study?",
     "ok": [
      "\\bi study\\b.+",
      "\\bi'm (a|an)\\b"
     ],
     "model": "I study history.",
     "hint": "Dis ta matière."
    },
    {
     "npc": "Do you have classes on Friday?",
     "ok": [
      "\\b(yes|no)\\b",
      "\\bi (have|don't have|do not have)\\b"
     ],
     "model": "No, I don't have classes on Friday.",
     "hint": "Réponds par oui ou non."
    },
    {
     "npc": "Where do you do your homework?",
     "ok": [
      "\\bi (do|study|work)\\b.+\\b(library|home|school|room|café|cafe)\\b"
     ],
     "model": "I do my homework in the library.",
     "hint": "Dis où tu travailles."
    },
    {
     "npc": "Is your teacher kind?",
     "ok": [
      "\\b(yes|no)\\b",
      "\\b(he|she) is\\b"
     ],
     "model": "Yes, she is very kind.",
     "hint": "Réponds par oui ou non."
    }
   ]
  }
 ],
 "11": [
  {
   "title": "Quel temps fait-il ?",
   "icon": "☀️",
   "scene": "Un ami te parle de la météo.",
   "turns": [
    {
     "npc": "What's the weather like today?",
     "ok": [
      "\\b(it's|it is)\\s+\\w+"
     ],
     "model": "It's sunny and warm.",
     "hint": "Commence par « It's… »."
    },
    {
     "npc": "What is the weather going to be like tomorrow?",
     "ok": [
      "\\b(it's going to|it is going to|it will|it'll)\\b.+"
     ],
     "model": "It's going to rain.",
     "hint": "Utilise « It's going to… »."
    },
    {
     "npc": "Do you like rain?",
     "ok": [
      "\\b(yes|no)\\b",
      "\\bi (like|love|don't like|hate)\\b"
     ],
     "model": "No, I don't like rain.",
     "hint": "Réponds par oui ou non."
    },
    {
     "npc": "What do you do when it's sunny?",
     "ok": [
      "\\bi (go|play|walk|stay|swim|eat)\\b.+"
     ],
     "model": "I play football in the park.",
     "hint": "Dis une activité."
    }
   ]
  },
  {
   "title": "Ma journée",
   "icon": "⏰",
   "scene": "Un camarade te parle de ta journée.",
   "turns": [
    {
     "npc": "What time do you get up?",
     "ok": [
      "\\bi (get up|wake up)\\b.+",
      "\\bat\\s+\\w+"
     ],
     "model": "I get up at seven.",
     "hint": "Dis l'heure."
    },
    {
     "npc": "What time does school start?",
     "ok": [
      "\\b(it starts|it begins|at)\\b.+"
     ],
     "model": "It starts at half past eight.",
     "hint": "Dis l'heure."
    },
    {
     "npc": "What time is it?",
     "ok": [
      "\\b(it's|it is)\\b.+"
     ],
     "model": "It's quarter to nine.",
     "hint": "Dis l'heure avec « It's… »."
    },
    {
     "npc": "Do you sleep late on Saturday?",
     "ok": [
      "\\b(yes|no)\\b",
      "\\bi (sleep|get up)\\b"
     ],
     "model": "Yes, I get up at ten.",
     "hint": "Réponds par oui ou non."
    }
   ]
  }
 ],
 "12": [
  {
   "title": "Rencontre",
   "icon": "☕",
   "scene": "Tu retrouves un ami au café.",
   "turns": [
    {
     "npc": "Hello! Long time no see! How are you?",
     "ok": [
      "\\b(fine|good|great|not bad|well|ok|okay|and you)\\b"
     ],
     "model": "Not bad, thanks. And you?",
     "hint": "Réponds poliment."
    },
    {
     "npc": "Great! Let's have a coffee.",
     "ok": [
      "\\b(yes|ok|okay|sure|good idea|great)\\b"
     ],
     "model": "Good idea!",
     "hint": "Accepte."
    },
    {
     "npc": "Excuse me, can I sit here?",
     "ok": [
      "\\b(of course|sure|yes|go ahead)\\b"
     ],
     "model": "Of course!",
     "hint": "Réponds poliment."
    },
    {
     "npc": "Thank you!",
     "ok": [
      "\\b(you're welcome|you are welcome|no problem)\\b"
     ],
     "model": "You're welcome!",
     "hint": "Réponds poliment."
    },
    {
     "npc": "I have to go now. See you tomorrow!",
     "ok": [
      "\\b(see you|bye|goodbye|have a good)\\b"
     ],
     "model": "See you tomorrow! Bye!",
     "hint": "Dis au revoir."
    }
   ]
  },
  {
   "title": "Les formules utiles",
   "icon": "📱",
   "scene": "Un ami te demande comment on dit les choses poliment.",
   "turns": [
    {
     "npc": "How do you say hello in the morning?",
     "ok": [
      "\\bgood morning\\b"
     ],
     "model": "Good morning!",
     "hint": "Salutation du matin."
    },
    {
     "npc": "How do you ask politely for help?",
     "ok": [
      "\\b(could you|can you|excuse me|please)\\b"
     ],
     "model": "Excuse me, could you help me, please?",
     "hint": "Sois poli."
    },
    {
     "npc": "How do you say sorry for a mistake?",
     "ok": [
      "\\b(i'm sorry|i am sorry|sorry)\\b"
     ],
     "model": "I'm sorry!",
     "hint": "Excuse-toi."
    },
    {
     "npc": "How do you say goodbye in the evening?",
     "ok": [
      "\\b(good evening|good night|goodbye|bye|see you)\\b"
     ],
     "model": "Good night! See you tomorrow!",
     "hint": "Dis au revoir."
    }
   ]
  }
 ]
};
