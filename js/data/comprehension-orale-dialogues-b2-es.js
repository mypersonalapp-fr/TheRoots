// The Roots — Compréhension orale (Espagnol, B2) : dialogues du quotidien, longs et interactifs (voix de synthèse du téléphone).
export const COMPREHENSION_ORALE_B2_ES = [
 {
  "id": 1,
  "level": "B2",
  "title": "Subida de alquiler y reparaciones",
  "topicFr": "Négocier loyer et réparations",
  "situationFr": "Marta, locataire depuis quatre ans, rencontre son propriétaire, don Ricardo, qui veut augmenter le loyer alors que des réparations sont en retard.",
  "speakers": [
   {
    "name": "Marta",
    "voice": "f"
   },
   {
    "name": "Ricardo",
    "voice": "m"
   }
  ],
  "lines": [
   {
    "s": 1,
    "t": "Gracias por venir, Marta. Voy a ser directo: la inmobiliaria me ha aconsejado subir el alquiler de 780 a 850 euros a partir de enero."
   },
   {
    "s": 0,
    "t": "Son setenta euros más, don Ricardo. Habría esperado un aviso con más antelación que tres meses."
   },
   {
    "s": 1,
    "t": "Lo sé, y le aseguro que pedí una subida menor, pero dicen que los precios del barrio han subido un ocho por ciento este año."
   },
   {
    "s": 0,
    "t": "Puede que sea así en general, pero yo llevo cuatro años aquí y jamás me he retrasado en un pago."
   },
   {
    "s": 1,
    "t": "Es verdad, y por eso quería hablarlo en persona en lugar de mandarle una carta."
   },
   {
    "s": 0,
    "t": "Se lo agradezco. Si la subida hubiera sido de treinta euros, no le habría puesto ninguna pega."
   },
   {
    "s": 1,
    "t": "Entiendo. Mi hipoteca también ha subido bastante, no crea que lo hago por gusto."
   },
   {
    "choice": {
     "s": 0,
     "promptFr": "À toi de jouer : que réponds-tu ?",
     "options": [
      {
       "t": "Lo entiendo y estaría dispuesta a una subida moderada, siempre que hablemos también de las reparaciones pendientes.",
       "ok": true,
       "whyFr": "Diplomate : tu acceptes le principe tout en ouvrant la négociation sur un autre point."
      },
      {
       "t": "Haga lo que quiera, es su piso y no me queda otra, ¿no?",
       "ok": false,
       "whyFr": "Trop passif : tu abandonnes ta position avant même de négocier."
      },
      {
       "t": "¡Esto es un abuso! Si sigue así, me voy mañana mismo y no le pago el último mes.",
       "ok": false,
       "whyFr": "Agressif et risqué : tu fermes la discussion et tu t'exposes juridiquement."
      }
     ]
    }
   },
   {
    "s": 1,
    "t": "¿Reparaciones? Dígame, ¿a qué se refiere?"
   },
   {
    "s": 0,
    "t": "El techo del baño gotea desde marzo. He escrito dos veces a la inmobiliaria y nadie ha venido a verlo."
   },
   {
    "s": 1,
    "t": "Vaya, no sabía que había llegado a ese punto. Creía que era un poco de humedad."
   },
   {
    "s": 0,
    "t": "Ya hay una mancha del tamaño de un plato, y la caldera se apaga cada vez que la temperatura baja de cinco grados."
   },
   {
    "s": 1,
    "t": "Espere, ¿me dice que no vino nadie? Su sistema de correo falla desde el verano, a lo mejor no recibieron los mensajes."
   },
   {
    "s": 0,
    "t": "Tengo los acuses de lectura de los dos correos, el de marzo y el de junio. Se los puedo reenviar si quiere."
   },
   {
    "s": 1,
    "t": "Si lo hubiera sabido, lo habría arreglado antes del invierno. Voy a anotarlo ahora mismo."
   },
   {
    "s": 1,
    "t": "Mire, ¿qué le parece si mando a un fontanero antes de que acabe el mes y, a cambio, dejamos la subida en 820?"
   },
   {
    "choice": {
     "s": 0,
     "promptFr": "Que réponds-tu pour conclure ?",
     "options": [
      {
       "t": "Me parece razonable, pero me gustaría que quedara por escrito, tanto la fecha de la reparación como el nuevo importe.",
       "ok": true,
       "whyFr": "Précis et prudent : tu acceptes en demandant un engagement écrit."
      },
      {
       "t": "Prefiero que lo dejemos todo como está; no pienso pagar ni un euro más.",
       "ok": false,
       "whyFr": "Tu rejettes tout compromis alors que le propriétaire fait un geste."
      },
      {
       "t": "De acuerdo, pero solo si me devuelve ya el dinero de la caldera.",
       "ok": false,
       "whyFr": "Tu introduis une exigence nouvelle et non justifiée dans la conversation."
      }
     ]
    }
   },
   {
    "s": 1,
    "t": "Por supuesto. Redactaré un anexo al contrato y se lo mandaré esta semana."
   },
   {
    "s": 0,
    "t": "Perfecto. Y otra cosa: la persiana del salón se atasca, aunque eso es menos urgente."
   },
   {
    "s": 1,
    "t": "Lo incluiré también. Si no le importa, el fontanero llamará antes de ir."
   },
   {
    "s": 0,
    "t": "Mejor por la tarde, que por las mañanas trabajo y no estoy en casa hasta las seis."
   },
   {
    "s": 1,
    "t": "Anotado. Entonces quedamos así, Marta."
   },
   {
    "s": 0,
    "t": "Quedamos así. Gracias por escucharme, don Ricardo."
   },
   {
    "s": 1,
    "t": "A usted por su paciencia. Hasta pronto."
   },
   {
    "s": 0,
    "t": "Hasta pronto."
   }
  ],
  "questions": [
   {
    "q": "¿Cuál es el nuevo importe que propone inicialmente el propietario?",
    "opts": [
     "780 euros",
     "850 euros",
     "820 euros",
     "870 euros"
    ],
    "correct": 1,
    "whyFr": "Il parle de passer de 780 à 850 euros ; 820 est le compromis final."
   },
   {
    "q": "¿Desde cuándo gotea el techo del baño?",
    "opts": [
     "Desde enero",
     "Desde el verano",
     "Desde marzo",
     "Desde hace cuatro años"
    ],
    "correct": 2,
    "whyFr": "Marta dit que le plafond fuit depuis mars."
   },
   {
    "q": "¿Por qué no habían venido a revisar el techo, según don Ricardo?",
    "opts": [
     "El fontanero estaba de vacaciones",
     "Marta nunca avisó",
     "No tenían presupuesto",
     "Quizá el sistema de correo de la inmobiliaria fallaba"
    ],
    "correct": 3,
    "whyFr": "Il suggère que le système de courrier de l'agence pose problème depuis l'été."
   },
   {
    "q": "¿Qué acuerdo se alcanza sobre el alquiler?",
    "opts": [
     "820 euros a cambio de la reparación",
     "Se queda igual",
     "850 euros desde enero",
     "780 euros durante un año más"
    ],
    "correct": 0,
    "whyFr": "Il propose 820 euros en échange de l'envoi d'un plombier avant la fin du mois."
   },
   {
    "q": "¿Qué pide Marta para aceptar?",
    "opts": [
     "Una rebaja de un mes",
     "Que el acuerdo conste por escrito",
     "Cambiar de piso",
     "Que la caldera sea nueva"
    ],
    "correct": 1,
    "whyFr": "Elle veut la date de réparation et le nouveau montant par écrit."
   },
   {
    "q": "¿Cuándo debe llamar el fontanero según Marta?",
    "opts": [
     "Por la mañana",
     "A mediodía",
     "Por la tarde",
     "Los sábados"
    ],
    "correct": 2,
    "whyFr": "Elle travaille le matin et n'est pas chez elle avant dix-huit heures."
   }
  ],
  "expressions": [
   {
    "es": "Voy a ser directo",
    "fr": "Je vais être direct"
   },
   {
    "es": "No le habría puesto ninguna pega",
    "fr": "Je n'aurais fait aucune objection"
   },
   {
    "es": "No me queda otra",
    "fr": "Je n'ai pas d'autre choix"
   },
   {
    "es": "Si lo hubiera sabido, lo habría arreglado",
    "fr": "Si je l'avais su, je l'aurais réparé"
   },
   {
    "es": "Quedar por escrito",
    "fr": "Être consigné par écrit"
   }
  ]
 },
 {
  "id": 2,
  "level": "B2",
  "title": "Una entrevista de trabajo",
  "topicFr": "Entretien d'embauche pour un poste de responsable logistique",
  "situationFr": "Lucía passe un entretien avec Javier, responsable des ressources humaines d'une entreprise de distribution.",
  "speakers": [
   {
    "name": "Lucía",
    "voice": "f"
   },
   {
    "name": "Javier",
    "voice": "m"
   }
  ],
  "lines": [
   {
    "s": 1,
    "t": "Buenos días, Lucía. Gracias por haber venido. Hemos recibido más de cien candidaturas para este puesto."
   },
   {
    "s": 0,
    "t": "Buenos días. Es un placer, y me alegra haber pasado la primera selección."
   },
   {
    "s": 1,
    "t": "Cuénteme brevemente su trayectoria. En su currículum veo que trabajó siete años en una empresa de transporte."
   },
   {
    "s": 0,
    "t": "Así es. Empecé como administrativa y, tras dos años, me nombraron coordinadora de rutas, con un equipo de doce personas."
   },
   {
    "s": 1,
    "t": "¿Y por qué decidió marcharse, si estaba tan bien situada?"
   },
   {
    "s": 0,
    "t": "Porque la empresa cerró su sede de Valencia. Si hubiera podido, me habría quedado, pero no me interesaba mudarme a Zaragoza."
   },
   {
    "s": 1,
    "t": "Comprendo. Aquí necesitamos a alguien que reduzca los plazos de entrega, que ahora rondan los cuatro días."
   },
   {
    "s": 0,
    "t": "En mi anterior puesto los bajé de cinco a tres reorganizando los almacenes y renegociando con los transportistas."
   },
   {
    "choice": {
     "s": 0,
     "promptFr": "À toi de jouer : que réponds-tu à la question suivante ?",
     "options": [
      {
       "t": "Me gustaría saber cuál es el mayor problema que afrontaría el equipo en los primeros meses.",
       "ok": true,
       "whyFr": "Question pertinente : tu montres de l'intérêt et un esprit d'analyse."
      },
      {
       "t": "Solo quería preguntar cuántos días de vacaciones tengo.",
       "ok": false,
       "whyFr": "Trop tôt et trop centré sur toi dans un entretien de ce type."
      },
      {
       "t": "No tengo preguntas; usted ya ha visto todo en mi currículum.",
       "ok": false,
       "whyFr": "Manque d'initiative : cela peut sembler du désintérêt."
      }
     ]
    }
   },
   {
    "s": 1,
    "t": "Buena pregunta. El principal problema es la falta de coordinación entre los dos almacenes."
   },
   {
    "s": 0,
    "t": "Entiendo. ¿Cuántas personas dependerían directamente de mí?"
   },
   {
    "s": 1,
    "t": "Quince, repartidas en dos turnos. Es un equipo joven y, si le soy sincero, algo desmotivado."
   },
   {
    "s": 0,
    "t": "Me gustaría empezar por reunirme con cada uno, para que no sintieran que les impongo cambios sin escucharlos."
   },
   {
    "s": 1,
    "t": "Me parece un enfoque acertado. Otra cuestión: ¿cuál diría usted que es su mayor defecto?"
   },
   {
    "s": 0,
    "t": "Soy muy exigente conmigo misma, y a veces me cuesta delegar. Estoy trabajando en ello."
   },
   {
    "s": 1,
    "t": "Muy honesto. Hablemos de condiciones: el salario base es de 38.000 euros brutos anuales, más un variable."
   },
   {
    "s": 0,
    "t": "Entiendo. Dependiendo del variable, podría ser interesante, aunque mi sueldo actual es algo superior."
   },
   {
    "choice": {
     "s": 0,
     "promptFr": "Comment réagis-tu ?",
     "options": [
      {
       "t": "Estaría abierta a negociarlo si el variable estuviera ligado a objetivos realistas y se revisara cada año.",
       "ok": true,
       "whyFr": "Nuancé : tu ouvres la négociation avec des arguments concrets."
      },
      {
       "t": "Con ese sueldo no me interesa; búsquese a otra persona.",
       "ok": false,
       "whyFr": "Trop brusque : tu fermes la porte sans discuter."
      },
      {
       "t": "Acepto cualquier cantidad con tal de conseguir el puesto.",
       "ok": false,
       "whyFr": "Tu te dévalorises et perds tout levier de négociation."
      }
     ]
    }
   },
   {
    "s": 1,
    "t": "Lo hablaremos con la dirección. ¿Cuándo podría incorporarse, en caso de que le ofreciéramos el puesto?"
   },
   {
    "s": 0,
    "t": "Tengo que avisar con quince días, así que podría empezar a primeros del mes que viene."
   },
   {
    "s": 1,
    "t": "Perfecto. Le llamaremos antes del viernes para comunicarle nuestra decisión."
   },
   {
    "s": 0,
    "t": "Muchas gracias. Si necesitan alguna referencia, mi antiguo director estaría encantado de hablar con ustedes."
   },
   {
    "s": 1,
    "t": "Se lo agradezco. Ha sido un placer."
   },
   {
    "s": 0,
    "t": "Lo mismo digo. Hasta pronto."
   },
   {
    "s": 1,
    "t": "Hasta pronto, Lucía."
   }
  ],
  "questions": [
   {
    "q": "¿Cuántos años trabajó Lucía en su anterior empresa?",
    "opts": [
     "Cinco",
     "Doce",
     "Siete",
     "Quince"
    ],
    "correct": 2,
    "whyFr": "Javier mentionne sept ans dans une entreprise de transport."
   },
   {
    "q": "¿Por qué dejó su trabajo anterior?",
    "opts": [
     "La despidieron",
     "Quería cambiar de sector",
     "Le ofrecieron más dinero",
     "La empresa cerró la sede de Valencia"
    ],
    "correct": 3,
    "whyFr": "L'entreprise a fermé le site de Valence et elle ne voulait pas déménager à Saragosse."
   },
   {
    "q": "¿Cuánto redujo Lucía el plazo de entrega?",
    "opts": [
     "De cinco a tres días",
     "De cuatro a dos días",
     "De siete a cuatro días",
     "De cinco a cuatro días"
    ],
    "correct": 0,
    "whyFr": "Elle dit les avoir baissés de cinq à trois jours."
   },
   {
    "q": "¿Cuántas personas estarían a su cargo?",
    "opts": [
     "Doce",
     "Quince",
     "Cien",
     "Treinta"
    ],
    "correct": 1,
    "whyFr": "Quinze personnes réparties en deux équipes ; douze était son ancien équipe."
   },
   {
    "q": "¿Cuál es el salario base que ofrece la empresa?",
    "opts": [
     "38.000 euros netos",
     "42.000 euros brutos",
     "38.000 euros brutos anuales",
     "Un variable sin base fija"
    ],
    "correct": 2,
    "whyFr": "Il propose 38.000 euros bruts annuels plus une partie variable."
   },
   {
    "q": "¿Cuándo comunicarán la decisión a Lucía?",
    "opts": [
     "Hoy mismo",
     "A fin de mes",
     "La semana siguiente al lunes",
     "Antes del viernes"
    ],
    "correct": 3,
    "whyFr": "Javier dit qu'ils appelleront avant vendredi."
   }
  ],
  "expressions": [
   {
    "es": "Si hubiera podido, me habría quedado",
    "fr": "Si j'avais pu, je serais restée"
   },
   {
    "es": "Me cuesta delegar",
    "fr": "J'ai du mal à déléguer"
   },
   {
    "es": "Estaría abierta a negociarlo",
    "fr": "Je serais ouverte à en discuter"
   },
   {
    "es": "Incorporarse a un puesto",
    "fr": "Prendre ses fonctions"
   },
   {
    "es": "Si le soy sincero",
    "fr": "Si je suis honnête avec vous"
   }
  ]
 },
 {
  "id": 3,
  "level": "B2",
  "title": "Una consulta con el médico",
  "topicFr": "Consultation médicale pour des douleurs de dos et du stress",
  "situationFr": "Álvaro consulte la doctora Herrero pour des douleurs persistantes au dos et un sommeil perturbé.",
  "speakers": [
   {
    "name": "Álvaro",
    "voice": "m"
   },
   {
    "name": "Doctora Herrero",
    "voice": "f"
   }
  ],
  "lines": [
   {
    "s": 1,
    "t": "Buenos días, señor Ramos. Siéntese, por favor. ¿Qué le trae por aquí?"
   },
   {
    "s": 0,
    "t": "Buenos días, doctora. Llevo unas tres semanas con un dolor fuerte en la zona lumbar, sobre todo por las mañanas."
   },
   {
    "s": 1,
    "t": "¿Recuerda si hizo algún esfuerzo o si se golpeó, quizá, antes de que empezara?"
   },
   {
    "s": 0,
    "t": "No, ninguno. Aunque hace un mes cambié de trabajo y paso nueve horas sentado, con un ordenador."
   },
   {
    "s": 1,
    "t": "Ya veo. ¿Y el dolor se irradia hacia las piernas o se queda en la espalda?"
   },
   {
    "s": 0,
    "t": "Se queda en la espalda, pero a veces siento un hormigueo en el pie izquierdo."
   },
   {
    "s": 1,
    "t": "Eso conviene vigilarlo. ¿Ha tomado algo para el dolor?"
   },
   {
    "s": 0,
    "t": "Ibuprofeno, dos veces al día. Me alivia un rato, pero luego vuelve."
   },
   {
    "choice": {
     "s": 1,
     "promptFr": "La doctora te pose une question. Que réponds-tu ?",
     "options": [
      {
       "t": "Duermo mal desde hace semanas; me despierto a las cuatro y ya no consigo volver a dormirme.",
       "ok": true,
       "whyFr": "Information utile et précise pour le diagnostic."
      },
      {
       "t": "No creo que importe, doctora, pero me da vergüenza decírselo.",
       "ok": false,
       "whyFr": "Tu bloques l'échange alors que le médecin a besoin de l'information."
      },
      {
       "t": "Prefiero no responder a eso; he venido solo por la espalda.",
       "ok": false,
       "whyFr": "Refus de donner des informations pertinentes."
      }
     ]
    }
   },
   {
    "s": 1,
    "t": "Es importante que me lo cuente, porque el estrés influye mucho en la tensión muscular. ¿Cómo lleva el trabajo?"
   },
   {
    "s": 0,
    "t": "Bastante mal. Me han asignado dos proyectos a la vez y, si pudiera, pediría que me quitaran uno."
   },
   {
    "s": 1,
    "t": "Entonces es posible que haya una parte de contractura relacionada con la ansiedad."
   },
   {
    "s": 0,
    "t": "¿Cree que debería hacerme alguna prueba? Mi hermano tuvo una hernia discal hace años."
   },
   {
    "s": 1,
    "t": "Le voy a mandar una radiografía y, si hace falta, una resonancia. De momento, nada de cargar peso."
   },
   {
    "s": 0,
    "t": "Entendido. ¿Puedo seguir haciendo deporte?"
   },
   {
    "s": 1,
    "t": "Camine media hora al día y nade, si le apetece. Evite correr y los abdominales, por ahora."
   },
   {
    "choice": {
     "s": 0,
     "promptFr": "Tu veux savoir comment te soigner. Que dis-tu ?",
     "options": [
      {
       "t": "¿Y qué puedo hacer en el trabajo para que no empeore, doctora?",
       "ok": true,
       "whyFr": "Question concrète et utile sur la prévention."
      },
      {
       "t": "Entonces ¿me da la baja directamente?",
       "ok": false,
       "whyFr": "Tu sautes à une conclusion sans connaître la gravité."
      },
      {
       "t": "Con tal de no tomar nada, haré lo que sea, aunque no lo entienda.",
       "ok": false,
       "whyFr": "Réponse vague qui ne mène à aucune information utile."
      }
     ]
    }
   },
   {
    "s": 1,
    "t": "Levántese cada hora, estire la espalda y ajuste la altura de la pantalla. Le recetaré también un relajante muscular."
   },
   {
    "s": 0,
    "t": "¿Y cuánto tiempo tardaré en notar mejoría?"
   },
   {
    "s": 1,
    "t": "Si sigue el tratamiento, notará algo en una semana. Vuelva en quince días con los resultados."
   },
   {
    "s": 0,
    "t": "Perfecto. ¿Le pido cita ahora en recepción?"
   },
   {
    "s": 1,
    "t": "Sí, pídala para dentro de dos semanas, a ser posible por la tarde."
   },
   {
    "s": 0,
    "t": "Gracias, doctora. Muy amable."
   },
   {
    "s": 1,
    "t": "De nada. Cuídese, señor Ramos."
   }
  ],
  "questions": [
   {
    "q": "¿Desde hace cuánto tiempo tiene Álvaro el dolor?",
    "opts": [
     "Una semana",
     "Un mes",
     "Dos meses",
     "Tres semanas"
    ],
    "correct": 3,
    "whyFr": "Il parle d'environ trois semaines ; un mois correspond au changement de travail."
   },
   {
    "q": "¿Qué síntoma extra menciona en la pierna o el pie?",
    "opts": [
     "Hormigueo en el pie izquierdo",
     "Calambres en la pierna derecha",
     "Hinchazón en el tobillo",
     "Pérdida de fuerza"
    ],
    "correct": 0,
    "whyFr": "Il ressent un fourmillement au pied gauche."
   },
   {
    "q": "¿Cuántas horas pasa sentado al día?",
    "opts": [
     "Seis",
     "Nueve",
     "Siete",
     "Doce"
    ],
    "correct": 1,
    "whyFr": "Dans son nouveau travail, il reste assis neuf heures."
   },
   {
    "q": "¿Qué pruebas pide la doctora?",
    "opts": [
     "Análisis de sangre",
     "Una ecografía",
     "Una radiografía y, si hace falta, una resonancia",
     "Ninguna prueba"
    ],
    "correct": 2,
    "whyFr": "Elle prescrit une radiographie, puis une IRM si nécessaire."
   },
   {
    "q": "¿Qué deporte puede practicar?",
    "opts": [
     "Correr y nadar",
     "Solo abdominales",
     "Ninguno",
     "Caminar y nadar"
    ],
    "correct": 3,
    "whyFr": "Elle conseille marche et natation, éviter course et abdominaux."
   },
   {
    "q": "¿Cuándo debe volver a consulta?",
    "opts": [
     "Dentro de dos semanas",
     "Dentro de una semana",
     "Dentro de un mes",
     "Solo si empeora"
    ],
    "correct": 0,
    "whyFr": "La doctora dit de revenir dans quinze jours avec les résultats."
   }
  ],
  "expressions": [
   {
    "es": "Llevo tres semanas con un dolor",
    "fr": "Cela fait trois semaines que j'ai une douleur"
   },
   {
    "es": "Evite cargar peso",
    "fr": "Évitez de porter des charges"
   },
   {
    "es": "Me alivia un rato",
    "fr": "Cela me soulage un moment"
   },
   {
    "es": "Si pudiera, pediría que me quitaran uno",
    "fr": "Si je pouvais, je demanderais qu'on m'en retire un"
   },
   {
    "es": "Cuídese",
    "fr": "Prenez soin de vous"
   }
  ]
 },
 {
  "id": 4,
  "level": "B2",
  "title": "Un vuelo cancelado",
  "topicFr": "Réclamer une indemnisation après une annulation de vol",
  "situationFr": "Carmen s'adresse au comptoir de la compagnie aérienne après l'annulation de son vol Madrid-Lisbonne.",
  "speakers": [
   {
    "name": "Carmen",
    "voice": "f"
   },
   {
    "name": "Empleado",
    "voice": "m"
   }
  ],
  "lines": [
   {
    "s": 0,
    "t": "Buenas tardes. Mi vuelo a Lisboa de las 18:40 aparece como cancelado y nadie me ha avisado."
   },
   {
    "s": 1,
    "t": "Buenas tardes, señora. Lamento las molestias. Efectivamente, el vuelo se canceló hace dos horas por un problema técnico."
   },
   {
    "s": 0,
    "t": "Pues podrían haberme enviado un mensaje. Habría evitado venir al aeropuerto desde Alcalá."
   },
   {
    "s": 1,
    "t": "Tiene toda la razón. Parece que el sistema no envió las notificaciones. Voy a ver qué puedo ofrecerle."
   },
   {
    "s": 0,
    "t": "Tengo una reunión mañana a las nueve en Lisboa, así que necesito llegar esta noche como sea."
   },
   {
    "s": 1,
    "t": "El único vuelo con plazas libres sale a las 22:15 con escala en Oporto, y llega a Lisboa a las 00:50."
   },
   {
    "s": 0,
    "t": "¿Y no hay nada directo? Si hubiera sabido que iba a pasar esto, habría cogido el tren."
   },
   {
    "s": 1,
    "t": "Lamentablemente no. Mañana a las 7:30 hay un directo, pero llegaría tarde para su reunión."
   },
   {
    "choice": {
     "s": 0,
     "promptFr": "Que choisis-tu ?",
     "options": [
      {
       "t": "Entonces tomaré el de las 22:15, pero quiero que me reembolsen los gastos y una compensación.",
       "ok": true,
       "whyFr": "Ferme et claire : tu acceptes la solution tout en revendiquant tes droits."
      },
      {
       "t": "Me da igual lo que hagan; esto es una vergüenza y voy a denunciar a la compañía.",
       "ok": false,
       "whyFr": "Colère sans demande concrète : peu efficace."
      },
      {
       "t": "Prefiero esperar al vuelo de mañana; ya veré qué hago con la reunión.",
       "ok": false,
       "whyFr": "Tu sacrifies un engagement important sans en discuter les alternatives."
      }
     ]
    }
   },
   {
    "s": 1,
    "t": "Por supuesto. Según la normativa europea, tiene derecho a una compensación de 250 euros por el retraso y la cancelación."
   },
   {
    "s": 0,
    "t": "¿Y los gastos de comida? Llevo aquí desde las cuatro de la tarde."
   },
   {
    "s": 1,
    "t": "Le entregaré un vale de quince euros para los restaurantes de la terminal."
   },
   {
    "s": 0,
    "t": "Me parece poco, aunque lo acepto. ¿Y el hotel, si hubiera tenido que quedarme a dormir?"
   },
   {
    "s": 1,
    "t": "En ese caso, la compañía se habría hecho cargo del alojamiento, pero con el vuelo de esta noche no hace falta."
   },
   {
    "s": 0,
    "t": "Entiendo. ¿Y cómo recibiré la compensación?"
   },
   {
    "s": 1,
    "t": "Debe rellenar este formulario online con su número de reserva. Tardará unas tres semanas."
   },
   {
    "choice": {
     "s": 0,
     "promptFr": "Tu veux t'assurer d'avoir une trace. Que dis-tu ?",
     "options": [
      {
       "t": "¿Podría darme un justificante por escrito de la cancelación, por si tengo que reclamar después?",
       "ok": true,
       "whyFr": "Prudent : tu demandes une preuve écrite pour la réclamation."
      },
      {
       "t": "No hace falta ningún papel; confío en usted.",
       "ok": false,
       "whyFr": "Imprudent : sans preuve, la réclamation sera plus difficile."
      },
      {
       "t": "Quiero hablar con su jefe ahora mismo y no me muevo de aquí.",
       "ok": false,
       "whyFr": "Escalade inutile alors que l'employé coopère."
      }
     ]
    }
   },
   {
    "s": 1,
    "t": "Claro, se lo imprimo ahora mismo. Aquí tiene también la tarjeta de embarque para el vuelo de las 22:15."
   },
   {
    "s": 0,
    "t": "¿Por qué puerta sale?"
   },
   {
    "s": 1,
    "t": "Por la puerta B-24, y el embarque empieza a las 21:30."
   },
   {
    "s": 0,
    "t": "Y la maleta ¿va directamente a Lisboa?"
   },
   {
    "s": 1,
    "t": "Sí, no tiene que recogerla en Oporto. Se la entregarán en Lisboa."
   },
   {
    "s": 0,
    "t": "Gracias por su ayuda. Espero que no vuelva a ocurrir."
   },
   {
    "s": 1,
    "t": "Lamentamos de nuevo las molestias. Buen viaje, señora."
   }
  ],
  "questions": [
   {
    "q": "¿A qué hora salía el vuelo cancelado?",
    "opts": [
     "A las 18:40",
     "A las 22:15",
     "A las 7:30",
     "A las 21:30"
    ],
    "correct": 0,
    "whyFr": "Le vol annulé devait partir à 18h40."
   },
   {
    "q": "¿Cuál era el motivo de la cancelación?",
    "opts": [
     "Una huelga",
     "Un problema técnico",
     "Mal tiempo",
     "Falta de pasajeros"
    ],
    "correct": 1,
    "whyFr": "L'employé parle d'un problème technique."
   },
   {
    "q": "¿Qué alternativa acepta Carmen?",
    "opts": [
     "Un vuelo directo mañana",
     "Un tren nocturno",
     "Un vuelo con escala en Oporto a las 22:15",
     "Un vuelo a Faro"
    ],
    "correct": 2,
    "whyFr": "Elle prend le vol de 22h15 avec escale à Porto."
   },
   {
    "q": "¿Cuánto vale el vale de comida?",
    "opts": [
     "Diez euros",
     "Veinte euros",
     "Veinticinco euros",
     "Quince euros"
    ],
    "correct": 3,
    "whyFr": "Il lui donne un bon de quinze euros."
   },
   {
    "q": "¿Qué compensación económica le corresponde por la normativa europea?",
    "opts": [
     "250 euros",
     "150 euros",
     "400 euros",
     "600 euros"
    ],
    "correct": 0,
    "whyFr": "Selon la norme européenne, 250 euros."
   },
   {
    "q": "¿Por qué puerta embarca?",
    "opts": [
     "B-12",
     "B-24",
     "B-42",
     "C-24"
    ],
    "correct": 1,
    "whyFr": "Porte B-24, embarquement à 21h30."
   }
  ],
  "expressions": [
   {
    "es": "Podrían haberme avisado",
    "fr": "Ils auraient pu me prévenir"
   },
   {
    "es": "Hacerse cargo de",
    "fr": "Prendre en charge"
   },
   {
    "es": "Tengo derecho a una compensación",
    "fr": "J'ai droit à une indemnisation"
   },
   {
    "es": "Como sea",
    "fr": "Coûte que coûte"
   },
   {
    "es": "Por si tengo que reclamar",
    "fr": "Au cas où je devrais réclamer"
   }
  ]
 },
 {
  "id": 5,
  "level": "B2",
  "title": "Reunión de vecinos",
  "topicFr": "Débat sur les travaux de l'ascenseur en copropriété",
  "situationFr": "Lors d'une réunion de copropriété, le président Gonzalo et la voisine Pilar discutent du coût d'un nouvel ascenseur.",
  "speakers": [
   {
    "name": "Gonzalo",
    "voice": "m"
   },
   {
    "name": "Pilar",
    "voice": "f"
   }
  ],
  "lines": [
   {
    "s": 0,
    "t": "Bueno, vamos con el punto principal: el ascensor. El presupuesto de la empresa asciende a 42.000 euros."
   },
   {
    "s": 1,
    "t": "Me parece una barbaridad, Gonzalo. ¿No podrían arreglar el antiguo en lugar de cambiarlo entero?"
   },
   {
    "s": 0,
    "t": "Ya lo hemos arreglado tres veces en dos años, y el técnico dice que no merece la pena."
   },
   {
    "s": 1,
    "t": "Si lo hubieran revisado mejor la primera vez, quizá no habría hecho falta gastar tanto."
   },
   {
    "s": 0,
    "t": "Es posible, pero ahora hay que tomar una decisión. Si no lo cambiamos, podría quedarse parado cualquier día."
   },
   {
    "s": 1,
    "t": "A mí me afecta menos, vivo en el primero, pero entiendo que los del sexto lo necesiten."
   },
   {
    "s": 0,
    "t": "De hecho, hay tres vecinos mayores de setenta años que casi no pueden subir andando."
   },
   {
    "choice": {
     "s": 1,
     "promptFr": "Pilar doit se positionner. Que dit-elle ?",
     "options": [
      {
       "t": "Estoy de acuerdo en cambiarlo, siempre que se fraccione el pago y se tenga en cuenta a los pisos bajos.",
       "ok": true,
       "whyFr": "Position équilibrée : tu acceptes le principe tout en posant des conditions."
      },
      {
       "t": "Yo no pienso pagar ni un euro; que lo paguen los del sexto.",
       "ok": false,
       "whyFr": "Position rigide qui ignore la solidarité de la copropriété."
      },
      {
       "t": "Lo que decidan ustedes me parecerá bien, no tengo opinión.",
       "ok": false,
       "whyFr": "Tu t'abstiens de participer à une décision qui t'engage financièrement."
      }
     ]
    }
   },
   {
    "s": 0,
    "t": "Podríamos pagar a plazos durante dieciocho meses. ¿Qué opinan los demás?"
   },
   {
    "s": 1,
    "t": "Perdone que interrumpa, ¿se ha pedido algún otro presupuesto?"
   },
   {
    "s": 0,
    "t": "Sí, pedimos tres. Este es el más barato; los otros dos pasaban de 50.000 euros."
   },
   {
    "s": 1,
    "t": "Entonces, no hay mucho margen. Aun así, quisiera saber cómo se repartirá la cuota."
   },
   {
    "s": 0,
    "t": "Según los coeficientes de cada piso: los del primero pagarían unos 800 euros y los del sexto, 1.600."
   },
   {
    "s": 1,
    "t": "Me parece más justo que repartirlo a partes iguales, que era lo que se planteó al principio."
   },
   {
    "s": 0,
    "t": "Exacto. Y la obra durará unas seis semanas, durante las cuales no habrá ascensor."
   },
   {
    "s": 1,
    "t": "Eso es un problema para los mayores. Habría que buscar alguna solución."
   },
   {
    "choice": {
     "s": 0,
     "promptFr": "Gonzalo te demande une idée. Que proposes-tu ?",
     "options": [
      {
       "t": "Podríamos pedir a la empresa que empiece en julio, cuando los vecinos mayores suelen estar de vacaciones.",
       "ok": true,
       "whyFr": "Idée pratique : réduire l'impact sur les voisins âgés."
      },
      {
       "t": "Que se las arreglen como puedan; las obras son siempre molestas.",
       "ok": false,
       "whyFr": "Attitude peu solidaire et sans solution."
      },
      {
       "t": "Propongo cancelar la obra y votar de nuevo el año que viene.",
       "ok": false,
       "whyFr": "Tu reportes un problème urgent sans alternative."
      }
     ]
    }
   },
   {
    "s": 1,
    "t": "Buena idea. De paso, convendría pedir que limpien el portal cada vez que acaben el día."
   },
   {
    "s": 0,
    "t": "Lo anotaré en el acta. ¿Votamos entonces?"
   },
   {
    "s": 1,
    "t": "Votemos. Yo voto a favor, con las condiciones que hemos hablado."
   },
   {
    "s": 0,
    "t": "Por mayoría, queda aprobado: 14 votos a favor, 5 en contra y 2 abstenciones."
   },
   {
    "s": 1,
    "t": "Gracias, Gonzalo. Mañana paso por tu casa a firmar el acta."
   },
   {
    "s": 0,
    "t": "Perfecto, Pilar. Hasta mañana."
   }
  ],
  "questions": [
   {
    "q": "¿Cuánto cuesta el presupuesto elegido?",
    "opts": [
     "32.000 euros",
     "42.000 euros",
     "50.000 euros",
     "24.000 euros"
    ],
    "correct": 1,
    "whyFr": "Le devis s'élève à 42 000 euros ; les autres dépassaient 50 000."
   },
   {
    "q": "¿Cuántas veces se ha arreglado ya el ascensor en dos años?",
    "opts": [
     "Una",
     "Dos",
     "Tres",
     "Cinco"
    ],
    "correct": 2,
    "whyFr": "Gonzalo dit trois réparations en deux ans."
   },
   {
    "q": "¿En qué piso vive Pilar?",
    "opts": [
     "En el tercero",
     "En el sexto",
     "En el ático",
     "En el primero"
    ],
    "correct": 3,
    "whyFr": "Elle dit vivre au premier étage."
   },
   {
    "q": "¿Cómo se reparte la cuota?",
    "opts": [
     "Según los coeficientes de cada piso",
     "A partes iguales",
     "Solo pagan los pisos altos",
     "Según el número de habitantes"
    ],
    "correct": 0,
    "whyFr": "Le calcul se fait selon les coefficients de chaque appartement."
   },
   {
    "q": "¿Cuánto durará la obra?",
    "opts": [
     "Dos semanas",
     "Seis semanas",
     "Tres meses",
     "Dieciocho meses"
    ],
    "correct": 1,
    "whyFr": "Les travaux durent environ six semaines ; dix-huit mois est la durée du paiement échelonné."
   },
   {
    "q": "¿Cuál es el resultado de la votación?",
    "opts": [
     "5 a favor y 14 en contra",
     "Empate",
     "14 a favor, 5 en contra y 2 abstenciones",
     "Se aplaza la votación"
    ],
    "correct": 2,
    "whyFr": "Résultat : 14 pour, 5 contre, 2 abstentions."
   }
  ],
  "expressions": [
   {
    "es": "No merece la pena",
    "fr": "Cela ne vaut pas la peine"
   },
   {
    "es": "Pagar a plazos",
    "fr": "Payer en plusieurs fois"
   },
   {
    "es": "Si lo hubieran revisado mejor",
    "fr": "S'ils l'avaient mieux vérifié"
   },
   {
    "es": "Quedar aprobado por mayoría",
    "fr": "Être approuvé à la majorité"
   },
   {
    "es": "De paso",
    "fr": "Au passage"
   }
  ]
 },
 {
  "id": 6,
  "level": "B2",
  "title": "Devolver una lavadora",
  "topicFr": "Réclamer pour un électroménager défectueux",
  "situationFr": "Daniel retourne dans un magasin d'électroménager avec une machine à laver tombée en panne après dix mois.",
  "speakers": [
   {
    "name": "Daniel",
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
    "t": "Buenas tardes. Compré esta lavadora hace diez meses y ha dejado de centrifugar."
   },
   {
    "s": 1,
    "t": "Buenas tardes. Lamento oírlo. ¿Tiene a mano el ticket de compra?"
   },
   {
    "s": 0,
    "t": "Sí, aquí lo tiene. La compré el 12 de noviembre por 489 euros."
   },
   {
    "s": 1,
    "t": "Perfecto. Aún está en garantía, ya que la garantía legal es de tres años. ¿Ha llamado al servicio técnico?"
   },
   {
    "s": 0,
    "t": "Sí, vinieron la semana pasada y dijeron que era la placa electrónica, pero tardarían un mes en repararla."
   },
   {
    "s": 1,
    "t": "Entiendo. En ese caso, podría optar por la reparación o por la sustitución del aparato."
   },
   {
    "s": 0,
    "t": "Prefiero que me la cambien. Con tres niños en casa, no puedo estar un mes sin lavadora."
   },
   {
    "s": 1,
    "t": "Déjeme comprobar el stock. Ese modelo concreto lo hemos descatalogado."
   },
   {
    "choice": {
     "s": 0,
     "promptFr": "Daniel doit réagir. Que dit-il ?",
     "options": [
      {
       "t": "En ese caso, ¿podrían ofrecerme un modelo equivalente o superior sin coste adicional?",
       "ok": true,
       "whyFr": "Demande précise et raisonnable, conforme aux droits du consommateur."
      },
      {
       "t": "Pues entonces quiero que me devuelvan el dinero y no vuelvo a comprar aquí.",
       "ok": false,
       "whyFr": "Menace précipitée alors que des solutions existent."
      },
      {
       "t": "Da igual, me quedo con la lavadora rota; ya la arreglaré yo.",
       "ok": false,
       "whyFr": "Tu renonces à tes droits sans raison."
      }
     ]
    }
   },
   {
    "s": 1,
    "t": "Tengo dos opciones: una de 8 kilos de la misma marca, o una de 9 kilos de otra marca, algo más cara."
   },
   {
    "s": 0,
    "t": "¿Cuánto más cara es la de 9 kilos?"
   },
   {
    "s": 1,
    "t": "Unos cien euros, que tendría que pagar usted. La de 8 kilos se la cambiaríamos sin coste."
   },
   {
    "s": 0,
    "t": "Si fuera por mí, elegiría la de 9, pero prefiero no pagar diferencia. Me quedo con la de 8."
   },
   {
    "s": 1,
    "t": "Muy bien. Se la podemos entregar el jueves, entre las nueve y las dos."
   },
   {
    "s": 0,
    "t": "Ese día trabajo, así que preferiría el sábado por la mañana."
   },
   {
    "s": 1,
    "t": "Déjeme ver... El sábado hay hueco de diez a doce. ¿Le viene bien?"
   },
   {
    "choice": {
     "s": 0,
     "promptFr": "Beatriz te propose le service d'installation. Que réponds-tu ?",
     "options": [
      {
       "t": "Sí, por favor, y que se lleven también la antigua si es posible.",
       "ok": true,
       "whyFr": "Tu confirmes le créneau et demandes la reprise de l'ancien appareil."
      },
      {
       "t": "No, no me interesa; que me la dejen en la puerta y ya está.",
       "ok": false,
       "whyFr": "Tu refuses l'installation alors que cela te faciliterait la vie."
      },
      {
       "t": "Prefiero ir a recogerla yo con un amigo; no me fío de los repartidores.",
       "ok": false,
       "whyFr": "Tu t'imposes une charge inutile et sans raison."
      }
     ]
    }
   },
   {
    "s": 1,
    "t": "Sin problema. Y le recuerdo que hay una instalación gratuita incluida en el cambio."
   },
   {
    "s": 0,
    "t": "Perfecto, así me ahorro la visita del fontanero."
   },
   {
    "s": 1,
    "t": "Firme aquí, por favor, y le entrego el justificante del cambio."
   },
   {
    "s": 0,
    "t": "Aquí tiene. ¿Se renueva la garantía con la nueva?"
   },
   {
    "s": 1,
    "t": "Sí, la nueva lavadora tiene otros tres años de garantía desde la fecha de entrega."
   },
   {
    "s": 0,
    "t": "Estupendo. Muchas gracias por su ayuda."
   },
   {
    "s": 1,
    "t": "A usted. Hasta el sábado."
   }
  ],
  "questions": [
   {
    "q": "¿Cuánto tiempo hace que Daniel compró la lavadora?",
    "opts": [
     "Un mes",
     "Seis meses",
     "Diez meses",
     "Tres años"
    ],
    "correct": 2,
    "whyFr": "Il l'a achetée il y a dix mois ; trois ans est la garantie légale."
   },
   {
    "q": "¿Cuánto costó la lavadora?",
    "opts": [
     "389 euros",
     "589 euros",
     "499 euros",
     "489 euros"
    ],
    "correct": 3,
    "whyFr": "Le ticket indique 489 euros."
   },
   {
    "q": "¿Qué problema tiene la lavadora?",
    "opts": [
     "Ha dejado de centrifugar",
     "No calienta el agua",
     "Pierde agua",
     "Hace mucho ruido"
    ],
    "correct": 0,
    "whyFr": "Elle ne fait plus l'essorage."
   },
   {
    "q": "¿Qué opción elige Daniel?",
    "opts": [
     "La de 9 kilos pagando la diferencia",
     "La de 8 kilos sin coste",
     "Reparar la antigua",
     "Que le devuelvan el dinero"
    ],
    "correct": 1,
    "whyFr": "Il choisit la machine de 8 kilos, échangée sans frais."
   },
   {
    "q": "¿Cuándo le entregarán la lavadora?",
    "opts": [
     "El jueves por la mañana",
     "El viernes por la tarde",
     "El sábado de diez a doce",
     "El lunes"
    ],
    "correct": 2,
    "whyFr": "Il préfère le samedi, créneau de dix à douze heures."
   },
   {
    "q": "¿Cuánto dura la nueva garantía?",
    "opts": [
     "Un año",
     "Dos años",
     "Cinco años",
     "Tres años"
    ],
    "correct": 3,
    "whyFr": "La nouvelle machine a trois ans de garantie dès la livraison."
   }
  ],
  "expressions": [
   {
    "es": "Estar en garantía",
    "fr": "Être sous garantie"
   },
   {
    "es": "Optar por la sustitución",
    "fr": "Opter pour le remplacement"
   },
   {
    "es": "Sin coste adicional",
    "fr": "Sans frais supplémentaires"
   },
   {
    "es": "Si fuera por mí",
    "fr": "Si ça ne tenait qu'à moi"
   },
   {
    "es": "Descatalogar un modelo",
    "fr": "Retirer un modèle du catalogue"
   }
  ]
 },
 {
  "id": 7,
  "level": "B2",
  "title": "Una fiesta sorpresa",
  "topicFr": "Organiser une fête surprise pour un ami",
  "situationFr": "Inés et Tomás, amis proches, préparent l'anniversaire surprise de leur ami Gabriel pour ses quarante ans.",
  "speakers": [
   {
    "name": "Inés",
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
    "t": "Oye, Tomás, ¿has pensado ya dónde hacemos la fiesta de Gabriel? Cumple cuarenta el 14 de marzo."
   },
   {
    "s": 1,
    "t": "Sí, y creo que lo mejor sería el local de mi primo en Lavapiés. Cabe gente de sobra."
   },
   {
    "s": 0,
    "t": "¿Cuánta gente has contado? Yo había hecho una lista de unas treinta personas."
   },
   {
    "s": 1,
    "t": "Treinta y cinco, si incluimos a su familia de Salamanca. Su madre viene seguro."
   },
   {
    "s": 0,
    "t": "Genial. Pero que Gabriel no sospeche nada, que lo huele todo. El año pasado casi se entera de lo de su aniversario de boda."
   },
   {
    "s": 1,
    "t": "Ya lo sé. Si me lo hubiera dicho antes, habría reservado en otro sitio, pero eso ya está."
   },
   {
    "s": 0,
    "t": "Tenemos que inventarnos una excusa para llevarlo al local sin que se dé cuenta."
   },
   {
    "choice": {
     "s": 1,
     "promptFr": "Tomás cherche une excuse. Que propose Inés ?",
     "options": [
      {
       "t": "Podemos decirle que vamos a cenar los cuatro, y que su mujer lo llevará hasta allí con la excusa del restaurante.",
       "ok": true,
       "whyFr": "Plan réaliste : l'épouse devient complice, donc moins de risque."
      },
      {
       "t": "Se lo decimos todo directamente; así evitamos mentiras.",
       "ok": false,
       "whyFr": "Cela ruinerait la surprise."
      },
      {
       "t": "Mejor lo dejamos en su casa y le dejamos plantado; ya se enterará solo.",
       "ok": false,
       "whyFr": "Cela ne crée aucune surprise et risque de le blesser."
      }
     ]
    }
   },
   {
    "s": 1,
    "t": "Eso funciona. Su mujer, Clara, ya está al tanto, me lo confirmó ayer por teléfono."
   },
   {
    "s": 0,
    "t": "¡Estupendo! Ahora, el menú. ¿Hacemos un catering o cocinamos nosotros?"
   },
   {
    "s": 1,
    "t": "Un catering saldría por unos 20 euros por persona. Si cocináramos nosotros, saldría por la mitad."
   },
   {
    "s": 0,
    "t": "Pero necesitaríamos ayuda. Si tuviéramos más tiempo, cocinaríamos, pero entre semana no podemos."
   },
   {
    "s": 1,
    "t": "Entonces catering. Y nos repartimos el coste entre los amigos, a unos veinte euros cada uno."
   },
   {
    "s": 0,
    "t": "Me parece bien. Yo me encargo de la tarta; una de chocolate, que es su favorita."
   },
   {
    "s": 1,
    "t": "Y yo de la música. Haré una lista con canciones de sus años de universidad."
   },
   {
    "choice": {
     "s": 0,
     "promptFr": "Inés propose un cadeau collectif. Que dit Tomás ?",
     "options": [
      {
       "t": "Podríamos regalarle un fin de semana en un hotel rural; he visto uno por ciento cincuenta euros.",
       "ok": true,
       "whyFr": "Idée concrète avec un prix, adaptée à un budget collectif."
      },
      {
       "t": "Mejor cada uno le compra lo que quiera y ya está.",
       "ok": false,
       "whyFr": "Risque de doublons et pas de cadeau marquant."
      },
      {
       "t": "Para qué regalarle nada, con la fiesta es suficiente.",
       "ok": false,
       "whyFr": "Tu refuses l'idée sans argument."
      }
     ]
    }
   },
   {
    "s": 0,
    "t": "Me gusta. Si cada uno pusiera diez euros, nos daría de sobra."
   },
   {
    "s": 1,
    "t": "Y lo de la sorpresa, ¿a qué hora llegamos todos?"
   },
   {
    "s": 0,
    "t": "A las ocho y media. Gabriel llegará a las nueve menos cuarto, así podremos esconder los coches."
   },
   {
    "s": 1,
    "t": "Perfecto. Yo avisaré a los demás por el grupo, pero sin poner a Gabriel."
   },
   {
    "s": 0,
    "t": "Claro. Creamos un grupo nuevo, sin él."
   },
   {
    "s": 1,
    "t": "Ya lo he creado esta mañana. Se llama 'Proyecto Cuarenta'."
   },
   {
    "s": 0,
    "t": "Ja, ja, me encanta. Pues manos a la obra."
   },
   {
    "s": 1,
    "t": "Manos a la obra, Inés. ¡Ya verás qué cara pone!"
   }
  ],
  "questions": [
   {
    "q": "¿Qué cumple Gabriel?",
    "opts": [
     "Treinta años",
     "Treinta y cinco años",
     "Cincuenta años",
     "Cuarenta años"
    ],
    "correct": 3,
    "whyFr": "Il fête ses quarante ans le 14 mars."
   },
   {
    "q": "¿Dónde será la fiesta?",
    "opts": [
     "En el local del primo de Tomás en Lavapiés",
     "En casa de Gabriel",
     "En un restaurante",
     "En un hotel rural"
    ],
    "correct": 0,
    "whyFr": "Tomás propose le local de son cousin à Lavapiés."
   },
   {
    "q": "¿Cuántas personas habrá aproximadamente?",
    "opts": [
     "Veinte",
     "Treinta y cinco",
     "Treinta",
     "Cincuenta"
    ],
    "correct": 1,
    "whyFr": "Trente-cinq, en incluant la famille de Salamanque."
   },
   {
    "q": "¿Cuánto costaría el catering por persona?",
    "opts": [
     "Diez euros",
     "Treinta euros",
     "Veinte euros",
     "Cuarenta euros"
    ],
    "correct": 2,
    "whyFr": "Environ vingt euros par personne ; cuisiner coûterait la moitié."
   },
   {
    "q": "¿Qué regalo proponen?",
    "opts": [
     "Un viaje a Salamanca",
     "Un reloj",
     "Una tarta de chocolate",
     "Un fin de semana en un hotel rural"
    ],
    "correct": 3,
    "whyFr": "Un week-end dans un hôtel rural à environ 150 euros."
   },
   {
    "q": "¿Quién se encarga de la música?",
    "opts": [
     "Tomás",
     "Inés",
     "Clara",
     "El primo de Tomás"
    ],
    "correct": 0,
    "whyFr": "Tomás dit qu'il fera une liste de chansons de ses années d'université."
   }
  ],
  "expressions": [
   {
    "es": "Lo huele todo",
    "fr": "Il flaire tout"
   },
   {
    "es": "Estar al tanto",
    "fr": "Être au courant"
   },
   {
    "es": "Manos a la obra",
    "fr": "Au travail !"
   },
   {
    "es": "Si tuviéramos más tiempo, cocinaríamos",
    "fr": "Si on avait plus de temps, on cuisinerait"
   },
   {
    "es": "De sobra",
    "fr": "Largement, plus qu'assez"
   }
  ]
 },
 {
  "id": 8,
  "level": "B2",
  "title": "Pedir una hipoteca",
  "topicFr": "Rendez-vous avec un conseiller bancaire pour un prêt immobilier",
  "situationFr": "Sergio et sa compagne Nuria rencontrent une conseillère de banque, Mercedes, pour financer l'achat d'un appartement.",
  "speakers": [
   {
    "name": "Mercedes",
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
    "t": "Buenos días, señor Vidal. Cuénteme, ¿qué tipo de operación tienen en mente?"
   },
   {
    "s": 1,
    "t": "Buenos días. Queremos comprar un piso en Getafe por 210.000 euros y necesitaríamos financiar el ochenta por ciento."
   },
   {
    "s": 0,
    "t": "Eso son 168.000 euros. ¿Tienen ahorrados los 42.000 restantes, más los gastos de compraventa?"
   },
   {
    "s": 1,
    "t": "Tenemos 45.000 euros, aunque nos gustaría no gastarlo todo, por si surge algún imprevisto."
   },
   {
    "s": 0,
    "t": "Lo comprendo. Normalmente aconsejamos guardar un colchón de seis meses de gastos. ¿Cuáles son sus ingresos?"
   },
   {
    "s": 1,
    "t": "Yo cobro 2.300 euros netos al mes con contrato indefinido, y Nuria, 1.900, aunque ella es autónoma desde hace tres años."
   },
   {
    "s": 0,
    "t": "Eso influye. Para autónomos pedimos las declaraciones de los dos últimos ejercicios."
   },
   {
    "s": 1,
    "t": "Sin problema, las tenemos. Si lo hubiéramos sabido, las habríamos traído hoy."
   },
   {
    "choice": {
     "s": 0,
     "promptFr": "Mercedes te propose un type de taux. Que réponds-tu ?",
     "options": [
      {
       "t": "Querríamos entender las diferencias entre tipo fijo y variable antes de decidir.",
       "ok": true,
       "whyFr": "Question pertinente : tu cherches à comprendre avant de t'engager."
      },
      {
       "t": "Elija usted el que le parezca mejor; no entendemos de esto.",
       "ok": false,
       "whyFr": "Tu délègues une décision financière lourde sans comprendre."
      },
      {
       "t": "Firmamos el primero que nos ofrezca; tenemos prisa.",
       "ok": false,
       "whyFr": "Imprudence : tu t'engages sans comparer."
      }
     ]
    }
   },
   {
    "s": 0,
    "t": "Con tipo fijo, la cuota sería de unos 780 euros al mes durante 30 años, a un interés del 3,1 por ciento."
   },
   {
    "s": 1,
    "t": "¿Y con tipo variable? He leído que podría bajar si el euríbor siguiera descendiendo."
   },
   {
    "s": 0,
    "t": "Así es, pero también podría subir. Si el euríbor subiera un punto, la cuota aumentaría unos 100 euros."
   },
   {
    "s": 1,
    "t": "Nuria prefiere la seguridad. Yo, en cambio, correría el riesgo con tal de pagar menos al principio."
   },
   {
    "s": 0,
    "t": "Hay una opción mixta: tipo fijo durante diez años y variable después. ¿Les interesaría?"
   },
   {
    "s": 1,
    "t": "Quizá sí. ¿Qué comisión cobran por amortización anticipada?"
   },
   {
    "s": 0,
    "t": "Un 0,5 por ciento durante los primeros diez años, y nada después."
   },
   {
    "choice": {
     "s": 0,
     "promptFr": "Sergio hésite. Que dit-il ?",
     "options": [
      {
       "t": "Nos gustaría llevarnos la simulación por escrito y consultarlo con la almohada antes de decidir.",
       "ok": true,
       "whyFr": "Raisonnable : tu prends le temps de comparer et de réfléchir."
      },
      {
       "t": "Perfecto, firmamos hoy mismo la oferta vinculante.",
       "ok": false,
       "whyFr": "Décision précipitée pour un engagement de trente ans."
      },
      {
       "t": "Mejor dejamos lo de la hipoteca y seguimos de alquiler.",
       "ok": false,
       "whyFr": "Tu abandonnes sans avoir comparé les offres."
      }
     ]
    }
   },
   {
    "s": 0,
    "t": "Por supuesto. Le preparo una simulación con las tres opciones y se la envío por correo antes de las dos."
   },
   {
    "s": 1,
    "t": "Se lo agradezco. ¿Tendremos que contratar algún seguro con la hipoteca?"
   },
   {
    "s": 0,
    "t": "El seguro de hogar es obligatorio, y el de vida, aunque opcional, nos permite mejorar el tipo en un cuarto de punto."
   },
   {
    "s": 1,
    "t": "Entendido. Lo estudiaremos con calma."
   },
   {
    "s": 0,
    "t": "Perfecto. Y recuerden que la tasación del piso la hará una sociedad independiente, cuesta unos 350 euros."
   },
   {
    "s": 1,
    "t": "Gracias, señora. Hasta pronto."
   },
   {
    "s": 0,
    "t": "Hasta pronto, señor Vidal."
   }
  ],
  "questions": [
   {
    "q": "¿Cuánto cuesta el piso?",
    "opts": [
     "210.000 euros",
     "168.000 euros",
     "190.000 euros",
     "240.000 euros"
    ],
    "correct": 0,
    "whyFr": "L'appartement coûte 210 000 euros ; 168 000 est le montant financé."
   },
   {
    "q": "¿Qué porcentaje quieren financiar?",
    "opts": [
     "El sesenta por ciento",
     "El ochenta por ciento",
     "El setenta por ciento",
     "El noventa por ciento"
    ],
    "correct": 1,
    "whyFr": "Ils veulent financer quatre-vingts pour cent."
   },
   {
    "q": "¿Qué situación laboral tiene Nuria?",
    "opts": [
     "Contrato indefinido",
     "Está en paro",
     "Es autónoma desde hace tres años",
     "Es funcionaria"
    ],
    "correct": 2,
    "whyFr": "Elle est indépendante depuis trois ans."
   },
   {
    "q": "¿Cuál sería la cuota con tipo fijo?",
    "opts": [
     "Unos 580 euros",
     "Unos 680 euros",
     "Unos 880 euros",
     "Unos 780 euros"
    ],
    "correct": 3,
    "whyFr": "Environ 780 euros par mois sur trente ans."
   },
   {
    "q": "¿Qué comisión por amortización anticipada se aplica los diez primeros años?",
    "opts": [
     "El 0,5 por ciento",
     "Ninguna",
     "El 1 por ciento",
     "El 3,1 por ciento"
    ],
    "correct": 0,
    "whyFr": "0,5 pour cent les dix premières années, rien après."
   },
   {
    "q": "¿Qué beneficio ofrece el seguro de vida opcional?",
    "opts": [
     "Reduce la comisión",
     "Mejora el tipo en un cuarto de punto",
     "Elimina la tasación",
     "Permite financiar el cien por cien"
    ],
    "correct": 1,
    "whyFr": "Il permet d'améliorer le taux d'un quart de point."
   }
  ],
  "expressions": [
   {
    "es": "Consultarlo con la almohada",
    "fr": "Dormir dessus"
   },
   {
    "es": "Amortización anticipada",
    "fr": "Remboursement anticipé"
   },
   {
    "es": "Tipo fijo / tipo variable",
    "fr": "Taux fixe / taux variable"
   },
   {
    "es": "Con tal de pagar menos",
    "fr": "Pourvu de payer moins"
   },
   {
    "es": "Si lo hubiéramos sabido, las habríamos traído",
    "fr": "Si on l'avait su, on les aurait apportées"
   }
  ]
 },
 {
  "id": 9,
  "level": "B2",
  "title": "Hablar con el jefe sobre el teletrabajo",
  "topicFr": "Négocier le télétravail avec son responsable",
  "situationFr": "Raquel demande à son responsable, Fernando, de pouvoir télétravailler trois jours par semaine.",
  "speakers": [
   {
    "name": "Raquel",
    "voice": "f"
   },
   {
    "name": "Fernando",
    "voice": "m"
   }
  ],
  "lines": [
   {
    "s": 1,
    "t": "Pasa, Raquel, siéntate. Me dijiste que querías comentarme algo importante."
   },
   {
    "s": 0,
    "t": "Sí, Fernando. Quería plantearte la posibilidad de teletrabajar tres días por semana."
   },
   {
    "s": 1,
    "t": "Vaya, no me lo esperaba. Ahora mismo solo tenemos un día de teletrabajo por semana."
   },
   {
    "s": 0,
    "t": "Lo sé, pero llevo dos años con objetivos cumplidos y creo que puedo ser igual de productiva desde casa."
   },
   {
    "s": 1,
    "t": "No lo discuto. Mi preocupación es la coordinación. Si todos trabajáramos tres días en casa, la oficina estaría vacía."
   },
   {
    "s": 0,
    "t": "Entiendo. Por eso propongo que sean los martes, miércoles y jueves, y que los lunes y viernes esté en la oficina."
   },
   {
    "s": 1,
    "t": "Mmm, los lunes tenemos la reunión de equipo. Los viernes casi nadie viene, la verdad."
   },
   {
    "s": 0,
    "t": "Además, ahorraría casi dos horas diarias de transporte. Si pudiera aprovecharlas, rendiría más."
   },
   {
    "choice": {
     "s": 1,
     "promptFr": "Fernando exprime une réserve. Que réponds-tu ?",
     "options": [
      {
       "t": "Entiendo tu preocupación. ¿Qué te parece si hacemos una prueba de tres meses y evaluamos los resultados?",
       "ok": true,
       "whyFr": "Solution progressive : tu proposes un essai évaluable."
      },
      {
       "t": "Pues si no me lo concedes, me buscaré otro trabajo.",
       "ok": false,
       "whyFr": "Ultimatum agressif sans argument."
      },
      {
       "t": "Da igual, dejémoslo; seguiré yendo todos los días.",
       "ok": false,
       "whyFr": "Tu abandonnes ta demande sans défendre ton cas."
      }
     ]
    }
   },
   {
    "s": 1,
    "t": "Una prueba me parece razonable. ¿Con qué indicadores medimos si funciona?"
   },
   {
    "s": 0,
    "t": "Podríamos usar los plazos de entrega, el número de incidencias resueltas y la satisfacción de los clientes."
   },
   {
    "s": 1,
    "t": "Me parece bien. Lo que sí necesito es que estés disponible por teléfono y por videollamada de nueve a cinco."
   },
   {
    "s": 0,
    "t": "Por supuesto. Si hiciera falta, también iría a la oficina un día extra, con un día de aviso."
   },
   {
    "s": 1,
    "t": "Perfecto. Otra cosa: Clara y Luis también me lo han pedido. Si te lo concedo a ti, tendré que aplicarlo a todos."
   },
   {
    "s": 0,
    "t": "Es lógico. Quizá se podría establecer una norma común, con turnos para que siempre haya gente en la oficina."
   },
   {
    "s": 1,
    "t": "Eso sería lo ideal. Tendría que consultarlo con recursos humanos antes."
   },
   {
    "choice": {
     "s": 0,
     "promptFr": "Raquel doit conclure. Que dit-elle ?",
     "options": [
      {
       "t": "Te lo agradezco. ¿Para cuándo crees que podrías tener una respuesta, aunque sea provisional?",
       "ok": true,
       "whyFr": "Relance polie qui demande un calendrier précis."
      },
      {
       "t": "Entonces no lo decidas tú; hablaré directamente con el director.",
       "ok": false,
       "whyFr": "Tu contournes ton responsable : cela abîme la relation."
      },
      {
       "t": "Si no hay respuesta pronto, empezaré a teletrabajar sin avisar.",
       "ok": false,
       "whyFr": "Tu envisages de passer outre : très risqué."
      }
     ]
    }
   },
   {
    "s": 1,
    "t": "Te daré una respuesta antes del viernes de la semana que viene. Te lo confirmaré por correo."
   },
   {
    "s": 0,
    "t": "Estupendo. Mientras tanto, seguiré con el horario actual."
   },
   {
    "s": 1,
    "t": "Sí, por favor. Y prepara un pequeño informe con las propuestas que me has contado."
   },
   {
    "s": 0,
    "t": "Lo tendrás el lunes, con las cifras de los últimos dos años."
   },
   {
    "s": 1,
    "t": "Eso ayudaría mucho. Gracias por plantearlo con tanta claridad."
   },
   {
    "s": 0,
    "t": "Gracias a ti por escucharme."
   },
   {
    "s": 1,
    "t": "Hasta luego, Raquel."
   },
   {
    "s": 0,
    "t": "Hasta luego."
   }
  ],
  "questions": [
   {
    "q": "¿Cuántos días de teletrabajo tiene Raquel ahora?",
    "opts": [
     "Ninguno",
     "Uno por semana",
     "Dos por semana",
     "Tres por semana"
    ],
    "correct": 1,
    "whyFr": "Fernando dit qu'ils n'ont qu'un jour de télétravail par semaine actuellement."
   },
   {
    "q": "¿Qué días propone Raquel para teletrabajar?",
    "opts": [
     "Lunes, martes y miércoles",
     "Miércoles, jueves y viernes",
     "Martes, miércoles y jueves",
     "Lunes, miércoles y viernes"
    ],
    "correct": 2,
    "whyFr": "Elle propose mardi, mercredi et jeudi."
   },
   {
    "q": "¿Por qué no pueden ser los lunes en casa?",
    "opts": [
     "El jefe no está",
     "Es festivo",
     "La oficina cierra",
     "Hay reunión de equipo"
    ],
    "correct": 3,
    "whyFr": "Le lundi il y a la réunion d'équipe."
   },
   {
    "q": "¿Cuánto tiempo ahorraría Raquel en transporte?",
    "opts": [
     "Casi dos horas diarias",
     "Una hora diaria",
     "Media hora diaria",
     "Tres horas diarias"
    ],
    "correct": 0,
    "whyFr": "Elle économiserait presque deux heures par jour."
   },
   {
    "q": "¿Cuánto dura la prueba que se propone?",
    "opts": [
     "Un mes",
     "Tres meses",
     "Seis meses",
     "Un año"
    ],
    "correct": 1,
    "whyFr": "Raquel propose un essai de trois mois."
   },
   {
    "q": "¿Para cuándo le dará Fernando una respuesta?",
    "opts": [
     "Mañana",
     "Dentro de un mes",
     "Antes del viernes de la semana que viene",
     "El lunes"
    ],
    "correct": 2,
    "whyFr": "Il répondra avant le vendredi de la semaine prochaine."
   }
  ],
  "expressions": [
   {
    "es": "Plantear una posibilidad",
    "fr": "Soulever une possibilité"
   },
   {
    "es": "Hacer una prueba de tres meses",
    "fr": "Faire un essai de trois mois"
   },
   {
    "es": "Si pudiera aprovecharlas, rendiría más",
    "fr": "Si je pouvais les mettre à profit, je serais plus efficace"
   },
   {
    "es": "Estar disponible",
    "fr": "Être disponible"
   },
   {
    "es": "Aunque sea provisional",
    "fr": "Même si c'est provisoire"
   }
  ]
 },
 {
  "id": 10,
  "level": "B2",
  "title": "Una reclamación al seguro",
  "topicFr": "Déclarer un sinistre à une compagnie d'assurance après un dégât des eaux",
  "situationFr": "Rocío appelle sa compagnie d'assurance, où un gestionnaire, Héctor, enregistre son sinistre.",
  "speakers": [
   {
    "name": "Rocío",
    "voice": "f"
   },
   {
    "name": "Héctor",
    "voice": "m"
   }
  ],
  "lines": [
   {
    "s": 1,
    "t": "Aseguradora Iberia Hogar, buenas tardes, le atiende Héctor. ¿En qué puedo ayudarle?"
   },
   {
    "s": 0,
    "t": "Buenas tardes. Quería comunicar un siniestro. Ayer por la noche se rompió una tubería en mi cocina."
   },
   {
    "s": 1,
    "t": "Lamento oírlo. ¿Me facilita su número de póliza y su nombre completo?"
   },
   {
    "s": 0,
    "t": "Rocío Salcedo Mora, póliza 4571-90. El piso está en la calle Toledo, número 12, segundo B."
   },
   {
    "s": 1,
    "t": "Gracias. ¿Qué daños ha habido exactamente?"
   },
   {
    "s": 0,
    "t": "El agua inundó la cocina y se filtró al piso de abajo. La vecina dice que su techo está empapado."
   },
   {
    "s": 1,
    "t": "Entiendo. ¿Ha cerrado la llave de paso y ha avisado a algún fontanero?"
   },
   {
    "s": 0,
    "t": "Sí, anoche vino uno de urgencias. Si no hubiera venido, la inundación habría sido peor. Me cobró 180 euros."
   },
   {
    "choice": {
     "s": 0,
     "promptFr": "Héctor demande une précision. Que réponds-tu ?",
     "options": [
      {
       "t": "Guardé la factura y tengo fotografías de los daños, tanto de mi cocina como del techo de la vecina.",
       "ok": true,
       "whyFr": "Preuves complètes : factures et photos facilitent la prise en charge."
      },
      {
       "t": "No tengo nada; el fontanero ni siquiera me dio un recibo.",
       "ok": false,
       "whyFr": "Sans justificatif, le remboursement sera difficile."
      },
      {
       "t": "Lo único que sé es que el agua sigue saliendo y no sé por qué.",
       "ok": false,
       "whyFr": "Réponse confuse alors que le problème est déjà réparé."
      }
     ]
    }
   },
   {
    "s": 1,
    "t": "Perfecto. Necesitaremos que nos envíe esa documentación por correo electrónico, junto con el parte amistoso con su vecina."
   },
   {
    "s": 0,
    "t": "¿El parte amistoso? No sabía que tuviera que rellenarlo. Si me hubieran informado antes, ya lo habría hecho."
   },
   {
    "s": 1,
    "t": "Es un formulario sencillo en el que ambas partes declaran lo ocurrido. Se lo envío ahora mismo."
   },
   {
    "s": 0,
    "t": "Gracias. ¿Y cuándo vendrá un perito a evaluar los daños?"
   },
   {
    "s": 1,
    "t": "Normalmente, en un plazo de 48 horas. Le llamarán para concertar la visita."
   },
   {
    "s": 0,
    "t": "Es que mañana por la mañana no estoy en casa; mi hijo tiene el pediatra a las diez."
   },
   {
    "choice": {
     "s": 0,
     "promptFr": "Héctor te propose un horaire. Que dis-tu ?",
     "options": [
      {
       "t": "Preferiría que viniera por la tarde, a partir de las cuatro, si fuera posible.",
       "ok": true,
       "whyFr": "Demande claire et poliment formulée avec un horaire précis."
      },
      {
       "t": "Que vengan cuando quieran, no me importa; dejaré la puerta abierta.",
       "ok": false,
       "whyFr": "Imprudent : laisser la porte ouverte n'est pas sérieux."
      },
      {
       "t": "Prefiero no tener a nadie en casa; que decidan solo con las fotos.",
       "ok": false,
       "whyFr": "L'assureur a besoin d'une expertise pour évaluer les dégâts."
      }
     ]
    }
   },
   {
    "s": 1,
    "t": "Lo anotaré. Para el día siguiente, el perito podría pasar sobre las cuatro y media."
   },
   {
    "s": 0,
    "t": "Perfecto. ¿Y qué cubre el seguro exactamente?"
   },
   {
    "s": 1,
    "t": "Su póliza cubre los daños por agua, con una franquicia de 150 euros, y la reparación de los daños a terceros."
   },
   {
    "s": 0,
    "t": "¿La tubería, es decir, la reparación del fallo, también?"
   },
   {
    "s": 1,
    "t": "No, la reparación de la tubería en sí no está incluida, salvo que fuera por una avería súbita, que en su caso lo es."
   },
   {
    "s": 0,
    "t": "Entiendo. Entonces, ¿cuánto tardarán en pagarme?"
   },
   {
    "s": 1,
    "t": "Una vez recibido el informe del perito, la indemnización suele tramitarse en unos quince días."
   },
   {
    "s": 0,
    "t": "Muy bien. Gracias por su ayuda, Héctor."
   },
   {
    "s": 1,
    "t": "A usted, señora Salcedo. Que tenga una buena tarde."
   }
  ],
  "questions": [
   {
    "q": "¿Dónde se rompió la tubería?",
    "opts": [
     "En el baño",
     "En el salón",
     "En la cocina",
     "En la terraza"
    ],
    "correct": 2,
    "whyFr": "Le tuyau s'est cassé dans la cuisine."
   },
   {
    "q": "¿Cuánto pagó Rocío al fontanero de urgencias?",
    "opts": [
     "120 euros",
     "150 euros",
     "210 euros",
     "180 euros"
    ],
    "correct": 3,
    "whyFr": "Elle a payé 180 euros."
   },
   {
    "q": "¿Qué documento adicional necesitan además de factura y fotografías?",
    "opts": [
     "El parte amistoso con la vecina",
     "Un informe médico",
     "El contrato del piso",
     "Un presupuesto de obra"
    ],
    "correct": 0,
    "whyFr": "On lui demande le constat amiable avec la voisine."
   },
   {
    "q": "¿En qué plazo suele venir el perito?",
    "opts": [
     "En 24 horas",
     "En 48 horas",
     "En una semana",
     "En quince días"
    ],
    "correct": 1,
    "whyFr": "En général dans un délai de 48 heures."
   },
   {
    "q": "¿A qué hora podría pasar el perito al día siguiente?",
    "opts": [
     "Sobre las diez",
     "Sobre las seis",
     "Sobre las cuatro y media",
     "Por la mañana"
    ],
    "correct": 2,
    "whyFr": "Héctor propose aux alentours de seize heures trente."
   },
   {
    "q": "¿Qué franquicia tiene la póliza?",
    "opts": [
     "50 euros",
     "100 euros",
     "300 euros",
     "150 euros"
    ],
    "correct": 3,
    "whyFr": "La franchise est de 150 euros."
   }
  ],
  "expressions": [
   {
    "es": "Comunicar un siniestro",
    "fr": "Déclarer un sinistre"
   },
   {
    "es": "Parte amistoso",
    "fr": "Constat amiable"
   },
   {
    "es": "Si no hubiera venido, habría sido peor",
    "fr": "S'il n'était pas venu, cela aurait été pire"
   },
   {
    "es": "Franquicia",
    "fr": "Franchise (assurance)"
   },
   {
    "es": "Avería súbita",
    "fr": "Panne soudaine"
   }
  ]
 }
];
