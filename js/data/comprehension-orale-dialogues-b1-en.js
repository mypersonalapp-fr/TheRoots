// The Roots — Compréhension orale (Anglais, B1) : dialogues du quotidien, longs et interactifs (voix de synthèse du téléphone).
export const COMPREHENSION_ORALE_B1_EN = [
 {
  "id": 1,
  "title": "Booking a Doctor's Appointment",
  "topicFr": "Rendez-vous chez le médecin",
  "situationFr": "Tom appelle le cabinet médical de son quartier pour prendre rendez-vous car il est malade. Emma, la réceptionniste, lui pose des questions.",
  "speakers": [
   {
    "name": "Emma",
    "voice": "f"
   },
   {
    "name": "Tom",
    "voice": "m"
   }
  ],
  "lines": [
   {
    "s": 0,
    "t": "Good morning, Riverside Medical Centre, Emma speaking. How can I help you?"
   },
   {
    "s": 1,
    "t": "Hi, good morning. I'd like to make an appointment to see a doctor, please."
   },
   {
    "s": 0,
    "t": "Of course. Is it urgent, or can it wait a few days?"
   },
   {
    "s": 1,
    "t": "Well, I've had a sore throat and a fever since Monday, so I'd rather come in soon."
   },
   {
    "s": 0,
    "t": "I see. Could I have your full name and date of birth, please?"
   },
   {
    "s": 1,
    "t": "Sure. It's Tom Harris, H-A-R-R-I-S, and I was born on the fourteenth of March, 1991."
   },
   {
    "s": 0,
    "t": "Thanks, Mr Harris. Right, Doctor Patel has a free slot tomorrow at ten past nine. Would that suit you?"
   },
   {
    "choice": {
     "s": 1,
     "promptFr": "À toi de jouer : que réponds-tu ?",
     "options": [
      {
       "t": "Give me the earliest one. I don't care who the doctor is.",
       "ok": false,
       "whyFr": "Le registre est trop sec et impoli pour une réceptionniste ; on préfère une formule polie."
      },
      {
       "t": "Tomorrow morning works well for me. Thank you.",
       "ok": true,
       "whyFr": "Réponse polie et logique : tu acceptes le créneau proposé."
      },
      {
       "t": "Yes, I suit you. Nine ten is good.",
       "ok": false,
       "whyFr": "On dit that suits me ou that works for me ; le verbe suit ne s'utilise pas avec I suit you."
      }
     ]
    }
   },
   {
    "s": 0,
    "t": "Great, I'll book you in for nine ten. Now, can you tell me a bit about your symptoms so I can note them for the doctor?"
   },
   {
    "s": 1,
    "t": "Well, my throat really hurts when I swallow, and I've got a headache as well. I've also been coughing at night, so I haven't slept much."
   },
   {
    "s": 0,
    "t": "Poor you. Have you taken anything for it?"
   },
   {
    "s": 1,
    "t": "Just paracetamol, but it only helps for a few hours. I've been taking it every six hours."
   },
   {
    "s": 0,
    "t": "Okay. Have you had any difficulty breathing, or a rash?"
   },
   {
    "choice": {
     "s": 1,
     "promptFr": "À toi de jouer : que réponds-tu ?",
     "options": [
      {
       "t": "Yes, I'm dying! Send an ambulance right now!",
       "ok": false,
       "whyFr": "Exagération : les symptômes décrits ne sont pas graves et ne justifient pas une ambulance."
      },
      {
       "t": "No, nothing like that. I just feel very tired and a bit hot.",
       "ok": true,
       "whyFr": "Tu réponds à la question (pas de difficulté respiratoire ni d'éruption) et tu ajoutes une information utile."
      },
      {
       "t": "That's none of your business.",
       "ok": false,
       "whyFr": "Très impoli : la réceptionniste a besoin de ces informations pour aider le médecin."
      }
     ]
    }
   },
   {
    "s": 0,
    "t": "That's good to hear. Please bring any medication you're taking with you, and arrive ten minutes early to fill in a form."
   },
   {
    "s": 1,
    "t": "Will do. Is there a charge? I've only just moved here, so I'm not sure how it works."
   },
   {
    "s": 0,
    "t": "No, you're registered with us, so the appointment is free. You only pay if you need a prescription. That's nine pounds fifty per item."
   },
   {
    "s": 1,
    "t": "Okay, that's fine. And what if I feel worse tonight?"
   },
   {
    "s": 0,
    "t": "If it gets worse, call the out-of-hours number on our website, or go to the walk-in centre on Park Road. It's open until eight."
   },
   {
    "s": 1,
    "t": "Right, thanks. Oh, and sorry, could you repeat the time? I'm not sure I wrote it down properly."
   },
   {
    "s": 0,
    "t": "Of course. Tomorrow, Wednesday, at nine ten with Doctor Patel."
   },
   {
    "choice": {
     "s": 1,
     "promptFr": "À toi de jouer : que réponds-tu ?",
     "options": [
      {
       "t": "Whatever. I'll maybe come.",
       "ok": false,
       "whyFr": "Tu viens de prendre rendez-vous : cette réponse est impolie et illogique."
      },
      {
       "t": "Okay, bye. I hang up now.",
       "ok": false,
       "whyFr": "Trop abrupt, et I hang up now n'est pas naturel ; on remercie avant de terminer l'appel."
      },
      {
       "t": "Wednesday at nine ten, that's right. Thanks very much for your help, Emma.",
       "ok": true,
       "whyFr": "Tu confirmes l'horaire pour éviter toute erreur et tu remercies poliment."
      }
     ]
    }
   },
   {
    "s": 0,
    "t": "You're welcome, Mr Harris. Look after yourself, and drink lots of water."
   },
   {
    "s": 1,
    "t": "I will. Thanks again, Emma. Bye!"
   },
   {
    "s": 0,
    "t": "Goodbye!"
   },
   {
    "s": 0,
    "t": "Oh, one more thing! If you're not feeling any better tomorrow morning, don't worry, just come anyway."
   },
   {
    "s": 1,
    "t": "Thanks. I'll see you tomorrow, then."
   },
   {
    "s": 0,
    "t": "See you tomorrow. Take care."
   },
   {
    "s": 1,
    "t": "Thanks, you too. Bye!"
   },
   {
    "s": 0,
    "t": "Bye now."
   }
  ],
  "questions": [
   {
    "q": "Why is Tom calling the medical centre?",
    "opts": [
     "He needs a prescription for his cough",
     "He has a sore throat and a fever",
     "He wants to change doctor",
     "He has a rash and trouble breathing"
    ],
    "correct": 1,
    "whyFr": "Tom dit qu'il a mal à la gorge et de la fièvre depuis lundi. Il n'a ni éruption ni difficulté à respirer."
   },
   {
    "q": "When is Tom's appointment?",
    "opts": [
     "Tuesday at nine ten",
     "Wednesday at ten past ten",
     "Wednesday at nine ten",
     "Thursday at nine"
    ],
    "correct": 2,
    "whyFr": "Emma confirme : demain, mercredi, à neuf heures dix avec le docteur Patel."
   },
   {
    "q": "How much does Tom pay for the appointment itself?",
    "opts": [
     "Nothing",
     "Nine pounds fifty",
     "Ten pounds",
     "It depends on the doctor"
    ],
    "correct": 0,
    "whyFr": "Le rendez-vous est gratuit car Tom est inscrit ; seule l'ordonnance coûte 9,50 £ par médicament."
   },
   {
    "q": "What should Tom do if he feels worse tonight?",
    "opts": [
     "Come to the centre straight away",
     "Take more paracetamol",
     "Call the out-of-hours number or go to the walk-in centre",
     "Wait until the next morning"
    ],
    "correct": 2,
    "whyFr": "Emma lui conseille d'appeler le numéro de garde ou d'aller au centre sans rendez-vous de Park Road."
   },
   {
    "q": "What can we guess about Tom?",
    "opts": [
     "He has lived in the area for years",
     "He is a new patient who has recently moved",
     "He often forgets his appointments",
     "He is a doctor himself"
    ],
    "correct": 1,
    "whyFr": "Il dit qu'il vient d'emménager et qu'il ne sait pas comment ça marche : il est nouveau dans la région."
   }
  ],
  "expressions": [
   {
    "en": "I'd like to make an appointment.",
    "fr": "Je voudrais prendre rendez-vous."
   },
   {
    "en": "Would that suit you?",
    "fr": "Est-ce que cela vous convient ?"
   },
   {
    "en": "I've had a sore throat since Monday.",
    "fr": "J'ai mal à la gorge depuis lundi."
   },
   {
    "en": "Is there a charge?",
    "fr": "Est-ce que c'est payant ?"
   },
   {
    "en": "Could you repeat the time?",
    "fr": "Pourriez-vous répéter l'heure ?"
   }
  ],
  "level": "B1"
 },
 {
  "id": 2,
  "title": "A Mistake at the Restaurant",
  "topicFr": "Erreurs au restaurant",
  "situationFr": "Sarah dîne au restaurant avec son mari. Le serveur, Jack, se trompe de plat, puis l'addition contient une erreur.",
  "speakers": [
   {
    "name": "Sarah",
    "voice": "f"
   },
   {
    "name": "Jack",
    "voice": "m"
   }
  ],
  "lines": [
   {
    "s": 1,
    "t": "Good evening. Table for two?"
   },
   {
    "s": 0,
    "t": "Yes, please. We've booked under Wilson, for half past seven."
   },
   {
    "s": 1,
    "t": "Ah yes, Wilson. Follow me, please. Here are the menus. Can I get you something to drink first?"
   },
   {
    "s": 0,
    "t": "Just a sparkling water for me, and a glass of red wine for my husband."
   },
   {
    "s": 1,
    "t": "Lovely. Are you ready to order, or do you need a few more minutes?"
   },
   {
    "choice": {
     "s": 0,
     "promptFr": "À toi de jouer : que réponds-tu ?",
     "options": [
      {
       "t": "I'd like the grilled salmon, please, and my husband will have the beef burger with chips.",
       "ok": true,
       "whyFr": "Commande polie et claire avec I'd like et will have."
      },
      {
       "t": "Give me the salmon and the burger.",
       "ok": false,
       "whyFr": "Trop direct et impoli pour un restaurant ; il manque I'd like ou could I have."
      },
      {
       "t": "Could you tell me what time the kitchen closes? We'll order later.",
       "ok": false,
       "whyFr": "Pas logique : Jack enchaîne en confirmant une commande déjà passée."
      }
     ]
    }
   },
   {
    "s": 1,
    "t": "Perfect, one salmon and one burger. Any sides?"
   },
   {
    "s": 0,
    "t": "A green salad, please, and some extra bread."
   },
   {
    "s": 1,
    "t": "Of course. I'll be back shortly."
   },
   {
    "s": 1,
    "t": "Here we are. The salmon for you, madam, and the chicken curry for sir. Enjoy your meal."
   },
   {
    "s": 0,
    "t": "Oh, sorry, but I think there's been a mistake. My husband ordered the beef burger, not the curry."
   },
   {
    "s": 1,
    "t": "Oh dear, I'm so sorry. I thought you said chicken. Let me check my notes. You're right, it says burger."
   },
   {
    "choice": {
     "s": 0,
     "promptFr": "À toi de jouer : que réponds-tu ?",
     "options": [
      {
       "t": "This is terrible service! I want to speak to your manager right now!",
       "ok": false,
       "whyFr": "Réaction exagérée pour une simple erreur, que le serveur reconnaît déjà."
      },
      {
       "t": "It doesn't matter. He'll eat the curry, don't worry.",
       "ok": false,
       "whyFr": "Pas logique : ensuite Jack rapporte quand même le burger, donc le mari n'a pas accepté le curry."
      },
      {
       "t": "That's okay, but could you change it, please? We're quite hungry.",
       "ok": true,
       "whyFr": "Tu restes poli, tu demandes de corriger l'erreur et tu expliques pourquoi c'est un peu urgent."
      }
     ]
    }
   },
   {
    "s": 1,
    "t": "Of course. I'll take it back now, and the burger will take about ten minutes. Would you like a free drink while you wait?"
   },
   {
    "s": 0,
    "t": "That's very kind, thanks. Another glass of red wine would be nice."
   },
   {
    "s": 1,
    "t": "Coming right up."
   },
   {
    "s": 0,
    "t": "Well, the salmon is delicious, you know. Shall we have dessert after?"
   },
   {
    "s": 1,
    "t": "Sorry to interrupt, but here's the burger, sir. Very hot, so be careful!"
   },
   {
    "s": 0,
    "t": "Thanks. It looks great. We'll think about dessert later."
   },
   {
    "s": 1,
    "t": "Take your time."
   },
   {
    "s": 1,
    "t": "How is everything? Is the burger cooked the way you like it, sir?"
   },
   {
    "s": 0,
    "t": "Yes, it's perfect, thanks. Much better than the curry would have been!"
   },
   {
    "s": 0,
    "t": "Excuse me, could we have the bill, please? We're going to skip dessert."
   },
   {
    "s": 1,
    "t": "Certainly. Here you are. That comes to fifty pounds, service not included."
   },
   {
    "choice": {
     "s": 0,
     "promptFr": "À toi de jouer : que réponds-tu ?",
     "options": [
      {
       "t": "You're trying to cheat us, aren't you?",
       "ok": false,
       "whyFr": "Accusation agressive sans preuve ; une erreur n'est pas forcément une tentative de tromperie."
      },
      {
       "t": "The bill is fine. Can I pay by card?",
       "ok": false,
       "whyFr": "Ce n'est pas logique : la suite montre que l'addition contenait une erreur."
      },
      {
       "t": "I think there's a mistake. You've charged us for two glasses of wine, but the second one was free.",
       "ok": true,
       "whyFr": "Tu signales poliment l'erreur avec I think there's a mistake et tu donnes la raison."
      }
     ]
    }
   },
   {
    "s": 1,
    "t": "Oh, you're right, I'm sorry. The free glass shouldn't be on there. That makes it forty-three pounds fifty."
   },
   {
    "s": 0,
    "t": "Thank you. Here's my card. And please add a tip of five pounds."
   },
   {
    "s": 1,
    "t": "That's very generous. Thank you, madam. I'm really sorry again about the mix-up."
   },
   {
    "s": 0,
    "t": "Don't worry, these things happen. The food was lovely."
   },
   {
    "s": 1,
    "t": "I'm glad to hear it. Have a good evening!"
   }
  ],
  "questions": [
   {
    "q": "What did Sarah's husband actually order?",
    "opts": [
     "The chicken curry",
     "The grilled salmon",
     "The beef burger with chips",
     "A green salad"
    ],
    "correct": 2,
    "whyFr": "Le mari avait commandé le burger au bœuf ; le serveur a apporté le curry de poulet par erreur."
   },
   {
    "q": "How does the waiter make up for the first mistake?",
    "opts": [
     "He offers a free drink",
     "He gives them free dessert",
     "He takes ten pounds off the bill",
     "He calls the manager"
    ],
    "correct": 0,
    "whyFr": "Jack propose une boisson gratuite pendant l'attente du burger."
   },
   {
    "q": "What is wrong with the first bill?",
    "opts": [
     "The salmon is too expensive",
     "Service is included twice",
     "The free glass of wine was charged",
     "They were charged for the curry"
    ],
    "correct": 2,
    "whyFr": "Le verre de vin offert figurait sur l'addition : Sarah le signale et Jack le retire."
   },
   {
    "q": "How much does Sarah pay for the meal, without the tip?",
    "opts": [
     "Fifty pounds",
     "Forty-three pounds fifty",
     "Forty-eight pounds fifty",
     "Thirty-seven pounds"
    ],
    "correct": 1,
    "whyFr": "Après correction, l'addition est de 43,50 £ ; les 5 £ de pourboire s'ajoutent séparément."
   },
   {
    "q": "How does Sarah feel at the end?",
    "opts": [
     "Angry about the service",
     "Disappointed with the food",
     "Quite understanding and satisfied",
     "Worried about the price"
    ],
    "correct": 2,
    "whyFr": "Elle dit que ce sont des choses qui arrivent, que la nourriture était délicieuse, et laisse un pourboire."
   }
  ],
  "expressions": [
   {
    "en": "We've booked under Wilson.",
    "fr": "Nous avons réservé au nom de Wilson."
   },
   {
    "en": "I think there's been a mistake.",
    "fr": "Je pense qu'il y a eu une erreur."
   },
   {
    "en": "Could we have the bill, please?",
    "fr": "Pourrions-nous avoir l'addition, s'il vous plaît ?"
   },
   {
    "en": "Service not included.",
    "fr": "Service non compris."
   },
   {
    "en": "These things happen.",
    "fr": "Ces choses arrivent."
   }
  ],
  "level": "B1"
 },
 {
  "id": 3,
  "title": "Flatmates and a Noisy Neighbour",
  "topicFr": "Colocation : tâches et voisin bruyant",
  "situationFr": "Chloe et Dan partagent un appartement. Ils se répartissent les tâches ménagères, puis parlent du voisin du dessus qui fait du bruit la nuit.",
  "speakers": [
   {
    "name": "Chloe",
    "voice": "f"
   },
   {
    "name": "Dan",
    "voice": "m"
   }
  ],
  "lines": [
   {
    "s": 0,
    "t": "Dan, have you got a minute? We really need to talk about the chores."
   },
   {
    "s": 1,
    "t": "Oh no. Is it about the washing-up again? I know, I left it in the sink yesterday."
   },
   {
    "s": 0,
    "t": "Well, yes, and the bins too. They were full on Tuesday and nobody took them out."
   },
   {
    "s": 1,
    "t": "Sorry, I forgot. Honestly, I think we need a proper rota."
   },
   {
    "s": 0,
    "t": "Exactly what I was going to say. How about I do the bathroom and the hoovering on Saturdays?"
   },
   {
    "choice": {
     "s": 1,
     "promptFr": "À toi de jouer : que réponds-tu ?",
     "options": [
      {
       "t": "Fine, but only if you do everything else as well.",
       "ok": false,
       "whyFr": "Réponse égoïste et contraire à l'idée de partager les tâches équitablement."
      },
      {
       "t": "I hate cleaning. Why don't you hire a cleaner?",
       "ok": false,
       "whyFr": "Ce n'est pas réaliste ni coopératif, et la conversation est justement pour trouver un arrangement."
      },
      {
       "t": "That sounds fair. In that case, I'll take the bins and the washing-up during the week.",
       "ok": true,
       "whyFr": "Tu acceptes et tu proposes une répartition équilibrée avec In that case."
      }
     ]
    }
   },
   {
    "s": 0,
    "t": "Great. And what about the kitchen floor? It's disgusting at the moment."
   },
   {
    "s": 1,
    "t": "I'll mop it on Sundays, if you do the shopping. I'm so bad at remembering what we need."
   },
   {
    "s": 0,
    "t": "Deal. I'll go to the supermarket on Thursday evenings. Oh, we also need cleaning products. They cost about twelve pounds, so six each?"
   },
   {
    "s": 1,
    "t": "Sure, I'll transfer it tonight. Anything else?"
   },
   {
    "s": 0,
    "t": "Actually, yes. Did you hear the music last night? It was past one in the morning."
   },
   {
    "s": 1,
    "t": "Of course I heard it! It's the guy upstairs, Mr Brooks. He's done it three times this week, hasn't he?"
   },
   {
    "s": 0,
    "t": "Four, I think. I had to get up at six for work, and I was exhausted."
   },
   {
    "choice": {
     "s": 1,
     "promptFr": "À toi de jouer : que réponds-tu ?",
     "options": [
      {
       "t": "Let's go upstairs and shout at him. That'll teach him.",
       "ok": false,
       "whyFr": "Trop agressif : ça risque d'aggraver le conflit avec un voisin."
      },
      {
       "t": "Maybe we should knock on his door and ask him politely to turn it down.",
       "ok": true,
       "whyFr": "Proposition raisonnable et polie avec maybe we should, un bon premier pas."
      },
      {
       "t": "We'd better do nothing. I never complain about anything.",
       "ok": false,
       "whyFr": "Ne rien faire ne résout pas le problème, alors que Chloe est épuisée."
      }
     ]
    }
   },
   {
    "s": 0,
    "t": "I'd rather not go on my own. He's a bit scary, you know."
   },
   {
    "s": 1,
    "t": "Okay, we'll go together tomorrow evening, around seven. If he's not in, we can leave a note."
   },
   {
    "s": 0,
    "t": "Good idea. What if he ignores us, though?"
   },
   {
    "s": 1,
    "t": "Then we'll call the landlord. It says in our contract that quiet hours start at eleven."
   },
   {
    "s": 0,
    "t": "Really? I didn't know that. Could you send me the contract?"
   },
   {
    "s": 1,
    "t": "Yes, I've got a copy on my laptop. I'll email it to you in a minute."
   },
   {
    "s": 0,
    "t": "Thanks. Honestly, I'd move out if it carries on."
   },
   {
    "s": 1,
    "t": "Don't say that! If it gets worse, we could ask the landlord to speak to him straight away."
   },
   {
    "choice": {
     "s": 1,
     "promptFr": "À toi de jouer : que réponds-tu ?",
     "options": [
      {
       "t": "Let's start the rota this weekend and see how it goes. And I'll buy us a coffee tonight.",
       "ok": true,
       "whyFr": "Tu conclus positivement : tu lances le planning et tu proposes un geste sympathique."
      },
      {
       "t": "Whatever. I'm sure the rota will not work.",
       "ok": false,
       "whyFr": "Négatif et décourageant, alors que vous venez de vous mettre d'accord."
      },
      {
       "t": "I'm leaving now. Send the contract to my mum.",
       "ok": false,
       "whyFr": "Illogique : rien n'indique pourquoi la mère de Dan recevrait le contrat."
      }
     ]
    }
   },
   {
    "s": 0,
    "t": "Ha, that sounds nice. I'll write the rota on the fridge door now."
   },
   {
    "s": 1,
    "t": "Perfect. I'll take the bins out in a minute. They're still full!"
   },
   {
    "s": 0,
    "t": "Thank you. See, we can sort things out when we talk."
   },
   {
    "s": 1,
    "t": "By the way, shall we invite him for a coffee once it's sorted?"
   },
   {
    "s": 0,
    "t": "Ha, maybe. Let's see how tomorrow goes first."
   },
   {
    "s": 1,
    "t": "Deal."
   },
   {
    "s": 0,
    "t": "Right, I'll start dinner. Is pasta okay?"
   },
   {
    "s": 1,
    "t": "Sounds great. I'll do the washing-up afterwards, I promise."
   }
  ],
  "questions": [
   {
    "q": "Which job does Dan agree to do on Sundays?",
    "opts": [
     "The shopping",
     "The bins",
     "The bathroom",
     "Mopping the kitchen floor"
    ],
    "correct": 3,
    "whyFr": "Dan dit qu'il lavera le sol de la cuisine le dimanche, tandis que Chloe fera les courses."
   },
   {
    "q": "How much does each flatmate pay for the cleaning products?",
    "opts": [
     "Twelve pounds",
     "Four pounds",
     "Six pounds",
     "Nine pounds"
    ],
    "correct": 2,
    "whyFr": "Les produits coûtent environ 12 £, donc 6 £ chacun."
   },
   {
    "q": "Why is Chloe so tired?",
    "opts": [
     "She works at night",
     "The neighbour's music keeps her awake",
     "She cleans all day",
     "Her bed is uncomfortable"
    ],
    "correct": 1,
    "whyFr": "Elle a dû se lever à six heures alors que la musique de M. Brooks a continué après une heure du matin."
   },
   {
    "q": "What will they do if the neighbour ignores them?",
    "opts": [
     "Move out immediately",
     "Play loud music too",
     "Call the landlord",
     "Call the police"
    ],
    "correct": 2,
    "whyFr": "Dan propose d'appeler le propriétaire, car le contrat prévoit des heures de silence à partir de 23 h."
   },
   {
    "q": "What does Chloe's attitude towards the neighbour suggest?",
    "opts": [
     "She is a little afraid of him",
     "She is friends with him",
     "She likes his music",
     "She has never met him"
    ],
    "correct": 0,
    "whyFr": "Elle dit qu'il est un peu effrayant et qu'elle préfère ne pas y aller seule."
   }
  ],
  "expressions": [
   {
    "en": "We need a proper rota.",
    "fr": "Il nous faut un vrai planning des tâches."
   },
   {
    "en": "That sounds fair.",
    "fr": "Ça me paraît équitable."
   },
   {
    "en": "Maybe we should knock on his door.",
    "fr": "On devrait peut-être frapper à sa porte."
   },
   {
    "en": "I'd rather not go on my own.",
    "fr": "Je préférerais ne pas y aller seule."
   },
   {
    "en": "If it carries on, I'll move out.",
    "fr": "Si ça continue, je déménagerai."
   }
  ],
  "level": "B1"
 },
 {
  "id": 4,
  "title": "Buying a Train Ticket",
  "topicFr": "Acheter un billet de train",
  "situationFr": "Lucy veut se rendre à Leeds depuis Manchester. Elle parle à Mark, l'employé du guichet, du prix du billet, des retards et du quai.",
  "speakers": [
   {
    "name": "Lucy",
    "voice": "f"
   },
   {
    "name": "Mark",
    "voice": "m"
   }
  ],
  "lines": [
   {
    "s": 1,
    "t": "Next, please. Hello there. What can I do for you?"
   },
   {
    "s": 0,
    "t": "Hi. I'd like a ticket to Leeds, please. I'm travelling today."
   },
   {
    "s": 1,
    "t": "Single or return?"
   },
   {
    "choice": {
     "s": 0,
     "promptFr": "À toi de jouer : que réponds-tu ?",
     "options": [
      {
       "t": "A return, please. I'm coming back tonight, around nine.",
       "ok": true,
       "whyFr": "Réponse claire : un aller-retour et l'heure approximative du retour."
      },
      {
       "t": "I want go Leeds and come, please.",
       "ok": false,
       "whyFr": "Grammaire incorrecte (want to go) et on dit a return, pas come."
      },
      {
       "t": "A single ticket for yesterday, please.",
       "ok": false,
       "whyFr": "Illogique : on ne peut pas voyager hier, et Lucy revient ce soir."
      }
     ]
    }
   },
   {
    "s": 1,
    "t": "Okay, a return. That's twenty-four pounds sixty. Do you have a railcard?"
   },
   {
    "s": 0,
    "t": "Yes, I've got a young person's railcard. Does that make it cheaper?"
   },
   {
    "s": 1,
    "t": "It does. You get a third off, so that's sixteen pounds forty. Can I see the card, please?"
   },
   {
    "s": 0,
    "t": "Sure, here you are. And can I pay by card?"
   },
   {
    "s": 1,
    "t": "Of course. Just put it in the machine. Right, the next train is the ten forty-two, but I'm afraid it's running about fifteen minutes late."
   },
   {
    "s": 0,
    "t": "Oh no. What's the problem?"
   },
   {
    "s": 1,
    "t": "There's a signalling problem near Rochdale. It's causing a few delays all morning."
   },
   {
    "choice": {
     "s": 0,
     "promptFr": "À toi de jouer : que réponds-tu ?",
     "options": [
      {
       "t": "That's not my problem. Fix it immediately.",
       "ok": false,
       "whyFr": "Agressif et injuste : l'employé n'est pas responsable du retard."
      },
      {
       "t": "Fifteen minutes? Then I'll not take the train, I walk to Leeds.",
       "ok": false,
       "whyFr": "Peu réaliste et grammaticalement incorrect (I will not take / I'll walk) ; Lucy cherche plutôt une solution."
      },
      {
       "t": "Oh dear. Is there another train I could take, or should I just wait for that one?",
       "ok": true,
       "whyFr": "Tu restes poli et tu cherches une solution avec une question ouverte."
      }
     ]
    }
   },
   {
    "s": 1,
    "t": "The next one after that is at eleven fifteen, but it stops at every station. So the ten forty-two is still your best option."
   },
   {
    "s": 0,
    "t": "Right. Is it a direct train?"
   },
   {
    "s": 1,
    "t": "Yes, it's direct. It should take about fifty minutes once it leaves."
   },
   {
    "s": 0,
    "t": "Great. And which platform does it leave from?"
   },
   {
    "s": 1,
    "t": "Platform six, but there's been a change. It's now platform three, so you need to go over the bridge."
   },
   {
    "s": 0,
    "t": "Sorry, did you say three or thirteen?"
   },
   {
    "s": 1,
    "t": "Three. Just follow the signs. Listen for the announcements too, in case it changes again."
   },
   {
    "s": 0,
    "t": "Thanks. Oh, and if the train is more than thirty minutes late, can I get my money back?"
   },
   {
    "s": 1,
    "t": "Yes, you can claim a refund online. Keep your ticket, and fill in the form on our website within twenty-eight days."
   },
   {
    "choice": {
     "s": 0,
     "promptFr": "À toi de jouer : que réponds-tu ?",
     "options": [
      {
       "t": "Brilliant, thanks. That's really helpful. I'll go and wait on platform three.",
       "ok": true,
       "whyFr": "Tu remercies et tu répètes le quai pour confirmer que tu as compris."
      },
      {
       "t": "Okay. Which platform is it? I forgot.",
       "ok": false,
       "whyFr": "Mark vient de le dire deux fois ; la question est répétitive et ne montre pas que tu as écouté."
      },
      {
       "t": "I don't need the ticket. I'll go without it.",
       "ok": false,
       "whyFr": "Illogique : tu as besoin du billet pour voyager et pour réclamer un remboursement."
      }
     ]
    }
   },
   {
    "s": 1,
    "t": "You're welcome. There's a coffee shop on the platform if you want to wait."
   },
   {
    "s": 0,
    "t": "Good idea. I haven't had breakfast yet."
   },
   {
    "s": 1,
    "t": "Have a good trip, then. The train should arrive in about ten minutes."
   },
   {
    "s": 0,
    "t": "Thanks very much. Bye!"
   },
   {
    "s": 1,
    "t": "Bye, and mind the gap!"
   },
   {
    "s": 0,
    "t": "Sorry, one last thing. Do I need to validate my ticket before I get on?"
   },
   {
    "s": 1,
    "t": "No, just keep it safe. You'll need it to go through the barrier at Leeds."
   },
   {
    "s": 0,
    "t": "Got it. Thanks again!"
   }
  ],
  "questions": [
   {
    "q": "How much does Lucy pay for her ticket?",
    "opts": [
     "Twenty-four pounds sixty",
     "Sixteen pounds forty",
     "Eleven pounds fifteen",
     "Thirty pounds"
    ],
    "correct": 1,
    "whyFr": "Le billet coûte 24,60 £, moins un tiers grâce à la carte de réduction : 16,40 £."
   },
   {
    "q": "Why is the ten forty-two train late?",
    "opts": [
     "A signalling problem near Rochdale",
     "Bad weather",
     "A driver is ill",
     "Works on the platform"
    ],
    "correct": 0,
    "whyFr": "Mark parle d'un problème de signalisation près de Rochdale."
   },
   {
    "q": "Why does Mark recommend the ten forty-two instead of the next train?",
    "opts": [
     "It is cheaper",
     "It has fewer passengers",
     "It leaves from platform six",
     "It is direct, while the next one stops everywhere"
    ],
    "correct": 3,
    "whyFr": "Le train suivant (11 h 15) s'arrête à toutes les gares, donc le 10 h 42 reste la meilleure option."
   },
   {
    "q": "Which platform should Lucy go to?",
    "opts": [
     "Platform thirteen",
     "Platform six",
     "Platform three",
     "Platform five"
    ],
    "correct": 2,
    "whyFr": "Le quai a changé : du six au trois. Lucy vérifie même qu'il ne s'agit pas du treize."
   },
   {
    "q": "When can Lucy get a refund?",
    "opts": [
     "If the train is more than thirty minutes late",
     "If she arrives before noon",
     "If she loses her railcard",
     "If she buys a single ticket"
    ],
    "correct": 0,
    "whyFr": "Elle peut demander un remboursement en ligne si le retard dépasse trente minutes."
   }
  ],
  "expressions": [
   {
    "en": "Single or return?",
    "fr": "Aller simple ou aller-retour ?"
   },
   {
    "en": "It's running about fifteen minutes late.",
    "fr": "Il a environ quinze minutes de retard."
   },
   {
    "en": "There's been a change of platform.",
    "fr": "Il y a eu un changement de quai."
   },
   {
    "en": "Can I get my money back?",
    "fr": "Puis-je être remboursée ?"
   },
   {
    "en": "It stops at every station.",
    "fr": "Il s'arrête à toutes les gares."
   }
  ],
  "level": "B1"
 },
 {
  "id": 5,
  "title": "Choosing a Mobile Plan",
  "topicFr": "Comparer deux forfaits mobiles",
  "situationFr": "Ben veut changer de forfait téléphonique. Dans une boutique, Hannah, la vendeuse, lui présente deux offres différentes.",
  "speakers": [
   {
    "name": "Ben",
    "voice": "m"
   },
   {
    "name": "Hannah",
    "voice": "f"
   }
  ],
  "lines": [
   {
    "s": 1,
    "t": "Hello, welcome to Connect Mobile. Are you looking for anything in particular?"
   },
   {
    "s": 0,
    "t": "Hi. My contract finishes next month, so I'd like to look at some new plans, please."
   },
   {
    "s": 1,
    "t": "Of course. How much data do you use at the moment?"
   },
   {
    "s": 0,
    "t": "I'm not sure, but I stream a lot of videos and music on my way to work. I think about fifteen gigabytes a month."
   },
   {
    "s": 1,
    "t": "Okay. Well, I'd suggest two options. First, the Smart Twenty. It's eighteen pounds a month, with twenty gigabytes of data, on a twenty-four month contract."
   },
   {
    "s": 0,
    "t": "That sounds reasonable. And the second one?"
   },
   {
    "s": 1,
    "t": "The Unlimited Plus is twenty-six pounds a month, with unlimited data, but the contract is only twelve months."
   },
   {
    "choice": {
     "s": 0,
     "promptFr": "À toi de jouer : que réponds-tu ?",
     "options": [
      {
       "t": "Both are the same, I suppose. I'll take whichever is cheaper.",
       "ok": false,
       "whyFr": "Les deux offres sont différentes (données, durée, itinérance) ; ce n'est pas une réponse réfléchie."
      },
      {
       "t": "Does either plan include roaming? I'm going to Portugal twice a year.",
       "ok": true,
       "whyFr": "Question pertinente et naturelle : Ben voyage, donc l'itinérance à l'étranger l'intéresse."
      },
      {
       "t": "Can I speak to your manager about the price?",
       "ok": false,
       "whyFr": "Inutile et prématuré : Hannah vient à peine de présenter les offres."
      }
     ]
    }
   },
   {
    "s": 1,
    "t": "Good question. With the Unlimited Plus, roaming in Europe is included. With the Smart Twenty, you'd pay two pounds a day when you're abroad."
   },
   {
    "s": 0,
    "t": "Right. So if I spent a week in Portugal, that would be fourteen pounds extra."
   },
   {
    "s": 1,
    "t": "Exactly. And for two trips a year, that makes twenty-eight pounds."
   },
   {
    "s": 0,
    "t": "Hmm, but the Unlimited Plus costs eight pounds more every month. That's ninety-six a year."
   },
   {
    "s": 1,
    "t": "You're right. So on price alone, the Smart Twenty is better. The Unlimited Plus is better if you want to be free from worrying about data."
   },
   {
    "s": 0,
    "t": "I see. What happens if I go over twenty gigabytes on the Smart Twenty?"
   },
   {
    "s": 1,
    "t": "Then your speed drops, but you can buy an extra gigabyte for two pounds. You won't be charged without asking."
   },
   {
    "s": 0,
    "t": "Okay, that's good to know. And do I get a new phone with these plans?"
   },
   {
    "s": 1,
    "t": "Yes. With the Smart Twenty, you can choose a phone for ten pounds upfront. With the Unlimited Plus, the phone is free."
   },
   {
    "choice": {
     "s": 0,
     "promptFr": "À toi de jouer : que réponds-tu ?",
     "options": [
      {
       "t": "If I took the Smart Twenty, I'd save money, but I'd be stuck for two years. I'd rather keep my options open.",
       "ok": true,
       "whyFr": "Raisonnement clair avec une structure conditionnelle (second conditional) comparant avantages et inconvénients."
      },
      {
       "t": "I take both plans, please. I pay the double.",
       "ok": false,
       "whyFr": "Illogique : on ne peut pas avoir deux forfaits pour un même téléphone, et la grammaire est incorrecte."
      },
      {
       "t": "I don't care about money. Just give me the best phone.",
       "ok": false,
       "whyFr": "Contradictoire : Ben vient de comparer les prix en détail."
      }
     ]
    }
   },
   {
    "s": 1,
    "t": "That's a fair point. Twelve months gives you more freedom to change."
   },
   {
    "s": 0,
    "t": "Right. I think I'll go for the Unlimited Plus. Can I choose a phone now?"
   },
   {
    "s": 1,
    "t": "Of course. We've got three free ones. Would you like to see them?"
   },
   {
    "choice": {
     "s": 0,
     "promptFr": "À toi de jouer : que réponds-tu ?",
     "options": [
      {
       "t": "No, I'll just take the cheapest one. I never use my camera.",
       "ok": false,
       "whyFr": "Pas logique : les téléphones sont tous gratuits, donc le prix ne les distingue pas."
      },
      {
       "t": "Yes. Show me them all, quickly. I'm in a hurry, you know.",
       "ok": false,
       "whyFr": "Registre brusque et peu poli ; tu ne précises pas non plus ce que tu cherches."
      },
      {
       "t": "Yes, please. Which of them has the best camera? I take a lot of photos on holiday.",
       "ok": true,
       "whyFr": "Tu acceptes et tu précises ton besoin, ce qui aide la vendeuse à te conseiller."
      }
     ]
    }
   },
   {
    "s": 1,
    "t": "The Nova Five has the best camera of the three, and the battery lasts two days."
   },
   {
    "s": 0,
    "t": "Great, I'll take that one. Oh, and could you give me the plan details in writing, just in case?"
   },
   {
    "s": 1,
    "t": "No problem. I'll print everything for you and put it in the bag, with your contract."
   },
   {
    "s": 0,
    "t": "Perfect. Thanks for explaining everything so clearly."
   },
   {
    "s": 1,
    "t": "My pleasure. One more thing: if you ever want to cancel, you must give us thirty days' notice."
   },
   {
    "s": 0,
    "t": "Okay, thanks for warning me. I'll make a note of that."
   },
   {
    "s": 1,
    "t": "Lovely. Now, follow me, and I'll show you the phones."
   }
  ],
  "questions": [
   {
    "q": "What does Ben mostly use his phone for?",
    "opts": [
     "Making long phone calls",
     "Playing online games",
     "Streaming videos and music",
     "Sending emails for work"
    ],
    "correct": 2,
    "whyFr": "Ben dit qu'il regarde beaucoup de vidéos et écoute de la musique en allant au travail."
   },
   {
    "q": "How much would two weeks' roaming cost with the Smart Twenty?",
    "opts": [
     "Fourteen pounds",
     "Twenty-eight pounds",
     "Sixteen pounds",
     "Nothing"
    ],
    "correct": 1,
    "whyFr": "Deux voyages d'une semaine à 2 £ par jour font 28 £ ; le texte parle ainsi de deux voyages par an."
   },
   {
    "q": "How much more does the Unlimited Plus cost per year?",
    "opts": [
     "Eight pounds",
     "Twenty-eight pounds",
     "Ninety-six pounds",
     "Two hundred pounds"
    ],
    "correct": 2,
    "whyFr": "Il coûte 8 £ de plus par mois, soit 96 £ par an."
   },
   {
    "q": "Why does Ben finally choose the Unlimited Plus?",
    "opts": [
     "It is the cheapest option",
     "The contract is shorter and gives him more freedom",
     "The phone costs ten pounds",
     "Hannah told him to"
    ],
    "correct": 1,
    "whyFr": "Il préfère garder ses options ouvertes avec un contrat de douze mois, avec en plus l'itinérance incluse et un téléphone gratuit."
   },
   {
    "q": "What does Hannah do at the end?",
    "opts": [
     "She refuses to give him a printed copy",
     "She asks him to come back tomorrow",
     "She gives him a discount",
     "She agrees to print the details and show him the phones"
    ],
    "correct": 3,
    "whyFr": "Elle imprime les détails du forfait et l'emmène voir les trois téléphones gratuits."
   }
  ],
  "expressions": [
   {
    "en": "My contract finishes next month.",
    "fr": "Mon contrat se termine le mois prochain."
   },
   {
    "en": "Is roaming included?",
    "fr": "L'itinérance est-elle incluse ?"
   },
   {
    "en": "On price alone, it's better.",
    "fr": "Rien que sur le prix, c'est mieux."
   },
   {
    "en": "I'd rather keep my options open.",
    "fr": "Je préfère garder mes options ouvertes."
   },
   {
    "en": "Could you give me the details in writing?",
    "fr": "Pourriez-vous me donner les détails par écrit ?"
   }
  ],
  "level": "B1"
 },
 {
  "id": 6,
  "title": "No Receipt, Faulty Kettle",
  "topicFr": "Rapporter un article défectueux",
  "situationFr": "Emma rapporte une bouilloire qui ne marche plus dans un magasin d'électroménager. Elle a perdu son ticket de caisse et parle avec Tom, le vendeur.",
  "speakers": [
   {
    "name": "Tom",
    "voice": "m"
   },
   {
    "name": "Emma",
    "voice": "f"
   }
  ],
  "lines": [
   {
    "s": 0,
    "t": "Hello there. Can I help you?"
   },
   {
    "s": 1,
    "t": "Hi, yes, I hope so. I bought this kettle here about two weeks ago, but it's stopped working."
   },
   {
    "s": 0,
    "t": "Oh dear, I'm sorry to hear that. What exactly is the problem?"
   },
   {
    "s": 1,
    "t": "Well, it switches itself off before the water boils. And yesterday it wouldn't turn on at all."
   },
   {
    "s": 0,
    "t": "I see. Have you got the receipt with you?"
   },
   {
    "choice": {
     "s": 1,
     "promptFr": "À toi de jouer : que réponds-tu ?",
     "options": [
      {
       "t": "No, I haven't. But it's your fault, so you have to give me my money back.",
       "ok": false,
       "whyFr": "Trop agressif et impoli : on n'accuse pas le vendeur dès le début."
      },
      {
       "t": "Um, I'm afraid I've lost it, but I paid by card. Would that help?",
       "ok": true,
       "whyFr": "Poli, honnête et utile : elle propose une autre preuve d'achat."
      },
      {
       "t": "Yes, here it is. I always keep my receipts.",
       "ok": false,
       "whyFr": "Illogique : Emma n'a pas son ticket, cela contredit la suite."
      }
     ]
    }
   },
   {
    "s": 0,
    "t": "Well, normally we need the receipt, but a bank statement can work as proof of purchase."
   },
   {
    "s": 1,
    "t": "Oh, great. I've got my banking app on my phone. Let me have a look... here we are. The fourteenth of September, thirty-four ninety-nine."
   },
   {
    "s": 0,
    "t": "Perfect, that matches our records. Hmm, let me check the kettle. Yes, the base is a bit loose, so it's definitely faulty."
   },
   {
    "s": 1,
    "t": "I thought so. I've only used it about ten times, you know."
   },
   {
    "s": 0,
    "t": "Fair enough. Now, we can't give you cash without a receipt, but I can offer you either an exchange or a refund to your card."
   },
   {
    "s": 1,
    "t": "Could you tell me a bit more about the exchange?"
   },
   {
    "s": 0,
    "t": "Of course. There's a newer model for thirty-nine ninety-nine. It's got a two-year warranty, so you'd just pay the five pounds difference."
   },
   {
    "choice": {
     "s": 1,
     "promptFr": "À toi de jouer : que réponds-tu ?",
     "options": [
      {
       "t": "That sounds nice, but I'll just take the refund, thanks. I'm on a tight budget this month.",
       "ok": true,
       "whyFr": "Réponse claire, polie et justifiée : elle choisit le remboursement."
      },
      {
       "t": "Give me the new one for free and then we'll be fine.",
       "ok": false,
       "whyFr": "Peu réaliste et impoli : on ne peut pas exiger un produit gratuit."
      },
      {
       "t": "I don't mind. Whatever you think.",
       "ok": false,
       "whyFr": "Trop vague : le vendeur a besoin d'une décision claire."
      }
     ]
    }
   },
   {
    "s": 0,
    "t": "Understood. I'll need my manager to approve it, since there's no receipt. Could you wait a minute?"
   },
   {
    "s": 1,
    "t": "Of course. I'm not in a hurry."
   },
   {
    "s": 0,
    "t": "Thanks. I won't be long."
   },
   {
    "s": 0,
    "t": "Right, Mrs Patel says it's fine. I'll start the refund now."
   },
   {
    "s": 1,
    "t": "That's a relief. How long will the money take to come back?"
   },
   {
    "s": 0,
    "t": "Usually three to five working days. I'll print a slip for you, just in case."
   },
   {
    "s": 1,
    "t": "Lovely. Do I need to sign anything?"
   },
   {
    "s": 0,
    "t": "Just here, please. And could I have your name and a phone number?"
   },
   {
    "s": 1,
    "t": "Emma Clarke, and my mobile is oh-seven-seven-oh-nine, four-five-six, one-two-three."
   },
   {
    "s": 0,
    "t": "Brilliant, thank you. If the money hasn't arrived by next Friday, just call us on the number on the slip."
   },
   {
    "choice": {
     "s": 1,
     "promptFr": "À toi de jouer : que réponds-tu ?",
     "options": [
      {
       "t": "Next Friday? That's far too late. I'll come back tomorrow and shout at your manager.",
       "ok": false,
       "whyFr": "Menaçant et déplacé : Tom a été très serviable."
      },
      {
       "t": "I did not understand. Repeat everything, please.",
       "ok": false,
       "whyFr": "Inutile : Emma a bien compris, ce n'est pas logique et c'est peu naturel."
      },
      {
       "t": "Thank you for your help, Tom. You've been really kind.",
       "ok": true,
       "whyFr": "Remerciement poli et naturel pour conclure la conversation."
      }
     ]
    }
   },
   {
    "s": 0,
    "t": "You're welcome. Next time, keep your receipt somewhere safe!"
   },
   {
    "s": 1,
    "t": "I will, I promise. Have a nice afternoon!"
   },
   {
    "s": 0,
    "t": "You too. Bye!"
   },
   {
    "s": 1,
    "t": "Bye, Tom!"
   }
  ],
  "questions": [
   {
    "q": "Why does Emma think the kettle is faulty?",
    "opts": [
     "It leaks water from the base",
     "It turns off before boiling and then won't start",
     "It makes a strange noise",
     "It is too small for her kitchen"
    ],
    "correct": 1,
    "whyFr": "Elle dit qu'elle s'éteint avant l'ébullition et qu'hier elle ne s'allumait plus."
   },
   {
    "q": "How does Emma prove she bought the kettle?",
    "opts": [
     "With a bank app showing the payment",
     "With a guarantee card",
     "With a photo of the box",
     "With her name on the shop's list"
    ],
    "correct": 0,
    "whyFr": "Elle montre son application bancaire : 34,99 £ le 14 septembre."
   },
   {
    "q": "How much would the exchange cost Emma?",
    "opts": [
     "Nothing",
     "Thirty-four ninety-nine",
     "Five pounds",
     "Thirty-nine ninety-nine"
    ],
    "correct": 2,
    "whyFr": "Le nouveau modèle coûte 39,99 £, soit environ 5 £ de plus que l'ancien."
   },
   {
    "q": "Why does Emma choose the refund?",
    "opts": [
     "She doesn't like the newer model",
     "She wants to save money this month",
     "The shop has no more kettles",
     "Her manager told her to"
    ],
    "correct": 1,
    "whyFr": "Elle dit être serrée côté budget ce mois-ci."
   },
   {
    "q": "What should Emma do if the refund hasn't arrived by next Friday?",
    "opts": [
     "Come back with her bank statement",
     "Write to Mrs Patel",
     "Phone the shop",
     "Wait another week"
    ],
    "correct": 2,
    "whyFr": "Tom dit d'appeler le numéro indiqué sur le reçu de remboursement."
   }
  ],
  "expressions": [
   {
    "en": "I'm afraid I've lost it",
    "fr": "Je crains de l'avoir perdu"
   },
   {
    "en": "proof of purchase",
    "fr": "preuve d'achat"
   },
   {
    "en": "it's definitely faulty",
    "fr": "il est clairement défectueux"
   },
   {
    "en": "I'm on a tight budget",
    "fr": "j'ai un budget serré"
   },
   {
    "en": "just in case",
    "fr": "au cas où"
   }
  ],
  "level": "B1"
 },
 {
  "id": 7,
  "title": "Planning a Weekend Away",
  "topicFr": "Organiser un week-end entre amis",
  "situationFr": "Lucy et son ami Mark organisent un week-end en novembre. Ils ne sont pas d'accord sur le budget ni sur les activités.",
  "speakers": [
   {
    "name": "Lucy",
    "voice": "f"
   },
   {
    "name": "Mark",
    "voice": "m"
   }
  ],
  "lines": [
   {
    "s": 0,
    "t": "Right, Mark, we've got to decide about the trip. I was thinking Edinburgh for the weekend of the fourteenth."
   },
   {
    "s": 1,
    "t": "Edinburgh? That's a long way, Lucy. How much would the train cost?"
   },
   {
    "s": 0,
    "t": "I've checked. It's about sixty pounds return if we book today. And a hotel is around seventy a night."
   },
   {
    "s": 1,
    "t": "Seventy a night? Hang on, that's a lot. I thought we'd said a hundred and fifty each, in total."
   },
   {
    "s": 0,
    "t": "Well, yes, but that includes food, doesn't it? We'd be over budget."
   },
   {
    "choice": {
     "s": 1,
     "promptFr": "À toi de jouer : que proposes-tu ?",
     "options": [
      {
       "t": "Exactly, it's too expensive. Why don't we go somewhere closer, like York?",
       "ok": true,
       "whyFr": "Il est d'accord avec le problème de budget et propose une vraie solution."
      },
      {
       "t": "I don't care about money. Let's just go and pay with my credit card.",
       "ok": false,
       "whyFr": "Ignore le budget convenu et n'est pas une solution raisonnable."
      },
      {
       "t": "No, Edinburgh is boring. I've never liked Scotland.",
       "ok": false,
       "whyFr": "Impoli et non argumenté ; cela ne répond pas à la question du budget."
      }
     ]
    }
   },
   {
    "s": 0,
    "t": "York? Hmm, I've never been there. What would we do?"
   },
   {
    "s": 1,
    "t": "Loads of things. The train is only thirty-five pounds return, and there's a hostel for twenty-five a night."
   },
   {
    "s": 0,
    "t": "A hostel? I'd rather not share a room with strangers, you know. I haven't slept well in those places."
   },
   {
    "s": 1,
    "t": "They've got private twin rooms as well. It's forty a night, so twenty each. That's cheaper than the hotel by miles."
   },
   {
    "s": 0,
    "t": "Okay, that's not bad. But what about activities? I really want to see a museum and do a ghost tour."
   },
   {
    "s": 1,
    "t": "A ghost tour? Isn't that a bit silly? I'd prefer to walk along the old city walls, and maybe go to a football match."
   },
   {
    "s": 0,
    "t": "A football match? Mark, I'd be bored to death! And the tour's only fifteen pounds."
   },
   {
    "choice": {
     "s": 1,
     "promptFr": "À toi de jouer : comment trouves-tu un compromis ?",
     "options": [
      {
       "t": "Fine, you do what you want and I'll stay in the hostel all weekend.",
       "ok": false,
       "whyFr": "Boudeur et contre-productif : cela n'aide pas à planifier un week-end ensemble."
      },
      {
       "t": "Look, we could skip the football and do the ghost tour on Saturday night. Then we'd walk the walls on Sunday.",
       "ok": true,
       "whyFr": "Un vrai compromis : chacun fait une activité, avec un plan clair."
      },
      {
       "t": "A ghost tour is stupid, so we'll do my plan or nothing.",
       "ok": false,
       "whyFr": "Autoritaire : ce n'est pas un compromis."
      }
     ]
    }
   },
   {
    "s": 0,
    "t": "That's fair. The walls are free, aren't they? That helps the budget."
   },
   {
    "s": 1,
    "t": "Yes, they are. And the Viking museum is fourteen pounds, so you'd get your museum too."
   },
   {
    "s": 0,
    "t": "Oh, I'd love that. So, how much is that altogether? Let me add it up."
   },
   {
    "s": 1,
    "t": "Train thirty-five, room twenty, tour fifteen, museum fourteen. That's eighty-four, plus the second night's room, so around one hundred and four."
   },
   {
    "s": 0,
    "t": "Then we'd still have about forty-five pounds each for food. It should be enough if we don't eat out every time."
   },
   {
    "s": 1,
    "t": "We could buy sandwiches for lunch. And on Saturday evening I'd like a proper dinner, my treat."
   },
   {
    "s": 0,
    "t": "Really? That's very kind of you. But only if it isn't too expensive!"
   },
   {
    "s": 1,
    "t": "Don't worry. I know a nice pub that does a pie and a drink for twelve pounds."
   },
   {
    "s": 0,
    "t": "Sounds perfect. Shall I book the train tonight, then? The cheap tickets sell out quickly."
   },
   {
    "s": 1,
    "t": "Yes, please. Take the ten-fifteen on Saturday morning, so we arrive before lunch."
   },
   {
    "s": 0,
    "t": "Done. If I find the tickets on my phone, I'll send you the details."
   },
   {
    "choice": {
     "s": 1,
     "promptFr": "À toi de jouer : que réponds-tu pour conclure ?",
     "options": [
      {
       "t": "Don't bother. I'll probably change my mind tomorrow anyway.",
       "ok": false,
       "whyFr": "Peu fiable et décourageant après avoir fait un plan ensemble."
      },
      {
       "t": "Why are you telling me? It's not my problem.",
       "ok": false,
       "whyFr": "Très impoli : c'est un voyage à deux."
      },
      {
       "t": "Brilliant. I'll book the hostel room now and pay you back for the train on Friday.",
       "ok": true,
       "whyFr": "Il prend sa part de l'organisation et propose de rembourser : logique et coopératif."
      }
     ]
    }
   },
   {
    "s": 0,
    "t": "Great! This is going to be a lot of fun. Thanks for being flexible, Mark."
   },
   {
    "s": 1,
    "t": "No problem. We just had to meet in the middle!"
   },
   {
    "s": 0,
    "t": "And I'll bring some snacks for the train, so we don't have to buy any."
   }
  ],
  "questions": [
   {
    "q": "Why is Lucy's first idea a problem?",
    "opts": [
     "It is too far to travel by train",
     "It would cost more than their budget",
     "Mark has been to Edinburgh before",
     "The hotels are all full"
    ],
    "correct": 1,
    "whyFr": "Le train et l'hôtel dépassent les 150 £ prévus, nourriture comprise."
   },
   {
    "q": "Why doesn't Lucy want to stay in the hostel at first?",
    "opts": [
     "It is too far from the station",
     "She wants to save money",
     "She doesn't want to share a room with strangers",
     "It doesn't have a kitchen"
    ],
    "correct": 2,
    "whyFr": "Elle ne veut pas partager une chambre avec des inconnus."
   },
   {
    "q": "What do Mark and Lucy decide about the activities?",
    "opts": [
     "Football on Saturday, museum on Sunday",
     "Ghost tour on Saturday night, city walls on Sunday",
     "Only the museum",
     "Only free activities"
    ],
    "correct": 1,
    "whyFr": "Mark renonce au match ; la visite fantôme est samedi soir et les remparts dimanche."
   },
   {
    "q": "How much will the room cost each person for one night?",
    "opts": [
     "Twenty pounds",
     "Forty pounds",
     "Twenty-five pounds",
     "Seventy pounds"
    ],
    "correct": 0,
    "whyFr": "La chambre twin coûte 40 £ la nuit, donc 20 £ chacun."
   },
   {
    "q": "What can we guess about Mark by the end of the conversation?",
    "opts": [
     "He is angry with Lucy",
     "He wants to cancel the trip",
     "He is happy to compromise and even pays for dinner",
     "He prefers to travel alone"
    ],
    "correct": 2,
    "whyFr": "Il accepte le compromis et offre le dîner du samedi soir."
   }
  ],
  "expressions": [
   {
    "en": "We'd be over budget",
    "fr": "On dépasserait le budget"
   },
   {
    "en": "Hang on",
    "fr": "Attends un instant"
   },
   {
    "en": "I'd rather not",
    "fr": "Je préférerais ne pas"
   },
   {
    "en": "my treat",
    "fr": "c'est moi qui offre"
   },
   {
    "en": "meet in the middle",
    "fr": "trouver un compromis"
   }
  ],
  "level": "B1"
 },
 {
  "id": 8,
  "title": "A Call About a Part-Time Job",
  "topicFr": "Appel pour un emploi à temps partiel",
  "situationFr": "Ali appelle Karen, conseillère au Pôle emploi local, au sujet d'une annonce pour un poste à temps partiel dans une jardinerie.",
  "speakers": [
   {
    "name": "Karen",
    "voice": "f"
   },
   {
    "name": "Ali",
    "voice": "m"
   }
  ],
  "lines": [
   {
    "s": 0,
    "t": "Good morning, Westfield Job Centre, Karen speaking. How can I help?"
   },
   {
    "s": 1,
    "t": "Good morning. I'm calling about the part-time job at the garden centre. I saw it on your website yesterday."
   },
   {
    "s": 0,
    "t": "Ah yes, the sales assistant position at Greenfield. Are you interested in applying?"
   },
   {
    "s": 1,
    "t": "Yes, I am. Could you tell me a bit more about the working hours?"
   },
   {
    "s": 0,
    "t": "Of course. It's twenty hours a week, from Thursday to Sunday, usually from nine to two."
   },
   {
    "choice": {
     "s": 1,
     "promptFr": "À toi de jouer : que réponds-tu ?",
     "options": [
      {
       "t": "That's perfect for me. I study during the week. And what about the pay?",
       "ok": true,
       "whyFr": "Il confirme que l'horaire lui convient et pose la question suivante : le salaire."
      },
      {
       "t": "Twenty hours? Nobody works that little. I want a full-time job.",
       "ok": false,
       "whyFr": "Contradictoire avec l'annonce (temps partiel) et impoli."
      },
      {
       "t": "I don't know. Tell me about the pay first and then I'll decide about everything.",
       "ok": false,
       "whyFr": "Trop brusque et sans réaction à l'information donnée."
      }
     ]
    }
   },
   {
    "s": 0,
    "t": "It's eleven pounds forty-four an hour, which is the national living wage. You'd get paid monthly, on the last Friday."
   },
   {
    "s": 1,
    "t": "I see. And is there any chance of extra hours at busy times, like Christmas?"
   },
   {
    "s": 0,
    "t": "Yes, there is. In December they usually need people on weekdays too, so you could earn a bit more."
   },
   {
    "s": 1,
    "t": "That would be great. Do I need any experience for this kind of job?"
   },
   {
    "s": 0,
    "t": "They'd like at least six months in customer service or retail. Have you worked in a shop before?"
   },
   {
    "choice": {
     "s": 1,
     "promptFr": "À toi de jouer : que réponds-tu ?",
     "options": [
      {
       "t": "Not exactly, but I have worked in a café for a year, so I'm used to serving customers.",
       "ok": true,
       "whyFr": "Honnête et il met en avant une expérience proche et pertinente."
      },
      {
       "t": "Yes, I managed a huge supermarket for ten years. I know everything.",
       "ok": false,
       "whyFr": "Exagération peu crédible, qui ne correspond pas à son profil de candidat."
      },
      {
       "t": "No, and I don't want to learn. I just need money.",
       "ok": false,
       "whyFr": "Mauvaise attitude pour un recruteur ; aucune motivation."
      }
     ]
    }
   },
   {
    "s": 0,
    "t": "That sounds good. A café job counts as customer service, so you'd meet the requirements."
   },
   {
    "s": 1,
    "t": "Oh, that's a relief. I wasn't sure it would count."
   },
   {
    "s": 0,
    "t": "It definitely does. Now, you'd need to send in your CV and a short cover letter by next Wednesday."
   },
   {
    "s": 1,
    "t": "Is it possible to send them by email? I'm afraid I haven't got a printer at the moment."
   },
   {
    "s": 0,
    "t": "Yes, that's fine. Send them to jobs at westfield dot org dot uk. I'll give you the reference number: GC forty-seven."
   },
   {
    "s": 1,
    "t": "Sorry, could you repeat that? G, C, and then what?"
   },
   {
    "s": 0,
    "t": "G, C, four, seven. GC forty-seven. Put it in the subject line of your email."
   },
   {
    "s": 1,
    "t": "Got it, thank you. And what happens after that?"
   },
   {
    "s": 0,
    "t": "If they like your application, they'll invite you for an interview. They're holding them next Tuesday, at half past ten, with Mrs Reed."
   },
   {
    "s": 1,
    "t": "Tuesday at ten-thirty. I'm free then, so that's no problem."
   },
   {
    "s": 0,
    "t": "Excellent. I can add your name to the list now, if you like. Then they'll expect you."
   },
   {
    "choice": {
     "s": 1,
     "promptFr": "À toi de jouer : que réponds-tu ?",
     "options": [
      {
       "t": "Don't bother. I'll just turn up and see if anybody is there.",
       "ok": false,
       "whyFr": "Peu professionnel et risqué : il faut s'inscrire à l'entretien."
      },
      {
       "t": "Yes, please, that would be very helpful. My name is Ali Hassan.",
       "ok": true,
       "whyFr": "Réponse polie et adaptée : il accepte l'offre et donne son nom."
      },
      {
       "t": "Why would I want that? I haven't even sent anything yet.",
       "ok": false,
       "whyFr": "Agressif et ne remercie pas Karen pour son aide."
      }
     ]
    }
   },
   {
    "s": 0,
    "t": "Thank you, Ali. How do you spell your surname?"
   },
   {
    "s": 1,
    "t": "H, A, double S, A, N."
   },
   {
    "s": 0,
    "t": "Perfect. I've added you. Don't forget to bring some ID and arrive ten minutes early."
   },
   {
    "s": 1,
    "t": "I won't. Thank you very much for your help, Karen."
   },
   {
    "s": 0,
    "t": "You're welcome. Good luck with it!"
   }
  ],
  "questions": [
   {
    "q": "When would Ali be working at the garden centre?",
    "opts": [
     "Monday to Wednesday, all day",
     "Thursday to Sunday, usually from nine to two",
     "Every evening from five",
     "Only on weekends in December"
    ],
    "correct": 1,
    "whyFr": "Karen dit : vingt heures par semaine, du jeudi au dimanche, de 9 h à 14 h."
   },
   {
    "q": "What is the hourly pay, and when is it paid?",
    "opts": [
     "Ten pounds, every week",
     "Eleven forty-four, on the last Friday of the month",
     "Eleven forty-four, every week",
     "Twelve pounds, on the first Monday"
    ],
    "correct": 1,
    "whyFr": "11,44 £ de l'heure, payé mensuellement le dernier vendredi."
   },
   {
    "q": "Why is Ali relieved when Karen talks about his experience?",
    "opts": [
     "He has worked in a shop for years",
     "He thought his café job might not count",
     "He doesn't need a CV",
     "The job has no requirements"
    ],
    "correct": 1,
    "whyFr": "Il n'était pas sûr que son travail en café compte comme service client."
   },
   {
    "q": "What must Ali put in the subject line of his email?",
    "opts": [
     "His surname",
     "Mrs Reed",
     "The date of the interview",
     "The reference GC47"
    ],
    "correct": 3,
    "whyFr": "Karen épelle la référence GC47 et demande de la mettre dans l'objet du mail."
   },
   {
    "q": "What can we infer about Ali's situation?",
    "opts": [
     "He is probably a student who is free during the week",
     "He already works full-time",
     "He lives far from the garden centre",
     "He has already had an interview"
    ],
    "correct": 0,
    "whyFr": "Il dit étudier pendant la semaine, donc un emploi du jeudi au dimanche lui convient."
   }
  ],
  "expressions": [
   {
    "en": "I'm calling about...",
    "fr": "J'appelle au sujet de..."
   },
   {
    "en": "national living wage",
    "fr": "salaire minimum légal"
   },
   {
    "en": "customer service",
    "fr": "service client"
   },
   {
    "en": "Could you repeat that?",
    "fr": "Pourriez-vous répéter ?"
   },
   {
    "en": "Good luck with it",
    "fr": "Bonne chance"
   }
  ],
  "level": "B1"
 },
 {
  "id": 9,
  "title": "Advice at the Pharmacy",
  "topicFr": "Demander conseil au pharmacien",
  "situationFr": "Hannah, enrhumée et avec mal à la gorge, demande conseil à M. Jones, pharmacien. Elle doit bien comprendre les instructions.",
  "speakers": [
   {
    "name": "Mr Jones",
    "voice": "m"
   },
   {
    "name": "Hannah",
    "voice": "f"
   }
  ],
  "lines": [
   {
    "s": 0,
    "t": "Good afternoon. What can I do for you?"
   },
   {
    "s": 1,
    "t": "Hello. I've got a terrible sore throat and a bit of a cough. I've also had a headache since Monday."
   },
   {
    "s": 0,
    "t": "I'm sorry to hear that. Do you have a temperature?"
   },
   {
    "s": 1,
    "t": "I don't think so. I took it this morning and it was thirty-seven point five."
   },
   {
    "s": 0,
    "t": "That's fine, it's nearly normal. Are you taking any other medicine at the moment?"
   },
   {
    "choice": {
     "s": 1,
     "promptFr": "À toi de jouer : que réponds-tu ?",
     "options": [
      {
       "t": "Just a vitamin tablet in the morning. Oh, and I can't take aspirin because I'm allergic to it.",
       "ok": true,
       "whyFr": "Réponse précise et utile : elle mentionne une allergie importante pour le pharmacien."
      },
      {
       "t": "No idea. Give me the strongest thing you have.",
       "ok": false,
       "whyFr": "Dangereux et peu coopératif : le pharmacien a besoin de détails."
      },
      {
       "t": "Why do you ask? That is none of your business.",
       "ok": false,
       "whyFr": "Impoli : la question est nécessaire pour sa sécurité."
      }
     ]
    }
   },
   {
    "s": 0,
    "t": "Thank you for telling me. In that case, I wouldn't recommend ibuprofen either, as it's similar. Paracetamol should be fine."
   },
   {
    "s": 1,
    "t": "Okay. How many should I take? I never remember the dose."
   },
   {
    "s": 0,
    "t": "Take two tablets, five hundred milligrams each, every four to six hours. But never more than eight tablets in twenty-four hours."
   },
   {
    "s": 1,
    "t": "Sorry, so that's two at a time, and eight at most per day. Is that right?"
   },
   {
    "s": 0,
    "t": "Exactly. And please don't take any cold remedies with paracetamol in them, or you could take too much without realising."
   },
   {
    "s": 1,
    "t": "Right, I'll check the label. What about my throat? It really hurts when I swallow."
   },
   {
    "s": 0,
    "t": "I'd suggest these lozenges. They cost four pounds fifty. Let one dissolve slowly in your mouth, every three hours."
   },
   {
    "choice": {
     "s": 1,
     "promptFr": "À toi de jouer : que réponds-tu ?",
     "options": [
      {
       "t": "Okay. Should I take them before or after meals?",
       "ok": true,
       "whyFr": "Question pertinente pour bien comprendre le mode d'emploi."
      },
      {
       "t": "I will eat the whole box tonight, then.",
       "ok": false,
       "whyFr": "Dangereux et contraire aux instructions données."
      },
      {
       "t": "Lozenges are for children. I want something else.",
       "ok": false,
       "whyFr": "Faux et sans justification ; elle rejette le conseil sans raison."
      }
     ]
    }
   },
   {
    "s": 0,
    "t": "It doesn't matter much, but they work best after a meal. Also, drink plenty of warm water with honey."
   },
   {
    "s": 1,
    "t": "That sounds nice. Will the tablets make me sleepy? I need to drive to work tomorrow."
   },
   {
    "s": 0,
    "t": "No, paracetamol doesn't normally make you drowsy, so it's fine to drive. The cough syrup would, though, so don't take it before driving."
   },
   {
    "s": 1,
    "t": "Then I'll skip the syrup. I'll just use the tablets and the lozenges."
   },
   {
    "s": 0,
    "t": "Good idea. Now, if you don't feel better in five days, you should see your doctor."
   },
   {
    "s": 1,
    "t": "What if I get a high temperature?"
   },
   {
    "s": 0,
    "t": "If it goes above thirty-eight degrees, or if you have trouble breathing, go to the doctor straight away."
   },
   {
    "s": 1,
    "t": "Understood. Is there anything I should avoid?"
   },
   {
    "s": 0,
    "t": "Try not to smoke, and get plenty of rest. If you can stay at home for a day or two, it'll help."
   },
   {
    "s": 1,
    "t": "I'll work from home tomorrow, then. How much is the paracetamol?"
   },
   {
    "s": 0,
    "t": "It's two pounds ten for sixteen tablets. So with the lozenges, that makes six pounds sixty."
   },
   {
    "s": 1,
    "t": "Here you are. Could you write the dose on the box, in case I forget?"
   },
   {
    "s": 0,
    "t": "Certainly. I'll write: two tablets, every four to six hours, maximum eight a day."
   },
   {
    "choice": {
     "s": 1,
     "promptFr": "À toi de jouer : que réponds-tu pour terminer ?",
     "options": [
      {
       "t": "Thanks very much, you've been really helpful. I feel much better already.",
       "ok": false,
       "whyFr": "Illogique : elle n'a encore rien pris, donc elle ne peut pas se sentir mieux."
      },
      {
       "t": "That's all I need to know. Have a nice day.",
       "ok": false,
       "whyFr": "Trop sec : elle ne remercie pas le pharmacien pour ses explications."
      },
      {
       "t": "Perfect, thank you. I'll call you if I have any more questions.",
       "ok": true,
       "whyFr": "Poli et logique : elle remercie et laisse la porte ouverte."
      }
     ]
    }
   },
   {
    "s": 0,
    "t": "Of course, anytime. Look after yourself, and I hope you're better soon."
   },
   {
    "s": 1,
    "t": "Thanks, goodbye!"
   }
  ],
  "questions": [
   {
    "q": "Why doesn't Mr Jones recommend ibuprofen?",
    "opts": [
     "It is too expensive",
     "Hannah is allergic to aspirin and ibuprofen is similar",
     "It makes people sleepy",
     "The shop has none"
    ],
    "correct": 1,
    "whyFr": "Elle est allergique à l'aspirine ; l'ibuprofène est un médicament similaire."
   },
   {
    "q": "What is the maximum number of paracetamol tablets Hannah can take per day?",
    "opts": [
     "Six",
     "Ten",
     "Eight",
     "Sixteen"
    ],
    "correct": 2,
    "whyFr": "Deux comprimés toutes les 4 à 6 heures, au maximum huit en 24 heures."
   },
   {
    "q": "Why will Hannah not take the cough syrup?",
    "opts": [
     "It is too expensive",
     "It would make her drowsy and she has to drive",
     "The pharmacist didn't recommend any",
     "She doesn't like the taste"
    ],
    "correct": 1,
    "whyFr": "Le sirop rend somnolent et elle doit conduire pour aller au travail."
   },
   {
    "q": "When should Hannah go to the doctor?",
    "opts": [
     "If she still feels ill after one day",
     "If she coughs at night",
     "If she has no better after five days or a temperature over 38",
     "If she wants stronger medicine"
    ],
    "correct": 2,
    "whyFr": "Après cinq jours sans amélioration, ou au-dessus de 38 degrés, ou avec difficultés respiratoires."
   },
   {
    "q": "How much does Hannah pay in total?",
    "opts": [
     "Four pounds fifty",
     "Two pounds ten",
     "Six pounds sixty",
     "Seven pounds"
    ],
    "correct": 2,
    "whyFr": "Paracétamol 2,10 £ + pastilles 4,50 £ = 6,60 £."
   }
  ],
  "expressions": [
   {
    "en": "a sore throat",
    "fr": "un mal de gorge"
   },
   {
    "en": "Are you taking any other medicine?",
    "fr": "Prenez-vous d'autres médicaments ?"
   },
   {
    "en": "every four to six hours",
    "fr": "toutes les 4 à 6 heures"
   },
   {
    "en": "it makes you drowsy",
    "fr": "ça rend somnolent"
   },
   {
    "en": "Look after yourself",
    "fr": "Prenez soin de vous"
   }
  ],
  "level": "B1"
 },
 {
  "id": 10,
  "title": "Joining the Leisure Centre",
  "topicFr": "Abonnement à une salle de sport",
  "situationFr": "Priya se renseigne à l'accueil du Riverside Leisure Centre pour s'inscrire. Josh, le réceptionniste, lui explique les tarifs et les conditions de résiliation.",
  "speakers": [
   {
    "name": "Josh",
    "voice": "m"
   },
   {
    "name": "Priya",
    "voice": "f"
   }
  ],
  "lines": [
   {
    "s": 0,
    "t": "Hi, welcome to Riverside Leisure Centre. Can I help you?"
   },
   {
    "s": 1,
    "t": "Hello. I'm thinking of joining, but I'd like some information first."
   },
   {
    "s": 0,
    "t": "Of course. Are you looking for a gym membership, or would you like to use the pool and the classes as well?"
   },
   {
    "s": 1,
    "t": "I'd like everything, if possible. I want to swim twice a week and try some yoga classes."
   },
   {
    "s": 0,
    "t": "Then our full membership is the best one. It's thirty-two pounds a month, and it includes the gym, the pool and all classes."
   },
   {
    "choice": {
     "s": 1,
     "promptFr": "À toi de jouer : que réponds-tu ?",
     "options": [
      {
       "t": "That's quite a lot. Are there any discounts for students?",
       "ok": true,
       "whyFr": "Elle exprime poliment son inquiétude sur le prix et pose une question pertinente."
      },
      {
       "t": "Thirty-two pounds? You must be joking. I'll never pay that.",
       "ok": false,
       "whyFr": "Impoli et exagéré ; elle n'essaie pas de trouver une solution."
      },
      {
       "t": "Great. Where do I sign? I don't need to know anything else.",
       "ok": false,
       "whyFr": "Imprudent : elle voulait des informations avant de s'engager."
      }
     ]
    }
   },
   {
    "s": 0,
    "t": "Yes, we do. With a valid student card, you get fifteen per cent off, so it comes to twenty-seven pounds twenty."
   },
   {
    "s": 1,
    "t": "That's better. Is there a joining fee?"
   },
   {
    "s": 0,
    "t": "Normally it's twenty pounds, but we're not charging it this month, so you'd save that."
   },
   {
    "s": 1,
    "t": "Lovely. And how long is the contract? I don't want to be stuck if I'm too busy."
   },
   {
    "s": 0,
    "t": "The standard contract is twelve months. If you'd like more flexibility, there's a rolling monthly option, but it costs thirty-nine pounds."
   },
   {
    "s": 1,
    "t": "Hmm, that's a big difference. What happens if I want to cancel the twelve-month one early?"
   },
   {
    "s": 0,
    "t": "After the first three months you can cancel at any time, but you'd have to give us thirty days' notice in writing."
   },
   {
    "s": 1,
    "t": "In writing? Does an email count?"
   },
   {
    "s": 0,
    "t": "Yes, an email is fine, as long as it's sent from the address you gave us when you joined."
   },
   {
    "choice": {
     "s": 1,
     "promptFr": "À toi de jouer : que demandes-tu ensuite ?",
     "options": [
      {
       "t": "Good. Can I bring my dog into the pool with me?",
       "ok": false,
       "whyFr": "Hors sujet et peu sérieux : cela ne suit pas la logique de la conversation sur la résiliation."
      },
      {
       "t": "Is it possible to freeze the membership if I go away for a few weeks?",
       "ok": true,
       "whyFr": "Question précise et naturelle sur la possibilité de suspendre l'abonnement."
      },
      {
       "t": "I will cancel it tomorrow, so it doesn't matter.",
       "ok": false,
       "whyFr": "Illogique : elle n'est même pas encore inscrite."
      }
     ]
    }
   },
   {
    "s": 0,
    "t": "Yes, you can freeze it for up to three months. It costs five pounds a month while it's frozen."
   },
   {
    "s": 1,
    "t": "That's reasonable. Can I have a look around before I decide? I'd like to see the pool."
   },
   {
    "s": 0,
    "t": "Sure. You can also come for a free day pass this week, if you'd like to try out the classes."
   },
   {
    "s": 1,
    "t": "A free pass? That would be great. When is the best time to go? I hate crowds."
   },
   {
    "s": 0,
    "t": "It's busiest between five and seven in the evening, so I'd suggest the morning or the early afternoon."
   },
   {
    "s": 1,
    "t": "Okay. And what time does the pool open on Saturdays?"
   },
   {
    "s": 0,
    "t": "Eight o'clock, and it closes at six. The yoga class on Saturday is at ten, and it's very popular, so you need to book."
   },
   {
    "s": 1,
    "t": "Could I book it now?"
   },
   {
    "s": 0,
    "t": "Of course. I just need your name and a phone number."
   },
   {
    "s": 1,
    "t": "Priya Shah, and my number is oh-seven-eight-one-two, nine-eight-seven, six-five-four."
   },
   {
    "s": 0,
    "t": "Thank you. You're booked in for Saturday at ten, and I'll print your day pass now."
   },
   {
    "choice": {
     "s": 1,
     "promptFr": "À toi de jouer : que réponds-tu pour finir ?",
     "options": [
      {
       "t": "Thanks, Josh. If I like it, I'll come back on Saturday and join straight away.",
       "ok": false,
       "whyFr": "Trop catégorique : elle n'a pas encore décidé et hésitait sur le prix et le contrat."
      },
      {
       "t": "Thanks, Josh. I'll see how it goes on Saturday, and then I'll decide about the membership.",
       "ok": true,
       "whyFr": "Réponse prudente et cohérente avec son hésitation."
      },
      {
       "t": "Whatever. I'm sure this place is rubbish anyway.",
       "ok": false,
       "whyFr": "Grossier et contradictoire avec son intérêt pour l'inscription."
      }
     ]
    }
   },
   {
    "s": 0,
    "t": "No problem. Here's your pass. Just show it at the front desk on Saturday."
   },
   {
    "s": 1,
    "t": "Great, thanks. See you then!"
   }
  ],
  "questions": [
   {
    "q": "How much would Priya pay per month with the student discount?",
    "opts": [
     "Twenty-seven pounds twenty",
     "Thirty-two pounds",
     "Thirty-nine pounds",
     "Twenty pounds"
    ],
    "correct": 0,
    "whyFr": "15 % de réduction sur 32 £ donne 27,20 £."
   },
   {
    "q": "What is the advantage of the monthly rolling contract?",
    "opts": [
     "It is cheaper",
     "It is more flexible but costs thirty-nine pounds",
     "It includes a free pass for a friend",
     "It has no joining fee ever"
    ],
    "correct": 1,
    "whyFr": "Elle est plus flexible, mais coûte 39 £ par mois."
   },
   {
    "q": "What are the conditions for cancelling the twelve-month contract?",
    "opts": [
     "Only in the first month, by phone",
     "After three months, with thirty days' notice in writing",
     "At any time, without notice",
     "Never, it is impossible"
    ],
    "correct": 1,
    "whyFr": "Après les trois premiers mois, avec un préavis écrit de 30 jours (un e-mail suffit)."
   },
   {
    "q": "Why does Josh suggest going in the morning or early afternoon?",
    "opts": [
     "The pool is closed in the evening",
     "It's the cheapest time",
     "Priya doesn't like crowds, and evenings are busiest",
     "The yoga class is only then"
    ],
    "correct": 2,
    "whyFr": "Priya déteste la foule, et c'est le plus fréquenté entre 17 h et 19 h."
   },
   {
    "q": "What will Priya probably do on Saturday?",
    "opts": [
     "Cancel her membership",
     "Take a yoga class at ten with a free day pass",
     "Swim at six in the evening",
     "Pay the joining fee"
    ],
    "correct": 1,
    "whyFr": "Elle a réservé le cours de yoga de 10 h et utilise un pass gratuit."
   }
  ],
  "expressions": [
   {
    "en": "a joining fee",
    "fr": "des frais d'inscription"
   },
   {
    "en": "thirty days' notice in writing",
    "fr": "un préavis écrit de 30 jours"
   },
   {
    "en": "to freeze a membership",
    "fr": "suspendre un abonnement"
   },
   {
    "en": "a day pass",
    "fr": "un pass à la journée"
   },
   {
    "en": "It's busiest between five and seven",
    "fr": "C'est le plus fréquenté entre 17 h et 19 h"
   }
  ],
  "level": "B1"
 }
];
