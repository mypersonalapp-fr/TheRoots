// The Roots — Atelier espagnol : séries d'entraînement supplémentaires par temps (08/10).
// Objectif : au moins 100 exercices par temps, la moitié en registre formel (usted / ustedes),
// la moitié en informel (tú). Chaque leçon porte reg: "formal" | "informal".
// Ajoutées à la suite des leçons existantes par js/screens/atelier-es.js (mergeDrills).
export const ES_DRILLS = {
 "temps-present": [
  {
   "id": "presente-formel-1",
   "reg": "formal",
   "title": "Les verbes en -ar au bureau · Formel (usted)",
   "why": "Au travail, tu t'adresses souvent à <b>usted</b> (un client, un directeur) ou à <b>ustedes</b> (un groupe). Le verbe prend alors la terminaison de la <b>3e personne</b> : -a pour usted, -an pour ustedes.",
   "rule": "1. Enlève -ar : trabaj-, llam-, pag-.<br>2. usted → <b>-a</b> ; ustedes → <b>-an</b>.<br>3. yo → <b>-o</b> ; nosotros → <b>-amos</b>.<br>4. Le « vous » de politesse (usted) se conjugue comme « il / elle », jamais comme tú.<br>5. Par politesse, on dit souvent usted / ustedes (contrairement à yo).",
   "examples": [
    {
     "es": "Usted trabaja en el banco, ¿verdad?",
     "fr": "Vous travaillez à la banque, n'est-ce pas ?",
     "note": "usted → verbe en -a"
    },
    {
     "es": "Ustedes necesitan una cita.",
     "fr": "Vous avez besoin d'un rendez-vous."
    },
    {
     "es": "Llamo a la oficina por la mañana.",
     "fr": "J'appelle le bureau le matin."
    },
    {
     "es": "La directora firma los contratos.",
     "fr": "La directrice signe les contrats."
    },
    {
     "es": "Esperamos su respuesta.",
     "fr": "Nous attendons votre réponse."
    },
    {
     "es": "¿Usted paga con tarjeta?",
     "fr": "Vous payez par carte ?"
    }
   ],
   "pitfalls": [
    {
     "wrong": "Usted trabajas",
     "right": "Usted trabaja",
     "why": "Usted se conjugue comme él / ella (-a), pas comme tú (-as)."
    },
    {
     "wrong": "Ustedes trabajáis",
     "right": "Ustedes trabajan",
     "why": "La terminaison -áis appartient à vosotros (familier) ; ustedes prend -an."
    }
   ],
   "exercises": [
    {
     "type": "mcq",
     "q": "« Vous travaillez ici ? » (à un client, par politesse)",
     "opts": [
      "¿Usted trabajas aquí?",
      "¿Usted trabaja aquí?",
      "¿Usted trabajo aquí?"
     ],
     "correct": 1,
     "why": "Usted se conjugue comme la 3e personne : <b>trabaja</b>."
    },
    {
     "type": "fill",
     "text": "El cliente ___ (llamar) a la oficina cada lunes.",
     "answers": [
      "llama"
     ],
     "why": "3e personne du singulier : llam- + <b>a</b>."
    },
    {
     "type": "fill",
     "text": "Ustedes ___ (necesitar) otro documento.",
     "answers": [
      "necesitan"
     ],
     "why": "Ustedes → <b>-an</b>."
    },
    {
     "type": "speak",
     "es": "Buenos días, trabajo en el departamento de ventas.",
     "fr": "Bonjour, je travaille au service des ventes."
    },
    {
     "type": "mcq",
     "q": "« Vous (plusieurs personnes) payez en espèces »",
     "opts": [
      "Ustedes paga en efectivo",
      "Ustedes pagamos en efectivo",
      "Ustedes pagan en efectivo",
      "Ustedes pagáis en efectivo"
     ],
     "correct": 2,
     "why": "Ustedes → <b>pagan</b> ; -áis est réservé à vosotros."
    },
    {
     "type": "fill",
     "text": "Nosotros ___ (cambiar) la fecha de la reunión.",
     "answers": [
      "cambiamos"
     ],
     "why": "Nosotros → <b>-amos</b>."
    },
    {
     "type": "fill",
     "text": "Yo ___ (contestar) los correos por la tarde.",
     "answers": [
      "contesto"
     ],
     "why": "Yo → <b>-o</b>."
    },
    {
     "type": "mcq",
     "q": "Quelle phrase est correcte ?",
     "opts": [
      "La señora López ayudan a los clientes.",
      "La señora López ayuda a los clientes.",
      "La señora López ayudo a los clientes."
     ],
     "correct": 1,
     "why": "Un seul sujet à la 3e personne du singulier : <b>ayuda</b>."
    },
    {
     "type": "fill",
     "text": "¿Usted ___ (llegar) a las nueve o a las diez?",
     "answers": [
      "llega"
     ],
     "why": "Usted → <b>-a</b>."
    },
    {
     "type": "fill",
     "text": "Ustedes ___ (hablar) inglés y yo ___ (hablar) francés.",
     "answers": [
      [
       "hablan"
      ],
      [
       "hablo"
      ]
     ],
     "why": "Ustedes → -an ; yo → -o."
    },
    {
     "type": "mcq",
     "q": "Pourquoi dit-on « usted trabaja » et non « usted trabajas » ?",
     "opts": [
      "Parce que usted se conjugue comme la 3e personne (él, ella)",
      "Parce que usted est un pluriel",
      "Parce que usted se conjugue comme tú"
     ],
     "correct": 0,
     "why": "Usted est une forme de politesse qui utilise le verbe de la <b>3e personne</b>."
    },
    {
     "type": "speak",
     "es": "Nuestra empresa ayuda a muchos clientes cada día.",
     "fr": "Notre entreprise aide beaucoup de clients chaque jour."
    }
   ]
  },
  {
   "id": "presente-formel-2",
   "reg": "formal",
   "title": "Les verbes en -er et -ir en situation pro · Formel (usted)",
   "why": "Courriels, formulaires, rendez-vous : on y trouve beaucoup de verbes en -er / -ir (recibir, escribir, responder, abrir). À usted / ustedes, il suffit de retenir <b>-e</b> et <b>-en</b>.",
   "rule": "1. Enlève -er / -ir : recib-, respond-, escrib-.<br>2. usted → <b>-e</b> ; ustedes → <b>-en</b>.<br>3. yo → <b>-o</b>.<br>4. nosotros : <b>-emos</b> pour -er, <b>-imos</b> pour -ir.<br>5. Attention : -a est la terminaison des verbes en -ar ; en -er / -ir, usted fait <b>-e</b>.",
   "examples": [
    {
     "es": "Usted recibe el paquete mañana.",
     "fr": "Vous recevez le colis demain."
    },
    {
     "es": "Ustedes escriben el informe juntos.",
     "fr": "Vous rédigez le rapport ensemble."
    },
    {
     "es": "Respondo a todos los correos hoy.",
     "fr": "Je réponds à tous les courriels aujourd'hui."
    },
    {
     "es": "El banco abre a las nueve.",
     "fr": "La banque ouvre à neuf heures."
    },
    {
     "es": "Vendemos seguros para empresas.",
     "fr": "Nous vendons des assurances pour les entreprises."
    },
    {
     "es": "¿Usted vive cerca de la oficina?",
     "fr": "Vous habitez près du bureau ?"
    }
   ],
   "pitfalls": [
    {
     "wrong": "Usted recibo",
     "right": "Usted recibe",
     "why": "-o est uniquement pour yo ; usted prend -e."
    },
    {
     "wrong": "Nosotros recibemos",
     "right": "Nosotros recibimos",
     "why": "Pour les verbes en -ir, nosotros fait -imos (pas -emos)."
    },
    {
     "wrong": "El banco abra a las nueve",
     "right": "El banco abre a las nueve",
     "why": "-a est pour les verbes en -ar ; abrir est un verbe en -ir : -e."
    }
   ],
   "exercises": [
    {
     "type": "mcq",
     "q": "« Vous ouvrez le dossier » (usted)",
     "opts": [
      "Usted abres el expediente",
      "Usted abre el expediente",
      "Usted abro el expediente"
     ],
     "correct": 1,
     "why": "Abrir, usted → <b>abre</b>."
    },
    {
     "type": "fill",
     "text": "La empresa ___ (vender) productos de oficina.",
     "answers": [
      "vende"
     ],
     "why": "3e personne : vend- + <b>e</b>."
    },
    {
     "type": "fill",
     "text": "Ustedes ___ (recibir) un correo de confirmación.",
     "answers": [
      "reciben"
     ],
     "why": "Ustedes → <b>-en</b>."
    },
    {
     "type": "speak",
     "es": "Recibimos muchos mensajes cada mañana.",
     "fr": "Nous recevons beaucoup de messages chaque matin."
    },
    {
     "type": "mcq",
     "q": "Quelle est la forme nosotros de « decidir » ?",
     "opts": [
      "decidimos",
      "decidemos",
      "deciden",
      "decidamos"
     ],
     "correct": 0,
     "why": "Verbe en -ir : nosotros → <b>-imos</b>."
    },
    {
     "type": "fill",
     "text": "Yo ___ (escribir) el informe y usted ___ (leer) el contrato.",
     "answers": [
      [
       "escribo"
      ],
      [
       "lee"
      ]
     ],
     "why": "Yo → -o ; usted → -e."
    },
    {
     "type": "fill",
     "text": "Usted ___ (deber) firmar aquí.",
     "answers": [
      "debe"
     ],
     "why": "Usted → <b>-e</b>."
    },
    {
     "type": "mcq",
     "q": "El director y la gerente ___ (leer) el contrato.",
     "opts": [
      "lee",
      "lees",
      "leen",
      "leemos"
     ],
     "correct": 2,
     "why": "Deux sujets (ils) → <b>leen</b>."
    },
    {
     "type": "fill",
     "text": "Mis colegas ___ (asistir) a la reunión del jueves.",
     "answers": [
      "asisten"
     ],
     "why": "Ellos → <b>-en</b>."
    },
    {
     "type": "fill",
     "text": "Los nuevos empleados ___ (aprender) el sistema en una semana.",
     "answers": [
      "aprenden"
     ],
     "why": "Pluriel → <b>-en</b>."
    },
    {
     "type": "mcq",
     "q": "¿Dónde ___ usted, señor Ramos? (vivir)",
     "opts": [
      "vivo",
      "vives",
      "vive"
     ],
     "correct": 2,
     "why": "Usted → <b>vive</b>, pas vives (tú)."
    },
    {
     "type": "speak",
     "es": "Ustedes comen en la cafetería de la empresa.",
     "fr": "Vous mangez à la cafétéria de l'entreprise."
    }
   ]
  },
  {
   "id": "presente-formel-3",
   "reg": "formal",
   "title": "Les irréguliers de base à l'accueil · Formel (usted)",
   "why": "Pour te présenter, indiquer un lieu ou annoncer un rendez-vous, tu utilises les verbes les plus courants. À usted / ustedes la plupart ont une forme simple ; seuls <b>ser, estar, ir</b> sont vraiment à part.",
   "rule": "1. <b>ser</b> : soy, es (usted), somos, son (ustedes).<br>2. <b>estar</b> : estoy, está, estamos, están.<br>3. <b>ir</b> : voy, va, vamos, van.<br>4. <b>tener, venir, decir</b> : yo en -go (tengo, vengo, digo) ; usted : <b>tiene, viene, dice</b>.<br>5. <b>hacer</b> : hago, hace ; <b>saber</b> : sé, sabe.<br>6. Ser = identité, profession, origine ; estar = lieu, état.",
   "examples": [
    {
     "es": "Usted es el nuevo director, ¿verdad?",
     "fr": "Vous êtes le nouveau directeur, n'est-ce pas ?"
    },
    {
     "es": "Estoy en la recepción del hotel.",
     "fr": "Je suis à la réception de l'hôtel."
    },
    {
     "es": "Ustedes tienen una reserva a nombre de Ruiz.",
     "fr": "Vous avez une réservation au nom de Ruiz."
    },
    {
     "es": "Voy a la sala de reuniones.",
     "fr": "Je vais à la salle de réunion."
    },
    {
     "es": "El doctor viene en cinco minutos.",
     "fr": "Le docteur vient dans cinq minutes."
    },
    {
     "es": "Lo siento, no sé su dirección.",
     "fr": "Je suis désolé, je ne connais pas votre adresse."
    }
   ],
   "pitfalls": [
    {
     "wrong": "Usted tengo una cita",
     "right": "Usted tiene una cita",
     "why": "La forme en -go existe seulement pour yo ; usted fait tiene."
    },
    {
     "wrong": "Soy en la oficina",
     "right": "Estoy en la oficina",
     "why": "Un lieu se dit avec estar, pas avec ser."
    },
    {
     "wrong": "Estoy ingeniero",
     "right": "Soy ingeniero",
     "why": "Une profession est une identité : on utilise ser."
    }
   ],
   "exercises": [
    {
     "type": "mcq",
     "q": "Quelle phrase dit « Vous êtes le responsable » (usted) ?",
     "opts": [
      "Usted está el responsable",
      "Usted es el responsable",
      "Usted eres el responsable",
      "Usted soy el responsable"
     ],
     "correct": 1,
     "why": "Fonction : ser ; usted → <b>es</b>."
    },
    {
     "type": "fill",
     "text": "Nuestra oficina ___ (estar) en la calle Mayor.",
     "answers": [
      "está"
     ],
     "why": "Lieu → estar ; 3e personne : <b>está</b> (avec accent)."
    },
    {
     "type": "fill",
     "text": "Yo ___ (tener) una cita con el doctor Vega.",
     "answers": [
      "tengo"
     ],
     "why": "Tener, yo → <b>tengo</b>."
    },
    {
     "type": "speak",
     "es": "Soy la nueva gerente de la sucursal.",
     "fr": "Je suis la nouvelle gérante de l'agence."
    },
    {
     "type": "mcq",
     "q": "Quelle est la forme usted de « tener » ?",
     "opts": [
      "tengo",
      "tienes",
      "tiene",
      "tenemos"
     ],
     "correct": 2,
     "why": "Usted → <b>tiene</b> (e→ie)."
    },
    {
     "type": "fill",
     "text": "Ustedes ___ (ser) de Lyon y ___ (estar) en Madrid por trabajo.",
     "answers": [
      [
       "son"
      ],
      [
       "están"
      ]
     ],
     "why": "Origine : ser → son ; lieu : estar → están."
    },
    {
     "type": "fill",
     "text": "El doctor ___ (venir) a las cinco.",
     "answers": [
      "viene"
     ],
     "why": "Venir, 3e personne → <b>viene</b>."
    },
    {
     "type": "mcq",
     "q": "« Je ne sais pas votre numéro » (yo)",
     "opts": [
      "No sé su número",
      "No sabo su número",
      "No sabe su número"
     ],
     "correct": 0,
     "why": "Saber, yo → <b>sé</b>."
    },
    {
     "type": "fill",
     "text": "Yo siempre ___ (hacer) los informes a tiempo.",
     "answers": [
      "hago"
     ],
     "why": "Hacer, yo → <b>hago</b>."
    },
    {
     "type": "fill",
     "text": "El director ___ (decir) la verdad a sus clientes.",
     "answers": [
      "dice"
     ],
     "why": "Decir, 3e personne → <b>dice</b> (e→i)."
    },
    {
     "type": "mcq",
     "q": "« Je suis ingénieur et je suis à Barcelone »",
     "opts": [
      "Soy ingeniero y soy en Barcelona",
      "Estoy ingeniero y estoy en Barcelona",
      "Soy ingeniero y estoy en Barcelona"
     ],
     "correct": 2,
     "why": "Profession → <b>soy</b> ; lieu → <b>estoy</b>."
    },
    {
     "type": "speak",
     "es": "Ustedes van al banco y yo voy a la oficina.",
     "fr": "Vous allez à la banque et moi je vais au bureau."
    }
   ]
  },
  {
   "id": "presente-formel-4",
   "reg": "formal",
   "title": "Les verbes à changement de voyelle en réunion · Formel (usted)",
   "why": "Beaucoup de verbes très utiles au travail (poder, querer, empezar, cerrar, pedir, volver) changent la voyelle de leur radical. Ce changement touche usted et ustedes, mais pas nosotros.",
   "rule": "1. <b>e→ie</b> : querer (quiere), empezar (empieza), cerrar (cierra), pensar (piensa), preferir (prefiere).<br>2. <b>o→ue</b> : poder (puede), volver (vuelve), costar (cuesta), dormir (duerme).<br>3. <b>e→i</b> (verbes en -ir) : pedir (pide), servir (sirve).<br>4. Le changement a lieu à yo, tú, usted, ustedes ; jamais à nosotros : queremos, podemos, pedimos.",
   "examples": [
    {
     "es": "¿Puede usted repetir, por favor?",
     "fr": "Pouvez-vous répéter, s'il vous plaît ?"
    },
    {
     "es": "La reunión empieza a las diez.",
     "fr": "La réunion commence à dix heures."
    },
    {
     "es": "La oficina cierra a las seis.",
     "fr": "Le bureau ferme à dix-huit heures."
    },
    {
     "es": "Pido un taxi para usted.",
     "fr": "Je commande un taxi pour vous."
    },
    {
     "es": "Esta habitación cuesta cien euros.",
     "fr": "Cette chambre coûte cent euros."
    },
    {
     "es": "Queremos reservar una mesa.",
     "fr": "Nous voulons réserver une table.",
     "note": "nosotros : pas de changement"
    }
   ],
   "pitfalls": [
    {
     "wrong": "Usted pode firmar",
     "right": "Usted puede firmar",
     "why": "Poder change o→ue à usted."
    },
    {
     "wrong": "Nosotros puedemos",
     "right": "Nosotros podemos",
     "why": "À nosotros la voyelle n'est pas accentuée : pas de changement."
    },
    {
     "wrong": "El banco cerra a las dos",
     "right": "El banco cierra a las dos",
     "why": "Cerrar change e→ie."
    }
   ],
   "exercises": [
    {
     "type": "mcq",
     "q": "« Vous pouvez signer ici » (usted)",
     "opts": [
      "Usted puede firmar aquí",
      "Usted pode firmar aquí",
      "Usted pueda firmar aquí"
     ],
     "correct": 0,
     "why": "Poder, usted → <b>puede</b>."
    },
    {
     "type": "fill",
     "text": "La reunión ___ (empezar) a las nueve en punto.",
     "answers": [
      "empieza"
     ],
     "why": "Empezar : e→ie → <b>empieza</b>."
    },
    {
     "type": "fill",
     "text": "Ustedes ___ (volver) a la oficina el lunes.",
     "answers": [
      "vuelven"
     ],
     "why": "Volver : o→ue → <b>vuelven</b>."
    },
    {
     "type": "speak",
     "es": "¿Puede usted esperar un momento, por favor?",
     "fr": "Pouvez-vous patienter un instant, s'il vous plaît ?"
    },
    {
     "type": "mcq",
     "q": "Quelle est la forme nosotros de « poder » ?",
     "opts": [
      "puedemos",
      "pueden",
      "podemos",
      "podamos"
     ],
     "correct": 2,
     "why": "À nosotros, pas de changement : <b>podemos</b>."
    },
    {
     "type": "fill",
     "text": "Yo ___ (pedir) un café y ustedes ___ (querer) té.",
     "answers": [
      [
       "pido"
      ],
      [
       "quieren"
      ]
     ],
     "why": "Pedir : e→i → pido ; querer : e→ie → quieren."
    },
    {
     "type": "fill",
     "text": "Los billetes de tren ___ (costar) poco hoy.",
     "answers": [
      "cuestan"
     ],
     "why": "Costar : o→ue → <b>cuestan</b>."
    },
    {
     "type": "mcq",
     "q": "La directora ___ (pensar) en una nueva campaña.",
     "opts": [
      "piense",
      "pensa",
      "pienza",
      "piensa"
     ],
     "correct": 3,
     "why": "Pensar : e→ie → <b>piensa</b>."
    },
    {
     "type": "fill",
     "text": "El restaurante del hotel ___ (cerrar) a las once.",
     "answers": [
      "cierra"
     ],
     "why": "Cerrar : e→ie → <b>cierra</b>."
    },
    {
     "type": "fill",
     "text": "¿Usted ___ (preferir) el contrato en papel o en digital?",
     "answers": [
      "prefiere"
     ],
     "why": "Preferir : e→ie → <b>prefiere</b>."
    },
    {
     "type": "mcq",
     "q": "« Nous voulons parler au directeur »",
     "opts": [
      "Quieremos hablar con el director",
      "Queremos hablar con el director",
      "Quiere hablar con el director"
     ],
     "correct": 1,
     "why": "Nosotros : pas de changement → <b>queremos</b>."
    },
    {
     "type": "speak",
     "es": "El médico no duerme mucho cuando trabaja de noche.",
     "fr": "Le médecin ne dort pas beaucoup quand il travaille de nuit."
    }
   ]
  },
  {
   "id": "presente-formel-5",
   "reg": "formal",
   "title": "En ce moment ou d'habitude : estar + gérondif · Formel (usted)",
   "why": "Au téléphone ou au guichet, on distingue ce qu'on fait <b>d'habitude</b> (présent simple) de ce qu'on fait <b>en ce moment</b> (estar + gérondif). Les marqueurs de temps t'aident à choisir.",
   "rule": "1. Habitude : siempre, normalmente, todos los días, cada lunes → présent simple.<br>2. En ce moment : ahora mismo, en este momento → <b>estar + gérondif</b>.<br>3. Gérondif : -ar → <b>-ando</b> ; -er / -ir → <b>-iendo</b> ; leer → leyendo ; pedir → pidiendo ; servir → sirviendo.<br>4. Seul estar change (está, están) ; le gérondif reste invariable.",
   "examples": [
    {
     "es": "El doctor está atendiendo a otro paciente.",
     "fr": "Le docteur est en train de recevoir un autre patient."
    },
    {
     "es": "En este momento estamos revisando su solicitud.",
     "fr": "Nous sommes en train d'examiner votre demande."
    },
    {
     "es": "Normalmente atendemos de nueve a cinco.",
     "fr": "Normalement nous recevons de neuf heures à cinq heures."
    },
    {
     "es": "Ahora mismo estoy escribiendo su correo.",
     "fr": "Je suis justement en train de rédiger votre courriel."
    },
    {
     "es": "¿Está usted esperando a alguien?",
     "fr": "Êtes-vous en train d'attendre quelqu'un ?"
    },
    {
     "es": "Los técnicos están trabajando en el ascensor.",
     "fr": "Les techniciens travaillent sur l'ascenseur en ce moment."
    }
   ],
   "pitfalls": [
    {
     "wrong": "Estoy escribo",
     "right": "Estoy escribiendo",
     "why": "Après estar, on met toujours le gérondif."
    },
    {
     "wrong": "Usted está leiendo",
     "right": "Usted está leyendo",
     "why": "Entre deux voyelles, le i devient y : leyendo."
    },
    {
     "wrong": "Los técnicos están trabajandos",
     "right": "Los técnicos están trabajando",
     "why": "Le gérondif ne prend jamais de -s."
    }
   ],
   "exercises": [
    {
     "type": "mcq",
     "q": "Quelle phrase dit « en ce moment » ?",
     "opts": [
      "Atendemos a los clientes cada día",
      "Estamos atendiendo a un cliente",
      "Siempre atendemos a los clientes"
     ],
     "correct": 1,
     "why": "Action en cours → <b>estar + gérondif</b>."
    },
    {
     "type": "fill",
     "text": "El director ___ (estar) ___ (hablar) por teléfono.",
     "answers": [
      [
       "está"
      ],
      [
       "hablando"
      ]
     ],
     "why": "Está + habl<b>ando</b>."
    },
    {
     "type": "fill",
     "text": "Ahora mismo estoy ___ (preparar) su habitación.",
     "answers": [
      "preparando"
     ],
     "why": "-ar → <b>-ando</b>."
    },
    {
     "type": "speak",
     "es": "Estamos buscando su reserva en el ordenador.",
     "fr": "Nous cherchons votre réservation sur l'ordinateur."
    },
    {
     "type": "mcq",
     "q": "Quel marqueur va avec le présent simple (habitude) ?",
     "opts": [
      "normalmente",
      "ahora mismo",
      "en este momento"
     ],
     "correct": 0,
     "why": "<b>Normalmente</b> exprime l'habitude ; les deux autres, l'action en cours."
    },
    {
     "type": "fill",
     "text": "Normalmente yo ___ (abrir) la oficina a las ocho.",
     "answers": [
      "abro"
     ],
     "why": "Habitude → présent simple ; yo → <b>-o</b>."
    },
    {
     "type": "fill",
     "text": "Los empleados están ___ (leer) el nuevo reglamento.",
     "answers": [
      "leyendo"
     ],
     "why": "leer → le<b>y</b>endo."
    },
    {
     "type": "mcq",
     "q": "« Que faites-vous en ce moment, monsieur ? »",
     "opts": [
      "¿Qué es haciendo usted?",
      "¿Qué está hacer usted?",
      "¿Qué está haciendo usted?"
     ],
     "correct": 2,
     "why": "Estar conjugué + gérondif : <b>está haciendo</b>."
    },
    {
     "type": "fill",
     "text": "El camarero está ___ (servir) el desayuno.",
     "answers": [
      "sirviendo"
     ],
     "why": "servir → s<b>i</b>rviendo."
    },
    {
     "type": "fill",
     "text": "Mi colega ___ (estar) ___ (escribir) un informe para usted.",
     "answers": [
      [
       "está"
      ],
      [
       "escribiendo"
      ]
     ],
     "why": "Está + escrib<b>iendo</b>."
    },
    {
     "type": "mcq",
     "q": "« Chaque lundi, nous organisons une réunion »",
     "opts": [
      "Cada lunes organizamos una reunión",
      "Cada lunes estamos organizando una reunión",
      "Cada lunes organizando una reunión"
     ],
     "correct": 0,
     "why": "« Cada lunes » = habitude → présent simple."
    },
    {
     "type": "speak",
     "es": "Siempre atendemos a los clientes con una sonrisa.",
     "fr": "Nous accueillons toujours les clients avec un sourire."
    }
   ]
  },
  {
   "id": "presente-informel-1",
   "reg": "informal",
   "title": "Questions et négations entre amis · Informel (tú)",
   "why": "Entre amis, on pose des questions et on refuse sans cérémonie. Pas besoin de « est-ce que » : l'ordre reste le même, on ajoute <b>¿ ?</b> ; et la négation se fait simplement avec <b>no</b> devant le verbe.",
   "rule": "1. Question : même ordre que l'affirmation, entourée de ¿ … ? (« ¿Vienes a la fiesta? »).<br>2. Mots interrogatifs devant le verbe : ¿qué?, ¿dónde?, ¿cuándo?, ¿por qué?<br>3. Négation : <b>no</b> juste avant le verbe (« No salgo hoy »).<br>4. « Ne … rien » : <b>no … nada</b> (« No quiero nada »).<br>5. Pas d'auxiliaire : le verbe conjugué suffit.",
   "examples": [
    {
     "es": "¿Vienes a mi casa esta noche?",
     "fr": "Tu viens chez moi ce soir ?"
    },
    {
     "es": "¿Dónde vives ahora?",
     "fr": "Tu habites où maintenant ?"
    },
    {
     "es": "No quiero postre, gracias.",
     "fr": "Je ne veux pas de dessert, merci."
    },
    {
     "es": "¿Por qué no sales con nosotros?",
     "fr": "Pourquoi tu ne sors pas avec nous ?"
    },
    {
     "es": "Mi hermano no come carne.",
     "fr": "Mon frère ne mange pas de viande."
    },
    {
     "es": "No sé nada de esa película.",
     "fr": "Je ne sais rien de ce film."
    }
   ],
   "pitfalls": [
    {
     "wrong": "Vienes a la fiesta?",
     "right": "¿Vienes a la fiesta?",
     "why": "En espagnol, le point d'interrogation s'ouvre aussi avec ¿."
    },
    {
     "wrong": "Hago no la cena",
     "right": "No hago la cena",
     "why": "La négation no se place toujours juste avant le verbe."
    },
    {
     "wrong": "No quiero rien",
     "right": "No quiero nada",
     "why": "« Rien » se dit nada."
    }
   ],
   "exercises": [
    {
     "type": "mcq",
     "q": "Comment dit-on « Tu viens à la fête ? »",
     "opts": [
      "¿Vienes la fiesta?",
      "¿Vienes a la fiesta?",
      "Vienes a la fiesta."
     ],
     "correct": 1,
     "why": "Question : ¿ … ? et la préposition <b>a</b> reste nécessaire."
    },
    {
     "type": "fill",
     "text": "¿Dónde ___ (vivir) tus abuelos?",
     "answers": [
      "viven"
     ],
     "why": "Tus abuelos (ils) → <b>-en</b>."
    },
    {
     "type": "fill",
     "text": "Mi sobrino no ___ (querer) verdura.",
     "answers": [
      "quiere"
     ],
     "why": "Querer : e→ie → <b>quiere</b>."
    },
    {
     "type": "speak",
     "es": "¿Qué haces los domingos por la tarde?",
     "fr": "Que fais-tu le dimanche après-midi ?"
    },
    {
     "type": "mcq",
     "q": "« Je ne sais rien »",
     "opts": [
      "No sé nada",
      "Sé no nada",
      "No sé rien"
     ],
     "correct": 0,
     "why": "<b>No</b> avant le verbe, puis <b>nada</b>."
    },
    {
     "type": "fill",
     "text": "Yo no ___ (tener) tiempo hoy.",
     "answers": [
      "tengo"
     ],
     "why": "Tener, yo → <b>tengo</b>."
    },
    {
     "type": "fill",
     "text": "¿Cuándo ___ (llegar) tus amigos y qué ___ (traer) tú?",
     "answers": [
      [
       "llegan"
      ],
      [
       "traes"
      ]
     ],
     "why": "Tus amigos → llegan ; tú → traes."
    },
    {
     "type": "mcq",
     "q": "« Où habites-tu ? » (à un ami)",
     "opts": [
      "¿Dónde vivo?",
      "¿Dónde vive?",
      "¿Dónde vivir?",
      "¿Dónde vives?"
     ],
     "correct": 3,
     "why": "Tú → <b>vives</b>."
    },
    {
     "type": "fill",
     "text": "Mis padres no ___ (salir) mucho los fines de semana.",
     "answers": [
      "salen"
     ],
     "why": "Salir, ellos → <b>salen</b>."
    },
    {
     "type": "fill",
     "text": "¿Tú ___ (escribir) a tu madre cada domingo?",
     "answers": [
      "escribes"
     ],
     "why": "Tú → <b>-es</b>."
    },
    {
     "type": "mcq",
     "q": "Quelle phrase est correcte ?",
     "opts": [
      "Hago no la cena",
      "No la cena hago",
      "No hago la cena"
     ],
     "correct": 2,
     "why": "<b>No</b> se place juste avant le verbe."
    },
    {
     "type": "speak",
     "es": "Hoy no trabajo, así que descanso en casa.",
     "fr": "Aujourd'hui je ne travaille pas, donc je me repose à la maison."
    }
   ]
  }
 ],
 "temps-ir-a": [
  {
   "id": "ir-a-formel-1",
   "reg": "formal",
   "title": "Usted et ustedes : va et van · Formel (usted)",
   "why": "Au bureau, en clientèle ou à l'accueil, on vouvoie : il faut donc maîtriser <b>va</b> (usted) et <b>van</b> (ustedes) avant toute autre forme.",
   "rule": "1. <b>usted</b> prend la forme de él/ella : <b>va a</b> + infinitif.<br>2. <b>ustedes</b> prend la forme de ellos : <b>van a</b> + infinitif.<br>3. Jamais <b>vas</b> ni <b>vais</b> avec le vouvoiement.<br>4. La préposition <b>a</b> reste obligatoire.",
   "examples": [
    {
     "es": "Señor López, usted va a recibir el pedido el lunes.",
     "fr": "Monsieur López, vous allez recevoir la commande lundi."
    },
    {
     "es": "Los clientes van a llegar a las diez.",
     "fr": "Les clients vont arriver à dix heures."
    },
    {
     "es": "La directora va a firmar el contrato hoy.",
     "fr": "La directrice va signer le contrat aujourd'hui."
    },
    {
     "es": "Ustedes van a esperar en la sala, por favor.",
     "fr": "Vous allez attendre dans la salle, s'il vous plaît."
    },
    {
     "es": "Usted va a pagar en la caja.",
     "fr": "Vous allez payer à la caisse."
    }
   ],
   "pitfalls": [
    {
     "wrong": "Usted vas a firmar",
     "right": "Usted va a firmar",
     "why": "<b>vas</b> est la forme de tú. Avec usted, on utilise la forme de la 3e personne : va."
    },
    {
     "wrong": "Ustedes vais a esperar",
     "right": "Ustedes van a esperar",
     "why": "<b>vais</b> correspond à vosotros (amis, famille). Avec ustedes, c'est <b>van</b>."
    },
    {
     "wrong": "Usted va firmar",
     "right": "Usted va a firmar",
     "why": "Comme en toute situation, la préposition <b>a</b> ne peut pas disparaître."
    }
   ],
   "exercises": [
    {
     "type": "mcq",
     "q": "« Vous (singulier, poli) allez signer » =",
     "opts": [
      "Usted vas a firmar",
      "Usted va a firmar",
      "Usted voy a firmar"
     ],
     "correct": 1,
     "why": "usted → forme de la 3e personne : <b>va</b> a firmar."
    },
    {
     "type": "fill",
     "text": "Señora Ruiz, usted ___ a recibir la factura por correo.",
     "answers": [
      "va"
     ],
     "why": "usted → <b>va</b>."
    },
    {
     "type": "fill",
     "text": "Los empleados ___ a ___ (leer) el informe antes de la reunión.",
     "answers": [
      [
       "van"
      ],
      [
       "leer"
      ]
     ],
     "why": "los empleados = ellos → <b>van</b> ; infinitif leer."
    },
    {
     "type": "speak",
     "es": "La directora va a firmar el contrato hoy.",
     "fr": "La directrice va signer le contrat aujourd'hui."
    },
    {
     "type": "mcq",
     "q": "« Vous (plusieurs personnes) allez attendre ici » =",
     "opts": [
      "Ustedes va a esperar aquí",
      "Ustedes vais a esperar aquí",
      "Ustedes van a esperar aquí"
     ],
     "correct": 2,
     "why": "ustedes → <b>van</b> a + infinitif."
    },
    {
     "type": "fill",
     "text": "Señor Gil, usted ___ a viajar a Madrid en tren.",
     "answers": [
      "va"
     ],
     "why": "usted → <b>va</b>."
    },
    {
     "type": "fill",
     "text": "Los clientes ___ a llegar a las diez.",
     "answers": [
      "van"
     ],
     "why": "los clientes = ellos → <b>van</b>."
    },
    {
     "type": "mcq",
     "q": "Quelle phrase est correcte ?",
     "opts": [
      "El gerente va a llamar al cliente.",
      "El gerente va llamar al cliente.",
      "El gerente va a llama al cliente."
     ],
     "correct": 0,
     "why": "va <b>a</b> + infinitif, sans conjuguer le deuxième verbe."
    },
    {
     "type": "fill",
     "text": "Ustedes van ___ pagar en la caja.",
     "answers": [
      "a"
     ],
     "why": "ir <b>a</b> + infinitif : la préposition est obligatoire."
    },
    {
     "type": "speak",
     "es": "Ustedes van a esperar en la sala, por favor.",
     "fr": "Vous allez attendre dans la salle, s'il vous plaît."
    },
    {
     "type": "mcq",
     "q": "Avec « usted », quelle forme de ir utilise-t-on ?",
     "opts": [
      "vas",
      "vais",
      "van",
      "va"
     ],
     "correct": 3,
     "why": "usted partage la forme de él/ella : <b>va</b>."
    },
    {
     "type": "fill",
     "text": "El doctor ___ a ___ (atender) al paciente ahora.",
     "answers": [
      [
       "va"
      ],
      [
       "atender"
      ]
     ],
     "why": "el doctor = él → <b>va</b> ; infinitif atender."
    }
   ]
  },
  {
   "id": "ir-a-formel-2",
   "reg": "formal",
   "title": "Questions et négations polies · Formel (usted)",
   "why": "À la banque, à l'hôtel ou au restaurant, on pose surtout des <b>questions</b> et on refuse poliment : il faut savoir placer <b>no</b> et ne pas oublier le <b>a</b>.",
   "rule": "1. Question : ¿ + <b>va a</b> / <b>van a</b> + infinitif ?<br>2. Négation : <b>no</b> juste devant ir (« no va a esperar »).<br>3. Mot interrogatif au début : ¿Qué va a tomar ? ¿Cuándo va a llegar ?<br>4. Le sujet (usted, ustedes) est facultatif.",
   "examples": [
    {
     "es": "¿Va a pagar con tarjeta?",
     "fr": "Vous allez payer par carte ?"
    },
    {
     "es": "¿Qué va a tomar, señor?",
     "fr": "Que prendrez-vous, monsieur ?"
    },
    {
     "es": "No vamos a cobrar ninguna comisión.",
     "fr": "Nous n'allons facturer aucune commission."
    },
    {
     "es": "¿Van a necesitar una habitación doble?",
     "fr": "Vous allez avoir besoin d'une chambre double ?"
    },
    {
     "es": "¿Cuándo va a llegar su equipaje?",
     "fr": "Quand va arriver votre bagage ?"
    }
   ],
   "pitfalls": [
    {
     "wrong": "¿Va pagar con tarjeta?",
     "right": "¿Va a pagar con tarjeta?",
     "why": "Même dans une question, la préposition <b>a</b> est obligatoire."
    },
    {
     "wrong": "Usted va a no esperar",
     "right": "Usted no va a esperar",
     "why": "<b>No</b> se place devant le verbe ir, pas devant l'infinitif."
    },
    {
     "wrong": "¿Vas a pagar con tarjeta? (à un client)",
     "right": "¿Va a pagar con tarjeta?",
     "why": "À un client, on vouvoie : <b>va</b> et non vas."
    }
   ],
   "exercises": [
    {
     "type": "mcq",
     "q": "« Vous allez payer par carte ? » =",
     "opts": [
      "¿Vas a pagar con tarjeta?",
      "¿Va pagar con tarjeta?",
      "¿Va a pagar con tarjeta?"
     ],
     "correct": 2,
     "why": "Vouvoiement : <b>va a</b> + infinitif."
    },
    {
     "type": "fill",
     "text": "¿Qué ___ a tomar, señora?",
     "answers": [
      "va"
     ],
     "why": "usted → <b>va</b>."
    },
    {
     "type": "fill",
     "text": "Nosotros no ___ a cobrar ninguna comisión.",
     "answers": [
      "vamos"
     ],
     "why": "nosotros → <b>vamos</b>, avec no devant."
    },
    {
     "type": "speak",
     "es": "¿Va a pagar con tarjeta o en efectivo?",
     "fr": "Vous allez payer par carte ou en espèces ?"
    },
    {
     "type": "mcq",
     "q": "« Vous n'allez pas attendre » (usted) =",
     "opts": [
      "Usted no va a esperar",
      "Usted va a no esperar",
      "Usted va no a esperar"
     ],
     "correct": 0,
     "why": "<b>No</b> se place juste devant va."
    },
    {
     "type": "fill",
     "text": "¿Cuándo ___ a llegar su equipaje, señor Díaz?",
     "answers": [
      "va"
     ],
     "why": "su equipaje = él → <b>va</b>."
    },
    {
     "type": "fill",
     "text": "¿Ustedes ___ a necesitar una habitación doble?",
     "answers": [
      "van"
     ],
     "why": "ustedes → <b>van</b>."
    },
    {
     "type": "mcq",
     "q": "Quelle question est correcte ?",
     "opts": [
      "¿Van venir ustedes mañana?",
      "¿Van a venir ustedes mañana?",
      "¿Vas a venir ustedes mañana?"
     ],
     "correct": 1,
     "why": "ustedes → <b>van a</b> + infinitif."
    },
    {
     "type": "fill",
     "text": "Usted no ___ a esperar mucho; el médico está libre.",
     "answers": [
      "va"
     ],
     "why": "usted → <b>va</b>, avec no devant."
    },
    {
     "type": "speak",
     "es": "No vamos a cerrar la oficina antes de las cinco.",
     "fr": "Nous n'allons pas fermer le bureau avant cinq heures."
    },
    {
     "type": "mcq",
     "q": "« Les clients ne vont pas répondre » =",
     "opts": [
      "Los clientes no van responder",
      "Los clientes van a no responder",
      "Los clientes no vamos a responder",
      "Los clientes no van a responder"
     ],
     "correct": 3,
     "why": "los clientes = ellos → no <b>van a</b> + infinitif."
    },
    {
     "type": "fill",
     "text": "¿Usted ___ a ___ (abrir) una cuenta hoy?",
     "answers": [
      [
       "va"
      ],
      [
       "abrir"
      ]
     ],
     "why": "usted → <b>va</b> ; infinitif abrir."
    }
   ]
  },
  {
   "id": "ir-a-formel-3",
   "reg": "formal",
   "title": "Marqueurs de temps dans un courriel · Formel (usted)",
   "why": "Dans un courriel ou un rendez-vous, on précise toujours <b>quand</b>. Un bon marqueur de temps rend le plan clair et professionnel.",
   "rule": "1. Placer le marqueur au début ou à la fin : <b>Mañana</b> voy a… / Voy a… <b>el lunes</b>.<br>2. Jours : <b>el lunes</b>, <b>el próximo martes</b> (pas de « en »).<br>3. Durée à venir : <b>dentro de</b> diez minutos.<br>4. Autres : <b>pasado mañana</b>, <b>la semana próxima</b>, <b>el mes que viene</b>, <b>mañana por la mañana</b>.",
   "examples": [
    {
     "es": "Voy a enviar el presupuesto el lunes por la mañana.",
     "fr": "Je vais envoyer le devis lundi matin."
    },
    {
     "es": "Vamos a abrir la nueva oficina el mes que viene.",
     "fr": "Nous allons ouvrir le nouveau bureau le mois prochain."
    },
    {
     "es": "La reunión va a empezar dentro de diez minutos.",
     "fr": "La réunion va commencer dans dix minutes."
    },
    {
     "es": "Pasado mañana vamos a recibir a los inspectores.",
     "fr": "Après-demain, nous allons recevoir les inspecteurs."
    },
    {
     "es": "El próximo martes van a entregar los documentos.",
     "fr": "Mardi prochain, ils vont remettre les documents."
    },
    {
     "es": "Esta tarde voy a revisar su solicitud.",
     "fr": "Cet après-midi, je vais examiner votre demande."
    }
   ],
   "pitfalls": [
    {
     "wrong": "Voy a enviarlo en lunes",
     "right": "Voy a enviarlo el lunes",
     "why": "Pour un jour de la semaine, on utilise l'article <b>el</b>, jamais « en »."
    },
    {
     "wrong": "Empieza dentro diez minutos",
     "right": "Empieza dentro de diez minutos",
     "why": "L'expression complète est <b>dentro de</b> + durée."
    },
    {
     "wrong": "Voy a llamar mañana a la mañana",
     "right": "Voy a llamar mañana por la mañana",
     "why": "« Demain matin » se dit <b>mañana por la mañana</b>."
    }
   ],
   "exercises": [
    {
     "type": "mcq",
     "q": "« Après-demain » =",
     "opts": [
      "mañana",
      "anteayer",
      "pasado mañana",
      "la semana próxima"
     ],
     "correct": 2,
     "why": "<b>Pasado mañana</b> = après-demain."
    },
    {
     "type": "fill",
     "text": "La reunión va a empezar ___ diez minutos (dans).",
     "answers": [
      "dentro de"
     ],
     "why": "Durée à venir : <b>dentro de</b> + durée."
    },
    {
     "type": "fill",
     "text": "Vamos a abrir la nueva oficina el mes ___ viene.",
     "answers": [
      "que"
     ],
     "why": "« Le mois prochain » = el mes <b>que</b> viene."
    },
    {
     "type": "speak",
     "es": "Voy a enviar el presupuesto el lunes por la mañana.",
     "fr": "Je vais envoyer le devis lundi matin."
    },
    {
     "type": "mcq",
     "q": "Quel marqueur va naturellement avec « voy a + infinitif » ?",
     "opts": [
      "la semana próxima",
      "ayer",
      "el año pasado",
      "hace una hora"
     ],
     "correct": 0,
     "why": "Un futur proche se combine avec un moment à venir : <b>la semana próxima</b>."
    },
    {
     "type": "fill",
     "text": "El próximo martes los clientes ___ a firmar el contrato.",
     "answers": [
      "van"
     ],
     "why": "los clientes = ellos → <b>van</b>."
    },
    {
     "type": "fill",
     "text": "Esta tarde yo ___ a revisar su solicitud.",
     "answers": [
      "voy"
     ],
     "why": "yo → <b>voy</b>."
    },
    {
     "type": "mcq",
     "q": "« Dans deux jours » =",
     "opts": [
      "hace dos días",
      "desde dos días",
      "dentro de dos días"
     ],
     "correct": 2,
     "why": "<b>Dentro de</b> + durée = dans + durée."
    },
    {
     "type": "fill",
     "text": "___ mañana vamos a recibir a los inspectores.",
     "answers": [
      "Pasado",
      "pasado"
     ],
     "why": "<b>Pasado mañana</b> = après-demain."
    },
    {
     "type": "speak",
     "es": "La reunión va a empezar dentro de diez minutos.",
     "fr": "La réunion va commencer dans dix minutes."
    },
    {
     "type": "mcq",
     "q": "« Nous allons livrer la commande jeudi prochain » : quel marqueur ?",
     "opts": [
      "el jueves pasado",
      "hace el jueves",
      "el jueves próximo"
     ],
     "correct": 2,
     "why": "<b>El jueves próximo</b> = jeudi prochain."
    },
    {
     "type": "fill",
     "text": "El gerente ___ a ___ (llamar) al cliente el lunes.",
     "answers": [
      [
       "va"
      ],
      [
       "llamar"
      ]
     ],
     "why": "el gerente = él → <b>va</b> ; infinitif llamar."
    }
   ]
  },
  {
   "id": "ir-a-formel-4",
   "reg": "formal",
   "title": "Plan, projet, obligation, souhait · Formel (usted)",
   "why": "En contexte professionnel, on nuance : <b>vamos a</b> annonce une décision, <b>pensamos</b> un projet, <b>queremos</b> un souhait, <b>tiene que</b> une obligation. Chaque structure se construit avec un seul verbe conjugué.",
   "rule": "1. <b>ir a</b> + inf. : décision, plan ferme.<br>2. <b>pensar</b> + inf. (sans a) : intention. e→ie : pienso, piensa, pensamos, piensan.<br>3. <b>querer</b> + inf. : souhait. e→ie : quiero, quiere, queremos, quieren.<br>4. <b>tener que</b> + inf. : obligation (« que » obligatoire). Usted → tiene que.",
   "examples": [
    {
     "es": "Pensamos contratar a dos personas este año.",
     "fr": "Nous comptons embaucher deux personnes cette année."
    },
    {
     "es": "Queremos mejorar el servicio al cliente.",
     "fr": "Nous voulons améliorer le service client."
    },
    {
     "es": "Tiene que presentar su pasaporte en la recepción.",
     "fr": "Vous devez présenter votre passeport à la réception."
    },
    {
     "es": "Vamos a cambiar el horario de atención.",
     "fr": "Nous allons changer les horaires d'accueil."
    },
    {
     "es": "El director piensa viajar a Barcelona en mayo.",
     "fr": "Le directeur compte aller à Barcelone en mai."
    },
    {
     "es": "Los clientes tienen que rellenar este formulario.",
     "fr": "Les clients doivent remplir ce formulaire."
    }
   ],
   "pitfalls": [
    {
     "wrong": "Pensamos a contratar",
     "right": "Pensamos contratar",
     "why": "Contrairement à ir, <b>pensar</b> se construit sans « a » devant l'infinitif."
    },
    {
     "wrong": "Tiene rellenar este formulario",
     "right": "Tiene que rellenar este formulario",
     "why": "L'obligation exige <b>tener que</b> + infinitif."
    },
    {
     "wrong": "Usted quiere a hablar con el gerente",
     "right": "Usted quiere hablar con el gerente",
     "why": "<b>Querer</b> est suivi directement de l'infinitif, sans préposition."
    }
   ],
   "exercises": [
    {
     "type": "mcq",
     "q": "« Nous comptons embaucher » =",
     "opts": [
      "Pensamos a contratar",
      "Pensamos contratar",
      "Pensamos que contratar"
     ],
     "correct": 1,
     "why": "<b>Pensar</b> + infinitif, sans préposition."
    },
    {
     "type": "fill",
     "text": "Usted ___ (tener) que presentar su pasaporte.",
     "answers": [
      "tiene"
     ],
     "why": "usted → <b>tiene</b> que."
    },
    {
     "type": "fill",
     "text": "Nosotros ___ (querer) mejorar el servicio al cliente.",
     "answers": [
      "queremos"
     ],
     "why": "nosotros → <b>queremos</b> (pas de changement e→ie)."
    },
    {
     "type": "speak",
     "es": "Pensamos contratar a dos personas este año.",
     "fr": "Nous comptons embaucher deux personnes cette année."
    },
    {
     "type": "mcq",
     "q": "« Vous devez remplir ce formulaire » (usted) =",
     "opts": [
      "Tiene que rellenar este formulario",
      "Tiene rellenar este formulario",
      "Tiene a rellenar este formulario"
     ],
     "correct": 0,
     "why": "Obligation : tener <b>que</b> + infinitif."
    },
    {
     "type": "fill",
     "text": "El director ___ (pensar) viajar a Barcelona en mayo.",
     "answers": [
      "piensa"
     ],
     "why": "pensar e→ie : él → <b>piensa</b>."
    },
    {
     "type": "fill",
     "text": "Los clientes tienen ___ rellenar este formulario.",
     "answers": [
      "que"
     ],
     "why": "tener <b>que</b> + infinitif."
    },
    {
     "type": "mcq",
     "q": "Laquelle exprime la décision la plus ferme ?",
     "opts": [
      "Queremos cambiar el horario.",
      "Pensamos cambiar el horario.",
      "Vamos a cambiar el horario."
     ],
     "correct": 2,
     "why": "<b>Vamos a</b> annonce un plan décidé."
    },
    {
     "type": "fill",
     "text": "Nosotros ___ a cambiar el horario de atención.",
     "answers": [
      "vamos"
     ],
     "why": "nosotros → <b>vamos</b> a + infinitif."
    },
    {
     "type": "speak",
     "es": "Los clientes tienen que rellenar este formulario.",
     "fr": "Les clients doivent remplir ce formulaire."
    },
    {
     "type": "mcq",
     "q": "Quelle phrase est fausse ?",
     "opts": [
      "Queremos viajar en mayo.",
      "Vamos a viajar en mayo.",
      "Tenemos que viajar en mayo.",
      "Pensamos a viajar en mayo."
     ],
     "correct": 3,
     "why": "<b>Pensar</b> n'a pas de « a » devant l'infinitif."
    },
    {
     "type": "fill",
     "text": "¿Ustedes ___ (querer) hablar con el gerente?",
     "answers": [
      "quieren"
     ],
     "why": "querer e→ie : ustedes → <b>quieren</b>."
    }
   ]
  },
  {
   "id": "ir-a-formel-5",
   "reg": "formal",
   "title": "Pièges francophones et phrases longues · Formel (usted)",
   "why": "Les francophones oublient le <b>a</b>, confondent « aller quelque part » et « aller faire » et cherchent un verbe « aller » à l'infinitif. Ici, on s'entraîne sur des phrases plus longues d'un contexte professionnel.",
   "rule": "1. <b>ir a</b> + lieu = aller à (voy <b>a</b> la oficina).<br>2. <b>ir a</b> + infinitif = aller faire.<br>3. « Aller » à l'infinitif se dit <b>ir</b> : voy a ir, va a ir.<br>4. <b>Vamos a</b> + inf. peut aussi inviter à agir ensemble : Vamos a empezar.",
   "examples": [
    {
     "es": "Voy a la oficina a las ocho.",
     "fr": "Je vais au bureau à huit heures."
    },
    {
     "es": "Mañana voy a ir al banco para abrir una cuenta.",
     "fr": "Demain, je vais aller à la banque pour ouvrir un compte."
    },
    {
     "es": "Vamos a empezar la reunión, señores.",
     "fr": "Commençons la réunion, messieurs."
    },
    {
     "es": "Si llega tarde, el hotel va a cobrar una noche más.",
     "fr": "Si vous arrivez en retard, l'hôtel va facturer une nuit de plus."
    },
    {
     "es": "Después de la cita, los pacientes van a pasar a la sala de espera.",
     "fr": "Après le rendez-vous, les patients vont passer en salle d'attente."
    }
   ],
   "pitfalls": [
    {
     "wrong": "Voy la oficina a las ocho",
     "right": "Voy a la oficina a las ocho",
     "why": "Même pour un lieu, <b>ir</b> exige la préposition <b>a</b>."
    },
    {
     "wrong": "Mañana vamos recibir al cliente",
     "right": "Mañana vamos a recibir al cliente",
     "why": "Il faut toujours <b>a</b> entre vamos et l'infinitif."
    },
    {
     "wrong": "Voy a aller al banco",
     "right": "Voy a ir al banco",
     "why": "Le verbe espagnol « aller » à l'infinitif est <b>ir</b>, pas « aller »."
    }
   ],
   "exercises": [
    {
     "type": "mcq",
     "q": "« Je vais au bureau à huit heures » =",
     "opts": [
      "Voy a ir oficina a las ocho",
      "Voy a la oficina a las ocho",
      "Voy la oficina a las ocho"
     ],
     "correct": 1,
     "why": "ir <b>a</b> + lieu."
    },
    {
     "type": "fill",
     "text": "Mañana ___ a ir al banco para abrir una cuenta.",
     "answers": [
      "voy"
     ],
     "why": "yo → <b>voy</b> a ir."
    },
    {
     "type": "fill",
     "text": "Si usted llega tarde, el hotel ___ a cobrar una noche más.",
     "answers": [
      "va"
     ],
     "why": "el hotel = él → <b>va</b> a + infinitif."
    },
    {
     "type": "speak",
     "es": "Vamos a empezar la reunión, señores.",
     "fr": "Commençons la réunion, messieurs."
    },
    {
     "type": "mcq",
     "q": "Dans « Vamos a empezar, señores », que signifie « vamos a » ?",
     "opts": [
      "nous sommes déjà partis",
      "nous irons plus tard",
      "commençons (invitation à faire ensemble)"
     ],
     "correct": 2,
     "why": "<b>Vamos a</b> + infinitif invite aussi à agir ensemble."
    },
    {
     "type": "fill",
     "text": "Después de la cita, los pacientes ___ a pasar a la sala de espera.",
     "answers": [
      "van"
     ],
     "why": "los pacientes = ellos → <b>van</b>."
    },
    {
     "type": "fill",
     "text": "Esta tarde yo ___ al banco.",
     "answers": [
      "voy"
     ],
     "why": "yo → <b>voy</b> (aller à un lieu)."
    },
    {
     "type": "mcq",
     "q": "Quelle phrase est correcte ?",
     "opts": [
      "Mañana vamos recibir al cliente.",
      "Mañana vamos a recibimos al cliente.",
      "Mañana vamos de recibir al cliente.",
      "Mañana vamos a recibir al cliente."
     ],
     "correct": 3,
     "why": "vamos <b>a</b> + infinitif."
    },
    {
     "type": "fill",
     "text": "El gerente va a ___ (ir) a la reunión con el cliente.",
     "answers": [
      "ir"
     ],
     "why": "« Va a ir » est correct : va (conjugué) + a + <b>ir</b> (infinitif)."
    },
    {
     "type": "speak",
     "es": "Mañana voy a ir al banco para abrir una cuenta.",
     "fr": "Demain, je vais aller à la banque pour ouvrir un compte."
    },
    {
     "type": "mcq",
     "q": "« Vous allez voyager en avion » (usted) =",
     "opts": [
      "Usted va a viajar en avión.",
      "Usted va viajar en avión.",
      "Usted viaja a ir en avión."
     ],
     "correct": 0,
     "why": "usted → <b>va a</b> + infinitif."
    },
    {
     "type": "fill",
     "text": "Señores, ustedes ___ a ___ (recibir) los documentos por correo.",
     "answers": [
      [
       "van"
      ],
      [
       "recibir"
      ]
     ],
     "why": "ustedes → <b>van</b> ; infinitif recibir."
    }
   ]
  },
  {
   "id": "ir-a-informel-1",
   "reg": "informal",
   "title": "Tú, nosotros, vosotros : les formes entre amis · Informel (tú)",
   "why": "Entre amis et en famille, on utilise surtout <b>voy</b>, <b>vas</b>, <b>vamos</b> et, en Espagne, <b>vais</b> pour « vous » au pluriel. Mieux vaut les automatiser.",
   "rule": "1. yo <b>voy</b>, tú <b>vas</b>, él/ella <b>va</b>.<br>2. nosotros <b>vamos</b>, vosotros <b>vais</b>, ellos <b>van</b>.<br>3. Toujours suivi de <b>a</b> + infinitif.<br>4. Le pronom sujet est souvent omis : ¿Vais a venir ?",
   "examples": [
    {
     "es": "Voy a llamar a mi hermana esta noche.",
     "fr": "Je vais appeler ma sœur ce soir."
    },
    {
     "es": "¿Vais a venir a mi cumpleaños el sábado?",
     "fr": "Vous allez venir à mon anniversaire samedi ?"
    },
    {
     "es": "Mi madre va a hacer una tarta.",
     "fr": "Ma mère va faire un gâteau."
    },
    {
     "es": "Nosotros vamos a ver una película.",
     "fr": "Nous allons regarder un film."
    },
    {
     "es": "¿Vas a ir a la playa con Lucía?",
     "fr": "Tu vas aller à la plage avec Lucía ?"
    },
    {
     "es": "Mis amigos van a jugar al fútbol el sábado.",
     "fr": "Mes amis vont jouer au foot samedi."
    }
   ],
   "pitfalls": [
    {
     "wrong": "Tú va a venir",
     "right": "Tú vas a venir",
     "why": "tú → <b>vas</b>. Va est la forme de él/ella ou usted."
    },
    {
     "wrong": "Vosotros van a venir",
     "right": "Vosotros vais a venir",
     "why": "En Espagne, vosotros → <b>vais</b>. Van va avec ellos ou ustedes."
    },
    {
     "wrong": "Tú vas venir",
     "right": "Tú vas a venir",
     "why": "La préposition <b>a</b> est obligatoire."
    }
   ],
   "exercises": [
    {
     "type": "mcq",
     "q": "Quelle forme pour « vosotros » ?",
     "opts": [
      "vas",
      "van",
      "vais",
      "vamos"
     ],
     "correct": 2,
     "why": "vosotros → <b>vais</b>."
    },
    {
     "type": "fill",
     "text": "Yo ___ a llamar a mi hermana esta noche.",
     "answers": [
      "voy"
     ],
     "why": "yo → <b>voy</b>."
    },
    {
     "type": "fill",
     "text": "¿Vosotros ___ a venir a mi cumpleaños?",
     "answers": [
      "vais"
     ],
     "why": "vosotros → <b>vais</b>."
    },
    {
     "type": "speak",
     "es": "¿Vais a venir a mi cumpleaños el sábado?",
     "fr": "Vous allez venir à mon anniversaire samedi ?"
    },
    {
     "type": "mcq",
     "q": "« Tu vas jouer au foot » =",
     "opts": [
      "Vas a jugar al fútbol",
      "Va a jugar al fútbol",
      "Vais a jugar al fútbol"
     ],
     "correct": 0,
     "why": "tú → <b>vas</b> a + infinitif."
    },
    {
     "type": "fill",
     "text": "Mi madre ___ a hacer una tarta.",
     "answers": [
      "va"
     ],
     "why": "mi madre = ella → <b>va</b>."
    },
    {
     "type": "fill",
     "text": "Nosotros ___ a ___ (ver) una película.",
     "answers": [
      [
       "vamos"
      ],
      [
       "ver"
      ]
     ],
     "why": "nosotros → <b>vamos</b> ; infinitif ver."
    },
    {
     "type": "mcq",
     "q": "« Mes amis vont jouer au foot » =",
     "opts": [
      "Mis amigos va a jugar al fútbol",
      "Mis amigos vais a jugar al fútbol",
      "Mis amigos vamos a jugar al fútbol",
      "Mis amigos van a jugar al fútbol"
     ],
     "correct": 3,
     "why": "mis amigos = ellos → <b>van</b>."
    },
    {
     "type": "fill",
     "text": "¿Tú ___ a ir a la playa con Lucía?",
     "answers": [
      "vas"
     ],
     "why": "tú → <b>vas</b>."
    },
    {
     "type": "speak",
     "es": "Mis padres van a venir en Navidad.",
     "fr": "Mes parents vont venir à Noël."
    },
    {
     "type": "mcq",
     "q": "Quelle phrase est fausse ?",
     "opts": [
      "Yo voy a cantar.",
      "Tú va a cantar.",
      "Ellas van a cantar.",
      "Vosotros vais a cantar."
     ],
     "correct": 1,
     "why": "tú → <b>vas</b>, pas va."
    },
    {
     "type": "fill",
     "text": "Mis primos ___ a ___ (dormir) en mi casa.",
     "answers": [
      [
       "van"
      ],
      [
       "dormir"
      ]
     ],
     "why": "mis primos = ellos → <b>van</b> ; infinitif dormir."
    }
   ]
  },
  {
   "id": "ir-a-informel-2",
   "reg": "informal",
   "title": "Plans entre amis : projet, envie, suggestion · Informel (tú)",
   "why": "Entre amis, on demande « qu'est-ce que tu vas faire ? », on propose (« vamos a… »), on refuse et on s'excuse : tout cela combine <b>ir a</b> avec les autres façons de parler d'un plan.",
   "rule": "1. Question : ¿Qué <b>vas a</b> hacer ?<br>2. <b>Vamos a</b> + inf. = suggestion (« allons… »).<br>3. Négation : <b>No voy a</b> salir. Obligation : <b>tengo que</b> estudiar.<br>4. <b>Pienso</b> + inf. = je compte ; <b>quiero</b> + inf. = j'ai envie de.",
   "examples": [
    {
     "es": "¿Qué vas a hacer este fin de semana?",
     "fr": "Qu'est-ce que tu vas faire ce week-end ?"
    },
    {
     "es": "Vamos a tomar algo después del trabajo.",
     "fr": "Allons boire un verre après le travail."
    },
    {
     "es": "No voy a salir esta noche; tengo que estudiar.",
     "fr": "Je ne vais pas sortir ce soir ; je dois étudier."
    },
    {
     "es": "Pienso comprar una bici nueva.",
     "fr": "Je compte acheter un vélo neuf."
    },
    {
     "es": "Mañana quiero dormir hasta las once.",
     "fr": "Demain, je veux dormir jusqu'à onze heures."
    },
    {
     "es": "El verano que viene vamos a ir a Portugal con mis primos.",
     "fr": "L'été prochain, nous allons aller au Portugal avec mes cousins."
    }
   ],
   "pitfalls": [
    {
     "wrong": "¿Qué vas hacer?",
     "right": "¿Qué vas a hacer?",
     "why": "Même dans une question avec « qué », le <b>a</b> reste obligatoire."
    },
    {
     "wrong": "Voy a salir no",
     "right": "No voy a salir",
     "why": "<b>No</b> se place toujours devant ir."
    },
    {
     "wrong": "Tengo estudiar",
     "right": "Tengo que estudiar",
     "why": "L'obligation exige <b>tener que</b> + infinitif."
    }
   ],
   "exercises": [
    {
     "type": "mcq",
     "q": "« Qu'est-ce que tu vas faire ? » =",
     "opts": [
      "¿Qué vas hacer?",
      "¿Qué va a hacer?",
      "¿Qué vas a hacer?"
     ],
     "correct": 2,
     "why": "tú → <b>vas a</b> + infinitif."
    },
    {
     "type": "fill",
     "text": "Este fin de semana yo ___ a ver a mis abuelos.",
     "answers": [
      "voy"
     ],
     "why": "yo → <b>voy</b>."
    },
    {
     "type": "fill",
     "text": "No ___ a salir esta noche; tengo ___ estudiar.",
     "answers": [
      [
       "voy"
      ],
      [
       "que"
      ]
     ],
     "why": "yo → <b>voy</b> ; obligation : tengo <b>que</b> + infinitif."
    },
    {
     "type": "speak",
     "es": "Vamos a tomar algo después del trabajo.",
     "fr": "Allons boire un verre après le travail."
    },
    {
     "type": "mcq",
     "q": "« Allons dîner ensemble ! » (suggestion) =",
     "opts": [
      "¡Voy a cenar juntos!",
      "¡Vamos a cenar juntos!",
      "¡Van a cenar juntos!"
     ],
     "correct": 1,
     "why": "Pour proposer à plusieurs : <b>vamos a</b> + infinitif."
    },
    {
     "type": "fill",
     "text": "Mañana ___ (querer) dormir hasta las once.",
     "answers": [
      "quiero"
     ],
     "why": "querer e→ie : yo → <b>quiero</b>."
    },
    {
     "type": "fill",
     "text": "El verano que viene vamos a ___ a Portugal con mis primos.",
     "answers": [
      "ir"
     ],
     "why": "vamos a <b>ir</b> : le verbe aller à l'infinitif est ir."
    },
    {
     "type": "mcq",
     "q": "Quelle phrase exprime une obligation ?",
     "opts": [
      "Quiero estudiar esta noche.",
      "Pienso estudiar esta noche.",
      "Voy a estudiar esta noche.",
      "Tengo que estudiar esta noche."
     ],
     "correct": 3,
     "why": "<b>Tener que</b> + infinitif exprime l'obligation."
    },
    {
     "type": "fill",
     "text": "Pienso ___ (comprar) una bici nueva.",
     "answers": [
      "comprar"
     ],
     "why": "pensar est suivi de l'infinitif : pienso <b>comprar</b>."
    },
    {
     "type": "speak",
     "es": "¿Qué vas a hacer este fin de semana?",
     "fr": "Qu'est-ce que tu vas faire ce week-end ?"
    },
    {
     "type": "mcq",
     "q": "Que signifie « No voy a salir » ?",
     "opts": [
      "Je ne vais pas sortir",
      "Je ne suis pas sorti",
      "Je ne sors jamais"
     ],
     "correct": 0,
     "why": "<b>No voy a</b> + infinitif = je ne vais pas…"
    },
    {
     "type": "fill",
     "text": "¿Tú ___ a venir al concierto con nosotros?",
     "answers": [
      "vas"
     ],
     "why": "tú → <b>vas</b>."
    }
   ]
  }
 ],
 "temps-indefinido": [
  {
   "id": "indefinido-formel-1",
   "reg": "formal",
   "title": "Les verbes en -ar à usted et ustedes · Formel (usted)",
   "why": "Au bureau ou avec un client, on raconte ce qui s'est passé avec <b>usted</b> et <b>ustedes</b>. Ces deux pronoms prennent les formes de la <b>3e personne</b> (habló, hablaron), jamais celles de tú.",
   "rule": "1. Enlève -ar : firm-ar → firm-.<br>2. usted / él / ella : <b>-ó</b> (avec accent) → firmó.<br>3. ustedes / ellos : <b>-aron</b> (sans accent) → firmaron.<br>4. yo : <b>-é</b> (avec accent) ; nosotros : <b>-amos</b> (comme au présent).<br>5. Marqueurs : <b>ayer</b>, <b>anoche</b>, <b>el lunes pasado</b>, <b>el mes pasado</b>.",
   "examples": [
    {
     "es": "El lunes pasado usted firmó el contrato.",
     "fr": "Lundi dernier, vous avez signé le contrat."
    },
    {
     "es": "La directora canceló la reunión del jueves.",
     "fr": "La directrice a annulé la réunion de jeudi."
    },
    {
     "es": "El mes pasado le enviamos la factura.",
     "fr": "Le mois dernier, nous vous avons envoyé la facture.",
     "note": "enviamos : même forme qu'au présent"
    },
    {
     "es": "Ayer ayudé a una clienta en la sucursal.",
     "fr": "Hier, j'ai aidé une cliente à l'agence."
    },
    {
     "es": "Ustedes visitaron nuestra oficina en mayo.",
     "fr": "Vous avez visité notre bureau en mai."
    }
   ],
   "pitfalls": [
    {
     "wrong": "Usted firmaste el contrato",
     "right": "Usted firmó el contrato",
     "why": "usted se conjugue comme él / ella : <b>-ó</b>, pas la forme de tú (-aste)."
    },
    {
     "wrong": "Ustedes llamarón",
     "right": "Ustedes llamaron",
     "why": "À la 3e personne du pluriel, <b>-aron</b> ne prend aucun accent."
    },
    {
     "wrong": "Ayer mando un correo",
     "right": "Ayer mandé un correo",
     "why": "Avec ayer, on utilise le passé ; l'accent de <b>-é</b> distingue mandé de mando."
    }
   ],
   "exercises": [
    {
     "type": "mcq",
     "q": "« Hier, vous (usted) avez signé le contrat. »",
     "opts": [
      "Ayer usted firmaste el contrato",
      "Ayer usted firmó el contrato",
      "Ayer usted firmo el contrato"
     ],
     "correct": 1,
     "why": "usted → forme de la 3e personne : <b>firmó</b>, avec accent."
    },
    {
     "type": "fill",
     "text": "Ayer la gerente ___ (llamar) a todos los clientes.",
     "answers": [
      "llamó"
     ],
     "why": "3e personne du singulier en -ar : <b>-ó</b>."
    },
    {
     "type": "fill",
     "text": "Los empleados ___ (terminar) el informe anoche.",
     "answers": [
      "terminaron"
     ],
     "why": "3e personne du pluriel en -ar : <b>-aron</b>."
    },
    {
     "type": "speak",
     "es": "Los clientes llamaron a recepción ayer por la mañana.",
     "fr": "Les clients ont appelé la réception hier matin."
    },
    {
     "type": "mcq",
     "q": "« Vous (ustedes) avez préparé la réunion. »  Ustedes ___ la reunión.",
     "opts": [
      "preparó",
      "prepararán",
      "prepararon"
     ],
     "correct": 2,
     "why": "ustedes → <b>-aron</b> ; prepararán est un futur."
    },
    {
     "type": "fill",
     "text": "Ayer yo ___ (mandar) el correo a la directora.",
     "answers": [
      "mandé"
     ],
     "why": "yo en -ar : <b>-é</b>, avec accent."
    },
    {
     "type": "fill",
     "text": "Ayer usted ___ (esperar) en recepción y el gerente lo ___ (saludar) con una sonrisa.",
     "answers": [
      [
       "esperó"
      ],
      [
       "saludó"
      ]
     ],
     "why": "usted et él → <b>-ó</b> pour les deux verbes."
    },
    {
     "type": "mcq",
     "q": "La señora López ___ con tarjeta ayer. (pagar)",
     "opts": [
      "pagaron",
      "pagó",
      "pagaste"
     ],
     "correct": 1,
     "why": "Un seul sujet à la 3e personne : <b>pagó</b>."
    },
    {
     "type": "fill",
     "text": "El martes ustedes ___ (cancelar) la reserva por teléfono.",
     "answers": [
      "cancelaron"
     ],
     "why": "ustedes en -ar : <b>-aron</b>."
    },
    {
     "type": "speak",
     "es": "Mis colegas trabajaron hasta muy tarde.",
     "fr": "Mes collègues ont travaillé très tard."
    },
    {
     "type": "fill",
     "text": "El mes pasado nosotros ___ (cambiar) de proveedor.",
     "answers": [
      "cambiamos"
     ],
     "why": "nosotros en -ar : <b>-amos</b>, comme au présent ; le contexte dit que c'est passé."
    },
    {
     "type": "mcq",
     "q": "Qu'est-ce qui distingue « trabajo » de « trabajó » ?",
     "opts": [
      "L'accent : trabajó est au passé",
      "Rien, c'est la même chose",
      "trabajó est un futur"
     ],
     "correct": 0,
     "why": "L'accent sur <b>-ó</b> marque le passé (indefinido) ; trabajo sans accent est un présent."
    }
   ]
  },
  {
   "id": "indefinido-formel-2",
   "reg": "formal",
   "title": "Les verbes en -er et -ir à usted et ustedes · Formel (usted)",
   "why": "À la banque, à l'hôtel ou par courriel, on parle de ce qu'on a reçu, ouvert ou décidé. Les verbes en <b>-er</b> et en <b>-ir</b> partagent <b>les mêmes terminaisons</b> au passé : une seule série à retenir.",
   "rule": "1. Enlève -er / -ir : recib-ir → recib-.<br>2. usted / él / ella : <b>-ió</b> → recibió.<br>3. ustedes / ellos : <b>-ieron</b> → recibieron.<br>4. yo : <b>-í</b> (avec accent) ; nosotros : <b>-imos</b>.<br>5. Attention : à nosotros, les verbes en -er changent (comemos → <b>comimos</b>).",
   "examples": [
    {
     "es": "Usted recibió mi correo ayer.",
     "fr": "Vous avez reçu mon courriel hier."
    },
    {
     "es": "Los huéspedes salieron del hotel a las diez.",
     "fr": "Les clients sont sortis de l'hôtel à dix heures."
    },
    {
     "es": "Ayer escribí al servicio de atención al cliente.",
     "fr": "Hier, j'ai écrit au service client."
    },
    {
     "es": "Ustedes decidieron esperar un día más.",
     "fr": "Vous avez décidé d'attendre un jour de plus."
    },
    {
     "es": "El señor Ruiz vendió su apartamento en mayo.",
     "fr": "M. Ruiz a vendu son appartement en mai."
    }
   ],
   "pitfalls": [
    {
     "wrong": "Ustedes recibieron / Ustedes recibeiron",
     "right": "Ustedes recibieron",
     "why": "Il n'y a qu'un « i » devant -eron ou -ieron : la terminaison est <b>-ieron</b>."
    },
    {
     "wrong": "Usted recibí",
     "right": "Usted recibió",
     "why": "<b>-í</b> est la terminaison de yo ; usted prend <b>-ió</b>."
    },
    {
     "wrong": "Ayer nosotros recibemos la carta",
     "right": "Ayer nosotros recibimos la carta",
     "why": "Au passé, nosotros en -er prend <b>-imos</b>, pas -emos."
    }
   ],
   "exercises": [
    {
     "type": "mcq",
     "q": "« Le client a reçu la facture. »",
     "opts": [
      "El cliente recibí la factura",
      "El cliente recibe la factura",
      "El cliente recibió la factura"
     ],
     "correct": 2,
     "why": "3e personne du singulier en -ir : <b>-ió</b>."
    },
    {
     "type": "fill",
     "text": "La recepcionista ___ (abrir) la puerta a los huéspedes.",
     "answers": [
      "abrió"
     ],
     "why": "3e personne du singulier : <b>-ió</b>."
    },
    {
     "type": "fill",
     "text": "Los directores ___ (subir) al segundo piso.",
     "answers": [
      "subieron"
     ],
     "why": "3e personne du pluriel en -ir : <b>-ieron</b>."
    },
    {
     "type": "speak",
     "es": "El banco abrió una cuenta nueva para mi empresa.",
     "fr": "La banque a ouvert un nouveau compte pour mon entreprise."
    },
    {
     "type": "mcq",
     "q": "« Ustedes ___ en Lyon cuatro años. » (vivir)",
     "opts": [
      "vivieron",
      "viveron",
      "vivaron"
     ],
     "correct": 0,
     "why": "ustedes, verbe en -ir : <b>-ieron</b>."
    },
    {
     "type": "fill",
     "text": "El año pasado nosotros ___ (responder) a todas las quejas.",
     "answers": [
      "respondimos"
     ],
     "why": "nosotros en -er : <b>-imos</b>."
    },
    {
     "type": "fill",
     "text": "Ayer usted ___ (comer) en el restaurante del hotel y ___ (salir) a las nueve.",
     "answers": [
      [
       "comió"
      ],
      [
       "salió"
      ]
     ],
     "why": "usted : <b>-ió</b> pour les deux verbes."
    },
    {
     "type": "mcq",
     "q": "« Hier, j'ai ouvert un compte. »",
     "opts": [
      "Ayer abro una cuenta",
      "Ayer abré una cuenta",
      "Ayer abrieron una cuenta",
      "Ayer abrí una cuenta"
     ],
     "correct": 3,
     "why": "yo en -ir : <b>-í</b> avec accent."
    },
    {
     "type": "fill",
     "text": "En agosto ustedes ___ (vender) todas las habitaciones.",
     "answers": [
      "vendieron"
     ],
     "why": "ustedes en -er : <b>-ieron</b>."
    },
    {
     "type": "mcq",
     "q": "« Vous (usted) avez bu un café à l'hôtel. »",
     "opts": [
      "Usted bebiste un café en el hotel",
      "Usted bebió un café en el hotel",
      "Usted bebieron un café en el hotel"
     ],
     "correct": 1,
     "why": "usted → <b>bebió</b> ; bebiste est la forme de tú."
    },
    {
     "type": "speak",
     "es": "Nosotros aprendimos mucho en el curso de formación.",
     "fr": "Nous avons beaucoup appris pendant la formation."
    },
    {
     "type": "fill",
     "text": "El gerente nos ___ (escribir) un mensaje muy amable.",
     "answers": [
      "escribió"
     ],
     "why": "3e personne du singulier en -ir : <b>-ió</b>."
    }
   ]
  },
  {
   "id": "indefinido-formel-3",
   "reg": "formal",
   "title": "Les irréguliers chez le médecin et à l'administration · Formel (usted)",
   "why": "Les verbes les plus utilisés (ir, hacer, tener, estar, decir, dar…) sont irréguliers. Dans un rendez-vous ou une démarche, on en a besoin tout de suite : ils ont une <b>racine spéciale</b> et <b>aucun accent</b>.",
   "rule": "1. Racines : tener → <b>tuv-</b>, estar → <b>estuv-</b>, poder → <b>pud-</b>, hacer → <b>hic-</b>, venir → <b>vin-</b>, decir → <b>dij-</b>.<br>2. Terminaisons : <b>-e, -iste, -o, -imos, -isteis, -ieron</b> (après j : <b>-eron</b>).<br>3. hacer à usted / él : <b>hizo</b>.<br>4. ser et ir ont les mêmes formes : <b>fui, fuiste, fue, fuimos, fueron</b>.<br>5. dar : <b>di, dio, dieron</b> ; ver : <b>vi, vio, vieron</b>.",
   "examples": [
    {
     "es": "Usted estuvo en la oficina hasta las seis.",
     "fr": "Vous êtes resté au bureau jusqu'à six heures."
    },
    {
     "es": "Los auditores vinieron el martes pasado.",
     "fr": "Les auditeurs sont venus mardi dernier."
    },
    {
     "es": "La directora dijo que la reunión fue un éxito.",
     "fr": "La directrice a dit que la réunion avait été un succès.",
     "note": "fue = de ser"
    },
    {
     "es": "Ayer fuimos a la agencia de empleo.",
     "fr": "Hier, nous sommes allés à l'agence pour l'emploi.",
     "note": "fuimos = de ir"
    },
    {
     "es": "La empleada me dio un número de turno.",
     "fr": "L'employée m'a donné un numéro de passage."
    },
    {
     "es": "Usted hizo una pregunta muy buena.",
     "fr": "Vous avez posé une très bonne question."
    }
   ],
   "pitfalls": [
    {
     "wrong": "El director tuvó una reunión",
     "right": "El director tuvo una reunión",
     "why": "Les irréguliers de ce type n'ont <b>pas d'accent</b> : tuvo, estuvo, pudo."
    },
    {
     "wrong": "Usted hició el trabajo",
     "right": "Usted hizo el trabajo",
     "why": "hacer à la 3e personne du singulier : <b>hizo</b> (c devient z devant o)."
    },
    {
     "wrong": "Ustedes dijieron la verdad",
     "right": "Ustedes dijeron la verdad",
     "why": "Après le j de dij-, on écrit <b>-eron</b>, sans i."
    }
   ],
   "exercises": [
    {
     "type": "mcq",
     "q": "« Hier, vous (usted) avez eu une réunion. »",
     "opts": [
      "Ayer usted tuvo una reunión",
      "Ayer usted tuvió una reunión",
      "Ayer usted tenió una reunión"
     ],
     "correct": 0,
     "why": "tener → racine <b>tuv-</b> + -o, sans accent."
    },
    {
     "type": "fill",
     "text": "Ayer yo ___ (hacer) una cita con el médico.",
     "answers": [
      "hice"
     ],
     "why": "hacer → yo <b>hice</b>."
    },
    {
     "type": "fill",
     "text": "Los inspectores ___ (venir) a la oficina el viernes.",
     "answers": [
      "vinieron"
     ],
     "why": "venir → vin- + <b>-ieron</b>."
    },
    {
     "type": "speak",
     "es": "El inspector dio su opinión al final.",
     "fr": "L'inspecteur a donné son avis à la fin."
    },
    {
     "type": "mcq",
     "q": "Dans « Ayer la señora fue a la administración », fue vient de…",
     "opts": [
      "ser",
      "ir",
      "ver"
     ],
     "correct": 1,
     "why": "« fue a + lieu » exprime un déplacement : c'est <b>ir</b>."
    },
    {
     "type": "fill",
     "text": "Usted ___ (estar) en la oficina hasta las seis.",
     "answers": [
      "estuvo"
     ],
     "why": "estar → estuv- + <b>-o</b>."
    },
    {
     "type": "fill",
     "text": "Ustedes ___ (poder) hablar con el director y él les ___ (dar) una respuesta.",
     "answers": [
      [
       "pudieron"
      ],
      [
       "dio"
      ]
     ],
     "why": "poder → pud- + -ieron ; dar → <b>dio</b>, sans accent."
    },
    {
     "type": "mcq",
     "q": "El gerente ___ que sí a nuestra propuesta. (decir)",
     "opts": [
      "dijó",
      "dició",
      "dijo"
     ],
     "correct": 2,
     "why": "decir → dij- + <b>-o</b>, sans accent."
    },
    {
     "type": "fill",
     "text": "El año pasado nosotros ___ (ir) a Madrid por trabajo.",
     "answers": [
      "fuimos"
     ],
     "why": "ir → nosotros <b>fuimos</b>."
    },
    {
     "type": "mcq",
     "q": "« Vous (ustedes) avez fait le travail. »  Ustedes ___ el trabajo.",
     "opts": [
      "hacieron",
      "hizieron",
      "hizo",
      "hicieron"
     ],
     "correct": 3,
     "why": "hacer → racine <b>hic-</b> + -ieron."
    },
    {
     "type": "speak",
     "es": "Fue una reunión larga, pero muy útil.",
     "fr": "Ce fut une réunion longue, mais très utile."
    },
    {
     "type": "fill",
     "text": "Los clientes ___ (ver) al gerente en el pasillo.",
     "answers": [
      "vieron"
     ],
     "why": "ver → <b>vieron</b>, sans accent."
    }
   ]
  },
  {
   "id": "indefinido-formel-4",
   "reg": "formal",
   "title": "Changements de voyelle et orthographe dans les courriels pros · Formel (usted)",
   "why": "Dans un courriel ou un échange avec un client, on utilise pedir, servir, leer, pagar, buscar… Ces verbes sont réguliers à la base, mais ils changent <b>une voyelle</b> ou <b>une lettre</b> pour garder le même son.",
   "rule": "1. pedir, servir, sentir, preferir : aux 3es personnes, <b>e→i</b> → pidió, pidieron.<br>2. dormir : aux 3es personnes, <b>o→u</b> → durmió, durmieron.<br>3. À yo seulement : -car → <b>-qué</b>, -gar → <b>-gué</b>, -zar → <b>-cé</b> (busqué, pagué, empecé).<br>4. leer, oír : 3es personnes en <b>-yó / -yeron</b> (leyó, oyeron).",
   "examples": [
    {
     "es": "La señora pidió una habitación tranquila.",
     "fr": "La dame a demandé une chambre calme."
    },
    {
     "es": "El camarero sirvió el café a los invitados.",
     "fr": "Le serveur a servi le café aux invités."
    },
    {
     "es": "El mes pasado pagué el alquiler del local.",
     "fr": "Le mois dernier, j'ai payé le loyer du local."
    },
    {
     "es": "Busqué su correo en la carpeta de spam.",
     "fr": "J'ai cherché votre courriel dans le dossier des indésirables."
    },
    {
     "es": "La abogada leyó todas las cláusulas.",
     "fr": "L'avocate a lu toutes les clauses."
    },
    {
     "es": "Ayer comencé el curso de formación.",
     "fr": "Hier, j'ai commencé la formation."
    }
   ],
   "pitfalls": [
    {
     "wrong": "Usted pedió un descuento",
     "right": "Usted pidió un descuento",
     "why": "pedir change e→i à usted, él et ellos : <b>pidió</b>, <b>pidieron</b>."
    },
    {
     "wrong": "Ayer pagé la factura",
     "right": "Ayer pagué la factura",
     "why": "Devant é, on garde le son [g] avec <b>gu</b> : pagué."
    },
    {
     "wrong": "Ustedes leieron el contrato",
     "right": "Ustedes leyeron el contrato",
     "why": "Un i entre deux voyelles devient <b>y</b> : leyeron."
    }
   ],
   "exercises": [
    {
     "type": "mcq",
     "q": "« Le client a demandé une remise. »  El cliente ___ un descuento.",
     "opts": [
      "pedió",
      "pidió",
      "pedí"
     ],
     "correct": 1,
     "why": "pedir → usted / él : <b>pidió</b> (e→i)."
    },
    {
     "type": "fill",
     "text": "La camarera ___ (servir) el desayuno a las ocho.",
     "answers": [
      "sirvió"
     ],
     "why": "servir → <b>sirvió</b> (e→i)."
    },
    {
     "type": "fill",
     "text": "Ayer yo ___ (pagar) la factura por internet.",
     "answers": [
      "pagué"
     ],
     "why": "pagar → yo <b>pagué</b> (g→gu)."
    },
    {
     "type": "speak",
     "es": "Usted leyó el contrato con mucha atención.",
     "fr": "Vous avez lu le contrat avec beaucoup d'attention."
    },
    {
     "type": "mcq",
     "q": "« Hier, j'ai cherché votre dossier. »  Ayer ___ su expediente.",
     "opts": [
      "busqé",
      "buscé",
      "busqué",
      "busco"
     ],
     "correct": 2,
     "why": "buscar → yo <b>busqué</b> (c→qu)."
    },
    {
     "type": "fill",
     "text": "Ustedes ___ (leer) el informe antes de la reunión.",
     "answers": [
      "leyeron"
     ],
     "why": "leer → <b>leyeron</b> (i→y)."
    },
    {
     "type": "fill",
     "text": "Yo ___ (llegar) a las ocho y ___ (empezar) a atender a los clientes.",
     "answers": [
      [
       "llegué"
      ],
      [
       "empecé"
      ]
     ],
     "why": "llegar → llegué (g→gu) ; empezar → empecé (z→c)."
    },
    {
     "type": "mcq",
     "q": "« Los clientes ___ tres noches en el hotel. » (dormir)",
     "opts": [
      "durmieron",
      "dormieron",
      "durmaron"
     ],
     "correct": 0,
     "why": "dormir : o→u aux 3es personnes → <b>durmieron</b>."
    },
    {
     "type": "fill",
     "text": "El director ___ (oír) mi pregunta y respondió enseguida.",
     "answers": [
      "oyó"
     ],
     "why": "oír → él <b>oyó</b> (i→y)."
    },
    {
     "type": "mcq",
     "q": "Ayer yo ___ una copia del contrato. (sacar)",
     "opts": [
      "sacé",
      "sací",
      "sacó",
      "saqué"
     ],
     "correct": 3,
     "why": "sacar → yo <b>saqué</b> (c→qu)."
    },
    {
     "type": "speak",
     "es": "Mi jefa prefirió terminar el informe antes del viernes.",
     "fr": "Ma cheffe a préféré terminer le rapport avant vendredi."
    },
    {
     "type": "fill",
     "text": "Los clientes ___ (sentir) mucho calor en la sala.",
     "answers": [
      "sintieron"
     ],
     "why": "sentir → <b>sintieron</b> (e→i)."
    }
   ]
  },
  {
   "id": "indefinido-formel-5",
   "reg": "formal",
   "title": "Marqueurs de temps, questions et négations · Formel (usted)",
   "why": "Pour écrire un courriel ou poser une question polie, il faut savoir <b>quand</b> utiliser l'indefinido. Avec un moment fini (ayer, el mes pasado, hace tres días), on prend l'indefinido, et non le passé composé espagnol.",
   "rule": "1. Marqueurs d'un moment fini : <b>ayer, anteayer, anoche, la semana pasada, el año pasado, hace tres días, en 2019</b>.<br>2. Avec ces marqueurs, pas de « he + participe » : on dit <b>cambiamos</b>, pas hemos cambiado.<br>3. Négation : <b>no</b> devant le verbe → no recibimos.<br>4. Question polie : verbe à la 3e personne + usted → ¿Cuándo llegó usted ?",
   "examples": [
    {
     "es": "Anteayer visité la sucursal de Valencia.",
     "fr": "Avant-hier, j'ai visité l'agence de Valence."
    },
    {
     "es": "La semana pasada el banco cerró dos oficinas.",
     "fr": "La semaine dernière, la banque a fermé deux agences."
    },
    {
     "es": "Hace tres días ustedes nos mandaron un correo.",
     "fr": "Il y a trois jours, vous nous avez envoyé un courriel."
    },
    {
     "es": "En 2019 el hotel abrió su primera sala de conferencias.",
     "fr": "En 2019, l'hôtel a ouvert sa première salle de conférences."
    },
    {
     "es": "¿Cuándo recibió usted la carta?",
     "fr": "Quand avez-vous reçu la lettre ?"
    },
    {
     "es": "El sistema no funcionó anoche.",
     "fr": "Le système n'a pas fonctionné hier soir."
    }
   ],
   "pitfalls": [
    {
     "wrong": "El mes pasado hemos cambiado de banco",
     "right": "El mes pasado cambiamos de banco",
     "why": "Un moment fini comme « el mes pasado » appelle l'<b>indefinido</b>, pas le passé composé."
    },
    {
     "wrong": "¿Dónde fuiste ayer ? (à un client)",
     "right": "¿Dónde fue usted ayer?",
     "why": "Avec usted, le verbe prend la forme de la 3e personne : <b>fue</b>."
    },
    {
     "wrong": "Hace tres días llamo a su oficina",
     "right": "Hace tres días llamé a su oficina",
     "why": "« Hace + durée » situe un fait terminé : il faut le passé."
    }
   ],
   "exercises": [
    {
     "type": "mcq",
     "q": "Quelle phrase est correcte pour « Il y a trois jours, j'ai appelé » ?",
     "opts": [
      "Hace tres días he llamado",
      "Hace tres días llamé",
      "Hace tres días llamo"
     ],
     "correct": 1,
     "why": "« Hace tres días » est un moment fini → <b>indefinido</b>."
    },
    {
     "type": "fill",
     "text": "¿Cuándo ___ (llegar) usted a la oficina?",
     "answers": [
      "llegó"
     ],
     "why": "usted → 3e personne : <b>llegó</b>."
    },
    {
     "type": "fill",
     "text": "Lo siento, señor: ayer yo no ___ (recibir) su mensaje.",
     "answers": [
      "recibí"
     ],
     "why": "yo en -ir : <b>-í</b>, avec <b>no</b> devant le verbe."
    },
    {
     "type": "speak",
     "es": "¿Qué le dijo el médico ayer?",
     "fr": "Qu'est-ce que le médecin vous a dit hier ?"
    },
    {
     "type": "mcq",
     "q": "« Le mois dernier, nous avons changé de banque. »",
     "opts": [
      "El mes pasado hemos cambiado de banco",
      "El mes pasado cambiábamos de banco",
      "El mes pasado cambiamos de banco"
     ],
     "correct": 2,
     "why": "Action terminée à un moment précis → <b>cambiamos</b> (indefinido)."
    },
    {
     "type": "fill",
     "text": "El año pasado ustedes ___ (abrir) una oficina nueva.",
     "answers": [
      "abrieron"
     ],
     "why": "ustedes en -ir : <b>-ieron</b>."
    },
    {
     "type": "fill",
     "text": "Anoche el hotel ___ (cerrar) a las doce y los huéspedes ___ (volver) tarde.",
     "answers": [
      [
       "cerró"
      ],
      [
       "volvieron"
      ]
     ],
     "why": "cerrar → cerró ; volver → volvieron (réguliers au passé)."
    },
    {
     "type": "mcq",
     "q": "« Hier, nous n'avons pas reçu votre réponse. »",
     "opts": [
      "Ayer no recibimos su respuesta",
      "Ayer no recibemos su respuesta",
      "Ayer no recibieron su respuesta"
     ],
     "correct": 0,
     "why": "nosotros en -er : <b>-imos</b>, et <b>no</b> se place devant le verbe."
    },
    {
     "type": "fill",
     "text": "Hace dos semanas ustedes ___ (trasladar) la oficina al centro.",
     "answers": [
      "trasladaron"
     ],
     "why": "ustedes en -ar : <b>-aron</b>."
    },
    {
     "type": "mcq",
     "q": "Comment demander poliment à Mme Soto : « Où êtes-vous allée hier ? »",
     "opts": [
      "¿Dónde fuiste ayer?",
      "¿Dónde fueron ayer?",
      "¿Dónde fui ayer?",
      "¿Dónde fue usted ayer?"
     ],
     "correct": 3,
     "why": "usted → <b>fue</b> (ir) ; fuiste est la forme de tú."
    },
    {
     "type": "speak",
     "es": "Anoche no pude abrir el archivo adjunto.",
     "fr": "Hier soir, je n'ai pas pu ouvrir le fichier joint."
    },
    {
     "type": "fill",
     "text": "El mes pasado ustedes nos ___ (llamar) dos veces.",
     "answers": [
      "llamaron"
     ],
     "why": "ustedes en -ar : <b>-aron</b>."
    }
   ]
  },
  {
   "id": "indefinido-informel-1",
   "reg": "informal",
   "title": "Entre amis : formes courantes et pièges · Informel (tú)",
   "why": "Entre amis, on raconte son week-end avec <b>tú</b>, <b>yo</b> et <b>nosotros</b>. C'est là que les francophones se trompent le plus : le <b>-s</b> en trop à tú, l'accent mal placé et la confusion entre fue (ser) et fue (ir).",
   "rule": "1. tú : <b>-aste</b> (-ar) ou <b>-iste</b> (-er / -ir) ; jamais de -s final en plus.<br>2. yo : <b>-é</b> / <b>-í</b> (avec accent) ; mais fui, vi, di, hice, tuve sont <b>sans accent</b>.<br>3. nosotros en -ar : <b>-amos</b> ; en -er / -ir : <b>-imos</b> ; ir : <b>fuimos</b>.<br>4. ellos : <b>-aron</b> / <b>-ieron</b> ; irréguliers : hicieron, dijeron, vieron.",
   "examples": [
    {
     "es": "Ayer me llamaste a las once de la noche.",
     "fr": "Hier, tu m'as appelé à onze heures du soir."
    },
    {
     "es": "¿Qué hiciste el fin de semana?",
     "fr": "Qu'as-tu fait ce week-end ?"
    },
    {
     "es": "Fuimos a la playa y nadamos un rato.",
     "fr": "Nous sommes allés à la plage et nous avons nagé un moment."
    },
    {
     "es": "Mi hermano vio tu mensaje y se rió.",
     "fr": "Mon frère a vu ton message et il a ri.",
     "note": "se rió : reír est irrégulier, à retenir tel quel"
    },
    {
     "es": "Mis primos vinieron en tren desde Valencia.",
     "fr": "Mes cousins sont venus en train depuis Valence."
    }
   ],
   "pitfalls": [
    {
     "wrong": "¿Qué hicistes ayer?",
     "right": "¿Qué hiciste ayer?",
     "why": "À tú, le passé ne se termine <b>jamais par -stes</b> : hiciste, comiste, hablaste."
    },
    {
     "wrong": "Ayer yo fuí al cine",
     "right": "Ayer yo fui al cine",
     "why": "fui est monosyllabique : <b>pas d'accent</b>, comme vi et di."
    },
    {
     "wrong": "Tú comí pizza anoche",
     "right": "Tú comiste pizza anoche",
     "why": "<b>-í</b> est pour yo ; tú prend <b>-iste</b>."
    }
   ],
   "exercises": [
    {
     "type": "mcq",
     "q": "Ayer tú ___ en casa de tu tía.",
     "opts": [
      "comí",
      "comió",
      "comiste"
     ],
     "correct": 2,
     "why": "tú en -er : <b>-iste</b>."
    },
    {
     "type": "fill",
     "text": "¿Qué ___ (hacer) tú el sábado por la noche?",
     "answers": [
      "hiciste"
     ],
     "why": "hacer → hic- + <b>-iste</b>, sans -s en trop."
    },
    {
     "type": "fill",
     "text": "Anoche mis amigos y yo ___ (ver) una peli genial.",
     "answers": [
      "vimos"
     ],
     "why": "ver → nosotros <b>vimos</b>, sans accent."
    },
    {
     "type": "speak",
     "es": "Ayer me llamó mi abuela a las nueve.",
     "fr": "Hier, ma grand-mère m'a appelé à neuf heures."
    },
    {
     "type": "mcq",
     "q": "« Hier, je suis allé à la plage. »  Ayer yo ___ a la playa.",
     "opts": [
      "fui",
      "fuí",
      "fue",
      "fuiste"
     ],
     "correct": 0,
     "why": "ir → yo <b>fui</b>, sans accent."
    },
    {
     "type": "fill",
     "text": "Mi hermana me ___ (dar) un abrazo enorme.",
     "answers": [
      "dio"
     ],
     "why": "dar → ella <b>dio</b>, sans accent."
    },
    {
     "type": "fill",
     "text": "Yo no ___ (dormir) nada porque mis vecinos ___ (hacer) una fiesta.",
     "answers": [
      [
       "dormí"
      ],
      [
       "hicieron"
      ]
     ],
     "why": "yo → dormí (pas de changement) ; ellos → hicieron."
    },
    {
     "type": "mcq",
     "q": "« Mes amis nous ont dit la vérité. »  Mis amigos nos ___ la verdad.",
     "opts": [
      "dijieron",
      "dijeron",
      "dijaron"
     ],
     "correct": 1,
     "why": "decir → dij- + <b>-eron</b> (après j, pas de i)."
    },
    {
     "type": "fill",
     "text": "Ayer tú ___ (llegar) tarde a la cena.",
     "answers": [
      "llegaste"
     ],
     "why": "tú en -ar : <b>-aste</b>."
    },
    {
     "type": "mcq",
     "q": "Comment demander à un ami : « Qu'as-tu fait hier ? »",
     "opts": [
      "¿Qué hicistes ayer?",
      "¿Qué hizo ayer?",
      "¿Qué hice ayer?",
      "¿Qué hiciste ayer?"
     ],
     "correct": 3,
     "why": "tú → <b>hiciste</b> ; hicistes n'existe pas."
    },
    {
     "type": "speak",
     "es": "Anoche no pude dormir por el ruido.",
     "fr": "Hier soir, je n'ai pas pu dormir à cause du bruit."
    },
    {
     "type": "fill",
     "text": "El verano pasado nosotros ___ (viajar) a Portugal con tus primos.",
     "answers": [
      "viajamos"
     ],
     "why": "nosotros en -ar : <b>-amos</b>, comme au présent ; « el verano pasado » donne le passé."
    }
   ]
  }
 ],
 "temps-perfecto": [
  {
   "id": "perfecto-formel-1",
   "reg": "formal",
   "title": "Les participes en -ado (hablar, llamar, enviar) · Formel (usted)",
   "why": "Au bureau, à la banque ou à l'hôtel, on annonce ce qui <b>vient d'être fait</b> : « hemos enviado », « ha firmado ». Pour les verbes en -ar, la formule est toujours la même.",
   "rule": "1. Prends l'infinitif en <b>-ar</b> et remplace par <b>-ado</b> : llamar → llam<b>ado</b>.<br>2. Ajoute <b>haber</b> devant : usted / él / ella → <b>ha</b> ; ustedes / ellos → <b>han</b> ; nosotros → <b>hemos</b> ; yo → <b>he</b>.<br>3. Le participe ne change jamais (pas d'accord).",
   "examples": [
    {
     "es": "Ya hemos enviado su pedido.",
     "fr": "Nous avons déjà envoyé votre commande."
    },
    {
     "es": "Usted ha llamado al número correcto.",
     "fr": "Vous avez appelé le bon numéro.",
     "note": "usted → ha (comme « il / elle »)"
    },
    {
     "es": "Los técnicos han revisado el ordenador.",
     "fr": "Les techniciens ont vérifié l'ordinateur."
    },
    {
     "es": "Hoy he cancelado su cita, señora López.",
     "fr": "Aujourd'hui, j'ai annulé votre rendez-vous, madame López."
    },
    {
     "es": "¿Ha firmado usted el contrato?",
     "fr": "Avez-vous signé le contrat ?"
    }
   ],
   "pitfalls": [
    {
     "wrong": "Ustedes han llamando.",
     "right": "Ustedes han llamado.",
     "why": "Après haber, on met le participe en -ado, pas le gérondif en -ando."
    },
    {
     "wrong": "Usted han firmado el contrato.",
     "right": "Usted ha firmado el contrato.",
     "why": "Usted se conjugue comme la 3e personne du singulier : ha."
    },
    {
     "wrong": "Ha enviar el correo.",
     "right": "Ha enviado el correo.",
     "why": "Haber ne se suit jamais d'un infinitif ici : il faut le participe."
    }
   ],
   "exercises": [
    {
     "type": "mcq",
     "q": "Participe de <b>llamar</b> :",
     "opts": [
      "llamando",
      "llamado",
      "llamido"
     ],
     "correct": 1,
     "why": "-ar → <b>-ado</b> : llamado (llamando est le gérondif)."
    },
    {
     "type": "fill",
     "text": "Señor Ruiz, usted ___ (firmar) el contrato.",
     "answers": [
      "ha firmado"
     ],
     "why": "usted → <b>ha</b> + firmado."
    },
    {
     "type": "fill",
     "text": "Nosotros ___ (enviar) la factura esta mañana.",
     "answers": [
      "hemos enviado"
     ],
     "why": "nosotros → <b>hemos</b> + enviado."
    },
    {
     "type": "mcq",
     "q": "« Les clients ont appelé » =",
     "opts": [
      "Los clientes ha llamado",
      "Los clientes han llamando",
      "Los clientes han llamado"
     ],
     "correct": 2,
     "why": "Sujet pluriel → <b>han</b> ; participe en -ado, sans accord."
    },
    {
     "type": "speak",
     "es": "Hemos reservado la sala de reuniones.",
     "fr": "Nous avons réservé la salle de réunion."
    },
    {
     "type": "fill",
     "text": "El director ___ (cancelar) la reunión de hoy.",
     "answers": [
      "ha cancelado"
     ],
     "why": "él / el director → <b>ha</b> + cancelado."
    },
    {
     "type": "mcq",
     "q": "« Vous avez envoyé le colis » (à un client) =",
     "opts": [
      "Usted has enviado el paquete",
      "Usted he enviado el paquete",
      "Usted ha enviar el paquete",
      "Usted ha enviado el paquete"
     ],
     "correct": 3,
     "why": "Avec <b>usted</b>, on utilise <b>ha</b> + participe en -ado."
    },
    {
     "type": "fill",
     "text": "Usted ___ ___ (llamar) a recepción.",
     "answers": [
      [
       "ha"
      ],
      [
       "llamado"
      ]
     ],
     "why": "usted → ha ; llamar → llamado."
    },
    {
     "type": "fill",
     "text": "Los empleados ___ (terminar) el informe.",
     "answers": [
      "han terminado"
     ],
     "why": "Sujet pluriel → <b>han</b> + terminado."
    },
    {
     "type": "speak",
     "es": "Usted ha llamado al número correcto.",
     "fr": "Vous avez appelé le bon numéro."
    },
    {
     "type": "mcq",
     "q": "¿___ usted pagado la cuenta?",
     "opts": [
      "Ha",
      "Han",
      "He"
     ],
     "correct": 0,
     "why": "usted → <b>ha</b>."
    },
    {
     "type": "fill",
     "text": "Esta semana yo ___ (preparar) tres presupuestos.",
     "answers": [
      "he preparado"
     ],
     "why": "yo → <b>he</b> + preparado ; « esta semana » est une période encore ouverte."
    }
   ]
  },
  {
   "id": "perfecto-formel-2",
   "reg": "formal",
   "title": "Les participes en -ido (comer, recibir, vivir) · Formel (usted)",
   "why": "Les verbes en -er et -ir donnent un participe en <b>-ido</b>. C'est la forme des phrases de service : « hemos recibido su mensaje », « ha perdido la llave ».",
   "rule": "1. Prends l'infinitif en <b>-er</b> ou <b>-ir</b> et remplace par <b>-ido</b> : recibir → recib<b>ido</b>.<br>2. Quand la racine se termine par une voyelle (le-er, cre-er, tra-er), le participe prend un accent : <b>leído, creído, traído</b>.<br>3. Place <b>ha / han / hemos / he</b> juste devant.",
   "examples": [
    {
     "es": "Hemos recibido su mensaje.",
     "fr": "Nous avons bien reçu votre message."
    },
    {
     "es": "¿Ha vivido usted en Madrid?",
     "fr": "Avez-vous vécu à Madrid ?"
    },
    {
     "es": "Los directores han decidido una fecha.",
     "fr": "Les directeurs ont décidé d'une date."
    },
    {
     "es": "Usted ha perdido la llave de la habitación.",
     "fr": "Vous avez perdu la clé de la chambre."
    },
    {
     "es": "Esta semana hemos vendido cien entradas.",
     "fr": "Cette semaine, nous avons vendu cent billets."
    }
   ],
   "pitfalls": [
    {
     "wrong": "Hemos recibado su carta.",
     "right": "Hemos recibido su carta.",
     "why": "Pour -er et -ir, la terminaison est -ido, jamais -ado."
    },
    {
     "wrong": "Ustedes han comiendo en el hotel.",
     "right": "Ustedes han comido en el hotel.",
     "why": "Après haber, on met le participe, pas le gérondif en -iendo."
    },
    {
     "wrong": "Yo he leido el contrato.",
     "right": "Yo he leído el contrato.",
     "why": "Leer → leído : l'accent sépare les deux voyelles."
    }
   ],
   "exercises": [
    {
     "type": "mcq",
     "q": "Participe de <b>permitir</b> :",
     "opts": [
      "permitido",
      "permitado",
      "permitiendo"
     ],
     "correct": 0,
     "why": "-ir → <b>-ido</b> : permitido."
    },
    {
     "type": "fill",
     "text": "Nosotros ___ (recibir) su mensaje, señora Díaz.",
     "answers": [
      "hemos recibido"
     ],
     "why": "nosotros → <b>hemos</b> + recibido."
    },
    {
     "type": "fill",
     "text": "Yo ___ (leer) el contrato completo.",
     "answers": [
      "he leído"
     ],
     "why": "leer → <b>leído</b>, avec accent sur le í."
    },
    {
     "type": "mcq",
     "q": "« Avez-vous vécu à Madrid ? » (usted) =",
     "opts": [
      "¿Ha viviendo usted en Madrid?",
      "¿Ha vivido usted en Madrid?",
      "¿Ha vivado usted en Madrid?"
     ],
     "correct": 1,
     "why": "vivir → <b>vivido</b> ; usted → ha."
    },
    {
     "type": "speak",
     "es": "Hoy hemos vendido todas las entradas.",
     "fr": "Aujourd'hui, nous avons vendu tous les billets."
    },
    {
     "type": "fill",
     "text": "Ustedes ___ (aprender) mucho en este curso.",
     "answers": [
      "han aprendido"
     ],
     "why": "ustedes → <b>han</b> + aprendido."
    },
    {
     "type": "mcq",
     "q": "Participe de <b>salir</b> :",
     "opts": [
      "saliado",
      "salado",
      "salido"
     ],
     "correct": 2,
     "why": "-ir → <b>-ido</b> : salido."
    },
    {
     "type": "fill",
     "text": "El huésped ___ ___ (perder) la llave.",
     "answers": [
      [
       "ha"
      ],
      [
       "perdido"
      ]
     ],
     "why": "él → ha ; perder → perdido."
    },
    {
     "type": "fill",
     "text": "Los médicos ___ (decidir) un nuevo horario.",
     "answers": [
      "han decidido"
     ],
     "why": "Sujet pluriel → <b>han</b> + decidido."
    },
    {
     "type": "speak",
     "es": "Los empleados han salido a comer.",
     "fr": "Les employés sont sortis déjeuner."
    },
    {
     "type": "mcq",
     "q": "Los clientes ___ comido en el restaurante del hotel.",
     "opts": [
      "hemos",
      "he",
      "ha",
      "han"
     ],
     "correct": 3,
     "why": "Sujet pluriel de 3e personne → <b>han</b>."
    },
    {
     "type": "fill",
     "text": "Usted y su socio ___ (conseguir) el préstamo.",
     "answers": [
      "han conseguido"
     ],
     "why": "« Usted y su socio » = ustedes → <b>han</b> + conseguido."
    }
   ]
  },
  {
   "id": "perfecto-formel-3",
   "reg": "formal",
   "title": "Les participes irréguliers (hecho, dicho, visto, puesto…) · Formel (usted)",
   "why": "Quelques verbes très courants au bureau ont un participe irrégulier. Il faut les connaître par cœur : on les entend dans presque chaque échange professionnel.",
   "rule": "1. Retiens les principaux : hacer → <b>hecho</b>, decir → <b>dicho</b>, ver → <b>visto</b>, poner → <b>puesto</b>, escribir → <b>escrito</b>, abrir → <b>abierto</b>, volver → <b>vuelto</b>, romper → <b>roto</b>, resolver → <b>resuelto</b>.<br>2. Pour tous : haber (<b>ha, han, hemos, he</b>) + participe irrégulier.<br>3. Le participe reste invariable.",
   "examples": [
    {
     "es": "Hemos hecho todo lo posible.",
     "fr": "Nous avons fait tout notre possible.",
     "note": "hacer → hecho"
    },
    {
     "es": "El gerente ha dicho que sí.",
     "fr": "Le gérant a dit oui.",
     "note": "decir → dicho"
    },
    {
     "es": "¿Ha visto usted mi correo?",
     "fr": "Avez-vous vu mon courriel ?",
     "note": "ver → visto"
    },
    {
     "es": "El hotel ha puesto un nuevo horario de desayuno.",
     "fr": "L'hôtel a mis en place un nouvel horaire de petit-déjeuner.",
     "note": "poner → puesto"
    },
    {
     "es": "Usted ha escrito una carta muy clara.",
     "fr": "Vous avez écrit une lettre très claire.",
     "note": "escribir → escrito"
    },
    {
     "es": "El técnico ha resuelto el problema de la red.",
     "fr": "Le technicien a résolu le problème du réseau.",
     "note": "resolver → resuelto"
    }
   ],
   "pitfalls": [
    {
     "wrong": "Ha escribido el informe.",
     "right": "Ha escrito el informe.",
     "why": "Escribir a un participe irrégulier : escrito."
    },
    {
     "wrong": "Hemos hacido la reserva.",
     "right": "Hemos hecho la reserva.",
     "why": "Hacer → hecho, pas « hacido »."
    },
    {
     "wrong": "El banco ha abrido una cuenta.",
     "right": "El banco ha abierto una cuenta.",
     "why": "Abrir → abierto."
    }
   ],
   "exercises": [
    {
     "type": "mcq",
     "q": "Participe de <b>decir</b> :",
     "opts": [
      "decido",
      "dicho",
      "dicido",
      "decho"
     ],
     "correct": 1,
     "why": "decir → <b>dicho</b>."
    },
    {
     "type": "fill",
     "text": "El gerente ya ___ (decir) que sí.",
     "answers": [
      "ha dicho"
     ],
     "why": "decir → dicho ; él → ha."
    },
    {
     "type": "fill",
     "text": "Usted ___ (escribir) un correo muy claro.",
     "answers": [
      "ha escrito"
     ],
     "why": "escribir → <b>escrito</b>."
    },
    {
     "type": "mcq",
     "q": "« Nous avons fait une réservation » =",
     "opts": [
      "Hemos hecho una reserva",
      "Hemos hacido una reserva",
      "Hemos hizo una reserva"
     ],
     "correct": 0,
     "why": "hacer → <b>hecho</b> ; hizo est un autre temps."
    },
    {
     "type": "speak",
     "es": "¿Ha visto usted mi correo electrónico?",
     "fr": "Avez-vous vu mon courriel ?"
    },
    {
     "type": "fill",
     "text": "El banco ya ___ (abrir) la sucursal del centro.",
     "answers": [
      "ha abierto"
     ],
     "why": "abrir → <b>abierto</b>."
    },
    {
     "type": "mcq",
     "q": "Participe de <b>poner</b> :",
     "opts": [
      "ponido",
      "pusto",
      "puesto"
     ],
     "correct": 2,
     "why": "poner → <b>puesto</b>."
    },
    {
     "type": "fill",
     "text": "La recepcionista ___ ___ (poner) su nombre en la lista.",
     "answers": [
      [
       "ha"
      ],
      [
       "puesto"
      ]
     ],
     "why": "ella → ha ; poner → puesto."
    },
    {
     "type": "fill",
     "text": "Ya ___ (resolver, nosotros) el problema.",
     "answers": [
      "hemos resuelto"
     ],
     "why": "resolver → <b>resuelto</b>."
    },
    {
     "type": "speak",
     "es": "El gerente ha vuelto de su viaje.",
     "fr": "Le gérant est revenu de son voyage."
    },
    {
     "type": "mcq",
     "q": "El cliente ha ___ la ventana de la habitación.",
     "opts": [
      "rompido",
      "rompiendo",
      "rompado",
      "roto"
     ],
     "correct": 3,
     "why": "romper → <b>roto</b>."
    },
    {
     "type": "fill",
     "text": "Ustedes ya ___ (ver) el nuevo contrato, ¿verdad?",
     "answers": [
      "han visto"
     ],
     "why": "ver → <b>visto</b> ; ustedes → han."
    }
   ]
  },
  {
   "id": "perfecto-formel-4",
   "reg": "formal",
   "title": "Hoy ou ayer ? Perfecto et indefinido · Formel (usted)",
   "why": "En français, « nous avons reçu » sert à tout. En espagnol, tu dois choisir : la période est-elle <b>encore ouverte</b> (aujourd'hui, cette semaine) ou <b>déjà fermée</b> (hier, la semaine dernière) ?",
   "rule": "1. Période ouverte : <b>hoy, esta mañana, esta semana, este mes, este año, ya, todavía no, hasta ahora</b> → <b>perfecto</b> (hemos recibido).<br>2. Période fermée : <b>ayer, anoche, la semana pasada, el año pasado, hace dos días</b> → <b>indefinido</b> (recibimos).<br>3. En Espagne, on respecte cette distinction.",
   "examples": [
    {
     "es": "Esta mañana hemos atendido a veinte clientes.",
     "fr": "Ce matin, nous avons reçu vingt clients."
    },
    {
     "es": "Ayer atendimos a treinta clientes.",
     "fr": "Hier, nous avons reçu trente clients."
    },
    {
     "es": "Todavía no hemos recibido su pago, señor Vega.",
     "fr": "Nous n'avons pas encore reçu votre paiement, monsieur Vega."
    },
    {
     "es": "La semana pasada firmamos el contrato.",
     "fr": "La semaine dernière, nous avons signé le contrat."
    },
    {
     "es": "¿Ya ha revisado usted el informe?",
     "fr": "Avez-vous déjà vérifié le rapport ?"
    },
    {
     "es": "Este mes hemos vendido más que el mes pasado.",
     "fr": "Ce mois-ci, nous avons vendu plus que le mois dernier."
    }
   ],
   "pitfalls": [
    {
     "wrong": "Ayer ha llamado el director.",
     "right": "Ayer llamó el director.",
     "why": "« Ayer » est fini : on utilise l'indefinido, même si le français dit « a appelé »."
    },
    {
     "wrong": "Hoy firmé el contrato.",
     "right": "Hoy he firmado el contrato.",
     "why": "« Hoy » n'est pas terminé : perfecto (en Espagne)."
    },
    {
     "wrong": "Todavía no recibimos su pago.",
     "right": "Todavía no hemos recibido su pago.",
     "why": "« Todavía no » = pas encore, ça peut encore arriver : perfecto."
    }
   ],
   "exercises": [
    {
     "type": "mcq",
     "q": "Esta mañana ___ tres clientes.",
     "opts": [
      "llegaron",
      "han llegado",
      "llegaban"
     ],
     "correct": 1,
     "why": "« Esta mañana » est encore ouvert → <b>perfecto</b>."
    },
    {
     "type": "fill",
     "text": "Ayer nosotros ___ (firmar) el contrato.",
     "answers": [
      "firmamos"
     ],
     "why": "« Ayer » est fermé → indefinido : <b>firmamos</b>."
    },
    {
     "type": "fill",
     "text": "Hoy el director ___ (llamar) dos veces.",
     "answers": [
      "ha llamado"
     ],
     "why": "« Hoy » est ouvert → perfecto : <b>ha llamado</b>."
    },
    {
     "type": "mcq",
     "q": "La semana pasada ___ su solicitud.",
     "opts": [
      "recibimos",
      "hemos recibido",
      "recibo"
     ],
     "correct": 0,
     "why": "« La semana pasada » est fermé → indefinido."
    },
    {
     "type": "speak",
     "es": "Esta mañana hemos recibido tres llamadas.",
     "fr": "Ce matin, nous avons reçu trois appels."
    },
    {
     "type": "fill",
     "text": "El año pasado la empresa ___ (abrir) una oficina en Lyon.",
     "answers": [
      "abrió"
     ],
     "why": "« El año pasado » est fermé → indefinido : <b>abrió</b>."
    },
    {
     "type": "mcq",
     "q": "Este año ___ mucho trabajo.",
     "opts": [
      "tuvimos",
      "tenemos",
      "hemos tenido"
     ],
     "correct": 2,
     "why": "« Este año » n'est pas terminé → <b>perfecto</b> : hemos tenido."
    },
    {
     "type": "fill",
     "text": "Esta semana ustedes ___ (trabajar) mucho.",
     "answers": [
      "han trabajado"
     ],
     "why": "« Esta semana » est ouvert → <b>han trabajado</b>."
    },
    {
     "type": "fill",
     "text": "Anoche la recepcionista ___ (cerrar) la oficina a las diez.",
     "answers": [
      "cerró"
     ],
     "why": "« Anoche » est fermé → indefinido : <b>cerró</b>."
    },
    {
     "type": "speak",
     "es": "Ayer el médico llegó a las nueve.",
     "fr": "Hier, le médecin est arrivé à neuf heures."
    },
    {
     "type": "mcq",
     "q": "Hoy yo ___ el informe a las ocho.",
     "opts": [
      "terminé",
      "terminaba",
      "terminó",
      "he terminado"
     ],
     "correct": 3,
     "why": "« Hoy » = période ouverte → <b>he terminado</b>."
    },
    {
     "type": "fill",
     "text": "Hasta ahora, ustedes no ___ (pagar) la factura.",
     "answers": [
      "han pagado"
     ],
     "why": "« Hasta ahora » → perfecto : <b>han pagado</b>."
    }
   ]
  },
  {
   "id": "perfecto-formel-5",
   "reg": "formal",
   "title": "Questions, négations et courriels · Formel (usted)",
   "why": "Dans un courriel ou à l'accueil, tu poses des questions (« ¿ha recibido…? ») et tu dis ce qui n'est pas encore fait (« no hemos recibido… »). L'ordre des mots compte.",
   "rule": "1. <b>Haber et le participe ne se séparent jamais</b> : « ¿Ha recibido <b>usted</b> mi mensaje ? » (usted vient après).<br>2. Négation : <b>no</b> juste avant haber : « No ha llegado ».<br>3. Marqueurs : <b>ya</b> (déjà), <b>todavía no</b> (pas encore), <b>nunca</b> (jamais), <b>alguna vez</b> (déjà, un jour).<br>4. <b>Nunca</b> remplace « no » : « Nunca he visto… », pas « Nunca no he visto… ».",
   "examples": [
    {
     "es": "¿Ha llegado ya el paquete a su dirección?",
     "fr": "Le colis est-il déjà arrivé à votre adresse ?"
    },
    {
     "es": "Todavía no hemos recibido la confirmación del banco.",
     "fr": "Nous n'avons pas encore reçu la confirmation de la banque."
    },
    {
     "es": "Nunca he trabajado con una empresa tan seria.",
     "fr": "Je n'ai jamais travaillé avec une entreprise aussi sérieuse."
    },
    {
     "es": "¿Ha estado usted alguna vez en nuestra oficina?",
     "fr": "Êtes-vous déjà venu dans nos bureaux ?"
    },
    {
     "es": "El director no ha podido venir porque tiene una reunión.",
     "fr": "Le directeur n'a pas pu venir parce qu'il a une réunion."
    },
    {
     "es": "Estimado señor Gil, hemos cambiado la fecha de la cita.",
     "fr": "Cher monsieur Gil, nous avons changé la date du rendez-vous."
    }
   ],
   "pitfalls": [
    {
     "wrong": "¿Ha usted recibido mi mensaje?",
     "right": "¿Ha recibido usted mi mensaje?",
     "why": "Haber et le participe restent collés ; usted se place après."
    },
    {
     "wrong": "Nunca no he visto este documento.",
     "right": "Nunca he visto este documento.",
     "why": "Nunca est déjà négatif : on ne met pas « no » avant."
    }
   ],
   "exercises": [
    {
     "type": "mcq",
     "q": "« Avez-vous reçu mon message ? » =",
     "opts": [
      "¿Ha usted recibido mi mensaje?",
      "¿Usted recibido ha mi mensaje?",
      "¿Ha recibido usted mi mensaje?"
     ],
     "correct": 2,
     "why": "<b>Ha recibido</b> restent ensemble ; usted vient après."
    },
    {
     "type": "fill",
     "text": "Señora, ¿___ llegado ya su paquete?",
     "answers": [
      "ha"
     ],
     "why": "Le sujet est « su paquete » (3e personne) → <b>ha</b>."
    },
    {
     "type": "fill",
     "text": "Todavía no ___ (cerrar, nosotros) la cuenta de la empresa.",
     "answers": [
      "hemos cerrado"
     ],
     "why": "no + <b>hemos cerrado</b> ; « todavía no » = pas encore."
    },
    {
     "type": "mcq",
     "q": "« Je n'ai jamais travaillé dans une banque » =",
     "opts": [
      "Nunca no he trabajado en un banco",
      "Nunca he trabajado en un banco",
      "Nunca he trabajando en un banco"
     ],
     "correct": 1,
     "why": "<b>Nunca</b> suffit pour nier ; participe en -ado."
    },
    {
     "type": "speak",
     "es": "¿Ha recibido usted mi mensaje?",
     "fr": "Avez-vous reçu mon message ?"
    },
    {
     "type": "fill",
     "text": "Los empleados no ___ (poder) terminar el informe.",
     "answers": [
      "han podido"
     ],
     "why": "poder → podido ; no + <b>han podido</b>."
    },
    {
     "type": "mcq",
     "q": "¿___ usted alguna vez en nuestra oficina?",
     "opts": [
      "Ha estado",
      "Ha estando",
      "Ha estada"
     ],
     "correct": 0,
     "why": "estar → <b>estado</b>, invariable."
    },
    {
     "type": "fill",
     "text": "Estimado señor Gil, ___ ___ (cambiar) la fecha de la cita.",
     "answers": [
      [
       "hemos"
      ],
      [
       "cambiado"
      ]
     ],
     "why": "nosotros → hemos ; cambiar → cambiado."
    },
    {
     "type": "fill",
     "text": "Usted nunca ___ (faltar) a una reunión.",
     "answers": [
      "ha faltado"
     ],
     "why": "nunca + <b>ha faltado</b>, sans « no »."
    },
    {
     "type": "speak",
     "es": "Nunca he trabajado con una empresa tan seria.",
     "fr": "Je n'ai jamais travaillé avec une entreprise aussi sérieuse."
    },
    {
     "type": "mcq",
     "q": "Quelle phrase est correcte ?",
     "opts": [
      "Ellos han no firmado el contrato",
      "Ellos no firmado han el contrato",
      "Ellos han firmado no el contrato",
      "Ellos no han firmado el contrato"
     ],
     "correct": 3,
     "why": "<b>no</b> se place juste avant haber : no han firmado."
    },
    {
     "type": "fill",
     "text": "Esta semana el banco ya ___ (enviar) tres correos a sus clientes.",
     "answers": [
      "ha enviado"
     ],
     "why": "« Esta semana » est ouvert → <b>ha enviado</b>."
    }
   ]
  },
  {
   "id": "perfecto-informel-1",
   "reg": "informal",
   "title": "Pièges de francophone : haber, accord, hoy et ayer · Informel (tú)",
   "why": "Entre amis, le français « j'ai fait / je suis allé » te pousse à faire des erreurs. Trois réflexes à prendre : toujours <b>haber</b>, aucun accord, et attention à <b>ayer</b>.",
   "rule": "1. Un seul auxiliaire : <b>haber</b> (jamais ser ni estar) : « mis amigos <b>han</b> llegado ».<br>2. Le participe ne s'accorde pas : « ella ha salido », « ellas han salido ».<br>3. Ne sépare pas haber du participe : « <b>Ya</b> hemos cenado ».<br>4. Avec <b>ayer, anoche</b> (période finie), on n'utilise pas le perfecto : « Ayer cené… ».",
   "examples": [
    {
     "es": "Hoy he visto a tu hermano en el parque.",
     "fr": "Aujourd'hui, j'ai vu ton frère au parc."
    },
    {
     "es": "Mi madre ha vuelto de Portugal.",
     "fr": "Ma mère est rentrée du Portugal.",
     "note": "« est rentrée » en français, mais haber en espagnol"
    },
    {
     "es": "Mis amigos han llegado tarde otra vez.",
     "fr": "Mes amis sont arrivés en retard encore une fois."
    },
    {
     "es": "Ayer cené con mis abuelos.",
     "fr": "Hier, j'ai dîné avec mes grands-parents.",
     "note": "« ayer » est fini : indefinido"
    },
    {
     "es": "Esta semana no he salido de casa.",
     "fr": "Cette semaine, je ne suis pas sorti de chez moi."
    }
   ],
   "pitfalls": [
    {
     "wrong": "Mis amigos son llegados.",
     "right": "Mis amigos han llegado.",
     "why": "L'espagnol n'utilise jamais ser avec le participe : toujours haber."
    },
    {
     "wrong": "Ayer he visto a Lucía.",
     "right": "Ayer vi a Lucía.",
     "why": "« Ayer » est une période finie : indefinido."
    },
    {
     "wrong": "Hemos ya cenado.",
     "right": "Ya hemos cenado.",
     "why": "L'adverbe se place avant haber, jamais entre haber et le participe."
    }
   ],
   "exercises": [
    {
     "type": "mcq",
     "q": "« Ma sœur est sortie » =",
     "opts": [
      "Mi hermana ha salido",
      "Mi hermana es salida",
      "Mi hermana ha salida"
     ],
     "correct": 0,
     "why": "Toujours <b>haber</b>, et le participe ne s'accorde pas."
    },
    {
     "type": "fill",
     "text": "Mis primos ___ (llegar) esta mañana.",
     "answers": [
      "han llegado"
     ],
     "why": "primos (ils) → <b>han</b> + llegado."
    },
    {
     "type": "fill",
     "text": "Hoy ___ (comprar, yo) pan para el desayuno.",
     "answers": [
      "he comprado"
     ],
     "why": "« Hoy » est ouvert → <b>he comprado</b>."
    },
    {
     "type": "mcq",
     "q": "Ayer ___ a Lucía en el cine.",
     "opts": [
      "he visto",
      "veía",
      "vi"
     ],
     "correct": 2,
     "why": "« Ayer » est fermé → indefinido : <b>vi</b>."
    },
    {
     "type": "speak",
     "es": "Hoy he visto a tu hermano en el parque.",
     "fr": "Aujourd'hui, j'ai vu ton frère au parc."
    },
    {
     "type": "fill",
     "text": "Ya ___ (lavar, nosotros) el coche de papá.",
     "answers": [
      "hemos lavado"
     ],
     "why": "nosotros → <b>hemos</b> + lavado."
    },
    {
     "type": "mcq",
     "q": "« Nous avons déjà dîné » =",
     "opts": [
      "Hemos ya cenado",
      "Ya hemos cenado",
      "Ya cenado hemos"
     ],
     "correct": 1,
     "why": "<b>Ya</b> se place avant haber."
    },
    {
     "type": "fill",
     "text": "Tú ___ ___ (olvidar) las llaves otra vez.",
     "answers": [
      [
       "has"
      ],
      [
       "olvidado"
      ]
     ],
     "why": "tú → has ; olvidar → olvidado."
    },
    {
     "type": "fill",
     "text": "Anoche mis amigos ___ (bailar) hasta las tres.",
     "answers": [
      "bailaron"
     ],
     "why": "« Anoche » est fermé → indefinido : <b>bailaron</b>."
    },
    {
     "type": "speak",
     "es": "Mis amigos han llegado tarde otra vez.",
     "fr": "Mes amis sont arrivés en retard encore une fois."
    },
    {
     "type": "mcq",
     "q": "Esta semana no ___ al gimnasio.",
     "opts": [
      "fui",
      "iba",
      "ido",
      "he ido"
     ],
     "correct": 3,
     "why": "« Esta semana » est ouvert → <b>he ido</b> (haber est obligatoire)."
    },
    {
     "type": "fill",
     "text": "¿Ya ___ (terminar, tú) los deberes?",
     "answers": [
      "has terminado"
     ],
     "why": "tú → <b>has</b> + terminado."
    }
   ]
  },
  {
   "id": "perfecto-informel-2",
   "reg": "informal",
   "title": "Participes irréguliers et expériences de vie · Informel (tú)",
   "why": "Entre amis, on parle de ce qu'on a déjà fait ou jamais fait : « ¿has visto…? », « nunca he hecho… ». Et ces verbes-là ont des participes irréguliers.",
   "rule": "1. Irréguliers fréquents : hacer → <b>hecho</b>, decir → <b>dicho</b>, ver → <b>visto</b>, poner → <b>puesto</b>, escribir → <b>escrito</b>, abrir → <b>abierto</b>, volver → <b>vuelto</b>, romper → <b>roto</b>.<br>2. Pour parler d'une expérience : <b>alguna vez</b> (déjà), <b>nunca</b> (jamais), <b>ya</b> (déjà), <b>todavía no</b> (pas encore).<br>3. Pas d'accord, et pas de mot entre haber et le participe.",
   "examples": [
    {
     "es": "¿Has hecho ya la maleta?",
     "fr": "Tu as déjà fait ta valise ?"
    },
    {
     "es": "Nunca he visto un perro tan grande.",
     "fr": "Je n'ai jamais vu un chien aussi gros."
    },
    {
     "es": "He escrito tres mensajes a Marta.",
     "fr": "J'ai écrit trois messages à Marta."
    },
    {
     "es": "¿Qué has dicho?",
     "fr": "Qu'as-tu dit ?"
    },
    {
     "es": "Mi hermano ha abierto un restaurante.",
     "fr": "Mon frère a ouvert un restaurant."
    },
    {
     "es": "Hemos vuelto muy tarde de la fiesta.",
     "fr": "Nous sommes rentrés très tard de la fête."
    }
   ],
   "pitfalls": [
    {
     "wrong": "He escribido a Marta.",
     "right": "He escrito a Marta.",
     "why": "Escribir a un participe irrégulier : escrito."
    },
    {
     "wrong": "Has decido eso.",
     "right": "Has dicho eso.",
     "why": "Decir → dicho, pas « decido »."
    },
    {
     "wrong": "Has rompido mi taza.",
     "right": "Has roto mi taza.",
     "why": "Romper → roto."
    }
   ],
   "exercises": [
    {
     "type": "mcq",
     "q": "Participe de <b>ver</b> :",
     "opts": [
      "vido",
      "visto",
      "veído"
     ],
     "correct": 1,
     "why": "ver → <b>visto</b>."
    },
    {
     "type": "fill",
     "text": "Oye, ¿ya ___ (hacer, tú) la maleta?",
     "answers": [
      "has hecho"
     ],
     "why": "hacer → <b>hecho</b> ; tú → has."
    },
    {
     "type": "fill",
     "text": "Nunca ___ (ver, yo) un mar tan azul.",
     "answers": [
      "he visto"
     ],
     "why": "nunca + <b>he visto</b>, sans « no »."
    },
    {
     "type": "mcq",
     "q": "Mi hermano ___ un restaurante en Sevilla.",
     "opts": [
      "ha abrido",
      "ha abridado",
      "ha abierto"
     ],
     "correct": 2,
     "why": "abrir → <b>abierto</b>."
    },
    {
     "type": "speak",
     "es": "Hemos vuelto muy tarde de la fiesta.",
     "fr": "Nous sommes rentrés très tard de la fête."
    },
    {
     "type": "fill",
     "text": "He ___ (escribir) tres mensajes a Marta.",
     "answers": [
      "escrito"
     ],
     "why": "escribir → <b>escrito</b>."
    },
    {
     "type": "mcq",
     "q": "« Tu as cassé ma tasse » =",
     "opts": [
      "Has roto mi taza",
      "Has rompido mi taza",
      "Has rompo mi taza"
     ],
     "correct": 0,
     "why": "romper → <b>roto</b>."
    },
    {
     "type": "fill",
     "text": "Yo ___ ___ (poner) la mesa para la cena.",
     "answers": [
      [
       "he"
      ],
      [
       "puesto"
      ]
     ],
     "why": "yo → he ; poner → puesto."
    },
    {
     "type": "fill",
     "text": "Perdona, ¿qué ___ (decir, tú)?",
     "answers": [
      "has dicho"
     ],
     "why": "decir → <b>dicho</b>."
    },
    {
     "type": "speak",
     "es": "Nunca he visto un perro tan grande.",
     "fr": "Je n'ai jamais vu un chien aussi gros."
    },
    {
     "type": "mcq",
     "q": "¿Alguna vez ___ en un concierto de rock?",
     "opts": [
      "estabas",
      "estás",
      "estando",
      "has estado"
     ],
     "correct": 3,
     "why": "« Alguna vez » → perfecto : <b>has estado</b>."
    },
    {
     "type": "fill",
     "text": "Esta tarde mis padres ___ (volver) de Madrid.",
     "answers": [
      "han vuelto"
     ],
     "why": "volver → <b>vuelto</b> ; mis padres → han."
    }
   ]
  }
 ],
 "temps-imperfecto": [
  {
   "id": "imperfecto-formel-1",
   "reg": "formal",
   "title": "Les verbes en -ar à l'imparfait · Formel (usted)",
   "why": "Au bureau, on raconte souvent comment les choses se passaient <b>avant</b> : l'imperfecto des verbes en <b>-ar</b> est la base pour parler à un client ou à un supérieur de ses habitudes passées.",
   "rule": "1. Enlève <b>-ar</b> : trabajar → trabaj-.<br>2. Ajoute <b>-aba, -abas, -aba, -ábamos, -abais, -aban</b>.<br>3. <b>usted</b> = -aba ; <b>ustedes</b> = -aban.<br>4. Accent obligatoire sur <b>-ábamos</b>.",
   "examples": [
    {
     "es": "Usted trabajaba en la sucursal del centro.",
     "fr": "Vous travailliez à l'agence du centre-ville."
    },
    {
     "es": "Los técnicos llegaban a las ocho.",
     "fr": "Les techniciens arrivaient à huit heures."
    },
    {
     "es": "Nosotros ayudábamos a los clientes mayores.",
     "fr": "Nous aidions les clients âgés.",
     "note": "-ábamos porte un accent"
    },
    {
     "es": "La directora firmaba los contratos cada viernes.",
     "fr": "La directrice signait les contrats chaque vendredi."
    },
    {
     "es": "Ustedes enviaban las facturas por correo.",
     "fr": "Vous envoyiez les factures par courrier."
    }
   ],
   "pitfalls": [
    {
     "wrong": "Usted trabajía en una oficina.",
     "right": "Usted trabajaba en una oficina.",
     "why": "Les verbes en -ar prennent -aba, jamais -ía."
    },
    {
     "wrong": "Nosotros llamabamos a los clientes.",
     "right": "Nosotros llamábamos a los clientes.",
     "why": "-ábamos porte toujours un accent écrit."
    },
    {
     "wrong": "Ustedes revisaba los informes.",
     "right": "Ustedes revisaban los informes.",
     "why": "ustedes est pluriel : on met -aban, comme pour ellos."
    }
   ],
   "exercises": [
    {
     "type": "mcq",
     "q": "Imparfait de <b>trabajar</b> (usted) :",
     "opts": [
      "trabajaba",
      "trabajía",
      "trabajó"
     ],
     "correct": 0,
     "why": "trabajar → trabaj + <b>aba</b>."
    },
    {
     "type": "fill",
     "text": "Antes usted ___ (trabajar) en una oficina del centro.",
     "answers": [
      "trabajaba"
     ],
     "why": "usted se conjugue comme él : <b>-aba</b>."
    },
    {
     "type": "fill",
     "text": "Los clientes ___ (llamar) por teléfono cada mañana.",
     "answers": [
      "llamaban"
     ],
     "why": "Sujet pluriel : <b>-aban</b>."
    },
    {
     "type": "speak",
     "es": "Usted siempre llegaba temprano a la reunión.",
     "fr": "Vous arriviez toujours tôt à la réunion."
    },
    {
     "type": "mcq",
     "q": "Imparfait : ustedes ___ las cuentas cada lunes (revisar).",
     "opts": [
      "revisaron",
      "revisaban",
      "revisían"
     ],
     "correct": 1,
     "why": "Habitude + ustedes → <b>revisaban</b>."
    },
    {
     "type": "fill",
     "text": "Ustedes ___ (necesitar) más tiempo para firmar los documentos.",
     "answers": [
      "necesitaban"
     ],
     "why": "necesitar → necesit + <b>aban</b>."
    },
    {
     "type": "fill",
     "text": "En aquella época yo ___ (ayudar) a los clientes y ___ (contestar) los correos.",
     "answers": [
      [
       "ayudaba"
      ],
      [
       "contestaba"
      ]
     ],
     "why": "Yo prend -aba, comme él et usted."
    },
    {
     "type": "mcq",
     "q": "Quelle phrase est correcte ? « La secrétaire répondait aux appels. »",
     "opts": [
      "La secretaria contestaban las llamadas.",
      "La secretaria contestía las llamadas.",
      "La secretaria contestaba las llamadas."
     ],
     "correct": 2,
     "why": "Un sujet singulier et un verbe en -ar → <b>contestaba</b>."
    },
    {
     "type": "speak",
     "es": "Ustedes siempre pagaban con tarjeta en la tienda.",
     "fr": "Vous payiez toujours par carte dans la boutique."
    },
    {
     "type": "fill",
     "text": "Señor García, ¿usted ___ (viajar) mucho por trabajo antes?",
     "answers": [
      "viajaba"
     ],
     "why": "Question sur une habitude passée → <b>viajaba</b>."
    },
    {
     "type": "mcq",
     "q": "Imparfait : nosotros ___ las facturas por correo (enviar).",
     "opts": [
      "enviabamos",
      "enviábanos",
      "enviamos",
      "enviábamos"
     ],
     "correct": 3,
     "why": "Nosotros → <b>-ábamos</b>, avec accent."
    },
    {
     "type": "fill",
     "text": "Los empleados ___ (llegar) a las ocho y ___ (cerrar) la caja a las seis.",
     "answers": [
      [
       "llegaban"
      ],
      [
       "cerraban"
      ]
     ],
     "why": "Sujet pluriel, verbes en -ar : <b>-aban</b>."
    }
   ]
  },
  {
   "id": "imperfecto-formel-2",
   "reg": "formal",
   "title": "Les verbes en -er / -ir à l'imparfait · Formel (usted)",
   "why": "À la banque ou à l'hôtel, on décrit ce que les clients ou le personnel <b>faisaient d'habitude</b>. Les verbes en <b>-er / -ir</b> ont une seule terminaison pour les deux familles : <b>-ía</b>.",
   "rule": "1. Enlève <b>-er</b> ou <b>-ir</b> : tener → ten-, vivir → viv-.<br>2. Ajoute <b>-ía, -ías, -ía, -íamos, -íais, -ían</b>.<br>3. <b>usted</b> = -ía ; <b>ustedes</b> = -ían.<br>4. Le <b>í</b> porte toujours un accent.",
   "examples": [
    {
     "es": "Usted tenía una cuenta en nuestro banco.",
     "fr": "Vous aviez un compte dans notre banque."
    },
    {
     "es": "Los huéspedes comían en la terraza.",
     "fr": "Les clients de l'hôtel mangeaient sur la terrasse."
    },
    {
     "es": "Nosotros recibíamos muchas reclamaciones.",
     "fr": "Nous recevions beaucoup de réclamations."
    },
    {
     "es": "La gerente salía de la oficina a las siete.",
     "fr": "La gérante quittait le bureau à sept heures."
    },
    {
     "es": "Ustedes decían que el pago estaba hecho.",
     "fr": "Vous disiez que le paiement était fait."
    }
   ],
   "pitfalls": [
    {
     "wrong": "Los huéspedes comaban en la terraza.",
     "right": "Los huéspedes comían en la terraza.",
     "why": "-aba est pour les verbes en -ar ; en -er / -ir on met -ía."
    },
    {
     "wrong": "Usted tenia una cuenta.",
     "right": "Usted tenía una cuenta.",
     "why": "Sans accent sur le í, le mot change de prononciation et il est faux."
    },
    {
     "wrong": "Yo recibía y usted recibías.",
     "right": "Yo recibía y usted recibía.",
     "why": "Yo, él et usted ont la même forme ; -ías est seulement pour tú."
    }
   ],
   "exercises": [
    {
     "type": "mcq",
     "q": "Imparfait de <b>vivir</b> (ustedes) :",
     "opts": [
      "vivaban",
      "vivían",
      "vivieron"
     ],
     "correct": 1,
     "why": "vivir → viv + <b>ían</b>."
    },
    {
     "type": "fill",
     "text": "Antes usted ___ (tener) una cuenta en otro banco.",
     "answers": [
      "tenía"
     ],
     "why": "tener → ten + <b>ía</b>."
    },
    {
     "type": "fill",
     "text": "Los huéspedes ___ (comer) en el restaurante del hotel.",
     "answers": [
      "comían"
     ],
     "why": "Sujet pluriel : <b>-ían</b>."
    },
    {
     "type": "speak",
     "es": "El director leía todos los correos por la mañana.",
     "fr": "Le directeur lisait tous les courriels le matin."
    },
    {
     "type": "mcq",
     "q": "Imparfait : nosotros ___ el pedido cada semana (recibir).",
     "opts": [
      "recibimos",
      "recibiamos",
      "recibíamos"
     ],
     "correct": 2,
     "why": "Nosotros → <b>-íamos</b>, avec accent sur le í."
    },
    {
     "type": "fill",
     "text": "Señora López, ayer usted ___ (querer) cambiar la reserva, ¿verdad?",
     "answers": [
      "quería"
     ],
     "why": "querer → quer + <b>ía</b>."
    },
    {
     "type": "fill",
     "text": "Mientras yo ___ (escribir) el contrato, mi colega ___ (atender) a un cliente.",
     "answers": [
      [
       "escribía"
      ],
      [
       "atendía"
      ]
     ],
     "why": "Deux actions parallèles : deux imperfectos en <b>-ía</b>."
    },
    {
     "type": "mcq",
     "q": "« Les employés sortaient à six heures. »",
     "opts": [
      "Los empleados salaban a las seis.",
      "Los empleados saldrían a las seis.",
      "Los empleados salieron a las seis.",
      "Los empleados salían a las seis."
     ],
     "correct": 3,
     "why": "Habitude → salir + <b>ían</b> = salían."
    },
    {
     "type": "speak",
     "es": "Ustedes nunca discutían con el personal del hotel.",
     "fr": "Vous ne vous disputiez jamais avec le personnel de l'hôtel."
    },
    {
     "type": "fill",
     "text": "Usted ___ (decir) que el recibo estaba en su bolso.",
     "answers": [
      "decía"
     ],
     "why": "decir est régulier à l'imparfait : dec + <b>ía</b>."
    },
    {
     "type": "mcq",
     "q": "Imparfait de <b>poner</b> (ellos) :",
     "opts": [
      "ponían",
      "pondrían",
      "ponieron"
     ],
     "correct": 0,
     "why": "poner → pon + <b>ían</b> ; pondrían est un conditionnel."
    },
    {
     "type": "fill",
     "text": "Los recepcionistas ___ (saber) hablar inglés y ___ (pedir) siempre el pasaporte a los clientes.",
     "answers": [
      [
       "sabían"
      ],
      [
       "pedían"
      ]
     ],
     "why": "Sujet pluriel, verbes en -er / -ir : <b>-ían</b>."
    }
   ]
  },
  {
   "id": "imperfecto-formel-3",
   "reg": "formal",
   "title": "Les trois irréguliers : ser, ir, ver · Formel (usted)",
   "why": "Seuls <b>ser, ir et ver</b> sont irréguliers à l'imparfait, mais ce sont des verbes très fréquents dans un cabinet médical, un hôtel ou une administration.",
   "rule": "1. <b>ser</b> : era, eras, era, éramos, erais, eran.<br>2. <b>ir</b> : iba, ibas, iba, íbamos, ibais, iban.<br>3. <b>ver</b> : veía, veías, veía, veíamos, veíais, veían.<br>4. <b>usted</b> = forme de él ; <b>ustedes</b> = forme de ellos.",
   "examples": [
    {
     "es": "La sala de espera era muy pequeña.",
     "fr": "La salle d'attente était très petite."
    },
    {
     "es": "Los pacientes iban al centro de salud los lunes.",
     "fr": "Les patients allaient au centre de santé le lundi."
    },
    {
     "es": "Usted veía al especialista cada tres meses.",
     "fr": "Vous voyiez le spécialiste tous les trois mois."
    },
    {
     "es": "Éramos cinco en el departamento de ventas.",
     "fr": "Nous étions cinq au service des ventes."
    },
    {
     "es": "Ustedes iban a la ventanilla equivocada.",
     "fr": "Vous alliez au mauvais guichet."
    }
   ],
   "pitfalls": [
    {
     "wrong": "Los formularios seían largos.",
     "right": "Los formularios eran largos.",
     "why": "ser est irrégulier : eran, jamais seían."
    },
    {
     "wrong": "Ustedes ibaban a la ventanilla.",
     "right": "Ustedes iban a la ventanilla.",
     "why": "ir : iban, sans -aban."
    },
    {
     "wrong": "Usted vía al médico.",
     "right": "Usted veía al médico.",
     "why": "ver garde son e : veía, veías, veía…"
    }
   ],
   "exercises": [
    {
     "type": "mcq",
     "q": "Imparfait de <b>ser</b> (usted) :",
     "opts": [
      "fue",
      "seía",
      "era"
     ],
     "correct": 2,
     "why": "ser → <b>era</b> (fue est un indefinido)."
    },
    {
     "type": "fill",
     "text": "Cuando usted ___ (ser) director, la oficina estaba en Sevilla.",
     "answers": [
      "era"
     ],
     "why": "ser → era."
    },
    {
     "type": "fill",
     "text": "Los pacientes ___ (ir) al consultorio cada mes.",
     "answers": [
      "iban"
     ],
     "why": "ir → <b>iban</b> à la 3e personne du pluriel."
    },
    {
     "type": "speak",
     "es": "Señor Ramos, usted iba a la oficina en autobús.",
     "fr": "Monsieur Ramos, vous alliez au bureau en bus."
    },
    {
     "type": "mcq",
     "q": "Imparfait de <b>ver</b> (ellos) :",
     "opts": [
      "vían",
      "veían",
      "vieron"
     ],
     "correct": 1,
     "why": "ver → ve + <b>ían</b> = veían."
    },
    {
     "type": "fill",
     "text": "Los documentos ___ (ser) muy largos y nadie los leía.",
     "answers": [
      "eran"
     ],
     "why": "Sujet pluriel : ser → <b>eran</b>."
    },
    {
     "type": "fill",
     "text": "Usted ___ (ver) al doctor cada seis meses, ¿no?",
     "answers": [
      "veía"
     ],
     "why": "ver → <b>veía</b> pour usted."
    },
    {
     "type": "mcq",
     "q": "Imparfait : nosotros ___ al banco todos los viernes.",
     "opts": [
      "ibamos",
      "fuimos",
      "iremos",
      "íbamos"
     ],
     "correct": 3,
     "why": "ir → <b>íbamos</b>, avec accent."
    },
    {
     "type": "speak",
     "es": "Éramos tres en la sala de espera.",
     "fr": "Nous étions trois dans la salle d'attente."
    },
    {
     "type": "fill",
     "text": "Ustedes no ___ (ver) bien el cartel desde la entrada.",
     "answers": [
      "veían"
     ],
     "why": "ver + ustedes → veían."
    },
    {
     "type": "mcq",
     "q": "Quelle phrase est correcte ?",
     "opts": [
      "Los clientes eran muy amables.",
      "Los clientes seían muy amables.",
      "Los clientes eraban muy amables."
     ],
     "correct": 0,
     "why": "ser → <b>eran</b> ; seían et eraban n'existent pas."
    },
    {
     "type": "fill",
     "text": "Cuando ustedes ___ (ir) a la agencia, ___ (ver) siempre a la misma empleada.",
     "answers": [
      [
       "iban"
      ],
      [
       "veían"
      ]
     ],
     "why": "ir → iban ; ver → veían."
    }
   ]
  },
  {
   "id": "imperfecto-formel-4",
   "reg": "formal",
   "title": "Marqueurs de temps et habitudes · Formel (usted)",
   "why": "Des mots comme <b>antes, siempre, cada semana, en aquella época</b> annoncent presque toujours l'imperfecto : ils servent à décrire une routine ou une situation du passé, par exemple en entretien ou au guichet.",
   "rule": "1. Habitude : <b>siempre, normalmente, todos los días, cada semana, cada año</b> + imperfecto.<br>2. Décor d'une époque : <b>antes, en aquella época, de joven, hace años</b> + imperfecto.<br>3. Les marqueurs de moment précis (<b>ayer, el lunes pasado, una vez</b>) appellent plutôt l'indefinido.",
   "examples": [
    {
     "es": "Antes, la oficina abría a las nueve.",
     "fr": "Avant, le bureau ouvrait à neuf heures."
    },
    {
     "es": "Normalmente usted atendía a los clientes por la tarde.",
     "fr": "Normalement, vous receviez les clients l'après-midi."
    },
    {
     "es": "En aquella época, el hotel tenía veinte habitaciones.",
     "fr": "À cette époque, l'hôtel avait vingt chambres."
    },
    {
     "es": "Cada año, la empresa organizaba una cena con los clientes.",
     "fr": "Chaque année, l'entreprise organisait un dîner avec les clients."
    },
    {
     "es": "De joven, usted hacía prácticas en un banco.",
     "fr": "Jeune, vous faisiez des stages dans une banque."
    }
   ],
   "pitfalls": [
    {
     "wrong": "Antes la oficina abrió a las nueve.",
     "right": "Antes la oficina abría a las nueve.",
     "why": "« Antes » décrit une situation habituelle, pas un événement : imperfecto."
    },
    {
     "wrong": "Cada año enviamos una carta a los clientes. (habitude)",
     "right": "Cada año enviábamos una carta a los clientes.",
     "why": "« Cada año » signale la répétition : imperfecto."
    },
    {
     "wrong": "En aquella época la empresa tuvo diez empleados.",
     "right": "En aquella época la empresa tenía diez empleados.",
     "why": "On décrit l'état d'une époque, donc imperfecto."
    }
   ],
   "exercises": [
    {
     "type": "mcq",
     "q": "Quel mot appelle l'imparfait ?",
     "opts": [
      "Ayer",
      "El lunes pasado",
      "Todos los días",
      "Una vez"
     ],
     "correct": 2,
     "why": "<b>Todos los días</b> exprime une habitude."
    },
    {
     "type": "fill",
     "text": "Antes, los clientes ___ (esperar) una hora en la cola.",
     "answers": [
      "esperaban"
     ],
     "why": "« Antes » + habitude → <b>esperaban</b>."
    },
    {
     "type": "fill",
     "text": "Normalmente usted ___ (firmar) los documentos por la tarde.",
     "answers": [
      "firmaba"
     ],
     "why": "« Normalmente » → imperfecto : firmaba."
    },
    {
     "type": "speak",
     "es": "Cada año, el banco enviaba una carta a sus clientes.",
     "fr": "Chaque année, la banque envoyait une lettre à ses clients."
    },
    {
     "type": "mcq",
     "q": "Antes de 2020, la oficina ___ a las nueve.",
     "opts": [
      "abrió",
      "abría",
      "abrirá"
     ],
     "correct": 1,
     "why": "Horaire habituel du passé → <b>abría</b>."
    },
    {
     "type": "fill",
     "text": "En aquella época, la empresa ___ (tener) solo diez empleados.",
     "answers": [
      "tenía"
     ],
     "why": "Description d'une époque → tenía."
    },
    {
     "type": "fill",
     "text": "Generalmente ustedes ___ (llegar) tarde los viernes, ¿no?",
     "answers": [
      "llegaban"
     ],
     "why": "« Generalmente » + ustedes → <b>llegaban</b>."
    },
    {
     "type": "mcq",
     "q": "Hace años, cada semana el médico ___ a los mismos pacientes.",
     "opts": [
      "visitó",
      "visitará",
      "ha visitado",
      "visitaba"
     ],
     "correct": 3,
     "why": "« Cada semana » dans le passé lointain = habitude → <b>visitaba</b>."
    },
    {
     "type": "speak",
     "es": "Mientras esperaban, los clientes rellenaban un formulario.",
     "fr": "Pendant qu'ils attendaient, les clients remplissaient un formulaire."
    },
    {
     "type": "fill",
     "text": "De joven, usted ___ (hacer) prácticas en una gran empresa.",
     "answers": [
      "hacía"
     ],
     "why": "hacer → hac + <b>ía</b>."
    },
    {
     "type": "mcq",
     "q": "Todas las mañanas ___ el correo antes de salir.",
     "opts": [
      "consultaba",
      "consulté",
      "consultaré"
     ],
     "correct": 0,
     "why": "« Todas las mañanas » → habitude : <b>consultaba</b>."
    },
    {
     "type": "fill",
     "text": "Siempre ___ (venir) muchos clientes y los empleados ___ (trabajar) sin parar.",
     "answers": [
      [
       "venían"
      ],
      [
       "trabajaban"
      ]
     ],
     "why": "« Siempre » → imperfecto : venían, trabajaban."
    }
   ]
  },
  {
   "id": "imperfecto-formel-5",
   "reg": "formal",
   "title": "Imperfecto ou indefinido en situation · Formel (usted)",
   "why": "Dans un courriel ou un rendez-vous, on raconte souvent un <b>décor</b> (imperfecto) interrompu par un <b>événement</b> (indefinido). Ici, on s'entraîne à choisir le bon temps dans des scènes de travail.",
   "rule": "1. Décor, action en cours, habitude → <b>imperfecto</b>.<br>2. Événement ponctuel qui arrive ou interrompt → <b>indefinido</b>.<br>3. Structure type : <b>Estaba + gérondif / imperfecto</b> + <b>cuando</b> + indefinido.<br>4. Deux actions en parallèle : <b>mientras</b> + deux imperfectos.",
   "examples": [
    {
     "es": "Revisaba los documentos cuando entró el cliente.",
     "fr": "Je révisais les documents quand le client est entré."
    },
    {
     "es": "Hacía mucho calor cuando llegamos al hotel.",
     "fr": "Il faisait très chaud quand nous sommes arrivés à l'hôtel."
    },
    {
     "es": "Mientras usted esperaba, la recepcionista buscaba su expediente.",
     "fr": "Pendant que vous attendiez, la réceptionniste cherchait votre dossier."
    },
    {
     "es": "El paciente tenía fiebre cuando vino a la consulta.",
     "fr": "Le patient avait de la fièvre quand il est venu à la consultation."
    },
    {
     "es": "Cada vez que llamábamos, nadie contestaba.",
     "fr": "Chaque fois que nous appelions, personne ne répondait."
    }
   ],
   "pitfalls": [
    {
     "wrong": "Estaba en la reunión cuando sonaba el teléfono.",
     "right": "Estaba en la reunión cuando sonó el teléfono.",
     "why": "La sonnerie est l'événement qui interrompt : indefinido."
    },
    {
     "wrong": "Cuando llegué, el director hablaba por teléfono y salió. (décor)",
     "right": "Cuando llegué, el director hablaba por teléfono.",
     "why": "Le décor reste à l'imperfecto ; seul l'événement passe à l'indefinido."
    },
    {
     "wrong": "Ayer firmaba el contrato.",
     "right": "Ayer firmé el contrato.",
     "why": "Une action terminée à un moment précis (ayer) → indefinido."
    }
   ],
   "exercises": [
    {
     "type": "mcq",
     "q": "Estaba redactando un correo cuando ___ mi jefe.",
     "opts": [
      "entraba",
      "entró",
      "entra"
     ],
     "correct": 1,
     "why": "L'arrivée du chef est un événement : <b>entró</b>."
    },
    {
     "type": "fill",
     "text": "Usted ___ (hablar) con la directora cuando ___ (sonar) la alarma.",
     "answers": [
      [
       "hablaba"
      ],
      [
       "sonó"
      ]
     ],
     "why": "Décor : hablaba. Événement : sonó."
    },
    {
     "type": "fill",
     "text": "Cuando el paciente ___ (llegar), el médico ya ___ (estar) en la consulta.",
     "answers": [
      [
       "llegó"
      ],
      [
       "estaba"
      ]
     ],
     "why": "Événement : llegó. État préalable : estaba."
    },
    {
     "type": "speak",
     "es": "Cuando llamó el cliente, yo estaba en una reunión.",
     "fr": "Quand le client a appelé, j'étais en réunion."
    },
    {
     "type": "mcq",
     "q": "Hacía mucho calor cuando ___ al hotel (nous sommes arrivés).",
     "opts": [
      "llegábamos",
      "llegaremos",
      "llegamos"
     ],
     "correct": 2,
     "why": "Arrivée ponctuelle → <b>llegamos</b> (indefinido)."
    },
    {
     "type": "fill",
     "text": "Ayer usted ___ (firmar) el contrato y después ___ (salir) de la oficina.",
     "answers": [
      [
       "firmó"
      ],
      [
       "salió"
      ]
     ],
     "why": "Deux actions terminées hier → indefinido."
    },
    {
     "type": "fill",
     "text": "Cada vez que yo ___ (llamar) al banco, nadie ___ (contestar).",
     "answers": [
      [
       "llamaba"
      ],
      [
       "contestaba"
      ]
     ],
     "why": "« Cada vez que » = répétition → imperfecto."
    },
    {
     "type": "mcq",
     "q": "Laquelle de ces phrases exprime une habitude ?",
     "opts": [
      "El director cerró la oficina ayer.",
      "El director cerrará la oficina mañana.",
      "El director ha cerrado la oficina hoy.",
      "El director cerraba la oficina cada tarde."
     ],
     "correct": 3,
     "why": "« Cada tarde » + imperfecto = habitude."
    },
    {
     "type": "speak",
     "es": "Usted llegó cuando todos ya se iban.",
     "fr": "Vous êtes arrivé quand tout le monde partait déjà."
    },
    {
     "type": "fill",
     "text": "Mientras usted ___ (esperar), la recepcionista ___ (buscar) su expediente.",
     "answers": [
      [
       "esperaba"
      ],
      [
       "buscaba"
      ]
     ],
     "why": "Deux actions parallèles : deux imperfectos."
    },
    {
     "type": "mcq",
     "q": "« Il avait de la fièvre quand il est venu. »",
     "opts": [
      "Tenía fiebre cuando vino.",
      "Tuvo fiebre cuando venía.",
      "Tenía fiebre cuando viene."
     ],
     "correct": 0,
     "why": "État (fièvre) → imperfecto ; venue ponctuelle → indefinido."
    },
    {
     "type": "fill",
     "text": "Cuando ustedes ___ (entrar), la sala ___ (estar) vacía.",
     "answers": [
      [
       "entraron"
      ],
      [
       "estaba"
      ]
     ],
     "why": "Événement : entraron. Décor : estaba."
    }
   ]
  },
  {
   "id": "imperfecto-informel-1",
   "reg": "informal",
   "title": "Formation et irréguliers entre proches · Informel (tú)",
   "why": "Entre amis ou en famille, on se rappelle sans cesse « comment c'était ». Ici, on s'exerce à toutes les personnes (<b>tú, vosotros</b> compris) et aux trois irréguliers.",
   "rule": "1. <b>-ar</b> : -aba, -abas, -aba, -ábamos, -abais, -aban.<br>2. <b>-er / -ir</b> : -ía, -ías, -ía, -íamos, -íais, -ían.<br>3. Irréguliers : <b>ser</b> (era), <b>ir</b> (iba), <b>ver</b> (veía).<br>4. Accents : <b>-ábamos</b> et le <b>í</b> de -ía.",
   "examples": [
    {
     "es": "Tú cantabas siempre en el coche.",
     "fr": "Tu chantais toujours dans la voiture."
    },
    {
     "es": "Mis primos vivían al lado de casa.",
     "fr": "Mes cousins habitaient à côté de chez moi."
    },
    {
     "es": "Vosotros erais mis mejores amigos.",
     "fr": "Vous étiez mes meilleurs amis."
    },
    {
     "es": "Mi hermana y yo jugábamos en el jardín.",
     "fr": "Ma sœur et moi, nous jouions dans le jardin."
    },
    {
     "es": "Tú veías mucho a tus abuelos.",
     "fr": "Tu voyais beaucoup tes grands-parents."
    }
   ],
   "pitfalls": [
    {
     "wrong": "Tú cantabas y yo cantábamos.",
     "right": "Tú cantabas y yo cantaba.",
     "why": "Yo prend -aba ; -ábamos est uniquement pour nosotros."
    },
    {
     "wrong": "Nosotros comiamos pizza.",
     "right": "Nosotros comíamos pizza.",
     "why": "Le í de -íamos porte un accent."
    },
    {
     "wrong": "Vosotros iréis al parque de pequeños.",
     "right": "Vosotros ibais al parque de pequeños.",
     "why": "Pour une habitude passée, ir → ibais, pas le futur iréis."
    }
   ],
   "exercises": [
    {
     "type": "mcq",
     "q": "Imparfait de <b>jugar</b> (tú) :",
     "opts": [
      "jugabas",
      "juegabas",
      "jugaste"
     ],
     "correct": 0,
     "why": "jugar → jug + <b>abas</b> (pas de changement de radical à l'imparfait)."
    },
    {
     "type": "fill",
     "text": "Cuando éramos pequeños, mi hermano y yo ___ (jugar) al fútbol en el patio.",
     "answers": [
      "jugábamos"
     ],
     "why": "Nosotros → <b>-ábamos</b>."
    },
    {
     "type": "fill",
     "text": "Tú ___ (cantar) siempre en la ducha.",
     "answers": [
      "cantabas"
     ],
     "why": "Tú → -abas."
    },
    {
     "type": "speak",
     "es": "Mi abuela cocinaba unas croquetas buenísimas.",
     "fr": "Ma grand-mère faisait des croquettes délicieuses."
    },
    {
     "type": "mcq",
     "q": "Imparfait de <b>ir</b> (vosotros) :",
     "opts": [
      "iráis",
      "ibais",
      "fuisteis"
     ],
     "correct": 1,
     "why": "ir → iba, ibas, iba, íbamos, <b>ibais</b>, iban."
    },
    {
     "type": "fill",
     "text": "Mis primos ___ (vivir) cerca de mi casa.",
     "answers": [
      "vivían"
     ],
     "why": "ellos → <b>-ían</b>."
    },
    {
     "type": "fill",
     "text": "¿Tú ___ (ver) dibujos animados los sábados?",
     "answers": [
      "veías"
     ],
     "why": "ver → ve + <b>ías</b>."
    },
    {
     "type": "mcq",
     "q": "Quelle forme est correcte ?",
     "opts": [
      "Nosotros comiamos",
      "Nosotros comábamos",
      "Nosotros comíamos"
     ],
     "correct": 2,
     "why": "comer → com + <b>íamos</b>."
    },
    {
     "type": "speak",
     "es": "Mi padre siempre escuchaba la radio en el coche.",
     "fr": "Mon père écoutait toujours la radio dans la voiture."
    },
    {
     "type": "fill",
     "text": "Vosotros ___ (ser) mis mejores amigos en el cole.",
     "answers": [
      "erais"
     ],
     "why": "ser → era, eras, era, éramos, <b>erais</b>, eran."
    },
    {
     "type": "mcq",
     "q": "Imparfait de <b>escribir</b> (yo) :",
     "opts": [
      "escribiba",
      "escribiré",
      "escribí",
      "escribía"
     ],
     "correct": 3,
     "why": "escribir → escrib + <b>ía</b>."
    },
    {
     "type": "fill",
     "text": "Mi tía ___ (dormir) la siesta y yo ___ (leer) tebeos.",
     "answers": [
      [
       "dormía"
      ],
      [
       "leía"
      ]
     ],
     "why": "Dormir et leer : terminaison <b>-ía</b>."
    }
   ]
  },
  {
   "id": "imperfecto-informel-2",
   "reg": "informal",
   "title": "Souvenirs : imperfecto ou indefinido · Informel (tú)",
   "why": "Quand on raconte un souvenir à un ami, on mélange <b>décor</b> (imperfecto) et <b>événements</b> (indefinido). Le français utilise souvent le passé composé là où l'espagnol exige l'un ou l'autre : il faut choisir.",
   "rule": "1. Ce qui durait, se répétait ou décrit une personne / un lieu → <b>imperfecto</b>.<br>2. Ce qui s'est passé une fois, terminé → <b>indefinido</b>.<br>3. <b>Cuando</b> + indefinido = l'événement qui interrompt le décor.<br>4. Piège : « tous les étés, nous sommes allés… » se dit <b>íbamos</b> (habitude).",
   "examples": [
    {
     "es": "Llovía mucho cuando salimos del cine.",
     "fr": "Il pleuvait beaucoup quand nous sommes sortis du cinéma."
    },
    {
     "es": "De pequeña, mi tía me contaba cuentos cada noche.",
     "fr": "Petite, ma tante me racontait des histoires chaque soir."
    },
    {
     "es": "Ayer comimos en casa de mis tíos.",
     "fr": "Hier, nous avons mangé chez mes oncles."
    },
    {
     "es": "Tenía quince años cuando empecé a tocar la guitarra.",
     "fr": "J'avais quinze ans quand j'ai commencé à jouer de la guitare."
    },
    {
     "es": "Mientras cenábamos, llamó Luis.",
     "fr": "Pendant que nous dînions, Luis a appelé."
    }
   ],
   "pitfalls": [
    {
     "wrong": "Todos los veranos fuimos a casa de la abuela.",
     "right": "Todos los veranos íbamos a casa de la abuela.",
     "why": "Le français dit « nous sommes allés », mais l'habitude se met à l'imperfecto."
    },
    {
     "wrong": "Mi abuelo fue alto y tuvo el pelo blanco.",
     "right": "Mi abuelo era alto y tenía el pelo blanco.",
     "why": "Une description physique dans un souvenir = imperfecto."
    },
    {
     "wrong": "Estaba duchándome cuando me llamabas.",
     "right": "Estaba duchándome cuando me llamaste.",
     "why": "L'appel est l'événement ponctuel : indefinido."
    }
   ],
   "exercises": [
    {
     "type": "mcq",
     "q": "De pequeña, mi tía me ___ cuentos cada noche.",
     "opts": [
      "contó",
      "contaba",
      "ha contado"
     ],
     "correct": 1,
     "why": "« Cada noche » = habitude → <b>contaba</b>."
    },
    {
     "type": "fill",
     "text": "Anoche ___ (conocer) a un chico que ___ (llevar) gafas rojas.",
     "answers": [
      [
       "conocí"
      ],
      [
       "llevaba"
      ]
     ],
     "why": "Rencontre ponctuelle : conocí. Description : llevaba."
    },
    {
     "type": "fill",
     "text": "Todos los sábados ___ (quedar) con los amigos en el parque.",
     "answers": [
      "quedaba",
      "quedaban",
      "quedábamos"
     ],
     "why": "« Todos los sábados » → habitude : <b>quedábamos</b>."
    },
    {
     "type": "speak",
     "es": "Llovía mucho cuando salimos del cine.",
     "fr": "Il pleuvait beaucoup quand nous sommes sortis du cinéma."
    },
    {
     "type": "mcq",
     "q": "« Tous les étés, nous allions chez mamie. »",
     "opts": [
      "Todos los veranos íbamos a casa de la abuela.",
      "Todos los veranos fuimos a casa de la abuela.",
      "Todos los veranos hemos ido a casa de la abuela."
     ],
     "correct": 0,
     "why": "Habitude → <b>íbamos</b>, même si le français dit parfois « nous sommes allés »."
    },
    {
     "type": "fill",
     "text": "Cuando tú me ___ (llamar), yo ___ (estar) duchándome.",
     "answers": [
      [
       "llamaste"
      ],
      [
       "estaba"
      ]
     ],
     "why": "Appel ponctuel : llamaste. Action en cours : estaba."
    },
    {
     "type": "fill",
     "text": "El domingo pasado ___ (comer) en casa de mis tíos.",
     "answers": [
      "comimos"
     ],
     "why": "« El domingo pasado » = moment précis → indefinido : comimos."
    },
    {
     "type": "mcq",
     "q": "Mientras cenábamos, ___ Luis (il a appelé).",
     "opts": [
      "llamaba",
      "llamaría",
      "llamó"
     ],
     "correct": 2,
     "why": "L'appel interrompt le dîner : <b>llamó</b>."
    },
    {
     "type": "speak",
     "es": "Éramos pequeños cuando nos mudamos a Valencia.",
     "fr": "Nous étions petits quand nous avons déménagé à Valence."
    },
    {
     "type": "fill",
     "text": "Mi hermana ___ (tener) quince años cuando ___ (empezar) a tocar la guitarra.",
     "answers": [
      [
       "tenía"
      ],
      [
       "empezó"
      ]
     ],
     "why": "Âge = décor : tenía. Début = événement : empezó."
    },
    {
     "type": "mcq",
     "q": "Choisis la phrase naturelle pour décrire ton grand-père dans un souvenir :",
     "opts": [
      "Mi abuelo fue alto y tuvo el pelo blanco.",
      "Mi abuelo será alto y tendrá el pelo blanco.",
      "Mi abuelo ha sido alto y ha tenido el pelo blanco.",
      "Mi abuelo era alto y tenía el pelo blanco."
     ],
     "correct": 3,
     "why": "Description d'une personne dans un souvenir → <b>era / tenía</b>."
    },
    {
     "type": "fill",
     "text": "Ayer ___ (ir) al súper porque ___ (querer) preparar una paella.",
     "answers": [
      [
       "fui"
      ],
      [
       "quería"
      ]
     ],
     "why": "Action terminée : fui. Intention de fond : quería."
    }
   ]
  }
 ],
 "temps-futur": [
  {
   "id": "futuro-formel-1",
   "reg": "formal",
   "title": "Les verbes en -ar au futur · Formel (usted)",
   "why": "Au travail, on annonce ce qu'on <b>fera</b> : appels, envois, signatures. Avec <b>usted</b> et <b>ustedes</b>, deux terminaisons suffisent : <b>-á</b> et <b>-án</b>.",
   "rule": "1. Garde l'infinitif entier : <b>llamar</b>.<br>2. usted → <b>-á</b> : llamar<b>á</b>.<br>3. ustedes → <b>-án</b> : llamar<b>án</b>.<br>4. L'accent est obligatoire, et le <b>a</b> de -ar ne devient jamais e.",
   "examples": [
    {
     "es": "La directora firmará el contrato el viernes.",
     "fr": "La directrice signera le contrat vendredi."
    },
    {
     "es": "Ustedes pagarán en la recepción.",
     "fr": "Vous paierez à la réception."
    },
    {
     "es": "Mi colega le llamará esta tarde.",
     "fr": "Mon collègue vous appellera cet après-midi."
    },
    {
     "es": "Usted esperará en la sala de al lado.",
     "fr": "Vous attendrez dans la salle d'à côté."
    },
    {
     "es": "Le enviaremos la factura por correo electrónico.",
     "fr": "Nous vous enverrons la facture par courriel.",
     "note": "nosotros : -emos"
    }
   ],
   "pitfalls": [
    {
     "wrong": "El gerente firmara el contrato.",
     "right": "El gerente firmará el contrato.",
     "why": "Sans l'accent sur le dernier a, ce n'est pas le futur."
    },
    {
     "wrong": "Usted llamerá a su banco.",
     "right": "Usted llamará a su banco.",
     "why": "Le -ar garde son a : on ajoute -á à llamar, on ne le change pas en e."
    },
    {
     "wrong": "Ustedes pagaran en la caja.",
     "right": "Ustedes pagarán en la caja.",
     "why": "L'accent est obligatoire aussi à la forme ustedes."
    }
   ],
   "exercises": [
    {
     "type": "mcq",
     "q": "La directrice signera le contrat : La directora ___ el contrato.",
     "opts": [
      "firma",
      "firmará",
      "firmó"
     ],
     "correct": 1,
     "why": "Futur : infinitif <b>firmar</b> + <b>á</b>. « firma » est le présent et « firmó » le passé."
    },
    {
     "type": "fill",
     "text": "Mañana usted ___ (firmar) el contrato en la oficina.",
     "answers": [
      "firmará"
     ],
     "why": "usted → infinitif + <b>á</b> : firmará."
    },
    {
     "type": "fill",
     "text": "Ustedes ___ (pagar) en la recepción del hotel.",
     "answers": [
      "pagarán"
     ],
     "why": "ustedes → infinitif + <b>án</b> : pagarán."
    },
    {
     "type": "speak",
     "es": "La gerente le llamará mañana por la mañana.",
     "fr": "La directrice vous appellera demain matin."
    },
    {
     "type": "mcq",
     "q": "Quelle terminaison pour « ustedes » au futur ?",
     "opts": [
      "-an",
      "-á",
      "-án"
     ],
     "correct": 2,
     "why": "ustedes = ellos : <b>-án</b>, avec l'accent."
    },
    {
     "type": "fill",
     "text": "El banco le ___ (llamar) por teléfono.",
     "answers": [
      "llamará"
     ],
     "why": "Le sujet « el banco » = él : llamar + <b>á</b>."
    },
    {
     "type": "fill",
     "text": "Nuestro equipo ___ (revisar) su solicitud esta semana.",
     "answers": [
      "revisará"
     ],
     "why": "« Nuestro equipo » = él : revisar + <b>á</b>."
    },
    {
     "type": "mcq",
     "q": "Vous réserverez la salle : Usted ___ la sala.",
     "opts": [
      "reservará",
      "reservaré",
      "reserverá"
     ],
     "correct": 0,
     "why": "On garde le <b>a</b> de reservar et on ajoute <b>á</b>. « reservaré » serait « moi »."
    },
    {
     "type": "fill",
     "text": "Usted ___ (confirmar) la cita y ustedes ___ (esperar) en la sala.",
     "answers": [
      [
       "confirmará"
      ],
      [
       "esperarán"
      ]
     ],
     "why": "usted → <b>-á</b> ; ustedes → <b>-án</b>."
    },
    {
     "type": "fill",
     "text": "Los técnicos ___ (arreglar) el ordenador esta tarde.",
     "answers": [
      "arreglarán"
     ],
     "why": "« Los técnicos » = ellos : arreglar + <b>án</b>."
    },
    {
     "type": "speak",
     "es": "Ustedes entregarán los documentos la próxima semana.",
     "fr": "Vous remettrez les documents la semaine prochaine."
    },
    {
     "type": "mcq",
     "q": "Quelle phrase est correcte ?",
     "opts": [
      "Ustedes cambiaran la fecha.",
      "Ustedes cambiarán la fecha.",
      "Ustedes cambiarén la fecha."
     ],
     "correct": 1,
     "why": "La forme est cambiar + <b>án</b>, avec l'accent sur le a."
    }
   ]
  },
  {
   "id": "futuro-formel-2",
   "reg": "formal",
   "title": "Les verbes en -er et -ir au futur · Formel (usted)",
   "why": "Pour décrire une suite d'actions au bureau ou à l'hôtel, tu as besoin des verbes en <b>-er</b> et <b>-ir</b>. Bonne nouvelle : les terminaisons sont les <b>mêmes</b> qu'en -ar.",
   "rule": "1. Garde l'infinitif entier : <b>atender</b>, <b>recibir</b>.<br>2. usted → <b>-á</b> : atender<b>á</b>, recibir<b>á</b>.<br>3. ustedes → <b>-án</b> : atender<b>án</b>, recibir<b>án</b>.",
   "examples": [
    {
     "es": "El médico le atenderá en diez minutos.",
     "fr": "Le médecin vous recevra dans dix minutes."
    },
    {
     "es": "Usted recibirá un mensaje de confirmación.",
     "fr": "Vous recevrez un message de confirmation."
    },
    {
     "es": "La empresa responderá a su correo hoy mismo.",
     "fr": "L'entreprise répondra à votre courriel aujourd'hui même."
    },
    {
     "es": "Ustedes escribirán sus datos en este formulario.",
     "fr": "Vous écrirez vos coordonnées sur ce formulaire."
    },
    {
     "es": "El hotel les ofrecerá un desayuno gratis.",
     "fr": "L'hôtel vous offrira un petit-déjeuner gratuit."
    }
   ],
   "pitfalls": [
    {
     "wrong": "Usted escribira su nombre aquí.",
     "right": "Usted escribirá su nombre aquí.",
     "why": "Sans accent, la forme n'existe pas : le futur porte toujours l'accent."
    },
    {
     "wrong": "Ustedes vivirían en el centro.",
     "right": "Ustedes vivirán en el centro.",
     "why": "-ían est une autre forme ; le futur de ustedes se termine par <b>-án</b>."
    },
    {
     "wrong": "Usted comará la comida.",
     "right": "Usted comerá la comida.",
     "why": "Le -er garde son e : comer + á, on ne le change pas en a."
    }
   ],
   "exercises": [
    {
     "type": "mcq",
     "q": "El médico le ___ en diez minutos.",
     "opts": [
      "atendará",
      "atenderá",
      "atenderé"
     ],
     "correct": 1,
     "why": "atender + <b>á</b> pour él. « atenderé » correspondrait à yo."
    },
    {
     "type": "fill",
     "text": "Usted ___ (recibir) un mensaje de confirmación.",
     "answers": [
      "recibirá"
     ],
     "why": "usted → recibir + <b>á</b>."
    },
    {
     "type": "fill",
     "text": "Ustedes ___ (dormir) en el hotel junto a la estación.",
     "answers": [
      "dormirán"
     ],
     "why": "dormir est régulier au futur : dormir + <b>án</b>."
    },
    {
     "type": "speak",
     "es": "La empresa responderá a su correo hoy mismo.",
     "fr": "L'entreprise répondra à votre courriel aujourd'hui même."
    },
    {
     "type": "mcq",
     "q": "Quelle phrase est correcte ?",
     "opts": [
      "Usted escribará aquí su nombre.",
      "Usted escribira aquí su nombre.",
      "Usted escribirá aquí su nombre."
     ],
     "correct": 2,
     "why": "escribir garde son <b>i</b> et prend <b>á</b>."
    },
    {
     "type": "fill",
     "text": "El hotel les ___ (ofrecer) un café de bienvenida.",
     "answers": [
      "ofrecerá"
     ],
     "why": "ofrecer + <b>á</b>."
    },
    {
     "type": "fill",
     "text": "Los clientes ___ (decidir) antes del viernes.",
     "answers": [
      "decidirán"
     ],
     "why": "« Los clientes » = ellos : decidir + <b>án</b>."
    },
    {
     "type": "mcq",
     "q": "Ustedes ___ a todas las preguntas.",
     "opts": [
      "responderán",
      "responderá",
      "responderan"
     ],
     "correct": 0,
     "why": "ustedes demande <b>-án</b>, avec l'accent."
    },
    {
     "type": "fill",
     "text": "Usted ___ (leer) el contrato y ustedes lo ___ (corregir).",
     "answers": [
      [
       "leerá"
      ],
      [
       "corregirán"
      ]
     ],
     "why": "usted → leer + <b>á</b> ; ustedes → corregir + <b>án</b>."
    },
    {
     "type": "fill",
     "text": "Mi jefe ___ (volver) de viaje el lunes.",
     "answers": [
      "volverá"
     ],
     "why": "volver est régulier au futur : volver + <b>á</b>."
    },
    {
     "type": "speak",
     "es": "Ustedes recibirán nuestra respuesta la próxima semana.",
     "fr": "Vous recevrez notre réponse la semaine prochaine."
    },
    {
     "type": "mcq",
     "q": "Quelle terminaison pour usted, avec un verbe en -ir ?",
     "opts": [
      "-é",
      "-á",
      "-ás"
     ],
     "correct": 1,
     "why": "usted = él : <b>-á</b>. « -ás » est pour tú."
    }
   ]
  },
  {
   "id": "futuro-formel-3",
   "reg": "formal",
   "title": "Tendrá, hará, podrá, dirá : les racines qui changent · Formel (usted)",
   "why": "Quatre verbes très fréquents au travail changent de <b>racine</b> au futur : tener, hacer, poder, decir. Les terminaisons, elles, ne bougent pas.",
   "rule": "1. tener → <b>tendr-</b> ; hacer → <b>har-</b> ; poder → <b>podr-</b> ; decir → <b>dir-</b>.<br>2. Ajoute les terminaisons habituelles : usted <b>-á</b>, ustedes <b>-án</b>.<br>3. Ne mets pas -á sur l'infinitif entier : tenerá n'existe pas.",
   "examples": [
    {
     "es": "El director tendrá tiempo el martes.",
     "fr": "Le directeur aura du temps mardi."
    },
    {
     "es": "Usted podrá pagar con tarjeta.",
     "fr": "Vous pourrez payer par carte."
    },
    {
     "es": "Los técnicos harán una revisión completa.",
     "fr": "Les techniciens feront une révision complète."
    },
    {
     "es": "La secretaria le dirá la hora de la reunión.",
     "fr": "La secrétaire vous dira l'heure de la réunion."
    },
    {
     "es": "Ustedes tendrán una habitación con vistas.",
     "fr": "Vous aurez une chambre avec vue."
    }
   ],
   "pitfalls": [
    {
     "wrong": "Usted tenerá una cita el jueves.",
     "right": "Usted tendrá una cita el jueves.",
     "why": "tener devient <b>tendr-</b> au futur."
    },
    {
     "wrong": "Ustedes hacerán el pedido.",
     "right": "Ustedes harán el pedido.",
     "why": "hacer devient <b>har-</b> : on perd le -ce-."
    },
    {
     "wrong": "El gerente le decirá la verdad.",
     "right": "El gerente le dirá la verdad.",
     "why": "decir devient <b>dir-</b>."
    }
   ],
   "exercises": [
    {
     "type": "mcq",
     "q": "Usted ___ una respuesta pronto.",
     "opts": [
      "tenerá",
      "tendrá",
      "tendré"
     ],
     "correct": 1,
     "why": "tener → <b>tendr-</b> + á. « tendré » serait pour yo."
    },
    {
     "type": "fill",
     "text": "Mañana el gerente ___ (tener) una reunión con los clientes.",
     "answers": [
      "tendrá"
     ],
     "why": "tener → tendr- + <b>á</b>."
    },
    {
     "type": "fill",
     "text": "Ustedes ___ (poder) dejar el equipaje en recepción.",
     "answers": [
      "podrán"
     ],
     "why": "poder → podr- + <b>án</b>."
    },
    {
     "type": "speak",
     "es": "Usted podrá pagar con tarjeta en la caja.",
     "fr": "Vous pourrez payer par carte à la caisse."
    },
    {
     "type": "mcq",
     "q": "Les techniciens feront la révision : Los técnicos ___ la revisión.",
     "opts": [
      "hacerán",
      "hagán",
      "harán"
     ],
     "correct": 2,
     "why": "hacer → <b>har-</b> + án."
    },
    {
     "type": "fill",
     "text": "El técnico ___ (hacer) una revisión completa del aparato.",
     "answers": [
      "hará"
     ],
     "why": "hacer → har- + <b>á</b>."
    },
    {
     "type": "fill",
     "text": "Mi asistente le ___ (decir) la dirección exacta.",
     "answers": [
      "dirá"
     ],
     "why": "decir → dir- + <b>á</b>."
    },
    {
     "type": "mcq",
     "q": "Quelle est la racine de « decir » au futur ?",
     "opts": [
      "dir-",
      "dec-",
      "dic-"
     ],
     "correct": 0,
     "why": "decir devient <b>dir-</b> : dirá, dirán."
    },
    {
     "type": "fill",
     "text": "Usted ___ (tener) que firmar y yo le ___ (decir) dónde.",
     "answers": [
      [
       "tendrá"
      ],
      [
       "diré"
      ]
     ],
     "why": "tener → tendrá ; yo → dir- + <b>é</b>."
    },
    {
     "type": "fill",
     "text": "Ustedes no ___ (poder) entrar sin cita previa.",
     "answers": [
      "podrán"
     ],
     "why": "poder → podr- + <b>án</b>, avec « no » devant."
    },
    {
     "type": "speak",
     "es": "El director tendrá tiempo el martes por la tarde.",
     "fr": "Le directeur aura du temps mardi après-midi."
    },
    {
     "type": "mcq",
     "q": "Quelle phrase est correcte ?",
     "opts": [
      "Ustedes decirán la verdad.",
      "Ustedes dirán la verdad.",
      "Ustedes dicirán la verdad."
     ],
     "correct": 1,
     "why": "decir → dir- + <b>án</b>."
    }
   ]
  },
  {
   "id": "futuro-formel-4",
   "reg": "formal",
   "title": "Saldrá, vendrá, pondrá, sabrá, querrá : les autres irréguliers · Formel (usted)",
   "why": "Pour parler d'horaires, de visites et de décisions, tu auras besoin de cinq autres verbes : salir, venir, poner, saber, querer.",
   "rule": "1. salir → <b>saldr-</b>, venir → <b>vendr-</b>, poner → <b>pondr-</b> (un <b>d</b> remplace la voyelle).<br>2. saber → <b>sabr-</b>, querer → <b>querr-</b> (le e tombe).<br>3. Terminaisons habituelles : usted <b>-á</b>, ustedes <b>-án</b>.",
   "examples": [
    {
     "es": "El autobús saldrá de la estación a las nueve.",
     "fr": "Le bus partira de la gare à neuf heures."
    },
    {
     "es": "El inspector vendrá la próxima semana.",
     "fr": "L'inspecteur viendra la semaine prochaine."
    },
    {
     "es": "Usted pondrá su firma al final de la página.",
     "fr": "Vous mettrez votre signature en bas de la page."
    },
    {
     "es": "Ustedes sabrán el resultado el lunes.",
     "fr": "Vous connaîtrez le résultat lundi."
    },
    {
     "es": "El cliente querrá una factura detallada.",
     "fr": "Le client voudra une facture détaillée."
    }
   ],
   "pitfalls": [
    {
     "wrong": "El inspector venirá mañana.",
     "right": "El inspector vendrá mañana.",
     "why": "venir devient <b>vendr-</b>."
    },
    {
     "wrong": "Ustedes saberán el resultado el lunes.",
     "right": "Ustedes sabrán el resultado el lunes.",
     "why": "saber perd son e : <b>sabr-</b>."
    },
    {
     "wrong": "El cliente quererá otra habitación.",
     "right": "El cliente querrá otra habitación.",
     "why": "querer devient <b>querr-</b>, avec deux r."
    }
   ],
   "exercises": [
    {
     "type": "mcq",
     "q": "L'inspecteur viendra : El inspector ___ la semana próxima.",
     "opts": [
      "vendrá",
      "venirá",
      "viendrá"
     ],
     "correct": 0,
     "why": "venir → <b>vendr-</b> + á."
    },
    {
     "type": "fill",
     "text": "El autobús ___ (salir) de la estación a las nueve.",
     "answers": [
      "saldrá"
     ],
     "why": "salir → saldr- + <b>á</b>."
    },
    {
     "type": "fill",
     "text": "Usted ___ (poner) su firma al final de la página.",
     "answers": [
      "pondrá"
     ],
     "why": "poner → pondr- + <b>á</b>."
    },
    {
     "type": "speak",
     "es": "Ustedes sabrán el resultado el lunes por la mañana.",
     "fr": "Vous connaîtrez le résultat lundi matin."
    },
    {
     "type": "mcq",
     "q": "Quelle est la forme de « querer » pour usted ?",
     "opts": [
      "quererá",
      "querrá",
      "quierrá"
     ],
     "correct": 1,
     "why": "querer → <b>querr-</b> + á."
    },
    {
     "type": "fill",
     "text": "Los invitados ___ (venir) en autocar desde el aeropuerto.",
     "answers": [
      "vendrán"
     ],
     "why": "venir → vendr- + <b>án</b>."
    },
    {
     "type": "fill",
     "text": "Ustedes ___ (saber) la fecha por correo electrónico.",
     "answers": [
      "sabrán"
     ],
     "why": "saber → sabr- + <b>án</b>."
    },
    {
     "type": "mcq",
     "q": "Quelle phrase est correcte ?",
     "opts": [
      "La directora ponerá la fecha.",
      "La directora poderá la fecha.",
      "La directora pondrá la fecha."
     ],
     "correct": 2,
     "why": "poner → <b>pondr-</b> + á."
    },
    {
     "type": "fill",
     "text": "El huésped ___ (salir) a las diez y el nuevo cliente ___ (venir) a las once.",
     "answers": [
      [
       "saldrá"
      ],
      [
       "vendrá"
      ]
     ],
     "why": "salir → saldrá ; venir → vendrá."
    },
    {
     "type": "fill",
     "text": "El cliente ___ (querer) una factura detallada.",
     "answers": [
      "querrá"
     ],
     "why": "querer → querr- + <b>á</b>."
    },
    {
     "type": "speak",
     "es": "El inspector vendrá a la oficina la próxima semana.",
     "fr": "L'inspecteur viendra au bureau la semaine prochaine."
    },
    {
     "type": "mcq",
     "q": "Quelle est la racine de « saber » au futur ?",
     "opts": [
      "sabr-",
      "saber-",
      "sab-"
     ],
     "correct": 0,
     "why": "saber perd son e : <b>sabr-</b>."
    }
   ]
  },
  {
   "id": "futuro-formel-5",
   "reg": "formal",
   "title": "Courriels et rendez-vous : le futur en situation · Formel (usted)",
   "why": "Dans un courriel ou au guichet, le futur s'appuie sur des <b>repères de temps</b>, des questions polies et des négations. C'est ici que tout se rassemble.",
   "rule": "1. Repères : <b>mañana, pasado mañana, la semana próxima, el mes que viene, dentro de dos días</b>.<br>2. « Dans deux jours » = <b>dentro de</b> dos días.<br>3. Négation : « no » devant le verbe : no podrá.<br>4. Question : ¿Podrá usted venir?",
   "examples": [
    {
     "es": "Le responderemos dentro de dos días.",
     "fr": "Nous vous répondrons dans deux jours."
    },
    {
     "es": "Pasado mañana tendrá los resultados.",
     "fr": "Après-demain vous aurez les résultats."
    },
    {
     "es": "El mes que viene abriremos una nueva oficina.",
     "fr": "Le mois prochain nous ouvrirons un nouveau bureau."
    },
    {
     "es": "¿Podrá usted venir el lunes?",
     "fr": "Pourrez-vous venir lundi ?"
    },
    {
     "es": "No recibirán el pedido antes del jueves.",
     "fr": "Ils ne recevront pas la commande avant jeudi."
    }
   ],
   "pitfalls": [
    {
     "wrong": "Después mañana le llamaré.",
     "right": "Pasado mañana le llamaré.",
     "why": "« Après-demain » se dit pasado mañana."
    },
    {
     "wrong": "¿Podra usted venir el lunes?",
     "right": "¿Podrá usted venir el lunes?",
     "why": "L'accent reste dans la question."
    },
    {
     "wrong": "Le responderemos hace dos días.",
     "right": "Le responderemos dentro de dos días.",
     "why": "hace veut dire « il y a » (passé) ; pour « dans », on emploie dentro de."
    }
   ],
   "exercises": [
    {
     "type": "mcq",
     "q": "Nous vous répondrons dans deux jours : Le responderemos ___ dos días.",
     "opts": [
      "hace",
      "dentro de",
      "desde"
     ],
     "correct": 1,
     "why": "« Dans » (futur) se dit <b>dentro de</b>. « hace » = il y a."
    },
    {
     "type": "fill",
     "text": "___ mañana tendrá usted los resultados. (après-demain)",
     "answers": [
      "Pasado",
      "pasado"
     ],
     "why": "« Après-demain » = <b>pasado mañana</b>."
    },
    {
     "type": "fill",
     "text": "El mes que viene ___ (abrir, nosotros) una nueva oficina.",
     "answers": [
      "abriremos"
     ],
     "why": "nosotros → abrir + <b>emos</b>, sans accent."
    },
    {
     "type": "speak",
     "es": "Le responderemos dentro de dos días.",
     "fr": "Nous vous répondrons dans deux jours."
    },
    {
     "type": "mcq",
     "q": "Quelle phrase pose la question correctement ?",
     "opts": [
      "¿Podra usted venir el lunes?",
      "¿Podrá usted venir el lunes?",
      "¿Poderá usted venir el lunes?"
     ],
     "correct": 1,
     "why": "poder → podr- + <b>á</b>, avec l'accent."
    },
    {
     "type": "fill",
     "text": "Ustedes no ___ (recibir) el pedido antes del jueves.",
     "answers": [
      "recibirán"
     ],
     "why": "« no » devant le verbe, qui reste au futur : recibirán."
    },
    {
     "type": "fill",
     "text": "La semana próxima el director ___ (viajar) a Sevilla.",
     "answers": [
      "viajará"
     ],
     "why": "viajar + <b>á</b>."
    },
    {
     "type": "mcq",
     "q": "Que veut dire « la semana próxima » ?",
     "opts": [
      "la semaine prochaine",
      "la semaine dernière",
      "cette semaine"
     ],
     "correct": 0,
     "why": "próxima = prochaine : c'est un repère de futur."
    },
    {
     "type": "fill",
     "text": "Usted ___ (venir) el lunes y nosotros le ___ (dar) los documentos.",
     "answers": [
      [
       "vendrá"
      ],
      [
       "daremos"
      ]
     ],
     "why": "venir → vendrá ; dar est régulier : dar + <b>emos</b>."
    },
    {
     "type": "fill",
     "text": "¿Qué ___ (decir) el nuevo contrato sobre las vacaciones?",
     "answers": [
      "dirá"
     ],
     "why": "decir → dir- + <b>á</b>."
    },
    {
     "type": "speak",
     "es": "Pasado mañana tendrá los resultados en su correo.",
     "fr": "Après-demain vous aurez les résultats dans votre courriel."
    },
    {
     "type": "mcq",
     "q": "Comment dire « Vous ne pourrez pas entrer sans rendez-vous » ?",
     "opts": [
      "Podrá no entrar sin cita previa.",
      "No poderá entrar sin cita previa.",
      "No podrá entrar sin cita previa."
     ],
     "correct": 2,
     "why": "« no » + podrá (podr- + á). Les autres changent le sens ou la racine."
    }
   ]
  },
  {
   "id": "futuro-informel-1",
   "reg": "informal",
   "title": "Le futur des verbes réguliers entre amis · Informel (tú)",
   "why": "Entre amis, on fait des plans : un repas, un voyage, une soirée. Pour tous les verbes réguliers, on garde l'<b>infinitif</b> et on ajoute la terminaison.",
   "rule": "1. Garde l'infinitif entier : <b>cenar</b>, <b>comer</b>, <b>escribir</b>.<br>2. Ajoute : <b>-é, -ás, -á, -emos, -éis, -án</b>.<br>3. Les mêmes terminaisons pour -ar, -er et -ir.",
   "examples": [
    {
     "es": "El sábado cenaremos en casa de Marta.",
     "fr": "Samedi, on dînera chez Marta."
    },
    {
     "es": "¿Me llamarás luego?",
     "fr": "Tu m'appelleras plus tard ?"
    },
    {
     "es": "Mis primos viajarán a Lisboa en verano.",
     "fr": "Mes cousins voyageront à Lisbonne en été."
    },
    {
     "es": "Te escribiré un mensaje esta noche.",
     "fr": "Je t'écrirai un message ce soir."
    },
    {
     "es": "Mañana aprenderás a cocinar una tortilla.",
     "fr": "Demain tu apprendras à cuisiner une tortilla."
    }
   ],
   "pitfalls": [
    {
     "wrong": "Mañana te llamare.",
     "right": "Mañana te llamaré.",
     "why": "Le futur de yo porte un accent sur le é final."
    },
    {
     "wrong": "Nosotros cenarémos en casa.",
     "right": "Nosotros cenaremos en casa.",
     "why": "À la forme nosotros, il n'y a pas d'accent."
    },
    {
     "wrong": "Tú llamerás a tu madre.",
     "right": "Tú llamarás a tu madre.",
     "why": "On garde le a de llamar : -ar + ás."
    }
   ],
   "exercises": [
    {
     "type": "mcq",
     "q": "Tu m'appelleras ce soir : ¿Me ___ esta noche?",
     "opts": [
      "llamarás",
      "llamarís",
      "llamerás"
     ],
     "correct": 0,
     "why": "llamar + <b>ás</b>. Le a de -ar ne change pas."
    },
    {
     "type": "fill",
     "text": "Mañana yo ___ (preparar) la cena.",
     "answers": [
      "prepararé"
     ],
     "why": "yo → infinitif + <b>é</b>."
    },
    {
     "type": "fill",
     "text": "Tú ___ (comer) con nosotros el domingo.",
     "answers": [
      "comerás"
     ],
     "why": "tú → infinitif + <b>ás</b>."
    },
    {
     "type": "speak",
     "es": "El sábado cenaremos en casa de Marta.",
     "fr": "Samedi, on dînera chez Marta."
    },
    {
     "type": "mcq",
     "q": "Laquelle veut dire « vous (vosotros) écrirez » ?",
     "opts": [
      "escribiremos",
      "escribirán",
      "escribiréis"
     ],
     "correct": 2,
     "why": "vosotros → infinitif + <b>éis</b>."
    },
    {
     "type": "fill",
     "text": "Mis primos ___ (viajar) a Lisboa en verano.",
     "answers": [
      "viajarán"
     ],
     "why": "« Mis primos » = ellos : viajar + <b>án</b>."
    },
    {
     "type": "fill",
     "text": "Esta noche te ___ (escribir) un mensaje largo.",
     "answers": [
      "escribiré"
     ],
     "why": "yo → escribir + <b>é</b>."
    },
    {
     "type": "mcq",
     "q": "Quelle phrase est au futur et bien écrite ?",
     "opts": [
      "Nosotros compramos pan.",
      "Nosotros compraremos pan.",
      "Nosotros comprarémos pan."
     ],
     "correct": 1,
     "why": "nosotros → comprar + <b>emos</b>, sans accent."
    },
    {
     "type": "fill",
     "text": "Tú ___ (bailar) y yo ___ (cantar) en la fiesta.",
     "answers": [
      [
       "bailarás"
      ],
      [
       "cantaré"
      ]
     ],
     "why": "tú → <b>-ás</b> ; yo → <b>-é</b>."
    },
    {
     "type": "fill",
     "text": "Vosotros ___ (aprender) a cocinar en el curso.",
     "answers": [
      "aprenderéis"
     ],
     "why": "vosotros → aprender + <b>éis</b>."
    },
    {
     "type": "speak",
     "es": "Mañana aprenderás a cocinar una tortilla.",
     "fr": "Demain tu apprendras à cuisiner une tortilla."
    },
    {
     "type": "mcq",
     "q": "Mañana ellos ___ la película en casa.",
     "opts": [
      "verán",
      "veerán",
      "vean"
     ],
     "correct": 0,
     "why": "ver est régulier au futur : ver + <b>án</b>, un seul e."
    }
   ]
  },
  {
   "id": "futuro-informel-2",
   "reg": "informal",
   "title": "Tendré, haré, podré, diré entre amis · Informel (tú)",
   "why": "Entre amis, on demande des services et on promet des choses : tener, hacer, poder et decir sont partout. Ils changent de racine, pas de terminaison.",
   "rule": "1. tener → <b>tendr-</b> ; hacer → <b>har-</b> ; poder → <b>podr-</b> ; decir → <b>dir-</b>.<br>2. Ajoute : <b>-é, -ás, -á, -emos, -éis, -án</b>.",
   "examples": [
    {
     "es": "Este finde tendré tiempo para ti.",
     "fr": "Ce week-end j'aurai du temps pour toi."
    },
    {
     "es": "¿Me harás un favor?",
     "fr": "Tu me rendras un service ?"
    },
    {
     "es": "No podremos ir al cine esta noche.",
     "fr": "Nous ne pourrons pas aller au cinéma ce soir."
    },
    {
     "es": "Te diré un secreto.",
     "fr": "Je te dirai un secret."
    },
    {
     "es": "Mis padres tendrán una casa en la playa.",
     "fr": "Mes parents auront une maison à la plage."
    }
   ],
   "pitfalls": [
    {
     "wrong": "Yo teneré tiempo el sábado.",
     "right": "Yo tendré tiempo el sábado.",
     "why": "tener devient <b>tendr-</b>."
    },
    {
     "wrong": "Tú haceras la cena.",
     "right": "Tú harás la cena.",
     "why": "hacer devient <b>har-</b>, et le futur de tú porte l'accent : harás."
    },
    {
     "wrong": "Yo deciré la verdad.",
     "right": "Yo diré la verdad.",
     "why": "decir devient <b>dir-</b>."
    }
   ],
   "exercises": [
    {
     "type": "mcq",
     "q": "Je te dirai la vérité : Te ___ la verdad.",
     "opts": [
      "deciré",
      "dicé",
      "diré"
     ],
     "correct": 2,
     "why": "decir → <b>dir-</b> + é."
    },
    {
     "type": "fill",
     "text": "Este finde yo ___ (tener) tiempo para ti.",
     "answers": [
      "tendré"
     ],
     "why": "tener → tendr- + <b>é</b>."
    },
    {
     "type": "fill",
     "text": "¿Tú ___ (poder) venir a mi cumple?",
     "answers": [
      "podrás"
     ],
     "why": "poder → podr- + <b>ás</b>."
    },
    {
     "type": "speak",
     "es": "¿Me harás un favor mañana por la tarde?",
     "fr": "Tu me rendras un service demain après-midi ?"
    },
    {
     "type": "mcq",
     "q": "Mis padres ___ una casa en la playa.",
     "opts": [
      "tendrán",
      "tenerán",
      "tengrán"
     ],
     "correct": 0,
     "why": "tener → tendr- + <b>án</b>."
    },
    {
     "type": "fill",
     "text": "Nosotros no ___ (poder) ir al cine esta noche.",
     "answers": [
      "podremos"
     ],
     "why": "poder → podr- + <b>emos</b>."
    },
    {
     "type": "fill",
     "text": "Mi hermano ___ (hacer) la compra el sábado.",
     "answers": [
      "hará"
     ],
     "why": "hacer → har- + <b>á</b>."
    },
    {
     "type": "mcq",
     "q": "Quelle phrase est correcte ?",
     "opts": [
      "Haceré la cena.",
      "Haré la cena.",
      "Hacré la cena."
     ],
     "correct": 1,
     "why": "hacer → <b>har-</b> + é."
    },
    {
     "type": "fill",
     "text": "Yo ___ (hacer) el postre y tú ___ (traer) el pan.",
     "answers": [
      [
       "haré"
      ],
      [
       "traerás"
      ]
     ],
     "why": "hacer → haré ; traer est régulier : traer + <b>ás</b>."
    },
    {
     "type": "fill",
     "text": "Vosotros ___ (decir) la verdad tarde o temprano.",
     "answers": [
      "diréis"
     ],
     "why": "decir → dir- + <b>éis</b>."
    },
    {
     "type": "speak",
     "es": "Te diré un secreto muy gracioso mañana.",
     "fr": "Je te dirai demain un secret très drôle."
    },
    {
     "type": "mcq",
     "q": "Quelle est la racine de « poder » au futur ?",
     "opts": [
      "pod-",
      "poder-",
      "podr-"
     ],
     "correct": 2,
     "why": "poder devient <b>podr-</b> : podré, podrás…"
    }
   ]
  },
  {
   "id": "futuro-informel-3",
   "reg": "informal",
   "title": "Saldré, vendré, pondré, sabré, querré entre amis · Informel (tú)",
   "why": "Pour parler de sorties, de visites et d'envies, il te faut cinq autres verbes irréguliers : salir, venir, poner, saber, querer.",
   "rule": "1. salir → <b>saldr-</b>, venir → <b>vendr-</b>, poner → <b>pondr-</b>.<br>2. saber → <b>sabr-</b>, querer → <b>querr-</b>.<br>3. Terminaisons : <b>-é, -ás, -á, -emos, -éis, -án</b>.",
   "examples": [
    {
     "es": "¿A qué hora saldrás de casa?",
     "fr": "À quelle heure sortiras-tu de chez toi ?"
    },
    {
     "es": "Mis tíos vendrán a comer el domingo.",
     "fr": "Mes oncle et tante viendront manger dimanche."
    },
    {
     "es": "Pondré música en la fiesta.",
     "fr": "Je mettrai de la musique à la fête."
    },
    {
     "es": "Sabrás la verdad muy pronto.",
     "fr": "Tu connaîtras la vérité très vite."
    },
    {
     "es": "Mi sobrino querrá un perro, seguro.",
     "fr": "Mon neveu voudra un chien, c'est sûr."
    }
   ],
   "pitfalls": [
    {
     "wrong": "¿Tú venirás mañana?",
     "right": "¿Tú vendrás mañana?",
     "why": "venir devient <b>vendr-</b>."
    },
    {
     "wrong": "Yo saberé la respuesta.",
     "right": "Yo sabré la respuesta.",
     "why": "saber perd son e : <b>sabr-</b>."
    },
    {
     "wrong": "Yo poneré la mesa.",
     "right": "Yo pondré la mesa.",
     "why": "poner devient <b>pondr-</b>."
    }
   ],
   "exercises": [
    {
     "type": "mcq",
     "q": "Tu sortiras tôt : Tú ___ temprano.",
     "opts": [
      "saldrás",
      "salirás",
      "saliás"
     ],
     "correct": 0,
     "why": "salir → <b>saldr-</b> + ás."
    },
    {
     "type": "fill",
     "text": "Mis tíos ___ (venir) a comer el domingo.",
     "answers": [
      "vendrán"
     ],
     "why": "venir → vendr- + <b>án</b>."
    },
    {
     "type": "fill",
     "text": "Yo ___ (poner) música en la fiesta.",
     "answers": [
      "pondré"
     ],
     "why": "poner → pondr- + <b>é</b>."
    },
    {
     "type": "speak",
     "es": "¿A qué hora saldrás de casa mañana?",
     "fr": "À quelle heure sortiras-tu de chez toi demain ?"
    },
    {
     "type": "mcq",
     "q": "Quelle phrase est correcte ?",
     "opts": [
      "Saberás la verdad muy pronto.",
      "Sabrás la verdad muy pronto.",
      "Sabrés la verdad muy pronto."
     ],
     "correct": 1,
     "why": "saber → <b>sabr-</b> + ás."
    },
    {
     "type": "fill",
     "text": "Mi sobrino ___ (querer) un perro, seguro.",
     "answers": [
      "querrá"
     ],
     "why": "querer → querr- + <b>á</b>."
    },
    {
     "type": "fill",
     "text": "Nosotros ___ (venir) a buscarte a las ocho.",
     "answers": [
      "vendremos"
     ],
     "why": "venir → vendr- + <b>emos</b>."
    },
    {
     "type": "mcq",
     "q": "Tu mettras la table : Tú ___ la mesa.",
     "opts": [
      "ponerás",
      "ponrás",
      "pondrás"
     ],
     "correct": 2,
     "why": "poner → <b>pondr-</b> + ás."
    },
    {
     "type": "fill",
     "text": "Tú ___ (querer) pizza y yo ___ (querer) pasta.",
     "answers": [
      [
       "querrás"
      ],
      [
       "querré"
      ]
     ],
     "why": "querer → querr- ; tú → <b>-ás</b>, yo → <b>-é</b>."
    },
    {
     "type": "fill",
     "text": "Vosotros ___ (salir) de viaje el viernes.",
     "answers": [
      "saldréis"
     ],
     "why": "salir → saldr- + <b>éis</b>."
    },
    {
     "type": "speak",
     "es": "Sabrás la verdad muy pronto, te lo prometo.",
     "fr": "Tu connaîtras la vérité très vite, je te le promets."
    },
    {
     "type": "mcq",
     "q": "Quelle est la racine de « venir » au futur ?",
     "opts": [
      "venir-",
      "vendr-",
      "viendr-"
     ],
     "correct": 1,
     "why": "venir devient <b>vendr-</b> : vendré, vendrás…"
    }
   ]
  },
  {
   "id": "futuro-informel-4",
   "reg": "informal",
   "title": "Plans entre amis : repères, questions et négations · Informel (tú)",
   "why": "Pour faire des projets avec des amis, on combine le futur avec des <b>repères de temps</b>, des questions et des refus. Tout ce que tu as vu se rassemble.",
   "rule": "1. Repères : <b>mañana, el finde que viene, dentro de una hora, algún día, el año que viene</b>.<br>2. « Dans une heure » = <b>dentro de</b> una hora.<br>3. Négation : « no » + futur, ou « nunca » seul devant le verbe.<br>4. Question : ¿Vendrás? (l'accent reste).",
   "examples": [
    {
     "es": "Dentro de una hora saldremos de casa.",
     "fr": "Dans une heure nous sortirons de la maison."
    },
    {
     "es": "El año que viene viviré en Valencia.",
     "fr": "L'année prochaine j'habiterai à Valence."
    },
    {
     "es": "¿Vendrás a la playa el finde que viene?",
     "fr": "Tu viendras à la plage le week-end prochain ?"
    },
    {
     "es": "No iré a la fiesta, tendré que trabajar.",
     "fr": "Je n'irai pas à la fête, je devrai travailler."
    },
    {
     "es": "Algún día viajaremos juntos por Asia.",
     "fr": "Un jour nous voyagerons ensemble en Asie."
    },
    {
     "es": "Nunca olvidaré este verano.",
     "fr": "Je n'oublierai jamais cet été."
    }
   ],
   "pitfalls": [
    {
     "wrong": "Dentro una hora saldremos.",
     "right": "Dentro de una hora saldremos.",
     "why": "Il faut toujours le <b>de</b> : dentro de."
    },
    {
     "wrong": "¿Vendras mañana?",
     "right": "¿Vendrás mañana?",
     "why": "L'accent reste dans la question."
    },
    {
     "wrong": "Nunca no volveré allí.",
     "right": "Nunca volveré allí.",
     "why": "Avec « nunca » devant le verbe, on n'ajoute pas « no »."
    }
   ],
   "exercises": [
    {
     "type": "mcq",
     "q": "« Dans une heure, on sort » : ___ una hora saldremos.",
     "opts": [
      "Dentro de",
      "Dentro",
      "Después"
     ],
     "correct": 0,
     "why": "« Dans » (futur) = <b>dentro de</b>."
    },
    {
     "type": "fill",
     "text": "El año que viene ___ (vivir, yo) en Valencia.",
     "answers": [
      "viviré"
     ],
     "why": "yo → vivir + <b>é</b>."
    },
    {
     "type": "fill",
     "text": "¿Tú ___ (venir) a la playa el finde que viene?",
     "answers": [
      "vendrás"
     ],
     "why": "venir → vendr- + <b>ás</b>."
    },
    {
     "type": "speak",
     "es": "Dentro de una hora saldremos de casa.",
     "fr": "Dans une heure nous sortirons de la maison."
    },
    {
     "type": "mcq",
     "q": "Quelle phrase est correcte ?",
     "opts": [
      "¿Vendras mañana?",
      "¿Vendrás mañana?",
      "¿Venirás mañana?"
     ],
     "correct": 1,
     "why": "venir → vendr- + <b>ás</b>, avec l'accent."
    },
    {
     "type": "fill",
     "text": "No ___ (ir, yo) a la fiesta, tendré que trabajar.",
     "answers": [
      "iré"
     ],
     "why": "ir est régulier au futur : ir + <b>é</b>."
    },
    {
     "type": "fill",
     "text": "Algún día ___ (viajar, nosotros) juntos por Asia.",
     "answers": [
      "viajaremos"
     ],
     "why": "nosotros → viajar + <b>emos</b>."
    },
    {
     "type": "mcq",
     "q": "Comment dire « Je n'oublierai jamais cet été » ?",
     "opts": [
      "Nunca no olvidaré este verano.",
      "No nunca olvidaré este verano.",
      "Nunca olvidaré este verano."
     ],
     "correct": 2,
     "why": "« nunca » devant le verbe suffit, sans « no »."
    },
    {
     "type": "fill",
     "text": "Esta tarde yo ___ (estar) en casa y tú ___ (hacer) la compra.",
     "answers": [
      [
       "estaré"
      ],
      [
       "harás"
      ]
     ],
     "why": "estar est régulier : estar + <b>é</b> ; hacer → har- + <b>ás</b>."
    },
    {
     "type": "fill",
     "text": "Mis amigos no ___ (poder) venir hasta las diez.",
     "answers": [
      "podrán"
     ],
     "why": "poder → podr- + <b>án</b>."
    },
    {
     "type": "speak",
     "es": "Algún día viajaremos juntos por Asia, ¿verdad?",
     "fr": "Un jour nous voyagerons ensemble en Asie, n'est-ce pas ?"
    },
    {
     "type": "mcq",
     "q": "Mañana nosotros ___ en la playa.",
     "opts": [
      "estarémos",
      "estaremos",
      "estaramos"
     ],
     "correct": 1,
     "why": "nosotros → estar + <b>emos</b>, sans accent."
    }
   ]
  }
 ],
 "temps-condicional": [
  {
   "id": "condicional-formel-1",
   "reg": "formal",
   "title": "Les verbes en -ar : llamaría, pagarían · Formel (usted)",
   "why": "Au bureau ou avec un client, le <b>conditionnel</b> rend la phrase plus douce et plus professionnelle. Commence par les verbes en <b>-ar</b>, les plus nombreux.",
   "rule": "1. Garde l'<b>infinitif entier</b> : llamar, pagar, enviar.<br>2. Ajoute <b>-ía</b> (yo, usted) ou <b>-ían</b> (ustedes) : llamar<b>ía</b>, pagar<b>ían</b>.<br>3. <b>Nosotros</b> : -íamos (ayudaríamos). L'accent sur le <b>í</b> est toujours obligatoire.",
   "examples": [
    {
     "es": "Usted llamaría al cliente por la tarde.",
     "fr": "Vous appelleriez le client dans l'après-midi."
    },
    {
     "es": "Ustedes pagarían con tarjeta.",
     "fr": "Vous paieriez par carte.",
     "note": "ustedes → -ían"
    },
    {
     "es": "Yo enviaría el documento hoy.",
     "fr": "J'enverrais le document aujourd'hui."
    },
    {
     "es": "Nosotros ayudaríamos con mucho gusto.",
     "fr": "Nous aiderions avec grand plaisir."
    },
    {
     "es": "¿Usted trabajaría los sábados?",
     "fr": "Travailleriez-vous le samedi ?"
    }
   ],
   "pitfalls": [
    {
     "wrong": "Ustedes pagarian con tarjeta.",
     "right": "Ustedes pagarían con tarjeta.",
     "why": "L'accent sur le í est obligatoire."
    },
    {
     "wrong": "Ustedes cancelaríais el pedido.",
     "right": "Ustedes cancelarían el pedido.",
     "why": "Avec ustedes, on utilise la forme « ellos » : -ían, pas -íais."
    },
    {
     "wrong": "Yo enviaba el documento hoy. (pour « j'enverrais »)",
     "right": "Yo enviaría el documento hoy.",
     "why": "enviaba est l'imparfait ; le conditionnel prend l'infinitif entier + ía."
    }
   ],
   "exercises": [
    {
     "type": "mcq",
     "q": "« Ustedes annuleraient » =",
     "opts": [
      "cancelarían",
      "cancelaría",
      "cancelaríamos"
     ],
     "correct": 0,
     "why": "ustedes → <b>-ían</b> : cancelarían."
    },
    {
     "type": "mcq",
     "q": "« Vous appelleriez » (usted) =",
     "opts": [
      "llamará",
      "llamaría",
      "llamaba"
     ],
     "correct": 1,
     "why": "llamar + <b>ía</b> = llamaría (llamará = futur)."
    },
    {
     "type": "fill",
     "text": "Usted ___ (llamar) al cliente por la mañana.",
     "answers": [
      "llamaría"
     ],
     "why": "llamar + ía."
    },
    {
     "type": "fill",
     "text": "Ustedes ___ (pagar) con tarjeta.",
     "answers": [
      "pagarían"
     ],
     "why": "ustedes → pagar + ían."
    },
    {
     "type": "speak",
     "es": "Yo enviaría el documento hoy mismo.",
     "fr": "J'enverrais le document aujourd'hui même."
    },
    {
     "type": "mcq",
     "q": "Quelle terminaison pour un verbe en -ar au conditionnel (usted) ?",
     "opts": [
      "-ará",
      "-ería",
      "-aría"
     ],
     "correct": 2,
     "why": "On garde l'infinitif en -ar et on ajoute <b>-ía</b> : -aría."
    },
    {
     "type": "fill",
     "text": "Nosotros le ___ (ayudar) con mucho gusto.",
     "answers": [
      "ayudaríamos"
     ],
     "why": "ayudar + íamos."
    },
    {
     "type": "mcq",
     "q": "Quelle écriture est correcte ?",
     "opts": [
      "trabajariamos",
      "trabajaríamos",
      "trabajáriamos"
     ],
     "correct": 1,
     "why": "L'accent est sur le <b>í</b> : trabajaríamos."
    },
    {
     "type": "fill",
     "text": "¿Usted ___ (trabajar) los sábados?",
     "answers": [
      "trabajaría"
     ],
     "why": "trabajar + ía."
    },
    {
     "type": "fill",
     "text": "Con más tiempo, la empresa ___ (revisar) todos los pedidos.",
     "answers": [
      "revisaría"
     ],
     "why": "Situation imaginée → revisar + ía."
    },
    {
     "type": "fill",
     "text": "Yo ___ (llamar) a su secretaria y ella ___ (confirmar) la cita.",
     "answers": [
      [
       "llamaría"
      ],
      [
       "confirmaría"
      ]
     ],
     "why": "llamar + ía ; confirmar + ía."
    },
    {
     "type": "speak",
     "es": "Nosotros enviaríamos las facturas el viernes.",
     "fr": "Nous enverrions les factures vendredi."
    }
   ]
  },
  {
   "id": "condicional-formel-2",
   "reg": "formal",
   "title": "Les verbes en -er / -ir : vendería, escribirían · Formel (usted)",
   "why": "Les verbes en <b>-er</b> et <b>-ir</b> prennent <b>exactement les mêmes terminaisons</b> que ceux en -ar. Utile pour parler de contrats, de comptes ou de courriers de façon courtoise.",
   "rule": "1. Garde l'<b>infinitif entier</b> : vender, escribir, recibir.<br>2. Ajoute <b>-ía / -ían / -íamos</b> : vender<b>ía</b>, escribir<b>ían</b>.<br>3. Ne retire jamais le <b>-i-</b> ou le <b>-e-</b> de l'infinitif : recibir → recib<b>ir</b>ía.",
   "examples": [
    {
     "es": "Usted vendería el coche a buen precio.",
     "fr": "Vous vendriez la voiture à bon prix."
    },
    {
     "es": "Ustedes escribirían una carta de queja.",
     "fr": "Vous écririez une lettre de réclamation."
    },
    {
     "es": "Recibiríamos a los clientes en la entrada.",
     "fr": "Nous recevrions les clients à l'entrée."
    },
    {
     "es": "¿Aprendería usted otro idioma por su trabajo?",
     "fr": "Apprendriez-vous une autre langue pour votre travail ?"
    },
    {
     "es": "Yo abriría la cuenta hoy.",
     "fr": "J'ouvrirais le compte aujourd'hui."
    }
   ],
   "pitfalls": [
    {
     "wrong": "Recibería a los clientes.",
     "right": "Recibiría a los clientes.",
     "why": "On garde l'infinitif entier : recibir + ía."
    },
    {
     "wrong": "Ustedes comprendrían el problema.",
     "right": "Ustedes comprenderían el problema.",
     "why": "Le conditionnel régulier garde tout l'infinitif : comprender + ían."
    },
    {
     "wrong": "Usted venderia el coche.",
     "right": "Usted vendería el coche.",
     "why": "L'accent sur le í est obligatoire."
    }
   ],
   "exercises": [
    {
     "type": "mcq",
     "q": "« Ustedes écriraient » =",
     "opts": [
      "escribirán",
      "escribían",
      "escribirían"
     ],
     "correct": 2,
     "why": "escribir + <b>ían</b> (escribirán = futur)."
    },
    {
     "type": "fill",
     "text": "Usted ___ (vender) la casa a buen precio.",
     "answers": [
      "vendería"
     ],
     "why": "vender + ía."
    },
    {
     "type": "fill",
     "text": "Ustedes ___ (abrir) una cuenta en otro banco.",
     "answers": [
      "abrirían"
     ],
     "why": "abrir + ían."
    },
    {
     "type": "mcq",
     "q": "« Je recevrais les clients » =",
     "opts": [
      "Yo recibiré a los clientes",
      "Yo recibiría a los clientes",
      "Yo recibería a los clientes"
     ],
     "correct": 1,
     "why": "recibir + ía : on garde le <b>-i-</b> de l'infinitif."
    },
    {
     "type": "speak",
     "es": "¿Usted aprendería otro idioma por su trabajo?",
     "fr": "Apprendriez-vous une autre langue pour votre travail ?"
    },
    {
     "type": "fill",
     "text": "Nosotros ___ (recibir) a los clientes en el hotel.",
     "answers": [
      "recibiríamos"
     ],
     "why": "recibir + íamos."
    },
    {
     "type": "mcq",
     "q": "Pour les verbes en -er / -ir, le conditionnel se forme avec :",
     "opts": [
      "le radical + -ía (com-ía)",
      "l'infinitif entier + -ía",
      "l'infinitif sans -r + -ía"
     ],
     "correct": 1,
     "why": "Toujours <b>l'infinitif entier</b> + ía."
    },
    {
     "type": "fill",
     "text": "¿Usted ___ (decidir) hoy o mañana?",
     "answers": [
      "decidiría"
     ],
     "why": "decidir + ía."
    },
    {
     "type": "fill",
     "text": "Con más empleados, la empresa ___ (producir) más.",
     "answers": [
      "produciría"
     ],
     "why": "producir + ía (régulier au conditionnel)."
    },
    {
     "type": "mcq",
     "q": "« Ustedes comprendraient » =",
     "opts": [
      "comprenderían",
      "comprendrían",
      "comprenderán"
     ],
     "correct": 0,
     "why": "comprender est régulier : infinitif entier + <b>ían</b>."
    },
    {
     "type": "fill",
     "text": "Yo ___ (leer) el contrato con calma y ___ (escribir) mis dudas.",
     "answers": [
      [
       "leería"
      ],
      [
       "escribiría"
      ]
     ],
     "why": "leer + ía ; escribir + ía."
    },
    {
     "type": "speak",
     "es": "Ustedes recibirían el pedido en tres días.",
     "fr": "Vous recevriez la commande dans trois jours."
    }
   ]
  },
  {
   "id": "condicional-formel-3",
   "reg": "formal",
   "title": "Les irréguliers : tendría, podría, querría · Formel (usted)",
   "why": "Les verbes les plus utiles pour être poli (<b>poder, querer, tener, decir</b>) sont irréguliers. Leur radical est <b>le même qu'au futur</b>.",
   "rule": "1. Radicaux irréguliers : tener → <b>tendr-</b>, poder → <b>podr-</b>, querer → <b>querr-</b>, hacer → <b>har-</b>, decir → <b>dir-</b>, saber → <b>sabr-</b>, salir → <b>saldr-</b>, poner → <b>pondr-</b>, venir → <b>vendr-</b>.<br>2. Ajoute les terminaisons habituelles : <b>-ía, -ían, -íamos</b>.",
   "examples": [
    {
     "es": "¿Podría decirme dónde está la recepción?",
     "fr": "Pourriez-vous me dire où est la réception ?",
     "note": "poder → podr-"
    },
    {
     "es": "Querría reservar una habitación para dos noches.",
     "fr": "Je voudrais réserver une chambre pour deux nuits.",
     "note": "querer → querr-"
    },
    {
     "es": "Ustedes tendrían que traer el pasaporte.",
     "fr": "Vous devriez apporter le passeport.",
     "note": "tener → tendr-"
    },
    {
     "es": "Haríamos el pago hoy mismo.",
     "fr": "Nous ferions le paiement aujourd'hui même.",
     "note": "hacer → har-"
    },
    {
     "es": "Usted sabría la respuesta mejor que yo.",
     "fr": "Vous sauriez la réponse mieux que moi.",
     "note": "saber → sabr-"
    }
   ],
   "pitfalls": [
    {
     "wrong": "Tenería que firmar aquí.",
     "right": "Tendría que firmar aquí.",
     "why": "tener est irrégulier : tendr-."
    },
    {
     "wrong": "Podería ayudarle.",
     "right": "Podría ayudarle.",
     "why": "poder → podr-, comme au futur."
    },
    {
     "wrong": "Hacería una reserva.",
     "right": "Haría una reserva.",
     "why": "hacer → har-."
    }
   ],
   "exercises": [
    {
     "type": "mcq",
     "q": "tener, usted, conditionnel :",
     "opts": [
      "tenería",
      "tendría",
      "tenía"
     ],
     "correct": 1,
     "why": "Radical <b>tendr-</b> + ía (tenía = imparfait)."
    },
    {
     "type": "fill",
     "text": "¿___ (poder, usted) enviarme el presupuesto?",
     "answers": [
      "Podría",
      "podría"
     ],
     "why": "poder → podr- + ía."
    },
    {
     "type": "fill",
     "text": "Yo ___ (querer) reservar una habitación para dos noches.",
     "answers": [
      "querría"
     ],
     "why": "querer → querr- + ía."
    },
    {
     "type": "mcq",
     "q": "Radical de <b>hacer</b> au conditionnel :",
     "opts": [
      "hacer-",
      "har-",
      "hag-",
      "haz-"
     ],
     "correct": 1,
     "why": "hacer → <b>har-</b> (haría)."
    },
    {
     "type": "speak",
     "es": "¿Podría decirme dónde está la recepción?",
     "fr": "Pourriez-vous me dire où est la réception ?"
    },
    {
     "type": "fill",
     "text": "Ustedes ___ (tener) que traer el pasaporte.",
     "answers": [
      "tendrían"
     ],
     "why": "tener → tendr- + ían."
    },
    {
     "type": "fill",
     "text": "¿Me ___ (decir, usted) su número de teléfono, por favor?",
     "answers": [
      "diría"
     ],
     "why": "decir → dir- + ía."
    },
    {
     "type": "mcq",
     "q": "saber, yo, conditionnel :",
     "opts": [
      "sabería",
      "sabría",
      "sapría"
     ],
     "correct": 1,
     "why": "saber → <b>sabr-</b> + ía."
    },
    {
     "type": "fill",
     "text": "Nosotros ___ (hacer) el pago hoy, pero el banco está cerrado.",
     "answers": [
      "haríamos"
     ],
     "why": "hacer → har- + íamos."
    },
    {
     "type": "mcq",
     "q": "Ustedes ___ por la puerta de atrás.",
     "opts": [
      "salirían",
      "salgarían",
      "saldrían"
     ],
     "correct": 2,
     "why": "salir → <b>saldr-</b> + ían."
    },
    {
     "type": "fill",
     "text": "Nosotros ___ (poner) el aviso en la puerta, pero ___ (necesitar) su permiso.",
     "answers": [
      [
       "pondríamos"
      ],
      [
       "necesitaríamos"
      ]
     ],
     "why": "poner → pondr- + íamos ; necesitar est régulier."
    },
    {
     "type": "speak",
     "es": "Querría hablar con el director, por favor.",
     "fr": "Je voudrais parler avec le directeur, s'il vous plaît."
    }
   ]
  },
  {
   "id": "condicional-formel-4",
   "reg": "formal",
   "title": "Demandes polies : ¿Podría…? Me gustaría… · Formel (usted)",
   "why": "À l'hôtel, à la banque, chez le médecin ou dans un courriel, on <b>adoucit</b> une demande avec le conditionnel. Comme « je voudrais » ou « pourriez-vous » en français.",
   "rule": "1. Demander : <b>¿Podría + infinitif…?</b> / <b>¿Le importaría + infinitif…?</b><br>2. Dire ce qu'on veut : <b>Me gustaría…</b> / <b>Querría…</b> / <b>Necesitaría…</b><br>3. Remercier : <b>Le agradecería…</b> (« je vous serais reconnaissant »).",
   "examples": [
    {
     "es": "Me gustaría reservar una mesa para cuatro.",
     "fr": "Je voudrais réserver une table pour quatre."
    },
    {
     "es": "¿Le importaría esperar un momento?",
     "fr": "Cela vous dérangerait-il d'attendre un instant ?"
    },
    {
     "es": "Le agradeceríamos mucho su respuesta.",
     "fr": "Nous vous serions très reconnaissants de votre réponse.",
     "note": "courriel pro"
    },
    {
     "es": "Necesitaría su dirección, si es posible.",
     "fr": "J'aurais besoin de votre adresse, si possible."
    },
    {
     "es": "Preferiría una habitación tranquila.",
     "fr": "Je préférerais une chambre calme."
    }
   ],
   "pitfalls": [
    {
     "wrong": "Me gustará reservar una mesa.",
     "right": "Me gustaría reservar una mesa.",
     "why": "gustará = futur (« ça me plaira ») ; pour « je voudrais », il faut le conditionnel."
    },
    {
     "wrong": "¿Podrá abrir la ventana, por favor?",
     "right": "¿Podría abrir la ventana, por favor?",
     "why": "podrá = « pourra » ; pour une demande polie, utilise podría."
    },
    {
     "wrong": "Quiero un café. (au serveur d'un hôtel chic)",
     "right": "Querría un café, por favor.",
     "why": "Quiero est correct mais direct ; le conditionnel est plus courtois."
    }
   ],
   "exercises": [
    {
     "type": "mcq",
     "q": "Au café d'un hôtel, la phrase la plus polie :",
     "opts": [
      "Quiero un café.",
      "Dame un café.",
      "Querría un café, por favor."
     ],
     "correct": 2,
     "why": "<b>Querría</b> adoucit la demande."
    },
    {
     "type": "fill",
     "text": "Me ___ (gustar) reservar una mesa para cuatro.",
     "answers": [
      "gustaría"
     ],
     "why": "Me gustaría = je voudrais."
    },
    {
     "type": "fill",
     "text": "¿Le ___ (importar) cerrar la puerta?",
     "answers": [
      "importaría"
     ],
     "why": "importar + ía : demande très courtoise."
    },
    {
     "type": "mcq",
     "q": "« Pourriez-vous répéter ? » (usted) =",
     "opts": [
      "¿Podría repetir?",
      "¿Podrá repetir?",
      "¿Pudo repetir?"
     ],
     "correct": 0,
     "why": "Demande polie → <b>podría</b>."
    },
    {
     "type": "speak",
     "es": "¿Le importaría esperar un momento, por favor?",
     "fr": "Cela vous dérangerait-il d'attendre un instant, s'il vous plaît ?"
    },
    {
     "type": "fill",
     "text": "Nosotros le ___ (agradecer) mucho su respuesta.",
     "answers": [
      "agradeceríamos"
     ],
     "why": "agradecer + íamos (courriel poli)."
    },
    {
     "type": "mcq",
     "q": "Quelle phrase est la plus polie ?",
     "opts": [
      "Necesito su dirección.",
      "Necesitaría su dirección, si es posible.",
      "Deme su dirección."
     ],
     "correct": 1,
     "why": "Le conditionnel + « si es posible » adoucit la demande."
    },
    {
     "type": "fill",
     "text": "¿___ (poder, usted) hablar más despacio? No entiendo bien.",
     "answers": [
      "Podría",
      "podría"
     ],
     "why": "poder → podr- + ía."
    },
    {
     "type": "fill",
     "text": "A mis colegas les ___ (encantar) conocer su empresa.",
     "answers": [
      "encantaría"
     ],
     "why": "encantar + ía : souhait poli."
    },
    {
     "type": "mcq",
     "q": "Chez le médecin : « Je voudrais prendre rendez-vous. »",
     "opts": [
      "Me gustará pedir cita.",
      "Me gustaba pedir cita.",
      "Me gustaría pedir cita."
     ],
     "correct": 2,
     "why": "Je voudrais → <b>me gustaría</b>."
    },
    {
     "type": "fill",
     "text": "Yo ___ (preferir) una habitación tranquila y ___ (pagar) con tarjeta.",
     "answers": [
      [
       "preferiría"
      ],
      [
       "pagaría"
      ]
     ],
     "why": "preferir + ía ; pagar + ía."
    },
    {
     "type": "speak",
     "es": "Querría cambiar mi reserva para el sábado.",
     "fr": "Je voudrais changer ma réservation pour samedi."
    }
   ]
  },
  {
   "id": "condicional-formel-5",
   "reg": "formal",
   "title": "Conseils et hypothèses au travail · Formel (usted)",
   "why": "Le conditionnel sert aussi à <b>conseiller sans imposer</b> et à parler de ce qui <b>pourrait arriver</b> dans l'entreprise. Attention : ce qui est certain demain reste au futur.",
   "rule": "1. Conseil doux : <b>Usted debería + infinitif</b> ; <b>Yo en su lugar / Yo que usted + conditionnel</b>.<br>2. Hypothèse : <b>Con + nom, + conditionnel</b> (Con más personal, atendería más pedidos).<br>3. Fait certain à venir → futur (<b>llegará</b>) ; situation imaginée → conditionnel (<b>llegaría</b>).",
   "examples": [
    {
     "es": "Usted debería consultar al médico.",
     "fr": "Vous devriez consulter le médecin."
    },
    {
     "es": "Yo en su lugar, pediría otro presupuesto.",
     "fr": "À votre place, je demanderais un autre devis."
    },
    {
     "es": "Con más personal, atenderíamos más pedidos.",
     "fr": "Avec plus de personnel, nous traiterions plus de commandes."
    },
    {
     "es": "¿Qué haría usted en mi lugar?",
     "fr": "Que feriez-vous à ma place ?"
    },
    {
     "es": "Mañana el director llegará a las diez.",
     "fr": "Demain, le directeur arrivera à dix heures.",
     "note": "futur, pas conditionnel"
    }
   ],
   "pitfalls": [
    {
     "wrong": "Yo en su lugar, iré al banco.",
     "right": "Yo en su lugar, iría al banco.",
     "why": "Un conseil « à votre place » est irréel : conditionnel, pas futur."
    },
    {
     "wrong": "Usted deberia descansar.",
     "right": "Usted debería descansar.",
     "why": "L'accent sur le í est obligatoire."
    },
    {
     "wrong": "Con más personal, atenderá más pedidos.",
     "right": "Con más personal, atendería más pedidos.",
     "why": "Situation imaginée : on utilise le conditionnel, pas le futur."
    }
   ],
   "exercises": [
    {
     "type": "mcq",
     "q": "Conseil à un client : « Vous devriez payer aujourd'hui. »",
     "opts": [
      "Debería pagar hoy.",
      "Deberá pagar hoy.",
      "Debía pagar hoy."
     ],
     "correct": 0,
     "why": "<b>Debería</b> = vous devriez (deberá = vous devrez)."
    },
    {
     "type": "fill",
     "text": "Usted ___ (deber) consultar al médico si sigue el dolor.",
     "answers": [
      "debería"
     ],
     "why": "deber + ía."
    },
    {
     "type": "fill",
     "text": "En su lugar, yo ___ (pedir) otro presupuesto.",
     "answers": [
      "pediría"
     ],
     "why": "pedir + ía : conseil irréel."
    },
    {
     "type": "mcq",
     "q": "Con más personal, la empresa ___ más pedidos.",
     "opts": [
      "atenderá",
      "atendía",
      "atendería"
     ],
     "correct": 2,
     "why": "Situation imaginée → <b>atendería</b>."
    },
    {
     "type": "speak",
     "es": "En su lugar, yo hablaría con el director.",
     "fr": "À votre place, je parlerais avec le directeur."
    },
    {
     "type": "fill",
     "text": "Yo que usted, ___ (firmar) el contrato hoy mismo.",
     "answers": [
      "firmaría"
     ],
     "why": "Conseil « à votre place » → firmar + ía."
    },
    {
     "type": "mcq",
     "q": "Mañana el director ___ a las diez.",
     "opts": [
      "llegaría",
      "llegará",
      "llegaba"
     ],
     "correct": 1,
     "why": "Demain, c'est certain : <b>futur</b> (llegará)."
    },
    {
     "type": "fill",
     "text": "Con un horario flexible, los empleados ___ (trabajar) mejor.",
     "answers": [
      "trabajarían"
     ],
     "why": "Hypothèse → trabajar + ían."
    },
    {
     "type": "fill",
     "text": "¿Qué ___ (hacer) usted en mi lugar?",
     "answers": [
      "haría"
     ],
     "why": "hacer → har- + ía."
    },
    {
     "type": "mcq",
     "q": "« Avec un meilleur salaire, j'accepterais le poste. »",
     "opts": [
      "Con mejor sueldo, aceptaré el puesto.",
      "Con mejor sueldo, aceptaba el puesto.",
      "Con mejor sueldo, aceptaría el puesto."
     ],
     "correct": 2,
     "why": "Situation imaginée → <b>aceptaría</b>."
    },
    {
     "type": "fill",
     "text": "Yo ___ (contratar) a más personal y ___ (abrir) otra oficina.",
     "answers": [
      [
       "contrataría"
      ],
      [
       "abriría"
      ]
     ],
     "why": "contratar + ía ; abrir + ía."
    },
    {
     "type": "speak",
     "es": "Con un buen plan, ahorraríamos mucho dinero.",
     "fr": "Avec un bon plan, nous économiserions beaucoup d'argent."
    }
   ]
  },
  {
   "id": "condicional-informel-1",
   "reg": "informal",
   "title": "Formation et irréguliers entre amis · Informel (tú)",
   "why": "Entre amis, on utilise surtout <b>tú</b> et <b>nosotros</b> pour imaginer, rêver, proposer. La formation reste la même : <b>infinitif entier + ía, ías, íamos, ían</b>.",
   "rule": "1. Réguliers : <b>infinitif + ía / ías / íamos / ían</b> (comer → comerías).<br>2. Irréguliers (radical du futur) : hacer → <b>har-</b>, venir → <b>vendr-</b>, poner → <b>pondr-</b>, decir → <b>dir-</b>, querer → <b>querr-</b>, poder → <b>podr-</b>, salir → <b>saldr-</b>.<br>3. Accent obligatoire sur le <b>í</b>.",
   "examples": [
    {
     "es": "Tú cantarías en el coro.",
     "fr": "Tu chanterais dans la chorale."
    },
    {
     "es": "Mis amigos vendrían a la fiesta.",
     "fr": "Mes amis viendraient à la fête.",
     "note": "venir → vendr-"
    },
    {
     "es": "Tú harías una tarta buenísima.",
     "fr": "Tu ferais un gâteau délicieux.",
     "note": "hacer → har-"
    },
    {
     "es": "Nosotros diríamos la verdad.",
     "fr": "Nous dirions la vérité.",
     "note": "decir → dir-"
    },
    {
     "es": "Mis primos tendrían muchas historias que contar.",
     "fr": "Mes cousins auraient plein d'histoires à raconter."
    }
   ],
   "pitfalls": [
    {
     "wrong": "Tú hacerías una tarta.",
     "right": "Tú harías una tarta.",
     "why": "hacer → har-, comme au futur (harás)."
    },
    {
     "wrong": "Vendrias a mi casa.",
     "right": "Vendrías a mi casa.",
     "why": "L'accent sur le í est obligatoire."
    },
    {
     "wrong": "Yo comeria pizza.",
     "right": "Yo comería pizza.",
     "why": "L'accent sur le í est obligatoire."
    }
   ],
   "exercises": [
    {
     "type": "mcq",
     "q": "« Tu chanterais » (tú, cantar) =",
     "opts": [
      "cantabas",
      "cantarías",
      "cantarás"
     ],
     "correct": 1,
     "why": "cantar + <b>ías</b> (cantabas = imparfait)."
    },
    {
     "type": "fill",
     "text": "Yo ___ (dormir) todo el domingo.",
     "answers": [
      "dormiría"
     ],
     "why": "dormir + ía."
    },
    {
     "type": "fill",
     "text": "Mis amigos ___ (venir) a la fiesta.",
     "answers": [
      "vendrían"
     ],
     "why": "venir → vendr- + ían."
    },
    {
     "type": "mcq",
     "q": "poner, nosotros, conditionnel :",
     "opts": [
      "pondríamos",
      "poneríamos",
      "ponaríamos"
     ],
     "correct": 0,
     "why": "poner → <b>pondr-</b> + íamos."
    },
    {
     "type": "speak",
     "es": "Mi hermana saldría todos los días.",
     "fr": "Ma sœur sortirait tous les jours."
    },
    {
     "type": "fill",
     "text": "Tú ___ (hacer) una tarta riquísima.",
     "answers": [
      "harías"
     ],
     "why": "hacer → har- + ías."
    },
    {
     "type": "mcq",
     "q": "Quelle écriture est correcte ?",
     "opts": [
      "viviriamos",
      "vivíriamos",
      "viviríamos"
     ],
     "correct": 2,
     "why": "vivir + <b>íamos</b>, accent sur le í."
    },
    {
     "type": "fill",
     "text": "Nosotros ___ (decir) la verdad a mamá.",
     "answers": [
      "diríamos"
     ],
     "why": "decir → dir- + íamos."
    },
    {
     "type": "fill",
     "text": "¿Tú ___ (querer) vivir en otro país?",
     "answers": [
      "querrías"
     ],
     "why": "querer → querr- + ías."
    },
    {
     "type": "mcq",
     "q": "Radical de <b>poder</b> au conditionnel :",
     "opts": [
      "pod-",
      "poder-",
      "pudr-",
      "podr-"
     ],
     "correct": 3,
     "why": "poder → <b>podr-</b> (podría)."
    },
    {
     "type": "fill",
     "text": "Yo ___ (comer) pizza y tú ___ (tomar) ensalada.",
     "answers": [
      [
       "comería"
      ],
      [
       "tomarías"
      ]
     ],
     "why": "comer + ía ; tomar + ías."
    },
    {
     "type": "speak",
     "es": "Mis primos tendrían muchas historias que contar.",
     "fr": "Mes cousins auraient plein d'histoires à raconter."
    }
   ]
  },
  {
   "id": "condicional-informel-2",
   "reg": "informal",
   "title": "Conseils, rêves et pièges entre amis · Informel (tú)",
   "why": "Entre proches, le conditionnel sert à <b>proposer</b>, <b>conseiller</b> et <b>rêver</b>. Attention à ne pas le remplacer par le futur : « Me encantaría » n'est pas « Me encantará ».",
   "rule": "1. Proposer / demander : <b>¿Te gustaría…?</b> ; <b>¿Me prestarías…?</b><br>2. Conseiller : <b>Deberías…</b> ; <b>Yo que tú + conditionnel</b>.<br>3. Rêver : <b>Con más dinero, + conditionnel</b> ; <b>¿Qué harías con…?</b><br>4. Fait certain à venir → futur (<b>vendrá</b>) ; imaginé → conditionnel (<b>vendría</b>).",
   "examples": [
    {
     "es": "¿Te gustaría cenar con nosotros el viernes?",
     "fr": "Ça te dirait de dîner avec nous vendredi ?"
    },
    {
     "es": "Yo que tú, llamaría a tu hermano.",
     "fr": "À ta place, j'appellerais ton frère."
    },
    {
     "es": "¿Qué harías con un millón de euros?",
     "fr": "Que ferais-tu avec un million d'euros ?"
    },
    {
     "es": "Me encantaría ir contigo.",
     "fr": "J'adorerais aller avec toi."
    },
    {
     "es": "Mañana Pedro vendrá a verte.",
     "fr": "Demain, Pedro viendra te voir.",
     "note": "futur, pas conditionnel"
    }
   ],
   "pitfalls": [
    {
     "wrong": "Me encantará ir contigo. (pour « j'adorerais »)",
     "right": "Me encantaría ir contigo.",
     "why": "encantará = futur ; pour un souhait, le conditionnel."
    },
    {
     "wrong": "Yo que tú, llamaré a tu hermano.",
     "right": "Yo que tú, llamaría a tu hermano.",
     "why": "Un conseil « à ta place » est irréel : conditionnel."
    },
    {
     "wrong": "Deberias dormir más.",
     "right": "Deberías dormir más.",
     "why": "L'accent sur le í est obligatoire."
    }
   ],
   "exercises": [
    {
     "type": "mcq",
     "q": "Mañana Pedro ___ a verte.",
     "opts": [
      "vendría",
      "vendrá",
      "venía"
     ],
     "correct": 1,
     "why": "Demain, c'est certain : <b>futur</b> (vendrá)."
    },
    {
     "type": "fill",
     "text": "Yo que tú, ___ (llamar) a tu hermano.",
     "answers": [
      "llamaría"
     ],
     "why": "Conseil « à ta place » → llamar + ía."
    },
    {
     "type": "fill",
     "text": "¿Qué ___ (hacer, tú) con un millón de euros?",
     "answers": [
      "harías"
     ],
     "why": "hacer → har- + ías."
    },
    {
     "type": "mcq",
     "q": "Pour demander gentiment un service à un ami :",
     "opts": [
      "¿Me prestaste tu cargador?",
      "¿Me prestabas tu cargador?",
      "¿Me prestarías tu cargador?"
     ],
     "correct": 2,
     "why": "Demande douce → <b>prestarías</b>."
    },
    {
     "type": "speak",
     "es": "Con más vacaciones, viajaría a Brasil.",
     "fr": "Avec plus de vacances, je voyagerais au Brésil."
    },
    {
     "type": "fill",
     "text": "No ___ (ir) yo solo de noche; es peligroso.",
     "answers": [
      "iría"
     ],
     "why": "ir + ía : conseil prudent."
    },
    {
     "type": "mcq",
     "q": "« Tu devrais dormir plus » =",
     "opts": [
      "Debes dormir más.",
      "Deberías dormir más.",
      "Debías dormir más."
     ],
     "correct": 1,
     "why": "Conseil doux → <b>deberías</b>."
    },
    {
     "type": "fill",
     "text": "Con más dinero, nosotros ___ (comprar) una casa grande.",
     "answers": [
      "compraríamos"
     ],
     "why": "Rêve → comprar + íamos."
    },
    {
     "type": "fill",
     "text": "A mis padres les ___ (encantar) vernos más.",
     "answers": [
      "encantaría"
     ],
     "why": "encantar + ía : souhait."
    },
    {
     "type": "mcq",
     "q": "« J'adorerais aller avec toi. »",
     "opts": [
      "Me encantaría ir contigo.",
      "Me encantará ir contigo.",
      "Me encantaba ir contigo."
     ],
     "correct": 0,
     "why": "Souhait → <b>encantaría</b>."
    },
    {
     "type": "fill",
     "text": "Tú ___ (beber) más agua y ___ (tener) más energía.",
     "answers": [
      [
       "beberías"
      ],
      [
       "tendrías"
      ]
     ],
     "why": "beber + ías ; tener → tendr- + ías."
    },
    {
     "type": "speak",
     "es": "¿Te gustaría cenar con nosotros el viernes?",
     "fr": "Ça te dirait de dîner avec nous vendredi ?"
    }
   ]
  }
 ],
 "temps-imperativo": [
  {
   "id": "imperativo-formel-1",
   "reg": "formal",
   "title": "Former l'usted : -ar → -e, -er/-ir → -a · Formel (usted)",
   "why": "Avec un client, un patient, un supérieur ou un inconnu, on <b>vouvoie</b> : c'est l'impératif <b>usted</b>. Il se forme en « inversant » la voyelle du verbe, ce qui rend les consignes polies et claires.",
   "rule": "1. Verbes en <b>-ar</b> : radical + <b>-e</b> (esperar → <b>espere</b>).<br>2. Verbes en <b>-er</b> : radical + <b>-a</b> (leer → <b>lea</b>).<br>3. Verbes en <b>-ir</b> : radical + <b>-a</b> (escribir → <b>escriba</b>).<br>4. On ajoute souvent <b>por favor</b> pour rester poli.",
   "examples": [
    {
     "es": "Espere en recepción, por favor.",
     "fr": "Attendez à la réception, s'il vous plaît.",
     "note": "-ar → -e"
    },
    {
     "es": "Lea este documento con atención.",
     "fr": "Lisez ce document attentivement.",
     "note": "-er → -a"
    },
    {
     "es": "Responda a mis preguntas con calma.",
     "fr": "Répondez à mes questions calmement.",
     "note": "-er → -a"
    },
    {
     "es": "Escriba su dirección aquí.",
     "fr": "Écrivez votre adresse ici.",
     "note": "-ir → -a"
    },
    {
     "es": "Llame a este número si hay un problema.",
     "fr": "Appelez ce numéro s'il y a un problème.",
     "note": "-ar → -e"
    }
   ],
   "pitfalls": [
    {
     "wrong": "Firma aquí, señor. (à un client)",
     "right": "Firme aquí, señor.",
     "why": "Avec usted, un verbe en -ar prend -e : firme."
    },
    {
     "wrong": "Come su sopa, señora.",
     "right": "Coma su sopa, señora.",
     "why": "Avec usted, un verbe en -er prend -a : coma, pas come (qui est la forme tú)."
    },
    {
     "wrong": "Escribe en mayúsculas, señor.",
     "right": "Escriba en mayúsculas, señor.",
     "why": "Un verbe en -ir prend -a avec usted : escriba."
    }
   ],
   "exercises": [
    {
     "type": "mcq",
     "q": "« Signez ici » (firmar, usted)",
     "opts": [
      "Firma",
      "Firme",
      "Firmo"
     ],
     "correct": 1,
     "why": "usted : -ar → <b>-e</b> : firme."
    },
    {
     "type": "fill",
     "text": "___ (esperar) un momento, señor Ruiz.",
     "answers": [
      "Espere",
      "espere"
     ],
     "why": "usted : esperar → radical + <b>-e</b>."
    },
    {
     "type": "mcq",
     "q": "« Écrivez votre nom » (escribir, usted)",
     "opts": [
      "Escribe",
      "Escribas",
      "Escriba"
     ],
     "correct": 2,
     "why": "usted : -ir → <b>-a</b> : escriba."
    },
    {
     "type": "fill",
     "text": "___ (leer) este contrato antes de firmar, señora.",
     "answers": [
      "Lea",
      "lea"
     ],
     "why": "usted : -er → <b>-a</b> : lea."
    },
    {
     "type": "speak",
     "es": "Firme aquí y escriba su nombre, por favor.",
     "fr": "Signez ici et écrivez votre nom, s'il vous plaît."
    },
    {
     "type": "mcq",
     "q": "« Mangez tranquillement » (comer, usted)",
     "opts": [
      "Coma",
      "Come",
      "Comas"
     ],
     "correct": 0,
     "why": "usted : -er → <b>-a</b> : coma ; come est la forme tú."
    },
    {
     "type": "fill",
     "text": "Por favor, ___ (abrir) su maletín.",
     "answers": [
      "abra",
      "Abra"
     ],
     "why": "usted : -ir → <b>-a</b> : abra."
    },
    {
     "type": "fill",
     "text": "___ (subir) por la escalera, señor, el ascensor no funciona.",
     "answers": [
      "Suba",
      "suba"
     ],
     "why": "usted : -ir → <b>-a</b> : suba."
    },
    {
     "type": "mcq",
     "q": "À un client inconnu : « Parlez plus fort, s'il vous plaît. »",
     "opts": [
      "Habla más alto, por favor.",
      "Hablas más alto, por favor.",
      "Hable más alto, por favor."
     ],
     "correct": 2,
     "why": "Avec usted, -ar → <b>-e</b> : hable."
    },
    {
     "type": "fill",
     "text": "___ (beber) un poco de agua, señora, hace calor.",
     "answers": [
      "Beba",
      "beba"
     ],
     "why": "usted : -er → <b>-a</b> : beba."
    },
    {
     "type": "speak",
     "es": "Espere un momento, señora López, ya voy.",
     "fr": "Attendez un moment, madame López, j'arrive."
    },
    {
     "type": "mcq",
     "q": "« Entrez » (entrar, usted)",
     "opts": [
      "Entra",
      "Entre",
      "Entrar"
     ],
     "correct": 1,
     "why": "usted : -ar → <b>-e</b> : entre."
    }
   ]
  },
  {
   "id": "imperativo-formel-2",
   "reg": "formal",
   "title": "Les irréguliers de l'usted : tenga, haga, vaya… · Formel (usted)",
   "why": "À la banque, à l'hôtel ou à l'administration, on entend sans cesse <b>tenga</b>, <b>haga</b>, <b>vaya</b>, <b>venga</b>. Ces huit verbes très courants ont une forme à retenir telle quelle.",
   "rule": "1. <b>tener</b> → <b>tenga</b> ; <b>hacer</b> → <b>haga</b>.<br>2. <b>ir</b> → <b>vaya</b> ; <b>venir</b> → <b>venga</b>.<br>3. <b>poner</b> → <b>ponga</b> ; <b>salir</b> → <b>salga</b>.<br>4. <b>decir</b> → <b>diga</b> ; <b>ser</b> → <b>sea</b>.<br>5. Repère : sauf ir et ser, on part de la forme <b>yo</b> (tengo, hago, pongo…) et on remplace le -o par <b>-a</b>.",
   "examples": [
    {
     "es": "Tenga mucho cuidado con las maletas, señora.",
     "fr": "Faites très attention aux valises, madame.",
     "note": "tener → tenga"
    },
    {
     "es": "Haga una copia del documento.",
     "fr": "Faites une copie du document.",
     "note": "hacer → haga"
    },
    {
     "es": "Ponga la tarjeta en el lector.",
     "fr": "Mettez la carte dans le lecteur.",
     "note": "poner → ponga"
    },
    {
     "es": "Vaya recto y gire a la izquierda.",
     "fr": "Allez tout droit et tournez à gauche.",
     "note": "ir → vaya"
    },
    {
     "es": "Sea tan amable de esperar aquí.",
     "fr": "Soyez assez aimable pour attendre ici.",
     "note": "ser → sea"
    },
    {
     "es": "Diga su número de cuenta a la empleada.",
     "fr": "Dites votre numéro de compte à l'employée.",
     "note": "decir → diga"
    }
   ],
   "pitfalls": [
    {
     "wrong": "Tiene su pasaporte, por favor. (comme consigne)",
     "right": "Tenga su pasaporte, por favor.",
     "why": "Pour donner une consigne à usted, tener devient tenga."
    },
    {
     "wrong": "Haz la cola, señor.",
     "right": "Haga la cola, señor.",
     "why": "haz est la forme tú ; avec usted on dit haga."
    },
    {
     "wrong": "Ve a la ventanilla tres, señora.",
     "right": "Vaya a la ventanilla tres, señora.",
     "why": "ve est la forme tú ; avec usted on dit vaya."
    }
   ],
   "exercises": [
    {
     "type": "mcq",
     "q": "« Faites la queue » (hacer, usted)",
     "opts": [
      "Hace",
      "Haga",
      "Haz"
     ],
     "correct": 1,
     "why": "hacer → <b>haga</b> avec usted."
    },
    {
     "type": "fill",
     "text": "___ (tener) su documento de identidad a mano, por favor.",
     "answers": [
      "Tenga",
      "tenga"
     ],
     "why": "tener → <b>tenga</b>."
    },
    {
     "type": "mcq",
     "q": "« Allez au guichet trois » (ir, usted)",
     "opts": [
      "Ve",
      "Va",
      "Vaya"
     ],
     "correct": 2,
     "why": "ir → <b>vaya</b> avec usted."
    },
    {
     "type": "fill",
     "text": "___ (venir) mañana por la mañana, señor.",
     "answers": [
      "Venga",
      "venga"
     ],
     "why": "venir → <b>venga</b>."
    },
    {
     "type": "speak",
     "es": "Vaya a la ventanilla número tres, por favor.",
     "fr": "Allez au guichet numéro trois, s'il vous plaît."
    },
    {
     "type": "fill",
     "text": "Por favor, ___ (poner) su firma al final del documento.",
     "answers": [
      "ponga",
      "Ponga"
     ],
     "why": "poner → <b>ponga</b>."
    },
    {
     "type": "mcq",
     "q": "« Dites votre nom » (decir, usted)",
     "opts": [
      "Diga su nombre",
      "Dice su nombre",
      "Di su nombre"
     ],
     "correct": 0,
     "why": "decir → <b>diga</b> ; di est la forme tú."
    },
    {
     "type": "fill",
     "text": "___ (salir) por la puerta de atrás, señor.",
     "answers": [
      "Salga",
      "salga"
     ],
     "why": "salir → <b>salga</b>."
    },
    {
     "type": "mcq",
     "q": "« Soyez à l'heure » (ser, usted)",
     "opts": [
      "Seas puntual",
      "Sé puntual",
      "Es puntual",
      "Sea puntual"
     ],
     "correct": 3,
     "why": "ser → <b>sea</b> avec usted ; sé est la forme tú."
    },
    {
     "type": "fill",
     "text": "Señor, ___ (ser) paciente y ___ (esperar) un poco.",
     "answers": [
      [
       "Sea",
       "sea"
      ],
      [
       "espere"
      ]
     ],
     "why": "ser → sea ; esperar → espere."
    },
    {
     "type": "mcq",
     "q": "« Venez avec moi, madame. » (venir, usted)",
     "opts": [
      "Ven conmigo, señora.",
      "Venga conmigo, señora.",
      "Viene conmigo, señora."
     ],
     "correct": 1,
     "why": "venir → <b>venga</b> avec usted."
    },
    {
     "type": "speak",
     "es": "Tenga su pasaporte a mano, por favor.",
     "fr": "Ayez votre passeport sous la main, s'il vous plaît."
    }
   ]
  },
  {
   "id": "imperativo-formel-3",
   "reg": "formal",
   "title": "Plusieurs personnes : ustedes (-en / -an) · Formel (usted)",
   "why": "Un guide, une réceptionniste ou un formateur s'adresse souvent à un <b>groupe</b> que l'on vouvoie : c'est <b>ustedes</b>. La forme est celle de usted avec un <b>-n</b> à la fin.",
   "rule": "1. Verbes en <b>-ar</b> : radical + <b>-en</b> (esperar → <b>esperen</b>).<br>2. Verbes en <b>-er / -ir</b> : radical + <b>-an</b> (comer → <b>coman</b>, escribir → <b>escriban</b>).<br>3. Irréguliers : même base que usted + <b>n</b> : <b>tengan, hagan, vayan, vengan, pongan, salgan, digan, sean</b>.",
   "examples": [
    {
     "es": "Entren, señores, la sala está lista.",
     "fr": "Entrez, messieurs, la salle est prête.",
     "note": "-ar → -en"
    },
    {
     "es": "Lean las instrucciones antes de empezar.",
     "fr": "Lisez les instructions avant de commencer.",
     "note": "-er → -an"
    },
    {
     "es": "Respondan a las preguntas con sinceridad.",
     "fr": "Répondez aux questions avec sincérité.",
     "note": "-er → -an"
    },
    {
     "es": "Hagan una fila aquí, por favor.",
     "fr": "Faites une file ici, s'il vous plaît.",
     "note": "hacer → hagan"
    },
    {
     "es": "Digan su nombre al llegar.",
     "fr": "Dites votre nom en arrivant.",
     "note": "decir → digan"
    }
   ],
   "pitfalls": [
    {
     "wrong": "Esperan aquí, señores. (comme consigne)",
     "right": "Esperen aquí, señores.",
     "why": "Pour une consigne à ustedes, -ar prend -en : esperen."
    },
    {
     "wrong": "Pase por aquí, señores. (à un groupe)",
     "right": "Pasen por aquí, señores.",
     "why": "Avec plusieurs personnes, on ajoute le -n : pasen."
    },
    {
     "wrong": "Comen con calma, señoras. (comme consigne)",
     "right": "Coman con calma, señoras.",
     "why": "Pour une consigne à ustedes, -er prend -an : coman."
    }
   ],
   "exercises": [
    {
     "type": "mcq",
     "q": "« Attendez, messieurs ! » (esperar, ustedes)",
     "opts": [
      "Esperan",
      "Espera",
      "Esperen"
     ],
     "correct": 2,
     "why": "ustedes : -ar → <b>-en</b> : esperen."
    },
    {
     "type": "fill",
     "text": "___ (pasar) por aquí, señoras y señores.",
     "answers": [
      "Pasen",
      "pasen"
     ],
     "why": "ustedes : -ar → <b>-en</b> : pasen."
    },
    {
     "type": "mcq",
     "q": "« Écrivez vos noms » (escribir, ustedes)",
     "opts": [
      "Escriban",
      "Escriben",
      "Escribe"
     ],
     "correct": 0,
     "why": "ustedes : -ir → <b>-an</b> : escriban."
    },
    {
     "type": "fill",
     "text": "___ (tener) cuidado con el escalón, por favor.",
     "answers": [
      "Tenga",
      "Tengan",
      "tenga",
      "tengan"
     ],
     "why": "tener → tenga → <b>tengan</b>."
    },
    {
     "type": "speak",
     "es": "Pasen a la sala y esperen su turno, por favor.",
     "fr": "Passez dans la salle et attendez votre tour, s'il vous plaît."
    },
    {
     "type": "fill",
     "text": "Señores clientes, ___ (venir) mañana con los documentos.",
     "answers": [
      "vengan",
      "Vengan"
     ],
     "why": "venir → venga → <b>vengan</b>."
    },
    {
     "type": "mcq",
     "q": "Au guichet, l'employé dit à un couple : « ___ a la ventanilla dos. »",
     "opts": [
      "Vaya",
      "Van",
      "Vayen",
      "Vayan"
     ],
     "correct": 3,
     "why": "ir → vaya → <b>vayan</b> pour plusieurs personnes."
    },
    {
     "type": "fill",
     "text": "Por favor, ___ (abrir) las maletas y ___ (poner) los pasaportes aquí.",
     "answers": [
      [
       "Abra",
       "abra",
       "abran"
      ],
      [
       "Ponga",
       "ponga",
       "pongan"
      ]
     ],
     "why": "abrir → abran ; poner → pongan."
    },
    {
     "type": "mcq",
     "q": "Quelle phrase s'adresse à un groupe de clients ?",
     "opts": [
      "Salga por la puerta, por favor.",
      "Salgan por la puerta, por favor.",
      "Sal por la puerta, por favor."
     ],
     "correct": 1,
     "why": "Plusieurs personnes vouvoyées : salir → salga → <b>salgan</b>."
    },
    {
     "type": "fill",
     "text": "___ (ser) bienvenidos a nuestro hotel.",
     "answers": [
      "Sean",
      "sean"
     ],
     "why": "ser → sea → <b>sean</b>."
    },
    {
     "type": "mcq",
     "q": "« Mangez ! » (comer, ustedes)",
     "opts": [
      "Comen",
      "Come",
      "Coman"
     ],
     "correct": 2,
     "why": "ustedes : -er → <b>-an</b> : coman."
    },
    {
     "type": "speak",
     "es": "Señores, vengan por aquí, el director los espera.",
     "fr": "Messieurs, venez par ici, le directeur vous attend."
    }
   ]
  },
  {
   "id": "imperativo-formel-4",
   "reg": "formal",
   "title": "Négation et pronoms : no se preocupe, dígame · Formel (usted)",
   "why": "Chez le médecin, à la banque ou à l'hôtel, on dit « <b>Dígame</b> », « <b>Siéntese</b> » ou « <b>No se preocupe</b> ». Le pronom change de place selon que la consigne est affirmative ou négative.",
   "rule": "1. <b>Négatif</b> : no + la même forme que l'affirmatif (no hable, no coma), le pronom reste <b>avant</b> : no <b>se</b> preocupe, no <b>me lo</b> diga.<br>2. <b>Affirmatif</b> : le pronom se colle <b>après</b> : dígame, siéntese, tómelo.<br>3. On écrit un <b>accent</b> quand la syllabe forte du verbe se retrouve avant-avant-dernière : dí-ga-me, sién-te-se, tó-me-lo.<br>4. Ustedes : même logique avec -n (siéntense, no se preocupen).",
   "examples": [
    {
     "es": "No se levante, por favor.",
     "fr": "Ne vous levez pas, s'il vous plaît.",
     "note": "négatif : pronom avant"
    },
    {
     "es": "Ábralo con cuidado, señora.",
     "fr": "Ouvrez-le avec précaution, madame.",
     "note": "affirmatif : pronom collé"
    },
    {
     "es": "Dígame, ¿en qué puedo ayudarle?",
     "fr": "Dites-moi, en quoi puis-je vous aider ?",
     "note": "affirmatif : accent sur dí"
    },
    {
     "es": "No lo olvide, señor.",
     "fr": "Ne l'oubliez pas, monsieur.",
     "note": "négatif : pronom avant"
    },
    {
     "es": "Espérenme aquí, señores.",
     "fr": "Attendez-moi ici, messieurs.",
     "note": "ustedes + me"
    }
   ],
   "pitfalls": [
    {
     "wrong": "Siente se, por favor.",
     "right": "Siéntese, por favor.",
     "why": "Le pronom se colle au verbe et on écrit l'accent."
    },
    {
     "wrong": "No dígame eso.",
     "right": "No me diga eso.",
     "why": "Au négatif, le pronom va avant le verbe et il n'y a pas d'accent."
    },
    {
     "wrong": "No se preocupa, señor. (comme consigne)",
     "right": "No se preocupe, señor.",
     "why": "Pour un conseil à usted, on utilise la forme -e : preocupe."
    }
   ],
   "exercises": [
    {
     "type": "mcq",
     "q": "« Ne vous inquiétez pas » (preocuparse, usted)",
     "opts": [
      "No se preocupe",
      "No se preocupa",
      "No preocúpese"
     ],
     "correct": 0,
     "why": "Négatif : <b>no se</b> + forme usted (preocupe)."
    },
    {
     "type": "fill",
     "text": "No se ___ (preocupar), señora, es normal.",
     "answers": [
      "preocupe"
     ],
     "why": "usted : -ar → <b>-e</b> : preocupe."
    },
    {
     "type": "mcq",
     "q": "« Asseyez-vous » (sentarse, usted)",
     "opts": [
      "Se siente",
      "Siente se",
      "Siéntese"
     ],
     "correct": 2,
     "why": "Affirmatif : pronom collé après + accent : <b>siéntese</b>."
    },
    {
     "type": "fill",
     "text": "___ (decir + me, usted), ¿qué necesita?",
     "answers": [
      "Dígame",
      "dígame"
     ],
     "why": "diga + me = dígame (accent)."
    },
    {
     "type": "speak",
     "es": "No me lo diga hoy, llámeme mañana, por favor.",
     "fr": "Ne me le dites pas aujourd'hui, appelez-moi demain, s'il vous plaît."
    },
    {
     "type": "fill",
     "text": "Este jarabe, ___ (tomar + lo, usted) dos veces al día.",
     "answers": [
      "tómelo",
      "Tómelo"
     ],
     "why": "tome + lo = tómelo (accent)."
    },
    {
     "type": "mcq",
     "q": "« Ne le touchez pas » (tocar, usted)",
     "opts": [
      "No toque lo",
      "No lo toque",
      "No lo toca",
      "No tóquelo"
     ],
     "correct": 1,
     "why": "Négatif : pronom <b>avant</b> : no lo toque."
    },
    {
     "type": "fill",
     "text": "No ___ (sentarse, usted) aquí, señor, esa silla está rota.",
     "answers": [
      "se siente"
     ],
     "why": "Négatif : no <b>se siente</b> (pronom avant, forme -e)."
    },
    {
     "type": "mcq",
     "q": "« Ne me le dites pas. » (usted)",
     "opts": [
      "No dígamelo.",
      "No me lo diga.",
      "No digamelo."
     ],
     "correct": 1,
     "why": "Au négatif, pronoms avant le verbe : <b>no me lo diga</b>."
    },
    {
     "type": "fill",
     "text": "Señor, ___ (esperar + me, usted) un minuto, ya vuelvo.",
     "answers": [
      "espéreme",
      "Espéreme"
     ],
     "why": "espere + me = espéreme (accent)."
    },
    {
     "type": "mcq",
     "q": "« Asseyez-vous, messieurs. » (sentarse, ustedes)",
     "opts": [
      "Siéntense, señores.",
      "Siéntese, señores.",
      "Siéntanse, señores."
     ],
     "correct": 0,
     "why": "Ustedes : sienten + se = <b>siéntense</b>."
    },
    {
     "type": "speak",
     "es": "Siéntese, por favor, el doctor llega enseguida.",
     "fr": "Asseyez-vous, s'il vous plaît, le docteur arrive tout de suite."
    }
   ]
  },
  {
   "id": "imperativo-formel-5",
   "reg": "formal",
   "title": "Mises en situation : médecin, courriel, administration · Formel (usted)",
   "why": "Voici tout ensemble : consignes du médecin, du guichet et des courriels pros. Tu mélanges l'<b>affirmatif</b>, le <b>négatif</b>, usted et ustedes dans des phrases plus longues.",
   "rule": "1. Affirmatif usted : -ar → <b>-e</b> ; -er / -ir → <b>-a</b>.<br>2. Ustedes : ajoute <b>-n</b>.<br>3. Négatif : <b>no</b> + même forme (no fume, no cierre).<br>4. Pronoms : collés après à l'affirmatif (envíelo), avant au négatif (no lo cierre).<br>5. Courriels : « No dude en… », « Contácteme si… ».",
   "examples": [
    {
     "es": "Complete los datos y devuelva el formulario firmado.",
     "fr": "Complétez les données et renvoyez le formulaire signé.",
     "note": "deux consignes liées"
    },
    {
     "es": "Respire hondo y relájese.",
     "fr": "Respirez profondément et détendez-vous.",
     "note": "relajarse → relájese"
    },
    {
     "es": "Por favor, no use el móvil durante la reunión.",
     "fr": "Veuillez ne pas utiliser le téléphone pendant la réunion.",
     "note": "négatif"
    },
    {
     "es": "Llévelo a la oficina de personal, por favor.",
     "fr": "Apportez-le au bureau du personnel, s'il vous plaît.",
     "note": "lleve + lo = llévelo"
    },
    {
     "es": "Hablen con el director si tienen un problema.",
     "fr": "Parlez au directeur si vous avez un problème.",
     "note": "ustedes"
    }
   ],
   "pitfalls": [
    {
     "wrong": "Abre la boca, por favor. (au patient vouvoyé)",
     "right": "Abra la boca, por favor.",
     "why": "Avec usted, -ir prend -a : abra."
    },
    {
     "wrong": "No fumas aquí, señor. (comme consigne)",
     "right": "No fume aquí, señor.",
     "why": "Un ordre négatif à usted demande no + forme -e : fume."
    },
    {
     "wrong": "Envíalo hoy, señora.",
     "right": "Envíelo hoy, señora.",
     "why": "envíalo est la forme tú ; avec usted on dit envíelo."
    }
   ],
   "exercises": [
    {
     "type": "mcq",
     "q": "« Remplissez ce formulaire » (rellenar, usted)",
     "opts": [
      "Rellene",
      "Rellena",
      "Rellenen"
     ],
     "correct": 0,
     "why": "usted : -ar → <b>-e</b> : rellene."
    },
    {
     "type": "fill",
     "text": "___ (abrir) la boca y ___ (respirar) despacio, por favor.",
     "answers": [
      [
       "Abra",
       "abra"
      ],
      [
       "respire"
      ]
     ],
     "why": "abrir → abra ; respirar → respire."
    },
    {
     "type": "mcq",
     "q": "Courriel à un client : « N'hésitez pas à nous contacter. »",
     "opts": [
      "No dudes en contactarnos.",
      "No duda en contactarnos.",
      "No dude en contactarnos."
     ],
     "correct": 2,
     "why": "Poli : no + <b>dude</b> (usted)."
    },
    {
     "type": "fill",
     "text": "No ___ (olvidar, ustedes) traer su documento de identidad.",
     "answers": [
      "olviden"
     ],
     "why": "ustedes : -ar → <b>-en</b> : olviden."
    },
    {
     "type": "speak",
     "es": "Rellene el formulario y envíelo por correo electrónico.",
     "fr": "Remplissez le formulaire et envoyez-le par courriel."
    },
    {
     "type": "fill",
     "text": "Para pedir cita, ___ (llamar) a recepción antes de las cinco.",
     "answers": [
      "llame",
      "Llame"
     ],
     "why": "usted : -ar → <b>-e</b> : llame."
    },
    {
     "type": "mcq",
     "q": "Le médecin à un patient : « Ne fumez pas. »",
     "opts": [
      "No fume",
      "No fumes",
      "No fumas"
     ],
     "correct": 0,
     "why": "usted négatif : no + <b>fume</b>."
    },
    {
     "type": "fill",
     "text": "Los papeles, ___ (enviar + los, ustedes) hoy mismo.",
     "answers": [
      "envíenlos",
      "Envíenlos"
     ],
     "why": "envíen + los = envíenlos."
    },
    {
     "type": "mcq",
     "q": "Quelle phrase est polie pour un client ?",
     "opts": [
      "Manda tu CV por correo.",
      "Mande su CV por correo.",
      "Mandas su CV por correo."
     ],
     "correct": 1,
     "why": "Avec usted : mandar → <b>mande</b>, et « su »."
    },
    {
     "type": "fill",
     "text": "No ___ (cerrar, usted) la puerta con llave, por favor.",
     "answers": [
      "cierre"
     ],
     "why": "cerrar → cierre ; négatif avec la forme usted."
    },
    {
     "type": "mcq",
     "q": "« Venez à neuf heures et signez le contrat. » (usted)",
     "opts": [
      "Viene a las nueve y firma el contrato.",
      "Ven a las nueve y firma el contrato.",
      "Venga a las nueve y firma el contrato.",
      "Venga a las nueve y firme el contrato."
     ],
     "correct": 3,
     "why": "Les deux verbes à l'impératif usted : <b>venga</b> et <b>firme</b>."
    },
    {
     "type": "speak",
     "es": "Si tiene alguna duda, contácteme sin problema.",
     "fr": "Si vous avez un doute, contactez-moi sans problème."
    }
   ]
  },
  {
   "id": "imperativo-informel-1",
   "reg": "informal",
   "title": "Irréguliers : l'affirmatif et le négatif diffèrent · Informel (tú)",
   "why": "Entre amis ou en famille, on utilise sans cesse <b>ten, haz, ve, ven, pon, sal, di, sé</b>. Mais au négatif, ces verbes changent de forme : <b>no hagas</b>, <b>no digas</b>, <b>no vayas</b>.",
   "rule": "1. Affirmatif tú : <b>ten, haz, ve, ven, pon, sal, di, sé</b>.<br>2. Négatif tú : forme yo sans -o + <b>-as</b> (no hagas, no digas, no pongas, no salgas, no vengas, no tengas).<br>3. Exceptions : ir → no <b>vayas</b> ; ser → no <b>seas</b>.<br>4. Ne mélange jamais : « haz » n'existe pas au négatif.",
   "examples": [
    {
     "es": "Ten cuidado con el perro, muerde.",
     "fr": "Fais attention au chien, il mord.",
     "note": "tener → ten"
    },
    {
     "es": "Haz la maleta esta noche.",
     "fr": "Fais la valise ce soir.",
     "note": "hacer → haz"
    },
    {
     "es": "No hagas trampas, por favor.",
     "fr": "Ne triche pas, s'il te plaît.",
     "note": "négatif : hagas"
    },
    {
     "es": "Pon la tele más baja.",
     "fr": "Mets la télé moins fort.",
     "note": "poner → pon"
    },
    {
     "es": "Sal a jugar un rato.",
     "fr": "Sors jouer un moment.",
     "note": "salir → sal"
    },
    {
     "es": "Sé paciente con tu hermano.",
     "fr": "Sois patient avec ton frère.",
     "note": "ser → sé"
    }
   ],
   "pitfalls": [
    {
     "wrong": "Eres bueno con tu hermana. (comme ordre)",
     "right": "Sé bueno con tu hermana.",
     "why": "À l'impératif, ser devient sé, pas eres."
    },
    {
     "wrong": "No di nada a nadie.",
     "right": "No digas nada a nadie.",
     "why": "Au négatif, decir devient digas, pas di."
    },
    {
     "wrong": "No ve solo de noche.",
     "right": "No vayas solo de noche.",
     "why": "Au négatif, ir devient vayas."
    }
   ],
   "exercises": [
    {
     "type": "mcq",
     "q": "« Fais ton lit » (hacer, tú)",
     "opts": [
      "Hace tu cama",
      "Haga tu cama",
      "Haz tu cama"
     ],
     "correct": 2,
     "why": "hacer → <b>haz</b> à l'affirmatif tú."
    },
    {
     "type": "fill",
     "text": "No ___ (hacer, tú) ruido, mamá duerme.",
     "answers": [
      "hagas"
     ],
     "why": "Négatif : forme yo (hago) → <b>hagas</b>."
    },
    {
     "type": "mcq",
     "q": "« Ne dis pas de bêtises » (decir, tú)",
     "opts": [
      "No digas tonterías",
      "No di tonterías",
      "No dices tonterías"
     ],
     "correct": 0,
     "why": "Négatif : decir → <b>digas</b>."
    },
    {
     "type": "fill",
     "text": "___ (venir, tú) pronto, la película empieza ya.",
     "answers": [
      "Ven",
      "ven"
     ],
     "why": "venir → <b>ven</b>."
    },
    {
     "type": "speak",
     "es": "Ven a cenar a casa el sábado.",
     "fr": "Viens dîner à la maison samedi."
    },
    {
     "type": "mcq",
     "q": "« N'aie pas honte » (tener, tú)",
     "opts": [
      "No tienes vergüenza",
      "No tengas vergüenza",
      "No ten vergüenza"
     ],
     "correct": 1,
     "why": "Négatif : tener → <b>tengas</b>."
    },
    {
     "type": "fill",
     "text": "___ (salir, tú) de ahí, que es peligroso.",
     "answers": [
      "Sal",
      "sal"
     ],
     "why": "salir → <b>sal</b>."
    },
    {
     "type": "fill",
     "text": "No ___ (ir, tú) sin chaqueta, hace frío.",
     "answers": [
      "vayas"
     ],
     "why": "Négatif : ir → <b>vayas</b>."
    },
    {
     "type": "mcq",
     "q": "« Sois gentil avec ta cousine » (ser, tú)",
     "opts": [
      "Seas amable con tu prima",
      "Sé amable con tu prima",
      "Eres amable con tu prima",
      "Sea amable con tu prima"
     ],
     "correct": 1,
     "why": "ser → <b>sé</b> à l'affirmatif tú."
    },
    {
     "type": "fill",
     "text": "___ (poner) el abrigo, que llueve, y no ___ (salir) sin paraguas.",
     "answers": [
      [
       "Pon",
       "pon"
      ],
      [
       "salgas"
      ]
     ],
     "why": "poner → pon ; négatif de salir → salgas."
    },
    {
     "type": "mcq",
     "q": "« Dis ce que tu penses » (decir, tú)",
     "opts": [
      "Dices lo que piensas.",
      "Diga lo que piensas.",
      "Dice lo que piensas.",
      "Di lo que piensas."
     ],
     "correct": 3,
     "why": "decir → <b>di</b> à l'affirmatif tú."
    },
    {
     "type": "speak",
     "es": "Ten cuidado y no vayas tan rápido.",
     "fr": "Fais attention et ne va pas si vite."
    }
   ]
  },
  {
   "id": "imperativo-informel-2",
   "reg": "informal",
   "title": "Les pronoms collés : ayúdame, siéntate, cómpramelo · Informel (tú)",
   "why": "Entre amis, on dit « <b>Ayúdame</b> », « <b>Siéntate</b> » ou « <b>Cuéntamelo todo</b> ». Les pronoms se collent au verbe à l'affirmatif et se mettent avant au négatif.",
   "rule": "1. Affirmatif : verbe + pronom(s) collés (ayuda + me = ayúdame).<br>2. Négatif : pronoms <b>avant</b> le verbe (no me lo cuentes).<br>3. Ordre : <b>me / te</b> avant <b>lo / la</b> (dámelo).<br>4. Accent : si la syllabe forte du verbe est la 3e avant la fin, on écrit l'accent (ayúdame, siéntate) ; pas d'accent pour ponte ou vete.",
   "examples": [
    {
     "es": "Cuéntame cómo te fue en el cole.",
     "fr": "Raconte-moi comment ça s'est passé à l'école.",
     "note": "cuenta + me"
    },
    {
     "es": "Cómpramelo, por favor.",
     "fr": "Achète-le-moi, s'il te plaît.",
     "note": "compra + me + lo"
    },
    {
     "es": "Levántate, que ya es tarde.",
     "fr": "Lève-toi, il est déjà tard.",
     "note": "levanta + te"
    },
    {
     "es": "No te sientes ahí, está sucio.",
     "fr": "Ne t'assieds pas là, c'est sale.",
     "note": "négatif : pronom avant"
    },
    {
     "es": "Vete con tus amigos, yo me quedo.",
     "fr": "Va avec tes amis, moi je reste.",
     "note": "ve + te = vete"
    },
    {
     "es": "Dúchate antes de cenar.",
     "fr": "Douche-toi avant de dîner.",
     "note": "ducha + te"
    }
   ],
   "pitfalls": [
    {
     "wrong": "Ayudame con la mochila.",
     "right": "Ayúdame con la mochila.",
     "why": "Avec le pronom collé, la syllabe forte reste « yú » : il faut l'accent."
    },
    {
     "wrong": "No levántate.",
     "right": "No te levantes.",
     "why": "Au négatif, le pronom va avant le verbe, et la forme change : levantes."
    },
    {
     "wrong": "Me lo da, es mío. (comme consigne)",
     "right": "Dámelo, es mío.",
     "why": "Pour une consigne, on colle les pronoms au verbe : dámelo."
    }
   ],
   "exercises": [
    {
     "type": "mcq",
     "q": "« Aide-moi » (ayudar + me, tú)",
     "opts": [
      "Ayuda me",
      "Ayúdame",
      "Me ayuda"
     ],
     "correct": 1,
     "why": "ayuda + me = <b>ayúdame</b> (accent)."
    },
    {
     "type": "fill",
     "text": "Es mío, ___ (dar + me + lo, tú).",
     "answers": [
      "dámelo",
      "Dámelo"
     ],
     "why": "da + me + lo = dámelo (accent)."
    },
    {
     "type": "mcq",
     "q": "« Ne te lève pas » (levantarse, tú)",
     "opts": [
      "No te levantes",
      "No levántate",
      "No te levanta"
     ],
     "correct": 0,
     "why": "Négatif : <b>no te</b> + forme tú négative (levantes)."
    },
    {
     "type": "fill",
     "text": "Estás cansado, ___ (acostarse, tú) ya.",
     "answers": [
      "acuéstate",
      "Acuéstate"
     ],
     "why": "acuesta + te = acuéstate (accent)."
    },
    {
     "type": "speak",
     "es": "Siéntate aquí, a mi lado.",
     "fr": "Assieds-toi ici, à côté de moi."
    },
    {
     "type": "fill",
     "text": "Hace frío: ___ (ponerse, tú) la bufanda.",
     "answers": [
      "ponte",
      "Ponte"
     ],
     "why": "pon + te = ponte (sans accent)."
    },
    {
     "type": "mcq",
     "q": "« Ne me le raconte pas, c'est une surprise ! »",
     "opts": [
      "No cuéntamelo",
      "No me lo cuenta",
      "No me lo cuentes"
     ],
     "correct": 2,
     "why": "Négatif : pronoms avant + forme <b>cuentes</b>."
    },
    {
     "type": "fill",
     "text": "Es tarde: ___ (irse, tú) a la cama.",
     "answers": [
      "vete",
      "Vete"
     ],
     "why": "ve + te = vete (sans accent)."
    },
    {
     "type": "mcq",
     "q": "« Mange-le » (comer + lo, tú)",
     "opts": [
      "Come lo",
      "Lo come",
      "Comelo",
      "Cómelo"
     ],
     "correct": 3,
     "why": "come + lo = <b>cómelo</b> (accent)."
    },
    {
     "type": "fill",
     "text": "No ___ (irse, tú) todavía, la fiesta acaba de empezar.",
     "answers": [
      "te vayas"
     ],
     "why": "Négatif : <b>te vayas</b> (pronom avant, ir → vayas)."
    },
    {
     "type": "mcq",
     "q": "« Ne la perds pas » (la llave)",
     "opts": [
      "No piérdela",
      "No la pierdas",
      "No la pierde"
     ],
     "correct": 1,
     "why": "Négatif : <b>no la pierdas</b>."
    },
    {
     "type": "speak",
     "es": "Cuéntamelo todo desde el principio.",
     "fr": "Raconte-moi tout depuis le début."
    }
   ]
  }
 ],
 "verbes-pronominaux": [
  {
   "id": "pronominaux-1",
   "reg": "informal",
   "title": "Comprendre les pronominaux : la logique du « se » · Informel (tú)",
   "why": "L'espagnol adore les verbes pronominaux, bien plus que le français. Leur logique est simple : <b>l'action revient sur celui qui la fait</b>. <i>Levantar</i> = lever (un objet, quelqu'un d'autre) ; <i>levantarse</i> = me lever, lever <b>moi-même</b>. Le petit pronom (me, te, se…) est le « retour » de l'action vers le sujet.<br>Avec le corps, c'est comme en français : on dit « je me lave <b>les</b> mains » et <i>me lavo <b>las</b> manos</i>, sans possessif, puisque le pronom dit déjà à qui sont les mains.<br>Mais les deux langues ne se recouvrent pas. <b>Pronominaux en espagnol, pas en français</b> : <i>quedarse</i> (rester), <i>irse</i> (partir), <i>caerse</i> (tomber), <i>comerse</i> (manger jusqu'au bout). <b>Pronominaux en français, pas en espagnol</b> : « se promener » = <i>pasear</i>, « se passer » = <i>pasar</i> (<i>¿Qué pasa?</i>). Retiens donc chaque verbe avec son <b>se</b> quand il en a un.",
   "rule": "1. Pars de l'infinitif en <b>-se</b> : levantar<b>se</b>, ducharse, llamarse.<br>2. Choisis le pronom selon la personne : yo <b>me</b>, tú <b>te</b>, él/ella/usted <b>se</b>, nosotros <b>nos</b>, vosotros <b>os</b>, ellos/ustedes <b>se</b>.<br>3. Conjugue le verbe <b>normalement</b>, sans le -se : <b>me</b> levant<b>o</b>, <b>te</b> levant<b>as</b>…<br>4. Place du pronom : <b>avant</b> le verbe conjugué (<b>me</b> levanto) ; <b>collé</b> à l'infinitif (voy a levantar<b>me</b>), au gérondif (estoy levantándo<b>me</b>) et à l'impératif affirmatif (levánta<b>te</b>) ; devant le verbe à l'impératif négatif (<b>no te</b> levantes).<br>5. Parties du corps et vêtements : on met l'<b>article</b> (el, la, los, las), jamais le possessif : me lavo <b>las</b> manos, me pongo <b>el</b> abrigo.",
   "timeline": "levantar ──▶ un objet ou quelqu'un d'autre   |   levantarse ──▶ ↩ moi-même",
   "table": {
    "caption": "levantarse (se lever)",
    "headers": [
     "Personne",
     "Forme",
     "Français"
    ],
    "rows": [
     [
      "yo",
      "<b>me</b> levanto",
      "je me lève"
     ],
     [
      "tú",
      "<b>te</b> levantas",
      "tu te lèves"
     ],
     [
      "él / ella / usted",
      "<b>se</b> levanta",
      "il / elle se lève ; vous vous levez (politesse)"
     ],
     [
      "nosotros / nosotras",
      "<b>nos</b> levantamos",
      "nous nous levons"
     ],
     [
      "vosotros / vosotras",
      "<b>os</b> levantáis",
      "vous vous levez (plusieurs amis, Espagne)"
     ],
     [
      "ellos / ellas / ustedes",
      "<b>se</b> levantan",
      "ils / elles se lèvent ; vous vous levez (politesse, pluriel)"
     ]
    ]
   },
   "examples": [
    {
     "es": "Me cepillo los dientes después de cenar.",
     "fr": "Je me brosse les dents après le dîner.",
     "note": "los dientes : article, pas « mis dientes »"
    },
    {
     "es": "Mi hermano se queda en casa los domingos.",
     "fr": "Mon frère reste à la maison le dimanche.",
     "note": "quedarse : pronominal en espagnol, pas en français"
    },
    {
     "es": "Voy a ponerme el abrigo, que hace frío.",
     "fr": "Je vais mettre mon manteau, il fait froid.",
     "note": "pronom collé à l'infinitif + article el"
    },
    {
     "es": "Paseamos por el parque después de comer.",
     "fr": "Nous nous promenons dans le parc après le repas.",
     "note": "« se promener » = pasear : pas de pronom en espagnol"
    },
    {
     "es": "Ella se pone las gafas para leer.",
     "fr": "Elle met ses lunettes pour lire.",
     "note": "las gafas : article"
    },
    {
     "es": "Lucía y Pablo se quieren mucho.",
     "fr": "Lucía et Pablo s'aiment beaucoup.",
     "note": "sens réciproque : l'un l'autre"
    }
   ],
   "pitfalls": [
    {
     "wrong": "Me lavo mis manos.",
     "right": "Me lavo las manos.",
     "why": "Le pronom <b>me</b> dit déjà que ce sont mes mains : article (las), pas possessif."
    },
    {
     "wrong": "Voy a ducharse.",
     "right": "Voy a ducharme.",
     "why": "Le pronom suit la <b>personne</b> (yo → me), pas le -se de l'infinitif."
    },
    {
     "wrong": "Me paseo por el parque.",
     "right": "Paseo por el parque.",
     "why": "<i>Pasear</i> n'est pas pronominal en espagnol, même si « se promener » l'est en français."
    },
    {
     "wrong": "Está vistiendose.",
     "right": "Está vistiéndose.",
     "why": "Quand on colle le pronom au gérondif, on écrit l'accent : vistiéndose."
    }
   ],
   "exercises": [
    {
     "type": "mcq",
     "q": "Quelle phrase veut dire « Je lève la main » ?",
     "opts": [
      "Me levanto la mano",
      "Levanto la mano",
      "Se levanta la mano"
     ],
     "correct": 1,
     "why": "Sans pronom, l'action va sur autre chose que moi : <b>la mano</b>."
    },
    {
     "type": "fill",
     "text": "Tú ___ ___ (bañarse) después del gimnasio.",
     "answers": [
      [
       "te"
      ],
      [
       "bañas"
      ]
     ],
     "why": "tú → <b>te</b> + bañas."
    },
    {
     "type": "mcq",
     "q": "« Vous vous levez » (vosotros, à deux amis) =",
     "opts": [
      "Os levantáis",
      "Se levantáis",
      "Vos levantáis"
     ],
     "correct": 0,
     "why": "vosotros → <b>os</b> + levantáis."
    },
    {
     "type": "fill",
     "text": "Mis padres ___ ___ (quedarse) en casa los domingos.",
     "answers": [
      [
       "se"
      ],
      [
       "quedan"
      ]
     ],
     "why": "ellos → <b>se</b> + quedan."
    },
    {
     "type": "speak",
     "es": "Todos los días me levanto temprano y me ducho.",
     "fr": "Tous les jours, je me lève tôt et je me douche."
    },
    {
     "type": "mcq",
     "q": "Pourquoi dit-on « Me lavo las manos » et pas « mis manos » ?",
     "opts": [
      "Parce que manos est féminin",
      "Parce que « mis » n'existe pas",
      "Parce que <b>me</b> dit déjà que ce sont mes mains"
     ],
     "correct": 2,
     "why": "Le pronom indique le possesseur : on met l'article."
    },
    {
     "type": "fill",
     "text": "Nosotros ___ ___ (sentarse) a la mesa.",
     "answers": [
      [
       "nos"
      ],
      [
       "sentamos"
      ]
     ],
     "why": "nosotros → <b>nos</b> + sentamos."
    },
    {
     "type": "mcq",
     "q": "Lequel est pronominal en espagnol mais PAS en français ?",
     "opts": [
      "llamarse (s'appeler)",
      "lavarse (se laver)",
      "quedarse (rester)"
     ],
     "correct": 2,
     "why": "« Rester » n'est pas pronominal ; <b>quedarse</b> l'est."
    },
    {
     "type": "fill",
     "text": "Ellos ___ ___ (lavarse) los dientes.",
     "answers": [
      [
       "se"
      ],
      [
       "lavan"
      ]
     ],
     "why": "ellos → <b>se</b> + lavan."
    },
    {
     "type": "mcq",
     "q": "« Je me promène dans le parc » =",
     "opts": [
      "Paseo por el parque",
      "Me paseo por el parque",
      "Me pasear por el parque"
     ],
     "correct": 0,
     "why": "<b>Pasear</b> n'est pas pronominal en espagnol."
    },
    {
     "type": "fill",
     "text": "Anna ___ ___ (quitarse) los zapatos en casa.",
     "answers": [
      [
       "se"
      ],
      [
       "quita"
      ]
     ],
     "why": "Anna = ella → <b>se</b> + quita."
    },
    {
     "type": "fill",
     "text": "Cuando pierde, mi hermano ___ ___ (enfadarse).",
     "answers": [
      [
       "se"
      ],
      [
       "enfada"
      ]
     ],
     "why": "él → <b>se</b> + enfada."
    },
    {
     "type": "speak",
     "es": "Cuando hace frío, me pongo el abrigo.",
     "fr": "Quand il fait froid, je mets mon manteau."
    }
   ]
  },
  {
   "id": "pronominaux-2",
   "reg": "formal",
   "title": "Les pronoms à toutes les personnes · Formel (usted)",
   "why": "Au vouvoiement, un seul pronom à retenir : <b>se</b>, pour <i>usted</i> (une personne) comme pour <i>ustedes</i> (plusieurs). Le pronom suit la personne dont on parle, et le verbe se conjugue normalement.",
   "rule": "1. yo <b>me</b>, tú <b>te</b>, él/ella/usted <b>se</b>, nosotros <b>nos</b>, vosotros <b>os</b>, ellos/ustedes <b>se</b>.<br>2. Avec usted ou ustedes : toujours <b>se</b> + verbe à la 3e personne (usted <b>se</b> llama, ustedes <b>se</b> llaman).",
   "examples": [
    {
     "es": "Buenos días, me llamo Lucía Ortega.",
     "fr": "Bonjour, je m'appelle Lucía Ortega."
    },
    {
     "es": "¿Cómo se llama usted, señor?",
     "fr": "Comment vous appelez-vous, monsieur ?",
     "note": "usted → se + llama"
    },
    {
     "es": "Los clientes se quedan en el hotel dos noches.",
     "fr": "Les clients restent à l'hôtel deux nuits."
    },
    {
     "es": "Ustedes se sientan en la sala de espera.",
     "fr": "Vous vous asseyez dans la salle d'attente.",
     "note": "ustedes → se + sientan"
    },
    {
     "es": "Mis colegas y yo nos preparamos para la reunión.",
     "fr": "Mes collègues et moi nous préparons pour la réunion."
    }
   ],
   "pitfalls": [
    {
     "wrong": "¿Cómo te llama usted?",
     "right": "¿Cómo se llama usted?",
     "why": "Avec usted, le pronom est <b>se</b>, jamais te."
    },
    {
     "wrong": "Ustedes os sentáis aquí.",
     "right": "Ustedes se sientan aquí.",
     "why": "ustedes se conjugue comme ellos : <b>se</b> + 3e personne du pluriel."
    },
    {
     "wrong": "Usted se llamas Ruiz.",
     "right": "Usted se llama Ruiz.",
     "why": "usted prend la terminaison de la 3e personne du singulier."
    }
   ],
   "exercises": [
    {
     "type": "mcq",
     "q": "Avec « usted », quel pronom utilise-t-on ?",
     "opts": [
      "te",
      "se",
      "os"
     ],
     "correct": 1,
     "why": "usted et ustedes → <b>se</b>."
    },
    {
     "type": "fill",
     "text": "Buenos días, señora. ¿Cómo ___ ___ (llamarse) usted?",
     "answers": [
      [
       "se"
      ],
      [
       "llama"
      ]
     ],
     "why": "usted → <b>se</b> + llama."
    },
    {
     "type": "fill",
     "text": "Señor Gil, ¿a qué hora ___ ___ (levantarse) usted?",
     "answers": [
      [
       "se"
      ],
      [
       "levanta"
      ]
     ],
     "why": "usted → <b>se</b> + levanta."
    },
    {
     "type": "mcq",
     "q": "Pour vouvoyer UN client, quelle phrase est correcte ?",
     "opts": [
      "Usted se sienta aquí",
      "Usted te sientas aquí",
      "Usted se sientas aquí"
     ],
     "correct": 0,
     "why": "usted → <b>se</b> + sienta (3e personne du singulier)."
    },
    {
     "type": "speak",
     "es": "¿Cómo se llama usted y de dónde es?",
     "fr": "Comment vous appelez-vous et d'où êtes-vous ?"
    },
    {
     "type": "fill",
     "text": "Los invitados ___ ___ (quedarse) hasta las nueve.",
     "answers": [
      [
       "se"
      ],
      [
       "quedan"
      ]
     ],
     "why": "los invitados = ellos → <b>se</b> + quedan."
    },
    {
     "type": "mcq",
     "q": "Mis colegas y yo ___ preparamos para la reunión.",
     "opts": [
      "se",
      "me",
      "nos"
     ],
     "correct": 2,
     "why": "« Mis colegas y yo » = nosotros → <b>nos</b>."
    },
    {
     "type": "fill",
     "text": "Yo ___ ___ (llamarse) Marta Sanz y soy la nueva secretaria.",
     "answers": [
      [
       "me"
      ],
      [
       "llamo"
      ]
     ],
     "why": "yo → <b>me</b> + llamo."
    },
    {
     "type": "mcq",
     "q": "Le directeur s'adresse à deux clients : « ¿Cómo ___ ustedes? »",
     "opts": [
      "se llama",
      "os llamáis",
      "te llamas",
      "se llaman"
     ],
     "correct": 3,
     "why": "ustedes → <b>se</b> + llaman (3e personne du pluriel)."
    },
    {
     "type": "fill",
     "text": "Señora Pérez, ¿usted ___ ___ (acordarse) de mi nombre?",
     "answers": [
      [
       "se"
      ],
      [
       "acuerda"
      ]
     ],
     "why": "usted → <b>se</b> + acuerda (o → ue)."
    },
    {
     "type": "mcq",
     "q": "En réunion : « Nous nous présentons »",
     "opts": [
      "Se presentamos",
      "Nos presentamos",
      "Os presentamos"
     ],
     "correct": 1,
     "why": "nosotros → <b>nos</b> + presentamos."
    },
    {
     "type": "fill",
     "text": "La directora ___ ___ (irse) de viaje mañana.",
     "answers": [
      [
       "se"
      ],
      [
       "va"
      ]
     ],
     "why": "ella → <b>se</b> + va (irse : se va)."
    },
    {
     "type": "speak",
     "es": "Mi jefe se va a las seis y yo me quedo.",
     "fr": "Mon chef part à six heures et moi je reste."
    }
   ]
  },
  {
   "id": "pronominaux-3",
   "reg": "informal",
   "title": "Ma routine, du matin au soir · Informel (tú)",
   "why": "La routine quotidienne est le terrain idéal : presque chaque geste de la journée est pronominal, du réveil au coucher.",
   "rule": "1. Ordre de la journée : despertarse → levantarse → ducharse → vestirse → peinarse → acostarse.<br>2. Certains changent de voyelle (despertarse : me despierto ; acostarse : me acuesto ; vestirse : me visto), sauf nosotros et vosotros.<br>3. Corps et vêtements : article (los dientes, el pelo).",
   "examples": [
    {
     "es": "Me despierto a las seis, pero me levanto a las siete.",
     "fr": "Je me réveille à six heures, mais je me lève à sept heures."
    },
    {
     "es": "Mi hermano se viste en cinco minutos.",
     "fr": "Mon frère s'habille en cinq minutes."
    },
    {
     "es": "¿Te lavas los dientes después de comer?",
     "fr": "Tu te brosses les dents après manger ?",
     "note": "lavarse los dientes : article los"
    },
    {
     "es": "Nos peinamos delante del mismo espejo.",
     "fr": "Nous nous coiffons devant le même miroir."
    },
    {
     "es": "Por la noche me quito los zapatos y me pongo el pijama.",
     "fr": "Le soir, j'enlève mes chaussures et je mets mon pyjama."
    }
   ],
   "pitfalls": [
    {
     "wrong": "Me lavo mis dientes.",
     "right": "Me lavo los dientes.",
     "why": "Le pronom montre déjà que ce sont mes dents : article los."
    },
    {
     "wrong": "Me acosto a las once.",
     "right": "Me acuesto a las once.",
     "why": "acostarse change sa voyelle : o → ue (me acuesto)."
    },
    {
     "wrong": "Nos acuestamos temprano.",
     "right": "Nos acostamos temprano.",
     "why": "À nosotros, pas de changement de voyelle : acostamos."
    }
   ],
   "exercises": [
    {
     "type": "mcq",
     "q": "« Je me réveille à sept heures » =",
     "opts": [
      "Me despierto a las siete",
      "Me despiertas a las siete",
      "Despierto a las siete"
     ],
     "correct": 0,
     "why": "yo → <b>me</b> + despierto (e → ie)."
    },
    {
     "type": "fill",
     "text": "Mi hermano ___ ___ (vestirse) en cinco minutos.",
     "answers": [
      [
       "se"
      ],
      [
       "viste"
      ]
     ],
     "why": "él → <b>se</b> + viste."
    },
    {
     "type": "fill",
     "text": "Tú ___ ___ (lavarse) los dientes tres veces al día.",
     "answers": [
      [
       "te"
      ],
      [
       "lavas"
      ]
     ],
     "why": "tú → <b>te</b> + lavas ; los dientes avec l'article."
    },
    {
     "type": "mcq",
     "q": "« Nous nous couchons à onze heures » =",
     "opts": [
      "Nos acuestamos",
      "Nos acostáis",
      "Nos acostamos"
     ],
     "correct": 2,
     "why": "nosotros garde la voyelle d'origine : acostamos."
    },
    {
     "type": "fill",
     "text": "Yo ___ ___ (acostarse) a las once.",
     "answers": [
      [
       "me"
      ],
      [
       "acuesto"
      ]
     ],
     "why": "yo → <b>me</b> + acuesto (o → ue)."
    },
    {
     "type": "speak",
     "es": "Me despierto a las siete, pero me levanto más tarde.",
     "fr": "Je me réveille à sept heures, mais je me lève plus tard."
    },
    {
     "type": "mcq",
     "q": "Que veut dire « Mi madre me peina » ?",
     "opts": [
      "Ma mère se coiffe",
      "Ma mère me coiffe",
      "Je coiffe ma mère"
     ],
     "correct": 1,
     "why": "Ici <b>me</b> n'est pas un retour : c'est moi qui suis coiffé par ma mère."
    },
    {
     "type": "fill",
     "text": "Nosotros ___ ___ (ducharse) antes de cenar.",
     "answers": [
      [
       "nos"
      ],
      [
       "duchamos"
      ]
     ],
     "why": "nosotros → <b>nos</b> + duchamos."
    },
    {
     "type": "mcq",
     "q": "« Je me lave les cheveux » =",
     "opts": [
      "Me lavo el pelo",
      "Me lavo mi pelo",
      "Lavo me el pelo"
     ],
     "correct": 0,
     "why": "<b>Me</b> + article <b>el</b>, jamais le possessif."
    },
    {
     "type": "fill",
     "text": "Por la noche, tú ___ ___ (quitarse) los zapatos.",
     "answers": [
      [
       "te"
      ],
      [
       "quitas"
      ]
     ],
     "why": "tú → <b>te</b> + quitas."
    },
    {
     "type": "mcq",
     "q": "Mis hermanos ___ peinan antes de salir.",
     "opts": [
      "me",
      "te",
      "se"
     ],
     "correct": 2,
     "why": "mis hermanos = ellos → <b>se</b>."
    },
    {
     "type": "fill",
     "text": "Mis padres ___ ___ (levantarse) muy temprano los sábados.",
     "answers": [
      [
       "se"
      ],
      [
       "levantan"
      ]
     ],
     "why": "ellos → <b>se</b> + levantan."
    },
    {
     "type": "speak",
     "es": "Mi hermana se peina y se maquilla antes de salir.",
     "fr": "Ma sœur se coiffe et se maquille avant de sortir."
    }
   ]
  },
  {
   "id": "pronominaux-4",
   "reg": "formal",
   "title": "Pronom + infinitif, ir a et gérondif · Formel (usted)",
   "why": "Dans les échanges polis, on entend sans cesse « voy a », « quiero » ou « estoy » suivis d'un pronominal. Le pronom reste fidèle à la <b>personne</b>, pas au -se de l'infinitif.",
   "rule": "1. Infinitif : pronom collé (voy a presentar<b>me</b>) ou devant le groupe (<b>me</b> voy a presentar).<br>2. Gérondif : collé avec accent (estoy duchán<b>dome</b>) ou devant (<b>me</b> estoy duchando).<br>3. Jamais au milieu : pas de « voy a me presentar ».",
   "examples": [
    {
     "es": "Voy a presentarme: soy la nueva gerente.",
     "fr": "Je vais me présenter : je suis la nouvelle gérante."
    },
    {
     "es": "¿Va a quedarse usted otra noche, señor?",
     "fr": "Allez-vous rester une nuit de plus, monsieur ?"
    },
    {
     "es": "Los huéspedes se van a instalar en el segundo piso.",
     "fr": "Les clients vont s'installer au deuxième étage.",
     "note": "pronom devant le groupe"
    },
    {
     "es": "El doctor se está cambiando de bata.",
     "fr": "Le docteur est en train de changer de blouse."
    },
    {
     "es": "Estamos preparándonos para la reunión.",
     "fr": "Nous sommes en train de nous préparer pour la réunion.",
     "note": "accent : preparándonos"
    },
    {
     "es": "Deseo sentarme cerca de la ventana.",
     "fr": "Je souhaite m'asseoir près de la fenêtre."
    }
   ],
   "pitfalls": [
    {
     "wrong": "Voy a me presentar.",
     "right": "Voy a presentarme / Me voy a presentar.",
     "why": "Le pronom va devant le groupe entier ou collé à la fin, jamais au milieu."
    },
    {
     "wrong": "Está duchandose.",
     "right": "Está duchándose.",
     "why": "Le gérondif collé garde son accent tonique : duchándose."
    },
    {
     "wrong": "Usted va a quedarme.",
     "right": "Usted va a quedarse.",
     "why": "Le pronom suit la personne : usted → se."
    }
   ],
   "exercises": [
    {
     "type": "mcq",
     "q": "« Je vais me présenter » =",
     "opts": [
      "Voy a presentarse",
      "Voy a presentarme",
      "Voy a me presentar"
     ],
     "correct": 1,
     "why": "yo → me, collé à l'infinitif : presentarme."
    },
    {
     "type": "fill",
     "text": "Señora Díaz, ¿va a ___ (instalarse, usted) en la habitación doce?",
     "answers": [
      [
       "instalarse"
      ]
     ],
     "why": "usted → se, collé à l'infinitif."
    },
    {
     "type": "mcq",
     "q": "« Le patient est en train de se changer » =",
     "opts": [
      "Está cambiándose",
      "Está cambiandose",
      "Está se cambiando"
     ],
     "correct": 0,
     "why": "Gérondif + se collé, avec accent : cambiándose."
    },
    {
     "type": "fill",
     "text": "El gerente se está ___ (vestirse) para la reunión.",
     "answers": [
      [
       "vistiendo"
      ]
     ],
     "why": "vestirse → gérondif vistiendo (e → i)."
    },
    {
     "type": "speak",
     "es": "Voy a ducharme y después bajo a recepción.",
     "fr": "Je vais me doucher et ensuite je descends à la réception."
    },
    {
     "type": "fill",
     "text": "Los invitados ___ van a sentar a la mesa tres (sentarse).",
     "answers": [
      [
       "se"
      ]
     ],
     "why": "ellos → se, devant le groupe : se van a sentar."
    },
    {
     "type": "mcq",
     "q": "« Vous vous inquiétez sans raison, madame » =",
     "opts": [
      "Está preocupandose",
      "Está se preocupando",
      "Está preocupándose"
     ],
     "correct": 2,
     "why": "Pronom collé au gérondif, avec accent : preocupándose."
    },
    {
     "type": "fill",
     "text": "Nosotros estamos ___ (prepararse) para la reunión.",
     "answers": [
      [
       "preparándonos"
      ]
     ],
     "why": "nosotros → nos, collé au gérondif : preparándonos."
    },
    {
     "type": "mcq",
     "q": "Laquelle de ces phrases est INCORRECTE ?",
     "opts": [
      "Se va a levantar",
      "Va a se levantar",
      "Va a levantarse"
     ],
     "correct": 1,
     "why": "Le pronom ne se met jamais entre « va a » et l'infinitif."
    },
    {
     "type": "fill",
     "text": "Disculpe, ___ voy a sentar aquí un momento (sentarse, yo).",
     "answers": [
      [
       "me"
      ]
     ],
     "why": "yo → me, devant le groupe : me voy a sentar."
    },
    {
     "type": "mcq",
     "q": "« Elle est en train de se doucher » : quel gérondif collé est bien écrit ?",
     "opts": [
      "duchandose",
      "duchándose",
      "duchandóse"
     ],
     "correct": 1,
     "why": "L'accent reste sur la syllabe tonique : duchándose."
    },
    {
     "type": "fill",
     "text": "Doctora, yo estoy ___ (cambiarse) en el vestuario.",
     "answers": [
      [
       "cambiándome"
      ]
     ],
     "why": "yo → me, collé au gérondif : cambiándome."
    },
    {
     "type": "speak",
     "es": "Disculpe, ¿puedo sentarme junto a la ventana?",
     "fr": "Excusez-moi, puis-je m'asseoir près de la fenêtre ?"
    }
   ]
  },
  {
   "id": "pronominaux-5",
   "reg": "informal",
   "title": "Quand « se » change le sens (irse, dormirse, ponerse…) · Informel (tú)",
   "why": "Ajouter <b>se</b> ne fait pas que « retourner » l'action : ça change souvent le sens du verbe. Mieux vaut apprendre ces verbes par paires.",
   "rule": "1. Sans pronom : l'action va vers autre chose ou quelqu'un d'autre. Avec pronom : elle revient sur le sujet, ou le verbe prend un sens nouveau.<br>2. Les paires à retenir : ir / <b>irse</b>, dormir / <b>dormirse</b>, llamar / <b>llamarse</b>, poner / <b>ponerse</b>, quedar / <b>quedarse</b>, llevar / <b>llevarse</b>.",
   "examples": [
    {
     "es": "Me voy, que llego tarde.",
     "fr": "Je m'en vais, je suis en retard.",
     "note": "ir = aller ; irse = partir"
    },
    {
     "es": "Duermo ocho horas, pero me duermo tarde.",
     "fr": "Je dors huit heures, mais je m'endors tard.",
     "note": "dormir / dormirse"
    },
    {
     "es": "Llamo a mi madre cada domingo; mi perro se llama Bruno.",
     "fr": "J'appelle ma mère chaque dimanche ; mon chien s'appelle Bruno.",
     "note": "llamar / llamarse"
    },
    {
     "es": "Pongo las llaves en la mesa y me pongo las gafas.",
     "fr": "Je pose les clés sur la table et je mets mes lunettes.",
     "note": "poner / ponerse"
    },
    {
     "es": "Quedamos a las nueve en el cine.",
     "fr": "On se retrouve à neuf heures au cinéma.",
     "note": "quedar = fixer un rendez-vous ; quedarse = rester"
    },
    {
     "es": "Me llevo muy bien con mi vecino.",
     "fr": "Je m'entends très bien avec mon voisin.",
     "note": "llevarse bien = s'entendre bien"
    }
   ],
   "pitfalls": [
    {
     "wrong": "Me duermo ocho horas cada noche.",
     "right": "Duermo ocho horas cada noche.",
     "why": "Pour une durée de sommeil, on utilise <b>dormir</b> ; dormirse = s'endormir."
    },
    {
     "wrong": "Voy de la fiesta a las doce.",
     "right": "Me voy de la fiesta a las doce.",
     "why": "Pour dire « partir, quitter un lieu », il faut <b>irse</b>."
    },
    {
     "wrong": "Nos quedamos a las ocho en la plaza.",
     "right": "Quedamos a las ocho en la plaza.",
     "why": "Pour fixer un rendez-vous : <b>quedar</b> sans pronom ; quedarse = rester."
    }
   ],
   "exercises": [
    {
     "type": "mcq",
     "q": "« Je m'endors devant la télé » =",
     "opts": [
      "Me duermo delante de la tele",
      "Duermo delante de la tele",
      "Me dormo delante de la tele"
     ],
     "correct": 0,
     "why": "s'endormir = <b>dormirse</b> ; yo → me duermo."
    },
    {
     "type": "fill",
     "text": "Mi hermana ___ ___ (llamarse) Lucía.",
     "answers": [
      [
       "se"
      ],
      [
       "llama"
      ]
     ],
     "why": "ella → <b>se</b> + llama."
    },
    {
     "type": "mcq",
     "q": "« Llamo a mi padre » veut dire…",
     "opts": [
      "Je m'appelle mon père",
      "J'appelle mon père",
      "Mon père m'appelle"
     ],
     "correct": 1,
     "why": "Sans pronom, <b>llamar</b> = appeler quelqu'un."
    },
    {
     "type": "fill",
     "text": "Esta noche tú ___ ___ (quedarse) en casa, ¿verdad?",
     "answers": [
      [
       "te"
      ],
      [
       "quedas"
      ]
     ],
     "why": "tú → <b>te</b> + quedas (rester)."
    },
    {
     "type": "speak",
     "es": "Quedamos a las ocho en la plaza, ¿vale?",
     "fr": "On se retrouve à huit heures sur la place, d'accord ?"
    },
    {
     "type": "mcq",
     "q": "« Je mets mes lunettes (sur mon nez) » =",
     "opts": [
      "Pongo mis gafas",
      "Pongo las gafas",
      "Me pongo las gafas"
     ],
     "correct": 2,
     "why": "Mettre sur soi = <b>ponerse</b> + article."
    },
    {
     "type": "fill",
     "text": "Mis amigos ___ ___ (irse) de la fiesta a medianoche.",
     "answers": [
      [
       "se"
      ],
      [
       "van"
      ]
     ],
     "why": "ellos → <b>se</b> + van."
    },
    {
     "type": "mcq",
     "q": "« Je m'entends bien avec toi » =",
     "opts": [
      "Me llevo bien contigo",
      "Llevo bien contigo",
      "Me quedo bien contigo"
     ],
     "correct": 0,
     "why": "<b>Llevarse bien con</b> = s'entendre bien avec."
    },
    {
     "type": "fill",
     "text": "Yo ___ ___ (dormirse) siempre en el autobús.",
     "answers": [
      [
       "me"
      ],
      [
       "duermo"
      ]
     ],
     "why": "yo → <b>me</b> + duermo (o → ue)."
    },
    {
     "type": "mcq",
     "q": "Quelle phrase veut dire « Je pose mon sac sur la chaise » ?",
     "opts": [
      "Me pongo el bolso en la silla",
      "Pongo el bolso en la silla",
      "Pongo me el bolso en la silla"
     ],
     "correct": 1,
     "why": "Poser un objet = <b>poner</b> sans pronom."
    },
    {
     "type": "fill",
     "text": "Nosotros ___ (quedar : fixer un rendez-vous) a las seis en tu casa.",
     "answers": [
      [
       "quedamos"
      ]
     ],
     "why": "Rendez-vous = <b>quedar</b> sans pronom."
    },
    {
     "type": "fill",
     "text": "Tú ___ ___ (ponerse) nervioso antes de los exámenes.",
     "answers": [
      [
       "te"
      ],
      [
       "pones"
      ]
     ],
     "why": "ponerse + adjectif = devenir : tú → <b>te</b> + pones."
    },
    {
     "type": "speak",
     "es": "Me voy ya, que mañana trabajo temprano.",
     "fr": "Je m'en vais, car demain je travaille tôt."
    }
   ]
  },
  {
   "id": "pronominaux-6",
   "reg": "formal",
   "title": "L'impératif avec pronoms : « Quédese », « No se preocupe » · Formel (usted)",
   "why": "Au vouvoiement, les consignes polies sont presque toujours pronominales : on invite à s'asseoir, à se calmer, à ne pas s'inquiéter.",
   "rule": "1. Impératif usted (-ar → -e, -er/-ir → -a), avec <b>se</b> : sentarse → siéntese.<br>2. Affirmatif : <b>se</b> collé à la fin, avec accent : quédese, cálmese. Ustedes : -n (quédense).<br>3. Négatif : <b>no se</b> + verbe, sans accent : no se preocupe, no se preocupen.",
   "examples": [
    {
     "es": "Quédese en recepción, por favor.",
     "fr": "Restez à la réception, s'il vous plaît.",
     "note": "quédese : accent + se collé"
    },
    {
     "es": "Cálmese, señora, todo va bien.",
     "fr": "Calmez-vous, madame, tout va bien."
    },
    {
     "es": "No se preocupe, señor; su habitación está lista.",
     "fr": "Ne vous inquiétez pas, monsieur ; votre chambre est prête.",
     "note": "négatif : no se + preocupe"
    },
    {
     "es": "Póngase cómodo, señor; el director llega en cinco minutos.",
     "fr": "Mettez-vous à l'aise, monsieur ; le directeur arrive dans cinq minutes."
    },
    {
     "es": "Señoras y señores, levántense, por favor.",
     "fr": "Mesdames et messieurs, levez-vous, s'il vous plaît.",
     "note": "ustedes : levántense"
    },
    {
     "es": "No se levante, señor; yo abro la puerta.",
     "fr": "Ne vous levez pas, monsieur ; j'ouvre la porte."
    }
   ],
   "pitfalls": [
    {
     "wrong": "Sientese, por favor.",
     "right": "Siéntese, por favor.",
     "why": "L'accent écrit est obligatoire quand le pronom est collé."
    },
    {
     "wrong": "No siéntese aquí.",
     "right": "No se siente aquí.",
     "why": "À la forme négative, le pronom passe <b>devant</b> le verbe, sans accent."
    },
    {
     "wrong": "Siéntate, señora.",
     "right": "Siéntese, señora.",
     "why": "À une dame qu'on vouvoie : usted → siéntese ; siéntate est la forme tú."
    }
   ],
   "exercises": [
    {
     "type": "mcq",
     "q": "« Levez-vous, monsieur » (levantarse) =",
     "opts": [
      "Levantese, señor",
      "Levántese, señor",
      "Levántate, señor"
     ],
     "correct": 1,
     "why": "usted → levante + se, avec accent : <b>levántese</b>."
    },
    {
     "type": "fill",
     "text": "___ (quedarse, usted) aquí un momento, señora.",
     "answers": [
      [
       "Quédese",
       "quédese"
      ]
     ],
     "why": "usted : quede + se, accent sur quédese."
    },
    {
     "type": "mcq",
     "q": "« Ne vous inquiétez pas, monsieur » =",
     "opts": [
      "No se preocupe, señor",
      "No preocúpese, señor",
      "No se preocupa, señor"
     ],
     "correct": 0,
     "why": "Négatif : <b>no se</b> + preocupe."
    },
    {
     "type": "fill",
     "text": "Señores, ___ (sentarse, ustedes) aquí, por favor.",
     "answers": [
      [
       "siéntense",
       "Siéntense"
      ]
     ],
     "why": "ustedes : siente + n + se → siéntense."
    },
    {
     "type": "speak",
     "es": "Quítese la chaqueta y siéntese en la camilla.",
     "fr": "Enlevez votre veste et asseyez-vous sur la table d'examen."
    },
    {
     "type": "fill",
     "text": "No ___ (irse, usted) todavía, señora.",
     "answers": [
      [
       "se vaya"
      ]
     ],
     "why": "Négatif : no + se + vaya."
    },
    {
     "type": "mcq",
     "q": "« Ne vous asseyez pas là » (usted) =",
     "opts": [
      "No siéntese ahí",
      "No sientese ahí",
      "No se siente ahí"
     ],
     "correct": 2,
     "why": "Négatif : <b>no se</b> + siente, sans pronom collé."
    },
    {
     "type": "fill",
     "text": "___ (acostarse, usted) aquí, por favor, y relájese.",
     "answers": [
      [
       "Acuéstese",
       "acuéstese"
      ]
     ],
     "why": "usted : acueste + se → acuéstese."
    },
    {
     "type": "mcq",
     "q": "Quelle forme est bien écrite ?",
     "opts": [
      "Quitese el abrigo",
      "Quítese el abrigo",
      "Quitése el abrigo"
     ],
     "correct": 1,
     "why": "L'accent reste sur la même syllabe : <b>quítese</b>."
    },
    {
     "type": "fill",
     "text": "Señores, no ___ (preocuparse, ustedes): todo está bien.",
     "answers": [
      [
       "se preocupen"
      ]
     ],
     "why": "Négatif pluriel : no + se + preocupen."
    },
    {
     "type": "mcq",
     "q": "Pour dire à des clients (ustedes) de se calmer :",
     "opts": [
      "Cálmense, por favor",
      "Cálmese, por favor",
      "Cálmanse, por favor"
     ],
     "correct": 0,
     "why": "ustedes : calme + n + se → <b>cálmense</b>."
    },
    {
     "type": "fill",
     "text": "___ (ponerse, usted) el casco, por favor.",
     "answers": [
      [
       "Póngase",
       "póngase"
      ]
     ],
     "why": "usted : ponga + se → póngase."
    },
    {
     "type": "speak",
     "es": "Señores, siéntense y esperen un momento, por favor.",
     "fr": "Messieurs-dames, asseyez-vous et patientez un instant, s'il vous plaît."
    }
   ]
  },
  {
   "id": "pronominaux-7",
   "reg": "informal",
   "title": "Réciproques et émotions · Informel (tú)",
   "why": "Quand deux personnes agissent l'une sur l'autre, le pronom pluriel (nos, os, se) veut dire « l'un l'autre ». Beaucoup d'émotions se disent aussi avec un pronom : me enfado, te alegras.",
   "rule": "1. Réciproque : sujet pluriel + <b>nos / os / se</b> (nos escribimos, os queréis, se quieren).<br>2. Émotions : pronom + verbe (me enfado, te aburres, se alegra de…).",
   "examples": [
    {
     "es": "Mis abuelos se quieren mucho.",
     "fr": "Mes grands-parents s'aiment beaucoup.",
     "note": "réciproque : l'un l'autre"
    },
    {
     "es": "Ana y yo nos escribimos todos los días.",
     "fr": "Ana et moi, nous nous écrivons tous les jours."
    },
    {
     "es": "Mis primos se ven en verano.",
     "fr": "Mes cousins se voient en été."
    },
    {
     "es": "Mi hermano se enfada por cualquier tontería.",
     "fr": "Mon frère se fâche pour n'importe quelle bêtise.",
     "note": "émotion : enfadarse"
    },
    {
     "es": "Mi hermana se alegra de tu visita.",
     "fr": "Ma sœur se réjouit de ta visite.",
     "note": "alegrarse de"
    },
    {
     "es": "Los niños se aburren en el coche.",
     "fr": "Les enfants s'ennuient dans la voiture."
    }
   ],
   "pitfalls": [
    {
     "wrong": "Mis padres quieren mucho.",
     "right": "Mis padres se quieren mucho.",
     "why": "Sans <b>se</b>, la phrase est incomplète ; le pronom donne le sens « l'un l'autre »."
    },
    {
     "wrong": "Yo enfado con mi hermano.",
     "right": "Me enfado con mi hermano.",
     "why": "Se fâcher = <b>enfadarse</b> : le pronom est obligatoire."
    },
    {
     "wrong": "Nosotros se ayudamos.",
     "right": "Nosotros nos ayudamos.",
     "why": "Le pronom suit la personne : nosotros → nos."
    }
   ],
   "exercises": [
    {
     "type": "mcq",
     "q": "« Mes parents s'aiment » =",
     "opts": [
      "Mis padres quieren",
      "Mis padres se quieren",
      "Mis padres me quieren"
     ],
     "correct": 1,
     "why": "Réciproque : <b>se</b> + quieren. Avec « me », ils m'aiment."
    },
    {
     "type": "fill",
     "text": "Ana y yo ___ ___ (escribirse) mensajes todos los días.",
     "answers": [
      [
       "nos"
      ],
      [
       "escribimos"
      ]
     ],
     "why": "nosotros → <b>nos</b> + escribimos."
    },
    {
     "type": "fill",
     "text": "Mis primos ___ ___ (verse) en verano.",
     "answers": [
      [
       "se"
      ],
      [
       "ven"
      ]
     ],
     "why": "ellos → <b>se</b> + ven."
    },
    {
     "type": "mcq",
     "q": "Que veut dire « Luis y Marta se ayudan » ?",
     "opts": [
      "Luis aide Marta seulement",
      "Marta aide Luis seulement",
      "Ils s'aident l'un l'autre"
     ],
     "correct": 2,
     "why": "Pronom pluriel = <b>réciproque</b>."
    },
    {
     "type": "speak",
     "es": "Me alegro de verte después de tanto tiempo.",
     "fr": "Je suis content de te voir après si longtemps."
    },
    {
     "type": "fill",
     "text": "Tú ___ ___ (enfadarse) muy rápido con tus amigos.",
     "answers": [
      [
       "te"
      ],
      [
       "enfadas"
      ]
     ],
     "why": "tú → <b>te</b> + enfadas."
    },
    {
     "type": "mcq",
     "q": "« Vous vous aimez » (vosotros, deux amis) =",
     "opts": [
      "Os queréis",
      "Te quieres",
      "Se queréis"
     ],
     "correct": 0,
     "why": "vosotros → <b>os</b> + queréis."
    },
    {
     "type": "fill",
     "text": "Mis hermanos ___ ___ (aburrirse) los domingos.",
     "answers": [
      [
       "se"
      ],
      [
       "aburren"
      ]
     ],
     "why": "ellos → <b>se</b> + aburren."
    },
    {
     "type": "mcq",
     "q": "« Je m'ennuie » =",
     "opts": [
      "Aburro",
      "Me aburre",
      "Me aburro"
     ],
     "correct": 2,
     "why": "Je m'ennuie = <b>aburrirse</b> : me aburro."
    },
    {
     "type": "fill",
     "text": "Nosotros ___ ___ (ayudarse) con los deberes.",
     "answers": [
      [
       "nos"
      ],
      [
       "ayudamos"
      ]
     ],
     "why": "nosotros → <b>nos</b> + ayudamos."
    },
    {
     "type": "mcq",
     "q": "Laquelle de ces phrases est réciproque ?",
     "opts": [
      "Pedro se ducha",
      "Pedro y Ana se abrazan",
      "Pedro se levanta"
     ],
     "correct": 1,
     "why": "Deux personnes, chacune agit sur l'autre."
    },
    {
     "type": "fill",
     "text": "Mi madre ___ ___ (preocuparse) cuando llego tarde.",
     "answers": [
      [
       "se"
      ],
      [
       "preocupa"
      ]
     ],
     "why": "ella → <b>se</b> + preocupa."
    },
    {
     "type": "speak",
     "es": "Mis amigos y yo nos vemos todos los sábados.",
     "fr": "Mes amis et moi, nous nous voyons tous les samedis."
    }
   ]
  },
  {
   "id": "pronominaux-8",
   "reg": "formal",
   "title": "Mises en situation : hôtel, médecin, bureau, entretien · Formel (usted)",
   "why": "Tout ensemble, dans quatre lieux où l'on vouvoie : l'hôtel (quedarse, instalarse), le cabinet médical (sentirse, quitarse), le bureau (reunirse) et l'entretien (presentarse, dedicarse).",
   "rule": "1. Pronom selon la personne : usted et ustedes → <b>se</b>.<br>2. Place : devant le verbe conjugué ; collé à l'infinitif, au gérondif et à l'impératif affirmatif ; devant <b>no</b> + impératif négatif.<br>3. Corps et vêtements : l'article, jamais le possessif.",
   "examples": [
    {
     "es": "¿Se queda usted dos noches o tres?",
     "fr": "Restez-vous deux nuits ou trois ?",
     "note": "hôtel"
    },
    {
     "es": "¿Cómo se siente hoy, señor Prado?",
     "fr": "Comment vous sentez-vous aujourd'hui, monsieur Prado ?",
     "note": "médecin"
    },
    {
     "es": "Quítese la camisa y túmbese en la camilla.",
     "fr": "Enlevez votre chemise et allongez-vous sur la table d'examen.",
     "note": "médecin : article la"
    },
    {
     "es": "El comité se reúne todos los lunes.",
     "fr": "Le comité se réunit tous les lundis.",
     "note": "bureau"
    },
    {
     "es": "Me llamo Elena Mora y me dedico a la contabilidad.",
     "fr": "Je m'appelle Elena Mora et je me consacre à la comptabilité.",
     "note": "entretien"
    }
   ],
   "pitfalls": [
    {
     "wrong": "Quítese su chaqueta.",
     "right": "Quítese la chaqueta.",
     "why": "Le pronom indique déjà de qui est la veste : article la."
    },
    {
     "wrong": "Estamos reuniendo con el director.",
     "right": "Estamos reuniéndonos con el director.",
     "why": "Il manque le pronom nos, collé au gérondif avec accent."
    },
    {
     "wrong": "¿Cómo te sientes, señor?",
     "right": "¿Cómo se siente, señor?",
     "why": "On vouvoie : usted → se siente."
    }
   ],
   "exercises": [
    {
     "type": "mcq",
     "q": "À l'hôtel : « Combien de nuits restez-vous ? »",
     "opts": [
      "¿Cuántas noches se queda usted?",
      "¿Cuántas noches te quedas?",
      "¿Cuántas noches queda usted?"
     ],
     "correct": 0,
     "why": "usted → <b>se</b> + queda ; sans pronom, ce serait un autre sens."
    },
    {
     "type": "fill",
     "text": "Doctor, ___ ___ (sentirse, yo) un poco mareado hoy.",
     "answers": [
      [
       "me"
      ],
      [
       "siento"
      ]
     ],
     "why": "yo → <b>me</b> + siento (e → ie)."
    },
    {
     "type": "fill",
     "text": "Señor, ___ (quitarse, usted) la camisa, por favor.",
     "answers": [
      [
       "Quítese",
       "quítese"
      ]
     ],
     "why": "usted : quite + se, accent sur quítese."
    },
    {
     "type": "mcq",
     "q": "Au bureau : « Nous nous réunissons à dix heures »",
     "opts": [
      "Se reunimos a las diez",
      "Nos reunimos a las diez",
      "Nos reúnimos a las diez"
     ],
     "correct": 1,
     "why": "nosotros → <b>nos</b> + reunimos (sans accent)."
    },
    {
     "type": "speak",
     "es": "Buenos días, me llamo Elena Mora y tengo una cita.",
     "fr": "Bonjour, je m'appelle Elena Mora et j'ai un rendez-vous."
    },
    {
     "type": "fill",
     "text": "Señores, ¿cuánto tiempo ___ ___ (quedarse, ustedes) en la ciudad?",
     "answers": [
      [
       "se"
      ],
      [
       "quedan"
      ]
     ],
     "why": "ustedes → <b>se</b> + quedan."
    },
    {
     "type": "mcq",
     "q": "Chez le médecin, quelle phrase est correcte ?",
     "opts": [
      "Se quite la camisa, por favor",
      "Quítese la camisa, por favor",
      "Quítate la camisa, por favor"
     ],
     "correct": 1,
     "why": "Affirmatif usted : pronom collé, avec accent."
    },
    {
     "type": "fill",
     "text": "En la entrevista: «Yo ___ ___ (dedicarse) a la contabilidad.»",
     "answers": [
      [
       "me"
      ],
      [
       "dedico"
      ]
     ],
     "why": "yo → <b>me</b> + dedico."
    },
    {
     "type": "mcq",
     "q": "« Nous sommes en train de nous préparer » (nosotros) =",
     "opts": [
      "Estamos preparando nos",
      "Nos estamos preparandonos",
      "Nos estamos preparando"
     ],
     "correct": 2,
     "why": "Pronom devant le groupe : nos estamos preparando."
    },
    {
     "type": "fill",
     "text": "Doctora, ¿puedo ___ (acostarse, yo) aquí un momento?",
     "answers": [
      [
       "acostarme"
      ]
     ],
     "why": "yo → me, collé à l'infinitif."
    },
    {
     "type": "mcq",
     "q": "À un couple : « Installez-vous, messieurs-dames »",
     "opts": [
      "Instálese, señores",
      "Instálense, señores",
      "Instalen se, señores"
     ],
     "correct": 1,
     "why": "ustedes : instale + n + se → <b>instálense</b>."
    },
    {
     "type": "fill",
     "text": "Los candidatos ___ ___ (presentarse) en recepción a las nueve.",
     "answers": [
      [
       "se"
      ],
      [
       "presentan"
      ]
     ],
     "why": "ellos → <b>se</b> + presentan."
    },
    {
     "type": "speak",
     "es": "¿A qué hora se reúne el equipo con la directora?",
     "fr": "À quelle heure l'équipe se réunit-elle avec la directrice ?"
    }
   ]
  }
 ]
};
