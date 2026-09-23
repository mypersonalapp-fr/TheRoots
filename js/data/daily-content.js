// The Roots — contenus "du jour" de l'Accueil (expression, citation, vidéo).
//
// Pourquoi ce fichier (23/09) : avant, l'Accueil n'avait que 2 expressions
// et 3 citations en tout, et UNE SEULE vidéo — rien ne pouvait donc
// vraiment changer d'un jour à l'autre. Ici :
// - 31 expressions PAR LANGUE (anglais, espagnol, portugais) → une
//   différente chaque jour, sans répétition sur 31 jours ;
// - 31 citations/proverbes français avec leur équivalent dans chaque langue ;
// - 15 vidéos par langue (anglais, espagnol) et 15 en portugais européen,
//   qui changent tous les 2 jours → 30 jours avant de revenir au début.
//
// Le choix se fait sur le NUMÉRO DU JOUR (jours écoulés depuis 1970, en
// date locale), pas sur le jour du mois : on passe donc aussi d'un mois à
// l'autre sans jamais retomber deux jours de suite sur la même chose.
//
// Toutes les vidéos viennent de recherches YouTube faites par Claude (liens
// existants au moment de la recherche) — pas encore regardées par Claude
// (pas de lecture vidéo possible). Ashley peut en remplacer n'importe
// laquelle : il suffit de changer "id" (la partie après "v=" dans le lien).

// Numéro du jour en date LOCALE (change à minuit chez l'utilisatrice).
export function dayNumber(d = new Date()) {
  return Math.floor(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()) / 86400000);
}

export function pickDaily(list, d) {
  if (!list || !list.length) return null;
  return list[dayNumber(d) % list.length];
}

export function pickEveryTwoDays(list, d) {
  if (!list || !list.length) return null;
  return list[Math.floor(dayNumber(d) / 2) % list.length];
}

