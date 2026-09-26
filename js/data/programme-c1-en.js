// The Roots — Programme du niveau C1 (Anglais), palier par palier.
//
// Suite directe de programme-b2-en.js — voir l'en-tête de programme-b1-en.js
// pour le contexte complet (source, convention, champs optionnels). Ces 12
// paliers (C1.1 à C1.12) et le module d'entrée C1.0 suivent le plan C1 décidé
// le 25/09 (numéros de leçon moteur : C1.0 = 54, C1.1 = 55 … C1.12 = 66 ;
// 67 est réservé au futur Grand Contrôle C1).
//
// Comme le reste du contenu pédagogique, ce texte reste en français quelle
// que soit la langue de l'interface (seul l'anglais enseigné est en anglais).
// Le contenu interactif complet (moteur lessons.html) n'est pas encore
// construit pour C1 — cet écran "Voir le programme" est la première étape.

export const C1_EN_GENERAL_OBJECTIVE =
  "À la fin du niveau C1, l'apprenant doit pouvoir utiliser l'anglais avec souplesse et efficacité (« I can use English flexibly and effectively ») : comprendre des textes longs et exigeants, saisir l'implicite, s'exprimer spontanément et couramment sans chercher ses mots, utiliser la langue avec aisance dans la vie sociale, professionnelle et académique, et produire des textes clairs, bien structurés et détaillés sur des sujets complexes. Le niveau C1 approfondit la précision lexicale et le passage d'un registre à l'autre, le récit nuancé (inversion, discours indirect libre), la rhétorique et la mise en relief, les expressions idiomatiques et le langage figuré, l'écrit académique et professionnel (cohésion, nominalisation, hedging), la conduite de réunions et de négociations, la lecture critique des médias, les hypothèses et regrets complexes, le tact interpersonnel, la compréhension des variétés d'anglais (britannique, américain, irlandais, écossais, australien, international), le débat sur des sujets complexes, et l'analyse littéraire et culturelle (jeux de mots, humour subtil). L'objectif final n'est plus seulement de se débrouiller, mais de choisir le mot juste, le bon ton et la bonne structure pour produire exactement l'effet voulu. Chaque palier se termine par un contrôle noté sur 40 (compréhension 15, expression 15, grammaire/vocabulaire/verbes 10), complété par un diagnostic sur 6 dimensions (accuracy, fluency, range, interaction, naturalness, adaptability) ; une fois validé, on passe au palier suivant.";

