// The Roots — Expression orale (Espagnol, niveau B2).
// Champs : id, from, callText, task, expectedPoints, fr, model.

export const EXPRESSION_ORALE_PROMPTS_B2_ES = [
  {
    id: 1,
    from: "Clínica Veterinaria Huellas",
    callText: "Buenos días, le llamamos de la clínica veterinaria. Su perro ya se ha despertado de la operación y está bien, pero el veterinario querría hablar con usted. Hemos detectado que necesita una segunda intervención, y habría que decidir si se hace esta semana o dentro de un mes. ¿Qué prefiere y qué dudas tiene?",
    task: "Responde a la clínica: reacciona a la noticia, elige una fecha y haz dos preguntas.",
    expectedPoints: [
      { label: "Réagir à la nouvelle (soulagement / inquiétude)", keywords: ["me alegro", "menos mal", "me preocupa", "me preocupo", "qué susto", "que susto", "gracias por avisar", "qué alivio", "que alivio"] },
      { label: "Choisir une date avec justification", keywords: ["esta semana", "dentro de un mes", "prefiero", "preferiría", "preferiria", "cuanto antes", "porque", "ya que"] },
      { label: "Poser des questions (coût, risques, convalescence)", keywords: ["cuánto", "cuanto", "riesgo", "riesgos", "recuperación", "recuperacion", "coste", "precio", "anestesia", "¿", "me gustaría saber", "me gustaria saber"] },
      { label: "Demander un rendez-vous / à parler au vétérinaire", keywords: ["hablar con", "veterinario", "cita", "pasar", "recogerlo", "visitarlo", "puedo ir"] }
    ],
    fr: "Appel : « Bonjour, nous vous appelons de la clinique vétérinaire. Votre chien s'est réveillé de l'opération et va bien, mais le vétérinaire aimerait vous parler. Nous avons détecté qu'il a besoin d'une seconde intervention, et il faudrait décider si on la fait cette semaine ou dans un mois. Que préférez-vous et quelles questions avez-vous ? » — Consigne : réponds à la clinique : réagis à la nouvelle, choisis une date et pose deux questions.",
    model: "Buenos días, muchas gracias por llamarme. Menos mal que está bien, me había quedado muy preocupada. Respecto a la segunda intervención, preferiría que se hiciera cuanto antes, es decir, esta semana, porque no me gustaría que sufriera más tiempo del necesario. De todos modos, tengo un par de dudas. ¿Cuánto costaría esta nueva operación y cuáles son los riesgos de la anestesia, dado que ya ha pasado una? Además, me gustaría saber cuánto durará la recuperación. Si fuera posible, querría hablar con el veterinario esta tarde y pasar a verlo antes de que cierren. Gracias por todo."
  },
  {
    id: 2,
    from: "Carlos (amigo)",
    callText: "¡Hola! Oye, te llamo porque el sábado montamos una cena sorpresa para el cumpleaños de Nuria y necesito tu ayuda. Había pensado que tú podrías encargarte de la tarta, pero si no te va bien, lo hablamos. Ah, y no se lo digas a nadie, ¿eh? Que si se entera, se acabó la sorpresa. ¿Qué te parece?",
    task: "Responde a Carlos: acepta o propón otra cosa, y plantea cómo organizar la sorpresa.",
    expectedPoints: [
      { label: "Accepter ou refuser le gâteau avec nuance", keywords: ["claro", "cuenta conmigo", "me encargo", "puedo hacer", "la tarta", "no sé si", "no se si", "con mucho gusto"] },
      { label: "Proposer une alternative ou un détail pratique", keywords: ["podría", "podria", "mejor", "en lugar de", "pastelería", "pasteleria", "recoger", "comprar", "hacer yo"] },
      { label: "Assurer la discrétion", keywords: ["no diré", "no dire", "no le diré", "no le dire", "secreto", "tranquilo", "tranquila", "boca cerrada", "sorpresa"] },
      { label: "Poser une question d'organisation (heure, lieu, invités)", keywords: ["¿a qué hora", "a que hora", "dónde", "donde", "cuántos", "cuantos", "invitados", "quién", "quien", "¿"] }
    ],
    fr: "Appel : « Salut ! Écoute, je t'appelle parce que samedi on organise un dîner surprise pour l'anniversaire de Nuria et j'ai besoin de ton aide. J'avais pensé que tu pourrais t'occuper du gâteau, mais si ça ne t'arrange pas, on en parle. Ah, et ne le dis à personne, hein ? Parce que si elle l'apprend, adieu la surprise. Qu'en penses-tu ? » — Consigne : réponds à Carlos : accepte ou propose autre chose, et pose des questions sur l'organisation de la surprise.",
    model: "¡Hola, Carlos! Me parece una idea genial, cuenta conmigo. Me encargo de la tarta encantada, aunque, en lugar de hacerla yo, que con el trabajo no sé si me dará tiempo, la encargaría en la pastelería de la plaza, que tiene unas tartas buenísimas, y la recogería el sábado a mediodía. Y tranquilo, no diré ni una palabra a nadie, mi boca está cerrada. Una cosa: ¿a qué hora habíais pensado que llegáramos para que ella no sospeche? Y, por cierto, ¿cuántos invitados seremos? Así sé de qué tamaño pedir la tarta. Hablamos mañana y lo cerramos todo."
  },
  {
    id: 3,
    from: "Sra. Pilar Gómez (presidenta de la comunidad)",
    callText: "Buenas tardes, soy la presidenta de la comunidad de vecinos. La llamo porque varios vecinos se han quejado de ruidos en su piso después de las once de la noche. No quiero que se lo tome como una acusación, pero le pediría que lo tenga en cuenta. ¿Podría explicarme qué está pasando y si cree que se puede solucionar?",
    task: "Responde a la presidenta: explica la situación con educación y ofrece una solución.",
    expectedPoints: [
      { label: "Réagir poliment / s'excuser", keywords: ["lamento", "disculpe", "perdone", "siento", "no tenía ni idea", "no tenia ni idea", "no me había dado cuenta", "no me habia dado cuenta"] },
      { label: "Expliquer la cause du bruit", keywords: ["reforma", "obras", "hijo", "niño", "nino", "trabajo", "fiesta", "música", "musica", "lavadora", "turno", "tacones", "mudanza"] },
      { label: "Proposer une solution concrète", keywords: ["a partir de ahora", "pondré", "pondre", "alfombra", "tacos", "evitaré", "evitare", "no volverá", "no volvera", "me comprometo", "solucionar"] },
      { label: "Proposer de parler aux voisins / rester en contact", keywords: ["hablar con", "vecinos", "pasaré", "pasare", "disculparme", "contacto", "llámeme", "llameme", "cualquier cosa"] }
    ],
    fr: "Appel : « Bonsoir, je suis la présidente de la copropriété. Je vous appelle car plusieurs voisins se sont plaints de bruits dans votre appartement après 23 heures. Je ne veux pas que vous le preniez comme une accusation, mais je vous demanderais d'en tenir compte. Pourriez-vous m'expliquer ce qui se passe et si vous pensez que l'on peut y remédier ? » — Consigne : réponds à la présidente : explique poliment la situation et propose une solution.",
    model: "Buenas tardes, señora Gómez. Muchas gracias por llamarme y por decírmelo con tanto tacto. Lamento sinceramente las molestias; no me había dado cuenta de que se oyera tanto. Creo que la causa es que mi hijo hace deporte por la tarde y a veces llegamos tarde a casa; además, estoy colocando unos muebles y se arrastran por el suelo. A partir de ahora pondré tacos de fieltro en las patas y una alfombra en el salón, y me comprometo a no hacer ruido después de las diez y media. Si le parece bien, pasaré esta semana por casa de los vecinos de abajo para disculparme personalmente. Y, si vuelve a ocurrir, no dude en llamarme."
  },
  {
    id: 4,
    from: "Agencia Viajes Horizonte",
    callText: "Buenos días, le llamo de Viajes Horizonte. Le informo de que el vuelo de ida a Lisboa del día 20 se ha cancelado por una huelga. Tenemos dos alternativas: salir el día 19 por la noche o el 21 por la mañana, aunque este último le haría perder la primera noche de hotel. ¿Qué opción prefiere y qué podríamos hacer con la reserva?",
    task: "Responde a la agencia: elige una opción, razona y pide una compensación o solución.",
    expectedPoints: [
      { label: "Réagir à l'annulation", keywords: ["vaya", "qué faena", "que faena", "qué pena", "que pena", "lamentable", "me sorprende", "no me lo esperaba", "es una lástima", "es una lastima"] },
      { label: "Choisir une des options et justifier", keywords: ["el día 19", "el dia 19", "el 19", "el 21", "prefiero", "preferiría", "preferiria", "porque", "ya que"] },
      { label: "Demander ce qu'on fait pour l'hôtel / la compensation", keywords: ["hotel", "noche", "reserva", "compensación", "compensacion", "reembolso", "cancelar", "modificar", "cambiar", "gratis", "sin coste"] },
      { label: "Demander une confirmation écrite", keywords: ["por escrito", "correo", "email", "confirmación", "confirmacion", "mensaje", "enviar", "mandar", "me lo confirmen"] }
    ],
    fr: "Appel : « Bonjour, je vous appelle de Viajes Horizonte. Je vous informe que le vol aller pour Lisbonne du 20 a été annulé à cause d'une grève. Nous avons deux alternatives : partir le 19 au soir ou le 21 au matin, bien que ce dernier vous ferait perdre la première nuit d'hôtel. Quelle option préférez-vous et que pourrions-nous faire pour la réservation ? » — Consigne : réponds à l'agence : choisis une option, justifie et demande une compensation ou une solution.",
    model: "Buenos días. ¡Vaya faena! No me lo esperaba. Prefiero salir el día 19 por la noche, ya que, si me fuera el 21, perdería no solo una noche de hotel, sino también la visita guiada que tengo reservada para el 20. Eso sí, tendría que avisar en mi trabajo hoy mismo, de modo que le agradecería que me confirmara cuanto antes si hay plazas disponibles. Respecto al hotel, ¿podrían modificar la reserva sin coste para que empiece el día 19, o bien reembolsarme la primera noche? Si no fuera posible, me gustaría saber qué compensación ofrece la compañía. Por último, les pediría que me enviaran todo por correo electrónico para tenerlo por escrito. Muchas gracias."
  },
  {
    id: 5,
    from: "Radio Ciudad (programa «Hablemos»)",
    callText: "¡Buenas tardes y bienvenida al programa! Hoy hablamos de las redes sociales y los jóvenes. Algunos expertos dicen que habría que prohibirlas a los menores de dieciséis años, otros piensan que la solución es la educación digital. Usted, que lleva años trabajando con adolescentes, ¿qué opina? ¿Cree que prohibirlas serviría de algo?",
    task: "Responde en directo: da tu opinión argumentada y propón una solución.",
    expectedPoints: [
      { label: "Prendre position clairement", keywords: ["en mi opinión", "en mi opinion", "creo que", "considero", "estoy en contra", "estoy a favor", "desde mi experiencia", "me parece"] },
      { label: "Argumenter (risques ou bénéfices pour les jeunes)", keywords: ["adicción", "adiccion", "ansiedad", "autoestima", "ciberacoso", "sueño", "sueno", "amigos", "comunicarse", "aprender", "riesgos"] },
      { label: "Concéder un point à l'autre camp", keywords: ["sin embargo", "es cierto que", "aunque", "por supuesto", "no obstante", "si bien", "entiendo"] },
      { label: "Proposer une solution (éducation, parents, limites)", keywords: ["educación", "educacion", "padres", "familias", "colegios", "límites", "limites", "normas", "propongo", "habría que", "habria que", "debería", "deberia"] }
    ],
    fr: "Appel : « Bonsoir et bienvenue dans l'émission ! Aujourd'hui, nous parlons des réseaux sociaux et des jeunes. Certains experts disent qu'il faudrait les interdire aux moins de seize ans, d'autres pensent que la solution est l'éducation numérique. Vous, qui travaillez depuis des années avec des adolescents, qu'en pensez-vous ? Croyez-vous qu'interdire servirait à quelque chose ? » — Consigne : réponds en direct : donne ton opinion argumentée et propose une solution.",
    model: "Buenas tardes y gracias por invitarme. En mi opinión, prohibirlas por completo no serviría de mucho, porque los jóvenes encontrarían la manera de saltarse la norma. Es cierto que los riesgos son reales: ansiedad, problemas de autoestima, ciberacoso y falta de sueño. Sin embargo, las redes también les permiten comunicarse con sus amigos y aprender cosas nuevas. Por eso creo que habría que apostar por la educación digital en los colegios y por implicar a las familias, estableciendo límites de tiempo claros desde pronto. Si los padres dieran ejemplo y hubiera normas compartidas, los resultados serían mucho mejores que con una prohibición. En definitiva, más educación y menos castigo."
  },
  {
    id: 6,
    from: "Beatriz (compañera de trabajo)",
    callText: "Hola, soy Beatriz. Perdona que te llame fuera de horario, pero estoy agobiadísima. Me han pedido que presente el informe trimestral el lunes y no me ha dado tiempo a terminarlo porque estuve de baja toda la semana pasada. Si pudieras echarme una mano con la parte de los datos, te lo agradecería muchísimo. ¿Podrías ayudarme?",
    task: "Responde a Beatriz: muestra empatía, di hasta dónde puedes ayudar y pon condiciones.",
    expectedPoints: [
      { label: "Montrer de l'empathie", keywords: ["no te preocupes", "lo entiendo", "entiendo", "tranquila", "ánimo", "animo", "pobre", "qué agobio", "que agobio", "me imagino"] },
      { label: "Dire jusqu'où tu peux aider", keywords: ["puedo", "podría", "podria", "me encargo", "te ayudo", "la parte de", "datos", "gráficos", "graficos", "revisar"] },
      { label: "Poser une condition ou une limite de temps", keywords: ["siempre que", "a condición de que", "a condicion de que", "solo hasta", "hasta las", "mañana", "manana", "domingo", "con tal de que", "si me envías", "si me envias"] },
      { label: "Organiser la suite (envoi des fichiers, point rapide)", keywords: ["envíame", "enviame", "mándame", "mandame", "correo", "quedamos", "llamamos", "reunión", "reunion", "videollamada", "archivo", "documentos"] }
    ],
    fr: "Appel : « Salut, c'est Beatriz. Excuse-moi de t'appeler en dehors des heures de travail, mais je suis complètement dépassée. On m'a demandé de présenter le rapport trimestriel lundi et je n'ai pas eu le temps de le terminer parce que j'ai été en arrêt toute la semaine dernière. Si tu pouvais me donner un coup de main avec la partie des données, je t'en serais très reconnaissante. Pourrais-tu m'aider ? » — Consigne : réponds à Beatriz : montre de l'empathie, dis jusqu'où tu peux aider et pose des conditions.",
    model: "¡Hola, Beatriz! No te preocupes, lo entiendo perfectamente, después de una semana de baja es normal que estés agobiada. Claro que te puedo ayudar: me encargo de la parte de los datos y de revisar los gráficos. Eso sí, solo podría dedicarle un par de horas hasta mañana por la tarde, porque el domingo tengo un compromiso familiar. Te propongo que me envíes esta noche por correo los archivos y las instrucciones, siempre que me indiques qué formato prefiere la dirección. Y si te parece bien, mañana a las cinco hacemos una videollamada rápida para repasar todo juntas antes del lunes. Verás cómo sale bien, ánimo."
  },
  {
    id: 7,
    from: "Taller Mecánico Ruiz",
    callText: "Buenos días, le llamamos del taller. Hemos revisado su coche y, además de cambiar los frenos, hemos visto que la correa de distribución está muy desgastada. Si no se cambia ahora, podría romperse en unos meses y salir bastante más caro. El presupuesto total sería de unos seiscientos euros. ¿Desea que procedamos con la reparación completa?",
    task: "Responde al taller: decide, pide aclaraciones sobre el presupuesto y plazos.",
    expectedPoints: [
      { label: "Prendre une décision ou demander du temps", keywords: ["adelante", "proceda", "procedan", "de acuerdo", "lo pensaré", "lo pensare", "necesito pensarlo", "acepto", "hagan", "cambien"] },
      { label: "Questionner le devis (détail, garantie)", keywords: ["presupuesto", "desglose", "incluye", "mano de obra", "piezas", "garantía", "garantia", "iva", "precio", "¿"] },
      { label: "Demander le délai de réparation", keywords: ["cuánto tardará", "cuanto tardara", "cuándo", "cuando", "plazo", "días", "dias", "para el viernes", "horas", "estará listo", "estara listo"] },
      { label: "Exprimer une réserve ou une exigence", keywords: ["siempre que", "a condición de que", "a condicion de que", "me gustaría que", "me gustaria que", "si fuera posible", "avísenme", "avisenme", "llámenme", "llamenme", "antes de"] }
    ],
    fr: "Appel : « Bonjour, nous vous appelons du garage. Nous avons examiné votre voiture et, en plus de changer les freins, nous avons vu que la courroie de distribution est très usée. Si on ne la change pas maintenant, elle pourrait casser dans quelques mois et cela coûterait bien plus cher. Le devis total serait d'environ six cents euros. Souhaitez-vous que nous procédions à la réparation complète ? » — Consigne : réponds au garage : décide, demande des précisions sur le devis et les délais.",
    model: "Buenos días. Gracias por avisarme. Si es tan importante como dicen, creo que lo mejor es que procedan con la reparación completa. Sin embargo, antes de dar el visto bueno me gustaría saber si el presupuesto de seiscientos euros incluye la mano de obra y el IVA, y si ofrecen alguna garantía sobre las piezas nuevas. Además, ¿cuánto tardarían en tenerlo listo? Lo necesito para el viernes, porque lo uso para ir al trabajo. Si fuera posible, me gustaría que me llamaran antes de empezar con cualquier otra reparación que no esté en el presupuesto. Quedo a la espera de su respuesta. Muchas gracias."
  },
  {
    id: 8,
    from: "Profesora Elena Vidal (colegio)",
    callText: "Buenas tardes, soy Elena Vidal, la tutora de su hijo. Quería comentarle que últimamente lo noto más distraído en clase y ha dejado de entregar algunos deberes. No es nada grave, pero preferiría que lo habláramos antes de que vaya a más. ¿Ha notado usted algún cambio en casa? ¿Le parecería bien que nos reuniéramos esta semana?",
    task: "Responde a la tutora: cuéntale lo que has notado en casa, propón hipótesis y fija una reunión.",
    expectedPoints: [
      { label: "Remercier / réagir à l'information", keywords: ["gracias por", "agradezco", "me sorprende", "me preocupa", "no me lo esperaba", "es bueno que", "me alegro de que me avise"] },
      { label: "Décrire ce que tu as remarqué à la maison", keywords: ["en casa", "he notado", "últimamente", "ultimamente", "duerme", "sueño", "sueno", "móvil", "movil", "videojuegos", "cansado", "callado", "mudanza", "cambio"] },
      { label: "Proposer une hypothèse sur la cause", keywords: ["quizá", "quiza", "quizás", "quizas", "puede que", "tal vez", "a lo mejor", "será por", "sera por", "supongo que", "debe de"] },
      { label: "Fixer un rendez-vous (jour / heure)", keywords: ["reunión", "reunion", "jueves", "miércoles", "miercoles", "viernes", "martes", "lunes", "a las", "tarde", "podría", "podria", "me viene bien"] }
    ],
    fr: "Appel : « Bonjour, je suis Elena Vidal, la professeure principale de votre fils. Je voulais vous dire que ces derniers temps je le trouve plus distrait en classe et qu'il a cessé de rendre certains devoirs. Ce n'est rien de grave, mais je préférerais que nous en parlions avant que cela n'empire. Avez-vous remarqué un changement à la maison ? Cela vous conviendrait-il que nous nous voyions cette semaine ? » — Consigne : réponds à la professeure : dis ce que tu as remarqué à la maison, propose des hypothèses et fixe un rendez-vous.",
    model: "Buenas tardes, señora Vidal, y gracias por avisarme. Me alegro de que me lo diga a tiempo. En casa he notado que últimamente está más cansado y que duerme peor; creo que se acuesta tarde porque se queda con el móvil. Puede que también le afecte el cambio de grupo de amigos que ha habido este trimestre, o quizás esté nervioso por los exámenes. No lo sé con certeza, así que me gustaría hablarlo con él y con usted. Respecto a la reunión, me vendría bien el jueves a las cinco de la tarde, si le parece. Si no pudiera, el miércoles a primera hora también me iría bien. Gracias de nuevo por su interés."
  }
];