// ---------- Expression du jour : { text, fr, note } ----------
// "fr" = l'expression française qu'on emploierait dans la même situation
// (pas une traduction mot à mot). Quelques expressions familières
// (marquées "familier") pour coller à la langue réellement parlée.
export const EXPRESSIONS = {
  en: [
    { text: "It's raining cats and dogs.", fr: "Il pleut des cordes.", note: "Mot à mot « il pleut des chats et des chiens » — ça ne veut rien dire en français." },
    { text: "Break a leg!", fr: "Merde ! (pour souhaiter bonne chance)", note: "Se dit avant un spectacle, un examen, un entretien." },
    { text: "It's a piece of cake.", fr: "C'est du gâteau.", note: "Pour dire que quelque chose est très facile." },
    { text: "It costs an arm and a leg.", fr: "Ça coûte les yeux de la tête.", note: "En anglais on paie avec un bras et une jambe, en français avec les yeux." },
    { text: "To kill two birds with one stone.", fr: "Faire d'une pierre deux coups.", note: "Même image de la pierre, mais avec deux oiseaux." },
    { text: "When pigs fly.", fr: "Quand les poules auront des dents.", note: "Pour dire « jamais »." },
    { text: "To let the cat out of the bag.", fr: "Vendre la mèche.", note: "Révéler un secret, souvent sans le faire exprès." },
    { text: "Stop beating around the bush!", fr: "Arrête de tourner autour du pot !", note: "Va droit au but." },
    { text: "I'm feeling under the weather.", fr: "Je ne suis pas dans mon assiette.", note: "Se sentir un peu malade ou fatigué(e)." },
    { text: "Once in a blue moon.", fr: "Tous les trente-six du mois.", note: "Très rarement." },
    { text: "I'm going to hit the sack.", fr: "Je vais me pieuter. (familier)", note: "Aller se coucher." },
    { text: "Are you pulling my leg?", fr: "Tu me fais marcher ?", note: "Est-ce que tu te moques de moi ?" },
    { text: "The ball is in your court.", fr: "La balle est dans ton camp.", note: "C'est à toi de décider / d'agir." },
    { text: "I have butterflies in my stomach.", fr: "J'ai le trac. / J'ai l'estomac noué.", note: "Nervosité avant un moment important." },
    { text: "She's on cloud nine.", fr: "Elle est aux anges.", note: "Être extrêmement heureux(se)." },
    { text: "Better late than never.", fr: "Mieux vaut tard que jamais.", note: "Un des rares cas où l'image est la même dans les deux langues." },
    { text: "Let's call it a day.", fr: "On s'arrête là pour aujourd'hui.", note: "Très utilisé au travail en fin de journée." },
    { text: "Speak of the devil!", fr: "Quand on parle du loup…", note: "Quand la personne dont on parle arrive." },
    { text: "Don't bite off more than you can chew.", fr: "N'aie pas les yeux plus gros que le ventre.", note: "Ne pas en faire trop, ne pas trop promettre." },
    { text: "Don't cut corners.", fr: "Ne bâcle pas le travail.", note: "Faire les choses à moitié pour aller plus vite." },
    { text: "He got cold feet.", fr: "Il s'est dégonflé.", note: "Avoir peur au dernier moment et renoncer." },
    { text: "It's not my cup of tea.", fr: "Ce n'est pas mon truc.", note: "« Ma tasse de thé » existe aussi en français, mais on dit plus souvent « pas mon truc »." },
    { text: "Come on, spill the beans!", fr: "Allez, crache le morceau !", note: "Dis-moi le secret." },
    { text: "You hit the nail on the head.", fr: "Tu as mis le doigt dessus.", note: "Tu as trouvé exactement le problème." },
    { text: "I'm all ears.", fr: "Je suis tout ouïe.", note: "Je t'écoute attentivement." },
    { text: "I have a sweet tooth.", fr: "Je suis bec sucré.", note: "Aimer beaucoup les choses sucrées." },
    { text: "I'm feeling blue.", fr: "J'ai le cafard.", note: "Le bleu = la tristesse en anglais." },
    { text: "No pain, no gain.", fr: "On n'a rien sans rien.", note: "L'effort paie — très utilisé pour le sport." },
    { text: "I slept like a log.", fr: "J'ai dormi comme une souche.", note: "Bûche en anglais, souche en français : presque la même image." },
    { text: "Actions speak louder than words.", fr: "Les actes valent mieux que les paroles.", note: "Ce qu'on fait compte plus que ce qu'on dit." },
    { text: "I'm broke.", fr: "Je suis fauché(e). (familier)", note: "Ne plus avoir d'argent — très courant à l'oral." },
  ],
  es: [
    { text: "Estar en las nubes.", fr: "Être dans la lune.", note: "Être distrait(e) — en espagnol on est dans les nuages." },
    { text: "¿Me estás tomando el pelo?", fr: "Tu me fais marcher ?", note: "Mot à mot : « tu me prends les cheveux ? »." },
    { text: "Cuesta un ojo de la cara.", fr: "Ça coûte les yeux de la tête.", note: "Un seul œil en espagnol !" },
    { text: "Es pan comido.", fr: "C'est du gâteau.", note: "Mot à mot : « c'est du pain mangé »." },
    { text: "Está como una cabra.", fr: "Il/elle est complètement timbré(e). (familier)", note: "Mot à mot : « comme une chèvre »." },
    { text: "No tiene pelos en la lengua.", fr: "Il/elle n'a pas la langue dans sa poche.", note: "Dire les choses franchement." },
    { text: "¡Metí la pata!", fr: "J'ai fait une gaffe !", note: "Mot à mot : « j'ai mis la patte »." },
    { text: "¿Me echas una mano?", fr: "Tu me donnes un coup de main ?", note: "Demander de l'aide simplement." },
    { text: "Estoy hecho polvo.", fr: "Je suis crevé(e).", note: "Mot à mot : « je suis fait en poussière »." },
    { text: "¡Ponte las pilas!", fr: "Bouge-toi !", note: "Mot à mot : « mets tes piles »." },
    { text: "Has dado en el clavo.", fr: "Tu as mis dans le mille.", note: "Même image qu'en anglais (« hit the nail on the head »)." },
    { text: "Son uña y carne.", fr: "Ils sont comme les deux doigts de la main.", note: "Inséparables — mot à mot « ongle et chair »." },
    { text: "Está de mala leche.", fr: "Il/elle est de mauvais poil. (familier)", note: "Mot à mot : « de mauvais lait »." },
    { text: "No tires la toalla.", fr: "Ne jette pas l'éponge.", note: "Serviette en espagnol, éponge en français — même idée venue de la boxe." },
    { text: "Está en su salsa.", fr: "Il/elle est dans son élément.", note: "Mot à mot : « dans sa sauce »." },
    { text: "Habla por los codos.", fr: "C'est un vrai moulin à paroles.", note: "Mot à mot : « parler par les coudes »." },
    { text: "Me quedé de piedra.", fr: "Je suis resté(e) sans voix.", note: "Être sidéré(e), stupéfait(e)." },
    { text: "¡Qué mala pata!", fr: "Quelle poisse !", note: "Pas de chance." },
    { text: "Como pez en el agua.", fr: "Comme un poisson dans l'eau.", note: "Même image qu'en français." },
    { text: "Más vale tarde que nunca.", fr: "Mieux vaut tard que jamais.", note: "Identique au français." },
    { text: "Vamos al grano.", fr: "Allons droit au but.", note: "Mot à mot : « allons au grain »." },
    { text: "Estoy sin blanca.", fr: "Je suis fauché(e). (familier, Espagne)", note: "La « blanca » était une ancienne petite pièce." },
    { text: "Es un cero a la izquierda.", fr: "Il compte pour du beurre.", note: "Un zéro à gauche d'un nombre ne vaut rien." },
    { text: "Lo consultaré con la almohada.", fr: "La nuit porte conseil.", note: "Mot à mot : « je vais consulter l'oreiller »." },
    { text: "No le busques tres pies al gato.", fr: "Ne cherche pas la petite bête.", note: "Mot à mot : « ne cherche pas trois pattes au chat »." },
    { text: "Cuando las ranas críen pelo.", fr: "Quand les poules auront des dents.", note: "Des grenouilles avec des poils, au lieu de poules avec des dents." },
    { text: "Dormí como un tronco.", fr: "J'ai dormi comme une souche.", note: "Même image qu'en français." },
    { text: "¡Qué guay!", fr: "Trop cool ! (familier, Espagne)", note: "Très courant chez les jeunes en Espagne." },
    { text: "Estoy hasta las narices.", fr: "J'en ai ras le bol. (familier)", note: "Mot à mot : « jusqu'aux narines »." },
    { text: "En boca cerrada no entran moscas.", fr: "Le silence est d'or.", note: "Mot à mot : « dans une bouche fermée, les mouches n'entrent pas »." },
    { text: "Tener la sartén por el mango.", fr: "Tenir les rênes.", note: "Avoir le contrôle — mot à mot « tenir la poêle par le manche »." },
  ],
  pt: [
    { text: "Estou com a pulga atrás da orelha.", fr: "J'ai la puce à l'oreille.", note: "Même image qu'en français : avoir un doute." },
    { text: "Custa os olhos da cara.", fr: "Ça coûte les yeux de la tête.", note: "Identique au français." },
    { text: "Ponho as mãos no fogo por ele.", fr: "Je mets ma main au feu pour lui.", note: "Deux mains en portugais !" },
    { text: "Andas nas nuvens.", fr: "Tu es dans la lune.", note: "Être distrait(e)." },
    { text: "Meti o pé na poça.", fr: "J'ai fait une gaffe.", note: "Mot à mot : « j'ai mis le pied dans la flaque » (Portugal)." },
    { text: "Ele deu com a língua nos dentes.", fr: "Il a vendu la mèche.", note: "Mot à mot : « il a cogné la langue contre les dents »." },
    { text: "Está a chover a potes.", fr: "Il pleut des cordes.", note: "Mot à mot : « il pleut à pots » (Portugal)." },
    { text: "Isso é canja!", fr: "C'est du gâteau !", note: "« Canja » = bouillon de poulet, un plat simple." },
    { text: "Estou feito num oito.", fr: "Je suis lessivé(e). (familier)", note: "Épuisé(e), dans un sale état." },
    { text: "Andas com a cabeça no ar.", fr: "Tu es tête en l'air.", note: "Distrait(e), étourdi(e)." },
    { text: "Fez ouvidos de mercador.", fr: "Il a fait la sourde oreille.", note: "Mot à mot : « des oreilles de marchand »." },
    { text: "Não tem papas na língua.", fr: "Il/elle ne mâche pas ses mots.", note: "Mot à mot : « pas de bouillie sur la langue »." },
    { text: "Quem paga o pato sou eu.", fr: "C'est moi qui paie les pots cassés.", note: "Mot à mot : « c'est moi qui paie le canard »." },
    { text: "Tira o cavalinho da chuva!", fr: "Tu peux toujours courir !", note: "Mot à mot : « retire le petit cheval de la pluie »." },
    { text: "Ela está com os azeites.", fr: "Elle est de mauvais poil. (familier, Portugal)", note: "Mot à mot : « elle est avec les huiles »." },
    { text: "Ficou a ver navios.", fr: "Il est resté le bec dans l'eau.", note: "Mot à mot : « il est resté à regarder les navires »." },
    { text: "Não vale a pena chorar sobre leite derramado.", fr: "Ce qui est fait est fait.", note: "Mot à mot : « pleurer sur le lait renversé »." },
    { text: "Quem não arrisca não petisca.", fr: "Qui ne tente rien n'a rien.", note: "« Petiscar » = grignoter." },
    { text: "Mais vale tarde do que nunca.", fr: "Mieux vaut tard que jamais.", note: "Identique au français." },
    { text: "Dormi como uma pedra.", fr: "J'ai dormi comme une souche.", note: "Une pierre en portugais." },
    { text: "Tens macaquinhos no sótão?", fr: "Tu as une araignée au plafond ?", note: "Mot à mot : « des petits singes au grenier »." },
    { text: "Está como peixe na água.", fr: "Il/elle est comme un poisson dans l'eau.", note: "Même image qu'en français." },
    { text: "Vamos deitar água na fervura.", fr: "Calmons le jeu.", note: "Mot à mot : « verser de l'eau dans ce qui bout »." },
    { text: "Quando as galinhas tiverem dentes.", fr: "Quand les poules auront des dents.", note: "Identique au français !" },
    { text: "São unha e carne.", fr: "Ils sont inséparables.", note: "Même image qu'en espagnol : « ongle et chair »." },
    { text: "Vamos pôr os pontos nos is.", fr: "Mettons les points sur les i.", note: "Identique au français." },
    { text: "Estou teso.", fr: "Je suis fauché. (familier, Portugal)", note: "« Tesa » au féminin." },
    { text: "Fixe!", fr: "Cool ! / Génial ! (familier, Portugal)", note: "Le « cool » des Portugais — on ne l'entend pas au Brésil." },
    { text: "Ele bateu as botas.", fr: "Il a cassé sa pipe. (familier)", note: "Mot à mot : « il a cogné ses bottes »." },
    { text: "Cada macaco no seu galho.", fr: "Chacun son métier.", note: "Mot à mot : « chaque singe sur sa branche »." },
    { text: "Tive de engolir sapos.", fr: "J'ai dû avaler des couleuvres.", note: "Des crapauds en portugais, des couleuvres en français." },
  ],
};

