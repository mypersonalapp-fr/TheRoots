// The Roots — Compréhension orale (Espagnol, A2) : dialogues du quotidien (voix de synthèse du téléphone).
export const COMPREHENSION_ORALE_A2_ES = [
 {
  "id": 1,
  "level": "A2",
  "title": "Pedir cita con el médico",
  "topicFr": "Rendez-vous chez le médecin",
  "situationFr": "Pablo appelle le centre de santé de son quartier : il est malade. Marta, la réceptionniste, lui propose un rendez-vous.",
  "speakers": [
   {
    "name": "Marta",
    "voice": "f"
   },
   {
    "name": "Pablo",
    "voice": "m"
   }
  ],
  "lines": [
   {
    "s": 0,
    "t": "Centro de Salud La Latina, buenos días. Dígame."
   },
   {
    "s": 1,
    "t": "Buenos días. Quiero pedir cita con el médico, por favor. Me duele mucho la garganta desde el lunes."
   },
   {
    "s": 0,
    "t": "¿Tiene fiebre?"
   },
   {
    "s": 1,
    "t": "Sí, ayer tuve treinta y ocho grados por la noche y hoy me duele también la cabeza."
   },
   {
    "s": 0,
    "t": "Entiendo. ¿Me dice su nombre y su fecha de nacimiento?"
   },
   {
    "s": 1,
    "t": "Pablo Herrera Soto. Nací el catorce de marzo de mil novecientos noventa y uno."
   },
   {
    "s": 0,
    "t": "Gracias, señor Herrera. La doctora Navarro tiene un hueco mañana a las nueve y diez o el jueves a las cinco de la tarde."
   },
   {
    "choice": {
     "s": 1,
     "promptFr": "À toi de jouer : que réponds-tu ?",
     "options": [
      {
       "t": "Mañana a las nueve y diez me va bien, gracias.",
       "ok": true,
       "whyFr": "Réponse polie et logique : tu acceptes un des créneaux proposés."
      },
      {
       "t": "Quiero el jueves, tú me das la cita a las cinco.",
       "ok": false,
       "whyFr": "Avec une réceptionniste on vouvoie (usted) ; « tú me das » est trop familier et impoli."
      },
      {
       "t": "Mañana va bien las nueve y diez ser.",
       "ok": false,
       "whyFr": "Phrase agrammaticale : on dit « me va bien » ou « me viene bien »."
      }
     ]
    }
   },
   {
    "s": 0,
    "t": "Perfecto, le apunto mañana a las nueve y diez. Recuerde traer su tarjeta sanitaria."
   },
   {
    "s": 1,
    "t": "Claro. ¿Tengo que llegar antes?"
   },
   {
    "s": 0,
    "t": "Sí, llegue diez minutos antes para rellenar un formulario. Y si empeora esta noche, llame al teléfono de urgencias."
   },
   {
    "s": 1,
    "t": "Muy bien. Muchas gracias por su ayuda."
   },
   {
    "s": 0,
    "t": "De nada. Hasta mañana, señor Herrera."
   }
  ],
  "questions": [
   {
    "q": "¿Desde cuándo le duele la garganta a Pablo?",
    "opts": [
     "Desde el domingo",
     "Desde el lunes",
     "Desde ayer"
    ],
    "correct": 1,
    "whyFr": "Pablo dit : « desde el lunes »."
   },
   {
    "q": "¿Qué temperatura tuvo Pablo ayer por la noche?",
    "opts": [
     "Treinta y nueve grados",
     "Treinta y siete grados",
     "Treinta y ocho grados"
    ],
    "correct": 2,
    "whyFr": "Il dit « treinta y ocho grados »."
   },
   {
    "q": "¿Cuándo es la cita?",
    "opts": [
     "Mañana a las nueve y diez",
     "El jueves a las cinco",
     "Hoy a las nueve y diez"
    ],
    "correct": 0,
    "whyFr": "Il choisit demain à 9 h 10, pas le jeudi."
   },
   {
    "q": "¿Con qué médica tiene la cita?",
    "opts": [
     "Con la doctora Pérez",
     "Con la doctora Navarro",
     "Con el doctor Herrera"
    ],
    "correct": 1,
    "whyFr": "Marta parle de « la doctora Navarro » ; Herrera est le nom du patient."
   },
   {
    "q": "¿Qué tiene que llevar Pablo?",
    "opts": [
     "El DNI",
     "Un análisis de sangre",
     "La tarjeta sanitaria"
    ],
    "correct": 2,
    "whyFr": "Marta dit : « Recuerde traer su tarjeta sanitaria »."
   }
  ],
  "expressions": [
   {
    "es": "pedir cita con el médico",
    "fr": "prendre rendez-vous chez le médecin"
   },
   {
    "es": "Me duele la garganta.",
    "fr": "J'ai mal à la gorge."
   },
   {
    "es": "Tengo fiebre.",
    "fr": "J'ai de la fièvre."
   },
   {
    "es": "Llegue diez minutos antes.",
    "fr": "Arrivez dix minutes avant."
   },
   {
    "es": "¿Me dice su nombre?",
    "fr": "Pouvez-vous me donner votre nom ?"
   }
  ]
 },
 {
  "id": 2,
  "level": "A2",
  "title": "Una cena en el restaurante",
  "topicFr": "Dîner au restaurant",
  "situationFr": "Carmen arrive à un restaurant où elle a réservé. Javier, le serveur, l'installe et prend la commande.",
  "speakers": [
   {
    "name": "Javier",
    "voice": "m"
   },
   {
    "name": "Carmen",
    "voice": "f"
   }
  ],
  "lines": [
   {
    "s": 0,
    "t": "Buenas noches. ¿Tiene reserva?"
   },
   {
    "s": 1,
    "t": "Sí, a nombre de Carmen Ruiz, para dos personas a las nueve."
   },
   {
    "s": 0,
    "t": "Perfecto, señora Ruiz. Su mesa está junto a la ventana. Acompáñeme, por favor."
   },
   {
    "s": 1,
    "t": "Gracias. ¿Nos trae la carta?"
   },
   {
    "s": 0,
    "t": "Ahora mismo se la traigo. Hoy el plato del día es merluza al horno con patatas y cuesta doce euros."
   },
   {
    "s": 1,
    "t": "Mmm, ¿y la paella? La probé aquí el año pasado y estaba riquísima."
   },
   {
    "s": 0,
    "t": "Sí, pero la paella es para dos personas como mínimo. Tarda treinta minutos en prepararse."
   },
   {
    "choice": {
     "s": 1,
     "promptFr": "À toi de jouer : que réponds-tu ?",
     "options": [
      {
       "t": "Entonces la paella para los dos, por favor. Esperamos con calma.",
       "ok": true,
       "whyFr": "Réponse logique et polie : elle accepte l'attente."
      },
      {
       "t": "Entonces la paella. ¡Tráigala en cinco minutos!",
       "ok": false,
       "whyFr": "Impossible (30 minutes de préparation) et trop brusque."
      },
      {
       "t": "Entonces paella yo comer, treinta minutos.",
       "ok": false,
       "whyFr": "Phrase agrammaticale (infinitif au lieu de la forme conjuguée)."
      }
     ]
    }
   },
   {
    "s": 0,
    "t": "Muy bien. ¿Y para beber?"
   },
   {
    "s": 1,
    "t": "Una botella de agua sin gas y una copa de vino blanco, por favor."
   },
   {
    "s": 0,
    "t": "Enseguida. ¿Quieren también algo de entrada?"
   },
   {
    "s": 1,
    "t": "No, gracias. Luego pediremos el postre."
   },
   {
    "s": 0,
    "t": "Estupendo. Les traigo el pan y las bebidas ahora."
   },
   {
    "s": 1,
    "t": "Gracias, es usted muy amable."
   }
  ],
  "questions": [
   {
    "q": "¿A qué hora es la reserva?",
    "opts": [
     "A las ocho",
     "A las nueve",
     "A las diez"
    ],
    "correct": 1,
    "whyFr": "Carmen dit « a las nueve »."
   },
   {
    "q": "¿Dónde está la mesa?",
    "opts": [
     "Junto a la ventana",
     "Cerca de la puerta",
     "En la terraza"
    ],
    "correct": 0,
    "whyFr": "Javier : « Su mesa está junto a la ventana »."
   },
   {
    "q": "¿Cuánto cuesta el plato del día?",
    "opts": [
     "Catorce euros",
     "Diez euros",
     "Doce euros"
    ],
    "correct": 2,
    "whyFr": "La merluza al horno coûte douze euros."
   },
   {
    "q": "¿Cuánto tarda la paella?",
    "opts": [
     "Veinte minutos",
     "Treinta minutos",
     "Cuarenta minutos"
    ],
    "correct": 1,
    "whyFr": "« Tarda treinta minutos en prepararse »."
   },
   {
    "q": "¿Qué pide Carmen para beber?",
    "opts": [
     "Agua con gas y vino blanco",
     "Agua sin gas y vino tinto",
     "Agua sin gas y vino blanco"
    ],
    "correct": 2,
    "whyFr": "Elle commande de l'eau plate et un verre de vin blanc."
   }
  ],
  "expressions": [
   {
    "es": "¿Tiene reserva?",
    "fr": "Avez-vous réservé ?"
   },
   {
    "es": "Acompáñeme, por favor.",
    "fr": "Suivez-moi, s'il vous plaît."
   },
   {
    "es": "¿Nos trae la carta?",
    "fr": "Pouvez-vous nous apporter la carte ?"
   },
   {
    "es": "el plato del día",
    "fr": "le plat du jour"
   },
   {
    "es": "una copa de vino blanco",
    "fr": "un verre de vin blanc"
   }
  ]
 },
 {
  "id": 3,
  "level": "A2",
  "title": "El fin de semana pasado",
  "topicFr": "Raconter son week-end",
  "situationFr": "Lucía et Andrés, deux amis, se racontent ce qu'ils ont fait le week-end dernier.",
  "speakers": [
   {
    "name": "Lucía",
    "voice": "f"
   },
   {
    "name": "Andrés",
    "voice": "m"
   }
  ],
  "lines": [
   {
    "s": 0,
    "t": "¡Hola, Andrés! ¿Qué tal el fin de semana? ¿Hiciste algo especial?"
   },
   {
    "s": 1,
    "t": "¡Hola, Lucía! Sí, el sábado fui a Segovia con mi hermano. Salimos de Madrid a las nueve de la mañana."
   },
   {
    "s": 0,
    "t": "¡Qué bien! ¿Cómo fuisteis?"
   },
   {
    "s": 1,
    "t": "En coche. Tardamos una hora y media porque había mucho tráfico."
   },
   {
    "s": 0,
    "t": "¿Y qué visitasteis?"
   },
   {
    "s": 1,
    "t": "Primero vimos el acueducto y después subimos al Alcázar. Hizo un día precioso."
   },
   {
    "s": 0,
    "t": "¿Comisteis allí?"
   },
   {
    "s": 1,
    "t": "Sí, comimos cochinillo en un restaurante cerca de la catedral. Pagué yo, ¡y costó cuarenta euros por persona!"
   },
   {
    "choice": {
     "s": 0,
     "promptFr": "À toi de jouer : que réponds-tu ?",
     "options": [
      {
       "t": "¡Qué caro! Pero seguro que estaba delicioso.",
       "ok": true,
       "whyFr": "Réaction naturelle et correcte (imparfait pour décrire le goût)."
      },
      {
       "t": "¡Qué caro! Yo comí ayer tú el cochinillo.",
       "ok": false,
       "whyFr": "Phrase incohérente et mal construite."
      },
      {
       "t": "Caro es mucho, no gusta a mí.",
       "ok": false,
       "whyFr": "Mauvaise construction : on dit « Es muy caro » et « no me gusta »."
      }
     ]
    }
   },
   {
    "s": 1,
    "t": "Sí, estaba buenísimo. ¿Y tú? ¿Qué hiciste?"
   },
   {
    "s": 0,
    "t": "Yo me quedé en casa el sábado y el domingo comí con mis padres. Por la tarde vimos una película."
   },
   {
    "s": 1,
    "t": "¿Cuál?"
   },
   {
    "s": 0,
    "t": "Una película española. Me encantó, pero mi padre se durmió a los veinte minutos."
   },
   {
    "s": 1,
    "t": "¡Qué risa! La semana que viene vamos juntos al cine."
   }
  ],
  "questions": [
   {
    "q": "¿A qué hora salieron de Madrid Andrés y su hermano?",
    "opts": [
     "A las siete",
     "A las nueve",
     "A las ocho"
    ],
    "correct": 1,
    "whyFr": "Andrés dit « a las nueve de la mañana »."
   },
   {
    "q": "¿Cuánto tardaron en llegar?",
    "opts": [
     "Una hora y media",
     "Dos horas",
     "Cuarenta y cinco minutos"
    ],
    "correct": 0,
    "whyFr": "« Tardamos una hora y media » à cause du trafic."
   },
   {
    "q": "¿Qué vieron primero en Segovia?",
    "opts": [
     "El Alcázar",
     "El acueducto",
     "La catedral"
    ],
    "correct": 1,
    "whyFr": "« Primero vimos el acueducto »."
   },
   {
    "q": "¿Cuánto costó el cochinillo?",
    "opts": [
     "Cuarenta euros en total",
     "Cuarenta euros por persona",
     "Treinta euros por persona"
    ],
    "correct": 1,
    "whyFr": "« Costó cuarenta euros por persona »."
   },
   {
    "q": "¿Qué le pasó al padre de Lucía durante la película?",
    "opts": [
     "Lloró",
     "Salió a comprar algo",
     "Se durmió a los veinte minutos"
    ],
    "correct": 2,
    "whyFr": "« Mi padre se durmió a los veinte minutos »."
   }
  ],
  "expressions": [
   {
    "es": "¿Qué tal el fin de semana?",
    "fr": "Comment s'est passé le week-end ?"
   },
   {
    "es": "Fui a Segovia.",
    "fr": "Je suis allé à Ségovie."
   },
   {
    "es": "Tardamos una hora y media.",
    "fr": "Nous avons mis une heure et demie."
   },
   {
    "es": "¡Qué caro!",
    "fr": "Que c'est cher !"
   },
   {
    "es": "Me encantó.",
    "fr": "J'ai adoré."
   }
  ]
 },
 {
  "id": 4,
  "level": "A2",
  "title": "Alquilar un piso",
  "topicFr": "Louer un appartement",
  "situationFr": "Daniel téléphone à Mme Gómez, propriétaire, au sujet d'une annonce pour un appartement à louer.",
  "speakers": [
   {
    "name": "Señora Gómez",
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
    "t": "Dígame."
   },
   {
    "s": 1,
    "t": "Buenas tardes. Llamo por el anuncio del piso de la calle Alcalá. ¿Todavía está libre?"
   },
   {
    "s": 0,
    "t": "Sí, todavía está libre. Es un piso de tres habitaciones, con dos baños y terraza."
   },
   {
    "s": 1,
    "t": "¿Cuánto cuesta al mes?"
   },
   {
    "s": 0,
    "t": "Novecientos cincuenta euros. Los gastos de comunidad están incluidos, pero la luz y el agua se pagan aparte."
   },
   {
    "s": 1,
    "t": "Es más barato que otros pisos de la zona. ¿En qué planta está?"
   },
   {
    "s": 0,
    "t": "En la cuarta planta, y hay ascensor. Antes vivía allí una familia con dos niños, por eso está muy cuidado."
   },
   {
    "s": 1,
    "t": "¿Admiten mascotas? Tengo un gato pequeño."
   },
   {
    "s": 0,
    "t": "Sí, no hay problema con los gatos, pero no se permiten perros."
   },
   {
    "choice": {
     "s": 1,
     "promptFr": "À toi de jouer : que réponds-tu ?",
     "options": [
      {
       "t": "Me gustaría visitarlo esta semana. ¿Cuándo puedo ir?",
       "ok": true,
       "whyFr": "Formule polie avec « me gustaría » et vouvoiement implicite."
      },
      {
       "t": "Quiero visitar piso, tú abres la puerta el viernes.",
       "ok": false,
       "whyFr": "Tutoiement inadapté avec une propriétaire inconnue et phrase incorrecte."
      },
      {
       "t": "Visitar yo el piso esta semana, dime cuándo.",
       "ok": false,
       "whyFr": "Phrase agrammaticale et impératif en « tú » inadapté."
      }
     ]
    }
   },
   {
    "s": 0,
    "t": "Claro. ¿Puede venir el jueves a las seis de la tarde?"
   },
   {
    "s": 1,
    "t": "Sí, el jueves a las seis me va perfecto. ¿Cuál es la dirección exacta?"
   },
   {
    "s": 0,
    "t": "Calle Alcalá, número cuarenta y dos. Traiga su DNI y su última nómina, por favor."
   },
   {
    "s": 1,
    "t": "Perfecto, lo llevo todo. Hasta el jueves."
   }
  ],
  "questions": [
   {
    "q": "¿Cuántas habitaciones tiene el piso?",
    "opts": [
     "Dos",
     "Tres",
     "Cuatro"
    ],
    "correct": 1,
    "whyFr": "« Un piso de tres habitaciones »."
   },
   {
    "q": "¿Qué incluye el precio de novecientos cincuenta euros?",
    "opts": [
     "Los gastos de comunidad, pero no la luz",
     "La luz y el agua",
     "Todos los gastos"
    ],
    "correct": 0,
    "whyFr": "La comunidad est incluse ; l'électricité et l'eau se paient à part."
   },
   {
    "q": "¿En qué planta está el piso?",
    "opts": [
     "En la segunda",
     "En la tercera",
     "En la cuarta"
    ],
    "correct": 2,
    "whyFr": "« En la cuarta planta, y hay ascensor »."
   },
   {
    "q": "¿Qué mascotas se permiten?",
    "opts": [
     "Ninguna",
     "Gatos, pero no perros",
     "Gatos y perros"
    ],
    "correct": 1,
    "whyFr": "« No hay problema con los gatos, pero no se permiten perros »."
   },
   {
    "q": "¿Qué debe llevar Daniel a la visita?",
    "opts": [
     "Un aval del banco",
     "El pasaporte y el contrato",
     "Su DNI y su última nómina"
    ],
    "correct": 2,
    "whyFr": "La propriétaire demande « su DNI y su última nómina »."
   }
  ],
  "expressions": [
   {
    "es": "Llamo por el anuncio.",
    "fr": "J'appelle pour l'annonce."
   },
   {
    "es": "¿Todavía está libre?",
    "fr": "Est-il encore libre ?"
   },
   {
    "es": "los gastos de comunidad",
    "fr": "les charges de copropriété"
   },
   {
    "es": "¿Admiten mascotas?",
    "fr": "Acceptez-vous les animaux ?"
   },
   {
    "es": "Me gustaría visitarlo.",
    "fr": "J'aimerais le visiter."
   }
  ]
 },
 {
  "id": 5,
  "level": "A2",
  "title": "Comprar una chaqueta",
  "topicFr": "Acheter une veste",
  "situationFr": "Sergio cherche une veste d'hiver. Rosa, la vendeuse, lui présente deux modèles et lui conseille une taille.",
  "speakers": [
   {
    "name": "Rosa",
    "voice": "f"
   },
   {
    "name": "Sergio",
    "voice": "m"
   }
  ],
  "lines": [
   {
    "s": 0,
    "t": "Buenas tardes. ¿Puedo ayudarle?"
   },
   {
    "s": 1,
    "t": "Sí, busco una chaqueta para el invierno. Algo no demasiado caro."
   },
   {
    "s": 0,
    "t": "Tenemos esta chaqueta negra, que cuesta ochenta euros, y esta azul, que es más barata: cincuenta y nueve euros."
   },
   {
    "s": 1,
    "t": "La azul me gusta más, pero parece más fina que la negra. ¿Abriga bastante?"
   },
   {
    "s": 0,
    "t": "La negra es más gruesa y abriga más. La azul es más ligera y más moderna."
   },
   {
    "s": 1,
    "t": "¿Qué talla tengo que probar? Normalmente uso la M."
   },
   {
    "s": 0,
    "t": "Pruebe la L, porque las chaquetas de esta marca son más pequeñas que otras."
   },
   {
    "s": 1,
    "t": "De acuerdo, voy a probármela."
   },
   {
    "s": 0,
    "t": "¿Qué tal le queda?"
   },
   {
    "choice": {
     "s": 1,
     "promptFr": "À toi de jouer : que réponds-tu ?",
     "options": [
      {
       "t": "La azul en la L me queda bien. Me la llevo, ¿puedo pagar con tarjeta?",
       "ok": true,
       "whyFr": "Réponse cohérente : la veste lui va et il demande poliment à payer par carte."
      },
      {
       "t": "La L me queda mal. Lo llevo tú, pago con tarjeta.",
       "ok": false,
       "whyFr": "Incohérent (elle lui va mal mais il l'achète) et tutoiement inadapté."
      },
      {
       "t": "Me quedar bien la L. Yo pagar tarjeta.",
       "ok": false,
       "whyFr": "Verbes à l'infinitif : il faut conjuguer (« me queda », « pago »)."
      }
     ]
    }
   },
   {
    "s": 0,
    "t": "Perfecto. Hoy tenemos un descuento del diez por ciento en abrigos y chaquetas."
   },
   {
    "s": 1,
    "t": "¡Qué bien! Entonces la azul cuesta menos."
   },
   {
    "s": 0,
    "t": "Exacto: cincuenta y tres euros con diez céntimos."
   },
   {
    "s": 1,
    "t": "Estupendo. Aquí tiene mi tarjeta."
   }
  ],
  "questions": [
   {
    "q": "¿Cuánto cuesta la chaqueta negra?",
    "opts": [
     "Cincuenta y nueve euros",
     "Setenta y nueve euros",
     "Ochenta euros"
    ],
    "correct": 2,
    "whyFr": "La negra coûte quatre-vingts euros ; la bleue, cinquante-neuf."
   },
   {
    "q": "¿Qué chaqueta abriga más?",
    "opts": [
     "La negra",
     "La azul",
     "Las dos igual"
    ],
    "correct": 0,
    "whyFr": "« La negra es más gruesa y abriga más »."
   },
   {
    "q": "¿Qué talla le recomienda Rosa?",
    "opts": [
     "La M",
     "La L",
     "La S"
    ],
    "correct": 1,
    "whyFr": "« Pruebe la L »."
   },
   {
    "q": "¿Por qué recomienda esa talla?",
    "opts": [
     "Porque las chaquetas de la marca son más pequeñas",
     "Porque no quedan tallas M",
     "Porque la L es más barata"
    ],
    "correct": 0,
    "whyFr": "Les vestes de cette marque taillent petit."
   },
   {
    "q": "¿Cuánto paga Sergio al final?",
    "opts": [
     "Cuarenta y nueve euros con noventa",
     "Cincuenta y nueve euros",
     "Cincuenta y tres euros con diez"
    ],
    "correct": 2,
    "whyFr": "59 € moins 10 % : cinquante-trois euros dix."
   }
  ],
  "expressions": [
   {
    "es": "¿Puedo ayudarle?",
    "fr": "Puis-je vous aider ?"
   },
   {
    "es": "más barata que",
    "fr": "moins chère que"
   },
   {
    "es": "¿Qué talla uso?",
    "fr": "Quelle taille je fais ?"
   },
   {
    "es": "Pruebe la L.",
    "fr": "Essayez la L."
   },
   {
    "es": "¿Qué tal le queda?",
    "fr": "Comment cela vous va-t-il ?"
   }
  ]
 },
 {
  "id": 6,
  "level": "A2",
  "title": "Un billete de tren",
  "topicFr": "Acheter un billet de train",
  "situationFr": "Mateo achète un billet pour Valence au guichet de la gare. Elena, l'employée, lui présente les horaires.",
  "speakers": [
   {
    "name": "Elena",
    "voice": "f"
   },
   {
    "name": "Mateo",
    "voice": "m"
   }
  ],
  "lines": [
   {
    "s": 0,
    "t": "Buenos días, ¿qué desea?"
   },
   {
    "s": 1,
    "t": "Buenos días. Quiero un billete para Valencia, para esta tarde, por favor."
   },
   {
    "s": 0,
    "t": "Hay un tren a las 15:40 y otro a las 18:15. El primero es más rápido: tarda dos horas y cuarto. El segundo tarda casi tres horas."
   },
   {
    "s": 1,
    "t": "¿Cuánto cuesta cada uno?"
   },
   {
    "s": 0,
    "t": "El de las 15:40 cuesta treinta y cuatro euros y el de las 18:15, veintiocho."
   },
   {
    "choice": {
     "s": 1,
     "promptFr": "À toi de jouer : que réponds-tu ?",
     "options": [
      {
       "t": "Prefiero el más rápido. El de las 15:40, por favor.",
       "ok": true,
       "whyFr": "Cohérent : le train de 15 h 40 est le plus rapide."
      },
      {
       "t": "El de las seis y cuarto, porque es más rápido.",
       "ok": false,
       "whyFr": "Incohérent : le train de 18 h 15 est le plus lent."
      },
      {
       "t": "Prefiero el más barato, el de las 15:40.",
       "ok": false,
       "whyFr": "Incohérent : le train de 15 h 40 est le plus cher."
      }
     ]
    }
   },
   {
    "s": 0,
    "t": "Muy bien. ¿Ida y vuelta o solo ida?"
   },
   {
    "s": 1,
    "t": "Ida y vuelta. Volveré el domingo por la noche."
   },
   {
    "s": 0,
    "t": "El domingo hay un tren a las 21:30. ¿Quiere asiento de ventanilla o de pasillo?"
   },
   {
    "s": 1,
    "t": "De ventanilla, por favor."
   },
   {
    "s": 0,
    "t": "En total son sesenta y cinco euros. ¿Paga con tarjeta o en efectivo?"
   },
   {
    "s": 1,
    "t": "En efectivo. Aquí tiene. ¿Y de qué vía sale el tren de esta tarde?"
   },
   {
    "s": 0,
    "t": "Sale de la vía siete. Llegue un poco antes, por favor."
   },
   {
    "s": 1,
    "t": "Gracias. Hasta luego."
   }
  ],
  "questions": [
   {
    "q": "¿Cuánto tarda el tren de las 15:40?",
    "opts": [
     "Casi tres horas",
     "Dos horas y cuarto",
     "Dos horas y media"
    ],
    "correct": 1,
    "whyFr": "« Tarda dos horas y cuarto »."
   },
   {
    "q": "¿Cuánto cuesta el tren de las 18:15?",
    "opts": [
     "Veintiocho euros",
     "Treinta y cuatro euros",
     "Veintitrés euros"
    ],
    "correct": 0,
    "whyFr": "Le train de 18 h 15 coûte vingt-huit euros."
   },
   {
    "q": "¿Cuándo vuelve Mateo?",
    "opts": [
     "El sábado por la noche",
     "El domingo por la mañana",
     "El domingo por la noche"
    ],
    "correct": 2,
    "whyFr": "« Volveré el domingo por la noche »."
   },
   {
    "q": "¿Qué tipo de asiento elige?",
    "opts": [
     "De pasillo",
     "De ventanilla",
     "Cerca del bar"
    ],
    "correct": 1,
    "whyFr": "Il répond « de ventanilla »."
   },
   {
    "q": "¿De qué vía sale el tren de esta tarde?",
    "opts": [
     "De la vía siete",
     "De la vía diecisiete",
     "De la vía seis"
    ],
    "correct": 0,
    "whyFr": "« Sale de la vía siete »."
   }
  ],
  "expressions": [
   {
    "es": "Quiero un billete para Valencia.",
    "fr": "Je voudrais un billet pour Valence."
   },
   {
    "es": "ida y vuelta",
    "fr": "aller-retour"
   },
   {
    "es": "¿Qué desea?",
    "fr": "Que désirez-vous ?"
   },
   {
    "es": "de ventanilla o de pasillo",
    "fr": "côté fenêtre ou côté couloir"
   },
   {
    "es": "¿De qué vía sale?",
    "fr": "De quelle voie part-il ?"
   }
  ]
 },
 {
  "id": 7,
  "level": "A2",
  "title": "Reservar una habitación",
  "topicFr": "Réserver une chambre d'hôtel",
  "situationFr": "Tomás appelle l'hôtel Mirador pour réserver une chambre double pour un week-end.",
  "speakers": [
   {
    "name": "Isabel",
    "voice": "f"
   },
   {
    "name": "Tomás",
    "voice": "m"
   }
  ],
  "lines": [
   {
    "s": 0,
    "t": "Hotel Mirador, buenas tardes, le atiende Isabel."
   },
   {
    "s": 1,
    "t": "Buenas tardes. Quiero reservar una habitación doble para el fin de semana del día veinte."
   },
   {
    "s": 0,
    "t": "¿Para cuántas noches?"
   },
   {
    "s": 1,
    "t": "Llegaremos el viernes por la tarde y nos iremos el domingo después de comer. Dos noches."
   },
   {
    "s": 0,
    "t": "Tenemos una habitación doble con vistas al mar por ciento diez euros la noche y otra sin vistas por noventa y cinco."
   },
   {
    "s": 1,
    "t": "¿El desayuno está incluido?"
   },
   {
    "s": 0,
    "t": "Sí, el desayuno se sirve de siete y media a diez y está incluido en el precio."
   },
   {
    "choice": {
     "s": 1,
     "promptFr": "À toi de jouer : que réponds-tu ?",
     "options": [
      {
       "t": "Entonces la de vistas al mar. Me gustaría reservarla, por favor.",
       "ok": true,
       "whyFr": "Choix clair et poli avec « me gustaría » et le COD « la »."
      },
      {
       "t": "Entonces la de vistas al mar. Yo reservar tú ahora.",
       "ok": false,
       "whyFr": "Verbes à l'infinitif et tutoiement inadapté."
      },
      {
       "t": "Entonces la que no tiene vistas, porque es más cara.",
       "ok": false,
       "whyFr": "Incohérent : la chambre sans vue est la moins chère."
      }
     ]
    }
   },
   {
    "s": 0,
    "t": "Perfecto. ¿A nombre de quién?"
   },
   {
    "s": 1,
    "t": "Tomás Iglesias, con i de Italia."
   },
   {
    "s": 0,
    "t": "¿A qué hora llegarán, más o menos?"
   },
   {
    "s": 1,
    "t": "Llegaremos sobre las ocho de la noche, porque saldremos del trabajo a las cinco."
   },
   {
    "s": 0,
    "t": "No hay problema. La recepción está abierta las veinticuatro horas. Le enviaré un correo de confirmación."
   },
   {
    "s": 1,
    "t": "Muchas gracias. Hasta el viernes."
   }
  ],
  "questions": [
   {
    "q": "¿Cuántas noches se quedarán?",
    "opts": [
     "Tres noches",
     "Una noche",
     "Dos noches"
    ],
    "correct": 2,
    "whyFr": "Du vendredi au dimanche : « Dos noches »."
   },
   {
    "q": "¿Cuánto cuesta la habitación con vistas al mar?",
    "opts": [
     "Noventa y cinco euros",
     "Ciento diez euros",
     "Ciento veinte euros"
    ],
    "correct": 1,
    "whyFr": "Ciento diez euros la noche."
   },
   {
    "q": "¿Cuál es el horario del desayuno?",
    "opts": [
     "De siete y media a diez",
     "De ocho a once",
     "De siete a nueve"
    ],
    "correct": 0,
    "whyFr": "« De siete y media a diez »."
   },
   {
    "q": "¿A qué hora llegarán al hotel?",
    "opts": [
     "Sobre las seis",
     "Sobre las cinco",
     "Sobre las ocho"
    ],
    "correct": 2,
    "whyFr": "« Sobre las ocho de la noche » ; ils sortent du travail à 17 h."
   },
   {
    "q": "¿Qué recibirá Tomás?",
    "opts": [
     "Una llamada",
     "Un correo de confirmación",
     "Un mensaje de texto"
    ],
    "correct": 1,
    "whyFr": "« Le enviaré un correo de confirmación »."
   }
  ],
  "expressions": [
   {
    "es": "Quiero reservar una habitación doble.",
    "fr": "Je voudrais réserver une chambre double."
   },
   {
    "es": "¿Para cuántas noches?",
    "fr": "Pour combien de nuits ?"
   },
   {
    "es": "vistas al mar",
    "fr": "vue sur la mer"
   },
   {
    "es": "El desayuno está incluido.",
    "fr": "Le petit-déjeuner est inclus."
   },
   {
    "es": "¿A nombre de quién?",
    "fr": "À quel nom ?"
   }
  ]
 },
 {
  "id": 8,
  "level": "A2",
  "title": "Veranos de pequeña",
  "topicFr": "Souvenirs d'enfance",
  "situationFr": "Beatriz montre une photo à son ami Hugo et ils se racontent leurs vacances d'enfance.",
  "speakers": [
   {
    "name": "Beatriz",
    "voice": "f"
   },
   {
    "name": "Hugo",
    "voice": "m"
   }
  ],
  "lines": [
   {
    "s": 0,
    "t": "Mira, Hugo, esta foto es del pueblo de mis abuelos."
   },
   {
    "s": 1,
    "t": "¡Qué bonito! ¿Ibas allí de pequeña?"
   },
   {
    "s": 0,
    "t": "Sí, todos los veranos. Mis abuelos vivían en un pueblo de Asturias y pasábamos allí todo agosto."
   },
   {
    "s": 1,
    "t": "¿Y qué hacías durante el día?"
   },
   {
    "s": 0,
    "t": "Por la mañana ayudaba a mi abuela en el huerto, y por la tarde jugaba con mis primos en el río. El agua estaba helada, pero nos encantaba."
   },
   {
    "s": 1,
    "t": "¡Qué divertido! Yo, de pequeño, iba a la playa de Alicante con mis padres."
   },
   {
    "s": 0,
    "t": "¿Y dónde dormíais?"
   },
   {
    "s": 1,
    "t": "Teníamos un apartamento pequeño. Mi hermana y yo compartíamos habitación y siempre nos peleábamos por la ventana."
   },
   {
    "choice": {
     "s": 0,
     "promptFr": "À toi de jouer : que réponds-tu ?",
     "options": [
      {
       "t": "¡Qué divertido! Mis primos y yo también nos peleábamos a veces.",
       "ok": true,
       "whyFr": "Imparfait d'habitude correct, cohérent avec ce qu'elle a raconté."
      },
      {
       "t": "¡Qué divertido! Mis primos y yo también nos pelear ayer.",
       "ok": false,
       "whyFr": "Verbe à l'infinitif et « ayer » ne va pas avec une habitude passée."
      },
      {
       "t": "¡Qué triste! Yo nunca jugaba con mis primos.",
       "ok": false,
       "whyFr": "Contredit ce qu'elle vient de dire (elle jouait avec ses cousins)."
      }
     ]
    }
   },
   {
    "s": 1,
    "t": "¿Y ahora ya no vas al pueblo?"
   },
   {
    "s": 0,
    "t": "Sí, voy cada año, pero mis abuelos ya no viven allí. Mi tío vive en su casa."
   },
   {
    "s": 1,
    "t": "Entonces el año que viene vamos juntos, ¿te parece?"
   },
   {
    "s": 0,
    "t": "¡Vale! Será genial."
   }
  ],
  "questions": [
   {
    "q": "¿Dónde vivían los abuelos de Beatriz?",
    "opts": [
     "En un pueblo de Asturias",
     "En Alicante",
     "En Galicia"
    ],
    "correct": 0,
    "whyFr": "« Un pueblo de Asturias »."
   },
   {
    "q": "¿Cuánto tiempo pasaba Beatriz allí cada verano?",
    "opts": [
     "Quince días en julio",
     "Todo el verano",
     "Todo el mes de agosto"
    ],
    "correct": 2,
    "whyFr": "« Pasábamos allí todo agosto »."
   },
   {
    "q": "¿Qué hacía Beatriz por la mañana?",
    "opts": [
     "Jugaba en el río",
     "Ayudaba a su abuela en el huerto",
     "Iba a la playa"
    ],
    "correct": 1,
    "whyFr": "Le matin elle aidait sa grand-mère au potager ; l'après-midi, rivière."
   },
   {
    "q": "¿Adónde iba Hugo de vacaciones?",
    "opts": [
     "A la playa de Alicante",
     "A un pueblo de Asturias",
     "A Valencia"
    ],
    "correct": 0,
    "whyFr": "« Iba a la playa de Alicante »."
   },
   {
    "q": "¿Por qué se peleaban Hugo y su hermana?",
    "opts": [
     "Por la tele",
     "Por la ventana",
     "Por la bici"
    ],
    "correct": 1,
    "whyFr": "« Nos peleábamos por la ventana »."
   }
  ],
  "expressions": [
   {
    "es": "de pequeño / de pequeña",
    "fr": "quand j'étais petit(e)"
   },
   {
    "es": "todos los veranos",
    "fr": "tous les étés"
   },
   {
    "es": "pasábamos allí todo agosto",
    "fr": "nous y passions tout le mois d'août"
   },
   {
    "es": "nos peleábamos",
    "fr": "nous nous disputions"
   },
   {
    "es": "¿te parece?",
    "fr": "ça te va ?"
   }
  ]
 },
 {
  "id": 9,
  "level": "A2",
  "title": "En la farmacia",
  "topicFr": "À la pharmacie",
  "situationFr": "Natalia a mal à la tête et au dos. Raúl, le pharmacien, lui conseille un médicament.",
  "speakers": [
   {
    "name": "Raúl",
    "voice": "m"
   },
   {
    "name": "Natalia",
    "voice": "f"
   }
  ],
  "lines": [
   {
    "s": 0,
    "t": "Buenos días. ¿En qué puedo ayudarla?"
   },
   {
    "s": 1,
    "t": "Buenos días. Me duele mucho la cabeza desde ayer y también me duele la espalda."
   },
   {
    "s": 0,
    "t": "¿Ha tomado algo?"
   },
   {
    "s": 1,
    "t": "Sí, esta mañana me tomé una pastilla de ibuprofeno, pero no me ha hecho nada."
   },
   {
    "s": 0,
    "t": "¿Tiene alergia a algún medicamento?"
   },
   {
    "s": 1,
    "t": "Sí, soy alérgica a la penicilina."
   },
   {
    "s": 0,
    "t": "Entonces tome este paracetamol. Una pastilla cada ocho horas, después de comer."
   },
   {
    "choice": {
     "s": 1,
     "promptFr": "À toi de jouer : que réponds-tu ?",
     "options": [
      {
       "t": "¿Durante cuántos días debo tomarlo?",
       "ok": true,
       "whyFr": "Question naturelle et polie pour connaître la durée du traitement."
      },
      {
       "t": "¿Cuánto días yo tomar eso?",
       "ok": false,
       "whyFr": "Accord incorrect (« cuántos ») et verbe non conjugué."
      },
      {
       "t": "¿Cuántos días tomas tú?",
       "ok": false,
       "whyFr": "Tutoiement inadapté avec le pharmacien et sens incorrect."
      }
     ]
    }
   },
   {
    "s": 0,
    "t": "Durante tres días como máximo. Si sigue con dolor, vaya al médico."
   },
   {
    "s": 1,
    "t": "De acuerdo. Y para la espalda, ¿qué me recomienda?"
   },
   {
    "s": 0,
    "t": "Le recomiendo esta crema. Aplíquela dos veces al día y descanse."
   },
   {
    "s": 1,
    "t": "Perfecto. ¿Cuánto es todo?"
   },
   {
    "s": 0,
    "t": "Son once euros con cincuenta."
   },
   {
    "s": 1,
    "t": "Aquí tiene. Muchas gracias."
   }
  ],
  "questions": [
   {
    "q": "¿Qué le duele a Natalia?",
    "opts": [
     "La cabeza y la garganta",
     "La espalda y el estómago",
     "La cabeza y la espalda"
    ],
    "correct": 2,
    "whyFr": "Elle dit : « me duele la cabeza... y la espalda »."
   },
   {
    "q": "¿A qué medicamento es alérgica?",
    "opts": [
     "Al ibuprofeno",
     "A la penicilina",
     "Al paracetamol"
    ],
    "correct": 1,
    "whyFr": "« Soy alérgica a la penicilina »."
   },
   {
    "q": "¿Cada cuánto debe tomar el paracetamol?",
    "opts": [
     "Cada ocho horas",
     "Cada seis horas",
     "Cada doce horas"
    ],
    "correct": 0,
    "whyFr": "« Una pastilla cada ocho horas »."
   },
   {
    "q": "¿Cuántos días como máximo debe tomarlo?",
    "opts": [
     "Una semana",
     "Cinco días",
     "Tres días"
    ],
    "correct": 2,
    "whyFr": "« Durante tres días como máximo »."
   },
   {
    "q": "¿Cuánto paga en total?",
    "opts": [
     "Doce euros con cincuenta",
     "Once euros con cincuenta",
     "Once euros con quince"
    ],
    "correct": 1,
    "whyFr": "« Son once euros con cincuenta »."
   }
  ],
  "expressions": [
   {
    "es": "Me duele la cabeza.",
    "fr": "J'ai mal à la tête."
   },
   {
    "es": "Soy alérgica a la penicilina.",
    "fr": "Je suis allergique à la pénicilline."
   },
   {
    "es": "una pastilla cada ocho horas",
    "fr": "un comprimé toutes les huit heures"
   },
   {
    "es": "Si sigue con dolor, vaya al médico.",
    "fr": "Si la douleur persiste, allez chez le médecin."
   },
   {
    "es": "¿Qué me recomienda?",
    "fr": "Que me conseillez-vous ?"
   }
  ]
 },
 {
  "id": 10,
  "level": "A2",
  "title": "Una excursión a la sierra",
  "topicFr": "Projet de randonnée",
  "situationFr": "Álvaro invite son amie Clara à une randonnée dans la sierra de Guadarrama dimanche et ils organisent la journée.",
  "speakers": [
   {
    "name": "Álvaro",
    "voice": "m"
   },
   {
    "name": "Clara",
    "voice": "f"
   }
  ],
  "lines": [
   {
    "s": 0,
    "t": "¡Hola, Clara! ¿Qué vas a hacer el domingo?"
   },
   {
    "s": 1,
    "t": "Todavía no lo sé. ¿Y tú?"
   },
   {
    "s": 0,
    "t": "Mi hermano y yo vamos a ir a la sierra de Guadarrama. Haremos una ruta de cinco horas. ¿Te apuntas?"
   },
   {
    "s": 1,
    "t": "¡Qué buena idea! ¿A qué hora saldréis?"
   },
   {
    "s": 0,
    "t": "Saldremos a las siete y media de la mañana. Iremos en el coche de mi hermano."
   },
   {
    "s": 1,
    "t": "¿Tan pronto? Los domingos me levanto más tarde que los sábados."
   },
   {
    "s": 0,
    "t": "Ya, pero según el tiempo, por la tarde lloverá. Por la mañana hará sol."
   },
   {
    "choice": {
     "s": 1,
     "promptFr": "À toi de jouer : que réponds-tu ?",
     "options": [
      {
       "t": "Vale, entonces me levantaré pronto. ¿Qué llevo para comer?",
       "ok": true,
       "whyFr": "Réponse logique : elle accepte et utilise correctement le futur."
      },
      {
       "t": "Vale, entonces me levanto ayer. ¿Qué llevo?",
       "ok": false,
       "whyFr": "« Ayer » est incompatible avec un plan pour dimanche."
      },
      {
       "t": "No, no voy: hace sol y llover tarde.",
       "ok": false,
       "whyFr": "Phrase incohérente et verbe mal conjugué."
      }
     ]
    }
   },
   {
    "s": 0,
    "t": "Lleva bocadillos y agua. Yo llevaré fruta y algo de chocolate."
   },
   {
    "s": 1,
    "t": "Perfecto. ¿Necesito botas de montaña?"
   },
   {
    "s": 0,
    "t": "Sí, mejor botas, porque el camino es bastante difícil. Ah, y una chaqueta, que arriba hace más frío que en Madrid."
   },
   {
    "s": 1,
    "t": "Vale. ¿Dónde nos vemos?"
   },
   {
    "s": 0,
    "t": "En la puerta de tu casa. Pasaremos a recogerte a las siete y veinte."
   },
   {
    "s": 1,
    "t": "Genial. ¡Hasta el domingo!"
   }
  ],
  "questions": [
   {
    "q": "¿Cuánto durará la ruta?",
    "opts": [
     "Cinco horas",
     "Tres horas",
     "Siete horas"
    ],
    "correct": 0,
    "whyFr": "« Una ruta de cinco horas »."
   },
   {
    "q": "¿A qué hora saldrán?",
    "opts": [
     "A las ocho y media",
     "A las siete",
     "A las siete y media"
    ],
    "correct": 2,
    "whyFr": "« Saldremos a las siete y media »."
   },
   {
    "q": "¿Qué tiempo hará el domingo?",
    "opts": [
     "Lloverá por la mañana",
     "Hará sol por la mañana y lloverá por la tarde",
     "Hará sol todo el día"
    ],
    "correct": 1,
    "whyFr": "Soleil le matin, pluie l'après-midi."
   },
   {
    "q": "¿Qué llevará Álvaro para comer?",
    "opts": [
     "Bocadillos y agua",
     "Un mapa",
     "Fruta y chocolate"
    ],
    "correct": 2,
    "whyFr": "Álvaro : « Yo llevaré fruta y algo de chocolate » ; Clara apporte sandwichs et eau."
   },
   {
    "q": "¿A qué hora pasarán a recoger a Clara?",
    "opts": [
     "A las siete y media",
     "A las siete y veinte",
     "A las ocho menos veinte"
    ],
    "correct": 1,
    "whyFr": "« Pasaremos a recogerte a las siete y veinte » ; 7 h 30 est l'heure du départ."
   }
  ],
  "expressions": [
   {
    "es": "¿Te apuntas?",
    "fr": "Tu te joins à nous ?"
   },
   {
    "es": "Saldremos a las siete y media.",
    "fr": "Nous partirons à sept heures et demie."
   },
   {
    "es": "según el tiempo",
    "fr": "selon la météo"
   },
   {
    "es": "Mañana hará sol.",
    "fr": "Demain il fera beau."
   },
   {
    "es": "¿Dónde nos vemos?",
    "fr": "Où se retrouve-t-on ?"
   }
  ]
 }
];
