// The Roots — EXAMENS d'ESPAGNOL (A1.0–A1.12, A2.1–A2.12 + 3 grands contrôles : 225 GC A1, 226 GC A2, 227 GC A1+A2).
// Même format que exams.js (window.LESSON_EXAMS_ES[n]).
window.LESSON_EXAMS_ES = window.LESSON_EXAMS_ES || {};
(function(E){

// ---- 200.js ----
E[200] = {
  code: "A1.0", level: "A1",
  title: "Examen A1.0: Las bases (colores, números, ser / estar / tener)",
  titleFr: "Examen A1.0 : Les bases (couleurs, nombres, ser / estar / tener)",
  objective: "Validar el nivel A1.0: colores, números, ser, estar y tener, y una presentación muy corta.",
  objectiveFr: "Valider le niveau A1.0 : couleurs, nombres, ser, estar et tener, et une toute petite présentation.",
  sections: [
    // ------------------------------------------------------------ I
    {
      id: "vocab", num: "I", title: "Vocabulario", titleFr: "Vocabulaire",
      points: 15, skill: "vo", type: "fill",
      instructions: "Completa las frases con una palabra de la lista. Atención: hay palabras que no se usan.",
      instructionsFr: "Complète les phrases avec un mot de la liste. Attention : certains mots ne servent pas.",
      bank: ["azul", "verde", "amarilla", "blanca", "quince", "veintiún", "hambre", "cansado", "rojo", "negra", "treinta"],
      items: [
        { text: "La mochila es ___. (bleu)", blanks: [["azul"]],
          why: "« bleu » = azul. Azul finit par une consonne : il ne change pas au féminin (la mochila azul)." },
        { text: "La silla es ___. (vert)", blanks: [["verde"]],
          why: "« vert » = verde. Le v se prononce « b »." },
        { text: "La flor es ___. (jaune)", blanks: [["amarilla"]],
          why: "« la flor » est féminin : amarillo → amarilla (deux l)." },
        { text: "La pared es ___. (blanc)", blanks: [["blanca"]],
          why: "« la pared » est féminin : blanco → blanca. Piège : jamais « blanche »." },
        { text: "Tengo ___ años. (15)", blanks: [["quince"]],
          why: "15 = quince. Les nombres 11 à 15 finissent en -ce et s'apprennent par cœur." },
        { text: "Mi tío tiene ___ años. (21)", blanks: [["veintiún", "veintiun"]],
          why: "21 devant un nom masculin : veintiuno devient veintiún (veintiún años). « veintiuno años » est faux." },
        { text: "Tengo ___ y quiero comer. (faim)", blanks: [["hambre"]],
          why: "« avoir faim » = tener hambre. « Hambre » est le nom : on dit « tengo hambre », pas « estoy hambriento »." },
        { text: "Hoy estoy ___ porque tengo sueño. (fatigué)", blanks: [["cansado", "cansada"]],
          why: "« fatigué » = cansado (cansada pour une femme). L'état du moment se dit avec estar." }
      ]
    },
    // ----------------------------------------------------------- II
    {
      id: "grammar", num: "II", title: "Gramática y conjugación", titleFr: "Grammaire et conjugaison",
      points: 20, skill: "cj", type: "fill",
      instructions: "Escribe la forma correcta del verbo (o la palabra que falta). Escribe solo la palabra que falta.",
      instructionsFr: "Écris la forme correcte du verbe (ou le mot qui manque). Tape seulement le mot manquant.",
      items: [
        { header: { en: "A. Ser, estar, tener", fr: "A. Ser, estar, tener" },
          text: "Yo ___ de Madrid. (ser)", blanks: [["soy"]],
          why: "L'origine se dit avec SER : yo soy." },
        { text: "Tú ___ cansado hoy. (estar)", blanks: [["estás", "estas"]],
          why: "« Hoy » = état du moment → ESTAR : tú estás (accent écrit)." },
        { text: "Ella ___ veinte años. (tener)", blanks: [["tiene"]],
          why: "L'âge se dit avec TENER : ella tiene (e → ie)." },
        { text: "Nosotros ___ amigos. (ser)", blanks: [["somos"]],
          why: "Identité / relation → SER : nosotros somos." },
        { text: "Mis padres ___ en casa. (estar)", blanks: [["están", "estan"]],
          why: "Le lieu se dit avec ESTAR : ellos están (accent écrit)." },
        { text: "Vosotros ___ simpáticos. (ser)", blanks: [["sois"]],
          why: "Caractère → SER : vosotros sois (sans accent)." },
        { text: "Yo ___ mucho frío. (tener)", blanks: [["tengo"]],
          why: "« Avoir froid » = tener frío : yo tengo (le -g- est irrégulier)." },
        { header: { en: "B. Articles et accords", fr: "B. Articles et accords" },
          text: "Los alumnos están ___. (fatigués)", blanks: [["cansados"]],
          why: "Les alumnos = masculin pluriel → cansado + s = cansados." },
        { text: "La mesa es ___. (neuve)", blanks: [["nueva"]],
          why: "« la mesa » est féminin : nuevo → nueva." },
        { text: "___ sillas son cómodas. (les)", blanks: [["las", "Las"]],
          why: "« sillas » est féminin pluriel → l'article défini est « las »." }
      ]
    },
    // ---------------------------------------------------------- III
    {
      id: "reading", num: "III", title: "Comprensión escrita", titleFr: "Compréhension écrite",
      points: 15, skill: "ce", type: "mcq",
      instructions: "Lee el texto y elige la respuesta correcta.",
      instructionsFr: "Lis le texte et choisis la bonne réponse.",
      passage: "¡Hola! Soy Pablo y tengo diecinueve años. Soy de Sevilla, pero estoy en Madrid. Soy estudiante. Tengo una mochila verde y un cuaderno azul.\n\nHoy estoy cansado porque tengo mucho trabajo. Mi profesora se llama Elena. Es joven y muy simpática. Tiene treinta y cinco años.\n\nMi clase es grande y los alumnos son simpáticos. Hoy están contentos, pero yo tengo hambre y sed. Mi amiga Lucía tiene un coche rojo. Y tú, ¿cómo estás hoy?",
      items: [
        { q: "¿De dónde es Pablo?", qFr: "D'où est Pablo ?",
          opts: ["De Madrid", "De Sevilla", "De Barcelona"], correct: 1,
          why: "« Soy de Sevilla, pero estoy en Madrid » : il est de Sevilla (origine = ser + de) ; Madrid est seulement l'endroit où il se trouve (estar)." },
        { q: "¿Cómo está Pablo hoy?", qFr: "Comment va Pablo aujourd'hui ?",
          opts: ["Cansado", "Contento", "Enfermo"], correct: 0,
          why: "« Hoy estoy cansado ». « Contentos » désigne les alumnos, pas Pablo." },
        { q: "¿De qué color es el cuaderno de Pablo?", qFr: "De quelle couleur est le cahier de Pablo ?",
          opts: ["Verde", "Rojo", "Negro", "Azul"], correct: 3,
          why: "« un cuaderno azul ». Piège : verde est la couleur de sa mochila." },
        { q: "¿Cuántos años tiene la profesora?", qFr: "Quel âge a la professeure ?",
          opts: ["Diecinueve", "Veinticinco", "Treinta y cinco"], correct: 2,
          why: "« Tiene treinta y cinco años ». Diecinueve est l'âge de Pablo." },
        { q: "¿Qué tiene Lucía?", qFr: "Qu'est-ce que Lucía a ?",
          opts: ["Una mochila verde", "Un coche rojo", "Un cuaderno azul"], correct: 1,
          why: "« Mi amiga Lucía tiene un coche rojo ». La mochila verde et le cuaderno azul sont à Pablo." }
      ]
    },
    // ----------------------------------------------------------- IV
    {
      id: "listening", num: "IV", title: "Comprensión oral", titleFr: "Compréhension orale",
      points: 15, skill: "co", type: "mcq",
      instructions: "Escucha cada audio (puedes escucharlo otra vez) y elige la respuesta correcta.",
      instructionsFr: "Écoute chaque enregistrement (tu peux le réécouter) et choisis la bonne réponse.",
      items: [
        { audio: "Hola, soy Marta. Tengo veintiún años y soy de México.",
          q: "¿Cuántos años tiene Marta?", qFr: "Quel âge a Marta ?",
          opts: ["Veintiún años", "Treinta y un años", "Quince años"], correct: 0,
          why: "« Tengo veintiún años » : 21 ans. Treinta y un = 31 ; quince = 15." },
        { audio: [{ who: "A", text: "¿Cómo estás, Luis? ¿Estás cansado?" }, { who: "B", text: "No, estoy contento. Pero tengo hambre." }],
          q: "¿Qué tiene Luis?", qFr: "Qu'est-ce que Luis a ?",
          opts: ["Sed", "Sueño", "Hambre"], correct: 2,
          why: "« Tengo hambre » = j'ai faim. Il n'est pas fatigué (« No, estoy contento »), donc ce n'est pas le sueño." },
        { audio: "La mochila de Ana es azul y su cuaderno es amarillo. Su lápiz es negro.",
          q: "¿De qué color es el cuaderno de Ana?", qFr: "De quelle couleur est le cahier d'Ana ?",
          opts: ["Azul", "Amarillo", "Negro"], correct: 1,
          why: "« Su cuaderno es amarillo ». Azul est la couleur de la mochila ; negro, celle du lápiz." },
        { audio: [{ who: "A", text: "Buenos días, señora. ¿Cómo está usted?" }, { who: "B", text: "Estoy bien, gracias, pero estoy nerviosa." }],
          q: "¿Cómo está la señora?", qFr: "Comment va la dame ?",
          opts: ["Enfadada", "Cansada", "Nerviosa"], correct: 2,
          why: "« Estoy nerviosa » : nerveuse. Elle dit aussi « estoy bien », mais « bien » n'est pas dans les options." },
        { audio: "Mi amigo es bajo, pero es muy rápido.",
          q: "¿Cómo es el amigo?", qFr: "Comment est l'ami ?",
          opts: ["Bajo y rápido", "Alto y simpático", "Joven y guapo"], correct: 0,
          why: "« Es bajo, pero es muy rápido » : petit de taille mais rapide. Alto est le contraire de bajo." }
      ]
    },
    // ------------------------------------------------------------ V
    {
      id: "writing", num: "V", title: "Expresión escrita", titleFr: "Expression écrite",
      points: 20, skill: "ee", type: "ai-text",
      instructions: "Escribe un texto corto (de 30 a 60 palabras).",
      instructionsFr: "Écris un court texte (de 30 à 60 mots).",
      prompt: "Preséntate a una persona nueva. Di cómo te llamas, cuántos años tienes, de dónde eres y cómo estás hoy. Describe también un objeto con su color (tu mochila, tu libro…). Usa ser, estar y tener.",
      promptFr: "Présente-toi à une personne nouvelle. Dis comment tu t'appelles, quel âge tu as, d'où tu es et comment tu vas aujourd'hui. Décris aussi un objet avec sa couleur (ton sac, ton livre…). Utilise ser, estar et tener.",
      minWords: 30, maxWords: 60,
      rubric: "Total 20 points. Level A1.0: be lenient on spelling and DO NOT penalise missing accents or missing ¿ ¡ marks. Task achievement (6 pts, 1 pt each): gives a name (\"Soy Ana\" or \"Me llamo Ana\" both fine); gives an age with TENER; says where they are from with SER + de; says how they are today with ESTAR + an adjective; names an object with its colour; adds one more detail (a second object, a person description, hambre/sed/frío...). Grammar (8 pts): correct SER / ESTAR / TENER choice and conjugation (5 pts: soy, estoy, tengo, es, está, tiene… ; lose 1 pt per wrong verb choice, e.g. \"soy 20 años\", \"soy cansado\", \"estoy de Lyon\"); gender and number agreement of adjectives and colours with the noun (3 pts: e.g. \"la mochila azul\", \"estoy cansada\"; lose 1 pt per agreement error, max 3). Vocabulary (3 pts): use of taught words (colours, numbers, emotions, objects, tener + hambre/sed/frío…). Coherence (3 pts): short, clear, logical sentences; greeting and flow. Length: deduct 1 pt if under 25 words; no penalty for exceeding the maximum slightly.",
      reference: "¡Hola! Soy Ana y tengo veintitrés años. Soy de Lyon, pero estoy en Madrid. Hoy estoy contenta, pero tengo hambre. Tengo una mochila azul y un cuaderno rojo. La mochila es nueva y el cuaderno es pequeño. Mi profesora es joven y muy simpática."
    },
    // ----------------------------------------------------------- VI
    {
      id: "speaking", num: "VI", title: "Expresión oral", titleFr: "Expression orale",
      points: 15, skill: "eo", type: "ai-oral",
      instructions: "Pulsa el micrófono y habla unos 40 segundos. Puedes repetir. Si el micrófono no funciona, escribe lo que dirías.",
      instructionsFr: "Appuie sur le micro et parle environ 40 secondes. Tu peux recommencer. Si le micro ne fonctionne pas, écris ce que tu dirais.",
      prompt: "Preséntate: di quién eres, cuántos años tienes y cómo estás hoy. Describe un objeto de tu clase con su color. Después cuenta de uno a diez.",
      promptFr: "Présente-toi : dis qui tu es, quel âge tu as et comment tu vas aujourd'hui. Décris un objet de ta classe avec sa couleur. Puis compte de un à dix.",
      minWords: 25, targetSeconds: 40,
      rubric: "Total 15 points. Level A1.0: pronunciation cannot be judged finely from a microphone transcript; judge content, forms and apparent fluency. Content (6 pts): introduces themself with SER (\"Soy…\" or \"Me llamo…\") and gives an age with TENER (2 pts); says how they are today with ESTAR (1 pt); describes one object with its colour (2 pts); counts from 1 to 10 (uno, dos, tres, cuatro, cinco, seis, siete, ocho, nueve, diez; 1 pt, lose 0.5 per missing number up to 1). Grammar (5 pts): correct SER / ESTAR / TENER forms (3 pts, lose 1 pt per wrong form); gender/number agreement of adjectives and colours (2 pts, lose 1 per error). Vocabulary (2 pts): taught words (colours, numbers, emotions, objects). Fluency (2 pts): from the transcript — complete sentences, reasonable length (about 40 seconds ≈ 25-60 words plus the counting), few recognition errors suggesting mispronunciation. Do not penalise accents or punctuation.",
      reference: "Hola, soy Luis y tengo veinte años. Hoy estoy contento y tengo un poco de hambre. Tengo un cuaderno rojo y una mochila negra. El cuaderno es nuevo. Uno, dos, tres, cuatro, cinco, seis, siete, ocho, nueve, diez."
    }
  ]
};


// ---- 201.js ----
E[201] = {
  code: "A1.1", level: "A1",
  title: "Examen A1.1: Identidad (presentarse, tú o usted)",
  titleFr: "Examen A1.1 : Identité (se présenter, tu ou vous)",
  objective: "Validar el nivel A1.1: presentarse, llamarse, decir la edad, el origen y el lugar de residencia, con tú y con usted.",
  objectiveFr: "Valider le niveau A1.1 : se présenter, llamarse, dire son âge, son origine et son lieu de résidence, en tutoyant et en vouvoyant.",
  sections: [
    // ------------------------------------------------------------ I
    {
      id: "vocab", num: "I", title: "Vocabulario", titleFr: "Vocabulaire",
      points: 15, skill: "vo", type: "fill",
      instructions: "Completa las frases con una palabra de la lista. Atención: hay palabras que no se usan.",
      instructionsFr: "Complète les phrases avec un mot de la liste. Attention : certains mots ne servent pas.",
      bank: ["nombre", "país", "italiana", "correo", "ojos", "edad", "vivo", "dirección", "alemán", "apellido", "profesión"],
      items: [
        { text: "Mi ___ es Ana y mi apellido es García. (prénom)", blanks: [["nombre"]],
          why: "« prénom » = nombre ; « apellido » est le nom de famille (déjà dans la phrase)." },
        { text: "Mi ___ es Francia y mi ciudad es Lyon.", blanks: [["país", "pais"]],
          why: "Francia est un pays : « mi país ». La ciudad (Lyon) est dans la phrase." },
        { text: "Marta es de Roma: es ___.", blanks: [["italiana"]],
          why: "Roma → Italia → nationalité italiana. Féminin car Marta est une femme (italiano → italiana). « alemán » est un intrus." },
        { text: "Mi ___ electrónico es ana@correo.es.", blanks: [["correo"]],
          why: "« el correo electrónico » = l'adresse e-mail." },
        { text: "Tengo el pelo negro y los ___ verdes.", blanks: [["ojos"]],
          why: "« los ojos » = les yeux ; pluriel car « verdes » et « los »." },
        { text: "Mi ___ es 25: tengo veinticinco años.", blanks: [["edad"]],
          why: "« la edad » = l'âge. L'âge se dit ensuite avec tener : tengo 25 años." },
        { text: "Soy de Lyon, pero ___ en París. (j'habite)", blanks: [["vivo"]],
          why: "« habiter » = vivir : yo vivo. Habiter à = vivir en." },
        { text: "Mi ___ es calle Mayor, 4. (adresse)", blanks: [["dirección", "direccion"]],
          why: "« la dirección » = l'adresse postale. Piège : ce n'est pas « la direction »." }
      ]
    },
    // ----------------------------------------------------------- II
    {
      id: "grammar", num: "II", title: "Gramática y conjugación", titleFr: "Grammaire et conjugaison",
      points: 20, skill: "cj", type: "fill",
      instructions: "Escribe la forma correcta del verbo o la palabra que falta. Escribe solo la palabra que falta.",
      instructionsFr: "Écris la forme correcte du verbe ou le mot qui manque. Tape seulement le mot manquant.",
      items: [
        { header: { en: "A. Llamarse y tener", fr: "A. Llamarse et tener" },
          text: "___ llamo Carlos. (yo)", blanks: [["me"]],
          why: "llamarse est pronominal : yo → me llamo, le pronom me se place avant le verbe." },
        { text: "¿Cómo te ___ tú? (llamarse)", blanks: [["llamas"]],
          why: "tú → te llamas (terminaison -as)." },
        { text: "Mi madre ___ llama Carmen. (llamarse)", blanks: [["se"]],
          why: "él / ella / usted → se llama. Le pronom est « se »." },
        { text: "Nosotros nos ___ Ana y Luis. (llamarse)", blanks: [["llamamos"]],
          why: "nosotros → -amos : nos llamamos." },
        { text: "¿Cuántos años ___ usted? (tener)", blanks: [["tiene"]],
          why: "L'âge se dit avec TENER. usted se conjugue comme él / ella : tiene." },
        { header: { en: "B. Ser, estar, vivir y possessifs", fr: "B. Ser, estar, vivir et possessifs" },
          text: "Yo ___ de Madrid, pero vivo en Lyon. (ser)", blanks: [["soy"]],
          why: "Rappel A1.0 : l'origine se dit avec SER + de : yo soy." },
        { text: "¿De dónde ___ usted? (ser)", blanks: [["es"]],
          why: "Rappel A1.0 : usted → es (comme él / ella). Avec usted, jamais « eres »." },
        { text: "Señor Pérez, ¿cuál es ___ dirección? (votre)", blanks: [["su"]],
          why: "Avec usted, le possessif est « su » (= votre). « tu » serait pour le tutoiement." },
        { text: "Mis padres se llaman Pablo y Rosa. ___ padres son simpáticos. (mes)", blanks: [["mis"]],
          why: "« padres » est pluriel : mi → mis. Le possessif s'accorde avec la chose possédée, pas avec le genre du possesseur." },
        { text: "Hoy ___ cansada. (yo, estar)", blanks: [["estoy"]],
          why: "Rappel A1.0 : l'état du moment se dit avec ESTAR : yo estoy." }
      ]
    },
    // ---------------------------------------------------------- III
    {
      id: "reading", num: "III", title: "Comprensión escrita", titleFr: "Compréhension écrite",
      points: 15, skill: "ce", type: "mcq",
      instructions: "Lee el texto y elige la respuesta correcta.",
      instructionsFr: "Lis le texte et choisis la bonne réponse.",
      passage: "Me llamo Julia Martín y tengo treinta y un años. Soy de Lyon, pero vivo en Valencia. Soy médica en un hospital grande. Mi madre es argentina y mi padre es francés. Se llaman Rosa y Pierre.\n\nMi correo electrónico es julia.martin@correo.es. Estoy soltera y vivo sola en un piso pequeño. Tengo el pelo negro y los ojos verdes. Hoy estoy muy contenta. Mis amigos me llaman Ju. Mucho gusto: ¿y usted, cómo se llama?",
      items: [
        { q: "¿Dónde vive Julia?", qFr: "Où habite Julia ?",
          opts: ["En Lyon", "En Buenos Aires", "En Valencia", "En Sevilla"], correct: 2,
          why: "« Vivo en Valencia ». Piège : « Soy de Lyon » dit son origine (de), pas où elle vit (en)." },
        { q: "¿Cuál es la profesión de Julia?", qFr: "Quelle est la profession de Julia ?",
          opts: ["Profesora", "Médica", "Estudiante"], correct: 1,
          why: "« Soy médica en un hospital grande »." },
        { q: "¿Cuál es la nacionalidad de la madre de Julia?", qFr: "Quelle est la nationalité de la mère de Julia ?",
          opts: ["Argentina", "Francesa", "Española"], correct: 0,
          why: "« Mi madre es argentina ». Francesa est la nationalité de Julia ; son père est français." },
        { q: "¿Qué es verdad?", qFr: "Qu'est-ce qui est vrai ?",
          opts: ["Julia está casada.", "Julia vive sola.", "Julia tiene treinta años.", "Julia es italiana."], correct: 1,
          why: "« Estoy soltera y vivo sola ». Elle a 31 ans (pas 30) et elle est de Lyon." },
        { q: "¿De qué color son los ojos de Julia?", qFr: "De quelle couleur sont les yeux de Julia ?",
          opts: ["Negros", "Marrones", "Azules", "Verdes"], correct: 3,
          why: "« los ojos verdes ». Piège : « negro » est la couleur de ses cheveux (el pelo negro)." }
      ]
    },
    // ----------------------------------------------------------- IV
    {
      id: "listening", num: "IV", title: "Comprensión oral", titleFr: "Compréhension orale",
      points: 15, skill: "co", type: "mcq",
      instructions: "Escucha cada audio (puedes escucharlo otra vez) y elige la respuesta correcta.",
      instructionsFr: "Écoute chaque enregistrement (tu peux le réécouter) et choisis la bonne réponse.",
      items: [
        { audio: [{ who: "A", text: "¡Hola! ¿Cómo te llamas?" }, { who: "B", text: "Me llamo Sofía. Soy de Buenos Aires, pero vivo en Barcelona." }],
          q: "¿Dónde vive Sofía?", qFr: "Où habite Sofía ?",
          opts: ["En Buenos Aires", "En Barcelona", "En Madrid"], correct: 1,
          why: "« Vivo en Barcelona ». Buenos Aires est sa ville d'origine (« soy de »)." },
        { audio: [{ who: "A", text: "Buenos días, señor. ¿Cuántos años tiene usted?" }, { who: "B", text: "Tengo cuarenta y un años." }],
          q: "¿Cuántos años tiene el señor?", qFr: "Quel âge a le monsieur ?",
          opts: ["Catorce años", "Cuarenta años", "Cuarenta y un años"], correct: 2,
          why: "« Cuarenta y un años » = 41 ans. Catorce = 14 ; cuarenta = 40." },
        { audio: "Mi padre es italiano y mi madre es alemana. Yo soy francés.",
          q: "¿Cuál es la nacionalidad de la madre?", qFr: "Quelle est la nationalité de la mère ?",
          opts: ["Alemana", "Italiana", "Francesa"], correct: 0,
          why: "« Mi madre es alemana ». Italiano est le père ; francés est celui qui parle." },
        { audio: [{ who: "A", text: "Perdone, señora, ¿dónde vive usted?" }, { who: "B", text: "Vivo en Lima, pero soy de Quito." }],
          q: "¿De dónde es la señora?", qFr: "D'où est la dame ?",
          opts: ["De Lima", "De Quito", "De Madrid"], correct: 1,
          why: "« Soy de Quito » = origine. Lima est l'endroit où elle vit (« vivo en »)." },
        { audio: "Hola, soy Luis y tengo treinta y un años. Tengo el pelo negro y los ojos azules. Soy estudiante.",
          q: "¿Cómo tiene los ojos Luis?", qFr: "Comment sont les yeux de Luis ?",
          opts: ["Verdes", "Negros", "Azules"], correct: 2,
          why: "« Los ojos azules ». Piège : negro est la couleur de son pelo." }
      ]
    },
    // ------------------------------------------------------------ V
    {
      id: "writing", num: "V", title: "Expresión escrita", titleFr: "Expression écrite",
      points: 20, skill: "ee", type: "ai-text",
      instructions: "Escribe un texto de 40 a 70 palabras.",
      instructionsFr: "Écris un texte de 40 à 70 mots.",
      prompt: "Preséntate a una persona nueva (tuteo). Di tu nombre y apellido, tu edad, tu nacionalidad, de dónde eres y dónde vives. Describe tu pelo y tus ojos y di cuál es tu profesión.",
      promptFr: "Présente-toi à une personne nouvelle (tutoiement). Dis ton prénom et ton nom de famille, ton âge, ta nationalité, d'où tu es et où tu habites. Décris tes cheveux et tes yeux et dis quelle est ta profession.",
      minWords: 40, maxWords: 70,
      rubric: "Total 20 points. Level A1.1: DO NOT penalise missing accents or missing ¿ ¡. Task achievement (6 pts, 1 pt each): name AND surname; age; nationality; origin (de); place of residence (en); hair/eyes description AND profession (1 pt for both). Grammar (8 pts): \"me llamo\" / \"soy\" with the pronoun in the right place (2 pts); TENER for age, not SER (\"tengo 25 años\"; 2 pts); correct distinction \"soy de\" (origin) vs \"vivo en\" (residence), and correct conjugations of ser / tener / vivir (2 pts); gender agreement of nationality and adjectives (e.g. \"soy francesa\", \"el pelo negro\", \"los ojos verdes\"; 2 pts). Lose 1 pt per error within each criterion. Vocabulary (3 pts): taught identity words (nombre, apellido, edad, país, ciudad, nacionalidad, profesión…). Coherence (3 pts): clear logical order, greeting and closing, simple linking (y, pero). Length: deduct 1 pt if under 30 words. Pronoun \"yo\" repeated at the start of sentences is not an error but is not needed.",
      reference: "¡Hola! Me llamo Elena Gómez y tengo veintiocho años. Soy francesa, de Lyon, pero vivo en Valencia. Soy médica en un hospital grande. Tengo el pelo negro y los ojos verdes. Mi correo electrónico es elena.gomez@correo.es. Mucho gusto: ¿y tú, cómo te llamas?"
    },
    // ----------------------------------------------------------- VI
    {
      id: "speaking", num: "VI", title: "Expresión oral", titleFr: "Expression orale",
      points: 15, skill: "eo", type: "ai-oral",
      instructions: "Pulsa el micrófono y habla unos 45 segundos. Puedes repetir. Si el micrófono no funciona, escribe lo que dirías.",
      instructionsFr: "Appuie sur le micro et parle environ 45 secondes. Tu peux recommencer. Si le micro ne fonctionne pas, écris ce que tu dirais.",
      prompt: "Estás en una fiesta y hablas con una persona nueva (tuteo). Salúdala y preséntate: nombre, edad, origen y ciudad donde vives. Después hazle dos preguntas con tú: cómo se llama y de dónde es.",
      promptFr: "Tu es à une fête et tu parles à une personne nouvelle (tutoiement). Salue-la et présente-toi : prénom, âge, origine et ville où tu habites. Puis pose-lui deux questions avec tú : comment elle s'appelle et d'où elle est.",
      minWords: 30, targetSeconds: 45,
      rubric: "Total 15 points. Level A1.1: pronunciation cannot be judged finely from a microphone transcript; judge content, forms and apparent fluency. Content (6 pts): greeting and introduction with \"me llamo / soy\" (1 pt); age with TENER (1 pt); origin with \"soy de\" (1 pt); residence with \"vivo en\" (1 pt); two questions to the other person (2 pts): ¿Cómo te llamas? and ¿De dónde eres? (or ¿Dónde vives? / ¿Cuántos años tienes?), 1 pt each. Grammar (5 pts): correct me llamo / soy / tengo / vivo forms (3 pts); correct tú forms in the questions (te llamas, eres, vives, tienes) and no mixing with usted (2 pts). Vocabulary (2 pts): taught identity words and politeness (mucho gusto, encantado/a…). Fluency (2 pts): from the transcript — complete sentences, about 30-60 words, few recognition errors suggesting mispronunciation. Do not penalise accents or punctuation.",
      reference: "¡Hola! Me llamo Carlos y tengo veintitrés años. Soy de Lyon, pero vivo en Madrid. Mucho gusto. ¿Cómo te llamas? ¿De dónde eres? ¿Y dónde vives?"
    }
  ]
};


// ---- 202.js ----
E[202] = {
  code: "A1.2", level: "A1",
  title: "Examen A1.2: Familia (hablar de los seres queridos)",
  titleFr: "Examen A1.2 : Famille (parler de ses proches)",
  objective: "Validar el nivel A1.2: vocabulario de la familia, tener, ser + adjetivo, masculino / femenino y plural.",
  objectiveFr: "Valider le niveau A1.2 : vocabulaire de la famille, tener, ser + adjectif, masculin / féminin et pluriel.",
  sections: [
    // ------------------------------------------------------------ I
    {
      id: "vocab", num: "I", title: "Vocabulario", titleFr: "Vocabulaire",
      points: 15, skill: "vo", type: "fill",
      instructions: "Completa las frases con una palabra de la lista. Atención: hay palabras que no se usan.",
      instructionsFr: "Complète les phrases avec un mot de la liste. Attention : certains mots ne servent pas.",
      bank: ["abuelo", "hermanos", "tío", "primos", "padres", "menor", "soltero", "cariñosa", "sobrino", "mayor", "casada"],
      items: [
        { text: "El padre de mi madre es mi ___. (grand-père)", blanks: [["abuelo"]],
          why: "« grand-père » = abuelo. Le père de ma mère est mon abuelo." },
        { text: "Tengo dos ___: un hermano y una hermana. (frères et sœurs)", blanks: [["hermanos"]],
          why: "Un frère + une sœur = masculin pluriel générique : hermanos (jamais « hermanas »)." },
        { text: "El hermano de mi padre es mi ___.", blanks: [["tío", "tio"]],
          why: "Le frère de mon père = mon oncle : el tío. (La tía = la tante.)" },
        { text: "Los hijos de mi tío son mis ___.", blanks: [["primos"]],
          why: "Les enfants de mon oncle = mes cousins : primos (pluriel, car « los hijos » et « mis »). « sobrino » est un intrus." },
        { text: "Mi padre y mi madre son mis ___.", blanks: [["padres"]],
          why: "Piège classique : « los padres » = les parents (père et mère), pas « les pères »." },
        { text: "Mi hermana tiene quince años y yo tengo veinte: mi hermana es la ___.", blanks: [["menor"]],
          why: "« menor » = plus jeune (mayor = plus âgé, un intrus ici). Menor ne change pas au féminin." },
        { text: "Mi tío no está casado: está ___.", blanks: [["soltero"]],
          why: "« célibataire » = soltero. Tío est masculin : soltero (soltera pour une femme). « casada » est un intrus." },
        { text: "Mi abuela es muy ___. Me quiere mucho. (affectueuse)", blanks: [["cariñosa", "carinosa"]],
          why: "« affectueuse » = cariñosa. Accord féminin avec « mi abuela » : cariñoso → cariñosa. Le ñ compte !" }
      ]
    },
    // ----------------------------------------------------------- II
    {
      id: "grammar", num: "II", title: "Gramática y conjugación", titleFr: "Grammaire et conjugaison",
      points: 20, skill: "cj", type: "fill",
      instructions: "Escribe la forma correcta del verbo o la palabra que falta. Escribe solo la palabra que falta.",
      instructionsFr: "Écris la forme correcte du verbe ou le mot qui manque. Tape seulement le mot manquant.",
      items: [
        { header: { en: "A. Tener", fr: "A. Tener" },
          text: "Yo ___ dos hermanos. (tener)", blanks: [["tengo"]],
          why: "yo → tengo (le -g- irrégulier)." },
        { text: "¿Cuántos hermanos ___ tú? (tener)", blanks: [["tienes"]],
          why: "tú → tienes (e → ie)." },
        { text: "Mi madre ___ cuarenta años. (tener)", blanks: [["tiene"]],
          why: "L'âge se dit avec TENER : ella tiene." },
        { text: "Nosotros ___ una familia grande. (tener)", blanks: [["tenemos"]],
          why: "nosotros → tenemos : le e reste (pas de diphtongue)." },
        { text: "Mis abuelos ___ tres hijos. (tener)", blanks: [["tienen"]],
          why: "ellos → tienen (e → ie)." },
        { header: { en: "B. Ser, estar, accords", fr: "B. Ser, estar, accords" },
          text: "Mi padre ___ alto y simpático. (ser)", blanks: [["es"]],
          why: "Rappel A1.0 : on décrit une personne avec SER : él es." },
        { text: "Mi tío es alto y mi ___ es baja. (tante)", blanks: [["tía", "tia"]],
          why: "Féminin de tío : tía (avec accent écrit)." },
        { text: "Tengo un hermano y una hermana: son mis ___.", blanks: [["hermanos"]],
          why: "Groupe mixte → masculin pluriel : hermanos." },
        { text: "Mi madre ___ llama Carmen. (llamarse)", blanks: [["se"]],
          why: "Rappel A1.1 : él / ella → se llama. Le pronom se place avant le verbe." },
        { text: "Mi hermana ___ casada. (estar)", blanks: [["está", "esta"]],
          why: "Rappel A1.0 : l'état civil est un état → ESTAR : ella está casada (accent écrit)." }
      ]
    },
    // ---------------------------------------------------------- III
    {
      id: "reading", num: "III", title: "Comprensión escrita", titleFr: "Compréhension écrite",
      points: 15, skill: "ce", type: "mcq",
      instructions: "Lee el texto y elige la respuesta correcta.",
      instructionsFr: "Lis le texte et choisis la bonne réponse.",
      passage: "Me llamo Mario y tengo veintisiete años. Mi familia es grande. Vivo con mis padres y mi hermana menor en Sevilla. Mi padre se llama Antonio y es médico. Mi madre se llama Rosa y es profesora. Mi hermana tiene quince años y es muy graciosa.\n\nMis abuelos son mayores, pero son muy cariñosos. Mi tío Pablo está soltero y vive en Madrid. Mi tía Elena está casada y tiene dos hijos: mis primos. Son jóvenes y simpáticos.",
      items: [
        { q: "¿Con quién vive Mario?", qFr: "Avec qui vit Mario ?",
          opts: ["Con sus abuelos", "Con sus padres y su hermana", "Con su tío", "Con su mujer"], correct: 1,
          why: "« Vivo con mis padres y mi hermana menor ». Les abuelos et le tío vivent ailleurs ou ne sont pas cités avec lui." },
        { q: "¿Quién es médico?", qFr: "Qui est médecin ?",
          opts: ["Su padre", "Su madre", "Su tío"], correct: 0,
          why: "« Mi padre se llama Antonio y es médico ». La madre est profesora." },
        { q: "¿Cuántos años tiene la hermana de Mario?", qFr: "Quel âge a la sœur de Mario ?",
          opts: ["Diecisiete", "Veinte", "Quince", "Veintisiete"], correct: 2,
          why: "« Mi hermana tiene quince años ». Veintisiete est l'âge de Mario." },
        { q: "¿Qué es verdad?", qFr: "Qu'est-ce qui est vrai ?",
          opts: ["El tío Pablo está casado.", "El tío Pablo vive en Sevilla.", "La tía Elena tiene dos hijos.", "Los abuelos son jóvenes."], correct: 2,
          why: "« Mi tía Elena… tiene dos hijos ». Pablo est soltero et vit à Madrid ; les abuelos sont mayores." },
        { q: "¿Cómo son los primos de Mario?", qFr: "Comment sont les cousins de Mario ?",
          opts: ["Mayores y antipáticos", "Graciosos y bajos", "Tímidos y mayores", "Jóvenes y simpáticos"], correct: 3,
          why: "« Son jóvenes y simpáticos ». Les abuelos, eux, sont mayores." }
      ]
    },
    // ----------------------------------------------------------- IV
    {
      id: "listening", num: "IV", title: "Comprensión oral", titleFr: "Compréhension orale",
      points: 15, skill: "co", type: "mcq",
      instructions: "Escucha cada audio (puedes escucharlo otra vez) y elige la respuesta correcta.",
      instructionsFr: "Écoute chaque enregistrement (tu peux le réécouter) et choisis la bonne réponse.",
      items: [
        { audio: [{ who: "A", text: "¿Tienes hermanos, Marta?" }, { who: "B", text: "Sí, tengo un hermano y dos hermanas. Mi hermano se llama Pablo." }],
          q: "¿Cuántos hermanos tiene Marta?", qFr: "Combien de frères et sœurs a Marta ?",
          opts: ["Dos", "Tres", "Uno"], correct: 1,
          why: "Un hermano + dos hermanas = trois hermanos au total. Piège : « dos » ne compte que les sœurs." },
        { audio: "Mi abuela se llama Carmen. Tiene setenta años y es muy cariñosa. Vive con mi tío Luis, que está soltero.",
          q: "¿Cómo es la abuela?", qFr: "Comment est la grand-mère ?",
          opts: ["Antipática", "Graciosa", "Cariñosa"], correct: 2,
          why: "« Es muy cariñosa » : affectueuse. Rien ne dit qu'elle est drôle ou antipathique." },
        { audio: [{ who: "A", text: "Señora, ¿tiene usted hijos?" }, { who: "B", text: "Sí, tengo una hija y dos hijos." }],
          q: "¿Cuántos hijos tiene la señora en total?", qFr: "Combien d'enfants la dame a-t-elle en tout ?",
          opts: ["Tres", "Dos", "Cuatro"], correct: 0,
          why: "Une hija + deux hijos = trois enfants. « Los hijos » désigne les enfants, filles et garçons." },
        { audio: "Mi primo Javier es muy gracioso. Tiene veinte años y es estudiante. Su hermana mayor es médica.",
          q: "¿Qué es la hermana de Javier?", qFr: "Que fait la sœur de Javier ?",
          opts: ["Estudiante", "Profesora", "Médica"], correct: 2,
          why: "« Su hermana mayor es médica ». Javier, lui, est estudiante." },
        { audio: [{ who: "A", text: "¿Cómo es tu madre?" }, { who: "B", text: "Es alta y muy simpática. Mi padre es bajo y gracioso." }],
          q: "¿Cómo es el padre?", qFr: "Comment est le père ?",
          opts: ["Alto y simpático", "Bajo y gracioso", "Bajo y antipático"], correct: 1,
          why: "« Mi padre es bajo y gracioso ». « Alto y simpático » décrit la madre." }
      ]
    },
    // ------------------------------------------------------------ V
    {
      id: "writing", num: "V", title: "Expresión escrita", titleFr: "Expression écrite",
      points: 20, skill: "ee", type: "ai-text",
      instructions: "Escribe un texto de 45 a 80 palabras.",
      instructionsFr: "Écris un texte de 45 à 80 mots.",
      prompt: "Presenta a tu familia a un amigo español. Di cuántos hermanos tienes y cómo se llaman tus padres. Describe a dos familiares: su edad, su profesión y cómo son.",
      promptFr: "Présente ta famille à un ami espagnol. Dis combien de frères et sœurs tu as et comment s'appellent tes parents. Décris deux membres de ta famille : leur âge, leur profession et leur caractère.",
      minWords: 45, maxWords: 80,
      rubric: "Total 20 points. Level A1.2: DO NOT penalise missing accents or missing ¿ ¡. A real or imaginary family is fine. Task achievement (6 pts): says how many brothers/sisters they have (1 pt); gives the names of the parents with \"se llama / se llaman\" (1 pt); describes TWO relatives, each with age + profession/situation (1 pt each) and character/physical adjectives (1 pt each). Grammar (8 pts): correct forms of TENER (tengo, tiene, tienen, tenemos), including age with tener (3 pts); SER + adjective with correct gender and number agreement, e.g. \"mi madre es alta\", \"mis abuelos son cariñosos\" (3 pts); llamarse with the pronoun before the verb (\"se llama\", \"se llaman\"; 2 pts). Lose 1 pt per error within each criterion. Vocabulary (3 pts): family words (padre, madre, hermano/a, abuelo/a, tío/a, primo/a, hijo/a…) and adjectives (simpático, gracioso, cariñoso, alto, joven, mayor…). Coherence (3 pts): clear order, simple linking (y, pero), a short opening and closing. Length: deduct 1 pt if under 35 words.",
      reference: "Mi familia es pequeña. Tengo una hermana y no tengo hermanos. Mi padre se llama Antonio y mi madre se llama Rosa. Mi padre tiene cincuenta años, es médico y es muy simpático. Mi abuela tiene setenta y cinco años y es muy cariñosa. Mi hermana tiene quince años, es estudiante y es muy graciosa. ¡Te quiero mucho, familia!"
    },
    // ----------------------------------------------------------- VI
    {
      id: "speaking", num: "VI", title: "Expresión oral", titleFr: "Expression orale",
      points: 15, skill: "eo", type: "ai-oral",
      instructions: "Pulsa el micrófono y habla unos 45 segundos. Puedes repetir. Si el micrófono no funciona, escribe lo que dirías.",
      instructionsFr: "Appuie sur le micro et parle environ 45 secondes. Tu peux recommencer. Si le micro ne fonctionne pas, écris ce que tu dirais.",
      prompt: "Una persona nueva te pregunta por tu familia. Responde: ¿Tienes hermanos? ¿Cómo se llaman tus padres? ¿Cómo es tu madre o tu padre? Di también su edad.",
      promptFr: "Une personne nouvelle te questionne sur ta famille. Réponds : Tu as des frères et sœurs ? Comment s'appellent tes parents ? Comment est ta mère ou ton père ? Dis aussi son âge.",
      minWords: 30, targetSeconds: 45,
      rubric: "Total 15 points. Level A1.2: pronunciation cannot be judged finely from a microphone transcript; judge content, forms and apparent fluency. Content (6 pts): answers about brothers/sisters, with a number (2 pts); gives the parents' names (2 pts); describes one parent with at least two adjectives and an age (2 pts). Grammar (5 pts): correct forms of TENER (tengo, tiene) (2 pts); SER + adjective with correct gender agreement (2 pts); \"se llama / se llaman\" with the pronoun (1 pt). Vocabulary (2 pts): family words and describing adjectives. Fluency (2 pts): from the transcript — complete sentences, about 30-60 words, few recognition errors suggesting mispronunciation. Do not penalise accents or punctuation.",
      reference: "Sí, tengo un hermano y una hermana. Mi hermano se llama Pablo y mi hermana se llama Lucía. Mis padres se llaman Antonio y Rosa. Mi madre tiene cuarenta y cinco años. Es alta, muy simpática y muy cariñosa. Mi padre es médico y es gracioso."
    }
  ]
};


// ---- 203.js ----
E[203] = {
  code: "A1.3", level: "A1",
  title: "Examen A1.3: Amigos y relaciones sociales",
  titleFr: "Examen A1.3 : Amis et relations sociales",
  objective: "Validar el nivel A1.3: los verbos en -AR, gustar, la frecuencia y los saludos, con tú y con usted.",
  objectiveFr: "Valider le niveau A1.3 : les verbes en -AR, gustar, la fréquence et les salutations, en tutoyant et en vouvoyant.",
  sections: [
    // ------------------------------------------------------------ I
    {
      id: "vocab", num: "I", title: "Vocabulario", titleFr: "Vocabulaire",
      points: 15, skill: "vo", type: "fill",
      instructions: "Completa las frases con una palabra de la lista. Atención: hay palabras que no se usan.",
      instructionsFr: "Complète les phrases avec un mot de la liste. Attention : certains mots ne servent pas.",
      bank: ["amigo", "vecino", "divertida", "tímido", "siempre", "casi nunca", "bailar", "escuchar", "nunca", "cantar", "conocida"],
      items: [
        { text: "Javier es mi mejor ___; hablamos todos los días.", blanks: [["amigo"]],
          why: "« mi mejor amigo » = mon meilleur ami. Javier est un homme : amigo (amiga pour une femme)." },
        { text: "La persona que vive en el piso de al lado es mi ___. (voisin)", blanks: [["vecino"]],
          why: "« voisin » = vecino (vecina au féminin). Ne pas confondre avec « conocida » (une connaissance), un intrus." },
        { text: "Mi amiga es muy ___. (amusante)", blanks: [["divertida", "graciosa"]],
          why: "« amusante » = divertida (aussi graciosa, vu en A1.2). Accord au féminin : divertido → divertida." },
        { text: "No hablo mucho con extraños porque soy ___. (timide)", blanks: [["tímido", "tímida", "timido", "timida"]],
          why: "« timide » = tímido / tímida (accent écrit sur le í, selon le sexe de la personne)." },
        { text: "___ hablamos de fútbol los fines de semana. (toujours)", blanks: [["siempre"]],
          why: "« toujours » = siempre. Adverbe de fréquence placé avant le verbe." },
        { text: "Voy al cine una vez al año: ___ voy al cine. (presque jamais)", blanks: [["casi nunca"]],
          why: "« presque jamais » = casi nunca. « nunca » seul serait trop fort (jamais) ; il reste intrus." },
        { text: "A mis amigos les gusta ___ en la discoteca. (danser)", blanks: [["bailar"]],
          why: "« danser » = bailar. Après « gusta », on met l'infinitif." },
        { text: "Me gusta ___ música en casa. (écouter)", blanks: [["escuchar"]],
          why: "« écouter » = escuchar. Piège : « cantar » (chanter) n'a pas le même sens." }
      ]
    },
    // ----------------------------------------------------------- II
    {
      id: "grammar", num: "II", title: "Gramática y conjugación", titleFr: "Grammaire et conjugaison",
      points: 20, skill: "cj", type: "fill",
      instructions: "Escribe la forma correcta del verbo o la palabra que falta. Escribe solo la palabra que falta.",
      instructionsFr: "Écris la forme correcte du verbe ou le mot qui manque. Tape seulement le mot manquant.",
      items: [
        { header: { en: "A. Verbos en -AR", fr: "A. Verbes en -AR" },
          text: "Yo ___ con mis amigos. (hablar)", blanks: [["hablo"]],
          why: "yo → -o : hablo." },
        { text: "Tú ___ música. (escuchar)", blanks: [["escuchas"]],
          why: "tú → -as : escuchas." },
        { text: "Javier ___ muy bien. (bailar)", blanks: [["baila"]],
          why: "él → -a : baila." },
        { text: "Nosotros ___ en verano. (viajar)", blanks: [["viajamos"]],
          why: "nosotros → -amos : viajamos." },
        { header: { en: "B. Gustar", fr: "B. Gustar" },
          text: "Me ___ la música y el cine. (gustar)", blanks: [["gustan"]],
          why: "Deux choses qui plaisent (la música + el cine) = pluriel : me gustan." },
        { text: "A ti te ___ cocinar. (gustar)", blanks: [["gusta"]],
          why: "Après gustar, un infinitif (cocinar) → singulier : te gusta." },
        { text: "A mis padres ___ gustan los viajes. (à eux)", blanks: [["les"]],
          why: "a ellos (mis padres) → pronom « les » ; gustan car « los viajes » est pluriel." },
        { text: "Buenas tardes, señora, ¿___ gusta viajar? (à vous)", blanks: [["le"]],
          why: "Avec usted (vouvoiement), le pronom est « le » : ¿Le gusta viajar?" },
        { header: { en: "C. Rappel A1.0 et A1.1", fr: "C. Rappel A1.0 et A1.1" },
          text: "Mis amigos ___ muy simpáticos. (ser)", blanks: [["son"]],
          why: "Rappel A1.0 : on décrit des personnes avec SER : ellos son." },
        { text: "¿Cuántos años ___ tu mejor amigo? (tener)", blanks: [["tiene"]],
          why: "Rappel A1.1 : l'âge se dit avec TENER : él tiene." }
      ]
    },
    // ---------------------------------------------------------- III
    {
      id: "reading", num: "III", title: "Comprensión escrita", titleFr: "Compréhension écrite",
      points: 15, skill: "ce", type: "mcq",
      instructions: "Lee el texto y elige la respuesta correcta.",
      instructionsFr: "Lis le texte et choisis la bonne réponse.",
      passage: "Me llamo Carlos y tengo muchos amigos en Madrid. Mi mejor amiga se llama Laura. Es muy simpática, inteligente y divertida. Siempre hablamos de música y a veces bailamos en casa. A los dos nos gusta viajar en verano.\n\nCon mi familia soy un poco tímido, pero con mis amigos soy muy alegre. Mi vecino Pablo es antipático y casi nunca habla con nosotros. No me gusta el fútbol, pero me gusta cocinar con mis amigos. Y tú, ¿te gusta bailar?",
      items: [
        { q: "¿Quién es Laura?", qFr: "Qui est Laura ?",
          opts: ["Su vecina", "Su mejor amiga", "Su hermana"], correct: 1,
          why: "« Mi mejor amiga se llama Laura ». Le vecino est Pablo." },
        { q: "¿Qué hacen Carlos y Laura a veces?", qFr: "Que font Carlos et Laura parfois ?",
          opts: ["Cantan", "Estudian", "Bailan en casa"], correct: 2,
          why: "« A veces bailamos en casa ». Ils parlent toujours de música (siempre), mais ne chantent pas." },
        { q: "¿Cuándo les gusta viajar?", qFr: "Quand aiment-ils voyager ?",
          opts: ["En verano", "Los lunes", "Nunca"], correct: 0,
          why: "« Nos gusta viajar en verano »." },
        { q: "¿Cómo es Pablo, el vecino?", qFr: "Comment est Pablo, le voisin ?",
          opts: ["Simpático", "Antipático", "Divertido", "Alegre"], correct: 1,
          why: "« Mi vecino Pablo es antipático » ; il « casi nunca habla con nosotros ». Alegre décrit Carlos avec ses amis." },
        { q: "¿Qué no le gusta a Carlos?", qFr: "Qu'est-ce que Carlos n'aime pas ?",
          opts: ["Cocinar", "Viajar", "El fútbol", "Bailar"], correct: 2,
          why: "« No me gusta el fútbol, pero me gusta cocinar ». Cocinar, viajar et bailar lui plaisent." }
      ]
    },
    // ----------------------------------------------------------- IV
    {
      id: "listening", num: "IV", title: "Comprensión oral", titleFr: "Compréhension orale",
      points: 15, skill: "co", type: "mcq",
      instructions: "Escucha cada audio (puedes escucharlo otra vez) y elige la respuesta correcta.",
      instructionsFr: "Écoute chaque enregistrement (tu peux le réécouter) et choisis la bonne réponse.",
      items: [
        { audio: [{ who: "A", text: "Hola, Ana. ¿Qué tal? ¿Hablas mucho con tu vecina?" }, { who: "B", text: "No, casi nunca. Es antipática." }],
          q: "¿Con qué frecuencia habla Ana con su vecina?", qFr: "À quelle fréquence Ana parle-t-elle avec sa voisine ?",
          opts: ["Siempre", "Casi nunca", "A menudo"], correct: 1,
          why: "« No, casi nunca » = presque jamais. Elle est antipática, donc elle lui parle peu." },
        { audio: "A mi amigo Pablo le gusta mucho cantar, pero no le gusta bailar. A mí me gusta bailar, pero nunca canto.",
          q: "¿Qué le gusta a Pablo?", qFr: "Qu'est-ce que Pablo aime ?",
          opts: ["Bailar", "Estudiar", "Cantar"], correct: 2,
          why: "« A mi amigo Pablo le gusta mucho cantar ». Bailar, c'est ce qui plaît au narrateur." },
        { audio: [{ who: "A", text: "Buenas tardes, señora. ¿Le gusta viajar?" }, { who: "B", text: "Sí, me gusta mucho. A veces viajo con mis amigas." }],
          q: "¿Cuándo viaja la señora con sus amigas?", qFr: "Quand la dame voyage-t-elle avec ses amies ?",
          opts: ["Siempre", "A veces", "Nunca"], correct: 1,
          why: "« A veces viajo con mis amigas » = parfois." },
        { audio: "Mi vecina Laura es muy agradable. Siempre hablamos en la calle y a veces cocinamos juntas.",
          q: "¿Cómo es Laura?", qFr: "Comment est Laura ?",
          opts: ["Agradable", "Tímida", "Antipática"], correct: 0,
          why: "« Laura es muy agradable » : agréable. Rien n'indique qu'elle soit timide." },
        { audio: "Mis amigos y yo siempre bailamos los fines de semana.",
          q: "¿Cuándo bailan?", qFr: "Quand dansent-ils ?",
          opts: ["Los fines de semana", "En verano", "Nunca"], correct: 0,
          why: "« Siempre bailamos los fines de semana » : toujours, le week-end." }
      ]
    },
    // ------------------------------------------------------------ V
    {
      id: "writing", num: "V", title: "Expresión escrita", titleFr: "Expression écrite",
      points: 20, skill: "ee", type: "ai-text",
      instructions: "Escribe un texto de 50 a 90 palabras.",
      instructionsFr: "Écris un texte de 50 à 90 mots.",
      prompt: "Escribe a una amiga nueva. Presenta a tu mejor amigo o a tu mejor amiga (cómo es). Di qué te gusta hacer con tus amigos y una actividad que nunca haces. Usa siempre, a veces o nunca.",
      promptFr: "Écris à une nouvelle amie. Présente ton meilleur ami ou ta meilleure amie (comment il / elle est). Dis ce que tu aimes faire avec tes amis et une activité que tu ne fais jamais. Utilise siempre, a veces ou nunca.",
      minWords: 50, maxWords: 90,
      rubric: "Total 20 points. Level A1.3: DO NOT penalise missing accents or missing ¿ ¡. Task achievement (6 pts): presents the best friend by name and with at least two adjectives (2 pts); names at least two activities done with friends (2 pts); uses at least one frequency adverb (siempre, a veces, a menudo, casi nunca, nunca) (1 pt); says something they never or don't do / don't like (1 pt). Grammar (8 pts): correct -AR verb forms (hablo, hablas, habla, hablamos, hablan…) (3 pts); correct GUSTAR with the right pronoun and gusta/gustan (\"me gusta bailar\", \"nos gustan los viajes\") (3 pts); correct negation / position of nunca (\"nunca bailo\" or \"no bailo nunca\") (1 pt); gender and number agreement of adjectives (1 pt). Lose 1 pt per error within each criterion. Vocabulary (3 pts): friend and activity vocabulary taught in the lesson (amigo, vecino, divertido, bailar, escuchar, viajar, cocinar…). Coherence (3 pts): clear order, connectors (y, pero, porque), a greeting and a closing. Length: deduct 1 pt if under 40 words.",
      reference: "¡Hola, Laura! Mi mejor amigo se llama Javier. Es muy simpático, inteligente y divertido. Siempre hablamos de fútbol y a veces escuchamos música en su casa. A los dos nos gusta viajar en verano. A mí me gusta mucho cocinar con mis amigos, pero nunca bailo porque soy un poco tímido. ¿Y a ti, qué te gusta? Un abrazo."
    },
    // ----------------------------------------------------------- VI
    {
      id: "speaking", num: "VI", title: "Expresión oral", titleFr: "Expression orale",
      points: 15, skill: "eo", type: "ai-oral",
      instructions: "Pulsa el micrófono y habla unos 45 segundos. Puedes repetir. Si el micrófono no funciona, escribe lo que dirías.",
      instructionsFr: "Appuie sur le micro et parle environ 45 secondes. Tu peux recommencer. Si le micro ne fonctionne pas, écris ce que tu dirais.",
      prompt: "Hablas con un vecino mayor (usted). Salúdalo con educación, pregúntale si le gusta viajar y si baila. Después cuenta qué te gusta a ti hacer con tus amigos y con qué frecuencia.",
      promptFr: "Tu parles à un voisin âgé (usted). Salue-le poliment, demande-lui s'il aime voyager et s'il danse. Puis dis ce que tu aimes faire avec tes amis et à quelle fréquence.",
      minWords: 30, targetSeconds: 45,
      rubric: "Total 15 points. Level A1.3: pronunciation cannot be judged finely from a microphone transcript; judge content, forms and apparent fluency. Content (6 pts): polite greeting with usted (Buenos días / Buenas tardes, ¿cómo está usted?) (1 pt); asks if he likes to travel (¿Le gusta viajar?) (1 pt); asks if he dances (¿Baila usted?) (1 pt); says at least two things they like to do with friends (2 pts); uses a frequency adverb (1 pt). Grammar (5 pts): usted forms (le gusta, baila, habla — not te gusta / bailas) (2 pts); correct -AR verb forms for yo / nosotros (hablo, escuchamos, bailamos…) (2 pts); gusta/gustan correct (1 pt). Vocabulary (2 pts): taught words (amigos, bailar, viajar, siempre, a veces…) and politeness. Fluency (2 pts): from the transcript — complete sentences, about 30-60 words, few recognition errors suggesting mispronunciation. Do not penalise accents or punctuation. Lose 1 pt if the learner uses tú instead of usted throughout.",
      reference: "Buenas tardes, señor. ¿Cómo está usted? ¿Le gusta viajar? ¿Baila usted a veces? A mí me gusta mucho bailar y escuchar música con mis amigos. Siempre hablamos de música y a veces cocinamos juntos. Nunca viajo en invierno, pero en verano viajo con mis amigos."
    }
  ]
};


// ---- 204.js ----
E[204] = {
  code: "A1.4", level: "A1",
  title: "Examen A1.4: Transporte y direcciones",
  titleFr: "Examen A1.4 : Transports et directions",
  objective: "Validar el nivel A1.4: el verbo ir, los transportes, las preposiciones de lugar y el imperativo (tú y usted) para dar direcciones.",
  objectiveFr: "Valider le niveau A1.4 : le verbe ir, les transports, les prépositions de lieu et l'impératif (tú et usted) pour indiquer le chemin.",
  sections: [
    // ------------------------------------------------------------ I
    {
      id: "vocab", num: "I", title: "Vocabulario", titleFr: "Vocabulaire",
      points: 15, skill: "vo", type: "fill",
      instructions: "Completa las frases con una palabra de la lista. Atención: hay palabras que no se usan.",
      instructionsFr: "Complète les phrases avec un mot de la liste. Attention : certains mots ne servent pas.",
      bank: ["avión", "semáforo", "acera", "parada", "esquina", "cerca", "lejos", "pie", "metro", "estación", "plaza"],
      items: [
        { text: "Voy al aeropuerto y tomo el ___ para viajar a otro país.", blanks: [["avión", "avion"]],
          why: "On va à l'aeropuerto pour prendre el avión (accent écrit). On dit « en avión »." },
        { text: "En el ___, la luz está roja: espero. (feu tricolore)", blanks: [["semáforo", "semaforo"]],
          why: "« feu tricolore » = el semáforo (accent sur le á : se-MÁ-fo-ro)." },
        { text: "Camino por la ___, no por la calle. (trottoir)", blanks: [["acera"]],
          why: "« trottoir » = la acera (Espagne). Piège : « esquina » = le coin de la rue." },
        { text: "Espero el autobús en la ___. (arrêt)", blanks: [["parada"]],
          why: "« arrêt de bus » = la parada. « estación » est la gare, un intrus." },
        { text: "La farmacia está en la ___ de la calle. (coin)", blanks: [["esquina"]],
          why: "« le coin de la rue » = la esquina." },
        { text: "El hotel está ___ de aquí: está a cinco minutos. (près)", blanks: [["cerca"]],
          why: "« près » = cerca (de). Son contraire est « lejos »." },
        { text: "El aeropuerto está ___ del centro: está a treinta kilómetros. (loin)", blanks: [["lejos"]],
          why: "« loin » = lejos (de). Même construction que cerca de." },
        { text: "Voy al trabajo a ___. (à pied)", blanks: [["pie"]],
          why: "« à pied » = a pie. Seule expression de transport qui n'utilise pas « en »." }
      ]
    },
    // ----------------------------------------------------------- II
    {
      id: "grammar", num: "II", title: "Gramática y conjugación", titleFr: "Grammaire et conjugaison",
      points: 20, skill: "cj", type: "fill",
      instructions: "Escribe la forma correcta del verbo o la palabra que falta. Escribe solo la palabra que falta.",
      instructionsFr: "Écris la forme correcte du verbe ou le mot qui manque. Tape seulement le mot manquant.",
      items: [
        { header: { en: "A. El verbo ir y las contracciones", fr: "A. Le verbe ir et les contractions" },
          text: "Yo ___ a la estación. (ir)", blanks: [["voy"]],
          why: "ir : yo → voy (sans accent)." },
        { text: "¿Adónde ___ tú? (ir)", blanks: [["vas"]],
          why: "ir : tú → vas." },
        { text: "Marta ___ al banco. (ir)", blanks: [["va"]],
          why: "ir : ella → va." },
        { text: "Nosotros ___ a pie al parque. (ir)", blanks: [["vamos"]],
          why: "ir : nosotros → vamos." },
        { text: "Voy ___ museo. (a + el)", blanks: [["al"]],
          why: "a + el se contracte toujours en « al » : voy al museo." },
        { text: "La parada está al lado ___ hotel. (de + el)", blanks: [["del"]],
          why: "de + el = del : al lado del hotel. (Avec « la » : al lado de la farmacia, sans contraction.)" },
        { header: { en: "B. Imperativo (tú y usted)", fr: "B. Impératif (tú et usted)" },
          text: "___ a la izquierda, por favor. (usted, girar)", blanks: [["gire"]],
          why: "Impératif usted d'un verbe en -AR : -a devient -e : gira → gire." },
        { text: "___ recto. (tú, seguir)", blanks: [["sigue"]],
          why: "Impératif tú = forme él / ella du présent : sigue (le u est muet, le g reste dur)." },
        { header: { en: "C. Rappel A1.0 y A1.3", fr: "C. Rappel A1.0 et A1.3" },
          text: "El banco ___ cerca de la plaza. (estar)", blanks: [["está", "esta"]],
          why: "Rappel A1.0 : la position d'un lieu se dit avec ESTAR : el banco está (accent écrit)." },
        { text: "Me ___ viajar en tren. (gustar)", blanks: [["gusta"]],
          why: "Rappel A1.3 : après gustar, un infinitif → singulier : me gusta viajar." }
      ]
    },
    // ---------------------------------------------------------- III
    {
      id: "reading", num: "III", title: "Comprensión escrita", titleFr: "Compréhension écrite",
      points: 15, skill: "ce", type: "mcq",
      instructions: "Lee el texto y elige la respuesta correcta.",
      instructionsFr: "Lis le texte et choisis la bonne réponse.",
      passage: "Lucía llega a Madrid en tren. Va a pie al hotel porque la estación está cerca del centro. Pregunta a una señora: «Perdone, ¿dónde está el hotel Sol?». La señora responde: «Siga recto por esta calle, cruce la plaza y gire a la derecha. El hotel está enfrente de un banco y al lado de una farmacia».\n\nDespués, Lucía va al museo en metro. Su amigo Pablo explica: «Toma la línea uno y baja en la parada Sol. Gira a la izquierda en el semáforo: el museo está detrás de la plaza». Lucía está muy contenta: ¡es fácil!",
      items: [
        { q: "¿Cómo llega Lucía a Madrid?", qFr: "Comment Lucía arrive-t-elle à Madrid ?",
          opts: ["En avión", "En tren", "En autobús"], correct: 1,
          why: "« Lucía llega a Madrid en tren »." },
        { q: "¿Cómo va Lucía al hotel?", qFr: "Comment Lucía va-t-elle à l'hôtel ?",
          opts: ["En metro", "En taxi", "A pie"], correct: 2,
          why: "« Va a pie al hotel ». Le metro, c'est pour aller au musée." },
        { q: "¿Dónde está el hotel?", qFr: "Où est l'hôtel ?",
          opts: ["Enfrente de un banco y al lado de una farmacia", "Detrás de la plaza", "Lejos del centro", "Entre el banco y el museo"], correct: 0,
          why: "« Enfrente de un banco y al lado de una farmacia ». « Detrás de la plaza », c'est le museo." },
        { q: "¿Dónde baja Lucía del metro?", qFr: "Où Lucía descend-elle du métro ?",
          opts: ["En la estación", "En el museo", "En la plaza", "En la parada Sol"], correct: 3,
          why: "Pablo dit : « baja en la parada Sol »." },
        { q: "¿Dónde está el museo?", qFr: "Où est le musée ?",
          opts: ["Detrás de la plaza", "Enfrente del hotel", "Al lado de la farmacia"], correct: 0,
          why: "« El museo está detrás de la plaza ». Enfrente d'un banco, c'est l'hôtel." }
      ]
    },
    // ----------------------------------------------------------- IV
    {
      id: "listening", num: "IV", title: "Comprensión oral", titleFr: "Compréhension orale",
      points: 15, skill: "co", type: "mcq",
      instructions: "Escucha cada audio (puedes escucharlo otra vez) y elige la respuesta correcta.",
      instructionsFr: "Écoute chaque enregistrement (tu peux le réécouter) et choisis la bonne réponse.",
      items: [
        { audio: [{ who: "A", text: "Perdona, ¿cómo llego a la estación?" }, { who: "B", text: "Sigue recto y gira a la derecha en el semáforo." }],
          q: "¿Dónde gira?", qFr: "Où faut-il tourner ?",
          opts: ["A la izquierda en la esquina", "A la derecha en el semáforo", "A la derecha en la plaza"], correct: 1,
          why: "« Gira a la derecha en el semáforo ». Les deux autres options mélangent la direction ou le lieu." },
        { audio: [{ who: "A", text: "Perdone, señor. ¿Sabe usted dónde está la farmacia?" }, { who: "B", text: "Sí. Siga recto hasta la plaza. La farmacia está al lado del banco." }],
          q: "¿Dónde está la farmacia?", qFr: "Où est la pharmacie ?",
          opts: ["Enfrente del banco", "Detrás de la plaza", "Al lado del banco"], correct: 2,
          why: "« Al lado del banco » = à côté de la banque. Piège : « enfrente » voudrait dire en face." },
        { audio: "Hoy voy al trabajo en bici. Mi marido va en autobús y mis hijos van a pie al parque.",
          q: "¿Cómo va el marido?", qFr: "Comment va le mari ?",
          opts: ["En autobús", "En bici", "A pie"], correct: 0,
          why: "« Mi marido va en autobús ». La bici, c'est la personne qui parle ; a pie, les enfants." },
        { audio: [{ who: "A", text: "¿Está lejos el aeropuerto?" }, { who: "B", text: "No, está cerca. Toma el metro aquí en la plaza." }],
          q: "¿Cómo va al aeropuerto?", qFr: "Comment va-t-on à l'aéroport ?",
          opts: ["En taxi", "En metro", "A pie"], correct: 1,
          why: "« Toma el metro aquí en la plaza ». L'aéroport est cerca, mais on prend quand même le métro." },
        { audio: "Hola, Pablo. Voy al parque con mis amigos. Vamos en bici porque el parque está lejos.",
          q: "¿Por qué van en bici?", qFr: "Pourquoi y vont-ils à vélo ?",
          opts: ["Porque el parque está lejos", "Porque la bici es nueva", "Porque están cansados"], correct: 0,
          why: "« Vamos en bici porque el parque está lejos »." }
      ]
    },
    // ------------------------------------------------------------ V
    {
      id: "writing", num: "V", title: "Expresión escrita", titleFr: "Expression écrite",
      points: 20, skill: "ee", type: "ai-text",
      instructions: "Escribe un texto de 40 a 70 palabras.",
      instructionsFr: "Écris un texte de 40 à 70 mots.",
      prompt: "Un turista (señor mayor, usted) te pregunta cómo llegar del hotel al museo. Escribe las indicaciones: da tres instrucciones con el imperativo de usted y di dónde está el museo (cerca de, al lado de, enfrente de…). Después di cómo vas tú al trabajo.",
      promptFr: "Un touriste (monsieur âgé, usted) te demande comment aller de l'hôtel au musée. Écris les indications : donne trois instructions avec l'impératif de usted et dis où est le musée (cerca de, al lado de, enfrente de…). Ensuite dis comment tu vas, toi, au travail.",
      minWords: 40, maxWords: 70,
      rubric: "Total 20 points. Level A1.4: DO NOT penalise missing accents or missing ¿ ¡. Task achievement (6 pts): at least three direction instructions in order (3 pts, 1 each); says where the museum is with a place preposition (al lado de, enfrente de, cerca de, detrás de…) (2 pts); says how they go to work with IR + a means of transport (1 pt). Grammar (8 pts): imperative USTED forms (siga, gire, cruce, tome, baje, espere… — NOT the tú forms sigue, gira…) (3 pts); correct IR conjugation (voy, va…) and \"en + transport\" / \"a pie\" (2 pts); contractions al / del (\"al museo\", \"al lado del banco\") and de + la without contraction (2 pts); correct use of ESTAR for location (1 pt). Lose 1 pt per error within each criterion. Vocabulary (3 pts): taught words (calle, esquina, semáforo, plaza, banco, farmacia, hotel, museo, derecha, izquierda, recto…). Coherence (3 pts): clear logical sequence, politeness (Perdone, por favor), a short opening and closing. Length: deduct 1 pt if under 30 words.",
      reference: "Perdone, señor. El museo está cerca. Siga recto por esta calle hasta la plaza, cruce la plaza y gire a la derecha. El museo está al lado de la biblioteca y enfrente del banco. Yo voy al trabajo en metro, pero hoy voy a pie. ¡Buen viaje!"
    },
    // ----------------------------------------------------------- VI
    {
      id: "speaking", num: "VI", title: "Expresión oral", titleFr: "Expression orale",
      points: 15, skill: "eo", type: "ai-oral",
      instructions: "Pulsa el micrófono y habla unos 45 segundos. Puedes repetir. Si el micrófono no funciona, escribe lo que dirías.",
      instructionsFr: "Appuie sur le micro et parle environ 45 secondes. Tu peux recommencer. Si le micro ne fonctionne pas, écris ce que tu dirais.",
      prompt: "Hablas con un amigo (tú). Pregúntale adónde va y cómo va. Después explica a tu amigo cómo llegar de tu casa a la estación con el imperativo de tú: tres indicaciones.",
      promptFr: "Tu parles à un ami (tú). Demande-lui où il va et comment il y va. Puis explique à ton ami comment aller de chez toi à la gare avec l'impératif de tú : trois indications.",
      minWords: 30, targetSeconds: 45,
      rubric: "Total 15 points. Level A1.4: pronunciation cannot be judged finely from a microphone transcript; judge content, forms and apparent fluency. Content (6 pts): asks where the friend goes (¿Adónde vas?) (1 pt); asks how he goes (¿Cómo vas? / ¿Vas en bici o en metro?) (1 pt); gives at least three directions to the station (3 pts, 1 each); mentions where the station is with a place preposition (1 pt). Grammar (5 pts): correct tú imperatives (gira, sigue, cruza, toma, baja…) and NOT usted forms (2 pts); correct IR forms (vas, voy) and \"en + transport\" / \"a pie\" (2 pts); contraction al / del (1 pt). Vocabulary (2 pts): taught words (calle, esquina, semáforo, plaza, derecha, izquierda, recto…). Fluency (2 pts): from the transcript — complete sentences, about 30-60 words, few recognition errors suggesting mispronunciation. Do not penalise accents or punctuation.",
      reference: "Hola, Pablo. ¿Adónde vas? ¿Vas en metro o a pie? Para ir a la estación desde mi casa, mira: gira a la izquierda, sigue recto por la calle hasta la plaza y cruza la plaza. La estación está al lado del banco, enfrente del hotel."
    }
  ]
};


// ---- 205.js ----
E[205] = {
  code: "A1.5", level: "A1",
  title: "Examen A1.5: Gustos y preferencias",
  titleFr: "Examen A1.5 : Goûts et préférences",
  objective: "Validar el nivel A1.5: gustar, encantar, interesar, preferir, odiar y la pregunta «¿cuál es tu… favorito?», con tú y con usted.",
  objectiveFr: "Valider le niveau A1.5 : gustar, encantar, interesar, preferir, odiar et la question « ¿cuál es tu… favorito ? », en tutoyant et en vouvoyant.",
  sections: [
    // ------------------------------------------------------------ I
    {
      id: "vocab", num: "I", title: "Vocabulario", titleFr: "Vocabulaire",
      points: 15, skill: "vo", type: "fill",
      instructions: "Completa las frases con una palabra de la lista. Atención: hay palabras que no se usan.",
      instructionsFr: "Complète les phrases avec un mot de la liste. Attention : certains mots ne servent pas.",
      bank: ["pasatiempo", "cine", "guitarra", "odio", "encanta", "igual", "interesante", "relajante", "bastante", "nadar", "favorita"],
      items: [
        { text: "Mi ___ favorito es cocinar en mi tiempo libre. (passe-temps)", blanks: [["pasatiempo"]],
          why: "« passe-temps » = el pasatiempo (masculin : mi pasatiempo favorito). « favorita » serait féminin, c'est un intrus." },
        { text: "Hoy vamos al ___ a ver una película. (cinéma)", blanks: [["cine"]],
          why: "« cinéma » = el cine. Après « ir a + el » → al cine." },
        { text: "Mi hermano toca la ___ en un grupo de música.", blanks: [["guitarra"]],
          why: "« tocar la guitarra » = jouer de la guitare. Le u de gui- est muet." },
        { text: "___ el ruido. (je déteste)", blanks: [["odio", "Odio"]],
          why: "« je déteste » = odio (odiar est régulier : odio, odias, odia…). Le sujet est la personne : « odio », pas « me odio »." },
        { text: "Me ___ bailar: es mi pasión. (j'adore)", blanks: [["encanta"]],
          why: "« adorer » = encantar, qui fonctionne comme gustar : « me encanta » + infinitif (singulier)." },
        { text: "No me importa: me da ___. (ça m'est égal)", blanks: [["igual"]],
          why: "« ça m'est égal » = me da igual. Expression figée." },
        { text: "El libro es muy ___: aprendo muchas cosas. (intéressant)", blanks: [["interesante"]],
          why: "« intéressant » = interesante (même forme au féminin et au masculin)." },
        { text: "Leer es muy ___ para mí. (relaxant)", blanks: [["relajante"]],
          why: "« relaxant » = relajante (j = kh). Invariable en genre." }
      ]
    },
    // ----------------------------------------------------------- II
    {
      id: "grammar", num: "II", title: "Gramática y conjugación", titleFr: "Grammaire et conjugaison",
      points: 20, skill: "cj", type: "fill",
      instructions: "Escribe la forma correcta del verbo o la palabra que falta. Escribe solo la palabra que falta.",
      instructionsFr: "Écris la forme correcte du verbe ou le mot qui manque. Tape seulement le mot manquant.",
      items: [
        { header: { en: "A. Gustar y encantar", fr: "A. Gustar et encantar" },
          text: "Me ___ el cine. (gustar)", blanks: [["gusta"]],
          why: "« el cine » est singulier : me gusta." },
        { text: "Me ___ las películas. (gustar)", blanks: [["gustan"]],
          why: "« las películas » est pluriel : me gustan." },
        { text: "A él le ___ los videojuegos. (encantar)", blanks: [["encantan"]],
          why: "« los videojuegos » est pluriel : le encantan. Le verbe suit ce qui plaît, pas la personne." },
        { text: "A nosotros nos ___ viajar. (encantar)", blanks: [["encanta"]],
          why: "Après encantar, un infinitif → singulier : nos encanta viajar." },
        { text: "¿A usted ___ gusta bailar, señor?", blanks: [["le"]],
          why: "Avec usted (vouvoiement), le pronom est « le »." },
        { header: { en: "B. Preferir y reacciones", fr: "B. Preferir et réactions" },
          text: "Tú ___ la música clásica. (preferir)", blanks: [["prefieres"]],
          why: "preferir : e → ie à tú : prefieres." },
        { text: "Nosotros ___ pasear. (preferir)", blanks: [["preferimos"]],
          why: "Pas de diphtongue à nosotros (hors de la « botte ») : preferimos." },
        { text: "No me gusta el fútbol. — A mí ___. (moi non plus)", blanks: [["tampoco"]],
          why: "On approuve une phrase négative : « a mí tampoco » (moi non plus). « También » ne s'emploie qu'avec une phrase positive." },
        { header: { en: "C. Rappel A1.3 y A1.4", fr: "C. Rappel A1.3 et A1.4" },
          text: "Mi hermana ___ muy bien. (cantar)", blanks: [["canta"]],
          why: "Rappel A1.3 : verbe en -AR, ella → -a : canta." },
        { text: "Voy ___ cine con mis amigos. (a + el)", blanks: [["al"]],
          why: "Rappel A1.4 : a + el = al (contraction obligatoire) : voy al cine." }
      ]
    },
    // ---------------------------------------------------------- III
    {
      id: "reading", num: "III", title: "Comprensión escrita", titleFr: "Compréhension écrite",
      points: 15, skill: "ce", type: "mcq",
      instructions: "Lee el texto y elige la respuesta correcta.",
      instructionsFr: "Lis le texte et choisis la bonne réponse.",
      passage: "¡Hola! Me llamo Sofía y tengo veinticinco años. En mi tiempo libre me gusta mucho leer y escuchar música clásica. Mi pasatiempo favorito es cocinar para mis amigos. Me encanta viajar porque es muy interesante, pero odio el calor.\n\nA mi hermano le gusta el cine, pero a mí no mucho. Prefiero el teatro. Mi madre odia bailar, pero mi padre baila muy bien. No me gustan nada los videojuegos. Y tú, ¿prefieres la música o el deporte?",
      items: [
        { q: "¿Cuál es el pasatiempo favorito de Sofía?", qFr: "Quel est le passe-temps favori de Sofía ?",
          opts: ["Leer", "Viajar", "Cocinar para sus amigos", "Bailar"], correct: 2,
          why: "« Mi pasatiempo favorito es cocinar para mis amigos ». Leer lui plaît aussi (« me gusta mucho »), mais ce n'est pas son favori." },
        { q: "¿Por qué le encanta viajar a Sofía?", qFr: "Pourquoi Sofía adore-t-elle voyager ?",
          opts: ["Porque es relajante", "Porque es muy interesante", "Porque le gusta el calor"], correct: 1,
          why: "« Me encanta viajar porque es muy interesante ». Elle odia el calor." },
        { q: "¿Qué odia Sofía?", qFr: "Qu'est-ce que Sofía déteste ?",
          opts: ["El calor", "El cine", "El teatro"], correct: 0,
          why: "« Odio el calor ». Le cine : « a mí no mucho » (peu aimé, pas détesté) ; elle préfère le teatro." },
        { q: "¿Qué prefiere Sofía?", qFr: "Que préfère Sofía ?",
          opts: ["La música", "El cine", "Los videojuegos", "El teatro"], correct: 3,
          why: "« Prefiero el teatro » (par opposition au cine de son frère)." },
        { q: "¿Qué es verdad?", qFr: "Qu'est-ce qui est vrai ?",
          opts: ["A su madre le encanta bailar.", "A su hermano le gusta el cine.", "A Sofía le gustan los videojuegos.", "A su padre no le gusta bailar."], correct: 1,
          why: "« A mi hermano le gusta el cine ». Sa mère odia bailar ; son père baila muy bien ; Sofía : « no me gustan nada los videojuegos »." }
      ]
    },
    // ----------------------------------------------------------- IV
    {
      id: "listening", num: "IV", title: "Comprensión oral", titleFr: "Compréhension orale",
      points: 15, skill: "co", type: "mcq",
      instructions: "Escucha cada audio (puedes escucharlo otra vez) y elige la respuesta correcta.",
      instructionsFr: "Écoute chaque enregistrement (tu peux le réécouter) et choisis la bonne réponse.",
      items: [
        { audio: [{ who: "A", text: "¿Te gusta cocinar, Pablo?" }, { who: "B", text: "Depende. No me gusta mucho, pero me encanta comer." }],
          q: "¿Qué le encanta a Pablo?", qFr: "Qu'est-ce que Pablo adore ?",
          opts: ["Cocinar", "Comer", "Bailar"], correct: 1,
          why: "« Me encanta comer ». Cocinar : « no me gusta mucho »." },
        { audio: [{ who: "A", text: "¿Qué prefiere usted, señora, el té o el café?" }, { who: "B", text: "Prefiero el té. Odio el café." }],
          q: "¿Qué prefiere la señora?", qFr: "Que préfère la dame ?",
          opts: ["El café", "Los dos", "El té"], correct: 2,
          why: "« Prefiero el té. Odio el café »." },
        { audio: "Mi color favorito es el azul y mi deporte favorito es el fútbol. Mi hermana prefiere nadar. A ella le gustan mucho las piscinas.",
          q: "¿Qué prefiere la hermana?", qFr: "Que préfère la sœur ?",
          opts: ["Nadar", "El fútbol", "El azul"], correct: 0,
          why: "« Mi hermana prefiere nadar ». Le fútbol est le sport favori de celui qui parle." },
        { audio: [{ who: "A", text: "No me gusta nada el ruido." }, { who: "B", text: "A mí tampoco." }],
          q: "¿Qué quiere decir B?", qFr: "Que veut dire B ?",
          opts: ["Le gusta el ruido.", "Tampoco le gusta el ruido.", "Le interesa el ruido."], correct: 1,
          why: "« A mí tampoco » = moi non plus : B n'aime pas le bruit non plus." },
        { audio: "Me gusta leer. Me interesan las novelas históricas y me encantan los libros de viajes. Mi madre prefiere el cine.",
          q: "¿Qué le interesa a la persona que habla?", qFr: "Qu'est-ce qui intéresse la personne qui parle ?",
          opts: ["Las novelas históricas", "El cine", "Los libros de ciencia"], correct: 0,
          why: "« Me interesan las novelas históricas ». Le cine, c'est ce que préfère sa mère." }
      ]
    },
    // ------------------------------------------------------------ V
    {
      id: "writing", num: "V", title: "Expresión escrita", titleFr: "Expression écrite",
      points: 20, skill: "ee", type: "ai-text",
      instructions: "Escribe un texto de 50 a 90 palabras.",
      instructionsFr: "Écris un texte de 50 à 90 mots.",
      prompt: "Escribe a un amigo de intercambio. Di tres cosas que te gustan o te encantan, una cosa que odias y cuál es tu pasatiempo favorito. Explica también qué prefieres entre el cine y el teatro (o entre otras dos cosas) y por qué (porque…).",
      promptFr: "Écris à un ami d'échange. Dis trois choses que tu aimes ou adores, une chose que tu détestes et quel est ton passe-temps favori. Explique aussi ce que tu préfères entre le cinéma et le théâtre (ou entre deux autres choses) et pourquoi (porque…).",
      minWords: 50, maxWords: 90,
      rubric: "Total 20 points. Level A1.5: DO NOT penalise missing accents or missing ¿ ¡. Task achievement (6 pts): at least three likes with gustar / encantar / interesar (3 pts, 1 each); one thing they hate or dislike with odiar / no me gusta (1 pt); says what their favourite hobby is (mi pasatiempo favorito es…) (1 pt); states a preference between two options with preferir AND gives a reason with \"porque\" (1 pt). Grammar (8 pts): correct gusta / gustan agreement with the thing liked (singular or infinitive → gusta, plural → gustan), with the right pronoun (me, te, le…) (3 pts); correct encantar / interesar construction (me encanta, me interesan) (2 pts); correct PREFERIR with e → ie (prefiero, prefieres, prefiere; preferimos without ie) (2 pts); correct ODIAR (odio) (1 pt). Lose 1 pt per error within each criterion; \"gusto\" used to mean \"I like\" or \"me odio el…\" counts as an error. Vocabulary (3 pts): taught words (pasatiempo, tiempo libre, cine, teatro, música, leer, viajar, interesante, relajante, divertido…). Coherence (3 pts): clear organisation, connectors (y, pero, porque), greeting and closing. Length: deduct 1 pt if under 40 words.",
      reference: "¡Hola! En mi tiempo libre me gusta mucho leer y escuchar música. Me encantan los viajes y me interesan las novelas históricas. Odio el ruido. Mi pasatiempo favorito es cocinar para mis amigos. Prefiero el teatro porque es muy divertido, pero a mi hermano le gusta más el cine. Y tú, ¿qué te gusta? Un abrazo."
    },
    // ----------------------------------------------------------- VI
    {
      id: "speaking", num: "VI", title: "Expresión oral", titleFr: "Expression orale",
      points: 15, skill: "eo", type: "ai-oral",
      instructions: "Pulsa el micrófono y habla unos 45 segundos. Puedes repetir. Si el micrófono no funciona, escribe lo que dirías.",
      instructionsFr: "Appuie sur le micro et parle environ 45 secondes. Tu peux recommencer. Si le micro ne fonctionne pas, écris ce que tu dirais.",
      prompt: "Hablas con un compañero nuevo (tú). Pregúntale qué le gusta hacer, cuál es su pasatiempo favorito y qué prefiere: el cine o el teatro. Después responde tú a las mismas preguntas.",
      promptFr: "Tu parles à un nouveau camarade (tú). Demande-lui ce qu'il aime faire, quel est son passe-temps favori et ce qu'il préfère : le cinéma ou le théâtre. Puis réponds toi-même aux mêmes questions.",
      minWords: 30, targetSeconds: 45,
      rubric: "Total 15 points. Level A1.5: pronunciation cannot be judged finely from a microphone transcript; judge content, forms and apparent fluency. Content (6 pts): asks three questions to the friend with tú (¿Qué te gusta hacer? / ¿Cuál es tu pasatiempo favorito? / ¿Qué prefieres, el cine o el teatro?) (3 pts, 1 each); answers about their own likes (at least two) (1 pt); gives their favourite hobby (1 pt); states what they prefer (1 pt). Grammar (5 pts): correct gusta / gustan with the right pronoun (te gusta, me gustan…) (2 pts); correct PREFERIR (prefieres, prefiero) (1 pt); correct use of \"cuál es tu… favorito/a\" with agreement (1 pt); correct encantar / odiar / interesar (1 pt). Vocabulary (2 pts): taught words (pasatiempo, cine, teatro, leer, viajar, me encanta, odio, interesante…). Fluency (2 pts): from the transcript — complete sentences, about 30-60 words, few recognition errors suggesting mispronunciation. Do not penalise accents or punctuation. Lose 1 pt if usted is used instead of tú throughout.",
      reference: "Hola. ¿Qué te gusta hacer en tu tiempo libre? ¿Cuál es tu pasatiempo favorito? ¿Qué prefieres, el cine o el teatro? A mí me gusta mucho leer y me encanta viajar. Mi pasatiempo favorito es cocinar. Prefiero el cine porque es muy divertido, pero odio las películas aburridas."
    }
  ]
};


// ---- 206.js ----
E[206] = {
  code: "A1.6", level: "A1",
  title: "Examen A1.6 – Comida y bebida",
  titleFr: "Examen A1.6 – Nourriture et boissons",
  objective: "Aprobar A1.6: vocabulario de la comida, verbos en -ER / -IR, pedir en un restaurante, mucho / un poco de.",
  objectiveFr: "Valider A1.6 : vocabulaire de la nourriture, verbes en -ER / -IR, commander au restaurant, mucho / un poco de.",
  sections: [
    {
      id: "vocab", num: "I", title: "Vocabulario", titleFr: "Vocabulaire", points: 15, skill: "vo", type: "fill",
      instructions: "Completa las frases con una palabra de la lista. Hay palabras que sobran.",
      instructionsFr: "Complète les phrases avec un mot de la liste. Certains mots sont en trop.",
      bank: ["desayuno", "cena", "camarero", "cuenta", "trozo", "vaso", "picante", "leche", "manzana", "pescado", "plátano"],
      items: [
        { text: "Por la mañana tomo el ___: un café y una tostada.", blanks: [["desayuno"]], points: 2,
          why: "« el desayuno » = le petit-déjeuner, le repas du matin. « la cena » est le repas du soir." },
        { text: "Por la noche, en casa, tomamos la ___ con la familia.", blanks: [["cena"]], points: 2,
          why: "« la cena » = le dîner, repas du soir (« por la noche »). Attention au genre : la cena (féminin)." },
        { text: "Quería un ___ de agua, por favor.", blanks: [["vaso"]], points: 2,
          why: "« un vaso de agua » = un verre d'eau. « un trozo » se dit pour un solide (un trozo de queso), pas pour un liquide." },
        { text: "El ___ nos trae la carta y pregunta: «¿Qué desean?».", blanks: [["camarero"]], points: 2,
          why: "« el camarero » = le serveur, c'est lui qui apporte la carte et prend la commande." },
        { text: "Por favor, la ___. ¿Puedo pagar con tarjeta?", blanks: [["cuenta"]], points: 2,
          why: "« la cuenta » = l'addition. On la demande à la fin du repas, puis on paie." },
        { text: "Quiero un ___ de queso con el pan.", blanks: [["trozo"]], points: 2,
          why: "« un trozo de queso » = un morceau de fromage : « trozo » s'emploie pour un aliment solide." },
        { text: "Mi bebida favorita es el café con ___.", blanks: [["leche"]], points: 2,
          why: "« café con leche » = café au lait. « leche » est féminin : la leche." },
        { text: "No me gusta la comida muy ___; prefiero la comida sin pimienta.", blanks: [["picante"]], points: 1,
          why: "« picante » = épicé, piquant. L'adjectif ne change pas au féminin : comida picante." }
      ]
    },
    {
      id: "grammar", num: "II", title: "Conjugación y gramática", titleFr: "Conjugaison et grammaire", points: 20, skill: "cj", type: "fill",
      instructions: "Escribe la forma correcta del verbo entre paréntesis, o la palabra que falta.",
      instructionsFr: "Écris la forme correcte du verbe entre parenthèses, ou le mot qui manque.",
      items: [
        { text: "Yo ___ pan con queso en el desayuno. (comer)", blanks: [["como"]],
          why: "yo + verbe en -ER : on enlève -er et on ajoute -o → como. (Sans accent : « como » = je mange ; « cómo » = comment.)" },
        { text: "Tú ___ mucha agua. (beber)", blanks: [["bebes"]],
          why: "tú + verbe en -ER → terminaison -es : bebes. Le « v » ne fait pas partie de la terminaison." },
        { text: "Marta ___ en Madrid con su familia. (vivir)", blanks: [["vive"]],
          why: "ella + verbe en -IR → terminaison -e : vive. Ne confonds pas avec « viven » (ils)." },
        { text: "Nosotros ___ una carta a nuestros amigos. (escribir)", blanks: [["escribimos"]],
          why: "nosotros + verbe en -IR → -imos : escribimos. (En -ER ce serait -emos : comemos.)" },
        { text: "Vosotros ___ pescado los viernes. (comer)", blanks: [["coméis", "comeis"]],
          why: "vosotros + verbe en -ER → -éis : coméis, avec accent écrit sur le « e »." },
        { text: "Yo ___ la cuenta al camarero. (pedir)", blanks: [["pido"]],
          why: "« pedir » change son radical : e → i. yo pido, tú pides, él pide, mais nosotros pedimos. Forme à apprendre en bloc." },
        { text: "Nosotros ___ una mesa para dos. (querer)", blanks: [["queremos"]],
          why: "« querer » change son radical (quiero, quieres, quiere) mais PAS à nosotros : queremos." },
        { text: "Ellos ___ español con el camarero. (hablar)", blanks: [["hablan"]],
          why: "Rappel A1.3 : verbe en -AR, ellos → -an : hablan. Ici la voyelle de la terminaison est « a », pas « e »." },
        { text: "Me ___ las verduras. (gustar)", blanks: [["gustan"]],
          why: "Rappel A1.5 : on accorde gustar avec ce qu'on aime. « las verduras » est pluriel → me gustan." },
        { text: "Comemos ___ huevos los domingos.", blanks: [["muchos"]],
          why: "« huevos » est masculin pluriel et dénombrable → muchos. Pour un nom indénombrable on dirait « mucho pan », « mucha agua »." }
      ]
    },
    {
      id: "reading", num: "III", title: "Comprensión escrita", titleFr: "Compréhension écrite", points: 15, skill: "ce", type: "mcq",
      instructions: "Lee el texto y elige la respuesta correcta.",
      instructionsFr: "Lis le texte et choisis la bonne réponse.",
      passage: "Me llamo Lucas y vivo en Valencia. Mi desayuno es pequeño: bebo un zumo de naranja y como un trozo de pan con jamón. Mi comida es grande: mi madre prepara arroz con pollo y yo como también una ensalada. Por la tarde tomo la merienda con mi hermana: ella bebe leche y yo como una manzana.\n\nLos sábados, mis amigos y yo cenamos en un restaurante. Yo pido pescado, pero no como queso. Mi amigo Tomás pide una pizza picante y bebe una cerveza. Al final, siempre pedimos la cuenta.",
      items: [
        { q: "¿Qué bebe Lucas en el desayuno?", qFr: "Que boit Lucas au petit-déjeuner ?",
          opts: ["Un café con leche", "Un zumo de naranja", "Una cerveza"], correct: 1,
          why: "« bebo un zumo de naranja » : un jus d'orange. Le café au lait n'est pas mentionné ; la bière est pour Tomás." },
        { q: "¿Quién prepara el arroz con pollo?", qFr: "Qui prépare le riz au poulet ?",
          opts: ["Lucas", "Su hermana", "Su madre"], correct: 2,
          why: "« mi madre prepara arroz con pollo » : c'est sa mère. Lucas, lui, mange aussi une salade." },
        { q: "¿Con quién toma Lucas la merienda?", qFr: "Avec qui Lucas prend-il le goûter ?",
          opts: ["Con su hermana", "Con sus amigos", "Con su madre"], correct: 0,
          why: "« Por la tarde tomo la merienda con mi hermana ». Les amis apparaissent seulement pour le dîner du samedi." },
        { q: "¿Qué frase es verdadera?", qFr: "Quelle phrase est vraie ?",
          opts: ["Lucas pide pizza en el restaurante.", "Lucas no come queso.", "Lucas bebe cerveza los sábados."], correct: 1,
          why: "« pero no como queso » : Lucas ne mange pas de fromage. Il pide du poisson ; la pizza et la bière sont pour son ami Tomás." },
        { q: "¿Qué hacen los amigos al final de la cena?", qFr: "Que font les amis à la fin du dîner ?",
          opts: ["Beben leche.", "Escriben una carta.", "Piden la cuenta."], correct: 2,
          why: "« Al final, siempre pedimos la cuenta » : ils demandent l'addition. « pedir » = demander, commander." }
      ]
    },
    {
      id: "listening", num: "IV", title: "Comprensión oral", titleFr: "Compréhension orale", points: 15, skill: "co", type: "mcq",
      instructions: "Escucha cada audio (puedes repetirlo) y elige la respuesta correcta.",
      instructionsFr: "Écoute chaque enregistrement (tu peux le réécouter) et choisis la bonne réponse.",
      items: [
        { audio: [{ who: "A", text: "Buenas tardes, señora. ¿Qué desea tomar?" }, { who: "B", text: "Quería un café con leche y un trozo de pan, por favor." }],
          q: "¿Qué pide la clienta?", qFr: "Que commande la cliente ?",
          opts: ["Un café con leche y pan", "Un té y un bocadillo", "Un zumo y fruta"], correct: 0,
          why: "« un café con leche y un trozo de pan » : café au lait et un morceau de pain. Pas de thé ni de jus." },
        { audio: "En mi casa siempre bebemos agua con la comida. Mi hermano bebe mucha agua, pero yo prefiero el zumo.",
          q: "¿Qué prefiere el hablante?", qFr: "Que préfère la personne qui parle ?",
          opts: ["El agua", "El zumo", "La leche"], correct: 1,
          why: "« yo prefiero el zumo » : elle préfère le jus. C'est son frère qui boit beaucoup d'eau." },
        { audio: [{ who: "A", text: "¿Le gusta el pescado, señora?" }, { who: "B", text: "No, no me gusta el pescado, pero me encantan las verduras." }],
          q: "¿Qué le encanta a la señora?", qFr: "Qu'est-ce que la dame adore ?",
          opts: ["El pescado", "La carne", "Las verduras"], correct: 2,
          why: "« me encantan las verduras » : elle adore les légumes. Le poisson, elle ne l'aime pas (« no me gusta »)." },
        { audio: [{ who: "A", text: "Oye, ¿qué comes hoy?" }, { who: "B", text: "Como pasta con tomate y una ensalada. ¿Y tú?" }, { who: "A", text: "Yo como arroz con pollo." }],
          q: "¿Qué come la segunda persona (B)?", qFr: "Que mange la deuxième personne (B) ?",
          opts: ["Arroz con pollo", "Sopa y fruta", "Pasta con tomate y ensalada"], correct: 2,
          why: "B dit « Como pasta con tomate y una ensalada ». Le riz au poulet, c'est ce que mange A." },
        { audio: [{ who: "A", text: "¿Algo más?" }, { who: "B", text: "Nada más, gracias. La cuenta, por favor. ¿Puedo pagar con tarjeta?" }],
          q: "¿Qué quiere hacer el cliente?", qFr: "Que veut faire le client ?",
          opts: ["Pedir un postre", "Pagar con tarjeta", "Pedir otra mesa"], correct: 1,
          why: "« La cuenta, por favor. ¿Puedo pagar con tarjeta? » : il veut payer par carte. « Nada más » = il ne veut rien d'autre." }
      ]
    },
    {
      id: "writing", num: "V", title: "Expresión escrita", titleFr: "Expression écrite", points: 20, skill: "ee", type: "ai-text",
      instructions: "Escribe un texto de 50 a 90 palabras.",
      instructionsFr: "Écris un texte de 50 à 90 mots.",
      prompt: "Estás en un restaurante en España con un amigo. Habla con el camarero (usted): saluda, pide una mesa para dos y pide tu comida (de primero, de segundo y una bebida) con «Quería…». Después explica qué comes y bebes normalmente en un día, di una cosa que te gusta y una cosa que no te gusta. Termina pidiendo la cuenta.",
      promptFr: "Tu es dans un restaurant en Espagne avec un ami. Parle au serveur (vouvoiement) : salue, demande une table pour deux et commande ton repas (entrée, plat, boisson) avec « Quería… ». Puis explique ce que tu manges et bois normalement dans une journée, dis une chose que tu aimes et une que tu n'aimes pas. Termine en demandant l'addition.",
      minWords: 50, maxWords: 90,
      rubric: "Total 20 points. Task achievement (6 pts, 1 pt each): (a) greeting and request for a table for two; (b) an order with a starter, a main course AND a drink using \"Quería\"/\"Queríamos\"; (c) what the learner usually eats and drinks (at least two meals or items); (d) one thing they like; (e) one thing they do not like; (f) a request for the bill (la cuenta). Grammar (7 pts): correct present of regular -ER/-IR verbs (comer, beber, vivir, escribir...) with the right endings (3 pts; -1 per wrong ending, max -3); polite \"Quería\" or \"Quiero\" used correctly (1 pt); correct use of \"un poco de\" / \"mucho-mucha-muchos-muchas\" / a container (\"un vaso de\", \"un trozo de\") (2 pts); correct \"me gusta / me gustan\" agreement (1 pt). Vocabulary (4 pts): range and accuracy of food, drink and restaurant words taught in A1.6 (4 = at least 8 relevant words used correctly). Coherence and register (3 pts): logical order, consistent \"usted\" with the waiter (no \"tú\" forms addressed to him), simple connectors (y, pero, también). Do NOT penalise missing accents or missing ¿ ¡ (A1 level). Do not penalise a text slightly outside 50-90 words unless it is under 35 words (then cap Task achievement at 3). Give the final mark /20 with a short justification per criterion.",
      reference: "Buenos días. Quería una mesa para dos, por favor. De primero, quería una sopa de verduras y de segundo, un poco de pescado con arroz. Para beber, un vaso de agua y un café con leche. Normalmente desayuno pan con queso y bebo un té. Como mucha fruta y bebo mucha agua. Me gustan las verduras, pero no me gusta la carne. Mi amigo come pescado y bebe zumo. La cuenta, por favor. ¿Puedo pagar con tarjeta?"
    },
    {
      id: "speaking", num: "VI", title: "Expresión oral", titleFr: "Expression orale", points: 15, skill: "eo", type: "ai-oral",
      instructions: "Pulsa el micrófono y habla unos 40 segundos. Si el micrófono no funciona, escribe lo que dirías.",
      instructionsFr: "Appuie sur le micro et parle environ 40 secondes. Si le micro ne fonctionne pas, écris ce que tu dirais.",
      prompt: "Habla de tus comidas. Di qué comes y qué bebes en el desayuno, en la comida y en la cena. Di una cosa que te gusta y una cosa que no te gusta. Después, imagina que estás en un restaurante: pide una bebida y un plato con «Quería…».",
      promptFr: "Parle de tes repas. Dis ce que tu manges et bois au petit-déjeuner, au déjeuner et au dîner. Dis une chose que tu aimes et une que tu n'aimes pas. Puis imagine que tu es au restaurant : commande une boisson et un plat avec « Quería… ».",
      targetSeconds: 40, minWords: 30,
      rubric: "Total 15 points. Content (5 pts): the learner talks about the three meals (what they eat and drink), says one thing they like and one they dislike, and orders a drink and a dish politely (1 pt per element, 1 pt for overall completeness). Grammar (5 pts): correct present of regular -ER/-IR verbs (como, bebo, comes, comemos...), correct \"Quería\" in the order, correct \"me gusta / me gustan\", \"mucho/un poco de\" used properly; deduct 1 pt per recurring error type. Vocabulary (3 pts): food, drink and restaurant words from A1.6. Fluency (2 pts): judged from the transcript only (about 40 seconds, roughly 50-90 words, connected sentences, few hesitations); pronunciation cannot be judged finely, so do not penalise recognition quirks. Do not penalise missing accents or punctuation in the transcript.",
      reference: "Por la mañana desayuno pan con queso y bebo un café con leche. En la comida como arroz con pollo y una ensalada, y bebo agua. Por la noche ceno sopa y un poco de fruta. Me gustan las verduras, pero no me gusta el pescado. En un restaurante digo: Buenas tardes. Quería un zumo de naranja y un plato de pasta, por favor. Muchas gracias."
    }
  ]
};


// ---- 207.js ----
E[207] = {
  code: "A1.7", level: "A1",
  title: "Examen A1.7 – De compras",
  titleFr: "Examen A1.7 – Faire ses achats",
  objective: "Aprobar A1.7: ropa, tallas y precios, comparar, este / ese, probarse y «me lo llevo».",
  objectiveFr: "Valider A1.7 : vêtements, tailles et prix, comparer, este / ese, probarse et « me lo llevo ».",
  sections: [
    {
      id: "vocab", num: "I", title: "Vocabulario", titleFr: "Vocabulaire", points: 15, skill: "vo", type: "fill",
      instructions: "Completa las frases con una palabra de la lista. Hay palabras que sobran.",
      instructionsFr: "Complète les phrases avec un mot de la liste. Certains mots sont en trop.",
      bank: ["camisa", "talla", "caro", "barato", "dependienta", "probadores", "rebajas", "efectivo", "bolso", "recibo", "calcetines"],
      items: [
        { text: "Quería una ___ blanca, por favor.", blanks: [["camisa"]], points: 2,
          why: "« una camisa » = une chemise. Le déterminant féminin « una » exclut « bolso » (masculin) et « calcetines » (pluriel)." },
        { text: "¿Qué ___ usa usted? — Uso la talla 40.", blanks: [["talla"]], points: 2,
          why: "« la talla » = la taille (vêtements). La réponse « la talla 40 » confirme le mot." },
        { text: "Este abrigo es muy ___: cuesta quinientos euros.", blanks: [["caro"]], points: 2,
          why: "« caro » = cher. Quinientos euros pour un manteau : c'est cher, donc caro (≠ barato)." },
        { text: "Este jersey es muy ___: solo cuesta quince euros.", blanks: [["barato"]], points: 2,
          why: "« barato » = bon marché. « solo cuesta quince euros » indique un petit prix. Accord : el jersey → barato (masculin)." },
        { text: "La ___ me pregunta: «¿Puedo ayudarle?».", blanks: [["dependienta"]], points: 2,
          why: "« la dependienta » = la vendeuse (forme féminine de el dependiente). C'est elle qui accueille le client." },
        { text: "¿Dónde están los ___? Quiero probarme esta chaqueta.", blanks: [["probadores"]], points: 2,
          why: "« los probadores » = les cabines d'essayage : on s'y essaie un vêtement (probarse)." },
        { text: "En enero hay ___ y todo es más barato.", blanks: [["rebajas"]], points: 2,
          why: "« las rebajas » = les soldes. Mot toujours au pluriel en espagnol." },
        { text: "No pago con tarjeta: pago en ___.", blanks: [["efectivo"]], points: 1,
          why: "« en efectivo » = en espèces (≠ con tarjeta)." }
      ]
    },
    {
      id: "grammar", num: "II", title: "Gramática", titleFr: "Grammaire", points: 20, skill: "cj", type: "fill",
      instructions: "Escribe la palabra o la forma que falta. Mira el verbo entre paréntesis.",
      instructionsFr: "Écris le mot ou la forme qui manque. Regarde le verbe entre parenthèses.",
      items: [
        { text: "Yo ___ la chaqueta azul. (probarse)", blanks: [["me pruebo"]],
          why: "probarse est pronominal et change son radical o → ue à « yo » : me pruebo (le pronom « me » est obligatoire)." },
        { text: "En la tienda, quiero esta falda. ¿Puedo ___? (probarse + la falda)", blanks: [["probármela", "probarmela"]],
          why: "À l'infinitif, les pronoms se collent à la fin : probar + me + la = probármela (« la » car la falda est féminin). L'accent écrit garde la voix sur BÁR." },
        { text: "Este abrigo es perfecto. Me ___ llevo.", blanks: [["lo"]],
          why: "« el abrigo » est masculin → lo : « Me lo llevo » = je le prends. Pour une chose féminine : me la llevo." },
        { text: "Esta camisa cuesta veinte euros y esa cuesta treinta: esta camisa es ___ barata que esa.", blanks: [["más"]],
          why: "Comparatif de supériorité : más + adjectif + que. Elle coûte moins cher donc elle est « más barata ». « menos barata » serait faux ici." },
        { text: "Estos pantalones son ___ grandes como esos. (aussi grands)", blanks: [["tan"]],
          why: "Égalité : tan + adjectif + como. On n'écrit jamais « tan… que »." },
        { text: "Este abrigo es ___ que ese. (meilleur)", blanks: [["mejor"]],
          why: "« meilleur » = mejor (comparatif irrégulier, contient déjà « plus »). « más mejor » n'existe pas." },
        { text: "___ zapatos que tengo aquí son negros. (proches de moi)", blanks: [["estos"]],
          why: "Pluriel masculin, objet proche de moi → estos. « esos » désigne ce qui est plus loin, près de l'autre personne." },
        { text: "Los pantalones cuestan ___ euros. (300)", blanks: [["trescientos"]],
          why: "300 = trescientos (centaine + s : tres-cientos). Les centaines s'accordent avec le nom : ici « euros » masculin → trescientos." },
        { text: "El probador ___ al lado de la caja. (estar)", blanks: [["está", "esta"]],
          why: "Rappel A1.0 : on situe un lieu avec ESTAR : el probador está… (pas « es »). Accent obligatoire à l'écrit." },
        { text: "¿___ usted esta camisa en otro color? (tener)", blanks: [["tiene"]],
          why: "Rappel A1.0 : tener, usted → forme de él/ella : tiene (e → ie). C'est la forme polie à une vendeuse." }
      ]
    },
    {
      id: "reading", num: "III", title: "Comprensión escrita", titleFr: "Compréhension écrite", points: 15, skill: "ce", type: "mcq",
      instructions: "Lee el texto y elige la respuesta correcta.",
      instructionsFr: "Lis le texte et choisis la bonne réponse.",
      passage: "Hoy es sábado y Clara está en una tienda de ropa con su amiga Eva. Clara quiere un vestido verde y unos zapatos negros. El vestido cuesta sesenta euros, pero es demasiado grande. La dependienta le trae una talla más pequeña. Clara se prueba el vestido y le queda bien.\n\nLos zapatos negros cuestan cien euros. Los zapatos blancos son más baratos: cuestan setenta euros. Clara prefiere los negros, pero son demasiado caros. Al final, se lleva el vestido y los zapatos blancos. Paga con tarjeta.",
      items: [
        { q: "¿Qué compra Clara?", qFr: "Qu'achète Clara ?",
          opts: ["Un vestido y zapatos negros", "Una camisa y zapatos blancos", "Un vestido y zapatos blancos"], correct: 2,
          why: "« se lleva el vestido y los zapatos blancos ». Les chaussures noires sont celles qu'elle préfère, mais elles sont trop chères." },
        { q: "¿Por qué Clara cambia de talla?", qFr: "Pourquoi Clara change-t-elle de taille ?",
          opts: ["Porque el vestido es demasiado grande.", "Porque el vestido es feo.", "Porque el vestido es caro."], correct: 0,
          why: "« es demasiado grande. La dependienta le trae una talla más pequeña » : la robe est trop grande, d'où la taille en dessous." },
        { q: "¿Cuánto cuestan los zapatos blancos?", qFr: "Combien coûtent les chaussures blanches ?",
          opts: ["Cien euros", "Setenta euros", "Sesenta euros"], correct: 1,
          why: "« los zapatos blancos… cuestan setenta euros ». Cent euros = les noires ; soixante = la robe." },
        { q: "¿Qué frase es verdadera?", qFr: "Quelle phrase est vraie ?",
          opts: ["Los zapatos negros son más baratos que los blancos.", "Clara prefiere los zapatos negros, pero son caros.", "Clara paga en efectivo."], correct: 1,
          why: "« Clara prefiere los negros, pero son demasiado caros ». Les blancs sont les moins chers, et elle paie par carte." },
        { q: "¿Quién trae una talla más pequeña?", qFr: "Qui apporte une taille plus petite ?",
          opts: ["Su amiga Eva", "Su madre", "La dependienta"], correct: 2,
          why: "« La dependienta le trae una talla más pequeña ». Eva accompagne seulement Clara." }
      ]
    },
    {
      id: "listening", num: "IV", title: "Comprensión oral", titleFr: "Compréhension orale", points: 15, skill: "co", type: "mcq",
      instructions: "Escucha cada audio (puedes repetirlo) y elige la respuesta correcta.",
      instructionsFr: "Écoute chaque enregistrement (tu peux le réécouter) et choisis la bonne réponse.",
      items: [
        { audio: [{ who: "A", text: "Perdone, ¿cuánto cuesta esta chaqueta?" }, { who: "B", text: "Cuesta ciento veinte euros, señor." }],
          q: "¿Cuánto cuesta la chaqueta?", qFr: "Combien coûte la veste ?",
          opts: ["Doscientos euros", "Ciento veinte euros", "Setenta euros"], correct: 1,
          why: "« ciento veinte euros » = 120 € (cien devient ciento devant un autre nombre). Ne pas confondre avec doscientos (200)." },
        { audio: [{ who: "A", text: "Buenos días. ¿Puedo probármelo?" }, { who: "B", text: "Claro. Los probadores están a la derecha." }],
          q: "¿Dónde están los probadores?", qFr: "Où sont les cabines d'essayage ?",
          opts: ["A la derecha", "A la izquierda", "Enfrente de la caja"], correct: 0,
          why: "« Los probadores están a la derecha » : à droite. La gauche et la caisse ne sont pas mentionnées." },
        { audio: "Me gustan estos zapatos, pero son demasiado caros. Los otros son más baratos y también son bonitos. Me llevo los otros.",
          q: "¿Por qué no compra los primeros zapatos?", qFr: "Pourquoi n'achète-t-il pas les premières chaussures ?",
          opts: ["Son feos.", "Son demasiado pequeños.", "Son demasiado caros."], correct: 2,
          why: "« son demasiado caros » : trop chers. Il les aime (« me gustan »), donc ils ne sont pas laids." },
        { audio: [{ who: "A", text: "¿Qué talla usa usted, señora?" }, { who: "B", text: "Uso la talla treinta y ocho. ¿Lo tiene en otro color?" }],
          q: "¿Qué pide la señora?", qFr: "Que demande la dame ?",
          opts: ["Una talla más grande", "Otro color", "Un descuento"], correct: 1,
          why: "« ¿Lo tiene en otro color? » : elle demande une autre couleur. Sa taille est la 38, elle ne demande pas de changer." },
        { audio: [{ who: "A", text: "¿Cuál prefieres, esta camisa o esa?" }, { who: "B", text: "Prefiero esta. Es más barata y me queda bien. Me la llevo." }],
          q: "¿Por qué elige B la camisa?", qFr: "Pourquoi B choisit-il la chemise ?",
          opts: ["Es más barata y le queda bien.", "Es más grande.", "Es del mismo precio."], correct: 0,
          why: "« Es más barata y me queda bien » : moins chère et elle lui va bien. « Me la llevo » = je la prends." }
      ]
    },
    {
      id: "writing", num: "V", title: "Expresión escrita", titleFr: "Expression écrite", points: 20, skill: "ee", type: "ai-text",
      instructions: "Escribe un texto de 50 a 90 palabras.",
      instructionsFr: "Écris un texte de 50 à 90 mots.",
      prompt: "Estás en una tienda de ropa en España y hablas con el dependiente (usted). Saluda, di qué ropa quieres, pregunta el precio, pide probártela o probártelo, compara dos prendas (más… que, tan… como o mejor) con este / ese, di cuál te llevas con «Me lo llevo» o «Me la llevo» y di cómo pagas.",
      promptFr: "Tu es dans un magasin de vêtements en Espagne et tu parles au vendeur (vouvoiement). Salue, dis quel vêtement tu veux, demande le prix, demande à l'essayer, compare deux vêtements (más… que, tan… como ou mejor) avec este / ese, dis lequel tu prends avec « Me lo llevo » ou « Me la llevo » et dis comment tu paies.",
      minWords: 50, maxWords: 90,
      rubric: "Total 20 points. Task achievement (6 pts, 1 pt each): (a) greeting and what clothes the learner wants; (b) a question about the price (¿Cuánto cuesta / cuestan?); (c) a request to try on (¿Puedo probármelo/la?) or \"me pruebo\"; (d) a comparison of two items; (e) use of este/esta/estos/estas AND ese/esa/esos/esas; (f) the decision (\"Me lo/la llevo\") and the way of payment. Grammar (7 pts): correct probarse forms and glued pronouns (probármelo/probármela/me pruebo) (2 pts); correct comparatives más/menos… que, tan… como, mejor/peor (2 pts); demonstratives agreeing in gender and number (1 pt); lo/la/los/las agreeing with the item in \"me lo/la llevo\" (1 pt); correct numbers (hundreds) or prices (1 pt). Vocabulary (4 pts): clothes, sizes, prices and shop vocabulary from A1.7 (4 = at least 8 relevant words used correctly). Coherence and register (3 pts): logical order, consistent \"usted\" with the shop assistant (¿Puede...? ¿Tiene...?), simple connectors. Do NOT penalise missing accents or missing ¿ ¡ (A1 level), including the written accent of probármelo. Cap Task achievement at 3 if the text is under 35 words. Give the final mark /20 with a short justification per criterion.",
      reference: "Buenos días. Quería una camisa blanca y unos zapatos negros, por favor. ¿Cuánto cuesta esta camisa? Cuesta cuarenta euros. ¿Puedo probármela? Esta camisa es más barata que esa, pero esa es más bonita. Estos zapatos son tan cómodos como esos, pero esos son mejores. Me la llevo y también me llevo estos zapatos. Son ciento veinte euros. ¿Puedo pagar con tarjeta?"
    },
    {
      id: "speaking", num: "VI", title: "Expresión oral", titleFr: "Expression orale", points: 15, skill: "eo", type: "ai-oral",
      instructions: "Pulsa el micrófono y habla unos 40 segundos. Si el micrófono no funciona, escribe lo que dirías.",
      instructionsFr: "Appuie sur le micro et parle environ 40 secondes. Si le micro ne fonctionne pas, écris ce que tu dirais.",
      prompt: "Estás en una tienda con un amigo (tú). Habla de dos prendas: di cuánto cuesta cada una, compara las dos con «más… que» o «tan… como», di cuál prefieres (este / ese) y di si te la pruebas y te la llevas. Termina diciendo cómo pagas.",
      promptFr: "Tu es dans un magasin avec un ami (tutoiement). Parle de deux vêtements : dis combien coûte chacun, compare-les avec « más… que » ou « tan… como », dis lequel tu préfères (este / ese) et si tu l'essaies et le prends. Termine en disant comment tu paies.",
      targetSeconds: 40, minWords: 30,
      rubric: "Total 15 points. Content (5 pts): the learner gives the price of two items (using numbers correctly), compares them, says which one they prefer with este/ese, says they try it on and take it, and says how they pay (1 pt per element). Grammar (5 pts): correct comparatives (más… que, tan… como, mejor), correct demonstratives, correct \"me la/lo pruebo\" or \"me la/lo llevo\" with the right gender; deduct 1 pt per recurring error type. Vocabulary (3 pts): clothes, prices and shop vocabulary from A1.7. Fluency (2 pts): judged from the transcript only (about 40 seconds, roughly 50-90 words, connected sentences); pronunciation cannot be judged finely, so do not penalise recognition quirks. Do not penalise missing accents or punctuation.",
      reference: "Mira, esta falda cuesta cuarenta euros y esa chaqueta cuesta ochenta euros. La falda es más barata que la chaqueta, pero la chaqueta es más bonita. Esta falda es tan elegante como esa. Prefiero esta falda. Me la pruebo ahora. Me queda bien, es perfecta. Me la llevo. Voy a pagar con tarjeta."
    }
  ]
};


// ---- 208.js ----
E[208] = {
  code: "A1.8", level: "A1",
  title: "Examen A1.8 – Moverse por la ciudad",
  titleFr: "Examen A1.8 – Se déplacer en ville",
  objective: "Aprobar A1.8: lugares de la ciudad, situar y dar un camino, estar + gerundio, mandatos de tú y usted.",
  objectiveFr: "Valider A1.8 : lieux de la ville, situer et indiquer un chemin, estar + gérondif, impératifs en tú et usted.",
  sections: [
    {
      id: "vocab", num: "I", title: "Vocabulario", titleFr: "Vocabulaire", points: 15, skill: "vo", type: "fill",
      instructions: "Completa las frases con una palabra de la lista. Hay palabras que sobran.",
      instructionsFr: "Complète les phrases avec un mot de la liste. Certains mots sont en trop.",
      bank: ["biblioteca", "panadería", "correos", "museo", "recto", "lado", "repetir", "esquina", "farmacia", "semáforo", "parada"],
      items: [
        { text: "Quiero leer libros: voy a la ___.", blanks: [["biblioteca"]], points: 2,
          why: "« la biblioteca » = la bibliothèque, le lieu où l'on lit des livres. Mot féminin (la)." },
        { text: "Quiero comprar pan: voy a la ___.", blanks: [["panadería"]], points: 2,
          why: "« la panadería » = la boulangerie, on y achète le pain. Accent écrit sur la « í »." },
        { text: "Para enviar una carta, voy a la oficina de ___.", blanks: [["correos"]], points: 2,
          why: "« la oficina de correos » = le bureau de poste. « correos » est toujours au pluriel." },
        { text: "En el ___ vemos cuadros y esculturas.", blanks: [["museo"]], points: 2,
          why: "« el museo » = le musée : on y voit des tableaux et des sculptures." },
        { text: "Sigue todo ___ por esta calle y no gires.", blanks: [["recto"]], points: 2,
          why: "« todo recto » = tout droit. « Sigue todo recto » = continue tout droit." },
        { text: "La farmacia está al ___ del banco.", blanks: [["lado"]], points: 2,
          why: "« al lado de » = à côté de. La préposition est « al lado de » (al = a + el)." },
        { text: "Perdón, no entiendo. ¿Puede ___, por favor?", blanks: [["repetir"]], points: 2,
          why: "« ¿Puede repetir? » = pouvez-vous répéter ? Après « puede », le verbe reste à l'infinitif." },
        { text: "El banco está en la ___ de esta calle con la avenida.", blanks: [["esquina"]], points: 1,
          why: "« la esquina » = le coin de rue. Le banco está en la esquina = la banque est au coin." }
      ]
    },
    {
      id: "grammar", num: "II", title: "Conjugación y gramática", titleFr: "Conjugaison et grammaire", points: 20, skill: "cj", type: "fill",
      instructions: "Escribe la forma correcta. Mira el verbo entre paréntesis.",
      instructionsFr: "Écris la forme correcte. Regarde le verbe entre parenthèses.",
      items: [
        { text: "Ahora yo ___ la farmacia. (estar + buscar)", blanks: [["estoy buscando"]],
          why: "Action en cours (« ahora ») → estar + gérondif : estoy buscando. Gérondif des verbes en -AR : radical + -ando." },
        { text: "¿Tú ___ en el parque? (estar + comer)", blanks: [["estás comiendo", "estas comiendo"]],
          why: "estar (tú : estás) + gérondif d'un verbe en -ER : comer → comiendo (radical + -iendo)." },
        { text: "Nosotros ___ a la plaza. (estar + llegar)", blanks: [["estamos llegando"]],
          why: "nosotros → estamos + llegando. Le gérondif ne change jamais de forme (pas d'accord)." },
        { text: "Los turistas ___ al autobús. (estar + subir)", blanks: [["están subiendo", "estan subiendo"]],
          why: "ellos → están + subiendo (subir est en -IR : radical + -iendo)." },
        { text: "Señor, ___ recto por esta avenida. (seguir, usted)", blanks: [["siga"]],
          why: "Impératif poli (usted) d'un verbe en -ER/-IR/-AR : forme en -e/-a. seguir → siga (tú : sigue)." },
        { text: "Ana, ___ a la izquierda en el semáforo. (girar, tú)", blanks: [["gira"]],
          why: "Impératif en tú d'un verbe en -AR : terminaison -a → gira (usted : gire)." },
        { text: "Señora, ___ la calle y tome la segunda a la derecha. (cruzar, usted)", blanks: [["cruce"]],
          why: "usted → terminaison -e, et z devient c devant e : cruzar → cruce." },
        { text: "Yo ___ en la próxima parada. (bajarse)", blanks: [["me bajo"]],
          why: "bajarse est pronominal : me bajo, te bajas, se baja… Le pronom « me » se place avant le verbe." },
        { text: "Mi hermano ___ en Sevilla. (vivir)", blanks: [["vive"]],
          why: "Rappel A1.6 : verbe en -IR, él → -e : vive. (Ce n'est pas un gérondif : c'est le présent simple.)" },
        { text: "¿Dónde ___ la biblioteca? (estar)", blanks: [["está", "esta"]],
          why: "Rappel A1.0 : pour situer un lieu on utilise ESTAR : ¿Dónde está…? (jamais « es »). La biblioteca est singulier → está." }
      ]
    },
    {
      id: "reading", num: "III", title: "Comprensión escrita", titleFr: "Compréhension écrite", points: 15, skill: "ce", type: "mcq",
      instructions: "Lee el texto y elige la respuesta correcta.",
      instructionsFr: "Lis le texte et choisis la bonne réponse.",
      passage: "Ana es turista en Valencia y hoy está buscando el museo. No tiene mapa y está un poco perdida. Pregunta a un señor en la calle: «Perdone, ¿está lejos el museo?». El señor está esperando el autobús y le explica el camino: «Primero, siga recto por esta calle. Luego, gire a la derecha en el semáforo. Después, cruce la plaza. Por último, el museo está enfrente del parque».\n\nAna no entiende todo y pregunta: «¿Puede repetir, por favor?». Ahora el señor habla más despacio y Ana escribe las indicaciones. Veinte minutos después, está en el museo.",
      items: [
        { q: "¿Qué busca Ana?", qFr: "Que cherche Ana ?",
          opts: ["La biblioteca", "El museo", "La estación"], correct: 1,
          why: "« hoy está buscando el museo » : elle cherche le musée." },
        { q: "¿Qué hace el señor mientras habla con Ana?", qFr: "Que fait le monsieur pendant qu'il parle avec Ana ?",
          opts: ["Está esperando el autobús.", "Está comiendo en un restaurante.", "Está buscando el museo."], correct: 0,
          why: "« El señor está esperando el autobús » : estar + gérondif = action en cours. C'est Ana qui cherche le musée." },
        { q: "¿Qué debe hacer Ana en el semáforo?", qFr: "Que doit faire Ana au feu ?",
          opts: ["Seguir recto.", "Cruzar la plaza.", "Girar a la derecha."], correct: 2,
          why: "« Luego, gire a la derecha en el semáforo ». Traverser la place vient après (« Después »)." },
        { q: "¿Dónde está el museo?", qFr: "Où est le musée ?",
          opts: ["Al lado del semáforo", "Enfrente del parque", "A la izquierda de la plaza"], correct: 1,
          why: "« Por último, el museo está enfrente del parque » : en face du parc (dernière étape de l'itinéraire)." },
        { q: "¿Por qué Ana pide repetir?", qFr: "Pourquoi Ana demande-t-elle de répéter ?",
          opts: ["Porque no entiende todo.", "Porque tiene un mapa.", "Porque ya está en el museo."], correct: 0,
          why: "« Ana no entiende todo y pregunta: ¿Puede repetir? ». Elle n'a pas de carte (« No tiene mapa »)." }
      ]
    },
    {
      id: "listening", num: "IV", title: "Comprensión oral", titleFr: "Compréhension orale", points: 15, skill: "co", type: "mcq",
      instructions: "Escucha cada audio (puedes repetirlo) y elige la respuesta correcta.",
      instructionsFr: "Écoute chaque enregistrement (tu peux le réécouter) et choisis la bonne réponse.",
      items: [
        { audio: [{ who: "A", text: "Perdona, ¿hay una farmacia cerca de aquí?" }, { who: "B", text: "Sí, está al lado del banco, a cinco minutos a pie." }],
          q: "¿Dónde está la farmacia?", qFr: "Où est la pharmacie ?",
          opts: ["Al lado del banco", "Enfrente del museo", "En la esquina de la plaza"], correct: 0,
          why: "« está al lado del banco » : à côté de la banque, à cinq minutes à pied." },
        { audio: "Perdone, señor, ¿cómo llego a la estación? Estoy perdida y no entiendo el mapa.",
          q: "¿Qué problema tiene la mujer?", qFr: "Quel problème a la femme ?",
          opts: ["Está esperando el metro.", "Está en la estación.", "Está perdida."], correct: 2,
          why: "« Estoy perdida » : elle est perdue (féminin : perdida). Elle demande justement comment aller à la gare." },
        { audio: [{ who: "A", text: "¿Qué estás haciendo, Pablo?" }, { who: "B", text: "Estoy esperando el autobús en la parada. Ya está llegando." }],
          q: "¿Qué hace Pablo?", qFr: "Que fait Pablo ?",
          opts: ["Baja del autobús.", "Espera el autobús.", "Cruza la calle."], correct: 1,
          why: "« Estoy esperando el autobús » : il attend le bus à l'arrêt. Le bus est en train d'arriver (« está llegando »)." },
        { audio: "Primero, siga recto. Luego, gire a la izquierda en el semáforo. Por último, el banco está enfrente de la farmacia.",
          q: "¿Qué debe hacer la persona en el semáforo?", qFr: "Que doit faire la personne au feu ?",
          opts: ["Girar a la derecha.", "Cruzar el puente.", "Girar a la izquierda."], correct: 2,
          why: "« Luego, gire a la izquierda en el semáforo » : tourner à gauche. Il n'y a pas de pont dans l'itinéraire." },
        { audio: [{ who: "A", text: "Perdón, no entiendo. ¿Puede repetir más despacio?" }, { who: "B", text: "Claro, señora. Tome la segunda calle y siga recto hasta la plaza." }],
          q: "¿Qué calle debe tomar la señora?", qFr: "Quelle rue la dame doit-elle prendre ?",
          opts: ["La primera calle", "La segunda calle", "La tercera calle"], correct: 1,
          why: "« Tome la segunda calle » : la deuxième rue (impératif poli de tomar). Ensuite, tout droit jusqu'à la place." }
      ]
    },
    {
      id: "writing", num: "V", title: "Expresión escrita", titleFr: "Expression écrite", points: 20, skill: "ee", type: "ai-text",
      instructions: "Escribe un texto de 50 a 90 palabras.",
      instructionsFr: "Écris un texte de 50 à 90 mots.",
      prompt: "Estás en la plaza de tu ciudad y un turista mayor te pregunta cómo llegar a la estación (usted). Escribe tu respuesta: saluda, di qué estás haciendo ahora (estoy + gerundio), explica el camino con «Primero, Luego, Después, Por último» y mandatos de usted (siga, gire, cruce, tome…), y di dónde está la estación (al lado de, enfrente de…). Termina preguntando si entiende.",
      promptFr: "Tu es sur la place de ta ville et un touriste âgé te demande comment aller à la gare (vouvoiement). Écris ta réponse : salue, dis ce que tu fais en ce moment (estoy + gérondif), explique le chemin avec « Primero, Luego, Después, Por último » et des impératifs de politesse (siga, gire, cruce, tome…), et dis où est la gare (al lado de, enfrente de…). Termine en demandant s'il comprend.",
      minWords: 50, maxWords: 90,
      rubric: "Total 20 points. Task achievement (6 pts, 1 pt each): (a) greeting; (b) what the learner is doing now with estar + gerund; (c) at least three steps of an itinerary; (d) use of the sequence connectors Primero / Luego / Después / Por último (at least three of them); (e) the location of the station using a place expression (al lado de, enfrente de, a la derecha...); (f) a closing question asking whether the tourist understands. Grammar (7 pts): correct estar + gerund (estoy esperando, estoy escribiendo...) with the right form of estar and a gerund ending in -ando/-iendo (2 pts); correct formal imperatives (siga, gire, cruce, tome) (3 pts; -1 per tú-form such as sigue/gira used with the tourist, max -3); correct est(á/oy) vs hay / ser use for location (1 pt); correct use of \"al\" / \"del\" contractions (1 pt). Vocabulary (4 pts): city places and direction vocabulary from A1.8 (4 = at least 8 relevant words used correctly). Coherence and register (3 pts): logical order of steps, consistent \"usted\" register throughout. Do NOT penalise missing accents or missing ¿ ¡ (A1 level), including on está/estás. Cap Task achievement at 3 if the text is under 35 words. Give the final mark /20 with a short justification per criterion.",
      reference: "Buenos días, señor. Ahora estoy esperando a un amigo en la plaza. La estación no está lejos. Primero, siga recto por esta calle. Luego, gire a la derecha en el semáforo. Después, cruce la avenida y tome la segunda calle. Por último, la estación está enfrente del parque, al lado del banco. Está a diez minutos a pie. ¿Entiende, señor?"
    },
    {
      id: "speaking", num: "VI", title: "Expresión oral", titleFr: "Expression orale", points: 15, skill: "eo", type: "ai-oral",
      instructions: "Pulsa el micrófono y habla unos 40 segundos. Si el micrófono no funciona, escribe lo que dirías.",
      instructionsFr: "Appuie sur le micro et parle environ 40 secondes. Si le micro ne fonctionne pas, écris ce que tu dirais.",
      prompt: "Estás perdido/a en una ciudad. Di qué estás haciendo ahora (dos frases con estoy + gerundio). Después pregunta a una señora (usted) dónde está un lugar y pide que repita. Por último, explica a un amigo (tú) cómo llegar a tu casa con «Primero, Luego, Por último».",
      promptFr: "Tu es perdu(e) dans une ville. Dis ce que tu fais en ce moment (deux phrases avec estoy + gérondif). Puis demande à une dame (vouvoiement) où se trouve un lieu et demande-lui de répéter. Enfin, explique à un ami (tutoiement) comment arriver chez toi avec « Primero, Luego, Por último ».",
      targetSeconds: 40, minWords: 30,
      rubric: "Total 15 points. Content (5 pts): two actions in progress with estar + gerund; a polite question to a woman (usted) about the location of a place; a request to repeat; a three-step itinerary for a friend with Primero / Luego / Por último (1 pt per element, 1 pt for overall completeness). Grammar (5 pts): correct estar + gerund; usted forms with the woman (¿Dónde está…? ¿Puede repetir?) and tú imperatives with the friend (sigue, gira, cruza); deduct 1 pt per recurring error type. Vocabulary (3 pts): city places and direction words from A1.8. Fluency (2 pts): judged from the transcript only (about 40 seconds, roughly 50-90 words, connected sentences); pronunciation cannot be judged finely, so do not penalise recognition quirks. Do not penalise missing accents or punctuation.",
      reference: "Estoy buscando la estación y estoy caminando por la calle. Perdone, señora, ¿dónde está el museo? ¿Puede repetir, por favor? Gracias. Para llegar a mi casa, primero sigue recto por la avenida. Luego gira a la derecha en el semáforo y cruza la plaza. Por último, mi casa está enfrente de la farmacia."
    }
  ]
};


// ---- 209.js ----
E[209] = {
  code: "A1.9", level: "A1",
  title: "Examen A1.9 – Viajar",
  titleFr: "Examen A1.9 – Voyager",
  objective: "Aprobar A1.9: billetes, aeropuerto y hotel, ir a + infinitivo, reservar con cortesía.",
  objectiveFr: "Valider A1.9 : billets, aéroport et hôtel, ir a + infinitif, réserver poliment.",
  sections: [
    {
      id: "vocab", num: "I", title: "Vocabulario", titleFr: "Vocabulaire", points: 15, skill: "vo", type: "fill",
      instructions: "Completa las frases con una palabra de la lista. Hay palabras que sobran.",
      instructionsFr: "Complète les phrases avec un mot de la liste. Certains mots sont en trop.",
      bank: ["billete", "vuelo", "facturar", "pasaporte", "habitación", "llave", "desayuno", "retraso", "equipaje", "maleta", "ida"],
      items: [
        { text: "Quería un ___ de ida y vuelta a Sevilla.", blanks: [["billete", "boleto"]], points: 2,
          why: "« un billete » = un billet (Espagne ; « boleto » en Amérique latine). « de ida y vuelta » = aller-retour." },
        { text: "¿A qué hora sale el ___ a Madrid?", blanks: [["vuelo"]], points: 2,
          why: "« el vuelo » = le vol. On demande l'heure de départ : ¿A qué hora sale el vuelo?" },
        { text: "En el aeropuerto, voy a ___ mi maleta en el mostrador.", blanks: [["facturar"]], points: 2,
          why: "« facturar » = enregistrer ses bagages. Après « voy a », le verbe reste à l'infinitif." },
        { text: "Necesito mi ___ para pasar la frontera.", blanks: [["pasaporte"]], points: 2,
          why: "« el pasaporte » = le passeport, document obligatoire pour passer une frontière." },
        { text: "Quería reservar una ___ doble, por favor.", blanks: [["habitación"]], points: 2,
          why: "« una habitación doble » = une chambre double. Mot féminin, accent écrit sur la « ó »." },
        { text: "En recepción: ¿Me da la ___, por favor?", blanks: [["llave"]], points: 2,
          why: "« la llave » = la clé de la chambre. On la demande à la réception." },
        { text: "¿Está incluido el ___ en el precio del hotel?", blanks: [["desayuno"]], points: 2,
          why: "« el desayuno » = le petit-déjeuner. ¿Está incluido el desayuno? est la question habituelle à l'hôtel." },
        { text: "El tren tiene un ___ de veinte minutos: llega tarde.", blanks: [["retraso"]], points: 1,
          why: "« el retraso » = le retard. « Tener un retraso » = avoir du retard." }
      ]
    },
    {
      id: "grammar", num: "II", title: "Conjugación y gramática", titleFr: "Conjugaison et grammaire", points: 20, skill: "cj", type: "fill",
      instructions: "Escribe la forma correcta o la palabra que falta.",
      instructionsFr: "Écris la forme correcte ou le mot qui manque.",
      items: [
        { text: "Yo ___ a viajar este verano. (ir)", blanks: [["voy"]],
          why: "Futur proche : ir (présent) + a + infinitif. yo → voy a viajar." },
        { text: "Tú ___ a llegar pronto. (ir)", blanks: [["vas"]],
          why: "tú → vas : vas a llegar pronto = tu vas arriver bientôt." },
        { text: "Ana ___ a descansar en el hotel. (ir)", blanks: [["va"]],
          why: "ella → va : Ana va a descansar. Seul « ir » change ; le second verbe reste à l'infinitif." },
        { text: "Nosotros ___ a facturar las maletas. (ir)", blanks: [["vamos"]],
          why: "nosotros → vamos : vamos a facturar. (« ¡Vamos a… ! » signifie aussi « allons-y, faisons… ».)" },
        { text: "Ellos ___ a pagar con tarjeta. (ir)", blanks: [["van"]],
          why: "ellos → van : van a pagar. Même forme pour ustedes." },
        { text: "Voy ___ aeropuerto en taxi. (aller à l'aéroport)", blanks: [["al"]],
          why: "ir a + lieu : a + el = al (voy al aeropuerto). Devant un verbe, on garde « a » (voy a viajar), jamais « al »." },
        { text: "Mañana voy ___ reservar un billete.", blanks: [["a"]],
          why: "Le petit « a » est obligatoire : voy a + infinitif. Oublier ce « a » (« voy reservar ») est l'erreur n°1 des francophones." },
        { text: "¿A qué hora ___ el vuelo? (salir)", blanks: [["sale"]],
          why: "él/ella/el vuelo → sale (salir : radical sal- + -e). On place le verbe avant le sujet : ¿A qué hora sale el vuelo?" },
        { text: "Ahora yo ___ la puerta de embarque. (estar + buscar)", blanks: [["estoy buscando"]],
          why: "Rappel A1.8 : action en cours → estar + gérondif : estoy buscando (buscar → buscando)." },
        { text: "Marta ___ un café en la recepción. (beber)", blanks: [["bebe"]],
          why: "Rappel A1.6 : verbe en -ER, ella → -e : bebe." }
      ]
    },
    {
      id: "reading", num: "III", title: "Comprensión escrita", titleFr: "Compréhension écrite", points: 15, skill: "ce", type: "mcq",
      instructions: "Lee el texto y elige la respuesta correcta.",
      instructionsFr: "Lis le texte et choisis la bonne réponse.",
      passage: "Hola, soy Marta y este verano voy a viajar con mi hermano Pablo. Vamos a ir a Sevilla en avión. Primero vamos a facturar las maletas en el aeropuerto y luego vamos a pasar el control de seguridad. Yo voy a comprar los billetes de ida y vuelta.\n\nPablo va a reservar una habitación doble en un hotel pequeño y va a preguntar: «¿Está incluido el desayuno?». Después de llegar, vamos a descansar un poco. ¡Va a ser un viaje estupendo!",
      items: [
        { q: "¿Con quién va a viajar Marta?", qFr: "Avec qui Marta va-t-elle voyager ?",
          opts: ["Con su hermano Pablo", "Con una amiga", "Sola"], correct: 0,
          why: "« voy a viajar con mi hermano Pablo »." },
        { q: "¿Cómo van a viajar a Sevilla?", qFr: "Comment vont-ils voyager jusqu'à Séville ?",
          opts: ["En tren", "En avión", "En autobús"], correct: 1,
          why: "« Vamos a ir a Sevilla en avión » : ils vont y aller en avion." },
        { q: "¿Quién va a comprar los billetes?", qFr: "Qui va acheter les billets ?",
          opts: ["Pablo", "Su hermana", "Marta"], correct: 2,
          why: "« Yo voy a comprar los billetes » : c'est Marta qui parle. Pablo, lui, va réserver l'hôtel." },
        { q: "¿Qué va a preguntar Pablo en el hotel?", qFr: "Que va demander Pablo à l'hôtel ?",
          opts: ["Si el desayuno está incluido", "A qué hora sale el vuelo", "Dónde está la maleta"], correct: 0,
          why: "« va a preguntar: ¿Está incluido el desayuno? » : il va demander si le petit-déjeuner est inclus." },
        { q: "¿Qué van a hacer después de llegar?", qFr: "Que vont-ils faire après leur arrivée ?",
          opts: ["Facturar las maletas", "Visitar un museo", "Descansar un poco"], correct: 2,
          why: "« Después de llegar, vamos a descansar un poco ». Facturer les valises se fait avant le départ, à l'aéroport." }
      ]
    },
    {
      id: "listening", num: "IV", title: "Comprensión oral", titleFr: "Compréhension orale", points: 15, skill: "co", type: "mcq",
      instructions: "Escucha cada audio (puedes repetirlo) y elige la respuesta correcta.",
      instructionsFr: "Écoute chaque enregistrement (tu peux le réécouter) et choisis la bonne réponse.",
      items: [
        { audio: [{ who: "A", text: "Buenas tardes. Quería reservar una habitación doble, por favor." }, { who: "B", text: "Muy bien. ¿Cuántas noches va a estar usted?" }, { who: "A", text: "Dos noches." }],
          q: "¿Qué quiere reservar el cliente?", qFr: "Que veut réserver le client ?",
          opts: ["Una habitación individual", "Una habitación doble", "Un billete de tren"], correct: 1,
          why: "« una habitación doble » : une chambre double (pas individual = simple). Il reste deux nuits." },
        { audio: [{ who: "A", text: "Perdone, ¿a qué hora sale el vuelo a Lima?" }, { who: "B", text: "Sale a las diez de la mañana, señor." }],
          q: "¿Qué quiere saber el hombre?", qFr: "Que veut savoir l'homme ?",
          opts: ["La hora de salida del vuelo", "El precio del billete", "La puerta de embarque"], correct: 0,
          why: "« ¿A qué hora sale el vuelo? » : il demande l'heure de départ du vol, pas le prix ni la porte." },
        { audio: "Mañana voy a viajar a Bogotá. Primero voy a facturar la maleta y después voy a pasar el control de seguridad. ¡Qué nervios!",
          q: "¿Qué va a hacer primero?", qFr: "Que va-t-il / va-t-elle faire en premier ?",
          opts: ["Pasar el control de seguridad", "Comprar el billete", "Facturar la maleta"], correct: 2,
          why: "« Primero voy a facturar la maleta » : d'abord enregistrer la valise. Le contrôle de sécurité vient « después »." },
        { audio: [{ who: "A", text: "¿Está incluido el desayuno?" }, { who: "B", text: "Sí, señor, está incluido. ¿Va a pagar con tarjeta?" }, { who: "A", text: "Sí, voy a pagar con tarjeta." }],
          q: "¿Cómo va a pagar el cliente?", qFr: "Comment le client va-t-il payer ?",
          opts: ["En efectivo", "Con tarjeta", "No va a pagar"], correct: 1,
          why: "« voy a pagar con tarjeta » : par carte. Le petit-déjeuner est inclus, mais la chambre se paie." },
        { audio: [{ who: "A", text: "¿Qué vais a hacer este verano?" }, { who: "B", text: "Vamos a viajar a México en avión." }, { who: "A", text: "¡Qué bien! ¡Buen viaje!" }],
          q: "¿Qué van a hacer en verano?", qFr: "Que vont-ils faire en été ?",
          opts: ["Van a trabajar en México.", "Van a descansar en casa.", "Van a viajar a México."], correct: 2,
          why: "« Vamos a viajar a México en avión » : ils vont voyager au Mexique. « vais » = vous (amis, Espagne)." }
      ]
    },
    {
      id: "writing", num: "V", title: "Expresión escrita", titleFr: "Expression écrite", points: 20, skill: "ee", type: "ai-text",
      instructions: "Escribe un texto de 50 a 90 palabras.",
      instructionsFr: "Écris un texte de 50 à 90 mots.",
      prompt: "Escribe un mensaje a un hotel en España (usted). Di que quieres reservar una habitación (tipo y número de noches) con «Quería reservar…» y pregunta si el desayuno está incluido. Después explica tu viaje con «voy a + infinitivo» o «vamos a + infinitivo»: adónde vas a viajar, cómo, y tres cosas que vas a hacer (por ejemplo: facturar, comprar, descansar).",
      promptFr: "Écris un message à un hôtel en Espagne (vouvoiement). Dis que tu veux réserver une chambre (type et nombre de nuits) avec « Quería reservar… » et demande si le petit-déjeuner est inclus. Puis explique ton voyage avec « voy a + infinitif » ou « vamos a + infinitif » : où tu vas voyager, comment, et trois choses que tu vas faire (par exemple : enregistrer, acheter, te reposer).",
      minWords: 50, maxWords: 90,
      rubric: "Total 20 points. Task achievement (6 pts, 1 pt each): (a) a polite request to book a room with the room type; (b) the number of nights; (c) a question about whether breakfast is included; (d) the destination and means of transport; (e) at least three planned actions expressed with ir a + infinitive; (f) a greeting and a closing line. Grammar (7 pts): correct ir a + infinitive with the right form of ir and the obligatory \"a\" (voy a, vamos a, va a…) (4 pts; -1 per error, max -4, e.g. \"voy viajar\" or \"voy a viajo\"); \"Quería reservar\" or \"Quiero reservar\" used correctly (1 pt); correct \"al\" vs \"a\" (voy al aeropuerto vs voy a viajar) (1 pt); question \"¿Está incluido el desayuno?\" correctly formed (1 pt). Vocabulary (4 pts): travel, airport and hotel words from A1.9 (4 = at least 8 relevant words used correctly). Coherence and register (3 pts): logical order, consistent \"usted\" with the hotel, simple connectors (y, pero, después, primero). Do NOT penalise missing accents or missing ¿ ¡ (A1 level). Cap Task achievement at 3 if the text is under 35 words. Give the final mark /20 with a short justification per criterion.",
      reference: "Buenos días. Quería reservar una habitación doble para tres noches, por favor. ¿Está incluido el desayuno? Este verano voy a viajar a Sevilla con mi hermana. Vamos a tomar el avión en París. Primero vamos a facturar las maletas, luego voy a comprar los billetes y después vamos a descansar en el hotel. Muchas gracias. Un saludo."
    },
    {
      id: "speaking", num: "VI", title: "Expresión oral", titleFr: "Expression orale", points: 15, skill: "eo", type: "ai-oral",
      instructions: "Pulsa el micrófono y habla unos 40 segundos. Si el micrófono no funciona, escribe lo que dirías.",
      instructionsFr: "Appuie sur le micro et parle environ 40 secondes. Si le micro ne fonctionne pas, écris ce que tu dirais.",
      prompt: "Estás en la recepción de un hotel (usted). Saluda, di que quieres reservar una habitación con «Quería…», pregunta si el desayuno está incluido y cómo vas a pagar. Después cuenta a un amigo tus planes de viaje: adónde vas a ir y tres cosas que vas a hacer (voy a… / vamos a…).",
      promptFr: "Tu es à la réception d'un hôtel (vouvoiement). Salue, dis que tu veux réserver une chambre avec « Quería… », demande si le petit-déjeuner est inclus et dis comment tu vas payer. Puis raconte à un ami tes projets de voyage : où tu vas aller et trois choses que tu vas faire (voy a… / vamos a…).",
      targetSeconds: 40, minWords: 30,
      rubric: "Total 15 points. Content (5 pts): polite greeting and room request; question about breakfast; how the learner will pay; destination; three planned actions (1 pt per element). Grammar (5 pts): correct ir a + infinitive (right form of ir, obligatory \"a\", infinitive); correct \"Quería reservar\"; correct question ¿Está incluido el desayuno?; deduct 1 pt per recurring error type. Vocabulary (3 pts): travel, airport and hotel words from A1.9. Fluency (2 pts): judged from the transcript only (about 40 seconds, roughly 50-90 words, connected sentences); pronunciation cannot be judged finely, so do not penalise recognition quirks. Do not penalise missing accents or punctuation.",
      reference: "Buenas tardes. Quería reservar una habitación individual para dos noches, por favor. ¿Está incluido el desayuno? Voy a pagar con tarjeta. Gracias. Este verano voy a viajar a Lima con mi madre. Vamos a tomar el avión, vamos a facturar las maletas y vamos a visitar un museo. ¡Va a ser un viaje muy bonito!"
    }
  ]
};


// ---- 210.js ----
E[210] = {
  code: "A1.10", level: "A1",
  title: "Examen A1.10 – Trabajo y estudios",
  titleFr: "Examen A1.10 – Travail et études",
  objective: "Aprobar A1.10: profesiones, estudios, presente regular -AR / -ER / -IR, empezar, la hora «a las» y el horario.",
  objectiveFr: "Valider A1.10 : métiers, études, présent régulier -AR / -ER / -IR, empezar, l'heure « a las » et l'emploi du temps.",
  sections: [
    {
      id: "vocab", num: "I", title: "Vocabulario", titleFr: "Vocabulaire", points: 15, skill: "vo", type: "fill",
      instructions: "Completa las frases con una palabra de la lista. Hay palabras que sobran.",
      instructionsFr: "Complète les phrases avec un mot de la liste. Certains mots sont en trop.",
      bank: ["profesora", "médico", "oficina", "jefe", "reunión", "horario", "examen", "deberes", "sueldo", "colegio", "estudiante"],
      items: [
        { text: "Mi madre es ___: enseña español en un colegio.", blanks: [["profesora"]], points: 2,
          why: "« la profesora » = la professeure. Elle « enseña » (enseigne) : c'est le métier de professeur(e). Féminin en -a." },
        { text: "El ___ trabaja en un hospital con las enfermeras.", blanks: [["médico"]], points: 2,
          why: "« el médico » = le médecin. Le déterminant « El » demande le masculin (médica au féminin)." },
        { text: "Escribo mis correos en la ___ con mis compañeros.", blanks: [["oficina"]], points: 2,
          why: "« la oficina » = le bureau, le lieu de travail. Mot féminin (la oficina)." },
        { text: "Mi ___ se llama Pedro y dirige el equipo.", blanks: [["jefe"]], points: 2,
          why: "« el jefe / la jefa » = le chef, le patron. « jefe » est une exception : le féminin est « jefa »." },
        { text: "Por la tarde tengo una ___ con mi jefe.", blanks: [["reunión"]], points: 2,
          why: "« la reunión » = la réunion. Accent écrit sur la « ó »." },
        { text: "Mi ___ es de ocho a cinco, de lunes a viernes.", blanks: [["horario"]], points: 2,
          why: "« el horario » = l'horaire, l'emploi du temps. « de ocho a cinco » indique la plage horaire." },
        { text: "Mañana tengo un ___ en la universidad y necesito una buena nota.", blanks: [["examen"]], points: 2,
          why: "« el examen » = l'examen. On passe un examen et on reçoit une nota (une note)." },
        { text: "Por la noche hago los ___ del colegio.", blanks: [["deberes"]], points: 1,
          why: "« los deberes » = les devoirs (toujours au pluriel). On les « hace » (hacer los deberes)." }
      ]
    },
    {
      id: "grammar", num: "II", title: "Conjugación y gramática", titleFr: "Conjugaison et grammaire", points: 20, skill: "cj", type: "fill",
      instructions: "Escribe la forma correcta o la palabra que falta.",
      instructionsFr: "Écris la forme correcte ou le mot qui manque.",
      items: [
        { text: "Yo ___ en una oficina grande. (trabajar)", blanks: [["trabajo"]],
          why: "yo → -o pour les trois familles : trabajar → trabajo." },
        { text: "Ella ___ español en la universidad. (aprender)", blanks: [["aprende"]],
          why: "ella + verbe en -ER → -e : aprende. (Un verbe en -AR donnerait « -a » : trabaja.)" },
        { text: "Vosotros ___ una carta al director. (escribir)", blanks: [["escribís", "escribis"]],
          why: "vosotros + verbe en -IR → -ís (accent écrit) : escribís. En -ER ce serait -éis (coméis)." },
        { text: "Nosotros ___ a trabajar a las nueve. (empezar)", blanks: [["empezamos"]],
          why: "empezar change e → ie, mais PAS à nosotros ni à vosotros : empezamos (comme preferimos)." },
        { text: "Yo ___ a trabajar a las ocho. (empezar)", blanks: [["empiezo"]],
          why: "yo : le radical porte l'accent tonique, donc e → ie : empiezo." },
        { text: "Por la noche yo ___ los deberes. (hacer)", blanks: [["hago"]],
          why: "hacer est irrégulier à « yo » : hago (hacer los deberes = faire les devoirs)." },
        { text: "Marta es ___. (elle est médecin)", blanks: [["médica", "medica"]],
          why: "Un métier en -o fait son féminin en -a : médico → médica. Sans adjectif, on ne met pas d'article (Es médica)." },
        { text: "Trabajo ___ la mañana, de lunes a viernes.", blanks: [["por"]],
          why: "« por la mañana » = le matin (par la tarde, por la noche). Avec une heure précise, on dirait « de la mañana »." },
        { text: "Ahora yo ___ un correo. (estar + escribir)", blanks: [["estoy escribiendo"]],
          why: "Rappel A1.8 : action en cours → estar + gérondif. escribir → escribiendo (radical + -iendo)." },
        { text: "Mañana yo ___ a empezar un trabajo nuevo. (ir)", blanks: [["voy"]],
          why: "Rappel A1.9 : futur proche → ir a + infinitif. yo → voy a empezar." }
      ]
    },
    {
      id: "reading", num: "III", title: "Comprensión escrita", titleFr: "Compréhension écrite", points: 15, skill: "ce", type: "mcq",
      instructions: "Lee el texto y elige la respuesta correcta.",
      instructionsFr: "Lis le texte et choisis la bonne réponse.",
      passage: "Hola, soy Elena y soy ingeniera. Trabajo en una oficina grande, en Madrid, de lunes a viernes. Empiezo a trabajar a las ocho de la mañana y termino a las cinco de la tarde. Por la tarde tengo una reunión con mi jefe. Mis compañeros son muy simpáticos.\n\nMi hermano Pablo es estudiante: estudia en la universidad y aprende mucho, pero hoy tiene un examen difícil. Por la noche, Pablo hace los deberes y yo estoy cansada.",
      items: [
        { q: "¿Cuál es la profesión de Elena?", qFr: "Quelle est la profession d'Elena ?",
          opts: ["Profesora", "Ingeniera", "Médica"], correct: 1,
          why: "« soy ingeniera » : ingénieure. Son frère Pablo est étudiant." },
        { q: "¿A qué hora empieza Elena a trabajar?", qFr: "À quelle heure Elena commence-t-elle à travailler ?",
          opts: ["A las ocho de la mañana", "A las nueve de la mañana", "A las cinco de la tarde"], correct: 0,
          why: "« Empiezo a trabajar a las ocho de la mañana ». Cinq heures de l'après-midi, c'est l'heure à laquelle elle termine." },
        { q: "¿Qué tiene Elena por la tarde?", qFr: "Qu'a Elena l'après-midi ?",
          opts: ["Un examen", "Una clase", "Una reunión con su jefe"], correct: 2,
          why: "« Por la tarde tengo una reunión con mi jefe ». L'examen est celui de Pablo." },
        { q: "¿Qué tiene Pablo hoy?", qFr: "Qu'a Pablo aujourd'hui ?",
          opts: ["Un examen difícil", "Una reunión en la oficina", "Un trabajo nuevo"], correct: 0,
          why: "« hoy tiene un examen difícil ». Pablo est étudiant, il n'a pas de réunion de bureau." },
        { q: "¿Qué hace Pablo por la noche?", qFr: "Que fait Pablo le soir ?",
          opts: ["Estudia en la universidad.", "Hace los deberes.", "Trabaja con su jefe."], correct: 1,
          why: "« Por la noche, Pablo hace los deberes ». Il étudie à l'université pendant la journée, pas le soir." }
      ]
    },
    {
      id: "listening", num: "IV", title: "Comprensión oral", titleFr: "Compréhension orale", points: 15, skill: "co", type: "mcq",
      instructions: "Escucha cada audio (puedes repetirlo) y elige la respuesta correcta.",
      instructionsFr: "Écoute chaque enregistrement (tu peux le réécouter) et choisis la bonne réponse.",
      items: [
        { audio: [{ who: "A", text: "Buenos días, señor. ¿A qué se dedica usted?" }, { who: "B", text: "Soy abogado y trabajo en una oficina del centro." }],
          q: "¿Cuál es la profesión del señor?", qFr: "Quelle est la profession de ce monsieur ?",
          opts: ["Médico", "Abogado", "Profesor"], correct: 1,
          why: "« Soy abogado » : avocat. « ¿A qué se dedica usted? » est la question polie sur le métier." },
        { audio: "Me llamo Laura. Soy enfermera y trabajo en un hospital. Empiezo a las siete de la mañana y termino a las tres de la tarde.",
          q: "¿Dónde trabaja Laura?", qFr: "Où travaille Laura ?",
          opts: ["En una fábrica", "En un colegio", "En un hospital"], correct: 2,
          why: "« trabajo en un hospital » : elle est infirmière (enfermera) à l'hôpital." },
        { audio: [{ who: "A", text: "¿A qué hora empiezas hoy?" }, { who: "B", text: "Empiezo a las nueve, pero tengo una reunión a las diez." }],
          q: "¿A qué hora empieza a trabajar B?", qFr: "À quelle heure B commence-t-il à travailler ?",
          opts: ["A las nueve", "A las diez", "A las ocho"], correct: 0,
          why: "« Empiezo a las nueve ». À dix heures, c'est la réunion, pas le début du travail." },
        { audio: "Soy estudiante. Estudio medicina en la universidad. Por la mañana voy a clase y por la tarde hago los deberes en la biblioteca.",
          q: "¿Qué hace el estudiante por la tarde?", qFr: "Que fait l'étudiant l'après-midi ?",
          opts: ["Va a clase.", "Hace los deberes.", "Trabaja en una tienda."], correct: 1,
          why: "« por la tarde hago los deberes en la biblioteca ». Les cours (« voy a clase ») sont le matin." },
        { audio: [{ who: "A", text: "Perdone, ¿dónde trabaja usted?" }, { who: "B", text: "Trabajo en una tienda de ropa, de lunes a viernes." }],
          q: "¿Qué días trabaja B?", qFr: "Quels jours travaille B ?",
          opts: ["De lunes a viernes", "Los fines de semana", "Todos los días"], correct: 0,
          why: "« de lunes a viernes » : du lundi au vendredi, donc pas le week-end ni tous les jours." }
      ]
    },
    {
      id: "writing", num: "V", title: "Expresión escrita", titleFr: "Expression écrite", points: 20, skill: "ee", type: "ai-text",
      instructions: "Escribe un texto de 50 a 90 palabras.",
      instructionsFr: "Écris un texte de 50 à 90 mots.",
      prompt: "Presenta tu trabajo (o tus estudios) a un compañero nuevo. Di a qué te dedicas, dónde trabajas o estudias, tu horario (de lunes a viernes, a las…, por la mañana / por la tarde) y tres cosas que haces en tu día. Termina con dos preguntas: una a tu compañero (tú) y otra a tu jefe (usted).",
      promptFr: "Présente ton travail (ou tes études) à un nouveau collègue. Dis ce que tu fais dans la vie, où tu travailles ou étudies, ton emploi du temps (de lunes a viernes, a las…, por la mañana / por la tarde) et trois choses que tu fais dans ta journée. Termine par deux questions : une à ton collègue (tutoiement) et une à ton chef (vouvoiement).",
      minWords: 50, maxWords: 90,
      rubric: "Total 20 points. Task achievement (6 pts, 1 pt each): (a) profession or studies; (b) place of work or study; (c) schedule with at least one exact time using \"a las\" / \"a la una\"; (d) parts of the day (por la mañana / tarde / noche) or days (de lunes a viernes); (e) three daily activities; (f) two questions, one in tú and one in usted. Grammar (7 pts): correct present of regular -AR / -ER / -IR verbs (trabajo, aprendes, vive, escribimos...) (3 pts; -1 per wrong ending, max -3); correct empezar (empiezo / empezamos) or hacer (hago) (1 pt); correct gender of the profession (soy ingeniera / ingeniero) (1 pt); questions correctly formed in tú AND usted (¿Dónde trabajas? / ¿A qué hora empieza usted?) (2 pts). Vocabulary (4 pts): work, study and time vocabulary from A1.10 (4 = at least 8 relevant words used correctly). Coherence and register (3 pts): logical order, tú with the colleague and usted with the boss, simple connectors. Do NOT penalise missing accents or missing ¿ ¡ (A1 level). Cap Task achievement at 3 if the text is under 35 words. Give the final mark /20 with a short justification per criterion.",
      reference: "Hola, me llamo Lucía y soy contable. Trabajo en una oficina en Barcelona, de lunes a viernes. Empiezo a trabajar a las ocho de la mañana y termino a las cinco de la tarde. Por la mañana escribo correos y por la tarde ayudo a mis compañeros. También aprendo inglés en clase. Y tú, ¿dónde trabajas? Señor Ruiz, ¿a qué hora empieza usted la reunión?"
    },
    {
      id: "speaking", num: "VI", title: "Expresión oral", titleFr: "Expression orale", points: 15, skill: "eo", type: "ai-oral",
      instructions: "Pulsa el micrófono y habla unos 40 segundos. Si el micrófono no funciona, escribe lo que dirías.",
      instructionsFr: "Appuie sur le micro et parle environ 40 secondes. Si le micro ne fonctionne pas, écris ce que tu dirais.",
      prompt: "Habla de tu día de trabajo o de estudios: a qué te dedicas, dónde trabajas, a qué hora empiezas y terminas, y dos cosas que haces. Después imagina que hablas con un señor mayor (usted): pregúntale a qué se dedica y dónde trabaja.",
      promptFr: "Parle de ta journée de travail ou d'études : ce que tu fais dans la vie, où tu travailles, à quelle heure tu commences et termines, et deux choses que tu fais. Puis imagine que tu parles avec un monsieur âgé (vouvoiement) : demande-lui ce qu'il fait dans la vie et où il travaille.",
      targetSeconds: 40, minWords: 30,
      rubric: "Total 15 points. Content (5 pts): profession or studies; place; start and end times with \"a las\"; two daily activities; two polite questions to the older man (1 pt per element). Grammar (5 pts): correct present of regular -AR / -ER / -IR verbs; correct empezar (empiezo / empezamos) and hacer (hago) if used; correct usted questions (¿A qué se dedica usted? ¿Dónde trabaja usted?); deduct 1 pt per recurring error type. Vocabulary (3 pts): work, study and time vocabulary from A1.10. Fluency (2 pts): judged from the transcript only (about 40 seconds, roughly 50-90 words, connected sentences); pronunciation cannot be judged finely, so do not penalise recognition quirks. Do not penalise missing accents or punctuation.",
      reference: "Soy profesora y trabajo en un colegio en París. Empiezo a trabajar a las ocho de la mañana y termino a las cuatro de la tarde. Por la mañana enseño español y por la tarde preparo las clases. Perdone, señor, ¿a qué se dedica usted? ¿Dónde trabaja usted? Muchas gracias."
    }
  ]
};


// ---- 211.js ----
E[211] = {
  code: "A1.11", level: "A1",
  title: "Examen A1.11 – La hora y el tiempo",
  titleFr: "Examen A1.11 – L'heure et le temps",
  objective: "Aprobar A1.11: el tiempo (hace, está, llueve), la hora con SER, los días, los meses y la fecha.",
  objectiveFr: "Valider A1.11 : la météo (hace, está, llueve), l'heure avec SER, les jours, les mois et la date.",
  sections: [
    {
      id: "vocab", num: "I", title: "Vocabulario", titleFr: "Vocabulaire", points: 15, skill: "vo", type: "fill",
      instructions: "Completa las frases con una palabra de la lista. Hay palabras que sobran.",
      instructionsFr: "Complète les phrases avec un mot de la liste. Certains mots sont en trop.",
      bank: ["calor", "frío", "nublado", "lloviendo", "semana", "mes", "otoño", "mediodía", "viento", "verano", "despejado"],
      items: [
        { text: "En agosto hace mucho ___ en Sevilla: hay 40 grados.", blanks: [["calor"]], points: 2,
          why: "« hace calor » = il fait chaud. 40 degrés = beaucoup de chaleur. Après « hace mucho », on met un nom (mucho calor), jamais « muy »." },
        { text: "En invierno hace ___ y a veces nieva.", blanks: [["frío", "frio"]], points: 2,
          why: "« hace frío » = il fait froid. La neige apparaît quand il fait froid, donc pas « calor »." },
        { text: "Hoy está ___: no hay sol, hay muchas nubes.", blanks: [["nublado"]], points: 2,
          why: "« está nublado » = le ciel est couvert (estar + adjectif). Le contraire, « despejado », signifie dégagé, sans nuages." },
        { text: "Ahora mismo está ___: cae la lluvia.", blanks: [["lloviendo"]], points: 2,
          why: "« está lloviendo » = il pleut en ce moment (estar + gérondif, llover → lloviendo)." },
        { text: "Hoy es lunes: empieza una nueva ___.", blanks: [["semana"]], points: 2,
          why: "« la semana » = la semaine. Elle commence le lundi. Mot féminin." },
        { text: "Octubre es el décimo ___ del año.", blanks: [["mes"]], points: 2,
          why: "« el mes » = le mois. Octubre est le dixième mois : « el décimo mes ». Les mois s'écrivent sans majuscule." },
        { text: "La estación después del verano es el ___.", blanks: [["otoño", "otono"]], points: 1,
          why: "« el otoño » = l'automne, saison après l'été (verano). Attention au « ñ », qui se prononce « gn »." },
        { text: "Son las doce del día: es ___.", blanks: [["mediodía", "mediodia"]], points: 2,
          why: "« es mediodía » = il est midi. Pas d'article « las » : on dit « es mediodía » (comme « es medianoche »)." }
      ]
    },
    {
      id: "grammar", num: "II", title: "Gramática", titleFr: "Grammaire", points: 20, skill: "cj", type: "fill",
      instructions: "Escribe la forma correcta o la palabra que falta.",
      instructionsFr: "Écris la forme correcte ou le mot qui manque.",
      items: [
        { text: "En Valencia ___ calor en agosto. (hacer)", blanks: [["hace"]],
          why: "Météo « famille 1 » : HACER + nom, toujours à la 3e personne du singulier : hace calor." },
        { text: "Hoy ___ nublado. (estar)", blanks: [["está", "esta"]],
          why: "Météo « famille 2 » : ESTAR + adjectif : está nublado, está despejado." },
        { text: "Normalmente en Bilbao ___ mucho. (llover)", blanks: [["llueve"]],
          why: "llover change o → ue (comme preferir) et s'emploie seulement à la 3e personne du singulier : llueve. « Normalmente » = fait habituel, donc présent simple." },
        { text: "En enero ___ en las montañas. (nevar)", blanks: [["nieva"]],
          why: "nevar change e → ie : nieva (= il neige). Même mécanique que llover." },
        { text: "En agosto hace ___ calor en Madrid. (très)", blanks: [["mucho"]],
          why: "Devant un nom (calor, frío, sol, viento), on utilise « mucho » : hace mucho calor. « muy » se met devant un adjectif." },
        { text: "___ las tres y media. (ser)", blanks: [["son", "son las"]],
          why: "L'heure se dit avec SER, pluriel dès deux heures : « Son las tres y media »." },
        { text: "___ la una en punto. (ser)", blanks: [["es", "es la"]],
          why: "Pour une heure, le singulier : « Es la una ». Pour les autres heures : « Son las… »." },
        { text: "Hoy ___ lunes 3 de octubre. (ser)", blanks: [["es"]],
          why: "La date et le jour se disent avec SER : hoy es lunes, hoy es 3 de octubre. (estar n'est pas utilisé ici.)" },
        { text: "Yo ___ a trabajar a las ocho. (empezar)", blanks: [["empiezo"]],
          why: "Rappel A1.10 : empezar change e → ie à « yo » : empiezo (l'accent tonique tombe sur le radical)." },
        { text: "El fin de semana nosotros ___ a viajar a Sevilla. (ir)", blanks: [["vamos"]],
          why: "Rappel A1.9 : futur proche → ir a + infinitif. nosotros → vamos a viajar." }
      ]
    },
    {
      id: "reading", num: "III", title: "Comprensión escrita", titleFr: "Compréhension écrite", points: 15, skill: "ce", type: "mcq",
      instructions: "Lee el texto y elige la respuesta correcta.",
      instructionsFr: "Lis le texte et choisis la bonne réponse.",
      passage: "Son las siete y media de la mañana y hace frío en Madrid. Hoy está nublado y está lloviendo. Lucía trabaja de lunes a viernes y empieza a las nueve en punto. Por la tarde, a las cinco y cuarto, termina. Hoy es jueves 1 de octubre.\n\nEn otoño llueve mucho en Madrid, pero en verano hace mucho calor. Mañana hace buen tiempo: hace sol y hace veinte grados. El fin de semana Lucía y su hermano van a viajar a Sevilla, donde hace treinta grados.",
      items: [
        { q: "¿Qué tiempo hace hoy en Madrid?", qFr: "Quel temps fait-il aujourd'hui à Madrid ?",
          opts: ["Hace sol y calor.", "Hace frío y está lloviendo.", "Hace viento y nieva."], correct: 1,
          why: "« hace frío en Madrid. Hoy está nublado y está lloviendo ». Le soleil est annoncé seulement pour demain." },
        { q: "¿A qué hora empieza Lucía a trabajar?", qFr: "À quelle heure Lucía commence-t-elle à travailler ?",
          opts: ["A las siete y media", "A las cinco y cuarto", "A las nueve en punto"], correct: 2,
          why: "« empieza a las nueve en punto » : à neuf heures pile. 7 h 30 est l'heure actuelle ; 5 h 15 est l'heure de fin." },
        { q: "¿Qué día es hoy?", qFr: "Quel jour sommes-nous ?",
          opts: ["Jueves, 1 de octubre", "Lunes, 1 de octubre", "Jueves, 1 de noviembre"], correct: 0,
          why: "« Hoy es jueves 1 de octubre ». Lucía travaille du lundi au vendredi, mais aujourd'hui c'est jeudi." },
        { q: "¿Qué tiempo hace mañana en Madrid?", qFr: "Quel temps fait-il demain à Madrid ?",
          opts: ["Hace treinta grados.", "Hace sol y veinte grados.", "Está nublado."], correct: 1,
          why: "« Mañana hace buen tiempo: hace sol y hace veinte grados ». Trente degrés, c'est à Séville le week-end." },
        { q: "¿Adónde van el fin de semana?", qFr: "Où vont-ils ce week-end ?",
          opts: ["A Madrid", "A Bilbao", "A Sevilla"], correct: 2,
          why: "« El fin de semana Lucía y su hermano van a viajar a Sevilla » : ils vont à Séville." }
      ]
    },
    {
      id: "listening", num: "IV", title: "Comprensión oral", titleFr: "Compréhension orale", points: 15, skill: "co", type: "mcq",
      instructions: "Escucha cada audio (puedes repetirlo) y elige la respuesta correcta.",
      instructionsFr: "Écoute chaque enregistrement (tu peux le réécouter) et choisis la bonne réponse.",
      items: [
        { audio: [{ who: "A", text: "Buenos días. ¿Qué tiempo hace hoy en Madrid?" }, { who: "B", text: "Hace mucho frío y está nublado." }],
          q: "¿Qué tiempo hace en Madrid?", qFr: "Quel temps fait-il à Madrid ?",
          opts: ["Hace calor y sol.", "Hace mucho frío.", "Hace viento."], correct: 1,
          why: "« Hace mucho frío y está nublado » : très froid et ciel couvert. Pas de soleil ni de vent." },
        { audio: [{ who: "A", text: "Perdone, señora, ¿tiene hora?" }, { who: "B", text: "Sí, claro. Son las cuatro y media." }],
          q: "¿Qué hora es?", qFr: "Quelle heure est-il ?",
          opts: ["Las cuatro y media", "Las cinco y media", "Las cuatro y cuarto"], correct: 0,
          why: "« Son las cuatro y media » = 4 h 30. « y media » = et demie ; « y cuarto » = et quart (4 h 15)." },
        { audio: "Hoy está lloviendo y hace mucho viento. Es un día de mal tiempo.",
          q: "¿Qué tiempo hace fuera?", qFr: "Quel temps fait-il dehors ?",
          opts: ["Hace sol y calor.", "Está nevando.", "Llueve y hace viento."], correct: 2,
          why: "« está lloviendo y hace mucho viento » : il pleut et il y a du vent. « mal tiempo » = mauvais temps." },
        { audio: [{ who: "A", text: "¿Qué día es hoy?" }, { who: "B", text: "Hoy es martes 12 de noviembre." }],
          q: "¿Cuál es la fecha?", qFr: "Quelle est la date ?",
          opts: ["Miércoles, 12 de noviembre", "Martes, 12 de noviembre", "Martes, 11 de octubre"], correct: 1,
          why: "« martes 12 de noviembre » : mardi 12 novembre. Attention au jour (martes ≠ miércoles) et au mois (noviembre ≠ octubre)." },
        { audio: [{ who: "A", text: "Perdona, ¿a qué hora empieza la reunión?" }, { who: "B", text: "A las nueve menos cuarto." }],
          q: "¿A qué hora empieza la reunión?", qFr: "À quelle heure commence la réunion ?",
          opts: ["8:15", "9:15", "8:45"], correct: 2,
          why: "« las nueve menos cuarto » = neuf heures moins le quart = 8 h 45. « y cuarto » aurait donné 9 h 15." }
      ]
    },
    {
      id: "writing", num: "V", title: "Expresión escrita", titleFr: "Expression écrite", points: 20, skill: "ee", type: "ai-text",
      instructions: "Escribe un texto de 50 a 90 palabras.",
      instructionsFr: "Écris un texte de 50 à 90 mots.",
      prompt: "Escribe un mensaje a un amigo español. Di qué día es hoy (con la fecha completa), qué tiempo hace ahora (usa «hace», «está» y «llueve» o «nieva»), qué hora es y a qué hora empiezas mañana. Después habla de tu estación favorita: cuál es, qué tiempo hace y qué meses son.",
      promptFr: "Écris un message à un ami espagnol. Dis quel jour on est (avec la date complète), quel temps il fait maintenant (utilise « hace », « está » et « llueve » ou « nieva »), quelle heure il est et à quelle heure tu commences demain. Puis parle de ta saison préférée : laquelle, quel temps il fait et quels mois elle comprend.",
      minWords: 50, maxWords: 90,
      rubric: "Total 20 points. Task achievement (6 pts, 1 pt each): (a) today's day and full date (weekday + number + month); (b) the current weather; (c) the current time; (d) the time when the learner starts tomorrow; (e) the favourite season and its months; (f) the weather in that season. Grammar (7 pts): correct weather structures: hace + noun (hace frío / mucho calor), está + adjective or gerund (está nublado / está lloviendo), llueve / nieva, never \"hace lluvia\" or \"es frío\" (3 pts, -1 per error type); correct time with SER (es la una / son las tres y media, menos cuarto...) (2 pts); correct date with SER (hoy es lunes 3 de octubre) and months/days without capitals is NOT penalised (1 pt for correct use of es); correct a las + hour for \"at what time\" (1 pt). Vocabulary (4 pts): weather, time, days, months and seasons from A1.11 (4 = at least 8 relevant words used correctly). Coherence and register (3 pts): logical order, simple connectors (y, pero, porque), informal tú consistent with a friend. Do NOT penalise missing accents or missing ¿ ¡ (A1 level) and do not penalise capital letters on days and months. Cap Task achievement at 3 if the text is under 35 words. Give the final mark /20 with a short justification per criterion.",
      reference: "¡Hola, Pablo! Hoy es jueves 15 de octubre. Ahora son las siete y media de la tarde y está lloviendo. Hace frío y hace mucho viento. Mañana empiezo a trabajar a las ocho de la mañana. Mi estación favorita es la primavera, porque hace buen tiempo y hace sol. Los meses de primavera son marzo, abril y mayo. En verano hace mucho calor, pero en invierno nieva. Un abrazo."
    },
    {
      id: "speaking", num: "VI", title: "Expresión oral", titleFr: "Expression orale", points: 15, skill: "eo", type: "ai-oral",
      instructions: "Pulsa el micrófono y habla unos 40 segundos. Si el micrófono no funciona, escribe lo que dirías.",
      instructionsFr: "Appuie sur le micro et parle environ 40 secondes. Si le micro ne fonctionne pas, écris ce que tu dirais.",
      prompt: "Pregunta la hora a una señora (usted) y da tú la hora de otro reloj («Son las…»). Después di qué día es hoy con la fecha, qué tiempo hace en tu ciudad y qué tiempo va a hacer el fin de semana. Termina diciendo tu mes favorito y por qué.",
      promptFr: "Demande l'heure à une dame (vouvoiement) et donne toi-même l'heure d'une autre montre (« Son las… »). Puis dis quel jour on est avec la date, quel temps il fait dans ta ville et quel temps il va faire ce week-end. Termine en disant ton mois préféré et pourquoi.",
      targetSeconds: 40, minWords: 30,
      rubric: "Total 15 points. Content (5 pts): a polite question about the time with usted (¿Tiene hora, por favor? / ¿Qué hora es?); a time given with SER; today's day and date; the weather now and a plan for the weekend; favourite month with a reason (1 pt per element). Grammar (5 pts): correct SER for time and date (es la una / son las…, hoy es…); correct weather forms (hace + noun, está + adjective, llueve/nieva); correct usted question; deduct 1 pt per recurring error type. Vocabulary (3 pts): weather, time, days and months from A1.11. Fluency (2 pts): judged from the transcript only (about 40 seconds, roughly 50-90 words, connected sentences); pronunciation cannot be judged finely, so do not penalise recognition quirks. Do not penalise missing accents or punctuation.",
      reference: "Perdone, señora, ¿tiene hora, por favor? Gracias. En mi reloj son las tres y cuarto. Hoy es miércoles 7 de octubre. En mi ciudad hace frío y está nublado. El fin de semana va a hacer buen tiempo: va a hacer sol. Mi mes favorito es julio, porque hace calor y hay vacaciones."
    }
  ]
};


// ---- 212.js ----
E[212] = {
  code: "A1.12", level: "A1",
  title: "Examen A1.12 – Español social (balance A1)",
  titleFr: "Examen A1.12 – Espagnol social (bilan A1)",
  objective: "Aprobar A1.12 y cerrar el nivel A1: saludar, dar las gracias, pedir perdón, hacer preguntas, tú o usted y repaso de los verbos de A1.",
  objectiveFr: "Valider A1.12 et clore le niveau A1 : saluer, remercier, s'excuser, poser des questions, tú ou usted, et révision des verbes de A1.",
  sections: [
    {
      id: "vocab", num: "I", title: "Vocabulario", titleFr: "Vocabulaire", points: 15, skill: "vo", type: "fill",
      instructions: "Completa las frases con una palabra de la lista. Hay palabras que sobran.",
      instructionsFr: "Complète les phrases avec un mot de la liste. Certains mots sont en trop.",
      bank: ["nada", "igualmente", "dónde", "cuántos", "cuándo", "así que", "porque", "pero", "quién", "cómo", "perdón"],
      items: [
        { text: "—Muchas gracias. —De ___.", blanks: [["nada"]], points: 2,
          why: "« De nada » = de rien : c'est la réponse à « gracias »." },
        { text: "—Que tengas un buen día. —___.", blanks: [["igualmente"]], points: 2,
          why: "« Igualmente » = de même, à toi aussi. On répond ainsi à un souhait (« Que tengas un buen día »)." },
        { text: "¿___ está la estación? — Al lado de la plaza.", blanks: [["dónde", "donde"]], points: 2,
          why: "« ¿Dónde…? » = où ? La réponse donne un lieu (« al lado de la plaza »). Les mots interrogatifs portent toujours un accent." },
        { text: "¿___ años tienes? — Tengo veinte.", blanks: [["cuántos", "cuantos"]], points: 2,
          why: "« ¿Cuántos años tienes? » = quel âge as-tu ? « cuántos » s'accorde avec « años » (masculin pluriel)." },
        { text: "¿___ es la fiesta? — El sábado.", blanks: [["cuándo", "cuando"]], points: 2,
          why: "« ¿Cuándo…? » = quand ? La réponse est un jour (el sábado)." },
        { text: "Tengo sueño, ___ voy a dormir.", blanks: [["así que", "asi que"]], points: 2,
          why: "« así que » = donc, alors : il introduit la conséquence (j'ai sommeil → je vais dormir). « porque » donnerait la cause." },
        { text: "No voy al cine ___ estoy cansado.", blanks: [["porque"]], points: 2,
          why: "« porque » = parce que : il donne la cause (je suis fatigué). Écrit en un mot, sans accent (≠ « ¿por qué? » = pourquoi ?)." },
        { text: "Mi coche es pequeño, ___ muy rápido.", blanks: [["pero"]], points: 1,
          why: "« pero » = mais : il oppose deux idées (petit / rapide)." }
      ]
    },
    {
      id: "grammar", num: "II", title: "Conjugación y gramática (todo A1)", titleFr: "Conjugaison et grammaire (tout A1)", points: 20, skill: "cj", type: "fill",
      instructions: "Escribe la forma correcta o la palabra que falta.",
      instructionsFr: "Écris la forme correcte ou le mot qui manque.",
      items: [
        { text: "Yo ___ de Madrid, pero ahora estoy en Lyon. (ser)", blanks: [["soy"]],
          why: "SER pour l'origine : soy de Madrid. ESTAR pour le lieu du moment : estoy en Lyon." },
        { text: "¿Adónde ___ tú? — Voy al cine. (ir)", blanks: [["vas"]],
          why: "ir, tú → vas. « ¿Adónde vas? » = où vas-tu ? (direction)." },
        { text: "Mi hermana ___ veinte años. (tener)", blanks: [["tiene"]],
          why: "En espagnol, l'âge se dit avec TENER : tiene veinte años (jamais « es »). ella → tiene (e → ie)." },
        { text: "Nosotros ___ pescado los viernes. (comer)", blanks: [["comemos"]],
          why: "Verbe en -ER, nosotros → -emos : comemos." },
        { text: "Ahora ellos ___ el autobús. (estar + esperar)", blanks: [["están esperando", "estan esperando"]],
          why: "Action en cours → estar + gérondif : están esperando (esperar → esperando, radical + -ando)." },
        { text: "Mañana yo ___ a viajar a Sevilla. (ir)", blanks: [["voy"]],
          why: "Futur proche : ir a + infinitif. yo → voy a viajar." },
        { text: "¿Cómo ___ usted, señora Ruiz? (estar)", blanks: [["está", "esta"]],
          why: "Pour demander des nouvelles : ESTAR. usted se conjugue comme él/ella → está (¿Cómo está usted?)." },
        { text: "Me ___ las verduras. (gustar)", blanks: [["gustan"]],
          why: "gustar s'accorde avec ce qu'on aime : « las verduras » est pluriel → me gustan." },
        { text: "Hoy ___ frío en París. (hacer)", blanks: [["hace"]],
          why: "La météo avec un nom : HACER à la 3e personne du singulier : hace frío." },
        { text: "Señor, ___ recto y gire a la derecha. (seguir, usted)", blanks: [["siga"]],
          why: "Impératif poli (usted) : seguir → siga (tú : sigue). Le deuxième verbe « gire » est aussi en usted." }
      ]
    },
    {
      id: "reading", num: "III", title: "Comprensión escrita", titleFr: "Compréhension écrite", points: 15, skill: "ce", type: "mcq",
      instructions: "Lee el texto y elige la respuesta correcta.",
      instructionsFr: "Lis le texte et choisis la bonne réponse.",
      passage: "Hoy es sábado y hace buen tiempo. Pablo está en la calle con su amiga María. Se saludan: «¡Hola, María! ¡Cuánto tiempo sin verte! ¿Qué tal todo?». María responde que todo va muy bien.\n\nPablo tiene una pregunta: «Perdona, ¿puedes ayudarme? ¿Dónde está la estación? Hoy voy a Madrid». María explica: «Está al lado de la plaza, a la derecha». Pablo le da las gracias y dice: «Que tengas un buen día». María contesta: «Igualmente. ¡Hasta pronto!».",
      items: [
        { q: "¿Qué tiempo hace hoy?", qFr: "Quel temps fait-il aujourd'hui ?",
          opts: ["Hace mal tiempo.", "Hace buen tiempo.", "Está lloviendo."], correct: 1,
          why: "« Hoy es sábado y hace buen tiempo » : il fait beau." },
        { q: "¿Qué busca Pablo?", qFr: "Que cherche Pablo ?",
          opts: ["La estación", "La plaza", "Un taxi"], correct: 0,
          why: "« ¿Dónde está la estación? » : il cherche la gare. La place sert seulement à la situer." },
        { q: "¿Dónde está la estación?", qFr: "Où est la gare ?",
          opts: ["A la izquierda de la plaza", "Enfrente del parque", "Al lado de la plaza"], correct: 2,
          why: "« Está al lado de la plaza, a la derecha » : à côté de la place (et à droite, pas à gauche)." },
        { q: "¿Adónde va Pablo hoy?", qFr: "Où va Pablo aujourd'hui ?",
          opts: ["A Sevilla", "A Valencia", "A Madrid"], correct: 2,
          why: "« Hoy voy a Madrid » : ir a + lieu. Il va à Madrid en train." },
        { q: "¿Cómo se ve que Pablo y María se tutean?", qFr: "Comment voit-on que Pablo et María se tutoient ?",
          opts: ["Dicen «Perdona» y «Que tengas un buen día».", "Dicen «señor» y «señora».", "Usan la forma «usted»."], correct: 0,
          why: "« Perdona », « puedes » et « Que tengas » sont des formes de tú. « Perdone » ou « Que tenga » seraient des formes de usted." }
      ]
    },
    {
      id: "listening", num: "IV", title: "Comprensión oral", titleFr: "Compréhension orale", points: 15, skill: "co", type: "mcq",
      instructions: "Escucha cada audio (puedes repetirlo) y elige la respuesta correcta.",
      instructionsFr: "Écoute chaque enregistrement (tu peux le réécouter) et choisis la bonne réponse.",
      items: [
        { audio: [{ who: "A", text: "¡Hola, Luis! ¡Cuánto tiempo sin verte! ¿Qué tal todo?" }, { who: "B", text: "¡Hola, Ana! Todo muy bien, gracias. ¿Y tú?" }],
          q: "¿Qué pasa en esta conversación?", qFr: "Que se passe-t-il dans cette conversation ?",
          opts: ["Dos amigos se encuentran después de mucho tiempo.", "Dos desconocidos hablan en el trabajo.", "Una clienta pide la cuenta."], correct: 0,
          why: "« ¡Cuánto tiempo sin verte! » = ça fait longtemps ! Ils se tutoient (« tú », « verte ») : ce sont deux amis." },
        { audio: [{ who: "A", text: "Perdone, ¿podría ayudarme, por favor? No encuentro la estación." }, { who: "B", text: "Claro, señor. Está al lado de la plaza." }],
          q: "¿Cómo es la petición «¿Podría ayudarme?»?", qFr: "Comment est la demande « ¿Podría ayudarme? » ?",
          opts: ["Informal, para un amigo", "Muy educada", "Una despedida"], correct: 1,
          why: "« ¿Podría ayudarme? » est la forme la plus polie pour demander un service à un inconnu (avec « Perdone » et « por favor »)." },
        { audio: "Tengo hambre, así que voy a comer en el restaurante. Hoy es martes y hace frío.",
          q: "¿Por qué va a comer la persona?", qFr: "Pourquoi la personne va-t-elle manger ?",
          opts: ["Porque tiene sed.", "Porque tiene sueño.", "Porque tiene hambre."], correct: 2,
          why: "« Tengo hambre, así que voy a comer » : elle a faim, donc elle va manger. « así que » introduit la conséquence." },
        { audio: [{ who: "A", text: "¿Dónde vives, Marta?" }, { who: "B", text: "Vivo en Valencia, pero ahora estoy en Madrid. Voy a trabajar aquí tres semanas." }],
          q: "¿Dónde está Marta ahora?", qFr: "Où est Marta en ce moment ?",
          opts: ["En Valencia", "En Madrid", "En Sevilla"], correct: 1,
          why: "« ahora estoy en Madrid » : estar = lieu du moment. Elle habite (vive) à Valence mais elle est à Madrid pour trois semaines." },
        { audio: [{ who: "A", text: "Muchas gracias por su ayuda, señora." }, { who: "B", text: "De nada. Que tenga un buen día." }],
          q: "¿Qué registro usan?", qFr: "Quel registre utilisent-ils ?",
          opts: ["Informal (tú)", "Mezcla de tú y vosotros", "Formal (usted)"], correct: 2,
          why: "« por su ayuda », « señora » et « Que tenga » sont des formes de usted. Avec tú on dirait « por tu ayuda » et « Que tengas »." }
      ]
    },
    {
      id: "writing", num: "V", title: "Expresión escrita", titleFr: "Expression écrite", points: 20, skill: "ee", type: "ai-text",
      instructions: "Escribe un texto de 60 a 100 palabras.",
      instructionsFr: "Écris un texte de 60 à 100 mots.",
      prompt: "Escribe un correo a tu futura familia de acogida en España (usted: «Señora García»). Saluda, preséntate (nombre, edad, de dónde eres, dónde vives, a qué te dedicas), di cómo vas a viajar y cuándo llegas (voy a…), explica qué tiempo hace en tu ciudad y haz dos preguntas con «¿Cómo…?», «¿Dónde…?» o «¿Cuándo…?». Da las gracias y despídete con una fórmula educada.",
      promptFr: "Écris un e-mail à ta future famille d'accueil en Espagne (vouvoiement : « Señora García »). Salue, présente-toi (nom, âge, origine, lieu de vie, profession), dis comment tu vas voyager et quand tu arrives (voy a…), explique quel temps il fait dans ta ville et pose deux questions avec « ¿Cómo…? », « ¿Dónde…? » ou « ¿Cuándo…? ». Remercie et termine par une formule polie.",
      minWords: 60, maxWords: 100,
      rubric: "Total 20 points. Task achievement (6 pts, 1 pt each): (a) polite greeting to Señora García; (b) self-introduction with at least four items (name, age, origin, residence, job); (c) how and when the learner arrives, using ir a + infinitive; (d) the weather in the learner's city; (e) two questions with interrogative words (¿Cómo…? ¿Dónde…? ¿Cuándo…? ¿Qué…?); (f) thanks and a polite closing formula (Muchas gracias, Un saludo, Hasta pronto...). Grammar (7 pts): correct SER / ESTAR / TENER (soy de…, vivo en…, tengo veinte años — age with TENER, never SER) (3 pts, -1 per error type); correct ir a + infinitive with the obligatory \"a\" (1 pt); correct present of regular verbs (vivo, trabajo, escribo...) (1 pt); correct weather expression (hace frío, está nublado, llueve) (1 pt); correct questions with accented interrogative words (1 pt). Vocabulary (4 pts): range of A1 vocabulary (family, work, travel, weather, social formulas); 4 = at least 8 relevant words used correctly. Coherence and register (3 pts): logical order, consistent \"usted\" with the host (¿Cómo está usted? ¿Podría…?), simple connectors (y, pero, porque, así que). Do NOT penalise missing accents or missing ¿ ¡ (A1 level). Cap Task achievement at 3 if the text is under 40 words. Give the final mark /20 with a short justification per criterion.",
      reference: "Estimada señora García: Buenos días. Me llamo Sofía, tengo veinticinco años y soy de Lyon, pero vivo en París. Soy enfermera y trabajo en un hospital. Voy a viajar en avión y voy a llegar a Madrid el sábado. En mi ciudad hace frío y está nublado, pero estoy muy contenta. ¿Cómo está usted? ¿Dónde está la estación de su pueblo? Muchas gracias por su ayuda. Un saludo."
    },
    {
      id: "speaking", num: "VI", title: "Expresión oral", titleFr: "Expression orale", points: 15, skill: "eo", type: "ai-oral",
      instructions: "Pulsa el micrófono y habla unos 45 segundos. Si el micrófono no funciona, escribe lo que dirías.",
      instructionsFr: "Appuie sur le micro et parle environ 45 secondes. Si le micro ne fonctionne pas, écris ce que tu dirais.",
      prompt: "Encuentras a un amigo español en la calle (tú). Saluda, pregunta cómo está, preséntate en dos frases (de dónde eres, a qué te dedicas) y haz tres preguntas con palabras interrogativas (¿Dónde…? ¿Cuándo…? ¿Qué…?). Después pide ayuda a un desconocido (usted) con «Perdone, ¿podría…?», da las gracias y despídete.",
      promptFr: "Tu rencontres un ami espagnol dans la rue (tutoiement). Salue-le, demande-lui comment il va, présente-toi en deux phrases (origine, profession) et pose trois questions avec des mots interrogatifs (¿Dónde…? ¿Cuándo…? ¿Qué…?). Puis demande de l'aide à un inconnu (vouvoiement) avec « Perdone, ¿podría…? », remercie et dis au revoir.",
      targetSeconds: 45, minWords: 30,
      rubric: "Total 15 points. Content (5 pts): greeting and question about how the friend is; two-sentence self-introduction; three questions with interrogative words; a polite request to a stranger with usted; thanks and goodbye (1 pt per element). Grammar (5 pts): correct tú questions (¿Cómo estás? ¿Dónde vives?) and usted request (Perdone, ¿podría ayudarme?); correct SER / ESTAR / TENER and regular present; deduct 1 pt per recurring error type, and 1 pt if tú and usted are mixed with the same person. Vocabulary (3 pts): social formulas and interrogative words from A1.12. Fluency (2 pts): judged from the transcript only (about 45 seconds, roughly 55-100 words, connected sentences); pronunciation cannot be judged finely, so do not penalise recognition quirks. Do not penalise missing accents or punctuation.",
      reference: "¡Hola, Carlos! ¡Cuánto tiempo sin verte! ¿Qué tal todo? Yo estoy muy bien. Soy de Lyon y trabajo en una oficina. ¿Dónde vives ahora? ¿Cuándo vas a viajar? ¿Qué haces este fin de semana? Perdone, señora, ¿podría ayudarme, por favor? No encuentro la estación. Muchas gracias. Que tenga un buen día. ¡Hasta pronto!"
    }
  ]
};


// ---- 213.js ----
E[213] = {
  code: "A2.1", level: "A2",
  title: "Examen A2.1 – Ayer, la semana pasada: contar en pasado",
  titleFr: "Examen A2.1 – Hier, la semaine dernière : raconter au passé",
  objective: "Aprobar el nivel A2.1: marcadores de tiempo, pretérito indefinido regular (-ar, -er, -ir) y ortografía de «yo» (llegué, busqué, empecé).",
  objectiveFr: "Valider le niveau A2.1 : marqueurs de temps, passé simple (indefinido) régulier en -ar, -er, -ir et orthographe de « yo » (llegué, busqué, empecé).",
  sections: [
    {
      id: "vocab", num: "I", title: "Vocabulario", titleFr: "Vocabulaire",
      points: 15, skill: "vo", type: "fill",
      instructions: "Completa cada frase con una palabra o expresión de la lista. Hay palabras que no necesitas.",
      instructionsFr: "Complète chaque phrase avec un mot ou une expression de la liste. Certains mots ne servent pas.",
      bank: ["hace", "anteayer", "anoche", "semana", "luego", "por fin", "al final", "regalo", "mañana", "cena", "museo"],
      items: [
        { text: "Estoy en Madrid desde el lunes. Llegué ___ dos días, porque hoy es miércoles.",
          blanks: [["hace"]],
          why: "« hace » + durée = il y a : « Llegué hace dos días » = je suis arrivé il y a deux jours. Le verbe reste au passé." },
        { text: "Hoy es miércoles. El lunes visité a mi tía: la visité ___.",
          blanks: [["anteayer"]],
          why: "Lundi quand on est mercredi = avant-hier = « anteayer ». « Mañana » (demain) est l'intrus : il désigne le futur." },
        { text: "Son las nueve de la mañana. A las once de la noche vi una película: la vi ___.",
          blanks: [["anoche"]],
          why: "« anoche » = hier soir / la nuit dernière. « Cena » est un nom (le dîner), pas un adverbe de temps." },
        { text: "La ___ pasada viajé a Sevilla; ahora estoy en casa.",
          blanks: [["semana"]],
          why: "« la semana pasada » = la semaine dernière. « pasada » est féminin pour s'accorder avec « semana »." },
        { text: "Primero abrí la puerta y ___ salí de casa.",
          blanks: [["luego", "después", "entonces"]],
          why: "« luego » (ou « después ») enchaîne deux actions successives dans un récit : d'abord… puis…" },
        { text: "Esperé el tren una hora y ___ llegó.",
          blanks: [["por fin"]],
          why: "« por fin » = enfin, après une longue attente. « al final » = finalement (à la fin d'un récit), moins naturel ici." },
        { text: "Quería comprar un libro, pero ___ no compré nada.",
          blanks: [["al final"]],
          why: "« al final » = finalement, à la fin d'une suite d'événements. « por fin » exprime le soulagement après l'attente, ce qui ne convient pas à « no compré nada »." },
        { text: "Para el cumpleaños de mi madre compré un ___ muy bonito: un libro.",
          blanks: [["regalo"]],
          why: "« un regalo » = un cadeau (masculin). « museo » est masculin aussi mais n'a pas de sens ici ; « cena » est féminin." }
      ]
    },
    {
      id: "grammar", num: "II", title: "Gramática y conjugación", titleFr: "Grammaire et conjugaison",
      points: 20, skill: "cj", type: "fill",
      instructions: "Escribe el verbo entre paréntesis en la forma correcta. Escribe solo la palabra que falta.",
      instructionsFr: "Écris le verbe entre parenthèses à la forme correcte. Tape seulement le mot manquant.",
      items: [
        { text: "Ayer yo ___ (hablar) con mi jefe.", blanks: [["hablé"]],
          why: "« ayer » ferme le temps → indefinido. yo + -ar → -é : hablé." },
        { text: "Anoche tú ___ (comer) en casa de Ana.", blanks: [["comiste"]],
          why: "tú + -er → -iste : comiste. « comí » = yo ; « comió » = él / ella / usted." },
        { text: "El año pasado mis padres ___ (vivir) en Lyon.", blanks: [["vivieron"]],
          why: "ellos + -ir → -ieron : vivieron. Les verbes en -er et -ir ont les mêmes terminaisons." },
        { text: "¿Cuándo ___ usted (llegar) a Madrid?", blanks: [["llegó"]],
          why: "usted se conjugue comme él / ella → -ó : llegó. « llegaste » serait pour tú." },
        { text: "Yo ___ (empezar) a trabajar a las ocho.", blanks: [["empecé"]],
          why: "-zar → -cé à la forme yo, pour garder le son : empecé. « empezé » est une faute d'orthographe." },
        { text: "Ayer nosotros ___ (comer) paella.", blanks: [["comimos"]],
          why: "nosotros + -er → -imos : comimos (≠ présent « comemos »)." },
        { text: "Mi madre ___ (escribir) un mensaje a mi jefe.", blanks: [["escribió"]],
          why: "sujet singulier (mi madre) → forme de ella : -ió. L'accent écrit est obligatoire à l'écrit : escribió." },
        { text: "Anoche no ___ (llamar) nadie.", blanks: [["llamó"]],
          why: "« nadie » est le sujet (3e personne du singulier) → llamó. Avec « nadie » après le verbe, « no » avant est obligatoire." },
        { text: "Mañana yo ___ (ir) a viajar a Madrid.", blanks: [["voy"]],
          why: "Rappel A1 : futur proche = ir a + infinitif. « mañana » = futur, donc présent de ir : voy a viajar." },
        { text: "Hoy ___ (hacer) mucho calor en Sevilla.", blanks: [["hace"]],
          why: "Rappel A1.11 : la météo se dit avec hacer à la 3e personne : hace calor, hace frío." }
      ]
    },
    {
      id: "reading", num: "III", title: "Comprensión escrita", titleFr: "Compréhension écrite",
      points: 15, skill: "ce", type: "mcq",
      instructions: "Lee el texto y elige la respuesta correcta.",
      instructionsFr: "Lis le texte et choisis la bonne réponse.",
      passage: "El fin de semana pasado, Carlos viajó a Valencia para visitar a su hermana Elena. Llegó el viernes por la noche y cenaron juntos en casa.\n\nEl sábado por la mañana visitaron el museo y por la tarde corrieron en la playa. Elena cocinó paella y Carlos preparó una ensalada. Luego bailaron en la cocina y escucharon música hasta las doce.\n\nEl domingo Carlos no trabajó: comió con su hermana y, a las seis, salió de Valencia. Al día siguiente escribió un mensaje a Elena: «Gracias por todo».",
      items: [
        { q: "¿Cuándo llegó Carlos a Valencia?", qFr: "Quand Carlos est-il arrivé à Valence ?",
          opts: ["El sábado por la mañana", "El viernes por la noche", "El domingo a las seis"], correct: 1,
          why: "« Llegó el viernes por la noche ». Le dimanche à 6 h, c'est le départ (« salió de Valencia »), pas l'arrivée." },
        { q: "¿Qué hicieron el sábado por la mañana?", qFr: "Qu'ont-ils fait le samedi matin ?",
          opts: ["Corrieron en la playa", "Bailaron en la cocina", "Visitaron el museo"], correct: 2,
          why: "« El sábado por la mañana visitaron el museo ». La plage, c'était l'après-midi ; la danse, après la paella." },
        { q: "¿Quién cocinó la paella?", qFr: "Qui a cuisiné la paella ?",
          opts: ["Elena", "Carlos", "Los dos"], correct: 0,
          why: "« Elena cocinó paella ». Carlos a préparé la salade (« preparó una ensalada »)." },
        { q: "¿Qué frase es verdadera?", qFr: "Quelle phrase est vraie ?",
          opts: ["Carlos trabajó el domingo.", "Carlos salió de Valencia el domingo.", "Carlos llegó a Valencia el domingo."], correct: 1,
          why: "Le dimanche, Carlos « salió de Valencia » à 18 h. Il n'a pas travaillé (« no trabajó »), et il est arrivé le vendredi." },
        { q: "¿Qué escribió Carlos al día siguiente?", qFr: "Qu'a écrit Carlos le lendemain ?",
          opts: ["Un correo a su jefe", "Un mensaje a su madre", "Un mensaje a su hermana"], correct: 2,
          why: "« Al día siguiente escribió un mensaje a Elena » : Elena est sa sœur. Le texte ne mentionne ni son chef ni sa mère." }
      ]
    },
    {
      id: "listening", num: "IV", title: "Comprensión oral", titleFr: "Compréhension orale",
      points: 15, skill: "co", type: "mcq",
      instructions: "Escucha cada audio y elige la respuesta correcta.",
      instructionsFr: "Écoute chaque enregistrement et choisis la bonne réponse.",
      items: [
        { audio: "Hola, soy Ana. Anoche cené con mis amigos y después bailamos hasta las dos de la mañana.",
          q: "¿Qué hizo Ana después de cenar?", qFr: "Qu'a fait Ana après le dîner ?",
          opts: ["Escuchó música sola.", "Bailó con sus amigos.", "Volvió a casa."], correct: 1,
          why: "« después bailamos hasta las dos » : elle a dansé avec ses amis. Elle n'était pas seule (« mis amigos »)." },
        { audio: [{ who: "A", text: "¿Cuándo llegaste a Madrid?" }, { who: "B", text: "Llegué hace tres días, el lunes." }],
          q: "¿Cuándo llegó B a Madrid?", qFr: "Quand B est-il arrivé à Madrid ?",
          opts: ["La semana pasada", "Hace dos horas", "Hace tres días"], correct: 2,
          why: "« hace tres días » = il y a trois jours. « Hace dos horas » est un autre repère ; le texte ne parle pas de la semaine dernière." },
        { audio: [{ who: "A", text: "Buenos días, señor. ¿Qué compró usted ayer?" }, { who: "B", text: "No compré nada, pero vendí mi coche." }],
          q: "¿Qué hizo B ayer?", qFr: "Qu'a fait B hier ?",
          opts: ["Vendió su coche.", "Compró un coche.", "No hizo nada."], correct: 0,
          why: "« No compré nada, pero vendí mi coche » : il n'a rien acheté mais il a vendu. Piège : « no compré nada » ne veut pas dire qu'il n'a rien fait." },
        { audio: "El año pasado viví en Lyon. Empecé a trabajar en un banco en marzo y terminé en diciembre.",
          q: "¿Cuándo terminó de trabajar en el banco?", qFr: "Quand a-t-il fini de travailler à la banque ?",
          opts: ["En diciembre", "En marzo", "En Lyon, el año pasado"], correct: 0,
          why: "« terminé en diciembre ». Marzo, c'est le début (« empecé… en marzo »)." },
        { audio: [{ who: "A", text: "Marta, ¿recibiste mi mensaje?" }, { who: "B", text: "Sí, Luis, lo recibí el lunes y llamé a tu hermana." }],
          q: "¿A quién llamó Marta?", qFr: "Qui Marta a-t-elle appelé ?",
          opts: ["A Luis", "A la hermana de Luis", "A su madre"], correct: 1,
          why: "« llamé a tu hermana » : « tu » renvoie à Luis (celui qui parle à Marta), donc la sœur de Luis." }
      ]
    },
    {
      id: "writing", num: "V", title: "Expresión escrita", titleFr: "Expression écrite",
      points: 20, skill: "ee", type: "ai-text",
      instructions: "Escribe un mensaje de 60 a 90 palabras.",
      instructionsFr: "Écris un message de 60 à 90 mots.",
      prompt: "Un amigo español te pregunta: «¿Qué hiciste el fin de semana pasado?». Escribe tu respuesta. Cuenta qué hiciste el sábado y el domingo, con quién estuviste y dónde. Usa verbos en pasado y marcadores de tiempo (el sábado, por la tarde, luego, al final…).",
      promptFr: "Un ami espagnol te demande : « Qu'as-tu fait le week-end dernier ? ». Écris ta réponse. Raconte ce que tu as fait samedi et dimanche, avec qui tu étais et où. Utilise des verbes au passé et des marqueurs de temps (el sábado, por la tarde, luego, al final…).",
      minWords: 60, maxWords: 90,
      rubric: "Total 20 points. Task achievement (6 pts): the learner tells what they did on Saturday AND on Sunday, says with whom and where (about 2 pts each for: Saturday, Sunday, who/where; deduct proportionally for a missing element). Grammar (7 pts): correct pretérito indefinido of REGULAR verbs (-ar: -é, -aste, -ó, -amos, -aron; -er/-ir: -í, -iste, -ió, -imos, -ieron). Deduct about 1 pt for every 2 wrong or missing forms (e.g. present tense instead of past, 'comió' for 'comí', 'llegé' for 'llegué', 'empezé' for 'empecé'). Irregular verbs (fui, tuve, hice…) are not required at this level: do not penalise their absence; use of ser/ir forms is a bonus, not a requirement. Vocabulary and time markers (4 pts): at least 3 different time markers or connectors (el sábado, por la mañana, luego, después, al final, hace…) and varied regular verbs. Coherence and register (3 pts): clear order of events, simple connectors, natural message to a friend (tú). Accents: missing accents are only lightly penalised (max −1 in total); do not penalise ¿ ¡ typing. Length: deduct up to 2 pts if clearly under 45 words or over 120 words.",
      reference: "Hola, Pedro. El sábado por la mañana visité el museo con mi hermana y después comimos en un restaurante pequeño. Por la tarde llamé a mi madre y hablé una hora con ella. Luego cené con mis amigos y bailamos toda la noche. El domingo trabajé en casa: escribí tres correos y preparé la comida. Al final, escuché música y cené con mi hermano. ¿Y tú, qué hiciste?"
    },
    {
      id: "speaking", num: "VI", title: "Expresión oral", titleFr: "Expression orale",
      points: 15, skill: "eo", type: "ai-oral",
      instructions: "Habla durante unos 40 segundos. Usa el pasado.",
      instructionsFr: "Parle pendant environ 40 secondes. Utilise le passé.",
      prompt: "Cuenta qué hiciste ayer. Di al menos cinco cosas con «primero», «luego», «después» y «al final». Di también a qué hora llegaste o saliste de un sitio.",
      promptFr: "Raconte ce que tu as fait hier. Dis au moins cinq choses avec « primero », « luego », « después » et « al final ». Dis aussi à quelle heure tu es arrivé(e) ou parti(e) d'un endroit.",
      targetSeconds: 40,
      rubric: "Total 15 points. Content (5 pts): at least five different actions yesterday, in a logical order (1 pt per action up to 5). Grammar (5 pts): correct pretérito indefinido of regular verbs (yo -é/-í, e.g. hablé, comí, salí; also llegué/empecé/busqué if used). Deduct about 1 pt per 2 forms left in the present tense or wrongly formed. Connectors and time (3 pts): uses primero, luego, después, al final (or similar) and gives at least one time (a las ocho…). Fluency (2 pts): understandable, reasonably continuous speech, about 30-60 seconds. Pronunciation cannot be judged precisely from a transcript: judge content, forms and apparent fluency only; do not penalise missing accents or transcription artefacts.",
      reference: "Ayer empecé el día a las siete. Primero desayuné y luego salí de casa. Llegué al trabajo a las ocho y hablé con mi jefe. Después comí con una compañera y por la tarde escribí varios mensajes. Al final, volví a casa, cené y escuché música."
    }
  ]
};


// ---- 214.js ----
E[214] = {
  code: "A2.2", level: "A2",
  title: "Examen A2.2 – Fui, estuve, tuve, hice: el indefinido irregular",
  titleFr: "Examen A2.2 – Fui, estuve, tuve, hice : le passé simple irrégulier",
  objective: "Aprobar el nivel A2.2: ser/ir (fui, fue), dar y ver, los radicales irregulares (estuve, tuve, hice, dije, pude…), pedir/dormir (pidió, durmió) y hubo.",
  objectiveFr: "Valider le niveau A2.2 : ser/ir (fui, fue), dar et ver, radicaux irréguliers (estuve, tuve, hice, dije, pude…), pedir/dormir (pidió, durmió) et hubo.",
  sections: [
    {
      id: "vocab", num: "I", title: "Vocabulario", titleFr: "Vocabulaire",
      points: 15, skill: "vo", type: "fill",
      instructions: "Completa cada frase con una palabra de la lista. Hay palabras que no necesitas.",
      instructionsFr: "Complète chaque phrase avec un mot de la liste. Certains mots ne servent pas.",
      bank: ["vacaciones", "partido", "hubo", "cine", "viaje", "montaña", "fue", "parque", "playa", "museo", "hice"],
      items: [
        { text: "Fuimos de ___ a Cádiz y estuvimos una semana en un hotel.",
          blanks: [["vacaciones"]],
          why: "« ir de vacaciones » = partir en vacances ; le mot est toujours au pluriel : « las vacaciones »." },
        { text: "Vimos un ___ de fútbol en el estadio: ganó mi equipo.",
          blanks: [["partido"]],
          why: "« un partido de fútbol » = un match de foot. « viaje » = voyage, qui ne va pas avec « de fútbol »." },
        { text: "Anoche ___ mucho ruido en mi calle y no pude dormir.",
          blanks: [["hubo"]],
          why: "« hay » devient « hubo » au passé simple (il y a eu), invariable : « hubo mucho ruido ». « fue » ne s'emploie pas ainsi devant « mucho ruido » ; « hice » = j'ai fait." },
        { text: "Ayer fui al ___ con Ana y vimos una película.",
          blanks: [["cine"]],
          why: "On voit une película au « cine » (cinéma). « museo » est aussi masculin mais on n'y voit pas de film." },
        { text: "El ___ fue un desastre: el tren llegó tarde y no pudimos cenar.",
          blanks: [["viaje"]],
          why: "« el viaje fue un desastre » = le voyage a été un désastre. « fue » est déjà dans la phrase : ici il faut un nom masculin." },
        { text: "Estuvimos una semana en la ___ y subimos a una cima muy alta.",
          blanks: [["montaña"]],
          why: "On monte à un sommet (« cima ») en « montaña ». Piège : « playa » est féminin aussi mais n'a pas de cime." },
        { text: "—¿Cómo ___ la fiesta? —¡Fue genial!",
          blanks: [["fue"]],
          why: "« ¿Cómo fue…? » = comment c'était ? / comment ça s'est passé ? C'est le « fue » de ser (jugement d'un événement fini)." },
        { text: "Los niños fueron al ___ y jugaron toda la tarde.",
          blanks: [["parque"]],
          why: "« al parque » : « al » = a + el, donc un nom masculin. « playa » est féminin (« a la playa »)." }
      ]
    },
    {
      id: "grammar", num: "II", title: "Gramática y conjugación", titleFr: "Grammaire et conjugaison",
      points: 20, skill: "cj", type: "fill",
      instructions: "Escribe el verbo entre paréntesis en la forma correcta. Escribe solo la palabra que falta.",
      instructionsFr: "Écris le verbe entre parenthèses à la forme correcte. Tape seulement le mot manquant.",
      items: [
        { text: "Ayer yo ___ (ir) al cine con mi hermana.", blanks: [["fui"]],
          why: "ir au passé simple : fui. Sans accent écrit (un seul son vocalique). « voy » est le présent." },
        { text: "¿Dónde ___ tú (estar) el domingo?", blanks: [["estuviste"]],
          why: "estar → estuv- + iste : estuviste. Radical irrégulier + terminaisons -e, -iste, -o, -imos, -isteis, -ieron." },
        { text: "La semana pasada mis padres ___ (tener) mucho trabajo.", blanks: [["tuvieron"]],
          why: "tener → tuv- + ieron : tuvieron. « tenieron » mélange le radical du présent et la terminaison du passé." },
        { text: "Anoche nosotros ___ (hacer) la cena.", blanks: [["hicimos"]],
          why: "hacer → hic- + imos : hicimos. Seule la 3e personne du singulier prend z : hizo." },
        { text: "Mi jefe ___ (decir) que no.", blanks: [["dijo"]],
          why: "decir → dij- + o : dijo (él). Sans accent écrit : la voix tombe sur le radical." },
        { text: "La fiesta de anoche ___ (ser) genial.", blanks: [["fue"]],
          why: "ser et ir ont la même forme au passé simple : fue. Ici c'est un jugement (ser) : « la fiesta fue genial »." },
        { text: "Mi madre ___ (pedir) pescado en el restaurante.", blanks: [["pidió"]],
          why: "pedir (-ir) : e → i à la 3e personne (pidió, pidieron). « pedió » n'existe pas." },
        { text: "¿___ usted (poder) hablar con el jefe?", blanks: [["pudo"]],
          why: "usted se conjugue comme él / ella : poder → pud- + o = pudo. « pudiste » serait pour tú." },
        { text: "El año pasado yo ___ (viajar) a Perú.", blanks: [["viajé"]],
          why: "Rappel A2.1 : verbe régulier en -ar, yo → -é : viajé." },
        { text: "Mañana nosotros ___ (ir) a ver un partido.", blanks: [["vamos"]],
          why: "Rappel A1.9 : futur proche = ir a + infinitif. « mañana » → présent de ir : vamos a ver (« fuimos » serait le passé)." }
      ]
    },
    {
      id: "reading", num: "III", title: "Comprensión escrita", titleFr: "Compréhension écrite",
      points: 15, skill: "ce", type: "mcq",
      instructions: "Lee el texto y elige la respuesta correcta.",
      instructionsFr: "Lis le texte et choisis la bonne réponse.",
      passage: "El verano pasado, Pablo y su novia Clara fueron a Granada. Viajaron en autobús y llegaron por la noche. En el hotel tuvieron un problema: no hubo agua caliente. Pablo habló con la recepcionista y ella les dio otra habitación.\n\nAl día siguiente hicieron una visita a la Alhambra y vieron la ciudad desde la montaña. Clara quiso comer en un restaurante típico y pidió pescado; Pablo prefirió una ensalada. Por la noche durmieron bien y se divirtieron mucho. Al final, el viaje fue genial.",
      items: [
        { q: "¿Cómo viajaron a Granada?", qFr: "Comment ont-ils voyagé jusqu'à Grenade ?",
          opts: ["En tren", "En autobús", "En coche"], correct: 1,
          why: "« Viajaron en autobús ». Le texte ne mentionne ni le train ni la voiture." },
        { q: "¿Cuál fue el problema en el hotel?", qFr: "Quel a été le problème à l'hôtel ?",
          opts: ["No tuvieron habitación.", "El hotel estuvo cerrado.", "No hubo agua caliente."], correct: 2,
          why: "« no hubo agua caliente » = il n'y a pas eu d'eau chaude. Ils ont bien eu une chambre, puis une autre." },
        { q: "¿Qué pidió Clara en el restaurante?", qFr: "Qu'a commandé Clara au restaurant ?",
          opts: ["Pescado", "Una ensalada", "Paella"], correct: 0,
          why: "« Clara… pidió pescado ». La salade, c'est Pablo (« prefirió una ensalada »)." },
        { q: "¿Qué hizo la recepcionista?", qFr: "Qu'a fait la réceptionniste ?",
          opts: ["Les dio otra habitación.", "Llamó a un taxi.", "Les pidió más dinero."], correct: 0,
          why: "« ella les dio otra habitación » : dar → dio. Elle n'a ni appelé de taxi ni demandé d'argent." },
        { q: "¿Qué opinó la pareja del viaje al final?", qFr: "Que pense le couple du voyage à la fin ?",
          opts: ["Fue un desastre.", "Fue muy corto.", "Fue genial."], correct: 2,
          why: "« Al final, el viaje fue genial ». Malgré le problème de l'hôtel, le bilan est positif : piège = « desastre »." }
      ]
    },
    {
      id: "listening", num: "IV", title: "Comprensión oral", titleFr: "Compréhension orale",
      points: 15, skill: "co", type: "mcq",
      instructions: "Escucha cada audio y elige la respuesta correcta.",
      instructionsFr: "Écoute chaque enregistrement et choisis la bonne réponse.",
      items: [
        { audio: "Ayer fui al parque con mis hijos. Hicimos un picnic y jugamos al fútbol.",
          q: "¿Qué hicieron en el parque?", qFr: "Qu'ont-ils fait au parc ?",
          opts: ["Vieron una película.", "Hicieron un picnic y jugaron al fútbol.", "Fueron a la playa."], correct: 1,
          why: "« Hicimos un picnic y jugamos al fútbol ». Ils sont allés au parc, pas à la plage ni au cinéma." },
        { audio: [{ who: "A", text: "¿Adónde fuiste el sábado?" }, { who: "B", text: "Fui a la playa con mi hermana. ¿Y tú?" }, { who: "A", text: "Yo estuve en casa. Tuve mucho trabajo." }],
          q: "¿Por qué estuvo A en casa el sábado?", qFr: "Pourquoi A est-il resté chez lui samedi ?",
          opts: ["Porque tuvo mucho trabajo.", "Porque fue a la playa.", "Porque estuvo enfermo."], correct: 0,
          why: "A dit « Tuve mucho trabajo ». C'est B qui est allé à la plage." },
        { audio: [{ who: "A", text: "¿Pudo usted hablar con el jefe?" }, { who: "B", text: "No, no pude. Mi jefe no vino a la oficina." }],
          q: "¿Por qué no pudo B hablar con el jefe?", qFr: "Pourquoi B n'a-t-il pas pu parler au chef ?",
          opts: ["Porque no tuvo tiempo.", "Porque el jefe no vino.", "Porque el jefe dijo que no."], correct: 1,
          why: "« Mi jefe no vino a la oficina » : venir → vino. Le manque de temps n'est pas mentionné." },
        { audio: "Anoche hubo una fiesta en mi calle. Mis vecinos trajeron música y bailamos hasta las tres.",
          q: "¿Qué trajeron los vecinos?", qFr: "Qu'ont apporté les voisins ?",
          opts: ["Pan y vino", "Una guitarra", "Música"], correct: 2,
          why: "« trajeron música » : traer → trajeron (sans i après le j). Pas de pain ni de guitare dans l'audio." },
        { audio: [{ who: "A", text: "¿Cómo fue el viaje?" }, { who: "B", text: "Fue un desastre: el vuelo salió tarde y no vi la ciudad." }],
          q: "¿Cómo fue el viaje de B?", qFr: "Comment s'est passé le voyage de B ?",
          opts: ["Fue un desastre.", "Fue genial.", "Fue muy corto."], correct: 0,
          why: "« Fue un desastre ». « Genial » est l'opposé ; la durée du voyage n'est pas donnée." }
      ]
    },
    {
      id: "writing", num: "V", title: "Expresión escrita", titleFr: "Expression écrite",
      points: 20, skill: "ee", type: "ai-text",
      instructions: "Escribe un correo de 70 a 110 palabras.",
      instructionsFr: "Écris un e-mail de 70 à 110 mots.",
      prompt: "Escribe un correo a un amigo para contar tus últimas vacaciones o un viaje. Di adónde fuiste, con quién, dónde estuviste, qué hiciste y qué viste. Termina diciendo cómo fue el viaje (genial, un desastre…).",
      promptFr: "Écris un e-mail à un ami pour raconter tes dernières vacances ou un voyage. Dis où tu es allé(e), avec qui, où tu as été, ce que tu as fait et ce que tu as vu. Termine en disant comment c'était (genial, un desastre…).",
      minWords: 70, maxWords: 110,
      rubric: "Total 20 points. Task achievement (6 pts): the email says where the learner went, with whom, what they did and saw, and ends with an opinion on how the trip was (about 1-1.5 pt per element; deduct proportionally for missing ones). Grammar (7 pts): correct irregular pretérito indefinido, with at least four DIFFERENT irregular verbs among: fui/fue (ir, ser), estuve, tuve, hice, vi, dije, pude, vine, di, hubo, pidió, durmió. Deduct about 1 pt per 2 wrong forms (e.g. 'hací', 'tenió', 'fuí', 'dijieron', 'hico'). Regular indefinido forms (A2.1) count too. A verb left in the present instead of the past counts as an error. Vocabulary and time markers (4 pts): trip vocabulary (vacaciones, viaje, playa, hotel…) and markers such as el verano pasado, ayer, hace dos días, al día siguiente, por la noche. Coherence (3 pts): logical order, simple connectors, email format with greeting and closing. Accents: missing accents are only lightly penalised (max −1 in total). Length: deduct up to 2 pts if clearly under 50 words or over 140 words.",
      reference: "Hola, Laura. El verano pasado fui a Cádiz con mi familia. Estuvimos una semana en un hotel cerca de la playa. Mi hermana y yo hicimos muchas cosas: fuimos al museo, vimos el mar y comimos pescado cada día. Un día hubo mucho viento y no pudimos ir a la playa, pero tuvimos tiempo para visitar la ciudad. Mis padres durmieron mucho y mi hermano se divirtió con sus amigos. El viaje fue genial. ¿Y tú, adónde fuiste de vacaciones? Un abrazo."
    },
    {
      id: "speaking", num: "VI", title: "Expresión oral", titleFr: "Expression orale",
      points: 15, skill: "eo", type: "ai-oral",
      instructions: "Habla durante unos 45 segundos. Usa el pasado.",
      instructionsFr: "Parle pendant environ 45 secondes. Utilise le passé.",
      prompt: "Cuenta qué hiciste el último fin de semana o en tus últimas vacaciones. Di adónde fuiste, dónde estuviste, qué hiciste, qué viste y cómo fue.",
      promptFr: "Raconte ce que tu as fait le dernier week-end ou pendant tes dernières vacances. Dis où tu es allé(e), où tu as été, ce que tu as fait, ce que tu as vu et comment c'était.",
      targetSeconds: 45,
      rubric: "Total 15 points. Content (5 pts): says where they went, where they were, at least three things they did/saw, and how it was (1 pt each). Grammar (5 pts): correct irregular indefinido, at least four different irregular verbs (fui, estuve, tuve, hice, vi, fue, pude, dije, hubo…). Deduct about 1 pt per 2 wrong forms (e.g. 'hací', 'estaví', present instead of past). Connectors and time (3 pts): uses at least two time markers or connectors (el sábado, después, luego, al día siguiente, al final). Fluency (2 pts): understandable, reasonably continuous speech. Pronunciation cannot be judged precisely from a transcript: judge content, forms and apparent fluency only; ignore missing accents and transcription artefacts.",
      reference: "El fin de semana pasado fui a la montaña con mis amigos. Estuvimos dos días en un pueblo pequeño. El sábado hicimos una excursión y vimos un paisaje muy bonito. Por la noche tuvimos una cena genial y dormimos muy bien. El domingo volvimos a casa en tren. Fue un fin de semana fantástico."
    }
  ]
};


// ---- 215.js ----
E[215] = {
  code: "A2.3", level: "A2",
  title: "Examen A2.3 – He comido, hemos visitado: el pretérito perfecto",
  titleFr: "Examen A2.3 – He comido, hemos visitado : le pretérito perfecto",
  objective: "Aprobar el nivel A2.3: haber + participio (regular e irregular), marcadores (hoy, esta semana, ya, todavía no, nunca, alguna vez) y perfecto o indefinido.",
  objectiveFr: "Valider le niveau A2.3 : haber + participe passé (régulier et irrégulier), marqueurs (hoy, esta semana, ya, todavía no, nunca, alguna vez) et choix perfecto / indefinido.",
  sections: [
    {
      id: "vocab", num: "I", title: "Vocabulario", titleFr: "Vocabulaire",
      points: 15, skill: "vo", type: "fill",
      instructions: "Completa cada frase con una palabra de la lista. Hay palabras que no necesitas.",
      instructionsFr: "Complète chaque phrase avec un mot de la liste. Certains mots ne servent pas.",
      bank: ["hoy", "todavía", "ya", "alguna vez", "maleta", "pasaporte", "reunión", "mensaje", "ayer", "anoche", "nunca"],
      items: [
        { text: "Son las ocho de la mañana y ___ he desayunado fruta y café.",
          blanks: [["hoy", "esta mañana"]],
          why: "« hoy » (aujourd'hui) est un marqueur de temps encore ouvert : il appelle le perfecto (he desayunado). « ayer » et « anoche » appellent l'indefinido (desayuné)." },
        { text: "—¿Has comido? —No, no he comido ___.",
          blanks: [["todavía", "aún"]],
          why: "« todavía no » / « no… todavía » = pas encore. « ya » signifie déjà : on ne peut pas l'employer ici dans une réponse négative." },
        { text: "—¿Has terminado el informe? —Sí, ___ lo he terminado.",
          blanks: [["ya"]],
          why: "« ya » = déjà : « ya lo he terminado ». Le pronom « lo » se place avant « he »." },
        { text: "¿Has estado ___ en Perú? —No, nunca he estado.",
          blanks: [["alguna vez"]],
          why: "« ¿Has estado alguna vez…? » = as-tu déjà été… ? Question sur une expérience de vie, sans date. « nunca » est la réponse négative, pas la question." },
        { text: "Mañana viajo a Madrid, pero todavía no he hecho la ___.",
          blanks: [["maleta"]],
          why: "« hacer la maleta » = faire sa valise. Le participe de hacer est irrégulier : hecho." },
        { text: "Para viajar a Perú necesito el ___: ¿lo has traído?",
          blanks: [["pasaporte"]],
          why: "« el pasaporte » (masculin) = le passeport. Le « lo » de la question renvoie à un nom masculin." },
        { text: "Hoy hemos tenido una ___ muy larga con el jefe.",
          blanks: [["reunión"]],
          why: "« una reunión » = une réunion (féminin, d'où « una » et « larga »)." },
        { text: "He leído tu ___ y te llamo esta noche.",
          blanks: [["mensaje"]],
          why: "« leer un mensaje » = lire un message. Participe de leer : leído, avec accent sur le í." }
      ]
    },
    {
      id: "grammar", num: "II", title: "Gramática y conjugación", titleFr: "Grammaire et conjugaison",
      points: 20, skill: "cj", type: "fill",
      instructions: "Escribe el verbo entre paréntesis en la forma correcta (perfecto o indefinido, según el marcador de tiempo). Escribe solo las palabras que faltan.",
      instructionsFr: "Écris le verbe entre parenthèses à la forme correcte (perfecto ou indefinido, selon le marqueur de temps). Tape seulement les mots manquants.",
      items: [
        { text: "Hoy yo ___ (comer) paella.", blanks: [["he comido"]],
          why: "« hoy » = temps ouvert → perfecto : he + comido (-er → -ido)." },
        { text: "¿Qué ___ tú (hacer) esta mañana?", blanks: [["has hecho"]],
          why: "« esta mañana » → perfecto. hacer a un participe irrégulier : hecho (pas « hacido »)." },
        { text: "Marta ya ___ (llegar) a la oficina.", blanks: [["ha llegado"]],
          why: "« ya » → perfecto. ella → ha. -ar → -ado : llegado. Le participe ne s'accorde pas." },
        { text: "Esta semana nosotros ___ (viajar) mucho.", blanks: [["hemos viajado"]],
          why: "« esta semana » = période pas terminée → perfecto : hemos viajado." },
        { text: "Ellos todavía no ___ (escribir) el correo.", blanks: [["han escrito"]],
          why: "« todavía no » → perfecto. escribir → escrito (irrégulier). Rien ne s'intercale entre « han » et le participe." },
        { text: "¿Ya ___ usted (ver) el comedor del hotel?", blanks: [["ha visto"]],
          why: "usted se conjugue comme él / ella : ha. ver → visto (irrégulier)." },
        { text: "Yo ya ___ (poner) la mesa.", blanks: [["he puesto"]],
          why: "poner → puesto (irrégulier). yo → he." },
        { text: "Hoy ellos ___ (abrir) la tienda a las ocho.", blanks: [["han abierto"]],
          why: "abrir → abierto (irrégulier). ellos → han. « hoy » → perfecto." },
        { text: "Ayer yo ___ (comer) con mi jefe.", blanks: [["comí"]],
          why: "Rappel A2.1 : « ayer » ferme le temps → indefinido : comí. Hoy he comido / ayer comí." },
        { text: "El sábado pasado nosotros ___ (ir) al cine.", blanks: [["fuimos"]],
          why: "Rappel A2.2 : « el sábado pasado » = temps fermé → indefinido. ir → fuimos (identique à ser)." }
      ]
    },
    {
      id: "reading", num: "III", title: "Comprensión escrita", titleFr: "Compréhension écrite",
      points: 15, skill: "ce", type: "mcq",
      instructions: "Lee el texto y elige la respuesta correcta.",
      instructionsFr: "Lis le texte et choisis la bonne réponse.",
      passage: "Hoy ha sido un día difícil para Luis. Esta mañana se ha levantado tarde y no ha desayunado. Ha llegado a la oficina a las nueve y media y su jefe ya ha preguntado por el informe. Luis todavía no lo ha terminado, pero ha escrito dos páginas antes de comer.\n\nA las dos ha comido con una compañera, Elena, y han hablado de las vacaciones. Elena ha estado muchas veces en Perú, pero Luis nunca ha viajado allí. Por la tarde ha terminado el informe y lo ha enviado. Esta noche no ha cocinado: ha pedido una pizza.",
      items: [
        { q: "¿Por qué no ha desayunado Luis?", qFr: "Pourquoi Luis n'a-t-il pas pris de petit-déjeuner ?",
          opts: ["Porque ha llegado a la oficina a las siete.", "Porque se ha levantado tarde.", "Porque ha comido con Elena."], correct: 1,
          why: "« se ha levantado tarde y no ha desayunado » : il s'est levé tard. Il est arrivé au bureau à 9 h 30, pas à 7 h." },
        { q: "¿Qué ha preguntado el jefe?", qFr: "Qu'a demandé le chef ?",
          opts: ["Por las vacaciones.", "Por la reunión.", "Por el informe."], correct: 2,
          why: "« su jefe ya ha preguntado por el informe ». Les vacances sont le sujet du déjeuner avec Elena." },
        { q: "¿Con quién ha comido Luis?", qFr: "Avec qui Luis a-t-il déjeuné ?",
          opts: ["Con Elena", "Con su jefe", "Con su familia"], correct: 0,
          why: "« ha comido con una compañera, Elena ». Il n'a pas déjeuné avec son chef." },
        { q: "¿Qué frase es verdadera?", qFr: "Quelle phrase est vraie ?",
          opts: ["Luis nunca ha estado en Perú.", "Luis ha estado muchas veces en Perú.", "Elena nunca ha viajado a Perú."], correct: 0,
          why: "« Elena ha estado muchas veces en Perú, pero Luis nunca ha viajado allí » : c'est Elena qui connaît le Pérou, pas Luis." },
        { q: "¿Qué ha hecho Luis esta noche?", qFr: "Qu'a fait Luis ce soir ?",
          opts: ["Ha cocinado pasta.", "Ha ido al cine.", "Ha pedido una pizza."], correct: 2,
          why: "« Esta noche no ha cocinado: ha pedido una pizza ». Piège : « no ha cocinado » nie la cuisine." }
      ]
    },
    {
      id: "listening", num: "IV", title: "Comprensión oral", titleFr: "Compréhension orale",
      points: 15, skill: "co", type: "mcq",
      instructions: "Escucha cada audio y elige la respuesta correcta.",
      instructionsFr: "Écoute chaque enregistrement et choisis la bonne réponse.",
      items: [
        { audio: "Hola, soy Pablo. Esta semana he trabajado mucho. He tenido tres reuniones y he escrito muchos correos. Mañana descanso.",
          q: "¿Qué ha hecho Pablo esta semana?", qFr: "Qu'a fait Pablo cette semaine ?",
          opts: ["Ha descansado mucho.", "Ha viajado a Madrid.", "Ha trabajado mucho."], correct: 2,
          why: "« Esta semana he trabajado mucho ». Le repos, c'est pour demain (« mañana descanso »)." },
        { audio: [{ who: "A", text: "¿Has comido ya?" }, { who: "B", text: "Todavía no. He terminado el trabajo y ahora tengo hambre." }],
          q: "¿Ha comido B?", qFr: "B a-t-il mangé ?",
          opts: ["Sí, ha comido pronto.", "No, todavía no.", "Sí, ha comido con A."], correct: 1,
          why: "« Todavía no » = pas encore. Il a fini son travail mais n'a pas encore mangé." },
        { audio: [{ who: "A", text: "Buenos días, señora. ¿Ha estado usted alguna vez en este hotel?" }, { who: "B", text: "No, nunca. Ayer llegué muy tarde." }],
          q: "¿Cuándo llegó B al hotel?", qFr: "Quand B est-elle arrivée à l'hôtel ?",
          opts: ["Hoy por la mañana", "Ayer, muy tarde", "Nunca"], correct: 1,
          why: "« Ayer llegué muy tarde » : indefinido car « ayer » ferme le temps. « Nunca » répond à la question sur l'expérience (jamais venue avant)." },
        { audio: "Mi hermano ha perdido las llaves. Las ha buscado en la cocina, en el salón y en el coche, pero todavía no las ha encontrado.",
          q: "¿Qué problema tiene el hermano?", qFr: "Quel problème a le frère ?",
          opts: ["No ha encontrado las llaves.", "Ha perdido el coche.", "Ha roto la puerta."], correct: 0,
          why: "« todavía no las ha encontrado » : il cherche encore ses clés. Il les a perdues, pas la voiture." },
        { audio: [{ who: "A", text: "¿Qué has hecho esta mañana?" }, { who: "B", text: "He hablado con mi madre y he escrito un correo. ¿Y tú?" }, { who: "A", text: "Yo he abierto la tienda y he vendido tres libros." }],
          q: "¿Qué ha hecho A esta mañana?", qFr: "Qu'a fait A ce matin ?",
          opts: ["Ha abierto la tienda y ha vendido libros.", "Ha hablado con su madre.", "Ha escrito un correo."], correct: 0,
          why: "A répond « he abierto la tienda y he vendido tres libros ». Parler à sa mère et écrire un e-mail, c'est ce qu'a fait B." }
      ]
    },
    {
      id: "writing", num: "V", title: "Expresión escrita", titleFr: "Expression écrite",
      points: 20, skill: "ee", type: "ai-text",
      instructions: "Escribe un mensaje de 70 a 110 palabras.",
      instructionsFr: "Écris un message de 70 à 110 mots.",
      prompt: "Un amigo te escribe: «¿Qué tal tu semana?». Responde con un mensaje. Cuenta qué has hecho hoy y esta semana, qué cosas todavía no has hecho y una experiencia que has tenido alguna vez o que nunca has tenido (por ejemplo, un viaje, un plato, un deporte).",
      promptFr: "Un ami t'écrit : « Comment va ta semaine ? ». Réponds par un message. Raconte ce que tu as fait aujourd'hui et cette semaine, ce que tu n'as pas encore fait et une expérience que tu as déjà vécue ou jamais vécue (par exemple un voyage, un plat, un sport).",
      minWords: 70, maxWords: 110,
      rubric: "Total 20 points. Task achievement (6 pts): the message covers (a) what the learner has done today, (b) what they have done this week, (c) something they have not done yet (todavía no / aún no), (d) one life experience with alguna vez or nunca (about 1.5 pt each). Grammar (7 pts): correct pretérito perfecto = he/has/ha/hemos/han + participle, with at least four different participles including at least two irregular ones (hecho, escrito, visto, puesto, abierto, dicho, vuelto, roto). Deduct about 1 pt per 2 errors (wrong auxiliary, 'hacido', 'escribido', participle agreeing with the subject, a word placed between haber and the participle, 'no nunca'). One correct use of the indefinido with ayer or a past date is accepted and shown as a bonus, not required; but using the indefinido with hoy/esta semana is an error. Vocabulary and markers (4 pts): hoy, esta mañana/semana, ya, todavía no, alguna vez, nunca, últimamente, plus everyday vocabulary. Coherence (3 pts): clear organisation, greeting and closing, natural tone to a friend. Accents: missing accents are only lightly penalised (max −1 in total). Length: deduct up to 2 pts if clearly under 50 words or over 140 words.",
      reference: "Hola, Sara. Mi semana ha sido muy larga. Hoy me he levantado temprano y he desayunado con mi hijo. Esta semana he trabajado mucho: he tenido dos reuniones y he escrito muchos correos. Todavía no he hecho la compra y tampoco he llamado a mi madre. Ya he visto la película de la que me hablaste y me ha gustado mucho. ¿Has estado alguna vez en Perú? Yo nunca he viajado allí, pero he leído un libro sobre ese país. ¡Hablamos pronto!"
    },
    {
      id: "speaking", num: "VI", title: "Expresión oral", titleFr: "Expression orale",
      points: 15, skill: "eo", type: "ai-oral",
      instructions: "Habla durante unos 45 segundos. Usa el pretérito perfecto.",
      instructionsFr: "Parle pendant environ 45 secondes. Utilise le pretérito perfecto.",
      prompt: "Responde a estas preguntas: ¿Qué has hecho hoy? ¿Qué no has hecho todavía? ¿Has estado alguna vez en España o en otro país hispanohablante? ¿Qué has comido o bebido hoy?",
      promptFr: "Réponds à ces questions : Qu'as-tu fait aujourd'hui ? Qu'est-ce que tu n'as pas encore fait ? As-tu déjà été en Espagne ou dans un autre pays hispanophone ? Qu'as-tu mangé ou bu aujourd'hui ?",
      targetSeconds: 45,
      rubric: "Total 15 points. Content (5 pts): answers the four questions (what they have done today, what they have not done yet, whether they have ever been to a Spanish-speaking country, what they have eaten or drunk today); about 1.25 pt each. Grammar (5 pts): correct pretérito perfecto (he/has/ha + participle) with at least three different verbs, including at least one irregular participle (hecho, escrito, visto, puesto, abierto, dicho…). Deduct about 1 pt per 2 errors (wrong auxiliary, 'hacido', wrong word order such as 'no todavía he'). Markers (3 pts): uses hoy / esta mañana, todavía no, alguna vez / nunca, ya. Fluency (2 pts): understandable, reasonably continuous speech. Pronunciation cannot be judged precisely from a transcript: judge content, forms and apparent fluency only; ignore missing accents and transcription artefacts.",
      reference: "Hoy me he levantado a las siete y he desayunado café con pan. Después he trabajado en casa: he escrito tres correos y he hablado con un cliente. Todavía no he comido ni he hecho la compra. Nunca he estado en México, pero he estado en España dos veces. Hoy he bebido mucha agua y ya he puesto la mesa para la cena."
    }
  ]
};


// ---- 216.js ----
E[216] = {
  code: "A2.4", level: "A2",
  title: "Examen A2.4 – Mañana trabajaré, iremos: el futuro simple",
  titleFr: "Examen A2.4 – Mañana trabajaré, iremos : le futur simple",
  objective: "Aprobar el nivel A2.4: futuro simple regular e irregular (tendré, haré, vendré, saldré…), ir a + infinitivo, si + presente, y marcadores de futuro.",
  objectiveFr: "Valider le niveau A2.4 : futur simple régulier et irrégulier (tendré, haré, vendré, saldré…), ir a + infinitif, si + présent, et marqueurs du futur.",
  sections: [
    {
      id: "vocab", num: "I", title: "Vocabulario", titleFr: "Vocabulaire",
      points: 15, skill: "vo", type: "fill",
      instructions: "Completa cada frase con una palabra de la lista. Hay palabras que no necesitas.",
      instructionsFr: "Complète chaque phrase avec un mot de la liste. Certains mots ne servent pas.",
      bank: ["pasado", "dentro", "semana", "ya", "vuelo", "seguramente", "plan", "próximo", "ayer", "hace", "anoche"],
      items: [
        { text: "Hoy es lunes. El miércoles tengo el examen, es decir, ___ mañana.",
          blanks: [["pasado"]],
          why: "« pasado mañana » = après-demain. Piège : « ayer » désigne le passé." },
        { text: "Salgo ahora y llegaré ___ de una hora.",
          blanks: [["dentro"]],
          why: "« dentro de » + durée = dans (futur) : dentro de una hora = dans une heure. « hace » + durée = il y a (passé)." },
        { text: "La ___ que viene tendré vacaciones.",
          blanks: [["semana"]],
          why: "« la semana que viene » = la semaine prochaine. « próximo » est un adjectif masculin (el próximo mes), qui ne s'accorde pas avec « la »." },
        { text: "—¿Vienes a mi fiesta? —___ veremos.",
          blanks: [["ya"]],
          why: "« Ya veremos » = on verra. Expression figée au futur de ver." },
        { text: "El ___ saldrá a las diez de la mañana y llegará a Lima por la tarde.",
          blanks: [["vuelo"]],
          why: "« un vuelo » = un vol (avion). « plan » = projet : on ne dit pas « el plan saldrá » pour un avion." },
        { text: "Está lloviendo mucho: ___ llegarán tarde.",
          blanks: [["seguramente", "quizás", "tal vez"]],
          why: "« seguramente » = sûrement ; « quizás » et « tal vez » = peut-être : tous expriment la probabilité. Ils vont avec le futur (llegarán)." },
        { text: "Tengo un ___ genial para el verano: viajar a Perú.",
          blanks: [["plan"]],
          why: "« un plan » = un projet (masculin). « vuelo » est aussi masculin mais le deux-points introduit un projet, pas un avion." },
        { text: "El ___ mes iré a Madrid por trabajo.",
          blanks: [["próximo"]],
          why: "« el próximo mes » = le mois prochain (masculin, comme « mes »). « pasado » = dernier, tourné vers le passé." }
      ]
    },
    {
      id: "grammar", num: "II", title: "Gramática y conjugación", titleFr: "Grammaire et conjugaison",
      points: 20, skill: "cj", type: "fill",
      instructions: "Escribe el verbo entre paréntesis en la forma correcta. Escribe solo la palabra que falta.",
      instructionsFr: "Écris le verbe entre parenthèses à la forme correcte. Tape seulement le mot manquant.",
      items: [
        { text: "Mañana yo ___ (hablar) con el jefe.", blanks: [["hablaré"]],
          why: "Futur simple : infinitif + é. hablar → hablaré (accent écrit sur le é final)." },
        { text: "El año que viene ellos ___ (viajar) a Perú.", blanks: [["viajarán"]],
          why: "ellos → infinitif + án : viajarán, avec accent écrit." },
        { text: "¿Qué ___ tú (hacer) este fin de semana?", blanks: [["harás"]],
          why: "hacer est irrégulier au futur : radical har- + ás = harás. « hacerás » est faux." },
        { text: "La semana que viene nosotros ___ (tener) vacaciones.", blanks: [["tendremos"]],
          why: "tener → tendr- + emos : tendremos (le e du radical tombe et un d apparaît)." },
        { text: "Mi hermana ___ (venir) mañana.", blanks: [["vendrá"]],
          why: "venir → vendr- + á : vendrá. Pas « venirá »." },
        { text: "¿___ usted (poder) ayudarme mañana?", blanks: [["Podrá"]],
          why: "usted se conjugue comme él / ella : poder → podr- + á = podrá. Le futur est plus poli que « ¿Puede ayudarme? »." },
        { text: "Si ___ (llover), nos quedaremos en casa.", blanks: [["llueve"]],
          why: "Après « si » de condition on met le présent, jamais le futur : si llueve, nos quedaremos. Le futur est dans la conséquence." },
        { text: "Esta noche yo ___ (salir) a las ocho.", blanks: [["saldré"]],
          why: "salir → saldr- + é : saldré (le i du radical tombe, un d apparaît)." },
        { text: "El mes pasado mi madre ___ (llamar) a mi jefe.", blanks: [["llamó"]],
          why: "Rappel A2.1 : « el mes pasado » ferme le temps → indefinido. ella + -ar → -ó : llamó." },
        { text: "Son las seis de la tarde y hoy yo ___ (escribir) cinco correos.", blanks: [["he escrito"]],
          why: "Rappel A2.3 : « hoy » (journée presque finie) → perfecto : he escrito (participe irrégulier). Le contexte « son las seis de la tarde » exclut le futur." }
      ]
    },
    {
      id: "reading", num: "III", title: "Comprensión escrita", titleFr: "Compréhension écrite",
      points: 15, skill: "ce", type: "mcq",
      instructions: "Lee el texto y elige la respuesta correcta.",
      instructionsFr: "Lis le texte et choisis la bonne réponse.",
      passage: "Pedro tiene muchos planes para el próximo mes. El lunes hablará con su jefe y pedirá una semana de vacaciones. Si el jefe dice que sí, Pedro y su novia viajarán a Granada en tren.\n\nDentro de dos semanas llegarán al hotel y visitarán la Alhambra. Seguramente comerán en un restaurante típico y volverán a casa el domingo. Si llueve, se quedarán en el hotel y leerán un libro.\n\nPedro está contento: «¡Ya verás qué viaje!», dice a su novia. Pero ella no está segura: «Ya veremos».",
      items: [
        { q: "¿Con quién hablará Pedro el lunes?", qFr: "Avec qui Pedro parlera-t-il lundi ?",
          opts: ["Con su novia", "Con su jefe", "Con su hermana"], correct: 1,
          why: "« El lunes hablará con su jefe ». Il demandera une semaine de vacances. La petite amie voyagera avec lui, mais ce n'est pas l'interlocutrice du lundi." },
        { q: "¿Cómo viajarán a Granada?", qFr: "Comment voyageront-ils jusqu'à Grenade ?",
          opts: ["En avión", "En autobús", "En tren"], correct: 2,
          why: "« viajarán a Granada en tren ». Le texte ne mentionne ni l'avion ni le bus." },
        { q: "¿Qué harán si llueve?", qFr: "Que feront-ils s'il pleut ?",
          opts: ["Se quedarán en el hotel y leerán.", "Visitarán la Alhambra.", "Volverán a casa."], correct: 0,
          why: "« Si llueve, se quedarán en el hotel y leerán un libro » (si + présent, futur). Ils rentreront le dimanche, quel que soit le temps." },
        { q: "¿Qué condición hay para hacer el viaje?", qFr: "Quelle condition y a-t-il pour faire le voyage ?",
          opts: ["Que no llueva.", "Que el jefe dé las vacaciones.", "Que la novia compre los billetes."], correct: 1,
          why: "« Si el jefe dice que sí, … viajarán » : sans accord du chef pour les vacances, pas de voyage. La pluie ne change que le programme." },
        { q: "¿Cómo reacciona la novia?", qFr: "Comment réagit la petite amie ?",
          opts: ["Está muy contenta.", "Dice que no quiere viajar.", "No está segura."], correct: 2,
          why: "« ella no está segura: Ya veremos » = elle n'est pas sûre, on verra. Elle n'a pas dit non." }
      ]
    },
    {
      id: "listening", num: "IV", title: "Comprensión oral", titleFr: "Compréhension orale",
      points: 15, skill: "co", type: "mcq",
      instructions: "Escucha cada audio y elige la respuesta correcta.",
      instructionsFr: "Écoute chaque enregistrement et choisis la bonne réponse.",
      items: [
        { audio: "Buenos días. Mañana habrá sol en el sur, pero en el norte lloverá por la tarde. El domingo hará frío en todo el país.",
          q: "¿Qué tiempo habrá mañana en el norte?", qFr: "Quel temps fera-t-il demain dans le nord ?",
          opts: ["Habrá sol.", "Lloverá por la tarde.", "Hará frío."], correct: 1,
          why: "« en el norte lloverá por la tarde ». Le soleil est pour le sud ; le froid, pour dimanche." },
        { audio: [{ who: "A", text: "¿Qué vas a hacer este fin de semana?" }, { who: "B", text: "El sábado iré a la playa. Si llueve, me quedaré en casa." }],
          q: "¿Qué hará B si llueve?", qFr: "Que fera B s'il pleut ?",
          opts: ["Irá a la playa.", "Trabajará.", "Se quedará en casa."], correct: 2,
          why: "« Si llueve, me quedaré en casa ». La plage, c'est le plan s'il fait beau." },
        { audio: [{ who: "A", text: "¿Podrá usted enviar la información mañana?" }, { who: "B", text: "Por supuesto. La enviaré por correo antes de las diez." }],
          q: "¿Cuándo enviará B la información?", qFr: "Quand B enverra-t-il l'information ?",
          opts: ["Mañana, antes de las diez", "Hoy por la tarde", "Dentro de una semana"], correct: 0,
          why: "A demande « mañana » et B répond « antes de las diez » : demain avant dix heures. Piège : ne pas confondre avec « hoy »." },
        { audio: "Mi hermana vendrá a Madrid dentro de dos días. Saldrá de París en tren y llegará por la noche. Yo la esperaré en la estación.",
          q: "¿Cuándo vendrá la hermana?", qFr: "Quand la sœur viendra-t-elle ?",
          opts: ["Dentro de dos días", "Hace dos días", "Dentro de dos semanas"], correct: 0,
          why: "« dentro de dos días » = dans deux jours (futur). « hace dos días » = il y a deux jours (passé) ; et ce sont bien des jours, pas des semaines." },
        { audio: [{ who: "A", text: "¿Dónde está Luis?" }, { who: "B", text: "No lo sé. Estará en casa, o quizás en la oficina." }],
          q: "¿Qué sabe B?", qFr: "Que sait B ?",
          opts: ["Que Luis está en casa.", "Que Luis está en la oficina.", "No sabe dónde está Luis."], correct: 2,
          why: "« No lo sé » : B suppose seulement (futur de probabilité « estará » + « quizás »). Aucune des deux places n'est certaine." }
      ]
    },
    {
      id: "writing", num: "V", title: "Expresión escrita", titleFr: "Expression écrite",
      points: 20, skill: "ee", type: "ai-text",
      instructions: "Escribe un correo de 70 a 110 palabras.",
      instructionsFr: "Écris un e-mail de 70 à 110 mots.",
      prompt: "Escribe un correo a un amigo sobre tus planes para el próximo mes o para las próximas vacaciones. Di adónde irás, con quién, qué harás, cuándo saldrás y qué harás si llueve (o si hace buen tiempo). Usa el futuro simple y, si quieres, también «ir a».",
      promptFr: "Écris un e-mail à un ami sur tes projets pour le mois prochain ou les prochaines vacances. Dis où tu iras, avec qui, ce que tu feras, quand tu partiras et ce que tu feras s'il pleut (ou s'il fait beau). Utilise le futur simple et, si tu veux, aussi « ir a ».",
      minWords: 70, maxWords: 110,
      rubric: "Total 20 points. Task achievement (6 pts): the email states where the learner will go, with whom, what they will do, when they will leave, and what they will do in a conditional situation (si llueve / si hace sol); about 1.2 pt per element; deduct proportionally for missing ones. Grammar (7 pts): correct futuro simple (infinitive + é, ás, á, emos, éis, án) with at least four different verbs, including at least two irregular ones (iré, haré, tendré, saldré, vendré, podré, diré, habrá, pondré). One correct 'si + present, future' sentence is expected (e.g. 'Si llueve, nos quedaremos…'). Deduct about 1 pt per 2 errors (e.g. 'hacerá', 'tenerá', 'si lloverá', a wrong radical counts as an error). Ir a + infinitive is accepted as an alternative for at most two verbs. Vocabulary and markers (4 pts): mañana, la semana que viene, el próximo mes, dentro de…, seguramente, quizás, ya veremos, etc. Coherence (3 pts): clear organisation, greeting and closing, natural tone. Accents: missing accents are only lightly penalised (max −1 in total). Length: deduct up to 2 pts if clearly under 50 words or over 140 words.",
      reference: "Hola, Miguel. El próximo mes iré a Granada con mi hermana. Saldremos el viernes por la mañana en tren y llegaremos por la tarde. Haremos muchas cosas: visitaremos la Alhambra, comeremos en un restaurante típico y pasearemos por la ciudad. Si llueve, nos quedaremos en el hotel y leeremos. Seguramente tendré mucho calor, pero será un viaje genial. Dentro de unos días te enviaré fotos. ¿Vendrás con nosotros? Ya veremos. Un abrazo."
    },
    {
      id: "speaking", num: "VI", title: "Expresión oral", titleFr: "Expression orale",
      points: 15, skill: "eo", type: "ai-oral",
      instructions: "Habla durante unos 45 segundos. Usa el futuro.",
      instructionsFr: "Parle pendant environ 45 secondes. Utilise le futur.",
      prompt: "Habla de tus planes para el próximo fin de semana y para las próximas vacaciones. Di qué harás, adónde irás, con quién y qué harás si llueve. Usa mañana, la semana que viene o dentro de…",
      promptFr: "Parle de tes projets pour le prochain week-end et pour les prochaines vacances. Dis ce que tu feras, où tu iras, avec qui et ce que tu feras s'il pleut. Utilise mañana, la semana que viene ou dentro de…",
      targetSeconds: 45,
      rubric: "Total 15 points. Content (5 pts): talks about the next weekend AND the next holidays; says what they will do, where they will go, with whom, and what they will do if it rains (1 pt each). Grammar (5 pts): correct futuro simple with at least four different verbs, including at least two irregular ones (iré, haré, tendré, saldré, vendré, podré…); one 'si + present, future' sentence. Deduct about 1 pt per 2 errors (wrong radical, 'si lloverá'). Ir a + infinitive is accepted for at most two verbs. Markers (3 pts): uses at least two of mañana, la semana que viene, el próximo mes, dentro de…, seguramente, quizás. Fluency (2 pts): understandable, reasonably continuous speech. Pronunciation cannot be judged precisely from a transcript: judge content, forms and apparent fluency only; ignore missing accents and transcription artefacts.",
      reference: "El sábado iré al mercado con mi hijo y haremos la compra. Por la tarde veremos una película en casa. El domingo saldré a correr y después comeremos con mis padres. Si llueve, nos quedaremos en casa y jugaremos a las cartas. Las próximas vacaciones viajaré a Portugal. Tendré una semana libre y visitaré Lisboa. Seguramente haré mucho calor, pero lo pasaré muy bien."
    }
  ]
};


// ---- 217.js ----
E[217] = {
  code: "A2.5", level: "A2",
  title: "Examen A2.5 – Cuando era niño…: el pretérito imperfecto",
  titleFr: "Examen A2.5 – Cuando era niño… : le pretérito imperfecto",
  objective: "Aprobar el nivel A2.5: imperfecto regular (-aba, -ía), irregulares (era, iba, veía), hábitos, descripciones, edad, hora y tiempo en el pasado.",
  objectiveFr: "Valider le niveau A2.5 : imparfait régulier (-aba, -ía), irréguliers (era, iba, veía), habitudes, descriptions, âge, heure et météo au passé.",
  sections: [
    {
      id: "vocab", num: "I", title: "Vocabulario", titleFr: "Vocabulaire",
      points: 15, skill: "vo", type: "fill",
      instructions: "Completa cada frase con una palabra de la lista. Hay palabras que no necesitas.",
      instructionsFr: "Complète chaque phrase avec un mot de la liste. Certains mots ne servent pas.",
      bank: ["colegio", "jardín", "pueblo", "antes", "abuelos", "todos", "mientras", "había", "ayer", "anoche", "hubo"],
      items: [
        { text: "Cuando yo era niño, iba al ___ en autobús.",
          blanks: [["colegio"]],
          why: "« ir al colegio » = aller à l'école. « al » = a + el : nom masculin." },
        { text: "Mis abuelos tenían un ___ grande con flores y árboles.",
          blanks: [["jardín"]],
          why: "« un jardín » = un jardin (masculin, accent écrit sur le í)." },
        { text: "Vivíamos en un ___ pequeño, cerca del mar.",
          blanks: [["pueblo"]],
          why: "« un pueblo » = un village. C'est un nom masculin qui peut être « pequeño »." },
        { text: "___ todo era más fácil: no teníamos móvil.",
          blanks: [["antes", "Antes"]],
          why: "« antes » = autrefois, avant : c'est le marqueur typique de l'imparfait (souvenir / habitude). « ayer » ferait attendre un indefinido." },
        { text: "Los domingos comíamos con mis ___: ellos cocinaban muy bien.",
          blanks: [["abuelos"]],
          why: "« mis abuelos » = mes grands-parents (pluriel : « ellos cocinaban »)." },
        { text: "Yo jugaba al fútbol ___ los días después del colegio.",
          blanks: [["todos"]],
          why: "« todos los días » = tous les jours : expression de l'habitude, donc imparfait (jugaba)." },
        { text: "Mi madre cocinaba ___ yo hacía los deberes.",
          blanks: [["mientras"]],
          why: "« mientras » = pendant que, relie deux actions parallèles à l'imparfait (cocinaba / hacía)." },
        { text: "En mi pueblo no ___ cine, pero teníamos un parque grande.",
          blanks: [["había"]],
          why: "« había » = il y avait : il décrit le décor (imparfait). « hubo » = il y a eu, pour un événement (« hubo una fiesta »)." }
      ]
    },
    {
      id: "grammar", num: "II", title: "Gramática y conjugación", titleFr: "Grammaire et conjugaison",
      points: 20, skill: "cj", type: "fill",
      instructions: "Escribe el verbo entre paréntesis en la forma correcta. Escribe solo la palabra que falta.",
      instructionsFr: "Écris le verbe entre parenthèses à la forme correcte. Tape seulement le mot manquant.",
      items: [
        { text: "Antes yo ___ (vivir) en Madrid, pero ahora vivo en Lyon.", blanks: [["vivía"]],
          why: "« antes » + opposition avec « ahora » → imparfait : vivía. -ir → -ía (avec accent écrit sur le í)." },
        { text: "Mi abuela ___ (ser) muy simpática y siempre cocinaba para todos.", blanks: [["era"]],
          why: "Description d'une personne → imparfait de ser : era. « fue » exprimerait un bilan fini." },
        { text: "Todos los días nosotros ___ (jugar) en el jardín.", blanks: [["jugábamos"]],
          why: "habitude (« todos los días ») → imparfait. jugar garde son radical : jugábamos (accent sur -ábamos), pas « juegábamos »." },
        { text: "Cuando yo era niño, mis padres ___ (trabajar) en un banco.", blanks: [["trabajaban"]],
          why: "ellos → -aban : trabajaban. Description de la situation d'une époque." },
        { text: "¿Dónde ___ tú (vivir) de niño?", blanks: [["vivías"]],
          why: "tú → -ías : vivías. « de niño » = quand tu étais enfant → imparfait." },
        { text: "De niños, cada verano nosotros ___ (ir) a la playa.", blanks: [["íbamos"]],
          why: "ir est irrégulier à l'imparfait : iba, ibas, iba, íbamos, ibais, iban. Pas de « ir + abamos »." },
        { text: "Cada noche ellos ___ (ver) la tele juntos.", blanks: [["veían"]],
          why: "ver est irrégulier à l'imparfait : veía, veías, veía, veíamos, veíais, veían. Le radical garde la e : « ve- »." },
        { text: "¿Qué ___ usted (hacer) los domingos cuando era niño?", blanks: [["hacía"]],
          why: "usted se conjugue comme él / ella : hacía. Aucune irrégularité de radical à l'imparfait (≠ « hizo », indefinido)." },
        { text: "Ayer yo ___ (comer) en casa de mi abuela.", blanks: [["comí"]],
          why: "Rappel A2.1 : « ayer » = un moment précis et fini → indefinido : comí. L'imparfait « comía » serait une habitude." },
        { text: "Todavía no ___ (terminar) nosotros el trabajo.", blanks: [["hemos terminado"]],
          why: "Rappel A2.3 : « todavía no » → pretérito perfecto : hemos terminado." }
      ]
    },
    {
      id: "reading", num: "III", title: "Comprensión escrita", titleFr: "Compréhension écrite",
      points: 15, skill: "ce", type: "mcq",
      instructions: "Lee el texto y elige la respuesta correcta.",
      instructionsFr: "Lis le texte et choisis la bonne réponse.",
      passage: "Cuando Pablo era niño, vivía en un pueblo pequeño cerca de las montañas. Su casa tenía un jardín grande y sus abuelos vivían muy cerca. Todos los días iba al colegio andando con su hermana.\n\nPor la tarde, jugaban en el jardín mientras su abuela cocinaba. Los domingos, toda la familia comía junta. En invierno hacía mucho frío, pero en verano hacía calor y todos iban a la piscina. Su abuelo era alto y simpático y siempre hablaba de su juventud.\n\nHoy Pablo vive en una ciudad grande y dice: «Antes todo era más sencillo».",
      items: [
        { q: "¿Dónde vivía Pablo de niño?", qFr: "Où vivait Pablo quand il était enfant ?",
          opts: ["En una ciudad grande", "En un pueblo cerca de las montañas", "En un pueblo cerca del mar"], correct: 1,
          why: "« vivía en un pueblo pequeño cerca de las montañas ». La grande ville, c'est là où il vit aujourd'hui." },
        { q: "¿Cómo iba Pablo al colegio?", qFr: "Comment Pablo allait-il à l'école ?",
          opts: ["En autobús", "En coche con su abuelo", "Andando con su hermana"], correct: 2,
          why: "« iba al colegio andando con su hermana » : andando = à pied. Le bus n'est pas mentionné." },
        { q: "¿Qué hacía la abuela por la tarde?", qFr: "Que faisait la grand-mère l'après-midi ?",
          opts: ["Cocinaba.", "Jugaba en el jardín.", "Iba a la piscina."], correct: 0,
          why: "« jugaban en el jardín mientras su abuela cocinaba » : les enfants jouaient, la grand-mère cuisinait." },
        { q: "¿Qué frase es verdadera?", qFr: "Quelle phrase est vraie ?",
          opts: ["En verano hacía frío.", "Los domingos comían todos juntos.", "El abuelo era bajo y serio."], correct: 1,
          why: "« Los domingos, toda la familia comía junta ». En été il faisait chaud (« hacía calor »), et le grand-père était « alto y simpático »." },
        { q: "¿Qué piensa Pablo hoy?", qFr: "Que pense Pablo aujourd'hui ?",
          opts: ["Que su vida actual es más sencilla.", "Que antes todo era más difícil.", "Que antes todo era más sencillo."], correct: 2,
          why: "« Antes todo era más sencillo » : il regrette son enfance. L'option « más difícil » dit l'inverse." }
      ]
    },
    {
      id: "listening", num: "IV", title: "Comprensión oral", titleFr: "Compréhension orale",
      points: 15, skill: "co", type: "mcq",
      instructions: "Escucha cada audio y elige la respuesta correcta.",
      instructionsFr: "Écoute chaque enregistrement et choisis la bonne réponse.",
      items: [
        { audio: "Cuando yo tenía diez años, vivía en un pueblo. Mi padre trabajaba en un banco y mi madre cocinaba para todos.",
          q: "¿Qué hacía el padre?", qFr: "Que faisait le père ?",
          opts: ["Cocinaba para todos.", "Trabajaba en un banco.", "Vivía en una ciudad."], correct: 1,
          why: "« Mi padre trabajaba en un banco ». C'est la mère qui cuisinait (« mi madre cocinaba »)." },
        { audio: [{ who: "A", text: "¿Dónde vivías de niña?" }, { who: "B", text: "Vivía en una ciudad grande, pero en verano íbamos al pueblo de mis abuelos." }],
          q: "¿Adónde iba B en verano?", qFr: "Où allait B en été ?",
          opts: ["Al pueblo de sus abuelos", "A la playa", "A una ciudad grande"], correct: 0,
          why: "« en verano íbamos al pueblo de mis abuelos ». La ville est l'endroit où elle vivait le reste de l'année." },
        { audio: [{ who: "A", text: "¿Qué hacía usted los domingos?" }, { who: "B", text: "Comía con mi familia y después jugaba al fútbol con mis primos." }],
          q: "¿Qué hacía B después de comer?", qFr: "Que faisait B après le repas ?",
          opts: ["Veía la tele.", "Dormía.", "Jugaba al fútbol."], correct: 2,
          why: "« después jugaba al fútbol con mis primos ». Le déjeuner en famille précède le foot." },
        { audio: "Eran las ocho de la noche y llovía mucho. Yo estaba en casa con mi hermana. Veíamos una película y comíamos pizza.",
          q: "¿Qué tiempo hacía?", qFr: "Quel temps faisait-il ?",
          opts: ["Hacía calor.", "Hacía mucho sol.", "Llovía mucho."], correct: 2,
          why: "« llovía mucho » (imparfait de llover). Il était 20 h : ce n'est pas la météo du jour." },
        { audio: [{ who: "A", text: "Antes todo era más fácil, ¿no?" }, { who: "B", text: "Sí, no teníamos móvil y jugábamos en la calle todos los días." }],
          q: "¿Qué piensa B?", qFr: "Que pense B ?",
          opts: ["Que hoy la vida es más fácil.", "Que antes la vida era más fácil.", "Que antes no jugaban en la calle."], correct: 1,
          why: "B confirme (« Sí ») et explique : pas de portable, on jouait dans la rue. Il pense donc que la vie d'avant était plus facile." }
      ]
    },
    {
      id: "writing", num: "V", title: "Expresión escrita", titleFr: "Expression écrite",
      points: 20, skill: "ee", type: "ai-text",
      instructions: "Escribe un texto de 80 a 120 palabras.",
      instructionsFr: "Écris un texte de 80 à 120 mots.",
      prompt: "Describe tu infancia. Di dónde vivías, cómo era tu casa o tu barrio, qué hacías todos los días y los fines de semana, y cómo era una persona importante para ti (tu abuela, tu padre, un amigo…). Usa el imperfecto.",
      promptFr: "Décris ton enfance. Dis où tu vivais, comment était ta maison ou ton quartier, ce que tu faisais tous les jours et le week-end, et comment était une personne importante pour toi (ta grand-mère, ton père, un ami…). Utilise l'imparfait.",
      minWords: 80, maxWords: 120,
      rubric: "Total 20 points. Task achievement (6 pts): the text says where the learner lived, describes the house or neighbourhood, describes daily habits, describes weekend habits, and describes one person (about 1.2 pt per element; deduct proportionally for missing ones). Grammar (7 pts): correct pretérito imperfecto: -aba / -ía endings (hablaba, comía, vivía, jugaba, hacía, tenía), irregular era/eras/éramos, iba/íbamos, veía; at least five different verbs including at least one of ser/ir/ver. Deduct about 1 pt per 2 errors (e.g. 'juegaba', 'comíba', 'fui' where 'iba' is needed for a habit, present tense instead of imperfect). Use of hay/había: había is a bonus. Vocabulary and markers (4 pts): antes, de niño/a, cuando era niño/a, todos los días, siempre, los domingos, mientras, normalmente + vocabulary of family, house, school, village. Coherence (3 pts): clear organisation in short paragraphs, natural flow, simple connectors. Accents: missing accents are only lightly penalised (max −1 in total). Length: deduct up to 2 pts if clearly under 60 words or over 160 words.",
      reference: "Cuando yo era niña, vivía en un pueblo pequeño cerca del mar. Mi casa era grande y tenía un jardín con muchas flores. Todos los días iba al colegio andando con mi hermano. Por la tarde jugábamos en el jardín mientras mi madre cocinaba. Los domingos comíamos en casa de mis abuelos. Mi abuela era muy simpática y siempre nos preparaba pastel. En verano hacía mucho calor y íbamos a la playa. Veíamos la tele juntos por la noche. ¡Qué tiempos aquellos!"
    },
    {
      id: "speaking", num: "VI", title: "Expresión oral", titleFr: "Expression orale",
      points: 15, skill: "eo", type: "ai-oral",
      instructions: "Habla durante unos 45 segundos. Usa el imperfecto.",
      instructionsFr: "Parle pendant environ 45 secondes. Utilise l'imparfait.",
      prompt: "Habla de tu vida cuando eras niño o niña. ¿Dónde vivías? ¿Cómo era tu casa? ¿Qué hacías todos los días? ¿Qué hacías los domingos? ¿Cómo era tu abuela, tu abuelo u otra persona?",
      promptFr: "Parle de ta vie quand tu étais enfant. Où vivais-tu ? Comment était ta maison ? Que faisais-tu tous les jours ? Que faisais-tu le dimanche ? Comment était ta grand-mère, ton grand-père ou une autre personne ?",
      targetSeconds: 45,
      rubric: "Total 15 points. Content (5 pts): answers the questions (where they lived, the house, daily habits, Sunday habits, one person); 1 pt each. Grammar (5 pts): correct pretérito imperfecto with at least five different verbs, including at least one irregular (era, iba, veía). Deduct about 1 pt per 2 errors (e.g. 'juegaba', present or indefinido instead of imperfect for a habit). Markers (3 pts): uses at least three of antes, de niño/a, cuando era niño/a, todos los días, siempre, los domingos, mientras, normalmente. Fluency (2 pts): understandable, reasonably continuous speech. Pronunciation cannot be judged precisely from a transcript: judge content, forms and apparent fluency only; ignore missing accents and transcription artefacts.",
      reference: "Cuando era niño, vivía en un pueblo cerca de la montaña. Mi casa era pequeña, pero tenía un jardín muy bonito. Todos los días iba al colegio con mi hermano y jugábamos en la calle. Los domingos comíamos con mis abuelos y mi abuela cocinaba paella. Mi abuelo era alto y muy simpático, y siempre veía el fútbol en la tele. Antes la vida era más sencilla."
    }
  ]
};


// ---- 218.js ----
E[218] = {
  code: "A2.6", level: "A2",
  title: "Examen A2.6 – Llovía cuando llegué: imperfecto e indefinido",
  titleFr: "Examen A2.6 – Llovía cuando llegué : imparfait et passé simple",
  objective: "Aprobar el nivel A2.6: elegir entre imperfecto (decorado, hábito) e indefinido (acontecimiento), estaba + gerundio, y los verbos que cambian de sentido (supe/sabía, pude/podía…).",
  objectiveFr: "Valider le niveau A2.6 : choisir entre imparfait (décor, habitude) et passé simple (événement), estaba + gérondif, et les verbes qui changent de sens (supe/sabía, pude/podía…).",
  sections: [
    {
      id: "vocab", num: "I", title: "Vocabulario", titleFr: "Vocabulaire",
      points: 15, skill: "vo", type: "fill",
      instructions: "Completa cada frase con una palabra o expresión de la lista. Hay palabras que no necesitas.",
      instructionsFr: "Complète chaque phrase avec un mot ou une expression de la liste. Certains mots ne servent pas.",
      bank: ["llamada", "de repente", "accidente", "ventana", "suelo", "susto", "por último", "ese", "ruido", "ayer", "nadie"],
      items: [
        { text: "Dormía cuando sonó el teléfono: era una ___ de mi madre.",
          blanks: [["llamada"]],
          why: "« una llamada » = un appel (féminin, d'où « una »). On dit « recibir una llamada »." },
        { text: "___, oí un ruido muy fuerte en el pasillo.",
          blanks: [["de repente"]],
          why: "« de repente » = soudain : mot-signal d'un événement, donc suivi du passé simple (oí)." },
        { text: "Había mucha gente en la calle porque hubo un ___ de coche.",
          blanks: [["accidente"]],
          why: "« un accidente de coche » = un accident de voiture. « hubo » (événement) + « había » (décor)." },
        { text: "Miré por la ___ y vi que llovía.",
          blanks: [["ventana"]],
          why: "« mirar por la ventana » = regarder par la fenêtre. Nom féminin : « la ventana »." },
        { text: "El vaso se rompió y cayó al ___.",
          blanks: [["suelo"]],
          why: "« al suelo » = par terre (a + el = al : masculin). Piège : « ventana » est féminin." },
        { text: "¡Qué ___! Pensé que había un ladrón, pero era solo el viento.",
          blanks: [["susto"]],
          why: "« ¡Qué susto! » = quelle frayeur ! Exclamation fréquente après une histoire (« ¡Qué susto! »)." },
        { text: "Primero comí, después salí y ___ volví a casa.",
          blanks: [["por último", "al final", "por fin"]],
          why: "« por último » (ou « al final ») = enfin, pour terminer la suite : primero, después, por último. « ayer » ne marque pas un ordre." },
        { text: "___ día llovía mucho y no salimos de casa.",
          blanks: [["ese", "Ese"]],
          why: "« ese día » = ce jour-là : il ouvre un récit dont le décor est à l'imparfait (llovía). « nadie » est un pronom, il ne peut pas précéder « día »." }
      ]
    },
    {
      id: "grammar", num: "II", title: "Gramática y conjugación", titleFr: "Grammaire et conjugaison",
      points: 20, skill: "cj", type: "fill",
      instructions: "Escribe el verbo entre paréntesis en la forma correcta (imperfecto o indefinido, según el sentido). Escribe solo la palabra que falta.",
      instructionsFr: "Écris le verbe entre parenthèses à la forme correcte (imparfait ou passé simple, selon le sens). Tape seulement le mot manquant.",
      items: [
        { text: "Dormía cuando ___ (sonar) el teléfono.", blanks: [["sonó"]],
          why: "L'événement qui interrompt une action en cours → indefinido : sonó (-ar, él → -ó)." },
        { text: "Cuando yo ___ (llegar) a casa, llovía mucho.", blanks: [["llegué"]],
          why: "« llegar » est l'événement (indefinido) ; « llovía » est le décor. yo + -gar → -gué." },
        { text: "Mientras mi madre ___ (preparar) la cena, yo veía la tele.", blanks: [["preparaba"]],
          why: "« mientras » = deux actions parallèles → deux imparfaits : preparaba / veía." },
        { text: "Ese día ___ (hacer) mucho frío.", blanks: [["hacía"]],
          why: "La météo est le décor → imparfait : hacía. « hizo » serait un fait ponctuel." },
        { text: "De repente, nosotros ___ (oír) un ruido.", blanks: [["oímos"]],
          why: "« de repente » → événement → indefinido : oímos (avec accent sur le í). L'imparfait serait « oíamos »." },
        { text: "Había mucha gente cuando Ana ___ (entrar) en la tienda.", blanks: [["entró"]],
          why: "« Había mucha gente » = décor (imparfait) ; l'entrée d'Ana est un événement ponctuel → entró." },
        { text: "Estaba ___ (cocinar) cuando llamó Ana.", blanks: [["cocinando"]],
          why: "estaba + gérondif = j'étais en train de… ; -ar → -ando : cocinando. Pas « cocinado » (participe)." },
        { text: "Ayer, de repente, yo ___ (saber) la noticia por mi hermana.", blanks: [["supe"]],
          why: "saber : « sabía » = je savais ; « supe » = j'ai appris, à un moment précis. Ici « de repente » → supe." },
        { text: "Nunca ___ (estar) yo en Perú.", blanks: [["he estado"]],
          why: "Rappel A2.3 : expérience de vie (« nunca ») → pretérito perfecto : he estado. Piège : « estuve » demanderait une date." },
        { text: "La semana que viene nosotros ___ (viajar) a Sevilla.", blanks: [["viajaremos"]],
          why: "Rappel A2.4 : futur simple, infinitif + emos : viajaremos (sans accent écrit à nosotros). « La semana que viene » = futur." }
      ]
    },
    {
      id: "reading", num: "III", title: "Comprensión escrita", titleFr: "Compréhension écrite",
      points: 15, skill: "ce", type: "mcq",
      instructions: "Lee el texto y elige la respuesta correcta.",
      instructionsFr: "Lis le texte et choisis la bonne réponse.",
      passage: "Era una noche de invierno y llovía mucho. Ana estaba sola en casa y leía un libro cuando, de repente, oyó un ruido en el pasillo. Dejó el libro, abrió la puerta y miró, pero no había nadie.\n\nEntonces oyó otro ruido en la cocina: un vaso se rompió en el suelo. Ana tenía miedo, pero entró en la cocina. ¡Era su gato! Estaba encima de la mesa y miraba por la ventana, que estaba abierta. Ana cerró la ventana y dio comida al gato. Al final, dijo: «¡Qué susto!».",
      items: [
        { q: "¿Qué hacía Ana cuando oyó el primer ruido?", qFr: "Que faisait Ana quand elle a entendu le premier bruit ?",
          opts: ["Leía un libro.", "Preparaba la cena.", "Dormía en su cama."], correct: 0,
          why: "« leía un libro cuando… oyó un ruido » : action en cours (imparfait) interrompue par l'événement (indefinido). Elle ne dormait pas." },
        { q: "¿Qué había en el pasillo?", qFr: "Qu'y avait-il dans le couloir ?",
          opts: ["Un gato", "Un vaso roto", "Nadie"], correct: 2,
          why: "« miró, pero no había nadie » : le couloir était vide. Le verre cassé était dans la cuisine, et le chat aussi." },
        { q: "¿Qué tiempo hacía esa noche?", qFr: "Quel temps faisait-il cette nuit-là ?",
          opts: ["Hacía mucho sol.", "Llovía mucho.", "Hacía mucho calor."], correct: 1,
          why: "« Era una noche de invierno y llovía mucho » : décor météo à l'imparfait." },
        { q: "¿Qué causó los ruidos?", qFr: "Qu'est-ce qui a causé les bruits ?",
          opts: ["Un ladrón", "El viento", "El gato"], correct: 2,
          why: "« ¡Era su gato! » : le chat était sur la table près de la fenêtre. Piège : « el viento » n'est jamais mentionné dans ce texte." },
        { q: "¿Cómo estaba la ventana?", qFr: "Dans quel état était la fenêtre ?",
          opts: ["Rota", "Abierta", "Cerrada"], correct: 1,
          why: "« la ventana, que estaba abierta » : elle était ouverte. C'est Ana qui l'a fermée ensuite (« cerró la ventana »)." }
      ]
    },
    {
      id: "listening", num: "IV", title: "Comprensión oral", titleFr: "Compréhension orale",
      points: 15, skill: "co", type: "mcq",
      instructions: "Escucha cada audio y elige la respuesta correcta.",
      instructionsFr: "Écoute chaque enregistrement et choisis la bonne réponse.",
      items: [
        { audio: "Ayer comía en un restaurante cuando, de repente, entró mi jefe. Yo no sabía qué decir, pero al final hablamos y todo salió bien.",
          q: "¿Qué hacía el hablante cuando entró el jefe?", qFr: "Que faisait le locuteur quand le chef est entré ?",
          opts: ["Hablaba con su jefe.", "Trabajaba en la oficina.", "Comía en un restaurante."], correct: 2,
          why: "« comía en un restaurante cuando… entró mi jefe » : action en cours (imparfait). La conversation avec le chef vient après (« al final hablamos »)." },
        { audio: [{ who: "A", text: "¿Qué pasó anoche? Te llamé y no contestaste." }, { who: "B", text: "Dormía cuando llamaste. Estaba muy cansada." }],
          q: "¿Por qué no contestó B?", qFr: "Pourquoi B n'a-t-elle pas répondu ?",
          opts: ["Porque dormía.", "Porque estaba en la calle.", "Porque no tenía móvil."], correct: 0,
          why: "« Dormía cuando llamaste » : elle dormait (imparfait) au moment de l'appel. Elle était fatiguée." },
        { audio: [{ who: "A", text: "¿Qué hacía usted cuando llegó la policía?" }, { who: "B", text: "Estaba en la cocina. Oí un golpe y salí al pasillo." }],
          q: "¿Dónde estaba B cuando llegó la policía?", qFr: "Où était B quand la police est arrivée ?",
          opts: ["En el pasillo", "En la cocina", "En la calle"], correct: 1,
          why: "« Estaba en la cocina » (décor). Elle est sortie dans le couloir ensuite, après avoir entendu un coup (« oí un golpe y salí »)." },
        { audio: "Un día, cuando yo tenía diez años, perdí el tren. Llovía y no había nadie en la estación. Mi padre llegó a las ocho y volvimos a casa.",
          q: "¿Quién llegó a las ocho?", qFr: "Qui est arrivé à huit heures ?",
          opts: ["El tren", "Su madre", "Su padre"], correct: 2,
          why: "« Mi padre llegó a las ocho ». Le train, il l'avait perdu (« perdí el tren »)." },
        { audio: [{ who: "A", text: "¡Qué fuerte! ¿Y tú pudiste hablar con él?" }, { who: "B", text: "No, no pude. Hablé con su secretaria y me dijo que no estaba." }],
          q: "¿Pudo B hablar con él?", qFr: "B a-t-il pu lui parler ?",
          opts: ["Sí, habló con él.", "No, habló con su secretaria.", "Sí, pero solo un momento."], correct: 1,
          why: "« no pude » = je n'y suis pas arrivé (pude = j'ai réussi ; no pude = j'ai échoué). Il a parlé à la secrétaire." }
      ]
    },
    {
      id: "writing", num: "V", title: "Expresión escrita", titleFr: "Expression écrite",
      points: 20, skill: "ee", type: "ai-text",
      instructions: "Escribe una historia de 80 a 120 palabras.",
      instructionsFr: "Écris une histoire de 80 à 120 mots.",
      prompt: "Cuenta una historia en la que pasó algo inesperado (un ruido, una llamada, un pequeño accidente…). Describe primero el decorado (tiempo, lugar, qué hacías) con el imperfecto, y cuenta después los acontecimientos con el indefinido. Usa «de repente», «entonces» y «al final».",
      promptFr: "Raconte une histoire où il s'est passé quelque chose d'inattendu (un bruit, un appel, un petit accident…). Décris d'abord le décor (temps, lieu, ce que tu faisais) à l'imparfait, puis raconte les événements au passé simple. Utilise « de repente », « entonces » et « al final ».",
      minWords: 80, maxWords: 120,
      rubric: "Total 20 points. Task achievement (6 pts): the story has a clear setting (weather, place, what the learner was doing), at least two events, and an ending (about 2 pts each). Grammar (8 pts): correct contrast imperfecto / indefinido. At least three imperfect forms for the setting (era, estaba, llovía, hacía, había, tenía, leía, dormía…) AND at least three indefinido forms for the events (sonó, oí, abrí, entré, llegó, vi, fui…). The 'estaba + gerundio' structure is a bonus, not required. Deduct about 1 pt per 2 errors: wrong tense choice (e.g. 'sonaba el teléfono' for a sudden event, 'dormí cuando sonó' for an ongoing action), wrong forms ('hací', 'tuvió', 'oyé'), or 'hubo' / 'había' confusion. Vocabulary and connectors (3 pts): de repente, entonces, cuando, mientras, un día, al final, por último, ese día + story vocabulary (ruido, llamada, susto, ventana…). Coherence (3 pts): logical order, clear paragraphs, natural storytelling. Accents: missing accents are only lightly penalised (max −1 in total). Length: deduct up to 2 pts if clearly under 60 words or over 160 words.",
      reference: "Ese sábado hacía mucho frío y llovía en toda la ciudad. Yo estaba sola en casa y veía una película cuando, de repente, sonó el teléfono. Era mi hermana, que estaba muy nerviosa. Había un accidente en su calle y no podía salir de casa. Entonces cogí el abrigo y salí corriendo. Cuando llegué, había mucha gente y la policía ya estaba allí. Mi hermana lloraba, pero no tenía nada grave. La abracé y entramos en casa. Al final, cenamos juntas y hablamos hasta las once. ¡Qué susto!"
    },
    {
      id: "speaking", num: "VI", title: "Expresión oral", titleFr: "Expression orale",
      points: 15, skill: "eo", type: "ai-oral",
      instructions: "Habla durante unos 45 segundos. Mezcla imperfecto e indefinido.",
      instructionsFr: "Parle pendant environ 45 secondes. Mélange imparfait et passé simple.",
      prompt: "Cuenta un recuerdo: un día en que pasó algo importante o divertido. Describe cómo era el día (tiempo, lugar, qué hacías) y qué pasó. Usa «de repente», «entonces» y «al final».",
      promptFr: "Raconte un souvenir : un jour où il s'est passé quelque chose d'important ou de drôle. Décris comment était la journée (temps, lieu, ce que tu faisais) et ce qui s'est passé. Utilise « de repente », « entonces » et « al final ».",
      targetSeconds: 45,
      rubric: "Total 15 points. Content (5 pts): clear setting (weather, place, what the learner was doing), at least two events, and an ending (about 1.5 pt each for setting, events, ending, plus 0.5 pt for a personal reaction such as '¡Qué susto!'). Grammar (5 pts): correct contrast imperfecto / indefinido, with at least three imperfect forms for the setting and three indefinido forms for the events. Deduct about 1 pt per 2 errors (wrong tense choice, wrong forms). 'Estaba + gerundio' is a bonus. Connectors (3 pts): uses at least three of de repente, entonces, cuando, mientras, un día, al final, por último, ese día. Fluency (2 pts): understandable, reasonably continuous speech. Pronunciation cannot be judged precisely from a transcript: judge content, forms and apparent fluency only; ignore missing accents and transcription artefacts.",
      reference: "Un día, cuando tenía diez años, estaba en la playa con mis primos. Hacía mucho sol y jugábamos con la pelota. De repente, la pelota cayó en el mar. Entonces mi primo entró en el agua y la buscó, pero no la encontró. Al final, un hombre nos dio otra pelota y todos estuvimos muy contentos. ¡Fue un día genial!"
    }
  ]
};


// ---- 219.js ----
E[219] = {
  code: "A2.7", level: "A2",
  title: "Examen de nivel: A2.7 – Comparar y elegir",
  titleFr: "Contrôle de niveau : A2.7 – Comparer et choisir",
  objective: "Aprobar el nivel A2.7: comparar con más / menos / tan… como, usar mejor / peor / mayor / menor, formar el superlativo y la forma -ísimo.",
  objectiveFr: "Valider le niveau A2.7 : comparer avec más / menos / tan… como, utiliser mejor / peor / mayor / menor, former le superlatif et la forme en -ísimo.",
  sections: [
    // ---------------------------------------------------------------- I
    {
      id: "vocab", num: "I", title: "Vocabulario para comparar", titleFr: "Vocabulaire pour comparer",
      points: 15, skill: "vo", type: "fill",
      instructions: "Completa las frases con una palabra de la lista. Cambia la forma si es necesario. Hay palabras que no necesitas.",
      instructionsFr: "Complète les phrases avec un mot de la liste. Change la forme si nécessaire. Certains mots ne servent pas.",
      bank: ["barrio", "barato", "ciudad", "campo", "cómodo", "ruidoso", "precio", "tranquilo", "peligroso", "lento", "sueldo"],
      items: [
        { text: "Vivo en un ___ muy tranquilo, cerca del parque.",
          blanks: [["barrio"]],
          why: "« un barrio » = un quartier (masculin). « Ciudad » est féminin et ne va pas avec « un »." },
        { text: "El tren cuesta 20 euros y el avión 80: el tren es mucho más ___.",
          blanks: [["barato"]],
          why: "Le tren coûte moins cher : « barato » (bon marché). « más barato que » = moins cher que." },
        { text: "En la ___ hay mucho ruido, pero en el campo hay silencio.",
          blanks: [["ciudad"]],
          why: "L'opposition « la ciudad / el campo » : le bruit est en ville. « La » demande un nom féminin." },
        { text: "Prefiero vivir en el ___: hay árboles y animales.",
          blanks: [["campo"]],
          why: "« el campo » = la campagne (arbres, animaux). Masculin, donc « el »." },
        { text: "Esta cama es muy ___: duermo muy bien.",
          blanks: [["cómoda"]],
          why: "« cama » est féminin : l'adjectif s'accorde → « cómoda » (confortable). On dort bien, donc pas « incómoda »." },
        { text: "El centro es muy ___ por la noche: hay música y coches.",
          blanks: [["ruidoso"]],
          why: "Musique + voitures = « ruidoso » (bruyant). « Tranquilo » dirait le contraire." },
        { text: "El ___ del billete es muy alto: cuesta 200 euros.",
          blanks: [["precio"]],
          why: "« el precio » = le prix (un precio alto). « Sueldo » = le salaire, qui ne convient pas pour un billet." },
        { text: "Vivo en una calle muy ___: no hay coches y los niños juegan fuera.",
          blanks: [["tranquila"]],
          why: "Pas de voitures : « tranquila » (calme). « calle » est féminin, donc l'adjectif prend -a." }
      ]
    },
    // --------------------------------------------------------------- II
    {
      id: "grammar", num: "II", title: "Gramática: comparar", titleFr: "Grammaire : comparer",
      points: 20, skill: "gr", type: "fill",
      instructions: "Completa cada frase con la palabra o la forma correcta. Cuando hay un verbo entre paréntesis, escríbelo en el tiempo que necesitas.",
      instructionsFr: "Complète chaque phrase avec le mot ou la forme correcte. Quand un verbe est entre parenthèses, écris-le au temps qu'il faut.",
      items: [
        { text: "El autobús es ___ rápido que el tren: tarda más tiempo. (moins)",
          blanks: [["menos"]],
          why: "Il met plus de temps, donc il est moins rapide : « menos + adjectif + que »." },
        { text: "Mi hermana y yo medimos 1,70 m: ella es ___ alta como yo. (aussi)",
          blanks: [["tan"]],
          why: "Égalité avec un adjectif : « tan + adjectif + como ». « Tan » est invariable." },
        { text: "En mi clase hay ___ chicas como chicos. (autant de)",
          blanks: [["tantas"]],
          why: "Égalité devant un nom : « tanto/a/os/as + nom + como ». « Chicas » est féminin pluriel → « tantas »." },
        { text: "Este hotel es bueno, pero el del centro es ___. (bueno → comparatif)",
          blanks: [["mejor"]],
          why: "« bueno » devient « mejor » (jamais « más bueno » pour la qualité)." },
        { text: "Tengo 30 años y mi hermano tiene 35: mi hermano es ___ que yo. (plus âgé)",
          blanks: [["mayor"]],
          why: "Pour l'âge : « mayor » (plus âgé). Pas de « más » devant : « más mayor » est incorrect." },
        { text: "Es el hotel más caro ___ ciudad.",
          blanks: [["de la"]],
          why: "Après un superlatif on dit « de » (jamais « que ») : « de la ciudad »." },
        { text: "En la fiesta había más ___ cincuenta personas.",
          blanks: [["de"]],
          why: "Devant un chiffre : « más de » (plus de cinquante), pas « más que »." },
        { text: "Este coche cuesta 90 000 euros: es ___. (caro + -ísimo)",
          blanks: [["carísimo"]],
          why: "Superlatif absolu : « caro » → « carísimo ». Il remplace « muy caro » : on ne dit pas « muy carísimo »." },
        { text: "El año pasado ___ (viajar, yo) a Perú con mis padres.",
          blanks: [["viajé"]],
          why: "Rappel A2.1 : « el año pasado » → passé simple (indefinido) : viajar → viajé." },
        { text: "Cuando era niña, ___ (vivir, yo) en el campo.",
          blanks: [["vivía"]],
          why: "Rappel A2.5 : habitude ou décor dans l'enfance → imparfait : vivir → vivía." }
      ]
    },
    // -------------------------------------------------------------- III
    {
      id: "reading", num: "III", title: "Comprensión escrita", titleFr: "Compréhension écrite",
      points: 15, skill: "ce", type: "mcq",
      instructions: "Lee el texto y elige la respuesta correcta.",
      instructionsFr: "Lis le texte et choisis la bonne réponse.",
      passage: "Daniel busca trabajo y tiene dos ofertas.\n\nLa primera oferta es de una empresa grande en Madrid. El sueldo es más alto, pero el trabajo es menos interesante y tiene que viajar mucho. La segunda oferta es de una empresa pequeña en Valencia. El sueldo es un poco más bajo, pero hay tantas vacaciones como en la empresa grande y la oficina está cerca de la playa.\n\nDaniel habla con su padre. «Creo que Valencia es mejor —dice el padre—. Vivir cerca del mar es lo mejor.» Daniel no está seguro: en Madrid vive su hermana mayor. Al final, decide pedir más información a las dos empresas.",
      items: [
        { q: "¿Qué tiene la oferta de Madrid?", qFr: "Qu'a l'offre de Madrid ?",
          opts: ["Un sueldo más alto", "Un trabajo más interesante", "Menos viajes", "Una oficina cerca de la playa"], correct: 0,
          why: "« El sueldo es más alto » : le salaire est plus élevé à Madrid. Piège : le travail y est « menos interesante », et c'est Valence qui est près de la plage." },
        { q: "¿Qué es verdad sobre las vacaciones?", qFr: "Qu'est-ce qui est vrai sur les vacances ?",
          opts: ["Hay más vacaciones en Valencia", "Hay menos vacaciones en Valencia", "El texto no habla de vacaciones", "Hay tantas vacaciones en las dos empresas"], correct: 3,
          why: "« Hay tantas vacaciones como en la empresa grande » = autant de vacances. Piège : « tantas… como » exprime l'égalité, pas « más » ni « menos »." },
        { q: "¿Quién vive en Madrid?", qFr: "Qui vit à Madrid ?",
          opts: ["El padre de Daniel", "La hermana de Daniel", "El jefe de Daniel"], correct: 1,
          why: "« En Madrid vive su hermana mayor » : sa sœur aînée. Le père donne seulement son avis." },
        { q: "¿Qué piensa el padre?", qFr: "Que pense le père ?",
          opts: ["Que Madrid es mejor", "Que las dos ofertas son iguales", "Que Valencia es mejor"], correct: 2,
          why: "« Creo que Valencia es mejor » : « mejor » = meilleur. Le père préfère Valence, pas Madrid." },
        { q: "¿Qué decide Daniel al final?", qFr: "Que décide Daniel à la fin ?",
          opts: ["Pedir más información", "Aceptar la oferta de Madrid", "Aceptar la oferta de Valencia", "Buscar otro trabajo"], correct: 0,
          why: "« Decide pedir más información a las dos empresas ». Il n'accepte aucune offre tout de suite : « no está seguro »." }
      ]
    },
    // --------------------------------------------------------------- IV
    {
      id: "listening", num: "IV", title: "Comprensión oral", titleFr: "Compréhension orale",
      points: 15, skill: "co", type: "mcq",
      instructions: "Escucha el audio y elige la respuesta correcta. El texto aparece después de la corrección.",
      instructionsFr: "Écoute l'audio et choisis la bonne réponse. Le texte apparaît après la correction.",
      items: [
        { audio: [{ who: "A", text: "Quiero comprar un móvil. ¿Cuál es mejor?" }, { who: "B", text: "Este cuesta trescientos euros y es muy bueno. Aquel cuesta ciento cincuenta euros, pero es peor." }],
          q: "¿Qué móvil es más barato?", qFr: "Quel téléphone est le moins cher ?",
          opts: ["El de trescientos euros", "Los dos cuestan igual", "El de ciento cincuenta euros"], correct: 2,
          why: "« Aquel cuesta ciento cincuenta euros » : 150 € < 300 €. Piège : « el mejor » (300 €) n'est pas le moins cher." },
        { audio: "Mi hermano Pablo tiene veinte años y yo tengo veintitrés. Él es más alto que yo, pero yo soy mayor.",
          q: "¿Quién es mayor?", qFr: "Qui est le plus âgé ?",
          opts: ["La persona que habla", "Pablo", "Tienen la misma edad"], correct: 0,
          why: "« Yo soy mayor » : 23 ans contre 20. Piège : Pablo est « más alto » (plus grand de taille), pas plus âgé." },
        { audio: [{ who: "A", text: "¿Vamos en tren o en autobús?" }, { who: "B", text: "El tren es más rápido y más cómodo, pero cuesta más de treinta euros. El autobús cuesta quince." }, { who: "A", text: "Entonces vamos en autobús." }],
          q: "¿Qué transporte eligen?", qFr: "Quel transport choisissent-ils ?",
          opts: ["El tren", "El autobús", "El avión"], correct: 1,
          why: "« Entonces vamos en autobús » : plus cher en train (« más de treinta euros »), 15 € en bus. L'avion n'est pas mentionné." },
        { audio: "Esta ciudad es grandísima. Hay tantos museos como en Madrid, pero es menos ruidosa.",
          q: "¿Cómo es la ciudad?", qFr: "Comment est la ville ?",
          opts: ["Muy grande y menos ruidosa", "Pequeña y muy ruidosa", "Más pequeña que Madrid"], correct: 0,
          why: "« Grandísima » = très, très grande ; « menos ruidosa » = moins bruyante. Piège : « tantos museos como Madrid » = autant de musées, pas une ville plus petite." },
        { audio: [{ who: "A", text: "Buenas tardes. Busco un hotel cerca de la playa." }, { who: "B", text: "¿Cuál prefiere usted, el hotel Luna o el hotel Mar? El hotel Mar es más caro, pero está al lado de la playa." }, { who: "A", text: "No importa, prefiero el hotel Mar." }],
          q: "¿Qué es verdad sobre el hotel Mar?", qFr: "Qu'est-ce qui est vrai sur l'hôtel Mar ?",
          opts: ["Es más barato que el hotel Luna", "Es el hotel más ruidoso", "Es más caro, pero está al lado de la playa"], correct: 2,
          why: "« Es más caro, pero está al lado de la playa ». Piège : le client le choisit malgré le prix, donc il n'est pas « más barato »." }
      ]
    },
    // ---------------------------------------------------------------- V
    {
      id: "writing", num: "V", title: "Expresión escrita", titleFr: "Expression écrite",
      points: 20, skill: "ee", type: "ai-text",
      instructions: "Escribe un mensaje de 60 a 90 palabras.",
      instructionsFr: "Écris un message de 60 à 90 mots.",
      prompt: "Un amigo español quiere saber qué ciudad es mejor para vivir: la ciudad donde vives tú y otra ciudad que conoces. Escríbele un mensaje: compara las dos ciudades (tamaño, precios, ruido, transporte…) y di cuál prefieres. Usa al menos cuatro comparaciones diferentes (más… que, menos… que, tan… como, mejor, peor, el más… de…).",
      promptFr: "Un ami espagnol veut savoir quelle ville est la meilleure pour vivre : celle où tu habites et une autre que tu connais. Écris-lui un message : compare les deux villes (taille, prix, bruit, transports…) et dis laquelle tu préfères. Utilise au moins quatre comparaisons différentes (más… que, menos… que, tan… como, mejor, peor, el más… de…).",
      minWords: 60, maxWords: 90,
      rubric: "Total 20 points. Task achievement (6 pts): the message compares two cities on at least two criteria AND states a preference (2 pts for the comparison of two cities, 2 pts for at least two criteria, 2 pts for a stated preference with a reason); at least 4 different comparisons expected. Grammar (7 pts): accurate use of the A2.7 forms: más/menos + adjective + que (1.5), tan + adjective + como or tanto/a/os/as + noun + como (1.5), the irregular forms mejor/peor/mayor/menor with NO 'más' (1.5), superlative with 'de' (el/la más… de la ciudad) or -ísimo (1.5), 'más de' before a number or correct adjective agreement (1). Do not give credit for the wrong forms 'más mejor', 'más mayor', 'más que + number', 'muy carísimo'. Vocabulary (4 pts): relevant vocabulary (barrio, precio, ruidoso, tranquilo, caro, barato, transporte…), some variety, no heavy repetition. Coherence and spelling (3 pts): clear organisation (greeting, comparisons, conclusion), connectors, general spelling. Missing accents are only lightly penalised (max −1 in total); do not penalise the absence of ¿ ¡. Length: if far below 60 words, cap Task achievement at 3 pts. Written in Spanish only (no French) or deduct up to 3 pts.",
      reference: "Hola Pablo: Comparo París y Lyon. París es más grande que Lyon y tiene más museos, pero es mucho más ruidosa y los pisos son carísimos. Lyon es más tranquila y menos cara. Hay tantos restaurantes buenos como en París. El transporte es mejor en París, pero el barrio donde vivo en Lyon es el más cómodo de la ciudad. Mi hermano mayor dice que Lyon es la mejor ciudad de Francia. En mi opinión, prefiero Lyon porque es más tranquila. ¿Y tú, qué ciudad prefieres? Un abrazo, Ana."
    },
    // --------------------------------------------------------------- VI
    {
      id: "speaking", num: "VI", title: "Expresión oral", titleFr: "Expression orale",
      points: 15, skill: "eo", type: "ai-oral",
      instructions: "Habla durante aproximadamente un minuto.",
      instructionsFr: "Parle pendant environ une minute.",
      prompt: "Tu amigo no sabe si viajar en tren o en avión a Sevilla. Compara los dos medios de transporte (precio, velocidad, comodidad) y dile cuál prefieres y por qué. Usa al menos cinco comparaciones.",
      promptFr: "Ton ami ne sait pas s'il doit voyager en train ou en avion jusqu'à Séville. Compare les deux moyens de transport (prix, vitesse, confort) et dis-lui lequel tu préfères et pourquoi. Utilise au moins cinq comparaisons.",
      targetSeconds: 60,
      rubric: "Total 15 points. Task achievement (4 pts): compares train and plane on at least three criteria (price, speed, comfort) and gives a preference with a reason. Grammar (5 pts): correct A2.7 forms: más/menos… que, tan… como, tanto/a/os/as… como, mejor/peor without 'más', el más… de, -ísimo, 'más de' + number; 1 pt lost per type of recurrent error (e.g. 'más mejor'). Vocabulary (3 pts): relevant and varied (caro, barato, rápido, cómodo, precio, billete, aeropuerto/estación…). Fluency and coherence (3 pts): continuous speech, logical order, connectors (pero, además, por eso). The text is an automatic transcription of the microphone: do NOT judge pronunciation finely and do not penalise missing accents or punctuation. If far shorter than about 30 seconds of speech (under ~40 words), cap the total at 8 pts.",
      reference: "Creo que el tren es mejor que el avión para ir a Sevilla. El avión es más rápido, pero el tren es mucho más cómodo y menos caro. Un billete de tren cuesta menos de cincuenta euros y el avión es carísimo. Además, la estación está más cerca del centro que el aeropuerto. En el tren hay tanto espacio como en un salón. Por eso, prefiero el tren: es lo mejor para viajar tranquilo."
    }
  ]
};


// ---- 220.js ----
E[220] = {
  code: "A2.8", level: "A2",
  title: "Examen de nivel: A2.8 – Lo veo, le doy, me gusta",
  titleFr: "Contrôle de niveau : A2.8 – Je le vois, je lui donne, ça me plaît",
  objective: "Aprobar el nivel A2.8: usar los pronombres lo / la / los / las y me / te / le…, combinar dos pronombres (se lo) y usar gustar y encantar.",
  objectiveFr: "Valider le niveau A2.8 : utiliser les pronoms COD et COI (lo / la / los / las, me / te / le…), combiner deux pronoms (se lo) et employer gustar et encantar.",
  sections: [
    // ---------------------------------------------------------------- I
    {
      id: "vocab", num: "I", title: "Vocabulario: tiendas, regalos y verbos", titleFr: "Vocabulaire : magasins, cadeaux et verbes",
      points: 15, skill: "vo", type: "fill",
      instructions: "Completa las frases con una palabra de la lista. Cambia la forma del verbo si es necesario. Hay palabras que no necesitas.",
      instructionsFr: "Complète les phrases avec un mot de la liste. Change la forme du verbe si nécessaire. Certains mots ne servent pas.",
      bank: ["regalo", "especialidad", "encantar", "prestar", "enviar", "explicar", "interesar", "escribir", "bolso", "molestar", "recomendar"],
      items: [
        { text: "Busco un ___ para mi madre: es su cumpleaños.",
          blanks: [["regalo"]],
          why: "« un regalo » = un cadeau (masculin). Un anniversaire → on cherche un cadeau." },
        { text: "Me ___ el chocolate: ¡lo adoro!",
          blanks: [["encanta"]],
          why: "« encantar » fonctionne comme gustar : la chose qui plaît est le sujet singulier (el chocolate) → « me encanta »." },
        { text: "La paella es la ___ de la casa.",
          blanks: [["especialidad"]],
          why: "« la especialidad de la casa » = la spécialité de la maison (nom féminin, d'où « la »)." },
        { text: "¿Me ___ tu libro? Lo necesito para el examen.",
          blanks: [["prestas"]],
          why: "« prestar » = prêter ; avec « tu libro » on tutoie → « prestas » (tú). « Me » est le COI : à moi." },
        { text: "Mañana te ___ el documento por correo electrónico.",
          blanks: [["envío"]],
          why: "« enviar » → « envío » (yo) : l'accent sur le í. « Te » est le COI : je t'envoie." },
        { text: "Mi profesor nos ___ la lección con muchos ejemplos.",
          blanks: [["explica"]],
          why: "« explicar » à la 3e personne du singulier : « explica ». « Nos » = à nous (COI)." },
        { text: "Me ___ la historia: leo muchos libros sobre Roma.",
          blanks: [["interesa"]],
          why: "« interesar » fonctionne comme gustar : « la historia » est singulier → « me interesa »." },
        { text: "Voy a ___ una carta a mi abuela.",
          blanks: [["escribir", "enviar"]],
          why: "Après « voy a » on met l'infinitif : « escribir » (écrire) ou « enviar » (envoyer) conviennent tous les deux pour une lettre." }
      ]
    },
    // --------------------------------------------------------------- II
    {
      id: "grammar", num: "II", title: "Gramática: los pronombres y gustar", titleFr: "Grammaire : les pronoms et gustar",
      points: 20, skill: "gr", type: "fill",
      instructions: "Completa cada frase con el pronombre, la palabra o la forma verbal correcta.",
      instructionsFr: "Complète chaque phrase avec le pronom, le mot ou la forme verbale correcte.",
      items: [
        { text: "—¿Lees el periódico? —Sí, ___ leo cada mañana.",
          blanks: [["lo"]],
          why: "« el periódico » est masculin singulier → COD « lo » (placé avant le verbe)." },
        { text: "—¿Compras la camisa? —Sí, ___ compro.",
          blanks: [["la"]],
          why: "« la camisa » est féminin singulier → COD « la »." },
        { text: "Mi hermana cumple años: ___ doy un regalo.",
          blanks: [["le"]],
          why: "« Doy un regalo a ella » : à qui ? C'est un COI de 3e personne → « le » (jamais « la » ici)." },
        { text: "—¿Le das el libro a Luis? —Sí, ___ lo doy mañana.",
          blanks: [["se"]],
          why: "Deux pronoms de 3e personne : « le + lo » devient « se lo » (on ne dit jamais « le lo »)." },
        { text: "Me ___ (gustar) las películas de aventuras.",
          blanks: [["gustan"]],
          why: "Avec gustar, le verbe s'accorde avec la chose qui plaît : « las películas » est pluriel → « gustan »." },
        { text: "A mis padres ___ gusta viajar en tren.",
          blanks: [["les"]],
          why: "COI pluriel de 3e personne : « a mis padres » → « les gusta » (« le » serait pour une seule personne)." },
        { text: "—Me encanta el cine. —A mí ___.",
          blanks: [["también"]],
          why: "« A mí también » = moi aussi (accord avec une phrase affirmative). Pour le négatif on dirait « tampoco »." },
        { text: "Llamo ___ mi madre cada domingo.",
          blanks: [["a"]],
          why: "Devant un COD qui est une personne, on met « a » : « llamo a mi madre »." },
        { text: "Cuando ___ (vivir, yo) en Madrid, comía siempre en casa.",
          blanks: [["vivía"]],
          why: "Rappel A2.5 : une habitude du passé → imparfait : vivir → « vivía »." },
        { text: "Hoy ___ (llamar, yo) a mi médico.",
          blanks: [["he llamado"]],
          why: "Rappel A2.3 : « hoy » → pretérito perfecto : he + participe (llamar → llamado)." }
      ]
    },
    // -------------------------------------------------------------- III
    {
      id: "reading", num: "III", title: "Comprensión escrita", titleFr: "Compréhension écrite",
      points: 15, skill: "ce", type: "mcq",
      instructions: "Lee el texto y elige la respuesta correcta.",
      instructionsFr: "Lis le texte et choisis la bonne réponse.",
      passage: "Es el cumpleaños de Lucía y su amigo Carlos busca un regalo. Entra en una librería y habla con la dependienta.\n\n—Buenos días. ¿En qué puedo ayudarle? —pregunta ella.\n—Busco un libro para una amiga. Le encanta la historia, pero no le gustan las novelas largas.\n—Le recomiendo este libro sobre Roma. Es corto y muy interesante.\n—Perfecto, me lo llevo. ¿Me lo puede envolver?\n—Claro. Se lo envuelvo ahora mismo.\n\nCarlos paga y sale contento. Por la noche, en la fiesta, le da el libro a Lucía. Ella lo abre y dice: «¡Me encanta! Gracias».",
      items: [
        { q: "¿Qué busca Carlos en la librería?", qFr: "Que cherche Carlos à la librairie ?",
          opts: ["Un libro para él", "Un regalo para Lucía", "Una novela larga", "Un libro de cocina"], correct: 1,
          why: "« Busco un libro para una amiga » : c'est un cadeau pour Lucía. Piège : il ne cherche pas un livre pour lui." },
        { q: "¿Qué no le gusta a Lucía?", qFr: "Qu'est-ce que Lucía n'aime pas ?",
          opts: ["La historia", "Los libros sobre Roma", "Las novelas largas"], correct: 2,
          why: "« No le gustan las novelas largas ». Piège : la histoire lui plaît (« le encanta la historia »)." },
        { q: "¿Qué le recomienda la dependienta?", qFr: "Que lui recommande la vendeuse ?",
          opts: ["Un libro corto sobre Roma", "Una novela larga", "Un libro de historia de España", "Un bolso"], correct: 0,
          why: "« Le recomiendo este libro sobre Roma. Es corto y muy interesante. »" },
        { q: "En «Se lo envuelvo ahora mismo», ¿qué es «lo»?", qFr: "Dans « Se lo envuelvo ahora mismo », que représente « lo » ?",
          opts: ["La dependienta", "Carlos", "El libro"], correct: 2,
          why: "« lo » est le COD : le livre (« ¿Me lo puede envolver? »). « Se » remplace « le » = à Carlos (le + lo → se lo)." },
        { q: "¿Cuándo le da Carlos el libro a Lucía?", qFr: "Quand Carlos donne-t-il le livre à Lucía ?",
          opts: ["En la librería", "Por la mañana", "No se lo da", "Por la noche, en la fiesta"], correct: 3,
          why: "« Por la noche, en la fiesta, le da el libro a Lucía ». Piège : à la librairie il paie seulement." }
      ]
    },
    // --------------------------------------------------------------- IV
    {
      id: "listening", num: "IV", title: "Comprensión oral", titleFr: "Compréhension orale",
      points: 15, skill: "co", type: "mcq",
      instructions: "Escucha el audio y elige la respuesta correcta. El texto aparece después de la corrección.",
      instructionsFr: "Écoute l'audio et choisis la bonne réponse. Le texte apparaît après la correction.",
      items: [
        { audio: [{ who: "A", text: "¿Te gusta el café?" }, { who: "B", text: "Me encanta, pero no lo tomo por la noche." }],
          q: "¿Cuándo no toma café B?", qFr: "Quand B ne boit-il pas de café ?",
          opts: ["Por la mañana", "Por la tarde", "Por la noche"], correct: 2,
          why: "« No lo tomo por la noche » : « lo » = el café. Piège : il adore le café (« me encanta »), mais pas le soir." },
        { audio: "Mi hermano me presta su coche los fines de semana, pero los lunes lo necesita él.",
          q: "¿Cuándo le presta el coche su hermano?", qFr: "Quand son frère lui prête-t-il la voiture ?",
          opts: ["Los fines de semana", "Los lunes", "Todos los días"], correct: 0,
          why: "« Me presta su coche los fines de semana ». Le lundi, il en a besoin lui-même (« lo necesita él »)." },
        { audio: [{ who: "A", text: "¿Le gusta este bolso, señora?" }, { who: "B", text: "Sí, me encanta. Me lo llevo." }],
          q: "¿Qué hace la clienta?", qFr: "Que fait la cliente ?",
          opts: ["No compra el bolso", "Pregunta el precio", "Compra el bolso"], correct: 2,
          why: "« Me lo llevo » = je le prends (lo = el bolso). Elle ne demande pas le prix et elle l'aime (« me encanta »)." },
        { audio: [{ who: "A", text: "¿Llamas a Ana hoy?" }, { who: "B", text: "Sí, la llamo esta tarde y le doy las entradas." }],
          q: "¿Qué hace B esta tarde?", qFr: "Que fait B cet après-midi ?",
          opts: ["Llama a Ana y le da las entradas", "Compra entradas para Ana", "Recibe una llamada de Ana"], correct: 0,
          why: "« La llamo » (la = Ana, COD) et « le doy las entradas » (le = à Ana, COI). B appelle, il ne reçoit pas d'appel." },
        { audio: [{ who: "A", text: "A mí me gusta el cine, ¿y a ti?" }, { who: "B", text: "A mí también, pero no me gustan las películas largas." }],
          q: "¿Qué no le gusta a B?", qFr: "Qu'est-ce que B n'aime pas ?",
          opts: ["El cine", "Las películas largas", "Las películas cortas"], correct: 1,
          why: "« No me gustan las películas largas ». Piège : « a mí también » veut dire qu'il aime le cinéma." }
      ]
    },
    // ---------------------------------------------------------------- V
    {
      id: "writing", num: "V", title: "Expresión escrita", titleFr: "Expression écrite",
      points: 20, skill: "ee", type: "ai-text",
      instructions: "Escribe un mensaje de 60 a 90 palabras.",
      instructionsFr: "Écris un message de 60 à 90 mots.",
      prompt: "Es el cumpleaños de una persona de tu familia o de un amigo. Escribe un mensaje a otro amigo: di qué regalo vas a comprar, qué cosas le gustan o le encantan a esa persona, y cómo y cuándo se lo vas a dar. Usa pronombres (lo, la, le, se lo…) y al menos dos veces gustar o encantar.",
      promptFr: "C'est l'anniversaire d'un membre de ta famille ou d'un ami. Écris un message à un autre ami : dis quel cadeau tu vas acheter, ce que cette personne aime ou adore, et comment et quand tu vas le lui donner. Utilise des pronoms (lo, la, le, se lo…) et au moins deux fois gustar ou encantar.",
      minWords: 60, maxWords: 90,
      rubric: "Total 20 points. Task achievement (6 pts): names the gift (1.5), says what the person likes/loves (2 pts), says how and when the gift will be given (1.5), addresses the friend naturally (1 pt). Grammar (7 pts): correct A2.8 forms: direct object pronouns lo/la/los/las (1.5), indirect object pronouns me/te/le/les/nos (1.5), two pronouns with 'se lo/se la' (not 'le lo') (1.5), gustar/encantar agreeing with the thing liked (me gusta / me gustan, le encanta / le encantan) (1.5), pronoun position or 'a' before a person (1). Do not give credit for 'le lo', 'me gusta los libros', or a missing 'a' before a person direct object. Vocabulary (4 pts): relevant and varied (regalo, comprar, dar, enviar, gustar, encantar, interesar…). Coherence and spelling (3 pts): clear organisation, connectors, general spelling. Missing accents are lightly penalised (max −1 in total); do not penalise the absence of ¿ ¡. If far below 60 words, cap Task achievement at 3 pts. Written in Spanish only (French deducts up to 3 pts).",
      reference: "Hola Pablo: El sábado es el cumpleaños de mi madre y todavía no tengo su regalo. A mi madre le encantan los libros de cocina y también le gusta mucho el chocolate. Voy a comprar un libro sobre cocina italiana y una caja de chocolate. Los voy a envolver en casa. El sábado por la mañana se los doy en el desayuno. Creo que le van a gustar mucho. Y tú, ¿qué le regalas a tu padre? ¿Se lo has comprado ya? Un abrazo, Ana."
    },
    // --------------------------------------------------------------- VI
    {
      id: "speaking", num: "VI", title: "Expresión oral", titleFr: "Expression orale",
      points: 15, skill: "eo", type: "ai-oral",
      instructions: "Habla durante aproximadamente un minuto.",
      instructionsFr: "Parle pendant environ une minute.",
      prompt: "Estás en una tienda de regalos y hablas con la dependienta (usa «usted»). Explica qué regalo buscas, para quién es, qué le gusta a esa persona y pide ayuda. Usa pronombres: por ejemplo «¿Me lo puede enseñar?», «Me lo llevo», «Se lo doy mañana».",
      promptFr: "Tu es dans une boutique de cadeaux et tu parles à la vendeuse (vouvoiement). Explique quel cadeau tu cherches, pour qui il est, ce que cette personne aime, et demande de l'aide. Utilise des pronoms : par exemple « ¿Me lo puede enseñar? », « Me lo llevo », « Se lo doy mañana ».",
      targetSeconds: 60,
      rubric: "Total 15 points. Task achievement (4 pts): explains what gift is wanted, for whom, what the person likes, and asks for help or advice. Grammar (5 pts): correct A2.8 forms: direct pronouns lo/la/los/las, indirect pronouns me/le/les, two pronouns (me lo, se lo), gustar/encantar agreement, polite 'usted' forms (¿Me puede ayudar?, ¿Le gusta…?); 1 pt lost per type of recurrent error (e.g. 'le lo', 'me gusta los libros'). Vocabulary (3 pts): relevant and varied (regalo, bolso, libro, precio, recomendar, enseñar, llevarse…). Fluency and coherence (3 pts): continuous speech, logical order, polite register. The text is an automatic transcription of the microphone: do NOT judge pronunciation finely and do not penalise missing accents or punctuation. If under about 40 words, cap the total at 8 pts.",
      reference: "Buenos días. Busco un regalo para mi hermana, que cumple años mañana. Le encantan los bolsos y también le gusta mucho leer. ¿Me puede recomendar algo? Ah, ese bolso rojo me gusta. ¿Me lo puede enseñar, por favor? Es muy bonito. ¿Cuánto cuesta? Perfecto, me lo llevo. ¿Me lo puede envolver? Se lo doy mañana en su fiesta. Seguro que le va a encantar. Muchas gracias por su ayuda."
    }
  ]
};


// ---- 221.js ----
E[221] = {
  code: "A2.9", level: "A2",
  title: "Examen de nivel: A2.9 – Gire a la derecha",
  titleFr: "Contrôle de niveau : A2.9 – Tournez à droite",
  objective: "Aprobar el nivel A2.9: pedir y dar direcciones, usar el imperativo (usted y tú, afirmativo y negativo) y manejar el vocabulario de la ciudad y del viaje.",
  objectiveFr: "Valider le niveau A2.9 : demander et donner son chemin, utiliser l'impératif (usted et tú, affirmatif et négatif) et maîtriser le vocabulaire de la ville et du voyage.",
  sections: [
    // ---------------------------------------------------------------- I
    {
      id: "vocab", num: "I", title: "Vocabulario: ciudad y viaje", titleFr: "Vocabulaire : ville et voyage",
      points: 15, skill: "vo", type: "fill",
      instructions: "Completa las frases con una palabra de la lista. Hay palabras que no necesitas.",
      instructionsFr: "Complète les phrases avec un mot de la liste. Certains mots ne servent pas.",
      bank: ["derecha", "esquina", "semáforo", "billete", "andén", "retraso", "cerca", "maleta", "rotonda", "enfrente", "plaza"],
      items: [
        { text: "El banco está a la izquierda, no a la ___.",
          blanks: [["derecha"]],
          why: "L'opposition « a la izquierda / a la derecha » : à gauche, pas à droite." },
        { text: "El banco está en la ___ de la calle Mayor con la calle Sol.",
          blanks: [["esquina"]],
          why: "« la esquina » = le coin de la rue, là où deux rues se croisent. « Plaza » ne convient pas avec « de la calle… con la calle… »." },
        { text: "Cuando el ___ está en rojo, los coches paran.",
          blanks: [["semáforo"]],
          why: "« el semáforo » = le feu de circulation (rouge, vert). Masculin." },
        { text: "Quiero un ___ de ida y vuelta para Sevilla.",
          blanks: [["billete"]],
          why: "« un billete de ida y vuelta » = un billet aller-retour (en Espagne ; « boleto » en Amérique latine)." },
        { text: "El tren sale del ___ número tres.",
          blanks: [["andén"]],
          why: "« el andén » = le quai, où l'on prend le train." },
        { text: "El tren llega con diez minutos de ___.",
          blanks: [["retraso"]],
          why: "« con diez minutos de retraso » = avec dix minutes de retard." },
        { text: "Mi casa está muy ___ de la estación: son solo dos minutos andando.",
          blanks: [["cerca"]],
          why: "« muy cerca de » = très près de. Deux minutes à pied → proche. « Enfrente » ne se dit pas avec « muy »." },
        { text: "Llevo mi ___ al hotel: tiene toda mi ropa.",
          blanks: [["maleta"]],
          why: "« la maleta » = la valise (féminin). On y met les vêtements pour voyager." }
      ]
    },
    // --------------------------------------------------------------- II
    {
      id: "grammar", num: "II", title: "Gramática: el imperativo", titleFr: "Grammaire : l'impératif",
      points: 20, skill: "cj", type: "fill",
      instructions: "Escribe cada verbo en imperativo (usted o tú, según la frase). En las dos últimas frases, usa el tiempo que necesitas.",
      instructionsFr: "Écris chaque verbe à l'impératif (usted ou tú, selon la phrase). Dans les deux dernières phrases, utilise le temps qu'il faut.",
      items: [
        { text: "Perdone, ¿cómo llego al museo? —(Girar, usted) ___ a la derecha en el semáforo.",
          blanks: [["gire"]],
          why: "Impératif usted d'un verbe en -AR : on passe à -e : girar → « gire »." },
        { text: "(Seguir, usted) ___ todo recto hasta la plaza.",
          blanks: [["siga"]],
          why: "Impératif usted de seguir : radical de « yo sigo » + terminaison inversée -a → « siga »." },
        { text: "(Cruzar, tú) ___ la calle con cuidado, por favor.",
          blanks: [["cruza"]],
          why: "Impératif tú affirmatif = forme « él » du présent : cruzar → « cruza »." },
        { text: "Date prisa y (hacer, tú) ___ la maleta, por favor.",
          blanks: [["haz"]],
          why: "« hacer » est l'un des 8 irréguliers du tú affirmatif : « haz »." },
        { text: "(Venir, tú) ___ aquí, por favor.",
          blanks: [["ven"]],
          why: "« venir » est un irrégulier du tú affirmatif : « ven » (comme ve, sal, di, pon, ten, sé)." },
        { text: "No (hablar, tú) ___ tan rápido, no te entiendo.",
          blanks: [["hables"]],
          why: "Négatif tú : « no » + forme en -es pour les verbes en -AR : « no hables »." },
        { text: "Por favor, (escribir, usted) ___ su nombre aquí.",
          blanks: [["escriba"]],
          why: "Impératif usted d'un verbe en -IR : on passe à -a : escribir → « escriba »." },
        { text: "(Tomar, usted) ___ la segunda calle a la izquierda.",
          blanks: [["tome"]],
          why: "Impératif usted d'un verbe en -AR : tomar → « tome »." },
        { text: "—¿Me das el mapa? —Sí, ___ doy ahora mismo.",
          blanks: [["te lo"]],
          why: "Rappel A2.8 : deux pronoms, le COI d'abord, puis le COD : « te lo doy » (te = à toi, lo = el mapa)." },
        { text: "Ayer ___ (ir, yo) a la estación en autobús.",
          blanks: [["fui"]],
          why: "Rappel A2.2 : « ayer » → passé simple irrégulier de ir : « fui »." }
      ]
    },
    // -------------------------------------------------------------- III
    {
      id: "reading", num: "III", title: "Comprensión escrita", titleFr: "Compréhension écrite",
      points: 15, skill: "ce", type: "mcq",
      instructions: "Lee el texto y elige la respuesta correcta.",
      instructionsFr: "Lis le texte et choisis la bonne réponse.",
      passage: "Ana llega a Barcelona en tren y quiere ir a su hotel. En la estación pregunta a un señor.\n\n—Perdone, ¿cómo llego al hotel Mar?\n—Salga de la estación y siga todo recto hasta el semáforo. Allí gire a la izquierda y cruce la plaza. El hotel está al lado del banco. Está a diez minutos andando.\n—Muchas gracias.\n\nAna camina, pero en la plaza no ve el banco. Entonces pregunta a una chica:\n—Perdona, ¿me puedes ayudar?\n—Claro. Gira en la esquina, sigue recto y ya lo ves.",
      items: [
        { q: "¿Cómo llega Ana a Barcelona?", qFr: "Comment Ana arrive-t-elle à Barcelone ?",
          opts: ["En avión", "En autobús", "En tren"], correct: 2,
          why: "« Ana llega a Barcelona en tren ». Les autres moyens ne sont pas mentionnés." },
        { q: "Según el señor, ¿dónde tiene que girar a la izquierda?", qFr: "Selon le monsieur, où faut-il tourner à gauche ?",
          opts: ["En el semáforo", "En la esquina", "En la estación", "En el banco"], correct: 0,
          why: "« Siga todo recto hasta el semáforo. Allí gire a la izquierda ». La « esquina » est dans les indications de la jeune fille." },
        { q: "¿Dónde está el hotel Mar?", qFr: "Où est l'hôtel Mar ?",
          opts: ["Enfrente de la estación", "Al lado del banco", "En la plaza", "A cien metros del semáforo"], correct: 1,
          why: "« El hotel está al lado del banco » (à côté de la banque). Il n'est pas dans la place : on traverse la place pour y arriver." },
        { q: "¿Por qué Ana pregunta a una chica?", qFr: "Pourquoi Ana demande-t-elle à une jeune fille ?",
          opts: ["Quiere comprar un billete", "No encuentra el banco", "Quiere cambiar de hotel"], correct: 1,
          why: "« En la plaza no ve el banco » : elle ne trouve pas le repère. Piège : elle a déjà l'adresse de l'hôtel, elle ne veut pas en changer." },
        { q: "¿Qué diferencia hay entre las dos personas a las que habla Ana?", qFr: "Quelle différence y a-t-il entre les deux personnes à qui parle Ana ?",
          opts: ["Habla de «tú» al señor y de «usted» a la chica", "Habla de «tú» a los dos", "Habla de «usted» al señor y de «tú» a la chica"], correct: 2,
          why: "« Perdone » (usted) avec le monsieur, « Perdona, ¿me puedes ayudar? » (tú) avec la jeune fille. Le monsieur répond aussi avec l'impératif usted (« Salga, siga »), la fille avec tú (« Gira, sigue »)." }
      ]
    },
    // --------------------------------------------------------------- IV
    {
      id: "listening", num: "IV", title: "Comprensión oral", titleFr: "Compréhension orale",
      points: 15, skill: "co", type: "mcq",
      instructions: "Escucha el audio y elige la respuesta correcta. El texto aparece después de la corrección.",
      instructionsFr: "Écoute l'audio et choisis la bonne réponse. Le texte apparaît après la correction.",
      items: [
        { audio: [{ who: "A", text: "Perdone, ¿hay una farmacia cerca de aquí?" }, { who: "B", text: "Sí, siga todo recto y tome la segunda calle a la derecha. Está en la esquina." }],
          q: "¿Qué calle tiene que tomar?", qFr: "Quelle rue doit-il prendre ?",
          opts: ["La primera a la derecha", "La segunda a la derecha", "La segunda a la izquierda"], correct: 1,
          why: "« Tome la segunda calle a la derecha ». Piège : la pharmacie est « en la esquina » (au coin), pas dans la première rue." },
        { audio: "Atención, señores viajeros: el tren de Sevilla sale del andén cuatro con quince minutos de retraso.",
          q: "¿Qué pasa con el tren de Sevilla?", qFr: "Que se passe-t-il avec le train de Séville ?",
          opts: ["Sale con quince minutos de retraso", "Sale del andén quince", "Llega a las cuatro"], correct: 0,
          why: "« Con quince minutos de retraso » : le train est en retard. Le « cuatro » est le numéro du quai." },
        { audio: [{ who: "A", text: "Buenos días. Quiero un billete de ida y vuelta para Valencia." }, { who: "B", text: "Son treinta euros." }, { who: "A", text: "¿A qué hora sale el próximo tren?" }, { who: "B", text: "A las diez, del andén dos." }],
          q: "¿De qué andén sale el tren?", qFr: "De quel quai part le train ?",
          opts: ["Del andén diez", "Del andén tres", "Del andén dos"], correct: 2,
          why: "« A las diez, del andén dos » : dix est l'heure, deux est le quai. Trente est le prix." },
        { audio: [{ who: "A", text: "¡Date prisa, que perdemos el tren!" }, { who: "B", text: "Tranquilo, no te preocupes. Todavía tenemos diez minutos." }],
          q: "¿Qué dice B?", qFr: "Que dit B ?",
          opts: ["Que ya han perdido el tren", "Que hay tiempo", "Que el tren sale en un minuto"], correct: 1,
          why: "« No te preocupes. Todavía tenemos diez minutos » : il reste du temps. « No te preocupes » est un impératif négatif tú." },
        { audio: "Cruce la plaza, gire a la izquierda y siga recto. El museo está enfrente del banco.",
          q: "¿Dónde está el museo?", qFr: "Où est le musée ?",
          opts: ["Al lado de la plaza", "Detrás del banco", "Enfrente del banco"], correct: 2,
          why: "« El museo está enfrente del banco » : en face de la banque. Piège : « cruce la plaza » est une instruction de trajet, pas la place du musée." }
      ]
    },
    // ---------------------------------------------------------------- V
    {
      id: "writing", num: "V", title: "Expresión escrita", titleFr: "Expression écrite",
      points: 20, skill: "ee", type: "ai-text",
      instructions: "Escribe un mensaje de 60 a 90 palabras.",
      instructionsFr: "Écris un message de 60 à 90 mots.",
      prompt: "Un amigo español llega a tu ciudad en tren y no conoce el barrio. Escríbele un mensaje: explica cómo ir de la estación a tu casa (usa el imperativo de tú: gira, sigue, cruza…), dile dónde está tu casa (al lado de, enfrente de, cerca de…) y dile una cosa que no debe hacer (imperativo negativo: no…).",
      promptFr: "Un ami espagnol arrive dans ta ville en train et ne connaît pas le quartier. Écris-lui un message : explique comment aller de la gare à chez toi (impératif tú : gira, sigue, cruza…), dis où est ta maison (al lado de, enfrente de, cerca de…) et dis-lui une chose à ne pas faire (impératif négatif : no…).",
      minWords: 60, maxWords: 90,
      rubric: "Total 20 points. Task achievement (6 pts): gives a clear route from the station to the house with at least three steps (3 pts), says where the house is using at least one location expression (1.5 pts), gives one negative instruction (1.5 pts). Grammar (7 pts): correct affirmative imperative with tú (= 'él' form: gira, sigue, cruza; irregulars ven, ve, sal, haz, di, pon, ten, sé) (3 pts); correct negative imperative (no + -es for -AR, no + -as for -ER/-IR, e.g. 'no cruces', 'no vengas') (2 pts); consistent use of tú (not mixing in usted) (1 pt); correct agreement and prepositions (a la derecha, al lado del…) (1 pt). Do not give credit for the infinitive used as an imperative, nor for the affirmative form used in a negative ('no gira', 'no sigue'). Vocabulary (4 pts): relevant vocabulary (calle, esquina, semáforo, plaza, derecha, izquierda, todo recto, estación…), some variety. Coherence and spelling (3 pts): logical order of the steps (primero, después, al final), general spelling. Missing accents are lightly penalised (max −1 in total); do not penalise the absence of ¿ ¡. If far below 60 words, cap Task achievement at 3 pts. Written in Spanish only (French deducts up to 3 pts).",
      reference: "Hola Marta: ¡Qué bien que vienes! Sal de la estación y gira a la izquierda. Sigue recto hasta el semáforo y cruza la plaza. Después, toma la segunda calle a la derecha. Mi casa está al lado de una farmacia, enfrente del parque, a diez minutos andando. No cruces la calle con el semáforo en rojo y no te pierdas: si necesitas ayuda, llámame. Ven con tu maleta y come algo en casa. ¡Hasta mañana!"
    },
    // --------------------------------------------------------------- VI
    {
      id: "speaking", num: "VI", title: "Expresión oral", titleFr: "Expression orale",
      points: 15, skill: "eo", type: "ai-oral",
      instructions: "Habla durante aproximadamente un minuto.",
      instructionsFr: "Parle pendant environ une minute.",
      prompt: "Un turista te pregunta: «Perdone, ¿cómo llego a la estación desde aquí?». Explícale el camino con el imperativo de «usted» (gire, siga, cruce, tome…). Usa al menos cinco instrucciones, di dónde está la estación (al lado de, enfrente de…) y cuánto tiempo se tarda andando.",
      promptFr: "Un touriste te demande : « Excusez-moi, comment aller à la gare d'ici ? ». Explique-lui le chemin avec l'impératif de « usted » (gire, siga, cruce, tome…). Utilise au moins cinq instructions, dis où est la gare (al lado de, enfrente de…) et combien de temps il faut à pied.",
      targetSeconds: 60,
      rubric: "Total 15 points. Task achievement (4 pts): gives a coherent route with at least five instructions, says where the station is, and gives the walking time. Grammar (5 pts): correct imperative with usted (-AR → -e: gire, cruce, tome; -ER/-IR → -a; irregulars siga, salga, vaya if used) (3 pts); correct location expressions and prepositions (a la derecha, al lado del…) (1 pt); no mixing of tú forms such as 'gira', 'sigue' (1 pt). Vocabulary (3 pts): relevant and varied (calle, esquina, semáforo, plaza, derecha, izquierda, todo recto, minutos, estación). Fluency and coherence (3 pts): continuous speech, logical order (primero, luego, al final), polite register (por favor, de nada). The text is an automatic transcription of the microphone: do NOT judge pronunciation finely and do not penalise missing accents or punctuation. If under about 40 words, cap the total at 8 pts.",
      reference: "Claro, con mucho gusto. Salga de aquí y gire a la derecha. Siga todo recto hasta el semáforo. Allí cruce la plaza y tome la segunda calle a la izquierda. Suba por esa calle hasta la esquina. La estación está al lado de un banco, enfrente de un parque. Está a diez minutos andando. No se preocupe, es muy fácil. Que tenga un buen día."
    }
  ]
};


// ---- 222.js ----
E[222] = {
  code: "A2.10", level: "A2",
  title: "Examen de nivel: A2.10 – Me duele la cabeza",
  titleFr: "Contrôle de niveau : A2.10 – J'ai mal à la tête",
  objective: "Aprobar el nivel A2.10: hablar de la salud (doler, tener, estar), explicar desde cuándo, pedir una cita y entender consejos del médico.",
  objectiveFr: "Valider le niveau A2.10 : parler de sa santé (doler, tener, estar), dire depuis quand, prendre rendez-vous et comprendre les conseils du médecin.",
  sections: [
    // ---------------------------------------------------------------- I
    {
      id: "vocab", num: "I", title: "Vocabulario: el cuerpo y la salud", titleFr: "Vocabulaire : le corps et la santé",
      points: 15, skill: "vo", type: "fill",
      instructions: "Completa las frases con una palabra de la lista. Hay palabras que no necesitas.",
      instructionsFr: "Complète les phrases avec un mot de la liste. Certains mots ne servent pas.",
      bank: ["cabeza", "fiebre", "tos", "receta", "pastilla", "cita", "garganta", "farmacia", "espalda", "estómago", "mareado"],
      items: [
        { text: "Me duele la ___: no puedo pensar bien.",
          blanks: [["cabeza"]],
          why: "« me duele la cabeza » = j'ai mal à la tête. On pense avec la tête : « cabeza » est féminin, d'où « la »." },
        { text: "Tengo mucha ___: mi temperatura es de 39 grados.",
          blanks: [["fiebre"]],
          why: "39 degrés de température = « fiebre » (fièvre). « Tengo fiebre » s'emploie sans article." },
        { text: "Tengo ___ y toso todo el día.",
          blanks: [["tos"]],
          why: "« tengo tos » = je tousse (symptôme avec tener, sans article)." },
        { text: "Para comprar este medicamento necesito una ___ del médico.",
          blanks: [["receta"]],
          why: "« una receta » = une ordonnance. Le médecin la donne pour qu'on achète un médicament." },
        { text: "Tome una ___ cada ocho horas.",
          blanks: [["pastilla"]],
          why: "« una pastilla » = un comprimé, qu'on prend toutes les huit heures (« cada ocho horas »)." },
        { text: "Quiero pedir una ___ con el médico para el lunes.",
          blanks: [["cita"]],
          why: "« una cita » = un rendez-vous (médical). « pedir una cita » = prendre rendez-vous." },
        { text: "Estoy resfriado y me duele la ___ al hablar.",
          blanks: [["garganta"]],
          why: "Un rhume + douleur en parlant → « la garganta » (la gorge)." },
        { text: "Voy a la ___ a comprar el medicamento.",
          blanks: [["farmacia"]],
          why: "On achète les médicaments à « la farmacia » (la pharmacie)." }
      ]
    },
    // --------------------------------------------------------------- II
    {
      id: "grammar", num: "II", title: "Gramática: doler, desde hace y consejos", titleFr: "Grammaire : doler, desde hace et conseils",
      points: 20, skill: "gr", type: "fill",
      instructions: "Completa cada frase con la palabra o la forma correcta. Cuando hay un verbo entre paréntesis, escríbelo en el tiempo que necesitas.",
      instructionsFr: "Complète chaque phrase avec le mot ou la forme correcte. Quand un verbe est entre parenthèses, écris-le au temps qu'il faut.",
      items: [
        { text: "Me ___ la cabeza.",
          blanks: [["duele"]],
          why: "« doler » fonctionne comme gustar : « la cabeza » est singulier → « duele » (o → ue)." },
        { text: "A mi hijo le ___ los pies.",
          blanks: [["duelen"]],
          why: "« los pies » est pluriel → « duelen »." },
        { text: "Tengo tos ___ hace dos días.",
          blanks: [["desde"]],
          why: "« desde hace + durée » = depuis (deux jours). Le verbe reste au présent : la toux continue." },
        { text: "Hace tres días ___ no duermo bien.",
          blanks: [["que"]],
          why: "Structure « hace + durée + que + présent » : « hace tres días que no duermo bien » = cela fait trois jours que je ne dors pas bien." },
        { text: "¿Qué ___ pasa, señor?",
          blanks: [["le"]],
          why: "Avec « usted » (le médecin vouvoie son patient) : « ¿Qué le pasa? ». Avec tú ce serait « ¿Qué te pasa? »." },
        { text: "Si tiene fiebre, (descansar, usted) ___ en casa.",
          blanks: [["descanse"]],
          why: "Impératif usted d'un verbe en -AR : -ar → -e : descansar → « descanse »." },
        { text: "___ ir al médico: me duele mucho el estómago. (je dois)",
          blanks: [["tengo que"]],
          why: "« tener que + infinitif » exprime une nécessité personnelle : « tengo que ir al médico »." },
        { text: "Hay ___ beber mucha agua cuando hace calor. (il faut)",
          blanks: [["que"]],
          why: "« hay que + infinitif » = il faut (obligation générale). Ne pas confondre avec « tener que » (personnel)." },
        { text: "Esta semana ___ (estar, yo) enfermo.",
          blanks: [["he estado"]],
          why: "Rappel A2.3 : « esta semana » (période non terminée) → pretérito perfecto : he estado." },
        { text: "De niño, ___ (tener, yo) mucha tos en invierno.",
          blanks: [["tenía"]],
          why: "Rappel A2.5 : « de niño » + habitude répétée → imparfait : tener → « tenía »." }
      ]
    },
    // -------------------------------------------------------------- III
    {
      id: "reading", num: "III", title: "Comprensión escrita", titleFr: "Compréhension écrite",
      points: 15, skill: "ce", type: "mcq",
      instructions: "Lee el texto y elige la respuesta correcta.",
      instructionsFr: "Lis le texte et choisis la bonne réponse.",
      passage: "Pablo tiene un fuerte dolor de espalda desde hace una semana. Trabaja muchas horas sentado y por la noche no puede dormir bien. Hoy pide una cita con el médico y va al centro de salud.\n\n—Buenos días, Pablo. ¿Qué le pasa? —pregunta la médica.\n—Me duele mucho la espalda y estoy muy cansado.\n—Debe descansar y hacer un poco de ejercicio. Tome una pastilla dos veces al día, después de comer.\n—¿Necesito una receta?\n—Sí, aquí la tiene. No se preocupe, no es grave.",
      items: [
        { q: "¿Desde cuándo le duele la espalda a Pablo?", qFr: "Depuis quand Pablo a-t-il mal au dos ?",
          opts: ["Desde hace una semana", "Desde hoy", "Desde hace dos días", "Desde ayer"], correct: 0,
          why: "« Dolor de espalda desde hace una semana ». Hoy est seulement le jour de la consultation." },
        { q: "¿Qué problema tiene Pablo por la noche?", qFr: "Quel problème a Pablo la nuit ?",
          opts: ["Tiene fiebre", "Tiene tos", "Está mareado", "No duerme bien"], correct: 3,
          why: "« Por la noche no puede dormir bien ». Il n'est pas question de fièvre ni de toux." },
        { q: "¿Cuándo debe tomar la pastilla?", qFr: "Quand doit-il prendre le comprimé ?",
          opts: ["Cada ocho horas", "Una vez al día, por la mañana", "Dos veces al día, después de comer", "Antes de dormir"], correct: 2,
          why: "« Tome una pastilla dos veces al día, después de comer ». Piège : le texte ne dit pas « cada ocho horas » ni « una vez al día »." },
        { q: "¿Qué dice la médica sobre el problema?", qFr: "Que dit la médecin sur le problème ?",
          opts: ["Que es muy grave", "Que no es grave", "Que Pablo debe ir a urgencias"], correct: 1,
          why: "« No se preocupe, no es grave » : ce n'est pas grave. Elle vouvoie le patient (« no se preocupe », impératif négatif usted)." },
        { q: "Según el texto, ¿qué puede causar el dolor de Pablo?", qFr: "Selon le texte, qu'est-ce qui peut causer la douleur de Pablo ?",
          opts: ["Trabajar muchas horas sentado", "Hacer demasiado ejercicio", "Dormir demasiado"], correct: 0,
          why: "Déduction : « trabaja muchas horas sentado » et la médecin conseille « un poco de ejercicio ». Pablo ne fait donc pas trop d'exercice." }
      ]
    },
    // --------------------------------------------------------------- IV
    {
      id: "listening", num: "IV", title: "Comprensión oral", titleFr: "Compréhension orale",
      points: 15, skill: "co", type: "mcq",
      instructions: "Escucha el audio y elige la respuesta correcta. El texto aparece después de la corrección.",
      instructionsFr: "Écoute l'audio et choisis la bonne réponse. Le texte apparaît après la correction.",
      items: [
        { audio: [{ who: "A", text: "¿Qué te pasa?" }, { who: "B", text: "Me duelen los pies y estoy muy cansado." }],
          q: "¿Qué le duele a B?", qFr: "Qu'est-ce qui fait mal à B ?",
          opts: ["La cabeza", "Los pies", "La espalda"], correct: 1,
          why: "« Me duelen los pies » (pluriel → duelen). Il est aussi fatigué, mais la douleur est aux pieds." },
        { audio: [{ who: "A", text: "Quiero pedir una cita con el médico." }, { who: "B", text: "¿Para cuándo?" }, { who: "A", text: "Para mañana. Es urgente." }, { who: "B", text: "Tiene hora libre a las cuatro." }],
          q: "¿A qué hora es la cita?", qFr: "À quelle heure est le rendez-vous ?",
          opts: ["A las cuatro", "A las ocho", "A las nueve"], correct: 0,
          why: "« Tiene hora libre a las cuatro » : la cita est à quatre heures. « Mañana » est le jour, pas l'heure." },
        { audio: [{ who: "A", text: "Buenas tardes. Tengo tos y un poco de fiebre." }, { who: "B", text: "Tome esta pastilla cada ocho horas y beba mucha agua." }],
          q: "¿Cada cuánto tiempo debe tomar la pastilla?", qFr: "Toutes les combien de temps doit-il prendre le comprimé ?",
          opts: ["Una vez al día", "Cada cuatro horas", "Cada ocho horas"], correct: 2,
          why: "« Cada ocho horas » = toutes les huit heures. « Beba mucha agua » est un autre conseil (impératif usted)." },
        { audio: "Estoy enfermo desde el lunes. Tengo fiebre y me duele la garganta. Hoy es jueves.",
          q: "¿Desde cuándo está enfermo?", qFr: "Depuis quand est-il malade ?",
          opts: ["Desde hoy", "Desde el lunes", "Desde ayer"], correct: 1,
          why: "« Desde el lunes » : point de départ de la maladie ; « hoy es jueves » ne fait que situer le moment présent." },
        { audio: [{ who: "A", text: "¿Cómo se siente hoy?" }, { who: "B", text: "Mejor, pero todavía tengo tos." }, { who: "A", text: "Siga con las pastillas dos días más." }],
          q: "¿Cómo se siente el paciente?", qFr: "Comment se sent le patient ?",
          opts: ["Mejor, pero todavía tiene tos", "Peor que ayer", "Ya no tiene ningún síntoma"], correct: 0,
          why: "« Mejor, pero todavía tengo tos ». Piège : il n'est pas guéri puisque le médecin lui dit de continuer les comprimés." }
      ]
    },
    // ---------------------------------------------------------------- V
    {
      id: "writing", num: "V", title: "Expresión escrita", titleFr: "Expression écrite",
      points: 20, skill: "ee", type: "ai-text",
      instructions: "Escribe un mensaje de 60 a 90 palabras.",
      instructionsFr: "Écris un message de 60 à 90 mots.",
      prompt: "Estás enfermo/a y no puedes ir al trabajo. Escribe un correo a tu jefe/a: explica qué te duele, qué síntomas tienes (fiebre, tos…), desde cuándo estás así y qué vas a hacer (pedir una cita con el médico, descansar, ir a la farmacia…). Puedes usar «usted» o «tú».",
      promptFr: "Tu es malade et tu ne peux pas aller travailler. Écris un courriel à ton chef / ta cheffe : explique ce qui te fait mal, quels symptômes tu as (fièvre, toux…), depuis quand tu es dans cet état et ce que tu vas faire (prendre rendez-vous chez le médecin, te reposer, aller à la pharmacie…). Tu peux utiliser « usted » ou « tú ».",
      minWords: 60, maxWords: 90,
      rubric: "Total 20 points. Task achievement (6 pts): says what hurts (2 pts), names at least one other symptom (1 pt), says since when using 'desde hace', 'desde' or 'hace… que' (2 pts), says what he/she will do (1 pt). Grammar (7 pts): correct 'doler' (me duele + singular / me duelen + plural) (2 pts); 'tener' + symptom without article, e.g. 'tengo fiebre' (1.5 pts); 'estar' + adjective with agreement (estoy enfermo/a, resfriado/a) (1 pt); duration expressions 'desde hace + duration' / 'desde + date' / 'hace… que' with the verb in the present (1.5 pts); correct use of an obligation or advice structure (tengo que, debo, hay que) or a go-to-the-doctor plan (1 pt). Do not give credit for 'ser enfermo', 'tengo una fiebre', or 'desde hace' followed by a past tense for an ongoing situation. Vocabulary (4 pts): relevant and varied (cabeza, garganta, fiebre, tos, médico, cita, receta, pastilla, farmacia, descansar…). Coherence and spelling (3 pts): polite greeting and closing, logical order, general spelling. Missing accents are lightly penalised (max −1 in total); do not penalise the absence of ¿ ¡. If far below 60 words, cap Task achievement at 3 pts. Written in Spanish only (French deducts up to 3 pts).",
      reference: "Buenos días, Carmen: Hoy no puedo ir a trabajar porque estoy enfermo. Tengo fiebre y tos desde hace dos días, y me duelen la cabeza y la garganta. Me siento muy cansado. Voy a pedir una cita con el médico para esta tarde y después voy a ir a la farmacia. Tengo que descansar y beber mucha agua. Mañana le escribo otra vez para decirle cómo estoy. Perdone las molestias. Un saludo, Luis."
    },
    // --------------------------------------------------------------- VI
    {
      id: "speaking", num: "VI", title: "Expresión oral", titleFr: "Expression orale",
      points: 15, skill: "eo", type: "ai-oral",
      instructions: "Habla durante aproximadamente un minuto.",
      instructionsFr: "Parle pendant environ une minute.",
      prompt: "Estás en la consulta del médico. Explícale qué te pasa: qué te duele, qué otros síntomas tienes, desde cuándo y cómo te sientes. Después pregunta qué debes hacer. Usa «usted» con el médico.",
      promptFr: "Tu es au cabinet du médecin. Explique-lui ce que tu as : ce qui te fait mal, quels autres symptômes tu as, depuis quand et comment tu te sens. Puis demande ce que tu dois faire. Vouvoie le médecin.",
      targetSeconds: 60,
      rubric: "Total 15 points. Task achievement (4 pts): says what hurts, mentions at least one other symptom, says since when, and asks what to do. Grammar (5 pts): correct 'doler' agreement (me duele / me duelen) (1.5 pts); 'tener' + symptom, 'estar' + adjective, 'sentirse' (1 pt); 'desde hace', 'desde' or 'hace… que' with the present tense (1.5 pts); correct usted question forms such as '¿Qué debo hacer?', '¿Tengo que volver?', '¿Necesito una receta?' (1 pt). Vocabulary (3 pts): relevant and varied (cabeza, garganta, espalda, fiebre, tos, mareado, cansado, pastilla, receta…). Fluency and coherence (3 pts): continuous speech, logical order, polite register. The text is an automatic transcription of the microphone: do NOT judge pronunciation finely and do not penalise missing accents or punctuation. If under about 40 words, cap the total at 8 pts.",
      reference: "Buenos días, doctora. Me siento mal desde hace tres días. Me duele mucho la cabeza y me duele la garganta. Tengo fiebre y tos, y estoy muy cansada. Casi no duermo por la noche. Hoy estoy un poco mareada. ¿Qué debo hacer? ¿Necesito una receta? ¿Tengo que tomar una pastilla cada ocho horas? ¿Puedo ir a trabajar mañana? Muchas gracias por su ayuda."
    }
  ]
};


// ---- 223.js ----
E[223] = {
  code: "A2.11", level: "A2",
  title: "Examen de nivel: A2.11 – Me gustaría, podría",
  titleFr: "Contrôle de niveau : A2.11 – J'aimerais, je pourrais",
  objective: "Aprobar el nivel A2.11: formar y usar el condicional para ser cortés, aconsejar, proponer y expresar un deseo.",
  objectiveFr: "Valider le niveau A2.11 : former et utiliser le conditionnel pour être poli, conseiller, proposer et exprimer un souhait.",
  sections: [
    // ---------------------------------------------------------------- I
    {
      id: "vocab", num: "I", title: "Vocabulario de la cortesía", titleFr: "Vocabulaire de la politesse",
      points: 15, skill: "vo", type: "fill",
      instructions: "Completa las frases con una palabra de la lista. Hay palabras que no necesitas.",
      instructionsFr: "Complète les phrases avec un mot de la liste. Certains mots ne servent pas.",
      bank: ["gusto", "placer", "razón", "nada", "enseguida", "tú", "encantaría", "importaría", "idea", "genial", "mañana"],
      items: [
        { text: "—¿Me ayuda con las maletas? —Con mucho ___.",
          blanks: [["gusto"]],
          why: "« Con mucho gusto » = avec grand plaisir, formule de service pour accepter poliment." },
        { text: "Gracias por la invitación: sería un ___ ir con vosotros.",
          blanks: [["placer"]],
          why: "« sería un placer » = ce serait un plaisir (conditionnel de ser + un nom masculin)." },
        { text: "Tienes ___: es mejor salir temprano.",
          blanks: [["razón"]],
          why: "« tener razón » = avoir raison. On ne dit pas « estar razón »." },
        { text: "—¿Le importa esperar un momento? —Para ___, no hay problema.",
          blanks: [["nada"]],
          why: "« Para nada » = pas du tout. Réponse polie à « ¿Le importa…? » : cela ne me dérange pas." },
        { text: "El café está listo: ___ se lo traigo.",
          blanks: [["enseguida"]],
          why: "« enseguida » = tout de suite, mot du service (restaurant, hôtel)." },
        { text: "Yo que ___, descansaría un poco.",
          blanks: [["tú"]],
          why: "« Yo que tú + conditionnel » = à ta place, je… C'est la formule pour conseiller un ami." },
        { text: "Me ___ viajar a Perú: es mi sueño.",
          blanks: [["encantaría", "gustaría", "apetecería"]],
          why: "Un rêve s'exprime avec le conditionnel : « me encantaría » (j'adorerais) ; « me gustaría » et « me apetecería » sont aussi corrects." },
        { text: "No me ___ esperar un poco: no tengo prisa.",
          blanks: [["importaría"]],
          why: "« no me importaría + infinitif » = cela ne me dérangerait pas de… ; conditionnel de importar." }
      ]
    },
    // --------------------------------------------------------------- II
    {
      id: "grammar", num: "II", title: "Gramática: el condicional", titleFr: "Grammaire : le conditionnel",
      points: 20, skill: "cj", type: "fill",
      instructions: "En las frases 1 a 8, escribe el verbo en condicional. En las frases 9 y 10, usa el tiempo que necesitas.",
      instructionsFr: "Dans les phrases 1 à 8, écris le verbe au conditionnel. Dans les phrases 9 et 10, utilise le temps qu'il faut.",
      items: [
        { text: "Yo (comer) ___ algo ligero, pero no tengo hambre.",
          blanks: [["comería"]],
          why: "Conditionnel régulier : infinitif + -ía : comer → « comería » (accent sur le í)." },
        { text: "¿(Poder, usted) ___ ayudarme, por favor?",
          blanks: [["podría"]],
          why: "Irrégulier (même radical que le futur) : poder → « podría ». Pour une demande polie à usted." },
        { text: "Me ___ (gustar) reservar una mesa para dos.",
          blanks: [["gustaría"]],
          why: "gustar → « gustaría » : « me gustaría » = j'aimerais. Singulier car le sujet est « reservar » (infinitif)." },
        { text: "Yo que tú, (descansar) ___ un poco.",
          blanks: [["descansaría"]],
          why: "« Yo que tú » est suivi du conditionnel (conseil) : descansar → « descansaría »." },
        { text: "Ana dijo que (venir) ___ a las ocho.",
          blanks: [["vendría"]],
          why: "Futur dans le passé : après « dijo que » on utilise le conditionnel. Irrégulier : venir → « vendría »." },
        { text: "Tú ___ (deber) dormir más: tienes mala cara.",
          blanks: [["deberías"]],
          why: "Conseil avec tú : « deberías + infinitif ». Conditionnel de deber : deber → deberías." },
        { text: "¿Qué ___ (hacer, tú) en mi lugar?",
          blanks: [["harías"]],
          why: "Irrégulier : hacer → « haría » ; avec tú : « harías » (comme le futur « haré »)." },
        { text: "¿Te ___ (importar) esperar un momento?",
          blanks: [["importaría"]],
          why: "Demande polie : « ¿Te importaría + infinitif? » (avec usted : « ¿Le importaría…? »)." },
        { text: "—Perdone, ¿dónde está la estación? —(Seguir, usted) ___ todo recto.",
          blanks: [["siga"]],
          why: "Rappel A2.9 : impératif usted de seguir → « siga »." },
        { text: "Esta mañana ___ (hablar, yo) con el jefe.",
          blanks: [["he hablado"]],
          why: "Rappel A2.3 : « esta mañana » (période encore en cours) → pretérito perfecto : he hablado." }
      ]
    },
    // -------------------------------------------------------------- III
    {
      id: "reading", num: "III", title: "Comprensión escrita", titleFr: "Compréhension écrite",
      points: 15, skill: "ce", type: "mcq",
      instructions: "Lee el texto y elige la respuesta correcta.",
      instructionsFr: "Lis le texte et choisis la bonne réponse.",
      passage: "Laura habla con su amigo Sergio sobre su sueño.\n\n—Me encantaría abrir una panadería en mi pueblo —dice Laura—. Trabajaría menos horas y viviría más tranquila.\n—Sería una buena idea, pero necesitarías mucho dinero —contesta Sergio.\n—Lo sé. Mi banco me prestaría una parte, pero tendría que esperar un año más.\n—Yo que tú, hablaría con otras personas que tienen una tienda. Te darían buenos consejos.\n—Tienes razón. ¿Podrías venir conmigo el sábado?\n—Con mucho gusto.\n\nAhora Laura trabaja en una oficina de Madrid y no está contenta.",
      items: [
        { q: "¿Qué le encantaría hacer a Laura?", qFr: "Qu'adorerait faire Laura ?",
          opts: ["Trabajar en un banco", "Abrir una panadería", "Vivir en Madrid", "Viajar con Sergio"], correct: 1,
          why: "« Me encantaría abrir una panadería en mi pueblo ». C'est un rêve (conditionnel), pas une réalité." },
        { q: "¿Qué cambiaría en su vida?", qFr: "Qu'est-ce qui changerait dans sa vie ?",
          opts: ["Trabajaría menos horas", "Trabajaría más horas", "Viviría en Madrid", "Tendría menos amigos"], correct: 0,
          why: "« Trabajaría menos horas y viviría más tranquila ». Piège : elle travaille aujourd'hui en bureau à Madrid, elle ne veut pas y rester." },
        { q: "¿Qué consejo le da Sergio?", qFr: "Quel conseil Sergio lui donne-t-il ?",
          opts: ["Pedir dinero a su padre", "Dejar la oficina enseguida", "Hablar con personas que tienen una tienda"], correct: 2,
          why: "« Yo que tú, hablaría con otras personas que tienen una tienda » : conseil avec « yo que tú » + conditionnel." },
        { q: "¿Qué es verdad?", qFr: "Qu'est-ce qui est vrai ?",
          opts: ["Laura ya tiene una panadería", "Laura trabaja ahora en una oficina", "Sergio vive en el pueblo de Laura"], correct: 1,
          why: "La dernière phrase : « Ahora Laura trabaja en una oficina de Madrid ». La boulangerie est seulement un projet." },
        { q: "¿Qué responde Sergio cuando Laura le pide venir con ella el sábado?", qFr: "Que répond Sergio quand Laura lui demande de venir avec elle samedi ?",
          opts: ["Que no puede", "Que lo pensará", "Que lo hará con mucho gusto", "Que viajará a Madrid"], correct: 2,
          why: "« Con mucho gusto » = avec plaisir : il accepte. La demande polie était « ¿Podrías venir conmigo el sábado? »." }
      ]
    },
    // --------------------------------------------------------------- IV
    {
      id: "listening", num: "IV", title: "Comprensión oral", titleFr: "Compréhension orale",
      points: 15, skill: "co", type: "mcq",
      instructions: "Escucha el audio y elige la respuesta correcta. El texto aparece después de la corrección.",
      instructionsFr: "Écoute l'audio et choisis la bonne réponse. Le texte apparaît après la correction.",
      items: [
        { audio: [{ who: "A", text: "Buenos días. ¿Podría decirme a qué hora abre la farmacia?" }, { who: "B", text: "Abrimos a las nueve, señor." }],
          q: "¿Qué quiere saber A?", qFr: "Que veut savoir A ?",
          opts: ["Dónde está la farmacia", "A qué hora abre la farmacia", "Cuánto cuesta un medicamento"], correct: 1,
          why: "« ¿Podría decirme a qué hora abre la farmacia? » : demande polie de l'horaire d'ouverture. B répond « a las nueve »." },
        { audio: [{ who: "A", text: "¿Te gustaría ir al cine esta noche?" }, { who: "B", text: "Me encantaría, pero tengo que trabajar." }],
          q: "¿Qué responde B?", qFr: "Que répond B ?",
          opts: ["Acepta y va al cine", "No le gusta el cine", "No puede ir porque tiene que trabajar"], correct: 2,
          why: "« Me encantaría, pero tengo que trabajar » : refus poli (il aimerait, mais ne peut pas). Piège : « me encantaría » n'est pas une acceptation." },
        { audio: [{ who: "A", text: "No duermo bien." }, { who: "B", text: "Yo que tú, haría más deporte y no tomaría café por la noche." }],
          q: "¿Qué consejo da B?", qFr: "Quel conseil donne B ?",
          opts: ["Hacer deporte y no tomar café por la noche", "Tomar más café por la noche", "Ir al médico mañana"], correct: 0,
          why: "« Yo que tú, haría más deporte y no tomaría café por la noche » : deux conseils au conditionnel." },
        { audio: [{ who: "A", text: "Querría una mesa para cuatro personas, por favor." }, { who: "B", text: "Enseguida, señor. ¿Le gustaría una mesa en la terraza?" }, { who: "A", text: "Sí, sería perfecto." }],
          q: "¿Qué mesa quiere A?", qFr: "Quelle table veut A ?",
          opts: ["Una mesa para dos", "Una mesa dentro", "Una mesa en la terraza"], correct: 2,
          why: "A accepte la terrasse (« sería perfecto »). La table est pour quatre personnes, pas pour deux." },
        { audio: "Ana dijo que llegaría a las ocho, pero ya son las nueve y todavía no ha llegado.",
          q: "¿Qué pasa con Ana?", qFr: "Que se passe-t-il avec Ana ?",
          opts: ["Todavía no ha llegado", "Llegó a las ocho", "Llegó a las nueve"], correct: 0,
          why: "« Dijo que llegaría a las ocho » (promesse au conditionnel) mais « todavía no ha llegado » : elle est en retard." }
      ]
    },
    // ---------------------------------------------------------------- V
    {
      id: "writing", num: "V", title: "Expresión escrita", titleFr: "Expression écrite",
      points: 20, skill: "ee", type: "ai-text",
      instructions: "Escribe un mensaje de 60 a 90 palabras.",
      instructionsFr: "Écris un message de 60 à 90 mots.",
      prompt: "Un amigo te invita a hacer un viaje a Perú. Contesta a su mensaje: di que te encantaría ir, explica qué harías allí (tres cosas), haz una petición cortés («¿Podrías…?») y da un consejo («Yo que tú…» o «Deberías…»). Usa el condicional.",
      promptFr: "Un ami t'invite à faire un voyage au Pérou. Réponds à son message : dis que tu adorerais y aller, explique ce que tu ferais là-bas (trois choses), fais une demande polie (« ¿Podrías…? ») et donne un conseil (« Yo que tú… » ou « Deberías… »). Utilise le conditionnel.",
      minWords: 60, maxWords: 90,
      rubric: "Total 20 points. Task achievement (6 pts): expresses a wish to go (1.5 pts), describes at least three things he/she would do there (2 pts), makes a polite request (1.5 pts), gives a piece of advice (1 pt). Grammar (7 pts): correct regular conditional forms (infinitive + -ía, -ías, -ía, -íamos, -ían, with the accent) (2 pts); correct irregular conditional (podría, tendría, haría, diría, vendría, sería, querría…) (2 pts); correct polite structures (me gustaría / me encantaría + infinitive, ¿Podrías + infinitive?, yo que tú + conditional, deberías + infinitive) (2 pts); agreement and consistency (tú) (1 pt). Do not give credit for the future used instead of the conditional ('visitaré' for 'visitaría'), for 'yo que tú' followed by the present. Vocabulary (4 pts): relevant and varied (viaje, billete, reservar, visitar, subir, comer, vacaciones, jefe, con mucho gusto, sería genial…). Coherence and spelling (3 pts): clear organisation, connectors, general spelling. Missing accents are lightly penalised (max −1 in total, including the 'í' of the conditional); do not penalise the absence of ¿ ¡. If far below 60 words, cap Task achievement at 3 pts. Written in Spanish only (French deducts up to 3 pts).",
      reference: "Hola Pablo: ¡Gracias por la invitación! Me encantaría ir a Perú contigo. Visitaría Lima, subiría a Machu Picchu y comería mucho pescado. Sería genial viajar en agosto. ¿Podrías buscar los billetes? Yo que tú, los compraría pronto, porque después costarían más. Yo querría pedir vacaciones a mi jefe esta semana. Creo que me daría dos semanas. ¿Te gustaría invitar también a mi hermana? Deberíamos hablar el sábado. Un abrazo, Ana."
    },
    // --------------------------------------------------------------- VI
    {
      id: "speaking", num: "VI", title: "Expresión oral", titleFr: "Expression orale",
      points: 15, skill: "eo", type: "ai-oral",
      instructions: "Habla durante aproximadamente un minuto.",
      instructionsFr: "Parle pendant environ une minute.",
      prompt: "Llamas a un hotel para reservar una habitación. Habla con la recepcionista con mucha cortesía («usted» y condicional): di qué habitación querrías, para cuántas personas y qué fechas, pregunta si sería posible desayunar en la habitación y pregunta por el precio.",
      promptFr: "Tu appelles un hôtel pour réserver une chambre. Parle à la réceptionniste très poliment (« usted » et conditionnel) : dis quelle chambre tu voudrais, pour combien de personnes et quelles dates, demande s'il serait possible de prendre le petit-déjeuner dans la chambre et demande le prix.",
      targetSeconds: 60,
      rubric: "Total 15 points. Task achievement (4 pts): states the type of room and number of people (1 pt), gives dates (1 pt), asks about breakfast (1 pt), asks the price (1 pt). Grammar (5 pts): correct polite conditional forms (me gustaría / querría + infinitive, ¿podría…?, ¿sería posible…?, ¿le importaría…?) (3 pts); consistent use of usted (1 pt); correct basic agreement and word order (1 pt). Do not give credit for the present used where a polite conditional is expected in more than half of the requests. Vocabulary (3 pts): relevant and varied (habitación, reservar, noche, desayuno, precio, fechas, individual/doble). Fluency and coherence (3 pts): continuous speech, polite opening and closing (buenos días, muchas gracias). The text is an automatic transcription of the microphone: do NOT judge pronunciation finely and do not penalise missing accents or punctuation. If under about 40 words, cap the total at 8 pts.",
      reference: "Buenos días. Me gustaría reservar una habitación doble para dos personas, del quince al dieciocho de agosto. ¿Podría decirme cuánto costaría por noche? ¿Sería posible desayunar en la habitación? También querría saber si tendrían una habitación con vistas al mar. ¿Le importaría enviarme la confirmación por correo electrónico? Muchas gracias. Sería un placer visitar su hotel."
    }
  ]
};


// ---- 224.js ----
E[224] = {
  code: "A2.12", level: "A2",
  title: "Examen de nivel: A2.12 – Bilan A2",
  titleFr: "Contrôle de niveau : A2.12 – Bilan du niveau A2",
  objective: "Aprobar el nivel A2: elegir el tiempo correcto (indefinido, imperfecto, perfecto, futuro, condicional), comparar, usar pronombres, el imperativo y los conectores para contar, describir y opinar.",
  objectiveFr: "Valider le niveau A2 : choisir le bon temps (passé simple, imparfait, perfecto, futur, conditionnel), comparer, utiliser les pronoms, l'impératif et les connecteurs pour raconter, décrire et donner son avis.",
  sections: [
    // ---------------------------------------------------------------- I
    {
      id: "vocab", num: "I", title: "Conectores y opinión", titleFr: "Connecteurs et opinion",
      points: 15, skill: "vo", type: "fill",
      instructions: "Completa las frases con una palabra o expresión de la lista. Hay palabras que no necesitas.",
      instructionsFr: "Complète les phrases avec un mot ou une expression de la liste. Certains mots ne servent pas.",
      bank: ["porque", "por eso", "sin embargo", "además", "aunque", "depende", "principio", "razón", "opinión", "quizás", "mientras"],
      items: [
        { text: "No fui a la fiesta ___ estaba cansada.",
          blanks: [["porque"]],
          why: "« porque » introduit la cause : parce que j'étais fatiguée." },
        { text: "Estaba cansada; ___ no fui a la fiesta.",
          blanks: [["por eso", "por lo tanto"]],
          why: "« por eso » (ou « por lo tanto ») exprime la conséquence : c'est pourquoi je ne suis pas allée. Ne pas confondre avec « porque » (la cause)." },
        { text: "El hotel es caro; ___, es muy cómodo.",
          blanks: [["sin embargo", "pero"]],
          why: "« caro » (négatif) et « cómodo » (positif) s'opposent : « sin embargo » = pourtant, cependant (ou « pero »)." },
        { text: "Es barato y, ___, está cerca de la playa.",
          blanks: [["además"]],
          why: "« además » ajoute un argument positif de plus : en plus, il est près de la plage." },
        { text: "___ está cansado, trabaja todos los días.",
          blanks: [["aunque"]],
          why: "« aunque » = bien que, même si : il est fatigué malgré tout il travaille. Ici le verbe est à l'indicatif." },
        { text: "—¿Es caro el hotel? —___ de la habitación: hay unas baratas y otras muy caras.",
          blanks: [["depende"]],
          why: "« depende de… » = ça dépend de… ; réponse typique quand il n'y a pas de réponse unique." },
        { text: "Al ___ del viaje tenía miedo, pero al final fue genial.",
          blanks: [["principio"]],
          why: "« al principio… al final » = au début… à la fin : structure d'un récit." },
        { text: "—Creo que el tren es mejor. —Tienes ___: es más cómodo.",
          blanks: [["razón"]],
          why: "« tienes razón » = tu as raison (verbe tener, jamais « estás razón »)." }
      ]
    },
    // --------------------------------------------------------------- II
    {
      id: "grammar", num: "II", title: "Gramática: todos los tiempos del A2", titleFr: "Grammaire : tous les temps du A2",
      points: 20, skill: "cj", type: "fill",
      instructions: "Completa cada frase con la palabra o el verbo en el tiempo correcto. Mira siempre la palabra que indica el tiempo (ayer, hoy, cuando era niña…).",
      instructionsFr: "Complète chaque phrase avec le mot ou le verbe au bon temps. Regarde toujours le mot qui indique le temps (ayer, hoy, cuando era niña…).",
      items: [
        { text: "El año pasado ___ (ir, nosotros) a Perú.",
          blanks: [["fuimos"]],
          why: "A2.2 : « el año pasado » → passé simple. Irrégulier : ir → fui, fuiste, fue, « fuimos »." },
        { text: "Hoy ___ (trabajar, yo) mucho.",
          blanks: [["he trabajado"]],
          why: "A2.3 : « hoy » (journée non terminée) → pretérito perfecto : he + participe." },
        { text: "El lunes que viene ___ (viajar, yo) a Lima.",
          blanks: [["viajaré", "voy a viajar"]],
          why: "A2.4 : « el lunes que viene » → futur : viajar → « viajaré » (ou « voy a viajar »)." },
        { text: "Cuando era niña, ___ (vivir, yo) en un pueblo.",
          blanks: [["vivía"]],
          why: "A2.5 : décor ou habitude de l'enfance → imparfait : vivir → « vivía »." },
        { text: "Estaba en la ducha cuando ___ (sonar) el teléfono.",
          blanks: [["sonó"]],
          why: "A2.6 : « estaba… cuando » → décor à l'imparfait, événement soudain au passé simple : sonar → « sonó »." },
        { text: "Este hotel es bueno, pero el otro es ___.",
          blanks: [["mejor"]],
          why: "A2.7 : comparatif irrégulier : bueno → « mejor » (jamais « más bueno »)." },
        { text: "—¿Le das el regalo a Ana? —Sí, ___ lo doy mañana.",
          blanks: [["se"]],
          why: "A2.8 : deux pronoms de 3e personne : « le + lo » devient « se lo »." },
        { text: "(Girar, usted) ___ a la derecha en el semáforo.",
          blanks: [["gire"]],
          why: "A2.9 : impératif usted d'un verbe en -AR : on passe à -e : girar → « gire »." },
        { text: "Estoy enfermo ___ hace tres días.",
          blanks: [["desde"]],
          why: "A2.10 : « desde hace + durée » = depuis ; le verbe reste au présent." },
        { text: "¿(Poder, usted) ___ enviarme el billete, por favor?",
          blanks: [["podría"]],
          why: "A2.11 : demande polie → conditionnel : poder → « podría » (irrégulier, même radical que le futur)." }
      ]
    },
    // -------------------------------------------------------------- III
    {
      id: "reading", num: "III", title: "Comprensión escrita", titleFr: "Compréhension écrite",
      points: 15, skill: "ce", type: "mcq",
      instructions: "Lee el correo y elige la respuesta correcta.",
      instructionsFr: "Lis le courriel et choisis la bonne réponse.",
      passage: "Hola, Lucía:\n\nTe escribo desde Sevilla. Llegué ayer en tren y el viaje fue muy cómodo, aunque el tren tuvo un poco de retraso. Mientras esperaba en el andén, conocí a un chico muy simpático y hablamos mucho.\n\nHoy he visitado el centro con él. La ciudad es más bonita que en las fotos y, además, es más barata que Madrid. Mañana iremos a la playa.\n\nMe gustaría quedarme una semana más, pero el lunes tengo que volver al trabajo. ¿Podrías llamar a mi madre y decirle que estoy bien?\n\nUn abrazo,\nMarta",
      items: [
        { q: "¿Cómo llegó Marta a Sevilla?", qFr: "Comment Marta est-elle arrivée à Séville ?",
          opts: ["En avión", "En tren", "En autobús", "En coche"], correct: 1,
          why: "« Llegué ayer en tren ». Le voyage a été confortable, même avec un peu de retard." },
        { q: "¿Qué pasó mientras Marta esperaba en el andén?", qFr: "Que s'est-il passé pendant que Marta attendait sur le quai ?",
          opts: ["Perdió el tren", "Conoció a un chico", "Llamó a su madre", "Compró un billete"], correct: 1,
          why: "« Mientras esperaba en el andén, conocí a un chico » : imparfait (esperaba) pour le décor, passé simple (conocí) pour l'événement." },
        { q: "¿Qué ha hecho Marta hoy?", qFr: "Qu'a fait Marta aujourd'hui ?",
          opts: ["Ha ido a la playa", "Ha vuelto al trabajo", "Ha visitado el centro con el chico", "Ha llegado a Sevilla"], correct: 2,
          why: "« Hoy he visitado el centro con él ». La plage est prévue pour demain, et elle est arrivée hier." },
        { q: "¿Qué es verdad sobre Sevilla?", qFr: "Qu'est-ce qui est vrai à propos de Séville ?",
          opts: ["Es más bonita que en las fotos", "Es más cara que Madrid", "Es más fea que en las fotos"], correct: 0,
          why: "« Es más bonita que en las fotos » et « más barata que Madrid ». Piège : « más barata » est le contraire de « más cara »." },
        { q: "¿Qué le pide Marta a Lucía?", qFr: "Que demande Marta à Lucía ?",
          opts: ["Que viaje a Sevilla", "Que compre un billete", "Que llame a su madre"], correct: 2,
          why: "« ¿Podrías llamar a mi madre y decirle que estoy bien? » : demande polie au conditionnel. Elle ne demande rien d'autre dans le message." }
      ]
    },
    // --------------------------------------------------------------- IV
    {
      id: "listening", num: "IV", title: "Comprensión oral", titleFr: "Compréhension orale",
      points: 15, skill: "co", type: "mcq",
      instructions: "Escucha el audio y elige la respuesta correcta. El texto aparece después de la corrección.",
      instructionsFr: "Écoute l'audio et choisis la bonne réponse. Le texte apparaît après la correction.",
      items: [
        { audio: [{ who: "A", text: "¿Qué hiciste el domingo?" }, { who: "B", text: "Fui al cine con mi hermana." }],
          q: "¿Qué hizo B el domingo?", qFr: "Qu'a fait B dimanche ?",
          opts: ["Fue al cine con su hermana", "Se quedó en casa", "Fue al cine con un amigo"], correct: 0,
          why: "« Fui al cine con mi hermana » : passé simple de ir (fui). Piège : ce n'est pas un ami." },
        { audio: "Cuando era niño, vivía en un pueblo cerca del mar. Todos los días jugaba en la playa.",
          q: "¿Qué hacía de niño?", qFr: "Que faisait-il enfant ?",
          opts: ["Vivía en una ciudad grande", "Jugaba en la playa", "Trabajaba en el pueblo"], correct: 1,
          why: "« Todos los días jugaba en la playa » : imparfait d'habitude. Il vivait dans un village, pas en grande ville." },
        { audio: "Siga todo recto, gire a la derecha y cruce la plaza. El banco está enfrente.",
          q: "¿Qué tiene que hacer primero?", qFr: "Que doit-on faire en premier ?",
          opts: ["Girar a la derecha", "Cruzar la plaza", "Seguir todo recto"], correct: 2,
          why: "L'ordre des impératifs usted : « siga todo recto » d'abord, puis « gire », puis « cruce »." },
        { audio: [{ who: "A", text: "¿Desde cuándo le duele la cabeza?" }, { who: "B", text: "Desde hace dos días." }, { who: "A", text: "Tome una pastilla cada ocho horas." }],
          q: "¿Cuándo empezó el dolor de cabeza?", qFr: "Quand a commencé le mal de tête ?",
          opts: ["Hoy", "Hace una semana", "Hace dos días"], correct: 2,
          why: "« Desde hace dos días » : le mal de tête a commencé il y a deux jours. « Cada ocho horas » concerne le comprimé." },
        { audio: [{ who: "A", text: "¿Podría ayudarme con la maleta, por favor?" }, { who: "B", text: "Con mucho gusto, señora. Se la llevo enseguida." }],
          q: "¿Qué va a hacer B?", qFr: "Que va faire B ?",
          opts: ["Comprar una maleta", "Llevarle la maleta a la señora", "Pedir un billete"], correct: 1,
          why: "« Se la llevo enseguida » : « se » = à la dame, « la » = la maleta. B accepte avec plaisir." }
      ]
    },
    // ---------------------------------------------------------------- V
    {
      id: "writing", num: "V", title: "Expresión escrita", titleFr: "Expression écrite",
      points: 20, skill: "ee", type: "ai-text",
      instructions: "Escribe un correo de 80 a 120 palabras.",
      instructionsFr: "Écris un courriel de 80 à 120 mots.",
      prompt: "Escribe un correo a un amigo español. Cuéntale un viaje o un fin de semana: cómo era el lugar antes de llegar (imperfecto), qué hiciste ayer (indefinido) y qué has hecho hoy (perfecto). Después di qué harás mañana (futuro) y qué te gustaría hacer en el futuro (condicional). Usa al menos tres conectores (porque, por eso, además, sin embargo, al final…) y una comparación.",
      promptFr: "Écris un courriel à un ami espagnol. Raconte un voyage ou un week-end : comment était le lieu avant ton arrivée (imparfait), ce que tu as fait hier (passé simple) et ce que tu as fait aujourd'hui (perfecto). Puis dis ce que tu feras demain (futur) et ce que tu aimerais faire plus tard (conditionnel). Utilise au moins trois connecteurs (porque, por eso, además, sin embargo, al final…) et une comparaison.",
      minWords: 80, maxWords: 120,
      rubric: "Total 20 points. Task achievement (5 pts): the email covers all five time frames (past scene, yesterday, today, tomorrow, future wish) (1 pt each, proportionally). Grammar and tenses (7 pts): correct imperfect for the scene or habit (1.5 pts); correct pretérito indefinido for yesterday, including irregular forms (fui, hice, estuve…) (1.5 pts); correct pretérito perfecto with 'hoy' (he + participle, including irregular participles such as hecho, visto) (1.5 pts); correct future (iré, haré, tendré…) (1 pt); correct conditional (me gustaría, podría, sería…) (1.5 pts). Do not give credit when the tense does not match the time marker (e.g. 'ayer he comido'). Connectors and comparison (3 pts): at least three different connectors used correctly (2 pts) and one correct comparison (más… que, tan… como, mejor) (1 pt). Vocabulary (2 pts): relevant and varied. Coherence and spelling (3 pts): logical organisation, greeting and closing, general spelling. Missing accents are lightly penalised (max −1 in total); do not penalise the absence of ¿ ¡. If far below 80 words, cap Task achievement at 3 pts. Written in Spanish only (French deducts up to 3 pts).",
      reference: "Hola Pablo: Te escribo desde Sevilla. Antes de llegar pensaba que la ciudad era pequeña, pero es más grande que mi pueblo y tiene muchos monumentos. Ayer fui a la catedral y comí en un restaurante muy bueno. Hoy he caminado mucho y he visitado el barrio antiguo, por eso estoy cansada. Sin embargo, estoy muy contenta. Mañana iré a la playa con unos amigos y después volveré a casa. Además, me gustaría vivir aquí un año porque es más tranquilo que París. Al final, creo que sería una buena experiencia. Un abrazo, Ana."
    },
    // --------------------------------------------------------------- VI
    {
      id: "speaking", num: "VI", title: "Expresión oral", titleFr: "Expression orale",
      points: 15, skill: "eo", type: "ai-oral",
      instructions: "Habla durante aproximadamente un minuto y medio.",
      instructionsFr: "Parle pendant environ une minute et demie.",
      prompt: "Habla de ti: cómo era tu vida cuando eras niño/a (imperfecto), qué hiciste el fin de semana pasado (indefinido), qué has hecho hoy (perfecto), qué harás mañana (futuro) y qué te gustaría hacer en el futuro (condicional). Usa algunos conectores (porque, además, por eso, al final…).",
      promptFr: "Parle de toi : comment était ta vie quand tu étais enfant (imparfait), ce que tu as fait le week-end dernier (passé simple), ce que tu as fait aujourd'hui (perfecto), ce que tu feras demain (futur) et ce que tu aimerais faire plus tard (conditionnel). Utilise quelques connecteurs (porque, además, por eso, al final…).",
      targetSeconds: 90,
      rubric: "Total 15 points. Task achievement (4 pts): covers the five time frames (childhood, last weekend, today, tomorrow, future wish), about 0.8 pt each. Grammar (5 pts): correct imperfect (1 pt), indefinido including irregulars (1 pt), perfecto with 'hoy' (1 pt), future (1 pt), conditional (1 pt). Do not give credit when the tense does not match the time marker. Vocabulary and connectors (3 pts): relevant vocabulary and at least three connectors used correctly. Fluency and coherence (3 pts): continuous speech, logical order, natural flow. The text is an automatic transcription of the microphone: do NOT judge pronunciation finely and do not penalise missing accents or punctuation. If under about 50 words, cap the total at 8 pts.",
      reference: "Cuando era niña, vivía en un pueblo pequeño y jugaba en la calle con mis primos. El fin de semana pasado fui a casa de mi madre y comimos juntas. Hoy he trabajado mucho porque he tenido una reunión importante, por eso estoy cansada. Mañana descansaré y después haré la compra. Además, me gustaría viajar a Perú el año que viene. Sería más caro que Madrid, sin embargo, me encantaría conocer Machu Picchu. Al final, creo que es mejor soñar un poco y planificar bien."
    }
  ]
};


// ---- 225.js ----
E[225] = {
  code: "GC-A1",
  label: "Grand Contrôle A1",
  pickCode: "Contrôle A1",
  pickTitle: "Grand contrôle",
  level: "A1",
  standalone: true,
  title: "Gran control A1 (A1.0 – A1.12)",
  titleFr: "Grand contrôle A1 (A1.0 – A1.12)",
  objective: "Mostrar que dominas el presente y el vocabulario básico del nivel A1 para desbloquear el nivel A2.",
  objectiveFr: "Montrer que tu maîtrises le présent et le vocabulaire de base du niveau A1 pour débloquer le niveau A2.",
  nextPreview: "Niveau A2 : A2.1 — le passé : tu vas raconter ce que tu as fait hier, la semaine dernière ou l'année dernière (pretérito indefinido).",
  sections: [
    // ------------------------------------------------------------ I
    {
      id: "vocab", num: "I", title: "Vocabulario", titleFr: "Vocabulaire",
      points: 10, skill: "vo", type: "fill",
      instructions: "Completa las frases con una palabra de la lista. Hay palabras que sobran.",
      instructionsFr: "Complète les phrases avec un mot de la liste. Certains mots sont en trop.",
      bank: ["tía", "nublado", "camarero", "hermanos", "al lado", "semana", "médico", "cara", "lejos", "barata", "mes"],
      items: [
        { text: "La hermana de mi madre es mi ___.",
          blanks: [["tía"]],
          why: "« la hermana de ma mère » = ma tante : la tía (tío → tía, o → a)." },
        { text: "Hoy hay muchas nubes: el cielo está ___.",
          blanks: [["nublado"]],
          why: "« estar nublado » = être nuageux (météo, famille 2 : estar + adjectif). Le ciel n'est pas dégagé." },
        { text: "En el restaurante, el ___ me trae la carta.",
          blanks: [["camarero"]],
          why: "« el camarero » = le serveur. L'article masculin « el » demande la forme masculine." },
        { text: "Tengo un hermano y una hermana: son mis ___.",
          blanks: [["hermanos"]],
          why: "Un frère + une sœur = « los hermanos » : le masculin pluriel est générique pour un groupe mixte." },
        { text: "La farmacia y el banco están juntos: la farmacia está ___ del banco.",
          blanks: [["al lado"]],
          why: "« al lado de » = à côté de. « lejos de » (loin de) serait faux puisqu'ils sont juntos (ensemble)." },
        { text: "Los lunes, los martes y los miércoles son días de la ___.",
          blanks: [["semana"]],
          why: "Les jours forment une « semana » (semaine). Un « mes » (mois) compte environ 30 jours." },
        { text: "Mi padre trabaja en un hospital y cura a los enfermos: es ___.",
          blanks: [["médico", "médica", "enfermero"]],
          why: "« el médico » = le médecin. Après « es », le métier s'emploie sans article." },
        { text: "Esta camisa cuesta 200 euros: es muy ___.",
          blanks: [["cara"]],
          why: "« cara » = chère (camisa est féminin : caro → cara). « barata » (bon marché) est l'intrus : 200 € n'est pas bon marché." }
      ]
    },
    // ------------------------------------------------------------ II
    {
      id: "conj", num: "II", title: "Conjugación en presente", titleFr: "Conjugaison au présent",
      points: 20, skill: "cj", type: "fill",
      instructions: "Escribe el verbo entre paréntesis en la forma correcta. Escribe solo la forma verbal.",
      instructionsFr: "Écris le verbe entre parenthèses à la forme correcte. Écris seulement la forme verbale.",
      items: [
        { text: "Yo ___ (ser) francesa y vivo en París.",
          blanks: [["soy"]],
          why: "La nationalité est une identité → SER, 1re personne : « soy »." },
        { text: "Mi hermano ___ (tener) veinte años.",
          blanks: [["tiene"]],
          why: "L'âge se dit avec TENER : « tiene veinte años » (él → tiene, e → ie)." },
        { text: "¿Qué ___ (hacer) tú los domingos?",
          blanks: [["haces"]],
          why: "HACER : hago, haces, hace… Avec tú → « haces »." },
        { text: "¿Tú ___ (trabajar) en una oficina?",
          blanks: [["trabajas"]],
          why: "Verbe en -AR : radical + -as pour tú → « trabajas »." },
        { text: "Nosotros ___ (comer) en casa los domingos.",
          blanks: [["comemos"]],
          why: "Verbe en -ER, nosotros → « comemos » (-emos)." },
        { text: "Mis padres ___ (vivir) en Sevilla.",
          blanks: [["viven"]],
          why: "Verbe en -IR, ellos → « viven » (-en)." },
        { text: "Mañana nosotros ___ (ir a + viajar) en tren.",
          blanks: [["vamos a viajar"]],
          why: "Futur proche : IR conjugué + a + infinitif. Nosotros → « vamos a viajar »." },
        { text: "Ahora mis padres ___ (estar + esperar) el autobús en la parada.",
          blanks: [["están esperando"]],
          why: "Présent continu : ESTAR conjugué + gérondif (-ar → -ando). Ellos → « están esperando »." },
        { text: "Yo ___ (preferir) el té, pero mi hermana prefiere el café.",
          blanks: [["prefiero"]],
          why: "PREFERIR : e → ie à yo, tú, él, ellos → « prefiero »." },
        { text: "A mí me ___ (gustar) los perros.",
          blanks: [["gustan"]],
          why: "Avec GUSTAR, le verbe s'accorde avec la chose aimée : « los perros » est pluriel → « gustan »." }
      ]
    },
    // ------------------------------------------------------------ III
    {
      id: "grammar", num: "III", title: "Gramática", titleFr: "Grammaire",
      points: 15, skill: "gr", type: "mcq",
      instructions: "Elige la respuesta correcta.",
      instructionsFr: "Choisis la bonne réponse.",
      items: [
        { q: "La sopa ___ muy fría; no la quiero.", qFr: "La soupe ___ très froide ; je n'en veux pas.",
          opts: ["es", "está", "hay"], correct: 1,
          why: "Un état du moment (la soupe est froide maintenant) → ESTAR. « hay » sert à dire qu'une chose existe, pas à la décrire." },
        { q: "Mis primos son muy ___.", qFr: "Mes cousins sont très ___.",
          opts: ["joven", "jovenes", "jóvenes"], correct: 2,
          why: "Pluriel d'un mot en consonne : +es, et l'accent écrit apparaît : joven → jóvenes. « jovenes » oublie l'accent." },
        { q: "¿Qué hora es? — ___ las cuatro y media.", qFr: "Quelle heure est-il ? — Il est quatre heures et demie.",
          opts: ["Es", "Son", "Están"], correct: 1,
          why: "L'heure se dit avec SER, au pluriel dès deux heures : « Son las cuatro ». « Es » ne s'emploie que pour « es la una »." },
        { q: "Voy ___ banco y después a la farmacia.", qFr: "Je vais à la banque puis à la pharmacie.",
          opts: ["a el", "a la", "al"], correct: 2,
          why: "a + el se contracte toujours en « al » : « voy al banco ». « a la » irait avec un nom féminin." },
        { q: "Nunca ___ café por la noche.", qFr: "Je ne bois jamais de café le soir.",
          opts: ["bebo", "no bebo", "bebo no"], correct: 0,
          why: "Placé AVANT le verbe, « nunca » se suffit à lui-même : « Nunca bebo ». « Nunca no bebo » serait une double négation fausse ici." },
        { q: "Mi casa es ___ grande que la tuya.", qFr: "Ma maison est plus grande que la tienne.",
          opts: ["más", "tan", "mejor"], correct: 0,
          why: "Comparatif de supériorité : más + adjectif + que. « tan » demande « como » ; « mejor » = meilleur." },
        { q: "Perdone, señor, ___ a la derecha y siga recto.", qFr: "Excusez-moi, monsieur, tournez à droite et continuez tout droit.",
          opts: ["gira", "gire", "girar"], correct: 1,
          why: "« señor » → vouvoiement (usted) : impératif usted des verbes en -AR = « gire » (la voyelle s'inverse). « gira » est l'impératif de tú." },
        { q: "En mi calle ___ una farmacia muy buena.", qFr: "Dans ma rue, il y a une très bonne pharmacie.",
          opts: ["está", "es", "hay"], correct: 2,
          why: "On annonce qu'une chose existe (une pharmacie non encore connue) → « hay ». « está » servirait pour une chose connue : « La farmacia está en mi calle »." },
        { q: "Hoy ___ mucho calor.", qFr: "Aujourd'hui il fait très chaud.",
          opts: ["hace", "está", "tiene"], correct: 0,
          why: "La météo famille 1 : HACER + nom, toujours à la 3e personne du singulier : « hace calor ». « tiene calor » = une personne a chaud." },
        { q: "A mis padres ___ viajar.", qFr: "Mes parents aiment voyager.",
          opts: ["le gustan", "les gustan", "les gusta"], correct: 2,
          why: "Pronom « les » (a ellos) + « gusta » car ce qui plaît est un infinitif (viajar). Le verbe ne s'accorde jamais avec la personne." }
      ]
    },
    // ------------------------------------------------------------ IV
    {
      id: "reading", num: "IV", title: "Comprensión escrita", titleFr: "Compréhension écrite",
      points: 10, skill: "ce", type: "mcq",
      instructions: "Lee el texto y contesta a las preguntas.",
      instructionsFr: "Lis le texte et réponds aux questions.",
      passage: "Me llamo Lucía, tengo veintiocho años y soy de Valencia, pero ahora vivo en Madrid. Trabajo en un hospital: soy enfermera. Trabajo de lunes a viernes. Por la mañana tomo el metro y llego al hospital a las ocho menos cuarto.\n\nTengo una familia pequeña. Mi madre se llama Carmen y es profesora. Mi hermano Pablo tiene veinte años y estudia en la universidad. Mis abuelos viven en Madrid y los domingos comemos juntos en su casa. Me gusta cocinar y mi plato favorito es la paella.\n\nHoy es sábado y hace sol. Estoy en el parque con mis amigas. Vamos a comer en un restaurante y después vamos al cine. ¡Qué día tan bueno!",
      items: [
        { q: "¿De dónde es Lucía?", qFr: "D'où est Lucía ?",
          opts: ["De Madrid", "De Valencia", "De Sevilla"], correct: 1,
          why: "« soy de Valencia » (origine) ; « vivo en Madrid » indique seulement où elle habite maintenant." },
        { q: "¿A qué hora llega Lucía al hospital?", qFr: "À quelle heure Lucía arrive-t-elle à l'hôpital ?",
          opts: ["A las ocho y cuarto", "A las ocho", "A las ocho menos cuarto"], correct: 2,
          why: "« a las ocho menos cuarto » = huit heures moins le quart = 7 h 45. « y cuarto » aurait donné 8 h 15." },
        { q: "¿Qué hace Pablo?", qFr: "Que fait Pablo ?",
          opts: ["Estudia en la universidad", "Es profesor", "Trabaja con su madre"], correct: 0,
          why: "« Mi hermano Pablo […] estudia en la universidad ». C'est la mère, Carmen, qui est professeure." },
        { q: "¿Cuándo come Lucía con sus abuelos?", qFr: "Quand Lucía mange-t-elle avec ses grands-parents ?",
          opts: ["Los sábados", "Los domingos", "Los viernes"], correct: 1,
          why: "« los domingos comemos juntos en su casa ». Le samedi, c'est aujourd'hui : elle est au parc." },
        { q: "¿Qué tiempo hace hoy?", qFr: "Quel temps fait-il aujourd'hui ?",
          opts: ["Hace sol", "Hace frío", "Llueve mucho"], correct: 0,
          why: "« Hoy es sábado y hace sol » : il fait soleil, beau temps." },
        { q: "¿Qué va a hacer Lucía después de comer?", qFr: "Que va faire Lucía après le repas ?",
          opts: ["Volver al hospital", "Estudiar", "Ir al cine"], correct: 2,
          why: "« después vamos al cine » : après le restaurant, elles vont au cinéma. On le déduit de l'ordre des actions." }
      ]
    },
    // ------------------------------------------------------------ V
    {
      id: "listening", num: "V", title: "Comprensión oral", titleFr: "Compréhension orale",
      points: 10, skill: "co", type: "mcq",
      instructions: "Escucha cada audio y elige la respuesta correcta.",
      instructionsFr: "Écoute chaque audio et choisis la bonne réponse.",
      items: [
        { audio: [
            { who: "A", text: "Perdone, ¿dónde está la farmacia?" },
            { who: "B", text: "Siga recto y gire a la izquierda. Está al lado del banco." }
          ],
          q: "¿Dónde está la farmacia?", qFr: "Où est la pharmacie ?",
          opts: ["Al lado del banco", "Enfrente del parque", "Al final de la calle"], correct: 0,
          why: "« Está al lado del banco » : à côté de la banque. Les indications (tout droit, à gauche) servent à y arriver." },
        { audio: [
            { who: "A", text: "Buenas tardes. Quería una camisa blanca, por favor." },
            { who: "B", text: "Aquí tiene. Cuesta cuarenta y cinco euros." },
            { who: "A", text: "Me la llevo. ¿Puedo pagar con tarjeta?" }
          ],
          q: "¿Cuánto cuesta la camisa?", qFr: "Combien coûte la chemise ?",
          opts: ["Catorce euros", "Cuarenta y cinco euros", "Cincuenta y cuatro euros"], correct: 1,
          why: "« cuarenta y cinco euros » = 45 €. Ne confonds pas avec cuarenta (40) et cincuenta y cuatro (54)." },
        { audio: "Hoy es lunes. Son las siete y media de la mañana. Hace frío y está lloviendo. Voy al trabajo en autobús.",
          q: "¿Qué tiempo hace?", qFr: "Quel temps fait-il ?",
          opts: ["Hace calor y hay sol", "Hace viento", "Hace frío y llueve"], correct: 2,
          why: "« Hace frío y está lloviendo » : il fait froid et il pleut (estar + gérondif)." },
        { audio: [
            { who: "A", text: "Buenas tardes. ¿Qué desea tomar?" },
            { who: "B", text: "De primero, una sopa, y de segundo, pescado. Para beber, agua, por favor." }
          ],
          q: "¿Qué toma la persona de segundo?", qFr: "Qu'est-ce que la personne prend en plat principal ?",
          opts: ["Carne", "Pescado", "Ensalada"], correct: 1,
          why: "« de segundo, pescado » : le deuxième plat est du poisson. La soupe est l'entrée (de primero)." },
        { audio: [
            { who: "A", text: "¿Tienes hermanos?" },
            { who: "B", text: "Sí, tengo un hermano y una hermana. Mi hermana tiene quince años y mi hermano tiene veinte." }
          ],
          q: "¿Cuántos años tiene el hermano?", qFr: "Quel âge a le frère ?",
          opts: ["Quince", "Dieciocho", "Veinte"], correct: 2,
          why: "« mi hermano tiene veinte años ». Quince (15) est l'âge de la sœur." }
      ]
    },
    // ------------------------------------------------------------ VI
    {
      id: "writing-guided", num: "VI", title: "Escritura guiada: presentarse", titleFr: "Écriture guidée : se présenter",
      points: 10, skill: "ee", type: "ai-text",
      instructions: "Escribe una presentación de 6 a 8 frases.",
      instructionsFr: "Écris une présentation de 6 à 8 phrases.",
      prompt: "Preséntate: tu nombre, tu edad, de dónde eres y dónde vives, tu trabajo o tus estudios, una persona de tu familia (cómo se llama y cómo es) y una cosa que te gusta.",
      promptFr: "Présente-toi : ton prénom, ton âge, d'où tu viens et où tu habites, ton travail ou tes études, une personne de ta famille (son prénom et comment elle est) et une chose que tu aimes.",
      minWords: 40, maxWords: 100,
      rubric: "Total 10 points. Task (3 pts): the learner gives name, age, origin AND residence, job or studies, one family member (name + a description) and one thing they like; 0.5 pt per element covered. Verb forms (4 pts): correct present tense of llamarse (me llamo), ser (soy / es), tener for age (tengo … años), vivir (vivo), trabajar or estudiar, gustar (me gusta + singular/infinitive, me gustan + plural); choice of SER for identity/description and TENER for age; deduct 1 pt per recurring error type (e.g. 'soy 30 años', 'yo tengo' is fine, 'me gusta los libros'). Agreement and vocabulary (2 pts): gender/number agreement (mi madre es simpática, mis hermanos son altos), relevant A1 vocabulary. Coherence (1 pt): short connected sentences (y, pero, porque). Missing accents and ¿ ¡ are NOT penalised at A1. Under 40 words: cap the total at 6.",
      reference: "Me llamo Sara, tengo treinta años y soy de Lyon, pero ahora vivo en Madrid. Trabajo en una oficina de lunes a viernes. Mi hermano se llama Pablo, tiene veinte años y es muy simpático. Me gusta cocinar y me gustan los libros."
    },
    // ------------------------------------------------------------ VII
    {
      id: "writing-free", num: "VII", title: "Escritura libre: mi día y mis planes", titleFr: "Écriture libre : ma journée et mes projets",
      points: 15, skill: "ee", type: "ai-text",
      instructions: "Escribe un texto de al menos 70 palabras.",
      instructionsFr: "Écris un texte d'au moins 70 mots.",
      prompt: "Cuenta un día normal de tu semana y tus planes del fin de semana. Incluye: la hora a la que empiezas y terminas, lo que comes, dos cosas que te gustan, qué tiempo hace hoy y qué vas a hacer el sábado.",
      promptFr: "Raconte une journée normale de ta semaine et tes projets du week-end. Inclus : l'heure à laquelle tu commences et tu termines, ce que tu manges, deux choses que tu aimes, le temps qu'il fait aujourd'hui et ce que tu vas faire samedi.",
      minWords: 70, maxWords: 150,
      rubric: "Total 15 points. Task (4 pts): daily routine with at least two clock times (a las ocho, a las cinco y media), what the learner eats, two likes, today's weather, and one weekend plan; 0.5 pt per element, max 4. Present tense (4 pts): consistently correct regular -AR/-ER/-IR forms (trabajo, comes, vivimos) and irregular verbs (soy, estoy, tengo, hago, voy, prefiero); deduct 1 pt per recurring error type. Structures of the level (4 pts): at least three of these used correctly: ir a + infinitive (voy a ir…), gustar (me gusta / me gustan, correct agreement), weather with hacer (hace sol, hace frío), estar + gerund (estoy comiendo), a frequency adverb (siempre, a veces, nunca), time expression (por la mañana, a las ocho); about 1.3 pts each. Vocabulary, connectors and coherence (3 pts): relevant A1 words, connectors (y, pero, después, luego), clear order. No past or future simple tenses are expected; do not penalise accents or ¿ ¡ missing at A1. Under 70 words: cap the total at 9.",
      reference: "Los lunes me levanto a las siete y empiezo a trabajar a las ocho. Trabajo en una oficina y termino a las cinco y media. Como en casa: normalmente como pasta o ensalada y bebo agua. Me gusta cocinar y me gustan las películas. Hoy hace sol, pero hace un poco de frío. El sábado voy a ir al parque con mi hermana y después vamos a comer en un restaurante. Siempre estoy muy contenta los fines de semana."
    },
    // ------------------------------------------------------------ VIII
    {
      id: "speaking", num: "VIII", title: "Expresión oral: en el restaurante", titleFr: "Expression orale : au restaurant",
      points: 10, skill: "eo", type: "ai-oral",
      instructions: "Habla al micrófono durante unos 45 segundos.",
      instructionsFr: "Parle au micro pendant environ 45 secondes.",
      prompt: "Estás en un restaurante en Madrid. Saluda al camarero, pide una mesa para dos, pide de primero, de segundo y de beber, pregunta cuánto cuesta el menú del día y pide la cuenta.",
      promptFr: "Tu es dans un restaurant à Madrid. Salue le serveur, demande une table pour deux, commande une entrée, un plat et une boisson, demande combien coûte le menu du jour et demande l'addition.",
      minWords: 25, targetSeconds: 45,
      rubric: "Total 10 points. Task (4 pts): greets; asks for a table for two; orders a starter, a main course and a drink; asks the price of the menu; asks for the bill; 0.8 pt per element. Forms (3 pts): polite request forms (quería / quiero / ¿me trae…?), correct present tense (quiero, tomo, cuesta), correct gender and agreement (una sopa, el pescado), question with ¿cuánto cuesta? Fluency and vocabulary (3 pts): food and restaurant vocabulary from level A1, short connected sentences, politeness (por favor, gracias). Pronunciation cannot be judged finely from a transcript: judge content, forms and apparent fluency. Under 25 words: cap the total at 5.",
      reference: "Buenas tardes. Quería una mesa para dos, por favor. De primero quiero una sopa y de segundo pescado. Para beber, agua, por favor. ¿Cuánto cuesta el menú del día? Muchas gracias. La cuenta, por favor."
    }
  ],

  // ===================================================================
  // RATTRAPAGE — mêmes thèmes, plus guidé
  // ===================================================================
  secondChance: {
    title: "Control de recuperación A1",
    titleFr: "Contrôle de rattrapage A1",
    objective: "Los mismos temas del nivel A1 con preguntas más guiadas para validar lo que has aprendido.",
    objectiveFr: "Les mêmes thèmes du niveau A1 avec des questions plus guidées pour valider tes acquis.",
    sections: [
      {
        id: "sc-vocab", num: "I", title: "Vocabulario", titleFr: "Vocabulaire",
        points: 20, skill: "vo", type: "mcq",
        instructions: "Elige la palabra correcta.",
        instructionsFr: "Choisis le mot correct.",
        items: [
          { q: "El hermano de mi madre es mi ___.", qFr: "Le frère de ma mère est mon ___.",
            opts: ["tío", "primo", "abuelo"], correct: 0,
            why: "Le frère de ta mère = ton oncle : el tío. Le primo est le fils de l'oncle ; el abuelo est le grand-père." },
          { q: "Hoy hace mucho sol y mucho ___.", qFr: "Aujourd'hui il y a beaucoup de soleil et il fait très ___.",
            opts: ["frío", "calor", "viento"], correct: 1,
            why: "Avec beaucoup de soleil, on dit « hace calor » (il fait chaud). Après « mucho », on met un nom : mucho calor." },
          { q: "Quiero una ___ de agua, por favor.", qFr: "Je voudrais une ___ d'eau, s'il vous plaît.",
            opts: ["botella", "plato", "camisa"], correct: 0,
            why: "« una botella de agua » = une bouteille d'eau. Un plato contient de la nourriture et une camisa est un vêtement." },
          { q: "¿Dónde ___ el metro? — En la plaza.", qFr: "Où ___ le métro ? — Sur la place.",
            opts: ["tiene", "hace", "está"], correct: 2,
            why: "Pour situer un lieu on emploie ESTAR : « ¿Dónde está el metro? »." },
          { q: "Mi madre trabaja en una escuela: es ___.", qFr: "Ma mère travaille dans une école : elle est ___.",
            opts: ["camarera", "profesora", "médica"], correct: 1,
            why: "Dans une école, le métier est « profesora ». « camarera » = serveuse, « médica » = femme médecin." }
        ]
      },
      {
        id: "sc-grammar", num: "II", title: "Gramática y conjugación", titleFr: "Grammaire et conjugaison",
        points: 20, skill: "gr", type: "mcq",
        instructions: "Elige la forma correcta del verbo o de la palabra.",
        instructionsFr: "Choisis la forme correcte du verbe ou du mot.",
        items: [
          { q: "Yo ___ de Francia.", qFr: "Je suis de France.",
            opts: ["estoy", "soy", "tengo"], correct: 1,
            why: "L'origine est une identité → SER : « soy de Francia »." },
          { q: "Mi hermana ___ quince años.", qFr: "Ma sœur a quinze ans.",
            opts: ["tiene", "tienes", "es"], correct: 0,
            why: "L'âge = TENER ; la sœur est « ella » → « tiene »." },
          { q: "Nosotros ___ en una oficina.", qFr: "Nous travaillons dans un bureau.",
            opts: ["trabajo", "trabajan", "trabajamos"], correct: 2,
            why: "Verbe en -AR, nosotros → « trabajamos »." },
          { q: "Mañana ___ al cine con mis amigos.", qFr: "Demain je vais au cinéma avec mes amis.",
            opts: ["voy", "vas", "va"], correct: 0,
            why: "IR avec yo → « voy ». « vas » est pour tú, « va » pour él / ella / usted." },
          { q: "Me ___ la música.", qFr: "J'aime la musique.",
            opts: ["gustas", "gusta", "gustan"], correct: 1,
            why: "« la música » est singulier → « me gusta ». « gustan » serait pour des choses au pluriel." }
        ]
      },
      {
        id: "sc-reading", num: "III", title: "Comprensión escrita", titleFr: "Compréhension écrite",
        points: 20, skill: "ce", type: "mcq",
        instructions: "Lee el texto y elige la respuesta correcta.",
        instructionsFr: "Lis le texte et choisis la bonne réponse.",
        passage: "Me llamo Pablo y tengo veinte años. Soy de Sevilla, pero vivo en Madrid porque estudio en la universidad. Mi hermana se llama Lucía y tiene quince años. Es simpática y muy alta.\n\nLos sábados voy al parque con mis amigos. Hoy hace calor y estamos en la plaza. Después vamos a comer pizza.",
        items: [
          { q: "¿Por qué vive Pablo en Madrid?", qFr: "Pourquoi Pablo habite-t-il à Madrid ?",
            opts: ["Porque estudia allí", "Porque trabaja allí", "Porque es de Madrid"], correct: 0,
            why: "« vivo en Madrid porque estudio en la universidad ». Il est de Séville, pas de Madrid." },
          { q: "¿Cómo es Lucía?", qFr: "Comment est Lucía ?",
            opts: ["Baja y tímida", "Simpática y alta", "Joven y aburrida"], correct: 1,
            why: "« Es simpática y muy alta » : sympathique et très grande." },
          { q: "¿Qué tiempo hace hoy?", qFr: "Quel temps fait-il aujourd'hui ?",
            opts: ["Hace frío", "Llueve", "Hace calor"], correct: 2,
            why: "« Hoy hace calor » : il fait chaud." },
          { q: "¿Qué van a comer?", qFr: "Qu'est-ce qu'ils vont manger ?",
            opts: ["Pizza", "Paella", "Ensalada"], correct: 0,
            why: "« Después vamos a comer pizza » : futur proche, ir a + infinitif." }
        ]
      },
      {
        id: "sc-listening", num: "IV", title: "Comprensión oral", titleFr: "Compréhension orale",
        points: 20, skill: "co", type: "mcq",
        instructions: "Escucha y elige la respuesta correcta.",
        instructionsFr: "Écoute et choisis la bonne réponse.",
        items: [
          { audio: "Me llamo Ana, tengo veinticinco años y vivo en Madrid.",
            q: "¿Cuántos años tiene Ana?", qFr: "Quel âge a Ana ?",
            opts: ["Veinte", "Veinticinco", "Treinta"], correct: 1,
            why: "« veinticinco » = 25. Veinte = 20, treinta = 30." },
          { audio: [
              { who: "A", text: "¿Qué hora es?" },
              { who: "B", text: "Son las tres y media." }
            ],
            q: "¿Qué hora es?", qFr: "Quelle heure est-il ?",
            opts: ["Las tres y media", "Las cuatro", "Las tres menos cuarto"], correct: 0,
            why: "« las tres y media » = 15 h 30. « y media » veut dire et demie." },
          { audio: "Hoy hace frío y llueve. Voy a quedarme en casa.",
            q: "¿Qué va a hacer la persona?", qFr: "Que va faire la personne ?",
            opts: ["Ir al parque", "Quedarse en casa", "Viajar en tren"], correct: 1,
            why: "« Voy a quedarme en casa » : elle reste à la maison à cause du froid et de la pluie." },
          { audio: [
              { who: "A", text: "Quería una camisa azul, por favor." },
              { who: "B", text: "Aquí tiene. Cuesta veinte euros." }
            ],
            q: "¿De qué color es la camisa?", qFr: "De quelle couleur est la chemise ?",
            opts: ["Verde", "Blanca", "Azul"], correct: 2,
            why: "« una camisa azul » : la chemise est bleue." }
        ]
      },
      {
        id: "sc-writing", num: "V", title: "Escritura guiada", titleFr: "Écriture guidée",
        points: 20, skill: "ee", type: "ai-text",
        instructions: "Completa cada frase y escribe un pequeño texto de 5 a 6 frases.",
        instructionsFr: "Complète chaque phrase et écris un petit texte de 5 à 6 phrases.",
        prompt: "Continúa estas frases con tus datos:\n1. Me llamo … y tengo … años.\n2. Soy de … y vivo en …\n3. Mi familia: tengo … (hermanos, padres…). Mi … es …\n4. Me gusta … y me gustan …\n5. Hoy hace … y mañana voy a …",
        promptFr: "Continue ces phrases avec tes informations :\n1. Je m'appelle … et j'ai … ans.\n2. Je suis de … et j'habite à …\n3. Ma famille : j'ai … (frères et sœurs, parents…). Mon / ma … est …\n4. J'aime … et j'aime … (pluriel).\n5. Aujourd'hui il fait … et demain je vais …",
        minWords: 30, maxWords: 90,
        rubric: "Total 20 points. Task (6 pts): the five prompts are all answered with a complete sentence; 1.2 pts per prompt. Verb forms (8 pts): me llamo, tengo … años, soy de, vivo en, me gusta (singular or infinitive) and me gustan (plural), hace + weather, voy a + infinitive; about 1 pt per correct structure; deduct for recurring errors such as 'soy 20 años' or 'me gusta los libros'. Agreement and vocabulary (4 pts): correct gender and number (mi hermana es alta), relevant A1 words. Coherence (2 pts): readable, connected sentences. Missing accents and ¿ ¡ are NOT penalised. Under 30 words: cap the total at 10.",
        reference: "Me llamo Marta y tengo treinta años. Soy de Lyon y vivo en Madrid. Tengo un hermano y una hermana. Mi hermana es alta y simpática. Me gusta bailar y me gustan los perros. Hoy hace sol y mañana voy a visitar a mis abuelos."
      }
    ]
  }
};


// ---- 226.js ----
E[226] = {
  code: "GC-A2",
  label: "Grand Contrôle A2",
  pickCode: "Contrôle A2",
  pickTitle: "Grand contrôle",
  level: "A2",
  standalone: true,
  title: "Gran control A2 (A2.1 – A2.12)",
  titleFr: "Grand contrôle A2 (A2.1 – A2.12)",
  objective: "Mostrar que dominas los tiempos del nivel A2: pasado, futuro, condicional, pronombres, comparativos e imperativo.",
  objectiveFr: "Montrer que tu maîtrises les temps du niveau A2 : passé, futur, conditionnel, pronoms, comparatifs et impératif.",
  nextPreview: "Grand contrôle A1 + A2 pour débloquer le B1.",
  sections: [
    // ------------------------------------------------------------ I
    {
      id: "vocab", num: "I", title: "Vocabulario", titleFr: "Vocabulaire",
      points: 10, skill: "vo", type: "fill",
      instructions: "Completa las frases con una palabra de la lista. Hay palabras que sobran.",
      instructionsFr: "Complète les phrases avec un mot de la liste. Certains mots sont en trop.",
      bank: ["billete", "receta", "muela", "retraso", "peatones", "pueblo", "piscina", "sueldo", "andén", "regalo", "mensaje"],
      items: [
        { text: "Para viajar en tren, compro un ___ en la estación.",
          blanks: [["billete", "boleto"]],
          why: "« el billete » (Espagne) / « el boleto » (Amérique latine) = le billet de transport." },
        { text: "El médico me da una ___ para comprar la medicina en la farmacia.",
          blanks: [["receta"]],
          why: "« la receta » = l'ordonnance (aussi la recette de cuisine). Chez le médecin, c'est l'ordonnance." },
        { text: "Me duele una ___ y voy al dentista.",
          blanks: [["muela", "diente"]],
          why: "« la muela » = la molaire (la dent de derrière) ; « el diente » = la dent. Le dentiste soigne les dents." },
        { text: "El tren llega con una hora de ___: no es puntual.",
          blanks: [["retraso"]],
          why: "« el retraso » = le retard. « un retraso de una hora » = une heure de retard." },
        { text: "Cruzo la calle por el paso de ___.",
          blanks: [["peatones"]],
          why: "« el paso de peatones » = le passage piéton (pluriel obligatoire dans l'expression)." },
        { text: "Mi abuela vivía en un ___ pequeño, no en una ciudad grande.",
          blanks: [["pueblo"]],
          why: "« el pueblo » = le village, par opposition à la ciudad. Vocabulaire des souvenirs d'enfance (imparfait)." },
        { text: "En verano, nadaba en la ___ del jardín de mi casa.",
          blanks: [["piscina"]],
          why: "« la piscina » = la piscine. On nage dans une piscine, pas dans un « andén » (quai de gare)." },
        { text: "Mi hermano gana mucho dinero: su ___ es muy alto.",
          blanks: [["sueldo"]],
          why: "« el sueldo » = le salaire. « un regalo » est un cadeau et « un mensaje » un message." }
      ]
    },
    // ------------------------------------------------------------ II
    {
      id: "conj", num: "II", title: "Conjugación: los tiempos del A2", titleFr: "Conjugaison : les temps du A2",
      points: 20, skill: "cj", type: "fill",
      instructions: "Escribe el verbo entre paréntesis en el tiempo que se indica. Escribe solo la forma verbal.",
      instructionsFr: "Écris le verbe entre parenthèses au temps indiqué. Écris seulement la forme verbale.",
      items: [
        { text: "Ayer yo ___ (comer, pretérito indefinido) paella en un restaurante.",
          blanks: [["comí"]],
          why: "Indefinido régulier -ER, yo : -í → « comí » (avec accent écrit). « Ayer » marque une période terminée." },
        { text: "El año pasado mis padres ___ (ir, pretérito indefinido) a Perú.",
          blanks: [["fueron"]],
          why: "IR et SER partagent les mêmes formes au passé simple : fui, fuiste, fue, fuimos, fuisteis, fueron. Ellos → « fueron »." },
        { text: "Hoy yo ya ___ (escribir, pretérito perfecto) tres mensajes.",
          blanks: [["he escrito"]],
          why: "Perfecto = haber + participe. « hoy » est une période encore ouverte. Escribir a un participe irrégulier : escrito." },
        { text: "¿Alguna vez ___ (tú, estar, pretérito perfecto) en México?",
          blanks: [["has estado"]],
          why: "Expérience de vie, sans date → perfecto : « has estado » (haber à tú + estado)." },
        { text: "El próximo mes ella ___ (tener, futuro) vacaciones.",
          blanks: [["tendrá"]],
          why: "Futur irrégulier : tener → radical « tendr- » + terminaison -á → « tendrá »." },
        { text: "Señor, ¿___ (poder, condicional) ayudarme, por favor?",
          blanks: [["podría"]],
          why: "Condicional de politesse : poder → radical « podr- » (comme au futur) + -ía → « podría ». Avec « señor », forme usted." },
        { text: "De niño, mi abuelo ___ (ir, imperfecto) a la playa todos los veranos.",
          blanks: [["iba"]],
          why: "IR est l'un des trois irréguliers de l'imparfait : iba, ibas, iba… « todos los veranos » = habitude passée." },
        { text: "Perdone, ___ (girar, imperativo de usted) a la derecha en el semáforo.",
          blanks: [["gire"]],
          why: "Impératif usted des verbes en -AR : la voyelle s'inverse (-a → -e) : gira → « gire »." },
        { text: "Yo ___ (dormir, imperfecto) cuando ___ (sonar, pretérito indefinido) el teléfono.",
          blanks: [["dormía"], ["sonó"]],
          points: 4,
          why: "Décor en cours = imparfait (« dormía »). Événement qui l'interrompt = passé simple (« sonó », 3e personne : -ó)." }
      ]
    },
    // ------------------------------------------------------------ III
    {
      id: "grammar", num: "III", title: "Gramática", titleFr: "Grammaire",
      points: 15, skill: "gr", type: "mcq",
      instructions: "Elige la respuesta correcta.",
      instructionsFr: "Choisis la bonne réponse.",
      items: [
        { q: "Mi coche es ___ rápido que el tuyo.", qFr: "Ma voiture est plus rapide que la tienne.",
          opts: ["más", "tan", "mejor"], correct: 0,
          why: "Supériorité : más + adjectif + que. « tan » demande « como » (tan rápido como) et « mejor » est un comparatif à lui seul." },
        { q: "¿Tienes el pasaporte? — Sí, ___ tengo en la maleta.", qFr: "Tu as le passeport ? — Oui, je l'ai dans la valise.",
          opts: ["le", "la", "lo"], correct: 2,
          why: "COD masculin singulier (el pasaporte) → « lo », placé avant le verbe conjugué. « la » serait pour un nom féminin ; « le » est un COI." },
        { q: "Mi hermana necesita las llaves. Hoy ___ las doy.", qFr: "Ma sœur a besoin des clés. Aujourd'hui je les lui donne.",
          opts: ["le", "se", "las"], correct: 1,
          why: "Deux pronoms : le COI « le » devient « se » devant lo / la / los / las → « se las doy » (jamais « le las »)." },
        { q: "Este es el ___ restaurante de la ciudad.", qFr: "C'est le meilleur restaurant de la ville.",
          opts: ["más bueno", "buenísimo", "mejor"], correct: 2,
          why: "Superlatif de bueno : el mejor (bueno → mejor). On ne dit pas « más bueno » et « buenísimo » n'accompagne pas « el »." },
        { q: "Esta mañana yo ___ un café en el bar.", qFr: "Ce matin j'ai pris un café au bar.",
          opts: ["he tomado", "tomé", "tomaba"], correct: 0,
          why: "« Esta mañana » : période encore ouverte (on est dans la matinée ou dans la journée) → perfecto : he tomado." },
        { q: "Ayer ___ al cine con mis amigos.", qFr: "Hier je suis allé au cinéma avec mes amis.",
          opts: ["iba", "fui", "he ido"], correct: 1,
          why: "« Ayer » = période terminée, action unique → indefinido : fui. L'imparfait « iba » décrirait une habitude." },
        { q: "Cuando llegué a casa, mi madre ___ la cena.", qFr: "Quand je suis arrivé à la maison, ma mère préparait le dîner.",
          opts: ["preparó", "ha preparado", "preparaba"], correct: 2,
          why: "Action en cours (le décor) interrompue par l'événement « llegué » → imparfait : preparaba." },
        { q: "Si mañana llueve, ___ en casa.", qFr: "S'il pleut demain, je resterai à la maison.",
          opts: ["me quedaré", "me quedé", "me quedaba"], correct: 0,
          why: "Si + présent → futur : « me quedaré ». Le passé (quedé / quedaba) ne convient pas pour un projet à venir." },
        { q: "Tengo fiebre ___ dos días.", qFr: "J'ai de la fièvre depuis deux jours.",
          opts: ["hace", "desde hace", "desde"], correct: 1,
          why: "« desde hace » + durée = depuis (durée écoulée). « desde » s'emploie avec un point de départ (desde ayer)." },
        { q: "Perdone, señor: ___ la segunda calle a la izquierda.", qFr: "Excusez-moi, monsieur : prenez la deuxième rue à gauche.",
          opts: ["toma", "tomar", "tome"], correct: 2,
          why: "« señor » → usted. Impératif usted de tomar (-AR) : « tome ». « toma » est l'impératif de tú." }
      ]
    },
    // ------------------------------------------------------------ IV
    {
      id: "reading", num: "IV", title: "Comprensión escrita", titleFr: "Compréhension écrite",
      points: 10, skill: "ce", type: "mcq",
      instructions: "Lee el texto y contesta a las preguntas.",
      instructionsFr: "Lis le texte et réponds aux questions.",
      passage: "Mi nombre es Daniel y vivo en Valencia desde hace tres años. Antes vivía en un pueblo pequeño de Castilla, donde mi familia tenía una panadería. De niño, ayudaba a mi padre todas las mañanas y después iba al colegio andando.\n\nEl año pasado fui a Lisboa con mi hermana. Viajamos en tren y llegamos con una hora de retraso, pero nos gustó mucho la ciudad. Hemos hablado de volver este verano, pero todavía no hemos reservado el hotel.\n\nMañana tendré una cita con el médico porque me duele la espalda desde hace una semana. Si el médico me lo recomienda, descansaré unos días. Me gustaría viajar otra vez, pero primero tengo que mejorar.",
      items: [
        { q: "¿Desde cuándo vive Daniel en Valencia?", qFr: "Depuis quand Daniel habite-t-il à Valence ?",
          opts: ["Desde hace tres años", "Desde niño", "Desde el año pasado"], correct: 0,
          why: "« vivo en Valencia desde hace tres años ». L'enfance se passait dans le pueblo, pas à Valence." },
        { q: "¿Qué tenía su familia en el pueblo?", qFr: "Qu'est-ce que sa famille avait au village ?",
          opts: ["Un hotel", "Una panadería", "Una farmacia"], correct: 1,
          why: "« mi familia tenía una panadería » (imparfait de description) : une boulangerie." },
        { q: "¿Cómo viajaron a Lisboa?", qFr: "Comment ont-ils voyagé jusqu'à Lisbonne ?",
          opts: ["En avión", "En coche", "En tren"], correct: 2,
          why: "« Viajamos en tren » (indefinido : événement terminé). Le train est arrivé avec une heure de retard." },
        { q: "¿Qué no han hecho todavía Daniel y su hermana?", qFr: "Qu'est-ce que Daniel et sa sœur n'ont pas encore fait ?",
          opts: ["Hablar de volver", "Reservar el hotel", "Comprar los billetes"], correct: 1,
          why: "« todavía no hemos reservado el hotel » (perfecto + todavía no). Ils ont déjà parlé de revenir." },
        { q: "¿Por qué va Daniel al médico mañana?", qFr: "Pourquoi Daniel va-t-il chez le médecin demain ?",
          opts: ["Le duele la espalda", "Tiene fiebre", "Quiere una receta"], correct: 0,
          why: "« me duele la espalda desde hace una semana » : c'est la raison du rendez-vous." },
        { q: "¿Qué hará Daniel si el médico se lo recomienda?", qFr: "Que fera Daniel si le médecin le recommande ?",
          opts: ["Viajará a Lisboa", "Volverá al pueblo", "Descansará unos días"], correct: 2,
          why: "« Si el médico me lo recomienda, descansaré unos días » : si + présent → futur. Voyager reste un souhait (« me gustaría »), pas une décision." }
      ]
    },
    // ------------------------------------------------------------ V
    {
      id: "listening", num: "V", title: "Comprensión oral", titleFr: "Compréhension orale",
      points: 10, skill: "co", type: "mcq",
      instructions: "Escucha cada audio y elige la respuesta correcta.",
      instructionsFr: "Écoute chaque audio et choisis la bonne réponse.",
      items: [
        { audio: [
            { who: "A", text: "¿Qué hiciste el fin de semana?" },
            { who: "B", text: "El sábado fui a la playa con mi familia y el domingo descansé en casa." }
          ],
          q: "¿Qué hizo la persona el domingo?", qFr: "Qu'a fait la personne le dimanche ?",
          opts: ["Fue a la playa", "Descansó en casa", "Trabajó"], correct: 1,
          why: "« el domingo descansé en casa ». La plage, c'était le samedi (« el sábado fui a la playa »)." },
        { audio: [
            { who: "A", text: "Buenos días. ¿Qué le pasa?" },
            { who: "B", text: "Me duele la garganta y tengo tos desde hace tres días." }
          ],
          q: "¿Desde cuándo tiene tos?", qFr: "Depuis quand a-t-il de la toux ?",
          opts: ["Desde hace una semana", "Desde ayer", "Desde hace tres días"], correct: 2,
          why: "« desde hace tres días » = depuis trois jours. Ne confonds pas avec « desde ayer » (depuis hier)." },
        { audio: "Cuando era niña, vivía en un pueblo con mis abuelos. Todos los veranos íbamos al río y mi abuela preparaba la comida.",
          q: "¿Qué hacía la abuela?", qFr: "Que faisait la grand-mère ?",
          opts: ["Preparaba la comida", "Nadaba en el río", "Trabajaba en un banco"], correct: 0,
          why: "« mi abuela preparaba la comida » (imparfait d'habitude). C'est la famille qui allait à la rivière." },
        { audio: [
            { who: "A", text: "¿Has comprado el billete?" },
            { who: "B", text: "Todavía no, pero lo compraré mañana." }
          ],
          q: "¿Cuándo comprará el billete?", qFr: "Quand achètera-t-il le billet ?",
          opts: ["Hoy", "Mañana", "El año pasado"], correct: 1,
          why: "« lo compraré mañana » : futur simple, « lo » = el billete. « Todavía no » = pas encore." },
        { audio: [
            { who: "A", text: "Perdone, ¿podría decirme dónde está la estación?" },
            { who: "B", text: "Sí, siga recto dos calles y gire a la derecha. Está enfrente del parque." }
          ],
          q: "¿Dónde está la estación?", qFr: "Où est la gare ?",
          opts: ["Al lado del banco", "Enfrente del museo", "Enfrente del parque"], correct: 2,
          why: "« Está enfrente del parque » : en face du parc. Les consignes (siga, gire) sont à l'impératif usted." }
      ]
    },
    // ------------------------------------------------------------ VI
    {
      id: "writing-guided", num: "VI", title: "Escritura guiada: un correo a un amigo", titleFr: "Écriture guidée : un e-mail à un ami",
      points: 10, skill: "ee", type: "ai-text",
      instructions: "Escribe un correo de 5 a 8 frases.",
      instructionsFr: "Écris un e-mail de 5 à 8 phrases.",
      prompt: "Escribe un correo a un amigo. Cuéntale qué hiciste el fin de semana pasado (tres acciones), qué has hecho hoy (una o dos cosas) y qué harás o qué vas a hacer mañana.",
      promptFr: "Écris un e-mail à un ami. Raconte-lui ce que tu as fait le week-end dernier (trois actions), ce que tu as fait aujourd'hui (une ou deux choses) et ce que tu feras ou vas faire demain.",
      minWords: 50, maxWords: 110,
      rubric: "Total 10 points. Task (3 pts): three actions of last weekend, one or two actions of today, and a plan for tomorrow, in an e-mail frame (greeting such as 'Hola Ana' and a closing); 0.5 pt per element, max 3. Indefinido (3 pts): correct pretérito indefinido for the weekend, regular (comí, hablé, viajamos) AND at least one irregular (fui, hice, estuve, tuve); deduct 1 pt per recurring error type. Perfecto and future (2 pts): at least one correct pretérito perfecto for today (he trabajado, he comido) with the right participle, and a correct future simple or ir a + infinitive for tomorrow; 1 pt each. Vocabulary and coherence (2 pts): time markers (el sábado, ayer, hoy, mañana), connectors (y, luego, después, pero). Accents are lightly marked at A2: missing accents on verb forms (comí vs comi) cost at most 0.5 pt in total; do not penalise ¿ ¡. Under 50 words: cap the total at 6.",
      reference: "Hola Ana: ¿Qué tal? El sábado fui al cine con mi hermana y después cenamos en un restaurante. El domingo hice ejercicio y estuve en casa por la tarde. Hoy he trabajado mucho y he comido con mis compañeros. Mañana voy a visitar a mis abuelos y el viernes te llamaré. Un abrazo, Marta."
    },
    // ------------------------------------------------------------ VII
    {
      id: "writing-free", num: "VII", title: "Escritura libre: pasado, futuro y consejo", titleFr: "Écriture libre : passé, futur et conseil",
      points: 15, skill: "ee", type: "ai-text",
      instructions: "Escribe un texto de al menos 80 palabras.",
      instructionsFr: "Écris un texte d'au moins 80 mots.",
      prompt: "1) Describe cómo era tu vida cuando eras niño o niña (dónde vivías, qué hacías). 2) Cuenta un día especial: qué pasó (usa pasado simple e imperfecto). 3) Di qué harás el año que viene. 4) Termina con un consejo para un amigo que está cansado (con el condicional: yo que tú…, deberías…).",
      promptFr: "1) Décris comment était ta vie quand tu étais enfant (où tu habitais, ce que tu faisais). 2) Raconte un jour spécial : ce qui s'est passé (utilise le passé simple et l'imparfait). 3) Dis ce que tu feras l'année prochaine. 4) Termine par un conseil à un ami fatigué (avec le conditionnel : yo que tú…, deberías…).",
      minWords: 80, maxWords: 170,
      rubric: "Total 15 points. Task (3 pts): the four parts are present (childhood, special day, next year, advice); 0.75 pt per part. Imperfecto (3 pts): correct imperfect for habits and description (vivía, jugaba, era, iba, había, hacía), irregulars ser/ir/ver handled. Imperfecto vs indefinido (3 pts): in the special-day story the imperfect gives the setting (hacía sol, estaba cansado) and the indefinido the events (llegué, sonó, fui, hice); deduct 1 pt per recurring confusion. Future and conditional (3 pts): correct future simple (iré, tendré, viajaré) and at least one correct conditional (deberías descansar, yo que tú me iría, podrías…); 1.5 pts each. Vocabulary, connectors and coherence (3 pts): time markers (de niño, un día, de repente, el año que viene), connectors (porque, pero, además, por eso), clear organisation. Missing accents cost at most 1 pt in total; do not penalise ¿ ¡. Under 80 words: cap the total at 9.",
      reference: "Cuando era niña, vivía en un pueblo pequeño con mis abuelos. Jugaba en el jardín todos los días y nadaba en la piscina en verano. Un día especial fue mi cumpleaños de los diez años: hacía mucho sol y mis amigos estaban en casa cuando mi abuela llegó con una tarta enorme. Cantamos, comimos y bailamos hasta la noche. El año que viene viajaré a Perú con mi hermana y visitaré Machu Picchu. A mi amigo, que está muy cansado, le diría: yo que tú descansaría un fin de semana y deberías dormir más."
    },
    // ------------------------------------------------------------ VIII
    {
      id: "speaking", num: "VIII", title: "Expresión oral: una cita con el médico", titleFr: "Expression orale : un rendez-vous chez le médecin",
      points: 10, skill: "eo", type: "ai-oral",
      instructions: "Habla al micrófono durante unos 60 segundos.",
      instructionsFr: "Parle au micro pendant environ 60 secondes.",
      prompt: "Llamas a la consulta de un médico. Pide una cita con educación (usa el condicional: me gustaría, ¿podría…?). Explica qué te duele, desde cuándo y qué hiciste ayer. Pregunta qué hora es posible mañana.",
      promptFr: "Tu appelles le cabinet d'un médecin. Demande un rendez-vous poliment (utilise le conditionnel : me gustaría, ¿podría…?). Explique ce qui te fait mal, depuis quand et ce que tu as fait hier. Demande quelle heure est possible demain.",
      minWords: 35, targetSeconds: 60,
      rubric: "Total 10 points. Task (4 pts): polite request for an appointment; what hurts; since when (desde hace…); something done yesterday; asks for a time tomorrow; 0.8 pt per element. Forms (4 pts): conditional of politeness (me gustaría, ¿podría…?, querría), doler (me duele / me duelen, correct agreement), desde hace + duration, correct indefinido for yesterday (fui, trabajé, tomé, estuve), usted when addressing the secretary. Fluency and vocabulary (2 pts): health vocabulary (cabeza, garganta, fiebre, tos, cita), short connected sentences, politeness. Pronunciation cannot be judged finely from a transcript: judge content, forms and apparent fluency. Under 35 words: cap the total at 5.",
      reference: "Buenos días. Me gustaría pedir una cita con el médico, por favor. Me duele la garganta y tengo tos desde hace cuatro días. Ayer fui a trabajar, pero me sentí muy mal y tomé un té. ¿Podría darme una cita mañana por la mañana? ¿Tiene hora libre a las diez? Muchas gracias."
    }
  ],

  // ===================================================================
  // RATTRAPAGE — mêmes thèmes, plus guidé
  // ===================================================================
  secondChance: {
    title: "Control de recuperación A2",
    titleFr: "Contrôle de rattrapage A2",
    objective: "Los mismos temas del nivel A2 con preguntas más guiadas para validar lo que has aprendido.",
    objectiveFr: "Les mêmes thèmes du niveau A2 avec des questions plus guidées pour valider tes acquis.",
    sections: [
      {
        id: "sc-vocab", num: "I", title: "Vocabulario", titleFr: "Vocabulaire",
        points: 20, skill: "vo", type: "mcq",
        instructions: "Elige la palabra correcta.",
        instructionsFr: "Choisis le mot correct.",
        items: [
          { q: "Para viajar en tren compro un ___.", qFr: "Pour voyager en train, j'achète un ___.",
            opts: ["billete", "regalo", "mensaje"], correct: 0,
            why: "« el billete » = le billet de transport. Un regalo est un cadeau, un mensaje un message." },
          { q: "Me duele la cabeza y tengo fiebre: voy al ___.", qFr: "J'ai mal à la tête et de la fièvre : je vais chez le ___.",
            opts: ["banco", "médico", "museo"], correct: 1,
            why: "En cas de maladie, on va chez le médecin : el médico." },
          { q: "Cuando era niña, vivía en un ___ pequeño con mis abuelos.", qFr: "Quand j'étais petite, je vivais dans un petit ___ avec mes grands-parents.",
            opts: ["semáforo", "aeropuerto", "pueblo"], correct: 2,
            why: "« el pueblo » = le village : on y vit, contrairement à un semáforo (feu) ou un aeropuerto." },
          { q: "El tren llegó con una hora de ___.", qFr: "Le train est arrivé avec une heure de ___.",
            opts: ["retraso", "viaje", "salida"], correct: 0,
            why: "« un retraso » = un retard. « una hora de retraso » = une heure de retard." },
          { q: "Mi hermano gana mucho dinero: tiene un buen ___.", qFr: "Mon frère gagne beaucoup d'argent : il a un bon ___.",
            opts: ["mensaje", "regalo", "sueldo"], correct: 2,
            why: "« el sueldo » = le salaire, l'argent gagné en travaillant." }
        ]
      },
      {
        id: "sc-grammar", num: "II", title: "Gramática y conjugación", titleFr: "Grammaire et conjugaison",
        points: 20, skill: "gr", type: "mcq",
        instructions: "Elige la forma correcta.",
        instructionsFr: "Choisis la forme correcte.",
        items: [
          { q: "Ayer ___ al cine.", qFr: "Hier je suis allé au cinéma.",
            opts: ["iba", "fui", "he ido"], correct: 1,
            why: "« Ayer » = période terminée, action unique → indefinido : fui." },
          { q: "Hoy ___ mucho trabajo.", qFr: "Aujourd'hui j'ai eu beaucoup de travail.",
            opts: ["he tenido", "tuve", "tenía"], correct: 0,
            why: "« Hoy » = période ouverte → perfecto : haber + participe (he tenido)." },
          { q: "De niña, ___ en un pueblo.", qFr: "Petite, je vivais dans un village.",
            opts: ["viví", "he vivido", "vivía"], correct: 2,
            why: "« De niña » = habitude ou situation passée sans limite → imparfait : vivía." },
          { q: "Mañana ___ a mi madre.", qFr: "Demain j'appellerai ma mère.",
            opts: ["llamé", "llamaré", "llamaba"], correct: 1,
            why: "« Mañana » appelle le futur : infinitif + -é → llamaré." },
          { q: "¿Tienes mi libro? — Sí, ___ tengo.", qFr: "Tu as mon livre ? — Oui, je l'ai.",
            opts: ["lo", "la", "le"], correct: 0,
            why: "COD masculin singulier (el libro) → « lo »." }
        ]
      },
      {
        id: "sc-reading", num: "III", title: "Comprensión escrita", titleFr: "Compréhension écrite",
        points: 20, skill: "ce", type: "mcq",
        instructions: "Lee el texto y elige la respuesta correcta.",
        instructionsFr: "Lis le texte et choisis la bonne réponse.",
        passage: "Ayer fui al médico porque me duele la espalda desde hace una semana. El médico me dio una receta y me dijo: «Descanse unos días». Hoy he comprado la medicina en la farmacia. Mañana me quedaré en casa y el sábado visitaré a mi hermana.",
        items: [
          { q: "¿Adónde fue ayer?", qFr: "Où est-il / elle allé(e) hier ?",
            opts: ["A la farmacia", "Al médico", "Al banco"], correct: 1,
            why: "« Ayer fui al médico » (indefinido). La pharmacie, c'est aujourd'hui." },
          { q: "¿Desde cuándo le duele la espalda?", qFr: "Depuis quand a-t-il / elle mal au dos ?",
            opts: ["Desde hace una semana", "Desde ayer", "Desde hace un mes"], correct: 0,
            why: "« desde hace una semana » = depuis une semaine." },
          { q: "¿Qué ha comprado hoy?", qFr: "Qu'a-t-il / elle acheté aujourd'hui ?",
            opts: ["Una receta", "Un billete", "La medicina"], correct: 2,
            why: "« Hoy he comprado la medicina » (perfecto). La receta lui a été donnée par le médecin." },
          { q: "¿Qué hará mañana?", qFr: "Que fera-t-il / elle demain ?",
            opts: ["Se quedará en casa", "Visitará a su hermana", "Irá al médico"], correct: 0,
            why: "« Mañana me quedaré en casa » (futur). La visite à la sœur est pour le samedi." }
        ]
      },
      {
        id: "sc-listening", num: "IV", title: "Comprensión oral", titleFr: "Compréhension orale",
        points: 20, skill: "co", type: "mcq",
        instructions: "Escucha y elige la respuesta correcta.",
        instructionsFr: "Écoute et choisis la bonne réponse.",
        items: [
          { audio: "Ayer comí con mi hermana y después fuimos al cine.",
            q: "¿Qué hicieron después de comer?", qFr: "Qu'ont-ils fait après avoir mangé ?",
            opts: ["Se quedaron en casa", "Fueron al cine", "Fueron al parque"], correct: 1,
            why: "« después fuimos al cine » : indefinido de ir (fuimos)." },
          { audio: [
              { who: "A", text: "¿Podría decirme dónde está la farmacia?" },
              { who: "B", text: "Gire a la derecha y siga recto." }
            ],
            q: "¿Qué debe hacer primero?", qFr: "Que doit-il faire en premier ?",
            opts: ["Girar a la derecha", "Seguir recto", "Girar a la izquierda"], correct: 0,
            why: "« Gire a la derecha y siga recto » : d'abord tourner à droite (impératif usted), puis continuer tout droit." },
          { audio: "Cuando era niño, jugaba al fútbol todos los días.",
            q: "¿Qué hacía de niño?", qFr: "Que faisait-il enfant ?",
            opts: ["Nadaba", "Estudiaba", "Jugaba al fútbol"], correct: 2,
            why: "« jugaba al fútbol todos los días » : imparfait d'habitude." },
          { audio: "Mañana tendré una cita con el médico y pasado mañana saldré de viaje.",
            q: "¿Qué hará pasado mañana?", qFr: "Que fera-t-il après-demain ?",
            opts: ["Irá al médico", "Saldrá de viaje", "Descansará en casa"], correct: 1,
            why: "« pasado mañana saldré de viaje » = après-demain je partirai en voyage. Le médecin, c'est demain." }
        ]
      },
      {
        id: "sc-writing", num: "V", title: "Escritura guiada", titleFr: "Écriture guidée",
        points: 20, skill: "ee", type: "ai-text",
        instructions: "Completa cada frase con tus datos y escribe un pequeño texto de 5 a 6 frases.",
        instructionsFr: "Complète chaque phrase avec tes informations et écris un petit texte de 5 à 6 phrases.",
        prompt: "Continúa estas frases:\n1. Ayer yo … (una acción en pasado simple)\n2. Hoy he … (una acción en perfecto)\n3. De niño o niña, yo … (una costumbre en imperfecto)\n4. Mañana … (un plan: voy a… o futuro)\n5. ¿Podría…? (una petición educada)",
        promptFr: "Continue ces phrases :\n1. Hier je … (une action au passé simple)\n2. Aujourd'hui j'ai … (une action au perfecto)\n3. Enfant, je … (une habitude à l'imparfait)\n4. Demain … (un projet : voy a… ou futur)\n5. ¿Podría…? (une demande polie)",
        minWords: 30, maxWords: 100,
        rubric: "Total 20 points. Task (5 pts): the five prompts are answered with a complete sentence; 1 pt per prompt. Verb forms (10 pts), 2 pts each: correct pretérito indefinido (ayer comí / fui / hablé); correct pretérito perfecto with the right participle (hoy he trabajado / he hecho); correct imperfecto (vivía, jugaba, iba, era); correct ir a + infinitive or future simple (voy a viajar / viajaré); correct conditional of politeness (¿Podría ayudarme?). Vocabulary and coherence (3 pts): relevant A2 words and time markers. Spelling (2 pts): accents on verb forms are lightly marked (up to 1 pt deducted overall); ¿ ¡ not penalised. Under 30 words: cap the total at 10.",
        reference: "Ayer fui al cine con mi hermana. Hoy he trabajado toda la mañana. De niña, vivía en un pueblo pequeño y jugaba en el jardín. Mañana voy a visitar a mis abuelos. ¿Podría ayudarme, por favor?"
      }
    ]
  }
};


// ---- 227.js ----
E[227] = {
  code: "GC-A1A2",
  label: "Grand Contrôle A1 + A2",
  pickCode: "Contrôle A1+A2",
  pickTitle: "Grand contrôle",
  level: "A2",
  standalone: true,
  title: "Gran control A1 + A2 (todo el recorrido)",
  titleFr: "Grand contrôle A1 + A2 (tout le parcours)",
  objective: "Demostrar que dominas todo el recorrido A1 y A2: presente, pasado, futuro, condicional y vida cotidiana. Si lo apruebas, desbloqueas el nivel B1.",
  objectiveFr: "Démontrer que tu maîtrises tout le parcours A1 et A2 : présent, passé, futur, conditionnel et vie quotidienne. Si tu le réussis, tu débloques le niveau B1.",
  nextPreview: "Niveau B1 : tu vas exprimer tes opinions, tes souhaits et des hypothèses, et raconter de façon plus riche et plus longue.",
  sections: [
    // ------------------------------------------------------------ I
    {
      id: "vocab", num: "I", title: "Vocabulario", titleFr: "Vocabulaire",
      points: 10, skill: "vo", type: "fill",
      instructions: "Completa las frases con una palabra de la lista. Hay palabras que sobran.",
      instructionsFr: "Complète les phrases avec un mot de la liste. Certains mots sont en trop.",
      bank: ["tío", "vaso", "cerca", "despejado", "receta", "retraso", "pueblo", "sueldo", "lejos", "nublado", "regalo"],
      items: [
        { text: "El hermano de mi padre es mi ___.",
          blanks: [["tío"]],
          why: "Le frère de ton père = ton oncle : « el tío » (tía au féminin)." },
        { text: "Tengo sed: quiero un ___ de agua fría.",
          blanks: [["vaso"]],
          why: "« un vaso de agua » = un verre d'eau. L'article « un » demande un nom masculin." },
        { text: "El supermercado está ___ de mi casa: voy a pie en cinco minutos.",
          blanks: [["cerca"]],
          why: "« cerca de » = près de. À cinq minutes à pied, ce n'est pas « lejos »." },
        { text: "Hoy hace sol y no hay ninguna nube: el cielo está ___.",
          blanks: [["despejado"]],
          why: "« despejado » = dégagé (météo famille 2 : estar + adjectif). « nublado » est l'inverse." },
        { text: "El médico me da una ___ para comprar la medicina en la farmacia.",
          blanks: [["receta"]],
          why: "« la receta » = l'ordonnance, document du médecin pour la pharmacie." },
        { text: "El tren llega con una hora de ___.",
          blanks: [["retraso"]],
          why: "« el retraso » = le retard : « una hora de retraso »." },
        { text: "Mi madre vivía en un ___ pequeño cuando era niña.",
          blanks: [["pueblo"]],
          why: "« el pueblo » = le village. Vocabulaire des souvenirs d'enfance (imparfait)." },
        { text: "Mi hermano gana mucho dinero: su ___ es muy alto.",
          blanks: [["sueldo"]],
          why: "« el sueldo » = le salaire. Un « regalo » est un cadeau, mot qui ne convient pas ici." }
      ]
    },
    // ------------------------------------------------------------ II
    {
      id: "conj", num: "II", title: "Conjugación: presente y pasado, futuro, condicional", titleFr: "Conjugaison : présent, passé, futur, conditionnel",
      points: 20, skill: "cj", type: "fill",
      instructions: "Escribe el verbo entre paréntesis en el tiempo correcto. Si no se indica, usa el presente. Escribe solo la forma verbal.",
      instructionsFr: "Écris le verbe entre parenthèses au bon temps. Si rien n'est indiqué, utilise le présent. Écris seulement la forme verbale.",
      items: [
        { text: "Yo ___ (ser) de Lyon, pero ahora estoy en Madrid.",
          blanks: [["soy"]],
          why: "L'origine est une identité → SER : « soy de Lyon ». ESTAR sert pour le lieu actuel (estoy en Madrid)." },
        { text: "¿Dónde ___ (vivir) tú?",
          blanks: [["vives"]],
          why: "Verbe en -IR, tú → « vives » (-es)." },
        { text: "Mis padres ___ (tener) una casa en el campo.",
          blanks: [["tienen"]],
          why: "TENER, ellos → « tienen » (e → ie)." },
        { text: "Ahora mi hermana ___ (estar + cocinar) en la cocina.",
          blanks: [["está cocinando"]],
          why: "Présent continu : ESTAR + gérondif (-ar → -ando). Ella → « está cocinando »." },
        { text: "Yo ___ (preferir) viajar en tren.",
          blanks: [["prefiero"]],
          why: "PREFERIR : e → ie à yo → « prefiero »." },
        { text: "Ayer nosotros ___ (hacer, pretérito indefinido) la compra.",
          blanks: [["hicimos"]],
          why: "Indefinido irrégulier de hacer : radical « hic- » + -imos → « hicimos »." },
        { text: "Esta semana yo ___ (trabajar, pretérito perfecto) mucho.",
          blanks: [["he trabajado"]],
          why: "« Esta semana » : période ouverte → perfecto : he + participe (trabajado)." },
        { text: "Cuando era niño, ___ (vivir, imperfecto: yo) en Lima.",
          blanks: [["vivía"]],
          why: "Situation passée sans limite → imparfait en -IR : vivía (comme comía)." },
        { text: "El año que viene nosotros ___ (viajar, futuro) a Italia.",
          blanks: [["viajaremos"]],
          why: "Futur régulier : infinitif + -emos → « viajaremos » (sans accent à nosotros)." },
        { text: "Señora, ¿___ (poder, condicional) cerrar la ventana, por favor?",
          blanks: [["podría"]],
          why: "Condicional de politesse : radical irrégulier « podr- » + -ía → « podría »." }
      ]
    },
    // ------------------------------------------------------------ III
    {
      id: "grammar", num: "III", title: "Gramática", titleFr: "Grammaire",
      points: 15, skill: "gr", type: "mcq",
      instructions: "Elige la respuesta correcta.",
      instructionsFr: "Choisis la bonne réponse.",
      items: [
        { q: "En esta calle ___ un banco y una farmacia.", qFr: "Dans cette rue, il y a une banque et une pharmacie.",
          opts: ["está", "hay", "es"], correct: 1,
          why: "On annonce que des choses existent → « hay ». « está » servirait pour situer une chose connue." },
        { q: "Mi madre ___ cuarenta y cinco años.", qFr: "Ma mère a quarante-cinq ans.",
          opts: ["es", "está", "tiene"], correct: 2,
          why: "L'âge se dit avec TENER : « tiene cuarenta y cinco años »." },
        { q: "Hoy ___ mucho frío.", qFr: "Aujourd'hui il fait très froid.",
          opts: ["hace", "está", "es"], correct: 0,
          why: "Météo famille 1 : HACER + nom : « hace frío », « hace mucho frío »." },
        { q: "Voy ___ museo con mis amigos.", qFr: "Je vais au musée avec mes amis.",
          opts: ["a el", "al", "a la"], correct: 1,
          why: "a + el = « al », contraction obligatoire. « a la » irait avec un nom féminin." },
        { q: "A mi hermano ___ los deportes.", qFr: "Mon frère aime les sports.",
          opts: ["le gusta", "les gustan", "le gustan"], correct: 2,
          why: "Pronom « le » (a él) ; « los deportes » est pluriel → « gustan ». Le verbe s'accorde avec la chose aimée." },
        { q: "Mi hermana es ___ alta como yo.", qFr: "Ma sœur est aussi grande que moi.",
          opts: ["tan", "más", "tanto"], correct: 0,
          why: "Égalité avec un adjectif : tan + adjectif + como. « tanto » s'emploie devant un nom." },
        { q: "¿Has visto la película? — Sí, ___ vi ayer.", qFr: "Tu as vu le film ? — Oui, je l'ai vu hier.",
          opts: ["lo", "le", "la"], correct: 2,
          why: "COD féminin singulier (la película) → « la ». Avec « ayer », le verbe est à l'indefinido (vi)." },
        { q: "Cuando era niño, ___ al colegio andando.", qFr: "Quand j'étais enfant, j'allais à l'école à pied.",
          opts: ["fui", "he ido", "iba"], correct: 2,
          why: "Habitude dans le passé (« cuando era niño ») → imparfait : iba. « fui » est un événement unique." },
        { q: "Si hace sol mañana, ___ al parque.", qFr: "S'il fait beau demain, j'irai au parc.",
          opts: ["iré", "fui", "iba"], correct: 0,
          why: "Si + présent → futur : « iré » (ir est irrégulier au futur : iré, irás…). Les formes du passé ne vont pas avec « mañana »." },
        { q: "Señora, ___ por esta calle y gire a la derecha.", qFr: "Madame, continuez par cette rue et tournez à droite.",
          opts: ["sigue", "siga", "seguir"], correct: 1,
          why: "« Señora » → usted : impératif de seguir à usted = « siga ». « sigue » est l'impératif de tú." }
      ]
    },
    // ------------------------------------------------------------ IV
    {
      id: "reading", num: "IV", title: "Comprensión escrita", titleFr: "Compréhension écrite",
      points: 10, skill: "ce", type: "mcq",
      instructions: "Lee el texto y contesta a las preguntas.",
      instructionsFr: "Lis le texte et réponds aux questions.",
      passage: "Me llamo Carmen, tengo treinta y cinco años y trabajo en una oficina de Sevilla. Vivo con mi marido y mis dos hijos. Todos los días me levanto a las siete, tomo el autobús y llego al trabajo a las ocho y media.\n\nCuando era niña, vivía en un pueblo de la costa y todos los veranos nadaba en el mar con mis primos. El año pasado volví a ese pueblo para visitar a mis abuelos y fuimos juntos a la playa. Fue un fin de semana estupendo, aunque hacía mucho viento.\n\nEste mes he trabajado mucho y estoy cansada. Por eso, la semana que viene voy a descansar unos días. Mi marido dice que iremos a la montaña. A mí me encantaría ir a la playa, pero tendré que decidir con mis hijos.",
      items: [
        { q: "¿Dónde trabaja Carmen?", qFr: "Où travaille Carmen ?",
          opts: ["En una oficina", "En un hospital", "En una tienda"], correct: 0,
          why: "« trabajo en una oficina de Sevilla » : elle travaille dans un bureau." },
        { q: "¿A qué hora llega Carmen al trabajo?", qFr: "À quelle heure Carmen arrive-t-elle au travail ?",
          opts: ["A las ocho", "A las ocho y media", "A las nueve menos cuarto"], correct: 1,
          why: "« llego al trabajo a las ocho y media » : 8 h 30. Elle se lève à 7 h." },
        { q: "¿Qué hacía Carmen en verano de niña?", qFr: "Que faisait Carmen en été quand elle était petite ?",
          opts: ["Trabajaba con sus abuelos", "Viajaba en tren", "Nadaba en el mar con sus primos"], correct: 2,
          why: "« todos los veranos nadaba en el mar con mis primos » : imparfait d'habitude." },
        { q: "¿Qué tiempo hacía el fin de semana en el pueblo?", qFr: "Quel temps faisait-il pendant le week-end au village ?",
          opts: ["Hacía mucho sol", "Hacía mucho viento", "Llovía mucho"], correct: 1,
          why: "« hacía mucho viento » (imparfait de description). Le week-end lui-même « fue estupendo » (jugement au passé simple)." },
        { q: "¿Por qué va a descansar Carmen?", qFr: "Pourquoi Carmen va-t-elle se reposer ?",
          opts: ["Porque ha trabajado mucho", "Porque está enferma", "Porque tiene vacaciones"], correct: 0,
          why: "« Este mes he trabajado mucho y estoy cansada. Por eso… voy a descansar » : la cause est le travail, pas la maladie." },
        { q: "¿Qué prefiere Carmen para sus días de descanso?", qFr: "Que préfère Carmen pour ses jours de repos ?",
          opts: ["La montaña", "La ciudad", "La playa"], correct: 2,
          why: "« A mí me encantaría ir a la playa » : le conditionnel exprime son souhait. Son mari propose la montaña." }
      ]
    },
    // ------------------------------------------------------------ V
    {
      id: "listening", num: "V", title: "Comprensión oral", titleFr: "Compréhension orale",
      points: 10, skill: "co", type: "mcq",
      instructions: "Escucha cada audio y elige la respuesta correcta.",
      instructionsFr: "Écoute chaque audio et choisis la bonne réponse.",
      items: [
        { audio: [
            { who: "A", text: "¿Cómo te llamas y cuántos años tienes?" },
            { who: "B", text: "Me llamo Jorge, tengo veintidós años y vivo en Bogotá con mi familia." }
          ],
          q: "¿Dónde vive Jorge?", qFr: "Où habite Jorge ?",
          opts: ["En Madrid", "En Bogotá", "En Lima"], correct: 1,
          why: "« vivo en Bogotá con mi familia ». Vingt-deux est son âge, pas une adresse." },
        { audio: "Son las nueve menos cuarto. El tren sale a las nueve y media. Estamos en la estación.",
          q: "¿A qué hora sale el tren?", qFr: "À quelle heure part le train ?",
          opts: ["A las nueve y media", "A las nueve menos cuarto", "A las diez"], correct: 0,
          why: "« El tren sale a las nueve y media » = 9 h 30. L'heure actuelle est 8 h 45 (« nueve menos cuarto »)." },
        { audio: "Ayer tuve fiebre y fui al médico. Hoy ya me siento mejor, pero mañana me quedaré en casa.",
          q: "¿Qué hará la persona mañana?", qFr: "Que fera la personne demain ?",
          opts: ["Trabajará", "Irá al médico", "Se quedará en casa"], correct: 2,
          why: "« mañana me quedaré en casa » : futur. Le médecin, c'était hier (« fui al médico »)." },
        { audio: [
            { who: "A", text: "¿Has visto a Marta esta semana?" },
            { who: "B", text: "Sí, la vi el martes, pero hoy todavía no la he llamado." }
          ],
          q: "¿Cuándo vio B a Marta?", qFr: "Quand B a-t-il vu Marta ?",
          opts: ["Hoy", "El martes", "Ayer"], correct: 1,
          why: "« la vi el martes » (indefinido de ver : vi). « Hoy todavía no la he llamado » : il ne l'a pas encore appelée aujourd'hui." },
        { audio: [
            { who: "A", text: "Perdone, ¿podría decirme cómo llego al museo?" },
            { who: "B", text: "Claro. Siga recto y cruce la plaza. Está al lado de la biblioteca." }
          ],
          q: "¿Dónde está el museo?", qFr: "Où est le musée ?",
          opts: ["Al lado de la biblioteca", "Enfrente del banco", "Detrás de la estación"], correct: 0,
          why: "« Está al lado de la biblioteca » : à côté de la bibliothèque. Siga et cruce sont des impératifs usted." }
      ]
    },
    // ------------------------------------------------------------ VI
    {
      id: "writing-guided", num: "VI", title: "Escritura guiada: un correo a un compañero", titleFr: "Écriture guidée : un e-mail à un collègue",
      points: 10, skill: "ee", type: "ai-text",
      instructions: "Escribe un correo de 6 a 9 frases.",
      instructionsFr: "Écris un e-mail de 6 à 9 phrases.",
      prompt: "Escribe un correo a un compañero nuevo. Preséntate (tu nombre, tu trabajo o tus estudios, dónde vives, dos cosas que te gustan) y cuéntale qué hiciste el fin de semana pasado (dos o tres acciones).",
      promptFr: "Écris un e-mail à un nouveau collègue. Présente-toi (ton prénom, ton travail ou tes études, où tu habites, deux choses que tu aimes) et raconte-lui ce que tu as fait le week-end dernier (deux ou trois actions).",
      minWords: 50, maxWords: 110,
      rubric: "Total 10 points. Task (3 pts): the learner gives name, job or studies, residence, two likes, and two or three actions of last weekend, in an e-mail frame (greeting and closing); 0.4 pt per element, max 3. Present tense (3 pts): correct presents of llamarse / ser, trabajar or estudiar, vivir, and gustar (me gusta + singular or infinitive, me gustan + plural); deduct 1 pt per recurring error type. Pretérito indefinido (3 pts): correct indefinido for the weekend, with regular forms (comí, hablé, visitamos) AND at least one irregular (fui, hice, estuve, tuve); deduct 1 pt per recurring error type; wrong tense choice (present or imperfect for a finished past action) counts as an error. Vocabulary and coherence (1 pt): time markers (el sábado, el domingo, ayer), connectors (y, luego, después). Missing accents cost at most 0.5 pt in total; ¿ ¡ not penalised. Under 50 words: cap the total at 6.",
      reference: "Hola Pedro: Me llamo Lucía y trabajo en una oficina de Madrid, donde vivo desde hace dos años. Me gusta cocinar y me gustan las películas españolas. El sábado fui al cine con una amiga y después cenamos en un restaurante pequeño. El domingo hice ejercicio y estuve en casa por la tarde. Hasta el lunes. Un saludo, Lucía."
    },
    // ------------------------------------------------------------ VII
    {
      id: "writing-free", num: "VII", title: "Escritura libre: presente, pasado y futuro", titleFr: "Écriture libre : présent, passé et futur",
      points: 15, skill: "ee", type: "ai-text",
      instructions: "Escribe un texto de al menos 90 palabras.",
      instructionsFr: "Écris un texte d'au moins 90 mots.",
      prompt: "Escribe sobre tu vida en tres tiempos. 1) Presente: tu rutina y lo que te gusta. 2) Pasado: un viaje o un recuerdo (usa el pasado simple y el imperfecto para describir). 3) Futuro: tus proyectos para el año que viene (futuro o ir a) y una cosa que te gustaría hacer algún día (condicional).",
      promptFr: "Écris sur ta vie en trois temps. 1) Présent : ta routine et ce que tu aimes. 2) Passé : un voyage ou un souvenir (utilise le passé simple et l'imparfait pour décrire). 3) Futur : tes projets pour l'année prochaine (futur ou ir a) et une chose que tu aimerais faire un jour (conditionnel).",
      minWords: 90, maxWords: 180,
      rubric: "Total 15 points. Task (3 pts): the three parts are present (routine and likes; a trip or memory; projects and a wish); 1 pt per part. Present (3 pts): correct present for routine and likes, regular and irregular verbs (trabajo, vivo, soy, estoy, tengo, voy, prefiero), gustar with correct agreement; deduct 1 pt per recurring error type. Past (4 pts): correct pretérito indefinido for events (fui, visité, comimos, hice) AND correct imperfecto for background or description (hacía sol, era, había, estaba); choice between the two tenses is right; 2 pts each. Future and conditional (3 pts): correct future simple or ir a + infinitive (viajaré, voy a estudiar) and one correct conditional (me gustaría, querría, podría); 1.5 pts each. Vocabulary, connectors and coherence (2 pts): time markers (todos los días, el año pasado, de repente, el año que viene), connectors (porque, pero, después, por eso), clear organisation. Missing accents cost at most 1 pt in total; ¿ ¡ not penalised. Under 90 words: cap the total at 9.",
      reference: "Trabajo en una oficina y vivo en Lyon con mi hermana. Todos los días me levanto a las siete y voy al trabajo en tren. Me gusta cocinar y me gustan las películas. El verano pasado viajé a Portugal con mis amigos. Llegamos a Lisboa de noche y hacía calor. Visitamos los museos y comimos pescado en la playa; fue un viaje inolvidable. El año que viene voy a estudiar español dos horas por semana y viajaré a Perú en agosto. Algún día me gustaría vivir en Madrid."
    },
    // ------------------------------------------------------------ VIII
    {
      id: "speaking", num: "VIII", title: "Expresión oral: en la recepción de un hotel", titleFr: "Expression orale : à la réception d'un hôtel",
      points: 10, skill: "eo", type: "ai-oral",
      instructions: "Habla al micrófono durante unos 60 segundos.",
      instructionsFr: "Parle au micro pendant environ 60 secondes.",
      prompt: "Estás en la recepción de un hotel en Sevilla (habla de usted). Saluda, di tu nombre y pide una habitación doble para tres noches con educación. Pregunta si el desayuno está incluido. Explica por qué llegas tarde: ayer el tren llegó con retraso. Pregunta cómo llegar al centro y qué tiempo hará mañana.",
      promptFr: "Tu es à la réception d'un hôtel à Séville (vouvoie). Salue, dis ton nom et demande poliment une chambre double pour trois nuits. Demande si le petit-déjeuner est inclus. Explique pourquoi tu arrives tard : hier le train est arrivé avec du retard. Demande comment aller au centre et quel temps il fera demain.",
      minWords: 35, targetSeconds: 60,
      rubric: "Total 10 points. Task (4 pts): greeting and name; polite request for a double room for three nights; asks if breakfast is included; explains yesterday's delay (past); asks for directions or tomorrow's weather; 0.8 pt per element. Forms (4 pts): politeness (quería / me gustaría / ¿podría…?), usted forms (¿está incluido el desayuno?, ¿puede decirme…?), correct past for yesterday (el tren llegó con retraso / llegué tarde), correct future or ir a for tomorrow (¿qué tiempo hará? / va a hacer); present tense forms (me llamo, tengo) correct. Fluency and vocabulary (2 pts): hotel and travel vocabulary (habitación, noches, desayuno, retraso), short connected sentences. Pronunciation cannot be judged finely from a transcript: judge content, forms and apparent fluency. Under 35 words: cap the total at 5.",
      reference: "Buenas tardes. Me llamo Ana Ruiz y quería una habitación doble para tres noches, por favor. ¿Está incluido el desayuno? Perdone, llego tarde porque ayer el tren llegó con una hora de retraso. ¿Podría decirme cómo llego al centro? Y una última pregunta: ¿qué tiempo hará mañana? Muchas gracias."
    }
  ],

  // ===================================================================
  // RATTRAPAGE — mêmes thèmes, plus guidé
  // ===================================================================
  secondChance: {
    title: "Control de recuperación A1 + A2",
    titleFr: "Contrôle de rattrapage A1 + A2",
    objective: "Los mismos temas de los niveles A1 y A2 con preguntas más guiadas para validar lo que has aprendido.",
    objectiveFr: "Les mêmes thèmes des niveaux A1 et A2 avec des questions plus guidées pour valider tes acquis.",
    sections: [
      {
        id: "sc-vocab", num: "I", title: "Vocabulario", titleFr: "Vocabulaire",
        points: 20, skill: "vo", type: "mcq",
        instructions: "Elige la palabra correcta.",
        instructionsFr: "Choisis le mot correct.",
        items: [
          { q: "El hermano de mi madre es mi ___.", qFr: "Le frère de ma mère est mon ___.",
            opts: ["primo", "tío", "abuelo"], correct: 1,
            why: "Le frère de ta mère = ton oncle : el tío. Le primo est le cousin." },
          { q: "Quiero una ___ de agua, por favor.", qFr: "Je voudrais une ___ d'eau, s'il vous plaît.",
            opts: ["botella", "camisa", "receta"], correct: 0,
            why: "« una botella de agua » = une bouteille d'eau. Une camisa est une chemise." },
          { q: "El médico me da una ___ para la farmacia.", qFr: "Le médecin me donne une ___ pour la pharmacie.",
            opts: ["regalo", "estación", "receta"], correct: 2,
            why: "« la receta » = l'ordonnance. (Et « regalo » serait masculin : « un regalo ».)" },
          { q: "El tren llegó con mucho ___.", qFr: "Le train est arrivé avec beaucoup de ___.",
            opts: ["retraso", "billete", "jardín"], correct: 0,
            why: "« el retraso » = le retard : « con mucho retraso »." },
          { q: "Mi hermano gana mucho: tiene un buen ___.", qFr: "Mon frère gagne beaucoup : il a un bon ___.",
            opts: ["mensaje", "sueldo", "abrigo"], correct: 1,
            why: "« el sueldo » = le salaire. Un abrigo est un manteau." }
        ]
      },
      {
        id: "sc-grammar", num: "II", title: "Gramática y conjugación", titleFr: "Grammaire et conjugaison",
        points: 20, skill: "gr", type: "mcq",
        instructions: "Elige la forma correcta.",
        instructionsFr: "Choisis la forme correcte.",
        items: [
          { q: "Yo ___ de Francia.", qFr: "Je suis de France.",
            opts: ["soy", "estoy", "tengo"], correct: 0,
            why: "L'origine est une identité → SER : « soy de Francia »." },
          { q: "Ayer ___ al cine.", qFr: "Hier je suis allé au cinéma.",
            opts: ["iba", "fui", "he ido"], correct: 1,
            why: "« Ayer » = période terminée, événement unique → indefinido : fui." },
          { q: "De niño, ___ en un pueblo.", qFr: "Enfant, je vivais dans un village.",
            opts: ["viví", "he vivido", "vivía"], correct: 2,
            why: "« De niño » = situation passée habituelle → imparfait : vivía." },
          { q: "Mañana ___ a mi madre.", qFr: "Demain j'appellerai ma mère.",
            opts: ["llamaré", "llamé", "llamaba"], correct: 0,
            why: "« Mañana » appelle le futur : llamar + é → llamaré." },
          { q: "Perdone, señor: ___ a la derecha.", qFr: "Excusez-moi, monsieur : tournez à droite.",
            opts: ["girar", "gire", "gira"], correct: 1,
            why: "« señor » → usted. Impératif usted d'un verbe en -AR : -a → -e : « gire »." }
        ]
      },
      {
        id: "sc-reading", num: "III", title: "Comprensión escrita", titleFr: "Compréhension écrite",
        points: 20, skill: "ce", type: "mcq",
        instructions: "Lee el texto y elige la respuesta correcta.",
        instructionsFr: "Lis le texte et choisis la bonne réponse.",
        passage: "Me llamo Sofía y vivo en Bilbao. Trabajo en una tienda de ropa. Ayer fui al cine con mi hermana y vimos una película muy buena. De niña, vivía en un pueblo pequeño. El próximo mes viajaré a Chile.",
        items: [
          { q: "¿Dónde trabaja Sofía?", qFr: "Où travaille Sofía ?",
            opts: ["En una tienda de ropa", "En un cine", "En un banco"], correct: 0,
            why: "« Trabajo en una tienda de ropa » : un magasin de vêtements." },
          { q: "¿Con quién fue Sofía al cine?", qFr: "Avec qui Sofía est-elle allée au cinéma ?",
            opts: ["Con su madre", "Con su hermana", "Con una amiga"], correct: 1,
            why: "« Ayer fui al cine con mi hermana » (indefinido de ir)." },
          { q: "¿Dónde vivía de niña?", qFr: "Où vivait-elle enfant ?",
            opts: ["En Bilbao", "En una ciudad grande", "En un pueblo pequeño"], correct: 2,
            why: "« De niña, vivía en un pueblo pequeño » : imparfait de situation passée." },
          { q: "¿Qué hará el próximo mes?", qFr: "Que fera-t-elle le mois prochain ?",
            opts: ["Viajará a Chile", "Irá al cine", "Cambiará de trabajo"], correct: 0,
            why: "« El próximo mes viajaré a Chile » : futur simple." }
        ]
      },
      {
        id: "sc-listening", num: "IV", title: "Comprensión oral", titleFr: "Compréhension orale",
        points: 20, skill: "co", type: "mcq",
        instructions: "Escucha y elige la respuesta correcta.",
        instructionsFr: "Écoute et choisis la bonne réponse.",
        items: [
          { audio: "Tengo un hermano y una hermana. Mi hermana tiene diecisiete años.",
            q: "¿Cuántos años tiene la hermana?", qFr: "Quel âge a la sœur ?",
            opts: ["Quince", "Diecisiete", "Veinte"], correct: 1,
            why: "« diecisiete » = 17. Quince = 15." },
          { audio: "Hoy he comido en casa, pero ayer comí en un restaurante.",
            q: "¿Dónde comió ayer?", qFr: "Où a-t-il / elle mangé hier ?",
            opts: ["En un restaurante", "En casa", "En la oficina"], correct: 0,
            why: "« ayer comí en un restaurante » (indefinido). « hoy he comido en casa » (perfecto) concerne aujourd'hui." },
          { audio: [
              { who: "A", text: "¿Podría ayudarme? No encuentro la estación." },
              { who: "B", text: "Siga recto y gire a la izquierda." }
            ],
            q: "¿Qué debe hacer la persona?", qFr: "Que doit faire la personne ?",
            opts: ["Girar a la derecha", "Seguir recto y girar a la izquierda", "Tomar un taxi"], correct: 1,
            why: "« Siga recto y gire a la izquierda » : impératif usted, tout droit puis à gauche." },
          { audio: "El año que viene viajaremos a México en avión.",
            q: "¿Cómo viajarán?", qFr: "Comment voyageront-ils ?",
            opts: ["En tren", "En coche", "En avión"], correct: 2,
            why: "« en avión » : en avion. « viajaremos » est un futur simple." }
        ]
      },
      {
        id: "sc-writing", num: "V", title: "Escritura guiada", titleFr: "Écriture guidée",
        points: 20, skill: "ee", type: "ai-text",
        instructions: "Completa cada frase con tus datos y escribe un pequeño texto de 5 a 6 frases.",
        instructionsFr: "Complète chaque phrase avec tes informations et écris un petit texte de 5 à 6 phrases.",
        prompt: "Continúa estas frases:\n1. Me llamo … y vivo en … (presente)\n2. Me gusta … y me gustan … (gustar)\n3. Ayer yo … (una acción en pasado simple)\n4. De niño o niña, yo … (una costumbre en imperfecto)\n5. Mañana … (un plan: voy a… o futuro)",
        promptFr: "Continue ces phrases :\n1. Je m'appelle … et j'habite à … (présent)\n2. J'aime … et j'aime … au pluriel (gustar)\n3. Hier je … (une action au passé simple)\n4. Enfant, je … (une habitude à l'imparfait)\n5. Demain … (un projet : voy a… ou futur)",
        minWords: 30, maxWords: 100,
        rubric: "Total 20 points. Task (5 pts): the five prompts are answered with a complete sentence; 1 pt per prompt. Verb forms (10 pts), 2 pts each: correct present of llamarse and vivir (me llamo, vivo en); correct gustar with agreement (me gusta + singular or infinitive, me gustan + plural); correct pretérito indefinido (ayer fui / comí / hablé); correct imperfecto (vivía, jugaba, iba, era); correct ir a + infinitive or future simple (voy a viajar / viajaré). Vocabulary and coherence (3 pts): relevant A1 and A2 words and time markers. Spelling (2 pts): accents on verb forms lightly marked (at most 1 pt deducted overall); ¿ ¡ not penalised. Under 30 words: cap the total at 10.",
        reference: "Me llamo Marta y vivo en Lyon. Me gusta bailar y me gustan los perros. Ayer fui al cine con mi hermana. De niña, vivía en un pueblo pequeño y jugaba en el jardín. Mañana voy a visitar a mis abuelos."
      }
    ]
  }
};

})(window.LESSON_EXAMS_ES);