// ---------- Citation / proverbe du jour ----------
// Le proverbe français + son équivalent le plus proche dans chaque langue
// (un vrai dicton de la langue, pas une traduction mot à mot).
export const QUOTES = [
  { fr: "C'est en forgeant qu'on devient forgeron.", byLang: { en: "Practice makes perfect.", es: "La práctica hace al maestro.", pt: "A prática leva à perfeição." } },
  { fr: "Petit à petit, l'oiseau fait son nid.", byLang: { en: "Slow and steady wins the race.", es: "Poco a poco se va lejos.", pt: "Devagar se vai ao longe." } },
  { fr: "Qui cherche trouve.", byLang: { en: "Seek and you shall find.", es: "Quien busca, encuentra.", pt: "Quem procura sempre encontra." } },
  { fr: "Mieux vaut tard que jamais.", byLang: { en: "Better late than never.", es: "Más vale tarde que nunca.", pt: "Mais vale tarde do que nunca." } },
  { fr: "L'union fait la force.", byLang: { en: "United we stand, divided we fall.", es: "La unión hace la fuerza.", pt: "A união faz a força." } },
  { fr: "Il ne faut pas vendre la peau de l'ours avant de l'avoir tué.", byLang: { en: "Don't count your chickens before they hatch.", es: "No vendas la piel del oso antes de cazarlo.", pt: "Não contes com o ovo antes de a galinha o pôr." } },
  { fr: "Qui vivra verra.", byLang: { en: "Time will tell.", es: "El tiempo lo dirá.", pt: "Quem viver verá." } },
  { fr: "L'habit ne fait pas le moine.", byLang: { en: "Don't judge a book by its cover.", es: "El hábito no hace al monje.", pt: "O hábito não faz o monge." } },
  { fr: "Tout vient à point à qui sait attendre.", byLang: { en: "Good things come to those who wait.", es: "Todo llega para quien sabe esperar.", pt: "Quem espera sempre alcança." } },
  { fr: "Vouloir, c'est pouvoir.", byLang: { en: "Where there's a will, there's a way.", es: "Querer es poder.", pt: "Querer é poder." } },
  { fr: "Rome ne s'est pas faite en un jour.", byLang: { en: "Rome wasn't built in a day.", es: "No se ganó Zamora en una hora.", pt: "Roma e Pavia não se fizeram num dia." } },
  { fr: "Loin des yeux, loin du cœur.", byLang: { en: "Out of sight, out of mind.", es: "Ojos que no ven, corazón que no siente.", pt: "Longe da vista, longe do coração." } },
  { fr: "Après la pluie, le beau temps.", byLang: { en: "Every cloud has a silver lining.", es: "Después de la tormenta siempre llega la calma.", pt: "Depois da tempestade vem a bonança." } },
  { fr: "Il faut battre le fer pendant qu'il est chaud.", byLang: { en: "Strike while the iron is hot.", es: "Al hierro caliente, batir de repente.", pt: "Malha-se o ferro enquanto está quente." } },
  { fr: "Qui ne tente rien n'a rien.", byLang: { en: "Nothing ventured, nothing gained.", es: "Quien no arriesga, no gana.", pt: "Quem não arrisca não petisca." } },
  { fr: "Les petits ruisseaux font les grandes rivières.", byLang: { en: "Every little helps.", es: "Muchos pocos hacen un mucho.", pt: "De grão em grão enche a galinha o papo." } },
  { fr: "Dis-moi qui tu fréquentes, je te dirai qui tu es.", byLang: { en: "Birds of a feather flock together.", es: "Dime con quién andas y te diré quién eres.", pt: "Diz-me com quem andas, dir-te-ei quem és." } },
  { fr: "Chaque chose en son temps.", byLang: { en: "All in good time.", es: "Cada cosa a su tiempo.", pt: "Cada coisa a seu tempo." } },
  { fr: "Il n'y a pas de fumée sans feu.", byLang: { en: "There's no smoke without fire.", es: "Cuando el río suena, agua lleva.", pt: "Não há fumo sem fogo." } },
  { fr: "La nuit porte conseil.", byLang: { en: "Sleep on it.", es: "Consúltalo con la almohada.", pt: "A noite é boa conselheira." } },
  { fr: "Aide-toi, le ciel t'aidera.", byLang: { en: "God helps those who help themselves.", es: "Ayúdate y Dios te ayudará.", pt: "Ajuda-te a ti mesmo e Deus te ajudará." } },
  { fr: "Le temps, c'est de l'argent.", byLang: { en: "Time is money.", es: "El tiempo es oro.", pt: "Tempo é dinheiro." } },
  { fr: "Pierre qui roule n'amasse pas mousse.", byLang: { en: "A rolling stone gathers no moss.", es: "Piedra movediza no cría musgo.", pt: "Pedra que rola não cria musgo." } },
  { fr: "Mieux vaut prévenir que guérir.", byLang: { en: "Prevention is better than cure.", es: "Más vale prevenir que curar.", pt: "Mais vale prevenir do que remediar." } },
  { fr: "Il n'est jamais trop tard pour bien faire.", byLang: { en: "It's never too late to learn.", es: "Nunca es tarde para aprender.", pt: "Nunca é tarde para aprender." } },
  { fr: "Qui sème le vent récolte la tempête.", byLang: { en: "You reap what you sow.", es: "Quien siembra vientos recoge tempestades.", pt: "Quem semeia ventos colhe tempestades." } },
  { fr: "Il ne faut pas mettre tous ses œufs dans le même panier.", byLang: { en: "Don't put all your eggs in one basket.", es: "No pongas todos los huevos en la misma cesta.", pt: "Não ponhas todos os ovos no mesmo cesto." } },
  { fr: "Autres pays, autres mœurs.", byLang: { en: "When in Rome, do as the Romans do.", es: "Donde fueres, haz lo que vieres.", pt: "Em Roma, sê romano." } },
  { fr: "Qui va lentement va sûrement.", byLang: { en: "Slow but sure.", es: "Despacio y buena letra.", pt: "Devagar e sempre." } },
  { fr: "Les voyages forment la jeunesse.", byLang: { en: "Travel broadens the mind.", es: "Viajar abre la mente.", pt: "Viajar abre horizontes." } },
  { fr: "Avoir une autre langue, c'est posséder une deuxième âme. (attribué à Charlemagne)", byLang: { en: "To have another language is to possess a second soul.", es: "Tener otro idioma es poseer una segunda alma.", pt: "Ter outra língua é possuir uma segunda alma." } },
];

