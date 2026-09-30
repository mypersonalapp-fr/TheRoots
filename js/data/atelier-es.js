// ⚠️ FICHIER TEMPORAIRE — construit à partir des DONNÉES DE TEST
// (.staging/es/test-atelier-data.js) pour développer l'écran
// js/screens/atelier-es.js. L'orchestrateur le REMPLACE par le vrai contenu
// assemblé (fragments .staging/es/*.js). Ne pas publier tel quel.
export const ATELIER_ES = (function () {
  const ATELIER = { chapters: [], decoder: null, texts: [] };
// DONNÉES DE TEST de l'Atelier espagnol (écran js/screens/atelier-es.js).
// Ce n'est PAS le vrai contenu : 2 chapitres, un décodeur réduit, 1 texte.
// Format : voir ATELIER-FORMAT.md (fragment sans import/export).

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

ATELIER.decoder = {
  tenses: { presente: "Présent", presente_continuo: "Présent continu (estar + -ando/-iendo)", perfecto: "Passé composé (he + participe)", indefinido: "Passé simple / passé composé (action terminée)", imperfecto: "Imparfait", ir_a: "Futur proche (ir a + infinitif)", futuro: "Futur", condicional: "Conditionnel", imperativo: "Impératif" },
  endings: [
    { tense: "presente", group: "ar", ending: "o", person: "yo", fr: "présent, 1re personne du singulier (je …)", example: "hablo = je parle" },
    { tense: "presente", group: "er-ir", ending: "o", person: "yo", fr: "présent, 1re personne du singulier (je …)", example: "como = je mange" },
    { tense: "presente", group: "ar", ending: "amos", person: "nosotros", fr: "présent, 1re personne du pluriel (nous …ons)", example: "hablamos = nous parlons" },
    { tense: "presente", group: "ar", ending: "an", person: "ellos/ellas/ustedes", fr: "présent, 3e personne du pluriel (ils …ent)", example: "hablan = ils parlent" },
    { tense: "futuro", group: "all", ending: "é", person: "yo", fr: "futur, 1re personne du singulier (je …rai)", example: "hablaré = je parlerai" },
    { tense: "futuro", group: "all", ending: "ás", person: "tú", fr: "futur, 2e personne du singulier (tu …ras)", example: "hablarás = tu parleras" },
    { tense: "futuro", group: "all", ending: "á", person: "él/ella/usted", fr: "futur, 3e personne du singulier (il …ra)", example: "hablará = il parlera" },
    { tense: "futuro", group: "all", ending: "emos", person: "nosotros", fr: "futur, 1re personne du pluriel (nous …rons)", example: "hablaremos = nous parlerons" },
    { tense: "futuro", group: "all", ending: "éis", person: "vosotros", fr: "futur, 2e personne du pluriel (vous …rez)", example: "hablaréis = vous parlerez" },
    { tense: "futuro", group: "all", ending: "án", person: "ellos/ellas/ustedes", fr: "futur, 3e personne du pluriel (ils …ront)", example: "hablarán = ils parleront" },
    { tense: "condicional", group: "all", ending: "ía", person: "yo / él/ella/usted", fr: "conditionnel (je/il …rais/rait)", example: "hablaría = je parlerais" },
    { tense: "indefinido", group: "ar", ending: "é", person: "yo", fr: "passé (indefinido), 1re pers. sing. (j'ai …é)", example: "hablé = j'ai parlé" },
    { tense: "indefinido", group: "ar", ending: "aron", person: "ellos/ellas/ustedes", fr: "passé (indefinido), 3e pers. plur. (ils ont …é)", example: "hablaron = ils ont parlé" },
    { tense: "imperfecto", group: "ar", ending: "aba", person: "yo / él/ella/usted", fr: "imparfait (je/il …ais/ait)", example: "hablaba = je parlais" },
    { tense: "presente_continuo", group: "ar", ending: "ando", person: "gérondif", fr: "gérondif (en train de …)", example: "hablando = en train de parler" },
    { tense: "perfecto", group: "ar", ending: "ado", person: "participe", fr: "participe passé (…é)", example: "hablado = parlé" }
  ],
  irregulars: [
    { form: "serán", infinitive: "ser", tense: "futuro", person: "ellos/ellas/ustedes", fr: "ils/elles seront (ou : ce sont sans doute…)" },
    { form: "seré", infinitive: "ser", tense: "futuro", person: "yo", fr: "je serai" },
    { form: "fui", infinitive: "ser", tense: "indefinido", person: "yo", fr: "j'ai été / je fus" },
    { form: "fui", infinitive: "ir", tense: "indefinido", person: "yo", fr: "je suis allé(e) / j'allai" },
    { form: "tendré", infinitive: "tener", tense: "futuro", person: "yo", fr: "j'aurai" },
    { form: "haré", infinitive: "hacer", tense: "futuro", person: "yo", fr: "je ferai" },
    { form: "voy", infinitive: "ir", tense: "presente", person: "yo", fr: "je vais" },
    { form: "es", infinitive: "ser", tense: "presente", person: "él/ella/usted", fr: "il/elle est" },
    { form: "está", infinitive: "estar", tense: "presente", person: "él/ella/usted", fr: "il/elle est (état, lieu)" }
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
  return ATELIER;
})();
