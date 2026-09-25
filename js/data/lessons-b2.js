// The Roots — leçons jouables B2.1 à B2.12 (leçons 40 à 51)
// Fichier de DONNÉES chargé par lessons.html (balise <script src>). Ne contient que du contenu
// pédagogique : window.LESSONS_EXT[N] = {…} où N est le numéro de leçon du moteur.
window.LESSONS_EXT = window.LESSONS_EXT || {};
(function (LESSONS_EXT) {
  // B2.1 — Argumentation — s'appuie sur B1.12 (mission de fin de B1) et B1.7 (Say What You Think : opinion, connecteurs)
  LESSONS_EXT[40] = {
    code: "B2.1", level: "B2",
    VOCAB: [
      {block:"Construire un argument", en:"Claim", ipa:"/kleɪm/", fr:"Affirmation, thèse", note:"Nom ET verbe : « to claim that… » = affirmer que… (sans forcément apporter de preuve). Ne veut pas dire « réclamer » dans ce contexte."},
      {block:"Construire un argument", en:"To argue that", ipa:"/tə ˈɑːɡjuː ðæt/", fr:"Soutenir que, faire valoir que", note:"« argue with someone » = se disputer ; « argue that… » = défendre une idée. Le contexte fait toute la différence."},
      {block:"Construire un argument", en:"Evidence", ipa:"/ˈevɪdəns/", fr:"Preuves, éléments concrets", note:"Faux ami majeur : jamais « évidence » (= « obviousness »). Indénombrable : « some evidence », « a piece of evidence », jamais « an evidence » ni « evidences »."},
      {block:"Construire un argument", en:"To back up", ipa:"/tə bæk ʌp/", fr:"Étayer, appuyer (un argument)", note:"« Can you back that up with figures? » = tu peux étayer ça avec des chiffres ? Verbe à particule séparable."},
      {block:"Construire un argument", en:"Counterargument", ipa:"/ˈkaʊntərˌɑːɡjumənt/", fr:"Contre-argument, objection", note:"L'étape que les francophones oublient souvent en anglais : l'anticiper rend l'argumentation beaucoup plus solide."},
      {block:"Construire un argument", en:"To rebut", ipa:"/tə rɪˈbʌt/", fr:"Réfuter, contrer (une objection)", note:"Registre soutenu, fréquent dans les débats et les écrits argumentatifs. Nom : « a rebuttal »."},
      {block:"Construire un argument", en:"Valid", ipa:"/ˈvælɪd/", fr:"Valable, fondé(e), recevable", note:"« That's a valid point » = c'est un argument recevable — plus soutenu que « a good point » (B1.3)."},
      {block:"Concession et contraste", en:"However", ipa:"/haʊˈevə/", fr:"Cependant, toutefois", note:"Adverbe : il ouvre une NOUVELLE phrase et est suivi d'une virgule. Jamais « however » pour relier deux propositions sans point ni point-virgule."},
      {block:"Concession et contraste", en:"Nevertheless", ipa:"/ˌnevəðəˈles/", fr:"Néanmoins, malgré tout", note:"Plus fort et plus formel que « however » : on reconnaît un obstacle, mais on maintient sa position."},
      {block:"Concession et contraste", en:"Whereas", ipa:"/weərˈæz/", fr:"Alors que, tandis que (contraste)", note:"Oppose deux faits comparables : « I work from home, whereas my partner commutes. » Ne sert jamais à parler du temps (≠ « while » temporel)."},
      {block:"Concession et contraste", en:"Although", ipa:"/ɔːlˈðəʊ/", fr:"Bien que, même si", note:"Conjonction suivie d'une proposition complète (sujet + verbe), à l'INDICATIF — pas de subjonctif comme en français."},
      {block:"Concession et contraste", en:"Even though", ipa:"/ˈiːvn ðəʊ/", fr:"Même si, alors même que", note:"Version renforcée d'« although » : souligne que le fait est réel et surprenant. « even if » = même si (hypothèse)."},
      {block:"Concession et contraste", en:"Despite", ipa:"/dɪˈspaɪt/", fr:"Malgré, en dépit de", note:"Préposition : suivie d'un nom ou d'un -ing. Piège : JAMAIS « despite of » (mais « in spite of »)."},
      {block:"Cause, conséquence et condition", en:"Therefore", ipa:"/ˈðeəfɔː/", fr:"Par conséquent, donc", note:"Registre écrit et argumentatif ; à l'oral on dit plus souvent « so ». Souvent précédé d'un point-virgule."},
      {block:"Cause, conséquence et condition", en:"Consequently", ipa:"/ˈkɒnsɪkwəntli/", fr:"En conséquence, par voie de conséquence", note:"Proche de « therefore », mais insiste sur l'enchaînement des faits plutôt que sur le raisonnement logique."},
      {block:"Cause, conséquence et condition", en:"As a result", ipa:"/æz ə rɪˈzʌlt/", fr:"Résultat, du coup, par conséquent", note:"Neutre, utilisable à l'oral comme à l'écrit. « as a result of + nom » = en raison de."},
      {block:"Cause, conséquence et condition", en:"Provided that", ipa:"/prəˈvaɪdɪd ðæt/", fr:"À condition que, pourvu que", note:"Suivi du présent même pour parler du futur : « provided that the budget IS approved ». Synonyme : « providing », « as long as »."},
      {block:"Cause, conséquence et condition", en:"Owing to", ipa:"/ˈəʊɪŋ tuː/", fr:"En raison de, à cause de", note:"Formel, suivi d'un nom : « owing to a lack of funding ». Proche de « due to »."},
      {block:"Cause, conséquence et condition", en:"Unless", ipa:"/ənˈles/", fr:"À moins que, sauf si", note:"Contient déjà la négation : « unless we act » = si nous n'agissons pas. Jamais « unless we don't act »."},
      {block:"Verbes clés (B2.1)", en:"To acknowledge", ipa:"/tu əkˈnɒlɪdʒ/", fr:"Reconnaître, admettre", note:"Clé de la concession : « I acknowledge that it's expensive, but… » — on montre qu'on a entendu l'autre camp."},
      {block:"Verbes clés (B2.1)", en:"To outweigh", ipa:"/tu aʊtˈweɪ/", fr:"L'emporter sur, peser plus lourd que", note:"« The benefits outweigh the drawbacks » = les avantages l'emportent sur les inconvénients — formule reine de la conclusion."},
      {block:"Verbes clés (B2.1)", en:"To undermine", ipa:"/tu ˌʌndəˈmaɪn/", fr:"Saper, affaiblir, fragiliser", note:"« This undermines your argument » = cela affaiblit ton argument."},
      {block:"Verbes clés (B2.1)", en:"To support", ipa:"/tə səˈpɔːt/", fr:"Soutenir, appuyer", note:"Faux ami : ne veut jamais dire « supporter » au sens de « tolérer » (= « stand », « bear »)."},
      {block:"Verbes clés (B2.1)", en:"To challenge", ipa:"/tə ˈtʃælɪndʒ/", fr:"Contester, remettre en question", note:"« to challenge an idea » = la remettre en cause — pas forcément agressif, c'est même valorisé dans un débat."},
      {block:"Verbes clés (B2.1)", en:"To conclude", ipa:"/tə kənˈkluːd/", fr:"Conclure, en déduire", note:"« We can conclude that… » ; pour ouvrir une conclusion : « To conclude, … » ou « All things considered, … »."},
      {block:"Anticiper l'objection (Secret English)", en:"Some might argue that…", ipa:"/sʌm maɪt ˈɑːɡjuː ðæt/", fr:"Certains pourraient objecter que…", note:"La formule magique du Secret English : on présente soi-même l'objection… pour mieux la réfuter juste après avec « However, … »."},
      {block:"Anticiper l'objection (Secret English)", en:"That said,", ipa:"/ðæt sed/", fr:"Cela dit, ceci étant dit,", note:"Transition très naturelle pour nuancer ce qu'on vient d'affirmer, à l'oral comme à l'écrit."}
    ],
    MEM_WORDS: [2,8,9,16,20,25],
    MINI_CHECKS: [
      { q:"“___ the high cost, the project was approved.”", opts:["Although","Despite","However"], correct:1, fb:"« Despite » + nom (« the high cost »). « Although » exigerait une proposition complète : « Although the cost was high… »." },
      { q:"“The results were disappointing. ___, the team decided to continue.”", opts:["Nevertheless","Whereas","Unless"], correct:0, fb:"« Nevertheless » ouvre une nouvelle phrase : on reconnaît l'obstacle, mais on maintient la décision." },
      { q:"“We'll launch the product ___ the tests are successful.” — à condition que.", opts:["unless","provided that","whereas"], correct:1, fb:"« Provided that » = à condition que, suivi du présent même pour un événement futur." },
      { q:"Que veut dire « evidence » ?", opts:["Une évidence","Des preuves, des éléments concrets","Un événement"], correct:1, fb:"Faux ami : « evidence » = preuves. « C'est une évidence » se dit plutôt « it's obvious »." }
    ],
    ROUNDS: [
      { bank:["expensive","too","it's","that","argue","might","people","Some","."], answer:"some people might argue that it's too expensive .", display:"Some people might argue that it's too expensive.", fr:"Certains pourraient objecter que c'est trop cher." },
      { bank:["otherwise","suggests","evidence","the","However","."], answer:"however the evidence suggests otherwise .", display:"However, the evidence suggests otherwise.", fr:"Cependant, les preuves suggèrent le contraire." },
      { bank:["costs","the","outweigh","benefits","the","risky","it's","Although","."], answer:"although it's risky the benefits outweigh the costs .", display:"Although it's risky, the benefits outweigh the costs.", fr:"Bien que ce soit risqué, les avantages l'emportent sur les coûts." },
      { bank:["approved","was","project","the","cost","high","the","Despite","."], answer:"despite the high cost the project was approved .", display:"Despite the high cost, the project was approved.", fr:"Malgré le coût élevé, le projet a été approuvé." },
      { bank:["approved","is","budget","the","that","provided","ahead","go","We'll","."], answer:"we'll go ahead provided that the budget is approved .", display:"We'll go ahead provided that the budget is approved.", fr:"Nous nous lancerons à condition que le budget soit approuvé." },
      { bank:["anything","conclude","can't","we","therefore","incomplete","is","data","The","."], answer:"the data is incomplete therefore we can't conclude anything .", display:"The data is incomplete; therefore, we can't conclude anything.", fr:"Les données sont incomplètes ; par conséquent, nous ne pouvons rien conclure." },
      { bank:["evidence","any","by","up","backed","isn't","claim","This","."], answer:"this claim isn't backed up by any evidence .", display:"This claim isn't backed up by any evidence.", fr:"Cette affirmation n'est étayée par aucune preuve." },
      { bank:["countryside","the","prefers","sister","my","whereas","city","the","in","live","I","."], answer:"i live in the city whereas my sister prefers the countryside .", display:"I live in the city, whereas my sister prefers the countryside.", fr:"J'habite en ville, alors que ma sœur préfère la campagne." },
      { bank:["point","valid","a","it's","acknowledge","I","said","That","."], answer:"that said i acknowledge it's a valid point .", display:"That said, I acknowledge it's a valid point.", fr:"Cela dit, je reconnais que c'est un argument valable." },
      { bank:["action","take","we","unless","change","will","Nothing","."], answer:"nothing will change unless we take action .", display:"Nothing will change unless we take action.", fr:"Rien ne changera à moins que nous agissions." }
    ],
    QUIZ: [
      { cat:"ecrit", q:"“___ he had all the evidence, the jury wasn't convinced.”", opts:["Despite","Even though","However"], correct:1, why:"« Even though » + proposition complète (sujet + verbe) pour un fait réel et surprenant. « Despite » exigerait un nom : « Despite all the evidence »." },
      { cat:"ecrit", q:"“The plan is ambitious. ___, I believe it's achievable.”", opts:["Whereas","Unless","Nevertheless"], correct:2, why:"« Nevertheless » ouvre une nouvelle phrase et maintient la position malgré l'obstacle reconnu." },
      { cat:"ecrit", q:"“I prefer trains, ___ my colleague always flies.” — contraste entre deux faits.", opts:["whereas","therefore","provided that"], correct:0, why:"« Whereas » oppose deux faits comparables. « Therefore » exprimerait une conséquence, ce qui n'a pas de sens ici." },
      { cat:"ecrit", q:"Quelle phrase est correcte ?", opts:["Despite of the rain, we went out.","In spite the rain, we went out.","Despite the rain, we went out."], correct:2, why:"« Despite » s'emploie SANS « of » ; « in spite » s'emploie AVEC « of ». Piège très fréquent chez les francophones (« en dépit de »)." },
      { cat:"ecrit", q:"“We won't meet the deadline ___ we hire extra staff.” — sauf si.", opts:["unless","provided that","even though"], correct:0, why:"« Unless » = à moins que / sauf si. Il contient déjà la négation : jamais « unless we don't hire »." },
      { cat:"ecrit", q:"“You can borrow the car provided that you ___ it back by six.”", opts:["will bring","bring","would bring"], correct:1, why:"Après « provided that » (comme après « if » ou « unless »), on met le présent même pour parler du futur." },
      { cat:"ecrit", q:"Laquelle de ces phrases emploie correctement « however » ?", opts:["It's cheap, however it's slow.","It's cheap. However, it's slow.","It's cheap however, it's slow."], correct:1, why:"« However » est un adverbe : il ouvre une nouvelle phrase (ou suit un point-virgule) et est suivi d'une virgule. Pour relier avec une simple virgule, il faudrait « but »." },
      { cat:"ecrit", q:"Comment dit-on « les avantages l'emportent sur les inconvénients » ?", opts:["The benefits outweigh the drawbacks.","The benefits overcome the drawbacks.","The benefits outnumber the drawbacks."], correct:0, why:"« To outweigh » = peser plus lourd que. « Outnumber » parlerait du nombre, pas de l'importance ; « overcome » = surmonter." },
      { cat:"ecrit", q:"“There isn't enough ___ to support that claim.”", opts:["evidences","evidence","an evidence"], correct:1, why:"« Evidence » est indénombrable : pas de pluriel ni d'article « an ». Pour en compter : « a piece of evidence »." },
      { cat:"ecrit", q:"Quelle est la bonne suite logique d'une argumentation en 5 étapes ?", opts:["Claim → example → conclusion → reason → counterargument","Claim → reason → example → counterargument → conclusion","Counterargument → claim → conclusion → reason → example"], correct:1, why:"Le schéma B2.1 : on affirme (claim), on justifie (reason), on illustre (example), on anticipe l'objection (counterargument), puis on conclut." },
      { cat:"oral", audio:"Some might argue that remote work isolates people. However, the evidence suggests otherwise.", q:"Écoute : quelle est la position de la personne sur le télétravail ?", opts:["Elle pense qu'il isole les gens","Elle reconnaît l'objection mais pense que les preuves la contredisent","Elle n'a pas d'avis","Elle veut interdire le télétravail"], correct:1, why:"« Some might argue… » présente l'objection ; « However, the evidence suggests otherwise » la réfute." },
      { cat:"oral", audio:"We'll go ahead with the project, provided that the budget is approved by Friday.", q:"Écoute : à quelle condition le projet sera-t-il lancé ?", opts:["Si l'équipe est d'accord","Quoi qu'il arrive","Si le budget est validé d'ici vendredi","Si le projet est reporté"], correct:2, why:"« provided that the budget is approved by Friday » = à condition que le budget soit approuvé d'ici vendredi." },
      { cat:"oral", audio:"I acknowledge that it's a costly investment. Nevertheless, the long-term benefits clearly outweigh the costs.", q:"Écoute : quelle est la conclusion de la personne ?", opts:["L'investissement est trop cher, il faut renoncer","Les bénéfices à long terme l'emportent sur le coût","Il faut attendre d'avoir plus d'informations","Le coût est négligeable"], correct:1, why:"Elle concède le coût (« I acknowledge… »), puis maintient sa position (« Nevertheless, the benefits outweigh the costs »)." },
      { cat:"oral", audio:"Unless we change our approach, nothing will improve.", q:"Écoute : que dit la personne ?", opts:["Rien ne s'améliorera si on ne change pas d'approche","Tout va s'améliorer de toute façon","Il ne faut surtout rien changer","L'approche actuelle fonctionne bien"], correct:0, why:"« Unless we change » = si nous ne changeons pas. « nothing will improve » = rien ne s'améliorera." },
      { cat:"comprehension", passage:"“Many cities are now banning cars from their historic centres. Supporters argue that this reduces pollution and makes streets safer for pedestrians. Some shop owners, however, claim that fewer drivers means fewer customers. Although this concern is understandable, studies from several European cities show that footfall actually increased after pedestrianisation. Therefore, the benefits appear to outweigh the drawbacks.”", q:"D'après le texte, comment l'auteur répond-il à l'objection des commerçants ?", opts:["Il l'ignore complètement","Il lui donne entièrement raison","Il la reconnaît puis la contredit avec des études","Il propose de rouvrir les centres aux voitures"], correct:2, why:"« Although this concern is understandable » (concession) + « studies… show that footfall actually increased » (réfutation par des preuves)." },
      { cat:"comprehension", passage:"“The company's profits fell sharply last year owing to rising energy prices. As a result, management froze all recruitment. Nevertheless, the board has approved a new training programme, provided that it doesn't exceed the current budget.”", q:"D'après le texte, à quelle condition le programme de formation est-il approuvé ?", opts:["S'il ne dépasse pas le budget actuel","Si les bénéfices remontent","Si l'entreprise recrute à nouveau","Si les prix de l'énergie baissent"], correct:0, why:"« provided that it doesn't exceed the current budget » = à condition qu'il ne dépasse pas le budget actuel. Les autres éléments sont des causes ou des conséquences, pas la condition." },
      { cat:"comprehension", passage:"“(rappel) In my view, learning a language as an adult is harder than as a child. That's why I think adults need more structure. Personally, I'm far more motivated now than I used to be at school, though.”", q:"D'après le texte, qu'est-ce qui a changé pour la personne depuis l'école ?", opts:["Elle trouve les langues plus faciles","Elle est beaucoup plus motivée aujourd'hui","Elle a arrêté d'apprendre","Elle préfère apprendre sans structure"], correct:1, why:"« I'm far more motivated now than I used to be at school » (rappel B1.7 : opinion et comparatifs ; B1.1 : « used to »)." },
      { cat:"comprehension", passage:"“(rappel) If I had more free time, I would volunteer at the local library. At the moment, I'm working six days a week, so it simply isn't possible. I'm going to ask my manager about reducing my hours next month.”", q:"D'après le texte, pourquoi la personne ne fait-elle pas de bénévolat en ce moment ?", opts:["Elle n'aime pas la bibliothèque","Son manager le lui interdit","Elle travaille six jours par semaine","Elle vient de déménager"], correct:2, why:"« I'm working six days a week, so it simply isn't possible » (rappel B1.6 : conditionnel et « going to » ; B1.1 : Present Continuous)." }
    ],
    PRON_VERBS: [
      {en:"Some might argue that it's too expensive. However, the evidence suggests otherwise.", fr:"Certains pourraient objecter que c'est trop cher. Cependant, les preuves suggèrent le contraire."},
      {en:"Although it's risky, the benefits clearly outweigh the costs.", fr:"Bien que ce soit risqué, les avantages l'emportent clairement sur les coûts."},
      {en:"Despite the high cost, the project was approved.", fr:"Malgré le coût élevé, le projet a été approuvé."},
      {en:"We'll go ahead provided that the budget is approved.", fr:"Nous nous lancerons à condition que le budget soit approuvé."},
      {en:"I acknowledge your point. Nevertheless, I still disagree.", fr:"Je reconnais ton argument. Néanmoins, je ne suis toujours pas d'accord."},
      {en:"All things considered, I'd conclude that it's worth it.", fr:"Tout bien considéré, je conclurais que ça en vaut la peine."}
    ],
    READING: [
      "Should companies allow their employees to work from home permanently? I would argue that they should, at least for part of the week.",
      "The main reason is that remote work gives people more control over their time, which tends to improve both wellbeing and productivity.",
      "For instance, a colleague of mine who used to spend three hours a day commuting now uses that time to exercise and rest, and her output has noticeably increased.",
      "Moreover, companies can reduce their office costs considerably, whereas employees save money on transport and lunches.",
      "Some might argue that working from home isolates people and damages team spirit.",
      "This concern is certainly valid: face-to-face contact matters, especially for new staff who are still learning the ropes.",
      "Nevertheless, a hybrid model — two or three days in the office — addresses this issue without sacrificing flexibility.",
      "Even though such a system requires careful planning, it has already proved successful in many organisations.",
      "Of course, it only works provided that managers learn to judge results rather than the number of hours people spend at their desks.",
      "All things considered, the benefits of flexible working clearly outweigh the drawbacks; therefore, it should become the norm rather than the exception."
    ],
    GLOSS: [
      {en:"output", fr:"production, rendement"},
      {en:"moreover", fr:"de plus, en outre"},
      {en:"to learn the ropes", fr:"apprendre les ficelles du métier"},
      {en:"to address (an issue)", fr:"traiter, répondre à (un problème)"},
      {en:"hybrid", fr:"hybride"},
      {en:"all things considered", fr:"tout bien considéré"}
    ],
    GRAMMAR1: {
      heading: "Concession et contraste : however, nevertheless, although, even though, despite, whereas",
      lede: "Au niveau B2, on ne se contente plus de « but » : on choisit le connecteur selon sa nature grammaticale (adverbe, conjonction ou préposition) et selon la nuance voulue (concession, opposition, contraste entre deux faits).",
      conj: [["Adverbe, nouvelle phrase →","However, / Nevertheless,","The plan is risky. Nevertheless, it's worth trying."],["Conjonction + sujet + verbe →","Although / Even though","Although it's risky, it's worth trying."],["Préposition + nom ou -ing →","Despite / In spite of","Despite the risk, it's worth trying."],["Contraste entre deux faits →","Whereas","I prefer the city, whereas she loves the countryside."]],
      ruleHtml: "📖 Trois familles, trois constructions. <b>However / Nevertheless</b> sont des adverbes : ils commencent une <b>nouvelle phrase</b> (ou suivent un point-virgule) et sont suivis d'une virgule. <b>Although / Even though / Whereas</b> sont des conjonctions : elles introduisent une <b>proposition complète</b> (sujet + verbe). <b>Despite / In spite of</b> sont des prépositions : elles sont suivies d'un <b>nom</b> ou d'un <b>-ing</b> — « <b>Despite</b> the rain », « <b>Despite</b> being tired ». Pour mettre une proposition après « despite », il faut « despite <b>the fact that</b> ».",
      dialogueLede: "Deux collègues débattent d'un nouveau projet :",
      dialogue: [
        {who:"them", en:"Honestly, I think the new system is far too expensive.", fr:"Franchement, je trouve le nouveau système beaucoup trop cher."},
        {who:"you", en:"I see your point. Nevertheless, even though it's costly, it'll save us time in the long run.", fr:"Je comprends ton argument. Néanmoins, même s'il est coûteux, il nous fera gagner du temps à long terme."}
      ],
      whyLabel: "Les trois pièges favoris des francophones",
      whyText: "1) <b>« Despite of »</b> n'existe pas : c'est « despite » OU « in spite of ». 2) <b>« However »</b> ne remplace pas « but » au milieu d'une phrase avec une simple virgule : « It's cheap, <b>but</b> it's slow » ou « It's cheap. <b>However,</b> it's slow. » 3) Après <b>although / even though</b>, pas de subjonctif : « bien qu'il <b>soit</b> tard » = « although it <b>is</b> late »."
    },
    GRAMMAR2: {
      heading: "Cause, conséquence et condition : therefore, consequently, as a result, owing to, provided that, unless",
      dialogueLede: "Une responsable présente une décision à son équipe :",
      dialogue: [
        {who:"them", en:"Owing to budget cuts, we've had to postpone the training. As a result, the launch will be delayed.", fr:"En raison de coupes budgétaires, nous avons dû reporter la formation. Par conséquent, le lancement sera retardé."},
        {who:"you", en:"I understand. Could we still go ahead in May, provided that the funding is confirmed?", fr:"Je comprends. Pourrait-on quand même se lancer en mai, à condition que le financement soit confirmé ?"}
      ],
      ruleHtml: "💭 <b>Cause</b> : <b>owing to / due to</b> + nom (« owing to budget cuts »). <b>Conséquence</b> : <b>therefore</b> (raisonnement logique, écrit), <b>consequently</b> (enchaînement des faits), <b>as a result</b> (neutre, oral et écrit) — tous trois en tête de phrase ou après un point-virgule. <b>Condition</b> : <b>provided that / as long as</b> (à condition que) et <b>unless</b> (à moins que), toujours suivis du <b>présent</b> pour parler du futur : « provided that the funding <b>is</b> confirmed », « unless we <b>act</b> now ».",
      whyLabel: "Secret English — anticiper la contre-objection",
      whyText: "Une argumentation anglophone convaincante suit presque toujours 5 étapes : <b>claim</b> (ma thèse) → <b>reason</b> (pourquoi) → <b>example</b> (un cas concret) → <b>counterargument</b> (« <b>Some might argue that…</b> ») → <b>conclusion</b> (« <b>However, …</b> / <b>All things considered, …</b> »). Le secret : présenter soi-même l'objection AVANT que l'interlocuteur ne la formule. On paraît juste, ouvert(e) d'esprit… et on garde le dernier mot."
    },
    REVIEW: [
      { q:"“I ___ (live) here since 2019.” — situation qui continue.", opts:["live","have lived"], correct:1, fb:"Present Perfect + « since » + point de départ ; jamais le présent simple. (rappel B1.12 — acquis B1.1)" },
      { q:"“By the time we arrived, the film ___.”", opts:["had already started","already started"], correct:0, fb:"Past Perfect : l'action est terminée AVANT un autre moment du passé. (rappel B1.12 — acquis B1.2)" },
      { q:"Quelle question indirecte est correcte ?", opts:["Could you tell me where is the station?","Could you tell me where the station is?"], correct:1, fb:"Dans une question indirecte, on remet l'ordre sujet + verbe : « where the station is ». (rappel B1.12 — acquis B1.3)" },
      { q:"“If I ___ more time, I would travel more.”", opts:["had","would have"], correct:0, fb:"Conditionnel : « if + prétérit, would + base ». Jamais « would » dans la partie « if ». (rappel B1.12 — acquis B1.6)" },
      { q:"“I'm really interested ___ history.”", opts:["in","on"], correct:0, fb:"Adjectif + préposition : « interested in », « good at », « afraid of ». (rappel B1.12 — acquis B1.8)" }
    ],
    CULTURE_NOTE: {
      icon: "🏛️",
      title: "Note culturelle — débattre à l'anglo-saxonne",
      html: "Dans les écoles et universités britanniques et américaines, le <b>débat</b> est une discipline à part entière : on apprend dès l'adolescence à défendre une position qu'on ne partage pas forcément, simplement pour s'exercer. D'où l'expression <b>« to play devil's advocate »</b> (se faire l'avocat du diable), très courante en réunion : « Just to play devil's advocate, what if… ? » Autre différence avec la France : on attaque l'<b>idée</b>, jamais la personne, et l'on commence souvent par valoriser l'argument adverse (« <b>I take your point, but…</b> », « <b>That's a fair point. However…</b> ») avant de le contredire. Un désaccord trop frontal (« You're wrong ») passe pour agressif ; un désaccord bien construit, lui, est très respecté."
    },
    NEXT_PREVIEW: "B2.2 (Nuance & Certainty) : nuancer ton propos selon ton degré de certitude — de « definitely » à « arguably » en passant par « probably », « to some extent » et les modaux de déduction — pour ne plus parler en termes absolus.",
    META: { vocabTitle:"Argumenter (B2.1)", lectureTitle:"Le télétravail, pour ou contre ?", bilanTitle:"Bravo, tu sais maintenant construire une argumentation complète et anticiper l'objection !", pronLabel:"Connecteurs de concession, de contraste, de cause et de condition", todayLede:"construire une argumentation complète en 5 étapes (claim, reason, example, counterargument, conclusion) avec les connecteurs avancés — premier palier du niveau B2, s'appuie sur tout le B1" }
  };

  // B2.2 — Nuance & Certainty — s'appuie sur B2.1 (argumentation) et B1.5 (modaux de probabilité)
  LESSONS_EXT[41] = {
    code: "B2.2", level: "B2",
    VOCAB: [
      {block:"L'échelle de la certitude", en:"Definitely", ipa:"/ˈdefɪnətli/", fr:"Sans aucun doute, c'est certain", note:"Le haut de l'échelle (≈ 100 %). Faux ami : ne veut jamais dire « définitivement » (= « for good », « permanently »)."},
      {block:"L'échelle de la certitude", en:"Undoubtedly", ipa:"/ʌnˈdaʊtɪdli/", fr:"Indubitablement, incontestablement", note:"Version plus soutenue de « definitely », surtout à l'écrit : « This is undoubtedly a turning point »."},
      {block:"L'échelle de la certitude", en:"To be bound to", ipa:"/tə bi baʊnd tuː/", fr:"Être forcément amené à, ne pas manquer de", note:"« It's bound to happen » = ça va forcément arriver. Certitude sur le futur, sans le ton solennel d'« inevitably »."},
      {block:"L'échelle de la certitude", en:"Probably", ipa:"/ˈprɒbəbli/", fr:"Probablement (≈ 80 %)", note:"Position : APRÈS « will » mais AVANT « won't » : « She'll probably come » / « She probably won't come »."},
      {block:"L'échelle de la certitude", en:"Likely", ipa:"/ˈlaɪkli/", fr:"Probable ; susceptible de", note:"Surtout adjectif en anglais britannique : « Prices are likely to rise », « It's likely that… ». « He will likely… » est surtout américain."},
      {block:"L'échelle de la certitude", en:"Presumably", ipa:"/prɪˈzjuːməbli/", fr:"Vraisemblablement, sans doute (je suppose)", note:"On déduit à partir de ce qu'on sait : « Presumably, they've already left. » Aucun rapport avec « présomptueux »."},
      {block:"L'échelle de la certitude", en:"Possibly", ipa:"/ˈpɒsəbli/", fr:"Peut-être, éventuellement (≈ 40 %)", note:"C'est la vraie traduction d'« éventuellement » (et non « eventually », rappel B1.2)."},
      {block:"L'échelle de la certitude", en:"Doubtful", ipa:"/ˈdaʊtfəl/", fr:"Douteux, peu probable", note:"« It's doubtful whether he'll agree » = il est peu probable qu'il accepte. Le bas de l'échelle, avant « unlikely »."},
      {block:"Nuancer un jugement", en:"Arguably", ipa:"/ˈɑːɡjuəbli/", fr:"Sans doute, on peut soutenir que", note:"Adverbe typiquement B2 : on avance une idée forte tout en admettant qu'elle se discute. « She's arguably the best player of her generation »."},
      {block:"Nuancer un jugement", en:"Apparently", ipa:"/əˈpærəntli/", fr:"Apparemment, à ce qu'il paraît", note:"Signale une information rapportée, qu'on n'a pas vérifiée soi-même : « Apparently, the meeting's been cancelled »."},
      {block:"Nuancer un jugement", en:"Partly", ipa:"/ˈpɑːtli/", fr:"En partie, partiellement", note:"« It's partly my fault » = c'est en partie ma faute. Évite de tout attribuer à une seule cause."},
      {block:"Nuancer un jugement", en:"Relatively", ipa:"/ˈrelətɪvli/", fr:"Relativement, assez", note:"« relatively cheap » = relativement bon marché (par comparaison avec autre chose)."},
      {block:"Nuancer un jugement", en:"Largely", ipa:"/ˈlɑːdʒli/", fr:"En grande partie, essentiellement", note:"Faux ami : ne veut PAS dire « largement » au sens de « amplement » (= « easily », « by far »). « largely due to… » = dû en grande partie à…"},
      {block:"Nuancer un jugement", en:"Potentially", ipa:"/pəˈtenʃəli/", fr:"Potentiellement", note:"« a potentially dangerous situation » : le risque existe, mais n'est pas encore réalisé."},
      {block:"Nuancer un jugement", en:"To some extent", ipa:"/tə sʌm ɪkˈstent/", fr:"Dans une certaine mesure", note:"Parfait pour un accord partiel : « To some extent, I agree. » Variantes : « to a certain extent », « to a large extent »."},
      {block:"Nuancer un jugement", en:"By and large", ipa:"/baɪ ən lɑːdʒ/", fr:"Dans l'ensemble, globalement", note:"Expression figée et naturelle, synonyme d'« on the whole »."},
      {block:"Éviter les absolus", en:"To tend to", ipa:"/tə tend tuː/", fr:"Avoir tendance à", note:"L'antidote à « always » : « Teenagers tend to sleep late » plutôt que « Teenagers always sleep late »."},
      {block:"Éviter les absolus", en:"Hardly ever", ipa:"/ˈhɑːdli ˈevə/", fr:"Presque jamais", note:"Remplace un « never » trop catégorique. Déjà négatif : jamais de « not » en plus."},
      {block:"Éviter les absolus", en:"The vast majority of", ipa:"/ðə vɑːst məˈdʒɒrəti əv/", fr:"La grande majorité de", note:"Plus juste que « everyone » : « The vast majority of users agree »."},
      {block:"Éviter les absolus", en:"Few / a few", ipa:"/fjuː/ /ə fjuː/", fr:"Peu de / quelques", note:"Piège : « few people came » = PEU de gens (sens négatif) ; « a few people came » = QUELQUES personnes (sens positif)."},
      {block:"Éviter les absolus", en:"In most cases", ipa:"/ɪn məʊst ˈkeɪsɪz/", fr:"Dans la plupart des cas", note:"Laisse la place aux exceptions — exactement l'esprit de la nuance B2."},
      {block:"Verbes clés (B2.2)", en:"To suggest", ipa:"/tə səˈdʒest/", fr:"Suggérer, laisser penser", note:"« The data suggests that… » = les données laissent penser que… Beaucoup plus prudent que « proves »."},
      {block:"Verbes clés (B2.2)", en:"To indicate", ipa:"/tu ˈɪndɪkeɪt/", fr:"Indiquer, montrer", note:"Registre écrit, fréquent dans les rapports et articles : « Recent studies indicate that… »."},
      {block:"Verbes clés (B2.2)", en:"To assume", ipa:"/tu əˈsjuːm/", fr:"Supposer, présumer", note:"Faux ami : « assumer » (une responsabilité) = « to take responsibility for ». « I assume you're tired » = je suppose que tu es fatigué(e)."},
      {block:"Verbes clés (B2.2)", en:"To doubt", ipa:"/tə daʊt/", fr:"Douter", note:"Le « b » est muet : /daʊt/. « I doubt it » = j'en doute ; « I doubt that he'll come » = je doute qu'il vienne."},
      {block:"Verbes clés (B2.2)", en:"To estimate", ipa:"/tu ˈestɪmeɪt/", fr:"Estimer, évaluer (un chiffre)", note:"Verbe /ˈestɪmeɪt/, nom « an estimate » /ˈestɪmət/ : la dernière syllabe change de son. Ne veut pas dire « estimer » au sens d'« apprécier quelqu'un »."},
      {block:"Verbes clés (B2.2)", en:"To appear", ipa:"/tu əˈpɪə/", fr:"Sembler, paraître", note:"Plus formel que « seem » (B1.1) : « It appears that the system has failed »."}
    ],
    MEM_WORDS: [2,5,8,14,16,23],
    MINI_CHECKS: [
      { q:"Elle ne répond pas au téléphone. Tu en es presque sûr(e) : “She ___ be asleep.”", opts:["must","can't","should"], correct:0, fb:"« must » = déduction quasi certaine (≈ 95 %). « can't » exprimerait l'impossibilité." },
      { q:"“He ___ have seen us — he had his back to us the whole time.” — c'est impossible.", opts:["must","might","can't"], correct:2, fb:"« can't have + participe passé » = c'est impossible (dans le passé). Jamais « mustn't have » pour une déduction." },
      { q:"Où placer « probably » ? “She ___ come tonight.” (négatif)", opts:["won't probably","probably won't","won't be probably"], correct:1, fb:"Au négatif, « probably » se place AVANT « won't ». À l'affirmatif, après « will » : « She'll probably come »." },
      { q:"Quelle phrase est la plus nuancée ?", opts:["Everyone hates Mondays.","Most people tend to find Mondays difficult.","Nobody likes Mondays."], correct:1, fb:"« most people » + « tend to » : on généralise sans prétendre que c'est vrai pour tout le monde." }
    ],
    ROUNDS: [
      { bank:["train","the","missed","have","must","She","."], answer:"she must have missed the train .", display:"She must have missed the train.", fr:"Elle a dû rater le train." },
      { bank:["already","finished","have","can't","He","."], answer:"he can't have finished already .", display:"He can't have finished already.", fr:"Il ne peut pas avoir déjà fini." },
      { bank:["year","next","rise","to","likely","are","Prices","."], answer:"prices are likely to rise next year .", display:"Prices are likely to rise next year.", fr:"Les prix vont probablement augmenter l'année prochaine." },
      { bank:["you","with","agree","I","extent","some","To","."], answer:"to some extent i agree with you .", display:"To some extent, I agree with you.", fr:"Dans une certaine mesure, je suis d'accord avec toi." },
      { bank:["online","time","more","spend","to","tend","people","Young","."], answer:"young people tend to spend more time online .", display:"Young people tend to spend more time online.", fr:"Les jeunes ont tendance à passer plus de temps en ligne." },
      { bank:["solution","best","the","arguably","is","This","."], answer:"this is arguably the best solution .", display:"This is arguably the best solution.", fr:"C'est sans doute la meilleure solution." },
      { bank:["cancelled","been","has","meeting","the","Apparently","."], answer:"apparently the meeting has been cancelled .", display:"Apparently, the meeting has been cancelled.", fr:"Apparemment, la réunion a été annulée." },
      { bank:["planning","poor","to","due","partly","is","problem","The","."], answer:"the problem is partly due to poor planning .", display:"The problem is partly due to poor planning.", fr:"Le problème est en partie dû à une mauvaise planification." },
      { bank:["later","or","sooner","happen","to","bound","It's","."], answer:"it's bound to happen sooner or later .", display:"It's bound to happen sooner or later.", fr:"Ça va forcément arriver tôt ou tard." },
      { bank:["tonight","come","won't","probably","She","."], answer:"she probably won't come tonight .", display:"She probably won't come tonight.", fr:"Elle ne viendra probablement pas ce soir." }
    ],
    QUIZ: [
      { cat:"ecrit", q:"Les lumières sont éteintes et la voiture n'est plus là. “They ___ gone out.”", opts:["must have","can't have","should have"], correct:0, why:"Déduction quasi certaine sur le passé : « must have + participe passé ». « should have » exprimerait un reproche (ils auraient dû)." },
      { cat:"ecrit", q:"“I'm not sure where Tom is. He ___ be in a meeting, or he ___ be at lunch.”", opts:["must / must","might / could","can't / can't"], correct:1, why:"Deux hypothèses possibles, sans certitude : « might » et « could » (≈ 50 %). « must » supposerait une seule certitude." },
      { cat:"ecrit", q:"“You ___ be hungry already — you've just had a huge lunch!”", opts:["mustn't","can't","don't have to"], correct:1, why:"Impossibilité logique = « can't ». « mustn't » exprime une INTERDICTION, jamais une déduction : piège classique." },
      { cat:"ecrit", q:"Quelle phrase est correcte en anglais britannique standard ?", opts:["Prices are likely to rise.","Prices likely are to rise.","Prices are likely rising to."], correct:0, why:"« be likely to + base verbale » = il est probable que. « will likely » existe surtout en anglais américain." },
      { cat:"ecrit", q:"Que veut dire « The rise in prices is largely due to energy costs » ?", opts:["La hausse est largement insuffisante","La hausse est due en grande partie aux coûts de l'énergie","La hausse n'a rien à voir avec l'énergie"], correct:1, why:"Faux ami : « largely » = en grande partie, essentiellement — pas « amplement »." },
      { cat:"ecrit", q:"“___ people came to the meeting, so it was cancelled.” — très peu de monde.", opts:["A few","Few","A lot of"], correct:1, why:"« Few » (sans « a ») a un sens négatif : trop peu. « A few » = quelques-uns, sens plutôt positif." },
      { cat:"ecrit", q:"Laquelle de ces phrases respecte la mission « aucun absolu » ?", opts:["Politicians never tell the truth.","Everybody knows that sugar is bad.","Many experts would argue that sugar is largely to blame."], correct:2, why:"« Many experts » + « would argue » + « largely » : trois marqueurs de nuance. Les deux autres utilisent « never » et « everybody »." },
      { cat:"ecrit", q:"Comment dit-on « je suppose que tu es au courant » ?", opts:["I assume you're aware.","I take responsibility that you're aware.","I'm assuming of your knowledge."], correct:0, why:"« to assume » = supposer. Faux ami : « assumer une responsabilité » = « to take responsibility »." },
      { cat:"ecrit", q:"Quel adverbe signale une information entendue, non vérifiée ?", opts:["Definitely","Apparently","Undoubtedly"], correct:1, why:"« Apparently » = à ce qu'il paraît. « Definitely » et « undoubtedly » expriment au contraire une certitude." },
      { cat:"ecrit", q:"Classe du plus certain au moins certain : definitely / possibly / probably / doubtful.", opts:["probably → definitely → doubtful → possibly","definitely → probably → possibly → doubtful","definitely → possibly → probably → doubtful"], correct:1, why:"≈ 100 % (definitely) → ≈ 80 % (probably) → ≈ 40 % (possibly) → peu probable (doubtful)." },
      { cat:"oral", audio:"She must have forgotten about the meeting — she's never late.", q:"Écoute : que pense la personne ?", opts:["Qu'elle a sûrement oublié la réunion","Qu'elle est toujours en retard","Qu'elle a démissionné","Qu'elle ne peut pas avoir oublié"], correct:0, why:"« must have forgotten » = déduction quasi certaine : elle a dû oublier." },
      { cat:"oral", audio:"To some extent, I agree with you, but I think the problem is partly due to poor management.", q:"Écoute : quelle est la position de la personne ?", opts:["Totalement d'accord","Totalement en désaccord","D'accord en partie, avec une nuance sur la cause","Sans opinion"], correct:2, why:"« To some extent » (accord partiel) + « partly due to » (une cause parmi d'autres)." },
      { cat:"oral", audio:"Apparently, the new manager is starting next week, but nothing has been confirmed yet.", q:"Écoute : à quel point l'information est-elle sûre ?", opts:["C'est officiel et confirmé","C'est une rumeur, rien n'est encore confirmé","Le manager a déjà commencé","Le poste a été supprimé"], correct:1, why:"« Apparently » + « nothing has been confirmed yet » = information rapportée, non confirmée." },
      { cat:"oral", audio:"He can't have sent the email — his laptop was broken all day.", q:"Écoute : que conclut la personne ?", opts:["Il a sûrement envoyé l'e-mail","Il a peut-être envoyé l'e-mail","Il est impossible qu'il ait envoyé l'e-mail","Il enverra l'e-mail demain"], correct:2, why:"« can't have sent » = impossibilité dans le passé, justifiée par l'ordinateur en panne." },
      { cat:"comprehension", passage:"“Recent studies suggest that people who read regularly tend to sleep better. However, the link is arguably more complex than it appears: readers may simply have calmer lifestyles to begin with. By and large, researchers agree that reading before bed is beneficial, but few would claim it is a cure for insomnia.”", q:"D'après le texte, que pensent les chercheurs ?", opts:["La lecture guérit l'insomnie","La lecture est globalement bénéfique, sans être un remède miracle","La lecture empêche de dormir","Il n'existe aucun lien entre lecture et sommeil"], correct:1, why:"« By and large… reading before bed is beneficial, but few would claim it is a cure » — « few » = très peu (sens négatif)." },
      { cat:"comprehension", passage:"“The delay was partly caused by the storm, but it was largely due to a technical fault that the airline had presumably known about for weeks. Passengers are likely to receive compensation, although the exact amount is still doubtful.”", q:"D'après le texte, quelle est la cause PRINCIPALE du retard ?", opts:["La tempête","Une panne technique","Une grève","Les passagers"], correct:1, why:"« partly caused by the storm » (en partie) mais « largely due to a technical fault » (en grande partie) : la cause principale est la panne." },
      { cat:"comprehension", passage:"“(rappel) Some might argue that public transport should be free. Although this would be expensive, it would reduce traffic considerably. Therefore, I believe it's worth trying, provided that the government invests in more buses first.”", q:"D'après le texte, à quelle condition l'auteur soutient-il la gratuité ?", opts:["Si les tickets restent chers","Si le gouvernement investit d'abord dans plus de bus","Si le trafic augmente","Si personne ne s'y oppose"], correct:1, why:"« provided that the government invests in more buses first » (rappel B2.1 : connecteurs de concession et de condition)." },
      { cat:"comprehension", passage:"“(rappel) The report was well researched. Nevertheless, its conclusion was undermined by a lack of evidence, whereas the previous report had been backed up by detailed figures.”", q:"D'après le texte, quelle était la faiblesse du rapport ?", opts:["Il manquait de preuves pour appuyer sa conclusion","Il était trop long","Il contenait trop de chiffres","Il n'avait pas été relu"], correct:0, why:"« its conclusion was undermined by a lack of evidence » (rappel B2.1 : « nevertheless », « whereas », « undermine », « back up »)." }
    ],
    PRON_VERBS: [
      {en:"She must have missed the train.", fr:"Elle a dû rater le train."},
      {en:"He can't have finished already.", fr:"Il ne peut pas avoir déjà fini."},
      {en:"They might have got lost on the way.", fr:"Ils se sont peut-être perdus en chemin."},
      {en:"Prices are likely to rise next year.", fr:"Les prix vont probablement augmenter l'année prochaine."},
      {en:"To some extent, I agree with you.", fr:"Dans une certaine mesure, je suis d'accord avec toi."},
      {en:"It's arguably the best decision we've made.", fr:"C'est sans doute la meilleure décision que nous ayons prise."}
    ],
    READING: [
      "It is often said that young people spend too much time on their phones, but the reality is arguably more nuanced than that.",
      "Recent surveys suggest that teenagers tend to be online for around six hours a day, although the figure varies considerably from one country to another.",
      "Much of that time, however, is spent on activities that are not necessarily harmful, such as messaging friends or watching tutorials.",
      "Researchers generally agree that the problem is not screen time as such, but rather what people are doing on their screens.",
      "Heavy use of social media, for instance, appears to be linked to anxiety in some users, yet the evidence is still relatively limited.",
      "It is also doubtful whether banning phones in schools would, on its own, solve the issue.",
      "Some teachers report that pupils seem calmer without their devices, whereas others have noticed hardly any difference.",
      "Presumably, the results depend largely on how such rules are introduced and explained.",
      "By and large, the most sensible approach is probably to teach young people how to use technology wisely rather than simply forbidding it.",
      "After all, the vast majority of them will need these tools in their future careers, so learning to manage them is bound to be useful."
    ],
    GLOSS: [
      {en:"nuanced", fr:"nuancé(e)"},
      {en:"survey", fr:"enquête, sondage"},
      {en:"tutorial", fr:"tutoriel"},
      {en:"as such", fr:"en soi, en tant que tel"},
      {en:"to forbid", fr:"interdire"},
      {en:"sensible", fr:"raisonnable, sensé(e) (faux ami !)"}
    ],
    GRAMMAR1: {
      heading: "Les modaux de déduction : must / might / could / can't (+ have + participe passé)",
      lede: "Pour exprimer un degré de certitude sur une situation présente ou passée, l'anglais utilise des modaux plutôt que des adverbes. Au présent : modal + base verbale. Au passé : modal + have + participe passé.",
      conj: [["Quasi certain (≈ 95 %) →","must (have + p.p.)","She must be tired. / She must have forgotten."],["Possible (≈ 50 %) →","might / may / could (have + p.p.)","He might be stuck in traffic. / He could have missed it."],["Impossible (≈ 0 %) →","can't / couldn't (have + p.p.)","That can't be true. / He can't have seen us."],["Attente logique →","should (+ base)","The parcel should arrive tomorrow."]],
      ruleHtml: "📖 Au <b>présent</b> : « She <b>must be</b> at home » (j'en suis quasi sûr(e)). Au <b>passé</b> : « She <b>must have left</b> early » (elle a dû partir tôt). Le contraire de « must » pour une déduction n'est <b>PAS</b> « mustn't » (qui exprime une interdiction), mais <b>can't</b> : « He <b>can't have finished</b> already » = il ne peut pas avoir déjà fini. Attention aussi : « could have » peut signifier une possibilité passée (« it could have been worse » = ça aurait pu être pire).",
      dialogueLede: "Deux collègues attendent une réunion qui ne commence pas :",
      dialogue: [
        {who:"them", en:"Where's Sarah? She's never late for meetings.", fr:"Où est Sarah ? Elle n'est jamais en retard aux réunions."},
        {who:"you", en:"She might be stuck in traffic — or she must have forgotten, since it was moved to today.", fr:"Elle est peut-être coincée dans les bouchons — ou alors elle a dû oublier, vu que la réunion a été déplacée à aujourd'hui."}
      ],
      whyLabel: "Le piège « mustn't » et la traduction de « devoir »",
      whyText: "En français, « devoir » sert à tout : obligation (« tu dois partir ») ET déduction (« il doit être malade »). En anglais, on sépare les deux. Pour la déduction négative, <b>« can't »</b> et jamais « mustn't » : « He <b>can't</b> be ill, I saw him jogging » (il ne peut pas être malade). Et pour « il a dû oublier » (déduction), c'est « he <b>must have</b> forgotten », pas « he had to forget » (qui voudrait dire « il a été obligé d'oublier » !)."
    },
    GRAMMAR2: {
      heading: "Nuancer son propos : adverbes de certitude, tend to, be likely to, to some extent",
      dialogueLede: "Un débat entre amis sur les réseaux sociaux :",
      dialogue: [
        {who:"them", en:"Social media is destroying young people's lives. Everyone knows that.", fr:"Les réseaux sociaux détruisent la vie des jeunes. Tout le monde le sait."},
        {who:"you", en:"To some extent, maybe — but most studies suggest it largely depends on how they use it.", fr:"Dans une certaine mesure, peut-être — mais la plupart des études laissent penser que ça dépend en grande partie de la façon dont ils les utilisent."}
      ],
      ruleHtml: "💭 Cinq outils pour nuancer : 1) un <b>adverbe de certitude</b> bien placé (« She'll <b>probably</b> agree » / « She <b>probably</b> won't agree ») ; 2) <b>tend to</b> au lieu de « always » (« People <b>tend to</b> overestimate… ») ; 3) <b>be likely / unlikely / bound to</b> + base verbale ; 4) un <b>limitateur</b> : <b>partly, largely, to some extent, relatively</b> ; 5) un verbe prudent : <b>suggest, indicate, appear</b> au lieu de « prove » (« The data <b>suggests</b> that… »).",
      whyLabel: "Secret English — la mission « zéro absolu »",
      whyText: "En anglais soutenu, les phrases absolues (<b>always, never, everyone, nobody</b>) sonnent vite naïves ou agressives. Un locuteur B2 les remplace presque automatiquement : « always » → <b>tend to / in most cases</b> ; « never » → <b>hardly ever / rarely</b> ; « everyone » → <b>the vast majority of / most people</b> ; « nobody » → <b>very few people</b>. Mission du palier : exprimer ton opinion sur un sujet qui te tient à cœur sans UN SEUL de ces quatre mots."
    },
    REVIEW: [
      { q:"“___ the rain, the match went ahead.”", opts:["Despite","Although"], correct:0, fb:"« Despite » + nom ; « although » exigerait une proposition complète. (rappel B2.1)" },
      { q:"“The plan is risky. ___, it's worth trying.”", opts:["Whereas","Nevertheless"], correct:1, fb:"« Nevertheless » ouvre une nouvelle phrase pour maintenir une position malgré un obstacle. (rappel B2.1)" },
      { q:"“We'll sign the contract provided that they ___ the price.”", opts:["will lower","lower"], correct:1, fb:"Après « provided that », le présent pour parler du futur. (rappel B2.1)" },
      { q:"Que veut dire « evidence » ?", opts:["Des preuves","Une évidence"], correct:0, fb:"Faux ami : « evidence » = preuves (indénombrable). (rappel B2.1)" },
      { q:"Comment présenter une objection pour mieux la réfuter ?", opts:["Some might argue that…","Everybody knows that…"], correct:0, fb:"« Some might argue that…, however… » : la formule clé du Secret English. (rappel B2.1)" }
    ],
    CULTURE_NOTE: {
      icon: "🫖",
      title: "Note culturelle — l'art britannique de l'euphémisme",
      html: "Les Britanniques sont champions de l'<b>understatement</b> (l'euphémisme, la litote) : ils nuancent tellement leurs propos qu'il faut parfois « décoder ». « <b>I'm not sure that's entirely right</b> » signifie souvent « je pense que c'est faux ». « <b>That's quite interesting</b> » peut vouloir dire « ça ne m'intéresse pas vraiment », selon le ton. « <b>Not bad</b> » est souvent un vrai compliment ! À l'inverse, les Américains ont tendance à être plus directs et plus enthousiastes (« <b>That's awesome!</b> »). Retenir ce décalage évite bien des malentendus : face à un Britannique, écoute la nuance autant que les mots ; et dans tes propres propos, un peu de retenue (« <b>I'd say…</b> », « <b>I tend to think…</b> ») sera toujours bien perçue."
    },
    NEXT_PREVIEW: "B2.3 (Register Master) : adapter ton anglais à ton interlocuteur — ami, collègue, supérieur, administration, client — en formulant la même demande en registre casual, neutral, polite et formal.",
    META: { vocabTitle:"Nuance et certitude (B2.2)", lectureTitle:"Les jeunes et les écrans", bilanTitle:"Bravo, tu sais maintenant nuancer ton propos et doser ta certitude !", pronLabel:"Modaux de déduction et adverbes de certitude", todayLede:"nuancer ton propos selon ton degré de certitude (certainty → probability → possibility → doubt) et parler sans termes absolus — s'appuie sur B2.1 (argumentation) et B1.5 (modaux)" }
  };

  // B2.3 — Register Master — s'appuie sur B2.2 (nuance) et B1.4 / B1.5 (demandes polies, anglais au travail)
  LESSONS_EXT[42] = {
    code: "B2.3", level: "B2",
    VOCAB: [
      {block:"Une même demande, quatre registres", en:"Can you help me out?", ipa:"/kən juː help miː aʊt/", fr:"Tu peux me dépanner ? (casual)", note:"Registre familier : entre amis, en famille, avec un collègue proche. Le verbe à particule « help out » fait très naturel."},
      {block:"Une même demande, quatre registres", en:"Could you help me?", ipa:"/kʊd juː help miː/", fr:"Pourriez-vous m'aider ? (neutral)", note:"Registre neutre : convient à presque tout le monde, un inconnu dans la rue comme un collègue."},
      {block:"Une même demande, quatre registres", en:"Would you mind helping me?", ipa:"/wʊd juː maɪnd ˈhelpɪŋ miː/", fr:"Cela vous dérangerait-il de m'aider ? (polite)", note:"Toujours suivi du -ing. Piège : pour dire oui, on répond « No, not at all » (= non, ça ne me dérange pas du tout)."},
      {block:"Une même demande, quatre registres", en:"I would appreciate your assistance.", ipa:"/aɪ wʊd əˈpriːʃieɪt jɔːr əˈsɪstəns/", fr:"Je vous serais reconnaissant(e) de votre aide. (formal)", note:"Registre formel : e-mail à une administration, un supérieur hiérarchique éloigné, un client important. Sans contraction."},
      {block:"Une même demande, quatre registres", en:"I was wondering if you could…", ipa:"/aɪ wəz ˈwʌndərɪŋ ɪf juː kʊd/", fr:"Je me demandais si vous pourriez…", note:"Le passé et le « -ing » créent une distance polie : on demande sans imposer. Très utilisé au travail."},
      {block:"Une même demande, quatre registres", en:"Would it be possible to…?", ipa:"/wʊd ɪt bi ˈpɒsəbl tuː/", fr:"Serait-il possible de… ?", note:"Impersonnel, donc très diplomate : on ne met pas directement la personne en cause. Idéal avec un client ou un service."},
      {block:"Mots courants → mots formels", en:"To request", ipa:"/tə rɪˈkwest/", fr:"Demander, solliciter (formel)", note:"Version formelle de « ask for ». Sans préposition : « to request information », jamais « request for information » (mais le NOM : « a request for »)."},
      {block:"Mots courants → mots formels", en:"To require", ipa:"/tə rɪˈkwaɪə/", fr:"Nécessiter, exiger (formel)", note:"Version formelle de « need » : « Applicants are required to… » = les candidats doivent…"},
      {block:"Mots courants → mots formels", en:"To assist", ipa:"/tu əˈsɪst/", fr:"Aider, assister (formel)", note:"Formel pour « help ». Faux ami : « assister à une réunion » = « to ATTEND a meeting », jamais « assist »."},
      {block:"Mots courants → mots formels", en:"To obtain", ipa:"/tu əbˈteɪn/", fr:"Obtenir (formel)", note:"Là où l'on dirait « get » à l'oral : « to obtain a visa » (formulaire officiel) vs « to get a visa » (conversation)."},
      {block:"Mots courants → mots formels", en:"To purchase", ipa:"/tə ˈpɜːtʃəs/", fr:"Acheter, faire l'acquisition de (formel)", note:"Formel pour « buy », fréquent dans les conditions de vente. Prononciation : /ˈpɜːtʃəs/, pas « pur-chaise »."},
      {block:"Mots courants → mots formels", en:"To inform", ipa:"/tu ɪnˈfɔːm/", fr:"Informer, faire savoir (formel)", note:"Formel pour « let know » : « We regret to inform you that… » = nous avons le regret de vous informer que…"},
      {block:"L'e-mail formel", en:"Dear Sir or Madam,", ipa:"/dɪə sɜːr ɔː ˈmædəm/", fr:"Madame, Monsieur,", note:"Quand on ne connaît pas le nom du destinataire. Si on connaît le nom : « Dear Ms Taylor, » (« Ms » neutre, sans point en anglais britannique)."},
      {block:"L'e-mail formel", en:"I am writing to…", ipa:"/aɪ æm ˈraɪtɪŋ tuː/", fr:"Je vous écris afin de…", note:"L'ouverture classique d'un e-mail formel : on annonce tout de suite l'objet (« to enquire about », « to apply for », « to complain about »)."},
      {block:"L'e-mail formel", en:"Please find attached…", ipa:"/pliːz faɪnd əˈtætʃt/", fr:"Veuillez trouver ci-joint…", note:"Formule figée des e-mails professionnels. En neutre : « I've attached… »."},
      {block:"L'e-mail formel", en:"At your earliest convenience", ipa:"/ət jɔːr ˈɜːliɪst kənˈviːniəns/", fr:"Dès que possible, dans les meilleurs délais", note:"Version très polie d'« as soon as possible » (« ASAP » étant réservé aux échanges internes décontractés)."},
      {block:"L'e-mail formel", en:"I look forward to hearing from you.", ipa:"/aɪ lʊk ˈfɔːwəd tə ˈhɪərɪŋ frəm juː/", fr:"Dans l'attente de votre réponse.", note:"« to » est ici une préposition : donc « to HEARING », jamais « to hear ». Version neutre : « I'm looking forward to… »."},
      {block:"L'e-mail formel", en:"Yours faithfully / Yours sincerely", ipa:"/jɔːz ˈfeɪθfəli/ /jɔːz sɪnˈsɪəli/", fr:"Veuillez agréer… (formule finale)", note:"Règle britannique : « faithfully » après « Dear Sir or Madam », « sincerely » après un nom. En anglais américain : « Sincerely, » dans les deux cas."},
      {block:"L'anglais casual", en:"Cheers", ipa:"/tʃɪəz/", fr:"Merci ! / Salut ! (familier britannique)", note:"Au Royaume-Uni, « cheers » sert autant à remercier qu'à trinquer ou à dire au revoir. Rare aux États-Unis dans ce sens."},
      {block:"L'anglais casual", en:"No worries", ipa:"/nəʊ ˈwʌriz/", fr:"Pas de souci, de rien", note:"Réponse décontractée à « thanks » ou « sorry ». En formel : « You're welcome » / « Not at all »."},
      {block:"L'anglais casual", en:"Gonna / Wanna", ipa:"/ˈɡɒnə/ /ˈwɒnə/", fr:"Contractions orales de « going to » / « want to »", note:"À reconnaître à l'oral et à utiliser dans les messages entre amis — mais JAMAIS dans un écrit professionnel."},
      {block:"L'anglais casual", en:"To catch up", ipa:"/tə kætʃ ʌp/", fr:"Prendre des nouvelles, se retrouver pour discuter", note:"« Let's catch up soon! » = on se voit bientôt pour se raconter nos vies. Aussi : « to catch up on work » = rattraper son retard."},
      {block:"Verbes clés (B2.3)", en:"To apologise", ipa:"/tu əˈpɒlədʒaɪz/", fr:"S'excuser, présenter ses excuses", note:"« apologise FOR something » : « We apologise for the delay ». Orthographe US : « apologize ». Casual : « Sorry about that »."},
      {block:"Verbes clés (B2.3)", en:"To appreciate", ipa:"/tu əˈpriːʃieɪt/", fr:"Être reconnaissant(e) de, apprécier", note:"« I'd appreciate it if you could… » = je vous serais reconnaissant(e) de bien vouloir… Ne pas oublier le « it »."},
      {block:"Verbes clés (B2.3)", en:"To confirm", ipa:"/tə kənˈfɜːm/", fr:"Confirmer", note:"« Could you please confirm receipt? » = pourriez-vous confirmer la bonne réception ?"},
      {block:"Verbes clés (B2.3)", en:"To enquire", ipa:"/tu ɪnˈkwaɪə/", fr:"Se renseigner, demander des informations (formel)", note:"« I am writing to enquire about… ». Orthographe américaine : « inquire ». Faux ami : ne veut pas dire « enquêter » (= « investigate »)."}
    ],
    MEM_WORDS: [2,4,6,14,16,22],
    MINI_CHECKS: [
      { q:"Quelle formulation est la plus FORMELLE ?", opts:["Can you send me the file?","I would appreciate it if you could send me the file.","Send me the file, will you?"], correct:1, fb:"« I would appreciate it if you could… » : conditionnel, distance, aucune contraction — registre formel." },
      { q:"“Would you mind ___ the window?”", opts:["to open","opening","open"], correct:1, fb:"« Would you mind » est toujours suivi du -ing." },
      { q:"On te demande : “Would you mind waiting a moment?” Tu acceptes volontiers. Tu réponds :", opts:["Yes, I would.","No, not at all.","Yes, I mind."], correct:1, fb:"« mind » = être dérangé. Répondre « No, not at all » = non, ça ne me dérange pas → donc oui, j'accepte." },
      { q:"Quel est l'équivalent formel de « to ask for » ?", opts:["To request","To require","To enquire for"], correct:0, fb:"« To request » = demander, solliciter (formel). « To require » = nécessiter." }
    ],
    ROUNDS: [
      { bank:["out","me","help","you","Can","?"], answer:"can you help me out ?", display:"Can you help me out?", fr:"Tu peux me dépanner ?" },
      { bank:["me","helping","mind","you","Would","?"], answer:"would you mind helping me ?", display:"Would you mind helping me?", fr:"Cela vous dérangerait-il de m'aider ?" },
      { bank:["me","help","could","you","if","wondering","was","I","."], answer:"i was wondering if you could help me .", display:"I was wondering if you could help me.", fr:"Je me demandais si vous pourriez m'aider." },
      { bank:["assistance","your","appreciate","would","I","."], answer:"i would appreciate your assistance .", display:"I would appreciate your assistance.", fr:"Je vous serais reconnaissant(e) de votre aide." },
      { bank:["meeting","the","reschedule","to","possible","be","it","Would","?"], answer:"would it be possible to reschedule the meeting ?", display:"Would it be possible to reschedule the meeting?", fr:"Serait-il possible de reprogrammer la réunion ?" },
      { bank:["documents","requested","the","attached","find","Please","."], answer:"please find attached the requested documents .", display:"Please find attached the requested documents.", fr:"Veuillez trouver ci-joint les documents demandés." },
      { bank:["you","from","hearing","to","forward","look","I","."], answer:"i look forward to hearing from you .", display:"I look forward to hearing from you.", fr:"Dans l'attente de votre réponse." },
      { bank:["position","the","about","enquire","to","writing","am","I","."], answer:"i am writing to enquire about the position .", display:"I am writing to enquire about the position.", fr:"Je vous écris afin de me renseigner sur le poste." },
      { bank:["caused","inconvenience","any","for","apologise","We","."], answer:"we apologise for any inconvenience caused .", display:"We apologise for any inconvenience caused.", fr:"Nous vous prions de nous excuser pour la gêne occasionnée." },
      { bank:["out","me","helping","for","Cheers","."], answer:"cheers for helping me out .", display:"Cheers for helping me out.", fr:"Merci de m'avoir dépanné(e)." }
    ],
    QUIZ: [
      { cat:"ecrit", q:"Tu écris au service des visas d'une ambassade. Quelle ouverture choisir ?", opts:["Hey there,","Dear Sir or Madam,","Hi guys,"], correct:1, why:"Destinataire inconnu + contexte administratif = « Dear Sir or Madam, » (registre formel)." },
      { cat:"ecrit", q:"“I look forward to ___ from you.”", opts:["hear","hearing","be hearing"], correct:1, why:"Dans « look forward to », « to » est une préposition : elle est suivie d'un -ing." },
      { cat:"ecrit", q:"Après « Dear Sir or Madam, », quelle formule finale utilise-t-on en anglais britannique ?", opts:["Yours sincerely,","Cheers,","Yours faithfully,"], correct:2, why:"« Yours faithfully » quand on ne connaît pas le nom ; « Yours sincerely » quand on a écrit « Dear Mr/Ms + nom »." },
      { cat:"ecrit", q:"Classe du plus familier au plus formel.", opts:["Could you help me? → Can you help me out? → I would appreciate your assistance.","Can you help me out? → Could you help me? → I would appreciate your assistance.","I would appreciate your assistance. → Can you help me out? → Could you help me?"], correct:1, why:"Casual (« help me out ») → neutral (« could ») → formal (« appreciate your assistance »)." },
      { cat:"ecrit", q:"Quel est l'équivalent formel de « We need your signature » ?", opts:["We require your signature.","We wanna have your signature.","We request for your signature."], correct:0, why:"« require » = formel pour « need ». « request for » est incorrect avec le verbe (« request your signature »), et « wanna » est familier." },
      { cat:"ecrit", q:"Comment dit-on « j'ai assisté à la conférence » ?", opts:["I assisted the conference.","I attended the conference.","I assisted to the conference."], correct:1, why:"Faux ami : « assister à » = « to attend ». « to assist » = aider." },
      { cat:"ecrit", q:"Quelle phrase ne convient PAS dans un e-mail à un client ?", opts:["Please find attached the invoice.","I'm gonna send you the invoice tomorrow.","Could you please confirm receipt?"], correct:1, why:"« gonna » est une forme orale familière, à bannir de tout écrit professionnel : « I will send you… »." },
      { cat:"ecrit", q:"“I'd appreciate ___ if you could reply by Friday.”", opts:["it","that","—  (rien)"], correct:0, why:"« I'd appreciate IT if you could… » : le « it » est obligatoire, sinon le verbe n'a pas de complément." },
      { cat:"ecrit", q:"Quelle phrase est la plus diplomate pour demander un délai à un supérieur ?", opts:["I need more time.","Give me until Monday.","Would it be possible to have until Monday?"], correct:2, why:"« Would it be possible… ? » : question impersonnelle au conditionnel, qui laisse la décision à l'autre." },
      { cat:"ecrit", q:"Que veut dire « to enquire about something » ?", opts:["Enquêter sur quelque chose","Se renseigner sur quelque chose","Se plaindre de quelque chose"], correct:1, why:"« to enquire » = demander des informations. « enquêter » = « to investigate »." },
      { cat:"oral", audio:"Hey, can you help me out with this box? It's really heavy.", q:"Écoute : à qui la personne parle-t-elle probablement ?", opts:["À un juge","À un ami ou un proche","Au directeur d'une banque","À un client important"], correct:1, why:"« Hey » + « help me out » = registre casual, réservé aux proches." },
      { cat:"oral", audio:"I was wondering if you could possibly send me the report before the meeting.", q:"Écoute : quel est le ton de la demande ?", opts:["Agressif","Très familier","Poli et indirect","Menaçant"], correct:2, why:"« I was wondering if you could possibly… » : passé + « if » + « possibly » = demande polie et indirecte." },
      { cat:"oral", audio:"We regret to inform you that your application has not been successful on this occasion.", q:"Écoute : que signifie ce message ?", opts:["La candidature est acceptée","La candidature est refusée","La candidature est en cours d'examen","Il manque des documents"], correct:1, why:"« We regret to inform you… has not been successful » = formule formelle de refus." },
      { cat:"oral", audio:"Would you mind waiting here for a moment? — No, not at all.", q:"Écoute : la deuxième personne accepte-t-elle d'attendre ?", opts:["Non, elle refuse","Oui, sans problème","Elle ne répond pas vraiment","Elle part immédiatement"], correct:1, why:"« No, not at all » = non, ça ne me dérange pas du tout → donc elle accepte." },
      { cat:"comprehension", passage:"“Dear Ms Patel, I am writing to enquire about the availability of your conference room on 14 May. We would require space for approximately forty participants, as well as audio-visual equipment. I would be grateful if you could confirm the rate at your earliest convenience. I look forward to hearing from you. Yours sincerely, Daniel Moore”", q:"D'après l'e-mail, que demande Daniel Moore ?", opts:["D'annuler une réservation","La disponibilité et le tarif d'une salle pour une quarantaine de personnes","Un poste dans l'entreprise","Le remboursement d'un équipement"], correct:1, why:"« enquire about the availability… forty participants… confirm the rate » : il se renseigne sur la disponibilité et le prix." },
      { cat:"comprehension", passage:"“Hi Jess! Cheers for sorting out the tickets — you're a star. I'm gonna be a bit late on Saturday, so no worries if you wanna head in without me. Let's catch up properly after the show!”", q:"D'après le message, que propose l'auteur à Jess ?", opts:["D'annuler la sortie","D'entrer sans l'attendre s'il est en retard","De racheter les billets","De venir la chercher chez elle"], correct:1, why:"« no worries if you wanna head in without me » = pas de souci si tu veux entrer sans moi. Registre casual : « cheers », « gonna », « wanna »." },
      { cat:"comprehension", passage:"“(rappel) The new policy will probably reduce costs to some extent. However, it's doubtful whether staff will accept it, and the savings are largely dependent on how quickly it is implemented.”", q:"D'après le texte, de quoi dépendent surtout les économies ?", opts:["De l'avis du personnel","De la rapidité de mise en œuvre","Du nombre d'employés","De la météo"], correct:1, why:"« the savings are largely dependent on how quickly it is implemented » — « largely » = en grande partie (rappel B2.2 : nuance et certitude)." },
      { cat:"comprehension", passage:"“(rappel) The lights are off and nobody's answering the door. They must have gone away for the weekend — they can't have forgotten about our dinner, surely. Or they might have been called away unexpectedly.”", q:"D'après le texte, quelle hypothèse la personne juge-t-elle impossible ?", opts:["Qu'ils soient partis pour le week-end","Qu'ils aient oublié le dîner","Qu'ils aient été appelés en urgence","Qu'ils soient chez eux sans lumière"], correct:1, why:"« they can't have forgotten » = impossibilité ; « must have » = quasi-certitude ; « might have » = possibilité (rappel B2.2 : modaux de déduction)." }
    ],
    PRON_VERBS: [
      {en:"Can you help me out?", fr:"Tu peux me dépanner ?"},
      {en:"Would you mind helping me?", fr:"Cela vous dérangerait-il de m'aider ?"},
      {en:"I was wondering if you could help me.", fr:"Je me demandais si vous pourriez m'aider."},
      {en:"I would appreciate your assistance.", fr:"Je vous serais reconnaissant(e) de votre aide."},
      {en:"Would it be possible to reschedule the meeting?", fr:"Serait-il possible de reprogrammer la réunion ?"},
      {en:"I look forward to hearing from you.", fr:"Dans l'attente de votre réponse."}
    ],
    READING: [
      "On Monday morning, Claire realised that a mistake in her flight booking meant she would miss an important client meeting in Edinburgh.",
      "She first texted her friend Tom, who worked for the airline: “Hey, any chance you can help me out? Totally messed up my booking!”",
      "Tom replied within minutes: “No worries, send me the details and I'll have a look.”",
      "Next, she went to see her line manager, knocked on the door and asked, “Sorry to bother you — could I have a quick word about Thursday?”",
      "She explained the situation and added, “I was wondering if it would be possible to join the meeting by video instead.”",
      "Her manager agreed, but suggested she should also inform the client directly and formally.",
      "So Claire wrote a careful e-mail: “Dear Mr Hughes, I am writing to inform you of an unforeseen change to my travel arrangements.”",
      "“I sincerely apologise for any inconvenience this may cause, and I would appreciate it if we could hold Thursday's meeting online.”",
      "“Please find attached a revised agenda. I look forward to hearing from you. Yours sincerely, Claire Martin.”",
      "In a single morning, Claire had made essentially the same request three times, in three completely different registers."
    ],
    GLOSS: [
      {en:"to mess up", fr:"rater, cafouiller (familier)"},
      {en:"line manager", fr:"supérieur(e) hiérarchique direct(e)"},
      {en:"to have a quick word", fr:"parler rapidement (à quelqu'un)"},
      {en:"unforeseen", fr:"imprévu(e)"},
      {en:"travel arrangements", fr:"organisation du voyage"},
      {en:"agenda", fr:"ordre du jour (faux ami !)"}
    ],
    GRAMMAR1: {
      heading: "Les 4 registres d'une demande : casual, neutral, polite, formal",
      lede: "En anglais, la politesse passe surtout par la DISTANCE grammaticale : plus on s'éloigne du présent et de l'impératif (passé, conditionnel, forme en -ing, tournure impersonnelle), plus la demande est polie.",
      conj: [["Casual (amis, famille) →","Can you… ? / verbe à particule","Can you help me out?"],["Neutral (tout le monde) →","Could you… ?","Could you help me?"],["Polite (collègue, inconnu, supérieur) →","Would you mind + -ing / I was wondering if…","Would you mind helping me?"],["Formal (administration, client) →","I would appreciate… / Would it be possible to…","I would appreciate your assistance."]],
      ruleHtml: "📖 Plus on ajoute de <b>distance</b>, plus on est poli : présent → <b>passé</b> (« I <b>was</b> wondering… »), « can » → <b>« could / would »</b>, question directe → <b>question impersonnelle</b> (« Would <b>it</b> be possible… ? »). Les petits mots comptent aussi : <b>possibly</b>, <b>just</b>, <b>a moment</b> adoucissent la demande. Attention : « <b>Would you mind</b> » est toujours suivi d'un <b>-ing</b>, et on y répond « <b>No, not at all</b> » pour accepter.",
      dialogueLede: "La même demande, à deux personnes différentes :",
      dialogue: [
        {who:"them", en:"(to a friend) Can you lend me your charger for a sec?", fr:"(à un ami) Tu peux me prêter ton chargeur deux secondes ?"},
        {who:"you", en:"(to a client) Would it be possible to borrow a charger for a moment?", fr:"(à un client) Serait-il possible d'emprunter un chargeur un instant ?"}
      ],
      whyLabel: "Trop poli, c'est aussi une erreur de registre",
      whyText: "Les francophones pensent souvent qu'être très formel est toujours plus sûr. Faux : dire « <b>I would appreciate your assistance</b> » à un ami qui porte un carton avec toi sonne froid, voire ironique ! Le bon registre, c'est celui qui <b>correspond à la relation</b>. À l'inverse, « <b>I want</b> » ou un impératif sec (« <b>Send me the file</b> ») paraît brusque avec presque tout le monde : préfère « <b>I'd like</b> » ou « <b>Could you send me…?</b> »."
    },
    GRAMMAR2: {
      heading: "Écrire formel ou informel : vocabulaire, contractions et structures",
      dialogueLede: "Un responsable relit l'e-mail d'une collègue :",
      dialogue: [
        {who:"them", en:"Your e-mail's good, but “we wanna get the files ASAP” is a bit casual for a client.", fr:"Ton e-mail est bien, mais « on veut les fichiers au plus vite » est un peu familier pour un client."},
        {who:"you", en:"Fair point. How about “We would like to obtain the files at your earliest convenience”?", fr:"Juste. Que dirais-tu de « Nous souhaiterions obtenir les fichiers dans les meilleurs délais » ?"}
      ],
      ruleHtml: "💭 Pour <b>monter en registre</b> : 1) remplacer les verbes à particule et les mots courants par leur équivalent latin (<b>get → obtain</b>, <b>ask for → request</b>, <b>need → require</b>, <b>help → assist</b>, <b>buy → purchase</b>, <b>let know → inform</b>) ; 2) supprimer les <b>contractions</b> (« I'm » → « I am ») ; 3) préférer le <b>conditionnel</b> et le <b>passif</b> (« It has been decided that… ») ; 4) utiliser les formules figées de l'e-mail (<b>I am writing to…</b>, <b>Please find attached…</b>, <b>I look forward to hearing from you</b>). Pour <b>descendre</b>, on fait l'inverse.",
      whyLabel: "Secret English — la mission des 4 registres",
      whyText: "Un locuteur B2 sait dire la même chose de quatre façons. Mission du palier : prendre UNE demande (par exemple « avoir un rendez-vous plus tôt ») et l'exprimer en <b>casual</b> (« Any chance I could come in earlier? »), <b>neutral</b> (« Could I have an earlier appointment? »), <b>polite</b> (« I was wondering if an earlier appointment might be available. ») puis <b>formal</b> (« I would be grateful if an earlier appointment could be arranged. »). Le vocabulaire change, mais la demande reste identique."
    },
    REVIEW: [
      { q:"Il a toujours été ponctuel et il n'est pas là. “He ___ have got stuck in traffic.”", opts:["must","mustn't"], correct:0, fb:"« must have + p.p. » = déduction quasi certaine sur le passé ; « mustn't » exprime une interdiction. (rappel B2.2)" },
      { q:"“She ___ won't come tonight.”", opts:["probably","won't probably"], correct:0, fb:"« probably » se place AVANT « won't » : « She probably won't come ». (rappel B2.2)" },
      { q:"Que veut dire « largely » ?", opts:["En grande partie","Largement, amplement"], correct:0, fb:"Faux ami : « largely » = en grande partie, essentiellement. (rappel B2.2)" },
      { q:"Quelle phrase évite les absolus ?", opts:["Everyone hates waiting.","Most people tend to dislike waiting."], correct:1, fb:"« most people » + « tend to » : la mission « zéro absolu ». (rappel B2.2)" },
      { q:"« Few people came » signifie :", opts:["Peu de gens sont venus","Quelques personnes sont venues"], correct:0, fb:"« few » sans « a » = peu (sens négatif) ; « a few » = quelques-uns. (rappel B2.2)" }
    ],
    CULTURE_NOTE: {
      icon: "✉️",
      title: "Note culturelle — prénoms, e-mails et politesse au travail",
      html: "Dans le monde professionnel anglophone, on passe très vite au <b>prénom</b>, même avec un supérieur ou un client : ce n'est pas un manque de respect, et l'anglais n'a de toute façon pas de « vous ». La politesse passe donc par <b>les tournures</b> (« Would you mind… », « I was wondering… ») plutôt que par le tutoiement ou le vouvoiement. Dans les e-mails, « <b>Hi Sarah,</b> » est devenu la norme entre collègues, « <b>Dear Sarah,</b> » reste plus neutre et prudent pour un premier contact, et « <b>Dear Sir or Madam,</b> » est réservé aux destinataires inconnus. Pour conclure, « <b>Best regards,</b> » ou « <b>Kind regards,</b> » conviennent presque partout. Enfin, les Britanniques utilisent énormément <b>please</b>, <b>thank you</b> et <b>sorry</b> : en oublier un peut paraître sec, même dans un échange très détendu."
    },
    NEXT_PREVIEW: "B2.4 (The Collocation Lab) : passer des mots isolés aux groupes de mots naturels — make a decision, take responsibility, make progress, take into account… — pour choisir à chaque fois la combinaison qu'un anglophone utiliserait vraiment.",
    META: { vocabTitle:"Maîtriser le registre (B2.3)", lectureTitle:"Une même demande, trois registres", bilanTitle:"Bravo, tu sais maintenant adapter ton anglais à ton interlocuteur !", pronLabel:"Les 4 registres : casual, neutral, polite, formal", todayLede:"adapter ton anglais à ton interlocuteur (ami, collègue, supérieur, administration, client) et formuler une même demande en registre casual, neutral, polite puis formal — s'appuie sur B2.2 et B1.4 (demandes polies)" }
  };

  // B2.4 — The Collocation Lab — s'appuie sur B2.3 (Register Master) et B2.2 (nuance)
  LESSONS_EXT[43] = {
    code: "B2.4", level: "B2",
    VOCAB: [
      {block:"Collocations avec make", en:"Make a decision", ipa:"/meɪk ə dɪˈsɪʒən/", fr:"Prendre une décision", note:"Piège n°1 des francophones : on « prend » une décision en français, mais on la « make » en anglais. (« Take a decision » existe en anglais britannique formel, mais reste bien moins courant.)"},
      {block:"Collocations avec make", en:"Make a mistake", ipa:"/meɪk ə mɪˈsteɪk/", fr:"Faire une erreur", note:"Jamais « do a mistake ». « make the same mistake twice » = refaire la même erreur."},
      {block:"Collocations avec make", en:"Make progress", ipa:"/meɪk ˈprəʊɡres/", fr:"Faire des progrès, progresser", note:"« progress » est indénombrable : jamais « a progress » ni « progresses ». On dit « make a lot of progress »."},
      {block:"Collocations avec make", en:"Make an effort", ipa:"/meɪk ən ˈefət/", fr:"Faire un effort", note:"« make an effort to + base » : « She made an effort to stay calm ». Jamais « do an effort »."},
      {block:"Collocations avec make", en:"Make a difference", ipa:"/meɪk ə ˈdɪfrəns/", fr:"Changer les choses, avoir un vrai impact", note:"Sens positif : « Your help made a real difference ». Pour « faire la différence entre deux choses », on dit « tell the difference »."},
      {block:"Collocations avec make", en:"Make sense", ipa:"/meɪk sens/", fr:"Avoir du sens, être logique", note:"« It doesn't make sense » = ça n'a pas de sens. Le calque « it has sense » n'existe pas."},
      {block:"Collocations avec take", en:"Take responsibility (for)", ipa:"/teɪk rɪˌspɒnsəˈbɪləti/", fr:"Assumer la responsabilité (de)", note:"« take responsibility for the delay » — toujours « for », jamais « of »."},
      {block:"Collocations avec take", en:"Take part (in)", ipa:"/teɪk pɑːt/", fr:"Participer (à)", note:"Plus naturel que « participate » à l'oral. Piège : jamais « participate to » — c'est « participate in » / « take part in »."},
      {block:"Collocations avec take", en:"Take a break", ipa:"/teɪk ə breɪk/", fr:"Faire une pause", note:"On « fait » une pause en français, mais on la « take » en anglais. « a coffee break » = une pause-café."},
      {block:"Collocations avec take", en:"Take action", ipa:"/teɪk ˈækʃən/", fr:"Agir, prendre des mesures", note:"Sans article : « We need to take action now ». Registre plutôt professionnel ou journalistique."},
      {block:"Collocations avec take", en:"Take (something) into account", ipa:"/teɪk ˈɪntʊ əˈkaʊnt/", fr:"Prendre (quelque chose) en compte", note:"L'objet se place souvent au milieu : « take the cost into account ». Synonyme plus formel : « take into consideration »."},
      {block:"Collocations avec take", en:"Take advantage of", ipa:"/teɪk ədˈvɑːntɪdʒ əv/", fr:"Profiter de ; abuser de", note:"Double sens selon le contexte : « take advantage of the sun » (profiter) / « he took advantage of her kindness » (abuser)."},
      {block:"get / have / give / keep", en:"Get the chance (to)", ipa:"/ɡet ðə tʃɑːns/", fr:"Avoir l'occasion (de)", note:"« If you get the chance, visit York » = si tu en as l'occasion. Faux ami : « chance » veut plus souvent dire « occasion » ou « probabilité » que « chance » (= luck)."},
      {block:"get / have / give / keep", en:"Have a go (at)", ipa:"/hæv ə ɡəʊ/", fr:"Essayer, tenter le coup", note:"Très britannique et familier : « Go on, have a go! ». Équivalent US : « give it a try » / « take a shot at it »."},
      {block:"get / have / give / keep", en:"Give feedback", ipa:"/ɡɪv ˈfiːdbæk/", fr:"Faire un retour, donner son avis", note:"« feedback » est indénombrable : « some feedback », « a piece of feedback », jamais « a feedback »."},
      {block:"get / have / give / keep", en:"Keep in touch", ipa:"/kiːp ɪn tʌtʃ/", fr:"Rester en contact", note:"« Let's keep in touch! » = restons en contact. « get in touch with » = prendre contact avec."},
      {block:"get / have / give / keep", en:"Keep a promise", ipa:"/kiːp ə ˈprɒmɪs/", fr:"Tenir une promesse", note:"À l'inverse : « break a promise » (ne pas la tenir). « make a promise » = faire une promesse."},
      {block:"set / put / raise / reach", en:"Set a goal", ipa:"/set ə ɡəʊl/", fr:"Se fixer un objectif", note:"Aussi : « set a deadline » (fixer une échéance), « set an example » (montrer l'exemple)."},
      {block:"set / put / raise / reach", en:"Put pressure on", ipa:"/pʊt ˈpreʃər ɒn/", fr:"Mettre la pression sur", note:"« Don't put too much pressure on yourself » = ne te mets pas trop la pression."},
      {block:"set / put / raise / reach", en:"Raise awareness (of)", ipa:"/reɪz əˈweənəs/", fr:"Sensibiliser (à)", note:"Collocation incontournable dans les médias : « a campaign to raise awareness of climate change »."},
      {block:"set / put / raise / reach", en:"Raise an issue", ipa:"/reɪz ən ˈɪʃuː/", fr:"Soulever un problème, une question", note:"« raise » (transitif, avec objet) ≠ « rise » (intransitif) : « prices rise », mais « she raised a question »."},
      {block:"set / put / raise / reach", en:"Reach an agreement", ipa:"/riːtʃ ən əˈɡriːmənt/", fr:"Parvenir à un accord", note:"Aussi : « reach a decision », « reach a conclusion ». Jamais « arrive to an agreement »."},
      {block:"Verbes clés (B2.4)", en:"Pay", ipa:"/peɪ/", fr:"Payer ; (en collocation) prêter, faire", note:"« pay attention » (faire attention), « pay a visit » (rendre visite), « pay a compliment » (faire un compliment)."},
      {block:"Verbes clés (B2.4)", en:"Draw", ipa:"/drɔː/", fr:"Dessiner ; (en collocation) tirer", note:"« draw a conclusion » (tirer une conclusion), « draw attention to » (attirer l'attention sur)."},
      {block:"Verbes clés (B2.4)", en:"Meet", ipa:"/miːt/", fr:"Rencontrer ; (en collocation) respecter, satisfaire", note:"« meet a deadline » (respecter un délai), « meet somebody's needs » (répondre aux besoins de quelqu'un)."},
      {block:"Verbes clés (B2.4)", en:"Run", ipa:"/rʌn/", fr:"Courir ; (en collocation) diriger, courir (un risque)", note:"« run a business » (diriger une entreprise), « run a risk » (courir un risque), « run late » (être en retard)."}
    ],
    MEM_WORDS: [0,2,6,10,21,24],
    MINI_CHECKS: [
      { q:"“Everyone ___ mistakes when they learn a language.”", opts:["does","makes","takes"], correct:1, fb:"« make a mistake » : on ne « do » jamais une erreur en anglais." },
      { q:"“I'm exhausted — let's ___ a short break.”", opts:["take","make","do"], correct:0, fb:"« take a break » = faire une pause. Le « faire » français se traduit ici par « take »." },
      { q:"Quelle combinaison est la plus naturelle pour « une forte pluie » ?", opts:["strong rain","big rain","heavy rain"], correct:2, fb:"« heavy rain » (et « heavy traffic ») : « strong » s'emploie pour le vent, le café ou un accent." },
      { q:"“After hours of discussion, we finally ___ an agreement.”", opts:["reached","joined","arrived"], correct:0, fb:"« reach an agreement » = parvenir à un accord. « arrive » demanderait « at » et reste moins naturel." }
    ],
    ROUNDS: [
      { bank:["decision","make","today","You","a","to","need","."], answer:"you need to make a decision today .", display:"You need to make a decision today.", fr:"Tu dois prendre une décision aujourd'hui." },
      { bank:["progress","of","made","She","lot","has","a","."], answer:"she has made a lot of progress .", display:"She has made a lot of progress.", fr:"Elle a fait beaucoup de progrès." },
      { bank:["me","sense","It","make","to","doesn't","."], answer:"it doesn't make sense to me .", display:"It doesn't make sense to me.", fr:"Ça n'a pas de sens pour moi." },
      { bank:["action","now","We","take","to","need","."], answer:"we need to take action now .", display:"We need to take action now.", fr:"Nous devons agir maintenant." },
      { bank:["account","the","Please","into","cost","take","."], answer:"please take the cost into account .", display:"Please take the cost into account.", fr:"Merci de prendre le coût en compte." },
      { bank:["mistake","for","He","responsibility","the","take","refused","to","."], answer:"he refused to take responsibility for the mistake .", display:"He refused to take responsibility for the mistake.", fr:"Il a refusé d'assumer la responsabilité de l'erreur." },
      { bank:["touch","in","Let's","keep","."], answer:"let's keep in touch .", display:"Let's keep in touch.", fr:"Restons en contact." },
      { bank:["awareness","of","problem","The","aims","raise","campaign","to","the","."], answer:"the campaign aims to raise awareness of the problem .", display:"The campaign aims to raise awareness of the problem.", fr:"La campagne vise à sensibiliser au problème." },
      { bank:["deadline","the","We","meet","must","."], answer:"we must meet the deadline .", display:"We must meet the deadline.", fr:"Nous devons respecter le délai." },
      { bank:["difference","real","Your","made","support","a","."], answer:"your support made a real difference .", display:"Your support made a real difference.", fr:"Ton soutien a vraiment changé les choses." }
    ],
    QUIZ: [
      { cat:"ecrit", q:"“Could you ___ me a favour?”", opts:["make","do","give"], correct:1, why:"« do somebody a favour » = rendre service. Repère utile : « do » pour les tâches et les services, « make » pour ce qu'on crée ou décide." },
      { cat:"ecrit", q:"“I'd like to ___ an appointment with Dr Patel.”", opts:["make","take","do"], correct:0, why:"« make an appointment » = prendre rendez-vous. « take an appointment » est un calque du français." },
      { cat:"ecrit", q:"“There's no rush — ___ your time.”", opts:["make","have","take"], correct:2, why:"« take your time » = prends ton temps. Expression figée." },
      { cat:"ecrit", q:"“The roads were blocked because of the ___ traffic.”", opts:["heavy","strong","big"], correct:0, why:"« heavy traffic », comme « heavy rain » : « heavy » exprime l'intensité pour la circulation et la météo." },
      { cat:"ecrit", q:"“I'm afraid that's ___ unlikely to happen before June.”", opts:["strongly","heavily","highly"], correct:2, why:"« highly unlikely » = très peu probable. Autres collocations adverbe + adjectif : « highly recommended », « highly qualified »." },
      { cat:"ecrit", q:"Comment dit-on « participer à une réunion » ?", opts:["participate to a meeting","take part in a meeting","make part of a meeting"], correct:1, why:"« take part in » (ou « participate in »). « participate to » est une erreur très fréquente chez les francophones." },
      { cat:"ecrit", q:"“Several employees ___ the issue of working hours during the meeting.”", opts:["rose","raised","arose"], correct:1, why:"« raise an issue » = soulever un problème. « raise » a un complément d'objet ; « rise » et « arise » n'en ont pas." },
      { cat:"ecrit", q:"“At the start of each year, I ___ myself three clear goals.”", opts:["set","put","make"], correct:0, why:"« set a goal » = se fixer un objectif. « make a goal » n'est pas naturel (et pour « marquer un but », on dit « score a goal »)." },
      { cat:"ecrit", q:"“Don't ___ too much pressure on yourself before the exam.”", opts:["make","give","put"], correct:2, why:"« put pressure on somebody » = mettre la pression sur quelqu'un." },
      { cat:"ecrit", q:"Comment dit-on « tenir sa promesse » ?", opts:["hold your promise","keep your promise","make your promise"], correct:1, why:"« keep a promise » = tenir une promesse ; « make a promise » = faire une promesse ; « break a promise » = ne pas la tenir." },
      { cat:"oral", audio:"We need to make a decision by the end of the week.", q:"Écoute : que faut-il faire d'ici la fin de la semaine ?", opts:["Corriger une erreur","Prendre une décision","Faire une pause","Prendre un rendez-vous"], correct:1, why:"« make a decision » = prendre une décision ; « by the end of the week » = d'ici la fin de la semaine." },
      { cat:"oral", audio:"Let's take a ten-minute break and then carry on.", q:"Écoute : que propose la personne ?", opts:["Arrêter la réunion pour aujourd'hui","Travailler dix minutes de plus","Reporter au lendemain","Faire une pause de dix minutes, puis continuer"], correct:3, why:"« take a ten-minute break » = faire une pause de dix minutes ; « carry on » = continuer." },
      { cat:"oral", audio:"Honestly, your advice really made a difference.", q:"Écoute : que veut dire la personne ?", opts:["Ton conseil a vraiment changé les choses pour moi","Ton conseil était différent des autres","Tu as fait la différence entre deux options","Ton conseil ne m'a pas servi"], correct:0, why:"« make a difference » = avoir un vrai impact, changer les choses (sens positif)." },
      { cat:"oral", audio:"After weeks of talks, we've finally reached an agreement with the supplier.", q:"Écoute : quelle est la situation avec le fournisseur ?", opts:["Ils ont rompu tout contact","Ils sont arrivés chez lui en retard","Ils sont enfin parvenus à un accord","Ils cherchent encore un fournisseur"], correct:2, why:"« reach an agreement » = parvenir à un accord ; « after weeks of talks » = après des semaines de négociations." },
      { cat:"comprehension", passage:"“Our team made a lot of progress this month. We took our clients' feedback into account and set clearer goals for each project. However, we still need to take action on the delivery delays before they turn into a serious problem.”", q:"D'après le texte, que reste-t-il à faire à l'équipe ?", opts:["Recueillir l'avis des clients","Fixer des objectifs","Agir contre les retards de livraison","Recruter de nouveaux collègues"], correct:2, why:"« we still need to take action on the delivery delays » — le reste (feedback, objectifs) est déjà fait." },
      { cat:"comprehension", passage:"“I made a real effort to keep in touch with my former colleagues after I left the company. It wasn't always easy with a new job and a young family, but it made a huge difference when I started looking for a new position two years later.”", q:"D'après le texte, pourquoi cet effort a-t-il été utile ?", opts:["Il l'a beaucoup aidée à trouver un nouveau poste","Il lui a permis de revenir dans son ancienne entreprise","Il n'a servi à rien","Il l'a aidée à fonder une famille"], correct:0, why:"« it made a huge difference when I started looking for a new position » = cela a beaucoup compté dans sa recherche d'emploi." },
      { cat:"comprehension", passage:"“(rappel) Dear Mr Evans, I would be grateful if you could take my comments into account before Thursday's meeting. Would you mind sending me the final version of the report by Wednesday afternoon? Kind regards, Sarah Collins.”", q:"D'après le texte, quel est le registre de ce message ?", opts:["Casual : un message entre amis proches","Formel/poli : un message professionnel","Familier, presque argotique","Agressif et impatient"], correct:1, why:"« I would be grateful if… », « Would you mind…? », « Dear Mr Evans », « Kind regards » : marqueurs du registre formel/poli (rappel B2.3)." },
      { cat:"comprehension", passage:"“(rappel) The new policy will probably make a difference, and to some extent it already has. However, it is arguably too early to draw any firm conclusions — the first results only cover three months.”", q:"D'après le texte, quelle est la position de l'auteur ?", opts:["Il est totalement certain du succès","Il juge la mesure inutile","Il n'exprime aucun avis","Il nuance : effet probable, mais trop tôt pour conclure"], correct:3, why:"« probably », « to some extent », « arguably too early to draw any firm conclusions » : l'auteur nuance son degré de certitude (rappel B2.2)." }
    ],
    PRON_VERBS: [
      {en:"We need to make a decision by Friday.", fr:"Nous devons prendre une décision d'ici vendredi."},
      {en:"She has made a lot of progress this year.", fr:"Elle a fait beaucoup de progrès cette année."},
      {en:"Please take the cost into account.", fr:"Merci de prendre le coût en compte."},
      {en:"He refused to take responsibility for the delay.", fr:"Il a refusé d'assumer la responsabilité du retard."},
      {en:"The campaign aims to raise awareness of the issue.", fr:"La campagne vise à sensibiliser au problème."},
      {en:"We finally reached an agreement after three hours.", fr:"Nous sommes enfin parvenus à un accord après trois heures."}
    ],
    READING: [
      "When I started my new job in London, my English was grammatically correct, but it didn't sound natural.",
      "I would say things like “do a mistake” or “take an appointment”, and my colleagues would smile politely.",
      "One day, my manager gave me some very useful feedback: “Your grammar is fine — now you need to learn how words go together.”",
      "So I set myself a simple goal: to notice one new collocation every day and write it down in a notebook.",
      "At first, it felt like a lot of effort for very little progress.",
      "But after a few months, I realised that I was making fewer mistakes and speaking more fluently.",
      "I no longer had to translate word for word from French, because whole phrases came to mind automatically.",
      "In meetings, I began to raise issues, take part in debates and even run a small project on my own.",
      "Looking back, I think learning collocations made more of a difference than any grammar book I had ever used.",
      "If you get the chance, start your own notebook today — it really does pay off."
    ],
    GLOSS: [
      {en:"grammatically", fr:"grammaticalement"},
      {en:"to notice", fr:"remarquer, repérer"},
      {en:"fluently", fr:"couramment, avec aisance"},
      {en:"to come to mind", fr:"venir à l'esprit"},
      {en:"looking back", fr:"avec le recul"},
      {en:"to pay off", fr:"porter ses fruits, être payant"}
    ],
    GRAMMAR1: {
      heading: "make / do / take / have : les verbes « passe-partout » et leurs collocations",
      lede: "Une collocation est une association de mots que les anglophones utilisent spontanément ensemble. Elle ne se déduit pas de la logique ni du français : il faut l'apprendre comme un bloc. Les verbes les plus fréquents (make, do, take, have) sont justement ceux qui en forment le plus.",
      conj: [["Créer, produire, décider →","make","make a decision, make a plan, make a mistake"],["Tâche, activité, service →","do","do the shopping, do your best, do somebody a favour"],["Saisir, prendre sur soi →","take","take responsibility, take a break, take action"],["Vivre, expérimenter →","have","have a go, have a look, have a chat"]],
      ruleHtml: "📖 Repère général : <b>make</b> = on crée ou on décide quelque chose (a decision, a plan, a mistake, progress, an effort) ; <b>do</b> = on accomplit une tâche ou une activité (the washing-up, homework, research, business). Mais ce n'est qu'une tendance : beaucoup de collocations sont <b>arbitraires</b> et s'apprennent par cœur. Pièges typiques des francophones : « prendre une décision » → <b>make</b> a decision ; « faire une pause » → <b>take</b> a break ; « prendre rendez-vous » → <b>make</b> an appointment ; « faire attention » → <b>pay</b> attention.",
      dialogueLede: "Une collègue fait le point avant une échéance importante :",
      dialogue: [
        {who:"them", en:"Have we made any progress on the budget, or do we need to take action today?", fr:"Est-ce qu'on a avancé sur le budget, ou faut-il agir dès aujourd'hui ?"},
        {who:"you", en:"We've made good progress, but we still need to make a final decision before Friday.", fr:"On a bien avancé, mais il faut encore prendre une décision finale avant vendredi."}
      ],
      whyLabel: "Pourquoi « make a decision » et pas « take a decision » ?",
      whyText: "Parce que c'est l'usage, tout simplement ! Les collocations ne suivent pas la logique mais l'<b>habitude collective</b> des locuteurs. « Take a decision » se rencontre en anglais britannique formel, mais « <b>make</b> a decision » est de très loin la forme la plus courante, des deux côtés de l'Atlantique. La bonne méthode : apprendre le verbe <b>avec</b> son nom, jamais séparément."
    },
    GRAMMAR2: {
      heading: "Adjectif + nom, adverbe + adjectif : sonner naturel au-delà des verbes",
      dialogueLede: "Deux amis parlent d'un voyage gâché par la météo :",
      dialogue: [
        {who:"them", en:"How was the trip? I heard there was heavy rain all weekend.", fr:"C'était comment, le voyage ? Il paraît qu'il a plu à verse tout le week-end."},
        {who:"you", en:"Awful! We were bitterly disappointed, but the hotel was highly recommended, so it wasn't a complete loss.", fr:"Horrible ! On était profondément déçus, mais l'hôtel était très recommandé, donc tout n'était pas perdu."}
      ],
      ruleHtml: "💭 Les collocations ne concernent pas que les verbes. <b>Adjectif + nom</b> : <b>heavy</b> rain / traffic, <b>strong</b> coffee / wind / accent, a <b>high</b> price (jamais « an expensive price »), a <b>close</b> friend, a <b>narrow</b> escape. <b>Adverbe + adjectif</b> : <b>highly</b> unlikely / recommended, <b>deeply</b> concerned, <b>bitterly</b> disappointed, <b>fully</b> aware, <b>widely</b> known. À B2, remplacer un simple « very » par l'adverbe qui « va » naturellement avec l'adjectif est l'un des moyens les plus rapides de paraître plus fluide.",
      whyLabel: "Le piège du « very » partout",
      whyText: "« very unlikely » ou « very disappointed » sont corrects, mais <b>plats</b>. Les anglophones diront plus volontiers « <b>highly</b> unlikely » ou « <b>bitterly</b> disappointed ». Attention en revanche à ne pas inventer : « strongly unlikely » ou « heavily disappointed » n'existent pas. En cas de doute, cherche le mot dans un dictionnaire de collocations (par exemple l'<b>Oxford Collocations Dictionary</b>) plutôt que de traduire depuis le français."
    },
    REVIEW: [
      { q:"Quelle est la formulation la plus casual de la même demande ?", opts:["Can you help me out?","I would appreciate your assistance."], correct:0, fb:"« Can you help me out? » = registre casual, entre amis ou collègues proches. (rappel B2.3)" },
      { q:"Pour écrire à une administration, quelle formule choisir ?", opts:["I would appreciate your assistance with this matter.","Can you sort this out for me?"], correct:0, fb:"Registre formel : conditionnel, vocabulaire soutenu (« assistance », « matter »). (rappel B2.3)" },
      { q:"« Would you mind helping me? » est suivi de :", opts:["un verbe en -ing","to + base verbale"], correct:0, fb:"« Would you mind + -ing » : registre poli. (rappel B2.3)" },
      { q:"Laquelle de ces formules est neutre (ni familière, ni très formelle) ?", opts:["Could you help me?","I would be most grateful for your help."], correct:0, fb:"« Could you…? » = registre neutre, adapté à presque toutes les situations. (rappel B2.3)" },
      { q:"« Cheers, mate! » convient plutôt :", opts:["dans un e-mail à un client que l'on ne connaît pas","entre amis, à l'oral"], correct:1, fb:"Registre casual, très britannique : à réserver aux proches. (rappel B2.3)" }
    ],
    CULTURE_NOTE: {
      icon: "🧩",
      title: "Note culturelle — collocations britanniques et américaines",
      html: "Les collocations varient parfois des deux côtés de l'Atlantique. Un Britannique <b>has</b> a shower, a bath ou a break, là où un Américain <b>takes</b> a shower, a bath ou a break (les deux sont compris partout). Un Britannique peut <b>take</b> a decision dans un contexte institutionnel, alors qu'un Américain dira presque toujours <b>make</b> a decision. On <b>does</b> the washing-up au Royaume-Uni, mais on <b>does</b> the dishes aux États-Unis. Ces différences ne créent jamais de malentendu, mais les repérer aide à comprendre les séries, les podcasts et les collègues des deux pays — et à rester cohérent(e) dans son propre anglais."
    },
    NEXT_PREVIEW: "B2.5 (Sound Like English) : comprendre l'anglais tel qu'il est vraiment prononcé — formes réduites (gonna, wanna, didja), formes faibles, liaisons, accent de mot et de phrase, rythme et intonation.",
    META: { vocabTitle:"Le laboratoire des collocations (B2.4)", lectureTitle:"Le carnet de collocations", bilanTitle:"Bravo, tu sais maintenant choisir les combinaisons de mots les plus naturelles !", pronLabel:"make / do / take / have et collocations adjectif + nom", todayLede:"passer des mots isolés aux groupes de mots naturels (make, take, get, have, give, keep, set, put, raise, reach) et éviter les calques du français — s'appuie sur B2.3 (Register Master)" }
  };

  // B2.5 — Sound Like English — s'appuie sur B2.4 (collocations) et B1.3 (vraies conversations)
  LESSONS_EXT[44] = {
    code: "B2.5", level: "B2",
    VOCAB: [
      {block:"Formes réduites (connected speech)", en:"Going to → gonna", ipa:"/ˈɡʌnə/", fr:"Aller (futur proche), forme orale", note:"« I'm gonna call her » = I'm going to call her. Uniquement pour le futur proche devant un verbe : on ne dit jamais « I'm gonna London » (déplacement = « going to London »)."},
      {block:"Formes réduites (connected speech)", en:"Want to → wanna", ipa:"/ˈwɒnə/", fr:"Vouloir (faire), forme orale", note:"« Do you wanna come? » Seulement avec « I / you / we / they » : « he wants to » ne se réduit jamais en « wanna ». Prononciation US : /ˈwɑːnə/."},
      {block:"Formes réduites (connected speech)", en:"Have to → hafta", ipa:"/ˈhæftə/", fr:"Devoir, forme orale", note:"Le /v/ devient /f/ devant le /t/ : « I have to go » → /aɪ ˈhæftə ɡəʊ/. De même « has to » → /ˈhæstə/."},
      {block:"Formes réduites (connected speech)", en:"Got to → gotta", ipa:"/ˈɡɒtə/", fr:"Devoir (familier), forme orale", note:"« I've gotta go » = I've got to go. Aux États-Unis, le /t/ devient un « d » très léger : /ˈɡɑːɾə/."},
      {block:"Formes réduites (connected speech)", en:"Did you → didja", ipa:"/ˈdɪdʒə/", fr:"Est-ce que tu as… ? (forme orale)", note:"Assimilation : /d/ + /j/ fusionnent en /dʒ/. « Didja see it? » = Did you see it? Même phénomène : « would you » → /ˈwʊdʒə/."},
      {block:"Formes réduites (connected speech)", en:"What are you → whatcha", ipa:"/ˈwɒtʃə/", fr:"Qu'est-ce que tu… ? (forme orale)", note:"« Whatcha doing? » = What are you doing? En anglais américain, on entend aussi « whaddaya » /ˈwʌdəjə/. À comprendre, pas à écrire dans un texte formel."},
      {block:"Formes faibles (weak forms)", en:"to (weak form)", ipa:"/tə/ — forte : /tuː/", fr:"à, pour (forme faible)", note:"« I need to go » /aɪ ˈniːd tə ˈɡəʊ/. La forme forte /tuː/ n'apparaît qu'en fin de phrase (« Where to? ») ou devant une voyelle (/tu/)."},
      {block:"Formes faibles (weak forms)", en:"for (weak form)", ipa:"/fə/ — forte : /fɔː/", fr:"pour (forme faible)", note:"« a present for you » /ə ˈpreznt fə ju/. Ne pas prononcer « four » à chaque fois : c'est l'erreur qui rend l'accent francophone très « martelé »."},
      {block:"Formes faibles (weak forms)", en:"of (weak form)", ipa:"/əv/, /ə/ — forte : /ɒv/", fr:"de (forme faible)", note:"« a cup of tea » /ə ˈkʌp ə ˈtiː/ : le « of » se réduit souvent à un simple /ə/ (d'où les graphies « kinda », « sorta », « lotta »)."},
      {block:"Formes faibles (weak forms)", en:"and (weak form)", ipa:"/ən/, /n̩/ — forte : /ænd/", fr:"et (forme faible)", note:"« fish and chips » /ˌfɪʃ n̩ ˈtʃɪps/ — le « and » se réduit à un simple /n/, d'où la graphie « rock 'n' roll »."},
      {block:"Formes faibles (weak forms)", en:"can (weak form)", ipa:"/kən/ — forte : /kæn/ ; can't : /kɑːnt/", fr:"pouvoir (forme faible)", note:"Clé pour ne pas confondre : « I /kən/ come » (affirmatif, non accentué) ≠ « I /ˈkɑːnt/ come » (négatif, accentué, voyelle longue). Le /t/ de « can't » est souvent inaudible : c'est la voyelle qui compte."},
      {block:"Formes faibles (weak forms)", en:"was (weak form)", ipa:"/wəz/ — forte : /wɒz/", fr:"était (forme faible)", note:"« It was great » /ɪt wəz ˈɡreɪt/. Forme forte seulement en réponse courte ou pour insister : « Yes, it /wɒz/! »."},
      {block:"Liaisons et enchaînements (linking)", en:"Turn it off", ipa:"/ˌtɜːn ɪt ˈɒf/ → [tɜː nɪ ˈtɒf]", fr:"Éteins-le", note:"Consonne finale + voyelle : la consonne « glisse » sur le mot suivant. On entend « tur-ni-toff », comme une liaison française… mais systématique."},
      {block:"Liaisons et enchaînements (linking)", en:"Far away", ipa:"/ˌfɑːr əˈweɪ/", fr:"Loin, au loin", note:"« Linking r » : en anglais britannique, le « r » final est muet (« far » /fɑː/), sauf si le mot suivant commence par une voyelle."},
      {block:"Liaisons et enchaînements (linking)", en:"Go on", ipa:"/ˌɡəʊ ˈɒn/ → [ɡəʊ ˈwɒn]", fr:"Vas-y, continue", note:"Entre deux voyelles, un petit /w/ apparaît après /uː/, /əʊ/, /aʊ/ : « do it » [duː wɪt], « go out » [ɡəʊ waʊt]."},
      {block:"Liaisons et enchaînements (linking)", en:"I agree", ipa:"/aɪ əˈɡriː/ → [aɪ jəˈɡriː]", fr:"Je suis d'accord", note:"Même logique avec un /j/ après /iː/, /aɪ/, /eɪ/, /ɔɪ/ : « see it » [siː jɪt], « the end » [ðiː jend]. Pas de coup de glotte entre les mots."},
      {block:"Liaisons et enchaînements (linking)", en:"Next door", ipa:"/ˌnekst ˈdɔː/ → [ˌneks ˈdɔː]", fr:"À côté, la porte d'à côté", note:"Élision : le /t/ entre deux consonnes disparaît souvent. De même « last night » [lɑːs ˈnaɪt], « I don't know » [aɪ dəʊn ˈnəʊ]."},
      {block:"Accent, rythme et intonation", en:"Photograph / photography", ipa:"/ˈfəʊtəɡrɑːf/ · /fəˈtɒɡrəfi/", fr:"Photo / la photographie", note:"L'accent de mot se déplace selon le suffixe : PHOtograph, phoTOgraphy, photoGRAphic. Un mauvais accent gêne plus la compréhension qu'un mauvais son."},
      {block:"Accent, rythme et intonation", en:"Stress-timed rhythm", ipa:"/ˈstres taɪmd ˈrɪðəm/", fr:"Rythme accentuel", note:"Le français donne à peu près la même durée à chaque syllabe ; l'anglais espace régulièrement les syllabes ACCENTUÉES et comprime les autres entre elles."},
      {block:"Accent, rythme et intonation", en:"Schwa", ipa:"/ʃwɑː/ — le son /ə/", fr:"Le schwa, voyelle neutre", note:"Le son le plus fréquent de l'anglais, dans presque toutes les syllabes non accentuées : « banana » /bəˈnɑːnə/, « today » /təˈdeɪ/, « problem » /ˈprɒbləm/."},
      {block:"Accent, rythme et intonation", en:"Content word", ipa:"/ˈkɒntent wɜːd/", fr:"Mot porteur de sens", note:"Noms, verbes principaux, adjectifs, adverbes, négations : ce sont eux qu'on accentue. Les « function words » (to, of, the, and, can, was) sont réduits."},
      {block:"Accent, rythme et intonation", en:"Rising / falling intonation", ipa:"/ˈraɪzɪŋ/ · /ˈfɔːlɪŋ ˌɪntəˈneɪʃən/", fr:"Intonation montante / descendante", note:"En général : descendante pour une affirmation et une question en « wh- » (Where do you live? ↘), montante pour une question fermée (Are you coming? ↗)."},
      {block:"Verbes clés (B2.5)", en:"Stress", ipa:"/stres/", fr:"Accentuer, insister sur", note:"« Stress the first syllable » = accentue la première syllabe. Aussi nom : « word stress », « sentence stress »."},
      {block:"Verbes clés (B2.5)", en:"Link", ipa:"/lɪŋk/", fr:"Lier, enchaîner", note:"« Native speakers link words together » = les natifs enchaînent les mots."},
      {block:"Verbes clés (B2.5)", en:"Drop", ipa:"/drɒp/", fr:"Laisser tomber, avaler (un son)", note:"« They often drop the /t/ in “next door” » = ils avalent souvent le /t/."},
      {block:"Verbes clés (B2.5)", en:"Catch", ipa:"/kætʃ/", fr:"Saisir, comprendre (à l'oral)", note:"« Sorry, I didn't catch that » = pardon, je n'ai pas bien saisi — formule idéale quand le discours connecté va trop vite."}
    ],
    MEM_WORDS: [0,4,10,12,19,21],
    MINI_CHECKS: [
      { q:"À l'oral, « I'm gonna call her tonight » correspond à l'écrit à :", opts:["I'm going to call her tonight.","I'm gone to call her tonight.","I'm going call her tonight."], correct:0, fb:"« gonna » = « going to » + verbe (futur proche). C'est une forme orale, à comprendre mais à éviter à l'écrit soigné." },
      { q:"Dans « I can swim », comment « can » est-il normalement prononcé ?", opts:["/kæn/, accentué","/kən/, réduit et non accentué","/kɑːnt/"], correct:1, fb:"À l'affirmative, « can » prend sa forme faible /kən/ ; c'est « can't » /kɑːnt/ qui est accentué, avec une voyelle longue." },
      { q:"Où tombe l'accent de « photography » ?", opts:["PHO-to-gra-phy","pho-TO-gra-phy","pho-to-GRA-phy"], correct:1, fb:"phoTOgraphy /fəˈtɒɡrəfi/ — alors que PHOtograph est accentué sur la première syllabe." },
      { q:"Comment s'appelle la voyelle neutre /ə/, la plus fréquente de l'anglais ?", opts:["le linking","le stress","le schwa"], correct:2, fb:"Le schwa /ə/ apparaît dans presque toutes les syllabes non accentuées : « today » /təˈdeɪ/." }
    ],
    ROUNDS: [
      { bank:["tonight","call","I'm","her","to","going","."], answer:"i'm going to call her tonight .", display:"I'm going to call her tonight.", fr:"Je vais l'appeler ce soir. (à l'oral : « I'm gonna call her tonight »)" },
      { bank:["us","come","Do","want","with","to","you","?"], answer:"do you want to come with us ?", display:"Do you want to come with us?", fr:"Tu veux venir avec nous ? (à l'oral : « D'you wanna come with us? »)" },
      { bank:["six","leave","I","at","to","have","."], answer:"i have to leave at six .", display:"I have to leave at six.", fr:"Je dois partir à six heures. (à l'oral : « I hafta leave at six »)" },
      { bank:["night","match","Did","last","see","the","you","?"], answer:"did you see the match last night ?", display:"Did you see the match last night?", fr:"Tu as vu le match hier soir ? (à l'oral : « Didja see the match las' night? »)" },
      { bank:["weekend","doing","What","this","you","are","?"], answer:"what are you doing this weekend ?", display:"What are you doing this weekend?", fr:"Qu'est-ce que tu fais ce week-end ? (à l'oral : « Whatcha doing this weekend? »)" },
      { bank:["now","go","I've","to","got","."], answer:"i've got to go now .", display:"I've got to go now.", fr:"Je dois y aller maintenant. (à l'oral : « I've gotta go now »)" },
      { bank:["off","please","Could","it","turn","you","?"], answer:"could you turn it off please ?", display:"Could you turn it off, please?", fr:"Tu pourrais l'éteindre, s'il te plaît ? (à l'oral : « Couldja tur-ni-toff? »)" },
      { bank:["door","lives","She","next","."], answer:"she lives next door .", display:"She lives next door.", fr:"Elle habite à côté. (à l'oral, le /t/ de « next » disparaît)" },
      { bank:["that","catch","Sorry","didn't","I","."], answer:"sorry i didn't catch that .", display:"Sorry, I didn't catch that.", fr:"Pardon, je n'ai pas bien saisi." },
      { bank:["difference","hear","I","the","can't","."], answer:"i can't hear the difference .", display:"I can't hear the difference.", fr:"Je n'entends pas la différence." }
    ],
    QUIZ: [
      { cat:"ecrit", q:"« Do you wanna come? » s'écrit, en anglais standard :", opts:["Do you want a come?","Do you won't come?","Do you want to come?"], correct:2, why:"« wanna » = « want to » devant un verbe. (Devant un nom, « wanna » peut aussi signifier « want a » : « I wanna coffee ».)" },
      { cat:"ecrit", q:"Pourquoi « He's gonna London » est-il incorrect ?", opts:["Il faut dire « He's wanna London »","« gonna » ne remplace « going to » que devant un verbe (futur proche), pas pour un déplacement","« gonna » ne s'emploie qu'avec « I »"], correct:1, why:"« He's going to London » (déplacement) ne se réduit pas. En revanche : « He's gonna call you » (futur proche) est très courant à l'oral." },
      { cat:"ecrit", q:"Pourquoi « He wanna leave » est-il incorrect ?", opts:["Parce que « wants to » ne se réduit pas en « wanna »","Parce qu'il faut dire « He gonna leave »","Parce que « leave » doit être au passé"], correct:0, why:"« wanna » ne remplace que « want to » (I / you / we / they). Avec « he / she », on garde « wants to » /wɒnts tə/." },
      { cat:"ecrit", q:"Où tombe l'accent de « photographer » ?", opts:["PHO-to-gra-pher","pho-TO-gra-pher","pho-to-GRA-pher"], correct:1, why:"phoTOgrapher /fəˈtɒɡrəfə/, comme phoTOgraphy. Les suffixes -er et -y placent l'accent sur « -to- »." },
      { cat:"ecrit", q:"Dans « a cup of tea », comment « of » est-il généralement prononcé ?", opts:["/ɒf/","/ɒv/, forme forte","/əv/ ou même /ə/, forme faible"], correct:2, why:"Mot grammatical non accentué → forme faible : /ə ˈkʌp ə ˈtiː/. D'où les graphies familières « cuppa », « kinda », « lotta »." },
      { cat:"ecrit", q:"À l'oral, quel est le meilleur indice pour distinguer « I can go » de « I can't go » ?", opts:["« can » est réduit (/kən/, non accentué), « can't » est accentué avec une voyelle pleine /ɑː/","Le /t/ de « can't » est toujours prononcé très fort","Aucun : ils se prononcent exactement pareil"], correct:0, why:"Le /t/ final de « can't » est souvent avalé ! Le vrai indice est l'accent et la voyelle : /kən/ (faible) ≠ /ˈkɑːnt/ (fort). En US : /kən/ ≠ /ˈkænt/." },
      { cat:"ecrit", q:"Comment s'enchaînent naturellement les mots de « Turn it off » ?", opts:["Avec une petite pause entre chaque mot","[tɜː nɪ ˈtɒf] : chaque consonne finale se lie à la voyelle suivante","On supprime le mot « it »"], correct:1, why:"Linking consonne + voyelle : « tur-ni-toff ». Séparer chaque mot rend l'anglais haché et plus difficile à comprendre pour un natif." },
      { cat:"ecrit", q:"En anglais britannique, que se passe-t-il dans « far away » ?", opts:["Le « r » de « far » reste muet","On ajoute un /w/ entre les deux mots","Le « r » de « far » se prononce pour lier avec « away » (linking r)"], correct:2, why:"Le « r » final britannique est muet (« far » /fɑː/), sauf devant une voyelle : /ˌfɑːr əˈweɪ/." },
      { cat:"ecrit", q:"Quels mots sont normalement accentués dans une phrase anglaise neutre ?", opts:["Tous les mots de la même façon","Les mots grammaticaux (to, of, the, and, can)","Les mots porteurs de sens (noms, verbes principaux, adjectifs, adverbes, négations)"], correct:2, why:"Ce sont les « content words » qui portent l'accent ; les « function words » passent à la forme faible. Écouter les mots accentués suffit souvent à comprendre l'essentiel." },
      { cat:"ecrit", q:"En règle générale, une question en « wh- » comme « Where do you live? » se termine par :", opts:["une intonation montante ↗","une intonation descendante ↘","une intonation obligatoirement plate"], correct:1, why:"Questions en « wh- » : intonation descendante. Questions fermées (« Do you live here? ») : généralement montante. Une montée sur une question en « wh- » peut exprimer la surprise ou demander de répéter." },
      { cat:"oral", audio:"What are you going to do about it?", q:"Écoute (à l'oral naturel : « Whatcha gonna do about it? ») : que demande-t-on ?", opts:["Ce que la personne va faire à ce sujet","Ce que la personne a fait la veille","Si la personne a besoin d'aide","Où la personne compte aller"], correct:0, why:"« What are you » → /ˈwɒtʃə/, « going to » → /ˈɡʌnə/. Le sens reste : « Qu'est-ce que tu vas faire à ce sujet ? »." },
      { cat:"oral", audio:"I can't come on Friday, but I can come on Saturday.", q:"Écoute : quel jour la personne peut-elle venir ?", opts:["Vendredi","Samedi","Les deux jours","Aucun des deux"], correct:1, why:"« I /ˈkɑːnt/ come on Friday » (accentué, négatif) ≠ « I /kən/ come on Saturday » (faible, affirmatif)." },
      { cat:"oral", audio:"Did you manage to turn it off before you left?", q:"Écoute : que demande-t-on ?", opts:["Si l'appareil a bien été allumé","Si la personne est partie en retard","Si elle a acheté un nouvel appareil","Si elle a réussi à l'éteindre avant de partir"], correct:3, why:"« Did you » → /ˈdɪdʒə/ ; « turn it off » → [tɜː nɪ ˈtɒf] ; « manage to » = réussir à." },
      { cat:"oral", audio:"We have to leave in a couple of minutes.", q:"Écoute : combien de temps reste-t-il avant de partir ?", opts:["Quelques heures","Deux jours","Quelques minutes","Une demi-heure"], correct:2, why:"« have to » → /ˈhæftə/ ; « a couple of » → /ə ˈkʌpl̩ ə/ (« a coupla ») = deux ou quelques minutes." },
      { cat:"comprehension", passage:"“When I first moved to Manchester, I understood almost nothing in the pub. People weren't actually speaking fast — they were linking words together and dropping sounds. Once I learnt to listen for the stressed words instead of trying to catch every single word, conversations became much easier to follow.”", q:"D'après le texte, qu'est-ce qui a aidé la personne à comprendre ?", opts:["Demander aux gens de parler plus lentement","Écouter les mots accentués plutôt que chaque mot","Éviter d'aller au pub","Apprendre l'accent de Manchester par cœur"], correct:1, why:"« Once I learnt to listen for the stressed words instead of trying to catch every single word » — la stratégie clé de ce palier." },
      { cat:"comprehension", passage:"“— Whatcha doing tonight? — Dunno yet. I've gotta finish a report first, but I wanna go out after. Didja say Sam's coming?” (transcription fidèle de l'oral)", q:"D'après le texte, quel est le programme de la deuxième personne ?", opts:["Rester chez elle toute la soirée","Aller voir Sam directement","Finir un rapport, puis sortir","Elle a déjà annulé sa soirée"], correct:2, why:"« I've gotta finish a report first » (= I've got to), « but I wanna go out after » (= I want to). « Dunno » = I don't know." },
      { cat:"comprehension", passage:"“(rappel) I've made a lot of progress with my listening this year. I took part in an online conversation club every week, and I set myself a clear goal: to understand a full podcast episode without subtitles.”", q:"D'après le texte, quel objectif la personne s'était-elle fixé ?", opts:["Comprendre un épisode de podcast entier sans sous-titres","Créer son propre club de conversation","Ne plus jamais écouter de podcasts","Obtenir un diplôme"], correct:0, why:"« I set myself a clear goal » = je me suis fixé un objectif clair (rappel B2.4 : make progress, take part in, set a goal)." },
      { cat:"comprehension", passage:"“(rappel) Would you mind speaking a little more slowly? I'm afraid I didn't quite catch the last part — and I'd rather not make a mistake with the figures.”", q:"D'après le texte, que demande poliment la personne ?", opts:["Qu'on répète plus fort","Qu'on parle un peu plus lentement","Qu'on lui envoie les chiffres par e-mail","Qu'on arrête la conversation"], correct:1, why:"« Would you mind + -ing » = registre poli (rappel B2.3) ; « make a mistake » (rappel B2.4) ; « catch » = saisir à l'oral." }
    ],
    PRON_VERBS: [
      {en:"I'm going to call her tonight.", fr:"Je vais l'appeler ce soir. (dis-le : « I'm gonna call her tonight »)"},
      {en:"Do you want to come with us?", fr:"Tu veux venir avec nous ? (dis-le : « D'you wanna come with us? »)"},
      {en:"Did you see what happened?", fr:"Tu as vu ce qui s'est passé ? (dis-le : « Didja see… »)"},
      {en:"Could you turn it off, please?", fr:"Tu pourrais l'éteindre, s'il te plaît ? (enchaîne : « tur-ni-toff »)"},
      {en:"I can come, but I can't stay long.", fr:"Je peux venir, mais je ne peux pas rester longtemps. (/kən/ faible, /kɑːnt/ accentué)"},
      {en:"Sorry, I didn't catch that.", fr:"Pardon, je n'ai pas bien saisi."}
    ],
    READING: [
      "Many learners believe that native speakers simply talk too fast, but speed is rarely the real problem.",
      "The real challenge is that spoken English does not sound like written English at all.",
      "In a sentence like “I'm going to have a cup of tea”, only a few words are clearly pronounced.",
      "The rest are reduced, linked together or even dropped completely, so it sounds more like “I'm gonna have a cuppa tea”.",
      "This happens because English is a stress-timed language, with a regular beat on the important words.",
      "The small grammatical words in between, such as “to”, “of” and “and”, are squeezed into weak forms with a schwa.",
      "French, by contrast, gives almost the same length to every syllable, which is why French speakers often sound very precise but slightly robotic in English.",
      "The good news is that you don't need to copy every reduced form to be understood.",
      "However, learning to recognise them will transform your listening, especially with films, podcasts and phone calls.",
      "Start by listening for the stressed words — they carry the message, while the rest is mostly rhythm."
    ],
    GLOSS: [
      {en:"rarely", fr:"rarement"},
      {en:"beat", fr:"temps (musical), battement"},
      {en:"to squeeze", fr:"comprimer, serrer"},
      {en:"by contrast", fr:"par contraste, à l'inverse"},
      {en:"slightly", fr:"légèrement"},
      {en:"to recognise", fr:"reconnaître (US : recognize)"}
    ],
    GRAMMAR1: {
      heading: "Formes faibles et discours connecté : pourquoi l'anglais « avale » des sons",
      lede: "À l'oral, les anglophones ne prononcent pas chaque mot comme à l'écrit. Les petits mots grammaticaux se réduisent, les mots s'enchaînent et certains sons disparaissent ou se transforment. Ce n'est ni paresseux ni incorrect : c'est l'anglais standard parlé, celui des journalistes comme des amis.",
      conj: [["Mot grammatical non accentué →","forme faible avec /ə/","I need to go → /tə/ ; a cup of tea → /ə/"],["Consonne finale + voyelle →","linking","turn it off → [tɜː nɪ ˈtɒf]"],["/d/ ou /t/ + « you » →","assimilation /dʒ/, /tʃ/","did you → /ˈdɪdʒə/ ; don't you → /ˈdəʊntʃə/"],["going to / want to / have to →","forme réduite","gonna /ˈɡʌnə/ · wanna /ˈwɒnə/ · hafta /ˈhæftə/"]],
      ruleHtml: "📖 Les <b>function words</b> (to, for, of, and, can, was, have, them…) ont deux prononciations : une <b>forme forte</b>, rare (fin de phrase, insistance, réponse courte), et une <b>forme faible</b>, normale, construite sur le <b>schwa /ə/</b>. Les <b>formes réduites</b> (gonna, wanna, hafta, gotta, didja, whatcha) sont à <b>comprendre</b> absolument ; à l'oral informel, tu peux les utiliser, mais pas à l'écrit soigné. Piège francophone : prononcer « to » /tuː/, « for » /fɔː/ et « and » /ænd/ à chaque fois, ce qui donne un anglais martelé et moins fluide.",
      dialogueLede: "Deux collègues à la machine à café, en anglais parlé naturel :",
      dialogue: [
        {who:"them", en:"Whatcha doing after work? D'you wanna grab a bite?", fr:"Tu fais quoi après le boulot ? Tu veux manger un morceau ?"},
        {who:"you", en:"I'd love to, but I've gotta finish this report — I'm gonna be here till seven.", fr:"J'adorerais, mais je dois finir ce rapport — je vais être là jusqu'à sept heures."}
      ],
      whyLabel: "Pourquoi « I'd love to » ne se réduit-il pas ?",
      whyText: "Parce que « to » est en <b>fin de phrase</b> : il reprend sa <b>forme forte</b> /tuː/. Même règle pour les autres function words : « What are you looking <b>at</b>? » /æt/, « Yes, I <b>can</b> » /kæn/, « Who is it <b>for</b>? » /fɔː/. La forme faible s'emploie <b>au milieu</b> de la phrase, la forme forte à la fin ou pour insister."
    },
    GRAMMAR2: {
      heading: "Accent de mot, accent de phrase, rythme et intonation",
      dialogueLede: "Un malentendu corrigé grâce à l'accent contrastif :",
      dialogue: [
        {who:"them", en:"So you're meeting Anna on Tuesday?", fr:"Donc tu vois Anna mardi ?"},
        {who:"you", en:"No, I'm meeting Anna on THURSDAY — it's Tom I'm seeing on Tuesday.", fr:"Non, je vois Anna JEUDI — c'est Tom que je vois mardi."}
      ],
      ruleHtml: "💭 <b>Word stress</b> : chaque mot de plusieurs syllabes a une syllabe accentuée (plus longue, plus forte, plus haute) — PHOtograph, phoTOgraphy, photoGRAphic ; et parfois le nom et le verbe diffèrent : a <b>RE</b>cord / to re<b>CORD</b>, a <b>PRE</b>sent / to pre<b>SENT</b>. <b>Sentence stress</b> : on accentue les mots porteurs de sens, et on peut déplacer l'accent pour <b>corriger</b> ou <b>contraster</b> (« on THURSDAY »). <b>Intonation</b> : descendante pour affirmer et pour les questions en wh-, montante pour les questions fermées et les listes inachevées.",
      whyLabel: "Anglais « stress-timed », français « syllable-timed »",
      whyText: "En français, chaque syllabe dure à peu près le même temps, et l'accent tombe en fin de groupe. En anglais, ce sont les <b>syllabes accentuées</b> qui tombent à intervalles réguliers, comme les temps forts d'une musique : « <b>CATS</b> <b>CHASE</b> <b>MICE</b> » et « the <b>CATS</b> have been <b>CHAS</b>ing the <b>MICE</b> » prennent presque le même temps à dire ! Les syllabes faibles se compriment entre les temps forts. Taper le rythme sur la table en répétant une phrase est un excellent exercice."
    },
    REVIEW: [
      { q:"Comment dit-on « prendre une décision » ?", opts:["Make a decision","Do a decision"], correct:0, fb:"« make a decision » — le « prendre » français se traduit par « make ». (rappel B2.4)" },
      { q:"Comment dit-on « faire une pause » ?", opts:["Make a break","Take a break"], correct:1, fb:"« take a break » = faire une pause. (rappel B2.4)" },
      { q:"Quelle collocation est la plus naturelle ?", opts:["Heavy rain","Strong rain"], correct:0, fb:"« heavy rain », « heavy traffic ». (rappel B2.4)" },
      { q:"Comment dit-on « prendre en compte le coût » ?", opts:["Take the cost into account","Take the cost in count"], correct:0, fb:"« take something into account » = prendre en compte. (rappel B2.4)" },
      { q:"« I'm afraid that's ___ unlikely. »", opts:["strongly","highly"], correct:1, fb:"« highly unlikely » = très peu probable. (rappel B2.4)" }
    ],
    CULTURE_NOTE: {
      icon: "🎧",
      title: "Note culturelle — un seul anglais, mille accents",
      html: "L'« anglais de manuel » (souvent appelé <b>RP</b>, Received Pronunciation) n'est parlé que par une petite minorité de Britanniques. À Londres, tu entendras souvent le <b>coup de glotte</b> à la place du /t/ : « bottle » → [ˈbɒʔl̩], « not a lot » → [nɒʔ ə ˈlɒʔ]. Aux États-Unis, le /t/ entre deux voyelles devient un « d » très bref (<b>flap t</b>) : « water » → [ˈwɑːɾɚ], « better » → [ˈbeɾɚ], et le « r » final est toujours prononcé. En Écosse, en Irlande, en Australie ou en Inde, les voyelles changent encore. La bonne nouvelle : les <b>formes faibles, les liaisons et le rythme accentuel</b> sont communs à presque tous ces accents. Les maîtriser, c'est la clé pour comprendre n'importe quel anglophone — sans avoir besoin d'imiter un accent en particulier."
    },
    NEXT_PREVIEW: "B2.6 (Diplomatic English) : exprimer un désaccord sans créer de conflit inutile — passer du direct (« You're wrong ») au diplomatique (« I see your point, but I'm not entirely convinced »), adoucir son message et proposer une alternative.",
    META: { vocabTitle:"Sonner vraiment anglais (B2.5)", lectureTitle:"Pourquoi les natifs semblent parler si vite", bilanTitle:"Bravo, tu reconnais maintenant l'anglais tel qu'il est vraiment prononcé !", pronLabel:"Formes faibles, formes réduites, liaisons et accent de phrase", todayLede:"comprendre l'anglais réellement prononcé : formes réduites (gonna, wanna, didja), formes faibles, liaisons, accent, rythme et intonation — s'appuie sur B2.4 (collocations) et B1.3 (vraies conversations)" }
  };

  // B2.6 — Diplomatic English — s'appuie sur B2.5 (connected speech), B2.3 (registres) et B2.2 (nuance)
  LESSONS_EXT[45] = {
    code: "B2.6", level: "B2",
    VOCAB: [
      {block:"Exprimer un désaccord avec tact", en:"I see your point, but…", ipa:"/aɪ ˈsiː jɔː ˈpɔɪnt bət/", fr:"Je comprends ton point de vue, mais…", note:"La structure reine du désaccord diplomatique : on reconnaît d'abord l'avis de l'autre, puis on apporte la nuance."},
      {block:"Exprimer un désaccord avec tact", en:"I'm not sure I agree", ipa:"/aɪm ˈnɒt ʃɔːr aɪ əˈɡriː/", fr:"Je ne suis pas sûr(e) d'être d'accord", note:"Version adoucie de « I don't agree ». Souvent, la personne est tout à fait sûre de ne pas être d'accord : c'est une politesse, pas un vrai doute."},
      {block:"Exprimer un désaccord avec tact", en:"I'm not entirely convinced", ipa:"/aɪm ˈnɒt ɪnˈtaɪəli kənˈvɪnst/", fr:"Je ne suis pas complètement convaincu(e)", note:"Niveau avancé : « not entirely », « not totally », « not completely » transforment un « non » en « pas tout à fait »."},
      {block:"Exprimer un désaccord avec tact", en:"I take your point", ipa:"/aɪ ˈteɪk jɔː ˈpɔɪnt/", fr:"J'entends ton argument", note:"Très britannique : on reconnaît que l'argument est valable… souvent juste avant de le contester (« I take your point, but… »)."},
      {block:"Exprimer un désaccord avec tact", en:"With all due respect", ipa:"/wɪð ˈɔːl ˈdjuː rɪˈspekt/", fr:"Sauf votre respect, avec tout le respect que je vous dois", note:"Attention : malgré les apparences, cette formule annonce souvent un désaccord FORT, voire une critique. À manier avec prudence, surtout face à un supérieur."},
      {block:"Exprimer un désaccord avec tact", en:"I beg to differ", ipa:"/aɪ ˈbeɡ tə ˈdɪfə/", fr:"Permettez-moi de ne pas être d'accord", note:"Formel, un peu solennel ; peut être utilisé avec humour entre amis. Ne pas traduire mot à mot (« beg » = supplier)."},
      {block:"Adoucir son message (softeners)", en:"Slightly", ipa:"/ˈslaɪtli/", fr:"Légèrement, un peu", note:"« That's slightly more than we expected » = ça dépasse (en réalité nettement) ce qu'on avait prévu. Adoucit un problème."},
      {block:"Adoucir son message (softeners)", en:"A bit of a…", ipa:"/ə ˈbɪt əv ə/", fr:"Un petit…, un léger…", note:"« We have a bit of a problem » = on a un (petit) problème — euphémisme typique qui peut désigner un vrai souci."},
      {block:"Adoucir son message (softeners)", en:"I'm afraid (that)…", ipa:"/aɪm əˈfreɪd/", fr:"Je crains que…, malheureusement…", note:"Aucune peur ici : « I'm afraid I can't make it » = malheureusement, je ne pourrai pas venir. Introduit une mauvaise nouvelle poliment."},
      {block:"Adoucir son message (softeners)", en:"Perhaps", ipa:"/pəˈhæps/", fr:"Peut-être", note:"Un peu plus doux et plus britannique que « maybe » : « Perhaps we could look at it again? »."},
      {block:"Adoucir son message (softeners)", en:"It might be worth…", ipa:"/ɪt ˈmaɪt bi ˈwɜːθ/", fr:"Il vaudrait peut-être la peine de…", note:"Toujours suivi de -ing : « It might be worth checking the figures again » = une critique déguisée en suggestion."},
      {block:"Adoucir son message (softeners)", en:"I was wondering if…", ipa:"/aɪ wəz ˈwʌndərɪŋ ɪf/", fr:"Je me demandais si…", note:"Le passé et la forme progressive « éloignent » la demande et la rendent plus polie, même si elle concerne le présent."},
      {block:"Proposer une alternative", en:"Have you considered…?", ipa:"/həv ju kənˈsɪdəd/", fr:"As-tu envisagé… ?", note:"Suivi de -ing ou d'un nom : « Have you considered hiring a freelancer? ». Propose sans imposer."},
      {block:"Proposer une alternative", en:"What if we…?", ipa:"/ˈwɒt ɪf wi/", fr:"Et si on… ?", note:"Suivi du prétérit (plus doux) ou du présent : « What if we postponed the launch? » / « What if we try another approach? »."},
      {block:"Proposer une alternative", en:"Another way of looking at it", ipa:"/əˈnʌðə ˈweɪ əv ˈlʊkɪŋ ət ɪt/", fr:"Une autre façon de voir les choses", note:"« Another way of looking at it is… » : introduit une vision différente sans dire que l'autre a tort."},
      {block:"Proposer une alternative", en:"Wouldn't it be better to…?", ipa:"/ˈwʊdnt ɪt bi ˈbetə tə/", fr:"Ne serait-il pas mieux de… ?", note:"La question négative invite l'autre à être d'accord au lieu de lui imposer un avis."},
      {block:"Proposer une alternative", en:"Could we perhaps…?", ipa:"/kəd wi pəˈhæps/", fr:"Pourrions-nous peut-être… ?", note:"Double adoucissement (modal + « perhaps ») : très courant en réunion au Royaume-Uni."},
      {block:"Trouver un terrain d'entente", en:"Common ground", ipa:"/ˈkɒmən ˈɡraʊnd/", fr:"Terrain d'entente, points communs", note:"« Let's try to find some common ground » = essayons de trouver un terrain d'entente."},
      {block:"Trouver un terrain d'entente", en:"To meet (somebody) halfway", ipa:"/tə ˈmiːt ˌhɑːfˈweɪ/", fr:"Couper la poire en deux, faire un pas vers l'autre", note:"« I'm willing to meet you halfway on the price » = je suis prêt(e) à faire un compromis sur le prix."},
      {block:"Trouver un terrain d'entente", en:"A compromise", ipa:"/ə ˈkɒmprəmaɪz/", fr:"Un compromis", note:"« reach a compromise » (rappel B2.4 : reach). Faux ami partiel : le verbe « to compromise » peut aussi vouloir dire « compromettre » (« compromise security »)."},
      {block:"Trouver un terrain d'entente", en:"Fair enough", ipa:"/ˌfeər ɪˈnʌf/", fr:"C'est juste, d'accord, ça se tient", note:"Concession rapide et courante à l'oral : on accepte l'argument de l'autre sans forcément changer d'avis sur tout."},
      {block:"Trouver un terrain d'entente", en:"To agree to disagree", ipa:"/tu əˈɡriː tə ˌdɪsəˈɡriː/", fr:"Accepter de ne pas être d'accord", note:"« Let's agree to disagree » : clôt élégamment un débat sans vainqueur ni perdant."},
      {block:"Verbes clés (B2.6)", en:"Disagree (with)", ipa:"/ˌdɪsəˈɡriː/", fr:"Ne pas être d'accord (avec)", note:"Piège : « I disagree », jamais « I am disagree » (ni « I am agree »). « disagree with somebody / on something »."},
      {block:"Verbes clés (B2.6)", en:"Suggest", ipa:"/səˈdʒest/", fr:"Suggérer, proposer", note:"Jamais « suggest somebody to do » ! On dit « I suggest (that) we wait » ou « I suggest waiting »."},
      {block:"Verbes clés (B2.6)", en:"Concede", ipa:"/kənˈsiːd/", fr:"Concéder, admettre", note:"« I concede that the deadline is tight, but… » : reconnaître un point pour mieux défendre le sien (rappel B2.1)."},
      {block:"Verbes clés (B2.6)", en:"Object (to)", ipa:"/əbˈdʒekt/", fr:"S'opposer (à), objecter", note:"Verbe accentué sur la 2e syllabe (obJECT) ; le nom « an object » l'est sur la 1re (OBject). « object to + -ing » : « I object to working weekends »."}
    ],
    MEM_WORDS: [0,2,4,11,19,23],
    MINI_CHECKS: [
      { q:"Quelle formule est la plus diplomatique ?", opts:["You're wrong.","I don't agree.","I see your point, but I'm not entirely convinced."], correct:2, fb:"On reconnaît le point de vue de l'autre (« I see your point ») puis on nuance (« not entirely »)." },
      { q:"« I'm afraid I can't make it on Friday » veut dire :", opts:["J'ai peur de venir vendredi","Malheureusement, je ne peux pas venir vendredi","Je crains que vendredi soit dangereux"], correct:1, fb:"« I'm afraid » introduit poliment une mauvaise nouvelle ; aucune peur réelle." },
      { q:"Quelle phrase est correcte ?", opts:["I suggest that we wait until Monday.","I suggest you to wait until Monday.","I am disagree with this plan."], correct:0, fb:"« suggest (that) + sujet + verbe » ou « suggest + -ing » ; jamais « suggest somebody to do ». Et « I disagree », sans « am »." },
      { q:"« With all due respect… » annonce généralement :", opts:["un compliment sincère","un désaccord, parfois assez fort","un remerciement"], correct:1, fb:"Malgré son apparence polie, la formule précède presque toujours une critique ou un désaccord net." }
    ],
    ROUNDS: [
      { bank:["point","but","your","see","I","convinced","I'm","entirely","not","."], answer:"i see your point but i'm not entirely convinced .", display:"I see your point, but I'm not entirely convinced.", fr:"Je comprends ton point de vue, mais je ne suis pas complètement convaincu(e)." },
      { bank:["sure","agree","I'm","I","not","."], answer:"i'm not sure i agree .", display:"I'm not sure I agree.", fr:"Je ne suis pas sûr(e) d'être d'accord." },
      { bank:["of","problem","We","a","have","bit","a","."], answer:"we have a bit of a problem .", display:"We have a bit of a problem.", fr:"Nous avons un petit problème." },
      { bank:["checking","It","again","be","might","figures","worth","the","."], answer:"it might be worth checking the figures again .", display:"It might be worth checking the figures again.", fr:"Il vaudrait peut-être la peine de revérifier les chiffres." },
      { bank:["freelancer","considered","a","you","Have","hiring","?"], answer:"have you considered hiring a freelancer ?", display:"Have you considered hiring a freelancer?", fr:"As-tu envisagé d'embaucher un freelance ?" },
      { bank:["launch","if","postponed","What","the","we","?"], answer:"what if we postponed the launch ?", display:"What if we postponed the launch?", fr:"Et si on reportait le lancement ?" },
      { bank:["better","Wouldn't","wait","be","to","it","?"], answer:"wouldn't it be better to wait ?", display:"Wouldn't it be better to wait?", fr:"Ne serait-il pas mieux d'attendre ?" },
      { bank:["you","halfway","I'm","to","meet","willing","."], answer:"i'm willing to meet you halfway .", display:"I'm willing to meet you halfway.", fr:"Je suis prêt(e) à faire un pas vers toi." },
      { bank:["disagree","agree","Let's","to","."], answer:"let's agree to disagree .", display:"Let's agree to disagree.", fr:"Acceptons de ne pas être d'accord." },
      { bank:["if","wondering","could","I","we","was","talk","."], answer:"i was wondering if we could talk .", display:"I was wondering if we could talk.", fr:"Je me demandais si on pourrait discuter." }
    ],
    QUIZ: [
      { cat:"ecrit", q:"Classe du plus direct au plus diplomatique : (a) I don't agree. (b) You're wrong. (c) I'm not sure I agree with that.", opts:["a → b → c","b → a → c","c → a → b"], correct:1, why:"« You're wrong » (direct, attaque la personne) → « I don't agree » (neutre, parle de l'idée) → « I'm not sure I agree with that » (diplomatique)." },
      { cat:"ecrit", q:"“I take your ___, but I still think we need more time.”", opts:["point","idea","reason"], correct:0, why:"« I take your point » = j'entends ton argument. Expression figée." },
      { cat:"ecrit", q:"“It might be worth ___ a second opinion.”", opts:["to get","get","getting"], correct:2, why:"« It might be worth + -ing » : « worth » est toujours suivi du gérondif." },
      { cat:"ecrit", q:"Quelle phrase est correcte ?", opts:["I am disagree with you.","I disagree with you.","I don't agree to you."], correct:1, why:"« disagree » est un verbe : « I disagree with you » ou « I don't agree with you ». « I am (dis)agree » est un calque du français." },
      { cat:"ecrit", q:"“I ___ that we postpone the meeting until next week.”", opts:["suggest","propose you","advise to"], correct:0, why:"« I suggest (that) we postpone… ». Structures incorrectes : « propose you that », « advise to postpone » (on dit « I advise postponing »)." },
      { cat:"ecrit", q:"Pour adoucir « Your report has mistakes », quelle version est la plus diplomatique ?", opts:["Your report is full of mistakes.","There seem to be one or two small errors in the report.","Your report is wrong."], correct:1, why:"« There seem to be » (distance), « one or two » et « small » (minimisation), « the report » au lieu de « your report » (on dépersonnalise la critique)." },
      { cat:"ecrit", q:"“___ we look at the budget again before deciding?”", opts:["Must","Could","Should to"], correct:1, why:"« Could we…? » propose sans imposer. « Must we…? » sonne comme une plainte, « should to » est incorrect." },
      { cat:"ecrit", q:"Que signifie « Fair enough » dans une discussion ?", opts:["C'est injuste","C'est assez, arrête","C'est juste, j'accepte cet argument"], correct:2, why:"« Fair enough » = concession : on reconnaît que l'argument de l'autre se tient." },
      { cat:"ecrit", q:"Pourquoi « I was wondering if you could help me » est-il plus poli que « Can you help me? » ?", opts:["Parce que le passé et la forme progressive créent une distance qui adoucit la demande","Parce que la demande concerne le passé","Parce que « wondering » est plus formel que « help »"], correct:0, why:"La demande concerne bien le présent : le passé et le « -ing » servent uniquement à prendre de la distance, donc à être plus poli (rappel B2.3 : registres)." },
      { cat:"ecrit", q:"Après un long débat sans accord possible, quelle formule clôt la discussion élégamment ?", opts:["Whatever.","Let's agree to disagree.","You'll see I'm right."], correct:1, why:"« Let's agree to disagree » = acceptons nos désaccords, sans vainqueur ni perdant. « Whatever » paraît méprisant." },
      { cat:"oral", audio:"I see your point, but I'm not entirely convinced it will work.", q:"Écoute : quelle est la position de la personne ?", opts:["Elle est totalement d'accord","Elle comprend l'argument mais doute que cela fonctionne","Elle refuse d'écouter","Elle n'a pas compris l'idée"], correct:1, why:"« I see your point » (reconnaissance) + « but I'm not entirely convinced » (désaccord adouci)." },
      { cat:"oral", audio:"I'm afraid we have a bit of a problem with the delivery.", q:"Écoute : que dit réellement la personne ?", opts:["Elle a peur du livreur","Tout va bien avec la livraison","La livraison est déjà arrivée","Il y a un problème avec la livraison"], correct:3, why:"« I'm afraid » = malheureusement ; « a bit of a problem » = euphémisme : il y a un vrai problème, annoncé avec tact." },
      { cat:"oral", audio:"Have you considered working from home two days a week instead?", q:"Écoute : que propose la personne ?", opts:["Télétravailler deux jours par semaine à la place","Démissionner","Travailler le week-end","Travailler deux heures de plus par jour"], correct:0, why:"« Have you considered + -ing » propose une alternative sans l'imposer ; « instead » = à la place." },
      { cat:"oral", audio:"I'm willing to meet you halfway, but I can't go any lower than that.", q:"Écoute : quelle est l'attitude de la personne ?", opts:["Elle refuse toute négociation","Elle accepte toutes les conditions","Elle fait un compromis, mais fixe une limite","Elle veut arrêter la réunion"], correct:2, why:"« meet you halfway » = faire un pas vers l'autre ; « I can't go any lower » = je ne peux pas descendre plus bas (limite)." },
      { cat:"comprehension", passage:"“In the meeting, Mark said the new schedule was a disaster. Julia, on the other hand, said: ‘I take your point about the workload, but perhaps we could try it for a month before making a final decision?’ In the end, the team agreed with her.”", q:"D'après le texte, pourquoi l'équipe a-t-elle suivi Julia ?", opts:["Parce qu'elle a été plus agressive que Mark","Parce qu'elle a reconnu l'argument de Mark tout en proposant un essai d'un mois","Parce qu'elle a refusé tout changement","Parce que Mark était absent"], correct:1, why:"« I take your point » (concession) + « perhaps we could try it for a month » (alternative adoucie) : la stratégie diplomatique typique." },
      { cat:"comprehension", passage:"“Dear Ms Grant, thank you for your proposal. While we appreciate the effort that has gone into it, I'm afraid the budget is slightly higher than we had anticipated. It might be worth discussing whether some elements could be simplified.”", q:"D'après le texte, que pense réellement l'entreprise de la proposition ?", opts:["Elle l'accepte telle quelle","Elle la trouve trop chère et souhaite la revoir","Elle ne l'a pas encore lue","Elle la trouve trop simple"], correct:1, why:"« slightly higher than we had anticipated » + « It might be worth discussing… simplified » : sous les adoucissements, le message est clair — trop cher, à retravailler." },
      { cat:"comprehension", passage:"“(rappel) — Whatcha gonna say to the boss? — Dunno. I wanna be honest, but I've gotta be careful. I'll probably say something like ‘I'm not sure that's the best option’.” (transcription de l'oral)", q:"D'après le texte, comment la personne compte-t-elle s'exprimer ?", opts:["Avec franchise, mais prudemment et avec tact","De façon très directe et agressive","Elle ne dira rien du tout","Elle démissionnera"], correct:0, why:"« I wanna be honest, but I've gotta be careful » (rappel B2.5 : wanna = want to, gotta = got to) + une formule diplomatique." },
      { cat:"comprehension", passage:"“(rappel) After a long discussion, both sides finally reached a compromise. Each of them had to make an effort, but they took everyone's concerns into account, and the final agreement made a real difference to the staff.”", q:"D'après le texte, comment les deux parties sont-elles parvenues à un accord ?", opts:["L'une des deux a tout imposé","Elles ont abandonné la discussion","Chacune a fait un effort en tenant compte des préoccupations de tous","Un juge a tranché"], correct:2, why:"« reach a compromise », « make an effort », « take into account », « make a difference » (rappel B2.4 : collocations)." }
    ],
    PRON_VERBS: [
      {en:"I see your point, but I'm not entirely convinced.", fr:"Je comprends ton point de vue, mais je ne suis pas complètement convaincu(e)."},
      {en:"I'm afraid we have a bit of a problem.", fr:"Malheureusement, nous avons un petit problème."},
      {en:"It might be worth looking at it again.", fr:"Il vaudrait peut-être la peine de le revoir."},
      {en:"Have you considered asking for more time?", fr:"As-tu envisagé de demander plus de temps ?"},
      {en:"Wouldn't it be better to wait until Monday?", fr:"Ne serait-il pas mieux d'attendre lundi ?"},
      {en:"I suggest we meet halfway.", fr:"Je propose qu'on coupe la poire en deux."}
    ],
    READING: [
      "When Claire joined a British company, she quickly realised that her French directness was sometimes misunderstood.",
      "In her first meeting, she simply said “That won't work” when a colleague presented his plan.",
      "Nobody reacted, but after the meeting her manager took her aside for a quiet word.",
      "He explained that in his team, people rarely disagreed so openly, even when they were completely sure.",
      "Instead, they would say something like “That's an interesting idea — have you considered the costs?”",
      "At first, Claire found this indirect style confusing and even a little frustrating.",
      "Over time, however, she noticed that diplomatic phrases helped to keep discussions calm and productive.",
      "She learnt to acknowledge other people's ideas before offering an alternative, and to soften criticism with words like “slightly” or “perhaps”.",
      "She still says exactly what she thinks, but now her colleagues actually listen to her.",
      "As her manager once put it: “It's not what you say — it's how people feel when you say it.”"
    ],
    GLOSS: [
      {en:"directness", fr:"franc-parler, franchise directe"},
      {en:"to take somebody aside", fr:"prendre quelqu'un à part"},
      {en:"a quiet word", fr:"un mot en privé, discrètement"},
      {en:"to acknowledge", fr:"reconnaître, prendre acte de"},
      {en:"to soften", fr:"adoucir"}
    ],
    GRAMMAR1: {
      heading: "Les outils grammaticaux de l'adoucissement (softening)",
      lede: "En anglais, la diplomatie passe moins par le vocabulaire que par la grammaire : modaux, temps du passé, questions négatives et petits mots qui minimisent. Le message reste le même, mais il devient plus facile à accepter.",
      conj: [["Modal au lieu d'une affirmation →","might / could / would","That might be difficult. (= c'est difficile)"],["Passé ou progressif de distance →","I was wondering / I was hoping","I was hoping we could discuss it."],["Question négative →","Wouldn't it / Isn't it","Wouldn't it be better to wait?"],["Minimiseur ou « not very » + adjectif positif →","slightly / a bit / not very","It's not very convenient. (= c'est gênant)"]],
      ruleHtml: "📖 Pour adoucir un désaccord ou une critique, combine plusieurs outils : <b>un modal</b> (« That <b>could</b> be a problem »), <b>la distance du passé</b> (« I <b>was wondering</b> if… »), <b>une question</b> plutôt qu'une affirmation (« <b>Wouldn't it</b> be better to…? »), <b>un minimiseur</b> (« <b>slightly</b> », « <b>a bit</b> ») et <b>« not very » + adjectif positif</b> au lieu d'un adjectif négatif (« <b>not very</b> practical » au lieu de « impractical »). Piège francophone : le « conditionnel de politesse » français ne suffit pas toujours ; les anglophones ajoutent volontiers <b>deux ou trois</b> adoucisseurs dans la même phrase.",
      dialogueLede: "Réunion d'équipe : une collègue propose de tout lancer vendredi.",
      dialogue: [
        {who:"them", en:"I think we should launch the new website on Friday.", fr:"Je pense qu'on devrait lancer le nouveau site vendredi."},
        {who:"you", en:"I see your point, but wouldn't it be slightly safer to wait until we've tested it properly?", fr:"Je comprends, mais ne serait-il pas un peu plus prudent d'attendre de l'avoir bien testé ?"}
      ],
      whyLabel: "Pourquoi « not very good » plutôt que « bad » ?",
      whyText: "Parce qu'en anglais, nier un adjectif <b>positif</b> est bien plus doux qu'employer un adjectif <b>négatif</b>. « The results are <b>not very encouraging</b> » dit la même chose que « The results are bad », mais sans brusquer. C'est l'<b>understatement</b> à l'anglaise : on dit moins pour faire comprendre autant — et l'interlocuteur britannique, lui, entend parfaitement le message."
    },
    GRAMMAR2: {
      heading: "Secret English — Same idea ≠ same social effect",
      dialogueLede: "Le même désaccord, dit de deux façons à un supérieur :",
      dialogue: [
        {who:"them", en:"So, we're all agreed: we cut the training budget by half.", fr:"Bon, on est tous d'accord : on réduit le budget formation de moitié."},
        {who:"you", en:"With respect, I'm not entirely convinced — could we perhaps look at other options first?", fr:"Sauf votre respect, je ne suis pas complètement convaincu(e) — pourrions-nous peut-être étudier d'autres options d'abord ?"}
      ],
      ruleHtml: "💭 Une même idée peut produire des effets sociaux très différents. L'échelle : <b>Direct</b> — « You're wrong. » (attaque la personne) → <b>Neutre</b> — « I don't agree. » (vise l'idée) → <b>Diplomatique</b> — « I'm not sure I agree with that. » → <b>Avancé</b> — « I see your point, but I'm not entirely convinced. » La structure gagnante en trois temps : <b>1. reconnaître</b> (« I see your point », « Fair enough ») → <b>2. nuancer</b> (« but I'm not sure… », « the only thing is… ») → <b>3. proposer</b> (« What if we…? », « Have you considered…? »).",
      whyLabel: "La diplomatie n'est pas de l'hypocrisie",
      whyText: "Être diplomate ne veut pas dire cacher son avis : on dit <b>la même chose</b>, mais on protège la relation. Dans un contexte anglophone, surtout britannique, un désaccord trop direct peut être perçu comme une <b>attaque personnelle</b>, même si ce n'était pas l'intention — et l'argument, aussi juste soit-il, n'est alors plus écouté. Adapter son degré de diplomatie au contexte (ami, collègue, client, supérieur) prolonge directement le travail sur les <b>registres</b> (B2.3)."
    },
    REVIEW: [
      { q:"« I'm gonna call you later » correspond à l'écrit à :", opts:["I'm going to call you later.","I'm gone to call you later."], correct:0, fb:"« gonna » = « going to » + verbe. (rappel B2.5)" },
      { q:"Dans « I can come », comment « can » est-il prononcé ?", opts:["/kən/, forme faible","/kɑːnt/"], correct:0, fb:"Affirmatif = forme faible /kən/ ; « can't » est accentué /kɑːnt/. (rappel B2.5)" },
      { q:"« Didja see it? » correspond à :", opts:["Do you see it?","Did you see it?"], correct:1, fb:"Assimilation : « did you » → /ˈdɪdʒə/. (rappel B2.5)" },
      { q:"Quels mots portent l'accent dans une phrase neutre ?", opts:["Les mots grammaticaux (to, of, the)","Les mots porteurs de sens (noms, verbes, adjectifs)"], correct:1, fb:"Les « content words » sont accentués, les « function words » réduits. (rappel B2.5)" },
      { q:"Comment s'enchaîne « Turn it off » à l'oral ?", opts:["[tɜː nɪ ˈtɒf]","Turn — it — off, avec des pauses"], correct:0, fb:"Linking consonne + voyelle. (rappel B2.5)" }
    ],
    CULTURE_NOTE: {
      icon: "🎩",
      title: "Note culturelle — ce que les Britanniques disent… et ce qu'ils veulent dire",
      html: "L'anglais britannique pratique volontiers l'<b>understatement</b> : on minimise pour rester poli, et c'est à l'auditeur de décoder. « <b>That's an interesting idea</b> » peut signifier « je n'y crois pas beaucoup ». « <b>I'll bear it in mind</b> » veut souvent dire « je ne vais probablement rien en faire ». « <b>Quite good</b> » signifie en Grande-Bretagne « correct, sans plus », alors qu'aux États-Unis « quite good » est un vrai compliment. Les Américains, eux, emballent souvent la critique dans du positif (« Great job! Just one small thing… »). Pour un francophone, habitué à débattre franchement, le piège est double : paraître brutal(e) en parlant trop directement, et <b>ne pas entendre</b> un refus poliment déguisé. Dans le doute, une question de clarification (« Just to be sure — do you think we should change it? ») évite bien des malentendus."
    },
    NEXT_PREVIEW: "B2.7 (Humour, Irony & Sarcasm) : comprendre l'humour anglophone sous toutes ses formes — ironie, sarcasme, humour pince-sans-rire (deadpan), exagération, understatement et double sens — en distinguant ce qui est dit littéralement de ce qui est réellement voulu.",
    META: { vocabTitle:"L'anglais diplomatique (B2.6)", lectureTitle:"Claire et la réunion britannique", bilanTitle:"Bravo, tu sais maintenant exprimer un désaccord avec tact, sans créer de conflit inutile !", pronLabel:"Adoucir son message : modaux, distance du passé, questions négatives", todayLede:"exprimer un désaccord sans conflit inutile, adoucir une critique et proposer une alternative — du direct (« You're wrong ») à l'avancé (« I see your point, but… ») — s'appuie sur B2.5 et B2.3 (registres)" }
  };

  // B2.7 — Humour, Irony & Sarcasm — s'appuie sur B2.6 (Diplomatic English) et B1.2 (raconter une anecdote)
  LESSONS_EXT[46] = {
    code: "B2.7", level: "B2",
    VOCAB: [
      {block:"Les formes d'humour", en:"Irony", ipa:"/ˈaɪrəni/", fr:"L'ironie", note:"Dire l'inverse de ce que la situation laisse attendre : « Lovely weather! » sous une pluie battante. Adjectif : « ironic »."},
      {block:"Les formes d'humour", en:"Sarcasm", ipa:"/ˈsɑːkæzəm/", fr:"Le sarcasme", note:"Une ironie avec une cible et une pointe de reproche : « Oh, thanks for waiting! » à quelqu'un qui est parti sans vous. Adjectif : « sarcastic » /sɑːˈkæstɪk/."},
      {block:"Les formes d'humour", en:"Understatement", ipa:"/ˌʌndəˈsteɪtmənt/", fr:"L'euphémisme, la litote", note:"Présenter une chose comme beaucoup moins importante qu'elle ne l'est : « It's a bit chilly » par -10 °C. Arme préférée de l'humour britannique."},
      {block:"Les formes d'humour", en:"Exaggeration", ipa:"/ɪɡˌzædʒəˈreɪʃn/", fr:"L'exagération", note:"Le contraire de l'understatement : « I've told you a million times! ». Terme savant : « hyperbole » /haɪˈpɜːbəli/. Un seul « g » prononcé /dʒ/ malgré le double « g »."},
      {block:"Les formes d'humour", en:"Deadpan", ipa:"/ˈdedpæn/", fr:"Pince-sans-rire, impassible", note:"Dire quelque chose de drôle avec un visage totalement sérieux. « a deadpan delivery » = une façon de le dire impassible."},
      {block:"Les formes d'humour", en:"Pun", ipa:"/pʌn/", fr:"Un jeu de mots", note:"Joue sur deux sens d'un même mot : « I used to be a banker, but I lost interest » (interest = intérêt ET intérêts bancaires)."},
      {block:"Les formes d'humour", en:"Self-deprecating", ipa:"/ˌself ˈdeprəkeɪtɪŋ/", fr:"Qui relève de l'autodérision", note:"« self-deprecating humour » = se moquer gentiment de soi-même. Très apprécié au Royaume-Uni : ça montre qu'on ne se prend pas trop au sérieux."},
      {block:"Les formes d'humour", en:"Banter", ipa:"/ˈbæntə/", fr:"Les taquineries, les échanges de piques amicales", note:"Indénombrable : « a bit of banter », jamais « a banter ». Entre collègues ou amis, c'est un signe de complicité, pas d'hostilité."},
      {block:"Comprendre la blague", en:"Tongue-in-cheek", ipa:"/ˌtʌŋ ɪn ˈtʃiːk/", fr:"Au second degré, pour rire", note:"« a tongue-in-cheek comment » = un commentaire à ne pas prendre au premier degré. L'équivalent le plus proche de notre « second degré »."},
      {block:"Comprendre la blague", en:"Wit", ipa:"/wɪt/", fr:"L'esprit, la vivacité d'esprit", note:"« She has a sharp wit » = elle a beaucoup d'esprit. Adjectif : « witty » = spirituel(le). Faux ami : « spiritual » = spirituel au sens religieux !"},
      {block:"Comprendre la blague", en:"A dry sense of humour", ipa:"/ə ˌdraɪ ˈsens əv ˈhjuːmə/", fr:"Un humour pince-sans-rire, un humour froid", note:"Humour subtil, sans effets, souvent deadpan. Orthographe : « humour » (UK) / « humor » (US)."},
      {block:"Comprendre la blague", en:"To get the joke", ipa:"/tə ˌɡet ðə ˈdʒəʊk/", fr:"Comprendre la blague, saisir l'humour", note:"« I didn't get it » = je n'ai pas compris (la blague). Plus naturel que « understand » dans ce contexte."},
      {block:"Comprendre la blague", en:"To take something literally", ipa:"/tə ˈteɪk ˌsʌmθɪŋ ˈlɪtərəli/", fr:"Prendre quelque chose au pied de la lettre, au premier degré", note:"« Don't take it literally! » = ne le prends pas au premier degré. Piège : à l'oral, « literally » est aussi utilisé pour exagérer (« I literally died laughing »)."},
      {block:"Comprendre la blague", en:"Just kidding", ipa:"/ˌdʒʌst ˈkɪdɪŋ/", fr:"Je plaisante, je rigole", note:"Pour signaler qu'on plaisantait. Variante : « I'm only joking ». « You're kidding! » = tu plaisantes ! (surprise)."},
      {block:"Les codes de l'understatement", en:"Not bad", ipa:"/ˌnɒt ˈbæd/", fr:"Pas mal (souvent = très bien)", note:"Dans la bouche d'un Britannique, « not bad at all » est souvent un vrai compliment. « Not too bad » = ça va, correct."},
      {block:"Les codes de l'understatement", en:"Not exactly", ipa:"/ˌnɒt ɪɡˈzæktli/", fr:"Pas vraiment, loin de là", note:"« He's not exactly punctual » = il est toujours en retard. Une manière polie et ironique de dire le contraire."},
      {block:"Les codes de l'understatement", en:"A bit of a…", ipa:"/ə ˈbɪt əv ə/", fr:"Un petit…, un léger… (souvent = un gros…)", note:"« We've got a bit of a problem » peut annoncer une vraie catastrophe. Plus le ton est calme, plus il faut s'inquiéter !"},
      {block:"Les codes de l'understatement", en:"Could be worse", ipa:"/ˌkʊd bi ˈwɜːs/", fr:"Ça pourrait être pire", note:"Réponse typique pour relativiser une mauvaise situation avec flegme. Souvent dit avec un léger sourire."},
      {block:"Les codes de l'understatement", en:"Oh, great.", ipa:"/əʊ ˈɡreɪt/", fr:"Super… (sarcastique = c'est nul)", note:"Avec une intonation plate ou descendante, après une mauvaise nouvelle, c'est presque toujours sarcastique. Même famille : « Oh, brilliant. », « Perfect. »."},
      {block:"Les codes de l'understatement", en:"Yeah, right.", ipa:"/ˌjeə ˈraɪt/", fr:"C'est ça, oui… (= je n'y crois pas)", note:"Deux mots positifs pour dire « je n'y crois pas du tout ». Exemple classique : deux « oui » qui font un « non »."},
      {block:"Verbes clés (B2.7)", en:"To tease", ipa:"/tə tiːz/", fr:"Taquiner", note:"Se moquer gentiment, avec affection : « My brother always teases me about my accent »."},
      {block:"Verbes clés (B2.7)", en:"To mock", ipa:"/tə mɒk/", fr:"Se moquer de, tourner en ridicule", note:"Plus négatif que « tease » : il y a une intention de rabaisser. « Stop mocking him! »."},
      {block:"Verbes clés (B2.7)", en:"To poke fun at", ipa:"/tə ˌpəʊk ˈfʌn ət/", fr:"Se moquer (gentiment) de", note:"Entre « tease » et « mock » : « The show pokes fun at politicians »."},
      {block:"Verbes clés (B2.7)", en:"To pull someone's leg", ipa:"/tə ˌpʊl ˌsʌmwʌnz ˈleɡ/", fr:"Faire marcher quelqu'un", note:"Rien à voir avec la jambe ! « Are you pulling my leg? » = tu me fais marcher ?"},
      {block:"Verbes clés (B2.7)", en:"To crack a joke", ipa:"/tə ˌkræk ə ˈdʒəʊk/", fr:"Lancer une blague, faire une plaisanterie", note:"Collocation très courante ; « make a joke » est aussi correct, mais jamais « do a joke »."},
      {block:"Verbes clés (B2.7)", en:"To laugh something off", ipa:"/tə ˌlɑːf ˌsʌmθɪŋ ˈɒf/", fr:"Tourner quelque chose en dérision, en rire pour dédramatiser", note:"« He laughed it off » = il en a ri (pour ne pas montrer qu'il était vexé). Le pronom se place au milieu."}
    ],
    MEM_WORDS: [1,2,4,10,16,23],
    MINI_CHECKS: [
      { q:"Il pleut à verse. Ton collègue britannique regarde par la fenêtre : “Lovely day for a walk.” C'est…", opts:["un conseil sincère","de l'ironie","une exagération"], correct:1, fb:"Il dit l'inverse de ce que la situation montre : c'est de l'ironie. Le contexte (la pluie) contredit les mots." },
      { q:"Un manager dit calmement : “We may have a slight issue — the server has been down since midnight.” C'est…", opts:["un understatement","du sarcasme","une blague méchante"], correct:0, fb:"Il présente un problème grave comme « léger » : c'est un understatement, typiquement britannique." },
      { q:"“I've been waiting for ages!” (après 5 minutes d'attente) — quelle forme d'humour ?", opts:["L'understatement","L'autodérision","L'exagération"], correct:2, fb:"« for ages » (depuis une éternité) pour 5 minutes : c'est une exagération (hyperbole)." },
      { q:"Comment dit-on « faire marcher quelqu'un » ?", opts:["To pull someone's leg","To take someone literally","To laugh someone off"], correct:0, fb:"« To pull someone's leg » = faire marcher quelqu'un, le taquiner avec une fausse information." }
    ],
    ROUNDS: [
      { bank:["went","that","Well","well","."], answer:"well that went well .", display:"Well, that went well.", fr:"Eh bien, ça s'est bien passé… (sarcastique : c'était une catastrophe)." },
      { bank:["cheap","not","It's","exactly","."], answer:"it's not exactly cheap .", display:"It's not exactly cheap.", fr:"Ce n'est pas vraiment donné (= c'est très cher)." },
      { bank:["leg","only","your","I","pulling","was","."], answer:"i was only pulling your leg .", display:"I was only pulling your leg.", fr:"Je te faisais juste marcher." },
      { bank:["problem","a","got","bit","We've","of","a","."], answer:"we've got a bit of a problem .", display:"We've got a bit of a problem.", fr:"On a un petit problème (= un gros problème)." },
      { bank:["humour","dry","She","sense","of","a","has","very","."], answer:"she has a very dry sense of humour .", display:"She has a very dry sense of humour.", fr:"Elle a un humour très pince-sans-rire." },
      { bank:["literally","it","Don't","take","."], answer:"don't take it literally .", display:"Don't take it literally.", fr:"Ne le prends pas au premier degré." },
      { bank:["sarcastic","being","Are","you","?"], answer:"are you being sarcastic ?", display:"Are you being sarcastic?", fr:"Tu es sarcastique, là ?" },
      { bank:["off","it","laughed","He","."], answer:"he laughed it off .", display:"He laughed it off.", fr:"Il en a ri pour dédramatiser." },
      { bank:["joke","the","get","didn't","I","."], answer:"i didn't get the joke .", display:"I didn't get the joke.", fr:"Je n'ai pas compris la blague." },
      { bank:["worse","be","It","could","."], answer:"it could be worse .", display:"It could be worse.", fr:"Ça pourrait être pire." }
    ],
    QUIZ: [
      { cat:"ecrit", q:"Un Britannique goûte ton plat et dit : “Mmm, that's not bad at all.” Le plus souvent, cela signifie :", opts:["C'est vraiment bon","C'est à peine mangeable","C'est moyen, sans plus"], correct:0, why:"« Not bad at all » est un understatement : un Britannique l'utilise volontiers pour un vrai compliment." },
      { cat:"ecrit", q:"Ton vol vient d'être annulé. Ton collègue soupire : “Oh, brilliant.” C'est :", opts:["un compliment sincère","du sarcasme","un understatement"], correct:1, why:"Un mot très positif après une mauvaise nouvelle, avec un ton plat : c'est du sarcasme. Il veut dire « c'est la catastrophe »." },
      { cat:"ecrit", q:"Comment dit-on « lancer une blague » ?", opts:["To do a joke","To tease a joke","To crack a joke"], correct:2, why:"« To crack a joke » (ou « to make a joke »). « Do a joke » est une erreur typique des francophones." },
      { cat:"ecrit", q:"Un humour « deadpan », c'est un humour :", opts:["dit avec un visage impassible, sans sourire","très bruyant et exagéré","fondé uniquement sur des jeux de mots"], correct:0, why:"« Deadpan » = impassible : on dit quelque chose de drôle avec un visage parfaitement sérieux, ce qui rend l'humour difficile à repérer." },
      { cat:"ecrit", q:"“Relax, I'm only pulling your leg!” veut dire :", opts:["Je te tire par la jambe","Détends-toi, je te fais marcher","Détends-toi, je te critique"], correct:1, why:"« To pull someone's leg » = faire marcher quelqu'un. Expression idiomatique, à ne jamais traduire mot à mot." },
      { cat:"ecrit", q:"Un « pun », c'est :", opts:["une moquerie méchante","un jeu de mots","une exagération"], correct:1, why:"« Pun » = jeu de mots, qui joue sur les deux sens d'un même mot ou sur deux mots qui se prononcent pareil." },
      { cat:"ecrit", q:"“He's not exactly the most punctual person in the office.” signifie :", opts:["Il est souvent en retard","Il est toujours parfaitement à l'heure","Il est ponctuel, mais pas à la minute près"], correct:0, why:"« Not exactly » + qualité = litote ironique : il faut comprendre le contraire. Il est très souvent en retard." },
      { cat:"ecrit", q:"Laquelle de ces phrases est une exagération (hyperbole) ?", opts:["I've told you a million times!","It's a bit chilly today.","The film wasn't great."], correct:0, why:"« A million times » est une exagération évidente. Les deux autres sont au contraire des understatements." },
      { cat:"ecrit", q:"Un humour « self-deprecating » :", opts:["se moque méchamment des autres","se moque gentiment de soi-même","ne fait rire personne"], correct:1, why:"« Self-deprecating humour » = l'autodérision. Au Royaume-Uni, c'est une façon appréciée de montrer qu'on ne se prend pas au sérieux." },
      { cat:"ecrit", q:"Au bureau, deux collègues se lancent des piques en riant. On appelle ça :", opts:["une dispute sérieuse","un discours officiel","du banter"], correct:2, why:"« Banter » = des taquineries amicales et réciproques. C'est un signe de complicité, pas de conflit." },
      { cat:"oral", audio:"Well, that went well.", q:"Écoute : la personne sort d'une présentation où rien n'a fonctionné. Que veut-elle vraiment dire ?", opts:["La présentation s'est très bien passée","La présentation s'est mal passée","Elle est fière d'elle","Elle ne sait pas encore"], correct:1, why:"Sens littéral : « ça s'est bien passé ». Sens réel : « c'était un désastre ». Le contexte contredit les mots : c'est du sarcasme." },
      { cat:"oral", audio:"We've got a bit of a problem: the client has just cancelled the whole project.", q:"Écoute : comment la gravité de la situation est-elle exprimée ?", opts:["La personne exagère un tout petit souci","La personne minimise un problème en réalité très grave","La personne plaisante, il n'y a aucun problème","La personne annonce une bonne nouvelle"], correct:1, why:"« A bit of a problem » pour l'annulation de tout un projet : c'est un understatement typique. Le problème est énorme." },
      { cat:"oral", audio:"Relax, I was only joking. You didn't really think I'd forgotten your birthday, did you?", q:"Écoute : la personne a-t-elle vraiment oublié l'anniversaire ?", opts:["Oui, complètement","Elle ne se souvient plus de la date","Elle l'a fêté la veille","Non, elle plaisantait"], correct:3, why:"« I was only joking » + « You didn't really think… » : elle faisait marcher son interlocuteur, elle n'a rien oublié." },
      { cat:"oral", audio:"Oh yeah, right. Like he's going to arrive on time for once.", q:"Écoute : que pense la personne ?", opts:["Elle est sûre qu'il sera en retard","Elle est sûre qu'il sera à l'heure","Elle n'a pas d'avis","Elle ne le connaît pas"], correct:0, why:"« Yeah, right » + « for once » (pour une fois) : c'est sarcastique. Elle est convaincue qu'il sera encore en retard." },
      { cat:"comprehension", passage:"“So, how was the camping trip?” — “Oh, fantastic. It rained for six days, the tent collapsed on the second night, and Tom dropped the car keys in the lake. Honestly, best holiday ever.”", q:"D'après ce dialogue, que pense vraiment la personne de ses vacances ?", opts:["Elle les a adorées","Elle veut y retourner l'an prochain","Elle les a trouvées catastrophiques et le dit avec ironie","Elle ne s'en souvient pas"], correct:2, why:"Les faits (pluie, tente effondrée, clés perdues) contredisent « fantastic » et « best holiday ever » : c'est de l'ironie." },
      { cat:"comprehension", passage:"“Part of the ceiling fell down in the meeting room this morning. My British manager looked at it for a moment and simply said, ‘Hmm. That's slightly inconvenient.’ Then he calmly asked everyone to move next door.”", q:"D'après le texte, comment réagit le manager ?", opts:["Il panique","Il minimise la situation avec un understatement","Il se met très en colère","Il éclate de rire"], correct:1, why:"« Slightly inconvenient » (légèrement gênant) pour un plafond effondré : c'est l'understatement britannique par excellence, dit avec flegme." },
      { cat:"comprehension", passage:"“(rappel) During the meeting, Sarah turned to the director and said, ‘I see your point, but I'm not entirely convinced. Could we perhaps look at the figures again?’ Nobody felt attacked, and the discussion carried on calmly.”", q:"D'après le texte, quelle est l'attitude de Sarah ?", opts:["Elle exprime un désaccord de manière diplomatique","Elle est entièrement d'accord avec le directeur","Elle se moque du directeur","Elle refuse de continuer la réunion"], correct:0, why:"« I see your point, but I'm not entirely convinced » = un désaccord diplomatique (rappel B2.6). Attention : ce n'est pas de l'ironie, elle est sincère." },
      { cat:"comprehension", passage:"“(rappel) I was running for the bus when I slipped and landed right in front of the whole queue. By the time I got up, the bus had already left. Honestly, my talent for graceful exits is unmatched.”", q:"D'après le texte, la dernière phrase est :", opts:["un compliment sincère que la personne se fait","de l'autodérision ironique","une critique des autres passagers","une excuse adressée au chauffeur"], correct:1, why:"Elle se moque d'elle-même en prétendant avoir un « talent » pour les sorties élégantes : c'est de l'autodérision (rappel B1.2 : Past Continuous et Past Perfect du récit)." }
    ],
    PRON_VERBS: [
      {en:"Well, that went well.", fr:"Eh bien, ça s'est bien passé… (sarcastique)."},
      {en:"We've got a bit of a problem.", fr:"On a un petit problème (= un gros problème)."},
      {en:"He's not exactly the most patient person I know.", fr:"Ce n'est pas vraiment la personne la plus patiente que je connaisse."},
      {en:"Relax, I was only pulling your leg.", fr:"Détends-toi, je te faisais juste marcher."},
      {en:"She has a very dry sense of humour.", fr:"Elle a un humour très pince-sans-rire."},
      {en:"Don't take it literally, it was tongue-in-cheek.", fr:"Ne le prends pas au premier degré, c'était pour rire."}
    ],
    READING: [
      "When I first joined a small office in Manchester, I took almost everything my colleagues said literally.",
      "On my first morning, it was pouring with rain, and my manager glanced out of the window and said, “Lovely weather for a picnic.”",
      "I nodded politely, slightly puzzled, until someone explained that he was being ironic.",
      "A week later, the printer jammed just before an important deadline, and a colleague sighed, “Well, this is going swimmingly.”",
      "I soon realised that the worse things got, the calmer and more understated everyone became.",
      "A disaster was “a bit of a nuisance”, and an outstanding result was merely “not too bad”.",
      "What confused me most was the deadpan delivery: nobody smiled, so I never knew when they were joking.",
      "My colleagues also teased each other constantly, but the banter was always affectionate, never cruel.",
      "Over time, I learned to pay attention to the tone and the context rather than just the words.",
      "These days I can give as good as I get — and I've even been told I have a rather dry sense of humour."
    ],
    GLOSS: [
      {en:"puzzled", fr:"perplexe"},
      {en:"to jam", fr:"se bloquer, se coincer (machine)"},
      {en:"swimmingly", fr:"à merveille, comme sur des roulettes"},
      {en:"a nuisance", fr:"un désagrément, une contrariété"},
      {en:"affectionate", fr:"affectueux(se)"},
      {en:"to give as good as you get", fr:"rendre la pareille, savoir répondre du tac au tac"}
    ],
    GRAMMAR1: {
      heading: "L'understatement : dire moins pour dire plus",
      lede: "L'understatement consiste à présenter une réalité (bonne ou mauvaise) comme beaucoup moins forte qu'elle ne l'est. Il repose sur quelques structures très régulières : « not + adjectif », « not exactly », « a bit of a », et les atténuateurs « slightly, rather, quite, a little ».",
      conj: [["Réalité : c'est excellent →","not + adjectif négatif","It's not bad at all."],["Réalité : c'est très cher →","not exactly + adjectif","It's not exactly cheap."],["Réalité : c'est une catastrophe →","a bit of a + nom","We've got a bit of a problem."],["Réalité : il fait un froid glacial →","slightly / a little + adjectif","It's a little chilly, isn't it?"]],
      ruleHtml: "📖 Pour décoder un understatement, compare les <b>mots</b> à la <b>situation</b> : si la phrase paraît trop faible pour ce qui se passe, il faut « monter le volume ». « It's <b>not exactly</b> cheap » = c'est <b>très cher</b>. « That was <b>a bit of a</b> disaster » = une <b>vraie</b> catastrophe. Attention à <b>quite</b> : en anglais britannique, « quite good » veut souvent dire « assez bien, sans plus », alors qu'en anglais américain il veut plutôt dire « vraiment bien ». Le ton fait la différence.",
      dialogueLede: "Deux collègues après une réunion très tendue :",
      dialogue: [
        {who:"them", en:"So, how did the meeting with the new client go?", fr:"Alors, comment s'est passée la réunion avec le nouveau client ?"},
        {who:"you", en:"Well, it wasn't exactly a success. They were a bit of a nightmare, to be honest.", fr:"Eh bien, ce n'était pas vraiment un succès. Ils ont été un vrai cauchemar, pour être honnête."}
      ],
      whyLabel: "Le piège des francophones : prendre l'understatement au premier degré",
      whyText: "En français, on exagère volontiers (« c'est une catastrophe ! », « je suis mort de fatigue »). En anglais britannique, c'est souvent l'inverse : plus la situation est grave, plus le ton est <b>calme et modeste</b>. Si un collègue britannique te dit « I have <b>a few</b> concerns about your report », ne te réjouis pas trop vite : il a probablement de <b>sérieuses</b> réserves. Et un « <b>not bad</b> » sincère peut être un très beau compliment !"
    },
    GRAMMAR2: {
      heading: "Repérer l'ironie et le sarcasme : sens littéral vs sens réel",
      dialogueLede: "Un ami arrive très en retard au cinéma, le film a déjà commencé :",
      dialogue: [
        {who:"them", en:"Sorry, sorry! The traffic was terrible.", fr:"Désolé, désolé ! La circulation était horrible."},
        {who:"you", en:"Oh, don't worry, I love watching the first half hour on my own. Thanks so much.", fr:"Oh, ne t'inquiète pas, j'adore regarder la première demi-heure tout(e) seul(e). Merci beaucoup. (sarcastique)"}
      ],
      ruleHtml: "💭 Pour repérer l'ironie ou le sarcasme, pose-toi deux questions : <b>What did the speaker literally say?</b> (sens littéral) puis <b>What did the speaker actually mean?</b> (sens réel). Les indices : 1) un <b>décalage</b> entre les mots et la situation (« Great! » après une mauvaise nouvelle) ; 2) une <b>intonation</b> plate, traînante ou exagérée ; 3) des mots-signaux : « <b>Oh, great</b> », « <b>Yeah, right</b> », « <b>for once</b> », « <b>Thanks a lot</b> », « <b>How nice</b> » ; 4) l'<b>exagération</b> : « I <b>love</b> waiting for an hour », « best day <b>ever</b> ». L'ironie constate un décalage ; le sarcasme vise une personne et contient un reproche.",
      whyLabel: "Attention : le sarcasme ne passe pas partout",
      whyText: "À l'oral, entre amis, le sarcasme est courant et rarement méchant. Mais à l'<b>écrit</b> (email, message), sans intonation ni sourire, il est très souvent <b>mal compris</b>. Au travail, avec un supérieur ou avec quelqu'un que tu connais peu, préfère l'<b>understatement</b> ou l'<b>autodérision</b> : ils font sourire sans jamais blesser. Et si tu as un doute sur ce qu'on te dit, tu peux toujours demander avec le sourire : « <b>Are you being sarcastic?</b> » ou « <b>Sorry, was that a joke?</b> » — c'est parfaitement accepté."
    },
    REVIEW: [
      { q:"Quelle formulation exprime un désaccord de manière diplomatique ?", opts:["You're wrong.","I'm not sure I agree with that."], correct:1, fb:"« I'm not sure I agree with that » exprime le même désaccord sans agresser. (rappel B2.6)" },
      { q:"Comment dit-on « je vois ce que tu veux dire, mais je ne suis pas entièrement convaincu(e) » ?", opts:["I see your point, but I'm not entirely convinced.","I see your point, so I'm totally convinced."], correct:0, fb:"C'est la formule « avancée » du désaccord diplomatique : on reconnaît l'avis de l'autre avant de nuancer. (rappel B2.6)" },
      { q:"« Same idea ≠ same social effect » signifie :", opts:["Une même idée peut produire un effet très différent selon la formulation","Il faut toujours dire les choses de la même façon"], correct:0, fb:"C'est le Secret English de B2.6 : le choix des mots change la réaction de l'autre, même si l'idée est identique. (rappel B2.6)" },
      { q:"Face à ton manager, laquelle est la plus adaptée ?", opts:["That's a terrible idea.","I wonder if there might be another way to look at this."], correct:1, fb:"« I wonder if there might be… » adoucit le désaccord avec une question indirecte et un modal. (rappel B2.6)" },
      { q:"Quel est le registre de « I don't agree » ?", opts:["Neutre","Très diplomatique"], correct:0, fb:"« I don't agree » est neutre : ni agressif, ni particulièrement diplomatique. (rappel B2.6)" }
    ],
    CULTURE_NOTE: {
      icon: "🫖",
      title: "Note culturelle — l'humour britannique au quotidien",
      html: "Au Royaume-Uni, l'humour n'est pas réservé aux moments de détente : il est partout, y compris au travail, dans les réunions et même dans les situations graves. Trois ingrédients reviennent sans cesse : l'<b>understatement</b> (minimiser : « it's a bit nippy » par un froid glacial), l'<b>ironie deadpan</b> (dite sans sourire, ce qui déroute beaucoup d'étrangers) et l'<b>autodérision</b> (se moquer de soi avant de se moquer des autres). Ne pas savoir rire de soi-même peut être perçu comme de l'arrogance. Les Américains utilisent eux aussi beaucoup le sarcasme, mais un peu moins l'understatement : un Américain dira plus volontiers « That's awesome! » qu'un « not bad at all ». Enfin, le <b>banter</b> entre collègues est un signe d'intégration : si l'on te taquine gentiment, c'est souvent qu'on t'a adopté(e) !"
    },
    NEXT_PREVIEW: "B2.8 (Read Between the Lines) : identifier l'implicite dans un discours ou un dialogue — l'intention, l'attitude, les présupposés et le sens caché derrière des mots comme « finally », « still » ou « apparently ».",
    META: { vocabTitle:"Humour, ironie et sarcasme (B2.7)", lectureTitle:"Premiers pas dans l'humour britannique", bilanTitle:"Bravo, tu sais maintenant repérer l'ironie, le sarcasme et l'understatement, et faire la différence entre ce qui est dit et ce qui est voulu !", pronLabel:"Understatement, ironie et sarcasme : sens littéral vs sens réel", todayLede:"comprendre l'humour anglophone sous toutes ses formes (ironie, sarcasme, deadpan, exagération, understatement, jeux de mots) et distinguer le sens littéral du sens réel — s'appuie sur B2.6 (Diplomatic English)" }
  };

  // B2.8 — Read Between the Lines — s'appuie sur B2.7 (Humour, Irony & Sarcasm) et B2.6 (Diplomatic English)
  LESSONS_EXT[47] = {
    code: "B2.8", level: "B2",
    VOCAB: [
      {block:"Analyser l'implicite", en:"Implication", ipa:"/ˌɪmplɪˈkeɪʃn/", fr:"Le sous-entendu, ce qui est impliqué", note:"« What's the implication? » = qu'est-ce que ça sous-entend ? Aussi : « implications » = conséquences (« the implications of the decision »)."},
      {block:"Analyser l'implicite", en:"Inference", ipa:"/ˈɪnfərəns/", fr:"La déduction, l'inférence", note:"Ce que l'auditeur tire de ce qui est suggéré. « to draw an inference » = tirer une conclusion."},
      {block:"Analyser l'implicite", en:"Assumption", ipa:"/əˈsʌmpʃn/", fr:"Le présupposé, l'hypothèse de départ", note:"Faux ami partiel : ne veut pas dire « assumer » une responsabilité. « to make an assumption » = partir d'un présupposé."},
      {block:"Analyser l'implicite", en:"Bias", ipa:"/ˈbaɪəs/", fr:"Le parti pris, le biais", note:"« a biased article » = un article partial. Prononciation : /ˈbaɪəs/, comme « buy-us »."},
      {block:"Analyser l'implicite", en:"Attitude", ipa:"/ˈætɪtjuːd/", fr:"L'attitude, la position (envers quelque chose)", note:"En anglais, c'est surtout ce qu'on pense ou ressent : « her attitude towards the project » = ce qu'elle pense du projet."},
      {block:"Analyser l'implicite", en:"Intention", ipa:"/ɪnˈtenʃn/", fr:"L'intention", note:"« What was his intention? » = que cherchait-il à faire ? Question clé pour comprendre un message implicite."},
      {block:"Analyser l'implicite", en:"Hidden meaning", ipa:"/ˌhɪdn ˈmiːnɪŋ/", fr:"Le sens caché", note:"« There's a hidden meaning behind her words » = il y a un sens caché derrière ses mots."},
      {block:"Analyser l'implicite", en:"Subtext", ipa:"/ˈsʌbtekst/", fr:"Le sous-texte, le non-dit", note:"Ce qui est communiqué sans être dit, notamment dans un dialogue ou un email professionnel."},
      {block:"Les petits mots qui trahissent une attitude", en:"Finally", ipa:"/ˈfaɪnəli/", fr:"Enfin, finalement (après une longue attente)", note:"« He finally agreed » suggère qu'il a longtemps résisté, et souvent un soulagement ou une impatience de la part de celui qui parle."},
      {block:"Les petits mots qui trahissent une attitude", en:"Even", ipa:"/ˈiːvn/", fr:"Même", note:"Marque la surprise : « Even Tom laughed » suggère que Tom rit rarement."},
      {block:"Les petits mots qui trahissent une attitude", en:"Still", ipa:"/stɪl/", fr:"Toujours, encore (pas encore)", note:"« She still hasn't replied » trahit l'impatience ou l'agacement : on attendait une réponse plus tôt."},
      {block:"Les petits mots qui trahissent une attitude", en:"Actually", ipa:"/ˈæktʃuəli/", fr:"En fait, en réalité", note:"Faux ami : jamais « actuellement » (= « currently »). Signale souvent qu'on corrige poliment l'autre : « Actually, it was Tuesday »."},
      {block:"Les petits mots qui trahissent une attitude", en:"Supposedly", ipa:"/səˈpəʊzɪdli/", fr:"Soi-disant, prétendument", note:"Exprime un doute : « It's supposedly the best hotel in town » = c'est censé être le meilleur… mais j'en doute."},
      {block:"Les petits mots qui trahissent une attitude", en:"So-called", ipa:"/ˌsəʊ ˈkɔːld/", fr:"Soi-disant, prétendu", note:"Devant un nom, il est souvent méprisant : « our so-called expert » = notre prétendu expert."},
      {block:"Les petits mots qui trahissent une attitude", en:"Apparently", ipa:"/əˈpærəntli/", fr:"Apparemment, à ce qu'on dit", note:"Signale une information rapportée, non vérifiée par celui qui parle. Ce n'est pas « visiblement »."},
      {block:"Les petits mots qui trahissent une attitude", en:"Just", ipa:"/dʒʌst/", fr:"Juste, simplement", note:"Peut minimiser (« I just wanted to check… ») ou trahir l'agacement (« Just do it! »). Tout dépend du ton."},
      {block:"Décoder le ton", en:"Loaded", ipa:"/ˈləʊdɪd/", fr:"Chargé, orienté (question, mot)", note:"« a loaded question » = une question piège qui contient un présupposé. « a loaded word » = un mot chargé d'émotion."},
      {block:"Décoder le ton", en:"Vague", ipa:"/veɪɡ/", fr:"Vague, flou", note:"Une réponse volontairement vague (« We'll see ») est souvent un refus poli."},
      {block:"Décoder le ton", en:"Tone", ipa:"/təʊn/", fr:"Le ton", note:"« I didn't like his tone » = je n'ai pas aimé son ton. À l'écrit aussi : « the tone of the email »."},
      {block:"Décoder le ton", en:"Euphemism", ipa:"/ˈjuːfəmɪzəm/", fr:"Un euphémisme", note:"Un mot doux pour une réalité dure : « to let someone go » = licencier ; « between jobs » = au chômage."},
      {block:"Décoder le ton", en:"Word choice", ipa:"/ˈwɜːd ˌtʃɔɪs/", fr:"Le choix des mots", note:"« stubborn » ou « determined » ? « cheap » ou « affordable » ? Le choix des mots révèle l'attitude."},
      {block:"Verbes clés (B2.8)", en:"To imply", ipa:"/tə ɪmˈplaɪ/", fr:"Sous-entendre, laisser entendre", note:"C'est le locuteur qui « implies » : « What are you implying? » = qu'est-ce que tu sous-entends ?"},
      {block:"Verbes clés (B2.8)", en:"To infer", ipa:"/tə ɪnˈfɜː/", fr:"Déduire, en conclure", note:"C'est l'auditeur qui « infers ». Piège fréquent, même chez les natifs : le locuteur « implies », l'auditeur « infers »."},
      {block:"Verbes clés (B2.8)", en:"To assume", ipa:"/tə əˈsjuːm/", fr:"Supposer, présumer", note:"Faux ami : « I assume you're coming » = je suppose que tu viens. « Assumer » (une responsabilité) = « to take responsibility »."},
      {block:"Verbes clés (B2.8)", en:"To hint at", ipa:"/tə ˈhɪnt ət/", fr:"Faire allusion à, laisser entendre", note:"« She hinted at a promotion » = elle a fait allusion à une promotion. « to drop a hint » = lancer une allusion."},
      {block:"Verbes clés (B2.8)", en:"To downplay", ipa:"/tə ˌdaʊnˈpleɪ/", fr:"Minimiser, relativiser", note:"« He downplayed the problem » = il a minimisé le problème. Lien avec l'understatement de B2.7."},
      {block:"Verbes clés (B2.8)", en:"To read between the lines", ipa:"/tə ˌriːd bɪˌtwiːn ðə ˈlaɪnz/", fr:"Lire entre les lignes", note:"Même image qu'en français. « You're reading too much into it » = tu surinterprètes."}
    ],
    MEM_WORDS: [2,3,8,12,21,22],
    MINI_CHECKS: [
      { q:"“He finally agreed.” — que suggère « finally » ?", opts:["Qu'il a accepté immédiatement","Qu'il a résisté longtemps avant d'accepter","Qu'il a refusé"], correct:1, fb:"« Finally » implique une attente ou une résistance préalable. Celui qui parle est souvent soulagé… ou agacé." },
      { q:"Le locuteur « ___ », l'auditeur « ___ ».", opts:["infers / implies","implies / infers","assumes / hints"], correct:1, fb:"On « implies » (sous-entend) en parlant, on « infers » (déduit) en écoutant." },
      { q:"“Our so-called expert got the figures wrong again.” — quelle attitude ?", opts:["Du respect","De la neutralité","Du mépris, un doute sur ses compétences"], correct:2, fb:"« So-called » devant un nom met en doute le titre : l'auteur ne le considère pas vraiment comme un expert. Et « again » ajoute l'agacement." },
      { q:"Comment dit-on « supposer, présumer » ?", opts:["To assume","To downplay","To hint at"], correct:0, fb:"« To assume » = supposer. Attention au faux ami « assumer » (= « to take responsibility »)." }
    ],
    ROUNDS: [
      { bank:["agreed","finally","He","."], answer:"he finally agreed .", display:"He finally agreed.", fr:"Il a fini par accepter." },
      { bank:["replied","hasn't","still","She","."], answer:"she still hasn't replied .", display:"She still hasn't replied.", fr:"Elle n'a toujours pas répondu." },
      { bank:["implying","you","are","What","?"], answer:"what are you implying ?", display:"What are you implying?", fr:"Qu'est-ce que tu sous-entends ?" },
      { bank:["company","the","leaving","he's","Apparently","."], answer:"apparently he's leaving the company .", display:"Apparently, he's leaving the company.", fr:"Apparemment, il quitte l'entreprise." },
      { bank:["impressed","was","boss","the","Even","."], answer:"even the boss was impressed .", display:"Even the boss was impressed.", fr:"Même le patron a été impressionné." },
      { bank:["it","into","much","too","reading","You're","."], answer:"you're reading too much into it .", display:"You're reading too much into it.", fr:"Tu surinterprètes." },
      { bank:["question","loaded","a","was","That","."], answer:"that was a loaded question .", display:"That was a loaded question.", fr:"C'était une question piège." },
      { bank:["at","hinting","was","she","what","sure","not","I'm","."], answer:"i'm not sure what she was hinting at .", display:"I'm not sure what she was hinting at.", fr:"Je ne suis pas sûr(e) de ce à quoi elle faisait allusion." },
      { bank:["conclusions","to","jump","Don't","."], answer:"don't jump to conclusions .", display:"Don't jump to conclusions.", fr:"Ne tire pas de conclusions hâtives." },
      { bank:["with","work","to","difficult","very","be","to","said","He's","."], answer:"he's said to be very difficult to work with .", display:"He's said to be very difficult to work with.", fr:"On dit qu'il est très difficile de travailler avec lui." }
    ],
    QUIZ: [
      { cat:"ecrit", q:"“He finally agreed to sign the contract.” — que suggère « finally » ?", opts:["Qu'il a signé sans hésiter","Qu'il a longtemps hésité ou résisté avant de signer","Qu'il n'a jamais signé"], correct:1, why:"« Finally » implique une longue attente ou une résistance. C'est exactement le Secret English de ce palier." },
      { cat:"ecrit", q:"“Even Paul enjoyed the film.” — que suggère « even » ?", opts:["Que Paul n'apprécie pas d'habitude ce genre de film","Que Paul adore tous les films","Que Paul a choisi le film"], correct:0, why:"« Even » marque la surprise : le film a plu à quelqu'un dont on ne l'attendait pas." },
      { cat:"ecrit", q:"“She still hasn't called me back.” — quelle attitude transparaît ?", opts:["De l'enthousiasme","De l'indifférence totale","De l'impatience ou de l'agacement"], correct:2, why:"« Still » + négation : on attendait l'action depuis un moment. Le locuteur est impatient, voire contrarié." },
      { cat:"ecrit", q:"“Our so-called expert got everything wrong.” — « so-called » exprime :", opts:["du respect","du mépris, un doute sur le titre","une information neutre"], correct:1, why:"« So-called » devant un nom met en doute ce titre : l'auteur ne le considère pas comme un vrai expert." },
      { cat:"ecrit", q:"“Apparently, the meeting's been cancelled.” — le locuteur :", opts:["rapporte une information qu'il n'a pas vérifiée lui-même","en est certain, c'est lui qui l'a annulée","pense que la réunion aura lieu"], correct:0, why:"« Apparently » = à ce qu'on dit. On prend ses distances avec une information de seconde main." },
      { cat:"ecrit", q:"Comment dit-on « déduire, en conclure » (à partir de ce qui est suggéré) ?", opts:["To imply","To infer","To downplay"], correct:1, why:"« To infer » = déduire (c'est l'auditeur). « To imply » = sous-entendre (c'est le locuteur)." },
      { cat:"ecrit", q:"Une « loaded question », c'est :", opts:["une question très longue","une question sans réponse possible","une question orientée, qui contient un présupposé"], correct:2, why:"« Loaded » = chargé : la question contient un piège ou une hypothèse cachée." },
      { cat:"ecrit", q:"“Have you stopped wasting money on gadgets?” — quel est le présupposé (assumption) ?", opts:["Que la personne gaspille (ou gaspillait) de l'argent en gadgets","Que la personne n'achète jamais rien","Que les gadgets sont gratuits"], correct:0, why:"Que l'on réponde « yes » ou « no », on admet avoir gaspillé de l'argent : c'est une question piège typique." },
      { cat:"ecrit", q:"Dans une lettre de recommandation, on lit seulement : “He was always very punctual.” Qu'est-ce que cela suggère ?", opts:["Qu'il était excellent en tout","Que l'auteur n'a pas grand-chose d'autre de positif à dire","Qu'il arrivait toujours en retard"], correct:1, why:"C'est un éloge minimal : ce qui n'est PAS dit (compétences, qualités) en dit plus long que ce qui est dit." },
      { cat:"ecrit", q:"« To downplay » veut dire :", opts:["exagérer","expliquer en détail","minimiser, relativiser"], correct:2, why:"« To downplay » = minimiser. « He downplayed the risks » = il a minimisé les risques." },
      { cat:"oral", audio:"So, you finally decided to join us.", q:"Écoute : un collègue entre dans la salle de réunion. Que sous-entend cette phrase ?", opts:["Qu'il est en avance","Qu'il est en retard et qu'on l'attendait","Qu'il n'était pas invité","Qu'il organise la réunion"], correct:1, why:"« Finally » + « decided to » : on lui reproche, avec une pointe d'ironie, d'arriver en retard, comme si c'était un choix." },
      { cat:"oral", audio:"Apparently, the new manager is very strict, but I haven't met her yet.", q:"Écoute : d'où vient l'information sur la nouvelle manager ?", opts:["De ce que d'autres ont dit","D'une expérience personnelle","D'un document officiel","La personne l'invente"], correct:0, why:"« Apparently » + « I haven't met her yet » : c'est une information rapportée, pas une expérience personnelle." },
      { cat:"oral", audio:"It's an interesting idea. I'm just not sure it's the right time.", q:"Écoute : que pense vraiment la personne de l'idée ?", opts:["Elle est enthousiaste","Elle ne l'a pas comprise","Elle a des réserves et ne la soutiendra sans doute pas","Elle veut la lancer immédiatement"], correct:2, why:"« Interesting » + « not sure it's the right time » : une manière polie et implicite de dire non, ou pas maintenant." },
      { cat:"oral", audio:"Even I managed to set it up, and I'm hopeless with technology.", q:"Écoute : que suggère la personne ?", opts:["Qu'elle est experte en informatique","Que l'installation est très facile","Que l'installation est impossible","Qu'elle n'a pas réussi"], correct:1, why:"« Even I » + « I'm hopeless with technology » : si elle a réussi, c'est que c'est très simple. Une touche d'autodérision (rappel B2.7)." },
      { cat:"comprehension", passage:"“So, did you enjoy Mark's presentation?” — “Well… the slides were very colourful, and he certainly spoke with a lot of confidence.”", q:"D'après ce dialogue, que pense réellement la personne de la présentation ?", opts:["Elle l'a adorée","Elle n'a pas trouvé le contenu convaincant","Elle ne l'a pas vue","Elle ne parle que des couleurs par hasard"], correct:1, why:"Elle ne commente que la forme (couleurs, assurance) et évite soigneusement le fond : c'est un éloge minimal qui cache une critique." },
      { cat:"comprehension", passage:"“Once again, protesters brought the city centre to a standstill yesterday, causing chaos for thousands of hard-working commuters who simply wanted to get to work.”", q:"D'après le texte, quelle attitude de l'auteur se devine ?", opts:["Une neutralité parfaite","Une sympathie pour les manifestants","Une hostilité envers les manifestants","Aucune opinion ne transparaît"], correct:2, why:"« Once again », « chaos », « hard-working commuters », « simply wanted » : le choix des mots (word choice) révèle un parti pris (bias) contre les manifestants." },
      { cat:"comprehension", passage:"“(rappel) After his car broke down for the third time that week, Mark stared at it and said, ‘Well, it's not exactly the most reliable car in the world, is it?’”", q:"D'après le texte, que veut dire Mark ?", opts:["Que sa voiture est très peu fiable","Que sa voiture est la plus fiable du monde","Qu'il veut acheter le même modèle","Qu'il ne sait pas ce qui s'est passé"], correct:0, why:"« Not exactly » + qualité = understatement ironique : il faut comprendre le contraire (rappel B2.7)." },
      { cat:"comprehension", passage:"“(rappel) ‘With respect, I'm not entirely convinced by these figures,’ said the finance director. ‘Could we perhaps go through them again before we make a final decision?’”", q:"D'après le texte, que pense réellement le directeur financier ?", opts:["Il valide les chiffres sans réserve","Il a de sérieux doutes et refuse poliment de décider maintenant","Il est furieux et quitte la réunion","Il n'a pas lu les chiffres"], correct:1, why:"« With respect » et « not entirely convinced » sont des formules diplomatiques (rappel B2.6) : derrière la politesse, il y a un vrai désaccord." }
    ],
    PRON_VERBS: [
      {en:"He finally agreed to sign the contract.", fr:"Il a fini par accepter de signer le contrat."},
      {en:"She still hasn't replied to my email.", fr:"Elle n'a toujours pas répondu à mon email."},
      {en:"What exactly are you implying?", fr:"Qu'est-ce que tu sous-entends exactement ?"},
      {en:"Apparently, he's said to be very difficult to work with.", fr:"Apparemment, on dit qu'il est très difficile de travailler avec lui."},
      {en:"I think you're reading too much into it.", fr:"Je pense que tu surinterprètes."},
      {en:"Don't jump to conclusions: read between the lines.", fr:"Ne tire pas de conclusions hâtives : lis entre les lignes."}
    ],
    READING: [
      "Last month, I sent my manager a detailed proposal to reorganise our team's weekly meetings.",
      "Three days later, she finally replied with a two-line email: “Thanks for this — some interesting ideas here.”",
      "At first, I was delighted, but my colleague Priya, who has worked with her for years, raised an eyebrow.",
      "“Interesting”, from her, usually means she has serious doubts, Priya explained, and “some” ideas means not all of them.",
      "She also pointed out that the email didn't mention any next steps, which was hardly a good sign.",
      "I realised I had made an assumption: I had read the words, but not the silence around them.",
      "So I asked for a quick chat, and my manager admitted, rather diplomatically, that the timing wasn't ideal.",
      "Apparently, the director had already rejected a very similar plan the year before.",
      "In the end, we agreed to test just one of my suggestions, which felt like a reasonable compromise.",
      "Since then, I've learned to pay as much attention to what people leave out as to what they actually say."
    ],
    GLOSS: [
      {en:"to raise an eyebrow", fr:"hausser un sourcil (s'étonner, douter)"},
      {en:"to point out", fr:"faire remarquer, souligner"},
      {en:"next steps", fr:"les prochaines étapes, la suite"},
      {en:"hardly", fr:"guère, à peine (= pas vraiment)"},
      {en:"to leave out", fr:"omettre, laisser de côté"},
      {en:"a compromise", fr:"un compromis"}
    ],
    GRAMMAR1: {
      heading: "Les adverbes d'attitude : de petits mots qui en disent long",
      lede: "En anglais, l'attitude de celui qui parle (impatience, surprise, doute, agacement) passe très souvent par un seul petit adverbe. Le retirer ne change pas l'information… mais change tout le message.",
      conj: [["Longue attente, résistance, soulagement →","finally","He finally agreed."],["Surprise, dépassement des attentes →","even","Even the boss laughed."],["Impatience, agacement →","still (+ négation)","She still hasn't replied."],["Doute, distance critique →","supposedly / so-called","It's supposedly the best hotel in town."]],
      ruleHtml: "📖 Compare : « He agreed. » (un simple fait) et « He <b>finally</b> agreed. » (il a résisté, on a dû insister, on est soulagé). De même : « The boss laughed » / « <b>Even</b> the boss laughed » (d'habitude il ne rit jamais). Place : <b>finally</b>, <b>still</b> et <b>even</b> se mettent en général <b>avant le verbe principal</b> mais <b>après be</b> et après le premier auxiliaire : « She is <b>still</b> waiting », « He has <b>finally</b> agreed ». Avec une négation, <b>still</b> passe <b>devant</b> l'auxiliaire : « She <b>still hasn't</b> replied ».",
      dialogueLede: "Deux collègues parlent d'un client difficile :",
      dialogue: [
        {who:"them", en:"Good news: the client has finally signed the contract!", fr:"Bonne nouvelle : le client a enfin signé le contrat !"},
        {who:"you", en:"Finally! And apparently even their lawyer was happy with it.", fr:"Enfin ! Et apparemment, même leur avocat en était satisfait."}
      ],
      whyLabel: "Secret English — « He finally agreed. »",
      whyText: "Que suggère <b>finally</b> ? 1) Que l'accord n'était <b>pas acquis</b> au départ ; 2) qu'il y a eu une <b>résistance</b> ou une longue négociation ; 3) que celui qui parle ressent du <b>soulagement</b> ou de l'<b>agacement</b>. Tout cela en un seul mot ! Piège des francophones : traduire « finalement » par « finally » alors qu'on veut dire « en fin de compte » (= <b>in the end</b>, <b>eventually</b>). « Finally » insiste sur l'attente."
    },
    GRAMMAR2: {
      heading: "Prendre ses distances : apparently, allegedly, be said to, seem to",
      dialogueLede: "Deux amis parlent d'un nouveau restaurant :",
      dialogue: [
        {who:"them", en:"Have you tried the new Italian place? It's said to be the best in town.", fr:"Tu as essayé le nouvel italien ? On dit que c'est le meilleur de la ville."},
        {who:"you", en:"Supposedly, yes. But it seems to be fully booked every night, so I haven't managed to get a table.", fr:"Soi-disant, oui. Mais il a l'air d'être complet tous les soirs, alors je n'ai pas réussi à avoir une table."}
      ],
      ruleHtml: "💭 Pour montrer qu'on <b>ne garantit pas</b> une information, l'anglais utilise : <b>apparently</b> (à ce qu'on dit), <b>allegedly</b> (prétendument — langage journalistique et juridique), <b>supposedly</b> (soi-disant, avec un doute), <b>seem to / appear to</b> (avoir l'air de), et la structure <b>be said / thought / believed + to + base</b> : « He <b>is said to be</b> very rich » = on dit qu'il est très riche. Pour une action passée : <b>to have + participe passé</b> : « She <b>is thought to have left</b> the country » = on pense qu'elle a quitté le pays.",
      whyLabel: "Lire le silence : l'éloge minimal",
      whyText: "Lire entre les lignes, c'est aussi remarquer ce qui <b>manque</b>. Une lettre de recommandation qui ne dit que « he was always <b>punctual</b> » en dit long sur tout le reste. Un « <b>thanks, interesting</b> » sans aucune suite dans un email professionnel est rarement un feu vert. Les anglophones appellent cela « <b>damning with faint praise</b> » : condamner en faisant un éloge très faible. Pose-toi toujours la question : <b>what is NOT being said?</b>"
    },
    REVIEW: [
      { q:"Il pleut à verse et quelqu'un dit : “Lovely weather!” C'est :", opts:["de l'ironie","un compliment sincère"], correct:0, fb:"Les mots contredisent la situation : c'est de l'ironie. (rappel B2.7)" },
      { q:"“We've got a bit of a problem.” peut annoncer :", opts:["un problème en réalité grave","forcément un tout petit souci"], correct:0, fb:"C'est un understatement : l'anglais britannique minimise souvent les problèmes graves. (rappel B2.7)" },
      { q:"Comment dit-on « faire marcher quelqu'un » ?", opts:["To take someone literally","To pull someone's leg"], correct:1, fb:"« To pull someone's leg » = faire marcher quelqu'un. (rappel B2.7)" },
      { q:"Un humour « deadpan » est dit :", opts:["avec un visage impassible","en riant très fort"], correct:0, fb:"« Deadpan » = pince-sans-rire, sans sourire. (rappel B2.7)" },
      { q:"“Yeah, right.” veut le plus souvent dire :", opts:["Oui, tu as raison","Je n'y crois pas du tout"], correct:1, fb:"Deux mots positifs pour exprimer l'incrédulité : c'est du sarcasme. (rappel B2.7)" }
    ],
    CULTURE_NOTE: {
      icon: "🔍",
      title: "Note culturelle — le non-dit dans le monde anglophone",
      html: "Les Britanniques ont la réputation de communiquer beaucoup par <b>allusions</b>, surtout quand le message est désagréable. Quelques classiques au travail : « <b>I'll bear it in mind</b> » (j'en tiendrai compte) signifie souvent « je ne vais probablement rien en faire » ; « <b>Perhaps you could consider…</b> » est en réalité une consigne ; « <b>With the greatest respect</b> » annonce presque toujours un désaccord franc ; et « <b>That's a very brave proposal</b> » veut souvent dire « c'est risqué, voire irréaliste ». Les Américains sont en général plus <b>explicites</b> : un « <b>great job</b> » y est plus fréquent et plus littéral. Face à un doute, il est tout à fait acceptable de clarifier poliment : « <b>Just to make sure I understand, are you saying that…?</b> »"
    },
    NEXT_PREVIEW: "B2.9 (Digital English) : adapter ton message écrit au canal numérique (email professionnel, WhatsApp, réseaux sociaux, LinkedIn, message vocal, chat avec un service client) et savoir écrire la même chose à un ami, un collègue, un manager ou une entreprise.",
    META: { vocabTitle:"Lire entre les lignes (B2.8)", lectureTitle:"Un email de deux lignes", bilanTitle:"Bravo, tu sais maintenant repérer l'implicite : l'intention, l'attitude, les présupposés et même ce qui n'est pas dit !", pronLabel:"Adverbes d'attitude et structures de mise à distance", todayLede:"identifier l'implicite dans un discours ou un dialogue (intention, attitude, parti pris, présupposé, sens caché) grâce aux petits mots comme « finally », « even » ou « apparently » — s'appuie sur B2.7 (Humour, Irony & Sarcasm)" }
  };

  // B2.9 — Digital English — s'appuie sur B2.8 (Read Between the Lines), B2.7 (Humour) et B2.6 (Diplomatic English)
  LESSONS_EXT[48] = {
    code: "B2.9", level: "B2",
    VOCAB: [
      {block:"L'email professionnel", en:"Subject line", ipa:"/ˈsʌbdʒɪkt laɪn/", fr:"L'objet (d'un email)", note:"Court et précis : « Budget 2027 — feedback needed by Thursday ». Jamais « object » (faux ami)."},
      {block:"L'email professionnel", en:"Hope you're well", ipa:"/ˌhəʊp jə ˈwel/", fr:"J'espère que vous allez bien", note:"Phrase d'ouverture très courante après « Hi + prénom ». Variante plus chaleureuse : « Hope you had a good weekend »."},
      {block:"L'email professionnel", en:"Please find attached", ipa:"/ˌpliːz faɪnd əˈtætʃt/", fr:"Veuillez trouver ci-joint", note:"Formule classique mais un peu formelle. Plus moderne : « I've attached the report » ou « Attached is… »."},
      {block:"L'email professionnel", en:"To follow up", ipa:"/tə ˌfɒləʊ ˈʌp/", fr:"Relancer, faire un suivi", note:"« Just following up on my email from Monday » = la relance polie par excellence. Nom : « a follow-up » (avec trait d'union)."},
      {block:"L'email professionnel", en:"To loop someone in", ipa:"/tə ˌluːp ˌsʌmwʌn ˈɪn/", fr:"Mettre quelqu'un dans la boucle, l'informer", note:"« I'm looping in Sarah, who handles the budget » = je mets Sarah en copie. Très courant au bureau."},
      {block:"L'email professionnel", en:"Out of office", ipa:"/ˌaʊt əv ˈɒfɪs/", fr:"Absent(e) du bureau, réponse automatique", note:"« an out-of-office reply » (ou « OOO ») = le message d'absence automatique."},
      {block:"L'email professionnel", en:"Kind regards", ipa:"/ˌkaɪnd rɪˈɡɑːdz/", fr:"Cordialement, bien à vous", note:"La formule de fin la plus sûre au travail. Plus chaleureux : « Best wishes » ; plus décontracté : « Best » (US) ou « Cheers » (UK)."},
      {block:"Messages et réseaux sociaux", en:"Thread", ipa:"/θred/", fr:"Un fil (de discussion)", note:"« Reply in the thread » = réponds dans le fil. Sur les réseaux : « a thread » = une série de posts liés."},
      {block:"Messages et réseaux sociaux", en:"Voice note", ipa:"/ˈvɔɪs nəʊt/", fr:"Un message vocal (WhatsApp, etc.)", note:"« She sent me a voice note » (UK). Aux États-Unis, on entend aussi « voice message » ou « voice memo »."},
      {block:"Messages et réseaux sociaux", en:"Caption", ipa:"/ˈkæpʃn/", fr:"La légende (d'une photo)", note:"Le petit texte sous une photo ou une vidéo publiée. Aussi : les sous-titres d'une vidéo."},
      {block:"Messages et réseaux sociaux", en:"To tag", ipa:"/tə tæɡ/", fr:"Identifier (quelqu'un sur une photo, un post)", note:"« She tagged me in a photo » = elle m'a identifié(e) sur une photo."},
      {block:"Messages et réseaux sociaux", en:"DM", ipa:"/ˌdiː ˈem/", fr:"Un message privé (direct message)", note:"Nom ou verbe : « Send me a DM » / « DM me ». Plus informel que « private message »."},
      {block:"Messages et réseaux sociaux", en:"Comment section", ipa:"/ˈkɒment ˌsekʃn/", fr:"L'espace commentaires", note:"« Don't read the comment section! » = ne lis pas les commentaires (souvent désagréables)."},
      {block:"Abréviations et codes", en:"FYI", ipa:"/ˌef waɪ ˈaɪ/", fr:"Pour info (for your information)", note:"Accepté dans un email de travail, mais peut sembler sec s'il est utilisé seul, sans explication."},
      {block:"Abréviations et codes", en:"ASAP", ipa:"/ˌeɪ es eɪ ˈpiː/", fr:"Dès que possible (as soon as possible)", note:"Peut paraître pressant, voire impoli, avec un supérieur. Plus doux : « when you get a chance » ou « by Friday, if possible »."},
      {block:"Abréviations et codes", en:"BTW", ipa:"/ˌbiː tiː ˈdʌbljuː/", fr:"Au fait (by the way)", note:"Réservé aux messages informels, entre amis ou collègues proches."},
      {block:"Abréviations et codes", en:"TBH", ipa:"/ˌtiː biː ˈeɪtʃ/", fr:"Pour être honnête (to be honest)", note:"Très informel : jamais dans un email à un client ou à un manager."},
      {block:"Abréviations et codes", en:"EOD", ipa:"/ˌiː əʊ ˈdiː/", fr:"En fin de journée (end of day)", note:"« I'll send it by EOD » = je l'envoie d'ici ce soir. Courant dans le monde de l'entreprise, surtout aux États-Unis."},
      {block:"Service client en ligne", en:"Ticket", ipa:"/ˈtɪkɪt/", fr:"Un ticket, une demande d'assistance", note:"« I've opened a ticket » = j'ai ouvert une demande d'assistance. « a support ticket »."},
      {block:"Service client en ligne", en:"Reference number", ipa:"/ˈrefrəns ˌnʌmbə/", fr:"Un numéro de référence, de dossier", note:"À donner dès le premier message pour gagner du temps : « My reference number is… »."},
      {block:"Service client en ligne", en:"Live chat", ipa:"/ˌlaɪv ˈtʃæt/", fr:"Le chat en direct", note:"« I contacted them via live chat » = je les ai contactés par le chat en ligne."},
      {block:"Service client en ligne", en:"To escalate", ipa:"/tə ˈeskəleɪt/", fr:"Faire remonter (à un niveau supérieur)", note:"« Could you escalate this to a manager? » = pourriez-vous transmettre à un responsable ? Aussi : une situation qui s'envenime (« things escalated »)."},
      {block:"Verbes clés (B2.9)", en:"To reach out", ipa:"/tə ˌriːtʃ ˈaʊt/", fr:"Contacter, prendre contact", note:"« Thanks for reaching out » = merci de nous avoir contactés. Très fréquent en service client et sur LinkedIn."},
      {block:"Verbes clés (B2.9)", en:"To forward", ipa:"/tə ˈfɔːwəd/", fr:"Transférer (un email, un message)", note:"« I'll forward you the details » = je te transfère les infos."},
      {block:"Verbes clés (B2.9)", en:"To cc", ipa:"/tə ˌsiː ˈsiː/", fr:"Mettre en copie", note:"« I've cc'd my manager » = j'ai mis mon manager en copie. Au passé : « cc'd » ou « cc'ed »."},
      {block:"Verbes clés (B2.9)", en:"To reply all", ipa:"/tə rɪˌplaɪ ˈɔːl/", fr:"Répondre à tous", note:"Avec prudence ! « Please don't reply all » = merci de ne pas répondre à tous."},
      {block:"Verbes clés (B2.9)", en:"To mute", ipa:"/tə mjuːt/", fr:"Couper le son, mettre en sourdine", note:"« You're on mute! » = ton micro est coupé ! La phrase la plus prononcée en visioconférence."},
      {block:"Verbes clés (B2.9)", en:"To get back to someone", ipa:"/tə ˌɡet ˈbæk tə ˌsʌmwʌn/", fr:"Revenir vers quelqu'un, lui répondre", note:"« I'll get back to you by Friday » = je reviens vers vous d'ici vendredi. Plus naturel que « I will answer you »."}
    ],
    MEM_WORDS: [3,4,7,14,21,27],
    MINI_CHECKS: [
      { q:"Tu es en retard. Quel message convient à un ami sur WhatsApp ?", opts:["I regret to inform you that I shall be delayed.","Running late, sorry! 10 mins","Please be advised of my late arrival."], correct:1, fb:"Entre amis, on écrit court, sans sujet ni auxiliaire (« Running late »). Les deux autres sont beaucoup trop formels." },
      { q:"Quelle est la relance la plus polie pour un collègue qui n'a pas répondu ?", opts:["Just following up on my email from Monday.","Why haven't you answered me?","Answer ASAP."], correct:0, fb:"« Just following up on… » relance sans reproche. « Just » adoucit la demande." },
      { q:"« To loop someone in » veut dire :", opts:["bloquer quelqu'un","répondre à tous","mettre quelqu'un dans la boucle"], correct:2, fb:"« I'm looping in Sarah » = je mets Sarah au courant, en copie." },
      { q:"Comment dit-on « je reviens vers vous d'ici vendredi » ?", opts:["I'll get back to you by Friday.","I'll come back to you until Friday.","I answer you Friday."], correct:0, fb:"« To get back to someone » = revenir vers quelqu'un. « By Friday » = d'ici vendredi (au plus tard)." }
    ],
    ROUNDS: [
      { bank:["email","last","my","on","up","following","Just","."], answer:"just following up on my last email .", display:"Just following up on my last email.", fr:"Je me permets de vous relancer concernant mon dernier email." },
      { bank:["report","updated","the","attached","find","Please","."], answer:"please find attached the updated report .", display:"Please find attached the updated report.", fr:"Veuillez trouver ci-joint le rapport mis à jour." },
      { bank:["day","the","of","end","the","by","you","to","back","get","I'll","."], answer:"i'll get back to you by the end of the day .", display:"I'll get back to you by the end of the day.", fr:"Je reviens vers vous d'ici la fin de la journée." },
      { bank:["sorry","late","Running","!"], answer:"running late sorry !", display:"Running late, sorry!", fr:"Je suis en retard, désolé(e) ! (message informel)" },
      { bank:["in","Sarah","loop","you","Could","?"], answer:"could you loop sarah in ?", display:"Could you loop Sarah in?", fr:"Tu pourrais mettre Sarah dans la boucle ?" },
      { bank:["order","my","with","me","help","could","you","if","wondering","was","I","."], answer:"i was wondering if you could help me with my order .", display:"I was wondering if you could help me with my order.", fr:"Je me demandais si vous pourriez m'aider avec ma commande." },
      { bank:["4521","is","number","reference","My","."], answer:"my reference number is 4521 .", display:"My reference number is 4521.", fr:"Mon numéro de dossier est le 4521." },
      { bank:["questions","any","have","you","if","know","me","Let","."], answer:"let me know if you have any questions .", display:"Let me know if you have any questions.", fr:"N'hésitez pas si vous avez des questions." },
      { bank:["out","reaching","for","Thanks","."], answer:"thanks for reaching out .", display:"Thanks for reaching out.", fr:"Merci de nous avoir contactés." },
      { bank:["issue","this","escalate","to","like","I'd","."], answer:"i'd like to escalate this issue .", display:"I'd like to escalate this issue.", fr:"J'aimerais faire remonter ce problème (à un responsable)." }
    ],
    QUIZ: [
      { cat:"ecrit", q:"Quelle formule de fin convient à un email professionnel neutre ?", opts:["Kind regards,","Love you!","xx"], correct:0, why:"« Kind regards » est la formule de fin la plus sûre au travail. Les deux autres sont réservées aux proches." },
      { cat:"ecrit", q:"« FYI » signifie :", opts:["Dès que possible","Pour information","Au fait"], correct:1, why:"FYI = « for your information ». ASAP = dès que possible ; BTW = au fait." },
      { cat:"ecrit", q:"Pour relancer poliment un collègue qui n'a pas répondu :", opts:["Why haven't you answered?","Answer me now, please.","Just following up on my email from Monday."], correct:2, why:"« Just following up on… » est la relance standard : claire, sans reproche." },
      { cat:"ecrit", q:"« To loop someone in » veut dire :", opts:["mettre quelqu'un au courant, l'inclure dans l'échange","retirer quelqu'un d'une conversation","bloquer quelqu'un"], correct:0, why:"« I'm looping in Tom » = j'inclus Tom dans l'échange, je le mets en copie." },
      { cat:"ecrit", q:"Quelle phrase est adaptée à un message WhatsApp à un ami ?", opts:["I regret to inform you that I shall be late.","Running late, sorry! 10 mins","Please be advised of my delay."], correct:1, why:"Entre amis, l'écrit est elliptique (sans « I am ») et direct. Les autres formulations sont bien trop formelles." },
      { cat:"ecrit", q:"Dans un chat avec un service client, quelle demande est la plus efficace et polie ?", opts:["Fix my order now.","You have to help me.","I was wondering if you could help me with my order."], correct:2, why:"« I was wondering if you could… » est une demande indirecte très polie, idéale avec un service client." },
      { cat:"ecrit", q:"« To escalate » une réclamation, c'est :", opts:["la transmettre à un niveau supérieur","la supprimer","la traduire"], correct:0, why:"« Could you escalate this? » = pourriez-vous transmettre ma demande à un responsable ?" },
      { cat:"ecrit", q:"« I'll send it by EOD. » — EOD signifie :", opts:["End of discussion","End of day","Every other day"], correct:1, why:"EOD = « end of day » : je l'envoie d'ici la fin de la journée." },
      { cat:"ecrit", q:"« Please find attached… » s'utilise pour :", opts:["demander un rendez-vous","prendre congé","signaler une pièce jointe"], correct:2, why:"« Please find attached » = veuillez trouver ci-joint. Version plus moderne : « I've attached… »." },
      { cat:"ecrit", q:"Pourquoi éviter « As per my last email… » avec un collègue ?", opts:["C'est une faute de grammaire","C'est souvent perçu comme passif-agressif (= je te l'ai déjà dit !)","C'est trop familier"], correct:1, why:"La phrase est correcte, mais son sous-entendu (rappel B2.8) est « tu n'as pas lu mon email » : elle sonne comme un reproche." },
      { cat:"oral", audio:"Hi Tom, it's Julie. Just a quick one: the meeting's been moved to three o'clock. Give me a call back when you get this.", q:"Écoute ce message vocal : que doit faire Tom ?", opts:["Annuler la réunion","Rappeler Julie","Envoyer un email à toute l'équipe","Venir à midi"], correct:1, why:"« Give me a call back when you get this » = rappelle-moi quand tu as ce message. La réunion est déplacée à 15 h." },
      { cat:"oral", audio:"Thank you for contacting customer support. Your ticket has been escalated to our technical team, who will get back to you within forty-eight hours.", q:"Écoute : que va-t-il se passer ?", opts:["Le problème est déjà réglé","Le client doit rappeler demain","La commande est annulée","L'équipe technique va recontacter le client sous 48 heures"], correct:3, why:"« escalated to our technical team » + « will get back to you within forty-eight hours » : la demande a été transmise, réponse sous 48 h." },
      { cat:"oral", audio:"So sorry, I can't make it tonight. Something's come up at work. Rain check?", q:"Écoute : que propose la personne ?", opts:["De remettre ça à une autre fois","De venir plus tard ce soir","D'annuler définitivement","De se retrouver au travail"], correct:0, why:"« Rain check? » = on remet ça à plus tard ? Expression d'origine américaine, très utilisée partout à l'oral et à l'écrit informel." },
      { cat:"oral", audio:"Hi everyone, just a quick reminder that all reports are due by the end of the day on Friday.", q:"Écoute : quelle est l'échéance ?", opts:["Lundi matin","Aujourd'hui à midi","Vendredi, en fin de journée","Aucune échéance précise"], correct:2, why:"« due by the end of the day on Friday » = à rendre vendredi, avant la fin de la journée." },
      { cat:"comprehension", passage:"“Hi Mark, Hope you're well. Just following up on the budget I sent you last Tuesday. I'd really appreciate your feedback by Thursday, as we need to finalise it before the board meeting. Let me know if anything's unclear. Kind regards, Anna”", q:"D'après cet email, pourquoi Anna écrit-elle ?", opts:["Pour annoncer l'annulation d'une réunion","Pour relancer Mark et obtenir son avis avant jeudi","Pour se plaindre du travail de Mark","Pour envoyer un nouveau budget"], correct:1, why:"« Just following up » + « I'd really appreciate your feedback by Thursday » : c'est une relance polie avec une échéance claire." },
      { cat:"comprehension", passage:"“Thrilled to announce that after five amazing years at Brightside, I'm starting a new chapter as Head of Marketing at GreenLeaf! Huge thanks to everyone who supported me along the way.”", q:"D'après ce post LinkedIn, qu'annonce la personne ?", opts:["Un nouveau poste dans une autre entreprise","Un licenciement","Un départ à la retraite","La création de sa propre entreprise"], correct:0, why:"« a new chapter as Head of Marketing at GreenLeaf » : elle quitte Brightside pour un nouveau poste. Ton typique de LinkedIn : enthousiaste et reconnaissant." },
      { cat:"comprehension", passage:"“(rappel) ‘Thanks for your proposal. I'll bear it in mind.’ That was my manager's entire reply to my three-page email: no questions, no comments, no next steps.”", q:"D'après le texte, que suggère cette réponse ?", opts:["Le manager est enthousiaste","Le manager va appeler dès demain","Le manager n'a pas reçu l'email","Le manager n'a probablement pas l'intention d'y donner suite"], correct:3, why:"Une réponse très courte, vague et sans suite à un long email : il faut lire entre les lignes (rappel B2.8). « I'll bear it in mind » est souvent un refus poli." },
      { cat:"comprehension", passage:"“(rappel) After fifty messages in the team chat, my colleague wrote: ‘Oh great, another meeting about meetings.’ Half the team didn't realise he was joking and took it literally.”", q:"D'après le texte, quel problème ce message illustre-t-il ?", opts:["Le sarcasme passe mal à l'écrit, sans intonation","Le collègue adore les réunions","Personne n'a lu le message","Le message était trop long"], correct:0, why:"« Oh great » est sarcastique (rappel B2.7), mais à l'écrit, sans le ton de la voix, beaucoup l'ont pris au premier degré." }
    ],
    PRON_VERBS: [
      {en:"Just following up on my email from Monday.", fr:"Je me permets de vous relancer concernant mon email de lundi."},
      {en:"I'll get back to you by the end of the day.", fr:"Je reviens vers vous d'ici la fin de la journée."},
      {en:"I'm looping in Sarah, who's in charge of the budget.", fr:"Je mets Sarah dans la boucle, c'est elle qui gère le budget."},
      {en:"I was wondering if you could help me with my order.", fr:"Je me demandais si vous pourriez m'aider avec ma commande."},
      {en:"Could you escalate this to a manager, please?", fr:"Pourriez-vous transmettre ma demande à un responsable, s'il vous plaît ?"},
      {en:"Sorry, you're on mute!", fr:"Désolé(e), ton micro est coupé !"}
    ],
    READING: [
      "When I started working for a company in Dublin, I thought writing in English was simply a matter of getting the grammar right.",
      "I soon discovered that every channel has its own unwritten rules.",
      "My first emails were far too formal: my colleagues found “Dear Sir or Madam” rather amusing for an internal message.",
      "On the team chat, on the other hand, people wrote in short, rapid bursts, often without a subject or even a full stop.",
      "My manager preferred brief, well-structured emails with one clear request and a realistic deadline.",
      "With friends on WhatsApp, voice notes and emojis did most of the talking.",
      "The trickiest part was the tone: a one-word reply like “Fine.” could sound perfectly neutral or quietly annoyed.",
      "Once, I spent an hour on an airline's live chat about a lost suitcase and got nowhere until I stayed calm, gave my reference number and politely asked them to escalate the case.",
      "Now, before I hit “send”, I ask myself three questions: who is going to read this, where, and how might it sound?",
      "It only takes a few seconds, but it has saved me from quite a few awkward misunderstandings."
    ],
    GLOSS: [
      {en:"unwritten rules", fr:"des règles tacites, non écrites"},
      {en:"a burst", fr:"une rafale, un jaillissement"},
      {en:"a deadline", fr:"une échéance, une date limite"},
      {en:"tricky", fr:"délicat, épineux"},
      {en:"to get nowhere", fr:"n'aboutir à rien, ne rien obtenir"},
      {en:"awkward", fr:"gênant, embarrassant"}
    ],
    GRAMMAR1: {
      heading: "Le même message, quatre registres : adapter l'écrit au destinataire et au canal",
      lede: "À l'écrit numérique, ce ne sont pas seulement les mots qui changent selon le destinataire : c'est aussi la longueur, la structure des phrases, la ponctuation et même la présence du sujet. Voici le même message (« je serai en retard ») écrit quatre fois.",
      conj: [["Un ami (WhatsApp) →","Informel, elliptique","Running late, sorry! 10 mins"],["Un collègue (chat d'équipe) →","Neutre, direct","Hi Tom, I'm running about ten minutes late — start without me."],["Un manager (email) →","Poli, structuré","I'm afraid I'll be around ten minutes late for this morning's meeting. Apologies for the inconvenience."],["Un service client (chat/email) →","Factuel, précis","I'm writing to let you know that I'll be about ten minutes late for my 2 pm appointment (ref. 4521)."]],
      ruleHtml: "📖 Dans les messages <b>informels</b>, l'anglais supprime volontiers le sujet et l'auxiliaire : « <b>Running late</b> » (= I'm running late), « <b>Sounds good</b> », « <b>Got it</b> », « <b>Can't make it</b> », « <b>Be there in 5</b> ». Dans un email <b>professionnel</b>, on revient à des phrases complètes, avec une structure claire : <b>salutation</b> (Hi + prénom / Dear + nom) → <b>objet du message</b> dès la première ligne → <b>détails</b> → <b>action attendue</b> et échéance → <b>formule de fin</b>. Avec un <b>service client</b>, sois factuel(le) : numéro de commande ou de dossier, problème, ce que tu attends.",
      dialogueLede: "Un collègue t'écrit sur le chat de l'équipe :",
      dialogue: [
        {who:"them", en:"Hey, are you joining the call at 3?", fr:"Salut, tu te joins à l'appel de 15 h ?"},
        {who:"you", en:"Yep, will do. Might be a couple of mins late though, stuck on another call.", fr:"Oui, ça marche. Je risque d'avoir quelques minutes de retard, par contre, je suis coincé(e) sur un autre appel."}
      ],
      whyLabel: "Le piège des francophones : trop formel, ou trop direct",
      whyText: "Beaucoup de francophones écrivent leurs emails en anglais comme une lettre administrative (« <b>Dear Sir, I would like to inform you that…</b> »), ce qui paraît froid, voire comique, entre collègues. À l'inverse, traduire une demande directe (« Envoie-moi le fichier ») par « <b>Send me the file.</b> » sonne sec en anglais. La bonne cible, au travail : <b>Hi + prénom</b>, phrases courtes et complètes, et des demandes adoucies (« <b>Could you send me the file when you get a chance?</b> »)."
    },
    GRAMMAR2: {
      heading: "Adoucir une demande par écrit : I was wondering if…, Would it be possible…, Could you possibly…",
      dialogueLede: "Tu écris au service client d'une compagnie aérienne via le chat :",
      dialogue: [
        {who:"them", en:"Hi, thanks for reaching out! How can I help you today?", fr:"Bonjour, merci de nous avoir contactés ! Comment puis-je vous aider aujourd'hui ?"},
        {who:"you", en:"Hi, my suitcase didn't arrive yesterday. My reference number is 4521. Would it be possible to have an update on where it is?", fr:"Bonjour, ma valise n'est pas arrivée hier. Mon numéro de dossier est le 4521. Serait-il possible d'avoir des nouvelles de l'endroit où elle se trouve ?"}
      ],
      ruleHtml: "💭 Pour qu'une demande écrite soit polie sans être lourde, l'anglais utilise des structures <b>indirectes</b> : <b>I was wondering if you could…</b> (le Past Continuous rend la demande plus douce, il ne parle pas du passé !), <b>Would it be possible to…?</b>, <b>Could you possibly…?</b>, <b>Would you mind + -ing…?</b> (« Would you mind <b>sending</b> it again? »). Petits mots adoucisseurs très fréquents : <b>just</b> (« I <b>just</b> wanted to check… »), <b>a quick</b> (« <b>a quick</b> question »), <b>when you get a chance</b>. Et pour conclure : <b>Let me know if you have any questions</b> ou <b>Thanks in advance</b>.",
      whyLabel: "À l'écrit, pas d'intonation : attention au ton",
      whyText: "Sans voix ni visage, un message peut être mal lu. Le <b>sarcasme</b> (rappel B2.7) passe très mal par écrit, et certaines formules très polies en apparence sont lues comme <b>passives-agressives</b> (rappel B2.8) : « <b>As per my last email</b> » (= je te l'ai déjà dit), « <b>Thanks in advance</b> » répété avec insistance, ou un simple « <b>Fine.</b> » avec un point. Au moindre doute, ajoute un mot chaleureux (« <b>Thanks so much!</b> ») ou décroche le téléphone : « <b>Easier to discuss this on a quick call?</b> »"
    },
    REVIEW: [
      { q:"“He finally agreed.” — que suggère « finally » ?", opts:["Qu'il a longtemps résisté avant d'accepter","Qu'il a accepté tout de suite"], correct:0, fb:"« Finally » implique une attente ou une résistance préalable. (rappel B2.8)" },
      { q:"Le locuteur « implies », l'auditeur :", opts:["infers","assumes"], correct:0, fb:"On sous-entend (imply) en parlant, on déduit (infer) en écoutant. (rappel B2.8)" },
      { q:"“Apparently, she's leaving.” — le locuteur :", opts:["rapporte une information non vérifiée","en est absolument certain"], correct:0, fb:"« Apparently » = à ce qu'on dit : on prend ses distances avec l'information. (rappel B2.8)" },
      { q:"“Our so-called expert…” exprime :", opts:["du respect","du mépris ou un doute"], correct:1, fb:"« So-called » met en doute le titre de la personne. (rappel B2.8)" },
      { q:"Comment dit-on « on dit qu'il est très riche » ?", opts:["He is said to be very rich.","He says to be very rich."], correct:0, fb:"« Be said to + base » = on dit que… (structure de mise à distance). (rappel B2.8)" }
    ],
    CULTURE_NOTE: {
      icon: "📧",
      title: "Note culturelle — les codes de l'écrit numérique anglophone",
      html: "Au travail, « <b>Hi + prénom</b> » est aujourd'hui la norme, même avec un manager ou un client qu'on connaît un peu ; « <b>Dear + nom</b> » reste réservé aux premiers contacts formels. Pour conclure, « <b>Kind regards</b> » ou « <b>Best wishes</b> » sont sûrs ; « <b>Cheers</b> » est typiquement britannique et décontracté, « <b>Best</b> » plutôt américain. Au Royaume-Uni, on termine souvent un message à un ami ou à la famille par un « <b>x</b> » (un bisou) — mais jamais dans un contexte professionnel ! Sur <b>LinkedIn</b>, le ton est nettement plus enthousiaste qu'en France (« <b>thrilled</b> », « <b>excited</b> », « <b>proud</b> »), surtout chez les Américains. Enfin, dans le monde anglophone, on attend en général une réponse à un email professionnel sous <b>24 à 48 heures</b>, même brève : « <b>Thanks, I'll get back to you by Friday</b> » suffit."
    },
    NEXT_PREVIEW: "B2.10 (Thinking in English) : réduire peu à peu la traduction mentale pour penser directement en anglais — de l'image à la phrase, de la situation à la réaction, de l'intention à la formulation — avec le « 10-second challenge » : commencer à répondre en moins de 10 secondes.",
    META: { vocabTitle:"L'anglais numérique (B2.9)", lectureTitle:"Chaque canal a ses règles", bilanTitle:"Bravo, tu sais maintenant adapter ton message à chaque canal numérique : email, messagerie, réseaux sociaux et service client !", pronLabel:"Registres écrits et demandes adoucies (I was wondering if…, Would it be possible…)", todayLede:"adapter ton message écrit au canal et au destinataire (ami, collègue, manager, service client) : email, WhatsApp, réseaux sociaux, LinkedIn, message vocal, chat en ligne — s'appuie sur B2.8 (Read Between the Lines) et B2.6 (Diplomatic English)" }
  };

  // B2.10 — Thinking in English — s'appuie sur B2.9 (Digital English) et B2.2 (Nuance & Certainty)
  LESSONS_EXT[49] = {
    code: "B2.10", level: "B2",
    VOCAB: [
      {block:"Gagner du temps sans traduire", en:"Let me think…", ipa:"/let miː θɪŋk/", fr:"Laisse-moi réfléchir…", note:"Bien mieux qu'un long « euh » : tu montres que tu réfléchis EN anglais et tu gagnes deux précieuses secondes."},
      {block:"Gagner du temps sans traduire", en:"That's a tricky one.", ipa:"/ðæts ə ˈtrɪki wʌn/", fr:"C'est une question délicate.", note:"« tricky » = épineux, pas évident. Valorise la question tout en te laissant le temps de construire ta réponse."},
      {block:"Gagner du temps sans traduire", en:"Off the top of my head", ipa:"/ɒf ðə tɒp əv maɪ hed/", fr:"Comme ça, sans vérifier, de mémoire", note:"Prévient qu'on répond spontanément, sans garantie : « Off the top of my head, I'd say about fifty. »"},
      {block:"Gagner du temps sans traduire", en:"How can I put it?", ipa:"/haʊ kən aɪ pʊt ɪt/", fr:"Comment dire ?", note:"Ici « put » = formuler. Parfait quand l'idée est claire mais que les mots cherchent encore leur place."},
      {block:"Gagner du temps sans traduire", en:"What I mean is…", ipa:"/wɒt aɪ miːn ɪz/", fr:"Ce que je veux dire, c'est…", note:"Relance ta propre phrase pour la reformuler plus simplement, sans repartir du français."},
      {block:"Gagner du temps sans traduire", en:"I'd say…", ipa:"/aɪd seɪ/", fr:"Je dirais que…", note:"Adoucit une réponse spontanée (rappel B2.2 : la nuance) et évite de répéter « I think that » à chaque phrase."},
      {block:"Contourner un mot qui manque", en:"It's a kind of…", ipa:"/ɪts ə kaɪnd əv/", fr:"C'est une sorte de…", note:"Première bouée de secours : une catégorie générale, puis une précision — « It's a kind of tool for… »."},
      {block:"Contourner un mot qui manque", en:"It's what you use to…", ipa:"/ɪts wɒt juː juːz tə/", fr:"C'est ce qu'on utilise pour…", note:"Décrire par la fonction : « It's what you use to open a bottle » (= a corkscrew). Ici « you » = « on »."},
      {block:"Contourner un mot qui manque", en:"It's similar to…", ipa:"/ɪts ˈsɪmələ tə/", fr:"Ça ressemble à…", note:"Toujours « similar TO » — jamais « similar of » ni « similar than », deux erreurs très fréquentes chez les francophones."},
      {block:"Contourner un mot qui manque", en:"It's on the tip of my tongue.", ipa:"/ɪts ɒn ðə tɪp əv maɪ tʌŋ/", fr:"Je l'ai sur le bout de la langue.", note:"Bonne nouvelle : l'image est exactement la même qu'en français."},
      {block:"Contourner un mot qui manque", en:"The word escapes me.", ipa:"/ðə wɜːd ɪˈskeɪps miː/", fr:"Le mot m'échappe.", note:"Version plus soutenue, idéale en réunion : tu avoues le trou de mémoire sans perdre la face, puis tu décris."},
      {block:"Penser directement en anglais", en:"Mental translation", ipa:"/ˈmentl trænzˈleɪʃn/", fr:"Traduction mentale", note:"Le frein n°1 à la fluidité : construire la phrase en français, puis la convertir mot à mot."},
      {block:"Penser directement en anglais", en:"Fluency", ipa:"/ˈfluːənsi/", fr:"Aisance, fluidité", note:"À distinguer d'« accuracy » : on peut être « fluent » tout en faisant quelques erreurs. Adjectif : « fluent »."},
      {block:"Penser directement en anglais", en:"Accuracy", ipa:"/ˈækjərəsi/", fr:"Précision, justesse", note:"Adjectif : « accurate » (exact, juste). Au B2, on vise l'équilibre entre fluency et accuracy, pas la perfection."},
      {block:"Penser directement en anglais", en:"Gut reaction", ipa:"/ɡʌt riˈækʃn/", fr:"Réaction instinctive, première impression", note:"« gut » = les tripes : « My gut reaction was to say no. » Proche : « a gut feeling » (une intuition)."},
      {block:"Penser directement en anglais", en:"To think on your feet", ipa:"/tə θɪŋk ɒn jɔː fiːt/", fr:"Réagir vite, savoir improviser", note:"LA compétence de ce palier : « She's very good at thinking on her feet. » Rien à voir avec le fait d'être debout !"},
      {block:"Penser directement en anglais", en:"Chunk", ipa:"/tʃʌŋk/", fr:"Bloc de mots tout fait", note:"Les natifs pensent en blocs (« to be honest », « as far as I know ») plutôt qu'en mots isolés : apprends-les d'un seul tenant."},
      {block:"Décrire une image, une scène", en:"In the foreground", ipa:"/ɪn ðə ˈfɔːɡraʊnd/", fr:"Au premier plan", note:"Piège : on ne dit jamais « in the first plan »."},
      {block:"Décrire une image, une scène", en:"In the background", ipa:"/ɪn ðə ˈbækɡraʊnd/", fr:"À l'arrière-plan", note:"Aussi au figuré : « background music » (musique de fond), « her background » (son parcours, ses origines)."},
      {block:"Décrire une image, une scène", en:"It looks as if…", ipa:"/ɪt lʊks əz ɪf/", fr:"On dirait que…", note:"Suivi d'une proposition complète : « It looks as if they're arguing. » Un peu plus soigné que « it looks like »."},
      {block:"Décrire une image, une scène", en:"Judging by…", ipa:"/ˈdʒʌdʒɪŋ baɪ/", fr:"À en juger par…", note:"Justifie une hypothèse à partir d'un indice : « Judging by their coats, it must be winter. »"},
      {block:"Verbes clés (B2.10)", en:"To come up with", ipa:"/tə kʌm ˈʌp wɪð/", fr:"Trouver (une idée, une réponse)", note:"Phrasal verb très fréquent : « I came up with an answer in seconds. »"},
      {block:"Verbes clés (B2.10)", en:"To figure out", ipa:"/tə ˈfɪɡər aʊt/", fr:"Comprendre, trouver (à force de réfléchir)", note:"D'origine américaine mais courant partout ; l'équivalent plus britannique est « to work out »."},
      {block:"Verbes clés (B2.10)", en:"To rephrase", ipa:"/tə ˌriːˈfreɪz/", fr:"Reformuler", note:"« Let me rephrase that » = laisse-moi reformuler : ton arme anti-blocage n°1."},
      {block:"Verbes clés (B2.10)", en:"To hesitate", ipa:"/tə ˈhezɪteɪt/", fr:"Hésiter", note:"« Don't hesitate to contact me » est très écrit ; à l'oral, on dit plutôt « Feel free to… »."},
      {block:"Verbes clés (B2.10)", en:"To blurt out", ipa:"/tə blɜːt aʊt/", fr:"Lâcher (une réponse) sans réfléchir", note:"Légèrement négatif : dire quelque chose trop vite, sans filtre — « He blurted out the answer. »"},
      {block:"Verbes clés (B2.10)", en:"To get across", ipa:"/tə ɡet əˈkrɒs/", fr:"Faire passer (un message, une idée)", note:"« I managed to get my point across » = j'ai réussi à faire comprendre mon idée — l'objectif réel d'une conversation."}
    ],
    MEM_WORDS: [2,9,14,15,21,26],
    MINI_CHECKS: [
      { q:"Tu ne trouves pas le mot « tire-bouchon ». Quelle est la stratégie la plus efficace à l'oral ?", opts:["Te taire jusqu'à ce que le mot revienne","« It's what you use to open a bottle of wine. »","Dire le mot français avec un accent anglais"], correct:1, fb:"Décrire par la fonction te garde dans l'anglais et ton interlocuteur te donnera souvent le mot (« Oh, a corkscrew! »)." },
      { q:"“If I ___ to choose, I'd go for the mountains.”", opts:["have","had","would have"], correct:1, fb:"Situation imaginaire = « If + Past Simple, would + base » : « If I had to choose, I'd… »." },
      { q:"« Off the top of my head » signifie :", opts:["Au fond de moi","Comme ça, sans vérifier","Au-dessus de mes forces"], correct:1, fb:"On prévient qu'on répond de mémoire, spontanément, sans garantie de précision." },
      { q:"Dans le 10-second challenge, quel est l'ordre des priorités ?", opts:["Précision → fluidité → communication","Communication → fluidité → précision","Fluidité → précision → communication"], correct:1, fb:"D'abord faire passer le message, ensuite parler sans blocage, et seulement ensuite viser la précision." }
    ],
    ROUNDS: [
      { bank:["that","rephrase","Let","me","."], answer:"let me rephrase that .", display:"Let me rephrase that.", fr:"Laisse-moi reformuler." },
      { bank:["tongue","my","of","tip","the","on","It's","."], answer:"it's on the tip of my tongue .", display:"It's on the tip of my tongue.", fr:"Je l'ai sur le bout de la langue." },
      { bank:["cold","food","keeps","that","something","It's","."], answer:"it's something that keeps food cold .", display:"It's something that keeps food cold.", fr:"C'est un truc qui garde les aliments au froid." },
      { bank:["sea","the","for","go","I'd","choose","to","had","I","If","."], answer:"if i had to choose i'd go for the sea .", display:"If I had to choose, I'd go for the sea.", fr:"S'il fallait choisir, je prendrais la mer." },
      { bank:["books","borrow","can","you","where","place","a","It's","."], answer:"it's a place where you can borrow books .", display:"It's a place where you can borrow books.", fr:"C'est un endroit où l'on peut emprunter des livres." },
      { bank:["across","point","my","get","to","managed","I","."], answer:"i managed to get my point across .", display:"I managed to get my point across.", fr:"J'ai réussi à faire passer mon idée." },
      { bank:["no","say","to","was","reaction","gut","My","."], answer:"my gut reaction was to say no .", display:"My gut reaction was to say no.", fr:"Ma première réaction a été de dire non." },
      { bank:["rain","to","going","it's","sky","the","by","Judging","."], answer:"judging by the sky it's going to rain .", display:"Judging by the sky, it's going to rain.", fr:"À en juger par le ciel, il va pleuvoir." },
      { bank:["feet","her","on","thinking","at","good","very","She's","."], answer:"she's very good at thinking on her feet .", display:"She's very good at thinking on her feet.", fr:"Elle sait très bien improviser." },
      { bank:["lottery","the","won","you","if","do","you","would","What","?"], answer:"what would you do if you won the lottery ?", display:"What would you do if you won the lottery?", fr:"Que ferais-tu si tu gagnais au loto ?" }
    ],
    QUIZ: [
      { cat:"ecrit", q:"“It's someone ___ fixes computers.”", opts:["which","who","where"], correct:1, why:"Pour une personne : « someone who ». « which » est réservé aux choses, « where » aux lieux." },
      { cat:"ecrit", q:"“It's a place ___ you can relax after work.”", opts:["where","which","who"], correct:0, why:"« a place where + sujet + verbe ». Avec « which », il faudrait une préposition : « a place in which you can relax » (plus formel)." },
      { cat:"ecrit", q:"“If I ___ more free time, I'd learn the piano.”", opts:["would have","have","had"], correct:2, why:"Situation imaginaire : « If + Past Simple, would + base ». Jamais « would » dans la partie « if »." },
      { cat:"ecrit", q:"“If I ___ you, I'd accept the offer.” — registre soigné.", opts:["am","were","would be"], correct:1, why:"« If I were you » est la forme soignée ; « If I was you » s'entend beaucoup à l'oral mais reste plus familier." },
      { cat:"ecrit", q:"Comment dit-on « je l'ai sur le bout de la langue » ?", opts:["It's on the tip of my tongue.","It's at the end of my mouth.","I have it on my tongue."], correct:0, why:"« on the tip of my tongue » : même image qu'en français, mot pour mot." },
      { cat:"ecrit", q:"« To think on your feet » signifie :", opts:["Réfléchir en marchant","Réagir vite et improviser","Rester debout pour se concentrer"], correct:1, why:"Expression idiomatique : savoir réagir rapidement à une situation imprévue." },
      { cat:"ecrit", q:"Quel « chunk » permet de gagner du temps face à une question difficile ?", opts:["That's a tricky one.","That's a piece of cake.","That's none of your business."], correct:0, why:"« That's a tricky one » reconnaît la difficulté et t'offre quelques secondes. « A piece of cake » = c'est facile ; la troisième est franchement impolie." },
      { cat:"ecrit", q:"Comment dit-on « faire passer mon idée » ?", opts:["To pass my message","To come up with my point","To get my point across"], correct:2, why:"« get something across » = faire comprendre. « Pass my message » est un calque du français." },
      { cat:"ecrit", q:"“It's similar ___ a sofa, but smaller.”", opts:["of","to","than"], correct:1, why:"« similar TO » est la seule construction correcte. « than » s'emploie après un comparatif (« smaller than »)." },
      { cat:"ecrit", q:"Quelle phrase est la plus naturelle pour décrire une photo ?", opts:["In the back plan, there are some mountains.","At the second plan, there are some mountains.","In the background, there are some mountains."], correct:2, why:"« In the background » = à l'arrière-plan ; « in the foreground » = au premier plan. « Plan » est ici un faux ami." },
      { cat:"oral", audio:"Off the top of my head, I'd say about fifty people came.", q:"Écoute : que signale la personne à propos de son chiffre ?", opts:["Elle l'a vérifié précisément","C'est une estimation spontanée, sans vérification","Elle refuse de répondre","Elle ne se souvient de rien"], correct:1, why:"« Off the top of my head » + « I'd say » = estimation donnée de mémoire, sans garantie." },
      { cat:"oral", audio:"I can't remember the word, but it's what you use to open a bottle of wine.", q:"Écoute : de quel objet la personne parle-t-elle ?", opts:["Un verre à vin","Une nappe","Un tire-bouchon","Un réfrigérateur"], correct:2, why:"« what you use to open a bottle of wine » = a corkscrew, un tire-bouchon : la paraphrase par la fonction." },
      { cat:"oral", audio:"If I had to choose, I'd rather live by the sea than in the mountains.", q:"Écoute : que préfère la personne ?", opts:["Vivre à la montagne","Vivre en ville","Elle n'a aucune préférence","Vivre au bord de la mer"], correct:3, why:"« I'd rather live by the sea than in the mountains » = je préférerais vivre au bord de la mer." },
      { cat:"oral", audio:"Judging by the umbrellas in the background, it looks as if it's about to rain.", q:"Écoute : sur quoi la personne fonde-t-elle son hypothèse ?", opts:["Sur les parapluies à l'arrière-plan","Sur la météo à la radio","Sur les nuages au premier plan","Sur un message reçu"], correct:0, why:"« Judging by the umbrellas in the background » = à en juger par les parapluies à l'arrière-plan." },
      { cat:"comprehension", passage:"“For years, I built every sentence in French first and then translated it. It was exhausting, and by the time I'd finished, the conversation had moved on. What changed everything was learning whole chunks — ‘to be honest’, ‘as far as I know’ — instead of single words.”", q:"D'après le texte, qu'est-ce qui a tout changé ?", opts:["Traduire plus rapidement","Apprendre des blocs de mots entiers plutôt que des mots isolés","Ne parler qu'avec des natifs","Arrêter de prendre la parole en réunion"], correct:1, why:"« What changed everything was learning whole chunks… instead of single words »." },
      { cat:"comprehension", passage:"“During the interview, they asked me a question I hadn't prepared for at all. Instead of panicking, I said, ‘That's a tricky one — let me think,’ and it bought me just enough time to come up with a decent answer.”", q:"D'après le texte, comment la personne a-t-elle géré la question imprévue ?", opts:["Elle a demandé à passer à la question suivante","Elle a répondu en français","Elle a gagné du temps avec une formule toute faite, puis a trouvé une réponse","Elle est restée silencieuse"], correct:2, why:"« it bought me just enough time to come up with a decent answer » = la formule lui a fait gagner du temps." },
      { cat:"comprehension", passage:"“(rappel) Hi Tom, just a quick heads-up: the meeting has been moved to 3 pm. Could you let the others know? Thanks!”", q:"D'après ce message, que demande-t-on à Tom ?", opts:["D'annuler la réunion","D'envoyer un compte rendu","D'appeler le client","De prévenir les autres du changement d'horaire"], correct:3, why:"« Could you let the others know? » (rappel B2.9 : « a quick heads-up », registre de message informel entre collègues)." },
      { cat:"comprehension", passage:"“(rappel) Arguably, the best way to improve is to speak every day, even if only for a few minutes. It won't make you perfect, but it will, to some extent, make speaking feel less stressful.”", q:"D'après le texte, quelle est la position de l'auteur ?", opts:["Parler chaque jour aide, dans une certaine mesure, à réduire le stress","Parler chaque jour rend parfait","Parler chaque jour ne sert à rien","Il faut parler au moins une heure par jour"], correct:0, why:"« It won't make you perfect, but… to some extent… less stressful » (rappel B2.2 : « arguably », « to some extent »)." }
    ],
    PRON_VERBS: [
      {en:"That's a tricky one — let me think.", fr:"C'est une question délicate — laisse-moi réfléchir."},
      {en:"It's on the tip of my tongue.", fr:"Je l'ai sur le bout de la langue."},
      {en:"It's what you use to open a bottle of wine.", fr:"C'est ce qu'on utilise pour ouvrir une bouteille de vin."},
      {en:"If I had to choose, I'd go for the sea.", fr:"S'il fallait choisir, je prendrais la mer."},
      {en:"Judging by the sky, it looks as if it's going to rain.", fr:"À en juger par le ciel, on dirait qu'il va pleuvoir."},
      {en:"I finally managed to get my point across.", fr:"J'ai enfin réussi à faire passer mon idée."}
    ],
    READING: [
      "For years, every conversation in English felt like a race against my own brain.",
      "I would hear a question, translate it into French, build an answer, and then translate it back.",
      "By the time I was ready to speak, the others had usually moved on to another topic.",
      "One evening, a colleague challenged me to answer five random questions in under ten seconds each.",
      "The very first one — ‘What would you do with an extra hour every day?’ — caught me completely off guard.",
      "Instead of freezing, I said ‘That's a tricky one’ and simply let the answer come to me in English.",
      "When I couldn't find the word for a corkscrew, I just explained that it was what you use to open a bottle.",
      "To my surprise, nobody cared about the missing word — they understood me straight away.",
      "Since then, I've been training myself to describe what I see and feel directly in English, without a detour through French.",
      "I still make mistakes, of course, but I've realised that getting my point across matters far more than sounding perfect."
    ],
    GLOSS: [
      {en:"a race", fr:"une course"},
      {en:"random", fr:"au hasard, aléatoire"},
      {en:"to catch someone off guard", fr:"prendre quelqu'un au dépourvu"},
      {en:"to freeze", fr:"se figer, rester bloqué(e)"},
      {en:"straight away", fr:"tout de suite"},
      {en:"a detour", fr:"un détour"}
    ],
    GRAMMAR1: {
      heading: "Décrire sans le mot exact : les relatives au service de la paraphrase",
      lede: "Au niveau B2, personne n'exige que tu connaisses tous les mots. On attend en revanche que tu saches contourner un mot manquant sans repasser par le français. Quatre structures relatives suffisent pour décrire presque tout : une chose, une personne, un lieu, un moment.",
      conj: [["Une chose (par sa fonction) →","something that / which + verbe","It's something that keeps food cold."],["Une personne →","someone who + verbe","It's someone who repairs pipes."],["Un lieu →","a place where + sujet + verbe","It's a place where you can borrow books."],["Un moment →","the time / the moment when + sujet + verbe","It's the time when everyone goes on holiday."]],
      ruleHtml: "📖 <b>who</b> pour les personnes, <b>that / which</b> pour les choses, <b>where</b> pour les lieux, <b>when</b> pour les moments. Quand le pronom est <b>complément</b> (suivi d'un sujet), on peut l'omettre : « It's something <b>you use</b> every day » = « It's something <b>that</b> you use every day ». Pièges fréquents chez les francophones : « the person <b>which</b>… » (❌ → <b>who</b>) et « a place <b>where is</b> nice » (❌ → <b>where</b> doit être suivi d'un sujet + verbe : « a place <b>where people</b> meet », ou bien « a place <b>that is</b> nice »).",
      dialogueLede: "Dans un magasin de bricolage, le mot exact t'échappe :",
      dialogue: [
        {who:"them", en:"Can I help you find anything?", fr:"Je peux vous aider à trouver quelque chose ?"},
        {who:"you", en:"Yes — the word escapes me, but it's something you use to hang pictures on the wall, a kind of small hook.", fr:"Oui — le mot m'échappe, mais c'est un truc qu'on utilise pour accrocher des tableaux au mur, une sorte de petit crochet."}
      ],
      whyLabel: "Pourquoi c'est la clé pour penser en anglais",
      whyText: "Chaque fois que tu t'arrêtes pour chercher le mot français puis sa traduction, tu <b>casses le fil</b> de la conversation et tu retombes dans la traduction mentale. Paraphraser te garde <b>dans l'anglais</b> : tu décris, l'autre comprend, et souvent il te donne le mot au passage — que tu retiendras bien mieux ainsi. Les natifs eux-mêmes le font tout le temps (« that thing you use to… »). Ce n'est pas un aveu de faiblesse, c'est une compétence B2 à part entière."
    },
    GRAMMAR2: {
      heading: "Répondre à l'imprévu : gagner du temps, puis « If I had to…, I'd… »",
      dialogueLede: "Un collègue lance une question surprise pendant la pause :",
      dialogue: [
        {who:"them", en:"Quick question: what would you take with you to a desert island?", fr:"Petite question : qu'est-ce que tu emporterais sur une île déserte ?"},
        {who:"you", en:"Ooh, that's a tricky one… If I had to pick just one thing, I'd probably take a good knife.", fr:"Oh, c'est une question délicate… S'il fallait choisir une seule chose, je prendrais sans doute un bon couteau."}
      ],
      ruleHtml: "💭 Les questions imprévisibles sont souvent <b>hypothétiques</b> (« What would you do if… ? »). La réponse naturelle suit le schéma : <b>chunk pour gagner du temps</b> + <b>If + Past Simple, would + base</b>. « <b>If I had to</b> choose, <b>I'd</b> go for… », « <b>If I could</b> live anywhere, <b>I'd</b> pick… », et pour une préférence : « <b>I'd rather</b> + base (+ than…) ». Piège classique : jamais de « would » après « if » — « If I <b>would have</b> time » ❌ → « If I <b>had</b> time » ✅.",
      whyLabel: "Secret English — le 10-second challenge",
      whyText: "Règle du jeu : tu as <b>10 secondes</b> pour commencer à répondre, pas pour produire la réponse parfaite. Les priorités sont dans cet ordre : <b>communication → fluidité → précision</b>. Méthode : 1) un <b>chunk</b> d'ouverture (« That's a tricky one », « Off the top of my head… ») ; 2) une <b>phrase simple</b> qui donne l'idée principale ; 3) un <b>détail ou une raison</b> (« because… »). Une petite erreur corrigée au passage vaut toujours mieux qu'un silence : en anglais, un blanc prolongé met plus mal à l'aise qu'une faute."
    },
    REVIEW: [
      { q:"Dans un email professionnel, quelle formule de fin est la plus adaptée ?", opts:["Kind regards","Cheers mate"], correct:0, fb:"« Kind regards » convient à presque tous les emails professionnels ; « Cheers mate » est réservé aux proches. (rappel B2.9)" },
      { q:"Comment dit-on « vous trouverez ci-joint » dans un email ?", opts:["Please look the joined file","Please find attached"], correct:1, fb:"« Please find attached… » est la formule consacrée. (rappel B2.9)" },
      { q:"« Just a quick heads-up » s'utilise pour :", opts:["Prévenir rapidement d'une information","Se plaindre officiellement"], correct:0, fb:"« a heads-up » = un petit avertissement, une info donnée à l'avance, registre plutôt informel. (rappel B2.9)" },
      { q:"Comment relancer poliment quelqu'un par email ?", opts:["Why didn't you answer me?","I'm just following up on my previous email."], correct:1, fb:"« I'm just following up on… » relance sans reproche. (rappel B2.9)" },
      { q:"Sur LinkedIn, quel ton convient le mieux ?", opts:["Professionnel mais chaleureux","Très familier, avec des abréviations (u, gr8)"], correct:0, fb:"LinkedIn = réseau professionnel : ton soigné, positif, sans abréviations de SMS. (rappel B2.9)" }
    ],
    CULTURE_NOTE: {
      icon: "🤔",
      title: "Note culturelle — les « fillers » : hésiter à l'anglaise",
      html: "Tous les natifs hésitent — ils le font simplement <b>en anglais</b>. Au Royaume-Uni, on entend beaucoup « <b>erm</b> » et « <b>well</b>… », aux États-Unis plutôt « <b>um</b> », « <b>like</b> » et « <b>you know</b> ». Remplacer ton « euh » français par ces petits mots est l'un des moyens les plus rapides de <b>sonner naturel</b>, car un « euh » français trahit immédiatement la traduction mentale. Autre différence culturelle : dans une conversation anglophone, surtout américaine, un <b>silence</b> de plus de quelques secondes met vite mal à l'aise ; on préfère meubler avec « Let me think… » ou « That's a good question… ». Attention tout de même : abuser de « like » (« it was, like, really, like, weird ») donne une image très familière, à éviter en contexte professionnel."
    },
    NEXT_PREVIEW: "B2.11 (One Day in English) : une journée complète simulée en anglais — répondre à un message, participer à une réunion, commander au restaurant, régler un problème au téléphone, débattre d'un sujet de société et donner ton avis sur un film, sans savoir à l'avance ce qui t'attend.",
    META: { vocabTitle: "Penser en anglais (B2.10)", lectureTitle: "Le jour où j'ai arrêté de traduire", bilanTitle: "Bravo, tu sais maintenant réagir en anglais sans passer par le français !", pronLabel: "Paraphraser (someone who / a place where) et répondre à l'hypothèse (If I had to…, I'd…)", todayLede: "réduire la traduction mentale : gagner du temps, contourner un mot qui manque, décrire une image et répondre à une question imprévue en moins de 10 secondes — s'appuie sur B2.9 (Digital English) et B2.2 (Nuance & Certainty)" }
  };

  // B2.11 — One Day in English — s'appuie sur B2.10 (Thinking in English) et B2.3 (Register Master)
  LESSONS_EXT[50] = {
    code: "B2.11", level: "B2",
    VOCAB: [
      {block:"Matin : messages et réunion", en:"To run late", ipa:"/tə rʌn leɪt/", fr:"Être en retard (en ce moment même)", note:"« I'm running late » = je suis en retard, j'arriverai après l'heure prévue — plus naturel que « I'm late » pour prévenir."},
      {block:"Matin : messages et réunion", en:"To push back", ipa:"/tə pʊʃ bæk/", fr:"Repousser, décaler (plus tard)", note:"« Can we push the meeting back to 3? » Contraire : « to bring forward »."},
      {block:"Matin : messages et réunion", en:"To bring forward", ipa:"/tə brɪŋ ˈfɔːwəd/", fr:"Avancer (une date, une réunion)", note:"Piège : « avancer une réunion » ne se dit jamais « advance a meeting »."},
      {block:"Matin : messages et réunion", en:"Agenda", ipa:"/əˈdʒendə/", fr:"Ordre du jour", note:"Faux ami : ton agenda papier = « a diary » (UK) ou « a planner » (US)."},
      {block:"Matin : messages et réunion", en:"Action points", ipa:"/ˈækʃn pɔɪnts/", fr:"Actions à mener (décidées en réunion)", note:"Aussi « action items » (US). « Let's go over the action points » = récapitulons qui fait quoi."},
      {block:"Matin : messages et réunion", en:"To catch up", ipa:"/tə kætʃ ˈʌp/", fr:"Faire le point ; rattraper son retard", note:"« Let's catch up tomorrow » = on fait le point demain ; « to catch up on emails » = rattraper ses emails."},
      {block:"Midi : au restaurant", en:"Dietary requirements", ipa:"/ˈdaɪətəri rɪˈkwaɪəmənts/", fr:"Régime alimentaire particulier", note:"Question très fréquente : « Do you have any dietary requirements? » (allergies, végétarien, halal…)."},
      {block:"Midi : au restaurant", en:"I'll go for…", ipa:"/aɪl ɡəʊ fɔː/", fr:"Je vais prendre…", note:"Bien plus naturel que « I will take » pour commander ; « I'll have… » fonctionne aussi."},
      {block:"Midi : au restaurant", en:"Could we get the bill?", ipa:"/kʊd wi ɡet ðə bɪl/", fr:"On pourrait avoir l'addition ?", note:"« the bill » (UK) = « the check » (US)."},
      {block:"Midi : au restaurant", en:"Is service included?", ipa:"/ɪz ˈsɜːvɪs ɪnˈkluːdɪd/", fr:"Le service est compris ?", note:"Au Royaume-Uni, souvent 12,5 % déjà ajoutés ; aux États-Unis, le pourboire (« tip ») n'est presque jamais inclus."},
      {block:"Midi : au restaurant", en:"Fully booked", ipa:"/ˈfʊli bʊkt/", fr:"Complet (côté réservations)", note:"« I'm afraid we're fully booked tonight » = désolé, nous sommes complets ce soir."},
      {block:"Après-midi : régler un problème au téléphone", en:"To get through to", ipa:"/tə ɡet ˈθruː tə/", fr:"Réussir à joindre", note:"« I can't get through to customer service » = je n'arrive pas à joindre le service client."},
      {block:"Après-midi : régler un problème au téléphone", en:"To hold the line", ipa:"/tə həʊld ðə laɪn/", fr:"Patienter (au téléphone)", note:"Un peu formel ; plus courant : « Could you hold on a moment? »"},
      {block:"Après-midi : régler un problème au téléphone", en:"Faulty", ipa:"/ˈfɔːlti/", fr:"Défectueux", note:"« a faulty product » ; ne pas confondre avec « guilty » (coupable)."},
      {block:"Après-midi : régler un problème au téléphone", en:"Refund", ipa:"/ˈriːfʌnd/", fr:"Remboursement", note:"Nom : « a REfund » /ˈriːfʌnd/ ; verbe : « to reFUND » /rɪˈfʌnd/ — l'accent se déplace (rappel B2.5)."},
      {block:"Après-midi : régler un problème au téléphone", en:"A replacement", ipa:"/ə rɪˈpleɪsmənt/", fr:"Un article de remplacement", note:"« I'd like a replacement or a full refund » = je voudrais un échange ou un remboursement intégral."},
      {block:"Après-midi : régler un problème au téléphone", en:"To escalate", ipa:"/tə ˈeskəleɪt/", fr:"Faire remonter (à un supérieur)", note:"« Could you escalate this to a manager? » Autre sens : « the situation escalated » = la situation s'est envenimée."},
      {block:"Soirée : débat et cinéma", en:"Thought-provoking", ipa:"/ˈθɔːt prəvəʊkɪŋ/", fr:"Qui fait réfléchir", note:"Compliment élégant pour un film, un livre ou un débat."},
      {block:"Soirée : débat et cinéma", en:"Overrated", ipa:"/ˌəʊvəˈreɪtɪd/", fr:"Surestimé", note:"Contraire : « underrated ». « Honestly, I found it a bit overrated » = critique nuancée."},
      {block:"Soirée : débat et cinéma", en:"Gripping", ipa:"/ˈɡrɪpɪŋ/", fr:"Captivant, haletant", note:"Idéal pour un thriller ou une série : « a gripping story »."},
      {block:"Soirée : débat et cinéma", en:"The plot", ipa:"/ðə plɒt/", fr:"L'intrigue", note:"« a plot twist » = un rebondissement ; « the plot was hard to follow » = l'intrigue était difficile à suivre."},
      {block:"Soirée : débat et cinéma", en:"A controversial issue", ipa:"/ə ˌkɒntrəˈvɜːʃl ˈɪʃuː/", fr:"Un sujet controversé", note:"« issue » = question, problème (de société). Faux ami : l'« issue » de secours = « the emergency exit »."},
      {block:"Soirée : débat et cinéma", en:"It depends on…", ipa:"/ɪt dɪˈpendz ɒn/", fr:"Ça dépend de…", note:"Toujours « depend ON » — « depend of » est l'une des erreurs les plus fréquentes chez les francophones."},
      {block:"Verbes clés (B2.11)", en:"To reschedule", ipa:"/tə ˌriːˈʃedjuːl/", fr:"Reprogrammer, changer la date", note:"Prononciation UK /ˈʃedjuːl/, US /ˈskedʒuːl/."},
      {block:"Verbes clés (B2.11)", en:"To sort out", ipa:"/tə sɔːt ˈaʊt/", fr:"Régler, arranger (un problème)", note:"Très britannique : « Don't worry, we'll sort it out. »"},
      {block:"Verbes clés (B2.11)", en:"To put through", ipa:"/tə pʊt ˈθruː/", fr:"Passer (quelqu'un au téléphone)", note:"« I'll put you through to the manager » = je vous passe le responsable."},
      {block:"Verbes clés (B2.11)", en:"To recommend", ipa:"/tə ˌrekəˈmend/", fr:"Recommander, conseiller", note:"« I'd recommend seeing it » (+ -ing) ou « I'd recommend that you see it ». « recommend you to see » est à éviter en anglais soigné."}
    ],
    MEM_WORDS: [1,3,11,14,18,24],
    MINI_CHECKS: [
      { q:"“Would you mind ___ the door?”", opts:["to close","closing","close"], correct:1, fb:"« Would you mind » est toujours suivi de la forme en -ing." },
      { q:"On te demande : « Would you mind waiting a minute? ». Tu es d'accord. Tu réponds :", opts:["Yes, I would.","No, not at all.","Yes, I mind."], correct:1, fb:"« mind » = être gêné(e). Pour accepter, on dit donc NON : « No, not at all » = non, ça ne me dérange pas du tout." },
      { q:"“What I liked most ___ the soundtrack.”", opts:["it was","was","were"], correct:1, fb:"Phrase clivée : « What + sujet + verbe + was + élément mis en valeur » — sans « it » supplémentaire." },
      { q:"Comment dit-on « repousser la réunion (à plus tard) » ?", opts:["To push the meeting back","To advance the meeting","To bring the meeting forward"], correct:0, fb:"« push back » = repousser ; « bring forward » = avancer. « Advance » ne s'emploie pas ainsi." }
    ],
    ROUNDS: [
      { bank:["late","bit","a","running","I'm","."], answer:"i'm running a bit late .", display:"I'm running a bit late.", fr:"J'ai un peu de retard." },
      { bank:["back","meeting","the","push","we","Can","?"], answer:"can we push the meeting back ?", display:"Can we push the meeting back?", fr:"On peut repousser la réunion ?" },
      { bank:["me","help","could","you","if","wondering","was","I","."], answer:"i was wondering if you could help me .", display:"I was wondering if you could help me.", fr:"Je me demandais si vous pourriez m'aider." },
      { bank:["line","the","holding","mind","you","Would","?"], answer:"would you mind holding the line ?", display:"Would you mind holding the line?", fr:"Pourriez-vous patienter ?" },
      { bank:["fish","the","for","go","I'll","."], answer:"i'll go for the fish .", display:"I'll go for the fish.", fr:"Je vais prendre le poisson." },
      { bank:["please","bill","the","get","we","Could","?"], answer:"could we get the bill please ?", display:"Could we get the bill, please?", fr:"On pourrait avoir l'addition, s'il vous plaît ?" },
      { bank:["refund","full","a","or","replacement","a","like","I'd","."], answer:"i'd like a replacement or a full refund .", display:"I'd like a replacement or a full refund.", fr:"Je voudrais un échange ou un remboursement intégral." },
      { bank:["manager","the","to","through","you","put","I'll","."], answer:"i'll put you through to the manager .", display:"I'll put you through to the manager.", fr:"Je vous passe le responsable." },
      { bank:["ending","the","was","most","me","struck","What","."], answer:"what struck me most was the ending .", display:"What struck me most was the ending.", fr:"Ce qui m'a le plus frappé(e), c'est la fin." },
      { bank:["it","at","look","you","how","on","depends","It","."], answer:"it depends on how you look at it .", display:"It depends on how you look at it.", fr:"Ça dépend de la façon dont on voit les choses." }
    ],
    QUIZ: [
      { cat:"ecrit", q:"“I ___ if you could send me the report today.” — demande polie à un supérieur.", opts:["was wondering","am wonder","wondered me"], correct:0, why:"« I was wondering if you could… » : le passé crée une distance polie. Les deux autres formes sont incorrectes." },
      { cat:"ecrit", q:"“Would you mind ___ me back later?”", opts:["to call","call","calling"], correct:2, why:"« Would you mind + -ing » : toujours le gérondif." },
      { cat:"ecrit", q:"“___ I liked most was the acting.”", opts:["That","What","Which"], correct:1, why:"Phrase clivée : « What I liked most was… » = ce que j'ai le plus aimé, c'est…" },
      { cat:"ecrit", q:"“The thing ___ annoyed me was the ending.”", opts:["what","who","that"], correct:2, why:"Après « the thing », on utilise « that » (ou « which »), jamais « what » : « what » contient déjà « the thing »." },
      { cat:"ecrit", q:"Comment dit-on « l'ordre du jour » d'une réunion ?", opts:["The agenda","The diary","The planning"], correct:0, why:"« agenda » = ordre du jour. Ton agenda papier = « a diary » (UK) ; « planning » n'a pas ce sens." },
      { cat:"ecrit", q:"Au restaurant : « nous sommes complets ce soir ».", opts:["We're full of reservations tonight.","We're fully booked tonight.","We're completed tonight."], correct:1, why:"« fully booked » = complet côté réservations." },
      { cat:"ecrit", q:"Au téléphone : « je vous passe le responsable ».", opts:["I'll pass you the manager.","I'll put you through to the manager.","I'll give you to the manager."], correct:1, why:"« to put someone through (to…) » = passer quelqu'un au téléphone. « Pass you » est un calque du français." },
      { cat:"ecrit", q:"Le nom « a refund » : où tombe l'accent ?", opts:["RE-fund","re-FUND","Sur les deux syllabes à égalité"], correct:0, why:"Nom : « REfund » ; verbe : « to reFUND ». Même logique que « a REcord / to reCORD » (rappel B2.5)." },
      { cat:"ecrit", q:"« Gripping », pour un film, signifie :", opts:["Ennuyeux","Violent","Captivant"], correct:2, why:"« gripping » = qui vous tient en haleine (« to grip » = saisir, agripper)." },
      { cat:"ecrit", q:"Quelle phrase est correcte ?", opts:["It depends of the price.","It depends on the price.","It's depending of the price."], correct:1, why:"Toujours « depend ON ». Et « depend » ne se met pas à la forme progressive dans ce sens." },
      { cat:"oral", audio:"Sorry, I'm running about ten minutes late — could we push the meeting back to half past?", q:"Écoute : que propose la personne ?", opts:["D'annuler la réunion","D'avancer la réunion","De décaler la réunion un peu plus tard","De faire la réunion par téléphone"], correct:2, why:"« push the meeting back to half past » = repousser la réunion à la demie." },
      { cat:"oral", audio:"I'm afraid we're fully booked tonight, but we could fit you in tomorrow at eight.", q:"Écoute : que répond le restaurant ?", opts:["Complet ce soir, mais une table est possible demain à 20 h","Une table est libre tout de suite","Le restaurant est fermé demain","Il faut rappeler plus tard"], correct:0, why:"« fully booked tonight » + « we could fit you in tomorrow at eight »." },
      { cat:"oral", audio:"Would you mind holding the line? I'll put you through to someone who can sort it out.", q:"Écoute : que va faire l'interlocuteur ?", opts:["Raccrocher","Rappeler demain","Envoyer un email","Transférer l'appel à quelqu'un qui peut régler le problème"], correct:3, why:"« I'll put you through to someone who can sort it out »." },
      { cat:"oral", audio:"What struck me most was how thought-provoking the ending was.", q:"Écoute : qu'est-ce qui a le plus marqué la personne ?", opts:["La musique","La fin, qui fait réfléchir","Le jeu des acteurs","La longueur du film"], correct:1, why:"« What struck me most was… the ending » + « thought-provoking » = qui fait réfléchir." },
      { cat:"comprehension", passage:"“Hi Sam, sorry for the short notice, but something's come up and I won't be able to make our 10 o'clock. Would it be possible to reschedule for Thursday afternoon? Let me know what works for you.”", q:"D'après le message, que demande son auteur ?", opts:["D'annuler définitivement le rendez-vous","De reprogrammer le rendez-vous à jeudi après-midi","D'avancer le rendez-vous à 10 h","D'inviter d'autres personnes"], correct:1, why:"« Would it be possible to reschedule for Thursday afternoon? »" },
      { cat:"comprehension", passage:"“I called customer service three times before I finally got through to someone. The first agent just kept apologising, so I politely asked her to escalate the issue. In the end, a manager sorted it out and offered me a full refund.”", q:"D'après le texte, comment le problème a-t-il été résolu ?", opts:["Le client a abandonné","La première personne a tout réglé","Un responsable a réglé le problème et proposé un remboursement intégral","Le produit a été réparé gratuitement"], correct:2, why:"« a manager sorted it out and offered me a full refund »." },
      { cat:"comprehension", passage:"“(rappel) I couldn't remember the English word for ‘plat du jour’, so I asked the waiter what the special dish of the day was. He smiled and said, ‘Ah, today's special!’”", q:"D'après le texte, quelle stratégie la personne a-t-elle utilisée ?", opts:["Elle a parlé français","Elle a montré le menu du doigt","Elle a renoncé à commander","Elle a paraphrasé le mot qui lui manquait"], correct:3, why:"Elle a décrit ce qu'elle cherchait au lieu de bloquer (rappel B2.10 : contourner un mot qui manque)." },
      { cat:"comprehension", passage:"“(rappel) I see your point about social media bringing people together, but I'm not entirely convinced. To some extent, it also makes us more isolated.”", q:"D'après le texte, quelle est l'attitude de la personne ?", opts:["Un désaccord diplomatique et nuancé","Un accord total","Un désaccord agressif","De l'indifférence"], correct:0, why:"« I see your point, but I'm not entirely convinced » + « to some extent » (rappel B2.6 : désaccord diplomatique, et B2.2 : nuance)." }
    ],
    PRON_VERBS: [
      {en:"Sorry, I'm running a bit late.", fr:"Désolé(e), j'ai un peu de retard."},
      {en:"I was wondering if we could push the meeting back.", fr:"Je me demandais si on pourrait repousser la réunion."},
      {en:"Would you mind holding the line?", fr:"Pourriez-vous patienter un instant ?"},
      {en:"I'd like a replacement or a full refund.", fr:"Je voudrais un échange ou un remboursement intégral."},
      {en:"I'll put you through to the manager.", fr:"Je vous passe le responsable."},
      {en:"What struck me most was the ending.", fr:"Ce qui m'a le plus frappé(e), c'est la fin."}
    ],
    READING: [
      "My day in English started at 7.45 with a message from my manager: the client meeting had been brought forward to nine.",
      "I replied straight away, warned her that I might be running a few minutes late, and jumped on my bike.",
      "During the meeting, the client asked a tricky question that none of us had prepared for, so I bought some time with ‘That's a good question — let me think.’",
      "At lunchtime, the restaurant we had chosen was fully booked, so we ended up in a small café round the corner.",
      "One of my colleagues had strict dietary requirements, and the waiter was surprisingly helpful about it.",
      "In the afternoon, I spent twenty minutes on hold before I finally got through to the airline about a mistake on my booking.",
      "The agent was polite but not very helpful, so I asked, as calmly as I could, whether she could escalate the issue.",
      "Ten minutes later, a supervisor sorted everything out and even apologised for the inconvenience.",
      "In the evening, a few friends and I watched a thought-provoking film about artificial intelligence and ended up debating it for hours.",
      "What struck me most, looking back, was that I hadn't translated a single sentence in my head all day."
    ],
    GLOSS: [
      {en:"on hold", fr:"en attente (au téléphone)"},
      {en:"round the corner", fr:"juste à côté, au coin de la rue"},
      {en:"to end up", fr:"finir par, se retrouver à"},
      {en:"a supervisor", fr:"un(e) responsable, un(e) superviseur(e)"},
      {en:"the inconvenience", fr:"le désagrément, la gêne occasionnée"}
    ],
    GRAMMAR1: {
      heading: "Changer de registre au fil de la journée : de « Can you…? » à « I was wondering if… »",
      lede: "Une journée en anglais, c'est une succession d'interlocuteurs : un ami, un collègue, un serveur, un agent du service client, un supérieur. La même demande doit changer de forme à chaque fois (rappel B2.3). Plus on veut être poli, plus on prend de la distance — et en anglais, cette distance passe par le passé et par les tournures indirectes.",
      conj: [["Message à un ami →","Can you + base ?","Can you send me the address?"],["Collègue →","Could you + base ?","Could you forward me the slides?"],["Client, inconnu, service client →","Would you mind + -ing ?","Would you mind holding the line?"],["Supérieur, demande délicate →","I was wondering if you could + base","I was wondering if we could push the meeting back."]],
      ruleHtml: "📖 Le <b>passé de politesse</b> ne parle pas du passé : il adoucit. « I <b>was wondering</b> if you could help me » ou « I <b>was hoping</b> you could… » sont plus délicats que « I wonder if… », eux-mêmes plus polis que « Can you…? ». Après <b>Would you mind</b>, toujours <b>-ing</b> : « Would you mind <b>sending</b> it again? ». Pour demander la permission : « Would you mind <b>if I</b> + passé » — « Would you mind if I <b>opened</b> the window? ».",
      dialogueLede: "En milieu d'après-midi, au téléphone avec un service client :",
      dialogue: [
        {who:"them", en:"Thank you for calling. How can I help you today?", fr:"Merci de votre appel. Que puis-je faire pour vous aujourd'hui ?"},
        {who:"you", en:"Hi, I was wondering if you could help me — the blender I ordered arrived faulty, and I'd like a replacement.", fr:"Bonjour, je me demandais si vous pourriez m'aider — le mixeur que j'ai commandé est arrivé défectueux, et je voudrais un échange."}
      ],
      whyLabel: "Le piège de « Would you mind…? »",
      whyText: "« mind » veut dire <b>être gêné(e), y voir un inconvénient</b>. La question « Would you mind waiting? » signifie donc littéralement « Est-ce que ça vous gênerait d'attendre ? ». Pour <b>accepter</b>, on répond… <b>non</b> : « <b>No, not at all</b> » ou « <b>Of course not</b> ». Répondre « Yes » (« oui, ça me gênerait ») revient à refuser ! Beaucoup de francophones répondent « Yes, of course » par réflexe : c'est compris la plupart du temps grâce au ton, mais c'est grammaticalement l'inverse de ce qu'on veut dire."
    },
    GRAMMAR2: {
      heading: "Donner son avis avec relief : les phrases clivées (What I liked most was…)",
      dialogueLede: "Le soir, dans un café, après le cinéma :",
      dialogue: [
        {who:"them", en:"So, what did you think of the film?", fr:"Alors, tu as pensé quoi du film ?"},
        {who:"you", en:"What struck me most was the soundtrack — but to be honest, the thing that bothered me was the ending. It felt rushed.", fr:"Ce qui m'a le plus frappé(e), c'est la bande-son — mais pour être honnête, ce qui m'a gêné(e), c'est la fin. Elle était bâclée."}
      ],
      ruleHtml: "💭 Une <b>phrase clivée</b> met un élément en valeur en le repoussant à la fin. Trois modèles : <b>What + sujet + verbe + is/was + élément</b> (« <b>What I loved was</b> the acting ») ; <b>The thing that + verbe + is/was + élément</b> (« <b>The thing that surprised me was</b> the plot twist ») ; <b>It was + élément + that…</b> (« <b>It was the music that</b> made the film »). Piège typique des francophones, calqué sur « ce que j'ai aimé, c'est… » : « What I liked, <b>it</b> was the music » ❌ → « What I liked <b>was</b> the music » ✅ — pas de « it » supplémentaire.",
      whyLabel: "Pourquoi les clivées sonnent B2",
      whyText: "Au niveau B1, on dit « I liked the music ». Au niveau B2, on <b>hiérarchise</b> : « <b>What I liked most was</b> the music, but <b>the thing that disappointed me was</b> the dialogue. » La phrase clivée te donne aussi une seconde de réflexion pendant que tu dis « What I liked most was… » — parfait pour un débat de société ou un avis sur un film, quand l'idée se construit en parlant (rappel B2.10 : gagner du temps sans traduire)."
    },
    REVIEW: [
      { q:"Tu ne trouves pas le mot « bibliothèque ». Tu dis :", opts:["It's a place where you can borrow books.","It's a place who you borrow books."], correct:0, fb:"« a place where + sujet + verbe » ; « who » est réservé aux personnes. (rappel B2.10)" },
      { q:"“If I ___ to choose, I'd go for the sea.”", opts:["would have","had"], correct:1, fb:"Hypothèse : « If + Past Simple, would + base ». Jamais « would » après « if ». (rappel B2.10)" },
      { q:"« That's a tricky one » sert à :", opts:["Gagner du temps face à une question difficile","Dire qu'on a déjà répondu"], correct:0, fb:"Un « chunk » qui reconnaît la difficulté et laisse le temps de réfléchir. (rappel B2.10)" },
      { q:"Dans le 10-second challenge, la priorité n°1 est :", opts:["La précision grammaticale","Communiquer, même imparfaitement"], correct:1, fb:"Communication → fluidité → précision. (rappel B2.10)" },
      { q:"Comment dit-on « je l'ai sur le bout de la langue » ?", opts:["It's on the tip of my tongue.","I have it at the end of my tongue."], correct:0, fb:"« on the tip of my tongue » : même image qu'en français. (rappel B2.10)" }
    ],
    CULTURE_NOTE: {
      icon: "🌍",
      title: "Note culturelle — une journée, deux pays",
      html: "Une même journée ne se vit pas tout à fait pareil à Londres et à New York. Au restaurant, on demande « <b>the bill</b> » au Royaume-Uni et « <b>the check</b> » aux États-Unis ; et surtout, le <b>pourboire</b> américain (15 à 20 %) est quasi obligatoire, alors qu'au Royaume-Uni le service est souvent déjà ajouté (« <b>a discretionary service charge</b> », que l'on peut en théorie refuser). Au quotidien, un Britannique vous salue souvent d'un « <b>You alright?</b> » : ce n'est pas une inquiétude pour votre santé, juste un « salut, ça va ? » qui attend un simple « Yeah, good, you? ». Et « <b>Cheers</b> » sert autant à trinquer qu'à dire merci ou au revoir. Aux États-Unis, le service client est en général plus démonstratif (« <b>I'd be happy to help!</b> »), au Royaume-Uni plus sobre, mais tout aussi efficace si l'on reste calme et poli."
    },
    NEXT_PREVIEW: "B2.12 (B2 Real World) : le défi final du niveau B2 — faire face à une situation totalement inconnue, de bout en bout : comprendre, réfléchir, répondre, interagir, reformuler, s'adapter et conclure, sans traduction ni phrase préparée.",
    META: { vocabTitle: "Une journée en anglais (B2.11)", lectureTitle: "Du réveil au cinéma", bilanTitle: "Bravo, tu as traversé une journée entière en anglais, situation après situation !", pronLabel: "Demandes polies (I was wondering if…, Would you mind + -ing) et phrases clivées", todayLede: "enchaîner les situations d'une vraie journée — message, réunion, restaurant, appel au service client, débat et avis sur un film — en adaptant ton registre à chaque fois — s'appuie sur B2.10 (Thinking in English) et B2.3 (Register Master)" }
  };

  // B2.12 — B2 Real World — mission de fin de niveau B2, s'appuie sur B2.11 (One Day in English) et mobilise tout le B2
  LESSONS_EXT[51] = {
    code: "B2.12", level: "B2",
    VOCAB: [
      {block:"Comprendre et clarifier", en:"Just to make sure I've understood…", ipa:"/dʒʌst tə meɪk ʃɔːr aɪv ˌʌndəˈstʊd/", fr:"Juste pour être sûr(e) d'avoir bien compris…", note:"Introduit une reformulation de ce que l'autre vient de dire : réflexe n°1 face à une situation inconnue."},
      {block:"Comprendre et clarifier", en:"Could you run that by me again?", ipa:"/kʊd juː rʌn ðæt baɪ miː əˈɡen/", fr:"Tu pourrais me réexpliquer ça ?", note:"Plus naturel et moins scolaire que « Can you repeat, please? »."},
      {block:"Comprendre et clarifier", en:"What exactly do you mean by…?", ipa:"/wɒt ɪɡˈzæktli duː juː miːn baɪ/", fr:"Qu'entends-tu exactement par… ?", note:"Demande de précision ciblée sur un mot ou une idée précise, sans tout faire répéter."},
      {block:"Comprendre et clarifier", en:"If I've got this right…", ipa:"/ɪf aɪv ɡɒt ðɪs raɪt/", fr:"Si j'ai bien compris…", note:"Très courant à l'oral britannique ; « If I understand correctly… » est plus neutre."},
      {block:"Comprendre et clarifier", en:"I didn't quite catch that.", ipa:"/aɪ ˈdɪdnt kwaɪt kætʃ ðæt/", fr:"Je n'ai pas bien saisi.", note:"« catch » = saisir, entendre. « quite » adoucit : tu as compris une partie, pas tout."},
      {block:"Réagir et proposer une solution", en:"What if we…?", ipa:"/wɒt ɪf wiː/", fr:"Et si on… ?", note:"Avec le Past Simple, la suggestion est plus prudente : « What if we took the train? » ; au présent, elle est plus directe."},
      {block:"Réagir et proposer une solution", en:"It might be worth + -ing", ipa:"/ɪt maɪt biː wɜːθ/", fr:"Ça vaudrait peut-être la peine de…", note:"Suggestion diplomatique, toujours suivie de -ing : « It might be worth calling them first. »"},
      {block:"Réagir et proposer une solution", en:"We'd better…", ipa:"/wiːd ˈbetə/", fr:"On ferait mieux de…", note:"« had better » + base verbale SANS « to » : « We'd better leave now. » Plus pressant que « should »."},
      {block:"Réagir et proposer une solution", en:"Otherwise", ipa:"/ˈʌðəwaɪz/", fr:"Sinon, autrement", note:"« We'd better hurry, otherwise we'll miss the last train. »"},
      {block:"Réagir et proposer une solution", en:"A workaround", ipa:"/ə ˈwɜːkəraʊnd/", fr:"Une solution de contournement", note:"Solution provisoire qui évite le problème sans le résoudre — très fréquent au travail."},
      {block:"Réagir et proposer une solution", en:"A fallback option", ipa:"/ə ˈfɔːlbæk ˈɒpʃn/", fr:"Une solution de repli, un plan B", note:"« to fall back on something » = se rabattre sur quelque chose."},
      {block:"S'adapter en cours de route", en:"Let me put it another way.", ipa:"/let miː pʊt ɪt əˈnʌðə weɪ/", fr:"Je vais le dire autrement.", note:"Quand l'autre ne comprend pas : on change de mots, pas de langue — et on ne répète pas plus fort !"},
      {block:"S'adapter en cours de route", en:"In other words", ipa:"/ɪn ˈʌðə wɜːdz/", fr:"Autrement dit", note:"Reformule plus simplement ce qu'on vient de dire ou ce que l'autre a dit."},
      {block:"S'adapter en cours de route", en:"Bear with me.", ipa:"/beə wɪð miː/", fr:"Un instant, s'il vous plaît / Soyez indulgent(e).", note:"« bear » = supporter. Poli et très utile quand on cherche une information… ou un mot."},
      {block:"S'adapter en cours de route", en:"To play it by ear", ipa:"/tə pleɪ ɪt baɪ ˈɪə/", fr:"Improviser, voir sur le moment", note:"« Let's play it by ear » = on verra selon comment ça évolue. (« to learn by heart » = apprendre par cœur.)"},
      {block:"S'adapter en cours de route", en:"Bearing in mind (that)…", ipa:"/ˈbeərɪŋ ɪn maɪnd/", fr:"Compte tenu de…, sachant que…", note:"« Bearing in mind the time, we should decide now. » Registre soigné."},
      {block:"S'adapter en cours de route", en:"To adapt to", ipa:"/tə əˈdæpt tuː/", fr:"S'adapter à", note:"« to adapt TO a situation ». « adaptability » est l'une des 6 dimensions du diagnostic B2."},
      {block:"Conclure et faire le bilan", en:"To sum up", ipa:"/tə sʌm ˈʌp/", fr:"Pour résumer", note:"« So, to sum up… » signale clairement que tu conclus."},
      {block:"Conclure et faire le bilan", en:"All things considered", ipa:"/ɔːl θɪŋz kənˈsɪdəd/", fr:"Tout bien considéré", note:"Conclusion nuancée, après avoir pesé le pour et le contre (rappel B2.1)."},
      {block:"Conclure et faire le bilan", en:"The bottom line is…", ipa:"/ðə ˈbɒtəm laɪn ɪz/", fr:"L'essentiel, c'est que…", note:"Va droit au point clé ; un peu familier, très courant en entreprise."},
      {block:"Conclure et faire le bilan", en:"Going forward", ipa:"/ˈɡəʊɪŋ ˈfɔːwəd/", fr:"À l'avenir, désormais", note:"Jargon professionnel : « Going forward, let's double-check the dates. »"},
      {block:"Conclure et faire le bilan", en:"To wrap up", ipa:"/tə ræp ˈʌp/", fr:"Conclure, terminer", note:"« Let's wrap up » = terminons ; attention, « to wrap up warm » = bien se couvrir."},
      {block:"Verbes clés (B2.12)", en:"To cope with", ipa:"/tə kəʊp wɪð/", fr:"Faire face à, tenir le coup", note:"« How did you cope with the stress? » Insiste sur la difficulté à surmonter."},
      {block:"Verbes clés (B2.12)", en:"To deal with", ipa:"/tə diːl wɪð/", fr:"S'occuper de, gérer", note:"Passé irrégulier : « dealt » /delt/. « I'll deal with it » = je m'en occupe."},
      {block:"Verbes clés (B2.12)", en:"To work out", ipa:"/tə wɜːk ˈaʊt/", fr:"Trouver (une solution) ; bien finir", note:"« We'll work something out » = on va trouver une solution ; « it worked out » = ça s'est arrangé."},
      {block:"Verbes clés (B2.12)", en:"To clarify", ipa:"/tə ˈklærəfaɪ/", fr:"Clarifier, préciser", note:"« Could you clarify what you mean? » — plus soutenu que « explain »."},
      {block:"Verbes clés (B2.12)", en:"To reassure", ipa:"/tə ˌriːəˈʃɔː/", fr:"Rassurer", note:"« reassure someone » sans préposition ; « reassuring » = rassurant."}
    ],
    MEM_WORDS: [1,6,11,13,18,24],
    MINI_CHECKS: [
      { q:"“We'd better ___ a hotel before they're all full.”", opts:["to find","find","finding"], correct:1, fb:"« had better » est suivi de la base verbale, sans « to » : « We'd better find… »." },
      { q:"“It might be worth ___ the other airline.”", opts:["to call","call","calling"], correct:2, fb:"« It's worth / It might be worth » est toujours suivi de -ing." },
      { q:"“If I ___ the forecast, I wouldn't be stuck here now.” — erreur passée, conséquence présente.", opts:["had checked","checked","would check"], correct:0, fb:"Conditionnel mixte : « If + Past Perfect, would + base » — une condition passée, une conséquence maintenant." },
      { q:"Ton interlocuteur ne comprend pas ta phrase. Quel est le meilleur réflexe B2 ?", opts:["Répéter la même phrase plus fort","Dire « Let me put it another way » puis reformuler","Passer au français"], correct:1, fb:"On change de mots, pas de langue ni de volume : c'est la reformulation (rephrase → adapt)." }
    ],
    ROUNDS: [
      { bank:["again","me","by","that","run","you","Could","?"], answer:"could you run that by me again ?", display:"Could you run that by me again?", fr:"Tu pourrais me réexpliquer ça ?" },
      { bank:["desk","other","the","at","asking","worth","be","might","It","."], answer:"it might be worth asking at the other desk .", display:"It might be worth asking at the other desk.", fr:"Ça vaudrait peut-être la peine de demander à l'autre guichet." },
      { bank:["hotel","a","find","better","We'd","."], answer:"we'd better find a hotel .", display:"We'd better find a hotel.", fr:"On ferait mieux de trouver un hôtel." },
      { bank:["way","another","it","put","me","Let","."], answer:"let me put it another way .", display:"Let me put it another way.", fr:"Je vais le dire autrement." },
      { bank:["tomorrow","train","first","the","took","we","if","What","?"], answer:"what if we took the first train tomorrow ?", display:"What if we took the first train tomorrow?", fr:"Et si on prenait le premier train demain ?" },
      { bank:["moment","a","for","me","with","Bear","."], answer:"bear with me for a moment .", display:"Bear with me for a moment.", fr:"Un petit instant, s'il vous plaît." },
      { bank:["here","stuck","be","wouldn't","I","forecast","the","checked","I'd","If","."], answer:"if i'd checked the forecast i wouldn't be stuck here .", display:"If I'd checked the forecast, I wouldn't be stuck here.", fr:"Si j'avais regardé la météo, je ne serais pas coincé(e) ici." },
      { bank:["well","out","worked","it","considered","things","All","."], answer:"all things considered it worked out well .", display:"All things considered, it worked out well.", fr:"Tout bien considéré, ça s'est bien terminé." },
      { bank:["cancelled","flight's","the","understood","I've","sure","make","to","Just","?"], answer:"just to make sure i've understood the flight's cancelled ?", display:"Just to make sure I've understood, the flight's cancelled?", fr:"Juste pour être sûr(e) d'avoir compris : le vol est annulé ?" },
      { bank:["out","something","work","We'll","."], answer:"we'll work something out .", display:"We'll work something out.", fr:"On va trouver une solution." }
    ],
    QUIZ: [
      { cat:"ecrit", q:"“We'd better ___ now, otherwise we'll miss the last bus.”", opts:["to leave","leaving","leave"], correct:2, why:"« had better + base verbale » sans « to »." },
      { cat:"ecrit", q:"“It might be worth ___ the hotel before we go.”", opts:["calling","to call","call"], correct:0, why:"« worth + -ing » : « It might be worth calling… »." },
      { cat:"ecrit", q:"“If I had left earlier, I ___ here on time now.”", opts:["would have been","would be","will be"], correct:1, why:"Conditionnel mixte : condition passée (« had left ») + conséquence présente (« now ») → « would be »." },
      { cat:"ecrit", q:"Dans « What if we took a taxi? », pourquoi « took » est-il au passé ?", opts:["Parce que l'action a déjà eu lieu","Parce que le passé rend la suggestion plus prudente, plus hypothétique","C'est une erreur, il faut « take »"], correct:1, why:"Comme dans « I was wondering if… », le passé crée une distance : la suggestion paraît moins imposée. « What if we take…? » existe aussi, mais sonne plus direct." },
      { cat:"ecrit", q:"Comment dit-on « on verra sur le moment, on improvisera » ?", opts:["Let's play it by heart.","Let's play with the ear.","Let's play it by ear."], correct:2, why:"« to play it by ear » = improviser selon la situation (à l'origine : jouer de la musique à l'oreille, sans partition)." },
      { cat:"ecrit", q:"« Bear with me » signifie :", opts:["Un instant, soyez patient(e) avec moi","Viens avec moi","Sois fort(e) comme un ours"], correct:0, why:"« bear » (verbe) = supporter, endurer. Rien à voir avec l'ours (« a bear »), homonyme." },
      { cat:"ecrit", q:"Quelle formule annonce clairement une conclusion ?", opts:["By the way…","So, to sum up…","Off the top of my head…"], correct:1, why:"« to sum up » = pour résumer. « By the way » ouvre une digression ; « off the top of my head » introduit une réponse spontanée." },
      { cat:"ecrit", q:"« A fallback option » est :", opts:["Une option obligatoire","Une option annulée","Une solution de repli"], correct:2, why:"« fallback » = repli : c'est le plan B." },
      { cat:"ecrit", q:"“Sorry, I didn't quite ___ that. Could you say it again?”", opts:["catch","take","hold"], correct:0, why:"« I didn't catch that » = je n'ai pas saisi (entendu/compris)." },
      { cat:"ecrit", q:"Un agent refuse de t'aider. Quelle réponse est la plus efficace (registre et diplomatie) ?", opts:["You're useless, I want your boss.","I appreciate it's not your decision, but would it be possible to speak to a supervisor?","Give me a manager now."], correct:1, why:"On reconnaît la position de l'autre, puis on formule une demande polie et indirecte (rappels B2.3 et B2.6)." },
      { cat:"oral", audio:"I'm afraid all flights are grounded until tomorrow morning because of the fog.", q:"Écoute : que se passe-t-il ?", opts:["Les vols partent en avance","Tous les vols sont cloués au sol jusqu'à demain matin à cause du brouillard","Seul ton vol a une heure de retard","L'aéroport est fermé pour cause de grève"], correct:1, why:"« all flights are grounded until tomorrow morning because of the fog »." },
      { cat:"oral", audio:"Just to make sure I've understood, you're saying the hotel voucher only covers one night?", q:"Écoute : que fait la personne ?", opts:["Elle se plaint de l'hôtel","Elle refuse le bon d'hôtel","Elle vérifie qu'elle a bien compris : le bon ne couvre qu'une nuit","Elle réserve une deuxième nuit"], correct:2, why:"« Just to make sure I've understood… » = elle reformule pour vérifier sa compréhension." },
      { cat:"oral", audio:"Let me put it another way: we don't need a refund, we just need to get to Edinburgh by Monday.", q:"Écoute : quel est le vrai besoin de la personne ?", opts:["Être à Édimbourg lundi","Être remboursée","Rester à l'hôtel","Changer de compagnie aérienne"], correct:0, why:"« we don't need a refund, we just need to get to Edinburgh by Monday »." },
      { cat:"oral", audio:"All things considered, it worked out better than we expected.", q:"Écoute : quel est le bilan ?", opts:["Catastrophique","Moins bien que prévu","On ne le sait pas encore","Mieux que prévu, tout bien considéré"], correct:3, why:"« it worked out better than we expected » = ça s'est mieux terminé que prévu." },
      { cat:"comprehension", passage:"“When the train stopped in the middle of nowhere, nobody explained anything. After twenty minutes, I asked the guard, as politely as I could, what was going on. He said there was a signal failure and suggested we might be better off getting a coach from the next station.”", q:"D'après le texte, que suggère le contrôleur ?", opts:["D'attendre la réparation dans le train","Qu'il vaudrait mieux prendre un car à la gare suivante","De rentrer à pied","De demander un remboursement"], correct:1, why:"« we might be better off getting a coach from the next station »." },
      { cat:"comprehension", passage:"“The client clearly hadn't read our proposal, so instead of repeating it, I tried a different approach: I summed it up in three sentences and asked what mattered most to them. That changed the whole tone of the meeting.”", q:"D'après le texte, quelle compétence la personne a-t-elle montrée ?", opts:["Elle a répété sa proposition mot pour mot","Elle a quitté la réunion","Elle s'est adaptée en résumant et en posant une question","Elle a reproché au client de ne pas avoir lu"], correct:2, why:"« instead of repeating it, I tried a different approach: I summed it up… and asked… » = rephrase → adapt → interact." },
      { cat:"comprehension", passage:"“(rappel) After six hours stuck at the airport, my friend looked at the departures board, sighed, and said: ‘Well, this is going brilliantly.’”", q:"D'après le texte, que veut réellement dire l'ami ?", opts:["Que tout se passe très bien","Qu'il adore les aéroports","Que le tableau des départs est bien conçu","Il est ironique : la situation est pénible"], correct:3, why:"Sens littéral ≠ sens réel : après six heures bloqué et un soupir, « brilliantly » est ironique (rappel B2.7)." },
      { cat:"comprehension", passage:"“(rappel) We had to make a quick decision, so we took into account the cost, the time and the risk. In the end, we took responsibility for rebooking everyone ourselves.”", q:"D'après le texte, qu'ont fait les personnes au final ?", opts:["Elles ont elles-mêmes pris en charge la nouvelle réservation de tout le monde","Elles ont attendu qu'on les aide","Elles ont annulé le voyage","Elles ont porté plainte"], correct:0, why:"« we took responsibility for rebooking everyone ourselves » (rappel B2.4 : collocations make a decision, take into account, take responsibility)." }
    ],
    PRON_VERBS: [
      {en:"Just to make sure I've understood, the flight's cancelled?", fr:"Juste pour être sûr(e) d'avoir compris : le vol est annulé ?"},
      {en:"Could you run that by me again?", fr:"Vous pourriez me réexpliquer ça ?"},
      {en:"It might be worth asking at the other desk.", fr:"Ça vaudrait peut-être la peine de demander à l'autre guichet."},
      {en:"Let me put it another way.", fr:"Je vais le dire autrement."},
      {en:"We'd better find a hotel, otherwise we'll sleep here.", fr:"On ferait mieux de trouver un hôtel, sinon on dormira ici."},
      {en:"All things considered, it worked out well.", fr:"Tout bien considéré, ça s'est bien terminé."}
    ],
    READING: [
      "I was supposed to change planes in Amsterdam and be home by midnight, but the evening had other plans.",
      "As we landed, the announcement came: every departure had been cancelled because of thick fog.",
      "At the transfer desk, the queue was enormous, and the agent looked as exhausted as we felt.",
      "When it was my turn, I checked that I had understood correctly, then calmly asked what my options were.",
      "She offered me a flight two days later, so I explained, as diplomatically as I could, that I had an important meeting on Monday.",
      "‘What if you put me on the first train to Brussels, and I fly home from there?’ I suggested.",
      "She hesitated, made a phone call, and eventually agreed that it might be worth trying.",
      "Behind me, an elderly man who spoke hardly any English was clearly lost, so I helped him explain his situation too.",
      "Just in case, I also emailed my manager to ask whether we could push Monday's meeting back by a couple of hours.",
      "All things considered, it was a long night, but I dealt with every problem in English without translating a single word in my head."
    ],
    GLOSS: [
      {en:"to be supposed to", fr:"être censé(e)"},
      {en:"a transfer desk", fr:"un guichet des correspondances"},
      {en:"a queue", fr:"une file d'attente (US : a line)"},
      {en:"elderly", fr:"âgé(e)"},
      {en:"hardly any", fr:"presque pas de"},
      {en:"just in case", fr:"au cas où"}
    ],
    GRAMMAR1: {
      heading: "La boucle B2 face à l'inconnu : understand → think → respond → interact → rephrase → adapt → conclude",
      lede: "Ce dernier palier ne t'apprend pas de nouveaux temps : il te demande de tout mobiliser, sans filet. Face à une situation imprévue, les anglophones compétents suivent presque toujours la même boucle. Voici les formules d'appui pour ses grandes étapes — à connaître par cœur, pour que ton cerveau reste libre de penser au fond.",
      conj: [["Comprendre, clarifier →","Just to make sure I've understood, + reformulation","Just to make sure I've understood, the flight's been cancelled?"],["Répondre, proposer →","What if we + passé / It might be worth + -ing","It might be worth asking at the other desk."],["Reformuler, s'adapter →","Let me put it another way / In other words","In other words, we just need a room for tonight."],["Conclure →","So, to sum up / All things considered","So, to sum up, we'll take the first train tomorrow."]],
      ruleHtml: "📖 <b>Understand</b> : ne réponds jamais à ce que tu crois avoir compris — vérifie (« If I've got this right… »). <b>Think</b> : gagne du temps en anglais (« Bear with me », rappel B2.10). <b>Respond</b> : une idée claire, nuancée (rappel B2.2). <b>Interact</b> : pose une question en retour, montre que tu écoutes. <b>Rephrase</b> : si ça coince, change de mots (« Let me put it another way »). <b>Adapt</b> : ajuste ton registre à l'interlocuteur (rappel B2.3) et ton ton à la tension du moment (rappel B2.6). <b>Conclude</b> : récapitule ce qui a été décidé (« So, to sum up… »).",
      dialogueLede: "À l'aéroport, 23 h : ton vol de correspondance vient d'être annulé.",
      dialogue: [
        {who:"them", en:"I'm afraid all flights are grounded until tomorrow morning because of the fog.", fr:"Je suis désolée, tous les vols sont cloués au sol jusqu'à demain matin à cause du brouillard."},
        {who:"you", en:"Just to make sure I've understood — there's nothing at all tonight? In that case, it might be worth booking me on the first flight and sorting out a hotel.", fr:"Juste pour être sûr(e) d'avoir compris — il n'y a vraiment plus rien ce soir ? Dans ce cas, ça vaudrait peut-être la peine de me réserver sur le premier vol et de régler la question de l'hôtel."}
      ],
      whyLabel: "Les 6 dimensions du diagnostic B2",
      whyText: "Le grand contrôle B2 ne note pas seulement tes bonnes réponses. Il observe six dimensions : <b>accuracy</b> (la justesse de ta grammaire et de ton vocabulaire), <b>fluency</b> (parler sans blocages ni longs silences), <b>range</b> (la variété de tes structures et de tes mots), <b>interaction</b> (réagir, relancer, poser des questions), <b>naturalness</b> (les « chunks », les collocations, le bon registre) et <b>adaptability</b> (reformuler et changer de stratégie quand la situation change). Un bon niveau B2 ne veut pas dire zéro faute : il veut dire que tu restes <b>efficace</b> et à l'aise, même quand rien ne se passe comme prévu."
    },
    GRAMMAR2: {
      heading: "Proposer une solution sous pression, et tirer la leçon : had better, worth + -ing, conditionnel mixte",
      dialogueLede: "Toujours à l'aéroport, avec un autre voyageur bloqué :",
      dialogue: [
        {who:"them", en:"What a nightmare. What on earth do we do now?", fr:"Quel cauchemar. Qu'est-ce qu'on peut bien faire maintenant ?"},
        {who:"you", en:"We'd better find a hotel before they're all full. And if I'd checked the forecast, we wouldn't be stuck here now!", fr:"On ferait mieux de trouver un hôtel avant qu'ils soient tous complets. Et si j'avais regardé la météo, on ne serait pas coincés ici maintenant !"}
      ],
      ruleHtml: "💭 Trois façons de proposer, de la plus douce à la plus pressante : <b>What if we + passé ?</b> (« What if we <b>shared</b> a taxi? ») → <b>It might be worth + -ing</b> (« It might be worth <b>asking</b> again ») → <b>We'd better + base</b> (« We'd better <b>hurry</b>, <b>otherwise</b>… »). Pour tirer la leçon d'une erreur passée qui a des conséquences <b>maintenant</b>, le <b>conditionnel mixte</b> : <b>If + Past Perfect, would + base</b> — « If I <b>had checked</b> the forecast, I <b>wouldn't be</b> stuck here <b>now</b>. » Ne le confonds pas avec le « third conditional », où la conséquence reste dans le passé : « …, I <b>wouldn't have missed</b> my flight. »",
      whyLabel: "Piège : « had better » ≠ « avoir mieux »",
      whyText: "« We'<b>d</b> better » est la contraction de « we <b>had</b> better », mais il parle du <b>présent ou du futur immédiat</b>, jamais du passé. Deux erreurs très fréquentes : ajouter « to » (« We'd better <b>to</b> go » ❌) et le confondre avec « would » (« We would better » ❌). Retiens aussi la nuance : « had better » sous-entend souvent un risque si on ne le fait pas — d'où le « <b>otherwise</b>… » qui l'accompagne si souvent. Avec un supérieur ou un client, préfère la version douce : « It might be worth… »."
    },
    REVIEW: [
      { q:"“Would you mind ___ the window?”", opts:["opening","to open"], correct:0, fb:"« Would you mind + -ing ». (rappel B2.11)" },
      { q:"On te demande : « Would you mind if I sat here? ». Tu acceptes :", opts:["Yes, I mind.","No, not at all, go ahead."], correct:1, fb:"« mind » = être gêné(e) : pour accepter, on répond non. (rappel B2.11)" },
      { q:"Comment dit-on « repousser une réunion » ?", opts:["To push a meeting back","To advance a meeting"], correct:0, fb:"« push back » = repousser ; « bring forward » = avancer. (rappel B2.11)" },
      { q:"“___ struck me most was the ending.”", opts:["It","What"], correct:1, fb:"Phrase clivée : « What struck me most was… ». (rappel B2.11)" },
      { q:"Au téléphone : « je vous passe le service commercial ».", opts:["I'll put you through to the sales department.","I'll pass you the sales department."], correct:0, fb:"« to put someone through to… » = passer quelqu'un au téléphone. (rappel B2.11)" }
    ],
    CULTURE_NOTE: {
      icon: "🧭",
      title: "Note culturelle — garder son calme dans l'imprévu",
      html: "Face à un vol annulé ou un train bloqué, les réactions ne sont pas les mêmes partout. Au Royaume-Uni, on garde souvent un ton <b>posé</b>, avec beaucoup d'<b>understatement</b> (rappel B2.7) : « It's a bit of a nuisance » pour une nuit entière perdue à l'aéroport. Hausser le ton y est très mal perçu et, en pratique, rarement efficace. La stratégie qui marche le mieux, des deux côtés de l'Atlantique : <b>reconnaître que l'agent n'y est pour rien</b> (« I appreciate it's not your fault »), puis formuler <b>une demande précise</b> (« Could you rebook me on the first train? »). Aux États-Unis, on ajoute volontiers une touche de chaleur (« I really appreciate your help ») ; au Royaume-Uni, une pointe d'humour partagé (« Well, it's certainly been an adventure! ») détend presque toujours l'atmosphère. Et, dans les deux pays, on respecte scrupuleusement <b>la file d'attente</b>."
    },
    NEXT_PREVIEW: "Tu as terminé les 12 paliers du niveau B2 de The Roots ! Le grand contrôle B2 arrive bientôt — en attendant, reviens réviser tes paliers passés, ils restent ouverts.",
    META: { vocabTitle: "Le monde réel (B2.12)", lectureTitle: "Une nuit imprévue", bilanTitle: "Bravo, tu as terminé le niveau B2 : tu sais faire face à l'imprévu en anglais, de bout en bout !", pronLabel: "Clarifier, proposer (What if…, It might be worth + -ing, had better) et conditionnel mixte", todayLede: "affronter une situation totalement imprévue du début à la fin — comprendre, clarifier, proposer, reformuler, t'adapter et conclure — la mission de fin de niveau qui mobilise tout le B2, dans la suite de B2.11 (One Day in English)" }
  };
})(window.LESSONS_EXT);