// ---------- Vidéo du jour (change tous les 2 jours) ----------
export const VIDEOS = {
  en: [
    { id: "Yj4JSvVUHkg", title: "Daily English Conversation for Beginners (A1-A2)" },
    { id: "oolFQSzyHSg", title: "English Listening Practice for Beginners — Easy Conversations (A1-A2)" },
    { id: "mW6eyP36iFo", title: "Slow English — Learn English with Grandpa (A1-A2)" },
    { id: "eEgFw1A3l3o", title: "Slow Beginner English Conversation (A1-A2)" },
    { id: "7cekKvQo8QM", title: "Slow English Listening & Shadowing for Beginners (A1-A2)" },
    { id: "kVNYOW3eMk4", title: "Slow English for Beginners (A1 Listening Practice)" },
    { id: "gOMypAhVaXE", title: "A2 English Listening Practice — Travel" },
    { id: "FtqbKDuS_ew", title: "A2 English Listening Practice — Good English Learners" },
    { id: "8WyTvwun0HM", title: "My House in English — A2 Story" },
    { id: "Z-GfkjPXCwc", title: "A2 English Listening Practice — Learning" },
    { id: "9YcZ_gwKBIQ", title: "Learn English Through Story — Taking Public Transport (A2-B1)" },
    { id: "-8B1xI7EsTM", title: "My Summer Holiday — A2 English Listening Practice" },
    { id: "Wfe6qhyikPM", title: "Common Everyday English Phrases — British Pronunciation" },
    { id: "65iWtWqWmgY", title: "Pronunciation Practice — Let's Learn English, Lesson 1" },
    { id: "SLHUOHPcndM", title: "200 English Phrases for Beginners — Slow Pronunciation" },
  ],
  es: [
    { id: "_fR4FpsN0FE", title: "Conversaciones para aprender español — Nivel A1 (1)" },
    { id: "Oqqi1kIvn04", title: "Preguntas y respuestas en español para principiantes (A1)" },
    { id: "ae7sC17HAuk", title: "Presentarse en español — Nivel A1" },
    { id: "6zhr7LMwoc4", title: "Primera clase de español — Nivel A1" },
    { id: "dYmx4A05JOk", title: "50 Spanish Conversations for Beginners (A1-A2)" },
    { id: "dbsjSihlBCs", title: "Spanish Conversation Practice — Slow & Clear" },
    { id: "F-l-XpFdsfI", title: "Spanish Comprehensible Input for Beginners (A1-A2) #1" },
    { id: "NyT5S_PQfpc", title: "Superbeginner Spanish — Comprehensible Input Story" },
    { id: "p5ZHNWifka4", title: "Spanish for Beginners — \"Lost in NYC\"" },
    { id: "ZoyK9Nkf9y0", title: "Spanish Vlog for Beginners — Comprehensible Input" },
    { id: "Y9Dpa4z5XlA", title: "A Slow Summer Vlog for Learning Spanish" },
    { id: "qUx1PRb5NW0", title: "Learn Spanish Naturally — Vlog (Comprehensible Input)" },
    { id: "daq73wd72js", title: "Real Spanish Situations for Beginners" },
    { id: "1QOe4rue770", title: "Beginner Spanish Comprehensible Input (Easy Spanish)" },
    { id: "0Y0JS7lE9xY", title: "Conversaciones para aprender español — Diálogos" },
  ],
  pt: [
    { id: "nn-oPA6QmUk", title: "Diálogo para iniciantes em português europeu (A1)" },
    { id: "4KBxGeyzSgU", title: "Diálogo para iniciantes — Português europeu" },
    { id: "vyNuuZzzJ5s", title: "Português de Portugal — Iniciação (A1), 1.º vídeo" },
    { id: "p5ssflvpE04", title: "Português europeu para iniciantes — Aula 1" },
    { id: "xklVtevjxYU", title: "Apresentação A1 — Português europeu, Aula 1" },
    { id: "rnu4pGAP7rc", title: "Formas de tratamento — Português europeu e do Brasil (A1)" },
    { id: "diS6cVpRMQ8", title: "A Maria vai ao mercado — European Portuguese Listening (A0)" },
    { id: "EABbI2HQ9YA", title: "A1/A2 European Portuguese Listening — Connected Speech" },
    { id: "BMNSZdGYgus", title: "Portuguese for Absolute Beginners — O supermercado" },
    { id: "Fy4lM_KlnME", title: "Portuguese for Absolute Beginners — As estações" },
    { id: "hpVtXzUZFG8", title: "Portuguese for Absolute Beginners — O intervalo" },
    { id: "Pyc6nMErlsY", title: "Portuguese for Absolute Beginners — Ainda é cedo" },
    { id: "oSsOW2UyD_g", title: "Learn European Portuguese — Lesson 8 (A1-A2)" },
    { id: "cN1KWXXSFOw", title: "Listening Practice in European Portuguese" },
    { id: "eX_TTO0KMsk", title: "European Portuguese — Improve Your Listening Skills" },
  ],
};
