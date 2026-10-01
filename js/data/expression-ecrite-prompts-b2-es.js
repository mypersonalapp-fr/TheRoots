// The Roots — Expression écrite (Espagnol, niveau B2).
// Champs : id, from, subject, message, task, expectedPoints, fr, model.

export const EXPRESSION_ECRITE_PROMPTS_B2_ES = [
  {
    id: 1,
    from: "Sr. Antonio Beltrán (propietario)",
    subject: "Humedad en el baño del piso",
    message: "Estimada inquilina: Me ha llegado una queja del vecino del piso de abajo, que dice que le cae agua del techo desde hace dos semanas. Si me hubiera avisado antes, habríamos evitado el daño en su pared. Le ruego que me explique qué ha ocurrido y me diga cuándo podría recibir al fontanero. Atentamente, Antonio Beltrán.",
    task: "Responde al propietario: explica lo que pasó, discúlpate con matices y propón un día para la reparación.",
    expectedPoints: [
      { label: "Expliquer ce qui s'est passé (fuite / tuyau)", keywords: ["fuga", "tubería", "tuberia", "goteo", "goteaba", "humedad", "gotera", "noté", "note", "me di cuenta"] },
      { label: "S'excuser avec nuance de ne pas avoir prévenu avant", keywords: ["disculpe", "disculpas", "lamento", "siento", "perdón", "perdon", "debería haber", "deberia haber", "hubiera"] },
      { label: "Proposer un jour / créneau pour le plombier", keywords: ["fontanero", "lunes", "martes", "miércoles", "miercoles", "jueves", "viernes", "por la mañana", "por la manana", "por la tarde", "podría", "podria"] },
      { label: "Formule de politesse formelle (usted)", keywords: ["atentamente", "cordialmente", "un saludo", "reciba", "quedo a su disposición", "quedo a su disposicion"] }
    ],
    fr: "Message : « Chère locataire : j'ai reçu une plainte du voisin du dessous, qui dit que de l'eau tombe de son plafond depuis deux semaines. Si vous m'aviez prévenu plus tôt, nous aurions évité les dégâts sur son mur. Je vous prie de m'expliquer ce qui s'est passé et de me dire quand je pourrais envoyer le plombier. Cordialement, Antonio Beltrán. » — Consigne : réponds au propriétaire, explique ce qui s'est passé, excuse-toi avec nuance et propose un jour pour la réparation.",
    model: "Estimado Sr. Beltrán: Le agradezco su mensaje y lamento sinceramente lo ocurrido. Hace unos diez días noté una pequeña humedad detrás del lavabo, pero pensé que era solo condensación y no le di importancia. Ahora me doy cuenta de que se trataba de una fuga en la tubería y de que debería haberle avisado enseguida; si lo hubiera hecho, el daño habría sido menor. Por supuesto, estoy dispuesta a colaborar en lo que haga falta. El fontanero podría venir el jueves por la mañana, ya que trabajo desde casa esa semana, o el viernes a primera hora si le resulta más cómodo. Mientras tanto, he cerrado la llave de paso para evitar más goteo. Quedo a su disposición para cualquier otra gestión. Atentamente, Ashley Mubama."
  },
  {
    id: 2,
    from: "Lucía (amiga)",
    subject: "¡Me caso en junio!",
    message: "¡Holaaa! Tengo una noticia buenísima: ¡Javier y yo nos casamos el 14 de junio en Granada! Ojalá puedas venir, porque no me imagino ese día sin ti. Sé que es una fecha complicada con tu trabajo, pero me haría mucha ilusión. ¿Qué me dices? Un beso enorme, Lucía.",
    task: "Responde a Lucía: felicítala, di si puedes ir (o no) y explica tus razones con un tono cercano.",
    expectedPoints: [
      { label: "Féliciter Lucía chaleureusement", keywords: ["felicidades", "enhorabuena", "felicito", "me alegro", "qué alegría", "que alegria", "qué ilusión", "que ilusion"] },
      { label: "Dire si tu peux venir et pourquoi", keywords: ["iré", "ire", "podré", "podre", "no podré", "no podre", "vacaciones", "trabajo", "pediré", "pedire", "días libres", "dias libres"] },
      { label: "Exprimer un souhait / une hypothèse (subjonctif ou condit.)", keywords: ["ojalá", "ojala", "me gustaría", "me gustaria", "si pudiera", "aunque", "espero que", "ojalá pueda", "ojala pueda"] },
      { label: "Proposer d'aider ou de se voir avant", keywords: ["ayudar", "ayudarte", "preparativos", "despedida", "vernos", "quedamos", "llámame", "llamame", "hablamos"] }
    ],
    fr: "Message : « Coucou ! J'ai une super nouvelle : Javier et moi, on se marie le 14 juin à Grenade ! J'espère que tu pourras venir, parce que je ne m'imagine pas ce jour sans toi. Je sais que c'est une date compliquée avec ton travail, mais ça me ferait très plaisir. Qu'en dis-tu ? Gros bisou, Lucía. » — Consigne : réponds à Lucía, félicite-la, dis si tu peux venir (ou non) et explique tes raisons sur un ton proche.",
    model: "¡Lucía, felicidades! Qué alegría tan grande, me he emocionado leyendo tu mensaje. Ya sabía yo que Javier y tú acabaríais casándoos. Te cuento: ojalá pueda estar contigo, y haré todo lo posible. Aunque en junio tenemos mucho trabajo por el cierre del semestre, voy a pedir el viernes y el lunes de vacaciones hoy mismo, de modo que, si me los conceden, iré sin ninguna duda. Si no me los dieran, me pondría fatal, pero buscaría la forma de verte antes de la boda. Por cierto, si necesitas ayuda con los preparativos o con la despedida de soltera, cuenta conmigo. ¿Quedamos pronto para hablarlo con calma? Un abrazo fuerte para los dos."
  },
  {
    id: 3,
    from: "Marta Iglesias (directora de RR. HH.)",
    subject: "Consulta sobre el teletrabajo",
    message: "Buenos días: Estamos valorando implantar tres días de teletrabajo a la semana para todo el equipo. Antes de decidir, nos gustaría conocer la opinión de cada persona. Le pido que me responda con su valoración: ventajas, posibles inconvenientes y qué condiciones considera necesarias para que funcione bien. Gracias. Marta Iglesias.",
    task: "Responde dando tu opinión argumentada: ventajas, inconvenientes y condiciones necesarias.",
    expectedPoints: [
      { label: "Donner une position claire", keywords: ["en mi opinión", "en mi opinion", "considero", "creo que", "me parece", "estoy a favor", "a mi juicio", "desde mi punto de vista"] },
      { label: "Citer des avantages (gain de temps, concentration...)", keywords: ["ventaja", "ahorro", "tiempo", "desplazamientos", "concentración", "concentracion", "conciliar", "conciliación", "conciliacion", "productividad"] },
      { label: "Citer des inconvénients / risques", keywords:["inconveniente", "riesgo", "aislamiento", "desventaja", "comunicación", "comunicacion", "cohesión", "cohesion", "sin embargo", "no obstante"] },
      { label: "Poser des conditions pour que ça marche", keywords:["condición", "condicion", "siempre que", "a condición de que", "a condicion de que", "con tal de que", "es necesario que", "habría que", "habria que", "debería", "deberia", "herramientas", "normas"] }
    ],
    fr: "Message : « Bonjour : nous envisageons de mettre en place trois jours de télétravail par semaine pour toute l'équipe. Avant de décider, nous aimerions connaître l'avis de chacun. Je vous prie de me répondre avec votre évaluation : avantages, inconvénients possibles et conditions que vous jugez nécessaires pour que cela fonctionne bien. Merci. Marta Iglesias. » — Consigne : réponds en donnant ton opinion argumentée : avantages, inconvénients et conditions nécessaires.",
    model: "Buenos días, Marta: En mi opinión, la propuesta es muy positiva, aunque conviene matizarla. Entre las ventajas, destacaría el ahorro de tiempo en los desplazamientos y una mayor concentración para las tareas que requieren silencio; además, facilita conciliar la vida personal y profesional. No obstante, existen algunos inconvenientes: el riesgo de aislamiento, la pérdida de comunicación informal y la dificultad para coordinar reuniones. Por ello, considero que funcionaría siempre que se cumplieran ciertas condiciones: que todos los días de presencia coincidieran para el equipo, que dispusiéramos de herramientas adecuadas y que se establecieran normas claras sobre los horarios de disponibilidad. Si se hiciera una prueba de tres meses, podríamos evaluar los resultados antes de adoptar una decisión definitiva. Un cordial saludo."
  },
  {
    id: 4,
    from: "Hotel Mirador del Sur (Málaga)",
    subject: "Su estancia con nosotros",
    message: "Estimado cliente: Esperamos que haya disfrutado de su estancia en nuestro hotel. Nos gustaría conocer su opinión para mejorar nuestro servicio. Le rogamos que nos indique si hubo algún problema durante su visita y qué solución considera adecuada. Quedamos a su entera disposición. Atentamente, Dirección.",
    task: "Escribe una reclamación formal: describe dos problemas concretos y pide una compensación razonable.",
    expectedPoints: [
      { label: "Décrire un premier problème concret (bruit, climatisation...)", keywords: ["ruido", "aire acondicionado", "climatización", "climatizacion", "no funcionaba", "estaba roto", "obras", "limpieza", "ducha"] },
      { label: "Décrire un second problème et le moment où il s'est produit", keywords: ["además", "ademas", "asimismo", "también", "tambien", "la segunda noche", "al llegar", "durante", "recepción", "recepcion", "desayuno"] },
      { label: "Dire qu'on aurait attendu mieux (hypothèse / reproche)", keywords: ["habría esperado", "habria esperado", "esperaba", "hubiera esperado", "hubiera sido", "habría sido", "habria sido", "me hubiera gustado", "decepcionante", "inaceptable"] },
      { label: "Demander une compensation précise", keywords: ["compensación", "compensacion", "reembolso", "devolución", "devolucion", "descuento", "reembolsen", "devuelvan", "bono", "noche gratis"] }
    ],
    fr: "Message : « Cher client : nous espérons que vous avez apprécié votre séjour dans notre hôtel. Nous aimerions connaître votre avis pour améliorer notre service. Nous vous prions de nous indiquer s'il y a eu un problème pendant votre visite et quelle solution vous semble adéquate. Nous restons à votre entière disposition. Cordialement, La Direction. » — Consigne : écris une réclamation formelle : décris deux problèmes concrets et demande une compensation raisonnable.",
    model: "Estimados señores: Agradezco su interés por mi opinión y, dado que me lo solicitan, les expongo con franqueza lo sucedido. Durante la segunda noche, el aire acondicionado de la habitación 312 dejó de funcionar y, pese a que lo comuniqué en recepción, nadie acudió a repararlo. Además, el ruido de unas obras en la terraza empezaba a las ocho de la mañana, algo que no se mencionaba en ningún momento al reservar. Habría esperado un trato más atento y, como mínimo, un cambio de habitación. Teniendo en cuenta que pagué una tarifa superior por vista al mar, considero razonable que me reembolsen el importe correspondiente a una noche. Confío en que lo estudien y quedo a la espera de su respuesta. Atentamente, Ashley Mubama."
  },
  {
    id: 5,
    from: "Clínica Dental Sonrisa",
    subject: "Cambio de cita",
    message: "Buenas tardes: Le escribimos porque el doctor Ramos tiene que ausentarse el próximo jueves y no podrá atenderle a las 10:30 como estaba previsto. Lamentamos las molestias. Si le viniera bien, podríamos ofrecerle el martes a las 17:00 o el viernes a las 9:00. Le agradeceríamos que nos confirmara cuál prefiere. Un saludo, Recepción.",
    task: "Responde a la clínica: elige una opción, explica por qué y haz una pregunta o petición adicional.",
    expectedPoints: [
      { label: "Choisir l'un des deux créneaux proposés", keywords: ["martes", "viernes", "prefiero", "preferiría", "preferiria", "me viene mejor", "me vendría mejor", "me vendria mejor", "17:00", "9:00"] },
      { label: "Justifier le choix (travail, enfant, transport...)", keywords: ["porque", "ya que", "debido a", "trabajo", "hijo", "reunión", "reunion", "turno", "salgo", "recoger"] },
      { label: "Poser une question / demande supplémentaire", keywords: ["¿", "podría", "podria", "sería posible", "seria posible", "le agradecería", "le agradeceria", "me gustaría saber", "me gustaria saber", "tratamiento", "duración", "duracion"] },
      { label: "Formule de politesse (usted)", keywords: ["gracias", "atentamente", "un saludo", "cordialmente", "quedo a la espera", "agradezco"] }
    ],
    fr: "Message : « Bonjour : nous vous écrivons car le docteur Ramos doit s'absenter jeudi prochain et ne pourra pas vous recevoir à 10 h 30 comme prévu. Nous regrettons ce désagrément. Si cela vous convenait, nous pourrions vous proposer mardi à 17 h 00 ou vendredi à 9 h 00. Nous vous serions reconnaissants de nous confirmer lequel vous préférez. Cordialement, La réception. » — Consigne : réponds à la clinique : choisis une option, explique pourquoi et pose une question ou fais une demande supplémentaire.",
    model: "Buenas tardes: Gracias por avisarme con tanta antelación. Entre las dos opciones, preferiría el martes a las 17:00, ya que el viernes por la mañana tengo una reunión que no puedo cambiar y, además, salgo del trabajo a las cuatro, de modo que llegaría sin prisas. Quisiera aprovechar para preguntarles si sería posible que el doctor Ramos revisara también la muela que me molesta desde hace unas semanas, y cuánto tiempo suele durar la revisión, para organizarme con la recogida de mi hijo en el colegio. Le agradecería que me confirmara la cita por correo electrónico. Quedo a la espera de su respuesta. Un cordial saludo, Ashley Mubama."
  },
  {
    id: 6,
    from: "Ayuntamiento de Getafe — Participación ciudadana",
    subject: "Consulta vecinal: peatonalización de la calle Real",
    message: "Estimado vecino: El Ayuntamiento estudia peatonalizar la calle Real durante los fines de semana. Algunos comerciantes temen perder clientes, mientras que otros vecinos reclaman más espacio para pasear. Le invitamos a participar en esta consulta enviándonos su opinión y, si lo desea, alguna alternativa. Gracias por su colaboración.",
    task: "Envía tu opinión al Ayuntamiento: posición, argumentos, y una propuesta alternativa o complementaria.",
    expectedPoints: [
      { label: "Prendre position sur la piétonnisation", keywords: ["estoy a favor", "estoy en contra", "apoyo", "me parece", "considero", "creo que", "en mi opinión", "en mi opinion"] },
      { label: "Argumenter (commerces, bruit, sécurité, pollution)", keywords: ["comercio", "comerciantes", "contaminación", "contaminacion", "ruido", "seguridad", "peatones", "clientes", "calidad de vida"] },
      { label: "Reconnaître l'objection des commerçants", keywords: ["sin embargo", "aunque", "es comprensible", "entiendo", "no obstante", "es cierto que", "si bien"] },
      { label: "Proposer une alternative ou mesure complémentaire", keywords: ["propongo", "sugiero", "propuesta", "alternativa", "aparcamiento", "transporte público", "transporte publico", "carga y descarga", "prueba piloto", "podría", "podria"] }
    ],
    fr: "Message : « Cher habitant : la mairie étudie la possibilité de rendre la rue Real piétonne le week-end. Certains commerçants craignent de perdre des clients, tandis que d'autres habitants réclament plus d'espace pour se promener. Nous vous invitons à participer à cette consultation en nous envoyant votre avis et, si vous le souhaitez, une alternative. Merci de votre collaboration. » — Consigne : envoie ton avis à la mairie : position, arguments et proposition alternative ou complémentaire.",
    model: "Estimados señores: Escribo para participar en la consulta sobre la calle Real. Estoy a favor de peatonalizarla los fines de semana, porque considero que reduciría el ruido y la contaminación y haría la zona más segura para las familias. Entiendo, sin embargo, la preocupación de los comerciantes: es cierto que algunos clientes llegan en coche y podrían dejar de venir. Por eso propongo dos medidas complementarias. En primer lugar, habilitar un aparcamiento cercano con tarifa reducida para quienes compren en el barrio y, en segundo lugar, establecer un horario de carga y descarga por la mañana. Si se pusiera en marcha como prueba piloto de seis meses, se podrían analizar las ventas antes de tomar una decisión definitiva. Les agradezco la oportunidad. Atentamente, Ashley Mubama."
  },
  {
    id: 7,
    from: "Daniel (compañero de trabajo)",
    subject: "Necesito tu consejo",
    message: "Hola: Me han ofrecido un puesto en nuestra oficina de Lisboa, con mejor sueldo pero lejos de mi familia. Llevo días dándole vueltas y no sé qué hacer. Si estuvieras en mi lugar, ¿qué harías? Me interesa mucho tu opinión, porque siempre ves las cosas con calma. Gracias de antemano, Daniel.",
    task: "Aconseja a Daniel: di qué harías tú, qué debería tener en cuenta y cómo podría decidir.",
    expectedPoints: [
      { label: "Dire ce que tu ferais (conditionnel / hypothèse)", keywords: ["yo en tu lugar", "yo que tú", "yo que tu", "si fuera", "si estuviera", "yo aceptaría", "yo aceptaria", "yo no aceptaría", "yo no aceptaria", "me lo pensaría", "me lo pensaria"] },
      { label: "Lister les facteurs à considérer (famille, salaire, carrière)", keywords: ["familia", "sueldo", "salario", "carrera", "experiencia", "coste de vida", "vivienda", "idioma", "oportunidad"] },
      { label: "Conseiller avec le subjonctif", keywords: ["te recomiendo que", "te aconsejo que", "convendría que", "convendria que", "sería bueno que", "seria bueno que", "es importante que", "antes de que", "hables", "pidas", "visites"] },
      { label: "Proposer une méthode pour décider", keywords: ["lista", "pros y contras", "prueba", "periodo", "hablar con", "negociar", "visitar", "fin de semana", "decidir"] }
    ],
    fr: "Message : « Salut : on m'a proposé un poste dans notre bureau de Lisbonne, avec un meilleur salaire mais loin de ma famille. Ça fait des jours que j'y réfléchis et je ne sais pas quoi faire. Si tu étais à ma place, que ferais-tu ? Ton avis m'intéresse beaucoup, parce que tu vois toujours les choses avec calme. Merci d'avance, Daniel. » — Consigne : conseille Daniel : dis ce que tu ferais, ce qu'il devrait prendre en compte et comment il pourrait décider.",
    model: "Hola, Daniel: Es una decisión importante y entiendo que te cueste. Yo, en tu lugar, no diría que sí ni que no todavía; me lo pensaría con calma. Te recomiendo que hagas una lista de pros y contras y que pongas en la balanza no solo el sueldo, sino también el coste de vida en Lisboa, la vivienda y la oportunidad de crecer en tu carrera. Si tu familia fuera lo más importante ahora, quizá no aceptaría; en cambio, si pensaras que dentro de unos años te arrepentirías de no haberlo intentado, me lanzaría. Antes de que contestes, convendría que negociaras un periodo de prueba y que visitaras la ciudad un fin de semana. Sea lo que sea lo que decidas, cuenta conmigo. Un abrazo."
  },
  {
    id: 8,
    from: "ElectroHogar Online (atención al cliente)",
    subject: "Su pedido nº 48215",
    message: "Estimado cliente: Hemos recibido su solicitud de devolución del robot aspirador. Para poder tramitarla, necesitamos que nos describa el problema con el producto y nos indique si prefiere un reembolso o una sustitución. Cabe recordar que dispone de treinta días desde la entrega. Gracias por su paciencia. Atención al cliente.",
    task: "Responde al servicio de atención al cliente: describe el defecto, elige reembolso o cambio y pide información sobre el proceso.",
    expectedPoints: [
      { label: "Décrire le défaut du produit", keywords: ["defecto", "no funciona", "no arranca", "se apaga", "batería", "bateria", "ruido", "falla", "avería", "averia", "estropeado", "funcionaba"] },
      { label: "Préciser la date de livraison / d'achat", keywords: ["recibí", "recibi", "entrega", "entregaron", "hace", "pedido", "compré", "compre", "llegó", "llego", "el día", "el dia"] },
      { label: "Choisir remboursement ou remplacement", keywords: ["reembolso", "sustitución", "sustitucion", "cambio", "prefiero", "preferiría", "preferiria", "devolución", "devolucion", "reemplazo"] },
      { label: "Demander des informations sur la procédure (envoi, frais, délai)", keywords: ["plazo", "gastos de envío", "gastos de envio", "recogida", "etiqueta", "cuánto tardará", "cuanto tardara", "me gustaría saber", "me gustaria saber", "podrían", "podrian", "¿"] }
    ],
    fr: "Message : « Cher client : nous avons bien reçu votre demande de retour de l'aspirateur robot. Pour pouvoir la traiter, nous avons besoin que vous nous décriviez le problème du produit et que vous nous indiquiez si vous préférez un remboursement ou un remplacement. Nous vous rappelons que vous disposez de trente jours à compter de la livraison. Merci de votre patience. Service client. » — Consigne : réponds au service client : décris le défaut, choisis remboursement ou échange et demande des informations sur la procédure.",
    model: "Buenos días: En relación con mi pedido nº 48215, que me entregaron el pasado 12 de septiembre, quisiera explicarles el problema. El robot aspirador funcionaba bien los primeros días, pero ahora se apaga a los diez minutos y la batería no carga correctamente, por lo que lo considero defectuoso. No lo habría devuelto si se tratara de una pequeña molestia, pero esto me impide usarlo con normalidad. Preferiría un reembolso íntegro, ya que he visto que el modelo ha subido de precio y no me interesa una sustitución. ¿Podrían indicarme si ustedes se encargan de la recogida o si debo enviarlo yo, quién asume los gastos de envío y en qué plazo recibiría el dinero? Gracias de antemano. Atentamente, Ashley Mubama."
  }
];
