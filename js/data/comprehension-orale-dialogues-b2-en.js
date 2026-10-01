// The Roots — Compréhension orale (Anglais, B2) : dialogues du quotidien, longs et interactifs (voix de synthèse du téléphone).
export const COMPREHENSION_ORALE_B2_EN = [
 {
  "id": 1,
  "title": "Rent Rise and Repairs",
  "topicFr": "Négocier loyer et réparations",
  "situationFr": "Claire, locataire depuis quatre ans, rencontre son propriétaire David pour discuter d'une hausse de loyer et de réparations en retard.",
  "speakers": [
   {
    "name": "Claire",
    "voice": "f"
   },
   {
    "name": "David",
    "voice": "m"
   }
  ],
  "lines": [
   {
    "s": 1,
    "t": "Thanks for coming in, Claire. I'll cut to the chase: the agency has advised me to put the rent up from 950 to 1,050 a month from January."
   },
   {
    "s": 0,
    "t": "That's over ten percent, David. I'd have thought you'd give me a bit more warning than three months."
   },
   {
    "s": 1,
    "t": "I know it's a lot, and I did argue for a smaller rise with the agency, but they say rents in this postcode went up eight percent last year."
   },
   {
    "s": 0,
    "t": "Eight percent across the board, perhaps, but I'd have expected a tenant in my position to be treated a bit differently."
   },
   {
    "s": 1,
    "t": "Well, the notice is perfectly legal, but I take your point. Prices have gone through the roof, and my mortgage has jumped as well."
   },
   {
    "s": 0,
    "t": "I get that, honestly. But I've been here for four years, and I've never once paid late."
   },
   {
    "s": 1,
    "t": "True, and that's exactly why I wanted to talk face to face rather than just send you a letter."
   },
   {
    "choice": {
     "s": 0,
     "promptFr": "À toi de jouer : que réponds-tu ?",
     "options": [
      {
       "t": "I appreciate that. I'd be open to a modest increase, but I'd want to talk about the repairs at the same time.",
       "ok": true,
       "whyFr": "Diplomate : tu acceptes le principe tout en ouvrant la négociation sur un autre point."
      },
      {
       "t": "Fine, whatever you want. It's your flat, so I suppose I don't have much choice.",
       "ok": false,
       "whyFr": "Trop passif : tu abandonnes ta position de négociation avant même de commencer."
      },
      {
       "t": "A hundred pounds? That's outrageous! I'll report you to the council right now.",
       "ok": false,
       "whyFr": "Agressif et disproportionné : la menace ferme la discussion."
      }
     ]
    }
   },
   {
    "s": 1,
    "t": "Repairs? Go on, what have you got in mind?"
   },
   {
    "s": 0,
    "t": "The bathroom ceiling has been leaking since March. I've emailed the agency twice, and nobody's even sent someone round to look at it."
   },
   {
    "s": 1,
    "t": "Ah. I wasn't aware it had got that bad. I thought it was just a bit of condensation."
   },
   {
    "s": 0,
    "t": "It's a proper stain now, the size of a dinner plate, and the boiler cuts out whenever it drops below five degrees outside."
   },
   {
    "s": 1,
    "t": "Hang on, you said the agency never came. Are you sure they got your emails? Their system has been playing up since the summer."
   },
   {
    "s": 0,
    "t": "I've got the read receipts, David. Both times, in March and again in June. I can forward them if you'd like."
   },
   {
    "s": 1,
    "t": "If I'd known, I'd have sorted it out before the winter. Right, let me make a note."
   },
   {
    "s": 1,
    "t": "Suppose I get a plumber in by the end of the month. Would you be happy to accept the full increase then?"
   },
   {
    "choice": {
     "s": 0,
     "promptFr": "À toi de jouer : que réponds-tu ?",
     "options": [
      {
       "t": "No way. You should have fixed it ages ago, so I owe you nothing.",
       "ok": false,
       "whyFr": "Hostile et illogique : tu refuses toute hausse alors qu'il propose de réparer."
      },
      {
       "t": "Yes, absolutely, a hundred is perfect. I would never dare to disagree.",
       "ok": false,
       "whyFr": "Tu cèdes complètement alors que tu as des arguments à faire valoir."
      },
      {
       "t": "That would be a good start, but I think a hundred is steep. Could we meet halfway, say fifty, and revisit it in a year?",
       "ok": true,
       "whyFr": "Tu reconnais son geste, puis tu proposes un compromis chiffré et raisonnable."
      }
     ]
    }
   },
   {
    "s": 1,
    "t": "Fifty... that doesn't quite cover my costs, to be fair. Hmm."
   },
   {
    "s": 0,
    "t": "Look, the market's not crazy in this area. I checked: similar one-beds on Elm Road are going for about 980."
   },
   {
    "s": 1,
    "t": "Fair enough, but those don't have a garden, and you've got the parking space too."
   },
   {
    "s": 0,
    "t": "Which I'm happy to pay for, within reason. How about 1,000 from January, and I'll sign another twelve months?"
   },
   {
    "s": 1,
    "t": "Right, the parking space is rare around here, mind you, and the garden's been a big selling point for other viewers."
   },
   {
    "s": 0,
    "t": "I'm sure, but I'm the one who mows it, so I'd say that evens out."
   },
   {
    "s": 1,
    "t": "A guaranteed tenant for a year does count for something. Void periods cost me a fortune last time."
   },
   {
    "s": 1,
    "t": "Alright, if you'd rather have a longer contract, I could go to 1,000, provided the repairs are put in writing."
   },
   {
    "choice": {
     "s": 0,
     "promptFr": "À toi de jouer : que réponds-tu ?",
     "options": [
      {
       "t": "I don't trust writing things down. A handshake should be enough between us.",
       "ok": false,
       "whyFr": "Illogique : c'est lui qui demande un écrit, et un écrit te protège aussi."
      },
      {
       "t": "Great, then you'll refund me for all the months I've lived with the leak.",
       "ok": false,
       "whyFr": "Tu en demandes trop d'un coup, ce qui risque de faire échouer l'accord."
      },
      {
       "t": "Perfectly reasonable. Could you also add a deadline for the boiler to be serviced, so there's no ambiguity?",
       "ok": true,
       "whyFr": "Tu acceptes et tu précises l'accord avec une échéance claire."
      }
     ]
    }
   },
   {
    "s": 1,
    "t": "Sure, I'll add that. Say, the fifteenth of November for the boiler and the ceiling?"
   },
   {
    "s": 0,
    "t": "That works. And if the work drags on, would you consider knocking something off a month's rent?"
   },
   {
    "s": 1,
    "t": "Hmm, I wouldn't want to commit to that now. Let's say we'll discuss it if it happens."
   },
   {
    "s": 0,
    "t": "Fair. I'd rather have that in the email, though, just so we're both clear."
   },
   {
    "s": 1,
    "t": "Okay. I'll draft it tonight and send it over tomorrow morning."
   },
   {
    "s": 0,
    "t": "Brilliant. One last thing: the front door lock sticks. Might as well mention it while we're at it."
   },
   {
    "s": 1,
    "t": "You really don't miss a thing, do you? Fine, I'll have the locksmith look at it as well."
   },
   {
    "choice": {
     "s": 0,
     "promptFr": "À toi de jouer : que réponds-tu ?",
     "options": [
      {
       "t": "Good. It's about time you started doing your job as a landlord.",
       "ok": false,
       "whyFr": "Grossier : il vient de faire des concessions, ce reproche gâche l'ambiance."
      },
      {
       "t": "Right, but if nothing's done by November I'll move out immediately and tell everyone.",
       "ok": false,
       "whyFr": "Menace inutile après un accord à l'amiable."
      },
      {
       "t": "Thanks, David. I think we've both come away with something, and I'd hate it if we'd fallen out over this.",
       "ok": true,
       "whyFr": "Conclusion cordiale qui valorise le compromis (conditionnel passé avec if)."
      }
     ]
    }
   },
   {
    "s": 1,
    "t": "Likewise. Honestly, I'd rather keep a good tenant than win an argument."
   },
   {
    "s": 1,
    "t": "Let's shake on it, then. I'll be in touch tomorrow."
   }
  ],
  "questions": [
   {
    "q": "Why does David want to raise the rent?",
    "opts": [
     "His agency advised it and his mortgage has gone up",
     "The council has ordered an increase",
     "He has renovated the whole flat",
     "Claire has paid late several times"
    ],
    "correct": 0,
    "whyFr": "Il cite le conseil de l'agence et la hausse de son prêt immobilier."
   },
   {
    "q": "How does David react when Claire describes the leak?",
    "opts": [
     "He is angry that she complained",
     "He seems unaware of the problem and a little embarrassed",
     "He denies that there is any damage",
     "He says it is the agency's job, not his"
    ],
    "correct": 1,
    "whyFr": "« I wasn't aware it had got that bad » et « If I'd known » montrent qu'il ignorait la gravité."
   },
   {
    "q": "What does David mean by 'Void periods cost me a fortune last time'?",
    "opts": [
     "Tenants often damaged his flat",
     "He was charged high agency fees",
     "Having the flat empty between tenants is expensive for him",
     "He was fined for late repairs"
    ],
    "correct": 2,
    "whyFr": "Un logement vide ne rapporte rien : il préfère donc un locataire stable pour un an."
   },
   {
    "q": "What compromise do they finally reach?",
    "opts": [
     "Rent stays at 950 with no repairs",
     "Rent of 1,050 with a plumber next week",
     "Rent of 980 on a monthly contract",
     "Rent of 1,000 for twelve months, with repairs confirmed in writing"
    ],
    "correct": 3,
    "whyFr": "Claire propose 1 000 sur douze mois ; David accepte à condition d'écrire les réparations."
   },
   {
    "q": "Why does Claire insist on having the agreement in an email?",
    "opts": [
     "She doesn't trust David's memory at all",
     "She wants to avoid any misunderstanding later",
     "She plans to sell the agreement to the agency",
     "The law requires it for every tenant"
    ],
    "correct": 1,
    "whyFr": "« just so we're both clear » : elle veut une trace claire pour éviter toute ambiguïté."
   },
   {
    "q": "What can we infer from David's last remarks?",
    "opts": [
     "He values a reliable tenant more than getting his way",
     "He regrets agreeing to 1,000",
     "He is hiding something about the repairs",
     "He will probably raise the rent again soon"
    ],
    "correct": 0,
    "whyFr": "« I'd rather keep a good tenant than win an argument » montre qu'il privilégie la relation."
   }
  ],
  "expressions": [
   {
    "en": "I'll cut to the chase",
    "fr": "je vais droit au but"
   },
   {
    "en": "Prices have gone through the roof",
    "fr": "les prix ont explosé"
   },
   {
    "en": "I take your point",
    "fr": "je comprends votre argument"
   },
   {
    "en": "Could we meet halfway?",
    "fr": "pouvons-nous faire la moitié du chemin ?"
   },
   {
    "en": "to knock something off the rent",
    "fr": "faire un rabais sur le loyer"
   },
   {
    "en": "Let's shake on it",
    "fr": "topons-là"
   }
  ],
  "level": "B2"
 },
 {
  "id": 2,
  "title": "The Annual Review",
  "topicFr": "Entretien annuel avec manager",
  "situationFr": "Tom passe son entretien annuel avec sa responsable Helen. Ils parlent de sa charge de travail, d'un retour négatif et d'une promotion possible.",
  "speakers": [
   {
    "name": "Helen",
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
    "t": "Come in, Tom, take a seat. Thanks for getting your self-assessment in early. I read it over the weekend."
   },
   {
    "s": 1,
    "t": "No problem. I hope it wasn't too long. I got a bit carried away with the Lisbon project."
   },
   {
    "s": 0,
    "t": "It's good to be proud of it. Frankly, delivering that migration two weeks early and under budget was the highlight of our year."
   },
   {
    "s": 1,
    "t": "Thanks, though the team deserves most of the credit. Nobody had a weekend off in October."
   },
   {
    "s": 0,
    "t": "Credit is one thing, but burnout is another. I noticed you replying to emails at eleven at night more than once."
   },
   {
    "s": 1,
    "t": "Yes, that's fair. I'd have switched off if I could, but the deadlines kept moving."
   },
   {
    "s": 0,
    "t": "Which brings me to my main concern. You've logged around 140 hours of overtime since June, and I'm not sure that's sustainable."
   },
   {
    "choice": {
     "s": 1,
     "promptFr": "À toi de jouer : que réponds-tu ?",
     "options": [
      {
       "t": "It's fine, I thrive under pressure. Honestly, I could take on even more.",
       "ok": false,
       "whyFr": "Tu ignores l'inquiétude de ta manager, ce qui sonne comme un déni."
      },
      {
       "t": "Well, that's hardly my fault. If management had hired someone, I wouldn't have had to.",
       "ok": false,
       "whyFr": "Tu rejettes la faute sur la direction au lieu d'ouvrir le dialogue."
      },
      {
       "t": "You're right, and I'll be honest, I've been running on empty lately. I'd like to find a way to rebalance things.",
       "ok": true,
       "whyFr": "Honnête et constructif : tu reconnais le problème et tu cherches une solution."
      }
     ]
    }
   },
   {
    "s": 0,
    "t": "I appreciate the honesty. What do you think would help?"
   },
   {
    "s": 1,
    "t": "Well, for starters, we've been short-staffed since Priyanka left in July. Had we replaced her, I doubt we'd be having this conversation."
   },
   {
    "s": 0,
    "t": "That's fair. The budget freeze wasn't my decision, but I did push back, and I've now got approval for one hire in January."
   },
   {
    "s": 1,
    "t": "That's a relief. I can help with the interviews if you'd like."
   },
   {
    "s": 0,
    "t": "Let's see. Now, on feedback: a couple of colleagues said you can come across as a bit dismissive in meetings."
   },
   {
    "s": 1,
    "t": "Dismissive? Really? That surprises me. Do you have an example?"
   },
   {
    "s": 0,
    "t": "In the budget meeting on the ninth, you cut Lena off twice while she was presenting her forecast."
   },
   {
    "s": 1,
    "t": "Ah... I did. I thought her numbers were wrong, so I jumped in. I should've waited until she'd finished."
   },
   {
    "choice": {
     "s": 1,
     "promptFr": "À toi de jouer : que réponds-tu ?",
     "options": [
      {
       "t": "I was only being efficient. If people can't handle a bit of challenge, that's their problem.",
       "ok": false,
       "whyFr": "Défensif et dédaigneux : cela confirme exactement le reproche."
      },
      {
       "t": "Looking back, I can see how that landed badly. I'll raise concerns after people have finished, or in a follow-up chat.",
       "ok": true,
       "whyFr": "Tu prends le retour avec recul et tu proposes un changement concret."
      },
      {
       "t": "I don't recall that at all, so I'm sure the colleagues who complained are exaggerating.",
       "ok": false,
       "whyFr": "Tu nies et tu mets en doute tes collègues, ce qui est peu diplomate."
      }
     ]
    }
   },
   {
    "s": 0,
    "t": "Good, that's all I'm asking. Now, the part you were probably waiting for: the senior analyst role."
   },
   {
    "s": 1,
    "t": "I'll admit I've been hoping for it since the spring."
   },
   {
    "s": 0,
    "t": "I thought as much. You've been quietly collecting evidence for it all year, haven't you?"
   },
   {
    "s": 1,
    "t": "Guilty as charged. I even kept a spreadsheet of everything I've delivered since January."
   },
   {
    "s": 0,
    "t": "You're certainly a strong candidate. But the panel will want to see you leading people, not just projects."
   },
   {
    "s": 1,
    "t": "I've mentored two juniors this year. Isn't that leadership?"
   },
   {
    "s": 0,
    "t": "It's a start. I'd say it's about visibility, too. If you presented at the March board meeting, it would strengthen your case enormously."
   },
   {
    "s": 1,
    "t": "To be honest, I wish I'd been given that chance last quarter. I wasn't sure it was an option."
   },
   {
    "s": 0,
    "t": "Fair point, that's on me. I should have said so earlier."
   },
   {
    "s": 0,
    "t": "One more thing: the salary review. The company is capping rises at three percent this year."
   },
   {
    "s": 1,
    "t": "I see. I'd been hoping for something closer to six, given all the extra hours."
   },
   {
    "choice": {
     "s": 1,
     "promptFr": "À toi de jouer : que réponds-tu ?",
     "options": [
      {
       "t": "Three percent is an insult. I'll start looking elsewhere tomorrow.",
       "ok": false,
       "whyFr": "Ultimatum brutal : aucune diplomatie, et tu fermes la porte à la négociation."
      },
      {
       "t": "That's fine. I don't really care about money anyway.",
       "ok": false,
       "whyFr": "Illogique : tu viens d'évoquer six pour cent et les heures supplémentaires."
      },
      {
       "t": "I understand the constraints, but I'd like us to look at it again once the promotion decision is made. Would that be possible?",
       "ok": true,
       "whyFr": "Tu montres de la compréhension et tu demandes un réexamen réaliste."
      }
     ]
    }
   },
   {
    "s": 0,
    "t": "That's reasonable. I can't promise anything, but I'll flag it to HR."
   },
   {
    "s": 1,
    "t": "Thanks. And on the overtime, could we agree on a cap, say, six hours a week?"
   },
   {
    "s": 0,
    "t": "Let's try that until the new hire starts, then review it together."
   },
   {
    "s": 1,
    "t": "Works for me."
   },
   {
    "s": 0,
    "t": "Great. Anything else on your mind before we wrap up?"
   },
   {
    "choice": {
     "s": 1,
     "promptFr": "À toi de jouer : que réponds-tu ?",
     "options": [
      {
       "t": "Not really. Though I'd have preferred this meeting to be shorter, to be honest.",
       "ok": false,
       "whyFr": "Remarque inutilement négative à la fin d'un entretien positif."
      },
      {
       "t": "Only that the other managers should be more like you, because they're pretty useless.",
       "ok": false,
       "whyFr": "Flatterie qui critique des collègues : peu professionnel."
      },
      {
       "t": "Just that I really value this kind of open conversation. It's made things a lot clearer.",
       "ok": true,
       "whyFr": "Conclusion positive et sincère, adaptée à un entretien professionnel."
      }
     ]
    }
   },
   {
    "s": 0,
    "t": "Thank you, Tom. Let's schedule a follow-up for the fourteenth of January."
   }
  ],
  "questions": [
   {
    "q": "What is Helen's main concern about Tom?",
    "opts": [
     "He often arrives late to meetings",
     "His overtime hours may not be sustainable",
     "His project went over budget",
     "He doesn't mentor anyone"
    ],
    "correct": 1,
    "whyFr": "Elle cite environ 140 heures supplémentaires depuis juin."
   },
   {
    "q": "According to Tom, why has his workload been so heavy?",
    "opts": [
     "The company lost a major client",
     "He volunteered for extra projects",
     "A colleague left in July and wasn't replaced",
     "The Lisbon project was badly planned"
    ],
    "correct": 2,
    "whyFr": "« short-staffed since Priyanka left in July »."
   },
   {
    "q": "What did Tom do in the budget meeting on the ninth?",
    "opts": [
     "He arrived late",
     "He left before the end",
     "He refused to present",
     "He interrupted Lena twice"
    ],
    "correct": 3,
    "whyFr": "Helen dit qu'il a coupé la parole à Lena deux fois."
   },
   {
    "q": "What does Helen imply by saying 'the panel will want to see you leading people, not just projects'?",
    "opts": [
     "Tom needs more experience managing people to be promoted",
     "Tom is certain to get the job",
     "The panel dislikes Tom's projects",
     "She doesn't support his promotion"
    ],
    "correct": 0,
    "whyFr": "Elle dit qu'il est un bon candidat mais qu'il doit montrer du leadership d'équipe."
   },
   {
    "q": "How does Tom handle his disagreement about the three percent cap?",
    "opts": [
     "He threatens to resign",
     "He accepts it without comment",
     "He asks for a review after the promotion decision",
     "He asks HR to cancel the cap"
    ],
    "correct": 2,
    "whyFr": "Il demande de réexaminer le sujet après la décision sur la promotion."
   },
   {
    "q": "What does Helen mean by 'that's on me' ?",
    "opts": [
     "Tom has to pay for the training",
     "She accepts responsibility for not telling him earlier",
     "She will present at the board meeting",
     "Tom must organise the meeting"
    ],
    "correct": 1,
    "whyFr": "« That's on me » = c'est ma faute / ma responsabilité."
   }
  ],
  "expressions": [
   {
    "en": "running on empty",
    "fr": "à bout de forces"
   },
   {
    "en": "short-staffed",
    "fr": "en sous-effectif"
   },
   {
    "en": "to come across as dismissive",
    "fr": "donner l'impression d'être méprisant"
   },
   {
    "en": "to push back",
    "fr": "s'opposer, faire valoir son désaccord"
   },
   {
    "en": "That's on me",
    "fr": "c'est de ma faute / ma responsabilité"
   },
   {
    "en": "to flag something to HR",
    "fr": "signaler quelque chose aux RH"
   }
  ],
  "level": "B2"
 },
 {
  "id": 3,
  "title": "Home, Office and Phones",
  "topicFr": "Télétravail et réseaux sociaux",
  "situationFr": "Trois amis, Sophie, Ben et Priya, débattent au café du télétravail contre le bureau, puis de leur usage des réseaux sociaux.",
  "speakers": [
   {
    "name": "Sophie",
    "voice": "f"
   },
   {
    "name": "Ben",
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
    "t": "So, Ben, you've been working from home since 2021 and now your firm wants you back three days a week. How are you taking it?"
   },
   {
    "s": 1,
    "t": "Honestly? Not brilliantly. I save about two hours of commuting a day, and I've finally got into a proper routine."
   },
   {
    "s": 2,
    "t": "Oh, come on. I couldn't stand it. I'd go mad if I stayed in my flat all week. I need people around me."
   },
   {
    "s": 0,
    "t": "I'm with Priya, up to a point. When I was working remotely, I barely spoke to anyone from Monday to Friday."
   },
   {
    "s": 1,
    "t": "Well, that's partly down to how you organise yourself. I have a video call with my team every morning, and I see friends in the evening."
   },
   {
    "s": 2,
    "t": "But you can't replicate those chats by the coffee machine. That's where half the good ideas come from."
   },
   {
    "choice": {
     "s": 1,
     "promptFr": "À toi de jouer : que réponds-tu ?",
     "options": [
      {
       "t": "I'll give you that, but you can't deny that open-plan offices are noisy. I get far more done at home.",
       "ok": true,
       "whyFr": "Tu concèdes un point puis tu avances ton contre-argument (concession)."
      },
      {
       "t": "Coffee machines are a waste of time. Nobody has ever had a good idea near one.",
       "ok": false,
       "whyFr": "Généralisation absolue et peu crédible, qui ignore l'argument de Priya."
      },
      {
       "t": "You're completely right, and I've never had a single advantage from working at home.",
       "ok": false,
       "whyFr": "Incohérent : tu viens de défendre le télétravail."
      }
     ]
    }
   },
   {
    "s": 0,
    "t": "True, I'm not convinced offices are that productive either. Last week I was interrupted eleven times in one hour. I counted."
   },
   {
    "s": 2,
    "t": "Eleven? That's ridiculous. Still, I'd rather be interrupted than lonely."
   },
   {
    "s": 0,
    "t": "Ha, you'd change your mind after a week in my open-plan zoo, trust me."
   },
   {
    "s": 2,
    "t": "Maybe, but at least a zoo has life in it. My flat just has a fridge and a very judgmental cat."
   },
   {
    "s": 0,
    "t": "Fair. Maybe the answer is a hybrid. Two days in, three at home."
   },
   {
    "s": 1,
    "t": "Which is precisely what my boss is offering, and yet it still feels like a step backwards."
   },
   {
    "s": 2,
    "t": "Ben, you sound like someone who was promised a pay rise and got a pen."
   },
   {
    "s": 1,
    "t": "Ha! Pretty much. I turned down a job in Leeds in 2022 precisely because my current firm let me work remotely."
   },
   {
    "s": 0,
    "t": "Then you've got a case to raise with them. Unless you'd have gone to Leeds if you'd known about this."
   },
   {
    "s": 1,
    "t": "Possibly. If I'd known, I might not have bought the house in Reading, either."
   },
   {
    "choice": {
     "s": 1,
     "promptFr": "À toi de jouer : que réponds-tu ?",
     "options": [
      {
       "t": "I'm definitely quitting tomorrow. They can't treat me like this.",
       "ok": false,
       "whyFr": "Réaction excessive : il vient lui-même de reconnaître des regrets nuancés."
      },
      {
       "t": "Why complain? Offices are great, and I should have gone back years ago.",
       "ok": false,
       "whyFr": "Contradictoire avec tout ce qu'il a dit jusqu'ici."
      },
      {
       "t": "Hindsight's a wonderful thing. Anyway, I'm not going to quit over it. I'll just negotiate for a fourth day at home.",
       "ok": true,
       "whyFr": "Réaliste, avec une pointe d'ironie : il cherche un compromis."
      }
     ]
    }
   },
   {
    "s": 2,
    "t": "Smart. Speaking of things that eat your day, did you see your screen time last week? Mine said five hours a day."
   },
   {
    "s": 0,
    "t": "Five? Mine's worse. Seven on Sunday, mostly scrolling through Instagram while pretending to watch a film."
   },
   {
    "s": 1,
    "t": "I deleted TikTok in September. Best decision of the year, though I still check the news far too often."
   },
   {
    "s": 2,
    "t": "Wow, cold turkey. How long did it take before you stopped reaching for your phone every ten minutes?"
   },
   {
    "s": 1,
    "t": "About three weeks, to be honest. I kept picking it up and wondering what I'd come for."
   },
   {
    "s": 2,
    "t": "I couldn't. My whole job's on LinkedIn, and half my friends only post on Instagram."
   },
   {
    "s": 0,
    "t": "That's the trap, isn't it? You tell yourself it's networking, but really you're comparing yourself to strangers."
   },
   {
    "s": 1,
    "t": "Right. A study I read said people who cut social media for a month felt noticeably less anxious."
   },
   {
    "s": 2,
    "t": "Studies say everything. I'd have thought that, if it were that simple, we'd all have quit by now."
   },
   {
    "choice": {
     "s": 1,
     "promptFr": "À toi de jouer : que réponds-tu ?",
     "options": [
      {
       "t": "Well, the study was clearly wrong, so there's nothing to discuss.",
       "ok": false,
       "whyFr": "Tu rejettes l'objection sans argument : peu convaincant."
      },
      {
       "t": "You should all delete everything immediately. Anything less is pointless.",
       "ok": false,
       "whyFr": "Position extrême et moralisatrice, qui braque tes amies."
      },
      {
       "t": "Fair, but I'm not saying quit entirely. I put a thirty-minute limit on my phone, and honestly, it's made a difference.",
       "ok": true,
       "whyFr": "Tu nuances ton propos et appuies ton avis sur ton expérience."
      }
     ]
    }
   },
   {
    "s": 0,
    "t": "Thirty minutes? I'd cheat within a day."
   },
   {
    "s": 2,
    "t": "I'd switch it off and then reactivate it. We're hopeless."
   },
   {
    "s": 0,
    "t": "Maybe we could try a challenge: no social media until the end of the month."
   },
   {
    "s": 2,
    "t": "Only if the loser buys dinner. Otherwise, what's the point?"
   },
   {
    "s": 1,
    "t": "Deal, but I'm warning you: I'm competitive."
   },
   {
    "s": 0,
    "t": "Nobody's doubting that. Right, so what are the rules?"
   },
   {
    "choice": {
     "s": 1,
     "promptFr": "À toi de jouer : que réponds-tu ?",
     "options": [
      {
       "t": "No rules. We all trust each other, so nobody will check anything.",
       "ok": false,
       "whyFr": "Peu logique : vous venez de dire que vous étiez « hopeless », il faut un contrôle."
      },
      {
       "t": "The rules are that I win, regardless of what you two do.",
       "ok": false,
       "whyFr": "Ne répond pas à la question et n'est pas constructif."
      },
      {
       "t": "Simple: no apps on our phones, and we send a screenshot of our screen-time report each Sunday as proof.",
       "ok": true,
       "whyFr": "Règle claire et vérifiable, qui répond vraiment à la question."
      }
     ]
    }
   },
   {
    "s": 2,
    "t": "I like it. Starting tomorrow, then, on the first of the month? No excuses."
   }
  ],
  "questions": [
   {
    "q": "Why is Ben unhappy about returning to the office three days a week?",
    "opts": [
     "He dislikes his colleagues",
     "He would lose his daily routine and about two hours of commuting time",
     "His salary has been cut",
     "He has to move to Leeds"
    ],
    "correct": 1,
    "whyFr": "Il économise environ deux heures de trajet et a trouvé sa routine."
   },
   {
    "q": "What does Priya mean by 'someone who was promised a pay rise and got a pen'?",
    "opts": [
     "Ben received a gift from his boss",
     "Ben is bad at writing",
     "Ben has been disappointed by something much less valuable than expected",
     "Ben was promoted last year"
    ],
    "correct": 2,
    "whyFr": "Ironie : on lui a promis beaucoup et il reçoit presque rien, soit un compromis décevant."
   },
   {
    "q": "Why did Ben turn down a job in Leeds in 2022?",
    "opts": [
     "The salary was too low",
     "His current employer allowed him to work remotely",
     "He didn't want to leave Reading",
     "He was afraid of social media"
    ],
    "correct": 1,
    "whyFr": "Il a refusé parce que son entreprise acceptait le télétravail."
   },
   {
    "q": "How does Sophie feel about her phone use?",
    "opts": [
     "Proud of how little she uses it",
     "Indifferent to it",
     "Worried about her job on LinkedIn",
     "Aware that it makes her compare herself to others"
    ],
    "correct": 3,
    "whyFr": "Elle parle d'un piège : on se compare à des inconnus, et avoue sept heures un dimanche."
   },
   {
    "q": "What is Priya's attitude to the study Ben mentions?",
    "opts": [
     "She is sceptical that it would be so simple",
     "She thinks it proves everyone should quit",
     "She has read it herself",
     "She is angry with Ben"
    ],
    "correct": 0,
    "whyFr": "« Studies say everything » : elle est sceptique."
   },
   {
    "q": "What do the friends agree on at the end?",
    "opts": [
     "To work from the office together",
     "To report each other's screen time online",
     "A social media challenge where the loser buys dinner",
     "To stop meeting in cafés"
    ],
    "correct": 2,
    "whyFr": "Un défi sans réseaux sociaux, avec dîner offert par le perdant."
   }
  ],
  "expressions": [
   {
    "en": "up to a point",
    "fr": "jusqu'à un certain point"
   },
   {
    "en": "I'll give you that",
    "fr": "je te l'accorde"
   },
   {
    "en": "a step backwards",
    "fr": "un pas en arrière"
   },
   {
    "en": "Hindsight's a wonderful thing",
    "fr": "après coup, c'est facile"
   },
   {
    "en": "screen time",
    "fr": "temps d'écran"
   },
   {
    "en": "We're hopeless",
    "fr": "on est irrécupérables"
   }
  ],
  "level": "B2"
 },
 {
  "id": 4,
  "title": "Cancelled at the Airport",
  "topicFr": "Vol annulé et indemnisation",
  "situationFr": "Daniel, passager, vient d'apprendre que son vol pour Édimbourg est annulé. Il s'adresse à une employée au comptoir de la compagnie, Ms Patel.",
  "speakers": [
   {
    "name": "Ms Patel",
    "voice": "f"
   },
   {
    "name": "Daniel",
    "voice": "m"
   }
  ],
  "lines": [
   {
    "s": 0,
    "t": "Next, please. Good evening, how can I help you?"
   },
   {
    "s": 1,
    "t": "Hi. My flight to Edinburgh, BA 1432, was supposed to leave at 6:15, and it's just been cancelled. Nobody's told us anything sensible."
   },
   {
    "s": 0,
    "t": "I'm so sorry about that. Let me have a look. Yes, it was cancelled at 5:40 owing to a crew shortage."
   },
   {
    "s": 1,
    "t": "A crew shortage? So not weather, then. That's relevant, isn't it?"
   },
   {
    "s": 0,
    "t": "It is, actually. Staffing problems within our control usually entitle you to compensation, so you're in a stronger position than most."
   },
   {
    "s": 1,
    "t": "Right. And I'd like to be clear: the announcement said 'operational reasons', which sounded very vague to me."
   },
   {
    "s": 0,
    "t": "I understand, and honestly that's the wording we're told to use at the gate. The system shows the real cause."
   },
   {
    "s": 1,
    "t": "Good to know. How much are we talking about?"
   },
   {
    "s": 0,
    "t": "For a flight under fifteen hundred kilometres, it's 250 pounds. I'd have to check the exact distance."
   },
   {
    "choice": {
     "s": 1,
     "promptFr": "À toi de jouer : que réponds-tu ?",
     "options": [
      {
       "t": "250? That's nothing. I'll sue the airline for ten times that.",
       "ok": false,
       "whyFr": "Menace irréaliste et agressive envers quelqu'un qui t'aide."
      },
      {
       "t": "Forget the money. I'd just like you to say sorry, and that'll be fine.",
       "ok": false,
       "whyFr": "Tu renonces à un droit légitime, sans raison."
      },
      {
       "t": "Understood. I'd like to claim that, please, but my priority tonight is getting to Edinburgh by tomorrow morning at the latest.",
       "ok": true,
       "whyFr": "Tu confirmes ta demande et tu hiérarchises : arriver à temps passe d'abord."
      }
     ]
    }
   },
   {
    "s": 0,
    "t": "Of course. The next direct flight is at 7:05 tomorrow morning, but it's nearly full. I can put you on standby, or offer a seat on the 10:30."
   },
   {
    "s": 1,
    "t": "Standby is risky. If I'd known, I'd have taken the train this afternoon. Is there anything this evening, even via another city?"
   },
   {
    "s": 0,
    "t": "There's a 9:50 tonight via Manchester, landing in Edinburgh at 12:15 a.m. It's a tight connection, but I can book it."
   },
   {
    "s": 1,
    "t": "Hmm, I've got a meeting at nine tomorrow, so arriving at quarter past midnight is better than nothing."
   },
   {
    "s": 0,
    "t": "Is it an important one?"
   },
   {
    "s": 1,
    "t": "Quite. I'm presenting to a client at nine, so I can't afford to turn up looking like I've slept in a terminal."
   },
   {
    "s": 0,
    "t": "Then I'd recommend it. Shall I check that your bag is routed through?"
   },
   {
    "s": 1,
    "t": "Please. And I assume you'll cover a meal while I'm waiting?"
   },
   {
    "s": 0,
    "t": "Absolutely. I'll give you vouchers for fifteen pounds. I'd keep the receipts for anything else."
   },
   {
    "choice": {
     "s": 1,
     "promptFr": "À toi de jouer : que réponds-tu ?",
     "options": [
      {
       "t": "Fifteen pounds? You must be joking. I want a free business-class upgrade as well.",
       "ok": false,
       "whyFr": "Exigence disproportionnée et ton agressif."
      },
      {
       "t": "Thanks, though fifteen is a bit tight at this airport. Would a hotel voucher be an option if the connection falls through?",
       "ok": true,
       "whyFr": "Poli, avec un doute réaliste et une question pertinente sur un plan B."
      },
      {
       "t": "That's plenty. In fact, I don't need anything else.",
       "ok": false,
       "whyFr": "Illogique : tu viens de t'inquiéter de l'attente et d'une correspondance serrée."
      }
     ]
    }
   },
   {
    "s": 0,
    "t": "If the connection's missed, we'd rebook you and provide a hotel, so you'd be covered."
   },
   {
    "s": 1,
    "t": "Good. Now, about the compensation: do I need to fill something in?"
   },
   {
    "s": 0,
    "t": "Yes, here's the form, or you can do it online within six months. You'll need your booking reference and boarding pass."
   },
   {
    "s": 1,
    "t": "And how long does it usually take?"
   },
   {
    "s": 0,
    "t": "Roughly four to six weeks, although it's often quicker when the claim is straightforward."
   },
   {
    "s": 1,
    "t": "Often quicker, as in sometimes it's slower?"
   },
   {
    "s": 0,
    "t": "Well, sometimes it gets held up. I won't pretend otherwise. But I'll note on your file that it's a crew issue."
   },
   {
    "s": 1,
    "t": "Appreciated. Would it help to have something in writing confirming the reason for the cancellation?"
   },
   {
    "s": 0,
    "t": "It would. I'll print a letter right now."
   },
   {
    "choice": {
     "s": 1,
     "promptFr": "À toi de jouer : que réponds-tu ?",
     "options": [
      {
       "t": "Don't bother printing anything. I'm sure you'll just lie on the form anyway.",
       "ok": false,
       "whyFr": "Accusation gratuite et injuste envers l'employée."
      },
      {
       "t": "No need. I'll remember what you told me, and that'll do.",
       "ok": false,
       "whyFr": "Imprudent : une preuve écrite est indispensable en cas de refus."
      },
      {
       "t": "That'd be great. If the claim is refused, I'll have written evidence to fall back on, which is the whole point.",
       "ok": true,
       "whyFr": "Tu expliques la logique de la demande : disposer d'une preuve en cas de litige."
      }
     ]
    }
   },
   {
    "s": 0,
    "t": "Here you are. Gate 24, boarding at 9:15. I've also reserved an aisle seat, since you've got an early meeting."
   },
   {
    "s": 1,
    "t": "Good thinking, thanks. Is the lounge open if I have to wait?"
   },
   {
    "s": 0,
    "t": "It's closed after eight, I'm afraid. But there's a quiet area near gate 22 with charging points."
   },
   {
    "s": 1,
    "t": "Fair enough. Better than sitting on the floor."
   },
   {
    "s": 0,
    "t": "And please keep your boarding passes for both flights. You'll need them for the claim."
   },
   {
    "choice": {
     "s": 1,
     "promptFr": "À toi de jouer : que réponds-tu ?",
     "options": [
      {
       "t": "Typical. First the flight, now the lounge. This airline's a complete shambles.",
       "ok": false,
       "whyFr": "Plainte inutile et injuste envers quelqu'un qui a été serviable."
      },
      {
       "t": "Right, I'll go and sleep at the gate and not bother taking the connection at all.",
       "ok": false,
       "whyFr": "Illogique : la correspondance est justement la solution négociée."
      },
      {
       "t": "That'll do. Thanks for being so helpful. Not every desk would have taken the time with such a long queue.",
       "ok": true,
       "whyFr": "Remerciement sincère et nuancé, qui reconnaît son effort."
      }
     ]
    }
   },
   {
    "s": 0,
    "t": "Thank you, that's kind. Safe travels, Mr Reid, and sorry again for the trouble."
   }
  ],
  "questions": [
   {
    "q": "Why is the cancellation reason important to Daniel's claim?",
    "opts": [
     "Weather problems would also give him compensation",
     "He wants to sue the airline",
     "Staffing problems within the airline's control usually give a right to compensation",
     "It determines his seat number"
    ],
    "correct": 2,
    "whyFr": "Une pénurie d'équipage relève de la compagnie, donc ouvre droit à indemnisation, contrairement à la météo."
   },
   {
    "q": "What does Daniel mean by 'If I'd known, I'd have taken the train this afternoon'?",
    "opts": [
     "He prefers trains to planes",
     "He dislikes the standby option because he wasn't warned earlier",
     "He is planning to take a train now",
     "He thinks the train is cheaper"
    ],
    "correct": 1,
    "whyFr": "Mixed conditional : il regrette d'avoir appris l'annulation trop tard et juge la liste d'attente risquée."
   },
   {
    "q": "Which option does Daniel choose?",
    "opts": [
     "The 7:05 flight on standby",
     "The 10:30 flight tomorrow",
     "A flight via Manchester tonight",
     "A train to Edinburgh"
    ],
    "correct": 2,
    "whyFr": "Il prend le 9:50 via Manchester, arrivée 12:15, à cause de sa réunion à neuf heures."
   },
   {
    "q": "What does the agent's answer 'I won't pretend otherwise' suggest about the compensation process?",
    "opts": [
     "It is always very fast",
     "It can sometimes be slower than the airline claims",
     "It is impossible online",
     "It is only for business passengers"
    ],
    "correct": 1,
    "whyFr": "Elle admet que ça peut traîner : honnêteté de sa part."
   },
   {
    "q": "What is the agent's attitude toward Daniel?",
    "opts": [
     "Defensive and unhelpful",
     "Bored and impatient",
     "Cold but efficient",
     "Sympathetic and professional"
    ],
    "correct": 3,
    "whyFr": "Elle s'excuse, anticipe ses besoins (siège couloir) et reste efficace."
   },
   {
    "q": "Why does Daniel ask for a letter confirming the cancellation reason?",
    "opts": [
     "To use it as evidence if the claim is challenged",
     "To show it to his employer only",
     "To get a free hotel room",
     "To avoid paying for the connection"
    ],
    "correct": 0,
    "whyFr": "« written evidence to fall back on » : preuve utile en cas de refus."
   }
  ],
  "expressions": [
   {
    "en": "owing to a crew shortage",
    "fr": "en raison d'un manque d'équipage"
   },
   {
    "en": "to be put on standby",
    "fr": "être mis sur liste d'attente"
   },
   {
    "en": "a tight connection",
    "fr": "une correspondance serrée"
   },
   {
    "en": "to fall back on",
    "fr": "avoir comme solution de repli"
   },
   {
    "en": "to be held up",
    "fr": "être retardé"
   },
   {
    "en": "to claim compensation",
    "fr": "demander une indemnisation"
   }
  ],
  "level": "B2"
 },
 {
  "id": 5,
  "title": "Parents' Evening",
  "topicFr": "Réunion parents-professeur",
  "situationFr": "Laura, mère de Jake (15 ans), rencontre son professeur principal, Mr Collins, lors de la soirée parents-professeurs pour parler des progrès et des options de son fils.",
  "speakers": [
   {
    "name": "Mr Collins",
    "voice": "m"
   },
   {
    "name": "Laura",
    "voice": "f"
   }
  ],
  "lines": [
   {
    "s": 0,
    "t": "Mrs Bennett, good evening. Thanks for coming in. Please, have a seat. We're here to talk about Jake, aren't we?"
   },
   {
    "s": 1,
    "t": "That's right. I'm a bit nervous, to be honest. His last report wasn't great."
   },
   {
    "s": 0,
    "t": "Well, there are positives. His maths has gone from a four to a six since September, which is a real jump."
   },
   {
    "s": 1,
    "t": "Really? He never says a word at home. I'd assumed he'd given up."
   },
   {
    "s": 0,
    "t": "Far from it. When he's interested, he's among the sharpest in the class. Where he struggles is consistency."
   },
   {
    "s": 1,
    "t": "Meaning?"
   },
   {
    "s": 0,
    "t": "He's handed in only five of the last ten homework tasks, and his English essays are often rushed."
   },
   {
    "choice": {
     "s": 1,
     "promptFr": "À toi de jouer : que réponds-tu ?",
     "options": [
      {
       "t": "That's absurd. He does his homework every night, so you must be mixing him up with someone else.",
       "ok": false,
       "whyFr": "Tu nies les faits sans preuve et tu accuses l'enseignant d'erreur."
      },
      {
       "t": "Well, if the homework were more interesting, he'd do it, so it's your fault really.",
       "ok": false,
       "whyFr": "Tu rejettes la responsabilité sur l'école au lieu de chercher une solution."
      },
      {
       "t": "That doesn't entirely surprise me. He's on his games console till midnight. I should have been stricter about it.",
       "ok": true,
       "whyFr": "Honnête, sans dramatiser, avec un regret exprimé par should have + participe passé."
      }
     ]
    }
   },
   {
    "s": 0,
    "t": "It's not about blame. A lot of fifteen-year-olds find that balance difficult."
   },
   {
    "s": 1,
    "t": "What would you suggest? I've tried taking his phone away, and it just led to a week of sulking."
   },
   {
    "s": 0,
    "t": "Rather than punishing him, perhaps agree on a set study slot, say, an hour after dinner, with the phone in another room."
   },
   {
    "s": 1,
    "t": "And if he refuses?"
   },
   {
    "s": 0,
    "t": "Then link it to something he values, such as the weekend football. He plays for the school team, doesn't he?"
   },
   {
    "s": 1,
    "t": "Captain, as of last month. He's very proud."
   },
   {
    "s": 0,
    "t": "Then he clearly knows what responsibility feels like. Does he take it seriously at home, with chores and so on?"
   },
   {
    "s": 1,
    "t": "Not remotely. Getting him to empty the dishwasher is like negotiating a treaty."
   },
   {
    "s": 0,
    "t": "Good, we can use that. In fact, his coach tells me he's been exemplary in training, so I know he's capable of commitment."
   },
   {
    "choice": {
     "s": 1,
     "promptFr": "À toi de jouer : que réponds-tu ?",
     "options": [
      {
       "t": "Football's all he cares about, so I doubt he'll ever amount to anything.",
       "ok": false,
       "whyFr": "Défaitiste et injuste envers ton fils, qui montre justement de l'engagement."
      },
      {
       "t": "Then there's no problem. If he's committed at football, his marks will sort themselves out.",
       "ok": false,
       "whyFr": "Illogique : l'enseignant vient de dire que le problème est la constance en classe."
      },
      {
       "t": "That's reassuring to hear. I wish he'd bring that same attitude into the classroom.",
       "ok": true,
       "whyFr": "Tu apprécies la bonne nouvelle et tu exprimes un souhait réaliste (wish + would)."
      }
     ]
    }
   },
   {
    "s": 0,
    "t": "Let's hope so. Now, a point worth raising: GCSE options. He'll have to choose by February."
   },
   {
    "s": 1,
    "t": "He's talking about dropping French. He says it's pointless."
   },
   {
    "s": 0,
    "t": "A lot of students say that, but I'd urge caution. Languages stand out on university applications, and if he wants to study engineering abroad, they'd help."
   },
   {
    "s": 1,
    "t": "Engineering? That's news to me."
   },
   {
    "s": 0,
    "t": "He mentioned it during a careers session in October. He'd like to go into robotics, apparently."
   },
   {
    "s": 1,
    "t": "Well, I never knew that. Apparently I should be asking him more questions."
   },
   {
    "choice": {
     "s": 1,
     "promptFr": "À toi de jouer : que réponds-tu ?",
     "options": [
      {
       "t": "Then he should drop everything except maths. Languages are a total waste of time.",
       "ok": false,
       "whyFr": "Tu ignores le conseil de l'enseignant, avec une généralisation excessive."
      },
      {
       "t": "Do you think he'd be able to cope with triple science alongside French? I wouldn't want him to be overwhelmed.",
       "ok": true,
       "whyFr": "Question prudente et pertinente qui montre que tu écoutes et t'inquiètes."
      },
      {
       "t": "Robotics? He's far too lazy for something like that, so I'd forget it.",
       "ok": false,
       "whyFr": "Tu décourages son projet alors que le professeur le juge réalisable."
      }
     ]
    }
   },
   {
    "s": 0,
    "t": "It's ambitious, but doable. I'd say he'd manage if his organisation improves. There's a taster day on the twelfth of December if you'd like to come together."
   },
   {
    "s": 1,
    "t": "That sounds worthwhile. Could we meet again in the new year to see how the study slot's working?"
   },
   {
    "s": 0,
    "t": "Of course. How about the second week of January? I'll put it in the diary and email you."
   },
   {
    "s": 1,
    "t": "Perfect. Is there any extra support available in the meantime?"
   },
   {
    "s": 0,
    "t": "Honestly, a quiet place to work is half the battle. Many parents are surprised by the difference it makes."
   },
   {
    "s": 1,
    "t": "I can believe that. Our kitchen table is permanently covered in laundry and cereal bowls."
   },
   {
    "s": 0,
    "t": "There's a free homework club on Tuesdays and Thursdays until five. It might suit him, since he'd be among friends."
   },
   {
    "s": 1,
    "t": "He'll roll his eyes, but I'll mention it. Maybe I'll let him think it was his idea."
   },
   {
    "s": 0,
    "t": "That's often the cleverest approach."
   },
   {
    "choice": {
     "s": 1,
     "promptFr": "À toi de jouer : que réponds-tu ?",
     "options": [
      {
       "t": "Well, I'm off. This has been a complete waste of my evening, if I'm honest.",
       "ok": false,
       "whyFr": "Impoli et injuste : l'entretien a été utile et bienveillant."
      },
      {
       "t": "I'll tell Jake you said all this, and he'd better start behaving, or else.",
       "ok": false,
       "whyFr": "Menaçant et contre-productif, à l'opposé de l'approche suggérée."
      },
      {
       "t": "Thanks so much, Mr Collins. It's a relief to hear there are real strengths to build on.",
       "ok": true,
       "whyFr": "Remerciement chaleureux qui reprend le positif de la rencontre."
      }
     ]
    }
   },
   {
    "s": 0,
    "t": "My pleasure. He's a good lad, Mrs Bennett. A bit of structure is all he needs."
   }
  ],
  "questions": [
   {
    "q": "What is the main weakness Mr Collins identifies in Jake's work?",
    "opts": [
     "He is disrespectful to teachers",
     "He fails every maths test",
     "He lacks consistency, for example with homework",
     "He never speaks in class"
    ],
    "correct": 2,
    "whyFr": "« Where he struggles is consistency » : seulement 5 devoirs rendus sur 10."
   },
   {
    "q": "How does Laura react when she hears about Jake's progress in maths?",
    "opts": [
     "She is angry with the teacher",
     "She is surprised, because he says nothing at home",
     "She already knew about it",
     "She thinks the grades are wrong"
    ],
    "correct": 1,
    "whyFr": "« He never says a word at home. I'd assumed he'd given up »."
   },
   {
    "q": "What does Mr Collins suggest for homework?",
    "opts": [
     "Taking away Jake's phone for a week",
     "Moving Jake to a different class",
     "Hiring a private tutor",
     "Agreeing a fixed study time linked to something Jake values"
    ],
    "correct": 3,
    "whyFr": "Un créneau fixe après le dîner, avec un lien vers le football qui compte pour lui."
   },
   {
    "q": "Why does Mr Collins urge caution about dropping French?",
    "opts": [
     "Languages are required by law",
     "Languages stand out on university applications and could help with engineering abroad",
     "Jake's French grades are the best",
     "The school will close the French department"
    ],
    "correct": 1,
    "whyFr": "Il cite les candidatures universitaires et un projet d'ingénierie à l'étranger."
   },
   {
    "q": "What does Laura's comment 'Apparently I should be asking him more questions' imply?",
    "opts": [
     "She regrets not knowing about Jake's interests",
     "She plans to complain to the school",
     "She doesn't believe the teacher",
     "She is angry with Jake's coach"
    ],
    "correct": 0,
    "whyFr": "Elle prend conscience qu'elle ignorait son projet de robotique : légère autocritique."
   },
   {
    "q": "How does Laura plan to introduce the homework club to Jake?",
    "opts": [
     "She will order him to attend",
     "She will let him believe it was his own idea",
     "She will ask the coach to tell him",
     "She will say it is only for football players"
    ],
    "correct": 0,
    "whyFr": "Elle compte lui laisser croire que l'idée vient de lui, approche jugée « clever » par l'enseignant."
   }
  ],
  "expressions": [
   {
    "en": "Far from it",
    "fr": "loin de là"
   },
   {
    "en": "It's not about blame",
    "fr": "il ne s'agit pas de blâmer"
   },
   {
    "en": "to urge caution",
    "fr": "recommander la prudence"
   },
   {
    "en": "That's news to me",
    "fr": "première nouvelle pour moi"
   },
   {
    "en": "to put something in the diary",
    "fr": "noter dans l'agenda"
   },
   {
    "en": "to roll one's eyes",
    "fr": "lever les yeux au ciel"
   }
  ],
  "level": "B2"
 },
 {
  "id": 6,
  "title": "Taking Out a Mortgage",
  "topicFr": "Prêt immobilier à la banque",
  "situationFr": "Claire, conseillère bancaire, reçoit David, qui veut acheter un appartement à Leeds avec sa compagne. Ils discutent du taux, des frais et des risques.",
  "speakers": [
   {
    "name": "Claire",
    "voice": "f"
   },
   {
    "name": "David",
    "voice": "m"
   }
  ],
  "lines": [
   {
    "s": 0,
    "t": "Good morning, Mr Hughes. Come in, take a seat. So, you're here about the mortgage, if I'm not mistaken?"
   },
   {
    "s": 1,
    "t": "That's right. My partner and I have found a flat in Leeds, asking price two hundred and eighty thousand pounds, and we'd like to know what we could borrow."
   },
   {
    "s": 0,
    "t": "Lovely. And how much are you putting down as a deposit?"
   },
   {
    "s": 1,
    "t": "About forty-two thousand. That's fifteen percent, which we scraped together over four years, so I'd rather not touch it."
   },
   {
    "s": 0,
    "t": "Fair enough. Based on your joint income of sixty-eight thousand, I'd say we could offer you two hundred and thirty-eight thousand over twenty-five years."
   },
   {
    "s": 1,
    "t": "Hmm, that's a bit less than I'd hoped for, but it should be enough if the seller comes down a little."
   },
   {
    "s": 0,
    "t": "Well, you've got a decent credit record, which helps. Have you got any outstanding loans, by the way?"
   },
   {
    "s": 1,
    "t": "Just a car loan, about four thousand left. We'll have it cleared by next spring."
   },
   {
    "s": 0,
    "t": "Good, that'll count in your favour."
   },
   {
    "s": 1,
    "t": "Right. And what sort of rate are we talking about?"
   },
   {
    "s": 0,
    "t": "Well, we have a two-year fix at 4.6 percent, or a five-year fix at 4.9. The five-year costs a bit more each month, but you'd be protected if rates shot up."
   },
   {
    "choice": {
     "s": 1,
     "promptFr": "À toi de jouer : que réponds-tu ?",
     "options": [
      {
       "t": "I'd lean towards the five-year one, to be honest. We'd rather know exactly what we're paying than gamble on the market.",
       "ok": true,
       "whyFr": "Tu fais un choix argumenté et nuancé (\"I'd lean towards\", \"to be honest\") qui montre que tu as compris le compromis entre prix et sécurité."
      },
      {
       "t": "Obviously the two-year one is cheaper, so there's no point even thinking about the other. Just give me that.",
       "ok": false,
       "whyFr": "Ton ton est trop brusque et tu ignores le risque que la conseillère vient d'expliquer."
      },
      {
       "t": "Rates can't possibly go up any further, so I suppose the cheaper one is a no-brainer.",
       "ok": false,
       "whyFr": "Affirmation sans fondement : personne ne peut prédire les taux, et la conseillère vient justement de parler de ce risque."
      }
     ]
    }
   },
   {
    "s": 0,
    "t": "That's a sensible way to look at it. Mind you, with the five-year deal there's an early repayment charge of three percent if you pay it off within the first two years."
   },
   {
    "s": 1,
    "t": "Hang on, three percent? On what, exactly?"
   },
   {
    "s": 0,
    "t": "On the outstanding balance, so roughly seven thousand pounds if you sold up after eighteen months. Plus there's an arrangement fee of nine hundred and ninety-nine pounds, which you can add to the loan."
   },
   {
    "s": 1,
    "t": "I'd rather not, though. Adding it means paying interest on it for twenty-five years, doesn't it?"
   },
   {
    "s": 0,
    "t": "Exactly, you've hit the nail on the head. Pay it upfront and you'll save around fourteen hundred pounds in interest overall."
   },
   {
    "s": 1,
    "t": "Good to know. What if one of us lost our job? We're not planning on it, but you never know."
   },
   {
    "s": 0,
    "t": "Well, that's the biggest risk, frankly. After a few years with us we could offer a payment holiday, but it's limited to six months, and interest still builds up in the meantime."
   },
   {
    "choice": {
     "s": 1,
     "promptFr": "À toi de jouer : que réponds-tu ?",
     "options": [
      {
       "t": "Six months is plenty of time to find another job, so I won't worry about it.",
       "ok": false,
       "whyFr": "Tu minimises le risque de façon irréaliste, alors que la conseillère vient de dire que les intérêts continuent à courir."
      },
      {
       "t": "That's rubbish. Other banks would let us skip payments for free, surely?",
       "ok": false,
       "whyFr": "Réaction agressive et sans preuve : on ne répond pas ainsi à une conseillère qui explique les conditions."
      },
      {
       "t": "So it's more of a breathing space than a safety net. Would an income protection policy be worth looking at?",
       "ok": true,
       "whyFr": "Tu reformules intelligemment (\"more of ... than ...\") puis tu poses une question utile et polie."
      }
     ]
    }
   },
   {
    "s": 0,
    "t": "Good question. It's not compulsory, but I'd strongly recommend it. It would pay out about sixty percent of your salary if you couldn't work, and premiums start at around thirty-five pounds a month."
   },
   {
    "s": 1,
    "t": "Hmm. And what about the valuation? Do we pay for that too?"
   },
   {
    "s": 0,
    "t": "Yes, the survey costs four hundred and fifty pounds. If it comes in lower than the asking price, the bank will lend you less, so you might have to renegotiate with the seller."
   },
   {
    "s": 1,
    "t": "Which would be a pain, as they've already turned down our first offer."
   },
   {
    "s": 0,
    "t": "I wouldn't worry too much. Had it been a really overpriced property, I'd have flagged it by now. It's in a decent area."
   },
   {
    "s": 1,
    "t": "Okay, that's reassuring. What's the monthly repayment on the five-year deal, roughly?"
   },
   {
    "s": 0,
    "t": "Around one thousand three hundred and fifty pounds. Which, to be fair, is just under forty percent of your take-home pay, so it'd be tight."
   },
   {
    "choice": {
     "s": 1,
     "promptFr": "À toi de jouer : que réponds-tu ?",
     "options": [
      {
       "t": "Forty percent is nothing. We'll just stop eating out and everything will be fine.",
       "ok": false,
       "whyFr": "Tu balaies l'avertissement avec une désinvolture peu réaliste : 40 % du revenu net est un vrai risque."
      },
      {
       "t": "That's higher than I'd hoped, to be honest. Is there any way of bringing it down without changing the deposit?",
       "ok": true,
       "whyFr": "Tu exprimes ta déception poliment (\"higher than I'd hoped\") et tu cherches une solution concrète."
      },
      {
       "t": "Well, if it's so tight, you shouldn't be offering me this loan in the first place.",
       "ok": false,
       "whyFr": "Tu accuses la conseillère à tort : c'est elle qui te prévient honnêtement du risque."
      }
     ]
    }
   },
   {
    "s": 0,
    "t": "Well, you could stretch the term to thirty years, which would bring it down to about one thousand two hundred and eighty. But you'd pay roughly thirty-four thousand more in interest in total."
   },
   {
    "s": 1,
    "t": "So it's cheaper now, but costlier later. Classic trade-off."
   },
   {
    "s": 0,
    "t": "Precisely. Alternatively, you could overpay when you can. Most deals allow ten percent a year without penalty."
   },
   {
    "s": 1,
    "t": "That's useful. I think we need to talk it over before deciding."
   },
   {
    "s": 0,
    "t": "Of course. I'll put everything in writing, and the offer is valid for ninety days."
   },
   {
    "choice": {
     "s": 1,
     "promptFr": "À toi de jouer : que réponds-tu ?",
     "options": [
      {
       "t": "Thanks, that's really helpful. We'll sleep on it and get back to you by the end of next week.",
       "ok": true,
       "whyFr": "Réponse cordiale, cohérente avec ce que tu viens de dire (en parler avec ta compagne) et avec un délai précis. \"Sleep on it\" = prendre le temps d'y réfléchir."
      },
      {
       "t": "Right, I'll sign today then, so you don't have to waste any more of your time.",
       "ok": false,
       "whyFr": "Incohérent : tu viens de dire que vous deviez en discuter, et on ne signe pas un prêt par politesse."
      },
      {
       "t": "We'll probably go with another bank, since you've made it sound so complicated.",
       "ok": false,
       "whyFr": "Remarque passive-agressive et injuste envers une conseillère qui a été claire et transparente."
      }
     ]
    }
   },
   {
    "s": 0,
    "t": "Perfect. Here's my card, and do ring me if anything crops up."
   },
   {
    "s": 1,
    "t": "Will do. Thanks again, Claire."
   },
   {
    "s": 0,
    "t": "My pleasure. Good luck with the flat!"
   }
  ],
  "questions": [
   {
    "q": "Why does David choose the five-year fixed rate?",
    "opts": [
     "He wants certainty about what he will pay",
     "It has the lowest monthly repayment",
     "Claire says it has no extra charges",
     "His partner has already chosen it"
    ],
    "correct": 0,
    "whyFr": "Il dit préférer savoir exactement ce qu'il paiera plutôt que de parier sur le marché."
   },
   {
    "q": "Roughly how much would the early repayment charge be if David sold after eighteen months?",
    "opts": [
     "About nine hundred pounds",
     "About fourteen hundred pounds",
     "About seven thousand pounds",
     "About thirty-four thousand pounds"
    ],
    "correct": 2,
    "whyFr": "Trois pour cent du capital restant dû, soit environ sept mille livres."
   },
   {
    "q": "Why does David prefer not to add the arrangement fee to the loan?",
    "opts": [
     "The bank refuses to allow it",
     "He would pay interest on it for decades",
     "He plans to sell the flat quickly",
     "The fee is only payable in cash"
    ],
    "correct": 1,
    "whyFr": "Ajouté au prêt, les frais génèrent des intérêts sur vingt-cinq ans."
   },
   {
    "q": "When Claire says the monthly repayment would be \"tight\", what does she imply?",
    "opts": [
     "The bank may reject the application",
     "The couple should choose the two-year deal",
     "The repayments would leave little room in their budget",
     "The property is overpriced"
    ],
    "correct": 2,
    "whyFr": "Près de 40 % du revenu net : il resterait peu de marge pour les autres dépenses."
   },
   {
    "q": "What is David's attitude to the payment holiday?",
    "opts": [
     "He finds it generous and sufficient",
     "He sees it as limited protection",
     "He thinks it is an insult",
     "He has never heard of such an offer"
    ],
    "correct": 1,
    "whyFr": "Il parle de \"breathing space\" plutôt que de filet de sécurité : l'aide lui paraît limitée."
   },
   {
    "q": "What does Claire suggest about the property's valuation?",
    "opts": [
     "It will certainly be too low",
     "The bank never does valuations",
     "It is unlikely to be a problem",
     "The seller must pay for it"
    ],
    "correct": 2,
    "whyFr": "Elle dit que si le bien était vraiment surévalué, elle l'aurait déjà signalé."
   }
  ],
  "expressions": [
   {
    "en": "scrape together",
    "fr": "réunir à grand-peine (de l'argent)"
   },
   {
    "en": "shoot up",
    "fr": "grimper en flèche"
   },
   {
    "en": "hit the nail on the head",
    "fr": "mettre le doigt dessus, avoir tout à fait raison"
   },
   {
    "en": "a breathing space",
    "fr": "un répit"
   },
   {
    "en": "sleep on it",
    "fr": "prendre le temps d'y réfléchir (une nuit)"
   },
   {
    "en": "if anything crops up",
    "fr": "si quelque chose se présente / survient"
   }
  ],
  "level": "B2"
 },
 {
  "id": 7,
  "title": "The Car-Free Street Meeting",
  "topicFr": "Réunion de quartier : rue piétonne",
  "situationFr": "Lors de la réunion des habitants d'Alder Road, Margaret (la présidente), Helen (boulangère) et Raj discutent d'un projet de rue sans voitures le samedi.",
  "speakers": [
   {
    "name": "Margaret",
    "voice": "f"
   },
   {
    "name": "Helen",
    "voice": "f"
   },
   {
    "name": "Raj",
    "voice": "m"
   }
  ],
  "lines": [
   {
    "s": 0,
    "t": "Right, shall we make a start? Thanks for coming, everyone. Tonight we're discussing the proposal to close Alder Road to traffic on Saturdays from ten till four, starting in March."
   },
   {
    "s": 1,
    "t": "Before we begin, can I just say I'm not against the idea in principle? It's just that I run the bakery at number 14, and Saturday is when I make nearly forty percent of my takings."
   },
   {
    "s": 0,
    "t": "That's a fair point, Helen, and it's exactly why we wanted to hear from you."
   },
   {
    "s": 2,
    "t": "If I could jump in, the pilot in Elm Street last year actually showed footfall rose by twelve percent. People linger when they aren't dodging lorries."
   },
   {
    "s": 1,
    "t": "Elm Street's got a park at one end, though. We've got a dual carriageway at ours. Hardly comparable, is it?"
   },
   {
    "choice": {
     "s": 2,
     "promptFr": "À toi de jouer : que réponds-tu ?",
     "options": [
      {
       "t": "Well, with respect, you'd say that, wouldn't you? You've got a business to protect.",
       "ok": false,
       "whyFr": "Attaque personnelle (argument ad hominem) : tu ne réponds pas à l'objection, tu discrédites Helen."
      },
      {
       "t": "Fair enough, the layout's different. Perhaps we could ask the council for figures from a street more like ours before we vote.",
       "ok": true,
       "whyFr": "Tu concèdes un point (\"fair enough\") puis tu proposes une solution constructive : c'est la diplomatie attendue en réunion."
      },
      {
       "t": "No, the situation is identical, and the figures prove it. There's nothing more to discuss.",
       "ok": false,
       "whyFr": "Faux (les rues diffèrent) et fermé au dialogue : tu coupes court à la discussion."
      }
     ]
    }
   },
   {
    "s": 0,
    "t": "That's reasonable, Raj. I'll add it to the action list. Now, noise. Several of you emailed about the planned market stalls."
   },
   {
    "s": 1,
    "t": "Honestly, if those start setting up at seven, I'll be woken up before my own ovens are on! Which, believe me, is saying something."
   },
   {
    "s": 2,
    "t": "Ha! Good point. What if we said no setting up before half past eight?"
   },
   {
    "s": 0,
    "t": "Noted. Which brings us to money. The council's offering eleven thousand pounds, but we'd need to raise another four thousand five hundred ourselves, for barriers and signs."
   },
   {
    "s": 2,
    "t": "Crowdfunding might work. Had we started in January, we'd probably have hit the target by now."
   },
   {
    "s": 0,
    "t": "Quite. Though it's the insurance that worries me. If a child were hurt at a stall, who'd be liable?"
   },
   {
    "s": 1,
    "t": "I'd say the organisers, which would be us. I can't see anyone volunteering for that."
   },
   {
    "choice": {
     "s": 2,
     "promptFr": "À toi de jouer : que réponds-tu ?",
     "options": [
      {
       "t": "Nobody's ever been hurt at these things, so honestly I think we're overthinking it.",
       "ok": false,
       "whyFr": "Tu écartes un risque juridique réel avec un argument faible, sans preuve."
      },
      {
       "t": "If you're so scared of the risks, Margaret, maybe you shouldn't have proposed this at all.",
       "ok": false,
       "whyFr": "Agressif et injuste : Margaret soulève un point légitime en tant que présidente."
      },
      {
       "t": "That's a legitimate worry. I'll look into whether the residents' association's policy covers public events, and report back.",
       "ok": true,
       "whyFr": "Tu reconnais la préoccupation et tu t'engages sur une action concrète : exactement ce qu'on attend d'un participant constructif."
      }
     ]
    }
   },
   {
    "s": 0,
    "t": "Thank you, Raj, that'd be a great help. Next: deliveries. Three households need van access on Saturdays, including Mrs Okafor, who's eighty-four."
   },
   {
    "s": 1,
    "t": "And what about ambulances? If the street's blocked, it'd be a nightmare."
   },
   {
    "s": 2,
    "t": "The barriers would be movable, so emergency vehicles could get through in under a minute. The fire service has confirmed it."
   },
   {
    "s": 0,
    "t": "Yes, I have their letter here, dated the ninth of January."
   },
   {
    "s": 1,
    "t": "Well, that's reassuring. I wish someone had mentioned it earlier, to be fair."
   },
   {
    "s": 0,
    "t": "Apologies, that's my fault. I should have circulated it with the agenda."
   },
   {
    "s": 1,
    "t": "No harm done. What about parking, though? My regulars drive in from Kingsbury."
   },
   {
    "s": 2,
    "t": "There's the car park on Mill Lane, five minutes' walk away. Maybe the bakery could offer a discount to anyone with a ticket from there?"
   },
   {
    "choice": {
     "s": 2,
     "promptFr": "À toi de jouer : que réponds-tu ?",
     "options": [
      {
       "t": "Perhaps we could ask the council to subsidise the first hour of parking, and the shops could chip in too. That way nobody feels penalised.",
       "ok": true,
       "whyFr": "Tu proposes un compromis qui partage l'effort (\"chip in\") et tu protège les clients : solution gagnant-gagnant."
      },
      {
       "t": "Regulars who can't walk five minutes aren't worth worrying about, if I'm honest.",
       "ok": false,
       "whyFr": "Condescendant et blessant pour une commerçante dont les clients sont l'enjeu."
      },
      {
       "t": "Honestly, they'll just have to get used to it. Change is never convenient.",
       "ok": false,
       "whyFr": "Réponse fataliste qui ignore le problème soulevé et ne propose aucune solution."
      }
     ]
    }
   },
   {
    "s": 1,
    "t": "Hmm, I like that. I'd have to run it past my accountant, but it's worth a try."
   },
   {
    "s": 0,
    "t": "Wonderful. So, shall we take a show of hands for a six-month trial, rather than a permanent closure?"
   },
   {
    "s": 2,
    "t": "I'd support that, as long as we review it in September with proper data."
   },
   {
    "s": 1,
    "t": "I'm in, provided the start time is half past eight and the figures from a comparable street come back."
   },
   {
    "s": 0,
    "t": "Seven in favour, two against, one abstention. Motion carried."
   },
   {
    "choice": {
     "s": 2,
     "promptFr": "À toi de jouer : que réponds-tu ?",
     "options": [
      {
       "t": "Right, that's settled then. I knew you'd all come round eventually.",
       "ok": false,
       "whyFr": "Ton ton est suffisant et triomphant, ce qui risque de braquer ceux qui ont voté contre."
      },
      {
       "t": "Brilliant, thanks everyone. Shall we set a date for the follow-up meeting so we don't lose momentum?",
       "ok": true,
       "whyFr": "Tu remercies et tu fais avancer le projet avec une proposition pratique (\"lose momentum\" = perdre l'élan)."
      },
      {
       "t": "Good, so the two against can't complain later, since they lost fair and square.",
       "ok": false,
       "whyFr": "Remarque provocatrice qui divise le groupe au lieu de rassembler."
      }
     ]
    }
   },
   {
    "s": 0,
    "t": "Good idea. How about Thursday the twentieth of February, same time?"
   },
   {
    "s": 1,
    "t": "Works for me. I'll bring some pastries, as a peace offering."
   },
   {
    "s": 2,
    "t": "Now you're talking!"
   },
   {
    "s": 0,
    "t": "Right, that's everything. Does anyone have any other business?"
   },
   {
    "s": 1,
    "t": "Just one thing: could someone put the minutes online by Monday?"
   },
   {
    "s": 2,
    "t": "I'll do it tonight, since I've already got the notes."
   },
   {
    "s": 0,
    "t": "Thank you, Raj. If there's nothing else, I'll close the meeting."
   },
   {
    "s": 1,
    "t": "And if it rains on the first Saturday, I'm blaming you, Margaret."
   },
   {
    "s": 0,
    "t": "Noted, Helen. I'll bring a bigger umbrella."
   }
  ],
  "questions": [
   {
    "q": "Why is Helen worried about the proposal?",
    "opts": [
     "She dislikes the noise from stalls",
     "Saturday accounts for a large part of her income",
     "She lives at the end of the street",
     "She disagrees with the council's budget"
    ],
    "correct": 1,
    "whyFr": "Elle réalise près de quarante pour cent de son chiffre d'affaires le samedi."
   },
   {
    "q": "How much money would the residents have to raise themselves?",
    "opts": [
     "Eleven thousand pounds",
     "Four thousand pounds",
     "Four thousand five hundred pounds",
     "Fifteen thousand five hundred pounds"
    ],
    "correct": 2,
    "whyFr": "Le conseil offre 11 000 £ mais il faut trouver 4 500 £ de plus."
   },
   {
    "q": "What does Helen mean by \"Hardly comparable, is it?\"",
    "opts": [
     "She thinks the Elm Street figures are probably useful",
     "She is agreeing with Raj completely",
     "She doubts the Elm Street results apply to Alder Road",
     "She has never visited Elm Street"
    ],
    "correct": 2,
    "whyFr": "Question rhétorique : elle sous-entend que les deux rues sont trop différentes."
   },
   {
    "q": "What can be inferred from Helen's remark \"I wish someone had mentioned it earlier\"?",
    "opts": [
     "She feels information was not shared well enough",
     "She wants to leave the meeting",
     "She has never trusted the fire service",
     "She believes the letter is fake"
    ],
    "correct": 0,
    "whyFr": "Elle regrette un manque de communication, ce que Margaret reconnaît aussitôt."
   },
   {
    "q": "What was finally decided at the meeting?",
    "opts": [
     "A permanent closure of Alder Road",
     "A six-month trial with a review in September",
     "To cancel the project",
     "To hold the market on Sundays instead"
    ],
    "correct": 1,
    "whyFr": "Ils votent pour un essai de six mois avec évaluation en septembre."
   },
   {
    "q": "How does Helen show she has softened her position at the end?",
    "opts": [
     "She votes against the motion",
     "She leaves without speaking",
     "She says she'll vote yes if conditions are met and brings pastries",
     "She asks for a new vote"
    ],
    "correct": 2,
    "whyFr": "Elle accepte sous conditions (\"provided...\") et plaisante avec des pâtisseries en signe d'apaisement."
   }
  ],
  "expressions": [
   {
    "en": "jump in",
    "fr": "intervenir, couper la parole poliment"
   },
   {
    "en": "footfall",
    "fr": "la fréquentation (d'un lieu commercial)"
   },
   {
    "en": "chip in",
    "fr": "mettre la main à la poche, contribuer"
   },
   {
    "en": "run it past someone",
    "fr": "soumettre l'idée à quelqu'un pour avis"
   },
   {
    "en": "a show of hands",
    "fr": "un vote à main levée"
   },
   {
    "en": "lose momentum",
    "fr": "perdre l'élan"
   }
  ],
  "level": "B2"
 },
 {
  "id": 8,
  "title": "A Second Opinion",
  "topicFr": "Avis médical et mode de vie",
  "situationFr": "Mark, 48 ans, consulte la docteure Patel pour un deuxième avis. Son médecin traitant veut lui prescrire tout de suite des médicaments contre le cholestérol et la tension.",
  "speakers": [
   {
    "name": "Dr Patel",
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
    "t": "Come in, Mr Reeves. Do sit down. I've had a look at the notes your GP sent over. What would you like to get out of today?"
   },
   {
    "s": 1,
    "t": "Well, to be frank, I'm a bit torn. My GP wants me on statins and blood pressure tablets straight away, but I'm only forty-eight and I'd rather not be on pills for life."
   },
   {
    "s": 0,
    "t": "That's understandable. Let's go through the numbers. Your cholesterol was 6.8, and your blood pressure averaged 150 over 95 across three readings."
   },
   {
    "s": 1,
    "t": "Which sounds bad, doesn't it?"
   },
   {
    "s": 0,
    "t": "It's not great, but it isn't an emergency either. Your ten-year cardiovascular risk comes out at around fourteen percent, which is moderate."
   },
   {
    "choice": {
     "s": 1,
     "promptFr": "À toi de jouer : que réponds-tu ?",
     "options": [
      {
       "t": "Fourteen percent is nothing, so I suppose I can carry on exactly as I am.",
       "ok": false,
       "whyFr": "Tu minimises un risque modéré et tu en tires une conclusion imprudente, contraire à ce que dit le médecin."
      },
      {
       "t": "So my GP was wrong to suggest pills, then? He obviously doesn't know what he's doing.",
       "ok": false,
       "whyFr": "Tu accuses ton médecin à tort : la docteure n'a pas dit qu'il se trompait."
      },
      {
       "t": "So would you say there's room to try changing my lifestyle first, before committing to medication?",
       "ok": true,
       "whyFr": "Question ouverte, prudente et logique, qui exprime ton souhait sans rejeter l'avis du médecin traitant."
      }
     ]
    }
   },
   {
    "s": 0,
    "t": "In your case, yes, I think a three-month trial is justifiable. Had your risk been above twenty percent, I wouldn't have suggested it."
   },
   {
    "s": 1,
    "t": "What would that involve, exactly?"
   },
   {
    "s": 0,
    "t": "Mostly diet and exercise. Cutting down on salt, ideally under six grams a day, and doing about a hundred and fifty minutes of brisk walking a week."
   },
   {
    "s": 1,
    "t": "Hmm. I work sixty-hour weeks, so that's easier said than done."
   },
   {
    "s": 0,
    "t": "I know. Most people tell me the same. But even three twenty-minute walks a day add up, and it costs nothing."
   },
   {
    "s": 1,
    "t": "What about alcohol? I'd say I have about four pints at the weekend."
   },
   {
    "s": 0,
    "t": "Honestly, that's probably contributing. Getting down to the recommended fourteen units a week could knock five points off your systolic reading."
   },
   {
    "s": 1,
    "t": "Five points? That's more than I expected."
   },
   {
    "s": 0,
    "t": "Quite. And losing even five kilos would make a similar difference. You're currently ninety-four kilos, aren't you?"
   },
   {
    "choice": {
     "s": 1,
     "promptFr": "À toi de jouer : que réponds-tu ?",
     "options": [
      {
       "t": "That's right. I'd been meaning to lose some weight anyway, so perhaps this is the push I needed.",
       "ok": true,
       "whyFr": "Tu confirmes le fait et tu montres une attitude positive et motivée (\"the push I needed\")."
      },
      {
       "t": "Yes, but I've always been big-boned, so I doubt there's much I can do.",
       "ok": false,
       "whyFr": "Excuse défaitiste qui contredit ce que le médecin vient d'expliquer : 5 kilos suffisent à faire une différence."
      },
      {
       "t": "Yes, though weight is a personal matter, and I'd prefer not to discuss it.",
       "ok": false,
       "whyFr": "Tu fermes la conversation alors que tu es venu chercher des conseils : réponse illogique dans ce contexte."
      }
     ]
    }
   },
   {
    "s": 0,
    "t": "Good. Now, I should be upfront: if your readings haven't improved by the spring, I'd recommend starting medication. It's not a failure, it's simply a tool."
   },
   {
    "s": 1,
    "t": "I suppose I'd been viewing tablets as admitting defeat."
   },
   {
    "s": 0,
    "t": "A lot of patients do. But a statin, for example, can cut your cholesterol by about forty percent, with side effects that are, in most cases, mild."
   },
   {
    "s": 1,
    "t": "What sort of side effects?"
   },
   {
    "s": 0,
    "t": "Muscle aches, mainly, in around one in ten people. If that happened, we'd simply switch brands."
   },
   {
    "choice": {
     "s": 1,
     "promptFr": "À toi de jouer : que réponds-tu ?",
     "options": [
      {
       "t": "Muscle aches? Then I'm definitely not touching them, whatever you say.",
       "ok": false,
       "whyFr": "Réaction excessive : tu rejettes tout en bloc alors que le médecin a dit que l'effet est léger et gérable."
      },
      {
       "t": "That's reassuring. If I did start, would I have to stay on them indefinitely, or could I come off later?",
       "ok": true,
       "whyFr": "Tu réagis calmement et tu poses une question précise et pertinente sur la durée du traitement."
      },
      {
       "t": "I read online that statins are dangerous, so you can't convince me otherwise.",
       "ok": false,
       "whyFr": "Tu t'appuies sur une source vague et tu refuses d'écouter l'expertise du médecin."
      }
     ]
    }
   },
   {
    "s": 0,
    "t": "Some people do come off if they've transformed their lifestyle, but it's not a decision to take lightly, and we'd monitor you closely."
   },
   {
    "s": 1,
    "t": "And what about home monitoring? Should I buy a blood pressure cuff?"
   },
   {
    "s": 0,
    "t": "Yes, I'd recommend a validated one, around thirty pounds. Take readings twice a day for a week before you come back."
   },
   {
    "s": 1,
    "t": "Right. And when should I come back?"
   },
   {
    "s": 0,
    "t": "Twelve weeks from now. I'll book a blood test for the week before."
   },
   {
    "s": 1,
    "t": "Should I tell my GP I came here?"
   },
   {
    "s": 0,
    "t": "I'd say yes. We're on the same side. With your consent, I'll send him a letter summarising everything."
   },
   {
    "choice": {
     "s": 1,
     "promptFr": "À toi de jouer : que réponds-tu ?",
     "options": [
      {
       "t": "No, don't bother. He doesn't need to know, and I'd rather keep him out of it.",
       "ok": false,
       "whyFr": "Contredit ta propre question et nuit à la continuité des soins ; ton ton est aussi peu transparent."
      },
      {
       "t": "Yes, tell him I'd like a different GP, since he was so quick to prescribe.",
       "ok": false,
       "whyFr": "Tu transformes une demande d'avis en reproche : disproportionné et injuste."
      },
      {
       "t": "Please do. I don't want him to think I went behind his back, because he's been good to me, really.",
       "ok": true,
       "whyFr": "Tu donnes ton accord et tu expliques ton souci de loyauté (\"went behind his back\" = agir dans le dos de quelqu'un)."
      }
     ]
    }
   },
   {
    "s": 0,
    "t": "Of course. Take this leaflet on the DASH diet, and try not to be too hard on yourself."
   },
   {
    "s": 1,
    "t": "Just one last thing: is it worth taking fish oil supplements?"
   },
   {
    "s": 0,
    "t": "The evidence is patchy, I'm afraid. I'd spend the money on decent walking shoes instead."
   },
   {
    "s": 1,
    "t": "Ha! Fair enough. I'll start this weekend."
   },
   {
    "s": 0,
    "t": "Good. And do ring the surgery straight away if you get chest pains or severe headaches."
   },
   {
    "s": 1,
    "t": "Will do. Should I cut out caffeine as well?"
   },
   {
    "s": 0,
    "t": "No need. Two or three coffees a day is fine."
   },
   {
    "s": 1,
    "t": "Thanks, Doctor. I feel a lot less panicked than when I walked in."
   },
   {
    "s": 0,
    "t": "Good. That's half the battle."
   }
  ],
  "questions": [
   {
    "q": "Why is Mark seeking a second opinion?",
    "opts": [
     "He doesn't trust the blood test results",
     "He doesn't want to take pills for life at forty-eight",
     "His GP refused to treat him",
     "He wants a cheaper treatment"
    ],
    "correct": 1,
    "whyFr": "Il est partagé : il ne veut pas être sous médicaments à vie à son âge."
   },
   {
    "q": "What does Dr Patel mean by \"Had your risk been above twenty percent, I wouldn't have suggested it\"?",
    "opts": [
     "Medication would have been advised straight away",
     "His risk is above twenty percent",
     "She never recommends lifestyle changes",
     "His GP made a calculation error"
    ],
    "correct": 0,
    "whyFr": "Mixed conditional implicite : avec un risque plus élevé, elle n'aurait pas proposé d'essai sans médicaments."
   },
   {
    "q": "What does she say about reducing alcohol?",
    "opts": [
     "It would have no effect",
     "It could lower his systolic reading by about five points",
     "It is the only thing he needs to change",
     "It must stop completely"
    ],
    "correct": 1,
    "whyFr": "Passer à quatorze unités par semaine pourrait faire baisser la systolique d'environ cinq points."
   },
   {
    "q": "How does Dr Patel view the use of medication?",
    "opts": [
     "As a last resort she wants to avoid",
     "As proof that the patient has failed",
     "As a useful tool if lifestyle changes aren't enough",
     "As unnecessary at any stage"
    ],
    "correct": 2,
    "whyFr": "Elle précise que ce n'est pas un échec, \"simply a tool\"."
   },
   {
    "q": "What is the implication of Mark saying \"easier said than done\"?",
    "opts": [
     "He thinks the doctor is lying",
     "He finds it hard to fit exercise into a busy schedule",
     "He has already tried the plan",
     "He refuses to exercise"
    ],
    "correct": 1,
    "whyFr": "Cette expression traduit la difficulté pratique, ici liée à ses soixante heures de travail."
   },
   {
    "q": "When will Mark next see Dr Patel?",
    "opts": [
     "In one week",
     "In three months, roughly twelve weeks",
     "In the spring of next year",
     "After his blood test only"
    ],
    "correct": 1,
    "whyFr": "Elle dit \"twelve weeks from now\", soit environ trois mois."
   }
  ],
  "expressions": [
   {
    "en": "I'm a bit torn",
    "fr": "j'hésite, je suis partagé"
   },
   {
    "en": "easier said than done",
    "fr": "plus facile à dire qu'à faire"
   },
   {
    "en": "knock five points off",
    "fr": "faire baisser de cinq points"
   },
   {
    "en": "admitting defeat",
    "fr": "s'avouer vaincu"
   },
   {
    "en": "come off (a medication)",
    "fr": "arrêter (un traitement)"
   },
   {
    "en": "half the battle",
    "fr": "la moitié du chemin"
   }
  ],
  "level": "B2"
 },
 {
  "id": 9,
  "title": "The Deposit Dispute",
  "topicFr": "Litige sur le dépôt de garantie",
  "situationFr": "À la fin de son bail, Jamie rencontre Sandra, de l'agence immobilière, qui veut retenir 610 livres sur sa caution de 1 400 livres. Il conteste certains points.",
  "speakers": [
   {
    "name": "Sandra",
    "voice": "f"
   },
   {
    "name": "Jamie",
    "voice": "m"
   }
  ],
  "lines": [
   {
    "s": 0,
    "t": "Hi Jamie, thanks for coming in. I've got the check-out report here, and I'm afraid there are a few deductions from your fourteen hundred pound deposit."
   },
   {
    "s": 1,
    "t": "Right. Go on, then. I did spend a whole weekend scrubbing that place, so I'm hoping it's not too bad."
   },
   {
    "s": 0,
    "t": "The total comes to six hundred and ten pounds. The biggest item is the living room carpet, three hundred and fifty, for a red wine stain by the window."
   },
   {
    "s": 1,
    "t": "Hold on. That carpet was already worn through in places when I moved in, in August twenty twenty-two. It's in the inventory."
   },
   {
    "s": 0,
    "t": "It does say \"fair condition\", I'll give you that. But it didn't say \"stained\"."
   },
   {
    "choice": {
     "s": 1,
     "promptFr": "À toi de jouer : que réponds-tu ?",
     "options": [
      {
       "t": "That stain was there before I moved in, I'm positive. You must have missed it.",
       "ok": false,
       "whyFr": "Tu affirmes sans preuve, alors que l'inventaire ne mentionne aucune tache : ta position perd en crédibilité."
      },
      {
       "t": "True, there's a stain, and I'll own up to that. But surely you can't charge full replacement for a four-year-old carpet?",
       "ok": true,
       "whyFr": "Tu reconnais ta part de responsabilité (\"own up to\") puis tu avances un argument juste : la vétusté."
      },
      {
       "t": "It's just a bit of wine. Carpets get stained, so I'm not paying a penny.",
       "ok": false,
       "whyFr": "Tu refuses toute responsabilité alors que la tache est réelle : position peu diplomate et difficile à défendre."
      }
     ]
    }
   },
   {
    "s": 0,
    "t": "Well, the agreement says replacement cost, but I take your point about depreciation. Carpets are generally given a life of about eight years."
   },
   {
    "s": 1,
    "t": "So by that logic, I'd owe about half at most, and given the existing wear, probably less."
   },
   {
    "s": 0,
    "t": "Possibly. Let me note that. Next, the walls: there are marks from picture hooks and some scuffs in the hallway. We've put down one hundred and twenty pounds for repainting."
   },
   {
    "s": 1,
    "t": "Come on, that's normal wear and tear. Nobody lives in a flat for three years without leaving a few scuffs."
   },
   {
    "s": 0,
    "t": "Picture hooks, sure. But the large patch behind the sofa looks like a crayon mark."
   },
   {
    "s": 1,
    "t": "Ah, that was my niece, to be fair. I did try to wipe it off, but it wouldn't shift."
   },
   {
    "choice": {
     "s": 1,
     "promptFr": "À toi de jouer : que réponds-tu ?",
     "options": [
      {
       "t": "Fair enough, that one's on me. Would a cleaning product cost less than repainting the whole wall, though? It's quite small.",
       "ok": true,
       "whyFr": "Tu assumes la responsabilité et tu négocies un coût proportionné : la bonne attitude dans un litige."
      },
      {
       "t": "Children will be children, so I think you'll find the landlord should just absorb it.",
       "ok": false,
       "whyFr": "Tu rejettes la faute sur le propriétaire alors que tu viens d'admettre que la marque vient de ta nièce."
      },
      {
       "t": "I can't remember that at all. Maybe it was there before, and nobody noticed.",
       "ok": false,
       "whyFr": "Contradictoire : tu viens de dire que c'était ta nièce, tu perds ta crédibilité."
      }
     ]
    }
   },
   {
    "s": 0,
    "t": "It's about the size of a dinner plate, so we could probably touch it up for forty pounds rather than repaint. I'll amend that."
   },
   {
    "s": 1,
    "t": "Thanks. And what's the rest?"
   },
   {
    "s": 0,
    "t": "Professional cleaning, ninety-five pounds, because the oven was greasy, and a replacement curtain rail at forty-five."
   },
   {
    "s": 1,
    "t": "The oven I'll accept. I ran out of time. But the curtain rail was loose when I arrived. I reported it in September twenty twenty-two, by email."
   },
   {
    "s": 0,
    "t": "Did you? I don't have that in the file."
   },
   {
    "s": 1,
    "t": "I've got the email on my phone, actually. Dated the twelfth of September, and the reply says \"we'll send someone\", though nobody ever came."
   },
   {
    "s": 0,
    "t": "Hmm. If that's the case, then it would be unreasonable to charge you."
   },
   {
    "choice": {
     "s": 1,
     "promptFr": "À toi de jouer : que réponds-tu ?",
     "options": [
      {
       "t": "I'd show you, but frankly you should have kept better records. It's your mistake.",
       "ok": false,
       "whyFr": "Ton ton est accusateur alors que Sandra vient de t'écouter : tu risques de la braquer."
      },
      {
       "t": "If you don't drop it, I'll take you to court and ruin your reputation.",
       "ok": false,
       "whyFr": "Menace disproportionnée et inutile alors que Sandra est déjà en train de céder."
      },
      {
       "t": "I can forward it to you right now, if that helps. I'd rather we sorted this out between us than go to adjudication.",
       "ok": true,
       "whyFr": "Tu proposes une preuve concrète et tu privilégies un règlement à l'amiable : poli et stratégique."
      }
     ]
    }
   },
   {
    "s": 0,
    "t": "Please do. I'd rather avoid the deposit scheme too, as the process takes weeks."
   },
   {
    "s": 1,
    "t": "Agreed. So where are we? Carpet, oven, wall..."
   },
   {
    "s": 0,
    "t": "Carpet, let's say one hundred and seventy-five at fifty percent, the wall touch-up at forty, the oven clean at ninety-five. That's three hundred and ten."
   },
   {
    "s": 1,
    "t": "Hmm, I was hoping to get most of it back, but I suppose that's fairer than six hundred and ten."
   },
   {
    "s": 0,
    "t": "And I'd have to get the landlord's approval, mind you. He may not be thrilled."
   },
   {
    "s": 1,
    "t": "If he's reasonable, he'll see the carpet had a limited lifespan anyway. Not to mention the rail."
   },
   {
    "choice": {
     "s": 1,
     "promptFr": "À toi de jouer : que réponds-tu ?",
     "options": [
      {
       "t": "Well, if he refuses, I'll simply stop talking to you and let the scheme decide.",
       "ok": false,
       "whyFr": "Réponse froide et menaçante qui ferme le dialogue avec la personne qui t'aide."
      },
      {
       "t": "Understood. Could you confirm the revised figure in writing by Friday, so I know where I stand?",
       "ok": true,
       "whyFr": "Tu restes courtois et tu demandes une trace écrite avec une échéance : réflexe indispensable dans un litige."
      },
      {
       "t": "Then you'd better convince him quickly, because otherwise it's your job on the line.",
       "ok": false,
       "whyFr": "Tu mets une pression déplacée sur Sandra, qui n'est pas responsable de la décision finale."
      }
     ]
    }
   },
   {
    "s": 0,
    "t": "I'll email you by Friday the fourth. If he agrees, you'll get one thousand and ninety pounds back within five working days."
   },
   {
    "s": 1,
    "t": "And the money goes straight back into my account?"
   },
   {
    "s": 0,
    "t": "Yes, the same one you paid from. You'll get a notification."
   },
   {
    "s": 1,
    "t": "Perfect. What about the keys? I dropped them at reception on Monday."
   },
   {
    "s": 0,
    "t": "Yes, they're logged. Everything's fine on that side."
   },
   {
    "s": 1,
    "t": "And the final utility readings?"
   },
   {
    "s": 0,
    "t": "Already submitted. You won't hear from the energy company."
   },
   {
    "s": 1,
    "t": "Great, thank you. I appreciate you being so fair."
   },
   {
    "s": 0,
    "t": "Not at all. I'd just ask that next time you photograph everything on moving day."
   },
   {
    "s": 1,
    "t": "Lesson learned!"
   }
  ],
  "questions": [
   {
    "q": "What was the total of the deductions Sandra first proposed?",
    "opts": [
     "Three hundred and ten pounds",
     "One thousand and ninety pounds",
     "Six hundred and ten pounds",
     "Fourteen hundred pounds"
    ],
    "correct": 2,
    "whyFr": "Elle annonce 610 £ de retenues sur les 1 400 £ de caution."
   },
   {
    "q": "Why does Jamie argue the carpet charge is unfair?",
    "opts": [
     "He had never walked on it",
     "It was old and already worn when he arrived",
     "The stain was caused by the landlord",
     "The agreement forbids any charge"
    ],
    "correct": 1,
    "whyFr": "Il rappelle que la moquette était déjà usée et que le coût de remplacement doit tenir compte de la vétusté."
   },
   {
    "q": "What does Jamie's remark \"Nobody lives in a flat for three years without leaving a few scuffs\" illustrate?",
    "opts": [
     "An admission of guilt",
     "The idea of normal wear and tear",
     "A threat to leave",
     "A request for a discount"
    ],
    "correct": 1,
    "whyFr": "Il défend l'usure normale, qui ne doit pas être facturée au locataire."
   },
   {
    "q": "Which deductions does Jamie accept without argument?",
    "opts": [
     "The oven cleaning",
     "The curtain rail",
     "The carpet",
     "None of them"
    ],
    "correct": 0,
    "whyFr": "Il dit \"The oven I'll accept\" : il avoue ne pas avoir eu le temps de le nettoyer."
   },
   {
    "q": "What can be inferred from Sandra's comment \"He may not be thrilled\"?",
    "opts": [
     "The landlord might refuse the reduced charges",
     "The landlord is delighted by the deal",
     "The landlord has already agreed",
     "Sandra no longer works for him"
    ],
    "correct": 0,
    "whyFr": "Ton ironique et litote : elle sous-entend que le propriétaire pourrait ne pas apprécier la réduction."
   },
   {
    "q": "How much would Jamie get back if the landlord agrees?",
    "opts": [
     "Three hundred and ten pounds",
     "One thousand and ninety pounds",
     "Seven hundred pounds",
     "Nine hundred pounds"
    ],
    "correct": 1,
    "whyFr": "1 400 - 310 = 1 090 livres, versées sous cinq jours ouvrables."
   }
  ],
  "expressions": [
   {
    "en": "wear and tear",
    "fr": "usure normale"
   },
   {
    "en": "own up to something",
    "fr": "avouer, reconnaître une faute"
   },
   {
    "en": "take your point",
    "fr": "admettre votre argument"
   },
   {
    "en": "touch it up",
    "fr": "faire une retouche"
   },
   {
    "en": "sort it out between us",
    "fr": "régler cela entre nous"
   },
   {
    "en": "know where I stand",
    "fr": "savoir à quoi m'en tenir"
   }
  ],
  "level": "B2"
 },
 {
  "id": 10,
  "title": "AI at Work",
  "topicFr": "L'IA au travail : débat",
  "situationFr": "Pendant le déjeuner, Nadia et Ben, collègues, discutent d'un article sur une assurance qui remplace des centaines d'emplois par de l'intelligence artificielle. Ils ne sont pas du même avis.",
  "speakers": [
   {
    "name": "Nadia",
    "voice": "f"
   },
   {
    "name": "Ben",
    "voice": "m"
   }
  ],
  "lines": [
   {
    "s": 0,
    "t": "Did you see that article about Halden Insurance? They're cutting four hundred claims jobs by the end of twenty twenty-eight and replacing them with AI."
   },
   {
    "s": 1,
    "t": "I did. It's all over the news. Honestly, I found it a bit depressing."
   },
   {
    "s": 0,
    "t": "Really? I thought it was fairly predictable. Companies have been automating routine work for decades."
   },
   {
    "s": 1,
    "t": "Sure, but this isn't a factory line, is it? Those were people reading claims, judging whether someone was telling the truth."
   },
   {
    "s": 0,
    "t": "Though, to be fair, much of it was copying figures between systems. I did that job for two years at my first company, and I wouldn't wish it on anyone."
   },
   {
    "choice": {
     "s": 1,
     "promptFr": "À toi de jouer : que réponds-tu ?",
     "options": [
      {
       "t": "Boring or not, it was their livelihood, so you're being incredibly insensitive.",
       "ok": false,
       "whyFr": "Tu attaques Nadia au lieu de répondre à son argument, alors qu'elle parle d'expérience personnelle."
      },
      {
       "t": "Exactly, so they should be grateful the machines are saving them from it.",
       "ok": false,
       "whyFr": "Cynique et illogique : les employés perdent leur emploi, ils n'ont pas de raison d'être reconnaissants."
      },
      {
       "t": "Fair point, nobody dreams of data entry. But I'd say the question is what happens to the people doing it, not whether the work is dull.",
       "ok": true,
       "whyFr": "Tu concèdes un point puis tu reformules le vrai enjeu : un contre-argument poli et nuancé."
      }
     ]
    }
   },
   {
    "s": 0,
    "t": "Right, and the company says they'll retrain most of them. Apparently, the CEO said nobody would be \"left behind\"."
   },
   {
    "s": 1,
    "t": "Yeah, well, politicians say that too. Do you actually believe it?"
   },
   {
    "s": 0,
    "t": "I'd like to, at least. Look, Halden's already offered a hundred and fifty of them places on a data analysis course."
   },
   {
    "s": 1,
    "t": "A hundred and fifty out of four hundred. I make that less than forty percent, Nadia."
   },
   {
    "s": 0,
    "t": "Okay, touché. But some will retire, and some will leave anyway. Turnover in that sector is around twenty percent a year."
   },
   {
    "s": 1,
    "t": "Fair enough. Still, if I were in my fifties and had spent thirty years there, I wouldn't feel reassured by a course."
   },
   {
    "s": 0,
    "t": "No, probably not. Mind you, wasn't it the same panic when spreadsheets came in? Everyone said accountants would vanish."
   },
   {
    "s": 1,
    "t": "And yet there were fewer bookkeepers afterwards, weren't there?"
   },
   {
    "choice": {
     "s": 1,
     "promptFr": "À toi de jouer : que réponds-tu ?",
     "options": [
      {
       "t": "Admittedly, but new roles appeared too, so the comparison cuts both ways. What worries me is the speed this time.",
       "ok": true,
       "whyFr": "Tu reconnais l'argument (\"admittedly\") tout en le nuançant et en déplaçant le débat sur la vitesse du changement."
      },
      {
       "t": "Spreadsheets were nothing, and anyone who thinks this is similar is just being naive.",
       "ok": false,
       "whyFr": "Tu insultes indirectement Nadia et tu balaies son exemple sans argument."
      },
      {
       "t": "I couldn't say. I've never really understood how spreadsheets work anyway.",
       "ok": false,
       "whyFr": "Réponse hors sujet qui esquive le débat au lieu de réagir à la remarque."
      }
     ]
    }
   },
   {
    "s": 0,
    "t": "Speed's a good point. Though if I'm honest, our own team's using an AI tool now, and it saves me about six hours a week."
   },
   {
    "s": 1,
    "t": "Six hours? Doing what?"
   },
   {
    "s": 0,
    "t": "Mainly summarising meeting notes and drafting first versions of reports. I still check everything, obviously."
   },
   {
    "s": 1,
    "t": "Ah, but that's the catch. Studies suggest people stop checking after a few weeks. Remember the lawyer who cited cases that didn't exist?"
   },
   {
    "s": 0,
    "t": "Ha, yes, that was a disaster. But that's user error, not a flaw in the idea itself."
   },
   {
    "s": 1,
    "t": "Is it, though? If a tool makes confident mistakes, surely it's partly the tool's fault."
   },
   {
    "s": 0,
    "t": "Hmm, I suppose I'd put it differently: it's a very fast but slightly careless intern."
   },
   {
    "s": 1,
    "t": "An intern who never sleeps and never asks for a pay rise. That's rather the problem for the rest of us."
   },
   {
    "choice": {
     "s": 1,
     "promptFr": "À toi de jouer : que réponds-tu ?",
     "options": [
      {
       "t": "So you'd happily let the intern take your job as long as the reports got written?",
       "ok": false,
       "whyFr": "Sarcastique et hostile : tu déformes les propos de Nadia au lieu de poursuivre le débat."
      },
      {
       "t": "Well, I'd rather it complemented us than replaced us, so maybe the real issue is how managers choose to use it.",
       "ok": true,
       "whyFr": "Tu recentres le débat sur la responsabilité des managers, avec une formule nuancée (\"I'd rather ... than ...\")."
      },
      {
       "t": "Whatever happens, I'm sure it won't affect anyone in our office.",
       "ok": false,
       "whyFr": "Contradictoire avec tes inquiétudes exprimées plus haut : optimisme déplacé et sans justification."
      }
     ]
    }
   },
   {
    "s": 0,
    "t": "Exactly. If bosses see it as a way to cut costs, we're in trouble. If they see it as a way to free people up, it could be great."
   },
   {
    "s": 1,
    "t": "And which is more likely, do you reckon?"
   },
   {
    "s": 0,
    "t": "Honestly? Probably a mix of both, depending on the quarter's results."
   },
   {
    "s": 1,
    "t": "That's what I was afraid of. Our own director mentioned \"efficiency savings\" last month."
   },
   {
    "s": 0,
    "t": "Did she? That's a bit ominous. Though she also approved the training budget, didn't she?"
   },
   {
    "s": 1,
    "t": "She did, twelve thousand pounds, I think. So perhaps there's hope."
   },
   {
    "choice": {
     "s": 1,
     "promptFr": "À toi de jouer : que réponds-tu ?",
     "options": [
      {
       "t": "Let's hope so. Shall we put our names down for that training session on Thursday, just in case?",
       "ok": true,
       "whyFr": "Tu restes mesuré (\"let's hope so\") et tu proposes une action pratique et collective, ce qui conclut bien le débat."
      },
      {
       "t": "If the director cared about us, she'd have told us what \"efficiency savings\" means.",
       "ok": false,
       "whyFr": "Tu critiques la directrice sans preuve, alors qu'elle vient d'approuver un budget de formation."
      },
      {
       "t": "I wouldn't trust her for a second. Managers always say one thing and do another.",
       "ok": false,
       "whyFr": "Généralisation hâtive et injuste, qui contredit ton \"perhaps there's hope\" juste avant."
      }
     ]
    }
   },
   {
    "s": 0,
    "t": "Good idea. I'll sign us up after lunch. And I'll buy the coffees, since I suspect I've lost this argument."
   },
   {
    "s": 1,
    "t": "You haven't lost. We've just agreed to be nervous together."
   },
   {
    "s": 0,
    "t": "Anyway, shall we head back? We've got the quarterly review at two."
   },
   {
    "s": 1,
    "t": "Already? I'll grab my laptop. I've barely touched my sandwich."
   },
   {
    "s": 0,
    "t": "Typical! Eat while you walk."
   },
   {
    "s": 1,
    "t": "Only if you promise not to mention AI in the meeting."
   },
   {
    "s": 0,
    "t": "No promises. It's on the agenda, actually."
   },
   {
    "s": 1,
    "t": "Of course it is."
   }
  ],
  "questions": [
   {
    "q": "What does Halden Insurance plan to do?",
    "opts": [
     "Hire four hundred new AI specialists",
     "Replace about four hundred claims jobs with AI by 2028",
     "Close its claims department immediately",
     "Offer a salary rise to claims staff"
    ],
    "correct": 1,
    "whyFr": "Ils suppriment 400 emplois de gestion des sinistres d'ici fin 2028."
   },
   {
    "q": "Why does Ben challenge the retraining promise?",
    "opts": [
     "Only about 150 of 400 staff were offered courses",
     "The courses cost too much",
     "Nobody wants to retrain",
     "The CEO has resigned"
    ],
    "correct": 0,
    "whyFr": "150 sur 400 font moins de 40 %, ce qui contredit le \"nobody left behind\"."
   },
   {
    "q": "What does Nadia mean when she calls the AI tool \"a very fast but slightly careless intern\"?",
    "opts": [
     "It is extremely reliable and needs no checking",
     "It works quickly but its output must still be checked",
     "It can only do very simple jobs",
     "It is too slow to be useful"
    ],
    "correct": 1,
    "whyFr": "Rapide mais parfois négligent : il faut tout relire."
   },
   {
    "q": "What is Ben's main worry about people using AI tools over time?",
    "opts": [
     "They will stop checking the results",
     "They will refuse to use them",
     "They will become too expensive",
     "They will take too much time"
    ],
    "correct": 0,
    "whyFr": "Il cite des études selon lesquelles on arrête de vérifier au bout de quelques semaines."
   },
   {
    "q": "How does Nadia react when Ben corrects her figures about the course?",
    "opts": [
     "She gets angry and leaves",
     "She admits he has a point with \"touché\"",
     "She repeats her first claim",
     "She changes the subject entirely"
    ],
    "correct": 1,
    "whyFr": "\"Okay, touché\" montre qu'elle reconnaît poliment que son contradicteur a marqué un point."
   },
   {
    "q": "What can be inferred from \"I'll buy the coffees, since I suspect I've lost this argument\"?",
    "opts": [
     "She is angry with Ben",
     "She is joking and accepts that Ben made good points",
     "She wants to leave her job",
     "She thinks the director is wrong"
    ],
    "correct": 1,
    "whyFr": "Ton humoristique : elle admet en plaisantant que Ben a gagné des points."
   }
  ],
  "expressions": [
   {
    "en": "touché",
    "fr": "bien vu / point pour toi"
   },
   {
    "en": "that's the catch",
    "fr": "c'est là que le bât blesse"
   },
   {
    "en": "the comparison cuts both ways",
    "fr": "la comparaison fonctionne dans les deux sens"
   },
   {
    "en": "efficiency savings",
    "fr": "économies d'efficacité (euphémisme pour réductions de coûts)"
   },
   {
    "en": "a bit ominous",
    "fr": "un peu inquiétant, de mauvais augure"
   },
   {
    "en": "put our names down for",
    "fr": "s'inscrire à"
   }
  ],
  "level": "B2"
 }
];
