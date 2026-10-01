// The Roots — Compréhension orale (Espagnol, B1) : dialogues du quotidien, longs et interactifs (voix de synthèse du téléphone).
export const COMPREHENSION_ORALE_B1_ES = [
 {
  "id": 1,
  "level": "B1",
  "title": "La calefacción no funciona",
  "topicFr": "Panne de chauffage dans un appartement loué",
  "situationFr": "Lucía, locataire, appelle don Fernando, son propriétaire, parce que le chauffage est en panne depuis plusieurs jours. Ils se vouvoient.",
  "speakers": [
   {
    "name": "Lucía",
    "voice": "f"
   },
   {
    "name": "Don Fernando",
    "voice": "m"
   }
  ],
  "lines": [
   {
    "s": 0,
    "t": "Buenas tardes, don Fernando. Soy Lucía Ortega, la inquilina del tercero B. Le llamo porque la calefacción no funciona desde el domingo."
   },
   {
    "s": 1,
    "t": "Hola, Lucía. Vaya, lo siento mucho. ¿Ha comprobado si el termostato tiene pilas?"
   },
   {
    "s": 0,
    "t": "Sí, las cambié ayer, pero no ha servido de nada. Además, los radiadores están fríos y por la noche hace mucho frío en casa."
   },
   {
    "s": 1,
    "t": "Entiendo. Si le parece bien, mañana le mandaré a un técnico de mi confianza. Se llama Joaquín."
   },
   {
    "s": 0,
    "t": "Gracias. ¿A qué hora podría venir? Yo trabajo hasta las tres y media, pero mi hermana estará en casa por la mañana."
   },
   {
    "s": 1,
    "t": "Joaquín suele pasar entre las diez y las doce. ¿Su hermana podría abrirle la puerta?"
   },
   {
    "choice": {
     "s": 0,
     "promptFr": "À toi de jouer : que réponds-tu ?",
     "options": [
      {
       "t": "Si mi hermana no puede, yo ir allí.",
       "ok": false,
       "whyFr": "Le verbe n'est pas conjugué correctement (« yo ir ») : on attendrait « iré » ou « iría »."
      },
      {
       "t": "Sí, no hay problema. Le daré su teléfono por si necesita algo.",
       "ok": true,
       "whyFr": "Réponse polie et pratique : tu acceptes et tu proposes un moyen de contact."
      },
      {
       "t": "No, que venga cuando quiera y que deje la puerta abierta.",
       "ok": false,
       "whyFr": "Laisser la porte ouverte à un inconnu n'est ni raisonnable ni poli."
      }
     ]
    }
   },
   {
    "s": 1,
    "t": "Perfecto. Otra cosa: he visto que el recibo de la luz de este mes es bastante alto. ¿Ha usado estufas eléctricas?"
   },
   {
    "s": 0,
    "t": "Sí, compré una pequeña el lunes porque no aguantaba el frío. Pensaba pedirle que me devolviera una parte del dinero, si no le molesta."
   },
   {
    "s": 1,
    "t": "Claro, si guarda el ticket, le descontaré lo que haya gastado de la próxima renta. Es lo justo."
   },
   {
    "s": 0,
    "t": "Se lo agradezco mucho. La estufa costó treinta y cinco euros, aunque todavía no tengo la factura de la luz."
   },
   {
    "s": 1,
    "t": "No se preocupe, con el ticket de la estufa es suficiente. Y dígame, ¿hay algún otro problema en el piso?"
   },
   {
    "s": 0,
    "t": "Pues sí: el grifo de la cocina gotea desde hace semanas. No quería molestarle antes."
   },
   {
    "s": 1,
    "t": "Mujer, tendría que habérmelo dicho antes. Le pediré a Joaquín que lo arregle también."
   },
   {
    "choice": {
     "s": 0,
     "promptFr": "À toi de jouer : que réponds-tu ?",
     "options": [
      {
       "t": "Muchísimas gracias, así lo dejamos todo arreglado de una vez.",
       "ok": true,
       "whyFr": "Tu remercies poliment et tu conclus de façon positive."
      },
      {
       "t": "Ya era hora de que se ocupara de esto.",
       "ok": false,
       "whyFr": "Remarque agressive envers le propriétaire, qui vient justement de proposer une solution."
      },
      {
       "t": "Gracias, pero prefiero que no entre nadie en mi casa.",
       "ok": false,
       "whyFr": "Contradictoire : tu viens de demander une réparation, donc quelqu'un doit entrer."
      }
     ]
    }
   },
   {
    "s": 1,
    "t": "Entonces, hasta mañana. Y si esta noche hace mucho frío, póngase otra manta, que seguro que mañana se arregla."
   },
   {
    "s": 0,
    "t": "Lo haré. Muchas gracias por su ayuda, don Fernando."
   },
   {
    "s": 1,
    "t": "A usted, Lucía. Que descanse."
   },
   {
    "s": 0,
    "t": "Igualmente. Buenas tardes."
   },
   {
    "s": 1,
    "t": "Buenas tardes. Hasta mañana."
   },
   {
    "s": 0,
    "t": "Hasta mañana."
   }
  ],
  "questions": [
   {
    "q": "¿Desde cuándo no funciona la calefacción?",
    "opts": [
     "Desde el viernes",
     "Desde el domingo",
     "Desde el lunes"
    ],
    "correct": 1,
    "whyFr": "Lucía dit : « no funciona desde el domingo ». Le lundi, c'est le jour où elle a acheté un petit radiateur."
   },
   {
    "q": "¿Quién estará en casa por la mañana cuando venga el técnico?",
    "opts": [
     "Su madre",
     "Don Fernando",
     "Su hermana"
    ],
    "correct": 2,
    "whyFr": "Lucía précise que sa sœur sera à la maison le matin, car elle travaille jusqu'à 15 h 30."
   },
   {
    "q": "¿Cuánto costó la estufa que compró Lucía?",
    "opts": [
     "Treinta y cinco euros",
     "Veinticinco euros",
     "Cuarenta y cinco euros"
    ],
    "correct": 0,
    "whyFr": "Elle dit : « La estufa costó treinta y cinco euros »."
   },
   {
    "q": "¿Qué le descontará don Fernando de la próxima renta?",
    "opts": [
     "Todo el recibo de la luz",
     "Lo que costó la estufa, si guarda el ticket",
     "El primer mes de alquiler"
    ],
    "correct": 1,
    "whyFr": "Le propriétaire déduira de la prochaine mensualité ce qu'elle a dépensé, sur présentation du ticket de la petite chauffage électrique."
   },
   {
    "q": "¿Qué otro problema tiene el piso?",
    "opts": [
     "Los radiadores del salón hacen ruido",
     "El termostato no tiene pantalla",
     "El grifo de la cocina gotea"
    ],
    "correct": 2,
    "whyFr": "Lucía mentionne que le robinet de la cuisine goutte depuis des semaines."
   }
  ],
  "expressions": [
   {
    "es": "no ha servido de nada",
    "fr": "ça n'a servi à rien"
   },
   {
    "es": "si le parece bien",
    "fr": "si cela vous convient"
   },
   {
    "es": "tendría que habérmelo dicho",
    "fr": "vous auriez dû me le dire"
   },
   {
    "es": "gotear",
    "fr": "goutter, fuir goutte à goutte"
   },
   {
    "es": "Se lo agradezco mucho",
    "fr": "je vous en remercie beaucoup"
   }
  ]
 },
 {
  "id": 2,
  "level": "B1",
  "title": "Un vuelo cancelado",
  "topicFr": "Vol annulé à l'aéroport",
  "situationFr": "Iván est à l'aéroport de Madrid : son vol pour Séville est annulé. Il s'adresse à Marta, employée de la compagnie, et ils se vouvoient.",
  "speakers": [
   {
    "name": "Marta",
    "voice": "f"
   },
   {
    "name": "Iván",
    "voice": "m"
   }
  ],
  "lines": [
   {
    "s": 1,
    "t": "Buenas tardes. Perdone, acabo de ver en la pantalla que mi vuelo a Sevilla, el de las seis y cuarenta, está cancelado. ¿Qué ha pasado?"
   },
   {
    "s": 0,
    "t": "Buenas tardes. Sí, lamento las molestias. Ha habido un problema técnico con el avión y no ha podido despegar. ¿Me enseña su tarjeta de embarque, por favor?"
   },
   {
    "s": 1,
    "t": "Claro, aquí tiene. Es el vuelo IB 3412 y salía a las seis y cuarenta."
   },
   {
    "s": 0,
    "t": "Gracias, señor Vargas. Tengo dos opciones para usted: hay un vuelo esta noche a las nueve y cuarto, o puede viajar mañana a las ocho menos diez de la mañana."
   },
   {
    "s": 1,
    "t": "Mañana por la mañana no me viene bien, porque tengo una reunión a las nueve en Sevilla. Si no hubiera otra solución, tendría que cancelar el viaje."
   },
   {
    "s": 0,
    "t": "Entiendo. Entonces le aconsejo el de esta noche. Todavía quedan plazas en la ventanilla y en el pasillo."
   },
   {
    "choice": {
     "s": 1,
     "promptFr": "À toi de jouer : que réponds-tu ?",
     "options": [
      {
       "t": "Me da igual todo, pero quiero que me devuelvan el dinero ya.",
       "ok": false,
       "whyFr": "Réaction agressive et peu cohérente : tu viens de dire que tu veux voyager ce soir."
      },
      {
       "t": "Entonces mañana a las ocho menos diez, aunque pierda la reunión.",
       "ok": false,
       "whyFr": "Contradiction : tu viens d'expliquer que tu ne peux pas voyager demain matin."
      },
      {
       "t": "Prefiero el pasillo, por favor. ¿Y mi maleta sigue en el avión?",
       "ok": true,
       "whyFr": "Tu choisis une place et tu poses une question utile sur ton bagage : réponse naturelle et polie."
      }
     ]
    }
   },
   {
    "s": 0,
    "t": "No se preocupe por la maleta: ya está en la cinta y la recogerá en Sevilla. Por cierto, por las molestias le daremos un bono de treinta euros para comer en el aeropuerto."
   },
   {
    "s": 1,
    "t": "Se lo agradezco. ¿Y dónde puedo canjearlo? Solo he visto una cafetería y un restaurante por esta zona."
   },
   {
    "s": 0,
    "t": "En cualquiera de los dos, siempre que la cuenta no sea inferior a treinta euros. Si gasta menos, perderá la diferencia."
   },
   {
    "s": 1,
    "t": "Vaya, qué lástima. Bueno, supongo que con una cena completa llegaré. ¿A qué puerta tengo que ir?"
   },
   {
    "s": 0,
    "t": "Al embarque se sale por la puerta veintidós. Le recomiendo que esté allí a las ocho y media como muy tarde."
   },
   {
    "s": 1,
    "t": "De acuerdo. Una última pregunta: mi taxi en Sevilla me esperaba a las siete y media, así que tendré que avisarlo del cambio."
   },
   {
    "s": 0,
    "t": "Claro. Si necesita llamar, puede usar el teléfono del mostrador, y también tiene wifi gratis en toda la terminal."
   },
   {
    "choice": {
     "s": 1,
     "promptFr": "À toi de jouer : que réponds-tu ?",
     "options": [
      {
       "t": "Muy amable, voy a avisarlo ahora mismo. Gracias por su ayuda.",
       "ok": true,
       "whyFr": "Tu remercies et tu annonces une action concrète : réponse polie et cohérente."
      },
      {
       "t": "Pues esperaré a que me llame usted.",
       "ok": false,
       "whyFr": "L'employée n'a pas à appeler ton chauffeur de taxi ; la réponse ne convient pas."
      },
      {
       "t": "No hace falta, el taxista ya lo sabrá por la televisión.",
       "ok": false,
       "whyFr": "Peu sérieux et incohérent : personne ne l'a prévenu."
      }
     ]
    }
   },
   {
    "s": 0,
    "t": "Estupendo. Le imprimo la nueva tarjeta de embarque y el bono. Un momento, por favor."
   },
   {
    "s": 1,
    "t": "Perfecto, no tengo prisa."
   },
   {
    "s": 0,
    "t": "Aquí lo tiene todo. Siento mucho lo ocurrido, señor Vargas. Que tenga un buen viaje."
   },
   {
    "s": 1,
    "t": "Gracias, igualmente. Hasta luego."
   },
   {
    "s": 0,
    "t": "Hasta luego."
   }
  ],
  "questions": [
   {
    "q": "¿A qué hora salía el vuelo cancelado?",
    "opts": [
     "A las seis y cuarenta",
     "A las siete y media",
     "A las nueve y cuarto"
    ],
    "correct": 0,
    "whyFr": "Iván parle du vol « de las seis y cuarenta ». Les autres heures sont celles du taxi et du vol de remplacement."
   },
   {
    "q": "¿Por qué no quiere Iván viajar mañana por la mañana?",
    "opts": [
     "Porque el vuelo es muy caro",
     "Porque tiene una reunión a las nueve",
     "Porque no hay plazas"
    ],
    "correct": 2,
    "whyFr": "Il explique qu'il a une réunion à 9 h à Séville."
   },
   {
    "q": "¿De qué valor es el bono que recibe Iván?",
    "opts": [
     "De treinta euros",
     "De veinte euros",
     "De cuarenta euros"
    ],
    "correct": 1,
    "whyFr": "Marta propose un bon de trente euros, valable seulement si l'addition atteint cette somme."
   },
   {
    "q": "¿Qué pasa si Iván gasta menos de treinta euros?",
    "opts": [
     "Puede guardar el bono para otro viaje",
     "Pierde la diferencia",
     "Le dan el resto en dinero"
    ],
    "correct": 2,
    "whyFr": "Elle précise qu'il perdra la différence."
   },
   {
    "q": "¿Por qué puerta saldrá el vuelo de la noche?",
    "opts": [
     "Por la puerta veintidós",
     "Por la puerta doce",
     "Por la puerta veintiocho"
    ],
    "correct": 1,
    "whyFr": "Marta indique la porte vingt-deux et conseille d'y être à 20 h 30 au plus tard."
   }
  ],
  "expressions": [
   {
    "es": "lamento las molestias",
    "fr": "je suis désolée du dérangement"
   },
   {
    "es": "no me viene bien",
    "fr": "cela ne m'arrange pas"
   },
   {
    "es": "si no hubiera otra solución",
    "fr": "s'il n'y avait pas d'autre solution"
   },
   {
    "es": "canjear un bono",
    "fr": "échanger un bon d'achat"
   },
   {
    "es": "como muy tarde",
    "fr": "au plus tard"
   }
  ]
 },
 {
  "id": 3,
  "level": "B1",
  "title": "Una fiesta sorpresa",
  "topicFr": "Organiser un anniversaire surprise",
  "situationFr": "Carmen et Pablo, amis, préparent l'anniversaire surprise d'Elena, qui fête ses 30 ans samedi. Ils se tutoient.",
  "speakers": [
   {
    "name": "Carmen",
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
    "t": "Pablo, por fin te pillo. Elena cumple treinta años el sábado y quiero organizarle una fiesta sorpresa. ¿Me ayudas?"
   },
   {
    "s": 1,
    "t": "¡Claro que sí! Me encantó la idea cuando me lo comentaste. ¿Ya has pensado dónde hacerla?"
   },
   {
    "s": 0,
    "t": "He reservado una mesa en La Taberna del Puerto para las nueve de la noche. Allí caben doce personas y tienen un reservado."
   },
   {
    "s": 1,
    "t": "Qué buena elección, a Elena le encanta ese sitio. ¿Y cómo vamos a conseguir que vaya sin sospechar nada?"
   },
   {
    "s": 0,
    "t": "Pensaba decirle que he sacado entradas para el cine a las siete. Después, de camino a casa, pasaremos por el restaurante como quien no quiere la cosa."
   },
   {
    "s": 1,
    "t": "Me parece genial. Yo me encargo de avisar a los demás: a Lucas, a las primas de Elena y al resto del grupo."
   },
   {
    "choice": {
     "s": 0,
     "promptFr": "À toi de jouer : que réponds-tu ?",
     "options": [
      {
       "t": "Diles que lleguen a las diez, cuando ya esté sentada.",
       "ok": false,
       "whyFr": "Tard et illogique : si les invités arrivent après, la surprise est ratée."
      },
      {
       "t": "Perfecto. Diles que lleguen a las ocho y media, antes que ella.",
       "ok": true,
       "whyFr": "Tu confirmes l'organisation : les invités doivent arriver avant Elena, c'est logique."
      },
      {
       "t": "Mejor no les digas nada, ya se enterarán.",
       "ok": false,
       "whyFr": "Contradictoire : il faut justement prévenir les invités."
      }
     ]
    }
   },
   {
    "s": 1,
    "t": "Entendido, así se lo digo yo. ¿Necesitas algo más de mi parte?"
   },
   {
    "s": 0,
    "t": "Eso es. Y otra cosa: ¿te importa encargarte de la tarta? Yo no tengo coche y la pastelería está en las afueras."
   },
   {
    "s": 1,
    "t": "Sin problema. Hay una pastelería cerca de mi casa que hace unas tartas buenísimas. ¿De qué la quieres, de chocolate o de fresa?"
   },
   {
    "s": 0,
    "t": "De chocolate, que es lo que más le gusta. Por cierto, había pensado regalarle un fin de semana en Granada entre todos."
   },
   {
    "s": 1,
    "t": "Uy, qué bonito. ¿Y cuánto tendría que poner cada uno? Es que este mes voy un poco justo de dinero."
   },
   {
    "s": 0,
    "t": "Calculo unos veinticinco euros por persona. Si alguien no puede, no pasa nada, ya me las apaño."
   },
   {
    "s": 1,
    "t": "Veinticinco está bien. Te hago un Bizum esta misma tarde, así no se me olvida."
   },
   {
    "s": 0,
    "t": "Genial. Ah, y no hables del tema por el grupo de WhatsApp en el que está Elena, que se enteraría enseguida."
   },
   {
    "s": 1,
    "t": "Tranquila, crearé otro grupo solo con los invitados. Por cierto, ¿has pensado en alguna decoración?"
   },
   {
    "choice": {
     "s": 0,
     "promptFr": "À toi de jouer : que réponds-tu ?",
     "options": [
      {
       "t": "Prefiero que no haya nada para que Elena no se dé cuenta.",
       "ok": false,
       "whyFr": "Inutile : la fête a lieu dans un salon privé, la décoration ne risque pas de trahir le secret."
      },
      {
       "t": "Sí, he comprado velas para ciento veinte invitados.",
       "ok": false,
       "whyFr": "Exagéré : le restaurant n'accueille que douze personnes."
      },
      {
       "t": "Había pensado en globos plateados y una pancarta que diga «Treinta años».",
       "ok": true,
       "whyFr": "Tu proposes une décoration cohérente avec la fête des trente ans."
      }
     ]
    }
   },
   {
    "s": 1,
    "t": "Me gusta. Yo llevaré las bengalas para la tarta y también mi altavoz para poner música."
   },
   {
    "s": 0,
    "t": "Perfecto. Entonces quedamos el sábado a las ocho en el restaurante y empezamos a prepararlo todo."
   },
   {
    "s": 1,
    "t": "Hecho. ¡Qué ganas tengo de ver su cara!"
   },
   {
    "s": 0,
    "t": "Y yo. Gracias por todo, Pablo, eres un cielo."
   },
   {
    "s": 1,
    "t": "De nada, mujer. Hasta el sábado."
   }
  ],
  "questions": [
   {
    "q": "¿Qué va a decirle Carmen a Elena para llevarla al restaurante?",
    "opts": [
     "Que ha sacado entradas para el cine a las siete",
     "Que han quedado para cenar con su familia",
     "Que van a comprar un regalo"
    ],
    "correct": 1,
    "whyFr": "Carmen dit qu'elle a pris des billets de cinéma à 19 h, puis qu'elles passeront par le restaurant."
   },
   {
    "q": "¿Cuántas personas caben en el reservado del restaurante?",
    "opts": [
     "Doce",
     "Diez",
     "Quince"
    ],
    "correct": 0,
    "whyFr": "Carmen précise que le salon privé accueille douze personnes."
   },
   {
    "q": "¿De qué sabor será la tarta?",
    "opts": [
     "De vainilla",
     "De chocolate",
     "De fresa"
    ],
    "correct": 2,
    "whyFr": "Carmen demande une tarte au chocolat, le parfum préféré d'Elena."
   },
   {
    "q": "¿Cuánto dinero tiene que poner cada persona para el regalo?",
    "opts": [
     "Veinticinco euros",
     "Quince euros",
     "Treinta euros"
    ],
    "correct": 1,
    "whyFr": "Carmen estime vingt-cinq euros par personne pour offrir un week-end à Grenade."
   },
   {
    "q": "¿Por qué crea Pablo otro grupo de WhatsApp?",
    "opts": [
     "Porque Carmen se lo ha pedido para el regalo",
     "Porque Elena está en el grupo original y se enteraría",
     "Porque el otro grupo está lleno"
    ],
    "correct": 2,
    "whyFr": "Carmen lui demande de ne pas en parler dans le groupe où se trouve Elena ; Pablo crée un autre groupe."
   }
  ],
  "expressions": [
   {
    "es": "como quien no quiere la cosa",
    "fr": "l'air de rien"
   },
   {
    "es": "ir justo de dinero",
    "fr": "avoir un budget serré"
   },
   {
    "es": "ya me las apaño",
    "fr": "je me débrouillerai"
   },
   {
    "es": "encargarse de",
    "fr": "se charger de"
   },
   {
    "es": "eres un cielo",
    "fr": "tu es un ange"
   }
  ]
 },
 {
  "id": 4,
  "level": "B1",
  "title": "Abrir una cuenta bancaria",
  "topicFr": "Ouvrir un compte en banque",
  "situationFr": "Rosa vient d'emménager et se rend dans une agence pour ouvrir un compte. Gonzalo, le conseiller, la reçoit. Ils se vouvoient.",
  "speakers": [
   {
    "name": "Gonzalo",
    "voice": "m"
   },
   {
    "name": "Rosa",
    "voice": "f"
   }
  ],
  "lines": [
   {
    "s": 0,
    "t": "Buenos días, bienvenida. Dígame, ¿en qué puedo ayudarla?"
   },
   {
    "s": 1,
    "t": "Buenos días. Me he mudado hace poco a Valencia y querría abrir una cuenta corriente, si es posible hoy mismo."
   },
   {
    "s": 0,
    "t": "Por supuesto. ¿Me deja su DNI, por favor? Y necesitaré también un justificante de domicilio, como un recibo de la luz o el contrato de alquiler."
   },
   {
    "s": 1,
    "t": "Tengo el contrato de alquiler en el móvil. ¿Le sirve si se lo envío por correo electrónico?"
   },
   {
    "s": 0,
    "t": "Sí, con eso basta. ¿Y tiene una nómina reciente? Lo pregunto porque, si la domicilia aquí, no pagará comisión de mantenimiento."
   },
   {
    "s": 1,
    "t": "Sí, empecé a trabajar hace un mes en una empresa de logística. Cobro unos mil cuatrocientos euros netos al mes."
   },
   {
    "s": 0,
    "t": "Estupendo, eso supera el mínimo de ochocientos euros que exigimos. Entonces la cuenta no tendrá comisiones ni este año ni el siguiente."
   },
   {
    "choice": {
     "s": 1,
     "promptFr": "À toi de jouer : que réponds-tu ?",
     "options": [
      {
       "t": "Qué bien. ¿Y la tarjeta de débito también es gratuita?",
       "ok": true,
       "whyFr": "Question logique et naturelle sur les frais, dans la continuité de ce que dit le conseiller."
      },
      {
       "t": "Qué mal. Yo pensaba que los bancos no cobraban nunca nada.",
       "ok": false,
       "whyFr": "Le ton ne correspond pas : le conseiller vient de dire qu'il n'y aura aucune commission."
      },
      {
       "t": "Entonces no quiero la cuenta, gracias.",
       "ok": false,
       "whyFr": "Illogique : la nouvelle est bonne, il n'y a aucune raison de refuser."
      }
     ]
    }
   },
   {
    "s": 0,
    "t": "Sí, la tarjeta de débito es gratuita. Si quisiera una de crédito, tendría un coste de veinte euros al año, pero se lo rebajaríamos a la mitad el primer año."
   },
   {
    "s": 1,
    "t": "Con la de débito me conformo, de momento. ¿Cuánto tarda en llegar a casa?"
   },
   {
    "s": 0,
    "t": "Entre siete y diez días laborables. Mientras tanto, podrá usar la aplicación del banco para consultar su saldo y hacer transferencias."
   },
   {
    "s": 1,
    "t": "¿Y cómo me registro en la aplicación? Soy un desastre con la tecnología."
   },
   {
    "s": 0,
    "t": "No se preocupe. Le enviaremos un código por SMS al número de teléfono que me dé, y yo mismo le ayudo a instalarla ahora."
   },
   {
    "s": 1,
    "t": "Se lo agradezco. Mi número es el seis, cuatro, cinco, uno, dos, tres, siete, ocho, nueve."
   },
   {
    "s": 0,
    "t": "Perfecto, ya lo tengo anotado. Solo me falta que firme aquí, en la tableta, y la cuenta quedará abierta."
   },
   {
    "choice": {
     "s": 1,
     "promptFr": "À toi de jouer : que réponds-tu ?",
     "options": [
      {
       "t": "Firmo lo que sea, no hace falta que me lo explique.",
       "ok": false,
       "whyFr": "Imprudent : il vaut mieux comprendre ce qu'on signe."
      },
      {
       "t": "¿Puedo pedir una copia del contrato? Me gustaría leerlo con calma.",
       "ok": true,
       "whyFr": "Demande raisonnable et prudente avant de signer un document."
      },
      {
       "t": "No pienso firmar nada hasta que venga mi abogado.",
       "ok": false,
       "whyFr": "Disproportionné pour l'ouverture d'un simple compte courant."
      }
     ]
    }
   },
   {
    "s": 0,
    "t": "Claro, se lo enviaré también por correo en cuanto termine. Ya está, felicidades, ya es clienta del banco."
   },
   {
    "s": 1,
    "t": "Muchas gracias por su paciencia, Gonzalo."
   },
   {
    "s": 0,
    "t": "A usted. Si tiene cualquier duda, llámeme directamente al número de la tarjeta de visita."
   },
   {
    "s": 1,
    "t": "Lo haré. Que tenga un buen día."
   },
   {
    "s": 0,
    "t": "Igualmente, hasta pronto."
   }
  ],
  "questions": [
   {
    "q": "¿Qué documento propone enviar Rosa como justificante de domicilio?",
    "opts": [
     "Su nómina",
     "El contrato de alquiler",
     "Un recibo de la luz"
    ],
    "correct": 2,
    "whyFr": "Elle a le contrat de location sur son téléphone et propose de l'envoyer par courriel."
   },
   {
    "q": "¿Cuál es el sueldo neto mensual de Rosa?",
    "opts": [
     "Unos mil cuatrocientos euros",
     "Unos mil euros",
     "Unos ochocientos euros"
    ],
    "correct": 1,
    "whyFr": "Rosa dit gagner environ 1 400 euros nets par mois ; 800 euros est le minimum exigé par la banque."
   },
   {
    "q": "¿Cuánto cuesta la tarjeta de crédito al año?",
    "opts": [
     "Veinte euros, con la mitad de descuento el primer año",
     "Cuarenta euros, sin descuento",
     "Es gratis si domicilia la nómina"
    ],
    "correct": 0,
    "whyFr": "La carte de crédit coûte 20 euros par an, avec réduction de moitié la première année."
   },
   {
    "q": "¿Cuánto tarda en llegar la tarjeta a casa?",
    "opts": [
     "Entre cuatro y cinco días",
     "Entre siete y diez días laborables",
     "Entre dos y tres días"
    ],
    "correct": 2,
    "whyFr": "Gonzalo annonce entre sept et dix jours ouvrables."
   },
   {
    "q": "¿Cómo recibirá Rosa el código para registrarse en la aplicación?",
    "opts": [
     "Por SMS",
     "Por correo electrónico",
     "Por carta"
    ],
    "correct": 1,
    "whyFr": "Le conseiller envoie un code par SMS au numéro donné par Rosa."
   }
  ],
  "expressions": [
   {
    "es": "domiciliar la nómina",
    "fr": "faire verser son salaire sur le compte"
   },
   {
    "es": "comisión de mantenimiento",
    "fr": "frais de tenue de compte"
   },
   {
    "es": "me conformo con",
    "fr": "je me contente de"
   },
   {
    "es": "soy un desastre con",
    "fr": "je suis nulle en"
   },
   {
    "es": "con calma",
    "fr": "tranquillement, sans se presser"
   }
  ]
 },
 {
  "id": 5,
  "level": "B1",
  "title": "Una entrevista de trabajo",
  "topicFr": "Entretien d'embauche",
  "situationFr": "Daniel passe un entretien pour un poste de coordinateur logistique. La responsable des ressources humaines, la señora Iglesias, mène l'entretien. Ils se vouvoient.",
  "speakers": [
   {
    "name": "Señora Iglesias",
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
    "t": "Buenos días, Daniel. Gracias por venir. Soy Carmen Iglesias, directora de recursos humanos. ¿Ha tenido algún problema para encontrarnos?"
   },
   {
    "s": 1,
    "t": "Buenos días. No, ninguno, llegué con veinte minutos de antelación porque no quería que me pasara nada."
   },
   {
    "s": 0,
    "t": "Muy bien. Para empezar, cuénteme brevemente su trayectoria y por qué le interesa este puesto de coordinador logístico."
   },
   {
    "s": 1,
    "t": "Llevo cuatro años trabajando en un almacén en Zaragoza, donde empecé como mozo y acabé como jefe de turno. Me gustaría dar un paso más y asumir más responsabilidad."
   },
   {
    "s": 0,
    "t": "Veo en su currículum que ha gestionado un equipo de ocho personas. ¿Qué es lo más difícil de dirigir a un grupo?"
   },
   {
    "s": 1,
    "t": "Creo que lo más difícil es mantener a todos motivados cuando hay mucha presión, por ejemplo en campañas de Navidad. Cuando el año pasado tuvimos retrasos, organicé reuniones cortas cada mañana y el ambiente mejoró mucho."
   },
   {
    "s": 0,
    "t": "Interesante. ¿Y qué ha aprendido usted de esa experiencia?"
   },
   {
    "choice": {
     "s": 1,
     "promptFr": "À toi de jouer : que réponds-tu ?",
     "options": [
      {
       "t": "Prefiero que cada uno se las apañe como pueda.",
       "ok": false,
       "whyFr": "Mauvaise réponse pour un poste de coordination : un bon coordinateur organise l'équipe."
      },
      {
       "t": "Nunca he tenido problemas con nadie, y no he cometido errores.",
       "ok": false,
       "whyFr": "Peu crédible : un entretien attend plutôt de l'honnêteté et un exemple concret."
      },
      {
       "t": "Aprendí que escuchar al equipo es tan importante como dar órdenes.",
       "ok": true,
       "whyFr": "Réponse mature et cohérente avec ce que tu viens d'expliquer sur la gestion d'équipe."
      }
     ]
    }
   },
   {
    "s": 0,
    "t": "Me parece una buena lección. Veo también que habla inglés. ¿Qué nivel tiene?"
   },
   {
    "s": 1,
    "t": "Tengo un B2. Lo uso a diario para hablar con proveedores de Alemania y de Reino Unido, aunque me cuesta más cuando me llaman por teléfono."
   },
   {
    "s": 0,
    "t": "Es una respuesta honesta, se lo agradezco. Ahora le cuento algo del puesto: el horario es de ocho a cinco, con una hora para comer, y habría que viajar a Barcelona una vez al mes."
   },
   {
    "s": 1,
    "t": "Me parece perfecto. Viajar no me supone ningún problema, y además mi hermana vive allí."
   },
   {
    "s": 0,
    "t": "Estupendo. En cuanto al sueldo, el salario es de veintiocho mil euros brutos al año. ¿Cuáles son sus expectativas?"
   },
   {
    "s": 1,
    "t": "Esperaba algo más cerca de treinta mil, pero entiendo que depende de la experiencia. ¿Habría posibilidad de revisarlo después del periodo de prueba?"
   },
   {
    "s": 0,
    "t": "Sí, a los seis meses hacemos una evaluación y, si los resultados son buenos, se podría revisar. ¿Cuándo podría incorporarse?"
   },
   {
    "choice": {
     "s": 1,
     "promptFr": "À toi de jouer : que réponds-tu ?",
     "options": [
      {
       "t": "Mañana mismo, aunque deje a mi empresa tirada.",
       "ok": false,
       "whyFr": "Peu professionnel : on ne quitte pas son employeur du jour au lendemain."
      },
      {
       "t": "Si me eligen, podría empezar el uno de noviembre, tras avisar a mi empresa actual.",
       "ok": true,
       "whyFr": "Réponse précise et réaliste : tu donnes une date et tu mentionnes le préavis."
      },
      {
       "t": "No lo sé, no he pensado en cambiar de trabajo.",
       "ok": false,
       "whyFr": "Contradictoire : tu es en train de passer un entretien pour changer de poste."
      }
     ]
    }
   },
   {
    "s": 0,
    "t": "Perfecto. Los demás candidatos terminan esta semana, así que le llamaremos el próximo miércoles con una respuesta."
   },
   {
    "s": 1,
    "t": "De acuerdo. ¿Hay algo más que deba preparar, algún documento?"
   },
   {
    "s": 0,
    "t": "Solo necesitaremos una copia de su título y dos cartas de recomendación, si lo seleccionamos."
   },
   {
    "s": 1,
    "t": "Las tengo en casa y se las envío por correo cuando usted me diga."
   },
   {
    "s": 0,
    "t": "Muchas gracias, Daniel, ha sido un placer conocerle."
   },
   {
    "s": 1,
    "t": "Igualmente, muchas gracias por su tiempo. Que tenga un buen día."
   }
  ],
  "questions": [
   {
    "q": "¿Cuántos años lleva Daniel trabajando en el almacén?",
    "opts": [
     "Tres años",
     "Cuatro años",
     "Dos años"
    ],
    "correct": 2,
    "whyFr": "Daniel dit : « Llevo cuatro años trabajando en un almacén en Zaragoza »."
   },
   {
    "q": "¿Cuántas personas tenía en su equipo?",
    "opts": [
     "Ocho",
     "Seis",
     "Doce"
    ],
    "correct": 0,
    "whyFr": "La responsable lit dans son CV qu'il a géré une équipe de huit personnes."
   },
   {
    "q": "¿Qué nivel de inglés tiene Daniel y qué le resulta más difícil?",
    "opts": [
     "Un B2; le cuesta más hablar por teléfono",
     "Un C1; le cuesta escribir correos",
     "Un B1; le cuesta leer contratos"
    ],
    "correct": 1,
    "whyFr": "Il a un B2 et avoue que c'est plus difficile au téléphone."
   },
   {
    "q": "¿Qué salario le ofrece la empresa?",
    "opts": [
     "Veintiocho mil euros brutos al año",
     "Treinta mil euros netos al año",
     "Veinticinco mil euros brutos al año"
    ],
    "correct": 0,
    "whyFr": "L'offre est de 28 000 euros bruts par an ; Daniel espérait environ 30 000."
   },
   {
    "q": "¿Cuándo llamarán a Daniel para darle una respuesta?",
    "opts": [
     "El viernes de esa semana",
     "El próximo miércoles",
     "El lunes siguiente"
    ],
    "correct": 2,
    "whyFr": "La responsable annonce qu'ils appelleront le mercredi suivant."
   }
  ],
  "expressions": [
   {
    "es": "dar un paso más",
    "fr": "franchir une étape supplémentaire"
   },
   {
    "es": "periodo de prueba",
    "fr": "période d'essai"
   },
   {
    "es": "incorporarse",
    "fr": "prendre son poste, rejoindre l'entreprise"
   },
   {
    "es": "mozo de almacén",
    "fr": "manutentionnaire"
   },
   {
    "es": "con veinte minutos de antelación",
    "fr": "avec vingt minutes d'avance"
   }
  ]
 },
 {
  "id": 6,
  "level": "B1",
  "title": "Reservar mesa con alergias",
  "topicFr": "Réserver une table au restaurant",
  "situationFr": "Beatriz appelle un restaurant de Séville pour réserver une table pour un dîner entre collègues. Javier, le serveur, répond. Ils se vouvoient.",
  "speakers": [
   {
    "name": "Javier",
    "voice": "m"
   },
   {
    "name": "Beatriz",
    "voice": "f"
   }
  ],
  "lines": [
   {
    "s": 0,
    "t": "Restaurante El Olivo, buenas tardes. Le habla Javier."
   },
   {
    "s": 1,
    "t": "Buenas tardes, Javier. Quería reservar una mesa para el viernes por la noche, si queda sitio."
   },
   {
    "s": 0,
    "t": "Déjeme mirar. ¿Para cuántas personas sería y a qué hora más o menos?"
   },
   {
    "s": 1,
    "t": "Seremos seis, y preferiría cenar sobre las nueve y media."
   },
   {
    "s": 0,
    "t": "A las nueve y media solo me queda mesa dentro. Si prefiere la terraza, tendría que ser a las ocho y media o a las diez y cuarto."
   },
   {
    "choice": {
     "s": 1,
     "promptFr": "À toi de jouer : que réponds-tu ?",
     "options": [
      {
       "t": "Entonces la terraza a las nueve y media, por favor.",
       "ok": false,
       "whyFr": "Impossible : le serveur vient de dire qu'à 21 h 30 il ne reste de place qu'à l'intérieur."
      },
      {
       "t": "Mejor dentro, que por la noche hace frío. ¿Podría ser una mesa tranquila, lejos de la barra?",
       "ok": true,
       "whyFr": "Tu choisis l'intérieur en donnant une raison logique et tu précises ta demande poliment."
      },
      {
       "t": "Dentro no, que hace demasiado calor en esta época.",
       "ok": false,
       "whyFr": "Peu logique : tu dis le contraire de ce qu'on attendrait en pleine saison froide, et rien n'indique la chaleur."
      }
     ]
    }
   },
   {
    "s": 0,
    "t": "Sin problema, le apunto la mesa del fondo, que es la más tranquila. ¿A nombre de quién la pongo?"
   },
   {
    "s": 1,
    "t": "A nombre de Beatriz Soto. Se escribe B-E-A-T-R-I-Z, y Soto con una sola te."
   },
   {
    "s": 0,
    "t": "Perfecto, Beatriz Soto, seis personas, viernes a las nueve y media. ¿Me deja un teléfono de contacto por si hubiera algún cambio?"
   },
   {
    "s": 1,
    "t": "Sí, es el seis, siete, ocho, uno, dos, tres, cuatro, cinco, seis. Ah, y una cosa importante: uno de mis compañeros es alérgico a los frutos secos."
   },
   {
    "s": 0,
    "t": "Gracias por avisar. ¿Es una alergia grave o solo una intolerancia? Se lo pregunto para avisar a la cocina."
   },
   {
    "s": 1,
    "t": "Es grave: si toma aunque sea una pequeña cantidad, tiene que ir al hospital. Se llama Tomás."
   },
   {
    "s": 0,
    "t": "Entendido. Le diré al cocinero que prepare sus platos sin frutos secos ni aceite de nueces. Eso sí, la salsa del solomillo lleva almendras, así que no se la recomendaría."
   },
   {
    "s": 1,
    "t": "Muchas gracias por decírmelo. ¿Podría enviarme la carta por correo para que Tomás elija con antelación?"
   },
   {
    "s": 0,
    "t": "Por supuesto. Se la mando esta misma tarde. ¿Me da su correo electrónico?"
   },
   {
    "choice": {
     "s": 1,
     "promptFr": "À toi de jouer : que réponds-tu ?",
     "options": [
      {
       "t": "Sí, es beatriz.soto arroba correo punto es. Y le agradecería que anotara también lo de la alergia.",
       "ok": true,
       "whyFr": "Tu donnes l'information demandée et tu insistes sur l'allergie : réponse cohérente et prudente."
      },
      {
       "t": "No hace falta, que Tomás se las arregle el viernes.",
       "ok": false,
       "whyFr": "Peu prudent compte tenu de la gravité de l'allergie annoncée."
      },
      {
       "t": "Mejor que Tomás no coma nada, así evitamos el problema.",
       "ok": false,
       "whyFr": "Excessif : le restaurant propose justement d'adapter les plats."
      }
     ]
    }
   },
   {
    "s": 0,
    "t": "Apuntado. Y los postres sin frutos secos son el flan, la tarta de queso y el helado de limón."
   },
   {
    "s": 1,
    "t": "Fenomenal. ¿Cuánto suele costar la cena por persona, más o menos?"
   },
   {
    "s": 0,
    "t": "Con entrante, plato principal y postre, unos veinticinco euros sin la bebida."
   },
   {
    "s": 1,
    "t": "Muy bien. Entonces, hasta el viernes y gracias por todo."
   },
   {
    "s": 0,
    "t": "A usted. Hasta el viernes, Beatriz."
   }
  ],
  "questions": [
   {
    "q": "¿Para cuántas personas reserva Beatriz?",
    "opts": [
     "Para seis",
     "Para ocho",
     "Para cuatro"
    ],
    "correct": 0,
    "whyFr": "Elle dit : « Seremos seis »."
   },
   {
    "q": "¿Por qué elige Beatriz una mesa dentro y no en la terraza?",
    "opts": [
     "Porque hay mucho ruido fuera",
     "Porque por la noche hace frío",
     "Porque la terraza está llena"
    ],
    "correct": 2,
    "whyFr": "Elle dit qu'il fait froid la nuit. La terrasse était proposée à 20 h 30 ou 22 h 15, mais à 21 h 30 il n'y avait que l'intérieur."
   },
   {
    "q": "¿Qué alergia tiene Tomás?",
    "opts": [
     "A los frutos secos",
     "Al marisco",
     "Al gluten"
    ],
    "correct": 1,
    "whyFr": "Beatriz explique qu'il est allergique aux fruits à coque et que c'est grave."
   },
   {
    "q": "¿Qué plato no recomienda el camarero y por qué?",
    "opts": [
     "El helado de limón, porque es demasiado dulce",
     "El solomillo, porque su salsa lleva almendras",
     "El flan, porque lleva huevo"
    ],
    "correct": 2,
    "whyFr": "Javier signale que la sauce du filet contient des amandes."
   },
   {
    "q": "¿Cuánto cuesta aproximadamente la cena por persona sin la bebida?",
    "opts": [
     "Unos veinticinco euros",
     "Unos quince euros",
     "Unos treinta y cinco euros"
    ],
    "correct": 1,
    "whyFr": "Entrée, plat et dessert reviennent à environ 25 euros hors boisson."
   }
  ],
  "expressions": [
   {
    "es": "a nombre de",
    "fr": "au nom de"
   },
   {
    "es": "si queda sitio",
    "fr": "s'il reste de la place"
   },
   {
    "es": "por si hubiera algún cambio",
    "fr": "au cas où il y aurait un changement"
   },
   {
    "es": "lleva almendras",
    "fr": "il contient des amandes"
   },
   {
    "es": "con antelación",
    "fr": "à l'avance"
   }
  ]
 },
 {
  "id": 7,
  "level": "B1",
  "title": "Una tutoría en el colegio",
  "topicFr": "Rendez-vous parent-professeur",
  "situationFr": "Andrés, père de Hugo (11 ans), rencontre la professeure Inmaculada pour parler des résultats de son fils. Ils se vouvoient.",
  "speakers": [
   {
    "name": "Inmaculada",
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
    "t": "Buenas tardes, señor Molina. Siéntese, por favor. Gracias por venir; sé que sale tarde del trabajo."
   },
   {
    "s": 1,
    "t": "Buenas tardes, Inmaculada. No se preocupe, esto es importante. ¿Cómo va Hugo en clase?"
   },
   {
    "s": 0,
    "t": "En general muy bien: es un niño simpático y participa mucho en lengua y en inglés. Donde tiene más dificultades es en matemáticas."
   },
   {
    "s": 1,
    "t": "Ya me lo temía. En casa siempre dice que no le gustan los problemas. ¿Qué nota ha sacado?"
   },
   {
    "s": 0,
    "t": "En el último examen sacó un cuatro y medio. Es verdad que antes había aprobado con un seis, pero últimamente se distrae mucho."
   },
   {
    "s": 1,
    "t": "Me sorprende, porque en casa estudia casi todas las tardes. A lo mejor no sabe cómo organizarse."
   },
   {
    "choice": {
     "s": 0,
     "promptFr": "À toi de jouer : que réponds-tu ?",
     "options": [
      {
       "t": "Lo que pasa es que su hijo es perezoso y no tiene remedio.",
       "ok": false,
       "whyFr": "Jugement dur et peu professionnel : tu viens de dire que Hugo est sympathique et participatif."
      },
      {
       "t": "No, en realidad no hay ningún problema con Hugo.",
       "ok": false,
       "whyFr": "Contradictoire : tu viens de parler de sa note de 4,5 en mathématiques."
      },
      {
       "t": "Es posible. A veces estudian mucho, pero sin un método claro, y se pierden en los ejercicios.",
       "ok": true,
       "whyFr": "Tu valides l'hypothèse du père avec nuance et bienveillance."
      }
     ]
    }
   },
   {
    "s": 1,
    "t": "Entonces, ¿qué me aconseja? Quiero ayudarle, pero sin agobiarlo demasiado."
   },
   {
    "s": 0,
    "t": "Primero, que haga los ejercicios por la mañana si puede, cuando está más despierto. Y además hay clases de refuerzo gratuitas los martes y los jueves a las cuatro y media."
   },
   {
    "s": 1,
    "t": "Eso me parece muy bien. ¿Cuánto duran y quién las da?"
   },
   {
    "s": 0,
    "t": "Duran una hora y las da el profesor Salinas, que tiene mucha paciencia con los niños. Son grupos de seis alumnos como máximo."
   },
   {
    "s": 1,
    "t": "Perfecto. ¿Cree que con eso podría aprobar el siguiente examen?"
   },
   {
    "s": 0,
    "t": "Estoy segura de que mejorará, aunque no puedo prometerle un aprobado. El examen es el veintidós de noviembre."
   },
   {
    "s": 1,
    "t": "Entonces tiene más de un mes por delante. ¿Hay algo más que deba saber?"
   },
   {
    "s": 0,
    "t": "Sí, otra cosa: la excursión al museo de la ciencia es el quince de octubre. Necesito la autorización firmada antes del viernes."
   },
   {
    "choice": {
     "s": 1,
     "promptFr": "À toi de jouer : que réponds-tu ?",
     "options": [
      {
       "t": "Se la traigo mañana mismo, y le agradezco el aviso.",
       "ok": true,
       "whyFr": "Tu t'engages concrètement et tu remercies : réponse adaptée."
      },
      {
       "t": "Ya veremos si firmo algo, no me gusta que vayan de excursión.",
       "ok": false,
       "whyFr": "Peu coopératif sans raison ; la professeure demande seulement une signature."
      },
      {
       "t": "Pues que no vaya Hugo, así se concentra más en las mates.",
       "ok": false,
       "whyFr": "Contre-productif : une sortie n'a rien à voir avec les difficultés en mathématiques."
      }
     ]
    }
   },
   {
    "s": 0,
    "t": "Estupendo. Por último, me gustaría que hablara con Hugo y le dijera que no pasa nada por equivocarse."
   },
   {
    "s": 1,
    "t": "Lo haré esta noche. A veces se frustra enseguida cuando algo le sale mal."
   },
   {
    "s": 0,
    "t": "Justo eso he notado. Con un poco de apoyo, saldrá adelante, ya lo verá."
   },
   {
    "s": 1,
    "t": "Muchísimas gracias por su dedicación. Hasta pronto."
   },
   {
    "s": 0,
    "t": "A usted. Un saludo a Hugo."
   }
  ],
  "questions": [
   {
    "q": "¿Qué nota sacó Hugo en el último examen de matemáticas?",
    "opts": [
     "Un cuatro y medio",
     "Un tres y medio",
     "Un seis"
    ],
    "correct": 1,
    "whyFr": "Le dernier examen était un 4,5 ; il avait eu un 6 avant."
   },
   {
    "q": "¿Cuándo son las clases de refuerzo?",
    "opts": [
     "Los martes y los jueves a las cuatro y media",
     "Los lunes y los miércoles a las cinco",
     "Los viernes por la mañana"
    ],
    "correct": 0,
    "whyFr": "La professeure indique mardis et jeudis à 16 h 30."
   },
   {
    "q": "¿Cuántos alumnos hay como máximo en cada grupo de refuerzo?",
    "opts": [
     "Ocho",
     "Seis",
     "Cuatro"
    ],
    "correct": 2,
    "whyFr": "Les groupes sont de six élèves au maximum."
   },
   {
    "q": "¿Cuándo es el próximo examen de matemáticas?",
    "opts": [
     "El veintidós de noviembre",
     "El quince de octubre",
     "El treinta de noviembre"
    ],
    "correct": 1,
    "whyFr": "L'examen est le 22 novembre ; le 15 octobre est la date de la sortie."
   },
   {
    "q": "¿Qué tiene que entregar Andrés antes del viernes?",
    "opts": [
     "La nota del último examen firmada",
     "La autorización firmada para la excursión",
     "El pago de las clases de refuerzo"
    ],
    "correct": 2,
    "whyFr": "La professeure demande l'autorisation signée pour la sortie au musée de la science."
   }
  ],
  "expressions": [
   {
    "es": "ya me lo temía",
    "fr": "je m'en doutais"
   },
   {
    "es": "sacar una nota",
    "fr": "obtenir une note"
   },
   {
    "es": "no puedo prometerle un aprobado",
    "fr": "je ne peux pas vous promettre la moyenne"
   },
   {
    "es": "salir adelante",
    "fr": "s'en sortir"
   },
   {
    "es": "a lo mejor",
    "fr": "peut-être"
   }
  ]
 },
 {
  "id": 8,
  "level": "B1",
  "title": "Un cambio de turno",
  "topicFr": "Échanger un tour de travail entre collègues",
  "situationFr": "Sofía demande à son collègue Raúl de changer de tour de travail à cause d'un mariage familial. Ils se tutoient.",
  "speakers": [
   {
    "name": "Sofía",
    "voice": "f"
   },
   {
    "name": "Raúl",
    "voice": "m"
   }
  ],
  "lines": [
   {
    "s": 0,
    "t": "Raúl, ¿tienes un minuto? Necesito pedirte un favor, pero si no puedes, lo entiendo perfectamente."
   },
   {
    "s": 1,
    "t": "Dime, Sofía. Hoy no estoy demasiado liado. ¿Qué pasa?"
   },
   {
    "s": 0,
    "t": "El viernes veintitrés me toca el turno de tarde, pero mi hermana se casa ese día y la ceremonia es a las cinco. ¿Podrías cambiarme el turno?"
   },
   {
    "s": 1,
    "t": "Vaya, enhorabuena a tu hermana. A mí el viernes me toca de mañana, así que tendría que quedarme hasta las diez de la noche. No me hace mucha gracia."
   },
   {
    "s": 0,
    "t": "Ya lo imagino. Si me haces el favor, yo cubro tu turno del sábado veinticuatro, que es el que más odias, ¿no?"
   },
   {
    "s": 1,
    "t": "Justo ese. Mmm, el sábado tenía pensado ir a ver a mis padres, pero si tú me cubres, podría ir el domingo."
   },
   {
    "choice": {
     "s": 0,
     "promptFr": "À toi de jouer : que réponds-tu ?",
     "options": [
      {
       "t": "Entonces el sábado trabajas tú y yo me quedo en casa.",
       "ok": false,
       "whyFr": "Contradictoire : tu viens de proposer de couvrir son service du samedi."
      },
      {
       "t": "Te lo agradecería muchísimo. Si quieres, también te invito a un café la semana que viene.",
       "ok": true,
       "whyFr": "Tu remercies et tu proposes un geste amical, ce qui est cohérent avec la demande d'un service."
      },
      {
       "t": "Me da igual lo que hagas, yo ya estoy invitada a la boda.",
       "ok": false,
       "whyFr": "Ton indifférent et impoli alors que tu demandes un service."
      }
     ]
    }
   },
   {
    "s": 1,
    "t": "No hace falta, mujer. Pero hay un problema: el cambio tiene que aprobarlo don Domínguez, y esta semana está de viaje."
   },
   {
    "s": 0,
    "t": "Ya lo sé. Le he escrito un correo esta mañana para decírselo, y me ha respondido que hasta el jueves no podrá contestarme."
   },
   {
    "s": 1,
    "t": "Entonces mejor esperamos a que lo apruebe. Si no, luego puede haber líos con el cuadrante y con la nómina."
   },
   {
    "s": 0,
    "t": "Tienes razón. Aunque el jueves ya sería un poco tarde para organizarlo todo, ¿no crees?"
   },
   {
    "s": 1,
    "t": "Un poco, sí. Podemos adelantarnos: se lo preguntamos por teléfono mañana a primera hora y así lo dejamos cerrado."
   },
   {
    "s": 0,
    "t": "Buena idea. Yo le llamo a las nueve, que a esa hora suele estar libre."
   },
   {
    "s": 1,
    "t": "Vale. Y otra cosa: ¿necesitas que te guarde algo del turno de tarde, algún pedido pendiente?"
   },
   {
    "s": 0,
    "t": "Sí, ahora que lo dices, hay un pedido grande de la empresa de Murcia que tiene que salir el viernes antes de las siete."
   },
   {
    "s": 1,
    "t": "Vale, ¿y qué habría que hacer exactamente con ese pedido?"
   },
   {
    "choice": {
     "s": 0,
     "promptFr": "À toi de jouer : que réponds-tu ?",
     "options": [
      {
       "t": "No te preocupes, eso se hará solo.",
       "ok": false,
       "whyFr": "Irréaliste : une commande ne se prépare pas toute seule."
      },
      {
       "t": "Mejor no te lo cuento, que luego te enfadas.",
       "ok": false,
       "whyFr": "Peu professionnel et peu utile alors que Raúl propose de t'aider."
      },
      {
       "t": "Si prefieres, te dejo una nota con todos los datos del cliente y el albarán preparado.",
       "ok": true,
       "whyFr": "Réponse constructive qui anticipe le travail du collègue."
      }
     ]
    }
   },
   {
    "s": 1,
    "t": "Mucho mejor. Así no pierdo tiempo buscándolo todo."
   },
   {
    "s": 0,
    "t": "Perfecto. Eres un auténtico amigo, Raúl."
   },
   {
    "s": 1,
    "t": "Anda, tranquila, que otro día me tocará a mí pedirte un favor."
   },
   {
    "s": 0,
    "t": "Claro que sí. Entonces, mañana hablo con don Domínguez a las nueve y te cuento."
   },
   {
    "s": 1,
    "t": "De acuerdo. ¡Y a pasarlo bien en la boda!"
   }
  ],
  "questions": [
   {
    "q": "¿Por qué quiere Sofía cambiar el turno?",
    "opts": [
     "Porque está enferma ese día",
     "Porque su hermana se casa",
     "Porque tiene una cita médica"
    ],
    "correct": 2,
    "whyFr": "Sofía explique que sa sœur se marie ce jour-là, la cérémonie étant à 17 h."
   },
   {
    "q": "¿Hasta qué hora tendría que trabajar Raúl el viernes si hace el cambio?",
    "opts": [
     "Hasta las diez de la noche",
     "Hasta las siete",
     "Hasta las once"
    ],
    "correct": 1,
    "whyFr": "Raúl dit qu'il devrait rester jusqu'à dix heures du soir."
   },
   {
    "q": "¿Qué turno cubrirá Sofía a cambio?",
    "opts": [
     "El del sábado veinticuatro",
     "El del domingo",
     "El del jueves"
    ],
    "correct": 0,
    "whyFr": "Sofía propose de couvrir le service du samedi 24."
   },
   {
    "q": "¿Quién tiene que aprobar el cambio y cuándo responderá?",
    "opts": [
     "Don Domínguez, hoy mismo",
     "Don Domínguez, el jueves",
     "Raúl, mañana"
    ],
    "correct": 2,
    "whyFr": "Le chef doit approuver le changement et ne pourra répondre que jeudi, mais ils décident de l'appeler demain."
   },
   {
    "q": "¿Qué pedido tiene que salir el viernes antes de las siete?",
    "opts": [
     "Uno grande de la empresa de Murcia",
     "Uno de la empresa de Valencia",
     "Uno pequeño de Madrid"
    ],
    "correct": 1,
    "whyFr": "Sofía mentionne une grosse commande pour l'entreprise de Murcie."
   }
  ],
  "expressions": [
   {
    "es": "pedir un favor",
    "fr": "demander un service"
   },
   {
    "es": "no me hace mucha gracia",
    "fr": "cela ne me réjouit pas beaucoup"
   },
   {
    "es": "estar liado",
    "fr": "être occupé"
   },
   {
    "es": "cubrir un turno",
    "fr": "remplacer quelqu'un sur son poste"
   },
   {
    "es": "a primera hora",
    "fr": "dès le matin, à la première heure"
   }
  ]
 },
 {
  "id": 9,
  "level": "B1",
  "title": "Devolver un móvil",
  "topicFr": "Retourner un téléphone défectueux en magasin",
  "situationFr": "Tomás veut rendre un téléphone acheté il y a douze jours dont la batterie ne tient pas. Nuria, la vendeuse, le conseille. Ils se vouvoient.",
  "speakers": [
   {
    "name": "Nuria",
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
    "t": "Buenas tardes, bienvenido a TecnoCentro. ¿En qué puedo ayudarle?"
   },
   {
    "s": 1,
    "t": "Buenas tardes. Compré este móvil hace doce días y tengo un problema con la batería: se me agota en tres horas, aunque casi no lo uso."
   },
   {
    "s": 0,
    "t": "Vaya, lo siento. ¿Ha traído el ticket de compra y la caja original?"
   },
   {
    "s": 1,
    "t": "El ticket sí, aquí lo tiene. La caja la tiré, no pensé que me haría falta. ¿Es un problema?"
   },
   {
    "s": 0,
    "t": "No se preocupe, con el ticket basta. Déjeme comprobarlo. Efectivamente, lo compró el dieciocho de septiembre, así que aún está dentro del plazo de devolución, que son quince días."
   },
   {
    "s": 1,
    "t": "Menos mal. Entonces, ¿puedo devolverlo y que me den el dinero?"
   },
   {
    "s": 0,
    "t": "Podría hacerlo, pero primero tengo que revisar el aparato. A veces el fallo se debe a una aplicación y no a la batería. ¿Le importa que lo pruebe un momento?"
   },
   {
    "choice": {
     "s": 1,
     "promptFr": "À toi de jouer : que réponds-tu ?",
     "options": [
      {
       "t": "No, ni se le ocurra tocarlo. Quiero mi dinero ahora mismo.",
       "ok": false,
       "whyFr": "Agressif et impoli : la vendeuse propose simplement de vérifier l'appareil."
      },
      {
       "t": "Haga lo que quiera, a mí me da lo mismo y no pienso volver.",
       "ok": false,
       "whyFr": "Désinvolte et peu constructif ; tu as un vrai problème à régler."
      },
      {
       "t": "Claro, no hay problema. Hágalo, por favor, pero si tiene un fallo de fábrica, prefiero el cambio.",
       "ok": true,
       "whyFr": "Tu acceptes poliment tout en exprimant ta préférence : réponse équilibrée."
      }
     ]
    }
   },
   {
    "s": 0,
    "t": "De acuerdo. Un momento... Sí, tiene razón: la batería se descarga muy deprisa. Se trata de un defecto de fábrica, y está cubierto por la garantía de dos años."
   },
   {
    "s": 1,
    "t": "Me alegro de que lo vea usted también. ¿Qué opciones tengo?"
   },
   {
    "s": 0,
    "t": "Tiene dos: puede mandarlo a reparar, lo cual tardaría entre diez y quince días, o cambiarlo por otro igual, que tengo en almacén."
   },
   {
    "s": 1,
    "t": "Quince días sin móvil es mucho, porque lo necesito para el trabajo. ¿Y si prefiero otro modelo?"
   },
   {
    "s": 0,
    "t": "Hay uno mejor, el Nova 12, que cuesta cuarenta euros más. Tendría que pagar solo la diferencia."
   },
   {
    "s": 1,
    "t": "¿Y qué tiene de mejor? Es que no quiero gastar dinero en cosas que no necesito."
   },
   {
    "s": 0,
    "t": "Tiene más memoria, una cámara mejor y una batería que dura casi el doble. Y, además, le regalamos una funda."
   },
   {
    "choice": {
     "s": 1,
     "promptFr": "À toi de jouer : que réponds-tu ?",
     "options": [
      {
       "t": "Me convence. Me lo llevo, pero ¿podría hacerme un pequeño descuento por las molestias?",
       "ok": true,
       "whyFr": "Tu acceptes l'offre et tu tentes une négociation polie : réponse naturelle."
      },
      {
       "t": "No me convence nada, así que quiero un móvil completamente gratis.",
       "ok": false,
       "whyFr": "Exagéré : la vendeuse propose déjà un échange avantageux."
      },
      {
       "t": "Prefiero que me devuelva cuarenta euros por la batería mala.",
       "ok": false,
       "whyFr": "Illogique : c'est toi qui devrais payer la différence si tu choisis le modèle supérieur."
      }
     ]
    }
   },
   {
    "s": 0,
    "t": "Voy a consultarlo con mi responsable. Un segundo, por favor... Me dice que puedo ofrecerle un descuento de diez euros."
   },
   {
    "s": 1,
    "t": "Entonces serían treinta euros. Perfecto, me lo quedo."
   },
   {
    "s": 0,
    "t": "Estupendo. Se lo preparo y le entrego el ticket nuevo. ¿Quiere pagar con tarjeta?"
   },
   {
    "s": 1,
    "t": "Sí, con tarjeta, por favor. Muchas gracias por su ayuda, Nuria."
   },
   {
    "s": 0,
    "t": "A usted. Que disfrute de su nuevo móvil."
   }
  ],
  "questions": [
   {
    "q": "¿Cuánto le dura la batería a Tomás?",
    "opts": [
     "Tres horas",
     "Cinco horas",
     "Una hora"
    ],
    "correct": 1,
    "whyFr": "Tomás dit que la batterie se vide en trois heures alors qu'il l'utilise à peine."
   },
   {
    "q": "¿De cuántos días es el plazo de devolución?",
    "opts": [
     "Quince días",
     "Treinta días",
     "Siete días"
    ],
    "correct": 0,
    "whyFr": "La vendeuse indique que le délai de retour est de quinze jours."
   },
   {
    "q": "¿Cuánto tardaría la reparación del móvil?",
    "opts": [
     "Entre cinco y diez días",
     "Entre diez y quince días",
     "Entre dos y cinco días"
    ],
    "correct": 2,
    "whyFr": "Nuria annonce entre dix et quinze jours."
   },
   {
    "q": "¿Cuánto cuesta de más el modelo Nova 12?",
    "opts": [
     "Cuarenta euros",
     "Veinte euros",
     "Sesenta euros"
    ],
    "correct": 1,
    "whyFr": "Le Nova 12 coûte quarante euros de plus ; avec la remise de dix euros, Tomás paie finalement trente euros."
   },
   {
    "q": "¿Cuánto paga finalmente Tomás?",
    "opts": [
     "Diez euros",
     "Treinta euros",
     "Cuarenta euros"
    ],
    "correct": 2,
    "whyFr": "Après un rabais de dix euros sur la différence de quarante, il paie trente euros."
   }
  ],
  "expressions": [
   {
    "es": "me haría falta",
    "fr": "j'en aurais besoin"
   },
   {
    "es": "dentro del plazo",
    "fr": "dans les délais"
   },
   {
    "es": "defecto de fábrica",
    "fr": "défaut de fabrication"
   },
   {
    "es": "me quedo con él",
    "fr": "je le prends"
   },
   {
    "es": "me da lo mismo",
    "fr": "ça m'est égal"
   }
  ]
 },
 {
  "id": 10,
  "level": "B1",
  "title": "El ruido de los vecinos",
  "topicFr": "Un problème de voisinage dans un immeuble",
  "situationFr": "Elena, qui habite au quatrième, monte voir son voisin Mateo, au cinquième, parce que ses travaux la dérangent. Ils se tutoient.",
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
    "t": "Hola, Mateo. Perdona que te moleste a esta hora. Soy Elena, la del cuarto. ¿Tienes un momento?"
   },
   {
    "s": 1,
    "t": "Hola, Elena. Claro, pasa. Dime, ¿ha pasado algo?"
   },
   {
    "s": 0,
    "t": "Verás, llevo unas semanas oyendo golpes y un taladro muy temprano, incluso los sábados a las ocho de la mañana. Quería preguntarte si estás de obras."
   },
   {
    "s": 1,
    "t": "Ay, lo siento mucho. Sí, estoy reformando la cocina y el baño. Los obreros empezaron hace tres semanas y terminarán el día veinte."
   },
   {
    "s": 0,
    "t": "Entiendo. Y no tengo nada en contra de las obras, pero a las ocho de la mañana un sábado me parece demasiado pronto. ¿Podrían empezar más tarde?"
   },
   {
    "s": 1,
    "t": "Tienes toda la razón. Yo no sabía que empezaban tan temprano, porque estoy en el trabajo. Les diré que no empiecen antes de las diez."
   },
   {
    "choice": {
     "s": 0,
     "promptFr": "À toi de jouer : que réponds-tu ?",
     "options": [
      {
       "t": "Te lo agradezco mucho. Y si pudieran evitar los domingos, mejor.",
       "ok": true,
       "whyFr": "Tu remercies et tu ajoutes une demande raisonnable : réponse polie."
      },
      {
       "t": "Pues a mí me da igual, yo hago lo que quiera con mi casa.",
       "ok": false,
       "whyFr": "Réponse agressive et fermée : tu viens de te plaindre poliment, ce n'est pas la bonne attitude entre voisins."
      },
      {
       "t": "No pasa nada, yo me voy de vacaciones y así no os molesto.",
       "ok": false,
       "whyFr": "Incohérent : tu ne peux pas disparaître alors que tu vis dans l'immeuble."
      }
     ]
    }
   },
   {
    "s": 1,
    "t": "Por supuesto, los domingos no trabajan. Oye, ¿y el polvo? Mis vecinos de abajo ya me han dicho que sube por el patio de luces."
   },
   {
    "s": 0,
    "t": "Sí, el polvo también es una lata. Hay una capa blanca en el tendedero y en la ventana de la cocina."
   },
   {
    "s": 1,
    "t": "Tengo que decirles que tapen bien las ventanas. Si quieres, puedo pagar la limpieza de tus cristales cuando acabe."
   },
   {
    "s": 0,
    "t": "Eso sería un detalle. Aunque lo que me preocupa más es que mi hija se levanta con dolor de cabeza por culpa del ruido."
   },
   {
    "s": 1,
    "t": "Lo comprendo. Voy a pedirles que hagan los trabajos más ruidosos entre las diez y las dos del mediodía, y que por la tarde solo hagan cosas más tranquilas."
   },
   {
    "s": 0,
    "t": "Estaría muy bien. Por cierto, el jueves a las siete y media hay reunión de la comunidad. ¿Piensas ir?"
   },
   {
    "s": 1,
    "t": "Sí, tengo que ir, porque quiero explicar lo de las obras. Además, el administrador va a hablar de la subida del seguro."
   },
   {
    "choice": {
     "s": 0,
     "promptFr": "À toi de jouer : que réponds-tu ?",
     "options": [
      {
       "t": "Yo no pienso ir, esas reuniones son una pérdida de tiempo.",
       "ok": false,
       "whyFr": "Peu cohérent : tu es précisément venue parler d'un problème qui concerne la copropriété."
      },
      {
       "t": "Entonces yo también voy, así hablamos de este tema con todos los vecinos.",
       "ok": true,
       "whyFr": "Tu confirmes ta présence et tu relies la réunion au sujet des travaux."
      },
      {
       "t": "Me parece genial. Dile al administrador que no quiero pagar nada.",
       "ok": false,
       "whyFr": "Peu pertinent : tu n'as pas à parler au nom de l'administrateur."
      }
     ]
    }
   },
   {
    "s": 1,
    "t": "Perfecto. Lo explicaré yo y pediré disculpas a todos. Y no dudes en avisarme si hay cualquier problema más."
   },
   {
    "s": 0,
    "t": "Gracias, Mateo. Me has quitado un peso de encima."
   },
   {
    "s": 1,
    "t": "Gracias a ti por venir a hablarlo con calma. Ya verás como todo queda arreglado."
   },
   {
    "s": 0,
    "t": "Eso espero. Hasta el jueves, entonces."
   },
   {
    "s": 1,
    "t": "Hasta el jueves. ¡Buenas noches!"
   }
  ],
  "questions": [
   {
    "q": "¿Desde cuándo duran las obras de Mateo?",
    "opts": [
     "Desde hace un mes",
     "Desde hace tres semanas",
     "Desde hace una semana"
    ],
    "correct": 2,
    "whyFr": "Mateo dit que les ouvriers ont commencé il y a trois semaines et finiront le 20."
   },
   {
    "q": "¿A qué hora empiezan los obreros los sábados?",
    "opts": [
     "A las ocho de la mañana",
     "A las diez",
     "A las siete y media"
    ],
    "correct": 0,
    "whyFr": "Elena se plaint du perforateur dès huit heures le samedi ; Mateo promet pas avant dix heures."
   },
   {
    "q": "¿Qué ofrece Mateo para compensar el polvo?",
    "opts": [
     "Pagar la limpieza de los cristales de Elena",
     "Una rebaja en la cuota de la comunidad",
     "Un día de limpieza del patio de luces"
    ],
    "correct": 1,
    "whyFr": "Il propose de payer le nettoyage des vitres d'Elena."
   },
   {
    "q": "¿Cómo se encuentra la hija de Elena a causa del ruido?",
    "opts": [
     "Duerme muy poco por la noche",
     "Se levanta con dolor de cabeza",
     "No puede estudiar por la tarde"
    ],
    "correct": 2,
    "whyFr": "Elena dit que sa fille se réveille avec mal à la tête."
   },
   {
    "q": "¿Cuándo es la reunión de la comunidad?",
    "opts": [
     "El jueves a las siete y media",
     "El miércoles a las siete",
     "El jueves a las ocho y media"
    ],
    "correct": 1,
    "whyFr": "La réunion a lieu jeudi à 19 h 30."
   }
  ],
  "expressions": [
   {
    "es": "estar de obras",
    "fr": "faire des travaux"
   },
   {
    "es": "es una lata",
    "fr": "c'est pénible, c'est embêtant"
   },
   {
    "es": "me has quitado un peso de encima",
    "fr": "tu m'as enlevé un poids"
   },
   {
    "es": "con calma",
    "fr": "calmement"
   },
   {
    "es": "tapar las ventanas",
    "fr": "fermer / couvrir les fenêtres"
   }
  ]
 }
];
