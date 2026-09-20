// The Roots — Programme du niveau A1 (Espagnol), palier par palier.
//
// Même structure que programme-a1-en.js (objective / vocab / grammar /
// conjugation / activities), avec UN champ en plus, spécifique à ce
// programme : "whyHow". Ashley a demandé explicitement, en se mettant à la
// place d'une débutante "avec trop de notions confuses", que chaque palier
// explique le POURQUOI et le COMMENT d'un mécanisme propre à l'espagnol
// (pas juste "voici la règle, apprends-la") — whyHow porte ce texte
// pédagogique. mes-cours.js l'affiche s'il est présent (mais ne casse rien
// pour l'anglais, où ce champ n'existe pas).
//
// Structure : A1.0 pose les fondations TRANSVERSALES (prononciation, genre,
// nombres, couleurs, SER/ESTAR/TENER) qui reviennent dans tous les paliers
// suivants — c'est ce qu'Ashley appelle "les cours transversaux". A1.1 à
// A1.12 reprennent ensuite les mêmes 12 thèmes que le programme anglais
// (Identité, Famille, Amis, Transports... jusqu'à la synthèse sociale), pour
// que les deux langues restent comparables dans l'appli.

export const A1_ES_GENERAL_OBJECTIVE =
  "À la fin du niveau A1, l'apprenant doit pouvoir comprendre et utiliser des expressions très courantes et des phrases simples en espagnol : se présenter, demander, décrire son environnement proche. Ce programme est pensé pour un public francophone débutant : chaque mécanisme propre à l'espagnol qui n'existe pas pareil en français (le genre systématique, SER contre ESTAR, GUSTAR « à l'envers », tú contre usted...) est d'abord expliqué avec son pourquoi, avant d'être mis en pratique — jamais donné comme une règle à apprendre par cœur sans comprendre d'où elle vient. Chaque palier se termine par un contrôle noté ; une fois validé, on passe au palier suivant.";

