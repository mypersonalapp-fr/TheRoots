// The Roots — Compréhension orale (Espagnol, A1) : dialogues du quotidien (voix de synthèse du téléphone).
export const COMPREHENSION_ORALE_A1_ES = [
 {
  id: 1, level: "A1", title: "En la cafetería",
  topicFr: "Commander au café",
  situationFr: "Mateo entre dans un café et commande son petit déjeuner. Lucía, la serveuse, lui répond.",
  speakers: [{ name: "Lucía", voice: "f" }, { name: "Mateo", voice: "m" }],
  lines: [
   { s: 0, t: "Buenos días. ¿Qué desea?" },
   { s: 1, t: "Buenos días. Quiero un café con leche, por favor." },
   { s: 0, t: "Muy bien. ¿Algo para comer? Tenemos tostadas y croissants." },
   { choice: { s: 1, promptFr: "À toi de jouer : que réponds-tu ?", options: [
    { t: "Sí, una tostada con tomate, por favor.", ok: true, whyFr: "Réponse polie et logique : tu choisis une tostada parmi ce qui est proposé." },
    { t: "Sí, estoy una tostada con tomate.", ok: false, whyFr: "On ne dit pas « estoy une tostada » : pour commander, on utilise « quiero » ou simplement « una tostada, por favor »." },
    { t: "No, gracias, me llamo Mateo.", ok: false, whyFr: "Ce n'est pas une réponse à la question : on te demande ce que tu veux manger, pas ton nom." }
   ] } },
   { s: 0, t: "Perfecto. Son tres euros con cincuenta." },
   { s: 1, t: "Aquí tiene. ¿Hay wifi en la cafetería?" },
   { s: 0, t: "Sí, la contraseña es lunes45." },
   { s: 1, t: "Gracias. ¿Dónde están los baños?" },
   { s: 0, t: "Están al fondo, a la derecha." },
   { s: 1, t: "Muchas gracias." }
  ],
  questions: [
   { q: "¿Qué quiere beber Mateo?", opts: ["Un té con leche", "Un café con leche", "Un zumo de naranja"], correct: 1, whyFr: "Mateo dit : « Quiero un café con leche »." },
   { q: "¿Cuánto cuesta todo?", opts: ["Tres euros con cincuenta", "Cinco euros", "Dos euros con treinta"], correct: 0, whyFr: "Lucía dit : « Son tres euros con cincuenta » (3,50 €)." },
   { q: "¿Cuál es la contraseña del wifi?", opts: ["lunes54", "martes45", "lunes45"], correct: 2, whyFr: "La contraseña es « lunes45 »." },
   { q: "¿Dónde están los baños?", opts: ["Al fondo, a la derecha", "Al fondo, a la izquierda", "Delante, a la derecha"], correct: 0, whyFr: "Lucía répond : « Están al fondo, a la derecha »." }
  ],
  expressions: [
   { es: "¿Qué desea?", fr: "Que désirez-vous ? (formel)" },
   { es: "Quiero un café, por favor.", fr: "Je voudrais un café, s'il vous plaît." },
   { es: "Aquí tiene.", fr: "Tenez / Voilà." },
   { es: "¿Dónde están los baños?", fr: "Où sont les toilettes ?" }
  ]
 },
 {
  id: 2, level: "A1", title: "Me llamo Carmen",
  topicFr: "Se présenter",
  situationFr: "Dans un cours de langue, Carmen et Diego se présentent l'un à l'autre.",
  speakers: [{ name: "Carmen", voice: "f" }, { name: "Diego", voice: "m" }],
  lines: [
   { s: 0, t: "Hola, buenas tardes. Me llamo Carmen. ¿Y tú?" },
   { s: 1, t: "Hola, Carmen. Yo me llamo Diego. Mucho gusto." },
   { s: 0, t: "Encantada. ¿De dónde eres, Diego?" },
   { s: 1, t: "Soy de Argentina, de Córdoba. ¿Y tú?" },
   { s: 0, t: "Yo soy de Sevilla, pero vivo en Madrid." },
   { choice: { s: 1, promptFr: "À toi de jouer : Diego demande son âge à Carmen. Que dit-il ?", options: [
    { t: "¿Cuántos años tienes?", ok: true, whyFr: "En espagnol, l'âge s'exprime avec « tener » : ¿Cuántos años tienes ?" },
    { t: "¿Cuántos años eres?", ok: false, whyFr: "On n'utilise pas « ser » pour l'âge, mais « tener »." },
    { t: "¿Qué edad estás?", ok: false, whyFr: "Cette phrase n'existe pas : on dit « ¿Cuántos años tienes? » ou « ¿Qué edad tienes? »." }
   ] } },
   { s: 0, t: "Tengo veintiocho años. ¿Y tú?" },
   { s: 1, t: "Yo tengo treinta y dos. Soy profesor de música." },
   { s: 0, t: "¡Qué bien! Yo soy enfermera." },
   { s: 1, t: "Encantado de conocerte, Carmen." }
  ],
  questions: [
   { q: "¿De dónde es Diego?", opts: ["De Sevilla", "De Córdoba, en Argentina", "De Madrid"], correct: 1, whyFr: "Diego dit : « Soy de Argentina, de Córdoba »." },
   { q: "¿Dónde vive Carmen?", opts: ["En Sevilla", "En Córdoba", "En Madrid"], correct: 2, whyFr: "Carmen est de Séville mais « vivo en Madrid »." },
   { q: "¿Cuántos años tiene Diego?", opts: ["Veintiocho", "Treinta y dos", "Treinta y tres"], correct: 1, whyFr: "Diego dit : « Yo tengo treinta y dos »." },
   { q: "¿Cuál es la profesión de Carmen?", opts: ["Enfermera", "Profesora de música", "Camarera"], correct: 0, whyFr: "Carmen dit : « Yo soy enfermera »." }
  ],
  expressions: [
   { es: "Me llamo Carmen.", fr: "Je m'appelle Carmen." },
   { es: "¿De dónde eres?", fr: "D'où viens-tu ?" },
   { es: "¿Cuántos años tienes?", fr: "Quel âge as-tu ?" },
   { es: "Mucho gusto / Encantado.", fr: "Enchanté." }
  ]
 },
 {
  id: 3, level: "A1", title: "En el mercado",
  topicFr: "Acheter des fruits",
  situationFr: "Elena achète des fruits chez un vendeur du marché, Don Pablo.",
  speakers: [{ name: "Pablo", voice: "m" }, { name: "Elena", voice: "f" }],
  lines: [
   { s: 0, t: "Buenos días, señora. ¿Qué quiere hoy?" },
   { s: 1, t: "Buenos días. Quiero un kilo de naranjas, por favor." },
   { s: 0, t: "Claro. Las naranjas están a dos euros el kilo." },
   { s: 1, t: "Muy bien. Y también quiero manzanas. ¿Cuánto cuestan?" },
   { s: 0, t: "Las manzanas cuestan tres euros el kilo. Son muy buenas." },
   { choice: { s: 1, promptFr: "À toi de jouer : tu veux seulement un demi-kilo de pommes. Que dis-tu ?", options: [
    { t: "Quiero medio kilo, por favor.", ok: true, whyFr: "« Medio kilo » = un demi-kilo. Réponse claire et polie." },
    { t: "Tengo medio kilo, por favor.", ok: false, whyFr: "« Tengo » veut dire « j'ai » : pour demander, on dit « quiero »." },
    { t: "Soy medio kilo, gracias.", ok: false, whyFr: "On ne peut pas dire « soy medio kilo » : cela n'a pas de sens ici." }
   ] } },
   { s: 0, t: "Perfecto. Un kilo de naranjas y medio kilo de manzanas. ¿Algo más?" },
   { s: 1, t: "No, nada más. ¿Cuánto es en total?" },
   { s: 0, t: "Son tres euros con cincuenta en total." },
   { s: 1, t: "Aquí tiene cinco euros." },
   { s: 0, t: "Su cambio: un euro con cincuenta. Gracias, señora." }
  ],
  questions: [
   { q: "¿Cuántos kilos de naranjas compra Elena?", opts: ["Dos kilos", "Medio kilo", "Un kilo"], correct: 2, whyFr: "Elena dit : « Quiero un kilo de naranjas »." },
   { q: "¿Cuánto cuestan las manzanas?", opts: ["Tres euros el kilo", "Dos euros el kilo", "Cinco euros el kilo"], correct: 0, whyFr: "Pablo dit : « Las manzanas cuestan tres euros el kilo »." },
   { q: "¿Cuánto paga Elena en total?", opts: ["Cinco euros cincuenta", "Tres euros cincuenta", "Diez euros"], correct: 1, whyFr: "2 € (oranges) + 1,50 € (demi-kilo de pommes) = « tres euros con cincuenta »." },
   { q: "¿Cuánto es el cambio?", opts: ["Cuatro euros cincuenta", "Un euro con cincuenta", "Seis euros"], correct: 1, whyFr: "Elle donne 5 € pour 3,50 € et reçoit « un euro con cincuenta » de monnaie." }
  ],
  expressions: [
   { es: "¿Cuánto cuesta?", fr: "Combien ça coûte ?" },
   { es: "Quiero un kilo de...", fr: "Je voudrais un kilo de..." },
   { es: "¿Algo más?", fr: "Autre chose ?" },
   { es: "¿Cuánto es en total?", fr: "Combien ça fait en tout ?" }
  ]
 },
 {
  id: 4, level: "A1", title: "¿Dónde está la estación?",
  topicFr: "Demander son chemin",
  situationFr: "Un touriste, Javier, demande son chemin à une passante, Rosa, dans une rue de Valencia.",
  speakers: [{ name: "Javier", voice: "m" }, { name: "Rosa", voice: "f" }],
  lines: [
   { s: 0, t: "Perdone, señora. ¿Dónde está la estación de tren?" },
   { s: 1, t: "Está cerca. Siga todo recto por esta calle." },
   { s: 0, t: "¿Todo recto? ¿Cuántos minutos son a pie?" },
   { s: 1, t: "Son diez minutos. Después, gire a la izquierda en la plaza." },
   { choice: { s: 0, promptFr: "À toi de jouer : tu n'as pas bien compris. Que dis-tu ?", options: [
    { t: "Más despacio, por favor. ¿Puede repetir?", ok: true, whyFr: "Formule polie et utile pour demander de parler plus lentement et de répéter." },
    { t: "No hablo. Adiós.", ok: false, whyFr: "Trop brusque : mieux vaut demander poliment de répéter." },
    { t: "Tengo una estación de tren.", ok: false, whyFr: "Ce n'est pas du tout ce qu'on veut dire : « tengo » signifie « j'ai »." }
   ] } },
   { s: 1, t: "Sí, claro. Todo recto, diez minutos, y a la izquierda en la plaza." },
   { s: 0, t: "¿Y la estación está al lado del banco?" },
   { s: 1, t: "No, está enfrente del supermercado, un edificio grande y blanco." },
   { s: 0, t: "Muchas gracias, señora. Es usted muy amable." },
   { s: 1, t: "De nada. Buen viaje." }
  ],
  questions: [
   { q: "¿Cuánto tiempo tarda Javier a pie?", opts: ["Cinco minutos", "Quince minutos", "Diez minutos"], correct: 2, whyFr: "Rosa dit : « Son diez minutos »." },
   { q: "¿Dónde tiene que girar Javier?", opts: ["A la izquierda, en la plaza", "A la derecha, en la plaza", "A la izquierda, en el banco"], correct: 0, whyFr: "Rosa indique : « gire a la izquierda en la plaza »." },
   { q: "¿Qué hay enfrente de la estación?", opts: ["Un banco", "Un hotel", "Un supermercado"], correct: 2, whyFr: "La gare est « enfrente del supermercado »." },
   { q: "¿Cómo es el edificio de la estación?", opts: ["Pequeño y rojo", "Grande y blanco", "Grande y gris"], correct: 1, whyFr: "Rosa dit : « un edificio grande y blanco »." }
  ],
  expressions: [
   { es: "¿Dónde está la estación?", fr: "Où est la gare ?" },
   { es: "Siga todo recto.", fr: "Continuez tout droit." },
   { es: "Gire a la izquierda.", fr: "Tournez à gauche." },
   { es: "Más despacio, por favor.", fr: "Plus lentement, s'il vous plaît." }
  ]
 },
 {
  id: 5, level: "A1", title: "En la recepción del hotel",
  topicFr: "Arriver à l'hôtel",
  situationFr: "La cliente Marta arrive à l'hôtel. Sergio, le réceptionniste, s'occupe d'elle.",
  speakers: [{ name: "Sergio", voice: "m" }, { name: "Marta", voice: "f" }],
  lines: [
   { s: 0, t: "Buenas tardes. Bienvenida al Hotel Mirador." },
   { s: 1, t: "Buenas tardes. Tengo una reserva a nombre de Marta Ruiz." },
   { s: 0, t: "Un momento, por favor. Sí, una habitación doble para tres noches." },
   { s: 1, t: "Correcto. ¿El desayuno está incluido?" },
   { s: 0, t: "Sí, el desayuno es de siete a diez, en el restaurante del primer piso." },
   { choice: { s: 1, promptFr: "À toi de jouer : tu veux savoir à quelle heure on quitte la chambre. Que demandes-tu ?", options: [
    { t: "¿A qué hora tengo que dejar la habitación?", ok: true, whyFr: "Question correcte : « tener que + infinitif » exprime l'obligation." },
    { t: "¿Qué hora es la habitación?", ok: false, whyFr: "Cette phrase n'a pas de sens : on demande « ¿A qué hora...? » pour un horaire." },
    { t: "¿Dónde eres la habitación?", ok: false, whyFr: "« Eres » est la forme de « tú » ; la question est mal construite." }
   ] } },
   { s: 0, t: "A las doce. Su habitación es la número 214, en el segundo piso." },
   { s: 1, t: "¿Hay ascensor?" },
   { s: 0, t: "Sí, está a la izquierda. Aquí tiene su llave." },
   { s: 1, t: "Gracias. Hasta luego." }
  ],
  questions: [
   { q: "¿A nombre de quién está la reserva?", opts: ["Marta Ruiz", "Marta Ramos", "María Ruiz"], correct: 0, whyFr: "Marta dit : « a nombre de Marta Ruiz »." },
   { q: "¿Cuántas noches se queda Marta?", opts: ["Dos noches", "Cuatro noches", "Tres noches"], correct: 2, whyFr: "Sergio parle d'une chambre double « para tres noches »." },
   { q: "¿A qué hora hay que dejar la habitación?", opts: ["A las diez", "A las doce", "A las siete"], correct: 1, whyFr: "Sergio répond : « A las doce »." },
   { q: "¿Cuál es el número de la habitación?", opts: ["Doscientos catorce", "Ciento catorce", "Doscientos cuarenta"], correct: 0, whyFr: "La chambre est la 214 (« doscientos catorce »), au deuxième étage." }
  ],
  expressions: [
   { es: "Tengo una reserva.", fr: "J'ai une réservation." },
   { es: "¿Está incluido el desayuno?", fr: "Le petit-déjeuner est-il compris ?" },
   { es: "¿A qué hora...?", fr: "À quelle heure... ?" },
   { es: "Aquí tiene la llave.", fr: "Voici la clé." }
  ]
 },
 {
  id: 6, level: "A1", title: "Un plan para el sábado",
  topicFr: "Proposer une sortie à un ami",
  situationFr: "Ana appelle son ami Nacho pour proposer une sortie samedi. Nacho est en train de faire autre chose.",
  speakers: [{ name: "Ana", voice: "f" }, { name: "Nacho", voice: "m" }],
  lines: [
   { s: 0, t: "Hola, Nacho. ¿Qué haces?" },
   { s: 1, t: "Hola, Ana. Estoy cocinando una tortilla. ¿Y tú?" },
   { s: 0, t: "Estoy en el parque con mi perro. Oye, el sábado voy a ir al cine. ¿Quieres venir?" },
   { s: 1, t: "¡Qué buena idea! ¿Qué película vamos a ver?" },
   { s: 0, t: "Una comedia. Empieza a las seis y media." },
   { choice: { s: 1, promptFr: "À toi de jouer : Nacho accepte et propose un rendez-vous. Que dit-il ?", options: [
    { t: "Vale. ¿Quedamos a las seis en la puerta del cine?", ok: true, whyFr: "« Vale » accepte, et « ¿Quedamos...? » propose un rendez-vous, ici avant le début du film." },
    { t: "No, gracias. Tengo un cine.", ok: false, whyFr: "Cette réponse n'a pas de sens : « tengo un cine » veut dire « j'ai un cinéma »." },
    { t: "Vale. Quedo el cine a las seis.", ok: false, whyFr: "Phrase mal construite : il faut « quedamos » (ou « quedamos en... ») et une préposition correcte." }
   ] } },
   { s: 0, t: "Perfecto. Mi hermano también va a venir con nosotros." },
   { s: 1, t: "¡Genial! Después podemos cenar en un restaurante cerca." },
   { s: 0, t: "Sí, me gusta la comida italiana. ¿Y a ti?" },
   { s: 1, t: "A mí también. Bueno, hasta el sábado. ¡Un beso!" }
  ],
  questions: [
   { q: "¿Qué está haciendo Nacho?", opts: ["Está paseando al perro", "Está viendo una película", "Está cocinando una tortilla"], correct: 2, whyFr: "Nacho dit : « Estoy cocinando una tortilla »." },
   { q: "¿Dónde está Ana?", opts: ["En el parque", "En el cine", "En casa"], correct: 0, whyFr: "Ana dit : « Estoy en el parque con mi perro »." },
   { q: "¿A qué hora empieza la película?", opts: ["A las seis", "A las seis y media", "A las siete y media"], correct: 1, whyFr: "Ana précise : « Empieza a las seis y media »." },
   { q: "¿Quién va a venir también al cine?", opts: ["El hermano de Ana", "El perro de Ana", "La hermana de Nacho"], correct: 0, whyFr: "Ana dit : « Mi hermano también va a venir con nosotros »." }
  ],
  expressions: [
   { es: "¿Qué haces?", fr: "Que fais-tu ?" },
   { es: "Estoy cocinando.", fr: "Je suis en train de cuisiner." },
   { es: "El sábado voy a ir al cine.", fr: "Samedi, je vais aller au cinéma." },
   { es: "¿Quedamos a las seis?", fr: "On se retrouve à six heures ?" }
  ]
 },
 {
  id: 7, level: "A1", title: "La foto de mi familia",
  topicFr: "Parler de sa famille",
  situationFr: "Isabel montre une photo de sa famille à sa collègue Paula, pendant la pause.",
  speakers: [{ name: "Paula", voice: "f" }, { name: "Isabel", voice: "f" }],
  lines: [
   { s: 0, t: "Isabel, ¿quiénes son las personas de la foto?" },
   { s: 1, t: "Es mi familia. Este es mi marido, Luis. Es alto y simpático." },
   { s: 0, t: "¿Y los niños? ¿Cómo se llaman?" },
   { s: 1, t: "Tengo dos hijos: Pablo, que tiene nueve años, y Lola, que tiene cinco." },
   { s: 0, t: "¡Qué guapos! ¿Y esta señora con el pelo gris?" },
   { choice: { s: 1, promptFr: "À toi de jouer : c'est ta mère. Que dis-tu ?", options: [
    { t: "Es mi madre. Se llama Pilar y vive con nosotros.", ok: true, whyFr: "Tu présentes la personne avec « es » et tu donnes son nom et une information simple." },
    { t: "Tengo mi madre. Es Pilar y soy en casa.", ok: false, whyFr: "On ne dit pas « tengo mi madre » ici, et « soy en casa » est faux : il faudrait « está en casa »." },
    { t: "Son mi madre. Se llamo Pilar.", ok: false, whyFr: "« Son » est le pluriel, et le verbe réfléchi est « se llama » pour la 3e personne." }
   ] } },
   { s: 0, t: "¡Qué bien! ¿Tienes hermanos?" },
   { s: 1, t: "Sí, tengo una hermana. Vive en Barcelona y trabaja en un banco." },
   { s: 0, t: "Yo soy hija única. Pero tengo un perro muy grande." },
   { s: 1, t: "¡Ja, ja! El perro también es de la familia." }
  ],
  questions: [
   { q: "¿Cómo es el marido de Isabel?", opts: ["Bajo y serio", "Alto y simpático", "Alto y serio"], correct: 1, whyFr: "Isabel dit : « Es alto y simpático »." },
   { q: "¿Cuántos años tiene Lola?", opts: ["Cinco", "Nueve", "Quince"], correct: 0, whyFr: "Lola a cinq ans ; Pablo en a neuf." },
   { q: "¿Con quién vive Pilar, la madre de Isabel?", opts: ["Con su hermana", "Sola", "Con Isabel y su familia"], correct: 2, whyFr: "Isabel dit : « vive con nosotros »." },
   { q: "¿Dónde vive la hermana de Isabel?", opts: ["En Madrid", "En Valencia", "En Barcelona"], correct: 2, whyFr: "Isabel dit : « Vive en Barcelona y trabaja en un banco »." }
  ],
  expressions: [
   { es: "Es mi madre.", fr: "C'est ma mère." },
   { es: "Tengo dos hijos.", fr: "J'ai deux enfants." },
   { es: "¿Tienes hermanos?", fr: "As-tu des frères et sœurs ?" },
   { es: "Es alto y simpático.", fr: "Il est grand et sympathique." }
  ]
 },
 {
  id: 8, level: "A1", title: "En la farmacia",
  topicFr: "Demander un médicament",
  situationFr: "Un client, Sr. Herrero, ne se sent pas bien. Il demande conseil à la pharmacienne, Marisol.",
  speakers: [{ name: "Marisol", voice: "f" }, { name: "Herrero", voice: "m" }],
  lines: [
   { s: 0, t: "Buenos días. ¿En qué puedo ayudarle?" },
   { s: 1, t: "Buenos días. No me encuentro bien. Tengo dolor de cabeza y un poco de fiebre." },
   { s: 0, t: "¿Tiene tos o dolor de garganta?" },
   { s: 1, t: "No, no tengo tos. Pero estoy muy cansado." },
   { s: 0, t: "Entonces tome estas pastillas. Una pastilla por la mañana y otra por la noche." },
   { choice: { s: 1, promptFr: "À toi de jouer : tu veux savoir le prix. Que demandes-tu ?", options: [
    { t: "¿Cuánto cuestan las pastillas?", ok: true, whyFr: "Question correcte pour demander un prix : « ¿Cuánto cuestan...? » (pluriel, car « pastillas »)." },
    { t: "¿Cuánto es las pastillas?", ok: false, whyFr: "Avec un pluriel, on dit « cuestan » ; « ¿Cuánto es? » se dit pour un total." },
    { t: "¿Dónde cuestan las pastillas?", ok: false, whyFr: "« Dónde » demande un lieu, pas un prix." }
   ] } },
   { s: 0, t: "Cuestan seis euros con veinte." },
   { s: 1, t: "Vale. ¿Tengo que beber mucha agua?" },
   { s: 0, t: "Sí, beba mucha agua y descanse. Si sigue mal, vaya al médico." },
   { s: 1, t: "Muy bien, muchas gracias. Adiós." }
  ],
  questions: [
   { q: "¿Qué síntomas tiene el Sr. Herrero?", opts: ["Tos y fiebre", "Dolor de cabeza y fiebre", "Dolor de garganta y tos"], correct: 1, whyFr: "Il dit : « Tengo dolor de cabeza y un poco de fiebre »." },
   { q: "¿Cuántas pastillas toma al día?", opts: ["Dos: una por la mañana y otra por la noche", "Una por la noche", "Tres: mañana, tarde y noche"], correct: 0, whyFr: "Marisol dit : « Una pastilla por la mañana y otra por la noche »." },
   { q: "¿Cuánto cuestan las pastillas?", opts: ["Seis euros", "Doce euros con veinte", "Seis euros con veinte"], correct: 2, whyFr: "« Cuestan seis euros con veinte » (6,20 €)." },
   { q: "¿Qué tiene que hacer si sigue mal?", opts: ["Ir al médico", "Volver a la farmacia", "Tomar más pastillas"], correct: 0, whyFr: "Marisol conseille : « Si sigue mal, vaya al médico »." }
  ],
  expressions: [
   { es: "Tengo dolor de cabeza.", fr: "J'ai mal à la tête." },
   { es: "No me encuentro bien.", fr: "Je ne me sens pas bien." },
   { es: "Una pastilla por la mañana.", fr: "Un comprimé le matin." },
   { es: "Beba mucha agua.", fr: "Buvez beaucoup d'eau." }
  ]
 },
 {
  id: 9, level: "A1", title: "Comprando una camiseta",
  topicFr: "Acheter des vêtements",
  situationFr: "Raúl cherche une chemise dans un magasin de vêtements. La vendeuse, Cristina, l'aide.",
  speakers: [{ name: "Cristina", voice: "f" }, { name: "Raúl", voice: "m" }],
  lines: [
   { s: 0, t: "Hola, buenas tardes. ¿Puedo ayudarte?" },
   { s: 1, t: "Sí, busco una camisa azul. Mi talla es la M." },
   { s: 0, t: "Mira, tenemos esta camisa azul. Es de algodón y es muy cómoda." },
   { s: 1, t: "Me gusta. ¿Cuánto cuesta?" },
   { s: 0, t: "Cuesta veinticinco euros, pero hoy tiene un descuento: veinte euros." },
   { choice: { s: 1, promptFr: "À toi de jouer : tu veux l'essayer. Que dis-tu ?", options: [
    { t: "¿Puedo probármela, por favor?", ok: true, whyFr: "Formule polie pour demander à essayer un vêtement." },
    { t: "¿Puedo probar la tienda?", ok: false, whyFr: "On essaie un vêtement, pas le magasin : la phrase n'a pas de sens ici." },
    { t: "Quiero la camisa probar.", ok: false, whyFr: "Verbe mal employé : pour essayer, on dit « ¿Puedo probármela? »." }
   ] } },
   { s: 0, t: "Claro. Los probadores están al fondo, a la izquierda." },
   { s: 1, t: "Gracias... Me queda bien, pero es un poco grande. ¿Tiene la talla S?" },
   { s: 0, t: "Sí, aquí tienes. ¿Pagas con tarjeta o en efectivo?" },
   { s: 1, t: "Con tarjeta, por favor." }
  ],
  questions: [
   { q: "¿Qué color de camisa busca Raúl?", opts: ["Blanca", "Verde", "Azul"], correct: 2, whyFr: "Raúl dit : « busco una camisa azul »." },
   { q: "¿Cuánto cuesta la camisa con el descuento?", opts: ["Veinte euros", "Veinticinco euros", "Quince euros"], correct: 0, whyFr: "Elle coûte 25 € mais « hoy tiene un descuento: veinte euros »." },
   { q: "¿Dónde están los probadores?", opts: ["A la derecha, delante", "Al fondo, a la izquierda", "Al fondo, a la derecha"], correct: 1, whyFr: "Cristina dit : « Los probadores están al fondo, a la izquierda »." },
   { q: "¿Por qué pide otra talla Raúl?", opts: ["La camisa es un poco grande", "La camisa es un poco pequeña", "No le gusta el color"], correct: 0, whyFr: "Raúl dit : « es un poco grande. ¿Tiene la talla S? »." }
  ],
  expressions: [
   { es: "Busco una camisa azul.", fr: "Je cherche une chemise bleue." },
   { es: "¿Puedo probármela?", fr: "Puis-je l'essayer ?" },
   { es: "¿Tiene la talla S?", fr: "Avez-vous la taille S ?" },
   { es: "¿Pagas con tarjeta o en efectivo?", fr: "Vous payez par carte ou en espèces ?" }
  ]
 },
 {
  id: 10, level: "A1", title: "Una habitación en el piso",
  topicFr: "Visiter un appartement en colocation",
  situationFr: "Sofía visite un appartement en colocation. Álvaro, le colocataire, lui montre la chambre libre.",
  speakers: [{ name: "Álvaro", voice: "m" }, { name: "Sofía", voice: "f" }],
  lines: [
   { s: 0, t: "Hola, Sofía. Pasa, por favor. Este es el salón." },
   { s: 1, t: "Hola, Álvaro. Es muy luminoso. ¿Cuántas habitaciones hay?" },
   { s: 0, t: "Hay tres habitaciones, un baño y una cocina pequeña." },
   { s: 1, t: "¿Y cuál es la habitación libre?" },
   { s: 0, t: "Es esta, la del fondo. Tiene una cama, un armario y una mesa." },
   { choice: { s: 1, promptFr: "À toi de jouer : tu veux connaître le loyer. Que demandes-tu ?", options: [
    { t: "¿Cuánto cuesta al mes?", ok: true, whyFr: "Question claire pour demander le loyer mensuel." },
    { t: "¿Cuántos años tiene la habitación?", ok: false, whyFr: "Cette question demande l'âge de la chambre, pas le prix." },
    { t: "¿Qué hora es al mes?", ok: false, whyFr: "« Qué hora es » demande l'heure, pas le prix." }
   ] } },
   { s: 0, t: "Cuesta cuatrocientos cincuenta euros al mes, con los gastos incluidos." },
   { s: 1, t: "Es un buen precio. ¿Está cerca del metro?" },
   { s: 0, t: "Sí, la parada de metro está a cinco minutos andando." },
   { s: 1, t: "Perfecto. Me gusta el piso. ¡Quiero vivir aquí!" }
  ],
  questions: [
   { q: "¿Cuántas habitaciones hay en el piso?", opts: ["Dos", "Tres", "Cuatro"], correct: 1, whyFr: "Álvaro dit : « Hay tres habitaciones »." },
   { q: "¿Qué hay en la habitación libre?", opts: ["Una cama, un armario y una mesa", "Una cama y una televisión", "Un sofá y una mesa"], correct: 0, whyFr: "Álvaro cite : « una cama, un armario y una mesa »." },
   { q: "¿Cuánto cuesta la habitación al mes?", opts: ["Trescientos cincuenta euros", "Cuatrocientos cincuenta euros", "Cuatrocientos euros"], correct: 1, whyFr: "Le loyer est de « cuatrocientos cincuenta euros » (450 €), charges comprises." },
   { q: "¿A qué distancia está el metro?", opts: ["A diez minutos", "A cinco minutos andando", "A veinte metros"], correct: 1, whyFr: "Álvaro dit : « a cinco minutos andando »." }
  ],
  expressions: [
   { es: "Hay tres habitaciones.", fr: "Il y a trois chambres." },
   { es: "¿Cuánto cuesta al mes?", fr: "Combien ça coûte par mois ?" },
   { es: "Los gastos están incluidos.", fr: "Les charges sont comprises." },
   { es: "A cinco minutos andando.", fr: "À cinq minutes à pied." }
  ]
 }
];
