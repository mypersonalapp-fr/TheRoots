// The Roots — ESPAGNOL : chapitre « Les blocages du francophone » (X1 à X8, leçons 301 à 308).
// Fichier de DONNÉES chargé par lessons.html (mode ?lang=es). Mêmes champs que les leçons anglaises
// (les champs « en » contiennent ici la langue cible, l'espagnol) + DRILLS (entraînement intensif)
// et ANNOTATED (texte légendé mot par mot). Sources : .staging/es/lesson-es-30x.js.
window.LESSONS_ES = window.LESSONS_ES || {};
var LESSONS_ES = window.LESSONS_ES;
// X1 — Ser ou Estar ? (le double « être ») — blocage du francophone n°1 — s'appuie sur l'A1 (présent, tener, hay) et intègre le bloc 1 d'Ashley (ex. 1-8), l'ex. 38 et son texte T4
LESSONS_ES[301] = {
  code: "X1", level: "A1",
  VOCAB: [
    {block:"Les deux verbes « être »", en:"ser", ipa:"/seɾ/", fr:"être (ce que tu ES : identité, nature)", note:"Le « être » de la carte d'identité : nom, origine, métier, caractère, matière, heure. Irrégulier : soy, eres, es, somos, sois, son."},
    {block:"Les deux verbes « être »", en:"estar", ipa:"/esˈtaɾ/", fr:"être (comment / où tu es en ce moment)", note:"Pense à « état » et à « station » : où tu te trouves, comment tu te sens. Formes : estoy, estás, está, estamos, estáis, están."},
    {block:"Les deux verbes « être »", en:"soy · eres · es", ipa:"/soi̯ · ˈeɾes · es/", fr:"je suis · tu es · il/elle est (ser)", note:"« Soy Ashley, soy francesa. » — « es » sert aussi pour usted (vous de politesse)."},
    {block:"Les deux verbes « être »", en:"somos · sois · son", ipa:"/ˈsomos · soi̯s · son/", fr:"nous sommes · vous êtes · ils/elles sont (ser)", note:"« sois » = vosotros (Espagne). En Amérique latine on dit « ustedes son » pour « vous êtes »."},
    {block:"Les deux verbes « être »", en:"estoy · estás · está", ipa:"/esˈtoi̯ · esˈtas · esˈta/", fr:"je suis · tu es · il/elle est (estar)", note:"L'accent tonique tombe à la fin : es-TOY, es-TÁS, es-TÁ. « esta » sans accent = « cette » !"},
    {block:"Les deux verbes « être »", en:"estamos · estáis · están", ipa:"/esˈtamos · esˈtai̯s · esˈtan/", fr:"nous sommes · vous êtes · ils/elles sont (estar)", note:"« ¿Dónde estáis? » = où êtes-vous ? (vosotros). Amérique latine : « ¿Dónde están ustedes? »."},
    {block:"Avec SER : ce que tu es", en:"francés, francesa", ipa:"/fɾanˈθes · fɾanˈθesa/", fr:"français, française", note:"Nationalité = identité → SER : « Soy francesa ». Pas de majuscule aux nationalités en espagnol."},
    {block:"Avec SER : ce que tu es", en:"profesor, profesora", ipa:"/pɾofeˈsoɾ · pɾofeˈsoɾa/", fr:"professeur (homme, femme)", note:"Métier → SER, et sans article : « Mi madre es profesora » (comme en français : elle est prof)."},
    {block:"Avec SER : ce que tu es", en:"simpático, simpática", ipa:"/simˈpatiko · simˈpatika/", fr:"sympathique, gentil(le)", note:"Caractère → SER : « Vosotros sois muy simpáticos »."},
    {block:"Avec SER : ce que tu es", en:"de madera", ipa:"/de maˈðeɾa/", fr:"en bois", note:"Matière → SER + de : « La mesa es de madera ». Aussi « es de plástico, es de oro »."},
    {block:"Avec SER : ce que tu es", en:"Es la una · Son las dos", ipa:"/es la ˈuna · son laz ðos/", fr:"Il est une heure · Il est deux heures", note:"L'heure → toujours SER. Singulier pour une heure (es la una), pluriel ensuite (son las dos, son las tres…)."},
    {block:"Avec ESTAR : comment et où tu es", en:"cansado, cansada", ipa:"/kanˈsaðo · kanˈsaða/", fr:"fatigué(e)", note:"État du moment → ESTAR : « Hoy estoy muy cansada »."},
    {block:"Avec ESTAR : comment et où tu es", en:"contento, contenta", ipa:"/konˈtento · konˈtenta/", fr:"content(e)", note:"Émotion → ESTAR : « Estamos muy contentos »."},
    {block:"Avec ESTAR : comment et où tu es", en:"enfermo, enferma", ipa:"/emˈfeɾmo · emˈfeɾma/", fr:"malade", note:"État de santé → ESTAR : « Mi hijo está enfermo »."},
    {block:"Avec ESTAR : comment et où tu es", en:"en casa", ipa:"/eŋ ˈkasa/", fr:"à la maison", note:"Lieu → ESTAR : « Estoy en casa ». Jamais « soy en casa »."},
    {block:"Avec ESTAR : comment et où tu es", en:"abierto, cerrado", ipa:"/aˈβjeɾto · θeˈraðo/", fr:"ouvert, fermé", note:"Résultat d'une action → ESTAR : « La tienda está cerrada »."},
    {block:"Avec ESTAR : comment et où tu es", en:"embarazada", ipa:"/embaɾaˈθaða/", fr:"enceinte (faux ami !)", note:"« Estoy embarazada » = je suis ENCEINTE. « Je suis embarrassée » = « Estoy avergonzada »."},
    {block:"Même adjectif, autre sens", en:"ser listo / estar listo", ipa:"/seɾ ˈlisto · esˈtaɾ ˈlisto/", fr:"être intelligent / être prêt", note:"« Es muy lista » = elle est très futée. « ¿Estás lista? » = tu es prête ?"},
    {block:"Même adjectif, autre sens", en:"ser aburrido / estar aburrido", ipa:"/seɾ aβuˈriðo · esˈtaɾ aβuˈriðo/", fr:"être ennuyeux / s'ennuyer", note:"« La clase es aburrida » = le cours est ennuyeux. « Estoy aburrida » = je m'ennuie."},
    {block:"Même adjectif, autre sens", en:"ser malo / estar malo", ipa:"/seɾ ˈmalo · esˈtaɾ ˈmalo/", fr:"être méchant, mauvais / être malade", note:"« Es un perro malo » = un chien méchant. « Estoy malo » = je suis malade (familier)."},
    {block:"Même adjectif, autre sens", en:"ser rico / estar rico", ipa:"/seɾ ˈriko · esˈtaɾ ˈriko/", fr:"être riche / être délicieux", note:"« Es muy rico » = il est très riche. « ¡Está muy rico! » = c'est délicieux (en goûtant)."},
    {block:"Même adjectif, autre sens", en:"ser verde / estar verde", ipa:"/seɾ ˈβeɾðe · esˈtaɾ ˈβeɾðe/", fr:"être vert / ne pas être mûr", note:"« La manzana es verde » = c'est une pomme verte. « El plátano está verde » = la banane n'est pas mûre."},
    {block:"Verbes clés (X1)", en:"hay", ipa:"/ai̯/", fr:"il y a", note:"Pour dire qu'une chose EXISTE : « Hay un banco cerca ». Pour dire OÙ est une chose connue : « El banco está cerca »."},
    {block:"Verbes clés (X1)", en:"estar muerto", ipa:"/esˈtaɾ ˈmweɾto/", fr:"être mort", note:"Exception célèbre : c'est définitif, mais l'espagnol le voit comme un état (le résultat de mourir) → ESTAR."},
    {block:"Verbes clés (X1)", en:"estar de vacaciones", ipa:"/esˈtaɾ ðe βakaˈθjones/", fr:"être en vacances", note:"Situation temporaire → ESTAR. Même logique : « estar de viaje » (être en voyage)."},
    {block:"Verbes clés (X1)", en:"estar de acuerdo", ipa:"/esˈtaɾ ðe aˈkweɾðo/", fr:"être d'accord", note:"« ¿Estás de acuerdo? — Sí, estoy de acuerdo. » On peut répondre juste « ¡De acuerdo! » (d'accord)."}
  ],
  MEM_WORDS: [0,1,16,17,18,22], // ser, estar, embarazada, listo, aburrido, hay

  MINI_CHECKS: [
    { q:"« Je suis française. »", opts:["Estoy francesa.","Soy francesa."], correct:1, fb:"La nationalité, c'est ton identité : elle ne change pas d'un jour à l'autre → SER : « Soy francesa »." },
    { q:"« Je suis à la maison. »", opts:["Estoy en casa.","Soy en casa.","Hay en casa."], correct:0, fb:"Un lieu → ESTAR. Test : « je me TROUVE à la maison » marche → estar." },
    { q:"« Tu es prête ? » (on part !)", opts:["¿Eres lista?","¿Estás lista?"], correct:1, fb:"« Estar listo » = être prêt. « Ser listo » = être intelligent : « ¿Eres lista? » voudrait dire « tu es futée ? »." },
    { q:"« Le concert a lieu sur la place. »", opts:["El concierto es en la plaza.","El concierto está en la plaza."], correct:0, fb:"Un ÉVÉNEMENT qui a lieu quelque part → SER. C'est l'exception à connaître : on peut remplacer « es » par « tiene lugar » (a lieu)." }
  ],

  ROUNDS: [
    { bank:["llaves","¿","las","Dónde","?","están"], answer:"¿ dónde están las llaves ?", display:"¿Dónde están las llaves?", fr:"Où sont les clés ?" },
    { bank:["Madrid","Soy","en","estoy","y","francesa","."], answer:"soy francesa y estoy en madrid .", display:"Soy francesa y estoy en Madrid.", fr:"Je suis française et je suis à Madrid." },
    { bank:["de","profesora","Mi","matemáticas","es","madre","."], answer:"mi madre es profesora de matemáticas .", display:"Mi madre es profesora de matemáticas.", fr:"Ma mère est professeure de mathématiques." },
    { bank:["cansada","muy","Hoy","estoy","."], answer:"hoy estoy muy cansada .", display:"Hoy estoy muy cansada.", fr:"Aujourd'hui, je suis très fatiguée." },
    { bank:["fría","sopa","La","está","."], answer:"la sopa está fría .", display:"La sopa está fría.", fr:"La soupe est froide." },
    { bank:["la","El","en","es","plaza","concierto","mayor","."], answer:"el concierto es en la plaza mayor .", display:"El concierto es en la plaza mayor.", fr:"Le concert a lieu sur la grand-place." },
    { bank:["listo","hermano","muy","Mi","es","."], answer:"mi hermano es muy listo .", display:"Mi hermano es muy listo.", fr:"Mon frère est très intelligent." },
    { bank:["lista","?","¿","Estás"], answer:"¿ estás lista ?", display:"¿Estás lista?", fr:"Tu es prête ?" },
    { bank:["media","dos","las","Son","y","."], answer:"son las dos y media .", display:"Son las dos y media.", fr:"Il est deux heures et demie." },
    { bank:["de","la","en","es","cocina","madera","La","y","mesa","está","."], answer:"la mesa es de madera y está en la cocina .", display:"La mesa es de madera y está en la cocina.", fr:"La table est en bois et elle est dans la cuisine." }
  ],

  QUIZ: [
    { cat:"ecrit", q:"Yo ___ francesa.", opts:["soy","estoy","es"], correct:0, why:"Nationalité = identité → SER, 1re personne : « soy »." },
    { cat:"ecrit", q:"Madrid ___ en España.", opts:["es","está","hay"], correct:1, why:"Situer un lieu (où il se trouve) → ESTAR : « Madrid está en España »." },
    { cat:"ecrit", q:"Mi hijo ___ enfermo, hoy no va al colegio.", opts:["es","son","está"], correct:2, why:"Être malade est un état passager → ESTAR : « está enfermo »." },
    { cat:"ecrit", q:"« Il est très intelligent » se dit :", opts:["Está muy listo.","Es muy listo.","Es muy lista."], correct:1, why:"« Ser listo » = être intelligent (une qualité). « Estar listo » = être prêt. Et « lista » est féminin." },
    { cat:"ecrit", q:"¿Qué hora es? — ___ las cinco.", opts:["Están","Es","Son"], correct:2, why:"L'heure → SER, au pluriel à partir de deux heures : « Son las cinco »." },
    { cat:"ecrit", q:"La boda de mi prima ___ en una iglesia de Toledo.", opts:["es","está","hay"], correct:0, why:"Un événement (un mariage, une fête, un concert) qui A LIEU quelque part → SER." },
    { cat:"ecrit", q:"« Je m'ennuie » se dit :", opts:["Soy aburrida.","Estoy aburrida.","Tengo aburrida."], correct:1, why:"« Estar aburrido » = s'ennuyer (état du moment). « Soy aburrida » = je suis ennuyeuse !" },
    { cat:"ecrit", q:"Quelle phrase est correcte ?", opts:["Las plantas están muertas.","Las plantas son muertas.","Las plantas hay muertas."], correct:0, why:"Exception à connaître : « estar muerto » (vu comme un état, le résultat de mourir)." },
    { cat:"ecrit", q:"« Je suis enceinte » se dit :", opts:["Soy embarazada.","Estoy avergonzada.","Estoy embarazada."], correct:2, why:"« Embarazada » = enceinte (faux ami), avec ESTAR. « Avergonzada » = embarrassée, honteuse." },
    { cat:"ecrit", q:"___ un restaurante muy bueno en mi calle.", opts:["Está","Hay","Es"], correct:1, why:"On annonce qu'une chose EXISTE (un restaurant, pas encore connu) → « hay ». Pour une chose connue : « El restaurante está en mi calle »." },
    { cat:"oral", audio:"Estoy muy cansada, pero estoy contenta.", q:"Écoute : comment se sent la personne ?", opts:["Malade et triste","Fatiguée mais contente","En forme et contente","Fatiguée et triste"], correct:1, why:"« cansada » = fatiguée, « contenta » = contente — deux états du moment, donc ESTAR." },
    { cat:"oral", audio:"Mis padres son de Sevilla, pero ahora están en Barcelona.", q:"Écoute : où sont les parents en ce moment ?", opts:["À Séville","À Madrid","À Barcelone","À Valence"], correct:2, why:"« son de Sevilla » = ils sont originaires de Séville (SER) ; « ahora están en Barcelona » = en ce moment ils sont à Barcelone (ESTAR)." },
    { cat:"oral", audio:"Son las ocho. ¿Estás lista?", q:"Écoute : que demande la personne ?", opts:["Si l'autre est intelligente","Quelle heure il est","Si l'autre est fatiguée","Si l'autre est prête"], correct:3, why:"« ¿Estás lista? » = tu es prête ? (estar listo). Elle donne l'heure, elle ne la demande pas." },
    { cat:"oral", audio:"Esta película es muy aburrida.", q:"Écoute : que dit la personne ?", opts:["Le film est très ennuyeux","Elle s'ennuie seule à la maison","Le film est très bien","Le film est très long"], correct:0, why:"« Es aburrida » (SER) = le film EST ennuyeux, c'est sa nature. « Estoy aburrida » voudrait dire « je m'ennuie »." },
    { cat:"comprehension", passage:"“Hola, soy Marta. Soy profesora y soy de Bilbao. Ahora estoy en Granada porque estoy de vacaciones.”", q:"D'après le texte, pourquoi Marta est-elle à Grenade ?", opts:["Elle y habite","Elle y travaille","Elle est en vacances","Elle y est née"], correct:2, why:"« estoy de vacaciones » = je suis en vacances. Elle est de Bilbao (« soy de Bilbao »)." },
    { cat:"comprehension", passage:"“— ¿Dónde es el concierto? — Es en el parque, a las nueve. — ¡Perfecto! Pero el parque está un poco lejos de mi casa.”", q:"D'après le dialogue, où a lieu le concert ?", opts:["Au parc","Au théâtre","Chez la personne","Près de la gare"], correct:0, why:"« Es en el parque » : un événement qui a lieu → SER. Le parc, lui, « está lejos » (lieu → ESTAR)." },
    { cat:"comprehension", passage:"“(rappel) Tengo treinta años, tengo dos hijos y tengo un perro. Mi perro tiene cinco años.”", q:"D'après le texte, quel âge a le chien ?", opts:["Deux ans","Cinq ans","Trente ans","Trois ans"], correct:1, why:"« Mi perro tiene cinco años ». Rappel A1 : l'âge se dit avec TENER (avoir), jamais avec ser." },
    { cat:"comprehension", passage:"“(rappel) Trabajo en un hotel de lunes a viernes. Los sábados como con mi familia y los domingos descanso.”", q:"D'après le texte, que fait la personne le dimanche ?", opts:["Elle travaille","Elle mange en famille","Elle se repose","Elle fait du sport"], correct:2, why:"« los domingos descanso » = le dimanche je me repose. Rappel A1 : présent en -o à la 1re personne (trabajo, como, descanso)." }
  ],

  PRON_VERBS: [
    {en:"Estoy cansada, pero estoy contenta.", fr:"Je suis fatiguée, mais je suis contente. (accent tonique : es-TOY)"},
    {en:"Soy francesa y estoy en Zaragoza.", fr:"Je suis française et je suis à Saragosse. (z = « th » anglais en Espagne)"},
    {en:"La cerveza está muy fría.", fr:"La bière est très froide. (ce/za = « th », r simple)"},
    {en:"Mi perro es muy listo.", fr:"Mon chien est très intelligent. (rr roulé)"},
    {en:"¿Dónde está la llave?", fr:"Où est la clé ? (ll ≈ « y » de « yaourt »)"},
    {en:"Juan es joven y trabaja en Jerez.", fr:"Juan est jeune et travaille à Jerez. (jota raclée au fond de la gorge)"},
    {en:"Mi vecina está embarazada.", fr:"Ma voisine est enceinte. (v = b, z = « th »)"},
    {en:"El niño está aburrido.", fr:"L'enfant s'ennuie. (ñ = « gn », rr roulé)"}
  ],

  READING: [
    "Me llamo Sofía, soy francesa y soy enfermera.",
    "Ahora estoy en Valencia, en casa de mi amiga Carmen.",
    "Carmen es española, es muy simpática y es profesora de inglés.",
    "Su piso es pequeño, pero es muy bonito y está cerca de la playa.",
    "Hoy es sábado y son las diez de la mañana.",
    "Carmen está en la cocina y el café ya está listo.",
    "Yo estoy un poco cansada, pero estoy muy contenta.",
    "Esta noche hay un concierto de flamenco: es en la plaza del Ayuntamiento.",
    "Las entradas están en mi bolso y yo ya estoy lista.",
    "—Carmen, ¿estás lista tú también? ¡Es tarde!"
  ],
  GLOSS: [
    {en:"el piso", fr:"l'appartement (Espagne) — en Amérique latine : el departamento"},
    {en:"cerca de", fr:"près de"},
    {en:"ya", fr:"déjà"},
    {en:"el Ayuntamiento", fr:"la mairie"},
    {en:"las entradas", fr:"les billets, les places (concert, cinéma)"},
    {en:"el bolso", fr:"le sac à main"}
  ],

  GRAMMAR1: {
    heading: "SER = ce que tu ES · ESTAR = comment et où tu es en ce moment",
    lede: "En français, un seul verbe « être ». En espagnol, deux : SER pour la carte d'identité (ce qui te définit), ESTAR pour le selfie du moment (où tu te trouves, comment tu te sens).",
    conj: [["yo →","soy / estoy","Soy Ashley. Estoy en casa."],["tú →","eres / estás","Eres muy simpática. ¿Estás bien?"],["él, ella, usted →","es / está","Es médico. Está en el hospital."],["nosotros →","somos / estamos","Somos franceses. Estamos de vacaciones."],["vosotros →","sois / estáis","Sois amigos. Estáis cansados."],["ellos, ustedes →","son / están","Son las tres. Están en la oficina."]],
    ruleHtml: "📖 <b>SER</b> répond à « qui / quoi / comment est-il par nature ? » — pense <b>DOCTOR</b> : <b>D</b>escription (es alta), <b>O</b>ccupation = métier (es profesora), <b>C</b>aractère (es simpático), <b>T</b>emps = heure et date (son las dos, hoy es lunes), <b>O</b>rigine et matière (es de Lyon, es de madera), <b>R</b>elation (es mi amiga). <b>ESTAR</b> répond à « où ? » et « dans quel état ? » — pense <b>PLACE</b> : <b>P</b>osition, <b>L</b>ieu (está en Madrid), <b>A</b>ction en cours (está comiendo), <b>C</b>ondition (está cerrado, está enfermo), <b>É</b>motion (está contenta).",
    dialogueLede: "Au téléphone, une amie t'appelle un samedi matin :",
    dialogue: [
      {who:"them", en:"¡Hola! ¿Cómo estás? ¿Dónde estás?", fr:"Salut ! Comment tu vas ? Tu es où ?"},
      {who:"you", en:"Estoy en casa, estoy un poco cansada. ¡Pero hoy es sábado!", fr:"Je suis à la maison, je suis un peu fatiguée. Mais aujourd'hui, c'est samedi !"}
    ],
    whyLabel: "Le truc du francophone : « se trouver » et « se sentir »",
    whyText: "Avant de choisir, essaie de remplacer « être » dans ta phrase française. Si « <b>se trouver</b> » marche (je suis à Paris → je me trouve à Paris) ou si « <b>se sentir</b> / être dans un état » marche (je suis fatiguée → je me sens fatiguée), c'est <b>ESTAR</b> — facile à retenir : estar, ça se trouve et ça se sent. Sinon (je suis française, je suis prof, il est deux heures), c'est <b>SER</b>. Et « comment tu vas ? » se dit <b>¿Cómo estás?</b> — alors que <b>¿Cómo eres?</b> demande « comment tu es, toi, physiquement ou de caractère ? »."
  },
  GRAMMAR2: {
    heading: "Même adjectif, autre sens (listo, aburrido, malo…) et les exceptions utiles",
    dialogueLede: "Dans la cuisine, avant de partir au restaurant :",
    dialogue: [
      {who:"them", en:"Tu hijo es muy listo, ¿no? ¡Ya sabe leer!", fr:"Ton fils est très intelligent, non ? Il sait déjà lire !"},
      {who:"you", en:"Sí, es muy listo… ¡pero nunca está listo a la hora!", fr:"Oui, il est très malin… mais il n'est jamais prêt à l'heure !"}
    ],
    ruleHtml: "💭 Certains adjectifs changent de sens selon le verbe : <b>ser listo</b> = être intelligent / <b>estar listo</b> = être prêt ; <b>ser aburrido</b> = être ennuyeux / <b>estar aburrido</b> = s'ennuyer ; <b>ser malo</b> = être méchant, mauvais / <b>estar malo</b> = être malade ; <b>ser rico</b> = être riche / <b>estar rico</b> = être délicieux ; <b>ser verde</b> = être vert / <b>estar verde</b> = ne pas être mûr. La logique est toujours la même : SER = la nature, ESTAR = l'état du moment. Trois exceptions utiles : <b>estar muerto</b> (être mort : l'espagnol le voit comme un état, le résultat de mourir), <b>ser</b> pour un <b>événement qui a lieu</b> (« El concierto es en la plaza » = il a lieu sur la place) et <b>hay</b> pour annoncer qu'une chose existe (« Hay un banco cerca »).",
    whyLabel: "« Hay » ou « está » ?",
    whyText: "Les deux traduisent parfois « il y a / se trouve ». Règle simple : <b>hay + un, una, unos, un nombre ou rien</b> pour dire qu'une chose EXISTE (« Hay un supermercado en mi calle », « Hay dos bancos », « Hay leche »). <b>está / están + el, la, los, las ou un nom propre</b> pour dire OÙ se trouve une chose déjà connue (« El supermercado está al lado del banco »). Et pour les événements, rappelle-toi : si tu peux dire « a lieu », c'est <b>SER</b> : « La fiesta es en casa de Marta »."
  },

  REVIEW: [
    { q:"« J'ai trente ans. »", opts:["Soy treinta años.","Tengo treinta años."], correct:1, fb:"L'âge se dit avec TENER : « Tengo treinta años ». (rappel A1)" },
    { q:"« Il y a un bar au coin de la rue. »", opts:["Hay un bar en la esquina.","Es un bar en la esquina."], correct:0, fb:"« Hay » = il y a (invariable). (rappel A1)" },
    { q:"« J'ai faim. »", opts:["Estoy hambre.","Tengo hambre."], correct:1, fb:"Faim, soif, froid, chaud, sommeil : TENER + nom (tengo hambre, tengo sed, tengo frío). (rappel A1)" },
    { q:"Yo ___ en París.", opts:["vivo","vive"], correct:0, fb:"Au présent, la 1re personne se termine en -o : « vivo ». « vive » = il/elle vit. (rappel A1)" },
    { q:"Nosotros ___ español en clase.", opts:["hablan","hablamos"], correct:1, fb:"Nosotros → -amos pour les verbes en -ar : « hablamos ». (rappel A1)" }
  ],

  CULTURE_NOTE: {
    icon: "👋",
    title: "Note culturelle — « ¿Qué tal? », « ¿Cómo estás? » et… « ¿Cómo eres? »",
    html: "En Espagne, on salue très souvent avec <b>¿Qué tal?</b> (ça va ?) ou <b>¿Cómo estás?</b> — avec ESTAR, parce qu'on demande comment tu vas <b>aujourd'hui</b>. La réponse attendue est courte : « <b>Bien, ¿y tú?</b> ». Si tu demandes <b>¿Cómo eres?</b>, ton interlocuteur va te décrire son physique ou son caractère ! Au travail ou avec une personne âgée, on vouvoie avec <b>usted</b> : « ¿Cómo está usted? ». En Amérique latine, <b>usted</b> est beaucoup plus fréquent qu'en Espagne, et on entend des salutations locales comme <b>¿Qué onda?</b> (Mexique) ou <b>¿Cómo andás?</b> (Argentine)."
  },

  NEXT_PREVIEW: "X2 (Les verbes pronominaux) : pourquoi on dit « me levanto » mais « te levantas » et « se levanta », où placer le petit pronom (voy a levantarme, estoy duchándome), et les verbes du quotidien qui changent de sens avec « se » (ir / irse, quedar / quedarse).",

  META: { vocabTitle: "Les deux « être » : ser et estar (X1)", lectureTitle: "Un samedi à Valence", bilanTitle: "Bravo, tu sais maintenant choisir entre ser et estar sans hésiter !", pronLabel: "Ser et estar en phrases courtes (jota, rr, z, ll)", todayLede: "choisir entre SER (ce que tu es : identité, origine, métier, caractère, heure) et ESTAR (où tu es, comment tu te sens), et éviter les pièges (listo, aburrido, embarazada, hay) — s'appuie sur l'A1 (présent, tener)" },

  DRILLS: [
    { type:"fill", text:"Hoy yo ___ muy cansado por el viaje.", answers:["estoy"], why:"Fatigué aujourd'hui = état passager → ESTAR : « estoy ». (exercice d'Ashley)" },
    { type:"fill", text:"Mi madre ___ profesora de matemáticas.", answers:["es"], why:"Un métier → SER : « es profesora ». (exercice d'Ashley)" },
    { type:"fill", text:"¿Dónde ___ las llaves de casa?", answers:["están"], why:"« Où se trouvent » → lieu → ESTAR, pluriel : « están ». (exercice d'Ashley)" },
    { type:"fill", text:"Barcelona ___ una ciudad muy bonita y mediterránea.", answers:["es"], why:"On décrit ce qu'est Barcelone (sa nature) → SER. Mais « Barcelona está en Cataluña » (lieu). (exercice d'Ashley)" },
    { type:"fill", text:"Juan y María ___ novios desde hace dos años.", answers:["son"], why:"Une relation (être en couple, être amis, être frères) → SER : « son novios ». (exercice d'Ashley)" },
    { type:"fill", text:"La sopa ___ fría, prefiero calentarla.", answers:["está"], why:"La soupe a refroidi : c'est son état du moment → ESTAR. (« La nieve es fría » : la neige est froide par nature → SER.) (exercice d'Ashley)" },
    { type:"fill", text:"Vosotros ___ muy simpáticos.", answers:["sois"], why:"Le caractère → SER ; vosotros → « sois ». En Amérique latine : « ustedes son ». (exercice d'Ashley)" },
    { type:"fill", text:"El concierto ___ en la plaza mayor esta noche.", answers:["es"], why:"Piège ! Un événement qui A LIEU quelque part → SER (on pourrait dire « tiene lugar »). (exercice d'Ashley)" },
    { type:"fill", text:"« Je suis enceinte » = Yo estoy ___.", answers:["embarazada"], why:"Faux ami : « embarazada » = enceinte (état → estar). « Embarrassée » = « avergonzada ». (exercice d'Ashley)" },
    { type:"fill", text:"Nosotros ___ franceses, de Lyon.", answers:["somos"], why:"Nationalité et origine → SER ; nosotros → « somos »." },
    { type:"fill", text:"¿Qué hora es? — ___ las tres.", answers:["Son","son"], why:"L'heure → SER, au pluriel à partir de deux heures : « Son las tres » (mais « Es la una »)." },
    { type:"fill", text:"Mis padres ___ de vacaciones en Italia.", answers:["están"], why:"« Estar de vacaciones » = être en vacances : situation temporaire → ESTAR." },
    { type:"fill", text:"Tú ___ muy nerviosa hoy, ¿qué pasa?", answers:["estás"], why:"Nerveuse aujourd'hui = émotion du moment → ESTAR ; tú → « estás » (avec accent !)." },
    { type:"fill", text:"La mesa ___ de madera.", answers:["es"], why:"La matière → SER + de : « es de madera »." },
    { type:"fill", text:"El museo ___ cerrado los lunes.", answers:["está"], why:"Ouvert / fermé = résultat d'une action (on a fermé) → ESTAR : « está cerrado »." },
    { type:"choice", q:"Madrid ___ en el centro de España.", opts:["es","está"], correct:1, why:"Situer une ville sur la carte = lieu → ESTAR. Test : « Madrid se trouve au centre » marche." },
    { type:"choice", q:"La fiesta ___ en casa de Marta.", opts:["es","está"], correct:0, why:"Une fête est un ÉVÉNEMENT : elle a lieu chez Marta → SER." },
    { type:"choice", q:"« Je suis fatiguée » se dit :", opts:["Soy cansada.","Estoy cansada."], correct:1, why:"Fatiguée = état passager (test : « je me sens fatiguée » marche) → ESTAR." },
    { type:"choice", q:"Quelle phrase contient une erreur ?", opts:["Estoy en la oficina.","Soy en la oficina.","Soy de París."], correct:1, why:"Un lieu → ESTAR : « Estoy en la oficina ». « Soy de París » est correct : c'est l'origine." },
    { type:"choice", q:"« Il est intelligent » (Pablo, 8 ans, lit déjà tout seul) :", opts:["Pablo está muy listo.","Pablo es muy listo."], correct:1, why:"« Ser listo » = être intelligent (qualité). « Estar listo » = être prêt." },
    { type:"choice", q:"Tu ne sais pas quoi faire, tu t'ennuies. Tu dis :", opts:["Estoy aburrida.","Soy aburrida."], correct:0, why:"« Estar aburrido » = s'ennuyer. « Soy aburrida » = je suis quelqu'un d'ennuyeux… pas très flatteur !" },
    { type:"fill", text:"Esta película ___ aburrida, me duermo.", answers:["es"], why:"Le film est ennuyeux par nature → SER. (C'est TOI qui « estás aburrida » devant le film.)" },
    { type:"choice", q:"Mi vecino tiene tres casas y un barco: ___ muy rico.", opts:["es","está"], correct:0, why:"« Ser rico » = être riche. « Estar rico » = être délicieux (« ¡La tortilla está muy rica! »)." },
    { type:"choice", q:"Le plátano n'est pas encore mûr : « El plátano ___ verde. »", opts:["es","está"], correct:1, why:"« Estar verde » = ne pas être mûr (un état qui va changer). « Ser verde » = être de couleur verte." },
    { type:"choice", q:"___ un supermercado cerca de mi casa.", opts:["Hay","Está"], correct:0, why:"On annonce qu'un supermarché EXISTE (« un ») → « hay »." },
    { type:"fill", text:"El supermercado ___ al lado del banco.", answers:["está"], why:"On situe une chose déjà connue (« el supermercado ») → ESTAR : « está »." },
    { type:"fill", text:"« Nous sommes contents. » = ___ contentos.", answers:["Estamos","estamos"], why:"Émotion → ESTAR ; nosotros → « estamos » (le pronom « nosotros » n'est pas obligatoire)." },
    { type:"fill", text:"Vosotras ___ enfermeras en el hospital.", answers:["sois"], why:"Métier → SER ; vosotras → « sois »." },
    { type:"fill", text:"— ¿Cómo ___ tu madre? — Bien, gracias, ya no está enferma.", answers:["está"], why:"On demande comment elle VA (santé, état) → ESTAR." },
    { type:"fill", text:"— ¿Cómo ___ tu madre? — Es alta, morena y muy divertida.", answers:["es"], why:"On demande comment elle EST (physique, caractère) → SER. Compare avec l'exercice précédent !" },
    { type:"fill", text:"Hoy ___ lunes y mañana es martes.", answers:["es"], why:"Le jour, la date, l'heure → SER : « Hoy es lunes »." },
    { type:"fill", text:"La ventana ___ abierta, ¡tengo frío!", answers:["está"], why:"Ouvert = résultat d'une action (quelqu'un a ouvert) → ESTAR." },
    { type:"choice", q:"Quelle phrase est correcte ?", opts:["Mi abuelo es muerto.","Mi abuelo está muerto."], correct:1, why:"Exception : « estar muerto », même si c'est définitif." },
    { type:"choice", q:"— ¿Estás de acuerdo? — Sí, ___.", opts:["soy de acuerdo","estoy de acuerdo","tengo de acuerdo"], correct:1, why:"« Estar de acuerdo » = être d'accord : expression figée avec ESTAR." }
  ],

  ANNOTATED: {
    title: "Mi mejor amiga, Lucía",
    intro: "Un texte d'Ashley, légèrement adapté. Touche chaque mot pour voir ce que c'est — et repère tous les SER, ESTAR et TENER.",
    sentences: [
      { fr: "Lucía est ma meilleure amie depuis l'école.",
        tokens: [
          { w:"Lucía", tag:"nom propre", fr:"Lucía" },
          { w:"es", tag:"verbe", info:"ser · présent · ella (elle)", fr:"est", tip:"SER : une relation (c'est mon amie) = identité" },
          { w:"mi", tag:"déterminant", info:"possessif · sing.", fr:"ma", tip:"« mi » sert pour le masculin et le féminin : mi amigo, mi amiga" },
          { w:"mejor", tag:"adjectif", info:"masc./fém. sing.", fr:"meilleure" },
          { w:"amiga", tag:"nom", info:"fém. sing.", fr:"amie" },
          { w:"desde", tag:"préposition", fr:"depuis" },
          { w:"el", tag:"article", info:"masc. sing.", fr:"le / l'" },
          { w:"colegio", tag:"nom", info:"masc. sing.", fr:"école", tip:"« el colegio » = l'école (primaire et collège)" }
        ] },
      { fr: "Elle est grande, elle a les cheveux châtains et bouclés et les yeux marron.",
        tokens: [
          { w:"Es", tag:"verbe", info:"ser · présent · ella", fr:"elle est", tip:"SER : description physique. Pas besoin de « ella » : la terminaison suffit" },
          { w:"alta", tag:"adjectif", info:"fém. sing.", fr:"grande" },
          { w:"tiene", tag:"verbe", info:"tener · présent · ella", fr:"elle a", tip:"Comme en français : « elle A les cheveux… » → tener, pas ser" },
          { w:"el pelo", tag:"nom", info:"masc. sing.", fr:"les cheveux", tip:"Singulier en espagnol : « el pelo » = la chevelure" },
          { w:"castaño", tag:"adjectif", info:"masc. sing.", fr:"châtain" },
          { w:"y", tag:"conjonction", fr:"et" },
          { w:"rizado", tag:"adjectif", info:"masc. sing.", fr:"bouclé" },
          { w:"los ojos", tag:"nom", info:"masc. plur.", fr:"les yeux" },
          { w:"marrones", tag:"adjectif", info:"masc. plur.", fr:"marron", tip:"En espagnol, « marrón » s'accorde : ojos marrones" }
        ] },
      { fr: "C'est une personne très joyeuse et travailleuse.",
        tokens: [
          { w:"Es", tag:"verbe", info:"ser · présent · ella", fr:"c'est / elle est", tip:"SER : le caractère" },
          { w:"una", tag:"article", info:"fém. sing.", fr:"une" },
          { w:"persona", tag:"nom", info:"fém. sing.", fr:"personne" },
          { w:"muy", tag:"adverbe", fr:"très" },
          { w:"alegre", tag:"adjectif", info:"masc./fém. sing.", fr:"joyeuse, gaie" },
          { w:"y", tag:"conjonction", fr:"et" },
          { w:"trabajadora", tag:"adjectif", info:"fém. sing.", fr:"travailleuse" }
        ] },
      { fr: "Elle est toujours prête à aider les autres.",
        tokens: [
          { w:"Siempre", tag:"adverbe", fr:"toujours" },
          { w:"está", tag:"verbe", info:"estar · présent · ella", fr:"elle est", tip:"ESTAR : une disposition, un état (être prête à…)" },
          { w:"dispuesta", tag:"adjectif", info:"fém. sing.", fr:"prête, disposée" },
          { w:"a", tag:"préposition", fr:"à" },
          { w:"ayudar", tag:"verbe", info:"ayudar · infinitif", fr:"aider" },
          { w:"a los demás", tag:"pronom COD", info:"masc. plur.", fr:"les autres", tip:"« a » devant une personne complément : ayudar A alguien" }
        ] },
      { fr: "Elle adore lire des romans historiques, voyager et cuisiner des desserts.",
        tokens: [
          { w:"Le", tag:"pronom COI", info:"3e pers. sing.", fr:"lui", tip:"Mot à mot : « ça lui enchante »" },
          { w:"encanta", tag:"verbe", info:"encantar · présent · 3e pers. sing.", fr:"adore (plaît beaucoup)", tip:"Fonctionne comme « gustar » : me encanta, te encanta, le encanta" },
          { w:"leer", tag:"verbe", info:"leer · infinitif", fr:"lire" },
          { w:"novelas", tag:"nom", info:"fém. plur.", fr:"romans", tip:"Faux ami : « una novela » = un roman ; une nouvelle = un cuento, una noticia" },
          { w:"históricas", tag:"adjectif", info:"fém. plur.", fr:"historiques" },
          { w:"viajar", tag:"verbe", info:"viajar · infinitif", fr:"voyager" },
          { w:"y", tag:"conjonction", fr:"et" },
          { w:"cocinar", tag:"verbe", info:"cocinar · infinitif", fr:"cuisiner" },
          { w:"postres", tag:"nom", info:"masc. plur.", fr:"desserts" }
        ] },
      { fr: "Nous habitons dans la même rue, donc nous nous voyons presque tous les jours.",
        tokens: [
          { w:"Vivimos", tag:"verbe", info:"vivir · présent · nosotros", fr:"nous habitons", tip:"« vivir » = vivre ET habiter" },
          { w:"en", tag:"préposition", fr:"dans" },
          { w:"la", tag:"article", info:"fém. sing.", fr:"la" },
          { w:"misma", tag:"adjectif", info:"fém. sing.", fr:"même" },
          { w:"calle", tag:"nom", info:"fém. sing.", fr:"rue" },
          { w:"así que", tag:"conjonction", fr:"donc, alors" },
          { w:"nos vemos", tag:"verbe pronominal", info:"verse · présent · nosotros", fr:"nous nous voyons", tip:"« nos » = l'une l'autre, comme « nous NOUS voyons » (voir X2)" },
          { w:"casi", tag:"adverbe", fr:"presque" },
          { w:"todos los días", tag:"adverbe", info:"masc. plur.", fr:"tous les jours" }
        ] },
      { fr: "Aujourd'hui, elle est un peu fatiguée, mais elle est très contente.",
        tokens: [
          { w:"Hoy", tag:"adverbe", fr:"aujourd'hui" },
          { w:"está", tag:"verbe", info:"estar · présent · ella", fr:"elle est", tip:"ESTAR : état du moment (aujourd'hui)" },
          { w:"un poco", tag:"adverbe", fr:"un peu" },
          { w:"cansada", tag:"adjectif", info:"fém. sing.", fr:"fatiguée" },
          { w:"pero", tag:"conjonction", fr:"mais" },
          { w:"está", tag:"verbe", info:"estar · présent · ella", fr:"elle est", tip:"ESTAR : une émotion" },
          { w:"muy", tag:"adverbe", fr:"très" },
          { w:"contenta", tag:"adjectif", info:"fém. sing.", fr:"contente" }
        ] },
      { fr: "C'est son anniversaire et la fête a lieu chez moi !",
        tokens: [
          { w:"Es", tag:"verbe", info:"ser · présent · 3e pers. sing.", fr:"c'est", tip:"SER : une date, un jour spécial" },
          { w:"su", tag:"déterminant", info:"possessif · sing.", fr:"son" },
          { w:"cumpleaños", tag:"nom", info:"masc. sing.", fr:"anniversaire", tip:"Mot à mot : « accomplit-années ». Invariable : el cumpleaños, los cumpleaños" },
          { w:"y", tag:"conjonction", fr:"et" },
          { w:"la", tag:"article", info:"fém. sing.", fr:"la" },
          { w:"fiesta", tag:"nom", info:"fém. sing.", fr:"fête" },
          { w:"es", tag:"verbe", info:"ser · présent · 3e pers. sing.", fr:"a lieu", tip:"Piège : un ÉVÉNEMENT qui a lieu quelque part → SER" },
          { w:"en mi casa", tag:"préposition", info:"en + mi + casa", fr:"chez moi" }
        ] }
    ],
    questions: [
      { q:"Pourquoi « Lucía ES mi mejor amiga » et pas « está » ?", opts:["Parce qu'elle est à côté de moi","Parce que c'est une relation, une identité","Parce qu'elle est contente"], correct:1, why:"Être l'amie de quelqu'un, c'est une relation qui la définit → SER (le R de DOCTOR)." },
      { q:"Pourquoi « siempre ESTÁ dispuesta a ayudar » ?", opts:["« Dispuesta » décrit un état, une disposition (être prête à)","« Siempre » oblige à utiliser estar","C'est une erreur, il faut « es »"], correct:0, why:"« Estar dispuesto a » = être prêt à : un état, comme « estar listo ». « Siempre » ne change rien au choix du verbe." },
      { q:"« Tiene el pelo castaño » : pourquoi TENER ?", opts:["Parce que c'est au passé","Parce qu'on dit aussi en français « elle A les cheveux châtains »","Parce que « pelo » est masculin"], correct:1, why:"Même logique qu'en français : on A les cheveux, les yeux… → tener. Mais « es alta » (elle EST grande) → ser." },
      { q:"Dans « la fiesta es en mi casa », « es » veut dire :", opts:["est (située)","a lieu","ressemble"], correct:1, why:"Un événement qui A LIEU quelque part → SER. La maison, elle, « está en la calle Mayor »." },
      { q:"Aujourd'hui, Lucía est…", opts:["fatiguée et triste","un peu fatiguée mais très contente","malade"], correct:1, why:"« Hoy está un poco cansada, pero está muy contenta » : deux états du moment → ESTAR." }
    ]
  }
};

// X2 — Les verbes pronominaux (me, te, se…) — blocage du francophone n°2 — s'appuie sur X1 (ser/estar) et l'A1 (présent), intègre les ex. 34-37 d'Ashley et son texte T1
LESSONS_ES[302] = {
  code: "X2", level: "A1",
  VOCAB: [
    {block:"Les petits pronoms réfléchis", en:"me", ipa:"/me/", fr:"me, m' (moi-même)", note:"Avec yo : « me levanto » = je me lève. Exactement comme en français."},
    {block:"Les petits pronoms réfléchis", en:"te", ipa:"/te/", fr:"te, t' (toi-même)", note:"Avec tú : « te levantas » = tu te lèves. « ¿Cómo te llamas? » = comment tu t'appelles ?"},
    {block:"Les petits pronoms réfléchis", en:"se", ipa:"/se/", fr:"se, s' (lui-même, elle-même, vous-même, eux-mêmes)", note:"Avec él, ella, usted ET ellos, ellas, ustedes : « se levanta », « se levantan ». C'est le « se » de l'infinitif."},
    {block:"Les petits pronoms réfléchis", en:"nos", ipa:"/nos/", fr:"nous (nous-mêmes)", note:"Avec nosotros : « nos levantamos » = nous nous levons. Un seul « nos » suffit !"},
    {block:"Les petits pronoms réfléchis", en:"os", ipa:"/os/", fr:"vous (vous-mêmes, entre amis)", note:"Avec vosotros (Espagne) : « os levantáis ». En Amérique latine : « ustedes se levantan »."},
    {block:"Le matin", en:"despertarse", ipa:"/despeɾˈtaɾse/", fr:"se réveiller", note:"Diphtongue e → ie : me despierto, te despiertas, se despierta… mais nos despertamos, os despertáis."},
    {block:"Le matin", en:"levantarse", ipa:"/leβanˈtaɾse/", fr:"se lever", note:"Régulier : me levanto, te levantas, se levanta, nos levantamos, os levantáis, se levantan."},
    {block:"Le matin", en:"ducharse", ipa:"/duˈt͡ʃaɾse/", fr:"se doucher", note:"« Me ducho por la mañana. » ch = « tch » comme dans « tchèque »."},
    {block:"Le matin", en:"lavarse los dientes", ipa:"/laˈβaɾse loz ˈðjentes/", fr:"se laver les dents", note:"Pour les parties du corps : article, pas possessif ! « Me lavo LOS dientes » (et non « mis dientes »)."},
    {block:"Le matin", en:"vestirse", ipa:"/besˈtiɾse/", fr:"s'habiller", note:"Changement e → i : me visto, te vistes, se viste, nos vestimos, os vestís, se visten."},
    {block:"Le matin", en:"peinarse", ipa:"/pei̯ˈnaɾse/", fr:"se coiffer", note:"« Mi hija se peina sola » = ma fille se coiffe toute seule."},
    {block:"Le soir et les émotions", en:"acostarse", ipa:"/akosˈtaɾse/", fr:"se coucher", note:"Diphtongue o → ue : me acuesto, te acuestas, se acuesta… mais nos acostamos, os acostáis."},
    {block:"Le soir et les émotions", en:"dormirse", ipa:"/doɾˈmiɾse/", fr:"s'endormir", note:"« dormir » = dormir ; « dormirse » = s'endormir. Diphtongue : me duermo."},
    {block:"Le soir et les émotions", en:"relajarse", ipa:"/relaˈxaɾse/", fr:"se détendre", note:"j = jota : son raclé au fond de la gorge. « Por la noche me relajo en el sofá »."},
    {block:"Le soir et les émotions", en:"divertirse", ipa:"/diβeɾˈtiɾse/", fr:"s'amuser", note:"Présent : me divierto (e → ie). Passé (indéfini) : nos divertimos, mais se divirtió / se divirtieron."},
    {block:"Le soir et les émotions", en:"sentirse", ipa:"/senˈtiɾse/", fr:"se sentir", note:"« Me siento bien » = je me sens bien (e → ie). Attention : « me siento » veut aussi dire « je m'assois » (sentarse) !"},
    {block:"Avec ou sans « se » : le sens change", en:"ir / irse", ipa:"/iɾ · ˈiɾse/", fr:"aller / partir, s'en aller", note:"« Voy a Madrid » = je vais à Madrid. « ¡Me voy! » = je m'en vais, je pars."},
    {block:"Avec ou sans « se » : le sens change", en:"quedar / quedarse", ipa:"/keˈðaɾ · keˈðaɾse/", fr:"se donner rendez-vous / rester", note:"« ¿Quedamos a las ocho? » = on se retrouve à huit heures ? « Me quedo en casa » = je reste à la maison."},
    {block:"Avec ou sans « se » : le sens change", en:"llevar / llevarse bien", ipa:"/ʎeˈβaɾ · ʎeˈβaɾse ˈβjen/", fr:"porter, emmener / bien s'entendre", note:"« Llevo a mi hijo al colegio » = j'emmène mon fils. « Me llevo bien con mi hermana » = je m'entends bien avec ma sœur."},
    {block:"Avec ou sans « se » : le sens change", en:"poner / ponerse", ipa:"/poˈneɾ · poˈneɾse/", fr:"mettre, poser / mettre (un vêtement), devenir", note:"« Me pongo el abrigo » = je mets mon manteau. « Me pongo nerviosa » = je deviens nerveuse."},
    {block:"Verbes clés (X2)", en:"llamarse", ipa:"/ʎaˈmaɾse/", fr:"s'appeler", note:"« Me llamo Ashley » = je m'appelle Ashley (mot à mot : je me nomme). ll ≈ « y »."},
    {block:"Verbes clés (X2)", en:"equivocarse", ipa:"/ekiβoˈkaɾse/", fr:"se tromper", note:"« Perdón, me he equivocado » = pardon, je me suis trompé(e). Très utile !"},
    {block:"Verbes clés (X2)", en:"darse cuenta de", ipa:"/ˈdaɾse ˈkwenta ðe/", fr:"se rendre compte de", note:"« No me doy cuenta » = je ne me rends pas compte. Irrégulier : me doy, te das, se da…"},
    {block:"Verbes clés (X2)", en:"reírse", ipa:"/reˈiɾse/", fr:"rire", note:"Pronominal en espagnol, pas en français ! « Me río mucho con él » = je ris beaucoup avec lui."},
    {block:"Verbes clés (X2)", en:"caerse", ipa:"/kaˈeɾse/", fr:"tomber (quand on tombe soi-même)", note:"« ¡Cuidado, te vas a caer! » = attention, tu vas tomber ! Présent : me caigo."},
    {block:"Verbes clés (X2)", en:"pasear", ipa:"/paseˈaɾ/", fr:"se promener", note:"Pronominal en français, PAS en espagnol : « Paseo por el parque » = je me promène dans le parc."},
    {block:"Verbes clés (X2)", en:"descansar", ipa:"/deskanˈsaɾ/", fr:"se reposer", note:"Pas de « se » en espagnol : « Los domingos descanso » = le dimanche, je me repose."}
  ],
  MEM_WORDS: [2,11,16,17,23,25], // se, acostarse, ir/irse, quedar/quedarse, reírse, pasear

  MINI_CHECKS: [
    { q:"Yo ___ a las siete.", opts:["se levanto","me levanto","levanto"], correct:1, fb:"Avec yo, le petit mot est « me » : « me levanto » (je ME lève). « se » ne va qu'avec él/ella/usted et ellos/ellas/ustedes." },
    { q:"« Nous nous couchons tard. »", opts:["Nos acostamos tarde.","Nos acuestamos tarde.","Se acostamos tarde."], correct:0, fb:"Pas de diphtongue avec nosotros (l'accent tonique ne tombe pas sur le « o ») : « nos acostamos »." },
    { q:"« Je m'en vais ! »", opts:["¡Voy!","¡Me voy!"], correct:1, fb:"« Irse » = partir, s'en aller : « ¡Me voy! ». « ¡Voy! » = j'arrive, j'y vais." },
    { q:"« Je vais me doucher. »", opts:["Voy a me duchar.","Voy a ducharme."], correct:1, fb:"Avec un infinitif, le pronom se COLLE à la fin : « ducharme ». (On peut aussi dire « Me voy a duchar », pronom avant le verbe conjugué.)" }
  ],

  ROUNDS: [
    { bank:["siete","levanto","las","Me","a","."], answer:"me levanto a las siete .", display:"Me levanto a las siete.", fr:"Je me lève à sept heures." },
    { bank:["acuestas","¿","hora","te","A","qué","?"], answer:"¿ a qué hora te acuestas ?", display:"¿A qué hora te acuestas?", fr:"À quelle heure tu te couches ?" },
    { bank:["llama","hermana","Lucía","Mi","se","."], answer:"mi hermana se llama lucía .", display:"Mi hermana se llama Lucía.", fr:"Ma sœur s'appelle Lucía." },
    { bank:["mucho","Nos","fiesta","divertimos","la","en","."], answer:"nos divertimos mucho en la fiesta .", display:"Nos divertimos mucho en la fiesta.", fr:"Nous nous amusons beaucoup à la fête." },
    { bank:["ahora","ducharme","Voy","a","."], answer:"voy a ducharme ahora .", display:"Voy a ducharme ahora.", fr:"Je vais me doucher maintenant." },
    { bank:["dientes","lavándose","niños","los","están","Los","."], answer:"los niños están lavándose los dientes .", display:"Los niños están lavándose los dientes.", fr:"Les enfants sont en train de se laver les dents." },
    { bank:["casa","quedo","Hoy","en","me","."], answer:"hoy me quedo en casa .", display:"Hoy me quedo en casa.", fr:"Aujourd'hui, je reste à la maison." },
    { bank:["temprano","levantáis","¿","Os","?"], answer:"¿ os levantáis temprano ?", display:"¿Os levantáis temprano?", fr:"Vous vous levez tôt ?" },
    { bank:["ocho","voy","Me","las","a","."], answer:"me voy a las ocho .", display:"Me voy a las ocho.", fr:"Je pars à huit heures." },
    { bank:["tarde","padres","acuestan","no","Mis","se","."], answer:"mis padres no se acuestan tarde .", display:"Mis padres no se acuestan tarde.", fr:"Mes parents ne se couchent pas tard." }
  ],

  QUIZ: [
    { cat:"ecrit", q:"Tú ___ muy temprano.", opts:["se levantas","te levantas","te levanta"], correct:1, why:"Avec tú : pronom « te » + terminaison « -as » : « te levantas »." },
    { cat:"ecrit", q:"Mis hijos ___ a las nueve.", opts:["se acuestan","se acostan","nos acostamos"], correct:0, why:"Ellos → « se » ; diphtongue o → ue car l'accent tombe sur le « o » : « se acuestan »." },
    { cat:"ecrit", q:"Vosotros ___ a las ocho.", opts:["se levantan","nos levantamos","os levantáis"], correct:2, why:"Vosotros → « os » + « -áis » : « os levantáis ». (Amérique latine : « ustedes se levantan ».)" },
    { cat:"ecrit", q:"« Je me sens bien » se dit :", opts:["Me siento bien.","Me sento bien.","Se siento bien."], correct:0, why:"Sentirse : e → ie à yo → « me siento »." },
    { cat:"ecrit", q:"Où placer le pronom ? « Je suis en train de m'habiller. »", opts:["Estoy me vistiendo.","Estoy vistiéndome.","Estoy vistiendo me."], correct:1, why:"Avec le gérondif, le pronom se colle à la fin, et on ajoute un accent écrit : « vistiéndome ». (Ou : « Me estoy vistiendo ».)" },
    { cat:"ecrit", q:"« On se retrouve à 8 h ? »", opts:["¿Nos quedamos a las ocho?","¿Quedamos a las ocho?","¿Vamos a las ocho?"], correct:1, why:"« Quedar » (sans « se ») = se donner rendez-vous. « Quedarse » = rester." },
    { cat:"ecrit", q:"« Le dimanche, je me repose. »", opts:["Los domingos me descanso.","Los domingos descanso.","Los domingos se descanso."], correct:1, why:"« Descansar » n'est pas pronominal en espagnol, même si « se reposer » l'est en français." },
    { cat:"ecrit", q:"« Je ris beaucoup avec toi. »", opts:["Río mucho contigo.","Se río mucho contigo.","Me río mucho contigo."], correct:2, why:"« Reírse » est pronominal en espagnol : « me río ». Le français « rire » ne l'est pas." },
    { cat:"ecrit", q:"Mañana ___ a Sevilla, ¡qué ilusión! (nous partons)", opts:["nos vamos","vamos nos","se vamos"], correct:0, why:"« Irse » = partir ; nosotros → « nos vamos », pronom AVANT le verbe conjugué." },
    { cat:"ecrit", q:"Ayer nosotros ___ mucho en la fiesta.", opts:["nos divirtimos","nos divertimos","nos divertemos"], correct:1, why:"Passé (indéfini) de divertirse à nosotros : « nos divertimos » (même forme qu'au présent). Le changement e → i n'apparaît qu'à la 3e personne : se divirtió." },
    { cat:"oral", audio:"Me despierto a las seis, pero me levanto a las seis y media.", q:"Écoute : à quelle heure la personne se lève-t-elle ?", opts:["À six heures","À six heures et demie","À sept heures","À sept heures et demie"], correct:1, why:"« me despierto a las seis » = je me réveille à six heures ; « me levanto a las seis y media » = je me lève à six heures et demie." },
    { cat:"oral", audio:"Hoy no salgo, me quedo en casa.", q:"Écoute : que fait la personne aujourd'hui ?", opts:["Elle sort avec des amis","Elle donne rendez-vous","Elle reste à la maison","Elle part en voyage"], correct:2, why:"« me quedo en casa » = je reste à la maison (quedarse = rester)." },
    { cat:"oral", audio:"¡Venga, niños, a la ducha! Nos vamos en diez minutos.", q:"Écoute : que se passe-t-il dans dix minutes ?", opts:["Les enfants se couchent","Tout le monde part","Les enfants se réveillent","Le repas est prêt"], correct:1, why:"« Nos vamos en diez minutos » = on part dans dix minutes (irse)." },
    { cat:"oral", audio:"Me llamo Javier y me llevo muy bien con mi hermano.", q:"Écoute : que dit Javier de son frère ?", opts:["Il l'emmène à l'école","Il s'entend très bien avec lui","Il habite avec lui","Il lui ressemble"], correct:1, why:"« Llevarse bien con alguien » = bien s'entendre avec quelqu'un. « Llevar » seul = porter, emmener." },
    { cat:"comprehension", passage:"“Entre semana me levanto a las siete, me ducho y me visto en diez minutos. Los sábados, en cambio, me quedo en la cama hasta las diez.”", q:"D'après le texte, que fait la personne le samedi ?", opts:["Elle se lève à sept heures","Elle reste au lit jusqu'à dix heures","Elle se douche en dix minutes","Elle part tôt"], correct:1, why:"« Los sábados me quedo en la cama hasta las diez » = le samedi, je reste au lit jusqu'à dix heures." },
    { cat:"comprehension", passage:"“— ¿Os acostáis tarde? — No, nos acostamos a las once. Pero nuestra hija se acuesta a las nueve.”", q:"D'après le dialogue, qui se couche à neuf heures ?", opts:["Les parents","Tout le monde","La fille","Personne"], correct:2, why:"« nuestra hija se acuesta a las nueve » = notre fille se couche à neuf heures ; les parents, à onze heures." },
    { cat:"comprehension", passage:"“(rappel) Mi hermano es médico. Hoy está muy cansado porque trabaja mucho, pero está contento: ¡mañana está de vacaciones!”", q:"D'après le texte, comment va le frère aujourd'hui ?", opts:["Il est malade","Il est fatigué mais content","Il est en vacances","Il est triste"], correct:1, why:"« está muy cansado… pero está contento » : états du moment → ESTAR. « Es médico » : métier → SER (rappel X1)." },
    { cat:"comprehension", passage:"“(rappel) La fiesta de cumpleaños es en casa de Ana. Su casa está en la calle Mayor, al lado de la farmacia.”", q:"D'après le texte, où se trouve la maison d'Ana ?", opts:["Rue Mayor, à côté de la pharmacie","À côté de la boulangerie","Dans le centre commercial","On ne sait pas"], correct:0, why:"« Su casa está en la calle Mayor, al lado de la farmacia » (lieu → ESTAR ; « la fiesta es en casa de Ana » : événement → SER, rappel X1)." }
  ],

  PRON_VERBS: [
    {en:"Me levanto y me ducho.", fr:"Je me lève et je me douche. (ch = « tch »)"},
    {en:"Me despierto a las siete.", fr:"Je me réveille à sept heures. (accent tonique : des-PIER-to)"},
    {en:"¿Cómo te llamas? — Me llamo Javier.", fr:"Comment tu t'appelles ? — Je m'appelle Javier. (ll ≈ « y », j = jota)"},
    {en:"Mi hermana se viste muy rápido.", fr:"Ma sœur s'habille très vite. (v = b, r initial roulé)"},
    {en:"Nos acostamos a las once y cuarto.", fr:"Nous nous couchons à onze heures et quart. (once = « on-thé » en Espagne)"},
    {en:"Os levantáis muy tarde.", fr:"Vous vous levez très tard. (-áis : accent sur le « a »)"},
    {en:"El perro se queda en la terraza.", fr:"Le chien reste sur la terrasse. (rr roulé, r simple battu)"},
    {en:"Los niños se divierten en el jardín.", fr:"Les enfants s'amusent dans le jardin. (ñ = « gn », j = jota)"}
  ],

  READING: [
    "Me llamo Sara y tengo dos hijos, Leo y Nora.",
    "Entre semana, me despierto a las seis y media, antes que todos.",
    "Me ducho, me visto y preparo el desayuno en silencio.",
    "A las siete, despierto a los niños: ¡es la parte más difícil del día!",
    "Leo se levanta enseguida, pero Nora se queda cinco minutos más en la cama.",
    "Después, los niños se lavan los dientes y se ponen el abrigo.",
    "Nos vamos de casa a las ocho menos cuarto.",
    "Por la noche, los niños se acuestan a las nueve.",
    "Entonces me siento en el sofá y me relajo un poco.",
    "A las once, me acuesto yo también: ¡estoy muy cansada!"
  ],
  GLOSS: [
    {en:"entre semana", fr:"en semaine (du lundi au vendredi)"},
    {en:"antes que todos", fr:"avant tout le monde"},
    {en:"despierto a los niños", fr:"je réveille les enfants (despertar SANS « se » : on réveille quelqu'un d'autre)"},
    {en:"enseguida", fr:"tout de suite"},
    {en:"las ocho menos cuarto", fr:"huit heures moins le quart"},
    {en:"me siento", fr:"je m'assois (sentarse) — même forme que « je me sens » (sentirse) !"}
  ],

  GRAMMAR1: {
    heading: "Me levanto, te levantas, se levanta : le petit mot suit la personne",
    lede: "Un verbe pronominal, c'est un verbe « boomerang » : l'action revient sur celui qui la fait. Comme en français (je ME lève, tu TE lèves), le petit pronom change avec la personne.",
    conj: [["yo →","me levanto","Me levanto a las siete."],["tú →","te levantas","¿Te levantas temprano?"],["él, ella, usted →","se levanta","Carlos se levanta tarde."],["nosotros →","nos levantamos","Nos levantamos a las ocho."],["vosotros →","os levantáis","¿Os levantáis ya?"],["ellos, ustedes →","se levantan","Los niños se levantan solos."]],
    ruleHtml: "📖 Dans le dictionnaire, le verbe est à l'infinitif avec <b>se</b> collé à la fin : <b>levantarse</b> = se lever. Ce « se » n'est qu'une étiquette : quand tu conjugues, tu le remplaces par le pronom de la bonne personne, <b>exactement comme en français</b> : <b>me</b> (je me), <b>te</b> (tu te), <b>se</b> (il/elle/vous se), <b>nos</b> (nous nous), <b>os</b> (vous vous), <b>se</b> (ils/elles se). Le verbe, lui, se conjugue normalement : levant<b>o</b>, levant<b>as</b>, levant<b>a</b>… Comparaison : <b>levantar</b> = lever quelque chose ou quelqu'un (« Levanto a mi hijo » = je lève mon fils) ; <b>levantarse</b> = se lever soi-même.",
    dialogueLede: "Une collègue te pose des questions sur tes matins :",
    dialogue: [
      {who:"them", en:"¿A qué hora te levantas?", fr:"À quelle heure tu te lèves ?"},
      {who:"you", en:"Me levanto a las seis. Mi hijo se levanta a las siete y nos vamos a las ocho.", fr:"Je me lève à six heures. Mon fils se lève à sept heures et nous partons à huit heures."}
    ],
    whyLabel: "Le piège : garder « se » partout",
    whyText: "L'erreur n°1 des francophones : « Yo <b>se</b> levanto », parce qu'on a appris « levantar<b>se</b> ». Mais tu ne dirais jamais « je <b>se</b> lève » en français ! Réflexe : <b>yo → me</b>, <b>tú → te</b>. Et en espagnol, le pronom sujet disparaît souvent (la terminaison suffit) : « <b>Me levanto</b> » tout seul veut déjà dire « je me lève ». Au pluriel, attention : « nous nous levons » = <b>nos levantamos</b> (un seul « nos », le pronom sujet « nosotros » est facultatif)."
  },
  GRAMMAR2: {
    heading: "Où placer le pronom ? Avant le verbe conjugué, ou collé à l'infinitif et au gérondif",
    dialogueLede: "Le matin, ton fils t'appelle de sa chambre :",
    dialogue: [
      {who:"them", en:"¡Mamá! ¿Vamos ya?", fr:"Maman ! On y va ?"},
      {who:"you", en:"¡Un momento! Estoy duchándome y después voy a vestirme.", fr:"Un instant ! Je suis en train de me doucher et après je vais m'habiller."}
    ],
    ruleHtml: "💭 Deux places possibles : <b>1. Devant le verbe conjugué</b> (toujours) : « <b>me</b> levanto », « no <b>me</b> levanto ». <b>2. Collé à la fin d'un infinitif ou d'un gérondif</b> : « voy a levantar<b>me</b> », « estoy duchándo<b>me</b> ». Dans ce 2e cas, tu peux AUSSI mettre le pronom devant le verbe conjugué : « <b>me</b> voy a levantar », « <b>me</b> estoy duchando » — les deux sont corrects. Ce qui est interdit : le pronom tout seul au milieu (« voy a me levantar »). Au gérondif, on ajoute un accent écrit pour garder la bonne prononciation : duch<b>á</b>ndome, vist<b>i</b>éndome, lav<b>á</b>ndose. Et l'infinitif garde la personne : « voy a acostar<b>me</b> », « vas a acostar<b>te</b> », « vamos a acostar<b>nos</b> ».",
    whyLabel: "Les diphtongues : me acuesto, me despierto, me visto",
    whyText: "Beaucoup de verbes pronominaux du quotidien changent de voyelle quand l'accent tonique tombe dessus : <b>o → ue</b> (acostarse → me <b>acue</b>sto, dormirse → me <b>due</b>rmo), <b>e → ie</b> (despertarse → me desp<b>ie</b>rto, sentirse → me s<b>ie</b>nto, divertirse → me div<b>ie</b>rto), <b>e → i</b> (vestirse → me <b>vi</b>sto). Le truc : c'est la « botte » — ça change à yo, tú, él et ellos, mais <b>pas à nosotros et vosotros</b>, où l'accent tombe plus loin : nos <b>aco</b>stamos, os desp<b>e</b>rtáis. Et attention aux faux jumeaux : un verbe pronominal en français ne l'est pas toujours en espagnol (se promener = <b>pasear</b>, se reposer = <b>descansar</b>), et inversement (rire = <b>reírse</b>, partir = <b>irse</b>, rester = <b>quedarse</b>, tomber = <b>caerse</b>)."
  },

  REVIEW: [
    { q:"« Je suis fatiguée. »", opts:["Soy cansada.","Estoy cansada."], correct:1, fb:"Un état passager → ESTAR : « Estoy cansada ». (rappel X1)" },
    { q:"Mi padre ___ médico.", opts:["es","está"], correct:0, fb:"Un métier → SER : « es médico ». (rappel X1)" },
    { q:"« Tu es prête ? »", opts:["¿Estás lista?","¿Eres lista?"], correct:0, fb:"« Estar listo » = être prêt ; « ser listo » = être intelligent. (rappel X1)" },
    { q:"El concierto ___ en el parque.", opts:["está","es"], correct:1, fb:"Un événement qui a lieu → SER. (rappel X1)" },
    { q:"¿Dónde ___ las llaves?", opts:["están","son"], correct:0, fb:"Où se trouvent les clés → lieu → ESTAR. (rappel X1)" }
  ],

  CULTURE_NOTE: {
    icon: "🕙",
    title: "Note culturelle — la journée à l'espagnole",
    html: "En Espagne, la journée est décalée par rapport à la France : on <b>desayuna</b> léger (un café et une tostada), on déjeune (<b>la comida</b>) entre 14 h et 15 h 30, et on dîne (<b>la cena</b>) vers 21 h ou 22 h. Du coup, on <b>se acuesta</b> souvent après minuit, même en semaine ! Beaucoup de gens prennent une pause café au milieu de la matinée (<b>el almuerzo</b> en Espagne), et la <b>siesta</b> reste une tradition surtout en été et le week-end. En Amérique latine, les horaires ressemblent davantage aux horaires français, et « el almuerzo » désigne en général le repas de midi."
  },

  NEXT_PREVIEW: "X3 (Le présent qui bouge) : le présent de tous les jours, « estar + gérondif » pour ce qui se passe en ce moment (estoy comiendo) et « ir a + infinitif » pour ce qui va arriver (voy a cocinar) — les trois façons de parler du présent et du futur proche.",

  META: { vocabTitle: "Les verbes pronominaux du quotidien (X2)", lectureTitle: "Les matins de Sara", bilanTitle: "Bravo, tu maîtrises maintenant me, te, se, nos, os et leur place dans la phrase !", pronLabel: "Ma routine en espagnol (me levanto, me acuesto…)", todayLede: "conjuguer les verbes pronominaux à toutes les personnes (me levanto, te levantas, se levanta…), bien placer le pronom (voy a levantarme, estoy duchándome) et repérer les verbes qui changent de sens avec « se » — s'appuie sur X1 (ser/estar)" },

  DRILLS: [
    { type:"fill", text:"Yo ___ (levantarse) todos los días a las siete de la mañana.", answers:["me levanto"], why:"Yo → pronom « me » + terminaison « -o » : « me levanto ». (exercice d'Ashley)" },
    { type:"fill", text:"¿A qué hora ___ (acostarse, tú) los fines de semana?", answers:["te acuestas"], why:"Tú → « te » ; acostarse change o → ue quand l'accent tombe sur le « o » : « te acuestas ». (exercice d'Ashley)" },
    { type:"fill", text:"Mi hermana ___ (lavarse) el pelo con un champú natural.", answers:["se lava"], why:"Ella → « se » : « se lava ». Et « EL pelo », pas « su pelo » : pour le corps, on met l'article. (exercice d'Ashley)" },
    { type:"fill", text:"Nosotros ___ (divertirse) mucho en la fiesta de ayer.", answers:["nos divertimos"], why:"« Ayer » → passé (indéfini). Bonne nouvelle : à nosotros, le passé de divertirse est IDENTIQUE au présent : « nos divertimos ». Pas de diphtongue (me divierto) ni de e → i (se divirtió) à nosotros, car l'accent tombe sur la fin du verbe. (exercice d'Ashley)" },
    { type:"fill", text:"Tú ___ (levantarse) muy temprano.", answers:["te levantas"], why:"Tú → « te » + « -as »." },
    { type:"fill", text:"Mi padre ___ (levantarse) a las seis.", answers:["se levanta"], why:"Él → « se » + « -a »." },
    { type:"fill", text:"Los domingos nosotros ___ (levantarse) tarde.", answers:["nos levantamos"], why:"Nosotros → « nos » + « -amos »." },
    { type:"fill", text:"Vosotros ___ (levantarse) a las ocho.", answers:["os levantáis"], why:"Vosotros → « os » + « -áis » (avec accent). Amérique latine : « ustedes se levantan »." },
    { type:"fill", text:"Mis hijos ___ (levantarse) a las siete y media.", answers:["se levantan"], why:"Ellos → « se » + « -an »." },
    { type:"fill", text:"Yo ___ (ducharse) por la mañana.", answers:["me ducho"], why:"Yo → « me » + « -o »." },
    { type:"fill", text:"¿Cómo ___ (llamarse, tú)?", answers:["te llamas"], why:"« ¿Cómo te llamas? » = comment tu t'appelles ? — la question la plus utile du monde !" },
    { type:"fill", text:"Mis amigas ___ (llamarse) Ana y Lola.", answers:["se llaman"], why:"Ellas → « se » + « -an »." },
    { type:"fill", text:"Yo ___ (despertarse) a las seis y media.", answers:["me despierto"], why:"Diphtongue e → ie à yo : « me despierto »." },
    { type:"fill", text:"Nosotros ___ (despertarse) a las ocho.", answers:["nos despertamos"], why:"Pas de diphtongue à nosotros (l'accent tombe sur « -ta- ») : « nos despertamos »." },
    { type:"fill", text:"Ella ___ (vestirse) muy rápido.", answers:["se viste"], why:"Vestirse : e → i à ella : « se viste »." },
    { type:"fill", text:"Yo ___ (acostarse) a las once.", answers:["me acuesto"], why:"Acostarse : o → ue à yo : « me acuesto »." },
    { type:"fill", text:"Vosotros ___ (acostarse) muy tarde.", answers:["os acostáis"], why:"Pas de diphtongue à vosotros : « os acostáis »." },
    { type:"fill", text:"¿Tú ___ (sentirse) bien hoy?", answers:["te sientes"], why:"Sentirse : e → ie à tú : « te sientes »." },
    { type:"fill", text:"Mis padres ___ (divertirse) mucho en la playa.", answers:["se divierten"], why:"Présent, ellos : e → ie : « se divierten »." },
    { type:"choice", q:"Quelle phrase contient une erreur ?", opts:["Yo se levanto a las siete.","Yo me levanto a las siete.","Me levanto a las siete."], correct:0, why:"Avec yo, c'est « me » : « Yo me levanto » ou simplement « Me levanto ». « Yo se levanto » = « je se lève »." },
    { type:"fill", text:"Ahora voy a ___ (ducharse).", answers:["ducharme"], why:"Après un infinitif, le pronom se colle à la fin et suit la personne : voy a ducharME (je), vas a ducharTE (tu)." },
    { type:"choice", q:"« Je vais me coucher. »", opts:["Voy a me acostar.","Voy a acostarme.","Voy me a acostar."], correct:1, why:"Pronom collé à l'infinitif : « Voy a acostarme ». Autre possibilité correcte : « Me voy a acostar »." },
    { type:"choice", q:"Quelle phrase est correcte ?", opts:["Estoy me duchando.","Me estoy duchando.","Estoy duchando me."], correct:1, why:"Pronom devant le verbe conjugué : « Me estoy duchando », ou collé au gérondif : « Estoy duchándome »." },
    { type:"fill", text:"¡Un momento! Estoy ___ (vestirse).", answers:["vistiéndome"], why:"Gérondif de vestir = vistiendo (e → i) ; + me collé à la fin + accent écrit : « vistiéndome »." },
    { type:"fill", text:"Ahora mismo, los niños están ___ (lavarse) los dientes.", answers:["lavándose"], why:"Gérondif lavando + se (ellos) + accent : « lavándose »." },
    { type:"fill", text:"Mañana ___ (irse, nosotros) a Madrid.", answers:["nos vamos"], why:"« Irse » = partir : « nos vamos ». « Vamos a Madrid » dirait juste « nous allons à Madrid »." },
    { type:"choice", q:"Tu quittes la fête. Tu dis : « Je m'en vais ! »", opts:["¡Me voy!","¡Voy!"], correct:0, why:"« ¡Me voy! » = je pars. « ¡Voy! » = j'arrive, j'y vais (quand on t'appelle)." },
    { type:"choice", q:"Il pleut, tu ne sors pas : « Aujourd'hui, je ___ à la maison. »", opts:["quedo","me quedo"], correct:1, why:"« Quedarse » = rester : « me quedo en casa »." },
    { type:"choice", q:"Tu fixes un rendez-vous : « ¿A qué hora ___? » (on se retrouve à quelle heure ?)", opts:["nos quedamos","quedamos"], correct:1, why:"« Quedar » (sans se) = se donner rendez-vous : « ¿A qué hora quedamos? ». « Nos quedamos » = nous restons." },
    { type:"choice", q:"« Le dimanche, je me repose. »", opts:["Los domingos descanso.","Los domingos me descanso."], correct:0, why:"« Descansar » n'est pas pronominal : pas de « me », même si le français dit « je ME repose »." },
    { type:"choice", q:"« Je me promène dans le parc. »", opts:["Me paseo por el parque.","Paseo por el parque."], correct:1, why:"« Pasear » = se promener, sans pronom en espagnol." },
    { type:"choice", q:"« Attention, tu vas tomber ! »", opts:["¡Cuidado, te vas a caer!","¡Cuidado, vas a te caer!"], correct:0, why:"« Caerse » (tomber, pour une personne) : pronom devant le verbe conjugué « te vas a caer » ou collé : « vas a caerte »." },
    { type:"fill", text:"— ¿Te llevas bien con tu hermana? — Sí, ___ muy bien. (nosotras)", answers:["nos llevamos"], why:"« Llevarse bien » = bien s'entendre ; nosotras → « nos llevamos »." },
    { type:"fill", text:"« Il s'appelle Pablo. » = ___ Pablo.", answers:["Se llama","se llama"], why:"Él → « se llama ». Pas besoin de « él » : la terminaison suffit." },
    { type:"choice", q:"« Me pongo nerviosa antes de un examen » veut dire :", opts:["Je suis toujours nerveuse","Je deviens nerveuse avant un examen","Je mets un pull avant un examen"], correct:1, why:"« Ponerse + adjectif » = devenir (pour un changement d'humeur rapide) : me pongo nerviosa, se pone rojo (il rougit)." }
  ],

  ANNOTATED: {
    title: "Mi rutina diaria",
    intro: "Un texte d'Ashley. Touche chaque mot pour voir ce que c'est — et chasse les verbes pronominaux (me…) !",
    sentences: [
      { fr: "Bonjour, je m'appelle Carlos et j'habite à Valence.",
        tokens: [
          { w:"Hola", tag:"interjection", fr:"bonjour, salut" },
          { w:"me llamo", tag:"verbe pronominal", info:"llamarse · présent · yo (je)", fr:"je m'appelle", tip:"me = moi-même, comme « je M'appelle »" },
          { w:"Carlos", tag:"nom propre", fr:"Carlos" },
          { w:"y", tag:"conjonction", fr:"et" },
          { w:"vivo", tag:"verbe", info:"vivir · présent · yo", fr:"j'habite", tip:"Pas pronominal : pas de petit mot devant" },
          { w:"en", tag:"préposition", fr:"à, en, dans" },
          { w:"Valencia", tag:"nom propre", fr:"Valence" }
        ] },
      { fr: "Du lundi au vendredi, je me lève à sept heures du matin.",
        tokens: [
          { w:"De lunes a viernes", tag:"préposition", info:"de … a … = du … au …", fr:"du lundi au vendredi", tip:"Les jours n'ont pas de majuscule en espagnol" },
          { w:"me levanto", tag:"verbe pronominal", info:"levantarse · présent · yo", fr:"je me lève", tip:"L'infinitif levantarSE devient ME levanto avec yo" },
          { w:"a las siete", tag:"préposition", info:"a + las + siete", fr:"à sept heures", tip:"« las » car on sous-entend « las horas »" },
          { w:"de la mañana", tag:"préposition", info:"fém. sing.", fr:"du matin" }
        ] },
      { fr: "Je me douche, je prends un café au lait et des tartines au petit-déjeuner.",
        tokens: [
          { w:"Me ducho", tag:"verbe pronominal", info:"ducharse · présent · yo", fr:"je me douche" },
          { w:"desayuno", tag:"verbe", info:"desayunar · présent · yo", fr:"je prends au petit-déjeuner", tip:"Un seul verbe en espagnol : desayunar = prendre le petit-déjeuner" },
          { w:"un", tag:"article", info:"masc. sing.", fr:"un" },
          { w:"café con leche", tag:"nom", info:"masc. sing.", fr:"café au lait" },
          { w:"y", tag:"conjonction", fr:"et" },
          { w:"unas", tag:"article", info:"fém. plur.", fr:"des" },
          { w:"tostadas", tag:"nom", info:"fém. plur.", fr:"tartines grillées" }
        ] },
      { fr: "Ensuite, je vais à l'université en bus.",
        tokens: [
          { w:"Después", tag:"adverbe", fr:"ensuite, après" },
          { w:"voy", tag:"verbe", info:"ir · présent · yo", fr:"je vais", tip:"« ir » sans « se » = aller quelque part. « Me voy » = je pars" },
          { w:"a la", tag:"préposition", info:"a + la (fém. sing.)", fr:"à l'" },
          { w:"universidad", tag:"nom", info:"fém. sing.", fr:"université" },
          { w:"en autobús", tag:"préposition", info:"en + autobús (masc. sing.)", fr:"en bus" }
        ] },
      { fr: "Les cours commencent à neuf heures et demie et finissent à deux heures de l'après-midi.",
        tokens: [
          { w:"Las", tag:"article", info:"fém. plur.", fr:"les" },
          { w:"clases", tag:"nom", info:"fém. plur.", fr:"cours" },
          { w:"empiezan", tag:"verbe", info:"empezar · présent · ellas", fr:"commencent", tip:"Diphtongue e → ie, comme me despierto" },
          { w:"a las nueve y media", tag:"préposition", info:"a + las + nueve y media", fr:"à neuf heures et demie" },
          { w:"y", tag:"conjonction", fr:"et" },
          { w:"terminan", tag:"verbe", info:"terminar · présent · ellas", fr:"finissent" },
          { w:"a las dos", tag:"préposition", info:"a + las + dos", fr:"à deux heures" },
          { w:"de la tarde", tag:"préposition", info:"fém. sing.", fr:"de l'après-midi" }
        ] },
      { fr: "L'après-midi, j'ai l'habitude d'étudier à la bibliothèque ou de faire du sport avec mes amis.",
        tokens: [
          { w:"Por la tarde", tag:"préposition", info:"por + la tarde", fr:"l'après-midi" },
          { w:"suelo", tag:"verbe", info:"soler · présent · yo", fr:"j'ai l'habitude de", tip:"soler + infinitif = avoir l'habitude de ; o → ue" },
          { w:"estudiar", tag:"verbe", info:"estudiar · infinitif", fr:"étudier" },
          { w:"en la", tag:"préposition", info:"en + la (fém. sing.)", fr:"à la" },
          { w:"biblioteca", tag:"nom", info:"fém. sing.", fr:"bibliothèque", tip:"Faux ami : une librairie = una librería" },
          { w:"o", tag:"conjonction", fr:"ou" },
          { w:"hacer", tag:"verbe", info:"hacer · infinitif", fr:"faire" },
          { w:"deporte", tag:"nom", info:"masc. sing.", fr:"du sport", tip:"Pas d'article partitif en espagnol : hacer deporte" },
          { w:"con", tag:"préposition", fr:"avec" },
          { w:"mis", tag:"déterminant", info:"possessif · plur.", fr:"mes" },
          { w:"amigos", tag:"nom", info:"masc. plur.", fr:"amis" }
        ] },
      { fr: "Nous dînons tôt et à onze heures je me couche.",
        tokens: [
          { w:"Cenamos", tag:"verbe", info:"cenar · présent · nosotros", fr:"nous dînons" },
          { w:"temprano", tag:"adverbe", fr:"tôt" },
          { w:"y", tag:"conjonction", fr:"et" },
          { w:"a las once", tag:"préposition", info:"a + las + once", fr:"à onze heures" },
          { w:"me acuesto", tag:"verbe pronominal", info:"acostarse · présent · yo", fr:"je me couche", tip:"o → ue : acostarse → me acuesto (mais nos acostamos)" }
        ] },
      { fr: "Le samedi, je ne me réveille pas avant dix heures.",
        tokens: [
          { w:"Los sábados", tag:"nom", info:"masc. plur.", fr:"le samedi (tous les samedis)", tip:"« los » + jour = chaque semaine, ce jour-là" },
          { w:"no", tag:"adverbe", fr:"ne … pas", tip:"« no » se place AVANT le pronom : no me despierto" },
          { w:"me despierto", tag:"verbe pronominal", info:"despertarse · présent · yo", fr:"je me réveille", tip:"e → ie : despertarse → me despierto" },
          { w:"hasta", tag:"préposition", fr:"jusqu'à (ici : avant)" },
          { w:"las diez", tag:"nom", info:"fém. plur.", fr:"dix heures" }
        ] }
    ],
    questions: [
      { q:"Pourquoi Carlos dit « ME levanto » et pas « SE levanto » ?", opts:["Parce que « se » est réservé au passé","Parce qu'avec yo (je), le pronom est « me », comme « je ME lève »","Parce que « levantar » est irrégulier"], correct:1, why:"Le « se » de l'infinitif (levantarse) se remplace par le pronom de la personne : yo → me." },
      { q:"« Me acuesto » : quel est l'infinitif ?", opts:["acostarse","acuestarse","costarse"], correct:0, why:"Acostarse (se coucher) : la diphtongue o → ue apparaît quand l'accent tombe sur le « o » : me acuesto." },
      { q:"Dans le texte, lequel de ces verbes N'EST PAS pronominal ?", opts:["me ducho","desayuno","me despierto"], correct:1, why:"« Desayunar » (prendre le petit-déjeuner) n'a pas de pronom : « desayuno »." },
      { q:"« Voy a la universidad » : pourquoi pas « me voy » ?", opts:["Parce que Carlos dit simplement où il va (ir = aller)","Parce que « me voy » est incorrect","Parce que c'est au passé"], correct:0, why:"« Ir a » = aller à un endroit. « Irse » = partir, s'en aller : « Me voy a las ocho » (je pars à huit heures)." },
      { q:"À quelle heure Carlos se couche-t-il ?", opts:["À dix heures","À neuf heures et demie","À onze heures"], correct:2, why:"« A las once me acuesto » = à onze heures, je me couche." }
    ]
  }
};

// X3 — Le présent qui bouge : présent simple, « estar + gérondif », « ir a + infinitif » — ouvre la LIGNE DU TEMPS réutilisée en X4-X6 ; texte légendé = T7 d'Ashley (El mercado del barrio)
LESSONS_ES[303] = {
  code: "X3", level: "A1",
  VOCAB: [
    {block:"La ligne du temps : les marqueurs", en:"siempre", ipa:"/ˈsjempɾe/", fr:"toujours", note:"Marqueur d'HABITUDE → présent simple : « Siempre como a las dos » (je mange toujours à deux heures)."},
    {block:"La ligne du temps : les marqueurs", en:"todos los días", ipa:"/ˈtoðoz loz ˈði.as/", fr:"tous les jours", note:"Habitude → présent simple. Même logique : « todos los sábados » (tous les samedis), « todas las mañanas » (tous les matins)."},
    {block:"La ligne du temps : les marqueurs", en:"normalmente", ipa:"/noɾmalˈmen̪te/", fr:"d'habitude, normalement", note:"Habitude → présent simple : « Normalmente trabajo en casa los lunes »."},
    {block:"La ligne du temps : les marqueurs", en:"ahora", ipa:"/aˈoɾa/", fr:"maintenant", note:"Le « h » est muet : on dit « a-ORA ». Souvent suivi de « estar + gérondif » : « Ahora estoy cocinando »."},
    {block:"La ligne du temps : les marqueurs", en:"ahora mismo", ipa:"/aˈoɾa ˈmizmo/", fr:"en ce moment même, tout de suite", note:"LE marqueur du « en ce moment » : « Ahora mismo estoy hablando por teléfono ». Peut aussi vouloir dire « tout de suite » : « ¡Voy ahora mismo! »."},
    {block:"La ligne du temps : les marqueurs", en:"mañana", ipa:"/maˈɲana/", fr:"demain (ou : le matin)", note:"Marqueur de PROJET → « ir a + infinitif » : « Mañana voy a trabajar ». Attention : « la mañana » = le matin, « mañana por la mañana » = demain matin."},
    {block:"La ligne du temps : les marqueurs", en:"esta tarde", ipa:"/ˈesta ˈtaɾðe/", fr:"cet après-midi, ce soir (avant la nuit)", note:"« La tarde » va du déjeuner jusqu'à la nuit (souvent 20-21 h en Espagne !). « Esta noche » = ce soir tard, cette nuit."},
    {block:"La ligne du temps : les marqueurs", en:"el próximo fin de semana", ipa:"/el ˈpɾoksimo fin de seˈmana/", fr:"le week-end prochain", note:"Projet → « ir a + infinitif » : « El próximo fin de semana vamos a ir a la playa »."},
    {block:"Estar + gérondif (en ce moment)", en:"estoy comiendo", ipa:"/esˈtoi̯ koˈmjen̪do/", fr:"je mange (en ce moment), je suis en train de manger", note:"estar (conjugué) + gérondif. Le français dit simplement « je mange » là où l'espagnol préfère souvent cette forme."},
    {block:"Estar + gérondif (en ce moment)", en:"hablando", ipa:"/aˈβlan̪do/", fr:"en train de parler (gérondif de hablar)", note:"Verbes en -AR → -ANDO : hablar → hablando, trabajar → trabajando, esperar → esperando."},
    {block:"Estar + gérondif (en ce moment)", en:"viviendo", ipa:"/biˈβjen̪do/", fr:"en train de vivre (gérondif de vivir)", note:"Verbes en -ER et -IR → -IENDO : comer → comiendo, vivir → viviendo, escribir → escribiendo."},
    {block:"Estar + gérondif (en ce moment)", en:"leyendo", ipa:"/leˈʝen̪do/", fr:"en train de lire (gérondif de leer)", note:"Irrégulier « orthographique » : un « i » coincé entre deux voyelles devient « y » (le-i-endo → leyendo). Pareil : oír → oyendo, ir → yendo."},
    {block:"Estar + gérondif (en ce moment)", en:"durmiendo", ipa:"/duɾˈmjen̪do/", fr:"en train de dormir (gérondif de dormir)", note:"o → u dans le radical : dormir → durmiendo, morir → muriendo."},
    {block:"Estar + gérondif (en ce moment)", en:"diciendo", ipa:"/diˈθjen̪do/", fr:"en train de dire (gérondif de decir)", note:"e → i dans le radical : decir → diciendo, pedir → pidiendo, servir → sirviendo, repetir → repitiendo."},
    {block:"Ir a + infinitif (bientôt, projet)", en:"voy a", ipa:"/ˈboi̯ a/", fr:"je vais (+ infinitif)", note:"Futur proche = ir (voy, vas, va, vamos, vais, van) + A + infinitif. Le « a » est OBLIGATOIRE : « Voy a comer », jamais « Voy comer »."},
    {block:"Ir a + infinitif (bientôt, projet)", en:"vamos a", ipa:"/ˈbamos a/", fr:"nous allons (+ infinitif) ; allons-y", note:"« Vamos a cenar » = nous allons dîner. Seul, « ¡Vamos! » = allons-y ! On y va !"},
    {block:"Ir a + infinitif (bientôt, projet)", en:"¿Qué vas a hacer?", ipa:"/ke ˈβas a aˈθeɾ/", fr:"Qu'est-ce que tu vas faire ?", note:"LA question des projets. Avec vosotros : « ¿Qué vais a hacer? » (vais sans accent !)."},
    {block:"Au marché (texte T7)", en:"el mercado", ipa:"/el meɾˈkaðo/", fr:"le marché", note:"« Voy al mercado » : a + el = AL (contraction obligatoire, comme « à + le = au »)."},
    {block:"Au marché (texte T7)", en:"el barrio", ipa:"/el ˈbarjo/", fr:"le quartier", note:"Double « rr » roulé fort ! « Mi barrio » = mon quartier."},
    {block:"Au marché (texte T7)", en:"la abuela", ipa:"/la aˈβwela/", fr:"la grand-mère", note:"« El abuelo » = le grand-père ; « los abuelos » = les grands-parents."},
    {block:"Au marché (texte T7)", en:"la fruta", ipa:"/la ˈfɾuta/", fr:"les fruits (collectif)", note:"Singulier collectif : « Compro fruta » = j'achète des fruits. « Una fruta » = un fruit."},
    {block:"Au marché (texte T7)", en:"las verduras", ipa:"/laz βeɾˈðuɾas/", fr:"les légumes", note:"« Verduras de temporada » = légumes de saison. Faux ami : « verdura » n'est pas seulement la verdure, ce sont les légumes en général."},
    {block:"Au marché (texte T7)", en:"el pescado", ipa:"/el pesˈkaðo/", fr:"le poisson (à manger)", note:"Piège : « el pescado » = le poisson dans l'assiette ; « el pez » = le poisson vivant dans l'eau."},
    {block:"Au marché (texte T7)", en:"el vendedor", ipa:"/el bendeˈðoɾ/", fr:"le vendeur", note:"Féminin : « la vendedora ». « El vendedor está hablando con mi abuela »."},
    {block:"Verbes clés (X3)", en:"esperar", ipa:"/espeˈɾaɾ/", fr:"attendre (et aussi : espérer)", note:"« Estoy esperando el autobús » = j'attends le bus (en ce moment)."},
    {block:"Verbes clés (X3)", en:"llover", ipa:"/ʎoˈβeɾ/", fr:"pleuvoir", note:"« Llueve » = il pleut (en général) ; « Está lloviendo » = il pleut (là, maintenant). Pas de sujet en espagnol : jamais « él llueve » !"},
    {block:"Verbes clés (X3)", en:"tomar", ipa:"/toˈmaɾ/", fr:"prendre (un café, un bus…)", note:"« Tomamos un café » = on prend un café. En Espagne, « tomar » s'utilise pour les boissons et les transports."},
    {block:"Verbes clés (X3)", en:"ir", ipa:"/iɾ/", fr:"aller", note:"Irrégulier : voy, vas, va, vamos, vais, van. Il sert deux fois : pour se déplacer (« voy al mercado ») ET pour le futur proche (« voy a comprar »)."}
  ],
  MEM_WORDS: [4,5,8,11,14,25], // ahora mismo, mañana, estoy comiendo, leyendo, voy a, llover

  MINI_CHECKS: [
    { q:"Ahora mismo mi hermano ___ la tele.", opts:["ve siempre","está viendo","va a ver mañana"], correct:1, fb:"« Ahora mismo » = en ce moment → estar + gérondif : « está viendo »." },
    { q:"Quel est le gérondif de « leer » ?", opts:["leiendo","leendo","leyendo"], correct:2, fb:"Le « i » entre deux voyelles devient « y » : leyendo." },
    { q:"« Nous allons manger au restaurant. »", opts:["Vamos comer al restaurante.","Vamos a comer al restaurante.","Estamos yendo a comer al restaurante."], correct:1, fb:"Futur proche = ir + A + infinitif : « Vamos a comer »." },
    { q:"Todos los días ___ a las siete.", opts:["me levanto","me estoy levantando","me voy a levantar"], correct:0, fb:"« Todos los días » = habitude → présent simple : « me levanto »." }
  ],

  ROUNDS: [
    { bank:["haciendo","¿","estás","ahora","Qué","?"], answer:"¿ qué estás haciendo ahora ?", display:"¿Qué estás haciendo ahora?", fr:"Qu'est-ce que tu fais en ce moment ?" },
    { bank:["libro","leyendo","un","Estoy","interesante","muy","."], answer:"estoy leyendo un libro muy interesante .", display:"Estoy leyendo un libro muy interesante.", fr:"Je lis un livre très intéressant (en ce moment)." },
    { bank:["sofá","abuela","el","durmiendo","Mi","en","está","."], answer:"mi abuela está durmiendo en el sofá .", display:"Mi abuela está durmiendo en el sofá.", fr:"Ma grand-mère dort sur le canapé." },
    { bank:["fruta","a","voy","Mañana","el","comprar","mercado","en","."], answer:"mañana voy a comprar fruta en el mercado .", display:"Mañana voy a comprar fruta en el mercado.", fr:"Demain, je vais acheter des fruits au marché." },
    { bank:["semana","vais","de","¿","hacer","Qué","fin","a","este","?"], answer:"¿ qué vais a hacer este fin de semana ?", display:"¿Qué vais a hacer este fin de semana?", fr:"Qu'est-ce que vous allez faire ce week-end ?" },
    { bank:["dos","comemos","la","Siempre","las","a","de","tarde","."], answer:"siempre comemos a las dos de la tarde .", display:"Siempre comemos a las dos de la tarde.", fr:"Nous mangeons toujours à deux heures de l'après-midi." },
    { bank:["mismo","lloviendo","Ahora","mucho","está","."], answer:"ahora mismo está lloviendo mucho .", display:"Ahora mismo está lloviendo mucho.", fr:"En ce moment, il pleut beaucoup." },
    { bank:["parque","Los","jugando","el","niños","en","están","."], answer:"los niños están jugando en el parque .", display:"Los niños están jugando en el parque.", fr:"Les enfants jouent au parc (en ce moment)." },
    { bank:["un","tomar","a","café","Vamos","juntos","."], answer:"vamos a tomar un café juntos .", display:"Vamos a tomar un café juntos.", fr:"Nous allons prendre un café ensemble." },
    { bank:["tarde","llegar","¡","a","Vamos","!"], answer:"¡ vamos a llegar tarde !", display:"¡Vamos a llegar tarde!", fr:"On va arriver en retard !" }
  ],

  QUIZ: [
    { cat:"ecrit", q:"Siempre ___ café con leche por la mañana.", opts:["estoy tomando","tomo","voy a tomar"], correct:1, why:"« Siempre » = habitude → présent simple : « tomo »." },
    { cat:"ecrit", q:"— ¿Puedes hablar? — No, ahora mismo ___.", opts:["estoy trabajando","trabajo siempre","voy a trabajar"], correct:0, why:"« Ahora mismo » = en ce moment → estar + gérondif : « estoy trabajando »." },
    { cat:"ecrit", q:"El próximo fin de semana ___ a mis padres.", opts:["estoy visitando","visito siempre","voy a visitar"], correct:2, why:"Projet (« el próximo fin de semana ») → ir a + infinitif : « voy a visitar »." },
    { cat:"ecrit", q:"Quel est le gérondif de « dormir » ?", opts:["dormiendo","durmiendo","dormindo"], correct:1, why:"o → u : dormir → durmiendo (comme morir → muriendo)." },
    { cat:"ecrit", q:"Quel est le gérondif de « decir » ?", opts:["deciendo","diciendo","dicendo"], correct:1, why:"e → i : decir → diciendo (comme pedir → pidiendo)." },
    { cat:"ecrit", q:"Vosotros ___ a cenar en casa de Marta.", opts:["váis","vais","vaís"], correct:1, why:"« Vais » s'écrit SANS accent : c'est un mot d'une seule syllabe (comme « vas », « va »)." },
    { cat:"ecrit", q:"Quelle phrase est correcte pour « Demain, je vais manger avec Ana » ?", opts:["Mañana estoy yendo a comer con Ana.","Mañana voy comer con Ana.","Mañana voy a comer con Ana."], correct:2, why:"Futur proche = ir + A + infinitif. « Estoy yendo » décrit un trajet en cours, pas un projet." },
    { cat:"ecrit", q:"Les enfants ___ en el jardín ahora.", opts:["están jugando","son jugando","tienen jugando"], correct:0, why:"C'est ESTAR (état du moment) qui accompagne le gérondif, jamais ser ni tener." },
    { cat:"ecrit", q:"« Il pleut ! » (là, maintenant)", opts:["¡Él llueve!","¡Está lloviendo!","¡Es lloviendo!"], correct:1, why:"« Está lloviendo » : estar + gérondif, et pas de sujet devant les verbes de météo." },
    { cat:"ecrit", q:"« Je suis en train de me doucher. » Quelle forme est correcte ?", opts:["Estoy me duchando.","Me estoy duchando.","Me estoy duchandome."], correct:1, why:"Le pronom va AVANT estar (« me estoy duchando ») ou COLLÉ au gérondif avec accent (« estoy duchándome »), jamais au milieu." },
    { cat:"oral", audio:"Ahora mismo estoy esperando el autobús.", q:"Écoute : que fait la personne ?", opts:["Elle prend le bus tous les jours","Elle attend le bus en ce moment","Elle va prendre le bus demain","Elle rate le bus"], correct:1, why:"« Ahora mismo estoy esperando » = en ce moment, j'attends." },
    { cat:"oral", audio:"Esta tarde vamos a hacer una tortilla de patatas.", q:"Écoute : quand vont-ils faire la tortilla ?", opts:["Tous les jours","En ce moment","Hier soir","Cet après-midi"], correct:3, why:"« Esta tarde vamos a hacer » = cet après-midi, nous allons faire (projet)." },
    { cat:"oral", audio:"Todos los sábados voy al mercado con mi abuela.", q:"Écoute : de quoi parle la personne ?", opts:["D'une habitude","D'un projet pour demain","De ce qu'elle fait en ce moment","D'un souvenir"], correct:0, why:"« Todos los sábados » + présent simple = une habitude." },
    { cat:"oral", audio:"¿Qué vais a hacer este verano?", q:"Écoute : que demande la personne ?", opts:["Ce que tu fais maintenant","Ce que vous allez faire cet été","Où vous étiez cet été","Ce que vous faites tous les étés"], correct:1, why:"« ¿Qué vais a hacer? » = qu'est-ce que VOUS allez faire (vosotros) ; « este verano » = cet été." },
    { cat:"comprehension", passage:"“— ¡Hola, Marta! ¿Qué estás haciendo? — Estoy cocinando. Mis padres van a venir a cenar esta noche. — ¡Qué bien! ¿Y qué vas a preparar? — Una paella, como siempre.”", q:"Que fait Marta au moment de l'appel ?", opts:["Elle dîne avec ses parents","Elle fait la cuisine","Elle fait les courses","Elle attend ses parents à la gare"], correct:1, why:"« Estoy cocinando » = je suis en train de cuisiner. Ses parents « van a venir » (plus tard)." },
    { cat:"comprehension", passage:"“Normalmente trabajo en la oficina, pero hoy estoy trabajando en casa porque está lloviendo mucho. Mañana voy a volver a la oficina.”", q:"Où la personne travaille-t-elle aujourd'hui ?", opts:["À la maison","Au bureau","Dans un café","Elle ne travaille pas"], correct:0, why:"« Hoy estoy trabajando en casa » = aujourd'hui, je travaille à la maison ; d'habitude (« normalmente »), au bureau." },
    { cat:"comprehension", passage:"“(rappel) Mi hermano es profesor y vive en Sevilla. Hoy está muy cansado porque tiene mucho trabajo.”", q:"Pourquoi dit-on « es profesor » mais « está cansado » ?", opts:["Profesor = métier (ser) ; cansado = état du moment (estar)","Les deux sont interchangeables","Profesor est féminin","Cansado est un métier"], correct:0, why:"SER pour le métier, l'identité ; ESTAR pour un état passager (rappel A1 : ser / estar)." },
    { cat:"comprehension", passage:"“(rappel) Me llamo Lucía. Me levanto a las siete, me ducho y desayuno con mi hija. Tenemos un perro que se llama Rayo.”", q:"Que fait Lucía juste après s'être levée ?", opts:["Elle promène le chien","Elle prend le petit-déjeuner seule","Elle se douche","Elle part au travail"], correct:2, why:"« Me levanto…, me ducho » : elle se lève puis se douche (rappel : verbes pronominaux au présent, me levanto / me ducho)." }
  ],

  PRON_VERBS: [
    {en:"Estoy leyendo en el jardín.", fr:"Je lis dans le jardin. (« ll/y » de leyendo, jota de jardín : un « r » raclé au fond de la gorge)"},
    {en:"Está lloviendo en la calle.", fr:"Il pleut dans la rue. (« ll » = « y » : yo-BIEN-do ; « v » = « b »)"},
    {en:"El perro está corriendo por el barrio.", fr:"Le chien court dans le quartier. (« rr » bien roulé, trois fois !)"},
    {en:"Mañana vamos a la montaña.", fr:"Demain, nous allons à la montagne. (« ñ » = « gn » de montagne)"},
    {en:"¿Qué estás haciendo? — Estoy cocinando.", fr:"Qu'est-ce que tu fais ? — Je cuisine. (« ci » = son « th » anglais en Espagne : a-THYEN-do, co-thi-NAN-do)"},
    {en:"Voy a ver a mi abuela.", fr:"Je vais voir ma grand-mère. (« v » se prononce « b » : BOY a BER)"},
    {en:"Mi hijo está durmiendo.", fr:"Mon fils dort. (« h » muet, « j » = jota : I-ho ; accent tonique sur MIEN)"},
    {en:"Vais a comer juntos.", fr:"Vous allez manger ensemble. (« vais » = BAÏS, une seule syllabe ; jota de juntos)"}
  ],

  READING: [
    "Es sábado por la mañana y Lucía está en casa.",
    "Normalmente los sábados va al mercado con su hijo, pero hoy está lloviendo mucho.",
    "Ahora mismo está tomando un café en la cocina y está leyendo el periódico.",
    "Su hijo Pablo todavía está durmiendo en su habitación.",
    "De repente suena el teléfono: es su hermana Marta.",
    "« ¿Qué estás haciendo? », pregunta Marta. « Nada especial, estoy descansando », responde Lucía.",
    "« Esta tarde voy a ir al cine con unas amigas. ¿Quieres venir? »",
    "Lucía dice que sí: primero va a despertar a Pablo y después van a comer juntos.",
    "Mañana, si no llueve, van a ir todos al mercado del barrio.",
    "Así es la vida de Lucía: una rutina tranquila, un presente tranquilo y muchos proyectos."
  ],
  GLOSS: [
    {en:"el periódico", fr:"le journal"},
    {en:"de repente", fr:"soudain, tout à coup"},
    {en:"sonar (suena)", fr:"sonner (il sonne)"},
    {en:"descansar", fr:"se reposer"},
    {en:"despertar a alguien", fr:"réveiller quelqu'un"}
  ],

  GRAMMAR1: {
    heading: "La ligne du temps : habitude, en ce moment, bientôt",
    lede: "Imagine une ligne. Tout le long de la ligne : l'HABITUDE (siempre, todos los días) → como. Un point au milieu : EN CE MOMENT (ahora, ahora mismo) → estoy comiendo. Une flèche vers la droite : BIENTÔT / PROJET (mañana, esta tarde) → voy a comer. Trois cases, trois formes, un indice à chaque fois. Garde cette ligne en tête : on la complètera avec le passé (X4, X5) et le futur (X6).",
    conj: [
      ["HABITUDE — siempre, todos los días, normalmente","como (présent simple)","Siempre como a las dos."],
      ["EN CE MOMENT — ahora, ahora mismo, en este momento","estoy comiendo (estar + gérondif)","Ahora mismo estoy comiendo, te llamo luego."],
      ["BIENTÔT / PROJET — mañana, esta tarde, el próximo…","voy a comer (ir a + infinitif)","Mañana voy a comer con Ana."],
      ["Le gérondif régulier","-AR → -ANDO · -ER / -IR → -IENDO","hablar → hablando · comer → comiendo · vivir → viviendo"],
      ["Les gérondifs « déguisés »","i → y · o → u · e → i","leer → leyendo · dormir → durmiendo · decir → diciendo · pedir → pidiendo"]
    ],
    ruleHtml: "📖 <b>Estar + gérondif</b> = ce qui se passe <b>maintenant, sous tes yeux</b>. On conjugue seulement <b>estar</b> : <b>estoy, estás, está, estamos, estáis, están</b> ; le gérondif, lui, ne bouge jamais (pas de féminin, pas de pluriel) : « Mis hermanas <b>están hablando</b> ». Pour fabriquer le gérondif : on enlève -AR / -ER / -IR et on ajoute <b>-ando</b> (verbes en -ar) ou <b>-iendo</b> (verbes en -er et -ir). Les pronoms se mettent <b>avant estar</b> (« <b>me</b> estoy duchando ») ou <b>collés au gérondif</b> avec un accent (« estoy duch<b>á</b>ndo<b>me</b> »).",
    dialogueLede: "Au téléphone, un samedi matin :",
    dialogue: [
      {who:"them", en:"¡Hola! ¿Qué estás haciendo?", fr:"Salut ! Qu'est-ce que tu fais ?"},
      {who:"you", en:"Estoy haciendo la compra en el mercado. Mi abuela está hablando con el vendedor.", fr:"Je fais les courses au marché. Ma grand-mère parle avec le vendeur."}
    ],
    whyLabel: "Pourquoi l'espagnol dit « estoy comiendo » là où le français dit « je mange » ?",
    whyText: "En français, « je suis en train de manger » est long et lourd : on le garde pour insister. En espagnol, <b>estar + gérondif</b> est court, léger et très naturel à l'oral : c'est la façon normale de dire « là, maintenant ». Et le choix d'<b>estar</b> n'est pas un hasard : estar, c'est le verbe de l'<b>état passager</b> (« estoy cansada »). Une action en cours, c'est aussi un état passager ! Image mentale : le présent simple est une <b>photo de ta vie</b> (ce que tu fais d'habitude), estar + gérondif est une <b>vidéo en direct</b>. Attention au piège inverse : pour une habitude, pas de gérondif. « Todos los días <b>me estoy levantando</b> a las siete » sonne faux ; on dit « todos los días <b>me levanto</b> »."
  },
  GRAMMAR2: {
    heading: "« Ir a + infinitif » : le futur proche (ce qu'on VA faire)",
    dialogueLede: "Entre amies, le vendredi soir :",
    dialogue: [
      {who:"them", en:"¿Qué vais a hacer mañana, tú y tu hijo?", fr:"Qu'est-ce que vous allez faire demain, toi et ton fils ?"},
      {who:"you", en:"Vamos a ir al mercado y después vamos a hacer una tortilla.", fr:"On va aller au marché et après, on va faire une tortilla."}
    ],
    ruleHtml: "💭 Exactement comme en français « je <b>vais</b> manger » : <b>ir</b> au présent + <b>a</b> + infinitif. <b>voy a</b> · <b>vas a</b> · <b>va a</b> · <b>vamos a</b> · <b>vais a</b> · <b>van a</b> + comer. Le petit <b>a</b> est obligatoire (« Voy <b>a</b> comer », jamais « Voy comer »). Et <b>vais</b> s'écrit sans accent (une seule syllabe, comme vas, va) : « váis » est une faute fréquente. Bonus : avec un marqueur de futur, le simple présent marche aussi, comme en français : « <b>Mañana trabajo</b> » = demain, je travaille.",
    whyLabel: "Le piège « estoy yendo a comer »",
    whyText: "Comme « je suis en train de » n'existe pas au futur, certains francophones fabriquent « <b>estoy yendo a comer</b> » pour dire « je vais manger ». C'est faux dans ce sens : « estoy yendo » veut dire « je suis en route, je suis en train d'y aller ». Pour un projet, on dit simplement <b>voy a comer</b>. Et ne confonds pas les deux « ir » : « <b>voy al</b> mercado » = je me déplace (ir + lieu) ; « <b>voy a</b> comprar » = futur proche (ir + a + infinitif). Petit truc : s'il y a un <b>infinitif</b> juste après « a », c'est le futur proche."
  },

  REVIEW: [
    { q:"« Je suis fatiguée aujourd'hui. »", opts:["Hoy soy cansada.","Hoy estoy cansada."], correct:1, fb:"Un état passager → ESTAR : « estoy cansada ». (rappel A1 : ser / estar)" },
    { q:"« Madrid ___ en España. »", opts:["es","está"], correct:1, fb:"La localisation → ESTAR : « Madrid está en España ». (rappel A1 : ser / estar)" },
    { q:"« J'ai 30 ans. »", opts:["Tengo treinta años.","Soy treinta años."], correct:0, fb:"L'âge se dit avec TENER : « tengo treinta años ». (rappel A1 : tener)" },
    { q:"« Je me lève à sept heures. »", opts:["Levanto a las siete.","Me levanto a las siete."], correct:1, fb:"Verbe pronominal : levantarSE → ME levanto. (rappel : verbes pronominaux)" },
    { q:"« Nous habitons à Valence. »", opts:["Vivimos en Valencia.","Vivemos en Valencia."], correct:0, fb:"Vivir est en -IR : nosotros vivIMOS (comer donne comEMOS). (rappel A1 : présent)" }
  ],

  CULTURE_NOTE: {
    icon: "🌎",
    title: "Note culturelle — « ir a », la star de l'Amérique latine",
    html: "En Amérique latine, le futur proche <b>ir a + infinitif</b> est encore plus utilisé qu'en Espagne : au Mexique ou en Colombie, on dit bien plus souvent « <b>voy a llamarte</b> » que « te llamaré ». Pour « vous » (pluriel), on n'y utilise pas vosotros mais <b>ustedes</b> : « ¿Qué <b>van a</b> hacer? ». Au Mexique, tu entendras aussi « <b>ahorita</b> » : littéralement « tout de suite », mais qui peut vouloir dire… dans un moment, ou plus tard ! Enfin, partout dans le monde hispanique, « <b>¿Qué haces?</b> » ou « <b>¿Qué estás haciendo?</b> » sert aussi de petite formule pour prendre des nouvelles au téléphone."
  },

  NEXT_PREVIEW: "X4 — Le passé (1) : « he comido » ou « comí » ? On prolonge la ligne du temps vers la gauche : le passé composé espagnol (he comido, he hecho, he visto) et le passé simple « du quotidien » (comí, fui, hice, tuve), avec une règle simple pour choisir selon le marqueur de temps (hoy, ya, nunca / ayer, el año pasado).",

  META: { vocabTitle: "Le présent qui bouge (X3)", lectureTitle: "Un samedi pas comme les autres", bilanTitle: "Bravo ! Tu sais maintenant dire ce que tu fais d'habitude, en ce moment et bientôt.", pronLabel: "Gérondifs et futur proche (jota, rr, ll, ñ, v = b)", todayLede: "placer tes actions sur la ligne du temps : habitude (como), en ce moment (estoy comiendo), bientôt ou projet (voy a comer) — et choisir la bonne forme grâce à un simple indice (siempre / ahora mismo / mañana)" },

  DRILLS: [
    { type:"choice", q:"Siempre ___ café por la mañana.", opts:["tomo","estoy tomando","voy a tomar"], correct:0, why:"« Siempre » = habitude → présent simple." },
    { type:"choice", q:"Ahora mismo ___ café, te llamo después.", opts:["tomo siempre","estoy tomando","voy a tomar"], correct:1, why:"« Ahora mismo » = en ce moment → estar + gérondif." },
    { type:"choice", q:"Mañana ___ café con mi hermana.", opts:["estoy tomando","voy a tomar","tomaba"], correct:1, why:"« Mañana » = projet → ir a + infinitif." },
    { type:"fill", text:"hablar → ___ (gérondif)", answers:["hablando"], why:"-AR → -ANDO : habl-ando." },
    { type:"fill", text:"comer → ___ (gérondif)", answers:["comiendo"], why:"-ER → -IENDO : com-iendo." },
    { type:"fill", text:"vivir → ___ (gérondif)", answers:["viviendo"], why:"-IR → -IENDO : viv-iendo." },
    { type:"fill", text:"leer → ___ (gérondif)", answers:["leyendo"], why:"Le « i » coincé entre deux voyelles devient « y » : leyendo." },
    { type:"fill", text:"dormir → ___ (gérondif)", answers:["durmiendo"], why:"o → u : durmiendo." },
    { type:"fill", text:"decir → ___ (gérondif)", answers:["diciendo"], why:"e → i : diciendo." },
    { type:"fill", text:"Ahora mismo yo ___ (estudiar) español.", answers:["estoy estudiando"], why:"estar (yo → estoy) + gérondif en -ando." },
    { type:"fill", text:"Mis padres ___ (ver) la tele en este momento.", answers:["están viendo"], why:"estar (ellos → están) + ver → viendo." },
    { type:"fill", text:"¿Qué ___ (hacer, tú) ahora?", answers:["estás haciendo"], why:"estar (tú → estás) + hacer → haciendo." },
    { type:"fill", text:"Ahora mismo nosotros ___ (escribir) un correo a la profesora.", answers:["estamos escribiendo"], why:"estar (nosotros → estamos) + escribir → escribiendo." },
    { type:"fill", text:"No hagas ruido, el bebé ___ (dormir).", answers:["está durmiendo"], why:"Action en cours → está + durmiendo (o → u)." },
    { type:"fill", text:"El cliente ___ (pedir) la cuenta ahora mismo.", answers:["está pidiendo"], why:"pedir → pidiendo (e → i), avec estar à la 3e personne : está." },
    { type:"choice", q:"Futur proche avec vosotros : « Vosotros ___ a comer aquí. »", opts:["váis","vais","vaís"], correct:1, why:"« Vais » : une seule syllabe, donc pas d'accent écrit (comme vas, va, van)." },
    { type:"fill", text:"Mañana yo ___ (ir a + visitar) a mi abuela.", answers:["voy a visitar"], why:"ir (yo → voy) + a + infinitif." },
    { type:"fill", text:"¿Qué ___ (ir a + hacer, vosotros) el sábado?", answers:["vais a hacer"], why:"ir (vosotros → vais, sans accent) + a + hacer." },
    { type:"fill", text:"Esta tarde nosotros ___ (ir a + comprar) pescado.", answers:["vamos a comprar"], why:"ir (nosotros → vamos) + a + comprar." },
    { type:"fill", text:"Mis amigos ___ (ir a + venir) a cenar esta noche.", answers:["van a venir"], why:"ir (ellos → van) + a + venir." },
    { type:"fill", text:"¿Tú ___ (ir a + estudiar) esta noche?", answers:["vas a estudiar"], why:"ir (tú → vas) + a + estudiar." },
    { type:"choice", q:"Laquelle est correcte ?", opts:["Voy comer paella.","Voy a comer paella.","Voy de comer paella."], correct:1, why:"Le « a » entre ir et l'infinitif est obligatoire : « voy a comer »." },
    { type:"choice", q:"Repère l'erreur : « Mañana estoy yendo a comer con Ana. »", opts:["Aucune erreur","Il faut « Mañana voy a comer con Ana. »","Il faut « Mañana estoy comiendo con Ana. »"], correct:1, why:"Pour un projet : ir a + infinitif. « Estoy yendo » = je suis en route (maintenant)." },
    { type:"choice", q:"« Tous les jours, je me lève à sept heures. »", opts:["Todos los días me estoy levantando a las siete.","Todos los días me levanto a las siete.","Todos los días voy a levantarme a las siete."], correct:1, why:"Habitude → présent simple, pas de gérondif." },
    { type:"choice", q:"« Mañana trabajo. » Cette phrase est…", opts:["fausse : il faut obligatoirement « voy a trabajar »","correcte : avec un marqueur de futur, le présent suffit, comme « demain, je travaille »"], correct:1, why:"Comme en français, le présent + un marqueur (mañana) peut exprimer le futur. « Voy a trabajar » est correct aussi." },
    { type:"fill", text:"Transforme en « en ce moment » : Leo el periódico. → Ahora mismo ___ el periódico.", answers:["estoy leyendo"], why:"leo → estoy leyendo (i → y)." },
    { type:"fill", text:"Transforme en projet : Como con mis padres. → Mañana ___ con mis padres.", answers:["voy a comer"], why:"Projet → voy a + infinitif." },
    { type:"fill", text:"Transforme en habitude : Estoy trabajando en casa. → Todos los lunes ___ en casa.", answers:["trabajo"], why:"Habitude (todos los lunes) → présent simple : trabajo." },
    { type:"fill", text:"Traduis « Regarde, il pleut ! » → ¡Mira, ___!", answers:["está lloviendo"], why:"En ce moment → está lloviendo. Pas de sujet pour la météo." },
    { type:"fill", text:"Traduis « Je vais t'appeler ce soir. » → Esta noche ___.", answers:["te voy a llamar","voy a llamarte"], why:"Le pronom va avant « voy » (te voy a llamar) ou collé à l'infinitif (voy a llamarte)." },
    { type:"fill", text:"Traduis « Ne me dérange pas, je suis en train de me doucher. » → No me molestes, ___.", answers:["me estoy duchando","estoy duchándome"], why:"Pronom avant estar, ou collé au gérondif avec un accent : duchándome." },
    { type:"fill", text:"— ¿Dónde está Pablo? — ___ (hablar) por teléfono en su habitación.", answers:["está hablando","Está hablando"], why:"Il est en train de parler → está + hablando." },
    { type:"choice", q:"— ¿Qué vas a hacer en verano? — ___", opts:["Voy a viajar a México.","Estoy viajando a México siempre.","Viajo a México ahora mismo."], correct:0, why:"On répond avec la même forme que la question : un projet → voy a + infinitif." }
  ],

  ANNOTATED: {
    title: "El mercado del barrio",
    intro: "Le texte d'Ashley (T7), avec trois phrases ajoutées pour voir la ligne du temps en action. Touche chaque mot pour voir ce que c'est.",
    sentences: [
      { fr: "Tous les samedis matin, je vais au marché traditionnel de mon quartier avec ma grand-mère.",
        tokens: [
          { w:"Todos los sábados", tag:"adverbe", info:"locution de temps · habitude", fr:"tous les samedis", tip:"Marqueur d'HABITUDE → présent simple." },
          { w:"por la mañana", tag:"adverbe", info:"locution de temps", fr:"le matin" },
          { w:"voy", tag:"verbe", info:"ir · présent · yo (je)", fr:"je vais", tip:"Ici « voy » = se déplacer (ir + lieu), pas le futur proche : il n'y a pas d'infinitif derrière." },
          { w:"al", tag:"préposition", info:"a + el (contraction)", fr:"au" },
          { w:"mercado", tag:"nom", info:"masc. sing.", fr:"marché" },
          { w:"tradicional", tag:"adjectif", info:"masc. sing. (même forme au féminin)", fr:"traditionnel" },
          { w:"de", tag:"préposition", fr:"de" },
          { w:"mi", tag:"déterminant", info:"possessif · sing.", fr:"mon" },
          { w:"barrio", tag:"nom", info:"masc. sing.", fr:"quartier" },
          { w:"con", tag:"préposition", fr:"avec" },
          { w:"mi", tag:"déterminant", info:"possessif · sing.", fr:"ma" },
          { w:"abuela", tag:"nom", info:"fém. sing.", fr:"grand-mère" }
        ] },
      { fr: "Nous achetons des fruits frais, des légumes de saison, du poisson et un peu de fromage local.",
        tokens: [
          { w:"Compramos", tag:"verbe", info:"comprar · présent · nosotros (nous)", fr:"nous achetons", tip:"Pas besoin de « nosotros » : la terminaison -amos suffit." },
          { w:"fruta", tag:"nom", info:"fém. sing. (collectif)", fr:"des fruits", tip:"Singulier en espagnol, pluriel en français." },
          { w:"fresca", tag:"adjectif", info:"fém. sing.", fr:"frais" },
          { w:"verduras", tag:"nom", info:"fém. plur.", fr:"des légumes" },
          { w:"de temporada", tag:"adjectif", info:"locution (invariable)", fr:"de saison" },
          { w:"pescado", tag:"nom", info:"masc. sing.", fr:"du poisson", tip:"Pas d'article « du » en espagnol : on dit juste « pescado »." },
          { w:"y", tag:"conjonction", fr:"et" },
          { w:"un poco de", tag:"déterminant", info:"quantité", fr:"un peu de" },
          { w:"queso", tag:"nom", info:"masc. sing.", fr:"fromage" },
          { w:"local", tag:"adjectif", info:"masc. sing.", fr:"local" }
        ] },
      { fr: "J'aime beaucoup y aller parce que les vendeurs sont très aimables.",
        tokens: [
          { w:"Me", tag:"pronom COI", fr:"à moi", tip:"« Me gusta » = mot à mot « ça me plaît »." },
          { w:"gusta", tag:"verbe", info:"gustar · présent · 3e pers. sing.", fr:"plaît", tip:"Le sujet de « gusta » est « ir allí » (aller là-bas)." },
          { w:"mucho", tag:"adverbe", fr:"beaucoup" },
          { w:"ir", tag:"verbe", info:"ir · infinitif", fr:"aller" },
          { w:"allí", tag:"adverbe", fr:"là-bas (y)" },
          { w:"porque", tag:"conjonction", fr:"parce que", tip:"En un seul mot ; « ¿por qué? » (en deux mots, avec accent) = pourquoi ?" },
          { w:"los", tag:"article", info:"masc. plur.", fr:"les" },
          { w:"vendedores", tag:"nom", info:"masc. plur.", fr:"vendeurs" },
          { w:"son", tag:"verbe", info:"ser · présent · ellos (ils)", fr:"sont", tip:"SER : une qualité, un caractère." },
          { w:"muy", tag:"adverbe", fr:"très" },
          { w:"amables", tag:"adjectif", info:"masc. plur.", fr:"aimables" }
        ] },
      { fr: "Les produits sont de meilleure qualité qu'au supermarché.",
        tokens: [
          { w:"Los", tag:"article", info:"masc. plur.", fr:"les" },
          { w:"productos", tag:"nom", info:"masc. plur.", fr:"produits" },
          { w:"son", tag:"verbe", info:"ser · présent · ellos (ils)", fr:"sont" },
          { w:"de", tag:"préposition", fr:"de" },
          { w:"mejor", tag:"adjectif", info:"comparatif de « bueno » · sing.", fr:"meilleure" },
          { w:"calidad", tag:"nom", info:"fém. sing.", fr:"qualité" },
          { w:"que", tag:"conjonction", fr:"que" },
          { w:"en", tag:"préposition", fr:"à, dans" },
          { w:"el", tag:"article", info:"masc. sing.", fr:"le" },
          { w:"supermercado", tag:"nom", info:"masc. sing.", fr:"supermarché" }
        ] },
      { fr: "En plus, nous prenons toujours un café ensemble après les courses.",
        tokens: [
          { w:"Además", tag:"adverbe", fr:"en plus" },
          { w:"siempre", tag:"adverbe", fr:"toujours", tip:"Marqueur d'HABITUDE → présent simple (tomamos), pas de gérondif." },
          { w:"tomamos", tag:"verbe", info:"tomar · présent · nosotros (nous)", fr:"nous prenons" },
          { w:"un", tag:"article", info:"masc. sing.", fr:"un" },
          { w:"café", tag:"nom", info:"masc. sing.", fr:"café" },
          { w:"juntos", tag:"adjectif", info:"masc. plur.", fr:"ensemble", tip:"S'accorde : « juntas » si ce sont deux femmes." },
          { w:"después de", tag:"préposition", fr:"après" },
          { w:"comprar", tag:"verbe", info:"comprar · infinitif", fr:"faire les courses (acheter)", tip:"Après une préposition : toujours l'infinitif." }
        ] },
      { fr: "Aujourd'hui, c'est samedi et, en ce moment même, nous attendons dans la file de la fruiterie.",
        tokens: [
          { w:"Hoy", tag:"adverbe", fr:"aujourd'hui" },
          { w:"es", tag:"verbe", info:"ser · présent · 3e pers. sing.", fr:"c'est", tip:"La date et le jour se disent avec SER." },
          { w:"sábado", tag:"nom", info:"masc. sing.", fr:"samedi" },
          { w:"y", tag:"conjonction", fr:"et" },
          { w:"ahora mismo", tag:"adverbe", fr:"en ce moment même", tip:"Marqueur du EN CE MOMENT → estar + gérondif." },
          { w:"estamos", tag:"auxiliaire", info:"estar · présent · nosotros (nous)", fr:"nous sommes (en train de)" },
          { w:"esperando", tag:"verbe", info:"esperar · gérondif", fr:"attendre (en train d'attendre)", tip:"-AR → -ANDO : esper-ando. Le gérondif ne s'accorde jamais." },
          { w:"en", tag:"préposition", fr:"dans" },
          { w:"la", tag:"article", info:"fém. sing.", fr:"la" },
          { w:"cola", tag:"nom", info:"fém. sing.", fr:"file d'attente" },
          { w:"de", tag:"préposition", fr:"de" },
          { w:"la", tag:"article", info:"fém. sing.", fr:"la" },
          { w:"frutería", tag:"nom", info:"fém. sing.", fr:"fruiterie (stand de fruits)" }
        ] },
      { fr: "Ma grand-mère est en train de parler avec le vendeur.",
        tokens: [
          { w:"Mi", tag:"déterminant", info:"possessif · sing.", fr:"ma" },
          { w:"abuela", tag:"nom", info:"fém. sing.", fr:"grand-mère" },
          { w:"está", tag:"auxiliaire", info:"estar · présent · ella (elle)", fr:"est (en train de)" },
          { w:"hablando", tag:"verbe", info:"hablar · gérondif", fr:"parler (en train de parler)", tip:"En français on dirait souvent juste « elle parle »." },
          { w:"con", tag:"préposition", fr:"avec" },
          { w:"el", tag:"article", info:"masc. sing.", fr:"le" },
          { w:"vendedor", tag:"nom", info:"masc. sing.", fr:"vendeur" }
        ] },
      { fr: "Cet après-midi, nous allons faire une tortilla de pommes de terre.",
        tokens: [
          { w:"Esta", tag:"déterminant", info:"démonstratif · fém. sing.", fr:"cet" },
          { w:"tarde", tag:"nom", info:"fém. sing.", fr:"après-midi" },
          { w:"vamos", tag:"verbe", info:"ir · présent · nosotros (nous)", fr:"nous allons", tip:"Suivi de « a + infinitif » → FUTUR PROCHE (projet)." },
          { w:"a", tag:"préposition", fr:"(à)", tip:"Le petit « a » obligatoire du futur proche." },
          { w:"hacer", tag:"verbe", info:"hacer · infinitif", fr:"faire" },
          { w:"una", tag:"article", info:"fém. sing.", fr:"une" },
          { w:"tortilla de patatas", tag:"nom", info:"fém. sing.", fr:"tortilla (omelette aux pommes de terre)" }
        ] }
    ],
    questions: [
      { q:"Dans la phrase 1, pourquoi « voy al mercado » n'est-il PAS un futur proche ?", opts:["Parce que « voy » est suivi d'un lieu (al mercado), pas de « a + infinitif »","Parce que la phrase est au passé","Parce que « voy » vient du verbe ser"], correct:0, why:"ir + lieu = se déplacer ; ir + a + infinitif = futur proche." },
      { q:"Quel mot annonce « estamos esperando » dans la phrase 6 ?", opts:["Todos los sábados","ahora mismo","esta tarde"], correct:1, why:"« Ahora mismo » = en ce moment → estar + gérondif." },
      { q:"Pourquoi « tomamos » et pas « estamos tomando » dans la phrase 5 ?", opts:["Parce que tomar est irrégulier","À cause de « siempre » : une habitude → présent simple","Parce que c'est un projet"], correct:1, why:"Habitude → présent simple." },
      { q:"« Vamos a hacer una tortilla » : quand vont-ils la faire ?", opts:["Tous les samedis","En ce moment","Cet après-midi (projet)"], correct:2, why:"« Esta tarde » + ir a + infinitif = projet proche." }
    ]
  }
};

// X4 — Le passé (1) : « he comido » ou « comí » ? pretérito perfecto vs pretérito indefinido — prolonge la ligne du temps de X3 ; texte légendé = T2 d'Ashley (Mis últimas vacaciones en Sevilla), coquille « mucha calor » corrigée
LESSONS_ES[304] = {
  code: "X4", level: "A2",
  VOCAB: [
    {block:"Marqueurs du « he comido » (période pas finie)", en:"hoy", ipa:"/oi̯/", fr:"aujourd'hui", note:"La journée n'est pas finie → perfecto (en Espagne) : « Hoy he comido en casa »."},
    {block:"Marqueurs du « he comido » (période pas finie)", en:"esta semana", ipa:"/ˈesta seˈmana/", fr:"cette semaine", note:"Même logique pour « esta mañana », « este mes », « este año » : la période est encore ouverte → « Esta semana he trabajado mucho »."},
    {block:"Marqueurs du « he comido » (période pas finie)", en:"ya", ipa:"/ʝa/", fr:"déjà", note:"« ¿Ya has comido? » = tu as déjà mangé ? On pense au résultat MAINTENANT → perfecto."},
    {block:"Marqueurs du « he comido » (période pas finie)", en:"todavía no", ipa:"/toðaˈβi.a no/", fr:"pas encore", note:"« Todavía no he terminado » = je n'ai pas encore fini. Le « no » se place avant « he »."},
    {block:"Marqueurs du « he comido » (période pas finie)", en:"nunca", ipa:"/ˈnuŋka/", fr:"jamais", note:"Expérience de toute une vie (pas finie !) → « Nunca he estado en México »."},
    {block:"Marqueurs du « he comido » (période pas finie)", en:"alguna vez", ipa:"/alˈɣuna βeθ/", fr:"déjà (une fois), déjà dans ta vie", note:"« ¿Has estado alguna vez en Sevilla? » = es-tu déjà allé(e) à Séville ?"},
    {block:"Marqueurs du « comí » (moment fini, daté)", en:"ayer", ipa:"/aˈʝeɾ/", fr:"hier", note:"Hier est terminé → indéfini : « Ayer comí paella »."},
    {block:"Marqueurs du « comí » (moment fini, daté)", en:"anoche", ipa:"/aˈnot͡ʃe/", fr:"hier soir, cette nuit (passée)", note:"Un seul mot ! « Anoche no dormí bien » = cette nuit, je n'ai pas bien dormi."},
    {block:"Marqueurs du « comí » (moment fini, daté)", en:"el año pasado", ipa:"/el ˈaɲo paˈsaðo/", fr:"l'année dernière", note:"« pasado » = dernier, passé : « el lunes pasado », « el verano pasado », « la semana pasada »."},
    {block:"Marqueurs du « comí » (moment fini, daté)", en:"hace dos días", ipa:"/ˈaθe ðos ˈði.as/", fr:"il y a deux jours", note:"« Hace » + durée = « il y a » : « hace un mes », « hace tres años ». Moment daté → indéfini."},
    {block:"Marqueurs du « comí » (moment fini, daté)", en:"el otro día", ipa:"/el ˈotɾo ˈði.a/", fr:"l'autre jour", note:"« El otro día vi a Carmen en el mercado » = l'autre jour, j'ai vu Carmen au marché."},
    {block:"Participes irréguliers (he…)", en:"hecho", ipa:"/ˈet͡ʃo/", fr:"fait (hacer)", note:"« ¿Qué has hecho hoy? » = qu'est-ce que tu as fait aujourd'hui ? Sans « h » prononcé : É-tcho."},
    {block:"Participes irréguliers (he…)", en:"dicho", ipa:"/ˈdit͡ʃo/", fr:"dit (decir)", note:"« Me lo ha dicho Ana » = c'est Ana qui me l'a dit."},
    {block:"Participes irréguliers (he…)", en:"visto", ipa:"/ˈbisto/", fr:"vu (ver)", note:"« Nunca he visto el mar » = je n'ai jamais vu la mer."},
    {block:"Participes irréguliers (he…)", en:"escrito", ipa:"/esˈkɾito/", fr:"écrit (escribir)", note:"Proche du français : « He escrito un correo »."},
    {block:"Participes irréguliers (he…)", en:"puesto", ipa:"/ˈpwesto/", fr:"mis (poner)", note:"« ¿Dónde has puesto las llaves? » = où as-tu mis les clés ?"},
    {block:"Participes irréguliers (he…)", en:"vuelto", ipa:"/ˈbwel̪to/", fr:"revenu, rentré (volver)", note:"« Todavía no ha vuelto » = il n'est pas encore rentré. En espagnol : HA vuelto (avoir), jamais « es vuelto »."},
    {block:"Participes irréguliers (he…)", en:"abierto", ipa:"/aˈβjeɾto/", fr:"ouvert (abrir)", note:"« ¿Has abierto la ventana? » ; aussi adjectif : « La tienda está abierta »."},
    {block:"Participes irréguliers (he…)", en:"roto", ipa:"/ˈroto/", fr:"cassé (romper)", note:"« Se me ha roto el móvil » = mon portable s'est cassé. Le « r » initial est roulé."},
    {block:"Vacances à Séville (texte T2)", en:"las vacaciones", ipa:"/laz βakaˈθjones/", fr:"les vacances", note:"Toujours au pluriel, comme en français : « Mis últimas vacaciones » = mes dernières vacances."},
    {block:"Vacances à Séville (texte T2)", en:"pasear", ipa:"/paseˈaɾ/", fr:"se promener", note:"PAS pronominal en espagnol : « Paseamos por el centro » = nous nous sommes promenés dans le centre."},
    {block:"Vacances à Séville (texte T2)", en:"la terraza", ipa:"/la teˈraθa/", fr:"la terrasse", note:"« rr » roulé et « z » = son « th » anglais en Espagne : te-RRA-tha."},
    {block:"Vacances à Séville (texte T2)", en:"la orilla del río", ipa:"/la oˈɾiʎa ðel ˈri.o/", fr:"le bord du fleuve, la rive", note:"« del » = de + el (contraction obligatoire, comme « du »)."},
    {block:"Vacances à Séville (texte T2)", en:"hacer calor", ipa:"/aˈθeɾ kaˈloɾ/", fr:"faire chaud", note:"PIÈGE : « el calor » est MASCULIN → « hace MUCHO calor » (et jamais « mucha calor »)."},
    {block:"Verbes clés (X4)", en:"fui", ipa:"/fwi/", fr:"je suis allé(e) (ir) OU j'ai été (ser)", note:"ir et ser ont le MÊME indéfini : fui, fuiste, fue, fuimos, fuisteis, fueron. « Fui a Sevilla » (+ a + lieu) = ir ; « Fue un día genial » = ser."},
    {block:"Verbes clés (X4)", en:"hice", ipa:"/ˈiθe/", fr:"j'ai fait (hacer)", note:"hice, hiciste, hizo (avec z !), hicimos, hicisteis, hicieron. « ¿Qué hiciste ayer? »"},
    {block:"Verbes clés (X4)", en:"tuve", ipa:"/ˈtuβe/", fr:"j'ai eu (tener)", note:"Même famille « en u » : tuve (tener), estuve (estar), pude (poder), puse (poner). Pas d'accent écrit !"},
    {block:"Verbes clés (X4)", en:"dije", ipa:"/ˈdixe/", fr:"j'ai dit (decir)", note:"Famille « en j » : dije, dijiste, dijo, dijimos, dijisteis, dijeron (sans i : jamais « dijieron »)."}
  ],
  MEM_WORDS: [2,6,11,13,24,25], // ya, ayer, hecho, visto, fui, hice

  MINI_CHECKS: [
    { q:"Hoy ___ en un restaurante con mis compañeros.", opts:["he comido","comí","como mañana"], correct:0, fb:"« Hoy » = la journée n'est pas finie → perfecto (en Espagne) : « he comido »." },
    { q:"Ayer ___ en un restaurante con mis compañeros.", opts:["he comido","comí","voy a comer"], correct:1, fb:"« Ayer » = moment fini, daté → indéfini : « comí »." },
    { q:"Quel est le participe passé de « hacer » ?", opts:["hacido","hecho","hizo"], correct:1, fb:"Participe irrégulier : hecho. (« hizo » = il a fait, à l'indéfini.)" },
    { q:"« Ayer fui al médico. » — « fui » vient de…", opts:["ser","ir","hacer"], correct:1, fb:"« fui » + « a/al + lieu » = ir (aller)." }
  ],

  ROUNDS: [
    { bank:["padres","comido","de","Hoy","mis","he","en","casa","."], answer:"hoy he comido en casa de mis padres .", display:"Hoy he comido en casa de mis padres.", fr:"Aujourd'hui, j'ai mangé chez mes parents." },
    { bank:["japonés","comí","restaurante","Ayer","un","en","."], answer:"ayer comí en un restaurante japonés .", display:"Ayer comí en un restaurante japonés.", fr:"Hier, j'ai mangé dans un restaurant japonais." },
    { bank:["Sevilla","vez","has","¿","alguna","en","estado","?"], answer:"¿ has estado alguna vez en sevilla ?", display:"¿Has estado alguna vez en Sevilla?", fr:"Es-tu déjà allé(e) à Séville ?" },
    { bank:["los","hecho","no","Todavía","deberes","he","."], answer:"todavía no he hecho los deberes .", display:"Todavía no he hecho los deberes.", fr:"Je n'ai pas encore fait les devoirs." },
    { bank:["playa","fuimos","pasado","la","El","verano","a","."], answer:"el verano pasado fuimos a la playa .", display:"El verano pasado fuimos a la playa.", fr:"L'été dernier, nous sommes allés à la plage." },
    { bank:["semana","hiciste","¿","de","el","Qué","fin","?"], answer:"¿ qué hiciste el fin de semana ?", display:"¿Qué hiciste el fin de semana?", fr:"Qu'est-ce que tu as fait ce week-end ?" },
    { bank:["mexicana","visto","una","Nunca","película","he","."], answer:"nunca he visto una película mexicana .", display:"Nunca he visto una película mexicana.", fr:"Je n'ai jamais vu de film mexicain." },
    { bank:["dormir","pude","Anoche","no","."], answer:"anoche no pude dormir .", display:"Anoche no pude dormir.", fr:"Cette nuit, je n'ai pas pu dormir." },
    { bank:["mucho","hemos","semana","Esta","trabajado","."], answer:"esta semana hemos trabajado mucho .", display:"Esta semana hemos trabajado mucho.", fr:"Cette semaine, nous avons beaucoup travaillé." },
    { bank:["terminado","¡","he","Ya","!"], answer:"¡ ya he terminado !", display:"¡Ya he terminado!", fr:"J'ai déjà fini !" }
  ],

  QUIZ: [
    { cat:"ecrit", q:"Esta mañana ___ a mi madre por teléfono. (Espagne)", opts:["llamé","he llamado","llamo"], correct:1, why:"« Esta mañana » = aujourd'hui, période pas finie → perfecto (Espagne) : « he llamado »." },
    { cat:"ecrit", q:"El año pasado ___ en Londres.", opts:["viví","he vivido","vivo"], correct:0, why:"« El año pasado » = moment fini et daté → indéfini : « viví »." },
    { cat:"ecrit", q:"¿___ alguna vez paella? (Espagne)", opts:["Probaste","Has probado","Pruebo"], correct:1, why:"« Alguna vez » = expérience de vie (pas finie) → perfecto : « ¿Has probado alguna vez paella? »." },
    { cat:"ecrit", q:"Quel est le participe passé de « volver » ?", opts:["volvido","vuelto","volvió"], correct:1, why:"Participe irrégulier : vuelto (« Todavía no ha vuelto »)." },
    { cat:"ecrit", q:"Quel est le participe passé de « escribir » ?", opts:["escribido","escrito","escribió"], correct:1, why:"Participe irrégulier : escrito, comme en français « écrit »." },
    { cat:"ecrit", q:"« Hizo » est la forme de…", opts:["hacer, indéfini, él/ella","haber, présent, yo","hacer, présent, tú"], correct:0, why:"hice, hiciste, HIZO (il/elle a fait). Le « c » devient « z » devant le « o »." },
    { cat:"ecrit", q:"« Fue un viaje increíble. » — « fue » vient de…", opts:["ir","ser","fumar"], correct:1, why:"« Fue » + un nom / un adjectif = SER (ça a été, c'était). Avec « a + lieu », ce serait ir." },
    { cat:"ecrit", q:"« Je suis allée au marché ce matin. » (Espagne)", opts:["Esta mañana soy ido al mercado.","Esta mañana he ido al mercado.","Esta mañana estoy ido al mercado."], correct:1, why:"En espagnol, le passé composé se fait TOUJOURS avec haber, même là où le français dit « je suis »." },
    { cat:"ecrit", q:"Ayer mi hijo ___ muy tarde del colegio.", opts:["vino","venió","ha venido"], correct:0, why:"« Ayer » → indéfini. Venir est irrégulier : vine, viniste, VINO." },
    { cat:"ecrit", q:"Repère la phrase INCORRECTE (Espagne) :", opts:["Hoy he trabajado mucho.","Ayer he trabajado mucho.","Ayer trabajé mucho."], correct:1, why:"« Ayer » (moment fini) demande l'indéfini : « Ayer trabajé »." },
    { cat:"oral", audio:"Hoy no he tenido tiempo de comer.", q:"Écoute : de quand parle la personne ?", opts:["D'hier","De la semaine dernière","D'aujourd'hui","De demain"], correct:2, why:"« Hoy » + « he tenido » (perfecto) = aujourd'hui, journée pas finie." },
    { cat:"oral", audio:"El sábado pasado fuimos al cine con los niños.", q:"Écoute : qu'ont-ils fait samedi dernier ?", opts:["Ils sont allés au cinéma","Ils ont été malades","Ils vont aller au cinéma","Ils ont fait du sport"], correct:0, why:"« fuimos al cine » : fui + « al + lieu » = ir → nous sommes allés au cinéma." },
    { cat:"oral", audio:"¿Has visto mis gafas? No las encuentro.", q:"Écoute : que demande la personne ?", opts:["Si tu as acheté des lunettes","Si tu as vu ses lunettes","Si tu vas voir un film","Si tu portes des lunettes"], correct:1, why:"« ¿Has visto…? » = as-tu vu… ? (visto = participe de ver)." },
    { cat:"oral", audio:"Anoche mi hermana me dijo que está embarazada.", q:"Écoute : qu'a dit la sœur, et quand ?", opts:["Qu'elle est fatiguée, ce matin","Qu'elle est gênée, hier","Qu'elle déménage, cette nuit","Qu'elle est enceinte, hier soir"], correct:3, why:"« Anoche » = hier soir ; « dijo » = elle a dit (decir) ; « embarazada » = enceinte (faux ami !)." },
    { cat:"comprehension", passage:"“— ¿Qué tal el fin de semana? — Muy bien. El sábado fui a la playa con mis amigos y el domingo descansé. ¿Y tú? — Yo todavía no he descansado nada: esta semana he trabajado todos los días.”", q:"Qu'a fait la première personne dimanche ?", opts:["Elle est allée à la plage","Elle s'est reposée","Elle a travaillé","Elle a vu des amis"], correct:1, why:"« el domingo descansé » = dimanche, je me suis reposé(e). La plage, c'était samedi." },
    { cat:"comprehension", passage:"“En 2019 viví seis meses en México. Allí aprendí a cocinar tacos. Desde entonces nunca he vuelto, pero he cocinado tacos muchas veces en casa.”", q:"Que dit la personne sur son retour au Mexique ?", opts:["Elle y retourne chaque année","Elle y est retournée en 2019","Elle n'y est jamais retournée","Elle va y retourner demain"], correct:2, why:"« Nunca he vuelto » = je ne suis jamais revenu(e) (perfecto : expérience jusqu'à maintenant)." },
    { cat:"comprehension", passage:"“(rappel) — ¿Qué estás haciendo? — Estoy preparando la maleta. Mañana voy a viajar a Sevilla.”", q:"Que fait la personne en ce moment ?", opts:["Elle voyage","Elle prépare sa valise","Elle rentre de Séville","Elle achète un billet"], correct:1, why:"« Estoy preparando » = en ce moment (estar + gérondif) ; le voyage, c'est demain : « voy a viajar » (rappel X3)." },
    { cat:"comprehension", passage:"“(rappel) Todos los días voy al trabajo en metro, pero hoy está lloviendo y estoy esperando un taxi.”", q:"Comment va-t-elle au travail d'habitude ?", opts:["En taxi","À pied","En métro","En bus"], correct:2, why:"« Todos los días voy… en metro » = habitude (présent simple) ; aujourd'hui, exception : « estoy esperando un taxi » (rappel X3)." }
  ],

  PRON_VERBS: [
    {en:"Ayer fui a Sevilla.", fr:"Hier, je suis allé(e) à Séville. (« ll » = « y » : a-YER ; « fui » en une syllabe : FOUI)"},
    {en:"¿Qué has hecho hoy?", fr:"Qu'as-tu fait aujourd'hui ? (« h » toujours muet : as É-tcho OÏ)"},
    {en:"Hice una tortilla riquísima.", fr:"J'ai fait une tortilla délicieuse. (« ce » = « th » anglais : I-the ; « r » initial roulé : rri-QUI-si-ma)"},
    {en:"Nunca he visto el mar.", fr:"Je n'ai jamais vu la mer. (« v » = « b » : BIS-to)"},
    {en:"Anoche no dormí bien.", fr:"Cette nuit, je n'ai pas bien dormi. (accent tonique sur la FIN : dor-MÍ = j'ai dormi ; « duermo » = je dors)"},
    {en:"Se me ha roto el móvil.", fr:"Mon portable s'est cassé. (« r » initial roulé fort : RRO-to)"},
    {en:"Me dijo que viajó a Málaga.", fr:"Il m'a dit qu'il était allé à Málaga. (jota : DI-kho ; accent final : bia-KHÓ)"},
    {en:"El año pasado estuve en España.", fr:"L'année dernière, j'ai été en Espagne. (« ñ » = « gn » : A-gno, Es-PA-gna)"}
  ],

  READING: [
    "¡Hola, Inés! ¿Qué tal estás?",
    "Esta semana he trabajado mucho y todavía no he tenido tiempo de llamarte.",
    "Pero hoy he salido pronto de la oficina y por fin te escribo.",
    "El sábado pasado fui con mi hijo al zoo de Madrid.",
    "Vimos los elefantes, comimos un bocadillo en el parque y volvimos a casa muy tarde.",
    "El domingo no hicimos nada: descansamos todo el día.",
    "Ayer mi hermano me dijo que va a venir a vivir a Madrid. ¡Qué alegría!",
    "¿Y tú? ¿Has probado ya el restaurante mexicano de tu calle?",
    "Yo nunca he comido comida mexicana de verdad… ¡Tenemos que ir juntas!",
    "¡Escríbeme pronto! Un beso, Clara."
  ],
  GLOSS: [
    {en:"salir pronto", fr:"partir tôt"},
    {en:"por fin", fr:"enfin"},
    {en:"un bocadillo", fr:"un sandwich (dans une baguette)"},
    {en:"descansar", fr:"se reposer"},
    {en:"probar", fr:"goûter, essayer"},
    {en:"de verdad", fr:"vraiment, authentique"}
  ],

  GRAMMAR1: {
    heading: "« He comido » : le passé composé espagnol (pretérito perfecto)",
    lede: "La ligne du temps de X3 s'allonge vers la gauche. Tout à gauche, le PASSÉ FINI ET DATÉ (ayer, el año pasado) → comí. Juste avant le présent, le PASSÉ QUI TOUCHE ENCORE AUJOURD'HUI (hoy, esta semana, ya, nunca) → he comido. Puis le présent : como / estoy comiendo, et le futur proche : voy a comer. Ici, on commence par « he comido ».",
    conj: [
      ["yo / tú / él, ella, usted","he · has · ha + participe","He comido. ¿Has comido? Ha comido."],
      ["nosotros / vosotros / ellos, ustedes","hemos · habéis · han + participe","Hemos comido. ¿Habéis comido? Han comido."],
      ["Participe régulier","-AR → -ADO · -ER / -IR → -IDO","hablado · comido · vivido"],
      ["Participes irréguliers (à connaître)","hecho · dicho · visto · escrito","hacer · decir · ver · escribir"],
      ["Participes irréguliers (suite)","puesto · vuelto · abierto · roto","poner · volver · abrir · romper"]
    ],
    ruleHtml: "📖 <b>Pretérito perfecto</b> = <b>haber</b> au présent (<b>he, has, ha, hemos, habéis, han</b>) + <b>participe passé</b>. Trois règles qui simplifient la vie : 1) c'est <b>toujours haber</b>, jamais ser ni estar, même là où le français dit « je <b>suis</b> allée » → « <b>he</b> ido » ; 2) le participe <b>ne s'accorde jamais</b> : « María ha <b>salido</b> », « Las he <b>visto</b> » ; 3) <b>rien ne se glisse</b> entre haber et le participe : les pronoms et « no » se mettent <b>devant</b> (« <b>No lo</b> he visto »).",
    dialogueLede: "Le soir, en rentrant à la maison (en Espagne) :",
    dialogue: [
      {who:"them", en:"¿Qué tal el día? ¿Qué has hecho hoy?", fr:"Comment s'est passée ta journée ? Qu'est-ce que tu as fait aujourd'hui ?"},
      {who:"you", en:"He trabajado mucho y todavía no he comido. ¡Tengo hambre!", fr:"J'ai beaucoup travaillé et je n'ai pas encore mangé. J'ai faim !"}
    ],
    whyLabel: "Quand utiliser « he comido » ?",
    whyText: "Image mentale : la <b>période est encore ouverte</b>, elle touche le présent. <b>Hoy, esta mañana, esta semana, este año</b> : la journée, la semaine, l'année ne sont pas finies. <b>Ya</b> (déjà), <b>todavía no</b> (pas encore), <b>nunca</b> (jamais), <b>alguna vez</b> (déjà, dans ta vie) : on parle d'une <b>expérience ou d'un résultat</b> qui compte maintenant. Petit truc : si tu peux ajouter « jusqu'à maintenant » dans ta tête, c'est <b>he comido</b>."
  },
  GRAMMAR2: {
    heading: "« Comí » : le passé fini et daté (pretérito indefinido) — et comment choisir",
    dialogueLede: "Au bureau, le lundi matin :",
    dialogue: [
      {who:"them", en:"¿Qué hiciste el fin de semana?", fr:"Qu'est-ce que tu as fait ce week-end ?"},
      {who:"you", en:"El sábado fui a Toledo y el domingo estuve en casa. ¡Fue genial!", fr:"Samedi, je suis allée à Tolède et dimanche, je suis restée à la maison. C'était génial !"}
    ],
    ruleHtml: "💭 <b>Réguliers</b> : -AR → <b>é, aste, ó, amos, asteis, aron</b> (hablé, hablaste, habló…) ; -ER / -IR → <b>í, iste, ió, imos, isteis, ieron</b> (comí, comiste, comió… viví, viviste, vivió…). Attention à l'accent : <b>hablo</b> = je parle, <b>habló</b> = il a parlé ! <b>Irréguliers du quotidien</b> (sans accent écrit) : <b>fui</b> (ir ET ser), <b>tuve</b> (tener), <b>estuve</b> (estar), <b>pude</b> (poder), <b>puse</b> (poner), <b>hice / hizo</b> (hacer), <b>dije</b> (decir), <b>vine</b> (venir). <b>La règle pour choisir</b> : période pas finie ou « déjà / jamais » → <b>he comido</b> ; moment fini et daté (<b>ayer, anoche, el año pasado, hace dos días, en 2019</b>) → <b>comí</b>. <b>fui = ir ou ser ?</b> Regarde ce qui suit : « a / al + lieu » → <b>ir</b> (« fui <b>al</b> cine ») ; un nom ou un adjectif → <b>ser</b> (« fue <b>un día genial</b> »).",
    whyLabel: "Le piège du français « j'ai mangé »",
    whyText: "En français parlé, on dit « <b>j'ai mangé</b> » pour TOUT : « aujourd'hui j'ai mangé » et « hier j'ai mangé ». Le passé simple (« je mangeai ») ne s'utilise plus qu'à l'écrit. L'espagnol, lui, utilise ses <b>deux</b> passés à l'oral, tous les jours : il faut donc choisir. Réflexe : cherche le <b>marqueur de temps</b>. « Hoy <b>he comido</b> » / « Ayer <b>comí</b> ». Et bonne nouvelle : en <b>Amérique latine</b> (et aux Canaries), on utilise surtout l'indéfini, même avec « hoy » ou « ya » : « Hoy <b>comí</b> tacos », « ¿Ya <b>comiste</b>? ». Donc en cas de doute, <b>comí</b> est toujours compris partout ; « he comido » te fera juste sonner plus « Espagne »."
  },

  REVIEW: [
    { q:"Ahora mismo mi hijo ___ en su habitación.", opts:["está durmiendo","va a dormir ayer"], correct:0, fb:"« Ahora mismo » → estar + gérondif : « está durmiendo » (o → u). (rappel X3)" },
    { q:"« Nous allons dîner chez Ana. »", opts:["Vamos cenar en casa de Ana.","Vamos a cenar en casa de Ana."], correct:1, fb:"Futur proche = ir + A + infinitif. (rappel X3)" },
    { q:"Quel est le gérondif de « leer » ?", opts:["leyendo","leiendo"], correct:0, fb:"Le « i » entre deux voyelles devient « y » : leyendo. (rappel X3)" },
    { q:"Vosotros ___ a venir a la fiesta, ¿no?", opts:["váis","vais"], correct:1, fb:"« Vais » sans accent : une seule syllabe. (rappel X3)" },
    { q:"« Siempre ___ a las siete. »", opts:["me levanto","me estoy levantando"], correct:0, fb:"« Siempre » = habitude → présent simple. (rappel X3)" }
  ],

  CULTURE_NOTE: {
    icon: "🗺️",
    title: "Note culturelle — deux passés, deux continents",
    html: "En <b>Espagne</b> (surtout dans le centre et le nord), on distingue soigneusement « <b>hoy he comido</b> » et « <b>ayer comí</b> ». En <b>Amérique latine</b>, aux <b>Canaries</b> et dans une partie de la Galice et des Asturies, on utilise presque toujours l'indéfini : « <b>¿Ya comiste?</b> » (tu as déjà mangé ?) est une question typique au Mexique. Le perfecto y existe, mais il garde surtout une idée d'expérience ou de chose qui dure : « nunca <b>he estado</b> en España ». Pour une francophone, c'est rassurant : si tu hésites, l'indéfini sera compris partout. Et si tu vis ou voyages en Espagne, écoute les marqueurs : « hoy », « esta semana », « ya »… appellent le <b>he</b>."
  },

  NEXT_PREVIEW: "X5 — Le passé (2) : imparfait ou indéfini pour raconter ? On apprend l'imparfait (hablaba, comía, et les 3 irréguliers era, iba, veía — dont les « era » et « hacía » du texte de Séville), et la règle du décor et de l'action : « Estudiaba en mi habitación cuando sonó el teléfono ».",

  META: { vocabTitle: "Le passé (1) : he comido ou comí ? (X4)", lectureTitle: "Un message à une amie", bilanTitle: "Bravo ! Tu sais maintenant choisir entre « he comido » et « comí » grâce aux marqueurs de temps.", pronLabel: "Le passé à voix haute (accent final, jota, h muet, rr)", todayLede: "raconter ce que tu as fait aujourd'hui (he comido, he hecho, he visto) et ce que tu as fait hier ou l'an dernier (comí, fui, hice, tuve) — et démasquer les formes qui font peur, comme fui, hizo ou dijo" },

  DRILLS: [
    { type:"fill", text:"hacer → he ___ (participe)", answers:["hecho"], why:"Participe irrégulier : hecho." },
    { type:"fill", text:"decir → he ___ (participe)", answers:["dicho"], why:"Participe irrégulier : dicho." },
    { type:"fill", text:"ver → he ___ (participe)", answers:["visto"], why:"Participe irrégulier : visto." },
    { type:"fill", text:"escribir → he ___ (participe)", answers:["escrito"], why:"Participe irrégulier : escrito (comme « écrit »)." },
    { type:"fill", text:"poner → he ___ (participe)", answers:["puesto"], why:"Participe irrégulier : puesto." },
    { type:"fill", text:"volver → he ___ (participe)", answers:["vuelto"], why:"Participe irrégulier : vuelto." },
    { type:"fill", text:"abrir → he ___ (participe)", answers:["abierto"], why:"Participe irrégulier : abierto." },
    { type:"fill", text:"romper → he ___ (participe)", answers:["roto"], why:"Participe irrégulier : roto." },
    { type:"fill", text:"Hoy yo ___ (trabajar) mucho.", answers:["he trabajado"], why:"« Hoy » → perfecto : he + trabajado." },
    { type:"fill", text:"¿Ya ___ (terminar, tú)?", answers:["has terminado"], why:"« Ya » → perfecto : has + terminado." },
    { type:"fill", text:"¿Vosotros ___ (estar) alguna vez en México?", answers:["habéis estado"], why:"« Alguna vez » → perfecto : habéis (avec accent) + estado." },
    { type:"fill", text:"Mis padres nunca ___ (viajar) en avión.", answers:["han viajado"], why:"« Nunca » → perfecto : han + viajado." },
    { type:"fill", text:"Ayer yo ___ (hablar) con mi jefe.", answers:["hablé"], why:"« Ayer » → indéfini ; -ar, yo : -é (avec accent)." },
    { type:"fill", text:"Anoche tú ___ (comer) muy tarde.", answers:["comiste"], why:"« Anoche » → indéfini ; -er, tú : -iste." },
    { type:"fill", text:"El año pasado mi hermana ___ (vivir) en Londres.", answers:["vivió"], why:"« El año pasado » → indéfini ; -ir, ella : -ió (avec accent)." },
    { type:"fill", text:"El sábado pasado nosotros ___ (ir) al cine.", answers:["fuimos"], why:"ir à l'indéfini : fui, fuiste, fue, FUIMOS…" },
    { type:"fill", text:"¿Qué ___ (hacer, tú) el domingo?", answers:["hiciste"], why:"hacer à l'indéfini : hice, HICISTE, hizo…" },
    { type:"fill", text:"En 2020 mis vecinos ___ (tener) un bebé.", answers:["tuvieron"], why:"tener → tuv- : tuve, tuviste, tuvo, tuvimos, tuvisteis, TUVIERON." },
    { type:"fill", text:"El otro día Pedro me ___ (decir) la verdad.", answers:["dijo"], why:"decir → dij- : dije, dijiste, DIJO." },
    { type:"fill", text:"Ayer yo ___ (estar) en casa todo el día.", answers:["estuve"], why:"estar → estuv- : ESTUVE (sans accent)." },
    { type:"fill", text:"Ayer no ___ (poder, yo) ir a la reunión.", answers:["pude"], why:"poder → pud- : PUDE, pudiste, pudo…" },
    { type:"fill", text:"¿Dónde ___ (poner, tú) las llaves anoche?", answers:["pusiste"], why:"poner → pus- : puse, PUSISTE, puso…" },
    { type:"fill", text:"Anoche mis amigos ___ (venir) a cenar.", answers:["vinieron"], why:"venir → vin- : vine, viniste, vino, vinimos, vinisteis, VINIERON." },
    { type:"fill", text:"Nosotros ___ (divertirse) mucho en la fiesta de ayer.", answers:["nos divertimos"], why:"« Ayer » → indéfini. À « nosotros », la forme est la même qu'au présent : nos divertimos (le changement e → i n'arrive qu'à la 3e personne : se divirtió, se divirtieron)." },
    { type:"choice", q:"Hoy ___ en casa. (Espagne)", opts:["he comido","comí"], correct:0, why:"« Hoy » = journée pas finie → perfecto en Espagne." },
    { type:"choice", q:"Ayer ___ en casa.", opts:["he comido","comí"], correct:1, why:"« Ayer » = moment fini → indéfini." },
    { type:"choice", q:"El año pasado ___ a Cuba.", opts:["hemos viajado","viajamos"], correct:1, why:"« El año pasado » = moment fini, daté → indéfini." },
    { type:"choice", q:"Démasque : « Ayer fui al médico. » — « fui » vient de…", opts:["ser","ir"], correct:1, why:"fui + « al + lieu » = ir (je suis allé(e))." },
    { type:"choice", q:"Démasque : « Fue un día fantástico. » — « fue » vient de…", opts:["ser","ir"], correct:0, why:"fue + nom / adjectif = ser (ça a été, c'était)." },
    { type:"choice", q:"Démasque : « hizo » =", opts:["hacer · indéfini · él/ella","haber · présent · yo","hacer · présent · tú"], correct:0, why:"hice, hiciste, HIZO : il/elle a fait." },
    { type:"choice", q:"« Ayer Juan ___ con el director. »", opts:["hablo","habló"], correct:1, why:"« hablo » = je parle (présent) ; « habló » = il a parlé (indéfini). L'accent change tout !" },
    { type:"choice", q:"« Elle est partie hier. »", opts:["Ayer es ida.","Ayer se ha ido.","Ayer se fue."], correct:2, why:"« Ayer » → indéfini (se fue). Et jamais « es ida » : l'espagnol n'utilise pas ser comme auxiliaire." },
    { type:"choice", q:"En Amérique latine, « Hoy comí tacos » est…", opts:["une faute : il faut « he comido »","tout à fait normal : on y utilise surtout l'indéfini"], correct:1, why:"En Amérique latine, l'indéfini remplace très souvent le perfecto, même avec « hoy »." },
    { type:"fill", text:"Traduis « Je suis allée au marché ce matin. » (Espagne) → Esta mañana ___ al mercado.", answers:["he ido"], why:"« Esta mañana » → perfecto, et toujours avec haber : he ido (pas « soy ida »)." },
    { type:"fill", text:"Transforme : Hoy he visto a Carmen. → Ayer ___ a Carmen.", answers:["vi"], why:"ver à l'indéfini : vi, viste, vio… (vi sans accent : une seule syllabe)." }
  ],

  ANNOTATED: {
    title: "Mis últimas vacaciones en Sevilla",
    intro: "Le texte d'Ashley (T2), corrigé (« mucho calor ») et complété d'une phrase au perfecto. Touche chaque mot pour voir ce que c'est.",
    sentences: [
      { fr: "L'été dernier, je suis allée à Séville avec ma famille.",
        tokens: [
          { w:"El verano pasado", tag:"adverbe", info:"locution de temps", fr:"l'été dernier", tip:"Moment FINI et daté → indéfini." },
          { w:"fui", tag:"verbe", info:"ir · indéfini · yo (je)", fr:"je suis allée", tip:"fui = ir OU ser. Ici suivi de « a + lieu » → ir." },
          { w:"a", tag:"préposition", fr:"à" },
          { w:"Sevilla", tag:"nom propre", fr:"Séville" },
          { w:"con", tag:"préposition", fr:"avec" },
          { w:"mi", tag:"déterminant", info:"possessif · sing.", fr:"ma" },
          { w:"familia", tag:"nom", info:"fém. sing.", fr:"famille" }
        ] },
      { fr: "Nous avons passé quatre jours merveilleux.",
        tokens: [
          { w:"Pasamos", tag:"verbe", info:"pasar · indéfini · nosotros (nous)", fr:"nous avons passé", tip:"Même forme qu'au présent (« pasamos ») ! C'est le contexte (el verano pasado) qui dit que c'est du passé." },
          { w:"cuatro", tag:"déterminant", info:"numéral", fr:"quatre" },
          { w:"días", tag:"nom", info:"masc. plur.", fr:"jours", tip:"« el día » est masculin malgré son -a." },
          { w:"maravillosos", tag:"adjectif", info:"masc. plur.", fr:"merveilleux" }
        ] },
      { fr: "Le temps était fantastique et il faisait très chaud.",
        tokens: [
          { w:"El", tag:"article", info:"masc. sing.", fr:"le" },
          { w:"tiempo", tag:"nom", info:"masc. sing.", fr:"temps (la météo)" },
          { w:"era", tag:"verbe", info:"ser · imparfait · 3e pers. sing.", fr:"était", tip:"Imparfait = description, décor. On le voit en X5." },
          { w:"fantástico", tag:"adjectif", info:"masc. sing.", fr:"fantastique" },
          { w:"y", tag:"conjonction", fr:"et" },
          { w:"hacía", tag:"verbe", info:"hacer · imparfait · 3e pers. sing.", fr:"il faisait", tip:"Imparfait (X5). Météo : hace calor / hacía calor." },
          { w:"mucho", tag:"déterminant", info:"masc. sing.", fr:"très (beaucoup de)", tip:"« mucho » et pas « mucha » : calor est masculin." },
          { w:"calor", tag:"nom", info:"masc. sing.", fr:"chaleur (chaud)", tip:"PIÈGE : « la chaleur » mais « EL calor ». Le texte d'origine disait « mucha calor » : faute corrigée." }
        ] },
      { fr: "Nous avons visité la Giralda, nous nous sommes promenés dans le quartier de Santa Cruz et nous avons mangé des tapas traditionnelles en terrasse.",
        tokens: [
          { w:"Visitamos", tag:"verbe", info:"visitar · indéfini · nosotros (nous)", fr:"nous avons visité" },
          { w:"la Giralda", tag:"nom propre", fr:"la Giralda (tour de la cathédrale)" },
          { w:"paseamos", tag:"verbe", info:"pasear · indéfini · nosotros (nous)", fr:"nous nous sommes promenés", tip:"pasear n'est PAS pronominal : pas de « nos »." },
          { w:"por", tag:"préposition", fr:"dans (à travers)", tip:"POR = lieu de passage, on se balade à travers." },
          { w:"el", tag:"article", info:"masc. sing.", fr:"le" },
          { w:"barrio", tag:"nom", info:"masc. sing.", fr:"quartier" },
          { w:"de", tag:"préposition", fr:"de" },
          { w:"Santa Cruz", tag:"nom propre", fr:"Santa Cruz" },
          { w:"y", tag:"conjonction", fr:"et" },
          { w:"comimos", tag:"verbe", info:"comer · indéfini · nosotros (nous)", fr:"nous avons mangé", tip:"Au présent, on dirait « comemos » : ici, -imos = passé." },
          { w:"tapas", tag:"nom", info:"fém. plur.", fr:"tapas" },
          { w:"tradicionales", tag:"adjectif", info:"fém. plur.", fr:"traditionnelles" },
          { w:"en", tag:"préposition", fr:"en, sur" },
          { w:"una", tag:"article", info:"fém. sing.", fr:"une" },
          { w:"terraza", tag:"nom", info:"fém. sing.", fr:"terrasse" }
        ] },
      { fr: "Ce qui m'a le plus plu, c'est la cathédrale.",
        tokens: [
          { w:"Lo que", tag:"pronom sujet", info:"neutre (lo) + relatif (que)", fr:"ce qui, ce que" },
          { w:"más", tag:"adverbe", fr:"le plus" },
          { w:"me", tag:"pronom COI", fr:"me (à moi)" },
          { w:"gustó", tag:"verbe", info:"gustar · indéfini · 3e pers. sing.", fr:"a plu", tip:"Accent final = passé. Sans accent, « gusto » = je goûte, le goût." },
          { w:"fue", tag:"verbe", info:"ser · indéfini · 3e pers. sing.", fr:"ça a été, c'est", tip:"fue = ir ou ser ? Ici, suivi d'un nom (la catedral), pas de « a + lieu » → SER." },
          { w:"la", tag:"article", info:"fém. sing.", fr:"la" },
          { w:"catedral", tag:"nom", info:"fém. sing.", fr:"cathédrale" }
        ] },
      { fr: "Le soir, nous avons fait une promenade le long du Guadalquivir.",
        tokens: [
          { w:"Por la noche", tag:"adverbe", info:"locution de temps", fr:"le soir" },
          { w:"dimos", tag:"verbe", info:"dar · indéfini · nosotros (nous)", fr:"nous avons fait (donné)", tip:"dar un paseo = faire une promenade. Au passé, dar prend les terminaisons des verbes en -er : di, diste, dio, dimos…" },
          { w:"un", tag:"article", info:"masc. sing.", fr:"une" },
          { w:"paseo", tag:"nom", info:"masc. sing.", fr:"promenade" },
          { w:"por", tag:"préposition", fr:"le long de" },
          { w:"la", tag:"article", info:"fém. sing.", fr:"la" },
          { w:"orilla", tag:"nom", info:"fém. sing.", fr:"rive, bord" },
          { w:"del", tag:"préposition", info:"de + el (contraction)", fr:"du" },
          { w:"río", tag:"nom", info:"masc. sing.", fr:"fleuve" },
          { w:"Guadalquivir", tag:"nom propre", fr:"Guadalquivir" }
        ] },
      { fr: "Cette année, je ne suis pas encore retournée à Séville, mais j'ai déjà vu beaucoup de photos de mes cousins.",
        tokens: [
          { w:"Este año", tag:"adverbe", info:"locution de temps", fr:"cette année", tip:"Période PAS FINIE → perfecto." },
          { w:"todavía no", tag:"adverbe", fr:"pas encore" },
          { w:"he", tag:"auxiliaire", info:"haber · présent · yo (je)", fr:"j'ai (je suis)", tip:"Toujours haber, même si le français dit « je suis retournée »." },
          { w:"vuelto", tag:"verbe", info:"volver · participe passé (irrégulier)", fr:"retournée" },
          { w:"a", tag:"préposition", fr:"à" },
          { w:"Sevilla", tag:"nom propre", fr:"Séville" },
          { w:"pero", tag:"conjonction", fr:"mais" },
          { w:"ya", tag:"adverbe", fr:"déjà", tip:"« ya » → perfecto." },
          { w:"he", tag:"auxiliaire", info:"haber · présent · yo (je)", fr:"j'ai" },
          { w:"visto", tag:"verbe", info:"ver · participe passé (irrégulier)", fr:"vu" },
          { w:"muchas", tag:"déterminant", info:"fém. plur.", fr:"beaucoup de" },
          { w:"fotos", tag:"nom", info:"fém. plur.", fr:"photos", tip:"« la foto » est féminin (abréviation de « la fotografía »)." },
          { w:"de", tag:"préposition", fr:"de" },
          { w:"mis", tag:"déterminant", info:"possessif · plur.", fr:"mes" },
          { w:"primos", tag:"nom", info:"masc. plur.", fr:"cousins" }
        ] }
    ],
    questions: [
      { q:"« fui » (phrase 1) et « fue » (phrase 5) viennent de quels verbes ?", opts:["fui = ir, fue = ser","les deux = ser","les deux = ir"], correct:0, why:"« fui a Sevilla » : a + lieu → ir. « fue la catedral » : suivi d'un nom → ser." },
      { q:"Pourquoi « fui » (indéfini) et pas « he ido » dans la phrase 1 ?", opts:["Parce que « el verano pasado » est un moment fini et daté","Parce que ir n'a pas de perfecto","Parce que c'est un projet"], correct:0, why:"Moment fini (el verano pasado) → indéfini." },
      { q:"Pourquoi « he vuelto » et « he visto » dans la phrase 7 ?", opts:["Parce que ce sont des verbes irréguliers","Parce que « este año », « todavía no » et « ya » parlent d'une période pas finie","Parce que c'est de l'espagnol d'Amérique latine"], correct:1, why:"Période ouverte, résultat qui compte maintenant → perfecto." },
      { q:"Pourquoi faut-il écrire « mucho calor » et non « mucha calor » ?", opts:["Parce que « calor » est masculin en espagnol","Parce que « mucho » ne s'accorde jamais","Parce que c'est au passé"], correct:0, why:"« el calor » est masculin (alors que « la chaleur » est féminin en français)." },
      { q:"Qu'a fait la famille le soir ?", opts:["Elle a mangé des tapas","Elle s'est promenée le long du fleuve","Elle a visité la cathédrale"], correct:1, why:"« Por la noche, dimos un paseo por la orilla del río »." }
    ]
  }
};

// X5 — Le passé (2) : imparfait ou indéfini pour raconter — s'appuie sur X4 (le prétérit indéfini) et sur le texte T5 d'Ashley « En el médico »
LESSONS_ES[305] = {
  code: "X5", level: "A2",
  VOCAB: [
    {block:"L'imparfait : les formes", en:"hablaba", ipa:"/aˈβlaβa/", fr:"je parlais / il parlait", note:"Verbes en -AR : radical + -aba. hablar → habl- → hablaba. Même forme pour yo et él/ella : le contexte fait la différence."},
    {block:"L'imparfait : les formes", en:"comía", ipa:"/koˈmi.a/", fr:"je mangeais / il mangeait", note:"Verbes en -ER : radical + ía (avec accent sur le í). Comme en français « je mangEAIS » : une seule série de terminaisons pour tous."},
    {block:"L'imparfait : les formes", en:"vivía", ipa:"/biˈβi.a/", fr:"je vivais / il vivait", note:"Verbes en -IR : exactement les mêmes terminaisons que -ER (ía, ías, ía, íamos, íais, ían). Deux séries seulement à retenir !"},
    {block:"L'imparfait : les formes", en:"era", ipa:"/ˈeɾa/", fr:"j'étais / il était (ser)", note:"Irrégulier n°1 : ser → era, eras, era, éramos, erais, eran. « Era alta » = elle était grande (description)."},
    {block:"L'imparfait : les formes", en:"iba", ipa:"/ˈiβa/", fr:"j'allais / il allait (ir)", note:"Irrégulier n°2 : ir → iba, ibas, iba, íbamos, ibais, iban. « Iba al colegio en bici » = j'allais à l'école à vélo (habitude)."},
    {block:"L'imparfait : les formes", en:"veía", ipa:"/beˈi.a/", fr:"je voyais / il voyait (ver)", note:"Irrégulier n°3 : ver → veía (on garde le e de ver). Ce sont les SEULS trois irréguliers de l'imparfait. Tous les autres verbes sont réguliers !"},
    {block:"Mots du décor (imparfait)", en:"antes", ipa:"/ˈantes/", fr:"avant, autrefois", note:"« Antes vivía en París » = avant, je vivais à Paris. Signal presque sûr d'imparfait (habitude ou situation passée)."},
    {block:"Mots du décor (imparfait)", en:"de pequeño / de pequeña", ipa:"/de peˈkeɲo/", fr:"quand j'étais petit(e)", note:"Raccourci très courant : « De pequeña, jugaba en la calle ». Synonyme : « cuando era niño/niña »."},
    {block:"Mots du décor (imparfait)", en:"siempre", ipa:"/ˈsjempɾe/", fr:"toujours", note:"Pour une habitude passée : « Siempre desayunaba con mi abuela ». Attention : « siempre » avec une période fermée peut aller à l'indéfini (« Siempre fue amable conmigo »)."},
    {block:"Mots du décor (imparfait)", en:"todos los días", ipa:"/ˈtoðoz loz ˈði.as/", fr:"tous les jours", note:"Répétition = habitude = imparfait : « Todos los días cogía el autobús » (Espagne) / « tomaba el autobús » (Amérique latine)."},
    {block:"Mots du décor (imparfait)", en:"mientras", ipa:"/ˈmjentɾas/", fr:"pendant que", note:"Deux actions en cours en même temps, deux décors : « Mientras yo cocinaba, él leía »."},
    {block:"Mots de l'action (indéfini)", en:"de repente", ipa:"/de reˈpente/", fr:"soudain, tout à coup", note:"Signal de l'action qui coupe le décor : « Dormía tranquilamente y de repente sonó el despertador »."},
    {block:"Mots de l'action (indéfini)", en:"ayer", ipa:"/aˈʝeɾ/", fr:"hier", note:"Moment daté et terminé → indéfini pour l'événement : « Ayer fui al médico ». Mais le décor d'hier reste à l'imparfait : « Ayer hacía frío »."},
    {block:"Mots de l'action (indéfini)", en:"anoche", ipa:"/aˈnotʃe/", fr:"hier soir, cette nuit", note:"Un seul mot ! « Anoche vi una película » = hier soir j'ai vu un film."},
    {block:"Mots de l'action (indéfini)", en:"un día", ipa:"/un ˈdi.a/", fr:"un jour", note:"Pour lancer l'événement d'une histoire : « Un día, mi abuelo encontró un gato en la calle »."},
    {block:"Mots de l'action (indéfini)", en:"cuando", ipa:"/ˈkwando/", fr:"quand", note:"La phrase-clé du chapitre : Imparfait + cuando + Indéfini. « Estudiaba en mi habitación cuando sonó el teléfono »."},
    {block:"Mots de l'action (indéfini)", en:"¿Qué pasó?", ipa:"/ke paˈso/", fr:"Qu'est-ce qui s'est passé ?", note:"La question de l'événement (indéfini de pasar). Pour le décor, on demande : « ¿Qué hacías? » (qu'est-ce que tu faisais ?)."},
    {block:"Chez le médico (texte T5)", en:"me encontraba mal", ipa:"/me eŋkonˈtɾaβa mal/", fr:"je ne me sentais pas bien", note:"encontrarse = se sentir (verbe pronominal). État physique → imparfait. « Me encuentro mal » = je ne me sens pas bien (présent)."},
    {block:"Chez le médico (texte T5)", en:"la fiebre", ipa:"/la ˈfjeβɾe/", fr:"la fièvre", note:"Féminin, comme en français. « Tenía fiebre » = j'avais de la fièvre : pas d'article en espagnol !"},
    {block:"Chez le médico (texte T5)", en:"el dolor de garganta", ipa:"/el doˈloɾ ðe ɣaɾˈɣanta/", fr:"le mal de gorge", note:"« dolor » est masculin (el dolor). « la garganta » = la gorge. De même : dolor de cabeza (mal de tête)."},
    {block:"Chez le médico (texte T5)", en:"la tos", ipa:"/la tos/", fr:"la toux", note:"« Tenía mucha tos » = je toussais beaucoup (mot à mot : j'avais beaucoup de toux)."},
    {block:"Chez le médico (texte T5)", en:"el centro de salud", ipa:"/el ˈθentɾo ðe saˈluð/", fr:"le centre de santé, le cabinet médical", note:"En Espagne, c'est là qu'on consulte son médecin de famille. « salud » = santé (¡Salud! = à tes souhaits / santé !)."},
    {block:"Chez le médico (texte T5)", en:"la gripe", ipa:"/la ˈɣɾipe/", fr:"la grippe", note:"Un seul p en espagnol. « Tengo gripe » = j'ai la grippe."},
    {block:"Verbes clés (X5)", en:"sonar", ipa:"/soˈnaɾ/", fr:"sonner", note:"Indéfini : sonó (il a sonné). Présent irrégulier : suena. « Sonó el teléfono » = le téléphone a sonné : l'événement !"},
    {block:"Verbes clés (X5)", en:"examinar", ipa:"/eksamiˈnaɾ/", fr:"examiner", note:"Attention à l'accent : examino = j'examine (présent) ; examinó = il a examiné (indéfini). Un accent change tout le sens !"},
    {block:"Verbes clés (X5)", en:"recetar", ipa:"/reθeˈtaɾ/", fr:"prescrire", note:"« El médico me recetó unos medicamentos » = le médecin m'a prescrit des médicaments. « la receta » = l'ordonnance (et aussi la recette de cuisine)."}
  ],
  MEM_WORDS: [3,4,5,11,15,24], // era, iba, veía, de repente, cuando, examinar

  MINI_CHECKS: [
    { q:"« De pequeña, ___ al colegio en bici. » (ir, habitude)", opts:["fui","iba","voy"], correct:1, fb:"Habitude passée = imparfait. ir → iba (un des 3 irréguliers)." },
    { q:"« Estudiaba en mi habitación cuando ___ el teléfono. »", opts:["sonaba","sonó","suena"], correct:1, fb:"Le décor (estudiaba) est interrompu par l'action ponctuelle : sonó (indéfini)." },
    { q:"Quel est l'imparfait de « comer » pour « nosotros » ?", opts:["comíamos","comábamos","comimos"], correct:0, fb:"-ER → -íamos : comíamos. « Comimos » est l'indéfini (nous avons mangé)." },
    { q:"« Tenía diez años » exprime…", opts:["une action soudaine","un décor : l'âge","un futur"], correct:1, fb:"L'âge dans le passé est toujours un décor → imparfait : tenía, comme « j'avais dix ans »." }
  ],

  ROUNDS: [
    { bank:["cuando","Estudiaba","el","en","sonó","mi","teléfono","habitación","."], answer:"estudiaba en mi habitación cuando sonó el teléfono .", display:"Estudiaba en mi habitación cuando sonó el teléfono.", fr:"J'étudiais dans ma chambre quand le téléphone a sonné." },
    { bank:["Lyon","pequeña","en","De","vivía","."], answer:"de pequeña vivía en lyon .", display:"De pequeña, vivía en Lyon.", fr:"Quand j'étais petite, j'habitais à Lyon." },
    { bank:["a","porque","Ayer","fui","mal","trabajar","me","no","encontraba","."], answer:"ayer no fui a trabajar porque me encontraba mal .", display:"Ayer no fui a trabajar porque me encontraba mal.", fr:"Hier, je ne suis pas allée travailler parce que je ne me sentais pas bien." },
    { bank:["tos","fiebre","Tenía","mucha","y","."], answer:"tenía fiebre y mucha tos .", display:"Tenía fiebre y mucha tos.", fr:"J'avais de la fièvre et je toussais beaucoup." },
    { bank:["hacías","llamé","Qué","te","cuando","¿","?"], answer:"¿ qué hacías cuando te llamé ?", display:"¿Qué hacías cuando te llamé?", fr:"Qu'est-ce que tu faisais quand je t'ai appelé(e) ?" },
    { bank:["cine","salimos","Llovía","del","cuando","."], answer:"llovía cuando salimos del cine .", display:"Llovía cuando salimos del cine.", fr:"Il pleuvait quand nous sommes sortis du cinéma." },
    { bank:["sol","un","Era","día","hacía","precioso","y","."], answer:"era un día precioso y hacía sol .", display:"Era un día precioso y hacía sol.", fr:"C'était une journée magnifique et il faisait beau." },
    { bank:["playa","niño","a","iba","Cuando","la","era","veranos","todos","los","."], answer:"cuando era niño iba a la playa todos los veranos .", display:"Cuando era niño, iba a la playa todos los veranos.", fr:"Quand j'étais enfant, j'allais à la plage tous les étés." },
    { bank:["me","El","y","recetó","médico","examinó","me","medicamentos","unos","."], answer:"el médico me examinó y me recetó unos medicamentos .", display:"El médico me examinó y me recetó unos medicamentos.", fr:"Le médecin m'a examinée et m'a prescrit des médicaments." },
    { bank:["yo","cocinaba","Mientras","leía","mi","hijo","."], answer:"mientras yo cocinaba mi hijo leía .", display:"Mientras yo cocinaba, mi hijo leía.", fr:"Pendant que je cuisinais, mon fils lisait." }
  ],

  QUIZ: [
    { cat:"ecrit", q:"« Cuando ___ niña, vivía en el campo. »", opts:["fui","era","estuve"], correct:1, why:"Description d'une période de la vie (l'enfance) = décor → imparfait de ser : era." },
    { cat:"ecrit", q:"« Leía el periódico cuando de repente ___ la luz. » (se ir = s'éteindre, la lumière)", opts:["se iba","se va","se fue"], correct:2, why:"« De repente » annonce l'action soudaine qui coupe le décor → indéfini : se fue (la lumière s'est éteinte / il y a eu une coupure)." },
    { cat:"ecrit", q:"Quel est l'imparfait de « hablar » pour « vosotros » ?", opts:["hablasteis","hablabais","hablaríais"], correct:1, why:"-AR → -abais : hablabais. « Hablasteis » est l'indéfini (vous avez parlé), « hablaríais » le conditionnel." },
    { cat:"ecrit", q:"« Ayer ___ un accidente con la bici. »", opts:["tuve","tenía","tengo"], correct:0, why:"Un accident = événement ponctuel, daté (ayer) → indéfini : tuve. « Tenía » décrirait une possession ou un état." },
    { cat:"ecrit", q:"Quelle phrase exprime une HABITUDE passée ?", opts:["El sábado pasado jugué al tenis.","Los sábados jugaba al tenis.","Mañana juego al tenis."], correct:1, why:"« Los sábados » = chaque samedi, habitude → imparfait : jugaba." },
    { cat:"ecrit", q:"« iba » vient de quel verbe ?", opts:["ver","ser","ir"], correct:2, why:"ir → iba, ibas, iba… (irrégulier). ver → veía, ser → era : ce sont les trois seuls irréguliers de l'imparfait." },
    { cat:"ecrit", q:"« ___ las once de la noche cuando llegamos a casa. »", opts:["Eran","Fueron","Son"], correct:0, why:"L'heure dans un récit est un décor → imparfait : Eran las once (il était onze heures)." },
    { cat:"ecrit", q:"« Il était fatigué » (état, décor). En espagnol :", opts:["Estuvo cansado.","Estaba cansado.","Fue cansado."], correct:1, why:"Un état au moment du récit = imparfait de estar : estaba. « Estuvo » présente l'état comme une période fermée, terminée." },
    { cat:"ecrit", q:"Quelle phrase est CORRECTE ?", opts:["Mientras yo duché, sonó el timbre.","Mientras yo me duchaba, sonó el timbre.","Mientras yo me duchaba, sonaba el timbre de repente."], correct:1, why:"Action en cours (me duchaba, imparfait) coupée par l'événement (sonó, indéfini). « De repente » impose l'indéfini." },
    { cat:"ecrit", q:"« ¿Qué tal la fiesta de ayer? — ¡___ genial! »", opts:["Era","Fue","Estaba"], correct:1, why:"On donne le BILAN d'un événement terminé → indéfini : fue genial (ça a été génial)." },
    { cat:"oral", audio:"Estudiaba en mi habitación cuando sonó el teléfono.", q:"Écoute : quelle action coupe le décor ?", opts:["Étudier","Être dans sa chambre","Le téléphone qui sonne","Répondre au téléphone"], correct:2, why:"« sonó » (indéfini) = l'événement ; « estudiaba » (imparfait) = le décor qui était en cours." },
    { cat:"oral", audio:"De pequeño, iba a casa de mis abuelos todos los domingos.", q:"Écoute : que raconte la personne ?", opts:["Une visite unique chez ses grands-parents","Une habitude de son enfance","Un projet pour dimanche","Un souvenir d'hier"], correct:1, why:"« De pequeño » + « iba » (imparfait) + « todos los domingos » = habitude passée." },
    { cat:"oral", audio:"Ayer no fui a trabajar porque tenía fiebre.", q:"Écoute : pourquoi la personne n'est-elle pas allée travailler ?", opts:["Elle avait de la fièvre","Elle avait un rendez-vous","Elle était en vacances","Il pleuvait"], correct:0, why:"« tenía fiebre » = elle avait de la fièvre (état = imparfait) ; « no fui » = l'événement (indéfini)." },
    { cat:"oral", audio:"Hacía mucho calor y de repente empezó a llover.", q:"Écoute : que s'est-il passé ?", opts:["Il a fait chaud toute la journée","Il a plu puis il a fait chaud","Il faisait froid","Il faisait chaud, puis soudain il s'est mis à pleuvoir"], correct:3, why:"« hacía calor » = décor météo ; « de repente empezó a llover » = l'événement soudain." },
    { cat:"comprehension", passage:"“Era sábado por la mañana. Hacía sol y los niños jugaban en el parque. De repente, un perro enorme entró corriendo y se llevó la pelota.”", q:"D'après le texte, que faisaient les enfants quand le chien est arrivé ?", opts:["Ils mangeaient","Ils jouaient dans le parc","Ils rentraient chez eux","Ils promenaient un chien"], correct:1, why:"« jugaban en el parque » (imparfait = décor) ; le chien « entró » et « se llevó la pelota » (indéfini = actions)." },
    { cat:"comprehension", passage:"“Cuando tenía veinte años, trabajaba en un restaurante de Barcelona. Un día, conocí allí a mi mejor amiga, Lucía. Ella era camarera y siempre estaba de buen humor.”", q:"D'après le texte, qu'est-il arrivé un jour ?", opts:["La personne a quitté Barcelone","La personne a rencontré sa meilleure amie","Lucía est devenue cuisinière","Le restaurant a fermé"], correct:1, why:"« Un día, conocí a mi mejor amiga » : conocí (indéfini de conocer) = j'ai fait la connaissance de. Le reste (tenía, trabajaba, era, estaba) est le décor." },
    { cat:"comprehension", passage:"“(rappel) El verano pasado fui a Sevilla con mi familia. Visitamos la Giralda, comimos tapas en una terraza y dimos un paseo por el río.”", q:"D'après le texte, qu'a fait la famille ?", opts:["Elle a visité la Giralda et mangé des tapas","Elle est restée à l'hôtel","Elle est allée à la plage","Elle a acheté une maison"], correct:0, why:"Rappel X4 : fui (ir), visitamos, comimos, dimos (dar) = prétérit indéfini, une suite d'actions terminées." },
    { cat:"comprehension", passage:"“(rappel) Mi amiga Lucía es de Valencia, pero ahora está en Madrid por su trabajo. Es muy alegre, aunque hoy está un poco cansada.”", q:"D'après le texte, qu'est-ce qui est vrai ?", opts:["Lucía est née à Madrid","Lucía est triste de nature","Lucía vient de Valencia et se trouve à Madrid","Lucía est toujours fatiguée"], correct:2, why:"Rappel A1 : « es de Valencia » (ser = origine), « está en Madrid » (estar = localisation), « está cansada » (estar = état passager)." }
  ],

  PRON_VERBS: [
    {en:"Estudiaba en mi habitación cuando sonó el teléfono.", fr:"J'étudiais dans ma chambre quand le téléphone a sonné. (accent tonique : so-NÓ)"},
    {en:"De pequeña, iba a la playa todos los veranos.", fr:"Petite, j'allais à la plage tous les étés. (v = b : « iba », « veranos »)"},
    {en:"Tenía fiebre, dolor de garganta y mucha tos.", fr:"J'avais de la fièvre, mal à la gorge et je toussais beaucoup. (r roulé : « garganta »)"},
    {en:"Mientras yo cocinaba, mi hijo veía la tele.", fr:"Pendant que je cuisinais, mon fils regardait la télé. (« cocinaba » : c = z anglais en Espagne)"},
    {en:"De repente, se fue la luz.", fr:"Tout à coup, il y a eu une coupure de courant. (rr fort : « de Repente »)"},
    {en:"Ayer me encontraba mal y fui al médico.", fr:"Hier, je ne me sentais pas bien et je suis allée chez le médecin. (y = ll : « ayer »)"},
    {en:"El médico me examinó y me recetó jarabe.", fr:"Le médecin m'a examinée et m'a prescrit du sirop. (jota : « jarabe »)"},
    {en:"Era una mañana fría y llovía mucho.", fr:"C'était un matin froid et il pleuvait beaucoup. (ñ : « mañana » ; ll : « llovía »)"}
  ],

  READING: [
    "Era un martes de noviembre y hacía mucho frío.",
    "Yo estaba en casa, trabajaba en el ordenador y mi hijo dormía en su habitación.",
    "Fuera llovía y las calles estaban vacías.",
    "De repente, sonó el timbre.",
    "Eran las once de la noche y no esperaba a nadie.",
    "Me levanté despacio y abrí la puerta.",
    "Era mi vecina, la señora Pilar: estaba nerviosa y llevaba un gato en los brazos.",
    "Me explicó que el gato no era suyo y que lo encontró en la escalera.",
    "Lo dejamos en mi cocina y le dimos un poco de leche.",
    "Al día siguiente, encontramos a su dueño: ¡el gato vivía en el tercer piso!"
  ],
  GLOSS: [
    {en:"el ordenador", fr:"l'ordinateur (Amérique latine : la computadora)"},
    {en:"el timbre", fr:"la sonnette"},
    {en:"despacio", fr:"lentement"},
    {en:"la vecina", fr:"la voisine"},
    {en:"el dueño", fr:"le propriétaire (d'un animal, d'une maison)"},
    {en:"al día siguiente", fr:"le lendemain"}
  ],

  GRAMMAR1: {
    heading: "L'imparfait : le décor de l'histoire",
    lede: "Bonne nouvelle : l'imparfait espagnol fonctionne presque exactement comme l'imparfait français. Là où tu dis « je parlais, il faisait beau, j'avais dix ans », l'espagnol dit « hablaba, hacía sol, tenía diez años ». Et il n'a que deux séries de terminaisons et trois irréguliers.",
    conj: [["-AR →","-aba, -abas, -aba, -ábamos, -abais, -aban","hablar → hablaba"],["-ER / -IR →","-ía, -ías, -ía, -íamos, -íais, -ían","comer → comía · vivir → vivía"],["3 irréguliers →","ser : era · ir : iba · ver : veía","De niña, era muy tímida."],["À quoi il sert →","description, habitude, âge, heure, état, action en cours","Tenía diez años y vivía en Lyon."]],
    ruleHtml: "📖 Pour former l'imparfait, on enlève <b>-ar / -er / -ir</b> et on ajoute <b>-aba</b> (verbes en -AR) ou <b>-ía</b> (verbes en -ER et -IR). C'est tout : même <b>tener</b> (tenía), <b>hacer</b> (hacía), <b>estar</b> (estaba) ou <b>poder</b> (podía) sont réguliers ! Seuls <b>ser → era</b>, <b>ir → iba</b> et <b>ver → veía</b> changent. On l'utilise pour le <b>décor</b> : décrire (Era alta), parler d'une <b>habitude</b> (Todos los días iba al mercado), de l'<b>âge</b> (Tenía veinte años), de l'<b>heure</b> (Eran las ocho), d'un <b>état</b> physique ou d'esprit (Estaba cansada, Tenía miedo) ou d'une <b>action en cours</b> (Llovía).",
    dialogueLede: "Ashley montre une vieille photo à une amie espagnole :",
    dialogue: [
      {who:"them", en:"¿Esta niña eres tú? ¿Cuántos años tenías?", fr:"Cette petite fille, c'est toi ? Tu avais quel âge ?"},
      {who:"you", en:"Sí, tenía siete años. Vivíamos en el sur y todos los veranos íbamos a la playa.", fr:"Oui, j'avais sept ans. Nous vivions dans le sud et tous les étés nous allions à la plage."}
    ],
    whyLabel: "Pourquoi « hablaba » et « comía » se ressemblent tant",
    whyText: "Le yo et le él/ella ont la <b>même forme</b> à l'imparfait (yo hablaba / él hablaba), exactement comme en français à l'oral « je parlais / il parlait ». Le contexte ou un pronom sujet (<b>yo</b>, <b>él</b>) lève le doute. Autre repère : l'accent. À l'imparfait des verbes en -ER/-IR, le <b>í</b> porte toujours l'accent (co-<b>MÍ</b>-a), alors qu'à l'indéfini c'est la fin qui est accentuée (co-<b>MÍ</b> = j'ai mangé, co-<b>MIÓ</b> = il a mangé). Écoute bien la syllabe forte : elle te dit le temps !"
  },
  GRAMMAR2: {
    heading: "Imparfait ou indéfini ? Le décor et l'action",
    dialogueLede: "Au téléphone, une amie demande à Ashley pourquoi elle n'a pas répondu :",
    dialogue: [
      {who:"them", en:"Oye, ¿qué hacías anoche? ¡Te llamé tres veces!", fr:"Dis, qu'est-ce que tu faisais hier soir ? Je t'ai appelée trois fois !"},
      {who:"you", en:"Perdona, estaba en la ducha cuando sonó el teléfono y después me quedé dormida.", fr:"Pardon, j'étais sous la douche quand le téléphone a sonné, et après je me suis endormie."}
    ],
    ruleHtml: "🎬 Imagine un <b>film</b>. L'<b>imparfait</b> est le <b>décor</b> : la caméra montre la scène qui dure (il pleuvait, j'étudiais, il était tard). L'<b>indéfini</b> est <b>ce qui se passe</b> : l'événement qui fait avancer l'histoire (le téléphone a sonné, je suis sortie). La structure reine : <b>Imparfait + cuando + Indéfini</b> → « <b>Estudiaba</b> en mi habitación cuando <b>sonó</b> el teléfono ». Petit test : si tu peux dire « j'étais en train de… », c'est l'imparfait ; si tu peux répondre à « et alors, qu'est-ce qui s'est passé ? », c'est l'indéfini. Mots-signaux : <b>antes, de pequeño, siempre, todos los días, mientras</b> → imparfait ; <b>ayer, anoche, un día, de repente, el año pasado</b> → indéfini.",
    whyLabel: "Les trois pièges : estaba/estuve, tenía/tuve, era/fue",
    whyText: "En français, « j'étais » et « j'ai été » ne se confondent pas… et l'espagnol suit la même logique ! <b>Estaba</b> cansada = j'étais fatiguée (état en toile de fond) ; <b>estuve</b> enferma tres días = j'ai été malade trois jours (période fermée, comptée). <b>Tenía</b> un coche = j'avais une voiture (possession) ; <b>tuve</b> un accidente = j'ai eu un accident (événement). <b>Era</b> simpático = il était sympa (description) ; <b>fue</b> un día increíble = ça a été une journée incroyable (bilan d'un événement terminé). Le réflexe : si en français tu dirais « j'ai eu / j'ai été », pense <b>indéfini</b> ; si tu dirais « j'avais / j'étais », pense <b>imparfait</b>."
  },

  REVIEW: [
    { q:"« Ayer ___ al cine con mis amigos. » (ir)", opts:["fui","iba"], correct:0, fb:"Un événement unique, daté (ayer) → indéfini : fui. (rappel X4)" },
    { q:"« fui » peut venir de…", opts:["ir et ser","ir et ver"], correct:0, fb:"À l'indéfini, ir et ser ont les mêmes formes : fui, fuiste, fue… Le contexte tranche. (rappel X4)" },
    { q:"Indéfini de « hacer » pour « yo » :", opts:["hací","hice"], correct:1, fb:"hacer → hice, hiciste, hizo… (irrégulier, sans accent). (rappel X4)" },
    { q:"« El año pasado ___ mucho trabajo. » (tener)", opts:["tuve","tení"], correct:0, fb:"tener → tuve, tuviste, tuvo… (irrégulier en -uv-). (rappel X4)" },
    { q:"« Anoche nosotros ___ una paella. » (comer)", opts:["comimos","comemos"], correct:0, fb:"« Anoche » = passé terminé → indéfini : comimos. (rappel X4)" }
  ],

  CULTURE_NOTE: {
    icon: "📖",
    title: "Note culturelle — « Érase una vez… » : il était une fois",
    html: "Les contes espagnols commencent par « <b>Érase una vez</b> » (Espagne) ou « <b>Había una vez</b> » (Amérique latine) : deux imparfaits, parce qu'on pose le <b>décor</b> ! Puis arrive « <b>Un día…</b> » avec l'indéfini : l'histoire démarre. Petite différence régionale utile : en Espagne, pour ce qui s'est passé <b>aujourd'hui</b>, on dit plutôt « Hoy <b>he ido</b> al médico » (passé composé), alors qu'en Amérique latine on dit volontiers « Hoy <b>fui</b> al médico ». Mais l'imparfait, lui, s'emploie de la même façon partout : <b>tenía, estaba, era, iba</b> te serviront de Madrid à Mexico."
  },

  DRILLS: [
    { type:"fill", text:"Antes yo ___ (hablar) mucho por teléfono con mi madre.", answers:["hablaba"], why:"Habitude passée (antes) → imparfait. -AR → radical habl- + aba." },
    { type:"fill", text:"De pequeños, nosotros ___ (comer) en casa de la abuela los domingos.", answers:["comíamos"], why:"Habitude → imparfait. -ER → -íamos (accent sur le í)." },
    { type:"fill", text:"Mi padre ___ (vivir) en Sevilla cuando conoció a mi madre.", answers:["vivía"], why:"Situation de fond (où il vivait) → imparfait. -IR → -ía, comme -ER." },
    { type:"fill", text:"Cuando era niña, ___ (ir, yo) a la playa cada verano.", answers:["iba"], why:"ir → iba (irrégulier n°2). Habitude : cada verano." },
    { type:"fill", text:"Mis abuelos ___ (ser) muy simpáticos.", answers:["eran"], why:"Description de personnes → imparfait de ser : era, eras, era, éramos, erais, eran." },
    { type:"fill", text:"¿___ (ver, tú) muchos dibujos animados de pequeño?", answers:["Veías","veías"], why:"ver → veía, veías… (irrégulier n°3 : on garde le e de ver)." },
    { type:"fill", text:"Vosotros ___ (estudiar) juntos en la universidad, ¿verdad?", answers:["estudiabais"], why:"-AR, vosotros → -abais : estudiabais. (Amérique latine : ustedes estudiaban.)" },
    { type:"fill", text:"Antes nosotros ___ (ir) al cine todos los sábados.", answers:["íbamos"], why:"ir → íbamos (avec accent). Habitude : todos los sábados." },
    { type:"choice", q:"« Estudiaba en mi habitación cuando sonó el teléfono. » Quel verbe est l'ACTION qui fait avancer l'histoire ?", opts:["estudiaba","sonó"], correct:1, why:"sonó (indéfini) = l'événement ponctuel ; estudiaba (imparfait) = le décor en cours." },
    { type:"choice", q:"Dans « Llovía y hacía frío », que décrivent les verbes ?", opts:["Des actions soudaines","Le décor (la météo)","Des projets"], correct:1, why:"La météo est un décor typique → imparfait : llovía, hacía frío." },
    { type:"fill", text:"Ayer no ___ (ir, yo) a trabajar porque me encontraba mal.", answers:["fui"], why:"L'événement de la journée (ne pas aller travailler, hier) → indéfini : fui. La raison (me encontraba mal) est le décor." },
    { type:"fill", text:"Ayer no fui a trabajar porque ___ (tener) fiebre.", answers:["tenía"], why:"L'état physique → imparfait : tenía (j'avais de la fièvre)." },
    { type:"fill", text:"___ (ser) las diez cuando llegó el médico.", answers:["Eran","eran"], why:"L'heure dans un récit = décor → eran (pluriel : las diez)." },
    { type:"fill", text:"Mientras yo ___ (cocinar), mi hijo hacía los deberes.", answers:["cocinaba"], why:"« Mientras » = deux actions en cours en même temps → imparfait des deux côtés." },
    { type:"fill", text:"Llovía cuando ___ (salir, nosotros) del cine.", answers:["salimos"], why:"Décor (llovía) + cuando + ACTION (salimos, indéfini). Salir est régulier à l'indéfini." },
    { type:"fill", text:"El verano pasado ___ (ir, yo) a Sevilla con mi familia.", answers:["fui"], why:"Voyage daté et terminé (el verano pasado) → indéfini : fui. (Texte T2 d'Ashley.)" },
    { type:"fill", text:"El tiempo ___ (ser) fantástico y hacía mucho calor.", answers:["era"], why:"Description du temps pendant le séjour → imparfait : era. (T2)" },
    { type:"fill", text:"El tiempo era fantástico y ___ (hacer) mucho calor.", answers:["hacía"], why:"Météo en toile de fond → hacía. Et attention : « el calor » est MASCULIN → mucho calor (et non « mucha calor », coquille corrigée du texte T2)." },
    { type:"fill", text:"___ (visitar, nosotros) la Giralda y paseamos por el barrio de Santa Cruz.", answers:["Visitamos","visitamos"], why:"Suite d'actions du voyage → indéfini : visitamos (même forme qu'au présent, le contexte dit que c'est passé)." },
    { type:"fill", text:"Dormía tranquilamente y de repente ___ (oír, yo) un ruido.", answers:["oí"], why:"« De repente » = action soudaine → indéfini : oí (j'ai entendu)." },
    { type:"fill", text:"Cuando ___ (tener, yo) veinte años, vivía en Madrid.", answers:["tenía"], why:"L'âge dans le passé = toujours imparfait : tenía, comme « j'avais »." },
    { type:"fill", text:"« Elle était fatiguée. » → ___ cansada.", answers:["Estaba","estaba"], why:"Un état en toile de fond → imparfait de estar : estaba." },
    { type:"choice", q:"« Hier, j'ai été malade toute la journée. »", opts:["Ayer estaba enferma todo el día.","Ayer estuve enferma todo el día."], correct:1, why:"Période fermée et délimitée (todo el día, ayer) → indéfini : estuve. Comme en français : « j'AI ÉTÉ malade toute la journée »." },
    { type:"choice", q:"« Ayer ___ un problema con el coche. »", opts:["tenía","tuve"], correct:1, why:"Un problème survenu hier = événement → tuve (j'ai eu). « Tenía » = j'avais (situation qui durait)." },
    { type:"choice", q:"« ¿Qué tal el concierto de anoche? — ¡___ increíble! »", opts:["Fue","Era"], correct:0, why:"Bilan d'un événement terminé → fue (ça a été). « Era » décrirait quelque chose en toile de fond." },
    { type:"choice", q:"« Mi primer profesor de español ___ de Bilbao y muy divertido. »", opts:["fue","era"], correct:1, why:"Description d'une personne (origine, caractère) → imparfait : era." },
    { type:"choice", q:"Repère l'erreur : « Cuando era pequeño, fui al colegio en bici todos los días. »", opts:["« era » devrait être « fue »","« fui » devrait être « iba »","Il n'y a pas d'erreur"], correct:1, why:"« todos los días » = habitude → imparfait : iba al colegio. « Fui » raconterait UNE seule fois." },
    { type:"fill", text:"Nosotros ___ (divertirse) mucho en la fiesta de ayer.", answers:["nos divertimos"], why:"Exercice d'Ashley n°37 : une fête précise, hier → indéfini. divertirse est pronominal : NOS divertimos." },
    { type:"fill", text:"— ¿Qué ___ (hacer, tú) cuando te llamé? — Estaba en la ducha.", answers:["hacías"], why:"On demande l'action EN COURS au moment de l'appel → imparfait : hacías (qu'est-ce que tu faisais ?)." },
    { type:"fill", text:"— ¿Y por qué no contestaste? — Porque no ___ (oír, yo) el teléfono.", answers:["oí"], why:"Fait ponctuel (ne pas avoir entendu l'appel) → indéfini : no oí." },
    { type:"fill", text:"Hoy hace sol. → Ayer también ___ sol.", answers:["hacía","hizo"], why:"Les deux sont justes : « hacía sol » décrit le décor, « hizo sol » résume la journée comme un tout terminé. Dans un récit, préfère hacía." },
    { type:"choice", q:"« Era una noche tranquila. Todos dormían. De repente, ___ la luz. »", opts:["se iba","se fue"], correct:1, why:"Après deux décors (era, dormían), « de repente » introduit l'événement → se fue la luz (il y a eu une coupure)." },
    { type:"fill", text:"De pequeña, mi hija ___ (querer) ser astronauta.", answers:["quería"], why:"Un désir qui durait (état d'esprit) → imparfait : quería. Régulier à l'imparfait !" },
    { type:"choice", q:"Traduis : « Il était huit heures quand je suis sortie. »", opts:["Fueron las ocho cuando salía.","Eran las ocho cuando salí.","Eran las ocho cuando salía."], correct:1, why:"L'heure = décor (eran) ; sortir = l'action (salí). Imparfait + cuando + Indéfini." }
  ],

  ANNOTATED: {
    title: "En el médico",
    intro: "Le texte n°5 de ton cahier, corrigé. Touche chaque mot : repère les imparfaits (le décor : comment tu te sentais) et les indéfinis (les actions : ce qui s'est passé).",
    sentences: [
      { fr:"Hier, je ne suis pas allée travailler parce que je ne me sentais pas bien.",
        tokens: [
          { w:"Ayer", tag:"adverbe", fr:"hier", tip:"Moment daté et terminé : les actions de la journée seront à l'indéfini." },
          { w:"no", tag:"adverbe", fr:"ne… pas", tip:"Une seule négation en espagnol, placée devant le verbe." },
          { w:"fui", tag:"verbe", info:"ir · prétérit indéfini · yo", fr:"je suis allée", tip:"ACTION. Même forme que ser (fui = j'ai été) : ici « a trabajar » montre que c'est ir." },
          { w:"a", tag:"préposition", fr:"(pour) aller", tip:"ir a + infinitif : aller + faire quelque chose." },
          { w:"trabajar", tag:"verbe", info:"trabajar · infinitif", fr:"travailler" },
          { w:"porque", tag:"conjonction", fr:"parce que", tip:"En un seul mot pour « parce que ». « ¿Por qué? » (deux mots, accent) = pourquoi ?" },
          { w:"me encontraba", tag:"verbe pronominal", info:"encontrarse · imparfait · yo", fr:"je me sentais", tip:"DÉCOR : un état physique qui durait → imparfait en -aba." },
          { w:"mal", tag:"adverbe", fr:"mal (pas bien)" }
        ] },
      { fr:"J'avais une forte fièvre, mal à la gorge et je toussais beaucoup.",
        tokens: [
          { w:"Tenía", tag:"verbe", info:"tener · imparfait · yo", fr:"j'avais", tip:"DÉCOR : les symptômes décrivent l'état → imparfait. Tener est régulier à l'imparfait !" },
          { w:"fiebre", tag:"nom", info:"fém. sing.", fr:"de la fièvre", tip:"Pas d'article en espagnol : tener fiebre = avoir de la fièvre." },
          { w:"alta", tag:"adjectif", info:"fém. sing.", fr:"forte (mot à mot : haute)" },
          { w:"dolor de garganta", tag:"nom", info:"masc. sing.", fr:"mal de gorge" },
          { w:"y", tag:"conjonction", fr:"et" },
          { w:"mucha", tag:"déterminant", info:"fém. sing.", fr:"beaucoup de", tip:"mucho s'accorde : mucha tos (la tos est féminin)." },
          { w:"tos", tag:"nom", info:"fém. sing.", fr:"toux" }
        ] },
      { fr:"Je suis allée au centre de santé à dix heures du matin.",
        tokens: [
          { w:"Fui", tag:"verbe", info:"ir · prétérit indéfini · yo", fr:"je suis allée", tip:"ACTION : l'histoire avance." },
          { w:"al", tag:"préposition", fr:"au", tip:"a + el = al (contraction obligatoire, comme « à + le = au »)." },
          { w:"centro de salud", tag:"nom", info:"masc. sing.", fr:"centre de santé" },
          { w:"a las diez", tag:"préposition", fr:"à dix heures", tip:"Groupe figé pour l'heure : a la una, a las dos, a las diez…" },
          { w:"de la mañana", tag:"préposition", fr:"du matin", tip:"de la mañana (matin), de la tarde (après-midi), de la noche (soir)." }
        ] },
      { fr:"Le médecin m'a examinée et m'a dit que j'avais une grosse grippe.",
        tokens: [
          { w:"El", tag:"article", info:"masc. sing.", fr:"le" },
          { w:"médico", tag:"nom", info:"masc. sing.", fr:"médecin", tip:"Au féminin : la médica (ou la médico)." },
          { w:"me", tag:"pronom COD", fr:"m'", tip:"examiner QUI ? moi → me (COD), placé avant le verbe conjugué." },
          { w:"examinó", tag:"verbe", info:"examinar · prétérit indéfini · él", fr:"a examiné", tip:"Correction de ton texte : « examinó » avec accent sur le ó. Sans accent, « examino » = j'examine (présent) !" },
          { w:"y", tag:"conjonction", fr:"et" },
          { w:"me", tag:"pronom COI", fr:"m' (à moi)", tip:"dire À QUI ? à moi → me (COI)." },
          { w:"dijo", tag:"verbe", info:"decir · prétérit indéfini · él", fr:"a dit", tip:"ACTION. Irrégulier : dije, dijiste, dijo… (sans accent)." },
          { w:"que", tag:"conjonction", fr:"que" },
          { w:"tenía", tag:"verbe", info:"tener · imparfait · yo", fr:"j'avais", tip:"Au discours rapporté, l'état reste à l'imparfait, comme en français « il m'a dit que j'avais »." },
          { w:"una", tag:"article", info:"fém. sing.", fr:"une" },
          { w:"gripe", tag:"nom", info:"fém. sing.", fr:"grippe" },
          { w:"fuerte", tag:"adjectif", info:"fém. sing.", fr:"forte, grosse", tip:"fuerte est identique au masculin et au féminin." }
        ] },
      { fr:"Il m'a prescrit des médicaments.",
        tokens: [
          { w:"Me", tag:"pronom COI", fr:"m' (à moi)" },
          { w:"recetó", tag:"verbe", info:"recetar · prétérit indéfini · él", fr:"a prescrit", tip:"ACTION. Accent final = indéfini (rece-TÓ)." },
          { w:"unos", tag:"article", info:"masc. plur.", fr:"des" },
          { w:"medicamentos", tag:"nom", info:"masc. plur.", fr:"médicaments" }
        ] },
      { fr:"Il m'a recommandé de me reposer à la maison pendant trois jours et de boire beaucoup d'eau.",
        tokens: [
          { w:"Me", tag:"pronom COI", fr:"m' (à moi)" },
          { w:"recomendó", tag:"verbe", info:"recomendar · prétérit indéfini · él", fr:"a recommandé", tip:"ACTION. Pas de diphtongue (ie) à l'indéfini : recomendó." },
          { w:"descansar", tag:"verbe", info:"descansar · infinitif", fr:"(de) me reposer", tip:"Pas de « de » en espagnol : recomendar + infinitif directement." },
          { w:"en", tag:"préposition", fr:"à" },
          { w:"casa", tag:"nom", info:"fém. sing.", fr:"la maison", tip:"en casa = à la maison (sans article)." },
          { w:"durante", tag:"préposition", fr:"pendant" },
          { w:"tres", tag:"déterminant", fr:"trois" },
          { w:"días", tag:"nom", info:"masc. plur.", fr:"jours", tip:"el día est masculin malgré son -a." },
          { w:"y", tag:"conjonction", fr:"et" },
          { w:"beber", tag:"verbe", info:"beber · infinitif", fr:"boire", tip:"b et v se prononcent pareil en espagnol : beber." },
          { w:"mucha", tag:"déterminant", info:"fém. sing.", fr:"beaucoup d'" },
          { w:"agua", tag:"nom", info:"fém. sing.", fr:"eau", tip:"Féminin, mais on dit « el agua » (pour la prononciation) ; l'adjectif reste féminin : mucha agua, el agua fría." }
        ] }
    ],
    questions: [
      { q:"Dans le texte, quels verbes forment le DÉCOR (l'état de la personne) ?", opts:["fui, examinó, dijo","me encontraba, tenía","recetó, recomendó"], correct:1, why:"me encontraba et tenía sont à l'imparfait : ils décrivent comment elle se sentait. Les autres sont des actions (indéfini)." },
      { q:"Pourquoi faut-il écrire « me examinó » et non « me examino » ?", opts:["C'est une simple question d'orthographe","« examino » voudrait dire « j'examine » (présent)","« examinó » est l'imparfait"], correct:1, why:"L'accent écrit sur le ó marque l'indéfini, 3e personne : il m'a examinée. Sans accent, examino = j'examine." },
      { q:"À quelle heure la personne est-elle allée au centre de santé ?", opts:["À deux heures de l'après-midi","À dix heures du matin","À dix heures du soir"], correct:1, why:"« a las diez de la mañana » = à dix heures du matin." },
      { q:"« Fui » dans la phrase 1 vient de quel verbe ?", opts:["ser","ir","hacer"], correct:1, why:"« fui a trabajar » = je suis allée travailler → ir. (fui peut aussi venir de ser, mais pas ici.)" }
    ]
  },

  NEXT_PREVIEW: "X6 (Le futur et le conditionnel) : « Serán » n'est pas un nouveau verbe ! Tu vas démasquer le futur et le conditionnel, construits sur l'infinitif entier comme en français (je serai / je serais), avec leurs 12 irréguliers rangés par familles.",

  META: { vocabTitle: "Raconter au passé : le décor et l'action (X5)", lectureTitle: "Un soir de novembre", bilanTitle: "Bravo, tu sais maintenant planter le décor et faire avancer ton histoire !", pronLabel: "Imparfait et indéfini (hablaba / habló)", todayLede: "raconter une histoire au passé en choisissant entre l'imparfait (le décor : description, habitude, âge, état) et l'indéfini (l'action qui fait avancer l'histoire) — s'appuie sur X4 (le prétérit indéfini)" }
};

// X6 — Le futur et le conditionnel (« Serán » n'est pas un nouveau verbe !) — s'appuie sur X5 (imparfait/indéfini) et sur le texte T8 d'Ashley « Mi próximo viaje a México »
LESSONS_ES[306] = {
  code: "X6", level: "A2",
  VOCAB: [
    {block:"Démasquer le futur", en:"serán", ipa:"/seˈɾan/", fr:"ils seront / ça doit être (ser)", note:"Le mot qui fait peur : c'est juste ser au futur, 3e pers. du pluriel (ser + án). « ¿Quién llama? — Serán mis tíos » = ça doit être mes oncle et tante (supposition)."},
    {block:"Démasquer le futur", en:"tendré", ipa:"/tenˈdɾe/", fr:"j'aurai (tener)", note:"Famille « + d » : tener → tendré. Le e de l'infinitif tombe et un d apparaît (ten-d-ré)."},
    {block:"Démasquer le futur", en:"saldré", ipa:"/salˈdɾe/", fr:"je sortirai / je partirai (salir)", note:"Famille « + d » : salir → saldré. De même poner → pondré, venir → vendré, valer → valdré."},
    {block:"Démasquer le futur", en:"haré", ipa:"/aˈɾe/", fr:"je ferai (hacer)", note:"Famille « raccourcie » : hacer → haré (comme en français faire → je ferai, lui aussi raccourci !)."},
    {block:"Démasquer le futur", en:"diré", ipa:"/diˈɾe/", fr:"je dirai (decir)", note:"Famille « raccourcie » : decir → diré. « Te lo diré mañana » = je te le dirai demain."},
    {block:"Démasquer le futur", en:"podré", ipa:"/poˈðɾe/", fr:"je pourrai (poder)", note:"Famille « sans e » : poder → podré. De même saber → sabré, querer → querré, haber → habré, caber → cabré."},
    {block:"Démasquer le futur", en:"habrá", ipa:"/aˈβɾa/", fr:"il y aura", note:"C'est le futur de « hay » (haber). « Habrá mucha gente » = il y aura beaucoup de monde."},
    {block:"Le conditionnel", en:"me gustaría", ipa:"/me ɣustaˈɾi.a/", fr:"j'aimerais, je voudrais", note:"Le souhait poli par excellence : « Me gustaría viajar a México ». Se construit comme « me gusta »."},
    {block:"Le conditionnel", en:"¿podrías…?", ipa:"/poˈðɾi.as/", fr:"tu pourrais… ?", note:"Demande polie : « ¿Podrías ayudarme? ». Avec usted : « ¿Podría…? ». Même irrégulier qu'au futur : podr-."},
    {block:"Le conditionnel", en:"deberías", ipa:"/deβeˈɾi.as/", fr:"tu devrais", note:"Pour donner un conseil : « Deberías descansar » = tu devrais te reposer. Régulier : deber + ías."},
    {block:"Le conditionnel", en:"tendría", ipa:"/tenˈdɾi.a/", fr:"j'aurais (tener)", note:"Mêmes irréguliers qu'au futur, terminaisons -ía : tendría, pondría, saldría, vendría."},
    {block:"Le conditionnel", en:"haría", ipa:"/aˈɾi.a/", fr:"je ferais (hacer)", note:"« Yo, en tu lugar, no lo haría » = moi, à ta place, je ne le ferais pas (hypothèse)."},
    {block:"Le conditionnel", en:"sería", ipa:"/seˈɾi.a/", fr:"je serais / ce serait (ser)", note:"« Sería perfecto » = ce serait parfait. Comparaison : será = ce sera (futur) / sería = ce serait (conditionnel)."},
    {block:"Parler de l'avenir", en:"mañana", ipa:"/maˈɲana/", fr:"demain", note:"Attention : « la mañana » = le matin ; « mañana por la mañana » = demain matin !"},
    {block:"Parler de l'avenir", en:"pasado mañana", ipa:"/paˈsaðo maˈɲana/", fr:"après-demain", note:"Mot à mot : « demain passé »."},
    {block:"Parler de l'avenir", en:"el próximo mes", ipa:"/el ˈpɾoksimo mes/", fr:"le mois prochain", note:"« próximo » se place AVANT le nom : el próximo viaje, la próxima semana."},
    {block:"Parler de l'avenir", en:"el año que viene", ipa:"/el ˈaɲo ke ˈβjene/", fr:"l'année prochaine", note:"Mot à mot : « l'année qui vient ». Synonyme : el próximo año."},
    {block:"Parler de l'avenir", en:"dentro de dos semanas", ipa:"/ˈdentɾo ðe ðos seˈmanas/", fr:"dans deux semaines", note:"« dans + durée » = dentro de (et non « en » !). « Dentro de un mes » = dans un mois."},
    {block:"Parler de l'avenir", en:"algún día", ipa:"/alˈɣun ˈdi.a/", fr:"un jour (dans le futur)", note:"Parfait avec le futur ou le conditionnel : « Algún día viviré en España »."},
    {block:"Parler de l'avenir", en:"voy a + infinitif", ipa:"/boj a/", fr:"je vais + infinitif", note:"Futur proche : voy, vas, va, vamos, vais, van + a + infinitif. « Voy a cumplir un sueño ». (vais sans accent !)"},
    {block:"Le voyage (texte T8)", en:"cumplir un sueño", ipa:"/kumˈpliɾ un ˈsweɲo/", fr:"réaliser un rêve", note:"« cumplir » = accomplir, tenir (une promesse) ; « cumplir años » = avoir son anniversaire. « el sueño » = le rêve ET le sommeil."},
    {block:"Le voyage (texte T8)", en:"alquilar un coche", ipa:"/alkiˈlaɾ un ˈkotʃe/", fr:"louer une voiture", note:"En Amérique latine on dit plutôt « rentar un carro » (Mexique) ou « un auto »."},
    {block:"Le voyage (texte T8)", en:"tener ganas de", ipa:"/teˈneɾ ˈɣanaz ðe/", fr:"avoir envie de", note:"« Tengo muchas ganas de partir » = j'ai très envie de partir. Toujours au pluriel : ganas."},
    {block:"Verbes clés (X6)", en:"viajar", ipa:"/bjaˈxaɾ/", fr:"voyager", note:"Futur : viajaré (infinitif entier + é). La j est une jota, bien raclée."},
    {block:"Verbes clés (X6)", en:"conocer", ipa:"/konoˈθeɾ/", fr:"connaître, découvrir (un lieu)", note:"« Conocer Oaxaca » = découvrir Oaxaca (y aller pour la première fois). Futur régulier : conoceré."},
    {block:"Verbes clés (X6)", en:"quedarse", ipa:"/keˈðaɾse/", fr:"rester", note:"Pronominal : « Me quedaré dos semanas » = je resterai deux semaines. Futur régulier : me quedaré."}
  ],
  MEM_WORDS: [0,1,3,7,8,19], // serán, tendré, haré, me gustaría, ¿podrías…?, voy a + infinitif

  MINI_CHECKS: [
    { q:"« ¿Quién llama? — Serán mis tíos. » « Serán » veut dire…", opts:["ils ont été","ça doit être","ils étaient"], correct:1, fb:"serán = ser au futur, 3e pers. pluriel, ici pour une SUPPOSITION : « ça doit être mes oncle et tante »." },
    { q:"Futur de « tener » pour « yo » :", opts:["teneré","tendré","tenré"], correct:1, fb:"tener fait partie de la famille « + d » : tendré (comme pondré, saldré, vendré)." },
    { q:"Pour demander poliment : « Tu pourrais m'aider ? »", opts:["¿Podrás ayudarme?","¿Podrías ayudarme?","¿Puedes ayudarme ayer?"], correct:1, fb:"La politesse passe par le conditionnel : ¿Podrías…? (tu pourrais…?)." },
    { q:"« Mañana ___ a llamar a mi madre. » (futur proche)", opts:["voy","iré","iba"], correct:0, fb:"Futur proche = ir (au présent) + a + infinitif : voy a llamar." }
  ],

  ROUNDS: [
    { bank:["México","semanas","a","dos","Viajaré","durante","."], answer:"viajaré a méxico durante dos semanas .", display:"Viajaré a México durante dos semanas.", fr:"Je voyagerai au Mexique pendant deux semaines." },
    { bank:["año","tiempo","que","El","tendré","viene","más","."], answer:"el año que viene tendré más tiempo .", display:"El año que viene tendré más tiempo.", fr:"L'année prochaine, j'aurai plus de temps." },
    { bank:["ayudarme","maleta","Podrías","con","la","¿","?"], answer:"¿ podrías ayudarme con la maleta ?", display:"¿Podrías ayudarme con la maleta?", fr:"Tu pourrais m'aider avec la valise ?" },
    { bank:["conocer","Me","Oaxaca","gustaría","."], answer:"me gustaría conocer oaxaca .", display:"Me gustaría conocer Oaxaca.", fr:"J'aimerais découvrir Oaxaca." },
    { bank:["agua","Deberías","más","beber","."], answer:"deberías beber más agua .", display:"Deberías beber más agua.", fr:"Tu devrais boire plus d'eau." },
    { bank:["alquilar","Mañana","coche","voy","un","a","."], answer:"mañana voy a alquilar un coche .", display:"Mañana voy a alquilar un coche.", fr:"Demain, je vais louer une voiture." },
    { bank:["Quién","tíos","llama","Serán","mis","¿","?","."], answer:"¿ quién llama ? serán mis tíos .", display:"¿Quién llama? — Serán mis tíos.", fr:"Qui appelle ? — Ça doit être mon oncle et ma tante." },
    { bank:["lo","prometo","haré","Te","que","mañana","."], answer:"te prometo que lo haré mañana .", display:"Te prometo que lo haré mañana.", fr:"Je te promets que je le ferai demain." },
    { bank:["tu","Yo","nada","en","diría","no","lugar","."], answer:"yo en tu lugar no diría nada .", display:"Yo, en tu lugar, no diría nada.", fr:"Moi, à ta place, je ne dirais rien." },
    { bank:["fin","harás","el","Qué","semana","de","¿","?"], answer:"¿ qué harás el fin de semana ?", display:"¿Qué harás el fin de semana?", fr:"Que feras-tu ce week-end ?" }
  ],

  QUIZ: [
    { cat:"ecrit", q:"« harán » =", opts:["haber · futur · ellos","hacer · futur · ellos","hablar · conditionnel · ellos"], correct:1, why:"har- = radical raccourci de hacer ; -án = futur, ellos/ellas. Donc : ils feront." },
    { cat:"ecrit", q:"Futur de « vivir » pour « nosotros » :", opts:["viviremos","vivimos","viviríamos"], correct:0, why:"Infinitif ENTIER + emos : viviremos. « vivimos » = présent/indéfini, « viviríamos » = conditionnel." },
    { cat:"ecrit", q:"« No encuentro mis gafas. — ___ en el coche. » (supposition)", opts:["Estuvieron","Estarán","Estaban"], correct:1, why:"Le futur sert à supposer quelque chose au présent : estarán = elles doivent être (dans la voiture)." },
    { cat:"ecrit", q:"Futur de « salir » pour « yo » :", opts:["saliré","saldré","salré"], correct:1, why:"Famille « + d » : salir → saldré (comme tener → tendré, poner → pondré, venir → vendré)." },
    { cat:"ecrit", q:"Pour donner un conseil : « Tu devrais te reposer. »", opts:["Debes descansar ayer.","Deberás descansar.","Deberías descansar."], correct:2, why:"Le conseil = conditionnel de deber : deberías (tu devrais), comme en français." },
    { cat:"ecrit", q:"« Je serais très contente de venir. »", opts:["Estaré muy contenta de venir.","Estaría muy contenta de venir.","Estaba muy contenta de venir."], correct:1, why:"« serais » (conditionnel) → -ía : estaría. « Estaré » = je serai (futur)." },
    { cat:"ecrit", q:"Quel est l'infinitif de « querré » ?", opts:["querer","quedar","correr"], correct:0, why:"Famille « sans e » : querer → querr- → querré (je voudrai). Deux r !" },
    { cat:"ecrit", q:"« Mañana ___ mucha gente en la playa. »", opts:["habrá","hay","hubo"], correct:0, why:"« il y aura » = habrá, futur de hay (haber)." },
    { cat:"ecrit", q:"Tu as déjà ton billet, c'est décidé : « Demain, je vais prendre l'avion. »", opts:["Mañana tomaría el avión.","Mañana voy a tomar el avión.","Mañana tomaba el avión."], correct:1, why:"Projet décidé et proche → futur proche : voy a tomar. (En Espagne on dit aussi « coger el avión ».)" },
    { cat:"ecrit", q:"Quelle phrase est CORRECTE ?", opts:["El lunes teneré una reunión.","El lunes tendré una reunión.","El lunes tendría una reunión mañana."], correct:1, why:"tener → tendré (irrégulier). « teneré » n'existe pas." },
    { cat:"oral", audio:"¿Quién llama a estas horas? Será tu hermano.", q:"Écoute : que pense la personne ?", opts:["Que le frère appellera plus tard","Que c'est sans doute le frère qui appelle","Que le frère a appelé hier","Qu'il faut appeler le frère"], correct:1, why:"« Será tu hermano » = ça doit être ton frère : futur de supposition." },
    { cat:"oral", audio:"Me gustaría viajar a México el año que viene.", q:"Écoute : qu'exprime la personne ?", opts:["Un souvenir de voyage","Un souhait pour l'année prochaine","Un voyage déjà réservé demain","Un conseil"], correct:1, why:"« Me gustaría » = j'aimerais (souhait) ; « el año que viene » = l'année prochaine." },
    { cat:"oral", audio:"Deberías descansar un poco, pareces muy cansada.", q:"Écoute : que fait la personne ?", opts:["Elle donne un conseil","Elle fait une promesse","Elle raconte sa journée","Elle pose une question"], correct:0, why:"« Deberías descansar » = tu devrais te reposer : conditionnel de conseil." },
    { cat:"oral", audio:"Te prometo que te llamaré cuando llegue a Cancún.", q:"Écoute : que promet la personne ?", opts:["D'aller à Cancún avec toi","D'appeler en arrivant à Cancún","D'écrire une lettre","De rentrer demain"], correct:1, why:"« te llamaré » (futur de promesse) = je t'appellerai." },
    { cat:"comprehension", passage:"“El próximo verano iré a Madrid con mi hijo. Nos quedaremos una semana en casa de mi prima. Visitaremos el Museo del Prado y, si tenemos tiempo, haremos una excursión a Toledo.”", q:"D'après le texte, que feront-ils si le temps le permet ?", opts:["Ils visiteront le Prado","Ils iront à Toledo","Ils resteront chez la cousine","Ils rentreront plus tôt"], correct:1, why:"« si tenemos tiempo, haremos una excursión a Toledo » : haremos = hacer au futur, nosotros." },
    { cat:"comprehension", passage:"“— ¿Qué harías con mucho dinero? — Primero, compraría una casa con jardín. Después, viajaría por toda América Latina. Y dejaría de trabajar los lunes.”", q:"D'après le dialogue, que ferait la personne en premier ?", opts:["Elle voyagerait en Amérique latine","Elle arrêterait de travailler","Elle achèterait une maison avec jardin","Elle donnerait l'argent"], correct:2, why:"« Primero, compraría una casa con jardín » : conditionnel = hypothèse (ce qu'elle ferait)." },
    { cat:"comprehension", passage:"“(rappel) Cuando era pequeña, vivía en un pueblo. Un día, mi padre encontró trabajo en la ciudad y nos mudamos. Yo tenía ocho años.”", q:"D'après le texte, quel événement a changé la vie de la famille ?", opts:["La naissance d'un enfant","Le nouveau travail du père en ville","Un voyage à la mer","Les vacances au village"], correct:1, why:"Rappel X5 : « encontró trabajo » et « nos mudamos » (indéfini) = les actions ; « era, vivía, tenía » (imparfait) = le décor." },
    { cat:"comprehension", passage:"“(rappel) Ayer fui al médico porque me encontraba mal. Tenía fiebre y mucha tos. El médico me examinó y me recetó un jarabe.”", q:"D'après le texte, comment se sentait la personne ?", opts:["Elle allait très bien","Elle avait de la fièvre et toussait","Elle avait mal au dos","Elle était juste fatiguée"], correct:1, why:"Rappel X5 : « Tenía fiebre y mucha tos » (imparfait = état). « fui, examinó, recetó » = les actions." }
  ],

  PRON_VERBS: [
    {en:"¿Quién llama? — Serán mis tíos.", fr:"Qui appelle ? — Ça doit être mon oncle et ma tante. (ll : « llama » ; accent tonique : se-RÁN)"},
    {en:"Viajaré a México el próximo mes.", fr:"Je voyagerai au Mexique le mois prochain. (jota : « viajaré », « México » se prononce MÉ-ji-co)"},
    {en:"Me gustaría conocer Oaxaca.", fr:"J'aimerais découvrir Oaxaca. (c = z anglais en Espagne : « conocer » ; x = jota : « Oa-JA-ca »)"},
    {en:"¿Podrías ayudarme con la maleta?", fr:"Tu pourrais m'aider avec la valise ? (d doux : « podrías » ; accent tonique sur le í)"},
    {en:"Mañana tendré más tiempo.", fr:"Demain j'aurai plus de temps. (ñ : « mañana » ; r simple : « tendré »)"},
    {en:"Yo, en tu lugar, no lo haría.", fr:"Moi, à ta place, je ne le ferais pas. (h muette : « haría » = a-RÍ-a)"},
    {en:"Alquilaré un coche para recorrer la región.", fr:"Je louerai une voiture pour parcourir la région. (rr fort : « recorrer » ; g = jota devant i : « región »)"},
    {en:"Deberías venir con nosotros.", fr:"Tu devrais venir avec nous. (v = b : « deberías », « venir »)"}
  ],

  READING: [
    "Dentro de dos semanas empezarán mis vacaciones.",
    "Este año no voy a quedarme en casa: voy a ir a Andalucía con mi hijo.",
    "Primero pasaremos tres días en Granada y visitaremos la Alhambra.",
    "Después alquilaremos un coche y conduciremos hasta Málaga.",
    "Allí nos esperará mi amiga Carmen, que vive cerca del mar.",
    "Seguro que hará mucho calor, así que llevaré crema solar y un sombrero.",
    "A mi hijo le gustaría aprender a hacer surf, pero todavía no sabemos si habrá clases.",
    "Carmen dice que podremos comer pescado fresco todos los días.",
    "Me gustaría ir también a Sevilla, pero será para otra vez.",
    "¡Tengo muchísimas ganas de ver el mar!"
  ],
  GLOSS: [
    {en:"conducir (conduciremos)", fr:"conduire (nous conduirons)"},
    {en:"hasta", fr:"jusqu'à"},
    {en:"seguro que", fr:"c'est sûr que, à coup sûr"},
    {en:"la crema solar", fr:"la crème solaire"},
    {en:"para otra vez", fr:"pour une autre fois"}
  ],

  GRAMMAR1: {
    heading: "Le futur simple : l'infinitif entier + une terminaison",
    lede: "« Serán » n'est pas un nouveau verbe ! C'est ser au futur (ser + án), 3e personne du pluriel. Comme en français (parler → je parlerai), le futur espagnol se construit sur l'infinitif ENTIER, et les terminaisons sont les MÊMES pour -AR, -ER et -IR.",
    conj: [["Tous les verbes →","infinitif + é, ás, á, emos, éis, án","hablaré · comeré · viviré"],["Famille « + d » →","tener → tendré · poner → pondré · salir → saldré · venir → vendré · valer → valdré","Mañana saldré temprano."],["Famille « raccourcie » →","hacer → haré · decir → diré","Te lo diré mañana."],["Famille « sans e » →","poder → podré · saber → sabré · querer → querré · haber → habré · caber → cabré","¿Podrás venir?"]],
    ruleHtml: "📖 Futur = <b>infinitif entier</b> + <b>é, ás, á, emos, éis, án</b> : viajar → viajar<b>é</b>, ser → ser<b>án</b>. Ces terminaisons viennent du verbe <b>haber</b> au présent (he, has, ha, hemos, habéis, han) — exactement comme le français « parler + ai » vient de « j'ai » ! Seuls <b>12 verbes</b> abîment un peu leur infinitif, et ils se rangent en 3 familles : <b>+ d</b> (tendré, pondré, saldré, vendré, valdré), <b>raccourcis</b> (haré, diré), <b>sans e</b> (podré, sabré, querré, habré, cabré). Les terminaisons, elles, ne changent jamais. On l'emploie pour : une <b>prédiction</b> (Mañana lloverá), une <b>promesse</b> (Te llamaré), un <b>avenir plus lointain ou moins sûr</b> (Algún día viviré en España) et… une <b>supposition au présent</b> : ¿Quién llama? — <b>Serán</b> mis tíos (= ça doit être eux).",
    dialogueLede: "Le téléphone sonne chez Ashley, tard le soir :",
    dialogue: [
      {who:"them", en:"¿Quién llama a estas horas?", fr:"Qui appelle à cette heure-ci ?"},
      {who:"you", en:"No sé… Serán mis tíos, siempre llaman tarde. ¿Qué hora será?", fr:"Je ne sais pas… Ça doit être mon oncle et ma tante, ils appellent toujours tard. Quelle heure peut-il bien être ?"}
    ],
    whyLabel: "Futur proche (voy a) ou futur simple (-é) ?",
    whyText: "Les deux existent, comme en français « je vais partir / je partirai ». <b>Voy a + infinitif</b> = un projet décidé, proche, une intention : « Mañana <b>voy a alquilar</b> un coche » (c'est prévu). Le <b>futur simple</b> = plus lointain, une prédiction, une promesse ou une supposition : « Algún día <b>viviré</b> en México », « Te lo <b>prometo</b>, <b>vendré</b> », « <b>Serán</b> las diez ». À l'oral, surtout en Amérique latine, <b>voy a</b> est de loin le plus fréquent : si tu hésites, il ne sera jamais faux pour un projet. Mais tu dois savoir RECONNAÎTRE le futur simple pour comprendre les autres."
  },
  GRAMMAR2: {
    heading: "Le conditionnel : je serai / je serais, será / sería",
    dialogueLede: "Au bureau, Ashley parle à une collègue :",
    dialogue: [
      {who:"you", en:"¿Podrías ayudarme con este informe? Me gustaría terminarlo hoy.", fr:"Tu pourrais m'aider avec ce rapport ? J'aimerais le finir aujourd'hui."},
      {who:"them", en:"Claro. Pero deberías descansar un poco: yo, en tu lugar, tomaría un café primero.", fr:"Bien sûr. Mais tu devrais te reposer un peu : moi, à ta place, je prendrais d'abord un café."}
    ],
    ruleHtml: "💭 Conditionnel = <b>infinitif entier</b> + <b>ía, ías, ía, íamos, íais, ían</b> (les terminaisons de l'imparfait en -ER !) : viajar → viajar<b>ía</b>, ser → ser<b>ía</b>. Et il utilise <b>exactement les mêmes 12 irréguliers</b> que le futur : tendr<b>ía</b>, har<b>ía</b>, dir<b>ía</b>, podr<b>ía</b>, sabr<b>ía</b>, saldr<b>ía</b>… Tu en apprends un, tu as les deux ! Il sert à : la <b>politesse</b> (¿<b>Podrías</b> cerrar la puerta?), le <b>conseil</b> (<b>Deberías</b> dormir más), le <b>souhait</b> (<b>Me gustaría</b> ir a México) et l'<b>hypothèse</b> (Con más tiempo, <b>aprendería</b> ruso).",
    whyLabel: "La même logique qu'en français",
    whyText: "En français : « je <b>serai</b> » (futur) / « je <b>serais</b> » (conditionnel) — même base, seule la fin change (-ai / -ais, la terminaison de l'imparfait). En espagnol, c'est pareil : <b>seré</b> / <b>sería</b>, <b>tendré</b> / <b>tendría</b>, <b>haré</b> / <b>haría</b>. Le futur finit par un <b>é / á</b> accentué ; le conditionnel par <b>-ía</b>. Pour démasquer une forme, enlève la fin : <b>harán</b> → har- (hacer) + án (futur, ellos) ; <b>podrías</b> → podr- (poder) + ías (conditionnel, tú). Attention au piège : <b>-ía</b> tout seul sur le radical (comía) = imparfait ; <b>-ía</b> sur l'infinitif (comería) = conditionnel !"
  },

  REVIEW: [
    { q:"« Estudiaba en mi habitación cuando ___ el teléfono. »", opts:["sonó","sonaba"], correct:0, fb:"Le décor (estudiaba) est coupé par l'action ponctuelle : sonó. (rappel X5)" },
    { q:"« De pequeña, ___ a la playa todos los veranos. »", opts:["fui","iba"], correct:1, fb:"Habitude passée → imparfait : iba (ir, un des 3 irréguliers). (rappel X5)" },
    { q:"« Ayer no fui a trabajar porque ___ fiebre. »", opts:["tenía","tuve un"], correct:0, fb:"L'état physique = décor → imparfait : tenía fiebre. (rappel X5)" },
    { q:"« ___ las diez cuando llegamos. »", opts:["Fueron","Eran"], correct:1, fb:"L'heure dans un récit = décor → imparfait : eran. (rappel X5)" },
    { q:"« El médico me ___ y me recetó unos medicamentos. »", opts:["examinó","examino"], correct:0, fb:"Indéfini, 3e personne : examinó (avec accent). « examino » = j'examine. (rappel X5)" }
  ],

  CULTURE_NOTE: {
    icon: "🌎",
    title: "Note culturelle — le futur de ce côté-ci et de l'autre de l'Atlantique",
    html: "En <b>Amérique latine</b>, le futur proche domine encore plus qu'en Espagne : « <b>Voy a viajar</b> » plutôt que « viajaré ». Le futur simple y sert surtout à la <b>supposition</b> : « ¿Qué hora <b>será</b>? » (quelle heure peut-il bien être ?). N'oublie pas non plus qu'on y dit <b>ustedes</b> au lieu de vosotros : « ustedes <b>viajarán</b> » (et non viajaréis). Au Mexique, tu entendras aussi « <b>ahorita</b> » : littéralement « tout de suite »… mais qui peut vouloir dire dans cinq minutes comme dans deux heures ! Enfin, pour les vœux, les Espagnols adorent « <b>¡Ojalá!</b> » (pourvu que !), un mot venu de l'arabe."
  },

  DRILLS: [
    { type:"fill", text:"Mañana yo ___ (hablar) con el jefe.", answers:["hablaré"], why:"Infinitif entier + é : hablar + é = hablaré." },
    { type:"fill", text:"El año que viene nosotros ___ (vivir) en Madrid.", answers:["viviremos"], why:"vivir + emos = viviremos. Mêmes terminaisons pour -AR, -ER, -IR." },
    { type:"fill", text:"¿___ (comer, tú) con nosotros el domingo?", answers:["Comerás","comerás"], why:"comer + ás = comerás (accent sur le á)." },
    { type:"fill", text:"Ellos ___ (tener) vacaciones en agosto.", answers:["tendrán"], why:"Famille « + d » : tener → tendr- + án = tendrán." },
    { type:"fill", text:"Te lo ___ (decir, yo) mañana, te lo prometo.", answers:["diré"], why:"Famille « raccourcie » : decir → dir- + é. Promesse → futur simple." },
    { type:"fill", text:"¿Qué ___ (hacer, vosotros) este verano?", answers:["haréis"], why:"hacer → har- + éis = haréis. (Amérique latine : ¿Qué harán ustedes?)" },
    { type:"fill", text:"No sé si ___ (poder, yo) venir a la fiesta.", answers:["podré"], why:"Famille « sans e » : poder → podr- + é = podré." },
    { type:"fill", text:"Mañana mi hijo ___ (salir) del colegio a las cinco.", answers:["saldrá","va a salir"], why:"Famille « + d » : salir → saldr- + á = saldrá. (« va a salir » est juste aussi : futur proche.)" },
    { type:"fill", text:"___ (haber) mucha gente en el concierto.", answers:["Habrá","habrá"], why:"« il y aura » = habrá (futur de hay)." },
    { type:"fill", text:"¿___ (venir, tú) a mi cumpleaños?", answers:["Vendrás","vendrás"], why:"Famille « + d » : venir → vendr- + ás = vendrás." },
    { type:"choice", q:"Démasque « harán » :", opts:["hacer · futur · ellos","haber · futur · ellos","hablar · conditionnel · ellos"], correct:0, why:"har- = hacer raccourci ; -án = futur, 3e pers. pluriel : ils feront." },
    { type:"choice", q:"« ¿Quién llama? — Serán mis tíos. » Que veut dire « serán » ici ?", opts:["Ce seront mes oncle et tante (demain)","Ça doit être mes oncle et tante","C'étaient mes oncle et tante"], correct:1, why:"serán = ser, futur, ellos. Ici, le futur sert à faire une SUPPOSITION sur le présent : ça doit être eux." },
    { type:"choice", q:"Démasque « pondría » :", opts:["poder · conditionnel · yo/él","poner · conditionnel · yo/él","poner · futur · ellos"], correct:1, why:"pond- = poner (famille « + d ») ; -ía = conditionnel (yo ou él/ella) : je mettrais / il mettrait." },
    { type:"choice", q:"Démasque « sabréis » :", opts:["saber · futur · vosotros","sabor · nom pluriel","saber · conditionnel · vosotros"], correct:0, why:"sabr- = saber (famille « sans e ») ; -éis = futur, vosotros : vous saurez." },
    { type:"choice", q:"Démasque « querrá » :", opts:["quedar · futur · él","querer · futur · él","querer · conditionnel · él"], correct:1, why:"querr- = querer sans son e (deux r) ; -á = futur, él/ella : il voudra." },
    { type:"fill", text:"No encuentro mis llaves. — ___ (estar) en el coche.", answers:["Estarán","estarán"], why:"Supposition au présent → futur : estarán = elles doivent être dans la voiture." },
    { type:"fill", text:"¿Qué hora es? — No sé, ___ (ser) las diez.", answers:["serán"], why:"Comme « Serán mis tíos » : serán las diez = il doit être dix heures (supposition)." },
    { type:"choice", q:"« Juan no contesta al teléfono. ___ ocupado. » (supposition)", opts:["Estará","Será","Estuvo"], correct:0, why:"Occupé = état passager → estar ; supposition au présent → futur : estará (il doit être occupé)." },
    { type:"fill", text:"Me ___ (gustar) viajar a México.", answers:["gustaría"], why:"Souhait poli → conditionnel : gustar + ía = me gustaría (j'aimerais)." },
    { type:"fill", text:"¿___ (poder, tú) cerrar la ventana, por favor?", answers:["Podrías","podrías"], why:"Politesse → conditionnel. Même irrégulier qu'au futur : podr- + ías." },
    { type:"fill", text:"Estás muy cansada: ___ (deber, tú) descansar.", answers:["deberías"], why:"Conseil → conditionnel de deber : deberías (tu devrais)." },
    { type:"fill", text:"Yo, en tu lugar, no lo ___ (hacer).", answers:["haría"], why:"Hypothèse (« à ta place ») → conditionnel : har- + ía = haría." },
    { type:"fill", text:"Con más dinero, ___ (tener, yo) una casa en la playa.", answers:["tendría"], why:"Hypothèse → conditionnel. tener → tendr- (même irrégulier qu'au futur) + ía." },
    { type:"fill", text:"Y tú, ¿qué ___ (decir) en mi lugar?", answers:["dirías"], why:"Hypothèse → conditionnel. decir → dir- + ías = dirías (tu dirais)." },
    { type:"fill", text:"« Ce serait parfait ! » → ¡___ perfecto!", answers:["Sería","sería"], why:"serait → sería (ser + ía). Compare : « ce sera » = será." },
    { type:"fill", text:"« Ce sera difficile. » → ___ difícil.", answers:["Será","será"], why:"sera → será (ser + á). Futur = é/á accentué ; conditionnel = -ía." },
    { type:"choice", q:"« Je serais ravie de venir. »", opts:["Estaré encantada de ir.","Estaría encantada de ir."], correct:1, why:"serais (conditionnel) → estaría. « Estaré » = je serai (futur)." },
    { type:"choice", q:"Tu as ton billet, c'est prévu : « Demain je vais prendre l'avion. »", opts:["Mañana voy a tomar el avión.","Mañana tomaría el avión."], correct:0, why:"Projet décidé et proche → futur proche : voy a + infinitif." },
    { type:"choice", q:"Au restaurant, pour demander poliment l'addition :", opts:["¿Podría traerme la cuenta, por favor?","¿Podrá traerme la cuenta, por favor?","¿Puede trae la cuenta?"], correct:0, why:"Politesse = conditionnel : ¿Podría…? (vous pourriez…?, usted)." },
    { type:"choice", q:"« Promis, je t'appellerai ! »", opts:["¡Te llamaría, te lo prometo!","¡Te llamaré, te lo prometo!"], correct:1, why:"Promesse → futur simple : llamaré. « llamaría » = j'appellerais (hypothèse)." },
    { type:"fill", text:"Voy a viajar a México. → ___ a México. (futur simple)", answers:["Viajaré","viajaré"], why:"voy a viajar (futur proche) → viajaré (futur simple) : infinitif + é." },
    { type:"choice", q:"Repère l'erreur : « Mañana teneré tiempo para ti. »", opts:["« teneré » devrait être « tendré »","« Mañana » devrait être « Ayer »","Il n'y a pas d'erreur"], correct:0, why:"tener est irrégulier (famille « + d ») : tendré." },
    { type:"fill", text:"¿Crees que ___ (llover) mañana?", answers:["lloverá","va a llover"], why:"Prédiction → futur simple : llover + á = lloverá. (« va a llover » aussi possible.)" },
    { type:"choice", q:"« comería » ou « comía » : lequel est un CONDITIONNEL ?", opts:["comía","comería"], correct:1, why:"comería = infinitif entier (comer) + ía → conditionnel (je mangerais). comía = radical (com-) + ía → imparfait (je mangeais)." }
  ],

  ANNOTATED: {
    title: "Mi próximo viaje a México",
    intro: "Le texte n°8 de ton cahier, avec une phrase ajoutée au conditionnel. Touche chaque mot : repère le futur proche (voy a), les futurs simples (-é, -á) et le conditionnel (-ía).",
    sentences: [
      { fr:"En décembre prochain, je vais réaliser un grand rêve.",
        tokens: [
          { w:"El", tag:"article", info:"masc. sing.", fr:"le" },
          { w:"próximo", tag:"adjectif", info:"masc. sing.", fr:"prochain", tip:"Placé AVANT le nom : el próximo mes, la próxima semana." },
          { w:"mes de diciembre", tag:"nom", info:"masc. sing.", fr:"mois de décembre", tip:"Les mois s'écrivent sans majuscule en espagnol." },
          { w:"voy a", tag:"auxiliaire", info:"ir · présent · yo + a", fr:"je vais", tip:"FUTUR PROCHE : ir (présent) + a + infinitif. Le projet est décidé." },
          { w:"cumplir", tag:"verbe", info:"cumplir · infinitif", fr:"réaliser, accomplir" },
          { w:"un", tag:"article", info:"masc. sing.", fr:"un" },
          { w:"gran", tag:"adjectif", info:"masc. sing.", fr:"grand", tip:"grande devient gran devant un nom singulier : un gran sueño, una gran idea." },
          { w:"sueño", tag:"nom", info:"masc. sing.", fr:"rêve", tip:"el sueño = le rêve ET le sommeil (tengo sueño = j'ai sommeil)." }
        ] },
      { fr:"Je voyagerai au Mexique pendant deux semaines.",
        tokens: [
          { w:"Viajaré", tag:"verbe", info:"viajar · futur simple · yo", fr:"je voyagerai", tip:"FUTUR : infinitif entier viajar + é." },
          { w:"a", tag:"préposition", fr:"au (vers)", tip:"Destination = a : viajar a México, ir a Madrid." },
          { w:"México", tag:"nom propre", fr:"Mexique", tip:"Le x se prononce comme une jota : MÉ-ji-co." },
          { w:"durante", tag:"préposition", fr:"pendant" },
          { w:"dos", tag:"déterminant", fr:"deux" },
          { w:"semanas", tag:"nom", info:"fém. plur.", fr:"semaines" }
        ] },
      { fr:"D'abord, je serai à Mexico pour visiter les musées et le centre historique.",
        tokens: [
          { w:"Primero", tag:"adverbe", fr:"d'abord" },
          { w:"estaré", tag:"verbe", info:"estar · futur simple · yo", fr:"je serai", tip:"FUTUR de estar (localisation → estar). estar + é, régulier." },
          { w:"en", tag:"préposition", fr:"à (dans)" },
          { w:"la Ciudad de México", tag:"nom propre", info:"fém. sing.", fr:"Mexico (la ville)", tip:"En espagnol, le pays = México, la capitale = la Ciudad de México (CDMX)." },
          { w:"para", tag:"préposition", fr:"pour", tip:"para + infinitif = but (pour faire). Tout sur por/para au chapitre X7 !" },
          { w:"visitar", tag:"verbe", info:"visitar · infinitif", fr:"visiter" },
          { w:"los", tag:"article", info:"masc. plur.", fr:"les" },
          { w:"museos", tag:"nom", info:"masc. plur.", fr:"musées" },
          { w:"y", tag:"conjonction", fr:"et" },
          { w:"el", tag:"article", info:"masc. sing.", fr:"le" },
          { w:"centro", tag:"nom", info:"masc. sing.", fr:"centre" },
          { w:"histórico", tag:"adjectif", info:"masc. sing.", fr:"historique" }
        ] },
      { fr:"Ensuite, je louerai une voiture pour aller à Oaxaca et découvrir sa gastronomie.",
        tokens: [
          { w:"Después", tag:"adverbe", fr:"ensuite, après" },
          { w:"alquilaré", tag:"verbe", info:"alquilar · futur simple · yo", fr:"je louerai", tip:"FUTUR : alquilar + é." },
          { w:"un", tag:"article", info:"masc. sing.", fr:"une" },
          { w:"coche", tag:"nom", info:"masc. sing.", fr:"voiture", tip:"Masculin en espagnol ! Au Mexique : el carro." },
          { w:"para", tag:"préposition", fr:"pour" },
          { w:"ir", tag:"verbe", info:"ir · infinitif", fr:"aller" },
          { w:"a", tag:"préposition", fr:"à" },
          { w:"Oaxaca", tag:"nom propre", fr:"Oaxaca", tip:"Se prononce « oa-JA-ca » (x = jota)." },
          { w:"y", tag:"conjonction", fr:"et" },
          { w:"conocer", tag:"verbe", info:"conocer · infinitif", fr:"découvrir", tip:"conocer un lugar = y aller et le découvrir." },
          { w:"su", tag:"déterminant", info:"fém. sing.", fr:"sa" },
          { w:"gastronomía", tag:"nom", info:"fém. sing.", fr:"gastronomie" }
        ] },
      { fr:"Enfin, je terminerai le voyage en me détendant sur les plages de Cancún.",
        tokens: [
          { w:"Finalmente", tag:"adverbe", fr:"enfin" },
          { w:"terminaré", tag:"verbe", info:"terminar · futur simple · yo", fr:"je terminerai", tip:"FUTUR : terminar + é." },
          { w:"el", tag:"article", info:"masc. sing.", fr:"le" },
          { w:"viaje", tag:"nom", info:"masc. sing.", fr:"voyage" },
          { w:"relajándome", tag:"verbe pronominal", info:"relajarse · gérondif · yo", fr:"en me détendant", tip:"Gérondif (-ando) + pronom collé à la fin : relajando + me. L'accent écrit garde la syllabe forte : re-la-JÁN-do-me." },
          { w:"en", tag:"préposition", fr:"sur" },
          { w:"las", tag:"article", info:"fém. plur.", fr:"les" },
          { w:"playas", tag:"nom", info:"fém. plur.", fr:"plages" },
          { w:"de", tag:"préposition", fr:"de" },
          { w:"Cancún", tag:"nom propre", fr:"Cancún" }
        ] },
      { fr:"J'aimerais revenir un jour avec ma famille.",
        tokens: [
          { w:"Me gustaría", tag:"verbe pronominal", info:"gustar · conditionnel · (a mí)", fr:"j'aimerais", tip:"CONDITIONNEL de souhait : gustar + ía. Se construit comme me gusta." },
          { w:"volver", tag:"verbe", info:"volver · infinitif", fr:"revenir" },
          { w:"algún día", tag:"adverbe", fr:"un jour" },
          { w:"con", tag:"préposition", fr:"avec" },
          { w:"mi", tag:"déterminant", info:"fém. sing.", fr:"ma" },
          { w:"familia", tag:"nom", info:"fém. sing.", fr:"famille" }
        ] },
      { fr:"J'ai vraiment très envie de partir !",
        tokens: [
          { w:"Tengo", tag:"verbe", info:"tener · présent · yo", fr:"j'ai" },
          { w:"muchísimas", tag:"déterminant", info:"fém. plur.", fr:"vraiment beaucoup de", tip:"-ísimo = super-intensif : mucho → muchísimo. Accordé avec ganas (fém. plur.)." },
          { w:"ganas", tag:"nom", info:"fém. plur.", fr:"envie", tip:"tener ganas de = avoir envie de (toujours au pluriel)." },
          { w:"de", tag:"préposition", fr:"de" },
          { w:"partir", tag:"verbe", info:"partir · infinitif", fr:"partir", tip:"On dit aussi, plus courant à l'oral : ¡Tengo muchas ganas de irme!" }
        ] }
    ],
    questions: [
      { q:"Quel verbe du texte est au FUTUR PROCHE ?", opts:["viajaré","voy a cumplir","me gustaría"], correct:1, why:"voy a + infinitif = futur proche. viajaré = futur simple ; me gustaría = conditionnel." },
      { q:"Combien de temps durera le voyage ?", opts:["Deux mois","Deux semaines","Dix jours"], correct:1, why:"« durante dos semanas » = pendant deux semaines." },
      { q:"Pourquoi la personne louera-t-elle une voiture ?", opts:["Pour aller à Oaxaca","Pour aller à Cancún","Pour visiter les musées"], correct:0, why:"« alquilaré un coche para ir a Oaxaca » = pour aller à Oaxaca." },
      { q:"« Me gustaría volver » exprime…", opts:["une promesse","un souhait","une supposition"], correct:1, why:"me gustaría (conditionnel) = j'aimerais : un souhait poli." },
      { q:"Démasque « estaré » :", opts:["ser · futur · yo","estar · futur · yo","estar · conditionnel · yo"], correct:1, why:"estar + é = estaré (je serai, pour un lieu → estar)." }
    ]
  },

  NEXT_PREVIEW: "X7 (Por ou Para ?) : les deux « pour » de l'espagnol enfin démêlés — PARA regarde vers le but, la destination et le destinataire (Este regalo es para ti), POR regarde la cause, le chemin, le moyen et le prix (Gracias por la ayuda) — avec une image simple et beaucoup d'entraînement.",

  META: { vocabTitle: "Le futur et le conditionnel (X6)", lectureTitle: "Des vacances en Andalousie", bilanTitle: "Bravo, « serán » ne te fait plus peur : tu sais parler de l'avenir et faire des demandes polies !", pronLabel: "Futur et conditionnel (seré / sería)", todayLede: "démasquer le futur et le conditionnel (serán, haré, podrías…), choisir entre futur proche et futur simple, supposer, promettre, conseiller et demander poliment — s'appuie sur X5 (imparfait et indéfini)" }
};

// X7 — Por ou Para ? — chapitre « Les blocages du francophone » (espagnol) — s'appuie sur la Guía de trampas d'Ashley (piège 2), ses exercices 9-16 et son texte T10
LESSONS_ES[307] = {
  code: "X7", level: "A2",
  VOCAB: [
    {block:"PARA : la flèche vers le but", en:"para", ipa:"/ˈpaɾa/", fr:"pour (but, destination, destinataire)", note:"Imagine une flèche ➜ qui part vers quelque chose : un objectif, un lieu, une personne, une date. « Este regalo es para ti » : le cadeau VA vers toi."},
    {block:"PARA : la flèche vers le but", en:"para + infinitivo", ipa:"/ˈpaɾa/", fr:"pour + infinitif (afin de)", note:"« Estudio para aprobar » = j'étudie POUR réussir. Si tu peux dire « afin de » en français, c'est PARA."},
    {block:"PARA : la flèche vers le but", en:"para ti", ipa:"/ˈpaɾa ˈti/", fr:"pour toi (destinataire)", note:"Après para, on dit mí et ti (pas yo, tú) : para mí, para ti. Attention : mí prend un accent, ti jamais."},
    {block:"PARA : la flèche vers le but", en:"salir para Madrid", ipa:"/saˈliɾ ˈpaɾa maˈðɾið/", fr:"partir pour Madrid (destination)", note:"La flèche vers une destination : « El tren sale para Sevilla ». On dit aussi « salir hacia » (vers)."},
    {block:"PARA : la flèche vers le but", en:"para el lunes", ipa:"/ˈpaɾa el ˈlunes/", fr:"pour lundi (échéance)", note:"Une date limite, c'est une flèche vers un point du calendrier : « Los deberes son para el lunes »."},
    {block:"PARA : la flèche vers le but", en:"para mí", ipa:"/ˈpaɾa ˈmi/", fr:"pour moi, à mon avis", note:"Pour donner son opinion : « Para mí, es la mejor película ». On peut aussi dire « en mi opinión »."},
    {block:"POR : derrière ou au milieu", en:"por", ipa:"/poɾ/", fr:"par, à cause de, pour (cause, moyen, passage, prix)", note:"POR regarde DERRIÈRE (la cause, ce qui pousse) ou AU MILIEU (le chemin, le moyen, l'échange). Ce n'est jamais le but final."},
    {block:"POR : derrière ou au milieu", en:"gracias por", ipa:"/ˈɡɾaθjas poɾ/", fr:"merci pour", note:"On remercie POUR ce qui a déjà eu lieu (la cause du merci) : « Gracias por la ayuda ». Jamais « gracias para »."},
    {block:"POR : derrière ou au milieu", en:"pasear por el parque", ipa:"/paseˈaɾ poɾ el ˈpaɾke/", fr:"se promener dans le parc (en le traversant)", note:"POR = à travers, en passant par : « Paseo por la playa », « El tren pasa por Valencia »."},
    {block:"POR : derrière ou au milieu", en:"por teléfono", ipa:"/poɾ teˈlefono/", fr:"par téléphone (moyen)", note:"Le moyen est « au milieu », entre toi et l'autre : por teléfono, por correo, por internet."},
    {block:"POR : derrière ou au milieu", en:"pagar veinte euros por", ipa:"/paˈɣaɾ ˈbejnte ˈewɾos poɾ/", fr:"payer vingt euros pour (prix, échange)", note:"Un échange : ceci CONTRE cela. « Pagué veinte euros por esta camisa », « Te cambio mi bocadillo por tu fruta »."},
    {block:"POR : derrière ou au milieu", en:"escrito por", ipa:"/esˈkɾito poɾ/", fr:"écrit par (passif)", note:"Le « par » du passif, c'est POR : « El Quijote fue escrito por Cervantes »."},
    {block:"POR : derrière ou au milieu", en:"por la mañana", ipa:"/poɾ la maˈɲana/", fr:"le matin (moment approximatif)", note:"Un moment « flou » dans la journée : por la mañana, por la tarde, por la noche. Jamais « en la mañana » en Espagne."},
    {block:"POR : derrière ou au milieu", en:"por aquí", ipa:"/poɾ aˈki/", fr:"par ici, dans le coin", note:"Un lieu approximatif : « ¿Hay una farmacia por aquí? » = y a-t-il une pharmacie dans le coin ?"},
    {block:"Expressions figées", en:"por favor", ipa:"/poɾ faˈβoɾ/", fr:"s'il te plaît, s'il vous plaît", note:"Littéralement « par faveur ». Le v se prononce comme un b doux : fa-βor."},
    {block:"Expressions figées", en:"por supuesto", ipa:"/poɾ suˈpwesto/", fr:"bien sûr", note:"« ¿Me ayudas? — ¡Por supuesto! » Synonyme : claro."},
    {block:"Expressions figées", en:"por fin", ipa:"/poɾ ˈfin/", fr:"enfin (soulagement)", note:"« ¡Por fin es viernes! » = enfin vendredi ! Ne pas confondre avec « al final » (à la fin)."},
    {block:"Expressions figées", en:"por eso", ipa:"/poɾ ˈeso/", fr:"c'est pour ça, voilà pourquoi", note:"La cause (derrière) : « Estoy cansada, por eso me quedo en casa »."},
    {block:"Expressions figées", en:"por ejemplo", ipa:"/poɾ eˈxemplo/", fr:"par exemple", note:"Le j espagnol (la jota) se prononce du fond de la gorge, comme un r français très appuyé : e-KHem-plo."},
    {block:"Expressions figées", en:"para siempre", ipa:"/ˈpaɾa ˈsjempɾe/", fr:"pour toujours", note:"Une flèche sans fin vers l'avenir : PARA. « Te querré para siempre »."},
    {block:"Expressions figées", en:"¿por qué? / porque", ipa:"/poɾ ˈke/ /ˈpoɾke/", fr:"pourquoi ? / parce que", note:"Question en deux mots avec accent (¿por qué?), réponse en un mot sans accent (porque). Les deux regardent la CAUSE."},
    {block:"Expressions figées", en:"¿para qué?", ipa:"/ˈpaɾa ˈke/", fr:"pour quoi faire ? dans quel but ?", note:"« ¿Para qué sirve esto? » = à quoi ça sert ? On demande le BUT, la flèche."},
    {block:"Verbes clés (X7)", en:"servir para", ipa:"/seɾˈβiɾ ˈpaɾa/", fr:"servir à", note:"« Esta app sirve para aprender idiomas » : l'utilité, c'est un but → PARA."},
    {block:"Verbes clés (X7)", en:"pasar por", ipa:"/paˈsaɾ poɾ/", fr:"passer par, passer chez", note:"« Paso por tu casa a las seis » = je passe chez toi à six heures."},
    {block:"Verbes clés (X7)", en:"cambiar por", ipa:"/kamˈbjaɾ poɾ/", fr:"échanger contre", note:"L'échange : « Quiero cambiar esta talla por una más grande »."},
    {block:"Verbes clés (X7)", en:"preocuparse por", ipa:"/pɾeokuˈpaɾse poɾ/", fr:"s'inquiéter pour", note:"On s'inquiète À CAUSE de quelqu'un : « Me preocupo por mi hijo ». Verbe pronominal : me preocupo, te preocupas…"}
  ],
  MEM_WORDS: [0,6,7,8,17,21], // para, por, gracias por, pasear por el parque, por eso, ¿para qué?

  MINI_CHECKS: [
    { q:"« Ce cadeau est pour toi. » → Este regalo es ___ ti.", opts:["por","para"], correct:1, fb:"Le cadeau VA vers toi : c'est la flèche du destinataire → PARA." },
    { q:"« Merci pour ton aide. » → Gracias ___ tu ayuda.", opts:["por","para"], correct:0, fb:"On remercie pour ce qui a déjà été fait : c'est la CAUSE du merci → POR." },
    { q:"« Je me promène dans le parc. » → Paseo ___ el parque.", opts:["para","por"], correct:1, fb:"Se promener à travers un lieu = le PASSAGE → POR." },
    { q:"« J'étudie pour réussir l'examen. » → Estudio ___ aprobar el examen.", opts:["para","por"], correct:0, fb:"« Afin de » réussir : c'est le BUT → PARA + infinitif." }
  ],

  ROUNDS: [
    { bank:["regalo","Este","para","es","ti","."], answer:"este regalo es para ti .", display:"Este regalo es para ti.", fr:"Ce cadeau est pour toi." },
    { bank:["la","Gracias","ayuda","por","."], answer:"gracias por la ayuda .", display:"Gracias por la ayuda.", fr:"Merci pour l'aide." },
    { bank:["parque","Paseo","el","por","."], answer:"paseo por el parque .", display:"Paseo por el parque.", fr:"Je me promène dans le parc." },
    { bank:["para","Estudio","examen","aprobar","el","."], answer:"estudio para aprobar el examen .", display:"Estudio para aprobar el examen.", fr:"J'étudie pour réussir l'examen." },
    { bank:["euros","Pagué","por","camisa","veinte","esta","."], answer:"pagué veinte euros por esta camisa .", display:"Pagué veinte euros por esta camisa.", fr:"J'ai payé vingt euros pour cette chemise." },
    { bank:["mí","Para","música","la","es","mejor","la","."], answer:"para mí la música es la mejor .", display:"Para mí, la música es la mejor.", fr:"Pour moi, la musique, c'est ce qu'il y a de mieux." },
    { bank:["¿","sirve","Para","esto","qué","?"], answer:"¿ para qué sirve esto ?", display:"¿Para qué sirve esto?", fr:"À quoi ça sert ?" },
    { bank:["por","Te","teléfono","llamo","."], answer:"te llamo por teléfono .", display:"Te llamo por teléfono.", fr:"Je t'appelle par téléphone." },
    { bank:["cansada","Estoy","eso","por","me","casa","en","quedo","."], answer:"estoy cansada por eso me quedo en casa .", display:"Estoy cansada, por eso me quedo en casa.", fr:"Je suis fatiguée, c'est pour ça que je reste à la maison." },
    { bank:["¡","fin","Por","viernes","es","!"], answer:"¡ por fin es viernes !", display:"¡Por fin es viernes!", fr:"Enfin vendredi !" }
  ],

  QUIZ: [
    { cat:"ecrit", q:"« Le train part pour Madrid à huit heures. » → El tren sale ___ Madrid a las ocho.", opts:["por","para","en","de"], correct:1, why:"Une destination = la flèche ➜ vers un lieu → PARA." },
    { cat:"ecrit", q:"« Merci pour le repas ! » → ¡Gracias ___ la comida!", opts:["para","a","por","de"], correct:2, why:"Gracias POR : on remercie à cause de quelque chose (la cause, derrière)." },
    { cat:"ecrit", q:"« Les devoirs sont pour lundi. » → Los deberes son ___ el lunes.", opts:["para","por","en","a"], correct:0, why:"Une échéance, une date limite → PARA." },
    { cat:"ecrit", q:"« Ce livre a été écrit par une femme. » → Este libro fue escrito ___ una mujer.", opts:["para","de","con","por"], correct:3, why:"Le « par » du passif (qui a fait l'action) → POR." },
    { cat:"ecrit", q:"Quelle phrase est correcte pour « Je travaille pour vivre » ?", opts:["Trabajo por vivir.","Trabajo para vivir.","Trabajo a vivir.","Trabajo de vivir."], correct:1, why:"« Pour vivre » = afin de vivre, c'est le BUT → PARA + infinitif." },
    { cat:"ecrit", q:"« Y a-t-il une pharmacie dans le coin ? » → ¿Hay una farmacia ___ aquí?", opts:["para","en","por","a"], correct:2, why:"Un lieu approximatif (« par ici, dans le coin ») → POR aquí." },
    { cat:"ecrit", q:"Que veut dire « ¡Por supuesto! » ?", opts:["Bien sûr !","Par hasard !","Enfin !","Pour toujours !"], correct:0, why:"Por supuesto = bien sûr (synonyme : claro). Enfin = por fin ; pour toujours = para siempre." },
    { cat:"ecrit", q:"« Je vais à la gym trois fois par semaine. » → Voy al gimnasio tres veces ___ semana.", opts:["para","a la","de","por"], correct:3, why:"La fréquence « par semaine, par jour » → POR." },
    { cat:"ecrit", q:"Quelle question demande le BUT (« à quoi ça sert ») ?", opts:["¿Por qué estudias?","¿Para qué sirve esta llave?","¿Porque estudias?","¿Por dónde vas?"], correct:1, why:"¿Para qué? = dans quel but / à quoi ça sert. ¿Por qué? demande la cause." },
    { cat:"ecrit", q:"Trouve l'erreur : « Gracias para todo, para mí eres la mejor. »", opts:["Il faut « por mí »","Il faut « gracias por todo »","Il faut « para todo » et « por mí »","Pas d'erreur"], correct:1, why:"Merci = cause → gracias POR todo. En revanche « para mí » (opinion) est correct." },
    { cat:"oral", audio:"Este regalo es para ti. ¡Ábrelo!", q:"Écoute : que dit la personne ?", opts:["Merci pour le cadeau.","Ce cadeau est pour toi, ouvre-le !","J'ai payé ce cadeau cher.","Le cadeau est pour lundi."], correct:1, why:"« Es para ti » = c'est pour toi ; « ábrelo » = ouvre-le." },
    { cat:"oral", audio:"Por la tarde paseo por la playa con mi perro.", q:"Écoute : que fait la personne l'après-midi ?", opts:["Elle part pour la plage","Elle nage avec son chien","Elle se promène sur la plage avec son chien","Elle achète un chien"], correct:2, why:"« Por la tarde » = l'après-midi ; « paseo por la playa » = je me promène sur la plage." },
    { cat:"oral", audio:"Pagué treinta euros por estos zapatos.", q:"Écoute : de quoi parle la personne ?", opts:["Du prix de ses chaussures","D'un cadeau pour quelqu'un","D'une promenade","D'un rendez-vous"], correct:0, why:"« Pagué treinta euros por… » = j'ai payé trente euros pour… : le PRIX → POR." },
    { cat:"oral", audio:"No puedo salir, por eso te llamo por teléfono.", q:"Écoute : pourquoi la personne téléphone-t-elle ?", opts:["Pour réserver une table","Parce qu'elle ne peut pas sortir","Pour dire merci","Parce qu'elle est en retard"], correct:1, why:"« No puedo salir, por eso… » = je ne peux pas sortir, c'est pour ça que je t'appelle." },
    { cat:"comprehension", passage:"“Mañana salgo para Sevilla. Voy en tren y el tren pasa por Córdoba. Voy para visitar a mi abuela: ¡es su cumpleaños!”", q:"D'après le texte, pourquoi la personne va-t-elle à Séville ?", opts:["Pour travailler","Pour visiter Cordoue","Pour voir sa grand-mère pour son anniversaire","Parce qu'elle y habite"], correct:2, why:"« Voy para visitar a mi abuela » = le BUT du voyage. Córdoba est seulement le lieu de PASSAGE (pasa por)." },
    { cat:"comprehension", passage:"“— ¿Por qué no vienes a la fiesta? — Porque tengo que estudiar. El examen es para el viernes. — ¡Pues ánimo! Y gracias por avisar.”", q:"D'après le dialogue, quand a lieu l'examen ?", opts:["Aujourd'hui","Vendredi","Pendant la fête","Lundi"], correct:1, why:"« El examen es para el viernes » : l'échéance est vendredi (PARA)." },
    { cat:"comprehension", passage:"“(rappel) Mi hermana es enfermera y trabaja en un hospital de Madrid. Hoy no está en el trabajo porque está enferma.”", q:"D'après le texte, pourquoi la sœur n'est-elle pas au travail aujourd'hui ?", opts:["Elle est en vacances","Elle a changé de métier","Elle est malade","Elle est à Madrid"], correct:2, why:"« Está enferma » : un état provisoire → ESTAR. Son métier, lui, s'exprime avec SER (es enfermera). (rappel ser/estar)" },
    { cat:"comprehension", passage:"“(rappel) Todos los días me levanto a las siete, me ducho y desayuno. Los domingos me acuesto muy tarde.”", q:"D'après le texte, que se passe-t-il le dimanche ?", opts:["La personne se lève à sept heures","La personne se couche très tard","La personne ne prend pas de douche","La personne ne prend pas de petit-déjeuner"], correct:1, why:"« Me acuesto muy tarde » = je me couche très tard (acostarse, verbe pronominal). (rappel verbes pronominaux)" }
  ],

  PRON_VERBS: [
    {en:"Gracias por todo.", fr:"Merci pour tout. (gracias : le c se prononce avec la langue entre les dents en Espagne, « GRA-thias »)"},
    {en:"Este regalo es para ti.", fr:"Ce cadeau est pour toi. (le r simple de para est un seul petit battement de langue)"},
    {en:"Paseo por el parque.", fr:"Je me promène dans le parc. (le r final de por est roulé légèrement)"},
    {en:"¡Por fin es viernes!", fr:"Enfin vendredi ! (viernes : le v se prononce comme un b)"},
    {en:"Por ejemplo, trabajo por la mañana.", fr:"Par exemple, je travaille le matin. (ejemplo : la jota, du fond de la gorge)"},
    {en:"¿Para qué sirve esto?", fr:"À quoi ça sert ? (accent tonique sur PA-ra et sur QUÉ)"},
    {en:"Te lo mando por correo.", fr:"Je te l'envoie par courrier. (correo : rr roulé, plusieurs battements)"},
    {en:"Para mí, es la mejor ciudad del mundo.", fr:"Pour moi, c'est la meilleure ville du monde. (ciudad : c = th anglais en Espagne)"}
  ],

  READING: [
    "Me llamo Lucía y trabajo en una agencia de viajes en Málaga.",
    "Por la mañana voy a la oficina en bicicleta y paso por el paseo marítimo.",
    "Para mí, es el mejor momento del día.",
    "Hoy una clienta quiere un billete para Buenos Aires para el mes de marzo.",
    "Quiere viajar para visitar a su hija, que vive allí.",
    "Le busco el mejor precio por internet.",
    "El billete cuesta seiscientos euros, pero ella quiere pagar menos por el viaje.",
    "Por eso le propongo un vuelo con escala en Madrid.",
    "Al final, la clienta está muy contenta y me da las gracias por mi ayuda.",
    "¡Por fin termino el día y vuelvo a casa por la playa!"
  ],

  GLOSS: [
    {en:"una agencia de viajes", fr:"une agence de voyages"},
    {en:"el paseo marítimo", fr:"la promenade du bord de mer"},
    {en:"un billete", fr:"un billet (de train, d'avion)"},
    {en:"un vuelo con escala", fr:"un vol avec escale"},
    {en:"proponer (le propongo)", fr:"proposer (je lui propose)"}
  ],

  GRAMMAR1: {
    heading: "PARA = la flèche ➜ vers le but",
    lede: "En français, un seul mot « pour » fait tout. L'espagnol, lui, se demande : est-ce que je regarde DEVANT (le but, là où je vais) ? Si oui, c'est PARA. Imagine une flèche qui part de toi vers une cible.",
    conj: [["Objectif (afin de) ➜","para + infinitif","Estudio para aprobar."],["Destination ➜","para + lieu","Salgo para Madrid."],["Destinataire ➜","para + personne","Este regalo es para ti."],["Échéance / opinion ➜","para + date / para mí","Es para el lunes. Para mí, es fácil."]],
    ruleHtml: "🎯 <b>PARA</b> regarde toujours <b>vers l'avant</b> : ce que tu veux atteindre. On l'utilise pour <b>le but</b> (para + infinitif = afin de), <b>la destination</b> (salir para Madrid), <b>le destinataire</b> (para ti, para mi hijo), <b>l'échéance</b> (para el viernes) et <b>l'opinion</b> (para mí = à mon avis). Petit test : si tu peux remplacer « pour » par <b>« afin de »</b>, <b>« à destination de »</b> ou <b>« à mon avis »</b>, c'est PARA.",
    dialogueLede: "À la gare, au guichet :",
    dialogue: [
      {who:"you", en:"Buenos días, un billete para Barcelona para el sábado, por favor.", fr:"Bonjour, un billet pour Barcelone pour samedi, s'il vous plaît."},
      {who:"them", en:"¿Es para usted o para otra persona?", fr:"C'est pour vous ou pour une autre personne ?"}
    ],
    whyLabel: "Pourquoi « para mí » et pas « para yo » ?",
    whyText: "Après une préposition (para, por, sin, de…), l'espagnol utilise des pronoms spéciaux : <b>mí</b> et <b>ti</b>, comme le français dit « pour <b>moi</b> » et pas « pour je ». Pour les autres personnes, rien ne change : para él, para ella, para nosotros, para vosotros, para ellos. Deux exceptions à retenir : <b>conmigo</b> (avec moi) et <b>contigo</b> (avec toi). Et l'accent : <b>mí</b> avec accent (moi) ≠ <b>mi</b> sans accent (mon, ma)."
  },
  GRAMMAR2: {
    heading: "POR = ce qui est derrière ou au milieu",
    dialogueLede: "Au téléphone avec une amie :",
    dialogue: [
      {who:"them", en:"¡Gracias por el regalo! Pero… ¿por qué me lo mandas por correo?", fr:"Merci pour le cadeau ! Mais… pourquoi tu me l'envoies par la poste ?"},
      {who:"you", en:"Porque no puedo pasar por tu casa esta semana. ¡Trabajo mucho!", fr:"Parce que je ne peux pas passer chez toi cette semaine. Je travaille beaucoup !"}
    ],
    ruleHtml: "🔙 <b>POR</b> ne regarde pas le but : il regarde <b>derrière</b> (la <b>cause</b> : gracias por, por eso, ¿por qué?) ou <b>au milieu</b> (le <b>passage</b> : paseo por el parque ; le <b>moyen</b> : por teléfono ; l'<b>échange / le prix</b> : veinte euros por esta camisa ; le <b>moment approximatif</b> : por la mañana ; la <b>durée</b> : por dos horas ; la <b>fréquence</b> : dos veces por semana ; le « <b>par</b> » du passif : escrito por Cervantes). Truc : si en français tu peux dire <b>« par »</b>, <b>« à cause de »</b>, <b>« en échange de »</b> ou <b>« à travers »</b>, c'est POR.",
    whyLabel: "« Lo hago por ti » ou « lo hago para ti » ?",
    whyText: "Les deux existent, mais ne disent pas la même chose ! <b>Lo hago para ti</b> = je le fais pour toi, c'est <b>destiné à toi</b> (un gâteau, un cadeau : la flèche va vers toi). <b>Lo hago por ti</b> = je le fais <b>à cause de toi / pour te rendre service</b> (tu es la raison, derrière mon action). Pour la durée, l'Espagne préfère souvent <b>durante</b> (« Estuve en Sevilla durante una semana ») ; « por » s'emploie surtout pour une durée approximative ou dans des phrases toutes faites (por un momento, por ahora). Et n'oublie pas : <b>por</b> se prononce avec un petit r roulé à la fin."
  },

  REVIEW: [
    { q:"« Je suis fatiguée aujourd'hui. » → Hoy ___ cansada.", opts:["soy","estoy"], correct:1, fb:"Un état provisoire → ESTAR : hoy estoy cansada. (rappel : ser/estar)" },
    { q:"« Ma mère est professeure. » → Mi madre ___ profesora.", opts:["es","está"], correct:0, fb:"Le métier = l'identité → SER : es profesora. (rappel : ser/estar)" },
    { q:"« Je me lève à sept heures. » → Yo ___ a las siete.", opts:["me levanto","levanto"], correct:0, fb:"Levantarse est pronominal : je me lève = me levanto. (rappel : verbes pronominaux)" },
    { q:"« ¿Quién llama a esta hora? — Serán mis tíos. » : « serán » veut dire…", opts:["Ce sont sans doute mes oncles.","Ils étaient mes oncles."], correct:0, fb:"Serán = ser au futur, 3e pers. du pluriel : le futur de supposition (« ce sont sans doute… »). (rappel : le futur)" },
    { q:"« Hier, je suis allée au marché. » → Ayer ___ al mercado.", opts:["fui","era"], correct:0, fb:"Fui = ir au passé simple (pretérito indefinido), yo : action terminée hier. (rappel : les passés)" }
  ],

  CULTURE_NOTE: {
    icon: "🙏",
    title: "Note culturelle — por favor, gracias… et le « porfa »",
    html: "En Espagne, on dit <b>por favor</b> et <b>gracias</b> un peu moins souvent qu'en France : au bar, « <b>Un café, por favor</b> » est poli, mais « <b>Ponme un café</b> » (sers-moi un café) n'a rien de grossier, c'est juste direct ! Entre amis, on raccourcit souvent en <b>porfa</b>, et on remercie avec <b>gracias por todo</b> ou <b>mil gracias</b> (mille mercis). En Amérique latine, le ton est souvent plus cérémonieux : on entend beaucoup « <b>¿Me regala un café, por favor?</b> » (Colombie) ou « <b>con mucho gusto</b> » (avec grand plaisir) en réponse à gracias."
  },

  DRILLS: [
    { type:"choice", q:"Image mentale : PARA, c'est…", opts:["la flèche ➜ vers un but, une destination, une personne","ce qui est derrière (la cause) ou au milieu (le chemin)"], correct:0, why:"PARA regarde devant : là où tu vas, ce que tu veux atteindre. POR regarde derrière ou au milieu." },
    { type:"fill", text:"Este paquete es ___ ti, ábrelo.", answers:["para"], why:"Le paquet va vers toi : destinataire → PARA. (exercice d'Ashley n° 9)" },
    { type:"fill", text:"Salgo ___ Madrid en el tren de las ocho.", answers:["para"], why:"Madrid est la destination (la flèche) → PARA. (exercice d'Ashley n° 10)" },
    { type:"fill", text:"Estudié mucho ___ aprobar el examen de español.", answers:["para"], why:"« Afin de » réussir : le but → PARA + infinitif. (exercice d'Ashley n° 11)" },
    { type:"fill", text:"Pagué veinte euros ___ esta camisa.", answers:["por"], why:"Un prix = un échange (20 € contre la chemise) → POR. (exercice d'Ashley n° 12)" },
    { type:"fill", text:"Paseamos ___ la playa al atardecer.", answers:["por"], why:"Se promener à travers un lieu : le passage → POR. (exercice d'Ashley n° 13)" },
    { type:"fill", text:"¿Hay un médico ___ aquí cerca?", answers:["por"], why:"Un lieu approximatif (« dans le coin ») → POR aquí. (exercice d'Ashley n° 14)" },
    { type:"fill", text:"___ mí, la música latina es la mejor del mundo.", answers:["Para","para"], why:"Donner son opinion = « à mon avis » → PARA mí. (exercice d'Ashley n° 15)" },
    { type:"fill", text:"El coche pasó muy rápido ___ delante de nuestra casa.", answers:["por"], why:"Le coche passe devant la maison : c'est le chemin, le passage → POR. (exercice d'Ashley n° 16)" },
    { type:"choice", q:"Gracias ___ la ayuda.", opts:["para","por"], correct:1, why:"On remercie À CAUSE de ce qui a été fait → gracias POR. Jamais « gracias para »." },
    { type:"choice", q:"Los deberes son ___ el lunes.", opts:["para","por"], correct:0, why:"Une échéance (date limite) → PARA." },
    { type:"choice", q:"Te llamo ___ teléfono.", opts:["para","por"], correct:1, why:"Le moyen (au milieu, entre toi et moi) → POR teléfono." },
    { type:"choice", q:"Trabajo ___ la mañana y estudio ___ la tarde.", opts:["por / por","para / para","en / en"], correct:0, why:"Les moments de la journée : por la mañana, por la tarde, por la noche." },
    { type:"choice", q:"El Quijote fue escrito ___ Cervantes.", opts:["para","por","de"], correct:1, why:"Le « par » du passif (l'auteur de l'action) → POR." },
    { type:"fill", text:"Voy al gimnasio dos veces ___ semana.", answers:["por"], why:"La fréquence « par semaine » → POR (comme « par » en français)." },
    { type:"fill", text:"Esta app sirve ___ aprender idiomas.", answers:["para"], why:"Servir À quelque chose = l'utilité, le but → servir PARA." },
    { type:"fill", text:"Estoy cansada, ___ eso me quedo en casa.", answers:["por"], why:"« C'est pour ça » = la cause, derrière → POR eso." },
    { type:"fill", text:"¡___ fin es viernes!", answers:["Por","por"], why:"« Enfin ! » (soulagement) = POR fin. Expression figée." },
    { type:"fill", text:"Te querré ___ siempre.", answers:["para"], why:"« Pour toujours » = une flèche sans fin vers l'avenir → PARA siempre." },
    { type:"fill", text:"¿Me ayudas? — ¡___ supuesto!", answers:["Por","por"], why:"« Bien sûr ! » = POR supuesto. Expression figée." },
    { type:"fill", text:"Quiero cambiar esta camiseta ___ una talla más grande.", answers:["por"], why:"Échanger A CONTRE B = l'échange → POR." },
    { type:"fill", text:"Me preocupo mucho ___ mi hijo.", answers:["por"], why:"S'inquiéter pour quelqu'un = il est la CAUSE de l'inquiétude → preocuparse POR." },
    { type:"choice", q:"Quelle question demande « dans quel but » ?", opts:["¿Por qué aprendes español?","¿Para qué aprendes español?"], correct:1, why:"¿Para qué? = pour quoi faire ? (le but). ¿Por qué? = pourquoi ? (la cause). Les deux se disent, mais n'attendent pas la même réponse." },
    { type:"choice", q:"« ¿Por qué no vienes? » — Quelle est la bonne réponse ?", opts:["Por qué estoy enferma.","Porque estoy enferma.","Para que estoy enferma."], correct:1, why:"La réponse « parce que » s'écrit en UN mot et sans accent : porque." },
    { type:"choice", q:"Trouve l'erreur : « Salgo por Madrid mañana para visitar a mi tía. »", opts:["« por Madrid » devrait être « para Madrid »","« para visitar » devrait être « por visitar »","Pas d'erreur"], correct:0, why:"Madrid est la destination → salgo PARA Madrid. « Para visitar » (but) est correct. Attention : « Paso por Madrid » (je passe par Madrid) serait correct, mais c'est un autre sens !" },
    { type:"fill", text:"Traduis « pour toi » : Este café es ___.", answers:["para ti"], why:"Destinataire → PARA, et après une préposition on dit TI (sans accent), pas « tú »." },
    { type:"fill", text:"Traduis « merci pour tout » : ___ todo.", answers:["gracias por","Gracias por"], why:"On remercie POUR ce qui a été fait → gracias POR." },
    { type:"fill", text:"Traduis « je t'envoie la photo par e-mail » : Te mando la foto ___ correo.", answers:["por"], why:"Le moyen → POR correo (par e-mail / par courrier)." },
    { type:"fill", text:"Traduis « je travaille pour une entreprise française » : Trabajo ___ una empresa francesa.", answers:["para"], why:"Travailler POUR un employeur = ton travail va vers lui (destinataire) → trabajar PARA una empresa." },
    { type:"fill", text:"Traduis « j'ai acheté ce vélo pour cent euros » : Compré esta bici ___ cien euros.", answers:["por"], why:"Un prix = un échange → POR cien euros." },
    { type:"fill", text:"Traduis « c'est pour quand ? » : ¿___ cuándo es?", answers:["Para","para"], why:"On demande une échéance → ¿PARA cuándo es?" },
    { type:"fill", text:"Traduis « le film a été réalisé par Almodóvar » : La película fue dirigida ___ Almodóvar.", answers:["por"], why:"Le « par » du passif → POR." },
    { type:"fill", text:"Traduis en entier « Merci pour le cadeau ! » : ___", answers:["¡Gracias por el regalo!","Gracias por el regalo","Gracias por el regalo!","¡Gracias por el regalo"], why:"Gracias POR (la cause du merci) + el regalo. N'oublie pas le ¡ d'ouverture à l'écrit." },
    { type:"fill", text:"Traduis en entier « Je me promène dans le parc. » : ___", answers:["Paseo por el parque.","Paseo por el parque","Yo paseo por el parque.","Yo paseo por el parque","Me paseo por el parque.","Me paseo por el parque"], why:"Se promener à travers un lieu → POR. « Pasear » ou « pasearse » (pronominal), les deux se disent." },
    { type:"choice", q:"Mini-dialogue : « — ¿Para quién es esta tarta? — Es ___ mi abuela, ___ su cumpleaños. »", opts:["para / por","por / para","por / por"], correct:0, why:"La tarte va vers la grand-mère (destinataire → PARA) ; son anniversaire est la raison, la cause (→ POR su cumpleaños)." }
  ],

  ANNOTATED: {
    title: "Mi trabajo ideal",
    intro: "Le texte d'Ashley (T10), avec deux phrases en plus pour voir por et para en action. Touche chaque mot pour voir ce que c'est. Cherche les PARA (la flèche ➜ vers un but) et les POR (derrière ou au milieu).",
    sentences: [
      { fr: "Je travaille comme réceptionniste dans un hôtel international à Barcelone.",
        tokens: [
          { w:"Trabajo", tag:"verbe", info:"trabajar · présent · yo (je)", fr:"je travaille", tip:"Pas besoin de « yo » : la terminaison -o dit déjà « je »." },
          { w:"como", tag:"préposition", fr:"comme (en tant que)" },
          { w:"recepcionista", tag:"nom", info:"masc./fém. sing. (même forme)", fr:"réceptionniste" },
          { w:"en", tag:"préposition", fr:"dans, à" },
          { w:"un", tag:"article", info:"masc. sing.", fr:"un" },
          { w:"hotel", tag:"nom", info:"masc. sing.", fr:"hôtel", tip:"Le h ne se prononce jamais en espagnol : « o-TEL »." },
          { w:"internacional", tag:"adjectif", info:"masc. sing.", fr:"international" },
          { w:"en", tag:"préposition", fr:"à" },
          { w:"Barcelona", tag:"nom propre", fr:"Barcelone" }
        ] },
      { fr: "Ma journée commence à huit heures et demie.",
        tokens: [
          { w:"Mi", tag:"déterminant", info:"possessif · sing.", fr:"ma", tip:"mi sans accent = mon/ma ; mí avec accent = moi (para mí)." },
          { w:"jornada", tag:"nom", info:"fém. sing.", fr:"journée (de travail)" },
          { w:"empieza", tag:"verbe", info:"empezar · présent · él/ella (3e sing.)", fr:"commence", tip:"Verbe à diphtongue : e → ie (empiezo, empiezas, empieza…)." },
          { w:"a las ocho y media", tag:"préposition", info:"groupe figé : l'heure", fr:"à huit heures et demie" }
        ] },
      { fr: "Tous les matins, je passe par le parc pour arriver à l'hôtel.",
        tokens: [
          { w:"Todas las mañanas", tag:"adverbe", info:"groupe figé : fém. plur.", fr:"tous les matins" },
          { w:"paso", tag:"verbe", info:"pasar · présent · yo", fr:"je passe" },
          { w:"por", tag:"préposition", fr:"par", tip:"POR = le passage, le chemin (au milieu) : je traverse le parc." },
          { w:"el", tag:"article", info:"masc. sing.", fr:"le" },
          { w:"parque", tag:"nom", info:"masc. sing.", fr:"parc" },
          { w:"para", tag:"préposition", fr:"pour (afin de)", tip:"PARA + infinitif = le but : je traverse le parc AFIN D'arriver à l'hôtel." },
          { w:"llegar", tag:"verbe", info:"llegar · infinitif", fr:"arriver" },
          { w:"al", tag:"préposition", info:"a + el = al (contraction)", fr:"à l'" },
          { w:"hotel", tag:"nom", info:"masc. sing.", fr:"hôtel" }
        ] },
      { fr: "Je me charge d'accueillir les clients et de gérer les réservations.",
        tokens: [
          { w:"Me encargo", tag:"verbe pronominal", info:"encargarse · présent · yo", fr:"je me charge", tip:"me = moi-même, comme « je ME charge »." },
          { w:"de", tag:"préposition", fr:"de" },
          { w:"recibir", tag:"verbe", info:"recibir · infinitif", fr:"recevoir, accueillir" },
          { w:"a", tag:"préposition", fr:"(a devant une personne)", tip:"Le « a » personnel : devant un complément qui est une PERSONNE, l'espagnol ajoute « a ». Pas de traduction en français." },
          { w:"los", tag:"article", info:"masc. plur.", fr:"les" },
          { w:"clientes", tag:"nom", info:"masc. plur.", fr:"clients" },
          { w:"y", tag:"conjonction", fr:"et" },
          { w:"gestionar", tag:"verbe", info:"gestionar · infinitif", fr:"gérer" },
          { w:"las", tag:"article", info:"fém. plur.", fr:"les" },
          { w:"reservas", tag:"nom", info:"fém. plur.", fr:"réservations" }
        ] },
      { fr: "Je réponds à leurs questions en plusieurs langues : espagnol, anglais et français.",
        tokens: [
          { w:"Resuelvo", tag:"verbe", info:"resolver · présent · yo", fr:"je résous (je réponds à)", tip:"Diphtongue o → ue : resuelvo, resuelves, resuelve…" },
          { w:"sus", tag:"déterminant", info:"possessif · plur.", fr:"leurs" },
          { w:"dudas", tag:"nom", info:"fém. plur.", fr:"doutes, questions" },
          { w:"en", tag:"préposition", fr:"en" },
          { w:"varios", tag:"adjectif", info:"masc. plur.", fr:"plusieurs" },
          { w:"idiomas", tag:"nom", info:"masc. plur.", fr:"langues", tip:"Piège ! el idioma est MASCULIN malgré le -a (comme el problema) : varios idiomas." },
          { w:"español", tag:"nom", info:"masc. sing.", fr:"espagnol" },
          { w:"inglés", tag:"nom", info:"masc. sing.", fr:"anglais" },
          { w:"y", tag:"conjonction", fr:"et" },
          { w:"francés", tag:"nom", info:"masc. sing.", fr:"français" }
        ] },
      { fr: "Ce qui me plaît le plus dans mon travail, c'est de rencontrer des gens du monde entier.",
        tokens: [
          { w:"Lo que", tag:"pronom sujet", info:"pronom relatif neutre, sujet de « es »", fr:"ce que, ce qui", tip:"Lo que = « ce que / ce qui ». On le reverra au chapitre X8 !" },
          { w:"más", tag:"adverbe", fr:"le plus" },
          { w:"me gusta", tag:"verbe", info:"gustar · présent · 3e sing. (la chose plaît)", fr:"me plaît", tip:"Comme « plaire » : c'est la chose qui plaît À moi (me)." },
          { w:"de", tag:"préposition", fr:"de, dans" },
          { w:"mi", tag:"déterminant", info:"possessif · sing.", fr:"mon" },
          { w:"trabajo", tag:"nom", info:"masc. sing.", fr:"travail" },
          { w:"es", tag:"verbe", info:"ser · présent · él/ella", fr:"c'est" },
          { w:"conocer", tag:"verbe", info:"conocer · infinitif", fr:"connaître, rencontrer" },
          { w:"a", tag:"préposition", fr:"(a devant des personnes)" },
          { w:"personas", tag:"nom", info:"fém. plur.", fr:"personnes, gens" },
          { w:"de todo el mundo", tag:"préposition", info:"groupe figé", fr:"du monde entier" }
        ] },
      { fr: "Et je pratique des langues étrangères tous les jours.",
        tokens: [
          { w:"Y", tag:"conjonction", fr:"et" },
          { w:"practico", tag:"verbe", info:"practicar · présent · yo", fr:"je pratique" },
          { w:"lenguas", tag:"nom", info:"fém. plur.", fr:"langues" },
          { w:"extranjeras", tag:"adjectif", info:"fém. plur.", fr:"étrangères", tip:"La jota (j) : du fond de la gorge, « ex-tran-KHé-ras »." },
          { w:"todos los días", tag:"adverbe", info:"groupe figé : masc. plur.", fr:"tous les jours" }
        ] },
      { fr: "Beaucoup de clients me remercient pour mon aide et, pour moi, c'est le meilleur travail du monde.",
        tokens: [
          { w:"Muchos", tag:"déterminant", info:"masc. plur.", fr:"beaucoup de" },
          { w:"clientes", tag:"nom", info:"masc. plur.", fr:"clients" },
          { w:"me", tag:"pronom COI", info:"1re pers. sing.", fr:"me (à moi)" },
          { w:"dan las gracias", tag:"verbe", info:"dar las gracias · présent · ellos", fr:"remercient (donnent les mercis)" },
          { w:"por", tag:"préposition", fr:"pour", tip:"Gracias POR : l'aide est la CAUSE du merci (derrière)." },
          { w:"mi", tag:"déterminant", info:"possessif · sing.", fr:"mon" },
          { w:"ayuda", tag:"nom", info:"fém. sing.", fr:"aide" },
          { w:"y", tag:"conjonction", fr:"et" },
          { w:"para mí", tag:"préposition", info:"para + pronom mí", fr:"pour moi, à mon avis", tip:"PARA mí = mon opinion. mí avec accent = moi." },
          { w:"es", tag:"verbe", info:"ser · présent · él/ella", fr:"c'est" },
          { w:"el mejor", tag:"adjectif", info:"masc. sing.", fr:"le meilleur" },
          { w:"trabajo", tag:"nom", info:"masc. sing.", fr:"travail" },
          { w:"del mundo", tag:"préposition", info:"de + el = del", fr:"du monde" }
        ] }
    ],
    questions: [
      { q:"Dans « paso por el parque », pourquoi POR ?", opts:["Parce que le parc est le but du trajet","Parce que le parc est un lieu de passage, sur le chemin","Parce que c'est le matin"], correct:1, why:"Elle traverse le parc pour aller ailleurs : c'est le passage (au milieu) → POR." },
      { q:"Dans « para llegar al hotel », pourquoi PARA ?", opts:["C'est le but : afin d'arriver à l'hôtel","C'est la cause","C'est un prix"], correct:0, why:"PARA + infinitif = afin de : la flèche vers le but." },
      { q:"Quelle langue la réceptionniste ne parle-t-elle PAS au travail, d'après le texte ?", opts:["L'anglais","Le français","L'italien"], correct:2, why:"« español, inglés y francés » : pas d'italien." },
      { q:"« Para mí, es el mejor trabajo del mundo » : que veut dire « para mí » ici ?", opts:["Destiné à moi","À mon avis","À cause de moi"], correct:1, why:"PARA mí sert à donner son opinion = à mon avis." }
    ]
  },

  NEXT_PREVIEW: "X8 — Les petits mots qui remplacent : lo, la, le, te lo, se lo, lo que. Tu vas comprendre où placer ces pronoms (me lo dice, dímelo, voy a comprarlo), pourquoi « le lo » devient « se lo », et déjouer les derniers pièges d'Ashley : este problema (masculin !), ¡No hables!, et les faux amis comme embarazada.",

  META: { vocabTitle: "Por ou Para ? (X7)", lectureTitle: "Une journée à l'agence de voyages", bilanTitle: "Bravo, tu sais maintenant choisir entre POR et PARA !", pronLabel: "Por, para et les expressions figées (le r, la jota, le c espagnol)", todayLede: "ne plus hésiter entre por et para : PARA = la flèche vers le but (objectif, destination, destinataire, échéance, opinion), POR = ce qui est derrière ou au milieu (cause, passage, moyen, prix, moment, « par » du passif) — avec les exercices d'Ashley et beaucoup d'autres" }
};

// X8 — Les petits mots qui remplacent : lo, la, le, te lo, se lo, lo que (+ derniers pièges d'Ashley) — chapitre « Les blocages du francophone » (espagnol), conclusion X1-X8 — s'appuie sur la Guía de trampas d'Ashley (pièges 3, 4, 5), ses exercices 17-33, 39, 40 et son texte T15
LESSONS_ES[308] = {
  code: "X8", level: "A2",
  VOCAB: [
    {block:"Remplacer une chose ou une personne (COD)", en:"lo", ipa:"/lo/", fr:"le (masc.) — ou « ça », « le » neutre", note:"Remplace un nom masculin singulier : « ¿El libro? Lo tengo » = je l'ai. Aussi neutre : « No lo sé » = je ne sais pas."},
    {block:"Remplacer une chose ou une personne (COD)", en:"la", ipa:"/la/", fr:"la", note:"Remplace un nom féminin singulier : « ¿La llave? La tengo yo » = c'est moi qui l'ai."},
    {block:"Remplacer une chose ou une personne (COD)", en:"los / las", ipa:"/los/ /las/", fr:"les (masc. / fém.)", note:"L'espagnol garde le genre au pluriel : « ¿Los zapatos? Los compré » ; « ¿Las gafas? Las perdí »."},
    {block:"Remplacer une chose ou une personne (COD)", en:"lo que", ipa:"/lo ke/", fr:"ce que, ce qui", note:"« No entiendo lo que dices » = je ne comprends pas ce que tu dis. Jamais « eso que » ni « que » tout seul."},
    {block:"À qui ? (COI)", en:"le", ipa:"/le/", fr:"lui (à lui, à elle, à vous)", note:"Répond à « à qui ? » : « Le escribo a Pedro » = je lui écris. Même forme pour lui et elle."},
    {block:"À qui ? (COI)", en:"les", ipa:"/les/", fr:"leur (à eux, à elles, à vous)", note:"« Les doy un regalo a mis padres » = je leur donne un cadeau. Attention, les ≠ los !"},
    {block:"À qui ? (COI)", en:"me / te / nos / os", ipa:"/me/ /te/ /nos/ /os/", fr:"me / te / nous / vous", note:"Ces quatre-là servent à la fois de COD et de COI, comme en français : « Te veo » (je te vois), « Te doy » (je te donne)."},
    {block:"Les combinaisons", en:"te lo", ipa:"/te lo/", fr:"te le", note:"Ordre : À QUI d'abord, QUOI ensuite. « ¿El libro? Te lo doy » = je te le donne. Comme en français !"},
    {block:"Les combinaisons", en:"me la", ipa:"/me la/", fr:"me la", note:"« ¿La foto? Me la enseñas? » = tu me la montres ?"},
    {block:"Les combinaisons", en:"se lo", ipa:"/se lo/", fr:"le lui, le leur", note:"« le » + « lo » devient « se lo » : « Se lo digo a María » = je le lui dis. Voir la grammaire."},
    {block:"Les combinaisons", en:"dímelo", ipa:"/ˈdimelo/", fr:"dis-le-moi", note:"À l'impératif affirmatif, les pronoms se collent à la fin du verbe, et on ajoute un accent pour garder la bonne syllabe accentuée : DI-me-lo."},
    {block:"Les combinaisons", en:"voy a comprarlo", ipa:"/boj a komˈpɾaɾlo/", fr:"je vais l'acheter", note:"Avec un infinitif, deux places possibles : « voy a comprarlo » = « lo voy a comprar ». Les deux sont corrects."},
    {block:"Les déterminants qui piègent", en:"este problema", ipa:"/ˈeste pɾoˈβlema/", fr:"ce problème", note:"Problema est MASCULIN malgré le -a (comme el día, el mapa, el idioma, el tema, el sistema)."},
    {block:"Les déterminants qui piègent", en:"ningún / ninguna", ipa:"/niŋˈɡun/ /niŋˈɡuna/", fr:"aucun / aucune", note:"Devant un nom masculin singulier, ninguno perd son -o : « No tengo ningún libro ». Tout seul : « No tengo ninguno »."},
    {block:"Les déterminants qui piègent", en:"aquel / aquella", ipa:"/aˈkel/ /aˈkeʝa/", fr:"ce…-là / cette…-là (loin)", note:"Pour ce qui est loin : aquel coche, aquella blusa, aquellos zapatos, aquellas casas. Le ll se prononce comme un y."},
    {block:"Les déterminants qui piègent", en:"mucho / mucha / muchos / muchas", ipa:"/ˈmutʃo/ /ˈmutʃa/", fr:"beaucoup de", note:"Contrairement au français, « beaucoup de » s'accorde : muchos libros, muchas personas, mucha agua."},
    {block:"Les déterminants qui piègent", en:"demasiada gente", ipa:"/demaˈsjaða ˈxente/", fr:"trop de monde", note:"La gente est FÉMININ SINGULIER : demasiada gente, la gente es simpática (verbe au singulier !)."},
    {block:"Faux amis", en:"embarazada", ipa:"/embaɾaˈθaða/", fr:"enceinte (!)", note:"« Embarrassée » se dit avergonzada. Une erreur très drôle… ou très gênante."},
    {block:"Faux amis", en:"un rato", ipa:"/un ˈrato/", fr:"un moment", note:"« Espera un rato » = attends un moment. Un rat = una rata."},
    {block:"Faux amis", en:"la oficina", ipa:"/la ofiˈθina/", fr:"le bureau (lieu de travail)", note:"« Estoy en la oficina » = je suis au bureau. Une officine (pharmacie) = una farmacia."},
    {block:"Faux amis", en:"constipado", ipa:"/konstiˈpaðo/", fr:"enrhumé (!)", note:"« Estoy constipado » = j'ai un rhume. Rien à voir avec le français « constipé »."},
    {block:"Verbes clés (X8)", en:"dar", ipa:"/daɾ/", fr:"donner", note:"Irrégulier : doy, das, da… Passé : di, diste, dio. « Se lo di ayer » = je le lui ai donné hier."},
    {block:"Verbes clés (X8)", en:"decir", ipa:"/deˈθiɾ/", fr:"dire", note:"Irrégulier : digo, dices… Participe : dicho. Impératif : di (dis !) → dímelo."},
    {block:"Verbes clés (X8)", en:"prestar", ipa:"/pɾesˈtaɾ/", fr:"prêter", note:"« ¿Me prestas tu bolígrafo? — Sí, te lo presto. »"},
    {block:"Verbes clés (X8)", en:"enseñar", ipa:"/enseˈɲaɾ/", fr:"montrer, apprendre (à quelqu'un)", note:"« Enséñamelo » = montre-le-moi. Le ñ se prononce comme « gn » dans « montagne »."},
    {block:"Verbes clés (X8)", en:"regalar", ipa:"/reɣaˈlaɾ/", fr:"offrir (un cadeau)", note:"« Mi hermana me los regaló » = ma sœur me les a offerts. Le r en début de mot est toujours roulé fort."}
  ],
  MEM_WORDS: [3,7,9,10,12,17], // lo que, te lo, se lo, dímelo, este problema, embarazada

  MINI_CHECKS: [
    { q:"« ¿Tienes el documento? — Sí, ___ tengo. »", opts:["la","lo","le"], correct:1, fb:"El documento = masculin singulier, COD → lo." },
    { q:"« ¿Le diste el dinero a Pedro? — Sí, ___ di ayer. »", opts:["le lo","se lo","lo le"], correct:1, fb:"« le » + « lo » ne se disent jamais ensemble : le devient SE → se lo." },
    { q:"« Je ne comprends pas ce que tu dis. » → No entiendo ___ dices.", opts:["que","eso","lo que"], correct:2, fb:"« Ce que » = lo que." },
    { q:"« Ne parle pas si vite ! » →", opts:["¡No habla tan rápido!","¡No hables tan rápido!","¡No hablar tan rápido!"], correct:1, fb:"L'impératif négatif se forme avec le subjonctif : no hables." }
  ],

  ROUNDS: [
    { bank:["doy","Te","ahora","lo","."], answer:"te lo doy ahora .", display:"Te lo doy ahora.", fr:"Je te le donne maintenant." },
    { bank:["dices","No","que","entiendo","lo","."], answer:"no entiendo lo que dices .", display:"No entiendo lo que dices.", fr:"Je ne comprends pas ce que tu dis." },
    { bank:["comprarlo","Voy","mañana","a","."], answer:"voy a comprarlo mañana .", display:"Voy a comprarlo mañana.", fr:"Je vais l'acheter demain." },
    { bank:["di","Se","ayer","lo","."], answer:"se lo di ayer .", display:"Se lo di ayer.", fr:"Je le lui ai donné hier." },
    { bank:["¡","rápido","No","tan","hables","!"], answer:"¡ no hables tan rápido !", display:"¡No hables tan rápido!", fr:"Ne parle pas si vite !" },
    { bank:["favor","Dímelo","por","."], answer:"dímelo por favor .", display:"Dímelo, por favor.", fr:"Dis-le-moi, s'il te plaît." },
    { bank:["problema","Este","difícil","es","muy","."], answer:"este problema es muy difícil .", display:"Este problema es muy difícil.", fr:"Ce problème est très difficile." },
    { bank:["tíos","Serán","mis","."], answer:"serán mis tíos .", display:"Serán mis tíos.", fr:"Ce sont sans doute mes oncles. (ser au futur de supposition)" },
    { bank:["cansada","Hoy","el","estoy","viaje","por","."], answer:"hoy estoy cansada por el viaje .", display:"Hoy estoy cansada por el viaje.", fr:"Aujourd'hui je suis fatiguée à cause du voyage. (estar + por)" },
    { bank:["levanté","Ayer","siete","me","las","a","."], answer:"ayer me levanté a las siete .", display:"Ayer me levanté a las siete.", fr:"Hier je me suis levée à sept heures. (pronominal + passé)" }
  ],

  QUIZ: [
    { cat:"ecrit", q:"« ¿Has visto mis gafas? — No, no ___ he visto. »", opts:["los","las","les","la"], correct:1, why:"Las gafas = féminin pluriel → las." },
    { cat:"ecrit", q:"Où placer le pronom ? « Je vais l'appeler ce soir. »", opts:["Voy a lo llamar esta noche.","Voy lo a llamar esta noche.","Llamarlo voy esta noche.","Voy a llamarlo esta noche."], correct:3, why:"Collé à l'infinitif (llamarlo) ou avant le verbe conjugué (lo voy a llamar). Jamais au milieu." },
    { cat:"ecrit", q:"« Dis-le-moi ! » →", opts:["¡Me lo di!","¡Dilome!","¡Dímelo!","¡Lo me di!"], correct:2, why:"Impératif affirmatif : pronoms collés à la fin, dans l'ordre COI + COD (me + lo), avec accent : dímelo." },
    { cat:"ecrit", q:"« Je le lui ai dit » (à María) →", opts:["Le lo he dicho.","Lo le he dicho.","Se lo he dicho.","Se le he dicho."], correct:2, why:"Le + lo → SE lo. Ordre COI + COD, avant l'auxiliaire : se lo he dicho." },
    { cat:"ecrit", q:"Quelle phrase est correcte ?", opts:["Esta problema es fácil.","Este problema es fácil.","Esto problema es fácil.","Esa problema es fácil."], correct:1, why:"El problema est masculin (mot d'origine grecque en -ma) → este problema." },
    { cat:"ecrit", q:"« Il y a trop de monde. » →", opts:["Hay demasiados gentes.","Hay demasiado gente.","Hay demasiada gente.","Hay demasiadas gente."], correct:2, why:"La gente = féminin singulier → demasiada gente." },
    { cat:"ecrit", q:"« Estoy embarazada » veut dire…", opts:["Je suis gênée.","Je suis enceinte.","Je suis embarrassée par un paquet.","Je suis enrhumée."], correct:1, why:"Faux ami ! embarazada = enceinte. Gênée = avergonzada ; enrhumée = constipada." },
    { cat:"ecrit", q:"Rappel X7 — « Merci pour le cadeau ! » →", opts:["¡Gracias para el regalo!","¡Gracias por el regalo!","¡Gracias de el regalo!","¡Gracias a el regalo!"], correct:1, why:"On remercie POUR la cause → gracias POR." },
    { cat:"ecrit", q:"Rappel — « ¿Quién llama? — Serán mis padres. » : « serán » est…", opts:["ser, futur, ellos : « ce sont sans doute »","estar, présent, ellos","ser, passé, ellos","ir, futur, ellos"], correct:0, why:"Serán = ser + án (futur, 3e pers. pluriel). Ici, futur de supposition : ce sont sans doute mes parents." },
    { cat:"ecrit", q:"Rappel — « Je suis à la maison. » →", opts:["Soy en casa.","Tengo en casa.","Hay en casa.","Estoy en casa."], correct:3, why:"La localisation → ESTAR : estoy en casa." },
    { cat:"oral", audio:"¿Me prestas tu bolígrafo? Sí, claro, te lo presto.", q:"Écoute : que se passe-t-il ?", opts:["Quelqu'un accepte de prêter son stylo","Quelqu'un refuse de prêter son stylo","Quelqu'un achète un stylo","Quelqu'un a perdu son stylo"], correct:0, why:"« Te lo presto » = je te le prête (lo = el bolígrafo)." },
    { cat:"oral", audio:"No entiendo lo que dices. ¿Me lo repites, por favor?", q:"Écoute : que demande la personne ?", opts:["De parler plus fort","De se taire","D'écrire","De répéter"], correct:3, why:"« No entiendo lo que dices » = je ne comprends pas ce que tu dis ; « ¿Me lo repites? » = tu me le répètes ?" },
    { cat:"oral", audio:"¡No toques eso! Está muy caliente.", q:"Écoute : que dit la personne ?", opts:["Touche ça, c'est chaud","Ne mange pas ça","Ne touche pas ça, c'est très chaud","Prends ça, c'est froid"], correct:2, why:"« ¡No toques! » = ne touche pas (impératif négatif = subjonctif) ; « está muy caliente » = c'est très chaud." },
    { cat:"oral", audio:"Espera un rato, estoy en la oficina.", q:"Écoute : où est la personne ?", opts:["À la pharmacie","Au bureau","Dans le métro","Chez le médecin"], correct:1, why:"Faux ami : la oficina = le bureau. Et « un rato » = un moment." },
    { cat:"comprehension", passage:"“— ¿Le has dado el regalo a tu madre? — Sí, se lo di ayer. ¡Le encantó! — ¿Y las flores? — Esas se las voy a dar el domingo.”", q:"D'après le dialogue, quand la mère recevra-t-elle les fleurs ?", opts:["Dimanche","Hier","Aujourd'hui","Elle les a déjà reçues"], correct:0, why:"« Se las voy a dar el domingo » : se (= à elle) + las (= las flores), dimanche." },
    { cat:"comprehension", passage:"“Lo que más me gusta de los sábados es desayunar tranquilamente. No pongo ninguna alarma y leo el periódico. ¡No me llames antes de las diez!”", q:"D'après le texte, que ne faut-il pas faire le samedi ?", opts:["Lire le journal","Prendre le petit-déjeuner","L'appeler avant dix heures","Mettre une alarme à dix heures"], correct:2, why:"« ¡No me llames antes de las diez! » = ne m'appelle pas avant dix heures (impératif négatif)." },
    { cat:"comprehension", passage:"“(rappel) Este verano voy a viajar a Perú para visitar a mis primos. Voy a pasar por Lima y después voy a ir a Cuzco. ¡Gracias por los consejos!”", q:"D'après le texte, quel est le but du voyage ?", opts:["Visiter Lima","Voir ses cousins","Travailler à Cuzco","Donner des conseils"], correct:1, why:"« Para visitar a mis primos » = le but (PARA). Lima est seulement un lieu de passage (pasar POR). (rappel X7)" },
    { cat:"comprehension", passage:"“(rappel) Ayer fui al médico porque estaba muy cansada. Me dijo que no era nada grave. Mañana volveré al trabajo.”", q:"D'après le texte, que fera la personne demain ?", opts:["Elle retournera chez le médecin","Elle retournera au travail","Elle restera au lit","Elle ira à la pharmacie"], correct:1, why:"« Volveré » = volver au futur, yo : je retournerai au travail. (Fui = ir au passé : je suis allée.) (rappel temps du passé et futur)" }
  ],

  PRON_VERBS: [
    {en:"Te lo digo mañana.", fr:"Je te le dis demain. (digo : g dur ; mañana : ñ = gn)"},
    {en:"Se lo regalé a mi hermana.", fr:"Je l'ai offert à ma sœur. (regalé : r initial roulé fort, accent sur LÉ)"},
    {en:"Dímelo, por favor.", fr:"Dis-le-moi, s'il te plaît. (accent tonique sur DÍ : DI-me-lo)"},
    {en:"No entiendo lo que dices.", fr:"Je ne comprends pas ce que tu dis. (dices : c = th anglais en Espagne, « DI-thés »)"},
    {en:"¡No hables tan rápido!", fr:"Ne parle pas si vite ! (le h est muet : « A-blés » ; le b est doux)"},
    {en:"Aquella calle es muy bonita.", fr:"Cette rue-là est très jolie. (ll = y : « a-KÉ-ya KA-yé »)"},
    {en:"Este problema tiene solución.", fr:"Ce problème a une solution. (solución : c = th, accent sur ÓN)"},
    {en:"Mi jefe está en la oficina.", fr:"Mon chef est au bureau. (jefe : la jota, du fond de la gorge ; oficina : ci = thi)"}
  ],

  READING: [
    "El sábado es el cumpleaños de mi madre y quiero darle una sorpresa.",
    "Ayer fui a una tienda de flores y compré unas rosas rojas.",
    "Mi hermano me llamó por teléfono y me dijo: «¿Las flores? ¡No las escondas en tu habitación, mamá lo ve todo!».",
    "Por eso se las di a mi vecina: ella las guarda hasta el sábado.",
    "También tengo un libro para mamá, pero no se lo voy a dar hasta la cena.",
    "Mi hermano no sabe lo que voy a regalarle, y no se lo quiero decir.",
    "Él siempre cuenta todo, ¡es un desastre para los secretos!",
    "Este sábado vendrá toda la familia: habrá mucha gente en casa.",
    "Lo que más me gusta de los cumpleaños es ver la cara de mi madre cuando abre los regalos.",
    "Seguro que me dirá: «¡Gracias por todo, cariño!»."
  ],

  GLOSS: [
    {en:"una sorpresa", fr:"une surprise"},
    {en:"esconder (no las escondas)", fr:"cacher (ne les cache pas)"},
    {en:"guardar", fr:"garder, ranger"},
    {en:"un vecino / una vecina", fr:"un voisin / une voisine"},
    {en:"contar", fr:"raconter"},
    {en:"la cara", fr:"le visage"}
  ],

  GRAMMAR1: {
    heading: "Lo, la, le : quoi ? ou à qui ? — et où les placer",
    lede: "Pour ne pas répéter un nom, on le remplace par un petit mot. La seule question à se poser : est-ce QUOI (la chose ou la personne directement touchée = COD) ou À QUI (la personne qui reçoit = COI) ?",
    conj: [["QUOI ? (COD) masc.","lo / los","¿El libro? Lo tengo."],["QUOI ? (COD) fém.","la / las","¿Las llaves? Las tengo."],["À QUI ? (COI)","le / les","Le escribo a Ana."],["Moi, toi, nous, vous","me / te / nos / os","Te veo. Te escribo."]],
    ruleHtml: "📍 <b>Où placer le pronom ?</b> Trois cas seulement. 1) <b>Avant le verbe conjugué</b>, comme en français : « Lo compro », « No lo sé », « Te lo he dicho ». 2) <b>Collé à la fin</b> d'un <b>infinitif</b> (comprarlo), d'un <b>gérondif</b> (comprándolo) ou d'un <b>impératif affirmatif</b> (cómpralo, dímelo). 3) Quand il y a un verbe conjugué + un infinitif, tu as <b>le choix</b> : « Lo voy a comprar » = « Voy a comprarlo ». Quand on colle deux pronoms, on ajoute souvent un <b>accent</b> pour garder la voix au même endroit : di → <b>dí</b>melo, compra → <b>cóm</b>pralo.",
    dialogueLede: "Au bureau, entre collègues :",
    dialogue: [
      {who:"them", en:"¿Tienes el informe? Lo necesito para la reunión.", fr:"Tu as le rapport ? J'en ai besoin pour la réunion."},
      {who:"you", en:"Sí, lo tengo. Voy a enviártelo ahora mismo.", fr:"Oui, je l'ai. Je vais te l'envoyer tout de suite."}
    ],
    whyLabel: "Pourquoi « lo » et pas « le » pour un objet ?",
    whyText: "En français, « le » et « lui » se distinguent déjà : je <b>le</b> vois (quoi ?), je <b>lui</b> parle (à qui ?). L'espagnol fait pareil, mais avec <b>lo/la</b> (le, la) et <b>le</b> (lui) : attention, le <b>le</b> espagnol veut dire <b>lui</b>, pas « le » ! Petit truc : si en français tu dis « <b>lui</b> » ou « <b>leur</b> », c'est <b>le / les</b> en espagnol. Et n'oublie pas que l'espagnol garde le genre au pluriel : <b>los</b> pour les garçons et objets masculins, <b>las</b> pour le féminin (« ¿Las gafas? Las perdí »)."
  },
  GRAMMAR2: {
    heading: "Te lo, se lo, lo que : les combinaisons sans panique",
    dialogueLede: "Au téléphone, avec ta sœur :",
    dialogue: [
      {who:"them", en:"¿Le has dicho la noticia a papá?", fr:"Tu as annoncé la nouvelle à papa ?"},
      {who:"you", en:"No, todavía no se la he dicho. No sé lo que va a pensar.", fr:"Non, je ne la lui ai pas encore dite. Je ne sais pas ce qu'il va penser."}
    ],
    ruleHtml: "🧩 <b>Ordre : À QUI d'abord, QUOI ensuite</b> — toujours. <b>te lo</b> (te le), <b>me la</b> (me la), <b>nos los</b> (nous les). C'est l'ordre du français pour « je <b>te le</b> donne », mais l'inverse de « je <b>le lui</b> donne ». Et quand « le » ou « les » rencontre lo, la, los, las, il se transforme en <b>se</b> : « le lo » (impossible) → <b>se lo</b>, « les la » → <b>se la</b>. « ¿Le diste el dinero a Pedro? — Sí, <b>se lo</b> di ayer. » Enfin, <b>lo que</b> = « <b>ce que / ce qui</b> » : « Lo que dices es verdad », « Todo lo que brilla no es oro ».",
    whyLabel: "Pourquoi « le lo » devient « se lo » ?",
    whyText: "Pour une raison de <b>son</b> : « le lo » et « les las » se prononcent mal (et « lelo » veut même dire… « niais » !). Depuis le Moyen Âge, l'espagnol a donc remplacé ce <b>le/les</b> par <b>se</b>. Ce <b>se</b> n'a rien de réfléchi ici : c'est juste un « lui/leur » déguisé. Comme <b>se</b> peut vouloir dire à lui, à elle, à vous ou à eux, on précise si besoin : « Se lo di <b>a ella</b> », « Se lo explico <b>a usted</b> ». Truc : dès que tu vois <b>se + lo/la/los/las</b>, pense « <b>le lui</b> » ou « <b>le leur</b> »."
  },

  REVIEW: [
    { q:"« Ce cadeau est pour toi. » → Este regalo es ___ ti.", opts:["para","por"], correct:0, fb:"Destinataire = la flèche → PARA. (rappel X7)" },
    { q:"« Je me promène sur la plage. » → Paseo ___ la playa.", opts:["para","por"], correct:1, fb:"Le passage, à travers un lieu → POR. (rappel X7)" },
    { q:"« J'étudie pour réussir. » → Estudio ___ aprobar.", opts:["para","por"], correct:0, fb:"Le but (afin de) → PARA + infinitif. (rappel X7)" },
    { q:"« Enfin ! » →", opts:["¡Para fin!","¡Por fin!"], correct:1, fb:"Expression figée : ¡Por fin! (rappel X7)" },
    { q:"« J'ai payé 10 euros pour ce livre. » → Pagué diez euros ___ este libro.", opts:["por","para"], correct:0, fb:"Un prix = un échange → POR. (rappel X7)" }
  ],

  CULTURE_NOTE: {
    icon: "🗺️",
    title: "Note culturelle — « le vi » à Madrid, « se los » en Amérique",
    html: "À Madrid et dans le centre de l'Espagne, tu entendras souvent « <b>Le vi ayer</b> » (je l'ai vu hier) en parlant d'un homme, au lieu de « Lo vi ayer ». Ce <b>leísmo</b> est accepté par l'Académie royale pour une personne masculine : ne t'inquiète pas si tu l'entends, mais utilise <b>lo</b>, qui marche partout. En Amérique latine, où <b>vosotros</b> n'existe pas (on dit <b>ustedes</b>), on entend aussi « <b>Se los</b> di » pour « je vous l'ai donné » (à vous tous) : le <b>s</b> de « los » marque que « vous » est pluriel. Enfin, bonne nouvelle : partout, <b>dímelo</b>, <b>te lo juro</b> (je te le jure) et <b>no sé lo que pasa</b> s'entendent à chaque coin de rue !"
  },

  DRILLS: [
    { type:"fill", text:"¿Tienes el documento? Sí, ___ tengo en la mesa.", answers:["lo"], why:"El documento = masc. sing., COD → lo. (exercice d'Ashley n° 17)" },
    { type:"fill", text:"María no encuentra sus gafas. ¿___ has visto?", answers:["Las","las"], why:"Las gafas = fém. plur. → las, placé avant le verbe conjugué (has visto). (exercice d'Ashley n° 21)" },
    { type:"choice", q:"« J'écris à Ana. » → ___ escribo a Ana.", opts:["La","Le","Lo"], correct:1, why:"À QUI ? à Ana → COI → le (= lui). En français aussi : je LUI écris." },
    { type:"fill", text:"Quiero comprar este vestido. ¿Puedes ___? (conseguir + ce vestido)", answers:["conseguirlo"], why:"Avec un infinitif, le pronom se colle à la fin : conseguir + lo = conseguirlo. On pourrait aussi dire « ¿Lo puedes conseguir? ». (exercice d'Ashley n° 20)" },
    { type:"fill", text:"¿El pan? Voy a ___ ahora. (comprar + le pain)", answers:["comprarlo"], why:"Voy a + infinitif : le pronom se colle à l'infinitif → comprarlo (ou « Lo voy a comprar »)." },
    { type:"choice", q:"Laquelle de ces phrases est FAUSSE ?", opts:["Lo voy a llamar.","Voy a llamarlo.","Voy a lo llamar."], correct:2, why:"Le pronom va AVANT le verbe conjugué ou COLLÉ à l'infinitif, jamais entre « a » et l'infinitif." },
    { type:"fill", text:"¿Me prestas tu bolígrafo? Sí, ___ presto ahora mismo.", answers:["te lo"], why:"À qui ? te (à toi) ; quoi ? lo (el bolígrafo). Ordre COI + COD → te lo. (exercice d'Ashley n° 24)" },
    { type:"fill", text:"¿Le diste el dinero a Pedro? Sí, ___ di ayer.", answers:["se lo"], why:"Le (à Pedro) + lo (el dinero) : « le lo » est impossible, le devient SE → se lo. (exercice d'Ashley n° 18)" },
    { type:"fill", text:"¿Le has dado las flores a tu madre? Sí, ___ he dado.", answers:["se las"], why:"Le (à ta mère) + las (las flores) → se las. Le pronom se place avant l'auxiliaire he." },
    { type:"fill", text:"« Je ne te l'ai pas dit. » = No ___ he dicho.", answers:["te lo"], why:"Te (à toi, COI) + lo (le, COD), avant l'auxiliaire : No te lo he dicho. (exercice d'Ashley n° 40)" },
    { type:"choice", q:"Marta ne connaît pas la réponse. Toi, tu la connais : « ¡___! » (dis-la-lui)", opts:["Díselo","Dísela","Dilela"], correct:1, why:"La respuesta est féminin → la. Le (à Marta) + la → se la, collé à l'impératif : dísela. « Díselo » serait correct avec un mot masculin (el secreto) ou au sens neutre « dis-le-lui ». (exercice d'Ashley n° 23, corrigé)" },
    { type:"fill", text:"¿La verdad? No quiero ___ todavía. (te la dire, à toi)", answers:["decírtela"], why:"Decir + te (à toi) + la (la verdad), collés à l'infinitif, avec un accent pour garder la voix sur CÍR : decírtela. (exercice d'Ashley n° 25, précisé)" },
    { type:"fill", text:"No quiero decir___ la verdad a mi madre todavía.", answers:["le"], why:"À qui ? à ma mère → le (lui). La verdad reste écrite en entier, donc un seul pronom : decirle. (exercice d'Ashley n° 25, autre version)" },
    { type:"fill", text:"« Dis-le-moi ! » = ¡___!", answers:["Dímelo","dímelo"], why:"Impératif affirmatif (di) + me (à moi) + lo (le), tout collé, avec accent : dímelo." },
    { type:"fill", text:"¿Las llaves? ¡___, por favor! (donne-les-moi)", answers:["Dámelas","dámelas"], why:"Da (donne) + me + las (las llaves) → dámelas, avec accent sur DÁ." },
    { type:"fill", text:"No comprendo ___ dices.", answers:["lo que"], why:"« Ce que » = lo que. (exercice d'Ashley n° 19)" },
    { type:"fill", text:"Me gusta mucho ___ haces por los demás.", answers:["lo que"], why:"« Ce que tu fais » = lo que haces. (exercice d'Ashley n° 22)" },
    { type:"fill", text:"Todo ___ brilla no es oro.", answers:["lo que"], why:"Proverbe : tout ce qui brille n'est pas or. « Ce qui » = lo que aussi. (exercice d'Ashley n° 26)" },
    { type:"choice", q:"___ problema es muy difícil de resolver.", opts:["Esta","Este"], correct:1, why:"Piège ! El problema est MASCULIN (comme el día, el mapa, el idioma) → este. (exercice d'Ashley n° 27)" },
    { type:"choice", q:"No tengo ___ libro de gramática.", opts:["ningún","ninguno"], correct:0, why:"Devant un nom masculin singulier, ninguno perd son -o → ningún libro. (exercice d'Ashley n° 28)" },
    { type:"choice", q:"¿Prefieres ___ blusa que está lejos o esta de aquí?", opts:["aquel","aquella"], correct:1, why:"La blusa est féminin → aquella (cette…-là, loin). Aquel irait avec un nom masculin : aquel vestido. (exercice d'Ashley n° 29, corrigé)" },
    { type:"choice", q:"Compré ___ libros en la feria.", opts:["mucho","muchos"], correct:1, why:"« Beaucoup de » s'accorde en espagnol : libros est masc. plur. → muchos. (exercice d'Ashley n° 30)" },
    { type:"choice", q:"Hay ___ gente en este supermercado.", opts:["demasiado","demasiada"], correct:1, why:"La gente est féminin singulier → demasiada gente. (exercice d'Ashley n° 31)" },
    { type:"choice", q:"Me gustan ___ zapatos que llevo puestos.", opts:["estos","aquellas"], correct:0, why:"Los zapatos : masculin pluriel, et proches (je les porte !) → estos. (exercice d'Ashley n° 32)" },
    { type:"choice", q:"¿Tienes ___ duda sobre la lección?", opts:["alguna","ningún"], correct:0, why:"La duda est féminin, et dans une question positive on dit alguna (une, quelque). Ningún est masculin et négatif. (exercice d'Ashley n° 33)" },
    { type:"choice", q:"La gente de este barrio ___ muy simpática.", opts:["es","son"], correct:0, why:"La gente est un nom SINGULIER : le verbe reste au singulier → la gente es." },
    { type:"fill", text:"« Ne parle pas si vite ! » = ¡No ___ tan rápido!", answers:["hables"], why:"Impératif négatif = no + subjonctif : hablar → no hables (le -a devient -e). (exercice d'Ashley n° 39)" },
    { type:"fill", text:"¡No ___ (comer) eso, está malo!", answers:["comas"], why:"Verbe en -er : le -e devient -a au subjonctif → no comas." },
    { type:"fill", text:"¡No ___ (tocar) el horno, está caliente!", answers:["toques"], why:"Tocar → no toques : c devient qu pour garder le son « k » devant e." },
    { type:"fill", text:"¡No ___ (preocuparse, tú)! Todo va bien.", answers:["te preocupes"], why:"Verbe pronominal à l'impératif négatif : le pronom reste AVANT → no te preocupes." },
    { type:"choice", q:"« Dis-le-lui » et « ne le lui dis pas » :", opts:["díselo / no se lo digas","dícelo / no díselo","se lo di / no díselo"], correct:0, why:"Affirmatif : pronoms collés à la fin (díselo). Négatif : pronoms avant le verbe au subjonctif (no se lo digas)." },
    { type:"choice", q:"Pourquoi dit-on « Hablo español » plutôt que « Yo hablo español » ?", opts:["Parce que « yo » est impoli","Parce que la terminaison -o dit déjà « je »","Parce que « yo » n'existe qu'au passé"], correct:1, why:"En espagnol, la terminaison du verbe indique la personne : on n'ajoute « yo » que pour insister ou opposer (« Yo hablo español, él no »)." },
    { type:"fill", text:"« Je suis enceinte. » = Estoy ___.", answers:["embarazada"], why:"Faux ami : embarazada = enceinte. Embarrassée = avergonzada. (exercice d'Ashley n° 38)" },
    { type:"choice", q:"« Espera un rato » veut dire…", opts:["Attends un rat","Attends un moment","Attends au bureau"], correct:1, why:"Faux ami : un rato = un moment. Un rat = una rata." },
    { type:"choice", q:"« Trabajo en una oficina » veut dire…", opts:["Je travaille dans une pharmacie","Je travaille dans un bureau"], correct:1, why:"Faux ami : la oficina = le bureau. Une officine / pharmacie = una farmacia." }
  ],

  ANNOTATED: {
    title: "Una tarde de compras",
    intro: "Le texte d'Ashley (T15), un peu allongé pour voir les petits pronoms en action. Touche chaque mot pour voir ce que c'est. Repère les pronoms la, los, le, me : à chaque fois, demande-toi QUOI ? ou À QUI ?",
    sentences: [
      { fr: "Hier après-midi, je suis allée faire du shopping avec ma sœur au centre commercial de la banlieue.",
        tokens: [
          { w:"Ayer", tag:"adverbe", fr:"hier" },
          { w:"por la tarde", tag:"préposition", info:"groupe figé : moment de la journée", fr:"l'après-midi", tip:"POR la tarde : un moment approximatif (rappel X7)." },
          { w:"fui de compras", tag:"verbe", info:"ir de compras · pretérito indefinido · yo", fr:"je suis allée faire du shopping", tip:"Fui = ir OU ser au passé. Ici, « de compras » montre que c'est ir (aller)." },
          { w:"con", tag:"préposition", fr:"avec" },
          { w:"mi", tag:"déterminant", info:"possessif · sing.", fr:"ma" },
          { w:"hermana", tag:"nom", info:"fém. sing.", fr:"sœur" },
          { w:"al", tag:"préposition", info:"a + el = al", fr:"au" },
          { w:"centro comercial", tag:"nom", info:"masc. sing.", fr:"centre commercial" },
          { w:"de", tag:"préposition", fr:"de" },
          { w:"las afueras", tag:"nom", info:"fém. plur. (toujours au pluriel)", fr:"la banlieue, la périphérie", tip:"Las afueras est toujours au pluriel : « de las afueras » (et pas « de la afueras »)." }
        ] },
      { fr: "J'avais besoin d'acheter un manteau neuf pour l'hiver et des chaussures confortables.",
        tokens: [
          { w:"Necesitaba", tag:"verbe", info:"necesitar · imperfecto · yo", fr:"j'avais besoin", tip:"Imparfait (-aba) : une situation, un besoin qui dure." },
          { w:"comprar", tag:"verbe", info:"comprar · infinitif", fr:"acheter" },
          { w:"un", tag:"article", info:"masc. sing.", fr:"un" },
          { w:"abrigo", tag:"nom", info:"masc. sing.", fr:"manteau" },
          { w:"nuevo", tag:"adjectif", info:"masc. sing.", fr:"neuf" },
          { w:"para", tag:"préposition", fr:"pour", tip:"PARA el invierno : la flèche vers le but, l'usage prévu (rappel X7)." },
          { w:"el", tag:"article", info:"masc. sing.", fr:"l'" },
          { w:"invierno", tag:"nom", info:"masc. sing.", fr:"hiver" },
          { w:"y", tag:"conjonction", fr:"et" },
          { w:"unos", tag:"article", info:"masc. plur.", fr:"des" },
          { w:"zapatos", tag:"nom", info:"masc. plur.", fr:"chaussures" },
          { w:"cómodos", tag:"adjectif", info:"masc. plur.", fr:"confortables" }
        ] },
      { fr: "Après avoir regardé dans plusieurs magasins, j'ai trouvé une veste bleu marine.",
        tokens: [
          { w:"Después de", tag:"préposition", fr:"après" },
          { w:"mirar", tag:"verbe", info:"mirar · infinitif", fr:"regarder", tip:"Après une préposition, l'espagnol met l'infinitif simple : después de mirar = après avoir regardé." },
          { w:"en", tag:"préposition", fr:"dans" },
          { w:"varias", tag:"adjectif", info:"fém. plur.", fr:"plusieurs" },
          { w:"tiendas", tag:"nom", info:"fém. plur.", fr:"magasins, boutiques" },
          { w:"encontré", tag:"verbe", info:"encontrar · pretérito indefinido · yo", fr:"j'ai trouvé" },
          { w:"una", tag:"article", info:"fém. sing.", fr:"une" },
          { w:"chaqueta", tag:"nom", info:"fém. sing.", fr:"veste" },
          { w:"azul marino", tag:"adjectif", info:"invariable", fr:"bleu marine" }
        ] },
      { fr: "Elle m'allait parfaitement et elle était en solde, alors je l'ai achetée.",
        tokens: [
          { w:"Me", tag:"pronom COI", info:"1re pers. sing.", fr:"m' (à moi)", tip:"Quedar bien a alguien = aller bien à quelqu'un : la veste va À MOI → me." },
          { w:"quedaba", tag:"verbe", info:"quedar · imperfecto · 3e sing. (la chaqueta)", fr:"allait" },
          { w:"perfecta", tag:"adjectif", info:"fém. sing.", fr:"parfaite(ment)" },
          { w:"y", tag:"conjonction", fr:"et" },
          { w:"estaba", tag:"verbe", info:"estar · imperfecto · 3e sing.", fr:"était", tip:"ESTAR rebajada : un état provisoire (le prix soldé ne dure pas)." },
          { w:"rebajada", tag:"adjectif", info:"fém. sing.", fr:"soldée, en solde" },
          { w:"así que", tag:"conjonction", fr:"alors, donc" },
          { w:"la", tag:"pronom COD", info:"fém. sing. = la chaqueta", fr:"l' (la veste)", tip:"QUOI ? la veste (féminin) → la, placé AVANT le verbe conjugué." },
          { w:"compré", tag:"verbe", info:"comprar · pretérito indefinido · yo", fr:"j'ai achetée" }
        ] },
      { fr: "Ma sœur a vu des chaussures magnifiques et me les a offertes.",
        tokens: [
          { w:"Mi", tag:"déterminant", info:"possessif · sing.", fr:"ma" },
          { w:"hermana", tag:"nom", info:"fém. sing.", fr:"sœur" },
          { w:"vio", tag:"verbe", info:"ver · pretérito indefinido · él/ella", fr:"a vu", tip:"Vio = ver déguisé ! Passé simple irrégulier : vi, viste, vio." },
          { w:"unos", tag:"article", info:"masc. plur.", fr:"des" },
          { w:"zapatos", tag:"nom", info:"masc. plur.", fr:"chaussures" },
          { w:"preciosos", tag:"adjectif", info:"masc. plur.", fr:"magnifiques" },
          { w:"y", tag:"conjonction", fr:"et" },
          { w:"me", tag:"pronom COI", info:"1re pers. sing.", fr:"me (à moi)", tip:"À QUI ? à moi → me. Il vient EN PREMIER." },
          { w:"los", tag:"pronom COD", info:"masc. plur. = los zapatos", fr:"les", tip:"QUOI ? les chaussures (masc. plur.) → los. Ordre : me + los." },
          { w:"regaló", tag:"verbe", info:"regalar · pretérito indefinido · él/ella", fr:"a offert" }
        ] },
      { fr: "Je l'ai remerciée pour le cadeau.",
        tokens: [
          { w:"Le", tag:"pronom COI", info:"3e pers. sing. = a mi hermana", fr:"lui (à elle)", tip:"Dar las gracias A alguien : À QUI ? à ma sœur → le. En français on dit « je l'ai remerciée », en espagnol « je LUI ai donné les mercis »." },
          { w:"di las gracias", tag:"verbe", info:"dar las gracias · pretérito indefinido · yo", fr:"ai remercié(e)", tip:"Di = dar au passé, yo." },
          { w:"por", tag:"préposition", fr:"pour", tip:"Gracias POR : la cause du merci (rappel X7)." },
          { w:"el", tag:"article", info:"masc. sing.", fr:"le" },
          { w:"regalo", tag:"nom", info:"masc. sing.", fr:"cadeau" }
        ] },
      { fr: "À la fin, nous avons goûté d'un chocolat avec des churros avant de rentrer à la maison.",
        tokens: [
          { w:"Al final", tag:"adverbe", info:"groupe figé", fr:"à la fin, finalement", tip:"Al final = à la fin ; ¡por fin! = enfin (soulagement)." },
          { w:"merendamos", tag:"verbe", info:"merendar · pretérito indefinido · nosotros", fr:"nous avons goûté", tip:"Merendar = prendre le goûter (la merienda), vers 17-18 h en Espagne." },
          { w:"un", tag:"article", info:"masc. sing.", fr:"un" },
          { w:"chocolate", tag:"nom", info:"masc. sing.", fr:"chocolat (chaud, épais)" },
          { w:"con", tag:"préposition", fr:"avec" },
          { w:"churros", tag:"nom", info:"masc. plur.", fr:"churros" },
          { w:"antes de", tag:"préposition", fr:"avant de" },
          { w:"volver", tag:"verbe", info:"volver · infinitif", fr:"rentrer, revenir" },
          { w:"a casa", tag:"préposition", info:"groupe figé", fr:"à la maison" }
        ] },
      { fr: "Ce qui m'a le plus plu, c'est ce moment avec ma sœur.",
        tokens: [
          { w:"Lo que", tag:"pronom sujet", info:"pronom relatif neutre, sujet de « fue »", fr:"ce qui", tip:"Lo que = ce que / ce qui." },
          { w:"más", tag:"adverbe", fr:"le plus" },
          { w:"me gustó", tag:"verbe", info:"gustar · pretérito indefinido · 3e sing.", fr:"m'a plu" },
          { w:"fue", tag:"verbe", info:"ser · pretérito indefinido · 3e sing.", fr:"a été, c'est", tip:"Fue = ser déguisé (ou ir) : ici « ce qui m'a plu a ÉTÉ… »." },
          { w:"ese", tag:"déterminant", info:"démonstratif · masc. sing.", fr:"ce" },
          { w:"rato", tag:"nom", info:"masc. sing.", fr:"moment", tip:"Faux ami : un rato = un moment, pas un rat (una rata) !" },
          { w:"con", tag:"préposition", fr:"avec" },
          { w:"mi", tag:"déterminant", info:"possessif · sing.", fr:"ma" },
          { w:"hermana", tag:"nom", info:"fém. sing.", fr:"sœur" }
        ] }
    ],
    questions: [
      { q:"Dans « la compré », que remplace « la » ?", opts:["La sœur","La veste (la chaqueta)","La boutique"], correct:1, why:"QUOI ? j'ai acheté la veste → la (féminin singulier)." },
      { q:"Dans « me los regaló », que remplace « los » ?", opts:["Les chaussures","Les churros","Les magasins"], correct:0, why:"Los = los zapatos (masc. plur.). Me = à moi. Ordre : à qui + quoi." },
      { q:"Pourquoi « Le di las gracias » et pas « La di las gracias » ?", opts:["Parce que hermana est masculin","Parce qu'on donne les mercis À quelqu'un : c'est un COI","C'est une faute"], correct:1, why:"Dar las gracias A alguien : à qui ? → COI → le (même pour une femme)." },
      { q:"Qu'est-ce que la sœur a offert ?", opts:["Une veste bleu marine","Un manteau","Des chaussures"], correct:2, why:"« Mi hermana vio unos zapatos preciosos y me los regaló. » La veste, c'est la narratrice qui l'a achetée." },
      { q:"Que veut dire « las afueras » ?", opts:["La banlieue, la périphérie","Les soldes","Le rayon extérieur"], correct:0, why:"Las afueras = la périphérie d'une ville, toujours au pluriel." }
    ]
  },

  NEXT_PREVIEW: "Bravo, tu as terminé l'atelier des blocages ! Reviens sur un chapitre dès qu'un doute revient : c'est fait pour ça.",

  META: { vocabTitle: "Les petits mots qui remplacent (X8)", lectureTitle: "Le secret de l'anniversaire", bilanTitle: "Bravo, tu as vaincu les blocages du francophone !", pronLabel: "Pronoms collés et sons piège (ñ, ll, jota, c espagnol)", todayLede: "remplacer un mot par lo, la, le, te lo ou se lo sans hésiter, savoir où les placer (dímelo, voy a comprarlo), utiliser lo que, et déjouer les derniers pièges d'Ashley (este problema, demasiada gente, ¡No hables!, embarazada…) — avec une révision finale de tout l'atelier X1-X8" }
};
