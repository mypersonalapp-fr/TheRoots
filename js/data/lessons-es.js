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

// ====================================================================================================
// PALIERS A1.1 · A1.2 · A1.3 (leçons 201 à 203) — format identique aux leçons d'anglais, joués par
// lessons.html?lang=es. Sources : les cours d'Ashley (A1.1 Identidad, A1.2 Familia, A1.3 Amigos y
// relaciones sociales), approfondis et corrigés. Règle : aucune notion avant son heure ; informel ET
// formel dans chaque leçon. Phonétique : syllabe tonique en MAJUSCULES, é = « blé », th = « think »
// (c/z en Espagne), kh = « r » rauque (j).
// ====================================================================================================
function __esB(block, rows){ return rows.map(function(r){ return {block:block, en:r[0], ipa:r[1], fr:r[2], note:r[3]||""}; }); }
function __esIdx(V, terms){ return terms.map(function(t){ for(var i=0;i<V.length;i++){ if(V[i].en===t) return i; } throw new Error("MEM_WORDS introuvable : "+t); }); }
function __esR(display, fr){
  var toks = display.replace(/([¿¡?!.])/g, " $1 ").replace(/,/g, "").split(/\s+/).filter(Boolean);
  var answer = toks.join(" ").toLowerCase();
  var bank = toks.slice(), s = display.length * 7 + 3;
  for(var i = bank.length - 1; i > 0; i--){ s = (s * 1103515245 + 12345) & 0x7fffffff; var j = s % (i + 1); var t = bank[i]; bank[i] = bank[j]; bank[j] = t; }
  return {bank: bank, answer: answer, display: display, fr: fr};
}

// A1.1 — Identidad : te présenter, dire qui tu es (tutoiement ET vouvoiement)
(function(){
var V = [].concat(
 __esB("L'état civil", [
  ["el nombre","/ˈnombɾe/","le prénom","Accent sur NOM-bre. Piège : « nombre » n'est PAS le nom de famille."],
  ["el apellido","/apeˈʝiðo/","le nom de famille","En Espagne et en Amérique latine on porte DEUX apellidos : celui du père, puis celui de la mère. Sur un formulaire : « Apellidos » (pluriel)."],
  ["el apodo","/aˈpoðo/","le surnom","Ce que tes amis t'appellent, pas ce qui est sur ta carte d'identité."],
  ["la edad","/eˈðað/","l'âge","Le d final est très doux, presque muet."],
  ["la fecha de nacimiento","/ˈfetʃa ðe naθiˈmjento/","la date de naissance","nacer = naître : « Nací en Sevilla » = je suis né(e) à Séville."],
  ["el estado civil","/esˈtaðo θiˈβil/","la situation familiale","soltero/a (célibataire), casado/a (marié·e)… Voir le bonus."],
  ["la profesión","/pɾofeˈsjon/","la profession","Informel : « ¿A qué te dedicas? » = tu fais quoi dans la vie ?"],
  ["el teléfono","/teˈlefono/","le téléphone","Accent écrit sur le premier é : on dit te-LÉ-fo-no."],
  ["el correo electrónico","/koˈrreo elekˈtɾoniko/","l'adresse e-mail","Le « @ » se dit « arroba »."],
  ["la dirección","/diɾekˈθjon/","l'adresse postale","Le même mot veut aussi dire « direction »."]
 ]),
 __esB("Origine et résidence", [
  ["el país","/paˈis/","le pays","Deux syllabes : pa-ÍS. L'accent écrit sur le í les sépare."],
  ["la ciudad","/θjuˈðað/","la ville","c devant i = « th » anglais en Espagne (en Amérique latine : « s »)."],
  ["la nacionalidad","/naθjonaliˈðað/","la nationalité","Mot long mais régulier : tous les mots en -dad sont féminins."],
  ["vivir","/biˈβiɾ/","habiter, vivre","Le b et le v se prononcent exactement pareil en espagnol."],
  ["ser de","/seɾ ðe/","être de (origine)","« Soy de Lyon » = je viens de Lyon. L'origine se dit avec « de »."],
  ["vivir en","/biˈβiɾ en/","habiter à / en","L'habitation se dit avec « en » : « Vivo en París »."]
 ]),
 __esB("Les nationalités (masc. / fém.)", [
  ["francés / francesa","/fɾanˈθes · fɾanˈθesa/","français / française","Le masculin perd son accent écrit au féminin."],
  ["español / española","/espaˈɲol · espaˈɲola/","espagnol / espagnole","ñ = « gn » de « agneau »."],
  ["italiano / italiana","/itaˈljano · itaˈljana/","italien / italienne","Régulier : -o → -a."],
  ["alemán / alemana","/aleˈman · aleˈmana/","allemand / allemande",""],
  ["portugués / portuguesa","/poɾtuˈɣes · poɾtuˈɣesa/","portugais / portugaise",""],
  ["inglés / inglesa","/iŋˈgles · iŋˈglesa/","anglais / anglaise",""],
  ["argentino / argentina","/axenˈtino · axenˈtina/","argentin / argentine","j et g devant e/i = « kh » rauque."],
  ["mexicano / mexicana","/mexiˈkano · mexiˈkana/","mexicain / mexicaine","Le x de México se prononce comme la jota."],
  ["colombiano / colombiana","/kolomˈbjano · kolomˈbjana/","colombien / colombienne",""],
  ["marroquí","/maroˈki/","marocain·e","Finit en -í : identique au masculin et au féminin."],
  ["estadounidense","/estaðouniˈðense/","américain·e (des États-Unis)","Finit en -e : identique au masculin et au féminin."]
 ]),
 __esB("Le corps et l'apparence", [
  ["la altura","/alˈtuɾa/","la taille","On dit « Mido 1,70 » (je mesure 1,70 m) : à retenir tel quel."],
  ["el peso","/ˈpeso/","le poids","« peso » est aussi la monnaie du Mexique, de l'Argentine…"],
  ["el pelo","/ˈpelo/","les cheveux","Singulier en espagnol : « el pelo negro »."],
  ["los ojos","/los ˈoxos/","les yeux","« ojos azules, verdes, marrones, negros »."],
  ["la cara","/ˈkaɾa/","le visage",""],
  ["la cabeza","/kaˈβeθa/","la tête","z = « th » anglais en Espagne."],
  ["el brazo","/ˈbɾaθo/","le bras",""],
  ["la mano","/ˈmano/","la main","PIÈGE : finit en -o mais est FÉMININ (la mano, las manos)."],
  ["la pierna","/ˈpjeɾna/","la jambe",""],
  ["el pie","/ˈpje/","le pied",""]
 ]),
 __esB("Tutoyer ou vouvoyer ?", [
  ["tú","/tu/","tu","Amis, famille, jeunes, collègues. Avec accent = pronom. Sans accent « tu » = ton/ta."],
  ["usted","/usˈteð/","vous (politesse, 1 personne)","Inconnu plus âgé, client, supérieur. Écrit « Ud. ». Se conjugue comme « él/ella » !"],
  ["vosotros / vosotras","/boˈsotɾos · boˈsotɾas/","vous (pluriel amical)","ESPAGNE uniquement. « vosotras » = que des femmes."],
  ["ustedes","/usˈteðes/","vous (pluriel)","Amérique latine : remplace TOUJOURS vosotros. En Espagne : pluriel de politesse."]
 ]),
 __esB("Les questions", [
  ["¿cómo?","/ˈkomo/","comment ?","Les mots interrogatifs portent un accent écrit : cómo, dónde, cuántos…"],
  ["¿cuántos años?","/ˈkwantos ˈaɲos/","combien d'années ? (quel âge ?)","On demande l'âge avec « años » : ¿Cuántos años tienes?"],
  ["¿de dónde?","/de ˈdonde/","d'où ?","Pour l'origine : ¿De dónde eres?"],
  ["¿dónde?","/ˈdonde/","où ?","Pour l'habitation : ¿Dónde vives?"],
  ["¿cuál?","/kwal/","quel / lequel ?","¿Cuál es tu apellido? = quel est ton nom de famille ?"]
 ]),
 __esB("Bonus : 10 expressions clés de l'identité", [
  ["mucho gusto","/ˈmutʃo ˈɣusto/","enchanté(e)","Neutre : un homme comme une femme peut le dire."],
  ["encantado / encantada","/enkanˈtaðo · enkanˈtaða/","ravi(e)","S'accorde avec celui ou celle qui parle."],
  ["igualmente","/iɣwalˈmente/","pareillement","La réponse standard à « mucho gusto »."],
  ["el gusto es mío","/el ˈɣusto es ˈmio/","le plaisir est pour moi","Un peu plus soutenu."],
  ["¿cómo se escribe?","/ˈkomo se esˈkɾiβe/","comment ça s'écrit ?","Indispensable pour épeler un nom."],
  ["no comprendo","/no komˈpɾendo/","je ne comprends pas","Aussi : « no entiendo »."],
  ["más despacio, por favor","/mas desˈpaθjo poɾ faˈβoɾ/","plus lentement, s'il vous plaît","Très utile pour un débutant !"],
  ["¿puede repetir?","/ˈpweðe repeˈtiɾ/","pouvez-vous répéter ?","Informel : « ¿Puedes repetir? »"],
  ["estoy soltero / soltera","/esˈtoi solˈteɾo/","je suis célibataire","Avec ESTAR : l'état civil est vu comme un état."],
  ["estoy casado / casada","/esˈtoi kaˈsaðo/","je suis marié(e)","Idem avec estar."]
 ])
);
LESSONS_ES[201] = {
 code:"A1.1", level:"A1",
 VOCAB: V,
 MEM_WORDS: __esIdx(V, ["el nombre","el apellido","la edad","vivir","ser de","vivir en","usted","mucho gusto"]),
 MINI_CHECKS: [
  {q:"Comment dit-on « mon prénom » ?", opts:["mi apellido","mi nombre","mi edad"], correct:1, fb:"« nombre » = prénom. « apellido » = nom de famille. Piège classique : nombre ≠ nom."},
  {q:"« Je viens de Lyon. »", opts:["Soy en Lyon.","Soy de Lyon.","Vivo de Lyon."], correct:1, fb:"Origine = « de » : « Soy de Lyon ». L'habitation, elle, prend « en » : « Vivo en Lyon »."},
  {q:"« J'habite à Madrid. »", opts:["Vivo de Madrid.","Soy en Madrid.","Vivo en Madrid."], correct:2, fb:"Habiter = vivir + en : « Vivo en Madrid »."},
  {q:"À un directeur que tu ne connais pas, tu dis…", opts:["¿Cómo te llamas?","¿Cómo se llama usted?","¿Cómo me llamo?"], correct:1, fb:"Inconnu + position = usted. Et usted se conjugue avec la forme de « él/ella » : se llama."},
  {q:"Quel est le féminin de « francés » ?", opts:["francés","franceso","francesa"], correct:2, fb:"On ajoute -a et on perd l'accent écrit : francés → francesa."},
  {q:"« la mano » est…", opts:["masculin","féminin"], correct:1, fb:"Féminin malgré le -o : la mano, las manos."},
  {q:"Pourquoi dit-on « Soy Ana » et pas « Yo soy Ana » ?", opts:["« yo » est interdit","La terminaison -oy dit déjà « je »","C'est de l'argot"], correct:1, fb:"La terminaison du verbe porte l'information : soy ne peut vouloir dire que « je suis ». On ajoute « yo » seulement pour insister."},
  {q:"Comment écrit-on la nationalité d'une Française ?", opts:["Francesa","francesa","FRANCESA"], correct:1, fb:"En espagnol, les nationalités s'écrivent sans majuscule : francesa, española."}
 ],
 ROUNDS: [
  __esR("Me llamo Ana.","Je m'appelle Ana."),
  __esR("¿Cómo te llamas?","Comment tu t'appelles ?"),
  __esR("Tengo veinte años.","J'ai vingt ans."),
  __esR("Soy de Madrid.","Je suis de Madrid."),
  __esR("Vivo en París.","J'habite à Paris."),
  __esR("¿De dónde eres?","D'où es-tu ?"),
  __esR("¿Cómo se llama usted?","Comment vous appelez-vous ?"),
  __esR("Mi apellido es García.","Mon nom de famille est García."),
  __esR("¿Cuántos años tiene usted?","Quel âge avez-vous ?"),
  __esR("Mucho gusto, soy francesa.","Enchantée, je suis française."),
  __esR("Tengo veintiún años.","J'ai vingt et un ans."),
  __esR("¿Dónde vives?","Où habites-tu ?")
 ],
 QUIZ: [
  {cat:"ecrit", q:"Me ___ Sofía.", opts:["llamo","llamas","llama"], correct:0, why:"« yo » → me llamo. Le petit pronom me se place AVANT le verbe."},
  {cat:"ecrit", q:"¿Cómo ___ llamas? (tutoiement)", opts:["me","te","se"], correct:1, why:"tú → te llamas. La forme du pronom suit la personne : me, te, se…"},
  {cat:"ecrit", q:"Elle a trente et un ans.", opts:["Tiene treinta y uno años.","Tiene treinta y un años.","Es treinta y un años."], correct:1, why:"Devant un nom masculin, « uno » devient « un » : treinta y un años. Et l'âge se dit avec TENER."},
  {cat:"ecrit", q:"Nous habitons à Paris.", opts:["Vivimos en París.","Vivimos de París.","Somos en París."], correct:0, why:"vivir (nosotros) = vivimos ; habiter à = vivir en."},
  {cat:"ecrit", q:"¿De dónde ___ usted?", opts:["eres","es","soy"], correct:1, why:"usted se conjugue comme él/ella : « es »."},
  {cat:"ecrit", q:"___ apellidos son López García. (mes)", opts:["Mi","Mis","Tus"], correct:1, why:"Le possessif s'accorde avec la chose possédée : plusieurs apellidos → mis."},
  {cat:"ecrit", q:"¿___ eres de Madrid? (tu = pronom)", opts:["Tu","Tú"], correct:1, why:"« tú » avec accent = le pronom « tu ». « tu » sans accent = ton/ta."},
  {cat:"ecrit", q:"Il s'appelle Pablo.", opts:["Se llama Pablo.","Se llamas Pablo.","Me llama Pablo."], correct:0, why:"él → se llama (trois lettres pour l'ensemble él / ella / usted)."},
  {cat:"ecrit", q:"Quelle phrase est la plus naturelle ?", opts:["Yo soy español y yo vivo en Lyon.","Soy español y vivo en Lyon."], correct:1, why:"On omet le pronom sujet : les terminaisons -oy et -o disent déjà « je »."},
  {cat:"ecrit", q:"Féminin de « español » :", opts:["españolo","española","espanola"], correct:1, why:"Nationalité en consonne : on ajoute -a (español → española). Le ñ reste !"},
  {cat:"oral", audio:"Me llamo Carlos y soy de Buenos Aires.", q:"Écoute : d'où vient Carlos ?", opts:["De Madrid","De Buenos Aires","De Barcelone"], correct:1, why:"« soy de Buenos Aires » : origine avec ser + de."},
  {cat:"oral", audio:"Tengo veintiún años.", q:"Écoute : quel âge a la personne ?", opts:["20 ans","21 ans","31 ans"], correct:1, why:"veintiún = 21 (veinte + un). Pas « treinta » qui serait 30."},
  {cat:"oral", audio:"¿Cómo se llama usted?", q:"Écoute : la question est…", opts:["informelle (tutoiement)","formelle (vouvoiement)"], correct:1, why:"« se llama usted » : vouvoiement. Au tutoiement : ¿Cómo te llamas?"},
  {cat:"oral", audio:"Vivo en Valencia, pero soy de Sevilla.", q:"Écoute : où habite la personne ?", opts:["À Séville","À Valence","À Madrid"], correct:1, why:"« vivo en Valencia » : elle habite à Valence. « soy de Sevilla » = elle en vient."},
  {cat:"oral", audio:"Mi apellido es Ruiz. R, U, I, Z.", q:"Écoute : quel est le nom de famille ?", opts:["Ruiz","Ruiz Martín","Rubio"], correct:0, why:"La personne épelle R-U-I-Z : Ruiz."},
  {cat:"oral", audio:"Mucho gusto. — Igualmente.", q:"Écoute : que se disent-ils ?", opts:["Au revoir","Enchanté — pareillement","Merci — de rien"], correct:1, why:"« mucho gusto » (enchanté) → « igualmente » (pareillement)."},
  {cat:"comprehension", passage:"Me llamo Elena, tengo 28 años y soy médica. Nací en Sevilla, pero ahora vivo en Valencia. Mi apellido es Gómez.", q:"Quel est le métier d'Elena ?", opts:["Professeure","Médecin","Étudiante"], correct:1, why:"« médica » = médecin (féminin de médico)."},
  {cat:"comprehension", passage:"Me llamo Elena, tengo 28 años y soy médica. Nací en Sevilla, pero ahora vivo en Valencia. Mi apellido es Gómez.", q:"Où habite Elena aujourd'hui ?", opts:["À Séville","À Valence","À Madrid"], correct:1, why:"« ahora vivo en Valencia ». Elle est née à Séville (« nací en Sevilla »)."},
  {cat:"comprehension", passage:"FICHA — Nombre: Daniel. Apellidos: Ruiz Martín. Edad: 34 años. Nacionalidad: colombiano. Ciudad: Medellín. Profesión: ingeniero.", q:"Quel est le premier apellido de Daniel (celui du père) ?", opts:["Ruiz","Martín","Daniel"], correct:0, why:"Le premier apellido vient du père, le second de la mère."},
  {cat:"comprehension", passage:"FICHA — Nombre: Daniel. Apellidos: Ruiz Martín. Edad: 34 años. Nacionalidad: colombiano. Ciudad: Medellín. Profesión: ingeniero.", q:"Quelle est la nationalité de Daniel ?", opts:["Espagnol","Colombien","Mexicain"], correct:1, why:"« colombiano » : sans majuscule en espagnol."},
  {cat:"comprehension", passage:"Recepcionista: Buenos días. ¿Cómo se llama usted? — Señora: Me llamo Ana Ruiz. — Recepcionista: ¿Cómo se escribe su apellido? — Señora: R, U, I, Z.", q:"Quel indice montre que la conversation est formelle ?", opts:["« Buenos días »","« usted » et « su apellido »","« se escribe »"], correct:1, why:"usted / su = vouvoiement."},
  {cat:"comprehension", passage:"Sofía: Hola, ¿cómo te llamas? — Carlos: Me llamo Carlos. ¿Y tú? — Sofía: Soy Sofía. ¿De dónde eres? — Carlos: Soy de Buenos Aires, pero vivo en Barcelona.", q:"Pourquoi Carlos dit-il « pero » ?", opts:["Il vient d'une ville mais habite ailleurs","Il refuse de répondre","Il est en colère"], correct:0, why:"« pero » = mais : origine (Buenos Aires) ≠ lieu d'habitation (Barcelone)."}
 ],
 PRON_VERBS: [
  {en:"Me llamo Ana.", fr:"Je m'appelle Ana. (ll = « y » de yeux : me YA-mo)"},
  {en:"¿Cómo te llamas?", fr:"Comment tu t'appelles ? (accent sur CÓ-mo)"},
  {en:"Tengo veinte años.", fr:"J'ai vingt ans. (ñ = « gn » : A-gnos)"},
  {en:"Soy de Madrid.", fr:"Je suis de Madrid. (d final très doux : ma-DRID)"},
  {en:"Vivo en Barcelona.", fr:"J'habite à Barcelone. (v = b ; c = « th » : bar-the-LO-na)"},
  {en:"¿De dónde eres?", fr:"D'où es-tu ? (DÓN-de)"},
  {en:"Mucho gusto.", fr:"Enchanté. (ch comme dans « tchèque » ; g devant u = « g » dur)"},
  {en:"Mi apellido es Jiménez.", fr:"Mon nom est Jiménez. (j = « kh » rauque : khi-MÉ-néth)"},
  {en:"¿Cómo se escribe?", fr:"Comment ça s'écrit ? (es-KRI-be)"},
  {en:"Soy francesa y vivo en Zaragoza.", fr:"Je suis française et j'habite à Saragosse. (z/c = « th »)"}
 ],
 READING: [
  "Me llamo Elena Gómez y tengo veintiocho años.",
  "Soy médica en un hospital grande.",
  "Nací en Sevilla, pero ahora vivo en Valencia.",
  "Mi nombre es Elena, pero mis amigos me llaman Ele.",
  "Mi padre se llama Antonio y mi madre se llama Rosa.",
  "Mis apellidos son Gómez Ruiz.",
  "Soy española, pero mi abuela es argentina.",
  "Mi correo electrónico es elena.gomez@correo.es.",
  "Estoy soltera y vivo sola en un piso pequeño.",
  "Mucho gusto: ¿y usted, cómo se llama?"
 ],
 GLOSS: [
  {en:"grande", fr:"grand(e) : un hospital grande → un hospital GRANDE (invariable au féminin)"},
  {en:"el hospital", fr:"l'hôpital"},
  {en:"mis amigos me llaman", fr:"mes amis m'appellent"},
  {en:"el abuelo / la abuela", fr:"le grand-père / la grand-mère"},
  {en:"solo / sola", fr:"seul / seule"},
  {en:"el piso", fr:"l'appartement (Espagne) — en Amérique latine : el departamento"},
  {en:"pequeño", fr:"petit"},
  {en:"nací", fr:"je suis né(e) (verbe nacer, passé : phrase-bloc)"}
 ],
 GRAMMAR1: {
  heading:"Conjugaison : llamarse, ser, tener… et ne PAS dire « yo »",
  lede:"Le grand réflexe espagnol : la terminaison du verbe dit déjà QUI parle. Voilà pourquoi on dit « Me llamo Ana » et non « Yo me llamo Ana ». Un seul nouveau verbe aujourd'hui : llamarse.",
  conj:[
   ["yo →","me llamo","Me llamo Ana."],
   ["tú →","te llamas","¿Cómo te llamas?"],
   ["él, ella, usted →","se llama","Se llama Pablo. · ¿Cómo se llama usted?"],
   ["nosotros →","nos llamamos","Nos llamamos Ana y Luis."],
   ["vosotros →","os llamáis","¿Cómo os llamáis?"],
   ["ellos, ustedes →","se llaman","Se llaman Ana y Luis."]
  ],
  ruleHtml:"📖 <b>llamarse</b> est <b>pronominal</b> comme « s'appeler » : le petit pronom (<b>me, te, se, nos, os, se</b>) se place <b>AVANT</b> le verbe. Autour de lui, trois verbes que tu connais déjà (A1.0) : <b>ser</b> (soy, eres, es…) pour l'identité, <b>tener</b> (tengo, tienes, tiene…) pour l'âge, <b>vivir</b> (vivo, vives, vive…) pour l'habitation. Modèle en 4 phrases : <b>Me llamo Ana. Tengo veinte años. Soy de Madrid. Vivo en Lyon.</b> Et attention : <b>usted</b> et <b>ustedes</b> sont des « vous » de politesse mais se conjuguent à la 3e personne : <b>se llama usted</b>, <b>se llaman ustedes</b>.",
  dialogueLede:"Deux jeunes se rencontrent à une fête (tutoiement) :",
  dialogue:[
   {who:"them", en:"¡Hola! ¿Cómo te llamas?", fr:"Salut ! Comment tu t'appelles ?"},
   {who:"you", en:"Me llamo Carlos. ¿Y tú?", fr:"Je m'appelle Carlos. Et toi ?"},
   {who:"them", en:"Soy Sofía. ¿De dónde eres?", fr:"Moi c'est Sofía. Tu viens d'où ?"},
   {who:"you", en:"Soy de Buenos Aires, pero vivo en Barcelona.", fr:"Je suis de Buenos Aires, mais j'habite à Barcelone."}
  ],
  whyLabel:"Pourquoi l'espagnol « oublie » le pronom sujet",
  whyText:"En français, « mange » peut vouloir dire je, il ou elle : le pronom est donc OBLIGATOIRE. En espagnol, chaque personne a SA terminaison (-o, -as, -a, -amos, -áis, -an) : <b>soy</b> ne peut signifier que « je suis ». Le pronom devient inutile… et lourd. Tu ne l'ajoutes que pour <b>insister ou opposer</b> (« Yo soy francés, ¿y tú? ») ou quand la phrase est ambiguë (« es » = il, elle ou vous : « Él es médico, ella es profesora »). Réflexe à acquérir : <b>commence directement par le verbe</b>."
 },
 GRAMMAR2: {
  heading:"Les 4 questions d'identité, mi/tu/su, l'âge et de / en",
  dialogueLede:"À la réception d'un hôtel (vouvoiement) :",
  dialogue:[
   {who:"them", en:"Buenos días. ¿Cómo se llama usted?", fr:"Bonjour. Comment vous appelez-vous ?"},
   {who:"you", en:"Me llamo Ana Ruiz.", fr:"Je m'appelle Ana Ruiz."},
   {who:"them", en:"¿Cómo se escribe su apellido?", fr:"Comment s'écrit votre nom de famille ?"},
   {who:"you", en:"R, U, I, Z. Soy de Valencia, pero vivo en Madrid.", fr:"R, U, I, Z. Je suis de Valence, mais j'habite à Madrid."}
  ],
  ruleHtml:"💭 <b>Les 4 questions</b> — informel (tú) / formel (usted) : <b>¿Cómo te llamas?</b> / <b>¿Cómo se llama usted?</b> · <b>¿Cuántos años tienes?</b> / <b>¿Cuántos años tiene usted?</b> · <b>¿De dónde eres?</b> / <b>¿De dónde es usted?</b> · <b>¿Dónde vives?</b> / <b>¿Dónde vive usted?</b>. Ponctuation : l'espagnol ouvre <b>ET</b> ferme (¿…? ¡…!). Les mots interrogatifs prennent un accent écrit (cómo, dónde, cuántos).<br><br><b>mi / tu / su</b> : mi nombre → mis apellidos · tu nombre → tus apellidos · su nombre → sus apellidos. Ils s'accordent avec la chose possédée (singulier ou pluriel), jamais avec le genre : <b>mi madre, mi padre</b>. « su » = son, sa, ses, <b>votre, vos</b> (usted), leur(s).<br><br><b>L'âge</b> : TENER, comme en français « avoir » : <b>Tengo 25 años</b>, jamais « Soy 25 años ». Devant « años », uno devient un : <b>veintiún años, treinta y un años</b>.<br><br><b>de / en</b> : origine = <b>de</b> (Soy de Lyon), habitation = <b>en</b> (Vivo en Lyon).",
  whyLabel:"Pourquoi l'âge avec « tener » et pas « ser » ?",
  whyText:"L'espagnol pense l'âge comme quelque chose que tu <b>possèdes</b> (tener = avoir) — exactement comme le français « j'ai 25 ans ». L'anglais, lui, dit « I am 25 ». Donc aucun piège pour toi : traduis mot à mot « j'ai » → tengo. Autre détail : <b>tú</b> (avec accent) est le pronom « tu » ; <b>tu</b> (sans accent) est le possessif « ton/ta ». L'accent sert uniquement à les distinguer : « ¿Tú tienes tu libro? » = toi, tu as ton livre ?"
 },
 REVIEW: [
  {q:"« Je suis fatiguée (en ce moment). »", opts:["Soy cansada.","Estoy cansada."], correct:1, fb:"Un état du moment → ESTAR. (rappel A1.0)"},
  {q:"Comment se prononce la lettre « j » dans « jamón » ?", opts:["comme le j français","comme un « r » rauque (kh)"], correct:1, fb:"j = son rauque au fond de la gorge : kha-MON. (rappel A1.0)"},
  {q:"Comment dit-on 15 ?", opts:["quince","cinco","quinze"], correct:0, fb:"quince. Rappel : 11 once, 12 doce, 13 trece, 14 catorce, 15 quince. (rappel A1.0)"},
  {q:"« la casa » : l'article est…", opts:["masculin","féminin"], correct:1, fb:"Les noms en -a sont en général féminins : la casa. (rappel A1.0)"},
  {q:"« Tú tienes » : le verbe est…", opts:["ser","estar","tener"], correct:2, fb:"tener : tengo, tienes, tiene… (rappel A1.0)"}
 ],
 CULTURE_NOTE: {icon:"🤝", title:"Culture, expression et fiche récap (A1.1)",
  html:"<b>🤝 Culture — tú ou usted ?</b> En Espagne on tutoie très vite : collègues, voisins, même des inconnus jeunes. Avec un inconnu âgé, un client ou un supérieur, on dit <b>usted</b>. Dans certaines régions d'Amérique latine (Colombie par exemple), <b>usted</b> s'emploie même entre amis proches. En cas de doute : usted, c'est toujours poli. Pour se saluer : la bise (une sur chaque joue) en Espagne entre amis ou entre femmes, poignée de main dans un cadre pro ; une seule bise en Amérique latine. Et tu porteras <b>deux apellidos</b> : celui du père puis celui de la mère.<br><br><b>✍️ Expression écrite — ta présentation (6 phrases)</b> Modèle : « Me llamo Thomas. Mi apellido es Dubois. Tengo treinta años. Soy francés, de París, y vivo en Lyon. Soy ingeniero. Mucho gusto. » Version formelle : « Buenos días. Me llamo Thomas Dubois. Vivo en Lyon. Mi correo electrónico es … ». Vérifie : aucun « yo » inutile · tengo + años · de (origine) / en (habitation) · nationalité sans majuscule.<br><br><b>🗣️ Expression orale — se présenter</b> Dis à voix haute : « ¡Hola! Me llamo …, tengo … años, soy … y vivo en … ¿Y tú? », puis en formel : « Buenos días. Me llamo … Mucho gusto. ¿Cómo se llama usted? »<br><br><b>📄 Fiche récap</b> 4 questions : ¿Cómo te llamas? · ¿Cuántos años tienes? · ¿De dónde eres? · ¿Dónde vives? (+ usted : se llama, tiene, es, vive) · Verbes : llamarse (me llamo…), ser, tener, vivir · mi/tu/su (mis/tus/sus) · tú ≠ tu · veintiún años · la mano est féminin · de ≠ en · pas de pronom sujet inutile."},
 NEXT_PREVIEW:"A1.2 (Familia) : parler de ta famille — padre, madre, hermanos, abuelos, primos —, accorder au féminin (hermano → hermana), le pluriel (los padres, los hermanos) et décrire quelqu'un avec ser et tener.",
 META:{vocabTitle:"Identidad : se présenter, tu ou usted (A1.1)", lectureTitle:"Elena, médecin à Valence", bilanTitle:"Bravo, tu sais te présenter en espagnol !", pronLabel:"Se présenter : ll, ñ, j, z/c et d final", todayLede:"te présenter, dire ton nom, ton âge, ton origine et où tu habites, épeler ton nom, et savoir quand tutoyer ou vouvoyer"},
 DRILLS: [
  {type:"fill", text:"___ llamo Ana. (je)", answers:["me","Me"], why:"yo → me llamo : le pronom me se place avant le verbe."},
  {type:"fill", text:"¿Cómo te ___? (tu)", answers:["llamas"], why:"tú → te llamas : terminaison -as."},
  {type:"fill", text:"Él se ___ Pablo.", answers:["llama"], why:"él / ella / usted → se llama."},
  {type:"fill", text:"Nosotros nos ___ Ana y Luis.", answers:["llamamos"], why:"nosotros → -amos : nos llamamos."},
  {type:"fill", text:"Ellos se ___ Pablo y Marta.", answers:["llaman"], why:"ellos / ustedes → se llaman."},
  {type:"fill", text:"Yo ___ veinte años. (avoir)", answers:["tengo"], why:"L'âge se dit avec TENER : tengo."},
  {type:"fill", text:"¿Cuántos años ___ usted? (avoir)", answers:["tiene"], why:"usted se conjugue comme él/ella : tiene."},
  {type:"fill", text:"___ de Madrid. (je suis)", answers:["Soy","soy"], why:"L'origine = ser + de : soy de Madrid."},
  {type:"fill", text:"¿De dónde ___ tú?", answers:["eres"], why:"tú → eres."},
  {type:"fill", text:"___ en Barcelona. (j'habite)", answers:["Vivo","vivo"], why:"vivir : vivo. Habiter à = vivir en."},
  {type:"fill", text:"Tengo veintiún ___ .", answers:["años","anos"], why:"« años » : le ñ compte (sans lui, « anos » veut dire autre chose !)."},
  {type:"fill", text:"Señora Pérez, ¿cuál es ___ dirección? (votre)", answers:["su"], why:"Avec usted, le possessif est « su »."},
  {type:"choice", q:"Pour demander son nom à un enfant de 10 ans :", opts:["¿Cómo te llamas?","¿Cómo se llama usted?"], correct:0, why:"Enfant → tú : te llamas."},
  {type:"choice", q:"Pour demander son âge à un client âgé :", opts:["¿Cuántos años tienes?","¿Cuántos años tiene usted?"], correct:1, why:"Client âgé → usted : tiene."},
  {type:"choice", q:"Il a 31 ans.", opts:["Tiene treinta y uno años.","Tiene treinta y un años."], correct:1, why:"Devant le nom masculin « años », uno → un."},
  {type:"choice", q:"Je viens de Lyon.", opts:["Soy de Lyon.","Soy en Lyon."], correct:0, why:"Origine = de."},
  {type:"choice", q:"Mes noms de famille :", opts:["mi apellidos","mis apellidos"], correct:1, why:"Plusieurs choses possédées → mis."},
  {type:"choice", q:"Quelle phrase évite le pronom superflu ?", opts:["Yo tengo veinte años.","Tengo veinte años."], correct:1, why:"Le verbe dit déjà « je »."}
 ],
 ANNOTATED: {
  title:"Elena se presenta",
  intro:"Un petit texte pour t'entraîner à lire. Touche chaque mot pour voir sa nature et sa traduction — et repère ce qui manque : aucun « yo » !",
  sentences:[
   {fr:"Je m'appelle Elena et j'ai vingt-huit ans.", tokens:[
    {w:"Me llamo", tag:"verbe pronominal", info:"llamarse · présent · yo", fr:"je m'appelle", tip:"Pas de « yo » : me llamo suffit."},
    {w:"Elena", tag:"nom propre", fr:"Elena"},
    {w:"y", tag:"conjonction", fr:"et"},
    {w:"tengo", tag:"verbe", info:"tener · présent · yo", fr:"j'ai", tip:"L'âge se dit avec tener, comme en français avec « avoir »."},
    {w:"veintiocho", tag:"adjectif", info:"nombre", fr:"vingt-huit"},
    {w:"años", tag:"nom", info:"masc. plur.", fr:"ans", tip:"Le ñ se prononce « gn »."}
   ]},
   {fr:"Je suis médecin et j'habite à Valence.", tokens:[
    {w:"Soy", tag:"verbe", info:"ser · présent · yo", fr:"je suis", tip:"Ser pour la profession : c'est ton identité."},
    {w:"médica", tag:"nom", info:"fém. sing.", fr:"médecin (femme)", tip:"Le métier s'accorde : médico / médica."},
    {w:"y", tag:"conjonction", fr:"et"},
    {w:"vivo", tag:"verbe", info:"vivir · présent · yo", fr:"j'habite"},
    {w:"en", tag:"préposition", fr:"à", tip:"Habitation = en."},
    {w:"Valencia", tag:"nom propre", fr:"Valence"}
   ]},
   {fr:"Je suis née à Séville, mon nom de famille est Gómez.", tokens:[
    {w:"Nací", tag:"verbe", info:"nacer · passé · yo", fr:"je suis née", tip:"Phrase-bloc : le passé viendra plus tard. Retiens « nací en ______ »."},
    {w:"en", tag:"préposition", fr:"à"},
    {w:"Sevilla", tag:"nom propre", fr:"Séville"},
    {w:"mi", tag:"déterminant", info:"possessif · sing.", fr:"mon", tip:"mi : un seul mot pour mon, ma."},
    {w:"apellido", tag:"nom", info:"masc. sing.", fr:"nom de famille"},
    {w:"es", tag:"verbe", info:"ser · présent · él/ella", fr:"est"},
    {w:"Gómez", tag:"nom propre", fr:"Gómez"}
   ]},
   {fr:"Comment vous appelez-vous, monsieur ?", tokens:[
    {w:"¿Cómo", tag:"adverbe", info:"interrogatif", fr:"comment", tip:"Accent écrit : cómo."},
    {w:"se llama", tag:"verbe pronominal", info:"llamarse · présent · usted", fr:"vous appelez-vous", tip:"usted = forme de la 3e personne."},
    {w:"usted", tag:"pronom sujet", info:"vouvoiement", fr:"vous (politesse)"},
    {w:"señor", tag:"nom", info:"masc. sing.", fr:"monsieur"}
   ]}
  ]
 }
};
})();

// A1.2 — Familia : parler de ta famille (tener, accords o→a, pluriel générique, ser pour décrire)
(function(){
var V = [].concat(
 __esB("Le noyau familial", [
  ["la familia","/iaˈfamilja/".replace("ia","la"),"la famille","Singulier en espagnol : « mi familia es grande ». Se prononce fa-MI-lia."],
  ["la madre","/ˈmaðɾe/","la mère","Familier : « mamá ». Le d entre voyelles est doux."],
  ["el padre","/ˈpaðɾe/","le père","Familier : « papá »."],
  ["los padres","/los ˈpaðɾes/","les parents (père et mère)","PIÈGE : « los padres » = LES PARENTS, pas seulement « les pères »."],
  ["el hermano / la hermana","/eɾˈmano · eɾˈmana/","le frère / la sœur","Le h ne se prononce jamais : er-MA-no."],
  ["los hermanos","/los eɾˈmanos/","les frères et sœurs (la fratrie)","Masculin pluriel générique : un frère + une sœur = « hermanos »."],
  ["el hijo / la hija","/el ˈixo · la ˈixa/","le fils / la fille","j = « kh » rauque : I-kho."],
  ["los hijos","/los ˈixos/","les enfants (fils et filles)","Même règle : « los hijos » = les enfants."],
  ["el marido / el esposo","/maˈɾiðo · esˈposo/","le mari / l'époux","« esposo » est un peu plus soutenu."],
  ["la mujer / la esposa","/muˈxeɾ · esˈposa/","la femme / l'épouse","« mujer » = femme ET épouse selon le contexte."]
 ]),
 __esB("La famille élargie", [
  ["el abuelo / la abuela","/aˈβwelo · aˈβwela/","le grand-père / la grand-mère","Familier : « yayo / yaya » (Espagne)."],
  ["el tío / la tía","/ˈtio · ˈtia/","l'oncle / la tante","Le í accentué se prononce en deux syllabes : TÍ-o."],
  ["el primo / la prima","/ˈpɾimo · ˈpɾima/","le cousin / la cousine",""],
  ["el sobrino / la sobrina","/soˈβɾino · soˈβɾina/","le neveu / la nièce",""],
  ["el nieto / la nieta","/ˈnjeto · ˈnjeta/","le petit-fils / la petite-fille",""]
 ]),
 __esB("Décrire un proche : adjectifs", [
  ["joven","/ˈxoβen/","jeune","Invariable au féminin : un chico joven, una chica joven. Pluriel : jóvenes (l'accent écrit apparaît)."],
  ["mayor","/maˈʝoɾ/","âgé(e) ; plus âgé(e)","Aussi « mi hermano mayor » = mon grand frère."],
  ["menor","/meˈnoɾ/","plus jeune","« mi hermana menor » = ma petite sœur."],
  ["alto / alta","/ˈalto · ˈalta/","grand(e) (de taille)",""],
  ["bajo / baja","/ˈbaxo · ˈbaxa/","petit(e) (de taille)","Attention : « pequeño » (petit) ne se dit pas d'une personne adulte pour sa taille."],
  ["simpático / simpática","/simˈpatiko · simˈpatika/","sympathique","Accent sur PÁ : sim-PÁ-ti-ko."],
  ["gracioso / graciosa","/ɣɾaˈθjoso · ɣɾaˈθjosa/","drôle, amusant(e)",""],
  ["cariñoso / cariñosa","/kaɾiˈɲoso · kaɾiˈɲosa/","affectueux(se)",""],
  ["casado / casada","/kaˈsaðo · kaˈsaða/","marié(e)","Avec « estar » : estar casado."],
  ["soltero / soltera","/solˈteɾo · solˈteɾa/","célibataire","Avec « estar » : estar soltero."],
  ["pequeño / pequeña","/peˈkeɲo · peˈkeɲa/","petit(e) (famille, maison…)","« una familia pequeña » ; contraire : « grande »."],
  ["grande","/ˈgɾande/","grand(e) (taille d'une chose, d'une famille)","Invariable au féminin : una familia grande."]
 ]),
 __esB("Bonus : 10 expressions clés de la famille", [
  ["hijo único / hija única","/ˈixo ˈuniko · ˈixa ˈunika/","fils unique / fille unique","« Soy hijo único » = je suis fils unique."],
  ["los abuelos","/los aˈβwelos/","les grands-parents","Masculin pluriel générique : grand-père + grand-mère."],
  ["los parientes","/los ˈpaɾjentes/","la parenté, les proches parents","FAUX-AMI : ce ne sont PAS le père et la mère (= los padres)."],
  ["estar casado / casada","/esˈtaɾ kaˈsaðo/","être marié(e)","Avec estar : l'état civil est un état."],
  ["estar soltero / soltera","/esˈtaɾ solˈteɾo/","être célibataire","Avec estar aussi."],
  ["tener hijos","/teˈneɾ ˈixos/","avoir des enfants","« No tengo hijos » = je n'ai pas d'enfants."],
  ["la familia política","/la faˈmilja poˈlitika/","la belle-famille","« política » = par alliance."],
  ["el suegro / la suegra","/ˈsweɣɾo · ˈsweɣɾa/","le beau-père / la belle-mère","Les parents du conjoint."],
  ["el cuñado / la cuñada","/kuˈɲaðo · kuˈɲaða/","le beau-frère / la belle-sœur","ñ = « gn »."],
  ["te quiero mucho","/te ˈkjeɾo ˈmutʃo/","je t'aime beaucoup","Dit à la famille et aux amis proches."]
 ]),
 __esB("Phrases utiles pour parler de sa famille", [
  ["tener un hermano","/teˈneɾ un eɾˈmano/","avoir un frère","Même construction qu'en français : tengo un hermano."],
  ["¿tienes hermanos?","/ˈtjenes eɾˈmanos/","tu as des frères et sœurs ?","Formel : « ¿tiene usted hermanos? »"],
  ["¿cuántos hermanos tienes?","/ˈkwantos eɾˈmanos ˈtjenes/","combien de frères et sœurs as-tu ?",""],
  ["vivir con","/biˈβiɾ kon/","habiter avec","« Vivo con mis padres » : phrase très naturelle."],
  ["¿cómo es tu madre?","/ˈkomo es tu ˈmaðɾe/","comment est ta mère ?","« ¿Cómo es? » demande la description (ser)."]
 ])
);
V[0].ipa = "/faˈmilja/";
LESSONS_ES[202] = {
 code:"A1.2", level:"A1",
 VOCAB: V,
 MEM_WORDS: __esIdx(V, ["la madre","el padre","los padres","el hermano / la hermana","los hermanos","el abuelo / la abuela","tener un hermano","joven"]),
 MINI_CHECKS: [
  {q:"« Los padres » signifie…", opts:["les pères","les parents (père et mère)","les grands-parents"], correct:1, fb:"Le masculin pluriel regroupe les deux genres : los padres = le père ET la mère."},
  {q:"Féminin de « tío » :", opts:["tíoa","tía","tiá"], correct:1, fb:"o → a : tío → tía, primo → prima, abuelo → abuela."},
  {q:"« J'ai un frère. »", opts:["Soy un hermano.","Tengo un hermano.","Hay un hermano."], correct:1, fb:"Comme en français : avoir → TENER. « Tengo un hermano »."},
  {q:"« Los hermanos » peut désigner…", opts:["seulement des garçons","une sœur et un frère","seulement des sœurs"], correct:1, fb:"Un frère + une sœur = « los hermanos » (masculin générique)."},
  {q:"« Ma mère est grande. »", opts:["Mi madre tiene alta.","Mi madre es alta.","Mi madre está alta."], correct:1, fb:"Décrire la taille d'un proche → SER : « es alta » (et alta s'accorde au féminin)."},
  {q:"« Los parientes » = …", opts:["les parents (père et mère)","la parenté, les proches","les grands-parents"], correct:1, fb:"Faux-ami : les parents (père et mère) = los padres."},
  {q:"« Mi hermano es joven » → au pluriel : « Mis hermanos son… »", opts:["jovens","jóvenes","jovenes"], correct:1, fb:"Pluriel des mots en consonne : +es, et l'accent écrit apparaît pour garder la même syllabe forte : jóvenes."},
  {q:"Pour dire « je suis fils unique »…", opts:["Soy hijo único.","Tengo hijo único.","Soy único hijo."], correct:0, fb:"« hijo único » : soy hijo único / soy hija única."}
 ],
 ROUNDS: [
  __esR("Tengo dos hermanos.","J'ai deux frères et sœurs."),
  __esR("Mi madre es alta.","Ma mère est grande."),
  __esR("Mis padres se llaman Antonio y Carmen.","Mes parents s'appellent Antonio et Carmen."),
  __esR("¿Tienes hermanos?","Tu as des frères et sœurs ?"),
  __esR("Mi hermano es joven y gracioso.","Mon frère est jeune et drôle."),
  __esR("Vivo con mis padres.","J'habite avec mes parents."),
  __esR("Mis hermanos son simpáticos.","Mes frères et sœurs sont sympathiques."),
  __esR("No tengo hijos.","Je n'ai pas d'enfants."),
  __esR("¿Tiene usted hijos?","Avez-vous des enfants ?"),
  __esR("Mi tía es muy cariñosa.","Ma tante est très affectueuse."),
  __esR("Mis abuelos tienen setenta años.","Mes grands-parents ont soixante-dix ans."),
  __esR("Mi hermana menor tiene quince años.","Ma petite sœur a quinze ans."),
  __esR("Mi familia es pequeña.","Ma famille est petite.")
 ],
 QUIZ: [
  {cat:"ecrit", q:"Tengo dos ___. (frère et sœur)", opts:["hermanos","hermanas","hermano"], correct:0, why:"Un frère + une sœur → masculin pluriel générique : hermanos."},
  {cat:"ecrit", q:"Mi tío es alto y mi ___ es baja.", opts:["tía","tío","tiá"], correct:0, why:"Féminin de tío : tía."},
  {cat:"ecrit", q:"Nosotros ___ un perro. (avoir)", opts:["tenemos","tienen","tenéis"], correct:0, why:"nosotros → tenemos."},
  {cat:"ecrit", q:"Vosotros ___ dos primos. (avoir)", opts:["tienen","tenéis","tienes"], correct:1, why:"vosotros → tenéis (se prononce te-NÉISS)."},
  {cat:"ecrit", q:"Mis padres ___ muy simpáticos.", opts:["tienen","son","están"], correct:1, why:"Le caractère d'une personne → SER : son simpáticos."},
  {cat:"ecrit", q:"Mi madre ___ cuarenta y cinco años.", opts:["es","tiene","está"], correct:1, why:"L'âge = tener : tiene cuarenta y cinco años."},
  {cat:"ecrit", q:"Mi hermana ___ casada.", opts:["tiene","está","hay"], correct:1, why:"L'état civil se dit avec estar : está casada."},
  {cat:"ecrit", q:"Quelle phrase est la plus naturelle pour « J'habite avec mes parents » ?", opts:["Vivo con mis padres.","Tengo mis padres."], correct:0, why:"« Tener mis padres » existe mais sonne étrange : on dit « vivo con mis padres » ou « tengo padres y hermanos »."},
  {cat:"ecrit", q:"Mon petit frère est très drôle.", opts:["Mi hermano menor es muy gracioso.","Mi hermano menor tiene muy gracioso.","Mi hermano menor está muy gracioso."], correct:0, why:"hermano menor = frère cadet ; le caractère (gracioso) se dit avec SER. Pas tener, pas estar."},
  {cat:"ecrit", q:"Mes cousines sont jeunes.", opts:["Mis primas son jóvenes.","Mis primas son jovenes.","Mis primos son joven."], correct:0, why:"joven → jóvenes (accent écrit au pluriel)."},
  {cat:"oral", audio:"Tengo un hermano y una hermana.", q:"Écoute : combien de frères et sœurs ?", opts:["Un frère seulement","Un frère et une sœur","Deux sœurs"], correct:1, why:"« un hermano y una hermana » : deux enfants en plus de la personne."},
  {cat:"oral", audio:"Mi madre se llama Carmen y es profesora.", q:"Écoute : que fait la mère ?", opts:["Médecin","Professeure","Étudiante"], correct:1, why:"« es profesora » : professeure."},
  {cat:"oral", audio:"Mis abuelos viven en Sevilla.", q:"Écoute : qui habite à Séville ?", opts:["Les oncles","Les grands-parents","Les parents"], correct:1, why:"abuelos = grands-parents. Ne confonds pas avec « padres »."},
  {cat:"oral", audio:"No tengo hermanos, soy hija única.", q:"Écoute : la personne…", opts:["a une sœur","est fille unique","a deux frères"], correct:1, why:"« hija única » = fille unique ; « no tengo hermanos » le confirme."},
  {cat:"oral", audio:"¿Tiene usted hijos? — Sí, tengo dos hijas.", q:"Écoute : la réponse est…", opts:["Deux filles","Deux fils","Pas d'enfants"], correct:0, why:"hijas = filles (hijos = enfants ou fils). Ici « dos hijas » : deux filles."},
  {cat:"oral", audio:"Mi tío es muy gracioso.", q:"Écoute : comment est l'oncle ?", opts:["Sérieux","Drôle","Grand"], correct:1, why:"gracioso = drôle."},
  {cat:"comprehension", passage:"Mi familia es pequeña. Vivo con mis padres y mi hermana menor. Mi padre se llama Antonio, es médico y es muy cariñoso. Mi madre se llama Carmen, es profesora. Mi hermana tiene 15 años y es estudiante.", q:"La famille est…", opts:["grande","petite","énorme"], correct:1, why:"« Mi familia es pequeña »."},
  {cat:"comprehension", passage:"Mi familia es pequeña. Vivo con mis padres y mi hermana menor. Mi padre se llama Antonio, es médico y es muy cariñoso. Mi madre se llama Carmen, es profesora. Mi hermana tiene 15 años y es estudiante.", q:"Quelle est la profession de la mère ?", opts:["Médecin","Professeure","Étudiante"], correct:1, why:"« Mi madre… es profesora »."},
  {cat:"comprehension", passage:"Mi familia es pequeña. Vivo con mis padres y mi hermana menor. Mi padre se llama Antonio, es médico y es muy cariñoso. Mi madre se llama Carmen, es profesora. Mi hermana tiene 15 años y es estudiante.", q:"Comment est le père ?", opts:["Affectueux","Timide","Jeune"], correct:0, why:"« muy cariñoso » = très affectueux."},
  {cat:"comprehension", passage:"— Hola Marta, ¿tienes hermanos? — Sí, tengo un hermano y una hermana. Mi hermano se llama Pablo, es alto y tiene 20 años. Mi hermana se llama Lucía y es muy simpática.", q:"Quel âge a Pablo ?", opts:["15 ans","20 ans","25 ans"], correct:1, why:"« tiene 20 años » : tener pour l'âge."},
  {cat:"comprehension", passage:"— Hola Marta, ¿tienes hermanos? — Sí, tengo un hermano y una hermana. Mi hermano se llama Pablo, es alto y tiene 20 años. Mi hermana se llama Lucía y es muy simpática.", q:"Comment est Lucía ?", opts:["Grande","Très sympathique","Jeune"], correct:1, why:"« es muy simpática »."},
  {cat:"comprehension", passage:"Trabajadora social: Buenos días, señora. ¿Está usted casada? — Señora: Sí, estoy casada y tengo tres hijos. Mi marido se llama Luis.", q:"Combien d'enfants a la dame ?", opts:["Deux","Trois","Quatre"], correct:1, why:"« tengo tres hijos ». « Mi marido » = son mari."}
 ],
 PRON_VERBS: [
  {en:"Tengo dos hermanos.", fr:"J'ai deux frères et sœurs. (h muette : er-MA-nos)"},
  {en:"Mi madre es muy simpática.", fr:"Ma mère est très sympathique. (sim-PÁ-ti-ka)"},
  {en:"Mis padres viven en Sevilla.", fr:"Mes parents habitent à Séville. (v = b ; ll de « Sevilla » = y)"},
  {en:"Mi hermana menor tiene quince años.", fr:"Ma petite sœur a quinze ans. (kin-the : c devant e = th)"},
  {en:"Mi tío es alto y gracioso.", fr:"Mon oncle est grand et drôle. (gra-THIO-so)"},
  {en:"¿Cuántos hermanos tienes?", fr:"Combien de frères et sœurs as-tu ? (KUÁN-tos)"},
  {en:"Mi abuela es muy cariñosa.", fr:"Ma grand-mère est très affectueuse. (a-BUÉ-la ; ñ = gn)"},
  {en:"Los jóvenes son simpáticos.", fr:"Les jeunes sont sympathiques. (KHÓ-be-ness)"},
  {en:"Mi cuñada es de Granada.", fr:"Ma belle-sœur est de Grenade. (ku-GNA-da)"},
  {en:"Te quiero mucho, mamá.", fr:"Je t'aime beaucoup, maman. (KIÉ-ro)"}
 ],
 READING: [
  "Mi familia es pequeña.",
  "Vivo con mis padres y mi hermana menor.",
  "Mi padre se llama Antonio, es médico y es muy cariñoso.",
  "Mi madre se llama Carmen y es profesora.",
  "Mi hermana tiene quince años y es estudiante.",
  "Mis abuelos son mayores, pero son muy graciosos.",
  "Tengo un tío en Madrid y una tía en Valencia.",
  "Mis primos son jóvenes y simpáticos.",
  "Mi hermano está casado y tiene dos hijos.",
  "Te quiero mucho, familia."
 ],
 GLOSS: [
  {en:"el médico / la médica", fr:"le médecin / la femme médecin"},
  {en:"el estudiante / la estudiante", fr:"l'étudiant(e) : invariable (même mot au masculin et au féminin)"},
  {en:"muy", fr:"très : invariable, il ne s'accorde pas (muy simpática, muy simpáticos)"},
  {en:"mayores", fr:"âgés (pluriel de mayor)"},
  {en:"pero", fr:"mais"},
  {en:"el perro / el gato", fr:"le chien / le chat"}
 ],
 GRAMMAR1: {
  heading:"Conjugaison : TENER pour la famille, SER pour la décrire",
  lede:"Pour dire quels proches tu as, l'espagnol fait comme le français : « j'ai un frère » → tengo un hermano. Et pour décrire ce proche (grand, drôle, sympathique), tu retrouves SER, déjà vu.",
  conj:[
   ["yo →","tengo","Tengo un hermano."],
   ["tú →","tienes","¿Tienes hermanos?"],
   ["él, ella, usted →","tiene","Mi madre tiene 45 años. · ¿Tiene usted hijos?"],
   ["nosotros →","tenemos","Tenemos una familia grande."],
   ["vosotros →","tenéis","¿Tenéis primos?"],
   ["ellos, ustedes →","tienen","Mis abuelos tienen tres hijos."]
  ],
  ruleHtml:"📖 <b>TENER</b> est irrégulier : <b>yo tengo</b> (un -g- apparaît), puis <b>tienes, tiene, tienen</b> (le e devient <b>ie</b> quand l'accent tombe sur le radical), mais <b>tenemos, tenéis</b> gardent le e. Il sert à trois choses dans cette leçon : <b>les liens</b> (tengo dos hermanos), <b>l'âge</b> (tiene 45 años), <b>avoir des enfants</b> (tengo hijos / no tengo hijos). Pour <b>décrire</b> un proche : <b>SER + adjectif accordé</b> → <b>Mi madre es alta y simpática. Mi hermano es joven y gracioso. Mis padres son cariñosos.</b> Le « modèle en 3 temps » pour présenter quelqu'un : <b>Se llama Pablo</b> (llamarse) · <b>Tiene 20 años</b> (tener) · <b>Es alto y simpático</b> (ser).",
  dialogueLede:"Deux amies bavardent (tutoiement) :",
  dialogue:[
   {who:"them", en:"Hola, Marta. ¿Tienes hermanos?", fr:"Salut, Marta. Tu as des frères et sœurs ?"},
   {who:"you", en:"Sí, tengo un hermano y una hermana. Mi hermano se llama Pablo, es alto y tiene veinte años.", fr:"Oui, j'ai un frère et une sœur. Mon frère s'appelle Pablo, il est grand et il a vingt ans."},
   {who:"them", en:"¿Y tu hermana?", fr:"Et ta sœur ?"},
   {who:"you", en:"Se llama Lucía y es muy simpática.", fr:"Elle s'appelle Lucía et elle est très sympathique."}
  ],
  whyLabel:"Pourquoi « tener » pour les liens… et « ser » pour la description ?",
  whyText:"Pense à la <b>possession</b> : tes frères, ce sont des personnes que tu <b>as</b> dans ta vie → tener, comme en français. La <b>description</b>, elle, dit CE QU'EST la personne (grande, drôle…) : c'est son identité → ser. Cette distinction t'évite deux erreurs fréquentes : « soy un hermano » (qui voudrait dire « je suis un frère ») et « tiene alto » (au lieu de « es alto »). Test rapide : peux-tu traduire par « avoir » en français ? tener. Par « être » ? ser."
 },
 GRAMMAR2: {
  heading:"Masculin / féminin, pluriel et le « masculin générique »",
  dialogueLede:"À la réception d'un centre médical (vouvoiement) :",
  dialogue:[
   {who:"them", en:"¿Está usted casada, señora?", fr:"Êtes-vous mariée, madame ?"},
   {who:"you", en:"Sí, estoy casada y tengo tres hijos.", fr:"Oui, je suis mariée et j'ai trois enfants."},
   {who:"them", en:"¿Cuántos años tienen sus hijos?", fr:"Quel âge ont vos enfants ?"},
   {who:"you", en:"Tienen cinco, ocho y once años.", fr:"Ils ont cinq, huit et onze ans."}
  ],
  ruleHtml:"💭 <b>1. Masculin → féminin</b> : presque tous les mots de famille passent de <b>-o</b> à <b>-a</b> : hermano → <b>hermana</b>, tío → <b>tía</b>, primo → <b>prima</b>, abuelo → <b>abuela</b>, hijo → <b>hija</b>, sobrino → <b>sobrina</b>. Les adjectifs font pareil (alto → alta, simpático → simpática). Ceux en <b>-e</b> ou en consonne ne changent pas (joven, mayor, grande, estudiante).<br><br><b>2. Pluriel</b> : voyelle + <b>-s</b> (hermano → hermanos), consonne + <b>-es</b> (mayor → mayores, joven → <b>jóvenes</b>, avec l'accent écrit qui apparaît).<br><br><b>3. Le masculin générique</b> : au pluriel, le masculin regroupe les deux genres : <b>los padres</b> = père + mère, <b>los hermanos</b> = frères et sœurs, <b>los hijos</b> = enfants, <b>los abuelos</b> = grands-parents, <b>los tíos</b> = oncle(s) et tante(s). Pour préciser « seulement des filles » : las hermanas, las hijas.<br><br><b>4. Piège de traduction</b> : « J'ai mes parents et mes frères » se comprend en espagnol (« Tengo mis padres y mis hermanos ») mais sonne peu naturel. On dit plutôt <b>Tengo padres y hermanos</b> ou <b>Vivo con mis padres y mis hermanos</b>.",
  whyLabel:"Pourquoi ce masculin « pluriel pour tous » ?",
  whyText:"En espagnol (comme en français : « les étudiants » pour un groupe mixte), le masculin pluriel est la forme <b>neutre</b> d'un groupe mixte. Un seul garçon dans un groupe de dix filles suffit pour dire « los hermanos ». Tu retrouves la même logique dans « los padres », « los abuelos », « los tíos ». Conséquence pratique : ne traduis jamais « los padres » par « les pères » et ne confonds pas avec « los parientes » (la parenté). Et quand tu veux insister sur les filles, tu emploies le féminin : <b>mis hermanas</b>."
 },
 REVIEW: [
  {q:"Pour demander son nom à une personne âgée que tu ne connais pas :", opts:["¿Cómo te llamas?","¿Cómo se llama usted?"], correct:1, fb:"Inconnu âgé → usted : se llama. (rappel A1.1)"},
  {q:"« J'habite à Lyon. »", opts:["Vivo de Lyon.","Vivo en Lyon."], correct:1, fb:"Habitation = en ; origine = de. (rappel A1.1)"},
  {q:"« Elle a 31 ans. »", opts:["Tiene treinta y un años.","Tiene treinta y uno años."], correct:0, fb:"uno → un devant « años ». (rappel A1.1)"},
  {q:"« Mes noms de famille » :", opts:["mi apellidos","mis apellidos"], correct:1, fb:"Possessif accordé avec la chose possédée. (rappel A1.1)"},
  {q:"Pourquoi dit-on « Tengo veinte años » sans « yo » ?", opts:["Le verbe dit déjà « je »","Parce que « yo » est impoli"], correct:0, fb:"La terminaison -o suffit. (rappel A1.1)"}
 ],
 CULTURE_NOTE: {icon:"👨‍👩‍👧", title:"Culture, expression et fiche récap (A1.2)",
  html:"<b>👨‍👩‍👧 Culture</b> En Espagne et en Amérique latine, la famille est très présente : déjeuner chez les grands-parents le dimanche, contact avec <b>tíos</b> et <b>primos</b>. On dit « mamá » et « papá » ; les grands-parents sont <b>abuelo/abuela</b> ou <b>yayo/yaya</b> (Espagne). <b>Te quiero</b> se dit facilement à sa famille et à ses amis ; « te amo » est réservé à l'amour romantique. Au vouvoiement, on demande poliment : « ¿Tiene usted hijos? ».<br><br><b>✍️ Expression écrite — présenter sa famille (5 lignes)</b> Modèle : « Mi familia es grande. Tengo un hermano y una hermana. Mis padres se llaman … Mi hermano es alto y mi madre es muy simpática. » Vérifie : tener pour les liens et l'âge · ser + adjectif accordé · los padres / los hermanos (masculin générique).<br><br><b>🗣️ Expression orale — présenter un proche en 2 phrases</b> « Mi madre se llama …, es baja y muy simpática. » Puis en formel : « Mi esposa se llama …, tiene … años. »<br><br><b>📄 Fiche récap</b> TENER : tengo, tienes, tiene, tenemos, tenéis, tienen · o → a (hermano → hermana) · pluriel : +s / +es (jóvenes) · los padres = père + mère · los hermanos = frères et sœurs · ser pour décrire (es alta, son simpáticos), estar pour casado / soltero · los parientes ≠ les parents."},
 NEXT_PREVIEW:"A1.3 (Amigos y relaciones sociales) : parler de tes amis, dire ce que tu aimes avec « gustar » (me gusta, me gustan), conjuguer les premiers verbes en -AR (hablar, escuchar, bailar, viajar) et dire à quelle fréquence tu fais les choses (siempre, a veces, nunca).",
 META:{vocabTitle:"Familia : parler de ses proches (A1.2)", lectureTitle:"La familia de Antonio y Carmen", bilanTitle:"Bravo, tu sais présenter ta famille en espagnol !", pronLabel:"Familia : h muette, j, ñ, z/c et diphtongues", todayLede:"nommer les membres de ta famille, dire combien de frères et sœurs tu as, accorder au féminin et au pluriel, comprendre pourquoi « los padres » = les parents, et décrire un proche avec ser et tener"},
 DRILLS: [
  {type:"fill", text:"Yo ___ un hermano. (avoir)", answers:["tengo"], why:"yo → tengo (le -g- est irrégulier)."},
  {type:"fill", text:"¿___ hermanos? (tú, avoir)", answers:["Tienes","tienes"], why:"tú → tienes (e → ie)."},
  {type:"fill", text:"Mi madre ___ cuarenta años. (avoir)", answers:["tiene"], why:"L'âge : tener → tiene."},
  {type:"fill", text:"Nosotros ___ una familia grande. (avoir)", answers:["tenemos"], why:"nosotros → tenemos (le e reste)."},
  {type:"fill", text:"Vosotros ___ dos primos. (avoir)", answers:["tenéis"], why:"vosotros → tenéis."},
  {type:"fill", text:"Mis abuelos ___ tres hijos. (avoir)", answers:["tienen"], why:"ellos → tienen."},
  {type:"fill", text:"Mi padre ___ alto. (être)", answers:["es"], why:"Description → SER : es alto."},
  {type:"fill", text:"Mis hermanos ___ simpáticos. (être)", answers:["son"], why:"ellos → son."},
  {type:"fill", text:"Mi tío es alto y mi ___ es baja. (tante)", answers:["tía"], why:"tío → tía."},
  {type:"fill", text:"Mi hermano mayor y mi hermana ___ son jóvenes. (la plus jeune)", answers:["menor"], why:"« menor » = plus jeune."},
  {type:"fill", text:"Mis padres y mis ___ viven en Francia. (frères et sœurs)", answers:["hermanos"], why:"Masculin pluriel générique."},
  {type:"fill", text:"No tengo ___. (enfants)", answers:["hijos"], why:"« hijos » : les enfants."},
  {type:"choice", q:"« Los padres » =", opts:["les pères","les parents"], correct:1, why:"Masculin pluriel générique : père + mère."},
  {type:"choice", q:"Un frère + une sœur :", opts:["hermanas","hermanos"], correct:1, why:"Groupe mixte → masculin pluriel."},
  {type:"choice", q:"Pluriel de « joven » :", opts:["jovenes","jóvenes"], correct:1, why:"+es et accent écrit pour garder la syllabe forte."},
  {type:"choice", q:"Mon père est grand :", opts:["Mi padre tiene alto.","Mi padre es alto."], correct:1, why:"Description = ser."},
  {type:"choice", q:"Ma sœur est mariée :", opts:["Mi hermana es casada.","Mi hermana está casada."], correct:1, why:"État civil = estar."},
  {type:"choice", q:"Les parents (au sens large : cousins, oncles…) :", opts:["los padres","los parientes"], correct:1, why:"Faux-ami : parientes = parenté ; los padres = père et mère."}
 ],
 ANNOTATED: {
  title:"La familia de Antonio y Carmen",
  intro:"Un texte sur une petite famille. Touche chaque mot pour voir sa nature et sa traduction. Repère les verbes TENER et SER, et les accords au féminin.",
  sentences:[
   {fr:"Ma famille est petite.", tokens:[
    {w:"Mi", tag:"déterminant", info:"possessif · sing.", fr:"ma", tip:"mi : même mot pour mon et ma."},
    {w:"familia", tag:"nom", info:"fém. sing.", fr:"famille"},
    {w:"es", tag:"verbe", info:"ser · présent · ella", fr:"est", tip:"SER : une description."},
    {w:"pequeña", tag:"adjectif", info:"fém. sing.", fr:"petite", tip:"Accord au féminin : pequeño → pequeña."}
   ]},
   {fr:"J'habite avec mes parents et ma sœur cadette.", tokens:[
    {w:"Vivo", tag:"verbe", info:"vivir · présent · yo", fr:"j'habite"},
    {w:"con", tag:"préposition", fr:"avec"},
    {w:"mis", tag:"déterminant", info:"possessif · plur.", fr:"mes"},
    {w:"padres", tag:"nom", info:"masc. plur.", fr:"parents", tip:"los padres = père et mère."},
    {w:"y", tag:"conjonction", fr:"et"},
    {w:"mi", tag:"déterminant", info:"possessif · sing.", fr:"ma"},
    {w:"hermana", tag:"nom", info:"fém. sing.", fr:"sœur"},
    {w:"menor", tag:"adjectif", info:"invariable", fr:"cadette", tip:"menor ne change pas au féminin."}
   ]},
   {fr:"Mon père s'appelle Antonio, il est médecin et très affectueux.", tokens:[
    {w:"Mi", tag:"déterminant", fr:"mon"},
    {w:"padre", tag:"nom", info:"masc. sing.", fr:"père"},
    {w:"se llama", tag:"verbe pronominal", info:"llamarse · présent · él", fr:"s'appelle"},
    {w:"Antonio", tag:"nom propre", fr:"Antonio"},
    {w:"es", tag:"verbe", info:"ser · présent · él", fr:"est"},
    {w:"médico", tag:"nom", info:"masc. sing.", fr:"médecin"},
    {w:"y", tag:"conjonction", fr:"et"},
    {w:"es", tag:"verbe", info:"ser · présent · él", fr:"il est"},
    {w:"muy", tag:"adverbe", fr:"très"},
    {w:"cariñoso", tag:"adjectif", info:"masc. sing.", fr:"affectueux"}
   ]},
   {fr:"Ma sœur a quinze ans et elle est étudiante.", tokens:[
    {w:"Mi", tag:"déterminant", fr:"ma"},
    {w:"hermana", tag:"nom", info:"fém. sing.", fr:"sœur"},
    {w:"tiene", tag:"verbe", info:"tener · présent · ella", fr:"a", tip:"L'âge : tener."},
    {w:"quince", tag:"adjectif", info:"nombre", fr:"quinze"},
    {w:"años", tag:"nom", info:"masc. plur.", fr:"ans"},
    {w:"y", tag:"conjonction", fr:"et"},
    {w:"es", tag:"verbe", info:"ser · présent · ella", fr:"est"},
    {w:"estudiante", tag:"nom", info:"invariable", fr:"étudiante", tip:"estudiante : même forme au masculin et au féminin."}
   ]}
  ]
 }
};
})();

// A1.3 — Amigos y relaciones sociales : verbes en -AR, fréquence, gustar, formel / informel
(function(){
var V = [].concat(
 __esB("Le cercle amical", [
  ["el amigo / la amiga","/aˈmiɣo · aˈmiɣa/","l'ami / l'amie","Accent sur MI : a-MI-go."],
  ["el mejor amigo / la mejor amiga","/el meˈxoɾ aˈmiɣo/","le meilleur ami / la meilleure amie","« mejor » ne change pas au féminin. j = « kh » rauque."],
  ["el conocido / la conocida","/koŋoˈθiðo/","la connaissance","Quelqu'un que tu connais sans être ami proche. Faux-ami de « connu »."],
  ["el compañero / la compañera","/kompaˈɲeɾo/","le camarade, le collègue","Compañero de clase / de trabajo."],
  ["el vecino / la vecina","/beˈθino · beˈθina/","le voisin / la voisine","v = b ; c devant i = « th »."],
  ["la pandilla","/panˈdiʝa/","la bande d'amis","Aussi : « el grupo de amigos »."],
  ["la relación","/relaˈθjon/","la relation",""],
  ["la confianza","/konˈfjanθa/","la confiance","« tener confianza » = être à l'aise, avoir confiance."]
 ]),
 __esB("Décrire ses amis", [
  ["simpático / simpática","/simˈpatiko/","sympathique","Rappel A1.2."],
  ["antipático / antipática","/antiˈpatiko/","antipathique","Le contraire de simpático."],
  ["agradable","/aɣɾaˈðaβle/","agréable","Invariable au féminin : una persona agradable."],
  ["divertido / divertida","/diβeɾˈtiðo/","amusant(e), drôle","« ¡Qué divertido! » = comme c'est amusant !"],
  ["aburrido / aburrida","/aβuˈrriðo/","ennuyeux(se)","rr = r roulé fort."],
  ["inteligente","/inteliˈxente/","intelligent(e)","Invariable au féminin."],
  ["tímido / tímida","/ˈtimiðo/","timide","Accent sur TÍ : TÍ-mi-do."],
  ["generoso / generosa","/xeneˈɾoso/","généreux(se)","g devant e = « kh » rauque."],
  ["fiel","/fjel/","fidèle, loyal(e)","Une seule syllabe, invariable."],
  ["alegre","/aˈleɣɾe/","joyeux(se), gai(e)","« con mis amigos soy muy alegre »."]
 ]),
 __esB("Saluer : informel et formel", [
  ["hola, ¿qué tal?","/ˈola ke tal/","salut, ça va ?","Informel. Réponse : « Bien, ¿y tú? »"],
  ["¿qué pasa?","/ke ˈpasa/","quoi de neuf ?","Très familier, entre amis."],
  ["buenos días / buenas tardes / buenas noches","/ˈbwenos ˈðias · ˈbwenas ˈtaɾðes · ˈbwenas ˈnotʃes/","bonjour / bon après-midi / bonsoir","Poli : convient partout, surtout au vouvoiement. « Buenas noches » = aussi bonne nuit."],
  ["¿cómo está usted?","/ˈkomo esˈta usˈteð/","comment allez-vous ?","Formel. Informel : « ¿Cómo estás? »"],
  ["mucho gusto en conocerte","/ˈmutʃo ˈɣusto en konoˈθeɾte/","ravi de faire ta connaissance","Informel (tutoiement)."],
  ["encantado de conocerle","/enkanˈtaðo ðe konoˈθeɾle/","enchanté de faire votre connaissance","Formel (vouvoiement). Une femme dit « encantada »."],
  ["hasta luego / hasta mañana","/ˈasta ˈlweɣo · ˈasta maˈɲana/","à tout à l'heure / à demain","« adiós » = au revoir (plus définitif)."]
 ]),
 __esB("Les goûts et les activités", [
  ["gustar","/gusˈtaɾ/","plaire","« Me gusta » = ça me plaît = j'aime. Voir la grammaire."],
  ["me gusta mucho","/me ˈɣusta ˈmutʃo/","j'aime beaucoup","« mucho » reste invariable."],
  ["no me gusta","/no me ˈɣusta/","je n'aime pas","no devant le pronom."],
  ["a mí también","/a mi tamˈbjen/","moi aussi","Pour répondre à « me gusta » : « A mí también ». Contraire : « A mí no »."],
  ["la música","/la ˈmusika/","la musique",""],
  ["el cine","/el ˈθine/","le cinéma","c devant i = « th »."],
  ["el fútbol","/el ˈfutβol/","le football","Accent sur FÚT : FÚT-bol."],
  ["los libros","/los ˈliβɾos/","les livres",""],
  ["el verano","/el beˈɾano/","l'été",""],
  ["el fin de semana","/el fin ðe seˈmana/","le week-end","« los fines de semana » = les week-ends / chaque week-end."],
  ["juntos / juntas","/ˈxuntos/","ensemble","S'accorde : juntos (masc. ou mixte), juntas (féminin)."]
 ]),
 __esB("Les premiers verbes en -AR", [
  ["hablar","/aˈβlaɾ/","parler","Modèle de tous les verbes réguliers en -AR. h muet."],
  ["escuchar","/eskuˈtʃaɾ/","écouter","« escuchar música »."],
  ["bailar","/baiˈlaɾ/","danser","« bailar salsa »."],
  ["viajar","/biaˈxaɾ/","voyager","j = « kh » rauque : bia-KHAR."],
  ["pasear","/paseˈaɾ/","se promener","« pasear por la ciudad » = se promener en ville."],
  ["cantar","/kanˈtaɾ/","chanter",""],
  ["estudiar","/estuˈðjaɾ/","étudier",""],
  ["cocinar","/koθiˈnaɾ/","cuisiner","c devant i = « th »."],
  ["trabajar","/tɾaβaˈxaɾ/","travailler",""]
 ]),
 __esB("La fréquence", [
  ["siempre","/ˈsjempɾe/","toujours",""],
  ["a menudo","/a meˈnuðo/","souvent",""],
  ["a veces","/a ˈβeθes/","parfois","z/c = « th »."],
  ["casi nunca","/ˈkasi ˈnuŋka/","presque jamais",""],
  ["nunca","/ˈnuŋka/","jamais","Avant le verbe : sans « no ». Après le verbe : avec « no »."],
  ["conmigo / contigo","/komˈmiɣo · komˈtiɣo/","avec moi / avec toi","« con + mí/ti » devient un mot : conmigo, contigo."]
 ]),
 __esB("Bonus : 10 expressions des relations sociales", [
  ["llevarse bien con alguien","/ʝeˈβaɾse ˈβjen kon ˈalɣjen/","s'entendre bien avec quelqu'un","« Me llevo bien con mis vecinos »."],
  ["hacer nuevos amigos","/aˈθeɾ ˈnweβos aˈmiɣos/","se faire de nouveaux amis","À retenir en bloc."],
  ["pasarlo bien","/paˈsaɾlo ˈβjen/","passer un bon moment, s'amuser","« ¡Que lo pases bien! » = amuse-toi bien !"],
  ["estar de buen humor","/esˈtaɾ de bwen uˈmoɾ/","être de bonne humeur","h muet. Contraire : estar de mal humor."],
  ["estar harto / harta","/esˈtaɾ ˈaɾto/","en avoir assez, en avoir marre","h muet : AR-to."],
  ["caer bien / caer mal","/kaˈeɾ ˈβjen · kaˈeɾ mal/","plaire / déplaire (à quelqu'un)","« Me cae bien » = il/elle me plaît, je l'aime bien (en parlant d'une personne)."],
  ["tener confianza en","/teˈneɾ konˈfjanθa en/","avoir confiance en","« Tengo confianza en ti »."],
  ["salir de fiesta","/saˈliɾ de ˈfjesta/","sortir faire la fête","Phrase-bloc."],
  ["estar en contacto","/esˈtaɾ en konˈtakto/","rester en contact","« Estamos en contacto »."],
  ["un abrazo fuerte","/un aˈβɾaθo ˈfweɾte/","une grosse accolade","Formule de fin de message entre amis."]
 ])
);
LESSONS_ES[203] = {
 code:"A1.3", level:"A1",
 VOCAB: V,
 MEM_WORDS: __esIdx(V, ["el amigo / la amiga","el conocido / la conocida","el vecino / la vecina","gustar","hablar","viajar","siempre","nunca"]),
 MINI_CHECKS: [
  {q:"« J'aime le café. »", opts:["Me gusta el café.","Me gustan el café.","Gusto el café."], correct:0, fb:"Ce qui plaît (le café) est le sujet, au singulier → gusta. Littéralement : « le café me plaît »."},
  {q:"« J'aime les chiens. »", opts:["Me gusta los perros.","Me gustan los perros.","Me gusto los perros."], correct:1, fb:"Plusieurs choses qui plaisent → gustan (pluriel)."},
  {q:"« Tu aimes voyager ? »", opts:["¿Te gusta viajar?","¿Te gustan viajar?","¿Tú gustas viajar?"], correct:0, fb:"Après gustar, un verbe à l'infinitif → toujours gusta (singulier)."},
  {q:"« Je n'aime pas le football. »", opts:["Me no gusta el fútbol.","No me gusta el fútbol.","No gusto el fútbol."], correct:1, fb:"no se place AVANT le petit pronom : « No me gusta ». "},
  {q:"« Nous parlons » (hablar) :", opts:["hablamos","hablan","hablemos"], correct:0, fb:"nosotros → -amos : hablamos."},
  {q:"« Una conocida » est…", opts:["une amie proche","une connaissance","une voisine"], correct:1, fb:"conocido/a = quelqu'un que tu connais sans être ami proche."},
  {q:"« Je ne voyage jamais » — quelle forme est correcte ?", opts:["Nunca viajo.","Nunca no viajo.","Viajo siempre nunca."], correct:0, fb:"« nunca » devant le verbe n'a pas besoin de « no » : Nunca viajo. (Après le verbe : No viajo nunca.)"},
  {q:"À un monsieur que tu ne connais pas : « Enchanté de faire votre connaissance »", opts:["Mucho gusto en conocerte.","Encantado de conocerle."], correct:1, fb:"Formel (usted) : conocerle. Informel (tú) : conocerte."}
 ],
 ROUNDS: [
  __esR("Me gusta el café.","J'aime le café."),
  __esR("Me gustan los perros.","J'aime les chiens."),
  __esR("¿Te gusta viajar?","Tu aimes voyager ?"),
  __esR("No me gusta el fútbol.","Je n'aime pas le football."),
  __esR("Hablo con mis amigos.","Je parle avec mes amis."),
  __esR("Siempre escuchamos música.","Nous écoutons toujours de la musique."),
  __esR("A mí también me gusta bailar.","Moi aussi, j'aime danser."),
  __esR("Mi mejor amigo es muy divertido.","Mon meilleur ami est très drôle."),
  __esR("Nos gusta pasear por la ciudad.","Nous aimons nous promener en ville."),
  __esR("Nunca hablo de fútbol.","Je ne parle jamais de football."),
  __esR("¿Le gusta viajar, señor?","Aimez-vous voyager, monsieur ?"),
  __esR("Encantado de conocerle.","Enchanté de faire votre connaissance."),
  __esR("A veces bailamos juntos.","Parfois nous dansons ensemble.")
 ],
 QUIZ: [
  {cat:"ecrit", q:"Yo ___ con mis amigos. (hablar)", opts:["hablo","hablas","habla"], correct:0, why:"yo → -o : hablo."},
  {cat:"ecrit", q:"Mi amiga ___ mucho. (bailar)", opts:["baila","bailas","bailan"], correct:0, why:"ella → -a : baila."},
  {cat:"ecrit", q:"Vosotros ___ música. (escuchar)", opts:["escucháis","escuchamos","escuchan"], correct:0, why:"vosotros → -áis : escucháis."},
  {cat:"ecrit", q:"Me ___ los libros interesantes.", opts:["gusta","gustan"], correct:1, why:"« los libros » est pluriel → gustan. Et l'adjectif s'accorde : interesantes."},
  {cat:"ecrit", q:"A Pablo ___ gusta la música.", opts:["me","te","le"], correct:2, why:"A él / A Pablo → le gusta."},
  {cat:"ecrit", q:"A nosotros ___ gusta viajar.", opts:["nos","les","os"], correct:0, why:"nosotros → nos."},
  {cat:"ecrit", q:"Ellos ___ en Madrid. (viajar : ils voyagent)", opts:["viajan","viaja","viajamos"], correct:0, why:"ellos → -an : viajan."},
  {cat:"ecrit", q:"Je ne danse presque jamais.", opts:["Casi nunca bailo.","Casi siempre bailo.","Bailo casi no."], correct:0, why:"casi nunca = presque jamais."},
  {cat:"ecrit", q:"Quelle phrase est correcte ?", opts:["Me gusta viajar y bailar.","Me gustan viajar y bailar."], correct:0, why:"Des verbes à l'infinitif → toujours gusta (singulier), même s'il y en a plusieurs."},
  {cat:"ecrit", q:"« Ma voisine est agréable » :", opts:["Mi vecina es agradable.","Mi vecina es agradabla."], correct:0, why:"agradable finit en -e : invariable."},
  {cat:"ecrit", q:"Pour un inconnu âgé, tu demandes : « Aimez-vous voyager ? »", opts:["¿Te gusta viajar?","¿Le gusta viajar?"], correct:1, why:"usted → le gusta."},
  {cat:"oral", audio:"Me gusta mucho la música.", q:"Écoute : qu'est-ce que la personne aime ?", opts:["Le cinéma","La musique","Les livres"], correct:1, why:"« la música »."},
  {cat:"oral", audio:"Nunca hablo de fútbol.", q:"Écoute : la personne parle de football…", opts:["toujours","parfois","jamais"], correct:2, why:"« nunca » = jamais."},
  {cat:"oral", audio:"Siempre escuchamos música los fines de semana.", q:"Écoute : quand écoutent-ils de la musique ?", opts:["Le week-end, toujours","Le soir, parfois","Jamais"], correct:0, why:"siempre = toujours ; los fines de semana = le week-end."},
  {cat:"oral", audio:"Mi mejor amigo se llama Javier y es muy divertido.", q:"Écoute : comment est Javier ?", opts:["Timide","Drôle","Antipathique"], correct:1, why:"divertido = drôle, amusant."},
  {cat:"oral", audio:"Buenas tardes, mucho gusto en conocerle.", q:"Écoute : le registre est…", opts:["informel","formel"], correct:1, why:"« conocerle » = vouvoiement (usted)."},
  {cat:"oral", audio:"A mí no me gusta bailar, pero me gusta cantar.", q:"Écoute : qu'est-ce que la personne aime ?", opts:["Danser","Chanter","Les deux"], correct:1, why:"« no me gusta bailar » = elle n'aime pas danser ; « me gusta cantar » = elle aime chanter."},
  {cat:"comprehension", passage:"Hola, me llamo Carlos. Tengo muchos amigos en Madrid. Mi mejor amigo se llama Javier. Es un chico muy simpático, inteligente y divertido. Siempre hablamos de fútbol y nos gusta viajar juntos en verano. Con mi familia soy un poco tímido, pero con mis amigos soy muy alegre.", q:"Comment s'appelle le meilleur ami de Carlos ?", opts:["Pablo","Javier","Daniel"], correct:1, why:"« Mi mejor amigo se llama Javier »."},
  {cat:"comprehension", passage:"Hola, me llamo Carlos. Tengo muchos amigos en Madrid. Mi mejor amigo se llama Javier. Es un chico muy simpático, inteligente y divertido. Siempre hablamos de fútbol y nos gusta viajar juntos en verano. Con mi familia soy un poco tímido, pero con mis amigos soy muy alegre.", q:"Comment est Carlos avec sa famille ?", opts:["Joyeux","Un peu timide","Antipathique"], correct:1, why:"« Con mi familia soy un poco tímido ». Avec ses amis : « muy alegre »."},
  {cat:"comprehension", passage:"Hola, me llamo Carlos. Tengo muchos amigos en Madrid. Mi mejor amigo se llama Javier. Es un chico muy simpático, inteligente y divertido. Siempre hablamos de fútbol y nos gusta viajar juntos en verano. Con mi familia soy un poco tímido, pero con mis amigos soy muy alegre.", q:"Que font Carlos et Javier en été ?", opts:["Ils voyagent ensemble","Ils étudient","Ils travaillent"], correct:0, why:"« nos gusta viajar juntos en verano »."},
  {cat:"comprehension", passage:"Querida Sofía: Te escribo desde Barcelona. Aquí tengo nuevos amigos. Mi vecina se llama Laura, es muy agradable y simpática. Nos gusta pasear por la ciudad y hablar por las tardes. ¿Y tú? ¿Cómo están tus amigos? Un abrazo, Marta.", q:"Qui est Laura ?", opts:["La sœur de Marta","La voisine de Marta","La professeure de Marta"], correct:1, why:"« Mi vecina se llama Laura »."},
  {cat:"comprehension", passage:"Querida Sofía: Te escribo desde Barcelona. Aquí tengo nuevos amigos. Mi vecina se llama Laura, es muy agradable y simpática. Nos gusta pasear por la ciudad y hablar por las tardes. ¿Y tú? ¿Cómo están tus amigos? Un abrazo, Marta.", q:"Qu'aiment faire Marta et Laura ?", opts:["Se promener en ville et parler l'après-midi","Danser et chanter","Voyager et cuisiner"], correct:0, why:"« pasear por la ciudad y hablar por las tardes »."},
  {cat:"comprehension", passage:"Querida Sofía: Te escribo desde Barcelona. Aquí tengo nuevos amigos. Mi vecina se llama Laura, es muy agradable y simpática. Nos gusta pasear por la ciudad y hablar por las tardes. ¿Y tú? ¿Cómo están tus amigos? Un abrazo, Marta.", q:"« Un abrazo » à la fin du message est…", opts:["une formule amicale","une insulte","une adresse"], correct:0, why:"Formule de fin entre amis : « un abrazo » (une accolade)."}
 ],
 PRON_VERBS: [
  {en:"Hablo con mi mejor amigo.", fr:"Je parle avec mon meilleur ami. (h muet : A-blo ; j = « kh »)"},
  {en:"Me gustan los libros interesantes.", fr:"J'aime les livres intéressants. (GOUS-tan)"},
  {en:"¿Te gusta viajar en verano?", fr:"Tu aimes voyager en été ? (bia-KHAR ; v = b)"},
  {en:"Siempre escuchamos música juntos.", fr:"Nous écoutons toujours de la musique ensemble. (KHOUN-toss)"},
  {en:"Mi vecina es muy agradable.", fr:"Ma voisine est très agréable. (be-THI-na)"},
  {en:"Nunca bailo, soy muy tímido.", fr:"Je ne danse jamais, je suis très timide. (NOUN-ka)"},
  {en:"Nos gusta pasear por la ciudad.", fr:"Nous aimons nous promener en ville. (thiou-DAD)"},
  {en:"Encantado de conocerle, señor.", fr:"Enchanté de faire votre connaissance, monsieur. (ko-no-THER-le)"},
  {en:"A veces cocino con mi amiga.", fr:"Parfois je cuisine avec mon amie. (a BÉ-thes)"},
  {en:"Un abrazo fuerte.", fr:"Une grosse accolade. (a-BRA-tho FOUER-te)"}
 ],
 READING: [
  "Me llamo Carlos y tengo muchos amigos en Madrid.",
  "Mi mejor amigo se llama Javier.",
  "Es un chico muy simpático, inteligente y divertido.",
  "Siempre hablamos de fútbol los fines de semana.",
  "Nos gusta viajar juntos en verano.",
  "Con mi familia soy un poco tímido, pero con mis amigos soy muy alegre.",
  "Mi vecina Laura es muy agradable y a mí me cae muy bien.",
  "A veces escuchamos música y bailamos en casa.",
  "No me gusta cocinar, pero me gusta comer con mis amigos.",
  "Estamos en contacto: un abrazo fuerte."
 ],
 GLOSS: [
  {en:"te escribo", fr:"je t'écris (phrase-bloc d'une lettre : « Querida Sofía: te escribo… »)"},
  {en:"Querida Sofía", fr:"Chère Sofía (début d'une lettre amicale)"},
  {en:"un chico / una chica", fr:"un garçon / une fille (jeune)"},
  {en:"por las tardes", fr:"l'après-midi, les après-midis"},
  {en:"un poco", fr:"un peu (invariable)"},
  {en:"comer", fr:"manger (verbe en -ER : tu le verras plus tard ; ici, phrase-bloc)"},
  {en:"me cae bien", fr:"il/elle me plaît, je l'aime bien (voir bonus)"},
  {en:"estamos en contacto", fr:"on reste en contact"}
 ],
 GRAMMAR1: {
  heading:"Conjugaison : les verbes en -AR au présent, et la fréquence",
  lede:"Plus de 80 % des verbes espagnols de ton quotidien finissent par -AR, et tous se conjuguent de la même façon. Apprends le modèle HABLAR : tu sauras en conjuguer des centaines (escuchar, bailar, viajar, pasear, cantar, estudiar…).",
  conj:[
   ["yo →","hablo","Hablo con mis amigos."],
   ["tú →","hablas","¿Hablas con tu vecina?"],
   ["él, ella, usted →","habla","Javier habla mucho. · ¿Habla usted español?"],
   ["nosotros →","hablamos","Siempre hablamos de fútbol."],
   ["vosotros →","habláis","¿Habláis con vuestros amigos?"],
   ["ellos, ustedes →","hablan","Mis amigos hablan francés."]
  ],
  ruleHtml:"📖 <b>Recette :</b> radical (hablar → <b>habl-</b>) + terminaison : <b>-o, -as, -a, -amos, -áis, -an</b>. Même schéma pour <b>escuchar</b> (escucho, escuchas…), <b>bailar</b> (bailo…), <b>viajar</b> (viajo, viajas, viaja, viajamos, viajáis, viajan), <b>pasear</b>, <b>cantar</b>, <b>estudiar</b>, <b>cocinar</b>, <b>trabajar</b>. Pas de pronom sujet : <b>Hablo, hablas, habla…</b><br><br><b>La fréquence</b> : <b>siempre</b> (toujours) · <b>a menudo</b> (souvent) · <b>a veces</b> (parfois) · <b>casi nunca</b> (presque jamais) · <b>nunca</b> (jamais). Exemple : <b>Siempre hablo con mis amigos.</b><br><br><b>Piège de « nunca »</b> : placé AVANT le verbe, il se suffit à lui-même (<b>Nunca bailo</b>) ; placé APRÈS, il demande « no » (<b>No bailo nunca</b>). C'est l'inverse du français où « ne » est toujours là.<br><br><b>Informel / formel</b> : amis → tú (¿Hablas inglés?) ; inconnu ou supérieur → usted, avec la forme « -a » (¿Habla usted inglés?). Salutations : « ¿Qué tal? » entre amis, « Buenos días / Buenas tardes » en situation formelle.",
  dialogueLede:"Deux amis se retrouvent (tutoiement) :",
  dialogue:[
   {who:"them", en:"Hola, Carlos. ¿Qué tal? ¿Hablas mucho con Javier?", fr:"Salut, Carlos. Ça va ? Tu parles beaucoup avec Javier ?"},
   {who:"you", en:"Sí, siempre hablamos de fútbol y a veces escuchamos música.", fr:"Oui, on parle toujours de football et parfois on écoute de la musique."},
   {who:"them", en:"¿Bailáis también?", fr:"Vous dansez aussi ?"},
   {who:"you", en:"Yo casi nunca bailo, soy un poco tímido.", fr:"Moi, je ne danse presque jamais, je suis un peu timide."}
  ],
  whyLabel:"Pourquoi toutes ces terminaisons différentes ?",
  whyText:"Chaque personne a SA terminaison : c'est ce qui permet de supprimer le pronom sujet (comme tu l'as vu en A1.1). Pour tes verbes en -AR, retiens la petite chanson <b>o – as – a – amos – áis – an</b>. Piège de prononciation : l'accent tonique reste sur le radical sauf à nosotros (ha-BLA-mos) et vosotros (ha-BLÁIS). Et à l'écrit, <b>habla</b> peut vouloir dire « il parle », « elle parle » ou « vous parlez » (usted) : c'est le contexte qui décide."
 },
 GRAMMAR2: {
  heading:"GUSTAR : j'aime, ça me plaît",
  dialogueLede:"Dans un café avec un collègue (vouvoiement) :",
  dialogue:[
   {who:"them", en:"Buenas tardes. ¿Le gusta viajar?", fr:"Bon après-midi. Aimez-vous voyager ?"},
   {who:"you", en:"Sí, me gusta mucho. ¿Y a usted?", fr:"Oui, j'aime beaucoup. Et vous ?"},
   {who:"them", en:"A mí también. Me gustan los viajes largos.", fr:"Moi aussi. J'aime les longs voyages."},
   {who:"you", en:"Encantado de conocerle. Nunca hablo de trabajo con los conocidos, ¡pero hoy me gusta!", fr:"Enchanté de faire votre connaissance. Je ne parle jamais de travail avec des connaissances, mais aujourd'hui j'aime ça !"}
  ],
  ruleHtml:"💭 <b>Le mécanisme</b> : en espagnol on ne dit pas « j'aime le café » mais « le café me plaît ». Ce qui plaît est le <b>sujet</b> ; la personne qui aime est un petit pronom.<br><br><b>Les pronoms</b> : <b>(a mí) me</b> · <b>(a ti) te</b> · <b>(a él, a ella, a usted) le</b> · <b>(a nosotros) nos</b> · <b>(a vosotros) os</b> · <b>(a ellos, a ustedes) les</b>.<br><br><b>gusta</b> (singulier) quand ce qui plaît est UN seul objet <i>ou un verbe à l'infinitif</i> : <b>Me gusta el café. Me gusta viajar. Me gusta viajar y bailar.</b><br><b>gustan</b> (pluriel) quand ce sont PLUSIEURS objets : <b>Me gustan los perros. Me gustan la música y el cine.</b> L'adjectif s'accorde : <b>Me gustan los libros interesantes.</b><br><br><b>Négation</b> : « no » devant le pronom : <b>No me gusta el fútbol.</b><br><b>« A mí… » = insister ou comparer</b> : <b>A mí me gusta bailar, ¿y a ti?</b> Réponses courtes : <b>A mí también</b> (moi aussi) · <b>A mí no</b> (moi non). Pour « avec moi / avec toi » : <b>conmigo, contigo</b>.<br><br><b>Une personne qui plaît</b> : <b>caer bien</b> : « Me cae bien Laura » = Laura me plaît, je l'aime bien (voir bonus).",
  whyLabel:"Pourquoi l'espagnol « renverse » la phrase ?",
  whyText:"Dans « me gusta el café », le verbe s'accorde avec <b>le café</b> (la chose), pas avec toi. Voilà pourquoi on a <b>gusta / gustan</b> et jamais « gusto » ou « gustas » pour dire « j'aime » : <b>gustas</b> voudrait dire « tu plais » (« Me gustas » = tu me plais). Pour t'en souvenir, traduis toujours <b>mot à mot en français</b> : « Me gustan los perros » = « Les chiens me plaisent ». Le pronom (me, te, le…) indique À QUI ça plaît ; <b>gusta / gustan</b> se règle sur CE QUI plaît. Avec le vouvoiement, le pronom est <b>le / les</b> : « ¿Le gusta el café, señora? »."
 },
 REVIEW: [
  {q:"« Los padres » signifie :", opts:["les pères","les parents (père et mère)"], correct:1, fb:"Masculin pluriel générique. (rappel A1.2)"},
  {q:"« Tu as des frères et sœurs ? »", opts:["¿Tienes hermanos?","¿Eres hermanos?"], correct:0, fb:"TENER pour les liens familiaux. (rappel A1.2)"},
  {q:"Féminin de « abuelo » :", opts:["abuela","abuelea"], correct:0, fb:"o → a. (rappel A1.2)"},
  {q:"« Mi madre est grande » :", opts:["Mi madre es alta.","Mi madre tiene alta."], correct:0, fb:"Description → SER, adjectif accordé. (rappel A1.2)"},
  {q:"Pour demander son nom à un inconnu âgé :", opts:["¿Cómo te llamas?","¿Cómo se llama usted?"], correct:1, fb:"usted → se llama. (rappel A1.1)"}
 ],
 CULTURE_NOTE: {icon:"🎉", title:"Culture, expression et fiche récap (A1.3)",
  html:"<b>🎉 Culture</b> En Espagne, l'amitié passe par les <b>quedadas</b> : on « queda » (on se donne rendez-vous) pour un café, des tapas ou une sortie. Bise entre amis (deux en Espagne, souvent une en Amérique latine), poignée de main au travail. Entre amis, on termine un message par « <b>un abrazo</b> » ; en contexte pro : « <b>Un saludo</b> » ou « <b>Cordialmente</b> ». « ¿Qué tal? » est une salutation : on répond « Bien, ¿y tú? ».<br><br><b>✍️ Expression écrite — parler de ses amis (6 lignes)</b> Modèle : « Tengo tres amigos muy buenos. Se llaman David, Elena y Marcos. Nos gusta mucho escuchar música y hablar de cine. David es muy simpático y Elena es muy inteligente. Siempre hablamos los fines de semana. » Vérifie : gusta / gustan · terminaisons en -AR · adverbes de fréquence.<br><br><b>🗣️ Expression orale — briser la glace</b> « ¡Hola! Me llamo Lucas, tengo un hermano y me gusta mucho viajar con mis amigos. ¿Y tú, cómo te llamas? » Puis en formel : « Buenas tardes. Encantado de conocerle. ¿Le gusta viajar? »<br><br><b>📄 Fiche récap</b> Verbes en -AR : -o, -as, -a, -amos, -áis, -an (hablar, escuchar, bailar, viajar) · gustar : me / te / le / nos / os / les + gusta (1 objet ou infinitif) ou gustan (plusieurs) · no me gusta · A mí también · fréquence : siempre, a menudo, a veces, casi nunca, nunca · conocido = connaissance · formel : encantado de conocerle, ¿le gusta…?"},
 NEXT_PREVIEW:"A1.4 (Transporte / Direcciones) : demander ton chemin, nommer les moyens de transport et les lieux de la ville, donner des indications avec l'impératif (gira / gire, sigue / siga) et utiliser ir (voy, vas, va…) pour dire où tu vas.",
 META:{vocabTitle:"Amigos y relaciones sociales : qui sont tes amis, ce que tu aimes (A1.3)", lectureTitle:"Carlos et son meilleur ami Javier", bilanTitle:"Bravo, tu sais parler de tes amis et de tes goûts !", pronLabel:"Amigos : h muette, j, ñ, c/z, gu et rr", todayLede:"parler de tes amis, dire ce que tu aimes ou n'aimes pas avec gustar, conjuguer les premiers verbes en -AR (hablar, escuchar, bailar, viajar…) et dire à quelle fréquence tu fais les choses — avec la politesse formelle ET informelle"},
 DRILLS: [
  {type:"fill", text:"Yo ___ con mis amigos. (hablar)", answers:["hablo"], why:"yo → -o."},
  {type:"fill", text:"Tú ___ música. (escuchar)", answers:["escuchas"], why:"tú → -as."},
  {type:"fill", text:"Él ___ muy bien. (bailar)", answers:["baila"], why:"él → -a."},
  {type:"fill", text:"Nosotros ___ en verano. (viajar)", answers:["viajamos"], why:"nosotros → -amos."},
  {type:"fill", text:"Vosotros ___ por la ciudad. (pasear)", answers:["paseáis"], why:"vosotros → -áis (accent écrit)."},
  {type:"fill", text:"Ellos ___ mucho. (cantar)", answers:["cantan"], why:"ellos → -an."},
  {type:"fill", text:"¿___ usted español? (hablar)", answers:["Habla","habla"], why:"usted → -a : habla."},
  {type:"fill", text:"Me ___ el café.", answers:["gusta"], why:"Un seul objet → gusta."},
  {type:"fill", text:"Me ___ los perros.", answers:["gustan"], why:"Plusieurs objets → gustan."},
  {type:"fill", text:"¿Te ___ viajar?", answers:["gusta"], why:"Après gustar, un infinitif → gusta."},
  {type:"fill", text:"A mí ___ gusta la música. (me)", answers:["me"], why:"A mí → me."},
  {type:"fill", text:"A ella ___ gustan los libros. (lui/elle)", answers:["le"], why:"A ella → le."},
  {type:"fill", text:"No ___ gusta el fútbol. (me)", answers:["me"], why:"« No » AVANT le pronom : No me gusta."},
  {type:"fill", text:"___ hablo de trabajo. (jamais)", answers:["Nunca","nunca"], why:"Nunca avant le verbe : pas besoin de « no »."},
  {type:"choice", q:"« Les amis » (garçons et filles) :", opts:["los amigos","las amigas"], correct:0, why:"Groupe mixte → masculin pluriel."},
  {type:"choice", q:"« J'aime la musique et le cinéma. » (2 éléments)", opts:["Me gusta la música y el cine.","Me gustan la música y el cine."], correct:1, why:"Deux éléments → gustan. (Un seul verbe/objet → gusta.)"},
  {type:"choice", q:"« Te gustas » signifie :", opts:["tu aimes","tu te plais (à toi-même)","tu me plais"], correct:1, why:"Évite de dire « me gusto/gustas » pour « j'aime » : le verbe suit ce qui plaît."},
  {type:"choice", q:"Au vouvoiement (usted), tu dis :", opts:["¿Le gusta viajar?","¿Te gusta viajar?"], correct:0, why:"usted → le."},
  {type:"choice", q:"« Presque jamais » :", opts:["casi siempre","casi nunca"], correct:1, why:"casi nunca."},
  {type:"choice", q:"« Une connaissance » :", opts:["una amiga","una conocida","una vecina"], correct:1, why:"conocida = connaissance (pas une amie proche)."}
 ],
 ANNOTATED: {
  title:"Carlos et ses amis",
  intro:"Un petit texte pour lire un peu plus vite. Touche chaque mot pour voir sa nature et sa traduction. Repère les verbes en -AR et les « nos gusta ».",
  sentences:[
   {fr:"Je m'appelle Carlos et j'ai beaucoup d'amis à Madrid.", tokens:[
    {w:"Me llamo", tag:"verbe pronominal", info:"llamarse · présent · yo", fr:"je m'appelle"},
    {w:"Carlos", tag:"nom propre", fr:"Carlos"},
    {w:"y", tag:"conjonction", fr:"et"},
    {w:"tengo", tag:"verbe", info:"tener · présent · yo", fr:"j'ai"},
    {w:"muchos", tag:"adjectif", info:"masc. plur.", fr:"beaucoup de", tip:"mucho s'accorde : muchos amigos, muchas amigas."},
    {w:"amigos", tag:"nom", info:"masc. plur.", fr:"amis"},
    {w:"en", tag:"préposition", fr:"à"},
    {w:"Madrid", tag:"nom propre", fr:"Madrid"}
   ]},
   {fr:"Mon meilleur ami s'appelle Javier ; il est très drôle.", tokens:[
    {w:"Mi", tag:"déterminant", fr:"mon"},
    {w:"mejor", tag:"adjectif", info:"invariable", fr:"meilleur"},
    {w:"amigo", tag:"nom", info:"masc. sing.", fr:"ami"},
    {w:"se llama", tag:"verbe pronominal", info:"llamarse · présent · él", fr:"s'appelle"},
    {w:"Javier", tag:"nom propre", fr:"Javier"},
    {w:"y", tag:"conjonction", fr:"et"},
    {w:"es", tag:"verbe", info:"ser · présent · él", fr:"est"},
    {w:"muy", tag:"adverbe", fr:"très"},
    {w:"divertido", tag:"adjectif", info:"masc. sing.", fr:"drôle"}
   ]},
   {fr:"Nous parlons toujours de football et nous aimons voyager ensemble.", tokens:[
    {w:"Siempre", tag:"adverbe", fr:"toujours", tip:"Adverbe de fréquence, avant le verbe."},
    {w:"hablamos", tag:"verbe", info:"hablar · présent · nosotros", fr:"nous parlons", tip:"habl + -amos."},
    {w:"de", tag:"préposition", fr:"de"},
    {w:"fútbol", tag:"nom", info:"masc. sing.", fr:"football"},
    {w:"y", tag:"conjonction", fr:"et"},
    {w:"nos", tag:"pronom COI", info:"nosotros", fr:"à nous", tip:"Le pronom de « nos gusta » : à nous, ça plaît."},
    {w:"gusta", tag:"verbe", info:"gustar · présent · 3e sing.", fr:"plaît", tip:"Singulier : ce qui plaît est un verbe (viajar)."},
    {w:"viajar", tag:"verbe", info:"infinitif", fr:"voyager"},
    {w:"juntos", tag:"adverbe", fr:"ensemble"}
   ]},
   {fr:"Avec mes amis, je suis très joyeux.", tokens:[
    {w:"Con", tag:"préposition", fr:"avec"},
    {w:"mis", tag:"déterminant", info:"possessif · plur.", fr:"mes"},
    {w:"amigos", tag:"nom", info:"masc. plur.", fr:"amis"},
    {w:"soy", tag:"verbe", info:"ser · présent · yo", fr:"je suis", tip:"Ser : une façon d'être."},
    {w:"muy", tag:"adverbe", fr:"très"},
    {w:"alegre", tag:"adjectif", info:"masc. sing.", fr:"joyeux"}
   ]}
  ]
 }
};
})();

// ---- Illustrations (emoji) et exemples pour les paliers 201-203 : affichés dans l'écran Vocabulaire ----
function __esDeco(n, map){
  var V = LESSONS_ES[n].VOCAB, used = {};
  V.forEach(function(v){
    var d = map[v.en];
    if(!d) throw new Error("Pas d'illustration pour : " + v.en);
    v.emo = d[0]; v.ex = [d[1], d[2]]; used[v.en] = 1;
  });
  Object.keys(map).forEach(function(k){ if(!used[k]) throw new Error("Terme inconnu dans la carte : " + k); });
}
__esDeco(201, {
 "el nombre":["🪪","Mi nombre es Ana.","Mon prénom est Ana."],
 "el apellido":["🏷️","Mi apellido es García.","Mon nom de famille est García."],
 "el apodo":["😄","Mi apodo es Ele.","Mon surnom est Ele."],
 "la edad":["🎂","¿Cuál es tu edad?","Quel est ton âge ?"],
 "la fecha de nacimiento":["📅","Mi fecha de nacimiento es el 5 de mayo.","Ma date de naissance est le 5 mai."],
 "el estado civil":["💍","Mi estado civil es soltero.","Ma situation familiale est célibataire."],
 "la profesión":["💼","Mi profesión es médico.","Ma profession est médecin."],
 "el teléfono":["📱","Mi teléfono es el 612 345 678.","Mon téléphone est le 612 345 678."],
 "el correo electrónico":["📧","Mi correo electrónico es ana@correo.es.","Mon adresse e-mail est ana@correo.es."],
 "la dirección":["🏠","Mi dirección es calle Mayor, 4.","Mon adresse est rue Mayor, 4."],
 "el país":["🌍","Mi país es Francia.","Mon pays est la France."],
 "la ciudad":["🏙️","Mi ciudad es Lyon.","Ma ville est Lyon."],
 "la nacionalidad":["🛂","Mi nacionalidad es francesa.","Ma nationalité est française."],
 "vivir":["🏡","Vivo en París.","J'habite à Paris."],
 "ser de":["📍","Soy de Madrid.","Je viens de Madrid."],
 "vivir en":["📌","Vivimos en Valencia.","Nous habitons à Valence."],
 "francés / francesa":["🇫🇷","Soy francesa.","Je suis française."],
 "español / española":["🇪🇸","Pablo es español.","Pablo est espagnol."],
 "italiano / italiana":["🇮🇹","Marco es italiano.","Marco est italien."],
 "alemán / alemana":["🇩🇪","Anna es alemana.","Anna est allemande."],
 "portugués / portuguesa":["🇵🇹","Rui es portugués.","Rui est portugais."],
 "inglés / inglesa":["🇬🇧","Kate es inglesa.","Kate est anglaise."],
 "argentino / argentina":["🇦🇷","Carlos es argentino.","Carlos est argentin."],
 "mexicano / mexicana":["🇲🇽","Lupe es mexicana.","Lupe est mexicaine."],
 "colombiano / colombiana":["🇨🇴","Daniel es colombiano.","Daniel est colombien."],
 "marroquí":["🇲🇦","Samira es marroquí.","Samira est marocaine."],
 "estadounidense":["🇺🇸","Tom es estadounidense.","Tom est américain."],
 "la altura":["📏","Mi altura es 1,70.","Ma taille est 1,70 m."],
 "el peso":["⚖️","Mi peso es 65 kilos.","Mon poids est 65 kilos."],
 "el pelo":["💇","Tengo el pelo negro.","J'ai les cheveux noirs."],
 "los ojos":["👀","Tengo los ojos verdes.","J'ai les yeux verts."],
 "la cara":["🙂","Tengo la cara redonda.","J'ai le visage rond."],
 "la cabeza":["🗣️","Tengo la cabeza grande.","J'ai une grande tête."],
 "el brazo":["💪","Tengo el brazo largo.","J'ai le bras long."],
 "la mano":["✋","Tengo la mano pequeña.","J'ai la main petite."],
 "la pierna":["🦵","Tengo la pierna larga.","J'ai la jambe longue."],
 "el pie":["🦶","Tengo el pie grande.","J'ai le grand pied."],
 "tú":["🤝","¿Tú te llamas Ana?","Toi, tu t'appelles Ana ?"],
 "usted":["🎩","¿Usted se llama Ana?","Vous, vous appelez-vous Ana ? (politesse)"],
 "vosotros / vosotras":["👫","¿Vosotros sois españoles?","Vous êtes espagnols ? (amis, Espagne)"],
 "ustedes":["👥","¿Ustedes son colombianos?","Vous êtes colombiens ? (pluriel)"],
 "¿cómo?":["❓","¿Cómo te llamas?","Comment tu t'appelles ?"],
 "¿cuántos años?":["🎈","¿Cuántos años tienes?","Quel âge as-tu ?"],
 "¿de dónde?":["🧭","¿De dónde eres?","D'où es-tu ?"],
 "¿dónde?":["📍","¿Dónde vives?","Où habites-tu ?"],
 "¿cuál?":["🔎","¿Cuál es tu apellido?","Quel est ton nom de famille ?"],
 "mucho gusto":["🙂","Hola, mucho gusto.","Bonjour, enchanté(e)."],
 "encantado / encantada":["😊","Encantada, soy Ana.","Enchantée, je suis Ana."],
 "igualmente":["🤝","Mucho gusto. — Igualmente.","Enchanté. — Pareillement."],
 "el gusto es mío":["🌷","Mucho gusto. — El gusto es mío.","Enchanté. — Le plaisir est pour moi."],
 "¿cómo se escribe?":["✏️","¿Cómo se escribe su apellido?","Comment s'écrit votre nom de famille ?"],
 "no comprendo":["🤷","Lo siento, no comprendo.","Désolé(e), je ne comprends pas."],
 "más despacio, por favor":["🐢","Más despacio, por favor.","Plus lentement, s'il vous plaît."],
 "¿puede repetir?":["🔁","Perdón, ¿puede repetir?","Pardon, pouvez-vous répéter ?"],
 "estoy soltero / soltera":["🙋","Estoy soltera.","Je suis célibataire."],
 "estoy casado / casada":["💑","Estoy casado y tengo dos hijos.","Je suis marié et j'ai deux enfants."]
});
__esDeco(202, {
 "la familia":["👨‍👩‍👧‍👦","Mi familia es grande.","Ma famille est grande."],
 "la madre":["👩","Mi madre se llama Carmen.","Ma mère s'appelle Carmen."],
 "el padre":["👨","Mi padre es médico.","Mon père est médecin."],
 "los padres":["👫","Mis padres viven en Sevilla.","Mes parents habitent à Séville."],
 "el hermano / la hermana":["🧑‍🤝‍🧑","Mi hermana tiene quince años.","Ma sœur a quinze ans."],
 "los hermanos":["👦👧","Tengo dos hermanos.","J'ai deux frères et sœurs."],
 "el hijo / la hija":["🧒","Mi hija se llama Lucía.","Ma fille s'appelle Lucía."],
 "los hijos":["👶","Tengo tres hijos.","J'ai trois enfants."],
 "el marido / el esposo":["🤵","Mi marido es alto.","Mon mari est grand."],
 "la mujer / la esposa":["👰","Mi mujer es muy simpática.","Ma femme est très sympathique."],
 "el abuelo / la abuela":["👴👵","Mi abuela es muy cariñosa.","Ma grand-mère est très affectueuse."],
 "el tío / la tía":["🧔","Mi tío vive en Madrid.","Mon oncle habite à Madrid."],
 "el primo / la prima":["🧑‍🤝‍🧑","Mi prima tiene diez años.","Ma cousine a dix ans."],
 "el sobrino / la sobrina":["🧒","Mi sobrina es muy graciosa.","Ma nièce est très drôle."],
 "el nieto / la nieta":["👧","Mi nieto tiene cinco años.","Mon petit-fils a cinq ans."],
 "joven":["🧑","Mi hermano es joven.","Mon frère est jeune."],
 "mayor":["🧓","Mi abuelo es mayor.","Mon grand-père est âgé."],
 "menor":["🧒","Mi hermana menor tiene doce años.","Ma petite sœur a douze ans."],
 "alto / alta":["📏","Mi padre es alto.","Mon père est grand."],
 "bajo / baja":["🧍","Mi madre es baja.","Ma mère est petite."],
 "simpático / simpática":["😊","Mi tía es muy simpática.","Ma tante est très sympathique."],
 "gracioso / graciosa":["😄","Mi primo es muy gracioso.","Mon cousin est très drôle."],
 "cariñoso / cariñosa":["🥰","Mi abuela es cariñosa.","Ma grand-mère est affectueuse."],
 "casado / casada":["💍","Mi hermano está casado.","Mon frère est marié."],
 "soltero / soltera":["🙋","Mi tío está soltero.","Mon oncle est célibataire."],
 "pequeño / pequeña":["🏠","Mi familia es pequeña.","Ma famille est petite."],
 "grande":["🏘️","Mi familia es grande.","Ma famille est grande."],
 "hijo único / hija única":["🧒","Soy hijo único.","Je suis fils unique."],
 "los abuelos":["👴👵","Mis abuelos viven en Valencia.","Mes grands-parents habitent à Valence."],
 "los parientes":["👪","Tengo muchos parientes en Madrid.","J'ai beaucoup de parenté à Madrid."],
 "estar casado / casada":["💒","Mi hermana está casada.","Ma sœur est mariée."],
 "estar soltero / soltera":["🕺","Mi primo está soltero.","Mon cousin est célibataire."],
 "tener hijos":["🍼","No tengo hijos.","Je n'ai pas d'enfants."],
 "la familia política":["🤝","Mi familia política es simpática.","Ma belle-famille est sympathique."],
 "el suegro / la suegra":["👵","Mi suegra se llama Rosa.","Ma belle-mère s'appelle Rosa."],
 "el cuñado / la cuñada":["🧑","Mi cuñado es de Granada.","Mon beau-frère est de Grenade."],
 "te quiero mucho":["❤️","Te quiero mucho, mamá.","Je t'aime beaucoup, maman."],
 "tener un hermano":["👬","Tengo un hermano.","J'ai un frère."],
 "¿tienes hermanos?":["❓","¿Tienes hermanos?","Tu as des frères et sœurs ?"],
 "¿cuántos hermanos tienes?":["🔢","¿Cuántos hermanos tienes?","Combien de frères et sœurs as-tu ?"],
 "vivir con":["🏡","Vivo con mis padres.","J'habite avec mes parents."],
 "¿cómo es tu madre?":["🗨️","¿Cómo es tu madre? — Es alta y simpática.","Comment est ta mère ? — Elle est grande et sympathique."]
});
__esDeco(203, {
 "el amigo / la amiga":["🧑‍🤝‍🧑","Mi amiga se llama Laura.","Mon amie s'appelle Laura."],
 "el mejor amigo / la mejor amiga":["🤜🤛","Javier es mi mejor amigo.","Javier est mon meilleur ami."],
 "el conocido / la conocida":["🙋","Marta es una conocida.","Marta est une connaissance."],
 "el compañero / la compañera":["🎒","Pablo es mi compañero de clase.","Pablo est mon camarade de classe."],
 "el vecino / la vecina":["🏘️","Mi vecina es muy agradable.","Ma voisine est très agréable."],
 "la pandilla":["👥","Mi pandilla es divertida.","Ma bande d'amis est drôle."],
 "la relación":["🔗","Tengo buena relación con mi vecino.","J'ai une bonne relation avec mon voisin."],
 "la confianza":["🤝","Tengo confianza con mis amigos.","J'ai confiance en mes amis."],
 "simpático / simpática":["😊","Javier es muy simpático.","Javier est très sympathique."],
 "antipático / antipática":["😠","Mi vecino es antipático.","Mon voisin est antipathique."],
 "agradable":["🌼","Laura es muy agradable.","Laura est très agréable."],
 "divertido / divertida":["🎉","Mi amigo es muy divertido.","Mon ami est très drôle."],
 "aburrido / aburrida":["😴","La película es aburrida.","Le film est ennuyeux."],
 "inteligente":["🧠","Elena es muy inteligente.","Elena est très intelligente."],
 "tímido / tímida":["🙈","Soy un poco tímido.","Je suis un peu timide."],
 "generoso / generosa":["🎁","Mi amiga es generosa.","Mon amie est généreuse."],
 "fiel":["🐕","Mi amigo es fiel.","Mon ami est loyal."],
 "alegre":["😃","Con mis amigos soy muy alegre.","Avec mes amis, je suis très joyeux."],
 "hola, ¿qué tal?":["👋","¡Hola, Carlos! ¿Qué tal?","Salut, Carlos ! Ça va ?"],
 "¿qué pasa?":["🤙","¿Qué pasa, Pablo?","Quoi de neuf, Pablo ?"],
 "buenos días / buenas tardes / buenas noches":["🌤️","Buenas tardes, señora.","Bon après-midi, madame."],
 "¿cómo está usted?":["🎩","Buenos días, ¿cómo está usted?","Bonjour, comment allez-vous ?"],
 "mucho gusto en conocerte":["🤗","Mucho gusto en conocerte, Ana.","Ravi de faire ta connaissance, Ana."],
 "encantado de conocerle":["🤝","Encantado de conocerle, señor.","Enchanté de faire votre connaissance, monsieur."],
 "hasta luego / hasta mañana":["👋","Hasta luego, Ana. Hasta mañana.","À tout à l'heure, Ana. À demain."],
 "gustar":["💛","Me gusta el chocolate.","J'aime le chocolat (il me plaît)."],
 "me gusta mucho":["😍","Me gusta mucho bailar.","J'aime beaucoup danser."],
 "no me gusta":["🙅","No me gusta el fútbol.","Je n'aime pas le football."],
 "a mí también":["🙋","Me gusta la música. — A mí también.","J'aime la musique. — Moi aussi."],
 "la música":["🎵","Me gusta la música.","J'aime la musique."],
 "el cine":["🎬","Me gusta el cine.","J'aime le cinéma."],
 "el fútbol":["⚽","Me gusta el fútbol.","J'aime le football."],
 "los libros":["📚","Me gustan los libros.","J'aime les livres."],
 "el verano":["☀️","Me gusta el verano.","J'aime l'été."],
 "el fin de semana":["🛋️","Me gusta el fin de semana.","J'aime le week-end."],
 "juntos / juntas":["👭","Viajamos juntos.","Nous voyageons ensemble."],
 "hablar":["💬","Hablo con mis amigos.","Je parle avec mes amis."],
 "escuchar":["🎧","Escucho música.","J'écoute de la musique."],
 "bailar":["💃","Bailamos salsa.","Nous dansons la salsa."],
 "viajar":["✈️","Viajo en verano.","Je voyage en été."],
 "pasear":["🚶","Paseamos por la ciudad.","Nous nous promenons en ville."],
 "cantar":["🎤","Mi amiga canta muy bien.","Mon amie chante très bien."],
 "estudiar":["📖","Estudio español.","J'étudie l'espagnol."],
 "cocinar":["🍳","Cocino con mi amiga.","Je cuisine avec mon amie."],
 "trabajar":["💻","Trabajo en Madrid.","Je travaille à Madrid."],
 "siempre":["♾️","Siempre hablamos de fútbol.","Nous parlons toujours de football."],
 "a menudo":["🔁","A menudo escucho música.","J'écoute souvent de la musique."],
 "a veces":["🌗","A veces bailo.","Parfois je danse."],
 "casi nunca":["🌑","Casi nunca viajo.","Je ne voyage presque jamais."],
 "nunca":["🚫","Nunca bailo.","Je ne danse jamais."],
 "conmigo / contigo":["👫","¿Bailas conmigo?","Tu danses avec moi ?"],
 "llevarse bien con alguien":["🤝","Me llevo bien con mis vecinos.","Je m'entends bien avec mes voisins."],
 "hacer nuevos amigos":["🧑‍🤝‍🧑","Me gusta hacer nuevos amigos.","J'aime me faire de nouveaux amis."],
 "pasarlo bien":["🥳","¡Que lo pases bien!","Amuse-toi bien !"],
 "estar de buen humor":["😁","Hoy estoy de buen humor.","Aujourd'hui je suis de bonne humeur."],
 "estar harto / harta":["😤","Estoy harta de esto.","J'en ai marre de ça."],
 "caer bien / caer mal":["👍","Laura me cae muy bien.","Laura me plaît beaucoup (je l'aime bien)."],
 "tener confianza en":["🔐","Tengo confianza en ti.","J'ai confiance en toi."],
 "salir de fiesta":["🎊","Nos gusta salir de fiesta.","Nous aimons sortir faire la fête."],
 "estar en contacto":["📲","Estamos en contacto.","On reste en contact."],
 "un abrazo fuerte":["🤗","Un abrazo fuerte, Marta.","Une grosse accolade, Marta."]
});
// A1.0 — Les bases : prononciation, genre et accords, SER / ESTAR / TENER (module d'entrée, leçon 200)
(function(){
var MAP = {};
function blk(name, rows){ rows.forEach(function(r){ MAP[r[0]] = [r[4], r[5], r[6]]; }); return __esB(name, rows); }
// ligne = [terme, API, français, note, emoji, exemple ES, exemple FR]
var V = [].concat(
 blk("Phonétique : l'alphabet lettre par lettre", [
  ["las vocales : a, e, i, o, u","/a e i o u/","les 5 voyelles","Toujours pures et courtes, jamais nasales : a = « a », e = « é » (blé), i = « i », o = « o » fermé, u = « ou ». Mots-test : MA-no, ME-sa, FO-to, U-no.","🔤","La mesa es azul.","La table est bleue."],
  ["la h : hola","/ˈola/","salut (h muette)","La h ne se prononce JAMAIS : O-la. Seule exception d'aspect : « ch » (voir plus bas).","👋","Hola, ¿cómo estás?","Salut, comment vas-tu ?"],
  ["la j : jamón","/xaˈmon/","jambon (j = kh)","j = « r » rauque au fond de la gorge (kh), comme « Bach » en allemand. Jamais le « j » français. kha-MÓN.","🍖","El jamón es rosa.","Le jambon est rose."],
  ["g devant e, i : gente","/ˈxente/","les gens (g = kh)","ge, gi = kh comme la jota : KHEN-te, kho-KHE. Même son que « j ».","👥","La gente está contenta.","Les gens sont contents."],
  ["g devant a, o, u : gato","/ˈɡato/","chat (g dur)","ga, go, gu = « g » dur de gare, gomme, gourde : GA-to.","🐱","El gato es negro.","Le chat est noir."],
  ["gue, gui : guitarra","/ɡiˈtara/","guitare (u muet)","Dans gue / gui, le u est MUET et sert à garder le « g » dur : gi-TA-rra, comme en français « guitare ».","🎸","La guitarra es roja.","La guitare est rouge."],
  ["güe, güi : pingüino","/piŋˈɡwino/","pingouin (ü se prononce)","Le tréma ¨ « réveille » le u : güe = gwé, güi = gwi. pin-GWI-no. Seul cas où le ü existe.","🐧","El pingüino es simpático.","Le pingouin est sympathique."],
  ["qu : queso","/ˈkeso/","fromage (qu = k)","qu = « k » et le u est muet (toujours devant e ou i) : KE-so, a-KI. Pas de « kw » !","🧀","El queso es amarillo.","Le fromage est jaune."],
  ["c devant a, o, u : casa","/ˈkasa/","maison (c = k)","ca, co, cu = ka, ko, ku : KA-sa.","🏠","La casa es grande.","La maison est grande."],
  ["c devant e, i : cero","/ˈθeɾo/","zéro (c = th)","Espagne : « th » anglais de think : THÉ-ro. Amérique latine et Andalousie : « s » (le seseo : SÉ-ro). Les deux sont corrects ; garde-en un et reste cohérent.","0️⃣","Cero es un número.","Zéro est un nombre."],
  ["z : zapato","/θaˈpato/","chaussure (z = th)","z = « th » en Espagne (tha-PA-to), « s » en Amérique latine. On écrit z devant a, o, u ; c devant e, i : zapato mais cero.","👟","El zapato es blanco.","La chaussure est blanche."],
  ["ll : llave","/ˈʝaβe/","clé (ll = « y »)","ll = « y » de yeux : YA-ve. En Argentine, un « ch » doux (comme le j anglais). Piège : ce n'est pas « l-l ».","🔑","La llave es pequeña.","La clé est petite."],
  ["ñ : niño, año","/ˈniɲo · ˈaɲo/","enfant, an (ñ = gn)","ñ = « gn » de agneau. Lettre à part entière : sans la ~, le mot change complètement (año ≠ ano).","👦","El niño está contento.","L'enfant est content."],
  ["rr et r : perro / pero","/ˈpero · ˈpeɾo/","chien / mais (r roulé)","rr = r roulé fort : PE-rro (chien). r au début d'un mot (rojo) = aussi roulé. Une seule r entre voyelles = petit r « tapé » : PE-ro (mais). perro ≠ pero !","🐕","El perro es grande, pero es simpático.","Le chien est grand, mais il est sympathique."],
  ["ch : chico","/ˈtʃiko/","garçon (ch = tch)","ch = « tch » comme dans tchèque : TCHI-ko. Jamais le « ch » français de chat.","🧑","El chico es alto.","Le garçon est grand."],
  ["v et b : vaso, bajo","/ˈbaso · ˈbaxo/","verre, bas (v = b)","v et b = EXACTEMENT le même son, un « b » doux (lèvres qui se touchent à peine entre deux voyelles). BA-so, BA-kho. Seule l'orthographe les distingue.","🥛","El vaso es grande.","Le verre est grand."],
  ["y : yo et y","/ʝo · i/","je ; et","y consonne = « y » : YO. Le mot « y » seul = « i » = « et » : Ana y Luis.","➕","Ana y Luis son simpáticos.","Ana et Luis sont sympathiques."],
  ["el alfabeto","/alfaˈβeto/","l'alphabet (27 lettres)","a, be, ce, de, e, efe, ge, hache, i, jota, ka, ele, eme, ene, EÑE, o, pe, cu, erre, ese, te, u, uve, uve doble, equis, i griega, zeta. « ch » et « ll » : 2 lettres, 1 son. Pour épeler : « R, U, I, Z » = erre, u, i, zeta.","🔠","La eñe es una letra.","Le ñ est une lettre."],
  ["la sílaba tónica","/la ˈsilaβa ˈtonika/","la syllabe accentuée","Règle : mot terminé par voyelle, -n ou -s → on insiste sur l'AVANT-dernière syllabe (CA-sa, MU-chos). Terminé par une autre consonne → sur la DERNIÈRE (pa-PEL, ciu-DAD).","🥁","El papel es blanco.","Le papier est blanc."],
  ["la tilde : l'accent écrit","/la ˈtilde/","l'accent écrit (´)","Il apparaît quand le mot ne suit PAS la règle : te-LÉ-fo-no, LÁ-piz, ca-MIÓN. Il distingue aussi : tú (toi) / tu (ton), él (il) / el (le), sí (oui) / si (si).","✍️","El lápiz es amarillo.","Le crayon est jaune."]
 ]),
 blk("Les couleurs", [
  ["rojo / roja","/ˈroxo · ˈroxa/","rouge","r initiale roulée ; j = kh. Quatre formes : rojo, roja, rojos, rojas.","🔴","El libro es rojo.","Le livre est rouge."],
  ["azul","/aˈθul/","bleu","Finit par une consonne : invariable au féminin (la mesa azul) ; pluriel : azules.","🔵","La mochila es azul.","Le sac à dos est bleu."],
  ["verde","/ˈbeɾðe/","vert","Finit en -e : invariable au féminin. Le v se prononce b.","🟢","La silla es verde.","La chaise est verte."],
  ["amarillo / amarilla","/amaˈɾiʝo · amaˈɾiʝa/","jaune","ll = « y » : a-ma-RI-yo. Pluriel : amarillos, amarillas (deux l !).","🟡","La flor es amarilla.","La fleur est jaune."],
  ["blanco / blanca","/ˈblanko · ˈblanka/","blanc / blanche","Le féminin se prononce bien -a, jamais -che.","⚪","La pared es blanca.","Le mur est blanc."],
  ["negro / negra","/ˈneɣɾo · ˈneɣɾa/","noir / noire","Le g se prononce très doux (neɣro).","⚫","El gato es negro.","Le chat est noir."],
  ["naranja","/naˈɾaŋxa/","orange","Invariable en genre ; le fruit aussi s'appelle « la naranja ». Pluriel : naranjas.","🟠","La bolsa es naranja.","Le sac est orange."],
  ["gris","/ɡɾis/","gris","Finit par une consonne : invariable. Pluriel : grises.","🩶","El lápiz es gris.","Le crayon est gris."],
  ["marrón","/maˈrron/","marron","Accent écrit sur le ó : ma-RRÓN. Invariable en genre. Pluriel : marrones.","🟤","El zapato es marrón.","La chaussure est marron."],
  ["rosa","/ˈrosa/","rose","Invariable en genre ; « la rosa » = la rose (fleur).","🌸","La flor es rosa.","La fleur est rose."]
 ]),
 blk("Les nombres : 0 à 100", [
  ["cero · uno · dos · tres · cuatro · cinco","/ˈθeɾo ˈuno dos tɾes ˈkwatɾo ˈθiŋko/","0 · 1 · 2 · 3 · 4 · 5","uno devient un / una devant un nom : un libro, una mesa. cinco : c = th.","🔢","Tengo un libro y dos cuadernos.","J'ai un livre et deux cahiers."],
  ["seis · siete · ocho · nueve · diez","/sejs ˈsjete ˈotʃo ˈnweβe djeθ/","6 · 7 · 8 · 9 · 10","diez finit par z = « th » : DYETH.","🔟","Tenemos diez bolígrafos.","Nous avons dix stylos."],
  ["once · doce · trece · catorce · quince","/ˈonθe ˈdoθe ˈtɾeθe kaˈtoɾθe ˈkinθe/","11 · 12 · 13 · 14 · 15","Tous finissent en -ce (« the » en Espagne). Ils sont à apprendre par cœur.","🎯","Tengo quince años.","J'ai quinze ans."],
  ["dieciséis · diecisiete · dieciocho · diecinueve · veinte","/djeθiˈsejs djeθiˈsjete djeθiˈotʃo djeθiˈnweβe ˈbejnte/","16 · 17 · 18 · 19 · 20","16 à 19 = « diez + y + chiffre » soudés en UN mot (dieci-). dieciséis prend un accent écrit.","📈","Ana tiene dieciocho años.","Ana a dix-huit ans."],
  ["veintiuno · veintidós … veintinueve","/bejntiˈuno bejntiˈðos … bejntiˈnweβe/","21 · 22 … 29","De 21 à 29 : un seul mot. veintiuno devient veintiún devant un nom masculin : veintiún años. Accents : veintidós, veintitrés, veintiséis.","🔢","Tengo veintiún años.","J'ai vingt et un ans."],
  ["treinta · cuarenta · cincuenta · sesenta · setenta · ochenta · noventa · cien","/ˈtɾejnta kwaˈɾenta θinˈkwenta seˈsenta seˈtenta oˈtʃenta noˈβenta θjen/","30 · 40 · 50 · 60 · 70 · 80 · 90 · 100","À partir de 31 : deux mots reliés par « y » : treinta y uno, cuarenta y cinco. cien = 100.","💯","Tengo treinta y cinco años.","J'ai trente-cinq ans."]
 ]),
 blk("Émotions et états (avec ESTAR)", [
  ["cansado / cansada","/kanˈsaðo · kanˈsaða/","fatigué(e)","Accord avec la personne : un homme « cansado », une femme « cansada ».","😴","Hoy estoy cansada.","Aujourd'hui je suis fatiguée."],
  ["contento / contenta","/konˈtento · konˈtenta/","content(e)","État du moment (estoy contento).","😊","Estás contento hoy.","Tu es content aujourd'hui."],
  ["triste","/ˈtɾiste/","triste","Finit en -e : une seule forme pour lui et elle ; pluriel : tristes.","😢","Marta está triste.","Marta est triste."],
  ["enfermo / enferma","/enˈfeɾmo · enˈfeɾma/","malade","On est malade « en ce moment » : toujours estar.","🤒","Carlos está enfermo.","Carlos est malade."],
  ["nervioso / nerviosa","/neɾˈβjoso · neɾˈβjosa/","nerveux / nerveuse","Estoy nervioso = je le suis maintenant ; soy nervioso = c'est mon caractère.","😬","Estoy nervioso hoy.","Je suis nerveux aujourd'hui."],
  ["feliz","/feˈliθ/","heureux / heureuse","Invariable au féminin ; pluriel : felices (z → ces). Soy feliz = heureux de nature ; estoy feliz = heureux en ce moment.","😄","Somos felices.","Nous sommes heureux."],
  ["ocupado / ocupada","/okuˈpaðo · okuˈpaða/","occupé(e)","Estar ocupado = être occupé en ce moment.","📞","Estoy ocupada hoy.","Je suis occupée aujourd'hui."],
  ["enfadado / enfadada","/enfaˈðaðo · enfaˈðaða/","fâché(e)","Le d entre voyelles est très doux.","😠","Ana está enfadada.","Ana est fâchée."],
  ["tranquilo / tranquila","/tɾanˈkilo · tɾanˈkila/","calme, tranquille","Aussi pour rassurer : « Tranquilo / tranquila » = pas de panique.","😌","Estoy tranquilo.","Je suis tranquille."],
  ["aburrido / aburrida","/aβuˈrriðo · aβuˈrriða/","ennuyé(e) / ennuyeux(se)","Estoy aburrido = je m'ennuie ; soy aburrido = je suis ennuyeux. Avec ser ou estar, le sens change !","🥱","Estoy aburrido.","Je m'ennuie."],
  ["bien / mal","/bjen · mal/","bien / mal","Invariables : estoy bien, estoy mal. Réponse à ¿Cómo estás?","👍","Estoy bien, gracias.","Je vais bien, merci."]
 ]),
 blk("TENER : l'âge, la possession, les sensations", [
  ["tener … años","/teˈneɾ ˈaɲos/","avoir … ans","Comme en français : tengo veinte años. Jamais « soy veinte años ».","🎂","Tengo veinte años.","J'ai vingt ans."],
  ["tener hambre","/teˈneɾ ˈambɾe/","avoir faim","h muette : AM-bre. Pas de « soy hambre ».","🍽️","Tengo hambre.","J'ai faim."],
  ["tener sed","/teˈneɾ seð/","avoir soif","Le d final est presque muet.","🥤","Tengo sed.","J'ai soif."],
  ["tener frío","/teˈneɾ ˈfɾio/","avoir froid","frío porte un accent écrit : FRÍ-o.","🥶","Tengo frío.","J'ai froid."],
  ["tener calor","/teˈneɾ kaˈloɾ/","avoir chaud","Accent sur la dernière syllabe : ca-LOR.","🥵","Tengo calor.","J'ai chaud."],
  ["tener sueño","/teˈneɾ ˈsweɲo/","avoir sommeil","ñ = gn : SWÉ-gno.","💤","Tengo sueño.","J'ai sommeil."],
  ["tener miedo","/teˈneɾ ˈmjeðo/","avoir peur","miedo = la peur.","😨","Tengo miedo.","J'ai peur."]
 ]),
 blk("La classe et les objets", [
  ["el libro","/el ˈliβɾo/","le livre","Masculin en -o.","📕","El libro es rojo.","Le livre est rouge."],
  ["el cuaderno","/el kwaˈðeɾno/","le cahier","ua = diphtongue : kwa-DER-no.","📓","El cuaderno es azul.","Le cahier est bleu."],
  ["el bolígrafo","/el boˈliɣɾafo/","le stylo","Accent écrit : bo-LÍ-gra-fo.","🖊️","El bolígrafo es negro.","Le stylo est noir."],
  ["el lápiz","/el ˈlapiθ/","le crayon","Pluriel : los lápices (z → ces).","✏️","El lápiz es verde.","Le crayon est vert."],
  ["la mesa","/la ˈmesa/","la table","Féminin en -a.","🪑","La mesa es blanca.","La table est blanche."],
  ["la silla","/la ˈsiʝa/","la chaise","ll = y : SI-ya.","💺","La silla es cómoda.","La chaise est confortable."],
  ["la pizarra","/la piˈθarra/","le tableau","z = th ; rr roulé.","🧑‍🏫","La pizarra es grande.","Le tableau est grand."],
  ["la mochila","/la moˈtʃila/","le sac à dos","ch = tch.","🎒","La mochila es nueva.","Le sac à dos est neuf."],
  ["el ordenador","/el oɾðenaˈðoɾ/","l'ordinateur (Espagne)","En Amérique latine : « la computadora ».","💻","El ordenador es moderno.","L'ordinateur est moderne."],
  ["la puerta","/la ˈpweɾta/","la porte","ue = diphtongue : PWER-ta.","🚪","La puerta es marrón.","La porte est marron."],
  ["la ventana","/la benˈtana/","la fenêtre","v = b.","🪟","La ventana es grande.","La fenêtre est grande."],
  ["el papel","/el paˈpel/","le papier","Finit par une consonne : pluriel en -es : los papeles.","📄","El papel es blanco.","Le papier est blanc."],
  ["la pared","/la paˈɾeð/","le mur","Pluriel : las paredes. Féminin malgré la consonne finale.","🧱","La pared es blanca.","Le mur est blanc."],
  ["la llave","/la ˈʝaβe/","la clé","Pluriel : las llaves (et ll = y).","🗝️","¿Dónde está la llave?","Où est la clé ?"],
  ["la lección","/la lekˈθjon/","la leçon","Pluriel : las lecciones (l'accent disparaît). Tous les noms en -ción sont féminins.","📚","La lección es fácil.","La leçon est facile."],
  ["el coche","/el ˈkotʃe/","la voiture","ch = tch. Pluriel : los coches.","🚗","El coche es rápido.","La voiture est rapide."],
  ["la flor","/la floɾ/","la fleur","Pluriel : las flores.","🌼","La flor es amarilla.","La fleur est jaune."]
 ]),
 blk("Les personnes", [
  ["el alumno / la alumna","/el aˈlumno · la aˈlumna/","l'élève (garçon / fille)","-o → -a pour passer au féminin.","🧑‍🎓","La alumna es inteligente.","L'élève est intelligente."],
  ["el profesor / la profesora","/pɾofeˈsoɾ · pɾofeˈsoɾa/","le professeur / la professeure","Mot en consonne : on AJOUTE -a au féminin.","👩‍🏫","El profesor es alto.","Le professeur est grand."],
  ["el estudiante / la estudiante","/estuˈðjante/","l'étudiant / l'étudiante","Finit en -e : seul l'article change.","🎓","La estudiante está contenta.","L'étudiante est contente."],
  ["el chico / la chica","/el ˈtʃiko · la ˈtʃika/","le garçon / la fille","chico / chica s'emploie pour un jeune. ch = tch.","🧑","La chica es simpática.","La fille est sympathique."],
  ["el amigo / la amiga","/el aˈmiɣo · la aˈmiɣa/","l'ami / l'amie","g doux entre voyelles.","🫂","Ana es una amiga.","Ana est une amie."],
  ["el señor / la señora","/seˈɲoɾ · seˈɲoɾa/","monsieur / madame","Titres de politesse : on les emploie avec usted. ñ = gn.","🎩","Buenos días, señora.","Bonjour, madame."]
 ]),
 blk("Décrire une personne ou une chose", [
  ["alto / alta","/ˈalto · ˈalta/","grand(e) (taille)","Pour une personne : alto. Pour une chose, grande.","📏","Marta es alta.","Marta est grande."],
  ["bajo / baja","/ˈbaxo · ˈbaxa/","petit(e) (taille), bas","Contraire de alto. j = kh : BA-kho.","🔽","El chico es bajo.","Le garçon est petit."],
  ["grande","/ˈɡɾande/","grand(e), gros(se)","Finit en -e : un coche grande, una casa grande. Pluriel : grandes.","⬆️","La casa es grande.","La maison est grande."],
  ["pequeño / pequeña","/peˈkeɲo · peˈkeɲa/","petit(e)","pe-KE-gno : ñ = gn.","🐜","La silla es pequeña.","La chaise est petite."],
  ["inteligente","/inteliˈxente/","intelligent(e)","Finit en -e : invariable au féminin. g devant e = kh.","🧠","La chica es inteligente.","La fille est intelligente."],
  ["simpático / simpática","/simˈpatiko · simˈpatika/","sympathique","Accent écrit : sim-PÁ-ti-ko. Attention : « simpatique » n'existe pas.","😀","El profesor es simpático.","Le professeur est sympathique."],
  ["joven","/ˈxoβen/","jeune","Finit par une consonne : invariable ; pluriel : jóvenes (accent écrit ajouté).","🧒","La profesora es joven.","La professeure est jeune."],
  ["guapo / guapa","/ˈɡwapo · ˈɡwapa/","beau / belle, mignon(ne)","gua = gwa : GWA-po.","✨","La chica es guapa.","La fille est jolie."],
  ["nuevo / nueva","/ˈnweβo · ˈnweβa/","neuf / neuve, nouveau","Se place après le nom : un libro nuevo.","🆕","El cuaderno es nuevo.","Le cahier est neuf."],
  ["fácil · difícil","/ˈfaθil · diˈfiθil/","facile · difficile","Finissent par une consonne : invariables en genre ; pluriel : fáciles, difíciles. Accents écrits.","🧩","La lección es difícil.","La leçon est difficile."],
  ["rápido / rápida","/ˈrrapiðo · ˈrrapiða/","rapide","Accent écrit : RÁ-pi-do. r initiale roulée.","⚡","El coche es rápido.","La voiture est rapide."],
  ["cómodo / cómoda","/ˈkomoðo · ˈkomoða/","confortable","Accent écrit : CÓ-mo-do (jamais « comodo »).","🛋️","La silla es cómoda.","La chaise est confortable."],
  ["moderno / moderna","/moˈðeɾno · moˈðeɾna/","moderne","Mot transparent pour un francophone.","🏢","La ciudad es moderna.","La ville est moderne."]
 ]),
 blk("Articles, pronoms et verbes clés", [
  ["el, la, los, las","/el la los las/","le, la, les (articles définis)","el + nom masc. sing. ; la + fém. sing. ; los + masc. plur. ; las + fém. plur.","🔖","El libro y la mesa.","Le livre et la table."],
  ["un, una, unos, unas","/un ˈuna ˈunos ˈunas/","un, une, des (articles indéfinis)","Contrairement au français, « des » a deux formes : unos / unas. unos = quelques, des.","🔖","Tengo unas sillas nuevas.","J'ai des chaises neuves."],
  ["yo · tú · él · ella","/ʝo tu el ˈeʝa/","je · tu · il · elle","Les pronoms sujets sont presque toujours omis : la terminaison suffit. tú (accent) = toi.","👤","Yo soy alta y tú eres alto.","Moi je suis grande et toi tu es grand."],
  ["usted · ustedes","/usˈteð · usˈteðes/","vous (politesse, 1 pers. · plusieurs)","Se conjuguent comme él/ella et ellos/ellas : usted es / está / tiene ; ustedes son / están / tienen.","🎩","¿Cómo está usted?","Comment allez-vous ?"],
  ["nosotros/as · vosotros/as · ellos/ellas","/noˈsotɾos boˈsotɾos ˈeʝos/","nous · vous (amical, Espagne) · ils/elles","vosotros = Espagne uniquement (amis, famille). Amérique latine : ustedes pour tous les « vous ».","👥","Nosotros somos amigos.","Nous sommes amis."],
  ["ser","/seɾ/","être (identité, origine, caractère)","soy, eres, es, somos, sois, son.","🪪","Soy Ana.","Je suis Ana."],
  ["estar","/esˈtaɾ/","être (lieu, état du moment)","estoy, estás, está, estamos, estáis, están.","📍","Estoy en Madrid.","Je suis à Madrid."],
  ["tener","/teˈneɾ/","avoir","tengo, tienes, tiene, tenemos, tenéis, tienen.","🎒","Tengo un cuaderno.","J'ai un cahier."]
 ]),
 blk("Petits mots utiles", [
  ["muy","/mwi/","très","Devant un adjectif, sans accord : muy alta, muy altos.","➕","Soy muy feliz.","Je suis très heureux."],
  ["pero","/ˈpeɾo/","mais","Un seul r tapé (≠ perro, le chien).","↔️","Soy bajo, pero soy rápido.","Je suis petit, mais je suis rapide."],
  ["porque","/ˈpoɾke/","parce que","qu = k : POR-ke.","💬","Estoy contento porque tengo un libro.","Je suis content parce que j'ai un livre."],
  ["hoy","/oj/","aujourd'hui","h muette. Mot-clé de estar : hoy estoy…","📆","Hoy estoy cansado.","Aujourd'hui je suis fatigué."],
  ["sí / no","/si · no/","oui / non","sí avec accent = oui ; si sans accent = si. « no » se place avant le verbe : no soy, no estoy, no tengo.","✅","No, no estoy cansado.","Non, je ne suis pas fatigué."],
  ["gracias","/ˈɡɾaθjas/","merci","c ici = th devant i : GRA-thias (Espagne).","🙏","Estoy bien, gracias.","Je vais bien, merci."]
 ]),
 blk("Bonus : 10 expressions utiles et neutres", [
  ["¡Vale!","/ˈbale/","d'accord ! ok !","Très courant en Espagne, poli avec tout le monde. En Amérique latine : « ¡De acuerdo! ».","👌","¿Tienes un lápiz? — Sí. — ¡Vale!","Tu as un crayon ? — Oui. — D'accord !"],
  ["¡Qué bien!","/ke ˈβjen/","super ! c'est bien !","¡Qué + adjectif ou adverbe! = exclamation : ¡Qué bien! ¡Qué difícil! ¡Qué grande!","🎉","Tengo un libro nuevo. — ¡Qué bien!","J'ai un livre neuf. — Super !"],
  ["¡Mucho gusto!","/ˈmutʃo ˈɣusto/","enchanté(e) !","Formule à retenir, neutre : un homme comme une femme peut la dire.","🤝","Hola, soy Ana. — ¡Mucho gusto!","Salut, je suis Ana. — Enchanté !"],
  ["¡Encantado! / ¡Encantada!","/enkanˈtaðo · enkanˈtaða/","ravi(e) !","S'accorde avec celui qui parle : un homme dit encantado, une femme encantada.","😊","Soy Pedro. — ¡Encantada!","Je suis Pedro. — Enchantée !"],
  ["De nada","/de ˈnaða/","de rien","Réponse à « gracias ». Identique en tutoiement et en vouvoiement.","💐","Gracias. — De nada.","Merci. — De rien."],
  ["¿Cómo estás? / ¿Cómo está usted?","/ˈkomo esˈtas · ˈkomo esˈta usˈteð/","comment vas-tu ? / comment allez-vous ?","Tú : estás. Usted : está. Réponse : « Estoy bien, gracias. ¿Y tú ? / ¿Y usted ? ».","💬","¿Cómo está usted? — Muy bien, gracias.","Comment allez-vous ? — Très bien, merci."],
  ["¡Perdona! / ¡Perdone!","/peɾˈðona · peɾˈðone/","pardon ! / excusez-moi !","Tú : perdona. Usted : perdone. On s'en sert pour s'excuser ou pour attirer l'attention poliment.","🙇","¡Perdone, señora!","Excusez-moi, madame !"],
  ["¡Claro!","/ˈklaɾo/","bien sûr !","Neutre et très fréquent. « ¡Claro que sí! » = mais oui !","💯","¿Estás bien? — ¡Claro!","Tu vas bien ? — Bien sûr !"],
  ["¡Qué pena!","/ke ˈpena/","quel dommage !","Réaction compatissante : « pena » = la peine. Autre : « ¡Qué lástima! ».","😔","Estoy enfermo. — ¡Qué pena!","Je suis malade. — Quel dommage !"],
  ["¡Buen provecho!","/bwem pɾoˈβetʃo/","bon appétit !","Se dit à celui qui mange, entre amis comme à un inconnu. Pas de différence tú / usted.","🍽️","¡Buen provecho, señor!","Bon appétit, monsieur !"]
 ])
);
LESSONS_ES[200] = {
 code:"A1.0", level:"A1",
 VOCAB: V,
 MEM_WORDS: __esIdx(V, ["la j : jamón","c devant e, i : cero","rr et r : perro / pero","cansado / cansada","tener hambre","fácil · difícil","ser","estar","tener","usted · ustedes"]),
 MINI_CHECKS: [
  {q:"« Je suis fatiguée aujourd'hui. »", opts:["Soy cansada hoy.","Estoy cansada hoy.","Tengo cansada hoy."], correct:1, fb:"La fatigue du jour est un état passager : ESTAR (estoy), et cansada s'accorde avec une femme."},
  {q:"« J'ai faim. »", opts:["Soy hambre.","Estoy hambre.","Tengo hambre."], correct:2, fb:"Les sensations (faim, soif, froid, chaud, sommeil, peur) se disent avec TENER : tengo hambre."},
  {q:"« Le chat est noir. »", opts:["El gato es negro.","El gato es negra.","La gato es negro."], correct:0, fb:"gato est masculin : el gato, et l'adjectif s'accorde : negro. Couleur = caractéristique de l'objet : ser."},
  {q:"Pluriel de « el papel » :", opts:["los papeles","los papels","las papeles"], correct:0, fb:"Mot terminé par une consonne : on ajoute -es (papel → papeles) et l'article passe à « los »."},
  {q:"Comment se prononce la lettre j dans « jamón » ?", opts:["comme le j français","comme un r rauque (kh)","comme un y"], correct:1, fb:"j = kh, un son rauque au fond de la gorge : kha-MÓN."},
  {q:"À un inconnu plus âgé, tu dis…", opts:["¿Cómo estás?","¿Cómo está usted?","¿Cómo estáis?"], correct:1, fb:"Inconnu âgé = usted, qui se conjugue comme él/ella : está. (estáis = vosotros, plusieurs amis en Espagne.)"},
  {q:"Féminin de « grande » :", opts:["una casa grande","una casa granda","una casa grando"], correct:0, fb:"Les adjectifs en -e ne changent pas au féminin : un coche grande, una casa grande."},
  {q:"« Soy aburrido » signifie…", opts:["Je m'ennuie.","Je suis ennuyeux."], correct:1, fb:"Avec SER, c'est le caractère : je suis quelqu'un d'ennuyeux. Pour dire « je m'ennuie », on dit « estoy aburrido »."}
 ],
 ROUNDS: [
  __esR("Estoy cansada hoy.","Je suis fatiguée aujourd'hui."),
  __esR("Tengo un libro rojo.","J'ai un livre rouge."),
  __esR("La mesa es blanca.","La table est blanche."),
  __esR("¿Cómo estás?","Comment vas-tu ?"),
  __esR("¿Cómo está usted?","Comment allez-vous ?"),
  __esR("Los alumnos están contentos.","Les élèves sont contents."),
  __esR("Las sillas son cómodas.","Les chaises sont confortables."),
  __esR("Tengo hambre y tengo sed.","J'ai faim et j'ai soif."),
  __esR("¿Es usted de Madrid?","Êtes-vous de Madrid ?"),
  __esR("Marta es alta y muy simpática.","Marta est grande et très sympathique."),
  __esR("¿Dónde está la llave?","Où est la clé ?"),
  __esR("El perro es grande, pero es simpático.","Le chien est grand, mais il est sympathique."),
  __esR("Tenemos dos mochilas azules.","Nous avons deux sacs à dos bleus.")
 ],
 QUIZ: [
  {cat:"ecrit", q:"Marta ___ alta. (caractéristique stable)", opts:["son","es","está"], correct:1, why:"La taille est une caractéristique stable : SER. Marta = 3e personne du singulier : es."},
  {cat:"ecrit", q:"Hoy Marta ___ cansada.", opts:["es","está","tiene"], correct:1, why:"« hoy » + fatigue = état passager : ESTAR → está."},
  {cat:"ecrit", q:"Nosotros ___ veinte años.", opts:["somos","estamos","tenemos"], correct:2, why:"L'âge se dit avec TENER : tenemos veinte años."},
  {cat:"ecrit", q:"¿Dónde ___ las llaves?", opts:["son","están","tienen"], correct:1, why:"Un lieu se dit avec ESTAR. Sujet pluriel (las llaves) → están."},
  {cat:"ecrit", q:"Les chaises sont confortables.", opts:["Las sillas son cómodas.","Los sillas son cómodos.","Las sillas es cómodas."], correct:0, why:"silla est féminin : las sillas ; l'adjectif s'accorde : cómodas ; sujet pluriel : son."},
  {cat:"ecrit", q:"Pluriel de « una flor amarilla » :", opts:["unas flores amarillas","unas flors amarillas","unos flores amarillos"], correct:0, why:"una → unas ; flor (consonne) → flores ; amarilla → amarillas. Tout s'accorde."},
  {cat:"ecrit", q:"Quelle phrase est correcte ?", opts:["Los perros son pequeños.","Los perro son pequeño.","Los perros son pequeño."], correct:0, why:"Le pluriel doit apparaître sur l'article, sur le nom ET sur l'adjectif."},
  {cat:"ecrit", q:"Marta es una chica ___ . (alto)", opts:["alto","alta","altas"], correct:1, why:"alto se rapporte à « chica » (féminin singulier) : alta."},
  {cat:"ecrit", q:"Pedro y Ana están ___ .", opts:["cansada","cansados","cansadas"], correct:1, why:"Un groupe mixte s'accorde au masculin pluriel : cansados."},
  {cat:"ecrit", q:"Las chicas son ___ . (inteligente)", opts:["inteligente","inteligentes","inteligentas"], correct:1, why:"Un adjectif en -e ne change pas au féminin, mais prend -s au pluriel : inteligentes."},
  {cat:"ecrit", q:"¿Ustedes ___ colombianos ?", opts:["son","sois","eres"], correct:0, why:"ustedes se conjugue comme ellos : son. « Sois » va avec vosotros."},
  {cat:"ecrit", q:"« Je suis nerveux de nature. »", opts:["Soy nervioso.","Estoy nervioso."], correct:0, why:"Caractère permanent : SER. « Estoy nervioso » = je suis nerveux en ce moment."},
  {cat:"ecrit", q:"Elle a faim.", opts:["Tiene hambre.","Es hambre.","Está hambre."], correct:0, why:"Les sensations se disent avec TENER : tiene hambre."},
  {cat:"ecrit", q:"Comment se dit « 15 » ?", opts:["quince","cinco","cincuenta"], correct:0, why:"quince = 15 ; cinco = 5 ; cincuenta = 50."},
  {cat:"oral", audio:"Hoy estoy muy cansado.", q:"Écoute : comment va la personne ?", opts:["Fatiguée","Contente","Malade"], correct:0, why:"« cansado » = fatigué. Le verbe estoy dit que c'est un état du jour."},
  {cat:"oral", audio:"Tengo quince años.", q:"Écoute : quel âge a la personne ?", opts:["15 ans","50 ans","14 ans"], correct:0, why:"quince = 15. Ne confonds pas avec cincuenta (50), qui est plus long."},
  {cat:"oral", audio:"¿Cómo está usted?", q:"Écoute : la question est…", opts:["informelle (tutoiement)","formelle (vouvoiement)"], correct:1, why:"« está usted » = vouvoiement. Au tutoiement : ¿Cómo estás?"},
  {cat:"oral", audio:"El perro es negro, pero el gato es blanco.", q:"Écoute : de quelle couleur est le chat ?", opts:["Noir","Blanc","Rouge"], correct:1, why:"« el perro es negro » : le chien est noir ; « el gato es blanco » : le chat est blanc."},
  {cat:"oral", audio:"Nosotros somos de Colombia, pero estamos en Madrid.", q:"Écoute : où sont-ils en ce moment ?", opts:["En Colombie","À Madrid","À Barcelone"], correct:1, why:"Origine = somos de Colombia (ser) ; lieu actuel = estamos en Madrid (estar)."},
  {cat:"oral", audio:"Tengo hambre y tengo sed.", q:"Écoute : que ressent la personne ?", opts:["Faim et soif","Froid et chaud","Fatigue et maladie"], correct:0, why:"hambre = faim, sed = soif ; les sensations se disent avec tener."},
  {cat:"comprehension", passage:"Hola, soy Lucía. Soy mexicana, pero estoy en Barcelona. Tengo veintidós años. Hoy estoy muy contenta porque tengo una clase fácil.", q:"Quelle est la nationalité de Lucía ?", opts:["Espagnole","Mexicaine","Française"], correct:1, why:"« Soy mexicana » : nationalité = identité, donc ser. Elle est à Barcelone seulement pour le moment."},
  {cat:"comprehension", passage:"Hola, soy Lucía. Soy mexicana, pero estoy en Barcelona. Tengo veintidós años. Hoy estoy muy contenta porque tengo una clase fácil.", q:"Pourquoi Lucía est-elle contente aujourd'hui ?", opts:["Elle a une classe facile","Elle est fatiguée","Elle est malade"], correct:0, why:"« porque tengo una clase fácil » : parce qu'elle a une classe facile."},
  {cat:"comprehension", passage:"Marta es una chica alta y simpática. Hoy está cansada porque tiene dos clases difíciles.", q:"Quel verbe montre que la fatigue de Marta est passagère ?", opts:["es","está","tiene"], correct:1, why:"« está cansada » : ESTAR pour un état du jour. « es alta » = caractéristique stable."},
  {cat:"comprehension", passage:"Marta es una chica alta y simpática. Hoy está cansada porque tiene dos clases difíciles.", q:"Pourquoi Marta est-elle fatiguée ?", opts:["Elle a deux classes difficiles","Elle est malade","Elle a faim"], correct:0, why:"« porque tiene dos clases difíciles » : tener + possession."},
  {cat:"comprehension", passage:"Señor Ruiz: Buenos días, señora. ¿Cómo está usted? — Señora López: Estoy bien, gracias. ¿Y usted? — Señor Ruiz: Muy bien, gracias. ¿Tiene usted un cuaderno azul? — Señora López: Sí, claro.", q:"Quel indice montre que la conversation est formelle ?", opts:["« Buenos días » seulement","« usted » avec está / tiene","« gracias »"], correct:1, why:"usted + verbe à la 3e personne (está, tiene) = vouvoiement."},
  {cat:"comprehension", passage:"Señor Ruiz: Buenos días, señora. ¿Cómo está usted? — Señora López: Estoy bien, gracias. ¿Y usted? — Señor Ruiz: Muy bien, gracias. ¿Tiene usted un cuaderno azul? — Señora López: Sí, claro.", q:"De quelle couleur est le cahier demandé ?", opts:["Rouge","Bleu","Vert"], correct:1, why:"« un cuaderno azul » : azul = bleu."}
 ],
 PRON_VERBS: [
  {en:"Hola, ¿cómo estás?", fr:"Salut, comment vas-tu ? (h muette : O-la ; accent sur CÓ-mo)"},
  {en:"El jamón es rosa.", fr:"Le jambon est rose. (j = kh : kha-MÓN)"},
  {en:"La ciudad es grande.", fr:"La ville est grande. (c = th : thiu-DAD ; d final très doux)"},
  {en:"El zapato es blanco.", fr:"La chaussure est blanche. (z = th : tha-PA-to)"},
  {en:"La llave es pequeña.", fr:"La clé est petite. (ll = y : YA-ve ; ñ = gn : pe-KE-gna)"},
  {en:"El perro es negro, pero es simpático.", fr:"Le chien est noir, mais il est sympathique. (rr roulé : PE-rro ≠ PE-ro)"},
  {en:"La guitarra es roja.", fr:"La guitare est rouge. (gui : u muet ; r roulé au début de roja)"},
  {en:"El pingüino es simpático.", fr:"Le pingouin est sympathique. (güi = gwi : pin-GWI-no)"},
  {en:"Tengo hambre y tengo sed.", fr:"J'ai faim et j'ai soif. (h muette : AM-bre)"},
  {en:"La ventana es verde y el vaso es azul.", fr:"La fenêtre est verte et le verre est bleu. (v = b : ben-TA-na, BA-so)"}
 ],
 READING: [
  "¡Hola! Soy Lucía y tengo veintidós años.",
  "Soy mexicana, pero estoy en Barcelona.",
  "Soy estudiante y tengo una mochila azul y un cuaderno rojo.",
  "El piso es pequeño, pero es muy luminoso.",
  "Hoy estoy muy contenta porque tengo una clase fácil.",
  "El profesor es alto y la profesora es joven.",
  "Los alumnos son simpáticos, pero hoy están cansados.",
  "Yo no estoy cansada, pero tengo hambre y tengo sed.",
  "Y tú, ¿cómo estás hoy?",
  "Y usted, señor, ¿cómo está?"
 ],
 GLOSS: [
  {en:"el piso", fr:"l'appartement (Espagne) — en Amérique latine : el departamento"},
  {en:"luminoso", fr:"lumineux, clair (mot transparent)"},
  {en:"porque", fr:"parce que"},
  {en:"estudiante", fr:"étudiant(e) : un mot en -e, identique au masculin et au féminin"},
  {en:"muy", fr:"très (invariable)"},
  {en:"hoy", fr:"aujourd'hui"},
  {en:"el señor", fr:"monsieur : la politesse va avec usted"},
  {en:"no estoy cansada", fr:"je ne suis pas fatiguée : « no » se place avant le verbe"}
 ],
 GRAMMAR1: {
  heading:"SER, ESTAR, TENER : les trois verbes pour dire « je suis » et « j'ai »",
  lede:"Le français n'a qu'un seul verbe « être ». L'espagnol en a deux : SER (ce que c'est : identité, origine, caractère) et ESTAR (où et comment on est en ce moment). À côté, TENER (avoir) sert pour l'âge, la possession et les sensations. Ce sont trois verbes irréguliers : on les apprend par cœur, une fois pour toutes.",
  conj:[
   ["yo →","soy · estoy · tengo","Soy Ana. Estoy cansada. Tengo un libro."],
   ["tú →","eres · estás · tienes","¿Eres de Madrid? ¿Cómo estás? ¿Tienes un lápiz?"],
   ["él, ella, usted →","es · está · tiene","Es alto. ¿Cómo está usted? ¿Tiene usted un lápiz?"],
   ["nosotros/as →","somos · estamos · tenemos","Somos amigos. Estamos contentos. Tenemos sed."],
   ["vosotros/as →","sois · estáis · tenéis","¿Sois de Sevilla? ¿Estáis bien? ¿Tenéis hambre?"],
   ["ellos, ellas, ustedes →","son · están · tienen","Son jóvenes. ¿Cómo están ustedes? Tienen frío."]
  ],
  ruleHtml:"📖 <b>SER</b> = ce que c'est : <b>identité</b> (Soy Ana), <b>origine</b> (Soy de Lyon), <b>profession</b> (Es profesor), <b>caractère et physique stable</b> (Soy alto, es simpático), <b>couleur, taille, qualité</b> d'un objet (El libro es rojo). <b>ESTAR</b> = comment et où : <b>lieu</b> (Estoy en Madrid. La llave está en la mesa), <b>état du moment, santé, émotion</b> (Estoy cansado, está enfermo, estamos contentos). <b>TENER</b> = <b>âge</b> (Tengo veinte años), <b>possession</b> (Tengo un libro), <b>sensations</b> (tengo hambre, sed, frío, calor, sueño, miedo).<br><br>👥 <b>Tutoiement ET vouvoiement</b> : tú → <b>¿Cómo estás? ¿Eres de Madrid? ¿Tienes un lápiz?</b> · usted → <b>¿Cómo está usted? ¿Es usted de Madrid? ¿Tiene usted un lápiz?</b> usted se conjugue comme él/ella, ustedes comme ellos/ellas. Pluriel amical : <b>vosotros</b> (Espagne : sois, estáis, tenéis) ; <b>ustedes</b> (Amérique latine pour tous les « vous » : son, están, tienen).<br><br>⚠️ Tiens compte des détails : accents écrits sur <b>estás, está, estáis, están</b> (ils les distinguent de « esta », ce/cette) ; <b>tener</b> change : tengo, <b>tienes, tiene, tienen</b> mais tenemos, tenéis ; le pronom sujet est presque toujours omis ; la négation se place avant le verbe : <b>no soy, no estoy, no tengo</b>. Les phrases de la leçon s'enchaînent ainsi : <b>Soy Lucía, soy mexicana, estoy en Barcelona, tengo veintidós años.</b>",
  dialogueLede:"Deux amis se retrouvent (tutoiement) :",
  dialogue:[
   {who:"them", en:"¡Hola, Luis! ¿Cómo estás?", fr:"Salut, Luis ! Comment vas-tu ?"},
   {who:"you", en:"Estoy bien, gracias, pero estoy cansado. ¿Y tú?", fr:"Je vais bien, merci, mais je suis fatigué. Et toi ?"},
   {who:"them", en:"Estoy contenta porque tengo un libro nuevo.", fr:"Je suis contente parce que j'ai un livre neuf."},
   {who:"you", en:"¡Qué bien! ¿Eres de Madrid?", fr:"Super ! Tu es de Madrid ?"},
   {who:"them", en:"No, soy de Sevilla. ¿Tienes hambre?", fr:"Non, je suis de Séville. Tu as faim ?"},
   {who:"you", en:"Sí, tengo hambre. ¡Vale!", fr:"Oui, j'ai faim. D'accord !"}
  ],
  whyLabel:"Pourquoi deux verbes « être » ? Soy feliz ≠ estoy feliz",
  whyText:"Le français dit « je suis nerveux » pour deux situations très différentes. L'espagnol t'oblige à choisir. <b>SER</b> décrit ce qui définit la personne (« c'est comme ça »), <b>ESTAR</b> décrit comment elle se trouve maintenant (« en ce moment »). Exemples : <b>soy feliz</b> = je suis quelqu'un d'heureux, de nature ; <b>estoy feliz</b> = je suis heureux en ce moment, après une bonne nouvelle. <b>Soy nervioso</b> = je suis de nature nerveux ; <b>estoy nervioso</b> = je suis nerveux aujourd'hui, avant un examen. Et le cas qui change le SENS : <b>soy aburrido</b> = je suis ennuyeux ; <b>estoy aburrido</b> = je m'ennuie. <b>Test pratique</b> : ajoute « aujourd'hui / en ce moment » : si la phrase reste logique → estar ; si elle sonne bizarre → ser. Pour la faim, la soif, le froid ou l'âge, oublie les deux : c'est tener (tengo hambre, tengo veinte años), comme le français « avoir faim, avoir vingt ans »."
 },
 GRAMMAR2: {
  heading:"Genre, articles, pluriel et accords : tout s'accorde",
  dialogueLede:"Dans un bureau, un directeur et une nouvelle employée (vouvoiement) :",
  dialogue:[
   {who:"them", en:"Buenos días. ¿Cómo está usted? ¿Está nerviosa?", fr:"Bonjour. Comment allez-vous ? Vous êtes nerveuse ?"},
   {who:"you", en:"Buenos días. Estoy bien, gracias, pero estoy nerviosa.", fr:"Bonjour. Je vais bien, merci, mais je suis nerveuse."},
   {who:"them", en:"Tranquila. La mesa es nueva y las sillas son cómodas.", fr:"Du calme. La table est neuve et les chaises sont confortables."},
   {who:"you", en:"¡Qué bien! ¿Tiene usted un bolígrafo azul?", fr:"Super ! Avez-vous un stylo bleu ?"},
   {who:"them", en:"Sí, claro. Tengo dos.", fr:"Oui, bien sûr. J'en ai deux."}
  ],
  ruleHtml:"💭 <b>1. Le genre.</b> Les noms en <b>-o</b> sont en général masculins (el libro), ceux en <b>-a</b> féminins (la mesa). Aussi féminins : les noms en <b>-dad / -ción</b> (la ciudad, la lección). Exceptions à retenir : <b>la mano</b>, el día, el mapa. Pour les personnes : el alumno / la alumna, el profesor / la profesora (on ajoute -a), el/la estudiante (seul l'article change). Apprends toujours le nom <b>avec</b> son article.<br><br>💭 <b>2. Les articles.</b> Définis : <b>el, la, los, las</b>. Indéfinis : <b>un, una, unos, unas</b> (« des » a un masculin ET un féminin, contrairement au français).<br><br>💭 <b>3. Le pluriel.</b> Voyelle non accentuée → <b>-s</b> (casa → casas). Consonne → <b>-es</b> (papel → papeles, ciudad → ciudades). -z → <b>-ces</b> (lápiz → lápices). -ción perd l'accent (lección → lecciones). Adjectifs : même règle (fácil → fáciles, azul → azules, feliz → felices).<br><br>💭 <b>4. L'adjectif.</b> Il se place <b>après</b> le nom et s'accorde en genre ET en nombre : <b>un libro rojo, unos libros rojos, una mesa roja, unas mesas rojas</b>. Les adjectifs en <b>-e</b> ou en consonne n'ont qu'une forme au féminin : un coche grande / una casa grande, un chico inteligente / una chica inteligente, azul, joven, feliz, fácil. Avec ser/estar, il s'accorde avec le sujet : <b>Marta es alta, Marta está cansada, los chicos están cansados</b>. Groupe mixte : le masculin l'emporte (Pedro y Ana están cansados).<br><br>👥 <b>Formel et informel</b> : l'accord suit la personne qui parle ou dont on parle, pas le tutoiement : « Estoy cansado » (homme) / « Estoy cansada » (femme), que ce soit avec tú ou avec usted : <b>¿Está usted cansada, señora?</b> / <b>¿Estás cansada, Ana?</b>",
  whyLabel:"Pourquoi tout s'accorde-t-il en espagnol ?",
  whyText:"En français, l'accord existe, mais à l'oral il est souvent invisible : « rouge / rouges » se prononcent pareil. En espagnol, la terminaison <b>s'entend</b> : -o, -a, -os, -as. L'accord devient un fil qui relie tous les mots de la phrase : <b>las mesas rojas</b> porte quatre fois la même marque (-as). C'est aussi ce qui permet d'omettre les pronoms et d'avoir des phrases courtes. Méthode : 1) trouve le nom, 2) note son genre et son nombre, 3) donne la même terminaison à l'article et à l'adjectif. Deux pièges classiques : un adjectif oublié au singulier (« los perros son pequeño ») et un adjectif qui ne s'accorde pas avec la bonne personne (« Marta es una chica alto »)."
 },
 DRILLS: [
  {type:"fill", text:"Yo ___ feliz. (de nature : ser)", answers:["soy","Soy"], why:"Caractère → ser : yo soy."},
  {type:"fill", text:"Tú ___ cansado hoy. (état du moment)", answers:["estás","Estás"], why:"État du jour → estar : tú estás. L'accent écrit est obligatoire."},
  {type:"fill", text:"Ella ___ veinte años. (tener)", answers:["tiene","Tiene"], why:"L'âge → tener : ella tiene (e → ie)."},
  {type:"fill", text:"Nosotros ___ contentos hoy. (estar)", answers:["estamos","Estamos"], why:"nosotros → estamos : état du moment."},
  {type:"fill", text:"Vosotros ___ de Madrid. (ser, origine)", answers:["sois","Sois"], why:"vosotros → sois (Espagne)."},
  {type:"fill", text:"Ustedes ___ alumnos. (ser)", answers:["son","Son"], why:"ustedes se conjugue comme ellos : son."},
  {type:"fill", text:"Usted ___ un libro azul. (tener)", answers:["tiene","Tiene"], why:"usted se conjugue comme él/ella : tiene."},
  {type:"fill", text:"Ellos ___ en la clase. (lieu : estar)", answers:["están","Están"], why:"Un lieu → estar. Ellos → están, avec accent écrit."},
  {type:"fill", text:"Yo ___ hambre. (tener)", answers:["tengo","Tengo"], why:"Les sensations → tener : tengo hambre."},
  {type:"fill", text:"Madrid ___ la capital de España. (ser)", answers:["es","Es"], why:"Une identité géographique fixe → ser : Madrid es la capital."},
  {type:"fill", text:"El libro ___ en la mesa. (lieu : estar)", answers:["está","Está"], why:"La position d'un objet → estar : el libro está en la mesa."},
  {type:"fill", text:"María ___ alta. (ser)", answers:["es","Es"], why:"Caractéristique physique stable → ser : es alta."},
  {type:"fill", text:"Una mesa roj___ .", answers:["a"], why:"mesa est féminin : roja."},
  {type:"fill", text:"Los coches rápid___ .", answers:["os"], why:"Masculin pluriel : rápidos."},
  {type:"fill", text:"Unas flores amarill___ .", answers:["as"], why:"Féminin pluriel : amarillas (et non « amarijas » : ce mot n'existe pas)."},
  {type:"fill", text:"La lección difícil → Las ___ difíciles.", answers:["lecciones"], why:"-ción → -ciones : lección → lecciones (l'accent disparaît)."},
  {type:"fill", text:"El coche rápido → Los ___ rápidos.", answers:["coches"], why:"coche finit par une voyelle : coches ; l'article passe à « los »."},
  {type:"fill", text:"El papel blanco → Dos ___ blancos.", answers:["papeles"], why:"papel finit par une consonne : papeles."},
  {type:"choice", q:"Corrige : « Tengo un blusas azul. » (la blusa = le chemisier)", opts:["Tengo una blusa azul.","Tengo un blusa azul."], correct:0, why:"blusa est féminin : una blusa azul (azul est invariable en genre)."},
  {type:"choice", q:"Quelle phrase corrige « Los perro son pequeño » ?", opts:["Los perros son pequeños.","Los perros son pequeño."], correct:0, why:"Le pluriel se marque sur l'article, le nom et l'adjectif."},
  {type:"choice", q:"Marta es una chica muy ___ . (alto)", opts:["alto","alta"], correct:1, why:"alto se rapporte à chica : alta. (Dans le texte source, la deuxième erreur est « cansado » : Marta est cansada.)"},
  {type:"choice", q:"« Je suis heureux ce matin, après une bonne nouvelle. »", opts:["Soy feliz.","Estoy feliz."], correct:1, why:"État passager lié à un moment précis : estar."},
  {type:"choice", q:"« J'ai peur. »", opts:["Tengo miedo.","Soy miedo."], correct:0, why:"Les sensations et émotions-sensations se disent avec tener : tengo miedo."},
  {type:"choice", q:"Pour demander à un directeur « Comment allez-vous ? » :", opts:["¿Cómo estás?","¿Cómo está usted?"], correct:1, why:"Un directeur = usted : está usted."},
  {type:"choice", q:"Pour une étudiante, on dit :", opts:["la estudiante","la estudianta"], correct:0, why:"estudiante finit en -e : une seule forme ; seul l'article change."},
  {type:"choice", q:"Carlos ___ enfermo hoy.", opts:["es","está"], correct:1, why:"La maladie est un état passager : está enfermo."}
 ],
 ANNOTATED: {
  title:"Lucía se presenta",
  intro:"Un petit texte pour t'entraîner à lire. Touche chaque mot pour voir sa nature et sa traduction — et repère les trois verbes de la leçon : soy, estoy, tengo.",
  sentences:[
   {fr:"Salut, je suis Lucía et j'ai vingt-deux ans.", tokens:[
    {w:"Hola", tag:"interjection", fr:"salut", tip:"La h est muette : O-la."},
    {w:"soy", tag:"verbe", info:"ser · présent · yo", fr:"je suis", tip:"Ser pour l'identité : pas besoin de « yo »."},
    {w:"Lucía", tag:"nom propre", fr:"Lucía"},
    {w:"y", tag:"conjonction", fr:"et"},
    {w:"tengo", tag:"verbe", info:"tener · présent · yo", fr:"j'ai", tip:"L'âge se dit avec tener."},
    {w:"veintidós", tag:"adjectif", info:"nombre", fr:"vingt-deux", tip:"21-29 en un seul mot ; accent écrit sur le ó."},
    {w:"años", tag:"nom", info:"masc. plur.", fr:"ans"}
   ]},
   {fr:"Je suis mexicaine, mais je suis à Barcelone.", tokens:[
    {w:"Soy", tag:"verbe", info:"ser · présent · yo", fr:"je suis"},
    {w:"mexicana", tag:"adjectif", info:"fém. sing.", fr:"mexicaine", tip:"Nationalité = identité : ser. -a car Lucía est une femme."},
    {w:"pero", tag:"conjonction", fr:"mais"},
    {w:"estoy", tag:"verbe", info:"estar · présent · yo", fr:"je suis", tip:"Estar pour le lieu."},
    {w:"en", tag:"préposition", fr:"à"},
    {w:"Barcelona", tag:"nom propre", fr:"Barcelone", tip:"c = th : bar-the-LO-na (Espagne)."}
   ]},
   {fr:"Aujourd'hui je suis très contente parce que j'ai une classe facile.", tokens:[
    {w:"Hoy", tag:"adverbe", fr:"aujourd'hui", tip:"Mot-clé de estar : état du jour."},
    {w:"estoy", tag:"verbe", info:"estar · présent · yo", fr:"je suis"},
    {w:"muy", tag:"adverbe", fr:"très"},
    {w:"contenta", tag:"adjectif", info:"fém. sing.", fr:"contente", tip:"-a : Lucía est une femme."},
    {w:"porque", tag:"conjonction", fr:"parce que"},
    {w:"tengo", tag:"verbe", info:"tener · présent · yo", fr:"j'ai"},
    {w:"una", tag:"déterminant", info:"article indéfini · fém. sing.", fr:"une"},
    {w:"clase", tag:"nom", info:"fém. sing.", fr:"classe"},
    {w:"fácil", tag:"adjectif", info:"invariable en genre", fr:"facile", tip:"Finit par une consonne : une seule forme pour le masculin et le féminin."}
   ]},
   {fr:"Et vous, monsieur, comment allez-vous ?", tokens:[
    {w:"Y", tag:"conjonction", fr:"et"},
    {w:"usted", tag:"pronom sujet", info:"vouvoiement", fr:"vous (politesse)"},
    {w:"señor", tag:"nom", info:"masc. sing.", fr:"monsieur"},
    {w:"¿cómo", tag:"adverbe", info:"interrogatif", fr:"comment", tip:"Accent écrit : cómo."},
    {w:"está?", tag:"verbe", info:"estar · présent · usted", fr:"allez-vous", tip:"usted se conjugue comme él/ella : está (avec accent)."}
   ]}
  ]
 },
 CULTURE_NOTE: {icon:"🤝", title:"Culture, 10 expressions utiles et fiche récap (A1.0)",
  html:"<b>🤝 Culture — tú ou usted ?</b> En Espagne on tutoie vite (collègues, voisins, jeunes). Avec un inconnu âgé, un client, un directeur : <b>usted</b>. En cas de doute, usted est toujours poli. Pour saluer : la bise en Espagne entre amis, la poignée de main dans un cadre pro. Prononciation : en Espagne, c et z = « th » ; en Amérique latine, c et z = « s » (<i>seseo</i>). Les deux sont corrects.<br><br><b>🧰 10 expressions utiles et neutres</b><br>1. <b>¡Vale!</b> = d'accord (Espagne).<br>2. <b>¡Qué bien!</b> = super ! (¡Qué difícil!, ¡Qué grande!)<br>3. <b>¡Mucho gusto!</b> = enchanté(e), neutre.<br>4. <b>¡Encantado! / ¡Encantada!</b> = ravi(e) : l'homme dit -ado, la femme -ada.<br>5. <b>De nada</b> = de rien (réponse à « gracias »).<br>6. <b>¿Cómo estás?</b> (tú) / <b>¿Cómo está usted?</b> (usted) = comment vas-tu ? / comment allez-vous ? Réponse : « Estoy bien, gracias. ¿Y tú? / ¿Y usted? ».<br>7. <b>¡Perdona!</b> (tú) / <b>¡Perdone!</b> (usted) = pardon, excuse-moi / excusez-moi.<br>8. <b>¡Claro!</b> = bien sûr !<br>9. <b>¡Qué pena!</b> = quel dommage ! (aussi : ¡Qué lástima!)<br>10. <b>¡Buen provecho!</b> = bon appétit, à tout le monde.<br><br><b>✍️ Expression écrite — ta présentation (4 à 5 phrases)</b> Intègre : SER (nationalité ou métier), ESTAR (où tu es), TENER (âge, objets). Modèle : « Hola, soy Thomas. Soy francés y soy estudiante. Estoy en Lyon. Tengo veintiocho años y tengo un coche rojo. Hoy estoy contento. » Version formelle : « Buenos días, señora. Soy Thomas Dubois. Estoy en Lyon. ¿Cómo está usted? » Vérifie : accord des adjectifs · pas de « yo » inutile · soy / estoy / tengo bien choisis.<br><br><b>🗣️ Expression orale</b> — Question : « ¡Hola! ¿Cómo estás? » → « Hola, soy …, estoy bien, gracias, y tengo … años. ¿Y tú? » En formel : « Buenos días. ¿Cómo está usted? » → « Estoy bien, gracias. ¿Y usted? ».<br><br><b>📄 Fiche récap</b> Phonétique : h muette · j/g(e,i) = kh · qu = k · gue/gui (u muet) / güe (gwé) · c(e,i)/z = th (Espagne) · ll = y · ñ = gn · rr roulé · v = b · accent sur l'avant-dernière syllabe (voyelle, n, s) ou la dernière (autre consonne), la tilde casse la règle. Genre et accord : el/la/los/las, un/una/unos/unas, -s / -es / -ces, adjectif après le nom et accordé, -e invariable. Verbes : soy/eres/es/somos/sois/son · estoy/estás/está/estamos/estáis/están · tengo/tienes/tiene/tenemos/tenéis/tienen. Soy feliz ≠ estoy feliz ; soy aburrido ≠ estoy aburrido."},
 NEXT_PREVIEW:"A1.1 (Identidad) : te présenter — nom, âge, origine, lieu de résidence —, apprendre les nationalités (francés / francesa), épeler ton nom, poser les 4 questions d'identité et choisir entre tú et usted.",
 META:{vocabTitle:"Les bases : sons, couleurs, nombres, SER / ESTAR / TENER (A1.0)", lectureTitle:"Lucía, étudiante à Barcelone", bilanTitle:"Bravo, tu as les bases de l'espagnol !", pronLabel:"L'alphabet : h muette, j, g, qu, c/z, ll, ñ, rr, v/b", todayLede:"lire et prononcer l'espagnol, compter jusqu'à 100, dire les couleurs et les émotions, accorder noms et adjectifs, et conjuguer ser, estar et tener (tutoiement ET vouvoiement)"}
};
__esDeco(200, MAP);
})();

// A1.4 — Transporte / Direcciones : se déplacer, demander son chemin, IR, impératif tú ET usted, prépositions de lieu (leçon 204)
(function(){
var MAP = {};
function blk(name, rows){ rows.forEach(function(r){ MAP[r[0]] = [r[4], r[5], r[6]]; }); return __esB(name, rows); }
// ligne = [terme, API, français, note, emoji, exemple ES, exemple FR]
var V = [].concat(
 blk("Les moyens de transport", [
  ["el autobús","/el autoˈβus/","le bus","Accent écrit : mot terminé en -s mais accentué sur la dernière syllabe : au-to-BÚS. Pluriel : los autobuses (l'accent disparaît). Colombie : souvent « el bus » ; Mexique : « el camión » = le bus urbain.","🚌","Tomo el autobús en la plaza.","Je prends le bus sur la place."],
  ["el tren","/el tɾen/","le train","Un seul r tapé, pas de voyelle nasale : tren. Pluriel : los trenes. On dit « ir en tren ».","🚆","El tren está en la estación.","Le train est à la gare."],
  ["el coche","/el ˈkotʃe/","la voiture (Espagne)","ch = tch : KO-tche. Colombie et Amérique latine : « el carro » (Argentine, Chili : « el auto »). En voiture : en coche (Espagne), en carro (Colombie).","🚗","Mi padre tiene un coche rojo.","Mon père a une voiture rouge."],
  ["la bici (bicicleta)","/la ˈbiθi/","le vélo","« bici » est la forme courte, très courante ; « bicicleta » = forme complète (bi-thi-KLÉ-ta). Féminin : la bici. À vélo : en bici.","🚲","Voy al parque en bici.","Je vais au parc à vélo."],
  ["el taxi","/el ˈtaksi/","le taxi","Mot transparent, masculin ; pluriel : los taxis. On le prend à la « parada de taxis ».","🚕","Vamos en taxi al hotel.","Nous allons à l'hôtel en taxi."],
  ["el avión","/el aˈβjon/","l'avion","Accent écrit sur la dernière syllabe : a-VIÓN. Pluriel : aviones (l'accent disparaît). v = b.","✈️","El avión está en el aeropuerto.","L'avion est à l'aéroport."],
  ["a pie","/a ˈpje/","à pied","On dit « a pie » et jamais « en pie » : voy a pie. Tous les autres moyens de transport se construisent avec « en » (en tren, en coche).","🚶","Voy a pie a la estación.","Je vais à pied à la gare."],
  ["el metro","/el ˈmetɾo/","le métro","ME-tro, masculin. On dit « ir en metro ». Madrid, Barcelone, Mexico et Medellín ont un métro ; la station = « la estación de metro ».","🚇","Tomo el metro en la estación Sol.","Je prends le métro à la station Sol."],
  ["el tranvía","/el tɾamˈbia/","le tramway","Accent écrit sur la í : tram-BÍ-a. Le n devant b se prononce comme un m.","🚊","El tranvía va al centro.","Le tramway va au centre."],
  ["la moto","/la ˈmoto/","la moto","Forme courte de « la motocicleta ». Féminin malgré le -o final. En moto : en moto.","🏍️","Mi hermano va en moto.","Mon frère va en moto."],
  ["el barco","/el ˈbaɾko/","le bateau","Masculin. Le ferry = « el ferri ». En bateau : en barco.","🚢","El barco es grande.","Le bateau est grand."]
 ]),
 blk("La ville, la rue, la gare", [
  ["la parada","/la paˈɾaða/","l'arrêt (de bus, de taxi)","pa-RA-da. L'arrêt de bus = « la parada de autobús ». Pour le métro, on dit plutôt « la estación ».","🚏","La parada está enfrente del banco.","L'arrêt est en face de la banque."],
  ["la estación","/la estaˈθjon/","la gare, la station","es-ta-CIÓN (c = th en Espagne, s en Amérique latine). La estación de tren = la gare ; la estación de metro = la station de métro.","🚉","La estación está cerca de aquí.","La gare est près d'ici."],
  ["la calle","/la ˈkaʝe/","la rue","ll = y : KA-ye. « en la calle » = dans la rue ; « por esta calle » = par cette rue.","🛣️","Sigue recto por esta calle.","Continue tout droit par cette rue."],
  ["la esquina","/la esˈkina/","le coin, l'angle de la rue","qu = k : es-KI-na. « en la esquina » = au coin de la rue. Piège : ne se dit pas « el coin » : esquina est féminin.","📐","La farmacia está en la esquina.","La pharmacie est au coin de la rue."],
  ["el semáforo","/el seˈmaforo/","le feu tricolore","se-MÁ-fo-ro : accent écrit sur le á (mot accentué sur l'antépénultième). Pluriel : los semáforos.","🚦","Gira a la izquierda en el semáforo.","Tourne à gauche au feu."],
  ["el puente","/el ˈpwente/","le pont","ue = diphtongue : PWEN-te. Masculin ; pluriel : los puentes.","🌉","La estación está al lado del puente.","La gare est à côté du pont."],
  ["la plaza","/la ˈplaθa/","la place","z = th (Espagne) ou s (Amérique latine). « La plaza mayor » = la place principale d'une ville espagnole.","⛲","Estoy en la plaza.","Je suis sur la place."],
  ["la avenida","/la aβeˈniða/","l'avenue","a-ve-NI-da ; v = b. Une avenue est plus large qu'une « calle ».","🏙️","El museo está en la avenida.","Le musée est sur l'avenue."],
  ["el cruce","/el ˈkɾuθe/","le carrefour, le croisement","KRU-the. Vient de « cruzar » (traverser). Ne pas confondre avec « la cruz » (la croix).","🔀","En el cruce, gira a la derecha.","Au carrefour, tourne à droite."],
  ["el paso de peatones","/el ˈpaso ðe peaˈtones/","le passage piéton","On traverse la rue « por el paso de peatones ». « el peatón » = le piéton.","🚸","Cruza por el paso de peatones.","Traverse par le passage piéton."],
  ["la acera","/la aˈθeɾa/","le trottoir (Espagne)","a-THE-ra. Colombie : « el andén » ; Mexique : « la banqueta » ; Argentine : « la vereda ». Piège : en Espagne, « el andén » = le quai de gare.","🚶‍♀️","Siempre camino por la acera.","Je marche toujours sur le trottoir."],
  ["la cuadra / la manzana","/la ˈkwaðɾa · la manˈθana/","le pâté de maisons (unité de distance)","En Amérique latine on mesure la distance en « cuadras » : a dos cuadras = à deux rues d'ici. En Espagne : « la manzana » (c'est aussi la pomme !) : a dos manzanas.","🏘️","El banco está a dos cuadras.","La banque est à deux rues d'ici."],
  ["el aeropuerto","/el aeɾoˈpweɾto/","l'aéroport","a-e-ro-PUER-to : masculin, en -o (pas de « -e » final comme en français).","🛫","Voy al aeropuerto en taxi.","Je vais à l'aéroport en taxi."],
  ["el billete / el boleto","/el biˈʝete · el boˈleto/","le billet (de transport)","billete = Espagne ; boleto = Mexique et une bonne partie de l'Amérique latine ; Colombie : « el tiquete ». ll = y : bi-YE-te.","🎫","Tengo un billete de tren.","J'ai un billet de train."],
  ["la salida","/la saˈliða/","la sortie","sa-LI-da. Contraire : « la entrada » (l'entrée). Sur les panneaux : SALIDA.","🚪","La salida está a la derecha.","La sortie est à droite."]
 ]),
 blk("Verbes pour guider : l'impératif (tú / usted)", [
  ["gira / gire (girar)","/ˈxiɾa · ˈxiɾe/","tourne / tournez","Tú : gira. Usted : gire. Infinitif : girar (g = kh : khi-RAR). « Girar » = surtout l'Espagne, compris partout ; en Amérique latine on préfère « doblar ».","↪️","Gira a la izquierda. · Gire a la izquierda.","Tourne à gauche. · Tournez à gauche."],
  ["dobla / doble (doblar)","/ˈdoβla · ˈdoβle/","tourne / tournez (Amérique latine)","« doblar » = tourner en Colombie, au Mexique et dans presque toute l'Amérique latine. En Espagne il évoque plutôt « plier, doubler ». Tú : dobla. Usted : doble.","↩️","Doble a la derecha en la esquina.","Tournez à droite au coin de la rue."],
  ["sigue / siga (seguir)","/ˈsiɣe · ˈsiɣa/","continue / continuez, suis / suivez","Tú : sigue. Usted : siga. g dur : SI-ge, SI-ga (le u de « sigue » est muet). seguir est irrégulier (e devient i), mais ici on retient seulement ces deux formes.","➡️","Sigue recto. · Siga recto.","Continue tout droit. · Continuez tout droit."],
  ["toma / tome (tomar)","/ˈtoma · ˈtome/","prends / prenez","Tú : toma. Usted : tome. Verbe neutre partout (Espagne et Amérique latine) : tomar el autobús, el metro, un taxi, la primera calle.","👆","Toma el metro. · Tome el metro.","Prends le métro. · Prenez le métro."],
  ["coge / coja (coger)","/ˈkoxe · ˈkoxa/","prends / prenez (Espagne seulement)","ATTENTION : normal en Espagne (coger el autobús), mais dans une grande partie de l'Amérique latine (Mexique, Argentine, Colombie…) ce verbe a un sens vulgaire : à ÉVITER. Dis toujours « toma / tome ». Tú : coge. Usted : coja.","⚠️","Coge el autobús aquí, en Madrid.","Prends le bus ici, à Madrid."],
  ["cruza / cruce (cruzar)","/ˈkɾuθa · ˈkɾuθe/","traverse / traversez","Tú : cruza. Usted : cruce (z devient c devant e). On cruza la calle, la plaza, el puente.","🚶","Cruza la calle. · Cruce la calle.","Traverse la rue. · Traversez la rue."],
  ["baja / baje (bajar)","/ˈbaxa · ˈbaxe/","descends / descendez","j = kh : BA-kha. Bajar = descendre (du bus, du métro) : « bajar del autobús » ou « baja en la parada Sol ».","⬇️","Baja en la parada Sol. · Baje en la parada Sol.","Descends à l'arrêt Sol. · Descendez à l'arrêt Sol."],
  ["sube / suba (subir)","/ˈsuβe · ˈsuβa/","monte / montez","Tú : sube. Usted : suba (verbe en -ir : la voyelle devient -a). Subir al autobús, al tren.","⬆️","Sube al tren. · Suba al tren.","Monte dans le train. · Montez dans le train."],
  ["espera / espere (esperar)","/esˈpeɾa · esˈpeɾe/","attends / attendez","Piège : on dit « esperar el autobús » SANS « a » (le verbe contient déjà « attendre »). Esperar veut aussi dire « espérer ».","⏳","Espera el autobús aquí. · Espere el autobús aquí.","Attends le bus ici. · Attendez le bus ici."],
  ["mira / mire (mirar)","/ˈmiɾa · ˈmiɾe/","regarde / regardez","Sert aussi à attirer l'attention avant d'expliquer : « Mira, es fácil… » / « Mire, es fácil… ».","👀","Mira, la estación está allí. · Mire, la estación está allí.","Regarde, la gare est là-bas. · Regardez, la gare est là-bas."],
  ["llega / llegue (llegar)","/ˈʝeɣa · ˈʝeɣe/","arrive / arrivez","llegar a = arriver à. Au présent : llego, llegas, llega (comme hablar). Impératif usted : llegue (on ajoute « u » pour garder le g dur). ll = y : YE-ga.","🏁","Llega a la plaza y gira a la derecha. · Llegue a la plaza y gire a la derecha.","Arrive à la place et tourne à droite. · Arrivez à la place et tournez à droite."],
  ["pregunta / pregunte (preguntar)","/pɾeˈɣunta · pɾeˈɣunte/","demande / demandez (une question)","preguntar = poser une question, demander une information : « Pregunta en la farmacia ». Pas de « a » inutile avant la chose demandée.","🗣️","Pregunta en el hotel. · Pregunte en el hotel.","Demande à l'hôtel. · Demandez à l'hôtel."],
  ["disculpa / disculpe (disculpar)","/disˈkulpa · disˈkulpe/","excuse-moi / excusez-moi","Synonyme de perdona / perdone ; très courant en Amérique latine pour aborder quelqu'un dans la rue.","🙋","Disculpa, ¿dónde está el metro? · Disculpe, ¿dónde está el metro?","Excuse-moi, où est le métro ? · Excusez-moi, où est le métro ?"]
 ]),
 blk("Donner une direction", [
  ["gira a la izquierda / gire a la izquierda","/ˈxiɾa a la iθˈkjeɾða/","tourne à gauche / tournez à gauche","« a la izquierda » : toujours avec « la ». izquierda = iθ-KIER-da (qu = k, z/c = th). Tú : gira. Usted : gire.","⬅️","Gira a la izquierda en el semáforo. · Gire a la izquierda en el semáforo.","Tourne à gauche au feu. · Tournez à gauche au feu."],
  ["gira a la derecha / gire a la derecha","/ˈxiɾa a la deˈɾetʃa/","tourne à droite / tournez à droite","de-RE-cha (ch = tch). Ne confonds pas « la derecha » (la droite) et « derecho » (tout droit en Amérique latine). Tú : gira. Usted : gire.","➡️","Gira a la derecha en la esquina. · Gire a la derecha en la esquina.","Tourne à droite au coin. · Tournez à droite au coin."],
  ["sigue recto / siga recto","/ˈsiɣe ˈrrekto/","continue tout droit / continuez tout droit","« recto » = tout droit (invariable). Pas de « a » après sigue : jamais « sigue a recto ». Tú : sigue. Usted : siga.","⬆️","Sigue recto por esta calle. · Siga recto por esta calle.","Continue tout droit par cette rue. · Continuez tout droit par cette rue."],
  ["todo recto · derecho","/ˈtoðo ˈrrekto · deˈɾetʃo/","tout droit (Espagne · Amérique latine)","Espagne : « sigue todo recto ». Amérique latine : « siga derecho ». Les deux sont compris partout. « derecho » (adjectif masculin) ≠ « la derecha » (la droite).","🧭","Sigue todo recto. · Siga derecho, por favor.","Continue tout droit. · Continuez tout droit, s'il vous plaît."],
  ["la primera calle a la derecha","/la pɾiˈmeɾa ˈkaʝe a la deˈɾetʃa/","la première rue à droite","primera est féminin comme calle. Autres : la segunda (2e), la tercera (3e) : à retenir tels quels pour l'instant. « Toma la segunda calle a la izquierda. »","1️⃣","Toma la primera calle a la derecha.","Prends la première rue à droite."],
  ["hasta","/ˈasta/","jusqu'à","h muette : AS-ta. hasta la plaza, hasta el semáforo, hasta el puente. Piège : on n'ajoute jamais « a » après hasta.","🏁","Sigue recto hasta la plaza.","Continue tout droit jusqu'à la place."],
  ["al final de la calle","/al fiˈnal ðe la ˈkaʝe/","au bout de la rue","fi-NAL. Après « final » vient « de + nom » : al final del puente (de + el = del).","🔚","La farmacia está al final de la calle.","La pharmacie est au bout de la rue."],
  ["a la vuelta de la esquina","/a la ˈbwelta ðe la esˈkina/","juste au coin de la rue","Expression courante pour un lieu très proche. « vuelta » = le tour, le détour.","📍","El banco está a la vuelta de la esquina.","La banque est juste au coin de la rue."]
 ]),
 blk("Où est-ce ? Les prépositions de lieu", [
  ["al lado de","/al ˈlaðo ðe/","à côté de","« de » + le = « del » : al lado del banco. Avec la : al lado de la farmacia.","↔️","La parada está al lado del banco.","L'arrêt est à côté de la banque."],
  ["enfrente de","/enˈfɾente ðe/","en face de","Aussi « frente a » (même sens). enfrente de la plaza, enfrente del hotel. Un seul mot : enfrente.","🔛","El hotel está enfrente de la estación.","L'hôtel est en face de la gare."],
  ["entre","/ˈentɾe/","entre","Invariable et sans « de » : entre el banco y el hotel (jamais « entre de »).","🔗","La farmacia está entre el banco y el hotel.","La pharmacie est entre la banque et l'hôtel."],
  ["delante de","/deˈlante ðe/","devant","Contraire de « detrás de ». delante del hotel = devant l'hôtel.","🔼","El taxi está delante del hotel.","Le taxi est devant l'hôtel."],
  ["detrás de","/deˈtɾas ðe/","derrière","Accent écrit sur le á : de-TRÁS (mot en -s accentué sur la dernière syllabe). detrás de la estación.","🔙","La parada está detrás de la estación.","L'arrêt est derrière la gare."],
  ["cerca (de)","/ˈθeɾka ðe/","près (de)","Seul : « Está cerca » (c'est près). Avec un lieu : cerca de + lieu (cerca del parque). c = th (Espagne) ou s (Amérique latine).","📍","Mi casa está cerca de la plaza.","Ma maison est près de la place."],
  ["lejos (de)","/ˈlexos ðe/","loin (de)","j = kh : LE-khos. Même emploi que « cerca » : lejos de + lieu (lejos del centro). Contraire de cerca.","🔭","El aeropuerto está lejos del centro.","L'aéroport est loin du centre."],
  ["a la izquierda de / a la derecha de","/a la iθˈkjeɾða ðe/","à gauche de / à droite de","Se place avant le lieu : a la derecha del banco = à droite de la banque. Piège : « de + el » donne « del ».","🔀","El hotel está a la derecha del banco.","L'hôtel est à droite de la banque."],
  ["aquí · ahí · allí","/aˈki · aˈi · aˈʝi/","ici · là (près de toi) · là-bas","aquí = près de moi ; ahí = près de toi ; allí = loin de nous deux. « cerca de aquí » = près d'ici. Accents écrits sur le í.","📌","Estoy aquí. El museo está allí.","Je suis ici. Le musée est là-bas."],
  ["al y del","/al · del/","au (a + el) · du (de + el)","a + el = AL : voy al parque. de + el = DEL : cerca del parque. Pas de contraction avec la, las, los : a la plaza, de la estación, a los museos. Ne pas confondre avec « él » (pronom).","🔗","El hotel está cerca del parque, al lado del banco.","L'hôtel est près du parc, à côté de la banque."]
 ]),
 blk("Demander son chemin", [
  ["¿Cómo llego a…?","/ˈkomo ˈʝeɣo a/","comment aller à… ? (comment j'arrive à… ?)","LA question clé. Littéralement « comment j'arrive à… ? ». Identique en tutoiement et en vouvoiement : seul le début change (Perdona / Perdone). a + el = al : ¿Cómo llego al museo ?","🗺️","¿Cómo llego a la estación?","Comment aller à la gare ?"],
  ["¿Dónde está el/la… más cercano/a?","/ˈdonde esˈta el · la mas θeɾˈkano/","où est le/la… le/la plus proche ?","estar = lieu. Accord : el banco más cercano, la farmacia más cercana. « más cercano » est ici une formule à retenir (les comparatifs viennent plus tard).","🔎","¿Dónde está la farmacia más cercana?","Où est la pharmacie la plus proche ?"],
  ["¿Está lejos? / ¿Está cerca?","/esˈta ˈlexos · esˈta ˈθeɾka/","c'est loin ? / c'est près ?","Réponses : Está cerca. · No, no está lejos. · Está a cinco minutos a pie. Pas de pronom « ça » en espagnol : le verbe seul suffit.","❓","¿Está lejos de aquí? — No, está cerca.","C'est loin d'ici ? — Non, c'est près."],
  ["¿Adónde vas? / ¿Adónde va usted?","/aˈðonde ˈβas · aˈðonde ˈβa usˈteð/","où vas-tu ? / où allez-vous ?","adónde = vers où (mouvement, avec ir) ≠ dónde (lieu fixe, avec estar). Tú : vas. Usted : va. On écrit aussi « a dónde » en deux mots.","🧭","¿Adónde vas? — Voy al banco.","Où vas-tu ? — Je vais à la banque."],
  ["¿Sabes dónde está…? / ¿Sabe usted dónde está…?","/ˈsaβes ˈdonde esˈta · ˈsaβe usˈteð/","sais-tu où est… ? / savez-vous où est… ?","Formule à retenir telle quelle (le verbe saber sera étudié plus tard). Tú : sabes. Usted : sabe. Très poli pour aborder quelqu'un.","🙋‍♂️","¿Sabe usted dónde está el museo?","Savez-vous où est le musée ?"],
  ["Perdona, … / Perdone, …","/peɾˈðona · peɾˈðone/","excuse-moi, … / excusez-moi, …","On aborde quelqu'un AVANT de poser la question. Tú : perdona. Usted : perdone. Voir aussi disculpa / disculpe.","🙇","Perdone, ¿cómo llego al museo?","Excusez-moi, comment aller au musée ?"],
  ["Un billete para…, por favor","/un biˈʝete ˈpaɾa poɾ faˈβoɾ/","un billet pour…, s'il vous plaît","Pour acheter un billet (« boleto » en Amérique latine). para + destination : un billete para Sevilla. « por favor » ne change pas entre tú et usted.","🎟️","Un billete para Madrid, por favor.","Un billet pour Madrid, s'il vous plaît."],
  ["¿Cuánto cuesta el billete?","/ˈkwanto ˈkwesta el biˈʝete/","combien coûte le billet ?","Formule fixe pour demander un prix : cuesta (un objet) ; « cuestan » pour plusieurs (¿Cuánto cuestan los billetes?). Accent sur cuánto.","💶","¿Cuánto cuesta el billete de tren?","Combien coûte le billet de train ?"]
 ]),
 blk("Aller quelque part : IR", [
  ["ir","/iɾ/","aller","Verbe très irrégulier : voy, vas, va, vamos, vais, van. Il s'emploie avec « a » + lieu : voy a la estación. Pas de pronom sujet nécessaire.","🏃","Voy a la estación.","Je vais à la gare."],
  ["ir a + lugar","/iɾ a/","aller à + lieu","a + el = al : voy al banco, voy a la plaza, voy a casa. Attention : « ir a + verbe » (futur proche) se verra plus tard (A1.9) ; ici seulement « ir a + lieu ».","📍","Voy al banco y vas al museo.","Je vais à la banque et tu vas au musée."],
  ["ir en + transporte","/iɾ en/","aller en / à + moyen de transport","en autobús, en tren, en coche, en taxi, en metro, en bici, en moto, en avión. Seule exception : a pie. Tú : ¿Vas en metro? Usted : ¿Va usted en metro?","🚌","Voy al museo en metro.","Je vais au musée en métro."]
 ]),
 blk("Les lieux de la ville", [
  ["la farmacia","/la farˈmaθja/","la pharmacie","far-MA-thia (c = th). Beaucoup de pharmacies espagnoles ont une croix verte lumineuse.","💊","La farmacia está en la esquina.","La pharmacie est au coin de la rue."],
  ["el supermercado","/el supeɾmeɾˈkaðo/","le supermarché","su-per-mer-KA-do. À l'oral on dit souvent « el súper ».","🛒","El supermercado está cerca.","Le supermarché est près d'ici."],
  ["el banco","/el ˈbaŋko/","la banque","Aussi « le banc » : le contexte décide. Pluriel : los bancos.","🏦","El banco está al lado de la farmacia.","La banque est à côté de la pharmacie."],
  ["el hotel","/el oˈtel/","l'hôtel","h muette : o-TEL, accent sur la dernière syllabe. Pluriel : los hoteles.","🏨","El hotel está enfrente de la plaza.","L'hôtel est en face de la place."],
  ["el hospital","/el ospiˈtal/","l'hôpital","h muette : os-pi-TAL. Pluriel : los hospitales.","🏥","El hospital está lejos del centro.","L'hôpital est loin du centre."],
  ["el museo","/el muˈseo/","le musée","mu-SE-o : « e » et « o » font deux syllabes séparées.","🏛️","El museo está detrás de la plaza.","Le musée est derrière la place."],
  ["el parque","/el ˈpaɾke/","le parc","qu = k : PAR-ke.","🌳","El parque está cerca del hotel.","Le parc est près de l'hôtel."],
  ["la biblioteca","/la biβljoˈteka/","la bibliothèque","Faux-ami : « la librería » = la librairie, PAS la bibliothèque.","📚","La biblioteca está en la avenida.","La bibliothèque est sur l'avenue."],
  ["el centro","/el ˈθentɾo/","le centre-ville, le centre","« el centro » seul = le centre-ville. « el centro comercial » = le centre commercial.","🏙️","Voy al centro en tranvía.","Je vais au centre-ville en tramway."]
 ]),
 blk("Prononciation : g, z et c dans les directions", [
  ["g : gira · gire ≠ sigue · siga","/ˈxiɾa · ˈsiɣe/","g = kh devant i / e ; g dur dans gue / ga","gira, gire : g devant i / e = kh (comme j). sigue : « gue » = g dur, le u est muet (SI-ge). siga : g devant a = g dur. Même lettre, deux sons.","🔤","Gire y siga.","Tournez et continuez."],
  ["z / c : cruza · cruce","/ˈkɾuθa · ˈkɾuθe/","z devant a, c devant e","z devant a / o / u ; devant e on écrit c : cruza → cruce (même son : th en Espagne, s en Amérique latine). De même : llegar → llegue (gu devant e).","🔤","Cruce la calle y llegue a la plaza.","Traversez la rue et arrivez à la place."]
 ]),
 blk("Bonus : 10 expressions familières vérifiées", [
  ["estar en las nubes","/esˈtaɾ en las ˈnuβes/","être dans la lune","Être distrait, rêveur. Familier, partout (Espagne et Amérique latine). Littéralement « être dans les nuages ».","☁️","Marta está en las nubes hoy.","Marta est dans la lune aujourd'hui."],
  ["ir sobre ruedas","/iɾ ˈsoβɾe ˈrrweðas/","rouler comme sur des roulettes (tout va bien)","Courant, partout. Se dit d'un projet ou d'une situation qui avance sans problème. Image : rouler sur des roues.","🛞","Todo va sobre ruedas.","Tout roule comme sur des roulettes."],
  ["poner los puntos sobre las íes","/poˈneɾ los ˈpuntos ˈsoβɾe las ˈies/","mettre les points sur les i","Exactement comme en français : clarifier les choses sans ambiguïté. Le pluriel de la lettre i est « las íes ».","✍️","Es mejor poner los puntos sobre las íes.","Il vaut mieux mettre les points sur les i."],
  ["perder el norte","/peɾˈðeɾ el ˈnoɾte/","perdre le nord, perdre ses repères","On perd le nord quand on ne sait plus où on en est (au sens propre comme au figuré). Courant, partout.","🧭","Es fácil perder el norte en una ciudad grande.","C'est facile de perdre le nord dans une grande ville."],
  ["estar a dos pasos","/esˈtaɾ a ðos ˈpasos/","être à deux pas","Être très proche. S'emploie avec de + lieu : a dos pasos de la plaza.","👣","El hotel está a dos pasos de la plaza.","L'hôtel est à deux pas de la place."],
  ["ir a toda pastilla","/iɾ a ˈtoða pasˈtiʎa/","aller à toute vitesse","Familier, surtout en Espagne. REMPLACE l'expression « ir a piñón fijo » du cours source, qui ne veut PAS dire « foncer tout droit » (elle désigne quelqu'un de borné, qui revient toujours à la même idée).","💨","El tren va a toda pastilla.","Le train va à toute vitesse."],
  ["estar hecho polvo","/esˈtaɾ ˈetʃo ˈpolβo/","être épuisé, être crevé","Familier. Pas lié aux trajets : on peut être « hecho polvo » après n'importe quel effort. « hecho » s'accorde : hecho (homme), hecha (femme).","😵","Hoy estoy hecha polvo.","Aujourd'hui je suis épuisée."],
  ["coger el toro por los cuernos","/koˈxeɾ el ˈtoɾo poɾ los ˈkweɾnos/","prendre le taureau par les cornes","Affronter un problème directement. Espagne : coger. Amérique latine : on dit « agarrer el toro por los cuernos » (coger y est évité).","🐂","Es mejor coger el toro por los cuernos.","Il vaut mieux prendre le taureau par les cornes."],
  ["tirar la casa por la ventana","/tiˈɾaɾ la ˈkasa poɾ la benˈtana/","jeter l'argent par les fenêtres, dépenser sans compter","Dépenser énormément, surtout pour une fête ou un événement. Courant, partout.","💸","Mi tío tira la casa por la ventana.","Mon oncle jette l'argent par les fenêtres."],
  ["ir de punta en blanco","/iɾ ðe ˈpunta en ˈblanko/","être tiré à quatre épingles","Être très élégant, habillé avec soin. S'emploie avec ir ou estar. Courant, partout.","🎩","Hoy Ana va de punta en blanco.","Aujourd'hui Ana est tirée à quatre épingles."]
 ])
);
LESSONS_ES[204] = {
 code:"A1.4", level:"A1",
 VOCAB: V,
 MEM_WORDS: __esIdx(V, ["el semáforo","la esquina","gira a la izquierda / gire a la izquierda","sigue recto / siga recto","toma / tome (tomar)","al lado de","enfrente de","¿Cómo llego a…?","¿Dónde está el/la… más cercano/a?","al y del"]),
 MINI_CHECKS: [
  {q:"« Tourne à droite » (à un ami) :", opts:["Gira a la derecha.","Gira a la izquierda.","Sigue recto."], correct:0, fb:"derecha = droite, izquierda = gauche. Tutoiement : gira (terminaison -a)."},
  {q:"« Tournez à gauche » (à une dame que tu vouvoies) :", opts:["Gira a la izquierda.","Gire a la izquierda."], correct:1, fb:"Au vouvoiement (usted), un verbe en -AR prend -e : gire. Au tutoiement : gira."},
  {q:"« Prends le bus » (à un ami) :", opts:["Tome el autobús.","Toma el autobús."], correct:1, fb:"Tutoiement : toma. Vouvoiement : tome. Et « tomar » est neutre, contrairement à « coger » (Espagne seulement)."},
  {q:"Pour demander la pharmacie la plus proche :", opts:["¿Dónde está la farmacia más cercana?","¿Cómo está la farmacia más cercana?"], correct:0, fb:"Pour un lieu : ¿Dónde está…? (estar). ¿Cómo está…? = comment va… ? Et cercana s'accorde avec farmacia (féminin)."},
  {q:"« Je vais à la gare » :", opts:["Voy al estación.","Voy a la estación."], correct:1, fb:"estación est féminin : a la estación. « al » = a + el, seulement devant un nom masculin (voy al banco)."},
  {q:"« À côté du parc » :", opts:["al lado de el parque","al lado del parque","al lado de la parque"], correct:1, fb:"de + el = del (obligatoire) : al lado del parque. parque est masculin."},
  {q:"Comment dit-on « à pied » ?", opts:["en pie","a pie","por pie"], correct:1, fb:"« a pie » est la seule exception : tous les autres moyens de transport prennent « en » (en tren, en taxi)."},
  {q:"« Ils vont en taxi » :", opts:["Van en taxi.","Vais en taxi.","Va en taxi."], correct:0, fb:"ir : voy, vas, va, vamos, vais, van. ellos → van. (vais = vosotros, va = él / usted.)"}
 ],
 ROUNDS: [
  __esR("Gira a la izquierda en el semáforo.","Tourne à gauche au feu."),
  __esR("Sigue recto por esta calle.","Continue tout droit par cette rue."),
  __esR("Gire a la derecha, por favor.","Tournez à droite, s'il vous plaît."),
  __esR("La parada está enfrente del banco.","L'arrêt est en face de la banque."),
  __esR("¿Cómo llego a la estación?","Comment aller à la gare ?"),
  __esR("¿Dónde está la farmacia más cercana?","Où est la pharmacie la plus proche ?"),
  __esR("Voy al museo en metro.","Je vais au musée en métro."),
  __esR("Vamos a pie al parque.","Nous allons à pied au parc."),
  __esR("El supermercado está al lado del hotel.","Le supermarché est à côté de l'hôtel."),
  __esR("Siga recto y cruce la plaza.","Continuez tout droit et traversez la place."),
  __esR("Mi casa está cerca de la estación.","Ma maison est près de la gare."),
  __esR("Tomo el autobús en la esquina.","Je prends le bus au coin de la rue."),
  __esR("Perdone, ¿dónde está el banco más cercano?","Excusez-moi, où est la banque la plus proche ?")
 ],
 QUIZ: [
  {cat:"ecrit", q:"« Tourne à gauche » (tutoiement) :", opts:["Gira a la izquierda.","Gire a la izquierda.","Girar a la izquierda."], correct:0, why:"Tutoiement : gira. « Gire » = usted ; « girar » est l'infinitif, pas un ordre."},
  {cat:"ecrit", q:"À une dame que tu vouvoies : « Tournez à droite. »", opts:["Gira a la derecha.","Gira a la izquierda.","Gire a la derecha."], correct:2, why:"Usted + verbe en -AR : on passe de -a à -e : gire. Et derecha = droite."},
  {cat:"ecrit", q:"___ recto. (tú, seguir : « continue tout droit »)", opts:["Siga","Sigue","Seguir"], correct:1, why:"Impératif tú de seguir : sigue (g dur, u muet). « Siga » = usted."},
  {cat:"ecrit", q:"___ recto por esta calle, señor. (usted, seguir)", opts:["Sigue","Siga","Sigo"], correct:1, why:"Usted + verbe en -ER / -IR : la terminaison devient -a : siga. « Sigo » = je continue."},
  {cat:"ecrit", q:"___ el autobús, señora. (usted, tomar)", opts:["Toma","Tomo","Tome"], correct:2, why:"Usted + verbe en -AR : -e : tome. « Toma » = tú ; « tomo » = je prends."},
  {cat:"ecrit", q:"Voy ___ metro. (a + el)", opts:["a el","al","del"], correct:1, why:"a + el se contracte obligatoirement en « al » : voy al metro."},
  {cat:"ecrit", q:"La estación está cerca ___ parque. (de + el)", opts:["de el","del","al"], correct:1, why:"de + el = del : cerca del parque."},
  {cat:"ecrit", q:"La parada está ___ de la plaza. (« en face »)", opts:["enfrente","lejos","detrás"], correct:0, why:"enfrente de = en face de. lejos = loin ; detrás de = derrière."},
  {cat:"ecrit", q:"Nosotros ___ a pie al museo.", opts:["van","vamos","vais"], correct:1, why:"ir : nosotros → vamos. « van » = ellos / ustedes ; « vais » = vosotros."},
  {cat:"ecrit", q:"Mis amigos ___ en taxi.", opts:["va","van","vamos"], correct:1, why:"ir : ellos / ellas → van. « va » = él / ella / usted."},
  {cat:"ecrit", q:"« Comment j'arrive à la gare ? » se dit :", opts:["¿Cómo llegar la estación?","¿Cómo llego a la estación?","¿Cómo llegas a la estación?"], correct:1, why:"¿Cómo llego a…? (yo = llego) + a. « llegas » changerait le sens : comment arrives-tu… ?"},
  {cat:"ecrit", q:"Pour demander « la pharmacie la plus proche » :", opts:["¿Dónde está la farmacia más cercana?","¿Dónde está el farmacia más cercano?","¿Dónde es la farmacia más cercana?"], correct:0, why:"farmacia est féminin : la farmacia más cercana (cercana s'accorde). Un lieu → estar, pas ser."},
  {cat:"ecrit", q:"Quel verbe est le plus courant en Amérique latine pour « tourner » dans la rue ?", opts:["coger","girar","doblar"], correct:2, why:"« doblar » (doble a la derecha) est le verbe usuel en Amérique latine ; « girar » est surtout espagnol (mais compris). « coger » = prendre (Espagne)."},
  {cat:"ecrit", q:"Pourquoi éviter « coger » avec un Latino-Américain ?", opts:["Il n'existe pas en espagnol","Il a un sens vulgaire dans une grande partie de l'Amérique latine","Il veut dire « tourner »"], correct:1, why:"Normal en Espagne (coger el autobús), mais vulgaire dans une grande partie de l'Amérique latine. Le verbe neutre partout : tomar."},
  {cat:"oral", audio:"Gira a la izquierda y sigue recto.", q:"Écoute : que doit faire la personne ?", opts:["Tourner à gauche puis continuer tout droit","Tourner à droite puis s'arrêter","Prendre le métro"], correct:0, why:"gira a la izquierda = tourne à gauche ; sigue recto = continue tout droit."},
  {cat:"oral", audio:"Gire a la derecha, por favor.", q:"Écoute : la phrase est…", opts:["au tutoiement","au vouvoiement"], correct:1, why:"« gire » (terminaison -e d'un verbe en -AR) = vouvoiement. Au tutoiement : gira."},
  {cat:"oral", audio:"La estación está al lado del puente.", q:"Écoute : où est la gare ?", opts:["Devant le pont","À côté du pont","Loin du pont"], correct:1, why:"al lado del puente = à côté du pont (de + el = del)."},
  {cat:"oral", audio:"Voy al banco en autobús.", q:"Écoute : comment la personne va-t-elle à la banque ?", opts:["À pied","En bus","En voiture"], correct:1, why:"« en autobús » = en bus. À pied se dirait « a pie » ; en voiture : « en coche »."},
  {cat:"oral", audio:"Perdone, ¿dónde está la parada de taxis?", q:"Écoute : que cherche la personne ?", opts:["Une station de taxis","Une gare","Une pharmacie"], correct:0, why:"la parada de taxis = la station de taxis. « Perdone » : on s'adresse à quelqu'un avec usted."},
  {cat:"comprehension", passage:"— Perdón, ¿dónde está la estación de metro más cercana? — Mira, es muy fácil. Sigue recto por esta calle, gira a la izquierda en el semáforo y la estación está al lado del puente, enfrente de la gran plaza.", q:"Où faut-il tourner ?", opts:["Au feu, à gauche","À la place, à droite","Au pont, à gauche"], correct:0, why:"« gira a la izquierda en el semáforo » : tourner à gauche au feu."},
  {cat:"comprehension", passage:"— Perdón, ¿dónde está la estación de metro más cercana? — Mira, es muy fácil. Sigue recto por esta calle, gira a la izquierda en el semáforo y la estación está al lado del puente, enfrente de la gran plaza.", q:"Où est la station par rapport au pont ?", opts:["Derrière le pont","À côté du pont","Loin du pont"], correct:1, why:"« al lado del puente » = à côté du pont. Elle est aussi en face de la grande place (enfrente de)."},
  {cat:"comprehension", passage:"— Buenos días, señora. ¿Cómo llego al museo? — Siga recto hasta la plaza, cruce la calle y tome la primera calle a la derecha. El museo está detrás del banco.", q:"Où est le musée ?", opts:["Derrière la banque","Devant la banque","À côté de la place"], correct:0, why:"« detrás del banco » = derrière la banque."},
  {cat:"comprehension", passage:"— Buenos días, señora. ¿Cómo llego al museo? — Siga recto hasta la plaza, cruce la calle y tome la primera calle a la derecha. El museo está detrás del banco.", q:"Quelle rue faut-il prendre ?", opts:["La première à gauche","La première à droite","La deuxième à droite"], correct:1, why:"« tome la primera calle a la derecha » : la première rue à droite."},
  {cat:"comprehension", passage:"— Buenos días, señora. ¿Cómo llego al museo? — Siga recto hasta la plaza, cruce la calle y tome la primera calle a la derecha. El museo está detrás del banco.", q:"Quel indice montre le vouvoiement ?", opts:["Les formes siga, cruce, tome","Le mot « museo »","Le mot « calle »"], correct:0, why:"siga, cruce, tome = impératif usted (-a pour seguir, -e pour cruzar et tomar). Au tutoiement : sigue, cruza, toma."}
 ],
 PRON_VERBS: [
  {en:"Gira a la izquierda.", fr:"Tourne à gauche. (g = kh : KHI-ra ; izquierda : iz-KIER-da, qu = k)"},
  {en:"Siga recto por esta calle.", fr:"Continuez tout droit par cette rue. (g dur : SI-ga ; rr roulé : RREK-to ; ll = y : KA-ye)"},
  {en:"Gire a la derecha.", fr:"Tournez à droite. (gi = khi : KHI-re ; ch = tch : de-RE-tcha)"},
  {en:"Cruce la calle.", fr:"Traversez la rue. (c devant e = th en Espagne, s en Amérique latine : KRU-the)"},
  {en:"Sigue recto hasta el semáforo.", fr:"Continue tout droit jusqu'au feu. (gue = ghé, u muet : SI-ghe ; h muette : AS-ta ; se-MÁ-fo-ro)"},
  {en:"La esquina está al lado del puente.", fr:"Le coin est à côté du pont. (qu = k : es-KI-na ; ue = pwe : PWEN-te)"},
  {en:"¿Cómo llego a la estación?", fr:"Comment aller à la gare ? (ll = y : YE-go ; es-ta-THION, accent sur la dernière syllabe)"},
  {en:"Voy en autobús.", fr:"Je vais en bus. (v = b : boy ; au-to-BÚS, accent écrit sur la dernière syllabe)"},
  {en:"La plaza está enfrente del hotel.", fr:"La place est en face de l'hôtel. (z = th : PLA-tha ; h muette : o-TEL)"},
  {en:"Perdone, ¿dónde está la farmacia?", fr:"Excusez-moi, où est la pharmacie ? (r simple : per-DO-ne ; far-MA-thia, c = th)"}
 ],
 READING: [
  "Lucía llega a Madrid en tren y va a pie al hotel.",
  "La estación está cerca del centro, pero Lucía necesita un mapa.",
  "Pregunta a una señora: «Perdone, ¿dónde está el hotel?»",
  "La señora explica: «Siga recto, cruce la plaza y gire a la derecha.»",
  "El hotel está enfrente de un banco y al lado de una farmacia.",
  "Después, Lucía va al museo en metro.",
  "Su amigo Pablo explica: «Toma la línea uno y baja en la parada Sol.»",
  "«Gira a la izquierda en el semáforo y sigue recto: el museo está detrás de la plaza.»",
  "Lucía está muy contenta: ¡es fácil ir a pie!",
  "Y tú, ¿cómo vas al trabajo: en autobús, en metro o a pie?"
 ],
 GLOSS: [
  {en:"el centro", fr:"le centre-ville"},
  {en:"necesita (necesitar)", fr:"elle a besoin de : verbe en -AR, comme hablar (necesito, necesitas, necesita…)"},
  {en:"el mapa", fr:"la carte, le plan : masculin malgré le -a final"},
  {en:"explica (explicar)", fr:"elle explique : verbe en -AR, 3e personne du singulier"},
  {en:"después", fr:"ensuite, après (adverbe, accent écrit sur le é)"},
  {en:"la línea", fr:"la ligne (de métro, de bus) ; accent écrit sur le í : LÍ-ne-a"},
  {en:"la parada Sol", fr:"la station Sol : une des stations les plus connues du métro de Madrid"},
  {en:"el trabajo", fr:"le travail, le lieu de travail : « voy al trabajo » = je vais au travail"}
 ],
 GRAMMAR1: {
  heading:"IR : aller quelque part (voy, vas, va, vamos, vais, van)",
  lede:"Pour parler de déplacements, tu as besoin d'un seul verbe : IR (aller). Il est irrégulier : il ne ressemble à aucun verbe en -AR du palier précédent. On l'apprend par cœur, une fois pour toutes, et il sert partout : aller à la gare, au travail, au musée, chez des amis.",
  conj:[
   ["yo →","voy","Voy a la estación."],
   ["tú →","vas","¿Vas al metro en bici?"],
   ["él, ella, usted →","va","Marta va al banco. · ¿Va usted en taxi, señor?"],
   ["nosotros/as →","vamos","Vamos a pie al parque."],
   ["vosotros/as →","vais","¿Vais en tren a Sevilla?"],
   ["ellos, ellas, ustedes →","van","Mis amigos van en autobús. · ¿Cómo van ustedes?"]
  ],
  ruleHtml:"📖 <b>IR</b> = aller : <b>voy, vas, va, vamos, vais, van</b>. Sans accent écrit, sans pronom sujet (voy = je vais).<br><br>📍 <b>ir A + lieu</b> : <b>Voy a la estación. Vas a casa. Marta va a Madrid.</b> La petite préposition <b>a</b> marque la direction. Comparaison avec ESTAR (position) : <b>estoy EN Madrid</b> (je suis à Madrid) / <b>voy A Madrid</b> (je vais à Madrid). Le français dit « à » dans les deux cas ; l'espagnol, non.<br><br>🔗 <b>a + el = AL</b> (contraction obligatoire) : <b>Voy al metro. Vamos al museo. ¿Vas al banco?</b> Avec la, las, los : pas de contraction : <b>voy a la plaza, voy a los museos</b>. Même règle pour <b>de + el = DEL</b> : <b>la parada del autobús, cerca del parque, al lado del banco</b> ; mais <b>de la estación, de los hoteles</b>. Ne confonds pas avec le pronom « él » (a él, de él : jamais de contraction).<br><br>🚌 <b>ir EN + moyen de transport</b> : <b>en autobús, en tren, en coche, en taxi, en metro, en bici, en moto, en avión</b>. Une seule exception : <b>a pie</b>. Phrase complète : <b>Voy al metro en bici</b> (je vais au métro à vélo) ; <b>Voy a pie a la estación</b> (je vais à pied à la gare).<br><br>👥 <b>Tutoiement ET vouvoiement</b> : tú → <b>vas</b> : ¿Adónde vas? ¿Vas en metro? · usted → <b>va</b> : <b>¿Adónde va usted, señora? ¿Va usted en taxi, señor?</b> · ustedes → <b>van</b> : ¿Cómo van ustedes? · vosotros (Espagne) → <b>vais</b> : ¿Adónde vais? Réponse : <b>Voy al hotel.</b><br><br>🧭 <b>¿Adónde? ou ¿Dónde?</b> : <b>¿Adónde vas?</b> (vers où ? avec ir, un mouvement) / <b>¿Dónde estás?</b> (où ? avec estar, une position).<br><br>⚠️ <b>Pièges</b> : 1) « vais » et « voy » n'ont pas d'accent. 2) <b>vamos</b> = nous allons, mais aussi « allons-y ! » (¡Vamos!). 3) Ici on utilise seulement « ir a + LIEU » ; « ir a + verbe » (le futur proche) se verra bien plus tard, à partir de A1.9. 4) Avec « a pie », pas de « en » : jamais « en pie ».",
  dialogueLede:"Deux amis se croisent dans la rue (tutoiement) :",
  dialogue:[
   {who:"them", en:"¡Hola, Pablo! ¿Adónde vas?", fr:"Salut, Pablo ! Où vas-tu ?"},
   {who:"you", en:"Voy al supermercado. ¿Y tú?", fr:"Je vais au supermarché. Et toi ?"},
   {who:"them", en:"Voy a la estación. Mis padres llegan hoy en tren.", fr:"Je vais à la gare. Mes parents arrivent aujourd'hui en train."},
   {who:"you", en:"¿Vas en bici o en autobús?", fr:"Tu y vas à vélo ou en bus ?"},
   {who:"them", en:"Voy a pie. La estación está cerca.", fr:"J'y vais à pied. La gare est près d'ici."},
   {who:"you", en:"¡Vale! Hasta luego.", fr:"D'accord ! À tout à l'heure."}
  ],
  whyLabel:"Pourquoi « a » après ir, et pourquoi « al » ?",
  whyText:"IR est l'un des verbes les plus irréguliers de toutes les langues : voy, vas, va, vamos… ne ressemblent pas à l'infinitif. Il n'y a pas de recette, seulement de la répétition : dis « voy, vas, va, vamos, vais, van » à voix haute plusieurs fois. En revanche, la construction est très simple : <b>ir + a + lieu</b>. La préposition « a » exprime le mouvement vers un endroit, alors que <b>estar + en</b> exprime la position. Voilà pourquoi on dit « voy A la plaza » mais « estoy EN la plaza ». Quant à <b>al</b> et <b>del</b>, ce sont de simples raccourcis de prononciation : « a el » est lourd à dire, donc on fusionne en <b>al</b> ; « de el » fusionne en <b>del</b>. Ils fonctionnent uniquement devant « el » (masculin singulier). Test rapide : le nom est masculin singulier ? → al / del. Féminin ou pluriel ? → a la / de la, a los / de los. Pour le moyen de transport, souviens-toi que le français « en train, en bus, à vélo » devient toujours <b>en</b> en espagnol (en tren, en autobús, en bici), sauf « à pied » = <b>a pie</b>."
 },
 GRAMMAR2: {
  heading:"Guider quelqu'un : l'impératif (tú ET usted) et les prépositions de lieu",
  dialogueLede:"Un touriste demande son chemin à une passante (vouvoiement) :",
  dialogue:[
   {who:"them", en:"Perdone, ¿dónde está la farmacia más cercana?", fr:"Excusez-moi, où est la pharmacie la plus proche ?"},
   {who:"you", en:"Mire, es muy fácil. Siga recto por esta calle y gire a la izquierda en el semáforo.", fr:"Regardez, c'est très facile. Continuez tout droit par cette rue et tournez à gauche au feu."},
   {who:"them", en:"¿Está lejos?", fr:"C'est loin ?"},
   {who:"you", en:"No, está cerca. La farmacia está al lado del banco, enfrente de la plaza.", fr:"Non, c'est près. La pharmacie est à côté de la banque, en face de la place."},
   {who:"them", en:"Gracias, señora.", fr:"Merci, madame."},
   {who:"you", en:"De nada. Y si necesita un taxi, la parada está allí.", fr:"De rien. Et si vous avez besoin d'un taxi, l'arrêt est là-bas."}
  ],
  ruleHtml:"💭 <b>1. L'impératif sert à donner un ordre, un conseil, une indication.</b> En espagnol, il change selon la politesse : on <b>tutoie</b> (tú) ou on <b>vouvoie</b> (usted).<br><br>💭 <b>2. Impératif tú = la forme « él / ella » du présent</b> : hablas → <b>habla</b> ; <b>gira, toma, cruza, baja, espera, mira, llega, pregunta</b> (verbes en -AR : ils se terminent en <b>-a</b>). Cas à retenir : <b>sigue</b> (seguir), <b>sube</b> (subir), <b>coge</b> (coger, Espagne). On ne met pas de pronom : <b>Gira a la izquierda.</b><br><br>💭 <b>3. Impératif usted = la voyelle s'inverse.</b> Verbes en <b>-AR</b> : -a devient <b>-e</b> : gira → <b>gire</b>, toma → <b>tome</b>, cruza → <b>cruce</b>, baja → <b>baje</b>, espera → <b>espere</b>, mira → <b>mire</b>, llega → <b>llegue</b>. Verbes en <b>-ER / -IR</b> : -e devient <b>-a</b> : sigue → <b>siga</b>, sube → <b>suba</b>, coge → <b>coja</b>. Pour plusieurs personnes (ustedes), on ajoute -n : <b>giren, tomen, sigan</b>. Spelling : cruzar → <b>cruce</b> (z → c devant e), llegar → <b>llegue</b> (g → gu pour garder le g dur).<br><br><table style='border-collapse:collapse'><tr><th>Verbe</th><th>tú</th><th>usted</th></tr><tr><td>girar</td><td>gira</td><td>gire</td></tr><tr><td>seguir</td><td>sigue</td><td>siga</td></tr><tr><td>tomar</td><td>toma</td><td>tome</td></tr><tr><td>cruzar</td><td>cruza</td><td>cruce</td></tr><tr><td>bajar</td><td>baja</td><td>baje</td></tr><tr><td>subir</td><td>sube</td><td>suba</td></tr></table><br>💭 <b>4. Les indications clés</b> : <b>gira a la izquierda / a la derecha</b> (usted : gire) · <b>sigue recto</b> (usted : siga recto ; Amérique latine : siga derecho) · <b>cruza la calle</b> · <b>toma la primera calle a la derecha</b> · <b>hasta la plaza</b> · <b>en el semáforo, en la esquina</b>. Pour aborder quelqu'un : <b>Perdona</b> (tú) / <b>Perdone</b> (usted). En fin de phrase : <b>por favor</b>.<br><br>💭 <b>5. Les prépositions de lieu</b> (avec ESTAR) : <b>al lado de</b> (à côté de), <b>enfrente de</b> (en face de), <b>entre</b> (entre, sans de), <b>delante de</b> (devant), <b>detrás de</b> (derrière), <b>cerca de</b> (près de), <b>lejos de</b> (loin de). Elles se terminent presque toutes par <b>de</b> ; avec un nom masculin, de + el = <b>del</b> : <b>al lado del banco, cerca del parque</b> ; féminin : <b>al lado de la farmacia</b>. Seul <b>entre</b> ne prend pas de de : <b>entre el banco y el hotel</b>.<br><br>💭 <b>6. Les deux questions du palier</b> : <b>¿Cómo llego a…?</b> (à la gare : ¿Cómo llego a la estación? ; au musée : ¿Cómo llego al museo?) et <b>¿Dónde está el/la… más cercano/a?</b> (el banco más cercano, la farmacia más cercana : cercano s'accorde avec le nom). <b>más cercano</b> = le plus proche : on en reparlera avec les comparatifs.<br><br>👥 <b>Tutoiement ET vouvoiement</b> : tú → <b>Perdona, ¿cómo llego a la estación? — Gira a la izquierda y sigue recto.</b> · usted → <b>Perdone, ¿cómo llego a la estación? — Gire a la izquierda y siga recto.</b><br><br>🌎 <b>Variantes</b> : « tourner » = girar (Espagne), <b>doblar</b> (Amérique latine). « prendre » = <b>tomar</b> partout ; <b>coger</b> = Espagne seulement, vulgaire dans une grande partie de l'Amérique latine : à éviter. « tout droit » = todo recto (Espagne) / derecho (Amérique latine). Distances : « a dos manzanas » (Espagne) / « a dos cuadras » (Amérique latine). « vosotros » n'existe qu'en Espagne : ailleurs, ustedes (giren, tomen).",
  whyLabel:"Pourquoi gira / gire ? Une seule voyelle qui change tout",
  whyText:"En français, « tourne » et « tournez » se distinguent aussi (tourne / tournez), mais en espagnol l'écart tient à une seule voyelle, et elle s'<b>inverse</b> : le verbe en -AR garde son <b>a</b> au tutoiement (gira) et prend un <b>e</b> au vouvoiement (gire) ; le verbe en -ER / -IR fait le contraire (sigue → siga). Retiens l'astuce : <b>tú = la voyelle du verbe, usted = la voyelle opposée</b>. Cela recroise la distinction tú / usted vue dès A1.1 : avec un inconnu âgé, un employé, un client, on utilise toujours usted (¡Perdone!), tandis qu'entre jeunes ou entre amis on tutoie (¡Perdona!). En Amérique latine, usted est même très répandu entre inconnus de tous âges. En cas de doute dans la rue, choisis usted : c'est toujours poli. Deux autres pièges de francophone : 1) le verbe « prendre » : <b>tomar</b> (neutre partout) et non « coger » ; 2) la préposition avec le lieu : <b>al lado DE</b> (pas « au lado ») et <b>del</b> à la place de « de el »."
 },
 REVIEW: [
  {q:"Yo ___ con mis amigos. (hablar)", opts:["hablo","hablas","habla"], correct:0, fb:"Verbe en -AR : yo → -o (hablo). (rappel A1.3)"},
  {q:"« Je ne parle jamais de football » :", opts:["Nunca hablo de fútbol.","Siempre hablo de fútbol."], correct:0, fb:"nunca = jamais, placé avant le verbe ; siempre = toujours. (rappel A1.3)"},
  {q:"« J'aime les chiens » :", opts:["Me gusta los perros.","Me gustan los perros."], correct:1, fb:"Plusieurs objets → gustan (me gustan los perros). (rappel A1.3)"},
  {q:"Pour demander à une dame âgée si elle aime voyager :", opts:["¿Le gusta viajar?","¿Te gusta viajar?"], correct:0, fb:"usted → le gusta ; tú → te gusta. (rappel A1.3)"},
  {q:"« Vous parlez » (à plusieurs amis, Espagne) :", opts:["habláis","hablan","hablamos"], correct:0, fb:"vosotros → -áis (habláis, avec accent écrit). (rappel A1.3)"}
 ],
 DRILLS: [
  {type:"fill", text:"___ a la izquierda. (tú, girar)", answers:["Gira","gira"], why:"Impératif tú : gira (terminaison -a)."},
  {type:"fill", text:"___ a la derecha, por favor. (usted, girar)", answers:["Gire","gire"], why:"Impératif usted d'un verbe en -AR : -a devient -e : gire."},
  {type:"fill", text:"___ recto. (tú, seguir)", answers:["Sigue","sigue"], why:"Impératif tú de seguir : sigue (g dur, u muet)."},
  {type:"fill", text:"___ recto, por favor. (usted, seguir)", answers:["Siga","siga"], why:"Usted + verbe en -IR : -e devient -a : siga."},
  {type:"fill", text:"___ el metro en la plaza. (tú, tomar)", answers:["Toma","toma"], why:"Impératif tú : toma. Neutre partout (contrairement à coger)."},
  {type:"fill", text:"___ el taxi, señora. (usted, tomar)", answers:["Tome","tome"], why:"Impératif usted : tome."},
  {type:"fill", text:"___ la calle. (tú, cruzar)", answers:["Cruza","cruza"], why:"Impératif tú : cruza."},
  {type:"fill", text:"___ la calle, señor. (usted, cruzar)", answers:["Cruce","cruce"], why:"z devient c devant e : cruce (même son, orthographe différente)."},
  {type:"fill", text:"Yo ___ al supermercado. (ir)", answers:["voy","Voy"], why:"ir : yo → voy."},
  {type:"fill", text:"Tú ___ a la estación. (ir)", answers:["vas","Vas"], why:"ir : tú → vas."},
  {type:"fill", text:"Marta ___ al banco. (ir)", answers:["va","Va"], why:"ir : ella → va."},
  {type:"fill", text:"Nosotros ___ a pie. (ir)", answers:["vamos","Vamos"], why:"ir : nosotros → vamos."},
  {type:"fill", text:"Vosotros ___ en tren. (ir)", answers:["vais","Vais"], why:"ir : vosotros → vais (Espagne), sans accent."},
  {type:"fill", text:"Ustedes ___ en taxi. (ir)", answers:["van","Van"], why:"ustedes se conjugue comme ellos : van."},
  {type:"fill", text:"Voy ___ museo. (a + el)", answers:["al"], why:"a + el = al (contraction obligatoire)."},
  {type:"fill", text:"La parada está al lado ___ hotel. (de + el)", answers:["del"], why:"de + el = del : al lado del hotel."},
  {type:"fill", text:"La farmacia está detrás ___ la estación.", answers:["de"], why:"Devant « la », pas de contraction : detrás de la estación."},
  {type:"fill", text:"La farmacia está ___ el banco y el hotel. (« entre »)", answers:["entre"], why:"entre ne prend pas de « de » : entre el banco y el hotel."},
  {type:"choice", q:"Corrige : « Voy a el parque. »", opts:["Voy al parque.","Voy a el parque."], correct:0, why:"a + el se contracte toujours en al."},
  {type:"choice", q:"Corrige : « La parada está cerca de el banco. »", opts:["La parada está cerca del banco.","La parada está cerca de el banco."], correct:0, why:"de + el = del : cerca del banco."},
  {type:"choice", q:"À un monsieur âgé, tu dis :", opts:["Perdona, ¿cómo llego al hotel?","Perdone, ¿cómo llego al hotel?"], correct:1, why:"Un monsieur âgé = usted : Perdone. Perdona est pour le tutoiement."},
  {type:"choice", q:"« Continuez tout droit » en Amérique latine :", opts:["Siga derecho.","Siga detrás."], correct:0, why:"En Amérique latine on dit surtout « siga derecho » (en Espagne : siga todo recto). « detrás » = derrière."},
  {type:"choice", q:"« La gare est loin de la place. »", opts:["La estación está lejos de la plaza.","La estación está cerca de la plaza."], correct:0, why:"lejos de = loin de ; cerca de = près de."},
  {type:"choice", q:"Quel verbe pour « prendre le bus » est neutre dans tous les pays ?", opts:["coger","tomar"], correct:1, why:"tomar est neutre partout. « coger » est normal en Espagne mais vulgaire dans une grande partie de l'Amérique latine."}
 ],
 ANNOTATED: {
  title:"Cómo llegar al museo",
  intro:"Un petit dialogue pour t'entraîner à lire. Touche chaque mot pour voir sa nature et sa traduction, et repère les impératifs : perdone, siga, gire, toma, baja.",
  sentences:[
   {fr:"Excusez-moi, comment aller au musée ?", tokens:[
    {w:"Perdone", tag:"verbe", info:"perdonar · impératif · usted", fr:"excusez-moi", tip:"Impératif usted d'un verbe en -AR : -e. Tutoiement : perdona."},
    {w:"¿cómo", tag:"adverbe", info:"interrogatif", fr:"comment", tip:"Accent écrit : cómo."},
    {w:"llego", tag:"verbe", info:"llegar · présent · yo", fr:"j'arrive", tip:"¿Cómo llego a…? = comment aller à… ?"},
    {w:"al", tag:"préposition", info:"a + el", fr:"au", tip:"a + el = al : museo est masculin."},
    {w:"museo?", tag:"nom", info:"masc. sing.", fr:"musée", tip:"mu-SE-o : trois syllabes."}
   ]},
   {fr:"Continuez tout droit et tournez à gauche.", tokens:[
    {w:"Siga", tag:"verbe", info:"seguir · impératif · usted", fr:"continuez", tip:"g dur ; tutoiement : sigue."},
    {w:"recto", tag:"adverbe", fr:"tout droit", tip:"Invariable : pas de « a » devant."},
    {w:"y", tag:"conjonction", fr:"et"},
    {w:"gire", tag:"verbe", info:"girar · impératif · usted", fr:"tournez", tip:"g = kh ; tutoiement : gira."},
    {w:"a", tag:"préposition", fr:"à"},
    {w:"la", tag:"déterminant", info:"article défini · fém. sing.", fr:"la"},
    {w:"izquierda", tag:"nom", info:"fém. sing.", fr:"gauche", tip:"Contraire : la derecha."}
   ]},
   {fr:"La gare est à côté du pont.", tokens:[
    {w:"La", tag:"déterminant", info:"article défini · fém. sing.", fr:"la"},
    {w:"estación", tag:"nom", info:"fém. sing.", fr:"gare", tip:"Accent écrit sur la dernière syllabe : es-ta-CIÓN."},
    {w:"está", tag:"verbe", info:"estar · présent · ella", fr:"est", tip:"Un lieu se dit avec estar."},
    {w:"al lado", tag:"locution", info:"al lado de", fr:"à côté", tip:"Se termine par « de » : al lado de."},
    {w:"del", tag:"préposition", info:"de + el", fr:"du", tip:"de + el = del : puente est masculin."},
    {w:"puente", tag:"nom", info:"masc. sing.", fr:"pont"}
   ]},
   {fr:"Prends le métro et descends à Sol.", tokens:[
    {w:"Toma", tag:"verbe", info:"tomar · impératif · tú", fr:"prends", tip:"Usted : tome. « tomar » est neutre, contrairement à coger."},
    {w:"el", tag:"déterminant", info:"article défini · masc. sing.", fr:"le"},
    {w:"metro", tag:"nom", info:"masc. sing.", fr:"métro"},
    {w:"y", tag:"conjonction", fr:"et"},
    {w:"baja", tag:"verbe", info:"bajar · impératif · tú", fr:"descends", tip:"Usted : baje. j = kh."},
    {w:"en", tag:"préposition", fr:"à", tip:"On descend « en » une parada (à un arrêt)."},
    {w:"Sol", tag:"nom propre", fr:"Sol", tip:"Station du centre de Madrid."}
   ]}
  ]
 },
 CULTURE_NOTE: {icon:"🚇", title:"Culture, 10 expressions et fiche récap (A1.4)",
  html:"<b>🚇 Culture — demander son chemin</b> En Espagne, on tutoie facilement dans la rue entre jeunes : « Perdona, ¿cómo llego al metro? ». Avec une personne âgée, un employé ou un policier : « Perdone… ». En Amérique latine, <b>usted</b> est très courant même entre inconnus de tous âges. Mots à connaître : « la cuadra » (Amérique latine) = « la manzana » (Espagne), « el carro » = « el coche », « el boleto » = « el billete », « doblar » = « girar ». À Madrid, on achète un billet de métro dans la <b>estación</b> ; à Bogotá, le bus rapide s'appelle <b>TransMilenio</b>. Prends toujours <b>tomar</b> (neutre) : « coger » est vulgaire dans une grande partie de l'Amérique latine.<br><br><b>🧰 10 expressions familières (vérifiées)</b><br>1. <b>Estar en las nubes</b> = être dans la lune.<br>2. <b>Ir sobre ruedas</b> = rouler comme sur des roulettes, tout va bien.<br>3. <b>Poner los puntos sobre las íes</b> = mettre les points sur les i.<br>4. <b>Perder el norte</b> = perdre le nord, perdre ses repères.<br>5. <b>Estar a dos pasos</b> = être à deux pas.<br>6. <b>Ir a toda pastilla</b> = aller à toute vitesse (familier, Espagne). Elle REMPLACE « ir a piñón fijo » du cours source : cette expression ne veut pas dire « foncer tout droit », elle désigne quelqu'un de borné qui revient toujours à la même idée.<br>7. <b>Estar hecho polvo</b> = être épuisé (familier). Pas lié aux trajets : on peut l'être après n'importe quel effort.<br>8. <b>Coger el toro por los cuernos</b> = prendre le taureau par les cornes (Espagne ; Amérique latine : agarrar el toro por los cuernos).<br>9. <b>Tirar la casa por la ventana</b> = jeter l'argent par les fenêtres, dépenser sans compter.<br>10. <b>Ir de punta en blanco</b> = être tiré à quatre épingles.<br><br><b>✍️ Expression écrite — décrire un itinéraire (4 lignes)</b> Modèle (tú) : « Hola, Ana. Para llegar al supermercado, sigue recto por la calle Mayor, gira a la izquierda en el semáforo y cruza la plaza. El supermercado está al lado de la farmacia, enfrente del banco. » Version formelle (usted) : « Para llegar al supermercado, siga recto por la calle Mayor, gire a la izquierda en el semáforo y cruce la plaza. » Vérifie : impératif tú / usted · prépositions de lieu (de + el = del) · pas de « coger ».<br><br><b>🗣️ Expression orale — expliquer un trajet</b> Imagine un touriste perdu dans ta ville. Question : « Perdone, ¿cómo llego a la estación? » Réponse : « Mire, siga recto, gire a la derecha en la esquina y la estación está al lado del puente. » Entre amis : « Perdona, ¿dónde está la estación? — Mira, gira a la derecha y sigue recto. »<br><br><b>📄 Fiche récap</b> Transports : autobús, tren, coche, bici, taxi, avión, metro, a pie · ir : voy, vas, va, vamos, vais, van · ir a + lieu, ir en + transport · a + el = al, de + el = del · impératif tú / usted : gira / gire, sigue / siga, toma / tome, cruza / cruce, baja / baje, sube / suba · prépositions : al lado de, enfrente de, entre, delante de, detrás de, cerca de, lejos de · questions : ¿Cómo llego a…? ¿Dónde está el/la… más cercano/a? · variantes : girar / doblar, coger (Espagne) / tomar, recto / derecho."},
 NEXT_PREVIEW:"A1.5 (Gustos y preferencias) : dire ce que tu aimes, adores, détestes ou préfères avec gustar, encantar, interesar, odiar et preferir (premier verbe à diphtongue e → ie), en tutoiement ET en vouvoiement.",
 META:{vocabTitle:"Transporte / Direcciones : se déplacer et demander son chemin (A1.4)", lectureTitle:"Lucía arrive à Madrid et cherche son hôtel", bilanTitle:"Bravo, tu sais demander ton chemin et guider quelqu'un !", pronLabel:"Direcciones : g (gira / sigue), z / c (cruza / cruce), qu, ll et l'accent écrit", todayLede:"nommer les moyens de transport et les lieux de la ville, demander ton chemin (¿Cómo llego a…?), comprendre et donner une direction avec l'impératif (gira / gire, sigue / siga, toma / tome), situer avec les prépositions de lieu, et dire où tu vas avec ir (voy, vas, va, vamos, vais, van) — en tutoiement ET en vouvoiement"}
};
V.forEach(function(v){ var d = MAP[v.en]; if(!d) throw new Error("Pas d'illustration pour : " + v.en); v.emo = d[0]; v.ex = [d[1], d[2]]; });
})();


// A1.5 — Gustos y preferencias : gustar / encantar / interesar, odiar, preferir (e → ie), « favorito/a » (leçon 205)
(function(){
var MAP = {};
function blk(name, rows){
  rows.forEach(function(r){
    MAP[r[0]] = [r[4], r[5], r[6]];
    if(typeof __NATOUT !== "undefined") __NATOUT[r[0]] = {nat:r[7], reg:r[8] || null};
  });
  var out = __esB(name, rows);
  out.forEach(function(v){ var d = MAP[v.en]; v.emo = d[0]; v.ex = [d[1], d[2]]; });
  return out;
}
var RQ = function(inf, frm, fr){ return {inf:inf, frm:frm, fr:fr}; };
// ligne = [terme, API, français, note, emoji, exemple ES, exemple FR, nature, reg]
var V = [].concat(
 blk("Loisirs et passe-temps", [
  ["el pasatiempo","/pasaˈtjempo/","le passe-temps, le loisir","S'écrit en un seul mot, avec -s- (pas « passatempo », qui est la graphie portugaise/italienne) : pa-sa-TIEM-po. Pluriel : los pasatiempos. Synonyme : la afición.","🎯","Mi pasatiempo favorito es cocinar.","Mon passe-temps favori est de cuisiner.","nom masculin"],
  ["el tiempo libre","/ˈtjempo ˈliβɾe/","le temps libre","On dit « en mi tiempo libre » (pendant mon temps libre). TIEM-po LI-bre. « tiempo » = le temps qui passe, mais aussi la météo (A1.11).","🕒","En mi tiempo libre escucho música.","Pendant mon temps libre, j'écoute de la musique.","expression (nom + adjectif)"],
  ["la afición","/afiˈθjon/","le hobby, la passion","a-fi-CIÓN (c = th en Espagne, s en Amérique latine). Féminin (-ción). Plus fort que pasatiempo : « Mi afición es el cine ».","🎨","Mi afición es la fotografía.","Ma passion, c'est la photographie.","nom féminin"],
  ["el deporte","/deˈpoɾte/","le sport","de-POR-te. Masculin : el deporte, los deportes. Avec « me gusta », l'article est obligatoire : « Me gusta el deporte » (jamais « Me gusta deporte »).","⚽","Me gusta el deporte.","J'aime le sport.","nom masculin"],
  ["la música","/ˈmusika/","la musique","MÚ-si-ca : accent écrit sur le ú. Féminin. « escuchar música » (écouter de la musique) se dit sans article.","🎵","Me encanta la música latina.","J'adore la musique latine.","nom féminin"],
  ["viajar","/βjaˈxaɾ/","voyager","Verbe en -AR régulier (viajo, viajas, viaja…). j = kh : bia-KHAR. Le nom : el viaje (le voyage), avec un seul « j » aussi.","✈️","Me gusta viajar en tren.","J'aime voyager en train.","verbe (infinitif)"],
  ["bailar","/baiˈlaɾ/","danser","Verbe en -AR régulier (bailo, bailas, baila…). bai-LAR. Le nom : el baile (la danse). « bailar salsa », sans article.","💃","A mi hermana le encanta bailar.","Ma sœur adore danser.","verbe (infinitif)"],
  ["leer","/leˈeɾ/","lire","le-ER : deux « e » bien distincts. Verbe en -ER : sa conjugaison arrive en A1.6, ici on l'emploie seulement à l'infinitif après « me gusta ». Le nom : la lectura.","📖","Me gusta leer en casa.","J'aime lire à la maison.","verbe (infinitif)"],
  ["cocinar","/koθiˈnaɾ/","cuisiner","Verbe en -AR régulier (cocino, cocinas…). c devant i = th (Espagne) ou s (Amérique latine) : ko-thi-NAR. On n'emploie ici que l'infinitif (la forme en -ando viendra en A1.8). La cocina = la cuisine (pièce ou art).","🍳","Mi madre cocina muy bien.","Ma mère cuisine très bien.","verbe (infinitif)"],
  ["cantar","/kanˈtaɾ/","chanter","Verbe en -AR régulier (canto, cantas, canta…). La canción = la chanson ; el cantante / la cantante = le chanteur / la chanteuse.","🎤","Mi amiga canta muy bien.","Mon amie chante très bien.","verbe (infinitif)"],
  ["pasear","/paseˈaɾ/","se promener","Verbe en -AR régulier et NON pronominal en espagnol : paseo, paseas, pasea… (« se promener » = pasear, sans « se »). El paseo = la promenade.","🚶","Me gusta pasear por la plaza.","J'aime me promener sur la place.","verbe (infinitif)"],
  ["nadar","/naˈðaɾ/","nager","Verbe en -AR régulier (nado, nadas, nada…). La natación = la natation, la piscina = la piscine. d entre deux voyelles = « th » très doux de l'anglais « this ».","🏊","Mi hermano nada en la piscina.","Mon frère nage à la piscine.","verbe (infinitif)"],
  ["dibujar","/diβuˈxaɾ/","dessiner","Verbe en -AR régulier (dibujo, dibujas…). j = kh : di-bu-KHAR. El dibujo = le dessin.","✏️","A mi hija le gusta dibujar.","Ma fille aime dessiner.","verbe (infinitif)"],
  ["tocar la guitarra","/toˈkaɾ la ɡiˈtara/","jouer de la guitare","Pour un instrument, on dit TOCAR (littéralement « toucher »), jamais « jugar » : tocar el piano, tocar la guitarra. -AR régulier : toco, tocas, toca… gui = gi (u muet).","🎸","Mi primo toca la guitarra.","Mon cousin joue de la guitare.","expression (verbe + nom)"],
  ["el cine","/ˈθine/","le cinéma","THI-ne (Espagne) ou SI-ne (Amérique latine). « Ir al cine » = aller au cinéma (a + el = al). La película = le film.","🎬","Hoy vamos al cine con mis amigos.","Aujourd'hui, nous allons au cinéma avec mes amis.","nom masculin"],
  ["la película","/peˈlikula/","le film","pe-LÍ-cu-la : accent écrit sur le í. Toujours féminin (une película, des películas). Ne confonds pas avec « el cine » (le lieu).","🎞️","La película es muy divertida.","Le film est très amusant.","nom féminin"],
  ["el fútbol","/ˈfutβol/","le football","FÚT-bol, accent écrit sur le ú. En Espagne comme en Amérique latine, el fútbol = notre football (le « soccer » nord-américain).","⚽","No me gusta el fútbol, pero a mi padre le encanta.","Je n'aime pas le football, mais mon père adore ça.","nom masculin"],
  ["la novela","/noˈβela/","le roman","no-BE-la, v = b. Mot transparent. « Una novela histórica » = un roman historique. Le livre en général : el libro.","📚","Me interesan las novelas históricas.","Les romans historiques m'intéressent.","nom féminin"],
  ["el teatro","/teˈatɾo/","le théâtre","te-A-tro : trois syllabes, les voyelles « e-a » sont séparées. Mot transparent.","🎭","Me gusta el teatro.","J'aime le théâtre.","nom masculin"],
  ["los videojuegos","/biðeoˈxweɣos/","les jeux vidéo","bi-de-o-KHUE-gos : j = kh. Un seul mot, masculin pluriel (singulier : el videojuego).","🎮","A mi hermano le gustan los videojuegos.","Mon frère aime les jeux vidéo.","nom masculin (pluriel)"]
 ]),
 blk("Les verbes du goût : gustar, encantar, interesar, odiar, preferir", [
  ["gustar","/ɡusˈtaɾ/","plaire (= aimer)","Verbe « à l'envers » : on ne dit pas « j'aime le sport » mais « le sport me plaît ». gus-TAR. Dans cette leçon, seulement deux formes : gusta (1 chose ou un infinitif) et gustan (plusieurs choses). Jamais « yo gusto ».","😍","Me gusta el deporte.","J'aime le sport.","verbe (infinitif)",RQ("te gusta","le gusta","tu aimes / vous aimez")],
  ["me gusta + singulier","/me ˈɡusta/","j'aime (une seule chose, ou un verbe)","Après « me gusta » : un nom singulier (el café) OU un ou plusieurs infinitifs (viajar, bailar). Me gusta leer y bailar = deux verbes, mais gusta reste au singulier.","👍","Me gusta el café y me gusta leer.","J'aime le café et j'aime lire.","expression (verbe conjugué)"],
  ["me gustan + pluriel","/me ˈɡustan/","j'aime (plusieurs choses)","Dès que ce qui plaît est pluriel, on ajoute -n : me gustan los gatos. Deux noms singuliers = pluriel aussi : « Me gustan la música y el cine ». Faute classique : « Me gusta los libros ».","👍👍","Me gustan los deportes y los videojuegos.","J'aime les sports et les jeux vidéo.","expression (verbe conjugué)"],
  ["encantar","/eŋkanˈtaɾ/","adorer","Même mécanisme que gustar, en plus fort : me encanta viajar, me encantan los gatos. en-kan-TAR. On n'ajoute pas « muy » : « me encanta » suffit déjà.","🥰","Me encanta bailar.","J'adore danser.","verbe (infinitif)",RQ("te encanta","le encanta","tu adores / vous adorez")],
  ["interesar","/inteɾeˈsaɾ/","intéresser","Même mécanisme que gustar : me interesa la música, me interesan los libros. in-te-re-SAR. Ne le confonds pas avec l'adjectif « interesante ».","🧐","Me interesa la historia.","L'histoire m'intéresse.","verbe (infinitif)",RQ("te interesa","le interesa","ça t'intéresse / ça vous intéresse")],
  ["odiar","/oˈðjaɾ/","détester","Verbe RÉGULIER en -AR, avec la personne comme sujet, comme en français : odio, odias, odia, odiamos, odiáis, odian. o-DIAR : « io » = une seule syllabe.","😡","Odio el frío.","Je déteste le froid.","verbe (infinitif)",RQ("odias","odia","tu détestes / vous détestez")],
  ["preferir","/pɾefeˈɾiɾ/","préférer","Verbe à diphtongue e → ie à toutes les personnes SAUF nosotros et vosotros : prefiero, prefieres, prefiere, preferimos, preferís, prefieren. Sujet = la personne, comme en français.","🤔","Prefiero el té.","Je préfère le thé.","verbe (infinitif)",RQ("prefieres","prefiere","tu préfères / vous préférez")],
  ["no importar","/no impoɾˈtaɾ/","ne pas déranger, être égal","Se construit comme gustar : « No me importa cocinar » = ça ne me dérange pas. « ¿Te importa? » / « ¿Le importa? » = ça te / vous dérange ? Pluriel : no me importan los ruidos.","🤷","No me importa cocinar.","Cuisiner ne me dérange pas.","verbe (infinitif)",RQ("¿Te importa?","¿Le importa?","Ça te dérange ? / Ça vous dérange ?")],
  ["me da igual","/me ða iˈɣwal/","ça m'est égal","Expression figée courante partout, réponse neutre à « ¿Qué prefieres? ». Variante : me da lo mismo. i-GUAL, g = g doux (entre voyelles).","🤷‍♀️","¿Té o café? — Me da igual.","Thé ou café ? — Ça m'est égal.","expression"]
 ]),
 blk("Dire à quel point : intensité et accord", [
  ["mucho · muchísimo","/ˈmutʃo · muˈtʃisimo/","beaucoup · énormément","Après le verbe, invariable : me gusta mucho, me encanta muchísimo. ch = tch. Piège : jamais « mucho me gusta » ni « me gusta muy » (« muy » ne va pas après le verbe).","🔝","Me gusta mucho bailar.","J'aime beaucoup danser.","adverbe"],
  ["bastante","/basˈtante/","assez, plutôt","Sens de « plutôt bien » : me gusta bastante = j'aime assez. bas-TAN-te. Ne dis pas « bastant ».","🙂","Me gusta bastante el teatro.","J'aime assez le théâtre.","adverbe"],
  ["un poco","/un ˈpoko/","un peu","Invariable. « No me gusta mucho » = je n'aime pas trop ; « me gusta un poco » = j'aime un peu.","🤏","Me gusta un poco el jazz.","J'aime un peu le jazz.","adverbe (locution)"],
  ["no… nada","/no … ˈnaða/","pas du tout","Double négation obligatoire : « No me gusta NADA » (pas « me gusta nada »). Avec « nada » en fin de phrase, le « no » devant le pronom reste obligatoire.","🙅","No me gusta nada el ruido.","Je n'aime pas du tout le bruit.","adverbe (locution négative)"],
  ["también","/tamˈbjen/","aussi","Pour être d'accord avec une phrase POSITIVE : « Me encanta leer. — A mí también. » tam-BIEN. Faute fréquente : « también » après une négation.","➕","Me gusta cantar. — A mí también.","J'aime chanter. — Moi aussi.","adverbe"],
  ["tampoco","/tamˈpoko/","non plus","Pour être d'accord avec une phrase NÉGATIVE : « No me gusta correr. — A mí tampoco. » tam-PO-ko. Jamais « a mí también » après une négation.","➖","No me gusta el frío. — A mí tampoco.","Je n'aime pas le froid. — Moi non plus.","adverbe"],
  ["a mí también","/a mi tamˈbjen/","moi aussi","Réponse courte qui reprend « a mí » : Me encanta viajar. — A mí también. Au formel : « A mí también, señor ».","🤝","Me encanta viajar. — A mí también.","J'adore voyager. — Moi aussi.","expression"],
  ["a mí tampoco","/a mi tamˈpoko/","moi non plus","Réponse courte à une phrase négative : No me gustan los museos. — A mí tampoco.","🤝","No me gusta nada leer. — A mí tampoco.","Je n'aime pas du tout lire. — Moi non plus.","expression"],
  ["a mí sí · a mí no","/a mi si · a mi no/","moi si · moi non","Pour CONTREDIRE : « No me gusta el café. — A mí sí. » ; « Me gusta el café. — A mí no. » Accent écrit sur « sí » (= oui / si).","↔️","No me gusta bailar. — A mí sí.","Je n'aime pas danser. — Moi, si.","expression"]
 ]),
 blk("Les 6 pronoms de gustar : (a mí) me, (a ti) te, (a usted) le…", [
  ["a mí me gusta","/a mi me ˈɡusta/","moi, j'aime","« A mí » est facultatif : il insiste ou compare. « Me gusta » suffit. Mais le petit pronom « me » est OBLIGATOIRE : on ne dit jamais « a mí gusta ».","🙋","A mí me gusta bailar, ¿y a ti?","Moi, j'aime danser, et toi ?","expression (pronom + verbe)"],
  ["a ti te gusta","/a ti te ˈɡusta/","toi, tu aimes (tutoiement)","Tutoiement : (a ti) te gusta. Au vouvoiement on passera à « le ». ti = pronom après préposition (a ti).","👉","A ti te gusta mucho la música.","Toi, tu aimes beaucoup la musique.","expression (pronom + verbe)",RQ("a ti te gusta","a usted le gusta","toi, tu aimes / vous, vous aimez")],
  ["a usted le gusta","/a usˈteð le ˈɡusta/","vous aimez (vouvoiement)","Formel : (a usted) le gusta. Même pronom « le » que pour él / ella : on voit la différence grâce à « a usted ». Mot de politesse : señor, señora.","🎩","A usted le gusta el teatro, señor.","Vous aimez le théâtre, monsieur.","expression (pronom + verbe)"],
  ["a él, a ella le gusta","/a el, a ˈeʎa le ˈɡusta/","lui, elle aime","« Le » sert pour él, ella et usted. Si on ne précise pas la personne, on la nomme : « A mi hermano le gusta nadar ».","🧑","A mi hermana le gusta nadar.","Ma sœur aime nager.","expression (pronom + verbe)"],
  ["a nosotros nos gusta","/a noˈsotɾos nos ˈɡusta/","nous aimons","« Nos » = à nous. Sujet « nosotros » facultatif : « Nos gusta pasear ». nos-O-tros.","👫","A nosotros nos gusta pasear.","Nous, nous aimons nous promener.","expression (pronom + verbe)"],
  ["a vosotros os gusta","/a βoˈsotɾos os ˈɡusta/","vous aimez (Espagne, plusieurs amis)","« Os » = vosotros (Espagne seulement). En Amérique latine, on utilise ustedes pour TOUS les « vous » : a ustedes les gusta.","👥","¿Os gusta el cine, chicos?","Vous aimez le cinéma, les amis ?","expression (pronom + verbe)"],
  ["a ellos, a ustedes les gusta","/a ˈeʎos, a usˈteðes les ˈɡusta/","eux, vous (ustedes) aiment","« Les » = à eux / à elles / à ustedes. Pluriel de « le ». ¡Attention : gusta / gustan dépend de la CHOSE, pas de « les » !","👥","A mis padres les gusta viajar.","Mes parents aiment voyager.","expression (pronom + verbe)"]
 ]),
 blk("Poser les questions : goûts, favori, choix", [
  ["¿Te gusta…? · ¿Le gusta…?","/te ˈɡusta · le ˈɡusta/","tu aimes… ? · vous aimez… ?","Informel : ¿Te gusta viajar? Formel : ¿Le gusta viajar? On répond « Sí, me gusta » / « No, no me gusta ». Sur le même modèle : ¿Te gustan los gatos? / ¿Le gustan los gatos?","❓","¿Te gusta viajar? — Sí, me encanta.","Tu aimes voyager ? — Oui, j'adore.","question",RQ("¿Te gusta viajar?","¿Le gusta viajar?","Tu aimes voyager ? / Vous aimez voyager ?")],
  ["¿Y a ti? · ¿Y a usted?","/i a ti · i a usˈteð/","et toi ? · et vous ?","Pour renvoyer la question. « ¿Y tú? » ne marche PAS avec gustar : il faut « a ti ».","🔁","Me gusta cantar. ¿Y a ti?","J'aime chanter. Et toi ?","question",RQ("¿Y a ti?","¿Y a usted?","Et toi ? / Et vous ?")],
  ["¿Qué deporte te gusta?","/ke deˈpoɾte te ˈɡusta/","quel sport aimes-tu ?","« Qué » + nom = quel(le) : ¿Qué música te gusta? ¿Qué películas le gustan? Si ce qui plaît est pluriel, gustan : ¿Qué libros te gustan?","🏅","¿Qué deporte le gusta, señor?","Quel sport aimez-vous, monsieur ?","question",RQ("¿Qué deporte te gusta?","¿Qué deporte le gusta?","Quel sport aimes-tu ? / Quel sport aimez-vous ?")],
  ["¿Cuál es tu… favorito/a?","/kwal es tu … faβoˈɾito/","quel est ton… favori(te) ?","Question type de la leçon. Tu → tu, usted → su : ¿Cuál es su deporte favorito? cuál = accent écrit. Pluriel : ¿Cuáles son tus libros favoritos?","⭐","¿Cuál es tu película favorita?","Quel est ton film préféré ?","question",RQ("¿Cuál es tu deporte favorito?","¿Cuál es su deporte favorito?","Quel est ton sport préféré ? / Quel est votre sport préféré ?")],
  ["favorito / favorita","/faβoˈɾito · faβoˈɾita/","favori(te), préféré(e)","S'accorde en genre et en nombre : mi deporte favorito, mi música favorita, mis libros favoritos. fa-bo-RI-to : v = b. Se place après le nom.","🏆","Mi color favorito es el azul.","Ma couleur préférée est le bleu.","adjectif"],
  ["¿Qué prefieres? · ¿Qué prefiere?","/ke pɾeˈfjeɾes · ke pɾeˈfjeɾe/","que préfères-tu ? · que préférez-vous ?","Pour proposer un choix : ¿Qué prefieres, el cine o el teatro? Au formel : ¿Qué prefiere usted? Le pronom sujet « tú / usted » est facultatif.","⚖️","¿Qué prefiere usted, el té o el café?","Que préférez-vous, le thé ou le café ?","question",RQ("¿Qué prefieres?","¿Qué prefiere?","Que préfères-tu ? / Que préférez-vous ?")],
  ["¿Por qué? · porque","/poɾ ˈke · ˈpoɾke/","pourquoi ? · parce que","Deux mots avec accent pour la question (¿por qué?), un mot sans accent pour la réponse (porque). « Me encanta viajar porque es muy interesante. »","💬","Me gusta leer porque es relajante.","J'aime lire parce que c'est relaxant.","question / conjonction"]
 ]),
 blk("Qualifier : les adjectifs d'appréciation", [
  ["interesante","/inteɾeˈsante/","intéressant(e)","Finit en -e : une seule forme au masculin et au féminin ; pluriel : interesantes. in-te-re-SAN-te. Ne confonds pas « me interesa » (le verbe) et « es interesante » (l'adjectif).","🧠","El libro es muy interesante.","Le livre est très intéressant.","adjectif"],
  ["aburrido / aburrida","/aβuˈrriðo · aβuˈrriða/","ennuyeux / ennuyeuse","Piège : « es aburrido » = c'est ennuyeux ; « estoy aburrido » = je m'ennuie. a-bu-RRI-do : rr roulé.","😴","La película es aburrida.","Le film est ennuyeux.","adjectif"],
  ["divertido / divertida","/diβeɾˈtiðo · diβeɾˈtiða/","amusant(e), drôle","di-ber-TI-do : v = b. S'emploie pour une activité (un juego divertido) comme pour une personne (un amigo divertido).","😄","Mi profesor es muy divertido.","Mon professeur est très amusant.","adjectif"],
  ["difícil","/diˈfiθil/","difficile","Finit par une consonne : invariable en genre ; pluriel : difíciles. Accent écrit sur le í.","😓","El tenis es difícil.","Le tennis est difficile.","adjectif"],
  ["fácil","/ˈfaθil/","facile","Même règle que difícil : invariable en genre, pluriel fáciles. FÁ-cil : c = th (Espagne) ou s (Amérique latine).","😌","Cantar es fácil para ella.","Chanter est facile pour elle.","adjectif"],
  ["genial","/xeˈnjal/","génial(e), super","g devant e = kh : khe-NIAL. Invariable en genre ; pluriel : geniales. Très courant seul : « ¡Genial! » = super !","🌟","La música es genial.","La musique est géniale.","adjectif"],
  ["terrible","/teˈrriβle/","terrible, horrible","Invariable en genre. Dans cette leçon, il a le sens « très mauvais, horrible » : le film est horrible. te-RRI-ble : rr roulé.","😱","El ruido es terrible.","Le bruit est horrible.","adjectif"],
  ["maravilloso / maravillosa","/maɾaβiˈʎoso/","merveilleux / merveilleuse","ll = y (A1.0) : ma-ra-bi-YO-so. Plus soutenu que genial.","✨","El paseo es maravilloso.","La promenade est merveilleuse.","adjectif"],
  ["bonito / bonita","/boˈnito/","joli(e), beau / belle","bo-NI-to. Pour un paysage, une chanson, un objet.","🌸","La canción es muy bonita.","La chanson est très jolie.","adjectif"],
  ["relajante","/relaˈxante/","relaxant(e), reposant(e)","Finit en -e : invariable en genre. r initiale roulée : rre-la-KHAN-te.","🧘","Leer es muy relajante.","Lire est très reposant.","adjectif"],
  ["malo / mala","/ˈmalo · ˈmala/","mauvais(e)","Devant un nom masculin singulier, « malo » perd son -o : un mal libro. Après « es » : es malo. Contraire de « bueno ».","👎","La película es mala.","Le film est mauvais.","adjectif"]
 ]),
 blk("Réagir et répondre", [
  ["¡Qué divertido! · ¡Qué aburrido!","/ke diβeɾˈtiðo · ke aβuˈrriðo/","comme c'est amusant ! · comme c'est ennuyeux !","Exclamation : ¡Qué + adjectif! (¡Qué genial!, ¡Qué difícil!). Accent écrit sur « qué » et points d'exclamation ¡ ! des deux côtés.","🗣️","¡Qué divertido! Me encanta.","Comme c'est amusant ! J'adore.","exclamation"],
  ["¡Me encanta!","/me eŋˈkanta/","j'adore !","Réponse courte et chaleureuse à « ¿Te gusta? ». Pluriel si on parle de plusieurs choses : ¡Me encantan!","💖","¿Te gusta bailar? — ¡Me encanta!","Tu aimes danser ? — J'adore !","exclamation"],
  ["No mucho","/no ˈmutʃo/","pas trop","Réponse polie, moins directe que « no me gusta » : ¿Le gusta el fútbol? — No mucho, gracias.","😐","¿Te gusta el fútbol? — No mucho.","Tu aimes le football ? — Pas trop.","expression"],
  ["Depende","/deˈpende/","ça dépend","Pour nuancer. de-PEN-de. Phrase-bloc : le verbe « depender » (-ER) sera vu en A1.6.","⚖️","¿Te gusta cocinar? — Depende.","Tu aimes cuisiner ? — Ça dépend.","expression"]
 ]),
 blk("Prononciation : ie, io, gu, cuál", [
  ["ie : prefiero","/pɾeˈfjeɾo/","pre-FIE-ro (ie = « yé »)","« ie » est UNE syllabe : pre-FIE-ro (3 syllabes). Avec diphtongue, l'accent tonique tombe SUR le « ie » : pre-FIE-ro, pre-FIE-res, pre-FIE-re, pre-FIE-ren. Sans diphtongue (nosotros) : pre-fe-RI-mos.","🔈","Prefiero el cine.","Je préfère le cinéma.","note de prononciation"],
  ["io : odio","/ˈoðjo/","O-dio (io = « yo »)","« io » forme une syllabe : O-dio (2 syllabes), pas o-di-o. Même chose dans odiar : o-DIAR.","🔈","Odio el ruido.","Je déteste le bruit.","note de prononciation"],
  ["gu devant s : gusta","/ˈɡusta/","GUS-ta (u prononcé « ou »)","Dans « gusta » et « gustar », le u se prononce « ou » : on est devant a / s, pas devant e / i (où il serait muet : guitarra). g dur de « gare ».","🔈","Me gusta la guitarra.","J'aime la guitare.","note de prononciation"],
  ["cuál : accent écrit","/kwal/","quel (accent sur le a)","« cual » avec l'accent = pronom interrogatif (¿Cuál es?). Sans accent, « cual » est un mot rare (« tal cual »). Se prononce en une seule syllabe : kwal.","🔈","¿Cuál es tu deporte favorito?","Quel est ton sport préféré ?","note de prononciation"]
 ]),
 blk("Variantes Espagne / Amérique latine", [
  ["pasarlo bien · pasarla bien","/paˈsaɾlo ˈbjen · paˈsaɾla ˈbjen/","s'amuser, passer un bon moment","« Pasarlo bien » = Espagne ; « pasarla bien » = Amérique latine (Mexique, Colombie…). Se conjugue : lo paso bien, lo pasas bien, lo pasamos bien. Contraire : pasarlo mal. Le « lo » / « la » est une habitude figée.","🥳","Con mis amigos lo paso genial.","Avec mes amis, je m'éclate.","expression (verbe + pronom)"]
 ]),
 blk("Bonus : 10 expressions familières sur les passions", [
  ["estar en su salsa","/esˈtaɾ en su ˈsalsa/","être dans son élément (littéralement : dans sa sauce)","Familier, comprise partout. Le possessif suit la personne : estoy en mi salsa, estás en tu salsa, está en su salsa (usted aussi).","🍅","Mi madre está en su salsa en la cocina.","Ma mère est dans son élément dans la cuisine.","expression familière",RQ("estás en tu salsa","está en su salsa","tu es dans ton élément / vous êtes dans votre élément")],
  ["ser un as","/seɾ un as/","être un as, un champion","Familier. « as » reste invariable pour un homme ou une femme : ella es un as. « Un as de… » : un as del fútbol. Écrit en minuscule (ser un as), pas « As ».","🏅","Mi hermana es un as del baile.","Ma sœur est une championne de danse.","expression familière"],
  ["pasarlo bien (Espagne)","/paˈsaɾlo ˈbjen/","bien s'amuser, s'éclater","Espagne : pasarlo bien. Amérique latine : pasarla bien. Avec « genial » (« lo paso genial ») ou « fenomenal », on insiste.","🎉","Los niños lo pasan muy bien en el parque.","Les enfants s'amusent beaucoup au parc.","expression familière"],
  ["estar colgado por","/esˈtaɾ kolˈɡaðo poɾ/","être dingue de, accro à (quelqu'un)","Familier, surtout pour une personne qui plaît : « Está colgado por una chica de su clase ». Seul, « estar colgado » peut avoir d'autres sens selon les pays : reste sur « colgado por + personne ». Coup de foudre : « un flechazo » (Espagne) ou « amor a primera vista ».","💘","Está colgado por una chica de su clase.","Il est dingue d'une fille de sa classe.","expression familière"],
  ["no ver la hora de","/no beɾ la ˈoɾa de/","avoir hâte de (+ infinitif)","Espagne, familier. « No ver el momento » n'existe pas. Amérique latine : « tener muchas ganas de + infinitif ». Phrase-bloc : « ver » sera conjugué en A1.6, ici on retient seulement « no veo la hora de… ».","⏳","No veo la hora de viajar a Madrid.","J'ai hâte de voyager à Madrid.","expression familière"],
  ["estar chupado","/esˈtaɾ tʃuˈpaðo/","être archi-facile, du gâteau","Espagne, très familier : « El examen está chupado ». Attention : « chupado » peut aussi vouloir dire « maigre » ; ici, avec « estar » et un exercice, c'est « facile ».","🍰","El examen está chupado.","L'examen est du gâteau.","expression familière"],
  ["tener madera de","/teˈneɾ maˈdeɾa de/","avoir l'étoffe de, avoir du talent pour","Littéralement « avoir du bois de… ». Suivi d'un métier ou d'un rôle : tener madera de cantante, de líder. Se conjugue avec tener (tienes, tiene…).","🪵","Tienes madera de cantante.","Tu as l'étoffe d'un chanteur.","expression familière",RQ("Tienes madera de cantante.","Usted tiene madera de cantante.","tu as l'étoffe / vous avez l'étoffe")],
  ["estar pez (en)","/esˈtaɾ peθ en/","être nul (en), n'y rien connaître","Espagne, familier, toujours avec « en + domaine » : estar pez en matemáticas. Littéralement « être poisson ». pez : z final = th.","🐟","Estoy pez en deportes.","Je suis nul en sport.","expression familière"],
  ["ir a tope","/iɾ a ˈtope/","y aller à fond","Espagne, familier. « tope » est un nom (la limite) : « a tope » = à fond. Ne le confonds pas avec « ir a + infinitif » (le futur proche, vu en A1.9). Ex : voy a tope, vas a tope.","🔥","Mi padre va a tope con el deporte.","Mon père est à fond dans le sport.","expression familière"],
  ["estar en su elemento","/esˈtaɾ en su eleˈmento/","être comme un poisson dans l'eau","Plus neutre que « estar en su salsa », même sens. Le possessif suit la personne : estoy en mi elemento, está en su elemento.","🐠","Mi padre está en su elemento en la montaña.","Mon père est comme un poisson dans l'eau en montagne.","expression familière"]
 ])
);
LESSONS_ES[205] = {
 code:"A1.5", level:"A1",
 VOCAB: V,
 MEM_WORDS: __esIdx(V, ["el pasatiempo","gustar","encantar","preferir","odiar","¿Te gusta…? · ¿Le gusta…?","también","tampoco","favorito / favorita","aburrido / aburrida"]),
 MINI_CHECKS: [
  {q:"Quelle phrase est correcte ?", opts:["Me gusta los libros.","Me gustan los libros."], correct:1, fb:"« los libros » est pluriel : le verbe s'accorde avec la chose aimée, jamais avec la personne : gustan."},
  {q:"« Je préfère » (preferir, yo) :", opts:["prefero","prefiero","prefiro"], correct:1, fb:"Verbe à diphtongue : e → ie à la 1re personne du singulier : prefiero."},
  {q:"« Tu aimes le sport ? » (tutoiement)", opts:["¿Te gusta el deporte?","¿Tú gustas el deporte?","¿Gustas el deporte?"], correct:0, fb:"On met le petit pronom « te » (à toi) : ¿Te gusta el deporte? Le sujet de gusta est « el deporte »."},
  {q:"« Je déteste le bruit. »", opts:["Me odia el ruido.","Odio el ruido."], correct:1, fb:"Odiar est un verbe régulier à sujet personne : yo odio. On ne l'utilise PAS à l'envers, contrairement à gustar."},
  {q:"À un directeur, tu demandes :", opts:["¿Te gusta viajar?","¿Le gusta viajar, señor?"], correct:1, fb:"Vouvoiement : « le » et « señor ». Le tutoiement « te gusta » est réservé aux amis et à la famille."},
  {q:"« Me encanta leer. — Moi aussi. »", opts:["A mí también.","A mí tampoco."], correct:0, fb:"Phrase positive → también. Tampoco = moi non plus, après une phrase négative."},
  {q:"« Nous préférons » (preferir, nosotros) :", opts:["prefierimos","preferimos"], correct:1, fb:"Pas de diphtongue à nosotros et vosotros (preferimos, preferís), car l'accent tonique tombe sur la terminaison."},
  {q:"« Mon sport favori » :", opts:["mi deporte favorito","mi favorito deporte","mi deporte favorita"], correct:0, fb:"favorito se place après le nom et s'accorde avec lui : deporte (masculin) → favorito."}
 ],
 ROUNDS: [
  __esR("Me gusta mucho viajar.","J'aime beaucoup voyager."),
  __esR("Me gustan los deportes.","J'aime les sports."),
  __esR("A mí me encanta bailar.","Moi, j'adore danser."),
  __esR("No me gustan nada los deportes violentos.","Je n'aime pas du tout les sports violents."),
  __esR("¿Te gusta cocinar para tus amigos?","Tu aimes cuisiner pour tes amis ?"),
  __esR("¿Le gusta la música, señora?","Aimez-vous la musique, madame ?"),
  __esR("Mi hermano prefiere el cine.","Mon frère préfère le cinéma."),
  __esR("¿Cuál es tu pasatiempo favorito?","Quel est ton passe-temps favori ?"),
  __esR("Mi pasatiempo favorito es cocinar.","Mon passe-temps favori est de cuisiner."),
  __esR("A nosotros nos gusta pasear.","Nous, nous aimons nous promener."),
  __esR("Odio el frío, pero me gusta nadar.","Je déteste le froid, mais j'aime nager."),
  __esR("A mis padres les gusta viajar.","Mes parents aiment voyager."),
  __esR("¿Prefieres la música o el cine?","Tu préfères la musique ou le cinéma ?")
 ],
 QUIZ: [
  {cat:"ecrit", q:"« J'aime le sport. »", opts:["Me gusta el deporte.","Me gustan el deporte.","Yo gusto el deporte."], correct:0, why:"Le sport est singulier : me gusta. « Yo gusto » n'existe pas dans ce sens."},
  {cat:"ecrit", q:"Me ___ los gatos.", opts:["gusta","gustan","gusto"], correct:1, why:"los gatos est pluriel : le verbe s'accorde avec la chose aimée → gustan."},
  {cat:"ecrit", q:"« J'aime voyager et danser. »", opts:["Me gusta viajar y bailar.","Me gustan viajar y bailar.","Gusto viajar y bailar."], correct:0, why:"Un ou plusieurs infinitifs → gusta au singulier : Me gusta viajar y bailar."},
  {cat:"ecrit", q:"A ti ___ la música.", opts:["me gusta","te gusta","le gusta"], correct:1, why:"Le pronom suit la personne : a ti → te. « La música » est singulier : gusta."},
  {cat:"ecrit", q:"Pour vouvoyer une dame : « ¿___ el café, señora? »", opts:["Te gusta","Le gusta","Les gusta"], correct:1, why:"Usted et la 3e personne prennent « le » : ¿Le gusta el café, señora?"},
  {cat:"ecrit", q:"A nosotros ___ cocinar.", opts:["nos gusta","nos gustan","os gusta"], correct:0, why:"nosotros → nos ; cocinar est un infinitif → gusta."},
  {cat:"ecrit", q:"A mis padres ___ los museos.", opts:["le gustan","les gustan","les gusta"], correct:1, why:"mis padres → les (pluriel) ; los museos est pluriel → gustan. Deux marques de pluriel, deux raisons différentes."},
  {cat:"ecrit", q:"Yo ___ el frío. (odiar)", opts:["odio","odia","odias"], correct:0, why:"Odiar est régulier : yo odio, tú odias, él odia. Ici yo → odio."},
  {cat:"ecrit", q:"Tú ___ el té. (preferir)", opts:["preferes","prefieres","prefires"], correct:1, why:"Diphtongue e → ie à tú : prefieres."},
  {cat:"ecrit", q:"Nosotros ___ cocinar en casa. (preferir)", opts:["preferimos","prefierimos","prefieremos"], correct:0, why:"Pas de diphtongue à nosotros : preferimos (pre-fe-RI-mos)."},
  {cat:"ecrit", q:"Me gusta el cine. — A mí ___ .", opts:["también","tampoco","nada"], correct:0, why:"On approuve une phrase positive : también. Tampoco servirait après une négation."},
  {cat:"ecrit", q:"« Moi non plus. » (réponse à « No me gusta correr »)", opts:["A mí también.","A mí tampoco.","A mí sí."], correct:1, why:"Phrase négative + accord = tampoco. « A mí sí » voudrait dire le contraire : moi, si, j'aime."},
  {cat:"ecrit", q:"Comment demander à un ami son sport préféré ?", opts:["¿Cuál es tu deporte favorito?","¿Cuál es su deporte favorito?","¿Cuál eres tu deporte favorito?"], correct:0, why:"Tutoiement : tu. « su » est réservé à usted. Et on dit « es » (ser), pas « eres », car le sujet est « el deporte »."},
  {cat:"ecrit", q:"« Je déteste cuisiner. »", opts:["Odio cocinar.","Me odia cocinar.","Odio cocino."], correct:0, why:"Odiar + infinitif : Odio cocinar. Pas de pronom « me » : odiar n'est pas un verbe à la gustar."},
  {cat:"oral", audio:"Me gusta mucho bailar salsa.", q:"Écoute : qu'est-ce qui plaît à la personne ?", opts:["Danser la salsa","Cuisiner","Voyager"], correct:0, why:"« bailar » = danser. « me gusta mucho » = j'aime beaucoup."},
  {cat:"oral", audio:"No me gustan nada los deportes violentos.", q:"Écoute : la personne…", opts:["adore les sports violents","n'aime pas du tout les sports violents","aime un peu les sports"], correct:1, why:"no… nada = pas du tout. « gustan » : les deportes sont pluriel."},
  {cat:"oral", audio:"¿Le gusta viajar, señora?", q:"Écoute : la question est…", opts:["informelle (tutoiement)","formelle (vouvoiement)"], correct:1, why:"« le gusta » et « señora » : vouvoiement. Au tutoiement : ¿Te gusta viajar?"},
  {cat:"oral", audio:"Prefiero el té.", q:"Écoute : que préfère la personne ?", opts:["Le thé","Le café","L'eau"], correct:0, why:"prefiero = je préfère ; té = thé (accent écrit, il le distingue de « te », le pronom)."},
  {cat:"oral", audio:"No me gusta correr, ¿y a ti?", q:"Écoute : que demande la personne à la fin ?", opts:["Si l'autre aime courir aussi","Où l'autre court","Quand l'autre court"], correct:0, why:"« ¿Y a ti? » = et toi ? (sous-entendu : tu aimes courir ?)."},
  {cat:"comprehension", passage:"Hola, me llamo Sofía. En mi tiempo libre, me gusta mucho leer y escuchar música clásica. Sin embargo, no me gustan nada los deportes violentos. Mi pasatiempo favorito es cocinar para mis amigos.", q:"Que fait Sofía pendant son temps libre ?", opts:["Elle lit et écoute de la musique classique","Elle fait du sport","Elle voyage"], correct:0, why:"« leer y escuchar música clásica » : lire et écouter de la musique classique."},
  {cat:"comprehension", passage:"Hola, me llamo Sofía. En mi tiempo libre, me gusta mucho leer y escuchar música clásica. Sin embargo, no me gustan nada los deportes violentos. Mi pasatiempo favorito es cocinar para mis amigos.", q:"Qu'est-ce que Sofía n'aime pas du tout ?", opts:["Les sports violents","Cuisiner","La musique"], correct:0, why:"« no me gustan nada los deportes violentos » : pas du tout les sports violents (gustan = pluriel)."},
  {cat:"comprehension", passage:"Hola, me llamo Sofía. En mi tiempo libre, me gusta mucho leer y escuchar música clásica. Sin embargo, no me gustan nada los deportes violentos. Mi pasatiempo favorito es cocinar para mis amigos.", q:"Quel est le passe-temps favori de Sofía ?", opts:["Cuisiner pour ses amis","Lire","Danser"], correct:0, why:"« Mi pasatiempo favorito es cocinar para mis amigos »."},
  {cat:"comprehension", passage:"Luis: Hola, Ana. ¿Te gusta viajar? — Ana: Sí, me encanta. Prefiero viajar con mis amigos. ¿Y a ti? — Luis: A mí también, pero no me gusta nada el avión. — Ana: ¡A mí tampoco!", q:"Que préfère Ana ?", opts:["Voyager avec ses amis","Voyager seule","Rester chez elle"], correct:0, why:"« Prefiero viajar con mis amigos » : elle préfère voyager avec ses amis."},
  {cat:"comprehension", passage:"Luis: Hola, Ana. ¿Te gusta viajar? — Ana: Sí, me encanta. Prefiero viajar con mis amigos. ¿Y a ti? — Luis: A mí también, pero no me gusta nada el avión. — Ana: ¡A mí tampoco!", q:"Ana répond « A mí tampoco » : cela veut dire…", opts:["Elle n'aime pas l'avion non plus","Elle n'aime pas voyager","Elle aime l'avion"], correct:0, why:"Luis vient de dire une phrase négative (no me gusta nada el avión) : tampoco = moi non plus."}
 ],
 PRON_VERBS: [
  {en:"Prefiero el té.", fr:"Je préfère le thé. (pre-FIE-ro : « ie » = une syllabe ; té : accent écrit)"},
  {en:"Odio el frío.", fr:"Je déteste le froid. (O-dio : « io » = une syllabe ; FRÍ-o)"},
  {en:"Me gusta mucho viajar.", fr:"J'aime beaucoup voyager. (GUS-ta ; MU-cho : ch = tch ; bia-KHAR : j = kh)"},
  {en:"Me gustan los videojuegos.", fr:"J'aime les jeux vidéo. (GUS-tan ; bi-de-o-KHUE-gos : v = b, j = kh)"},
  {en:"Me encanta cocinar.", fr:"J'adore cuisiner. (en-KAN-ta ; ko-thi-NAR en Espagne, ko-si-NAR en Amérique latine)"},
  {en:"¿Cuál es tu deporte favorito?", fr:"Quel est ton sport préféré ? (kwal : une syllabe ; fa-bo-RI-to : v = b)"},
  {en:"Me interesa la música.", fr:"La musique m'intéresse. (in-te-RE-sa ; MÚ-si-ca)"},
  {en:"No me gusta nada leer.", fr:"Je n'aime pas du tout lire. (NA-da : d doux ; le-ER : deux « e »)"},
  {en:"A mí también. A mí tampoco.", fr:"Moi aussi. Moi non plus. (tam-BIEN ; tam-PO-ko)"},
  {en:"Es genial y muy divertido.", fr:"C'est génial et très amusant. (khe-NIAL : g = kh ; di-ber-TI-do)"}
 ],
 READING: [
  "¡Hola! Me llamo Sofía y tengo veinticinco años.",
  "En mi tiempo libre, me gusta mucho leer y escuchar música clásica.",
  "Sin embargo, no me gustan nada los deportes violentos.",
  "Mi pasatiempo favorito es cocinar para mis amigos.",
  "Me encanta viajar porque es muy interesante.",
  "A mi hermano le gusta el cine, pero a mí no.",
  "Prefiero las películas divertidas.",
  "Mi madre odia bailar, pero mi padre baila muy bien.",
  "Y tú, ¿prefieres la música o el deporte?",
  "Y usted, señor, ¿cuál es su pasatiempo favorito?"
 ],
 GLOSS: [
  {en:"sin embargo", fr:"cependant, pourtant (connecteur d'opposition ; phrase-bloc)"},
  {en:"clásica", fr:"classique (féminin, accordé avec « música »)"},
  {en:"violentos", fr:"violents (masculin pluriel, accordé avec « deportes »)"},
  {en:"no me gustan nada", fr:"je n'aime pas du tout (no + nada ; gustan car « los deportes » est pluriel)"},
  {en:"para", fr:"pour (cocinar para mis amigos = cuisiner pour mes amis)"},
  {en:"A mi hermano le gusta", fr:"mon frère aime (littéralement « à mon frère, ça plaît »)"},
  {en:"pero a mí no", fr:"mais moi non (« a mí no » = moi non)"},
  {en:"veinticinco", fr:"vingt-cinq (21-29 : un seul mot)"}
 ],
 GRAMMAR1: {
  heading:"GUSTAR, ENCANTAR, INTERESAR : le verbe « à l'envers »",
  lede:"En français, le sujet est la personne qui aime : « j'aime les chats ». En espagnol, le sujet est la CHOSE aimée : « les chats me plaisent » (me gustan los gatos). Une fois ce réflexe acquis, tu sauras dire que tu aimes, que tu adores, que quelque chose t'intéresse, et poser la même question à un ami (tú) ou à une personne âgée (usted).",
  conj:[
   ["a mí →","me gusta / me gustan","Me gusta bailar. Me gustan los deportes."],
   ["a ti →","te gusta / te gustan","¿Te gusta cocinar? ¿Te gustan las películas?"],
   ["a él, a ella, a usted →","le gusta / le gustan","A mi madre le gusta leer. ¿Le gusta viajar, señor?"],
   ["a nosotros/as →","nos gusta / nos gustan","Nos gusta pasear. Nos gustan los museos."],
   ["a vosotros/as →","os gusta / os gustan","¿Os gusta el cine? ¿Os gustan los videojuegos?"],
   ["a ellos, ellas, ustedes →","les gusta / les gustan","A mis padres les gusta viajar. ¿Les gustan los museos?"]
  ],
  ruleHtml:"📖 <b>1. Le mécanisme.</b> Trois pièces : <b>pronom (à qui)</b> + <b>gusta / gustan</b> + <b>la chose qui plaît</b>. Me gusta el deporte = « le sport me plaît ». Le verbe s'accorde UNIQUEMENT avec la chose aimée, jamais avec la personne.<br><br>👥 <b>2. Les 6 pronoms</b> : <b>me</b> (a mí) · <b>te</b> (a ti) · <b>le</b> (a él, a ella, a usted) · <b>nos</b> (a nosotros) · <b>os</b> (a vosotros, Espagne) · <b>les</b> (a ellos, a ellas, a ustedes). Le pronom est OBLIGATOIRE ; « a mí, a ti, a usted… » est facultatif et sert à insister ou comparer : <b>A mí me gusta bailar, ¿y a ti?</b> On dit toujours « me gusta », jamais « a mí gusta ».<br><br>✅ <b>3. gusta ou gustan ?</b> <b>gusta</b> = UNE chose au singulier OU un/plusieurs infinitifs : <b>Me gusta el café. Me gusta viajar. Me gusta leer y bailar.</b> <b>gustan</b> = plusieurs choses : <b>Me gustan los gatos. Me gustan la música y el cine.</b> (deux noms = pluriel). L'adjectif s'accorde : <b>Me gustan los libros interesantes.</b> Mot-clé : l'article défini est obligatoire : <b>Me gusta el deporte</b>, jamais « Me gusta deporte ».<br><br>👥 <b>4. Informel ET formel.</b> Tutoiement : <b>¿Te gusta viajar? ¿Te gustan los gatos? ¿Y a ti?</b> Vouvoiement (usted, señor, señora) : <b>¿Le gusta viajar? ¿Le gustan los gatos? ¿Y a usted?</b> Entre amis en Espagne : <b>¿Os gusta viajar?</b> ; en Amérique latine : <b>¿Les gusta viajar?</b> (ustedes).<br><br>💪 <b>5. Les cousins.</b> <b>encantar</b> (adorer) et <b>interesar</b> (intéresser) fonctionnent EXACTEMENT pareil : <b>Me encanta viajar. Me encantan los gatos. Me interesa la historia. Me interesan las novelas.</b> Même chose pour <b>no importar</b> : <b>No me importa cocinar</b> (ça ne me dérange pas), <b>¿Te importa? / ¿Le importa?</b> (ça te / vous dérange ?). Odiar, lui, est un verbe normal (voir ci-dessous GRAMMAR2).<br><br>📊 <b>6. L'intensité</b> (toujours après le verbe) : me gusta <b>muchísimo</b> / <b>mucho</b> / <b>bastante</b> / <b>un poco</b> ; négation : <b>no me gusta nada</b> (pas du tout) ou <b>no me gusta mucho</b> (pas trop). « No » se place devant le pronom : <b>No me gusta el fútbol.</b><br><br>🤝 <b>7. Accord et désaccord.</b> <b>A mí también</b> (moi aussi) après une phrase POSITIVE ; <b>a mí tampoco</b> (moi non plus) après une phrase NÉGATIVE ; <b>a mí sí</b> / <b>a mí no</b> pour contredire. Exemples : Me encanta leer. — A mí también. · No me gusta correr. — A mí tampoco. · No me gusta el café. — A mí sí.<br><br>⚠️ <b>8. Pièges francophones</b> : « Me gusta los libros » (faux : gustan) · « Yo gusto el cine » (faux : on n'a pas de « yo gusto » dans ce sens ; et « Me gustas » veut dire « tu me plais ») · « También » après une négation (faux : tampoco) · « ¿Y tú? » pour renvoyer la question (il faut « ¿Y a ti? »).",
  dialogueLede:"Deux amis se parlent de leurs loisirs (tutoiement) :",
  dialogue:[
   {who:"them", en:"¡Hola, Ana! ¿Qué tal? ¿Te gusta viajar?", fr:"Salut, Ana ! Ça va ? Tu aimes voyager ?"},
   {who:"you", en:"Sí, me encanta viajar porque es muy interesante. ¿Y a ti?", fr:"Oui, j'adore voyager parce que c'est très intéressant. Et toi ?"},
   {who:"them", en:"A mí también. Me gustan los museos y las novelas históricas.", fr:"Moi aussi. J'aime les musées et les romans historiques."},
   {who:"you", en:"A mí me interesan los museos, pero no me gusta nada el ruido.", fr:"Les musées m'intéressent, mais je n'aime pas du tout le bruit."},
   {who:"them", en:"A mí tampoco. ¡Es terrible!", fr:"Moi non plus. C'est horrible !"}
  ],
  whyLabel:"Pourquoi l'espagnol « renverse » la phrase ?",
  whyText:"Dans « me gusta el café », le sujet grammatical est <b>le café</b> : c'est lui qui « plaît ». C'est pour cela que le verbe change (<b>gusta / gustan</b>) selon ce qui est aimé, et que <b>« yo gusto »</b> ou <b>« gustas »</b> ne servent pas à dire « j'aime ». Ce réflexe revient partout (encantar, interesar, doler, importar…), alors installe-le maintenant. <b>Méthode en 3 étapes</b> : 1) traduis MOT À MOT en français (« Les chats me plaisent »), 2) trouve ce qui plaît (les chats = pluriel → gustan), 3) choisis le pronom de la personne (à moi → me). Pour le vouvoiement, c'est la même phrase, seul le pronom change : <b>¿Le gusta el café, señora?</b>"
 },
 GRAMMAR2: {
  heading:"PREFERIR (e → ie), ODIAR et « ¿Cuál es tu… favorito? »",
  dialogueLede:"Dans une agence de voyage, un conseiller et une cliente (vouvoiement) :",
  dialogue:[
   {who:"them", en:"Buenos días, señora. ¿Qué prefiere usted, el mar o la montaña?", fr:"Bonjour, madame. Que préférez-vous, la mer ou la montagne ?"},
   {who:"you", en:"Prefiero el mar, porque me gusta nadar. ¿Y usted?", fr:"Je préfère la mer, parce que j'aime nager. Et vous ?"},
   {who:"them", en:"Yo prefiero la montaña. Odio el calor.", fr:"Moi, je préfère la montagne. Je déteste la chaleur."},
   {who:"you", en:"¿Cuál es su pasatiempo favorito, señor?", fr:"Quel est votre passe-temps favori, monsieur ?"},
   {who:"them", en:"Mi pasatiempo favorito es viajar. Me da igual el destino.", fr:"Mon passe-temps favori est de voyager. La destination m'est égale."}
  ],
  ruleHtml:"📖 <b>1. PREFERIR (préférer)</b> est un verbe à <b>diphtongue</b> : le <b>e</b> du radical devient <b>ie</b> aux personnes où ce radical porte l'accent tonique, c'est-à-dire <b>à toutes sauf nosotros et vosotros</b> :<br>• yo → <b>prefiero</b> · tú → <b>prefieres</b> · él, ella, usted → <b>prefiere</b><br>• nosotros → <b>preferimos</b> · vosotros → <b>preferís</b> · ellos, ustedes → <b>prefieren</b><br>Astuce : dessine une « botte » autour du tableau : les 4 formes qui portent le ie (yo, tú, él, ellos) sont dans la botte ; nosotros et vosotros restent dehors. Le sujet est la PERSONNE : c'est un verbe normal, comme en français.<br><br>✅ <b>2. Emploi</b> : <b>preferir + nom</b> (Prefiero el té) ou <b>+ infinitif</b> (Prefiero viajar en tren). Pour proposer un choix : <b>¿Qué prefieres, el cine o el teatro?</b> (tu) · <b>¿Qué prefiere usted, el té o el café?</b> (usted). Réponse : <b>Prefiero el cine.</b><br><br>😡 <b>3. ODIAR (détester)</b> : verbe RÉGULIER en -AR, sans diphtongue : <b>odio, odias, odia, odiamos, odiáis, odian</b>. Sujet = la personne : <b>Odio el ruido. Mi madre odia bailar.</b> À ne pas confondre avec « me gusta » : on n'écrit pas « me odio el ruido ». Pour dire « je n'aime pas », on peut aussi dire <b>no me gusta</b> (plus doux).<br><br>⭐ <b>4. La question « favori »</b> : <b>¿Cuál es tu… favorito/a?</b> (tu) · <b>¿Cuál es su… favorito/a?</b> (usted ; « su » = votre) · Pluriel : <b>¿Cuáles son tus libros favoritos?</b> Réponse : <b>Mi color favorito es el azul.</b> favorito s'accorde avec le nom : <b>mi deporte favorito</b> (masculin), <b>mi música favorita</b> (féminin), <b>mis libros favoritos</b> (masculin pluriel). On emploie « cuál » quand on choisit parmi un ensemble ; devant un nom on dit plutôt « qué » : ¿Qué deporte te gusta?<br><br>⚠️ <b>5. Pièges</b> : « prefero » (faux) · « prefierimos » (faux : la diphtongue disparaît à nosotros) · « Me prefiero el té » (faux : pas de pronom devant preferir) · « ¿Cuál deporte te gusta? » (faux : ¿Qué deporte te gusta?).",
  whyLabel:"Pourquoi le e devient ie (prefiero) mais pas à nosotros ?",
  whyText:"En espagnol, certaines voyelles du radical « grandissent » quand elles portent l'accent de la syllabe : <b>pre-FIE-ro</b>, <b>pre-FIE-res</b>. À nosotros et vosotros, l'accent tombe sur la terminaison (<b>pre-fe-RI-mos</b>, <b>pre-fe-RÍS</b>), donc le radical reste simple. Si tu entends l'accent sur le radical, tu ajoutes « i ». Cette règle de la « botte » sera la même pour d'autres verbes plus tard : apprends bien le schéma maintenant. Pour la politesse, rien ne change : usted se conjugue comme él (prefiere), ustedes comme ellos (prefieren). Et rappelle-toi : preferir et odiar ont la PERSONNE comme sujet, alors que gustar, encantar et interesar ont la CHOSE comme sujet."
 },
 REVIEW: [
  {q:"Pour dire à un ami « tourne à gauche » :", opts:["Gira a la izquierda.","Gire a la izquierda."], correct:0, fb:"Impératif tú : gira. Pour un monsieur (usted) : gire. (rappel A1.4)"},
  {q:"À un monsieur âgé, « suivez tout droit » :", opts:["Sigue recto.","Siga recto."], correct:1, fb:"Usted : siga. Tutoiement : sigue. (rappel A1.4)"},
  {q:"« Enfrente de » signifie :", opts:["en face de","derrière"], correct:0, fb:"enfrente de = en face de ; detrás de = derrière. (rappel A1.4)"},
  {q:"« Nous allons à la gare » :", opts:["Vamos a la estación.","Vais a la estación."], correct:0, fb:"ir au présent : voy, vas, va, vamos, vais, van. Nosotros → vamos ; « vais » est la forme de vosotros. (rappel A1.4)"},
  {q:"En Amérique latine, pour « tourner à droite », on dit plutôt :", opts:["dobla a la derecha","coge a la derecha"], correct:0, fb:"« girar » (Espagne) / « doblar » (Amérique latine). « Coger » est vulgaire en Amérique latine : on emploie « tomar ». (rappel A1.4)"}
 ],
 DRILLS: [
  {type:"fill", text:"Me ___ el cine. (gustar)", answers:["gusta","Gusta"], why:"Le cinéma est singulier : me gusta."},
  {type:"fill", text:"Me ___ las películas. (gustar)", answers:["gustan","Gustan"], why:"las películas est pluriel : me gustan."},
  {type:"fill", text:"A ti te ___ cocinar. (gustar)", answers:["gusta","Gusta"], why:"Un infinitif demande le singulier : te gusta cocinar."},
  {type:"fill", text:"A él le ___ los videojuegos. (encantar)", answers:["encantan","Encantan"], why:"los videojuegos est pluriel : le encantan."},
  {type:"fill", text:"A nosotros nos ___ viajar. (encantar)", answers:["encanta","Encanta"], why:"Un infinitif : encanta au singulier."},
  {type:"fill", text:"A mí me ___ la música. (interesar)", answers:["interesa","Interesa"], why:"la música est singulier : me interesa."},
  {type:"fill", text:"A mis amigos les ___ los museos. (interesar)", answers:["interesan","Interesan"], why:"los museos est pluriel : les interesan."},
  {type:"fill", text:"Yo ___ el ruido. (odiar)", answers:["odio","Odio"], why:"Odiar est régulier : yo odio."},
  {type:"fill", text:"Tú ___ la música clásica. (preferir)", answers:["prefieres","Prefieres"], why:"e → ie à tú : prefieres."},
  {type:"fill", text:"Ella ___ el té. (preferir)", answers:["prefiere","Prefiere"], why:"e → ie à la 3e personne : prefiere."},
  {type:"fill", text:"Nosotros ___ pasear. (preferir)", answers:["preferimos","Preferimos"], why:"Pas de diphtongue à nosotros : preferimos."},
  {type:"fill", text:"Vosotros ___ el cine. (preferir)", answers:["preferís","Preferís"], why:"Pas de diphtongue à vosotros : preferís (accent écrit sur le í)."},
  {type:"fill", text:"Ellos ___ viajar en tren. (preferir)", answers:["prefieren","Prefieren"], why:"e → ie à ellos : prefieren."},
  {type:"fill", text:"¿A usted ___ gusta bailar?", answers:["le","Le"], why:"Usted prend le pronom « le » : ¿Le gusta bailar?"},
  {type:"fill", text:"A vosotros ___ gusta cantar.", answers:["os","Os"], why:"vosotros → os (Espagne). En Amérique latine : a ustedes les gusta."},
  {type:"fill", text:"A mis padres ___ gustan los viajes.", answers:["les","Les"], why:"mis padres = ellos → les ; gustan car « los viajes » est pluriel."},
  {type:"fill", text:"No me gusta el fútbol. — A mí ___ .", answers:["tampoco","Tampoco"], why:"On approuve une phrase négative : tampoco."},
  {type:"fill", text:"Me encanta bailar. — A mí ___ .", answers:["también","También"], why:"On approuve une phrase positive : también (accent écrit)."},
  {type:"choice", q:"Comment dire « J'aime les chats » ?", opts:["Me gustan los gatos.","Me gusta los gatos.","Yo gusto los gatos."], correct:0, why:"Les chats = pluriel → gustan. Le pronom me est obligatoire."},
  {type:"choice", q:"À un directeur, tu demandes :", opts:["¿Te gusta el café?","¿Le gusta el café?"], correct:1, why:"Un directeur → usted : ¿Le gusta el café?"},
  {type:"choice", q:"« Mon livre préféré » :", opts:["mi libro favorito","mi favorito libro"], correct:0, why:"favorito se place après le nom et s'accorde : mi libro favorito."},
  {type:"choice", q:"Quelle phrase est correcte ?", opts:["Odio el fútbol.","Me odio el fútbol."], correct:0, why:"Odiar est un verbe normal : sujet = yo (odio), pas de pronom « me »."},
  {type:"choice", q:"Quelle forme de preferir est FAUSSE ?", opts:["prefieres","prefierimos","prefieren"], correct:1, why:"À nosotros, pas de diphtongue : la bonne forme est preferimos."},
  {type:"choice", q:"« Ça m'est égal » se dit :", opts:["Me da igual.","Me gusta igual."], correct:0, why:"« Me da igual » (ou « me da lo mismo ») = ça m'est égal."}
 ],
 ANNOTATED: {
  title:"Sofía et ses passe-temps",
  intro:"Un petit texte pour t'entraîner. Touche chaque mot pour voir sa nature et sa traduction, et repère les structures « me gusta », « me gustan » et « favorito ».",
  sentences:[
   {fr:"Je m'appelle Sofía et j'aime beaucoup lire.", tokens:[
    {w:"Me llamo", tag:"verbe pronominal", info:"llamarse · présent · yo", fr:"je m'appelle"},
    {w:"Sofía", tag:"nom propre", fr:"Sofía"},
    {w:"y", tag:"conjonction", fr:"et"},
    {w:"me", tag:"pronom", info:"complément indirect · à moi", fr:"à moi", tip:"Le pronom indique À QUI ça plaît."},
    {w:"gusta", tag:"verbe", info:"gustar · présent · 3e pers. sing.", fr:"plaît", tip:"Singulier, car ce qui plaît est un verbe à l'infinitif (leer)."},
    {w:"mucho", tag:"adverbe", fr:"beaucoup", tip:"Après le verbe, comme en français."},
    {w:"leer", tag:"verbe", info:"infinitif · -ER", fr:"lire"}
   ]},
   {fr:"Je n'aime pas du tout les sports violents.", tokens:[
    {w:"No", tag:"adverbe", info:"négation", fr:"ne… pas", tip:"« No » se place devant le pronom."},
    {w:"me", tag:"pronom", info:"complément indirect", fr:"à moi"},
    {w:"gustan", tag:"verbe", info:"gustar · présent · 3e pers. plur.", fr:"plaisent", tip:"Pluriel, car « los deportes » est pluriel."},
    {w:"nada", tag:"adverbe", fr:"du tout", tip:"no… nada = pas du tout."},
    {w:"los", tag:"déterminant", info:"article défini · masc. plur.", fr:"les"},
    {w:"deportes", tag:"nom", info:"masc. plur.", fr:"sports"},
    {w:"violentos", tag:"adjectif", info:"masc. plur.", fr:"violents", tip:"S'accorde avec « deportes »."}
   ]},
   {fr:"Mon passe-temps favori est de cuisiner pour mes amis.", tokens:[
    {w:"Mi", tag:"déterminant", info:"possessif · masc. sing.", fr:"mon"},
    {w:"pasatiempo", tag:"nom", info:"masc. sing.", fr:"passe-temps", tip:"Un seul mot, avec -s-."},
    {w:"favorito", tag:"adjectif", info:"masc. sing.", fr:"favori", tip:"Après le nom ; s'accorde avec lui."},
    {w:"es", tag:"verbe", info:"ser · présent · 3e pers.", fr:"est"},
    {w:"cocinar", tag:"verbe", info:"infinitif · -AR", fr:"cuisiner"},
    {w:"para", tag:"préposition", fr:"pour"},
    {w:"mis", tag:"déterminant", info:"possessif · plur.", fr:"mes"},
    {w:"amigos", tag:"nom", info:"masc. plur.", fr:"amis"}
   ]},
   {fr:"Et vous, monsieur, quel est votre passe-temps favori ?", tokens:[
    {w:"Y", tag:"conjonction", fr:"et"},
    {w:"usted", tag:"pronom sujet", info:"vouvoiement", fr:"vous (politesse)"},
    {w:"señor", tag:"nom", info:"masc. sing.", fr:"monsieur"},
    {w:"¿cuál", tag:"pronom interrogatif", fr:"quel", tip:"Accent écrit : cuál."},
    {w:"es", tag:"verbe", info:"ser · présent · 3e pers.", fr:"est"},
    {w:"su", tag:"déterminant", info:"possessif", fr:"votre", tip:"Avec usted, « su » = votre."},
    {w:"pasatiempo", tag:"nom", info:"masc. sing.", fr:"passe-temps"},
    {w:"favorito?", tag:"adjectif", info:"masc. sing.", fr:"favori"}
   ]}
  ]
 },
 CULTURE_NOTE: {icon:"🎭", title:"Culture, 10 expressions familières et fiche récap (A1.5)",
  html:"<b>🎭 Culture</b> En Espagne, le temps libre se passe souvent en groupe : <b>quedar</b> avec ses amis, faire un <b>paseo</b>, prendre des tapas, aller au cinéma. Poser la question « ¿Cuál es tu pasatiempo favorito? » est un classique pour briser la glace. Avec une personne âgée ou dans un cadre pro, on utilise <b>usted</b> : « ¿Le gusta viajar? » Variantes : Espagne = <b>vosotros / os gusta</b> ; Amérique latine = <b>ustedes / les gusta</b> ; <b>pasarlo bien</b> (Espagne) / <b>pasarla bien</b> (Amérique latine).<br><br><b>🧰 10 expressions familières sur les passions</b><br>1. <b>Estar en su salsa</b> = être dans son élément (littéralement « dans sa sauce »).<br>2. <b>Ser un as</b> = être un champion (« ser un as del fútbol »).<br>3. <b>Pasarlo bien</b> (Espagne) / <b>pasarla bien</b> (Amérique latine) = bien s'amuser, s'éclater.<br>4. <b>Estar colgado por</b> = être dingue de quelqu'un (familier). Pour « coup de foudre » : <b>un flechazo</b> (Espagne) ou <b>amor a primera vista</b>.<br>5. <b>No ver la hora de</b> + infinitif = avoir hâte de (Espagne). ⚠️ « No ver el momento » n'existe pas.<br>6. <b>Estar chupado</b> = être archi-facile, du gâteau (Espagne, très familier).<br>7. <b>Tener madera de</b> = avoir l'étoffe de (« Tienes madera de cantante »).<br>8. <b>Estar pez (en)</b> = être nul en, n'y rien connaître (Espagne, familier).<br>9. <b>Ir a tope</b> = y aller à fond (Espagne, familier).<br>10. <b>Estar en su elemento</b> = être comme un poisson dans l'eau.<br><br><b>✍️ Expression écrite — ta fiche de préférences (4 phrases)</b> Rédige 4 phrases avec me gusta, me gustan, me encanta et prefiero. Modèle : « Me gusta leer en casa. Me gustan las novelas históricas. Me encanta viajar con mis amigos. Prefiero el cine. » Vérifie : gusta ou gustan selon ce qui plaît ? Le pronom me est-il présent ? Accents écrits ?<br><br><b>🗣️ Expression orale — interroger un partenaire</b> Informel : « ¿Te gusta viajar? — Sí, me encanta viajar porque es muy interesante. ¿Y a ti? — A mí también. » Formel : « ¿Le gusta viajar, señora? — Sí, me gusta mucho. ¿Y a usted? » Puis : « ¿Cuál es tu deporte favorito? / ¿Cuál es su deporte favorito? »<br><br><b>📄 Fiche récap</b> gusta (1 chose ou infinitif) / gustan (plusieurs) · pronoms me, te, le, nos, os, les · encantar et interesar comme gustar · odio, odias, odia… (régulier) · prefiero, prefieres, prefiere, preferimos, preferís, prefieren · a mí también (+) / a mí tampoco (−) · ¿Cuál es tu… favorito/a? · ¿Te gusta…? / ¿Le gusta…? · no me importa · me da igual."},
 NEXT_PREVIEW:"A1.6 (Comida y bebida) : parler de ce que tu manges et bois (pan, arroz, carne, pescado, agua, café, zumo…), dire les repas (desayuno, almuerzo, cena), exprimer la quantité (un poco de, mucho/a) et commander poliment avec la formule figée « Quería… » ; tu verras aussi le présent des verbes en -ER / -IR.",
 META:{vocabTitle:"Gustos y preferencias : ce que tu aimes et ce que tu préfères (A1.5)", lectureTitle:"Sofía et ses passe-temps", bilanTitle:"Bravo, tu sais dire ce que tu aimes et ce que tu préfères !", pronLabel:"Gustos : ie de prefiero, io de odio, gu et cuál", todayLede:"dire ce que tu aimes, adores, détestes ou préfères avec gustar, encantar, interesar, odiar et preferir (e → ie), poser les questions ¿Te gusta? / ¿Le gusta? / ¿Cuál es tu… favorito? et réagir avec a mí también / a mí tampoco — en tutoiement ET en vouvoiement"}
};
})();


// A1.6 — Comida y bebida : présent des verbes en -ER / -IR, dénombrable / indénombrable, « quería » (politesse), gustar (leçon 206)
(function(){
var MAP = {};
function blk(name, rows){ rows.forEach(function(r){ MAP[r[0]] = [r[4], r[5], r[6]]; }); return __esB(name, rows); }
// ligne = [terme, API, français, note, emoji, exemple ES, exemple FR]
var V = [].concat(
 blk("Los alimentos : ce qu'on mange", [
  ["el pan","/el pan/","le pain","Indénombrable : un poco de pan, mucho pan. Une baguette = una barra de pan ; une tranche = una rebanada.","🍞","Como un poco de pan con queso.","Je mange un peu de pain avec du fromage."],
  ["el arroz","/el aˈroθ/","le riz","Masculin : el arroz (jamais « la »). Le z final = « th » (Espagne) ou « s » (Amérique latine). Pluriel rare : los arroces.","🍚","Hoy comemos arroz con pollo.","Aujourd'hui nous mangeons du riz au poulet."],
  ["la carne","/la ˈkaɾne/","la viande","Féminin. Viande hachée : carne picada (Espagne) / carne molida (Amérique latine). Pour la volaille : el pollo ; pour le porc : el cerdo.","🥩","No como mucha carne.","Je ne mange pas beaucoup de viande."],
  ["el pescado","/el pesˈkaðo/","le poisson (dans l'assiette)","Poisson cuisiné ou vendu : el pescado. Poisson vivant dans l'eau : el pez (pluriel : los peces). sc = s + k : pes-KA-do.","🐟","El pescado con arroz está muy rico.","Le poisson au riz est très bon."],
  ["las verduras","/las beɾˈðuɾas/","les légumes","Presque toujours au pluriel pour dire « les légumes » en général. Faux ami visuel : verde = vert.","🥦","Me gustan las verduras.","J'aime les légumes."],
  ["la fruta","/la ˈfɾuta/","le fruit, les fruits","Singulier collectif : « Como fruta » = je mange des fruits. Un fruit précis se dit par son nom : una manzana, un plátano.","🍇","Como fruta todos los días.","Je mange des fruits tous les jours."],
  ["la manzana","/la manˈθana/","la pomme","Dénombrable : una manzana, dos manzanas. z = « th » (Espagne) / « s » (Amérique latine).","🍎","Quería una manzana, por favor.","Je voudrais une pomme, s'il vous plaît."],
  ["el plátano","/el ˈplatano/","la banane","Espagne : el plátano. Colombie : el banano pour la banane, et el plátano est la banane plantain (cuisinée). Accent sur PLÁ.","🍌","Mi hijo come un plátano.","Mon fils mange une banane."],
  ["la naranja","/la naˈɾaŋxa/","l'orange","Dénombrable. Le jus : el zumo de naranja (Espagne) / el jugo de naranja (Amérique latine). j = « kh » rauque.","🍊","Bebo zumo de naranja.","Je bois du jus d'orange."],
  ["el huevo","/el ˈweβo/","l'œuf","h muette : WÉ-vo. Dénombrable : un huevo, dos huevos. Frit : huevo frito ; dur : huevo duro.","🥚","Comes dos huevos, ¿verdad?","Tu manges deux œufs, n'est-ce pas ?"],
  ["el queso","/el ˈkeso/","le fromage","Masculin, indénombrable : un trozo de queso. Prononce KÉ-so (qu = k, jamais « kou »).","🧀","Un trozo de queso, por favor.","Un morceau de fromage, s'il vous plaît."],
  ["el jamón","/xaˈmon/","le jambon","j = « kh ». Le jamón serrano (séché) est une star espagnole ; le jambon cuit : jamón York (Espagne).","🍖","El jamón con pan es muy rico.","Le jambon avec du pain est très bon."],
  ["el pollo","/el ˈpoʝo/","le poulet","ll = « y » : PO-yo. Se mange rôti (pollo asado) ou frit (pollo frito).","🍗","Hoy comemos pollo con arroz.","Aujourd'hui nous mangeons du poulet au riz."],
  ["la sopa","/la ˈsopa/","la soupe","Un classique en entrée : sopa de verduras. Féminin.","🍲","De primero, quería una sopa de verduras.","En entrée, je voudrais une soupe de légumes."],
  ["la ensalada","/la ensaˈlaða/","la salade","Salade composée ou verte : ensalada mixta (Espagne). Le d entre voyelles est très doux.","🥗","Como una ensalada con tomate.","Je mange une salade avec de la tomate."],
  ["las patatas","/las paˈtatas/","les pommes de terre","Espagne : las patatas. Amérique latine (dont la Colombie) : las papas. Frites : patatas fritas / papas fritas.","🥔","Me gustan las patatas fritas.","J'aime les frites."],
  ["la pasta","/la ˈpasta/","les pâtes","Singulier en espagnol : la pasta. Spaghetti, macarrones : los espaguetis, los macarrones.","🍝","La pasta con tomate es muy fácil.","Les pâtes à la tomate sont très faciles."],
  ["el tomate","/el toˈmate/","la tomate","Masculin en espagnol (el tomate), alors que « tomate » est féminin en français : piège ! Accent sur MA.","🍅","Quería ensalada sin tomate.","Je voudrais une salade sans tomate."]
 ]),
 blk("Las bebidas : ce qu'on boit", [
  ["el agua","/el ˈaɣwa/","l'eau","NOM FÉMININ ! Devant un « a » tonique, on emploie « el » pour éviter « la a » : el agua, mais l'adjectif reste féminin : el agua fría (jamais « frío »). Pluriel : las aguas. Avec un autre mot : mucha agua, un poco de agua, esta agua.","💧","El agua está fría.","L'eau est froide."],
  ["el café","/el kaˈfe/","le café","Accent sur la dernière syllabe. Un café solo = expresso ; con leche = au lait ; cortado = expresso avec un peu de lait (Espagne). Colombie : un tinto = un café noir.","☕","Bebo un café con leche.","Je bois un café au lait."],
  ["el té","/el te/","le thé","L'accent écrit distingue « té » (le thé) de « te » (te, toi). Un té con limón, con leche.","🍵","Mi madre bebe té.","Ma mère boit du thé."],
  ["el zumo","/el ˈθumo/","le jus de fruits","Espagne : el zumo. Amérique latine (Colombie) : el jugo. z = « th » en Espagne.","🧃","Quería un zumo de naranja.","Je voudrais un jus d'orange."],
  ["la leche","/la ˈletʃe/","le lait","Féminin, indénombrable : un poco de leche. ch = « tch » : LÉ-tche. Un café con leche = un café au lait.","🥛","Los niños beben leche.","Les enfants boivent du lait."],
  ["el vino","/el ˈbino/","le vin","v = b. Rouge : tinto ; blanc : blanco ; rosé : rosado.","🍷","Mi padre bebe vino tinto.","Mon père boit du vin rouge."],
  ["la cerveza","/la θeɾˈβeθa/","la bière","c et z = « th » (Espagne) / « s » (Amérique latine). En Espagne, une petite bière pression : una caña.","🍺","Quería una cerveza, por favor.","Je voudrais une bière, s'il vous plaît."],
  ["el refresco","/el reˈfɾesko/","la boisson gazeuse, le soda","Espagne et Mexique : un refresco. Colombie : una gaseosa. r initial = r roulé.","🥤","Mis hijos beben un refresco.","Mes enfants boivent un soda."]
 ]),
 blk("Los momentos del día : las comidas", [
  ["el desayuno","/el desaˈʝuno/","le petit-déjeuner","Premier repas du jour. Le verbe : desayunar (desayuno, desayunas… comme un verbe en -AR). d entre voyelles très doux.","🥐","Mi desayuno es un café con leche.","Mon petit-déjeuner est un café au lait."],
  ["el almuerzo","/el alˈmweɾθo/","le déjeuner (Amérique latine) · le repas ou la collation de la mi-journée","Amérique latine (Colombie) : el almuerzo = le déjeuner de midi. Espagne : « la comida » est le repas de 14 h-15 h ; « el almuerzo » est plutôt une collation en milieu de matinée.","🍽️","En Colombia, el almuerzo es el plato fuerte del día.","En Colombie, le déjeuner est le grand repas de la journée."],
  ["la comida","/la koˈmiða/","la nourriture · le repas de midi (Espagne)","Deux sens : « la nourriture » (me gusta la comida española) et, en Espagne, le déjeuner (vers 14 h). Piège : « comida » n'est pas un diner.","🍝","La comida española me gusta mucho.","La cuisine espagnole me plaît beaucoup."],
  ["la cena","/la ˈθena/","le dîner","Repas du soir, plus tardif en Espagne (vers 21 h-22 h). Le verbe : cenar. c devant e = « th » / « s ».","🌙","La cena es pequeña: un té y un poco de queso.","Le dîner est petit : un thé et un peu de fromage."],
  ["la merienda","/la meˈɾjenda/","le goûter, la collation de l'après-midi","Vers 17 h en Espagne : un bocadillo, de la fruta, un zumo. Pour les enfants comme pour les adultes.","🍪","La merienda es un plátano y un zumo.","Le goûter, c'est une banane et un jus."]
 ]),
 blk("Las cantidades : un poco, mucho, un trozo", [
  ["un poco de","/um ˈpoko ðe/","un peu de","INVARIABLE, suivi du nom sans article : un poco de agua, un poco de pan. Ne confonds pas avec « poco » (= peu, pas assez).","🤏","Quiero un poco de agua.","Je veux un peu d'eau."],
  ["mucho / mucha","/ˈmutʃo · ˈmutʃa/","beaucoup de (singulier)","S'ACCORDE avec le nom : mucho pan, mucha fruta, mucha agua (agua est féminin !). Jamais « mucho de ». Avec un adjectif ou un adverbe, on dit « muy » : muy rico.","🥘","Bebo mucha agua y como mucho pan.","Je bois beaucoup d'eau et je mange beaucoup de pain."],
  ["muchos / muchas","/ˈmutʃos · ˈmutʃas/","beaucoup de (pluriel), beaucoup","Pour les dénombrables au pluriel : muchos huevos, muchas verduras. L'accord se fait avec le genre du nom.","🥚","Comemos muchas verduras.","Nous mangeons beaucoup de légumes."],
  ["un trozo de","/un ˈtɾoθo ðe/","un morceau de","Pour un morceau coupé : un trozo de pan, de queso, de tarta. z = « th » (Espagne).","🍰","Quería un trozo de queso.","Je voudrais un morceau de fromage."],
  ["un vaso de","/um ˈbaso ðe/","un verre de (verre droit)","Pour l'eau, le lait, le jus : un vaso de agua. v = b. Faux ami : « vaso » n'est pas un vase (un vase = un jarrón).","🥛","Un vaso de agua, por favor.","Un verre d'eau, s'il vous plaît."],
  ["una taza de","/ˈuna ˈtaθa ðe/","une tasse de","Pour le café, le thé, le chocolat chaud : una taza de té.","☕","Una taza de té con limón.","Une tasse de thé au citron."],
  ["una botella de","/ˈuna boˈteʝa ðe/","une bouteille de","Pour l'eau, le vin, la bière : una botella de agua. ll = « y ».","🍾","Una botella de agua sin gas.","Une bouteille d'eau plate."],
  ["una copa de","/ˈuna ˈkopa ðe/","un verre (à pied) de","Pour le vin ou le champagne : una copa de vino. Ne dis pas « un vaso de vino » au restaurant.","🍷","Una copa de vino tinto, por favor.","Un verre de vin rouge, s'il vous plaît."],
  ["un plato de","/um ˈplato ðe/","une assiette de","Aussi : un plat. Un plato de sopa, de pasta. Faux ami : plato = assiette ET plat.","🍽️","Quería un plato de sopa.","Je voudrais une assiette de soupe."],
  ["una ración de","/ˈuna raˈθjon ðe/","une portion de","Typique des bars à tapas en Espagne : una ración de jamón, de patatas. Plus grand qu'une tapa, à partager.","🧆","Una ración de jamón para dos.","Une portion de jambon pour deux."]
 ]),
 blk("El restaurante : à table", [
  ["el camarero / la camarera","/el kamaˈɾeɾo · la kamaˈɾeɾa/","le serveur / la serveuse","Espagne : camarero. Colombie : el mesero / la mesera. Pour l'appeler : « ¡Perdone! » (usted), jamais en claquant des doigts.","🧑‍🍳","El camarero nos trae la carta.","Le serveur nous apporte la carte."],
  ["una mesa para dos","/ˈuna ˈmesa ˈpaɾa dos/","une table pour deux","Pour plus : para tres, para cuatro… Le client demande : ¿Tienen una mesa para dos ? (ils = le restaurant). ATTENTION : « para » (pour, destination) ≠ « por ».","🪑","¿Tienen una mesa para dos?","Avez-vous une table pour deux ?"],
  ["la carta","/la ˈkaɾta/","la carte, le menu","Espagne : la carta. Amérique latine (Colombie) : el menú. Faux ami : en Espagne, « el menú » est la formule complète.","📜","Aquí tienen la carta.","Voici la carte."],
  ["el menú del día","/el meˈnu ðel ˈðia/","la formule du jour","Formule à prix fixe à midi, très courante en Espagne : un primero, un segundo, un postre et une boisson. En Colombie : el almuerzo corriente ou « corrientazo ».","🧾","El menú del día es barato.","La formule du jour n'est pas chère."],
  ["de primero","/de pɾiˈmeɾo/","en entrée","Le plat d'entrée : sopa, ensalada. Pour commander : « De primero, quería una sopa. »","1️⃣","De primero, una ensalada mixta.","En entrée, une salade composée."],
  ["de segundo","/de seˈɣundo/","en plat principal","Le plat principal : carne ou pescado. « De segundo, quería pescado con arroz. »","2️⃣","De segundo, pescado con patatas.","En plat principal, du poisson avec des pommes de terre."],
  ["de postre","/de ˈpostɾe/","en dessert","El postre = le dessert : fruta, flan, helado. Pour commander : « De postre, fruta. »","🍮","De postre, una manzana.","En dessert, une pomme."],
  ["Quería… / Queríamos…","/keˈɾia · keɾiˈamos/","je voudrais… / nous voudrions…","FORMULE DE POLITESSE FIGÉE. À la lettre c'est « je voulais » (comme en français : « je voulais un renseignement »). Apprends seulement ces deux blocs : « Quería » (moi seul) et « Queríamos » (nous). Ne conjugue pas ce temps à d'autres personnes : on ne l'étudie pas ici.","🙋","Quería un café con leche, por favor.","Je voudrais un café au lait, s'il vous plaît."],
  ["¿Qué desea? / ¿Qué quieres tomar?","/ke deˈsea · ke ˈkjeɾes toˈmaɾ/","que désirez-vous ? / que veux-tu prendre ?","Le serveur dit « ¿Qué desea? » (à un client seul, usted) ou « ¿Qué desean? » (à plusieurs, ustedes). Entre amis : « ¿Qué quieres tomar? ».","💬","¿Qué desea tomar, señora?","Que désirez-vous boire, madame ?"],
  ["¿Puedo tener…?","/ˈpweðo teˈneɾ/","puis-je avoir… ?","Bloc à retenir tel quel (poder se conjugue plus tard). Calque du français : on te comprend, mais l'espagnol dit plutôt « ¿Me pone…? » (Espagne). En Colombie on entend aussi « ¿Me regala…? ».","🙏","¿Puedo tener un vaso de agua?","Puis-je avoir un verre d'eau ?"],
  ["¿Me trae…?","/me ˈtɾae/","pouvez-vous m'apporter… ?","Tú : ¿Me traes…? · usted : ¿Me trae…? Très naturel pour demander un objet ou un plat : ¿Me trae la cuenta, por favor?","🛎️","¿Me trae otro café, por favor?","Pouvez-vous m'apporter un autre café, s'il vous plaît ?"],
  ["¿Qué recomienda?","/ke rekoˈmjenða/","que recommandez-vous ?","Au restaurant, tu demandes conseil au serveur (usted) : ¿Qué recomienda? Entre amis : ¿Qué recomiendas? Bloc à apprendre tel quel.","👍","¿Qué recomienda de segundo?","Que recommandez-vous en plat principal ?"],
  ["¿Algo más?","/ˈalɣo mas/","autre chose ?","Le serveur te demande si tu veux autre chose. Réponse polie : « Nada más, gracias. » (rien d'autre, merci).","➕","— ¿Algo más? — Nada más, gracias.","— Autre chose ? — Rien d'autre, merci."],
  ["con / sin","/kon · sin/","avec / sans","Le café con leche, sin azúcar, sin gas, sin carne. Très utile pour préciser une commande.","➖","Un café con leche sin azúcar.","Un café au lait sans sucre."],
  ["vegetariano / vegetariana","/bexetaˈɾjano · bexetaˈɾjana/","végétarien / végétarienne","Avec SER : soy vegetariano (je suis végétarien). Pour refuser la viande : « No como carne ». g devant e = « kh ».","🥬","Mi hermana es vegetariana.","Ma sœur est végétarienne."],
  ["el bocadillo","/el bokaˈðiʎo/","le sandwich (baguette)","Espagne : un bocadillo de jamón. Amérique latine : un sándwich. Le mot « tapa » désigne un petit plat servi au bar.","🥖","Quería un bocadillo de queso.","Je voudrais un sandwich au fromage."],
  ["las tapas","/las ˈtapas/","les tapas (petits plats de bar)","Culture espagnole : un petit plat pour accompagner la boisson. Au pluriel, souvent « tapear » (aller manger des tapas). Une ración est plus grande.","🫒","Mis amigos y yo comemos tapas.","Mes amis et moi mangeons des tapas."],
  ["la cuenta","/la ˈkwenta/","l'addition","« La cuenta, por favor. » Piège francophone : « la adición » n'existe pas pour l'addition d'un restaurant (c'est une addition de maths).","🧾","La cuenta, por favor.","L'addition, s'il vous plaît."],
  ["¿Puedo pagar con tarjeta?","/ˈpweðo paˈɣaɾ kon taɾˈxeta/","puis-je payer par carte ?","Tarjeta = la carte (bancaire). Avec ¿Puedo… ? + infinitif, tu peux demander beaucoup de choses. Formule formelle utile : ¿Aceptan tarjeta? (acceptez-vous la carte ?)","💳","¿Puedo pagar con tarjeta?","Puis-je payer par carte ?"],
  ["la propina","/la pɾoˈpina/","le pourboire","En Espagne, on arrondit ou on laisse quelques pièces. En Colombie, une « propina voluntaria » est souvent ajoutée à l'addition (environ 10 %) ; tu peux la refuser.","🪙","Dejamos una propina pequeña.","Nous laissons un petit pourboire."]
 ]),
 blk("Los verbos : présent régulier en -ER et -IR", [
  ["comer","/koˈmeɾ/","manger","Verbe en -ER : como, comes, come, comemos, coméis, comen. En Espagne, « comer » = aussi prendre le repas de midi (¿Dónde comes?). Sans accent : « como » = je mange ; avec accent : « cómo » = comment.","🍽️","Como pescado con mi familia.","Je mange du poisson avec ma famille."],
  ["beber","/beˈβeɾ/","boire","Verbe en -ER : bebo, bebes, bebe, bebemos, bebéis, beben. En Amérique latine, on dit souvent « tomar » : tomar agua, tomar un café.","🥤","Bebemos agua en casa.","Nous buvons de l'eau à la maison."],
  ["vivir","/biˈβiɾ/","vivre, habiter","Verbe en -IR : vivo, vives, vive, vivimos, vivís, viven. Pour dire où on habite : « Vivo en… ».","🏠","Vivimos en Madrid.","Nous habitons à Madrid."],
  ["escribir","/eskɾiˈβiɾ/","écrire","Verbe en -IR : escribo, escribes, escribe, escribimos, escribís, escriben. Prononce es-kri-BIR.","✍️","Escribo mi pedido en la carta.","J'écris ma commande sur la carte."],
  ["leer","/leˈeɾ/","lire","Verbe en -ER : leo, lees, lee, leemos, leéis, leen. Deux « e » qui se suivent : le-ER.","📖","Leo la carta antes de pedir.","Je lis la carte avant de commander."],
  ["aprender","/apɾenˈdeɾ/","apprendre","Verbe en -ER : aprendo, aprendes, aprende, aprendemos, aprendéis, aprenden. Aprender a + infinitif : aprender a cocinar.","🎓","Aprendemos español en clase.","Nous apprenons l'espagnol en classe."],
  ["comprender","/kompɾenˈdeɾ/","comprendre","Verbe en -ER : comprendo, comprendes… Comprender ou entender, deux mots proches pour dire comprendre.","💡","¿Comprende usted la carta?","Comprenez-vous la carte ?"],
  ["correr","/koˈreɾ/","courir","Verbe en -ER : corro, corres, corre, corremos, corréis, corren. rr = r roulé.","🏃","Corro los domingos.","Je cours le dimanche."],
  ["abrir","/aˈβɾiɾ/","ouvrir","Verbe en -IR : abro, abres, abre, abrimos, abrís, abren.","🚪","El restaurante abre pronto.","Le restaurant ouvre bientôt."],
  ["recibir","/reθiˈβiɾ/","recevoir","Verbe en -IR : recibo, recibes, recibe, recibimos, recibís, reciben.","📬","Recibimos a nuestros amigos con una cena.","Nous recevons nos amis avec un dîner."],
  ["tomar","/toˈmaɾ/","prendre, boire, manger","Verbe en -AR (déjà vu). « Tomar un café » = prendre un café, en Espagne comme en Amérique latine.","☕","Tomo un té con leche.","Je prends un thé l'après-midi."],
  ["querer","/keˈɾeɾ/","vouloir","Présent : quiero, quieres, quiere, queremos, queréis, quieren (e→ie, comme preferir en A1.5, sauf nous et vous). Direct mais courant et poli avec « por favor ».","❤️","Quiero un vaso de agua, por favor.","Je veux un verre d'eau, s'il vous plaît."],
  ["pedir","/peˈðiɾ/","demander, commander","Irrégulier (e→i), à apprendre en bloc : pido, pides, pide, pedimos, pedís, piden. « Pido la cuenta » = je demande l'addition.","🙋","Pido un café con leche.","Je commande un café au lait."]
 ]),
 blk("Los gustos : réemploi de gustar", [
  ["me gusta / me gustan","/me ˈɣusta · me ˈɣustan/","j'aime (ça me plaît)","Rappel A1.5 : gusta + un objet ou un infinitif, gustan + plusieurs objets. Usted : le gusta / le gustan. Amis : te gusta / te gustan.","❤️","Me gusta la comida española.","J'aime la cuisine espagnole."],
  ["me encanta / me encantan","/me eŋˈkanta · me eŋˈkantan/","j'adore","Même mécanisme que gustar, en plus fort : me encanta el queso, me encantan las patatas.","😍","Me encantan las verduras.","J'adore les légumes."],
  ["rico / rica","/ˈriko · ˈrika/","bon, savoureux","Avec ESTAR pour un plat qui est bon : está rico / está rica. Très courant en Espagne et en Amérique latine.","😋","El pescado está muy rico.","Le poisson est très bon."],
  ["dulce","/ˈdulθe/","sucré, doux","Invariable au féminin (une tarta dulce). « Un dulce » = une friandise.","🍬","Me gusta el café dulce.","J'aime le café sucré."],
  ["salado / salada","/saˈlaðo · saˈlaða/","salé","Accord avec le nom : el queso salado, la sopa salada.","🧂","La sopa está muy salada.","La soupe est très salée."],
  ["picante","/piˈkante/","épicé, piquant","Invariable au féminin. Très courant en Amérique latine : la comida picante.","🌶️","La salsa es picante.","La sauce est épicée."],
  ["caliente","/kaˈljente/","chaud (au toucher, au goût)","Pour un plat ou une boisson : un café caliente. Pour la météo ou la sensation : tener calor (pas tener caliente).","🔥","La sopa está caliente.","La soupe est chaude."]
 ]),
 blk("Bonus : 10 expressions de la table (toutes réelles)", [
  ["Estar como un queso","/esˈtaɾ ˈkomo un ˈkeso/","être très beau / très belle","Familier, Espagne. À la lettre : être comme un fromage. Entre amis, à l'oral ; en Amérique latine on ne le comprend pas toujours.","😍","¡Tu hermano está como un queso!","Ton frère est superbe !"],
  ["Ser pan comido","/seɾ pan koˈmiðo/","c'est du gâteau, c'est très facile","Mot à mot : être du pain mangé. Fréquent dans toute l'Amérique latine et en Espagne.","🍰","El examen es pan comido.","L'examen, c'est du gâteau."],
  ["Pedir peras al olmo","/peˈðiɾ ˈpeɾas al ˈolmo/","demander l'impossible","Un olmo (un orme) ne donne pas de poires : on demande l'impossible.","🍐","¿Un coche gratis? Es pedir peras al olmo.","Une voiture gratuite ? C'est demander l'impossible."],
  ["A otro perro con ese hueso","/a ˈotɾo ˈpero kon ˈese ˈweso/","à d'autres ! je ne te crois pas","Familier : on refuse de croire un mensonge. À la lettre : à un autre chien avec cet os. h muette dans hueso.","🐕","¿Tú, campeón de ajedrez? ¡A otro perro con ese hueso!","Toi, champion d'échecs ? À d'autres !"],
  ["Ponerse como un tomate","/poˈneɾse ˈkomo un toˈmate/","devenir rouge comme une tomate","Rougir de honte ou de gêne. On dit « se pone » (il/elle), « me pongo » (je), « te pones » (tu).","🍅","Mi hermana se pone como un tomate.","Ma sœur devient rouge comme une tomate."],
  ["Me importa un pepino","/me imˈpoɾta um peˈpino/","je m'en moque complètement","Familier. Le pepino (le concombre) ne vaut rien. Même mécanisme que gustar : te importa, le importa.","🥒","Su opinión me importa un pepino.","Son opinion, je m'en moque complètement."],
  ["Ser el pan de cada día","/seɾ el pan de ˈkaða ˈðia/","être monnaie courante, arriver tous les jours","Une chose banale, de tous les jours. Vient de la prière du « Notre Père » (« el pan nuestro de cada día »).","🍞","Las prisas son el pan de cada día.","La précipitation est monnaie courante."],
  ["Contigo pan y cebolla","/konˈtiɣo pan i θeˈβoʝa/","avec toi, même du pain et des oignons","Proverbe romantique : je te suivrais même dans la pauvreté. contigo = avec toi (déjà vu en A1.5).","💕","Él dice: «Contigo, pan y cebolla».","Il dit : « Avec toi, du pain et des oignons suffisent »."],
  ["A buen hambre no hay pan duro","/a ˈbwen ˈambɾe no ˈai pan ˈduɾo/","à bon appétit il n'y a pas de pain dur","Proverbe : quand on a faim, tout est bon. « hay » = il y a (retiens-le tel quel, il est très utile).","🥖","Con tanta hambre todo está rico.","Avec si faim, tout est bon."],
  ["Tener mala leche","/teˈneɾ ˈmala ˈletʃe/","avoir mauvais caractère, être de mauvaise humeur","Familier, surtout en Espagne. À la lettre : avoir mauvais lait. Ne dis pas « mala leche » à un inconnu : c'est impoli.","😠","Pablo tiene mala leche hoy.","Pablo est d'une humeur massacrante aujourd'hui."]
 ])
);
LESSONS_ES[206] = {
 code:"A1.6", level:"A1",
 VOCAB: V,
 MEM_WORDS: __esIdx(V, ["el agua","un poco de","mucho / mucha","un trozo de","Quería… / Queríamos…","la cuenta","comer","beber","vivir","el desayuno"]),
 MINI_CHECKS: [
  {q:"« Tu bois du thé. » (tutoiement)", opts:["Bebes té.","Bebas té.","Beves té."], correct:0, fb:"beber est un verbe en -ER : yo bebo, tú bebes. Le « v » n'est pas dans la terminaison."},
  {q:"« L'eau fraîche » :", opts:["El agua fría","El agua frío","La agua fría"], correct:0, fb:"agua est féminin, mais devant le « a » tonique on met « el » ; l'adjectif reste féminin : fría."},
  {q:"Quelle formule est la plus polie pour commander ?", opts:["Quiero un café.","Quería un café, por favor."], correct:1, fb:"« Quería » est la formule douce du restaurant. « Quiero » n'est pas faux (surtout avec « por favor »), mais plus direct."},
  {q:"« Bebo ___ agua. »", opts:["mucho","mucha","muchas"], correct:1, fb:"mucho s'accorde avec le nom. agua est féminin singulier : mucha agua."},
  {q:"« Un morceau de fromage » :", opts:["un trozo de queso","un vaso de queso","una taza de queso"], correct:0, fb:"Un trozo de = un morceau. Un vaso et una taza sont des récipients pour les boissons."},
  {q:"« Nous habitons à Madrid. »", opts:["Vivimos en Madrid.","Vivemos en Madrid.","Vivamos en Madrid."], correct:0, fb:"Les verbes en -IR font nosotros → -imos : vivimos. Les verbes en -ER font -emos : comemos."},
  {q:"« L'addition, s'il vous plaît » :", opts:["La cuenta, por favor.","La adición, por favor.","La suma, por favor."], correct:0, fb:"On demande « la cuenta ». « Adición » est un faux ami (c'est l'addition de mathématiques)."},
  {q:"« Me ___ las patatas. »", opts:["gusta","gustan"], correct:1, fb:"« las patatas » est pluriel : gustan. (rappel A1.5)"}
 ],
 ROUNDS: [
  __esR("Quería un café con leche, por favor.","Je voudrais un café au lait, s'il vous plaît."),
  __esR("Comemos pescado con arroz.","Nous mangeons du poisson avec du riz."),
  __esR("Mi hermano bebe mucha agua.","Mon frère boit beaucoup d'eau."),
  __esR("¿Tienen una mesa para dos?","Avez-vous une table pour deux ?"),
  __esR("La cuenta, por favor.","L'addition, s'il vous plaît."),
  __esR("Me gustan las verduras y la fruta.","J'aime les légumes et les fruits."),
  __esR("De primero quería una sopa de verduras.","En entrée, je voudrais une soupe de légumes."),
  __esR("¿Puedo pagar con tarjeta?","Puis-je payer par carte ?"),
  __esR("Vivimos en Madrid y comemos pescado.","Nous habitons à Madrid et nous mangeons du poisson."),
  __esR("¿Qué desea tomar, señor?","Que désirez-vous boire, monsieur ?"),
  __esR("Beben un vaso de agua fría.","Ils boivent un verre d'eau fraîche."),
  __esR("No como carne, pero como mucho pescado.","Je ne mange pas de viande, mais je mange beaucoup de poisson."),
  __esR("Queríamos un trozo de queso, por favor.","Nous voudrions un morceau de fromage, s'il vous plaît.")
 ],
 QUIZ: [
  {cat:"ecrit", q:"Tú ___ mucha fruta. (comer)", opts:["comes","come","comas"], correct:0, why:"tú → -es : comes. (Un verbe en -ER : la voyelle de la terminaison est e.)"},
  {cat:"ecrit", q:"Mis padres ___ café en casa. (beber)", opts:["bebe","beben","bebemos"], correct:1, why:"ellos → -en : beben."},
  {cat:"ecrit", q:"Nosotros ___ en Bogotá. (vivir)", opts:["vivemos","vivimos","vivís"], correct:1, why:"nosotros d'un verbe en -IR → -imos : vivimos."},
  {cat:"ecrit", q:"Vosotros ___ una carta. (escribir)", opts:["escribís","escribáis","escribéis"], correct:0, why:"vosotros d'un verbe en -IR → -ís avec accent écrit : escribís."},
  {cat:"ecrit", q:"Usted ___ pescado, ¿verdad? (comer)", opts:["comes","come","coméis"], correct:1, why:"usted se conjugue comme él / ella : come."},
  {cat:"ecrit", q:"Au serveur (usted), tu demandes l'addition :", opts:["La cuenta, por favor.","La adición, por favor.","El recibo, por favor."], correct:0, why:"« la cuenta » est le mot normal pour l'addition. « Adición » est un faux ami."},
  {cat:"ecrit", q:"El agua ___ fría.", opts:["está","están","es"], correct:0, why:"agua est singulier (el agua) : está. On dit « el agua fría », au féminin, malgré le « el »."},
  {cat:"ecrit", q:"Me gustan ___ verduras.", opts:["las","los","la"], correct:0, why:"verduras est féminin pluriel : las verduras. gustan = pluriel."},
  {cat:"ecrit", q:"Comemos ___ huevos. (beaucoup d')", opts:["muchos","mucha","muchas"], correct:0, why:"huevo est masculin : muchos huevos."},
  {cat:"ecrit", q:"Quería ___ vaso de agua, por favor.", opts:["un","uno","una"], correct:0, why:"vaso est masculin : un vaso. « Uno » ne s'emploie pas devant un nom."},
  {cat:"ecrit", q:"Entre amis, tu demandes : « Que veux-tu prendre ? »", opts:["¿Qué quieres tomar?","¿Qué desea tomar?"], correct:0, why:"tú → quieres. « ¿Qué desea? » est la forme formelle (usted), utilisée par le serveur."},
  {cat:"ecrit", q:"« Un peu de pain » :", opts:["un poco de pan","un poco pan","un poco el pan"], correct:0, why:"un poco de + nom, sans article, et invariable."},
  {cat:"ecrit", q:"Quelle phrase est correcte ?", opts:["Quiero un poco de agua.","Quiero un poco agua.","Quiero poco del agua."], correct:0, why:"un poco DE + nom : un poco de agua. Pas de « el » ni « del »."},
  {cat:"ecrit", q:"« Ser pan comido » signifie :", opts:["C'est très facile","C'est très cher","C'est très bon"], correct:0, why:"C'est du gâteau : l'expression dit qu'une chose est très facile."},
  {cat:"oral", audio:"Quería un café con leche, por favor.", q:"Écoute : que commande la personne ?", opts:["Un café au lait","Un thé","Un jus d'orange"], correct:0, why:"« café con leche » = café au lait. « Quería… » = je voudrais…"},
  {cat:"oral", audio:"¿Qué desea tomar, señora?", q:"Écoute : le registre est…", opts:["informel (tutoiement)","formel (vouvoiement)"], correct:1, why:"« desea » + « señora » : vouvoiement (usted). Entre amis : ¿Qué quieres tomar?"},
  {cat:"oral", audio:"Mis amigos beben mucha agua.", q:"Écoute : que boivent les amis ?", opts:["Beaucoup d'eau","Un peu d'eau","Du vin"], correct:0, why:"beben = ils boivent ; mucha agua = beaucoup d'eau (mucha, car agua est féminin)."},
  {cat:"oral", audio:"De primero, sopa de verduras. De segundo, pescado con arroz.", q:"Écoute : quel est le plat principal ?", opts:["Du poisson avec du riz","De la soupe de légumes","De la viande avec des pommes de terre"], correct:0, why:"« De segundo » = en plat principal : pescado con arroz."},
  {cat:"oral", audio:"La cuenta, por favor. ¿Puedo pagar con tarjeta?", q:"Écoute : que demande la personne ?", opts:["L'addition, et payer par carte","Une table pour deux","Un verre d'eau"], correct:0, why:"« La cuenta » = l'addition, « pagar con tarjeta » = payer par carte."},
  {cat:"comprehension", passage:"— Buenas tardes. — Buenas tardes. ¿Tienen una mesa para dos? — Sí, por favor, síganme. Aquí tienen la carta. — Gracias. De primero, quería una sopa de verduras, y de segundo, un poco de pescado con arroz. — ¿Y para beber? — Un vaso de agua y un café, por favor.", q:"Pour combien de personnes est la table ?", opts:["Une","Deux","Trois"], correct:1, why:"« una mesa para dos » = une table pour deux personnes."},
  {cat:"comprehension", passage:"— Buenas tardes. — Buenas tardes. ¿Tienen una mesa para dos? — Sí, por favor, síganme. Aquí tienen la carta. — Gracias. De primero, quería una sopa de verduras, y de segundo, un poco de pescado con arroz. — ¿Y para beber? — Un vaso de agua y un café, por favor.", q:"Que commande le client en plat principal ?", opts:["De la soupe","Un peu de poisson avec du riz","De la viande"], correct:1, why:"« De segundo, un poco de pescado con arroz » : du poisson avec du riz, en petite quantité."},
  {cat:"comprehension", passage:"— Buenas tardes. — Buenas tardes. ¿Tienen una mesa para dos? — Sí, por favor, síganme. Aquí tienen la carta. — Gracias. De primero, quería una sopa de verduras, y de segundo, un poco de pescado con arroz. — ¿Y para beber? — Un vaso de agua y un café, por favor.", q:"Quel mot du client est une formule de politesse pour commander ?", opts:["Quería","Síganme","Aquí tienen"], correct:0, why:"« Quería » adoucit la demande. « Síganme » (suivez-moi) et « Aquí tienen » (voici) sont dits par le serveur."},
  {cat:"comprehension", passage:"Hola, soy Marta. Vivo en Madrid. Mi desayuno es un café con leche y un trozo de pan. Mi comida es grande: como sopa, carne con patatas y fruta. Mi cena es pequeña: bebo un té y como un poco de queso. No me gusta el pescado, pero me encantan las verduras.", q:"Comment est la cena de Marta ?", opts:["Grande","Petite","Elle ne dîne pas"], correct:1, why:"« Mi cena es pequeña » : petite, avec un thé et un peu de fromage."},
  {cat:"comprehension", passage:"Hola, soy Marta. Vivo en Madrid. Mi desayuno es un café con leche y un trozo de pan. Mi comida es grande: como sopa, carne con patatas y fruta. Mi cena es pequeña: bebo un té y como un poco de queso. No me gusta el pescado, pero me encantan las verduras.", q:"Qu'est-ce que Marta n'aime pas ?", opts:["Le poisson","Les légumes","Le fromage"], correct:0, why:"« No me gusta el pescado » : elle n'aime pas le poisson. Elle adore les légumes (me encantan)."}
 ],
 PRON_VERBS: [
  {en:"Quería un vaso de agua.", fr:"Je voudrais un verre d'eau. (v = b : BA-so ; d entre voyelles très doux : A-gwa)"},
  {en:"El huevo es muy rico.", fr:"L'œuf est très bon. (h muette : WÉ-bo ; v = b)"},
  {en:"La cerveza y el zumo.", fr:"La bière et le jus. (c et z = th en Espagne : ther-BE-tha, THOU-mo ; s en Amérique latine)"},
  {en:"Bebo un vaso de vino.", fr:"Je bois un verre de vin. (b/v = b doux : BE-bo, BI-no)"},
  {en:"Una mesa para dos, por favor.", fr:"Une table pour deux, s'il vous plaît. (s = s toujours sourd : ME-sa, jamais « mè-za »)"},
  {en:"La cuenta, por favor.", fr:"L'addition, s'il vous plaît. (cuen = kwen : KWEN-ta)"},
  {en:"Como un bocadillo de jamón.", fr:"Je mange un sandwich au jambon. (ll = y : bo-ka-DI-yo ; j = kh : kha-MON)"},
  {en:"Escribo la comida en la carta.", fr:"J'écris le repas sur la carte. (es-kri-BO ; c devant o = k : KO-mi-da)"},
  {en:"Mañana comemos pescado.", fr:"Demain nous mangeons du poisson. (ñ = gn : ma-GNA-na ; sc = s + k : pes-KA-do)"},
  {en:"¿Puedo pagar con tarjeta?", fr:"Puis-je payer par carte ? (j = kh : tar-KHE-ta ; r doux entre voyelles)"}
 ],
 READING: [
  "Me llamo Marta y vivo en Madrid con mi familia.",
  "Mi desayuno es un café con leche y un trozo de pan.",
  "Mi comida es grande: como sopa, carne con patatas y fruta.",
  "Mi cena es pequeña: bebo un té y como un poco de queso.",
  "No me gusta el pescado, pero me encantan las verduras.",
  "Mi hermano bebe mucha agua y come mucho pan.",
  "Hoy mis padres y yo comemos en un restaurante.",
  "Quería una mesa para tres, por favor.",
  "El camarero es muy simpático: nos trae la carta.",
  "Al final, pido la cuenta y pago con tarjeta."
 ],
 GLOSS: [
  {en:"mi comida", fr:"mon repas de midi (Espagne) ; « la comida » peut aussi vouloir dire « la nourriture »"},
  {en:"pequeña", fr:"petite (féminin : la cena est féminin)"},
  {en:"mucha agua", fr:"beaucoup d'eau : mucha, car agua est féminin"},
  {en:"nos trae", fr:"il nous apporte (traer, 3e personne ; « nos » vu en A1.3)"},
  {en:"pido", fr:"je demande, je commande (pedir : irrégulier, à apprendre en bloc)"},
  {en:"pago", fr:"je paie (pagar, verbe en -AR)"},
  {en:"al final", fr:"à la fin, finalement"},
  {en:"con mi familia", fr:"avec ma famille (con = avec)"}
 ],
 GRAMMAR1: {
  heading:"Conjugaison : le présent des verbes en -ER et -IR",
  lede:"Après les verbes en -AR (hablar) de A1.3, voici les deux autres familles : -ER (comer, beber, leer, aprender, comprender, correr) et -IR (vivir, escribir, abrir, recibir). Bonne nouvelle : elles sont presque identiques entre elles.",
  conj:[
   ["yo →","como · bebo · vivo","Como pan. Bebo agua. Vivo en Madrid."],
   ["tú →","comes · bebes · vives","¿Comes carne? ¿Bebes café? ¿Vives aquí?"],
   ["él, ella, usted →","come · bebe · vive","Marta come fruta. ¿Bebe usted té? ¿Dónde vive usted?"],
   ["nosotros →","comemos · bebemos · vivimos","Comemos tarde. Bebemos agua. Vivimos en Bogotá."],
   ["vosotros →","coméis · bebéis · vivís","¿Coméis aquí? ¿Bebéis zumo? ¿Vivís cerca?"],
   ["ellos, ustedes →","comen · beben · viven","Mis padres comen pescado. ¿Beben ustedes vino?"]
  ],
  ruleHtml:"📖 <b>Recette :</b> on enlève <b>-er</b> ou <b>-ir</b> et on ajoute la terminaison. <b>-ER</b> : <b>-o, -es, -e, -emos, -éis, -en</b> (com-o, com-es, com-e, com-emos, com-éis, com-en). <b>-IR</b> : <b>-o, -es, -e, -imos, -ís, -en</b> (viv-o, viv-es, viv-e, viv-imos, viv-ís, viv-en). <b>Seules différences entre -ER et -IR : nosotros (-emos / -imos) et vosotros (-éis / -ís).</b> Tous les autres sont identiques.<br><br><b>Comparaison avec -AR</b> (A1.3) : -AR a la voyelle <b>a</b> (habl-as, habl-a, habl-an) ; -ER et -IR ont la voyelle <b>e</b> (com-es, com-e, com-en). Pour t'en souvenir : les verbes en -AR disent « a », les deux autres disent « e ».<br><br><b>Verbes du jour</b> (tous réguliers) : comer (como…), beber (bebo…), leer (leo, lees, lee, leemos, leéis, leen), aprender, comprender, correr, vivir (vivo…), escribir (escribo…), abrir, recibir.<br><br><b>Querer (vouloir)</b> change son radical, comme preferir en A1.5 : <b>quiero, quieres, quiere</b>, mais <b>queremos, queréis</b>, puis <b>quieren</b>. ATTENTION : <b>quiero</b> (je veux) est le présent ; <b>quería</b> est autre chose (voir GRAMMAR2). <b>Pedir</b> change aussi : pido, pides, pide, pedimos, pedís, piden (à apprendre en bloc).<br><br><b>Accents écrits :</b> coméis, bebéis, vivís, escribís (vosotros). Sans accent : <b>como</b> = je mange ; avec accent : <b>cómo</b> = comment. <br><br><b>Informel / formel :</b> amis → tú (¿Comes pescado? ¿Qué bebes?) ; inconnu, âgé, supérieur → usted, avec la forme de él/ella (¿Come usted pescado? ¿Qué bebe usted?). Plusieurs personnes en Espagne : vosotros (coméis, bebéis) ; en Amérique latine on utilise ustedes pour TOUS les « vous » (comen, beben).<br><br><b>Les repas :</b> desayunar, comer et cenar sont aussi des verbes : « desayuno » (je prends le petit-déjeuner), « como » (je déjeune, je mange), « ceno » (je dîne). Desayunar et cenar sont en -AR (desayuno, desayunas… ; ceno, cenas…).<br><br><b>Pièges francophones :</b> (1) « Je mange du pain » = Como pan (pas d'article, le sens est partitif). (2) « Comer » et « beber » n'ont pas de « tu »/« vous » à ajouter : le pronom sujet est presque toujours omis. (3) « Vivir » = habiter ET vivre.",
  dialogueLede:"Deux amis se retrouvent à midi (tutoiement) :",
  dialogue:[
   {who:"them", en:"Hola, Luis. ¿Dónde comes hoy?", fr:"Salut, Luis. Où manges-tu aujourd'hui ?"},
   {who:"you", en:"Como en casa de mi madre. Ella vive cerca de aquí.", fr:"Je mange chez ma mère. Elle habite près d'ici."},
   {who:"them", en:"¡Qué bien! ¿Y qué coméis?", fr:"Super ! Et que mangez-vous ?"},
   {who:"you", en:"Pescado con arroz. Siempre bebemos agua con la comida.", fr:"Du poisson avec du riz. Nous buvons toujours de l'eau pendant le repas."},
   {who:"them", en:"¿Y tus hermanos? ¿Comen con ustedes?", fr:"Et tes frères ? Ils mangent avec vous ?"},
   {who:"you", en:"A veces. Mi hermano vive en Sevilla y escribe mucho.", fr:"Parfois. Mon frère habite à Séville et écrit beaucoup."}
  ],
  whyLabel:"Pourquoi -ER et -IR sont-ils presque jumeaux ?",
  whyText:"En espagnol, les deux familles partagent presque les mêmes terminaisons parce que leur histoire est commune : seules deux personnes (nosotros et vosotros) gardent la voyelle de l'infinitif (-emos / -imos, -éis / -ís). Concrètement : apprends UN modèle, <b>comer</b>, et tu sais conjuguer les verbes en -ER ET -IR, avec juste deux formes à ajuster. Pour t'en souvenir : <b>-es, -e, -en</b> pour tu / il / ils (la voyelle e), et ensuite <b>-emos / -imos</b> pour « nous ». Et comme en A1.3 chaque personne a sa terminaison : on peut donc omettre le pronom sujet (Como pan, pas « Yo como pan », sauf pour insister)."
 },
 GRAMMAR2: {
  heading:"Commander poliment : quería, quiero, ¿Qué desea ? · dénombrable ou non · gustar",
  dialogueLede:"Au restaurant, une cliente et un serveur (vouvoiement) :",
  dialogue:[
   {who:"them", en:"Buenas tardes, señora. ¿Qué desea tomar?", fr:"Bonsoir, madame. Que désirez-vous boire ?"},
   {who:"you", en:"Quería un vaso de agua, por favor.", fr:"Je voudrais un verre d'eau, s'il vous plaît."},
   {who:"them", en:"Sí, señora. ¿Y de primero?", fr:"Oui, madame. Et en entrée ?"},
   {who:"you", en:"Una sopa de verduras. De segundo, un poco de pescado con arroz.", fr:"Une soupe de légumes. En plat principal, un peu de poisson avec du riz."},
   {who:"them", en:"¿Algo más?", fr:"Autre chose ?"},
   {who:"you", en:"Nada más, gracias. Y la cuenta, por favor. ¿Puedo pagar con tarjeta?", fr:"Rien d'autre, merci. Et l'addition, s'il vous plaît. Puis-je payer par carte ?"}
  ],
  ruleHtml:"🍽️ <b>1. Commander poliment</b><br><b>Quiero un café</b> : présent de querer (je veux). Correct, direct, normal entre amis ou dans un café rapide, surtout avec « por favor ». <b>Quería un café, por favor</b> : formule plus douce, très courante au restaurant et dans les magasins. <b>Queríamos una mesa para dos</b> : même formule pour « nous ».<br>👥 <b>Informel / formel :</b> le serveur demande à un client (usted) <b>¿Qué desea? ¿Qué desea tomar?</b> ; à plusieurs clients (ustedes) <b>¿Qué desean?</b> ; entre amis <b>¿Qué quieres tomar?</b>. Pour appeler le serveur : <b>¡Perdone!</b> (usted). Pour demander un objet : <b>¿Me trae…?</b> (usted) / <b>¿Me traes…?</b> (tú). <b>¿Puedo tener…?</b> se comprend, mais l'espagnol dit plus naturellement <b>¿Me pone…?</b> (Espagne).<br>🔎 Le serveur te dit « <b>Síganme</b> » : à plusieurs clients (ustedes, impératif de seguir, vu en A1.4, + me). À un client seul : <b>Sígame</b>. Entre amis (tú) : <b>Sígueme</b>. L'accent écrit sur <b>SÍ-ga-me</b> garde la syllabe tonique.<br><br>🥖 <b>2. Dénombrable / indénombrable</b><br><b>Dénombrable</b> (on compte un par un) : una manzana, dos huevos, muchos huevos, muchas verduras → <b>muchos / muchas + nom pluriel</b>. <b>Indénombrable</b> (masse, liquide) : el pan, el arroz, el agua, la carne, la fruta, la leche → <b>un poco de</b> ou <b>mucho / mucha</b> au singulier.<br><b>Un poco de</b> est invariable, sans article : un poco de pan, un poco de agua. <b>Mucho</b> s'accorde : mucho pan, mucha fruta, mucha agua (agua est féminin, donc « mucha »), muchos huevos, muchas verduras. ⚠️ Ne dis jamais « mucho de ». Avec un adjectif, c'est <b>muy</b> : muy rico, pas « mucho rico ».<br>Pour une quantité concrète : un trozo de queso, un vaso de agua, una taza de té, una copa de vino, una botella de agua, un plato de sopa, una ración de jamón.<br>☕ En commande, on peut aussi dénombrer une boisson : « dos cafés » = deux tasses de café.<br><br>❤️ <b>3. Réemploi de gustar (A1.5)</b><br><b>Me gusta la comida española.</b> <b>Me gustan las verduras.</b> <b>No me gusta el pescado.</b> Pour insister : <b>Me encanta el queso. Me encantan las patatas.</b> Pour comparer : <b>Prefiero el té al café</b> (preferir = e→ie : prefiero, prefieres, prefiere). Avec usted : <b>¿Le gusta el pescado, señor?</b> Entre amis : <b>¿Te gustan las verduras?</b> « A mí también » = moi aussi ; « A mí no » = moi non.",
  whyLabel:"Pourquoi « quería » (je voulais) pour dire « je voudrais » ?",
  whyText:"Le français fait pareil : on dit « Je voulais un renseignement » ou « Je voudrais… » pour être poli. L'espagnol utilise le passé pour <b>reculer</b> la demande : ce n'est plus un ordre immédiat (« je veux »), c'est une envie qu'on exprime avec délicatesse. <b>Quería</b> est donc une formule figée de politesse : on l'apprend comme un bloc (Quería un café, por favor) et on ne la conjugue pas ici (l'imparfait n'est pas au programme). <b>Quiero</b> (présent) n'est pas impoli : en Espagne, beaucoup disent « Un café, por favor » ou « Quiero un café, por favor » sans problème, avec un ton aimable. Pour le tutoiement entre amis, <b>quiero</b> suffit ; pour un inconnu ou un serveur, <b>quería</b> ou <b>¿Qué desea?</b> sonnent plus soignés. Retiens : <b>le ton et « por favor » comptent autant que le temps du verbe</b>."
 },
 REVIEW: [
  {q:"« Me ___ los libros. »", opts:["gusta","gustan"], correct:1, fb:"Plusieurs objets (los libros) → gustan. (rappel A1.5)"},
  {q:"À un inconnu âgé : « Aimez-vous la musique ? »", opts:["¿Te gusta la música?","¿Le gusta la música?"], correct:1, fb:"usted → le gusta. (rappel A1.5)"},
  {q:"« J'adore danser. »", opts:["Me encanta bailar.","Me encantan bailar."], correct:0, fb:"Un verbe à l'infinitif → singulier : encanta. (rappel A1.5)"},
  {q:"« Tu préfères le thé. » (tutoiement)", opts:["Prefieres el té.","Preferes el té."], correct:0, fb:"preferir change e→ie à tú : prefieres. (rappel A1.5)"},
  {q:"« Me ___ los libros interesantes. »", opts:["interesa","interesan"], correct:1, fb:"interesar fonctionne comme gustar : plusieurs objets → interesan. (rappel A1.5)"}
 ],
 CULTURE_NOTE: {icon:"🍽️", title:"Culture, expressions et fiche récap (A1.6)",
  html:"<b>🍽️ Culture</b> En Espagne, on mange tard : <b>el desayuno</b> léger (café, tostada), <b>la comida</b> vers 14 h-15 h (souvent <b>el menú del día</b> : primero, segundo, postre, boisson), <b>la merienda</b> vers 17 h et <b>la cena</b> vers 21 h-22 h. Les <b>tapas</b> se prennent au bar avec la boisson. En Colombie et dans beaucoup de pays d'Amérique latine, <b>el almuerzo</b> (le déjeuner) est le plus gros repas, et le café s'appelle <b>un tinto</b>. La tradition espagnole des « doce uvas » (12 raisins à Nochevieja, le 31 décembre) est réelle, mais « dar las uvas » n'est pas une expression fiable : on ne la retient pas.<br><br><b>✍️ Expression écrite — ta commande idéale (4 lignes)</b> Modèle : « Buenas tardes. Quería una mesa para dos. De primero, quería una sopa de verduras y de segundo, un poco de pescado con arroz. Para beber, un vaso de agua y un café con leche. La cuenta, por favor. » Vérifie : quería · un poco de / un trozo de · mucho(s) / mucha(s) · -ER et -IR.<br><br><b>🗣️ Expression orale — jeu de rôle</b> Camarero (usted) : « ¿Qué desea tomar? » Cliente : « Quería un café con leche y un trozo de queso, por favor. » Camarero : « ¿Algo más? » Cliente : « Nada más, gracias. La cuenta, por favor. ¿Puedo pagar con tarjeta? » Puis entre amis (tutoiement) : « ¿Qué quieres tomar? — Quiero un zumo. »<br><br><b>📄 Fiche récap</b> -ER : como, comes, come, comemos, coméis, comen · -IR : vivo, vives, vive, vivimos, vivís, viven · querer : quiero, quieres, quiere, queremos, queréis, quieren · el agua (féminin, el agua fría, mucha agua) · un poco de (invariable) · mucho / mucha / muchos / muchas · un trozo / vaso / taza / copa / botella / plato de · de primero / de segundo / de postre · formel : ¿Qué desea? ¿Me trae…? ¿Qué recomienda? · informel : ¿Qué quieres tomar? ¿Me traes…? · la cuenta, por favor · ¿Puedo pagar con tarjeta?"},
 NEXT_PREVIEW:"A1.7 (De compras) : les vêtements (camisa, pantalones, zapatos…), les tailles, les couleurs et les prix, demander ¿Cuánto cuesta?, comparer (más barato, más caro, mejor, peor), les démonstratifs este / esta / estos / estas et essayer un vêtement avec « probarse » (¿Puedo probármelo?).",
 META:{vocabTitle:"Comida y bebida : ce qu'on mange, ce qu'on boit, au restaurant (A1.6)", lectureTitle:"Marta et ses repas à Madrid", bilanTitle:"Bravo, tu sais commander et parler de ce que tu manges !", pronLabel:"Comida : b/v, h muette, ll, z/c et ñ", todayLede:"parler de ce que tu manges et bois, conjuguer les verbes en -ER et -IR (comer, beber, vivir…), commander poliment avec « quería » et ¿Qué desea ?, utiliser un poco de / mucho / un trozo de, et réutiliser gustar — avec la politesse formelle ET informelle"},
 DRILLS: [
  {type:"fill", text:"Yo ___ pan con queso. (comer)", answers:["como"], why:"yo → -o : como."},
  {type:"fill", text:"Tú ___ mucha agua. (beber)", answers:["bebes"], why:"tú → -es : bebes."},
  {type:"fill", text:"Marta ___ en Madrid. (vivir)", answers:["vive"], why:"ella → -e : vive."},
  {type:"fill", text:"Nosotros ___ una carta. (escribir)", answers:["escribimos"], why:"nosotros d'un verbe en -IR → -imos : escribimos."},
  {type:"fill", text:"Vosotros ___ en un restaurante. (comer)", answers:["coméis"], why:"vosotros d'un verbe en -ER → -éis : coméis (accent écrit)."},
  {type:"fill", text:"Ellos ___ té con leche. (beber)", answers:["beben"], why:"ellos → -en : beben."},
  {type:"fill", text:"¿___ usted pescado? (comer)", answers:["Come","come"], why:"usted se conjugue comme él / ella : come."},
  {type:"fill", text:"Él ___ un libro. (leer)", answers:["lee"], why:"él → -e : lee."},
  {type:"fill", text:"Yo ___ un café. (querer, présent)", answers:["quiero"], why:"querer fait e→ie : quiero."},
  {type:"fill", text:"Nosotros ___ una mesa para dos. (querer, présent)", answers:["queremos"], why:"À nosotros, pas de diphtongue : queremos."},
  {type:"fill", text:"Un ___ de agua. (verre)", answers:["vaso"], why:"un vaso de agua : verre droit pour l'eau."},
  {type:"fill", text:"Quiero un ___ de queso. (morceau)", answers:["trozo"], why:"un trozo de queso : un morceau."},
  {type:"fill", text:"Me ___ las patatas. (gustar)", answers:["gustan"], why:"Plusieurs objets → gustan."},
  {type:"fill", text:"Bebo ___ agua. (beaucoup d')", answers:["mucha"], why:"agua est féminin : mucha agua."},
  {type:"choice", q:"« Les légumes » :", opts:["las verduras","los verduras","las verdes"], correct:0, why:"verdura est féminin : las verduras. « Verdes » = verts."},
  {type:"choice", q:"Le serveur demande à un client seul (usted) :", opts:["¿Qué desea?","¿Qué quieres?"], correct:0, why:"usted → desea. « ¿Qué quieres? » est informel."},
  {type:"choice", q:"« Un peu de riz » :", opts:["un poco de arroz","un poco arroz","unos pocos de arroz"], correct:0, why:"un poco DE + nom."},
  {type:"choice", q:"« Beaucoup de fruits » (fruta, indénombrable) :", opts:["mucha fruta","muchas fruta","mucho fruta"], correct:0, why:"fruta est féminin singulier : mucha fruta."},
  {type:"choice", q:"« Beaucoup d'œufs » :", opts:["muchos huevos","mucho huevos","muchas huevos"], correct:0, why:"huevo est masculin pluriel : muchos huevos."},
  {type:"choice", q:"Quelle formule commande le plus poliment ?", opts:["Quiero una cerveza.","Quería una cerveza, por favor."], correct:1, why:"« Quería… por favor » est la formule douce. « Quiero » reste correct, mais plus direct."},
  {type:"choice", q:"« L'eau est froide » :", opts:["El agua está fría.","El agua está frío.","La agua está fría."], correct:0, why:"el agua (devant a tonique), mais adjectif féminin : fría."},
  {type:"choice", q:"« Ser pan comido » :", opts:["Être du pain mangé = c'est facile","Avoir faim","Aimer le pain"], correct:0, why:"Expression pour « c'est très facile »."},
  {type:"choice", q:"Entre amis, tu demandes : « Que veux-tu manger ? »", opts:["¿Qué quieres comer?","¿Qué desea comer?"], correct:0, why:"tú → quieres. « Desea » est la forme formelle."},
  {type:"choice", q:"« L'addition » au restaurant :", opts:["la cuenta","la adición","la factura de pan"], correct:0, why:"On demande « la cuenta, por favor »."}
 ],
 ANNOTATED: {
  title:"Au restaurant et à la maison",
  intro:"Un petit texte pour lire un peu plus vite. Touche chaque mot pour voir sa nature et sa traduction. Repère les verbes en -ER / -IR et « quería ».",
  sentences:[
   {fr:"Je voudrais une table pour deux, s'il vous plaît.", tokens:[
    {w:"Quería", tag:"formule de politesse", info:"quería · formule figée", fr:"je voudrais", tip:"À la lettre « je voulais » : on le retient en bloc."},
    {w:"una", tag:"déterminant", info:"fém. sing.", fr:"une"},
    {w:"mesa", tag:"nom", info:"fém. sing.", fr:"table"},
    {w:"para", tag:"préposition", fr:"pour"},
    {w:"dos", tag:"nombre", fr:"deux"},
    {w:"por favor", tag:"expression", fr:"s'il vous plaît"}
   ]},
   {fr:"Je mange du poisson et je bois beaucoup d'eau.", tokens:[
    {w:"Como", tag:"verbe", info:"comer · présent · yo", fr:"je mange", tip:"com + -o. Sans accent : je mange."},
    {w:"pescado", tag:"nom", info:"masc. sing.", fr:"poisson"},
    {w:"y", tag:"conjonction", fr:"et"},
    {w:"bebo", tag:"verbe", info:"beber · présent · yo", fr:"je bois"},
    {w:"mucha", tag:"adjectif", info:"fém. sing.", fr:"beaucoup de", tip:"mucha car agua est féminin."},
    {w:"agua", tag:"nom", info:"fém. sing.", fr:"eau", tip:"Féminin, mais on dit « el agua »."}
   ]},
   {fr:"J'aime les légumes, mais je ne mange pas beaucoup de viande.", tokens:[
    {w:"Me gustan", tag:"verbe", info:"gustar · présent · 3e plur.", fr:"j'aime", tip:"Pluriel : las verduras."},
    {w:"las", tag:"article", info:"fém. plur.", fr:"les"},
    {w:"verduras", tag:"nom", info:"fém. plur.", fr:"légumes"},
    {w:"pero", tag:"conjonction", fr:"mais"},
    {w:"no", tag:"adverbe", fr:"ne… pas"},
    {w:"como", tag:"verbe", info:"comer · présent · yo", fr:"je mange"},
    {w:"mucha", tag:"adjectif", info:"fém. sing.", fr:"beaucoup de"},
    {w:"carne", tag:"nom", info:"fém. sing.", fr:"viande"}
   ]},
   {fr:"Que désirez-vous boire, monsieur ? — Un café et un morceau de fromage.", tokens:[
    {w:"¿Qué desea tomar,", tag:"question", info:"formel · usted", fr:"que désirez-vous boire", tip:"Forme formelle du serveur ; entre amis : ¿Qué quieres tomar?"},
    {w:"señor?", tag:"nom", info:"masc. sing.", fr:"monsieur"},
    {w:"Un café", tag:"nom", info:"masc. sing.", fr:"un café"},
    {w:"y", tag:"conjonction", fr:"et"},
    {w:"un trozo de", tag:"expression de quantité", fr:"un morceau de"},
    {w:"queso", tag:"nom", info:"masc. sing.", fr:"fromage"}
   ]}
  ]
 }
};
(function(){ // illustrations : emoji + exemple (même rôle que __esDeco)
  var V2 = LESSONS_ES[206].VOCAB, used = {};
  V2.forEach(function(v){ var d = MAP[v.en]; if(!d) throw new Error("Pas d'illustration pour : " + v.en); v.emo = d[0]; v.ex = [d[1], d[2]]; used[v.en] = 1; });
  Object.keys(MAP).forEach(function(k){ if(!used[k]) throw new Error("Terme inconnu dans la carte : " + k); });
})();
})();


// A1.7 — De compras : vêtements, tailles, prix, comparatifs, démonstratifs, probarse et pronoms collés (leçon 207)
(function(){
var MAP = {};
function blk(name, rows){ rows.forEach(function(r){ MAP[r[0]] = [r[4], r[5], r[6]]; }); return __esB(name, rows); }
// ligne = [terme, API, français, note, emoji, exemple ES, exemple FR]
var V = [].concat(
 blk("Les vêtements et accessoires", [
  ["la camisa","/la kaˈmisa/","la chemise","Piège : camisa = chemise (boutonnée) ; la camiseta = le t-shirt. Pluriel : camisas.","👔","La camisa blanca es nueva.","La chemise blanche est neuve."],
  ["los pantalones","/los pantaˈlones/","le pantalon","Toujours au pluriel en espagnol, même pour UN pantalon : los pantalones son largos. Le singulier el pantalón existe aussi, surtout en Amérique latine.","👖","Los pantalones son azules.","Le pantalon est bleu."],
  ["los zapatos","/los θaˈpatos/","les chaussures","z = « th » en Espagne (tha-PA-tos), « s » en Amérique latine. Un seul soulier : el zapato.","👞","Los zapatos negros son cómodos.","Les chaussures noires sont confortables."],
  ["el vestido","/el besˈtiðo/","la robe","Masculin malgré le sens ! v = b : bes-TI-do.","👗","El vestido rojo es bonito.","La robe rouge est jolie."],
  ["la chaqueta","/la tʃaˈketa/","la veste","ch = « tch » : tcha-KE-ta. Mexique : la chamarra ; Argentine : la campera.","🧥","La chaqueta es de color rojo.","La veste est de couleur rouge."],
  ["el bolso","/el ˈbolso/","le sac à main","Espagne et Colombie : bolso. Mexique : la bolsa. Ailleurs : la cartera. Attention : « la bolsa » en Espagne = le sac en plastique ou en papier du magasin.","👜","El bolso es muy elegante.","Le sac est très élégant."],
  ["la falda","/la ˈfalda/","la jupe","Mot facile pour un francophone : f-a-l-d-a.","🩱","La falda es corta.","La jupe est courte."],
  ["la camiseta","/la kamiˈseta/","le t-shirt","Ne la confonds pas avec camisa (chemise). Argentine : la remera ; Chili : la polera.","👕","La camiseta blanca es barata.","Le t-shirt blanc est bon marché."],
  ["los vaqueros","/los baˈkeɾos/","le jean","Espagne : los vaqueros. Amérique latine : los jeans (prononcé « yins »). Pluriel, comme los pantalones.","👖","Los vaqueros azules son nuevos.","Le jean bleu est neuf."],
  ["el jersey","/el xerˈsej/","le pull","j = kh : kher-SEI. Amérique latine : el suéter.","🧶","El jersey gris es cómodo.","Le pull gris est confortable."],
  ["el abrigo","/el aˈβɾiɣo/","le manteau","Le b entre voyelles est très doux : a-BRI-go.","🧥","El abrigo negro es caro.","Le manteau noir est cher."],
  ["los calcetines","/los kalθeˈtines/","les chaussettes","Pluriel le plus souvent : un par de calcetines = une paire de chaussettes.","🧦","Los calcetines blancos son baratos.","Les chaussettes blanches sont bon marché."],
  ["las zapatillas","/las θapaˈtiʎas/","les baskets","Espagne : las zapatillas (de deporte). Amérique latine : los tenis. Au sens de « chaussons » : zapatillas de casa.","👟","Las zapatillas son cómodas.","Les baskets sont confortables."],
  ["el cinturón","/el θintuˈɾon/","la ceinture","Accent écrit : cin-tu-RÓN (finit par n, mais le mot est accentué sur la dernière syllabe).","🪢","El cinturón negro es bonito.","La ceinture noire est jolie."],
  ["la ropa","/la ˈrropa/","les vêtements (l'habillement)","Singulier et indénombrable (comme en A1.6) : la ropa es barata, jamais « las ropas ». Pour UN article : una prenda.","👚","La ropa de esta tienda es bonita.","Les vêtements de cette boutique sont jolis."]
 ]),
 blk("Taille, couleur et ajustement", [
  ["la talla","/la ˈtaʎa/","la taille (vêtements)","Pour les vêtements : la talla. Tailles : S, M, L ou un numéro (38, 40…). ll = y : TA-ya.","📏","Mi talla es la 38.","Ma taille est le 38."],
  ["el número","/el ˈnumeɾo/","la pointure","Pour les chaussures, on dit surtout el número en Espagne : mi número es el 41. En Amérique latine, talla et número s'emploient tous les deux.","👣","Mi número es el 40.","Ma pointure est le 40."],
  ["el color","/el koˈloɾ/","la couleur","Pluriel : los colores. Les couleurs de A1.0 servent ici : una chaqueta roja, unos zapatos negros.","🎨","¿Qué color prefieres?","Quelle couleur préfères-tu ?"],
  ["¿Qué talla usas? / ¿Qué talla usa?","/ke ˈtaʎa ˈusas · ke ˈtaʎa ˈusa/","quelle taille fais-tu ? / faites-vous ?","usar = utiliser, porter (une taille). Tú : usas. Usted : usa. Réponse : « Uso la talla 38 ».","❓","¿Qué talla usa usted, señora?","Quelle taille faites-vous, madame ?"],
  ["Me queda bien / mal","/me ˈkeða βjen · mal/","ça me va bien / mal","quedar fonctionne comme gustar : me queda (1 article), me quedan (plusieurs). Los pantalones me quedan bien. Avec grande / pequeño : me queda grande = c'est trop grand pour moi.","😍","Esta chaqueta me queda bien.","Cette veste me va bien."],
  ["Es demasiado grande / pequeño","/es demaˈsjaðo ˈɡɾande · peˈkeɲo/","c'est trop grand / trop petit","demasiado = trop, devant un adjectif, il ne change jamais ; l'adjectif, lui, s'accorde : los zapatos son demasiado pequeños. Piège : « muy » = très, pas « trop ».","📐","La chaqueta es demasiado grande.","La veste est trop grande."],
  ["una talla más / menos","/ˈuna ˈtaʎa mas · ˈmenos/","une taille de plus / de moins","¿Tiene una talla más grande ? = Avez-vous la taille au-dessus ? Una talla menos = la taille en dessous.","🔄","¿Tiene una talla más grande?","Avez-vous une taille au-dessus ?"],
  ["¿Lo tiene en otro color?","/lo ˈtjene en ˈotɾo koˈloɾ/","l'avez-vous dans une autre couleur ?","lo = l'article masculin ; pour un article féminin : ¿La tiene en otro color ? Tú : ¿Lo tienes en otro color ?","🌈","¿La tiene en azul, por favor?","L'avez-vous en bleu, s'il vous plaît ?"],
  ["¿Dónde están los probadores?","/ˈdonde esˈtan los pɾoβaˈðoɾes/","où sont les cabines d'essayage ?","el probador (une cabine) vient de probar : « le lieu pour essayer ». Poli avec tout le monde : ¿Dónde está el probador, por favor ?","🚪","¿Dónde está el probador, por favor?","Où est la cabine d'essayage, s'il vous plaît ?"]
 ]),
 blk("Prix, argent et paiement", [
  ["el precio","/el ˈpɾeθjo/","le prix","c devant i = th (Espagne) : PRE-thio. À ne pas confondre avec « preciso ».","🏷️","El precio es bueno.","Le prix est bon."],
  ["¿Cuánto cuesta? / ¿Cuánto cuestan?","/ˈkwanto ˈkwesta · ˈkwestan/","combien ça coûte ? (un article / plusieurs)","costar change son o en ue : cuesta (1 article), cuestan (plusieurs). Jamais « costa ». Le même mot sert avec tú ET usted, car on parle de l'objet.","💶","¿Cuánto cuestan estos zapatos?","Combien coûtent ces chaussures ?"],
  ["el euro · el céntimo","/el ˈewɾo · el ˈθentimo/","l'euro · le centime","Cuesta 45,50 € = cuarenta y cinco euros con cincuenta. Amérique latine : monnaie locale (el peso en Colombie, au Mexique…), souvent « plata » dans la langue courante.","💶","La falda cuesta veinte euros.","La jupe coûte vingt euros."],
  ["barato / barata","/baˈɾato · baˈɾata/","bon marché","S'accorde : un bolso barato, una falda barata. Contraire de caro. Attention : on dit « es barato », pas « es bon marché ».","🪙","El jersey es muy barato.","Le pull est très bon marché."],
  ["caro / cara","/ˈkaɾo · ˈkaɾa/","cher / chère","Adjectif de prix : el abrigo es caro. Piège : « la cara » (nom) = le visage ; la chaqueta es cara = la veste est chère.","💸","La chaqueta es cara.","La veste est chère."],
  ["pagar","/paˈɣaɾ/","payer","Verbe en -AR régulier : pago, pagas, paga, pagamos, pagáis, pagan. Tú : ¿Cómo pagas ? Usted : ¿Cómo paga ?","💳","Pago con tarjeta.","Je paie par carte."],
  ["en efectivo","/en efekˈtiβo/","en espèces","Se dit après pagar : pagar en efectivo. Amérique latine : aussi « en efectivo » ; on entend « en cash » dans la langue familière.","💵","¿Paga en efectivo o con tarjeta?","Payez-vous en espèces ou par carte ?"],
  ["con tarjeta","/kon tarˈxeta/","par carte","« con » (avec) et non « par » : pagar con tarjeta. j = kh : tar-KHE-ta. Una tarjeta = une carte.","💳","Pago con tarjeta, por favor.","Je paie par carte, s'il vous plaît."],
  ["el recibo","/el reˈθiβo/","le ticket de caisse, le reçu","Espagne : on dit aussi el ticket pour un achat en magasin. Le recibo est le reçu (aussi celui des factures d'électricité). La factura = la facture officielle.","🧾","¿Quiere el recibo, señor?","Voulez-vous le ticket, monsieur ?"],
  ["la tienda","/la ˈtjenda/","le magasin, la boutique","Mot déjà utile en ville (A1.8). Una tienda de ropa = une boutique de vêtements.","🏬","La tienda está a la derecha.","La boutique est à droite."],
  ["el dependiente / la dependienta","/el depenˈdjente · la depenˈdjenta/","le vendeur / la vendeuse","Espagne : dependiente/a. Amérique latine : el vendedor / la vendedora. On les vouvoie : usted.","🧑‍💼","La dependienta es muy simpática.","La vendeuse est très sympathique."],
  ["el cliente / la clienta","/el ˈkljente · la ˈkljenta/","le client / la cliente","Au féminin, on entend clienta ; l'article seul suffit aussi : la cliente.","🙋","La clienta paga con tarjeta.","La cliente paie par carte."],
  ["la caja","/la ˈkaxa/","la caisse","j = kh : KA-kha. Pague en la caja, por favor = payez à la caisse (impératif usted, vu en A1.4).","🏧","Pague en la caja, por favor.","Payez à la caisse, s'il vous plaît."],
  ["el cambio","/el ˈkambjo/","la monnaie (rendue)","Aquí tiene su cambio = voici votre monnaie. Aussi : le changement.","🪙","Aquí tiene su cambio, señora.","Voici votre monnaie, madame."],
  ["las rebajas","/las reˈβaxas/","les soldes","Espagne : las rebajas (janvier et juillet). Amérique latine : las ofertas, la liquidación.","🔖","Las rebajas son en enero.","Les soldes sont en janvier."],
  ["el descuento","/el desˈkwento/","la réduction","Mot transparent pour un francophone ; con el descuento = avec la réduction.","🏷️","Con el descuento, cuesta veinte euros.","Avec la réduction, ça coûte vingt euros."],
  ["comprar","/komˈpɾaɾ/","acheter","Verbe en -AR régulier : compro, compras, compra, compramos, compráis, compran.","🛍️","Compro unos zapatos negros.","J'achète des chaussures noires."],
  ["vender","/benˈdeɾ/","vendre","Verbe en -ER régulier : vendo, vendes, vende, vendemos, vendéis, venden. v = b.","🏪","Aquí venden ropa barata.","Ici on vend des vêtements bon marché."],
  ["costar","/kosˈtaɾ/","coûter","o → ue : cuesta, cuestan (comme probarse et poder). Quasi toujours à la 3e personne.","💰","El bolso cuesta treinta euros.","Le sac coûte trente euros."],
  ["llevar / llevarse","/ʝeˈβaɾ · ʝeˈβaɾse/","porter ; emporter, prendre","llevar = porter (un vêtement) ou emmener. llevarse = emporter pour soi : c'est le verbe de « je le prends ». ll = y.","🛒","Llevo una chaqueta roja.","Je porte une veste rouge."],
  ["cambiar","/kamˈbjaɾ/","échanger, changer","¿Puedo cambiarlo ? = puis-je l'échanger ? Même construction que probármelo : verbe + pronom collé.","🔁","¿Puedo cambiarlo por otra talla?","Puis-je l'échanger contre une autre taille ?"]
 ]),
 blk("Phrases clés du client et du vendeur", [
  ["¿Puedo ayudarle? / ¿Te ayudo?","/ˈpweðo aʝuˈðaɾle · te aˈʝuðo/","puis-je vous aider ? / je t'aide ?","Vendeur → client inconnu ou âgé (usted) : ¿Puedo ayudarle ? Entre jeunes (tú) : ¿Te ayudo ? Amérique latine : ¿En qué le puedo ayudar ?","🙋‍♀️","Buenos días, ¿puedo ayudarle?","Bonjour, puis-je vous aider ?"],
  ["Solo quería mirar, gracias.","/ˈsolo keˈɾia miˈɾaɾ ˈɣɾaθjas/","je voulais juste regarder, merci","quería = formule de politesse vue en A1.6. Réponse polie à ¿Puedo ayudarle ? quand on ne veut rien encore.","👀","Solo quería mirar, gracias.","Je voulais juste regarder, merci."],
  ["Quería una camisa blanca, por favor.","/keˈɾia ˈuna kaˈmisa ˈβlanka poɾ faˈβoɾ/","je voudrais une chemise blanche, s'il vous plaît","Même formule de politesse qu'en A1.6 (au café). Elle est correcte avec tú comme avec usted.","🙏","Quería una falda negra, por favor.","Je voudrais une jupe noire, s'il vous plaît."],
  ["¿Puedo probármelo?","/ˈpweðo pɾoˈβaɾmelo/","puis-je l'essayer ? (article masculin)","probármelo = probar + me + lo. Pour un article féminin : ¿Puedo probármela ? Pluriel : probármelos / probármelas.","🪞","¿Puedo probármelo?","Puis-je l'essayer ?"],
  ["¿Puedo probármela?","/ˈpweðo pɾoˈβaɾmela/","puis-je l'essayer ? (article féminin)","la = la chaqueta, la falda, la camisa. Le pronom s'accorde avec l'OBJET, pas avec toi.","🪞","La chaqueta es bonita. ¿Puedo probármela?","La veste est jolie. Puis-je l'essayer ?"],
  ["¿Quieres probártelo? / ¿Quiere probárselo?","/ˈkjeɾes pɾoˈβaɾtelo · ˈkjeɾe pɾoˈβaɾselo/","veux-tu l'essayer ? / voulez-vous l'essayer ?","Tú : probártelo (te + lo). Usted : probárselo (se + lo). querer : e → ie comme preferir (A1.5) : quiero, quieres, quiere.","🤝","¿Quiere probárselo, señor?","Voulez-vous l'essayer, monsieur ?"],
  ["Me lo llevo / Me la llevo","/me lo ˈʝeβo · me la ˈʝeβo/","je le prends / je la prends","Décision d'achat. lo = article masculin, la = féminin ; me los llevo / me las llevo au pluriel : me los llevo = je prends les chaussures.","✅","La chaqueta me queda perfecta. Me la llevo.","La veste me va parfaitement. Je la prends."],
  ["¿Aceptan tarjeta?","/aθepˈtan taɾˈxeta/","acceptez-vous la carte ?","aceptan = ils acceptent (on = le magasin). La phrase marche avec tout le monde. Réponse : Sí, claro / Solo efectivo.","❓","Perdone, ¿aceptan tarjeta?","Excusez-moi, acceptez-vous la carte ?"],
  ["¿Cuánto es?","/ˈkwanto es/","ça fait combien ? (total)","On demande le TOTAL à payer. Réponse : « Son 45 euros ». Pour le prix d'un article : ¿Cuánto cuesta ?","🧮","¿Cuánto es todo, por favor?","Ça fait combien en tout, s'il vous plaît ?"],
  ["Son 45 euros.","/son kwaˈɾenta i ˈθinko ˈewɾos/","ça fait 45 euros","Pour un total : son + montant. Pour un seul article : cuesta + montant. Cuarenta y cinco : 31 à 99 = dizaine + y + unité.","💬","Son cuarenta y cinco euros.","Ça fait quarante-cinq euros."],
  ["Aquí tienes / Aquí tiene","/aˈki ˈtjenes · aˈki ˈtjene/","tiens, voici / tenez, voici","Tú : aquí tienes. Usted : aquí tiene. On le dit en tendant un article ou la monnaie.","🎁","Aquí tiene su recibo, señora.","Voici votre ticket, madame."]
 ]),
 blk("Les comparatifs", [
  ["más… que","/mas ke/","plus… que","más + adjectif + que : esta camisa es más barata que esa. L'adjectif s'accorde avec le PREMIER élément comparé. Jamais « de » à la place de que.","➕","Esta camisa es más barata que esa.","Cette chemise est moins chère que celle-là."],
  ["menos… que","/ˈmenos ke/","moins… que","menos + adjectif + que : los zapatos son menos caros que las zapatillas.","➖","Este bolso es menos caro que ese.","Ce sac est moins cher que celui-là."],
  ["tan… como","/tan ˈkomo/","aussi… que","tan + adjectif + como (égalité). Piège : on ne dit pas « tan… que » : esta chaqueta es tan cara como ese abrigo.","🟰","Esta chaqueta es tan cara como ese abrigo.","Cette veste est aussi chère que ce manteau."],
  ["más barato / más caro","/mas baˈɾato · mas ˈkaɾo/","plus bon marché / plus cher","Le duo du shopping : ¿Tiene algo más barato ? = avez-vous quelque chose de moins cher ? Accord : más barata, más caros…","⚖️","¿Tiene algo más barato, por favor?","Avez-vous quelque chose de moins cher, s'il vous plaît ?"],
  ["más grande / más pequeño","/mas ˈɡɾande · mas peˈkeɲo/","plus grand / plus petit","grande ne change pas au féminin : más grande. pequeño : más pequeña, más pequeños. Pour la taille de vêtement : una talla más grande.","↕️","Este vestido es más pequeño que ese.","Cette robe est plus petite que celle-là."],
  ["mejor / peor","/meˈxoɾ · peˈoɾ/","meilleur / pire","Déjà comparatifs : on ne dit JAMAIS « más mejor ». Invariables au féminin, pluriel mejores / peores : este abrigo es mejor que ese.","🏅","Este abrigo es mejor que ese.","Ce manteau est meilleur que celui-là."]
 ]),
 blk("Montrer : este, ese, aquí, ahí", [
  ["este / esta","/ˈeste · ˈesta/","ce, cet / cette (proche de moi)","Devant un nom ou seul : esta chaqueta ; Me gusta esta. Le masculin finit en -e, le féminin en -a. Sans accent écrit aujourd'hui. Piège : esta ≠ está (estar).","👈","Esta camisa es azul.","Cette chemise est bleue."],
  ["estos / estas","/ˈestos · ˈestas/","ces (proches de moi)","Pluriel : estos zapatos (masc.), estas camisas (fém.). Il suit le nom : un seul accord, pas deux marques de genre.","👈","Me gustan estos zapatos.","J'aime ces chaussures."],
  ["ese / esa","/ˈese · ˈesa/","ce… -là / cette… -là (plus loin)","Pour montrer un objet plus loin de toi ou près de l'autre personne. Pluriel : esos, esas. Un troisième degré, aquel, existe : on le verra plus tard.","👉","Ese bolso es más bonito.","Ce sac-là est plus joli."],
  ["aquí / ahí","/aˈki · aˈi/","ici / là (près de toi)","Accompagnent este (de aquí) et ese (de ahí). Ex. : este de aquí = celui-ci, ici.","📍","Este de aquí es barato; ese de ahí es caro.","Celui-ci est bon marché ; celui-là est cher."],
  ["¿Cuál prefieres? / ¿Cuál prefiere?","/ˈkwal pɾeˈfjeɾes · pɾeˈfjeɾe/","lequel préfères-tu ? / préférez-vous ?","cuál = lequel / laquelle (un choix parmi plusieurs). preferir : e → ie (A1.5). Réponse : « Prefiero este / esta ».","🤔","¿Cuál prefiere usted, esta o esa?","Laquelle préférez-vous, celle-ci ou celle-là ?"]
 ]),
 blk("Probarse et les pronoms collés", [
  ["probarse","/pɾoˈβaɾse/","s'essayer (un vêtement)","Verbe pronominal (se = sur soi) et à radical o → ue : me pruebo, te pruebas, se prueba, nos probamos, os probáis, se prueban. Sans « se », probar = essayer, goûter.","🪞","Me pruebo la chaqueta.","J'essaie la veste."],
  ["probar","/pɾoˈβaɾ/","essayer, goûter","Au restaurant : probar la paella = goûter. Au magasin, on utilise probarse pour le vêtement porté sur soi. Même radical : prueba (tú : « prueba ! »).","🍴","Prueba esta falda, es muy bonita.","Essaie cette jupe, elle est très jolie."],
  ["probármelo / probármela","/pɾoˈβaɾmelo · pɾoˈβaɾmela/","l'essayer (masc. / fém.)","Trois pièces : probar (essayer) + me (sur moi) + lo / la (l'article). Accent écrit sur la syllabe BÁR : l'accent ne bouge pas. Pluriel : probármelos / probármelas.","🧩","¿Puedo probármelo?","Puis-je l'essayer ?"]
 ]),
 blk("Nombres : centaines et mille", [
  ["cien · ciento","/θjen · ˈθjento/","100 · cent (devant un autre nombre)","cien = exactement 100 (ou devant un nom) : cien euros. ciento = quand on ajoute : ciento diez = 110. Jamais « cientos euros ».","💯","Cuesta cien euros.","Ça coûte cent euros."],
  ["doscientos · trescientos · cuatrocientos","/dosˈθjentos tɾesˈθjentos kwatɾoˈθjentos/","200 · 300 · 400","On forme : chiffre + cientos. S'accordent au féminin : doscientas camisas. Un seul mot, pas de « y » entre centaine et dizaine, mais « y » avant l'unité : trescientos veinte, trescientos treinta y cinco.","📈","Tenemos trescientas camisas.","Il y a trois cents chemises."],
  ["quinientos · setecientos · novecientos","/kiˈnjentos seteˈθjentos noβeˈθjentos/","500 · 700 · 900","Trois irréguliers : 500 = quinientos (pas cincocientos), 700 = setecientos (pas sietecientos), 900 = novecientos (pas nuevecientos).","⚠️","El abrigo cuesta quinientos euros.","Le manteau coûte cinq cents euros."],
  ["seiscientos · ochocientos","/sejsˈθjentos otʃoˈθjentos/","600 · 800","Réguliers : seis + cientos, ocho + cientos. ch = tch : o-tcho-THIEN-tos.","📊","Los zapatos cuestan ochocientos euros.","Les chaussures coûtent huit cents euros."],
  ["mil","/mil/","1000","Invariable : mil euros, dos mil euros. Amérique latine : « mil pesos » est un prix courant.","🔝","El bolso cuesta mil euros.","Le sac coûte mille euros."],
  ["cuarenta y cinco con cincuenta","/kwaˈɾenta i ˈθinko kon θinˈkwenta/","45,50 (quarante-cinq euros cinquante)","En Espagne, la virgule décimale s'écrit « , » : 45,50 €. On lit « con » : cuarenta y cinco con cincuenta. Amérique latine : selon les pays, virgule ou point.","🔢","Cuesta cuarenta y cinco con cincuenta.","Ça coûte quarante-cinq euros cinquante."]
 ]),
 blk("Juger un article", [
  ["bonito / bonita","/boˈnito · boˈnita/","joli(e)","L'adjectif qui sert à complimenter : un vestido bonito. Accord : bonitos, bonitas.","😍","El vestido es muy bonito.","La robe est très jolie."],
  ["feo / fea","/ˈfeo · ˈfea/","laid(e)","Contraire de bonito. Poli en boutique : « no me gusta mucho » est plus doux que « es feo ».","👎","Los zapatos no son feos.","Les chaussures ne sont pas laides."],
  ["elegante","/eleˈɣante/","élégant(e)","Finit en -e : une seule forme. Pluriel : elegantes.","🎩","El abrigo negro es elegante.","Le manteau noir est élégant."],
  ["largo / corto","/ˈlaɾɣo · ˈkoɾto/","long / court","Largo ne signifie pas « large » : large = ancho. La falda es corta = la jupe est courte.","📏","Los pantalones son largos.","Le pantalon est long."],
  ["perfecto / perfecta","/peɾˈfekto · peɾˈfekta/","parfait(e)","Me queda perfecta = ça me va parfaitement (la chaqueta est féminine, donc perfecta).","💯","La chaqueta me queda perfecta.","La veste me va parfaitement."]
 ]),
 blk("Bonus : 10 expressions du shopping et de l'argent", [
  ["Costar un ojo de la cara","/kosˈtaɾ un ˈoxo de la ˈkaɾa/","coûter les yeux de la tête","Très cher. Expression courante partout en espagnol. Ici « cara » est un nom (le visage).","👁️","Ese bolso cuesta un ojo de la cara.","Ce sac coûte les yeux de la tête."],
  ["Irse por las ramas","/ˈiɾse poɾ las ˈrramas/","tourner autour du pot","Parler de tout sauf de l'essentiel (littéralement : s'en aller par les branches). Pas lié aux achats : un vendeur qui n'arrive pas au fait.","🌿","El vendedor se va por las ramas y no dice el precio.","Le vendeur tourne autour du pot et ne dit pas le prix."],
  ["Estar sin blanca","/esˈtaɾ sin ˈβlanka/","être fauché(e)","Familier, surtout en Espagne. Amérique latine : estar sin plata.","🫙","Hoy estoy sin blanca.","Aujourd'hui, je suis fauché."],
  ["Estar forrado","/esˈtaɾ foˈrraðo/","être plein aux as","Familier, surtout en Espagne. L'adjectif s'accorde : ella está forrada. Contraire : estar sin blanca.","🤑","Mi tío está forrado.","Mon oncle est plein aux as."],
  ["Vender humo","/benˈdeɾ ˈumo/","vendre du vent","Promettre des choses qui n'existent pas. Se dit d'un vendeur ou d'une publicité.","🌫️","Ese vendedor vende humo.","Ce vendeur vend du vent."],
  ["A precio de saldo","/a ˈpɾeθjo de ˈsaldo/","à prix bradé","Littéralement : au prix des soldes. Très bon marché, souvent un déstockage.","🏷️","Venden la ropa a precio de saldo.","Ils vendent les vêtements à prix bradé."],
  ["Pagar los platos rotos","/paˈɣaɾ los ˈplatos ˈrrotos/","payer les pots cassés","Subir les conséquences d'une faute commise par un autre. Pas lié aux achats, mais très courant.","🍽️","Ana rompe un vaso y Luis paga los platos rotos.","Ana casse un verre et Luis paie les pots cassés."],
  ["Estar al caer","/esˈtaɾ al kaˈeɾ/","être imminent, être sur le point d'arriver","Quelque chose va arriver très bientôt. Surtout en Espagne. Ex. : las rebajas están al caer.","⏳","Las rebajas están al caer.","Les soldes arrivent d'une minute à l'autre."],
  ["Estar tirado de precio","/esˈtaɾ tiˈɾaðo de ˈpɾeθjo/","être donné, très bon marché","Familier, Espagne. S'accorde : los vaqueros están tirados de precio.","🎉","Estos vaqueros están tirados de precio.","Ce jean est donné."],
  ["A caballo regalado no le mires el diente","/a kaˈβaʎo reɣaˈlaðo no le ˈmiɾes el ˈdjente/","à cheval donné, on ne regarde pas les dents","Proverbe figé : on ne fait pas la fine bouche devant un cadeau. À retenir tel quel, sans le décomposer.","🐴","Es un regalo: a caballo regalado no le mires el diente.","C'est un cadeau : à cheval donné, on ne regarde pas les dents."]
 ])
);
LESSONS_ES[207] = {
 code:"A1.7", level:"A1",
 VOCAB: V,
 MEM_WORDS: __esIdx(V, ["los pantalones","la talla","¿Cuánto cuesta? / ¿Cuánto cuestan?","en efectivo","¿Puedo probármelo?","Me lo llevo / Me la llevo","probarse","más… que","este / esta","Es demasiado grande / pequeño"]),
 MINI_CHECKS: [
  {q:"« C'est trop petit. » (à propos de la veste : la chaqueta)", opts:["Es demasiado pequeña.","Es muy pequeño.","Es demasiado pequeño."], correct:0, fb:"chaqueta est féminin : pequeña. demasiado = trop, et il ne change pas. « muy » veut dire très, pas trop."},
  {q:"« Combien coûtent les chaussures ? »", opts:["¿Cuánto cuesta los zapatos?","¿Cuánto cuestan los zapatos?","¿Cuántos cuesta los zapatos?"], correct:1, fb:"Plusieurs articles : cuestan (o → ue, 3e personne du pluriel). Un seul article : cuesta."},
  {q:"« Je prends cette veste. » (la chaqueta)", opts:["Me lo llevo.","Me la llevo.","Me las llevo."], correct:1, fb:"chaqueta est féminin singulier : la. Le pronom s'accorde avec l'objet acheté, pas avec la personne qui parle."},
  {q:"« Puis-je les essayer ? » (les pantalons : unos pantalones)", opts:["¿Puedo probármelo?","¿Puedo probármelos?","¿Puedo probármela?"], correct:1, fb:"pantalones est masculin pluriel : probar + me + los = probármelos."},
  {q:"« Cette chemise est moins chère que celle-là. »", opts:["Esta camisa es menos cara que esa.","Esta camisa es menos caro que esa.","Esta camisa es menos cara como esa."], correct:0, fb:"menos + adjectif accordé (cara) + que. « como » s'emploie seulement avec tan : tan cara como."},
  {q:"« Ce manteau est meilleur que celui-là. »", opts:["Este abrigo es más mejor que ese.","Este abrigo es mejor que ese.","Este abrigo es más bueno como ese."], correct:1, fb:"mejor est déjà un comparatif : jamais « más mejor »."},
  {q:"« Ces chaussures » (proches de toi) :", opts:["este zapatos","estos zapatos","estas zapatos"], correct:1, fb:"zapatos est masculin pluriel : estos. Le démonstratif suit le genre et le nombre du nom."},
  {q:"À une cliente âgée que vous ne connaissez pas, la vendeuse dit :", opts:["¿Te ayudo?","¿Puedo ayudarle?"], correct:1, fb:"Cliente inconnue ou âgée = usted : ¿Puedo ayudarle? (le pronom le = vous). ¿Te ayudo? est le tutoiement, entre jeunes ou amis."}
 ],
 ROUNDS: [
  __esR("¿Cuánto cuesta esta chaqueta roja?","Combien coûte cette veste rouge ?"),
  __esR("Me la llevo, gracias.","Je la prends, merci."),
  __esR("Los pantalones son demasiado pequeños.","Le pantalon est trop petit."),
  __esR("¿Puedo probarme estos zapatos?","Puis-je essayer ces chaussures ?"),
  __esR("¿Quiere probarse esta camisa, señora?","Voulez-vous essayer cette chemise, madame ?"),
  __esR("Esta camisa es más barata que esa.","Cette chemise est moins chère que celle-là."),
  __esR("Estos zapatos son tan cómodos como esos.","Ces chaussures sont aussi confortables que celles-là."),
  __esR("Buenos días, ¿puedo ayudarle?","Bonjour, puis-je vous aider ?"),
  __esR("Quería una falda negra, por favor.","Je voudrais une jupe noire, s'il vous plaît."),
  __esR("¿Lo tienes en otro color?","L'as-tu dans une autre couleur ?"),
  __esR("¿Puedo pagar con tarjeta?","Puis-je payer par carte ?"),
  __esR("Cuesta cuarenta y cinco euros.","Ça coûte quarante-cinq euros."),
  __esR("Este bolso es mejor que ese.","Ce sac est meilleur que celui-là.")
 ],
 QUIZ: [
  {cat:"ecrit", q:"Tu veux connaître le prix d'une veste. Tu demandes :", opts:["¿Cuánto cuesta esta chaqueta?","¿Cuántos cuesta esta chaqueta?","¿Cuánto es costa esta chaqueta?"], correct:0, why:"¿Cuánto cuesta? pour un article. cuánto reste invariable ici (c'est « combien » en tant qu'adverbe), et costar donne cuesta (o → ue)."},
  {cat:"ecrit", q:"« Les pantalons sont trop grands. »", opts:["Los pantalones son demasiado grandes.","Los pantalones es demasiado grande.","Los pantalones son demasiados grandes."], correct:0, why:"Sujet pluriel : son. demasiado (trop) devant un adjectif ne change jamais ; grande prend -s : grandes."},
  {cat:"ecrit", q:"« Je prends ce sac. » (el bolso)", opts:["Me lo llevo.","Me la llevo.","Se lo llevo."], correct:0, why:"bolso est masculin : lo. Avec « yo », le premier pronom est me : me lo llevo."},
  {cat:"ecrit", q:"Tu veux essayer la jupe (la falda). ¿Puedo ___ ?", opts:["probármelo","probármela","probarmela"], correct:1, why:"falda est féminin : la. L'accent écrit est obligatoire : probármela (la syllabe BÁR reste accentuée)."},
  {cat:"ecrit", q:"Le vendeur (usted) : « ¿Quiere ___ , señor ? » (les chaussures : los zapatos)", opts:["probárselos","probártelos","probármelos"], correct:0, why:"usted → se (se prueba) ; los zapatos → los : probárselos. Avec tú ce serait probártelos."},
  {cat:"ecrit", q:"Este vestido es ___ barato ___ ese.", opts:["más … que","más … como","tan … que"], correct:0, why:"Supériorité : más + adjectif + que. « como » appartient à tan… como."},
  {cat:"ecrit", q:"Esta chaqueta es ___ cara como ese abrigo. (aussi chère)", opts:["tan","más","muy"], correct:0, why:"L'égalité se dit tan + adjectif + como : tan cara como."},
  {cat:"ecrit", q:"Este abrigo es ___ que ese. (meilleur)", opts:["mejor","más mejor","más bueno"], correct:0, why:"mejor = meilleur et c'est déjà un comparatif : il se construit avec que, sans más."},
  {cat:"ecrit", q:"___ pantalones son azules. (proches de toi)", opts:["Esta","Estos","Estas"], correct:1, why:"pantalones est masculin pluriel : estos."},
  {cat:"ecrit", q:"¿Cuál prefieres: ___ falda o esa? (proche de toi)", opts:["esta","este","estas"], correct:0, why:"falda est féminin singulier : esta. Esa désigne la falda plus loin."},
  {cat:"ecrit", q:"Quelle phrase est correcte ?", opts:["Los zapatos cuestan cincuenta euros.","Los zapatos cuesta cincuenta euros.","Los zapatos costan cincuenta euros."], correct:0, why:"Sujet pluriel : cuestan. Le radical change o → ue : jamais costan."},
  {cat:"ecrit", q:"À un client âgé, la vendeuse dit :", opts:["¿Puedo ayudarle?","¿Te ayudo?"], correct:0, why:"Client inconnu ou âgé : usted, donc ayudarle (le = vous). ¿Te ayudo? est informel."},
  {cat:"ecrit", q:"« 300 euros »", opts:["trescientos euros","tres cientos euros","trecientos euros"], correct:0, why:"Les centaines s'écrivent en un seul mot : tres + cientos = trescientos."},
  {cat:"ecrit", q:"« Je m'essaie la veste. » Yo ___ la chaqueta.", opts:["me probo","me pruebo","me prueba"], correct:1, why:"probarse : o → ue à la forme yo. Me pruebo (« me probo » n'existe pas)."},
  {cat:"oral", audio:"¿Cuánto cuestan estos zapatos? Cuestan sesenta euros.", q:"Écoute : quel est le prix ?", opts:["60 euros","16 euros","70 euros"], correct:0, why:"sesenta = 60. Ne confonds pas avec setenta (70) ni dieciséis (16)."},
  {cat:"oral", audio:"Me la llevo, gracias.", q:"Écoute : que dit le client ?", opts:["Il achète un article féminin","Il achète un article masculin","Il refuse l'article"], correct:0, why:"« la » désigne un article féminin (la chaqueta, la falda…). Me la llevo = je la prends."},
  {cat:"oral", audio:"Esta camisa es demasiado pequeña. ¿Tiene una talla más grande?", q:"Écoute : quel est le problème ?", opts:["La chemise est trop petite","La chemise est trop chère","La chemise est trop grande"], correct:0, why:"demasiado pequeña = trop petite. Une talla más grande = une taille au-dessus."},
  {cat:"oral", audio:"Perdone, aquí solo aceptamos efectivo.", q:"Écoute : comment peut-on payer ?", opts:["En espèces","Par carte","Par chèque"], correct:0, why:"efectivo = espèces. solo aceptamos = nous n'acceptons que."},
  {cat:"oral", audio:"Buenos días, señora. ¿Puedo ayudarle?", q:"Écoute : le vendeur s'adresse à la cliente avec…", opts:["le tutoiement (tú)","le vouvoiement (usted)"], correct:1, why:"ayudarle (le = vous) et « señora » : vouvoiement. Au tutoiement : ¿Te ayudo?"},
  {cat:"comprehension", passage:"Dependienta: Buenos días, ¿puedo ayudarle? — Clienta: Sí, por favor. ¿Cuánto cuesta esta chaqueta roja? — Dependienta: Cuesta cuarenta y cinco euros. ¿Quiere probársela? — Clienta: Sí, por favor... Me queda perfecta. Me la llevo. — Dependienta: ¿Cómo paga, en efectivo o con tarjeta? — Clienta: Con tarjeta.", q:"Combien coûte la veste ?", opts:["45 euros","54 euros","40 euros"], correct:0, why:"« Cuesta cuarenta y cinco euros » : 45 euros."},
  {cat:"comprehension", passage:"Dependienta: Buenos días, ¿puedo ayudarle? — Clienta: Sí, por favor. ¿Cuánto cuesta esta chaqueta roja? — Dependienta: Cuesta cuarenta y cinco euros. ¿Quiere probársela? — Clienta: Sí, por favor... Me queda perfecta. Me la llevo. — Dependienta: ¿Cómo paga, en efectivo o con tarjeta? — Clienta: Con tarjeta.", q:"Pourquoi la cliente achète-t-elle la veste ?", opts:["Elle lui va parfaitement","Elle est très bon marché","Elle est trop petite"], correct:0, why:"« Me queda perfecta » : elle lui va parfaitement. Puis « Me la llevo » : je la prends."},
  {cat:"comprehension", passage:"Dependienta: Buenos días, ¿puedo ayudarle? — Clienta: Sí, por favor. ¿Cuánto cuesta esta chaqueta roja? — Dependienta: Cuesta cuarenta y cinco euros. ¿Quiere probársela? — Clienta: Sí, por favor... Me queda perfecta. Me la llevo. — Dependienta: ¿Cómo paga, en efectivo o con tarjeta? — Clienta: Con tarjeta.", q:"Comment la cliente paie-t-elle ?", opts:["Par carte","En espèces"], correct:0, why:"« Con tarjeta » : par carte. (en efectivo = en espèces)."},
  {cat:"comprehension", passage:"Hola, soy Pablo. Hoy compro ropa nueva. Los zapatos negros cuestan ochenta euros, pero estas zapatillas blancas cuestan sesenta euros. Las zapatillas son más baratas que los zapatos, pero los zapatos son más elegantes. Me llevo los zapatos.", q:"Qu'est-ce qui est le moins cher ?", opts:["Les baskets blanches","Les chaussures noires"], correct:0, why:"60 euros contre 80 : las zapatillas son más baratas que los zapatos."},
  {cat:"comprehension", passage:"Hola, soy Pablo. Hoy compro ropa nueva. Los zapatos negros cuestan ochenta euros, pero estas zapatillas blancas cuestan sesenta euros. Las zapatillas son más baratas que los zapatos, pero los zapatos son más elegantes. Me llevo los zapatos.", q:"Que prend Pablo ?", opts:["Les chaussures noires","Les baskets blanches","Les deux"], correct:0, why:"« Me llevo los zapatos » : il prend les chaussures (plus élégantes, mais plus chères)."}
 ],
 PRON_VERBS: [
  {en:"Me pruebo la chaqueta.", fr:"Je m'essaie la veste. (ue = diphtongue : PRUE-bo ; ch = tch : tcha-KE-ta)"},
  {en:"¿Cuánto cuestan los zapatos?", fr:"Combien coûtent les chaussures ? (CUÁN-to ; cues-TAN ; z = th : tha-PA-tos)"},
  {en:"¿Puedo probármelo?", fr:"Puis-je l'essayer ? (accent écrit : pro-BÁR-me-lo ; ue de PUE-do = diphtongue)"},
  {en:"Me llevo la camisa blanca.", fr:"Je prends la chemise blanche. (ll = y : YE-vo ; ca-MI-sa)"},
  {en:"Los pantalones son demasiado largos.", fr:"Le pantalon est trop long. (de-ma-SIA-do ; z/c = th ou s)"},
  {en:"¿Quiere probárselo?", fr:"Voulez-vous l'essayer ? (pro-BÁR-se-lo ; accent sur BÁR)"},
  {en:"Pago con tarjeta.", fr:"Je paie par carte. (j = kh : tar-KHE-ta ; la tarjeta)"},
  {en:"Los zapatos son más caros que las zapatillas.", fr:"Les chaussures sont plus chères que les baskets. (z = th ; ll = y : tha-pa-TI-yas)"},
  {en:"Esta camisa es más barata que esa.", fr:"Cette chemise est moins chère que celle-là. (v/b = b ; ba-RA-ta)"},
  {en:"Cuesta cuarenta y cinco euros.", fr:"Ça coûte quarante-cinq euros. (kwa-REN-ta ; c devant i = th : THIN-ko ; EU-ros)"}
 ],
 READING: [
  "Hoy Marta está en una tienda de ropa.",
  "Quiere una chaqueta roja y unos zapatos negros.",
  "La dependienta es muy simpática: « Buenos días, ¿puedo ayudarle? ».",
  "Marta pregunta: « ¿Cuánto cuesta esta chaqueta? ».",
  "La chaqueta cuesta cuarenta y cinco euros, pero es demasiado grande.",
  "Marta se prueba una talla más pequeña y le queda perfecta.",
  "Estos zapatos cuestan ochenta euros y esos cuestan setenta.",
  "Estos son más bonitos, pero esos son más cómodos.",
  "Marta se lleva la chaqueta y paga con tarjeta.",
  "¡Qué bien! Hoy Marta está contenta: la chaqueta es bonita y el precio es bueno."
 ],
 GLOSS: [
  {en:"la dependienta", fr:"la vendeuse (Amérique latine : la vendedora)"},
  {en:"pregunta", fr:"elle demande (preguntar : verbe en -AR, 3e personne)"},
  {en:"quiere", fr:"elle veut (querer : e → ie, comme preferir)"},
  {en:"se prueba", fr:"elle essaie (probarse : o → ue, 3e personne)"},
  {en:"le queda perfecta", fr:"elle lui va parfaitement (quedar fonctionne comme gustar)"},
  {en:"se lleva", fr:"elle emporte, elle prend (llevarse, 3e personne)"},
  {en:"esos", fr:"ceux-là (pluriel de ese, un peu plus loin)"},
  {en:"el precio es bueno", fr:"le prix est bon (bueno = bon ; devant un nom masculin : buen precio)"}
 ],
 GRAMMAR1: {
  heading:"Probarse et les pronoms collés : probármelo, me lo llevo",
  lede:"Pour essayer un vêtement, l'espagnol utilise le verbe pronominal probarse (« s'essayer »). Quand on le met à l'infinitif, les pronoms se collent à sa FIN, comme dans « ¿Puedo probármelo? ». Ça ressemble à un mot-valise effrayant, mais ce sont seulement trois pièces empilées : probar + me + lo. Une fois la mécanique comprise, elle marche pour tous les verbes : probármelo, cambiarlo, llevármelo…",
  conj:[
   ["yo →","me pruebo","Me pruebo la chaqueta."],
   ["tú →","te pruebas","¿Te pruebas estos zapatos?"],
   ["él, ella, usted →","se prueba","¿Se prueba usted la camisa, señora?"],
   ["nosotros/as →","nos probamos","Nos probamos los vaqueros."],
   ["vosotros/as →","os probáis","¿Os probáis las zapatillas?"],
   ["ellos, ellas, ustedes →","se prueban","Se prueban los abrigos."]
  ],
  ruleHtml:"📖 <b>1. Probarse = s'essayer.</b> Le pronom (me, te, se, nos, os, se) se place AVANT le verbe conjugué : <b>me pruebo, te pruebas, se prueba, nos probamos, os probáis, se prueban</b>. Le pronom dit que l'action retombe sur la personne qui porte le vêtement. <b>probar</b> tout seul = essayer, goûter (probar la paella).<br><br>🔤 <b>2. Le radical change : o → ue</b> à yo, tú, él/ella/usted, ellos/ustedes (pruebo, pruebas, prueba, prueban), mais PAS à nosotros ni vosotros (probamos, probáis). C'est exactement la logique de <b>preferir</b> (e → ie, vu en A1.5). Même schéma pour <b>poder</b> (puedo, puede), <b>costar</b> (cuesta, cuestan) et <b>querer</b> (quiero, quiere).<br><br>🧩 <b>3. L'infinitif colle les pronoms.</b> En espagnol, on soude les pronoms à la FIN de l'infinitif. Décomposition de <b>probármelo</b> : <b>probar</b> (essayer) + <b>me</b> (sur moi) + <b>lo</b> (le vêtement, masculin). Littéralement : « s'essayer-me-le ». Règles : (a) d'abord le pronom de PERSONNE (me, te, se, nos, os), puis celui de l'OBJET (lo, la, los, las) ; (b) <b>lo / la / los / las</b> s'accordent avec l'objet : probármelo (el vestido), probármela (la chaqueta), probármelos (los pantalones), probármelas (las zapatillas) ; (c) l'accent écrit garde la voix sur la syllabe BÁR : pro-BÁR-me-lo.<br><br>👥 <b>4. Tutoiement ET vouvoiement.</b> Le client dit toujours <b>¿Puedo probármelo?</b> (c'est lui qui essaie). Le vendeur change : tú → <b>¿Quieres probártelo?</b> (te + lo) ; usted → <b>¿Quiere probárselo?</b> (se + lo, car le pronom réfléchi de usted est se). Formule d'accueil : tú → <b>¿Te ayudo?</b> ; usted → <b>¿Puedo ayudarle?</b> (ayudar + le, « vous »).<br><br>🛒 <b>5. « Me lo llevo ».</b> Même mécanique, mais avec un verbe conjugué : le pronom se place AVANT. <b>me</b> (pour moi) + <b>lo</b> (l'article) + <b>llevo</b> (llevar, yo). Résultat : « je le prends ». Féminin : <b>me la llevo</b> ; pluriel : <b>me los llevo</b>, <b>me las llevo</b>. Avec poder, tu as deux choix équivalents : <b>¿Puedo probármelo?</b> ou <b>¿Me lo puedo probar?</b> (en tant que débutant, retiens le premier).<br><br>⚠️ <b>Pièges francophones</b> : (1) en français « essayer » n'a pas de « se » : en espagnol, probarse oui. (2) <b>lo / la</b> s'accordent avec l'objet, pas avec toi : une femme qui essaie un pantalon dit probármelos. (3) l'accent écrit oublié : « probarmelo » est une faute. (4) <b>me</b> n'est pas « à moi » ici : c'est le « sur moi » du pronominal. (5) « Me queda bien/mal » (ça me va bien/mal) suit gustar : me queda (1 article), me quedan (plusieurs).",
  dialogueLede:"Dans une boutique, une vendeuse et un client (vouvoiement) :",
  dialogue:[
   {who:"them", en:"Buenos días, ¿puedo ayudarle?", fr:"Bonjour, puis-je vous aider ?"},
   {who:"you", en:"Buenos días. Quería unos vaqueros azules, por favor.", fr:"Bonjour. Je voudrais un jean bleu, s'il vous plaît."},
   {who:"them", en:"Claro. ¿Qué talla usa?", fr:"Bien sûr. Quelle taille faites-vous ?"},
   {who:"you", en:"Uso la talla 40. ¿Puedo probármelos?", fr:"Je fais du 40. Puis-je les essayer ?"},
   {who:"them", en:"Sí, claro. El probador está aquí, a la derecha.", fr:"Oui, bien sûr. La cabine est ici, à droite."},
   {who:"you", en:"Me quedan un poco grandes. ¿Los tiene en una talla menos?", fr:"Ils me vont un peu grands. Les avez-vous en une taille de moins ?"},
   {who:"them", en:"Sí, aquí tiene.", fr:"Oui, tenez."},
   {who:"you", en:"Perfectos. Me los llevo.", fr:"Parfaits. Je les prends."}
  ],
  whyLabel:"Pourquoi les pronoms se collent-ils au verbe ? Probarse en trois pièces",
  whyText:"En français, « je veux l'essayer » place le pronom devant l'infinitif (« l'essayer »). L'espagnol, lui, <b>construit un seul bloc</b> : verbe + pronoms. Ce n'est pas une série de mots à apprendre par cœur, c'est une machine à emboîter. Prends <b>probármelo</b> : <b>probar</b> (essayer) + <b>me</b> (sur moi) + <b>lo</b> (le vêtement). Change une pièce et le sens suit : ¿Quieres probártelo? (te : sur toi), ¿Quiere probárselo? (se : sur vous), probármela (une chose féminine). Pour lire un mot-valise, découpe-le toujours de la fin : 1) le dernier pronom (lo/la/los/las) = l'objet ; 2) le pronom avant lui (me/te/se/nos/os) = qui ; 3) ce qui reste = le verbe à l'infinitif. Avec un verbe conjugué, les mêmes pièces passent devant : me lo llevo."
 },
 GRAMMAR2: {
  heading:"Comparer et montrer : más… que, mejor, este / ese, et compter les prix",
  dialogueLede:"Deux amis dans un magasin (tutoiement) :",
  dialogue:[
   {who:"them", en:"Mira, ¿te gusta esta camisa?", fr:"Regarde, tu aimes cette chemise ?"},
   {who:"you", en:"Sí, pero ese jersey es más bonito.", fr:"Oui, mais ce pull-là est plus joli."},
   {who:"them", en:"Es verdad, pero es más caro. Cuesta ochenta euros.", fr:"C'est vrai, mais il est plus cher. Il coûte quatre-vingts euros."},
   {who:"you", en:"Esta camisa es más barata y es tan cómoda como el jersey.", fr:"Cette chemise est moins chère et aussi confortable que le pull."},
   {who:"them", en:"Tienes razón. ¿Cuál prefieres?", fr:"Tu as raison. Laquelle préfères-tu ?"},
   {who:"you", en:"Prefiero la camisa. Me la llevo.", fr:"Je préfère la chemise. Je la prends."}
  ],
  ruleHtml:"⚖️ <b>1. Les comparatifs.</b> Supériorité : <b>más + adjectif + que</b> (esta camisa es <b>más barata que</b> esa). Infériorité : <b>menos + adjectif + que</b> (menos caro que). Égalité : <b>tan + adjectif + como</b> (tan cómoda <b>como</b> el jersey). L'adjectif s'accorde avec le PREMIER élément : la camisa es más barata, los zapatos son más caros. Valeurs utiles : <b>más barato / más caro</b>, <b>más grande / más pequeño</b>. Deux comparatifs spéciaux : <b>mejor</b> (meilleur) et <b>peor</b> (pire, moins bien) : invariables en genre, pluriel mejores / peores, jamais précédés de más (« más mejor » n'existe pas). Pour comparer, on dit toujours <b>que</b> : « este abrigo es mejor <b>que</b> ese ».<br><br>👉 <b>2. Les démonstratifs (montrer du doigt).</b> Proche de moi : <b>este</b> (masc.), <b>esta</b> (fém.), <b>estos</b> (masc. pl.), <b>estas</b> (fém. pl.) : este vestido, esta falda, estos zapatos, estas camisas. Un peu plus loin (ou près de l'autre personne) : <b>ese</b>, <b>esa</b> (pluriel : esos, esas). Ils s'accordent avec le nom et se placent devant. On peut aussi les utiliser seuls : « Me gusta este ». Précision : <b>este vestido</b> = « cette robe » ; sans nom, <b>este</b> = « celui-ci » (on évite de répéter le nom). Un troisième degré, <b>aquel</b>, existe pour ce qui est très éloigné : à ce niveau, retiens este (ici) et ese (là). Piège : <b>esta</b> (ce, cette) ≠ <b>está</b> (il est), l'accent change tout.<br><br>💶 <b>3. Les prix : centaines et mille.</b> Tu connais déjà 0 à 100. Ajoute : <b>cien</b> (100 exactement) / <b>ciento</b> (devant un autre nombre : ciento veinte = 120), <b>doscientos</b> (200), <b>trescientos</b> (300), <b>cuatrocientos</b> (400), <b>quinientos</b> (500), <b>seiscientos</b> (600), <b>setecientos</b> (700), <b>ochocientos</b> (800), <b>novecientos</b> (900), <b>mil</b> (1000). Trois irréguliers à retenir : quinientos (pas cincocientos), setecientos (pas sietecientos), novecientos (pas nuevecientos). Les centaines s'accordent au féminin : doscientas camisas. Le « y » ne sépare que dizaine et unité : trescientos cuarenta y cinco. Prix décimaux : 45,50 € = cuarenta y cinco euros con cincuenta.<br><br>👥 <b>4. Informel et formel.</b> Tú : <b>¿Cuál prefieres?</b> / <b>¿Te ayudo?</b> / <b>¿Quieres probártelo?</b> Usted : <b>¿Cuál prefiere usted?</b> / <b>¿Puedo ayudarle?</b> / <b>¿Quiere probárselo?</b> Pour quitter la boutique sans acheter, la formule polie marche avec tous : « Lo pienso, gracias » (je réfléchis, merci) ou « Solo quería mirar, gracias ».",
  whyLabel:"Pourquoi « que » et « como » pour comparer, jamais « de » ?",
  whyText:"En français on compare avec « que » (plus grand <b>que</b>) et « aussi… que ». En espagnol, la structure est la même, mais l'égalité demande <b>como</b> : tan caro <b>como</b>, jamais « tan caro que ». Astuce : <b>más / menos → que</b> ; <b>tan → como</b>. Le piège le plus fréquent des francophones est de dire « más mejor » parce que meilleur = plus bon : mejor contient déjà « plus », comme en français on ne dit pas « plus meilleur ». Pour les démonstratifs, retiens deux gestes : le doigt tendu vers ce que tu tiens (este, esta, estos, estas) et le doigt vers ce qui est plus loin (ese, esa). Les prix, eux, se disent comme les nombres : une fois les centaines apprises (cien, doscientos, trescientos…), il suffit de les assembler : cuesta ciento veinte euros."
 },
 REVIEW: [
  {q:"Formule polie pour commander :", opts:["Quería un café, por favor.","Quiero un café, ya."], correct:0, fb:"quería adoucit la demande, comme « je voudrais » en français. (rappel A1.6)"},
  {q:"« Je mange du pain » : yo ___ pan. (comer)", opts:["como","comes","come"], correct:0, fb:"Verbe en -ER, yo → -o : como. (rappel A1.6)"},
  {q:"Tú, beber au présent :", opts:["bebes","bebas","bebe"], correct:0, fb:"-ER : tú → -es : bebes. (rappel A1.6)"},
  {q:"« Un peu d'eau » :", opts:["un poco de agua","un poca de agua"], correct:0, fb:"un poco de + indénombrable : poco reste invariable. (rappel A1.6)"},
  {q:"Demander l'addition au restaurant :", opts:["La cuenta, por favor.","El recibo, por favor."], correct:0, fb:"Au restaurant : la cuenta. Le recibo est le ticket d'un achat en magasin. (rappel A1.6)"}
 ],
 DRILLS: [
  {type:"fill", text:"Yo ___ la chaqueta. (probarse)", answers:["me pruebo","Me pruebo"], why:"yo : pronom me + o → ue : me pruebo."},
  {type:"fill", text:"Tú ___ los zapatos. (probarse)", answers:["te pruebas","Te pruebas"], why:"tú : te + pruebas (o → ue)."},
  {type:"fill", text:"Ella ___ el vestido. (probarse)", answers:["se prueba","Se prueba"], why:"3e personne : se prueba (o → ue)."},
  {type:"fill", text:"Nosotros ___ las camisas. (probarse)", answers:["nos probamos","Nos probamos"], why:"nosotros : pas de diphtongue : nos probamos."},
  {type:"fill", text:"Vosotros ___ las zapatillas. (probarse)", answers:["os probáis","Os probáis"], why:"vosotros : os probáis, accent écrit (pas de diphtongue)."},
  {type:"fill", text:"Ellos ___ los abrigos. (probarse)", answers:["se prueban","Se prueban"], why:"ellos : se prueban (o → ue)."},
  {type:"fill", text:"¿Puedo probárme___ ? (la falda)", answers:["la"], why:"falda est féminin singulier : probármela."},
  {type:"fill", text:"¿Puedo probárme___ ? (los zapatos)", answers:["los"], why:"zapatos est masculin pluriel : probármelos."},
  {type:"fill", text:"Me gusta esta camisa. Me ___ llevo.", answers:["la"], why:"camisa est féminin : me la llevo."},
  {type:"fill", text:"Me gustan estos pantalones. Me ___ llevo.", answers:["los"], why:"pantalones est masculin pluriel : me los llevo."},
  {type:"fill", text:"Los zapatos ___ sesenta euros. (costar)", answers:["cuestan"], why:"Sujet pluriel : cuestan (o → ue)."},
  {type:"fill", text:"El bolso ___ treinta euros. (costar)", answers:["cuesta"], why:"Sujet singulier : cuesta (o → ue)."},
  {type:"fill", text:"Esta camisa es ___ barata que esa. (plus)", answers:["más"], why:"Supériorité : más + adjectif + que."},
  {type:"fill", text:"Este bolso es tan bonito ___ ese.", answers:["como"], why:"Égalité : tan + adjectif + como."},
  {type:"fill", text:"Esta chaqueta es ___ que esa. (meilleure)", answers:["mejor"], why:"mejor = meilleur ; jamais « más mejor »."},
  {type:"fill", text:"700 euros = ___ euros", answers:["setecientos"], why:"700 est irrégulier : setecientos (pas sietecientos)."},
  {type:"fill", text:"500 euros = ___ euros", answers:["quinientos"], why:"500 est irrégulier : quinientos (pas cincocientos)."},
  {type:"fill", text:"___ falda es larga. (proche de toi)", answers:["Esta","esta"], why:"falda est féminin singulier : esta."},
  {type:"choice", q:"Corrige : « Esta camisa es más mejor que esa. »", opts:["Esta camisa es mejor que esa.","Esta camisa es más buena que esa."], correct:0, why:"mejor est déjà un comparatif : mejor que."},
  {type:"choice", q:"« Le sac coûte quarante euros. »", opts:["El bolso cuesta cuarenta euros.","El bolso costa cuarenta euros."], correct:0, why:"costar → cuesta : le radical change en ue."},
  {type:"choice", q:"À une cliente âgée (usted), le vendeur dit :", opts:["¿Quiere probárselo?","¿Quieres probártelo?"], correct:0, why:"usted → se : probárselo. Tú → te : probártelo."},
  {type:"choice", q:"À ton ami (tú), tu dis :", opts:["¿Quieres probártelo?","¿Quiere probárselo?"], correct:0, why:"tú → te : probártelo. Le vouvoiement demande probárselo."},
  {type:"choice", q:"Pour demander à essayer un pantalon (unos pantalones) :", opts:["¿Puedo probármelos?","¿Puedo probármelo?"], correct:0, why:"pantalones est pluriel : probármelos."},
  {type:"choice", q:"« Les chaussures sont trop petites. »", opts:["Los zapatos son demasiado pequeños.","Los zapatos son demasiado pequeño."], correct:0, why:"demasiado ne change pas ; pequeño s'accorde avec zapatos : pequeños."}
 ],
 ANNOTATED: {
  title:"Marta en la tienda",
  intro:"Un petit texte pour t'entraîner à lire. Touche chaque mot pour voir sa nature et sa traduction — et repère les pronoms collés (probármelo) et les comparatifs.",
  sentences:[
   {fr:"Combien coûte cette veste rouge ?", tokens:[
    {w:"¿Cuánto", tag:"adverbe", info:"interrogatif", fr:"combien", tip:"Accent écrit : cuánto (question)."},
    {w:"cuesta", tag:"verbe", info:"costar · présent · 3e pers. sing.", fr:"coûte", tip:"o → ue : cuesta, jamais « costa »."},
    {w:"esta", tag:"déterminant", info:"démonstratif · fém. sing.", fr:"cette", tip:"proche de moi ; ne se confond pas avec está."},
    {w:"chaqueta", tag:"nom", info:"fém. sing.", fr:"veste", tip:"ch = tch : tcha-KE-ta."},
    {w:"roja?", tag:"adjectif", info:"fém. sing.", fr:"rouge", tip:"s'accorde avec chaqueta (féminin) ; r initiale roulée."}
   ]},
   {fr:"Elle me va parfaitement, je la prends.", tokens:[
    {w:"Me", tag:"pronom", info:"complément indirect", fr:"à moi", tip:"avec quedar, comme avec gustar."},
    {w:"queda", tag:"verbe", info:"quedar · présent · 3e pers. sing.", fr:"va (en parlant d'un vêtement)", tip:"ça me va : me queda bien / me queda perfecta."},
    {w:"perfecta,", tag:"adjectif", info:"fém. sing.", fr:"parfaite", tip:"s'accorde avec chaqueta."},
    {w:"me", tag:"pronom", info:"réfléchi", fr:"pour moi", tip:"llevarse : emporter pour soi."},
    {w:"la", tag:"pronom", info:"complément direct · fém.", fr:"la (la veste)", tip:"s'accorde avec l'objet, pas avec la personne."},
    {w:"llevo", tag:"verbe", info:"llevar · présent · yo", fr:"prends", tip:"ll = y : YE-vo."}
   ]},
   {fr:"Voulez-vous l'essayer, madame ?", tokens:[
    {w:"¿Quiere", tag:"verbe", info:"querer · présent · usted", fr:"voulez-vous", tip:"e → ie, comme preferir ; usted : quiere."},
    {w:"probárselo,", tag:"verbe + pronoms", info:"probar + se + lo", fr:"l'essayer", tip:"pro-BÁR-se-lo : probar (essayer) + se (sur vous) + lo (l'article). L'accent écrit garde la voix sur BÁR."},
    {w:"señora?", tag:"nom", info:"fém. sing.", fr:"madame", tip:"ñ = gn ; titre de politesse avec usted."}
   ]},
   {fr:"Ce sac est moins cher que celui-là.", tokens:[
    {w:"Este", tag:"déterminant", info:"démonstratif · masc. sing.", fr:"ce", tip:"proche de moi."},
    {w:"bolso", tag:"nom", info:"masc. sing.", fr:"sac", tip:"Mexique : bolsa."},
    {w:"es", tag:"verbe", info:"ser · présent · él", fr:"est"},
    {w:"más", tag:"adverbe", info:"comparatif de supériorité", fr:"plus", tip:"más + adjectif + que."},
    {w:"barato", tag:"adjectif", info:"masc. sing.", fr:"bon marché", tip:"s'accorde avec bolso."},
    {w:"que", tag:"conjonction", info:"de comparaison", fr:"que"},
    {w:"ese.", tag:"pronom", info:"démonstratif · masc. sing.", fr:"celui-là", tip:"un peu plus loin ; on ne répète pas le nom."}
   ]}
  ]
 },
 CULTURE_NOTE: {icon:"🛍️", title:"Culture, 10 expressions et fiche récap (A1.7)",
  html:"<b>🛍️ Culture — faire ses achats</b> En Espagne, les grandes enseignes restent ouvertes toute la journée, mais beaucoup de petites boutiques ferment un moment à midi (la pausa del mediodía). Les <b>rebajas</b> (soldes) ont lieu en janvier et en juillet. En Amérique latine, on entend plutôt les <b>ofertas</b> ou la <b>liquidación</b>. Sur les marchés (rastros, mercadillos), on peut marchander (<i>regatear</i>) ; en boutique, non. Garde ton <b>recibo</b> (Espagne : <i>el ticket</i>) pour échanger un article (<i>cambiar</i>). Tutoiement ou vouvoiement ? Entre jeunes en boutique (ou dans une enseigne de mode), ¿Te ayudo? est courant ; ailleurs, ¿Puedo ayudarle? est plus sûr. Variantes : <b>bolso</b> (Espagne, Colombie) / <b>bolsa</b> (Mexique), <b>chaqueta</b> / <b>chamarra</b> (Mexique) / <b>campera</b> (Argentine), <b>zapatillas</b> / <b>tenis</b>, <b>vaqueros</b> / <b>jeans</b>, <b>jersey</b> / <b>suéter</b>, <b>dependiente</b> / <b>vendedor</b>, <b>ordenador</b> / <b>computadora</b>. Prononciation : en Espagne c et z = « th » (zapatos, precio), en Amérique latine = « s ».<br><br><b>🧰 Bonus — 10 expressions du shopping et de l'argent</b><br>1. <b>Costar un ojo de la cara</b> = coûter les yeux de la tête (très cher).<br>2. <b>Irse por las ramas</b> = tourner autour du pot (ne pas aller à l'essentiel). Attention : ce n'est PAS « nager en plein flou ».<br>3. <b>Estar sin blanca</b> = être fauché(e) (familier, Espagne ; Amérique latine : estar sin plata).<br>4. <b>Estar forrado</b> = être plein aux as (familier, Espagne).<br>5. <b>Vender humo</b> = vendre du vent (promettre sans rien donner).<br>6. <b>A precio de saldo</b> = à prix bradé (déstockage, soldes).<br>7. <b>Pagar los platos rotos</b> = payer les pots cassés (subir la faute d'un autre ; sens courant, pas lié aux achats).<br>8. <b>Estar al caer</b> = être imminent (« las rebajas están al caer » = les soldes arrivent). Pas lié à l'argent : il parle du temps ; surtout employé en Espagne.<br>9. <b>Estar tirado de precio</b> = être donné, très bon marché (familier, Espagne).<br>10. <b>A caballo regalado no le mires el diente</b> = à cheval donné, on ne regarde pas les dents (on ne fait pas la fine bouche devant un cadeau). Proverbe figé : à retenir tel quel.<br><br><b>✍️ Expression écrite — ta liste d'achats (4 lignes)</b> Modèle : « Quiero comprar una chaqueta azul. Es más barata que la chaqueta negra, pero es menos elegante. Cuesta cincuenta euros y me queda perfecta. Me la llevo y pago con tarjeta. » Vérifie : comparatif (más… que) · accord de l'adjectif · pronom lo/la · prix en toutes lettres. Version formelle (demande à une vendeuse) : « Buenos días, ¿puede mostrarme esta chaqueta? ».<br><br><b>🗣️ Expression orale — jeu de rôle en boutique</b> Joue le client exigeant. Toi : « Buenos días. Quería unos pantalones negros. ¿Puedo probármelos? — Sí, claro. ¿Qué talla usa? — La 40. — Me quedan pequeños. ¿Los tiene en una talla más? — Aquí tiene. — Perfectos. ¿Cuánto cuestan? — Cuestan sesenta euros. — Me los llevo. — ¿Cómo paga? — Con tarjeta. ». Version tú : « ¿Te ayudo ? / ¿Cuál prefieres ? / Aquí tienes. ».<br><br><b>📝 Mini-contrôle flash</b> « C'est trop cher » → <b>Es demasiado caro / cara</b> (selon le genre de l'objet). « Je le prends » → <b>Me lo llevo</b> (féminin : me la llevo).<br><br><b>📄 Fiche récap</b> Vêtements : camisa · pantalones · zapatos · vestido · chaqueta · bolso · falda · jersey · talla · color. Phrases : ¿Cuánto cuesta ? / cuestan · ¿Puedo probármelo ? · Es demasiado grande/pequeño · Me lo llevo · en efectivo / con tarjeta · recibo. Probarse : me pruebo, te pruebas, se prueba, nos probamos, os probáis, se prueban. Pronoms collés : probar + me + lo = probármelo ; tú : probártelo ; usted : probárselo. Comparatifs : más… que · menos… que · tan… como · mejor / peor. Démonstratifs : este, esta, estos, estas · ese, esa. Nombres : cien · doscientos · quinientos · setecientos · novecientos · mil. Politesse : ¿Puedo ayudarle ? (usted) / ¿Te ayudo ? (tú)."},
 NEXT_PREVIEW:"A1.8 (Moverse por la ciudad) : se repérer en ville, demander et comprendre un chemin (¿Está lejos ?, a la izquierda / a la derecha), nommer les lieux (tienda, banco, farmacia, supermercado…), parler des transports (cambiar de autobús, bajarse, subirse) et découvrir « estar + gérondif » pour dire ce qu'on est en train de faire.",
 META:{vocabTitle:"De compras : vêtements, tailles, prix, comparatifs et probarse (A1.7)", lectureTitle:"Marta va de compras", bilanTitle:"Bravo, tu sais faire tes achats en espagnol !", pronLabel:"De compras : ch, ll, z/c, la diphtongue ue (pruebo, cuesta) et l'accent de probármelo", todayLede:"demander un prix et une taille, essayer un vêtement avec probarse et probármelo, comparer deux articles (más… que, mejor, tan… como), montrer avec este / ese, compter jusqu'à 1000 et payer — en tutoiement ET en vouvoiement"}
};
(typeof __esDeco==="function" ? __esDeco : function(n,map){ LESSONS_ES[n].VOCAB.forEach(function(v){ var d=map[v.en]; if(!d) throw new Error("Pas d'illustration pour : "+v.en); v.emo=d[0]; v.ex=[d[1],d[2]]; }); })(207, MAP);
})();


// A1.8 — Moverse por la ciudad : lieux de la ville, itinéraires, présent continu (ESTAR + gérondif) (leçon 208)
(function(){
var MAP = {};
function blk(name, rows){ rows.forEach(function(r){ MAP[r[0]] = [r[4], r[5], r[6]]; }); return __esB(name, rows); }
// ligne = [terme, API, français, note, emoji, exemple ES, exemple FR]
var V = [].concat(
 blk("Les lieux de la ville", [
  ["la tienda","/la ˈtjenda/","le magasin, la boutique","ie = diphtongue : TYEN-da. Pluriel : las tiendas. Ne confonds pas avec « la tienda de campaña » (la tente).","🏪","Hay una tienda en la esquina.","Il y a un magasin au coin de la rue."],
  ["el parque","/el ˈpaɾke/","le parc","qu = k : PAR-ke. Masculin. Pluriel : los parques.","🌳","El parque está cerca de mi casa.","Le parc est près de ma maison."],
  ["la biblioteca","/la biβljoˈteka/","la bibliothèque","Faux ami : « la librería » = la librairie (on y achète des livres) ; la biblioteca = on y emprunte.","📚","La biblioteca está al lado del parque.","La bibliothèque est à côté du parc."],
  ["el hospital","/el ospiˈtal/","l'hôpital","h muette : os-pi-TAL, accent sur la dernière syllabe. Pluriel : los hospitales.","🏥","El hospital está cerca de la estación.","L'hôpital est près de la gare."],
  ["la farmacia","/la faɾˈmaθja/","la pharmacie","S'écrit avec f (pas « ph »). c = th (Espagne) ou s (Amérique latine). En Colombie, on dit aussi « la droguería ».","💊","La farmacia está al lado del banco.","La pharmacie est à côté de la banque."],
  ["el banco","/el ˈbaŋko/","la banque","n devant k se prononce « ng » : BANG-ko. Attention : « el banco » est aussi le banc où l'on s'assoit ; le contexte tranche.","🏦","El banco está enfrente del parque.","La banque est en face du parc."],
  ["la oficina de correos","/la ofiˈθina de koˈrreos/","le bureau de poste","On dit aussi « Correos » (la poste espagnole). Amérique latine : « el correo ». rr = r roulé.","📮","Estoy en la oficina de correos.","Je suis au bureau de poste."],
  ["el supermercado","/el supeɾmeɾˈkaðo/","le supermarché","Accent sur la dernière syllabe de « mercado » : ka-DO. À l'oral, on dit souvent « el súper ».","🛒","El supermercado está lejos.","Le supermarché est loin."],
  ["el gimnasio","/el xinˈnasjo/","la salle de sport","g devant i = kh : khim-NA-syo. À l'oral, on entend aussi « el gym ».","🏋️","El gimnasio está cerca de mi casa.","La salle de sport est près de chez moi."],
  ["el ayuntamiento","/el ajuntaˈmjento/","la mairie","y = « y » : a-yun-ta-MYEN-to. Amérique latine : « la alcaldía » (Mexique, Colombie) ou « la municipalidad » (Argentine, Chili, Pérou).","🏛️","El ayuntamiento está en la plaza.","La mairie est sur la place."],
  ["la panadería","/la panaðeˈɾia/","la boulangerie","Le suffixe -ería désigne le lieu où l'on vend : panadería, librería, frutería. Accent écrit sur í : pa-na-de-RÍ-a.","🥖","La panadería está en la esquina.","La boulangerie est au coin."],
  ["el museo","/el muˈseo/","le musée","mu-SE-o : le o final se prononce nettement. Pluriel : los museos.","🖼️","El museo está enfrente de la iglesia.","Le musée est en face de l'église."],
  ["la iglesia","/la iˈɣlesja/","l'église","Le g est très doux : i-GLE-sya. Féminin.","⛪","La iglesia está en la plaza.","L'église est sur la place."],
  ["la comisaría","/la komisaˈɾia/","le commissariat","Accent écrit sur í : co-mi-sa-RÍ-a. Pour demander de l'aide, on s'adresse à « un policía ».","🚓","La comisaría está al lado del ayuntamiento.","Le commissariat est à côté de la mairie."],
  ["el cajero automático","/el kaˈxeɾo autoˈmatiko/","le distributeur de billets","À l'oral : « el cajero ». j = kh : ka-KHE-ro. Il est souvent dans la rue, devant la banque.","🏧","Hay un cajero automático en el banco.","Il y a un distributeur dans la banque."],
  ["el buzón","/el buˈθon/","la boîte aux lettres","z = th (Espagne) / s (Amérique latine). Accent écrit : bu-ZÓN. Pluriel : los buzones.","📫","El buzón está en la esquina.","La boîte aux lettres est au coin."],
  ["el mercado","/el meɾˈkaðo/","le marché","Se dit pour le marché de quartier comme pour le marché couvert. Le d entre voyelles est très doux.","🧺","El mercado está cerca de la plaza.","Le marché est près de la place."],
  ["la cafetería","/la kafeteˈɾia/","le café (lieu où l'on prend un café)","Accent écrit sur í : ca-fe-te-RÍ-a. En Espagne, le bar joue le même rôle.","☕","Estamos en la cafetería.","Nous sommes au café."],
  ["el cine","/el ˈθine/","le cinéma","c devant i = th (Espagne) / s (Amérique latine) : THI-ne.","🎬","El cine está al lado del museo.","Le cinéma est à côté du musée."]
 ]),
 blk("Situer un lieu : Está en… / Hay…", [
  ["está en · están en","/esˈta en · esˈtan en/","il/elle est à, dans · ils/elles sont à, dans","ESTAR sert à situer une chose précise que l'on connaît : « La farmacia está en la calle Mayor ». Sujet pluriel : están. Accents écrits obligatoires.","📍","El banco está en la plaza.","La banque est sur la place."],
  ["hay · no hay","/aj · no aj/","il y a · il n'y a pas","Une seule forme pour le singulier ET le pluriel : hay una farmacia, hay dos bancos. Sert à dire qu'une chose EXISTE, sans la connaître d'avance.","❓","¿Hay una farmacia por aquí?","Y a-t-il une pharmacie par ici ?"],
  ["¿Dónde está…? · ¿Hay … cerca?","/ˈdonde esˈta · aj ˈθeɾka/","où est… ? · y a-t-il … près d'ici ?","¿Dónde ESTÁ la farmacia ? = tu sais qu'elle existe et tu la cherches. ¿HAY una farmacia cerca ? = tu ne sais même pas s'il y en a une. Réponse : « Está en… » ou « Hay una en… ».","🔎","¿Dónde está el hospital?","Où est l'hôpital ?"],
  ["a la izquierda · a la derecha","/a la iθˈkjeɾða · a la deˈɾetʃa/","à gauche · à droite","z = th (Espagne) / s (Amérique latine). On dit toujours « a la » : gira a la izquierda. Jamais « en la izquierda ».","↔️","La farmacia está a la derecha.","La pharmacie est à droite."],
  ["al lado de · enfrente de","/al ˈlaðo de · enˈfɾente de/","à côté de · en face de","Vus en A1.4. de + el = del : al lado del banco, enfrente del parque. À l'écrit, la contraction est obligatoire.","🧭","La farmacia está al lado del banco.","La pharmacie est à côté de la banque."],
  ["cerca · lejos","/ˈθeɾka · ˈlexos/","près · loin","Vus en A1.4. Avec « de » : cerca de la plaza, lejos del hospital. lejos : j = kh.","📏","La biblioteca está cerca de la estación.","La bibliothèque est près de la gare."],
  ["¿Está lejos? · ¿Está cerca?","/esˈta ˈlexos · esˈta ˈθeɾka/","c'est loin ? · c'est près ?","Question de survie n°1. Le lieu dont on parle est sous-entendu. Même forme au tutoiement et au vouvoiement : « ¿Está lejos, señora? ». Réponse : « No, está a cinco minutos a pie. ».","🚶","Perdone, ¿está lejos el hospital?","Excusez-moi, l'hôpital est-il loin ?"],
  ["a cinco minutos a pie","/a ˈθiŋko miˈnutos a pje/","à cinq minutes à pied","« a + durée » = à X minutes d'ici. Tu peux changer : a diez minutos en autobús. mi-NU-tos.","⏱️","El museo está a diez minutos a pie.","Le musée est à dix minutes à pied."],
  ["todo recto","/ˈtoðo ˈrrekto/","tout droit","On dit aussi « recto » seul : siga recto. En Amérique latine, on entend souvent « derecho » : siga derecho. r initiale roulée.","⬆️","Siga todo recto por esta calle.","Continuez tout droit dans cette rue."],
  ["en la esquina","/en la esˈkina/","au coin (de la rue)","Vu en A1.4. « en la esquina de la plaza » = au coin de la place. qu = k : es-KI-na.","📐","La panadería está en la esquina.","La boulangerie est au coin."],
  ["aquí · por aquí · allí","/aˈki · poɾ aˈki · aˈʝi/","ici · par ici · là-bas","« por aquí » = dans les environs, par ici (¿Hay un banco por aquí ?). allí : ll = y.","👉","La farmacia está allí.","La pharmacie est là-bas."]
 ]),
 blk("Survie en ville : se faire comprendre", [
  ["Perdón, ¿puede repetir? · ¿Puedes repetir?","/peɾˈðon ˈpwede repeˈtiɾ · ˈpwedes repeˈtiɾ/","Pardon, pouvez-vous répéter ? · Peux-tu répéter ?","Usted : ¿puede ? Tú : ¿puedes ? (poder : puedo, puedes, puede ; o → ue). Après « puede », un infinitif. Piège : « ¿Puedo repetir? » veut dire « puis-je répéter (moi) ? ».","🔁","Perdón, ¿puede repetir, por favor?","Pardon, pouvez-vous répéter, s'il vous plaît ?"],
  ["Más despacio, por favor","/mas desˈpaθjo poɾ faˈβoɾ/","plus lentement, s'il vous plaît","« despacio » = lentement (adverbe invariable). Pour être complet : « ¿Puede hablar más despacio? » (usted) / « ¿Puedes hablar más despacio? » (tú).","🐢","Más despacio, por favor.","Plus lentement, s'il vous plaît."],
  ["No entiendo","/no enˈtjendo/","je ne comprends pas","entender : e → ie (entiendo, entiendes, entiende), comme preferir. « no » avant le verbe. Version polie : « Perdón, no entiendo ».","🤷","Perdón, no entiendo.","Pardon, je ne comprends pas."],
  ["¿Puede ayudarme? · ¿Puedes ayudarme?","/ˈpwede aʝuˈðaɾme · ˈpwedes aʝuˈðaɾme/","Pouvez-vous m'aider ? · Peux-tu m'aider ?","Le pronom « me » se colle à l'infinitif (comme dans probármelo, A1.7). ayudar : y = « y » : a-yu-DAR-me.","🙋","Perdone, ¿puede ayudarme?","Excusez-moi, pouvez-vous m'aider ?"],
  ["perdido / perdida","/peɾˈðiðo · peɾˈðiða/","perdu(e)","S'accorde avec la personne qui parle : un homme dit « estoy perdido », une femme « estoy perdida ». État passager : ESTAR.","😕","Estoy perdida: busco la biblioteca.","Je suis perdue : je cherche la bibliothèque."],
  ["perder el autobús","/peɾˈðeɾ el autoˈβus/","rater le bus","perder : e → ie (pierdo, pierdes, pierde), comme preferir. « perder el autobús / el tren » = le manquer. Ne confonds pas avec « estar perdido » (être perdu).","⏰","Siempre pierdo el autobús.","Je rate toujours le bus."],
  ["No te preocupes · No se preocupe","/no te pɾeoˈkupes · no se pɾeoˈkupe/","ne t'inquiète pas · ne vous inquiétez pas","Formule de réassurance à retenir telle quelle : tú → te preocupes ; usted → se preocupe. Très courante pour rassurer un touriste perdu.","😌","No se preocupe, señora: la farmacia está cerca.","Ne vous inquiétez pas, madame : la pharmacie est près."],
  ["la dirección","/la diɾekˈθjon/","l'adresse ; la direction","Deux sens : l'adresse (la dirección de la farmacia) et la direction. Pluriel : las direcciones (l'accent disparaît). Les noms en -ción sont féminins.","🗺️","Tengo la dirección de la biblioteca.","J'ai l'adresse de la bibliothèque."],
  ["el mapa","/el ˈmapa/","la carte, le plan","Masculin malgré le -a (vu en A1.0). Pluriel : los mapas.","📍","Tengo un mapa en la mochila.","J'ai un plan dans mon sac à dos."],
  ["el turista / la turista","/el tuˈɾista · la tuˈɾista/","le touriste / la touriste","Mot en -ista : même forme au masculin et au féminin ; seul l'article change.","🧳","Soy turista y estoy perdido.","Je suis touriste et je suis perdu."],
  ["¿Cómo llego a…?","/ˈkomo ˈʝeɣo a/","comment j'arrive à… ?","Vu en A1.4. llego = présent de llegar. ll = y : YE-go. Ne traduis pas « aller » par ir ici : on demande comment ARRIVER.","🧭","¿Cómo llego a la plaza?","Comment j'arrive à la place ?"]
 ]),
 blk("Transports et rues : réemploi de A1.4 et nouveautés", [
  ["el autobús · el metro · el tren · el taxi","/el autoˈβus · el ˈmetɾo · el tɾen · el ˈtaksi/","le bus · le métro · le train · le taxi","Vocabulaire vu en A1.4. Variantes pour le bus : « el camión » (Mexique), « el colectivo » (Argentine), « la guagua » (Caraïbes). « autobús » est compris partout. Métro de Buenos Aires : « el subte ».","🚌","Estoy esperando el autobús.","Je suis en train d'attendre le bus."],
  ["la parada · la estación","/la paˈɾaða · la estaˈθjon/","l'arrêt · la gare, la station","parada = arrêt de bus ou de tram ; estación = gare ou station de métro. Pluriel : paradas, estaciones.","🚏","La parada está enfrente del banco.","L'arrêt est en face de la banque."],
  ["la línea","/la ˈlinea/","la ligne (bus, métro)","« la línea tres », « la línea roja ». Accent écrit sur le í : LÍ-ne-a.","🚇","Tome la línea tres.","Prenez la ligne trois."],
  ["el transbordo","/el tɾansˈβoɾðo/","la correspondance","« cambiar de línea » se dit aussi. Masculin. Dans le métro : « el transbordo está en Sol ».","🔄","Hay un transbordo en la estación Central.","Il y a une correspondance à la gare Centrale."],
  ["cambiar de tren · cambiar de autobús","/kamˈbjaɾ de tɾen · kamˈbjaɾ de autoˈβus/","changer de train · de bus","Toujours « cambiar DE + moyen de transport » (cambiar de línea aussi). Présent : cambio, cambias, cambia, cambiamos, cambiáis, cambian.","🔀","Cambio de tren en la estación Central.","Je change de train à la gare Centrale."],
  ["bajarse","/baˈxaɾse/","descendre (d'un transport)","Verbe pronominal : me bajo, te bajas, se baja, nos bajamos, os bajáis, se bajan. On dit « bajarse DEL autobús » (de + el) ou « bajarse EN la próxima parada ». j = kh.","⬇️","Me bajo en la próxima parada.","Je descends au prochain arrêt."],
  ["subirse","/suˈβiɾse/","monter (dans un transport)","Verbe pronominal : me subo, te subes, se sube, nos subimos, os subís, se suben. On dit « subirse AL autobús » (a + el).","⬆️","Nos subimos al metro en Sol.","Nous montons dans le métro à Sol."],
  ["la próxima parada","/la ˈpɾoksima paˈɾaða/","le prochain arrêt","Accent écrit : PRÓ-xi-ma ; x = ks. Accord : la próxima parada, la próxima estación, mais el próximo tren.","⏭️","La próxima parada es la plaza.","Le prochain arrêt est la place."],
  ["la avenida · la calle","/la aβeˈniða · la ˈkaʝe/","l'avenue · la rue","avenida = grande rue. Amérique latine : « la cuadra » = le pâté de maisons (« a dos cuadras » = à deux rues d'ici) ; Espagne : « la manzana ».","🛣️","Siga recto por esta avenida.","Continuez tout droit sur cette avenue."],
  ["el semáforo · la esquina","/el seˈmaforo · la esˈkina/","le feu · le coin de rue","Vus en A1.4. Accent écrit : se-MÁ-fo-ro. « en el semáforo » = au feu.","🚦","Gire a la izquierda en el semáforo.","Tournez à gauche au feu."],
  ["el puente · la plaza","/el ˈpwente · la ˈplaθa/","le pont · la place","Vus en A1.4. ue = diphtongue : PWEN-te. plaza : z = th / s.","🌉","La plaza está después del puente.","La place est après le pont."],
  ["el paso de peatones","/el ˈpaso de peaˈtones/","le passage piéton","Aussi « el paso de cebra » en Espagne. On y traverse : « cruzar por el paso de peatones ».","🚸","Cruce por el paso de peatones.","Traversez au passage piéton."],
  ["la rotonda","/la roˈtonda/","le rond-point","Espagne : aussi « la glorieta ». Amérique latine : « la rotonda » ou « el redondel » selon les pays.","⭕","Hay una rotonda después del puente.","Il y a un rond-point après le pont."],
  ["la acera","/la aˈθeɾa/","le trottoir","Amérique latine : « la vereda » (Argentine, Pérou, Chili) ou « la banqueta » (Mexique). Féminin.","👣","Estamos caminando por la acera.","Nous marchons sur le trottoir."]
 ]),
 blk("Estar + gérondif : les verbes de la leçon (tous réguliers)", [
  ["buscar → buscando","/busˈkaɾ · busˈkando/","chercher → en train de chercher","Radical busc- + -ando. Se construit SANS préposition : « buscar la farmacia » (on ne dit pas « buscar por »).","🔍","Estoy buscando la farmacia.","Je suis en train de chercher la pharmacie."],
  ["hablar → hablando","/aˈβlaɾ · aˈβlando/","parler → en train de parler","h muette : a-BLAN-do. Verbe en -AR : -ando.","🗣️","Ana está hablando con un señor.","Ana est en train de parler avec un monsieur."],
  ["esperar → esperando","/espeˈɾaɾ · espeˈɾando/","attendre → en train d'attendre","Se construit sans préposition : esperar el autobús. esperar veut aussi dire « espérer ».","⏳","Estamos esperando el autobús.","Nous sommes en train d'attendre le bus."],
  ["caminar → caminando","/kamiˈnaɾ · kamiˈnando/","marcher → en train de marcher","Verbe en -AR régulier. « caminar por la acera » = marcher sur le trottoir.","🚶","Estás caminando muy rápido.","Tu marches très vite."],
  ["cruzar → cruzando","/kɾuˈθaɾ · kɾuˈθando/","traverser → en train de traverser","Le gérondif garde le z : cruzando (le z devient c seulement devant e : cruce). Se construit sans préposition : cruzar la calle.","↔️","Los niños están cruzando la calle.","Les enfants sont en train de traverser la rue."],
  ["preguntar → preguntando","/pɾeɣunˈtaɾ · pɾeɣunˈtando/","demander (une question) → en train de demander","gu devant u se prononce « g » dur : pre-gun-TAR. « preguntar por » = demander où est… (preguntar por la estación).","❓","Estoy preguntando por la estación.","Je demande où est la gare."],
  ["mirar → mirando","/miˈɾaɾ · miˈɾando/","regarder → en train de regarder","Se construit sans préposition : mirar el mapa. r simple entre voyelles = r « tapé ».","👀","Estoy mirando el mapa.","Je suis en train de regarder le plan."],
  ["llegar → llegando","/ʝeˈɣaɾ · ʝeˈɣando/","arriver → en train d'arriver","ll = y : ye-GAN-do. « llegar a + lieu » : llegar a la plaza.","📍","Estamos llegando a la plaza.","Nous arrivons à la place."],
  ["bajar → bajando","/baˈxaɾ · baˈxando/","descendre → en train de descendre","j = kh : ba-KHAN-do. « bajar del metro », « bajar del autobús ».","⬇️","Estáis bajando del metro.","Vous êtes en train de descendre du métro."],
  ["subir → subiendo","/suˈβiɾ · suˈβjendo/","monter → en train de monter","Verbe en -IR : -iendo. « subir al tren ». ie = diphtongue : su-BYEN-do.","⬆️","Están subiendo al tren.","Ils sont en train de monter dans le train."],
  ["comer → comiendo","/koˈmeɾ · koˈmjendo/","manger → en train de manger","Verbe en -ER : -iendo. ie = diphtongue : ko-MYEN-do (une seule syllabe « yen »).","🍽️","Estás comiendo en la cafetería.","Tu es en train de manger au café."],
  ["vivir → viviendo","/biˈβiɾ · biˈβjendo/","vivre, habiter → en train de vivre","Verbe en -IR : -iendo. v = b. « Está viviendo en Madrid » = elle habite à Madrid en ce moment (situation provisoire).","🏠","Mi tía está viviendo en Madrid.","Ma tante vit à Madrid en ce moment."],
  ["beber → bebiendo","/beˈβeɾ · beˈβjendo/","boire → en train de boire","Verbe en -ER : -iendo. Les deux b se prononcent de façon douce.","🥤","Estoy bebiendo un café.","Je suis en train de boire un café."],
  ["escribir → escribiendo","/eskɾiˈβiɾ · eskɾiˈβjendo/","écrire → en train d'écrire","Verbe en -IR : -iendo. Se construit sans préposition : escribir la dirección.","✍️","Estoy escribiendo la dirección.","Je suis en train d'écrire l'adresse."],
  ["aprender → aprendiendo","/apɾenˈdeɾ · apɾenˈdjendo/","apprendre → en train d'apprendre","Verbe en -ER : -iendo. Se construit sans préposition : aprender español.","🎓","Estamos aprendiendo español.","Nous sommes en train d'apprendre l'espagnol."],
  ["ahora · ahora mismo · en este momento","/aˈoɾa · aˈoɾa ˈmismo · en ˈeste moˈmento/","maintenant · tout de suite, à l'instant · en ce moment","Les trois mots-clés du présent continu. h muette : a-O-ra. « ahora mismo » insiste : exactement maintenant.","⏱️","Ahora estoy en la plaza.","Maintenant je suis sur la place."]
 ]),
 blk("Consignes échelonnées : Primero, luego, después, por último", [
  ["primero","/pɾiˈmeɾo/","d'abord, premièrement","Premier mot d'un itinéraire. Comme adverbe, il ne change jamais : « Primero, siga recto ». Comme adjectif, il s'accorde : la primera calle.","1️⃣","Primero, siga recto por esta avenida.","D'abord, continuez tout droit sur cette avenue."],
  ["luego","/ˈlwego/","ensuite, puis","ue = diphtongue : LWE-go. Aussi dans « hasta luego » (à tout à l'heure). Synonyme proche de « después ».","2️⃣","Luego, gire a la izquierda.","Ensuite, tournez à gauche."],
  ["después","/desˈpwes/","après, puis","Accent écrit sur le é. Avec un nom : « después de » + nom (después del semáforo = après le feu).","3️⃣","Después, la farmacia está al lado del banco.","Ensuite, la pharmacie est à côté de la banque."],
  ["por último","/poɾ ˈultimo/","pour finir, en dernier lieu","Accent écrit sur ÚL-ti-mo. Synonymes : « al final », « finalmente ». Marque la dernière étape.","🏁","Por último, la biblioteca está enfrente del parque.","Pour finir, la bibliothèque est en face du parc."],
  ["Sigue recto · Siga recto","/ˈsiɣe ˈrrekto · ˈsiɣa ˈrrekto/","continue tout droit · continuez tout droit","Impératif vu en A1.4 : tú → sigue ; usted → siga. En Amérique latine, on entend aussi « siga derecho ».","➡️","Siga recto hasta el semáforo.","Continuez tout droit jusqu'au feu."],
  ["Gira a la izquierda · Gire a la izquierda","/ˈxiɾa a la iθˈkjeɾða · ˈxiɾe a la iθˈkjeɾða/","tourne à gauche · tournez à gauche","tú → gira ; usted → gire (g devant i/e = kh). Espagne : girar. Amérique latine : « dobla / doble a la izquierda » (doblar).","⬅️","Gire a la izquierda en la plaza.","Tournez à gauche sur la place."],
  ["Cruza la calle · Cruce la calle","/ˈkɾuθa la ˈkaʝe · ˈkɾuθe la ˈkaʝe/","traverse la rue · traversez la rue","tú → cruza ; usted → cruce : le z devient c devant -e (orthographe). Même schéma que gira / gire.","🚸","Cruce la calle por el paso de peatones.","Traversez la rue au passage piéton."],
  ["Toma la primera calle · Tome la primera calle","/ˈtoma la pɾiˈmeɾa ˈkaʝe · ˈtome la pɾiˈmeɾa ˈkaʝe/","prends la première rue · prenez la première rue","tú → toma ; usted → tome. En Espagne, on entend « coge » ; en Amérique latine « coger » est grossier : « tomar » est le choix neutre partout.","1️⃣","Tome la segunda calle a la derecha.","Prenez la deuxième rue à droite."],
  ["hasta","/ˈasta/","jusqu'à","h muette : AS-ta. « hasta el semáforo » = jusqu'au feu ; « hasta la plaza » = jusqu'à la place.","🎯","Siga recto hasta la plaza.","Continuez tout droit jusqu'à la place."],
  ["la primera calle · la segunda calle","/la pɾiˈmeɾa ˈkaʝe · la seˈɣunda ˈkaʝe/","la première rue · la deuxième rue","Les ordinaux s'accordent : primero / primera, segundo / segunda, tercero / tercera. Devant un nom masculin singulier : el primer semáforo.","🔢","Es la segunda calle a la izquierda.","C'est la deuxième rue à gauche."],
  ["al final de la calle","/al fiˈnal de la ˈkaʝe/","au bout de la rue","« al final de » = au bout de. Accent sur la dernière syllabe : fi-NAL.","🏁","El banco está al final de la calle.","La banque est au bout de la rue."],
  ["Estoy buscando…","/esˈtoj busˈkando/","je cherche… (en ce moment)","Phrase clé pour demander de l'aide. « Busco… » existe aussi ; « estoy buscando » insiste sur la recherche en cours, là, maintenant.","🙋","Perdone, estoy buscando la farmacia.","Excusez-moi, je cherche la pharmacie."]
 ])
);
LESSONS_ES[208] = {
 code:"A1.8", level:"A1",
 VOCAB: V,
 MEM_WORDS: __esIdx(V, ["la farmacia","la oficina de correos","perdido / perdida","bajarse","subirse","buscar → buscando","comer → comiendo","vivir → viviendo","Perdón, ¿puede repetir? · ¿Puedes repetir?","Sigue recto · Siga recto"]),
 MINI_CHECKS: [
  {q:"« Je suis en train de chercher la banque. »", opts:["Estoy buscando el banco.","Estoy buscar el banco.","Soy buscando el banco."], correct:0, fb:"Présent continu = ESTAR conjugué + gérondif (radical + -ando). On n'utilise jamais l'infinitif après estar, et SER ne convient pas."},
  {q:"Gérondif de « vivir » :", opts:["viviendo","vivando","vivindo"], correct:0, fb:"Les verbes en -ER et -IR prennent -iendo : vivir → viviendo, comer → comiendo."},
  {q:"Une femme perdue dit :", opts:["Estoy perdido.","Estoy perdida."], correct:1, fb:"perdido s'accorde avec la personne qui parle : une femme dit perdida. Avec ESTAR, car c'est un état passager."},
  {q:"« Siga recto » s'adresse à quelqu'un que l'on…", opts:["tutoie (tú)","vouvoie (usted)"], correct:1, fb:"siga = impératif d'usted ; au tutoiement on dit « sigue recto »."},
  {q:"« Nous descendons à la prochaine station. »", opts:["Nos bajamos en la próxima parada.","Bajamos nos en la próxima parada.","Nosotros bajamos se en la próxima parada."], correct:0, fb:"bajarse est pronominal : le pronom (nos) se place avant le verbe conjugué : nos bajamos."},
  {q:"Pour dire « ensuite » dans un itinéraire :", opts:["luego","primero","por último"], correct:0, fb:"primero = d'abord, luego / después = ensuite, por último = pour finir."},
  {q:"Pour retirer de l'argent liquide, tu vas…", opts:["al banco","a la farmacia","al gimnasio"], correct:0, fb:"El banco (ou el cajero automático) : on retire de l'argent. a + el = al."},
  {q:"Les verbes en -ER / -IR forment leur gérondif en…", opts:["-ando","-iendo"], correct:1, fb:"-AR → -ando (buscando) ; -ER / -IR → -iendo (comiendo, viviendo)."}
 ],
 ROUNDS: [
  __esR("Estoy buscando la farmacia.","Je suis en train de chercher la pharmacie."),
  __esR("¿Estás comiendo en la cafetería?","Es-tu en train de manger au café ?"),
  __esR("Está viviendo cerca del parque.","Il vit près du parc en ce moment."),
  __esR("Estamos esperando el autobús.","Nous attendons le bus."),
  __esR("Primero, siga recto por esta avenida.","D'abord, continuez tout droit sur cette avenue."),
  __esR("Luego, gire a la izquierda.","Ensuite, tournez à gauche."),
  __esR("Después, la farmacia está al lado del banco.","Ensuite, la pharmacie est à côté de la banque."),
  __esR("Perdón, ¿puede repetir, por favor?","Pardon, pouvez-vous répéter, s'il vous plaît ?"),
  __esR("No entiendo, ¿puedes repetir?","Je ne comprends pas, peux-tu répéter ?"),
  __esR("Me bajo en la próxima parada.","Je descends au prochain arrêt."),
  __esR("Los turistas están subiendo al tren.","Les touristes sont en train de monter dans le train."),
  __esR("Por último, cruce la calle.","Pour finir, traversez la rue."),
  __esR("¿Está lejos la oficina de correos?","Le bureau de poste est-il loin ?")
 ],
 QUIZ: [
  {cat:"ecrit", q:"« Je suis en train de chercher la banque. »", opts:["Estoy buscando el banco.","Estoy buscar el banco.","Soy buscando el banco."], correct:0, why:"estar + gérondif : estoy + buscando. Jamais d'infinitif après estar, et jamais ser."},
  {cat:"ecrit", q:"Gérondif de « hablar » :", opts:["hablando","hablendo","hablaindo"], correct:0, why:"Verbe en -AR : radical habl- + -ando = hablando (h muette)."},
  {cat:"ecrit", q:"Gérondif de « comer » :", opts:["comiendo","comando","comendo"], correct:0, why:"Verbe en -ER : radical com- + -iendo = comiendo."},
  {cat:"ecrit", q:"Gérondif de « vivir » :", opts:["viviendo","vivando","vivindo"], correct:0, why:"Verbe en -IR : radical viv- + -iendo = viviendo."},
  {cat:"ecrit", q:"Tú ___ comiendo en el parque.", opts:["eres","estás","tienes"], correct:1, why:"Le présent continu se forme avec ESTAR : tú estás (accent écrit) + gérondif."},
  {cat:"ecrit", q:"« Nous sommes en train de chercher. »", opts:["Estamos buscando.","Estamos buscamos.","Estamos buscado."], correct:0, why:"estamos (nosotros) + buscando. Le gérondif ne change jamais de forme."},
  {cat:"ecrit", q:"Vosotros ___ bajando del metro. (Espagne)", opts:["sois","estáis","están"], correct:1, why:"vosotros → estáis (accent écrit). « están » irait avec ellos / ustedes."},
  {cat:"ecrit", q:"Une femme perdue dit : « Estoy ___ . »", opts:["perdido","perdida","perdidas"], correct:1, why:"perdida : accord au féminin singulier avec la personne qui parle."},
  {cat:"ecrit", q:"Vous devez envoyer une lettre importante. Vous allez à…", opts:["la oficina de correos","la farmacia","el gimnasio"], correct:0, why:"La oficina de correos : le bureau de poste (en Amérique latine : el correo)."},
  {cat:"ecrit", q:"Quel mot ouvre un itinéraire ?", opts:["Primero","Por último","Luego"], correct:0, why:"Primero = d'abord ; luego / después = ensuite ; por último = pour finir."},
  {cat:"ecrit", q:"Tú : « Sigue recto. » Usted : « ___ recto. »", opts:["Siga","Sigues","Seguir"], correct:0, why:"L'impératif d'usted de seguir est siga (comme gire pour girar)."},
  {cat:"ecrit", q:"Tú : « Gira a la izquierda. » Usted : « ___ a la izquierda. »", opts:["Gire","Giras","Girad"], correct:0, why:"usted → gire : le -a de gira devient -e."},
  {cat:"ecrit", q:"« Pardon, pouvez-vous répéter ? » (à une dame âgée)", opts:["Perdón, ¿puede repetir?","Perdón, ¿puedes repetir?","Perdón, ¿puedo repetir?"], correct:0, why:"Dame âgée = usted : puede. « puedes » = tú ; « puedo » = je peux (moi)."},
  {cat:"ecrit", q:"« Je descends au prochain arrêt. »", opts:["Me bajo en la próxima parada.","Bajo me en la próxima parada.","Se bajo en la próxima parada."], correct:0, why:"bajarse est pronominal : yo → me bajo. Le pronom précède le verbe."},
  {cat:"oral", audio:"Estoy buscando el banco.", q:"Écoute : que fait la personne ?", opts:["Elle cherche la banque","Elle cherche la pharmacie","Elle est à la banque"], correct:0, why:"estoy buscando = je suis en train de chercher ; el banco = la banque."},
  {cat:"oral", audio:"Perdón, ¿puede repetir?", q:"Écoute : la question est…", opts:["informelle (tutoiement)","formelle (vouvoiement)"], correct:1, why:"« puede » = vouvoiement. Au tutoiement : ¿puedes repetir?"},
  {cat:"oral", audio:"Primero, siga recto. Luego, gire a la derecha.", q:"Écoute : où faut-il tourner ?", opts:["À gauche","À droite","Il ne faut pas tourner"], correct:1, why:"« gire a la derecha » : tournez à droite, après avoir continué tout droit."},
  {cat:"oral", audio:"Estamos esperando el autobús en la parada.", q:"Écoute : que font-ils ?", opts:["Ils attendent le bus","Ils montent dans le bus","Ils descendent du bus"], correct:0, why:"estamos esperando = nous sommes en train d'attendre."},
  {cat:"oral", audio:"La farmacia está enfrente del supermercado.", q:"Écoute : où est la pharmacie ?", opts:["À côté du supermarché","En face du supermarché","Loin du supermarché"], correct:1, why:"enfrente del = en face du (de + el = del)."},
  {cat:"comprehension", passage:"— ¡Hola! Estoy perdido. Estoy buscando la farmacia.\n— No se preocupe. Primero, siga recto por esta avenida. Luego, en el semáforo, gire a la izquierda. Después, la farmacia está al lado del banco.", q:"Que cherche la personne ?", opts:["La banque","La pharmacie","Le feu"], correct:1, why:"« Estoy buscando la farmacia » : elle cherche la pharmacie."},
  {cat:"comprehension", passage:"— ¡Hola! Estoy perdido. Estoy buscando la farmacia.\n— No se preocupe. Primero, siga recto por esta avenida. Luego, en el semáforo, gire a la izquierda. Después, la farmacia está al lado del banco.", q:"Où est la pharmacie ?", opts:["En face du feu","À côté de la banque","Au bout de l'avenue"], correct:1, why:"« al lado del banco » : à côté de la banque. Le feu sert seulement à tourner à gauche."},
  {cat:"comprehension", passage:"Marta: Hola, Pedro. Estoy en la parada y estoy esperando el autobús. ¿Está lejos el parque?\nPedro: No, está a cinco minutos a pie. Primero, cruza la calle. Luego, sigue recto hasta la plaza. Por último, gira a la derecha. El parque está enfrente del hospital.", q:"Que fait Marta en ce moment ?", opts:["Elle attend le bus","Elle traverse la rue","Elle est au parc"], correct:0, why:"« estoy esperando el autobús » : elle attend le bus à l'arrêt."},
  {cat:"comprehension", passage:"Marta: Hola, Pedro. Estoy en la parada y estoy esperando el autobús. ¿Está lejos el parque?\nPedro: No, está a cinco minutos a pie. Primero, cruza la calle. Luego, sigue recto hasta la plaza. Por último, gira a la derecha. El parque está enfrente del hospital.", q:"Que doit-elle faire en dernier ?", opts:["Traverser la rue","Continuer jusqu'à la place","Tourner à droite"], correct:2, why:"« Por último, gira a la derecha » : la dernière étape est de tourner à droite."},
  {cat:"comprehension", passage:"Turista: Perdón, ¿puede repetir? No entiendo.\nEmpleada: Claro, señor. Primero, cambie de tren en la estación Central. Después, baje en la tercera parada. La biblioteca está a dos minutos.", q:"Que doit faire le touriste d'abord ?", opts:["Changer de train à la gare Centrale","Descendre à la troisième station","Marcher deux minutes"], correct:0, why:"« Primero, cambie de tren en la estación Central » : c'est la première étape."}
 ],
 REVIEW: [
  {q:"« Más barato » signifie :", opts:["moins cher","plus cher"], correct:0, fb:"barato = bon marché ; más barato = moins cher. (rappel A1.7)"},
  {q:"« Ce sac » (masculin, près de moi) :", opts:["este bolso","esta bolso","estos bolso"], correct:0, fb:"bolso est masculin singulier : este bolso. (rappel A1.7)"},
  {q:"« Puis-je l'essayer ? » (une veste = la chaqueta)", opts:["¿Puedo probármela?","¿Puedo probármelo?"], correct:0, fb:"Le pronom suit le genre de la veste (féminin) : la → probármela. (rappel A1.7)"},
  {q:"« Me lo llevo » signifie :", opts:["Je le prends (je l'achète).","Je le porte."], correct:0, fb:"« Me lo llevo » conclut un achat : je le prends. (rappel A1.7)"},
  {q:"Esta chaqueta es ___ que esa. (meilleure)", opts:["mejor","más buena"], correct:0, fb:"Le comparatif de bueno est irrégulier : mejor. (rappel A1.7)"}
 ],
 PRON_VERBS: [
  {en:"Estoy buscando la farmacia.", fr:"Je suis en train de chercher la pharmacie. (bus-KAN-do ; far-MA-thia : c = th en Espagne)"},
  {en:"Estás comiendo en el parque.", fr:"Tu manges dans le parc. (co-MIEN-do : ie = une seule syllabe « yen »)"},
  {en:"Está viviendo en Madrid.", fr:"Il vit à Madrid en ce moment. (v = b : bi-BIEN-do)"},
  {en:"Estamos esperando el autobús.", fr:"Nous attendons le bus. (es-pe-RAN-do ; au-to-BUS : accent sur la fin)"},
  {en:"Estáis bajando del metro.", fr:"Vous descendez du métro. (j = kh : ba-KHAN-do)"},
  {en:"Están subiendo al tren.", fr:"Ils montent dans le train. (su-BIEN-do ; v/b doux)"},
  {en:"Gire a la izquierda.", fr:"Tournez à gauche. (g devant i = kh : KHI-re ; iz-KIER-da : z = th)"},
  {en:"Siga recto hasta la plaza.", fr:"Continuez tout droit jusqu'à la place. (r roulée : RREK-to ; h muette : AS-ta)"},
  {en:"Perdón, ¿puede repetir?", fr:"Pardon, pouvez-vous répéter ? (per-DON ; PWE-de ; re-pe-TIR : accent sur la fin)"},
  {en:"La oficina de correos está al lado del ayuntamiento.", fr:"Le bureau de poste est à côté de la mairie. (o-fi-THI-na ; ko-RRE-os ; a-yun-ta-MYEN-to)"}
 ],
 READING: [
  "Tomás está en una ciudad nueva y está perdido.",
  "Está buscando la biblioteca, pero no tiene mapa.",
  "Pregunta a una señora: «Perdone, ¿está lejos la biblioteca?»",
  "La señora está esperando el autobús en la parada.",
  "—Primero, siga recto por esta avenida. Luego, gire a la izquierda en el semáforo.",
  "—Después, cruce la plaza. Por último, la biblioteca está enfrente del parque.",
  "Tomás no entiende todo y pregunta: «Perdón, ¿puede repetir?»",
  "La señora habla más despacio y Tomás está escribiendo las indicaciones.",
  "Veinte minutos después, Tomás está en la biblioteca.",
  "Está muy contento porque ahora no está perdido."
 ],
 GLOSS: [
  {en:"las indicaciones", fr:"les indications, les consignes d'itinéraire"},
  {en:"despacio", fr:"lentement (adverbe invariable)"},
  {en:"por esta avenida", fr:"sur cette avenue : « por » = par, le long de"},
  {en:"enfrente del parque", fr:"en face du parc : de + el = del"},
  {en:"no entiende todo", fr:"il ne comprend pas tout (entender : e → ie)"},
  {en:"Perdone", fr:"excusez-moi (usted) ; au tutoiement : « perdona »"},
  {en:"está esperando", fr:"est en train d'attendre : estar + gérondif"},
  {en:"veinte minutos después", fr:"vingt minutes plus tard"}
 ],
 GRAMMAR1: {
  heading:"Le présent continu : ESTAR + gérondif (estoy buscando)",
  lede:"Tu connais déjà ESTAR (le lieu, les émotions, l'état du moment, vus en A1.0). Il a un deuxième rôle : accompagné d'un verbe terminé en -ando ou -iendo (le gérondif), il dit qu'une action est EN TRAIN de se dérouler, là, maintenant. C'est l'outil parfait pour t'expliquer quand tu es perdu : « Estoy buscando la farmacia. ».",
  conj:[
   ["yo →","estoy buscando","Estoy buscando la farmacia. Estoy perdido."],
   ["tú →","estás comiendo","¿Estás comiendo en la cafetería? ¿Estás esperando el autobús?"],
   ["él, ella, usted →","está viviendo","Mi tía está viviendo en Madrid. ¿Está usted buscando la estación?"],
   ["nosotros/as →","estamos buscando","Estamos buscando el banco. Estamos llegando a la plaza."],
   ["vosotros/as →","estáis bajando","¿Estáis bajando del metro? ¿Estáis hablando con el señor?"],
   ["ellos, ellas, ustedes →","están subiendo","Los turistas están subiendo al autobús. ¿Están ustedes esperando aquí?"]
  ],
  ruleHtml:"📖 <b>1. Formation.</b> <b>ESTAR au présent</b> (estoy, estás, está, estamos, estáis, están) + le <b>gérondif</b>, qui ne change JAMAIS de forme (pas d'accord, pas de féminin, pas de pluriel). Le gérondif se fabrique avec le radical de l'infinitif :<br>• verbes en <b>-AR</b> → radical + <b>-ando</b> : buscar → <b>buscando</b>, hablar → <b>hablando</b>, esperar → <b>esperando</b>, bajar → <b>bajando</b><br>• verbes en <b>-ER / -IR</b> → radical + <b>-iendo</b> : comer → <b>comiendo</b>, vivir → <b>viviendo</b>, subir → <b>subiendo</b>, beber → <b>bebiendo</b><br>Les verbes de cette leçon sont tous réguliers : applique la règle sans exception.<br><br>📖 <b>2. Quand l'employer.</b> Pour une action <b>en cours</b>, que l'on voit ou que l'on fait en ce moment : Estoy buscando la farmacia (là, maintenant). Mots-clés : <b>ahora, ahora mismo, en este momento</b>. Il traduit « être en train de… ». Nuance utile : l'espagnol utilise aussi le présent simple pour « en ce moment » (« Busco la farmacia » est correct) ; estar + gérondif <b>insiste</b> sur l'action qui se déroule sous les yeux.<br><br>👥 <b>Tutoiement ET vouvoiement</b> : tú → <b>¿Estás buscando la estación?</b> · usted → <b>¿Está buscando la estación?</b> (usted se conjugue comme él/ella, ustedes comme ellos/ellas). Pluriel amical : <b>vosotros estáis</b> (Espagne) ; <b>ustedes están</b> (Amérique latine et vouvoiement du pluriel).<br><br>⚠️ <b>Pièges de francophone.</b> (1) Jamais d'infinitif après estar : « estoy buscar » est faux, on dit <b>estoy buscando</b>. (2) « Je suis en train de » ne se traduit PAS par « estoy en tren de » : estar + gérondif suffit. (3) Pas de ser : « soy buscando » est faux. (4) Les accents écrits sur <b>estás, está, estáis, están</b> sont obligatoires. (5) Le complément se met après le gérondif, sans préposition en plus : buscar la farmacia (pas « buscar por »). (6) On n'emploie pas ce temps pour le futur : « demain je voyage » ne se dit pas avec estar.<br><br>⚠️ <b>« Estoy yendo a… » : à éviter.</b> Le verbe ir a bien un gérondif (yendo), mais « estoy yendo a la farmacia » sonne peu naturel : l'espagnol dit tout simplement <b>voy a la farmacia</b> (je vais à la pharmacie, je suis en route). Pour les verbes de déplacement, préfère donc le présent simple : voy, vas, va (vus en A1.4). Garde estar + gérondif pour les actions qui durent : buscar, esperar, caminar, comer, hablar, bajar, subir…<br><br>🔤 <b>Orthographe et prononciation.</b> -iendo se prononce « yen-do » en une seule syllabe : co-MIEN-do, vi-VIEN-do. L'accent tonique tombe toujours juste avant -do : bus-KAN-do, su-BIEN-do. Le z de cruzar reste z : cruzando.",
  dialogueLede:"Deux jeunes se parlent dans la rue (tutoiement) :",
  dialogue:[
   {who:"them", en:"¡Hola! ¿Qué estás buscando?", fr:"Salut ! Que cherches-tu ?"},
   {who:"you", en:"Estoy buscando la biblioteca. Estoy perdida.", fr:"Je cherche la bibliothèque. Je suis perdue."},
   {who:"them", en:"No te preocupes. Estoy esperando el autobús aquí, pero la biblioteca está cerca.", fr:"Ne t'inquiète pas. J'attends le bus ici, mais la bibliothèque est près."},
   {who:"you", en:"¿Está lejos?", fr:"C'est loin ?"},
   {who:"them", en:"No, está a cinco minutos a pie, al lado del parque.", fr:"Non, c'est à cinq minutes à pied, à côté du parc."},
   {who:"you", en:"Perfecto, ¡gracias!", fr:"Parfait, merci !"}
  ],
  whyLabel:"Pourquoi ESTAR (et pas SER) pour une action en cours ?",
  whyText:"C'est le même ESTAR que pour les émotions et la position (vu en A1.0). La logique est identique : une action en cours est <b>temporaire</b> par nature (« en ce moment »), alors que SER décrit ce qui est permanent. <b>Estoy buscando</b> = je suis dans l'état « en train de chercher » ; demain, ce ne sera plus vrai. D'où le test pratique : si tu peux ajouter « en ce moment / ahora mismo » (« Estoy buscando la farmacia ahora mismo »), tu es dans le bon cas. Et comme tu connais déjà estar (estoy, estás, está…), tu n'as presque rien de nouveau à mémoriser : juste la terminaison <b>-ando / -iendo</b>. Un seul verbe déjà maîtrisé te donne soudain mille nouvelles phrases."
 },
 GRAMMAR2: {
  heading:"Donner et comprendre un itinéraire : primero, luego, después, por último + impératif",
  dialogueLede:"Dans la rue, un touriste perdu et une passante (vouvoiement) :",
  dialogue:[
   {who:"them", en:"Buenos días, señor. ¿Está perdido?", fr:"Bonjour, monsieur. Vous êtes perdu ?"},
   {who:"you", en:"Sí, estoy buscando el hospital. ¿Está lejos?", fr:"Oui, je cherche l'hôpital. C'est loin ?"},
   {who:"them", en:"No, está a diez minutos. Primero, siga recto por esta avenida. Luego, gire a la derecha en el semáforo.", fr:"Non, c'est à dix minutes. D'abord, continuez tout droit sur cette avenue. Ensuite, tournez à droite au feu."},
   {who:"you", en:"Perdón, ¿puede repetir? No entiendo.", fr:"Pardon, pouvez-vous répéter ? Je ne comprends pas."},
   {who:"them", en:"Claro. Primero, siga recto. Después, gire a la derecha. Por último, el hospital está enfrente del parque.", fr:"Bien sûr. D'abord, continuez tout droit. Ensuite, tournez à droite. Pour finir, l'hôpital est en face du parc."},
   {who:"you", en:"Muchas gracias, señora.", fr:"Merci beaucoup, madame."}
  ],
  ruleHtml:"💭 <b>1. Enchaîner les étapes.</b> Pour un itinéraire, on aligne les consignes dans l'ordre : <b>Primero</b> (d'abord) → <b>Luego</b> (ensuite) → <b>Después</b> (puis, après) → <b>Por último</b> (pour finir). Chaque connecteur est suivi d'une virgule et d'une consigne. Exemple complet : <b>Primero, siga recto. Luego, gire a la izquierda. Después, cruce la calle. Por último, el banco está al lado de la farmacia.</b> La dernière étape décrit souvent l'arrivée avec « está… » (al lado de, enfrente de, entre…).<br><br>💭 <b>2. Les consignes à l'impératif, en tú ET en usted.</b> Tu connais déjà sigue / siga et gira / gire (A1.4). Même schéma pour d'autres verbes :<br>• seguir : <b>sigue</b> (tú) / <b>siga</b> (usted)<br>• girar : <b>gira</b> / <b>gire</b> (Amérique latine : doblar → dobla / doble)<br>• cruzar : <b>cruza</b> / <b>cruce</b> (z → c devant e)<br>• tomar : <b>toma</b> / <b>tome</b> (prendre ; en Espagne on entend aussi « coge », mais « coger » est grossier en Amérique latine : « tomar » est neutre partout)<br>• bajar : <b>baja</b> / <b>baje</b> (descendre)<br>Astuce : tú → terminaison en -a (verbes en -ar) ; usted → terminaison en -e. Au touriste âgé ou à un inconnu : usted (siga, gire). Entre jeunes : tú (sigue, gira).<br><br>💭 <b>3. Les verbes pronominaux bajarse et subirse.</b> Pour les transports, l'espagnol utilise des verbes avec un pronom : <b>me bajo, te bajas, se baja, nos bajamos, os bajáis, se bajan</b> et <b>me subo, te subes, se sube, nos subimos, os subís, se suben</b>. Le pronom (me, te, se, nos, os, se) se place AVANT le verbe conjugué. Constructions : <b>bajarse del autobús</b> (de + el = del), <b>bajarse en la próxima parada</b>, <b>subirse al metro</b> (a + el = al). Piège : en français « descendre / monter » n'est pas pronominal ; en espagnol, on dit « me bajo », pas « bajo ».<br><br>💭 <b>4. Questions de clarification.</b> Quand tu ne comprends pas : <b>Perdón, ¿puede repetir?</b> (usted) / <b>¿Puedes repetir?</b> (tú) · <b>No entiendo</b> · <b>Más despacio, por favor</b> · <b>¿Puede ayudarme?</b> (usted) / <b>¿Puedes ayudarme?</b> (tú) · <b>¿Está lejos?</b> · <b>¿Cómo?</b> (pardon ? comment ?). Pour rassurer : <b>No te preocupes</b> (tú) / <b>No se preocupe</b> (usted). Pour attirer l'attention : <b>Perdona / Perdone</b> ; en Amérique latine, on entend beaucoup <b>Disculpa / Disculpe</b>.<br><br>💭 <b>5. Está en… ou Hay… ?</b> Pour situer : <b>La farmacia está al lado del banco</b> (je connais cette pharmacie) ; pour demander si elle existe : <b>¿Hay una farmacia por aquí?</b> — réponse : <b>Sí, hay una en la esquina.</b> « hay » est invariable : hay una tienda, hay dos bancos.<br><br>💭 <b>6. Mélanger le présent continu et les consignes.</b> Le premier dit où tu es ou ce que tu fais, les secondes guident l'autre : « Estoy buscando la farmacia. » — « Primero, siga recto… ». Variantes régionales utiles : <b>cuadra</b> (Amérique latine) = <b>manzana</b> / « calle » (Espagne) ; <b>vereda</b> ou <b>banqueta</b> = <b>acera</b> ; <b>doblar</b> = <b>girar</b>.",
  whyLabel:"Pourquoi des consignes en plusieurs étapes ?",
  whyText:"Un itinéraire se dit mieux en petites étapes qu'en une seule longue phrase : les connecteurs <b>primero, luego, después, por último</b> servent de repères, comme les numéros d'une liste. Avantage pour toi : tu as seulement trois ou quatre petits verbes à l'impératif (sigue / siga, gira / gire, cruza / cruce) et des connecteurs qui ne changent jamais. Le piège est le choix de la forme : <b>tú</b> pour un ami ou un jeune, <b>usted</b> pour un inconnu plus âgé, un employé, un client. En cas de doute, usted est toujours poli. Et si tu ne comprends pas, ne fais pas semblant : « Perdón, ¿puede repetir? » est une phrase normale, que les Espagnols et les Latino-américains entendent tous les jours."
 },
 DRILLS: [
  {type:"fill", text:"Yo estoy ___ la farmacia. (buscar)", answers:["buscando"], why:"-AR : radical busc- + -ando = buscando."},
  {type:"fill", text:"Tú estás ___ en el parque. (comer)", answers:["comiendo"], why:"-ER : radical com- + -iendo = comiendo."},
  {type:"fill", text:"Ella está ___ aquí. (vivir)", answers:["viviendo"], why:"-IR : radical viv- + -iendo = viviendo."},
  {type:"fill", text:"Nosotros estamos ___ el autobús. (esperar)", answers:["esperando"], why:"-AR : esperar → esperando."},
  {type:"fill", text:"Vosotros estáis ___ del metro. (bajar)", answers:["bajando"], why:"-AR : bajar → bajando (j = kh)."},
  {type:"fill", text:"Ellos están ___ al tren. (subir)", answers:["subiendo"], why:"-IR : subir → subiendo."},
  {type:"fill", text:"Usted está ___ por la avenida. (caminar)", answers:["caminando"], why:"usted → está ; caminar → caminando."},
  {type:"fill", text:"Estoy ___ la calle. (cruzar)", answers:["cruzando"], why:"cruzar → cruzando : le z reste z."},
  {type:"fill", text:"¿Estás ___ español? (hablar)", answers:["hablando"], why:"hablar → hablando. On dit « hablar español » : pas de préposition."},
  {type:"fill", text:"Ana y Luis están ___ un café. (beber)", answers:["bebiendo"], why:"-ER : beber → bebiendo."},
  {type:"fill", text:"___ , siga recto por la avenida. (d'abord)", answers:["Primero","primero"], why:"Primero ouvre l'itinéraire."},
  {type:"fill", text:"Siga recto y ___ gire a la izquierda. (ensuite)", answers:["luego","Luego","después","Después"], why:"luego et después veulent tous les deux dire « ensuite » : on les enchaîne."},
  {type:"fill", text:"___ último, la farmacia está a la derecha.", answers:["Por","por"], why:"« Por último » = pour finir, en dernier lieu."},
  {type:"fill", text:"Tú : Gira a la izquierda. Usted : ___ a la izquierda.", answers:["Gire","gire"], why:"Impératif d'usted : gire."},
  {type:"fill", text:"Tú : Sigue recto. Usted : ___ recto.", answers:["Siga","siga"], why:"Impératif d'usted : siga."},
  {type:"fill", text:"Tú : Cruza la calle. Usted : ___ la calle.", answers:["Cruce","cruce"], why:"Impératif d'usted : cruce (z → c devant e)."},
  {type:"fill", text:"Yo ___ bajo en la próxima parada. (bajarse)", answers:["me","Me"], why:"Pronominal : yo → me bajo."},
  {type:"fill", text:"Ellos ___ suben al autobús. (subirse)", answers:["se","Se"], why:"Pronominal : ellos → se suben."},
  {type:"fill", text:"Nosotros ___ bajamos en la plaza. (bajarse)", answers:["nos","Nos"], why:"Pronominal : nosotros → nos bajamos."},
  {type:"choice", q:"La panadería está en la esquina, a cinco minutos. Est-ce près ou loin ?", opts:["Cerca","Lejos"], correct:0, why:"Cinq minutes, au coin : c'est près (cerca)."},
  {type:"choice", q:"Une femme perdue dit :", opts:["Estoy perdido.","Estoy perdida."], correct:1, why:"perdida : accord avec la personne qui parle."},
  {type:"choice", q:"Pour demander à une dame âgée de répéter :", opts:["Perdón, ¿puedes repetir?","Perdón, ¿puede repetir?"], correct:1, why:"Dame âgée = usted : puede."},
  {type:"choice", q:"Vous devez acheter des médicaments. Vous allez à…", opts:["la farmacia","la biblioteca"], correct:0, why:"La pharmacie : médicaments. La bibliothèque : livres."},
  {type:"choice", q:"Quelle phrase est correcte ?", opts:["Estoy buscando la biblioteca.","Estoy buscar la biblioteca."], correct:0, why:"Après estar, toujours un gérondif (-ando / -iendo), jamais l'infinitif."}
 ],
 ANNOTATED: {
  title:"Estoy perdido : un itinéraire pas à pas",
  intro:"Un petit texte pour t'entraîner à lire. Touche chaque mot pour voir sa nature et sa traduction — et repère le présent continu (estoy buscando) et les consignes (siga, gire).",
  sentences:[
   {fr:"Je suis en train de chercher la pharmacie.", tokens:[
    {w:"Estoy", tag:"verbe", info:"estar · présent · yo", fr:"je suis", tip:"Première partie du présent continu : estar conjugué."},
    {w:"buscando", tag:"verbe", info:"gérondif de buscar", fr:"en train de chercher", tip:"Verbe en -AR : radical busc- + -ando. Il ne change jamais."},
    {w:"la", tag:"déterminant", info:"article défini · fém. sing.", fr:"la"},
    {w:"farmacia", tag:"nom", info:"fém. sing.", fr:"pharmacie", tip:"c = th (Espagne) ou s (Amérique latine) : far-MA-thia."}
   ]},
   {fr:"D'abord, continuez tout droit sur cette avenue.", tokens:[
    {w:"Primero", tag:"adverbe", fr:"d'abord", tip:"Ouvre un itinéraire."},
    {w:"siga", tag:"verbe", info:"seguir · impératif · usted", fr:"continuez", tip:"Au tutoiement : sigue."},
    {w:"recto", tag:"adverbe", fr:"tout droit"},
    {w:"por", tag:"préposition", fr:"par, sur", tip:"« por esta avenida » = le long de cette avenue."},
    {w:"esta", tag:"déterminant", info:"démonstratif · fém. sing.", fr:"cette", tip:"Démonstratif vu en A1.7 : este / esta."},
    {w:"avenida", tag:"nom", info:"fém. sing.", fr:"avenue"}
   ]},
   {fr:"Ensuite, tournez à gauche au feu.", tokens:[
    {w:"Luego", tag:"adverbe", fr:"ensuite"},
    {w:"gire", tag:"verbe", info:"girar · impératif · usted", fr:"tournez", tip:"Au tutoiement : gira. Amérique latine : doble (doblar)."},
    {w:"a", tag:"préposition", fr:"à"},
    {w:"la", tag:"déterminant", info:"article défini · fém. sing.", fr:"la"},
    {w:"izquierda", tag:"nom", info:"fém. sing.", fr:"gauche", tip:"z = th (Espagne) ou s (Amérique latine)."},
    {w:"en", tag:"préposition", fr:"à, au"},
    {w:"el", tag:"déterminant", info:"article défini · masc. sing.", fr:"le"},
    {w:"semáforo", tag:"nom", info:"masc. sing.", fr:"feu", tip:"Accent écrit sur le á : se-MÁ-fo-ro."}
   ]},
   {fr:"La pharmacie est à côté de la banque.", tokens:[
    {w:"La", tag:"déterminant", info:"article défini · fém. sing.", fr:"la"},
    {w:"farmacia", tag:"nom", info:"fém. sing.", fr:"pharmacie"},
    {w:"está", tag:"verbe", info:"estar · présent · ella", fr:"est", tip:"ESTAR situe un lieu connu."},
    {w:"al lado", tag:"locution", fr:"à côté", tip:"« al lado de » : à côté de. Le « de » fusionne avec l'article : del."},
    {w:"del", tag:"contraction", info:"de + el", fr:"du, de la banque", tip:"de + el = del (obligatoire)."},
    {w:"banco", tag:"nom", info:"masc. sing.", fr:"banque"}
   ]}
  ]
 },
 CULTURE_NOTE: {icon:"🏙️", title:"Culture, 10 expressions et fiche récap (A1.8)",
  html:"<b>🏙️ Culture — demander son chemin</b> En Espagne comme en Amérique latine, on peut aborder un inconnu avec « Perdona / Perdone » (en Amérique latine on entend souvent « Disculpa / Disculpe »). Avec une personne âgée, un commerçant ou un policier : <b>usted</b> (siga, gire, ¿puede repetir?). Entre jeunes : <b>tú</b> (sigue, gira, ¿puedes repetir?). Les distances se disent en minutes : « a cinco minutos a pie ». Dans beaucoup de villes d'Amérique latine, on compte en <b>cuadras</b> (pâtés de maisons) : « a dos cuadras ». En Espagne : « la segunda calle ». Transports : « bus » se dit autobús (Espagne), camión (Mexique), colectivo (Argentine), guagua (Caraïbes). Pour « tourner », l'Espagne dit girar, l'Amérique latine doblar ; pour « prendre », tomar est neutre partout, alors que « coger » est grossier en Amérique latine.<br><br><b>🧰 Les 10 expressions familières de la ville et du déplacement</b><br>1. <b>Perder el hilo</b> = perdre le fil (d'une conversation, d'un récit). « Hablas muy rápido y pierdo el hilo. »<br>2. <b>Estar en la higuera</b> = être distrait, ne pas faire attention (familier). Ce n'est pas « déconnecté de la réalité » : c'est simplement ne pas écouter. « Te hablo y estás en la higuera. »<br>3. <b>Ir a paso de tortuga</b> = avancer à pas de tortue, très lentement. « El tráfico va a paso de tortuga. »<br>4. <b>Estar a tiro de piedra</b> = être à un jet de pierre, tout près. « El banco está a tiro de piedra. »<br>5. <b>Tomar las de Villadiego</b> = filer, décamper vite (familier). Pas nécessairement discret : on s'enfuit. « Al ver al jefe, Pedro toma las de Villadiego. »<br>6. <b>Estar en Babia</b> = être dans la lune, distrait (familier). Babia est une région de León (Espagne). « Marta está en Babia: no escucha nada. »<br>7. <b>Ir contra corriente</b> = aller à contre-courant (on dit aussi « ir a contracorriente »). « Marta siempre va contra corriente. »<br>8. <b>Pasarse de la raya</b> = dépasser les bornes, aller trop loin. « Tu jefe se pasa de la raya. »<br>9. <b>Estar liado</b> = être très occupé (Espagne, courant). Attention : « estar hecho un lío » = être tout embrouillé, confus. « Hoy estoy muy liado con el trabajo. » · « Estoy hecho un lío con este mapa. » (Estar liado ne veut donc pas dire « embrouillé » à lui seul.)<br>10. <b>Estar en el quinto pino</b> = être au diable vauvert, très loin (familier). « Mi casa está en el quinto pino. »<br><br><b>✍️ Expression écrite — de la station de bus à la bibliothèque (4 lignes)</b> Modèle (tutoiement) : « Primero, cruza la calle. Luego, sigue recto hasta el semáforo. Después, gira a la derecha. Por último, la biblioteca está al lado del parque. » Version formelle : « Primero, cruce la calle. Luego, siga recto hasta el semáforo. Después, gire a la derecha. Por último, la biblioteca está al lado del parque. » Ajoute le présent continu si besoin : « Estoy esperando en la parada. » Vérifie : primero / luego / después / por último · sigue / siga · gira / gire · cruza / cruce.<br><br><b>🗣️ Expression orale — guider un touriste</b> « Perdón, ¿está lejos el museo? » → « No, está a cinco minutos a pie. Primero, siga recto. Luego, gire a la izquierda. Por último, el museo está enfrente del parque. » Pour le métro : « Cambie de línea en la estación Central y bájese en la tercera parada. » Si le touriste ne comprend pas : « ¿Puede repetir? » est sa phrase, et « Más despacio » la tienne.<br><br><b>📄 Fiche récap</b> Présent continu : estoy / estás / está / estamos / estáis / están + -ando (verbes en -AR) ou -iendo (-ER / -IR) : buscando, hablando, comiendo, viviendo, bajando, subiendo. Jamais d'infinitif, jamais ser. « Estoy yendo a… » est peu naturel : on dit « voy a… ». Itinéraire : primero · luego · después · por último + sigue / siga · gira / gire · cruza / cruce · toma / tome. Lieux : farmacia, banco, oficina de correos, supermercado, gimnasio, tienda, parque, biblioteca, hospital. Situer : está en · hay · al lado de · enfrente de · cerca · lejos. Transports : bajarse (me bajo) · subirse (me subo) · cambiar de tren / autobús · perder el autobús. Survie : Perdón, ¿puede repetir? (usted) · ¿Puedes repetir? (tú) · No entiendo · Más despacio · ¿Está lejos? · Estoy perdido / perdida."},
 NEXT_PREVIEW:"A1.9 (Viajar) : réserver un billet (billete, ida y vuelta), te repérer à l'aéroport et à l'hôtel (maleta, pasaporte, habitación, llave), parler de tes projets avec ir a + infinitif (le futur proche) et réutiliser « quería » pour réserver poliment.",
 META:{vocabTitle:"Moverse por la ciudad : lieux, itinéraires et présent continu (A1.8)", lectureTitle:"Tomás, perdu en ville", bilanTitle:"Bravo, tu sais te repérer et guider quelqu'un en espagnol !", pronLabel:"Les gérondifs : -ando / -iendo, la diphtongue ie et la j de bajando", todayLede:"nommer les lieux de la ville, dire ce que tu es en train de faire avec ESTAR + gérondif (estoy buscando, estás comiendo…), donner et comprendre un itinéraire (primero, luego, después, por último) et te faire répéter poliment — en tutoiement ET en vouvoiement"}
};
LESSONS_ES[208].VOCAB.forEach(function(v){ var d = MAP[v.en]; if(!d) throw new Error("Pas d'illustration pour : " + v.en); v.emo = d[0]; v.ex = [d[1], d[2]]; });
})();


// A1.9 — Viajar : billets, aéroport, hôtel, futur proche (IR A + infinitif), « quería » de politesse (leçon 209)
(function(){
// ligne = [terme, API, français, note, emoji, exemple ES, exemple FR, nature (ignorée ici), registre (ignoré ici)]
function blk(name, rows){
  var out = __esB(name, rows);
  out.forEach(function(v, i){ v.emo = rows[i][4]; v.ex = [rows[i][5], rows[i][6]]; });
  return out;
}
var V = [].concat(
 blk("Réserver et acheter son billet", [
  ["reservar","/reseɾˈβaɾ/","réserver","Verbe en -AR régulier (reservo, reservas, reserva…). Pas de préposition : reservar una habitación, reservar un billete. s entre deux voyelles = s, jamais z.","📝","Voy a reservar un hotel esta noche.","Je vais réserver un hôtel ce soir.","verbe (infinitif)"],
  ["la reserva","/la reˈseɾβa/","la réservation","Féminin. À l'hôtel : « Tengo una reserva para dos noches. » Aussi : la réserve (naturelle). Le v se prononce b.","📋","Tengo una reserva para dos noches.","J'ai une réservation pour deux nuits.","nom féminin"],
  ["el billete · el boleto","/el biˈʎete · el boˈleto/","le billet (Espagne · Amérique latine)","« billete » en Espagne ; « boleto » au Mexique et dans plusieurs pays d'Amérique latine (« pasaje » ailleurs). ll = y : bi-YE-te. « billete » = aussi le billet de banque.","🎫","Voy a comprar un billete de tren.","Je vais acheter un billet de train.","nom masculin"],
  ["solo ida","/ˈsolo ˈiða/","aller simple","« un billete de solo ida » (ou « de ida »). ida = l'aller (de ir). Le d entre voyelles est très doux : I-da.","➡️","Quiero un billete de solo ida.","Je veux un billet aller simple.","expression"],
  ["ida y vuelta","/ˈiða i ˈbwelta/","aller-retour","vuelta = le retour (ue = diphtongue : BWEL-ta). « Un billete de ida y vuelta » : un billet aller-retour. Le « y » se dit « i ».","🔄","Voy a reservar un billete de ida y vuelta.","Je vais réserver un billet aller-retour.","expression"],
  ["el asiento","/el aˈsjento/","le siège, la place","La place assise dans l'avion ou le train. Piège : rien à voir avec « assiette » (= el plato).","💺","Mi asiento está al lado de la ventana.","Ma place est à côté de la fenêtre.","nom masculin"],
  ["la salida · la llegada","/la saˈliða · la ʝeˈɣaða/","le départ · l'arrivée","salida vient de « salir » (partir, sortir), llegada de « llegar » (arriver). Aussi : la salida = la sortie. ll = y.","🛫","La llegada es en la terminal dos.","L'arrivée est au terminal deux.","nom féminin"],
  ["el vuelo","/el ˈbwelo/","le vol","ue = diphtongue : BWE-lo (v = b). Ne confonds pas avec « la vuelta » (le retour).","✈️","El vuelo es directo.","Le vol est direct.","nom masculin"],
  ["viajar","/bjaˈxaɾ/","voyager","-AR régulier. v = b, j = kh : bia-KHAR. Le voyage : « el viaje ». Pour souhaiter bon voyage : « ¡Buen viaje! ».","🧳","Me gusta viajar con mis amigos.","J'aime voyager avec mes amis.","verbe (infinitif)"],
  ["el viaje","/el ˈbjaxe/","le voyage","Masculin : el viaje (comme el equipaje, el pasaje). Pluriel : los viajes.","🗺️","El viaje es muy cómodo.","Le voyage est très confortable.","nom masculin"],
  ["el destino","/el desˈtino/","la destination","Mot transparent, mais en français on dit « destination » : un faux ami utile ! (aussi : le destin).","📍","¿Cuál es el destino del vuelo?","Quelle est la destination du vol ?","nom masculin"],
  ["el pasajero · la pasajera","/el pasaˈxeɾo · la pasaˈxeɾa/","le passager · la passagère","j = kh : pa-sa-KHE-ro. -o → -a pour le féminin.","🧍","La pasajera tiene un billete de ida y vuelta.","La passagère a un billet aller-retour.","nom masculin / féminin"],
  ["pagar","/paˈɣaɾ/","payer","-AR régulier. « Pagar con tarjeta » = par carte, « pagar en efectivo » = en espèces. Se construit sans préposition : pagar el billete.","💳","Voy a pagar con tarjeta.","Je vais payer par carte.","verbe (infinitif)"],
  ["la tarjeta de crédito","/la taɾˈxeta de ˈkɾeðito/","la carte de crédit","« tarjeta » = carte (de crédit, d'embarque…). Pour une carte à jouer ou au restaurant : « carta ». j = kh.","💳","¿Aceptan tarjeta de crédito?","Acceptez-vous les cartes de crédit ?","nom féminin"],
  ["el precio","/el ˈpɾeθjo/","le prix","c = th en Espagne (s en Amérique latine). Pour demander : « ¿Cuál es el precio? ».","🏷️","El precio del billete es bajo.","Le prix du billet est bas.","nom masculin"]
 ]),
 blk("À l'aéroport et à la gare", [
  ["el aeropuerto","/el aeɾoˈpweɾto/","l'aéroport","a-e-ro-PUER-to : 4 syllabes, les deux premiers a et e se prononcent séparément. Pour y aller : voy AL aeropuerto (a + el = al).","🛬","Vamos al aeropuerto en taxi.","Nous allons à l'aéroport en taxi.","nom masculin"],
  ["la puerta de embarque","/la ˈpweɾta de emˈbaɾke/","la porte d'embarquement","On dit souvent juste « la puerta » + numéro : la puerta doce. Embarque : qu = k.","🚪","¿Dónde está la puerta de embarque?","Où est la porte d'embarquement ?","nom féminin"],
  ["el equipaje","/el ekiˈpaxe/","les bagages (collectif)","Singulier en espagnol ! « el equipaje » = l'ensemble des bagages. qu = k, j = kh : e-ki-PA-khe.","🧳","Mi equipaje es pequeño.","Mes bagages sont petits.","nom masculin"],
  ["la maleta","/la maˈleta/","la valise","Une valise = una maleta. Pluriel : las maletas. Faire sa valise : « hacer la maleta » ou « hacer las maletas ».","🧳","La maleta es azul.","La valise est bleue.","nom féminin"],
  ["el equipaje de mano","/el ekiˈpaxe de ˈmano/","le bagage à main","mano est féminin (la mano) mais « de mano » ne change pas.","👜","Mi equipaje de mano es una mochila.","Mon bagage à main est un sac à dos.","nom masculin"],
  ["el pasaporte","/el pasaˈpoɾte/","le passeport","Le document indispensable pour passer une frontière. pa-sa-POR-te.","🛂","Aquí tiene mi pasaporte, señora.","Voici mon passeport, madame.","nom masculin"],
  ["la tarjeta de embarque","/la taɾˈxeta de emˈbaɾke/","la carte d'embarquement","Au Mexique on dit aussi « el pase de abordar ». Elle indique la porte et la place (el asiento). Souvent sur le téléphone : « el móvil » (Espagne), « el celular » (Amérique latine).","🎟️","Mi tarjeta de embarque está en el móvil.","Ma carte d'embarquement est sur mon portable.","nom féminin"],
  ["facturar","/fakˈtuɾaɾ/","enregistrer (les bagages) ; facturer","« facturar el equipaje » = l'enregistrer au comptoir. Aussi : facturer. En Amérique latine on dit souvent « despachar el equipaje » ou « hacer el check-in ».","🛄","Vamos a facturar las maletas.","Nous allons enregistrer les valises.","verbe (infinitif)"],
  ["el mostrador","/el mosˈtɾaðoɾ/","le comptoir","Le comptoir d'enregistrement : « el mostrador de facturación ». Aussi le comptoir d'un bar.","🛎️","El mostrador está a la derecha.","Le comptoir est à droite.","nom masculin"],
  ["el control de seguridad","/el konˈtɾol de seɣuɾiˈðað/","le contrôle de sécurité","« seguridad » : mot en -dad, donc féminin. Accent sur la dernière syllabe : se-gu-ri-DAD.","🔍","Vamos a pasar el control de seguridad.","Nous allons passer le contrôle de sécurité.","nom masculin"],
  ["la frontera","/la fɾonˈteɾa/","la frontière","Pour passer une frontière, on montre le pasaporte (et parfois un visado).","🛃","Vamos a pasar la frontera en tren.","Nous allons passer la frontière en train.","nom féminin"],
  ["el visado","/el biˈsaðo/","le visa","« el visado » en Espagne, souvent « la visa » en Amérique latine. v = b, un seul s.","📄","Para este país, voy a necesitar un visado.","Pour ce pays, je vais avoir besoin d'un visa.","nom masculin"],
  ["la aduana","/la aˈðwana/","la douane","d très doux, ua = diphtongue : a-DUA-na. On dit « pasar por la aduana ».","🛃","La aduana está al lado de la salida.","La douane est à côté de la sortie.","nom féminin"],
  ["la terminal","/la teɾmiˈnal/","le terminal","Féminin en espagnol : la terminal dos. Accent sur la dernière syllabe : ter-mi-NAL.","🏢","Mi vuelo sale de la terminal dos.","Mon vol part du terminal deux.","nom féminin"],
  ["la estación","/la estaˈθjon/","la gare (la station)","« estación de tren », « de autobuses » (gare routière), « de metro ». Pluriel : estaciones (l'accent disparaît).","🚉","La estación está cerca del hotel.","La gare est près de l'hôtel.","nom féminin"],
  ["el retraso","/el reˈtɾaso/","le retard","« El vuelo tiene retraso » (avec tener). En Amérique latine, on entend aussi « la demora ».","⏳","El vuelo tiene retraso.","Le vol a du retard.","nom masculin"],
  ["tomar el avión · el tren","/toˈmaɾ el aˈβjon · el tɾen/","prendre l'avion · le train","« Tomar » est neutre et passe partout. « Coger » est très courant en Espagne mais grossier dans une grande partie de l'Amérique latine : retiens « tomar ».","🚆","Vamos a tomar el tren esta tarde.","Nous allons prendre le train cet après-midi.","expression"]
 ]),
 blk("À l'hôtel", [
  ["el hotel","/el oˈtel/","l'hôtel","h muette : o-TEL, accent sur la dernière syllabe (mot en -l). Pluriel : los hoteles.","🏨","El hotel es pequeño, pero es muy cómodo.","L'hôtel est petit, mais il est très confortable.","nom masculin"],
  ["la habitación","/la aβitaˈθjon/","la chambre","h muette. ción : « thion » (Espagne) ou « sion » (Amérique latine). Au Mexique on dit aussi « el cuarto ». Pluriel : habitaciones.","🛏️","La habitación es muy grande.","La chambre est très grande.","nom féminin"],
  ["una habitación individual","/ˈuna aβitaˈθjon indiβiˈðwal/","une chambre simple","« individual » = pour une personne (un lit). Invariable en genre ; pluriel : individuales.","🧍","Quería una habitación individual, por favor.","Je souhaiterais une chambre simple, s'il vous plaît.","groupe nominal"],
  ["una habitación doble","/ˈuna aβitaˈθjon ˈdoβle/","une chambre double","« doble » = pour deux personnes : un grand lit (« cama de matrimonio ») ou deux lits. Invariable en genre.","👫","Voy a reservar una habitación doble.","Je vais réserver une chambre double.","groupe nominal"],
  ["la entrada (check-in)","/la enˈtɾaða/","l'arrivée à l'hôtel (check-in)","« la entrada » = l'entrée, donc aussi le moment où on arrive à l'hôtel et reçoit sa chambre. Beaucoup de gens disent « el check-in ».","🔑","La entrada es por la tarde.","L'arrivée à l'hôtel est l'après-midi.","nom féminin"],
  ["la salida (check-out)","/la saˈliða/","le départ de l'hôtel (check-out)","Le jour du départ, on rend la chambre avant une certaine heure (souvent vers midi). On dit aussi « el check-out ».","🧳","La salida es antes del mediodía.","Le départ de l'hôtel est avant midi.","nom féminin"],
  ["la llave","/la ˈʝaβe/","la clé","Déjà vue en A1.0. À l'hôtel, c'est souvent une carte : « la tarjeta llave ». ll = y.","🗝️","¿Dónde está la llave de la habitación?","Où est la clé de la chambre ?","nom féminin"],
  ["la recepción","/la rreθepˈθjon/","la réception","r initiale roulée ; c = th ; accent sur la dernière syllabe : rre-thep-THION. Pluriel : recepciones.","🛎️","La recepción está a la izquierda.","La réception est à gauche.","nom féminin"],
  ["el recepcionista · la recepcionista","/el rreθepθjoˈnista/","le réceptionniste · la réceptionniste","Finit en -a mais s'emploie pour un homme comme pour une femme : seul l'article change.","🧑‍💼","La recepcionista es muy simpática.","La réceptionniste est très sympathique.","nom masculin / féminin"],
  ["el desayuno incluido","/el desaˈʝuno inkluˈiðo/","le petit-déjeuner inclus","« incluido » s'accorde comme un adjectif : el desayuno incluido, las toallas incluidas. des-a-YU-no.","🥐","La habitación tiene desayuno incluido.","La chambre a le petit-déjeuner inclus.","groupe nominal"],
  ["el wifi","/el ˈwifi/","le wifi","Masculin, se prononce « ouifi ». « La contraseña del wifi » = le mot de passe.","📶","El wifi es gratis.","Le wifi est gratuit.","nom masculin"],
  ["la contraseña","/la kontɾaˈseɲa/","le mot de passe","ñ = gn. Féminin. Pour le wifi : « la contraseña del wifi ».","🔐","La contraseña está en la recepción.","Le mot de passe est à la réception.","nom féminin"],
  ["la cama","/la ˈkama/","le lit","« cama doble » ou « de matrimonio » = grand lit ; « dos camas » = lits jumeaux.","🛌","La habitación tiene dos camas.","La chambre a deux lits.","nom féminin"],
  ["el baño","/el ˈbaɲo/","la salle de bains, les toilettes","ñ = gn. Désigne aussi les toilettes : « ¿Dónde está el baño? ». Une douche : « la ducha » (ch = tch).","🚿","El baño es muy moderno.","La salle de bains est très moderne.","nom masculin"],
  ["el ascensor","/el asθenˈsoɾ/","l'ascenseur","Accent sur la dernière syllabe : as-then-SOR. Au Mexique on dit aussi « el elevador ».","🛗","El ascensor está a la derecha.","L'ascenseur est à droite.","nom masculin"],
  ["la noche","/la ˈnotʃe/","la nuit","ch = tch. « Una habitación para dos noches ». Aussi dans « Buenas noches » (bonsoir / bonne nuit).","🌙","Quiero una habitación para tres noches.","Je veux une chambre pour trois nuits.","nom féminin"]
 ]),
 blk("Le futur proche : IR A + infinitif", [
  ["ir : voy, vas, va, vamos, vais, van","/boj bas ba ˈbamos bajs ban/","aller (présent)","Rappel de A1.4. C'est le seul verbe à connaître pour le futur proche. vais = vosotros (Espagne) ; ustedes = van.","🔁","Voy a viajar. ¿Vas a viajar?","Je vais voyager. Vas-tu voyager ?","verbe conjugué"],
  ["ir a + infinitif","/iɾ a/","aller + infinitif (futur proche)","Voy A + verbe. Le « a » est OBLIGATOIRE : jamais « voy reservar ». Sert pour un projet, une intention, un événement proche.","🔜","Voy a reservar una habitación.","Je vais réserver une chambre.","expression"],
  ["voy a reservar","/boj a reseɾˈβaɾ/","je vais réserver","yo → voy. Le pronom « yo » est inutile. Négation : « no voy a reservar ».","🙋","Voy a reservar el hotel esta noche.","Je vais réserver l'hôtel ce soir.","verbe conjugué"],
  ["vas a viajar","/bas a bjaˈxaɾ/","tu vas voyager","tú → vas. Avec usted : « va a viajar ».","🧑","¿Vas a viajar este verano?","Vas-tu voyager cet été ?","verbe conjugué"],
  ["va a salir","/ba a saˈliɾ/","il / elle / vous allez partir","él, ella, usted → va. Piège : « va a » se prononce presque « ba-a » : écoute bien les deux a.","🚶","El vuelo va a salir pronto.","Le vol va partir bientôt.","verbe conjugué"],
  ["vamos a facturar","/ˈbamos a fakˈtuɾaɾ/","nous allons enregistrer (les bagages)","nosotros → vamos. « Vamos a + verbe » sert aussi à proposer : « ¡Vamos a facturar! » = allons enregistrer !","👥","Vamos a facturar las maletas.","Nous allons enregistrer les valises.","verbe conjugué"],
  ["vais a llegar","/bajs a ʝeˈɣaɾ/","vous allez arriver (amis, Espagne)","vosotros → vais (Espagne). En Amérique latine : « ustedes van a llegar ».","👫","¿Vais a llegar pronto?","Allez-vous arriver bientôt ? (à des amis)","verbe conjugué"],
  ["van a pagar","/ban a paˈɣaɾ/","ils / elles / vous vont payer","ellos, ellas, ustedes → van. Un seul verbe pour « eux » et pour « vous » pluriel formel.","👨‍👩‍👧","Van a pagar con tarjeta.","Ils vont payer par carte.","verbe conjugué"],
  ["va a costar","/ba a kosˈtaɾ/","ça va coûter","Pour parler d'un prix à venir : « ¿Cuánto va a costar? ». Infinitif : costar.","💶","¿Cuánto va a costar el billete?","Combien va coûter le billet ?","verbe conjugué"],
  ["vamos a descansar","/ˈbamos a deskanˈsaɾ/","nous allons nous reposer","descansar = se reposer, sans « se » en espagnol. s + c : des-kan-SAR.","😌","Esta noche vamos a descansar.","Ce soir nous allons nous reposer.","verbe conjugué"],
  ["salir","/saˈliɾ/","partir, sortir","On retient d'abord : sale (il/elle part, vous partez). Après « voy a », on garde l'infinitif : voy a salir.","🚪","¿A qué hora vas a salir?","À quelle heure vas-tu partir ?","verbe (infinitif)"],
  ["llegar","/ʝeˈɣaɾ/","arriver","-AR régulier. « Llegar a + lieu » : llegar al aeropuerto. Contraire de salir.","🛬","Vamos a llegar pronto al hotel.","Nous allons arriver tôt à l'hôtel.","verbe (infinitif)"],
  ["comprar","/komˈpɾaɾ/","acheter","-AR régulier. « Comprar un billete ».","🛒","Voy a comprar los billetes hoy.","Je vais acheter les billets aujourd'hui.","verbe (infinitif)"],
  ["visitar","/bisiˈtaɾ/","visiter","-AR régulier. On visite un lieu ou une ville : visitar Sevilla (sans préposition).","🏛️","Vamos a visitar la ciudad.","Nous allons visiter la ville.","verbe (infinitif)"],
  ["esta noche · este verano","/ˈesta ˈnotʃe · ˈeste beˈɾano/","ce soir · cet été","esta (fém.) + noche, este (masc.) + verano. Marqueurs du futur proche : ahora, pronto, esta noche, este verano.","🌙","Este verano voy a viajar a Sevilla.","Cet été je vais voyager à Séville.","expression"],
  ["ahora · pronto","/aˈoɾa · ˈpɾonto/","maintenant · bientôt","« Ahora voy a… » = je vais le faire tout de suite. « Pronto » = bientôt (ou tôt).","⏰","Ahora voy a descansar.","Maintenant je vais me reposer.","adverbe"],
  ["las vacaciones","/las bakaˈθjones/","les vacances","Toujours au pluriel. « De vacaciones » = en vacances. v = b, c = th.","🏖️","En las vacaciones vamos a viajar.","Pendant les vacances nous allons voyager.","nom féminin pluriel"]
 ]),
 blk("Phrases clés du voyageur (tú et usted)", [
  ["Quería reservar una habitación doble, por favor.","/keˈɾia reseɾˈβaɾ ˈuna aβitaˈθjon ˈdoβle poɾ faˈβoɾ/","Je souhaiterais réserver une chambre double, s'il vous plaît.","Formule de politesse figée vue en A1.6 : on la réemploie telle quelle, sans la conjuguer. Elle adoucit la demande, comme « je voulais réserver » en français. Idéale avec usted.","🏨","Buenas tardes, quería reservar una habitación individual, por favor.","Bonsoir, je souhaiterais réserver une chambre simple, s'il vous plaît.","formule de politesse",["Quiero reservar una habitación doble, por favor.","Quería reservar una habitación doble, por favor.","Je voudrais / je souhaiterais réserver une chambre double, s'il vous plaît."]],
  ["Quiero reservar…","/ˈkjeɾo reseɾˈβaɾ/","Je veux réserver… (informel)","Version directe, entre amis ou par message : « Quiero reservar una habitación ». Avec un inconnu ou à l'hôtel, préfère « Quería reservar… ». quiero = querer e → ie.","💬","Quiero reservar dos billetes, por favor.","Je veux réserver deux billets, s'il te plaît.","expression"],
  ["¿A qué hora sale el vuelo?","/a ke ˈoɾa ˈsale el ˈbwelo/","À quelle heure part le vol ?","« ¿A qué hora + verbe + sujet ? » : le verbe vient avant le sujet. qué porte un accent. Réponse : « A las nueve » (a las + heure, voir A1.10).","⏰","¿A qué hora sale tu vuelo?","À quelle heure part ton vol ?","question",["¿A qué hora sale tu vuelo?","¿A qué hora sale su vuelo?","À quelle heure part ton / votre vol ?"]],
  ["¿Está incluido el desayuno?","/esˈta inkluˈiðo el desaˈʝuno/","Le petit-déjeuner est-il inclus ?","On peut aussi dire « ¿El desayuno está incluido? ». « Incluido » s'accorde : ¿Está incluida la cena ? Réponse : « Sí, está incluido ».","🥐","¿Está incluido el wifi?","Le wifi est-il inclus ?","question"],
  ["¿Me das la llave? / ¿Me da la llave?","/me das la ˈʝaβe · me da la ˈʝaβe/","Tu me donnes la clé ? / Vous me donnez la clé ?","Tú : das ; usted : da. Ajoute « por favor » pour être poli. À l'hôtel, avec le personnel, on dit « ¿Me da la llave, por favor? ».","🔑","¿Me da la llave de la habitación, por favor?","Pouvez-vous me donner la clé de la chambre, s'il vous plaît ?","question",["¿Me das la llave, por favor?","¿Me da la llave, por favor?","Tu me donnes / Vous me donnez la clé, s'il te / vous plaît ?"]],
  ["Aquí tienes / Aquí tiene","/aˈki ˈtjenes · aˈki ˈtjene/","Tiens, voici / Tenez, voici","Quand on tend quelque chose (passeport, carte). Tú : tienes ; usted : tiene. Verbe tener (A1.0).","🤲","Aquí tiene mi pasaporte.","Voici mon passeport.","formule de politesse",["Aquí tienes","Aquí tiene","Tiens, voici / Tenez, voici"]],
  ["¿Dónde está la puerta de embarque?","/ˈdonde esˈta la ˈpweɾta de emˈbaɾke/","Où est la porte d'embarquement ?","Avec ESTAR (lieu). Réponse type : « A la derecha / a la izquierda » (rappel A1.8). Pour poliment attirer l'attention : « Perdone, ¿dónde…? ».","🧭","Perdone, ¿dónde está el mostrador?","Excusez-moi, où est le comptoir ?","question"],
  ["¿A qué hora es el desayuno?","/a ke ˈoɾa es el desaˈʝuno/","À quelle heure est le petit-déjeuner ?","Avec un événement, on emploie ES (ser) : ¿A qué hora es…? Avec un départ ou une arrivée : sale / llega.","🕖","¿A qué hora es el desayuno?","À quelle heure est le petit-déjeuner ?","question"],
  ["¿Tiene wifi la habitación?","/ˈtjene ˈwifi la aβitaˈθjon/","La chambre a-t-elle le wifi ?","Le sujet vient à la fin : « ¿Tiene wifi la habitación? ». Tú : « ¿Tienes wifi? » ; usted : « ¿Tiene wifi? ».","📶","¿Tiene wifi el hotel?","L'hôtel a-t-il le wifi ?","question",["¿Tienes wifi?","¿Tiene wifi?","As-tu / Avez-vous le wifi ?"]],
  ["¿Cuántas noches va a estar usted?","/ˈkwantas ˈnotʃes ba a esˈtaɾ usˈteð/","Combien de nuits allez-vous rester ?","Question typique de l'hôtel. Avec tú : « ¿Cuántas noches vas a estar? ». cuántas s'accorde avec noches (féminin pluriel).","🌙","¿Cuántas noches vas a estar en Madrid?","Combien de nuits vas-tu rester à Madrid ?","question",["¿Cuántas noches vas a estar?","¿Cuántas noches va a estar usted?","Combien de nuits vas-tu rester / allez-vous rester ?"]],
  ["¡Buen viaje!","/bwem ˈbjaxe/","Bon voyage !","On peut dire aussi « ¡Buen vuelo! » (bon vol). Identique en tutoiement et en vouvoiement.","👋","¡Buen viaje, Marta!","Bon voyage, Marta !","formule de politesse"],
  ["¡Bienvenido! · ¡Bienvenida!","/bjembeˈniðo · bjembeˈniða/","Bienvenue ! (à un homme · à une femme)","Accord avec la personne accueillie : bienvenido (lui), bienvenida (elle), bienvenidos (plusieurs). À la réception : « ¡Bienvenido, señor! ».","🤗","¡Bienvenida al hotel, señora!","Bienvenue à l'hôtel, madame !","formule de politesse"]
 ]),
 blk("Bonus : 10 expressions réelles du voyage et du départ", [
  ["hacer las maletas","/aˈθeɾ las maˈletas/","faire ses valises (et partir)","Sens propre : préparer ses bagages. Sens figuré : partir, souvent pour de bon. Neutre, utilisé partout.","🧳","Esta noche voy a hacer las maletas.","Ce soir je vais faire mes valises.","expression"],
  ["tomar el fresco","/toˈmaɾ el ˈfɾesko/","prendre le frais","Sortir respirer l'air frais, souvent le soir quand il fait chaud. Courante en Espagne, comprise ailleurs.","🌬️","Esta noche vamos a salir a tomar el fresco.","Ce soir nous allons sortir prendre le frais.","expression"],
  ["buscar tres pies al gato","/busˈkaɾ tɾes ˈpjes al ˈɣato/","chercher midi à quatorze heures","Compliquer les choses sans raison. Familier ; on dit aussi « buscarle tres pies al gato ».","🐱","El viaje es fácil: no vamos a buscar tres pies al gato.","Le voyage est simple : on ne va pas chercher midi à quatorze heures.","expression"],
  ["tener cuerda para rato","/teˈneɾ ˈkweɾða ˈpaɾa ˈrrato/","en avoir encore pour longtemps","Pour une personne : avoir de la ressource, de l'énergie (ou parler longtemps). Pour une chose : ça va durer. Familier.","🔋","Mi abuelo tiene ochenta años, pero tiene cuerda para rato.","Mon grand-père a quatre-vingts ans, mais il en a encore pour longtemps.","expression"],
  ["salir pitando","/saˈliɾ piˈtando/","partir en trombe, filer","Partir très vite, sans perdre une seconde. Familier ; très courant en Espagne, compris en Amérique latine.","💨","Si el tren sale ya, vamos a salir pitando.","Si le train part maintenant, on va filer en vitesse.","expression"],
  ["llegar a buen puerto","/ʝeˈɣaɾ a bwem ˈpweɾto/","arriver à bon port","Aboutir, réussir après des difficultés. Neutre ; au sens propre pour un bateau, au figuré pour un projet.","⚓","El proyecto va a llegar a buen puerto.","Le projet va arriver à bon port.","expression"],
  ["perder el tren","/peɾˈðeɾ el tɾen/","rater le train (laisser passer une occasion)","Sens propre : rater son train. Sens figuré : laisser passer une chance. Neutre.","🚉","¡Corre! Vas a perder el tren.","Cours ! Tu vas rater le train.","expression"],
  ["coger el tren en marcha","/koˈxeɾ el tɾen en ˈmaɾtʃa/","prendre le train en marche","Rejoindre un projet déjà commencé. « Coger » = Espagne ; en Amérique latine, on évite « coger » (vulgaire) et on dit « subirse al tren en marcha ».","🚂","El equipo ya trabaja, pero Ana va a coger el tren en marcha.","L'équipe travaille déjà, mais Ana va prendre le train en marche.","expression"],
  ["empezar con buen pie","/empeˈθaɾ kon bwem ˈpje/","commencer du bon pied","Bien démarrer. Contraire : « empezar con mal pie ». Neutre.","🦶","El viaje va a empezar con buen pie.","Le voyage va commencer du bon pied.","expression"],
  ["ir de Herodes a Pilatos","/iɾ de eˈɾoðes a piˈlatos/","aller de Charybde en Scylla (d'un guichet à l'autre)","Passer d'un problème ou d'un guichet à un autre sans rien résoudre. Un peu littéraire, mais bien comprise.","🔄","Sin información, vamos a ir de Herodes a Pilatos en el aeropuerto.","Sans information, nous allons courir d'un guichet à l'autre à l'aéroport.","expression"]
 ])
);
LESSONS_ES[209] = {
 code:"A1.9", level:"A1",
 VOCAB: V,
 MEM_WORDS: __esIdx(V, ["reservar","ida y vuelta","el equipaje","facturar","el pasaporte","la llave","ir a + infinitif","vamos a facturar","Quería reservar una habitación doble, por favor.","¿A qué hora sale el vuelo?"]),
 MINI_CHECKS: [
  {q:"« Je vais réserver une chambre. »", opts:["Voy a reservar una habitación.","Voy reservar una habitación.","Estoy a reservar una habitación."], correct:0, fb:"Futur proche = ir conjugué + A + infinitif : voy a reservar. Le « a » ne peut pas être oublié."},
  {q:"« Tu vas voyager. »", opts:["Vas a viajar.","Va a viajar.","Vais a viajar."], correct:0, fb:"tú → vas. « Va » = él, ella ou usted ; « vais » = vosotros."},
  {q:"Vous vouvoyez un client : « Allez-vous payer par carte, monsieur ? »", opts:["¿Va a pagar con tarjeta, señor?","¿Vas a pagar con tarjeta, señor?"], correct:0, fb:"Avec usted, on conjugue à la 3e personne : va a pagar. (« Vas a pagar » est le tutoiement.)"},
  {q:"Comment demande-t-on un billet aller-retour ?", opts:["un billete de ida y vuelta","un billete de solo ida","un billete de salida y llegada"], correct:0, fb:"ida = l'aller, vuelta = le retour. « Solo ida » = aller simple."},
  {q:"Dans « Voy a viajar », le « a » sert à…", opts:["introduire l'infinitif (futur proche)","dire « à » un lieu","dire « avec »"], correct:0, fb:"Après ir, « a » + infinitif forme le futur proche. Devant un lieu, ir a + lieu veut dire « aller à » : voy al aeropuerto."},
  {q:"Document officiel indispensable pour passer une frontière : El…", opts:["pasaporte","asiento","desayuno"], correct:0, fb:"El pasaporte. C'est lui qu'on montre à la frontière et à l'aéroport."},
  {q:"À une réceptionniste que tu vouvoies, la formule la plus polie est…", opts:["Quería reservar una habitación, por favor.","Quiero reservar una habitación."], correct:0, fb:"« Quería » est la formule figée de politesse (vue en A1.6). « Quiero » est direct : OK entre amis."},
  {q:"« ¿A qué hora sale el vuelo? » signifie…", opts:["À quelle heure part le vol ?","Où part le vol ?","Combien coûte le vol ?"], correct:0, fb:"¿A qué hora…? = À quelle heure… ? ; sale = part (salir) ; el vuelo = le vol."}
 ],
 ROUNDS: [
  __esR("Voy a reservar un billete de ida y vuelta.","Je vais réserver un billet aller-retour."),
  __esR("Vamos a facturar las maletas.","Nous allons enregistrer les valises."),
  __esR("¿A qué hora sale el vuelo?","À quelle heure part le vol ?"),
  __esR("¿Está incluido el desayuno?","Le petit-déjeuner est-il inclus ?"),
  __esR("Quería reservar una habitación doble, por favor.","Je souhaiterais réserver une chambre double, s'il vous plaît."),
  __esR("Vas a llegar al aeropuerto esta noche.","Tu vas arriver à l'aéroport ce soir."),
  __esR("Van a pagar con tarjeta de crédito.","Ils vont payer par carte de crédit."),
  __esR("¿Va a viajar usted este verano?","Allez-vous voyager cet été ?"),
  __esR("Mi pasaporte está en la maleta.","Mon passeport est dans la valise."),
  __esR("Voy a descansar en el hotel.","Je vais me reposer à l'hôtel."),
  __esR("¿Me da la llave de la habitación, por favor?","Pouvez-vous me donner la clé de la chambre, s'il vous plaît ?"),
  __esR("¿Tiene wifi la habitación?","La chambre a-t-elle le wifi ?"),
  __esR("Vais a tomar el tren esta tarde.","Vous allez prendre le train cet après-midi.")
 ],
 QUIZ: [
  {cat:"ecrit", q:"Yo ___ a viajar este verano.", opts:["voy","estoy","soy"], correct:0, why:"Futur proche : ir + a + infinitif. yo → voy (jamais estoy ou soy)."},
  {cat:"ecrit", q:"Nosotros ___ a facturar las maletas.", opts:["vamos","van","vais"], correct:0, why:"nosotros → vamos. « Vais » = vosotros ; « van » = ellos / ustedes."},
  {cat:"ecrit", q:"Tú ___ a llegar pronto.", opts:["vas","va","voy"], correct:0, why:"tú → vas. « Va » serait él, ella ou usted."},
  {cat:"ecrit", q:"Ana ___ a descansar en el hotel.", opts:["va","vas","van"], correct:0, why:"Ana = elle → va. Le « a » devant l'infinitif reste invariable."},
  {cat:"ecrit", q:"Ellos ___ a pagar con tarjeta.", opts:["van","vais","va"], correct:0, why:"ellos → van. « Vais » ne s'emploie qu'avec vosotros."},
  {cat:"ecrit", q:"« Je vais réserver un billet. »", opts:["Voy a reservar un billete.","Voy reservar un billete.","Voy de reservar un billete."], correct:0, why:"ir + A + infinitif. Sans « a » ou avec « de », la phrase est incorrecte."},
  {cat:"ecrit", q:"Un billet aller simple se dit…", opts:["un billete de solo ida","un billete de ida y vuelta","un billete doble"], correct:0, why:"« Solo ida » = aller simple ; « ida y vuelta » = aller-retour."},
  {cat:"ecrit", q:"Le moment où l'on prend possession de sa chambre d'hôtel :", opts:["la entrada (check-in)","la salida (check-out)","la reserva"], correct:0, why:"La entrada = le check-in ; la salida = le check-out, quand on quitte l'hôtel."},
  {cat:"ecrit", q:"L'action d'enregistrer sa valise au comptoir de l'aéroport :", opts:["facturar","reservar","pagar"], correct:0, why:"Facturar el equipaje = enregistrer les bagages."},
  {cat:"ecrit", q:"Avec usted : ¿___ a pagar con tarjeta, señora?", opts:["Va","Vas","Voy"], correct:0, why:"usted se conjugue comme él/ella : va a pagar. (« Vas » = tutoiement.)"},
  {cat:"ecrit", q:"Voy ___ aeropuerto. (aller à l'aéroport)", opts:["al","a el","a"], correct:0, why:"a + el se contracte en « al » quand il s'agit d'un lieu : voy al aeropuerto. (Devant un infinitif : voy a viajar.)"},
  {cat:"ecrit", q:"Voy ___ viajar este verano.", opts:["a","al","en"], correct:0, why:"Devant un infinitif, on met « a » seul : voy a viajar. « Al » est réservé aux noms masculins."},
  {cat:"ecrit", q:"Pour réserver poliment une chambre à l'hôtel :", opts:["Quería reservar una habitación, por favor.","Habitación, reserva.","Quiero habitación."], correct:0, why:"« Quería reservar… » est la formule polie figée (A1.6) : idéale à la réception."},
  {cat:"ecrit", q:"¿A qué hora ___ el vuelo?", opts:["sale","salir","sales"], correct:0, why:"Le sujet est « el vuelo » (3e personne) : sale. « Salir » est l'infinitif et « sales » serait tú."},
  {cat:"oral", audio:"Voy a reservar una habitación doble para dos noches.", q:"Écoute : que va faire la personne ?", opts:["Réserver une chambre double","Annuler un vol","Payer son hôtel"], correct:0, why:"« Voy a reservar una habitación doble » = je vais réserver une chambre double (pour deux noches)."},
  {cat:"oral", audio:"¿A qué hora sale el vuelo?", q:"Écoute : que demande la personne ?", opts:["L'heure de départ du vol","Le prix du billet","Le numéro de la porte"], correct:0, why:"¿A qué hora…? = à quelle heure ; sale el vuelo = part le vol."},
  {cat:"oral", audio:"Vamos a facturar las maletas.", q:"Écoute : que vont faire les voyageurs ?", opts:["Enregistrer leurs valises","Acheter des valises","Perdre leurs valises"], correct:0, why:"Facturar las maletas = enregistrer les valises ; vamos a = nous allons."},
  {cat:"oral", audio:"El desayuno está incluido y el wifi también.", q:"Écoute : qu'est-ce qui est inclus ?", opts:["Le petit-déjeuner et le wifi","Seulement le wifi","Seulement le petit-déjeuner"], correct:0, why:"« El desayuno está incluido y el wifi también » : les deux sont inclus (también = aussi)."},
  {cat:"oral", audio:"¿Va a pagar con tarjeta, señor?", q:"Écoute : la question est…", opts:["formelle (usted)","informelle (tú)"], correct:0, why:"« Va a pagar » = vouvoiement. Au tutoiement : ¿Vas a pagar con tarjeta?"},
  {cat:"comprehension", passage:"Buenas tardes, quería reservar una habitación individual para hoy. — Muy bien, señor. ¿Cuántas noches va a estar usted? — Dos noches. ¿Está incluido el desayuno? — Sí, está incluido. — Perfecto. Voy a pagar con tarjeta de crédito.", q:"Quel type de chambre le client veut-il ?", opts:["Une chambre simple","Une chambre double","Une suite"], correct:0, why:"« una habitación individual » = une chambre simple (pour une personne)."},
  {cat:"comprehension", passage:"Buenas tardes, quería reservar una habitación individual para hoy. — Muy bien, señor. ¿Cuántas noches va a estar usted? — Dos noches. ¿Está incluido el desayuno? — Sí, está incluido. — Perfecto. Voy a pagar con tarjeta de crédito.", q:"Combien de nuits va-t-il rester ?", opts:["Deux","Une","Trois"], correct:0, why:"« Dos noches » : deux nuits. Le réceptionniste emploie usted (va a estar)."},
  {cat:"comprehension", passage:"Buenas tardes, quería reservar una habitación individual para hoy. — Muy bien, señor. ¿Cuántas noches va a estar usted? — Dos noches. ¿Está incluido el desayuno? — Sí, está incluido. — Perfecto. Voy a pagar con tarjeta de crédito.", q:"Comment le client va-t-il payer ?", opts:["Par carte de crédit","En espèces","Il ne paie pas"], correct:0, why:"« Voy a pagar con tarjeta de crédito » : futur proche + par carte."},
  {cat:"comprehension", passage:"Hola, soy Marta. Este verano voy a viajar con mi hermano Pablo. Vamos a tomar el avión y vamos a visitar Sevilla. Pablo va a reservar el hotel. Yo voy a comprar los billetes.", q:"Comment Marta et Pablo vont-ils voyager ?", opts:["En avion","En train","En voiture"], correct:0, why:"« Vamos a tomar el avión » : ils vont prendre l'avion."},
  {cat:"comprehension", passage:"Hola, soy Marta. Este verano voy a viajar con mi hermano Pablo. Vamos a tomar el avión y vamos a visitar Sevilla. Pablo va a reservar el hotel. Yo voy a comprar los billetes.", q:"Qui va réserver l'hôtel ?", opts:["Pablo","Marta","Un ami"], correct:0, why:"« Pablo va a reservar el hotel » ; Marta, elle, va acheter les billets (voy a comprar)."}
 ],
 PRON_VERBS: [
  {en:"El aeropuerto está en la ciudad.", fr:"L'aéroport est dans la ville. (a-e-ro-PUER-to : 4 syllabes ; c = th : thiu-DAD)"},
  {en:"Voy a viajar con mi equipaje.", fr:"Je vais voyager avec mes bagages. (v = b ; j = kh : bia-KHAR ; qu = k : e-ki-PA-khe)"},
  {en:"El billete es amarillo.", fr:"Le billet est jaune. (ll = y : bi-YE-te ; en Argentine, un « ch » doux)"},
  {en:"La habitación tiene una llave.", fr:"La chambre a une clé. (h muette ; ción = thion en Espagne, sion en Amérique latine ; ll = y)"},
  {en:"¿Está incluido el desayuno?", fr:"Le petit-déjeuner est-il inclus ? (in-KLUI-do ; des-a-YU-no)"},
  {en:"Vamos a facturar las maletas.", fr:"Nous allons enregistrer les valises. (v = b : BA-mos ; fak-tu-RAR)"},
  {en:"La recepción está a la izquierda.", fr:"La réception est à gauche. (rre-thep-THION ; z = th : ith-KIER-da)"},
  {en:"El pasaporte es azul.", fr:"Le passeport est bleu. (pa-sa-POR-te ; z = th : a-THUL)"},
  {en:"¿A qué hora sale el vuelo?", fr:"À quelle heure part le vol ? (h muette : O-ra ; ue = BWE-lo)"},
  {en:"Quería reservar una habitación doble.", fr:"Je souhaiterais réserver une chambre double. (qu = k : ke-RI-a ; re-ser-BAR)"}
 ],
 READING: [
  "Hola, soy Marta y voy a viajar este verano.",
  "Voy a ir a Sevilla con mi hermano Pablo.",
  "Vamos a tomar el avión en el aeropuerto de París.",
  "Primero vamos a facturar las maletas y luego vamos a pasar el control de seguridad.",
  "Yo voy a comprar los billetes de ida y vuelta.",
  "Pablo va a reservar una habitación doble en un hotel pequeño.",
  "En el hotel, Pablo va a preguntar: «¿Está incluido el desayuno?».",
  "Después vamos a descansar un poco.",
  "Y usted, señora, ¿adónde va a viajar este verano?",
  "Y tú, ¿vas a viajar también?"
 ],
 GLOSS: [
  {en:"voy a ir a", fr:"je vais aller à : le premier « a » introduit l'infinitif ir ; le second est le « à » du lieu"},
  {en:"tomar el avión", fr:"prendre l'avion : « tomar » est neutre, « coger » reste réservé à l'Espagne"},
  {en:"el control de seguridad", fr:"le contrôle de sécurité de l'aéroport"},
  {en:"primero… luego…", fr:"d'abord… ensuite… : mots d'enchaînement vus en A1.8"},
  {en:"preguntar", fr:"poser une question (verbe en -ar) ; ne pas confondre avec « pedir » (demander une chose)"},
  {en:"un poco", fr:"un peu"},
  {en:"adónde", fr:"vers où, où (avec ir) : ¿Adónde vas ? / ¿Adónde va usted ?"},
  {en:"también", fr:"aussi : « ¿Vas a viajar también? »"}
 ],
 GRAMMAR1: {
  heading:"Le futur proche : IR A + infinitif (voy a reservar)",
  lede:"Tu connais déjà IR (aller) depuis A1.4. Bonne nouvelle : il suffit d'ajouter « a » + un infinitif pour parler de ce que tu vas faire. C'est LE futur du quotidien en espagnol, très employé à l'oral. Le principe est le même qu'en français : « je vais réserver » = voy a reservar.",
  conj:[
   ["yo →","voy a + infinitif","Voy a reservar un billete. · No voy a pagar con tarjeta."],
   ["tú →","vas a + infinitif","¿Vas a viajar este verano? · Vas a llegar pronto."],
   ["él, ella, usted →","va a + infinitif","Va a salir pronto. · ¿Va a pagar con tarjeta, señor?"],
   ["nosotros/as →","vamos a + infinitif","Vamos a facturar las maletas. · ¡Vamos a descansar!"],
   ["vosotros/as →","vais a + infinitif","¿Vais a llegar pronto? · Vais a tomar el tren."],
   ["ellos, ellas, ustedes →","van a + infinitif","Van a pagar con tarjeta. · ¿Van a viajar ustedes?"]
  ],
  ruleHtml:"📖 <b>1. La structure.</b> <b>IR (conjugué) + a + verbe à l'infinitif</b>. Seul IR change selon la personne : <b>voy, vas, va, vamos, vais, van</b>. Le second verbe reste TOUJOURS à l'infinitif (reservar, viajar, salir, llegar, pagar, descansar, costar). On n'écrit jamais « voy reservo » ni « voy reservar ».<br><br>⚠️ <b>2. Le petit « a » est obligatoire.</b> Le français dit « je vais réserver » sans préposition ; l'espagnol ajoute <b>a</b> : <b>voy a reservar</b>. Oublier ce « a » (voy reservar) est l'erreur n°1 des francophones. Astuce : traduis « je vais » par « voy a ».<br><br>🔀 <b>3. Ne confonds pas deux « ir a ».</b> <b>ir a + lieu</b> = aller quelque part (<b>voy al aeropuerto</b>, voy a Sevilla, vamos a la estación) ; avec un nom masculin, a + el devient <b>al</b>. <b>ir a + infinitif</b> = futur proche (<b>voy a viajar</b>, vamos a facturar) : jamais « al » devant un verbe. Les deux peuvent même se suivre : <b>voy a ir a Sevilla</b> (je vais aller à Séville).<br><br>❌ <b>4. La négation</b> se place devant IR : <b>no voy a viajar</b>, no vamos a facturar, no va a costar mucho.<br><br>❓ <b>5. La question</b> : ¿Vas a viajar? · ¿Adónde vas a viajar? · ¿Cuándo vas a… ? Avec usted : ¿<b>Va a</b> viajar usted? · ¿Adónde <b>va a</b> viajar?<br><br>⏰ <b>6. Marqueurs de temps</b> utiles : <b>ahora</b> (maintenant), <b>pronto</b> (bientôt), <b>esta noche</b> (ce soir), <b>este verano</b> (cet été), <b>hoy</b>, <b>en las vacaciones</b>.<br><br>👥 <b>7. Tutoiement ET vouvoiement</b> : tú → <b>¿Vas a pagar con tarjeta? Voy a reservar tu billete.</b> · usted → <b>¿Va a pagar con tarjeta, señor? ¿Va a viajar usted?</b> Pluriel amical (Espagne) : <b>vais a</b> ; pluriel formel et Amérique latine : <b>van a</b>.<br><br>🗣️ <b>8. Proposer :</b> <b>¡Vamos a + infinitif!</b> signifie aussi « allons + verbe ! » : ¡Vamos a facturar las maletas! = allons enregistrer les valises !<br><br>🌎 <b>Variantes</b> : « el billete » (Espagne) / « el boleto » (Mexique) ; « facturar » / « despachar el equipaje » (Amérique latine) ; « tomar el avión » est neutre partout, « coger » est courant en Espagne mais vulgaire dans une grande partie de l'Amérique latine. Les formes IR A restent exactement les mêmes en Espagne et en Colombie.",
  dialogueLede:"Deux amies préparent leurs vacances (tutoiement) :",
  dialogue:[
   {who:"them", en:"¡Hola, Marta! ¿Vas a viajar este verano?", fr:"Salut, Marta ! Tu vas voyager cet été ?"},
   {who:"you", en:"Sí, voy a viajar a Sevilla con mi hermano.", fr:"Oui, je vais voyager à Séville avec mon frère."},
   {who:"them", en:"¡Qué bien! ¿Vais a tomar el tren?", fr:"Super ! Vous allez prendre le train ?"},
   {who:"you", en:"No, vamos a tomar el avión. Voy a reservar los billetes esta noche.", fr:"Non, nous allons prendre l'avion. Je vais réserver les billets ce soir."},
   {who:"them", en:"¿Y el hotel?", fr:"Et l'hôtel ?"},
   {who:"you", en:"Mi hermano va a reservar una habitación doble. ¡Va a ser un buen viaje!", fr:"Mon frère va réserver une chambre double. Ça va être un bon voyage !"}
  ],
  whyLabel:"Pourquoi IR A + infinitif est-il LE futur de l'oral ?",
  whyText:"Un seul verbe que tu maîtrises déjà, IR, te donne accès à tous tes projets : voy a reservar, vas a viajar, vamos a descansar. Pas de nouvelles terminaisons à apprendre : tu conjugues IR (6 formes) et tu ajoutes <b>a</b> + l'infinitif. C'est exactement la logique du français « je vais + infinitif », et de l'anglais « going to ». À l'oral, les hispanophones l'emploient bien plus que les autres formes de futur, qui viendront à un niveau plus avancé. Pour ne pas oublier le « a », répète la formule comme un seul bloc : <b>voy-a-reservar</b>. Autre piège : « va a » se prononce presque comme « ba-a » ; écoute les deux a. Et rappelle-toi la différence : <b>voy al aeropuerto</b> (je vais à l'aéroport) ≠ <b>voy a viajar</b> (je vais voyager)."
 },
 GRAMMAR2: {
  heading:"Réserver poliment et poser les bonnes questions : quería / quiero, ¿a qué hora…?, ¿está incluido…?",
  dialogueLede:"À la réception d'un hôtel (vouvoiement) :",
  dialogue:[
   {who:"them", en:"Buenas tardes, señor. ¡Bienvenido!", fr:"Bonsoir, monsieur. Bienvenue !"},
   {who:"you", en:"Buenas tardes. Quería reservar una habitación doble, por favor.", fr:"Bonsoir. Je souhaiterais réserver une chambre double, s'il vous plaît."},
   {who:"them", en:"Muy bien. ¿Cuántas noches va a estar usted?", fr:"Très bien. Combien de nuits allez-vous rester ?"},
   {who:"you", en:"Dos noches. ¿Está incluido el desayuno?", fr:"Deux nuits. Le petit-déjeuner est-il inclus ?"},
   {who:"them", en:"Sí, está incluido. ¿Va a pagar con tarjeta?", fr:"Oui, il est inclus. Allez-vous payer par carte ?"},
   {who:"you", en:"Sí, voy a pagar con tarjeta. ¿Me da la llave, por favor?", fr:"Oui, je vais payer par carte. Pouvez-vous me donner la clé, s'il vous plaît ?"},
   {who:"them", en:"Aquí tiene, señor. ¡Buen viaje!", fr:"Voici, monsieur. Bon voyage !"}
  ],
  ruleHtml:"💭 <b>1. Demander poliment : « Quería reservar… ».</b> Tu as rencontré « quería » en A1.6 : c'est une <b>formule de politesse figée</b>, que l'on réemploie en bloc, sans la conjuguer. Elle adoucit la demande, comme le français « je voulais réserver… ». <b>Quería reservar una habitación doble, por favor.</b> · <b>Quería reservar dos billetes de ida y vuelta.</b> À utiliser avec usted, à la réception, au comptoir, par écrit.<br><br>💭 <b>2. Entre amis : « Quiero reservar… ».</b> Forme directe et naturelle avec des proches ou par message : <b>Quiero reservar una habitación para los dos.</b> À l'hôtel avec le personnel, préfère « quería » : « quiero » peut paraître sec.<br><br>👥 <b>Formel / informel :</b> tú → <b>Quiero reservar…</b> · <b>¿Me das la llave, por favor?</b> · <b>Aquí tienes.</b> · <b>¿Tienes wifi?</b> · usted → <b>Quería reservar…</b> · <b>¿Me da la llave, por favor?</b> · <b>Aquí tiene.</b> · <b>¿Tiene wifi?</b><br><br>💭 <b>3. Demander l'heure d'un départ ou d'une arrivée.</b> <b>¿A qué hora + verbe + sujet ?</b> Le verbe passe devant le sujet : <b>¿A qué hora sale el vuelo?</b> · ¿A qué hora llega el tren? · ¿A qué hora es el desayuno? Avec tú / usted : ¿A qué hora sale <b>tu</b> vuelo? / ¿A qué hora sale <b>su</b> vuelo? Pour répondre : <b>a las</b> + heure (on le détaille en A1.10) : « A las nueve. »<br><br>💭 <b>4. « ¿Está incluido el desayuno? »</b> On peut aussi dire ¿El desayuno está incluido? ; la première forme est très naturelle. « Incluido » s'accorde comme un adjectif : <b>el desayuno está incluido</b>, <b>la comida está incluida</b>, <b>los billetes están incluidos</b>. Réponses : « Sí, está incluido » / « No, no está incluido ».<br><br>💭 <b>5. Autres questions utiles :</b> ¿Dónde está la puerta de embarque? · ¿Tiene wifi la habitación? · ¿Cuántas noches va a estar? · ¿Aceptan tarjeta? Pour attirer l'attention poliment : <b>Perdone</b> (usted) / <b>Perdona</b> (tú).<br><br>🌎 <b>Variantes</b> : habitación (Espagne) / cuarto (Mexique) ; el billete / el boleto ; el móvil / el celular ; facturar / despachar el equipaje ; vosotros (Espagne) / ustedes (Amérique latine).",
  whyLabel:"Pourquoi dire « quería » et pas « quiero » à l'hôtel ?",
  whyText:"En français aussi, on adoucit une demande avec « je voulais réserver une chambre » ou « je souhaiterais ». L'espagnol fait la même chose avec <b>quería</b>. Tu n'as pas besoin d'apprendre ici le temps qui se cache derrière : retiens-le comme un bloc de politesse, au même titre que « por favor ». <b>Quiero reservar</b> n'est pas incorrect ; c'est seulement plus direct, parfait entre amis. Règle simple : <b>personnel d'un hôtel, d'un restaurant ou d'une compagnie → quería + usted</b> ; <b>amis, famille → quiero + tú</b>. Pour les questions, retiens que l'espagnol place le verbe avant le sujet : <b>¿A qué hora sale el vuelo?</b> (et pas « ¿A qué hora el vuelo sale? »)."
 },
 REVIEW: [
  {q:"« Je suis en train de chercher la gare. » (rappel A1.8)", opts:["Estoy buscando la estación.","Estoy buscar la estación."], correct:0, fb:"ESTAR + gérondif (-ando pour les verbes en -ar) : estoy buscando. (rappel A1.8)"},
  {q:"Gérondif de « comer » :", opts:["comiendo","comando"], correct:0, fb:"Verbes en -er / -ir : on remplace la fin par -iendo (comer → comiendo). (rappel A1.8)"},
  {q:"À un inconnu âgé qui parle trop vite, tu dis :", opts:["¿Puede repetir, por favor?","¿Puedes repetir, por favor?"], correct:0, fb:"Inconnu âgé = usted : puede. (rappel A1.8)"},
  {q:"Une femme dit « Je suis perdue » :", opts:["Estoy perdida.","Estoy perdido."], correct:0, fb:"« perdido » s'accorde avec celle qui parle : perdida pour une femme. (rappel A1.8)"},
  {q:"« À gauche » se dit :", opts:["a la izquierda","a la derecha"], correct:0, fb:"izquierda = gauche ; derecha = droite. (rappel A1.8)"}
 ],
 DRILLS: [
  {type:"fill", text:"Yo ___ a reservar una habitación. (ir)", answers:["voy","Voy"], why:"yo → voy : voy a reservar."},
  {type:"fill", text:"Tú ___ a viajar este verano. (ir)", answers:["vas","Vas"], why:"tú → vas : vas a viajar."},
  {type:"fill", text:"Ella ___ a salir pronto. (ir)", answers:["va","Va"], why:"ella → va : va a salir."},
  {type:"fill", text:"Nosotros ___ a facturar las maletas. (ir)", answers:["vamos","Vamos"], why:"nosotros → vamos."},
  {type:"fill", text:"Vosotros ___ a llegar pronto. (ir, Espagne)", answers:["vais","Vais"], why:"vosotros → vais (Espagne). En Amérique latine : ustedes van."},
  {type:"fill", text:"Ustedes ___ a pagar con tarjeta. (ir)", answers:["van","Van"], why:"ustedes se conjugue comme ellos : van."},
  {type:"fill", text:"Usted ___ a viajar, ¿verdad? (ir)", answers:["va","Va"], why:"usted se conjugue comme él/ella : va a viajar."},
  {type:"fill", text:"Vamos a ___ las maletas. (facturar)", answers:["facturar"], why:"Après « vamos a », l'infinitif ne change jamais : facturar."},
  {type:"fill", text:"Voy a ___ un billete. (reservar)", answers:["reservar"], why:"ir a + infinitif : voy a reservar un billete."},
  {type:"fill", text:"Vas a ___ en el hotel. (descansar)", answers:["descansar"], why:"L'infinitif reste invariable : vas a descansar."},
  {type:"fill", text:"Quería ___ una habitación doble, por favor. (reservar)", answers:["reservar"], why:"« Quería » est suivi d'un infinitif : quería reservar."},
  {type:"fill", text:"Voy ___ aeropuerto. (a + el, lieu)", answers:["al"], why:"a + el devant un lieu masculin devient al : voy al aeropuerto."},
  {type:"fill", text:"Un billete de ___ y vuelta. (l'aller)", answers:["ida"], why:"ida = l'aller : un billete de ida y vuelta."},
  {type:"fill", text:"¿A qué hora ___ el vuelo? (salir, 3e personne)", answers:["sale","Sale"], why:"él / el vuelo → sale : ¿A qué hora sale el vuelo?"},
  {type:"fill", text:"No ___ a viajar este verano. (ir, yo)", answers:["voy","Voy"], why:"La négation se place devant IR : no voy a viajar."},
  {type:"fill", text:"Una habitación ___ para dos personas. (double)", answers:["doble"], why:"doble : chambre pour deux personnes, invariable en genre."},
  {type:"fill", text:"La ___ de embarque. (la porte)", answers:["puerta","Puerta"], why:"la puerta de embarque : la porte d'embarquement."},
  {type:"choice", q:"Corrige : « Voy reservar un hotel. »", opts:["Voy a reservar un hotel.","Voy de reservar un hotel."], correct:0, why:"Il manque le « a » : voy A reservar."},
  {type:"choice", q:"« Ils vont arriver. »", opts:["Van a llegar.","Vais a llegar."], correct:0, why:"ellos → van. « Vais » = vosotros uniquement."},
  {type:"choice", q:"Au vouvoiement : « Allez-vous partir, monsieur ? »", opts:["¿Va a salir usted, señor?","¿Vas a salir usted, señor?"], correct:0, why:"usted se conjugue à la 3e personne : va a salir."},
  {type:"choice", q:"Face à une réceptionniste que tu vouvoies, le plus poli est :", opts:["Quería reservar una habitación, por favor.","Quiero reservar una habitación."], correct:0, why:"« Quería » est la formule de politesse figée ; « quiero » est plus direct."},
  {type:"choice", q:"« Le petit-déjeuner est inclus. »", opts:["El desayuno está incluido.","El desayuno es incluido."], correct:0, why:"« Incluido » décrit un état : on emploie estar et l'adjectif s'accorde."},
  {type:"choice", q:"Au Mexique et dans beaucoup de pays d'Amérique latine, un billet se dit plutôt :", opts:["el boleto","el billeto"], correct:0, why:"« boleto » ; « billete » est la forme d'Espagne (« billeto » n'existe pas)."},
  {type:"choice", q:"Pour demander ta clé de chambre, tu t'adresses à…", opts:["la recepción","el aeropuerto"], correct:0, why:"La clé de la chambre se demande à la réception : « ¿Me da la llave, por favor? »"}
 ],
 ANNOTATED: {
  title:"Marta réserve son voyage",
  intro:"Quatre phrases pour t'entraîner à lire. Touche chaque mot pour voir sa nature et sa traduction, et repère le futur proche : IR + a + infinitif.",
  sentences:[
   {fr:"Je vais réserver une chambre double.", tokens:[
    {w:"Voy", tag:"verbe", info:"ir · présent · yo", fr:"je vais", tip:"Seul IR se conjugue : yo → voy."},
    {w:"a", tag:"préposition", fr:"(ne se traduit pas)", tip:"Obligatoire entre ir et l'infinitif : voy A reservar."},
    {w:"reservar", tag:"verbe", info:"infinitif · -ar", fr:"réserver", tip:"L'infinitif ne change jamais."},
    {w:"una", tag:"déterminant", info:"article indéfini · fém. sing.", fr:"une"},
    {w:"habitación", tag:"nom", info:"fém. sing.", fr:"chambre", tip:"h muette ; ción = thion (Espagne)."},
    {w:"doble", tag:"adjectif", info:"invariable en genre", fr:"double"}
   ]},
   {fr:"Nous allons enregistrer les valises.", tokens:[
    {w:"Vamos", tag:"verbe", info:"ir · présent · nosotros", fr:"nous allons", tip:"v = b : BA-mos."},
    {w:"a", tag:"préposition", fr:"(ne se traduit pas)", tip:"Comme toujours : ir + a + infinitif."},
    {w:"facturar", tag:"verbe", info:"infinitif · -ar", fr:"enregistrer (les bagages)", tip:"Aussi : facturer."},
    {w:"las", tag:"déterminant", info:"article défini · fém. plur.", fr:"les"},
    {w:"maletas", tag:"nom", info:"fém. plur.", fr:"valises"}
   ]},
   {fr:"À quelle heure part le vol ?", tokens:[
    {w:"¿A", tag:"préposition", fr:"à"},
    {w:"qué", tag:"adjectif interrogatif", fr:"quelle", tip:"Accent écrit sur qué dans une question."},
    {w:"hora", tag:"nom", info:"fém. sing.", fr:"heure", tip:"h muette : O-ra."},
    {w:"sale", tag:"verbe", info:"salir · présent · él", fr:"part", tip:"Le verbe passe avant le sujet dans la question."},
    {w:"el", tag:"déterminant", info:"article défini · masc. sing.", fr:"le"},
    {w:"vuelo?", tag:"nom", info:"masc. sing.", fr:"vol", tip:"ue = BWE-lo."}
   ]},
   {fr:"Allez-vous payer par carte, monsieur ?", tokens:[
    {w:"¿Va", tag:"verbe", info:"ir · présent · usted", fr:"allez-vous", tip:"usted se conjugue comme él/ella : va (tutoiement : vas)."},
    {w:"a", tag:"préposition", fr:"(ne se traduit pas)", tip:"Introduit l'infinitif."},
    {w:"pagar", tag:"verbe", info:"infinitif · -ar", fr:"payer"},
    {w:"con", tag:"préposition", fr:"avec, par", tip:"Pagar con tarjeta = payer par carte."},
    {w:"tarjeta", tag:"nom", info:"fém. sing.", fr:"carte", tip:"j = kh : tar-KHE-ta."},
    {w:"señor?", tag:"nom", info:"masc. sing.", fr:"monsieur", tip:"ñ = gn. Titre de politesse."}
   ]}
  ]
 },
 CULTURE_NOTE: {icon:"🧳", title:"Culture, 10 expressions et fiche récap (A1.9)",
  html:"<b>🧳 Culture — voyager dans le monde hispanophone</b> En Espagne, le train à grande vitesse s'appelle l'<b>AVE</b> et se réserve en ligne ; en Amérique latine, l'autocar longue distance est souvent le moyen de transport principal. À l'hôtel, le <b>desayuno</b> est parfois inclus, parfois à payer en plus : demande « ¿Está incluido el desayuno? ». Le jour du <b>check-out</b>, on rend généralement la chambre avant midi. Pour la politesse : « Quería reservar… » avec le personnel, « Quiero reservar… » entre amis. Variantes : billete / boleto, habitación / cuarto, móvil / celular, facturar / despachar el equipaje, vosotros (Espagne) / ustedes (Amérique latine). Dis « tomar el tren / el avión » : « coger » est courant en Espagne mais grossier en Amérique latine.<br><br><b>🎁 10 expressions réelles du voyage et du départ</b><br>1. <b>Hacer las maletas</b> = faire ses valises (et partir).<br>2. <b>Tomar el fresco</b> = prendre le frais, sortir respirer l'air du soir.<br>3. <b>Buscar tres pies al gato</b> = chercher midi à quatorze heures (familier).<br>4. <b>Tener cuerda para rato</b> = en avoir encore pour longtemps (énergie, durée ; familier).<br>5. <b>Salir pitando</b> = partir en trombe, filer (familier).<br>6. <b>Llegar a buen puerto</b> = arriver à bon port, aboutir.<br>7. <b>Perder el tren</b> = rater le train, laisser passer l'occasion.<br>8. <b>Coger el tren en marcha</b> = prendre le train en marche (Espagne ; en Amérique latine : « subirse al tren en marcha »).<br>9. <b>Empezar con buen pie</b> = commencer du bon pied.<br>10. <b>Ir de Herodes a Pilatos</b> = passer d'un problème ou d'un guichet à un autre sans rien résoudre.<br><br><b>✍️ Expression écrite — ton projet de voyage (4 lignes)</b> Utilise au moins deux fois le futur proche. Modèle : « Este verano voy a viajar a Sevilla con mi hermano. Vamos a tomar el avión y vamos a visitar la ciudad. Voy a reservar una habitación doble en un hotel pequeño. ¡Va a ser un buen viaje! » Version formelle (à un directeur) : « Este verano voy a viajar a Sevilla. ¿Va a viajar usted también, señor? » Vérifie : voy / vas / va / vamos / vais / van · le « a » devant l'infinitif · infinitifs invariables.<br><br><b>🗣️ Expression orale — arrivée à l'hôtel</b> Entraîne-toi à voix haute. Formel : « Buenas tardes. Tengo una reserva. Aquí tiene mi pasaporte. ¿Me da la llave, por favor? ¿A qué hora es el desayuno? ¿Tiene wifi la habitación? » Informel (à un ami qui travaille à l'accueil) : « Hola. Tengo una reserva. Aquí tienes mi pasaporte. ¿Me das la llave? ¿A qué hora es el desayuno? »<br><br><b>⚡ Mini-contrôle</b> 1. « Je vais réserver un billet aller-retour » → <b>Voy a reservar un billete de ida y vuelta.</b> 2. Heure de départ du vol → <b>¿A qué hora sale el vuelo?</b><br><br><b>📄 Fiche récap</b> Futur proche : voy / vas / va / vamos / vais / van + <b>a</b> + infinitif · voy al aeropuerto (lieu) ≠ voy a viajar (verbe) · no voy a viajar · ¡Vamos a…! Voyage : reservar, el billete (solo ida / ida y vuelta), el asiento, la salida / la llegada, el aeropuerto, la puerta de embarque, el equipaje, la maleta, el pasaporte, la tarjeta de embarque, facturar. Hôtel : la habitación (individual / doble), la entrada (check-in), la salida (check-out), la llave, la recepción, el desayuno incluido, el wifi. Politesse : Quería reservar… (usted) / Quiero reservar… (tú) · ¿Me da la llave? / ¿Me das la llave? · Aquí tiene / Aquí tienes. Questions : ¿A qué hora sale el vuelo? · ¿Está incluido el desayuno?"},
 NEXT_PREVIEW:"A1.10 (Trabajo y estudios) : parler de ton travail et de tes études — trabajo, profesor, médico, oficina, colegio, universidad —, poser « ¿A qué te dedicas? » (tú) / « ¿A qué se dedica usted? » (usted), conjuguer les verbes réguliers en -ar, -er, -ir et situer ta journée avec « a las… » et « por la mañana ».",
 META:{vocabTitle:"Viajar : billets, aéroport, hôtel et futur proche (A1.9)", lectureTitle:"Marta et Pablo partent en voyage", bilanTitle:"Bravo, tu sais voyager en espagnol !", pronLabel:"Viajar : j = kh, ll = y, aeropuerto, ción, v = b", todayLede:"réserver un billet et une chambre, te débrouiller à l'aéroport et à l'hôtel, et parler de tes projets avec le futur proche (voy a viajar, vas a llegar, vamos a facturar), avec la politesse formelle ET informelle"}
};
})();


// A1.10 — Trabajo y estudios : métiers, études, présent régulier -AR / -ER / -IR, ¿A qué te dedicas?, a las / por la mañana (leçon 210)
(function(){
function blk(name, rows){
 return __esB(name, rows).map(function(v, i){ v.emo = rows[i][4]; v.ex = [rows[i][5], rows[i][6]]; return v; });
}
// ligne = [terme, API, français, note, emoji, exemple ES, exemple FR]
var V = [].concat(
 blk("Les métiers et les personnes au travail", [
  ["el trabajo","/el tɾaˈβaxo/","le travail, l'emploi","j = kh : tra-BA-kho. Nom masculin ; à ne pas confondre avec le verbe trabajar. Pluriel : los trabajos (les emplois, les travaux).","💼","Mi trabajo es interesante.","Mon travail est intéressant."],
  ["el profesor / la profesora","/pɾofeˈsoɾ · pɾofeˈsoɾa/","le professeur / la professeure","Mot terminé par une consonne : on AJOUTE -a au féminin. Syllabe tonique : pro-fe-SOR. Pour dire son métier, pas d'article : « Soy profesora ».","👩‍🏫","Mi hermana es profesora.","Ma sœur est professeure."],
  ["el médico / la médica","/ˈmeðiko · ˈmeðika/","le médecin","Accent écrit : MÉ-di-co (jamais « medico »). -o → -a au féminin. « Doctor / doctora » est un titre qu'on met devant le nom : la doctora López.","🩺","Mi padre es médico.","Mon père est médecin."],
  ["el ingeniero / la ingeniera","/iŋxeˈnjeɾo · iŋxeˈnjeɾa/","l'ingénieur(e)","g devant e = kh : in-khe-NIE-ro. Pas de « -eur » : -o / -a. ie = diphtongue (une seule syllabe).","📐","Ana es ingeniera.","Ana est ingénieure."],
  ["el estudiante / la estudiante","/estuˈðjante/","l'étudiant(e)","Finit en -e : INVARIABLE, seul l'article change. Se dit aussi pour un collégien ou un lycéen. Variante : « el alumno / la alumna » (l'élève).","🎓","Soy estudiante de informática.","Je suis étudiant(e) en informatique."],
  ["el jefe / la jefa","/ˈxefe · ˈxefa/","le chef / la cheffe, le patron / la patronne","EXCEPTION : -e → -a au féminin (el jefe, la jefa). j = kh : KHE-fe. Au vouvoiement : « señor Ruiz », « señora Pérez ».","👔","Mi jefa es muy simpática.","Ma cheffe est très sympathique."],
  ["el compañero / la compañera","/komˈpaɲeɾo · komˈpaɲeɾa/","le collègue, le camarade","ñ = gn : com-pa-GNÉ-ro. « Compañero de trabajo » = collègue ; « compañero de clase » = camarade de classe. Pas « compagnon ».","🤝","Mis compañeros son simpáticos.","Mes collègues sont sympathiques."],
  ["el enfermero / la enfermera","/enfeɾˈmeɾo · enfeɾˈmeɾa/","l'infirmier / l'infirmière","Dérivé de « enfermo » (malade). Se prononce en-fer-MÉ-ro. -o → -a.","💉","La enfermera trabaja en un hospital.","L'infirmière travaille dans un hôpital."],
  ["el abogado / la abogada","/aβoˈɣaðo · aβoˈɣaða/","l'avocat(e)","b doux, g doux : a-bo-GA-do. -o → -a. Pas de « avocat » (avocado = le fruit).","⚖️","Mi tía es abogada.","Ma tante est avocate."],
  ["el camarero / la camarera","/kamaˈɾeɾo · kamaˈɾeɾa/","le serveur / la serveuse","Métier de la restauration (Espagne). En Amérique latine : « el mesero / la mesera » (Mexique, Colombie). Pour appeler : « ¡Perdone! » (usted).","🍽️","Soy camarero en un restaurante.","Je suis serveur dans un restaurant."],
  ["el contable / la contable","/konˈtaβle/","le comptable / la comptable","Finit en -e : invariable. En Amérique latine : aussi « el contador / la contadora ». Syllabe tonique : con-TA-ble.","🧮","Mi madre es contable.","Ma mère est comptable."],
  ["el vendedor / la vendedora","/bendeˈðoɾ · bendeˈðoɾa/","le vendeur / la vendeuse","Consonne finale : on ajoute -a au féminin. v = b : ben-de-DOR.","🛍️","La vendedora trabaja en una tienda.","La vendeuse travaille dans un magasin."],
  ["el director / la directora","/diɾekˈtoɾ · diɾekˈtoɾa/","le directeur / la directrice","Consonne finale : -a au féminin. Aussi le chef d'un service ou d'un établissement : el director del colegio.","🧑‍💼","La directora es muy amable.","La directrice est très aimable."],
  ["el empleado / la empleada","/empleˈaðo · empleˈaða/","l'employé(e)","-o → -a. « Empleado de oficina » = employé de bureau. d entre voyelles très doux.","🧑‍💻","Soy empleado de banco.","Je suis employé de banque."]
 ]),
 blk("Les lieux de travail", [
  ["la oficina","/la ofiˈθina/","le bureau, l'entreprise","Féminin. c devant i = th (Espagne) ou s (Amérique latine) : o-fi-THI-na. Désigne la pièce ET le lieu de travail en général.","🏢","Trabajo en una oficina grande.","Je travaille dans un grand bureau."],
  ["la fábrica","/la ˈfaβɾika/","l'usine","Accent écrit sur la 1re syllabe : FÁ-bri-ca. Féminin.","🏭","Mi padre trabaja en una fábrica.","Mon père travaille dans une usine."],
  ["la empresa","/la emˈpɾesa/","l'entreprise, la société","Féminin. Plus large que « oficina » : toute l'entreprise. « Mi empresa es pequeña. »","🏬","Mi empresa está en Madrid.","Mon entreprise est à Madrid."],
  ["el hospital","/el ospiˈtal/","l'hôpital","h muette : os-pi-TAL. Pluriel : los hospitales. On dit « en el hospital » (en + lieu).","🏥","La médica trabaja en el hospital.","La médecin travaille à l'hôpital."],
  ["la tienda","/la ˈtjenda/","le magasin, la boutique","ie = diphtongue : TIEN-da. En Amérique latine, « el negocio » ou « la tienda » selon les pays.","🏪","Mi hermano trabaja en una tienda.","Mon frère travaille dans un magasin."],
  ["el teletrabajo","/el teleˈtɾaβaxo/","le télétravail","Mot courant depuis quelques années. « Trabajar desde casa » = travailler depuis chez soi ; en Amérique latine, on entend aussi « home office ».","🏠","Hoy trabajo desde casa.","Aujourd'hui je travaille depuis chez moi."]
 ]),
 blk("L'école et les études", [
  ["el colegio","/el koˈlexjo/","l'école","g devant i = kh : ko-LE-khio. Ce n'est PAS le « collège » français : le sens varie (en Espagne surtout l'école primaire ; en Colombie, souvent toute l'école). Le lycée public espagnol = « el instituto ».","🏫","Mi hijo está en el colegio.","Mon fils est à l'école."],
  ["la universidad","/la unibeɾsiˈðað/","l'université, la fac","Accent sur la dernière syllabe (consonne finale) : u-ni-ver-si-DAD. Les mots en -dad sont féminins. Familier : « la uni ».","🎓","Estudio en la universidad.","J'étudie à l'université."],
  ["la asignatura","/la asiɣnaˈtuɾa/","la matière (scolaire)","Féminin. Aussi : « la materia » (très courant en Amérique latine). Mot à retenir : on dit « mi asignatura favorita ».","📖","Mi asignatura favorita es la historia.","Ma matière préférée est l'histoire."],
  ["la clase","/la ˈklase/","le cours, la classe","Désigne le cours (« tengo clase ») ET la salle ou le groupe. Pas d'article après « tener » : « tengo clase a las nueve ».","🧑‍🏫","Tengo clase a las nueve.","J'ai cours à neuf heures."],
  ["los deberes","/los deˈβeɾes/","les devoirs","Toujours au pluriel avec ce sens. « Hacer los deberes » = faire ses devoirs. Variante : « la tarea » (Amérique latine).","📝","Hago los deberes por la noche.","Je fais mes devoirs le soir."],
  ["el examen","/el ekˈsamen/","l'examen","x = « ks » : ek-SA-men. Pluriel : los exámenes (l'accent apparaît !).","📋","Hoy tengo un examen difícil.","Aujourd'hui j'ai un examen difficile."],
  ["el título","/el ˈtitulo/","le diplôme, le titre","Accent écrit : TÍ-tu-lo. « Tener un título » = avoir un diplôme.","📜","Tengo un título de ingeniero.","J'ai un diplôme d'ingénieur."],
  ["la carrera","/la kaˈrrera/","le cursus universitaire, les études supérieures","rr roulé. « Estudiar una carrera » = faire des études supérieures. Dans le sport, « la carrera » = la course.","🎒","Mi hermana estudia una carrera.","Ma sœur fait des études supérieures."],
  ["la nota","/la ˈnota/","la note (scolaire)","Féminin : « una nota buena ». Aussi : un mot écrit, une note de musique.","💯","Tengo una nota buena.","J'ai une bonne note."],
  ["los estudios","/los esˈtuðjos/","les études","Toujours au pluriel : « terminar los estudios », « mis estudios ». Ne pas confondre avec « el estudio » (le studio, l'étude).","📚","Termino mis estudios este año.","Je termine mes études cette année."]
 ]),
 blk("La journée de travail", [
  ["empezar","/empeˈθaɾ/","commencer","Verbe à diphtongue e → ie (comme preferir) : empiezo, empiezas, empieza, empezamos, empezáis, empiezan. Se construit avec a : « empezar a trabajar ».","▶️","Empiezo a trabajar a las ocho.","Je commence à travailler à huit heures."],
  ["terminar","/teɾmiˈnaɾ/","finir, terminer","Verbe régulier en -AR : termino, terminas, termina, terminamos, termináis, terminan. Se construit avec de : « terminar de trabajar ».","⏹️","Termino a las cinco de la tarde.","Je termine à cinq heures de l'après-midi."],
  ["la reunión","/la reuˈnjon/","la réunion","« reu » = DEUX syllabes (re-u-NIÓN), accent écrit sur le ó. Pluriel : las reuniones (l'accent disparaît).","👥","Tengo una reunión por la tarde.","J'ai une réunion l'après-midi."],
  ["el descanso","/el desˈkanso/","la pause","Aussi « el descanso » du milieu de la journée. Le verbe « descansar » = se reposer.","☕","Tenemos un descanso a las once.","Nous avons une pause à onze heures."],
  ["el horario","/el oˈɾaɾjo/","l'horaire, l'emploi du temps","h muette : o-RA-rio. « Mi horario es de nueve a cinco. »","🗓️","Mi horario es de ocho a cuatro.","Mon horaire est de huit heures à quatre heures."],
  ["la jornada","/la xoɾˈnaða/","la journée de travail","j = kh : khor-NA-da. « Jornada completa » = temps plein ; « media jornada » = mi-temps. En Espagne : « jornada partida » (pause longue le midi) ou « jornada intensiva » (journée continue).","⏱️","Trabajo media jornada.","Je travaille à mi-temps."]
 ]),
 blk("Les verbes de la vie active : -AR, -ER, -IR", [
  ["trabajar","/tɾaβaˈxaɾ/","travailler","Verbe -AR régulier : trabajo, trabajas, trabaja, trabajamos, trabajáis, trabajan. j = kh. Avec en (lieu) : « trabajo en una oficina ».","👷","Trabajo en una oficina.","Je travaille dans un bureau."],
  ["estudiar","/estuˈðjaɾ/","étudier","Verbe -AR régulier : estudio, estudias, estudia, estudiamos, estudiáis, estudian. Pas de préposition devant la matière : « estudio medicina ».","✏️","Estudio español por la noche.","J'étudie l'espagnol le soir."],
  ["enseñar","/enseˈɲaɾ/","enseigner","-AR régulier : enseño, enseñas… ñ = gn : en-se-GNAR. Un professeur « enseña » ; un élève « aprende ».","🧑‍🏫","La profesora enseña matemáticas.","La professeure enseigne les mathématiques."],
  ["ayudar","/aʝuˈðaɾ/","aider","-AR régulier : ayudo, ayudas, ayuda… y = « y » : a-yu-DAR. Se construit sans préposition devant la personne : « ayudo a mi jefe ».","🤲","Ayudo a mis compañeros.","J'aide mes collègues."],
  ["llegar","/ʝeˈɣaɾ/","arriver","-AR régulier : llego, llegas, llega… ll = y : ye-GAR. « Llegar a las ocho » = arriver à huit heures.","🚪","Llego a la oficina a las ocho.","J'arrive au bureau à huit heures."],
  ["preparar","/pɾepaˈɾaɾ/","préparer","-AR régulier : preparo, preparas, prepara… « Preparar una clase / una reunión ».","🗂️","Preparo la reunión por la mañana.","Je prépare la réunion le matin."],
  ["necesitar","/neθesiˈtaɾ/","avoir besoin de","-AR régulier : necesito, necesitas… c = th (Espagne) ou s : ne-the-si-TAR. Se construit sans préposition : « necesito un título ».","🔧","Necesito un descanso.","J'ai besoin d'une pause."],
  ["aprender","/apɾenˈdeɾ/","apprendre","Verbe -ER régulier : aprendo, aprendes, aprende, aprendemos, aprendéis, aprenden. Faux ami à éviter : « apprendre » = aprender, mais « enseigner » = enseñar.","🧠","Aprendo mucho en clase.","J'apprends beaucoup en cours."],
  ["comer","/koˈmeɾ/","manger, déjeuner","-ER régulier : como, comes, come, comemos, coméis, comen. En Espagne, « comer » veut aussi dire « déjeuner » (le repas de 14 h).","🍽️","Como en la oficina a las dos.","Je déjeune au bureau à deux heures."],
  ["comprender","/kompɾenˈdeɾ/","comprendre","-ER régulier : comprendo, comprendes, comprende… Synonyme très courant : « entender ». Ne pas confondre avec « incluir » (comprendre = inclure).","💡","No comprendo la lección.","Je ne comprends pas la leçon."],
  ["vivir","/biˈβiɾ/","vivre, habiter","Verbe -IR régulier : vivo, vives, vive, vivimos, vivís, viven. Pour l'adresse : « vivir en + ville ». Les deux terminaisons de nosotros / vosotros : -imos, -ís.","🏡","Vivo cerca de la oficina.","J'habite près du bureau."],
  ["escribir","/eskɾiˈβiɾ/","écrire","Verbe -IR régulier : escribo, escribes, escribe, escribimos, escribís, escriben. Le participe irrégulier n'est pas au programme.","✍️","Escribo muchas cartas.","J'écris beaucoup de lettres."],
  ["abrir","/aˈβɾiɾ/","ouvrir","-IR régulier : abro, abres, abre, abrimos, abrís, abren. « Abrir la oficina » = ouvrir le bureau.","🔓","Abro la tienda a las nueve.","J'ouvre le magasin à neuf heures."],
  ["recibir","/reθiˈβiɾ/","recevoir","-IR régulier : recibo, recibes, recibe… « Recibir un título / un sueldo ».","📥","Recibo a los clientes por la mañana.","Je reçois les clients le matin."],
  ["hacer","/aˈθeɾ/","faire","IRRÉGULIER seulement à la 1re personne : hago (comme tengo). Les autres : haces, hace, hacemos, hacéis, hacen. h muette. Reviendra en A1.11 pour la météo.","🔨","Hago los deberes por la noche.","Je fais mes devoirs le soir."]
 ]),
 blk("Les questions clés (tú / usted)", [
  ["¿A qué te dedicas? / ¿A qué se dedica usted?","/a ke te deˈðikas · a ke se deˈðika usˈteð/","que fais-tu dans la vie ? / que faites-vous dans la vie ?","« Dedicarse a » = se consacrer à. Question NATURELLE sur le métier, plus que « ¿Cuál es tu trabajo? ». Réponse : « Soy ingeniero. » / « Trabajo en… » / « Estudio… ».","💬","¿A qué se dedica usted? — Soy médica.","Que faites-vous dans la vie ? — Je suis médecin."],
  ["¿Dónde trabajas? / ¿Dónde trabaja usted?","/ˈdonde tɾaˈβaxas · ˈdonde tɾaˈβaxa usˈteð/","où travailles-tu ? / où travaillez-vous ?","dónde avec accent écrit (question). Tú : trabajas ; usted : trabaja (comme él/ella).","📍","¿Dónde trabaja usted? — En un hospital.","Où travaillez-vous ? — Dans un hôpital."],
  ["¿Qué estudias? / ¿Qué estudia usted?","/ke esˈtuðjas · ke esˈtuðja usˈteð/","qu'étudies-tu ? / qu'étudiez-vous ?","qué avec accent écrit. Réponse : « Estudio medicina / español / informática ». Devant la matière, pas de préposition.","🎓","¿Qué estudias? — Estudio informática.","Qu'étudies-tu ? — J'étudie l'informatique."],
  ["¿En qué trabajas? / ¿En qué trabaja usted?","/en ke tɾaˈβaxas · en ke tɾaˈβaxa usˈteð/","dans quel domaine travailles-tu ? / dans quel domaine travaillez-vous ?","Autre façon courante de demander le métier ou le secteur. Réponse : « Trabajo en educación / en un banco ».","🔍","¿En qué trabaja usted? — En un banco.","Dans quoi travaillez-vous ? — Dans une banque."],
  ["¿A qué hora empiezas? / ¿A qué hora empieza usted?","/a ke ˈoɾa emˈpjesas · a ke ˈoɾa emˈpjesa usˈteð/","à quelle heure commences-tu ? / à quelle heure commencez-vous ?","e → ie à tú et usted (empiezas, empieza). Réponse : « Empiezo a las ocho ».","⏰","¿A qué hora empiezas? — A las nueve.","À quelle heure commences-tu ? — À neuf heures."],
  ["¿Qué haces? / ¿Qué hace usted?","/ke ˈaθes · ke ˈaθe usˈteð/","que fais-tu ? / que faites-vous ?","Piège : s'emploie surtout pour « que fais-tu là, maintenant ? ». Pour le métier, préfère « ¿A qué te dedicas? ».","🤔","¿Qué hace usted? — Trabajo.","Que faites-vous ? — Je travaille."],
  ["Soy + métier","/soj/","je suis + métier","SANS article : « Soy ingeniero », « Soy profesora » (pas « soy un ingeniero »). Avec un adjectif, l'article revient : « Soy una profesora excelente ».","🪪","Soy contable y trabajo en una empresa.","Je suis comptable et je travaille dans une entreprise."],
  ["trabajar en / de / como","/tɾaβaˈxaɾ en · de · ˈkomo/","travailler dans / en tant que","« Trabajo en una oficina » (lieu), « trabajo de camarero » / « trabajo como camarero » (fonction).","🧭","Trabajo de camarero en un restaurante.","Je travaille comme serveur dans un restaurant."],
  ["dedicarse a","/deðiˈkaɾse a/","se consacrer à, faire comme métier","Verbe pronominal comme llamarse : me dedico, te dedicas, se dedica, nos dedicamos, os dedicáis, se dedican.","🎯","Me dedico a la enseñanza.","Je suis dans l'enseignement."]
 ]),
 blk("L'heure et les moments : a las, por la mañana", [
  ["a las ocho","/a las ˈotʃo/","à huit heures","Structure : a + las + nombre (a las dos, a las nueve, a las doce). Le nombre suffit : l'heure complète vient en A1.11. ch = tch.","🕗","Empiezo a las ocho.","Je commence à huit heures."],
  ["a la una","/a la ˈuna/","à une heure","EXCEPTION : pour 1 h on dit « la » (singulier) : a la una. Pour toutes les autres, « las ».","🕐","Termino a la una.","Je termine à une heure."],
  ["por la mañana","/poɾ la maˈɲana/","le matin","Moment général de la journée. ñ = gn : ma-GNA-na. En Amérique latine : aussi « en la mañana ».","🌅","Trabajo por la mañana.","Je travaille le matin."],
  ["por la tarde","/poɾ la ˈtaɾde/","l'après-midi","De midi jusqu'au début de la nuit. Attention : « tarde » seul veut dire aussi « tard ».","🌇","Tengo clase por la tarde.","J'ai cours l'après-midi."],
  ["por la noche","/poɾ la ˈnotʃe/","le soir, la nuit","Couvre le soir ET la nuit. Aucune différence entre « soir » et « nuit » : por la noche.","🌙","Estudio por la noche.","J'étudie le soir."],
  ["de la mañana / de la tarde / de la noche","/de la maˈɲana · de la ˈtaɾde · de la ˈnotʃe/","du matin / de l'après-midi / du soir","Après une heure précise : « a las ocho de la mañana », « a las cinco de la tarde ». Sans heure : « por la mañana ».","🔔","Empiezo a las ocho de la mañana.","Je commence à huit heures du matin."],
  ["de lunes a viernes","/de ˈlunes a ˈbjeɾnes/","du lundi au vendredi","de… a… = de… à… Pas d'article. Les 7 jours viennent complets en A1.11. viernes : ie = diphtongue.","📅","Trabajo de lunes a viernes.","Je travaille du lundi au vendredi."],
  ["de ocho a cinco","/de ˈotʃo a ˈθiŋko/","de huit heures à cinq heures","Pour une plage d'horaire : de + heure + a + heure. « Mi horario es de nueve a cinco ».","↔️","Mi horario es de nueve a cinco.","Mon horaire est de neuf heures à cinq heures."],
  ["todos los días","/ˈtoðos los ˈdias/","tous les jours","Pluriel pour « tous » : todos + los + días. « Día » est masculin (el día) malgré le -a final.","🔁","Trabajo todos los días.","Je travaille tous les jours."],
  ["el mediodía","/el meðjoˈðia/","midi, le déjeuner","« Al mediodía » = à midi. Mot composé : medio + día.","☀️","Como al mediodía.","Je mange à midi."],
  ["los fines de semana","/los ˈfines de seˈmana/","les week-ends","Pluriel : fin se met au pluriel (fines). « Los fines de semana no trabajo ».","🏖️","Los fines de semana descanso.","Le week-end, je me repose."]
 ]),
 blk("Bonus : 10 expressions du travail et des études", [
  ["Estar hasta arriba de trabajo","/esˈtaɾ ˈasta aˈrriβa de tɾaˈβaxo/","être submergé(e) de travail, être débordé(e)","Familier, très courant en Espagne : hasta arriba = jusqu'en haut (comme de l'eau). Se conjugue avec estar : estoy, estás, está usted…","🌊","Esta semana estoy hasta arriba de trabajo.","Cette semaine je suis débordé de travail."],
  ["Hacer la rosca","/aˈθeɾ la ˈrroska/","passer la pommade, faire de la lèche","Familier, surtout Amérique latine. En Espagne, on dit « hacer la pelota » (faire la balle). Sens négatif : flatter son chef.","🍞","Pedro siempre hace la rosca al jefe.","Pedro fait toujours de la lèche au chef."],
  ["Estar al pie del cañón","/esˈtaɾ al pje del kaˈɲon/","être au poste, rester fidèle au poste","Image d'un soldat au pied du canon : on ne lâche pas. Bien vu, neutre.","💪","La directora está al pie del cañón.","La directrice est fidèle au poste."],
  ["Cruzarse de brazos","/kɾuˈθaɾse de ˈβɾaθos/","rester les bras croisés, ne rien faire","Pronominal : me cruzo, te cruzas, se cruza… Souvent négatif : on reproche de ne pas agir.","🙅","El jefe no trabaja: se cruza de brazos.","Le chef ne travaille pas : il reste les bras croisés."],
  ["Estar quemado / quemada","/esˈtaɾ keˈmaðo/","être en burn-out, être cramé(e)","Familier. Le verbe « quemarse » = s'épuiser à force de travailler. Ne se dit pas pour un objet brûlé dans ce sens.","🔥","Mi compañera está quemada.","Ma collègue est en burn-out."],
  ["Ser un empollón / una empollona","/seɾ un empoˈʎon/","être un intello, un bûcheur","Familier, un peu moqueur, Espagne. En Amérique latine : « ser un ñoño » (Mexique, Chili). Avec ser (caractère).","🤓","Mi hermano es un empollón.","Mon frère est un intello."],
  ["Dar el do de pecho","/daɾ el do de ˈpetʃo/","se surpasser, donner le meilleur de soi","Image : le « do de poitrine » du chanteur d'opéra. Neutre, positive. dar = to give.","🎤","Marta da el do de pecho en el examen.","Marta se surpasse à l'examen."],
  ["Echar horas extras","/eˈtʃaɾ ˈoɾas ˈekstɾas/","faire des heures supplémentaires","Espagne : « echar horas ». Partout : « hacer horas extra(s) ». ch = tch.","⏳","Esta semana echo horas extras.","Cette semaine je fais des heures sup."],
  ["Ponerse las pilas","/poˈneɾse las ˈpilas/","se mettre au boulot, s'activer","Familier, très courant en Amérique latine. Littéralement : se mettre les piles. Pronominal : me pongo las pilas.","🔋","Tengo un examen: me pongo las pilas.","J'ai un examen : je m'y mets sérieusement."],
  ["Trabajar como un burro","/tɾaβaˈxaɾ ˈkomo um ˈburo/","travailler comme une bête, trimer","Familier, partout. Le burro est l'âne, symbole de l'effort. Se conjugue : trabajo como un burro.","🫏","Mi padre trabaja como un burro.","Mon père trime comme une bête."]
 ]),
 blk("Études et emploi : quelques mots utiles", [
  ["aprender de memoria","/apɾenˈdeɾ de meˈmoɾja/","apprendre par cœur","Piège : « de memoria » (de mémoire), JAMAIS « de corazón » (qui veut dire « sincèrement »).","🧠","Aprendo los verbos de memoria.","J'apprends les verbes par cœur."],
  ["las prácticas","/las ˈpɾaktikas/","le stage","Toujours au pluriel. « Estar de prácticas » = être en stage. En Amérique latine : aussi « la pasantía » (Argentine, Colombie). Expression simple, sans image.","🧑‍🎓","Hago prácticas en una empresa.","Je fais un stage dans une entreprise."],
  ["el sueldo","/el ˈsweldo/","le salaire","Masculin. Synonyme : « el salario ». ue = diphtongue : SUEL-do.","💶","Mi sueldo es bueno.","Mon salaire est bon."],
  ["la nómina","/la ˈnomina/","la fiche de paie, la paie","Accent écrit : NÓ-mi-na. Courant aussi en Amérique latine. « Recibo la nómina el día 30 ».","🧾","Recibo la nómina cada mes.","Je reçois ma fiche de paie chaque mois."],
  ["el contrato","/el konˈtɾato/","le contrat de travail","Masculin. « Contrato fijo » = CDI ; « contrato temporal » = CDD.","📑","Tengo un contrato fijo.","J'ai un CDI."],
  ["el currículum","/el kuˈrikulum/","le CV","Accent écrit sur la 2e syllabe : cu-RRÍ-cu-lum. Se dit aussi « el CV ». En Colombie : « la hoja de vida ».","📄","Escribo mi currículum.","J'écris mon CV."]
 ])
);
LESSONS_ES[210] = {
 code:"A1.10", level:"A1",
 VOCAB: V,
 MEM_WORDS: __esIdx(V, ["el jefe / la jefa","la reunión","empezar","¿A qué te dedicas? / ¿A qué se dedica usted?","a las ocho","por la mañana","de lunes a viernes","hacer","aprender de memoria","los deberes"]),
 MINI_CHECKS: [
  {q:"« Que fais-tu dans la vie ? » (tutoiement)", opts:["¿A qué te dedicas?","¿Cómo te dedicas?","¿Dónde te dedicas?"], correct:0, fb:"Dedicarse a = se consacrer à. La question naturelle du métier : ¿A qué te dedicas? (au vouvoiement : ¿A qué se dedica usted?)."},
  {q:"« Le matin » se dit…", opts:["por la mañana","para la mañana","con la mañana"], correct:0, fb:"Moment général de la journée : por la mañana (por la tarde, por la noche)."},
  {q:"« À huit heures »", opts:["a las ocho","en las ocho","por ocho"], correct:0, fb:"Heure précise : a + las + nombre. (Exception pour 1 h : a la una.)"},
  {q:"« Je commence à neuf heures. »", opts:["Empezo a las nueve.","Empiezo a las nueve.","Empeso a las nueve."], correct:1, fb:"Empezar fait e → ie : empiezo, empiezas, empieza (comme preferir). Seuls nosotros et vosotros gardent le e."},
  {q:"Vosotros (Espagne), verbe « vivir » :", opts:["vivís","vives","vivimos"], correct:0, fb:"Pour vosotros : -ER → -éis, -IR → -ís. vivís (avec accent écrit)."},
  {q:"« Elle est médecin. »", opts:["Es médica.","Es médico.","Es médicas."], correct:0, fb:"-o → -a au féminin : médica. Et pas d'article avec le métier : « Es médica »."},
  {q:"« Je fais mes devoirs. »", opts:["Hago los deberes.","Hacio los deberes.","Hace los deberes."], correct:0, fb:"Hacer est irrégulier à la 1re personne : hago. (hace = il / elle / usted.)"},
  {q:"À une cheffe inconnue : « Où travaillez-vous ? »", opts:["¿Dónde trabaja usted?","¿Dónde trabajas?"], correct:0, fb:"Usted + 3e personne : trabaja. ¿Dónde trabajas? est le tutoiement."}
 ],
 ROUNDS: [
  __esR("Trabajo en una oficina grande.","Je travaille dans un grand bureau."),
  __esR("¿A qué te dedicas?","Que fais-tu dans la vie ?"),
  __esR("¿A qué se dedica usted?","Que faites-vous dans la vie ?"),
  __esR("Empiezo a trabajar a las ocho.","Je commence à travailler à huit heures."),
  __esR("Soy ingeniera y trabajo en una fábrica.","Je suis ingénieure et je travaille dans une usine."),
  __esR("¿Dónde trabaja usted, señor?","Où travaillez-vous, monsieur ?"),
  __esR("Por la tarde tenemos una reunión importante.","L'après-midi, nous avons une réunion importante."),
  __esR("Mi hermano estudia en la universidad.","Mon frère étudie à l'université."),
  __esR("Trabajamos de lunes a viernes.","Nous travaillons du lundi au vendredi."),
  __esR("¿Qué estudia usted en la universidad?","Qu'étudiez-vous à l'université ?"),
  __esR("Los estudiantes aprenden mucho en clase.","Les étudiants apprennent beaucoup en cours."),
  __esR("Hago los deberes por la noche.","Je fais mes devoirs le soir."),
  __esR("Mi jefa vive y trabaja en Madrid.","Ma cheffe vit et travaille à Madrid.")
 ],
 QUIZ: [
  {cat:"ecrit", q:"Yo ___ en una fábrica. (trabajar)", opts:["trabajo","trabajas","trabaja"], correct:0, why:"yo → -o : trabajo. (tú trabajas, él trabaja.)"},
  {cat:"ecrit", q:"Ella ___ español en la universidad. (aprender)", opts:["aprende","aprendo","aprenden"], correct:0, why:"ella → -e pour un verbe en -ER : aprende. (yo aprendo, ellas aprenden.)"},
  {cat:"ecrit", q:"Vosotros ___ una carta. (escribir)", opts:["escribís","escribimos","escribes"], correct:0, why:"vosotros + verbe en -IR → -ís : escribís (accent écrit). nosotros = escribimos."},
  {cat:"ecrit", q:"Pour demander son métier à un directeur :", opts:["¿A qué te dedicas?","¿A qué se dedica usted?","¿Dónde estás?"], correct:1, why:"Un directeur = usted : ¿A qué se dedica usted? « Dedicarse » est pronominal : se dedica."},
  {cat:"ecrit", q:"Marta es ___ . (médecin)", opts:["médica","médico","una médicas"], correct:0, why:"Féminin de médico : médica. Pas d'article quand on donne simplement son métier."},
  {cat:"ecrit", q:"Empiezo a trabajar ___ ocho.", opts:["a las","por las","en la"], correct:0, why:"Une heure précise se dit a + las + nombre : a las ocho."},
  {cat:"ecrit", q:"Quel verbe a la diphtongue e → ie ?", opts:["trabajar","empezar","vivir"], correct:1, why:"Empezar : empiezo, empiezas, empieza… (trabajar et vivir sont réguliers)."},
  {cat:"ecrit", q:"Nosotros ___ a las nueve. (empezar)", opts:["empezamos","empiezamos","empiezan"], correct:0, why:"À nosotros, le e ne change pas : empezamos (comme preferimos). Piège classique : « empiezamos » n'existe pas."},
  {cat:"ecrit", q:"Yo ___ los deberes por la noche. (hacer)", opts:["hago","hazo","hace"], correct:0, why:"Hacer est irrégulier uniquement à yo : hago (comme tengo)."},
  {cat:"ecrit", q:"Trabajo ___ la mañana, de lunes a viernes.", opts:["por","a","para"], correct:0, why:"Moment général de la journée : por la mañana / tarde / noche."},
  {cat:"ecrit", q:"« Elle est professeure. »", opts:["Es profesora.","Es profesor.","Es profesorea."], correct:0, why:"Mot en consonne : on ajoute -a au féminin : profesor → profesora."},
  {cat:"ecrit", q:"Ana es una ___ . (étudiante)", opts:["estudianta","estudiante","estudianto"], correct:1, why:"estudiante est invariable : seul l'article change (el / la)."},
  {cat:"ecrit", q:"¿Dónde ___ usted? (trabajar)", opts:["trabaja","trabajas","trabajan"], correct:0, why:"Usted se conjugue comme él / ella : trabaja. (trabajas = tú.)"},
  {cat:"ecrit", q:"« Les étudiants apprennent. »", opts:["Los estudiantes aprenden.","Los estudiante aprende.","Los estudiantes aprende."], correct:0, why:"Le pluriel se marque sur l'article, le nom ET le verbe : los estudiantes aprenden."},
  {cat:"oral", audio:"Trabajo en una oficina grande, de lunes a viernes.", q:"Écoute : où et quand la personne travaille-t-elle ?", opts:["Dans un grand bureau, du lundi au vendredi","Dans une usine, du lundi au vendredi","Dans un grand bureau, le week-end"], correct:0, why:"« oficina grande » = grand bureau ; « de lunes a viernes » = du lundi au vendredi."},
  {cat:"oral", audio:"Empiezo a las ocho y termino a las cinco.", q:"Écoute : à quelle heure la personne commence-t-elle ?", opts:["À 8 h","À 5 h","À 9 h"], correct:0, why:"« Empiezo a las ocho » : elle commence à huit heures et termine à cinq heures."},
  {cat:"oral", audio:"¿A qué se dedica usted?", q:"Écoute : la question est…", opts:["informelle (tutoiement)","formelle (vouvoiement)"], correct:1, why:"« se dedica usted » = vouvoiement. Au tutoiement : ¿A qué te dedicas?"},
  {cat:"oral", audio:"Mi hermana es médica y trabaja en un hospital.", q:"Écoute : quel est le métier de la sœur ?", opts:["Médecin","Infirmière","Professeure"], correct:0, why:"« médica » = médecin (une femme). Infirmière se dirait « enfermera »."},
  {cat:"oral", audio:"Estudio en la universidad por la tarde.", q:"Écoute : quand la personne étudie-t-elle ?", opts:["Le matin","L'après-midi","Le soir"], correct:1, why:"« por la tarde » = l'après-midi. Le matin : por la mañana ; le soir : por la noche."},
  {cat:"comprehension", passage:"Carlos: Hola, soy Carlos. ¿A qué te dedicas? — Elena: Soy ingeniera. Trabajo en una oficina grande. Empiezo a trabajar a las ocho de la mañana y por la tarde tengo una reunión importante.", q:"Quel est le métier d'Elena ?", opts:["Ingénieure","Médecin","Professeure"], correct:0, why:"« Soy ingeniera » : elle répond à la question ¿A qué te dedicas?"},
  {cat:"comprehension", passage:"Carlos: Hola, soy Carlos. ¿A qué te dedicas? — Elena: Soy ingeniera. Trabajo en una oficina grande. Empiezo a trabajar a las ocho de la mañana y por la tarde tengo una reunión importante.", q:"Que fait Elena l'après-midi ?", opts:["Elle a une réunion importante","Elle étudie à la fac","Elle fait une pause"], correct:0, why:"« por la tarde tengo una reunión importante » : l'après-midi, elle a une réunion."},
  {cat:"comprehension", passage:"Señor Ruiz: Buenos días, señora Pérez. ¿Dónde trabaja usted? — Señora Pérez: Trabajo en un hospital. Soy enfermera. — Señor Ruiz: ¿A qué hora empieza usted? — Señora Pérez: Empiezo a las siete de la mañana y termino a las tres de la tarde, de lunes a viernes.", q:"Où travaille la señora Pérez ?", opts:["Dans un hôpital","Dans une école","Dans un bureau"], correct:0, why:"« Trabajo en un hospital » : elle est infirmière (enfermera)."},
  {cat:"comprehension", passage:"Señor Ruiz: Buenos días, señora Pérez. ¿Dónde trabaja usted? — Señora Pérez: Trabajo en un hospital. Soy enfermera. — Señor Ruiz: ¿A qué hora empieza usted? — Señora Pérez: Empiezo a las siete de la mañana y termino a las tres de la tarde, de lunes a viernes.", q:"À quelle heure la señora Pérez termine-t-elle ?", opts:["À trois heures de l'après-midi","À sept heures du matin","À huit heures du soir"], correct:0, why:"« termino a las tres de la tarde » : elle finit à 15 h. Elle commence à sept heures du matin."},
  {cat:"comprehension", passage:"Señor Ruiz: Buenos días, señora Pérez. ¿Dónde trabaja usted? — Señora Pérez: Trabajo en un hospital. Soy enfermera. — Señor Ruiz: ¿A qué hora empieza usted? — Señora Pérez: Empiezo a las siete de la mañana y termino a las tres de la tarde, de lunes a viernes.", q:"Quel indice montre que la conversation est formelle ?", opts:["usted avec trabaja / empieza","l'heure du rendez-vous","le mot « hospital »"], correct:0, why:"usted + verbe à la 3e personne (trabaja, empieza) + « señora » : vouvoiement."}
 ],
 PRON_VERBS: [
  {en:"Trabajo en una oficina.", fr:"Je travaille dans un bureau. (j = kh : tra-BA-kho ; c = th : o-fi-THI-na)"},
  {en:"Soy ingeniera.", fr:"Je suis ingénieure. (g + e = kh : in-khe-NIE-ra ; ie = une seule syllabe)"},
  {en:"Empiezo a las ocho.", fr:"Je commence à huit heures. (ie : em-PIE-tho, z = th ; ch = tch : O-tcho)"},
  {en:"Aprendemos en la universidad.", fr:"Nous apprenons à l'université. (u-ni-ver-si-DAD : d final très doux)"},
  {en:"Tengo una reunión por la tarde.", fr:"J'ai une réunion l'après-midi. (re-u-NIÓN : « eu » = 2 syllabes ; accent sur ó)"},
  {en:"Mi jefe es muy simpático.", fr:"Mon chef est très sympathique. (j = kh : KHE-fe)"},
  {en:"Los estudiantes escriben mucho.", fr:"Les étudiants écrivent beaucoup. (es-tu-DIAN-tes ; ch = tch : MU-tcho)"},
  {en:"¿A qué se dedica usted?", fr:"Que faites-vous dans la vie ? (de-DI-ca ; us-TED : d final doux)"},
  {en:"Mi compañera trabaja por la mañana.", fr:"Ma collègue travaille le matin. (ñ = gn : com-pa-GNÉ-ra, ma-GNA-na)"},
  {en:"Los deberes son difíciles.", fr:"Les devoirs sont difficiles. (d entre voyelles très doux : de-BE-res ; accent écrit sur di-FÍ-ci-les)"}
 ],
 READING: [
  "Hola, soy Elena y soy ingeniera.",
  "Trabajo en una oficina grande, en Madrid.",
  "Empiezo a trabajar a las ocho de la mañana.",
  "Por la tarde tengo una reunión con mi jefe.",
  "Mis compañeros son muy simpáticos y trabajamos mucho.",
  "Mi hermano Pablo es estudiante: estudia en la universidad.",
  "Pablo aprende mucho, pero hoy tiene un examen difícil.",
  "Por la noche, Pablo hace los deberes y yo estoy cansada.",
  "Y usted, señor, ¿a qué se dedica?",
  "Y tú, ¿dónde trabajas y a qué hora terminas?"
 ],
 GLOSS: [
  {en:"empiezo", fr:"je commence (empezar : e → ie, comme preferir)"},
  {en:"a las ocho de la mañana", fr:"à huit heures du matin : heure précise = a las + nombre + de la mañana"},
  {en:"mi jefe", fr:"mon chef (au féminin : mi jefa)"},
  {en:"los compañeros", fr:"les collègues (compañero de trabajo)"},
  {en:"tiene un examen", fr:"il a un examen : tener + nom (ne pas dire « es un examen »)"},
  {en:"hace los deberes", fr:"il fait ses devoirs (hacer : hago, haces, hace…)"},
  {en:"se dedica", fr:"(vous) faites comme métier : dedicarse, usted → se dedica"},
  {en:"terminas", fr:"tu termines (terminar : verbe -AR régulier, tú → -as)"}
 ],
 GRAMMAR1: {
  heading:"Le présent régulier complet : -AR, -ER, -IR (trabajar, aprender, vivir)",
  lede:"Tu connais déjà les verbes en -AR (A1.3) et en -ER / -IR (A1.6). Cette leçon les réunit : trois familles, UN seul système. Avec le radical (trabaj-, aprend-, viv-) et la bonne terminaison, tu dis ce que tu fais, où tu travailles et quand. Seules les terminaisons de tú, nosotros et vosotros changent d'une famille à l'autre.",
  conj:[
   ["yo →","trabajo · aprendo · vivo","Trabajo en una oficina. Aprendo español. Vivo en París."],
   ["tú →","trabajas · aprendes · vives","¿Dónde trabajas? ¿Aprendes inglés? ¿Vives en Madrid?"],
   ["él, ella, usted →","trabaja · aprende · vive","¿Dónde trabaja usted? Aprende rápido. Vive en Bogotá."],
   ["nosotros/as →","trabajamos · aprendemos · vivimos","Trabajamos de lunes a viernes. Aprendemos mucho. Vivimos aquí."],
   ["vosotros/as →","trabajáis · aprendéis · vivís","¿Trabajáis por la tarde? ¿Aprendéis en clase? ¿Vivís cerca?"],
   ["ellos, ellas, ustedes →","trabajan · aprenden · viven","Trabajan en una fábrica. ¿Aprenden ustedes español? Viven en Lima."]
  ],
  ruleHtml:"📖 <b>1. Le système : radical + terminaison.</b> On enlève -ar / -er / -ir et on ajoute :<br>• <b>-AR</b> : -o · -as · -a · -amos · -áis · -an (trabajar → trabajo, trabajas…)<br>• <b>-ER</b> : -o · -es · -e · -emos · -éis · -en (aprender → aprendo, aprendes…)<br>• <b>-IR</b> : -o · -es · -e · -imos · -ís · -en (vivir, escribir → vivo, vives… escribo, escribes…)<br>Ce qu'il faut retenir : <b>yo = -o pour les trois</b> ; entre -ER et -IR, seules les formes <b>nosotros</b> (-emos / -imos) et <b>vosotros</b> (-éis / -ís) diffèrent ; entre -AR et les deux autres, les voyelles s'inversent (<b>-a- → -e-</b> : trabajas / aprendes, trabaja / aprende).<br><br>👥 <b>2. Tutoiement ET vouvoiement.</b> tú → <b>¿Dónde trabajas? ¿Qué estudias? ¿Dónde vives?</b> · usted → <b>¿Dónde trabaja usted? ¿Qué estudia usted? ¿Dónde vive usted?</b> (usted = forme de él/ella ; ustedes = forme de ellos/ellas). Pluriel amical : <b>vosotros</b> (Espagne : trabajáis, aprendéis, vivís) ; en Amérique latine, on dit <b>ustedes</b> pour tous les « vous » : trabajan, aprenden, viven.<br><br>🧰 <b>3. Les verbes réguliers de la vie active.</b> -AR : trabajar, estudiar, enseñar, ayudar, llegar, preparar, necesitar, terminar. -ER : aprender, comer, comprender. -IR : vivir, escribir, abrir, recibir. Exemples : <b>Abro la tienda a las nueve. Recibo a los clientes. Escribo mi currículum.</b><br><br>⚠️ <b>4. EMPEZAR : e → ie</b> (comme <b>preferir</b>, A1.5). Les formes qui portent l'accent tonique sur le radical prennent ie : <b>empiezo, empiezas, empieza, empiezan</b>. Nosotros et vosotros gardent le e : <b>empezamos, empezáis</b>. Phrase clé : <b>Empiezo a trabajar a las ocho.</b> Avec usted : <b>¿A qué hora empieza usted?</b> (Le dialogue source disait « Empecé » : c'est une forme de passé, qu'on étudiera plus tard. En A1, on dit toujours <b>empiezo</b>.)<br><br>⚠️ <b>5. HACER : un seul irrégulier, yo.</b> <b>hago</b> (comme tengo : -go !), puis régulier : haces, hace, hacemos, hacéis, hacen. <b>Hago los deberes. ¿Qué haces? ¿Qué hace usted?</b> Il reviendra en A1.11 (la météo).<br><br>🔁 <b>6. Les irréguliers déjà vus.</b> <b>ser</b> : soy, eres, es, somos, sois, son · <b>estar</b> : estoy, estás, está, estamos, estáis, están · <b>tener</b> : tengo, tienes, tiene, tenemos, tenéis, tienen · <b>ir</b> : voy, vas, va, vamos, vais, van. Exemple : <b>Soy ingeniera, estoy en la oficina, tengo una reunión y voy a trabajar.</b><br><br>✅ <b>7. Mots utiles.</b> Pronom sujet presque toujours omis ; négation avant le verbe (<b>no trabajo</b>) ; <b>trabajar EN</b> + lieu (trabajo en un hospital), <b>estudiar</b> + matière sans préposition (estudio medicina), <b>estudiar EN</b> + lieu (estudio en la universidad).",
  dialogueLede:"Deux collègues se rencontrent (tutoiement) :",
  dialogue:[
   {who:"them", en:"Hola, soy Carlos. ¿A qué te dedicas?", fr:"Salut, je suis Carlos. Que fais-tu dans la vie ?"},
   {who:"you", en:"Soy ingeniera. Trabajo en una oficina grande.", fr:"Je suis ingénieure. Je travaille dans un grand bureau."},
   {who:"them", en:"¿A qué hora empiezas?", fr:"À quelle heure commences-tu ?"},
   {who:"you", en:"Empiezo a las ocho de la mañana y termino a las cinco. ¿Y tú?", fr:"Je commence à huit heures du matin et je termine à cinq heures. Et toi ?"},
   {who:"them", en:"Yo soy estudiante. Estudio por la mañana y trabajo por la tarde.", fr:"Moi, je suis étudiant. J'étudie le matin et je travaille l'après-midi."},
   {who:"you", en:"¡Qué bien! ¿Dónde vives?", fr:"Super ! Où habites-tu ?"},
   {who:"them", en:"Vivo en Madrid, cerca de la universidad.", fr:"J'habite à Madrid, près de l'université."}
  ],
  whyLabel:"Pourquoi trois familles, et pourquoi empezar change-t-il ?",
  whyText:"En espagnol, l'infinitif se termine toujours par <b>-ar, -er ou -ir</b>. C'est ce qui te dit, avant même de conjuguer, quel jeu de terminaisons utiliser. Bonne nouvelle : <b>-ER et -IR sont presque jumeaux</b> (deux formes seulement diffèrent), et les terminaisons sont toujours les mêmes pour un verbe régulier : trabajar, estudiar et enseñar se conjuguent exactement comme hablar. Les verbes comme <b>empezar</b> sont réguliers dans leurs terminaisons, mais le <b>e du radical devient ie</b> quand la voix appuie dessus (empIEzo, empIEzas, empIEza), et reste e quand l'accent est sur la terminaison (empezAmos, empezÁis). Même mécanisme que <b>preferir</b> (prefiero / preferimos). Piège francophone : on dit « je commence à travailler » avec « à » : <b>empiezo A trabajar</b>, mais « je finis de travailler » avec « de » : <b>termino DE trabajar</b>. Et attention à ne pas dire « soy un ingeniero » : pour le métier, <b>pas d'article</b>."
 },
 GRAMMAR2: {
  heading:"Parler de son métier : ¿A qué te dedicas?, métiers au féminin, a las / por la mañana",
  dialogueLede:"Une professeure et un directeur se parlent (vouvoiement) :",
  dialogue:[
   {who:"them", en:"Buenos días, señora. ¿A qué se dedica usted?", fr:"Bonjour, madame. Que faites-vous dans la vie ?"},
   {who:"you", en:"Soy profesora. Trabajo en un colegio.", fr:"Je suis professeure. Je travaille dans une école."},
   {who:"them", en:"¿A qué hora empieza usted?", fr:"À quelle heure commencez-vous ?"},
   {who:"you", en:"Empiezo a las ocho de la mañana, de lunes a viernes.", fr:"Je commence à huit heures du matin, du lundi au vendredi."},
   {who:"them", en:"¿Y por la tarde?", fr:"Et l'après-midi ?"},
   {who:"you", en:"Por la tarde preparo las clases y ayudo a mis alumnos.", fr:"L'après-midi, je prépare les cours et j'aide mes élèves."}
  ],
  ruleHtml:"💬 <b>1. La question naturelle.</b> Pour demander le métier, l'espagnol courant dit <b>¿A qué te dedicas?</b> (tú) / <b>¿A qué se dedica usted?</b> (usted). Littéralement : « À quoi te consacres-tu ? ». Le verbe <b>dedicarse</b> est pronominal, comme <b>llamarse</b> : me dedico, te dedicas, se dedica, nos dedicamos, os dedicáis, se dedican. Réponses : <b>Soy ingeniera.</b> · <b>Trabajo en un hospital.</b> · <b>Me dedico a la enseñanza.</b> · <b>Estudio medicina.</b><br>D'autres questions utiles : <b>¿Dónde trabajas? / ¿Dónde trabaja usted?</b> · <b>¿Qué estudias? / ¿Qué estudia usted?</b> · <b>¿En qué trabajas? / ¿En qué trabaja usted?</b> · <b>¿A qué hora empiezas? / ¿A qué hora empieza usted?</b><br><br>👩‍⚕️ <b>2. Les métiers au féminin.</b> -o → -a : médico/médica, ingeniero/ingeniera, abogado/abogada, camarero/camarera. Consonne finale : on ajoute -a : profesor/profesora, director/directora, vendedor/vendedora. Mot en -e ou -ista : INVARIABLE (seul l'article change) : <b>el/la estudiante, el/la contable</b>. Exception : <b>el jefe / la jefa</b>. Avec le métier seul : <b>pas d'article</b> (Soy médica) ; avec un adjectif ou un lieu, l'article réapparaît : <b>Soy una médica excelente</b>.<br><br>🕗 <b>3. L'heure : a las + nombre.</b> <b>A las ocho, a las nueve, a las doce</b>… Pour 1 h : <b>a la una</b> (singulier). L'heure complète (y media, y cuarto) vient en A1.11 ; ici, le nombre rond suffit. Pour une plage : <b>de ocho a cinco</b>. Pour préciser : <b>a las ocho de la mañana</b>.<br><br>🌅 <b>4. Les moments de la journée.</b> <b>por la mañana</b> (le matin) · <b>por la tarde</b> (l'après-midi) · <b>por la noche</b> (le soir / la nuit). Après une heure précise, on emploie <b>de</b> : <i>a las cinco de la tarde</i>. En Amérique latine, on entend aussi <b>en la mañana / en la tarde / en la noche</b>. Pour les jours : <b>de lunes a viernes</b> (du lundi au vendredi), <b>todos los días</b>, <b>los fines de semana</b> ; les 7 jours, les mois et les dates viennent en A1.11.<br><br>👥 <b>5. Formel et informel.</b> Avec un client, un directeur ou un inconnu : <b>usted</b> + 3e personne : <b>¿Dónde trabaja usted? ¿A qué se dedica usted? ¿A qué hora empieza usted?</b> Entre collègues ou amis : <b>tú</b>. Et selon le pays : <b>vosotros</b> en Espagne, <b>ustedes</b> en Amérique latine ; en Colombie, le « usted » est parfois utilisé même entre proches.<br><br>⚠️ <b>6. Pièges francophones.</b> « Je suis ingénieur » = <b>Soy ingeniero</b> (jamais « soy un ingeniero »). « Je travaille dans un hôpital » = <b>trabajo EN un hospital</b>. « Le matin » = <b>por la mañana</b>, pas « en la matina ». « Apprendre » = <b>aprender</b> ; « enseigner » = <b>enseñar</b> (pas « aprender »). « Faire ses devoirs » = <b>hacer los deberes</b>.",
  whyLabel:"Pourquoi « ¿A qué te dedicas? » plutôt que « ¿Cuál es tu trabajo? »",
  whyText:"« ¿Cuál es tu trabajo? » est compréhensible, mais ça ressemble à une traduction littérale du français et ça sonne un peu artificiel, presque comme un formulaire. Un hispanophone dit <b>¿A qué te dedicas?</b> : la question est ouverte, et la réponse peut être un métier (<i>soy abogada</i>), un lieu (<i>trabajo en un banco</i>) ou des études (<i>estudio medicina</i>). Autre avantage : cette formule marche aussi bien en Espagne qu'en Amérique latine. Au vouvoiement, tu ajoutes simplement <b>usted</b> et tu mets <b>se dedica</b> : <b>¿A qué se dedica usted?</b>"
 },
 REVIEW: [
  {q:"« Je vais réserver une chambre. »", opts:["Voy a reservar una habitación.","Voy reservar una habitación.","Reservo a voy una habitación."], correct:0, fb:"Futur proche : ir (voy, vas, va…) + a + infinitif. (rappel A1.9)"},
  {q:"À la réception, pour demander poliment une chambre :", opts:["Quería una habitación, por favor.","Querer una habitación, por favor."], correct:0, fb:"« Quería… » est la formule de politesse figée pour demander. (rappel A1.9 / A1.6)"},
  {q:"« Un billete solo ida » signifie :", opts:["un billet aller simple","un billet aller-retour"], correct:0, fb:"solo ida = aller simple ; ida y vuelta = aller-retour. (rappel A1.9)"},
  {q:"« ¿A qué hora sale el vuelo? » signifie :", opts:["À quelle heure part le vol ?","À quelle heure arrive le vol ?"], correct:0, fb:"salida = le départ ; llegada = l'arrivée. (rappel A1.9)"},
  {q:"Mi hermana ___ a facturar la maleta.", opts:["va","voy","vas"], correct:0, fb:"Mi hermana = ella : ir → va. Structure : va + a + infinitif. (rappel A1.9)"}
 ],
 DRILLS: [
  {type:"fill", text:"Yo ___ en una oficina. (trabajar)", answers:["trabajo","Trabajo"], why:"yo → -o : trabajo."},
  {type:"fill", text:"Tú ___ español en clase. (aprender)", answers:["aprendes","Aprendes"], why:"tú + verbe en -ER → -es : aprendes."},
  {type:"fill", text:"Ella ___ en París. (vivir)", answers:["vive","Vive"], why:"ella + verbe en -IR → -e : vive."},
  {type:"fill", text:"Nosotros ___ a las ocho. (empezar)", answers:["empezamos","Empezamos"], why:"À nosotros, pas de diphtongue : empezamos."},
  {type:"fill", text:"Yo ___ a trabajar a las nueve. (empezar)", answers:["empiezo","Empiezo"], why:"À yo, e → ie : empiezo."},
  {type:"fill", text:"Vosotros ___ en una fábrica. (trabajar)", answers:["trabajáis","Trabajáis"], why:"vosotros + -AR → -áis : trabajáis (accent écrit)."},
  {type:"fill", text:"Usted ___ muchas cartas. (escribir)", answers:["escribe","Escribe"], why:"usted se conjugue comme él/ella : escribe."},
  {type:"fill", text:"Ellos ___ en el hospital. (trabajar)", answers:["trabajan","Trabajan"], why:"ellos → -an : trabajan."},
  {type:"fill", text:"Yo ___ los deberes por la tarde. (hacer)", answers:["hago","Hago"], why:"Hacer est irrégulier à yo : hago."},
  {type:"fill", text:"¿Qué ___ usted? (hacer)", answers:["hace","Hace"], why:"usted → hace (forme de él/ella, régulière)."},
  {type:"fill", text:"¿A qué ___ usted? (dedicarse)", answers:["se dedica","Se dedica"], why:"Verbe pronominal : usted → se dedica."},
  {type:"fill", text:"¿A qué te ___ ? (tú, dedicarse)", answers:["dedicas","Dedicas"], why:"tú → te dedicas : verbe en -AR, tú → -as."},
  {type:"fill", text:"Ana es profesor___ .", answers:["a"], why:"Consonne finale : on ajoute -a au féminin : profesora."},
  {type:"fill", text:"Ellas ___ a las ocho de la mañana. (empezar)", answers:["empiezan","Empiezan"], why:"ellas → empiezan : e → ie, terminaison -an."},
  {type:"fill", text:"Nosotros ___ español por la noche. (aprender)", answers:["aprendemos","Aprendemos"], why:"nosotros + -ER → -emos : aprendemos."},
  {type:"fill", text:"Yo ___ la tienda a las nueve. (abrir)", answers:["abro","Abro"], why:"yo → -o : abro (-IR régulier)."},
  {type:"choice", q:"À un inconnu âgé : « Que faites-vous dans la vie ? »", opts:["¿A qué te dedicas?","¿A qué se dedica usted?"], correct:1, why:"Inconnu âgé = usted : ¿A qué se dedica usted?"},
  {type:"choice", q:"« Je travaille le matin. »", opts:["Trabajo por la mañana.","Trabajo para la mañana."], correct:0, why:"Moment général de la journée : por la mañana / tarde / noche."},
  {type:"choice", q:"« À huit heures »", opts:["a las ocho","en las ocho"], correct:0, why:"Heure précise : a + las + nombre."},
  {type:"choice", q:"Marta est avocate.", opts:["Marta es abogada.","Marta es abogado."], correct:0, why:"Féminin : abogado → abogada. Pas d'article devant le métier."},
  {type:"choice", q:"« Je commence à huit heures. »", opts:["Empiezo a las ocho.","Empezo a las ocho."], correct:0, why:"e → ie à la 1re personne : empiezo."},
  {type:"choice", q:"« Je suis ingénieure. »", opts:["Soy ingeniera.","Soy una ingeniera."], correct:0, why:"Le métier se dit sans article : Soy ingeniera."},
  {type:"choice", q:"« Apprendre par cœur » :", opts:["aprender de memoria","aprender de corazón"], correct:0, why:"« de corazón » veut dire « sincèrement » : pour apprendre par cœur, on dit de memoria."},
  {type:"choice", q:"Pour dire à quelqu'un qu'il est submergé de travail : « Estoy… »", opts:["hasta arriba de trabajo","por arriba de trabajo"], correct:0, why:"Expression figée : estar hasta arriba de trabajo (être débordé)."},
  {type:"choice", q:"Pour 1 h : « à une heure » :", opts:["a la una","a las una"], correct:0, why:"Pour 1 h seulement : singulier, a la una. Pour les autres : a las dos, a las tres…"}
 ],
 ANNOTATED: {
  title:"Elena et son travail",
  intro:"Un petit texte pour t'entraîner à lire. Touche chaque mot pour voir sa nature et sa traduction — et repère les verbes au présent (-AR, -ER, -IR) et les expressions de temps.",
  sentences:[
   {fr:"Je suis ingénieure et je travaille dans un grand bureau.", tokens:[
    {w:"Soy", tag:"verbe", info:"ser · présent · yo", fr:"je suis", tip:"Le métier s'annonce sans article : soy ingeniera."},
    {w:"ingeniera", tag:"nom", info:"fém. sing.", fr:"ingénieure", tip:"-a car Elena est une femme ; g devant e = kh."},
    {w:"y", tag:"conjonction", fr:"et"},
    {w:"trabajo", tag:"verbe", info:"trabajar · présent · yo", fr:"je travaille", tip:"Verbe en -AR : yo → -o ; j = kh."},
    {w:"en", tag:"préposition", fr:"dans", tip:"Lieu de travail : trabajar en."},
    {w:"una", tag:"déterminant", info:"article indéfini · fém. sing.", fr:"un / une"},
    {w:"oficina", tag:"nom", info:"fém. sing.", fr:"bureau", tip:"c devant i = th (Espagne) ou s (Amérique latine)."},
    {w:"grande", tag:"adjectif", info:"invariable en genre", fr:"grand(e)", tip:"Finit en -e : une seule forme."}
   ]},
   {fr:"Je commence à travailler à huit heures du matin.", tokens:[
    {w:"Empiezo", tag:"verbe", info:"empezar · présent · yo", fr:"je commence", tip:"e → ie à la 1re personne (comme preferir)."},
    {w:"a", tag:"préposition", fr:"à", tip:"empezar + a + infinitif."},
    {w:"trabajar", tag:"verbe", info:"infinitif", fr:"travailler"},
    {w:"a las", tag:"locution", fr:"à", tip:"Heure précise : a + las + nombre."},
    {w:"ocho", tag:"adjectif", info:"nombre", fr:"huit"},
    {w:"de la mañana", tag:"locution", fr:"du matin", tip:"Après une heure précise, on emploie de la mañana."}
   ]},
   {fr:"Que faites-vous dans la vie ?", tokens:[
    {w:"¿A", tag:"préposition", fr:"à", tip:"Dedicarse a : se consacrer à."},
    {w:"qué", tag:"pronom interrogatif", fr:"quoi", tip:"Accent écrit : qué."},
    {w:"se", tag:"pronom réfléchi", fr:"se", tip:"Verbe pronominal, comme llamarse (se llama)."},
    {w:"dedica", tag:"verbe", info:"dedicarse · présent · usted", fr:"consacre", tip:"usted se conjugue comme él/ella : dedica."},
    {w:"usted?", tag:"pronom sujet", info:"vouvoiement", fr:"vous (politesse)"}
   ]},
   {fr:"Ma cheffe travaille du lundi au vendredi.", tokens:[
    {w:"Mi", tag:"déterminant", info:"possessif", fr:"ma / mon", tip:"mi ne change pas au féminin."},
    {w:"jefa", tag:"nom", info:"fém. sing.", fr:"cheffe", tip:"Exception : el jefe / la jefa ; j = kh."},
    {w:"trabaja", tag:"verbe", info:"trabajar · présent · ella", fr:"travaille", tip:"3e personne : -a."},
    {w:"de lunes a viernes", tag:"locution", fr:"du lundi au vendredi", tip:"de… a… = de… à…, sans article."}
   ]}
  ]
 },
 CULTURE_NOTE: {icon:"💼", title:"Culture, 10 expressions et fiche récap (A1.10)",
  html:"<b>💼 Culture — le travail en pays hispanophone</b> En Espagne, beaucoup de journées sont en <b>jornada partida</b> : une longue pause le midi (on « come » vers 14 h), puis le travail reprend jusqu'à 18 ou 19 h ; la <b>jornada intensiva</b> (continue, sans longue pause) est fréquente l'été ou le vendredi. Entre collègues, on se tutoie vite (<b>tú</b>) ; avec un client ou un supérieur qu'on ne connaît pas, on dit <b>usted</b>. En Colombie, le « usted » est employé plus largement, parfois même entre proches. Pour demander le métier : <b>¿A qué te dedicas?</b> (tú) / <b>¿A qué se dedica usted?</b> (usted). Au bureau, on parle de <b>el jefe / la jefa</b>, de <b>los compañeros</b>, de <b>la reunión</b>, du <b>descanso</b>. Mots à varier : « la nómina » (la fiche de paie), « el currículum » (en Colombie : « la hoja de vida »).<br><br><b>🧰 Bonus : 10 expressions du travail et des études</b><br>1. <b>Estar hasta arriba de trabajo</b> = être débordé(e) (familier, Espagne).<br>2. <b>Hacer la rosca</b> = passer la pommade, faire de la lèche (Amérique latine ; en Espagne : <i>hacer la pelota</i>).<br>3. <b>Estar al pie del cañón</b> = être au poste, rester fidèle au poste.<br>4. <b>Cruzarse de brazos</b> = rester les bras croisés, ne rien faire.<br>5. <b>Estar quemado / quemada</b> = être en burn-out, être cramé(e) (familier).<br>6. <b>Ser un empollón / una empollona</b> = être un intello, un bûcheur (Espagne, familier ; en Mexique et au Chili : <i>ser un ñoño</i>).<br>7. <b>Dar el do de pecho</b> = se surpasser, donner le meilleur de soi.<br>8. <b>Echar horas extras</b> = faire des heures supplémentaires (aussi : <i>hacer horas extra</i>).<br>9. <b>Ponerse las pilas</b> = se mettre au boulot, s'activer (familier, courant en Amérique latine).<br>10. <b>Trabajar como un burro</b> = trimer, travailler comme une bête (familier).<br>À part : <b>aprender de memoria</b> = apprendre par cœur (pas « de corazón ») ; <b>estar de prácticas</b> = être en stage (expression simple, sans image).<br><br><b>✍️ Expression écrite — ta journée type (4 lignes)</b> Utilise : <b>trabajo en…, estudio…, empiezo a las…, termino a las…, por la mañana / tarde / noche</b>. Modèle : « Me llamo Thomas y soy estudiante. Estudio en la universidad por la mañana. Por la tarde trabajo en una tienda y empiezo a las tres. Termino a las ocho de la noche. » Version formelle (présentation à un directeur) : « Buenos días, señor. Soy Thomas Dubois y soy estudiante. Trabajo en una tienda por la tarde. » Vérifie : terminaisons -AR / -ER / -IR · empiezo (e → ie) · a las + nombre · pas d'article devant le métier.<br><br><b>🗣️ Expression orale — présentation pro</b> Question : « ¿A qué te dedicas? » → « Soy …, trabajo en …, empiezo a las … y termino a las … de lunes a viernes. » En formel : « ¿A qué se dedica usted? » → « Me dedico a … Trabajo en … por la mañana. »<br><br><b>📄 Fiche récap</b> -AR : -o, -as, -a, -amos, -áis, -an · -ER : -o, -es, -e, -emos, -éis, -en · -IR : -o, -es, -e, -imos, -ís, -en · empezar : empiezo, empiezas, empieza, empezamos, empezáis, empiezan · hacer : hago, haces, hace, hacemos, hacéis, hacen · ¿A qué te dedicas? / ¿A qué se dedica usted? · ¿Dónde trabajas? / ¿Dónde trabaja usted? · ¿Qué estudias? / ¿Qué estudia usted? · a las ocho · a la una · por la mañana / tarde / noche · de lunes a viernes · métiers : -o/-a, + a, -e invariable, el jefe / la jefa."},
 NEXT_PREVIEW:"A1.11 (La hora y el tiempo) : dire l'heure complète (¿Qué hora es? Son las tres), les jours de la semaine, les mois et les dates, et décrire la météo avec hacer (hace calor), estar (está nublado) et les verbes llover / nevar (llueve, nieva).",
 META:{vocabTitle:"Trabajo y estudios : métiers, études et journée de travail (A1.10)", lectureTitle:"Elena, ingénieure à Madrid", bilanTitle:"Bravo, tu sais parler de ton travail et de tes études !", pronLabel:"Trabajo : j = kh, g + e = kh, ie, « reu » et la ñ", todayLede:"dire ce que tu fais, demander le métier avec ¿A qué te dedicas? (tutoiement ET vouvoiement), conjuguer les trois familles de verbes -AR, -ER, -IR, utiliser empezar et hacer, et donner tes horaires avec a las, por la mañana et de lunes a viernes"}
};
})();


// A1.11 — La hora y el tiempo : météo (hacer / estar / llover-nevar), heure avec SER, jours, mois, saisons, date (leçon 211)
(function(){
var MAP = {};
function blk(name, rows){ rows.forEach(function(r){ MAP[r[0]] = [r[4], r[5], r[6]]; }); return __esB(name, rows); }
// ligne = [terme, API, français, note, emoji, exemple ES, exemple FR]
var V = [].concat(
 blk("Météo : les mots du ciel", [
  ["el tiempo","/el ˈtjempo/","le temps qu'il fait ; le temps qui passe","Piège : un seul mot pour la météo ET pour la durée. ¿Qué tiempo hace? = quel temps fait-il ? ; No tengo tiempo = je n'ai pas le temps. En Amérique latine on dit souvent « el clima » pour la météo. TIEM-po.","🌦️","¿Qué tiempo hace hoy?","Quel temps fait-il aujourd'hui ?"],
  ["el clima","/el ˈklima/","le climat ; la météo (Amérique latine)","Plus large que « el tiempo » : le climat d'une région. En Colombie et au Mexique, on demande souvent « ¿Qué clima hace? ». KLI-ma.","🌍","El clima de Bogotá es templado.","Le climat de Bogotá est tempéré."],
  ["el sol","/el sol/","le soleil","Nom masculin. « Hace sol » = il fait soleil / il y a du soleil. Le o est un « o » fermé, le l est net comme en français.","☀️","El sol es amarillo.","Le soleil est jaune."],
  ["la lluvia","/la ˈʝuβja/","la pluie","Nom féminin. ll = « y » : YU-bia. Ne dis pas « hace lluvia » : on dit « llueve ».","🌧️","La lluvia es fría.","La pluie est froide."],
  ["la nieve","/la ˈnjeβe/","la neige","Nom féminin. v = b : NIE-be. Le verbe correspondant est « nevar » (nieva).","❄️","La nieve es blanca.","La neige est blanche."],
  ["el viento","/el ˈbjento/","le vent","Nom masculin. v = b : BIEN-to. « Hace viento » = il y a du vent.","💨","El viento es frío.","Le vent est froid."],
  ["la nube","/la ˈnuβe/","le nuage","Nom FÉMININ (comme « la nuit »). Le contraire d'un ciel « despejado » (dégagé). NU-be.","☁️","La nube es gris.","Le nuage est gris."],
  ["el cielo","/el ˈθjelo/","le ciel","c devant e = th en Espagne (THIE-lo), s en Amérique latine (SIE-lo). Pluriel : los cielos.","🌌","El cielo es azul.","Le ciel est bleu."],
  ["la temperatura","/la tempeɾaˈtuɾa/","la température","Féminin, mot transparent. Accent sur TU : tem-pe-ra-TU-ra.","🌡️","La temperatura es de veinte grados.","La température est de vingt degrés."],
  ["los grados","/los ˈɡɾaðos/","les degrés (°C)","Toujours au pluriel avec un nombre : treinta grados. L'Espagne et l'Amérique latine utilisent les degrés Celsius, comme la France. GRA-dos.","🔢","Estamos a treinta grados.","Il fait trente degrés (littéralement : nous sommes à trente degrés)."],
  ["bajo cero","/ˈbaxo ˈθeɾo/","sous zéro","« cinco grados bajo cero » ou « menos cinco grados » = -5 °C. j = kh : BA-kho. Deux façons équivalentes de dire une température négative.","🧊","Hace cinco grados bajo cero.","Il fait moins cinq degrés."]
 ]),
 blk("Météo famille 1 : HACER + nom (« ça fait… »)", [
  ["hace sol","/ˈaθe sol/","il fait soleil, il y a du soleil","HACER impersonnel + nom : on traduit « il fait / il y a ». h muette ; c = th en Espagne (A-the), s en Amérique latine (A-se). Toujours « hace », jamais « hacen ».","🌞","Hoy hace sol en Madrid.","Aujourd'hui il y a du soleil à Madrid."],
  ["hace frío","/ˈaθe ˈfɾio/","il fait froid","Accent écrit sur le í : FRÍ-o. Le froid de l'air, pas ta sensation (« tengo frío »).","🥶","En invierno hace frío.","En hiver il fait froid."],
  ["hace calor","/ˈaθe kaˈloɾ/","il fait chaud","Le r final est doux. Ne dis pas « es calor » : un nom météo prend hacer, pas ser.","🥵","En Colombia hace calor.","En Colombie il fait chaud."],
  ["hace viento","/ˈaθe ˈbjento/","il y a du vent","Pour le vent, on dit « hace viento », pas « está ventoso » (qui est possible mais moins courant).","🌬️","Hoy hace viento.","Aujourd'hui il y a du vent."],
  ["hace fresco","/ˈaθe ˈfɾesko/","il fait frais","Entre « frío » et « templado » : une fraîcheur agréable, par exemple le soir. FRES-ko.","🍃","Por la noche hace fresco.","Le soir il fait frais."],
  ["hace buen tiempo","/ˈaθe ˈbwen ˈtjempo/","il fait beau","bueno devient « buen » devant un nom masculin singulier : buen tiempo.","😎","Mañana hace buen tiempo.","Demain il fait beau."],
  ["hace mal tiempo","/ˈaθe mal ˈtjempo/","il fait mauvais","malo devient « mal » devant un nom masculin singulier : mal tiempo. Le contraire de « buen tiempo ».","⛈️","Hoy hace mal tiempo.","Aujourd'hui il fait mauvais."],
  ["hace mucho calor · frío","/ˈaθe ˈmutʃo/","il fait très chaud / très froid","Devant un NOM on met « mucho » (invariable), jamais « muy » : hace mucho calor, hace mucho frío, hace mucho sol, hace mucho viento. « Hace muy calor » est une faute.","🔥","En agosto hace mucho calor.","En août il fait très chaud."],
  ["hace treinta grados","/ˈaθe ˈtɾeinta ˈɡɾaðos/","il fait 30 degrés","On donne la température avec « hace + nombre + grados ». treinta = 30 (accent sur TREIN). Un nombre de 0 à 100 suffit.","🌡️","Hace treinta grados en Valencia.","Il fait trente degrés à Valence."],
  ["¿Qué tiempo hace?","/ke ˈtjempo ˈaθe/","quel temps fait-il ?","La question qui ouvre toute conversation météo. Neutre : elle convient à un ami comme à un inconnu (tú ET usted). Amérique latine : « ¿Qué clima hace? ».","❓","¿Qué tiempo hace en Sevilla?","Quel temps fait-il à Séville ?"],
  ["tengo frío · tengo calor","/ˈtenɡo ˈfɾio/","j'ai froid · j'ai chaud","Ta sensation à toi : TENER (vu en A1.0), comme « tengo hambre ». ≠ « hace frío » (le temps dehors). Tutoiement : ¿Tienes frío? Vouvoiement : ¿Tiene frío, señora?","🧣","Tengo frío, pero hace sol.","J'ai froid, mais il y a du soleil."]
 ]),
 blk("Météo famille 2 : ESTAR + adjectif ou gérondif", [
  ["está nublado","/esˈta nuˈβlaðo/","le ciel est couvert, il y a des nuages","ESTAR + adjectif : l'état du ciel en ce moment. Ici l'adjectif reste au masculin (le « il » est vide). Accent écrit sur está.","☁️","Hoy está nublado.","Aujourd'hui le ciel est couvert."],
  ["está despejado","/esˈta despeˈxaðo/","le ciel est dégagé","Le contraire de « está nublado ». j = kh : des-pe-KHA-do. Très utilisé dans les bulletins météo.","🌤️","Mañana está despejado.","Demain le ciel est dégagé."],
  ["soleado","/soleˈaðo/","ensoleillé","Adjectif : un día soleado, una tarde soleada (il s'accorde avec le nom). « Está soleado » = « hace sol ».","🌞","Hoy es un día soleado.","Aujourd'hui est une journée ensoleillée."],
  ["lluvioso","/ʝuˈβjoso/","pluvieux","Adjectif : un día lluvioso, una semana lluviosa. Plus fréquent avec « día / mes / semana » que seul. ll = y.","🌦️","Octubre es un mes lluvioso.","Octobre est un mois pluvieux."],
  ["nublado","/nuˈβlaðo/","nuageux","Adjectif issu de « nube ». un cielo nublado, una mañana nublada. d entre voyelles très doux : nu-BLA-do.","🌥️","Es una mañana nublada.","C'est une matinée nuageuse."],
  ["ventoso","/benˈtoso/","venteux","Adjectif issu de « viento » : un día ventoso, una tarde ventosa. ven-TO-so.","🌪️","Hoy es un día ventoso.","Aujourd'hui est une journée venteuse."],
  ["nevado","/neˈβaðo/","enneigé, neigeux","Souvent avec « estar » pour un lieu : las montañas están nevadas (accord au pluriel féminin).","🏔️","Las montañas están nevadas.","Les montagnes sont enneigées."],
  ["templado","/temˈplaðo/","tempéré, doux","Ni chaud ni froid : un clima templado, un día templado. Temps agréable de 15 à 22 degrés environ.","🌤️","El clima es templado en primavera.","Le climat est doux au printemps."],
  ["el calor · el frío","/el kaˈloɾ/ · /el ˈfɾio/","la chaleur · le froid","Noms masculins. Ne les confonds pas avec « hace calor / hace frío » (verbe + nom). On les emploie avec gustar : no me gusta el calor.","🌡️","No me gusta el calor, pero me gusta el frío.","Je n'aime pas la chaleur, mais j'aime le froid."],
  ["está lloviendo","/esˈta ʝoˈβjendo/","il pleut (en ce moment)","ESTAR + gérondif (A1.8) : llover → lloviendo. Action en cours : tu la vois par la fenêtre. Pour le fait général : « llueve ».","☔","Ahora está lloviendo en Bogotá.","En ce moment il pleut à Bogotá."],
  ["está nevando","/esˈta neˈβando/","il neige (en ce moment)","ESTAR + gérondif : nevar → nevando (régulier). Même nuance : « nieva » = en général, « está nevando » = maintenant.","🌨️","Está nevando en la montaña.","Il neige sur la montagne."]
 ]),
 blk("Météo famille 3 : verbes autonomes", [
  ["llover","/ʝoˈβeɾ/","pleuvoir","Verbe en -er, radical o → ue : il pleut = LLUEVE. Seule la 3e personne du singulier existe pour la météo (pas de « il »). ll = y.","🌧️","En Bilbao llueve mucho.","À Bilbao il pleut beaucoup."],
  ["nevar","/neˈβaɾ/","neiger","Verbe en -ar, radical e → ie : il neige = NIEVA (comme preferir → prefiero, A1.5). Seulement à la 3e personne du singulier.","🌨️","En los Pirineos nieva en invierno.","Dans les Pyrénées il neige en hiver."]
 ]),
 blk("L'heure avec SER", [
  ["la hora","/la ˈoɾa/","l'heure","Féminin ; h muette : O-ra. « la hora » = l'heure qu'il est ; « el tiempo » = la durée. Pluriel : las horas.","⏰","La hora es importante.","L'heure est importante."],
  ["¿Qué hora es?","/ke ˈoɾa es/","quelle heure est-il ?","La question standard avec SER (singulier : « es »). Poli : « Perdone, ¿qué hora es? » (usted) ; amical : « Perdona, ¿qué hora es? » (tú).","🕒","Perdone, ¿qué hora es?","Excusez-moi, quelle heure est-il ?"],
  ["¿Tienes hora? · ¿Tiene hora?","/ˈtjenes ˈoɾa/","as-tu l'heure ? · auriez-vous l'heure ?","Tutoiement : ¿Tienes hora? Vouvoiement : ¿Tiene hora, por favor? En Amérique latine, on entend souvent « ¿Qué hora tiene? ».","⌚","¿Tiene hora, por favor?","Auriez-vous l'heure, s'il vous plaît ?"],
  ["es la una","/es la ˈuna/","il est une heure","SINGULIER : « es » car il n'y a qu'une heure. Aussi : es la una y media, es la una menos cuarto.","1️⃣","Es la una y media.","Il est une heure et demie."],
  ["son las tres","/son las ˈtɾes/","il est trois heures","PLURIEL pour toutes les autres heures : son las dos, son las tres… son las doce. L'article est « las » (sous-entendu : las horas).","3️⃣","Son las tres de la tarde.","Il est trois heures de l'après-midi."],
  ["y cuarto","/i ˈkwaɾto/","et quart","Jusqu'à la demie on AJOUTE avec « y » : y cuarto (+15), y media (+30), y diez, y veinte… cuarto = quart (un quart d'heure).","🕒","Son las cuatro y cuarto.","Il est quatre heures et quart."],
  ["y media","/i ˈmeðja/","et demie","media est féminin (la hora). Jamais « y medio ». Exemple : 12 h 30 = « son las doce y media » ; 1 h 30 = « es la una y media ».","🕟","Son las ocho y media.","Il est huit heures et demie."],
  ["menos cuarto","/ˈmenos ˈkwaɾto/","moins le quart","Après la demie, on prend l'heure SUIVANTE et on RETRANCHE avec « menos » : 2 h 45 = « las tres menos cuarto ». Pas d'article devant cuarto.","🕞","Son las tres menos cuarto.","Il est trois heures moins le quart (2 h 45)."],
  ["y diez · y veinte · y veinticinco","/i ˈdjeθ/","et dix · et vingt · et vingt-cinq","Minutes jusqu'à la demie : on dit simplement le nombre. 5 = y cinco, 10 = y diez, 20 = y veinte, 25 = y veinticinco. Pas de mot pour « minutes ».","🔟","Son las nueve y veinte.","Il est neuf heures vingt."],
  ["menos diez · menos veinte · menos veinticinco","/ˈmenos ˈdjeθ/","moins dix · moins vingt · moins vingt-cinq","Après la demie : 3 h 35 = « las cuatro menos veinticinco » ; 3 h 50 = « las cuatro menos diez ». Toujours l'heure qui vient.","🕢","Son las cinco menos diez.","Il est cinq heures moins dix (4 h 50)."],
  ["en punto","/en ˈpunto/","pile, précises","Se place APRÈS l'heure : son las ocho en punto = huit heures pile. Pour l'heure d'un rendez-vous.","🎯","La reunión es a las nueve en punto.","La réunion est à neuf heures précises."],
  ["mediodía · medianoche","/meðjoˈðia/ · /meðjaˈnotʃe/","midi · minuit","Sans « las » ni « la » : es mediodía, es medianoche. mediodía : accent sur DÍ. Spain : on déjeune vers 14 h.","🌗","Es mediodía y tengo hambre.","Il est midi et j'ai faim."],
  ["de la mañana · de la tarde · de la noche","/de la maˈɲana/","du matin · de l'après-midi · du soir","Avec une HEURE PRÉCISE : son las ocho de la mañana, las tres de la tarde, las diez de la noche. Sans heure précise, on utilise « por la ».","🌅","Son las diez de la noche.","Il est dix heures du soir."],
  ["a las ocho · a la una","/a las ˈotʃo/","à huit heures · à une heure","« À + heure » : a las ocho, a las tres, mais a LA una (singulier). Déjà vu en A1.10 avec les horaires de travail.","📅","Empiezo a las ocho.","Je commence à huit heures."],
  ["¿A qué hora…?","/a ke ˈoɾa/","à quelle heure… ?","On répond avec « a las… ». Tutoiement : ¿A qué hora empiezas? Vouvoiement : ¿A qué hora empieza usted? (empezar : e → ie).","❓","¿A qué hora empieza la clase?","À quelle heure commence le cours ?"],
  ["las quince treinta (15:30)","/las ˈkinθe ˈtɾeinta/","quinze heures trente","Horaires officiels (trains, avions, cinéma) : on lit les nombres tels quels, sans « y media ». Utile à connaître pour un billet.","🚆","El tren es a las quince treinta.","Le train est à quinze heures trente."],
  ["el reloj","/el reˈlox/","la montre, l'horloge","r initial roulé ; j final = kh doux. Pluriel : los relojes. « ¿Tienes reloj? » = as-tu une montre ?","⌚","El reloj es nuevo.","La montre est neuve."],
  ["el minuto","/el miˈnuto/","la minute","Masculin. Rarement dit dans l'heure : on dit « y diez » plutôt que « diez minutos ». mi-NU-to.","⏱️","Tengo cinco minutos.","J'ai cinq minutes."]
 ]),
 blk("Moments de la journée", [
  ["por la mañana","/poɾ la maˈɲana/","le matin","Sans heure précise : Trabajo por la mañana. Avec heure : « las ocho de la mañana ». ñ = gn : ma-GNA-na.","🌅","Trabajo por la mañana.","Je travaille le matin."],
  ["por la tarde","/poɾ la ˈtaɾðe/","l'après-midi (jusqu'au soir)","En Espagne la tarde commence après le déjeuner (vers 14-15 h) et dure jusqu'à la nuit. Ne la confonds pas avec l'adverbe « tarde » (tard).","🌇","Estudio por la tarde.","J'étudie l'après-midi."],
  ["por la noche","/poɾ la ˈnotʃe/","le soir, la nuit","« noche » couvre le soir ET la nuit (on dit « buenas noches » dès le soir). ch = tch : NO-tche.","🌙","Por la noche hace fresco.","Le soir il fait frais."],
  ["temprano","/temˈpɾano/","tôt","Adverbe invariable : « Es temprano » = il est tôt. Contraire : « tarde » (tard).","🐓","Es temprano: son las seis.","Il est tôt : il est six heures."],
  ["tarde","/ˈtaɾðe/","tard (adverbe) ; l'après-midi (nom)","Piège : adverbe invariable « Es tarde » (il est tard) ET nom féminin « la tarde » (l'après-midi). Le contexte (la / es) te dit lequel.","🌆","Es tarde: son las once.","Il est tard : il est onze heures."],
  ["pronto","/ˈpɾonto/","bientôt ; tôt (Espagne)","Utile dans « ¡Hasta pronto! » (à bientôt). En Espagne aussi : « llegar pronto » = arriver tôt. Amérique latine : on préfère « temprano ».","🔜","¡Hasta pronto!","À bientôt !"],
  ["de madrugada","/de maðɾuˈɣaða/","au petit matin (de 1 h à 6 h)","« madrugada » = la partie de la nuit juste avant l'aube. Avec une heure : « las cuatro de la madrugada ». ma-dru-GA-da.","🌌","Son las cuatro de la madrugada.","Il est quatre heures du matin."]
 ]),
 blk("Repères de temps : hier, aujourd'hui, demain", [
  ["ayer","/aˈʝeɾ/","hier","Mot repère à connaître tel quel. Pour raconter ce qu'on a FAIT hier, l'espagnol utilise des temps du passé qui viennent plus tard : ici on emploie « ayer » seulement sans verbe conjugué.","⏪","Hoy es martes; ayer, lunes.","Aujourd'hui c'est mardi ; hier, lundi."],
  ["hoy","/oi/","aujourd'hui","h muette : « oi ». Un des mots les plus fréquents : hoy hace sol, hoy es lunes. Aussi : « hoy en día » = de nos jours.","📍","Hoy hace sol.","Aujourd'hui il fait soleil."],
  ["mañana","/maˈɲana/","demain ; le matin","Piège : « mañana » = demain ET matin (la mañana). « Mañana por la mañana » = demain matin. ñ = gn.","⏩","Mañana hace buen tiempo.","Demain il fait beau."],
  ["pasado mañana","/paˈsaðo maˈɲana/","après-demain","Littéralement « demain passé ». Se dit en bloc : pasado mañana, viernes.","⏭️","Hoy es miércoles; pasado mañana es viernes.","Aujourd'hui c'est mercredi ; après-demain c'est vendredi."],
  ["esta noche","/ˈesta ˈnotʃe/","ce soir, cette nuit","« esta » (ce/cette, A1.7) devant noche. esta noche = la nuit qui vient (ce soir).","🌃","Esta noche hace fresco.","Ce soir il fait frais."],
  ["la semana que viene","/la seˈmana ke ˈbjene/","la semaine prochaine","Littéralement « la semaine qui vient ». Variante équivalente : « la próxima semana ». Avec le futur proche : « La semana que viene vamos a viajar » (ir a + infinitif, A1.9).","📆","La semana que viene vamos a viajar.","La semaine prochaine nous allons voyager."],
  ["la semana pasada","/la seˈmana paˈsaða/","la semaine dernière","Littéralement « la semaine passée ». Adjectif accordé : pasada (féminin) avec semana. Ici, à employer sans verbe conjugué.","📅","La semana pasada, mucha lluvia en Bilbao.","La semaine dernière, beaucoup de pluie à Bilbao."],
  ["el mes pasado","/el mes paˈsaðo/","le mois dernier","Mois = masculin : pasado (et non « pasada »). Mot repère à retenir en bloc, sans conjuguer au passé pour l'instant.","🗓️","El mes pasado, septiembre; este mes, octubre.","Le mois dernier, septembre ; ce mois-ci, octobre."],
  ["el mes que viene","/el mes ke ˈbjene/","le mois prochain","Même structure que « la semana que viene ». Parfait avec « voy a » : El mes que viene voy a trabajar en Madrid.","➡️","El mes que viene voy a trabajar en Madrid.","Le mois prochain je vais travailler à Madrid."],
  ["el año que viene","/el ˈaɲo ke ˈbjene/","l'année prochaine","año : ñ = gn (A-gno) ; attention, sans le tilde « ano » a un autre sens (vulgaire). Ne l'oublie jamais.","🎆","El año que viene vamos a viajar a Colombia.","L'année prochaine nous allons voyager en Colombie."]
 ]),
 blk("Jours, mois, saisons et date", [
  ["lunes · martes · miércoles · jueves","/ˈlunes ˈmaɾtes ˈmjeɾkoles ˈxweβes/","lundi · mardi · mercredi · jeudi","Jamais de majuscule. Masculins. Accent écrit sur MIÉRcoles. j = kh : KHUE-bes. Le lundi est le premier jour de la semaine.","📅","El lunes, el martes y el miércoles trabajo.","Lundi, mardi et mercredi je travaille."],
  ["viernes · sábado · domingo","/ˈbjeɾnes ˈsaβaðo doˈmiŋɡo/","vendredi · samedi · dimanche","Accent écrit sur SÁbado. Pluriel : los viernes (invariable) mais los sábados, los domingos.","🎉","El sábado y el domingo no trabajo.","Le samedi et le dimanche je ne travaille pas."],
  ["el lunes · los lunes","/el ˈlunes/ · /los ˈlunes/","lundi (ce lundi) · tous les lundis","« el lunes » = ce lundi précis (le prochain). « los lunes » = chaque lundi (habitude). Il n'y a pas de « en » devant : on dit « el lunes », pas « en lunes ».","🔁","El lunes voy a la oficina; los lunes empiezo a las nueve.","Lundi je vais au bureau ; les lundis je commence à neuf heures."],
  ["el fin de semana","/el fin de seˈmana/","le week-end","Invariable. « este fin de semana » = ce week-end. « de lunes a viernes » = du lundi au vendredi.","🏖️","El fin de semana hace buen tiempo.","Le week-end il fait beau."],
  ["el día","/el ˈdia/","le jour, la journée","Nom MASCULIN malgré le -a final (el día, comme el mapa). Pluriel : los días. Buenos días.","☀️","Es un día soleado.","C'est une journée ensoleillée."],
  ["la semana","/la seˈmana/","la semaine","Féminin. Une semaine = siete días. « esta semana » = cette semaine.","🗓️","Esta semana hace frío.","Cette semaine il fait froid."],
  ["el mes","/el mes/","le mois","Masculin, pluriel : los meses (le -es de la consonne finale). « este mes » = ce mois-ci.","📆","Este mes llueve mucho.","Ce mois-ci il pleut beaucoup."],
  ["el año","/el ˈaɲo/","l'année, l'an","ñ = gn. « tengo veinte años » = j'ai vingt ans (âge avec tener, A1.0). L'année se lit en entier : 2026 = dos mil veintiséis.","🎂","Tengo treinta años.","J'ai trente ans."],
  ["¿Qué día es hoy?","/ke ˈdia es oi/","quel jour sommes-nous ? (quel jour de la semaine)","Réponse : « Hoy es jueves. » Verbe SER, singulier. Neutre : convient en tú ET en usted.","❓","¿Qué día es hoy? — Hoy es jueves.","Quel jour sommes-nous ? — Aujourd'hui c'est jeudi."],
  ["Hoy es lunes 3 de octubre","/oi es ˈlunes tɾes de okˈtuβɾe/","aujourd'hui c'est lundi 3 octobre","Structure : Hoy es + jour + nombre + DE + mois. Nombres cardinaux (sauf le 1er : « el primero de mayo », ou « el uno de mayo »). Écriture 03/10 = jour/mois.","📌","Hoy es jueves 1 de octubre.","Aujourd'hui c'est jeudi 1er octobre."],
  ["la fecha","/la ˈfetʃa/","la date","« ¿Qué fecha es hoy? » ou « ¿Cuál es la fecha de hoy? » (demande le jour du mois). En Espagne : « ¿A cuántos estamos? » → « Estamos a tres de octubre ».","🗒️","La fecha de hoy es el 1 de octubre.","La date d'aujourd'hui est le 1er octobre."],
  ["enero · febrero · marzo","/eˈneɾo feˈβɾeɾo ˈmaɾθo/","janvier · février · mars","Pas de majuscule, masculins. En marzo : « en » devant un mois (en enero). marzo : z = th (Espagne) / s (Amérique latine).","❄️","En enero hace frío.","En janvier il fait froid."],
  ["abril · mayo · junio","/aˈβɾil ˈmajo ˈxunjo/","avril · mai · juin","mayo : y = « ill » : MA-yo. junio : j = kh : KHU-nio. Printemps espagnol : températures agréables.","🌸","En mayo hace buen tiempo.","En mai il fait beau."],
  ["julio · agosto · septiembre","/ˈxuljo aˈɣosto sepˈtjembɾe/","juillet · août · septembre","septiembre se prononce avec le p : sep-TIEM-bre (aussi écrit « setiembre » en Amérique latine). En agosto, forte chaleur en Espagne.","🏖️","En agosto hace mucho calor.","En août il fait très chaud."],
  ["octubre · noviembre · diciembre","/okˈtuβɾe noˈβjembɾe diˈθjembɾe/","octobre · novembre · décembre","En diciembre : c devant i = th (Espagne). Même base que « octobre » en français, mais « -bre ».","🍂","En noviembre llueve mucho.","En novembre il pleut beaucoup."],
  ["la primavera · el verano","/la pɾimaˈβeɾa/ · /el beˈɾano/","le printemps · l'été","On dit « en primavera », « en verano » (sans article). Sauf précision, ces saisons suivent l'hémisphère nord (Espagne, Colombie : dépend de l'altitude).","🌷","En verano hace mucho calor.","En été il fait très chaud."],
  ["el otoño · el invierno","/el oˈtoɲo/ · /el imˈbjeɾno/","l'automne · l'hiver","En otoño, en invierno. otoño : ñ = gn. En Colombie, « invierno » désigne la saison des pluies, pas forcément le froid ; en Argentine, c'est de juin à août.","🍁","En invierno nieva en los Pirineos.","En hiver il neige dans les Pyrénées."]
 ])
);

LESSONS_ES[211] = {
 code:"A1.11", level:"A1",
 VOCAB: V,
 MEM_WORDS: __esIdx(V, ["el tiempo","hace calor","hace mucho calor · frío","está nublado","llover","¿Tienes hora? · ¿Tiene hora?","menos cuarto","de la mañana · de la tarde · de la noche","mañana","Hoy es lunes 3 de octubre"]),
 MINI_CHECKS: [
  {q:"« Il fait chaud. »", opts:["Hace calor.","Es calor.","Tiene calor."], correct:0, fb:"HACER impersonnel + nom : hace calor. « Tiene calor » = une PERSONNE a chaud ; « es calor » n'existe pas."},
  {q:"« J'ai froid. » (c'est ce que je ressens)", opts:["Hace frío.","Tengo frío."], correct:1, fb:"Une sensation personnelle se dit avec TENER (comme tengo hambre). « Hace frío » décrit la météo dehors."},
  {q:"« Il pleut. »", opts:["Llueve.","Hace llueve.","Está llueve."], correct:0, fb:"llover est un verbe autonome (o → ue) : llueve. Pas de « il » ni de hacer."},
  {q:"« Il est en train de neiger. »", opts:["Está nevando.","Está nieva.","Hace nieve."], correct:0, fb:"ESTAR + gérondif : nevar → nevando. « Está nieva » est impossible : après estar il faut le gérondif."},
  {q:"« Il est une heure. »", opts:["Es la una.","Son las una."], correct:0, fb:"Il n'y a qu'UNE heure : singulier « es la una ». Pluriel à partir de deux : son las dos."},
  {q:"« Il est huit heures. »", opts:["Es las ocho.","Son las ocho."], correct:1, fb:"huit heures = pluriel : son las ocho. « Es » s'emploie seulement avec la una, mediodía, medianoche."},
  {q:"Pour demander l'heure à un client que tu vouvoies :", opts:["¿Tienes hora?","¿Tiene hora, por favor?"], correct:1, fb:"Vouvoiement = usted + tiene. « Tienes » est le tutoiement."},
  {q:"« Hier » en espagnol :", opts:["ayer","mañana","hoy"], correct:0, fb:"ayer = hier, hoy = aujourd'hui, mañana = demain (mais aussi « matin », attention au contexte)."}
 ],
 ROUNDS: [
  __esR("Hoy hace mucho calor.","Aujourd'hui il fait très chaud."),
  __esR("¿Qué tiempo hace en Madrid?","Quel temps fait-il à Madrid ?"),
  __esR("Está lloviendo y hace viento.","Il pleut et il y a du vent."),
  __esR("Mañana hace buen tiempo en Sevilla.","Demain il fait beau à Séville."),
  __esR("En los Pirineos nieva mucho en invierno.","Dans les Pyrénées il neige beaucoup en hiver."),
  __esR("Son las tres y media de la tarde.","Il est trois heures et demie de l'après-midi."),
  __esR("Es la una menos cuarto.","Il est une heure moins le quart."),
  __esR("¿Tiene hora, por favor?","Auriez-vous l'heure, s'il vous plaît ?"),
  __esR("¿A qué hora empieza la clase?","À quelle heure commence le cours ?"),
  __esR("Hoy es lunes tres de octubre.","Aujourd'hui c'est lundi trois octobre."),
  __esR("La semana que viene vamos a viajar.","La semaine prochaine nous allons voyager."),
  __esR("Trabajo a las nueve por la mañana.","Je travaille à neuf heures le matin."),
  __esR("Hace treinta grados en Valencia.","Il fait trente degrés à Valence.")
 ],
 QUIZ: [
  {cat:"ecrit", q:"« Il fait froid. »", opts:["Hace frío.","Es frío.","Está frío."], correct:0, why:"Le froid de l'air = HACER + nom : hace frío. « Está frío » se dit d'un objet (la sopa está fría)."},
  {cat:"ecrit", q:"En Valencia ___ calor en agosto.", opts:["hace","es","tiene"], correct:0, why:"Chaleur d'un lieu = HACER impersonnel, 3e personne du singulier : hace calor."},
  {cat:"ecrit", q:"Hoy ___ nublado.", opts:["hace","está","llueve"], correct:1, why:"nublado est un adjectif : ESTAR + adjectif (está nublado). Avec un nom on aurait hacer : hace sol."},
  {cat:"ecrit", q:"« Il pleut beaucoup à Bilbao. »", opts:["Llueve mucho en Bilbao.","Llove mucho en Bilbao.","Hace lluvia mucho en Bilbao."], correct:0, why:"llover : o → ue (llueve). « Llove » oublie la diphtongue ; « hace lluvia » n'existe pas."},
  {cat:"ecrit", q:"Hace ___ calor en agosto. (très)", opts:["muy","mucho","mucha"], correct:1, why:"Devant un NOM on emploie « mucho », invariable : hace mucho calor. « Muy » se met devant un adjectif ou un adverbe."},
  {cat:"ecrit", q:"« Il neige. »", opts:["Nieva.","Nevea.","Hace nieve."], correct:0, why:"nevar : e → ie. Il neige = nieva. Comme pour llover, pas de hacer ni de sujet."},
  {cat:"ecrit", q:"« Il est une heure. »", opts:["Son la una.","Es la una.","Es las una."], correct:1, why:"Une seule heure : « es la una », singulier avec « la ». Dès deux heures : son las dos."},
  {cat:"ecrit", q:"« Il est trois heures et demie. »", opts:["Son las tres y media.","Es las tres y media.","Son las tres media."], correct:0, why:"Pluriel (las tres) + « y media » (media est féminin et précédé de y)."},
  {cat:"ecrit", q:"Quelle phrase dit 1 h 45 ?", opts:["Son las dos menos cuarto.","Son las dos y cuarto.","Son las tres menos cuarto."], correct:0, why:"Après la demie : heure SUIVANTE (las dos) + menos cuarto = 1 h 45. « Y cuarto » = 2 h 15 ; « las tres menos cuarto » = 2 h 45."},
  {cat:"ecrit", q:"Pour demander l'heure à un inconnu âgé :", opts:["¿Tienes hora?","¿Tiene hora, por favor?"], correct:1, why:"Inconnu âgé = usted : tiene. « Tienes » est réservé au tutoiement."},
  {cat:"ecrit", q:"Hoy ___ lunes 3 de octubre.", opts:["es","está","tiene"], correct:0, why:"Le jour et la date se disent avec SER : Hoy es lunes. Pas d'estar ni de tener."},
  {cat:"ecrit", q:"« Septembre » en espagnol :", opts:["septiembre","setembre","septembro"], correct:0, why:"septiembre garde le p et prend ie : sep-TIEM-bre. Pas de majuscule en espagnol."},
  {cat:"ecrit", q:"« Je travaille tous les lundis. »", opts:["Trabajo los lunes.","Trabajo el lunes.","Trabajo en lunes."], correct:0, why:"« los lunes » = chaque lundi (habitude). « El lunes » = ce lundi précis. « En lunes » n'existe pas."},
  {cat:"ecrit", q:"« À huit heures du matin. »", opts:["a las ocho de la mañana","a las ocho por la mañana","en las ocho de la mañana"], correct:0, why:"Avec une heure précise on dit « de la mañana » ; « por la mañana » s'emploie sans heure. Et « a las » (pas « en »)."},
  {cat:"oral", audio:"Hoy hace mucho frío en Madrid.", q:"Écoute : quel temps fait-il à Madrid ?", opts:["Très froid","Très chaud","Il pleut"], correct:0, why:"« hace mucho frío » = il fait très froid. « mucho » devant frío (nom)."},
  {cat:"oral", audio:"Son las cuatro y media.", q:"Écoute : quelle heure est-il ?", opts:["4 h 30","3 h 30","4 h 15"], correct:0, why:"las cuatro y media = 4 h 30. Ne confonds pas avec cuarto (= 15 minutes)."},
  {cat:"oral", audio:"Está lloviendo y hace viento.", q:"Écoute : que se passe-t-il dehors ?", opts:["Il pleut et il y a du vent","Il neige et il fait froid","Il fait soleil et chaud"], correct:0, why:"está lloviendo = il pleut (en ce moment) ; hace viento = il y a du vent."},
  {cat:"oral", audio:"¿Tiene hora, por favor?", q:"Écoute : la question est…", opts:["informelle (tutoiement)","formelle (vouvoiement)"], correct:1, why:"« tiene » + « por favor » = vouvoiement (usted). Au tutoiement : ¿Tienes hora?"},
  {cat:"oral", audio:"Hoy es martes doce de noviembre.", q:"Écoute : quelle est la date ?", opts:["Mardi 12 novembre","Mardi 12 octobre","Mercredi 12 novembre"], correct:0, why:"martes = mardi ; doce = 12 ; noviembre = novembre. octubre = octobre (autre mot)."},
  {cat:"comprehension", passage:"¿Qué hora es? Son las tres y media. Hoy en Madrid hace sol, pero hace frío. La semana que viene vamos a viajar a Sevilla. Allí hace calor y hace treinta grados.", q:"Quelle heure est-il ?", opts:["3 h 30","3 h 15","4 h 30"], correct:0, why:"« Son las tres y media » = 3 h 30. « y media » = et demie ; cuarto serait 15 minutes."},
  {cat:"comprehension", passage:"¿Qué hora es? Son las tres y media. Hoy en Madrid hace sol, pero hace frío. La semana que viene vamos a viajar a Sevilla. Allí hace calor y hace treinta grados.", q:"Quel temps fait-il aujourd'hui à Madrid ?", opts:["Il y a du soleil, mais il fait froid","Le ciel est couvert et il fait chaud","Il pleut"], correct:0, why:"« hace sol, pero hace frío » : deux phrases avec hacer reliées par « pero »."},
  {cat:"comprehension", passage:"¿Qué hora es? Son las tres y media. Hoy en Madrid hace sol, pero hace frío. La semana que viene vamos a viajar a Sevilla. Allí hace calor y hace treinta grados.", q:"Que vont-ils faire la semaine prochaine ?", opts:["Voyager à Séville","Rester à Madrid","Travailler à Madrid"], correct:0, why:"« La semana que viene vamos a viajar a Sevilla » : futur proche (ir a + infinitif, A1.9)."},
  {cat:"comprehension", passage:"— Perdone, señora, ¿tiene hora? — Sí, son las nueve menos cuarto. — ¿A qué hora empieza la reunión? — A las nueve en punto. Hoy es jueves 5 de noviembre.", q:"Quelle heure est-il ?", opts:["8 h 45","9 h 15","9 h 45"], correct:0, why:"Après la demie : l'heure suivante (nueve) + menos cuarto = 8 h 45."},
  {cat:"comprehension", passage:"— Perdone, señora, ¿tiene hora? — Sí, son las nueve menos cuarto. — ¿A qué hora empieza la reunión? — A las nueve en punto. Hoy es jueves 5 de noviembre.", q:"À quelle heure commence la réunion ?", opts:["À 9 h pile","À 8 h 45","À 9 h 15"], correct:0, why:"« A las nueve en punto » = à neuf heures précises. Le vouvoiement (perdone, tiene) montre un contexte formel."}
 ],
 PRON_VERBS: [
  {en:"Hace calor.", fr:"Il fait chaud. (h muette ; c = th en Espagne : A-the ka-LOR ; s en Amérique latine)"},
  {en:"La lluvia es fría.", fr:"La pluie est froide. (ll = y : YU-bia ; accent écrit sur FRÍ-a)"},
  {en:"Llueve en Bilbao.", fr:"Il pleut à Bilbao. (diphtongue ue : YUE-be ; v = b)"},
  {en:"Nieva en invierno.", fr:"Il neige en hiver. (diphtongue ie : NIE-ba ; im-BIER-no)"},
  {en:"El viento es frío.", fr:"Le vent est froid. (v = b : BIEN-to ; ie = « yé »)"},
  {en:"Son las doce y media.", fr:"Il est midi et demi. (do-the en Espagne ; s en Amérique latine ; ME-dia)"},
  {en:"Hoy es miércoles.", fr:"Aujourd'hui c'est mercredi. (h muette ; accent écrit : MIÉR-co-les, tonique sur MIÉR)"},
  {en:"Hoy es sábado.", fr:"Aujourd'hui c'est samedi. (accent écrit : SÁ-ba-do, tonique sur la 1re syllabe ; b doux)"},
  {en:"En septiembre y noviembre llueve.", fr:"En septembre et novembre il pleut. (sep-TIEM-bre, no-BIEM-bre ; le p de septiembre se prononce)"},
  {en:"El cielo está despejado.", fr:"Le ciel est dégagé. (c = th : THIE-lo ; j = kh : des-pe-KHA-do)"},
  {en:"Hace treinta grados.", fr:"Il fait trente degrés. (h muette ; TREIN-ta ; gr- : le g est doux devant r)"}
 ],
 READING: [
  "Son las siete y media de la mañana y hace frío en Madrid.",
  "Hoy está nublado y está lloviendo.",
  "Lucía trabaja de lunes a viernes y empieza a las nueve en punto.",
  "Por la tarde, a las cinco y cuarto, termina el trabajo.",
  "Hoy es jueves 1 de octubre.",
  "En otoño llueve mucho, pero en verano hace mucho calor.",
  "Mañana hace buen tiempo: hace sol y hace veinte grados.",
  "El fin de semana vamos a viajar a Sevilla.",
  "Allí hace calor: ¡hace treinta grados!",
  "Perdone, señor, ¿tiene hora? — Sí, son las tres menos cuarto."
 ],
 GLOSS: [
  {en:"de lunes a viernes", fr:"du lundi au vendredi : « de… a… », sans article, sans majuscule"},
  {en:"el fin de semana", fr:"le week-end : invariable, masculin (« el fin », le bout de la semaine)"},
  {en:"allí", fr:"là-bas : adverbe de lieu, accent écrit sur la í"},
  {en:"otoño", fr:"automne : ñ = gn ; on dit « en otoño », sans article"},
  {en:"empieza", fr:"il/elle commence : empezar (e → ie), 3e personne du singulier (A1.10)"},
  {en:"termina", fr:"il/elle termine : terminar, verbe régulier en -ar"},
  {en:"mucho", fr:"beaucoup / très devant un nom : hace mucho calor ; invariable, jamais « muy calor »"},
  {en:"buen tiempo", fr:"beau temps : bueno devient « buen » devant un nom masculin singulier"}
 ],
 GRAMMAR1: {
  heading:"La météo : trois familles (hacer, estar, llover / nevar)",
  lede:"Le français ramène presque tout à « il fait » ou « il pleut ». L'espagnol demande de choisir parmi TROIS familles selon la nature du mot : un NOM → hacer, un ADJECTIF (ou une action en cours) → estar, un phénomène qui a son propre VERBE → llover, nevar.",
  conj:[
   ["yo →","hago","Hago los deberes. (jamais « hago frío » : la météo n'a pas de « je »)"],
   ["tú →","haces","¿Haces los deberes? (pour la météo, on ne dit pas « haces »)"],
   ["él, ella, usted →","hace","Hace calor. / Ella hace los deberes. / ¿Hace usted los deberes?"],
   ["nosotros/as →","hacemos","Hacemos los deberes. (pas de « hacemos frío »)"],
   ["vosotros/as →","hacéis","¿Hacéis los deberes? (Espagne)"],
   ["ellos, ellas, ustedes →","hacen","Hacen los deberes. (la météo ne se met jamais au pluriel)"]
  ],
  ruleHtml:"🌦️ <b>Famille 1 : HACER + nom</b> (« ça fait… »). <b>hace sol · hace frío · hace calor · hace viento · hace fresco · hace buen tiempo · hace mal tiempo</b>. Pour insister : <b>hace mucho</b> calor / frío / sol / viento (devant un nom : mucho, jamais « muy »). Les degrés : <b>hace treinta grados</b>, <b>hace cinco grados bajo cero</b>. Le verbe reste toujours à la 3e personne du singulier : <b>hace</b>, jamais « hacen », « hago ». Le tableau ci-dessus montre toute la conjugaison de hacer, mais pour la météo tu n'utilises qu'une seule forme : <b>hace</b>.<br><br>☁️ <b>Famille 2 : ESTAR + adjectif ou gérondif</b> (l'état du ciel à un moment donné). <b>está nublado · está despejado · está soleado · está lluvioso · está ventoso</b>. L'adjectif reste au masculin (le sujet « il » est vide). Pour une action en cours : <b>está lloviendo · está nevando</b> (gérondif vu en A1.8 : llover → lloviendo, nevar → nevando). Pour décrire un jour entier, l'adjectif s'accorde normalement : <b>un día soleado, una mañana nublada, un mes lluvioso</b>.<br><br>🌧️ <b>Famille 3 : verbes autonomes.</b> <b>llover</b> (o → ue) et <b>nevar</b> (e → ie) se conjuguent seuls, sans sujet : <b>llueve</b> = il pleut, <b>nieva</b> = il neige. Même diphtongue que preferir → prefiero (A1.5) : la voyelle du radical devient ue / ie quand l'accent tombe dessus ; l'infinitif garde o / e. Ces verbes s'emploient seulement à la 3e personne du singulier.<br><br>🔎 <b>« llueve » ou « está lloviendo » ?</b> <b>Llueve</b> = fait général ou habituel (« En Bilbao llueve mucho »). <b>Está lloviendo</b> = en ce moment même (« Mira, está lloviendo »).<br><br>👥 <b>Tutoiement ET vouvoiement.</b> La météo n'a pas de « tu / vous », mais tu l'emploies pour interroger : <b>¿Tienes frío, Ana?</b> (tú) / <b>¿Tiene frío, señora?</b> (usted). <b>¿Qué tiempo hace?</b> est neutre : il s'adresse à un ami comme à un inconnu.<br><br>⚠️ <b>Pièges francophones.</b> <b>hace frío</b> (il fait froid dehors) ≠ <b>tengo frío</b> (moi, j'ai froid) ≠ <b>está frío</b> (la soupe est froide, un objet). <b>« Hace muy calor »</b> est faux : <b>hace mucho calor</b>. <b>« Hace lluvia »</b> n'existe pas : <b>llueve</b>. <b>El tiempo</b> = la météo ET la durée (¿Qué tiempo hace? / No tengo tiempo). Variantes : Espagne = <b>el tiempo</b> ; Amérique latine = souvent <b>el clima</b> (« ¿Qué clima hace? »).",
  dialogueLede:"Deux amies parlent de la météo (tutoiement) :",
  dialogue:[
   {who:"them", en:"¡Hola, Marta! ¿Qué tiempo hace en Sevilla?", fr:"Salut, Marta ! Quel temps fait-il à Séville ?"},
   {who:"you", en:"Hace mucho calor: hace treinta grados.", fr:"Il fait très chaud : il fait trente degrés."},
   {who:"them", en:"¿Está nublado?", fr:"Il y a des nuages ?"},
   {who:"you", en:"No, está despejado. Pero mañana llueve.", fr:"Non, le ciel est dégagé. Mais demain il pleut."},
   {who:"them", en:"¡Qué pena! Aquí en Madrid está lloviendo y hace frío.", fr:"Quel dommage ! Ici à Madrid il pleut et il fait froid."},
   {who:"you", en:"¿Tienes frío? Hace fresco por la noche en Madrid.", fr:"Tu as froid ? Il fait frais le soir à Madrid."}
  ],
  whyLabel:"Pourquoi trois familles ? Hace sol, está nublado, llueve",
  whyText:"En français, « il fait » et « il pleut » recouvrent tout, donc on ne choisit pas. L'espagnol classe les phénomènes selon la <b>nature du mot</b>. Si c'est un <b>nom</b> (sol, frío, calor, viento) : <b>hace</b> (« ça fait du soleil »). Si c'est un <b>adjectif</b> qui décrit le ciel (nublado, despejado) : <b>está</b> + adjectif, comme l'état passager vu en A1.0. Si le phénomène a son <b>propre verbe</b> (llover, nevar) : on le conjugue directement. <b>Test pratique</b> : peux-tu mettre « mucho » devant ? <i>mucho calor, mucho viento</i> → hacer ; <i>muy nublado, muy despejado</i> (muy marche avec un adjectif) → estar ; sinon cherche si le verbe existe (llueve, nieva). Ce test t'évite d'apprendre chaque expression par cœur. Enfin, la différence « llueve » / « está lloviendo » ressemble à celle du français « il pleut souvent » / « il est en train de pleuvoir » : l'une dit l'habitude, l'autre le moment présent."
 },
 GRAMMAR2: {
  heading:"L'heure avec SER, puis les jours, les mois et la date",
  dialogueLede:"Dans un hall de gare, un voyageur et une employée (vouvoiement) :",
  dialogue:[
   {who:"them", en:"Perdone, señora, ¿tiene hora, por favor?", fr:"Excusez-moi, madame, auriez-vous l'heure, s'il vous plaît ?"},
   {who:"you", en:"Sí, claro. Son las nueve menos cuarto.", fr:"Oui, bien sûr. Il est neuf heures moins le quart."},
   {who:"them", en:"Gracias. ¿A qué hora empieza la reunión?", fr:"Merci. À quelle heure commence la réunion ?"},
   {who:"you", en:"A las nueve en punto. Hoy es jueves 5 de noviembre.", fr:"À neuf heures pile. Aujourd'hui c'est jeudi 5 novembre."},
   {who:"them", en:"Perfecto. Muchas gracias.", fr:"Parfait. Merci beaucoup."},
   {who:"you", en:"De nada, señor.", fr:"De rien, monsieur."}
  ],
  ruleHtml:"⏰ <b>1. Demander l'heure.</b> Neutre : <b>¿Qué hora es?</b> Tutoiement : <b>Perdona, ¿qué hora es?</b> / <b>¿Tienes hora?</b> Vouvoiement : <b>Perdone, ¿qué hora es?</b> / <b>¿Tiene hora, por favor?</b> (Amérique latine : on entend souvent <b>¿Qué hora tiene?</b>).<br><br>⏰ <b>2. Dire l'heure : SER + la / las.</b> <b>Es la una</b> (singulier : une seule heure) mais <b>Son las dos, son las tres… son las doce</b> (pluriel). On sous-entend « la hora / las horas », d'où l'article féminin.<br><br>⏰ <b>3. Les minutes.</b> Jusqu'à la demie, on AJOUTE avec <b>y</b> : 3 h 15 = <b>Son las tres y cuarto</b> ; 3 h 30 = <b>Son las tres y media</b> ; 3 h 10 = <b>Son las tres y diez</b>. Après la demie, on prend l'heure SUIVANTE et on RETRANCHE avec <b>menos</b> : 3 h 45 = <b>Son las cuatro menos cuarto</b> ; 3 h 50 = <b>Son las cuatro menos diez</b> ; 12 h 45 = <b>Es la una menos cuarto</b> (singulier !). Les nombres sont ceux de 0 à 100 : y veinte, y veinticinco, menos veinticinco.<br><br>⏰ <b>4. Pile, midi, minuit.</b> <b>En punto</b> après l'heure : son las ocho en punto. <b>Es mediodía</b> / <b>es medianoche</b> (pas de « las »).<br><br>⏰ <b>5. Matin, après-midi, soir.</b> Avec une heure précise : <b>de la mañana / de la tarde / de la noche</b> (Son las ocho de la mañana). Sans heure : <b>por la mañana / por la tarde / por la noche</b> (Trabajo por la mañana). De 1 h à 6 h : <b>de la madrugada</b>.<br><br>⏰ <b>6. À quelle heure ?</b> <b>¿A qué hora…?</b> → <b>a las nueve</b> (mais a LA una). Tu : ¿A qué hora empiezas? Usted : ¿A qué hora empieza usted?<br><br>⏰ <b>7. 24 heures et variantes.</b> Horaires officiels (trains, cinéma) : <b>las quince treinta</b> (15 h 30). En Amérique latine : <b>un cuarto para las tres</b>, <b>faltan diez para las tres</b> (Mexique, Colombie) et « a. m. / p. m. » à l'écrit ; l'Espagne dit plutôt « las tres menos diez ».<br><br>📅 <b>8. Les jours.</b> <b>lunes, martes, miércoles, jueves, viernes, sábado, domingo</b> : sans majuscule, masculins. <b>El lunes</b> = ce lundi ; <b>los lunes</b> = chaque lundi (viernes, lunes… sont invariables au pluriel : los martes ; mais los sábados, los domingos). <b>De lunes a viernes</b> = du lundi au vendredi.<br><br>📅 <b>9. Les mois et les saisons.</b> enero, febrero, marzo, abril, mayo, junio, julio, agosto, septiembre, octubre, noviembre, diciembre : sans majuscule. On dit <b>en octubre</b>, <b>en otoño</b>, <b>en verano</b> (en + mois ou saison, sans article). Saisons : la primavera, el verano, el otoño, el invierno.<br><br>📅 <b>10. La date.</b> <b>¿Qué día es hoy?</b> → <b>Hoy es jueves.</b> <b>¿Qué fecha es hoy?</b> → <b>Hoy es 1 de octubre</b> / <b>Hoy es jueves 1 de octubre.</b> Structure : (jour) + nombre + <b>de</b> + mois (+ de + année). Nombres cardinaux, sauf le 1er : <b>el primero de mayo</b> ou <b>el uno de mayo</b>. Espagne : <b>¿A cuántos estamos?</b> → <b>Estamos a tres de octubre</b>. Écriture 03/10 = 3 octobre (jour/mois, comme en France).",
  whyLabel:"Pourquoi SER pour l'heure, et pourquoi « son las » au pluriel ?",
  whyText:"On dit « Es la una » parce que le sujet sous-entendu est « la hora » (singulier) ; dès deux heures, le sujet devient « las horas » (pluriel) : <b>son las dos</b>. C'est un sujet réel qui s'accorde : un seul mot à retenir, le nombre. Pour les minutes, l'espagnol additionne jusqu'à la demie (<b>y</b>) puis soustrait de l'heure suivante (<b>menos</b>) : c'est la même logique que « trois heures moins dix » en français, mais utilisée beaucoup plus tôt. <b>Piège</b> : « Es las tres » est faux, « Son la una » aussi : regarde le chiffre. Autre piège : « por la mañana » (sans heure) ≠ « de la mañana » (avec une heure) : « Son las ocho de la mañana » mais « Trabajo por la mañana ». Enfin, la date se dit avec SER (<b>hoy es jueves</b>), comme l'heure : on parle d'une identité, pas d'un lieu ni d'un état passager."
 },
 REVIEW: [
  {q:"Pour demander à un directeur : « Que faites-vous dans la vie ? »", opts:["¿A qué te dedicas?","¿A qué se dedica usted?"], correct:1, fb:"usted = 3e personne : se dedica. « Te dedicas » est le tutoiement. (rappel A1.10)"},
  {q:"« Je travaille à neuf heures. »", opts:["Trabajo a las nueve.","Trabajo en las nueve."], correct:0, fb:"« À + heure » = a las nueve. (rappel A1.10)"},
  {q:"« Nous écrivons un courriel. » (escribir)", opts:["Escribimos un correo.","Escribemos un correo.","Escribamos un correo."], correct:0, fb:"-ir : nosotros → -imos : escribimos. (rappel A1.10)"},
  {q:"« Elle étudie le matin. »", opts:["Estudia por la mañana.","Estudia a la mañana."], correct:0, fb:"Moment de la journée sans heure précise : por la mañana. (rappel A1.10)"},
  {q:"« ¿Dónde ___ usted ? » (trabajar)", opts:["trabaja","trabajas","trabajo"], correct:0, fb:"usted se conjugue comme él/ella : trabaja. « Trabajas » = tú. (rappel A1.10)"}
 ],
 DRILLS: [
  {type:"fill", text:"Hoy ___ sol. (hacer)", answers:["hace","Hace"], why:"Un nom (sol) → HACER impersonnel, 3e personne du singulier : hace sol."},
  {type:"fill", text:"Hace treinta ___. (degrés)", answers:["grados"], why:"grados = degrés, au pluriel après un nombre : hace treinta grados."},
  {type:"fill", text:"¿Qué tiempo ___ en Bogotá? (hacer)", answers:["hace","Hace"], why:"La question météo se construit avec hacer : ¿Qué tiempo hace?"},
  {type:"fill", text:"Hoy está ___ . (couvert, avec des nuages)", answers:["nublado"], why:"estar + adjectif : está nublado (de nube = nuage)."},
  {type:"fill", text:"En Bilbao ___ mucho. (llover)", answers:["llueve","Llueve"], why:"llover : o → ue. Verbe autonome : llueve (3e personne du singulier)."},
  {type:"fill", text:"En los Pirineos ___ en invierno. (nevar)", answers:["nieva","Nieva"], why:"nevar : e → ie. Il neige = nieva."},
  {type:"fill", text:"Ahora ___ lloviendo. (estar)", answers:["está","Está"], why:"Action en cours : estar + gérondif (lloviendo). Accent écrit sur está."},
  {type:"fill", text:"Hace ___ calor en agosto. (très)", answers:["mucho","Mucho"], why:"Devant un NOM on emploie « mucho » : hace mucho calor, jamais « muy calor »."},
  {type:"fill", text:"___ las tres y cuarto. (ser)", answers:["Son","son"], why:"3 heures = pluriel : son las tres. Singulier seulement pour « la una »."},
  {type:"fill", text:"___ la una y media. (ser)", answers:["Es","es"], why:"« la una » est singulier : es la una y media."},
  {type:"fill", text:"¿Qué ___ es ?", answers:["hora"], why:"¿Qué hora es? : la question standard pour demander l'heure. hora = heure."},
  {type:"fill", text:"Son las ocho ___ punto.", answers:["en"], why:"« en punto » = pile, précises : se place après l'heure."},
  {type:"fill", text:"Son las cinco ___ cuarto. (4 h 45)", answers:["menos"], why:"4 h 45 : heure suivante (cinco) + menos cuarto. Après la demie, on retranche."},
  {type:"fill", text:"Hoy es lunes 3 ___ octubre.", answers:["de"], why:"Date : jour + nombre + DE + mois : lunes 3 de octubre."},
  {type:"fill", text:"Son las diez ___ la noche.", answers:["de"], why:"Avec une heure précise : « de la noche » (et non « por la noche »)."},
  {type:"fill", text:"Trabajo ___ la mañana. (sans heure précise)", answers:["por"], why:"Sans heure précise : por la mañana. Avec une heure, on dirait « las ocho de la mañana »."},
  {type:"fill", text:"Hoy, martes. ___, lunes. (hier)", answers:["Ayer","ayer"], why:"ayer = hier. À employer ici sans verbe conjugué (les temps du passé viennent plus tard)."},
  {type:"choice", q:"Quelle forme est INCORRECTE ?", opts:["Hace lluvia.","Llueve.","Está lloviendo."], correct:0, why:"« Hace lluvia » n'existe pas : la pluie a son propre verbe (llueve, está lloviendo)."},
  {type:"choice", q:"« Il y a du vent. »", opts:["Hace viento.","Está viento."], correct:0, why:"viento est un nom : HACER + nom → hace viento. « Está ventoso » serait possible, mais « está viento » ne l'est pas."},
  {type:"choice", q:"« Il est une heure. »", opts:["Es la una.","Son la una."], correct:0, why:"Singulier : es la una. « Son la una » mélange pluriel et singulier."},
  {type:"choice", q:"« La semaine prochaine » :", opts:["la semana que viene","la semana pasada"], correct:0, why:"« que viene » = qui vient (prochaine) ; « pasada » = passée (dernière)."},
  {type:"choice", q:"« Le mois dernier » :", opts:["el mes pasado","el mes que viene"], correct:0, why:"el mes pasado = le mois dernier ; el mes que viene = le mois prochain."},
  {type:"choice", q:"Pour demander l'heure à un ami :", opts:["¿Tienes hora?","¿Tiene hora?"], correct:0, why:"Ami = tú : tienes. « ¿Tiene hora? » est le vouvoiement (usted)."},
  {type:"choice", q:"« J'ai froid » (ma sensation) :", opts:["Tengo frío.","Hace frío."], correct:0, why:"Sensation personnelle : tener (tengo frío). Hace frío = il fait froid dehors."}
 ],
 ANNOTATED: {
  title:"Un día en Madrid",
  intro:"Un petit texte pour t'entraîner à lire. Touche chaque mot pour voir sa nature et sa traduction, et repère les trois familles de la météo (hace…, está…, llueve) ainsi que l'heure avec SER.",
  sentences:[
   {fr:"Aujourd'hui il fait soleil, mais il fait froid.", tokens:[
    {w:"Hoy", tag:"adverbe", fr:"aujourd'hui", tip:"h muette : « oi »."},
    {w:"hace", tag:"verbe", info:"hacer · présent · impersonnel", fr:"il fait", tip:"Famille 1 : hacer + nom."},
    {w:"sol", tag:"nom", info:"masc. sing.", fr:"soleil"},
    {w:"pero", tag:"conjonction", fr:"mais"},
    {w:"hace", tag:"verbe", info:"hacer · présent · impersonnel", fr:"il fait"},
    {w:"frío", tag:"nom", info:"masc. sing.", fr:"froid", tip:"Accent écrit sur le í : FRÍ-o."}
   ]},
   {fr:"Il est trois heures et demie de l'après-midi.", tokens:[
    {w:"Son", tag:"verbe", info:"ser · présent · 3e pers. plur.", fr:"il est", tip:"Pluriel car « las tres » : plusieurs heures."},
    {w:"las", tag:"déterminant", info:"article défini · fém. plur.", fr:"les", tip:"Sous-entendu : las horas."},
    {w:"tres", tag:"adjectif", info:"nombre", fr:"trois"},
    {w:"y", tag:"conjonction", fr:"et"},
    {w:"media", tag:"adjectif", info:"fém. sing.", fr:"demie", tip:"Jusqu'à la demie, on ajoute avec « y »."},
    {w:"de", tag:"préposition", fr:"de", tip:"« de la tarde » quand l'heure est précise."},
    {w:"la", tag:"déterminant", info:"article défini · fém. sing.", fr:"la"},
    {w:"tarde", tag:"nom", info:"fém. sing.", fr:"après-midi", tip:"Aussi adverbe : « es tarde » = il est tard."}
   ]},
   {fr:"La semaine prochaine nous allons voyager à Séville.", tokens:[
    {w:"La", tag:"déterminant", info:"article défini · fém. sing.", fr:"la"},
    {w:"semana", tag:"nom", info:"fém. sing.", fr:"semaine"},
    {w:"que", tag:"pronom relatif", fr:"qui"},
    {w:"viene", tag:"verbe", info:"venir · présent · 3e pers. sing.", fr:"vient", tip:"Expression en bloc : « qui vient » = prochaine."},
    {w:"vamos", tag:"verbe", info:"ir · présent · nosotros", fr:"nous allons", tip:"Futur proche (A1.9) : vamos a + infinitif."},
    {w:"a", tag:"préposition", fr:"à / de"},
    {w:"viajar", tag:"verbe", info:"infinitif · -ar", fr:"voyager"},
    {w:"a", tag:"préposition", fr:"à"},
    {w:"Sevilla", tag:"nom propre", fr:"Séville", tip:"ll = y : se-BI-ya."}
   ]},
   {fr:"Là-bas il fait chaud : il fait trente degrés.", tokens:[
    {w:"Allí", tag:"adverbe", fr:"là-bas", tip:"Accent écrit sur le í."},
    {w:"hace", tag:"verbe", info:"hacer · présent · impersonnel", fr:"il fait"},
    {w:"calor", tag:"nom", info:"masc. sing.", fr:"chaleur", tip:"hace calor = il fait chaud."},
    {w:"hace", tag:"verbe", info:"hacer · présent · impersonnel", fr:"il fait"},
    {w:"treinta", tag:"adjectif", info:"nombre", fr:"trente"},
    {w:"grados", tag:"nom", info:"masc. plur.", fr:"degrés"}
   ]}
  ]
 },
 CULTURE_NOTE: {icon:"🌦️", title:"Culture, 11 expressions et fiche récap (A1.11)",
  html:"<b>🌍 Culture — le temps, l'heure et les rythmes.</b> En <b>Espagne</b>, l'été est chaud et sec (Madrid, Séville : plus de 35 °C en août) ; le nord (Bilbao, Saint-Jacques-de-Compostelle) est vert et pluvieux. En <b>Colombie</b>, le climat dépend de l'altitude plutôt que de la saison : Bogotá (2 600 m) est « tierra fría » (autour de 14 °C toute l'année), Medellín « tierra templada », la côte « tierra caliente ». Là-bas, <b>invierno</b> désigne la saison des pluies, pas forcément le froid. Dans l'hémisphère sud (Argentine, Chili), les saisons sont inversées. Côté horaires, l'Espagne déjeune vers 14 h et dîne vers 21 h–22 h : « por la tarde » commence donc après le déjeuner. À l'écrit, les dates se notent jour/mois (03/10 = 3 octobre) et les mois n'ont jamais de majuscule.<br><br><b>🧰 11 expressions du temps et de la météo</b><br>1. <b>Hacer un tiempo de perros</b> = avoir un temps de chien. « Hoy hace un tiempo de perros. »<br>2. <b>Llover a cántaros</b> = pleuvoir des cordes (cántaro = cruche). « Llueve a cántaros. »<br>3. <b>Llover sobre mojado</b> = un malheur de plus quand ça va déjà mal (« mojado » = mouillé). Attention : ce n'est PAS « déjà vu ».<br>4. <b>Ahogarse en un vaso de agua</b> = se noyer dans un verre d'eau : se faire une montagne d'un rien.<br>5. <b>Matar el tiempo</b> = tuer le temps : faire quelque chose pour passer le temps.<br>6. <b>Al mal tiempo, buena cara</b> = à mauvaise fortune, bon cœur : garder le sourire malgré les difficultés.<br>7. <b>Tiempo es oro</b> = le temps, c'est de l'argent (littéralement : « c'est de l'or »).<br>8. <b>Pasar el tiempo volando</b> = le temps passe à toute vitesse.<br>9. <b>Estar al caer</b> = être imminent, arriver d'une minute à l'autre. « El autobús está al caer. »<br>10. <b>Estar en las nubes</b> = être dans la lune (littéralement : « dans les nuages »).<br>11. <b>Hacer un frío que pela</b> = il fait un froid de canard (familier, surtout en Espagne ; « pelar » = écorcher).<br><br><b>✍️ Expression écrite — la météo du jour et tes projets (4 lignes)</b> Utilise au moins deux familles de la météo (hace… / está… / llueve). Modèle : « Hoy es jueves 1 de octubre. Son las nueve de la mañana. Hace frío y está nublado. Mañana hace buen tiempo: la semana que viene vamos a viajar. » Version formelle (un message à un client) : « Buenos días, señora. Hoy hace buen tiempo en Madrid. ¿Tiene frío? » Vérifie : hace + NOM · está + ADJECTIF · mucho (pas muy) devant un nom · son / es la una pour l'heure.<br><br><b>🗣️ Expression orale — le bulletin météo</b> Joue le présentateur radio et annonce plusieurs villes : « Buenos días. Hoy en Madrid hace sol, pero hace frío. En Sevilla hace mucho calor: hace treinta grados. En Bilbao llueve y está nublado. En los Pirineos nieva. ¡Hasta mañana! » Puis au vouvoiement, à un auditeur : « Señor, ¿tiene hora? Son las nueve en punto. »<br><br><b>📄 Fiche récap</b> Météo : <b>hace</b> + sol / frío / calor / viento / fresco / buen tiempo / mal tiempo (mucho + nom, jamais muy) · <b>está</b> + nublado / despejado / soleado / lluvioso / ventoso / nevado ou + gérondif (está lloviendo, está nevando) · <b>llueve / nieva</b> (o → ue, e → ie, 3e pers. sing.) · <b>hace treinta grados</b> · hace frío ≠ tengo frío ≠ está frío. Heure : <b>¿Qué hora es?</b> / <b>¿Tienes hora?</b> (tú) / <b>¿Tiene hora, por favor?</b> (usted) · <b>es la una</b>, <b>son las dos, tres…</b> · y cuarto / y media / menos cuarto · en punto · de la mañana / tarde / noche (avec heure) ≠ por la mañana / tarde / noche (sans heure). Temps : ayer · hoy · mañana (= demain ET matin) · pasado mañana · la semana que viene · el mes pasado. Calendrier : lunes à domingo, enero à diciembre, primavera · verano · otoño · invierno · <b>Hoy es lunes 3 de octubre</b> (sans majuscule, avec « de »)."},
 NEXT_PREVIEW:"A1.12 (Español social, synthèse du niveau A1) : saluer, répondre, remercier, s'excuser, poser des questions et demander poliment avec « ¿Podría…? » et « ¿Puedo…? » (formules figées), relier tes idées avec y / pero / así que / porque, en tutoiement ET en vouvoiement.",
 META:{vocabTitle:"La hora y el tiempo : météo, heure, jours, mois et date (A1.11)", lectureTitle:"Un jueves de otoño en Madrid", bilanTitle:"Bravo, tu sais dire l'heure et parler du temps !", pronLabel:"h muette, ll, diphtongues ie / ue : hace, lluvia, nieva, llueve", todayLede:"dire le temps qu'il fait (hacer, estar, llover / nevar), dire l'heure avec ser, donner le jour, le mois et la date, en tutoiement ET en vouvoiement"}
};
LESSONS_ES[211].VOCAB.forEach(function(v){ var d = MAP[v.en]; if(!d) throw new Error("Pas d'illustration pour : " + v.en); v.emo = d[0]; v.ex = [d[1], d[2]]; });
})();


// A1.12 — Español social (síntesis) : dernier palier du niveau A1 (leçon 212)
(function(){
function blk(name, rows){
  var v = __esB(name, rows);
  v.forEach(function(o, i){ o.emo = rows[i][4]; o.ex = [rows[i][5], rows[i][6]]; });
  return v;
}
// ligne = [terme, API, français, note, emoji, exemple ES, exemple FR]
var V = [].concat(
 blk("Saluer et prendre des nouvelles", [
  ["Hola","/ˈola/","salut, bonjour","Neutre : tu peux le dire à un ami comme à un inconnu. La h est muette : O-la. Avec un inconnu ou en contexte pro, ajoute (ou préfère) buenos días / buenas tardes.","👋","¡Hola, Marta! ¿Qué tal?","Salut, Marta ! Ça va ?"],
  ["Buenos días","/ˈbwenos ˈdias/","bonjour (le matin)","On le dit le matin, jusque vers midi (en Espagne, souvent jusqu'au déjeuner). Toujours au pluriel : « buenos días », pas « buen día » en Espagne (en Argentine et dans quelques pays, « buen día » existe aussi). Poli avec tú comme avec usted.","🌅","Buenos días, señora.","Bonjour, madame."],
  ["Buenas tardes","/ˈbwenas ˈtaɾdes/","bonjour (l'après-midi), bonsoir","« La tarde » couvre l'après-midi ET le début de soirée : en Espagne on dit « buenas tardes » jusqu'à 20-21 h environ. Piège : le français dit « bonsoir » beaucoup plus tôt.","🌤️","Buenas tardes, señor López.","Bonjour, monsieur López."],
  ["Buenas noches","/ˈbwenas ˈnotʃes/","bonsoir (tard) / bonne nuit","Sert à saluer tard le soir ET à dire « bonne nuit » avant d'aller dormir. Toujours au pluriel. ch = tch : NO-tches.","🌙","Buenas noches, mamá.","Bonne nuit, maman."],
  ["Buenas","/ˈbwenas/","salut, bonjour (version courte)","Raccourci familier de buenos días / buenas tardes / buenas noches, très courant en entrant dans un commerce ou un bar. Avec un supérieur ou une personne âgée, dis plutôt la forme complète.","😉","¡Buenas! ¿Qué tal?","Salut ! Ça va ?"],
  ["¿Qué tal?","/ke tal/","ça va ? comment ça va ?","INFORMEL (tú) : à un ami, un collègue de ton âge, un voisin sympathique. Réponses : bien, muy bien, regular, mal. Piège : « ¿Qué tal está usted? » est rare et peu naturel ; à un inconnu ou à un supérieur, dis « ¿Cómo está usted? ».","🙂","¿Qué tal, Luis? — Bien, ¿y tú?","Ça va, Luis ? — Bien, et toi ?"],
  ["¿Qué tal todo?","/ke tal ˈtoðo/","comment ça va, tout va bien ?","Variante chaleureuse de ¿Qué tal? : « todo » = tout (travail, famille, vie…). Entre amis, collègues proches.","🌈","¡Hola, Ana! ¿Qué tal todo?","Salut, Ana ! Tout va bien ?"],
  ["¿Cómo estás? / ¿Cómo está usted?","/ˈkomo esˈtas · ˈkomo esˈta usˈteð/","comment vas-tu ? / comment allez-vous ?","Tú : estás ; usted : está (accents écrits). Version neutre, correcte partout, indispensable avec un inconnu, un client, une personne âgée ou ton directeur. Réponse : « Muy bien, gracias. ¿Y tú? / ¿Y usted? ».","🎩","¿Cómo está usted, señora Ruiz?","Comment allez-vous, madame Ruiz ?"],
  ["¿Cómo te va?","/ˈkomo te ba/","comment ça se passe, ça va ?","Informel (tú). Forme usted : « ¿Cómo le va? » (« le » est un petit mot à retenir tel quel pour l'instant). Interroge sur la vie en général : « ¿Cómo te va en el trabajo? ».","💬","¿Cómo te va en el trabajo?","Comment ça se passe au travail ?"],
  ["¿Qué hay de nuevo?","/ke aj ðe ˈnweβo/","quoi de neuf ?","Informel : « hay » = il y a (h muette, ay = aï). Réponses possibles : « Nada nuevo » (rien de neuf), « Todo bien ».","🆕","¿Qué hay de nuevo? — Nada, ¿y tú?","Quoi de neuf ? — Rien, et toi ?"],
  ["¡Cuánto tiempo sin verte!","/ˈkwanto ˈtjempo sim ˈβeɾte/","ça fait longtemps qu'on ne s'est pas vu !","Tú : « verte ». Usted : « ¡Cuánto tiempo sin verle! » (verlo / verla en Amérique latine). « sin » + infinitif = sans + verbe. Exclamation : ¡ ! et accent sur cuánto. ua = wa, ie = ié : KWAN-to TYEM-po.","🤗","¡Hola, María! ¡Cuánto tiempo sin verte!","Salut, María ! Ça fait longtemps !"],
  ["Muy bien, gracias. ¿Y tú? / ¿Y usted?","/mwi ˈβjen ˈɡɾaθjas i tu · i usˈteð/","très bien, merci. Et toi ? / Et vous ?","Réponse standard : renvoie toujours la question à l'autre (« ¿Y tú? » entre amis, « ¿Y usted? » en formel). Sans ça, la conversation s'arrête.","🔁","Muy bien, gracias. ¿Y usted?","Très bien, merci. Et vous ?"],
  ["Regular / Así, así","/reɣuˈlaɾ · aˈsi aˈsi/","moyen, comme ci comme ça","Faux-ami : « regular » ne veut pas dire « régulier » mais « moyen, couci-couça ». La r initiale est roulée. Invariable pour tout le monde.","😐","¿Qué tal? — Regular, estoy un poco cansado.","Ça va ? — Moyen, je suis un peu fatigué."]
 ]),
 blk("Remercier", [
  ["Gracias","/ˈɡɾaθjas/","merci","Toujours au pluriel. c devant i = th (Espagne) ou s (Amérique latine). Identique avec tú et usted.","🙏","Gracias, Ana.","Merci, Ana."],
  ["Muchas gracias","/ˈmutʃas ˈɡɾaθjas/","merci beaucoup","« gracias » est féminin pluriel, donc « muchas » (jamais « mucho gracias »). Plus fort : « Mil gracias » (mille mercis). Même forme en tú et en usted.","💐","¡Muchas gracias, señor!","Merci beaucoup, monsieur !"],
  ["Gracias por tu / su ayuda","/ˈɡɾaθjas poɾ tu · su aˈʝuða/","merci pour ton / votre aide","Tú : « tu ayuda ». Usted : « su ayuda ». « por » (et non « para ») + le nom pour dire « merci pour ». Ayuda est féminin : la ayuda.","🤝","Gracias por su ayuda, señora.","Merci pour votre aide, madame."],
  ["De nada","/de ˈnaða/","de rien","Réponse standard à gracias. d entre voyelles très doux. Identique en tutoiement et vouvoiement.","😊","Gracias. — De nada.","Merci. — De rien."],
  ["No hay de qué","/no aj ðe ke/","il n'y a pas de quoi","Réponse un peu plus soignée que « de nada ». « hay » = il y a. Même forme avec tú et usted.","🌷","Muchas gracias. — No hay de qué.","Merci beaucoup. — Il n'y a pas de quoi."],
  ["Por favor","/poɾ faˈβoɾ/","s'il te plaît / s'il vous plaît","Une seule forme pour tú et usted : le français distingue « s'il te plaît » et « s'il vous plaît », pas l'espagnol. Se place au début ou à la fin : « Un café, por favor ».","🥺","Un café, por favor.","Un café, s'il vous plaît."]
 ]),
 blk("S'excuser", [
  ["Lo siento","/lo ˈsjento/","je suis désolé(e), je regrette","Excuse réelle, pour un désagrément ou une mauvaise nouvelle. Invariable : un homme comme une femme. Renforcé : « Lo siento mucho ». Même forme avec tú et usted.","😔","Lo siento, no entiendo.","Je suis désolé, je ne comprends pas."],
  ["Perdón","/peɾˈðon/","pardon","Excuse immédiate pour un petit accroc (marcher sur un pied) ou pour attirer l'attention. Accent écrit : peR-DÓN (dernière syllabe). Même mot pour tous.","🙇","Perdón, ¿está libre esta silla?","Pardon, cette chaise est-elle libre ?"],
  ["Perdona / Perdone","/peɾˈðona · peɾˈðone/","excuse-moi / excusez-moi","Tú : perdona. Usted : perdone (même logique que gira / gire en A1.4). Idéal pour interpeller quelqu'un : « Perdone, ¿dónde está la estación? ». C'est AUSSI la forme à utiliser pour s'excuser poliment.","🖐️","Perdone, señora, ¿tiene hora?","Excusez-moi, madame, avez-vous l'heure ?"],
  ["Disculpa / Disculpe","/disˈkulpa · disˈkulpe/","excuse-moi / excusez-moi","Synonyme de perdona / perdone. Très répandu en Amérique latine (Mexique, Colombie) ; en Espagne, perdona / perdone est plus courant. Tú : disculpa. Usted : disculpe.","🙋","Disculpe, ¿dónde está el baño?","Excusez-moi, où sont les toilettes ?"],
  ["No pasa nada","/no ˈpasa ˈnaða/","ce n'est pas grave","Réponse à une excuse. Littéralement « il ne se passe rien ». Variante : « No importa ». Même forme avec tú et usted.","😌","Lo siento. — No pasa nada.","Je suis désolé. — Ce n'est pas grave."],
  ["Con permiso","/kom peɾˈmiso/","pardon (pour passer), avec votre permission","Pour passer dans un couloir ou un bus bondé, ou pour entrer. Très courant en Amérique latine ; en Espagne, « perdón » ou « perdone » est plus fréquent.","🚶","Con permiso, señor.","Pardon, monsieur (pour passer)."]
 ]),
 blk("Demander poliment", [
  ["¿Puedes ayudarme? / ¿Podría ayudarme?","/ˈpweðes aʝuˈðaɾme · poˈðɾia aʝuˈðaɾme/","peux-tu m'aider ? / pourriez-vous m'aider ?","« ¿Puedes ayudarme? » = informel (tú). « ¿Puede ayudarme? » = poli (usted). « ¿Podría ayudarme? » = la plus polie : apprends-la comme une FORMULE toute faite, sans chercher à la conjuguer (inconnu, client, supérieur). Le « me » se colle à l'infinitif : ayudarme.","🆘","¿Podría ayudarme, por favor?","Pourriez-vous m'aider, s'il vous plaît ?"],
  ["¿Puedo…?","/ˈpweðo/","puis-je… ? est-ce que je peux… ?","Pour demander la permission : ¿Puedo pasar? ¿Puedo sentarme? À apprendre tel quel (puedo = je peux). Même forme avec tú ou usted, puisque c'est « je » qui parle. Réponses : « Sí, claro » / « Por supuesto ».","🙋‍♂️","¿Puedo entrar, señora?","Puis-je entrer, madame ?"],
  ["¿Podría repetir, por favor?","/poˈðɾia reˈpetiɾ poɾ faˈβoɾ/","pourriez-vous répéter, s'il vous plaît ?","Formule figée très polie. Entre amis : « ¿Puedes repetir, por favor? ». Pour un public ou un client : toujours « ¿Podría…? ».","🔁","No entiendo. ¿Podría repetir, por favor?","Je ne comprends pas. Pourriez-vous répéter, s'il vous plaît ?"],
  ["Más despacio, por favor","/mas desˈpaθjo poɾ faˈβoɾ/","plus lentement, s'il vous plaît","Le meilleur ami du débutant. Invariable : pas de forme tú / usted. despacio : c devant i = th (Espagne) ; DES-PA-thio.","🐢","Más despacio, por favor.","Plus lentement, s'il vous plaît."],
  ["No entiendo","/no enˈtjendo/","je ne comprends pas","« entiendo » = je comprends (e → ie, comme preferir en A1.5). « No comprendo » existe aussi mais est un peu plus formel. Accompagne-le de « Más despacio, por favor ».","❓","Lo siento, no entiendo.","Je suis désolé, je ne comprends pas."],
  ["Oye / Oiga","/ˈoʝe · ˈojɣa/","écoute, dis donc / excusez-moi, monsieur","Pour attirer l'attention : « oye » (tú), « oiga » (usted), impératifs du verbe oír. « Oye » ouvre aussi une question entre amis : « Oye, ¿dónde está…? ». À un inconnu, « perdone » est plus doux.","📣","Oye, ¿dónde está la estación?","Dis, où est la gare ?"],
  ["¿Me ayudas? / ¿Me ayuda?","/me aˈʝuðas · me aˈʝuða/","tu m'aides ? / vous m'aidez ?","Demande très naturelle au présent : tú ayudas, usted ayuda. Le « me » se place AVANT le verbe conjugué.","🤲","¿Me ayuda, por favor?","Vous m'aidez, s'il vous plaît ?"],
  ["Claro / Por supuesto","/ˈklaɾo · poɾ suˈpwesto/","bien sûr","Réponses courantes à une demande. « Claro » est plus familier ; « Por supuesto » est plus soigné. « Claro que sí » = mais oui.","✅","¿Puede ayudarme? — Sí, claro.","Pouvez-vous m'aider ? — Oui, bien sûr."]
 ]),
 blk("Prendre congé", [
  ["Adiós","/aˈðjos/","au revoir","Neutre, quand on se quitte, même pour peu de temps. Ce n'est pas le « adieu » définitif du français. Accent écrit : a-DIÓS.","👋","¡Adiós, Pablo!","Au revoir, Pablo !"],
  ["Hasta luego","/ˈasta ˈlweɣo/","à plus tard, à tout à l'heure","On pense se revoir bientôt (aujourd'hui ou dans les jours qui viennent). h muette. Neutre : tú comme usted.","🕐","Hasta luego, señora.","À tout à l'heure, madame."],
  ["Hasta pronto","/ˈasta ˈpɾonto/","à bientôt","Un peu plus chaleureux : on espère se revoir sans date précise. Neutre.","🤝","¡Hasta pronto, Ana!","À bientôt, Ana !"],
  ["Hasta mañana","/ˈasta maˈɲana/","à demain","Pour les collègues, les voisins, les camarades de classe que l'on retrouve le lendemain. ñ = gn.","📆","Hasta mañana, profesor.","À demain, professeur."],
  ["Nos vemos","/nos ˈβemos/","à plus, on se voit","Informel, très courant entre amis. Littéralement « nous nous voyons ».","🙌","Nos vemos, Luis.","À plus, Luis."],
  ["Que tengas un buen día / Que tenga un buen día","/ke ˈteŋɡas um bwen ˈdia · ke ˈteŋɡa um bwen ˈdia/","passe une bonne journée / passez une bonne journée","Souhait FIGÉ à retenir en bloc (ne cherche pas à le conjuguer) : « que tengas » = tú, « que tenga » = usted. On le dit en partant. Réponse : « Igualmente » ou « Gracias, igualmente ».","☀️","Gracias, señora. Que tenga un buen día.","Merci, madame. Passez une bonne journée."],
  ["Igualmente","/iɣwalˈmente/","de même, à toi aussi","Réponse à un souhait ou à « mucho gusto ». Invariable : tú comme usted.","🔄","Que tengas un buen día. — Igualmente.","Passe une bonne journée. — À toi aussi."],
  ["Buen fin de semana","/bwem fin de seˈmana/","bon week-end","Souhait figé, sans verbe. Même forme avec tú et usted. Proches : « Buen viaje » (bon voyage), « Buen provecho » (bon appétit).","🎉","Buen fin de semana, Pedro.","Bon week-end, Pedro."],
  ["Un abrazo / Un saludo","/un aˈβɾaθo · un saˈluðo/","je t'embrasse / cordialement","Pour finir un message. « Un abrazo » (littéralement une accolade) : entre amis. « Un saludo » : neutre, plus poli. Formel : « Un cordial saludo ». Pas de « bisous » à la française.","✉️","Un abrazo, Ana.","Je t'embrasse, Ana."]
 ]),
 blk("Les mots interrogatifs (accent obligatoire)", [
  ["¿Quién? / ¿Quiénes?","/kjen · ˈkjenes/","qui ?","quién pour une personne, quiénes pour plusieurs. Accent écrit : ¿Quién es? ¿Quiénes son? ie = « yé ».","👤","¿Quién es ese chico?","Qui est ce garçon ?"],
  ["¿Qué?","/ke/","quoi ? que ? quel ?","Accent écrit dans une question ou une exclamation (¿Qué es esto? ¡Qué bien!). Sans accent, « que » est une conjonction (« que »).","❔","¿Qué hora es?","Quelle heure est-il ?"],
  ["¿Dónde? / ¿De dónde?","/ˈdonde · de ˈdonde/","où ? / d'où ?","¿Dónde está…? = lieu (estar). ¿De dónde eres? = origine (ser). Accent sur dónde. Pour « vers où », ¿Adónde? : ¿Adónde vas?","📍","¿Dónde está la estación?","Où est la gare ?"],
  ["¿Cuándo?","/ˈkwando/","quand ?","Accent écrit pour le distinguer de « cuando » (conjonction, sans question). ua = wa.","🕒","¿Cuándo es la fiesta?","Quand est la fête ?"],
  ["¿Cómo?","/ˈkomo/","comment ?","¿Cómo te llamas? ¿Cómo estás? Employé seul, « ¿Cómo? » = pardon ? comment ? (pour faire répéter).","🤔","¿Cómo se llama usted?","Comment vous appelez-vous ?"],
  ["¿Cuánto? / ¿Cuánta? / ¿Cuántos? / ¿Cuántas?","/ˈkwanto ˈkwanta ˈkwantos ˈkwantas/","combien ?","S'accorde avec le nom : ¿Cuántos años tienes? ¿Cuánta gente? Devant un verbe (¿Cuánto cuesta?), il reste invariable : cuánto.","🔢","¿Cuántos años tienes?","Quel âge as-tu ?"],
  ["¿Cuál? / ¿Cuáles?","/kwal · ˈkwales/","quel ? lequel ? (choix, donnée)","On l'emploie devant « es / son » pour demander une donnée précise : ¿Cuál es tu teléfono? Piège : le français dit « quel » dans tous les cas ; l'espagnol choisit entre « qué » (+ nom) et « cuál » (devant es).","🎯","¿Cuál es tu número de teléfono?","Quel est ton numéro de téléphone ?"],
  ["¿Por qué?","/poɾ ˈke/","pourquoi ?","Deux mots, accent sur qué. La réponse s'écrit en UN mot, sans accent : « porque » (parce que).","🧐","¿Por qué estás triste?","Pourquoi es-tu triste ?"]
 ]),
 blk("Relier ses phrases : connecteurs", [
  ["y / e","/i · e/","et","y = « i ». Devant un mot qui commence par le son i (i-, hi-), il devient « e » : padres e hijos, Marta e Isabel. Relie deux idées ou deux éléments.","➕","Estoy cansada y tengo hambre.","Je suis fatiguée et j'ai faim."],
  ["pero","/ˈpeɾo/","mais","Oppose deux idées. Un seul r tapé : pero (mais) ≠ perro (chien).","↔️","Es pequeño, pero muy rápido.","Il est petit, mais très rapide."],
  ["así que","/aˈsi ke/","donc, alors","Introduit la CONSÉQUENCE : cause d'abord, conséquence ensuite. À ne pas confondre avec « porque », qui introduit la cause.","➡️","Tengo hambre, así que voy a comer.","J'ai faim, donc je vais manger."],
  ["porque","/ˈpoɾke/","parce que","Un seul mot, sans accent ; introduit la cause. Réponse à ¿Por qué…?","💬","Estoy contento porque tengo un libro nuevo.","Je suis content parce que j'ai un livre neuf."],
  ["también","/tamˈbjen/","aussi","Accent sur BIÉN : tam-BIÉN. « Yo también » = moi aussi. Pour « moi non plus », on dit « yo tampoco ».","✨","Yo también tengo hambre.","Moi aussi, j'ai faim."]
 ]),
 blk("Tú ou usted : choisir le bon registre", [
  ["tutear / tratar de usted","/tuteˈaɾ/","tutoyer / vouvoyer","« tutear » = utiliser tú. En Espagne on tutoie vite (collègues, voisins, jeunes). Avec un inconnu âgé, un client ou un supérieur, usted. En Colombie, on emploie souvent usted même entre proches : en cas de doute, usted est toujours poli.","🔀","En España, tuteamos rápido.","En Espagne, on se tutoie vite."],
  ["don / doña","/don · ˈdoɲa/","Monsieur / Madame (devant le prénom)","Marque de respect devant le PRÉNOM d'une personne âgée ou respectée : don Pedro, doña Carmen. Pas d'équivalent français. À distinguer de señor / señora (devant le nom de famille).","🎩","Buenos días, doña Carmen.","Bonjour, madame Carmen."],
  ["vosotros · ustedes","/boˈsotɾos · usˈteðes/","vous (amis, Espagne) · vous (partout)","Pour plusieurs personnes : vosotros = amis, famille (Espagne seulement) ; ustedes = tous les « vous » en Amérique latine, et le vouvoiement pluriel en Espagne. ¿Qué tal estáis? / ¿Cómo están ustedes?","👥","¿Cómo están ustedes?","Comment allez-vous (tous) ?"]
 ]),
 blk("Les cinq verbes piliers de A1", [
  ["ser","/seɾ/","être (identité, origine, caractère)","soy, eres, es, somos, sois, son. Pour dire qui on est, d'où on vient, comment on est de nature.","🪪","Soy Ana y soy de Lyon.","Je suis Ana et je suis de Lyon."],
  ["estar","/esˈtaɾ/","être (lieu, état du moment)","estoy, estás, está, estamos, estáis, están. Pour dire où on est et comment on va.","📍","Estoy en la estación.","Je suis à la gare."],
  ["tener","/teˈneɾ/","avoir","tengo, tienes, tiene, tenemos, tenéis, tienen. Âge, possession, sensations (hambre, sed, sueño…).","🎒","Tengo veinte años.","J'ai vingt ans."],
  ["ir","/iɾ/","aller","voy, vas, va, vamos, vais, van. Toujours « a » après : voy a casa. « ¿Adónde vas? » = où vas-tu ?","🚶","Voy a la plaza.","Je vais à la place."],
  ["hacer","/aˈθeɾ/","faire","hago, haces, hace, hacemos, hacéis, hacen. Seul le « yo » est irrégulier : hago. Pour la météo : hace calor. « ¿Qué haces? » = que fais-tu ?","🛠️","¿Qué haces hoy?","Que fais-tu aujourd'hui ?"],
  ["ir a + infinitif / estar + gérondif","/iɾ a · esˈtaɾ/","aller + verbe / être en train de","Voy a comer = je vais manger (futur proche, A1.9). Estoy comiendo = je suis en train de manger (A1.8). Les deux structures se complètent : « ¿Qué estás haciendo? — Estoy comiendo. ¿Qué vas a hacer? — Voy a dormir. »","⏳","Estoy comiendo y voy a descansar.","Je suis en train de manger et je vais me reposer."]
 ]),
 blk("Une conversation dans la rue", [
  ["la estación","/la estaˈθjon/","la gare, la station","Tous les noms en -ción / -sión sont féminins. Pluriel : las estaciones (l'accent disparaît). Estación de tren = la gare ferroviaire.","🚉","La estación está en la plaza.","La gare est sur la place."],
  ["la plaza","/la ˈplaθa/","la place","z = th (Espagne), s (Amérique latine). Les places sont le cœur de la vie sociale espagnole.","⛲","La plaza es muy grande.","La place est très grande."],
  ["al lado de","/al ˈlaðo ðe/","à côté de","Expression de lieu vue en A1.4. « de + el » = « del » : al lado del banco.","↔️","Está al lado de la plaza.","C'est à côté de la place."]
 ]),
 blk("Expressions familières de la conversation (bonus : 10)", [
  ["hablar por los codos","/aˈβlaɾ poɾ los ˈkoðos/","parler sans arrêt, être bavard","Littéralement « parler par les coudes ». Très courant et familier, en Espagne comme en Amérique latine. Se dit surtout de quelqu'un qui ne s'arrête jamais de parler.","🗣️","Mi tía habla por los codos.","Ma tante parle sans arrêt."],
  ["dar la lata","/daɾ la ˈlata/","embêter, casser les pieds","Familier. Littéralement « donner la boîte de conserve ». Se dit de quelqu'un qui insiste. Avec une personne : « dar la lata a alguien ».","😩","Mi hermano me da la lata.","Mon frère me casse les pieds."],
  ["estar de mala leche","/esˈtaɾ ðe ˈmala ˈletʃe/","être de mauvaise humeur","FAMILIER, surtout en Espagne, un peu vulgaire (« leche » = lait). À éviter au travail ou devant des inconnus. En contexte neutre : « estar de mal humor ».","😡","Hoy Pedro está de mala leche.","Aujourd'hui Pedro est d'une humeur de chien."],
  ["tener la sartén por el mango","/teˈneɾ la sarˈten poɾ el ˈmaŋɡo/","tenir les rênes, avoir la situation en main","Littéralement « tenir la poêle par le manche » : celui qui a la poêle par le manche a le contrôle. Se dit de celui qui décide.","🍳","En esta empresa, la directora tiene la sartén por el mango.","Dans cette entreprise, la directrice tient les rênes."],
  ["echar una mano","/eˈtʃaɾ ˈuna ˈmano/","donner un coup de main","Très courant, neutre et sympathique. « ¿Te echo una mano? » = je te donne un coup de main ? Avec tú / usted : « te echo una mano » / « le echo una mano ».","🤲","¿Me echas una mano, por favor?","Tu me donnes un coup de main, s'il te plaît ?"],
  ["tomar el pelo","/toˈmaɾ el ˈpelo/","faire marcher, se moquer de","Se moquer de quelqu'un, le faire marcher (pas forcément méchant). Souvent en : « ¿Me estás tomando el pelo? » = tu me fais marcher ?","😜","Me estás tomando el pelo.","Tu me fais marcher."],
  ["valer la pena","/baˈleɾ la ˈpena/","valoir la peine","Presque toujours à la 3e personne : « vale la pena », « no vale la pena ». « Pena » = la peine, l'effort.","💎","Este libro vale la pena.","Ce livre vaut la peine."],
  ["no tener pelos en la lengua","/no teˈneɾ ˈpelos en la ˈleŋɡwa/","ne pas avoir la langue dans sa poche, dire ce qu'on pense","Littéralement « ne pas avoir de poils sur la langue ». Se dit d'une personne très franche, qui dit tout sans filtre.","💬","Mi abuela no tiene pelos en la lengua.","Ma grand-mère n'a pas la langue dans sa poche."],
  ["dar calabazas","/daɾ kalaˈβasas/","éconduire, refuser les avances de quelqu'un","Littéralement « donner des courges ». Surtout en Espagne, dans le contexte amoureux : refuser quelqu'un qui te fait la cour (en français familier : « mettre un râteau »). On dit : « dar calabazas a alguien ».","🎃","Pedro invita a Ana, pero ella le da calabazas.","Pedro invite Ana, mais elle l'éconduit."],
  ["quedarse con la boca abierta","/keˈðaɾse kon la ˈβoka aˈβjeɾta/","rester bouche bée","Littéralement « rester avec la bouche ouverte » : surpris au point de ne rien dire. Verbe pronominal : me quedo, te quedas, se queda… (comme llamarse).","😮","Me quedo con la boca abierta.","Je reste bouche bée."]
 ]),
 blk("Prononciation : ¿ ? ¡ ! et accents", [
  ["¿ ? et ¡ ! : les signes doubles","/inteɾoɣaˈθjon · eksklamaˈθjon/","signes d'interrogation et d'exclamation","En espagnol, on met un signe AU DÉBUT (¿ ou ¡) ET un à la fin (? ou !). Ils encadrent seulement la question ou l'exclamation : « Hola, ¿qué tal? ». Sur un clavier : Alt Gr + ? ou appui long sur ?.","❗","¡Hola! ¿Qué tal?","Salut ! Ça va ?"],
  ["qué / que","/ke/","quoi ? / que","Même prononciation. AVEC accent : question ou exclamation (¿Qué?, ¡Qué bien!). SANS accent : conjonction (« que »). Test : on peut le remplacer par « quoi » ou « quel » ? → qué.","✍️","¿Qué hora es? Dice que son las tres.","Quelle heure est-il ? Il dit qu'il est trois heures."],
  ["L'intonation de la question","/intonaˈθjon/","la voix monte à la fin","Contrairement au français, l'ordre des mots ne change pas : « Tienes hambre. » devient « ¿Tienes hambre? » grâce à la mélodie (la voix monte) et aux signes ¿ ?. Dans les questions avec mot interrogatif (¿Dónde estás?), la voix redescend.","🎶","¿Tienes hambre? Sí, tengo hambre.","Tu as faim ? Oui, j'ai faim."],
  ["cuánto tiempo : ua et ie","/ˈkwanto ˈtjempo/","diphtongues ua et ie","ua se lit « wa », ie se lit « yé » : KWAN-to TYEM-po, KYEN. Chaque diphtongue = UNE seule syllabe : ne la sépare pas.","🔊","¿Cuánto tiempo tienes?","Combien de temps as-tu ?"]
 ])
);
LESSONS_ES[212] = {
 code:"A1.12", level:"A1",
 VOCAB: V,
 MEM_WORDS: __esIdx(V, ["¡Cuánto tiempo sin verte!","¿Cómo estás? / ¿Cómo está usted?","¿Puedes ayudarme? / ¿Podría ayudarme?","Perdona / Perdone","Que tengas un buen día / Que tenga un buen día","¿Por qué?","así que","hablar por los codos","echar una mano","valer la pena"]),
 MINI_CHECKS: [
  {q:"Comment dit-on « ça fait longtemps qu'on ne s'est pas vu » à un ami ?", opts:["¡Cuánto tiempo sin verte!","¡Hasta luego, amigo!","¡Qué bien, gracias!"], correct:0, fb:"« ¡Cuánto tiempo sin verte! » : exclamation avec ¡ ! et accent sur cuánto. À un inconnu ou en contexte formel : « sin verle »."},
  {q:"Quelle est la forme la plus polie pour demander « Pourriez-vous m'aider ? »", opts:["¿Me ayudas?","¿Puedes ayudarme?","¿Podría ayudarme?"], correct:2, fb:"« ¿Podría…? » est la formule la plus polie (à apprendre telle quelle). « ¿Puedes…? » reste informel (tú)."},
  {q:"À un inconnu âgé, quelle salutation est la plus naturelle ?", opts:["¿Qué tal?","¿Cómo está usted?"], correct:1, fb:"Inconnu âgé = usted : « ¿Cómo está usted? ». « ¿Qué tal? » est réservé aux amis ; « ¿Qué tal está usted? » est rare."},
  {q:"« Parce que » se dit…", opts:["porque","por qué"], correct:0, fb:"« porque » = parce que (un mot, sans accent). « ¿Por qué? » = pourquoi ? (deux mots, accent sur qué)."},
  {q:"Tu marches sur le pied de quelqu'un dans le bus. Tu dis tout de suite :", opts:["¡Perdón!","¡De nada!"], correct:0, fb:"« ¡Perdón! » (ou « ¡Lo siento! ») s'excuse immédiatement. « De nada » est la réponse à « gracias »."},
  {q:"En partant, tu souhaites une bonne journée à ta cliente (formel) :", opts:["Que tengas un buen día.","Que tenga un buen día."], correct:1, fb:"Usted → « que tenga ». Tú → « que tengas ». C'est un souhait figé, appris en bloc."},
  {q:"Complète : « Yo ___ a la estación. »", opts:["voy","soy","estoy"], correct:0, fb:"ir : voy, vas, va, vamos, vais, van. Pour aller quelque part, on utilise ir + a."},
  {q:"Devant quel type de mot « y » devient-il « e » ?", opts:["devant un mot qui commence par le son i (padres e hijos)","devant un mot qui commence par o"], correct:0, fb:"y + i- / hi- → e, pour éviter « y i » : padres e hijos, Marta e Isabel."}
 ],
 ROUNDS: [
  __esR("¡Hola, María! ¿Qué tal todo?","Salut, María ! Tout va bien ?"),
  __esR("¡Cuánto tiempo sin verte!","Ça fait longtemps qu'on ne s'est pas vu !"),
  __esR("¿Podría ayudarme, por favor?","Pourriez-vous m'aider, s'il vous plaît ?"),
  __esR("Perdona, ¿puedes ayudarme, por favor?","Excuse-moi, peux-tu m'aider, s'il te plaît ?"),
  __esR("¿Dónde está la estación?","Où est la gare ?"),
  __esR("Está al lado de la plaza.","C'est à côté de la place."),
  __esR("Que tengas un buen día.","Passe une bonne journée."),
  __esR("Buenos días, señor. ¿Cómo está usted?","Bonjour, monsieur. Comment allez-vous ?"),
  __esR("Tengo hambre, así que voy a comer.","J'ai faim, donc je vais manger."),
  __esR("Estoy contenta porque tengo un libro nuevo.","Je suis contente parce que j'ai un livre neuf."),
  __esR("¿Por qué estás cansado? Porque tengo sueño.","Pourquoi es-tu fatigué ? Parce que j'ai sommeil."),
  __esR("No entiendo, ¿podría repetir, por favor?","Je ne comprends pas, pourriez-vous répéter, s'il vous plaît ?"),
  __esR("¿Adónde vas? Voy a la estación.","Où vas-tu ? Je vais à la gare.")
 ],
 QUIZ: [
  {cat:"ecrit", q:"Tu retrouves un ami que tu n'as pas vu depuis des mois. Tu lui dis :", opts:["¡Cuánto tiempo sin verte!","¡Buenas noches!","¡De nada!"], correct:0, why:"« ¡Cuánto tiempo sin verte! » = ça fait longtemps qu'on ne s'est pas vu. Les deux autres ne correspondent pas à la situation."},
  {cat:"ecrit", q:"Tu marches sur le pied de quelqu'un dans le bus. Tu dis :", opts:["¡Perdón!","¡De nada!","¡Hasta luego!"], correct:0, why:"« ¡Perdón! » (ou « ¡Lo siento! ») s'excuse tout de suite. « De nada » répond à un merci."},
  {cat:"ecrit", q:"Quelqu'un t'aide à porter ta valise. Tu dis « ¡Gracias! ». Il te répond :", opts:["De nada.","Lo siento.","Que tengas un buen día."], correct:0, why:"« De nada » = de rien, la réponse standard à « gracias »."},
  {cat:"ecrit", q:"Forme la plus polie pour demander un service à un inconnu :", opts:["¿Podría ayudarme, por favor?","¿Puedes ayudarme?","¿Me ayudas?"], correct:0, why:"« ¿Podría…? » est le niveau le plus poli (formule figée). « ¿Puedes…? » et « ¿Me ayudas? » sont informels (tú)."},
  {cat:"ecrit", q:"Quel mot interrogatif pour demander un lieu ?", opts:["¿Cuándo?","¿Dónde?","¿Quién?"], correct:1, why:"¿Dónde? = où ? ; ¿Cuándo? = quand ? ; ¿Quién? = qui ?"},
  {cat:"ecrit", q:"Quelle réponse est correcte ?", opts:["¿Por qué estás triste? — Porque estoy cansado.","¿Porque estás triste? — Por qué estoy cansado.","¿Por qué estás triste? — Por qué estoy cansado."], correct:0, why:"Question : « ¿Por qué? » en deux mots avec accent ; réponse : « porque » en un mot, sans accent."},
  {cat:"ecrit", q:"Comment demander « Quel est ton numéro de téléphone ? »", opts:["¿Cuál es tu número de teléfono?","¿Qué es tu número de teléfono?","¿Quién es tu número de teléfono?"], correct:0, why:"Pour demander une donnée précise devant « es », on emploie « cuál ». « Qué es… » demande une définition."},
  {cat:"ecrit", q:"Tengo sueño, ___ voy a dormir.", opts:["pero","así que","porque"], correct:1, why:"« así que » introduit la conséquence : j'ai sommeil, donc je vais dormir. « porque » donnerait la cause."},
  {cat:"ecrit", q:"Estoy contenta ___ tengo un libro nuevo.", opts:["porque","pero","así que"], correct:0, why:"La phrase donne la cause de la joie : porque = parce que."},
  {cat:"ecrit", q:"Transforme en vouvoiement : « ¿Cómo estás? »", opts:["¿Cómo está usted?","¿Cómo estás usted?","¿Cómo estáis?"], correct:0, why:"usted se conjugue comme él/ella : está (avec accent). « estáis » = vosotros (plusieurs amis, Espagne)."},
  {cat:"ecrit", q:"Au revoir à un client (formel) :", opts:["Que tenga un buen día.","Que tengas un buen día.","Hasta pronto, tío."], correct:0, why:"Client = usted : « que tenga ». « tío » et « que tengas » sont informels."},
  {cat:"ecrit", q:"Yo ___ de Madrid, pero ahora ___ en Lyon.", opts:["soy / estoy","estoy / soy","tengo / voy"], correct:0, why:"Origine = ser (soy de Madrid) ; lieu actuel = estar (estoy en Lyon)."},
  {cat:"ecrit", q:"¿Adónde ___ tú? — Voy al cine.", opts:["vas","va","van"], correct:0, why:"tú → vas (ir). « va » = él / usted ; « van » = ellos / ustedes."},
  {cat:"ecrit", q:"À un ami qui te demande « ¿Qué tal? », tu réponds :", opts:["Bien, ¿y tú?","Bien, ¿y usted?","De nada."], correct:0, why:"Entre amis : tú → « ¿Y tú? ». « ¿Y usted? » est pour le vouvoiement. « De nada » ne répond pas à une question de salutation."},
  {cat:"oral", audio:"¡Hola, Marta! ¡Cuánto tiempo sin verte!", q:"Écoute : que se passe-t-il ?", opts:["Deux amis se retrouvent après longtemps","Deux inconnus se saluent","Quelqu'un s'excuse"], correct:0, why:"« ¡Cuánto tiempo sin verte! » = ça fait longtemps ! On retrouve un(e) ami(e) (tutoiement)."},
  {cat:"oral", audio:"Perdone, ¿dónde está la estación?", q:"Écoute : la question est…", opts:["formelle (usted) et demande un lieu","informelle et demande l'heure","formelle et demande un prix"], correct:0, why:"« Perdone » (usted) + « ¿dónde? » = on demande poliment un lieu : la gare."},
  {cat:"oral", audio:"¿Podría ayudarme, por favor?", q:"Écoute : de quel type de phrase s'agit-il ?", opts:["Une demande très polie","Un remerciement","Un au revoir"], correct:0, why:"« ¿Podría…, por favor? » = pourriez-vous… ? : demande très polie."},
  {cat:"oral", audio:"Muchas gracias. Que tenga un buen día.", q:"Écoute : que souhaite la personne ?", opts:["Une bonne journée","Un bon voyage","Un bon appétit"], correct:0, why:"« Que tenga un buen día » = passez une bonne journée (formel, usted)."},
  {cat:"oral", audio:"Tengo hambre, así que voy a comer.", q:"Écoute : pourquoi la personne va-t-elle manger ?", opts:["Elle a faim","Elle est fatiguée","Elle est contente"], correct:0, why:"« Tengo hambre » = j'ai faim ; « así que » = donc : la faim explique qu'elle va manger."},
  {cat:"comprehension", passage:"María: ¡Hola, Pablo! ¡Cuánto tiempo sin verte! ¿Qué tal todo? — Pablo: ¡Hola! Todo muy bien, gracias. Oye, ¿podría hacerte una pregunta? ¿Dónde está la estación? — María: Sí, claro. Está al lado de la plaza. — Pablo: ¡Muchas gracias! Que tengas un buen día.", q:"Où est la gare ?", opts:["À côté de la place","Devant la mairie","Loin de la place"], correct:0, why:"« Está al lado de la plaza » : al lado de = à côté de."},
  {cat:"comprehension", passage:"María: ¡Hola, Pablo! ¡Cuánto tiempo sin verte! ¿Qué tal todo? — Pablo: ¡Hola! Todo muy bien, gracias. Oye, ¿podría hacerte una pregunta? ¿Dónde está la estación? — María: Sí, claro. Está al lado de la plaza. — Pablo: ¡Muchas gracias! Que tengas un buen día.", q:"Que souhaite Pablo à María en partant ?", opts:["Une bonne journée","Un bon week-end","Un bon voyage"], correct:0, why:"« Que tengas un buen día » = passe une bonne journée."},
  {cat:"comprehension", passage:"María: ¡Hola, Pablo! ¡Cuánto tiempo sin verte! ¿Qué tal todo? — Pablo: ¡Hola! Todo muy bien, gracias. Oye, ¿podría hacerte una pregunta? ¿Dónde está la estación? — María: Sí, claro. Está al lado de la plaza. — Pablo: ¡Muchas gracias! Que tengas un buen día.", q:"Comment voit-on que María et Pablo se tutoient ?", opts:["Par « verte » et « que tengas » (formes tú)","Par « usted »","Par « señor »"], correct:0, why:"« verte » et « tengas » sont des formes de tutoiement ; il n'y a ni « usted », ni « señor »."},
  {cat:"comprehension", passage:"Señor Díaz: Buenos días, señora Vega. ¿Cómo está usted? — Señora Vega: Muy bien, gracias. ¿Y usted? — Señor Díaz: Bien, gracias. Perdone, ¿podría ayudarme, por favor? No entiendo este mensaje. — Señora Vega: Sí, claro. Un momento. — Señor Díaz: Muchas gracias, señora.", q:"Que demande le señor Díaz à la señora Vega ?", opts:["De l'aide pour comprendre un message","Où est la gare","Quelle heure il est"], correct:0, why:"« ¿Podría ayudarme? » + « No entiendo este mensaje » = il demande de l'aide pour comprendre le message."},
  {cat:"comprehension", passage:"Señor Díaz: Buenos días, señora Vega. ¿Cómo está usted? — Señora Vega: Muy bien, gracias. ¿Y usted? — Señor Díaz: Bien, gracias. Perdone, ¿podría ayudarme, por favor? No entiendo este mensaje. — Señora Vega: Sí, claro. Un momento. — Señor Díaz: Muchas gracias, señora.", q:"Quels indices montrent que la conversation est formelle ?", opts:["« usted », « señor / señora » et « perdone »","« tío » et « tú »","Seulement « Buenos días »"], correct:0, why:"usted + señor / señora + perdone = vouvoiement. Il n'y a ni « tú » ni « tío » dans le texte."}
 ],
 PRON_VERBS: [
  {en:"Hola, ¿qué tal todo?", fr:"Salut, tout va bien ? (h muette : O-la ; qué = KÉ ; la voix monte à la fin)"},
  {en:"¡Cuánto tiempo sin verte!", fr:"Ça fait longtemps ! (ua = wa : KWAN-to ; ie = yé : TYEM-po)"},
  {en:"¿Cómo está usted?", fr:"Comment allez-vous ? (accent sur CÓ-mo et sur es-TÁ ; la voix redescend)"},
  {en:"Perdone, ¿podría ayudarme?", fr:"Excusez-moi, pourriez-vous m'aider ? (r tapé : per-DO-ne ; ayudarme : a-yu-DAR-me)"},
  {en:"¿Dónde está la estación?", fr:"Où est la gare ? (DÓN-de ; es-ta-THION en Espagne, es-ta-SION en Amérique latine)"},
  {en:"Muchas gracias, señora.", fr:"Merci beaucoup, madame. (ch = tch : MU-tchas ; c = th : GRA-thias ; ñ = gn : se-GNO-ra)"},
  {en:"Que tengas un buen día.", fr:"Passe une bonne journée. (que = ké, le u est muet ; ng : TEN-gas)"},
  {en:"¿Por qué estás cansado?", fr:"Pourquoi es-tu fatigué ? (por-KÉ avec accent sur qué ; es-TÁS)"},
  {en:"Tengo hambre, así que voy a comer.", fr:"J'ai faim, donc je vais manger. (h muette : AM-bre ; a-SÍ ke ; v = b : boy)"},
  {en:"Hasta pronto, hasta luego.", fr:"À bientôt, à tout à l'heure. (h muette : AS-ta ; r tapé : PRON-to)"}
 ],
 READING: [
  "Hoy es sábado y hace buen tiempo.",
  "Pablo está en la calle con su amiga María.",
  "—¡Hola, María! ¡Cuánto tiempo sin verte! ¿Qué tal todo?",
  "—¡Hola, Pablo! Todo muy bien, gracias. ¿Y tú?",
  "—Bien, pero tengo una pregunta. Perdona, ¿puedes ayudarme?",
  "—Sí, claro. ¿Qué necesitas?",
  "—¿Dónde está la estación? Hoy voy a Madrid.",
  "—Está al lado de la plaza, a la derecha.",
  "—¡Muchas gracias, María! Que tengas un buen día.",
  "—De nada, Pablo. Igualmente. ¡Hasta pronto!"
 ],
 GLOSS: [
  {en:"hace buen tiempo", fr:"il fait beau (météo, HACER impersonnel, A1.11)"},
  {en:"la calle", fr:"la rue (féminin)"},
  {en:"su amiga", fr:"son amie (su = son / sa / leur ; amiga au féminin car María est une femme)"},
  {en:"necesitas", fr:"tu as besoin de, tu veux (verbe en -ar : necesitar)"},
  {en:"a la derecha", fr:"à droite"},
  {en:"hoy voy a Madrid", fr:"aujourd'hui je vais à Madrid (ir + a + lieu)"},
  {en:"igualmente", fr:"de même, à toi aussi"},
  {en:"¡Hasta pronto!", fr:"à bientôt !"}
 ],
 GRAMMAR1: {
  heading:"Poser toutes les questions de A1 et conjuguer les cinq verbes piliers",
  lede:"Une vraie conversation, c'est une suite de questions et de réponses. Tu connais déjà tous les mots interrogatifs : ici, on les met côte à côte avec leurs accents obligatoires, puis on les associe aux cinq verbes que tu as le plus croisés en A1 : ser, estar, tener, ir et hacer.",
  conj:[
   ["yo →","soy · estoy · tengo · voy · hago","Soy Ana. Estoy en Lyon. Tengo veinte años. Voy a la plaza. Hago una pregunta."],
   ["tú →","eres · estás · tienes · vas · haces","¿Eres de Lyon? ¿Cómo estás? ¿Tienes hambre? ¿Adónde vas? ¿Qué haces?"],
   ["él, ella, usted →","es · está · tiene · va · hace","¿Es usted de Lyon? ¿Cómo está usted? ¿Tiene usted hambre? ¿Adónde va usted? ¿Qué hace usted?"],
   ["nosotros/as →","somos · estamos · tenemos · vamos · hacemos","Somos amigos. Estamos bien. Tenemos hambre. Vamos a la plaza. Hacemos una pregunta."],
   ["vosotros/as →","sois · estáis · tenéis · vais · hacéis","¿Sois amigos? ¿Cómo estáis? ¿Tenéis hambre? ¿Adónde vais? ¿Qué hacéis?"],
   ["ellos, ellas, ustedes →","son · están · tienen · van · hacen","Son amigos. ¿Cómo están ustedes? Tienen sueño. Van a la plaza. Hacen una fiesta."]
  ],
  ruleHtml:"📖 <b>1. Les mots interrogatifs : toujours avec accent écrit, toujours entre ¿ ?</b><br>• <b>¿Quién? / ¿Quiénes?</b> = qui ? → <i>¿Quién es ese chico?</i><br>• <b>¿Qué?</b> = quoi ? / quel ? → <i>¿Qué hora es?</i> <i>¿Qué haces?</i><br>• <b>¿Dónde?</b> = où ? → <i>¿Dónde está la estación?</i> · <b>¿De dónde?</b> = d'où ? → <i>¿De dónde eres?</i> · <b>¿Adónde?</b> = vers où ? → <i>¿Adónde vas?</i><br>• <b>¿Cuándo?</b> = quand ? → <i>¿Cuándo es la fiesta?</i><br>• <b>¿Cómo?</b> = comment ? → <i>¿Cómo te llamas?</i> <i>¿Cómo estás?</i><br>• <b>¿Cuánto / cuánta / cuántos / cuántas?</b> = combien ? → <i>¿Cuántos años tienes?</i><br>• <b>¿Cuál / cuáles?</b> = quel ? (choix, donnée) → <i>¿Cuál es tu teléfono?</i><br>• <b>¿Por qué?</b> = pourquoi ? → réponse : <b>porque</b> = parce que.<br><br>✍️ <b>Pas d'inversion comme en français</b> : on garde l'ordre normal et la voix monte. « Tienes hambre » → « ¿Tienes hambre? ». Avec un mot interrogatif : mot interrogatif + verbe (+ sujet) : ¿Dónde vive Ana? ¿Cómo está usted?<br><br>👥 <b>Tutoiement ET vouvoiement</b> : tú → <b>¿Cómo estás? ¿De dónde eres? ¿Cuántos años tienes? ¿Qué haces?</b> · usted → <b>¿Cómo está usted? ¿De dónde es usted? ¿Cuántos años tiene usted? ¿Qué hace usted?</b> usted se conjugue comme él/ella (está, es, tiene, hace) ; ustedes comme ellos/ellas.<br><br>🧭 <b>Qué ou cuál ?</b> Devant un nom : <b>qué</b> (¿Qué libro?) ; devant « es / son » pour demander une donnée (numéro, adresse, couleur choisie) : <b>cuál</b> (¿Cuál es tu dirección?). Pour demander une définition : <b>qué</b> (¿Qué es esto?).<br><br>🔧 <b>2. Les cinq verbes piliers</b> (tableau ci-dessus) : <b>ser</b> = identité, origine, caractère ; <b>estar</b> = lieu, état du moment ; <b>tener</b> = âge, possession, sensations ; <b>ir</b> = aller (toujours avec <b>a</b>) ; <b>hacer</b> = faire (seul « yo » irrégulier : <b>hago</b>).<br><br>⏳ <b>3. Deux structures de synthèse</b> : <b>ir a + infinitif</b> = futur proche (<i>Voy a comer. ¿Qué vas a hacer?</i>) ; <b>estar + gérondif</b> = action en cours (<i>Estoy comiendo. ¿Qué estás haciendo?</i>).<br><br>⚠️ <b>Pièges de francophone</b> : « ¿Qué tal está usted? » est rare : dis « ¿Cómo está usted? » ; « Tengo 20 años », pas « soy 20 años » ; « porque » (parce que) ≠ « por qué » (pourquoi) ; le ¿ d'ouverture est obligatoire à l'écrit.",
  dialogueLede:"Deux amis se croisent dans la rue (tutoiement) :",
  dialogue:[
   {who:"them", en:"¡Hola, Luis! ¡Cuánto tiempo sin verte! ¿Qué tal?", fr:"Salut, Luis ! Ça fait longtemps ! Ça va ?"},
   {who:"you", en:"¡Hola, Ana! Muy bien, gracias. ¿Y tú? ¿Cómo estás?", fr:"Salut, Ana ! Très bien, merci. Et toi ? Comment vas-tu ?"},
   {who:"them", en:"Estoy bien, pero estoy cansada porque tengo mucho trabajo.", fr:"Je vais bien, mais je suis fatiguée parce que j'ai beaucoup de travail."},
   {who:"you", en:"¡Qué pena! ¿Adónde vas ahora?", fr:"Quel dommage ! Où vas-tu maintenant ?"},
   {who:"them", en:"Voy a la estación porque hoy voy a Madrid. ¿Qué hora es?", fr:"Je vais à la gare parce qu'aujourd'hui je vais à Madrid. Quelle heure est-il ?"},
   {who:"you", en:"Son las tres. ¡Hasta pronto! Que tengas un buen día.", fr:"Il est trois heures. À bientôt ! Passe une bonne journée."}
  ],
  whyLabel:"Pourquoi ce palier réutilise-t-il tout ce que tu connais ?",
  whyText:"Ce palier n'apprend presque rien de nouveau, et c'est voulu : le but n'est pas d'accumuler des règles isolées, mais de les faire <b>vivre ensemble</b> dans une vraie conversation (salutation, question, réponse, remerciement, au revoir). Chaque mot interrogatif cache une réponse attendue : <b>¿Quién?</b> → une personne ; <b>¿Dónde?</b> → un lieu avec estar ; <b>¿Cuándo?</b> → un moment ; <b>¿Cuánto?</b> → un nombre ; <b>¿Por qué?</b> → porque… Si tu reconnais la réponse attendue, tu comprends la question même quand tu ne connais pas tous les mots. Si ce palier te semble facile, c'est le signe que tout le niveau A1 est bien acquis. Dernier conseil : ne traduis pas mot à mot depuis le français ; apprends des phrases entières (« ¿Cómo está usted? », « Que tenga un buen día ») : elles servent partout."
 },
 GRAMMAR2: {
  heading:"Politesse, tú ou usted, connecteurs : parler comme dans la vraie vie",
  dialogueLede:"Au bureau, un employé et sa directrice (vouvoiement) :",
  dialogue:[
   {who:"them", en:"Buenos días, señor Ruiz. ¿Cómo está usted?", fr:"Bonjour, monsieur Ruiz. Comment allez-vous ?"},
   {who:"you", en:"Buenos días, señora. Muy bien, gracias. ¿Y usted?", fr:"Bonjour, madame. Très bien, merci. Et vous ?"},
   {who:"them", en:"Bien, gracias. ¿Podría ayudarme, por favor? No entiendo este mensaje.", fr:"Bien, merci. Pourriez-vous m'aider, s'il vous plaît ? Je ne comprends pas ce message."},
   {who:"you", en:"Sí, claro. Un momento. Perdone, ¿puedo sentarme aquí?", fr:"Oui, bien sûr. Un instant. Excusez-moi, puis-je m'asseoir ici ?"},
   {who:"them", en:"Por supuesto. Muchas gracias por su ayuda.", fr:"Bien sûr. Merci beaucoup pour votre aide."},
   {who:"you", en:"De nada. Que tenga un buen día, señora.", fr:"De rien. Passez une bonne journée, madame."}
  ],
  ruleHtml:"🎩 <b>1. Tú ou usted : choisir selon le contexte</b><br>• <b>tú</b> = amis, famille, collègues de ton âge, enfants, jeunes ; en Espagne, on tutoie vite.<br>• <b>usted</b> = inconnus, personnes âgées, clients, supérieurs, administration, médecin. En cas de doute : usted, toujours poli.<br>• Colombie : on emploie souvent usted même dans des contextes amicaux ou familiaux ; en Espagne, c'est plus rare.<br>• Pluriel : <b>vosotros</b> (Espagne, amis) ; <b>ustedes</b> (Amérique latine, et le vouvoiement pluriel en Espagne).<br><br>🔁 <b>2. Les formules sociales, en tú ET en usted</b><br>• Saluer : <b>Hola</b> (tous) · <b>Buenos días / buenas tardes / buenas noches</b> (à un inconnu) · <b>¿Qué tal?</b> (ami) · <b>¿Cómo está usted?</b> (formel).<br>• Remercier : <b>Gracias · Muchas gracias</b> · réponse : <b>De nada · No hay de qué</b> (mêmes mots avec tú et usted).<br>• S'excuser : <b>Lo siento</b> (regret) · <b>Perdón</b> (petit accroc) · <b>Perdona</b> (tú) / <b>Perdone</b> (usted) · <b>Disculpa / Disculpe</b>. Réponse : <b>No pasa nada</b>.<br>• Prendre congé : <b>Adiós · Hasta luego · Hasta pronto · Hasta mañana</b> · <b>Que tengas un buen día</b> (tú) / <b>Que tenga un buen día</b> (usted) · réponse <b>Igualmente</b>.<br><br>🪜 <b>3. Les trois niveaux de politesse pour demander</b> : <b>¿Me ayudas?</b> / <b>¿Puedes ayudarme?</b> (tú, informel) → <b>¿Puede ayudarme?</b> (usted, poli) → <b>¿Podría ayudarme, por favor?</b> (la plus polie). « ¿Podría…? » est une <b>formule de politesse</b> à apprendre telle quelle : inconnu, client, supérieur. Tu n'as pas à la conjuguer. « ¿Puedo…? » (puis-je ?) sert à demander la permission : <b>¿Puedo pasar?</b> Le « me » se colle à l'infinitif : <b>ayudarme</b>.<br><br>🔗 <b>4. Les connecteurs</b> : <b>y</b> (et ; devant i- : <b>e</b>) → <i>Estoy bien y tengo hambre.</i> · <b>pero</b> (mais) → <i>Es pequeño, pero muy rápido.</i> · <b>así que</b> (donc, conséquence) → <i>Tengo hambre, así que voy a comer.</i> · <b>porque</b> (parce que, cause) → <i>Estoy contenta porque tengo un libro.</i> · <b>también</b> (aussi) → <i>Yo también tengo hambre.</i> Retiens : <b>porque</b> donne la cause ; <b>así que</b> donne la conséquence.<br><br>🌍 <b>5. Variantes utiles</b> : « Buenos días / buen día » (Argentine) ; perdona / perdone (Espagne), disculpa / disculpe (très courant en Amérique latine) ; con permiso (pour passer, surtout Amérique latine) ; « ordenador » (Espagne) / « computador » ; « móvil » / « celular » ; « zumo » / « jugo » ; « vosotros » (Espagne seulement).",
  whyLabel:"Pourquoi la politesse compte-t-elle autant ?",
  whyText:"En français, « tu / vous » est une règle sociale ; en espagnol, elle l'est aussi, mais les <b>formules toutes faites</b> la portent à ta place : « ¿Cómo está usted? », « Perdone », « Que tenga un buen día » suffisent pour être poli sans réfléchir. Si tu apprends ces formules en bloc, tu n'as pas à conjuguer à chaque phrase. Piège : le « tu / vous » espagnol est plus souple que le français (on tutoie plus vite en Espagne, moins vite dans certains pays d'Amérique latine). Écoute comment l'autre s'adresse à toi, puis fais pareil. Pour demander un service, plus le contexte est formel, plus on ajoute de politesse : <b>por favor</b>, <b>¿Podría…?</b>, <b>muchas gracias</b>. Une demande polie + un remerciement + un souhait en partant : voilà une conversation A1 parfaite."
 },
 REVIEW: [
  {q:"« Il fait chaud » (météo) :", opts:["Hace calor.","Está calor."], correct:0, fb:"La météo avec « chaud / froid / soleil » se dit avec HACER impersonnel : hace calor, hace frío, hace sol. (rappel A1.11)"},
  {q:"« Il pleut » :", opts:["Llueve.","Hace lluvia."], correct:0, fb:"« Llover » et « nevar » sont des verbes à eux seuls : llueve, nieva. (rappel A1.11)"},
  {q:"« Il est trois heures. »", opts:["Son las tres.","Es las tres."], correct:0, fb:"Pluriel pour 2 h et plus : son las… (rappel A1.11)"},
  {q:"« Il est une heure. »", opts:["Es la una.","Son la una."], correct:0, fb:"Pour 1 h : es la una (singulier). (rappel A1.11)"},
  {q:"« Hoy es lunes. » Demain, c'est…", opts:["Mañana es martes.","Mañana es domingo."], correct:0, fb:"lunes → martes ; domingo vient avant lunes. Les jours de la semaine sont masculins et sans majuscule. (rappel A1.11)"}
 ],
 DRILLS: [
  {type:"fill", text:"¿___ estás? — Muy bien, gracias.", answers:["Cómo","cómo"], why:"¿Cómo estás? = comment vas-tu ? Accent écrit sur cómo."},
  {type:"fill", text:"¿___ es tu mejor amigo? — Es Pedro.", answers:["Quién","quién"], why:"On demande qui est la personne : ¿Quién? (accent écrit)."},
  {type:"fill", text:"¿___ está la estación? — Al lado de la plaza.", answers:["Dónde","dónde"], why:"On demande un lieu : ¿Dónde? (accent écrit)."},
  {type:"fill", text:"¿___ años tienes? — Tengo veinte.", answers:["Cuántos","cuántos"], why:"años est masculin pluriel : cuántos (accord avec le nom)."},
  {type:"fill", text:"¿___ es la fiesta? — El sábado.", answers:["Cuándo","cuándo"], why:"On demande un moment : ¿Cuándo? (accent écrit)."},
  {type:"fill", text:"¿___ estás cansado? — Porque tengo sueño.", answers:["Por qué","por qué"], why:"Question : « por qué » en deux mots avec accent ; réponse : « porque »."},
  {type:"fill", text:"Tengo hambre, ___ voy a comer.", answers:["así que","Así que"], why:"« así que » exprime la conséquence : j'ai faim, donc je vais manger."},
  {type:"fill", text:"Estoy bien, gracias. ¿___ usted?", answers:["Y","y"], why:"« ¿Y usted? » = et vous ? On renvoie la question avec « y »."},
  {type:"fill", text:"Tú ___ a la plaza. (ir)", answers:["vas","Vas"], why:"ir : yo voy, tú vas, él va."},
  {type:"fill", text:"Nosotros ___ una pregunta. (hacer)", answers:["hacemos","Hacemos"], why:"hacer : hago, haces, hace, hacemos, hacéis, hacen."},
  {type:"fill", text:"Yo ___ la cena. (hacer)", answers:["hago","Hago"], why:"hacer : le « yo » est irrégulier : hago."},
  {type:"fill", text:"Usted ___ muy simpático. (ser)", answers:["es","Es"], why:"usted se conjugue comme él / ella : es."},
  {type:"fill", text:"Ellos ___ en la estación. (estar)", answers:["están","Están"], why:"Un lieu → estar. Ellos → están (accent écrit)."},
  {type:"fill", text:"¿Tú ___ hermanos? (tener)", answers:["tienes","Tienes"], why:"tener : tú tienes (e → ie)."},
  {type:"fill", text:"Vosotros ___ a casa. (ir)", answers:["vais","Vais"], why:"vosotros → vais (ir). Espagne seulement ; en Amérique latine : ustedes van."},
  {type:"fill", text:"¡Que ___ un buen día, señora! (souhait formel : tener)", answers:["tenga","Tenga"], why:"Souhait figé : « que tengas » (tú), « que tenga » (usted). À retenir en bloc."},
  {type:"fill", text:"Este libro ___ la pena. (valer)", answers:["vale","Vale"], why:"valer la pena : on dit « vale la pena » (3e personne)."},
  {type:"choice", q:"Pour demander poliment son aide à un inconnu :", opts:["¿Podría ayudarme, por favor?","¿Puedes ayudarme?"], correct:0, why:"Inconnu = niveau le plus poli : « ¿Podría…? » (formule figée)."},
  {type:"choice", q:"Pour attirer l'attention d'un directeur :", opts:["Perdone, señor.","Perdona, tío."], correct:0, why:"Directeur = usted : « perdone, señor ». « Perdona, tío » est informel."},
  {type:"choice", q:"Quelle expression signifie « parler sans arrêt » ?", opts:["Hablar por los codos","Dar la lata","Echar una mano"], correct:0, why:"« Hablar por los codos » = bavarder sans s'arrêter. « Dar la lata » = embêter ; « echar una mano » = aider."},
  {type:"choice", q:"« Echar una mano » veut dire…", opts:["donner un coup de main","serrer la main","jeter sa main"], correct:0, why:"Expression neutre et très courante : « ¿Me echas una mano? » = tu me donnes un coup de main ?"},
  {type:"choice", q:"Quelle expression familière veut dire « être de mauvaise humeur » ?", opts:["Estar de mala leche","Tener la sartén por el mango","Dar calabazas"], correct:0, why:"« Estar de mala leche » : familier, surtout Espagne. « Tener la sartén por el mango » = avoir la situation en main ; « dar calabazas » = éconduire."},
  {type:"choice", q:"Quelle écriture est correcte pour « Ça va ? »", opts:["¿Qué tal?","¿Que tal?"], correct:0, why:"Dans une question, « qué » porte un accent écrit."},
  {type:"choice", q:"« Tomar el pelo » signifie…", opts:["faire marcher, se moquer de","prendre les cheveux","prendre un coup de chaud"], correct:0, why:"« Me estás tomando el pelo » = tu me fais marcher. Expression imagée, pas à traduire mot à mot."}
 ],
 ANNOTATED: {
  title:"Un échange au quotidien",
  intro:"Quatre phrases de conversation sociale pour t'entraîner à lire. Touche chaque mot pour voir sa nature et sa traduction.",
  sentences:[
   {fr:"Salut, Pablo. Tout va bien ?", tokens:[
    {w:"Hola", tag:"interjection", fr:"salut", tip:"h muette : O-la."},
    {w:"Pablo", tag:"nom propre", fr:"Pablo"},
    {w:"¿Qué", tag:"adverbe", info:"interrogatif", fr:"comment", tip:"« ¿Qué tal? » = comment ça va ? Accent sur qué."},
    {w:"tal", tag:"adverbe", fr:"tal (dans « qué tal »)", tip:"Toujours dans la formule : ¿Qué tal?"},
    {w:"todo?", tag:"pronom", info:"indéfini", fr:"tout", tip:"« ¿Qué tal todo? » = tout va bien ?"}
   ]},
   {fr:"Excusez-moi, pourriez-vous m'aider, s'il vous plaît ?", tokens:[
    {w:"Perdone", tag:"verbe", info:"perdonar · impératif · usted", fr:"excusez-moi", tip:"Impératif usted : perdone. Tú : perdona."},
    {w:"¿podría", tag:"verbe", info:"formule de politesse figée", fr:"pourriez-vous", tip:"À apprendre en bloc : la formule la plus polie."},
    {w:"ayudarme", tag:"verbe", info:"infinitif + me", fr:"m'aider", tip:"« me » collé à l'infinitif : ayudar + me."},
    {w:"por favor?", tag:"expression", fr:"s'il vous plaît", tip:"Même forme avec tú et usted."}
   ]},
   {fr:"J'ai faim, donc je vais manger.", tokens:[
    {w:"Tengo", tag:"verbe", info:"tener · présent · yo", fr:"j'ai", tip:"Tener pour les sensations : tengo hambre."},
    {w:"hambre", tag:"nom", info:"fém. sing.", fr:"faim", tip:"h muette : AM-bre."},
    {w:"así que", tag:"conjonction", fr:"donc", tip:"Introduit la conséquence."},
    {w:"voy", tag:"verbe", info:"ir · présent · yo", fr:"je vais", tip:"ir : voy, vas, va…"},
    {w:"a", tag:"préposition", fr:"à", tip:"ir + a + infinitif = futur proche."},
    {w:"comer", tag:"verbe", info:"infinitif", fr:"manger", tip:"-er : comer."}
   ]},
   {fr:"Merci beaucoup. Passez une bonne journée.", tokens:[
    {w:"Muchas", tag:"déterminant", info:"fém. plur.", fr:"beaucoup de", tip:"S'accorde avec gracias (féminin pluriel)."},
    {w:"gracias", tag:"nom", info:"fém. plur.", fr:"merci", tip:"c = th (Espagne), s (Amérique latine)."},
    {w:"Que", tag:"conjonction", fr:"que (début du souhait)", tip:"Souhait figé : « que tenga un buen día »."},
    {w:"tenga", tag:"verbe", info:"souhait figé · usted", fr:"passez (littéralement : ayez)", tip:"Tú : que tengas. À apprendre en bloc."},
    {w:"un", tag:"déterminant", info:"article indéfini · masc.", fr:"une"},
    {w:"buen", tag:"adjectif", info:"masc. sing. (devant le nom)", fr:"bonne", tip:"« bueno » devient « buen » devant un nom masculin : un buen día."},
    {w:"día", tag:"nom", info:"masc. sing.", fr:"journée", tip:"Masculin malgré le -a : el día."}
   ]}
  ]
 },
 CULTURE_NOTE: {icon:"🤝", title:"Culture, 10 expressions et fiche récap de A1 (A1.12)",
  html:"<b>🤝 Culture : saluer et prendre congé</b> En Espagne, on se fait la bise (deux, une sur chaque joue) entre amis ; au travail et avec un inconnu, la poignée de main. En Amérique latine, une seule bise ou une accolade selon les pays. Entrer dans un commerce ou un bar sans dire « ¡Buenas! » est mal vu. Finir un message : « un abrazo » (amis), « un saludo » (neutre), « un cordial saludo » (formel).<br><br><b>🧰 10 expressions familières de la conversation</b><br>1. <b>Hablar por los codos</b> = parler sans arrêt, être bavard.<br>2. <b>Dar la lata</b> = embêter, casser les pieds.<br>3. <b>Estar de mala leche</b> = être de mauvaise humeur (très familier, surtout en Espagne).<br>4. <b>Tener la sartén por el mango</b> = avoir la situation en main, tenir les rênes.<br>5. <b>Echar una mano</b> = donner un coup de main.<br>6. <b>Tomar el pelo</b> = faire marcher, se moquer de quelqu'un.<br>7. <b>Valer la pena</b> = valoir la peine.<br>8. <b>No tener pelos en la lengua</b> = ne pas avoir la langue dans sa poche.<br>9. <b>Dar calabazas</b> = éconduire quelqu'un qui te fait la cour.<br>10. <b>Quedarse con la boca abierta</b> = rester bouche bée.<br><br><b>✍️ Expression écrite : message informel de 4 lignes</b> Intègre : une salutation, une question, un remerciement et « Que tengas un buen día ». Modèle : « ¡Hola, Ana! ¿Qué tal todo? Gracias por tu ayuda, eres muy simpática. Que tengas un buen día. Un abrazo, Luis. » Version formelle : « Buenos días, señora Vega. ¿Cómo está usted? Muchas gracias por su ayuda. Que tenga un buen día. Un saludo, Luis Ruiz. »<br><br><b>🗣️ Expression orale : une conversation complète</b> Joue (ou enregistre) cette scène de bout en bout : 1. Salutation : « ¡Hola! ¡Cuánto tiempo sin verte! ¿Qué tal todo? » 2. Réponse : « Muy bien, gracias. ¿Y tú? » 3. Question : « Perdona, ¿puedes ayudarme? ¿Dónde está la estación? » 4. Réponse : « Está al lado de la plaza. » 5. Remerciement : « ¡Muchas gracias! » / « De nada. » 6. Au revoir : « Que tengas un buen día. Hasta pronto. » Refais-la en formel : « Buenos días. ¿Cómo está usted? Perdone, ¿podría ayudarme? … Que tenga un buen día. »<br><br><b>📄 Fiche récap de A1</b> Phonétique : h muette · j / ge, gi = kh · qu = k · c(e,i), z = th (Espagne) ou s (Amérique latine) · ll = y · ñ = gn · rr roulé · v = b · accent écrit sur qué, cómo, dónde, cuándo, cuánto, quién, cuál. Questions : ¿ ? obligatoires. Formules : Hola · Buenos días / tardes / noches · ¿Qué tal? (tú) / ¿Cómo está usted? (usted) · Gracias · De nada · Lo siento · Perdón · Perdona / Perdone · Hasta luego / pronto · Que tengas / tenga un buen día. Politesse : ¿Puedes ayudarme? (tú) → ¿Podría ayudarme? (très poli). Connecteurs : y, pero, así que, porque, también. Verbes : soy, estoy, tengo, voy, hago, et les structures voy a + infinitif, estoy + gérondif. Tu as maintenant tout le socle du niveau A1.<br><br><b>🏁 Mini-contrôle flash de fin de niveau</b> 1. Comment dit-on « ça fait longtemps qu'on ne s'est pas vu » ? → <b>¡Cuánto tiempo sin verte!</b> 2. Forme la plus polie pour « Pourriez-vous… » ? → <b>¿Podría…?</b>"},
 NEXT_PREVIEW:"Félicitations : tu viens de terminer le dernier palier du niveau A1 ! La suite : le grand contrôle de fin de niveau A1 (test de niveau final), puis le niveau A2. Avant de te lancer, relis tes fiches récapitulatives et refais les points qui t'ont paru plus difficiles.",
 META:{vocabTitle:"Español social : saluer, remercier, s'excuser, prendre congé (A1.12)", lectureTitle:"Pablo et María : une rencontre dans la rue", bilanTitle:"Bravo, tu as terminé le niveau A1 !", pronLabel:"Les accents des mots interrogatifs, ¿ ? ¡ ! et l'intonation", todayLede:"mener une conversation sociale de bout en bout : saluer, demander poliment, remercier, s'excuser et prendre congé, en tutoiement ET en vouvoiement, tout en réutilisant ser, estar, tener, ir et hacer"}
};
})();