export const C1_EN_PALIERS = [
  {
    code: "C1.1", title: "Advanced Storytelling",
    objective: "Raconter une histoire avec nuance et effet : maîtriser le rythme, la tension et le point de vue.",
    communication: "Construire un récit captivant : situation → complication → tension → climax → résolution, en jouant sur l'ordre des événements, le point de vue et les effets de style.",
    vocab: ["Verbes de récit précis : to glance, to stare, to glare, to peer, to mutter, to whisper, to stammer, to stumble, to stagger, to creep, to dash", "Marqueurs de tension : all of a sudden, no sooner… than, just as, it was only then that, little by little, before long", "Adverbes de manière : reluctantly, abruptly, warily, eagerly, faintly, barely"],
    grammar: ["Temps du récit avancés : past perfect continuous (She had been waiting for hours), future in the past (He was to regret it / She would later discover…)", "Inversion pour l'effet : Never had I seen…, Little did she know that…, Hardly had he arrived when…, No sooner had we left than…, Not until later did I realise…", "Discours indirect libre (free indirect speech) : Would he ever see her again? Probably not. — la pensée du personnage sans « he thought »"],
    verbs: ["glance / stare / glare / peer / gaze", "mutter / murmur / whisper / stammer", "stumble / stagger / creep / dash"],
    conjugation: "Past perfect continuous et future in the past (was to / would) ; inversion après adverbe négatif ou restrictif (auxiliaire + sujet + verbe).",
    secretEnglish: "Piège francophone : le passé simple et l'imparfait ne se traduisent pas mécaniquement par past simple et past continuous — « Il pleuvait depuis deux jours » = It had been raining for two days (pas « It was raining since two days »). Et l'inversion ne s'emploie qu'après une tournure négative ou restrictive en tête de phrase : « Never I had seen » est faux, Never had I seen est juste.",
    mission: "Raconter à l'oral puis à l'écrit une anecdote marquante (200 mots) en utilisant au moins deux inversions, un passage au discours indirect libre et un retournement final.",
    activities: ["Vocabulaire du récit", "Grammaire (inversion, temps du récit)", "Compréhension écrite (extrait de nouvelle)", "Expression écrite (récit)", "Expression orale (storytelling)", "Secret English", "Mission", "Contrôle de niveau", "Fiche PDF"],
  },
  {
    code: "C1.2", title: "Persuasion & Rhetoric",
    objective: "Convaincre un auditoire en mettant en relief ses idées et en maniant les procédés rhétoriques.",
    communication: "Structurer un discours persuasif : accroche → mise en relief de l'idée clé → preuves → concession stratégique → appel à l'action.",
    vocab: ["Mise en relief : What really matters is…, The thing is…, The point I'm making is…, All I'm asking is…", "Concession stratégique : Admittedly…, Granted, …, While it's true that…, I'll grant you that…, but…", "Appel à l'action : It's time we…, Let's not…, The question is not whether… but how…"],
    grammar: ["Phrases clivées en « it » : It was the price that put me off (pas the service)", "Phrases pseudo-clivées en « what » : What I find striking is…, What we need is…, What happened was that…", "Questions rhétoriques et règle de trois (tricolon) : clear, fair and effective", "Emphase avec do / does / did : I do understand your concerns"],
    conjugation: "Auxiliaire emphatique do / does / did + base verbale (She did warn us) ; accord de « What… is / are » avec le complément.",
    secretEnglish: "Piège francophone : « C'est… qui / que » ne se traduit pas systématiquement par It is… that — l'anglais préfère souvent l'accent tonique ou la pseudo-clivée : What bothers me is the noise est plus naturel que « It's the noise which bothers me ». Et l'emphase « Je te l'avais bien dit ! » = I did tell you!, pas « I have well told you ».",
    mission: "Prononcer un discours persuasif de 2 minutes pour défendre un projet, avec une phrase clivée, une question rhétorique, une règle de trois et une concession stratégique.",
    activities: ["Vocabulaire de la persuasion", "Grammaire (phrases clivées, emphase)", "Compréhension orale (discours célèbre)", "Expression orale (discours persuasif)", "Expression écrite (tribune)", "Secret English", "Mission", "Contrôle de niveau", "Fiche PDF"],
  },
  {
    code: "C1.3", title: "Idioms & Figurative Language",
    objective: "Reconnaître et employer à bon escient les expressions idiomatiques et le langage figuré, sans en abuser.",
    communication: "Comprendre une expression imagée dans son contexte, en deviner le sens, et savoir quand l'utiliser (registre, variété UK / US) ou l'éviter.",
    vocab: ["Idioms courants : to cut corners, to bite the bullet, to be on the fence, to go the extra mile, to call it a day, to beat around the bush, a blessing in disguise, the elephant in the room", "UK / US : to take the mickey (UK), to be chuffed (UK), to knock it out of the park (US), a ballpark figure (US)", "Métaphores du quotidien : to be swamped, a flood of complaints, to shed light on, a rising star, to break the ice"],
    grammar: ["Figement des idioms : on ne change ni l'article ni le nombre (kick the bucket, pas « kick a bucket »)", "Idioms verbaux : conjugaison du verbe seul (She bit the bullet / They've been beating around the bush)"],
    phrasalVerbs: ["to pull through, to fall through, to come across as, to get away with, to put up with, to brush up on, to run into"],
    conjugation: "Conjuguer l'idiom via son verbe tout en gardant le reste figé ; phrasal verbs à trois éléments (put up with, get away with) inséparables.",
    secretEnglish: "Piège francophone : ne pas traduire mot à mot les expressions françaises — « Il pleut des cordes » n'est pas « It's raining ropes » (It's pouring / It's raining cats and dogs, cette dernière un peu datée) ; « coûter les yeux de la tête » = to cost an arm and a leg ; « avoir d'autres chats à fouetter » = to have bigger fish to fry. Et un natif utilise rarement plus d'un ou deux idioms par conversation : en empiler sonne artificiel.",
    mission: "Réécrire un court texte neutre en y intégrant naturellement 4 idioms, puis expliquer à un apprenant le sens de 3 expressions entendues dans un extrait.",
    activities: ["Vocabulaire idiomatique (UK / US)", "Jeux (associer idiom et sens)", "Compréhension orale (idioms en contexte)", "Expression écrite", "Secret English", "Mission", "Contrôle de niveau", "Fiche PDF"],
  },
  {
    code: "C1.4", title: "Academic & Professional Writing",
    objective: "Rédiger des rapports, synthèses et e-mails délicats clairs, cohérents et au bon registre.",
    communication: "Organiser un écrit long : introduction → développement en paragraphes cohérents (topic sentence) → conclusion ; rédiger un e-mail sensible (refus, relance, mauvaise nouvelle).",
    vocab: ["Cohésion : furthermore, moreover, in contrast, conversely, as a result, in light of, with regard to, notwithstanding", "Hedging académique : it appears that, the data suggest, this may indicate, to a certain extent, it could be argued that", "Formules d'e-mail délicat : I regret to inform you that…, Unfortunately, we are unable to…, I would be grateful if you could…, Please do not hesitate to…"],
    grammar: ["Nominalisation : They decided to expand → The decision to expand ; prices rose sharply → a sharp rise in prices", "Passif et passif impersonnel pour l'objectivité : It was found that…, Measures have been taken", "Référence et substitution : the former / the latter, this approach, such measures"],
    collocations: ["carry out research, draw a conclusion, raise a concern, address an issue, meet a deadline, reach an agreement, pose a threat, play a role"],
    conjugation: "Passif à tous les temps (is being reviewed, has been approved, will have been completed) ; modaux de hedging (may, might, could + infinitif passé).",
    secretEnglish: "Piège francophone : l'écrit anglais préfère des phrases plus courtes et une idée par paragraphe — les longues phrases françaises à subordonnées enchaînées paraissent confuses. Faux amis de l'écrit : « actuellement » ≠ actually (currently), « éventuellement » ≠ eventually (possibly), « une formation » ≠ a formation (training). Et pas de virgule entre un sujet et son verbe, ni avant that.",
    mission: "Rédiger un rapport de synthèse de 250 mots à partir de données fournies, puis un e-mail de refus poli à un client important.",
    activities: ["Connecteurs et cohésion", "Grammaire (nominalisation, passif)", "Collocations académiques", "Compréhension écrite (rapport)", "Expression écrite (rapport, e-mail délicat)", "Secret English", "Mission", "Contrôle de niveau", "Fiche PDF"],
  },
  {
    code: "C1.5", title: "Meetings, Negotiation & Leadership",
    objective: "Animer une réunion, négocier, recadrer poliment et faire un feedback constructif.",
    communication: "Ouvrir et cadrer une réunion, distribuer la parole, recadrer une digression, négocier (proposer, marchander, conclure) et formuler un feedback constructif.",
    vocab: ["Animer : Let's get the ball rolling, Shall we move on to…?, Can we park that for now?, Let's circle back to…, To sum up where we are…", "Recadrer : I'm conscious of time, so…, That's a fair point, but let's stay focused on…, Could you hold that thought?", "Négocier : What if we were to…?, We could consider… provided that…, That's our bottom line, Is there any flexibility on…?, Let's meet halfway", "Feedback : What worked really well was…, One thing you might consider is…, Going forward, it would help if…"],
    grammar: ["Conditionnels de négociation : If you could…, we would… ; Supposing we…, would you… ? ; provided / as long as / on condition that", "Suggestions indirectes : I was wondering whether…, It might be worth…-ing, Have you thought about…-ing?"],
    phrasalVerbs: ["to follow up on, to sign off on, to push back on, to bring up, to wrap up, to iron out, to take on, to back down"],
    conjugation: "Past continuous et modaux de distance polie (I was hoping…, We were thinking…, might, could) ; were to + base verbale pour une hypothèse de négociation.",
    secretEnglish: "Piège francophone : en réunion anglophone, la critique directe (« Ce n'est pas bon ») passe pour agressive ; on utilise le « feedback sandwich » et l'understatement (That might need a bit more work = il faut tout reprendre). « Contrôler » ≠ to control (to check), et « une réunion » se dit meeting, pas reunion (retrouvailles).",
    mission: "Animer une réunion simulée de 10 minutes : ouvrir, recadrer une digression, négocier un compromis sur un budget et conclure avec un feedback constructif.",
    activities: ["Vocabulaire de la réunion et de la négociation", "Phrasal verbs professionnels", "Compréhension orale (réunion)", "Expression orale (jeu de rôle)", "Secret English", "Mission", "Contrôle de niveau", "Fiche PDF"],
  },
  {
    code: "C1.6", title: "Media, News & Critical Reading",
    objective: "Lire la presse de façon critique : repérer le biais, évaluer les sources et lire entre les lignes.",
    communication: "Distinguer fait, opinion et spéculation ; identifier la source, le cadrage (framing) et le vocabulaire chargé ; comparer deux articles sur le même événement.",
    vocab: ["Presse : headline, byline, op-ed, editorial, a scoop, a leak, a source close to…, allegedly, reportedly, unconfirmed reports", "Vocabulaire chargé : a regime vs a government, freedom fighters vs rebels, to slash vs to cut, to claim vs to state", "Titres de presse : to slam, to vow, to probe, a bid, a row (UK), a rift, to oust"],
    grammar: ["Passif de rapport (reporting passive) : It is claimed that…, It has been reported that… / X is said to be…, X is believed to have left…, X is thought to be considering…", "Headlinese : présent pour le passé, infinitif pour le futur, suppression des articles et de be (PM to visit China, Minister quits)"],
    verbs: ["claim / allege / assert / maintain / acknowledge / deny / concede / imply"],
    conjugation: "Passif de rapport avec infinitif simple, continu ou passé : is said to be / to be doing / to have done.",
    secretEnglish: "Piège francophone : « prétendre » ≠ to pretend (to claim) ; « supposé » dans la presse = alleged / supposed ; et le passif de rapport ne se calque pas sur « On dit que » : He is said to be rich (pas « It is said him rich »). Attention aussi aux titres : « Police probe death » = la police enquête sur un décès (probe = enquêter).",
    mission: "Comparer deux articles sur un même événement, relever 5 marqueurs de biais et réécrire le paragraphe principal de façon neutre.",
    activities: ["Vocabulaire des médias", "Grammaire (reporting passive, headlinese)", "Compréhension écrite (articles comparés)", "Analyse critique", "Expression écrite (réécriture neutre)", "Secret English", "Mission", "Contrôle de niveau", "Fiche PDF"],
  },
  {
    code: "C1.7", title: "Hypotheticals & Regrets",
    objective: "Exprimer avec précision hypothèses, regrets, souhaits et reproches, y compris dans un registre soutenu.",
    communication: "Imaginer d'autres scénarios passés et présents, exprimer un regret, un reproche ou un souhait, et formuler une hypothèse soutenue.",
    vocab: ["Regrets et souhaits : I wish I had…, If only I hadn't…, I'd rather you didn't…, I'd sooner…, It's high time we…, Suppose / Supposing…, But for…, Otherwise…"],
    grammar: ["Conditionnels mixtes : If I had taken that job, I would be living in London now / If I weren't so shy, I would have spoken up", "Inversion conditionnelle (registre soutenu) : Had I known…, Were it not for…, Should you need anything…, Were we to accept…", "wish / if only + prétérit (présent), + past perfect (passé), + would (agacement) ; I'd rather + sujet + prétérit ; It's high time + prétérit"],
    conjugation: "Prétérit modal et past perfect après wish / if only / I'd rather / it's high time ; would have + participe passé ; should have / could have / might have pour le reproche.",
    secretEnglish: "Piège francophone : jamais de would dans la proposition en if — « If I would have known » est une faute (If I had known). « Il est grand temps que tu partes » = It's high time you left (prétérit, pas subjonctif ni présent). Et I wish ne s'emploie pas pour un souhait futur ordinaire : « Je te souhaite bonne chance » = I hope it goes well / Good luck, pas « I wish that you have luck ».",
    mission: "Raconter une décision importante de sa vie en imaginant l'autre scénario (conditionnels mixtes), puis écrire une lettre formelle utilisant deux inversions conditionnelles.",
    activities: ["Grammaire (conditionnels mixtes, inversion)", "Vocabulaire du regret et du souhait", "Compréhension orale", "Expression orale (et si… ?)", "Expression écrite (lettre formelle)", "Secret English", "Mission", "Contrôle de niveau", "Fiche PDF"],
  },
  {
    code: "C1.8", title: "Tact & Interpersonal Nuance",
    objective: "Aborder les sujets sensibles avec tact, exprimer un désaccord de façon diplomatique et faire preuve d'empathie.",
    communication: "Adoucir une demande ou une critique, annoncer une mauvaise nouvelle, exprimer un désaccord avancé sans froisser, réagir avec empathie à une confidence.",
    vocab: ["Adoucisseurs : I just wondered if…, It's just that…, a bit, slightly, somewhat, perhaps, I'm afraid…", "Désaccord diplomatique avancé : I take your point, but…, I'm not sure that's quite the whole picture, I see it slightly differently, With respect, …, That's one way of looking at it", "Empathie : That must be really hard, I can only imagine…, I'm so sorry to hear that, If there's anything I can do…, Take all the time you need", "Mauvaises nouvelles : I'm afraid I've got some bad news, I'm sorry to have to tell you…, There's no easy way to say this…"],
    grammar: ["Distance polie par le temps : I was wondering…, I was hoping you might…, We were thinking of…", "Understatement et litote : not exactly ideal, not the best idea, not entirely convinced, a bit of a problem"],
    conjugation: "Past continuous et modaux (might, could, would) comme marqueurs de politesse, sans valeur temporelle passée.",
    secretEnglish: "Piège francophone : « With all due respect » et « I hear what you say » annoncent souvent un désaccord ferme chez les Britanniques ; « Quite good » peut signifier « moyen ». Le français « Je ne suis pas d'accord » dit tel quel peut sembler abrupt — préférer I'm not sure I agree / I see it a bit differently. Et « sensible » ≠ sensitive : un sujet sensible = a sensitive topic.",
    mission: "Jouer trois situations délicates : refuser la demande d'un ami, annoncer une mauvaise nouvelle à un collègue et exprimer un désaccord avec un supérieur, en adaptant le degré de tact.",
    activities: ["Vocabulaire du tact et de l'empathie", "Grammaire (distance polie, understatement)", "Compréhension orale (implicite social)", "Expression orale (jeux de rôle)", "Secret English", "Mission", "Contrôle de niveau", "Fiche PDF"],
  },
  {
    code: "C1.9", title: "Accents & Varieties of English",
    objective: "Comprendre l'anglais dans ses principales variétés à l'oral et connaître leurs différences de lexique et d'usage.",
    communication: "Identifier et comprendre l'anglais britannique, américain, irlandais, écossais, australien et l'anglais international (locuteurs non natifs) ; s'adapter à la variété de son interlocuteur.",
    vocab: ["UK / US : flat / apartment, lift / elevator, queue / line, holiday / vacation, rubbish / trash, pavement / sidewalk, autumn / fall, mobile / cell phone", "Irlande : grand (= fine), craic (= fun, conversation), yer man / yer woman, I'm after eating (= je viens de manger)", "Écosse : wee (= petit), aye (= yes), bairn (= enfant), dreich (= temps gris et humide), ken (= know)", "Australie : arvo (= afternoon), brekkie, no worries, reckon, heaps (= beaucoup), servo (= station-service)"],
    grammar: ["Différences grammaticales UK / US : Have you got…? / Do you have…?, gotten (US), collectifs (the team are / the team is), present perfect vs past simple (I just ate / I've just eaten)", "Orthographe : colour / color, centre / center, organise / organize, travelled / traveled"],
    conjugation: "Participes UK / US : got / gotten, learnt / learned, dreamt / dreamed ; « be after + -ing » irlandais (passé récent).",
    secretEnglish: "Piège francophone : il n'y a pas d'anglais « correct » unique — l'important est la cohérence (orthographe UK ou US, pas un mélange dans un même texte). À l'oral, le r final se prononce en américain, irlandais et écossais (car, far) mais pas en anglais britannique standard ni en australien. Et « pants » = pantalon aux États-Unis mais slip au Royaume-Uni !",
    mission: "Écouter cinq locuteurs de variétés différentes, identifier leur origine et reformuler chaque message en anglais international neutre.",
    activities: ["Vocabulaire UK / US / Irlande / Écosse / Australie", "Compréhension orale (accents variés)", "Prononciation (rhotic / non-rhotic, voyelles)", "Jeux (qui parle ?)", "Secret English", "Mission", "Contrôle de niveau", "Fiche PDF"],
  },
  {
    code: "C1.10", title: "Debating Complex Issues",
    objective: "Débattre de questions éthiques, sociales et technologiques en structurant, contre-argumentant et concluant avec rigueur.",
    communication: "Poser une position → la justifier → réfuter un argument adverse → concéder un point → recentrer → conclure, en temps réel et face à des objections imprévues.",
    vocab: ["Réfuter : That argument doesn't hold water, That's a false dichotomy, That doesn't necessarily follow, You're conflating two issues, The evidence points the other way", "Concéder puis recentrer : I'll concede that…, but the real issue is…, Even if we accept that…, it still doesn't…", "Conclure : On balance, …, Weighing everything up, …, Ultimately, what's at stake is…", "Thèmes : artificial intelligence, surveillance, privacy, climate policy, inequality, bioethics, free speech, accountability"],
    grammar: ["Structures de concession avancées : Much as I sympathise with…, Although / Even though…, However convincing it may seem, …, Be that as it may, …", "Gradation et comparaison : the more… the more…, far more / considerably less, by no means, not so much… as…"],
    collocations: ["raise an objection, weigh the pros and cons, draw a distinction, strike a balance, set a precedent, bear the consequences, a slippery slope, a double-edged sword"],
    conjugation: "Modaux de déduction et de probabilité (must / can't / might have + participe passé) pour évaluer un argument ; subjonctif anglais (We insist that he be heard).",
    secretEnglish: "Piège francophone : « un argument » en anglais peut aussi vouloir dire une dispute (We had an argument) ; « discuter » ≠ to discuss something about (to discuss something, sans about) ; « important » ne suffit pas — préférer crucial, significant, far-reaching, pressing selon la nuance. Et en débat anglophone, on concède avant de contrer : c'est une marque de force, pas de faiblesse.",
    mission: "Participer à un débat contradictoire de 8 minutes sur une question éthique liée à la technologie, avec au moins deux réfutations, une concession et une conclusion pondérée.",
    activities: ["Vocabulaire du débat", "Collocations argumentatives", "Grammaire (concession avancée)", "Compréhension orale (débat)", "Expression orale (débat contradictoire)", "Expression écrite (essai argumentatif)", "Secret English", "Mission", "Contrôle de niveau", "Fiche PDF"],
  },
  {
    code: "C1.11", title: "Literature, Culture & Wordplay",
    objective: "Analyser un extrait littéraire, comprendre les jeux de mots, les sous-entendus culturels et l'humour britannique subtil.",
    communication: "Commenter un extrait (thème, ton, point de vue, style), expliquer un jeu de mots ou une référence culturelle, et saisir l'humour par understatement et ironie.",
    vocab: ["Analyse littéraire : narrator, point of view, tone, imagery, symbolism, foreshadowing, irony, a recurring motif, the protagonist, to convey, to evoke", "Jeux de mots : a pun, a play on words, a double entendre, a spoonerism, homophones (knight / night, flour / flower)", "Humour britannique : understatement (It's a bit nippy = il gèle), self-deprecation, dry wit, deadpan, « Not bad » = très bien"],
    grammar: ["Présent de narration et présent de commentaire : The author conveys…, The narrator seems to suggest…", "Modaux d'interprétation : This could be read as…, The image might suggest…, It would appear that…"],
    conjugation: "Présent simple pour l'analyse littéraire (même pour un texte ancien) ; modaux d'hypothèse interprétative (could / might / may be read as).",
    secretEnglish: "Piège francophone : l'humour anglais repose souvent sur ce qui n'est pas dit — réagir au sens littéral d'un understatement (« It was a bit of a disaster » pour une catastrophe totale) fait passer à côté. « Une nouvelle » (récit court) = a short story, pas a novel (roman) ; « un roman » = a novel ; et « la littérature » s'emploie sans article en anglais : I love literature.",
    mission: "Analyser un court extrait original en 200 mots (thème, ton, procédés) et expliquer trois jeux de mots ou traits d'humour britannique à un autre apprenant.",
    activities: ["Vocabulaire de l'analyse littéraire", "Compréhension écrite (extrait original)", "Jeux de mots et humour", "Expression écrite (commentaire)", "Expression orale (présenter un livre)", "Secret English", "Mission", "Contrôle de niveau", "Fiche PDF"],
  },
  {
    code: "C1.12", title: "C1 Real-World Mission",
    objective: "La synthèse finale : faire face à une situation complexe et imprévue en mobilisant l'ensemble des compétences C1.",
    communication: "Comprendre un dossier dense (écrit et oral) → analyser l'implicite → rédiger une synthèse → négocier et débattre → gérer une situation délicate avec tact → conclure et convaincre, sans préparation préalable.",
    mission: "Gérer de bout en bout une situation professionnelle ou sociale complexe et inattendue (crise, négociation, débat public), à l'oral et à l'écrit, sans aide.",
    activities: ["Simulation complexe imprévue", "Compréhension écrite et orale (dossier)", "Expression écrite (synthèse)", "Expression orale (négociation, débat)", "Grand contrôle final C1 (/40 — compréhension 15, expression 15, grammaire/vocabulaire/verbes 10)", "Diagnostic 6 dimensions (accuracy, fluency, range, interaction, naturalness, adaptability)", "Fiche PDF"],
  },
];


