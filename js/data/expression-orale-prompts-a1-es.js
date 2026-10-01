// The Roots — Expression orale (Espagnol, niveau A1).
// L'appli lit le texte à voix haute ; l'apprenant répond au micro. Présent seulement.

export const EXPRESSION_ORALE_PROMPTS_A1_ES = [
  {
    id: 1, from: "Lucía",
    callText: "¡Hola! Soy Lucía. ¿Qué tal? ¿Cómo estás hoy? ¿Qué haces esta tarde?",
    task: "Responde a Lucía: di cómo estás y qué haces esta tarde.",
    expectedPoints: [
      { label: "Dire comment tu vas", keywords: ["bien", "mal", "cansada", "cansado", "contenta", "contento", "regular", "estoy"] },
      { label: "Dire ce que tu fais cet après-midi", keywords: ["voy", "hago", "trabajo", "tengo", "estoy", "esta tarde", "cocino"] },
    ],
    fr: "Salut ! Je suis Lucía. Ça va ? Comment vas-tu aujourd'hui ? Que fais-tu cet après-midi ? Consigne : dis comment tu vas et ce que tu fais cet après-midi.",
    model: "Hola, Lucía. Estoy bien, gracias. Esta tarde voy al supermercado y después cocino en casa. Después veo a mi madre en su casa. ¡Un beso!"
  },
  {
    id: 2, from: "Recepción del hotel",
    callText: "Buenos días. Le llamamos de recepción. ¿Cómo se llama usted? ¿Y a qué hora quiere el desayuno mañana?",
    task: "Di tu nombre y a qué hora quieres el desayuno.",
    expectedPoints: [
      { label: "Dire ton nom", keywords: ["me llamo", "soy", "mi nombre"] },
      { label: "Donner une heure pour le petit-déjeuner", keywords: ["a las", "ocho", "siete", "nueve", "desayuno", "quiero"] },
    ],
    fr: "Bonjour. Nous vous appelons de la réception. Comment vous appelez-vous ? Et à quelle heure voulez-vous le petit-déjeuner demain ? Consigne : dis ton nom et à quelle heure tu veux le petit-déjeuner.",
    model: "Buenos días. Me llamo Ashley Mubama. Quiero el desayuno mañana a las ocho, por favor. Necesito también un café con leche, por favor. Gracias. Hasta mañana."
  },
  {
    id: 3, from: "Pablo",
    callText: "Hola, soy Pablo. Mi familia es grande. Tengo tres hermanos. ¿Y tú? ¿Tienes hermanos? ¿Cuántas personas hay en tu familia?",
    task: "Habla de tu familia: di cuántas personas hay.",
    expectedPoints: [
      { label: "Dire si tu as des frères et sœurs", keywords: ["tengo", "hermano", "hermana", "hermanos", "no tengo"] },
      { label: "Dire combien de personnes", keywords: ["personas", "somos", "dos", "tres", "cuatro", "cinco", "seis"] },
    ],
    fr: "Salut, je suis Pablo. Ma famille est grande. J'ai trois frères. Et toi ? As-tu des frères et sœurs ? Combien de personnes y a-t-il dans ta famille ? Consigne : parle de ta famille et dis combien de personnes il y a.",
    model: "Hola, Pablo. Tengo una hermana y un hijo. En mi familia somos cuatro personas. Mi hijo tiene seis años. Mi familia es pequeña pero muy feliz."
  },
  {
    id: 4, from: "Doctora Sánchez",
    callText: "Buenas tardes. Soy la doctora Sánchez. ¿Cómo se encuentra? ¿Le duele algo? ¿Tiene fiebre?",
    task: "Explica a la doctora cómo estás y si te duele algo.",
    expectedPoints: [
      { label: "Dire comment tu te sens", keywords: ["estoy", "bien", "mal", "enferma", "enfermo", "cansada", "cansado", "me encuentro"] },
      { label: "Dire où tu as mal ou si tu as de la fièvre", keywords: ["me duele", "duele", "cabeza", "estómago", "estomago", "garganta", "fiebre", "tengo", "no tengo"] },
    ],
    fr: "Bonsoir. Je suis la docteure Sánchez. Comment vous sentez-vous ? Avez-vous mal quelque part ? Avez-vous de la fièvre ? Consigne : explique à la docteure comment tu vas et si tu as mal quelque part.",
    model: "Buenas tardes, doctora. Estoy mal. Me duele la cabeza y tengo fiebre. Estoy muy cansada. No como mucho y duermo mal. Necesito ayuda, por favor."
  },
  {
    id: 5, from: "Marta",
    callText: "¡Hola! Es mi cumpleaños el viernes. Hago una fiesta en mi casa. ¿Puedes venir? ¿Qué quieres comer?",
    task: "Responde a Marta: di si vienes y qué quieres comer.",
    expectedPoints: [
      { label: "Dire si tu peux venir", keywords: ["sí", "si", "puedo", "voy", "vengo", "no puedo", "claro"] },
      { label: "Dire ce que tu veux manger", keywords: ["quiero", "pizza", "ensalada", "pollo", "pasta", "tarta", "pan", "fruta", "carne"] },
    ],
    fr: "Salut ! C'est mon anniversaire vendredi. Je fais une fête chez moi. Peux-tu venir ? Que veux-tu manger ? Consigne : réponds à Marta, dis si tu viens et ce que tu veux manger.",
    model: "¡Hola, Marta! Sí, puedo ir a tu fiesta. Quiero pizza y ensalada, por favor. ¡Feliz cumpleaños! También llevo una botella de agua para la fiesta. ¡Hasta el viernes!"
  },
  {
    id: 6, from: "Señor Torres",
    callText: "Buenos días. Soy el señor Torres, el propietario del piso. ¿Quiere visitar el piso? ¿Qué día puede venir?",
    task: "Responde al propietario: di si quieres visitar el piso y qué día puedes venir.",
    expectedPoints: [
      { label: "Dire que tu veux visiter", keywords: ["quiero", "sí", "si", "visitar", "ver el piso", "me interesa"] },
      { label: "Donner un jour", keywords: ["lunes", "martes", "miércoles", "miercoles", "jueves", "viernes", "sábado", "sabado", "domingo", "puedo"] },
    ],
    fr: "Bonjour. Je suis monsieur Torres, le propriétaire de l'appartement. Voulez-vous visiter l'appartement ? Quel jour pouvez-vous venir ? Consigne : réponds au propriétaire, dis si tu veux visiter et quel jour tu peux venir.",
    model: "Buenos días, señor Torres. Sí, quiero visitar el piso. Puedo ir el sábado por la mañana. Gracias. Tengo tiempo a las once. Mi teléfono es el seis, uno, dos."
  },
  {
    id: 7, from: "Carlos",
    callText: "Hola, soy Carlos, de la oficina. ¿Dónde estás? ¿Vienes a la reunión a las diez? Necesito tu ayuda con un documento.",
    task: "Responde a Carlos: di dónde estás y si vienes a la reunión.",
    expectedPoints: [
      { label: "Dire où tu es", keywords: ["estoy", "en casa", "en el metro", "en la oficina", "en el trabajo", "en el tren", "en el autobús"] },
      { label: "Dire si tu viens à la réunion", keywords: ["voy", "vengo", "llego", "reunión", "reunion", "sí", "si", "no puedo"] },
    ],
    fr: "Salut, je suis Carlos, du bureau. Où es-tu ? Tu viens à la réunion à dix heures ? J'ai besoin de ton aide pour un document. Consigne : réponds à Carlos, dis où tu es et si tu viens à la réunion.",
    model: "Hola, Carlos. Estoy en el metro. Voy a la reunión y llego a las diez. Te ayudo con el documento. Tengo los papeles aquí. Hasta ahora."
  },
  {
    id: 8, from: "Restaurante La Plaza",
    callText: "Buenas noches. Restaurante La Plaza, dígame. ¿Quiere reservar una mesa? ¿Para cuántas personas? ¿Para qué día?",
    task: "Reserva una mesa: di para cuántas personas y para qué día.",
    expectedPoints: [
      { label: "Demander une réservation", keywords: ["quiero", "reservar", "una mesa", "reserva", "mesa"] },
      { label: "Dire nombre de personnes et jour", keywords: ["personas", "somos", "dos", "tres", "cuatro", "sábado", "sabado", "viernes", "domingo", "mañana", "hoy"] },
    ],
    fr: "Bonsoir. Restaurant La Plaza, je vous écoute. Voulez-vous réserver une table ? Pour combien de personnes ? Pour quel jour ? Consigne : réserve une table, dis pour combien de personnes et pour quel jour.",
    model: "Buenas noches. Quiero reservar una mesa para tres personas, para el sábado, por favor. Queremos la mesa a las ocho de la noche. Gracias, hasta el sábado."
  },
  {
    id: 9, from: "Elena",
    callText: "¡Hola! Estoy de vacaciones. Hace calor y voy a la playa. ¿Y tú? ¿Qué tiempo hace allí? ¿Qué vas a hacer este fin de semana?",
    task: "Habla del tiempo y di qué vas a hacer este fin de semana.",
    expectedPoints: [
      { label: "Parler du temps", keywords: ["hace", "frío", "frio", "calor", "sol", "llueve", "lluvia", "viento", "nubes"] },
      { label: "Dire ce que tu vas faire ce week-end", keywords: ["voy a", "fin de semana", "sábado", "sabado", "domingo", "voy"] },
    ],
    fr: "Salut ! Je suis en vacances. Il fait chaud et je vais à la plage. Et toi ? Quel temps fait-il chez toi ? Que vas-tu faire ce week-end ? Consigne : parle du temps et dis ce que tu vas faire ce week-end.",
    model: "Hola, Elena. Aquí hace frío y llueve. Este fin de semana voy a descansar en casa y voy a cocinar con mi hijo. Mi hijo y yo estamos muy contentos. Un abrazo."
  },
  {
    id: 10, from: "Tienda Moda Joven",
    callText: "Buenos días. Le llamamos de la tienda Moda Joven. Su pantalón ya está aquí. ¿Cuándo viene a buscarlo? ¿Prefiere pagar con tarjeta o en efectivo?",
    task: "Di cuándo vienes y cómo quieres pagar.",
    expectedPoints: [
      { label: "Dire quand tu viens", keywords: ["voy", "vengo", "hoy", "mañana", "manana", "lunes", "martes", "miércoles", "miercoles", "jueves", "viernes", "sábado", "sabado", "a las", "tarde"] },
      { label: "Dire le moyen de paiement", keywords: ["tarjeta", "efectivo", "pago", "pagar", "prefiero", "quiero"] },
    ],
    fr: "Bonjour. Nous vous appelons du magasin Moda Joven. Votre pantalon est arrivé. Quand venez-vous le chercher ? Préférez-vous payer par carte ou en espèces ? Consigne : dis quand tu viens et comment tu veux payer.",
    model: "Buenos días. Voy a la tienda mañana por la tarde, a las cinco. Prefiero pagar con tarjeta. Gracias. Mi hijo viene conmigo. Muchas gracias, hasta mañana."
  },
];
