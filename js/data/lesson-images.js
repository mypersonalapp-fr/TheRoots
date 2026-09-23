// The Roots — photos des leçons (vraies photos gratuites Pexels, pexels.com,
// licence Pexels : usage libre, crédit du photographe affiché).
// Parcours « images dégressives » validé le 23/09 :
//   discover = découverte en images (3 mots) → ensuite le vocabulaire SANS image ;
//   verb     = 1re phrase de conjugaison AVEC image → les suivantes sans ;
//   check    = (A1 seulement) image pour vérifier APRÈS avoir écouté le texte ;
//   scene    = « Décris l'image » juste avant le contrôle.
// Les photos ont été choisies d'après leur description Pexels (alt) : Ashley
// les valide à l'écran. Pour changer une photo : remplacer "id" (le numéro à
// la fin de l'adresse de la page Pexels) et "by" (le photographe).
// Clés = numéro interne de la leçon (0..11 = A1.1..A1.12, 13..24 = A2.0..A2.11).
window.LESSON_IMAGES = {
 "0": {
  "discover": [
   {
    "en": "Glasses",
    "fr": "Lunettes",
    "id": 18332554,
    "by": "Abhishek Shekhawat",
    "alt": "Close-up portrait of a stylish man with eyeglasses in smart attire and a confident expression."
   },
   {
    "en": "Beard",
    "fr": "Barbe",
    "id": 7504872,
    "by": "Olha Ruskykh",
    "alt": "A close-up portrait of a handsome young man with a beard and green eyes, looking away."
   },
   {
    "en": "Smile",
    "fr": "Sourire",
    "id": 4450394,
    "by": "Nataliya Vaitkevich",
    "alt": "Close-up of a smiling woman with curly blonde hair surrounded by white flowers."
   }
  ],
  "verb": {
   "en": "I live in Paris.",
   "fr": "J'habite à Paris.",
   "id": 1259237,
   "by": "EVG Kowalievska",
   "alt": "Stylish woman in elegant dress walking near the iconic Eiffel Tower in Paris."
  },
  "scene": {
   "id": 5668465,
   "by": "Sora Shimazaki",
   "alt": "Happy multiracial female partners in elegant coats shaking hands and smiling while standing on street after successful business discussion with positive ethnic male colleague",
   "prompt": "Décris la photo : qui sont ces personnes ? Où sont-elles ? Que font-elles ? Comment sont-elles ?",
   "keywords": [
    {
     "label": "les personnes",
     "words": [
      "woman",
      "women",
      "man",
      "people",
      "colleagues",
      "friends"
     ]
    },
    {
     "label": "l'action (se serrer la main)",
     "words": [
      "shaking hands",
      "shake hands",
      "handshake",
      "meeting",
      "say hello",
      "hello"
     ]
    },
    {
     "label": "le lieu",
     "words": [
      "street",
      "outside",
      "city",
      "town"
     ]
    },
    {
     "label": "leur visage",
     "words": [
      "smiling",
      "smile",
      "happy"
     ]
    },
    {
     "label": "les vêtements",
     "words": [
      "coat",
      "coats",
      "elegant",
      "jacket"
     ]
    }
   ],
   "model": "There are three people in the street. Two women are shaking hands. They are smiling and they have got elegant coats."
  },
  "check": {
   "id": 30674285,
   "by": "Eyüpcan Timur",
   "alt": "Portrait of a smiling young woman outdoors during golden hour.",
   "caption": "Voici Emma : elle a 28 ans, elle vient d'Espagne et elle habite à Paris."
  }
 },
 "1": {
  "discover": [
   {
    "en": "Grandparents",
    "fr": "Grands-parents",
    "id": 7236499,
    "by": "cottonbro studio",
    "alt": "Close-up of a joyful senior couple showing love and togetherness, embracing warmly."
   },
   {
    "en": "Father",
    "fr": "Père",
    "id": 4586688,
    "by": "Anna Shvets",
    "alt": "A joyful moment captured with a father and his son smiling in an outdoor setting."
   },
   {
    "en": "Children",
    "fr": "Enfants",
    "id": 8033858,
    "by": "RDNE Stock project",
    "alt": "Kids enjoying a colorful outdoor game together in a sunny park setting."
   }
  ],
  "verb": {
   "en": "My parents are married.",
   "fr": "Mes parents sont mariés.",
   "id": 10438478,
   "by": "Melike B",
   "alt": "Close-up of a joyful bride and groom showing their wedding rings in focus."
  },
  "scene": {
   "id": 5813725,
   "by": "Tima Miroshnichenko",
   "alt": "Family taking a photo during a cozy dinner, embracing holiday cheer and togetherness.",
   "prompt": "Décris la photo : qui sont ces personnes ? Où sont-elles ? Que font-elles ?",
   "keywords": [
    {
     "label": "les personnes",
     "words": [
      "family",
      "parents",
      "children",
      "mother",
      "father",
      "grandmother",
      "grandfather",
      "people"
     ]
    },
    {
     "label": "le lieu",
     "words": [
      "table",
      "home",
      "house",
      "dining room",
      "kitchen"
     ]
    },
    {
     "label": "le repas",
     "words": [
      "dinner",
      "having dinner",
      "eating",
      "meal",
      "food"
     ]
    },
    {
     "label": "la photo",
     "words": [
      "taking a photo",
      "photo",
      "picture",
      "selfie",
      "phone",
      "camera"
     ]
    },
    {
     "label": "l'ambiance",
     "words": [
      "together",
      "happy",
      "smiling",
      "christmas",
      "holiday"
     ]
    }
   ],
   "model": "There is a family at the table. They are having dinner together. They are taking a photo."
  },
  "check": {
   "id": 32842395,
   "by": "21zere",
   "alt": "A multi-generational family portrait indoors with a warm and close bond.",
   "caption": "Emma a une grande famille : ses parents, ses grands-parents, ses frères et sa sœur."
  }
 },
 "2": {
  "discover": [
   {
    "en": "Go for a walk",
    "fr": "Aller se promener",
    "id": 8121667,
    "by": "MART PRODUCTION",
    "alt": "A diverse group of friends walking together in a beautiful green park, enjoying leisure time outdoors."
   },
   {
    "en": "Text",
    "fr": "Envoyer un message (SMS)",
    "id": 6400,
    "by": "Karolina Grabowska (www.kaboompics.com)",
    "alt": "Young woman interacting with a smartphone near a window, showcasing modern communication technology."
   },
   {
    "en": "Watch a film",
    "fr": "Regarder un film",
    "id": 9807277,
    "by": "Ron Lach",
    "alt": "Three people enjoying a relaxed movie night at home, sitting on a couch in a cozy living room."
   }
  ],
  "verb": {
   "en": "She often plays tennis.",
   "fr": "Elle joue souvent au tennis.",
   "id": 2996261,
   "by": "Julia Kuzenkov",
   "alt": "Close-up of a woman on an outdoor tennis court preparing to serve."
  },
  "scene": {
   "id": 5384501,
   "by": "Monstera Production",
   "alt": "Full length of multiracial friends in stylish clothes resting on lawn in weekend and looking at camera",
   "prompt": "Décris la photo : qui sont ces personnes ? Où sont-elles ? Que font-elles ? Comment sont-elles habillées ?",
   "keywords": [
    {
     "label": "les personnes",
     "words": [
      "friends",
      "people",
      "group",
      "men",
      "women",
      "man",
      "woman"
     ]
    },
    {
     "label": "le lieu",
     "words": [
      "park",
      "grass",
      "lawn",
      "garden",
      "outside"
     ]
    },
    {
     "label": "l'action",
     "words": [
      "sitting",
      "resting",
      "relaxing",
      "hanging out",
      "hang out",
      "chilling"
     ]
    },
    {
     "label": "le regard",
     "words": [
      "looking at the camera",
      "looking",
      "camera",
      "photo"
     ]
    },
    {
     "label": "les vêtements",
     "words": [
      "clothes",
      "stylish",
      "jacket",
      "trousers",
      "shirt"
     ]
    }
   ],
   "model": "There are friends in a park. They are sitting on the grass. They are looking at the camera."
  },
  "check": {
   "id": 7156294,
   "by": "Gustavo Fring",
   "alt": "Two friends enjoying a conversation at an outdoor café table on a chilly fall day.",
   "caption": "Le week-end, on se retrouve entre amis et on prend un café ensemble."
  }
 },
 "3": {
  "discover": [
   {
    "en": "Bike",
    "fr": "Vélo",
    "id": 18899172,
    "by": "Gül Işık",
    "alt": "A bicycle is parked on a cobblestone street corner in Lübeck, Germany, next to a white wall with graffiti."
   },
   {
    "en": "Bridge",
    "fr": "Pont",
    "id": 18239767,
    "by": "Sefa Tekin",
    "alt": "A rustic stone bridge spans over a peaceful river in a lush forest setting."
   },
   {
    "en": "Traffic lights",
    "fr": "Feu tricolore",
    "id": 19806556,
    "by": "Abdulvahap Demir",
    "alt": "Capture of a red traffic light in an urban setting with pedestrians and overcast skies."
   }
  ],
  "verb": {
   "en": "How do I get to the station?",
   "fr": "Comment je vais à la gare ?",
   "id": 12585887,
   "by": "BOOM 💥 Photography",
   "alt": "Close-up of a man pointing at a map, highlighting navigation and exploration."
  },
  "scene": {
   "id": 1170184,
   "by": "veerasak Piyawatanakul",
   "alt": "Backpackers waiting at a train station platform, ready for travel adventure.",
   "prompt": "Décris la photo : qui sont ces personnes ? Où sont-elles ? Que font-elles ? Qu'est-ce qu'elles ont avec elles ?",
   "keywords": [
    {
     "label": "les personnes",
     "words": [
      "people",
      "travellers",
      "travelers",
      "backpackers",
      "tourists",
      "man",
      "woman"
     ]
    },
    {
     "label": "le lieu",
     "words": [
      "station",
      "train station",
      "platform",
      "railway"
     ]
    },
    {
     "label": "l'action",
     "words": [
      "waiting",
      "wait",
      "travelling",
      "traveling",
      "standing"
     ]
    },
    {
     "label": "les objets",
     "words": [
      "backpack",
      "backpacks",
      "bag",
      "bags"
     ]
    },
    {
     "label": "le transport",
     "words": [
      "train",
      "trains"
     ]
    }
   ],
   "model": "There are people at the train station. They have got backpacks. They are waiting for the train."
  },
  "check": {
   "id": 18262968,
   "by": "Satumbo 9",
   "alt": "A young couple waits for the bus at a bustling city street with a digital display board overhead.",
   "caption": "Chaque jour, on prend le bus pour aller à la gare : l'arrêt de bus n'est pas loin."
  }
 },
 "4": {
  "discover": [
   {
    "en": "Cooking",
    "fr": "La cuisine (l'activité)",
    "id": 6823593,
    "by": "cottonbro studio",
    "alt": "Side view of a young chef cooking with fresh vegetables and ingredients in the kitchen."
   },
   {
    "en": "Gardening",
    "fr": "Le jardinage",
    "id": 10049368,
    "by": "cottonbro studio",
    "alt": "Peaceful elderly woman tending to flowers in a garden setting."
   },
   {
    "en": "Painting",
    "fr": "La peinture (l'activité)",
    "id": 13421532,
    "by": "Criativa Pix Fotografia",
    "alt": "Woman artist painting abstract artwork on canvas in a cozy indoor studio setting."
   }
  ],
  "verb": {
   "en": "I like reading.",
   "fr": "J'aime lire.",
   "id": 7578223,
   "by": "John Diez",
   "alt": "Side view of young female in white clothes reading book near window while sitting on comfortable sofa in light apartment in daytime"
  },
  "scene": {
   "id": 8111367,
   "by": "Pavel Danilyuk",
   "alt": "A diverse group of friends playing board games with drinks, socializing indoors.",
   "prompt": "Décris la photo : qui sont ces personnes ? Où sont-elles ? Que font-elles ? Qu'est-ce qu'elles ont ?",
   "keywords": [
    {
     "label": "les personnes",
     "words": [
      "friends",
      "people",
      "group",
      "men",
      "women",
      "man",
      "woman"
     ]
    },
    {
     "label": "l'activité",
     "words": [
      "board game",
      "board games",
      "game",
      "games",
      "playing",
      "play"
     ]
    },
    {
     "label": "le lieu",
     "words": [
      "home",
      "house",
      "inside",
      "indoors",
      "table",
      "living room"
     ]
    },
    {
     "label": "les boissons",
     "words": [
      "drinks",
      "drink",
      "glass",
      "glasses"
     ]
    }
   ],
   "model": "There is a group of friends. They are playing a board game. They have got drinks."
  },
  "check": {
   "id": 8467021,
   "by": "Nuta Sorokina",
   "alt": "A carefree young woman in a dress dances joyfully in a sunlit meadow.",
   "caption": "L'activité préférée d'Emma, c'est la danse : c'est très amusant !"
  }
 },
 "5": {
  "discover": [
   {
    "en": "Bread",
    "fr": "Pain",
    "id": 19987202,
    "by": "ARIANE DIAS",
    "alt": "Close-up of sliced rustic artisan bread on a wooden table, showcasing texture and freshness."
   },
   {
    "en": "Eggs",
    "fr": "Œufs",
    "id": 2831799,
    "by": "Rusiru Bhagya",
    "alt": "A top-down view of three brown eggs in a brown ceramic bowl on a white background."
   },
   {
    "en": "Cheese",
    "fr": "Fromage",
    "id": 8250417,
    "by": "Julia Filirovska",
    "alt": "A detailed close-up shot showcasing a wedge of artisan blue cheese with a natural rind on a wooden board."
   }
  ],
  "verb": {
   "en": "I love eating pizza.",
   "fr": "J'adore manger de la pizza.",
   "id": 723031,
   "by": "Andrea Piacquadio",
   "alt": "A woman savoring a delicious pizza slice in a cozy indoor restaurant setting."
  },
  "scene": {
   "id": 4921164,
   "by": "RDNE Stock project",
   "alt": "Two men placing coffee order with waiter in outdoor café setting. Stylish and relaxed atmosphere.",
   "prompt": "Décris la photo : qui sont ces personnes ? Où sont-elles ? Que font-elles ? Que commandent-elles ?",
   "keywords": [
    {
     "label": "les personnes",
     "words": [
      "men",
      "man",
      "waiter",
      "customers",
      "people",
      "friends"
     ]
    },
    {
     "label": "le lieu",
     "words": [
      "café",
      "cafe",
      "restaurant",
      "terrace",
      "outside",
      "table"
     ]
    },
    {
     "label": "l'action",
     "words": [
      "ordering",
      "order",
      "taking the order",
      "asking",
      "i'd like"
     ]
    },
    {
     "label": "la boisson",
     "words": [
      "coffee",
      "coffees",
      "drink",
      "drinks"
     ]
    }
   ],
   "model": "There are two men in a café. They are ordering coffee. The waiter is taking the order."
  },
  "check": {
   "id": 6603119,
   "by": "cottonbro studio",
   "alt": "A multicultural family sharing a meal around a dining table, emphasizing warmth and togetherness.",
   "caption": "Le soir, toute la famille dîne ensemble autour de la table."
  }
 },
 "6": {
  "discover": [
   {
    "en": "Shoes",
    "fr": "Chaussures",
    "id": 292998,
    "by": "Lukas Blazek",
    "alt": "Pair of stylish black leather shoes with blue laces on a wooden floor."
   },
   {
    "en": "Bag",
    "fr": "Sac",
    "id": 4339598,
    "by": "Anne R",
    "alt": "Chic brown leather handbag on crochet background with white flowers and pearl hair clip."
   },
   {
    "en": "Hat",
    "fr": "Chapeau",
    "id": 1382726,
    "by": "Tuấn Kiệt Jr.",
    "alt": "Portrait of a young Asian woman wearing a sun hat, surrounded by vibrant flowers."
   }
  ],
  "verb": {
   "en": "Can I try it on?",
   "fr": "Je peux l'essayer ?",
   "id": 5424930,
   "by": "Arina Krasnikova",
   "alt": "Two women trying on stylish trench coats in a modern clothing store setting."
  },
  "scene": {
   "id": 5709656,
   "by": "Sam Lion",
   "alt": "Two women browse clothes in a boutique, examining a blue dress.",
   "prompt": "Décris la photo : qui vois-tu ? Où sont-elles ? Que font-elles ? Que regardent-elles ?",
   "keywords": [
    {
     "label": "les personnes",
     "words": [
      "woman",
      "women",
      "two women",
      "friends",
      "girls",
      "people"
     ]
    },
    {
     "label": "le lieu",
     "words": [
      "shop",
      "store",
      "boutique",
      "clothes shop",
      "clothing store"
     ]
    },
    {
     "label": "l'action",
     "words": [
      "looking",
      "look",
      "shopping",
      "choosing",
      "browsing"
     ]
    },
    {
     "label": "le vêtement",
     "words": [
      "dress",
      "clothes",
      "blue dress"
     ]
    },
    {
     "label": "la couleur",
     "words": [
      "blue"
     ]
    }
   ],
   "model": "There are two women in a clothes shop. They are looking at a blue dress. They are shopping."
  },
  "check": {
   "id": 7679860,
   "by": "MART PRODUCTION",
   "alt": "A woman receives a shopping bag from a cashier in a stylish boutique store.",
   "caption": "La cliente a payé : on lui donne son sac, l'achat est terminé !"
  }
 },
 "7": {
  "discover": [
   {
    "en": "Library",
    "fr": "Bibliothèque",
    "id": 22809502,
    "by": "Necip Duman",
    "alt": "Colorful books neatly arranged on library shelves, perfect for educational use."
   },
   {
    "en": "Map",
    "fr": "Carte, plan",
    "id": 5967048,
    "by": "cottonbro studio",
    "alt": "Close-up of a person's hand pointing at a map inside a car, emphasizing travel."
   },
   {
    "en": "Signpost",
    "fr": "Panneau indicateur",
    "id": 20113716,
    "by": "Christina & Peter",
    "alt": "A street signpost in London, showing directions to famous landmarks like Buckingham Palace."
   }
  ],
  "verb": {
   "en": "Can you show me on the map?",
   "fr": "Vous pouvez me montrer sur la carte ?",
   "id": 5137963,
   "by": "cottonbro studio",
   "alt": "Backpackers consulting map at hostel reception desk for directions."
  },
  "scene": {
   "id": 8555070,
   "by": "Liliana Drew",
   "alt": "A couple examines a subway map, planning their route at a station.",
   "prompt": "Décris la photo : qui vois-tu ? Où sont-ils ? Que regardent-ils ? Que cherchent-ils ?",
   "keywords": [
    {
     "label": "les personnes",
     "words": [
      "couple",
      "man",
      "woman",
      "people",
      "two people",
      "friends"
     ]
    },
    {
     "label": "le lieu",
     "words": [
      "station",
      "subway",
      "underground",
      "metro",
      "tube",
      "train station"
     ]
    },
    {
     "label": "l'objet",
     "words": [
      "map",
      "plan"
     ]
    },
    {
     "label": "l'action",
     "words": [
      "looking",
      "look",
      "reading",
      "checking",
      "pointing"
     ]
    },
    {
     "label": "le but",
     "words": [
      "way",
      "route",
      "direction",
      "directions",
      "find",
      "finding"
     ]
    }
   ],
   "model": "There is a couple at a station. They are looking at a map. They are finding their way."
  },
  "check": {
   "id": 3776776,
   "by": "Andrea Piacquadio",
   "alt": "Female traveler in warm clothes standing on street with map and looking away at dusk",
   "caption": "En ville, quand on est perdu, on regarde un plan ou on demande son chemin."
  }
 },
 "8": {
  "discover": [
   {
    "en": "Airport",
    "fr": "Aéroport",
    "id": 4836109,
    "by": "Markus Winkler",
    "alt": "Spacious airport terminal with airplane and tarmac view in Tokyo, Japan."
   },
   {
    "en": "Suitcase",
    "fr": "Valise",
    "id": 6976853,
    "by": "KoolShooters",
    "alt": "Close-up view of an orange vintage suitcase against a warm backdrop."
   },
   {
    "en": "Passport",
    "fr": "Passeport",
    "id": 4922080,
    "by": "Ekaterina Belinskaya",
    "alt": "Russian passport held in hand with boarding pass peeking out, ready for travel."
   }
  ],
  "verb": {
   "en": "I need to check in.",
   "fr": "Je dois faire l'enregistrement.",
   "id": 3943950,
   "by": "Anna Shvets",
   "alt": "Passenger using self-service check-in kiosk at airport for convenient travel experience."
  },
  "scene": {
   "id": 7820321,
   "by": "Mikhail Nilov",
   "alt": "A hotel receptionist hands a key card to a guest over the counter, with documents visible.",
   "prompt": "Décris la photo : qui vois-tu ? Où sont-ils ? Que se passe-t-il ?",
   "keywords": [
    {
     "label": "les personnes",
     "words": [
      "receptionist",
      "guest",
      "woman",
      "man",
      "people",
      "tourist"
     ]
    },
    {
     "label": "le lieu",
     "words": [
      "hotel",
      "reception",
      "desk",
      "counter"
     ]
    },
    {
     "label": "l'objet",
     "words": [
      "key",
      "card",
      "key card",
      "room key"
     ]
    },
    {
     "label": "l'action",
     "words": [
      "giving",
      "gives",
      "give",
      "taking",
      "check in",
      "checking in"
     ]
    },
    {
     "label": "les documents",
     "words": [
      "documents",
      "papers",
      "passport",
      "form"
     ]
    }
   ],
   "model": "There is a receptionist and a guest at a hotel reception. The receptionist is giving a key card to the guest. There are documents on the counter."
  },
  "check": {
   "id": 1458302,
   "by": "Adrienn",
   "alt": "A woman gazes thoughtfully out the window of an airplane during her journey.",
   "caption": "Dans l'avion, elle a une place côté fenêtre pour regarder les nuages."
  }
 },
 "9": {
  "discover": [
   {
    "en": "Doctor",
    "fr": "Médecin",
    "id": 18828738,
    "by": "Tessy Agbonome",
    "alt": "Confident female doctor in scrubs and lab coat smiling with stethoscope, studio setting."
   },
   {
    "en": "Chef",
    "fr": "Cuisinier(ère)",
    "id": 2544829,
    "by": "Rene Terp",
    "alt": "Chef preparing meal in a modern kitchen with various cookware."
   },
   {
    "en": "Office",
    "fr": "Bureau",
    "id": 990423,
    "by": "Josh Sorenson",
    "alt": "Contemporary style office with computers and keyboards near mouses on tables in light workspace"
   }
  ],
  "verb": {
   "en": "She studies engineering.",
   "fr": "Elle étudie l'ingénierie.",
   "id": 7034451,
   "by": "George Milton",
   "alt": "Serious intelligent female studying online on netbook at table with cup of coffee and textbooks on blurred background of home"
  },
  "scene": {
   "id": 5668498,
   "by": "Sora Shimazaki",
   "alt": "Group of multiethnic coworkers in formal wear sitting at table with documents and discussing strategy of project",
   "prompt": "Décris la photo : qui vois-tu ? Où sont-ils ? Que font-ils ? Comment sont-ils habillés ?",
   "keywords": [
    {
     "label": "les personnes",
     "words": [
      "colleagues",
      "coworkers",
      "people",
      "team",
      "men",
      "women"
     ]
    },
    {
     "label": "le lieu",
     "words": [
      "office",
      "meeting room",
      "work"
     ]
    },
    {
     "label": "l'action",
     "words": [
      "meeting",
      "talking",
      "working",
      "discussing",
      "sitting"
     ]
    },
    {
     "label": "les objets",
     "words": [
      "table",
      "documents",
      "papers",
      "project"
     ]
    },
    {
     "label": "les vêtements",
     "words": [
      "suit",
      "suits",
      "shirt",
      "jacket",
      "formal"
     ]
    }
   ],
   "model": "There are colleagues in a meeting. They are sitting at a table with documents. They are talking about a project."
  },
  "check": {
   "id": 5212342,
   "by": "Max Fischer",
   "alt": "Teacher interacting with students raising hands in a classroom setting.",
   "caption": "La personne qui parle est professeur : elle fait cours à ses élèves dans une école."
  }
 },
 "10": {
  "discover": [
   {
    "en": "Snowy",
    "fr": "Neigeux",
    "id": 7178619,
    "by": "Colin Lloyd",
    "alt": "A serene winter street scene in downtown Denver, featuring snow-covered trees and glowing street lights."
   },
   {
    "en": "Storm",
    "fr": "Tempête, orage",
    "id": 9837044,
    "by": "Anton Kudryashov",
    "alt": "Intense lightning bolt illuminating a dark night sky during a powerful thunderstorm."
   },
   {
    "en": "Fog",
    "fr": "Brouillard",
    "id": 6057369,
    "by": "Martin Dalsgaard",
    "alt": "Tranquil forest scene with mist and sunlight on a dirt road."
   }
  ],
  "verb": {
   "en": "I get up early in the morning.",
   "fr": "Je me lève tôt le matin.",
   "id": 7622509,
   "by": "Miriam Alonso",
   "alt": "Young brunette with closed eyes sitting on comfortable bed under white blanket and stretching arms up while waking up in morning at home"
  },
  "scene": {
   "id": 10826602,
   "by": "Th2city Santana",
   "alt": "People with umbrellas navigate a rainy day on a bustling city street.",
   "prompt": "Décris la photo : quel temps fait-il ? Où sont les gens ? Que font-ils ? Qu'ont-ils dans les mains ?",
   "keywords": [
    {
     "label": "la météo",
     "words": [
      "rain",
      "raining",
      "rainy",
      "wet"
     ]
    },
    {
     "label": "les personnes",
     "words": [
      "people",
      "men",
      "women",
      "person",
      "man",
      "woman"
     ]
    },
    {
     "label": "l'objet",
     "words": [
      "umbrella",
      "umbrellas"
     ]
    },
    {
     "label": "le lieu",
     "words": [
      "street",
      "city",
      "town",
      "road"
     ]
    },
    {
     "label": "l'action",
     "words": [
      "walking",
      "walk",
      "going"
     ]
    }
   ],
   "model": "It's raining in the city. There are a lot of people in the street. They have got umbrellas."
  },
  "check": {
   "id": 29654561,
   "by": "Ebony Scott",
   "alt": "A couple sitting on a bench with two dogs, enjoying a sunny day in the park.",
   "caption": "L'après-midi, il fait beau et doux, environ 20 degrés : on peut profiter du soleil dehors."
  }
 },
 "11": {
  "discover": [
   {
    "en": "Hi",
    "fr": "Salut",
    "id": 5537581,
    "by": "Zen Chung",
    "alt": "Young glad ethnic female saying hi to crop anonymous friend while looking at each other on walkway"
   },
   {
    "en": "Congratulations!",
    "fr": "Félicitations !",
    "id": 11157971,
    "by": "Safari Consoler",
    "alt": "Two joyful women in graduation gowns celebrate their success against a vibrant red background."
   },
   {
    "en": "Good luck!",
    "fr": "Bonne chance !",
    "id": 6322721,
    "by": "cottonbro studio",
    "alt": "Close-up image of fingers crossed gesture against a soft background, symbolizing hope."
   }
  ],
  "verb": {
   "en": "Long time no see!",
   "fr": "Ça fait longtemps !",
   "id": 4584462,
   "by": "Ketut Subiyanto",
   "alt": "Two women of different ethnicities share a warm hug, symbolizing love and friendship against a gray backdrop."
  },
  "scene": {
   "id": 6457517,
   "by": "Alexander Suhorucov",
   "alt": "Young multiethnic friends smiling and chatting while looking at each other at table of modern cafe",
   "prompt": "Décris la photo : qui vois-tu ? Où sont-ils ? Que font-ils ? Ont-ils l'air contents ?",
   "keywords": [
    {
     "label": "les personnes",
     "words": [
      "friends",
      "people",
      "young",
      "men",
      "women",
      "man",
      "woman"
     ]
    },
    {
     "label": "le lieu",
     "words": [
      "cafe",
      "café",
      "coffee shop"
     ]
    },
    {
     "label": "l'action",
     "words": [
      "talking",
      "chatting",
      "speaking",
      "sitting"
     ]
    },
    {
     "label": "l'humeur",
     "words": [
      "smiling",
      "happy",
      "laughing",
      "smile"
     ]
    },
    {
     "label": "l'objet",
     "words": [
      "table",
      "coffee",
      "cup"
     ]
    }
   ],
   "model": "There are young friends in a café. They are sitting at a table. They are smiling and talking."
  },
  "check": {
   "id": 5047096,
   "by": "Ketut Subiyanto",
   "alt": "Two friends embrace and smile as they take a selfie in a sunny outdoor setting.",
   "caption": "Deux vieilles amies se retrouvent par un bel après-midi ensoleillé et prennent une photo souvenir."
  }
 },
 "13": {
  "discover": [
   {
    "en": "Eat",
    "fr": "Manger",
    "id": 17292508,
    "by": "Nadin Sh",
    "alt": "Smiling woman savoring a fresh salad indoors, creating a joyful and vibrant atmosphere."
   },
   {
    "en": "Buy",
    "fr": "Acheter",
    "id": 4921262,
    "by": "RDNE Stock project",
    "alt": "A female cashier receiving cash payment from a customer at a retail store."
   },
   {
    "en": "Meet",
    "fr": "Rencontrer",
    "id": 4175023,
    "by": "Khwanchai Phanthong",
    "alt": "Business professionals handshake over graphs and charts in a corporate setting, symbolizing successful negotiation and agreement."
   }
  ],
  "verb": {
   "en": "I went to the cinema yesterday.",
   "fr": "Je suis allé(e) au cinéma hier.",
   "id": 7991379,
   "by": "Tima Miroshnichenko",
   "alt": "A diverse group of people wearing 3D glasses watching a movie in a theater."
  },
  "scene": {
   "id": 6457519,
   "by": "Alexander Suhorucov",
   "alt": "Young multiracial friends speaking at wooden table with cups of hot coffee in cafe",
   "prompt": "Décris la photo : qui sont ces personnes ? Où sont-elles ? Que font-elles ?",
   "keywords": [
    {
     "label": "les personnes",
     "words": [
      "friends",
      "women",
      "woman",
      "girls",
      "people",
      "two"
     ]
    },
    {
     "label": "le lieu",
     "words": [
      "cafe",
      "café",
      "coffee shop",
      "restaurant",
      "bar"
     ]
    },
    {
     "label": "l'action : parler",
     "words": [
      "talking",
      "speaking",
      "chatting",
      "talk",
      "speak",
      "chat"
     ]
    },
    {
     "label": "la boisson",
     "words": [
      "coffee",
      "cup",
      "cups",
      "drink",
      "drinking",
      "hot"
     ]
    },
    {
     "label": "la table",
     "words": [
      "table",
      "wooden",
      "sitting",
      "sit"
     ]
    }
   ],
   "model": "Two young friends are in a café. They are sitting at a wooden table and talking. They have got cups of hot coffee."
  }
 },
 "14": {
  "discover": [
   {
    "en": "Brush your teeth",
    "fr": "Se brosser les dents",
    "id": 7608362,
    "by": "Tima Miroshnichenko",
    "alt": "Side view of a man brushing teeth in bathroom, self-care routine."
   },
   {
    "en": "Platform",
    "fr": "Quai (de gare)",
    "id": 4341096,
    "by": "Luis Quintero",
    "alt": "Crowd of people standing on platform of railway station and waiting train in busy day"
   },
   {
    "en": "Cook dinner",
    "fr": "Préparer le dîner",
    "id": 6944113,
    "by": "Vlada Karpovich",
    "alt": "Adult man mixing ingredients in a home kitchen, showcasing a cozy cooking environment."
   }
  ],
  "verb": {
   "en": "I walk to work every day.",
   "fr": "Je vais au travail à pied tous les jours.",
   "id": 6000119,
   "by": "Ono Kosuki",
   "alt": "Side view of crop unrecognizable young African American female entrepreneur in stylish formal suit crossing road with briefcase in hand in downtown"
  },
  "scene": {
   "id": 4427959,
   "by": "August de Richelieu",
   "alt": "A diverse group of business professionals laughing and chatting during a lunch meeting at a café.",
   "prompt": "Décris la photo : qui sont ces personnes ? Où sont-elles ? Que font-elles ?",
   "keywords": [
    {
     "label": "les personnes",
     "words": [
      "colleagues",
      "coworkers",
      "people",
      "group",
      "friends",
      "men",
      "women",
      "business people"
     ]
    },
    {
     "label": "le lieu",
     "words": [
      "cafe",
      "café",
      "restaurant",
      "coffee shop"
     ]
    },
    {
     "label": "le repas",
     "words": [
      "lunch",
      "lunch break",
      "eating",
      "eat",
      "meal",
      "having lunch"
     ]
    },
    {
     "label": "rire",
     "words": [
      "laughing",
      "laugh",
      "smiling",
      "smile",
      "happy"
     ]
    },
    {
     "label": "discuter",
     "words": [
      "chatting",
      "talking",
      "chat",
      "talk",
      "speaking",
      "speak"
     ]
    }
   ],
   "model": "A group of colleagues are at a café. They are having lunch together. They are laughing and chatting."
  }
 },
 "15": {
  "discover": [
   {
    "en": "Suitcase",
    "fr": "Valise",
    "id": 4173229,
    "by": "Gustavo Fring",
    "alt": "Back view full length of young cheerful female passenger in trendy beige coat walking along airport airbridge and looking at camera over shoulder"
   },
   {
    "en": "Backpack",
    "fr": "Sac à dos",
    "id": 3496360,
    "by": "Votsis Panagiotis",
    "alt": "A man equipped with a backpack explores a forest trail, showcasing outdoor adventure in autumn."
   },
   {
    "en": "Drive",
    "fr": "Conduire",
    "id": 1051071,
    "by": "Element5 Digital",
    "alt": "A young woman enjoying a drive with the sunroof open, showing car interior detail."
   }
  ],
  "verb": {
   "en": "She called me yesterday.",
   "fr": "Elle m'a appelé(e) hier.",
   "id": 6084452,
   "by": "Keira Burton",
   "alt": "Happy Muslim woman in casual outfit and black headscarf speaking on smartphone against trees in park in daytime"
  },
  "scene": {
   "id": 8570885,
   "by": "Ron Lach",
   "alt": "A group of friends hugging and smiling indoors, showcasing diversity and happiness.",
   "prompt": "Décris la photo : qui sont ces personnes ? Où sont-elles ? Que font-elles ? Comment se sentent-elles ?",
   "keywords": [
    {
     "label": "les personnes",
     "words": [
      "friends",
      "group",
      "people",
      "women",
      "men",
      "young"
     ]
    },
    {
     "label": "l'action : se serrer dans les bras",
     "words": [
      "hugging",
      "hug",
      "embracing",
      "embrace",
      "cuddling"
     ]
    },
    {
     "label": "l'émotion",
     "words": [
      "smiling",
      "smile",
      "happy",
      "laughing",
      "glad",
      "pleased"
     ]
    },
    {
     "label": "le lieu",
     "words": [
      "indoors",
      "inside",
      "home",
      "house",
      "room"
     ]
    },
    {
     "label": "les retrouvailles",
     "words": [
      "together",
      "reunion",
      "meet",
      "met",
      "see again",
      "friendship"
     ]
    }
   ],
   "model": "A group of friends are hugging indoors. They are smiling and they look very happy. They are together again."
  }
 },
 "16": {
  "discover": [
   {
    "en": "Doorbell",
    "fr": "Sonnette",
    "id": 9461215,
    "by": "Mike Jones",
    "alt": "Close-up of a person pressing a doorbell on a beige wall, emphasizing hand action."
   },
   {
    "en": "Candle",
    "fr": "Bougie",
    "id": 8564612,
    "by": "Nothing Ahead",
    "alt": "Two lit candles against a dark backdrop, creating a warm glow."
   },
   {
    "en": "Knock",
    "fr": "Frapper (à la porte)",
    "id": 6670219,
    "by": "Kampus Production",
    "alt": "A delivery man in red uniform knocking on a white door carrying a package."
   }
  ],
  "verb": {
   "en": "I was cooking when the phone rang.",
   "fr": "Je cuisinais quand le téléphone a sonné.",
   "id": 12673803,
   "by": "Anna Shvets",
   "alt": "Asian woman multitasks by cooking and using her phone in a cozy home kitchen."
  },
  "scene": {
   "id": 9807271,
   "by": "Ron Lach",
   "alt": "A couple enjoys a cozy movie night at home, watching TV on a couch in dim lighting.",
   "prompt": "Décris la photo : qui sont ces personnes ? Où sont-elles ? Que font-elles ? À quel moment de la journée ?",
   "keywords": [
    {
     "label": "les personnes",
     "words": [
      "couple",
      "man",
      "woman",
      "husband",
      "wife",
      "two people"
     ]
    },
    {
     "label": "le lieu",
     "words": [
      "home",
      "living room",
      "house",
      "couch",
      "sofa"
     ]
    },
    {
     "label": "l'action : regarder la télé",
     "words": [
      "watching",
      "watch",
      "tv",
      "television",
      "film",
      "movie"
     ]
    },
    {
     "label": "le moment / la lumière",
     "words": [
      "evening",
      "night",
      "dark",
      "dim",
      "lights"
     ]
    },
    {
     "label": "la position",
     "words": [
      "sitting",
      "sit",
      "relaxing",
      "relax",
      "together"
     ]
    }
   ],
   "model": "A man and a woman are sitting on a couch at home. They are watching a film on TV. It is evening and the room is quite dark."
  }
 },
 "17": {
  "discover": [
   {
    "en": "Calendar",
    "fr": "Calendrier, agenda",
    "id": 8581118,
    "by": "RDNE Stock project",
    "alt": "Hands holding a wall calendar, writing with a marker, organizing schedule."
   },
   {
    "en": "Interview",
    "fr": "Entretien",
    "id": 5439148,
    "by": "Tima Miroshnichenko",
    "alt": "Young woman sitting confidently in a modern office for a job interview."
   },
   {
    "en": "Reservation",
    "fr": "Réservation",
    "id": 29789556,
    "by": "Vladimir Srajber",
    "alt": "Close-up of a reserved sign on a white tablecloth in a dimly lit restaurant setting."
   }
  ],
  "verb": {
   "en": "I'm going to visit my parents next week.",
   "fr": "Je vais rendre visite à mes parents la semaine prochaine.",
   "id": 6148876,
   "by": "RDNE Stock project",
   "alt": "A joyful family reunion outdoors with warm hugs and smiles under a wooden pergola."
  },
  "scene": {
   "id": 4881004,
   "by": "Ketut Subiyanto",
   "alt": "Two young women using a map as they explore a city in the summer sun.",
   "prompt": "Décris la photo : qui sont ces personnes ? Où sont-elles ? Que font-elles ? Quel temps fait-il ?",
   "keywords": [
    {
     "label": "les personnes",
     "words": [
      "women",
      "woman",
      "girls",
      "friends",
      "tourists",
      "travellers",
      "travelers"
     ]
    },
    {
     "label": "la carte",
     "words": [
      "map",
      "looking",
      "reading",
      "look at"
     ]
    },
    {
     "label": "le lieu",
     "words": [
      "city",
      "town",
      "street"
     ]
    },
    {
     "label": "le temps",
     "words": [
      "summer",
      "sun",
      "sunny",
      "hot",
      "warm"
     ]
    },
    {
     "label": "le voyage",
     "words": [
      "trip",
      "travel",
      "travelling",
      "traveling",
      "holiday",
      "visit",
      "visiting",
      "explore",
      "exploring"
     ]
    }
   ],
   "model": "Two young women are exploring a city. They are looking at a map. It is summer and it is sunny."
  }
 },
 "18": {
  "discover": [
   {
    "en": "Flat",
    "fr": "Appartement (UK)",
    "id": 7511693,
    "by": "Max Vakhtbovych",
    "alt": "Interior or modern studio apartment with black furniture in kitchen zone and comfortable sofa with coffee table in living room"
   },
   {
    "en": "View",
    "fr": "Vue",
    "id": 7826635,
    "by": "Rahmi Aksöz",
    "alt": "A scenic view of Galata Tower surrounded by Istanbul's skyline on a clear day, capturing Turkey's vibrant architecture."
   },
   {
    "en": "Crowded",
    "fr": "Bondé(e), surpeuplé(e)",
    "id": 12334707,
    "by": "David Gracia",
    "alt": "Vibrant urban scene at a bustling intersection filled with diverse pedestrians crossing."
   }
  ],
  "verb": {
   "en": "This flat is very spacious.",
   "fr": "Cet appartement est très spacieux.",
   "id": 8089172,
   "by": "Max Vakhtbovych",
   "alt": "Spacious living room with a modern, minimalist design and open kitchen layout."
  },
  "scene": {
   "id": 7641895,
   "by": "Alena Darmel",
   "alt": "Smiling real estate agent with a clipboard indoors, showing a property to a couple.",
   "prompt": "Décris la photo : qui sont ces personnes ? Où sont-elles ? Que font-elles ?",
   "keywords": [
    {
     "label": "l'agent immobilier",
     "words": [
      "agent",
      "estate agent",
      "real estate agent",
      "man",
      "salesman"
     ]
    },
    {
     "label": "le couple",
     "words": [
      "couple",
      "man",
      "woman",
      "clients",
      "people",
      "husband",
      "wife"
     ]
    },
    {
     "label": "l'action : faire visiter",
     "words": [
      "showing",
      "show",
      "visiting",
      "visit",
      "looking",
      "look"
     ]
    },
    {
     "label": "le lieu",
     "words": [
      "flat",
      "apartment",
      "house",
      "home",
      "room",
      "inside",
      "indoors",
      "property"
     ]
    },
    {
     "label": "les détails",
     "words": [
      "clipboard",
      "smiling",
      "smile",
      "papers",
      "suit"
     ]
    }
   ],
   "model": "An estate agent is showing a home to a couple. He is smiling and he has got a clipboard. They are inside the property."
  }
 },
 "19": {
  "discover": [
   {
    "en": "Pills",
    "fr": "Comprimés, cachets",
    "id": 161688,
    "by": "Pixabay",
    "alt": "Close-up of various pills and capsules arranged on a white surface, representing healthcare and medicine."
   },
   {
    "en": "Pharmacy",
    "fr": "Pharmacie",
    "id": 14797855,
    "by": "World Sikh Organization of Canada",
    "alt": "Pharmacist with turban organizing shelves in a pharmacy, focused on healthcare."
   },
   {
    "en": "Cough",
    "fr": "Toux, tousser",
    "id": 4975676,
    "by": "Gustavo Fring",
    "alt": "Middle-aged man coughing while sitting on sofa, wrapped in a checkered blanket, at home."
   }
  ],
  "verb": {
   "en": "You have to take this medicine twice a day.",
   "fr": "Tu dois prendre ce médicament deux fois par jour.",
   "id": 9902269,
   "by": "Ron Lach",
   "alt": "Close-up of a man about to take medication with water, indoors."
  },
  "scene": {
   "id": 5327584,
   "by": "Thirdman",
   "alt": "A female doctor in a white coat using a stethoscope during a patient examination.",
   "prompt": "Décris la photo : qui vois-tu ? Où sont-ils ? Que fait la médecin ? Que porte-t-elle ?",
   "keywords": [
    {
     "label": "les personnes",
     "words": [
      "doctor",
      "woman",
      "patient",
      "gp",
      "man",
      "person"
     ]
    },
    {
     "label": "le lieu",
     "words": [
      "surgery",
      "clinic",
      "doctor's office",
      "hospital",
      "practice"
     ]
    },
    {
     "label": "l'action (examiner, écouter)",
     "words": [
      "examining",
      "checking",
      "listening",
      "examines",
      "checks",
      "check-up",
      "examination"
     ]
    },
    {
     "label": "l'objet médical",
     "words": [
      "stethoscope"
     ]
    },
    {
     "label": "la tenue",
     "words": [
      "white coat",
      "coat",
      "wearing"
     ]
    }
   ],
   "model": "A female doctor is examining a patient. She is wearing a white coat. She is using a stethoscope."
  }
 },
 "20": {
  "discover": [
   {
    "en": "Umbrella",
    "fr": "Parapluie",
    "id": 18243869,
    "by": "Luis Quintero",
    "alt": "Caucasian woman holding a striped umbrella on a rainy city street, urban life captured."
   },
   {
    "en": "Lightning",
    "fr": "Éclair, foudre",
    "id": 28571996,
    "by": "Nikolett Emmert",
    "alt": "A vibrant lightning strike illuminating the night sky during a severe thunderstorm."
   },
   {
    "en": "Coat",
    "fr": "Manteau",
    "id": 10955935,
    "by": "Tolga Aslantürk",
    "alt": "Woman in a cozy white coat walking through a snowy forest on a winter day, showcasing winter fashion."
   }
  ],
  "verb": {
   "en": "Take an umbrella, in case it rains.",
   "fr": "Prends un parapluie, au cas où il pleuvrait.",
   "id": 19116826,
   "by": "Zeynep Sude Emek",
   "alt": "A man with a transparent umbrella walking through a rainy city street, capturing the essence of urban lifestyle in wet weather."
  },
  "scene": {
   "id": 9326427,
   "by": "Lerone Pieters",
   "alt": "A person in a yellow raincoat walks down a rainy street in New York City, holding an umbrella.",
   "prompt": "Décris la photo : quel temps fait-il ? Où est la personne ? Que fait-elle ? Que porte-t-elle ?",
   "keywords": [
    {
     "label": "la météo",
     "words": [
      "rain",
      "raining",
      "rainy",
      "wet",
      "it's raining"
     ]
    },
    {
     "label": "la personne",
     "words": [
      "person",
      "woman",
      "man",
      "someone"
     ]
    },
    {
     "label": "le lieu",
     "words": [
      "street",
      "city",
      "new york",
      "town"
     ]
    },
    {
     "label": "l'action",
     "words": [
      "walking",
      "walks",
      "holding",
      "holds"
     ]
    },
    {
     "label": "les vêtements et objets",
     "words": [
      "raincoat",
      "yellow",
      "coat",
      "umbrella",
      "jacket"
     ]
    }
   ],
   "model": "It's raining in New York City. A person is walking down the street. The person is wearing a yellow raincoat and holding an umbrella."
  }
 },
 "21": {
  "discover": [
   {
    "en": "Kitchen",
    "fr": "Cuisine",
    "id": 4221389,
    "by": "Curtis Adams",
    "alt": "Contemporary kitchen featuring wooden cabinets, stainless steel refrigerator, and modern appliances."
   },
   {
    "en": "Balcony",
    "fr": "Balcon",
    "id": 5028853,
    "by": "Evgenia Basyrova",
    "alt": "White cushion on small round lounger next to green plant in pot on balcony of wooden house in daytime"
   },
   {
    "en": "Bus stop",
    "fr": "Arrêt de bus",
    "id": 18262968,
    "by": "Satumbo 9",
    "alt": "A young couple waits for the bus at a bustling city street with a digital display board overhead."
   }
  ],
  "verb": {
   "en": "There are some shops nearby.",
   "fr": "Il y a des commerces à proximité.",
   "id": 137611,
   "by": "Scott Webb",
   "alt": "Colorful street scene with people walking past unique storefronts under sunlight."
  },
  "scene": {
   "id": 7203780,
   "by": "SHVETS production",
   "alt": "Side view of young lady with curly hair in casual clothes passing cardboard box to boyfriend during moving in new apartment in daylight",
   "prompt": "Décris la photo : qui sont ces personnes ? Où sont-elles ? Que font-elles ? À quoi ressemble la femme ?",
   "keywords": [
    {
     "label": "les personnes",
     "words": [
      "couple",
      "woman",
      "man",
      "boyfriend",
      "girlfriend",
      "young",
      "people"
     ]
    },
    {
     "label": "le lieu",
     "words": [
      "flat",
      "apartment",
      "new flat",
      "new apartment",
      "home",
      "room"
     ]
    },
    {
     "label": "l'action (emménager)",
     "words": [
      "moving in",
      "move in",
      "moving",
      "are moving"
     ]
    },
    {
     "label": "les cartons",
     "words": [
      "box",
      "boxes",
      "cardboard box",
      "carrying",
      "passing",
      "giving"
     ]
    },
    {
     "label": "la description",
     "words": [
      "curly hair",
      "casual clothes",
      "curly"
     ]
    }
   ],
   "model": "A young couple are moving into a new flat. The woman has got curly hair. She is passing a cardboard box to her boyfriend."
  }
 },
 "22": {
  "discover": [
   {
    "en": "Answer the phone",
    "fr": "Répondre au téléphone",
    "id": 5301744,
    "by": "Armin Rimoldi",
    "alt": "Concentrated Indian male wearing id card standing on gray background and looking away while having phone conversation on smartphone in studio"
   },
   {
    "en": "Text message",
    "fr": "SMS, message texte",
    "id": 6000094,
    "by": "Ono Kosuki",
    "alt": "Positive young African American female wearing warm coat sitting on bench and reading text message on smartphone in daytime"
   },
   {
    "en": "Operator",
    "fr": "Standardiste, opérateur(-trice)",
    "id": 8204385,
    "by": "Kampus Production",
    "alt": "Focused call center agent with curly hair in a yellow blouse providing customer support."
   }
  ],
  "verb": {
   "en": "Could I speak to Tom?",
   "fr": "Pourrais-je parler à Tom ?",
   "id": 5648383,
   "by": "Ono Kosuki",
   "alt": "Middle aged African American male entrepreneur in casual clothes walking on city street and having phone conversation in daytime"
  },
  "scene": {
   "id": 20955068,
   "by": "Vitaly Gariev",
   "alt": "Young woman in a modern office using a smartphone and laptop, smiling and working efficiently.",
   "prompt": "Décris la photo : qui vois-tu ? Où est-elle ? Que fait-elle ? Comment a-t-elle l'air ?",
   "keywords": [
    {
     "label": "la personne",
     "words": [
      "woman",
      "young woman",
      "girl",
      "lady"
     ]
    },
    {
     "label": "le lieu",
     "words": [
      "office",
      "desk",
      "work"
     ]
    },
    {
     "label": "le téléphone",
     "words": [
      "phone",
      "smartphone",
      "mobile",
      "on the phone",
      "call",
      "talking"
     ]
    },
    {
     "label": "l'ordinateur",
     "words": [
      "laptop",
      "computer"
     ]
    },
    {
     "label": "l'humeur et l'activité",
     "words": [
      "smiling",
      "smiles",
      "happy",
      "working",
      "busy"
     ]
    }
   ],
   "model": "A young woman is in a modern office. She is using a smartphone and a laptop. She is smiling and working."
  }
 },
 "23": {
  "discover": [
   {
    "en": "Cinema",
    "fr": "Cinéma",
    "id": 7991139,
    "by": "Tima Miroshnichenko",
    "alt": "People seated in a cinema watching a movie on a large screen."
   },
   {
    "en": "Concert",
    "fr": "Concert",
    "id": 1105666,
    "by": "Vishnu R Nair",
    "alt": "Energetic music concert with a vibrant crowd cheering under bright stage lights."
   },
   {
    "en": "Museum",
    "fr": "Musée",
    "id": 16960921,
    "by": "Alina Rossoshanska",
    "alt": "A woman observing paintings in a museum, showcasing a back view and an artful ambiance."
   }
  ],
  "verb": {
   "en": "I would like to invite you to dinner.",
   "fr": "Je voudrais t'inviter à dîner.",
   "id": 6327599,
   "by": "Tima Miroshnichenko",
   "alt": "A couple dining at a modern restaurant table, enjoying a meal together indoors."
  },
  "scene": {
   "id": 9961852,
   "by": "Taha Samet Arslan",
   "alt": "A group of adults enjoying drinks and food in an elegant restaurant setting, celebrating together.",
   "prompt": "Décris la photo : qui sont ces personnes ? Où sont-elles ? Que font-elles ? Pourquoi sont-elles là, à ton avis ?",
   "keywords": [
    {
     "label": "les personnes",
     "words": [
      "friends",
      "people",
      "group",
      "adults",
      "colleagues"
     ]
    },
    {
     "label": "le lieu",
     "words": [
      "restaurant",
      "table",
      "dinner"
     ]
    },
    {
     "label": "manger et boire",
     "words": [
      "eating",
      "drinking",
      "food",
      "drinks",
      "meal",
      "having dinner"
     ]
    },
    {
     "label": "la fête",
     "words": [
      "celebrating",
      "celebrate",
      "party",
      "toast",
      "cheers"
     ]
    },
    {
     "label": "l'ambiance",
     "words": [
      "elegant",
      "happy",
      "fun",
      "great evening",
      "enjoying"
     ]
    }
   ],
   "model": "A group of friends are at an elegant restaurant. They are enjoying food and drinks. They are celebrating together."
  }
 },
 "24": {
  "discover": [
   {
    "en": "Excited",
    "fr": "Enthousiaste, excité(e)",
    "id": 8727421,
    "by": "Tima Miroshnichenko",
    "alt": "Happy young woman expressing excitement in front of a vibrant yellow background."
   },
   {
    "en": "Worried",
    "fr": "Inquiet(ète)",
    "id": 7927547,
    "by": "Nicola Barts",
    "alt": "An adult man in professional attire looks concerned while holding a document indoors."
   },
   {
    "en": "Confused",
    "fr": "Perdu(e), confus(e)",
    "id": 8346921,
    "by": "Ron Lach",
    "alt": "A confused young woman with a questioning facial expression on a white background."
   }
  ],
  "verb": {
   "en": "I enjoy reading in the evening.",
   "fr": "J'aime lire le soir.",
   "id": 33420206,
   "by": "Diego Jaimes",
   "alt": "An adult reading a book in dim lighting with a warm and intimate atmosphere."
  },
  "scene": {
   "id": 6457517,
   "by": "Alexander Suhorucov",
   "alt": "Young multiethnic friends smiling and chatting while looking at each other at table of modern cafe",
   "prompt": "Décris la photo : qui vois-tu ? Où sont-elles ? Que font-elles ? Comment se sentent-elles, à ton avis ?",
   "keywords": [
    {
     "label": "les personnes",
     "words": [
      "friends",
      "women",
      "two women",
      "young",
      "people"
     ]
    },
    {
     "label": "le lieu",
     "words": [
      "cafe",
      "café",
      "coffee shop",
      "table"
     ]
    },
    {
     "label": "l'action (discuter)",
     "words": [
      "chatting",
      "talking",
      "discussing",
      "chat",
      "talk"
     ]
    },
    {
     "label": "le ressenti",
     "words": [
      "happy",
      "smiling",
      "smile",
      "relaxed",
      "enjoy"
     ]
    },
    {
     "label": "la boisson",
     "words": [
      "coffee",
      "cup",
      "drink"
     ]
    }
   ],
   "model": "Two young friends are sitting at a table in a modern café. They are chatting and looking at each other. They are smiling, so I think they are happy."
  }
 }
};
