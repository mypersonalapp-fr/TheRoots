// The Roots — leçon jouable A2.12 « Imprévus en voyage » (leçon 25, anglais britannique).
// Fichier de DONNÉES chargé par lessons.html (balise <script src>), même format que lessons-b1.js :
// window.LESSONS_EXT[25] = {…}. C'est le dernier palier thématique du niveau A2 : il s'appuie sur
// A1.4 (transports, directions), A1.8 (se déplacer), A1.9 (voyager), et il remobilise les temps et
// modaux déjà vus dans A2 (past simple, past continuous, going to / will, should / have to,
// discours rapporté « said that… would », « would like to / shall we »). Seule notion NOUVELLE :
// « What if…? » (envisager un imprévu). Le Contrôle A2 et le Grand Contrôle suivent ensuite.
window.LESSONS_EXT = window.LESSONS_EXT || {};
(function (LESSONS_EXT) {
  LESSONS_EXT[25] = {
    code: "A2.12", level: "A2",

    VOCAB: [
      // --- À l'aéroport (0-9)
      {block:"À l'aéroport", en:"Check-in desk", ipa:"/ˈtʃek ɪn desk/", fr:"Comptoir d'enregistrement", note:"C'est là qu'on dépose sa valise et qu'on reçoit sa carte d'embarquement (boarding pass)."},
      {block:"À l'aéroport", en:"Departures board", ipa:"/dɪˈpɑːtʃəz bɔːd/", fr:"Panneau des départs", note:"L'écran qui indique les vols, les horaires et les portes. Regarde-le souvent : une porte peut changer."},
      {block:"À l'aéroport", en:"Gate", ipa:"/ɡeɪt/", fr:"Porte d'embarquement", note:"« Please go to gate fourteen. » = rendez-vous à la porte 14."},
      {block:"À l'aéroport", en:"Delayed", ipa:"/dɪˈleɪd/", fr:"Retardé(e)", note:"« The flight is delayed by two hours » = le vol a deux heures de retard."},
      {block:"À l'aéroport", en:"Cancelled", ipa:"/ˈkænsəld/", fr:"Annulé(e)", note:"Britannique : deux « l ». « Our flight is cancelled » = notre vol est annulé."},
      {block:"À l'aéroport", en:"Connecting flight", ipa:"/kəˈnektɪŋ flaɪt/", fr:"Vol de correspondance", note:"Le deuxième vol d'un voyage avec escale. « I have a connecting flight in Paris. »"},
      {block:"À l'aéroport", en:"Luggage", ipa:"/ˈlʌɡɪdʒ/", fr:"Bagages", note:"Indénombrable : jamais de -s ni de « a ». « My luggage is heavy. » Une valise = a suitcase."},
      {block:"À l'aéroport", en:"Baggage reclaim", ipa:"/ˈbæɡɪdʒ riːˈkleɪm/", fr:"Zone de récupération des bagages", note:"Le tapis roulant où l'on récupère sa valise à l'arrivée (« belt » = le tapis)."},
      {block:"À l'aéroport", en:"Customs", ipa:"/ˈkʌstəmz/", fr:"La douane", note:"Toujours pluriel : « We go through customs. » Pas de « a » devant."},
      {block:"À l'aéroport", en:"Miss the flight", ipa:"/mɪs ðə flaɪt/", fr:"Rater le vol", note:"« miss » = rater (un vol, un train, un bus). Passé : missed."},
      // --- Objets perdus (10-18)
      {block:"Objets perdus", en:"Lost property office", ipa:"/lɒst ˈprɒpəti ˈɒfɪs/", fr:"Bureau des objets trouvés", note:"Britannique. Aux États-Unis : « lost and found ». « Property » ne prend pas de -s ici."},
      {block:"Objets perdus", en:"Missing", ipa:"/ˈmɪsɪŋ/", fr:"Manquant(e), disparu(e)", note:"« My suitcase is missing » = ma valise n'est pas arrivée / a disparu."},
      {block:"Objets perdus", en:"Stolen", ipa:"/ˈstəʊlən/", fr:"Volé(e)", note:"« My phone was stolen » = on m'a volé mon téléphone. Verbe : steal, stole, stolen."},
      {block:"Objets perdus", en:"Wallet", ipa:"/ˈwɒlɪt/", fr:"Portefeuille", note:"Pour les billets et les cartes. Le porte-monnaie se dit « purse » en anglais britannique."},
      {block:"Objets perdus", en:"Passport", ipa:"/ˈpɑːspɔːt/", fr:"Passeport", note:"« I left my passport at the hotel. » (left = passé de leave)"},
      {block:"Objets perdus", en:"Label", ipa:"/ˈleɪbəl/", fr:"Étiquette", note:"« It has a red label » = elle a une étiquette rouge. Utile pour décrire une valise."},
      {block:"Objets perdus", en:"Fill in a form", ipa:"/fɪl ɪn ə fɔːm/", fr:"Remplir un formulaire", note:"« You have to fill in a form » = vous devez remplir un formulaire. Américain : fill out."},
      {block:"Objets perdus", en:"Describe", ipa:"/dɪˈskraɪb/", fr:"Décrire", note:"« Can you describe your bag? » — couleur, taille, marque, signe particulier."},
      {block:"Objets perdus", en:"Reference number", ipa:"/ˈrefrəns ˈnʌmbə/", fr:"Numéro de dossier", note:"On te le donne pour suivre ta demande : « Keep your reference number. »"},
      // --- Urgences (19-26)
      {block:"Urgences", en:"Emergency", ipa:"/ɪˈmɜːdʒənsi/", fr:"Urgence", note:"« It's an emergency! » = c'est une urgence ! Numéro d'urgence au Royaume-Uni : 999."},
      {block:"Urgences", en:"Ambulance", ipa:"/ˈæmbjələns/", fr:"Ambulance", note:"« Call an ambulance, please! » = appelez une ambulance, s'il vous plaît !"},
      {block:"Urgences", en:"Hospital", ipa:"/ˈhɒspɪtəl/", fr:"Hôpital", note:"Au Royaume-Uni, le service des urgences s'appelle « A&E » (Accident and Emergency)."},
      {block:"Urgences", en:"Pharmacy", ipa:"/ˈfɑːməsi/", fr:"Pharmacie", note:"Au Royaume-Uni on dit aussi « chemist's »."},
      {block:"Urgences", en:"Police station", ipa:"/pəˈliːs ˈsteɪʃən/", fr:"Commissariat", note:"Pour déclarer un vol : « I'd like to report a theft. »"},
      {block:"Urgences", en:"I feel sick", ipa:"/aɪ fiːl sɪk/", fr:"Je me sens mal / j'ai envie de vomir", note:"Britannique : « sick » = envie de vomir. « ill » = malade en général."},
      {block:"Urgences", en:"Insurance", ipa:"/ɪnˈʃɔːrəns/", fr:"Assurance", note:"« Do you have travel insurance? » = as-tu une assurance voyage ?"},
      {block:"Urgences", en:"Help!", ipa:"/help/", fr:"Au secours !", note:"À crier en cas de danger réel. Pour une demande polie, on dit « Could you help me? »."},
      // --- Demander de l'aide (27-33)
      {block:"Demander de l'aide", en:"Could you help me, please?", ipa:"/kʊd juː help miː pliːz/", fr:"Pourriez-vous m'aider, s'il vous plaît ?", note:"La formule polie de base. Plus poli que « Can you help me? »."},
      {block:"Demander de l'aide", en:"Excuse me, I need some help.", ipa:"/ɪkˈskjuːs miː aɪ niːd səm help/", fr:"Excusez-moi, j'ai besoin d'aide.", note:"« Excuse me » attire l'attention poliment avant de poser la question."},
      {block:"Demander de l'aide", en:"Could you show me the way to...?", ipa:"/kʊd juː ʃəʊ miː ðə weɪ tuː/", fr:"Pourriez-vous m'indiquer le chemin vers... ?", note:"Réemploi de A1.4. « Could you show me the way to gate twelve, please? »"},
      {block:"Demander de l'aide", en:"What should I do?", ipa:"/wɒt ʃʊd aɪ duː/", fr:"Que dois-je faire ?", note:"« should » pour demander un conseil. Réponse possible : « You should go to the information desk. »"},
      {block:"Demander de l'aide", en:"Does anyone speak French?", ipa:"/dʌz ˈeniwʌn spiːk frentʃ/", fr:"Quelqu'un parle-t-il français ?", note:"Pratique quand tu n'arrives plus à te faire comprendre. Après « anyone », le verbe prend un -s."},
      {block:"Demander de l'aide", en:"Could you call a taxi for me?", ipa:"/kʊd juː kɔːl ə ˈtæksi fə miː/", fr:"Pourriez-vous m'appeler un taxi ?", note:"« for me » = pour moi. Même structure : « Could you call the airline for me? »"},
      {block:"Demander de l'aide", en:"Thank you so much for your help.", ipa:"/θæŋk juː səʊ mʌtʃ fə jɔː help/", fr:"Merci beaucoup pour votre aide.", note:"« so much » renforce le remerciement. Réponse : « You're welcome. »"},
      // --- What if... (34-39)
      {block:"What if... ? (imprévus)", en:"What if we miss the flight?", ipa:"/wɒt ɪf wiː mɪs ðə flaɪt/", fr:"Et si on rate le vol ?", note:"« What if » + présent simple pour envisager un problème possible. Pas de « will » après « if »."},
      {block:"What if... ? (imprévus)", en:"What if it is cancelled?", ipa:"/wɒt ɪf ɪt ɪz ˈkænsəld/", fr:"Et si c'est annulé ?", note:"Même structure : What if + sujet + présent."},
      {block:"What if... ? (imprévus)", en:"What if I lose my passport?", ipa:"/wɒt ɪf aɪ luːz maɪ ˈpɑːspɔːt/", fr:"Et si je perds mon passeport ?", note:"« lose » (perdre) ≠ « loose » (desserré). Passé de lose : lost."},
      {block:"What if... ? (imprévus)", en:"In that case", ipa:"/ɪn ðæt keɪs/", fr:"Dans ce cas", note:"Pour répondre à une hypothèse : « In that case, shall we call the airline? »"},
      {block:"What if... ? (imprévus)", en:"Just in case", ipa:"/dʒʌst ɪn keɪs/", fr:"Au cas où", note:"« Take an umbrella, just in case. » Se place en fin de phrase."},
      {block:"What if... ? (imprévus)", en:"Don't worry.", ipa:"/dəʊnt ˈwʌri/", fr:"Ne t'inquiète pas.", note:"Pour rassurer : « Don't worry, I can help you. »"}
    ],
    MEM_WORDS: [3, 4, 9, 11, 19, 27], // Delayed, Cancelled, Miss the flight, Missing, Emergency, Could you help me, please?

    MINI_CHECKS: [
      { q:"“What ___ we miss the flight?” — on imagine un problème.", opts:["if","when","for"], correct:0, fb:"« What if... ? » sert à envisager un imprévu ou une hypothèse inquiétante." },
      { q:"“What if the flight ___ cancelled?” — quel verbe ?", opts:["will be","is","would"], correct:1, fb:"Après « What if », on garde le présent : « What if the flight is cancelled? »" },
      { q:"Comment dit-on « bureau des objets trouvés » (britannique) ?", opts:["Lost property office","Found luggage desk","Missing ticket room"], correct:0, fb:"« Lost property office » = bureau des objets trouvés." },
      { q:"Comment demander poliment de l'aide ?", opts:["Help me now.","Could you help me, please?","You help me?"], correct:1, fb:"« Could you help me, please? » est la formule polie de base." }
    ],

    ROUNDS: [
      { bank:["miss","What","if","the","we","flight","?"], answer:"what if we miss the flight ?", display:"What if we miss the flight?", fr:"Et si on rate le vol ?" },
      { bank:["help","Could","please","me","you","?"], answer:"could you help me please ?", display:"Could you help me, please?", fr:"Pourriez-vous m'aider, s'il vous plaît ?" },
      { bank:["belt","suitcase","is","My","not","on","the","."], answer:"my suitcase is not on the belt .", display:"My suitcase is not on the belt.", fr:"Ma valise n'est pas sur le tapis." },
      { bank:["delayed","The","flight","hours","is","by","two","."], answer:"the flight is delayed by two hours .", display:"The flight is delayed by two hours.", fr:"Le vol a deux heures de retard." },
      { bank:["left","passport","I","the","hotel","my","at","."], answer:"i left my passport at the hotel .", display:"I left my passport at the hotel.", fr:"J'ai laissé mon passeport à l'hôtel." },
      { bank:["lost","property","Where","is","the","office","?"], answer:"where is the lost property office ?", display:"Where is the lost property office?", fr:"Où est le bureau des objets trouvés ?" },
      { bank:["cancelled","What","should","we","do","if","it","is","?"], answer:"what should we do if it is cancelled ?", display:"What should we do if it is cancelled?", fr:"Que devons-nous faire si c'est annulé ?" },
      { bank:["fill","You","have","to","in","a","form","."], answer:"you have to fill in a form .", display:"You have to fill in a form.", fr:"Vous devez remplir un formulaire." },
      { bank:["call","In","that","case","shall","we","the","airline","?"], answer:"in that case shall we call the airline ?", display:"In that case, shall we call the airline?", fr:"Dans ce cas, si on appelait la compagnie aérienne ?" },
      { bank:["worry","Don't","I","can","help","you","."], answer:"don't worry i can help you .", display:"Don't worry, I can help you.", fr:"Ne t'inquiète pas, je peux t'aider." }
    ],

    QUIZ: [
      { cat:"ecrit", q:"“What ___ we miss the flight?” — on envisage un problème.", opts:["if","when","for"], correct:0, why:"« What if... ? » sert à envisager un imprévu ou une hypothèse inquiétante." },
      { cat:"ecrit", q:"“What if the flight ___ cancelled?”", opts:["is","will be","was"], correct:0, why:"Après « What if », on utilise le présent, pas le futur." },
      { cat:"ecrit", q:"Comment dit-on « un vol retardé » ?", opts:["A delayed flight","A closed flight","A late airport"], correct:0, why:"« Delayed » = retardé(e)." },
      { cat:"ecrit", q:"Comment dit-on « bureau des objets trouvés » (britannique) ?", opts:["Lost property office","Found tickets office","Missing luggage room"], correct:0, why:"« Lost property office » = bureau des objets trouvés." },
      { cat:"ecrit", q:"“I ___ my passport at the hotel yesterday.”", opts:["leave","left","leaved"], correct:1, why:"« leave » est irrégulier : left. Hier = passé simple (A2.0)." },
      { cat:"ecrit", q:"“We should ___ at the airport two hours before the flight.”", opts:["arrive","to arrive","arriving"], correct:0, why:"« should » est suivi du verbe de base, sans « to » (A2.6)." },
      { cat:"ecrit", q:"“You ___ show your passport at the check-in desk.”", opts:["have to","has to","are to"], correct:0, why:"« have to » exprime l'obligation (A2.6) : « You have to... »" },
      { cat:"ecrit", q:"“The agent said that he ___ call us back.”", opts:["will","would","is"], correct:1, why:"Discours rapporté (A2.9) : « will » devient « would » après « said that »." },
      { cat:"ecrit", q:"Comment demander poliment de l'aide ?", opts:["Could you help me, please?","Help me now.","You help me?"], correct:0, why:"« Could you...? » est la formule polie." },
      { cat:"ecrit", q:"“What should we do ___ the flight is cancelled?”", opts:["if","for","at"], correct:0, why:"« if » + présent pour envisager un cas possible." },
      { cat:"oral", audio:"Excuse me, my suitcase is not on the belt.", q:"Écoute : quel est le problème de la personne ?", opts:["Sa valise n'est pas arrivée","Son vol est annulé","Elle a perdu son passeport","Elle cherche la sortie"], correct:0, why:"« my suitcase is not on the belt » = sa valise n'est pas sur le tapis." },
      { cat:"oral", audio:"Excuse me, could you show me the way to the lost property office, please?", q:"Écoute : que cherche la personne à l'aéroport ?", opts:["Le bureau des objets trouvés","La sortie","Un taxi","Un restaurant"], correct:0, why:"« the lost property office » = le bureau des objets trouvés." },
      { cat:"oral", audio:"What if we miss the flight? Shall we call the airline?", q:"Écoute : que propose la personne ?", opts:["Appeler la compagnie aérienne","Prendre un taxi","Attendre au café","Rentrer à la maison"], correct:0, why:"« Shall we call the airline? » = si on appelait la compagnie ?" },
      { cat:"oral", audio:"The flight to Madrid is delayed by two hours. Please wait at gate fourteen.", q:"Écoute : que doit faire le passager ?", opts:["Attendre à la porte 14","Aller à la porte 40","Prendre un autre billet","Quitter l'aéroport"], correct:0, why:"« wait at gate fourteen » = attendre à la porte 14." },
      { cat:"comprehension", passage:"“Sam arrived at the airport at six o'clock. His flight was delayed, so he had to wait for three hours. He went to the information desk and asked, ‘Excuse me, what time does the flight leave?’ The agent said that it would leave at nine.”", q:"D'après le texte, que dit l'agent à Sam ?", opts:["Que le vol partira à neuf heures","Que le vol est annulé","Que Sam doit rentrer chez lui","Que le vol est déjà parti"], correct:0, why:"« it would leave at nine » = il partira à neuf heures." },
      { cat:"comprehension", passage:"“Maria lost her bag at the station. She went to the lost property office and described it: it was small and black, with a red label. The staff filled in a form with her phone number. Two days later, they called her: the bag was there!”", q:"D'après le texte, comment Maria a-t-elle aidé le personnel à retrouver son sac ?", opts:["En le décrivant et en laissant son numéro","En payant une somme","En revenant chaque jour","En appelant la police"], correct:0, why:"Elle a décrit le sac (« described it ») et le personnel a noté son numéro de téléphone." },
      { cat:"comprehension", passage:"“What if it rains on the day of the trip? In that case, we will take the bus instead of walking. Don't worry — I checked the timetable yesterday, and there is a bus every twenty minutes.”", q:"D'après le texte, que feront-ils s'il pleut ?", opts:["Ils prendront le bus","Ils annuleront le voyage","Ils marcheront quand même","Ils prendront un taxi"], correct:0, why:"« In that case, we will take the bus »." },
      { cat:"comprehension", passage:"“(rappel) I'd like to book a room for two nights, please. Is breakfast included in the price?”", q:"D'après le texte, que veut savoir la personne ?", opts:["Si le petit-déjeuner est inclus","S'il y a une piscine","L'heure du départ","Le prix du taxi"], correct:0, why:"« Is breakfast included in the price? » (rappel A1.9 : « I'd like to book »)." },
      { cat:"comprehension", passage:"“(rappel) Excuse me, how do I get to the station? — Go straight on, then turn left at the traffic lights. It's on your right, next to the bank.”", q:"D'après le texte, où se trouve la gare ?", opts:["À droite, à côté de la banque","À gauche, près du parc","Derrière l'hôpital","En face du cinéma"], correct:0, why:"« It's on your right, next to the bank » (rappel A1.4 : directions)." }
    ],

    PRON_VERBS: [
      {en:"What if we miss the flight?", fr:"Et si on rate le vol ?"},
      {en:"Could you help me, please?", fr:"Pourriez-vous m'aider, s'il vous plaît ?"},
      {en:"My suitcase is not on the belt.", fr:"Ma valise n'est pas sur le tapis."},
      {en:"The flight is delayed by two hours.", fr:"Le vol a deux heures de retard."},
      {en:"I left my passport at the hotel.", fr:"J'ai laissé mon passeport à l'hôtel."},
      {en:"Don't worry, I can help you.", fr:"Ne t'inquiète pas, je peux t'aider."}
    ],

    READING: [
      "Last Friday, Emma and Tom arrived at the airport at seven o'clock.",
      "They were going to Lisbon for a short holiday.",
      "While they were standing at the check-in desk, Tom looked at the departures board.",
      "Their flight was delayed by two hours.",
      "Emma was worried. \"What if we miss the connecting flight?\" she asked.",
      "\"Don't worry,\" said Tom. \"Shall we ask at the information desk?\"",
      "The agent was very kind. She said that the second flight would wait for them.",
      "Then Emma noticed that her wallet was missing, so they went to the lost property office.",
      "They filled in a form and described the wallet: it was small and brown.",
      "An hour later, a security officer found it near the gate — and they flew to Lisbon with a big smile!"
    ],
    GLOSS: [
      {en:"security officer", fr:"agent de sécurité"},
      {en:"kind", fr:"gentil(le), aimable"},
      {en:"noticed", fr:"a remarqué"},
      {en:"near", fr:"près de"}
    ],

    GRAMMAR1: {
      heading: "What if... ? : envisager un imprévu",
      lede: "En voyage, tout ne se passe pas toujours comme prévu. Pour envisager un problème possible et demander quoi faire, on utilise « What if... ? ».",
      conj: [["Rater quelque chose →","What if + présent","What if we miss the flight?"],["Un vol annulé →","What if + présent","What if it is cancelled?"],["Perdre un objet →","What if + présent","What if I lose my passport?"],["Répondre →","In that case, ...","In that case, shall we call the airline?"]],
      ruleHtml: "✈️ <b>What if + sujet + présent</b> pour <b>envisager un imprévu</b> ou une hypothèse inquiétante : « What if we <b>miss</b> the flight? » = et si on rate le vol ? On garde le <b>présent</b> après « if », jamais « will ». Pour répondre ou rassurer : <b>In that case</b>, ... / <b>Don't worry</b>, ...",
      dialogueLede: "À l'aéroport, deux amis s'inquiètent :",
      dialogue: [
        {who:"them", en:"What if the flight is cancelled?", fr:"Et si le vol est annulé ?"},
        {who:"you", en:"In that case, we should ask the airline for help. Don't worry!", fr:"Dans ce cas, on devrait demander de l'aide à la compagnie. Ne t'inquiète pas !"}
      ],
      whyLabel: "Pourquoi le présent après « if » ?",
      whyText: "En anglais, après <b>if</b> on reste au <b>présent</b> même quand on parle de l'avenir : « What if it <b>rains</b> tomorrow? » (jamais « will rain »). Le futur (will, shall) vient dans la <b>réponse</b> : « In that case, we <b>will</b> take the bus. » Tu as déjà vu ce schéma avec « If it rains... » (A2.7)."
    },
    GRAMMAR2: {
      heading: "Gérer un imprévu : choisir le bon temps",
      dialogueLede: "Au comptoir des objets trouvés :",
      dialogue: [
        {who:"them", en:"What happened?", fr:"Que s'est-il passé ?"},
        {who:"you", en:"I left my bag in the taxi. I'm looking for it now. Could you help me, please?", fr:"J'ai laissé mon sac dans le taxi. Je le cherche maintenant. Pourriez-vous m'aider, s'il vous plaît ?"}
      ],
      ruleHtml: "🧳 Pour gérer un imprévu, on <b>mélange les temps vus dans A2</b>, chacun avec son rôle : <b>past simple</b> pour ce qui s'est passé (« I left my bag »), <b>past continuous</b> pour la scène (« I was waiting »), <b>present continuous</b> pour ce qui se passe maintenant (« I'm looking for it »), <b>going to / will</b> pour la suite (« I'm going to call the airline »), <b>should / have to</b> pour le conseil et l'obligation (« You have to fill in a form »), et <b>Could you...?</b> pour demander de l'aide poliment.",
      whyLabel: "Raconter, décrire, demander : dans cet ordre",
      whyText: "Une bonne demande d'aide suit 3 étapes : 1) <b>dire ce qui s'est passé</b> (past simple), 2) <b>décrire l'objet ou la situation</b> (« it is small and black »), 3) <b>demander de l'aide</b> (« Could you help me, please? »). C'est exactement ce que tu feras au contrôle du niveau A2."
    },
    REVIEW: [
      { q:"Comment dit-on « Il a dit qu'il rappellerait » ?", opts:["He said that he would call back.","He said that he will call back."], correct:0, fb:"« said that » + would. (rappel A2.9)" },
      { q:"Comment proposer une activité ensemble ?", opts:["Shall we go to the cinema?","We go to the cinema?"], correct:0, fb:"« Shall we...? » propose une activité. (rappel A2.10)" },
      { q:"Comment dit-on « Je ne supporte pas d'attendre » ?", opts:["I can't stand waiting.","I can't stand to waiting."], correct:0, fb:"« can't stand » + -ing. (rappel A2.11)" },
      { q:"Comment dit-on « J'ai mal à la tête » ?", opts:["I have a headache.","I am headache."], correct:0, fb:"« have a headache ». (rappel A2.6)" },
      { q:"Comment demander son chemin poliment ?", opts:["Excuse me, how do I get to the station?","You are the station where?"], correct:0, fb:"« Excuse me, how do I get to...? » (rappel A1.4)" }
    ],
    CULTURE_NOTE: null,
    NEXT_PREVIEW: "Le Contrôle A2 : un contrôle qui évalue tout le niveau A2 (grammaire de tous les paliers, compréhension orale et écrite, expression écrite). Prends le temps de revoir tes paliers fragiles avant d'y aller — il faut au moins 70 % pour le valider.",
    META: { vocabTitle:"Imprévus en voyage (A2.12)", lectureTitle:"Un voyage qui ne se passe pas comme prévu", bilanTitle:"Bravo, tu sais maintenant gérer un imprévu en voyage et demander de l'aide !", pronLabel:"Imprévus et demandes d'aide", todayLede:"gérer un imprévu en voyage, demander de l'aide, et réutiliser tous les temps du niveau A2 — s'appuie sur A1.4, A1.8 et A1.9", videoTheme:"une scène d'aéroport calme (enregistrement, renseignement, objet égaré)", videoUrl:null }
  };
})(window.LESSONS_EXT);
