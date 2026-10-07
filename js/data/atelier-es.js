// The Roots — contenu de l'« Atelier de grammaire espagnole » (écran js/screens/atelier-es.js).
// Chapitres (temps, verbes, prononciation, automatismes, informel), décodeur complet, 16 textes annotés A1.
export const ATELIER_ES = (function () {
  const ATELIER = { chapters: [], decoder: null, texts: [] };
ATELIER.chapters.push({
  id: "temps-futur", group: "temps", icon: "🔮", title: "Le futur", level: "A2",
  intro: "Le futur sert à parler de ce qui <b>arrivera</b>. Bonne nouvelle : c'est un des temps les plus simples en espagnol.",
  lessons: [{
    id: "futur-reguliers", title: "Le futur des verbes réguliers",
    why: "On l'utilise pour une action <b>à venir</b>, comme le futur simple français (« je parlerai »). Comme en français, on garde l'<b>infinitif entier</b> et on ajoute la terminaison.",
    rule: "1. Prends l'infinitif : <b>hablar</b>.<br>2. Ajoute : <b>-é, -ás, -á, -emos, -éis, -án</b>.<br>3. Mêmes terminaisons pour -ar, -er, -ir.",
    timeline: "hier ─── maintenant ───▶ ● demain (futuro)",
    table: { caption: "hablar (parler)", headers: ["Personne", "Forme", "Français"], rows: [
      ["yo", "hablar<b>é</b>", "je parlerai"], ["tú", "hablar<b>ás</b>", "tu parleras"], ["él/ella/usted", "hablar<b>á</b>", "il/elle parlera"],
      ["nosotros", "hablar<b>emos</b>", "nous parlerons"], ["vosotros", "hablar<b>éis</b>", "vous parlerez"], ["ellos/ustedes", "hablar<b>án</b>", "ils parleront"]] },
    examples: [
      { es: "Mañana hablaré con mi jefe.", fr: "Demain je parlerai avec mon chef." },
      { es: "¿Comerás con nosotros?", fr: "Tu mangeras avec nous ?" },
      { es: "Ellos vivirán en Madrid.", fr: "Ils vivront à Madrid.", note: "vivir + án" },
      { es: "El año que viene seremos más.", fr: "L'année prochaine nous serons plus nombreux." }
    ],
    pitfalls: [
      { wrong: "Yo hablaré mañana (sans accent : hablare)", right: "Yo hablaré mañana.", why: "L'accent change tout : sans lui, la forme n'existe pas." },
      { wrong: "Nosotros hablaremos (habléremos)", right: "Nosotros hablaremos.", why: "Pas d'accent à la forme nosotros." }
    ],
    exercises: [
      { type: "mcq", q: "« Ils parleront » se dit…", opts: ["hablan", "hablarán", "hablaron"], correct: 1, why: "Infinitif hablar + <b>án</b> = hablarán." },
      { type: "fill", text: "Mañana yo ___ (comer) paella.", answers: ["comeré"], why: "comer + é = comeré." },
      { type: "fill", text: "Tú ___ (vivir) aquí y nosotros ___ (trabajar) allí.", answers: [["vivirás"], ["trabajaremos"]], why: "vivir + ás ; trabajar + emos." },
      { type: "speak", es: "Mañana hablaré con mi jefe.", fr: "Demain je parlerai avec mon chef." },
      { type: "mcq", q: "Quelle terminaison pour « nosotros » ?", opts: ["-emos", "-amos", "-imos"], correct: 0, why: "Au futur, c'est toujours <b>-emos</b>." }
    ]
  }, {
    id: "futur-irreguliers", title: "Le futur irrégulier (tendré, haré…)",
    why: "Quelques verbes très fréquents changent de <b>racine</b> au futur, mais les terminaisons restent les mêmes.",
    rule: "tener → <b>tendr</b>-é, hacer → <b>har</b>-é, poder → <b>podr</b>-é, decir → <b>dir</b>-é.",
    examples: [
      { es: "Tendré tiempo el lunes.", fr: "J'aurai du temps lundi." },
      { es: "¿Qué harás mañana?", fr: "Que feras-tu demain ?" },
      { es: "No podremos venir.", fr: "Nous ne pourrons pas venir." }
    ],
    pitfalls: [{ wrong: "teneré", right: "tendré", why: "tener devient tendr- au futur." }],
    exercises: [
      { type: "mcq", q: "« Je ferai » =", opts: ["haceré", "haré", "hizo"], correct: 1, why: "hacer → har- + é." },
      { type: "fill", text: "Ellos ___ (tener) suerte.", answers: ["tendrán"], why: "tendr- + án." },
      { type: "speak", es: "¿Qué harás mañana?", fr: "Que feras-tu demain ?" }
    ]
  }]
});

ATELIER.chapters.push({
  id: "verbes-pronominaux", group: "verbes", icon: "🪞", title: "Les verbes pronominaux", level: "A1",
  intro: "Un verbe <b>pronominal</b>, c'est un verbe qui se conjugue avec un petit pronom (me, te, se…), comme « se lever » en français.",
  lessons: [{
    id: "pronominaux-base", title: "Me levanto, te duchas…",
    why: "Comme en français (« je <b>me</b> lève »), l'action revient sur la personne. Le pronom se place <b>avant</b> le verbe conjugué.",
    rule: "levantar<b>se</b> → <b>me</b> levanto, <b>te</b> levantas, <b>se</b> levanta, <b>nos</b> levantamos, <b>os</b> levantáis, <b>se</b> levantan.",
    table: { caption: "levantarse (se lever)", headers: ["Personne", "Forme", "Français"], rows: [
      ["yo", "<b>me</b> levant<b>o</b>", "je me lève"], ["tú", "<b>te</b> levant<b>as</b>", "tu te lèves"], ["él/ella", "<b>se</b> levant<b>a</b>", "il/elle se lève"]] },
    examples: [
      { es: "Me levanto a las siete.", fr: "Je me lève à sept heures." },
      { es: "¿A qué hora te acuestas?", fr: "À quelle heure te couches-tu ?" },
      { es: "Nos llamamos Ana y Luis.", fr: "Nous nous appelons Ana et Luis." }
    ],
    pitfalls: [
      { wrong: "Yo levanto a las siete.", right: "Me levanto a las siete.", why: "Sans « me », tu soulèves quelque chose !" },
      { wrong: "Levanto me.", right: "Me levanto.", why: "Le pronom va avant le verbe conjugué." }
    ],
    exercises: [
      { type: "mcq", q: "« Je me douche » =", opts: ["Me ducho", "Ducho", "Se ducho"], correct: 0, why: "yo → <b>me</b> + ducho." },
      { type: "fill", text: "Ella ___ llama Carmen.", answers: ["se"], why: "ella → se." },
      { type: "speak", es: "Me levanto a las siete.", fr: "Je me lève à sept heures." }
    ]
  }]
});


ATELIER.chapters.push({
  id: "temps-present", group: "temps", icon: "🕐", title: "Le présent", level: "A1",
  intro: "Le présent sert à parler de ce qui est <b>vrai maintenant</b>, de ce qu'on <b>fait d'habitude</b> et de ce qui se passe <b>en ce moment</b>. En espagnol, la <b>terminaison</b> du verbe en dit beaucoup : c'est la clé de tout.",
  lessons: [
  {
    id: "present-reguliers", title: "Les verbes réguliers en -ar, -er, -ir",
    why: "En français, « je parle » et « il parle » se prononcent pareil : il faut <b>obligatoirement</b> dire je/il. En espagnol, chaque personne a <b>sa propre terminaison</b> (hablo, habla…). Le verbe porte déjà la personne : le pronom sujet (yo, tú…) devient <b>facultatif</b> et on l'omet presque toujours. On ne le dit que pour insister ou lever un doute (<i>él</i> / <i>ella</i>).",
    rule: "1. Repère la fin de l'infinitif : <b>-ar</b>, <b>-er</b> ou <b>-ir</b>.<br>2. Enlève-la pour garder le radical : habl-, com-, viv-.<br>3. Ajoute la terminaison de la personne (voir tableau).<br>4. Ne dis pas le sujet sauf pour insister : « Hablo español », pas « Yo hablo español » (sauf contraste).<br>5. Piège : -er et -ir sont identiques sauf <b>nosotros</b> (-emos / -imos) et <b>vosotros</b> (-éis / -ís).",
    timeline: "hier ─── ● maintenant (hablo) ─── demain",
    table: { caption: "hablar (parler) · comer (manger) · vivir (vivre)", headers: ["Personne", "-ar", "-er", "-ir"], rows: [
      ["yo", "habl<b>o</b>", "com<b>o</b>", "viv<b>o</b>"],
      ["tú", "habl<b>as</b>", "com<b>es</b>", "viv<b>es</b>"],
      ["él / ella / usted", "habl<b>a</b>", "com<b>e</b>", "viv<b>e</b>"],
      ["nosotros", "habl<b>amos</b>", "com<b>emos</b>", "viv<b>imos</b>"],
      ["vosotros", "habl<b>áis</b>", "com<b>éis</b>", "viv<b>ís</b>"],
      ["ellos / ustedes", "habl<b>an</b>", "com<b>en</b>", "viv<b>en</b>"]] },
    examples: [
      { es: "Hablo español y francés.", fr: "Je parle espagnol et français.", note: "pas de « yo » : -o suffit" },
      { es: "Comes mucho pan.", fr: "Tu manges beaucoup de pain." },
      { es: "Mi hermana vive en Madrid.", fr: "Ma sœur vit à Madrid." },
      { es: "Trabajamos en una oficina.", fr: "Nous travaillons dans un bureau." },
      { es: "Ellos beben agua.", fr: "Ils boivent de l'eau." },
      { es: "¿Vivís aquí?", fr: "Vous habitez ici ? (vosotros)" }
    ],
    pitfalls: [
      { wrong: "Yo hablo, tú hablas, él habla… (toujours le sujet)", right: "Hablo, hablas, habla…", why: "Le sujet ne se répète pas : la terminaison l'indique déjà. L'ajouter partout sonne lourd." },
      { wrong: "Nosotros vivemos", right: "Nosotros vivimos", why: "En -ir, la forme nosotros est en -imos (pas -emos)." },
      { wrong: "Ella hablo", right: "Ella habla", why: "La terminaison doit correspondre à la personne : ella = -a." }
    ],
    exercises: [
      { type: "mcq", q: "Quelle terminaison pour « yo » au présent ?", opts: ["-a", "-o", "-as"], correct: 1, why: "Yo : toujours <b>-o</b> (hablo, como, vivo)." },
      { type: "fill", text: "Yo ___ (hablar) español.", answers: ["hablo"], why: "habl- + <b>o</b>." },
      { type: "mcq", q: "« Tu manges » se dit…", opts: ["comes", "comas", "come", "comos"], correct: 0, why: "-er : tú → <b>-es</b>." },
      { type: "fill", text: "Mi madre ___ (vivir) en París.", answers: ["vive"], why: "viv- + <b>e</b> (3e personne)." },
      { type: "speak", es: "Hablo español.", fr: "Je parle espagnol." },
      { type: "mcq", q: "Pourquoi peut-on dire « Hablo » sans « yo » ?", opts: ["Parce que « yo » n'existe pas", "Parce que c'est un verbe irrégulier", "Parce que la terminaison -o indique déjà la personne"], correct: 2, why: "La terminaison porte la personne ; le sujet est facultatif." },
      { type: "fill", text: "Nosotros ___ (comer) a las dos.", answers: ["comemos"], why: "-er : nosotros → <b>-emos</b>." },
      { type: "fill", text: "Tú ___ (trabajar) y ellos ___ (estudiar).", answers: [["trabajas"], ["estudian"]], why: "tú → -as ; ellos → -an." },
      { type: "mcq", q: "Quelle forme est correcte pour « nous habitons » ?", opts: ["vivemos", "vivamos", "vivimos"], correct: 2, why: "vivir → nosotros <b>-imos</b>." },
      { type: "speak", es: "Mi hermana vive en Madrid.", fr: "Ma sœur vit à Madrid." },
      { type: "fill", text: "Ustedes ___ (beber) café y yo ___ (beber) agua.", answers: [["beben"], ["bebo"]], why: "ustedes → -en ; yo → -o." },
      { type: "mcq", q: "« Ils travaillent » =", opts: ["trabajamos", "trabajan", "trabajas", "trabaja"], correct: 1, why: "ellos → <b>-an</b>." },
      { type: "speak", es: "Trabajamos y comemos juntos.", fr: "Nous travaillons et mangeons ensemble." }
    ]
  },
  {
    id: "present-irreguliers", title: "Les irréguliers les plus fréquents",
    why: "Les verbes les plus utilisés sont aussi les plus <b>irréguliers</b> : en français aussi (« être, aller, avoir, faire » ne suivent pas la règle). Plus un mot est fréquent, plus la langue le « garde » dans sa forme ancienne. Bonne nouvelle : il y a des <b>familles</b>. Famille 1 : la <b>1re personne en -go</b> (tengo, hago, vengo, digo, pongo, salgo). Famille 2 : la voyelle du radical change (e→ie, o→ue) sauf à nosotros/vosotros. Et quelques verbes uniques à apprendre par cœur (soy, estoy, voy, sé).",
    rule: "1. Apprends par cœur ser, estar, ir (les 3 plus importants).<br>2. Famille -go à yo : tener→tengo, hacer→hago, venir→vengo, decir→digo, poner→pongo, salir→salgo.<br>3. Famille e→ie : tener (tienes), venir (vienes), querer (quieres) ; o→ue : poder (puedes). Pas de changement à nosotros.<br>4. Cas à part : saber → <b>sé</b> (yo), ir → voy, ser → soy, estar → estoy.<br>5. Tener, venir, decir cumulent : -go à yo <i>et</i> changement de voyelle aux autres.",
    table: { caption: "Présent irrégulier (vosotros omis)", headers: ["Verbe", "yo", "tú", "él / ella", "nosotros", "ellos"], rows: [
      ["ser", "<b>soy</b>", "<b>eres</b>", "<b>es</b>", "<b>somos</b>", "<b>son</b>"],
      ["estar", "est<b>oy</b>", "est<b>ás</b>", "est<b>á</b>", "estamos", "est<b>án</b>"],
      ["ir", "<b>voy</b>", "<b>vas</b>", "<b>va</b>", "<b>vamos</b>", "<b>van</b>"],
      ["tener", "ten<b>go</b>", "t<b>ie</b>nes", "t<b>ie</b>ne", "tenemos", "t<b>ie</b>nen"],
      ["hacer", "ha<b>go</b>", "haces", "hace", "hacemos", "hacen"],
      ["venir", "ven<b>go</b>", "v<b>ie</b>nes", "v<b>ie</b>ne", "venimos", "v<b>ie</b>nen"],
      ["decir", "di<b>go</b>", "d<b>i</b>ces", "d<b>i</b>ce", "decimos", "d<b>i</b>cen"],
      ["poder", "p<b>ue</b>do", "p<b>ue</b>des", "p<b>ue</b>de", "podemos", "p<b>ue</b>den"],
      ["querer", "qu<b>ie</b>ro", "qu<b>ie</b>res", "qu<b>ie</b>re", "queremos", "qu<b>ie</b>ren"],
      ["saber", "<b>sé</b>", "sabes", "sabe", "sabemos", "saben"],
      ["poner", "pon<b>go</b>", "pones", "pone", "ponemos", "ponen"],
      ["salir", "sal<b>go</b>", "sales", "sale", "salimos", "salen"]] },
    examples: [
      { es: "Soy de Francia, pero estoy en Madrid.", fr: "Je suis de France, mais je suis à Madrid.", note: "ser = identité, estar = lieu" },
      { es: "Voy al trabajo en metro.", fr: "Je vais au travail en métro." },
      { es: "Tengo dos hermanos.", fr: "J'ai deux frères et sœurs." },
      { es: "Hago la compra los sábados.", fr: "Je fais les courses le samedi." },
      { es: "No sé, pero puedo preguntar.", fr: "Je ne sais pas, mais je peux demander." },
      { es: "Salgo de casa a las ocho.", fr: "Je sors de chez moi à huit heures." },
      { es: "¿Quieres venir con nosotros?", fr: "Tu veux venir avec nous ?" }
    ],
    pitfalls: [
      { wrong: "Yo tenigo / yo hago → « hacigo »", right: "Tengo / hago", why: "La finale -go se colle à la racine : ten-go, ha-go. On ne garde pas le -er/-ir." },
      { wrong: "Nosotros tienemos, queremos → « quieremos »", right: "Tenemos, queremos", why: "Le changement de voyelle n'existe pas à nosotros/vosotros : la botte « stoppe »." },
      { wrong: "Yo sabo", right: "Yo sé", why: "Saber est le seul à faire <b>sé</b> à yo (avec accent, pour le distinguer de « se »)." },
      { wrong: "Yo estoy de Francia", right: "Soy de Francia", why: "L'origine est une identité : on utilise ser, pas estar." }
    ],
    exercises: [
      { type: "mcq", q: "« Je suis (état / lieu) » =", opts: ["soy", "estoy", "eres"], correct: 1, why: "Estar → <b>estoy</b> (lieu, état). Soy = identité." },
      { type: "fill", text: "Yo ___ (tener) dos hijos.", answers: ["tengo"], why: "tener → tengo (-go à yo)." },
      { type: "mcq", q: "Quelle est la 1re personne de « hacer » ?", opts: ["hazo", "hace", "hago", "hacigo"], correct: 2, why: "hacer → ha<b>go</b>." },
      { type: "fill", text: "Nosotros ___ (ir) al mercado.", answers: ["vamos"], why: "ir : vamos (irrégulier total)." },
      { type: "speak", es: "Tengo hambre.", fr: "J'ai faim." },
      { type: "fill", text: "Tú ___ (querer) café y yo ___ (querer) té.", answers: [["quieres"], ["quiero"]], why: "querer : e→ie sauf nosotros." },
      { type: "mcq", q: "Dans « Nosotros ___ (poder) venir », la bonne forme est…", opts: ["podemos", "puedemos", "pueden"], correct: 0, why: "À nosotros, pas de changement : <b>podemos</b>." },
      { type: "fill", text: "No ___ (saber) la respuesta.", answers: ["sé"], why: "saber → yo <b>sé</b>." },
      { type: "mcq", q: "« Il dit » =", opts: ["dicen", "dices", "digo", "dice"], correct: 3, why: "decir : él <b>dice</b> (e→i)." },
      { type: "fill", text: "Yo ___ (salir) a las ocho y ___ (venir) a las seis.", answers: [["salgo"], ["vengo"]], why: "salir → salgo ; venir → vengo." },
      { type: "speak", es: "Voy al trabajo en metro.", fr: "Je vais au travail en métro." },
      { type: "fill", text: "Ellos ___ (tener) suerte y ___ (poder) viajar.", answers: [["tienen"], ["pueden"]], why: "tener e→ie, poder o→ue." },
      { type: "mcq", q: "Quel verbe a une 1re personne en -go ?", opts: ["querer", "poner", "poder", "saber"], correct: 1, why: "poner → pon<b>go</b>." },
      { type: "speak", es: "No sé, pero puedo preguntar.", fr: "Je ne sais pas, mais je peux demander." }
    ]
  },
  {
    id: "present-continu", title: "Le présent continu : estar + gérondif",
    why: "Le présent simple (<i>trabajo</i>) parle de l'<b>habitude</b> ou du général. Pour dire « <b>en ce moment même</b> », l'espagnol utilise <b>estar + gérondif</b>, comme le français « je suis en train de ». Le gérondif est invariable (jamais d'accord) : on ne change que <b>estar</b>.",
    rule: "1. Conjugue <b>estar</b> : estoy, estás, está, estamos, estáis, están.<br>2. Gérondif : -ar → <b>-ando</b> (hablando) ; -er / -ir → <b>-iendo</b> (comiendo, viviendo).<br>3. Irréguliers : voyelle seule avant -endo → <b>y</b> : leer → <b>leyendo</b>, oír → <b>oyendo</b>.<br>4. Changement de voyelle (verbes en -ir) : dormir → <b>durmiendo</b>, decir → <b>diciendo</b>, pedir → <b>pidiendo</b>.<br>5. Compare : « Trabajo en un banco » (habitude) ≠ « Estoy trabajando » (maintenant).",
    timeline: "hier ─── ● ▓▓▓ maintenant (estoy hablando) ▓▓▓ ─── demain",
    table: { caption: "Gérondifs", headers: ["Infinitif", "Gérondif", "Français"], rows: [
      ["hablar", "habl<b>ando</b>", "en parlant"],
      ["comer", "com<b>iendo</b>", "en mangeant"],
      ["vivir", "viv<b>iendo</b>", "en vivant"],
      ["leer", "le<b>yendo</b>", "en lisant"],
      ["dormir", "d<b>u</b>rm<b>iendo</b>", "en dormant"],
      ["decir", "d<b>i</b>c<b>iendo</b>", "en disant"],
      ["pedir", "p<b>i</b>d<b>iendo</b>", "en demandant"]] },
    examples: [
      { es: "Estoy cocinando ahora.", fr: "Je suis en train de cuisiner." },
      { es: "¿Qué estás haciendo?", fr: "Qu'est-ce que tu es en train de faire ?" },
      { es: "Mi hijo está durmiendo.", fr: "Mon fils est en train de dormir." },
      { es: "Estamos leyendo un libro.", fr: "Nous sommes en train de lire un livre." },
      { es: "Ellos están comiendo en la cocina.", fr: "Ils sont en train de manger dans la cuisine." },
      { es: "Trabajo en un banco, pero hoy estoy descansando.", fr: "Je travaille dans une banque, mais aujourd'hui je me repose." }
    ],
    pitfalls: [
      { wrong: "Estoy hablo / Estoy hablar", right: "Estoy hablando", why: "Après estar, toujours le gérondif (-ando / -iendo)." },
      { wrong: "Estoy leiendo", right: "Estoy leyendo", why: "Entre deux voyelles, le « i » devient « y »." },
      { wrong: "Estoy dormiendo → « durmando »", right: "Estoy durmiendo", why: "dormir est en -ir : -iendo, et la voyelle change (o→u)." },
      { wrong: "Estamos trabajandos", right: "Estamos trabajando", why: "Le gérondif est invariable : jamais de -s." }
    ],
    exercises: [
      { type: "mcq", q: "Gérondif de « hablar » ?", opts: ["hablendo", "hablando", "hablado"], correct: 1, why: "-ar → <b>-ando</b>." },
      { type: "fill", text: "Estoy ___ (comer) ahora.", answers: ["comiendo"], why: "-er → -iendo." },
      { type: "mcq", q: "Quelle phrase dit « en ce moment » ?", opts: ["Trabajo", "Trabajaré", "Estoy trabajando", "Trabajé"], correct: 2, why: "Estar + gérondif = action en cours." },
      { type: "fill", text: "Ella está ___ (leer) un libro.", answers: ["leyendo"], why: "leer → le<b>y</b>endo." },
      { type: "speak", es: "Estoy cocinando ahora.", fr: "Je suis en train de cuisiner." },
      { type: "fill", text: "Mi hijo está ___ (dormir).", answers: ["durmiendo"], why: "dormir → d<b>u</b>rmiendo." },
      { type: "mcq", q: "« Qu'est-ce que tu es en train de dire ? »", opts: ["¿Qué estás diciendo?", "¿Qué estás decindo?", "¿Qué estás digiendo?"], correct: 0, why: "decir → d<b>i</b>ciendo." },
      { type: "fill", text: "Nosotros ___ (estar) ___ (trabajar).", answers: [["estamos"], ["trabajando"]], why: "estar à nosotros : estamos ; trabajar → trabajando." },
      { type: "mcq", q: "Quelle phrase exprime une habitude ?", opts: ["Estoy corriendo", "Corro todos los días", "Estamos corriendo ahora"], correct: 1, why: "« Todos los días » = habitude → présent simple." },
      { type: "fill", text: "¿Qué ___ (estar) ___ (hacer) tú?", answers: [["estás"], ["haciendo"]], why: "tú → estás ; hacer → haciendo." },
      { type: "speak", es: "¿Qué estás haciendo?", fr: "Qu'est-ce que tu es en train de faire ?" },
      { type: "fill", text: "Ellos ___ (estar) ___ (pedir) la cuenta.", answers: [["están"], ["pidiendo"]], why: "pedir → p<b>i</b>diendo." },
      { type: "speak", es: "Estamos leyendo un libro.", fr: "Nous sommes en train de lire un livre." }
    ]
  }
  ]
});

ATELIER.chapters.push({
  id: "temps-ir-a", group: "temps", icon: "🚀", title: "Le futur proche (ir a)", level: "A1",
  intro: "En français : « je <b>vais</b> partir ». En espagnol : <b>voy a</b> partir. C'est le moyen le plus simple et le plus courant de parler de l'avenir, à l'oral surtout.",
  lessons: [
  {
    id: "ir-a-infinitif", title: "ir a + infinitif",
    why: "Même logique qu'en français : <b>aller</b> (conjugué) + <b>verbe à l'infinitif</b>. Seule différence : l'espagnol exige la préposition <b>a</b> entre les deux (« voy <b>a</b> comer »). Le sens vient de l'idée de « se diriger vers » l'action. Une fois le mécanisme acquis, tu peux parler du futur avec n'importe quel verbe, sans apprendre aucune autre conjugaison.",
    rule: "1. Conjugue <b>ir</b> : voy, vas, va, vamos, vais, van.<br>2. Ajoute <b>a</b> (obligatoire).<br>3. Mets le verbe à <b>l'infinitif</b> (jamais conjugué).<br>4. Négation : <b>no</b> devant ir (« No voy a salir »).<br>5. Tu peux même dire « voy a ir » (je vais aller) : ir + a + ir est correct.",
    timeline: "hier ─── maintenant ● ──▶ (voy a comer) ─── demain",
    table: { caption: "ir a + comer", headers: ["Personne", "ir a + infinitif", "Français"], rows: [
      ["yo", "<b>voy a</b> comer", "je vais manger"],
      ["tú", "<b>vas a</b> comer", "tu vas manger"],
      ["él / ella / usted", "<b>va a</b> comer", "il/elle va manger"],
      ["nosotros", "<b>vamos a</b> comer", "nous allons manger"],
      ["vosotros", "<b>vais a</b> comer", "vous allez manger"],
      ["ellos / ustedes", "<b>van a</b> comer", "ils vont manger"]] },
    examples: [
      { es: "Voy a cocinar esta noche.", fr: "Je vais cuisiner ce soir." },
      { es: "Vamos a viajar en agosto.", fr: "Nous allons voyager en août." },
      { es: "¿Vas a venir a la fiesta?", fr: "Tu vas venir à la fête ?" },
      { es: "No voy a trabajar mañana.", fr: "Je ne vais pas travailler demain." },
      { es: "Voy a ir al médico.", fr: "Je vais aller chez le médecin.", note: "ir a ir : correct" },
      { es: "Mis padres van a llegar tarde.", fr: "Mes parents vont arriver tard." }
    ],
    pitfalls: [
      { wrong: "Voy comer pizza", right: "Voy a comer pizza", why: "La préposition <b>a</b> est obligatoire. Sans elle, ce n'est pas un futur proche." },
      { wrong: "Voy a como", right: "Voy a comer", why: "Après « ir a », le verbe reste à l'infinitif, jamais conjugué." },
      { wrong: "Voy a voy / Voy a vaya (pour éviter la répétition)", right: "Voy a ir al médico", why: "« Voy a ir » est correct : voy (conjugué) + a + ir (infinitif). Ne cherche pas à éviter la répétition." }
    ],
    exercises: [
      { type: "mcq", q: "« Je vais manger » =", opts: ["Voy comer", "Voy a comer", "Voy a como"], correct: 1, why: "ir + <b>a</b> + infinitif." },
      { type: "fill", text: "Mañana yo ___ a viajar.", answers: ["voy"], why: "yo → voy." },
      { type: "mcq", q: "Quelle forme pour « nous allons » ?", opts: ["vamos", "van", "vais", "voy"], correct: 0, why: "nosotros → <b>vamos</b>." },
      { type: "fill", text: "Tú ___ a venir con nosotros.", answers: ["vas"], why: "tú → vas." },
      { type: "speak", es: "Voy a cocinar esta noche.", fr: "Je vais cuisiner ce soir." },
      { type: "mcq", q: "Qu'est-ce qui est faux ?", opts: ["Vamos a salir", "Van a llegar", "Va comer"], correct: 2, why: "Il manque la préposition <b>a</b> : va <b>a</b> comer." },
      { type: "fill", text: "Ellos ___ a trabajar mañana.", answers: ["van"], why: "ellos → van." },
      { type: "fill", text: "Nosotros ___ a ___ (comer) en casa.", answers: [["vamos"], ["comer"]], why: "vamos a + infinitif." },
      { type: "mcq", q: "« Je ne vais pas travailler » =", opts: ["No voy a trabajar", "Voy a no trabajar a", "Voy no a trabajo"], correct: 0, why: "<b>No</b> devant ir : No voy a trabajar." },
      { type: "fill", text: "¿Vas ___ ir al médico?", answers: ["a"], why: "ir a : la préposition « a » est obligatoire." },
      { type: "speak", es: "¿Vas a venir a la fiesta?", fr: "Tu vas venir à la fête ?" },
      { type: "fill", text: "Mis padres ___ a ___ (llegar) tarde.", answers: [["van"], ["llegar"]], why: "ellos → van ; infinitif llegar." },
      { type: "speak", es: "Vamos a viajar en agosto.", fr: "Nous allons voyager en août." }
    ]
  },
  {
    id: "ir-a-plans", title: "Parler de ses plans",
    why: "Pour parler de l'avenir, on a plusieurs « outils » qui nuancent le degré de certitude. <b>Voy a</b> = c'est décidé, c'est prévu. <b>Pienso</b> = j'ai l'intention (« je compte »). <b>Quiero</b> = j'ai envie. <b>Tengo que</b> = obligation. Les trois se construisent avec l'infinitif : tu ne conjugues qu'un seul verbe. Ajoute un <b>marqueur de temps</b> (mañana, esta tarde…) et la phrase est sans ambiguïté.",
    rule: "1. <b>ir a</b> + infinitif : plan certain.<br>2. <b>pensar</b> + infinitif (sans « a ») : intention. pensar est e→ie : pienso, piensas, piensa, pensamos, piensan.<br>3. <b>querer</b> + infinitif : envie. <b>tener que</b> + infinitif : obligation (« que » obligatoire).<br>4. Marqueurs : <b>mañana</b>, <b>esta tarde</b>, <b>esta noche</b>, <b>el fin de semana</b>, <b>la semana que viene</b>, <b>pasado mañana</b>.",
    table: { caption: "Quatre façons de dire un plan", headers: ["Structure", "Exemple", "Sens"], rows: [
      ["<b>ir a</b> + inf.", "Voy a salir.", "c'est prévu"],
      ["<b>pensar</b> + inf.", "Pienso salir.", "je compte sortir"],
      ["<b>querer</b> + inf.", "Quiero salir.", "j'ai envie de sortir"],
      ["<b>tener que</b> + inf.", "Tengo que salir.", "je dois sortir"]] },
    examples: [
      { es: "Mañana voy a trabajar desde casa.", fr: "Demain je vais travailler depuis chez moi." },
      { es: "Esta tarde pienso descansar.", fr: "Cet après-midi je compte me reposer." },
      { es: "El fin de semana quiero ver a mis padres.", fr: "Le week-end je veux voir mes parents." },
      { es: "Esta noche tengo que preparar la cena.", fr: "Ce soir je dois préparer le dîner." },
      { es: "La semana que viene vamos a viajar.", fr: "La semaine prochaine nous allons voyager." }
    ],
    pitfalls: [
      { wrong: "Tengo trabajar mañana", right: "Tengo que trabajar mañana", why: "Pour l'obligation, « que » est obligatoire : tener <b>que</b> + infinitif." },
      { wrong: "Pienso a salir", right: "Pienso salir", why: "Contrairement à ir, pensar n'a pas de « a » devant l'infinitif." },
      { wrong: "Nosotros piensamos viajar", right: "Pensamos viajar", why: "Pensar : e→ie sauf à nosotros (pensamos). Le sujet n'est pas obligatoire." }
    ],
    exercises: [
      { type: "mcq", q: "« Je dois travailler » =", opts: ["Quiero trabajar", "Tengo que trabajar", "Voy a trabajar"], correct: 1, why: "Obligation → <b>tener que</b>." },
      { type: "fill", text: "Mañana ___ a salir con mis amigos.", answers: ["voy"], why: "yo → voy a + infinitif." },
      { type: "mcq", q: "Quel mot signifie « demain » ?", opts: ["hoy", "ayer", "mañana"], correct: 2, why: "<b>Mañana</b> = demain (ou matin)." },
      { type: "fill", text: "Esta tarde ___ (pensar) descansar.", answers: ["pienso"], why: "pensar e→ie : pienso." },
      { type: "speak", es: "Esta tarde pienso descansar.", fr: "Cet après-midi je compte me reposer." },
      { type: "mcq", q: "Quelle phrase est correcte ?", opts: ["Tengo que cocinar", "Tengo cocinar", "Tengo a cocinar"], correct: 0, why: "tener <b>que</b> + infinitif." },
      { type: "fill", text: "El fin de semana ___ (querer) ver a mis padres.", answers: ["quiero"], why: "querer e→ie : quiero." },
      { type: "mcq", q: "« Ce soir » se dit…", opts: ["esta noche", "la semana que viene", "pasado mañana", "esta mañana"], correct: 0, why: "Esta noche = ce soir." },
      { type: "fill", text: "Nosotros ___ (tener) ___ preparar la cena.", answers: [["tenemos"], ["que"]], why: "tenemos <b>que</b> + infinitif." },
      { type: "fill", text: "La semana que viene ellos ___ a ___ (viajar).", answers: [["van"], ["viajar"]], why: "ellos → van a + viajar." },
      { type: "speak", es: "Esta noche tengo que preparar la cena.", fr: "Ce soir je dois préparer le dîner." },
      { type: "mcq", q: "Quel est le plus « sûr » (plan décidé) ?", opts: ["Pienso viajar", "Quiero viajar", "Voy a viajar"], correct: 2, why: "<b>Voy a</b> exprime un plan prévu." },
      { type: "speak", es: "Mañana voy a trabajar desde casa.", fr: "Demain je vais travailler depuis chez moi." }
    ]
  }
  ]
});

ATELIER.chapters.push({
  id: "temps-indefinido", group: "temps", icon: "⏮️", title: "Le passé : indefinido (hablé, comí)", level: "A2",
  intro: "Le <b>pretérito indefinido</b> raconte une action <b>terminée</b> à un moment précis du passé : « hier j'ai mangé », « il est parti ». C'est l'équivalent du passé composé / passé simple français : on raconte des événements qui sont <b>finis</b>.",
  lessons: [
  {
    id: "indefinido-reguliers", title: "L'indefinido régulier",
    why: "En français, on forme le passé composé avec avoir/être + participe (« j'ai parlé »). En espagnol, l'indefinido est un temps <b>simple</b> : une seule forme (hablé). Les terminaisons de yo et de él portent un <b>accent écrit</b> (hablé, habló) : c'est ce qui les distingue du présent (habló ≠ hablo) et du futur. Attention : à <b>nosotros</b>, les verbes en <b>-ar</b> sont <b>identiques au présent</b> (hablamos), seul le contexte dit « hier » ou « maintenant ».",
    rule: "1. Enlève -ar / -er / -ir.<br>2. -ar : <b>-é, -aste, -ó, -amos, -asteis, -aron</b>.<br>3. -er et -ir (identiques) : <b>-í, -iste, -ió, -imos, -isteis, -ieron</b>.<br>4. Accent obligatoire à yo et él/ella.<br>5. Marqueurs : <b>ayer</b>, <b>anoche</b>, <b>el lunes pasado</b>, <b>la semana pasada</b>, <b>hace dos días</b>.",
    timeline: "● ayer (comí) ─────────── maintenant ───▶ demain",
    table: { caption: "hablar · comer · vivir", headers: ["Personne", "-ar", "-er", "-ir"], rows: [
      ["yo", "habl<b>é</b>", "com<b>í</b>", "viv<b>í</b>"],
      ["tú", "habl<b>aste</b>", "com<b>iste</b>", "viv<b>iste</b>"],
      ["él / ella / usted", "habl<b>ó</b>", "com<b>ió</b>", "viv<b>ió</b>"],
      ["nosotros", "habl<b>amos</b>", "com<b>imos</b>", "viv<b>imos</b>"],
      ["vosotros", "habl<b>asteis</b>", "com<b>isteis</b>", "viv<b>isteis</b>"],
      ["ellos / ustedes", "habl<b>aron</b>", "com<b>ieron</b>", "viv<b>ieron</b>"]] },
    examples: [
      { es: "Ayer hablé con mi jefe.", fr: "Hier j'ai parlé avec mon chef." },
      { es: "Anoche comimos pizza.", fr: "Hier soir nous avons mangé de la pizza." },
      { es: "Ella vivió en Lisboa dos años.", fr: "Elle a vécu à Lisbonne deux ans." },
      { es: "El lunes pasado trabajaste mucho.", fr: "Lundi dernier tu as beaucoup travaillé." },
      { es: "Mis amigos llegaron tarde.", fr: "Mes amis sont arrivés tard." },
      { es: "Compré pan y leche.", fr: "J'ai acheté du pain et du lait." }
    ],
    pitfalls: [
      { wrong: "Ayer hablo con mi jefe (présent)", right: "Ayer hablé con mi jefe", why: "Avec « ayer », il faut le passé. L'accent sur é distingue hablé / hablo." },
      { wrong: "Ella hablo / Ella hablio", right: "Ella habló", why: "-ar à él/ella : <b>-ó</b> (pas -io, pas de -o sans accent)." },
      { wrong: "Nosotros comemos ayer", right: "Nosotros comimos ayer", why: "À nosotros en -er, le passé est -imos (≠ présent -emos). Seuls les -ar sont identiques." },
      { wrong: "Ellos comeron", right: "Ellos comieron", why: "-er / -ir → <b>-ieron</b> (pas -eron)." }
    ],
    exercises: [
      { type: "mcq", q: "« Hier j'ai parlé » =", opts: ["Ayer hablo", "Ayer hablé", "Ayer hablaré"], correct: 1, why: "-ar à yo : <b>-é</b> avec accent." },
      { type: "fill", text: "Ayer yo ___ (comer) paella.", answers: ["comí"], why: "-er à yo : <b>-í</b>." },
      { type: "mcq", q: "Quelle forme est « elle a parlé » ?", opts: ["habló", "hablo", "hablé", "hablara"], correct: 0, why: "él/ella en -ar : <b>-ó</b>." },
      { type: "fill", text: "Tú ___ (vivir) en Madrid dos años.", answers: ["viviste"], why: "tú -ir : <b>-iste</b>." },
      { type: "speak", es: "Ayer hablé con mi jefe.", fr: "Hier j'ai parlé avec mon chef." },
      { type: "mcq", q: "« Nous avons mangé » (passé) =", opts: ["comemos", "comamos", "comimos"], correct: 2, why: "-er à nosotros au passé : <b>-imos</b>." },
      { type: "fill", text: "Anoche nosotros ___ (cenar) en casa.", answers: ["cenamos"], why: "Nosotros -ar : cenamos (identique au présent, le contexte « anoche » dit passé)." },
      { type: "fill", text: "Ellos ___ (llegar) tarde y yo ___ (salir) pronto.", answers: [["llegaron"], ["salí"]], why: "ellos -ar : -aron ; yo -ir : -í." },
      { type: "mcq", q: "Dans « Nosotros hablamos ayer », hablamos est…", opts: ["au passé (le contexte l'indique)", "au présent uniquement", "au futur"], correct: 0, why: "-ar à nosotros : même forme présent / passé ; « ayer » donne le sens." },
      { type: "fill", text: "El lunes pasado tú ___ (trabajar) mucho.", answers: ["trabajaste"], why: "tú -ar : <b>-aste</b>." },
      { type: "speak", es: "Anoche comimos pizza.", fr: "Hier soir nous avons mangé de la pizza." },
      { type: "fill", text: "Mi madre ___ (beber) café y yo ___ (beber) agua.", answers: [["bebió"], ["bebí"]], why: "él -er : -ió ; yo -er : -í." },
      { type: "mcq", q: "Quelle forme est correcte pour « ils ont vécu » ?", opts: ["vivaron", "vivieron", "viveron", "vivían"], correct: 1, why: "-ir → <b>-ieron</b>." },
      { type: "speak", es: "Compré pan y leche.", fr: "J'ai acheté du pain et du lait." }
    ]
  },
  {
    id: "indefinido-irreguliers", title: "Les irréguliers très fréquents",
    why: "Comme au présent, les verbes les plus fréquents sont irréguliers. La bonne nouvelle : ils suivent <b>un même schéma</b>. Racine spéciale (tuv-, hic-, pud-, estuv-, vin-, dij-) + terminaisons <b>sans accent</b> : <b>-e, -iste, -o, -imos, -isteis, -ieron</b> (et <b>-eron</b> après j : dijeron). L'absence d'accent n'est pas un oubli : ces formes sont tellement « courtes » que l'accent ne sert plus. Deux verbes sont particuliers : <b>ser et ir</b> ont exactement la même forme (<b>fui, fuiste, fue…</b>) : le contexte les distingue.",
    rule: "1. Apprends les racines : tener → <b>tuv-</b>, estar → <b>estuv-</b>, poder → <b>pud-</b>, hacer → <b>hic-</b>, venir → <b>vin-</b>, decir → <b>dij-</b>.<br>2. Ajoute <b>-e, -iste, -o, -imos, -isteis, -ieron</b> (decir : <b>-eron</b>).<br>3. Pas d'accent sur ces formes.<br>4. hacer : 3e sing. <b>hizo</b> (c→z pour garder le son).<br>5. <b>ser / ir</b> : fui, fuiste, fue, fuimos, fuisteis, fueron ; <b>dar / ver</b> : di, diste, dio… / vi, viste, vio… (sans accent).",
    table: { caption: "Indefinido irrégulier (vosotros omis)", headers: ["Verbe", "yo", "tú", "él / ella", "nosotros", "ellos"], rows: [
      ["ser / ir", "<b>fui</b>", "<b>fuiste</b>", "<b>fue</b>", "<b>fuimos</b>", "<b>fueron</b>"],
      ["hacer", "<b>hice</b>", "<b>hiciste</b>", "<b>hizo</b>", "<b>hicimos</b>", "<b>hicieron</b>"],
      ["tener", "<b>tuve</b>", "<b>tuviste</b>", "<b>tuvo</b>", "<b>tuvimos</b>", "<b>tuvieron</b>"],
      ["estar", "<b>estuve</b>", "<b>estuviste</b>", "<b>estuvo</b>", "<b>estuvimos</b>", "<b>estuvieron</b>"],
      ["poder", "<b>pude</b>", "<b>pudiste</b>", "<b>pudo</b>", "<b>pudimos</b>", "<b>pudieron</b>"],
      ["decir", "<b>dije</b>", "<b>dijiste</b>", "<b>dijo</b>", "<b>dijimos</b>", "<b>dijeron</b>"],
      ["venir", "<b>vine</b>", "<b>viniste</b>", "<b>vino</b>", "<b>vinimos</b>", "<b>vinieron</b>"],
      ["dar", "<b>di</b>", "<b>diste</b>", "<b>dio</b>", "<b>dimos</b>", "<b>dieron</b>"],
      ["ver", "<b>vi</b>", "<b>viste</b>", "<b>vio</b>", "<b>vimos</b>", "<b>vieron</b>"]] },
    examples: [
      { es: "Ayer fui al médico.", fr: "Hier je suis allé chez le médecin.", note: "fui = de ir" },
      { es: "Fue un día muy largo.", fr: "Ce fut une journée très longue.", note: "fue = de ser" },
      { es: "El sábado hicimos una tarta.", fr: "Samedi nous avons fait un gâteau." },
      { es: "Tuve mucho trabajo la semana pasada.", fr: "J'ai eu beaucoup de travail la semaine dernière." },
      { es: "Estuvimos en Sevilla tres días.", fr: "Nous avons été à Séville trois jours." },
      { es: "No pude venir.", fr: "Je n'ai pas pu venir." },
      { es: "Mi jefe dijo que sí.", fr: "Mon chef a dit oui." }
    ],
    pitfalls: [
      { wrong: "Yo tuvé / yo hací", right: "Yo tuve / yo hice", why: "Pas d'accent sur ces formes irrégulières, et la racine change (tuv-, hic-)." },
      { wrong: "Ella hició", right: "Ella hizo", why: "À la 3e singulier, hacer devient <b>hizo</b> (c→z, -o)." },
      { wrong: "Ellos dijieron", right: "Ellos dijeron", why: "Après un « j », on perd le « i » : -eron (dijeron, trajeron)." },
      { wrong: "Traduire « Ayer fue a la playa » par « Hier il fut à la plage »", right: "« Hier il est allé à la plage »", why: "ser et ir ont la même forme (fue). Ici « fue a + lieu » = ir." },
      { wrong: "Ella vió / Yo dí", right: "Ella vio / Yo di", why: "dar / ver : formes d'une seule syllabe, sans accent (di, dio, vi, vio)." }
    ],
    exercises: [
      { type: "mcq", q: "« Hier je suis allé au marché » =", opts: ["Ayer voy al mercado", "Ayer fui al mercado", "Ayer fue al mercado"], correct: 1, why: "ir → yo <b>fui</b>." },
      { type: "fill", text: "Ayer yo ___ (hacer) la compra.", answers: ["hice"], why: "hacer → <b>hice</b>." },
      { type: "mcq", q: "Passé de « tener » à yo ?", opts: ["tené", "tengué", "tuve", "tuvé"], correct: 2, why: "tener → <b>tuve</b> (sans accent)." },
      { type: "fill", text: "Nosotros ___ (estar) en Sevilla tres días.", answers: ["estuvimos"], why: "estar → estuv- + imos." },
      { type: "speak", es: "Ayer fui al médico.", fr: "Hier je suis allé chez le médecin." },
      { type: "fill", text: "Ella ___ (hacer) una tarta.", answers: ["hizo"], why: "hacer → él <b>hizo</b>." },
      { type: "mcq", q: "« Ils ont dit » =", opts: ["dijeron", "dijieron", "dicieron"], correct: 0, why: "Après j : -eron." },
      { type: "fill", text: "No ___ (poder) venir ayer.", answers: ["pude"], why: "poder → yo <b>pude</b>." },
      { type: "mcq", q: "Dans « Fue un día largo », fue vient de…", opts: ["ir", "ser", "ver", "dar"], correct: 1, why: "« Ce fut un jour long » : fue = ser (un nom, une description)." },
      { type: "fill", text: "Mis padres ___ (venir) el domingo.", answers: ["vinieron"], why: "venir → vin- + ieron." },
      { type: "speak", es: "No pude venir.", fr: "Je n'ai pas pu venir." },
      { type: "fill", text: "Yo ___ (ver) a Ana y ella me ___ (dar) un regalo.", answers: [["vi"], ["dio"]], why: "ver → vi ; dar → él dio (sans accent)." },
      { type: "mcq", q: "Quelle forme est « tu as eu » ?", opts: ["tuvistes", "tenías", "tuviste"], correct: 2, why: "tener → tú <b>tuviste</b>." },
      { type: "speak", es: "Tuve mucho trabajo la semana pasada.", fr: "J'ai eu beaucoup de travail la semaine dernière." }
    ]
  },
  {
    id: "indefinido-changements", title: "e→i, o→u et orthographe (pidió, busqué, leyó)",
    why: "Deux phénomènes : (1) <b>les verbes en -ir à changement</b> (pedir, dormir, servir, seguir, sentir) changent leur voyelle <b>seulement aux 3es personnes</b> (él et ellos) : e→i ou o→u. (2) <b>L'orthographe protège le son</b> : pour garder le même son avant é, on écrit busqué (c→qu), llegué (g→gu), empecé (z→c). Et un « i » entre deux voyelles devient « y » (leyó, oyó), comme pour le gérondif.",
    rule: "1. Verbes en -ir à e→ie / e→i au présent : 3es pers. → <b>e→i</b> : pedí, pediste, <b>pidió</b>, pedimos, <b>pidieron</b>.<br>2. dormir, morir : 3es pers. → <b>o→u</b> : <b>durmió</b>, <b>durmieron</b>.<br>3. Yo seulement, -car / -gar / -zar : <b>busqué</b>, <b>llegué</b>, <b>empecé</b> (le son est conservé).<br>4. -er / -ir à voyelle avant la terminaison (leer, oír, construir) : 3es pers. <b>-yó, -yeron</b> : leyó, leyeron, oyó, oyeron.",
    table: { caption: "Changements et orthographe", headers: ["Verbe", "yo", "él / ella", "ellos"], rows: [
      ["pedir", "pedí", "p<b>i</b>dió", "p<b>i</b>dieron"],
      ["dormir", "dormí", "d<b>u</b>rmió", "d<b>u</b>rmieron"],
      ["servir", "serví", "s<b>i</b>rvió", "s<b>i</b>rvieron"],
      ["buscar", "bus<b>qu</b>é", "buscó", "buscaron"],
      ["llegar", "lle<b>gu</b>é", "llegó", "llegaron"],
      ["empezar", "empe<b>c</b>é", "empezó", "empezaron"],
      ["leer", "leí", "le<b>yó</b>", "le<b>yeron</b>"],
      ["oír", "oí", "o<b>yó</b>", "o<b>yeron</b>"]] },
    examples: [
      { es: "Ayer pedí una pizza.", fr: "Hier j'ai commandé une pizza.", note: "yo : pas de changement" },
      { es: "Mi hijo pidió agua.", fr: "Mon fils a demandé de l'eau.", note: "él : e→i" },
      { es: "El bebé durmió toda la noche.", fr: "Le bébé a dormi toute la nuit." },
      { es: "Busqué mis llaves por todas partes.", fr: "J'ai cherché mes clés partout." },
      { es: "Llegué a las ocho y empecé a trabajar.", fr: "Je suis arrivé à huit heures et j'ai commencé à travailler." },
      { es: "Ella leyó el mensaje y oyó la música.", fr: "Elle a lu le message et a entendu la musique." }
    ],
    pitfalls: [
      { wrong: "Él pedió", right: "Él pidió", why: "pedir : e→i à la 3e personne (pidió, pidieron)." },
      { wrong: "Yo pidí", right: "Yo pedí", why: "Le changement e→i ne touche pas yo, tú, nosotros." },
      { wrong: "Yo buscé / llegé / empezé", right: "Yo busqué / llegué / empecé", why: "L'orthographe garde le son : c→qu, g→gu, z→c devant é." },
      { wrong: "Ella leió / ellos leieron", right: "Ella leyó / ellos leyeron", why: "Un « i » entre deux voyelles → « y »." },
      { wrong: "Ellos durmieron → « dormieron »", right: "Ellos durmieron", why: "o→u aussi aux 3es personnes du pluriel." }
    ],
    exercises: [
      { type: "mcq", q: "Passé de « pedir » à la 3e personne du singulier ?", opts: ["pedió", "pidió", "pidí"], correct: 1, why: "pedir → él <b>pidió</b>." },
      { type: "fill", text: "Ayer yo ___ (pedir) una pizza.", answers: ["pedí"], why: "yo : pas de changement → pedí." },
      { type: "mcq", q: "« Il a dormi » =", opts: ["durmió", "dormió", "dormí", "durmí"], correct: 0, why: "dormir → él <b>durmió</b>." },
      { type: "fill", text: "Mis hijos ___ (dormir) hasta las diez.", answers: ["durmieron"], why: "ellos : o→u → durmieron." },
      { type: "speak", es: "Mi hijo pidió agua.", fr: "Mon fils a demandé de l'eau." },
      { type: "fill", text: "Yo ___ (buscar) mis llaves.", answers: ["busqué"], why: "buscar → c→qu : busqué." },
      { type: "mcq", q: "« J'ai commencé » =", opts: ["empezé", "empeze", "empecé"], correct: 2, why: "z→c devant é : empecé." },
      { type: "fill", text: "Yo ___ (llegar) tarde.", answers: ["llegué"], why: "llegar → g→gu : llegué." },
      { type: "mcq", q: "« Ils ont lu » =", opts: ["leieron", "leeron", "leyeron", "leyaron"], correct: 2, why: "leer → i entre voyelles → y : leyeron." },
      { type: "fill", text: "Ella ___ (leer) el mensaje y yo ___ (oír) la música.", answers: [["leyó"], ["oí"]], why: "él : leyó ; yo : oí (avec accent)." },
      { type: "speak", es: "Busqué mis llaves por todas partes.", fr: "J'ai cherché mes clés partout." },
      { type: "fill", text: "El camarero ___ (servir) la sopa y nosotros ___ (pedir) postre.", answers: [["sirvió"], ["pedimos"]], why: "servir → sirvió ; nosotros → pedimos (pas de changement)." },
      { type: "mcq", q: "Quelle phrase est correcte ?", opts: ["Ella pidió un café", "Yo pidí un café", "Ellos pedieron un café"], correct: 0, why: "pedir : yo pedí / él pidió / ellos pidieron." },
      { type: "speak", es: "Llegué a las ocho y empecé a trabajar.", fr: "Je suis arrivé à huit heures et j'ai commencé à travailler." }
    ]
  }
  ]
});

// temps-b : passé composé, imparfait, conditionnel, impératif (A2)

ATELIER.chapters.push({
  id: "temps-perfecto", group: "temps", icon: "✅", title: "Le passé composé espagnol (he comido)", level: "A2",
  intro: "Le <b>pretérito perfecto</b> se forme comme le passé composé français : <b>haber + participe</b>. Mais attention : il ne s'emploie <b>pas toujours</b> là où tu dirais « j'ai mangé » !",
  lessons: [{
    id: "perfecto-formation", title: "Haber + participe : he hablado, he comido",
    why: "Comme en français (« j'<b>ai</b> mangé »), on utilise un auxiliaire + un participe. Mais l'espagnol n'a <b>qu'un seul</b> auxiliaire : <b>haber</b> (jamais « être »). Et comme le participe est <b>invariable</b>, il n'y a aucun accord à faire : « ella ha salido », « ellas han salido ».",
    rule: "1. Conjugue <b>haber</b> : <b>he, has, ha, hemos, habéis, han</b>.<br>2. Prends l'infinitif et remplace : -ar → <b>-ado</b> ; -er / -ir → <b>-ido</b>.<br>3. Ne mets <b>rien</b> entre haber et le participe : « Ya he comido » (pas « He ya comido »).<br>4. Participes irréguliers à connaître : hacer → <b>hecho</b>, decir → <b>dicho</b>, ver → <b>visto</b>, poner → <b>puesto</b>, escribir → <b>escrito</b>, abrir → <b>abierto</b>, volver → <b>vuelto</b>, romper → <b>roto</b>.",
    timeline: "hier ───────── ● ▶ maintenant (he comido = le résultat touche encore le présent)",
    table: { caption: "haber + participe (comer = manger)", headers: ["Personne", "Haber", "Participe", "Français"], rows: [
      ["yo", "<b>he</b>", "com<b>ido</b>", "j'ai mangé"],
      ["tú", "<b>has</b>", "com<b>ido</b>", "tu as mangé"],
      ["él/ella/usted", "<b>ha</b>", "com<b>ido</b>", "il/elle a mangé"],
      ["nosotros", "<b>hemos</b>", "com<b>ido</b>", "nous avons mangé"],
      ["vosotros", "<b>habéis</b>", "com<b>ido</b>", "vous avez mangé"],
      ["ellos/ustedes", "<b>han</b>", "com<b>ido</b>", "ils ont mangé"]] },
    examples: [
      { es: "He hablado con mi jefe.", fr: "J'ai parlé avec mon chef." },
      { es: "¿Has visto mi móvil?", fr: "As-tu vu mon portable ?", note: "ver → visto" },
      { es: "Hemos hecho la compra.", fr: "Nous avons fait les courses.", note: "hacer → hecho" },
      { es: "Ella ha vuelto a casa.", fr: "Elle est rentrée à la maison.", note: "même avec « elle est rentrée » : toujours haber" },
      { es: "Ellas han salido temprano.", fr: "Elles sont sorties tôt.", note: "participe invariable : salido, pas « salidas »" }
    ],
    pitfalls: [
      { wrong: "Ha escribido una carta.", right: "Ha escrito una carta.", why: "escribir a un participe irrégulier : escrito." },
      { wrong: "Ellas han salidas.", right: "Ellas han salido.", why: "Avec haber, le participe ne s'accorde jamais." },
      { wrong: "He ya comido.", right: "Ya he comido.", why: "Haber et le participe ne se séparent pas : l'adverbe passe avant." },
      { wrong: "Yo soy ido a Madrid.", right: "He ido a Madrid.", why: "Pas d'auxiliaire « être » en espagnol : toujours haber." }
    ],
    exercises: [
      { type: "mcq", q: "Participe de <b>hablar</b> :", opts: ["hablando", "hablido", "hablado"], correct: 2, why: "-ar → <b>-ado</b> : hablado." },
      { type: "mcq", q: "Participe de <b>comer</b> :", opts: ["comado", "comido", "comiendo"], correct: 1, why: "-er → <b>-ido</b> : comido (comiendo, c'est le gérondif)." },
      { type: "fill", text: "Yo ___ comido ya.", answers: ["he"], why: "yo → <b>he</b>." },
      { type: "fill", text: "Nosotros ___ (hablar) con el jefe.", answers: ["hemos hablado"], why: "hemos + hablado." },
      { type: "speak", es: "He hablado con mi jefe.", fr: "J'ai parlé avec mon chef." },
      { type: "mcq", q: "« Il a écrit une lettre » =", opts: ["Ha escrito una carta", "Ha escribido una carta", "Ha escrido una carta"], correct: 0, why: "escribir → participe irrégulier <b>escrito</b>." },
      { type: "fill", text: "Tú has ___ (ver) esa película.", answers: ["visto"], why: "ver → <b>visto</b>." },
      { type: "fill", text: "Ella ha ___ (abrir) la puerta.", answers: ["abierto"], why: "abrir → <b>abierto</b>." },
      { type: "mcq", q: "« J'ai fait » : participe de <b>hacer</b> :", opts: ["hacido", "hacho", "hizo", "hecho"], correct: 3, why: "hacer → <b>hecho</b> (hizo est un autre temps)." },
      { type: "speak", es: "¿Has visto mi móvil?", fr: "As-tu vu mon portable ?" },
      { type: "fill", text: "Ellos han ___ (volver) tarde.", answers: ["vuelto"], why: "volver → <b>vuelto</b>." },
      { type: "fill", text: "Yo ___ ___ (escribir) un correo.", answers: [["he"], ["escrito"]], why: "he + escrito." },
      { type: "speak", es: "Hemos hecho la compra.", fr: "Nous avons fait les courses." }
    ]
  }, {
    id: "perfecto-vs-indefinido", title: "Perfecto ou indefinido ? Période ouverte ou fermée",
    why: "En français, « j'ai mangé » sert à tout. En espagnol, il faut <b>choisir</b>. Question à te poser : la période de temps est-elle <b>encore ouverte</b> (aujourd'hui, cette semaine, cette année…) ou <b>déjà fermée</b> (hier, l'année dernière…) ? Ouverte → <b>perfecto</b> (le passé touche encore le présent). Fermée → <b>indefinido</b> (c'est fini, coupé du présent).",
    rule: "1. Cherche le marqueur de temps.<br>2. <b>hoy, esta mañana, esta semana, este año, ya, todavía (no), alguna vez, nunca</b> → perfecto (<b>he comido</b>).<br>3. <b>ayer, anoche, el año pasado, hace dos días, en 2020</b> → indefinido (<b>comí</b>).<br>4. Sans marqueur : si l'action a un lien avec maintenant → perfecto ; sinon → indefinido.<br>Note : en Amérique latine, on entend souvent l'indefinido même avec « hoy » ; en Espagne, applique la règle ci-dessus.",
    timeline: "perfecto : ──── [ aujourd'hui / cette semaine / cette année … ● ] ▶ maintenant<br>indefinido : ── ● ── │ (période terminée) ──────── ▶ maintenant",
    table: { caption: "Quel temps choisir ?", headers: ["Période", "Marqueurs", "Temps", "Exemple"], rows: [
      ["Ouverte", "hoy, esta mañana, esta semana, este año", "<b>perfecto</b>", "Hoy <b>he comido</b> pasta."],
      ["Bilan / expérience", "ya, todavía no, alguna vez, nunca", "<b>perfecto</b>", "Todavía no <b>he comido</b>."],
      ["Fermée", "ayer, anoche, el año pasado, hace dos días, en 2020", "<b>indefinido</b>", "Ayer <b>comí</b> pasta."]] },
    examples: [
      { es: "Hoy he trabajado mucho.", fr: "Aujourd'hui j'ai beaucoup travaillé.", note: "« hoy » n'est pas fini" },
      { es: "Ayer trabajé hasta las ocho.", fr: "Hier j'ai travaillé jusqu'à huit heures.", note: "« ayer » est fini" },
      { es: "¿Has estado alguna vez en Perú?", fr: "As-tu déjà été au Pérou ?" },
      { es: "Todavía no he comido.", fr: "Je n'ai pas encore mangé." },
      { es: "El año pasado viajamos a Italia.", fr: "L'année dernière nous avons voyagé en Italie." }
    ],
    pitfalls: [
      { wrong: "Ayer he comido con mi hermana.", right: "Ayer comí con mi hermana.", why: "« Ayer » est une période fermée : indefinido. C'est LE piège du francophone qui traduit « j'ai mangé » mot à mot." },
      { wrong: "Anoche he cenado fuera.", right: "Anoche cené fuera.", why: "« Anoche » (hier soir) est terminé : indefinido." },
      { wrong: "Todavía no comí.", right: "Todavía no he comido.", why: "« Todavía no » = pas encore, ça peut encore arriver : la période est ouverte, donc perfecto (en Espagne)." },
      { wrong: "Este año fui a Japón (l'année n'est pas terminée).", right: "Este año he ido a Japón.", why: "« Este año » est une période encore ouverte : perfecto." }
    ],
    exercises: [
      { type: "mcq", q: "Hoy ___ mucho.", opts: ["trabajé", "he trabajado", "trabajaba"], correct: 1, why: "« Hoy » = période ouverte → <b>perfecto</b>." },
      { type: "mcq", q: "Ayer ___ al cine.", opts: ["he ido", "iba", "fui"], correct: 2, why: "« Ayer » = période fermée → <b>indefinido</b> : fui." },
      { type: "fill", text: "Esta mañana ___ (tomar, yo) un café.", answers: ["he tomado"], why: "« Esta mañana » est encore ouvert → he tomado." },
      { type: "fill", text: "Anoche ___ (cenar, yo) con mi hermana.", answers: ["cené"], why: "« Anoche » est fermé → cené." },
      { type: "speak", es: "Hoy he comido en casa.", fr: "Aujourd'hui j'ai mangé à la maison." },
      { type: "mcq", q: "« Je n'ai pas encore mangé » =", opts: ["Todavía no he comido", "Todavía no comí", "No comí ya"], correct: 0, why: "todavía no + <b>perfecto</b>." },
      { type: "fill", text: "¿___ (estar, tú) alguna vez en México?", answers: ["Has estado", "has estado"], why: "« Alguna vez » (déjà) → perfecto : has estado." },
      { type: "speak", es: "Ayer comí con mis padres.", fr: "Hier j'ai mangé avec mes parents." },
      { type: "mcq", q: "Esta semana ___ mucho.", opts: ["trabajé", "trabajaba", "trabajaron", "he trabajado"], correct: 3, why: "« Esta semana » n'est pas terminée → <b>perfecto</b>." },
      { type: "fill", text: "El año pasado nosotros ___ (viajar) a Perú.", answers: ["viajamos"], why: "« El año pasado » est fermé → viajamos." },
      { type: "mcq", q: "« Hier j'ai mangé une pizza » =", opts: ["Ayer he comido una pizza", "Ayer comí una pizza", "Ayer como una pizza"], correct: 1, why: "Hier = fermé → <b>indefinido</b> : comí. Le français « j'ai mangé » ne se traduit pas toujours par « he comido » !" },
      { type: "fill", text: "Ya ___ (hacer, yo) la compra.", answers: ["he hecho"], why: "« Ya » → perfecto ; hacer → hecho." },
      { type: "fill", text: "Hoy ___ (trabajar, yo) mucho, pero ayer no ___ (trabajar, yo).", answers: [["he trabajado"], ["trabajé"]], why: "hoy → perfecto ; ayer → indefinido." },
      { type: "speak", es: "¿Has estado alguna vez en España?", fr: "As-tu déjà été en Espagne ?" }
    ]
  }]
});

ATELIER.chapters.push({
  id: "temps-imperfecto", group: "temps", icon: "🎞️", title: "L'imparfait (hablaba, comía)", level: "A2",
  intro: "L'<b>imperfecto</b> décrit le <b>décor</b> du passé : ce qui durait, se répétait, ou « était ainsi ». Comme l'imparfait français, c'est le temps du film en cours, pas de la photo.",
  lessons: [{
    id: "imperfecto-formation", title: "Formation : hablaba, comía, y les 3 irréguliers",
    why: "Bonne nouvelle : l'imparfait espagnol est <b>presque 100 % régulier</b>. Seulement <b>3 verbes</b> font exception : <b>ser, ir, ver</b>. Les terminaisons ressemblent au français (-ais, -ait…) : la 1re et la 3e personne du singulier sont <b>identiques</b> (yo hablaba, él hablaba), donc on garde souvent le pronom.",
    rule: "1. Enlève -ar / -er / -ir.<br>2. Verbes en -ar : ajoute <b>-aba, -abas, -aba, -ábamos, -abais, -aban</b>.<br>3. Verbes en -er / -ir : ajoute <b>-ía, -ías, -ía, -íamos, -íais, -ían</b>.<br>4. Les 3 irréguliers : <b>ser → era</b>, <b>ir → iba</b>, <b>ver → veía</b>.<br>5. Accent obligatoire sur <b>-ábamos</b> (nosotros) et sur le <b>í</b> de -ía.",
    timeline: "hier ── ~~~~~~~~~~ (ça durait / se répétait) ── ~~~~ ▶ maintenant",
    table: { caption: "L'imparfait", headers: ["Personne", "hablar", "comer / vivir", "ser / ir / ver"], rows: [
      ["yo", "habl<b>aba</b>", "com<b>ía</b>", "era / iba / veía"],
      ["tú", "habl<b>abas</b>", "com<b>ías</b>", "eras / ibas / veías"],
      ["él/ella/usted", "habl<b>aba</b>", "com<b>ía</b>", "era / iba / veía"],
      ["nosotros", "habl<b>ábamos</b>", "com<b>íamos</b>", "éramos / íbamos / veíamos"],
      ["vosotros", "habl<b>abais</b>", "com<b>íais</b>", "erais / ibais / veíais"],
      ["ellos/ustedes", "habl<b>aban</b>", "com<b>ían</b>", "eran / iban / veían"]] },
    examples: [
      { es: "Cuando era niño, vivía en Madrid.", fr: "Quand j'étais enfant, je vivais à Madrid.", note: "era (ser) + vivía (vivir)" },
      { es: "Íbamos a la playa cada verano.", fr: "Nous allions à la plage chaque été.", note: "ir → íbamos" },
      { es: "Ella hablaba con su abuela todos los domingos.", fr: "Elle parlait avec sa grand-mère tous les dimanches." },
      { es: "Veía la tele todas las noches.", fr: "Je regardais la télé tous les soirs.", note: "ver → veía" }
    ],
    pitfalls: [
      { wrong: "Yo comeba mucho chocolate.", right: "Yo comía mucho chocolate.", why: "-aba est réservé aux verbes en -ar. Pour -er / -ir : -ía." },
      { wrong: "Yo seía muy tímido.", right: "Yo era muy tímido.", why: "ser est irrégulier : era, eras, era, éramos, erais, eran." },
      { wrong: "Nosotros hablabamos mucho.", right: "Nosotros hablábamos mucho.", why: "-ábamos porte toujours un accent." },
      { wrong: "Ellos ibaban a la playa.", right: "Ellos iban a la playa.", why: "ir est irrégulier : iba, ibas, iba, íbamos, ibais, iban (pas de « -aban » en plus)." }
    ],
    exercises: [
      { type: "mcq", q: "Imparfait de <b>comer</b> (él) :", opts: ["comaba", "comía", "comió"], correct: 1, why: "-er → <b>-ía</b> : comía." },
      { type: "fill", text: "Yo ___ (hablar) con mi abuela cada domingo.", answers: ["hablaba"], why: "hablar → habl + <b>aba</b>." },
      { type: "mcq", q: "Imparfait de <b>ser</b> (yo) :", opts: ["seía", "fui", "era"], correct: 2, why: "ser est irrégulier : <b>era</b>." },
      { type: "speak", es: "Cuando era niño, vivía en Madrid.", fr: "Quand j'étais enfant, je vivais à Madrid." },
      { type: "fill", text: "Tú ___ (vivir) en Lyon.", answers: ["vivías"], why: "vivir → viv + <b>ías</b>." },
      { type: "mcq", q: "Imparfait de <b>ir</b> (nosotros) :", opts: ["íbamos", "iremos", "fuimos"], correct: 0, why: "ir → <b>íbamos</b> (avec accent)." },
      { type: "fill", text: "Nosotros ___ (ir) a la playa cada verano.", answers: ["íbamos"], why: "ir → íbamos." },
      { type: "fill", text: "Ella ___ (ser) muy simpática.", answers: ["era"], why: "ser → era." },
      { type: "speak", es: "Íbamos a la playa cada verano.", fr: "Nous allions à la plage chaque été." },
      { type: "fill", text: "Ellos ___ (ver) la tele por la noche.", answers: ["veían"], why: "ver → ve + <b>ían</b> = veían." },
      { type: "mcq", q: "Quelle forme n'est <b>pas</b> un imparfait ?", opts: ["veía", "hablaba", "iba", "comió"], correct: 3, why: "<b>comió</b> est un indefinido (il a mangé). Les autres sont des imparfaits." },
      { type: "fill", text: "Cuando yo ___ (ser) niño, ___ (comer) mucho chocolate.", answers: [["era"], ["comía"]], why: "ser → era ; comer → comía." },
      { type: "speak", es: "Veía la tele todas las noches.", fr: "Je regardais la télé tous les soirs." }
    ]
  }, {
    id: "imperfecto-usos", title: "Quand l'employer ? Décor, habitude, « Estaba… cuando… »",
    why: "Pense à un <b>film</b> : l'imperfecto, c'est l'<b>arrière-plan</b> (le décor, ce qui durait). L'indefinido, c'est l'<b>événement</b> qui arrive et « coupe » l'action, comme une photo. C'est le même contraste qu'en français : « Je <b>mangeais</b> (décor) quand il <b>a téléphoné</b> (événement) ». Piège : le français dit « il a téléphoné » avec le passé composé, mais l'espagnol met ici l'<b>indefinido</b> (sonó).",
    rule: "1. <b>Habitude</b> : siempre, todos los días, cada verano, de niño → imperfecto.<br>2. <b>Description</b> (âge, heure, météo, personne) : tenía diez años, eran las ocho, hacía frío → imperfecto.<br>3. <b>Action en cours</b> : estaba + gérondif (estaba cenando), mientras → imperfecto.<br>4. <b>Événement ponctuel</b> qui interrompt : <b>Estaba</b> en casa <b>cuando llegó</b> Pablo → imperfecto (décor) + indefinido (événement).",
    timeline: "décor : ~~~~~~~~~~ estaba cenando ~~~~~~~~~~<br>événement :                 ● sonó el teléfono",
    table: { caption: "Imperfecto : quatre emplois", headers: ["Emploi", "Mots-clés", "Exemple"], rows: [
      ["Habitude", "siempre, todos los días, cada verano, de niño", "De niño <b>jugaba</b> en la calle."],
      ["Description", "âge, heure, météo, aspect", "<b>Eran</b> las ocho y <b>hacía</b> frío."],
      ["Action en cours", "estaba + gérondif, mientras", "<b>Estaba</b> cenando."],
      ["Décor + événement", "cuando + indefinido", "<b>Estaba</b> en casa cuando <b>llegó</b> Pablo."]] },
    examples: [
      { es: "De niña, jugaba en la calle todos los días.", fr: "Petite, je jouais dans la rue tous les jours." },
      { es: "Eran las ocho y hacía frío.", fr: "Il était huit heures et il faisait froid." },
      { es: "Estaba en casa cuando llegó Pablo.", fr: "J'étais à la maison quand Pablo est arrivé.", note: "estaba = décor, llegó = événement" },
      { es: "Mientras yo leía, mi hermano dormía.", fr: "Pendant que je lisais, mon frère dormait.", note: "deux actions en parallèle : deux imperfectos" },
      { es: "Mi abuelo tenía un huerto.", fr: "Mon grand-père avait un potager." }
    ],
    pitfalls: [
      { wrong: "Estaba en casa cuando Pablo llegaba.", right: "Estaba en casa cuando llegó Pablo.", why: "L'arrivée est un événement ponctuel : indefinido." },
      { wrong: "Cuando tuve diez años, vivía en Madrid.", right: "Cuando tenía diez años, vivía en Madrid.", why: "L'âge est une description (décor) : imperfecto." },
      { wrong: "Hizo frío y llovió (pour décrire la météo d'un souvenir).", right: "Hacía frío y llovía.", why: "Pour planter le décor, on décrit la météo à l'imperfecto." },
      { wrong: "Cada verano fuimos a la playa.", right: "Cada verano íbamos a la playa.", why: "« Cada verano » = habitude répétée : imperfecto." }
    ],
    exercises: [
      { type: "mcq", q: "Todos los veranos ___ a la playa.", opts: ["fuimos", "íbamos", "hemos ido"], correct: 1, why: "Habitude (todos los veranos) → <b>imperfecto</b>." },
      { type: "fill", text: "De niña, ella siempre ___ (jugar) en la calle.", answers: ["jugaba"], why: "siempre + habitude → jugaba." },
      { type: "mcq", q: "Estaba cenando cuando ___ el teléfono.", opts: ["sonaba", "suena", "sonó"], correct: 2, why: "L'événement ponctuel qui interrompt → <b>indefinido</b> : sonó." },
      { type: "speak", es: "Estaba en casa cuando llegó Pablo.", fr: "J'étais à la maison quand Pablo est arrivé." },
      { type: "fill", text: "Eran las ocho y ___ (hacer) frío.", answers: ["hacía"], why: "Description de la météo → hacía." },
      { type: "mcq", q: "Cuando ___ diez años, vivía en París.", opts: ["tenía", "tuve", "tendría"], correct: 0, why: "L'âge = description → <b>tenía</b>." },
      { type: "fill", text: "Mientras yo ___ (leer), mi hermano ___ (dormir).", answers: [["leía"], ["dormía"]], why: "Deux actions parallèles : imperfecto + imperfecto." },
      { type: "speak", es: "Cuando era niña, jugaba en la calle.", fr: "Quand j'étais petite, je jouais dans la rue." },
      { type: "mcq", q: "« Il pleuvait » =", opts: ["Llovió", "Lloverá", "Ha llovido", "Llovía"], correct: 3, why: "Décor, météo : <b>llovía</b>." },
      { type: "fill", text: "Yo ___ (estar) en casa cuando ___ (llegar) Pablo.", answers: [["estaba"], ["llegó"]], why: "Décor : estaba (imperfecto). Événement : llegó (indefinido)." },
      { type: "fill", text: "Antes ella ___ (trabajar) en un banco.", answers: ["trabajaba"], why: "« Antes » = situation habituelle du passé → trabajaba." },
      { type: "fill", text: "Mi abuelo ___ (tener) un huerto.", answers: ["tenía"], why: "Description → tenía." },
      { type: "speak", es: "Hacía frío y llovía.", fr: "Il faisait froid et il pleuvait." }
    ]
  }]
});

ATELIER.chapters.push({
  id: "temps-condicional", group: "temps", icon: "💭", title: "Le conditionnel (hablaría)", level: "A2",
  intro: "Le <b>condicional</b> sert à être <b>poli</b>, à <b>conseiller</b> et à <b>rêver</b> (« je voudrais », « tu devrais », « je voyagerais »). Il se forme comme le futur : bonne nouvelle, tu connais déjà les radicaux !",
  lessons: [{
    id: "condicional-formation", title: "Formation : hablaría, tendría, haría",
    why: "Même mécanique qu'en français : infinitif + terminaisons de l'<b>imparfait</b> (parler + ais = parlerais). En espagnol : <b>infinitif entier + -ía, -ías, -ía, -íamos, -íais, -ían</b>. Ce sont les terminaisons de l'imparfait des verbes en -er / -ir. Et les verbes irréguliers ont <b>les mêmes radicaux que le futur</b> (tendr-, har-, dir-…).",
    rule: "1. Prends l'<b>infinitif entier</b> : hablar, comer, vivir.<br>2. Ajoute <b>-ía, -ías, -ía, -íamos, -íais, -ían</b> (pareil pour -ar, -er, -ir).<br>3. Irréguliers (radical comme au futur) : tener → <b>tendr</b>ía ; hacer → <b>har</b>ía ; decir → <b>dir</b>ía ; poder → <b>podr</b>ía ; salir → <b>saldr</b>ía ; poner → <b>pondr</b>ía ; venir → <b>vendr</b>ía ; querer → <b>querr</b>ía ; saber → <b>sabr</b>ía.<br>4. Accent sur le <b>í</b> de la terminaison, toujours.",
    timeline: "maintenant ──▶ ○ (situation imaginée, souhaitée ou polie, pas réelle)",
    table: { caption: "Le condicional", headers: ["Personne", "hablar (régulier)", "tener (irrégulier)", "Français"], rows: [
      ["yo", "hablar<b>ía</b>", "tendr<b>ía</b>", "je parlerais / j'aurais"],
      ["tú", "hablar<b>ías</b>", "tendr<b>ías</b>", "tu parlerais / tu aurais"],
      ["él/ella/usted", "hablar<b>ía</b>", "tendr<b>ía</b>", "il/elle parlerait / aurait"],
      ["nosotros", "hablar<b>íamos</b>", "tendr<b>íamos</b>", "nous parlerions / aurions"],
      ["vosotros", "hablar<b>íais</b>", "tendr<b>íais</b>", "vous parleriez / auriez"],
      ["ellos/ustedes", "hablar<b>ían</b>", "tendr<b>ían</b>", "ils parleraient / auraient"]] },
    examples: [
      { es: "Yo comería más fruta.", fr: "Je mangerais plus de fruits." },
      { es: "Tendría más tiempo.", fr: "J'aurais plus de temps.", note: "tener → tendr-" },
      { es: "Haríamos un viaje.", fr: "Nous ferions un voyage.", note: "hacer → har-" },
      { es: "Saldrían más si pudieran.", fr: "Ils sortiraient plus s'ils pouvaient.", note: "salir → saldr-" }
    ],
    pitfalls: [
      { wrong: "Yo tenería más tiempo.", right: "Yo tendría más tiempo.", why: "tener est irrégulier : le radical devient tendr-, comme au futur (tendré)." },
      { wrong: "Haceríamos un viaje.", right: "Haríamos un viaje.", why: "hacer → har-, comme au futur (haré)." },
      { wrong: "Hablariamos más.", right: "Hablaríamos más.", why: "L'accent sur le í est obligatoire à toutes les personnes." }
    ],
    exercises: [
      { type: "mcq", q: "« Je parlerais » =", opts: ["hablaría", "hablaré", "hablaba"], correct: 0, why: "hablar + <b>ía</b> = hablaría." },
      { type: "fill", text: "Yo ___ (comer) más fruta.", answers: ["comería"], why: "comer + ía." },
      { type: "mcq", q: "<b>tener</b>, yo, conditionnel :", opts: ["tenería", "tendré", "tendría"], correct: 2, why: "radical <b>tendr-</b> + ía." },
      { type: "speak", es: "Yo tendría más tiempo.", fr: "J'aurais plus de temps." },
      { type: "fill", text: "Tú ___ (vivir) en Madrid.", answers: ["vivirías"], why: "vivir + ías." },
      { type: "mcq", q: "<b>hacer</b>, él, conditionnel :", opts: ["hacería", "haría", "hacía"], correct: 1, why: "radical <b>har-</b> + ía (hacía, c'est l'imparfait)." },
      { type: "fill", text: "Nosotros ___ (salir) más.", answers: ["saldríamos"], why: "salir → saldr- + íamos." },
      { type: "fill", text: "Ella ___ (poner) la mesa.", answers: ["pondría"], why: "poner → pondr- + ía." },
      { type: "speak", es: "Haríamos un viaje.", fr: "Nous ferions un voyage." },
      { type: "mcq", q: "Radical de <b>saber</b> au conditionnel :", opts: ["saber-", "sab-", "sapr-", "sabr-"], correct: 3, why: "saber → <b>sabr-</b> (sabría)." },
      { type: "fill", text: "Ellos ___ (querer) viajar.", answers: ["querrían"], why: "querer → querr- + ían." },
      { type: "fill", text: "Yo ___ (venir) con vosotros, pero ___ (tener) que trabajar.", answers: [["vendría"], ["tendría"]], why: "venir → vendr- ; tener → tendr-." },
      { type: "speak", es: "¿Podrías repetir, por favor?", fr: "Pourrais-tu répéter, s'il te plaît ?" }
    ]
  }, {
    id: "condicional-usos", title: "Politesse, conseil, rêve (et le piège futur / conditionnel)",
    why: "Le conditionnel « adoucit » ou « imagine ». <b>Poli</b> : « Quiero un café » est direct ; « Me gustaría un café » est plus délicat (comme « je voudrais » en français). <b>Conseil</b> : « deberías » est plus doux que « debes ». <b>Rêve</b> : on parle de ce qui n'est pas réel. Attention à ne pas confondre avec le futur : <b>hablará</b> (il parlera, ce sera vrai) et <b>hablaría</b> (il parlerait, c'est imaginé).",
    rule: "1. <b>Politesse</b> : ¿Podría…? ¿Podrías…? Me gustaría… Querría…<br>2. <b>Conseil</b> : Deberías + infinitif ; <b>Yo que tú</b> + conditionnel (« à ta place »).<br>3. <b>Rêve / hypothèse</b> : Con más dinero, viajaría… ; ¿Qué harías con un millón ?<br>4. <b>Futur ou conditionnel ?</b> La seule différence : -á (futur) / -ía (conditionnel) : hablar<b>á</b> ≠ hablar<b>ía</b>.",
    timeline: "futur (réel) : maintenant ──▶ ● mañana hablaré<br>conditionnel (imaginé) : maintenant ──▶ ○ hablaría",
    table: { caption: "Trois emplois du condicional", headers: ["Emploi", "Structure", "Exemple"], rows: [
      ["Politesse", "¿Podría…? / Me gustaría…", "<b>¿Podría</b> ayudarme, por favor?"],
      ["Conseil", "Deberías… / Yo que tú…", "<b>Yo que tú</b>, descansaría más."],
      ["Rêve / hypothèse", "Con más dinero, …ía", "Con más dinero, <b>viajaría</b> mucho."],
      ["Piège futur / cond.", "-á ≠ -ía", "Mañana hablar<b>á</b> / hablar<b>ía</b> si pudiera"]] },
    examples: [
      { es: "¿Podría ayudarme, por favor?", fr: "Pourriez-vous m'aider, s'il vous plaît ?" },
      { es: "Me gustaría un café con leche.", fr: "Je voudrais un café au lait." },
      { es: "Deberías descansar más.", fr: "Tu devrais te reposer plus." },
      { es: "Yo que tú, iría al médico.", fr: "À ta place, j'irais chez le médecin." },
      { es: "Con más dinero, viajaría por todo el mundo.", fr: "Avec plus d'argent, je voyagerais dans le monde entier." }
    ],
    pitfalls: [
      { wrong: "Me gustará un café.", right: "Me gustaría un café.", why: "gustará = futur (ça me plaira un jour). Pour « je voudrais », il faut le conditionnel." },
      { wrong: "¿Podrá ayudarme?", right: "¿Podría ayudarme?", why: "Podrá = « pourra » (futur). Pour une demande polie, utilise podría." },
      { wrong: "Yo que tú, iré al médico.", right: "Yo que tú, iría al médico.", why: "Un conseil « à ta place » est irréel : conditionnel, pas futur." },
      { wrong: "Quiero un café, por favor. (avec un inconnu)", right: "Querría un café, por favor. / Me gustaría un café.", why: "Quiero est correct mais direct ; le conditionnel est plus poli." }
    ],
    exercises: [
      { type: "mcq", q: "« Pourriez-vous m'aider ? » =", opts: ["¿Podrá ayudarme?", "¿Podría ayudarme?", "¿Pudo ayudarme?"], correct: 1, why: "Demande polie → <b>podría</b> (podrá = futur)." },
      { type: "fill", text: "Me ___ (gustar) un café con leche.", answers: ["gustaría"], why: "Me gustaría = je voudrais." },
      { type: "mcq", q: "« Tu devrais » =", opts: ["deberás", "debías", "deberías"], correct: 2, why: "deber + ías = deberías (deberás = tu devras)." },
      { type: "speak", es: "¿Podría ayudarme, por favor?", fr: "Pourriez-vous m'aider, s'il vous plaît ?" },
      { type: "fill", text: "¿___ (poder, tú) cerrar la puerta?", answers: ["Podrías", "podrías"], why: "poder → podr- + ías." },
      { type: "mcq", q: "Quelle phrase est un conseil correct ?", opts: ["Yo que tú, hablaría con ella.", "Yo que tú, hablo con ella.", "Yo que tú, hablé con ella."], correct: 0, why: "« Yo que tú » + <b>conditionnel</b>." },
      { type: "fill", text: "Tú ___ (deber) descansar más.", answers: ["deberías"], why: "deber + ías." },
      { type: "speak", es: "Me gustaría un café con leche.", fr: "Je voudrais un café au lait." },
      { type: "fill", text: "Con más dinero, yo ___ (viajar) por todo el mundo.", answers: ["viajaría"], why: "Rêve irréel → viajaría." },
      { type: "mcq", q: "Demain, il parlera avec toi : Mañana ___ contigo.", opts: ["hablaría", "habló", "hablaba", "hablará"], correct: 3, why: "Demain = réel et à venir → <b>futur</b> : hablará." },
      { type: "fill", text: "Yo que tú, ___ (ir) al médico.", answers: ["iría"], why: "ir + ía = iría." },
      { type: "fill", text: "Yo ___ (comprar) una casa y ___ (vivir) cerca del mar.", answers: [["compraría"], ["viviría"]], why: "Rêve : conditionnel. comprar + ía, vivir + ía." },
      { type: "speak", es: "Yo que tú, descansaría más.", fr: "À ta place, je me reposerais plus." }
    ]
  }]
});

ATELIER.chapters.push({
  id: "temps-imperativo", group: "temps", icon: "📣", title: "L'impératif (¡habla!, ¡hable!)", level: "A2",
  intro: "L'<b>imperativo</b> sert à donner un <b>ordre</b>, un <b>conseil</b> ou une <b>consigne</b> (« Parle ! », « Ne parle pas ! »). Il change selon que tu tutoies (<b>tú</b>) ou vouvoies (<b>usted</b>).",
  lessons: [{
    id: "imperativo-afirmativo", title: "L'affirmatif : tú (habla) et usted (hable)",
    why: "Comme en français, tu choisis entre <b>tu</b> et <b>vous</b> : <b>tú</b> pour la famille, les amis, les enfants ; <b>usted</b> pour un inconnu, un client, une personne plus âgée ou un supérieur. À l'impératif affirmatif <b>tú</b>, rien à apprendre : c'est la forme « <b>él / ella</b> » du présent (él habla → ¡habla!). Pour <b>usted</b>, on « inverse » la voyelle : -ar → <b>-e</b>, -er / -ir → <b>-a</b>.",
    rule: "1. <b>tú</b> (réguliers) : prends la forme <b>él</b> du présent : habla, come, escribe.<br>2. <b>usted</b> : -ar → <b>-e</b> (hable) ; -er / -ir → <b>-a</b> (coma, escriba).<br>3. <b>8 irréguliers tú</b> à apprendre par cœur : tener → <b>ten</b>, hacer → <b>haz</b>, ir → <b>ve</b>, venir → <b>ven</b>, poner → <b>pon</b>, salir → <b>sal</b>, decir → <b>di</b>, ser → <b>sé</b>.<br>4. <b>usted</b> irréguliers : tenga, haga, vaya, venga, ponga, salga, diga, sea (formes à retenir telles quelles).",
    timeline: "maintenant ● ──▶ (tu donnes l'ordre maintenant, l'action vient juste après)",
    table: { caption: "Impératif affirmatif", headers: ["Verbe", "tú", "usted", "Français (tú)"], rows: [
      ["hablar", "habl<b>a</b>", "habl<b>e</b>", "parle"],
      ["comer", "com<b>e</b>", "com<b>a</b>", "mange"],
      ["escribir", "escrib<b>e</b>", "escrib<b>a</b>", "écris"],
      ["tener", "<b>ten</b>", "tenga", "aie"],
      ["hacer", "<b>haz</b>", "haga", "fais"],
      ["ir", "<b>ve</b>", "vaya", "va"],
      ["venir", "<b>ven</b>", "venga", "viens"],
      ["poner", "<b>pon</b>", "ponga", "mets"],
      ["salir", "<b>sal</b>", "salga", "sors"],
      ["decir", "<b>di</b>", "diga", "dis"],
      ["ser", "<b>sé</b>", "sea", "sois"]] },
    examples: [
      { es: "Habla más despacio, por favor.", fr: "Parle plus lentement, s'il te plaît.", note: "tú" },
      { es: "Coma algo, por favor.", fr: "Mangez quelque chose, s'il vous plaît.", note: "usted : -er → -a" },
      { es: "Ten paciencia.", fr: "Aie de la patience.", note: "tener → ten" },
      { es: "Haz los deberes.", fr: "Fais tes devoirs.", note: "hacer → haz" },
      { es: "Ven conmigo.", fr: "Viens avec moi.", note: "venir → ven" }
    ],
    pitfalls: [
      { wrong: "Hablas más despacio.", right: "Habla más despacio.", why: "Avec « tú » affirmatif, on prend la forme él (habla), pas la forme tú (hablas)." },
      { wrong: "Hace los deberes. (comme ordre)", right: "Haz los deberes.", why: "hacer est irrégulier à l'impératif tú : haz." },
      { wrong: "Tiene paciencia. (comme ordre)", right: "Ten paciencia.", why: "tener → ten." },
      { wrong: "Habla, señor García. (à un inconnu)", right: "Hable, señor García.", why: "À un inconnu ou une personne qu'on vouvoie, utilise usted : hable." }
    ],
    exercises: [
      { type: "mcq", q: "« Parle ! » (tu)", opts: ["Hablas", "Habla", "Hable"], correct: 1, why: "tú affirmatif = forme <b>él</b> : habla." },
      { type: "fill", text: "___ (hablar, tú) más despacio, por favor.", answers: ["Habla", "habla"], why: "forme él de hablar : habla." },
      { type: "mcq", q: "« Mangez ! » (usted)", opts: ["Come", "Comes", "Coma"], correct: 2, why: "usted : -er → <b>-a</b> : coma." },
      { type: "speak", es: "Habla más despacio, por favor.", fr: "Parle plus lentement, s'il te plaît." },
      { type: "fill", text: "___ (abrir, usted) la ventana, por favor.", answers: ["Abra", "abra"], why: "usted : -ir → <b>-a</b> : abra." },
      { type: "mcq", q: "« Fais-le ! » : <b>hacer</b>, tú :", opts: ["Haz", "Hace", "Haga"], correct: 0, why: "hacer → <b>haz</b> (irrégulier)." },
      { type: "fill", text: "___ (poner, tú) la mesa.", answers: ["Pon", "pon"], why: "poner → pon." },
      { type: "fill", text: "___ (salir, tú) de aquí.", answers: ["Sal", "sal"], why: "salir → sal." },
      { type: "speak", es: "Ven conmigo.", fr: "Viens avec moi." },
      { type: "mcq", q: "« Viens ici ! » : <b>venir</b>, tú :", opts: ["Viene", "Vienes", "Venga", "Ven"], correct: 3, why: "venir → <b>ven</b>." },
      { type: "fill", text: "___ (decir, tú) la verdad.", answers: ["Di", "di"], why: "decir → di." },
      { type: "fill", text: "___ (venir, tú) aquí y ___ (ser, tú) amable.", answers: [["Ven", "ven"], ["sé", "Sé"]], why: "venir → ven ; ser → sé." },
      { type: "speak", es: "Haz los deberes.", fr: "Fais tes devoirs." }
    ]
  }, {
    id: "imperativo-negativo", title: "Le négatif (no hables) et la place des pronoms (dímelo)",
    why: "Le négatif <b>n'a pas les mêmes formes</b> que l'affirmatif : on prend la forme du présent et on <b>inverse la voyelle</b> (-ar → <b>-es</b>, -er / -ir → <b>-as</b>). Ce procédé marche aussi pour les « irréguliers » : on part du <b>yo</b> (tengo → no tengas, hago → no hagas). Pour les pronoms, la logique est simple : à l'<b>affirmatif</b>, ils se collent <b>après</b> le verbe (comme « dis-le-moi ») ; au <b>négatif</b>, ils restent <b>avant</b> (comme « ne me le dis pas »).",
    rule: "1. <b>tú négatif</b> : no + forme inversée : -ar → <b>-es</b> (no hables) ; -er / -ir → <b>-as</b> (no comas, no escribas).<br>2. <b>usted négatif</b> : no + même forme que l'affirmatif (no hable, no coma).<br>3. Irréguliers : no <b>hagas</b>, no <b>digas</b>, no <b>vayas</b>, no <b>tengas</b>, no <b>vengas</b>, no <b>pongas</b>, no <b>salgas</b>, no <b>seas</b> (radical du yo).<br>4. <b>Pronoms</b> : affirmatif → collés après (dímelo, cómpralo) ; négatif → avant (no me lo digas, no lo compres).<br>5. Ordre : <b>me / te / nos</b> avant <b>lo / la</b> (me lo). On ajoute un <b>accent</b> à l'écrit : di + me + lo = <b>dímelo</b>.",
    timeline: "affirmatif : ¡Dímelo! (pronoms après)<br>négatif : ¡No me lo digas! (pronoms avant)",
    table: { caption: "Affirmatif / négatif (tú)", headers: ["Affirmatif", "Négatif", "Français"], rows: [
      ["habla", "no habl<b>es</b>", "parle / ne parle pas"],
      ["come", "no com<b>as</b>", "mange / ne mange pas"],
      ["escribe", "no escrib<b>as</b>", "écris / n'écris pas"],
      ["haz", "no hag<b>as</b>", "fais / ne fais pas"],
      ["di", "no dig<b>as</b>", "dis / ne dis pas"],
      ["ve", "no vay<b>as</b>", "va / ne va pas"],
      ["ten", "no teng<b>as</b>", "aie / n'aie pas"],
      ["dímelo", "no me lo digas", "dis-le-moi / ne me le dis pas"],
      ["cómpralo", "no lo compres", "achète-le / ne l'achète pas"]] },
    examples: [
      { es: "No hables tan rápido.", fr: "Ne parle pas si vite.", note: "-ar → -es" },
      { es: "No comas eso, por favor.", fr: "Ne mange pas ça, s'il te plaît.", note: "-er → -as" },
      { es: "Dímelo, por favor.", fr: "Dis-le-moi, s'il te plaît.", note: "di + me + lo, accent à l'écrit" },
      { es: "No me lo digas.", fr: "Ne me le dis pas.", note: "pronoms avant le verbe" },
      { es: "Cómpralo hoy, pero no lo compres caro.", fr: "Achète-le aujourd'hui, mais ne l'achète pas cher." }
    ],
    pitfalls: [
      { wrong: "No habla tan rápido. (comme ordre, tú)", right: "No hables tan rápido.", why: "Au négatif tú, on inverse : -ar → -es." },
      { wrong: "No haz ruido.", right: "No hagas ruido.", why: "Haz n'existe qu'à l'affirmatif. Au négatif : no hagas." },
      { wrong: "No dímelo.", right: "No me lo digas.", why: "Au négatif, les pronoms vont avant le verbe, jamais collés après." },
      { wrong: "Me lo di.", right: "Dímelo.", why: "À l'affirmatif, les pronoms se collent après le verbe (« Me lo di » = je te l'ai donné, autre temps !)." }
    ],
    exercises: [
      { type: "mcq", q: "« Ne parle pas ! » (tu)", opts: ["No habla", "No hables", "No hable"], correct: 1, why: "-ar → <b>-es</b> : no hables." },
      { type: "fill", text: "No ___ (hablar, tú) tan rápido.", answers: ["hables"], why: "hablar → hablar + es." },
      { type: "mcq", q: "« Ne mange pas ! » (tu)", opts: ["No come", "No comes", "No comas"], correct: 2, why: "-er → <b>-as</b> : no comas." },
      { type: "speak", es: "No hables tan rápido.", fr: "Ne parle pas si vite." },
      { type: "fill", text: "No ___ (hacer, tú) ruido.", answers: ["hagas"], why: "Radical du yo (hago) → no hagas." },
      { type: "mcq", q: "« Ne le dis pas ! » (tu)", opts: ["No lo digas", "No lo dices", "No dilo", "No lo di"], correct: 0, why: "no + pronom + <b>digas</b>." },
      { type: "fill", text: "No ___ (ir, tú) solo.", answers: ["vayas"], why: "ir → no vayas." },
      { type: "mcq", q: "« Dis-le-moi ! » =", opts: ["Me lo di", "Dime lo", "Me lo dices", "Dímelo"], correct: 3, why: "di + me + lo = <b>dímelo</b> (pronoms collés, accent)." },
      { type: "speak", es: "Dímelo, por favor.", fr: "Dis-le-moi, s'il te plaît." },
      { type: "fill", text: "Quiero saberlo, ___ (decir + me + lo, tú).", answers: ["dímelo", "Dímelo"], why: "di + me + lo = dímelo." },
      { type: "fill", text: "No ___ (comer, usted) eso, por favor.", answers: ["coma"], why: "usted : -er → -a : no coma." },
      { type: "fill", text: "No ___ (tener, tú) miedo y ___ (ser, tú) valiente.", answers: [["tengas"], ["sé", "Sé"]], why: "no tengas (négatif) ; sé (affirmatif de ser)." },
      { type: "speak", es: "No me lo digas.", fr: "Ne me le dis pas." }
    ]
  }]
});

// Fragment Atelier : verbes-pronominaux-2, verbes-diphtongue, prononciation-diphtongues, structures-automatismes

/* ============================================================
   1. Les pronominaux, suite
   ============================================================ */
ATELIER.chapters.push({
  id: "verbes-pronominaux-2", group: "verbes", icon: "🪞", title: "Les pronominaux, suite", level: "A1",
  intro: "Tu connais déjà <b>me levanto</b>. Ici : les pronominaux <b>les plus fréquents</b>, la différence entre <b>lavar</b> et <b>lavarse</b>, et surtout <b>où mettre le pronom</b> (avant, collé à l'infinitif, au gérondif, à l'impératif).",
  lessons: [{
    id: "pronominaux-frequents", title: "Les pronominaux fréquents, réfléchi ou non",
    why: "En français aussi, « je me lève » (je lève <b>moi-même</b>) n'a pas le même sens que « je lève la main ». L'espagnol fait pareil : <b>lavar</b> = laver quelque chose ou quelqu'un d'autre ; <b>lavarse</b> = <b>se</b> laver. Le petit pronom dit simplement : « l'action retombe sur moi ». Certains verbes (llamarse, quedarse, irse) sont pronominaux par habitude : apprends-les <b>avec</b> leur pronom.",
    rule: "1. Le pronom suit la personne : <b>me</b> (yo), <b>te</b> (tú), <b>se</b> (él/ella/usted), <b>nos</b> (nosotros), <b>os</b> (vosotros), <b>se</b> (ellos/ustedes).<br>2. Il se place <b>avant</b> le verbe conjugué : <b>me</b> ducho.<br>3. Sans pronom, l'action va sur un <b>autre</b> : lavo <i>el coche</i> / <b>me</b> lavo <i>las manos</i>.<br>4. Pour une partie du corps ou un vêtement, on dit <b>las manos, el pelo</b> (pas « mis manos »).<br>5. Plusieurs verbes changent aussi de voyelle (acostarse → me <b>acue</b>sto) : c'est le chapitre « diphtongue ».",
    table: { caption: "Les pronominaux fréquents (à la 1re personne)", headers: ["Verbe", "Yo…", "Français"], rows: [
      ["llamarse", "<b>me</b> llamo", "s'appeler"],
      ["levantarse", "<b>me</b> levanto", "se lever"],
      ["ducharse", "<b>me</b> ducho", "se doucher"],
      ["acostarse", "<b>me</b> acuesto", "se coucher"],
      ["sentarse", "<b>me</b> siento", "s'asseoir"],
      ["vestirse", "<b>me</b> visto", "s'habiller"],
      ["divertirse", "<b>me</b> divierto", "s'amuser"],
      ["quedarse", "<b>me</b> quedo", "rester"],
      ["irse", "<b>me</b> voy", "s'en aller, partir"]] },
    examples: [
      { es: "Me llamo Ashley.", fr: "Je m'appelle Ashley." },
      { es: "Lavo el coche los sábados.", fr: "Je lave la voiture le samedi.", note: "lavar : l'action va sur la voiture" },
      { es: "Me lavo las manos antes de comer.", fr: "Je me lave les mains avant de manger.", note: "lavarse : sur moi ; las manos, pas « mis manos »" },
      { es: "Acuesto al niño a las nueve.", fr: "Je couche l'enfant à neuf heures.", note: "acostar = coucher quelqu'un d'autre" },
      { es: "Me acuesto tarde.", fr: "Je me couche tard." },
      { es: "Nos divertimos mucho.", fr: "Nous nous amusons beaucoup." },
      { es: "Me voy a casa.", fr: "Je m'en vais à la maison.", note: "ir = aller ; irse = s'en aller" }
    ],
    pitfalls: [
      { wrong: "Yo lavo las manos.", right: "Me lavo las manos.", why: "Sans « me », on ne sait pas qui est lavé. Pour se laver soi-même, il faut le pronom." },
      { wrong: "Me lavo mis manos.", right: "Me lavo las manos.", why: "Le pronom indique déjà que ce sont <b>mes</b> mains : on met l'article (las), pas le possessif." },
      { wrong: "Quedo en casa.", right: "Me quedo en casa.", why: "« quedarse » (rester) se dit avec son pronom. « quedar » seul veut dire autre chose (fixer un rendez-vous, il reste…)." }
    ],
    exercises: [
      { type: "mcq", q: "« Je me lève » =", opts: ["Levanto", "Me levanto", "Se levanto"], correct: 1, why: "yo → <b>me</b> + levanto. « Levanto » seul = je soulève." },
      { type: "fill", text: "Yo ___ llamo Ashley.", answers: ["me"], why: "yo → me." },
      { type: "fill", text: "Tú ___ duchas por la mañana.", answers: ["te"], why: "tú → te." },
      { type: "mcq", q: "« Nous nous couchons » (acostarse) =", opts: ["Nos acostamos", "Nos acuestamos", "Nos acostáis"], correct: 0, why: "nosotros garde la voyelle d'origine (acostamos) : l'accent tonique est sur la terminaison." },
      { type: "fill", text: "Mi hermano ___ ___ (levantarse) tarde.", answers: [["se"], ["levanta"]], why: "él → se + levanta." },
      { type: "speak", es: "Me llamo Ashley y me levanto a las siete.", fr: "Je m'appelle Ashley et je me lève à sept heures." },
      { type: "mcq", q: "« Je me lave les mains » =", opts: ["Lavo las manos", "Me lavo mis manos", "Me lavo las manos"], correct: 2, why: "Pronom <b>me</b> + article <b>las</b> (le pronom montre déjà que ce sont mes mains)." },
      { type: "fill", text: "Ellos ___ ___ (sentarse) en el sofá.", answers: [["se"], ["sientan"]], why: "ellos → se + sientan (e→ie : ils sont dans la « botte »)." },
      { type: "fill", text: "Yo ___ ___ (irse) ya.", answers: [["me"], ["voy"]], why: "irse → me voy (voy est le yo de ir)." },
      { type: "mcq", q: "« Quedarse » veut dire…", opts: ["sortir", "rester", "s'asseoir"], correct: 1, why: "Me quedo en casa = je reste à la maison." },
      { type: "fill", text: "Nosotros ___ ___ (divertirse) mucho.", answers: [["nos"], ["divertimos"]], why: "nosotros → nos + divertimos (pas de changement de voyelle)." },
      { type: "speak", es: "¿Cómo te llamas?", fr: "Comment t'appelles-tu ?" },
      { type: "mcq", q: "« Acuesto al niño » veut dire…", opts: ["Je me couche", "Je m'allonge", "Je dors", "Je couche l'enfant"], correct: 3, why: "Sans « me », c'est quelqu'un d'autre (al niño) qui est couché." },
      { type: "fill", text: "Yo ___ (lavar) el coche los sábados.", answers: ["lavo"], why: "Ici l'action va sur le coche : pas de pronom." }
    ]
  }, {
    id: "pronominaux-place", title: "La place du pronom (voy a levantarme, estoy duchándome, ¡levántate!)",
    why: "Le pronom veut rester <b>à côté du verbe qui porte la personne</b>. Avec un verbe conjugué, il passe devant. Avec deux verbes (voy a + infinitif, estoy + gérondif), tu as <b>deux places possibles</b> : devant le groupe, ou collé à la fin. En français on est pareil à l'impératif (« lève-toi ! »). Et surtout : le pronom suit <b>la personne qui agit</b>, jamais la terminaison de l'infinitif (-se).",
    rule: "1. Verbe conjugué : <b>me</b> levanto.<br>2. Avec un infinitif : <b>me</b> voy a levantar <b>ou</b> voy a levantar<b>me</b> (le pronom s'accorde avec le sujet : yo → me, tú → te).<br>3. Avec un gérondif : <b>me</b> estoy duchando <b>ou</b> estoy duchándo<b>me</b> (quand on colle, on ajoute un accent : duch<b>á</b>ndome).<br>4. Impératif (avant-goût A2) : à l'affirmatif le pronom est collé et prend l'accent (<b>¡levántate!</b>), au négatif on apprend la formule <b>¡no te levantes!</b>.<br>5. Jamais de pronom entre « a » et l'infinitif : pas de « voy a me levantar ».",
    timeline: "me levanto ── me voy a levantar / voy a levantarme ── me estoy levantando / estoy levantándome",
    table: { caption: "levantarse selon la construction", headers: ["Cas", "Pronom avant", "Pronom collé"], rows: [
      ["Présent", "<b>me</b> levanto", "—"],
      ["Futur proche", "<b>me</b> voy a levantar", "voy a levantar<b>me</b>"],
      ["Gérondif", "<b>me</b> estoy duchando", "estoy duchándo<b>me</b>"],
      ["Impératif (tú)", "¡no <b>te</b> levantes!", "¡levánta<b>te</b>!"]] },
    examples: [
      { es: "Voy a levantarme a las siete.", fr: "Je vais me lever à sept heures." },
      { es: "Me voy a levantar a las siete.", fr: "Je vais me lever à sept heures.", note: "même sens, pronom devant" },
      { es: "Estoy duchándome.", fr: "Je suis en train de me doucher." },
      { es: "Se está vistiendo.", fr: "Il est en train de s'habiller.", note: "vestirse → vistiendo" },
      { es: "¡Levántate! Es tarde.", fr: "Lève-toi ! Il est tard." },
      { es: "Siéntese, por favor.", fr: "Asseyez-vous, je vous prie.", note: "usted : le pronom est collé à la forme usted" },
      { es: "Quiero acostarme temprano.", fr: "Je veux me coucher tôt." }
    ],
    pitfalls: [
      { wrong: "Yo voy a levantarse.", right: "Yo voy a levantarme.", why: "Le pronom suit la <b>personne</b> (yo → me), pas la fin de l'infinitif (-se)." },
      { wrong: "Voy a me levantar.", right: "Voy a levantarme / Me voy a levantar.", why: "Le pronom va devant tout le groupe, ou collé à la fin. Jamais au milieu." },
      { wrong: "Estoy duchandome.", right: "Estoy duchándome.", why: "Quand on colle un pronom, le gérondif garde son accent tonique : on l'écrit (duchándome)." },
      { wrong: "¡Levantate!", right: "¡Levántate!", why: "L'accent reste sur la syllabe « van » : on l'écrit quand on ajoute le pronom." }
    ],
    exercises: [
      { type: "mcq", q: "« Je vais me lever » =", opts: ["Voy a levantarme", "Voy a te levantar", "Voy a levantarse"], correct: 0, why: "yo → me, collé à l'infinitif : levantarme." },
      { type: "fill", text: "Voy a ___ (levantarse) a las siete.", answers: ["levantarme"], why: "Infinitif + me : levantar<b>me</b>." },
      { type: "fill", text: "Mañana yo ___ voy a levantar temprano.", answers: ["me"], why: "Pronom devant tout le groupe : me voy a levantar." },
      { type: "mcq", q: "Tú vas a ___ temprano.", opts: ["levantarme", "levantarte", "levantarse"], correct: 1, why: "Le sujet est tú → te." },
      { type: "fill", text: "Tú vas a ___ (acostarse) pronto.", answers: ["acostarte"], why: "tú → te collé à l'infinitif." },
      { type: "speak", es: "Voy a levantarme a las siete.", fr: "Je vais me lever à sept heures." },
      { type: "fill", text: "Estoy ___ (ducharse).", answers: ["duchándome"], why: "Gérondif duchando + me, avec l'accent : duchándome." },
      { type: "mcq", q: "Quelle phrase est correcte ?", opts: ["Estoy duchando me", "Estoy me duchando", "Me estoy duchando"], correct: 2, why: "Le pronom va soit devant (me estoy duchando), soit collé (estoy duchándome)." },
      { type: "fill", text: "Ella está ___ (vestirse).", answers: ["vistiéndose"], why: "vestir → vistiendo (e→i), + se avec accent : vistiéndose." },
      { type: "fill", text: "¡___ (levantarse, tú)! Son las ocho.", answers: ["Levántate", "levántate"], why: "Impératif affirmatif : pronom collé + accent : levántate." },
      { type: "mcq", q: "« Assieds-toi ! » =", opts: ["¡Sientate!", "¡Siéntate!", "¡Te sienta!"], correct: 1, why: "sentarse → ¡siéntate! (accent, pronom collé)." },
      { type: "speak", es: "¡Siéntate, por favor!", fr: "Assieds-toi, s'il te plaît !" },
      { type: "fill", text: "Nosotros vamos a ___ (sentarse) aquí.", answers: ["sentarnos"], why: "nosotros → nos, collé : sentarnos." },
      { type: "fill", text: "Ellos están ___ (acostarse).", answers: ["acostándose"], why: "Gérondif acostando + se avec accent : acostándose." }
    ]
  }]
});

/* ============================================================
   2. Les verbes à diphtongue
   ============================================================ */
ATELIER.chapters.push({
  id: "verbes-diphtongue", group: "verbes", icon: "🥾", title: "Les verbes à diphtongue (quiero, puedo)", level: "A1",
  intro: "Pourquoi dit-on <b>quiero</b> mais <b>queremos</b> ? Parce que la voyelle accentuée se « casse » (e → ie, o → ue, e → i). Une astuce visuelle : <b>la botte</b>. Quatre formes changent, deux non.",
  lessons: [{
    id: "diphtongue-e-ie", title: "e → ie (quiero, pienso, prefiero)",
    why: "En espagnol, la voyelle <b>accentuée</b> du radical s'ouvre en diphtongue (e → ie). À <b>yo, tú, él, ellos</b>, l'accent tonique tombe sur le radical : <b>quIEro</b>. À <b>nosotros</b> et <b>vosotros</b>, l'accent tombe sur la terminaison : <b>queREmos</b>, <b>queRÉis</b> → le radical n'est pas accentué, la voyelle ne change pas. Si tu dessines les 4 formes qui changent dans le tableau, tu obtiens une <b>botte</b> 🥾.",
    rule: "1. Trouve le « e » du radical (qu<b>e</b>rer).<br>2. À yo, tú, él/ella/usted et ellos/ustedes : e → <b>ie</b> (quiero, quieres, quiere, quieren).<br>3. À nosotros et vosotros : on ne touche à rien (queremos, queréis).<br>4. Les terminaisons sont celles du présent normal.",
    table: { caption: "La botte : querer (vouloir) et pensar (penser)", headers: ["Personne", "querer", "pensar"], rows: [
      ["yo", "qu<b>ie</b>ro", "p<b>ie</b>nso"],
      ["tú", "qu<b>ie</b>res", "p<b>ie</b>nsas"],
      ["él/ella/usted", "qu<b>ie</b>re", "p<b>ie</b>nsa"],
      ["nosotros", "queremos", "pensamos"],
      ["vosotros", "queréis", "pensáis"],
      ["ellos/ustedes", "qu<b>ie</b>ren", "p<b>ie</b>nsan"]] },
    examples: [
      { es: "Quiero un café, por favor.", fr: "Je veux un café, s'il vous plaît." },
      { es: "Pienso en ti.", fr: "Je pense à toi." },
      { es: "La clase empieza a las nueve.", fr: "Le cours commence à neuf heures." },
      { es: "Prefiero el té.", fr: "Je préfère le thé." },
      { es: "Cerramos la tienda a las ocho.", fr: "Nous fermons la boutique à huit heures.", note: "nosotros : pas de changement" },
      { es: "No entiendo la pregunta.", fr: "Je ne comprends pas la question." },
      { es: "Lo siento mucho.", fr: "Je suis vraiment désolé(e)." }
    ],
    pitfalls: [
      { wrong: "Yo quero un café.", right: "Yo quiero un café.", why: "À yo, le « e » est accentué : il devient ie." },
      { wrong: "Nosotros quieremos.", right: "Nosotros queremos.", why: "À nosotros l'accent est sur la terminaison (-emos) : le radical reste intact." },
      { wrong: "Empezo a las nueve.", right: "Empiezo a las nueve.", why: "Empezar est dans la botte aussi : empiezo, empiezas, empieza, empiezan." }
    ],
    exercises: [
      { type: "mcq", q: "« Je veux » =", opts: ["quiero", "quero", "quieres"], correct: 0, why: "yo : e → ie." },
      { type: "fill", text: "Yo ___ (querer) un café.", answers: ["quiero"], why: "yo est dans la botte : quiero." },
      { type: "fill", text: "Tú ___ (pensar) en mí.", answers: ["piensas"], why: "tú est dans la botte : piensas." },
      { type: "fill", text: "Nosotros ___ (querer) un té.", answers: ["queremos"], why: "nosotros est hors de la botte : queremos." },
      { type: "mcq", q: "Quelle forme est fausse ?", opts: ["pienso", "piensamos", "piensan"], correct: 1, why: "À nosotros : pensamos (pas de ie)." },
      { type: "speak", es: "Quiero un café, por favor.", fr: "Je veux un café, s'il vous plaît." },
      { type: "fill", text: "Ella ___ (empezar) a trabajar a las nueve.", answers: ["empieza"], why: "ella : empieza." },
      { type: "fill", text: "Yo ___ (preferir) el té y tú ___ (preferir) el café.", answers: [["prefiero"], ["prefieres"]], why: "yo et tú sont dans la botte : prefiero, prefieres." },
      { type: "mcq", q: "Vosotros ___ la puerta.", opts: ["cierráis", "cierran", "cerráis"], correct: 2, why: "vosotros : hors de la botte, cerráis." },
      { type: "fill", text: "Ellos no ___ (entender) la pregunta.", answers: ["entienden"], why: "ellos : entienden." },
      { type: "speak", es: "No entiendo la pregunta.", fr: "Je ne comprends pas la question." },
      { type: "mcq", q: "Combien de personnes changent de voyelle ?", opts: ["Toutes", "Seulement yo", "Quatre : yo, tú, él, ellos"], correct: 2, why: "La botte : yo, tú, él/ella/usted, ellos/ustedes. Nosotros et vosotros restent normaux." },
      { type: "fill", text: "Lo ___ (sentir) mucho.", answers: ["siento"], why: "yo : siento (Lo siento = je suis désolé)." },
      { type: "fill", text: "Nosotros ___ (cerrar) la tienda a las ocho.", answers: ["cerramos"], why: "nosotros : cerramos, sans ie." }
    ]
  }, {
    id: "diphtongue-o-ue", title: "o → ue (puedo, duermo) et u → ue (juego)",
    why: "Même mécanisme que e → ie : la voyelle <b>accentuée</b> du radical se casse, ici o → <b>ue</b>. Même botte : <b>puEdo</b> mais <b>podEmos</b>. <b>Jugar</b> est le seul verbe en u → ue (juego) : l'espagnol n'aime pas commencer ou finir sur un « u » seul accentué, il l'habille en « ue » comme pour les autres.",
    rule: "1. Trouve le « o » du radical (p<b>o</b>der, d<b>o</b>rmir).<br>2. À yo, tú, él et ellos : o → <b>ue</b> (puedo, puedes, puede, pueden).<br>3. À nosotros et vosotros : le « o » reste (podemos, podéis).<br>4. Jugar : u → ue (juego, juegas, juega, juegan ; jugamos, jugáis). On dit <b>jugar a</b> + sport (juego al tenis).<br>5. Costar ne s'emploie qu'à la 3e personne : cuesta (1 prix) / cuestan (plusieurs).",
    table: { caption: "La botte : poder (pouvoir) et dormir (dormir)", headers: ["Personne", "poder", "dormir"], rows: [
      ["yo", "p<b>ue</b>do", "d<b>ue</b>rmo"],
      ["tú", "p<b>ue</b>des", "d<b>ue</b>rmes"],
      ["él/ella/usted", "p<b>ue</b>de", "d<b>ue</b>rme"],
      ["nosotros", "podemos", "dormimos"],
      ["vosotros", "podéis", "dormís"],
      ["ellos/ustedes", "p<b>ue</b>den", "d<b>ue</b>rmen"]] },
    examples: [
      { es: "¿Puedo pasar?", fr: "Je peux entrer ?" },
      { es: "Duermo ocho horas.", fr: "Je dors huit heures." },
      { es: "Vuelvo a casa a las seis.", fr: "Je rentre à la maison à six heures." },
      { es: "No encuentro mis llaves.", fr: "Je ne trouve pas mes clés." },
      { es: "Te cuento un secreto.", fr: "Je te raconte un secret.", note: "contar = raconter ou compter" },
      { es: "Almorzamos a las dos.", fr: "Nous déjeunons à deux heures." },
      { es: "¿Cuánto cuesta el menú?", fr: "Combien coûte le menu ?" },
      { es: "Juego al tenis los domingos.", fr: "Je joue au tennis le dimanche." }
    ],
    pitfalls: [
      { wrong: "Yo podo venir.", right: "Yo puedo venir.", why: "Le « o » de yo est accentué : o → ue." },
      { wrong: "Nosotros puedemos.", right: "Nosotros podemos.", why: "À nosotros l'accent est sur la terminaison : le radical ne change pas." },
      { wrong: "Juego el fútbol.", right: "Juego al fútbol.", why: "Jugar se construit avec « a » : jugar <b>a</b> + el = <b>al</b>." },
      { wrong: "Yo cuesto cinco euros.", right: "Cuesta cinco euros.", why: "Costar se dit d'une chose : cuesta (singulier) / cuestan (pluriel)." }
    ],
    exercises: [
      { type: "mcq", q: "« Je peux » =", opts: ["podo", "puedo", "pueda"], correct: 1, why: "yo : o → ue." },
      { type: "fill", text: "Yo ___ (poder) venir.", answers: ["puedo"], why: "yo : puedo." },
      { type: "fill", text: "Tú ___ (dormir) mucho.", answers: ["duermes"], why: "tú est dans la botte : duermes." },
      { type: "fill", text: "Nosotros ___ (poder) ayudar.", answers: ["podemos"], why: "nosotros : podemos, sans ue." },
      { type: "mcq", q: "« Vous dormez » (vosotros) =", opts: ["duermís", "duermáis", "dormís"], correct: 2, why: "vosotros est hors de la botte : dormís." },
      { type: "speak", es: "¿Puedo pasar?", fr: "Je peux entrer ?" },
      { type: "fill", text: "Ella ___ (volver) a casa a las seis.", answers: ["vuelve"], why: "ella : vuelve." },
      { type: "fill", text: "Yo ___ (jugar) al tenis y mi hermano ___ (jugar) al fútbol.", answers: [["juego"], ["juega"]], why: "yo et él sont dans la botte : juego, juega." },
      { type: "mcq", q: "Quelle forme garde le « u » ?", opts: ["juegan", "jugamos", "juegas"], correct: 1, why: "nosotros : jugamos (hors de la botte)." },
      { type: "fill", text: "¿Cuánto ___ (costar) el menú?", answers: ["cuesta"], why: "costar à la 3e personne du singulier : cuesta." },
      { type: "mcq", q: "Yo no ___ mis llaves.", opts: ["encuentro", "encontro", "encuentra"], correct: 0, why: "yo : encuentro." },
      { type: "speak", es: "Duermo ocho horas.", fr: "Je dors huit heures." },
      { type: "fill", text: "Ellos ___ (almorzar) a las dos.", answers: ["almuerzan"], why: "ellos : almuerzan." },
      { type: "fill", text: "Yo te ___ (contar) un secreto.", answers: ["cuento"], why: "yo : cuento." }
    ]
  }, {
    id: "diphtongue-e-i", title: "e → i (pido, sirvo, repito, sigo, digo)",
    why: "Quelques verbes en <b>-ir</b> ferment le « e » accentué en <b>i</b> au lieu de l'ouvrir en « ie ». Même logique, même botte : <b>pIdo</b> mais <b>pedImos</b>. Seuls les verbes en <b>-ir</b> font cela. Pour ne pas confondre avec e → ie (sentir, preferir, divertirse), retiens la famille : <b>pedir, servir, repetir, seguir, decir, vestirse</b> (avec <b>i</b>).",
    rule: "1. Verbe en -ir avec « e » dans le radical (p<b>e</b>dir).<br>2. À yo, tú, él et ellos : e → <b>i</b> (pido, pides, pide, piden).<br>3. À nosotros et vosotros : on garde le e (pedimos, pedís).<br>4. Seguir : yo <b>sigo</b> (pas « siguo »). Decir : yo <b>digo</b>, tú dices, él dice, ellos dicen.<br>5. Famille à retenir : <b>pedir, servir, repetir, seguir, decir, vestirse</b>.",
    table: { caption: "La botte : pedir (demander) et seguir (suivre)", headers: ["Personne", "pedir", "seguir"], rows: [
      ["yo", "p<b>i</b>do", "s<b>i</b>go"],
      ["tú", "p<b>i</b>des", "s<b>i</b>gues"],
      ["él/ella/usted", "p<b>i</b>de", "s<b>i</b>gue"],
      ["nosotros", "pedimos", "seguimos"],
      ["vosotros", "pedís", "seguís"],
      ["ellos/ustedes", "p<b>i</b>den", "s<b>i</b>guen"]] },
    examples: [
      { es: "Pido un café con leche.", fr: "Je demande un café au lait." },
      { es: "Sirven la cena a las nueve.", fr: "Ils servent le dîner à neuf heures." },
      { es: "Repito la frase.", fr: "Je répète la phrase." },
      { es: "Sigo recto hasta la plaza.", fr: "Je continue tout droit jusqu'à la place." },
      { es: "Digo la verdad.", fr: "Je dis la vérité." },
      { es: "¿Qué dices?", fr: "Qu'est-ce que tu dis ?" },
      { es: "Pedimos la cuenta.", fr: "Nous demandons l'addition.", note: "nosotros : pas de changement" }
    ],
    pitfalls: [
      { wrong: "Yo pedo un café.", right: "Yo pido un café.", why: "Radical en e accentué → i. Et attention : « pedo » existe en espagnol, mais ce n'est pas du tout ce que tu veux dire !" },
      { wrong: "Yo siguo recto.", right: "Yo sigo recto.", why: "Seguir : le « u » ne sert qu'à garder le son /g/ devant e. Devant o, on écrit seulement g : sigo." },
      { wrong: "Nosotros dicemos.", right: "Nosotros decimos.", why: "Hors de la botte, le radical ne change pas." },
      { wrong: "Yo prifiero el té.", right: "Yo prefiero el té.", why: "Preferir est e → ie, pas e → i. C'est la différence entre les deux familles." }
    ],
    exercises: [
      { type: "mcq", q: "« Je demande » =", opts: ["pido", "pedo", "pede"], correct: 0, why: "pedir, yo : e → i." },
      { type: "fill", text: "Yo ___ (pedir) una paella.", answers: ["pido"], why: "yo : pido." },
      { type: "fill", text: "Tú ___ (servir) el café.", answers: ["sirves"], why: "tú : sirves." },
      { type: "fill", text: "Ella ___ (repetir) la frase.", answers: ["repite"], why: "ella : repite." },
      { type: "mcq", q: "« Nous demandons » =", opts: ["pidimos", "pedimos", "pedemos"], correct: 1, why: "nosotros : hors de la botte, le e reste : pedimos (terminaison -imos pour un verbe en -ir)." },
      { type: "speak", es: "Pido un café con leche.", fr: "Je demande un café au lait." },
      { type: "fill", text: "Yo ___ (seguir) recto.", answers: ["sigo"], why: "yo : sigo (sans u)." },
      { type: "fill", text: "Yo ___ (decir) la verdad.", answers: ["digo"], why: "decir, yo : digo." },
      { type: "mcq", q: "Quel verbe ne fait PAS e → i ?", opts: ["preferir", "servir", "repetir"], correct: 0, why: "Preferir fait e → ie (prefiero). Servir et repetir font e → i." },
      { type: "fill", text: "Nosotros ___ (seguir) el camino.", answers: ["seguimos"], why: "nosotros : seguimos." },
      { type: "fill", text: "Ellos ___ (pedir) la cuenta.", answers: ["piden"], why: "ellos : piden." },
      { type: "mcq", q: "« Ils servent » =", opts: ["servan", "serven", "sirven"], correct: 2, why: "ellos : e → i, sirven." },
      { type: "speak", es: "Sigo recto hasta la plaza.", fr: "Je continue tout droit jusqu'à la place." },
      { type: "fill", text: "Tú ___ (decir) que sí y yo ___ (decir) que no.", answers: [["dices"], ["digo"]], why: "tú : dices ; yo : digo (irrégulier en -go)." }
    ]
  }]
});

/* ============================================================
   3. Diphtongues et hiatus
   ============================================================ */
ATELIER.chapters.push({
  id: "prononciation-diphtongues", group: "prononciation", icon: "🔊", title: "Diphtongues et hiatus (ie, ue, ai, ía)", level: "A1",
  intro: "Combien de syllabes dans <b>bueno</b> ? Deux : <b>bue-no</b>. Et dans <b>país</b> ? Deux aussi : <b>pa-ís</b>. Apprends à entendre quand deux voyelles <b>fusionnent</b> et quand elles <b>se séparent</b>.",
  lessons: [{
    id: "diphtongues", title: "Les diphtongues : deux voyelles, UNE syllabe",
    why: "Les voyelles se divisent en <b>fortes</b> (a, e, o) et <b>faibles</b> (i, u). Une voyelle faible à côté d'une voyelle forte (ou d'une autre faible) se glisse dedans : on prononce <b>les deux dans un seul souffle</b>. C'est pour cela que <b>tiene</b> se dit « tyé-né » en 2 syllabes et non « ti-é-né » en 3. Un français a tendance à tout séparer ; l'espagnol fond.",
    rule: "1. Voyelles fortes : <b>a, e, o</b>. Faibles : <b>i, u</b>.<br>2. Faible + forte (ia, ie, io, ua, ue, uo) ou forte + faible (ai, ei, oi, au, eu, ou) = <b>diphtongue</b> : une syllabe.<br>3. Faible + faible (iu, ui) = diphtongue aussi : ciu-dad, cui-da-do.<br>4. Le « y » final se prononce « i » : ho<b>y</b>, mu<b>y</b>, ha<b>y</b>, estoy.<br>5. Dans <b>que, qui, gue, gui</b>, le « u » est muet : ce n'est pas une diphtongue (que = ké).",
    table: { caption: "Les diphtongues et leur coupe en syllabes", headers: ["Diphtongue", "Exemple", "Coupe"], rows: [
      ["ia", "gracias", "gra-cias"],
      ["ie", "tiene", "tie-ne"],
      ["io", "estudio", "es-tu-dio"],
      ["ua", "agua", "a-gua"],
      ["ue", "bueno", "bue-no"],
      ["uo", "antiguo", "an-ti-guo"],
      ["ai", "aire", "ai-re"],
      ["ei", "peine", "pei-ne"],
      ["oi", "oigo", "oi-go"],
      ["au", "auto", "au-to"],
      ["eu", "euro", "eu-ro"],
      ["iu", "ciudad", "ciu-dad"],
      ["ui", "cuidado", "cui-da-do"]] },
    examples: [
      { es: "bueno", fr: "bon", note: "bue-no (2 syllabes)" },
      { es: "tiene", fr: "il/elle a", note: "tie-ne (2 syllabes)" },
      { es: "aire", fr: "air", note: "ai-re (2 syllabes)" },
      { es: "cuidado", fr: "attention", note: "cui-da-do (3 syllabes)" },
      { es: "pueblo", fr: "village", note: "pue-blo (2 syllabes)" },
      { es: "ciudad", fr: "ville", note: "ciu-dad (2 syllabes)" },
      { es: "agua", fr: "eau", note: "a-gua (2 syllabes)" },
      { es: "auto", fr: "voiture", note: "au-to (2 syllabes)" }
    ],
    pitfalls: [
      { wrong: "ti-e-ne (3 syllabes)", right: "tie-ne (2 syllabes)", why: "i + e forment une diphtongue : elles sont prononcées ensemble." },
      { wrong: "queso = « qué-so » avec un u prononcé", right: "queso = « ké-so »", why: "Après q, le u est muet : ce n'est pas la diphtongue ue." },
      { wrong: "bu-e-no", right: "bue-no", why: "ue est une diphtongue : tu entends une seule syllabe « bwé »." }
    ],
    exercises: [
      { type: "mcq", q: "Combien de syllabes dans « bueno » ?", opts: ["1", "2", "3"], correct: 1, why: "bue-no : la diphtongue ue = une syllabe." },
      { type: "fill", text: "Coupe en syllabes : bueno → ___-no", answers: ["bue"], why: "bue-no." },
      { type: "mcq", q: "Laquelle est une diphtongue ?", opts: ["ie dans « tiene »", "ea dans « oreja »", "eo dans « leo »"], correct: 0, why: "i (faible) + e (forte) = diphtongue. Pour ea et eo, deux voyelles fortes : hiatus." },
      { type: "fill", text: "Coupe en syllabes : cuidado → ___-da-do", answers: ["cui"], why: "cui-da-do : ui = diphtongue." },
      { type: "speak", es: "¿Tienes tiempo?", fr: "Tu as le temps ?" },
      { type: "mcq", q: "Combien de syllabes dans « ciudad » ?", opts: ["1", "3", "2"], correct: 2, why: "ciu-dad : iu est une diphtongue." },
      { type: "fill", text: "Coupe en syllabes : agua → a-___", answers: ["gua"], why: "a-gua." },
      { type: "mcq", q: "Le « ue » de « queso » est…", opts: ["une diphtongue", "un u muet : on dit « ké »", "un hiatus"], correct: 1, why: "Après q, le u ne se prononce pas." },
      { type: "speak", es: "Buenos días, ¿cómo estás?", fr: "Bonjour, comment vas-tu ?" },
      { type: "fill", text: "Coupe en syllabes : pueblo → ___-blo", answers: ["pue"], why: "pue-blo." },
      { type: "mcq", q: "Où est la diphtongue dans « auto » ?", opts: ["au", "to", "ut"], correct: 0, why: "a + u : au-to." },
      { type: "speak", es: "Hay un auto nuevo en la calle.", fr: "Il y a une voiture neuve dans la rue." },
      { type: "fill", text: "Coupe en syllabes : ciudad → ___-dad", answers: ["ciu"], why: "ciu-dad." },
      { type: "mcq", q: "Le « y » de « hoy » et « muy » se prononce comme…", opts: ["un « j » français", "un « l »", "un « i »"], correct: 2, why: "Le « y » final est une voyelle : hoy = « oï », muy = « mouï »." }
    ]
  }, {
    id: "hiatus", title: "Les hiatus et l'accent écrit (país, día, río)",
    why: "Parfois deux voyelles côte à côte ne fusionnent pas : elles se <b>séparent</b>, c'est un hiatus. Deux cas : (1) deux voyelles <b>fortes</b> (a, e, o) : <b>te-a-tro, le-er, po-e-ta</b>, aucun accent nécessaire ; (2) une voyelle <b>faible accentuée</b> près d'une forte : le son se casse. L'espagnol le marque avec un <b>accent écrit sur le i ou le u</b> : <b>pa-ís, dí-a, rí-o</b>. Sans l'accent, on lirait une diphtongue (« dia » = une syllabe).",
    rule: "1. Deux voyelles fortes (a, e, o) côte à côte = <b>hiatus</b> : le-er, te-a-tro, po-e-ta (pas d'accent).<br>2. Voyelle <b>faible tonique</b> + forte (ou l'inverse) = hiatus avec accent écrit sur le <b>í</b> ou le <b>ú</b> : <b>día, río, tío, país, maíz, baúl, feúcho</b>.<br>3. L'accent écrit sur í/ú s'écrit toujours, même si la règle générale ne le demande pas (maíz finit par z, mais garde son accent).<br>4. Terminaisons en <b>-ía</b> : tenía, comía, vivía (imparfait) et -ía du conditionnel : toujours avec accent.",
    table: { caption: "Hiatus : coupe et raison", headers: ["Mot", "Coupe", "Pourquoi"], rows: [
      ["país", "pa-ís", "i faible tonique, accent écrit"],
      ["día", "dí-a", "i faible tonique, accent écrit"],
      ["río", "rí-o", "i faible tonique, accent écrit"],
      ["tío", "tí-o", "i faible tonique, accent écrit"],
      ["maíz", "ma-íz", "i faible tonique, accent écrit"],
      ["baúl", "ba-úl", "u faible tonique, accent écrit"],
      ["feúcho", "fe-ú-cho", "u faible tonique, accent écrit"],
      ["poeta", "po-e-ta", "deux fortes : hiatus, pas d'accent"],
      ["leer", "le-er", "deux fortes : hiatus, pas d'accent"],
      ["tenía", "te-ní-a", "-ía = hiatus avec accent"]] },
    examples: [
      { es: "país", fr: "pays", note: "pa-ís (2 syllabes)" },
      { es: "día", fr: "jour", note: "dí-a (2 syllabes)" },
      { es: "río", fr: "fleuve", note: "rí-o (2 syllabes)" },
      { es: "tío", fr: "oncle", note: "tí-o (2 syllabes)" },
      { es: "maíz", fr: "maïs", note: "ma-íz (2 syllabes)" },
      { es: "feúcho", fr: "moche", note: "fe-ú-cho (3 syllabes)" },
      { es: "poeta", fr: "poète", note: "po-e-ta (3 syllabes, deux fortes)" },
      { es: "tenía", fr: "j'avais / il avait", note: "te-ní-a (3 syllabes)" }
    ],
    pitfalls: [
      { wrong: "dia (sans accent)", right: "día", why: "Sans accent, « ia » se lit en diphtongue (une syllabe, « dya »). Pour 2 syllabes, il faut í." },
      { wrong: "pais", right: "país", why: "Le mot se coupe pa-ís : l'accent sur le í montre la séparation." },
      { wrong: "leer lu en une syllabe : « lir »", right: "le-er", why: "Deux voyelles fortes ne fusionnent jamais : hiatus." },
      { wrong: "tenia (imparfait de tener)", right: "tenía", why: "La terminaison -ía porte toujours l'accent : te-ní-a." }
    ],
    exercises: [
      { type: "mcq", q: "Quel mot est écrit correctement ?", opts: ["pais", "païs", "país"], correct: 2, why: "pa-ís : accent sur le i." },
      { type: "fill", text: "Ajoute l'accent : dia → ___", answers: ["día"], why: "dí-a : i faible tonique." },
      { type: "fill", text: "Ajoute l'accent : tio → ___", answers: ["tío"], why: "tí-o." },
      { type: "mcq", q: "Combien de syllabes dans « poeta » ?", opts: ["2", "3", "4"], correct: 1, why: "po-e-ta : deux voyelles fortes (o, e) = hiatus." },
      { type: "speak", es: "Mi tío vive en este país.", fr: "Mon oncle habite dans ce pays." },
      { type: "fill", text: "Ajoute l'accent : tenia (il avait) → ___", answers: ["tenía"], why: "te-ní-a : -ía avec accent." },
      { type: "mcq", q: "Pourquoi « maíz » porte-t-il un accent ?", opts: ["Pour séparer a et í (hiatus)", "Parce qu'il finit par z", "Pour marquer le pluriel"], correct: 0, why: "L'accent sur le í marque le hiatus ma-íz." },
      { type: "speak", es: "¿Qué día es hoy?", fr: "Quel jour sommes-nous aujourd'hui ?" },
      { type: "fill", text: "Ajoute l'accent : rio (le fleuve) → ___", answers: ["río"], why: "rí-o." },
      { type: "mcq", q: "Combien de syllabes dans « leer » ?", opts: ["2", "1", "3"], correct: 0, why: "le-er : deux voyelles fortes, hiatus." },
      { type: "fill", text: "Ajoute l'accent : feucho → ___", answers: ["feúcho"], why: "fe-ú-cho : u faible tonique." },
      { type: "mcq", q: "Quel mot est un hiatus SANS accent écrit ?", opts: ["país", "teatro", "día"], correct: 1, why: "te-a-tro : deux voyelles fortes (e, a)." },
      { type: "speak", es: "Cada día leo un poco.", fr: "Chaque jour je lis un peu." },
      { type: "fill", text: "Ajoute l'accent : baul → ___", answers: ["baúl"], why: "ba-úl : u faible tonique." }
    ]
  }]
});

/* ============================================================
   4. Mes automatismes
   ============================================================ */
ATELIER.chapters.push({
  id: "structures-automatismes", group: "structures", icon: "⚡", title: "Mes automatismes", level: "A1",
  intro: "Cinq <b>réflexes</b> à répéter jusqu'à ce que ça sorte tout seul. Chaque leçon est un drill : phrases courtes, même point sous plusieurs angles, réponse en une seconde. (Le réflexe 5 anticipe l'A2.)",
  lessons: [{
    id: "reflejo-1", title: "Réflexe 1 : saluer et être poli",
    why: "Les salutations sont des <b>réponses automatiques</b> : tu ne construis pas la phrase, tu la sors. Le seul vrai choix, c'est <b>tú</b> (amis, famille, jeunes) ou <b>usted</b> (inconnus plus âgés, client, formel). Avec usted, le verbe est à la <b>3e personne du singulier</b> : ¿Cómo <b>está</b> usted ?",
    rule: "1. ¿Cómo estás? → <b>Bien, ¿y tú?</b> / ¿Cómo está usted? → <b>Bien, gracias, ¿y usted?</b><br>2. Gracias → <b>De nada</b>.<br>3. Tu bouscules quelqu'un : <b>Perdón</b>. Tu abordes quelqu'un : <b>Disculpe</b> (usted) / <b>Disculpa</b> (tú).<br>4. Première rencontre : <b>Mucho gusto</b> / <b>Encantado(a)</b>.<br>5. Heure : <b>Buenos días</b> (matin), <b>Buenas tardes</b> (après-midi), <b>Buenas noches</b> (soir, nuit).",
    table: { caption: "Question → réponse réflexe", headers: ["On te dit", "Tu réponds", "Français"], rows: [
      ["¿Cómo estás?", "<b>Bien, ¿y tú?</b>", "Bien, et toi ?"],
      ["¿Cómo está usted?", "<b>Bien, gracias, ¿y usted?</b>", "Bien merci, et vous ?"],
      ["¿Qué tal?", "<b>Muy bien / Así así</b>", "Très bien / comme ci comme ça"],
      ["Gracias", "<b>De nada</b>", "De rien"],
      ["Perdón", "<b>No pasa nada</b>", "Pas de souci"],
      ["¿Cómo te llamas?", "<b>Me llamo…</b>", "Je m'appelle…"],
      ["Mucho gusto", "<b>Igualmente</b>", "Enchanté(e), de même"]] },
    examples: [
      { es: "Buenos días, ¿cómo está usted?", fr: "Bonjour, comment allez-vous ?" },
      { es: "Bien, gracias, ¿y usted?", fr: "Bien, merci, et vous ?" },
      { es: "Disculpe, ¿tiene hora?", fr: "Excusez-moi, avez-vous l'heure ?", note: "usted : forme polie" },
      { es: "Perdón, no pasa nada.", fr: "Pardon, pas de souci." },
      { es: "Mucho gusto, me llamo Ashley.", fr: "Enchantée, je m'appelle Ashley." },
      { es: "Hasta mañana.", fr: "À demain." }
    ],
    pitfalls: [
      { wrong: "¿Cómo estás usted?", right: "¿Cómo está usted?", why: "Avec usted, le verbe est à la 3e personne (está). estás va avec tú." },
      { wrong: "—Gracias. —Gracias.", right: "—Gracias. —De nada.", why: "On répond à « gracias » par « de nada » (de rien)." },
      { wrong: "Buenos noches", right: "Buenas noches", why: "Noches est féminin : buenas. Días est masculin : buenos." }
    ],
    exercises: [
      { type: "mcq", q: "On te dit « ¿Cómo estás? ». Tu réponds…", opts: ["Bien, ¿y tú?", "Me llamo Ana", "De nada"], correct: 0, why: "Réponse réflexe : Bien, ¿y tú?" },
      { type: "mcq", q: "On te dit « Gracias ». Tu réponds…", opts: ["Perdón", "De nada", "Hola"], correct: 1, why: "Gracias → de nada." },
      { type: "fill", text: "¿Cómo ___ (estar, tú)? —Bien, ¿y tú?", answers: ["estás"], why: "tú → estás." },
      { type: "fill", text: "¿Cómo ___ (estar, usted)? —Bien, gracias.", answers: ["está"], why: "usted → est 3e personne : está." },
      { type: "mcq", q: "Tu bouscules quelqu'un dans le métro. Tu dis…", opts: ["De nada", "Mucho gusto", "Perdón"], correct: 2, why: "Perdón pour s'excuser d'un geste." },
      { type: "speak", es: "Buenos días, ¿cómo está usted?", fr: "Bonjour, comment allez-vous ?" },
      { type: "fill", text: "Muchas ___.", answers: ["gracias"], why: "Muchas gracias." },
      { type: "fill", text: "—Gracias. —De ___.", answers: ["nada"], why: "De nada." },
      { type: "mcq", q: "Tu parles à ton directeur, que tu connais peu. Tu dis…", opts: ["¿Cómo estás?", "¿Cómo está usted?", "¿Qué tal, tío?"], correct: 1, why: "Situation formelle : usted." },
      { type: "fill", text: "___, ¿tiene hora? (Excusez-moi, vous avez l'heure ?)", answers: ["Disculpe", "Perdone", "Perdón", "disculpe", "perdone", "perdón"], why: "Pour aborder quelqu'un avec usted : disculpe / perdone." },
      { type: "speak", es: "Mucho gusto, me llamo Ashley.", fr: "Enchantée, je m'appelle Ashley." },
      { type: "mcq", q: "À 23 h, tu dis…", opts: ["Buenas noches", "Buenos días", "Buenas tardes"], correct: 0, why: "Le soir/la nuit : buenas noches." },
      { type: "fill", text: "¿Cómo te ___ (llamarse)? —Me llamo Luis.", answers: ["llamas"], why: "tú → te llamas." },
      { type: "speak", es: "Hasta mañana, gracias por todo.", fr: "À demain, merci pour tout." }
    ]
  }, {
    id: "reflejo-2", title: "Réflexe 2 : conjuguer le présent sans réfléchir",
    why: "Le présent est le temps de base : si tu le conjugues <b>sans y penser</b>, tout le reste devient facile. Le secret : une seule question à chaque fois, « <b>quelle personne ?</b> ». Puis le radical + la terminaison. Les irréguliers sont presque tous irréguliers <b>à yo seulement</b> (tengo, hago, salgo) ou dans la botte (quiero, puedo).",
    rule: "1. Régulier : radical + <b>-o, -as/-es, -a/-e, -amos/-emos/-imos, -áis/-éis/-ís, -an/-en</b>.<br>2. À <b>yo</b>, fréquents en -go : tengo, hago, pongo, salgo, vengo, digo ; autres : soy, estoy, voy, sé, veo, doy.<br>3. Verbes de la botte : querer, poder, dormir, volver, jugar, pedir (yo, tú, él, ellos changent).<br>4. ser : soy, eres, es, somos, sois, son. ir : voy, vas, va, vamos, vais, van.",
    table: { caption: "Les trois conjugaisons régulières", headers: ["Personne", "-ar : hablar", "-er : comer", "-ir : vivir"], rows: [
      ["yo", "habl<b>o</b>", "com<b>o</b>", "viv<b>o</b>"],
      ["tú", "habl<b>as</b>", "com<b>es</b>", "viv<b>es</b>"],
      ["él/ella/usted", "habl<b>a</b>", "com<b>e</b>", "viv<b>e</b>"],
      ["nosotros", "habl<b>amos</b>", "com<b>emos</b>", "viv<b>imos</b>"],
      ["vosotros", "habl<b>áis</b>", "com<b>éis</b>", "viv<b>ís</b>"],
      ["ellos/ustedes", "habl<b>an</b>", "com<b>en</b>", "viv<b>en</b>"]] },
    examples: [
      { es: "Hablo español y como en casa.", fr: "Je parle espagnol et je mange à la maison." },
      { es: "Tengo dos hermanos.", fr: "J'ai deux frères/soeurs." },
      { es: "Hago deporte los lunes.", fr: "Je fais du sport le lundi." },
      { es: "Salgo a las ocho.", fr: "Je sors à huit heures." },
      { es: "No sé la respuesta.", fr: "Je ne sais pas la réponse." },
      { es: "Vamos al trabajo en metro.", fr: "Nous allons au travail en métro." }
    ],
    pitfalls: [
      { wrong: "Yo tieno dos hermanos.", right: "Yo tengo dos hermanos.", why: "Tener fait e → ie à tú/él/ellos (tienes, tiene, tienen) mais yo est irrégulier en -go : tengo." },
      { wrong: "Yo hacio deporte.", right: "Yo hago deporte.", why: "Hacer : yo hago (-go), pas de changement de voyelle." },
      { wrong: "Nosotros quieremos.", right: "Nosotros queremos.", why: "Hors de la botte, pas de diphtongue." }
    ],
    exercises: [
      { type: "fill", text: "Yo ___ (hablar) español.", answers: ["hablo"], why: "hablar, yo : -o." },
      { type: "fill", text: "Ella ___ (comer) en casa.", answers: ["come"], why: "comer, ella : -e." },
      { type: "fill", text: "Nosotros ___ (vivir) en Madrid.", answers: ["vivimos"], why: "vivir, nosotros : -imos." },
      { type: "mcq", q: "« Je fais » (hacer) =", opts: ["hago", "hazo", "hacio"], correct: 0, why: "hacer, yo : hago (-go)." },
      { type: "fill", text: "Yo ___ (tener) dos hermanos.", answers: ["tengo"], why: "tener, yo : tengo." },
      { type: "fill", text: "Ellos ___ (querer) un café.", answers: ["quieren"], why: "querer, ellos : dans la botte, quieren." },
      { type: "speak", es: "Hago deporte los lunes.", fr: "Je fais du sport le lundi." },
      { type: "fill", text: "Nosotros ___ (poder) venir.", answers: ["podemos"], why: "nosotros : hors de la botte, podemos." },
      { type: "fill", text: "Yo ___ (ir) al trabajo.", answers: ["voy"], why: "ir, yo : voy." },
      { type: "mcq", q: "Vosotros ___ amigos.", opts: ["sois", "somos", "son"], correct: 0, why: "ser, vosotros : sois." },
      { type: "fill", text: "Tú ___ (dormir) poco.", answers: ["duermes"], why: "dormir, tú : duermes." },
      { type: "fill", text: "Yo ___ (saber) la respuesta.", answers: ["sé"], why: "saber, yo : sé." },
      { type: "fill", text: "Yo ___ (salir) y tú ___ (volver).", answers: [["salgo"], ["vuelves"]], why: "salir, yo : salgo ; volver, tú : vuelves." },
      { type: "speak", es: "Tengo hambre y quiero comer.", fr: "J'ai faim et je veux manger." }
    ]
  }, {
    id: "reflejo-3", title: "Réflexe 3 : ser, estar, tener, hay",
    why: "Quatre verbes pour « être / avoir / il y a » ; chaque <b>question</b> appelle le bon verbe. Qui es-tu, d'où viens-tu, comment es-tu ? → <b>ser</b>. Où es-tu, comment vas-tu (état) ? → <b>estar</b>. Âge, faim, soif, froid ? → <b>tener</b> (en français aussi : « j'ai faim »). Existence (« il y a ») ? → <b>hay</b>.",
    rule: "1. <b>ser</b> = identité, profession, origine, caractère : ¿Quién es ? ¿De dónde eres ? ¿Cómo es ?<br>2. <b>estar</b> = lieu et état : ¿Dónde está ? ¿Cómo estás ? Estoy cansado.<br>3. <b>tener</b> = âge et sensations : tengo 20 años, tengo hambre / sed / frío / calor / sueño.<br>4. <b>hay</b> = « il y a » + quelque chose d'indéfini (un, dos, sans article). Avec <b>el, la, mi, un nom propre</b> → <b>está</b>.",
    table: { caption: "La question te donne le verbe", headers: ["Question", "Verbe", "Réponse type"], rows: [
      ["¿Quién eres? ¿De dónde eres? ¿Cómo eres?", "<b>ser</b>", "Soy profesora. Soy de Lyon. Es simpática."],
      ["¿Dónde estás? ¿Cómo estás?", "<b>estar</b>", "Estoy en casa. Estoy cansado."],
      ["¿Cuántos años tienes? ¿Tienes hambre?", "<b>tener</b>", "Tengo veinte años. Tengo hambre."],
      ["¿Qué hay? ¿Hay un banco aquí?", "<b>hay</b>", "Hay un banco cerca."]] },
    examples: [
      { es: "Soy profesora y soy de Lyon.", fr: "Je suis professeure et je suis de Lyon." },
      { es: "¿Dónde está el baño?", fr: "Où sont les toilettes ?", note: "el baño = défini → está" },
      { es: "Hay un café aquí cerca.", fr: "Il y a un café près d'ici.", note: "un café = indéfini → hay" },
      { es: "Mi madre tiene cincuenta años.", fr: "Ma mère a cinquante ans." },
      { es: "Estoy cansada.", fr: "Je suis fatiguée." },
      { es: "Tengo sed y tengo frío.", fr: "J'ai soif et j'ai froid." }
    ],
    pitfalls: [
      { wrong: "Soy cansado.", right: "Estoy cansado.", why: "La fatigue est un état passager : estar." },
      { wrong: "Soy veinte años.", right: "Tengo veinte años.", why: "En espagnol, l'âge se dit avec tener, comme en français avec avoir." },
      { wrong: "Está un café aquí.", right: "Hay un café aquí.", why: "Un café = quelque chose d'indéfini : hay. Est(á) s'emploie avec le défini : el café está aquí." },
      { wrong: "Estoy hambre.", right: "Tengo hambre.", why: "Hambre, sed, frío, calor, sueño : toujours avec tener." }
    ],
    exercises: [
      { type: "mcq", q: "¿Dónde ___ el baño ?", opts: ["es", "está", "hay"], correct: 1, why: "Lieu d'une chose précise (el baño) : estar." },
      { type: "fill", text: "Yo ___ (ser) profesora.", answers: ["soy"], why: "profession : ser, yo → soy." },
      { type: "fill", text: "Ella ___ (estar) cansada.", answers: ["está"], why: "état : estar, ella → está." },
      { type: "fill", text: "Mi hermano ___ (tener) veinte años.", answers: ["tiene"], why: "âge : tener, él → tiene." },
      { type: "mcq", q: "« Il y a un café ici » =", opts: ["Es un café aquí", "Está un café aquí", "Hay un café aquí"], correct: 2, why: "Un café (indéfini) → hay." },
      { type: "speak", es: "¿Dónde está el baño?", fr: "Où sont les toilettes ?" },
      { type: "fill", text: "___ (haber) dos bancos en esta calle.", answers: ["Hay", "hay"], why: "Existence d'éléments indéfinis : hay (même forme au singulier et au pluriel)." },
      { type: "fill", text: "Nosotros ___ (tener) hambre y ___ (estar) en casa.", answers: [["tenemos"], ["estamos"]], why: "faim : tener (tenemos) ; lieu : estar (estamos)." },
      { type: "mcq", q: "¿Cómo ___ tu madre ? —Es muy simpática.", opts: ["es", "está", "tiene"], correct: 0, why: "Cómo es = comment est-elle (caractère) → ser." },
      { type: "fill", text: "El libro ___ (estar) sobre la mesa.", answers: ["está"], why: "Lieu d'un objet précis (el libro) : está." },
      { type: "speak", es: "Tengo sed y tengo frío.", fr: "J'ai soif et j'ai froid." },
      { type: "fill", text: "¿Cuántos años ___ (tener) tú?", answers: ["tienes"], why: "âge : tener, tú → tienes." },
      { type: "mcq", q: "« Je suis fatigué » =", opts: ["Soy cansado", "Tengo cansado", "Hay cansado", "Estoy cansado"], correct: 3, why: "État passager : estoy." },
      { type: "fill", text: "—¿Hay un banco aquí? —Sí, el banco ___ (estar) allí.", answers: ["está"], why: "El banco = défini → está." }
    ]
  }, {
    id: "reflejo-4", title: "Réflexe 4 : gustar et me/te/le (à l'envers)",
    why: "En français : « <b>j'</b>aime le café ». En espagnol : « le café <b>me</b> plaît » → <b>me gusta el café</b>. Ce qui plaît est le <b>sujet</b> (donc il commande le verbe : gusta / gustan), et la personne est un pronom (<b>me, te, le, nos, os, les</b>). C'est pour ça qu'on ne dit pas « yo gusto ».",
    rule: "1. Pronom : <b>me, te, le, nos, os, les</b> (qui aime).<br>2. Le verbe s'accorde avec <b>ce qui plaît</b> : singulier ou infinitif → <b>gusta</b> ; pluriel → <b>gustan</b>.<br>3. Pour préciser ou insister : <b>a mí me</b>, <b>a ti te</b>, <b>a Pedro le</b>, <b>a nosotros nos</b>, <b>a mis padres les</b>.<br>4. D'accord : <b>a mí también</b> (moi aussi) / <b>a mí tampoco</b> (moi non plus).<br>5. Même fonctionnement : <b>encantar, interesar</b>.",
    table: { caption: "gustar : qui aime → quel pronom", headers: ["Qui aime ?", "Pronom", "Exemple"], rows: [
      ["a mí", "<b>me</b>", "A mí <b>me</b> gusta el café."],
      ["a ti", "<b>te</b>", "A ti <b>te</b> gustan los perros."],
      ["a él/ella/usted, a Pedro", "<b>le</b>", "A Pedro <b>le</b> gusta bailar."],
      ["a nosotros", "<b>nos</b>", "A nosotros <b>nos</b> gusta viajar."],
      ["a vosotros", "<b>os</b>", "A vosotros <b>os</b> gustan las playas."],
      ["a ellos/ustedes, a mis padres", "<b>les</b>", "A mis padres <b>les</b> gusta cocinar."]] },
    examples: [
      { es: "Me gusta el café.", fr: "J'aime le café." },
      { es: "Me gustan los gatos.", fr: "J'aime les chats.", note: "pluriel → gustan" },
      { es: "¿Te gusta bailar?", fr: "Tu aimes danser ?", note: "infinitif → gusta" },
      { es: "A ella no le gusta el pescado.", fr: "Elle n'aime pas le poisson." },
      { es: "—Me gusta el chocolate. —A mí también.", fr: "—J'aime le chocolat. —Moi aussi." },
      { es: "—No me gusta la leche. —A mí tampoco.", fr: "—Je n'aime pas le lait. —Moi non plus." }
    ],
    pitfalls: [
      { wrong: "Yo gusto el café.", right: "Me gusta el café.", why: "Le sujet de gustar est ce qui plaît (el café), pas la personne." },
      { wrong: "Me gusta los libros.", right: "Me gustan los libros.", why: "Les libros est pluriel : gustan." },
      { wrong: "Me gustas el café.", right: "Me gusta el café.", why: "gustas veut dire « tu me plais ». Pour une chose, c'est gusta." },
      { wrong: "A Pedro lo gusta bailar.", right: "A Pedro le gusta bailar.", why: "C'est « à Pedro » (complément indirect) : le, pas lo." }
    ],
    exercises: [
      { type: "mcq", q: "« J'aime le café » =", opts: ["Yo gusto el café", "Me gusta el café", "Me gusto el café"], correct: 1, why: "Le café me plaît : me gusta el café." },
      { type: "fill", text: "A mí ___ gusta el té.", answers: ["me"], why: "a mí → me." },
      { type: "fill", text: "A ti ___ gustan los perros.", answers: ["te"], why: "a ti → te." },
      { type: "mcq", q: "Quelle phrase est correcte ?", opts: ["Me gusta los libros", "Me gustas los libros", "Me gustan los libros"], correct: 2, why: "Los libros est pluriel : gustan." },
      { type: "fill", text: "A Pedro ___ gusta bailar.", answers: ["le"], why: "a él / a Pedro → le." },
      { type: "speak", es: "Me gusta mucho el café.", fr: "J'aime beaucoup le café." },
      { type: "fill", text: "Me ___ (gustar) las películas.", answers: ["gustan"], why: "Las películas = pluriel : gustan." },
      { type: "fill", text: "A nosotros ___ gusta viajar.", answers: ["nos"], why: "a nosotros → nos." },
      { type: "mcq", q: "—No me gusta el pescado. —A mí ___.", opts: ["también", "tampoco", "sí"], correct: 1, why: "Phrase négative : « moi non plus » = a mí tampoco." },
      { type: "fill", text: "A mis padres ___ gusta cocinar.", answers: ["les"], why: "a mis padres (= ellos) → les." },
      { type: "speak", es: "¿Te gusta el fútbol?", fr: "Tu aimes le football ?" },
      { type: "mcq", q: "« Elle aime les chats » =", opts: ["Le gustan los gatos", "Le gusta los gatos", "Ella gusta los gatos"], correct: 0, why: "Pronom le + gustan (los gatos est pluriel)." },
      { type: "fill", text: "A ella no le ___ (gustar) el café.", answers: ["gusta"], why: "El café est singulier : gusta." },
      { type: "fill", text: "—Me gusta el chocolate. —A mí ___.", answers: ["también"], why: "Phrase positive : « moi aussi » = a mí también." }
    ]
  }, {
    id: "reflejo-5", title: "Réflexe 5 : choisir le bon temps (avant-goût A2)",
    why: "Attention : cette leçon <b>anticipe l'A2</b> (passés et futur). Le but n'est pas encore de tout maîtriser, mais de prendre le bon réflexe : <b>le mot de temps te dit le temps du verbe</b>. Avant de conjuguer, repère le marqueur (ayer, mañana, de niño…), puis choisis. Si tu sais choisir, tu ne te trompes plus de temps. (Dans cette leçon, le perfecto suit l'usage d'Espagne.)",
    rule: "1. <b>Marqueur de temps → temps</b> : lis-le avant de conjuguer.<br>2. <b>Ahora, siempre, todos los días</b> → présent.<br>3. <b>Ahora mismo</b> → estoy + gérondif.<br>4. <b>Mañana, esta noche</b> → voy a + infinitif.<br>5. <b>Ayer, anoche, el año pasado</b> → indefinido (action finie).<br>6. <b>Ya, todavía no, esta semana</b> → perfecto (he + participe).<br>7. <b>De niño, antes</b> → imperfecto (habitude passée).<br>8. <b>El año que viene, algún día</b> → futuro.",
    timeline: "de niño (imperfecto) ── ayer (indefinido) ── ya / todavía no (perfecto) ── ahora (presente / estoy + gerundio) ── mañana (voy a) ── el año que viene (futuro)",
    table: { caption: "Marqueur de temps → temps", headers: ["Marqueur", "Temps", "Exemple (comer)"], rows: [
      ["ahora, todos los días, siempre", "présent", "Como a las dos."],
      ["ahora mismo, en este momento", "estoy + gérondif", "Estoy comiendo."],
      ["mañana, esta noche, el sábado", "voy a + infinitif", "Voy a comer."],
      ["ayer, anoche, el año pasado", "indefinido", "Comí paella."],
      ["ya, todavía no, esta semana", "perfecto (he + participe)", "Todavía no he comido."],
      ["de niño, antes, cuando era joven", "imperfecto", "Comía mucho."],
      ["el año que viene, algún día", "futuro", "Comeré allí."]] },
    examples: [
      { es: "Todos los días desayuno a las ocho.", fr: "Tous les jours je prends le petit-déjeuner à huit heures." },
      { es: "Ahora mismo estoy trabajando.", fr: "En ce moment même je suis en train de travailler." },
      { es: "Mañana voy a salir con amigos.", fr: "Demain je vais sortir avec des amis." },
      { es: "Ayer comí paella.", fr: "Hier j'ai mangé de la paella." },
      { es: "Todavía no he comido.", fr: "Je n'ai pas encore mangé." },
      { es: "De niño jugaba en la calle.", fr: "Enfant, je jouais dans la rue." },
      { es: "El año que viene viajaré a Perú.", fr: "L'année prochaine, je voyagerai au Pérou." }
    ],
    pitfalls: [
      { wrong: "Ayer como paella.", right: "Ayer comí paella.", why: "Ayer = passé fini → indefinido. Le présent ne convient pas." },
      { wrong: "Mañana comí en casa.", right: "Mañana voy a comer en casa.", why: "Mañana = futur : voy a + infinitif, pas un passé." },
      { wrong: "De niño jugué en la calle.", right: "De niño jugaba en la calle.", why: "« De niño » décrit une habitude passée : imperfecto (jugaba)." }
    ],
    exercises: [
      { type: "mcq", q: "« Ayer » appelle quel temps ?", opts: ["Como", "Comí", "Comeré"], correct: 1, why: "Ayer = action passée terminée → indefinido (comí)." },
      { type: "mcq", q: "« Mañana » appelle quel temps ?", opts: ["Voy a comer", "He comido", "Comía"], correct: 0, why: "Mañana = futur proche : voy a + infinitif." },
      { type: "fill", text: "Ayer yo ___ (comer) paella.", answers: ["comí"], why: "ayer → indefinido ; comer, yo : comí." },
      { type: "fill", text: "Ahora mismo ella está ___ (leer).", answers: ["leyendo"], why: "ahora mismo → estar + gérondif ; leer → leyendo (le-yendo, i entre voyelles devient y)." },
      { type: "fill", text: "Todos los días nosotros ___ (desayunar) a las ocho.", answers: ["desayunamos"], why: "todos los días → présent." },
      { type: "speak", es: "Ayer comí paella.", fr: "Hier j'ai mangé de la paella." },
      { type: "mcq", q: "« De niño » appelle quel temps ?", opts: ["comí", "comeré", "comía"], correct: 2, why: "De niño = habitude passée → imperfecto." },
      { type: "fill", text: "De niño yo ___ (jugar) en la calle.", answers: ["jugaba"], why: "De niño → imperfecto ; jugar, yo : jugaba." },
      { type: "fill", text: "Todavía no he ___ (comer).", answers: ["comido"], why: "todavía no → perfecto : he + comido." },
      { type: "mcq", q: "« El año que viene » appelle quel temps ?", opts: ["viajé", "viajaba", "he viajado", "viajaré"], correct: 3, why: "El año que viene = futur lointain : viajaré." },
      { type: "fill", text: "El año pasado nosotros ___ (viajar) a Perú.", answers: ["viajamos"], why: "el año pasado → indefinido ; viajar, nosotros : viajamos." },
      { type: "speak", es: "El año que viene viajaré a Perú.", fr: "L'année prochaine je voyagerai au Pérou." },
      { type: "fill", text: "Mañana nosotros ___ (ir) a comer en casa.", answers: ["vamos"], why: "mañana → voy a + infinitif ; nosotros : vamos a comer." },
      { type: "fill", text: "Anoche tú ___ (salir) con amigos.", answers: ["saliste"], why: "anoche → indefinido ; salir, tú : saliste." }
    ]
  }]
});

ATELIER.chapters.push({
  id: "pieges-informel", group: "pieges", icon: "💬", title: "Le langage informel", level: "A2",
  intro: "Le manuel dit « ¿Cómo está usted? », la rue dit « ¿Qué tal? ». Ce chapitre t'apprend ce qu'on entend <b>vraiment</b> : mots de remplissage, réactions, argot courant, et surtout <b>quand</b> les employer, car la même phrase peut être parfaite entre amis et déplacée avec un chef.",
  lessons: [{
    id: "informel-salutations", title: "Salutations et mots de remplissage",
    why: "Dans la vraie vie, personne ne dit « Buenos días, ¿cómo se encuentra usted? » à un ami. On dit <b>¿Qué tal?</b>, et on parle avec des petits mots qui ne « veulent » presque rien dire mais qui rendent la conversation naturelle : comme « ben », « bon », « du coup », « genre » en français. <b>Quand les employer :</b> entre amis, collègues du même âge, famille. <b>Risque :</b> avec un chef ou un client, <b>¿Qué pasa?</b> peut sonner comme « qu'est-ce que tu veux ? » et <b>en plan</b> fait très « jeune » en entretien. Dans le doute : <b>¿Qué tal?</b> et <b>vale</b> passent partout.",
    rule: "1. Salut : <b>¿Qué tal?</b> (neutre, sûr) · <b>¿Qué pasa?</b> (amis, ton léger).<br>2. Accord : <b>vale</b> (Espagne) · <b>bueno</b> · <b>¡venga!</b> (« allez, ok »).<br>3. Remplissage : <b>pues</b> (ben…), <b>bueno</b> (bon…), <b>o sea</b> (c'est-à-dire, du coup), <b>en plan</b> (genre), <b>¿sabes?</b> (tu vois ?).<br>4. Réflexe : un mot de remplissage se place <b>au début ou au milieu</b>, jamais seul comme réponse à une vraie question.",
    table: { caption: "Les 10 petits mots de la vie réelle", headers: ["Expression", "Sens", "Quand / risque"], rows: [
      ["<b>¿Qué tal?</b>", "Comment ça va ?", "Passe-partout, même avec un chef"],
      ["<b>¿Qué pasa?</b>", "Salut, ça va ? / Que se passe-t-il ?", "Entre amis ; ton sec = « qu'est-ce qui ne va pas ? »"],
      ["<b>vale</b>", "d'accord, OK", "Espagne, tous registres sauf très formel"],
      ["<b>bueno</b>", "bon, eh bien", "ouvre, hésite ou conclut"],
      ["<b>pues</b>", "ben, alors", "remplissage ; ≠ « puis »"],
      ["<b>¿sabes?</b>", "tu vois ?", "vérifie que l'autre suit (usted : ¿sabe?)"],
      ["<b>o sea</b>", "c'est-à-dire, du coup", "reformule ou conclut"],
      ["<b>en plan</b>", "genre", "jeunes, très oral ; évite à l'entretien"],
      ["<b>¿vale?</b>", "ça marche ? d'accord ?", "fin de proposition"],
      ["<b>¡venga!</b>", "allez ! / ok / salut", "encourage, accepte ou clôt l'échange"]] },
    examples: [
      { es: "Hola, ¿qué tal? ¿Todo bien?", fr: "Salut, ça va ? Tout va bien ?" },
      { es: "—¿Quedamos mañana? —Vale, ¿a qué hora?", fr: "On se voit demain ? — D'accord, à quelle heure ?", note: "En Colombie, on entendra plutôt « listo » ou « de una » pour dire d'accord." },
      { es: "Bueno, pues, me voy ya.", fr: "Bon, ben, j'y vais." },
      { es: "Estoy cansada, o sea, necesito dormir.", fr: "Je suis fatiguée, du coup j'ai besoin de dormir." },
      { es: "Es muy tarde, ¿sabes? Mejor mañana.", fr: "Il est très tard, tu vois ? Mieux vaut demain." },
      { es: "Nos vemos a las ocho, ¿vale? —¡Venga!", fr: "On se voit à huit heures, d'accord ? — Allez, ça marche !" }
    ],
    pitfalls: [
      { wrong: "Pues = puis (ensuite) : « Pues voy al banco. » pour dire « puis je vais à la banque »", right: "Luego voy al banco.", why: "<b>pues</b> est un remplissage (« ben… »). Pour « ensuite » on dit <b>luego</b> ou <b>después</b>." },
      { wrong: "—¿Qué pasa? pour accueillir un client", right: "—Buenos días, ¿en qué puedo ayudarle?", why: "<b>¿Qué pasa?</b> peut sonner comme « qu'est-ce qui se passe ? » voire agressif. Réserve-le aux amis." },
      { wrong: "En plan, tengo cinco años de experiencia. (entretien d'embauche)", right: "Tengo cinco años de experiencia.", why: "<b>en plan</b> est un tic de langage de jeunes : en entretien, il fait peu sérieux." }
    ],
    exercises: [
      { type: "mcq", q: "Un ami te croise et te lance « ¿Qué tal? ». Quelle réponse est naturelle ?", opts: ["Bien, ¿y tú?", "Me llamo Ana.", "Son las tres."], correct: 0, why: "<b>¿Qué tal?</b> = « comment ça va ? ». On répond : « Bien, ¿y tú? »." },
      { type: "mcq", q: "Dans « —¿Quedamos a las ocho? —Vale. », <b>vale</b> veut dire…", opts: ["il vaut huit euros", "d'accord", "vite"], correct: 1, why: "En Espagne, <b>vale</b> = « d'accord, OK »." },
      { type: "fill", text: "—¿Nos vemos a las ocho? —___, perfecto. (= d'accord)", answers: ["vale", "venga", "bueno", "de acuerdo"], why: "<b>Vale</b> (ou <b>venga</b>, <b>bueno</b>) pour accepter." },
      { type: "mcq", q: "Dans « Pues, no sé… », <b>pues</b> sert à…", opts: ["dire « ensuite »", "dire « car »", "hésiter, comme « ben… » en français"], correct: 2, why: "<b>pues</b> est un remplissage : il laisse le temps de réfléchir, comme « ben… »." },
      { type: "fill", text: "Hola, ¿qué ___? —Muy bien, gracias.", answers: ["tal"], why: "La salutation passe-partout est <b>¿Qué tal?</b>" },
      { type: "speak", es: "¿Qué tal? ¿Todo bien?", fr: "Ça va ? Tout va bien ?" },
      { type: "mcq", q: "Avec ton chef, le matin, quelle salutation est la plus sûre ?", opts: ["¡Qué pasa, tío!", "Buenos días, ¿cómo está?", "¡Eh, venga!"], correct: 1, why: "Avec un chef : salutation neutre et <b>usted</b> (¿cómo está?). <b>¿Qué pasa, tío?</b> est réservé aux amis." },
      { type: "fill", text: "Estoy muy cansado, ___ que me voy a casa. (= du coup, c'est-à-dire)", answers: ["o sea"], why: "<b>o sea que…</b> introduit une conséquence : « du coup je rentre »." },
      { type: "speak", es: "Vale, nos vemos luego. ¡Venga!", fr: "D'accord, on se voit plus tard. Allez, salut !" },
      { type: "mcq", q: "À la fin d'une phrase, <b>¿sabes?</b> sert à…", opts: ["vérifier que l'autre suit, comme « tu vois ? »", "demander un renseignement précis", "dire au revoir"], correct: 0, why: "C'est un mot d'appui oral : « Es tarde, ¿sabes? » = « Il est tard, tu vois ? »." },
      { type: "fill", text: "—¿Vienes a cenar? —___, no sé… (= ben, euh)", answers: ["pues", "bueno"], why: "<b>Pues</b> ou <b>bueno</b> permettent d'hésiter avant de répondre." },
      { type: "mcq", q: "« Me dijo en plan: “no voy”. » Ici, <b>en plan</b> sert à…", opts: ["dire « en projet »", "donner le plan de la ville", "introduire une citation approximative, comme « genre »"], correct: 2, why: "<b>en plan</b> ≈ « genre » : il introduit ce qu'on a dit ou ressenti, sans être précis." },
      { type: "speak", es: "Bueno, pues, ¿nos vemos mañana?", fr: "Bon, ben, on se voit demain ?" }
    ]
  }, {
    id: "informel-reactions", title: "Réactions et exclamations",
    why: "En espagnol, on réagit avec tout le corps : une exclamation courte dit « je suis surpris », « je suis déçu » ou « je refuse », sans phrase complète. Elles s'appuient souvent sur la structure <b>¡Qué + adjectif/nom!</b>, <b>sans verbe</b> (¡Qué bien! et non « ¡Qué es bien! »). <b>Quand les employer :</b> à l'oral, entre amis, en réaction à une nouvelle. <b>Risque :</b> le <b>ton</b> compte autant que le mot. <b>¡Ni de broma!</b> ou <b>¡Qué rollo!</b> dits à un chef sonnent insolents ; <b>¡Qué bien!</b>, <b>¡Vaya!</b> et <b>¡Madre mía!</b> sont sûrs avec tout le monde.",
    rule: "1. Joie : <b>¡Qué bien!</b> (sûr) · <b>¡Qué guay!</b> (amis).<br>2. Surprise : <b>¡Anda!</b> (tiens !) · <b>¡Vaya!</b> (ben dis donc !) · <b>¡Madre mía!</b> (oh là là) · <b>¡Qué fuerte!</b> (c'est dingue).<br>3. Refus / ennui : <b>¡Ni de broma!</b> (pas question) · <b>¡Qué rollo!</b> (quelle barbe).<br>4. Espoir : <b>¡Ojalá!</b> (pourvu que !). Seul, ou avec <b>¡Ojalá que sí / que no!</b> ; avec un verbe, il demande le subjonctif (vu plus tard).",
    table: { caption: "Réagir comme un Espagnol", headers: ["Réaction", "Sens", "Ton / risque"], rows: [
      ["<b>¡Qué bien!</b>", "Super !", "neutre, sûr avec tous"],
      ["<b>¡Qué guay!</b>", "Trop bien !", "familier, entre amis"],
      ["<b>¡Anda!</b>", "Tiens ! / Ah bon ?", "surprise, oral"],
      ["<b>¡Vaya!</b>", "Ben dis donc ! / Zut !", "surprise ou déception, sûr"],
      ["<b>¡Madre mía!</b>", "Oh là là ! / Mon Dieu !", "surprise forte, sûr"],
      ["<b>¡Ni de broma!</b>", "Pas question !", "refus net ; impoli avec un chef"],
      ["<b>¡Qué rollo!</b>", "Quelle barbe !", "familier, entre amis"],
      ["<b>¡Qué fuerte!</b>", "C'est dingue / c'est dur", "choc positif ou négatif, jeunes"],
      ["<b>¡Ojalá!</b>", "Pourvu que ! Si seulement !", "espoir, tous registres"]] },
    examples: [
      { es: "¡Qué bien! Mañana no trabajo.", fr: "Super ! Demain je ne travaille pas." },
      { es: "¡Qué guay! Vamos a la playa.", fr: "Trop bien ! On va à la plage." },
      { es: "¡Anda! No sabía que vivías aquí.", fr: "Tiens ! Je ne savais pas que tu habitais ici." },
      { es: "¡Vaya! No hay pan.", fr: "Zut ! Il n'y a plus de pain." },
      { es: "¡Madre mía, qué calor!", fr: "Oh là là, quelle chaleur !" },
      { es: "—¿Trabajas el domingo? —¡Ni de broma!", fr: "Tu travailles dimanche ? — Pas question !" },
      { es: "¡Qué rollo! Otra reunión.", fr: "Quelle barbe ! Encore une réunion." },
      { es: "—¿Va a llover mañana? —¡Ojalá no!", fr: "Il va pleuvoir demain ? — Pourvu que non !" }
    ],
    pitfalls: [
      { wrong: "¡Qué es bonito!", right: "¡Qué bonito!", why: "Dans <b>¡Qué + adjectif!</b>, il n'y a <b>pas de verbe</b>. « ¡Qué bonita casa! » = « Quelle jolie maison ! »." },
      { wrong: "¡Ojalá! He perdido el tren. (pour dire « dommage »)", right: "¡Vaya! He perdido el tren.", why: "<b>¡Ojalá!</b> exprime un <b>espoir</b> (pourvu que…), pas la déception. Pour « zut / dommage » : <b>¡Vaya!</b> ou <b>¡Qué pena!</b>" },
      { wrong: "Jefe, ¡qué rollo la reunión!", right: "La reunión es un poco larga, ¿no?", why: "<b>¡Qué rollo!</b> est familier : avec un chef, reste neutre et poli." }
    ],
    exercises: [
      { type: "mcq", q: "Tu apprends une bonne nouvelle. Quelle réaction est sûre avec tout le monde ?", opts: ["¡Qué bien!", "¡Qué rollo!", "¡Ni de broma!"], correct: 0, why: "<b>¡Qué bien!</b> est positif et neutre." },
      { type: "mcq", q: "« ¡Ni de broma! » veut dire…", opts: ["sans plaisanter", "pas question", "peut-être"], correct: 1, why: "<b>ni de broma</b> = « même pas en rêve, pas question »." },
      { type: "fill", text: "¡Qué ___! Mañana no hay clase. (= super)", answers: ["bien", "guay"], why: "<b>¡Qué bien!</b> ou <b>¡Qué guay!</b>" },
      { type: "mcq", q: "Tu rates le bus. Quelle réaction est la plus naturelle ?", opts: ["¡Qué guay!", "¡Ojalá!", "¡Vaya!"], correct: 2, why: "<b>¡Vaya!</b> exprime la contrariété (« zut »). <b>¡Qué guay!</b> serait de la joie." },
      { type: "speak", es: "¡Madre mía, qué calor!", fr: "Oh là là, quelle chaleur !" },
      { type: "fill", text: "—¿Vas a trabajar el domingo? —¡___ de broma!", answers: ["ni"], why: "<b>¡Ni de broma!</b> = pas question." },
      { type: "mcq", q: "Un ami te raconte une histoire incroyable : « ¡Qué fuerte! » veut dire…", opts: ["c'est puissant", "c'est dingue", "c'est ennuyeux"], correct: 1, why: "<b>¡Qué fuerte!</b> = « c'est dingue / c'est dur » : choc, bon ou mauvais." },
      { type: "fill", text: "—¿Va a llover mañana? —¡___ no!", answers: ["ojalá"], why: "<b>¡Ojalá no!</b> = « pourvu que non »." },
      { type: "speak", es: "¡Anda! No sabía que vivías aquí.", fr: "Tiens ! Je ne savais pas que tu habitais ici." },
      { type: "mcq", q: "Quelle réaction est trop familière pour répondre à ton chef ?", opts: ["¡Vaya!", "¡Madre mía!", "¡Qué rollo!"], correct: 2, why: "<b>¡Qué rollo!</b> est familier. <b>¡Vaya!</b> et <b>¡Madre mía!</b> passent partout." },
      { type: "fill", text: "¡Qué ___! Otra reunión de tres horas. (= quelle barbe)", answers: ["rollo"], why: "<b>¡Qué rollo!</b> = quelle barbe, quel ennui." },
      { type: "speak", es: "¡Qué guay! Vamos a la playa.", fr: "Trop bien ! On va à la plage." },
      { type: "mcq", q: "Comment dit-on « Quelle jolie maison ! » ?", opts: ["¡Qué bonita casa!", "¡Qué es bonita casa!", "¡Qué casa es bonita!"], correct: 0, why: "<b>¡Qué + adjectif + nom!</b>, sans verbe : ¡Qué bonita casa!" }
    ]
  }, {
    id: "informel-argot", title: "L'argot courant d'Espagne",
    why: "Dans les séries, au bar, dans les messages, tu entendras <b>tío, mola, guay, flipar, currar</b> tous les jours. Ce n'est pas du « mauvais » espagnol : c'est de l'espagnol <b>vivant</b>. <b>Quand les employer :</b> entre amis et collègues proches, à l'oral et dans les messages. <b>Risque :</b> avec un chef, un client, un professeur ou à l'écrit officiel, repasse en version neutre (<b>trabajar</b>, <b>dinero</b>, <b>muy bien</b>). Attention : ce vocabulaire est celui d'<b>Espagne</b> ; en Amérique latine, les mots changent (voir les notes sur la Colombie).",
    rule: "1. Personnes : <b>tío / tía</b> (mec, nana ; aussi « oncle / tante » !), <b>chaval / chavala</b> (jeune).<br>2. « Cool » : <b>guay</b> (adjectif, invariable), <b>molar</b> (verbe, se construit comme <i>gustar</i> : <b>me mola</b> + singulier, <b>me molan</b> + pluriel), <b>¡qué pasada!</b> (c'est dingue).<br>3. Travail et argent : <b>currar</b> (bosser), <b>el curro</b> (le boulot), <b>la pasta</b> (le fric, aussi « les pâtes »).<br>4. Autres : <b>flipar</b> (halluciner), <b>estar hecho polvo</b> (être crevé), <b>un montón (de)</b> (beaucoup), <b>quedar (con alguien)</b> (se donner rendez-vous).",
    table: { caption: "Argot courant d'Espagne", headers: ["Mot", "Sens", "Exemple"], rows: [
      ["<b>tío / tía</b>", "mec, nana, pote", "Oye, tío, ¿qué hora es?"],
      ["<b>chaval / chavala</b>", "gamin(e), jeune", "Es un chaval muy majo."],
      ["<b>guay</b>", "cool, super", "Tu casa es muy guay."],
      ["<b>molar</b>", "plaire, être cool", "Me mola esta canción."],
      ["<b>flipar</b>", "halluciner, être bluffé", "Flipo con este sitio."],
      ["<b>currar / el curro</b>", "bosser / le boulot", "Curro mucho esta semana."],
      ["<b>la pasta</b>", "le fric", "No tengo pasta hoy."],
      ["<b>quedar</b>", "se donner rendez-vous", "Quedamos a las ocho."],
      ["<b>estar hecho polvo</b>", "être crevé", "Estoy hecho polvo."],
      ["<b>un montón</b>", "beaucoup", "Tengo un montón de trabajo."],
      ["<b>¡qué pasada!</b>", "c'est dingue ! (en bien)", "¡Qué pasada de playa!"]] },
    examples: [
      { es: "Oye, tío, ¿me prestas diez euros?", fr: "Dis, mec, tu me prêtes dix euros ?", note: "En Colombie : « parce » ou « parcero » (très courant entre amis)." },
      { es: "Es un chaval muy majo.", fr: "C'est un gamin très sympa.", note: "En Colombie : « pelado / pelada » (jeune)." },
      { es: "Me mola tu camisa. Es muy guay.", fr: "J'aime ta chemise. Elle est super.", note: "En Colombie : « chévere » (cool, très courant et sûr). « Qué chimba » = très familier, à éviter sauf entre amis proches." },
      { es: "Esta semana curro un montón.", fr: "Cette semaine je bosse énormément.", note: "En Colombie : « camellar » (travailler) et « el camello » (le boulot)." },
      { es: "No tengo pasta para el cine.", fr: "Je n'ai pas de fric pour le cinéma.", note: "En Colombie et en Amérique latine : « plata » (argent)." },
      { es: "Quedamos a las ocho en la plaza.", fr: "On se retrouve à huit heures sur la place.", note: "« quedar » est compris partout ; en Colombie on dit aussi « parchar » pour traîner entre amis." },
      { es: "Estoy hecho polvo: he currado diez horas.", fr: "Je suis crevé : j'ai bossé dix heures.", note: "« hecho polvo » se comprend partout ; en Colombie aussi « estar molido »." },
      { es: "¡Qué pasada! Flipo con este sitio.", fr: "C'est dingue ! Je suis bluffé par cet endroit.", note: "En Colombie : « qué bacano » (positif). « Qué chimba » = très familier, à signaler : réservé aux amis proches." }
    ],
    pitfalls: [
      { wrong: "Me mola las películas.", right: "Me molan las películas.", why: "<b>molar</b> se construit comme <i>gustar</i> : le verbe s'accorde avec ce qui plaît (películas = pluriel → molan)." },
      { wrong: "Me quedo con Ana a las ocho. (pour un rendez-vous)", right: "Quedo con Ana a las ocho.", why: "<b>quedar con alguien</b> = donner rendez-vous. <b>quedarse</b> = rester (« Me quedo en casa »)." },
      { wrong: "Oye, tío, ¿me firmas esto? (à ton chef)", right: "Perdone, ¿me puede firmar esto?", why: "<b>tío</b> est réservé aux amis. Avec un chef : <b>usted</b> et formule polie." },
      { wrong: "Mañana curro desde casa. (e-mail aux RH)", right: "Mañana trabajo desde casa.", why: "<b>currar</b> est familier : à l'écrit professionnel, utilise <b>trabajar</b>." }
    ],
    exercises: [
      { type: "mcq", q: "« Estoy hecho polvo » veut dire…", opts: ["Je suis en poussière", "Je suis crevé", "Je suis en colère"], correct: 1, why: "<b>estar hecho polvo</b> = être épuisé." },
      { type: "fill", text: "Me ___ (molar) tus zapatillas. (= elles me plaisent)", answers: ["molan"], why: "<b>molar</b> s'accorde comme <i>gustar</i> : zapatillas (pluriel) → <b>molan</b>." },
      { type: "mcq", q: "« Curro mucho esta semana » =", opts: ["Je bosse beaucoup cette semaine", "Je cours beaucoup cette semaine", "Je parle beaucoup cette semaine"], correct: 0, why: "<b>currar</b> = bosser (rien à voir avec « courir »)." },
      { type: "fill", text: "Nosotros ___ (quedar) a las ocho en la plaza.", answers: ["quedamos"], why: "<b>quedar</b> (-ar), nosotros → <b>quedamos</b> : on se donne rendez-vous." },
      { type: "speak", es: "¿Quedamos mañana a las ocho?", fr: "On se retrouve demain à huit heures ?" },
      { type: "mcq", q: "Quelle phrase est adaptée à un échange avec ton chef ?", opts: ["Mañana curro hasta tarde, tío.", "Mañana trabajo hasta tarde.", "Mañana me toca currar un montón."], correct: 1, why: "Avec un chef : <b>trabajar</b>, sans <b>tío</b> ni <b>currar</b>." },
      { type: "fill", text: "No tengo ___ para el cine. (= fric)", answers: ["pasta"], why: "<b>la pasta</b> = l'argent (familier). Neutre : <b>dinero</b>." },
      { type: "mcq", q: "« Un montón de gente » =", opts: ["Beaucoup de monde", "Une montagne de gens", "Peu de monde"], correct: 0, why: "<b>un montón de</b> = « un tas de, beaucoup de »." },
      { type: "speak", es: "¡Qué pasada! Me mola un montón.", fr: "C'est dingue ! J'adore." },
      { type: "fill", text: "Estoy ___ polvo después de tanto trabajo. (= crevé)", answers: ["hecho", "hecha"], why: "<b>estar hecho polvo</b> : « hecho » s'accorde (hecha au féminin)." },
      { type: "mcq", q: "En Colombie, quel mot dit couramment « cool, super » ?", opts: ["pasta", "parce", "chévere"], correct: 2, why: "<b>chévere</b> = cool en Colombie. <b>parce</b> = mec, <b>pasta</b> = fric (Espagne)." },
      { type: "fill", text: "Es un ___ muy majo. (= gamin, jeune)", answers: ["chaval"], why: "<b>chaval</b> = garçon, jeune (chavala au féminin)." },
      { type: "speak", es: "Estoy hecho polvo, he currado un montón.", fr: "Je suis crevé, j'ai énormément bossé." },
      { type: "mcq", q: "« Qué chimba » (Colombie)…", opts: ["veut dire « quelle tristesse »", "est la formule polie pour un client", "est très familier : à réserver à des amis proches"], correct: 2, why: "<b>qué chimba</b> est très familier et peut choquer : entre amis proches seulement." }
    ]
  }, {
    id: "informel-registre", title: "Tú ou usted, WhatsApp, niveaux de langue",
    why: "Une même idée se dit de 3 façons : <b>formelle</b> (usted, e-mail pro), <b>courante</b> (tú, quotidien), <b>familière</b> (amis, messages). Le choix dépend de <b>qui</b> tu parles. <b>Risque principal :</b> être <b>trop familier</b> avec un chef, un client ou une personne âgée passe pour du manque de respect ; être <b>trop formel</b> avec des amis crée de la distance, mais ça ne choque jamais. Dans le doute : commence en <b>usted</b> et laisse l'autre proposer le « tú ».",
    rule: "1. <b>usted</b> : chef, client, inconnu âgé, administration. Il se conjugue comme <b>él/ella</b> : ¿Usted habla inglés?<br>2. <b>tú</b> : amis, famille, collègues du même âge. Plus facile et rapide en Espagne ; en Colombie, <b>usted</b> s'emploie même en famille ou entre amis proches.<br>3. WhatsApp : <b>xq</b> = porque / por qué · <b>tb</b> = también · <b>q</b> = que / qué · <b>finde</b> = fin de semana · <b>cumple</b> = cumpleaños · <b>tkm</b> = te quiero mucho · <b>jaja</b> = haha · <b>xfa</b> = por favor.<br>4. Les abréviations restent pour les <b>messages entre proches</b>, jamais dans un e-mail professionnel.",
    table: { caption: "La même idée, 3 niveaux", headers: ["Idée", "Formel", "Courant", "Familier"], rows: [
      ["Demander de l'aide", "¿Podría ayudarme, por favor?", "¿Me ayudas, por favor?", "¿Me echas una mano?"],
      ["Remercier", "Le agradezco su ayuda.", "Gracias por tu ayuda.", "¡Mil gracias, eres un crack!"],
      ["Être fatigué", "Me encuentro muy cansado.", "Estoy muy cansado.", "Estoy hecho polvo."],
      ["Dire au revoir", "Hasta pronto, buenas tardes.", "Hasta luego.", "¡Venga, nos vemos!"]] },
    examples: [
      { es: "¿Cómo está usted? ¿Desea un café?", fr: "Comment allez-vous ? Désirez-vous un café ?", note: "usted : client, chef, personne âgée" },
      { es: "¿Cómo estás? ¿Quieres un café?", fr: "Comment vas-tu ? Tu veux un café ?", note: "tú : amis, famille, collègue du même âge" },
      { es: "Nos vemos el finde, ¿vale?", fr: "On se voit ce week-end, d'accord ?", note: "WhatsApp : finde = fin de semana" },
      { es: "Es mi cumple, ¿vienes? Jaja.", fr: "C'est mon anniv, tu viens ? Haha.", note: "cumple = cumpleaños ; jaja = rire" },
      { es: "Llego tarde xq hay tráfico. Tb te llamo luego.", fr: "J'arrive en retard parce qu'il y a de la circulation. Je t'appelle aussi plus tard.", note: "xq = porque ; tb = también" },
      { es: "Buenas noches, mamá. Tkm.", fr: "Bonne nuit, maman. Je t'aime fort.", note: "tkm = te quiero mucho" },
      { es: "¿Q tal? ¿Quedamos, xfa?", fr: "Ça va ? On se voit, s'il te plaît ?", note: "q = qué ; xfa = por favor" }
    ],
    pitfalls: [
      { wrong: "¿Usted hablas inglés?", right: "¿Usted habla inglés?", why: "<b>usted</b> se conjugue comme la 3e personne (él/ella), jamais comme tú." },
      { wrong: "Estimado cliente, tb le envío el pedido xq no llegó.", right: "Estimado cliente, también le envío el pedido porque no llegó.", why: "Dans un e-mail professionnel, jamais d'abréviations : écris <b>también</b> et <b>porque</b> en entier." },
      { wrong: "¿Quieres un café, señor? (à un client âgé)", right: "¿Quiere un café, señor?", why: "Avec un client âgé ou un inconnu, on commence par <b>usted</b> (Quiere…, Desea…)." },
      { wrong: "Gracias por todo, tkm. (message au directeur)", right: "Muchas gracias por todo.", why: "<b>tkm</b> est affectif et familier : réservé à la famille et aux très proches." }
    ],
    exercises: [
      { type: "mcq", q: "Un client âgé entre dans ton bureau. Que dis-tu ?", opts: ["¿Qué pasa, tío?", "¿Qué quieres?", "¿En qué puedo ayudarle?"], correct: 2, why: "Avec un client : <b>usted</b> et formule polie (ayudarle)." },
      { type: "fill", text: "Perdone, ¿usted ___ (hablar) inglés?", answers: ["habla"], why: "<b>usted</b> = 3e personne : habla." },
      { type: "mcq", q: "« finde » =", opts: ["la fin", "le week-end", "le final"], correct: 1, why: "<b>finde</b> = <b>fin de semana</b>." },
      { type: "fill", text: "Nos vemos el ___. (WhatsApp : week-end)", answers: ["finde"], why: "<b>finde</b> est l'abréviation courante de fin de semana." },
      { type: "speak", es: "Perdone, ¿puede ayudarme, por favor?", fr: "Excusez-moi, pouvez-vous m'aider, s'il vous plaît ?" },
      { type: "mcq", q: "Quelle version est familière pour dire « Je suis fatigué » ?", opts: ["Estoy hecho polvo.", "Me encuentro muy cansado.", "Estoy muy cansado."], correct: 0, why: "<b>Estoy hecho polvo</b> est familier. « Me encuentro muy cansado » est formel, « Estoy muy cansado » est courant." },
      { type: "fill", text: "¿Cómo ___ (estar) usted?", answers: ["está"], why: "<b>usted</b> se conjugue comme él/ella : está." },
      { type: "mcq", q: "« xq » dans un message veut dire…", opts: ["pocas", "porque / por qué", "excusa"], correct: 1, why: "<b>xq</b> = <b>porque</b> ou <b>por qué</b> (x = por)." },
      { type: "speak", es: "Hola, ¿qué tal? Nos vemos el finde, ¿vale?", fr: "Salut, ça va ? On se voit ce week-end, d'accord ?" },
      { type: "fill", text: "¡Felicidades! Hoy es tu ___. (WhatsApp : anniversaire)", answers: ["cumple", "cumpleaños"], why: "<b>cumple</b> = cumpleaños (abréviation familière)." },
      { type: "mcq", q: "Dans un e-mail à ton chef, tu écris…", opts: ["Tb te lo mando mañana, jaja", "Tb se lo mando mañana.", "También se lo mando mañana."], correct: 2, why: "À un chef : <b>usted</b> (se lo), mot entier (también), pas de « jaja »." },
      { type: "fill", text: "Tú ___ (poder) venir mañana, ¿no?", answers: ["puedes"], why: "<b>poder</b> : tú → <b>puedes</b> (o→ue)." },
      { type: "mcq", q: "« tkm » veut dire…", opts: ["te quiero mucho", "tengo que marcharme", "todo ya me da igual"], correct: 0, why: "<b>tkm</b> = <b>te quiero mucho</b> : message affectueux entre proches." },
      { type: "speak", es: "Mil gracias, ¡eres un crack!", fr: "Mille mercis, tu es un as !" }
    ]
  }]
});

// Fragment généré par gen-decoder.js — ne pas éditer à la main.
ATELIER.decoder = {
  tenses: {
    "presente": "Présent",
    "presente_continuo": "Présent continu (estar + -ando/-iendo) · gérondif",
    "perfecto": "Passé composé (he + participe) · participe passé",
    "indefinido": "Passé simple / passé composé (action terminée)",
    "imperfecto": "Imparfait",
    "ir_a": "Futur proche (ir a + infinitif)",
    "futuro": "Futur",
    "condicional": "Conditionnel",
    "imperativo": "Impératif"
  },
  endings: [
    {"tense":"futuro","group":"all","ending":"é","person":"yo","fr":"futur, 1re personne du singulier (je …)","example":"hablaré = je parlerai"},
    {"tense":"futuro","group":"all","ending":"ás","person":"tú","fr":"futur, 2e personne du singulier (tu …)","example":"hablarás = tu parleras"},
    {"tense":"futuro","group":"all","ending":"á","person":"él/ella/usted","fr":"futur, 3e personne du singulier (il/elle …)","example":"hablará = il/elle parlera"},
    {"tense":"futuro","group":"all","ending":"emos","person":"nosotros","fr":"futur, 1re personne du pluriel (nous …)","example":"hablaremos = nous parlerons"},
    {"tense":"futuro","group":"all","ending":"éis","person":"vosotros","fr":"futur, 2e personne du pluriel (vous …)","example":"hablaréis = vous parlerez"},
    {"tense":"futuro","group":"all","ending":"án","person":"ellos/ellas/ustedes","fr":"futur, 3e personne du pluriel (ils/elles …)","example":"hablarán = ils/elles parleront"},
    {"tense":"condicional","group":"all","ending":"ía","person":"yo / él/ella/usted","fr":"conditionnel, 1re ou 3e personne du singulier (je/il/elle …)","example":"hablaría = je parlerais / il/elle parlerait"},
    {"tense":"condicional","group":"all","ending":"ías","person":"tú","fr":"conditionnel, 2e personne du singulier (tu …)","example":"hablarías = tu parlerais"},
    {"tense":"condicional","group":"all","ending":"íamos","person":"nosotros","fr":"conditionnel, 1re personne du pluriel (nous …)","example":"hablaríamos = nous parlerions"},
    {"tense":"condicional","group":"all","ending":"íais","person":"vosotros","fr":"conditionnel, 2e personne du pluriel (vous …)","example":"hablaríais = vous parleriez"},
    {"tense":"condicional","group":"all","ending":"ían","person":"ellos/ellas/ustedes","fr":"conditionnel, 3e personne du pluriel (ils/elles …)","example":"hablarían = ils/elles parleraient"},
    {"tense":"indefinido","group":"ar","ending":"é","person":"yo","fr":"passé (indefinido), 1re personne du singulier (je …)","example":"hablé = j'ai parlé"},
    {"tense":"indefinido","group":"ar","ending":"aste","person":"tú","fr":"passé (indefinido), 2e personne du singulier (tu …)","example":"hablaste = tu as parlé"},
    {"tense":"indefinido","group":"ar","ending":"ó","person":"él/ella/usted","fr":"passé (indefinido), 3e personne du singulier (il/elle …)","example":"habló = il/elle a parlé"},
    {"tense":"indefinido","group":"ar","ending":"amos","person":"nosotros","fr":"passé (indefinido), 1re personne du pluriel (nous …)","example":"hablamos = nous avons parlé (identique au présent : le contexte décide)"},
    {"tense":"indefinido","group":"ar","ending":"asteis","person":"vosotros","fr":"passé (indefinido), 2e personne du pluriel (vous …)","example":"hablasteis = vous avez parlé"},
    {"tense":"indefinido","group":"ar","ending":"aron","person":"ellos/ellas/ustedes","fr":"passé (indefinido), 3e personne du pluriel (ils/elles …)","example":"hablaron = ils/elles ont parlé"},
    {"tense":"indefinido","group":"er-ir","ending":"í","person":"yo","fr":"passé (indefinido), 1re personne du singulier (je …)","example":"comí = j'ai mangé"},
    {"tense":"indefinido","group":"er-ir","ending":"iste","person":"tú","fr":"passé (indefinido), 2e personne du singulier (tu …)","example":"comiste = tu as mangé"},
    {"tense":"indefinido","group":"er-ir","ending":"ió","person":"él/ella/usted","fr":"passé (indefinido), 3e personne du singulier (il/elle …)","example":"comió = il/elle a mangé"},
    {"tense":"indefinido","group":"er-ir","ending":"imos","person":"nosotros","fr":"passé (indefinido), 1re personne du pluriel (nous …)","example":"comimos = nous avons mangé"},
    {"tense":"indefinido","group":"er-ir","ending":"isteis","person":"vosotros","fr":"passé (indefinido), 2e personne du pluriel (vous …)","example":"comisteis = vous avez mangé"},
    {"tense":"indefinido","group":"er-ir","ending":"ieron","person":"ellos/ellas/ustedes","fr":"passé (indefinido), 3e personne du pluriel (ils/elles …)","example":"comieron = ils/elles ont mangé"},
    {"tense":"imperfecto","group":"ar","ending":"aba","person":"yo / él/ella/usted","fr":"imparfait, 1re ou 3e personne du singulier (je/il/elle …)","example":"hablaba = je parlais / il/elle parlait"},
    {"tense":"imperfecto","group":"ar","ending":"abas","person":"tú","fr":"imparfait, 2e personne du singulier (tu …)","example":"hablabas = tu parlais"},
    {"tense":"imperfecto","group":"ar","ending":"ábamos","person":"nosotros","fr":"imparfait, 1re personne du pluriel (nous …)","example":"hablábamos = nous parlions"},
    {"tense":"imperfecto","group":"ar","ending":"abais","person":"vosotros","fr":"imparfait, 2e personne du pluriel (vous …)","example":"hablabais = vous parliez"},
    {"tense":"imperfecto","group":"ar","ending":"aban","person":"ellos/ellas/ustedes","fr":"imparfait, 3e personne du pluriel (ils/elles …)","example":"hablaban = ils/elles parlaient"},
    {"tense":"imperfecto","group":"er-ir","ending":"ía","person":"yo / él/ella/usted","fr":"imparfait, 1re ou 3e personne du singulier (je/il/elle …)","example":"comía = je mangeais / il/elle mangeait"},
    {"tense":"imperfecto","group":"er-ir","ending":"ías","person":"tú","fr":"imparfait, 2e personne du singulier (tu …)","example":"comías = tu mangeais"},
    {"tense":"imperfecto","group":"er-ir","ending":"íamos","person":"nosotros","fr":"imparfait, 1re personne du pluriel (nous …)","example":"comíamos = nous mangions"},
    {"tense":"imperfecto","group":"er-ir","ending":"íais","person":"vosotros","fr":"imparfait, 2e personne du pluriel (vous …)","example":"comíais = vous mangiez"},
    {"tense":"imperfecto","group":"er-ir","ending":"ían","person":"ellos/ellas/ustedes","fr":"imparfait, 3e personne du pluriel (ils/elles …)","example":"comían = ils/elles mangeaient"},
    {"tense":"presente","group":"all","ending":"o","person":"yo","fr":"présent, 1re personne du singulier (je …)","example":"hablo = je parle"},
    {"tense":"presente","group":"ar","ending":"as","person":"tú","fr":"présent, 2e personne du singulier (tu …)","example":"hablas = tu parles"},
    {"tense":"presente","group":"ar","ending":"a","person":"él/ella/usted","fr":"présent, 3e personne du singulier (il/elle …)","example":"habla = il/elle parle"},
    {"tense":"presente","group":"ar","ending":"amos","person":"nosotros","fr":"présent, 1re personne du pluriel (nous …)","example":"hablamos = nous parlons"},
    {"tense":"presente","group":"ar","ending":"áis","person":"vosotros","fr":"présent, 2e personne du pluriel (vous …)","example":"habláis = vous parlez"},
    {"tense":"presente","group":"ar","ending":"an","person":"ellos/ellas/ustedes","fr":"présent, 3e personne du pluriel (ils/elles …)","example":"hablan = ils/elles parlent"},
    {"tense":"presente","group":"er-ir","ending":"es","person":"tú","fr":"présent, 2e personne du singulier (tu …)","example":"comes = tu manges"},
    {"tense":"presente","group":"er-ir","ending":"e","person":"él/ella/usted","fr":"présent, 3e personne du singulier (il/elle …)","example":"come = il/elle mange"},
    {"tense":"presente","group":"er","ending":"emos","person":"nosotros","fr":"présent, 1re personne du pluriel (nous …)","example":"comemos = nous mangeons"},
    {"tense":"presente","group":"er","ending":"éis","person":"vosotros","fr":"présent, 2e personne du pluriel (vous …)","example":"coméis = vous mangez"},
    {"tense":"presente","group":"er-ir","ending":"en","person":"ellos/ellas/ustedes","fr":"présent, 3e personne du pluriel (ils/elles …)","example":"comen = ils/elles mangent"},
    {"tense":"presente","group":"ir","ending":"imos","person":"nosotros","fr":"présent, 1re personne du pluriel (nous …)","example":"vivimos = nous vivons"},
    {"tense":"presente","group":"ir","ending":"ís","person":"vosotros","fr":"présent, 2e personne du pluriel (vous …)","example":"vivís = vous vivez"},
    {"tense":"imperativo","group":"ar","ending":"a","person":"tú (ordre)","fr":"impératif (ordre), tú","example":"habla = parle !"},
    {"tense":"imperativo","group":"er","ending":"e","person":"tú (ordre)","fr":"impératif (ordre), tú","example":"come = mange !"},
    {"tense":"imperativo","group":"ir","ending":"e","person":"tú (ordre)","fr":"impératif (ordre), tú","example":"vive = vis !"},
    {"tense":"imperativo","group":"ar","ending":"e","person":"usted (ordre)","fr":"impératif (ordre), usted","example":"hable = parlez ! (vouvoiement)"},
    {"tense":"imperativo","group":"er","ending":"a","person":"usted (ordre)","fr":"impératif (ordre), usted","example":"coma = mangez ! (vouvoiement)"},
    {"tense":"imperativo","group":"ir","ending":"a","person":"usted (ordre)","fr":"impératif (ordre), usted","example":"viva = vivez ! (vouvoiement)"},
    {"tense":"imperativo","group":"ar","ending":"en","person":"ustedes (ordre)","fr":"impératif (ordre), ustedes","example":"hablen = parlez ! (à plusieurs, vouvoiement)"},
    {"tense":"imperativo","group":"er","ending":"an","person":"ustedes (ordre)","fr":"impératif (ordre), ustedes","example":"coman = mangez ! (à plusieurs, vouvoiement)"},
    {"tense":"imperativo","group":"ir","ending":"an","person":"ustedes (ordre)","fr":"impératif (ordre), ustedes","example":"vivan = vivez ! (à plusieurs, vouvoiement)"},
    {"tense":"imperativo","group":"ar","ending":"ad","person":"vosotros (ordre)","fr":"impératif (ordre), vosotros","example":"hablad = parlez ! (à plusieurs, tutoiement)"},
    {"tense":"imperativo","group":"er","ending":"ed","person":"vosotros (ordre)","fr":"impératif (ordre), vosotros","example":"comed = mangez ! (à plusieurs, tutoiement)"},
    {"tense":"imperativo","group":"ir","ending":"id","person":"vosotros (ordre)","fr":"impératif (ordre), vosotros","example":"vivid = vivez ! (à plusieurs, tutoiement)"},
    {"tense":"presente_continuo","group":"ar","ending":"ando","person":"gérondif","fr":"gérondif (estoy hablando = je suis en train de parler ; en parlant)","example":"hablando = en train de parler"},
    {"tense":"presente_continuo","group":"er-ir","ending":"iendo","person":"gérondif","fr":"gérondif (estoy comiendo = je suis en train de manger ; en mangeant)","example":"comiendo = en train de manger"},
    {"tense":"perfecto","group":"ar","ending":"ado","person":"participe","fr":"participe passé (he hablado = j'ai parlé)","example":"hablado = parlé"},
    {"tense":"perfecto","group":"er-ir","ending":"ido","person":"participe","fr":"participe passé (he comido = j'ai mangé)","example":"comido = mangé"}
  ],
  irregulars: [
    {"form":"soy","infinitive":"ser","tense":"presente","person":"yo","fr":"je suis"},
    {"form":"eres","infinitive":"ser","tense":"presente","person":"tú","fr":"tu es"},
    {"form":"es","infinitive":"ser","tense":"presente","person":"él/ella/usted","fr":"il/elle est"},
    {"form":"somos","infinitive":"ser","tense":"presente","person":"nosotros","fr":"nous sommes"},
    {"form":"sois","infinitive":"ser","tense":"presente","person":"vosotros","fr":"vous êtes"},
    {"form":"son","infinitive":"ser","tense":"presente","person":"ellos/ellas/ustedes","fr":"ils/elles sont"},
    {"form":"fui","infinitive":"ser","tense":"indefinido","person":"yo","fr":"j'ai été (ou : je fus)"},
    {"form":"fuiste","infinitive":"ser","tense":"indefinido","person":"tú","fr":"tu as été"},
    {"form":"fue","infinitive":"ser","tense":"indefinido","person":"él/ella/usted","fr":"il/elle a été (ou : il/elle fut)"},
    {"form":"fuimos","infinitive":"ser","tense":"indefinido","person":"nosotros","fr":"nous avons été"},
    {"form":"fuisteis","infinitive":"ser","tense":"indefinido","person":"vosotros","fr":"vous avez été"},
    {"form":"fueron","infinitive":"ser","tense":"indefinido","person":"ellos/ellas/ustedes","fr":"ils/elles ont été"},
    {"form":"era","infinitive":"ser","tense":"imperfecto","person":"yo / él/ella/usted","fr":"j'étais / il/elle était"},
    {"form":"eras","infinitive":"ser","tense":"imperfecto","person":"tú","fr":"tu étais"},
    {"form":"éramos","infinitive":"ser","tense":"imperfecto","person":"nosotros","fr":"nous étions"},
    {"form":"erais","infinitive":"ser","tense":"imperfecto","person":"vosotros","fr":"vous étiez"},
    {"form":"eran","infinitive":"ser","tense":"imperfecto","person":"ellos/ellas/ustedes","fr":"ils/elles étaient"},
    {"form":"seré","infinitive":"ser","tense":"futuro","person":"yo","fr":"je serai"},
    {"form":"serás","infinitive":"ser","tense":"futuro","person":"tú","fr":"tu seras (ou : tu es sans doute…)"},
    {"form":"será","infinitive":"ser","tense":"futuro","person":"él/ella/usted","fr":"il/elle sera (ou : ce sera / c'est sans doute…)"},
    {"form":"seremos","infinitive":"ser","tense":"futuro","person":"nosotros","fr":"nous serons"},
    {"form":"seréis","infinitive":"ser","tense":"futuro","person":"vosotros","fr":"vous serez"},
    {"form":"serán","infinitive":"ser","tense":"futuro","person":"ellos/ellas/ustedes","fr":"ils/elles seront (ou : ce sont sans doute…)"},
    {"form":"sería","infinitive":"ser","tense":"condicional","person":"yo / él/ella/usted","fr":"je serais / il/elle serait"},
    {"form":"serías","infinitive":"ser","tense":"condicional","person":"tú","fr":"tu serais"},
    {"form":"seríamos","infinitive":"ser","tense":"condicional","person":"nosotros","fr":"nous serions"},
    {"form":"seríais","infinitive":"ser","tense":"condicional","person":"vosotros","fr":"vous seriez"},
    {"form":"serían","infinitive":"ser","tense":"condicional","person":"ellos/ellas/ustedes","fr":"ils/elles seraient"},
    {"form":"sé","infinitive":"ser","tense":"imperativo","person":"tú (ordre)","fr":"sois ! (ordre à « tu »)"},
    {"form":"siendo","infinitive":"ser","tense":"presente_continuo","person":"gérondif","fr":"en train d'être (ou : en étant)"},
    {"form":"sido","infinitive":"ser","tense":"perfecto","person":"participe","fr":"été (participe passé)"},
    {"form":"estoy","infinitive":"estar","tense":"presente","person":"yo","fr":"je suis (état, lieu)"},
    {"form":"estoy","infinitive":"estar","tense":"presente_continuo","person":"yo","fr":"je suis (estar + gérondif : estoy hablando = je suis en train de parler)"},
    {"form":"estás","infinitive":"estar","tense":"presente","person":"tú","fr":"tu es (état, lieu)"},
    {"form":"estás","infinitive":"estar","tense":"presente_continuo","person":"tú","fr":"tu es (estar + gérondif : estoy hablando = je suis en train de parler)"},
    {"form":"está","infinitive":"estar","tense":"presente","person":"él/ella/usted","fr":"il/elle est (état, lieu)"},
    {"form":"está","infinitive":"estar","tense":"presente_continuo","person":"él/ella/usted","fr":"il/elle est (estar + gérondif : estoy hablando = je suis en train de parler)"},
    {"form":"estamos","infinitive":"estar","tense":"presente","person":"nosotros","fr":"nous sommes (état, lieu)"},
    {"form":"estamos","infinitive":"estar","tense":"presente_continuo","person":"nosotros","fr":"nous sommes (estar + gérondif : estoy hablando = je suis en train de parler)"},
    {"form":"estáis","infinitive":"estar","tense":"presente","person":"vosotros","fr":"vous êtes (état, lieu)"},
    {"form":"estáis","infinitive":"estar","tense":"presente_continuo","person":"vosotros","fr":"vous êtes (estar + gérondif : estoy hablando = je suis en train de parler)"},
    {"form":"están","infinitive":"estar","tense":"presente","person":"ellos/ellas/ustedes","fr":"ils/elles sont (état, lieu)"},
    {"form":"están","infinitive":"estar","tense":"presente_continuo","person":"ellos/ellas/ustedes","fr":"ils/elles sont (estar + gérondif : estoy hablando = je suis en train de parler)"},
    {"form":"estuve","infinitive":"estar","tense":"indefinido","person":"yo","fr":"j'ai été"},
    {"form":"estuviste","infinitive":"estar","tense":"indefinido","person":"tú","fr":"tu as été"},
    {"form":"estuvo","infinitive":"estar","tense":"indefinido","person":"él/ella/usted","fr":"il/elle a été"},
    {"form":"estuvimos","infinitive":"estar","tense":"indefinido","person":"nosotros","fr":"nous avons été"},
    {"form":"estuvisteis","infinitive":"estar","tense":"indefinido","person":"vosotros","fr":"vous avez été"},
    {"form":"estuvieron","infinitive":"estar","tense":"indefinido","person":"ellos/ellas/ustedes","fr":"ils/elles ont été"},
    {"form":"estaba","infinitive":"estar","tense":"imperfecto","person":"yo / él/ella/usted","fr":"j'étais / il/elle était"},
    {"form":"estabas","infinitive":"estar","tense":"imperfecto","person":"tú","fr":"tu étais"},
    {"form":"estábamos","infinitive":"estar","tense":"imperfecto","person":"nosotros","fr":"nous étions"},
    {"form":"estabais","infinitive":"estar","tense":"imperfecto","person":"vosotros","fr":"vous étiez"},
    {"form":"estaban","infinitive":"estar","tense":"imperfecto","person":"ellos/ellas/ustedes","fr":"ils/elles étaient"},
    {"form":"estaré","infinitive":"estar","tense":"futuro","person":"yo","fr":"je serai"},
    {"form":"estarás","infinitive":"estar","tense":"futuro","person":"tú","fr":"tu seras"},
    {"form":"estará","infinitive":"estar","tense":"futuro","person":"él/ella/usted","fr":"il/elle sera"},
    {"form":"estaremos","infinitive":"estar","tense":"futuro","person":"nosotros","fr":"nous serons"},
    {"form":"estaréis","infinitive":"estar","tense":"futuro","person":"vosotros","fr":"vous serez"},
    {"form":"estarán","infinitive":"estar","tense":"futuro","person":"ellos/ellas/ustedes","fr":"ils/elles seront"},
    {"form":"estaría","infinitive":"estar","tense":"condicional","person":"yo / él/ella/usted","fr":"je serais / il/elle serait"},
    {"form":"estarías","infinitive":"estar","tense":"condicional","person":"tú","fr":"tu serais"},
    {"form":"estaríamos","infinitive":"estar","tense":"condicional","person":"nosotros","fr":"nous serions"},
    {"form":"estaríais","infinitive":"estar","tense":"condicional","person":"vosotros","fr":"vous seriez"},
    {"form":"estarían","infinitive":"estar","tense":"condicional","person":"ellos/ellas/ustedes","fr":"ils/elles seraient"},
    {"form":"está","infinitive":"estar","tense":"imperativo","person":"tú (ordre)","fr":"sois ! (ordre à « tu »)"},
    {"form":"estando","infinitive":"estar","tense":"presente_continuo","person":"gérondif","fr":"en train d'être (ou : en étant)"},
    {"form":"estado","infinitive":"estar","tense":"perfecto","person":"participe","fr":"été (participe passé)"},
    {"form":"voy","infinitive":"ir","tense":"presente","person":"yo","fr":"je vais"},
    {"form":"voy","infinitive":"ir","tense":"ir_a","person":"yo","fr":"je vais (+ a + infinitif : futur proche)"},
    {"form":"vas","infinitive":"ir","tense":"presente","person":"tú","fr":"tu vas"},
    {"form":"vas","infinitive":"ir","tense":"ir_a","person":"tú","fr":"tu vas (+ a + infinitif : futur proche)"},
    {"form":"va","infinitive":"ir","tense":"presente","person":"él/ella/usted","fr":"il/elle va"},
    {"form":"va","infinitive":"ir","tense":"ir_a","person":"él/ella/usted","fr":"il/elle va (+ a + infinitif : futur proche)"},
    {"form":"vamos","infinitive":"ir","tense":"presente","person":"nosotros","fr":"nous allons"},
    {"form":"vamos","infinitive":"ir","tense":"ir_a","person":"nosotros","fr":"nous allons (+ a + infinitif : futur proche)"},
    {"form":"vais","infinitive":"ir","tense":"presente","person":"vosotros","fr":"vous allez"},
    {"form":"vais","infinitive":"ir","tense":"ir_a","person":"vosotros","fr":"vous allez (+ a + infinitif : futur proche)"},
    {"form":"van","infinitive":"ir","tense":"presente","person":"ellos/ellas/ustedes","fr":"ils/elles vont"},
    {"form":"van","infinitive":"ir","tense":"ir_a","person":"ellos/ellas/ustedes","fr":"ils/elles vont (+ a + infinitif : futur proche)"},
    {"form":"fui","infinitive":"ir","tense":"indefinido","person":"yo","fr":"je suis allé(e) (ou : j'allai)"},
    {"form":"fuiste","infinitive":"ir","tense":"indefinido","person":"tú","fr":"tu es allé(e)"},
    {"form":"fue","infinitive":"ir","tense":"indefinido","person":"él/ella/usted","fr":"il/elle est allé(e) (ou : il/elle alla)"},
    {"form":"fuimos","infinitive":"ir","tense":"indefinido","person":"nosotros","fr":"nous sommes allé(e)s"},
    {"form":"fuisteis","infinitive":"ir","tense":"indefinido","person":"vosotros","fr":"vous êtes allé(e)s"},
    {"form":"fueron","infinitive":"ir","tense":"indefinido","person":"ellos/ellas/ustedes","fr":"ils/elles sont allé(e)s"},
    {"form":"iba","infinitive":"ir","tense":"imperfecto","person":"yo / él/ella/usted","fr":"j'allais / il/elle allait"},
    {"form":"ibas","infinitive":"ir","tense":"imperfecto","person":"tú","fr":"tu allais"},
    {"form":"íbamos","infinitive":"ir","tense":"imperfecto","person":"nosotros","fr":"nous allions"},
    {"form":"ibais","infinitive":"ir","tense":"imperfecto","person":"vosotros","fr":"vous alliez"},
    {"form":"iban","infinitive":"ir","tense":"imperfecto","person":"ellos/ellas/ustedes","fr":"ils/elles allaient"},
    {"form":"iré","infinitive":"ir","tense":"futuro","person":"yo","fr":"j'irai"},
    {"form":"irás","infinitive":"ir","tense":"futuro","person":"tú","fr":"tu iras"},
    {"form":"irá","infinitive":"ir","tense":"futuro","person":"él/ella/usted","fr":"il/elle ira"},
    {"form":"iremos","infinitive":"ir","tense":"futuro","person":"nosotros","fr":"nous irons"},
    {"form":"iréis","infinitive":"ir","tense":"futuro","person":"vosotros","fr":"vous irez"},
    {"form":"irán","infinitive":"ir","tense":"futuro","person":"ellos/ellas/ustedes","fr":"ils/elles iront"},
    {"form":"iría","infinitive":"ir","tense":"condicional","person":"yo / él/ella/usted","fr":"j'irais / il/elle irait"},
    {"form":"irías","infinitive":"ir","tense":"condicional","person":"tú","fr":"tu irais"},
    {"form":"iríamos","infinitive":"ir","tense":"condicional","person":"nosotros","fr":"nous irions"},
    {"form":"iríais","infinitive":"ir","tense":"condicional","person":"vosotros","fr":"vous iriez"},
    {"form":"irían","infinitive":"ir","tense":"condicional","person":"ellos/ellas/ustedes","fr":"ils/elles iraient"},
    {"form":"ve","infinitive":"ir","tense":"imperativo","person":"tú (ordre)","fr":"va ! (ordre à « tu »)"},
    {"form":"yendo","infinitive":"ir","tense":"presente_continuo","person":"gérondif","fr":"en train d'aller (ou : en allant)"},
    {"form":"ido","infinitive":"ir","tense":"perfecto","person":"participe","fr":"allé (participe passé)"},
    {"form":"tengo","infinitive":"tener","tense":"presente","person":"yo","fr":"j'ai"},
    {"form":"tienes","infinitive":"tener","tense":"presente","person":"tú","fr":"tu as"},
    {"form":"tiene","infinitive":"tener","tense":"presente","person":"él/ella/usted","fr":"il/elle a"},
    {"form":"tenemos","infinitive":"tener","tense":"presente","person":"nosotros","fr":"nous avons"},
    {"form":"tenéis","infinitive":"tener","tense":"presente","person":"vosotros","fr":"vous avez"},
    {"form":"tienen","infinitive":"tener","tense":"presente","person":"ellos/ellas/ustedes","fr":"ils/elles ont"},
    {"form":"tuve","infinitive":"tener","tense":"indefinido","person":"yo","fr":"j'ai eu"},
    {"form":"tuviste","infinitive":"tener","tense":"indefinido","person":"tú","fr":"tu as eu"},
    {"form":"tuvo","infinitive":"tener","tense":"indefinido","person":"él/ella/usted","fr":"il/elle a eu"},
    {"form":"tuvimos","infinitive":"tener","tense":"indefinido","person":"nosotros","fr":"nous avons eu"},
    {"form":"tuvisteis","infinitive":"tener","tense":"indefinido","person":"vosotros","fr":"vous avez eu"},
    {"form":"tuvieron","infinitive":"tener","tense":"indefinido","person":"ellos/ellas/ustedes","fr":"ils/elles ont eu"},
    {"form":"tenía","infinitive":"tener","tense":"imperfecto","person":"yo / él/ella/usted","fr":"j'avais / il/elle avait"},
    {"form":"tenías","infinitive":"tener","tense":"imperfecto","person":"tú","fr":"tu avais"},
    {"form":"teníamos","infinitive":"tener","tense":"imperfecto","person":"nosotros","fr":"nous avions"},
    {"form":"teníais","infinitive":"tener","tense":"imperfecto","person":"vosotros","fr":"vous aviez"},
    {"form":"tenían","infinitive":"tener","tense":"imperfecto","person":"ellos/ellas/ustedes","fr":"ils/elles avaient"},
    {"form":"tendré","infinitive":"tener","tense":"futuro","person":"yo","fr":"j'aurai"},
    {"form":"tendrás","infinitive":"tener","tense":"futuro","person":"tú","fr":"tu auras"},
    {"form":"tendrá","infinitive":"tener","tense":"futuro","person":"él/ella/usted","fr":"il/elle aura"},
    {"form":"tendremos","infinitive":"tener","tense":"futuro","person":"nosotros","fr":"nous aurons"},
    {"form":"tendréis","infinitive":"tener","tense":"futuro","person":"vosotros","fr":"vous aurez"},
    {"form":"tendrán","infinitive":"tener","tense":"futuro","person":"ellos/ellas/ustedes","fr":"ils/elles auront"},
    {"form":"tendría","infinitive":"tener","tense":"condicional","person":"yo / él/ella/usted","fr":"j'aurais / il/elle aurait"},
    {"form":"tendrías","infinitive":"tener","tense":"condicional","person":"tú","fr":"tu aurais"},
    {"form":"tendríamos","infinitive":"tener","tense":"condicional","person":"nosotros","fr":"nous aurions"},
    {"form":"tendríais","infinitive":"tener","tense":"condicional","person":"vosotros","fr":"vous auriez"},
    {"form":"tendrían","infinitive":"tener","tense":"condicional","person":"ellos/ellas/ustedes","fr":"ils/elles auraient"},
    {"form":"ten","infinitive":"tener","tense":"imperativo","person":"tú (ordre)","fr":"aie ! (ordre à « tu »)"},
    {"form":"teniendo","infinitive":"tener","tense":"presente_continuo","person":"gérondif","fr":"en train d'avoir (ou : en ayant)"},
    {"form":"tenido","infinitive":"tener","tense":"perfecto","person":"participe","fr":"eu (participe passé)"},
    {"form":"hago","infinitive":"hacer","tense":"presente","person":"yo","fr":"je fais"},
    {"form":"haces","infinitive":"hacer","tense":"presente","person":"tú","fr":"tu fais"},
    {"form":"hace","infinitive":"hacer","tense":"presente","person":"él/ella/usted","fr":"il/elle fait"},
    {"form":"hacemos","infinitive":"hacer","tense":"presente","person":"nosotros","fr":"nous faisons"},
    {"form":"hacéis","infinitive":"hacer","tense":"presente","person":"vosotros","fr":"vous faites"},
    {"form":"hacen","infinitive":"hacer","tense":"presente","person":"ellos/ellas/ustedes","fr":"ils/elles font"},
    {"form":"hice","infinitive":"hacer","tense":"indefinido","person":"yo","fr":"j'ai fait"},
    {"form":"hiciste","infinitive":"hacer","tense":"indefinido","person":"tú","fr":"tu as fait"},
    {"form":"hizo","infinitive":"hacer","tense":"indefinido","person":"él/ella/usted","fr":"il/elle a fait"},
    {"form":"hicimos","infinitive":"hacer","tense":"indefinido","person":"nosotros","fr":"nous avons fait"},
    {"form":"hicisteis","infinitive":"hacer","tense":"indefinido","person":"vosotros","fr":"vous avez fait"},
    {"form":"hicieron","infinitive":"hacer","tense":"indefinido","person":"ellos/ellas/ustedes","fr":"ils/elles ont fait"},
    {"form":"hacía","infinitive":"hacer","tense":"imperfecto","person":"yo / él/ella/usted","fr":"je faisais / il/elle faisait"},
    {"form":"hacías","infinitive":"hacer","tense":"imperfecto","person":"tú","fr":"tu faisais"},
    {"form":"hacíamos","infinitive":"hacer","tense":"imperfecto","person":"nosotros","fr":"nous faisions"},
    {"form":"hacíais","infinitive":"hacer","tense":"imperfecto","person":"vosotros","fr":"vous faisiez"},
    {"form":"hacían","infinitive":"hacer","tense":"imperfecto","person":"ellos/ellas/ustedes","fr":"ils/elles faisaient"},
    {"form":"haré","infinitive":"hacer","tense":"futuro","person":"yo","fr":"je ferai"},
    {"form":"harás","infinitive":"hacer","tense":"futuro","person":"tú","fr":"tu feras"},
    {"form":"hará","infinitive":"hacer","tense":"futuro","person":"él/ella/usted","fr":"il/elle fera"},
    {"form":"haremos","infinitive":"hacer","tense":"futuro","person":"nosotros","fr":"nous ferons"},
    {"form":"haréis","infinitive":"hacer","tense":"futuro","person":"vosotros","fr":"vous ferez"},
    {"form":"harán","infinitive":"hacer","tense":"futuro","person":"ellos/ellas/ustedes","fr":"ils/elles feront"},
    {"form":"haría","infinitive":"hacer","tense":"condicional","person":"yo / él/ella/usted","fr":"je ferais / il/elle ferait"},
    {"form":"harías","infinitive":"hacer","tense":"condicional","person":"tú","fr":"tu ferais"},
    {"form":"haríamos","infinitive":"hacer","tense":"condicional","person":"nosotros","fr":"nous ferions"},
    {"form":"haríais","infinitive":"hacer","tense":"condicional","person":"vosotros","fr":"vous feriez"},
    {"form":"harían","infinitive":"hacer","tense":"condicional","person":"ellos/ellas/ustedes","fr":"ils/elles feraient"},
    {"form":"haz","infinitive":"hacer","tense":"imperativo","person":"tú (ordre)","fr":"fais ! (ordre à « tu »)"},
    {"form":"haciendo","infinitive":"hacer","tense":"presente_continuo","person":"gérondif","fr":"en train de faire (ou : en faisant)"},
    {"form":"hecho","infinitive":"hacer","tense":"perfecto","person":"participe","fr":"fait (participe passé)"},
    {"form":"vengo","infinitive":"venir","tense":"presente","person":"yo","fr":"je viens"},
    {"form":"vienes","infinitive":"venir","tense":"presente","person":"tú","fr":"tu viens"},
    {"form":"viene","infinitive":"venir","tense":"presente","person":"él/ella/usted","fr":"il/elle vient"},
    {"form":"venimos","infinitive":"venir","tense":"presente","person":"nosotros","fr":"nous venons"},
    {"form":"venís","infinitive":"venir","tense":"presente","person":"vosotros","fr":"vous venez"},
    {"form":"vienen","infinitive":"venir","tense":"presente","person":"ellos/ellas/ustedes","fr":"ils/elles viennent"},
    {"form":"vine","infinitive":"venir","tense":"indefinido","person":"yo","fr":"je suis venu(e)"},
    {"form":"viniste","infinitive":"venir","tense":"indefinido","person":"tú","fr":"tu es venu(e)"},
    {"form":"vino","infinitive":"venir","tense":"indefinido","person":"él/ella/usted","fr":"il/elle est venu(e)"},
    {"form":"vinimos","infinitive":"venir","tense":"indefinido","person":"nosotros","fr":"nous sommes venu(e)s"},
    {"form":"vinisteis","infinitive":"venir","tense":"indefinido","person":"vosotros","fr":"vous êtes venu(e)s"},
    {"form":"vinieron","infinitive":"venir","tense":"indefinido","person":"ellos/ellas/ustedes","fr":"ils/elles sont venu(e)s"},
    {"form":"venía","infinitive":"venir","tense":"imperfecto","person":"yo / él/ella/usted","fr":"je venais / il/elle venait"},
    {"form":"venías","infinitive":"venir","tense":"imperfecto","person":"tú","fr":"tu venais"},
    {"form":"veníamos","infinitive":"venir","tense":"imperfecto","person":"nosotros","fr":"nous venions"},
    {"form":"veníais","infinitive":"venir","tense":"imperfecto","person":"vosotros","fr":"vous veniez"},
    {"form":"venían","infinitive":"venir","tense":"imperfecto","person":"ellos/ellas/ustedes","fr":"ils/elles venaient"},
    {"form":"vendré","infinitive":"venir","tense":"futuro","person":"yo","fr":"je viendrai"},
    {"form":"vendrás","infinitive":"venir","tense":"futuro","person":"tú","fr":"tu viendras"},
    {"form":"vendrá","infinitive":"venir","tense":"futuro","person":"él/ella/usted","fr":"il/elle viendra"},
    {"form":"vendremos","infinitive":"venir","tense":"futuro","person":"nosotros","fr":"nous viendrons"},
    {"form":"vendréis","infinitive":"venir","tense":"futuro","person":"vosotros","fr":"vous viendrez"},
    {"form":"vendrán","infinitive":"venir","tense":"futuro","person":"ellos/ellas/ustedes","fr":"ils/elles viendront"},
    {"form":"vendría","infinitive":"venir","tense":"condicional","person":"yo / él/ella/usted","fr":"je viendrais / il/elle viendrait"},
    {"form":"vendrías","infinitive":"venir","tense":"condicional","person":"tú","fr":"tu viendrais"},
    {"form":"vendríamos","infinitive":"venir","tense":"condicional","person":"nosotros","fr":"nous viendrions"},
    {"form":"vendríais","infinitive":"venir","tense":"condicional","person":"vosotros","fr":"vous viendriez"},
    {"form":"vendrían","infinitive":"venir","tense":"condicional","person":"ellos/ellas/ustedes","fr":"ils/elles viendraient"},
    {"form":"ven","infinitive":"venir","tense":"imperativo","person":"tú (ordre)","fr":"viens ! (ordre à « tu »)"},
    {"form":"viniendo","infinitive":"venir","tense":"presente_continuo","person":"gérondif","fr":"en train de venir (ou : en venant)"},
    {"form":"venido","infinitive":"venir","tense":"perfecto","person":"participe","fr":"venu (participe passé)"},
    {"form":"digo","infinitive":"decir","tense":"presente","person":"yo","fr":"je dis"},
    {"form":"dices","infinitive":"decir","tense":"presente","person":"tú","fr":"tu dis"},
    {"form":"dice","infinitive":"decir","tense":"presente","person":"él/ella/usted","fr":"il/elle dit"},
    {"form":"decimos","infinitive":"decir","tense":"presente","person":"nosotros","fr":"nous disons"},
    {"form":"decís","infinitive":"decir","tense":"presente","person":"vosotros","fr":"vous dites"},
    {"form":"dicen","infinitive":"decir","tense":"presente","person":"ellos/ellas/ustedes","fr":"ils/elles disent"},
    {"form":"dije","infinitive":"decir","tense":"indefinido","person":"yo","fr":"j'ai dit"},
    {"form":"dijiste","infinitive":"decir","tense":"indefinido","person":"tú","fr":"tu as dit"},
    {"form":"dijo","infinitive":"decir","tense":"indefinido","person":"él/ella/usted","fr":"il/elle a dit"},
    {"form":"dijimos","infinitive":"decir","tense":"indefinido","person":"nosotros","fr":"nous avons dit"},
    {"form":"dijisteis","infinitive":"decir","tense":"indefinido","person":"vosotros","fr":"vous avez dit"},
    {"form":"dijeron","infinitive":"decir","tense":"indefinido","person":"ellos/ellas/ustedes","fr":"ils/elles ont dit"},
    {"form":"decía","infinitive":"decir","tense":"imperfecto","person":"yo / él/ella/usted","fr":"je disais / il/elle disait"},
    {"form":"decías","infinitive":"decir","tense":"imperfecto","person":"tú","fr":"tu disais"},
    {"form":"decíamos","infinitive":"decir","tense":"imperfecto","person":"nosotros","fr":"nous disions"},
    {"form":"decíais","infinitive":"decir","tense":"imperfecto","person":"vosotros","fr":"vous disiez"},
    {"form":"decían","infinitive":"decir","tense":"imperfecto","person":"ellos/ellas/ustedes","fr":"ils/elles disaient"},
    {"form":"diré","infinitive":"decir","tense":"futuro","person":"yo","fr":"je dirai"},
    {"form":"dirás","infinitive":"decir","tense":"futuro","person":"tú","fr":"tu diras"},
    {"form":"dirá","infinitive":"decir","tense":"futuro","person":"él/ella/usted","fr":"il/elle dira"},
    {"form":"diremos","infinitive":"decir","tense":"futuro","person":"nosotros","fr":"nous dirons"},
    {"form":"diréis","infinitive":"decir","tense":"futuro","person":"vosotros","fr":"vous direz"},
    {"form":"dirán","infinitive":"decir","tense":"futuro","person":"ellos/ellas/ustedes","fr":"ils/elles diront"},
    {"form":"diría","infinitive":"decir","tense":"condicional","person":"yo / él/ella/usted","fr":"je dirais / il/elle dirait"},
    {"form":"dirías","infinitive":"decir","tense":"condicional","person":"tú","fr":"tu dirais"},
    {"form":"diríamos","infinitive":"decir","tense":"condicional","person":"nosotros","fr":"nous dirions"},
    {"form":"diríais","infinitive":"decir","tense":"condicional","person":"vosotros","fr":"vous diriez"},
    {"form":"dirían","infinitive":"decir","tense":"condicional","person":"ellos/ellas/ustedes","fr":"ils/elles diraient"},
    {"form":"di","infinitive":"decir","tense":"imperativo","person":"tú (ordre)","fr":"dis ! (ordre à « tu »)"},
    {"form":"diciendo","infinitive":"decir","tense":"presente_continuo","person":"gérondif","fr":"en train de dire (ou : en disant)"},
    {"form":"dicho","infinitive":"decir","tense":"perfecto","person":"participe","fr":"dit (participe passé)"},
    {"form":"puedo","infinitive":"poder","tense":"presente","person":"yo","fr":"je peux"},
    {"form":"puedes","infinitive":"poder","tense":"presente","person":"tú","fr":"tu peux"},
    {"form":"puede","infinitive":"poder","tense":"presente","person":"él/ella/usted","fr":"il/elle peut"},
    {"form":"podemos","infinitive":"poder","tense":"presente","person":"nosotros","fr":"nous pouvons"},
    {"form":"podéis","infinitive":"poder","tense":"presente","person":"vosotros","fr":"vous pouvez"},
    {"form":"pueden","infinitive":"poder","tense":"presente","person":"ellos/ellas/ustedes","fr":"ils/elles peuvent"},
    {"form":"pude","infinitive":"poder","tense":"indefinido","person":"yo","fr":"j'ai pu"},
    {"form":"pudiste","infinitive":"poder","tense":"indefinido","person":"tú","fr":"tu as pu"},
    {"form":"pudo","infinitive":"poder","tense":"indefinido","person":"él/ella/usted","fr":"il/elle a pu"},
    {"form":"pudimos","infinitive":"poder","tense":"indefinido","person":"nosotros","fr":"nous avons pu"},
    {"form":"pudisteis","infinitive":"poder","tense":"indefinido","person":"vosotros","fr":"vous avez pu"},
    {"form":"pudieron","infinitive":"poder","tense":"indefinido","person":"ellos/ellas/ustedes","fr":"ils/elles ont pu"},
    {"form":"podía","infinitive":"poder","tense":"imperfecto","person":"yo / él/ella/usted","fr":"je pouvais / il/elle pouvait"},
    {"form":"podías","infinitive":"poder","tense":"imperfecto","person":"tú","fr":"tu pouvais"},
    {"form":"podíamos","infinitive":"poder","tense":"imperfecto","person":"nosotros","fr":"nous pouvions"},
    {"form":"podíais","infinitive":"poder","tense":"imperfecto","person":"vosotros","fr":"vous pouviez"},
    {"form":"podían","infinitive":"poder","tense":"imperfecto","person":"ellos/ellas/ustedes","fr":"ils/elles pouvaient"},
    {"form":"podré","infinitive":"poder","tense":"futuro","person":"yo","fr":"je pourrai"},
    {"form":"podrás","infinitive":"poder","tense":"futuro","person":"tú","fr":"tu pourras"},
    {"form":"podrá","infinitive":"poder","tense":"futuro","person":"él/ella/usted","fr":"il/elle pourra"},
    {"form":"podremos","infinitive":"poder","tense":"futuro","person":"nosotros","fr":"nous pourrons"},
    {"form":"podréis","infinitive":"poder","tense":"futuro","person":"vosotros","fr":"vous pourrez"},
    {"form":"podrán","infinitive":"poder","tense":"futuro","person":"ellos/ellas/ustedes","fr":"ils/elles pourront"},
    {"form":"podría","infinitive":"poder","tense":"condicional","person":"yo / él/ella/usted","fr":"je pourrais / il/elle pourrait"},
    {"form":"podrías","infinitive":"poder","tense":"condicional","person":"tú","fr":"tu pourrais"},
    {"form":"podríamos","infinitive":"poder","tense":"condicional","person":"nosotros","fr":"nous pourrions"},
    {"form":"podríais","infinitive":"poder","tense":"condicional","person":"vosotros","fr":"vous pourriez"},
    {"form":"podrían","infinitive":"poder","tense":"condicional","person":"ellos/ellas/ustedes","fr":"ils/elles pourraient"},
    {"form":"pudiendo","infinitive":"poder","tense":"presente_continuo","person":"gérondif","fr":"en train de pouvoir (ou : en pouvant)"},
    {"form":"podido","infinitive":"poder","tense":"perfecto","person":"participe","fr":"pu (participe passé)"},
    {"form":"quiero","infinitive":"querer","tense":"presente","person":"yo","fr":"je veux"},
    {"form":"quieres","infinitive":"querer","tense":"presente","person":"tú","fr":"tu veux"},
    {"form":"quiere","infinitive":"querer","tense":"presente","person":"él/ella/usted","fr":"il/elle veut"},
    {"form":"queremos","infinitive":"querer","tense":"presente","person":"nosotros","fr":"nous voulons"},
    {"form":"queréis","infinitive":"querer","tense":"presente","person":"vosotros","fr":"vous voulez"},
    {"form":"quieren","infinitive":"querer","tense":"presente","person":"ellos/ellas/ustedes","fr":"ils/elles veulent"},
    {"form":"quise","infinitive":"querer","tense":"indefinido","person":"yo","fr":"j'ai voulu"},
    {"form":"quisiste","infinitive":"querer","tense":"indefinido","person":"tú","fr":"tu as voulu"},
    {"form":"quiso","infinitive":"querer","tense":"indefinido","person":"él/ella/usted","fr":"il/elle a voulu"},
    {"form":"quisimos","infinitive":"querer","tense":"indefinido","person":"nosotros","fr":"nous avons voulu"},
    {"form":"quisisteis","infinitive":"querer","tense":"indefinido","person":"vosotros","fr":"vous avez voulu"},
    {"form":"quisieron","infinitive":"querer","tense":"indefinido","person":"ellos/ellas/ustedes","fr":"ils/elles ont voulu"},
    {"form":"quería","infinitive":"querer","tense":"imperfecto","person":"yo / él/ella/usted","fr":"je voulais / il/elle voulait"},
    {"form":"querías","infinitive":"querer","tense":"imperfecto","person":"tú","fr":"tu voulais"},
    {"form":"queríamos","infinitive":"querer","tense":"imperfecto","person":"nosotros","fr":"nous voulions"},
    {"form":"queríais","infinitive":"querer","tense":"imperfecto","person":"vosotros","fr":"vous vouliez"},
    {"form":"querían","infinitive":"querer","tense":"imperfecto","person":"ellos/ellas/ustedes","fr":"ils/elles voulaient"},
    {"form":"querré","infinitive":"querer","tense":"futuro","person":"yo","fr":"je voudrai"},
    {"form":"querrás","infinitive":"querer","tense":"futuro","person":"tú","fr":"tu voudras"},
    {"form":"querrá","infinitive":"querer","tense":"futuro","person":"él/ella/usted","fr":"il/elle voudra"},
    {"form":"querremos","infinitive":"querer","tense":"futuro","person":"nosotros","fr":"nous voudrons"},
    {"form":"querréis","infinitive":"querer","tense":"futuro","person":"vosotros","fr":"vous voudrez"},
    {"form":"querrán","infinitive":"querer","tense":"futuro","person":"ellos/ellas/ustedes","fr":"ils/elles voudront"},
    {"form":"querría","infinitive":"querer","tense":"condicional","person":"yo / él/ella/usted","fr":"je voudrais / il/elle voudrait"},
    {"form":"querrías","infinitive":"querer","tense":"condicional","person":"tú","fr":"tu voudrais"},
    {"form":"querríamos","infinitive":"querer","tense":"condicional","person":"nosotros","fr":"nous voudrions"},
    {"form":"querríais","infinitive":"querer","tense":"condicional","person":"vosotros","fr":"vous voudriez"},
    {"form":"querrían","infinitive":"querer","tense":"condicional","person":"ellos/ellas/ustedes","fr":"ils/elles voudraient"},
    {"form":"queriendo","infinitive":"querer","tense":"presente_continuo","person":"gérondif","fr":"en train de vouloir (ou : en voulant)"},
    {"form":"querido","infinitive":"querer","tense":"perfecto","person":"participe","fr":"voulu (participe passé)"},
    {"form":"sé","infinitive":"saber","tense":"presente","person":"yo","fr":"je sais"},
    {"form":"sabes","infinitive":"saber","tense":"presente","person":"tú","fr":"tu sais"},
    {"form":"sabe","infinitive":"saber","tense":"presente","person":"él/ella/usted","fr":"il/elle sait"},
    {"form":"sabemos","infinitive":"saber","tense":"presente","person":"nosotros","fr":"nous savons"},
    {"form":"sabéis","infinitive":"saber","tense":"presente","person":"vosotros","fr":"vous savez"},
    {"form":"saben","infinitive":"saber","tense":"presente","person":"ellos/ellas/ustedes","fr":"ils/elles savent"},
    {"form":"supe","infinitive":"saber","tense":"indefinido","person":"yo","fr":"j'ai su"},
    {"form":"supiste","infinitive":"saber","tense":"indefinido","person":"tú","fr":"tu as su"},
    {"form":"supo","infinitive":"saber","tense":"indefinido","person":"él/ella/usted","fr":"il/elle a su"},
    {"form":"supimos","infinitive":"saber","tense":"indefinido","person":"nosotros","fr":"nous avons su"},
    {"form":"supisteis","infinitive":"saber","tense":"indefinido","person":"vosotros","fr":"vous avez su"},
    {"form":"supieron","infinitive":"saber","tense":"indefinido","person":"ellos/ellas/ustedes","fr":"ils/elles ont su"},
    {"form":"sabía","infinitive":"saber","tense":"imperfecto","person":"yo / él/ella/usted","fr":"je savais / il/elle savait"},
    {"form":"sabías","infinitive":"saber","tense":"imperfecto","person":"tú","fr":"tu savais"},
    {"form":"sabíamos","infinitive":"saber","tense":"imperfecto","person":"nosotros","fr":"nous savions"},
    {"form":"sabíais","infinitive":"saber","tense":"imperfecto","person":"vosotros","fr":"vous saviez"},
    {"form":"sabían","infinitive":"saber","tense":"imperfecto","person":"ellos/ellas/ustedes","fr":"ils/elles savaient"},
    {"form":"sabré","infinitive":"saber","tense":"futuro","person":"yo","fr":"je saurai"},
    {"form":"sabrás","infinitive":"saber","tense":"futuro","person":"tú","fr":"tu sauras"},
    {"form":"sabrá","infinitive":"saber","tense":"futuro","person":"él/ella/usted","fr":"il/elle saura"},
    {"form":"sabremos","infinitive":"saber","tense":"futuro","person":"nosotros","fr":"nous saurons"},
    {"form":"sabréis","infinitive":"saber","tense":"futuro","person":"vosotros","fr":"vous saurez"},
    {"form":"sabrán","infinitive":"saber","tense":"futuro","person":"ellos/ellas/ustedes","fr":"ils/elles sauront"},
    {"form":"sabría","infinitive":"saber","tense":"condicional","person":"yo / él/ella/usted","fr":"je saurais / il/elle saurait"},
    {"form":"sabrías","infinitive":"saber","tense":"condicional","person":"tú","fr":"tu saurais"},
    {"form":"sabríamos","infinitive":"saber","tense":"condicional","person":"nosotros","fr":"nous saurions"},
    {"form":"sabríais","infinitive":"saber","tense":"condicional","person":"vosotros","fr":"vous sauriez"},
    {"form":"sabrían","infinitive":"saber","tense":"condicional","person":"ellos/ellas/ustedes","fr":"ils/elles sauraient"},
    {"form":"sabiendo","infinitive":"saber","tense":"presente_continuo","person":"gérondif","fr":"en train de savoir (ou : en sachant)"},
    {"form":"sabido","infinitive":"saber","tense":"perfecto","person":"participe","fr":"su (participe passé)"},
    {"form":"pongo","infinitive":"poner","tense":"presente","person":"yo","fr":"je mets"},
    {"form":"pones","infinitive":"poner","tense":"presente","person":"tú","fr":"tu mets"},
    {"form":"pone","infinitive":"poner","tense":"presente","person":"él/ella/usted","fr":"il/elle met"},
    {"form":"ponemos","infinitive":"poner","tense":"presente","person":"nosotros","fr":"nous mettons"},
    {"form":"ponéis","infinitive":"poner","tense":"presente","person":"vosotros","fr":"vous mettez"},
    {"form":"ponen","infinitive":"poner","tense":"presente","person":"ellos/ellas/ustedes","fr":"ils/elles mettent"},
    {"form":"puse","infinitive":"poner","tense":"indefinido","person":"yo","fr":"j'ai mis"},
    {"form":"pusiste","infinitive":"poner","tense":"indefinido","person":"tú","fr":"tu as mis"},
    {"form":"puso","infinitive":"poner","tense":"indefinido","person":"él/ella/usted","fr":"il/elle a mis"},
    {"form":"pusimos","infinitive":"poner","tense":"indefinido","person":"nosotros","fr":"nous avons mis"},
    {"form":"pusisteis","infinitive":"poner","tense":"indefinido","person":"vosotros","fr":"vous avez mis"},
    {"form":"pusieron","infinitive":"poner","tense":"indefinido","person":"ellos/ellas/ustedes","fr":"ils/elles ont mis"},
    {"form":"ponía","infinitive":"poner","tense":"imperfecto","person":"yo / él/ella/usted","fr":"je mettais / il/elle mettait"},
    {"form":"ponías","infinitive":"poner","tense":"imperfecto","person":"tú","fr":"tu mettais"},
    {"form":"poníamos","infinitive":"poner","tense":"imperfecto","person":"nosotros","fr":"nous mettions"},
    {"form":"poníais","infinitive":"poner","tense":"imperfecto","person":"vosotros","fr":"vous mettiez"},
    {"form":"ponían","infinitive":"poner","tense":"imperfecto","person":"ellos/ellas/ustedes","fr":"ils/elles mettaient"},
    {"form":"pondré","infinitive":"poner","tense":"futuro","person":"yo","fr":"je mettrai"},
    {"form":"pondrás","infinitive":"poner","tense":"futuro","person":"tú","fr":"tu mettras"},
    {"form":"pondrá","infinitive":"poner","tense":"futuro","person":"él/ella/usted","fr":"il/elle mettra"},
    {"form":"pondremos","infinitive":"poner","tense":"futuro","person":"nosotros","fr":"nous mettrons"},
    {"form":"pondréis","infinitive":"poner","tense":"futuro","person":"vosotros","fr":"vous mettrez"},
    {"form":"pondrán","infinitive":"poner","tense":"futuro","person":"ellos/ellas/ustedes","fr":"ils/elles mettront"},
    {"form":"pondría","infinitive":"poner","tense":"condicional","person":"yo / él/ella/usted","fr":"je mettrais / il/elle mettrait"},
    {"form":"pondrías","infinitive":"poner","tense":"condicional","person":"tú","fr":"tu mettrais"},
    {"form":"pondríamos","infinitive":"poner","tense":"condicional","person":"nosotros","fr":"nous mettrions"},
    {"form":"pondríais","infinitive":"poner","tense":"condicional","person":"vosotros","fr":"vous mettriez"},
    {"form":"pondrían","infinitive":"poner","tense":"condicional","person":"ellos/ellas/ustedes","fr":"ils/elles mettraient"},
    {"form":"pon","infinitive":"poner","tense":"imperativo","person":"tú (ordre)","fr":"mets ! (ordre à « tu »)"},
    {"form":"poniendo","infinitive":"poner","tense":"presente_continuo","person":"gérondif","fr":"en train de mettre (ou : en mettant)"},
    {"form":"puesto","infinitive":"poner","tense":"perfecto","person":"participe","fr":"mis (participe passé)"},
    {"form":"salgo","infinitive":"salir","tense":"presente","person":"yo","fr":"je sors"},
    {"form":"sales","infinitive":"salir","tense":"presente","person":"tú","fr":"tu sors"},
    {"form":"sale","infinitive":"salir","tense":"presente","person":"él/ella/usted","fr":"il/elle sort"},
    {"form":"salimos","infinitive":"salir","tense":"presente","person":"nosotros","fr":"nous sortons"},
    {"form":"salís","infinitive":"salir","tense":"presente","person":"vosotros","fr":"vous sortez"},
    {"form":"salen","infinitive":"salir","tense":"presente","person":"ellos/ellas/ustedes","fr":"ils/elles sortent"},
    {"form":"salí","infinitive":"salir","tense":"indefinido","person":"yo","fr":"je suis sorti(e)"},
    {"form":"saliste","infinitive":"salir","tense":"indefinido","person":"tú","fr":"tu es sorti(e)"},
    {"form":"salió","infinitive":"salir","tense":"indefinido","person":"él/ella/usted","fr":"il/elle est sorti(e)"},
    {"form":"salimos","infinitive":"salir","tense":"indefinido","person":"nosotros","fr":"nous sommes sorti(e)s"},
    {"form":"salisteis","infinitive":"salir","tense":"indefinido","person":"vosotros","fr":"vous êtes sorti(e)s"},
    {"form":"salieron","infinitive":"salir","tense":"indefinido","person":"ellos/ellas/ustedes","fr":"ils/elles sont sorti(e)s"},
    {"form":"salía","infinitive":"salir","tense":"imperfecto","person":"yo / él/ella/usted","fr":"je sortais / il/elle sortait"},
    {"form":"salías","infinitive":"salir","tense":"imperfecto","person":"tú","fr":"tu sortais"},
    {"form":"salíamos","infinitive":"salir","tense":"imperfecto","person":"nosotros","fr":"nous sortions"},
    {"form":"salíais","infinitive":"salir","tense":"imperfecto","person":"vosotros","fr":"vous sortiez"},
    {"form":"salían","infinitive":"salir","tense":"imperfecto","person":"ellos/ellas/ustedes","fr":"ils/elles sortaient"},
    {"form":"saldré","infinitive":"salir","tense":"futuro","person":"yo","fr":"je sortirai"},
    {"form":"saldrás","infinitive":"salir","tense":"futuro","person":"tú","fr":"tu sortiras"},
    {"form":"saldrá","infinitive":"salir","tense":"futuro","person":"él/ella/usted","fr":"il/elle sortira"},
    {"form":"saldremos","infinitive":"salir","tense":"futuro","person":"nosotros","fr":"nous sortirons"},
    {"form":"saldréis","infinitive":"salir","tense":"futuro","person":"vosotros","fr":"vous sortirez"},
    {"form":"saldrán","infinitive":"salir","tense":"futuro","person":"ellos/ellas/ustedes","fr":"ils/elles sortiront"},
    {"form":"saldría","infinitive":"salir","tense":"condicional","person":"yo / él/ella/usted","fr":"je sortirais / il/elle sortirait"},
    {"form":"saldrías","infinitive":"salir","tense":"condicional","person":"tú","fr":"tu sortirais"},
    {"form":"saldríamos","infinitive":"salir","tense":"condicional","person":"nosotros","fr":"nous sortirions"},
    {"form":"saldríais","infinitive":"salir","tense":"condicional","person":"vosotros","fr":"vous sortiriez"},
    {"form":"saldrían","infinitive":"salir","tense":"condicional","person":"ellos/ellas/ustedes","fr":"ils/elles sortiraient"},
    {"form":"sal","infinitive":"salir","tense":"imperativo","person":"tú (ordre)","fr":"sors ! (ordre à « tu »)"},
    {"form":"saliendo","infinitive":"salir","tense":"presente_continuo","person":"gérondif","fr":"en train de sortir (ou : en sortant)"},
    {"form":"salido","infinitive":"salir","tense":"perfecto","person":"participe","fr":"sorti (participe passé)"},
    {"form":"veo","infinitive":"ver","tense":"presente","person":"yo","fr":"je vois"},
    {"form":"ves","infinitive":"ver","tense":"presente","person":"tú","fr":"tu vois"},
    {"form":"ve","infinitive":"ver","tense":"presente","person":"él/ella/usted","fr":"il/elle voit"},
    {"form":"vemos","infinitive":"ver","tense":"presente","person":"nosotros","fr":"nous voyons"},
    {"form":"veis","infinitive":"ver","tense":"presente","person":"vosotros","fr":"vous voyez"},
    {"form":"ven","infinitive":"ver","tense":"presente","person":"ellos/ellas/ustedes","fr":"ils/elles voient"},
    {"form":"vi","infinitive":"ver","tense":"indefinido","person":"yo","fr":"j'ai vu"},
    {"form":"viste","infinitive":"ver","tense":"indefinido","person":"tú","fr":"tu as vu"},
    {"form":"vio","infinitive":"ver","tense":"indefinido","person":"él/ella/usted","fr":"il/elle a vu"},
    {"form":"vimos","infinitive":"ver","tense":"indefinido","person":"nosotros","fr":"nous avons vu"},
    {"form":"visteis","infinitive":"ver","tense":"indefinido","person":"vosotros","fr":"vous avez vu"},
    {"form":"vieron","infinitive":"ver","tense":"indefinido","person":"ellos/ellas/ustedes","fr":"ils/elles ont vu"},
    {"form":"veía","infinitive":"ver","tense":"imperfecto","person":"yo / él/ella/usted","fr":"je voyais / il/elle voyait"},
    {"form":"veías","infinitive":"ver","tense":"imperfecto","person":"tú","fr":"tu voyais"},
    {"form":"veíamos","infinitive":"ver","tense":"imperfecto","person":"nosotros","fr":"nous voyions"},
    {"form":"veíais","infinitive":"ver","tense":"imperfecto","person":"vosotros","fr":"vous voyiez"},
    {"form":"veían","infinitive":"ver","tense":"imperfecto","person":"ellos/ellas/ustedes","fr":"ils/elles voyaient"},
    {"form":"veré","infinitive":"ver","tense":"futuro","person":"yo","fr":"je verrai"},
    {"form":"verás","infinitive":"ver","tense":"futuro","person":"tú","fr":"tu verras"},
    {"form":"verá","infinitive":"ver","tense":"futuro","person":"él/ella/usted","fr":"il/elle verra"},
    {"form":"veremos","infinitive":"ver","tense":"futuro","person":"nosotros","fr":"nous verrons"},
    {"form":"veréis","infinitive":"ver","tense":"futuro","person":"vosotros","fr":"vous verrez"},
    {"form":"verán","infinitive":"ver","tense":"futuro","person":"ellos/ellas/ustedes","fr":"ils/elles verront"},
    {"form":"vería","infinitive":"ver","tense":"condicional","person":"yo / él/ella/usted","fr":"je verrais / il/elle verrait"},
    {"form":"verías","infinitive":"ver","tense":"condicional","person":"tú","fr":"tu verrais"},
    {"form":"veríamos","infinitive":"ver","tense":"condicional","person":"nosotros","fr":"nous verrions"},
    {"form":"veríais","infinitive":"ver","tense":"condicional","person":"vosotros","fr":"vous verriez"},
    {"form":"verían","infinitive":"ver","tense":"condicional","person":"ellos/ellas/ustedes","fr":"ils/elles verraient"},
    {"form":"ve","infinitive":"ver","tense":"imperativo","person":"tú (ordre)","fr":"vois ! (ordre à « tu »)"},
    {"form":"viendo","infinitive":"ver","tense":"presente_continuo","person":"gérondif","fr":"en train de voir (ou : en voyant)"},
    {"form":"visto","infinitive":"ver","tense":"perfecto","person":"participe","fr":"vu (participe passé)"},
    {"form":"doy","infinitive":"dar","tense":"presente","person":"yo","fr":"je donne"},
    {"form":"das","infinitive":"dar","tense":"presente","person":"tú","fr":"tu donnes"},
    {"form":"da","infinitive":"dar","tense":"presente","person":"él/ella/usted","fr":"il/elle donne"},
    {"form":"damos","infinitive":"dar","tense":"presente","person":"nosotros","fr":"nous donnons"},
    {"form":"dais","infinitive":"dar","tense":"presente","person":"vosotros","fr":"vous donnez"},
    {"form":"dan","infinitive":"dar","tense":"presente","person":"ellos/ellas/ustedes","fr":"ils/elles donnent"},
    {"form":"di","infinitive":"dar","tense":"indefinido","person":"yo","fr":"j'ai donné"},
    {"form":"diste","infinitive":"dar","tense":"indefinido","person":"tú","fr":"tu as donné"},
    {"form":"dio","infinitive":"dar","tense":"indefinido","person":"él/ella/usted","fr":"il/elle a donné"},
    {"form":"dimos","infinitive":"dar","tense":"indefinido","person":"nosotros","fr":"nous avons donné"},
    {"form":"disteis","infinitive":"dar","tense":"indefinido","person":"vosotros","fr":"vous avez donné"},
    {"form":"dieron","infinitive":"dar","tense":"indefinido","person":"ellos/ellas/ustedes","fr":"ils/elles ont donné"},
    {"form":"daba","infinitive":"dar","tense":"imperfecto","person":"yo / él/ella/usted","fr":"je donnais / il/elle donnait"},
    {"form":"dabas","infinitive":"dar","tense":"imperfecto","person":"tú","fr":"tu donnais"},
    {"form":"dábamos","infinitive":"dar","tense":"imperfecto","person":"nosotros","fr":"nous donnions"},
    {"form":"dabais","infinitive":"dar","tense":"imperfecto","person":"vosotros","fr":"vous donniez"},
    {"form":"daban","infinitive":"dar","tense":"imperfecto","person":"ellos/ellas/ustedes","fr":"ils/elles donnaient"},
    {"form":"daré","infinitive":"dar","tense":"futuro","person":"yo","fr":"je donnerai"},
    {"form":"darás","infinitive":"dar","tense":"futuro","person":"tú","fr":"tu donneras"},
    {"form":"dará","infinitive":"dar","tense":"futuro","person":"él/ella/usted","fr":"il/elle donnera"},
    {"form":"daremos","infinitive":"dar","tense":"futuro","person":"nosotros","fr":"nous donnerons"},
    {"form":"daréis","infinitive":"dar","tense":"futuro","person":"vosotros","fr":"vous donnerez"},
    {"form":"darán","infinitive":"dar","tense":"futuro","person":"ellos/ellas/ustedes","fr":"ils/elles donneront"},
    {"form":"daría","infinitive":"dar","tense":"condicional","person":"yo / él/ella/usted","fr":"je donnerais / il/elle donnerait"},
    {"form":"darías","infinitive":"dar","tense":"condicional","person":"tú","fr":"tu donnerais"},
    {"form":"daríamos","infinitive":"dar","tense":"condicional","person":"nosotros","fr":"nous donnerions"},
    {"form":"daríais","infinitive":"dar","tense":"condicional","person":"vosotros","fr":"vous donneriez"},
    {"form":"darían","infinitive":"dar","tense":"condicional","person":"ellos/ellas/ustedes","fr":"ils/elles donneraient"},
    {"form":"da","infinitive":"dar","tense":"imperativo","person":"tú (ordre)","fr":"donne ! (ordre à « tu »)"},
    {"form":"dando","infinitive":"dar","tense":"presente_continuo","person":"gérondif","fr":"en train de donner (ou : en donnant)"},
    {"form":"dado","infinitive":"dar","tense":"perfecto","person":"participe","fr":"donné (participe passé)"},
    {"form":"traigo","infinitive":"traer","tense":"presente","person":"yo","fr":"j'apporte"},
    {"form":"traes","infinitive":"traer","tense":"presente","person":"tú","fr":"tu apportes"},
    {"form":"trae","infinitive":"traer","tense":"presente","person":"él/ella/usted","fr":"il/elle apporte"},
    {"form":"traemos","infinitive":"traer","tense":"presente","person":"nosotros","fr":"nous apportons"},
    {"form":"traéis","infinitive":"traer","tense":"presente","person":"vosotros","fr":"vous apportez"},
    {"form":"traen","infinitive":"traer","tense":"presente","person":"ellos/ellas/ustedes","fr":"ils/elles apportent"},
    {"form":"traje","infinitive":"traer","tense":"indefinido","person":"yo","fr":"j'ai apporté"},
    {"form":"trajiste","infinitive":"traer","tense":"indefinido","person":"tú","fr":"tu as apporté"},
    {"form":"trajo","infinitive":"traer","tense":"indefinido","person":"él/ella/usted","fr":"il/elle a apporté"},
    {"form":"trajimos","infinitive":"traer","tense":"indefinido","person":"nosotros","fr":"nous avons apporté"},
    {"form":"trajisteis","infinitive":"traer","tense":"indefinido","person":"vosotros","fr":"vous avez apporté"},
    {"form":"trajeron","infinitive":"traer","tense":"indefinido","person":"ellos/ellas/ustedes","fr":"ils/elles ont apporté"},
    {"form":"traía","infinitive":"traer","tense":"imperfecto","person":"yo / él/ella/usted","fr":"j'apportais / il/elle apportait"},
    {"form":"traías","infinitive":"traer","tense":"imperfecto","person":"tú","fr":"tu apportais"},
    {"form":"traíamos","infinitive":"traer","tense":"imperfecto","person":"nosotros","fr":"nous apportions"},
    {"form":"traíais","infinitive":"traer","tense":"imperfecto","person":"vosotros","fr":"vous apportiez"},
    {"form":"traían","infinitive":"traer","tense":"imperfecto","person":"ellos/ellas/ustedes","fr":"ils/elles apportaient"},
    {"form":"traeré","infinitive":"traer","tense":"futuro","person":"yo","fr":"j'apporterai"},
    {"form":"traerás","infinitive":"traer","tense":"futuro","person":"tú","fr":"tu apporteras"},
    {"form":"traerá","infinitive":"traer","tense":"futuro","person":"él/ella/usted","fr":"il/elle apportera"},
    {"form":"traeremos","infinitive":"traer","tense":"futuro","person":"nosotros","fr":"nous apporterons"},
    {"form":"traeréis","infinitive":"traer","tense":"futuro","person":"vosotros","fr":"vous apporterez"},
    {"form":"traerán","infinitive":"traer","tense":"futuro","person":"ellos/ellas/ustedes","fr":"ils/elles apporteront"},
    {"form":"traería","infinitive":"traer","tense":"condicional","person":"yo / él/ella/usted","fr":"j'apporterais / il/elle apporterait"},
    {"form":"traerías","infinitive":"traer","tense":"condicional","person":"tú","fr":"tu apporterais"},
    {"form":"traeríamos","infinitive":"traer","tense":"condicional","person":"nosotros","fr":"nous apporterions"},
    {"form":"traeríais","infinitive":"traer","tense":"condicional","person":"vosotros","fr":"vous apporteriez"},
    {"form":"traerían","infinitive":"traer","tense":"condicional","person":"ellos/ellas/ustedes","fr":"ils/elles apporteraient"},
    {"form":"trae","infinitive":"traer","tense":"imperativo","person":"tú (ordre)","fr":"apporte ! (ordre à « tu »)"},
    {"form":"trayendo","infinitive":"traer","tense":"presente_continuo","person":"gérondif","fr":"en train d'apporter (ou : en apportant)"},
    {"form":"traído","infinitive":"traer","tense":"perfecto","person":"participe","fr":"apporté (participe passé)"},
    {"form":"oigo","infinitive":"oír","tense":"presente","person":"yo","fr":"j'entends"},
    {"form":"oyes","infinitive":"oír","tense":"presente","person":"tú","fr":"tu entends"},
    {"form":"oye","infinitive":"oír","tense":"presente","person":"él/ella/usted","fr":"il/elle entend"},
    {"form":"oímos","infinitive":"oír","tense":"presente","person":"nosotros","fr":"nous entendons"},
    {"form":"oís","infinitive":"oír","tense":"presente","person":"vosotros","fr":"vous entendez"},
    {"form":"oyen","infinitive":"oír","tense":"presente","person":"ellos/ellas/ustedes","fr":"ils/elles entendent"},
    {"form":"oí","infinitive":"oír","tense":"indefinido","person":"yo","fr":"j'ai entendu"},
    {"form":"oíste","infinitive":"oír","tense":"indefinido","person":"tú","fr":"tu as entendu"},
    {"form":"oyó","infinitive":"oír","tense":"indefinido","person":"él/ella/usted","fr":"il/elle a entendu"},
    {"form":"oímos","infinitive":"oír","tense":"indefinido","person":"nosotros","fr":"nous avons entendu"},
    {"form":"oísteis","infinitive":"oír","tense":"indefinido","person":"vosotros","fr":"vous avez entendu"},
    {"form":"oyeron","infinitive":"oír","tense":"indefinido","person":"ellos/ellas/ustedes","fr":"ils/elles ont entendu"},
    {"form":"oía","infinitive":"oír","tense":"imperfecto","person":"yo / él/ella/usted","fr":"j'entendais / il/elle entendait"},
    {"form":"oías","infinitive":"oír","tense":"imperfecto","person":"tú","fr":"tu entendais"},
    {"form":"oíamos","infinitive":"oír","tense":"imperfecto","person":"nosotros","fr":"nous entendions"},
    {"form":"oíais","infinitive":"oír","tense":"imperfecto","person":"vosotros","fr":"vous entendiez"},
    {"form":"oían","infinitive":"oír","tense":"imperfecto","person":"ellos/ellas/ustedes","fr":"ils/elles entendaient"},
    {"form":"oiré","infinitive":"oír","tense":"futuro","person":"yo","fr":"j'entendrai"},
    {"form":"oirás","infinitive":"oír","tense":"futuro","person":"tú","fr":"tu entendras"},
    {"form":"oirá","infinitive":"oír","tense":"futuro","person":"él/ella/usted","fr":"il/elle entendra"},
    {"form":"oiremos","infinitive":"oír","tense":"futuro","person":"nosotros","fr":"nous entendrons"},
    {"form":"oiréis","infinitive":"oír","tense":"futuro","person":"vosotros","fr":"vous entendrez"},
    {"form":"oirán","infinitive":"oír","tense":"futuro","person":"ellos/ellas/ustedes","fr":"ils/elles entendront"},
    {"form":"oiría","infinitive":"oír","tense":"condicional","person":"yo / él/ella/usted","fr":"j'entendrais / il/elle entendrait"},
    {"form":"oirías","infinitive":"oír","tense":"condicional","person":"tú","fr":"tu entendrais"},
    {"form":"oiríamos","infinitive":"oír","tense":"condicional","person":"nosotros","fr":"nous entendrions"},
    {"form":"oiríais","infinitive":"oír","tense":"condicional","person":"vosotros","fr":"vous entendriez"},
    {"form":"oirían","infinitive":"oír","tense":"condicional","person":"ellos/ellas/ustedes","fr":"ils/elles entendraient"},
    {"form":"oye","infinitive":"oír","tense":"imperativo","person":"tú (ordre)","fr":"entends ! (ordre à « tu »)"},
    {"form":"oyendo","infinitive":"oír","tense":"presente_continuo","person":"gérondif","fr":"en train d'entendre (ou : en entendant)"},
    {"form":"oído","infinitive":"oír","tense":"perfecto","person":"participe","fr":"entendu (participe passé)"},
    {"form":"caigo","infinitive":"caer","tense":"presente","person":"yo","fr":"je tombe"},
    {"form":"caes","infinitive":"caer","tense":"presente","person":"tú","fr":"tu tombes"},
    {"form":"cae","infinitive":"caer","tense":"presente","person":"él/ella/usted","fr":"il/elle tombe"},
    {"form":"caemos","infinitive":"caer","tense":"presente","person":"nosotros","fr":"nous tombons"},
    {"form":"caéis","infinitive":"caer","tense":"presente","person":"vosotros","fr":"vous tombez"},
    {"form":"caen","infinitive":"caer","tense":"presente","person":"ellos/ellas/ustedes","fr":"ils/elles tombent"},
    {"form":"caí","infinitive":"caer","tense":"indefinido","person":"yo","fr":"je suis tombé(e)"},
    {"form":"caíste","infinitive":"caer","tense":"indefinido","person":"tú","fr":"tu es tombé(e)"},
    {"form":"cayó","infinitive":"caer","tense":"indefinido","person":"él/ella/usted","fr":"il/elle est tombé(e)"},
    {"form":"caímos","infinitive":"caer","tense":"indefinido","person":"nosotros","fr":"nous sommes tombé(e)s"},
    {"form":"caísteis","infinitive":"caer","tense":"indefinido","person":"vosotros","fr":"vous êtes tombé(e)s"},
    {"form":"cayeron","infinitive":"caer","tense":"indefinido","person":"ellos/ellas/ustedes","fr":"ils/elles sont tombé(e)s"},
    {"form":"caía","infinitive":"caer","tense":"imperfecto","person":"yo / él/ella/usted","fr":"je tombais / il/elle tombait"},
    {"form":"caías","infinitive":"caer","tense":"imperfecto","person":"tú","fr":"tu tombais"},
    {"form":"caíamos","infinitive":"caer","tense":"imperfecto","person":"nosotros","fr":"nous tombions"},
    {"form":"caíais","infinitive":"caer","tense":"imperfecto","person":"vosotros","fr":"vous tombiez"},
    {"form":"caían","infinitive":"caer","tense":"imperfecto","person":"ellos/ellas/ustedes","fr":"ils/elles tombaient"},
    {"form":"caeré","infinitive":"caer","tense":"futuro","person":"yo","fr":"je tomberai"},
    {"form":"caerás","infinitive":"caer","tense":"futuro","person":"tú","fr":"tu tomberas"},
    {"form":"caerá","infinitive":"caer","tense":"futuro","person":"él/ella/usted","fr":"il/elle tombera"},
    {"form":"caeremos","infinitive":"caer","tense":"futuro","person":"nosotros","fr":"nous tomberons"},
    {"form":"caeréis","infinitive":"caer","tense":"futuro","person":"vosotros","fr":"vous tomberez"},
    {"form":"caerán","infinitive":"caer","tense":"futuro","person":"ellos/ellas/ustedes","fr":"ils/elles tomberont"},
    {"form":"caería","infinitive":"caer","tense":"condicional","person":"yo / él/ella/usted","fr":"je tomberais / il/elle tomberait"},
    {"form":"caerías","infinitive":"caer","tense":"condicional","person":"tú","fr":"tu tomberais"},
    {"form":"caeríamos","infinitive":"caer","tense":"condicional","person":"nosotros","fr":"nous tomberions"},
    {"form":"caeríais","infinitive":"caer","tense":"condicional","person":"vosotros","fr":"vous tomberiez"},
    {"form":"caerían","infinitive":"caer","tense":"condicional","person":"ellos/ellas/ustedes","fr":"ils/elles tomberaient"},
    {"form":"cae","infinitive":"caer","tense":"imperativo","person":"tú (ordre)","fr":"tombe ! (ordre à « tu »)"},
    {"form":"cayendo","infinitive":"caer","tense":"presente_continuo","person":"gérondif","fr":"en train de tomber (ou : en tombant)"},
    {"form":"caído","infinitive":"caer","tense":"perfecto","person":"participe","fr":"tombé (participe passé)"},
    {"form":"conozco","infinitive":"conocer","tense":"presente","person":"yo","fr":"je connais"},
    {"form":"conoces","infinitive":"conocer","tense":"presente","person":"tú","fr":"tu connais"},
    {"form":"conoce","infinitive":"conocer","tense":"presente","person":"él/ella/usted","fr":"il/elle connaît"},
    {"form":"conocemos","infinitive":"conocer","tense":"presente","person":"nosotros","fr":"nous connaissons"},
    {"form":"conocéis","infinitive":"conocer","tense":"presente","person":"vosotros","fr":"vous connaissez"},
    {"form":"conocen","infinitive":"conocer","tense":"presente","person":"ellos/ellas/ustedes","fr":"ils/elles connaissent"},
    {"form":"conocí","infinitive":"conocer","tense":"indefinido","person":"yo","fr":"j'ai connu"},
    {"form":"conociste","infinitive":"conocer","tense":"indefinido","person":"tú","fr":"tu as connu"},
    {"form":"conoció","infinitive":"conocer","tense":"indefinido","person":"él/ella/usted","fr":"il/elle a connu"},
    {"form":"conocimos","infinitive":"conocer","tense":"indefinido","person":"nosotros","fr":"nous avons connu"},
    {"form":"conocisteis","infinitive":"conocer","tense":"indefinido","person":"vosotros","fr":"vous avez connu"},
    {"form":"conocieron","infinitive":"conocer","tense":"indefinido","person":"ellos/ellas/ustedes","fr":"ils/elles ont connu"},
    {"form":"conocía","infinitive":"conocer","tense":"imperfecto","person":"yo / él/ella/usted","fr":"je connaissais / il/elle connaissait"},
    {"form":"conocías","infinitive":"conocer","tense":"imperfecto","person":"tú","fr":"tu connaissais"},
    {"form":"conocíamos","infinitive":"conocer","tense":"imperfecto","person":"nosotros","fr":"nous connaissions"},
    {"form":"conocíais","infinitive":"conocer","tense":"imperfecto","person":"vosotros","fr":"vous connaissiez"},
    {"form":"conocían","infinitive":"conocer","tense":"imperfecto","person":"ellos/ellas/ustedes","fr":"ils/elles connaissaient"},
    {"form":"conoceré","infinitive":"conocer","tense":"futuro","person":"yo","fr":"je connaîtrai"},
    {"form":"conocerás","infinitive":"conocer","tense":"futuro","person":"tú","fr":"tu connaîtras"},
    {"form":"conocerá","infinitive":"conocer","tense":"futuro","person":"él/ella/usted","fr":"il/elle connaîtra"},
    {"form":"conoceremos","infinitive":"conocer","tense":"futuro","person":"nosotros","fr":"nous connaîtrons"},
    {"form":"conoceréis","infinitive":"conocer","tense":"futuro","person":"vosotros","fr":"vous connaîtrez"},
    {"form":"conocerán","infinitive":"conocer","tense":"futuro","person":"ellos/ellas/ustedes","fr":"ils/elles connaîtront"},
    {"form":"conocería","infinitive":"conocer","tense":"condicional","person":"yo / él/ella/usted","fr":"je connaîtrais / il/elle connaîtrait"},
    {"form":"conocerías","infinitive":"conocer","tense":"condicional","person":"tú","fr":"tu connaîtrais"},
    {"form":"conoceríamos","infinitive":"conocer","tense":"condicional","person":"nosotros","fr":"nous connaîtrions"},
    {"form":"conoceríais","infinitive":"conocer","tense":"condicional","person":"vosotros","fr":"vous connaîtriez"},
    {"form":"conocerían","infinitive":"conocer","tense":"condicional","person":"ellos/ellas/ustedes","fr":"ils/elles connaîtraient"},
    {"form":"conoce","infinitive":"conocer","tense":"imperativo","person":"tú (ordre)","fr":"connais ! (ordre à « tu »)"},
    {"form":"conociendo","infinitive":"conocer","tense":"presente_continuo","person":"gérondif","fr":"en train de connaître (ou : en connaissant)"},
    {"form":"conocido","infinitive":"conocer","tense":"perfecto","person":"participe","fr":"connu (participe passé)"},
    {"form":"duermo","infinitive":"dormir","tense":"presente","person":"yo","fr":"je dors"},
    {"form":"duermes","infinitive":"dormir","tense":"presente","person":"tú","fr":"tu dors"},
    {"form":"duerme","infinitive":"dormir","tense":"presente","person":"él/ella/usted","fr":"il/elle dort"},
    {"form":"dormimos","infinitive":"dormir","tense":"presente","person":"nosotros","fr":"nous dormons"},
    {"form":"dormís","infinitive":"dormir","tense":"presente","person":"vosotros","fr":"vous dormez"},
    {"form":"duermen","infinitive":"dormir","tense":"presente","person":"ellos/ellas/ustedes","fr":"ils/elles dorment"},
    {"form":"dormí","infinitive":"dormir","tense":"indefinido","person":"yo","fr":"j'ai dormi"},
    {"form":"dormiste","infinitive":"dormir","tense":"indefinido","person":"tú","fr":"tu as dormi"},
    {"form":"durmió","infinitive":"dormir","tense":"indefinido","person":"él/ella/usted","fr":"il/elle a dormi"},
    {"form":"dormimos","infinitive":"dormir","tense":"indefinido","person":"nosotros","fr":"nous avons dormi"},
    {"form":"dormisteis","infinitive":"dormir","tense":"indefinido","person":"vosotros","fr":"vous avez dormi"},
    {"form":"durmieron","infinitive":"dormir","tense":"indefinido","person":"ellos/ellas/ustedes","fr":"ils/elles ont dormi"},
    {"form":"dormía","infinitive":"dormir","tense":"imperfecto","person":"yo / él/ella/usted","fr":"je dormais / il/elle dormait"},
    {"form":"dormías","infinitive":"dormir","tense":"imperfecto","person":"tú","fr":"tu dormais"},
    {"form":"dormíamos","infinitive":"dormir","tense":"imperfecto","person":"nosotros","fr":"nous dormions"},
    {"form":"dormíais","infinitive":"dormir","tense":"imperfecto","person":"vosotros","fr":"vous dormiez"},
    {"form":"dormían","infinitive":"dormir","tense":"imperfecto","person":"ellos/ellas/ustedes","fr":"ils/elles dormaient"},
    {"form":"dormiré","infinitive":"dormir","tense":"futuro","person":"yo","fr":"je dormirai"},
    {"form":"dormirás","infinitive":"dormir","tense":"futuro","person":"tú","fr":"tu dormiras"},
    {"form":"dormirá","infinitive":"dormir","tense":"futuro","person":"él/ella/usted","fr":"il/elle dormira"},
    {"form":"dormiremos","infinitive":"dormir","tense":"futuro","person":"nosotros","fr":"nous dormirons"},
    {"form":"dormiréis","infinitive":"dormir","tense":"futuro","person":"vosotros","fr":"vous dormirez"},
    {"form":"dormirán","infinitive":"dormir","tense":"futuro","person":"ellos/ellas/ustedes","fr":"ils/elles dormiront"},
    {"form":"dormiría","infinitive":"dormir","tense":"condicional","person":"yo / él/ella/usted","fr":"je dormirais / il/elle dormirait"},
    {"form":"dormirías","infinitive":"dormir","tense":"condicional","person":"tú","fr":"tu dormirais"},
    {"form":"dormiríamos","infinitive":"dormir","tense":"condicional","person":"nosotros","fr":"nous dormirions"},
    {"form":"dormiríais","infinitive":"dormir","tense":"condicional","person":"vosotros","fr":"vous dormiriez"},
    {"form":"dormirían","infinitive":"dormir","tense":"condicional","person":"ellos/ellas/ustedes","fr":"ils/elles dormiraient"},
    {"form":"duerme","infinitive":"dormir","tense":"imperativo","person":"tú (ordre)","fr":"dors ! (ordre à « tu »)"},
    {"form":"durmiendo","infinitive":"dormir","tense":"presente_continuo","person":"gérondif","fr":"en train de dormir (ou : en dormant)"},
    {"form":"dormido","infinitive":"dormir","tense":"perfecto","person":"participe","fr":"dormi (participe passé)"},
    {"form":"pido","infinitive":"pedir","tense":"presente","person":"yo","fr":"je demande (ou : commander)"},
    {"form":"pides","infinitive":"pedir","tense":"presente","person":"tú","fr":"tu demandes (ou : commander)"},
    {"form":"pide","infinitive":"pedir","tense":"presente","person":"él/ella/usted","fr":"il/elle demande (ou : commander)"},
    {"form":"pedimos","infinitive":"pedir","tense":"presente","person":"nosotros","fr":"nous demandons (ou : commander)"},
    {"form":"pedís","infinitive":"pedir","tense":"presente","person":"vosotros","fr":"vous demandez (ou : commander)"},
    {"form":"piden","infinitive":"pedir","tense":"presente","person":"ellos/ellas/ustedes","fr":"ils/elles demandent (ou : commander)"},
    {"form":"pedí","infinitive":"pedir","tense":"indefinido","person":"yo","fr":"j'ai demandé"},
    {"form":"pediste","infinitive":"pedir","tense":"indefinido","person":"tú","fr":"tu as demandé"},
    {"form":"pidió","infinitive":"pedir","tense":"indefinido","person":"él/ella/usted","fr":"il/elle a demandé"},
    {"form":"pedimos","infinitive":"pedir","tense":"indefinido","person":"nosotros","fr":"nous avons demandé"},
    {"form":"pedisteis","infinitive":"pedir","tense":"indefinido","person":"vosotros","fr":"vous avez demandé"},
    {"form":"pidieron","infinitive":"pedir","tense":"indefinido","person":"ellos/ellas/ustedes","fr":"ils/elles ont demandé"},
    {"form":"pedía","infinitive":"pedir","tense":"imperfecto","person":"yo / él/ella/usted","fr":"je demandais / il/elle demandait"},
    {"form":"pedías","infinitive":"pedir","tense":"imperfecto","person":"tú","fr":"tu demandais"},
    {"form":"pedíamos","infinitive":"pedir","tense":"imperfecto","person":"nosotros","fr":"nous demandions"},
    {"form":"pedíais","infinitive":"pedir","tense":"imperfecto","person":"vosotros","fr":"vous demandiez"},
    {"form":"pedían","infinitive":"pedir","tense":"imperfecto","person":"ellos/ellas/ustedes","fr":"ils/elles demandaient"},
    {"form":"pediré","infinitive":"pedir","tense":"futuro","person":"yo","fr":"je demanderai"},
    {"form":"pedirás","infinitive":"pedir","tense":"futuro","person":"tú","fr":"tu demanderas"},
    {"form":"pedirá","infinitive":"pedir","tense":"futuro","person":"él/ella/usted","fr":"il/elle demandera"},
    {"form":"pediremos","infinitive":"pedir","tense":"futuro","person":"nosotros","fr":"nous demanderons"},
    {"form":"pediréis","infinitive":"pedir","tense":"futuro","person":"vosotros","fr":"vous demanderez"},
    {"form":"pedirán","infinitive":"pedir","tense":"futuro","person":"ellos/ellas/ustedes","fr":"ils/elles demanderont"},
    {"form":"pediría","infinitive":"pedir","tense":"condicional","person":"yo / él/ella/usted","fr":"je demanderais / il/elle demanderait"},
    {"form":"pedirías","infinitive":"pedir","tense":"condicional","person":"tú","fr":"tu demanderais"},
    {"form":"pediríamos","infinitive":"pedir","tense":"condicional","person":"nosotros","fr":"nous demanderions"},
    {"form":"pediríais","infinitive":"pedir","tense":"condicional","person":"vosotros","fr":"vous demanderiez"},
    {"form":"pedirían","infinitive":"pedir","tense":"condicional","person":"ellos/ellas/ustedes","fr":"ils/elles demanderaient"},
    {"form":"pide","infinitive":"pedir","tense":"imperativo","person":"tú (ordre)","fr":"demande ! (ordre à « tu »)"},
    {"form":"pidiendo","infinitive":"pedir","tense":"presente_continuo","person":"gérondif","fr":"en train de demander (ou : en demandant)"},
    {"form":"pedido","infinitive":"pedir","tense":"perfecto","person":"participe","fr":"demandé (participe passé)"},
    {"form":"sigo","infinitive":"seguir","tense":"presente","person":"yo","fr":"je suis (ou : continuer)"},
    {"form":"sigues","infinitive":"seguir","tense":"presente","person":"tú","fr":"tu suis (ou : continuer)"},
    {"form":"sigue","infinitive":"seguir","tense":"presente","person":"él/ella/usted","fr":"il/elle suit (ou : continuer)"},
    {"form":"seguimos","infinitive":"seguir","tense":"presente","person":"nosotros","fr":"nous suivons (ou : continuer)"},
    {"form":"seguís","infinitive":"seguir","tense":"presente","person":"vosotros","fr":"vous suivez (ou : continuer)"},
    {"form":"siguen","infinitive":"seguir","tense":"presente","person":"ellos/ellas/ustedes","fr":"ils/elles suivent (ou : continuer)"},
    {"form":"seguí","infinitive":"seguir","tense":"indefinido","person":"yo","fr":"j'ai suivi"},
    {"form":"seguiste","infinitive":"seguir","tense":"indefinido","person":"tú","fr":"tu as suivi"},
    {"form":"siguió","infinitive":"seguir","tense":"indefinido","person":"él/ella/usted","fr":"il/elle a suivi"},
    {"form":"seguimos","infinitive":"seguir","tense":"indefinido","person":"nosotros","fr":"nous avons suivi"},
    {"form":"seguisteis","infinitive":"seguir","tense":"indefinido","person":"vosotros","fr":"vous avez suivi"},
    {"form":"siguieron","infinitive":"seguir","tense":"indefinido","person":"ellos/ellas/ustedes","fr":"ils/elles ont suivi"},
    {"form":"seguía","infinitive":"seguir","tense":"imperfecto","person":"yo / él/ella/usted","fr":"je suivais / il/elle suivait"},
    {"form":"seguías","infinitive":"seguir","tense":"imperfecto","person":"tú","fr":"tu suivais"},
    {"form":"seguíamos","infinitive":"seguir","tense":"imperfecto","person":"nosotros","fr":"nous suivions"},
    {"form":"seguíais","infinitive":"seguir","tense":"imperfecto","person":"vosotros","fr":"vous suiviez"},
    {"form":"seguían","infinitive":"seguir","tense":"imperfecto","person":"ellos/ellas/ustedes","fr":"ils/elles suivaient"},
    {"form":"seguiré","infinitive":"seguir","tense":"futuro","person":"yo","fr":"je suivrai"},
    {"form":"seguirás","infinitive":"seguir","tense":"futuro","person":"tú","fr":"tu suivras"},
    {"form":"seguirá","infinitive":"seguir","tense":"futuro","person":"él/ella/usted","fr":"il/elle suivra"},
    {"form":"seguiremos","infinitive":"seguir","tense":"futuro","person":"nosotros","fr":"nous suivrons"},
    {"form":"seguiréis","infinitive":"seguir","tense":"futuro","person":"vosotros","fr":"vous suivrez"},
    {"form":"seguirán","infinitive":"seguir","tense":"futuro","person":"ellos/ellas/ustedes","fr":"ils/elles suivront"},
    {"form":"seguiría","infinitive":"seguir","tense":"condicional","person":"yo / él/ella/usted","fr":"je suivrais / il/elle suivrait"},
    {"form":"seguirías","infinitive":"seguir","tense":"condicional","person":"tú","fr":"tu suivrais"},
    {"form":"seguiríamos","infinitive":"seguir","tense":"condicional","person":"nosotros","fr":"nous suivrions"},
    {"form":"seguiríais","infinitive":"seguir","tense":"condicional","person":"vosotros","fr":"vous suivriez"},
    {"form":"seguirían","infinitive":"seguir","tense":"condicional","person":"ellos/ellas/ustedes","fr":"ils/elles suivraient"},
    {"form":"sigue","infinitive":"seguir","tense":"imperativo","person":"tú (ordre)","fr":"suis ! (ordre à « tu »)"},
    {"form":"siguiendo","infinitive":"seguir","tense":"presente_continuo","person":"gérondif","fr":"en train de suivre (ou : en suivant)"},
    {"form":"seguido","infinitive":"seguir","tense":"perfecto","person":"participe","fr":"suivi (participe passé)"},
    {"form":"vuelvo","infinitive":"volver","tense":"presente","person":"yo","fr":"je reviens"},
    {"form":"vuelves","infinitive":"volver","tense":"presente","person":"tú","fr":"tu reviens"},
    {"form":"vuelve","infinitive":"volver","tense":"presente","person":"él/ella/usted","fr":"il/elle revient"},
    {"form":"volvemos","infinitive":"volver","tense":"presente","person":"nosotros","fr":"nous revenons"},
    {"form":"volvéis","infinitive":"volver","tense":"presente","person":"vosotros","fr":"vous revenez"},
    {"form":"vuelven","infinitive":"volver","tense":"presente","person":"ellos/ellas/ustedes","fr":"ils/elles reviennent"},
    {"form":"volví","infinitive":"volver","tense":"indefinido","person":"yo","fr":"je suis revenu(e)"},
    {"form":"volviste","infinitive":"volver","tense":"indefinido","person":"tú","fr":"tu es revenu(e)"},
    {"form":"volvió","infinitive":"volver","tense":"indefinido","person":"él/ella/usted","fr":"il/elle est revenu(e)"},
    {"form":"volvimos","infinitive":"volver","tense":"indefinido","person":"nosotros","fr":"nous sommes revenu(e)s"},
    {"form":"volvisteis","infinitive":"volver","tense":"indefinido","person":"vosotros","fr":"vous êtes revenu(e)s"},
    {"form":"volvieron","infinitive":"volver","tense":"indefinido","person":"ellos/ellas/ustedes","fr":"ils/elles sont revenu(e)s"},
    {"form":"volvía","infinitive":"volver","tense":"imperfecto","person":"yo / él/ella/usted","fr":"je revenais / il/elle revenait"},
    {"form":"volvías","infinitive":"volver","tense":"imperfecto","person":"tú","fr":"tu revenais"},
    {"form":"volvíamos","infinitive":"volver","tense":"imperfecto","person":"nosotros","fr":"nous revenions"},
    {"form":"volvíais","infinitive":"volver","tense":"imperfecto","person":"vosotros","fr":"vous reveniez"},
    {"form":"volvían","infinitive":"volver","tense":"imperfecto","person":"ellos/ellas/ustedes","fr":"ils/elles revenaient"},
    {"form":"volveré","infinitive":"volver","tense":"futuro","person":"yo","fr":"je reviendrai"},
    {"form":"volverás","infinitive":"volver","tense":"futuro","person":"tú","fr":"tu reviendras"},
    {"form":"volverá","infinitive":"volver","tense":"futuro","person":"él/ella/usted","fr":"il/elle reviendra"},
    {"form":"volveremos","infinitive":"volver","tense":"futuro","person":"nosotros","fr":"nous reviendrons"},
    {"form":"volveréis","infinitive":"volver","tense":"futuro","person":"vosotros","fr":"vous reviendrez"},
    {"form":"volverán","infinitive":"volver","tense":"futuro","person":"ellos/ellas/ustedes","fr":"ils/elles reviendront"},
    {"form":"volvería","infinitive":"volver","tense":"condicional","person":"yo / él/ella/usted","fr":"je reviendrais / il/elle reviendrait"},
    {"form":"volverías","infinitive":"volver","tense":"condicional","person":"tú","fr":"tu reviendrais"},
    {"form":"volveríamos","infinitive":"volver","tense":"condicional","person":"nosotros","fr":"nous reviendrions"},
    {"form":"volveríais","infinitive":"volver","tense":"condicional","person":"vosotros","fr":"vous reviendriez"},
    {"form":"volverían","infinitive":"volver","tense":"condicional","person":"ellos/ellas/ustedes","fr":"ils/elles reviendraient"},
    {"form":"vuelve","infinitive":"volver","tense":"imperativo","person":"tú (ordre)","fr":"reviens ! (ordre à « tu »)"},
    {"form":"volviendo","infinitive":"volver","tense":"presente_continuo","person":"gérondif","fr":"en train de revenir (ou : en revenant)"},
    {"form":"vuelto","infinitive":"volver","tense":"perfecto","person":"participe","fr":"revenu (participe passé)"},
    {"form":"encuentro","infinitive":"encontrar","tense":"presente","person":"yo","fr":"je trouve"},
    {"form":"encuentras","infinitive":"encontrar","tense":"presente","person":"tú","fr":"tu trouves"},
    {"form":"encuentra","infinitive":"encontrar","tense":"presente","person":"él/ella/usted","fr":"il/elle trouve"},
    {"form":"encontramos","infinitive":"encontrar","tense":"presente","person":"nosotros","fr":"nous trouvons"},
    {"form":"encontráis","infinitive":"encontrar","tense":"presente","person":"vosotros","fr":"vous trouvez"},
    {"form":"encuentran","infinitive":"encontrar","tense":"presente","person":"ellos/ellas/ustedes","fr":"ils/elles trouvent"},
    {"form":"encontré","infinitive":"encontrar","tense":"indefinido","person":"yo","fr":"j'ai trouvé"},
    {"form":"encontraste","infinitive":"encontrar","tense":"indefinido","person":"tú","fr":"tu as trouvé"},
    {"form":"encontró","infinitive":"encontrar","tense":"indefinido","person":"él/ella/usted","fr":"il/elle a trouvé"},
    {"form":"encontramos","infinitive":"encontrar","tense":"indefinido","person":"nosotros","fr":"nous avons trouvé"},
    {"form":"encontrasteis","infinitive":"encontrar","tense":"indefinido","person":"vosotros","fr":"vous avez trouvé"},
    {"form":"encontraron","infinitive":"encontrar","tense":"indefinido","person":"ellos/ellas/ustedes","fr":"ils/elles ont trouvé"},
    {"form":"encontraba","infinitive":"encontrar","tense":"imperfecto","person":"yo / él/ella/usted","fr":"je trouvais / il/elle trouvait"},
    {"form":"encontrabas","infinitive":"encontrar","tense":"imperfecto","person":"tú","fr":"tu trouvais"},
    {"form":"encontrábamos","infinitive":"encontrar","tense":"imperfecto","person":"nosotros","fr":"nous trouvions"},
    {"form":"encontrabais","infinitive":"encontrar","tense":"imperfecto","person":"vosotros","fr":"vous trouviez"},
    {"form":"encontraban","infinitive":"encontrar","tense":"imperfecto","person":"ellos/ellas/ustedes","fr":"ils/elles trouvaient"},
    {"form":"encontraré","infinitive":"encontrar","tense":"futuro","person":"yo","fr":"je trouverai"},
    {"form":"encontrarás","infinitive":"encontrar","tense":"futuro","person":"tú","fr":"tu trouveras"},
    {"form":"encontrará","infinitive":"encontrar","tense":"futuro","person":"él/ella/usted","fr":"il/elle trouvera"},
    {"form":"encontraremos","infinitive":"encontrar","tense":"futuro","person":"nosotros","fr":"nous trouverons"},
    {"form":"encontraréis","infinitive":"encontrar","tense":"futuro","person":"vosotros","fr":"vous trouverez"},
    {"form":"encontrarán","infinitive":"encontrar","tense":"futuro","person":"ellos/ellas/ustedes","fr":"ils/elles trouveront"},
    {"form":"encontraría","infinitive":"encontrar","tense":"condicional","person":"yo / él/ella/usted","fr":"je trouverais / il/elle trouverait"},
    {"form":"encontrarías","infinitive":"encontrar","tense":"condicional","person":"tú","fr":"tu trouverais"},
    {"form":"encontraríamos","infinitive":"encontrar","tense":"condicional","person":"nosotros","fr":"nous trouverions"},
    {"form":"encontraríais","infinitive":"encontrar","tense":"condicional","person":"vosotros","fr":"vous trouveriez"},
    {"form":"encontrarían","infinitive":"encontrar","tense":"condicional","person":"ellos/ellas/ustedes","fr":"ils/elles trouveraient"},
    {"form":"encuentra","infinitive":"encontrar","tense":"imperativo","person":"tú (ordre)","fr":"trouve ! (ordre à « tu »)"},
    {"form":"encontrando","infinitive":"encontrar","tense":"presente_continuo","person":"gérondif","fr":"en train de trouver (ou : en trouvant)"},
    {"form":"encontrado","infinitive":"encontrar","tense":"perfecto","person":"participe","fr":"trouvé (participe passé)"},
    {"form":"pienso","infinitive":"pensar","tense":"presente","person":"yo","fr":"je pense"},
    {"form":"piensas","infinitive":"pensar","tense":"presente","person":"tú","fr":"tu penses"},
    {"form":"piensa","infinitive":"pensar","tense":"presente","person":"él/ella/usted","fr":"il/elle pense"},
    {"form":"pensamos","infinitive":"pensar","tense":"presente","person":"nosotros","fr":"nous pensons"},
    {"form":"pensáis","infinitive":"pensar","tense":"presente","person":"vosotros","fr":"vous pensez"},
    {"form":"piensan","infinitive":"pensar","tense":"presente","person":"ellos/ellas/ustedes","fr":"ils/elles pensent"},
    {"form":"pensé","infinitive":"pensar","tense":"indefinido","person":"yo","fr":"j'ai pensé"},
    {"form":"pensaste","infinitive":"pensar","tense":"indefinido","person":"tú","fr":"tu as pensé"},
    {"form":"pensó","infinitive":"pensar","tense":"indefinido","person":"él/ella/usted","fr":"il/elle a pensé"},
    {"form":"pensamos","infinitive":"pensar","tense":"indefinido","person":"nosotros","fr":"nous avons pensé"},
    {"form":"pensasteis","infinitive":"pensar","tense":"indefinido","person":"vosotros","fr":"vous avez pensé"},
    {"form":"pensaron","infinitive":"pensar","tense":"indefinido","person":"ellos/ellas/ustedes","fr":"ils/elles ont pensé"},
    {"form":"pensaba","infinitive":"pensar","tense":"imperfecto","person":"yo / él/ella/usted","fr":"je pensais / il/elle pensait"},
    {"form":"pensabas","infinitive":"pensar","tense":"imperfecto","person":"tú","fr":"tu pensais"},
    {"form":"pensábamos","infinitive":"pensar","tense":"imperfecto","person":"nosotros","fr":"nous pensions"},
    {"form":"pensabais","infinitive":"pensar","tense":"imperfecto","person":"vosotros","fr":"vous pensiez"},
    {"form":"pensaban","infinitive":"pensar","tense":"imperfecto","person":"ellos/ellas/ustedes","fr":"ils/elles pensaient"},
    {"form":"pensaré","infinitive":"pensar","tense":"futuro","person":"yo","fr":"je penserai"},
    {"form":"pensarás","infinitive":"pensar","tense":"futuro","person":"tú","fr":"tu penseras"},
    {"form":"pensará","infinitive":"pensar","tense":"futuro","person":"él/ella/usted","fr":"il/elle pensera"},
    {"form":"pensaremos","infinitive":"pensar","tense":"futuro","person":"nosotros","fr":"nous penserons"},
    {"form":"pensaréis","infinitive":"pensar","tense":"futuro","person":"vosotros","fr":"vous penserez"},
    {"form":"pensarán","infinitive":"pensar","tense":"futuro","person":"ellos/ellas/ustedes","fr":"ils/elles penseront"},
    {"form":"pensaría","infinitive":"pensar","tense":"condicional","person":"yo / él/ella/usted","fr":"je penserais / il/elle penserait"},
    {"form":"pensarías","infinitive":"pensar","tense":"condicional","person":"tú","fr":"tu penserais"},
    {"form":"pensaríamos","infinitive":"pensar","tense":"condicional","person":"nosotros","fr":"nous penserions"},
    {"form":"pensaríais","infinitive":"pensar","tense":"condicional","person":"vosotros","fr":"vous penseriez"},
    {"form":"pensarían","infinitive":"pensar","tense":"condicional","person":"ellos/ellas/ustedes","fr":"ils/elles penseraient"},
    {"form":"piensa","infinitive":"pensar","tense":"imperativo","person":"tú (ordre)","fr":"pense ! (ordre à « tu »)"},
    {"form":"pensando","infinitive":"pensar","tense":"presente_continuo","person":"gérondif","fr":"en train de penser (ou : en pensant)"},
    {"form":"pensado","infinitive":"pensar","tense":"perfecto","person":"participe","fr":"pensé (participe passé)"},
    {"form":"empiezo","infinitive":"empezar","tense":"presente","person":"yo","fr":"je commence"},
    {"form":"empiezas","infinitive":"empezar","tense":"presente","person":"tú","fr":"tu commences"},
    {"form":"empieza","infinitive":"empezar","tense":"presente","person":"él/ella/usted","fr":"il/elle commence"},
    {"form":"empezamos","infinitive":"empezar","tense":"presente","person":"nosotros","fr":"nous commençons"},
    {"form":"empezáis","infinitive":"empezar","tense":"presente","person":"vosotros","fr":"vous commencez"},
    {"form":"empiezan","infinitive":"empezar","tense":"presente","person":"ellos/ellas/ustedes","fr":"ils/elles commencent"},
    {"form":"empecé","infinitive":"empezar","tense":"indefinido","person":"yo","fr":"j'ai commencé"},
    {"form":"empezaste","infinitive":"empezar","tense":"indefinido","person":"tú","fr":"tu as commencé"},
    {"form":"empezó","infinitive":"empezar","tense":"indefinido","person":"él/ella/usted","fr":"il/elle a commencé"},
    {"form":"empezamos","infinitive":"empezar","tense":"indefinido","person":"nosotros","fr":"nous avons commencé"},
    {"form":"empezasteis","infinitive":"empezar","tense":"indefinido","person":"vosotros","fr":"vous avez commencé"},
    {"form":"empezaron","infinitive":"empezar","tense":"indefinido","person":"ellos/ellas/ustedes","fr":"ils/elles ont commencé"},
    {"form":"empezaba","infinitive":"empezar","tense":"imperfecto","person":"yo / él/ella/usted","fr":"je commençais / il/elle commençait"},
    {"form":"empezabas","infinitive":"empezar","tense":"imperfecto","person":"tú","fr":"tu commençais"},
    {"form":"empezábamos","infinitive":"empezar","tense":"imperfecto","person":"nosotros","fr":"nous commencions"},
    {"form":"empezabais","infinitive":"empezar","tense":"imperfecto","person":"vosotros","fr":"vous commenciez"},
    {"form":"empezaban","infinitive":"empezar","tense":"imperfecto","person":"ellos/ellas/ustedes","fr":"ils/elles commençaient"},
    {"form":"empezaré","infinitive":"empezar","tense":"futuro","person":"yo","fr":"je commencerai"},
    {"form":"empezarás","infinitive":"empezar","tense":"futuro","person":"tú","fr":"tu commenceras"},
    {"form":"empezará","infinitive":"empezar","tense":"futuro","person":"él/ella/usted","fr":"il/elle commencera"},
    {"form":"empezaremos","infinitive":"empezar","tense":"futuro","person":"nosotros","fr":"nous commencerons"},
    {"form":"empezaréis","infinitive":"empezar","tense":"futuro","person":"vosotros","fr":"vous commencerez"},
    {"form":"empezarán","infinitive":"empezar","tense":"futuro","person":"ellos/ellas/ustedes","fr":"ils/elles commenceront"},
    {"form":"empezaría","infinitive":"empezar","tense":"condicional","person":"yo / él/ella/usted","fr":"je commencerais / il/elle commencerait"},
    {"form":"empezarías","infinitive":"empezar","tense":"condicional","person":"tú","fr":"tu commencerais"},
    {"form":"empezaríamos","infinitive":"empezar","tense":"condicional","person":"nosotros","fr":"nous commencerions"},
    {"form":"empezaríais","infinitive":"empezar","tense":"condicional","person":"vosotros","fr":"vous commenceriez"},
    {"form":"empezarían","infinitive":"empezar","tense":"condicional","person":"ellos/ellas/ustedes","fr":"ils/elles commenceraient"},
    {"form":"empieza","infinitive":"empezar","tense":"imperativo","person":"tú (ordre)","fr":"commence ! (ordre à « tu »)"},
    {"form":"empezando","infinitive":"empezar","tense":"presente_continuo","person":"gérondif","fr":"en train de commencer (ou : en commençant)"},
    {"form":"empezado","infinitive":"empezar","tense":"perfecto","person":"participe","fr":"commencé (participe passé)"},
    {"form":"prefiero","infinitive":"preferir","tense":"presente","person":"yo","fr":"je préfère"},
    {"form":"prefieres","infinitive":"preferir","tense":"presente","person":"tú","fr":"tu préfères"},
    {"form":"prefiere","infinitive":"preferir","tense":"presente","person":"él/ella/usted","fr":"il/elle préfère"},
    {"form":"preferimos","infinitive":"preferir","tense":"presente","person":"nosotros","fr":"nous préférons"},
    {"form":"preferís","infinitive":"preferir","tense":"presente","person":"vosotros","fr":"vous préférez"},
    {"form":"prefieren","infinitive":"preferir","tense":"presente","person":"ellos/ellas/ustedes","fr":"ils/elles préfèrent"},
    {"form":"preferí","infinitive":"preferir","tense":"indefinido","person":"yo","fr":"j'ai préféré"},
    {"form":"preferiste","infinitive":"preferir","tense":"indefinido","person":"tú","fr":"tu as préféré"},
    {"form":"prefirió","infinitive":"preferir","tense":"indefinido","person":"él/ella/usted","fr":"il/elle a préféré"},
    {"form":"preferimos","infinitive":"preferir","tense":"indefinido","person":"nosotros","fr":"nous avons préféré"},
    {"form":"preferisteis","infinitive":"preferir","tense":"indefinido","person":"vosotros","fr":"vous avez préféré"},
    {"form":"prefirieron","infinitive":"preferir","tense":"indefinido","person":"ellos/ellas/ustedes","fr":"ils/elles ont préféré"},
    {"form":"prefería","infinitive":"preferir","tense":"imperfecto","person":"yo / él/ella/usted","fr":"je préférais / il/elle préférait"},
    {"form":"preferías","infinitive":"preferir","tense":"imperfecto","person":"tú","fr":"tu préférais"},
    {"form":"preferíamos","infinitive":"preferir","tense":"imperfecto","person":"nosotros","fr":"nous préférions"},
    {"form":"preferíais","infinitive":"preferir","tense":"imperfecto","person":"vosotros","fr":"vous préfériez"},
    {"form":"preferían","infinitive":"preferir","tense":"imperfecto","person":"ellos/ellas/ustedes","fr":"ils/elles préféraient"},
    {"form":"preferiré","infinitive":"preferir","tense":"futuro","person":"yo","fr":"je préférerai"},
    {"form":"preferirás","infinitive":"preferir","tense":"futuro","person":"tú","fr":"tu préféreras"},
    {"form":"preferirá","infinitive":"preferir","tense":"futuro","person":"él/ella/usted","fr":"il/elle préférera"},
    {"form":"preferiremos","infinitive":"preferir","tense":"futuro","person":"nosotros","fr":"nous préférerons"},
    {"form":"preferiréis","infinitive":"preferir","tense":"futuro","person":"vosotros","fr":"vous préférerez"},
    {"form":"preferirán","infinitive":"preferir","tense":"futuro","person":"ellos/ellas/ustedes","fr":"ils/elles préféreront"},
    {"form":"preferiría","infinitive":"preferir","tense":"condicional","person":"yo / él/ella/usted","fr":"je préférerais / il/elle préférerait"},
    {"form":"preferirías","infinitive":"preferir","tense":"condicional","person":"tú","fr":"tu préférerais"},
    {"form":"preferiríamos","infinitive":"preferir","tense":"condicional","person":"nosotros","fr":"nous préférerions"},
    {"form":"preferiríais","infinitive":"preferir","tense":"condicional","person":"vosotros","fr":"vous préféreriez"},
    {"form":"preferirían","infinitive":"preferir","tense":"condicional","person":"ellos/ellas/ustedes","fr":"ils/elles préféreraient"},
    {"form":"prefiere","infinitive":"preferir","tense":"imperativo","person":"tú (ordre)","fr":"préfère ! (ordre à « tu »)"},
    {"form":"prefiriendo","infinitive":"preferir","tense":"presente_continuo","person":"gérondif","fr":"en train de préférer (ou : en préférant)"},
    {"form":"preferido","infinitive":"preferir","tense":"perfecto","person":"participe","fr":"préféré (participe passé)"},
    {"form":"juego","infinitive":"jugar","tense":"presente","person":"yo","fr":"je joue"},
    {"form":"juegas","infinitive":"jugar","tense":"presente","person":"tú","fr":"tu joues"},
    {"form":"juega","infinitive":"jugar","tense":"presente","person":"él/ella/usted","fr":"il/elle joue"},
    {"form":"jugamos","infinitive":"jugar","tense":"presente","person":"nosotros","fr":"nous jouons"},
    {"form":"jugáis","infinitive":"jugar","tense":"presente","person":"vosotros","fr":"vous jouez"},
    {"form":"juegan","infinitive":"jugar","tense":"presente","person":"ellos/ellas/ustedes","fr":"ils/elles jouent"},
    {"form":"jugué","infinitive":"jugar","tense":"indefinido","person":"yo","fr":"j'ai joué"},
    {"form":"jugaste","infinitive":"jugar","tense":"indefinido","person":"tú","fr":"tu as joué"},
    {"form":"jugó","infinitive":"jugar","tense":"indefinido","person":"él/ella/usted","fr":"il/elle a joué"},
    {"form":"jugamos","infinitive":"jugar","tense":"indefinido","person":"nosotros","fr":"nous avons joué"},
    {"form":"jugasteis","infinitive":"jugar","tense":"indefinido","person":"vosotros","fr":"vous avez joué"},
    {"form":"jugaron","infinitive":"jugar","tense":"indefinido","person":"ellos/ellas/ustedes","fr":"ils/elles ont joué"},
    {"form":"jugaba","infinitive":"jugar","tense":"imperfecto","person":"yo / él/ella/usted","fr":"je jouais / il/elle jouait"},
    {"form":"jugabas","infinitive":"jugar","tense":"imperfecto","person":"tú","fr":"tu jouais"},
    {"form":"jugábamos","infinitive":"jugar","tense":"imperfecto","person":"nosotros","fr":"nous jouions"},
    {"form":"jugabais","infinitive":"jugar","tense":"imperfecto","person":"vosotros","fr":"vous jouiez"},
    {"form":"jugaban","infinitive":"jugar","tense":"imperfecto","person":"ellos/ellas/ustedes","fr":"ils/elles jouaient"},
    {"form":"jugaré","infinitive":"jugar","tense":"futuro","person":"yo","fr":"je jouerai"},
    {"form":"jugarás","infinitive":"jugar","tense":"futuro","person":"tú","fr":"tu joueras"},
    {"form":"jugará","infinitive":"jugar","tense":"futuro","person":"él/ella/usted","fr":"il/elle jouera"},
    {"form":"jugaremos","infinitive":"jugar","tense":"futuro","person":"nosotros","fr":"nous jouerons"},
    {"form":"jugaréis","infinitive":"jugar","tense":"futuro","person":"vosotros","fr":"vous jouerez"},
    {"form":"jugarán","infinitive":"jugar","tense":"futuro","person":"ellos/ellas/ustedes","fr":"ils/elles joueront"},
    {"form":"jugaría","infinitive":"jugar","tense":"condicional","person":"yo / él/ella/usted","fr":"je jouerais / il/elle jouerait"},
    {"form":"jugarías","infinitive":"jugar","tense":"condicional","person":"tú","fr":"tu jouerais"},
    {"form":"jugaríamos","infinitive":"jugar","tense":"condicional","person":"nosotros","fr":"nous jouerions"},
    {"form":"jugaríais","infinitive":"jugar","tense":"condicional","person":"vosotros","fr":"vous joueriez"},
    {"form":"jugarían","infinitive":"jugar","tense":"condicional","person":"ellos/ellas/ustedes","fr":"ils/elles joueraient"},
    {"form":"juega","infinitive":"jugar","tense":"imperativo","person":"tú (ordre)","fr":"joue ! (ordre à « tu »)"},
    {"form":"jugando","infinitive":"jugar","tense":"presente_continuo","person":"gérondif","fr":"en train de jouer (ou : en jouant)"},
    {"form":"jugado","infinitive":"jugar","tense":"perfecto","person":"participe","fr":"joué (participe passé)"},
    {"form":"leo","infinitive":"leer","tense":"presente","person":"yo","fr":"je lis"},
    {"form":"lees","infinitive":"leer","tense":"presente","person":"tú","fr":"tu lis"},
    {"form":"lee","infinitive":"leer","tense":"presente","person":"él/ella/usted","fr":"il/elle lit"},
    {"form":"leemos","infinitive":"leer","tense":"presente","person":"nosotros","fr":"nous lisons"},
    {"form":"leéis","infinitive":"leer","tense":"presente","person":"vosotros","fr":"vous lisez"},
    {"form":"leen","infinitive":"leer","tense":"presente","person":"ellos/ellas/ustedes","fr":"ils/elles lisent"},
    {"form":"leí","infinitive":"leer","tense":"indefinido","person":"yo","fr":"j'ai lu"},
    {"form":"leíste","infinitive":"leer","tense":"indefinido","person":"tú","fr":"tu as lu"},
    {"form":"leyó","infinitive":"leer","tense":"indefinido","person":"él/ella/usted","fr":"il/elle a lu"},
    {"form":"leímos","infinitive":"leer","tense":"indefinido","person":"nosotros","fr":"nous avons lu"},
    {"form":"leísteis","infinitive":"leer","tense":"indefinido","person":"vosotros","fr":"vous avez lu"},
    {"form":"leyeron","infinitive":"leer","tense":"indefinido","person":"ellos/ellas/ustedes","fr":"ils/elles ont lu"},
    {"form":"leía","infinitive":"leer","tense":"imperfecto","person":"yo / él/ella/usted","fr":"je lisais / il/elle lisait"},
    {"form":"leías","infinitive":"leer","tense":"imperfecto","person":"tú","fr":"tu lisais"},
    {"form":"leíamos","infinitive":"leer","tense":"imperfecto","person":"nosotros","fr":"nous lisions"},
    {"form":"leíais","infinitive":"leer","tense":"imperfecto","person":"vosotros","fr":"vous lisiez"},
    {"form":"leían","infinitive":"leer","tense":"imperfecto","person":"ellos/ellas/ustedes","fr":"ils/elles lisaient"},
    {"form":"leeré","infinitive":"leer","tense":"futuro","person":"yo","fr":"je lirai"},
    {"form":"leerás","infinitive":"leer","tense":"futuro","person":"tú","fr":"tu liras"},
    {"form":"leerá","infinitive":"leer","tense":"futuro","person":"él/ella/usted","fr":"il/elle lira"},
    {"form":"leeremos","infinitive":"leer","tense":"futuro","person":"nosotros","fr":"nous lirons"},
    {"form":"leeréis","infinitive":"leer","tense":"futuro","person":"vosotros","fr":"vous lirez"},
    {"form":"leerán","infinitive":"leer","tense":"futuro","person":"ellos/ellas/ustedes","fr":"ils/elles liront"},
    {"form":"leería","infinitive":"leer","tense":"condicional","person":"yo / él/ella/usted","fr":"je lirais / il/elle lirait"},
    {"form":"leerías","infinitive":"leer","tense":"condicional","person":"tú","fr":"tu lirais"},
    {"form":"leeríamos","infinitive":"leer","tense":"condicional","person":"nosotros","fr":"nous lirions"},
    {"form":"leeríais","infinitive":"leer","tense":"condicional","person":"vosotros","fr":"vous liriez"},
    {"form":"leerían","infinitive":"leer","tense":"condicional","person":"ellos/ellas/ustedes","fr":"ils/elles liraient"},
    {"form":"lee","infinitive":"leer","tense":"imperativo","person":"tú (ordre)","fr":"lis ! (ordre à « tu »)"},
    {"form":"leyendo","infinitive":"leer","tense":"presente_continuo","person":"gérondif","fr":"en train de lire (ou : en lisant)"},
    {"form":"leído","infinitive":"leer","tense":"perfecto","person":"participe","fr":"lu (participe passé)"},
    {"form":"construyo","infinitive":"construir","tense":"presente","person":"yo","fr":"je construis"},
    {"form":"construyes","infinitive":"construir","tense":"presente","person":"tú","fr":"tu construis"},
    {"form":"construye","infinitive":"construir","tense":"presente","person":"él/ella/usted","fr":"il/elle construit"},
    {"form":"construimos","infinitive":"construir","tense":"presente","person":"nosotros","fr":"nous construisons"},
    {"form":"construís","infinitive":"construir","tense":"presente","person":"vosotros","fr":"vous construisez"},
    {"form":"construyen","infinitive":"construir","tense":"presente","person":"ellos/ellas/ustedes","fr":"ils/elles construisent"},
    {"form":"construí","infinitive":"construir","tense":"indefinido","person":"yo","fr":"j'ai construit"},
    {"form":"construiste","infinitive":"construir","tense":"indefinido","person":"tú","fr":"tu as construit"},
    {"form":"construyó","infinitive":"construir","tense":"indefinido","person":"él/ella/usted","fr":"il/elle a construit"},
    {"form":"construimos","infinitive":"construir","tense":"indefinido","person":"nosotros","fr":"nous avons construit"},
    {"form":"construisteis","infinitive":"construir","tense":"indefinido","person":"vosotros","fr":"vous avez construit"},
    {"form":"construyeron","infinitive":"construir","tense":"indefinido","person":"ellos/ellas/ustedes","fr":"ils/elles ont construit"},
    {"form":"construía","infinitive":"construir","tense":"imperfecto","person":"yo / él/ella/usted","fr":"je construisais / il/elle construisait"},
    {"form":"construías","infinitive":"construir","tense":"imperfecto","person":"tú","fr":"tu construisais"},
    {"form":"construíamos","infinitive":"construir","tense":"imperfecto","person":"nosotros","fr":"nous construisions"},
    {"form":"construíais","infinitive":"construir","tense":"imperfecto","person":"vosotros","fr":"vous construisiez"},
    {"form":"construían","infinitive":"construir","tense":"imperfecto","person":"ellos/ellas/ustedes","fr":"ils/elles construisaient"},
    {"form":"construiré","infinitive":"construir","tense":"futuro","person":"yo","fr":"je construirai"},
    {"form":"construirás","infinitive":"construir","tense":"futuro","person":"tú","fr":"tu construiras"},
    {"form":"construirá","infinitive":"construir","tense":"futuro","person":"él/ella/usted","fr":"il/elle construira"},
    {"form":"construiremos","infinitive":"construir","tense":"futuro","person":"nosotros","fr":"nous construirons"},
    {"form":"construiréis","infinitive":"construir","tense":"futuro","person":"vosotros","fr":"vous construirez"},
    {"form":"construirán","infinitive":"construir","tense":"futuro","person":"ellos/ellas/ustedes","fr":"ils/elles construiront"},
    {"form":"construiría","infinitive":"construir","tense":"condicional","person":"yo / él/ella/usted","fr":"je construirais / il/elle construirait"},
    {"form":"construirías","infinitive":"construir","tense":"condicional","person":"tú","fr":"tu construirais"},
    {"form":"construiríamos","infinitive":"construir","tense":"condicional","person":"nosotros","fr":"nous construirions"},
    {"form":"construiríais","infinitive":"construir","tense":"condicional","person":"vosotros","fr":"vous construiriez"},
    {"form":"construirían","infinitive":"construir","tense":"condicional","person":"ellos/ellas/ustedes","fr":"ils/elles construiraient"},
    {"form":"construye","infinitive":"construir","tense":"imperativo","person":"tú (ordre)","fr":"construis ! (ordre à « tu »)"},
    {"form":"construyendo","infinitive":"construir","tense":"presente_continuo","person":"gérondif","fr":"en train de construire (ou : en construisant)"},
    {"form":"construido","infinitive":"construir","tense":"perfecto","person":"participe","fr":"construit (participe passé)"},
    {"form":"he","infinitive":"haber","tense":"perfecto","person":"yo","fr":"j'ai (auxiliaire : he + participe = passé composé)"},
    {"form":"has","infinitive":"haber","tense":"perfecto","person":"tú","fr":"tu as (auxiliaire : has + participe = passé composé)"},
    {"form":"ha","infinitive":"haber","tense":"perfecto","person":"él/ella/usted","fr":"il/elle a (auxiliaire : ha + participe = passé composé)"},
    {"form":"hemos","infinitive":"haber","tense":"perfecto","person":"nosotros","fr":"nous avons (auxiliaire : hemos + participe = passé composé)"},
    {"form":"habéis","infinitive":"haber","tense":"perfecto","person":"vosotros","fr":"vous avez (auxiliaire : habéis + participe = passé composé)"},
    {"form":"han","infinitive":"haber","tense":"perfecto","person":"ellos/ellas/ustedes","fr":"ils/elles ont (auxiliaire : han + participe = passé composé)"},
    {"form":"había","infinitive":"haber","tense":"imperfecto","person":"yo / él/ella/usted","fr":"j'avais (auxiliaire) / il/elle avait (auxiliaire) · il y avait (había un problema = il y avait un problème)"},
    {"form":"habías","infinitive":"haber","tense":"imperfecto","person":"tú","fr":"tu avais (auxiliaire)"},
    {"form":"habíamos","infinitive":"haber","tense":"imperfecto","person":"nosotros","fr":"nous avions (auxiliaire)"},
    {"form":"habíais","infinitive":"haber","tense":"imperfecto","person":"vosotros","fr":"vous aviez (auxiliaire)"},
    {"form":"habían","infinitive":"haber","tense":"imperfecto","person":"ellos/ellas/ustedes","fr":"ils/elles avaient (auxiliaire)"},
    {"form":"habré","infinitive":"haber","tense":"futuro","person":"yo","fr":"j'aurai (auxiliaire)"},
    {"form":"habrás","infinitive":"haber","tense":"futuro","person":"tú","fr":"tu auras (auxiliaire)"},
    {"form":"habrá","infinitive":"haber","tense":"futuro","person":"él/ella/usted","fr":"il/elle aura (auxiliaire) · il y aura (habrá fiesta = il y aura une fête)"},
    {"form":"habremos","infinitive":"haber","tense":"futuro","person":"nosotros","fr":"nous aurons (auxiliaire)"},
    {"form":"habréis","infinitive":"haber","tense":"futuro","person":"vosotros","fr":"vous aurez (auxiliaire)"},
    {"form":"habrán","infinitive":"haber","tense":"futuro","person":"ellos/ellas/ustedes","fr":"ils/elles auront (auxiliaire)"},
    {"form":"habría","infinitive":"haber","tense":"condicional","person":"yo / él/ella/usted","fr":"j'aurais (auxiliaire) / il/elle aurait (auxiliaire) · il y aurait"},
    {"form":"habrías","infinitive":"haber","tense":"condicional","person":"tú","fr":"tu aurais (auxiliaire)"},
    {"form":"habríamos","infinitive":"haber","tense":"condicional","person":"nosotros","fr":"nous aurions (auxiliaire)"},
    {"form":"habríais","infinitive":"haber","tense":"condicional","person":"vosotros","fr":"vous auriez (auxiliaire)"},
    {"form":"habrían","infinitive":"haber","tense":"condicional","person":"ellos/ellas/ustedes","fr":"ils/elles auraient (auxiliaire)"},
    {"form":"habiendo","infinitive":"haber","tense":"presente_continuo","person":"gérondif","fr":"en train d'avoir (ou : en ayant)"},
    {"form":"habido","infinitive":"haber","tense":"perfecto","person":"participe","fr":"eu (participe passé)"},
    {"form":"quepo","infinitive":"caber","tense":"presente","person":"yo","fr":"je tiens (dans)"},
    {"form":"cabes","infinitive":"caber","tense":"presente","person":"tú","fr":"tu tiens (dans)"},
    {"form":"cabe","infinitive":"caber","tense":"presente","person":"él/ella/usted","fr":"il/elle tient (dans)"},
    {"form":"cabemos","infinitive":"caber","tense":"presente","person":"nosotros","fr":"nous tenons (dans)"},
    {"form":"cabéis","infinitive":"caber","tense":"presente","person":"vosotros","fr":"vous tenez (dans)"},
    {"form":"caben","infinitive":"caber","tense":"presente","person":"ellos/ellas/ustedes","fr":"ils/elles tiennent (dans)"},
    {"form":"cupe","infinitive":"caber","tense":"indefinido","person":"yo","fr":"j'ai tenu"},
    {"form":"cupiste","infinitive":"caber","tense":"indefinido","person":"tú","fr":"tu as tenu"},
    {"form":"cupo","infinitive":"caber","tense":"indefinido","person":"él/ella/usted","fr":"il/elle a tenu"},
    {"form":"cupimos","infinitive":"caber","tense":"indefinido","person":"nosotros","fr":"nous avons tenu"},
    {"form":"cupisteis","infinitive":"caber","tense":"indefinido","person":"vosotros","fr":"vous avez tenu"},
    {"form":"cupieron","infinitive":"caber","tense":"indefinido","person":"ellos/ellas/ustedes","fr":"ils/elles ont tenu"},
    {"form":"cabía","infinitive":"caber","tense":"imperfecto","person":"yo / él/ella/usted","fr":"je tenais / il/elle tenait"},
    {"form":"cabías","infinitive":"caber","tense":"imperfecto","person":"tú","fr":"tu tenais"},
    {"form":"cabíamos","infinitive":"caber","tense":"imperfecto","person":"nosotros","fr":"nous tenions"},
    {"form":"cabíais","infinitive":"caber","tense":"imperfecto","person":"vosotros","fr":"vous teniez"},
    {"form":"cabían","infinitive":"caber","tense":"imperfecto","person":"ellos/ellas/ustedes","fr":"ils/elles tenaient"},
    {"form":"cabré","infinitive":"caber","tense":"futuro","person":"yo","fr":"je tiendrai"},
    {"form":"cabrás","infinitive":"caber","tense":"futuro","person":"tú","fr":"tu tiendras"},
    {"form":"cabrá","infinitive":"caber","tense":"futuro","person":"él/ella/usted","fr":"il/elle tiendra"},
    {"form":"cabremos","infinitive":"caber","tense":"futuro","person":"nosotros","fr":"nous tiendrons"},
    {"form":"cabréis","infinitive":"caber","tense":"futuro","person":"vosotros","fr":"vous tiendrez"},
    {"form":"cabrán","infinitive":"caber","tense":"futuro","person":"ellos/ellas/ustedes","fr":"ils/elles tiendront"},
    {"form":"cabría","infinitive":"caber","tense":"condicional","person":"yo / él/ella/usted","fr":"je tiendrais / il/elle tiendrait"},
    {"form":"cabrías","infinitive":"caber","tense":"condicional","person":"tú","fr":"tu tiendrais"},
    {"form":"cabríamos","infinitive":"caber","tense":"condicional","person":"nosotros","fr":"nous tiendrions"},
    {"form":"cabríais","infinitive":"caber","tense":"condicional","person":"vosotros","fr":"vous tiendriez"},
    {"form":"cabrían","infinitive":"caber","tense":"condicional","person":"ellos/ellas/ustedes","fr":"ils/elles tiendraient"},
    {"form":"cabiendo","infinitive":"caber","tense":"presente_continuo","person":"gérondif","fr":"en train de tenir (ou : en tenant)"},
    {"form":"cabido","infinitive":"caber","tense":"perfecto","person":"participe","fr":"tenu (participe passé)"},
    {"form":"ando","infinitive":"andar","tense":"presente","person":"yo","fr":"je marche"},
    {"form":"andas","infinitive":"andar","tense":"presente","person":"tú","fr":"tu marches"},
    {"form":"anda","infinitive":"andar","tense":"presente","person":"él/ella/usted","fr":"il/elle marche"},
    {"form":"andamos","infinitive":"andar","tense":"presente","person":"nosotros","fr":"nous marchons"},
    {"form":"andáis","infinitive":"andar","tense":"presente","person":"vosotros","fr":"vous marchez"},
    {"form":"andan","infinitive":"andar","tense":"presente","person":"ellos/ellas/ustedes","fr":"ils/elles marchent"},
    {"form":"anduve","infinitive":"andar","tense":"indefinido","person":"yo","fr":"j'ai marché"},
    {"form":"anduviste","infinitive":"andar","tense":"indefinido","person":"tú","fr":"tu as marché"},
    {"form":"anduvo","infinitive":"andar","tense":"indefinido","person":"él/ella/usted","fr":"il/elle a marché"},
    {"form":"anduvimos","infinitive":"andar","tense":"indefinido","person":"nosotros","fr":"nous avons marché"},
    {"form":"anduvisteis","infinitive":"andar","tense":"indefinido","person":"vosotros","fr":"vous avez marché"},
    {"form":"anduvieron","infinitive":"andar","tense":"indefinido","person":"ellos/ellas/ustedes","fr":"ils/elles ont marché"},
    {"form":"andaba","infinitive":"andar","tense":"imperfecto","person":"yo / él/ella/usted","fr":"je marchais / il/elle marchait"},
    {"form":"andabas","infinitive":"andar","tense":"imperfecto","person":"tú","fr":"tu marchais"},
    {"form":"andábamos","infinitive":"andar","tense":"imperfecto","person":"nosotros","fr":"nous marchions"},
    {"form":"andabais","infinitive":"andar","tense":"imperfecto","person":"vosotros","fr":"vous marchiez"},
    {"form":"andaban","infinitive":"andar","tense":"imperfecto","person":"ellos/ellas/ustedes","fr":"ils/elles marchaient"},
    {"form":"andaré","infinitive":"andar","tense":"futuro","person":"yo","fr":"je marcherai"},
    {"form":"andarás","infinitive":"andar","tense":"futuro","person":"tú","fr":"tu marcheras"},
    {"form":"andará","infinitive":"andar","tense":"futuro","person":"él/ella/usted","fr":"il/elle marchera"},
    {"form":"andaremos","infinitive":"andar","tense":"futuro","person":"nosotros","fr":"nous marcherons"},
    {"form":"andaréis","infinitive":"andar","tense":"futuro","person":"vosotros","fr":"vous marcherez"},
    {"form":"andarán","infinitive":"andar","tense":"futuro","person":"ellos/ellas/ustedes","fr":"ils/elles marcheront"},
    {"form":"andaría","infinitive":"andar","tense":"condicional","person":"yo / él/ella/usted","fr":"je marcherais / il/elle marcherait"},
    {"form":"andarías","infinitive":"andar","tense":"condicional","person":"tú","fr":"tu marcherais"},
    {"form":"andaríamos","infinitive":"andar","tense":"condicional","person":"nosotros","fr":"nous marcherions"},
    {"form":"andaríais","infinitive":"andar","tense":"condicional","person":"vosotros","fr":"vous marcheriez"},
    {"form":"andarían","infinitive":"andar","tense":"condicional","person":"ellos/ellas/ustedes","fr":"ils/elles marcheraient"},
    {"form":"anda","infinitive":"andar","tense":"imperativo","person":"tú (ordre)","fr":"marche ! (ordre à « tu »)"},
    {"form":"andando","infinitive":"andar","tense":"presente_continuo","person":"gérondif","fr":"en train de marcher (ou : en marchant)"},
    {"form":"andado","infinitive":"andar","tense":"perfecto","person":"participe","fr":"marché (participe passé)"},
    {"form":"conduzco","infinitive":"conducir","tense":"presente","person":"yo","fr":"je conduis"},
    {"form":"conduces","infinitive":"conducir","tense":"presente","person":"tú","fr":"tu conduis"},
    {"form":"conduce","infinitive":"conducir","tense":"presente","person":"él/ella/usted","fr":"il/elle conduit"},
    {"form":"conducimos","infinitive":"conducir","tense":"presente","person":"nosotros","fr":"nous conduisons"},
    {"form":"conducís","infinitive":"conducir","tense":"presente","person":"vosotros","fr":"vous conduisez"},
    {"form":"conducen","infinitive":"conducir","tense":"presente","person":"ellos/ellas/ustedes","fr":"ils/elles conduisent"},
    {"form":"conduje","infinitive":"conducir","tense":"indefinido","person":"yo","fr":"j'ai conduit"},
    {"form":"condujiste","infinitive":"conducir","tense":"indefinido","person":"tú","fr":"tu as conduit"},
    {"form":"condujo","infinitive":"conducir","tense":"indefinido","person":"él/ella/usted","fr":"il/elle a conduit"},
    {"form":"condujimos","infinitive":"conducir","tense":"indefinido","person":"nosotros","fr":"nous avons conduit"},
    {"form":"condujisteis","infinitive":"conducir","tense":"indefinido","person":"vosotros","fr":"vous avez conduit"},
    {"form":"condujeron","infinitive":"conducir","tense":"indefinido","person":"ellos/ellas/ustedes","fr":"ils/elles ont conduit"},
    {"form":"conducía","infinitive":"conducir","tense":"imperfecto","person":"yo / él/ella/usted","fr":"je conduisais / il/elle conduisait"},
    {"form":"conducías","infinitive":"conducir","tense":"imperfecto","person":"tú","fr":"tu conduisais"},
    {"form":"conducíamos","infinitive":"conducir","tense":"imperfecto","person":"nosotros","fr":"nous conduisions"},
    {"form":"conducíais","infinitive":"conducir","tense":"imperfecto","person":"vosotros","fr":"vous conduisiez"},
    {"form":"conducían","infinitive":"conducir","tense":"imperfecto","person":"ellos/ellas/ustedes","fr":"ils/elles conduisaient"},
    {"form":"conduciré","infinitive":"conducir","tense":"futuro","person":"yo","fr":"je conduirai"},
    {"form":"conducirás","infinitive":"conducir","tense":"futuro","person":"tú","fr":"tu conduiras"},
    {"form":"conducirá","infinitive":"conducir","tense":"futuro","person":"él/ella/usted","fr":"il/elle conduira"},
    {"form":"conduciremos","infinitive":"conducir","tense":"futuro","person":"nosotros","fr":"nous conduirons"},
    {"form":"conduciréis","infinitive":"conducir","tense":"futuro","person":"vosotros","fr":"vous conduirez"},
    {"form":"conducirán","infinitive":"conducir","tense":"futuro","person":"ellos/ellas/ustedes","fr":"ils/elles conduiront"},
    {"form":"conduciría","infinitive":"conducir","tense":"condicional","person":"yo / él/ella/usted","fr":"je conduirais / il/elle conduirait"},
    {"form":"conducirías","infinitive":"conducir","tense":"condicional","person":"tú","fr":"tu conduirais"},
    {"form":"conduciríamos","infinitive":"conducir","tense":"condicional","person":"nosotros","fr":"nous conduirions"},
    {"form":"conduciríais","infinitive":"conducir","tense":"condicional","person":"vosotros","fr":"vous conduiriez"},
    {"form":"conducirían","infinitive":"conducir","tense":"condicional","person":"ellos/ellas/ustedes","fr":"ils/elles conduiraient"},
    {"form":"conduce","infinitive":"conducir","tense":"imperativo","person":"tú (ordre)","fr":"conduis ! (ordre à « tu »)"},
    {"form":"conduciendo","infinitive":"conducir","tense":"presente_continuo","person":"gérondif","fr":"en train de conduire (ou : en conduisant)"},
    {"form":"conducido","infinitive":"conducir","tense":"perfecto","person":"participe","fr":"conduit (participe passé)"},
    {"form":"traduzco","infinitive":"traducir","tense":"presente","person":"yo","fr":"je traduis"},
    {"form":"traduces","infinitive":"traducir","tense":"presente","person":"tú","fr":"tu traduis"},
    {"form":"traduce","infinitive":"traducir","tense":"presente","person":"él/ella/usted","fr":"il/elle traduit"},
    {"form":"traducimos","infinitive":"traducir","tense":"presente","person":"nosotros","fr":"nous traduisons"},
    {"form":"traducís","infinitive":"traducir","tense":"presente","person":"vosotros","fr":"vous traduisez"},
    {"form":"traducen","infinitive":"traducir","tense":"presente","person":"ellos/ellas/ustedes","fr":"ils/elles traduisent"},
    {"form":"traduje","infinitive":"traducir","tense":"indefinido","person":"yo","fr":"j'ai traduit"},
    {"form":"tradujiste","infinitive":"traducir","tense":"indefinido","person":"tú","fr":"tu as traduit"},
    {"form":"tradujo","infinitive":"traducir","tense":"indefinido","person":"él/ella/usted","fr":"il/elle a traduit"},
    {"form":"tradujimos","infinitive":"traducir","tense":"indefinido","person":"nosotros","fr":"nous avons traduit"},
    {"form":"tradujisteis","infinitive":"traducir","tense":"indefinido","person":"vosotros","fr":"vous avez traduit"},
    {"form":"tradujeron","infinitive":"traducir","tense":"indefinido","person":"ellos/ellas/ustedes","fr":"ils/elles ont traduit"},
    {"form":"traducía","infinitive":"traducir","tense":"imperfecto","person":"yo / él/ella/usted","fr":"je traduisais / il/elle traduisait"},
    {"form":"traducías","infinitive":"traducir","tense":"imperfecto","person":"tú","fr":"tu traduisais"},
    {"form":"traducíamos","infinitive":"traducir","tense":"imperfecto","person":"nosotros","fr":"nous traduisions"},
    {"form":"traducíais","infinitive":"traducir","tense":"imperfecto","person":"vosotros","fr":"vous traduisiez"},
    {"form":"traducían","infinitive":"traducir","tense":"imperfecto","person":"ellos/ellas/ustedes","fr":"ils/elles traduisaient"},
    {"form":"traduciré","infinitive":"traducir","tense":"futuro","person":"yo","fr":"je traduirai"},
    {"form":"traducirás","infinitive":"traducir","tense":"futuro","person":"tú","fr":"tu traduiras"},
    {"form":"traducirá","infinitive":"traducir","tense":"futuro","person":"él/ella/usted","fr":"il/elle traduira"},
    {"form":"traduciremos","infinitive":"traducir","tense":"futuro","person":"nosotros","fr":"nous traduirons"},
    {"form":"traduciréis","infinitive":"traducir","tense":"futuro","person":"vosotros","fr":"vous traduirez"},
    {"form":"traducirán","infinitive":"traducir","tense":"futuro","person":"ellos/ellas/ustedes","fr":"ils/elles traduiront"},
    {"form":"traduciría","infinitive":"traducir","tense":"condicional","person":"yo / él/ella/usted","fr":"je traduirais / il/elle traduirait"},
    {"form":"traducirías","infinitive":"traducir","tense":"condicional","person":"tú","fr":"tu traduirais"},
    {"form":"traduciríamos","infinitive":"traducir","tense":"condicional","person":"nosotros","fr":"nous traduirions"},
    {"form":"traduciríais","infinitive":"traducir","tense":"condicional","person":"vosotros","fr":"vous traduiriez"},
    {"form":"traducirían","infinitive":"traducir","tense":"condicional","person":"ellos/ellas/ustedes","fr":"ils/elles traduiraient"},
    {"form":"traduce","infinitive":"traducir","tense":"imperativo","person":"tú (ordre)","fr":"traduis ! (ordre à « tu »)"},
    {"form":"traduciendo","infinitive":"traducir","tense":"presente_continuo","person":"gérondif","fr":"en train de traduire (ou : en traduisant)"},
    {"form":"traducido","infinitive":"traducir","tense":"perfecto","person":"participe","fr":"traduit (participe passé)"},
    {"form":"siento","infinitive":"sentir","tense":"presente","person":"yo","fr":"je sens (ou : regretter, ressentir)"},
    {"form":"sientes","infinitive":"sentir","tense":"presente","person":"tú","fr":"tu sens (ou : regretter, ressentir)"},
    {"form":"siente","infinitive":"sentir","tense":"presente","person":"él/ella/usted","fr":"il/elle sent (ou : regretter, ressentir)"},
    {"form":"sentimos","infinitive":"sentir","tense":"presente","person":"nosotros","fr":"nous sentons (ou : regretter, ressentir)"},
    {"form":"sentís","infinitive":"sentir","tense":"presente","person":"vosotros","fr":"vous sentez (ou : regretter, ressentir)"},
    {"form":"sienten","infinitive":"sentir","tense":"presente","person":"ellos/ellas/ustedes","fr":"ils/elles sentent (ou : regretter, ressentir)"},
    {"form":"sentí","infinitive":"sentir","tense":"indefinido","person":"yo","fr":"j'ai senti"},
    {"form":"sentiste","infinitive":"sentir","tense":"indefinido","person":"tú","fr":"tu as senti"},
    {"form":"sintió","infinitive":"sentir","tense":"indefinido","person":"él/ella/usted","fr":"il/elle a senti"},
    {"form":"sentimos","infinitive":"sentir","tense":"indefinido","person":"nosotros","fr":"nous avons senti"},
    {"form":"sentisteis","infinitive":"sentir","tense":"indefinido","person":"vosotros","fr":"vous avez senti"},
    {"form":"sintieron","infinitive":"sentir","tense":"indefinido","person":"ellos/ellas/ustedes","fr":"ils/elles ont senti"},
    {"form":"sentía","infinitive":"sentir","tense":"imperfecto","person":"yo / él/ella/usted","fr":"je sentais / il/elle sentait"},
    {"form":"sentías","infinitive":"sentir","tense":"imperfecto","person":"tú","fr":"tu sentais"},
    {"form":"sentíamos","infinitive":"sentir","tense":"imperfecto","person":"nosotros","fr":"nous sentions"},
    {"form":"sentíais","infinitive":"sentir","tense":"imperfecto","person":"vosotros","fr":"vous sentiez"},
    {"form":"sentían","infinitive":"sentir","tense":"imperfecto","person":"ellos/ellas/ustedes","fr":"ils/elles sentaient"},
    {"form":"sentiré","infinitive":"sentir","tense":"futuro","person":"yo","fr":"je sentirai"},
    {"form":"sentirás","infinitive":"sentir","tense":"futuro","person":"tú","fr":"tu sentiras"},
    {"form":"sentirá","infinitive":"sentir","tense":"futuro","person":"él/ella/usted","fr":"il/elle sentira"},
    {"form":"sentiremos","infinitive":"sentir","tense":"futuro","person":"nosotros","fr":"nous sentirons"},
    {"form":"sentiréis","infinitive":"sentir","tense":"futuro","person":"vosotros","fr":"vous sentirez"},
    {"form":"sentirán","infinitive":"sentir","tense":"futuro","person":"ellos/ellas/ustedes","fr":"ils/elles sentiront"},
    {"form":"sentiría","infinitive":"sentir","tense":"condicional","person":"yo / él/ella/usted","fr":"je sentirais / il/elle sentirait"},
    {"form":"sentirías","infinitive":"sentir","tense":"condicional","person":"tú","fr":"tu sentirais"},
    {"form":"sentiríamos","infinitive":"sentir","tense":"condicional","person":"nosotros","fr":"nous sentirions"},
    {"form":"sentiríais","infinitive":"sentir","tense":"condicional","person":"vosotros","fr":"vous sentiriez"},
    {"form":"sentirían","infinitive":"sentir","tense":"condicional","person":"ellos/ellas/ustedes","fr":"ils/elles sentiraient"},
    {"form":"siente","infinitive":"sentir","tense":"imperativo","person":"tú (ordre)","fr":"sens ! (ordre à « tu »)"},
    {"form":"sintiendo","infinitive":"sentir","tense":"presente_continuo","person":"gérondif","fr":"en train de sentir (ou : en sentant)"},
    {"form":"sentido","infinitive":"sentir","tense":"perfecto","person":"participe","fr":"senti (participe passé)"},
    {"form":"muero","infinitive":"morir","tense":"presente","person":"yo","fr":"je meurs"},
    {"form":"mueres","infinitive":"morir","tense":"presente","person":"tú","fr":"tu meurs"},
    {"form":"muere","infinitive":"morir","tense":"presente","person":"él/ella/usted","fr":"il/elle meurt"},
    {"form":"morimos","infinitive":"morir","tense":"presente","person":"nosotros","fr":"nous mourons"},
    {"form":"morís","infinitive":"morir","tense":"presente","person":"vosotros","fr":"vous mourez"},
    {"form":"mueren","infinitive":"morir","tense":"presente","person":"ellos/ellas/ustedes","fr":"ils/elles meurent"},
    {"form":"morí","infinitive":"morir","tense":"indefinido","person":"yo","fr":"je suis mort(e)"},
    {"form":"moriste","infinitive":"morir","tense":"indefinido","person":"tú","fr":"tu es mort(e)"},
    {"form":"murió","infinitive":"morir","tense":"indefinido","person":"él/ella/usted","fr":"il/elle est mort(e)"},
    {"form":"morimos","infinitive":"morir","tense":"indefinido","person":"nosotros","fr":"nous sommes mort(e)s"},
    {"form":"moristeis","infinitive":"morir","tense":"indefinido","person":"vosotros","fr":"vous êtes mort(e)s"},
    {"form":"murieron","infinitive":"morir","tense":"indefinido","person":"ellos/ellas/ustedes","fr":"ils/elles sont mort(e)s"},
    {"form":"moría","infinitive":"morir","tense":"imperfecto","person":"yo / él/ella/usted","fr":"je mourais / il/elle mourait"},
    {"form":"morías","infinitive":"morir","tense":"imperfecto","person":"tú","fr":"tu mourais"},
    {"form":"moríamos","infinitive":"morir","tense":"imperfecto","person":"nosotros","fr":"nous mourions"},
    {"form":"moríais","infinitive":"morir","tense":"imperfecto","person":"vosotros","fr":"vous mouriez"},
    {"form":"morían","infinitive":"morir","tense":"imperfecto","person":"ellos/ellas/ustedes","fr":"ils/elles mouraient"},
    {"form":"moriré","infinitive":"morir","tense":"futuro","person":"yo","fr":"je mourrai"},
    {"form":"morirás","infinitive":"morir","tense":"futuro","person":"tú","fr":"tu mourras"},
    {"form":"morirá","infinitive":"morir","tense":"futuro","person":"él/ella/usted","fr":"il/elle mourra"},
    {"form":"moriremos","infinitive":"morir","tense":"futuro","person":"nosotros","fr":"nous mourrons"},
    {"form":"moriréis","infinitive":"morir","tense":"futuro","person":"vosotros","fr":"vous mourrez"},
    {"form":"morirán","infinitive":"morir","tense":"futuro","person":"ellos/ellas/ustedes","fr":"ils/elles mourront"},
    {"form":"moriría","infinitive":"morir","tense":"condicional","person":"yo / él/ella/usted","fr":"je mourrais / il/elle mourrait"},
    {"form":"morirías","infinitive":"morir","tense":"condicional","person":"tú","fr":"tu mourrais"},
    {"form":"moriríamos","infinitive":"morir","tense":"condicional","person":"nosotros","fr":"nous mourrions"},
    {"form":"moriríais","infinitive":"morir","tense":"condicional","person":"vosotros","fr":"vous mourriez"},
    {"form":"morirían","infinitive":"morir","tense":"condicional","person":"ellos/ellas/ustedes","fr":"ils/elles mourraient"},
    {"form":"muere","infinitive":"morir","tense":"imperativo","person":"tú (ordre)","fr":"meurs ! (ordre à « tu »)"},
    {"form":"muriendo","infinitive":"morir","tense":"presente_continuo","person":"gérondif","fr":"en train de mourir (ou : en mourant)"},
    {"form":"muerto","infinitive":"morir","tense":"perfecto","person":"participe","fr":"mort (participe passé)"},
    {"form":"sirvo","infinitive":"servir","tense":"presente","person":"yo","fr":"je sers"},
    {"form":"sirves","infinitive":"servir","tense":"presente","person":"tú","fr":"tu sers"},
    {"form":"sirve","infinitive":"servir","tense":"presente","person":"él/ella/usted","fr":"il/elle sert"},
    {"form":"servimos","infinitive":"servir","tense":"presente","person":"nosotros","fr":"nous servons"},
    {"form":"servís","infinitive":"servir","tense":"presente","person":"vosotros","fr":"vous servez"},
    {"form":"sirven","infinitive":"servir","tense":"presente","person":"ellos/ellas/ustedes","fr":"ils/elles servent"},
    {"form":"serví","infinitive":"servir","tense":"indefinido","person":"yo","fr":"j'ai servi"},
    {"form":"serviste","infinitive":"servir","tense":"indefinido","person":"tú","fr":"tu as servi"},
    {"form":"sirvió","infinitive":"servir","tense":"indefinido","person":"él/ella/usted","fr":"il/elle a servi"},
    {"form":"servimos","infinitive":"servir","tense":"indefinido","person":"nosotros","fr":"nous avons servi"},
    {"form":"servisteis","infinitive":"servir","tense":"indefinido","person":"vosotros","fr":"vous avez servi"},
    {"form":"sirvieron","infinitive":"servir","tense":"indefinido","person":"ellos/ellas/ustedes","fr":"ils/elles ont servi"},
    {"form":"servía","infinitive":"servir","tense":"imperfecto","person":"yo / él/ella/usted","fr":"je servais / il/elle servait"},
    {"form":"servías","infinitive":"servir","tense":"imperfecto","person":"tú","fr":"tu servais"},
    {"form":"servíamos","infinitive":"servir","tense":"imperfecto","person":"nosotros","fr":"nous servions"},
    {"form":"servíais","infinitive":"servir","tense":"imperfecto","person":"vosotros","fr":"vous serviez"},
    {"form":"servían","infinitive":"servir","tense":"imperfecto","person":"ellos/ellas/ustedes","fr":"ils/elles servaient"},
    {"form":"serviré","infinitive":"servir","tense":"futuro","person":"yo","fr":"je servirai"},
    {"form":"servirás","infinitive":"servir","tense":"futuro","person":"tú","fr":"tu serviras"},
    {"form":"servirá","infinitive":"servir","tense":"futuro","person":"él/ella/usted","fr":"il/elle servira"},
    {"form":"serviremos","infinitive":"servir","tense":"futuro","person":"nosotros","fr":"nous servirons"},
    {"form":"serviréis","infinitive":"servir","tense":"futuro","person":"vosotros","fr":"vous servirez"},
    {"form":"servirán","infinitive":"servir","tense":"futuro","person":"ellos/ellas/ustedes","fr":"ils/elles serviront"},
    {"form":"serviría","infinitive":"servir","tense":"condicional","person":"yo / él/ella/usted","fr":"je servirais / il/elle servirait"},
    {"form":"servirías","infinitive":"servir","tense":"condicional","person":"tú","fr":"tu servirais"},
    {"form":"serviríamos","infinitive":"servir","tense":"condicional","person":"nosotros","fr":"nous servirions"},
    {"form":"serviríais","infinitive":"servir","tense":"condicional","person":"vosotros","fr":"vous serviriez"},
    {"form":"servirían","infinitive":"servir","tense":"condicional","person":"ellos/ellas/ustedes","fr":"ils/elles serviraient"},
    {"form":"sirve","infinitive":"servir","tense":"imperativo","person":"tú (ordre)","fr":"sers ! (ordre à « tu »)"},
    {"form":"sirviendo","infinitive":"servir","tense":"presente_continuo","person":"gérondif","fr":"en train de servir (ou : en servant)"},
    {"form":"servido","infinitive":"servir","tense":"perfecto","person":"participe","fr":"servi (participe passé)"},
    {"form":"repito","infinitive":"repetir","tense":"presente","person":"yo","fr":"je répète"},
    {"form":"repites","infinitive":"repetir","tense":"presente","person":"tú","fr":"tu répètes"},
    {"form":"repite","infinitive":"repetir","tense":"presente","person":"él/ella/usted","fr":"il/elle répète"},
    {"form":"repetimos","infinitive":"repetir","tense":"presente","person":"nosotros","fr":"nous répétons"},
    {"form":"repetís","infinitive":"repetir","tense":"presente","person":"vosotros","fr":"vous répétez"},
    {"form":"repiten","infinitive":"repetir","tense":"presente","person":"ellos/ellas/ustedes","fr":"ils/elles répètent"},
    {"form":"repetí","infinitive":"repetir","tense":"indefinido","person":"yo","fr":"j'ai répété"},
    {"form":"repetiste","infinitive":"repetir","tense":"indefinido","person":"tú","fr":"tu as répété"},
    {"form":"repitió","infinitive":"repetir","tense":"indefinido","person":"él/ella/usted","fr":"il/elle a répété"},
    {"form":"repetimos","infinitive":"repetir","tense":"indefinido","person":"nosotros","fr":"nous avons répété"},
    {"form":"repetisteis","infinitive":"repetir","tense":"indefinido","person":"vosotros","fr":"vous avez répété"},
    {"form":"repitieron","infinitive":"repetir","tense":"indefinido","person":"ellos/ellas/ustedes","fr":"ils/elles ont répété"},
    {"form":"repetía","infinitive":"repetir","tense":"imperfecto","person":"yo / él/ella/usted","fr":"je répétais / il/elle répétait"},
    {"form":"repetías","infinitive":"repetir","tense":"imperfecto","person":"tú","fr":"tu répétais"},
    {"form":"repetíamos","infinitive":"repetir","tense":"imperfecto","person":"nosotros","fr":"nous répétions"},
    {"form":"repetíais","infinitive":"repetir","tense":"imperfecto","person":"vosotros","fr":"vous répétiez"},
    {"form":"repetían","infinitive":"repetir","tense":"imperfecto","person":"ellos/ellas/ustedes","fr":"ils/elles répétaient"},
    {"form":"repetiré","infinitive":"repetir","tense":"futuro","person":"yo","fr":"je répéterai"},
    {"form":"repetirás","infinitive":"repetir","tense":"futuro","person":"tú","fr":"tu répéteras"},
    {"form":"repetirá","infinitive":"repetir","tense":"futuro","person":"él/ella/usted","fr":"il/elle répétera"},
    {"form":"repetiremos","infinitive":"repetir","tense":"futuro","person":"nosotros","fr":"nous répéterons"},
    {"form":"repetiréis","infinitive":"repetir","tense":"futuro","person":"vosotros","fr":"vous répéterez"},
    {"form":"repetirán","infinitive":"repetir","tense":"futuro","person":"ellos/ellas/ustedes","fr":"ils/elles répéteront"},
    {"form":"repetiría","infinitive":"repetir","tense":"condicional","person":"yo / él/ella/usted","fr":"je répéterais / il/elle répéterait"},
    {"form":"repetirías","infinitive":"repetir","tense":"condicional","person":"tú","fr":"tu répéterais"},
    {"form":"repetiríamos","infinitive":"repetir","tense":"condicional","person":"nosotros","fr":"nous répéterions"},
    {"form":"repetiríais","infinitive":"repetir","tense":"condicional","person":"vosotros","fr":"vous répéteriez"},
    {"form":"repetirían","infinitive":"repetir","tense":"condicional","person":"ellos/ellas/ustedes","fr":"ils/elles répéteraient"},
    {"form":"repite","infinitive":"repetir","tense":"imperativo","person":"tú (ordre)","fr":"répète ! (ordre à « tu »)"},
    {"form":"repitiendo","infinitive":"repetir","tense":"presente_continuo","person":"gérondif","fr":"en train de répéter (ou : en répétant)"},
    {"form":"repetido","infinitive":"repetir","tense":"perfecto","person":"participe","fr":"répété (participe passé)"},
    {"form":"almuerzo","infinitive":"almorzar","tense":"presente","person":"yo","fr":"je déjeune"},
    {"form":"almuerzas","infinitive":"almorzar","tense":"presente","person":"tú","fr":"tu déjeunes"},
    {"form":"almuerza","infinitive":"almorzar","tense":"presente","person":"él/ella/usted","fr":"il/elle déjeune"},
    {"form":"almorzamos","infinitive":"almorzar","tense":"presente","person":"nosotros","fr":"nous déjeunons"},
    {"form":"almorzáis","infinitive":"almorzar","tense":"presente","person":"vosotros","fr":"vous déjeunez"},
    {"form":"almuerzan","infinitive":"almorzar","tense":"presente","person":"ellos/ellas/ustedes","fr":"ils/elles déjeunent"},
    {"form":"almorcé","infinitive":"almorzar","tense":"indefinido","person":"yo","fr":"j'ai déjeuné"},
    {"form":"almorzaste","infinitive":"almorzar","tense":"indefinido","person":"tú","fr":"tu as déjeuné"},
    {"form":"almorzó","infinitive":"almorzar","tense":"indefinido","person":"él/ella/usted","fr":"il/elle a déjeuné"},
    {"form":"almorzamos","infinitive":"almorzar","tense":"indefinido","person":"nosotros","fr":"nous avons déjeuné"},
    {"form":"almorzasteis","infinitive":"almorzar","tense":"indefinido","person":"vosotros","fr":"vous avez déjeuné"},
    {"form":"almorzaron","infinitive":"almorzar","tense":"indefinido","person":"ellos/ellas/ustedes","fr":"ils/elles ont déjeuné"},
    {"form":"almorzaba","infinitive":"almorzar","tense":"imperfecto","person":"yo / él/ella/usted","fr":"je déjeunais / il/elle déjeunait"},
    {"form":"almorzabas","infinitive":"almorzar","tense":"imperfecto","person":"tú","fr":"tu déjeunais"},
    {"form":"almorzábamos","infinitive":"almorzar","tense":"imperfecto","person":"nosotros","fr":"nous déjeunions"},
    {"form":"almorzabais","infinitive":"almorzar","tense":"imperfecto","person":"vosotros","fr":"vous déjeuniez"},
    {"form":"almorzaban","infinitive":"almorzar","tense":"imperfecto","person":"ellos/ellas/ustedes","fr":"ils/elles déjeunaient"},
    {"form":"almorzaré","infinitive":"almorzar","tense":"futuro","person":"yo","fr":"je déjeunerai"},
    {"form":"almorzarás","infinitive":"almorzar","tense":"futuro","person":"tú","fr":"tu déjeuneras"},
    {"form":"almorzará","infinitive":"almorzar","tense":"futuro","person":"él/ella/usted","fr":"il/elle déjeunera"},
    {"form":"almorzaremos","infinitive":"almorzar","tense":"futuro","person":"nosotros","fr":"nous déjeunerons"},
    {"form":"almorzaréis","infinitive":"almorzar","tense":"futuro","person":"vosotros","fr":"vous déjeunerez"},
    {"form":"almorzarán","infinitive":"almorzar","tense":"futuro","person":"ellos/ellas/ustedes","fr":"ils/elles déjeuneront"},
    {"form":"almorzaría","infinitive":"almorzar","tense":"condicional","person":"yo / él/ella/usted","fr":"je déjeunerais / il/elle déjeunerait"},
    {"form":"almorzarías","infinitive":"almorzar","tense":"condicional","person":"tú","fr":"tu déjeunerais"},
    {"form":"almorzaríamos","infinitive":"almorzar","tense":"condicional","person":"nosotros","fr":"nous déjeunerions"},
    {"form":"almorzaríais","infinitive":"almorzar","tense":"condicional","person":"vosotros","fr":"vous déjeuneriez"},
    {"form":"almorzarían","infinitive":"almorzar","tense":"condicional","person":"ellos/ellas/ustedes","fr":"ils/elles déjeuneraient"},
    {"form":"almuerza","infinitive":"almorzar","tense":"imperativo","person":"tú (ordre)","fr":"déjeune ! (ordre à « tu »)"},
    {"form":"almorzando","infinitive":"almorzar","tense":"presente_continuo","person":"gérondif","fr":"en train de déjeuner (ou : en déjeunant)"},
    {"form":"almorzado","infinitive":"almorzar","tense":"perfecto","person":"participe","fr":"déjeuné (participe passé)"},
    {"form":"cuesto","infinitive":"costar","tense":"presente","person":"yo","fr":"je coûte"},
    {"form":"cuestas","infinitive":"costar","tense":"presente","person":"tú","fr":"tu coûtes"},
    {"form":"cuesta","infinitive":"costar","tense":"presente","person":"él/ella/usted","fr":"il/elle coûte"},
    {"form":"costamos","infinitive":"costar","tense":"presente","person":"nosotros","fr":"nous coûtons"},
    {"form":"costáis","infinitive":"costar","tense":"presente","person":"vosotros","fr":"vous coûtez"},
    {"form":"cuestan","infinitive":"costar","tense":"presente","person":"ellos/ellas/ustedes","fr":"ils/elles coûtent"},
    {"form":"costé","infinitive":"costar","tense":"indefinido","person":"yo","fr":"j'ai coûté"},
    {"form":"costaste","infinitive":"costar","tense":"indefinido","person":"tú","fr":"tu as coûté"},
    {"form":"costó","infinitive":"costar","tense":"indefinido","person":"él/ella/usted","fr":"il/elle a coûté"},
    {"form":"costamos","infinitive":"costar","tense":"indefinido","person":"nosotros","fr":"nous avons coûté"},
    {"form":"costasteis","infinitive":"costar","tense":"indefinido","person":"vosotros","fr":"vous avez coûté"},
    {"form":"costaron","infinitive":"costar","tense":"indefinido","person":"ellos/ellas/ustedes","fr":"ils/elles ont coûté"},
    {"form":"costaba","infinitive":"costar","tense":"imperfecto","person":"yo / él/ella/usted","fr":"je coûtais / il/elle coûtait"},
    {"form":"costabas","infinitive":"costar","tense":"imperfecto","person":"tú","fr":"tu coûtais"},
    {"form":"costábamos","infinitive":"costar","tense":"imperfecto","person":"nosotros","fr":"nous coûtions"},
    {"form":"costabais","infinitive":"costar","tense":"imperfecto","person":"vosotros","fr":"vous coûtiez"},
    {"form":"costaban","infinitive":"costar","tense":"imperfecto","person":"ellos/ellas/ustedes","fr":"ils/elles coûtaient"},
    {"form":"costaré","infinitive":"costar","tense":"futuro","person":"yo","fr":"je coûterai"},
    {"form":"costarás","infinitive":"costar","tense":"futuro","person":"tú","fr":"tu coûteras"},
    {"form":"costará","infinitive":"costar","tense":"futuro","person":"él/ella/usted","fr":"il/elle coûtera"},
    {"form":"costaremos","infinitive":"costar","tense":"futuro","person":"nosotros","fr":"nous coûterons"},
    {"form":"costaréis","infinitive":"costar","tense":"futuro","person":"vosotros","fr":"vous coûterez"},
    {"form":"costarán","infinitive":"costar","tense":"futuro","person":"ellos/ellas/ustedes","fr":"ils/elles coûteront"},
    {"form":"costaría","infinitive":"costar","tense":"condicional","person":"yo / él/ella/usted","fr":"je coûterais / il/elle coûterait"},
    {"form":"costarías","infinitive":"costar","tense":"condicional","person":"tú","fr":"tu coûterais"},
    {"form":"costaríamos","infinitive":"costar","tense":"condicional","person":"nosotros","fr":"nous coûterions"},
    {"form":"costaríais","infinitive":"costar","tense":"condicional","person":"vosotros","fr":"vous coûteriez"},
    {"form":"costarían","infinitive":"costar","tense":"condicional","person":"ellos/ellas/ustedes","fr":"ils/elles coûteraient"},
    {"form":"costando","infinitive":"costar","tense":"presente_continuo","person":"gérondif","fr":"en train de coûter (ou : en coûtant)"},
    {"form":"costado","infinitive":"costar","tense":"perfecto","person":"participe","fr":"coûté (participe passé)"},
    {"form":"cuento","infinitive":"contar","tense":"presente","person":"yo","fr":"je raconte (ou : compter)"},
    {"form":"cuentas","infinitive":"contar","tense":"presente","person":"tú","fr":"tu racontes (ou : compter)"},
    {"form":"cuenta","infinitive":"contar","tense":"presente","person":"él/ella/usted","fr":"il/elle raconte (ou : compter)"},
    {"form":"contamos","infinitive":"contar","tense":"presente","person":"nosotros","fr":"nous racontons (ou : compter)"},
    {"form":"contáis","infinitive":"contar","tense":"presente","person":"vosotros","fr":"vous racontez (ou : compter)"},
    {"form":"cuentan","infinitive":"contar","tense":"presente","person":"ellos/ellas/ustedes","fr":"ils/elles racontent (ou : compter)"},
    {"form":"conté","infinitive":"contar","tense":"indefinido","person":"yo","fr":"j'ai raconté"},
    {"form":"contaste","infinitive":"contar","tense":"indefinido","person":"tú","fr":"tu as raconté"},
    {"form":"contó","infinitive":"contar","tense":"indefinido","person":"él/ella/usted","fr":"il/elle a raconté"},
    {"form":"contamos","infinitive":"contar","tense":"indefinido","person":"nosotros","fr":"nous avons raconté"},
    {"form":"contasteis","infinitive":"contar","tense":"indefinido","person":"vosotros","fr":"vous avez raconté"},
    {"form":"contaron","infinitive":"contar","tense":"indefinido","person":"ellos/ellas/ustedes","fr":"ils/elles ont raconté"},
    {"form":"contaba","infinitive":"contar","tense":"imperfecto","person":"yo / él/ella/usted","fr":"je racontais / il/elle racontait"},
    {"form":"contabas","infinitive":"contar","tense":"imperfecto","person":"tú","fr":"tu racontais"},
    {"form":"contábamos","infinitive":"contar","tense":"imperfecto","person":"nosotros","fr":"nous racontions"},
    {"form":"contabais","infinitive":"contar","tense":"imperfecto","person":"vosotros","fr":"vous racontiez"},
    {"form":"contaban","infinitive":"contar","tense":"imperfecto","person":"ellos/ellas/ustedes","fr":"ils/elles racontaient"},
    {"form":"contaré","infinitive":"contar","tense":"futuro","person":"yo","fr":"je raconterai"},
    {"form":"contarás","infinitive":"contar","tense":"futuro","person":"tú","fr":"tu raconteras"},
    {"form":"contará","infinitive":"contar","tense":"futuro","person":"él/ella/usted","fr":"il/elle racontera"},
    {"form":"contaremos","infinitive":"contar","tense":"futuro","person":"nosotros","fr":"nous raconterons"},
    {"form":"contaréis","infinitive":"contar","tense":"futuro","person":"vosotros","fr":"vous raconterez"},
    {"form":"contarán","infinitive":"contar","tense":"futuro","person":"ellos/ellas/ustedes","fr":"ils/elles raconteront"},
    {"form":"contaría","infinitive":"contar","tense":"condicional","person":"yo / él/ella/usted","fr":"je raconterais / il/elle raconterait"},
    {"form":"contarías","infinitive":"contar","tense":"condicional","person":"tú","fr":"tu raconterais"},
    {"form":"contaríamos","infinitive":"contar","tense":"condicional","person":"nosotros","fr":"nous raconterions"},
    {"form":"contaríais","infinitive":"contar","tense":"condicional","person":"vosotros","fr":"vous raconteriez"},
    {"form":"contarían","infinitive":"contar","tense":"condicional","person":"ellos/ellas/ustedes","fr":"ils/elles raconteraient"},
    {"form":"cuenta","infinitive":"contar","tense":"imperativo","person":"tú (ordre)","fr":"raconte ! (ordre à « tu »)"},
    {"form":"contando","infinitive":"contar","tense":"presente_continuo","person":"gérondif","fr":"en train de raconter (ou : en racontant)"},
    {"form":"contado","infinitive":"contar","tense":"perfecto","person":"participe","fr":"raconté (participe passé)"},
    {"form":"entiendo","infinitive":"entender","tense":"presente","person":"yo","fr":"je comprends"},
    {"form":"entiendes","infinitive":"entender","tense":"presente","person":"tú","fr":"tu comprends"},
    {"form":"entiende","infinitive":"entender","tense":"presente","person":"él/ella/usted","fr":"il/elle comprend"},
    {"form":"entendemos","infinitive":"entender","tense":"presente","person":"nosotros","fr":"nous comprenons"},
    {"form":"entendéis","infinitive":"entender","tense":"presente","person":"vosotros","fr":"vous comprenez"},
    {"form":"entienden","infinitive":"entender","tense":"presente","person":"ellos/ellas/ustedes","fr":"ils/elles comprennent"},
    {"form":"entendí","infinitive":"entender","tense":"indefinido","person":"yo","fr":"j'ai compris"},
    {"form":"entendiste","infinitive":"entender","tense":"indefinido","person":"tú","fr":"tu as compris"},
    {"form":"entendió","infinitive":"entender","tense":"indefinido","person":"él/ella/usted","fr":"il/elle a compris"},
    {"form":"entendimos","infinitive":"entender","tense":"indefinido","person":"nosotros","fr":"nous avons compris"},
    {"form":"entendisteis","infinitive":"entender","tense":"indefinido","person":"vosotros","fr":"vous avez compris"},
    {"form":"entendieron","infinitive":"entender","tense":"indefinido","person":"ellos/ellas/ustedes","fr":"ils/elles ont compris"},
    {"form":"entendía","infinitive":"entender","tense":"imperfecto","person":"yo / él/ella/usted","fr":"je comprenais / il/elle comprenait"},
    {"form":"entendías","infinitive":"entender","tense":"imperfecto","person":"tú","fr":"tu comprenais"},
    {"form":"entendíamos","infinitive":"entender","tense":"imperfecto","person":"nosotros","fr":"nous comprenions"},
    {"form":"entendíais","infinitive":"entender","tense":"imperfecto","person":"vosotros","fr":"vous compreniez"},
    {"form":"entendían","infinitive":"entender","tense":"imperfecto","person":"ellos/ellas/ustedes","fr":"ils/elles comprenaient"},
    {"form":"entenderé","infinitive":"entender","tense":"futuro","person":"yo","fr":"je comprendrai"},
    {"form":"entenderás","infinitive":"entender","tense":"futuro","person":"tú","fr":"tu comprendras"},
    {"form":"entenderá","infinitive":"entender","tense":"futuro","person":"él/ella/usted","fr":"il/elle comprendra"},
    {"form":"entenderemos","infinitive":"entender","tense":"futuro","person":"nosotros","fr":"nous comprendrons"},
    {"form":"entenderéis","infinitive":"entender","tense":"futuro","person":"vosotros","fr":"vous comprendrez"},
    {"form":"entenderán","infinitive":"entender","tense":"futuro","person":"ellos/ellas/ustedes","fr":"ils/elles comprendront"},
    {"form":"entendería","infinitive":"entender","tense":"condicional","person":"yo / él/ella/usted","fr":"je comprendrais / il/elle comprendrait"},
    {"form":"entenderías","infinitive":"entender","tense":"condicional","person":"tú","fr":"tu comprendrais"},
    {"form":"entenderíamos","infinitive":"entender","tense":"condicional","person":"nosotros","fr":"nous comprendrions"},
    {"form":"entenderíais","infinitive":"entender","tense":"condicional","person":"vosotros","fr":"vous comprendriez"},
    {"form":"entenderían","infinitive":"entender","tense":"condicional","person":"ellos/ellas/ustedes","fr":"ils/elles comprendraient"},
    {"form":"entiende","infinitive":"entender","tense":"imperativo","person":"tú (ordre)","fr":"comprends ! (ordre à « tu »)"},
    {"form":"entendiendo","infinitive":"entender","tense":"presente_continuo","person":"gérondif","fr":"en train de comprendre (ou : en comprenant)"},
    {"form":"entendido","infinitive":"entender","tense":"perfecto","person":"participe","fr":"compris (participe passé)"},
    {"form":"cierro","infinitive":"cerrar","tense":"presente","person":"yo","fr":"je ferme"},
    {"form":"cierras","infinitive":"cerrar","tense":"presente","person":"tú","fr":"tu fermes"},
    {"form":"cierra","infinitive":"cerrar","tense":"presente","person":"él/ella/usted","fr":"il/elle ferme"},
    {"form":"cerramos","infinitive":"cerrar","tense":"presente","person":"nosotros","fr":"nous fermons"},
    {"form":"cerráis","infinitive":"cerrar","tense":"presente","person":"vosotros","fr":"vous fermez"},
    {"form":"cierran","infinitive":"cerrar","tense":"presente","person":"ellos/ellas/ustedes","fr":"ils/elles ferment"},
    {"form":"cerré","infinitive":"cerrar","tense":"indefinido","person":"yo","fr":"j'ai fermé"},
    {"form":"cerraste","infinitive":"cerrar","tense":"indefinido","person":"tú","fr":"tu as fermé"},
    {"form":"cerró","infinitive":"cerrar","tense":"indefinido","person":"él/ella/usted","fr":"il/elle a fermé"},
    {"form":"cerramos","infinitive":"cerrar","tense":"indefinido","person":"nosotros","fr":"nous avons fermé"},
    {"form":"cerrasteis","infinitive":"cerrar","tense":"indefinido","person":"vosotros","fr":"vous avez fermé"},
    {"form":"cerraron","infinitive":"cerrar","tense":"indefinido","person":"ellos/ellas/ustedes","fr":"ils/elles ont fermé"},
    {"form":"cerraba","infinitive":"cerrar","tense":"imperfecto","person":"yo / él/ella/usted","fr":"je fermais / il/elle fermait"},
    {"form":"cerrabas","infinitive":"cerrar","tense":"imperfecto","person":"tú","fr":"tu fermais"},
    {"form":"cerrábamos","infinitive":"cerrar","tense":"imperfecto","person":"nosotros","fr":"nous fermions"},
    {"form":"cerrabais","infinitive":"cerrar","tense":"imperfecto","person":"vosotros","fr":"vous fermiez"},
    {"form":"cerraban","infinitive":"cerrar","tense":"imperfecto","person":"ellos/ellas/ustedes","fr":"ils/elles fermaient"},
    {"form":"cerraré","infinitive":"cerrar","tense":"futuro","person":"yo","fr":"je fermerai"},
    {"form":"cerrarás","infinitive":"cerrar","tense":"futuro","person":"tú","fr":"tu fermeras"},
    {"form":"cerrará","infinitive":"cerrar","tense":"futuro","person":"él/ella/usted","fr":"il/elle fermera"},
    {"form":"cerraremos","infinitive":"cerrar","tense":"futuro","person":"nosotros","fr":"nous fermerons"},
    {"form":"cerraréis","infinitive":"cerrar","tense":"futuro","person":"vosotros","fr":"vous fermerez"},
    {"form":"cerrarán","infinitive":"cerrar","tense":"futuro","person":"ellos/ellas/ustedes","fr":"ils/elles fermeront"},
    {"form":"cerraría","infinitive":"cerrar","tense":"condicional","person":"yo / él/ella/usted","fr":"je fermerais / il/elle fermerait"},
    {"form":"cerrarías","infinitive":"cerrar","tense":"condicional","person":"tú","fr":"tu fermerais"},
    {"form":"cerraríamos","infinitive":"cerrar","tense":"condicional","person":"nosotros","fr":"nous fermerions"},
    {"form":"cerraríais","infinitive":"cerrar","tense":"condicional","person":"vosotros","fr":"vous fermeriez"},
    {"form":"cerrarían","infinitive":"cerrar","tense":"condicional","person":"ellos/ellas/ustedes","fr":"ils/elles fermeraient"},
    {"form":"cierra","infinitive":"cerrar","tense":"imperativo","person":"tú (ordre)","fr":"ferme ! (ordre à « tu »)"},
    {"form":"cerrando","infinitive":"cerrar","tense":"presente_continuo","person":"gérondif","fr":"en train de fermer (ou : en fermant)"},
    {"form":"cerrado","infinitive":"cerrar","tense":"perfecto","person":"participe","fr":"fermé (participe passé)"},
    {"form":"río","infinitive":"reír","tense":"presente","person":"yo","fr":"je ris"},
    {"form":"ríes","infinitive":"reír","tense":"presente","person":"tú","fr":"tu ris"},
    {"form":"ríe","infinitive":"reír","tense":"presente","person":"él/ella/usted","fr":"il/elle rit"},
    {"form":"reímos","infinitive":"reír","tense":"presente","person":"nosotros","fr":"nous rions"},
    {"form":"reís","infinitive":"reír","tense":"presente","person":"vosotros","fr":"vous riez"},
    {"form":"ríen","infinitive":"reír","tense":"presente","person":"ellos/ellas/ustedes","fr":"ils/elles rient"},
    {"form":"reí","infinitive":"reír","tense":"indefinido","person":"yo","fr":"j'ai ri"},
    {"form":"reíste","infinitive":"reír","tense":"indefinido","person":"tú","fr":"tu as ri"},
    {"form":"rio","infinitive":"reír","tense":"indefinido","person":"él/ella/usted","fr":"il/elle a ri"},
    {"form":"reímos","infinitive":"reír","tense":"indefinido","person":"nosotros","fr":"nous avons ri"},
    {"form":"reísteis","infinitive":"reír","tense":"indefinido","person":"vosotros","fr":"vous avez ri"},
    {"form":"rieron","infinitive":"reír","tense":"indefinido","person":"ellos/ellas/ustedes","fr":"ils/elles ont ri"},
    {"form":"reía","infinitive":"reír","tense":"imperfecto","person":"yo / él/ella/usted","fr":"je riais / il/elle riait"},
    {"form":"reías","infinitive":"reír","tense":"imperfecto","person":"tú","fr":"tu riais"},
    {"form":"reíamos","infinitive":"reír","tense":"imperfecto","person":"nosotros","fr":"nous riions"},
    {"form":"reíais","infinitive":"reír","tense":"imperfecto","person":"vosotros","fr":"vous riiez"},
    {"form":"reían","infinitive":"reír","tense":"imperfecto","person":"ellos/ellas/ustedes","fr":"ils/elles riaient"},
    {"form":"reiré","infinitive":"reír","tense":"futuro","person":"yo","fr":"je rirai"},
    {"form":"reirás","infinitive":"reír","tense":"futuro","person":"tú","fr":"tu riras"},
    {"form":"reirá","infinitive":"reír","tense":"futuro","person":"él/ella/usted","fr":"il/elle rira"},
    {"form":"reiremos","infinitive":"reír","tense":"futuro","person":"nosotros","fr":"nous rirons"},
    {"form":"reiréis","infinitive":"reír","tense":"futuro","person":"vosotros","fr":"vous rirez"},
    {"form":"reirán","infinitive":"reír","tense":"futuro","person":"ellos/ellas/ustedes","fr":"ils/elles riront"},
    {"form":"reiría","infinitive":"reír","tense":"condicional","person":"yo / él/ella/usted","fr":"je rirais / il/elle rirait"},
    {"form":"reirías","infinitive":"reír","tense":"condicional","person":"tú","fr":"tu rirais"},
    {"form":"reiríamos","infinitive":"reír","tense":"condicional","person":"nosotros","fr":"nous ririons"},
    {"form":"reiríais","infinitive":"reír","tense":"condicional","person":"vosotros","fr":"vous ririez"},
    {"form":"reirían","infinitive":"reír","tense":"condicional","person":"ellos/ellas/ustedes","fr":"ils/elles riraient"},
    {"form":"ríe","infinitive":"reír","tense":"imperativo","person":"tú (ordre)","fr":"ris ! (ordre à « tu »)"},
    {"form":"riendo","infinitive":"reír","tense":"presente_continuo","person":"gérondif","fr":"en train de rire (ou : en riant)"},
    {"form":"reído","infinitive":"reír","tense":"perfecto","person":"participe","fr":"ri (participe passé)"},
    {"form":"busco","infinitive":"buscar","tense":"presente","person":"yo","fr":"je cherche"},
    {"form":"buscas","infinitive":"buscar","tense":"presente","person":"tú","fr":"tu cherches"},
    {"form":"busca","infinitive":"buscar","tense":"presente","person":"él/ella/usted","fr":"il/elle cherche"},
    {"form":"buscamos","infinitive":"buscar","tense":"presente","person":"nosotros","fr":"nous cherchons"},
    {"form":"buscáis","infinitive":"buscar","tense":"presente","person":"vosotros","fr":"vous cherchez"},
    {"form":"buscan","infinitive":"buscar","tense":"presente","person":"ellos/ellas/ustedes","fr":"ils/elles cherchent"},
    {"form":"busqué","infinitive":"buscar","tense":"indefinido","person":"yo","fr":"j'ai cherché"},
    {"form":"buscaste","infinitive":"buscar","tense":"indefinido","person":"tú","fr":"tu as cherché"},
    {"form":"buscó","infinitive":"buscar","tense":"indefinido","person":"él/ella/usted","fr":"il/elle a cherché"},
    {"form":"buscamos","infinitive":"buscar","tense":"indefinido","person":"nosotros","fr":"nous avons cherché"},
    {"form":"buscasteis","infinitive":"buscar","tense":"indefinido","person":"vosotros","fr":"vous avez cherché"},
    {"form":"buscaron","infinitive":"buscar","tense":"indefinido","person":"ellos/ellas/ustedes","fr":"ils/elles ont cherché"},
    {"form":"buscaba","infinitive":"buscar","tense":"imperfecto","person":"yo / él/ella/usted","fr":"je cherchais / il/elle cherchait"},
    {"form":"buscabas","infinitive":"buscar","tense":"imperfecto","person":"tú","fr":"tu cherchais"},
    {"form":"buscábamos","infinitive":"buscar","tense":"imperfecto","person":"nosotros","fr":"nous cherchions"},
    {"form":"buscabais","infinitive":"buscar","tense":"imperfecto","person":"vosotros","fr":"vous cherchiez"},
    {"form":"buscaban","infinitive":"buscar","tense":"imperfecto","person":"ellos/ellas/ustedes","fr":"ils/elles cherchaient"},
    {"form":"buscaré","infinitive":"buscar","tense":"futuro","person":"yo","fr":"je chercherai"},
    {"form":"buscarás","infinitive":"buscar","tense":"futuro","person":"tú","fr":"tu chercheras"},
    {"form":"buscará","infinitive":"buscar","tense":"futuro","person":"él/ella/usted","fr":"il/elle cherchera"},
    {"form":"buscaremos","infinitive":"buscar","tense":"futuro","person":"nosotros","fr":"nous chercherons"},
    {"form":"buscaréis","infinitive":"buscar","tense":"futuro","person":"vosotros","fr":"vous chercherez"},
    {"form":"buscarán","infinitive":"buscar","tense":"futuro","person":"ellos/ellas/ustedes","fr":"ils/elles chercheront"},
    {"form":"buscaría","infinitive":"buscar","tense":"condicional","person":"yo / él/ella/usted","fr":"je chercherais / il/elle chercherait"},
    {"form":"buscarías","infinitive":"buscar","tense":"condicional","person":"tú","fr":"tu chercherais"},
    {"form":"buscaríamos","infinitive":"buscar","tense":"condicional","person":"nosotros","fr":"nous chercherions"},
    {"form":"buscaríais","infinitive":"buscar","tense":"condicional","person":"vosotros","fr":"vous chercheriez"},
    {"form":"buscarían","infinitive":"buscar","tense":"condicional","person":"ellos/ellas/ustedes","fr":"ils/elles chercheraient"},
    {"form":"busca","infinitive":"buscar","tense":"imperativo","person":"tú (ordre)","fr":"cherche ! (ordre à « tu »)"},
    {"form":"buscando","infinitive":"buscar","tense":"presente_continuo","person":"gérondif","fr":"en train de chercher (ou : en cherchant)"},
    {"form":"buscado","infinitive":"buscar","tense":"perfecto","person":"participe","fr":"cherché (participe passé)"},
    {"form":"llego","infinitive":"llegar","tense":"presente","person":"yo","fr":"j'arrive"},
    {"form":"llegas","infinitive":"llegar","tense":"presente","person":"tú","fr":"tu arrives"},
    {"form":"llega","infinitive":"llegar","tense":"presente","person":"él/ella/usted","fr":"il/elle arrive"},
    {"form":"llegamos","infinitive":"llegar","tense":"presente","person":"nosotros","fr":"nous arrivons"},
    {"form":"llegáis","infinitive":"llegar","tense":"presente","person":"vosotros","fr":"vous arrivez"},
    {"form":"llegan","infinitive":"llegar","tense":"presente","person":"ellos/ellas/ustedes","fr":"ils/elles arrivent"},
    {"form":"llegué","infinitive":"llegar","tense":"indefinido","person":"yo","fr":"je suis arrivé(e)"},
    {"form":"llegaste","infinitive":"llegar","tense":"indefinido","person":"tú","fr":"tu es arrivé(e)"},
    {"form":"llegó","infinitive":"llegar","tense":"indefinido","person":"él/ella/usted","fr":"il/elle est arrivé(e)"},
    {"form":"llegamos","infinitive":"llegar","tense":"indefinido","person":"nosotros","fr":"nous sommes arrivé(e)s"},
    {"form":"llegasteis","infinitive":"llegar","tense":"indefinido","person":"vosotros","fr":"vous êtes arrivé(e)s"},
    {"form":"llegaron","infinitive":"llegar","tense":"indefinido","person":"ellos/ellas/ustedes","fr":"ils/elles sont arrivé(e)s"},
    {"form":"llegaba","infinitive":"llegar","tense":"imperfecto","person":"yo / él/ella/usted","fr":"j'arrivais / il/elle arrivait"},
    {"form":"llegabas","infinitive":"llegar","tense":"imperfecto","person":"tú","fr":"tu arrivais"},
    {"form":"llegábamos","infinitive":"llegar","tense":"imperfecto","person":"nosotros","fr":"nous arrivions"},
    {"form":"llegabais","infinitive":"llegar","tense":"imperfecto","person":"vosotros","fr":"vous arriviez"},
    {"form":"llegaban","infinitive":"llegar","tense":"imperfecto","person":"ellos/ellas/ustedes","fr":"ils/elles arrivaient"},
    {"form":"llegaré","infinitive":"llegar","tense":"futuro","person":"yo","fr":"j'arriverai"},
    {"form":"llegarás","infinitive":"llegar","tense":"futuro","person":"tú","fr":"tu arriveras"},
    {"form":"llegará","infinitive":"llegar","tense":"futuro","person":"él/ella/usted","fr":"il/elle arrivera"},
    {"form":"llegaremos","infinitive":"llegar","tense":"futuro","person":"nosotros","fr":"nous arriverons"},
    {"form":"llegaréis","infinitive":"llegar","tense":"futuro","person":"vosotros","fr":"vous arriverez"},
    {"form":"llegarán","infinitive":"llegar","tense":"futuro","person":"ellos/ellas/ustedes","fr":"ils/elles arriveront"},
    {"form":"llegaría","infinitive":"llegar","tense":"condicional","person":"yo / él/ella/usted","fr":"j'arriverais / il/elle arriverait"},
    {"form":"llegarías","infinitive":"llegar","tense":"condicional","person":"tú","fr":"tu arriverais"},
    {"form":"llegaríamos","infinitive":"llegar","tense":"condicional","person":"nosotros","fr":"nous arriverions"},
    {"form":"llegaríais","infinitive":"llegar","tense":"condicional","person":"vosotros","fr":"vous arriveriez"},
    {"form":"llegarían","infinitive":"llegar","tense":"condicional","person":"ellos/ellas/ustedes","fr":"ils/elles arriveraient"},
    {"form":"llega","infinitive":"llegar","tense":"imperativo","person":"tú (ordre)","fr":"arrive ! (ordre à « tu »)"},
    {"form":"llegando","infinitive":"llegar","tense":"presente_continuo","person":"gérondif","fr":"en train d'arriver (ou : en arrivant)"},
    {"form":"llegado","infinitive":"llegar","tense":"perfecto","person":"participe","fr":"arrivé (participe passé)"},
    {"form":"pago","infinitive":"pagar","tense":"presente","person":"yo","fr":"je paie"},
    {"form":"pagas","infinitive":"pagar","tense":"presente","person":"tú","fr":"tu paies"},
    {"form":"paga","infinitive":"pagar","tense":"presente","person":"él/ella/usted","fr":"il/elle paie"},
    {"form":"pagamos","infinitive":"pagar","tense":"presente","person":"nosotros","fr":"nous payons"},
    {"form":"pagáis","infinitive":"pagar","tense":"presente","person":"vosotros","fr":"vous payez"},
    {"form":"pagan","infinitive":"pagar","tense":"presente","person":"ellos/ellas/ustedes","fr":"ils/elles paient"},
    {"form":"pagué","infinitive":"pagar","tense":"indefinido","person":"yo","fr":"j'ai payé"},
    {"form":"pagaste","infinitive":"pagar","tense":"indefinido","person":"tú","fr":"tu as payé"},
    {"form":"pagó","infinitive":"pagar","tense":"indefinido","person":"él/ella/usted","fr":"il/elle a payé"},
    {"form":"pagamos","infinitive":"pagar","tense":"indefinido","person":"nosotros","fr":"nous avons payé"},
    {"form":"pagasteis","infinitive":"pagar","tense":"indefinido","person":"vosotros","fr":"vous avez payé"},
    {"form":"pagaron","infinitive":"pagar","tense":"indefinido","person":"ellos/ellas/ustedes","fr":"ils/elles ont payé"},
    {"form":"pagaba","infinitive":"pagar","tense":"imperfecto","person":"yo / él/ella/usted","fr":"je payais / il/elle payait"},
    {"form":"pagabas","infinitive":"pagar","tense":"imperfecto","person":"tú","fr":"tu payais"},
    {"form":"pagábamos","infinitive":"pagar","tense":"imperfecto","person":"nosotros","fr":"nous payions"},
    {"form":"pagabais","infinitive":"pagar","tense":"imperfecto","person":"vosotros","fr":"vous payiez"},
    {"form":"pagaban","infinitive":"pagar","tense":"imperfecto","person":"ellos/ellas/ustedes","fr":"ils/elles payaient"},
    {"form":"pagaré","infinitive":"pagar","tense":"futuro","person":"yo","fr":"je paierai"},
    {"form":"pagarás","infinitive":"pagar","tense":"futuro","person":"tú","fr":"tu paieras"},
    {"form":"pagará","infinitive":"pagar","tense":"futuro","person":"él/ella/usted","fr":"il/elle paiera"},
    {"form":"pagaremos","infinitive":"pagar","tense":"futuro","person":"nosotros","fr":"nous paierons"},
    {"form":"pagaréis","infinitive":"pagar","tense":"futuro","person":"vosotros","fr":"vous paierez"},
    {"form":"pagarán","infinitive":"pagar","tense":"futuro","person":"ellos/ellas/ustedes","fr":"ils/elles paieront"},
    {"form":"pagaría","infinitive":"pagar","tense":"condicional","person":"yo / él/ella/usted","fr":"je paierais / il/elle paierait"},
    {"form":"pagarías","infinitive":"pagar","tense":"condicional","person":"tú","fr":"tu paierais"},
    {"form":"pagaríamos","infinitive":"pagar","tense":"condicional","person":"nosotros","fr":"nous paierions"},
    {"form":"pagaríais","infinitive":"pagar","tense":"condicional","person":"vosotros","fr":"vous paieriez"},
    {"form":"pagarían","infinitive":"pagar","tense":"condicional","person":"ellos/ellas/ustedes","fr":"ils/elles paieraient"},
    {"form":"paga","infinitive":"pagar","tense":"imperativo","person":"tú (ordre)","fr":"paie ! (ordre à « tu »)"},
    {"form":"pagando","infinitive":"pagar","tense":"presente_continuo","person":"gérondif","fr":"en train de payer (ou : en payant)"},
    {"form":"pagado","infinitive":"pagar","tense":"perfecto","person":"participe","fr":"payé (participe passé)"},
    {"form":"abro","infinitive":"abrir","tense":"presente","person":"yo","fr":"j'ouvre"},
    {"form":"abres","infinitive":"abrir","tense":"presente","person":"tú","fr":"tu ouvres"},
    {"form":"abre","infinitive":"abrir","tense":"presente","person":"él/ella/usted","fr":"il/elle ouvre"},
    {"form":"abrimos","infinitive":"abrir","tense":"presente","person":"nosotros","fr":"nous ouvrons"},
    {"form":"abrís","infinitive":"abrir","tense":"presente","person":"vosotros","fr":"vous ouvrez"},
    {"form":"abren","infinitive":"abrir","tense":"presente","person":"ellos/ellas/ustedes","fr":"ils/elles ouvrent"},
    {"form":"abrí","infinitive":"abrir","tense":"indefinido","person":"yo","fr":"j'ai ouvert"},
    {"form":"abriste","infinitive":"abrir","tense":"indefinido","person":"tú","fr":"tu as ouvert"},
    {"form":"abrió","infinitive":"abrir","tense":"indefinido","person":"él/ella/usted","fr":"il/elle a ouvert"},
    {"form":"abrimos","infinitive":"abrir","tense":"indefinido","person":"nosotros","fr":"nous avons ouvert"},
    {"form":"abristeis","infinitive":"abrir","tense":"indefinido","person":"vosotros","fr":"vous avez ouvert"},
    {"form":"abrieron","infinitive":"abrir","tense":"indefinido","person":"ellos/ellas/ustedes","fr":"ils/elles ont ouvert"},
    {"form":"abría","infinitive":"abrir","tense":"imperfecto","person":"yo / él/ella/usted","fr":"j'ouvrais / il/elle ouvrait"},
    {"form":"abrías","infinitive":"abrir","tense":"imperfecto","person":"tú","fr":"tu ouvrais"},
    {"form":"abríamos","infinitive":"abrir","tense":"imperfecto","person":"nosotros","fr":"nous ouvrions"},
    {"form":"abríais","infinitive":"abrir","tense":"imperfecto","person":"vosotros","fr":"vous ouvriez"},
    {"form":"abrían","infinitive":"abrir","tense":"imperfecto","person":"ellos/ellas/ustedes","fr":"ils/elles ouvraient"},
    {"form":"abriré","infinitive":"abrir","tense":"futuro","person":"yo","fr":"j'ouvrirai"},
    {"form":"abrirás","infinitive":"abrir","tense":"futuro","person":"tú","fr":"tu ouvriras"},
    {"form":"abrirá","infinitive":"abrir","tense":"futuro","person":"él/ella/usted","fr":"il/elle ouvrira"},
    {"form":"abriremos","infinitive":"abrir","tense":"futuro","person":"nosotros","fr":"nous ouvrirons"},
    {"form":"abriréis","infinitive":"abrir","tense":"futuro","person":"vosotros","fr":"vous ouvrirez"},
    {"form":"abrirán","infinitive":"abrir","tense":"futuro","person":"ellos/ellas/ustedes","fr":"ils/elles ouvriront"},
    {"form":"abriría","infinitive":"abrir","tense":"condicional","person":"yo / él/ella/usted","fr":"j'ouvrirais / il/elle ouvrirait"},
    {"form":"abrirías","infinitive":"abrir","tense":"condicional","person":"tú","fr":"tu ouvrirais"},
    {"form":"abriríamos","infinitive":"abrir","tense":"condicional","person":"nosotros","fr":"nous ouvririons"},
    {"form":"abriríais","infinitive":"abrir","tense":"condicional","person":"vosotros","fr":"vous ouvririez"},
    {"form":"abrirían","infinitive":"abrir","tense":"condicional","person":"ellos/ellas/ustedes","fr":"ils/elles ouvriraient"},
    {"form":"abre","infinitive":"abrir","tense":"imperativo","person":"tú (ordre)","fr":"ouvre ! (ordre à « tu »)"},
    {"form":"abriendo","infinitive":"abrir","tense":"presente_continuo","person":"gérondif","fr":"en train d'ouvrir (ou : en ouvrant)"},
    {"form":"abierto","infinitive":"abrir","tense":"perfecto","person":"participe","fr":"ouvert (participe passé)"},
    {"form":"escribo","infinitive":"escribir","tense":"presente","person":"yo","fr":"j'écris"},
    {"form":"escribes","infinitive":"escribir","tense":"presente","person":"tú","fr":"tu écris"},
    {"form":"escribe","infinitive":"escribir","tense":"presente","person":"él/ella/usted","fr":"il/elle écrit"},
    {"form":"escribimos","infinitive":"escribir","tense":"presente","person":"nosotros","fr":"nous écrivons"},
    {"form":"escribís","infinitive":"escribir","tense":"presente","person":"vosotros","fr":"vous écrivez"},
    {"form":"escriben","infinitive":"escribir","tense":"presente","person":"ellos/ellas/ustedes","fr":"ils/elles écrivent"},
    {"form":"escribí","infinitive":"escribir","tense":"indefinido","person":"yo","fr":"j'ai écrit"},
    {"form":"escribiste","infinitive":"escribir","tense":"indefinido","person":"tú","fr":"tu as écrit"},
    {"form":"escribió","infinitive":"escribir","tense":"indefinido","person":"él/ella/usted","fr":"il/elle a écrit"},
    {"form":"escribimos","infinitive":"escribir","tense":"indefinido","person":"nosotros","fr":"nous avons écrit"},
    {"form":"escribisteis","infinitive":"escribir","tense":"indefinido","person":"vosotros","fr":"vous avez écrit"},
    {"form":"escribieron","infinitive":"escribir","tense":"indefinido","person":"ellos/ellas/ustedes","fr":"ils/elles ont écrit"},
    {"form":"escribía","infinitive":"escribir","tense":"imperfecto","person":"yo / él/ella/usted","fr":"j'écrivais / il/elle écrivait"},
    {"form":"escribías","infinitive":"escribir","tense":"imperfecto","person":"tú","fr":"tu écrivais"},
    {"form":"escribíamos","infinitive":"escribir","tense":"imperfecto","person":"nosotros","fr":"nous écrivions"},
    {"form":"escribíais","infinitive":"escribir","tense":"imperfecto","person":"vosotros","fr":"vous écriviez"},
    {"form":"escribían","infinitive":"escribir","tense":"imperfecto","person":"ellos/ellas/ustedes","fr":"ils/elles écrivaient"},
    {"form":"escribiré","infinitive":"escribir","tense":"futuro","person":"yo","fr":"j'écrirai"},
    {"form":"escribirás","infinitive":"escribir","tense":"futuro","person":"tú","fr":"tu écriras"},
    {"form":"escribirá","infinitive":"escribir","tense":"futuro","person":"él/ella/usted","fr":"il/elle écrira"},
    {"form":"escribiremos","infinitive":"escribir","tense":"futuro","person":"nosotros","fr":"nous écrirons"},
    {"form":"escribiréis","infinitive":"escribir","tense":"futuro","person":"vosotros","fr":"vous écrirez"},
    {"form":"escribirán","infinitive":"escribir","tense":"futuro","person":"ellos/ellas/ustedes","fr":"ils/elles écriront"},
    {"form":"escribiría","infinitive":"escribir","tense":"condicional","person":"yo / él/ella/usted","fr":"j'écrirais / il/elle écrirait"},
    {"form":"escribirías","infinitive":"escribir","tense":"condicional","person":"tú","fr":"tu écrirais"},
    {"form":"escribiríamos","infinitive":"escribir","tense":"condicional","person":"nosotros","fr":"nous écririons"},
    {"form":"escribiríais","infinitive":"escribir","tense":"condicional","person":"vosotros","fr":"vous écririez"},
    {"form":"escribirían","infinitive":"escribir","tense":"condicional","person":"ellos/ellas/ustedes","fr":"ils/elles écriraient"},
    {"form":"escribe","infinitive":"escribir","tense":"imperativo","person":"tú (ordre)","fr":"écris ! (ordre à « tu »)"},
    {"form":"escribiendo","infinitive":"escribir","tense":"presente_continuo","person":"gérondif","fr":"en train d'écrire (ou : en écrivant)"},
    {"form":"escrito","infinitive":"escribir","tense":"perfecto","person":"participe","fr":"écrit (participe passé)"},
    {"form":"hay","infinitive":"haber","tense":"presente","person":"impersonnel","fr":"il y a"},
    {"form":"hubo","infinitive":"haber","tense":"indefinido","person":"impersonnel","fr":"il y a eu"}
  ]
};

ATELIER.texts.push({
  id: "rutina-carlos", title: "Mi rutina diaria", level: "A1",
  intro: "Carlos raconte sa journée. Touche chaque mot pour voir ce que c'est.",
  sentences: [
    [ { w: "Me", pos: "pronom", info: "pronom réfléchi, 1re pers. sing.", fr: "me" },
      { w: "llamo", pos: "verbe", info: "llamarse, présent, yo", fr: "(je m')appelle" },
      { w: "Carlos", pos: "nom propre", info: "", fr: "Carlos" }, { w: ".", pos: "ponct" } ],
    [ { w: "Me", pos: "pronom", info: "pronom réfléchi, 1re pers. sing.", fr: "me" },
      { w: "levanto", pos: "verbe", info: "levantarse, présent, yo", fr: "(je me) lève" },
      { w: "a", pos: "préposition", info: "", fr: "à" },
      { w: "las", pos: "article", info: "article défini, féminin pluriel", fr: "les" },
      { w: "siete", pos: "déterminant", info: "nombre", fr: "sept" },
      { w: "y", pos: "conjonction", info: "", fr: "et" },
      { w: "desayuno", pos: "verbe", info: "desayunar, présent, yo", fr: "je prends le petit-déjeuner" },
      { w: "café", pos: "nom", info: "masculin singulier", fr: "café" },
      { w: "muy", pos: "adverbe", info: "", fr: "très" },
      { w: "caliente", pos: "adjectif", info: "masculin/féminin singulier", fr: "chaud" }, { w: ".", pos: "ponct" } ],
    [ { w: "¡", pos: "ponct" }, { w: "Vaya", pos: "interjection", info: "", fr: "Eh bien" }, { w: "!", pos: "ponct" } ]
  ],
  translation: "Je m'appelle Carlos. Je me lève à sept heures et je prends un café très chaud au petit-déjeuner. Eh bien !",
  questions: [
    { q: "À quelle heure se lève Carlos ?", opts: ["À six heures", "À sept heures", "À huit heures"], correct: 1, why: "« a las siete » = à sept heures." },
    { q: "« levanto » est…", opts: ["un nom", "un verbe", "un adjectif"], correct: 1, why: "levantarse, présent, yo." }
  ]
});

// Atelier de grammaire espagnole — 8 textes annotés A1
ATELIER.texts.push({ id:"me-presento", title:"Me presento", level:"A1", intro:"Sofía se présente : nom, âge, pays, métier et famille. Touche chaque mot pour voir ce que c’est.",
 sentences:[
  [ {"w":"Hola","pos":"interjection","fr":"bonjour"}, {"w":",","pos":"ponct"}, {"w":"me","pos":"pronom","info":"pronom réfléchi, 1re pers. sing.","fr":"me"}, {"w":"llamo","pos":"verbe","info":"llamarse, présent, yo","fr":"(je m')appelle"}, {"w":"Sofía","pos":"nom propre","fr":"Sofía"}, {"w":".","pos":"ponct"} ],
  [ {"w":"Tengo","pos":"verbe","info":"tener, présent, yo — pour l'âge on dit « tener … años »","fr":"j'ai"}, {"w":"veinticinco","pos":"déterminant","info":"nombre","fr":"vingt-cinq"}, {"w":"años","pos":"nom","info":"masculin pluriel","fr":"ans"}, {"w":".","pos":"ponct"} ],
  [ {"w":"Soy","pos":"verbe","info":"ser, présent, yo","fr":"je suis"}, {"w":"de","pos":"préposition","info":"ser de + pays = origine","fr":"de"}, {"w":"Colombia","pos":"nom propre","fr":"Colombie"}, {"w":"y","pos":"conjonction","fr":"et"}, {"w":"vivo","pos":"verbe","info":"vivir, présent, yo","fr":"j'habite"}, {"w":"en","pos":"préposition","fr":"à / en"}, {"w":"Madrid","pos":"nom propre","fr":"Madrid"}, {"w":".","pos":"ponct"} ],
  [ {"w":"Soy","pos":"verbe","info":"ser, présent, yo — pas d'article devant le métier","fr":"je suis"}, {"w":"enfermera","pos":"nom","info":"féminin singulier (le masculin est « enfermero »)","fr":"infirmière"}, {"w":"y","pos":"conjonction","fr":"et"}, {"w":"trabajo","pos":"verbe","info":"trabajar, présent, yo","fr":"je travaille"}, {"w":"en","pos":"préposition","fr":"dans / à"}, {"w":"un","pos":"article","info":"article indéfini, masculin singulier","fr":"un"}, {"w":"hospital","pos":"nom","info":"masculin singulier","fr":"hôpital"}, {"w":".","pos":"ponct"} ],
  [ {"w":"Mi","pos":"déterminant","info":"possessif, singulier","fr":"mon / ma"}, {"w":"madre","pos":"nom","info":"féminin singulier","fr":"mère"}, {"w":"es","pos":"verbe","info":"ser, présent, ella","fr":"est"}, {"w":"mexicana","pos":"adjectif","info":"féminin singulier — pas de majuscule pour la nationalité","fr":"mexicaine"}, {"w":"y","pos":"conjonction","fr":"et"}, {"w":"mi","pos":"déterminant","info":"possessif, singulier","fr":"mon / ma"}, {"w":"padre","pos":"nom","info":"masculin singulier","fr":"père"}, {"w":"es","pos":"verbe","info":"ser, présent, él","fr":"est"}, {"w":"francés","pos":"adjectif","info":"masculin singulier","fr":"français"}, {"w":".","pos":"ponct"} ],
  [ {"w":"Estoy","pos":"verbe","info":"estar, présent, yo — l'état civil se dit avec estar","fr":"je suis"}, {"w":"casada","pos":"adjectif","info":"féminin singulier","fr":"mariée"}, {"w":"y","pos":"conjonction","fr":"et"}, {"w":"tengo","pos":"verbe","info":"tener, présent, yo","fr":"j'ai"}, {"w":"un","pos":"article","info":"article indéfini, masculin singulier","fr":"un"}, {"w":"hijo","pos":"nom","info":"masculin singulier","fr":"fils"}, {"w":".","pos":"ponct"} ],
  [ {"w":"Mi","pos":"déterminant","info":"possessif, singulier","fr":"mon / ma"}, {"w":"hijo","pos":"nom","info":"masculin singulier","fr":"fils"}, {"w":"se","pos":"pronom","info":"pronom réfléchi, 3e pers.","fr":"se"}, {"w":"llama","pos":"verbe","info":"llamarse, présent, él","fr":"s'appelle"}, {"w":"Pablo","pos":"nom propre","fr":"Pablo"}, {"w":"y","pos":"conjonction","fr":"et"}, {"w":"tiene","pos":"verbe","info":"tener, présent, él","fr":"il a"}, {"w":"tres","pos":"déterminant","info":"nombre","fr":"trois"}, {"w":"años","pos":"nom","info":"masculin pluriel","fr":"ans"}, {"w":".","pos":"ponct"} ],
  [ {"w":"Me","pos":"pronom","info":"pronom objet indirect, 1re pers. sing. — me gusta = « ça me plaît »","fr":"me / à moi"}, {"w":"gusta","pos":"verbe","info":"gustar, présent, él/ella — le sujet est ce qui plaît (ici : bailar y cocinar)","fr":"plaît"}, {"w":"bailar","pos":"verbe","info":"bailar, infinitif","fr":"danser"}, {"w":"y","pos":"conjonction","fr":"et"}, {"w":"cocinar","pos":"verbe","info":"cocinar, infinitif","fr":"cuisiner"}, {"w":".","pos":"ponct"} ],
  [ {"w":"¡","pos":"ponct"}, {"w":"Mucho","pos":"déterminant","info":"quantité, masculin singulier — « mucho gusto » = enchanté(e)","fr":"grand"}, {"w":"gusto","pos":"nom","info":"masculin singulier","fr":"plaisir"}, {"w":"!","pos":"ponct"} ]
 ],
 translation:"Bonjour, je m'appelle Sofía. J'ai vingt-cinq ans. Je suis de Colombie et j'habite à Madrid. Je suis infirmière et je travaille dans un hôpital. Ma mère est mexicaine et mon père est français. Je suis mariée et j'ai un fils. Mon fils s'appelle Pablo et il a trois ans. J'aime danser et cuisiner. Enchantée !",
 questions:[{"q":"De quel pays est Sofía ?","opts":["De Colombie","Du Mexique","De France"],"correct":0,"why":"« Soy de Colombia » : ser de + pays pour l'origine. Sa mère est mexicaine, son père français."},{"q":"Quel est le métier de Sofía ?","opts":["Professeure","Infirmière","Serveuse"],"correct":1,"why":"« Soy enfermera en un hospital » = je suis infirmière dans un hôpital."},{"q":"Quel âge a son fils Pablo ?","opts":["Deux ans","Cinq ans","Trois ans"],"correct":2,"why":"« tiene tres años » : tener + nombre + años pour dire l'âge."}]
});

ATELIER.texts.push({ id:"mi-familia", title:"Mi familia", level:"A1", intro:"Une jeune femme présente sa famille. Touche chaque mot pour voir ce que c’est.",
 sentences:[
  [ {"w":"Mi","pos":"déterminant","info":"possessif, singulier","fr":"mon / ma"}, {"w":"familia","pos":"nom","info":"féminin singulier","fr":"famille"}, {"w":"es","pos":"verbe","info":"ser, présent, ella (la familia = 3e pers. sing.)","fr":"est"}, {"w":"grande","pos":"adjectif","info":"masculin/féminin singulier — grande ne change pas au féminin","fr":"grande"}, {"w":".","pos":"ponct"} ],
  [ {"w":"Mi","pos":"déterminant","info":"possessif, singulier","fr":"mon / ma"}, {"w":"padre","pos":"nom","info":"masculin singulier","fr":"père"}, {"w":"se","pos":"pronom","info":"pronom réfléchi, 3e pers.","fr":"se"}, {"w":"llama","pos":"verbe","info":"llamarse, présent, él","fr":"s'appelle"}, {"w":"Luis","pos":"nom propre","fr":"Luis"}, {"w":"y","pos":"conjonction","fr":"et"}, {"w":"tiene","pos":"verbe","info":"tener, présent, él","fr":"il a"}, {"w":"cincuenta","pos":"déterminant","info":"nombre","fr":"cinquante"}, {"w":"años","pos":"nom","info":"masculin pluriel","fr":"ans"}, {"w":".","pos":"ponct"} ],
  [ {"w":"Mi","pos":"déterminant","info":"possessif, singulier","fr":"mon / ma"}, {"w":"madre","pos":"nom","info":"féminin singulier","fr":"mère"}, {"w":"es","pos":"verbe","info":"ser, présent, ella — ser pour décrire","fr":"est"}, {"w":"simpática","pos":"adjectif","info":"féminin singulier","fr":"sympathique"}, {"w":"y","pos":"conjonction","fr":"et"}, {"w":"muy","pos":"adverbe","fr":"très"}, {"w":"guapa","pos":"adjectif","info":"féminin singulier","fr":"belle / jolie"}, {"w":".","pos":"ponct"} ],
  [ {"w":"Tengo","pos":"verbe","info":"tener, présent, yo","fr":"j'ai"}, {"w":"dos","pos":"déterminant","info":"nombre","fr":"deux"}, {"w":"hermanos","pos":"nom","info":"masculin pluriel — « hermanos » peut aussi désigner frères et sœurs","fr":"frères"}, {"w":"y","pos":"conjonction","fr":"et"}, {"w":"una","pos":"article","info":"article indéfini, féminin singulier","fr":"une"}, {"w":"hermana","pos":"nom","info":"féminin singulier","fr":"sœur"}, {"w":".","pos":"ponct"} ],
  [ {"w":"Mi","pos":"déterminant","info":"possessif, singulier","fr":"mon / ma"}, {"w":"hermano","pos":"nom","info":"masculin singulier","fr":"frère"}, {"w":"mayor","pos":"adjectif","info":"masculin/féminin singulier — « hermano mayor » = grand frère, aîné","fr":"aîné / plus âgé"}, {"w":"es","pos":"verbe","info":"ser, présent, él","fr":"est"}, {"w":"alto","pos":"adjectif","info":"masculin singulier","fr":"grand"}, {"w":"y","pos":"conjonction","fr":"et"}, {"w":"trabaja","pos":"verbe","info":"trabajar, présent, él","fr":"il travaille"}, {"w":"en","pos":"préposition","fr":"dans / à"}, {"w":"una","pos":"article","info":"article indéfini, féminin singulier","fr":"une"}, {"w":"oficina","pos":"nom","info":"féminin singulier","fr":"bureau"}, {"w":".","pos":"ponct"} ],
  [ {"w":"Mi","pos":"déterminant","info":"possessif, singulier","fr":"mon / ma"}, {"w":"hermana","pos":"nom","info":"féminin singulier","fr":"sœur"}, {"w":"es","pos":"verbe","info":"ser, présent, ella","fr":"est"}, {"w":"pequeña","pos":"adjectif","info":"féminin singulier","fr":"petite"}, {"w":"y","pos":"conjonction","fr":"et"}, {"w":"estudia","pos":"verbe","info":"estudiar, présent, ella","fr":"elle étudie"}, {"w":"en","pos":"préposition","fr":"à / dans"}, {"w":"el","pos":"article","info":"article défini, masculin singulier","fr":"le"}, {"w":"colegio","pos":"nom","info":"masculin singulier","fr":"collège / école"}, {"w":".","pos":"ponct"} ],
  [ {"w":"Mis","pos":"déterminant","info":"possessif, pluriel","fr":"mes"}, {"w":"abuelos","pos":"nom","info":"masculin pluriel — abuelo + abuela = les grands-parents","fr":"grands-parents"}, {"w":"viven","pos":"verbe","info":"vivir, présent, ellos","fr":"ils habitent"}, {"w":"con","pos":"préposition","fr":"avec"}, {"w":"nosotros","pos":"pronom","info":"pronom tonique, 1re pers. plur.","fr":"nous"}, {"w":".","pos":"ponct"} ],
  [ {"w":"Me","pos":"pronom","info":"pronom objet indirect, 1re pers. sing. — me gusta = « ça me plaît »","fr":"me / à moi"}, {"w":"gusta","pos":"verbe","info":"gustar, présent, él/ella — le sujet est ce qui plaît (mi familia)","fr":"plaît"}, {"w":"mucho","pos":"adverbe","fr":"beaucoup"}, {"w":"mi","pos":"déterminant","info":"possessif, singulier","fr":"mon / ma"}, {"w":"familia","pos":"nom","info":"féminin singulier","fr":"famille"}, {"w":".","pos":"ponct"} ]
 ],
 translation:"Ma famille est grande. Mon père s'appelle Luis et il a cinquante ans. Ma mère est sympathique et très belle. J'ai deux frères et une sœur. Mon frère aîné est grand et travaille dans un bureau. Ma sœur est petite et étudie au collège. Mes grands-parents vivent avec nous. J'aime beaucoup ma famille.",
 questions:[{"q":"Comment s'appelle le père ?","opts":["Pablo","Carlos","Luis"],"correct":2,"why":"« Mi padre se llama Luis »."},{"q":"Combien de frères et sœurs la narratrice a-t-elle ?","opts":["Deux","Trois","Quatre"],"correct":1,"why":"« dos hermanos y una hermana » = 2 + 1 = trois."},{"q":"Où travaille son frère aîné ?","opts":["Dans un bureau","À l'hôpital","Dans un magasin"],"correct":0,"why":"« trabaja en una oficina » = il travaille dans un bureau."}]
});

ATELIER.texts.push({ id:"mi-casa", title:"Mi casa", level:"A1", intro:"Une femme décrit sa petite maison. Touche chaque mot pour voir ce que c’est.",
 sentences:[
  [ {"w":"Mi","pos":"déterminant","info":"possessif, singulier","fr":"mon / ma"}, {"w":"casa","pos":"nom","info":"féminin singulier","fr":"maison"}, {"w":"es","pos":"verbe","info":"ser, présent, ella","fr":"est"}, {"w":"pequeña","pos":"adjectif","info":"féminin singulier","fr":"petite"}, {"w":"pero","pos":"conjonction","fr":"mais"}, {"w":"muy","pos":"adverbe","fr":"très"}, {"w":"bonita","pos":"adjectif","info":"féminin singulier","fr":"jolie"}, {"w":".","pos":"ponct"} ],
  [ {"w":"Hay","pos":"verbe","info":"haber (hay), présent, impersonnel — hay ne change jamais (hay una… / hay dos…)","fr":"il y a"}, {"w":"una","pos":"article","info":"article indéfini, féminin singulier","fr":"une"}, {"w":"cocina","pos":"nom","info":"féminin singulier","fr":"cuisine"}, {"w":",","pos":"ponct"}, {"w":"un","pos":"article","info":"article indéfini, masculin singulier","fr":"un"}, {"w":"baño","pos":"nom","info":"masculin singulier — un baño = une salle de bain","fr":"salle de bain"}, {"w":"y","pos":"conjonction","fr":"et"}, {"w":"dos","pos":"déterminant","info":"nombre","fr":"deux"}, {"w":"habitaciones","pos":"nom","info":"féminin pluriel","fr":"chambres"}, {"w":".","pos":"ponct"} ],
  [ {"w":"En","pos":"préposition","fr":"dans"}, {"w":"la","pos":"article","info":"article défini, féminin singulier","fr":"la"}, {"w":"cocina","pos":"nom","info":"féminin singulier","fr":"cuisine"}, {"w":"hay","pos":"verbe","info":"haber (hay), présent, impersonnel — hay ne change jamais (hay una… / hay dos…)","fr":"il y a"}, {"w":"una","pos":"article","info":"article indéfini, féminin singulier","fr":"une"}, {"w":"mesa","pos":"nom","info":"féminin singulier","fr":"table"}, {"w":"y","pos":"conjonction","fr":"et"}, {"w":"cuatro","pos":"déterminant","info":"nombre","fr":"quatre"}, {"w":"sillas","pos":"nom","info":"féminin pluriel","fr":"chaises"}, {"w":".","pos":"ponct"} ],
  [ {"w":"En","pos":"préposition","fr":"dans"}, {"w":"mi","pos":"déterminant","info":"possessif, singulier","fr":"mon / ma"}, {"w":"habitación","pos":"nom","info":"féminin singulier","fr":"chambre"}, {"w":"hay","pos":"verbe","info":"haber (hay), présent, impersonnel — hay ne change jamais (hay una… / hay dos…)","fr":"il y a"}, {"w":"una","pos":"article","info":"article indéfini, féminin singulier","fr":"une"}, {"w":"cama","pos":"nom","info":"féminin singulier","fr":"lit"}, {"w":"y","pos":"conjonction","fr":"et"}, {"w":"una","pos":"article","info":"article indéfini, féminin singulier","fr":"une"}, {"w":"ventana","pos":"nom","info":"féminin singulier","fr":"fenêtre"}, {"w":"grande","pos":"adjectif","info":"masculin/féminin singulier","fr":"grande"}, {"w":".","pos":"ponct"} ],
  [ {"w":"No","pos":"adverbe","info":"négation — « no hay » = il n'y a pas de","fr":"ne… pas"}, {"w":"hay","pos":"verbe","info":"haber (hay), présent, impersonnel — hay ne change jamais (hay una… / hay dos…)","fr":"il y a"}, {"w":"jardín","pos":"nom","info":"masculin singulier","fr":"jardin"}, {"w":",","pos":"ponct"}, {"w":"pero","pos":"conjonction","fr":"mais"}, {"w":"hay","pos":"verbe","info":"haber (hay), présent, impersonnel — hay ne change jamais (hay una… / hay dos…)","fr":"il y a"}, {"w":"un","pos":"article","info":"article indéfini, masculin singulier","fr":"un"}, {"w":"parque","pos":"nom","info":"masculin singulier","fr":"parc"}, {"w":"cerca","pos":"adverbe","fr":"près"}, {"w":".","pos":"ponct"} ],
  [ {"w":"Mi","pos":"déterminant","info":"possessif, singulier","fr":"mon / ma"}, {"w":"casa","pos":"nom","info":"féminin singulier","fr":"maison"}, {"w":"está","pos":"verbe","info":"estar, présent, ella — un lieu se dit avec estar","fr":"est"}, {"w":"cerca","pos":"adverbe","fr":"près"}, {"w":"de","pos":"préposition","fr":"de"}, {"w":"la","pos":"article","info":"article défini, féminin singulier","fr":"la"}, {"w":"estación","pos":"nom","info":"féminin singulier","fr":"gare"}, {"w":".","pos":"ponct"} ],
  [ {"w":"Mi","pos":"déterminant","info":"possessif, singulier","fr":"mon / ma"}, {"w":"madre","pos":"nom","info":"féminin singulier","fr":"mère"}, {"w":"está","pos":"verbe","info":"estar, présent, ella (+ gérondif = en train de)","fr":"est"}, {"w":"cocinando","pos":"verbe","info":"cocinar, gérondif (-ando)","fr":"en train de cuisiner"}, {"w":"en","pos":"préposition","fr":"dans"}, {"w":"la","pos":"article","info":"article défini, féminin singulier","fr":"la"}, {"w":"cocina","pos":"nom","info":"féminin singulier","fr":"cuisine"}, {"w":".","pos":"ponct"} ],
  [ {"w":"Me","pos":"pronom","info":"pronom objet indirect, 1re pers. sing. — me gusta = « ça me plaît »","fr":"me / à moi"}, {"w":"gusta","pos":"verbe","info":"gustar, présent, él/ella — le sujet est ce qui plaît (mi casa)","fr":"plaît"}, {"w":"mucho","pos":"adverbe","fr":"beaucoup"}, {"w":"mi","pos":"déterminant","info":"possessif, singulier","fr":"mon / ma"}, {"w":"casa","pos":"nom","info":"féminin singulier","fr":"maison"}, {"w":".","pos":"ponct"} ]
 ],
 translation:"Ma maison est petite mais très jolie. Il y a une cuisine, une salle de bain et deux chambres. Dans la cuisine, il y a une table et quatre chaises. Dans ma chambre, il y a un lit et une grande fenêtre. Il n'y a pas de jardin, mais il y a un parc tout près. Ma maison est près de la gare. Ma mère est en train de cuisiner dans la cuisine. J'aime beaucoup ma maison.",
 questions:[{"q":"Combien de chambres y a-t-il dans la maison ?","opts":["Une","Deux","Trois"],"correct":1,"why":"« dos habitaciones » = deux chambres."},{"q":"Qu'est-ce qu'il n'y a pas ?","opts":["Un jardin","Une cuisine","Un parc"],"correct":0,"why":"« No hay jardín » = il n'y a pas de jardin. Mais « hay un parque cerca »."},{"q":"Que fait la mère en ce moment ?","opts":["Elle dort","Elle travaille","Elle cuisine"],"correct":2,"why":"« está cocinando » : estar + gérondif = en train de cuisiner."}]
});

ATELIER.texts.push({ id:"mi-barrio", title:"Mi barrio", level:"A1", intro:"Une habitante décrit son quartier. Touche chaque mot pour voir ce que c’est.",
 sentences:[
  [ {"w":"Vivo","pos":"verbe","info":"vivir, présent, yo","fr":"j'habite"}, {"w":"en","pos":"préposition","fr":"dans"}, {"w":"un","pos":"article","info":"article indéfini, masculin singulier","fr":"un"}, {"w":"barrio","pos":"nom","info":"masculin singulier","fr":"quartier"}, {"w":"tranquilo","pos":"adjectif","info":"masculin singulier","fr":"calme"}, {"w":".","pos":"ponct"} ],
  [ {"w":"En","pos":"préposition","fr":"dans"}, {"w":"mi","pos":"déterminant","info":"possessif, singulier","fr":"mon / ma"}, {"w":"calle","pos":"nom","info":"féminin singulier","fr":"rue"}, {"w":"hay","pos":"verbe","info":"haber (hay), présent, impersonnel — hay ne change jamais (hay una… / hay dos…)","fr":"il y a"}, {"w":"una","pos":"article","info":"article indéfini, féminin singulier","fr":"une"}, {"w":"panadería","pos":"nom","info":"féminin singulier","fr":"boulangerie"}, {"w":"y","pos":"conjonction","fr":"et"}, {"w":"una","pos":"article","info":"article indéfini, féminin singulier","fr":"une"}, {"w":"farmacia","pos":"nom","info":"féminin singulier","fr":"pharmacie"}, {"w":".","pos":"ponct"} ],
  [ {"w":"El","pos":"article","info":"article défini, masculin singulier","fr":"le"}, {"w":"supermercado","pos":"nom","info":"masculin singulier","fr":"supermarché"}, {"w":"está","pos":"verbe","info":"estar, présent, él — un lieu se dit avec estar","fr":"est"}, {"w":"al","pos":"préposition","info":"contraction : a + el","fr":"à le (au)"}, {"w":"lado","pos":"nom","info":"masculin singulier — « al lado de » = à côté de","fr":"côté"}, {"w":"del","pos":"préposition","info":"contraction : de + el","fr":"de le (du)"}, {"w":"banco","pos":"nom","info":"masculin singulier","fr":"banque"}, {"w":".","pos":"ponct"} ],
  [ {"w":"La","pos":"article","info":"article défini, féminin singulier","fr":"la"}, {"w":"parada","pos":"nom","info":"féminin singulier","fr":"arrêt"}, {"w":"de","pos":"préposition","fr":"de"}, {"w":"autobús","pos":"nom","info":"masculin singulier","fr":"bus"}, {"w":"está","pos":"verbe","info":"estar, présent, ella","fr":"est"}, {"w":"enfrente","pos":"adverbe","fr":"en face"}, {"w":".","pos":"ponct"} ],
  [ {"w":"El","pos":"article","info":"article défini, masculin singulier","fr":"le"}, {"w":"parque","pos":"nom","info":"masculin singulier","fr":"parc"}, {"w":"está","pos":"verbe","info":"estar, présent, él","fr":"est"}, {"w":"a","pos":"préposition","fr":"à"}, {"w":"la","pos":"article","info":"article défini, féminin singulier","fr":"la"}, {"w":"derecha","pos":"nom","info":"féminin singulier — « a la derecha de » = à droite de","fr":"droite"}, {"w":"de","pos":"préposition","fr":"de"}, {"w":"mi","pos":"déterminant","info":"possessif, singulier","fr":"mon / ma"}, {"w":"casa","pos":"nom","info":"féminin singulier","fr":"maison"}, {"w":".","pos":"ponct"} ],
  [ {"w":"La","pos":"article","info":"article défini, féminin singulier","fr":"la"}, {"w":"plaza","pos":"nom","info":"féminin singulier","fr":"place"}, {"w":"está","pos":"verbe","info":"estar, présent, ella","fr":"est"}, {"w":"al","pos":"préposition","info":"contraction : a + el","fr":"à le (au)"}, {"w":"final","pos":"nom","info":"masculin singulier","fr":"bout / fin"}, {"w":"de","pos":"préposition","fr":"de"}, {"w":"la","pos":"article","info":"article défini, féminin singulier","fr":"la"}, {"w":"calle","pos":"nom","info":"féminin singulier","fr":"rue"}, {"w":".","pos":"ponct"} ],
  [ {"w":"El","pos":"article","info":"article défini, masculin singulier","fr":"le"}, {"w":"museo","pos":"nom","info":"masculin singulier","fr":"musée"}, {"w":"está","pos":"verbe","info":"estar, présent, él","fr":"est"}, {"w":"lejos","pos":"adverbe","fr":"loin"}, {"w":",","pos":"ponct"}, {"w":"pero","pos":"conjonction","fr":"mais"}, {"w":"la","pos":"article","info":"article défini, féminin singulier","fr":"la"}, {"w":"estación","pos":"nom","info":"féminin singulier","fr":"gare"}, {"w":"está","pos":"verbe","info":"estar, présent, ella","fr":"est"}, {"w":"cerca","pos":"adverbe","fr":"près"}, {"w":".","pos":"ponct"} ],
  [ {"w":"Me","pos":"pronom","info":"pronom objet indirect, 1re pers. sing. — me gusta = « ça me plaît »","fr":"me / à moi"}, {"w":"gusta","pos":"verbe","info":"gustar, présent, él/ella — le sujet est ce qui plaît (mi barrio)","fr":"plaît"}, {"w":"mucho","pos":"adverbe","fr":"beaucoup"}, {"w":"mi","pos":"déterminant","info":"possessif, singulier","fr":"mon / ma"}, {"w":"barrio","pos":"nom","info":"masculin singulier","fr":"quartier"}, {"w":".","pos":"ponct"} ]
 ],
 translation:"J'habite dans un quartier calme. Dans ma rue, il y a une boulangerie et une pharmacie. Le supermarché est à côté de la banque. L'arrêt de bus est en face. Le parc est à droite de ma maison. La place est au bout de la rue. Le musée est loin, mais la gare est près. J'aime beaucoup mon quartier.",
 questions:[{"q":"Qu'y a-t-il dans la rue de la narratrice ?","opts":["Un musée et un parc","Une banque et un supermarché","Une boulangerie et une pharmacie"],"correct":2,"why":"« En mi calle hay una panadería y una farmacia »."},{"q":"Où est le parc ?","opts":["À gauche de sa maison","À droite de sa maison","Au bout de la rue"],"correct":1,"why":"« a la derecha de mi casa » = à droite de ma maison."},{"q":"Qu'est-ce qui est loin ?","opts":["Le musée","La gare","Le parc"],"correct":0,"why":"« El museo está lejos » ; la gare, elle, est cerca."}]
});

ATELIER.texts.push({ id:"en-el-restaurante", title:"En el restaurante", level:"A1", intro:"Deux amis commandent au restaurant. Touche chaque mot pour voir ce que c’est.",
 sentences:[
  [ {"w":"Estamos","pos":"verbe","info":"estar, présent, nosotros","fr":"nous sommes"}, {"w":"en","pos":"préposition","fr":"dans / à"}, {"w":"un","pos":"article","info":"article indéfini, masculin singulier","fr":"un"}, {"w":"restaurante","pos":"nom","info":"masculin singulier","fr":"restaurant"}, {"w":"con","pos":"préposition","fr":"avec"}, {"w":"mi","pos":"déterminant","info":"possessif, singulier","fr":"mon / ma"}, {"w":"amigo","pos":"nom","info":"masculin singulier","fr":"ami"}, {"w":".","pos":"ponct"} ],
  [ {"w":"El","pos":"article","info":"article défini, masculin singulier","fr":"le"}, {"w":"camarero","pos":"nom","info":"masculin singulier","fr":"serveur"}, {"w":"trae","pos":"verbe","info":"traer, présent, él","fr":"apporte"}, {"w":"la","pos":"article","info":"article défini, féminin singulier","fr":"la"}, {"w":"carta","pos":"nom","info":"féminin singulier","fr":"carte / menu"}, {"w":".","pos":"ponct"} ],
  [ {"w":"Yo","pos":"pronom","info":"pronom sujet, 1re pers. sing. — souvent omis en espagnol","fr":"moi / je"}, {"w":"quiero","pos":"verbe","info":"querer, présent, yo — e devient ie","fr":"je veux"}, {"w":"ensalada","pos":"nom","info":"féminin singulier","fr":"salade"}, {"w":"y","pos":"conjonction","fr":"et"}, {"w":"pollo","pos":"nom","info":"masculin singulier","fr":"poulet"}, {"w":"con","pos":"préposition","fr":"avec"}, {"w":"patatas","pos":"nom","info":"féminin pluriel","fr":"pommes de terre"}, {"w":".","pos":"ponct"} ],
  [ {"w":"Mi","pos":"déterminant","info":"possessif, singulier","fr":"mon / ma"}, {"w":"amigo","pos":"nom","info":"masculin singulier","fr":"ami"}, {"w":"quiere","pos":"verbe","info":"querer, présent, él — e devient ie","fr":"il veut"}, {"w":"pescado","pos":"nom","info":"masculin singulier","fr":"poisson"}, {"w":"con","pos":"préposition","fr":"avec"}, {"w":"arroz","pos":"nom","info":"masculin singulier","fr":"riz"}, {"w":".","pos":"ponct"} ],
  [ {"w":"Para","pos":"préposition","info":"para + infinitif = pour (but)","fr":"pour"}, {"w":"beber","pos":"verbe","info":"beber, infinitif","fr":"boire"}, {"w":",","pos":"ponct"}, {"w":"quiero","pos":"verbe","info":"querer, présent, yo","fr":"je veux"}, {"w":"agua","pos":"nom","info":"féminin singulier — on dit « el agua » mais le mot est féminin","fr":"eau"}, {"w":"y","pos":"conjonction","fr":"et"}, {"w":"él","pos":"pronom","info":"pronom sujet, 3e pers. sing. masculin","fr":"lui / il"}, {"w":"quiere","pos":"verbe","info":"querer, présent, él","fr":"il veut"}, {"w":"cerveza","pos":"nom","info":"féminin singulier","fr":"bière"}, {"w":".","pos":"ponct"} ],
  [ {"w":"Me","pos":"pronom","info":"pronom objet indirect, 1re pers. sing. — me gusta = « ça me plaît »","fr":"me / à moi"}, {"w":"gusta","pos":"verbe","info":"gustar, présent, él/ella — le sujet est ce qui plaît (el pollo)","fr":"plaît"}, {"w":"mucho","pos":"adverbe","fr":"beaucoup"}, {"w":"el","pos":"article","info":"article défini, masculin singulier","fr":"le"}, {"w":"pollo","pos":"nom","info":"masculin singulier","fr":"poulet"}, {"w":".","pos":"ponct"} ],
  [ {"w":"A","pos":"préposition","info":"« a + personne » renforce le gustar : a mi amigo le gusta…","fr":"à"}, {"w":"mi","pos":"déterminant","info":"possessif, singulier","fr":"mon / ma"}, {"w":"amigo","pos":"nom","info":"masculin singulier","fr":"ami"}, {"w":"le","pos":"pronom","info":"pronom objet indirect, 3e pers. sing.","fr":"lui / à lui"}, {"w":"gustan","pos":"verbe","info":"gustar, présent, ellas — pluriel car le sujet est pluriel (las verduras)","fr":"plaisent"}, {"w":"las","pos":"article","info":"article défini, féminin pluriel","fr":"les"}, {"w":"verduras","pos":"nom","info":"féminin pluriel","fr":"légumes"}, {"w":".","pos":"ponct"} ],
  [ {"w":"De","pos":"préposition","fr":"en / comme"}, {"w":"postre","pos":"nom","info":"masculin singulier","fr":"dessert"}, {"w":",","pos":"ponct"}, {"w":"queremos","pos":"verbe","info":"querer, présent, nosotros","fr":"nous voulons"}, {"w":"fruta","pos":"nom","info":"féminin singulier","fr":"fruit(s)"}, {"w":".","pos":"ponct"} ],
  [ {"w":"¡","pos":"ponct"}, {"w":"La","pos":"article","info":"article défini, féminin singulier","fr":"la"}, {"w":"cuenta","pos":"nom","info":"féminin singulier","fr":"addition"}, {"w":",","pos":"ponct"}, {"w":"por","pos":"préposition","info":"« por favor » = s'il vous plaît","fr":"par"}, {"w":"favor","pos":"nom","info":"masculin singulier","fr":"faveur"}, {"w":"!","pos":"ponct"} ]
 ],
 translation:"Nous sommes dans un restaurant avec mon ami. Le serveur apporte la carte. Moi, je veux de la salade et du poulet avec des pommes de terre. Mon ami veut du poisson avec du riz. Pour boire, je veux de l'eau et lui veut de la bière. J'aime beaucoup le poulet. Mon ami aime les légumes. Comme dessert, nous voulons des fruits. L'addition, s'il vous plaît !",
 questions:[{"q":"Qu'est-ce que le serveur apporte ?","opts":["La carte","L'addition","Le dessert"],"correct":0,"why":"« El camarero trae la carta »."},{"q":"Que veut boire l'ami ?","opts":["De l'eau","Du vin","De la bière"],"correct":2,"why":"« Yo quiero agua y él quiere cerveza » : l'eau, c'est la narratrice ; la bière, c'est l'ami."},{"q":"Qu'est-ce qui plaît à l'ami ?","opts":["La viande","Les légumes","Le dessert"],"correct":1,"why":"« A mi amigo le gustan las verduras » : gustan est au pluriel car las verduras est pluriel."}]
});

ATELIER.texts.push({ id:"de-compras", title:"De compras", level:"A1", intro:"Une cliente achète des vêtements dans un magasin. Touche chaque mot pour voir ce que c’est.",
 sentences:[
  [ {"w":"Estoy","pos":"verbe","info":"estar, présent, yo","fr":"je suis"}, {"w":"en","pos":"préposition","fr":"dans"}, {"w":"una","pos":"article","info":"article indéfini, féminin singulier","fr":"une"}, {"w":"tienda","pos":"nom","info":"féminin singulier","fr":"magasin"}, {"w":"de","pos":"préposition","fr":"de"}, {"w":"ropa","pos":"nom","info":"féminin singulier — ropa est toujours singulier en espagnol","fr":"vêtements"}, {"w":".","pos":"ponct"} ],
  [ {"w":"Quiero","pos":"verbe","info":"querer, présent, yo — e devient ie","fr":"je veux"}, {"w":"una","pos":"article","info":"article indéfini, féminin singulier","fr":"une"}, {"w":"camisa","pos":"nom","info":"féminin singulier","fr":"chemise"}, {"w":"blanca","pos":"adjectif","info":"féminin singulier — l'adjectif se place après le nom","fr":"blanche"}, {"w":"y","pos":"conjonction","fr":"et"}, {"w":"unos","pos":"article","info":"article indéfini, masculin pluriel","fr":"des"}, {"w":"pantalones","pos":"nom","info":"masculin pluriel — toujours pluriel en espagnol","fr":"pantalon"}, {"w":"azules","pos":"adjectif","info":"masculin/féminin pluriel","fr":"bleus"}, {"w":".","pos":"ponct"} ],
  [ {"w":"La","pos":"article","info":"article défini, féminin singulier","fr":"la"}, {"w":"dependienta","pos":"nom","info":"féminin singulier","fr":"vendeuse"}, {"w":"me","pos":"pronom","info":"pronom objet, 1re pers. sing.","fr":"me"}, {"w":"ayuda","pos":"verbe","info":"ayudar, présent, ella","fr":"aide"}, {"w":".","pos":"ponct"} ],
  [ {"w":"Uso","pos":"verbe","info":"usar, présent, yo","fr":"j'utilise / je porte"}, {"w":"la","pos":"article","info":"article défini, féminin singulier","fr":"la"}, {"w":"talla","pos":"nom","info":"féminin singulier — la taille des vêtements","fr":"taille"}, {"w":"treinta","pos":"déterminant","info":"nombre","fr":"trente"}, {"w":"y","pos":"conjonction","fr":"et"}, {"w":"ocho","pos":"déterminant","info":"nombre","fr":"huit"}, {"w":".","pos":"ponct"} ],
  [ {"w":"La","pos":"article","info":"article défini, féminin singulier","fr":"la"}, {"w":"camisa","pos":"nom","info":"féminin singulier","fr":"chemise"}, {"w":"cuesta","pos":"verbe","info":"costar, présent, ella — o devient ue","fr":"coûte"}, {"w":"cuarenta","pos":"déterminant","info":"nombre","fr":"quarante"}, {"w":"y","pos":"conjonction","fr":"et"}, {"w":"cinco","pos":"déterminant","info":"nombre","fr":"cinq"}, {"w":"euros","pos":"nom","info":"masculin pluriel","fr":"euros"}, {"w":".","pos":"ponct"} ],
  [ {"w":"Es","pos":"verbe","info":"ser, présent, ella (la camisa) — ser caro = être cher","fr":"est"}, {"w":"un","pos":"adverbe","info":"« un poco » = un peu","fr":"un"}, {"w":"poco","pos":"adverbe","fr":"peu"}, {"w":"cara","pos":"adjectif","info":"féminin singulier","fr":"chère"}, {"w":",","pos":"ponct"}, {"w":"pero","pos":"conjonction","fr":"mais"}, {"w":"es","pos":"verbe","info":"ser, présent, ella","fr":"est"}, {"w":"muy","pos":"adverbe","fr":"très"}, {"w":"bonita","pos":"adjectif","info":"féminin singulier","fr":"jolie"}, {"w":".","pos":"ponct"} ],
  [ {"w":"Los","pos":"article","info":"article défini, masculin pluriel","fr":"les"}, {"w":"pantalones","pos":"nom","info":"masculin pluriel","fr":"pantalon"}, {"w":"cuestan","pos":"verbe","info":"costar, présent, ellos — o devient ue","fr":"coûtent"}, {"w":"treinta","pos":"déterminant","info":"nombre","fr":"trente"}, {"w":"euros","pos":"nom","info":"masculin pluriel","fr":"euros"}, {"w":".","pos":"ponct"} ],
  [ {"w":"Me","pos":"pronom","info":"pronom réfléchi, 1re pers. sing.","fr":"me"}, {"w":"llevo","pos":"verbe","info":"llevarse, présent, yo — llevarse = emporter, prendre","fr":"je prends"}, {"w":"la","pos":"article","info":"article défini, féminin singulier","fr":"la"}, {"w":"camisa","pos":"nom","info":"féminin singulier","fr":"chemise"}, {"w":"y","pos":"conjonction","fr":"et"}, {"w":"los","pos":"article","info":"article défini, masculin pluriel","fr":"les"}, {"w":"pantalones","pos":"nom","info":"masculin pluriel","fr":"pantalon"}, {"w":".","pos":"ponct"} ],
  [ {"w":"Pago","pos":"verbe","info":"pagar, présent, yo","fr":"je paie"}, {"w":"con","pos":"préposition","fr":"avec / par"}, {"w":"tarjeta","pos":"nom","info":"féminin singulier","fr":"carte"}, {"w":".","pos":"ponct"} ]
 ],
 translation:"Je suis dans un magasin de vêtements. Je veux une chemise blanche et un pantalon bleu. La vendeuse m'aide. Je fais du trente-huit. La chemise coûte quarante-cinq euros. Elle est un peu chère, mais elle est très jolie. Le pantalon coûte trente euros. Je prends la chemise et le pantalon. Je paie par carte.",
 questions:[{"q":"De quelle couleur est la chemise ?","opts":["Blanche","Bleue","Verte"],"correct":0,"why":"« una camisa blanca » ; ce sont les pantalones qui sont azules."},{"q":"Combien coûte la chemise ?","opts":["Trente euros","Quarante-cinq euros","Cinquante euros"],"correct":1,"why":"« cuesta cuarenta y cinco euros » (les pantalons coûtent trente euros)."},{"q":"Comment la cliente paie-t-elle ?","opts":["En espèces","Avec un chèque","Par carte"],"correct":2,"why":"« Pago con tarjeta » = je paie par carte."}]
});

ATELIER.texts.push({ id:"el-tiempo", title:"El tiempo", level:"A1", intro:"Quelques phrases sur la météo et les saisons. Touche chaque mot pour voir ce que c’est.",
 sentences:[
  [ {"w":"Hoy","pos":"adverbe","fr":"aujourd'hui"}, {"w":"hace","pos":"verbe","info":"hacer, présent, impersonnel (él) — météo : hace + nom","fr":"il fait"}, {"w":"buen","pos":"adjectif","info":"masculin singulier (bueno devient buen devant un nom masculin)","fr":"bon / beau"}, {"w":"tiempo","pos":"nom","info":"masculin singulier — ici le temps qu'il fait","fr":"temps"}, {"w":"en","pos":"préposition","fr":"à / en"}, {"w":"Madrid","pos":"nom propre","fr":"Madrid"}, {"w":".","pos":"ponct"} ],
  [ {"w":"Hace","pos":"verbe","info":"hacer, présent, impersonnel (él)","fr":"il fait"}, {"w":"sol","pos":"nom","info":"masculin singulier","fr":"soleil"}, {"w":"y","pos":"conjonction","fr":"et"}, {"w":"hace","pos":"verbe","info":"hacer, présent, impersonnel (él)","fr":"il fait"}, {"w":"mucho","pos":"déterminant","info":"quantité, masculin singulier","fr":"beaucoup de"}, {"w":"calor","pos":"nom","info":"masculin singulier","fr":"chaleur"}, {"w":".","pos":"ponct"} ],
  [ {"w":"En","pos":"préposition","fr":"en / à"}, {"w":"verano","pos":"nom","info":"masculin singulier","fr":"été"}, {"w":"hace","pos":"verbe","info":"hacer, présent, impersonnel (él)","fr":"il fait"}, {"w":"calor","pos":"nom","info":"masculin singulier","fr":"chaleur"}, {"w":"y","pos":"conjonction","fr":"et"}, {"w":"en","pos":"préposition","fr":"en / à"}, {"w":"invierno","pos":"nom","info":"masculin singulier","fr":"hiver"}, {"w":"hace","pos":"verbe","info":"hacer, présent, impersonnel (él)","fr":"il fait"}, {"w":"frío","pos":"nom","info":"masculin singulier","fr":"froid"}, {"w":".","pos":"ponct"} ],
  [ {"w":"Mi","pos":"déterminant","info":"possessif, singulier","fr":"mon / ma"}, {"w":"hermana","pos":"nom","info":"féminin singulier","fr":"sœur"}, {"w":"está","pos":"verbe","info":"estar, présent, ella — un lieu se dit avec estar","fr":"est"}, {"w":"en","pos":"préposition","fr":"à"}, {"w":"París","pos":"nom propre","fr":"Paris"}, {"w":".","pos":"ponct"} ],
  [ {"w":"Allí","pos":"adverbe","fr":"là-bas"}, {"w":"está","pos":"verbe","info":"estar, présent, ella (+ gérondif = en train de)","fr":"est"}, {"w":"lloviendo","pos":"verbe","info":"llover, gérondif (-iendo)","fr":"en train de pleuvoir"}, {"w":"y","pos":"conjonction","fr":"et"}, {"w":"tiene","pos":"verbe","info":"tener, présent, ella — tener frío = avoir froid","fr":"elle a"}, {"w":"frío","pos":"nom","info":"masculin singulier","fr":"froid"}, {"w":".","pos":"ponct"} ],
  [ {"w":"Yo","pos":"pronom","info":"pronom sujet, 1re pers. sing.","fr":"moi / je"}, {"w":"estoy","pos":"verbe","info":"estar, présent, yo","fr":"je suis"}, {"w":"en","pos":"préposition","fr":"à / dans"}, {"w":"casa","pos":"nom","info":"féminin singulier — « en casa » = à la maison","fr":"maison"}, {"w":"y","pos":"conjonction","fr":"et"}, {"w":"estoy","pos":"verbe","info":"estar, présent, yo (+ gérondif = en train de)","fr":"je suis"}, {"w":"leyendo","pos":"verbe","info":"leer, gérondif — i devient y : leyendo","fr":"en train de lire"}, {"w":"un","pos":"article","info":"article indéfini, masculin singulier","fr":"un"}, {"w":"libro","pos":"nom","info":"masculin singulier","fr":"livre"}, {"w":".","pos":"ponct"} ],
  [ {"w":"Mis","pos":"déterminant","info":"possessif, pluriel","fr":"mes"}, {"w":"padres","pos":"nom","info":"masculin pluriel — padre + madre = les parents","fr":"parents"}, {"w":"están","pos":"verbe","info":"estar, présent, ellos (+ gérondif = en train de)","fr":"sont"}, {"w":"paseando","pos":"verbe","info":"pasear, gérondif (-ando)","fr":"en train de se promener"}, {"w":"por","pos":"préposition","fr":"dans / par"}, {"w":"el","pos":"article","info":"article défini, masculin singulier","fr":"le"}, {"w":"parque","pos":"nom","info":"masculin singulier","fr":"parc"}, {"w":".","pos":"ponct"} ],
  [ {"w":"Me","pos":"pronom","info":"pronom objet indirect, 1re pers. sing. — me gusta = « ça me plaît »","fr":"me / à moi"}, {"w":"gusta","pos":"verbe","info":"gustar, présent, él/ella — le sujet est ce qui plaît (el verano)","fr":"plaît"}, {"w":"el","pos":"article","info":"article défini, masculin singulier","fr":"le"}, {"w":"verano","pos":"nom","info":"masculin singulier","fr":"été"}, {"w":"porque","pos":"conjonction","fr":"parce que"}, {"w":"hace","pos":"verbe","info":"hacer, présent, impersonnel (él)","fr":"il fait"}, {"w":"calor","pos":"nom","info":"masculin singulier","fr":"chaleur"}, {"w":".","pos":"ponct"} ]
 ],
 translation:"Aujourd'hui, il fait beau à Madrid. Il y a du soleil et il fait très chaud. En été, il fait chaud et en hiver, il fait froid. Ma sœur est à Paris. Là-bas, il pleut et elle a froid. Moi, je suis à la maison et je suis en train de lire un livre. Mes parents sont en train de se promener dans le parc. J'aime l'été parce qu'il fait chaud.",
 questions:[{"q":"Quel temps fait-il à Madrid aujourd'hui ?","opts":["Il pleut","Il fait beau et chaud","Il fait froid"],"correct":1,"why":"« hace buen tiempo », « hace sol », « hace mucho calor »."},{"q":"Où est la sœur de la narratrice ?","opts":["À Paris","À Madrid","À la maison"],"correct":0,"why":"« Mi hermana está en París » ; là-bas « está lloviendo »."},{"q":"Que font ses parents ?","opts":["Ils lisent un livre","Ils cuisinent","Ils se promènent dans le parc"],"correct":2,"why":"« están paseando por el parque » : estar + gérondif."}]
});

ATELIER.texts.push({ id:"mis-vacaciones", title:"Mis vacaciones", level:"A1", intro:"Une femme parle de ses vacances à venir. Touche chaque mot pour voir ce que c’est.",
 sentences:[
  [ {"w":"Este","pos":"déterminant","info":"démonstratif, masculin singulier","fr":"ce"}, {"w":"verano","pos":"nom","info":"masculin singulier","fr":"été"}, {"w":"voy","pos":"verbe","info":"ir, présent, yo — ir a + infinitif = futur proche","fr":"je vais"}, {"w":"a","pos":"préposition","info":"ir a + infinitif","fr":"à (aller + inf.)"}, {"w":"viajar","pos":"verbe","info":"viajar, infinitif","fr":"voyager"}, {"w":"a","pos":"préposition","fr":"à / en"}, {"w":"España","pos":"nom propre","fr":"Espagne"}, {"w":".","pos":"ponct"} ],
  [ {"w":"Voy","pos":"verbe","info":"ir, présent, yo","fr":"je vais / je pars"}, {"w":"con","pos":"préposition","fr":"avec"}, {"w":"mi","pos":"déterminant","info":"possessif, singulier","fr":"mon / ma"}, {"w":"marido","pos":"nom","info":"masculin singulier","fr":"mari"}, {"w":"y","pos":"conjonction","fr":"et"}, {"w":"mi","pos":"déterminant","info":"possessif, singulier","fr":"mon / ma"}, {"w":"hijo","pos":"nom","info":"masculin singulier","fr":"fils"}, {"w":".","pos":"ponct"} ],
  [ {"w":"Vamos","pos":"verbe","info":"ir, présent, nosotros","fr":"nous allons"}, {"w":"a","pos":"préposition","info":"ir a + infinitif","fr":"à (aller + inf.)"}, {"w":"tomar","pos":"verbe","info":"tomar, infinitif","fr":"prendre"}, {"w":"el","pos":"article","info":"article défini, masculin singulier","fr":"le"}, {"w":"avión","pos":"nom","info":"masculin singulier","fr":"avion"}, {"w":"en","pos":"préposition","fr":"à"}, {"w":"París","pos":"nom propre","fr":"Paris"}, {"w":".","pos":"ponct"} ],
  [ {"w":"Vamos","pos":"verbe","info":"ir, présent, nosotros","fr":"nous allons"}, {"w":"a","pos":"préposition","info":"ir a + infinitif","fr":"à (aller + inf.)"}, {"w":"estar","pos":"verbe","info":"estar, infinitif","fr":"être / rester"}, {"w":"una","pos":"article","info":"article indéfini, féminin singulier","fr":"une"}, {"w":"semana","pos":"nom","info":"féminin singulier","fr":"semaine"}, {"w":"en","pos":"préposition","fr":"à"}, {"w":"Sevilla","pos":"nom propre","fr":"Séville"}, {"w":".","pos":"ponct"} ],
  [ {"w":"Voy","pos":"verbe","info":"ir, présent, yo","fr":"je vais"}, {"w":"a","pos":"préposition","info":"ir a + infinitif","fr":"à (aller + inf.)"}, {"w":"reservar","pos":"verbe","info":"reservar, infinitif","fr":"réserver"}, {"w":"una","pos":"article","info":"article indéfini, féminin singulier","fr":"une"}, {"w":"habitación","pos":"nom","info":"féminin singulier","fr":"chambre"}, {"w":"doble","pos":"adjectif","info":"masculin/féminin singulier","fr":"double"}, {"w":".","pos":"ponct"} ],
  [ {"w":"Mi","pos":"déterminant","info":"possessif, singulier","fr":"mon / ma"}, {"w":"marido","pos":"nom","info":"masculin singulier","fr":"mari"}, {"w":"va","pos":"verbe","info":"ir, présent, él","fr":"il va"}, {"w":"a","pos":"préposition","info":"ir a + infinitif","fr":"à (aller + inf.)"}, {"w":"comer","pos":"verbe","info":"comer, infinitif","fr":"manger"}, {"w":"tapas","pos":"nom","info":"féminin pluriel","fr":"tapas"}, {"w":".","pos":"ponct"} ],
  [ {"w":"Yo","pos":"pronom","info":"pronom sujet, 1re pers. sing.","fr":"moi / je"}, {"w":"voy","pos":"verbe","info":"ir, présent, yo","fr":"je vais"}, {"w":"a","pos":"préposition","info":"ir a + infinitif","fr":"à (aller + inf.)"}, {"w":"visitar","pos":"verbe","info":"visitar, infinitif","fr":"visiter"}, {"w":"el","pos":"article","info":"article défini, masculin singulier","fr":"le"}, {"w":"museo","pos":"nom","info":"masculin singulier","fr":"musée"}, {"w":".","pos":"ponct"} ],
  [ {"w":"Me","pos":"pronom","info":"pronom objet indirect, 1re pers. sing. — me gusta = « ça me plaît »","fr":"me / à moi"}, {"w":"gusta","pos":"verbe","info":"gustar, présent, él/ella — le sujet est ce qui plaît (viajar)","fr":"plaît"}, {"w":"mucho","pos":"adverbe","fr":"beaucoup"}, {"w":"viajar","pos":"verbe","info":"viajar, infinitif","fr":"voyager"}, {"w":".","pos":"ponct"} ],
  [ {"w":"¡","pos":"ponct"}, {"w":"Qué","pos":"adverbe","info":"exclamation : ¡qué + adjectif/adverbe!","fr":"comme"}, {"w":"bien","pos":"adverbe","fr":"bien"}, {"w":"!","pos":"ponct"} ]
 ],
 translation:"Cet été, je vais voyager en Espagne. Je pars avec mon mari et mon fils. Nous allons prendre l'avion à Paris. Nous allons rester une semaine à Séville. Je vais réserver une chambre double. Mon mari va manger des tapas. Moi, je vais visiter le musée. J'aime beaucoup voyager. Comme c'est bien !",
 questions:[{"q":"Où la narratrice va-t-elle voyager cet été ?","opts":["En Italie","En Espagne","Au Mexique"],"correct":1,"why":"« voy a viajar a España » : ir a + infinitif = futur proche."},{"q":"Combien de temps la famille va-t-elle rester à Séville ?","opts":["Une semaine","Deux semaines","Un mois"],"correct":0,"why":"« Vamos a estar una semana en Sevilla »."},{"q":"Que va faire le mari ?","opts":["Visiter le musée","Réserver une chambre","Manger des tapas"],"correct":2,"why":"« Mi marido va a comer tapas ». Le musée, c'est elle ; la chambre aussi."}]
});

ATELIER.texts.push({
"id": "un-dia-de-trabajo",
"title": "Un día de trabajo",
"level": "A1",
"intro": "Marta raconte sa journée de travail. Fais attention aux heures : « a las… » = à… heures.",
"sentences": [
[
{
"w": "Trabajo",
"pos": "verbe",
"info": "trabajar, présent, yo",
"fr": "je travaille"
},
{
"w": "en",
"pos": "préposition",
"info": "",
"fr": "dans, en"
},
{
"w": "una",
"pos": "article",
"info": "article indéfini, féminin singulier",
"fr": "une"
},
{
"w": "oficina",
"pos": "nom",
"info": "féminin singulier",
"fr": "bureau"
},
{
"w": ".",
"pos": "ponct"
}
],
[
{
"w": "Empiezo",
"pos": "verbe",
"info": "empezar, présent, yo (verbe irrégulier : e devient ie)",
"fr": "je commence"
},
{
"w": "a",
"pos": "préposition",
"info": "",
"fr": "à"
},
{
"w": "las",
"pos": "article",
"info": "article défini, féminin pluriel (on dit « las » devant l'heure)",
"fr": "les"
},
{
"w": "nueve",
"pos": "déterminant",
"info": "nombre",
"fr": "neuf"
},
{
"w": "y",
"pos": "conjonction",
"info": "",
"fr": "et"
},
{
"w": "termino",
"pos": "verbe",
"info": "terminar, présent, yo",
"fr": "je termine"
},
{
"w": "a",
"pos": "préposition",
"info": "",
"fr": "à"
},
{
"w": "las",
"pos": "article",
"info": "article défini, féminin pluriel",
"fr": "les"
},
{
"w": "cinco",
"pos": "déterminant",
"info": "nombre",
"fr": "cinq"
},
{
"w": ".",
"pos": "ponct"
}
],
[
{
"w": "Al",
"pos": "préposition",
"info": "contraction de a + el",
"fr": "au"
},
{
"w": "mediodía",
"pos": "nom",
"info": "masculin singulier",
"fr": "midi"
},
{
"w": "como",
"pos": "verbe",
"info": "comer, présent, yo (attention : « como » peut aussi vouloir dire « comme »)",
"fr": "je mange"
},
{
"w": "con",
"pos": "préposition",
"info": "",
"fr": "avec"
},
{
"w": "mi",
"pos": "déterminant",
"info": "déterminant possessif, féminin singulier (ma)",
"fr": "ma"
},
{
"w": "amiga",
"pos": "nom",
"info": "féminin singulier",
"fr": "amie"
},
{
"w": "Lucía",
"pos": "nom propre",
"info": "",
"fr": "Lucía"
},
{
"w": ".",
"pos": "ponct"
}
],
[
{
"w": "Comemos",
"pos": "verbe",
"info": "comer, présent, nosotros",
"fr": "nous mangeons"
},
{
"w": "en",
"pos": "préposition",
"info": "",
"fr": "dans"
},
{
"w": "un",
"pos": "article",
"info": "article indéfini, masculin singulier",
"fr": "un"
},
{
"w": "restaurante",
"pos": "nom",
"info": "masculin singulier",
"fr": "restaurant"
},
{
"w": "pequeño",
"pos": "adjectif",
"info": "masculin singulier",
"fr": "petit"
},
{
"w": ".",
"pos": "ponct"
}
],
[
{
"w": "Por",
"pos": "préposition",
"info": "« por la tarde » = l'après-midi",
"fr": "par, pendant"
},
{
"w": "la",
"pos": "article",
"info": "article défini, féminin singulier",
"fr": "la"
},
{
"w": "tarde",
"pos": "nom",
"info": "féminin singulier",
"fr": "après-midi"
},
{
"w": "hablo",
"pos": "verbe",
"info": "hablar, présent, yo",
"fr": "je parle"
},
{
"w": "con",
"pos": "préposition",
"info": "",
"fr": "avec"
},
{
"w": "clientes",
"pos": "nom",
"info": "masculin/féminin pluriel",
"fr": "clients"
},
{
"w": ".",
"pos": "ponct"
}
],
[
{
"w": "Mi",
"pos": "déterminant",
"info": "déterminant possessif, masculin singulier (mon)",
"fr": "mon"
},
{
"w": "jefe",
"pos": "nom",
"info": "masculin singulier",
"fr": "chef"
},
{
"w": "es",
"pos": "verbe",
"info": "ser, présent, él/ella (ser = caractère, identité)",
"fr": "est"
},
{
"w": "muy",
"pos": "adverbe",
"info": "",
"fr": "très"
},
{
"w": "simpático",
"pos": "adjectif",
"info": "masculin singulier",
"fr": "sympathique"
},
{
"w": ".",
"pos": "ponct"
}
],
[
{
"w": "Vuelvo",
"pos": "verbe",
"info": "volver, présent, yo (verbe irrégulier : o devient ue)",
"fr": "je rentre, je reviens"
},
{
"w": "a",
"pos": "préposition",
"info": "",
"fr": "à"
},
{
"w": "casa",
"pos": "nom",
"info": "féminin singulier",
"fr": "la maison"
},
{
"w": "a",
"pos": "préposition",
"info": "",
"fr": "à"
},
{
"w": "las",
"pos": "article",
"info": "article défini, féminin pluriel",
"fr": "les"
},
{
"w": "seis",
"pos": "déterminant",
"info": "nombre",
"fr": "six"
},
{
"w": ".",
"pos": "ponct"
}
],
[
{
"w": "Estoy",
"pos": "verbe",
"info": "estar, présent, yo (estar = état du moment)",
"fr": "je suis"
},
{
"w": "muy",
"pos": "adverbe",
"info": "",
"fr": "très"
},
{
"w": "cansada",
"pos": "adjectif",
"info": "féminin singulier (Marta est une femme)",
"fr": "fatiguée"
},
{
"w": ",",
"pos": "ponct"
},
{
"w": "pero",
"pos": "conjonction",
"info": "",
"fr": "mais"
},
{
"w": "feliz",
"pos": "adjectif",
"info": "masculin/féminin singulier",
"fr": "heureuse"
},
{
"w": ".",
"pos": "ponct"
}
],
[
{
"w": "¡",
"pos": "ponct"
},
{
"w": "Me",
"pos": "pronom",
"info": "pronom complément, 1re pers. sing. (avec gustar)",
"fr": "me, à moi"
},
{
"w": "gusta",
"pos": "verbe",
"info": "gustar, présent, él/ella (ce qui plaît : mi trabajo)",
"fr": "plaît"
},
{
"w": "mi",
"pos": "déterminant",
"info": "déterminant possessif, masculin singulier (mon)",
"fr": "mon"
},
{
"w": "trabajo",
"pos": "nom",
"info": "masculin singulier (ici nom, pas le verbe)",
"fr": "travail"
},
{
"w": "!",
"pos": "ponct"
}
]
],
"translation": "Je travaille dans un bureau. Je commence à neuf heures et je termine à cinq heures. À midi, je mange avec mon amie Lucía. Nous mangeons dans un petit restaurant. L'après-midi, je parle avec des clients. Mon chef est très sympathique. Je rentre à la maison à six heures. Je suis très fatiguée, mais heureuse. J'aime mon travail !",
"questions": [
{
"q": "À quelle heure Marta commence-t-elle à travailler ?",
"opts": [
"À huit heures",
"À neuf heures",
"À cinq heures"
],
"correct": 1,
"why": "« Empiezo a las nueve » = je commence à neuf heures."
},
{
"q": "Avec qui Marta mange-t-elle à midi ?",
"opts": [
"Avec son chef",
"Avec des clients",
"Avec son amie Lucía"
],
"correct": 2,
"why": "« como con mi amiga Lucía » = je mange avec mon amie Lucía."
},
{
"q": "Comment est le chef de Marta ?",
"opts": [
"Sympathique",
"Fatigué",
"Petit"
],
"correct": 0,
"why": "« Mi jefe es muy simpático » = mon chef est très sympathique."
}
]
});

ATELIER.texts.push({
"id": "mi-mejor-amigo",
"title": "Mi mejor amigo",
"level": "A1",
"intro": "Un portrait : physique et caractère de Pablo. Repère ser, estar et tener.",
"sentences": [
[
{
"w": "Mi",
"pos": "déterminant",
"info": "déterminant possessif, masculin singulier (mon)",
"fr": "mon"
},
{
"w": "mejor",
"pos": "adjectif",
"info": "masculin/féminin singulier",
"fr": "meilleur"
},
{
"w": "amigo",
"pos": "nom",
"info": "masculin singulier",
"fr": "ami"
},
{
"w": "se",
"pos": "pronom",
"info": "pronom réfléchi, 3e pers. sing.",
"fr": "se"
},
{
"w": "llama",
"pos": "verbe",
"info": "llamarse, présent, él",
"fr": "s'appelle"
},
{
"w": "Pablo",
"pos": "nom propre",
"info": "",
"fr": "Pablo"
},
{
"w": ".",
"pos": "ponct"
}
],
[
{
"w": "Es",
"pos": "verbe",
"info": "ser, présent, él (ser = physique, caractère)",
"fr": "il est"
},
{
"w": "alto",
"pos": "adjectif",
"info": "masculin singulier",
"fr": "grand"
},
{
"w": "y",
"pos": "conjonction",
"info": "",
"fr": "et"
},
{
"w": "delgado",
"pos": "adjectif",
"info": "masculin singulier",
"fr": "mince"
},
{
"w": ".",
"pos": "ponct"
}
],
[
{
"w": "Tiene",
"pos": "verbe",
"info": "tener, présent, él (verbe irrégulier ; tener = avoir)",
"fr": "il a"
},
{
"w": "el",
"pos": "article",
"info": "article défini, masculin singulier",
"fr": "le"
},
{
"w": "pelo",
"pos": "nom",
"info": "masculin singulier",
"fr": "cheveux (en espagnol « el pelo » est au singulier)"
},
{
"w": "corto",
"pos": "adjectif",
"info": "masculin singulier",
"fr": "court"
},
{
"w": "y",
"pos": "conjonction",
"info": "",
"fr": "et"
},
{
"w": "los",
"pos": "article",
"info": "article défini, masculin pluriel",
"fr": "les"
},
{
"w": "ojos",
"pos": "nom",
"info": "masculin pluriel",
"fr": "yeux"
},
{
"w": "marrones",
"pos": "adjectif",
"info": "masculin/féminin pluriel",
"fr": "marron"
},
{
"w": ".",
"pos": "ponct"
}
],
[
{
"w": "Es",
"pos": "verbe",
"info": "ser, présent, él (ser = caractère)",
"fr": "il est"
},
{
"w": "muy",
"pos": "adverbe",
"info": "",
"fr": "très"
},
{
"w": "simpático",
"pos": "adjectif",
"info": "masculin singulier",
"fr": "sympathique"
},
{
"w": ",",
"pos": "ponct"
},
{
"w": "pero",
"pos": "conjonction",
"info": "",
"fr": "mais"
},
{
"w": "a",
"pos": "préposition",
"info": "",
"fr": "à"
},
{
"w": "veces",
"pos": "nom",
"info": "féminin pluriel (« a veces » = parfois)",
"fr": "fois"
},
{
"w": "está",
"pos": "verbe",
"info": "estar, présent, él (estar = état du moment)",
"fr": "il est"
},
{
"w": "cansado",
"pos": "adjectif",
"info": "masculin singulier",
"fr": "fatigué"
},
{
"w": ".",
"pos": "ponct"
}
],
[
{
"w": "Tiene",
"pos": "verbe",
"info": "tener, présent, él (l'âge se dit avec tener, pas ser)",
"fr": "il a"
},
{
"w": "treinta",
"pos": "déterminant",
"info": "nombre",
"fr": "trente"
},
{
"w": "años",
"pos": "nom",
"info": "masculin pluriel",
"fr": "ans"
},
{
"w": ".",
"pos": "ponct"
}
],
[
{
"w": "Es",
"pos": "verbe",
"info": "ser, présent, él (ser = origine)",
"fr": "il est"
},
{
"w": "de",
"pos": "préposition",
"info": "",
"fr": "de"
},
{
"w": "Sevilla",
"pos": "nom propre",
"info": "",
"fr": "Séville"
},
{
"w": ",",
"pos": "ponct"
},
{
"w": "pero",
"pos": "conjonction",
"info": "",
"fr": "mais"
},
{
"w": "vive",
"pos": "verbe",
"info": "vivir, présent, él",
"fr": "il vit"
},
{
"w": "en",
"pos": "préposition",
"info": "",
"fr": "à, dans"
},
{
"w": "Madrid",
"pos": "nom propre",
"info": "",
"fr": "Madrid"
},
{
"w": ".",
"pos": "ponct"
}
],
[
{
"w": "Su",
"pos": "déterminant",
"info": "déterminant possessif, singulier (son, sa)",
"fr": "sa"
},
{
"w": "casa",
"pos": "nom",
"info": "féminin singulier",
"fr": "maison"
},
{
"w": "es",
"pos": "verbe",
"info": "ser, présent, ella (ser = caractéristique)",
"fr": "est"
},
{
"w": "grande",
"pos": "adjectif",
"info": "masculin/féminin singulier",
"fr": "grande"
},
{
"w": "y",
"pos": "conjonction",
"info": "",
"fr": "et"
},
{
"w": "bonita",
"pos": "adjectif",
"info": "féminin singulier",
"fr": "jolie"
},
{
"w": ".",
"pos": "ponct"
}
],
[
{
"w": "Hoy",
"pos": "adverbe",
"info": "",
"fr": "aujourd'hui"
},
{
"w": "está",
"pos": "verbe",
"info": "estar, présent, él (estar = état du moment)",
"fr": "il est"
},
{
"w": "contento",
"pos": "adjectif",
"info": "masculin singulier",
"fr": "content"
},
{
"w": "porque",
"pos": "conjonction",
"info": "",
"fr": "parce que"
},
{
"w": "tiene",
"pos": "verbe",
"info": "tener, présent, él",
"fr": "il a"
},
{
"w": "vacaciones",
"pos": "nom",
"info": "féminin pluriel",
"fr": "vacances"
},
{
"w": ".",
"pos": "ponct"
}
],
[
{
"w": "Somos",
"pos": "verbe",
"info": "ser, présent, nosotros",
"fr": "nous sommes"
},
{
"w": "muy",
"pos": "adverbe",
"info": "",
"fr": "très"
},
{
"w": "buenos",
"pos": "adjectif",
"info": "masculin pluriel",
"fr": "bons"
},
{
"w": "amigos",
"pos": "nom",
"info": "masculin pluriel",
"fr": "amis"
},
{
"w": ".",
"pos": "ponct"
}
]
],
"translation": "Mon meilleur ami s'appelle Pablo. Il est grand et mince. Il a les cheveux courts et les yeux marron. Il est très sympathique, mais parfois il est fatigué. Il a trente ans. Il est de Séville, mais il vit à Madrid. Sa maison est grande et jolie. Aujourd'hui, il est content parce qu'il a des vacances. Nous sommes de très bons amis.",
"questions": [
{
"q": "Comment sont les yeux de Pablo ?",
"opts": [
"Bleus",
"Marron",
"Verts"
],
"correct": 1,
"why": "« los ojos marrones » = les yeux marron."
},
{
"q": "Où vit Pablo ?",
"opts": [
"À Séville",
"À Madrid",
"À Barcelone"
],
"correct": 1,
"why": "« vive en Madrid » = il vit à Madrid (il est de Séville, mais il vit à Madrid)."
},
{
"q": "Pourquoi Pablo est-il content aujourd'hui ?",
"opts": [
"Il a des vacances",
"Il a trente ans",
"Il est fatigué"
],
"correct": 0,
"why": "« porque tiene vacaciones » = parce qu'il a des vacances."
}
]
});

ATELIER.texts.push({
"id": "en-la-estacion",
"title": "En la estación",
"level": "A1",
"intro": "Un voyageur achète un billet de train. Repère les heures, les prix et le futur proche (ir a + infinitif).",
"sentences": [
[
{
"w": "Estoy",
"pos": "verbe",
"info": "estar, présent, yo (estar = lieu)",
"fr": "je suis"
},
{
"w": "en",
"pos": "préposition",
"info": "",
"fr": "à, dans"
},
{
"w": "la",
"pos": "article",
"info": "article défini, féminin singulier",
"fr": "la"
},
{
"w": "estación",
"pos": "nom",
"info": "féminin singulier",
"fr": "gare"
},
{
"w": "de",
"pos": "préposition",
"info": "",
"fr": "de"
},
{
"w": "tren",
"pos": "nom",
"info": "masculin singulier",
"fr": "train"
},
{
"w": ".",
"pos": "ponct"
}
],
[
{
"w": "Quiero",
"pos": "verbe",
"info": "querer, présent, yo (verbe irrégulier : e devient ie)",
"fr": "je veux"
},
{
"w": "un",
"pos": "article",
"info": "article indéfini, masculin singulier",
"fr": "un"
},
{
"w": "billete",
"pos": "nom",
"info": "masculin singulier",
"fr": "billet"
},
{
"w": "para",
"pos": "préposition",
"info": "« para » + destination",
"fr": "pour"
},
{
"w": "Valencia",
"pos": "nom propre",
"info": "",
"fr": "Valence"
},
{
"w": ".",
"pos": "ponct"
}
],
[
{
"w": "¿",
"pos": "ponct"
},
{
"w": "A",
"pos": "préposition",
"info": "",
"fr": "à"
},
{
"w": "qué",
"pos": "déterminant",
"info": "déterminant interrogatif",
"fr": "quelle"
},
{
"w": "hora",
"pos": "nom",
"info": "féminin singulier",
"fr": "heure"
},
{
"w": "sale",
"pos": "verbe",
"info": "salir, présent, él (verbe irrégulier : yo salgo)",
"fr": "part"
},
{
"w": "el",
"pos": "article",
"info": "article défini, masculin singulier",
"fr": "le"
},
{
"w": "tren",
"pos": "nom",
"info": "masculin singulier",
"fr": "train"
},
{
"w": "?",
"pos": "ponct"
}
],
[
{
"w": "Sale",
"pos": "verbe",
"info": "salir, présent, él",
"fr": "part"
},
{
"w": "a",
"pos": "préposition",
"info": "",
"fr": "à"
},
{
"w": "las",
"pos": "article",
"info": "article défini, féminin pluriel",
"fr": "les"
},
{
"w": "diez",
"pos": "déterminant",
"info": "nombre",
"fr": "dix"
},
{
"w": "y",
"pos": "conjonction",
"info": "",
"fr": "et"
},
{
"w": "media",
"pos": "adjectif",
"info": "féminin singulier (« y media » = et demie)",
"fr": "demie"
},
{
"w": ".",
"pos": "ponct"
}
],
[
{
"w": "Voy",
"pos": "verbe",
"info": "ir, présent, yo (verbe irrégulier)",
"fr": "je vais"
},
{
"w": "a",
"pos": "préposition",
"info": "ir + a + infinitif = futur proche",
"fr": "à"
},
{
"w": "comprar",
"pos": "verbe",
"info": "comprar, infinitif (après ir a)",
"fr": "acheter"
},
{
"w": "un",
"pos": "article",
"info": "article indéfini, masculin singulier",
"fr": "un"
},
{
"w": "billete",
"pos": "nom",
"info": "masculin singulier",
"fr": "billet"
},
{
"w": "de",
"pos": "préposition",
"info": "",
"fr": "de"
},
{
"w": "ida",
"pos": "nom",
"info": "féminin singulier",
"fr": "aller"
},
{
"w": "y",
"pos": "conjonction",
"info": "",
"fr": "et"
},
{
"w": "vuelta",
"pos": "nom",
"info": "féminin singulier",
"fr": "retour"
},
{
"w": ".",
"pos": "ponct"
}
],
[
{
"w": "¿",
"pos": "ponct"
},
{
"w": "Cuánto",
"pos": "adverbe",
"info": "adverbe interrogatif (avec accent)",
"fr": "combien"
},
{
"w": "cuesta",
"pos": "verbe",
"info": "costar, présent, él/ella/ello (verbe irrégulier : o devient ue)",
"fr": "coûte"
},
{
"w": "?",
"pos": "ponct"
}
],
[
{
"w": "Cuesta",
"pos": "verbe",
"info": "costar, présent, él/ella/ello",
"fr": "coûte"
},
{
"w": "cuarenta",
"pos": "déterminant",
"info": "nombre",
"fr": "quarante"
},
{
"w": "euros",
"pos": "nom",
"info": "masculin pluriel",
"fr": "euros"
},
{
"w": ".",
"pos": "ponct"
}
],
[
{
"w": "El",
"pos": "article",
"info": "article défini, masculin singulier",
"fr": "le"
},
{
"w": "tren",
"pos": "nom",
"info": "masculin singulier",
"fr": "train"
},
{
"w": "está",
"pos": "verbe",
"info": "estar, présent, él (estar = lieu)",
"fr": "est"
},
{
"w": "en",
"pos": "préposition",
"info": "",
"fr": "sur, à"
},
{
"w": "la",
"pos": "article",
"info": "article défini, féminin singulier",
"fr": "la"
},
{
"w": "vía",
"pos": "nom",
"info": "féminin singulier",
"fr": "voie"
},
{
"w": "número",
"pos": "nom",
"info": "masculin singulier",
"fr": "numéro"
},
{
"w": "tres",
"pos": "déterminant",
"info": "nombre",
"fr": "trois"
},
{
"w": ".",
"pos": "ponct"
}
],
[
{
"w": "Mi",
"pos": "déterminant",
"info": "déterminant possessif, masculin singulier (mon)",
"fr": "mon"
},
{
"w": "tren",
"pos": "nom",
"info": "masculin singulier",
"fr": "train"
},
{
"w": "va",
"pos": "verbe",
"info": "ir, présent, él (verbe irrégulier)",
"fr": "va"
},
{
"w": "a",
"pos": "préposition",
"info": "ir + a + infinitif = futur proche",
"fr": "à"
},
{
"w": "llegar",
"pos": "verbe",
"info": "llegar, infinitif (après ir a)",
"fr": "arriver"
},
{
"w": "pronto",
"pos": "adverbe",
"info": "",
"fr": "bientôt"
},
{
"w": ".",
"pos": "ponct"
}
]
],
"translation": "Je suis à la gare. Je veux un billet pour Valence. À quelle heure part le train ? Il part à dix heures et demie. Je vais acheter un billet aller-retour. Combien ça coûte ? Ça coûte quarante euros. Le train est sur la voie numéro trois. Mon train va bientôt arriver.",
"questions": [
{
"q": "Pour quelle ville le voyageur veut-il un billet ?",
"opts": [
"Madrid",
"Séville",
"Valence"
],
"correct": 2,
"why": "« un billete para Valencia » = un billet pour Valence."
},
{
"q": "À quelle heure part le train ?",
"opts": [
"À dix heures et demie",
"À dix heures",
"À onze heures et demie"
],
"correct": 0,
"why": "« a las diez y media » = à dix heures et demie."
},
{
"q": "Combien coûte le billet ?",
"opts": [
"Quatorze euros",
"Quarante euros",
"Quatre euros"
],
"correct": 1,
"why": "« cuarenta euros » = quarante euros."
}
]
});

ATELIER.texts.push({
"id": "mis-aficiones",
"title": "Mis aficiones",
"level": "A1",
"intro": "Elena parle de ses loisirs. Repère « me gusta » : ce qui plaît est le sujet du verbe.",
"sentences": [
[
{
"w": "Me",
"pos": "pronom",
"info": "pronom réfléchi, 1re pers. sing.",
"fr": "me"
},
{
"w": "llamo",
"pos": "verbe",
"info": "llamarse, présent, yo",
"fr": "(je m')appelle"
},
{
"w": "Elena",
"pos": "nom propre",
"info": "",
"fr": "Elena"
},
{
"w": "y",
"pos": "conjonction",
"info": "",
"fr": "et"
},
{
"w": "tengo",
"pos": "verbe",
"info": "tener, présent, yo (verbe irrégulier)",
"fr": "j'ai"
},
{
"w": "muchas",
"pos": "déterminant",
"info": "déterminant indéfini, féminin pluriel",
"fr": "beaucoup de"
},
{
"w": "aficiones",
"pos": "nom",
"info": "féminin pluriel",
"fr": "loisirs"
},
{
"w": ".",
"pos": "ponct"
}
],
[
{
"w": "Me",
"pos": "pronom",
"info": "pronom complément, 1re pers. sing. (avec gustar)",
"fr": "me, à moi"
},
{
"w": "gusta",
"pos": "verbe",
"info": "gustar, présent, él/ella/ello (le sujet est « el fútbol »)",
"fr": "plaît"
},
{
"w": "el",
"pos": "article",
"info": "article défini, masculin singulier",
"fr": "le"
},
{
"w": "fútbol",
"pos": "nom",
"info": "masculin singulier",
"fr": "football"
},
{
"w": ",",
"pos": "ponct"
},
{
"w": "pero",
"pos": "conjonction",
"info": "",
"fr": "mais"
},
{
"w": "no",
"pos": "adverbe",
"info": "",
"fr": "ne… pas"
},
{
"w": "me",
"pos": "pronom",
"info": "pronom complément, 1re pers. sing. (avec gustar)",
"fr": "me, à moi"
},
{
"w": "gusta",
"pos": "verbe",
"info": "gustar, présent, él/ella/ello (le sujet est « el tenis »)",
"fr": "plaît"
},
{
"w": "el",
"pos": "article",
"info": "article défini, masculin singulier",
"fr": "le"
},
{
"w": "tenis",
"pos": "nom",
"info": "masculin singulier",
"fr": "tennis"
},
{
"w": ".",
"pos": "ponct"
}
],
[
{
"w": "Los",
"pos": "article",
"info": "article défini, masculin pluriel",
"fr": "les"
},
{
"w": "sábados",
"pos": "nom",
"info": "masculin pluriel",
"fr": "samedis"
},
{
"w": "juego",
"pos": "verbe",
"info": "jugar, présent, yo (verbe irrégulier : u devient ue)",
"fr": "je joue"
},
{
"w": "al",
"pos": "préposition",
"info": "contraction de a + el (jugar al + sport)",
"fr": "au"
},
{
"w": "baloncesto",
"pos": "nom",
"info": "masculin singulier",
"fr": "basket"
},
{
"w": "con",
"pos": "préposition",
"info": "",
"fr": "avec"
},
{
"w": "mis",
"pos": "déterminant",
"info": "déterminant possessif, masculin pluriel (mes)",
"fr": "mes"
},
{
"w": "amigos",
"pos": "nom",
"info": "masculin pluriel",
"fr": "amis"
},
{
"w": ".",
"pos": "ponct"
}
],
[
{
"w": "También",
"pos": "adverbe",
"info": "",
"fr": "aussi"
},
{
"w": "me",
"pos": "pronom",
"info": "pronom complément, 1re pers. sing. (avec gustar)",
"fr": "me, à moi"
},
{
"w": "gusta",
"pos": "verbe",
"info": "gustar, présent, él/ella/ello (après gustar, un verbe reste à l'infinitif)",
"fr": "plaît"
},
{
"w": "nadar",
"pos": "verbe",
"info": "nadar, infinitif",
"fr": "nager"
},
{
"w": "en",
"pos": "préposition",
"info": "",
"fr": "dans"
},
{
"w": "la",
"pos": "article",
"info": "article défini, féminin singulier",
"fr": "la"
},
{
"w": "piscina",
"pos": "nom",
"info": "féminin singulier",
"fr": "piscine"
},
{
"w": ".",
"pos": "ponct"
}
],
[
{
"w": "Mi",
"pos": "déterminant",
"info": "déterminant possessif, masculin singulier (mon)",
"fr": "mon"
},
{
"w": "hermano",
"pos": "nom",
"info": "masculin singulier",
"fr": "frère"
},
{
"w": "prefiere",
"pos": "verbe",
"info": "preferir, présent, él (verbe irrégulier : e devient ie)",
"fr": "préfère"
},
{
"w": "la",
"pos": "article",
"info": "article défini, féminin singulier",
"fr": "la"
},
{
"w": "música",
"pos": "nom",
"info": "féminin singulier",
"fr": "musique"
},
{
"w": ".",
"pos": "ponct"
}
],
[
{
"w": "Toca",
"pos": "verbe",
"info": "tocar, présent, él (tocar = jouer d'un instrument)",
"fr": "il joue de"
},
{
"w": "la",
"pos": "article",
"info": "article défini, féminin singulier",
"fr": "la"
},
{
"w": "guitarra",
"pos": "nom",
"info": "féminin singulier",
"fr": "guitare"
},
{
"w": "muy",
"pos": "adverbe",
"info": "",
"fr": "très"
},
{
"w": "bien",
"pos": "adverbe",
"info": "",
"fr": "bien"
},
{
"w": ".",
"pos": "ponct"
}
],
[
{
"w": "Yo",
"pos": "pronom",
"info": "pronom sujet, 1re pers. sing.",
"fr": "moi, je"
},
{
"w": "prefiero",
"pos": "verbe",
"info": "preferir, présent, yo (verbe irrégulier : e devient ie)",
"fr": "je préfère"
},
{
"w": "leer",
"pos": "verbe",
"info": "leer, infinitif",
"fr": "lire"
},
{
"w": "libros",
"pos": "nom",
"info": "masculin pluriel",
"fr": "livres"
},
{
"w": ".",
"pos": "ponct"
}
],
[
{
"w": "¿",
"pos": "ponct"
},
{
"w": "Y",
"pos": "conjonction",
"info": "",
"fr": "et"
},
{
"w": "tú",
"pos": "pronom",
"info": "pronom sujet, 2e pers. sing. (avec accent)",
"fr": "toi"
},
{
"w": "?",
"pos": "ponct"
},
{
"w": "¿",
"pos": "ponct"
},
{
"w": "Qué",
"pos": "pronom",
"info": "pronom interrogatif (avec accent)",
"fr": "qu'est-ce que"
},
{
"w": "te",
"pos": "pronom",
"info": "pronom complément, 2e pers. sing. (avec gustar)",
"fr": "te, à toi"
},
{
"w": "gusta",
"pos": "verbe",
"info": "gustar, présent, él/ella/ello",
"fr": "plaît"
},
{
"w": "?",
"pos": "ponct"
}
]
],
"translation": "Je m'appelle Elena et j'ai beaucoup de loisirs. J'aime le football, mais je n'aime pas le tennis. Le samedi, je joue au basket avec mes amis. J'aime aussi nager à la piscine. Mon frère préfère la musique. Il joue très bien de la guitare. Moi, je préfère lire des livres. Et toi ? Qu'est-ce que tu aimes ?",
"questions": [
{
"q": "Que fait Elena le samedi ?",
"opts": [
"Elle joue au basket",
"Elle joue au tennis",
"Elle nage"
],
"correct": 0,
"why": "« Los sábados juego al baloncesto » = le samedi, je joue au basket."
},
{
"q": "Qui joue de la guitare ?",
"opts": [
"Elena",
"Son frère",
"Ses amis"
],
"correct": 1,
"why": "« Mi hermano… toca la guitarra » = mon frère joue de la guitare."
},
{
"q": "Qu'est-ce qu'Elena préfère ?",
"opts": [
"Lire des livres",
"Écouter de la musique",
"Jouer au football"
],
"correct": 0,
"why": "« Yo prefiero leer libros » = moi, je préfère lire des livres."
}
]
});

ATELIER.texts.push({
"id": "el-cumpleanos",
"title": "El cumpleaños",
"level": "A1",
"intro": "Une fête d'anniversaire en famille. Repère estar + gérondif (-ando / -iendo) : ce qui se passe en ce moment.",
"sentences": [
[
{
"w": "Hoy",
"pos": "adverbe",
"info": "",
"fr": "aujourd'hui"
},
{
"w": "es",
"pos": "verbe",
"info": "ser, présent, él (ser = identité)",
"fr": "est"
},
{
"w": "el",
"pos": "article",
"info": "article défini, masculin singulier",
"fr": "le"
},
{
"w": "cumpleaños",
"pos": "nom",
"info": "masculin singulier (même forme au pluriel)",
"fr": "anniversaire"
},
{
"w": "de",
"pos": "préposition",
"info": "",
"fr": "de"
},
{
"w": "mi",
"pos": "déterminant",
"info": "déterminant possessif, féminin singulier (ma)",
"fr": "ma"
},
{
"w": "hermana",
"pos": "nom",
"info": "féminin singulier",
"fr": "sœur"
},
{
"w": ".",
"pos": "ponct"
}
],
[
{
"w": "Ella",
"pos": "pronom",
"info": "pronom sujet, 3e pers. fém. sing.",
"fr": "elle"
},
{
"w": "cumple",
"pos": "verbe",
"info": "cumplir, présent, ella (cumplir … años = avoir … ans)",
"fr": "a (ses … ans)"
},
{
"w": "diez",
"pos": "déterminant",
"info": "nombre",
"fr": "dix"
},
{
"w": "años",
"pos": "nom",
"info": "masculin pluriel",
"fr": "ans"
},
{
"w": ".",
"pos": "ponct"
}
],
[
{
"w": "Estamos",
"pos": "verbe",
"info": "estar, présent, nosotros (estar = lieu)",
"fr": "nous sommes"
},
{
"w": "en",
"pos": "préposition",
"info": "",
"fr": "dans"
},
{
"w": "el",
"pos": "article",
"info": "article défini, masculin singulier",
"fr": "le"
},
{
"w": "jardín",
"pos": "nom",
"info": "masculin singulier",
"fr": "jardin"
},
{
"w": "de",
"pos": "préposition",
"info": "",
"fr": "de"
},
{
"w": "mis",
"pos": "déterminant",
"info": "déterminant possessif, masculin pluriel (mes)",
"fr": "mes"
},
{
"w": "abuelos",
"pos": "nom",
"info": "masculin pluriel",
"fr": "grands-parents"
},
{
"w": ".",
"pos": "ponct"
}
],
[
{
"w": "Mi",
"pos": "déterminant",
"info": "déterminant possessif, féminin singulier (ma)",
"fr": "ma"
},
{
"w": "madre",
"pos": "nom",
"info": "féminin singulier",
"fr": "mère"
},
{
"w": "está",
"pos": "verbe",
"info": "estar, présent, ella (auxiliaire du présent continu)",
"fr": "est"
},
{
"w": "preparando",
"pos": "verbe",
"info": "preparar, gérondif (estar + -ando : action en cours)",
"fr": "en train de préparer"
},
{
"w": "la",
"pos": "article",
"info": "article défini, féminin singulier",
"fr": "la"
},
{
"w": "tarta",
"pos": "nom",
"info": "féminin singulier",
"fr": "gâteau, tarte"
},
{
"w": ".",
"pos": "ponct"
}
],
[
{
"w": "Los",
"pos": "article",
"info": "article défini, masculin pluriel",
"fr": "les"
},
{
"w": "niños",
"pos": "nom",
"info": "masculin pluriel",
"fr": "enfants"
},
{
"w": "están",
"pos": "verbe",
"info": "estar, présent, ellos (auxiliaire du présent continu)",
"fr": "sont"
},
{
"w": "jugando",
"pos": "verbe",
"info": "jugar, gérondif (estar + -ando)",
"fr": "en train de jouer"
},
{
"w": "y",
"pos": "conjonction",
"info": "",
"fr": "et"
},
{
"w": "bailando",
"pos": "verbe",
"info": "bailar, gérondif (estar + -ando)",
"fr": "en train de danser"
},
{
"w": ".",
"pos": "ponct"
}
],
[
{
"w": "Hay",
"pos": "verbe",
"info": "haber, présent, forme impersonnelle (« il y a »)",
"fr": "il y a"
},
{
"w": "veinte",
"pos": "déterminant",
"info": "nombre",
"fr": "vingt"
},
{
"w": "invitados",
"pos": "nom",
"info": "masculin pluriel",
"fr": "invités"
},
{
"w": "y",
"pos": "conjonction",
"info": "",
"fr": "et"
},
{
"w": "hay",
"pos": "verbe",
"info": "haber, présent, forme impersonnelle (« il y a »)",
"fr": "il y a"
},
{
"w": "muchos",
"pos": "déterminant",
"info": "déterminant indéfini, masculin pluriel",
"fr": "beaucoup de"
},
{
"w": "regalos",
"pos": "nom",
"info": "masculin pluriel",
"fr": "cadeaux"
},
{
"w": ".",
"pos": "ponct"
}
],
[
{
"w": "Mi",
"pos": "déterminant",
"info": "déterminant possessif, féminin singulier (ma)",
"fr": "ma"
},
{
"w": "hermana",
"pos": "nom",
"info": "féminin singulier",
"fr": "sœur"
},
{
"w": "está",
"pos": "verbe",
"info": "estar, présent, ella (auxiliaire du présent continu)",
"fr": "est"
},
{
"w": "soplando",
"pos": "verbe",
"info": "soplar, gérondif (estar + -ando)",
"fr": "en train de souffler"
},
{
"w": "las",
"pos": "article",
"info": "article défini, féminin pluriel",
"fr": "les"
},
{
"w": "velas",
"pos": "nom",
"info": "féminin pluriel",
"fr": "bougies"
},
{
"w": ".",
"pos": "ponct"
}
],
[
{
"w": "¡",
"pos": "ponct"
},
{
"w": "Feliz",
"pos": "adjectif",
"info": "masculin/féminin singulier",
"fr": "joyeux"
},
{
"w": "cumpleaños",
"pos": "nom",
"info": "masculin singulier",
"fr": "anniversaire"
},
{
"w": "!",
"pos": "ponct"
}
],
[
{
"w": "Todos",
"pos": "pronom",
"info": "pronom indéfini, masculin pluriel",
"fr": "tous"
},
{
"w": "cantamos",
"pos": "verbe",
"info": "cantar, présent, nosotros",
"fr": "nous chantons"
},
{
"w": "y",
"pos": "conjonction",
"info": "",
"fr": "et"
},
{
"w": "comemos",
"pos": "verbe",
"info": "comer, présent, nosotros",
"fr": "nous mangeons"
},
{
"w": "tarta",
"pos": "nom",
"info": "féminin singulier",
"fr": "gâteau, tarte"
},
{
"w": ".",
"pos": "ponct"
}
]
],
"translation": "Aujourd'hui, c'est l'anniversaire de ma sœur. Elle a dix ans. Nous sommes dans le jardin de mes grands-parents. Ma mère est en train de préparer le gâteau. Les enfants sont en train de jouer et de danser. Il y a vingt invités et il y a beaucoup de cadeaux. Ma sœur est en train de souffler les bougies. Joyeux anniversaire ! Nous chantons tous et nous mangeons du gâteau.",
"questions": [
{
"q": "Quel âge a la sœur ?",
"opts": [
"Dix ans",
"Vingt ans",
"Douze ans"
],
"correct": 0,
"why": "« cumple diez años » = elle a dix ans (elle fête ses dix ans)."
},
{
"q": "Que fait la mère ?",
"opts": [
"Elle danse",
"Elle prépare le gâteau",
"Elle souffle les bougies"
],
"correct": 1,
"why": "« está preparando la tarta » = elle est en train de préparer le gâteau."
},
{
"q": "Combien y a-t-il d'invités ?",
"opts": [
"Dix",
"Douze",
"Vingt"
],
"correct": 2,
"why": "« Hay veinte invitados » = il y a vingt invités."
}
]
});

ATELIER.texts.push({
"id": "en-el-hotel",
"title": "En el hotel",
"level": "A1",
"intro": "Un client parle à la réception. On vouvoie : « usted » (3e personne du singulier).",
"sentences": [
[
{
"w": "Buenas",
"pos": "adjectif",
"info": "féminin pluriel",
"fr": "bonnes"
},
{
"w": "tardes",
"pos": "nom",
"info": "féminin pluriel (« buenas tardes » = bonjour, l'après-midi)",
"fr": "après-midi, soir"
},
{
"w": ",",
"pos": "ponct"
},
{
"w": "quiero",
"pos": "verbe",
"info": "querer, présent, yo (verbe irrégulier : e devient ie)",
"fr": "je veux"
},
{
"w": "una",
"pos": "article",
"info": "article indéfini, féminin singulier",
"fr": "une"
},
{
"w": "habitación",
"pos": "nom",
"info": "féminin singulier",
"fr": "chambre"
},
{
"w": ".",
"pos": "ponct"
}
],
[
{
"w": "¿",
"pos": "ponct"
},
{
"w": "Tiene",
"pos": "verbe",
"info": "tener, présent, usted (vouvoiement : même forme que él/ella)",
"fr": "avez-vous"
},
{
"w": "una",
"pos": "article",
"info": "article indéfini, féminin singulier",
"fr": "une"
},
{
"w": "habitación",
"pos": "nom",
"info": "féminin singulier",
"fr": "chambre"
},
{
"w": "doble",
"pos": "adjectif",
"info": "masculin/féminin singulier",
"fr": "double"
},
{
"w": ",",
"pos": "ponct"
},
{
"w": "por",
"pos": "préposition",
"info": "",
"fr": "par"
},
{
"w": "favor",
"pos": "nom",
"info": "masculin singulier (« por favor » = s'il vous plaît)",
"fr": "faveur"
},
{
"w": "?",
"pos": "ponct"
}
],
[
{
"w": "Sí",
"pos": "adverbe",
"info": "",
"fr": "oui"
},
{
"w": ",",
"pos": "ponct"
},
{
"w": "tenemos",
"pos": "verbe",
"info": "tener, présent, nosotros",
"fr": "nous avons"
},
{
"w": "una",
"pos": "article",
"info": "article indéfini, féminin singulier",
"fr": "une"
},
{
"w": "habitación",
"pos": "nom",
"info": "féminin singulier",
"fr": "chambre"
},
{
"w": "libre",
"pos": "adjectif",
"info": "masculin/féminin singulier",
"fr": "libre"
},
{
"w": ".",
"pos": "ponct"
}
],
[
{
"w": "¿",
"pos": "ponct"
},
{
"w": "Cuántas",
"pos": "déterminant",
"info": "déterminant interrogatif, féminin pluriel",
"fr": "combien de"
},
{
"w": "noches",
"pos": "nom",
"info": "féminin pluriel",
"fr": "nuits"
},
{
"w": "se",
"pos": "pronom",
"info": "pronom réfléchi, usted",
"fr": "vous"
},
{
"w": "queda",
"pos": "verbe",
"info": "quedarse, présent, usted (vouvoiement)",
"fr": "restez"
},
{
"w": "usted",
"pos": "pronom",
"info": "pronom sujet de politesse (3e pers. sing.)",
"fr": "vous"
},
{
"w": "?",
"pos": "ponct"
}
],
[
{
"w": "Me",
"pos": "pronom",
"info": "pronom réfléchi, 1re pers. sing.",
"fr": "me"
},
{
"w": "quedo",
"pos": "verbe",
"info": "quedarse, présent, yo",
"fr": "je reste"
},
{
"w": "tres",
"pos": "déterminant",
"info": "nombre",
"fr": "trois"
},
{
"w": "noches",
"pos": "nom",
"info": "féminin pluriel",
"fr": "nuits"
},
{
"w": ",",
"pos": "ponct"
},
{
"w": "hasta",
"pos": "préposition",
"info": "",
"fr": "jusqu'à"
},
{
"w": "el",
"pos": "article",
"info": "article défini, masculin singulier",
"fr": "le"
},
{
"w": "domingo",
"pos": "nom",
"info": "masculin singulier",
"fr": "dimanche"
},
{
"w": ".",
"pos": "ponct"
}
],
[
{
"w": "¿",
"pos": "ponct"
},
{
"w": "Cuánto",
"pos": "adverbe",
"info": "adverbe interrogatif (avec accent)",
"fr": "combien"
},
{
"w": "cuesta",
"pos": "verbe",
"info": "costar, présent, ella (verbe irrégulier : o devient ue)",
"fr": "coûte"
},
{
"w": "la",
"pos": "article",
"info": "article défini, féminin singulier",
"fr": "la"
},
{
"w": "habitación",
"pos": "nom",
"info": "féminin singulier",
"fr": "chambre"
},
{
"w": "por",
"pos": "préposition",
"info": "",
"fr": "par"
},
{
"w": "noche",
"pos": "nom",
"info": "féminin singulier",
"fr": "nuit"
},
{
"w": "?",
"pos": "ponct"
}
],
[
{
"w": "Son",
"pos": "verbe",
"info": "ser, présent, ellos (prix au pluriel : ochenta euros)",
"fr": "c'est, ce sont"
},
{
"w": "ochenta",
"pos": "déterminant",
"info": "nombre",
"fr": "quatre-vingts"
},
{
"w": "euros",
"pos": "nom",
"info": "masculin pluriel",
"fr": "euros"
},
{
"w": ",",
"pos": "ponct"
},
{
"w": "señor",
"pos": "nom",
"info": "masculin singulier",
"fr": "monsieur"
},
{
"w": ".",
"pos": "ponct"
}
],
[
{
"w": "¿",
"pos": "ponct"
},
{
"w": "Está",
"pos": "verbe",
"info": "estar, présent, él/ella/ello",
"fr": "est"
},
{
"w": "incluido",
"pos": "adjectif",
"info": "masculin singulier",
"fr": "compris"
},
{
"w": "el",
"pos": "article",
"info": "article défini, masculin singulier",
"fr": "le"
},
{
"w": "desayuno",
"pos": "nom",
"info": "masculin singulier",
"fr": "petit-déjeuner"
},
{
"w": "?",
"pos": "ponct"
}
],
[
{
"w": "Sí",
"pos": "adverbe",
"info": "",
"fr": "oui"
},
{
"w": ",",
"pos": "ponct"
},
{
"w": "y",
"pos": "conjonction",
"info": "",
"fr": "et"
},
{
"w": "su",
"pos": "déterminant",
"info": "déterminant possessif de politesse, singulier (votre)",
"fr": "votre"
},
{
"w": "habitación",
"pos": "nom",
"info": "féminin singulier",
"fr": "chambre"
},
{
"w": "está",
"pos": "verbe",
"info": "estar, présent, ella (estar = lieu)",
"fr": "est"
},
{
"w": "en",
"pos": "préposition",
"info": "",
"fr": "à, dans"
},
{
"w": "el",
"pos": "article",
"info": "article défini, masculin singulier",
"fr": "le"
},
{
"w": "piso",
"pos": "nom",
"info": "masculin singulier",
"fr": "étage"
},
{
"w": "tres",
"pos": "déterminant",
"info": "nombre",
"fr": "trois"
},
{
"w": ".",
"pos": "ponct"
}
]
],
"translation": "Bonjour, je voudrais une chambre. Avez-vous une chambre double, s'il vous plaît ? Oui, nous avons une chambre libre. Combien de nuits restez-vous ? Je reste trois nuits, jusqu'au dimanche. Combien coûte la chambre par nuit ? C'est quatre-vingts euros, monsieur. Le petit-déjeuner est-il compris ? Oui, et votre chambre est à l'étage trois.",
"questions": [
{
"q": "Combien de nuits le client reste-t-il ?",
"opts": [
"Deux nuits",
"Trois nuits",
"Huit nuits"
],
"correct": 1,
"why": "« Me quedo tres noches » = je reste trois nuits."
},
{
"q": "Combien coûte la chambre par nuit ?",
"opts": [
"Quatre-vingts euros",
"Cinquante euros",
"Dix-huit euros"
],
"correct": 0,
"why": "« Son ochenta euros » = c'est quatre-vingts euros."
},
{
"q": "« ¿Tiene una habitación doble ? » : à quelle personne est « tiene » ?",
"opts": [
"À la 1re personne (yo)",
"À la 3e personne, par politesse (usted)",
"À la 2e personne (tú)"
],
"correct": 1,
"why": "Avec « usted », le verbe se met à la 3e personne du singulier : tiene."
}
]
});

ATELIER.texts.push({
"id": "mi-fin-de-semana",
"title": "Mi fin de semana",
"level": "A1",
"intro": "Un week-end habituel. Repère les mots de fréquence : siempre, casi siempre, a veces, nunca.",
"sentences": [
[
{
"w": "Los",
"pos": "article",
"info": "article défini, masculin pluriel (« los sábados » = le samedi, chaque samedi)",
"fr": "les"
},
{
"w": "sábados",
"pos": "nom",
"info": "masculin pluriel",
"fr": "samedis"
},
{
"w": "me",
"pos": "pronom",
"info": "pronom réfléchi, 1re pers. sing.",
"fr": "me"
},
{
"w": "levanto",
"pos": "verbe",
"info": "levantarse, présent, yo",
"fr": "je me lève"
},
{
"w": "tarde",
"pos": "adverbe",
"info": "",
"fr": "tard"
},
{
"w": ".",
"pos": "ponct"
}
],
[
{
"w": "Siempre",
"pos": "adverbe",
"info": "fréquence : 100 %",
"fr": "toujours"
},
{
"w": "desayuno",
"pos": "verbe",
"info": "desayunar, présent, yo",
"fr": "je prends le petit-déjeuner"
},
{
"w": "con",
"pos": "préposition",
"info": "",
"fr": "avec"
},
{
"w": "mi",
"pos": "déterminant",
"info": "déterminant possessif, féminin singulier (ma)",
"fr": "ma"
},
{
"w": "familia",
"pos": "nom",
"info": "féminin singulier",
"fr": "famille"
},
{
"w": ".",
"pos": "ponct"
}
],
[
{
"w": "Por",
"pos": "préposition",
"info": "",
"fr": "par, pendant"
},
{
"w": "la",
"pos": "article",
"info": "article défini, féminin singulier",
"fr": "la"
},
{
"w": "mañana",
"pos": "nom",
"info": "féminin singulier",
"fr": "matin"
},
{
"w": "a",
"pos": "préposition",
"info": "",
"fr": "à"
},
{
"w": "veces",
"pos": "nom",
"info": "féminin pluriel (« a veces » = parfois)",
"fr": "fois"
},
{
"w": "voy",
"pos": "verbe",
"info": "ir, présent, yo (verbe irrégulier)",
"fr": "je vais"
},
{
"w": "al",
"pos": "préposition",
"info": "contraction de a + el",
"fr": "au"
},
{
"w": "mercado",
"pos": "nom",
"info": "masculin singulier",
"fr": "marché"
},
{
"w": ".",
"pos": "ponct"
}
],
[
{
"w": "Por",
"pos": "préposition",
"info": "",
"fr": "par, pendant"
},
{
"w": "la",
"pos": "article",
"info": "article défini, féminin singulier",
"fr": "la"
},
{
"w": "tarde",
"pos": "nom",
"info": "féminin singulier",
"fr": "après-midi"
},
{
"w": "casi",
"pos": "adverbe",
"info": "",
"fr": "presque"
},
{
"w": "siempre",
"pos": "adverbe",
"info": "fréquence : « casi siempre » = presque toujours",
"fr": "toujours"
},
{
"w": "veo",
"pos": "verbe",
"info": "ver, présent, yo (verbe irrégulier)",
"fr": "je regarde, je vois"
},
{
"w": "una",
"pos": "article",
"info": "article indéfini, féminin singulier",
"fr": "un"
},
{
"w": "película",
"pos": "nom",
"info": "féminin singulier",
"fr": "film"
},
{
"w": ".",
"pos": "ponct"
}
],
[
{
"w": "Los",
"pos": "article",
"info": "article défini, masculin pluriel (« los domingos » = le dimanche, chaque dimanche)",
"fr": "les"
},
{
"w": "domingos",
"pos": "nom",
"info": "masculin pluriel",
"fr": "dimanches"
},
{
"w": "como",
"pos": "verbe",
"info": "comer, présent, yo",
"fr": "je mange"
},
{
"w": "en",
"pos": "préposition",
"info": "",
"fr": "à, dans"
},
{
"w": "casa",
"pos": "nom",
"info": "féminin singulier (« en casa de » = chez)",
"fr": "maison"
},
{
"w": "de",
"pos": "préposition",
"info": "",
"fr": "de"
},
{
"w": "mis",
"pos": "déterminant",
"info": "déterminant possessif, masculin pluriel (mes)",
"fr": "mes"
},
{
"w": "padres",
"pos": "nom",
"info": "masculin pluriel (« padres » = parents)",
"fr": "parents"
},
{
"w": ".",
"pos": "ponct"
}
],
[
{
"w": "Nunca",
"pos": "adverbe",
"info": "fréquence : 0 % (avant le verbe, pas de « no »)",
"fr": "jamais"
},
{
"w": "trabajo",
"pos": "verbe",
"info": "trabajar, présent, yo",
"fr": "je travaille"
},
{
"w": "el",
"pos": "article",
"info": "article défini, masculin singulier",
"fr": "le"
},
{
"w": "fin",
"pos": "nom",
"info": "masculin singulier",
"fr": "fin"
},
{
"w": "de",
"pos": "préposition",
"info": "",
"fr": "de"
},
{
"w": "semana",
"pos": "nom",
"info": "féminin singulier",
"fr": "semaine"
},
{
"w": ".",
"pos": "ponct"
}
],
[
{
"w": "Dos",
"pos": "déterminant",
"info": "nombre",
"fr": "deux"
},
{
"w": "veces",
"pos": "nom",
"info": "féminin pluriel",
"fr": "fois"
},
{
"w": "al",
"pos": "préposition",
"info": "contraction de a + el",
"fr": "par (au)"
},
{
"w": "mes",
"pos": "nom",
"info": "masculin singulier",
"fr": "mois"
},
{
"w": "voy",
"pos": "verbe",
"info": "ir, présent, yo (verbe irrégulier)",
"fr": "je vais"
},
{
"w": "al",
"pos": "préposition",
"info": "contraction de a + el",
"fr": "au"
},
{
"w": "cine",
"pos": "nom",
"info": "masculin singulier",
"fr": "cinéma"
},
{
"w": ".",
"pos": "ponct"
}
],
[
{
"w": "¿",
"pos": "ponct"
},
{
"w": "Y",
"pos": "conjonction",
"info": "",
"fr": "et"
},
{
"w": "tú",
"pos": "pronom",
"info": "pronom sujet, 2e pers. sing. (avec accent)",
"fr": "toi"
},
{
"w": "?",
"pos": "ponct"
},
{
"w": "¿",
"pos": "ponct"
},
{
"w": "Qué",
"pos": "pronom",
"info": "pronom interrogatif (avec accent)",
"fr": "que, qu'est-ce que"
},
{
"w": "haces",
"pos": "verbe",
"info": "hacer, présent, tú (verbe irrégulier : yo hago)",
"fr": "fais-tu"
},
{
"w": "el",
"pos": "article",
"info": "article défini, masculin singulier",
"fr": "le"
},
{
"w": "domingo",
"pos": "nom",
"info": "masculin singulier",
"fr": "dimanche"
},
{
"w": "?",
"pos": "ponct"
}
]
],
"translation": "Le samedi, je me lève tard. Je prends toujours le petit-déjeuner avec ma famille. Le matin, je vais parfois au marché. L'après-midi, je regarde presque toujours un film. Le dimanche, je mange chez mes parents. Je ne travaille jamais le week-end. Deux fois par mois, je vais au cinéma. Et toi, que fais-tu le dimanche ?",
"questions": [
{
"q": "Que fait-on le samedi ?",
"opts": [
"On se lève tôt",
"On se lève tard",
"On travaille"
],
"correct": 1,
"why": "« Los sábados me levanto tarde » = le samedi, je me lève tard."
},
{
"q": "Où mange-t-on le dimanche ?",
"opts": [
"Au restaurant",
"Au marché",
"Chez les parents"
],
"correct": 2,
"why": "« como en casa de mis padres » = je mange chez mes parents."
},
{
"q": "Combien de fois par mois va-t-on au cinéma ?",
"opts": [
"Une fois",
"Deux fois",
"Quatre fois"
],
"correct": 1,
"why": "« Dos veces al mes » = deux fois par mois."
}
]
});

  const ORDER = ["temps-present", "temps-ir-a", "temps-indefinido", "temps-perfecto", "temps-imperfecto", "temps-futur", "temps-condicional", "temps-imperativo", "verbes-pronominaux", "verbes-pronominaux-2", "verbes-diphtongue", "prononciation-diphtongues", "structures-automatismes", "pieges-informel"];
  ATELIER.chapters.sort((a, b) => ORDER.indexOf(a.id) - ORDER.indexOf(b.id));
  return ATELIER;
})();