export const A1_ES_PALIERS = [
  {
    code: "A1.0", title: "Bases transversales",
    objective: "Poser, avant tout thème, les fondations qui reviennent dans CHAQUE palier suivant : comment ça se prononce, comment le genre et le nombre fonctionnent, compter, nommer les couleurs, et les 3 verbes-piliers de l'espagnol (ser / estar / tener) sans lesquels aucune phrase ne tient debout.",
    vocab: [
      "l'alphabet espagnol et les sons clés : ñ, ll/y, j (un « r » guttural), r roulé (rr), h toujours muette",
      "les couleurs : rojo, azul, verde, amarillo, negro, blanco, naranja, rosa, gris, marrón",
      "les nombres de 0 à 100 : uno à cien, les dizaines, l'accord de « uno/una »",
      "les émotions de base avec ESTAR : contento/a, triste, cansado/a, enfadado/a, nervioso/a, sorprendido/a",
    ],
    grammar: [
      "Le genre : chaque nom est masculin OU féminin — souvent devinable à sa terminaison (-o masculin, -a féminin : el libro / la mesa), mais pas toujours (el problema, la mano)",
      "Les articles : el/la (défini, « le/la ») et un/una (indéfini, « un/une »), qui s'accordent en genre ET en nombre (los/las, unos/unas)",
      "Le pluriel : +s si le mot finit par une voyelle, +es s'il finit par une consonne",
      "L'accord adjectif-nom, en genre ET en nombre : un libro rojo / una mesa roja / dos libros rojos",
    ],
    whyHow: "Pourquoi commencer par ça avant même de savoir se présenter ? Parce qu'en espagnol, absolument TOUT s'accorde en genre et en nombre — l'article, l'adjectif, et on le verra plus loin, parfois le participe passé. Si ce réflexe n'est pas installé dès le départ, chaque phrase future demande un effort de traduction mentale depuis le français. On le construit ici sur des mots très simples (couleurs, nombres), pour ne plus jamais avoir à y repenser consciemment ensuite — c'est un investissement, pas une leçon comme les autres.",
    conjugation: "Présent — SER, ESTAR, TENER, les 3 verbes fondamentaux, expliqués en contraste. SER = identité permanente (qui tu es : nationalité, métier, caractère). ESTAR = état temporaire ou position (où tu es, comment tu te sens maintenant). TENER = possession ou âge (j'ai un livre, j'ai 30 ans). Le français n'a qu'un seul verbe « être » pour SER et ESTAR — c'est LA plus grande source de confusion pour un francophone : « Soy feliz » = je suis quelqu'un d'heureux de nature, contre « Estoy feliz » = je suis heureux en ce moment précis. Cette différence est expliquée ici avec des exemples contrastés, avant d'être réutilisée dans tous les paliers suivants.",
    activities: ["Vocabulaire", "Jeux", "Grammaire", "Jeux", "Conjugaison (SER contre ESTAR contre TENER, en contraste)", "Jeux", "Quiz de fondations", "Bonus : 10 expressions", "Fiche PDF récapitulative"],
  },
  {
    code: "A1.1", title: "Identidad",
    objective: "Donner et demander des informations simples permettant d'identifier une personne et décrire des caractéristiques physiques élémentaires.",
    vocab: [
      "nombre, apellido, apodo, edad, fecha de nacimiento, lugar de nacimiento",
      "origen, país, ciudad, nacionalidad, vivir, residencia",
      "altura, peso, color de piel, color de ojos, las partes principales del cuerpo",
    ],
    grammar: [
      "Pronoms personnels : yo, tú, él/ella, nosotros/as, vosotros/as, ellos/ellas — et usted/ustedes, la forme de politesse, présente dès cette première leçon",
      "L'omission du pronom sujet : la terminaison du verbe suffit à dire qui parle (« Soy Ashley », pas besoin de « Yo soy Ashley »)",
      "Questions : ¿Cómo te llamas? / ¿Cuántos años tienes? / ¿De dónde eres? / ¿Dónde vives?",
      "Possessifs : mi, tu, su",
    ],
    whyHow: "En espagnol, on n'est presque jamais obligé de dire « je/tu/il » devant le verbe, parce que la terminaison du verbe le dit déjà — « soy » ne peut vouloir dire que « je suis », impossible de le confondre avec une autre personne. C'est une habitude à prendre dès cette toute première leçon (ne pas traduire mot à mot depuis le français), plutôt qu'à corriger plus tard une fois le réflexe inverse installé.",
    conjugation: "Présent régulier introduit en douceur via LLAMARSE (« se llama » = il/elle s'appelle, un verbe pronominal comme « s'appeler » en français), réemploi de SER et TENER vus en A1.0.",
    activities: ["Vocabulaire", "Jeux", "Grammaire", "Jeux", "Conjugaison", "Jeux", "Compréhension orale", "Compréhension écrite", "Expression écrite (courte présentation de soi)", "Expression orale (se présenter)", "Contrôle de niveau", "Bonus : 10 expressions", "Fiche PDF"],
  },
  {
    code: "A1.2", title: "Familia",
    objective: "Parler simplement de sa famille proche et lointaine, présenter un membre de sa famille et comprendre une description familiale simple.",
    vocab: [
      "madre, padre, padres, hermano, hermana, hijos, hijo, hija, marido/esposo, mujer/esposa",
      "abuela, abuelo, abuelos, tía, tío, primo/prima, sobrino/sobrina",
      "joven, viejo/mayor, alto/a, bajo/a, simpático/a, gracioso/a, casado/a, soltero/a",
    ],
    grammar: [
      "TENER pour exprimer les liens familiaux : « Tengo dos hermanos » (j'ai deux frères/sœurs)",
      "Accord masculin/féminin systématique des mots de famille : hermano/hermana, tío/tía",
      "Le pluriel masculin qui regroupe les deux genres : « los padres » = les parents (pas seulement « les pères »), « los hermanos » = les frères ET sœurs",
    ],
    whyHow: "Piège classique pour un francophone : « padres » ne veut pas dire seulement « pères », ça veut dire « les parents » — le masculin pluriel espagnol regroupe systématiquement les deux genres dès qu'il y a au moins un homme dans le groupe, un peu comme « ils » en français regroupe hommes et femmes. On l'explique ici sur la famille, le terrain le plus concret possible, pour ne plus jamais se tromper ensuite.",
    conjugation: "TENER (avoir) approfondi à toutes les personnes, réemploi de SER pour décrire (es alto, es simpática).",
    activities: ["Vocabulaire", "Jeux", "Grammaire", "Jeux", "Conjugaison", "Jeux", "Compréhension orale", "Compréhension écrite", "Expression écrite (présenter sa famille)", "Expression orale (parler de sa famille)", "Contrôle de niveau", "Bonus : 10 expressions", "Fiche PDF"],
  },
  {
    code: "A1.3", title: "Amigos / Relaciones sociales",
    objective: "Parler de ses amis, présenter quelqu'un, décrire simplement une relation et parler d'activités partagées.",
    vocab: [
      "amigo/amiga, mejor amigo/a, vecino/a, compañero/a, novio/novia",
      "Este/Esta es..., Encantado/a, Te presento a...",
      "quedar, salir, charlar, tomar un café",
    ],
    grammar: [
      "Présent des verbes réguliers en -AR (quedar, charlar, tomar) en contexte social",
      "Fréquence : siempre, a menudo, a veces, nunca",
      "Pronoms compléments de base : me, te, lo/la",
    ],
    whyHow: "« Encantado » ou « Encantada » ? Ici, l'accord se fait sur la personne QUI PARLE, pas sur celle qu'on salue — encore le réflexe d'accord en genre vu en A1.0, mais appliqué différemment du français : « enchanté » ne changeait pas forcément à l'oral en français, en espagnol si, à l'écrit ET à l'oral, systématiquement.",
    conjugation: "Présent régulier -AR (charlar, quedar, tomar) à toutes les personnes, réemploi de SER/ESTAR.",
    activities: ["Vocabulaire", "Jeux", "Grammaire", "Jeux", "Conjugaison", "Jeux", "Compréhension orale", "Compréhension écrite", "Expression écrite (présenter un ami)", "Expression orale (présenter un ami)", "Contrôle de niveau", "Bonus : 10 expressions", "Fiche PDF"],
  },
  {
    code: "A1.4", title: "Transporte / Direcciones",
    objective: "Demander son chemin, comprendre une indication simple, expliquer un trajet et utiliser les transports dans une situation quotidienne.",
    vocab: [
      "autobús, tren, coche, bici, taxi, avión, a pie, metro",
      "parada, estación, calle, esquina, semáforo, puente, plaza",
      "gira a la izquierda/derecha, sigue recto, al lado de, enfrente de, entre, delante de, detrás de, cerca, lejos",
    ],
    grammar: [
      "L'impératif informel (tú) pour donner une direction : gira, sigue, coge",
      "Prépositions de lieu",
      "Questions : ¿Cómo llego a...? / ¿Dónde está el/la... más cercano/a?",
    ],
    whyHow: "L'impératif espagnol change de forme selon qu'on tutoie (gira) ou qu'on vouvoie (gire) — cela recroise la distinction tú/usted vue en A1.1. Ce palier reste volontairement sur le tutoiement (le plus courant entre inconnus jeunes ou dans un contexte informel), pour ne pas mélanger deux difficultés à la fois ; la forme de politesse sera vue plus tard, une fois celle-ci bien installée.",
    conjugation: "Présent + impératif informel ; IR (aller) introduit ici au présent (voy, vas, va...).",
    activities: ["Vocabulaire", "Jeux", "Grammaire", "Jeux", "Conjugaison", "Jeux", "Compréhension orale", "Compréhension écrite", "Expression écrite (décrire un itinéraire)", "Expression orale (expliquer un trajet)", "Contrôle de niveau", "Bonus : 10 expressions", "Fiche PDF"],
  },
  {
    code: "A1.5", title: "Gustos y preferencias",
    objective: "Dire ce que l'on aime ou n'aime pas, exprimer une préférence, demander les goûts d'une autre personne et comprendre ses réponses.",
    vocab: [
      "gustar, encantar, odiar, no importar + leer, cocinar, deporte, música, viajar, bailar",
      "preferir, favorito/a",
      "interesante, aburrido/a, divertido/a, difícil, fácil, genial, terrible",
    ],
    grammar: [
      "La structure GUSTAR, à l'envers du français : « me gusta el deporte » = littéralement « le sport me plaît », pas « j'aime le sport »",
      "Le verbe s'accorde avec la CHOSE aimée, jamais avec la personne : me gusta (singulier) / me gustan (pluriel)",
      "Questions : ¿Te gusta...? / ¿Cuál es tu... favorito/a?",
    ],
    whyHow: "C'est LA vraie difficulté du niveau A1 en espagnol : GUSTAR ne fonctionne pas comme « aimer » en français. On ne dit pas « j'aime les chats », on dit littéralement « les chats me plaisent » (me gustan los gatos) — c'est pour ça que le verbe s'accorde avec ce qui plaît (singulier : gusta, pluriel : gustan), jamais avec la personne qui aime. Cette leçon prend le temps d'installer ce réflexe inversé, parce qu'il revient dans tout le reste de l'espagnol : encantar, interesar et doler fonctionnent exactement pareil.",
    conjugation: "Gustar / encantar / interesar (les verbes « à la GUSTAR ») + preferir (diphtongue e→ie : prefiero, prefieres, prefiere...).",
    activities: ["Vocabulaire", "Jeux", "Grammaire", "Jeux", "Conjugaison", "Jeux", "Compréhension orale", "Compréhension écrite", "Expression écrite (fiche de préférences)", "Expression orale (interroger un partenaire)", "Contrôle de niveau", "Bonus : 10 expressions", "Fiche PDF"],
  },
  {
    code: "A1.6", title: "Comida y bebida",
    objective: "Parler simplement de ce qu'il mange et boit, exprimer ses goûts alimentaires, commander et comprendre un menu ou une commande simple.",
    vocab: [
      "pan, arroz, carne, pescado, verduras, fruta, agua, café, té, zumo",
      "desayuno, almuerzo, cena, un poco de, mucho/a, un trozo de, un vaso de",
      "¿Puedo tener...?, Quería..., la cuenta por favor, una mesa para dos",
    ],
    grammar: [
      "Dénombrable/indénombrable : un poco de / mucho/a",
      "QUERÍA (littéralement « je voulais ») plutôt que « quiero » (je veux) pour commander poliment — une nuance culturelle importante",
      "Réemploi de GUSTAR appliqué à la nourriture",
    ],
    whyHow: "Pourquoi « quería » (à l'imparfait) pour commander, plutôt que « quiero » (au présent) ? Exactement comme en français on adoucit une demande avec « je voudrais » plutôt que « je veux », l'espagnol utilise un temps du passé pour rendre une demande plus polie — c'est un mécanisme, pas une formule magique à apprendre par cœur sans le comprendre.",
    conjugation: "Présent régulier -ER/-IR (comer, beber) + « quería » expliqué comme formule de politesse figée.",
    activities: ["Vocabulaire", "Jeux", "Grammaire", "Jeux", "Conjugaison", "Jeux", "Compréhension orale", "Compréhension écrite", "Expression écrite (liste de courses/repas)", "Expression orale (commander au restaurant)", "Contrôle de niveau", "Bonus : 10 expressions", "Fiche PDF"],
  },
  {
    code: "A1.7", title: "De compras",
    objective: "Demander un produit, une taille ou un prix, comprendre une réponse simple, choisir un article et effectuer un achat basique.",
    vocab: [
      "camisa, pantalones, zapatos, vestido, chaqueta, bolso, talla, color",
      "¿Cuánto cuesta?, ¿Puedo probármelo?, Es demasiado grande/pequeño, Me lo llevo",
      "precios, moneda, pagar, efectivo, tarjeta, recibo",
    ],
    grammar: [
      "Comparatifs : más barato, más caro, mejor, peor",
      "Démonstratifs este/esta/estos/estas, appliqués aux objets, avec leur propre accord",
      "Premiers verbes pronominaux : probarse (essayer un vêtement)",
    ],
    whyHow: "« Probármelo » ressemble à un mot-valise effrayant, mais c'est juste trois pièces empilées : probar (essayer) + me (à moi) + lo (le vêtement, au masculin). L'espagnol colle les pronoms À LA FIN du verbe à l'infinitif — une construction qui n'existe pas en français — donc cette leçon la décompose pièce par pièce plutôt que de la faire mémoriser d'un bloc.",
    conjugation: "Présent + premiers verbes pronominaux (probarse : me pruebo, te pruebas, se prueba...).",
    activities: ["Vocabulaire", "Jeux", "Grammaire", "Jeux", "Conjugaison", "Jeux", "Compréhension orale", "Compréhension écrite", "Expression écrite (liste d'achats)", "Expression orale (jeu de rôle achat)", "Contrôle de niveau", "Bonus : 10 expressions", "Fiche PDF"],
  },
  {
    code: "A1.8", title: "Moverse por la ciudad",
    objective: "Se déplacer dans un environnement connu ou inconnu et communiquer pour trouver son chemin.",
    vocab: [
      "tienda, parque, biblioteca, hospital, farmacia, banco, oficina de correos, supermercado, gimnasio",
      "Perdón, ¿Puede repetir?, No entiendo, ¿Está lejos?, a la izquierda/derecha",
      "cambiar de tren/autobús, bajarse, subirse, perder (el autobús), perdido/a",
    ],
    grammar: [
      "Présent continu : ESTAR + gérondif (estoy buscando, estoy yendo a) — un deuxième usage important de ESTAR, après les émotions vues en A1.0",
      "Impératif dans des consignes plus longues (Primero..., luego..., después...)",
      "Questions de clarification",
    ],
    whyHow: "Retour sur ESTAR, mais avec un nouveau rôle : ESTAR + un verbe en -ANDO/-IENDO sert à dire « en train de faire quelque chose maintenant » (estoy buscando = je suis en train de chercher). C'est le même ESTAR que pour les émotions et la position (vu en A1.0) — logique, puisque les deux sont temporaires par nature, contrairement à SER qui reste permanent.",
    conjugation: "Présent continu (estar + gérondif), révision de l'impératif informel.",
    activities: ["Vocabulaire", "Jeux", "Grammaire", "Jeux", "Conjugaison", "Jeux", "Compréhension orale", "Compréhension écrite", "Expression écrite (indications écrites)", "Expression orale (guider un touriste)", "Contrôle de niveau", "Bonus : 10 expressions", "Fiche PDF"],
  },
  {
    code: "A1.9", title: "Viajar",
    objective: "Gérer les principales situations linguistiques d'un voyage simple (réservation, aéroport, hôtel).",
    vocab: [
      "reservar, billete, solo ida, ida y vuelta, asiento, reserva, salida, llegada",
      "aeropuerto, puerta de embarque, equipaje, maleta, pasaporte, tarjeta de embarque, facturar",
      "habitación, entrada/salida (check in/out), llave, recepción, desayuno incluido, wifi",
    ],
    grammar: [
      "Le futur proche IR A + infinitif : « voy a reservar » (je vais réserver) — l'équivalent du « going to » anglais, très utilisé à l'oral",
      "Réemploi de « quería » pour réserver poliment (revoir A1.6)",
      "Questions : ¿A qué hora sale el vuelo? / ¿El desayuno está incluido?",
    ],
    whyHow: "IR A + infinitif est LE futur du quotidien en espagnol — bien plus utilisé à l'oral que le futur simple (« reservaré »), qu'on découvrira à un niveau plus avancé. On l'introduit ici avec IR (aller), déjà connu depuis A1.4, pour montrer qu'un seul verbe déjà maîtrisé permet soudain de parler de plein de projets différents.",
    conjugation: "IR (aller) au présent, complété par IR A + infinitif ; réemploi de « quería ».",
    activities: ["Vocabulaire", "Jeux", "Grammaire", "Jeux", "Conjugaison", "Jeux", "Compréhension orale", "Compréhension écrite", "Expression écrite (projet de voyage)", "Expression orale (réception d'hôtel)", "Contrôle de niveau", "Bonus : 10 expressions", "Fiche PDF"],
  },
  {
    code: "A1.10", title: "Trabajo y estudios",
    objective: "Dire ce qu'il fait, parler simplement de son travail ou de ses études, décrire une journée type.",
    vocab: [
      "trabajo, profesor/a, médico/a, ingeniero/a, estudiante, oficina, fábrica, compañero/a, jefe/a",
      "colegio, universidad, asignatura, clase, deberes, examen, título",
      "empezar/terminar el trabajo, reunión, descanso, clase, horario",
    ],
    grammar: [
      "Présent régulier complet -AR/-ER/-IR en contexte professionnel",
      "Questions : ¿A qué te dedicas? / ¿Dónde trabajas? / ¿Qué estudias?",
      "Prépositions de temps : a las (à... heures), por la mañana/tarde/noche",
    ],
    whyHow: "« ¿A qué te dedicas? » est la façon naturelle de demander le métier de quelqu'un en espagnol courant — plus que « ¿Cuál es tu trabajo? », qui sonne un peu artificiel. Cette leçon privilégie volontairement les formulations que des hispanophones utilisent vraiment au quotidien, pas juste la traduction mot à mot depuis le français.",
    conjugation: "Présent régulier -AR/-ER/-IR à toutes les personnes, synthèse des trois groupes.",
    activities: ["Vocabulaire", "Jeux", "Grammaire", "Jeux", "Conjugaison", "Jeux", "Compréhension orale", "Compréhension écrite", "Expression écrite (décrire son travail/ses études)", "Expression orale (décrire sa journée type)", "Contrôle de niveau", "Bonus : 10 expressions", "Fiche PDF"],
  },
  {
    code: "A1.11", title: "La hora y el tiempo",
    objective: "Dire l'heure, parler d'une date ou d'un moment, décrire simplement la météo et comprendre des informations temporelles courantes.",
    vocab: [
      "soleado, lluvioso, nublado, ventoso, nevado, calor, frío, templado, grados",
      "por la mañana, por la tarde, por la noche, temprano, tarde",
      "ayer, hoy, mañana, la semana que viene, el mes pasado",
    ],
    grammar: [
      "HACER impersonnel pour la météo : hace sol, hace frío, hace calor (littéralement « ça fait »)",
      "ESTAR pour un autre type de météo : está nublado, está lloviendo",
      "L'heure avec SER : ¿Qué hora es? / Son las tres",
    ],
    whyHow: "Piège classique : en espagnol, la météo se construit avec TROIS familles de verbes différentes selon le mot — hace sol/frío/calor (avec HACER, « ça fait »), está nublado/lluvioso (avec ESTAR, un état), et llueve/nieva (un verbe à lui tout seul, « il pleut »/« il neige »). Le français utilise « il fait » ou « il pleut » pour tout ramener au même moule, donc cette leçon prend le temps de trier les trois familles plutôt que de laisser deviner au hasard.",
    conjugation: "HACER impersonnel + ESTAR (météo), llover/nevar, réemploi de SER pour dire l'heure.",
    activities: ["Vocabulaire", "Jeux", "Grammaire", "Jeux", "Conjugaison", "Jeux", "Compréhension orale", "Compréhension écrite", "Expression écrite (météo du jour + projet)", "Expression orale (décrire météo et plans)", "Contrôle de niveau", "Bonus : 10 expressions", "Fiche PDF"],
  },
  {
    code: "A1.12", title: "Español social (síntesis)",
    objective: "Participer à une interaction sociale simple — commencer une conversation, répondre, poser une question, remercier, s'excuser et terminer une interaction. Palier de synthèse de l'ensemble des acquis A1.",
    vocab: [
      "Hola, Buenos días/tardes/noches, Adiós, Hasta pronto, ¿Qué tal?",
      "Gracias, De nada, Lo siento, Perdón, ¿Podría...?, por favor, ¿Puedo...?",
      "¿Qué tal todo?, Cuánto tiempo sin verte, ¿Qué hay de nuevo?, Que tengas un buen día",
    ],
    grammar: [
      "Réemploi synthétique de toutes les formes de questions vues depuis A1.0",
      "Réemploi des formules polies, avec « ¿Podría...? » comme forme la plus polie (conditionnel de politesse)",
      "Connecteurs : y, pero, así que, porque",
      "Rappel tú/usted selon le contexte : « Buenos días » à un inconnu, « ¿Qué tal?» à un ami",
    ],
    whyHow: "Ce palier n'apprend presque rien de nouveau — il réutilise volontairement tout ce qui a été vu depuis A1.0, mais cette fois dans une vraie conversation qui enchaîne salutation, question, réponse et politesse. C'est fait exprès : le but n'est pas d'accumuler des règles isolées, mais de les faire vivre ensemble comme dans une vraie discussion. Si ce palier semble facile, c'est le signe que tout le niveau A1 est bien acquis.",
    conjugation: "Réemploi complet des acquis A1 : ser, estar, tener, présent régulier -ar/-er/-ir, ir a + infinitif, présent continu.",
    activities: ["Vocabulaire", "Jeux", "Grammaire", "Jeux", "Conjugaison", "Jeux", "Compréhension orale", "Compréhension écrite", "Expression écrite (message informel)", "Expression orale (conversation complète)", "Grand contrôle de fin de niveau A1", "Bonus : 10 expressions", "Fiche PDF"],
  },
];
