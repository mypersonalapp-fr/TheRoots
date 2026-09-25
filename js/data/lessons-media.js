// The Roots — Musique & Ciné (chansons formel/informel, résumés de films, études de cas) par leçon
// Fichier de DONNÉES chargé par lessons.html (balise <script src>). Ne contient que du contenu
// pédagogique : window.LESSONS_MEDIA[N] = {…} où N est le numéro de leçon du moteur.
window.LESSONS_MEDIA = window.LESSONS_MEDIA || {};
(function (LESSONS_MEDIA) {
  LESSONS_MEDIA[27] = {
    type: "song",
    title: "Golden Shackles",
    theme: "L'école, le travail et la liberté",
    intro: "Une même chanson écrite deux fois : une version informelle (anglais parlé, contractions, argot) et une version formelle, en anglais littéraire et poétique, avec quelques mots archaïques. Observe comment la même idée change de ton selon le registre.",
    versions: [
      { key: "informal", label: "Version informelle", sections: [
        { label: "Verse 1", lines: [
          "Checked all the boxes, followed every rule,",
          "Sat down and did our time in public school.",
          "They fed us facts to shape us into cogs,",
          "Just walking paperwork in heavy slogs.",
          "Got through the classes, learned to play the game,",
          "Memorized numbers, dates, and empty names."
        ] },
        { label: "Chorus", lines: [
          "What's the whole point of running in this race,",
          "When every finish line feels like a space",
          "That locks you in and throws away the key?",
          "Work forty hours just to pay a fee.",
          "If education's just a training ground",
          "To keep us tied down and spin us around—",
          "Tell me where freedom's hiding out today,",
          "Or did it pack its bags and walk away?"
        ] },
        { label: "Verse 2", lines: [
          "Met up with mates behind the bleacher wall,",
          "Swore we'd break out, that we'd outlast it all.",
          "Shared cheap mistakes and laughed through heavy nights,",
          "Chasing the glow of distant city lights.",
          "But now my friends are punching clocks at nine,",
          "Just trying hard to toe the company line."
        ] },
        { label: "Chorus", lines: [
          "What's the whole point of running in this race,",
          "When every finish line feels like a space",
          "That locks you in and throws away the key?",
          "Work forty hours just to pay a fee.",
          "If education's just a training ground",
          "To keep us tied down and spin us around—",
          "Tell me where freedom's hiding out today,",
          "Or did it pack its bags and walk away?"
        ] },
        { label: "Outro", lines: [
          "Yeah, we grew up and made some solid friends,",
          "Got smart, but look at where the journey ends.",
          "Trapped in a routine that we never chose,",
          "Dancing the same old steps in heavy shoes."
        ] }
      ] },
      { key: "formal", label: "Version formelle (littéraire)", sections: [
        { label: "Verse 1", lines: [
          "We trace the lines of charted destiny,",
          "An architecture built for you and me.",
          "They taught us history within the hall,",
          "To memorize the rise, accept the fall.",
          "We gathered knowledge, currency of mind,",
          "To leave our raw, untutored youth behind."
        ] },
        { label: "Chorus", lines: [
          "What is the purpose of the path we tread,",
          "The heavy books beneath the table spread?",
          "If every graduation yields a cage,",
          "And golden shackles bind us to the page,",
          "If labor fills the hours of our breath,",
          "From early morning until quiet death—",
          "Tell me, at last, where doth true freedom lie,",
          "Beneath the vast and indifferent sky?"
        ] },
        { label: "Verse 2", lines: [
          "We forged alliances in corridors,",
          "Shared whispered dreams behind gymnasium doors.",
          "True fellowship, a beacon in the dark,",
          "A steady flame, a bright, enduring spark.",
          "Yet even comrades in the trenches stand,",
          "Bound to the wheel by some invisible hand."
        ] },
        { label: "Chorus", lines: [
          "What is the purpose of the path we tread,",
          "The heavy books beneath the table spread?",
          "If every graduation yields a cage,",
          "And golden shackles bind us to the page,",
          "If labor fills the hours of our breath,",
          "From early morning until quiet death—",
          "Tell me, at last, where doth true freedom lie,",
          "Beneath the vast and indifferent sky?"
        ] },
        { label: "Outro", lines: [
          "We learned, we worked, we bonded, and we grew,",
          "To find the sky is far less grand and blue.",
          "Imprisoned by the systems we obeyed,",
          "Victims of maps that other hands have made."
        ] }
      ] }
    ],
    pairs: [
      { informal: "Checked all the boxes, followed every rule", formal: "We trace the lines of charted destiny", fr: "L'informel supprime le sujet (« Checked » au lieu de « We checked ») et utilise une expression toute faite du quotidien (check the boxes = cocher toutes les cases). Le formel garde le sujet « We » et choisit une image abstraite et soutenue (charted destiny = un destin tracé d'avance)." },
      { informal: "Sat down and did our time in public school", formal: "They taught us history within the hall", fr: "« Do time » est de l'argot : « faire sa peine » en prison. L'école est comparée à une prison, avec humour. Le formel reste neutre et emploie « within » (dans, soutenu) au lieu de « in »." },
      { informal: "They fed us facts to shape us into cogs", formal: "We gathered knowledge, currency of mind", fr: "Informel : image concrète et un peu méprisante (on nous a « gavés » de faits pour faire de nous des rouages). Formel : image abstraite et valorisante (le savoir est une « monnaie de l'esprit »)." },
      { informal: "What's the whole point of running in this race", formal: "What is the purpose of the path we tread", fr: "Contraction « What's » contre forme pleine « What is ». « The whole point » (tout l'intérêt) est parlé ; « the purpose » est plus soutenu. « Tread » (fouler un chemin) est un verbe littéraire." },
      { informal: "Work forty hours just to pay a fee", formal: "If labor fills the hours of our breath", fr: "L'informel est concret et chiffré (40 heures, une facture) avec « just » (juste, seulement), très oral. Le formel utilise « labor » (le labeur, mot soutenu) et une métaphore poétique : les heures de notre souffle = notre vie." },
      { informal: "Tell me where freedom's hiding out today", formal: "Tell me, at last, where doth true freedom lie", fr: "Informel : contraction « freedom's » et phrasal verb familier « hide out » (se planquer). Formel : « doth » est de l'ANCIEN anglais (= does, style Shakespeare) — joli en poésie, mais à ne plus utiliser aujourd'hui. En anglais moderne : « where does true freedom lie? »." },
      { informal: "Or did it pack its bags and walk away?", formal: "Beneath the vast and indifferent sky?", fr: "L'informel personnifie la liberté avec une image du quotidien (faire ses valises et partir). Le formel élargit vers une image grandiose et philosophique (le ciel immense et indifférent), avec « beneath » (sous, soutenu) au lieu de « under »." },
      { informal: "Met up with mates behind the bleacher wall", formal: "We forged alliances in corridors", fr: "Sujet omis + « meet up » (se retrouver, familier) + « mates » (les potes, anglais britannique familier). Le formel dit « forged alliances » (forger des alliances), vocabulaire noble, presque militaire." },
      { informal: "But now my friends are punching clocks at nine", formal: "Bound to the wheel by some invisible hand", fr: "« Punch the clock » = pointer au travail (expression familière). Le formel exprime la même idée par une métaphore littéraire : attachés à la roue par une main invisible." },
      { informal: "Yeah, we grew up and made some solid friends", formal: "We learned, we worked, we bonded, and we grew", fr: "« Yeah » et « solid friends » (des amis fiables, familier) marquent l'oral. Le formel utilise une énumération rythmée (we learned, we worked…) typique du style écrit et poétique." },
      { informal: "Trapped in a routine that we never chose", formal: "Imprisoned by the systems we obeyed", fr: "« Trapped » (coincé) est courant ; « imprisoned » (emprisonné), d'origine latine, est plus soutenu. De façon générale, le registre formel préfère les mots d'origine latine/française." }
    ],
    gloss: [
      { en: "to check the boxes", fr: "cocher les cases, faire tout ce qu'on attend de vous (familier)" },
      { en: "to do time", fr: "purger une peine de prison (argot)" },
      { en: "a cog", fr: "un rouage (d'une machine)" },
      { en: "a slog", fr: "une corvée longue et pénible (familier)" },
      { en: "mates", fr: "les potes, les copains (familier, surtout britannique)" },
      { en: "to punch the clock", fr: "pointer au travail (familier)" },
      { en: "to toe the line", fr: "rentrer dans le rang, obéir aux règles" },
      { en: "charted", fr: "cartographié, tracé d'avance (soutenu)" },
      { en: "untutored", fr: "sans instruction, inculte (littéraire)" },
      { en: "to tread (trod, trodden)", fr: "fouler, marcher sur (littéraire)" },
      { en: "to yield", fr: "produire, donner (soutenu)" },
      { en: "shackles", fr: "des chaînes, des fers" },
      { en: "labor (US) / labour (UK)", fr: "le labeur, le travail pénible (soutenu)" },
      { en: "doth", fr: "ancienne forme de « does » (archaïque, à ne plus utiliser)" },
      { en: "fellowship", fr: "la camaraderie, la fraternité (soutenu)" },
      { en: "a beacon", fr: "un phare, un signal lumineux" }
    ],
    questions: [
      { q: "Quel est le message principal de la chanson ?", opts: ["L'école prépare parfaitement au bonheur", "L'école et le travail peuvent enfermer, et la liberté semble difficile à trouver", "Il faut quitter l'école le plus tôt possible"], correct: 1, why: "Les deux versions décrivent un parcours (école, diplôme, travail) qui finit par ressembler à une cage : « a cage », « golden shackles », « trapped in a routine »." },
      { q: "Dans « Sat down and did our time in public school », pourquoi « did our time » est-il ironique ?", opts: ["C'est une expression qui signifie « purger une peine de prison »", "Cela veut dire « arriver à l'heure »", "C'est une expression formelle pour « étudier »"], correct: 0, why: "« To do time » est de l'argot pour « faire de la prison » : l'école est comparée avec humour à une prison." },
      { q: "Que faut-il retenir du mot « doth » dans la version formelle ?", opts: ["C'est de l'anglais moderne soutenu, à utiliser dans un e-mail professionnel", "C'est une faute d'orthographe", "C'est une forme ancienne de « does », à réserver à la poésie : on ne l'utilise plus aujourd'hui"], correct: 2, why: "« Doth » appartient à l'anglais ancien (époque de Shakespeare). Aujourd'hui on dit « where does true freedom lie? »." },
      { q: "Quel est l'équivalent formel de « Met up with mates behind the bleacher wall » ?", opts: ["We forged alliances in corridors", "They taught us history within the hall", "We trace the lines of charted destiny"], correct: 0, why: "Les deux vers parlent de l'amitié à l'école : « mates » (familier) devient « alliances » (soutenu), « met up » devient « forged »." },
      { q: "Quelle caractéristique est typique de la version INFORMELLE ?", opts: ["Des mots rares d'origine latine (labor, fellowship)", "Des sujets omis et des contractions (Checked all…, What's, freedom's)", "Des inversions poétiques (beneath the table spread)"], correct: 1, why: "L'anglais parlé supprime souvent le sujet et contracte les verbes. Les mots latins et les inversions sont typiques du registre littéraire." }
    ]
  };

  LESSONS_MEDIA[28] = {
    type: "song",
    title: "One Split Second",
    theme: "Des vacances à la mer qui tournent au drame",
    intro: "Deux versions de la même histoire : des vacances joyeuses au bord de la mer qui basculent en un instant. La version informelle parle comme un jeune d'aujourd'hui ; la version formelle utilise un anglais littéraire et poétique, avec des tournures anciennes. Compare les mots choisis pour dire la même chose.",
    versions: [
      { key: "informal", label: "Version informelle", sections: [
        { label: "Verse 1", lines: [
          "Packed up our bags and flew across the sea,",
          "Chasing the sunshine, wild and feeling free.",
          "Hit up the beach with cold drinks in our hands,",
          "Leaving our worries buried in the sands.",
          "No clocks, no rules, just music through the air,",
          "With sand-soaked towels and nary any care."
        ] },
        { label: "Chorus", lines: [
          "We had it all, dancing in the light,",
          "Thinking the good times never hit midnight.",
          "The sky was clear, the ocean looked so sweet,",
          "With rhythm pulsing right beneath our feet.",
          "Who knew a second could erase it all,",
          "And turn a paradise into a wall?"
        ] },
        { label: "Verse 2", lines: [
          "The party peaked, the bass was thumping loud,",
          "We raised our glasses, laughing with the crowd.",
          "Just skin and bone and moments made to last,",
          "Until the present shattered on the past.",
          "One sudden scream split right through the air,",
          "And everything we knew just wasn't there."
        ] },
        { label: "Chorus", lines: [
          "We had it all, dancing in the light,",
          "Thinking the good times never hit midnight.",
          "The sky was clear, the ocean looked so sweet,",
          "With rhythm pulsing right beneath our feet.",
          "Who knew a second could erase it all,",
          "And turn a paradise into a wall?"
        ] },
        { label: "Outro", lines: [
          "Sun's still shining, ocean looks the same,",
          "Just quiet now, nobody calls our name.",
          "One split second changed the whole routine,",
          "And ripped the color right out of the scene."
        ] }
      ] },
      { key: "formal", label: "Version formelle (littéraire)", sections: [
        { label: "Verse 1", lines: [
          "We sought the coast where azure waters gleam,",
          "And chased the sunlight in a waking dream.",
          "A brief escape from duty's heavy chain,",
          "To wash away the memory of pain.",
          "We traveled far across the foreign shore,",
          "And asked for nothing, neither less nor more."
        ] },
        { label: "Chorus", lines: [
          "In golden hours of laughter and of song,",
          "We deemed that nothing could approach us wrong.",
          "The tide was gentle and the breeze was mild,",
          "While fortune favored every reckless child.",
          "Yet joy is fragile, balanced on a knife,",
          "And shadows fall across the brightest life."
        ] },
        { label: "Verse 2", lines: [
          "The music played, the celebration soared,",
          "With endless wine upon the table poured.",
          "We danced beneath the constellations' light,",
          "Unmindful of the closing of the night.",
          "Then, in a fraction of a fleeting breath,",
          "The festive rhythm turned the face of death."
        ] },
        { label: "Chorus", lines: [
          "In golden hours of laughter and of song,",
          "We deemed that nothing could approach us wrong.",
          "The tide was gentle and the breeze was mild,",
          "While fortune favored every reckless child.",
          "Yet joy is fragile, balanced on a knife,",
          "And shadows fall across the brightest life."
        ] },
        { label: "Outro", lines: [
          "A sudden wave, a cry against the deep,",
          "And all our vibrant dreams are put to sleep.",
          "The sun remains, indifferent and bright,",
          "While we are swallowed by the endless night."
        ] }
      ] }
    ],
    pairs: [
      { informal: "Packed up our bags and flew across the sea", formal: "We traveled far across the foreign shore", fr: "Informel : sujet omis (« Packed » au lieu de « We packed ») et phrasal verb du quotidien « pack up ». Formel : sujet exprimé et verbe neutre « traveled far » (voyager loin), plus posé." },
      { informal: "Hit up the beach with cold drinks in our hands", formal: "We sought the coast where azure waters gleam", fr: "« Hit up » est de l'argot (surtout américain) : « aller dans un lieu, faire un tour à ». Le formel emploie « sought » (passé de « seek », chercher, soutenu), « azure » (azur, poétique) et « gleam » (scintiller)." },
      { informal: "Leaving our worries buried in the sands", formal: "To wash away the memory of pain", fr: "Les deux vers disent « oublier ses soucis ». L'informel utilise le mot courant « worries » ; le formel parle plus gravement de « pain » (la douleur) avec l'image de l'eau qui lave." },
      { informal: "With sand-soaked towels and nary any care", formal: "And asked for nothing, neither less nor more", fr: "Attention : « nary » (= pas un seul) est un mot vieilli ou dialectal, qu'on trouve surtout dans l'anglais rural ou en poésie ; on dirait aujourd'hui « without a care ». Le formel utilise la structure soignée « neither… nor » (ni… ni)." },
      { informal: "Thinking the good times never hit midnight", formal: "We deemed that nothing could approach us wrong", fr: "Informel : sujet omis, « the good times » (les bons moments, expression orale), « hit » (atteindre, familier). Formel : « deemed » (estimer, juger), verbe très soutenu, à la place de « thought »." },
      { informal: "The sky was clear, the ocean looked so sweet", formal: "The tide was gentle and the breeze was mild", fr: "« So sweet » est une intensification typique de l'oral (trop beau, trop mignon). Le formel décrit la nature avec des adjectifs plus précis et mesurés : « gentle » (doux), « mild » (tiède, clément)." },
      { informal: "The party peaked, the bass was thumping loud", formal: "The music played, the celebration soared", fr: "« Party » et « bass thumping » (la basse qui cogne) sont des mots de soirée d'aujourd'hui. Le formel choisit « celebration » (fête, plus soutenu) et « soared » (s'envoler), image poétique." },
      { informal: "We raised our glasses, laughing with the crowd", formal: "With endless wine upon the table poured", fr: "Le formel utilise une inversion poétique : « upon the table poured » au lieu de l'ordre normal « poured upon the table ». « Upon » est une version littéraire de « on »." },
      { informal: "One sudden scream split right through the air", formal: "A sudden wave, a cry against the deep", fr: "« Scream » (hurlement) est brut et direct ; « cry » (cri) est plus retenu. « The deep » est un mot poétique pour désigner la mer profonde. « Right through » (en plein à travers) est une intensification orale." },
      { informal: "Sun's still shining, ocean looks the same", formal: "The sun remains, indifferent and bright", fr: "Informel : article et verbe réduits (« Sun's » = « The sun is »), comme à l'oral. Formel : phrase complète et verbe « remains » (demeurer), plus soutenu que « is still »." },
      { informal: "Who knew a second could erase it all", formal: "Then, in a fraction of a fleeting breath", fr: "« Who knew…? » est une question rhétorique très orale (qui aurait cru… ?). Le formel dit la même idée de rapidité avec une image littéraire : « une fraction d'un souffle fugace »." }
    ],
    gloss: [
      { en: "to hit up (a place)", fr: "aller à, faire un tour à (argot, surtout US)" },
      { en: "nary", fr: "pas un seul, aucun (vieilli / dialectal)" },
      { en: "sand-soaked", fr: "plein de sable, imprégné de sable" },
      { en: "to peak", fr: "atteindre son point culminant" },
      { en: "to thump", fr: "cogner, résonner sourdement" },
      { en: "to shatter", fr: "voler en éclats" },
      { en: "to seek (sought, sought)", fr: "chercher (soutenu)" },
      { en: "azure", fr: "azur, bleu ciel (poétique)" },
      { en: "to gleam", fr: "briller, scintiller" },
      { en: "to deem", fr: "estimer, juger (très soutenu)" },
      { en: "the tide", fr: "la marée" },
      { en: "reckless", fr: "imprudent, insouciant" },
      { en: "unmindful of", fr: "sans se soucier de, inattentif à (littéraire)" },
      { en: "fleeting", fr: "fugace, éphémère" },
      { en: "the deep", fr: "les profondeurs, la mer (poétique)" },
      { en: "to be swallowed by", fr: "être englouti par" }
    ],
    questions: [
      { q: "Comment évolue l'ambiance de la chanson ?", opts: ["Elle reste joyeuse du début à la fin", "Elle commence par la joie des vacances puis bascule soudain dans le drame", "Elle commence triste puis devient joyeuse"], correct: 1, why: "Les couplets et le refrain décrivent la fête et l'insouciance, puis « One sudden scream » / « A sudden wave » marquent un basculement brutal." },
      { q: "Avec pudeur, l'Outro de la version formelle (« A sudden wave, a cry against the deep ») évoque un drame. Lequel ?", opts: ["Une noyade, emportée par une vague", "Un vol de bagages", "Une dispute entre amis"], correct: 0, why: "La vague soudaine, le cri face à « the deep » (la mer) et « swallowed by the endless night » suggèrent une noyade. La chanson ne donne aucun détail : elle parle surtout du choc et du silence qui suivent." },
      { q: "Que signifie « Hit up the beach » ?", opts: ["Frapper la plage", "Aller à la plage (argot)", "Quitter la plage"], correct: 1, why: "« To hit up a place » est de l'argot pour « aller quelque part ». Rien à voir avec « frapper » ici." },
      { q: "Que faut-il savoir sur « nary » (« nary any care ») ?", opts: ["C'est un mot vieilli ou dialectal qui veut dire « pas un seul » ; aujourd'hui on dit plutôt « without a care »", "C'est de l'argot très récent des réseaux sociaux", "C'est une faute de frappe pour « many »"], correct: 0, why: "Même dans la version informelle, « nary » est un mot ancien ou régional. À comprendre, mais à éviter dans l'anglais de tous les jours." },
      { q: "Quel mot de la version formelle est un équivalent soutenu de « thought » (pensions) ?", opts: ["gleam", "deemed", "soared"], correct: 1, why: "« We deemed that… » = « nous estimions que… ». « Deem » est très soutenu ; à l'oral on dirait « we thought »." }
    ]
  };

  LESSONS_MEDIA[29] = {
    type: "film",
    title: "Avatar", year: 2009,
    intro: "Avatar est un film de science-fiction réalisé par James Cameron. Tu vas lire un résumé original en anglais (niveau B1), écrit au passé : repère les temps du récit (prétérit, past continuous, past perfect) et le vocabulaire de la nature et du conflit.",
    summary: [
      "The story takes place in the year 2154. Jake Sully is a former Marine who cannot use his legs after an injury. His twin brother, a scientist, has recently died, and Jake is asked to take his place in a special programme on Pandora, a green and beautiful moon far from Earth.",
      "A human company is on Pandora because the ground contains a very valuable mineral. However, Pandora is also the home of the Na'vi, tall blue people who live in harmony with the forest. The humans cannot breathe the air there, so scientists have created avatars: Na'vi bodies that a human can control with his mind while he is asleep in a machine.",
      "Jake's avatar has the same DNA as his brother's, so he can use it. The programme is led by Dr Grace Augustine, a scientist who respects the Na'vi. At the same time, Colonel Quaritch, the head of security, asks Jake to secretly collect information about the Na'vi. In return, he promises that Jake will get an operation to walk again.",
      "One day in the forest, Jake gets lost and is attacked by wild animals. A young Na'vi woman called Neytiri saves him. Her clan, the Omaticaya, decide to teach him their language and their way of life. Little by little, Jake learns to hunt, to ride a flying creature and to understand the deep connection between the Na'vi and nature. He and Neytiri fall in love.",
      "The problem is that the Omaticaya live in a giant tree, called Hometree, which stands on top of a large amount of the precious mineral. The company wants the Na'vi to leave. Jake tries to find a peaceful solution, but he fails. The humans attack, and Hometree is destroyed. Many Na'vi lose their home, and the clan no longer trusts Jake.",
      "Jake now understands that he must choose a side. He decides to help the Na'vi. To win back their trust, he tames the biggest and most dangerous flying creature on Pandora, something very few Na'vi have ever done. Grace is badly hurt during the escape, and in spite of the Na'vi's efforts to save her, she dies.",
      "Jake brings together the different Na'vi clans to defend their land. The final battle is very hard, but the animals of Pandora join the fight and help the Na'vi. In the end, Colonel Quaritch is defeated and most of the humans are forced to go back to Earth.",
      "At the end of the film, Jake decides to stay on Pandora forever. Thanks to a ceremony at a sacred tree, he leaves his human body and becomes a Na'vi for good, beginning a new life with Neytiri and her people."
    ],
    vocab: [
      { en: "a former Marine", fr: "un ancien soldat de l'infanterie de marine" },
      { en: "an injury", fr: "une blessure" },
      { en: "a twin brother", fr: "un frère jumeau" },
      { en: "a moon", fr: "une lune (satellite)" },
      { en: "valuable", fr: "précieux, qui a beaucoup de valeur" },
      { en: "in harmony with", fr: "en harmonie avec" },
      { en: "to take someone's place", fr: "prendre la place de quelqu'un" },
      { en: "in return", fr: "en échange" },
      { en: "a clan", fr: "un clan, une tribu" },
      { en: "to tame", fr: "apprivoiser, dompter" },
      { en: "to win back someone's trust", fr: "regagner la confiance de quelqu'un" },
      { en: "to choose a side", fr: "choisir son camp" },
      { en: "to defeat", fr: "vaincre" },
      { en: "for good", fr: "pour de bon, définitivement" }
    ],
    questions: [
      { q: "Pourquoi les humains sont-ils sur Pandora ?", opts: ["Pour protéger les Na'vi", "Pour exploiter un minerai très précieux", "Pour fuir une guerre sur Terre"], correct: 1, why: "« A human company is on Pandora because the ground contains a very valuable mineral. »" },
      { q: "Qu'est-ce qu'un « avatar » dans le film ?", opts: ["Un corps de Na'vi contrôlé par l'esprit d'un humain", "Un robot de combat", "Un animal volant"], correct: 0, why: "« Na'vi bodies that a human can control with his mind while he is asleep in a machine. »" },
      { q: "Que promet le colonel Quaritch à Jake ?", opts: ["De le renvoyer sur Terre", "De lui donner de l'argent", "Une opération pour qu'il puisse remarcher"], correct: 2, why: "« In return, he promises that Jake will get an operation to walk again. » (in return = en échange)." },
      { q: "Pourquoi le clan de Neytiri ne fait-il plus confiance à Jake après l'attaque ?", opts: ["Parce que Jake a tué un Na'vi", "Parce que Hometree a été détruit et que Jake travaillait avec les humains", "Parce que Jake a quitté Pandora"], correct: 1, why: "Jake n'a pas réussi à empêcher l'attaque ; après la destruction de Hometree, « the clan no longer trusts Jake »." },
      { q: "Que signifie « Jake becomes a Na'vi for good » ?", opts: ["Jake devient un Na'vi pour faire le bien", "Jake devient un Na'vi pour un moment", "Jake devient un Na'vi définitivement"], correct: 2, why: "« For good » est une expression qui signifie « pour de bon, définitivement » — un faux ami classique !" }
    ]
  };

  LESSONS_MEDIA[30] = {
    type: "film",
    title: "Taken", year: 2008,
    intro: "Taken est un thriller d'action français réalisé par Pierre Morel, avec Liam Neeson. Tu vas lire un résumé original en anglais (niveau B1), écrit au passé : observe l'enchaînement des actions et les mots de la course contre la montre.",
    notice: "Ce film raconte l'enlèvement d'une jeune fille par un réseau criminel et contient des scènes de violence. Le résumé ci-dessous reste sobre et ne donne aucun détail violent.",
    summary: [
      "Bryan Mills is a former secret agent who worked for the American government for many years. Now retired, he has moved to Los Angeles to be closer to his seventeen-year-old daughter, Kim. She lives with her mother, Lenore, who is Bryan's ex-wife, and with her rich new husband.",
      "Bryan feels that he missed a lot of Kim's childhood because of his job, and he wants to rebuild their relationship. One day, Kim asks for his permission to travel to Paris with her friend Amanda. Bryan is worried and does not want to say yes, but in the end he agrees.",
      "As soon as the two girls arrive in Paris, they meet a friendly young man at the airport. In fact, he works for a criminal gang. That same afternoon, while Kim is talking to her father on the phone, men break into the apartment and take the girls away.",
      "Bryan stays calm and uses his experience. He listens carefully and tries to gather as many clues as possible. A former colleague explains that this gang is very dangerous and that Bryan has only about four days to find his daughter before she disappears for ever.",
      "Bryan flies to Paris immediately. He contacts Jean-Claude, an old friend who works for the French intelligence services. Jean-Claude says he wants to help, but Bryan soon discovers that his friend is not honest and is protecting the criminals.",
      "Following one clue after another, Bryan works his way up the criminal network. He is alone, the police do not trust him, and time is running out. Sadly, he learns that Amanda did not survive.",
      "At last, Bryan finds out that Kim is being held on a private boat that belongs to a very rich man. He manages to get on board and rescues his daughter just in time.",
      "Bryan and Kim fly back to the United States together. At the airport, Lenore welcomes her daughter with tears of joy. As a surprise, Bryan introduces Kim to a famous singer who offers to help her with her dream of becoming a singer."
    ],
    vocab: [
      { en: "a former secret agent", fr: "un ancien agent secret" },
      { en: "retired", fr: "à la retraite" },
      { en: "an ex-wife", fr: "une ex-femme" },
      { en: "to rebuild a relationship", fr: "reconstruire une relation" },
      { en: "to agree", fr: "accepter, être d'accord" },
      { en: "a gang", fr: "un gang, une bande criminelle" },
      { en: "to break into", fr: "entrer par effraction" },
      { en: "a clue", fr: "un indice" },
      { en: "the intelligence services", fr: "les services de renseignement" },
      { en: "time is running out", fr: "le temps presse" },
      { en: "to be held", fr: "être retenu (prisonnier)" },
      { en: "to rescue", fr: "sauver, secourir" },
      { en: "just in time", fr: "juste à temps" }
    ],
    questions: [
      { q: "Pourquoi Bryan a-t-il déménagé à Los Angeles ?", opts: ["Pour un nouveau travail", "Pour être plus proche de sa fille", "Pour se remarier"], correct: 1, why: "« He has moved to Los Angeles to be closer to his seventeen-year-old daughter, Kim. »" },
      { q: "Comment Bryan réagit-il quand Kim demande à partir à Paris ?", opts: ["Il est inquiet, hésite, puis finit par accepter", "Il refuse catégoriquement", "Il décide de partir avec elle"], correct: 0, why: "« Bryan is worried and does not want to say yes, but in the end he agrees. »" },
      { q: "Que se passe-t-il pendant que Kim est au téléphone avec son père ?", opts: ["Elle lui annonce qu'elle rentre plus tôt", "Des hommes entrent dans l'appartement et emmènent les deux filles", "Elle perd son passeport"], correct: 1, why: "« While Kim is talking to her father on the phone, men break into the apartment and take the girls away. » (past continuous + prétérit : action en cours interrompue)." },
      { q: "Qui est Jean-Claude ?", opts: ["Le frère de Bryan", "Le chef du gang", "Un ami de Bryan, membre des services de renseignement français, qui n'est pas honnête"], correct: 2, why: "« An old friend who works for the French intelligence services… Bryan soon discovers that his friend is not honest. »" },
      { q: "Que signifie l'expression « time is running out » ?", opts: ["Le temps presse, il reste peu de temps", "Il est temps de courir", "Le temps est mauvais"], correct: 0, why: "« Time is running out » = le temps est compté. Bryan n'a que quelques jours pour retrouver sa fille." }
    ]
  };

  // ---------- B1.6 (leçon 32) — Étude de cas fournie par Ashley (25/09), traduite en anglais ----------
  LESSONS_MEDIA[32] = {
    type: "case",
    title: "Case Study: The Ultimate Travel Crisis",
    intro: "Une famille, 30 jours avant le départ, et une avalanche de problèmes. Lis l'étude de cas en anglais, écoute chaque partie, puis réponds aux questions. Observe comment on présente un problème, on l'analyse, puis on propose des solutions étape par étape (futur, obligation, conseil, conditionnel).",
    notice: "Scénario fictif à but pédagogique : les démarches (France) et les conseils médicaux sont simplifiés et ne remplacent pas l'avis d'un professionnel.",
    sections: [
      { heading: "The context and the problem",
        paragraphs: [
          "The Martin family — two parents, Marc and Sophie, and two children, Lucas, 8, and Chloé, 5 — are about to go on a holiday they won't forget any time soon… but for all the wrong reasons.",
          "They are leaving in exactly 30 days.",
          "Just when they thought they could relax, an avalanche of administrative, practical, financial and medical problems hits them. The whole trip could be cancelled — and their plane tickets are non-refundable and cannot be changed without huge fees."
        ] },
      { heading: "The list of crises",
        bullets: [
          "1. The missing passport: while they are preparing their documents, they can't find Chloé's passport anywhere. They urgently need a new one. However, the town hall and the prefecture are only open during office hours — exactly when Marc and Sophie both work full-time, from 9 a.m. to 5 p.m., with no option to work from home or take a long break.",
          "2. The low-cost ticket trap — no luggage: to save money, they booked basic tickets without any checked baggage. With two children and a two-week trip, they have to add luggage for four people, and it usually costs much more at the last minute than at the time of booking.",
          "3. The practical gap: the fridge is empty, and they haven't prepared anything for their destination — no travel-size toiletries, no first-aid kit, no plug adapters, no suitable clothes.",
          "4. The last-minute accident: this is the final blow. While playing in the park, little Lucas falls off his scooter and breaks his wrist. They rush to the children's emergency department. The result: a light cast, and a whole list of follow-up care to organise — a check-up X-ray in 10 days, physiotherapy sessions after the holiday, painkillers to be taken strictly as prescribed, and a compulsory medical check before he can fly."
        ] },
      { heading: "Analysing the problems",
        bullets: [
          "The administrative problem: how can they fit an urgent passport application — which usually requires going in person and getting a hard-to-find appointment — around rigid working hours?",
          "The financial and practical problem: how can they cover the unexpected cost of the luggage and organise everything for the trip on a tight budget, with tickets they can't get a refund for?",
          "The medical problem: is it possible to travel with a child in a cast? How can they organise his ongoing care and reassure the airline?"
        ] },
      { heading: "Step 1 — Solving the passport problem (administrative emergency)",
        bullets: [
          "Action: one of the parents should take an exceptional day off (or a compensatory day off or family leave, if their employment agreement allows it) so that they are free on a weekday.",
          "Alternative: if the town hall has no appointments left, they can fill in the official online pre-application and look for town halls in neighbouring areas that are less busy.",
          "If departure is very close and they can prove it with their plane tickets, an emergency passport procedure (issued within 48 hours, under very strict conditions) can be requested from the prefecture. But 30 days before departure, a normal appointment is still easy to get if they act on the very first working day."
        ] },
      { heading: "Step 2 — Solving the luggage problem (managing money)",
        bullets: [
          "Action: don't wait until you get to the airport, where last-minute baggage fees can double. Marc and Sophie should log in today to the airline's \"Manage my booking\" page and buy a group checked-baggage package — or save money by taking, for example, two large shared suitcases for the four of them instead of four individual ones.",
          "Budget tip: to make up for the extra cost, they can cut their shopping budget for the holiday, or write a shared packing list to reduce the weight and avoid taking unnecessary things."
        ] },
      { heading: "Step 3 — Solving the practical problems (shopping and packing)",
        bullets: [
          "Action: set up a click-and-collect order or a grocery delivery for the day they come back (so they don't come home to an empty fridge), and use a checklist app for the toiletries.",
          "For last-minute purchases — a travel first-aid kit, airport-approved toiletries — one single trip to a big supermarket on a Saturday morning will sort everything out in about an hour."
        ] },
      { heading: "Step 4 — Solving the medical problem (Lucas's case)",
        bullets: [
          "Action: get a medical certificate from the doctor or the hospital straight away, confirming that Lucas is fit to fly. Airlines often ask for one, especially when the cast is recent and the arm could swell in the cabin because of the change in pressure.",
          "If the cast has only just been put on, they should ask for it to be split, to avoid a tourniquet effect at high altitude.",
          "Follow-up care: they should ask the hospital doctor to send the prescriptions for the check-up X-ray and the physiotherapy directly to a practice near their holiday destination (if they are in France or the EU), or make sure that the follow-up can safely be postponed until they get back."
        ] }
    ],
    vocab: [
      { en: "non-refundable", fr: "non remboursable" },
      { en: "a fee", fr: "des frais" },
      { en: "the town hall", fr: "la mairie" },
      { en: "an appointment", fr: "un rendez-vous (officiel, médical)" },
      { en: "checked baggage", fr: "bagage en soute" },
      { en: "at the last minute", fr: "à la dernière minute" },
      { en: "toiletries", fr: "produits de toilette" },
      { en: "a first-aid kit", fr: "une trousse de premiers secours" },
      { en: "a plug adapter", fr: "un adaptateur de prise" },
      { en: "to break one's wrist", fr: "se casser le poignet" },
      { en: "a cast", fr: "un plâtre" },
      { en: "painkillers", fr: "des antidouleurs" },
      { en: "fit to fly", fr: "apte à prendre l'avion" },
      { en: "to postpone", fr: "reporter, repousser" },
      { en: "to make up for", fr: "compenser" }
    ],
    questions: [
      { q: "Pourquoi la famille ne peut-elle pas simplement changer la date du voyage ?", opts: ["Parce que les enfants ont école", "Parce que les billets ne sont ni remboursables ni modifiables sans frais énormes", "Parce que l'hôtel est complet"], correct: 1, why: "« their plane tickets are non-refundable and cannot be changed without huge fees »." },
      { q: "Quel est le problème avec le passeport de Chloé ?", opts: ["Il est expiré", "Il est introuvable, et la mairie n'ouvre que pendant les heures de travail des parents", "Il contient une erreur"], correct: 1, why: "« they can't find Chloé's passport anywhere » + « only open during office hours »." },
      { q: "Selon l'étude de cas, où NE faut-il PAS acheter les bagages ?", opts: ["Sur la page « Manage my booking »", "À l'aéroport, où les frais peuvent doubler", "Dès aujourd'hui"], correct: 1, why: "« don't wait until you get to the airport, where last-minute baggage fees can double »." },
      { q: "Que veut dire « fit to fly » ?", opts: ["En forme pour faire du sport", "Apte à prendre l'avion", "Prêt à partir en vacances"], correct: 1, why: "Le certificat confirme que Lucas est « fit to fly » : apte à voyager en avion." },
      { q: "« They should ask for it to be split » : quel est le rôle de « should » ici ?", opts: ["Exprimer une obligation légale", "Donner un conseil", "Parler du passé"], correct: 1, why: "« should » + base verbale = donner un conseil (≈ « devraient »), comme dans tout le plan de solutions." }
    ]
  };
})(window.LESSONS_MEDIA);