// Module d'entrée C1.0 « Bases transversales C1 » (ajouté le 25/09) : joué juste AVANT C1.1
// dans lessons.html (leçon 54). Affiché dans « Voir le programme » au-dessus des 12 paliers.
export const C1_EN_ENTRY_MODULE = {
  code: "C1.0", title: "Bases transversales C1",
  objective: "Poser, avant le premier palier C1, les réflexes d'un utilisateur expérimenté : éliminer les calques et faux amis de haut niveau, choisir le mot le plus précis, passer d'un registre à l'autre et penser directement en anglais à l'écrit comme à l'oral.",
  communication: "Repérer et corriger les calques et faux amis de haut niveau ; choisir entre des synonymes proches selon la nuance ; reformuler un même message dans plusieurs registres ; produire à l'écrit et à l'oral sans passer par le français.",
  vocab: ["Faux amis de haut niveau : to achieve (≠ achever), to resume (≠ résumer), versatile (≠ versatile), consistent (≠ consistant), genial (≠ génial), to evade (≠ s'évader), compromised (≠ compromis), a lecture (≠ une lecture), a concurrent (≠ un concurrent)", "Calques : « to take a decision » (UK accepté, mais make a decision est plus courant), « since two years » → for two years, « I'm agree » → I agree, « explain me » → explain to me, « depend of » → depend on", "Précision lexicale (synonymes) : big / large / huge / vast / substantial / considerable ; say / state / claim / argue / point out / imply ; change / alter / modify / adjust / transform", "Registres : kids / children / offspring ; get / obtain / acquire ; ask for / request / solicit ; buy / purchase / procure"],
  grammar: ["Calques et faux amis de haut niveau, prépositions et structures verbales calquées (to be interested in, to consist of, to insist on, to succeed in -ing)", "Précision lexicale : nuances de synonymes, collocations qui trahissent le francophone (do a mistake → make a mistake, strong rain → heavy rain)", "Changer de registre : phrasal verbs (informel) vs verbes d'origine latine (formel) — find out / discover, put off / postpone, go up / increase"],
  activities: ["Vocabulaire", "Jeux", "Grammaire", "Prononciation", "Lecture", "Contrôle"],
};
