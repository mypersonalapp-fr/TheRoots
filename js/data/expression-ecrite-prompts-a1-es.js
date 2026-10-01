// The Roots — Expression écrite (Espagnol, niveau A1).
// Un message reçu ; l'apprenant répond par écrit. Présent de l'indicatif seulement.

export const EXPRESSION_ECRITE_PROMPTS_A1_ES = [
  {
    id: 1, from: "Lucía", subject: "¿Quedamos?",
    message: "¡Hola! Soy Lucía. ¿Qué haces este sábado? Yo voy al parque por la mañana. ¿Vienes conmigo? Un beso. Lucía",
    task: "Responde a Lucía: di qué haces el sábado y acepta o rechaza su invitación.",
    expectedPoints: [
      { label: "Saluer Lucía", keywords: ["hola", "buenos días", "buenas"] },
      { label: "Dire ce que tu fais samedi", keywords: ["sábado", "sabado", "voy", "hago", "tengo", "estoy"] },
      { label: "Accepter ou refuser l'invitation", keywords: ["sí", "si", "vale", "claro", "no puedo", "gracias", "voy contigo", "voy al parque"] },
    ],
    fr: "Salut ! Je suis Lucía. Que fais-tu ce samedi ? Moi, je vais au parc le matin. Tu viens avec moi ? Bises. Lucía. Consigne : réponds à Lucía, dis ce que tu fais samedi et accepte ou refuse son invitation.",
    model: "Hola, Lucía. El sábado no tengo clase y estoy en casa por la tarde. Sí, voy contigo al parque por la mañana. ¡Vale! ¿A qué hora vamos? Un beso."
  },
  {
    id: 2, from: "Hotel Mirador", subject: "Su reserva",
    message: "Buenos días. Somos el Hotel Mirador. Tenemos su reserva para una habitación. ¿Cómo se llama usted y cuántas noches se queda? Gracias.",
    task: "Responde al hotel: di tu nombre y cuántas noches te quedas.",
    expectedPoints: [
      { label: "Dire ton nom", keywords: ["me llamo", "soy", "mi nombre"] },
      { label: "Dire le nombre de nuits", keywords: ["noche", "noches", "una", "dos", "tres", "cuatro", "cinco"] },
      { label: "Remercier / formule de politesse", keywords: ["gracias", "buenos días", "buenas", "saludos"] },
    ],
    fr: "Bonjour. Nous sommes l'Hôtel Mirador. Nous avons votre réservation pour une chambre. Comment vous appelez-vous et combien de nuits restez-vous ? Merci. Consigne : réponds à l'hôtel, donne ton nom et le nombre de nuits.",
    model: "Buenos días. Me llamo Ashley Mubama. Me quedo tres noches en el hotel. Tengo una habitación para una persona. Muchas gracias. Necesito una habitación tranquila, por favor."
  },
  {
    id: 3, from: "Pablo", subject: "Mi familia",
    message: "¡Hola! Soy Pablo, tu nuevo amigo de intercambio. Tengo dos hermanos y vivo en Sevilla. ¿Y tú? ¿Cómo es tu familia? ¿Dónde vives? Escríbeme pronto. Pablo",
    task: "Presenta a tu familia y di dónde vives.",
    expectedPoints: [
      { label: "Parler de ta famille", keywords: ["familia", "madre", "padre", "hermano", "hermana", "hijo", "hijos", "tengo"] },
      { label: "Dire où tu habites", keywords: ["vivo", "en parís", "en paris", "francia", "vivo en"] },
      { label: "Saluer Pablo", keywords: ["hola", "pablo"] },
    ],
    fr: "Salut ! Je suis Pablo, ton nouvel ami d'échange. J'ai deux frères et j'habite à Séville. Et toi ? Comment est ta famille ? Où habites-tu ? Écris-moi vite. Pablo. Consigne : présente ta famille et dis où tu habites.",
    model: "Hola, Pablo. Mi familia es pequeña. Tengo un hijo y una hermana. Vivo en París, en Francia, con mi hijo. Mi casa es pequeña pero bonita."
  },
  {
    id: 4, from: "Consulta del doctor Ruiz", subject: "Su cita",
    message: "Buenas tardes. Llamamos de la consulta del doctor Ruiz. Su cita es el martes a las diez. ¿Puede venir? Si no puede, escriba otro día, por favor.",
    task: "Responde: confirma la cita o propón otro día.",
    expectedPoints: [
      { label: "Confirmer ou refuser le rendez-vous", keywords: ["puedo", "no puedo", "sí", "si", "confirmo", "vengo", "voy"] },
      { label: "Mentionner un jour ou une heure", keywords: ["martes", "lunes", "miércoles", "miercoles", "jueves", "viernes", "las diez", "a las"] },
      { label: "Politesse", keywords: ["gracias", "por favor", "buenas tardes", "buenos días"] },
    ],
    fr: "Bonsoir. Nous appelons du cabinet du docteur Ruiz. Votre rendez-vous est mardi à dix heures. Pouvez-vous venir ? Sinon, écrivez un autre jour, s'il vous plaît. Consigne : confirme le rendez-vous ou propose un autre jour.",
    model: "Buenas tardes. Sí, puedo venir el martes a las diez. Voy con mi hijo. Muchas gracias por el mensaje. Tengo que llevar los documentos. Hasta el martes."
  },
  {
    id: 5, from: "Marta", subject: "Mi cumpleaños",
    message: "¡Hola! El viernes es mi cumpleaños y hago una fiesta en casa a las ocho. Hay pizza y música. ¿Vienes? ¿Qué quieres beber? Marta",
    task: "Responde a Marta: di si vienes y qué quieres beber.",
    expectedPoints: [
      { label: "Dire si tu viens", keywords: ["voy", "vengo", "puedo", "no puedo", "sí", "si", "claro"] },
      { label: "Dire ce que tu veux boire", keywords: ["quiero", "agua", "zumo", "refresco", "cerveza", "vino", "café", "cafe", "coca"] },
      { label: "Féliciter / remercier", keywords: ["feliz", "cumpleaños", "cumpleanos", "gracias", "felicidades"] },
    ],
    fr: "Salut ! Vendredi c'est mon anniversaire et je fais une fête chez moi à huit heures. Il y a de la pizza et de la musique. Tu viens ? Que veux-tu boire ? Marta. Consigne : réponds à Marta, dis si tu viens et ce que tu veux boire.",
    model: "¡Feliz cumpleaños, Marta! Sí, voy a tu fiesta el viernes. Quiero agua o zumo de naranja, por favor. Gracias por la invitación. Llevo un regalo para ti. ¡Hasta el viernes!"
  },
  {
    id: 6, from: "Señora Gómez", subject: "El piso en alquiler",
    message: "Buenos días. Soy la señora Gómez, la propietaria del piso. El piso tiene dos habitaciones y cuesta seiscientos euros. ¿Quiere verlo? ¿Cuándo puede venir?",
    task: "Responde a la propietaria: di si quieres ver el piso y cuándo puedes ir.",
    expectedPoints: [
      { label: "Dire que tu veux visiter", keywords: ["quiero", "me gusta", "me interesa", "ver el piso", "verlo"] },
      { label: "Proposer un moment", keywords: ["lunes", "martes", "miércoles", "miercoles", "jueves", "viernes", "sábado", "sabado", "mañana", "tarde", "puedo", "las"] },
      { label: "Politesse (usted)", keywords: ["gracias", "buenos días", "señora", "senora", "usted"] },
    ],
    fr: "Bonjour. Je suis madame Gómez, la propriétaire de l'appartement. L'appartement a deux chambres et coûte six cents euros. Voulez-vous le voir ? Quand pouvez-vous venir ? Consigne : réponds à la propriétaire, dis si tu veux voir l'appartement et quand tu peux venir.",
    model: "Buenos días, señora Gómez. Sí, quiero ver el piso. Puedo ir el jueves por la tarde, a las cinco. Muchas gracias. Mi teléfono es el seis, uno, dos. Hasta pronto."
  },
  {
    id: 7, from: "Carlos", subject: "Mi trabajo",
    message: "¡Hola! Soy Carlos, tu compañero nuevo. Trabajo en el departamento de ventas. ¿Y tú? ¿En qué trabajas? ¿A qué hora empiezas por la mañana? Carlos",
    task: "Di en qué trabajas y a qué hora empiezas.",
    expectedPoints: [
      { label: "Dire ton métier", keywords: ["trabajo", "soy", "paga", "nóminas", "nominas", "recursos humanos", "empresa", "hotel"] },
      { label: "Dire l'heure de début", keywords: ["empiezo", "a las", "ocho", "nueve", "siete", "mañana", "manana"] },
      { label: "Saluer", keywords: ["hola", "carlos", "encantada", "encantado"] },
    ],
    fr: "Salut ! Je suis Carlos, ton nouveau collègue. Je travaille au service des ventes. Et toi ? Que fais-tu comme travail ? À quelle heure commences-tu le matin ? Carlos. Consigne : dis ce que tu fais comme travail et à quelle heure tu commences.",
    model: "Hola, Carlos. Encantada. Trabajo en un hotel, en el departamento de nóminas. Empiezo a las nueve de la mañana y termino a las cinco. Mi jefa es muy simpática y mis compañeros son buenos."
  },
  {
    id: 8, from: "Restaurante La Plaza", subject: "Su mesa",
    message: "Buenas noches. Restaurante La Plaza. Tenemos una mesa libre el sábado. ¿Cuántas personas son? ¿A qué hora quiere venir? Gracias.",
    task: "Responde al restaurante: di cuántas personas sois y a qué hora quieres venir.",
    expectedPoints: [
      { label: "Dire le nombre de personnes", keywords: ["personas", "somos", "dos", "tres", "cuatro", "una persona", "cinco"] },
      { label: "Dire l'heure", keywords: ["a las", "ocho", "nueve", "siete", "noche"] },
      { label: "Politesse", keywords: ["gracias", "por favor", "buenas noches"] },
    ],
    fr: "Bonsoir. Restaurant La Plaza. Nous avons une table libre samedi. Combien de personnes êtes-vous ? À quelle heure voulez-vous venir ? Merci. Consigne : réponds au restaurant, dis combien de personnes vous êtes et à quelle heure tu veux venir.",
    model: "Buenas noches. Somos tres personas, dos adultos y un niño. Queremos venir el sábado a las ocho de la noche. Gracias. Mi hijo quiere comer pasta. Hasta el sábado."
  },
  {
    id: 9, from: "Elena", subject: "Mis vacaciones",
    message: "¡Hola! Estoy en la playa con mi familia. Hace mucho sol y el mar está genial. ¿Y tú? ¿Dónde estás? ¿Qué haces hoy? Elena",
    task: "Dile a Elena dónde estás y qué haces hoy.",
    expectedPoints: [
      { label: "Dire où tu es", keywords: ["estoy", "en casa", "en parís", "en paris", "en el trabajo", "en la playa"] },
      { label: "Dire ce que tu fais aujourd'hui", keywords: ["hoy", "voy", "hago", "trabajo", "cocino", "paseo", "descanso", "estoy"] },
      { label: "Parler du temps ou d'un sentiment", keywords: ["hace", "calor", "frío", "frio", "sol", "lluvia", "contenta", "bien", "cansada"] },
    ],
    fr: "Salut ! Je suis à la plage avec ma famille. Il y a beaucoup de soleil et la mer est géniale. Et toi ? Où es-tu ? Que fais-tu aujourd'hui ? Elena. Consigne : dis à Elena où tu es et ce que tu fais aujourd'hui.",
    model: "Hola, Elena. Estoy en casa, en París. Hoy hace frío y trabajo por la mañana. Por la tarde voy al parque con mi hijo. ¡Qué bien la playa!"
  },
  {
    id: 10, from: "Tienda Moda Joven", subject: "Su pedido",
    message: "Buenos días. Gracias por su compra en Moda Joven. Tenemos la camisa en azul y en blanco. ¿Qué color quiere? ¿Qué talla tiene? Esperamos su respuesta.",
    task: "Responde a la tienda: di qué color y qué talla quieres.",
    expectedPoints: [
      { label: "Choisir une couleur", keywords: ["azul", "blanco", "blanca", "color", "negro", "rojo", "verde"] },
      { label: "Dire la taille", keywords: ["talla", "pequeña", "pequena", "mediana", "grande", "m", "s", "l", "tengo"] },
      { label: "Politesse", keywords: ["gracias", "por favor", "buenos días"] },
    ],
    fr: "Bonjour. Merci pour votre achat chez Moda Joven. Nous avons la chemise en bleu et en blanc. Quelle couleur voulez-vous ? Quelle taille avez-vous ? Nous attendons votre réponse. Consigne : réponds au magasin, dis quelle couleur et quelle taille tu veux.",
    model: "Buenos días. Quiero la camisa en color azul, por favor. Tengo la talla M, mediana. Muchas gracias por su ayuda. Es un regalo para mi madre. Hasta luego."
  },
];
