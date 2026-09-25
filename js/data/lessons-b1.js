// The Roots — leçons jouables B1.4 à B1.12 (leçons 30 à 38)
// Fichier de DONNÉES chargé par lessons.html (balise <script src>). Ne contient que du contenu
// pédagogique : window.LESSONS_EXT[N] = {…} où N est le numéro de leçon du moteur.
window.LESSONS_EXT = window.LESSONS_EXT || {};
(function (LESSONS_EXT) {
  // B1.4 — Everyday English — s'appuie sur B1.3 (Real Conversations : questions indirectes, réactions) et A2.9 (au téléphone)
  LESSONS_EXT[30] = {
    code: "B1.4", level: "B1",
    VOCAB: [
      {block:"Faire une demande polie", en:"Could I...?", ipa:"/kʊd aɪ/", fr:"Est-ce que je pourrais... ?", note:"La demande polie passe-partout : « Could I have the bill, please? » — plus poli que « Can I...? »."},
      {block:"Faire une demande polie", en:"Would it be possible to...?", ipa:"/wʊd ɪt bi ˈpɒsəbəl tə/", fr:"Serait-il possible de... ?", note:"Très poli, idéal quand on demande une faveur ou une exception : « Would it be possible to change my table? »."},
      {block:"Faire une demande polie", en:"Do you happen to...?", ipa:"/də juː ˈhæpən tə/", fr:"Est-ce que par hasard vous... ?", note:"« Do you happen to have a charger? » : adoucit la demande, sans mettre la personne dans l'embarras."},
      {block:"Faire une demande polie", en:"I'd like to...", ipa:"/aɪd laɪk tə/", fr:"J'aimerais..., je voudrais...", note:"À préférer à « I want » qui sonne exigeant, presque impoli, dans un magasin ou au restaurant."},
      {block:"Faire une demande polie", en:"I'm looking for...", ipa:"/aɪm ˈlʊkɪŋ fɔː/", fr:"Je cherche...", note:"Toujours avec « for » : « I'm looking for the post office » (jamais « I'm looking the post office »)."},
      {block:"Faire une demande polie", en:"Would you mind...?", ipa:"/wʊd juː maɪnd/", fr:"Est-ce que ça vous dérangerait de... ?", note:"Toujours suivi de -ing : « Would you mind waiting a moment? » — voir la grammaire."},
      {block:"Magasin et restaurant", en:"The bill", ipa:"/ðə bɪl/", fr:"L'addition", note:"Au Royaume-Uni « the bill » ; aux États-Unis on dit plutôt « the check »."},
      {block:"Magasin et restaurant", en:"A receipt", ipa:"/ə rɪˈsiːt/", fr:"Un ticket de caisse, un reçu", note:"Le « p » ne se prononce pas ! Indispensable pour un échange ou un remboursement."},
      {block:"Magasin et restaurant", en:"A refund", ipa:"/ə ˈriːfʌnd/", fr:"Un remboursement", note:"« Could I get a refund? » = est-ce que je peux être remboursé(e) ? Le verbe se dit « to refund »."},
      {block:"Magasin et restaurant", en:"To exchange", ipa:"/tə ɪksˈtʃeɪndʒ/", fr:"Échanger (un article)", note:"« I'd like to exchange this for a bigger size » = je voudrais l'échanger contre une taille au-dessus."},
      {block:"Magasin et restaurant", en:"Out of stock", ipa:"/aʊt əv stɒk/", fr:"En rupture de stock", note:"« I'm afraid it's out of stock » = je crains qu'il n'y en ait plus."},
      {block:"Magasin et restaurant", en:"I think there's been a mistake.", ipa:"/aɪ θɪŋk ðəz bɪn ə mɪˈsteɪk/", fr:"Je crois qu'il y a eu une erreur.", note:"La façon la plus neutre de signaler un problème (commande, addition, réservation) sans accuser personne."},
      {block:"Transports et téléphone", en:"A return ticket", ipa:"/ə rɪˈtɜːn ˈtɪkɪt/", fr:"Un billet aller-retour", note:"UK : « single » (aller simple) / « return » ; US : « one-way » / « round-trip »."},
      {block:"Transports et téléphone", en:"Hold on a moment.", ipa:"/həʊld ɒn ə ˈməʊmənt/", fr:"Ne quittez pas, un instant.", note:"Très fréquent au téléphone ; on entend aussi « Bear with me » (un instant, s'il vous plaît)."},
      {block:"Transports et téléphone", en:"Could you put me through to...?", ipa:"/kʊd juː pʊt mi θruː tə/", fr:"Pourriez-vous me passer... ?", note:"Au standard : « Could you put me through to the manager? » = pourriez-vous me passer le responsable ?"},
      {block:"Transports et téléphone", en:"You're breaking up.", ipa:"/jɔː ˈbreɪkɪŋ ʌp/", fr:"Ça coupe, je t'entends mal.", note:"Se dit quand la ligne est mauvaise — rien à voir avec une rupture amoureuse ici !"},
      {block:"Administration, services et logement", en:"An appointment", ipa:"/ən əˈpɔɪntmənt/", fr:"Un rendez-vous (officiel, médical)", note:"Pour un rendez-vous entre amis, on dit plutôt « I'm meeting a friend », pas « an appointment »."},
      {block:"Administration, services et logement", en:"To fill in a form", ipa:"/tə fɪl ɪn ə fɔːm/", fr:"Remplir un formulaire", note:"UK : « fill in » ; US : « fill out ». Les deux sont compris partout."},
      {block:"Administration, services et logement", en:"The landlord", ipa:"/ðə ˈlændlɔːd/", fr:"Le propriétaire (qui loue)", note:"« landlady » pour une femme ; le locataire se dit « the tenant »."},
      {block:"Administration, services et logement", en:"A deposit", ipa:"/ə dɪˈpɒzɪt/", fr:"Une caution, un acompte", note:"« I paid a one-month deposit » = j'ai versé un mois de caution."},
      {block:"Administration, services et logement", en:"Out of order", ipa:"/aʊt əv ˈɔːdə/", fr:"En panne, hors service", note:"Pour une machine publique (ascenseur, distributeur) ; pour un appareil chez soi : « it's not working »."},
      {block:"Administration, services et logement", en:"Proof of address", ipa:"/pruːf əv əˈdres/", fr:"Un justificatif de domicile", note:"Demandé partout pour ouvrir un compte ou louer un logement : facture, avis d'impôt, etc."},
      {block:"Verbes clés (B1.4)", en:"Complain", ipa:"/kəmˈpleɪn/", fr:"Se plaindre, faire une réclamation", note:"« complain about something » ; le nom est « a complaint »."},
      {block:"Verbes clés (B1.4)", en:"Replace", ipa:"/rɪˈpleɪs/", fr:"Remplacer", note:"« Could you replace it? » = pourriez-vous le remplacer ? « replace A with B » = remplacer A par B (« with », pas « by », quand c'est quelqu'un qui fait l'échange)."},
      {block:"Verbes clés (B1.4)", en:"Afford", ipa:"/əˈfɔːd/", fr:"Avoir les moyens de", note:"Presque toujours avec can/can't : « I can't afford it » = je n'ai pas les moyens."},
      {block:"Verbes clés (B1.4)", en:"Book", ipa:"/bʊk/", fr:"Réserver", note:"« I'd like to book a table for two » ; « a booking » = une réservation (US : « a reservation »)."},
      {block:"Verbes clés (B1.4)", en:"Sort out", ipa:"/sɔːt aʊt/", fr:"Régler, arranger (un problème)", note:"« Don't worry, we'll sort it out » = ne vous inquiétez pas, on va arranger ça. Très britannique."},
      {block:"Verbes clés (B1.4)", en:"Charge", ipa:"/tʃɑːdʒ/", fr:"Faire payer, facturer", note:"« They charged me twice » = ils m'ont fait payer deux fois ; « free of charge » = gratuit."}
    ],
    MEM_WORDS: [1,7,8,11,20,26], // Would it be possible to...?, A receipt, A refund, I think there's been a mistake, Out of order, Sort out

    MINI_CHECKS: [
      { q:"“Would you mind ___ the window?”", opts:["to close","closing","close"], correct:1, fb:"« Would you mind » est toujours suivi de -ing : « Would you mind closing the window? »" },
      { q:"Au restaurant, quelle demande est la plus polie ?", opts:["I want the bill.","Give me the bill.","Could I have the bill, please?"], correct:2, fb:"« Could I have..., please? » est la formule polie standard ; « I want » sonne exigeant." },
      { q:"Comment dit-on « un remboursement » ?", opts:["A refund","A receipt","A deposit"], correct:0, fb:"« A refund » = un remboursement. « A receipt » = un ticket de caisse, « a deposit » = une caution." },
      { q:"“___ I call you a taxi?” — proposer son aide.", opts:["Will","Shall","Do"], correct:1, fb:"« Shall I...? » sert à proposer de faire quelque chose pour quelqu'un." }
    ],

    ROUNDS: [
      { bank:["please","the","Could","have","bill","I","?"], answer:"could i have the bill please ?", display:"Could I have the bill, please?", fr:"Est-ce que je pourrais avoir l'addition, s'il vous plaît ?" },
      { bank:["change","it","Would","possible","my","be","table","to","?"], answer:"would it be possible to change my table ?", display:"Would it be possible to change my table?", fr:"Serait-il possible de changer de table ?" },
      { bank:["the","mind","Would","closing","you","window","?"], answer:"would you mind closing the window ?", display:"Would you mind closing the window?", fr:"Ça vous dérangerait de fermer la fenêtre ?" },
      { bank:["mistake","there's","my","I","a","been","with","think","order","."], answer:"i think there's been a mistake with my order .", display:"I think there's been a mistake with my order.", fr:"Je crois qu'il y a eu une erreur dans ma commande." },
      { bank:["jacket","exchange","I'd","this","to","like","."], answer:"i'd like to exchange this jacket .", display:"I'd like to exchange this jacket.", fr:"J'aimerais échanger cette veste." },
      { bank:["have","in","Do","a","to","smaller","you","it","happen","size","?"], answer:"do you happen to have it in a smaller size ?", display:"Do you happen to have it in a smaller size?", fr:"Est-ce que vous l'auriez par hasard dans une taille en dessous ?" },
      { bank:["taxi","call","Shall","a","I","you","?"], answer:"shall i call you a taxi ?", display:"Shall I call you a taxi?", fr:"Voulez-vous que je vous appelle un taxi ?" },
      { bank:["through","manager","Could","to","put","the","me","you","?"], answer:"could you put me through to the manager ?", display:"Could you put me through to the manager?", fr:"Pourriez-vous me passer le responsable ?" },
      { bank:["near","a","I'm","centre","for","flat","the","looking","."], answer:"i'm looking for a flat near the centre .", display:"I'm looking for a flat near the centre.", fr:"Je cherche un appartement près du centre." },
      { bank:["me","the","Do","fill","want","form","in","to","you","?"], answer:"do you want me to fill in the form ?", display:"Do you want me to fill in the form?", fr:"Vous voulez que je remplisse le formulaire ?" }
    ],

    QUIZ: [
      { cat:"ecrit", q:"“Would you mind ___ a moment?”", opts:["waiting","to wait","wait"], correct:0, why:"« Would you mind » + verbe en -ing : « Would you mind waiting a moment? »" },
      { cat:"ecrit", q:"Quelle demande est la plus polie pour obtenir une faveur ?", opts:["I want a table by the window.","Would it be possible to have a table by the window?","Give me a table by the window."], correct:1, why:"« Would it be possible to...? » est la formule la plus polie pour demander une exception." },
      { cat:"ecrit", q:"“___ I carry your bag for you?” — tu proposes ton aide.", opts:["Do","Will","Shall"], correct:2, why:"« Shall I...? » = proposer de faire quelque chose pour quelqu'un (« Voulez-vous que je... ? »)." },
      { cat:"ecrit", q:"“Do you want ___ the form?”", opts:["that I fill in","me to fill in","me fill in"], correct:1, why:"« want + personne + to + verbe » : « Do you want me to fill in the form? » — jamais « want that I... »." },
      { cat:"ecrit", q:"Comment dit-on « en rupture de stock » ?", opts:["Out of order","Out of stock","Out of date"], correct:1, why:"« Out of stock » = en rupture de stock ; « out of order » = en panne ; « out of date » = périmé." },
      { cat:"ecrit", q:"Comment signaler une erreur sur l'addition sans accuser personne ?", opts:["I think there's been a mistake.","You made a mistake.","This bill is wrong, obviously."], correct:0, why:"« I think there's been a mistake » est neutre : on signale le problème sans désigner de coupable." },
      { cat:"ecrit", q:"Tu veux un billet aller-retour en Angleterre. Tu demandes :", opts:["A single ticket, please.","A return ticket, please.","A back ticket, please."], correct:1, why:"UK : « return » = aller-retour ; « single » = aller simple (US : round-trip / one-way)." },
      { cat:"ecrit", q:"“I can't ___ a new car at the moment.” — pas les moyens.", opts:["afford","charge","book"], correct:0, why:"« I can't afford it » = je n'ai pas les moyens de me le payer." },
      { cat:"ecrit", q:"“Would you mind opening the door?” — Tu acceptes volontiers. Tu réponds :", opts:["Yes, I mind.","Yes, of course.","No, not at all."], correct:2, why:"« Would you mind...? » = « ça vous dérange ? » : pour accepter, on répond « No, not at all » (non, pas du tout)." },
      { cat:"ecrit", q:"Au téléphone, la ligne est mauvaise. Tu dis :", opts:["You're breaking up.","You're breaking down.","You're breaking out."], correct:0, why:"« You're breaking up » = ça coupe, je t'entends mal." },
      { cat:"oral", audio:"Excuse me, I think there's been a mistake with my order.", q:"Écoute : que fait la personne ?", opts:["Elle commande un plat","Elle demande l'addition","Elle signale une erreur dans sa commande","Elle réserve une table"], correct:2, why:"« I think there's been a mistake with my order » = je crois qu'il y a une erreur dans ma commande." },
      { cat:"oral", audio:"Would it be possible to get a refund? I've still got the receipt.", q:"Écoute : que demande la personne ?", opts:["Un échange","Un ticket de caisse","Une réduction","Un remboursement"], correct:3, why:"« get a refund » = être remboursé(e) ; elle précise qu'elle a encore le ticket (« receipt »)." },
      { cat:"oral", audio:"Hold on a moment, I'll put you through to the manager.", q:"Écoute : que va faire la personne au téléphone ?", opts:["Raccrocher","Transférer l'appel au responsable","Rappeler plus tard","Laisser un message"], correct:1, why:"« I'll put you through to the manager » = je vous passe le responsable." },
      { cat:"oral", audio:"I'm afraid that model is out of stock, but we could order it for you.", q:"Écoute : que propose le vendeur ?", opts:["De commander l'article","De rembourser le client","De réparer l'article","D'échanger l'article"], correct:0, why:"L'article est en rupture (« out of stock ») ; le vendeur propose de le commander (« we could order it for you »)." },
      { cat:"comprehension", passage:"“— Hello, I'm calling about the flat on Park Road. Do you happen to know if it's still available? — Yes, it is. Would you like to book a viewing? — That would be great. Could I come on Saturday morning?”", q:"D'après le dialogue, que va faire la personne samedi matin ?", opts:["Signer le bail","Payer la caution","Visiter l'appartement","Déménager"], correct:2, why:"« book a viewing » = réserver une visite ; « Could I come on Saturday morning? »" },
      { cat:"comprehension", passage:"“— I ordered the vegetarian pasta, but this has chicken in it. — Oh, I'm so sorry about that. I'll replace it straight away, and the drinks are on us. — That's very kind, thank you.”", q:"D'après le dialogue, comment le problème est-il réglé ?", opts:["Le client est remboursé et s'en va","Le plat est remplacé et les boissons sont offertes","Le client garde le plat","Le client doit attendre le responsable"], correct:1, why:"« I'll replace it straight away, and the drinks are on us » = je le remplace tout de suite et les boissons sont offertes." },
      { cat:"comprehension", passage:"“(rappel) — Could you tell me where the customer service desk is? — It's on the second floor, next to the lifts. You haven't been here before, have you? — No, it's my first time.”", q:"D'après le dialogue, où se trouve le service client ?", opts:["Au rez-de-chaussée, près de l'entrée","Au deuxième étage, à côté des ascenseurs","Au sous-sol","À côté des caisses"], correct:1, why:"« It's on the second floor, next to the lifts » (rappel B1.3 : question indirecte « where the desk is » et question tag « have you? »)." },
      { cat:"comprehension", passage:"“(rappel) While I was waiting for the bus, I realised I had left my wallet at the café. By the time I got back, the waiter had already put it aside for me.”", q:"D'après le texte, qu'avait fait le serveur avant le retour de la personne ?", opts:["Il avait appelé la police","Il était parti","Il avait mis le portefeuille de côté","Il avait perdu le portefeuille"], correct:2, why:"« the waiter had already put it aside for me » (rappel B1.2 : Past Perfect et « by the time »)." }
    ],

    PRON_VERBS: [
      {en:"Could I have the bill, please?", fr:"Est-ce que je pourrais avoir l'addition, s'il vous plaît ?"},
      {en:"Would it be possible to change my table?", fr:"Serait-il possible de changer de table ?"},
      {en:"Excuse me, I think there's been a mistake with my order.", fr:"Excusez-moi, je crois qu'il y a eu une erreur dans ma commande."},
      {en:"Would you mind waiting a moment?", fr:"Ça vous dérangerait de patienter un instant ?"},
      {en:"I'd like to exchange this, but I've lost the receipt.", fr:"J'aimerais échanger ceci, mais j'ai perdu le ticket de caisse."},
      {en:"Don't worry, we'll sort it out.", fr:"Ne vous inquiétez pas, on va arranger ça."}
    ],

    READING: [
      "Last Friday, I took my sister out for dinner to celebrate her new job.",
      "I had booked a table for eight o'clock, but when we arrived, the restaurant had no record of our booking.",
      "Instead of getting angry, I said calmly, “I think there's been a mistake — I booked online on Monday.”",
      "The waiter apologised and asked, “Would you mind waiting ten minutes at the bar?”",
      "Ten minutes later, we were sitting at a lovely table by the window.",
      "Then my sister's dish arrived, and it wasn't what she had ordered.",
      "This time, she asked, “Would it be possible to have the fish instead? I ordered it without sauce.”",
      "The waiter replaced it straight away and told us the desserts were on the house.",
      "At the end of the evening, I asked for the bill and checked it carefully, just in case.",
      "Two small problems, two polite requests — and in the end, it was a perfect evening."
    ],
    GLOSS: [
      {en:"to have no record of", fr:"ne pas avoir de trace de"},
      {en:"to apologise", fr:"s'excuser, présenter ses excuses (US : apologize)"},
      {en:"a dish", fr:"un plat"},
      {en:"on the house", fr:"offert par la maison"},
      {en:"just in case", fr:"au cas où, par précaution"}
    ],

    GRAMMAR1: {
      heading: "Demandes polies : de « Can I...? » à « Would you mind...? »",
      lede: "Plus la demande est délicate (une faveur, une exception, un problème à régler), plus on monte d'un cran dans la politesse : Can → Could → Would you mind → Would it be possible.",
      conj: [["Can I...? →","Direct, entre proches","Can I have some water?"],["Could I / Could you...? →","Poli, neutre (le plus courant)","Could you help me, please?"],["Would you mind + -ing...? →","Très poli","Would you mind moving your bag?"],["Would it be possible to...? →","Très poli, formel","Would it be possible to pay by card?"]],
      ruleHtml: "📖 <b>Could</b> et <b>would</b> sont les deux modaux de la politesse : ils mettent de la distance et rendent la demande moins directe. <b>Could I...?</b> = demander pour soi ; <b>Could you...?</b> = demander à l'autre de faire quelque chose. <b>Would you mind</b> est toujours suivi de <b>-ing</b> (« Would you mind <b>closing</b> the door? »). Et <b>I'd like</b> remplace avantageusement <b>I want</b>, qui sonne exigeant.",
      dialogueLede: "Dans un magasin de vêtements, avec un article défectueux :",
      dialogue: [
        {who:"you", en:"Hi, I bought this shirt yesterday, but there's a hole in it. Would it be possible to exchange it?", fr:"Bonjour, j'ai acheté cette chemise hier, mais il y a un trou. Serait-il possible de l'échanger ?"},
        {who:"them", en:"Of course. Could I see your receipt, please?", fr:"Bien sûr. Est-ce que je pourrais voir votre ticket de caisse, s'il vous plaît ?"}
      ],
      whyLabel: "Le piège de « Would you mind...? »",
      whyText: "Deux erreurs classiques chez les francophones. D'abord, dire « Would you mind <b>to close</b> the door? » — il faut <b>closing</b>. Ensuite, la réponse : « mind » veut dire « être dérangé(e) », donc pour dire <b>oui, volontiers</b>, on répond <b>« No, not at all »</b> ou <b>« No, of course not »</b> (non, ça ne me dérange pas). Répondre « Yes » voudrait dire… que ça vous dérange !"
    },
    GRAMMAR2: {
      heading: "Proposer son aide : « Shall I...? », « I'll... », « Do you want me to...? »",
      dialogueLede: "À la réception d'un hôtel, une cliente a un problème de chambre :",
      dialogue: [
        {who:"them", en:"I'm afraid the heating in my room isn't working.", fr:"Je crains que le chauffage de ma chambre ne fonctionne pas."},
        {who:"you", en:"I'm so sorry. Shall I send someone up, or would you prefer to change rooms?", fr:"Je suis vraiment désolé(e). Voulez-vous que j'envoie quelqu'un, ou préférez-vous changer de chambre ?"}
      ],
      ruleHtml: "💭 Pour <b>proposer</b> de faire quelque chose : <b>Shall I...?</b> (« Shall I open the window? » = voulez-vous que j'ouvre la fenêtre ?), <b>I'll...</b> pour une offre spontanée (« I'll help you with that »), <b>Do you want me to...?</b> ou, plus poli, <b>Would you like me to...?</b>. Pour proposer quelque chose à quelqu'un : <b>Would you like...?</b> (« Would you like a coffee? »). Pour accepter : « That would be great, thanks » ; pour refuser : « That's kind of you, but I'm fine ».",
      whyLabel: "Jamais « Do you want that I... »",
      whyText: "Le français « Vous voulez que je... ? » pousse à dire « Do you want <b>that I</b> call a taxi? » — c'est incorrect. En anglais : <b>want + personne + to + verbe</b> : « Do you want <b>me to</b> call a taxi? », « Would you like <b>me to</b> check? ». Autre réflexe à prendre : <b>shall</b> ne s'utilise presque plus qu'avec <b>I</b> et <b>we</b>, justement pour proposer (« Shall we go? »)."
    },

    REVIEW: [
      { q:"Quelle question indirecte est correcte ?", opts:["Could you tell me where is the bank?","Could you tell me where the bank is?"], correct:1, fb:"Dans une question indirecte, l'ordre reste sujet-verbe : « where the bank is ». (rappel B1.3)" },
      { q:"“You've been to London before, ___?”", opts:["haven't you","didn't you"], correct:0, fb:"L'auxiliaire est « have » (Present Perfect) → tag « haven't you? ». (rappel B1.3)" },
      { q:"Comment interrompre poliment quelqu'un ?", opts:["Sorry to interrupt, but...","Stop, I'm talking."], correct:0, fb:"« Sorry to interrupt, but... » = la formule polie pour couper la parole. (rappel B1.3)" },
      { q:"“Sorry, I didn't ___ that.” — tu n'as pas bien entendu.", opts:["take","catch"], correct:1, fb:"« I didn't catch that » = je n'ai pas bien entendu/compris. (rappel B1.3)" },
      { q:"Comment amorcer poliment la fin d'une conversation ?", opts:["Anyway, I should get going.","Bye, I'm bored."], correct:0, fb:"« Anyway, I should get going » annonce naturellement la fin de l'échange. (rappel B1.3)" }
    ],

    CULTURE_NOTE: {
      icon: "🛎️",
      title: "Note culturelle — se plaindre à l'anglaise",
      html: "Au Royaume-Uni, on se plaint rarement de front : on <b>adoucit</b> le problème avec « <b>I'm afraid...</b> », « <b>I think there might be a slight problem</b> » ou même un « <b>Sorry, but...</b> » — alors que c'est le client qui a raison ! Ce ton mesuré obtient généralement de meilleurs résultats qu'un reproche direct, et il est attendu. Côté pourboire, les usages diffèrent : au Royaume-Uni, un <b>service charge</b> d'environ 10 à 12,5 % est souvent déjà ajouté à l'addition (vérifie avant de laisser un pourboire), tandis qu'aux États-Unis, laisser 15 à 20 % au restaurant est quasiment obligatoire, car le salaire des serveurs en dépend."
    },

    NEXT_PREVIEW: "B1.5 (Working in English) : parler de ton travail, expliquer tes responsabilités, participer à une réunion et faire un compte rendu — avec les modaux d'obligation, de permission, de conseil et de probabilité, et les phrasal verbs du bureau (follow up, deal with, wrap up…).",

    META: { vocabTitle: "L'anglais du quotidien (B1.4)", lectureTitle: "Un dîner plein d'imprévus", bilanTitle: "Bravo, tu sais maintenant gérer un imprévu du quotidien avec politesse !", pronLabel: "Demandes polies et offres (could, would, shall)", todayLede: "gérer une situation du quotidien qui ne se passe pas comme prévu (magasin, restaurant, transports, téléphone, logement) : expliquer, demander, négocier, conclure — s'appuie sur B1.3 et A2.9 (au téléphone)" }
  };

  // B1.5 — Working in English — s'appuie sur B1.4 (demandes polies, could/would) et B1.1 (parler de soi)
  LESSONS_EXT[31] = {
    code: "B1.5", level: "B1",
    VOCAB: [
      {block:"Son poste et ses responsabilités", en:"To be in charge of", ipa:"/tə bi ɪn tʃɑːdʒ əv/", fr:"Être responsable de, avoir la charge de", note:"« I'm in charge of the sales team » = je dirige l'équipe commerciale. Suivi d'un nom ou de -ing."},
      {block:"Son poste et ses responsabilités", en:"To be responsible for", ipa:"/tə bi rɪˈspɒnsəbəl fɔː/", fr:"Être chargé(e) de", note:"Toujours « for » (pas « of ») : « I'm responsible for customer relations »."},
      {block:"Son poste et ses responsabilités", en:"A colleague", ipa:"/ə ˈkɒliːɡ/", fr:"Un(e) collègue", note:"Deux syllabes seulement : /ˈkɒl-iːɡ/. À l'oral, on dit aussi souvent « a co-worker » (surtout US)."},
      {block:"Son poste et ses responsabilités", en:"My line manager", ipa:"/maɪ laɪn ˈmænɪdʒə/", fr:"Mon/ma supérieur(e) direct(e), mon N+1", note:"Expression britannique très courante ; aux États-Unis, on dit plutôt « my boss » ou « my supervisor »."},
      {block:"Son poste et ses responsabilités", en:"A task", ipa:"/ə tɑːsk/", fr:"Une tâche", note:"« My main tasks include... » = mes principales tâches sont..."},
      {block:"Son poste et ses responsabilités", en:"Workload", ipa:"/ˈwɜːkləʊd/", fr:"Charge de travail", note:"« I have a heavy workload this month » = j'ai une grosse charge de travail ce mois-ci."},
      {block:"Réunions et projets", en:"An agenda", ipa:"/ən əˈdʒendə/", fr:"Un ordre du jour", note:"Faux ami ! Un agenda (carnet) se dit « a diary » (UK) ou « a planner » (US)."},
      {block:"Réunions et projets", en:"A deadline", ipa:"/ə ˈdedlaɪn/", fr:"Une date limite, une échéance", note:"« The deadline is Friday » = il faut avoir fini pour vendredi."},
      {block:"Réunions et projets", en:"To meet a deadline", ipa:"/tə miːt ə ˈdedlaɪn/", fr:"Respecter une échéance", note:"On « meet » une deadline (pas « respect ») ; le contraire : « to miss a deadline »."},
      {block:"Réunions et projets", en:"Behind schedule", ipa:"/bɪˈhaɪnd ˈʃedjuːl/", fr:"En retard sur le planning", note:"Contraire : « on schedule » (dans les temps) / « ahead of schedule ». US : /ˈskedʒuːl/."},
      {block:"Réunions et projets", en:"A quick update", ipa:"/ə kwɪk ˈʌpdeɪt/", fr:"Un petit point, une mise à jour rapide", note:"« Can you give us a quick update on the project? » = tu peux nous faire un petit point ?"},
      {block:"Réunions et projets", en:"The minutes", ipa:"/ðə ˈmɪnɪts/", fr:"Le compte rendu (de réunion)", note:"Toujours au pluriel dans ce sens : « Who's taking the minutes? » = qui prend les notes ?"},
      {block:"Phrasal verbs du bureau", en:"Follow up (on)", ipa:"/ˈfɒləʊ ʌp/", fr:"Assurer le suivi, relancer", note:"« I'll follow up on this tomorrow » = je m'occupe du suivi demain. Nom : « a follow-up »."},
      {block:"Phrasal verbs du bureau", en:"Set up", ipa:"/set ʌp/", fr:"Organiser, mettre en place", note:"« Let's set up a meeting » = organisons une réunion ; « set up a company » = créer une entreprise."},
      {block:"Phrasal verbs du bureau", en:"Deal with", ipa:"/diːl wɪð/", fr:"Gérer, s'occuper de, traiter", note:"« I'll deal with the client » = je m'occupe du client. Passé irrégulier : dealt /delt/."},
      {block:"Phrasal verbs du bureau", en:"Look into", ipa:"/lʊk ˈɪntuː/", fr:"Examiner, se pencher sur", note:"« We're looking into the problem » = nous étudions le problème — promesse d'enquêter, pas de résoudre."},
      {block:"Phrasal verbs du bureau", en:"Bring up", ipa:"/brɪŋ ʌp/", fr:"Soulever, aborder (un sujet)", note:"« I'd like to bring up the budget » = j'aimerais aborder la question du budget. (Aussi : élever un enfant.)"},
      {block:"Phrasal verbs du bureau", en:"Wrap up", ipa:"/ræp ʌp/", fr:"Conclure, boucler", note:"« Let's wrap up here » = on va s'arrêter là. Le « w » ne se prononce pas."},
      {block:"Carrière", en:"A career", ipa:"/ə kəˈrɪə/", fr:"Une carrière (professionnelle)", note:"Accent sur la 2e syllabe : ca-REER. Une carrière de pierre se dit « a quarry »."},
      {block:"Carrière", en:"A promotion", ipa:"/ə prəˈməʊʃən/", fr:"Une promotion, un avancement", note:"« She got a promotion » = elle a été promue. Pour une promo d'étudiants : « a year group » ou « class » (US)."},
      {block:"Carrière", en:"To apply for", ipa:"/tə əˈplaɪ fɔː/", fr:"Postuler à, poser sa candidature pour", note:"« I applied for a job in Dublin » ; la candidature = « an application »."},
      {block:"Carrière", en:"Skills", ipa:"/skɪlz/", fr:"Compétences", note:"« soft skills » = savoir-être ; « people skills » = aisance relationnelle."},
      {block:"Verbes clés (B1.5)", en:"Attend", ipa:"/əˈtend/", fr:"Assister à, participer à", note:"Faux ami ! « attend a meeting » = assister à une réunion. « Attendre » se dit « wait (for) »."},
      {block:"Verbes clés (B1.5)", en:"Handle", ipa:"/ˈhændəl/", fr:"Gérer, prendre en charge", note:"« She handles all the complaints » = c'est elle qui gère toutes les réclamations."},
      {block:"Verbes clés (B1.5)", en:"Suggest", ipa:"/səˈdʒest/", fr:"Suggérer, proposer", note:"« I suggest postponing » ou « I suggest (that) we postpone » — jamais « I suggest you to... »."},
      {block:"Verbes clés (B1.5)", en:"Report to", ipa:"/rɪˈpɔːt tə/", fr:"Dépendre de, rendre compte à", note:"« I report to the finance director » = mon supérieur est le directeur financier."}
    ],
    MEM_WORDS: [6,7,14,16,17,22], // An agenda, A deadline, Deal with, Bring up, Wrap up, Attend

    MINI_CHECKS: [
      { q:"“You ___ come to the meeting — it's optional.”", opts:["mustn't","don't have to","have to"], correct:1, fb:"« don't have to » = ce n'est pas nécessaire. « mustn't » serait une interdiction !" },
      { q:"“I'll ___ the client tomorrow to check they received the quote.”", opts:["follow up with","wrap up","bring up"], correct:0, fb:"« follow up with someone » = relancer quelqu'un, assurer le suivi." },
      { q:"Comment dit-on « assister à une réunion » ?", opts:["To wait a meeting","To attend a meeting","To assist a meeting"], correct:1, fb:"« attend » = assister à. Attention aux faux amis « attendre » (wait) et « assist » (aider)." },
      { q:"“Tom isn't at his desk. He ___ be in a meeting.” — tu n'es pas sûr(e).", opts:["might","must to","should to"], correct:0, fb:"« might » = probabilité faible ou moyenne (peut-être). Jamais de « to » après un modal." }
    ],

    ROUNDS: [
      { bank:["of","sales","in","I'm","the","charge","team","."], answer:"i'm in charge of the sales team .", display:"I'm in charge of the sales team.", fr:"Je suis responsable de l'équipe commerciale." },
      { bank:["deadline","to","We","by","meet","have","Friday","the","."], answer:"we have to meet the deadline by friday .", display:"We have to meet the deadline by Friday.", fr:"Nous devons respecter l'échéance d'ici vendredi." },
      { bank:["the","attend","You","to","meeting","have","don't","."], answer:"you don't have to attend the meeting .", display:"You don't have to attend the meeting.", fr:"Tu n'es pas obligé(e) d'assister à la réunion." },
      { bank:["problem","into","Could","look","the","you","?"], answer:"could you look into the problem ?", display:"Could you look into the problem?", fr:"Pourrais-tu te pencher sur le problème ?" },
      { bank:["client","follow","I'll","tomorrow","the","with","up","."], answer:"i'll follow up with the client tomorrow .", display:"I'll follow up with the client tomorrow.", fr:"Je relancerai le client demain." },
      { bank:["up","next","Can","meeting","set","a","we","week","?"], answer:"can we set up a meeting next week ?", display:"Can we set up a meeting next week?", fr:"On peut organiser une réunion la semaine prochaine ?" },
      { bank:["budget","bring","I'd","the","to","up","like","."], answer:"i'd like to bring up the budget .", display:"I'd like to bring up the budget.", fr:"J'aimerais aborder la question du budget." },
      { bank:["your","talk","You","manager","to","should","."], answer:"you should talk to your manager .", display:"You should talk to your manager.", fr:"Tu devrais en parler à ton responsable." },
      { bank:["a","be","She","meeting","in","might","."], answer:"she might be in a meeting .", display:"She might be in a meeting.", fr:"Elle est peut-être en réunion." },
      { bank:["here","wrap","Let's","up","."], answer:"let's wrap up here .", display:"Let's wrap up here.", fr:"On va s'arrêter là." }
    ],

    QUIZ: [
      { cat:"ecrit", q:"“Visitors ___ wear a badge at all times.” — règle officielle affichée.", opts:["must","might","don't have to"], correct:0, why:"« must » exprime une obligation forte, typique des règlements et consignes écrites." },
      { cat:"ecrit", q:"“You ___ tell anyone about the new product yet — it's confidential.”", opts:["don't have to","mustn't","needn't"], correct:1, why:"« mustn't » = interdiction. « don't have to » et « needn't » voudraient dire « ce n'est pas nécessaire »." },
      { cat:"ecrit", q:"“We ___ work on Saturdays, but sometimes we choose to.”", opts:["mustn't","can't","don't have to"], correct:2, why:"« don't have to » = absence d'obligation : on n'est pas obligé, mais on peut." },
      { cat:"ecrit", q:"“Are we ___ to work from home on Fridays?” — demander la permission.", opts:["allowed","must","should"], correct:0, why:"« be allowed to » = avoir le droit de, avoir la permission de." },
      { cat:"ecrit", q:"“You look exhausted. You ___ take a day off.” — un conseil.", opts:["must to","should","might"], correct:1, why:"« should » = conseil (tu devrais). Jamais de « to » après should." },
      { cat:"ecrit", q:"“She's been working since 6 a.m. She ___ be tired.” — déduction quasi certaine.", opts:["can't","might","must"], correct:2, why:"« must » exprime ici une déduction logique : elle doit être fatiguée (j'en suis presque sûr·e)." },
      { cat:"ecrit", q:"“The client is unhappy. Can you ___ it?” — s'occuper du problème.", opts:["deal with","bring up","wrap up"], correct:0, why:"« deal with » = gérer, s'occuper de." },
      { cat:"ecrit", q:"“We're ___ the problem and will get back to you.” — on étudie la question.", opts:["setting up","looking into","following"], correct:1, why:"« look into » = examiner, se pencher sur un problème." },
      { cat:"ecrit", q:"Comment dit-on « l'ordre du jour de la réunion » ?", opts:["The diary of the meeting","The agenda of the meeting","The minutes of the meeting"], correct:1, why:"« agenda » = ordre du jour ; « the minutes » = le compte rendu ; « a diary » = un agenda (carnet)." },
      { cat:"ecrit", q:"“I ___ the marketing director.” — c'est ton supérieur hiérarchique.", opts:["report to","attend","apply for"], correct:0, why:"« I report to... » = je dépends de, je rends compte à..." },
      { cat:"oral", audio:"We're a bit behind schedule, so we might need to move the deadline.", q:"Écoute : quelle est la situation du projet ?", opts:["Il est en avance","Il est terminé","Il est en retard et l'échéance pourrait être repoussée","Il est annulé"], correct:2, why:"« behind schedule » = en retard ; « we might need to move the deadline » = on devra peut-être repousser l'échéance." },
      { cat:"oral", audio:"Before we wrap up, is there anything else anyone would like to bring up?", q:"Écoute : à quel moment de la réunion sommes-nous ?", opts:["Au tout début","À la fin","Pendant une pause","Avant la réunion"], correct:1, why:"« Before we wrap up » = avant de conclure : on est à la fin de la réunion." },
      { cat:"oral", audio:"You don't have to stay late, but you must send me the report by nine tomorrow.", q:"Écoute : que doit absolument faire le collègue ?", opts:["Rester tard ce soir","Arriver à neuf heures","Rien de particulier","Envoyer le rapport avant neuf heures demain"], correct:3, why:"« you must send me the report by nine tomorrow » ; rester tard n'est pas obligatoire (« don't have to »)." },
      { cat:"oral", audio:"I'm responsible for training new staff, and I report to the HR director.", q:"Écoute : quelle est la responsabilité de la personne ?", opts:["Former les nouveaux employés","Recruter le directeur","Gérer la paie","Organiser les réunions"], correct:0, why:"« I'm responsible for training new staff » = je suis chargé(e) de former les nouveaux employés." },
      { cat:"comprehension", passage:"“Minutes — Monday team meeting. 1. The website launch is two weeks behind schedule. 2. Sara will look into the delay with the designers. 3. Karim will follow up with the client on Wednesday. Next meeting: Monday 10 a.m.”", q:"D'après le compte rendu, qui va relancer le client ?", opts:["Sara","Les designers","Karim","Le client lui-même"], correct:2, why:"« Karim will follow up with the client on Wednesday »." },
      { cat:"comprehension", passage:"“— I think we should hire a freelancer to help us meet the deadline. — That's a good idea, but we don't have much budget. — We might be able to share the cost with the marketing team. — Let's set up a call with them.”", q:"D'après le dialogue, quelle solution est retenue pour la suite ?", opts:["Annuler le projet","Organiser un appel avec l'équipe marketing","Repousser l'échéance","Embaucher deux freelances"], correct:1, why:"« Let's set up a call with them » = organisons un appel avec l'équipe marketing." },
      { cat:"comprehension", passage:"“(rappel) — Hello, I'm calling about my order. I think there's been a mistake: I was charged twice. — I'm so sorry. Would you mind holding for a moment? I'll put you through to our billing team.”", q:"D'après le dialogue, quel est le problème ?", opts:["La commande n'est pas arrivée","Le client a été débité deux fois","Le produit est en panne","Le client veut échanger un article"], correct:1, why:"« I was charged twice » = on m'a fait payer deux fois (rappel B1.4 : charge, Would you mind + -ing, put through)." },
      { cat:"comprehension", passage:"“(rappel) — Do you know when the new manager is starting? — Next Monday, I think. You haven't met her yet, have you? — No, not yet. I wonder what she's like.”", q:"D'après le dialogue, quand la nouvelle responsable commence-t-elle ?", opts:["Aujourd'hui","Lundi prochain","Elle a déjà commencé","On ne sait pas du tout"], correct:1, why:"« Next Monday, I think » (rappel B1.3 : question indirecte « when the new manager is starting » et tag « have you? »)." }
    ],

    PRON_VERBS: [
      {en:"I'm in charge of a team of six people.", fr:"Je suis responsable d'une équipe de six personnes."},
      {en:"We have to meet the deadline by Friday.", fr:"Nous devons respecter l'échéance d'ici vendredi."},
      {en:"You don't have to attend, but you should read the minutes.", fr:"Tu n'es pas obligé(e) d'y assister, mais tu devrais lire le compte rendu."},
      {en:"I'll look into it and follow up tomorrow.", fr:"Je vais me pencher sur la question et je te fais un retour demain."},
      {en:"Can I bring up one more point before we wrap up?", fr:"Je peux aborder un dernier point avant qu'on conclue ?"},
      {en:"He might be in a meeting — he must be very busy today.", fr:"Il est peut-être en réunion — il doit être très occupé aujourd'hui."}
    ],

    READING: [
      "Every Monday morning, our team has a short meeting to discuss the week ahead.",
      "Today, my line manager started by giving us a quick update on the new project.",
      "The bad news was that we were already a week behind schedule.",
      "One of our suppliers had delayed a delivery, and we had to deal with the consequences.",
      "I decided to bring up an idea I had been thinking about all weekend.",
      "I suggested splitting the project into two phases, so that we could meet the first deadline.",
      "At first, my colleagues weren't sure, but after some discussion, everyone agreed it might work.",
      "My manager asked me to look into the costs and to follow up with the supplier.",
      "Before we wrapped up, she thanked me for the suggestion, and I felt quite proud.",
      "After the meeting, I wrote the minutes and sent them to the whole team."
    ],
    GLOSS: [
      {en:"the week ahead", fr:"la semaine qui vient"},
      {en:"a supplier", fr:"un fournisseur"},
      {en:"to split (into)", fr:"diviser, découper (en)"},
      {en:"at first", fr:"au début, d'abord"},
      {en:"proud", fr:"fier / fière"}
    ],

    GRAMMAR1: {
      heading: "Obligation et permission : must, have to, don't have to, mustn't",
      lede: "Au travail, on parle sans cesse de ce qui est obligatoire, interdit ou facultatif. Quatre formes à bien distinguer — surtout les deux formes négatives, qui ne veulent pas du tout dire la même chose.",
      conj: [["Obligation (règle extérieure) →","have to","I have to wear a suit at work."],["Obligation (forte, écrite ou ressentie) →","must","I must finish this report today."],["Pas d'obligation (facultatif) →","don't have to","You don't have to come on Friday."],["Interdiction →","mustn't / can't","You mustn't park here."]],
      ruleHtml: "📖 <b>have to</b> = une obligation qui vient de l'extérieur (le règlement, le patron) ; <b>must</b> = une obligation forte, souvent écrite (consignes) ou que l'on s'impose. Au passé, on utilise <b>had to</b> pour les deux. À la forme négative, tout change : <b>mustn't</b> = <b>interdit</b>, <b>don't have to</b> = <b>pas nécessaire</b>. Pour la permission : <b>can</b> / <b>be allowed to</b> (« Are we allowed to work from home? »).",
      dialogueLede: "Premier jour dans une nouvelle entreprise :",
      dialogue: [
        {who:"you", en:"Do I have to be here at nine every day?", fr:"Est-ce que je dois être là à neuf heures tous les jours ?"},
        {who:"them", en:"No, you don't have to — hours are flexible. But you mustn't miss the Monday meeting.", fr:"Non, ce n'est pas obligatoire — les horaires sont flexibles. Mais tu ne dois surtout pas manquer la réunion du lundi."}
      ],
      whyLabel: "« Tu ne dois pas » : le grand piège",
      whyText: "Le français « tu ne dois pas » est ambigu, l'anglais non. <b>You mustn't come</b> = tu n'as pas le droit de venir. <b>You don't have to come</b> = tu n'es pas obligé(e) de venir (mais tu peux). Confondre les deux peut créer de vrais malentendus au bureau ! Autre réflexe : jamais de <b>to</b> après must (« I must <b>to</b> go » est faux), mais toujours <b>to</b> après have (« I have <b>to</b> go »)."
    },
    GRAMMAR2: {
      heading: "Conseil et probabilité : should, might, must, can't",
      dialogueLede: "Deux collègues cherchent un troisième, introuvable :",
      dialogue: [
        {who:"them", en:"Have you seen Paul? He isn't answering his phone.", fr:"Tu as vu Paul ? Il ne répond pas au téléphone."},
        {who:"you", en:"He might be with a client. You should send him an email.", fr:"Il est peut-être avec un client. Tu devrais lui envoyer un e-mail."}
      ],
      ruleHtml: "💭 Pour <b>conseiller</b> : <b>should</b> / <b>ought to</b> (« You should ask for a raise »). Pour exprimer une <b>probabilité</b>, du plus sûr au moins sûr : <b>must</b> (déduction quasi certaine : « He must be busy ») → <b>may</b> / <b>might</b> / <b>could</b> (peut-être : « She might be in a meeting ») → <b>can't</b> (quasi impossible : « That can't be right »). Tous ces modaux sont suivis de la <b>base verbale</b>, sans <b>to</b> (sauf ought to).",
      whyLabel: "« Must » n'est pas toujours une obligation",
      whyText: "Les francophones connaissent <b>must</b> comme « devoir » (obligation), mais il sert aussi à <b>déduire</b>, exactement comme « il doit être fatigué » en français : « You've worked all night — you <b>must</b> be exhausted. » Le contraire de ce must de déduction n'est <b>pas</b> mustn't, mais <b>can't</b> : « He <b>can't</b> be at the office, I've just seen him at the station. »"
    },

    REVIEW: [
      { q:"“Would you mind ___ the door?”", opts:["to close","closing"], correct:1, fb:"« Would you mind » est toujours suivi de -ing. (rappel B1.4)" },
      { q:"Quelle demande est la plus polie pour obtenir une faveur ?", opts:["I want a refund.","Would it be possible to get a refund?"], correct:1, fb:"« Would it be possible to...? » est la formule la plus polie. (rappel B1.4)" },
      { q:"“Do you want ___ a taxi?” — proposer son aide.", opts:["me to call","that I call"], correct:0, fb:"« want + personne + to + verbe » : « Do you want me to call...? ». (rappel B1.4)" },
      { q:"Comment dit-on « un ticket de caisse » ?", opts:["A receipt","A recipe"], correct:0, fb:"« A receipt » (le p est muet) ; « a recipe » = une recette de cuisine. (rappel B1.4)" },
      { q:"Comment signaler une erreur poliment ?", opts:["You made a mistake.","I think there's been a mistake."], correct:1, fb:"« I think there's been a mistake » signale le problème sans accuser. (rappel B1.4)" }
    ],

    CULTURE_NOTE: {
      icon: "💼",
      title: "Note culturelle — décoder l'anglais du bureau",
      html: "Dans le monde du travail britannique, on critique rarement de front. « <b>That's an interesting idea</b> » peut vouloir dire « je ne suis pas convaincu(e) », « <b>I'd suggest...</b> » est souvent une consigne polie, et « <b>quite good</b> » signifie plutôt « correct, sans plus » (alors qu'aux États-Unis, « quite good » est un vrai compliment). On utilise aussi très vite les <b>prénoms</b>, même avec la direction, sans que cela signifie une relation familière. Enfin, une réunion commence presque toujours par quelques minutes de <b>small talk</b> (week-end, météo) avant d'entrer dans le vif du sujet : les sauter peut paraître froid."
    },

    NEXT_PREVIEW: "B1.6 (Travel Without Panic) : gérer un imprévu de voyage du début à la fin — aéroport, hôtel, train, location de voiture, bagages perdus, retards — avec will, going to, le présent continu pour le futur et une première approche des conditionnels.",

    META: { vocabTitle: "L'anglais au travail (B1.5)", lectureTitle: "La réunion du lundi", bilanTitle: "Bravo, tu sais maintenant parler de ton travail et participer à une réunion en anglais !", pronLabel: "Modaux : obligation, permission, conseil et probabilité", todayLede: "parler de ton travail et de tes responsabilités, participer à une réunion, proposer une solution et en faire le compte rendu — s'appuie sur B1.4 (demandes polies) et B1.1 (parler de soi)" }
  };

  // B1.6 — Travel Without Panic — s'appuie sur B1.4 (demandes polies, imprévus) et B1.5 (modaux)
  LESSONS_EXT[32] = {
    code: "B1.6", level: "B1",
    VOCAB: [
      {block:"À l'aéroport", en:"The check-in desk", ipa:"/ðə ˈtʃek ɪn desk/", fr:"Le comptoir d'enregistrement", note:"« to check in » = s'enregistrer (à l'aéroport ou à l'hôtel) ; en ligne : « online check-in »."},
      {block:"À l'aéroport", en:"A boarding pass", ipa:"/ə ˈbɔːdɪŋ pɑːs/", fr:"Une carte d'embarquement", note:"« Can I see your boarding pass and passport, please? » — phrase entendue à chaque contrôle."},
      {block:"À l'aéroport", en:"The gate", ipa:"/ðə ɡeɪt/", fr:"La porte d'embarquement", note:"« The flight is boarding at gate 12 » ; « the gate has changed » = changement de porte."},
      {block:"À l'aéroport", en:"Hand luggage", ipa:"/hænd ˈlʌɡɪdʒ/", fr:"Le bagage cabine", note:"Indénombrable : « two pieces of luggage », jamais « two luggages ». US : « carry-on »."},
      {block:"À l'aéroport", en:"A connecting flight", ipa:"/ə kəˈnektɪŋ flaɪt/", fr:"Un vol de correspondance", note:"On dit aussi « a connection » ; « to miss a connection » = rater sa correspondance."},
      {block:"À l'aéroport", en:"To board", ipa:"/tə bɔːd/", fr:"Embarquer, monter à bord", note:"« Passengers are now boarding » ; « to get on » (a plane, a train) est plus familier."},
      {block:"Retards et imprévus", en:"Delayed", ipa:"/dɪˈleɪd/", fr:"Retardé(e), en retard", note:"« My flight is delayed by two hours » ; le nom est « a delay »."},
      {block:"Retards et imprévus", en:"Cancelled", ipa:"/ˈkænsəld/", fr:"Annulé(e)", note:"UK : « cancelled » (deux l) ; US : « canceled » (un seul l)."},
      {block:"Retards et imprévus", en:"Lost luggage", ipa:"/lɒst ˈlʌɡɪdʒ/", fr:"Bagages perdus", note:"Le guichet s'appelle souvent « Lost Luggage » ou « Baggage Services » à l'aéroport."},
      {block:"Retards et imprévus", en:"Baggage reclaim", ipa:"/ˈbæɡɪdʒ rɪˈkleɪm/", fr:"La récupération des bagages", note:"Le tapis roulant à l'arrivée ; US : « baggage claim »."},
      {block:"Retards et imprévus", en:"To rebook", ipa:"/tə ˌriːˈbʊk/", fr:"Changer de réservation, rebooker", note:"« Could you rebook me on the next flight? » = pourriez-vous me mettre sur le prochain vol ?"},
      {block:"Retards et imprévus", en:"A voucher", ipa:"/ə ˈvaʊtʃə/", fr:"Un bon, un avoir", note:"« a meal voucher » = un bon repas, souvent offert en cas de long retard."},
      {block:"À l'hôtel", en:"A booking", ipa:"/ə ˈbʊkɪŋ/", fr:"Une réservation", note:"UK : « a booking » ; US : « a reservation ». « I have a booking under the name Martin »."},
      {block:"À l'hôtel", en:"To check out", ipa:"/tə tʃek aʊt/", fr:"Libérer la chambre, régler la note", note:"« What time is check-out? » = à quelle heure faut-il libérer la chambre ?"},
      {block:"À l'hôtel", en:"Fully booked", ipa:"/ˈfʊli bʊkt/", fr:"Complet", note:"« I'm afraid we're fully booked tonight » = je crains que nous soyons complets ce soir."},
      {block:"À l'hôtel", en:"A confirmation number", ipa:"/ə ˌkɒnfəˈmeɪʃən ˈnʌmbə/", fr:"Un numéro de réservation/confirmation", note:"Garde-le toujours à portée de main : c'est la première chose qu'on te demandera en cas de problème."},
      {block:"Train et location de voiture", en:"A platform", ipa:"/ə ˈplætfɔːm/", fr:"Un quai (de gare)", note:"« The train to York leaves from platform 4 ». US : « track »."},
      {block:"Train et location de voiture", en:"Car hire", ipa:"/ˈkɑː haɪə/", fr:"La location de voiture", note:"UK : « car hire », « to hire a car » ; US : « car rental », « to rent a car »."},
      {block:"Train et location de voiture", en:"Insurance", ipa:"/ɪnˈʃʊərəns/", fr:"Une assurance", note:"Indénombrable : « Is insurance included? » = l'assurance est-elle comprise ?"},
      {block:"Train et location de voiture", en:"Fuel", ipa:"/ˈfjuːəl/", fr:"Le carburant", note:"UK : « petrol » ; US : « gas ». « full to full » = on rend la voiture avec le plein."},
      {block:"Verbes clés (B1.6)", en:"Catch", ipa:"/kætʃ/", fr:"Prendre, attraper (un transport)", note:"« I caught the last train » = j'ai eu le dernier train de justesse. Passé : caught /kɔːt/."},
      {block:"Verbes clés (B1.6)", en:"Miss", ipa:"/mɪs/", fr:"Rater, manquer", note:"« I missed my flight » = j'ai raté mon vol. (Rien à voir avec « manquer à quelqu'un » ici.)"},
      {block:"Verbes clés (B1.6)", en:"Land", ipa:"/lænd/", fr:"Atterrir", note:"« We landed an hour late » ; le contraire : « take off »."},
      {block:"Verbes clés (B1.6)", en:"Take off", ipa:"/teɪk ɒf/", fr:"Décoller", note:"« The plane took off on time » ; nom : « take-off » (le décollage)."},
      {block:"Verbes clés (B1.6)", en:"Pick up", ipa:"/pɪk ʌp/", fr:"Récupérer, aller chercher", note:"« I'll pick up the car at the airport » ; « Can you pick me up? » = tu peux venir me chercher ?"}
    ],
    MEM_WORDS: [1,6,9,10,14,21], // A boarding pass, Delayed, Baggage reclaim, To rebook, Fully booked, Miss

    MINI_CHECKS: [
      { q:"“Look at those black clouds! It ___ rain.” — on voit les signes.", opts:["will","is going to","is raining"], correct:1, fb:"« going to » pour une prédiction fondée sur ce qu'on voit maintenant." },
      { q:"“If the train ___ late, I'll miss my connection.”", opts:["will be","is","would be"], correct:1, fb:"Premier conditionnel : « If + présent, will + verbe ». Jamais « will » après « if »." },
      { q:"Comment dit-on « complet » à l'hôtel ?", opts:["Fully booked","Full of booking","Completely booked up of"], correct:0, fb:"« We're fully booked » = nous sommes complets." },
      { q:"“I ___ my flight because of the traffic.”", opts:["lost","missed","failed"], correct:1, fb:"« to miss a flight/train » = rater son vol/train. « lose » = perdre un objet." }
    ],

    ROUNDS: [
      { bank:["cancelled","flight","My","been","has","."], answer:"my flight has been cancelled .", display:"My flight has been cancelled.", fr:"Mon vol a été annulé." },
      { bank:["to","morning","I'm","tomorrow","flying","Dublin","."], answer:"i'm flying to dublin tomorrow morning .", display:"I'm flying to Dublin tomorrow morning.", fr:"Je prends l'avion pour Dublin demain matin." },
      { bank:["next","take","I'll","train","the","."], answer:"i'll take the next train .", display:"I'll take the next train.", fr:"Je vais prendre le prochain train." },
      { bank:["car","to","We're","a","hire","going","."], answer:"we're going to hire a car .", display:"We're going to hire a car.", fr:"On va louer une voiture." },
      { bank:["late","miss","If","connection","the","my","is","train","I'll","."], answer:"if the train is late i'll miss my connection .", display:"If the train is late, I'll miss my connection.", fr:"Si le train est en retard, je vais rater ma correspondance." },
      { bank:["the","rebook","Could","flight","me","next","you","on","?"], answer:"could you rebook me on the next flight ?", display:"Could you rebook me on the next flight?", fr:"Pourriez-vous me mettre sur le prochain vol ?" },
      { bank:["arrived","suitcase","My","hasn't","."], answer:"my suitcase hasn't arrived .", display:"My suitcase hasn't arrived.", fr:"Ma valise n'est pas arrivée." },
      { bank:["from","platform","Which","train","leave","the","does","?"], answer:"which platform does the train leave from ?", display:"Which platform does the train leave from?", fr:"De quel quai part le train ?" },
      { bank:["out","please","I'd","check","to","like","."], answer:"i'd like to check out please .", display:"I'd like to check out, please.", fr:"J'aimerais régler ma note et libérer la chambre, s'il vous plaît." },
      { bank:["hurry","flight","Unless","miss","you","the","you'll","."], answer:"unless you hurry you'll miss the flight .", display:"Unless you hurry, you'll miss the flight.", fr:"Si tu ne te dépêches pas, tu vas rater l'avion." }
    ],

    QUIZ: [
      { cat:"ecrit", q:"“The flight's cancelled? OK, I ___ the train instead.” — décision prise sur le moment.", opts:["'m going to take","'ll take","take"], correct:1, why:"« will » pour une décision spontanée, prise au moment où l'on parle." },
      { cat:"ecrit", q:"“We've already booked everything: we ___ to Rome on Friday.” — arrangement fixé.", opts:["are flying","will fly","fly usually"], correct:0, why:"Présent continu pour un projet organisé, avec date et réservation : « We're flying to Rome on Friday »." },
      { cat:"ecrit", q:"“The train ___ at 7:15 tomorrow morning.” — horaire officiel.", opts:["is going to leave","will leaving","leaves"], correct:2, why:"Présent simple pour un horaire fixe (train, avion, cours) : « The train leaves at 7:15 »." },
      { cat:"ecrit", q:"“If my suitcase ___ lost, I'll buy some clothes at the airport.”", opts:["will be","is","would be"], correct:1, why:"Premier conditionnel : « If + présent simple, will + base ». Pas de will après if." },
      { cat:"ecrit", q:"“I ___ you as soon as I land.”", opts:["'ll call","call","'m calling"], correct:0, why:"Dans la principale : « will » ; après « as soon as », le présent (« as soon as I land »)." },
      { cat:"ecrit", q:"“___ you have a confirmation number, they won't give you the room.” — si tu n'as pas...", opts:["If","Unless","When"], correct:1, why:"« Unless » = « if... not » : à moins que tu aies un numéro de confirmation." },
      { cat:"ecrit", q:"Comment dit-on « la récupération des bagages » (UK) ?", opts:["Baggage reclaim","Luggage return","Bag recovery"], correct:0, why:"« Baggage reclaim » (UK) / « baggage claim » (US)." },
      { cat:"ecrit", q:"Comment dit-on « j'ai deux bagages » ?", opts:["I have two luggages.","I have two pieces of luggage.","I have two luggage."], correct:1, why:"« luggage » est indénombrable : on compte avec « pieces of luggage » (ou « two bags »)." },
      { cat:"ecrit", q:"L'avion quitte le sol. En anglais, il...", opts:["lands","boards","takes off"], correct:2, why:"« take off » = décoller ; « land » = atterrir ; « board » = embarquer." },
      { cat:"ecrit", q:"En Angleterre, tu veux louer une voiture. Tu cherches le comptoir :", opts:["Car hire","Car lend","Car borrowing"], correct:0, why:"UK : « car hire » ; US : « car rental »." },
      { cat:"oral", audio:"We regret to announce that the 10:40 flight to Madrid is delayed by approximately two hours.", q:"Écoute : que se passe-t-il ?", opts:["Le vol est annulé","Le vol est retardé d'environ deux heures","Le vol part plus tôt","La porte a changé"], correct:1, why:"« is delayed by approximately two hours » = retardé d'environ deux heures." },
      { cat:"oral", audio:"I'm afraid we're fully booked tonight, but our sister hotel might have a room.", q:"Écoute : que propose le réceptionniste ?", opts:["Une chambre plus chère","Un remboursement","Un hôtel partenaire qui a peut-être une chambre","De revenir demain"], correct:2, why:"« fully booked » = complet ; « our sister hotel might have a room » = l'hôtel partenaire a peut-être une chambre." },
      { cat:"oral", audio:"If you miss your connection, go to the transfer desk and they'll rebook you.", q:"Écoute : que faire si on rate sa correspondance ?", opts:["Acheter un nouveau billet","Rentrer chez soi","Attendre à la porte","Aller au comptoir de transit pour être replacé"], correct:3, why:"« go to the transfer desk and they'll rebook you » = ils vous mettront sur un autre vol." },
      { cat:"oral", audio:"The train for Edinburgh is now leaving from platform nine, not platform six.", q:"Écoute : quelle information est donnée ?", opts:["Le quai du train a changé","Le train est annulé","Le train a du retard","Le train est complet"], correct:0, why:"« now leaving from platform nine, not platform six » = changement de quai." },
      { cat:"comprehension", passage:"“— Hi, my suitcase didn't arrive on the flight from Lisbon. — I'm sorry about that. Could you fill in this form? We'll deliver it to your hotel as soon as it arrives. — How long will it take? — It usually takes about 24 hours.”", q:"D'après le dialogue, que va-t-il se passer ?", opts:["La valise sera livrée à l'hôtel","Le passager doit revenir la chercher","La valise est définitivement perdue","Le passager sera remboursé tout de suite"], correct:0, why:"« We'll deliver it to your hotel as soon as it arrives »." },
      { cat:"comprehension", passage:"“Our train was cancelled because of a strike, so we're going to hire a car and drive to Bath instead. If the traffic is OK, we'll arrive before dinner.”", q:"D'après le texte, comment vont-ils voyager ?", opts:["En train, plus tard","En voiture de location","En bus","En avion"], correct:1, why:"« we're going to hire a car and drive to Bath instead »." },
      { cat:"comprehension", passage:"“(rappel) — Our flight's been delayed again. — We should ask for a meal voucher. — Good idea. And you don't have to stay with the bags — I'll watch them.”", q:"D'après le dialogue, que conseille la deuxième personne ?", opts:["De rester près des bagages","De demander un bon repas","De changer de vol","De rentrer à l'hôtel"], correct:1, why:"« We should ask for a meal voucher » (rappel B1.5 : should = conseil, don't have to = pas obligatoire)." },
      { cat:"comprehension", passage:"“(rappel) — Would it be possible to change my room? The air conditioning is out of order. — I'm so sorry. Shall I send someone to look at it, or would you prefer another room? — Another room, please.”", q:"D'après le dialogue, que choisit le client ?", opts:["Qu'on répare la climatisation","Un remboursement","Une autre chambre","De quitter l'hôtel"], correct:2, why:"« Another room, please » (rappel B1.4 : Would it be possible to...?, out of order, Shall I...?)." }
    ],

    PRON_VERBS: [
      {en:"My flight has been cancelled. Could you rebook me on the next one?", fr:"Mon vol a été annulé. Pourriez-vous me mettre sur le prochain ?"},
      {en:"I'm flying to Dublin tomorrow, and my sister is picking me up.", fr:"Je prends l'avion pour Dublin demain, et ma sœur vient me chercher."},
      {en:"If the train is late, I'll miss my connection.", fr:"Si le train est en retard, je vais rater ma correspondance."},
      {en:"I have a booking under the name Martin.", fr:"J'ai une réservation au nom de Martin."},
      {en:"My suitcase hasn't arrived — where's the lost luggage desk?", fr:"Ma valise n'est pas arrivée — où est le guichet des bagages perdus ?"},
      {en:"Don't worry, I'll take a taxi.", fr:"Ne t'inquiète pas, je vais prendre un taxi."}
    ],

    READING: [
      "Last spring, I was flying from Paris to Edinburgh with a connecting flight in London.",
      "My first flight took off an hour late, so I knew I was going to miss my connection.",
      "As soon as we landed, I went straight to the transfer desk and explained the situation.",
      "The agent was very calm: “Don't worry, I'll rebook you on the evening flight.”",
      "She also gave me a meal voucher, which I used for a sandwich and a coffee.",
      "When I finally arrived in Edinburgh, my suitcase wasn't on the belt at baggage reclaim.",
      "I filled in a form, and they promised to deliver it to my hotel the next day.",
      "At the hotel, I called the reception to say I was arriving late, and they kept my room.",
      "The next morning, my suitcase was waiting for me at reception.",
      "Since that trip, I always pack a toothbrush and a spare T-shirt in my hand luggage."
    ],
    GLOSS: [
      {en:"the transfer desk", fr:"le comptoir des correspondances"},
      {en:"an agent", fr:"un(e) agent(e), un(e) employé(e) au guichet"},
      {en:"the belt", fr:"le tapis roulant (à bagages)"},
      {en:"to pack", fr:"mettre dans sa valise, faire sa valise"},
      {en:"spare", fr:"de rechange"}
    ],

    GRAMMAR1: {
      heading: "Parler du futur : will, going to, présent continu",
      lede: "L'anglais n'a pas un seul futur, mais plusieurs formes selon ce qu'on veut dire : une décision sur le moment, une intention, un rendez-vous organisé ou un horaire officiel.",
      conj: [["Décision spontanée, promesse →","will + base","The bus is late? I'll take a taxi."],["Intention, projet décidé →","be going to + base","We're going to visit Scotland this summer."],["Arrangement fixé (date, réservation) →","présent continu","I'm flying to Rome on Friday."],["Horaire officiel →","présent simple","The train leaves at 7:15."]],
      ruleHtml: "📖 <b>will</b> = une décision prise <b>au moment où l'on parle</b>, une offre ou une promesse (« I'll help you »). <b>going to</b> = une <b>intention</b> déjà décidée, ou une prédiction basée sur ce qu'on voit (« Look, we're going to miss the train! »). Le <b>présent continu</b> = un <b>projet organisé</b>, avec des billets, une date, d'autres personnes (« I'm meeting Sam at the airport »). Le <b>présent simple</b> = les <b>horaires</b> (trains, vols, cours).",
      dialogueLede: "À la gare, le train est annulé :",
      dialogue: [
        {who:"them", en:"I'm afraid the 9:30 to Manchester has been cancelled.", fr:"Je crains que le train de 9 h 30 pour Manchester ait été annulé."},
        {who:"you", en:"Oh no! I'm meeting a client at noon. OK, I'll take the 10:15 — what time does it arrive?", fr:"Oh non ! J'ai rendez-vous avec un client à midi. D'accord, je prendrai celui de 10 h 15 — à quelle heure arrive-t-il ?"}
      ],
      whyLabel: "Le réflexe « will » partout",
      whyText: "Les francophones utilisent <b>will</b> pour tout le futur, parce que c'est « le futur » qu'on a appris à l'école. Mais « <b>I will fly</b> to Rome on Friday » sonne bizarre quand le billet est déjà réservé : un anglophone dira « <b>I'm flying</b> to Rome on Friday ». À l'inverse, pour une décision soudaine, on ne dit pas « I'm going to take a taxi » mais « <b>I'll</b> take a taxi ». Retiens : décidé <b>maintenant</b> → will ; décidé <b>avant</b> → going to ou présent continu."
    },
    GRAMMAR2: {
      heading: "Le premier conditionnel : « If..., I'll... »",
      dialogueLede: "Au comptoir d'enregistrement, avec une correspondance serrée :",
      dialogue: [
        {who:"you", en:"What will happen if my first flight is late?", fr:"Que se passera-t-il si mon premier vol est en retard ?"},
        {who:"them", en:"If you miss your connection, we'll rebook you on the next flight.", fr:"Si vous ratez votre correspondance, nous vous mettrons sur le vol suivant."}
      ],
      ruleHtml: "💭 Le premier conditionnel parle d'une situation <b>possible et réaliste</b> dans le futur, et de sa conséquence : <b>If + présent simple, will + base verbale</b> (« If it rains, we'll stay at the hotel »). L'ordre peut s'inverser, sans virgule : « We'll stay at the hotel if it rains ». <b>Unless</b> = if... not (« Unless you hurry, you'll miss the train »). La même règle s'applique après <b>when</b>, <b>as soon as</b>, <b>before</b>, <b>after</b> : « I'll call you <b>as soon as I land</b> ».",
      whyLabel: "Jamais « will » après « if »",
      whyText: "Le français met un futur après « quand » (« je t'appellerai quand j'<b>arriverai</b> »), ce qui pousse à dire « when I <b>will</b> arrive » ou « if it <b>will</b> rain » — c'est faux en anglais. Après <b>if</b>, <b>when</b>, <b>as soon as</b>, <b>unless</b>, on met le <b>présent</b> : « I'll call you when I <b>arrive</b> », « If the flight <b>is</b> late, I'll text you ». Le will ne va que dans l'autre moitié de la phrase."
    },

    REVIEW: [
      { q:"“You ___ come to the meeting — it's optional.”", opts:["mustn't","don't have to"], correct:1, fb:"« don't have to » = pas obligatoire ; « mustn't » = interdit. (rappel B1.5)" },
      { q:"“She's been travelling all day. She ___ be exhausted.” — déduction.", opts:["must","should"], correct:0, fb:"« must » pour une déduction quasi certaine. (rappel B1.5)" },
      { q:"“We're ___ the problem and will get back to you.”", opts:["looking into","bringing up"], correct:0, fb:"« look into » = examiner, se pencher sur. (rappel B1.5)" },
      { q:"Comment dit-on « assister à une réunion » ?", opts:["To attend a meeting","To wait a meeting"], correct:0, fb:"« attend » = assister à (faux ami). (rappel B1.5)" },
      { q:"Comment dit-on « respecter une échéance » ?", opts:["To respect a deadline","To meet a deadline"], correct:1, fb:"On « meet » une deadline. (rappel B1.5)" }
    ],

    CULTURE_NOTE: {
      icon: "🧳",
      title: "Note culturelle — voyager entre anglais britannique et américain",
      html: "En voyage, le vocabulaire change d'un côté à l'autre de l'Atlantique : au Royaume-Uni on prend un <b>single</b> ou un <b>return ticket</b>, on fait la <b>queue</b>, on prend le <b>lift</b> et on met du <b>petrol</b> dans une voiture de <b>car hire</b> ; aux États-Unis, ce sont un <b>one-way</b> ou <b>round-trip ticket</b>, la <b>line</b>, l'<b>elevator</b>, le <b>gas</b> et la <b>car rental</b>. Tout le monde te comprendra dans les deux cas. Autre réflexe utile : en cas de long retard ou d'annulation d'un vol au départ de l'Union européenne ou du Royaume-Uni, la compagnie doit t'apporter une <b>assistance</b> (repas, hôtel si besoin) — n'hésite pas à demander poliment un <b>meal voucher</b>, et garde toujours tes <b>reçus</b>."
    },

    NEXT_PREVIEW: "B1.7 (Say What You Think) : donner ton opinion, expliquer pourquoi, être d'accord ou pas d'accord et donner un exemple — avec I think…, From my point of view…, As far as I'm concerned…, des connecteurs logiques et des comparatifs.",

    META: { vocabTitle: "Voyager sans stress (B1.6)", lectureTitle: "Une correspondance ratée", bilanTitle: "Bravo, tu sais maintenant gérer un imprévu de voyage du début à la fin !", pronLabel: "Le futur (will, going to, présent continu) et le premier conditionnel", todayLede: "gérer un imprévu de voyage (vol retardé, correspondance ratée, bagage perdu, hôtel complet) et parler de tes projets au futur — s'appuie sur B1.4 (demandes polies) et B1.5 (modaux)" }
  };

  // B1.7 — Say What You Think — s'appuie sur B1.6 (Travel Without Panic) et A2.11 (opinions simples)
  LESSONS_EXT[33] = {
    code: "B1.7", level: "B1",
    VOCAB: [
      {block:"Donner son opinion", en:"I believe (that)...", ipa:"/aɪ bɪˈliːv ðæt/", fr:"Je crois que..., je suis convaincu(e) que...", note:"Plus fort et plus sérieux que « I think » : on l'utilise pour une conviction, pas pour une impression passagère."},
      {block:"Donner son opinion", en:"From my point of view", ipa:"/frɒm maɪ pɔɪnt əv vjuː/", fr:"De mon point de vue", note:"Toujours « from », jamais « in my point of view » : erreur très fréquente chez les francophones."},
      {block:"Donner son opinion", en:"As far as I'm concerned", ipa:"/æz fɑːr æz aɪm kənˈsɜːrnd/", fr:"En ce qui me concerne, pour ma part", note:"Affirme clairement qu'il s'agit de SON avis personnel — souvent en début de phrase, suivi d'une virgule."},
      {block:"Donner son opinion", en:"I tend to think (that)...", ipa:"/aɪ tɛnd tə θɪŋk/", fr:"J'ai tendance à penser que...", note:"Une opinion prudente, nuancée : parfait pour un sujet délicat où l'on ne veut pas paraître trop catégorique."},
      {block:"Donner son opinion", en:"It seems to me that...", ipa:"/ɪt siːmz tə miː ðæt/", fr:"Il me semble que...", note:"Présente une impression plutôt qu'une certitude — très naturel à l'oral."},
      {block:"Donner son opinion", en:"I'm convinced that...", ipa:"/aɪm kənˈvɪnst ðæt/", fr:"Je suis convaincu(e) que...", note:"L'opinion la plus forte de la liste : à réserver aux sujets sur lesquels on a vraiment réfléchi."},
      {block:"Être d'accord ou pas", en:"I couldn't agree more.", ipa:"/aɪ ˈkʊdənt əˈɡriː mɔːr/", fr:"Je suis entièrement d'accord.", note:"Malgré la négation, c'est un accord TOTAL : « je ne pourrais pas être plus d'accord »."},
      {block:"Être d'accord ou pas", en:"I see your point, but...", ipa:"/aɪ siː jɔːr pɔɪnt bʌt/", fr:"Je comprends ton argument, mais...", note:"La façon la plus polie d'exprimer un désaccord : on reconnaît d'abord l'idée de l'autre."},
      {block:"Être d'accord ou pas", en:"I'm not so sure about that.", ipa:"/aɪm nɒt səʊ ʃʊər əˈbaʊt ðæt/", fr:"Je n'en suis pas si sûr(e).", note:"Désaccord adouci, très britannique — en réalité, la personne n'est souvent pas d'accord du tout."},
      {block:"Être d'accord ou pas", en:"That's true, but...", ipa:"/ðæts truː bʌt/", fr:"C'est vrai, mais...", note:"On concède un point avant d'apporter une nuance ou un contre-argument."},
      {block:"Être d'accord ou pas", en:"I'm afraid I disagree.", ipa:"/aɪm əˈfreɪd aɪ ˌdɪsəˈɡriː/", fr:"Je crains de ne pas être d'accord.", note:"« I'm afraid » n'exprime pas la peur ici : il adoucit une nouvelle désagréable, comme « malheureusement »."},
      {block:"Justifier et illustrer", en:"For instance", ipa:"/fər ˈɪnstəns/", fr:"Par exemple", note:"Synonyme un peu plus soutenu de « for example » — pratique pour ne pas se répéter."},
      {block:"Justifier et illustrer", en:"Such as", ipa:"/sʌtʃ æz/", fr:"Comme, tel(le) que", note:"Introduit une liste d'exemples dans la phrase : « apps such as Instagram or TikTok »."},
      {block:"Justifier et illustrer", en:"On the other hand", ipa:"/ɒn ði ˈʌðər hænd/", fr:"D'un autre côté, en revanche", note:"Présente l'autre face d'un sujet. « On the one hand... on the other hand » = d'un côté... de l'autre."},
      {block:"Justifier et illustrer", en:"Whereas", ipa:"/weərˈæz/", fr:"Alors que, tandis que (opposition)", note:"Oppose deux idées dans la même phrase : « Some people love it, whereas others hate it »."},
      {block:"Justifier et illustrer", en:"Therefore", ipa:"/ˈðeəfɔːr/", fr:"Par conséquent, donc", note:"Plus soutenu que « so » : idéal pour une conclusion à l'écrit ou dans un exposé."},
      {block:"Sujets de société", en:"Society", ipa:"/səˈsaɪəti/", fr:"La société", note:"Sans article pour la société en général : « Technology has changed society », pas « the society »."},
      {block:"Sujets de société", en:"An issue", ipa:"/ən ˈɪʃuː/", fr:"Un problème, une question, un sujet (de débat)", note:"Faux ami : « issue » ne veut presque jamais dire « issue » (= « way out » ou « outcome »)."},
      {block:"Sujets de société", en:"Screen time", ipa:"/ˈskriːn taɪm/", fr:"Temps passé devant les écrans", note:"Sujet de débat très fréquent : « Children's screen time should be limited »."},
      {block:"Sujets de société", en:"Remote working", ipa:"/rɪˈməʊt ˈwɜːrkɪŋ/", fr:"Le télétravail", note:"On dit aussi « working from home » (WFH à l'écrit informel)."},
      {block:"Sujets de société", en:"The pros and cons", ipa:"/ðə prəʊz ən kɒnz/", fr:"Le pour et le contre", note:"« Let's weigh up the pros and cons » = pesons le pour et le contre."},
      {block:"Verbes clés (B1.7)", en:"Agree", ipa:"/əˈɡriː/", fr:"Être d'accord", note:"C'est un VERBE : « I agree », jamais « I am agree ». Au négatif : « I don't agree »."},
      {block:"Verbes clés (B1.7)", en:"Disagree", ipa:"/ˌdɪsəˈɡriː/", fr:"Ne pas être d'accord", note:"« I disagree with you about this » — « with » pour la personne, « about » pour le sujet."},
      {block:"Verbes clés (B1.7)", en:"Argue", ipa:"/ˈɑːrɡjuː/", fr:"Soutenir, affirmer (un point de vue) ; se disputer", note:"« Some people argue that... » = certains soutiennent que... ; mais « we argued » = on s'est disputés."},
      {block:"Verbes clés (B1.7)", en:"Convince", ipa:"/kənˈvɪns/", fr:"Convaincre", note:"« You've convinced me! » = tu m'as convaincu(e) ! — utile pour reconnaître un bon argument."},
      {block:"Verbes clés (B1.7)", en:"Doubt", ipa:"/daʊt/", fr:"Douter", note:"Le « b » est muet : /daʊt/. « I doubt it » = j'en doute."}
    ],
    MEM_WORDS: [1,2,6,14,17,21], // From my point of view, As far as I'm concerned, I couldn't agree more, Whereas, An issue, Agree

    MINI_CHECKS: [
      { q:"Comment dit-on « je suis d'accord » ?", opts:["I am agree","I agree","I'm agreeing"], correct:1, fb:"« Agree » est un verbe : « I agree ». « I am agree » est l'erreur francophone la plus célèbre !" },
      { q:"« I couldn't agree more » veut dire :", opts:["Je ne suis pas du tout d'accord","Je suis entièrement d'accord","Je ne peux pas répondre"], correct:1, fb:"Malgré la forme négative, c'est un accord total : « je ne pourrais pas être plus d'accord »." },
      { q:"“Cities are becoming ___ than they used to be.”", opts:["more expensive","expensiver","more expensiver"], correct:0, fb:"Adjectif long (3 syllabes et plus) : « more + adjectif + than »." },
      { q:"Quelle phrase est une opinion (et pas un fait) ?", opts:["Paris is the capital of France.","I tend to think Paris is too crowded.","Paris has about two million inhabitants."], correct:1, fb:"« I tend to think » signale une opinion personnelle ; les deux autres phrases peuvent être vérifiées : ce sont des faits." }
    ],

    ROUNDS: [
      { bank:["agree","completely","you","with","I","."], answer:"i completely agree with you .", display:"I completely agree with you.", fr:"Je suis complètement d'accord avec toi." },
      { bank:["view","too","of","is","my","From","it","expensive","point","."], answer:"from my point of view it is too expensive .", display:"From my point of view, it is too expensive.", fr:"De mon point de vue, c'est trop cher." },
      { bank:["point","your","I","but","see","disagree","I","."], answer:"i see your point but i disagree .", display:"I see your point, but I disagree.", fr:"Je comprends ton argument, mais je ne suis pas d'accord." },
      { bank:["think","to","tend","schools","later","I","start","should","."], answer:"i tend to think schools should start later .", display:"I tend to think schools should start later.", fr:"J'ai tendance à penser que l'école devrait commencer plus tard." },
      { bank:["more","couldn't","I","agree","."], answer:"i couldn't agree more .", display:"I couldn't agree more.", fr:"Je suis entièrement d'accord." },
      { bank:["than","reading","is","watching","TV","relaxing","more","."], answer:"reading is more relaxing than watching tv .", display:"Reading is more relaxing than watching TV.", fr:"Lire est plus reposant que regarder la télé." },
      { bank:["not","trains","planes","as","are","fast","as","."], answer:"trains are not as fast as planes .", display:"Trains are not as fast as planes.", fr:"Les trains ne sont pas aussi rapides que les avions." },
      { bank:["about","sure","not","I'm","that","so","."], answer:"i'm not so sure about that .", display:"I'm not so sure about that.", fr:"Je n'en suis pas si sûr(e)." },
      { bank:["concerned","As","it's","I'm","as","far","important","."], answer:"as far as i'm concerned it's important .", display:"As far as I'm concerned, it's important.", fr:"En ce qui me concerne, c'est important." },
      { bank:["convinced","You've","me","."], answer:"you've convinced me .", display:"You've convinced me.", fr:"Tu m'as convaincu(e)." }
    ],

    QUIZ: [
      { cat:"ecrit", q:"Comment dit-on « je ne suis pas d'accord » ?", opts:["I am not agree","I don't agree","I not agree"], correct:1, why:"« Agree » est un verbe : négation avec « don't ». On peut aussi dire « I disagree »." },
      { cat:"ecrit", q:"Comment dit-on « de mon point de vue » ?", opts:["In my point of view","According to me","From my point of view"], correct:2, why:"« From my point of view » ; « according to me » sonne étrange en anglais (on dit « according to » pour les AUTRES : « according to the news »)." },
      { cat:"ecrit", q:"“Some people love social media, ___ others find it stressful.” — opposition dans la même phrase.", opts:["whereas","therefore","such as"], correct:0, why:"« Whereas » oppose deux idées : alors que, tandis que." },
      { cat:"ecrit", q:"“Living in the countryside is ___ than living in a big city.”", opts:["more cheap","cheaper","most cheap"], correct:1, why:"Adjectif court (1 syllabe) : « -er + than » → « cheaper than »." },
      { cat:"ecrit", q:"“For me, the train is ___ convenient option.” — le plus pratique de tous.", opts:["the more","the most","most"], correct:1, why:"Superlatif d'un adjectif long : « the most + adjectif »." },
      { cat:"ecrit", q:"“Do you think it will rain?” — “Yes, I think ___.”", opts:["that yes","it","so"], correct:2, why:"« I think so » = je pense que oui. Jamais « I think that yes », calque direct du français." },
      { cat:"ecrit", q:"« An issue » veut dire :", opts:["Une sortie de secours","Un problème, un sujet de débat","Un résultat final"], correct:1, why:"Faux ami : « an issue » = un problème, une question. « Une issue » (sortie) = « a way out » ou « an exit »." },
      { cat:"ecrit", q:"Quelle expression présente l'opinion la plus PRUDENTE ?", opts:["I'm convinced that...","I tend to think that...","I'm absolutely sure that..."], correct:1, why:"« I tend to think » = j'ai tendance à penser : une opinion nuancée, pas catégorique." },
      { cat:"ecrit", q:"“Working from home is ___ tiring ___ commuting every day.” — pas aussi fatigant que.", opts:["not as / as","not so / than","less / as"], correct:0, why:"Comparatif d'égalité négatif : « not as + adjectif + as »." },
      { cat:"ecrit", q:"Comment dit-on « le pour et le contre » ?", opts:["The for and the against","The pros and cons","The yes and no"], correct:1, why:"« The pros and cons » = le pour et le contre ; « weigh up the pros and cons » = peser le pour et le contre." },
      { cat:"oral", audio:"I see your point, but I'm not so sure about that.", q:"Écoute : la personne est-elle d'accord ?", opts:["Oui, totalement","Non, elle exprime un désaccord poli","Elle n'a pas compris la question","Elle change de sujet"], correct:1, why:"« I see your point, but... » + « I'm not so sure » = désaccord poli et adouci." },
      { cat:"oral", audio:"As far as I'm concerned, screen time should be limited for children.", q:"Écoute : quelle est l'opinion de la personne ?", opts:["Les enfants devraient avoir plus d'écrans","Le temps d'écran des enfants devrait être limité","Les écrans sont indispensables à l'école","Elle n'a pas d'opinion"], correct:1, why:"« screen time should be limited for children » = le temps d'écran des enfants devrait être limité." },
      { cat:"oral", audio:"I couldn't agree more. That's exactly what I think.", q:"Écoute : comment la personne réagit-elle ?", opts:["Elle n'est pas d'accord","Elle hésite","Elle est entièrement d'accord","Elle demande une précision"], correct:2, why:"« I couldn't agree more » = je suis entièrement d'accord." },
      { cat:"oral", audio:"Trains are slower than planes, but they are much better for the environment.", q:"Écoute : quel avantage du train est mentionné ?", opts:["Il est plus rapide","Il est moins cher","Il est plus confortable","Il est meilleur pour l'environnement"], correct:3, why:"« much better for the environment » = bien meilleur pour l'environnement ; en revanche, le train est plus lent (« slower »)." },
      { cat:"comprehension", passage:"“Some people argue that remote working makes employees lazy. I'm not convinced. From my point of view, most people work harder at home, because they don't lose two hours a day commuting. For instance, my sister finishes her work earlier since she started working from home.”", q:"D'après le texte, que pense la personne du télétravail ?", opts:["Il rend les salariés paresseux","Les gens travaillent souvent plus efficacement chez eux","Il devrait être interdit","Il fait perdre deux heures par jour"], correct:1, why:"« I'm not convinced... most people work harder at home » ; l'exemple de la sœur illustre l'opinion." },
      { cat:"comprehension", passage:"“On the one hand, smartphones help us stay in touch with friends and family. On the other hand, many teenagers spend far too much time on them. Therefore, I tend to think schools should teach students how to use them wisely, rather than simply banning them.”", q:"D'après le texte, que propose la personne ?", opts:["Interdire les smartphones à l'école","Apprendre aux élèves à bien utiliser les smartphones","Donner un smartphone à chaque élève","Ne rien changer"], correct:1, why:"« schools should teach students how to use them wisely, rather than simply banning them »." },
      { cat:"comprehension", passage:"“(rappel) Our flight was cancelled, so we're going to take the train instead. It leaves at 7 tomorrow morning. If it's on time, we'll arrive in Edinburgh before lunch.”", q:"D'après le texte, que vont faire les voyageurs ?", opts:["Attendre un autre vol","Prendre le train à la place","Louer une voiture","Rester à l'hôtel une semaine"], correct:1, why:"« we're going to take the train instead » (rappel B1.6 : « going to » pour une décision prise, « if + présent, will » pour une condition réelle)." },
      { cat:"comprehension", passage:"“(rappel) Could you tell me whether there's a later train to London? I've missed my connection and I'm not sure where to go. Would it be possible to change my ticket?”", q:"D'après le texte, quel est le problème du voyageur ?", opts:["Il a perdu son billet","Il a raté sa correspondance","Son train est complet","Il s'est trompé de gare"], correct:1, why:"« I've missed my connection » = j'ai raté ma correspondance (rappel B1.6 et B1.4 : demandes polies, « Would it be possible... »)." }
    ],

    PRON_VERBS: [
      {en:"From my point of view, it's too expensive.", fr:"De mon point de vue, c'est trop cher."},
      {en:"As far as I'm concerned, family comes first.", fr:"En ce qui me concerne, la famille passe en premier."},
      {en:"I see your point, but I'm not so sure about that.", fr:"Je comprends ton argument, mais je n'en suis pas si sûr(e)."},
      {en:"I couldn't agree more.", fr:"Je suis entièrement d'accord."},
      {en:"Trains are slower than planes, but much greener.", fr:"Les trains sont plus lents que les avions, mais beaucoup plus écologiques."},
      {en:"Some people argue that it's a waste of time.", fr:"Certains soutiennent que c'est une perte de temps."}
    ],

    READING: [
      "Last week, our English club had a lively debate about social media.",
      "Tom started by saying that, as far as he was concerned, it was a complete waste of time.",
      "He argued that people spend more time scrolling than talking to each other.",
      "Maria saw his point, but she wasn't so sure about that.",
      "From her point of view, social media helps people stay in touch with friends who live abroad.",
      "For instance, she talks to her cousin in Canada almost every day.",
      "Then someone pointed out that there is a difference between a fact and an opinion.",
      "It is a fact that many teenagers use their phones for several hours a day, whereas saying it is harmful is an opinion.",
      "In the end, most of us agreed that social media is neither good nor bad in itself — it depends on how we use it.",
      "Tom laughed and admitted that Maria had almost convinced him."
    ],
    GLOSS: [
      {en:"lively", fr:"animé(e), vivant(e)"},
      {en:"to scroll", fr:"faire défiler (un écran)"},
      {en:"to point out", fr:"faire remarquer, souligner"},
      {en:"harmful", fr:"nocif, nuisible"},
      {en:"neither... nor...", fr:"ni... ni..."},
      {en:"to admit", fr:"admettre, reconnaître"}
    ],

    GRAMMAR1: {
      heading: "Les structures d'opinion : du plus prudent au plus affirmé",
      lede: "À l'A2, tu disais « I think » et « in my opinion ». Au B1, tu choisis ta formule selon ton degré de certitude : une impression, une tendance, une conviction. C'est ce choix qui rend une opinion plus nuancée et plus convaincante.",
      conj: [["Impression →","It seems to me that...","It seems to me that people read less."],["Opinion prudente →","I tend to think (that)...","I tend to think schools should start later."],["Opinion personnelle affirmée →","As far as I'm concerned, ...","As far as I'm concerned, it's a waste of time."],["Conviction forte →","I'm convinced / I believe that...","I'm convinced that education is the key."]],
      ruleHtml: "📖 Pour être d'accord : « I <b>agree</b> » (verbe !), « I <b>couldn't agree more</b> », « That's <b>true</b> ». Pour ne pas l'être poliment : « I <b>see your point, but</b>... », « I'm <b>not so sure</b> about that », « I'm <b>afraid I disagree</b> ». Trois calques du français à bannir : « <b>I am agree</b> » → « I agree » ; « <b>according to me</b> » → « in my opinion / from my point of view » ; « <b>I think that yes</b> » → « I think <b>so</b> » (et « I don't think so » pour le contraire).",
      dialogueLede: "Deux collègues discutent du télétravail :",
      dialogue: [
        {who:"them", en:"I think remote working is the future. Don't you agree?", fr:"Je pense que le télétravail est l'avenir. Tu n'es pas d'accord ?"},
        {who:"you", en:"I see your point, but I tend to think people need to meet in person too.", fr:"Je comprends ton argument, mais j'ai tendance à penser que les gens ont aussi besoin de se voir en vrai."}
      ],
      whyLabel: "Pourquoi « I am agree » est faux",
      whyText: "En français, « être d'accord » se construit avec le verbe être. En anglais, <b>agree</b> est un verbe à part entière, comme « like » ou « think » : « I <b>agree</b> », « She <b>doesn't agree</b> », « <b>Do</b> you <b>agree</b>? ». Dire « I am agree » revient à dire « I am like » — c'est l'erreur qui trahit le plus vite un francophone, et la corriger fait immédiatement gagner en crédibilité."
    },
    GRAMMAR2: {
      heading: "Comparer et relier ses idées : comparatifs et connecteurs",
      dialogueLede: "Deux amis comparent deux façons de voyager :",
      dialogue: [
        {who:"them", en:"Isn't flying much more practical than taking the train?", fr:"Prendre l'avion n'est pas beaucoup plus pratique que le train ?"},
        {who:"you", en:"It's faster, whereas the train is more comfortable — and it's not as bad for the planet.", fr:"C'est plus rapide, alors que le train est plus confortable — et ce n'est pas aussi mauvais pour la planète."}
      ],
      ruleHtml: "💭 Adjectif court : <b>-er than</b> (« cheaper than », « faster than »). Adjectif long : <b>more / less ... than</b> (« more expensive than »). Égalité : <b>(not) as ... as</b> (« not as fast as »). Superlatif : <b>the -est / the most</b>. Pour relier tes idées : <b>because</b> (cause), <b>therefore / so</b> (conséquence), <b>whereas</b> (opposition dans la phrase), <b>on the other hand</b> (autre point de vue), <b>for instance / such as</b> (exemple). Une opinion B1 solide = opinion + raison + exemple.",
      whyLabel: "Secret English — fait, opinion, supposition, interprétation",
      whyText: "Dans un débat anglophone, on distingue soigneusement quatre choses. Un <b>fact</b> se vérifie (« Many teenagers use their phones for hours »). Une <b>opinion</b> est un jugement personnel (« I think it's harmful »). Une <b>assumption</b> est une supposition non vérifiée (« They probably don't read books »). Une <b>interpretation</b> donne un sens à un fait (« It shows they're bored »). Présenter une opinion ou une supposition comme un fait (« Social media is bad ») affaiblit ton argument ; dire « I think », « it seems to me » ou « I assume » le rend au contraire plus honnête et plus convaincant."
    },

    REVIEW: [
      { q:"“Look at those dark clouds! ___” — on voit déjà les signes.", opts:["It's going to rain.","It rains."], correct:0, fb:"« going to » pour une prédiction basée sur ce qu'on voit maintenant. (rappel B1.6)" },
      { q:"“I ___ my sister at the airport tomorrow.” — c'est déjà organisé.", opts:["meet","'m meeting"], correct:1, fb:"Present Continuous pour un projet déjà organisé. (rappel B1.6)" },
      { q:"“If the flight is delayed, I ___ you.”", opts:["will call","called"], correct:0, fb:"Premier conditionnel : « if + présent, will + base ». (rappel B1.6)" },
      { q:"Comment dit-on « les bagages » ?", opts:["The baggages","The luggage"], correct:1, fb:"« Luggage » est indénombrable : jamais de « s ». (rappel B1.6)" },
      { q:"Comment dit-on « j'ai raté ma correspondance » ?", opts:["I've missed my connection","I've lost my correspondence"], correct:0, fb:"« Connection » = correspondance (transport) ; « to miss » = rater. (rappel B1.6)" }
    ],

    CULTURE_NOTE: {
      icon: "🫖",
      title: "Note culturelle — dire non sans le dire",
      html: "Les Britanniques expriment rarement un désaccord frontal. Un « <b>I'm not so sure about that</b> », un « <b>That's an interesting idea</b> » ou un « <b>With respect...</b> » signifient souvent « je ne suis pas du tout d'accord » ! À l'inverse, un « Non, c'est faux » à la française peut paraître agressif en anglais. L'astuce : commencer par <b>reconnaître</b> l'idée de l'autre (« <b>I see your point</b> », « <b>That's true, but...</b> »), puis donner ton avis avec une formule prudente (« I <b>tend to think</b>... »). Les Américains sont en général un peu plus directs, mais la politesse d'un « I see what you mean, but... » est appréciée partout."
    },

    NEXT_PREVIEW: "B1.8 (Emotional English) : décrire tes émotions avec nuance (annoyed, frustrated, devastated, delighted, thrilled…) plutôt qu'avec happy/sad/angry — adjectifs + prépositions, gérondif ou infinitif.",

    META: { vocabTitle:"Donner son opinion (B1.7)", lectureTitle:"Un débat au club d'anglais", bilanTitle:"Bravo, tu sais maintenant donner ton avis, le justifier et exprimer un désaccord poliment !", pronLabel:"Structures d'opinion, accord et désaccord, comparatifs", todayLede:"donner ton opinion, la justifier avec un exemple, être d'accord ou non poliment et comparer des idées — s'appuie sur B1.6 et A2.11 (opinions simples)" }
  };

  // B1.8 — Emotional English — s'appuie sur B1.7 (opinions) et B1.1 (feel, seem, enjoy, avoid)
  LESSONS_EXT[34] = {
    code: "B1.8", level: "B1",
    VOCAB: [
      {block:"La colère, du plus léger au plus fort", en:"Annoyed", ipa:"/əˈnɔɪd/", fr:"Agacé(e), contrarié(e)", note:"Le premier degré de la colère : « I'm a bit annoyed with him » = il m'agace un peu."},
      {block:"La colère, du plus léger au plus fort", en:"Irritated", ipa:"/ˈɪrɪteɪtɪd/", fr:"Irrité(e), énervé(e)", note:"Un peu plus fort qu'« annoyed », souvent pour une gêne qui dure (bruit, attente)."},
      {block:"La colère, du plus léger au plus fort", en:"Frustrated", ipa:"/frʌˈstreɪtɪd/", fr:"Frustré(e), exaspéré(e)", note:"Quand on n'arrive pas à faire ou obtenir quelque chose : « frustrated with the slow internet »."},
      {block:"La colère, du plus léger au plus fort", en:"Furious", ipa:"/ˈfjʊəriəs/", fr:"Furieux(se)", note:"Adjectif « extrême » : on dit « absolutely furious », jamais « very furious »."},
      {block:"La colère, du plus léger au plus fort", en:"Fed up (with)", ipa:"/fɛd ʌp wɪð/", fr:"En avoir marre (de)", note:"Courant et neutre à l'oral : « I'm fed up with waiting » = j'en ai marre d'attendre."},
      {block:"La tristesse, du plus léger au plus fort", en:"Disappointed", ipa:"/ˌdɪsəˈpɔɪntɪd/", fr:"Déçu(e)", note:"Faux ami partiel : « déçu » = disappointed, jamais « deceived » (= trompé(e))."},
      {block:"La tristesse, du plus léger au plus fort", en:"Upset", ipa:"/ʌpˈsɛt/", fr:"Contrarié(e), bouleversé(e), peiné(e)", note:"Mélange de tristesse et de contrariété : « She was upset about the news »."},
      {block:"La tristesse, du plus léger au plus fort", en:"Miserable", ipa:"/ˈmɪzərəbəl/", fr:"Malheureux(se), déprimé(e)", note:"Faux ami : décrit un état très triste ou un temps affreux, pas la pauvreté (= « poor »)."},
      {block:"La tristesse, du plus léger au plus fort", en:"Devastated", ipa:"/ˈdɛvəsteɪtɪd/", fr:"Anéanti(e), effondré(e)", note:"Le degré le plus fort de la tristesse, après une très mauvaise nouvelle."},
      {block:"La tristesse, du plus léger au plus fort", en:"Homesick", ipa:"/ˈhəʊmsɪk/", fr:"Qui a le mal du pays", note:"« I felt homesick during my first month abroad » — un seul mot en anglais."},
      {block:"La joie, du plus léger au plus fort", en:"Pleased", ipa:"/pliːzd/", fr:"Content(e), satisfait(e)", note:"Joie calme et polie : « I'm pleased with the result », très utilisé au travail."},
      {block:"La joie, du plus léger au plus fort", en:"Delighted", ipa:"/dɪˈlaɪtɪd/", fr:"Ravi(e), enchanté(e)", note:"Plus fort qu'« happy » : « I'd be delighted to come! » = je viendrai avec grand plaisir."},
      {block:"La joie, du plus léger au plus fort", en:"Thrilled", ipa:"/θrɪld/", fr:"Ravi(e), fou/folle de joie", note:"Excitation joyeuse : « We're thrilled about the baby! »."},
      {block:"La joie, du plus léger au plus fort", en:"Overjoyed", ipa:"/ˌəʊvərˈdʒɔɪd/", fr:"Fou/folle de joie, comblé(e)", note:"Le sommet de l'échelle — plutôt pour les grands événements de la vie."},
      {block:"La joie, du plus léger au plus fort", en:"Relieved", ipa:"/rɪˈliːvd/", fr:"Soulagé(e)", note:"« I was so relieved when they called » = j'ai été tellement soulagé(e) quand ils ont appelé."},
      {block:"Peur et stress", en:"Worried (about)", ipa:"/ˈwʌrid/", fr:"Inquiet/inquiète (pour, au sujet de)", note:"Toujours « worried about », jamais « worried for » dans le sens courant."},
      {block:"Peur et stress", en:"Anxious", ipa:"/ˈæŋkʃəs/", fr:"Anxieux(se), angoissé(e)", note:"Plus fort et plus durable que « worried »."},
      {block:"Peur et stress", en:"Nervous", ipa:"/ˈnɜːrvəs/", fr:"Nerveux(se), stressé(e), qui a le trac", note:"Faux ami partiel : ce n'est pas « énervé » ! « I'm nervous before exams » = j'ai le trac avant les examens."},
      {block:"Peur et stress", en:"Terrified (of)", ipa:"/ˈtɛrɪfaɪd/", fr:"Terrifié(e) (par)", note:"Adjectif extrême : « absolutely terrified of spiders »."},
      {block:"Peur et stress", en:"Overwhelmed", ipa:"/ˌəʊvərˈwɛlmd/", fr:"Débordé(e), submergé(e)", note:"Quand il y a trop à gérer : « overwhelmed with work » — ou submergé(e) par l'émotion."},
      {block:"Verbes clés (B1.8)", en:"Look forward to", ipa:"/lʊk ˈfɔːrwərd tə/", fr:"Avoir hâte de, attendre avec impatience", note:"« to » est une préposition : suivi d'un nom ou de -ing → « I look forward to seeing you »."},
      {block:"Verbes clés (B1.8)", en:"Cheer up", ipa:"/tʃɪər ʌp/", fr:"Remonter le moral ; reprendre le moral", note:"« Cheer up! » = allez, courage ! ; « It cheered me up » = ça m'a remonté le moral."},
      {block:"Verbes clés (B1.8)", en:"Calm down", ipa:"/kɑːm daʊn/", fr:"Se calmer", note:"Attention au ton : dire « Calm down! » à quelqu'un d'énervé peut l'agacer encore plus."},
      {block:"Verbes clés (B1.8)", en:"Regret", ipa:"/rɪˈɡrɛt/", fr:"Regretter", note:"« I regret saying that » = je regrette d'avoir dit ça (-ing pour une action passée)."},
      {block:"Verbes clés (B1.8)", en:"Miss", ipa:"/mɪs/", fr:"Manquer à quelqu'un (émotion)", note:"Ordre inversé par rapport au français : « I miss you » = tu me manques."},
      {block:"Verbes clés (B1.8)", en:"Can't stand", ipa:"/kɑːnt stænd/", fr:"Ne pas supporter", note:"Rappel A2.11 : suivi de -ing → « I can't stand waiting »."}
    ],
    MEM_WORDS: [2,5,8,11,17,20], // Frustrated, Disappointed, Devastated, Delighted, Nervous, Look forward to

    MINI_CHECKS: [
      { q:"Quel adjectif est le plus FORT ?", opts:["Annoyed","Irritated","Furious"], correct:2, fb:"Échelle de la colère : annoyed → irritated → frustrated → angry → furious." },
      { q:"“I'm really disappointed ___ the result.”", opts:["with","of","on"], correct:0, fb:"« disappointed with/by + chose » ; « disappointed in + personne » est aussi possible. Jamais « of »." },
      { q:"“I'm looking forward ___ you soon.”", opts:["to see","to seeing","seeing"], correct:1, fb:"« look forward to » : « to » est une préposition, donc suivi de -ing." },
      { q:"« I'm nervous » veut dire :", opts:["Je suis énervé(e)","J'ai le trac, je suis stressé(e)","Je suis courageux(se)"], correct:1, fb:"Faux ami : « nervous » = stressé(e), qui a le trac. « Énervé(e) » = « annoyed » ou « irritated »." }
    ],

    ROUNDS: [
      { bank:["with","annoyed","I'm","him","a","bit","."], answer:"i'm a bit annoyed with him .", display:"I'm a bit annoyed with him.", fr:"Il m'agace un peu." },
      { bank:["about","worried","She's","exam","her","."], answer:"she's worried about her exam .", display:"She's worried about her exam.", fr:"Elle est inquiète pour son examen." },
      { bank:["waiting","fed","I'm","with","up","."], answer:"i'm fed up with waiting .", display:"I'm fed up with waiting.", fr:"J'en ai marre d'attendre." },
      { bank:["forward","seeing","I'm","to","you","looking","."], answer:"i'm looking forward to seeing you .", display:"I'm looking forward to seeing you.", fr:"J'ai hâte de te voir." },
      { bank:["news","devastated","the","was","He","by","."], answer:"he was devastated by the news .", display:"He was devastated by the news.", fr:"Il a été anéanti par la nouvelle." },
      { bank:["come","be","delighted","I'd","to","."], answer:"i'd be delighted to come .", display:"I'd be delighted to come.", fr:"Je viendrai avec grand plaisir." },
      { bank:["relieved","so","We","were","."], answer:"we were so relieved .", display:"We were so relieved.", fr:"Nous étions tellement soulagés." },
      { bank:["that","saying","regret","I","."], answer:"i regret saying that .", display:"I regret saying that.", fr:"Je regrette d'avoir dit ça." },
      { bank:["of","absolutely","She's","spiders","terrified","."], answer:"she's absolutely terrified of spiders .", display:"She's absolutely terrified of spiders.", fr:"Elle a une peur bleue des araignées." },
      { bank:["family","miss","I","my","."], answer:"i miss my family .", display:"I miss my family.", fr:"Ma famille me manque." }
    ],

    QUIZ: [
      { cat:"ecrit", q:"“She was ___ about the news — she cried all evening.” — tristesse forte.", opts:["pleased","upset","relieved"], correct:1, why:"« Upset » = bouleversé(e), peiné(e) ; « pleased » et « relieved » sont des émotions positives." },
      { cat:"ecrit", q:"“I'm absolutely ___!” — degré le plus fort de la colère.", opts:["annoyed","irritated","furious"], correct:2, why:"« Absolutely » s'emploie avec les adjectifs extrêmes (furious, terrified, devastated), pas avec « annoyed »." },
      { cat:"ecrit", q:"“He's very proud ___ his daughter.”", opts:["of","about","for"], correct:0, why:"« proud of » = fier/fière de — préposition fixe." },
      { cat:"ecrit", q:"“I'm really interested ___ psychology.”", opts:["for","in","by"], correct:1, why:"« interested in » ; « intéressé par » ne se traduit jamais par « interested by » dans ce sens." },
      { cat:"ecrit", q:"“This film is so long. I'm ___.”", opts:["boring","bored","bore"], correct:1, why:"-ed = ce que JE ressens (bored = je m'ennuie). « I'm boring » voudrait dire « je suis ennuyeux(se) » !" },
      { cat:"ecrit", q:"“We look forward to ___ from you.” — fin d'e-mail.", opts:["hear","hearing","heard"], correct:1, why:"« look forward to + -ing » : « to » est une préposition." },
      { cat:"ecrit", q:"“I stopped ___ two years ago.” — j'ai arrêté de fumer.", opts:["to smoke","smoking","smoke"], correct:1, why:"« stop + -ing » = arrêter une activité. « stop to + base » = s'arrêter POUR faire quelque chose." },
      { cat:"ecrit", q:"“She decided ___ a new job.”", opts:["looking for","to look for","look for"], correct:1, why:"« decide » est suivi de l'infinitif avec « to », comme « want », « hope », « refuse »." },
      { cat:"ecrit", q:"Comment dit-on « tu me manques » ?", opts:["You miss me","I miss you","I'm missing to you"], correct:1, why:"Ordre inversé : en anglais, c'est celui qui ressent le manque qui est sujet → « I miss you »." },
      { cat:"ecrit", q:"Comment dit-on « déçu(e) » ?", opts:["Deceived","Disappointed","Delighted"], correct:1, why:"Faux ami : « deceived » = trompé(e). « Disappointed » = déçu(e)." },
      { cat:"oral", audio:"I was absolutely devastated when I heard the news.", q:"Écoute : comment la personne s'est-elle sentie ?", opts:["Légèrement contrariée","Soulagée","Anéantie","Indifférente"], correct:2, why:"« absolutely devastated » = complètement anéanti(e)." },
      { cat:"oral", audio:"I'm fed up with this noise. It's been going on all day.", q:"Écoute : que ressent la personne ?", opts:["Elle en a marre du bruit","Elle trouve le bruit amusant","Elle a peur du bruit","Elle n'entend rien"], correct:0, why:"« I'm fed up with this noise » = j'en ai marre de ce bruit." },
      { cat:"oral", audio:"We were so relieved when the doctor said everything was fine.", q:"Écoute : pourquoi étaient-ils soulagés ?", opts:["Ils avaient trouvé un travail","Le médecin a dit que tout allait bien","Leur vol est arrivé à l'heure","Ils avaient gagné un prix"], correct:1, why:"« relieved when the doctor said everything was fine »." },
      { cat:"oral", audio:"I always get nervous before speaking in public.", q:"Écoute : que ressent la personne avant de parler en public ?", opts:["De la colère","De l'ennui","De la joie","Du trac, du stress"], correct:3, why:"« nervous » = stressé(e), qui a le trac — pas « énervé(e) »." },
      { cat:"comprehension", passage:"“When I moved to Dublin, I was thrilled at first. But after a few weeks, I started feeling homesick. I missed my family and I was frustrated with my English. Luckily, a colleague invited me to dinner, and that really cheered me up.”", q:"D'après le texte, qu'est-ce qui a remonté le moral de la personne ?", opts:["Un appel de sa famille","Une invitation à dîner d'un collègue","Un retour dans son pays","Un cours d'anglais"], correct:1, why:"« a colleague invited me to dinner, and that really cheered me up »." },
      { cat:"comprehension", passage:"“I'm not angry, just a bit disappointed. I was looking forward to seeing the concert, but it was cancelled at the last minute. I'm sure they'll organise another date, so I'm trying not to get upset about it.”", q:"D'après le texte, comment la personne décrit-elle son émotion ?", opts:["Elle est furieuse","Elle est ravie","Elle est un peu déçue","Elle est terrifiée"], correct:2, why:"« I'm not angry, just a bit disappointed » = pas en colère, juste un peu déçu(e)." },
      { cat:"comprehension", passage:"“(rappel) As far as I'm concerned, people should talk more openly about stress at work. I see why some managers disagree, but I'm convinced it would make teams more efficient.”", q:"D'après le texte, quelle est l'opinion de la personne ?", opts:["Il faut parler plus ouvertement du stress au travail","Les managers ont toujours raison","Le stress rend les équipes plus efficaces","Il ne faut jamais parler de ses émotions"], correct:0, why:"« people should talk more openly about stress at work » (rappel B1.7 : « As far as I'm concerned », « I'm convinced »)." },
      { cat:"comprehension", passage:"“(rappel) Some people argue that we cry less than our grandparents did. I'm not so sure about that. On the other hand, it's true that we show our feelings differently, for instance on social media.”", q:"D'après le texte, la personne est-elle d'accord avec l'idée qu'on pleure moins qu'avant ?", opts:["Oui, totalement","Non, elle en doute","Elle ne donne pas d'avis","Elle pense qu'on pleure plus"], correct:1, why:"« I'm not so sure about that » = désaccord poli (rappel B1.7)." }
    ],

    PRON_VERBS: [
      {en:"I'm a bit annoyed with him.", fr:"Il m'agace un peu."},
      {en:"I was absolutely devastated when I heard the news.", fr:"J'ai été complètement anéanti(e) en apprenant la nouvelle."},
      {en:"I'm looking forward to seeing you.", fr:"J'ai hâte de te voir."},
      {en:"We were so relieved when they called.", fr:"Nous avons été tellement soulagés quand ils ont appelé."},
      {en:"I always get nervous before speaking in public.", fr:"J'ai toujours le trac avant de parler en public."},
      {en:"I'm fed up with waiting.", fr:"J'en ai marre d'attendre."}
    ],

    READING: [
      "Last spring, Emma applied for her dream job at a design studio in Bristol.",
      "She was thrilled when they invited her to an interview, but also extremely nervous.",
      "The night before, she felt so anxious that she could hardly sleep.",
      "On the day, the interview went well, and she left feeling rather pleased with herself.",
      "Then she waited for two long weeks without any news, and she became more and more frustrated.",
      "When the rejection email finally arrived, she was devastated.",
      "Her best friend tried to cheer her up by reminding her that she had done her best.",
      "A month later, to her surprise, the studio called her back: the other candidate had turned the job down.",
      "Emma was overjoyed, and also deeply relieved that she had not given up.",
      "Today, she says she doesn't regret feeling disappointed, because it taught her to be patient."
    ],
    GLOSS: [
      {en:"to apply for", fr:"postuler à, poser sa candidature"},
      {en:"hardly", fr:"à peine"},
      {en:"rejection", fr:"refus, rejet"},
      {en:"to turn down", fr:"refuser (une offre)"},
      {en:"to give up", fr:"abandonner, laisser tomber"}
    ],

    GRAMMAR1: {
      heading: "Adjectif + préposition : dire ce qu'on ressent ET pourquoi",
      lede: "En anglais, chaque adjectif d'émotion appelle une préposition précise, qui ne correspond presque jamais à celle du français. Il faut les apprendre en bloc, comme un seul mot : « worried about », « proud of », « fed up with ».",
      conj: [["Inquiétude, enthousiasme →","about","worried about / excited about / upset about"],["Peur, fierté →","of","afraid of / scared of / proud of / tired of"],["Agacement envers quelqu'un →","with","annoyed with / fed up with / pleased with"],["Intérêt, surprise →","in / by","interested in / surprised by / shocked by"]],
      ruleHtml: "📖 Retiens les blocs : <b>worried about</b>, <b>excited about</b>, <b>proud of</b>, <b>afraid of</b>, <b>fed up with</b>, <b>annoyed with</b> (une personne) / <b>about</b> (une chose), <b>interested in</b>, <b>surprised by</b>. Après la préposition, un nom ou un verbe en <b>-ing</b> : « I'm tired <b>of waiting</b> ». Pour doser l'intensité : <b>very / really</b> avec les adjectifs ordinaires (very angry), <b>absolutely</b> avec les adjectifs extrêmes (absolutely furious, absolutely devastated) — jamais « very furious ».",
      dialogueLede: "Une amie prend des nouvelles :",
      dialogue: [
        {who:"them", en:"You look a bit down. What's wrong?", fr:"Tu as l'air un peu déprimé(e). Qu'est-ce qui ne va pas ?"},
        {who:"you", en:"I'm just fed up with my job, and I'm worried about my exam next week.", fr:"J'en ai juste marre de mon travail, et je suis inquiet/inquiète pour mon examen de la semaine prochaine."}
      ],
      whyLabel: "Le piège -ed / -ing : « I'm bored » ou « I'm boring » ?",
      whyText: "Les adjectifs en <b>-ed</b> décrivent ce que <b>tu ressens</b> : « I'm <b>bored</b> » (je m'ennuie), « I'm <b>interested</b> », « I'm <b>tired</b> ». Les adjectifs en <b>-ing</b> décrivent ce qui <b>provoque</b> l'émotion : « The film is <b>boring</b> » (le film est ennuyeux), « an <b>interesting</b> book », « a <b>tiring</b> day ». Dire « I'm boring » revient donc à dire « je suis ennuyeux(se) » — une erreur fréquente et assez comique pour un anglophone !"
    },
    GRAMMAR2: {
      heading: "Gérondif ou infinitif : enjoy doing, decide to do",
      dialogueLede: "Un collègue parle de ses projets :",
      dialogue: [
        {who:"them", en:"Have you decided to leave your job, then?", fr:"Alors, tu as décidé de quitter ton travail ?"},
        {who:"you", en:"Yes! I really enjoy teaching, and I'm looking forward to starting my new course.", fr:"Oui ! J'aime vraiment enseigner, et j'ai hâte de commencer ma nouvelle formation."}
      ],
      ruleHtml: "💭 Suivis de <b>-ing</b> : enjoy, avoid, can't stand, don't mind, finish, regret (action passée), <b>look forward to</b>, et tout verbe après une préposition. Suivis de <b>to + base</b> : want, decide, hope, plan, refuse, manage, would like. Certains verbes changent de sens : « I <b>stopped smoking</b> » (j'ai arrêté de fumer) ≠ « I <b>stopped to smoke</b> » (je me suis arrêté(e) pour fumer) ; « <b>Remember to call</b> » (n'oublie pas d'appeler) ≠ « I <b>remember calling</b> » (je me souviens d'avoir appelé).",
      whyLabel: "« I look forward to hear from you » : l'erreur des e-mails",
      whyText: "Dans « look forward <b>to</b> », « to » n'est pas la marque de l'infinitif, c'est une <b>préposition</b> (comme « à » dans « avoir hâte à »). Elle est donc suivie d'un nom ou d'un <b>-ing</b> : « I look forward to <b>your reply</b> », « I look forward to <b>hearing</b> from you ». Même logique pour « be used to » (B1.1) : « I'm used to <b>working</b> late ». Cette formule de fin d'e-mail est si courante qu'une erreur y saute immédiatement aux yeux."
    },

    REVIEW: [
      { q:"Comment dit-on « je suis d'accord » ?", opts:["I agree","I am agree"], correct:0, fb:"« Agree » est un verbe : « I agree ». (rappel B1.7)" },
      { q:"Comment dit-on « de mon point de vue » ?", opts:["In my point of view","From my point of view"], correct:1, fb:"Toujours « from my point of view ». (rappel B1.7)" },
      { q:"« I couldn't agree more » veut dire :", opts:["Je suis entièrement d'accord","Je ne suis pas d'accord"], correct:0, fb:"Accord total malgré la négation. (rappel B1.7)" },
      { q:"“Trains are ___ than planes.”", opts:["more slow","slower"], correct:1, fb:"Adjectif court : « -er than ». (rappel B1.7)" },
      { q:"“Some love it, ___ others hate it.” — opposition.", opts:["whereas","therefore"], correct:0, fb:"« Whereas » = alors que, tandis que. (rappel B1.7)" }
    ],

    CULTURE_NOTE: {
      icon: "🙂",
      title: "Note culturelle — l'art britannique de la litote émotionnelle",
      html: "Les Britanniques sont célèbres pour minimiser leurs émotions (« <b>understatement</b> »). « <b>Not bad</b> » veut souvent dire « très bien », « <b>I'm a bit disappointed</b> » peut cacher une vraie colère, et « <b>It's not ideal</b> » décrit parfois une catastrophe ! À la question « How are you? », on répond presque toujours « <b>Fine, thanks</b> », même un mauvais jour — ce n'est pas un mensonge, c'est une formule de politesse. Les Américains expriment en général leur enthousiasme plus ouvertement (« <b>That's awesome!</b> », « <b>I'm so excited!</b> »). Conseil : pour décrire une émotion précise, choisis l'adjectif juste plutôt que d'empiler les « very » — c'est exactement ce qui distingue un anglais B1 d'un anglais A2."
    },

    NEXT_PREVIEW: "B1.9 (Internet & Informal English) : comprendre l'anglais des messages et des réseaux sociaux (gonna, wanna, BTW, TBH, IDK…) et surtout savoir quand NE PAS l'utiliser.",

    META: { vocabTitle:"Les émotions en nuances (B1.8)", lectureTitle:"Les montagnes russes d'Emma", bilanTitle:"Bravo, tu sais maintenant décrire tes émotions avec précision et nuance !", pronLabel:"Adjectifs + prépositions, gérondif ou infinitif", todayLede:"décrire précisément une émotion et son intensité, sans te limiter à happy/sad/angry — s'appuie sur B1.7 et B1.1 (feel, seem, enjoy, avoid)" }
  };

  // B1.9 — Internet & Informal English — s'appuie sur B1.8 (émotions) et B1.3 (réactions en conversation)
  LESSONS_EXT[35] = {
    code: "B1.9", level: "B1",
    VOCAB: [
      {block:"Formes orales écrites comme on les prononce", en:"Gonna", ipa:"/ˈɡɒnə/", fr:"= going to (futur proche)", note:"Familier. « I'm gonna call you » = I'm going to call you. Jamais pour un déplacement : « I'm going to Paris », pas « gonna Paris »."},
      {block:"Formes orales écrites comme on les prononce", en:"Wanna", ipa:"/ˈwɒnə/", fr:"= want to / want a (vouloir)", note:"Familier. « Do you wanna come? » = Do you want to come? À éviter dans tout écrit sérieux."},
      {block:"Formes orales écrites comme on les prononce", en:"Gotta", ipa:"/ˈɡɒtə/", fr:"= (have) got to, have to (devoir)", note:"Familier. « I gotta go » = I have to go — très fréquent pour terminer un message."},
      {block:"Formes orales écrites comme on les prononce", en:"Kinda", ipa:"/ˈkaɪndə/", fr:"= kind of (un peu, plutôt)", note:"Familier. « I'm kinda tired » = I'm a bit tired. Sert souvent à adoucir une affirmation."},
      {block:"Formes orales écrites comme on les prononce", en:"Lemme", ipa:"/ˈlɛmi/", fr:"= let me (laisse-moi)", note:"Familier. « Lemme know » = let me know (tiens-moi au courant)."},
      {block:"Formes orales écrites comme on les prononce", en:"Dunno", ipa:"/dəˈnəʊ/", fr:"= I don't know (je sais pas)", note:"Familier, un peu nonchalant. À l'écrit neutre : « I don't know » ou « I'm not sure »."},
      {block:"Acronymes des messages", en:"BTW (by the way)", ipa:"/ˌbiː tiː ˈdʌbəljuː/", fr:"Au fait, à propos", note:"Introduit une information secondaire. Toléré dans un message rapide entre collègues proches, jamais dans un e-mail formel."},
      {block:"Acronymes des messages", en:"FYI (for your information)", ipa:"/ˌɛf waɪ ˈaɪ/", fr:"Pour info", note:"Assez courant au travail, mais peut sembler sec ou passif-agressif selon le contexte."},
      {block:"Acronymes des messages", en:"IMO (in my opinion)", ipa:"/ˌaɪ ɛm ˈəʊ/", fr:"À mon avis", note:"Rappel B1.7 : la version écrite rapide de « in my opinion ». IMHO = in my humble opinion."},
      {block:"Acronymes des messages", en:"TBH (to be honest)", ipa:"/ˌtiː biː ˈeɪtʃ/", fr:"Pour être honnête", note:"Annonce souvent un avis franc, voire une petite critique : « TBH, I didn't like it »."},
      {block:"Acronymes des messages", en:"IDK (I don't know)", ipa:"/ˌaɪ diː ˈkeɪ/", fr:"Je sais pas", note:"Uniquement entre amis. Même sens que « dunno »."},
      {block:"Acronymes des messages", en:"ASAP (as soon as possible)", ipa:"/ˌeɪ ɛs eɪ ˈpiː/", fr:"Dès que possible", note:"Le seul de la liste vraiment courant au travail, mais un peu pressant : « at your earliest convenience » est plus poli."},
      {block:"Acronymes des messages", en:"LOL (laughing out loud)", ipa:"/ˌɛl əʊ ˈɛl/", fr:"MDR", note:"Aujourd'hui, souvent juste un adoucisseur amical (« lol ») plutôt qu'un vrai fou rire."},
      {block:"Mots familiers du quotidien", en:"Mate", ipa:"/meɪt/", fr:"Pote, mon vieux", note:"Très britannique (et australien). Les Américains disent plutôt « buddy » ou « dude »."},
      {block:"Mots familiers du quotidien", en:"Guys", ipa:"/ɡaɪz/", fr:"Les amis, tout le monde", note:"« Hi guys! » s'adresse à un groupe mixte, pas seulement à des hommes."},
      {block:"Mots familiers du quotidien", en:"Awesome", ipa:"/ˈɔːsəm/", fr:"Génial, super", note:"Très américain et très enthousiaste ; en Grande-Bretagne, on entend aussi « brilliant » ou « lovely »."},
      {block:"Mots familiers du quotidien", en:"No worries", ipa:"/nəʊ ˈwʌriz/", fr:"Pas de souci, de rien", note:"Réponse détendue à « thanks » ou « sorry ». Neutre et poli, acceptable presque partout à l'oral."},
      {block:"Mots familiers du quotidien", en:"Stuff", ipa:"/stʌf/", fr:"Des trucs, des choses", note:"Indénombrable : « a lot of stuff », jamais « stuffs ». À l'écrit formel, préférer « things » ou un mot précis."},
      {block:"Mots familiers du quotidien", en:"Cheers", ipa:"/tʃɪəz/", fr:"Merci ; salut ; santé !", note:"En Grande-Bretagne, « cheers » veut très souvent dire « merci » et se met aussi en fin de message informel."},
      {block:"Verbes clés (B1.9)", en:"To text", ipa:"/tə tɛkst/", fr:"Envoyer un SMS, un message", note:"« Text me when you arrive » = envoie-moi un message quand tu arrives."},
      {block:"Verbes clés (B1.9)", en:"To post", ipa:"/tə pəʊst/", fr:"Publier (en ligne)", note:"« She posted a photo on Instagram » — en britannique, « post » veut aussi dire « envoyer par la poste »."},
      {block:"Verbes clés (B1.9)", en:"To share", ipa:"/tə ʃeər/", fr:"Partager", note:"« Can you share the link? » = tu peux partager le lien ?"},
      {block:"Verbes clés (B1.9)", en:"To scroll", ipa:"/tə skrəʊl/", fr:"Faire défiler", note:"« I spent an hour scrolling through my phone » = j'ai passé une heure à faire défiler mon téléphone."},
      {block:"Verbes clés (B1.9)", en:"To DM", ipa:"/tə ˌdiː ˈɛm/", fr:"Envoyer un message privé", note:"DM = direct message. « DM me the details » = envoie-moi les détails en privé. Informel."},
      {block:"Verbes clés (B1.9)", en:"To check out", ipa:"/tə tʃɛk aʊt/", fr:"Jeter un œil à, découvrir", note:"« Check out this video! » = regarde cette vidéo ! (≠ « check out » d'un hôtel, vu en B1.6)."},
      {block:"Verbes clés (B1.9)", en:"To reply", ipa:"/tə rɪˈplaɪ/", fr:"Répondre (à un message)", note:"« reply to a message » : toujours « to » devant le message ou la personne."}
    ],
    MEM_WORDS: [0,2,6,9,16,19], // Gonna, Gotta, BTW, TBH, No worries, To text

    MINI_CHECKS: [
      { q:"« I'm gonna call you later » veut dire :", opts:["Je vais t'appeler plus tard","Je t'ai appelé(e) plus tôt","Je dois t'appeler maintenant"], correct:0, fb:"« gonna » = going to : futur proche." },
      { q:"Que signifie « TBH » ?", opts:["To be happy","To be honest","Thanks, bye, hugs"], correct:1, fb:"« TBH » = to be honest, pour être honnête." },
      { q:"Dans quel message « gonna » est-il acceptable ?", opts:["Une lettre de motivation","Un SMS à un(e) ami(e)","Un e-mail à ton banquier"], correct:1, fb:"« gonna » est familier : parfait entre amis, à éviter dans tout écrit professionnel ou officiel." },
      { q:"Comment réécrire « Dunno, lemme check » en anglais neutre ?", opts:["I don't know, let me check.","I not know, let me to check.","Don't know me, check."], correct:0, fb:"« dunno » = I don't know ; « lemme » = let me (suivi de la base verbale, sans « to »)." }
    ],

    ROUNDS: [
      { bank:["later","you","I'm","call","gonna","."], answer:"i'm gonna call you later .", display:"I'm gonna call you later.", fr:"Je vais t'appeler plus tard (familier)." },
      { bank:["going","later","I'm","to","call","you","."], answer:"i'm going to call you later .", display:"I'm going to call you later.", fr:"Je vais t'appeler plus tard (neutre)." },
      { bank:["come","you","Do","to","want","?"], answer:"do you want to come ?", display:"Do you want to come?", fr:"Tu veux venir ? (neutre)" },
      { bank:["go","I","to","have","now","."], answer:"i have to go now .", display:"I have to go now.", fr:"Je dois y aller maintenant." },
      { bank:["know","me","Let","arrive","you","when","."], answer:"let me know when you arrive .", display:"Let me know when you arrive.", fr:"Tiens-moi au courant quand tu arrives." },
      { bank:["the","way","By","late","I'll","be","."], answer:"by the way i'll be late .", display:"By the way, I'll be late.", fr:"Au fait, je serai en retard." },
      { bank:["honest","To","didn't","it","like","I","be","."], answer:"to be honest i didn't like it .", display:"To be honest, I didn't like it.", fr:"Pour être honnête, je n'ai pas aimé." },
      { bank:["the","Can","share","link","you","?"], answer:"can you share the link ?", display:"Can you share the link?", fr:"Tu peux partager le lien ?" },
      { bank:["me","Text","get","you","when","home","."], answer:"text me when you get home .", display:"Text me when you get home.", fr:"Envoie-moi un message quand tu rentres." },
      { bank:["soon","possible","Please","as","reply","as","."], answer:"please reply as soon as possible .", display:"Please reply as soon as possible.", fr:"Merci de répondre dès que possible." }
    ],

    QUIZ: [
      { cat:"ecrit", q:"« Wanna » est la forme familière de :", opts:["Want to","Wait now","Will not"], correct:0, why:"« wanna » = want to (ou want a) : « Do you wanna go? » = Do you want to go?" },
      { cat:"ecrit", q:"« I gotta go » veut dire :", opts:["J'ai envie d'y aller","Je dois y aller","Je suis allé(e)"], correct:1, why:"« gotta » = (have) got to = have to : obligation." },
      { cat:"ecrit", q:"Que signifie « FYI » ?", opts:["For your information","Free your inbox","Find your idea"], correct:0, why:"« FYI » = for your information, pour info." },
      { cat:"ecrit", q:"Laquelle de ces phrases est correcte, même en anglais familier ?", opts:["I'm gonna Paris tomorrow.","I'm gonna visit Paris tomorrow.","I gonna to visit Paris."], correct:1, why:"« gonna » remplace « going to » + VERBE uniquement. Pour un déplacement : « I'm going to Paris »." },
      { cat:"ecrit", q:"Tu écris à un recruteur. Quelle phrase choisir ?", opts:["Dunno if I'm free tmrw.","IDK if I'm free tomorrow.","I'm not sure whether I'm available tomorrow."], correct:2, why:"Dans un écrit professionnel, aucune abréviation ni forme familière : « I'm not sure whether I'm available »." },
      { cat:"ecrit", q:"Comment réécrire « Can u send it asap pls? » dans un e-mail professionnel ?", opts:["Could you send it as soon as possible, please?","Can u send it quickly pls?","Send it ASAP!"], correct:0, why:"u → you, pls → please, asap → as soon as possible ; « could » ajoute de la politesse (rappel B1.4)." },
      { cat:"ecrit", q:"« I'm kinda tired » veut dire :", opts:["Je suis très gentil(le)","Je suis un peu fatigué(e)","Je suis complètement épuisé(e)"], correct:1, why:"« kinda » = kind of = un peu, plutôt : il adoucit l'adjectif." },
      { cat:"ecrit", q:"Au Royaume-Uni, « Cheers! » à la fin d'un message informel veut dire :", opts:["Santé !","Merci !","Au secours !"], correct:1, why:"« Cheers » = merci (et parfois « salut ») ; le sens « santé ! » existe seulement quand on trinque." },
      { cat:"ecrit", q:"Quelle phrase est correcte ?", opts:["I have a lot of stuffs to do.","I have a lot of stuff to do.","I have many stuff to do."], correct:1, why:"« stuff » est indénombrable : « a lot of stuff », jamais « stuffs » ni « many stuff »." },
      { cat:"ecrit", q:"Ton ami écrit « thx for yesterday ». Quelle réponse est naturelle et polie ?", opts:["No worries!","You're welcome, Sir.","I am agree."], correct:0, why:"« No worries! » = pas de souci : détendu mais poli, parfait entre amis." },
      { cat:"oral", audio:"I'm gonna be a bit late, sorry. Lemme know if you wanna start without me.", q:"Écoute : que propose la personne ?", opts:["D'annuler le rendez-vous","De commencer sans elle si on veut","De venir plus tôt","D'attendre une heure"], correct:1, why:"« Lemme know if you wanna start without me » = dis-moi si tu veux commencer sans moi." },
      { cat:"oral", audio:"I dunno, to be honest. I haven't checked my messages yet.", q:"Écoute : pourquoi la personne ne sait-elle pas ?", opts:["Elle a perdu son téléphone","Elle n'a pas encore regardé ses messages","Elle n'a pas été invitée","Elle n'a pas compris la question"], correct:1, why:"« I haven't checked my messages yet » = je n'ai pas encore regardé mes messages." },
      { cat:"oral", audio:"Cheers, mate! No worries about yesterday.", q:"Écoute : quel est le ton du message ?", opts:["Formel et distant","Amical et détendu","En colère","Très triste"], correct:1, why:"« Cheers, mate » + « No worries » = ton britannique amical et détendu." },
      { cat:"oral", audio:"Could you please reply as soon as possible? The deadline is tomorrow.", q:"Écoute : quelle abréviation correspond à ce que demande la personne ?", opts:["BTW","LOL","IDK","ASAP"], correct:3, why:"« as soon as possible » = ASAP. Ici, la phrase complète est utilisée : c'est le registre professionnel." },
      { cat:"comprehension", passage:"“Hey guys! BTW, the party's moved to Saturday. Gotta finish some work on Friday, sorry. Lemme know if u can make it. TBH it's gonna be small, just a few friends lol”", q:"D'après le message, pourquoi la fête a-t-elle été déplacée ?", opts:["Parce qu'il pleut vendredi","Parce que la personne doit finir du travail vendredi","Parce que trop de gens viennent","Parce que la salle n'est pas libre"], correct:1, why:"« Gotta finish some work on Friday » = I have to finish some work on Friday." },
      { cat:"comprehension", passage:"“Dear Ms Brown, I'm afraid I won't be able to attend Friday's meeting. Could you please send me the notes as soon as possible? For your information, I have updated the report. Kind regards, Sam”", q:"D'après le message, quel est le registre et que demande Sam ?", opts:["Informel ; il demande une invitation à une fête","Formel ; il demande le compte rendu de la réunion","Informel ; il annule un rendez-vous chez le médecin","Formel ; il demande une augmentation"], correct:1, why:"« Dear Ms Brown... Kind regards » = registre formel ; « send me the notes » = le compte rendu. « For your information » est écrit en entier, pas « FYI »." },
      { cat:"comprehension", passage:"“(rappel) OMG I'm so thrilled!! Just got the job!!! I was absolutely terrified during the interview but they said yes. Honestly so relieved rn”", q:"D'après le message, comment la personne se sent-elle maintenant ?", opts:["Déçue et en colère","Ravie et soulagée","Encore terrifiée","Indifférente"], correct:1, why:"« so thrilled » et « so relieved » (rappel B1.8 : l'échelle des émotions ; « rn » = right now)." },
      { cat:"comprehension", passage:"“(rappel) Sorry, I'm really fed up with this app. It keeps crashing and I'm kinda frustrated tbh. Looking forward to the update tho.”", q:"D'après le message, qu'est-ce que la personne attend avec impatience ?", opts:["Une nouvelle application","La mise à jour de l'application","Un remboursement","Un message d'un ami"], correct:1, why:"« Looking forward to the update » (rappel B1.8 : « look forward to » + nom ; « tho » = though, pourtant)." }
    ],

    PRON_VERBS: [
      {en:"I'm gonna call you later.", fr:"Je vais t'appeler plus tard (familier)."},
      {en:"Do you wanna come with us?", fr:"Tu veux venir avec nous ? (familier)"},
      {en:"Sorry, I gotta go.", fr:"Désolé(e), je dois y aller (familier)."},
      {en:"Lemme know when you arrive.", fr:"Tiens-moi au courant quand tu arrives (familier)."},
      {en:"I dunno, to be honest.", fr:"Je sais pas, pour être honnête (familier)."},
      {en:"Could you reply as soon as possible, please?", fr:"Pourriez-vous répondre dès que possible, s'il vous plaît ?"}
    ],

    READING: [
      "When Léa started working for a company in Manchester, she was surprised by the messages her colleagues sent each other.",
      "In the team chat, people wrote things like “BTW, meeting moved to 3” or “Gotta leave early today, sorry”.",
      "At first, she didn't understand half of the abbreviations, so she kept a list on her phone.",
      "Little by little, she learned that “TBH” meant “to be honest” and that “FYI” was used to share information.",
      "However, she quickly noticed that her manager never used this kind of language in official emails.",
      "When writing to clients, everyone switched to full sentences, polite forms and a proper greeting.",
      "One day, a new intern replied to a client with “np, will send asap”, and the manager kindly explained why it was a mistake.",
      "Informal language is great for building a friendly atmosphere, but it can seem careless or even rude in the wrong context.",
      "Today, Léa feels comfortable with both styles and chooses one depending on who she is writing to.",
      "As she likes to say, the real skill is not knowing the slang, but knowing when not to use it."
    ],
    GLOSS: [
      {en:"abbreviation", fr:"abréviation"},
      {en:"to switch to", fr:"passer à"},
      {en:"a greeting", fr:"une formule de salutation"},
      {en:"an intern", fr:"un(e) stagiaire"},
      {en:"careless", fr:"négligé(e), désinvolte"},
      {en:"np (no problem)", fr:"pas de problème (abréviation)"}
    ],

    GRAMMAR1: {
      heading: "Décoder les formes familières : gonna, wanna, gotta…",
      lede: "Ces formes ne sont pas des fautes : elles reproduisent à l'écrit la prononciation rapide de l'anglais oral. Il faut les comprendre sans hésiter, car tu les entendras et les liras partout — mais savoir les « retraduire » en anglais neutre est tout aussi important.",
      conj: [["Futur proche →","gonna = going to (+ verbe)","I'm gonna cook tonight. → I'm going to cook tonight."],["Envie →","wanna = want to / want a","Wanna coffee? → Do you want a coffee?"],["Obligation →","gotta = have (got) to","I gotta go. → I have to go."],["Autres →","kinda / lemme / dunno","kind of / let me / I don't know"]],
      ruleHtml: "📖 <b>gonna</b> ne remplace « going to » que devant un <b>verbe</b> : « I'm <b>gonna</b> eat » mais jamais « I'm gonna the cinema » (déplacement = « I'm <b>going to</b> the cinema »). <b>wanna</b> = <b>want to</b> + verbe ou <b>want a</b> + nom. <b>gotta</b> = <b>have to / have got to</b>. Ces formes sont <b>familières</b> : acceptables dans un message à un ami, une conversation détendue ou une chanson, mais <b>à éviter</b> dans un e-mail professionnel, un CV, un examen ou un courrier officiel.",
      dialogueLede: "Deux amis s'écrivent un soir de semaine :",
      dialogue: [
        {who:"them", en:"Wanna grab a pizza tonight?", fr:"Tu veux aller manger une pizza ce soir ? (familier)"},
        {who:"you", en:"Sorry, I gotta finish a report. Gonna be a long night!", fr:"Désolé(e), je dois finir un rapport. Ça va être une longue soirée !"}
      ],
      whyLabel: "Pourquoi ne pas les utiliser partout ?",
      whyText: "Un francophone qui écrit « gonna » dans un e-mail de travail ne paraît pas « plus natif » : il paraît <b>négligé</b>, un peu comme si tu écrivais « chuis » ou « jsp » à ton banquier. Les anglophones eux-mêmes changent constamment de registre selon leur interlocuteur. Ton objectif au B1 : <b>comprendre</b> ces formes à 100 %, les utiliser avec des amis si tu en as envie, et revenir automatiquement à <b>going to / want to / have to</b> dès que la situation est sérieuse."
    },
    GRAMMAR2: {
      heading: "Changer de registre : du message rapide à l'e-mail neutre",
      dialogueLede: "Le même message, envoyé à une amie puis à un client :",
      dialogue: [
        {who:"them", en:"Hey! Running late, sorry. BTW can u send me the pics asap? Thx!", fr:"Coucou ! Je suis en retard, désolée. Au fait, tu peux m'envoyer les photos au plus vite ? Merci ! (familier)"},
        {who:"you", en:"Hello, I'm afraid I'm running late. Could you please send me the photos as soon as possible? Many thanks.", fr:"Bonjour, je crains d'être en retard. Pourriez-vous m'envoyer les photos dès que possible ? Merci beaucoup. (neutre)"}
      ],
      ruleHtml: "💭 Pour passer du familier au neutre : 1) écris les mots <b>en entier</b> (u → you, pls → please, thx → thanks, asap → as soon as possible) ; 2) remets le <b>sujet</b> et le verbe que les messages suppriment (« Running late » → « <b>I'm</b> running late », « Sounds good » → « <b>That</b> sounds good ») ; 3) remplace les acronymes par l'expression complète (<b>BTW</b> → by the way / also, <b>TBH</b> → to be honest, <b>IMO</b> → in my opinion) ; 4) ajoute une <b>formule de politesse</b> (could you, please, kind regards).",
      whyLabel: "Secret English — When NOT to use them",
      whyText: "Règle simple : si tu ne tutoierais pas la personne en français, n'utilise ni <b>gonna/wanna/gotta</b>, ni acronymes, ni « lol ». <b>Jamais</b> dans : e-mail à un client, un supérieur ou une administration, candidature, CV, examen, réclamation. <b>Possible</b> : messages entre amis, réseaux sociaux personnels, chat d'équipe très détendu (et encore, en observant d'abord comment écrivent les autres). Dans le doute, choisis toujours l'anglais neutre : il n'est jamais mal perçu, alors que le familier au mauvais endroit peut l'être."
    },

    REVIEW: [
      { q:"Quel adjectif est le plus fort ?", opts:["Annoyed","Furious"], correct:1, fb:"annoyed → irritated → frustrated → angry → furious. (rappel B1.8)" },
      { q:"“I'm looking forward to ___ you.”", opts:["see","seeing"], correct:1, fb:"« look forward to » + -ing. (rappel B1.8)" },
      { q:"« I'm nervous » veut dire :", opts:["Je suis énervé(e)","J'ai le trac"], correct:1, fb:"Faux ami : « nervous » = stressé(e), qui a le trac. (rappel B1.8)" },
      { q:"“He's very proud ___ his son.”", opts:["of","about"], correct:0, fb:"« proud of » = fier/fière de. (rappel B1.8)" },
      { q:"“This film is so long, I'm ___.”", opts:["boring","bored"], correct:1, fb:"-ed = ce que je ressens ; -ing = ce qui provoque l'émotion. (rappel B1.8)" }
    ],

    CULTURE_NOTE: {
      icon: "📱",
      title: "Note culturelle — les codes invisibles des messages en anglais",
      html: "Dans les messages entre amis, un simple <b>point final</b> peut paraître froid ou agacé (« Ok. » semble plus sec que « ok! » ou « ok 🙂 ») : c'est pourquoi beaucoup d'anglophones ajoutent un « <b>lol</b> », un « <b>haha</b> » ou un emoji pour adoucir le ton. Au Royaume-Uni, on termine souvent un message à un proche par un ou plusieurs « <b>x</b> » (des bisous) — normal entre amis ou en famille, à éviter avec un collègue qu'on connaît peu. Enfin, <b>écrire en MAJUSCULES</b> équivaut à crier. Au travail, même dans un chat détendu, observe d'abord le style de tes collègues avant d'adopter le leur."
    },

    NEXT_PREVIEW: "B1.10 (Problem Solving) : identifier un problème, poser les bonnes questions, proposer et comparer des solutions (What if we…?, Why don't we…?, Another option would be…) puis décider ensemble.",

    META: { vocabTitle:"L'anglais des messages (B1.9)", lectureTitle:"Les messages de l'équipe de Léa", bilanTitle:"Bravo, tu comprends maintenant l'anglais informel — et tu sais quand ne pas l'utiliser !", pronLabel:"Formes familières (gonna, wanna, gotta) et leur équivalent neutre", todayLede:"comprendre l'anglais informel des messages et des réseaux sociaux, et savoir passer au registre neutre quand la situation l'exige — s'appuie sur B1.8 et B1.3 (réactions en conversation)" }
  };

  // B1.10 — Problem Solving — s'appuie sur B1.9 (Internet & Informal English), B1.5 (réunions) et B1.6 (premier conditionnel)
  LESSONS_EXT[36] = {
    code: "B1.10", level: "B1",
    VOCAB: [
      {block:"Identifier un problème", en:"The problem is…", ipa:"/ðə ˈprɒbləm ɪz/", fr:"Le problème, c'est que…", note:"Suivi de « that » + phrase : « The problem is that we don't have enough time. » Pas de « The problem it is » calqué sur le français."},
      {block:"Identifier un problème", en:"Issue", ipa:"/ˈɪʃuː/", fr:"Problème, souci, question", note:"Plus neutre et plus diplomatique que « problem » : très fréquent au travail. « There's an issue with the booking. »"},
      {block:"Identifier un problème", en:"Constraint", ipa:"/kənˈstreɪnt/", fr:"Contrainte", note:"« time constraints » = contraintes de temps ; « budget constraints » = contraintes budgétaires."},
      {block:"Identifier un problème", en:"Budget", ipa:"/ˈbʌdʒɪt/", fr:"Budget", note:"« on a tight budget » = avec un budget serré ; « over budget » = au-delà du budget prévu."},
      {block:"Identifier un problème", en:"To run out of", ipa:"/tə rʌn ˈaʊt əv/", fr:"Manquer de, ne plus avoir de", note:"« We're running out of time. » = on commence à manquer de temps. Toujours avec « of » avant le nom."},
      {block:"Identifier un problème", en:"To go wrong", ipa:"/tə ɡəʊ rɒŋ/", fr:"Mal tourner, ne pas marcher", note:"« Something went wrong. » = quelque chose n'a pas marché. Passé irrégulier : « went »."},
      {block:"Proposer une solution", en:"What if we…?", ipa:"/wɒt ɪf wiː/", fr:"Et si on… ?", note:"Suivi du présent ou du prétérit : « What if we leave earlier? » / « What if we left earlier? » (le prétérit rend la suggestion plus prudente)."},
      {block:"Proposer une solution", en:"Why don't we…?", ipa:"/waɪ dəʊnt wiː/", fr:"Pourquoi ne pas… ? On pourrait…", note:"Ce n'est PAS une vraie question sur une raison : c'est une suggestion. Suivi de la base verbale : « Why don't we ask Tom? »"},
      {block:"Proposer une solution", en:"We could…", ipa:"/wiː kʊd/", fr:"On pourrait…", note:"La façon la plus simple et la plus douce de proposer une idée, sans l'imposer."},
      {block:"Proposer une solution", en:"Another option would be…", ipa:"/əˈnʌðər ˈɒpʃən wʊd biː/", fr:"Une autre option serait de…", note:"Suivi de « to + base verbale » : « Another option would be to rent a car. »"},
      {block:"Proposer une solution", en:"How about…?", ipa:"/haʊ əˈbaʊt/", fr:"Et si… ? Que dirais-tu de… ?", note:"Suivi d'un nom ou d'un verbe en -ing : « How about asking the manager? » — jamais « How about ask »."},
      {block:"Comparer les options", en:"Pros and cons", ipa:"/prəʊz ən kɒnz/", fr:"Le pour et le contre", note:"« Let's weigh up the pros and cons. » = pesons le pour et le contre."},
      {block:"Comparer les options", en:"Advantage", ipa:"/ədˈvɑːntɪdʒ/", fr:"Avantage", note:"« The main advantage is that… » = le principal avantage, c'est que… (US : /ədˈvæntɪdʒ/)."},
      {block:"Comparer les options", en:"Drawback", ipa:"/ˈdrɔːbæk/", fr:"Inconvénient", note:"Plus naturel que « disadvantage » à l'oral : « The only drawback is the price. »"},
      {block:"Comparer les options", en:"On the other hand", ipa:"/ɒn ði ˈʌðə hænd/", fr:"D'un autre côté, en revanche", note:"Introduit l'argument opposé. « On the one hand… on the other hand… » = d'un côté… de l'autre…"},
      {block:"Comparer les options", en:"Worth it", ipa:"/ˈwɜːθ ɪt/", fr:"Qui en vaut la peine", note:"« It's more expensive, but it's worth it. » = c'est plus cher, mais ça en vaut la peine."},
      {block:"Comparer les options", en:"Trade-off", ipa:"/ˈtreɪd ɒf/", fr:"Compromis (entre deux avantages)", note:"On gagne d'un côté, on perd de l'autre : « It's a trade-off between price and comfort. »"},
      {block:"Décider", en:"To make a decision", ipa:"/tə meɪk ə dɪˈsɪʒən/", fr:"Prendre une décision", note:"Piège : on « MAKE » une décision en anglais britannique courant, on ne la « take » pas comme en français."},
      {block:"Décider", en:"To go for", ipa:"/tə ɡəʊ fɔː/", fr:"Choisir, opter pour", note:"Très naturel à l'oral : « Let's go for the second option. » = partons sur la deuxième option."},
      {block:"Décider", en:"To rule out", ipa:"/tə ruːl aʊt/", fr:"Écarter, exclure (une option)", note:"« We can rule out the train, it's too slow. » = on peut écarter le train, il est trop lent."},
      {block:"Décider", en:"That makes sense", ipa:"/ðæt meɪks sɛns/", fr:"C'est logique, ça se tient", note:"Piège : jamais « That has sense ». On dit « it makes sense » (ça a du sens)."},
      {block:"Décider", en:"Plan B", ipa:"/ˌplæn ˈbiː/", fr:"Un plan B, une solution de repli", note:"« If it doesn't work, we'll need a plan B. » — même idée qu'en français."},
      {block:"Verbes clés (B1.10)", en:"To solve", ipa:"/tə sɒlv/", fr:"Résoudre", note:"« to solve a problem » = résoudre un problème (plutôt pour un problème précis, une énigme)."},
      {block:"Verbes clés (B1.10)", en:"To sort out", ipa:"/tə sɔːt aʊt/", fr:"Régler, arranger", note:"Très britannique et très courant : « Don't worry, I'll sort it out. » = t'inquiète, je m'en occupe."},
      {block:"Verbes clés (B1.10)", en:"To weigh up", ipa:"/tə weɪ ʌp/", fr:"Peser, évaluer", note:"« to weigh up the options » = peser les différentes options avant de choisir."},
      {block:"Verbes clés (B1.10)", en:"To come up with", ipa:"/tə kʌm ʌp wɪð/", fr:"Trouver, imaginer (une idée)", note:"« She came up with a brilliant idea. » = elle a eu une idée géniale."},
      {block:"Verbes clés (B1.10)", en:"To suggest", ipa:"/tə səˈdʒɛst/", fr:"Suggérer, proposer", note:"Piège n°1 des francophones : jamais « I suggest you to… ». On dit « I suggest calling… » ou « I suggest (that) we call… »."}
    ],
    MEM_WORDS: [6, 7, 13, 19, 23, 26],
    MINI_CHECKS: [
      { q:"“Why don't we ___ the train?” — suggestion.", opts:["taking","take","to take"], correct:1, fb:"« Why don't we » est suivi de la base verbale, sans « to » : « Why don't we take the train? »" },
      { q:"“How about ___ the manager?”", opts:["ask","to ask","asking"], correct:2, fb:"« How about » est suivi d'un verbe en -ing (ou d'un nom) : « How about asking the manager? »" },
      { q:"Laquelle de ces phrases est correcte ?", opts:["I suggest you to call the hotel.","I suggest calling the hotel.","I suggest to call the hotel."], correct:1, fb:"« suggest » + verbe en -ing, ou « suggest (that) + sujet + base verbale ». Jamais « suggest (someone) to do »." },
      { q:"Comment dit-on « un inconvénient » de façon naturelle à l'oral ?", opts:["A drawback","A trade","A constraint"], correct:0, fb:"« A drawback » = un inconvénient : « The only drawback is the price. »" }
    ],
    ROUNDS: [
      { bank:["train","take","the","don't","Why","we","?"], answer:"why don't we take the train ?", display:"Why don't we take the train?", fr:"Pourquoi ne pas prendre le train ?" },
      { bank:["earlier","left","we","if","What","?"], answer:"what if we left earlier ?", display:"What if we left earlier?", fr:"Et si on partait plus tôt ?" },
      { bank:["car","rent","a","to","be","would","option","Another","."], answer:"another option would be to rent a car .", display:"Another option would be to rent a car.", fr:"Une autre option serait de louer une voiture." },
      { bank:["help","for","neighbours","the","ask","could","We","."], answer:"we could ask the neighbours for help .", display:"We could ask the neighbours for help.", fr:"On pourrait demander de l'aide aux voisins." },
      { bank:["budget","no","have","we","that","is","problem","The","."], answer:"the problem is that we have no budget .", display:"The problem is that we have no budget.", fr:"Le problème, c'est qu'on n'a pas de budget." },
      { bank:["money","save","we'll","bus","the","take","we","If","."], answer:"if we take the bus we'll save money .", display:"If we take the bus, we'll save money.", fr:"Si on prend le bus, on économisera de l'argent." },
      { bank:["first","hotel","the","calling","suggest","I","."], answer:"i suggest calling the hotel first .", display:"I suggest calling the hotel first.", fr:"Je propose d'appeler l'hôtel d'abord." },
      { bank:["cons","and","pros","the","up","weigh","Let's","."], answer:"let's weigh up the pros and cons .", display:"Let's weigh up the pros and cons.", fr:"Pesons le pour et le contre." },
      { bank:["advice","for","someone","asking","about","How","?"], answer:"how about asking someone for advice ?", display:"How about asking someone for advice?", fr:"Et si on demandait conseil à quelqu'un ?" },
      { bank:["option","cheaper","the","for","go","Let's","."], answer:"let's go for the cheaper option .", display:"Let's go for the cheaper option.", fr:"Partons sur l'option la moins chère." }
    ],
    QUIZ: [
      { cat:"ecrit", q:"“Why don't we ___ (call) the restaurant?”", opts:["calling","call","to call"], correct:1, why:"« Why don't we » + base verbale : c'est une suggestion, pas une vraie question." },
      { cat:"ecrit", q:"“How about ___ (leave) a bit earlier?”", opts:["leaving","leave","to leave"], correct:0, why:"« How about » est toujours suivi d'un nom ou d'un verbe en -ing." },
      { cat:"ecrit", q:"Laquelle de ces phrases est correcte ?", opts:["I suggest you to book now.","I suggest to book now.","I suggest booking now."], correct:2, why:"« suggest » + -ing (ou « suggest that we book »). « suggest you to » est l'erreur typique des francophones." },
      { cat:"ecrit", q:"“If we ___ (take) the motorway, we'll arrive sooner.”", opts:["will take","take","took"], correct:1, why:"Premier conditionnel : « If + présent, will + base verbale ». Jamais « will » juste après « if »." },
      { cat:"ecrit", q:"“If we had more time, we ___ visit the museum too.”", opts:["could","will","can"], correct:0, why:"Hypothèse moins probable : « If + prétérit, could/would + base verbale »." },
      { cat:"ecrit", q:"Comment dit-on « écarter, exclure une option » ?", opts:["To go for","To rule out","To come up with"], correct:1, why:"« To rule out » = écarter une option ; « to go for » = la choisir." },
      { cat:"ecrit", q:"Comment dit-on « prendre une décision » ?", opts:["To make a decision","To do a decision","To have a decision"], correct:0, why:"En anglais courant, on « make » une décision. « Take a decision » existe en anglais britannique mais reste plus rare." },
      { cat:"ecrit", q:"« I'll sort it out » veut dire :", opts:["Je vais le trier","Je vais le jeter","Je m'en occupe, je vais régler ça"], correct:2, why:"« To sort out » = régler, arranger un problème — pas seulement « trier »." },
      { cat:"ecrit", q:"Comment dit-on « ça se tient, c'est logique » ?", opts:["That has sense.","That makes sense.","That does sense."], correct:1, why:"On dit toujours « it makes sense ». « It has sense » est un calque du français." },
      { cat:"ecrit", q:"Quel mot désigne un compromis où l'on gagne d'un côté et perd de l'autre ?", opts:["A drawback","An issue","A trade-off"], correct:2, why:"« A trade-off » = un compromis entre deux avantages (ex. prix contre confort)." },
      { cat:"oral", audio:"Why don't we ask the neighbours for help?", q:"Écoute : que propose la personne ?", opts:["De déménager","De demander de l'aide aux voisins","D'appeler la police","D'attendre demain"], correct:1, why:"« Why don't we ask the neighbours for help? » = suggestion de demander de l'aide aux voisins." },
      { cat:"oral", audio:"The main drawback is the price, but I think it's worth it.", q:"Écoute : que pense la personne de cette option ?", opts:["C'est trop cher, elle la refuse","C'est cher, mais ça en vaut la peine","C'est gratuit","Elle n'a pas d'avis"], correct:1, why:"« drawback » = inconvénient ; « it's worth it » = ça en vaut la peine." },
      { cat:"oral", audio:"We can rule out the train, it's far too slow.", q:"Écoute : pourquoi le train est-il écarté ?", opts:["Il est trop cher","Il est complet","Il est beaucoup trop lent","Il n'y en a pas"], correct:2, why:"« rule out » = écarter ; « far too slow » = beaucoup trop lent." },
      { cat:"oral", audio:"We're running out of time, so let's make a decision now.", q:"Écoute : quelle est la situation ?", opts:["Le temps presse, il faut décider maintenant","Ils ont tout leur temps","Ils ont déjà décidé hier","Ils attendent un expert"], correct:0, why:"« We're running out of time » = on manque de temps ; « let's make a decision now »." },
      { cat:"comprehension", passage:"“The problem is that the venue has cancelled our booking, and the party is on Saturday. We could move it to my flat, but it's quite small. Another option would be to book the room above the café. It's more expensive, but it's much bigger, so I think it's worth it.”", q:"D'après le texte, quel est l'inconvénient de l'appartement ?", opts:["Il est trop cher","Il est assez petit","Il est trop loin","Il est déjà réservé"], correct:1, why:"« We could move it to my flat, but it's quite small »." },
      { cat:"comprehension", passage:"“We weighed up the pros and cons for ages. In the end, we ruled out the flat and went for the room above the café. Tom came up with the idea of sharing the extra cost between the six of us, which made everyone happy.”", q:"D'après le texte, quelle idée a eue Tom ?", opts:["Annuler la fête","Faire la fête chez lui","Partager le surcoût entre les six amis","Demander une réduction au café"], correct:2, why:"« Tom came up with the idea of sharing the extra cost between the six of us »." },
      { cat:"comprehension", passage:"“(rappel) hey, venue cancelled 😩 BTW I dunno if the café's free on sat, gonna call them tmrw. IMO we should just book it asap”", q:"D'après ce message (rappel B1.9), que va faire la personne demain ?", opts:["Aller au café","Annuler la fête","Appeler le café","Écrire à la salle"], correct:2, why:"« gonna call them tmrw » = « I'm going to call them tomorrow » (rappel B1.9 : gonna, dunno, BTW, IMO)." },
      { cat:"comprehension", passage:"“(rappel) Our flight has been cancelled, so we're going to stay at the airport hotel tonight. If there's a seat on the first flight tomorrow, we'll take it. Otherwise, we'll get the train.”", q:"D'après le texte (rappel B1.6), que feront-ils s'il y a une place sur le premier vol ?", opts:["Ils prendront le train","Ils rentreront en voiture","Ils resteront une semaine","Ils prendront ce vol"], correct:3, why:"« If there's a seat on the first flight tomorrow, we'll take it » (rappel B1.6 : premier conditionnel et futurs)." }
    ],
    PRON_VERBS: [
      {en:"The problem is that we're running out of time.", fr:"Le problème, c'est qu'on commence à manquer de temps."},
      {en:"Why don't we take the train instead?", fr:"Pourquoi ne pas prendre le train à la place ?"},
      {en:"Another option would be to rent a car.", fr:"Une autre option serait de louer une voiture."},
      {en:"Let's weigh up the pros and cons.", fr:"Pesons le pour et le contre."},
      {en:"It's more expensive, but it's worth it.", fr:"C'est plus cher, mais ça en vaut la peine."},
      {en:"Don't worry, I'll sort it out.", fr:"Ne t'inquiète pas, je m'en occupe."}
    ],
    READING: [
      "Last month, my friends and I were organising a surprise party for our friend Lena's fortieth birthday.",
      "Everything was ready until, three days before the party, the venue suddenly cancelled our booking.",
      "At first we panicked, but then we sat down together to try to sort it out.",
      "The first idea was to have the party at my flat, but the problem was that it's far too small for thirty guests.",
      "Another option was to book the room above our favourite café, which was bigger but also more expensive.",
      "We weighed up the pros and cons and quickly ruled out a restaurant, because none of them were available on a Saturday night.",
      "Then Tom came up with a clever idea: if we shared the extra cost, it would only be ten pounds each.",
      "Everyone agreed that it made sense, so we went for the café.",
      "In the end, the party was a huge success, and Lena never suspected a thing.",
      "It taught me that most problems can be solved if you stay calm and compare your options."
    ],
    GLOSS: [
      {en:"venue", fr:"salle, lieu (d'un événement)"},
      {en:"to panic", fr:"paniquer"},
      {en:"guest", fr:"invité(e)"},
      {en:"clever", fr:"astucieux, malin"},
      {en:"to suspect", fr:"se douter de, soupçonner"}
    ],
    GRAMMAR1: {
      heading: "Faire une suggestion : could, why don't we, what if, how about, let's",
      lede: "En anglais, on propose rarement une solution de façon directe (« We do this. ») : on passe par des structures de suggestion qui laissent la place à la discussion. Chacune a sa propre construction — c'est là que se cachent les pièges.",
      conj: [["Proposer doucement →","We could + base verbale","We could ask Tom."],["Suggérer (question qui n'en est pas une) →","Why don't we + base verbale?","Why don't we ask Tom?"],["Lancer une idée →","How about + verbe en -ing?","How about asking Tom?"],["Imaginer une piste →","What if we + présent ou prétérit?","What if we asked Tom?"]],
      ruleHtml: "💡 Chaque structure a sa règle : <b>could / why don't we / let's</b> + base verbale ; <b>how about / what about</b> + -ing ; <b>what if</b> + sujet + présent (idée concrète) ou prétérit (idée plus prudente). Pour <b>suggest</b> : « I suggest <b>calling</b> the hotel » ou « I suggest (that) <b>we call</b> the hotel » — mais jamais « I suggest you <b>to</b> call ».",
      dialogueLede: "Deux collègues cherchent une solution à un retard de livraison :",
      dialogue: [
        {who:"them", en:"The supplier can't deliver before Friday. What are we going to do?", fr:"Le fournisseur ne peut pas livrer avant vendredi. Qu'est-ce qu'on va faire ?"},
        {who:"you", en:"Why don't we call another supplier? Or what if we asked the client for two more days?", fr:"Pourquoi ne pas appeler un autre fournisseur ? Ou si on demandait deux jours de plus au client ?"}
      ],
      whyLabel: "Pourquoi « Why don't we…? » n'est-il pas une vraie question ?",
      whyText: "Parce que personne n'attend de réponse du type « Because… » ! « <b>Why don't we</b> take a taxi? » veut simplement dire « Prenons un taxi, qu'en penses-tu ? ». C'est une manière polie de proposer. Si on répond par une raison (« Because it's expensive »), on rejette l'idée ; pour l'accepter, on dit plutôt « <b>Good idea!</b> » ou « <b>Sounds good.</b> »"
    },
    GRAMMAR2: {
      heading: "Comparer les options et décider : les conditionnels au service de la solution",
      dialogueLede: "Deux amis comparent deux façons de rejoindre un mariage :",
      dialogue: [
        {who:"them", en:"If we take the train, we'll arrive late. If we drove, we'd have to leave at six.", fr:"Si on prend le train, on arrivera en retard. Si on y allait en voiture, il faudrait partir à six heures."},
        {who:"you", en:"That's the trade-off. I'd rather leave early than miss the ceremony, so let's go for the car.", fr:"C'est le compromis. Je préfère partir tôt que rater la cérémonie, alors partons sur la voiture."}
      ],
      ruleHtml: "⚖️ Pour comparer des options : <b>If + présent, will</b> pour une conséquence réelle et probable (« If we take the train, we'll arrive late. ») ; <b>If + prétérit, would/could</b> pour une option plus hypothétique (« If we drove, we'd have to leave at six. »). Pour trancher : <b>I'd rather</b> + base verbale (je préfère), <b>we'd better</b> + base verbale (on ferait mieux de), <b>let's go for</b> + nom (partons sur…).",
      whyLabel: "Secret English — « That might be a bit tricky »",
      whyText: "Dans une discussion en anglais, surtout britannique, on rejette rarement une idée franchement. « <b>That might be a bit tricky.</b> », « <b>I'm not sure that would work.</b> » ou « <b>That's an interesting idea, but…</b> » veulent souvent dire « Non, ce n'est pas une bonne idée ». À l'inverse, un francophone qui répond « No, it's not possible » peut paraître brutal. Pour refuser une solution, commence par reconnaître l'idée, puis propose une alternative : « I see what you mean, but <b>another option would be</b>… »"
    },
    REVIEW: [
      { q:"« I'm gonna call you later » en anglais neutre, c'est :", opts:["I'm going to call you later.","I'm gone to call you later."], correct:0, fb:"« gonna » = « going to », à réserver aux messages et à l'oral détendu. (rappel B1.9)" },
      { q:"Que veut dire « BTW » ?", opts:["Be there when","By the way"], correct:1, fb:"« BTW » = « by the way », au fait. (rappel B1.9)" },
      { q:"Que veut dire « IMO » ?", opts:["In my opinion","I miss you"], correct:0, fb:"« IMO » = « in my opinion », à mon avis. (rappel B1.9)" },
      { q:"Dans un e-mail à un client, peut-on écrire « I dunno, TBH » ?", opts:["Oui, c'est plus sympathique","Non, il faut écrire « To be honest, I'm not sure »"], correct:1, fb:"Le registre informel se comprend, mais ne s'utilise pas dans un contexte professionnel ou formel. (rappel B1.9)" },
      { q:"« wanna » est la forme informelle de :", opts:["want to","want a lot"], correct:0, fb:"« wanna » = « want to » : « I wanna go » = « I want to go ». (rappel B1.9)" }
    ],
    CULTURE_NOTE: {
      icon: "🧩",
      title: "Note culturelle — résoudre un problème en équipe, à l'anglo-saxonne",
      html: "Dans les réunions anglophones, on distingue souvent deux temps : d'abord le <b>brainstorming</b>, où toutes les idées sont les bienvenues (« there are no bad ideas »), puis la phase où l'on compare et où l'on tranche. Critiquer une idée trop tôt est mal perçu. On valorise aussi le fait d'arriver avec <b>une solution, pas seulement un problème</b> : au lieu de dire « The printer is broken », on dit volontiers « The printer is broken — <b>shall I</b> call the technician? ». Enfin, on clôt la discussion par une décision claire et un responsable : « So, <b>let's go for</b> option B. Sarah, <b>could you</b> sort out the booking? »"
    },
    NEXT_PREVIEW: "B1.11 (Stories, Movies & Culture) : parler de films, de séries et d'histoires, et comprendre l'humour, l'ironie, le sarcasme, l'exagération et l'understatement — quand le sens littéral n'est pas le sens voulu.",
    META: { vocabTitle:"Résoudre un problème (B1.10)", lectureTitle:"Une fête à sauver", bilanTitle:"Bravo, tu sais maintenant identifier un problème, proposer des solutions, les comparer et décider en anglais !", pronLabel:"Suggestions (could, why don't we, how about, what if) et conditionnels pour comparer", todayLede:"identifier un problème, proposer une solution, comparer des options et décider — s'appuie sur B1.9, B1.5 (réunions) et B1.6 (premier conditionnel)" }
  };

  // B1.11 — Stories, Movies & Culture — s'appuie sur B1.10 (Problem Solving), B1.2 (raconter) et B1.7 (donner son avis)
  LESSONS_EXT[37] = {
    code: "B1.11", level: "B1",
    VOCAB: [
      {block:"Parler d'un film ou d'une série", en:"Plot", ipa:"/plɒt/", fr:"L'intrigue, l'histoire", note:"« The plot is quite simple, but the characters are brilliant. » = l'intrigue est simple, mais les personnages sont géniaux."},
      {block:"Parler d'un film ou d'une série", en:"Character", ipa:"/ˈkærəktə/", fr:"Personnage", note:"Faux ami partiel : « character » = personnage (ou caractère d'une personne). L'acteur, lui, c'est « the actor »."},
      {block:"Parler d'un film ou d'une série", en:"Cast", ipa:"/kɑːst/", fr:"La distribution, les acteurs", note:"« The cast is amazing. » = les acteurs sont excellents. (US : /kæst/)"},
      {block:"Parler d'un film ou d'une série", en:"Twist", ipa:"/twɪst/", fr:"Rebondissement", note:"« a plot twist » = un retournement de situation ; « I didn't see that twist coming! » = je ne l'avais pas vu venir !"},
      {block:"Parler d'un film ou d'une série", en:"Spoiler", ipa:"/ˈspɔɪlə/", fr:"Divulgâcheur, révélation", note:"« No spoilers, please! » = ne me raconte pas la fin ! Le verbe : « to spoil the ending »."},
      {block:"Parler d'un film ou d'une série", en:"To be set in", ipa:"/tə bi ˈsɛt ɪn/", fr:"Se dérouler à / en / dans", note:"« The film is set in Scotland in the 1920s. » — pour le lieu ET l'époque d'une histoire."},
      {block:"Parler d'un film ou d'une série", en:"Series", ipa:"/ˈsɪəriːz/", fr:"Série ; (UK) saison", note:"Même forme au singulier et au pluriel. Au Royaume-Uni, « series 2 » = la saison 2 ; aux États-Unis, on dit « season 2 »."},
      {block:"Parler d'un film ou d'une série", en:"Subtitles", ipa:"/ˈsʌbtaɪtəlz/", fr:"Sous-titres", note:"« I watch it in English with English subtitles. » — excellent exercice d'écoute pour le niveau B1."},
      {block:"Donner son avis sur une œuvre", en:"Gripping", ipa:"/ˈɡrɪpɪŋ/", fr:"Captivant, prenant", note:"Se dit d'une histoire dont on ne décroche pas : « a gripping thriller »."},
      {block:"Donner son avis sur une œuvre", en:"Moving", ipa:"/ˈmuːvɪŋ/", fr:"Émouvant", note:"Piège : « moving » ne veut pas dire « mouvementé ». « The ending was really moving. » = la fin était très émouvante."},
      {block:"Donner son avis sur une œuvre", en:"Hilarious", ipa:"/hɪˈleəriəs/", fr:"Hilarant, à mourir de rire", note:"Plus fort que « funny ». Ne se met pas avec « very » : on dit « absolutely hilarious »."},
      {block:"Donner son avis sur une œuvre", en:"Overrated", ipa:"/ˌəʊvəˈreɪtɪd/", fr:"Surcoté, surestimé", note:"« Everyone loves it, but I think it's a bit overrated. » Contraire : « underrated » (sous-estimé)."},
      {block:"Donner son avis sur une œuvre", en:"Far-fetched", ipa:"/ˌfɑːˈfɛtʃt/", fr:"Tiré par les cheveux, peu crédible", note:"« The story is a bit far-fetched, but it's fun to watch. »"},
      {block:"Donner son avis sur une œuvre", en:"Worth watching", ipa:"/ˈwɜːθ ˈwɒtʃɪŋ/", fr:"Qui vaut la peine d'être vu", note:"« worth » + verbe en -ing : « worth reading », « worth watching » (rappel de « worth it », B1.10)."},
      {block:"Humour et ton", en:"Irony", ipa:"/ˈaɪrəni/", fr:"Ironie", note:"Adjectif : « ironic ». Dire le contraire de ce qu'on pense, ou souligner une situation absurde."},
      {block:"Humour et ton", en:"Sarcasm", ipa:"/ˈsɑːkæzəm/", fr:"Sarcasme", note:"Adjectif : « sarcastic ». Ironie plus mordante, souvent pour critiquer : « Oh, brilliant idea… »"},
      {block:"Humour et ton", en:"Understatement", ipa:"/ˈʌndəsteɪtmənt/", fr:"Euphémisme, litote", note:"Dire moins que ce qu'on pense : « It's a bit chilly » par -10 °C. Très typique de l'humour britannique."},
      {block:"Humour et ton", en:"Exaggeration", ipa:"/ɪɡˌzædʒəˈreɪʃən/", fr:"Exagération", note:"« I've told you a million times! » — personne ne compte vraiment. Verbe : « to exaggerate » — attention à l'orthographe : deux g en anglais, alors que « exagérer » n'en a qu'un."},
      {block:"Humour et ton", en:"Tongue-in-cheek", ipa:"/ˌtʌŋ ɪn ˈtʃiːk/", fr:"Pince-sans-rire, au second degré", note:"« It was a tongue-in-cheek comment. » = c'était dit au second degré, pas sérieusement."},
      {block:"Humour et ton", en:"To take something literally", ipa:"/tə teɪk ˈsʌmθɪŋ ˈlɪtərəli/", fr:"Prendre quelque chose au pied de la lettre", note:"« Don't take it literally, he was joking! » = ne le prends pas au premier degré, il plaisantait !"},
      {block:"Verbes clés (B1.11)", en:"To recommend", ipa:"/tə ˌrɛkəˈmɛnd/", fr:"Recommander, conseiller", note:"Piège : jamais « I recommend you to watch ». On dit « I recommend watching it » ou « I'd recommend it »."},
      {block:"Verbes clés (B1.11)", en:"To binge-watch", ipa:"/tə ˈbɪndʒ wɒtʃ/", fr:"Regarder en rafale, enchaîner les épisodes", note:"« I binge-watched the whole series in a weekend. »"},
      {block:"Verbes clés (B1.11)", en:"To be based on", ipa:"/tə bi ˈbeɪst ɒn/", fr:"Être tiré de, inspiré de", note:"« It's based on a true story. » = c'est tiré d'une histoire vraie ; « based on a novel » = adapté d'un roman."},
      {block:"Verbes clés (B1.11)", en:"To get a joke", ipa:"/tə ɡɛt ə dʒəʊk/", fr:"Comprendre une blague", note:"« I didn't get it. » = je n'ai pas compris (la blague). Ici « get » = comprendre."},
      {block:"Verbes clés (B1.11)", en:"To make fun of", ipa:"/tə meɪk ˈfʌn əv/", fr:"Se moquer de", note:"« The show makes fun of office life. » = la série se moque de la vie de bureau."},
      {block:"Verbes clés (B1.11)", en:"To mean", ipa:"/tə miːn/", fr:"Vouloir dire ; avoir l'intention", note:"« What do you mean? » = qu'est-ce que tu veux dire ? ; « I didn't mean it. » = je ne le pensais pas vraiment. Passé : « meant » /mɛnt/."}
    ],
    MEM_WORDS: [3, 5, 9, 16, 19, 20],
    MINI_CHECKS: [
      { q:"Pluie battante, train annulé, et ton collègue dit : « Great. Just great. » Il est :", opts:["Vraiment content","Sarcastique : il est agacé","Surpris en bien"], correct:1, fb:"Sens littéral ≠ sens voulu : le ton plat et la situation montrent qu'il pense exactement l'inverse." },
      { q:"“The film ___ in New York in the 1970s.”", opts:["is set","sets","is setting"], correct:0, fb:"« to be set in » (forme passive) = se dérouler à/en : « The film is set in New York. »" },
      { q:"Laquelle de ces phrases est correcte ?", opts:["I recommend you to watch it.","I recommend to watch it.","I'd recommend watching it."], correct:2, fb:"« recommend » + -ing, ou « I'd recommend it ». Jamais « recommend you to »." },
      { q:"Par -10 °C, un Britannique dit « It's a bit chilly today ». C'est :", opts:["Une exagération","Un understatement (euphémisme)","Une erreur de vocabulaire"], correct:1, fb:"L'understatement consiste à dire beaucoup moins que la réalité — un grand classique de l'humour britannique." }
    ],
    ROUNDS: [
      { bank:["Scotland","in","set","is","film","The","."], answer:"the film is set in scotland .", display:"The film is set in Scotland.", fr:"Le film se déroule en Écosse." },
      { bank:["story","true","a","on","based","It's","."], answer:"it's based on a true story .", display:"It's based on a true story.", fr:"C'est tiré d'une histoire vraie." },
      { bank:["written","well","so","are","characters","The","."], answer:"the characters are so well written .", display:"The characters are so well written.", fr:"Les personnages sont tellement bien écrits." },
      { bank:["coming","twist","that","see","didn't","I","."], answer:"i didn't see that twist coming .", display:"I didn't see that twist coming.", fr:"Je n'avais pas vu venir ce rebondissement." },
      { bank:["watching","recommend","definitely","I'd","it","."], answer:"i'd definitely recommend watching it .", display:"I'd definitely recommend watching it.", fr:"Je recommande vraiment de le regarder." },
      { bank:["literally","it","take","Don't","."], answer:"don't take it literally .", display:"Don't take it literally.", fr:"Ne le prends pas au pied de la lettre." },
      { bank:["joking","just","was","he","sarcastic","being","was","He","."], answer:"he was being sarcastic he was just joking .", display:"He was being sarcastic, he was just joking.", fr:"Il était sarcastique, il plaisantait juste." },
      { bank:["life","office","of","fun","makes","show","The","."], answer:"the show makes fun of office life .", display:"The show makes fun of office life.", fr:"La série se moque de la vie de bureau." },
      { bank:["overrated","bit","a","it's","think","I","."], answer:"i think it's a bit overrated .", display:"I think it's a bit overrated.", fr:"Je trouve que c'est un peu surcoté." },
      { bank:["weekend","a","in","series","whole","the","binge-watched","I","."], answer:"i binge-watched the whole series in a weekend .", display:"I binge-watched the whole series in a weekend.", fr:"J'ai enchaîné toute la série en un week-end." }
    ],
    QUIZ: [
      { cat:"ecrit", q:"“The story ___ in London during the war.”", opts:["sets","is set","is setting"], correct:1, why:"« to be set in » = se dérouler à/en. C'est une forme passive : « is set »." },
      { cat:"ecrit", q:"Pour résumer l'intrigue d'un film, on utilise en général :", opts:["Le Present Simple","Le Past Perfect","Le futur avec « will »"], correct:0, why:"En anglais, on raconte l'intrigue d'un film ou d'un livre au présent : « It tells the story of a woman who moves to Paris… »." },
      { cat:"ecrit", q:"“It's about a detective ___ solves crimes in a small village.”", opts:["which","where","who"], correct:2, why:"« who » pour une personne (le détective) ; « which » pour une chose ; « where » pour un lieu." },
      { cat:"ecrit", q:"Laquelle de ces phrases est correcte ?", opts:["I recommend you to see it.","I'd recommend seeing it.","I recommend to see it."], correct:1, why:"« recommend » + -ing (ou « recommend it »). « recommend you to » est un calque du français." },
      { cat:"ecrit", q:"« The ending was really moving » veut dire :", opts:["La fin était très émouvante","La fin était très mouvementée","La fin bougeait beaucoup"], correct:0, why:"« moving » = émouvant. Faux ami : « mouvementé » se dirait plutôt « eventful » ou « action-packed »." },
      { cat:"ecrit", q:"Comment dit-on « tiré par les cheveux, peu crédible » ?", opts:["Gripping","Far-fetched","Hilarious"], correct:1, why:"« Far-fetched » = peu crédible ; « gripping » = captivant ; « hilarious » = hilarant." },
      { cat:"ecrit", q:"Au Royaume-Uni, « series 3 » d'une émission désigne :", opts:["Trois séries différentes","Le troisième épisode","La saison 3"], correct:2, why:"UK « series » = saison ; aux États-Unis on dit « season 3 »." },
      { cat:"ecrit", q:"Quel mot désigne le fait de dire beaucoup MOINS que la réalité (« It's a bit warm » dans le désert) ?", opts:["Exaggeration","Understatement","Spoiler"], correct:1, why:"« Understatement » = euphémisme, litote : minimiser volontairement. L'inverse de l'exagération." },
      { cat:"ecrit", q:"« I didn't get the joke » veut dire :", opts:["Je n'ai pas reçu la blague","Je n'ai pas fait la blague","Je n'ai pas compris la blague"], correct:2, why:"Ici « get » = comprendre. « I don't get it » = je ne comprends pas." },
      { cat:"ecrit", q:"Tu as raté ton train, il pleut, et tu dis « Well, this is fun. » Ta phrase est :", opts:["Ironique","Sincère","Formelle"], correct:0, why:"Le sens littéral (« c'est amusant ») est l'inverse du sens voulu : c'est de l'ironie." },
      { cat:"oral", audio:"No spoilers, please! I haven't seen the last episode yet.", q:"Écoute : que demande la personne ?", opts:["Qu'on lui prête la série","Qu'on ne lui raconte pas la fin","Qu'on regarde l'épisode ensemble","Qu'on éteigne la télévision"], correct:1, why:"« No spoilers » = ne me révèle rien ; « I haven't seen the last episode yet »." },
      { cat:"oral", audio:"It's based on a true story, and it's set in Ireland in the fifties.", q:"Écoute : où et quand se déroule l'histoire ?", opts:["En Irlande, dans les années 1950","En Islande, en 2050","En Écosse, dans les années 1950","En Irlande, aujourd'hui"], correct:0, why:"« set in Ireland in the fifties » ; « based on a true story » = tiré d'une histoire vraie." },
      { cat:"oral", audio:"Oh, brilliant. The printer's broken again. Just what I needed.", q:"Écoute : que ressent vraiment la personne ?", opts:["Elle est ravie","Elle est indifférente","Elle est agacée, elle parle avec sarcasme","Elle est émue"], correct:2, why:"« brilliant » et « just what I needed » disent le contraire de la réalité : c'est du sarcasme." },
      { cat:"oral", audio:"Everyone says it's a masterpiece, but honestly, I think it's a bit overrated.", q:"Écoute : que pense la personne de l'œuvre ?", opts:["C'est un chef-d'œuvre","Elle est un peu surcotée","Elle ne l'a pas vue","C'est la meilleure de l'année"], correct:1, why:"« a bit overrated » = un peu surcoté, malgré l'avis général." },
      { cat:"comprehension", passage:"“After spending three hours in a traffic jam on the way to the beach, Mark finally arrived just as it started to pour with rain. He looked at the grey sky, smiled at his friends and said: ‘Perfect weather for a picnic.’”", q:"D'après le texte, que veut vraiment dire Mark ?", opts:["Qu'il fait un temps idéal","Que la journée est gâchée — il est ironique","Qu'il a faim","Qu'il veut rester à la plage"], correct:1, why:"Le contexte (bouchons, pluie battante) montre que « Perfect weather » est ironique : sens littéral ≠ sens voulu." },
      { cat:"comprehension", passage:"“Emma had just come back from a two-week trek in the mountains, with blisters on both feet and no hot shower for ten days. When her brother asked how it was, she replied: ‘Not bad. A bit tiring, maybe.’ Then she slept for fourteen hours.”", q:"D'après le texte, quelle figure de style Emma utilise-t-elle ?", opts:["L'exagération","Un spoiler","L'understatement : elle minimise un voyage très éprouvant","Une citation de film"], correct:2, why:"« Not bad. A bit tiring » minimise fortement la réalité (ampoules, pas de douche, 14 h de sommeil) : c'est un understatement." },
      { cat:"comprehension", passage:"“(rappel) We can't agree on a film tonight. Why don't we each choose three and vote? Another option would be to watch the first ten minutes of two films and then decide.”", q:"D'après le texte (rappel B1.10), quelle est la première solution proposée ?", opts:["Aller au cinéma","Regarder une série","Laisser une seule personne choisir","Que chacun choisisse trois films, puis voter"], correct:3, why:"« Why don't we each choose three and vote? » (rappel B1.10 : why don't we, another option would be)." },
      { cat:"comprehension", passage:"“(rappel) I was watching the final episode when the power suddenly went off. By the time it came back, my sister had already told me how it ended. I was absolutely furious!”", q:"D'après le texte (rappel B1.2 et B1.8), pourquoi la personne était-elle furieuse ?", opts:["Sa sœur lui avait déjà raconté la fin","L'épisode était ennuyeux","Sa télévision était cassée","Elle avait raté le premier épisode"], correct:0, why:"« my sister had already told me how it ended » — Past Perfect (rappel B1.2) et « furious » (rappel B1.8)." }
    ],
    PRON_VERBS: [
      {en:"The film is set in Scotland in the 1920s.", fr:"Le film se déroule en Écosse dans les années 1920."},
      {en:"It's based on a true story.", fr:"C'est tiré d'une histoire vraie."},
      {en:"I didn't see that twist coming!", fr:"Je n'avais pas vu venir ce rebondissement !"},
      {en:"I'd definitely recommend watching it.", fr:"Je recommande vraiment de le regarder."},
      {en:"Don't take it literally, he was being sarcastic.", fr:"Ne le prends pas au pied de la lettre, il était sarcastique."},
      {en:"I didn't get the joke at first.", fr:"Je n'ai pas compris la blague tout de suite."}
    ],
    READING: [
      "Last weekend, my friend Sam recommended a British comedy series called Rainy Tuesdays.",
      "It's set in a small seaside town and follows a family who run a hotel that almost nobody visits.",
      "The plot is simple, but the characters are so well written that you feel you know them.",
      "At first, I didn't get some of the jokes, because the humour is very dry.",
      "The father, for example, describes a hotel flood as a slight inconvenience — a perfect understatement.",
      "His daughter is the sarcastic one: whenever something goes wrong, she says it's the best day ever.",
      "Once I understood that nobody in the show means exactly what they say, I found it absolutely hilarious.",
      "I binge-watched the first series in two evenings, with English subtitles to help me.",
      "There's even a clever twist at the end, but I won't give you any spoilers.",
      "If you want to understand British humour, I'd definitely recommend watching it."
    ],
    GLOSS: [
      {en:"seaside town", fr:"ville balnéaire, ville au bord de la mer"},
      {en:"dry (humour)", fr:"pince-sans-rire (humour)"},
      {en:"flood", fr:"inondation, dégât des eaux"},
      {en:"slight inconvenience", fr:"léger désagrément"},
      {en:"whenever", fr:"chaque fois que"}
    ],
    GRAMMAR1: {
      heading: "Raconter l'histoire d'un film : le présent de narration et les relatives",
      lede: "Quand on résume un film, une série ou un livre, l'anglais utilise le Present Simple (et non le passé comme souvent en français à l'oral). On décrit les personnages et les lieux avec des propositions relatives : who, which, that, where.",
      conj: [["Situer l'histoire →","be set in + lieu / époque","It's set in Dublin in the 1980s."],["Présenter l'histoire →","It's about / It tells the story of…","It tells the story of a young chef."],["Décrire un personnage →","… who / that + verbe","a chef who wants to open a restaurant"],["Décrire un lieu ou une chose →","… where / which + phrase","a village where nothing ever happens"]],
      ruleHtml: "🎬 Pour un résumé d'intrigue, reste au <b>Present Simple</b> : « She <b>moves</b> to London and <b>meets</b> a strange neighbour. » Pour ajouter une information : <b>who</b> (personne), <b>which</b> (chose), <b>that</b> (personne ou chose, plus courant à l'oral), <b>where</b> (lieu). Piège : pas de pronom en double — « a man <b>who</b> lives alone », jamais « a man who <b>he</b> lives alone ».",
      dialogueLede: "Une amie te demande de lui parler d'une série :",
      dialogue: [
        {who:"them", en:"So what's it about? No spoilers, though!", fr:"Alors, ça parle de quoi ? Mais pas de spoilers !"},
        {who:"you", en:"It's set in a small hotel and it follows a family who never have any guests.", fr:"Ça se passe dans un petit hôtel et ça suit une famille qui n'a jamais de clients."}
      ],
      whyLabel: "Pourquoi le présent, alors que l'histoire est « passée » ?",
      whyText: "Parce qu'une histoire racontée dans un film ou un livre existe toujours, à chaque fois qu'on la regarde : on la présente comme un fait permanent. C'est la convention des critiques, des résumés et des conversations entre amis : « In the film, a woman <b>finds</b> a letter and <b>decides</b> to… ». En revanche, pour raconter <b>ta propre expérience</b> du film, tu reviens au passé : « I <b>watched</b> it last night and I <b>loved</b> it. »"
    },
    GRAMMAR2: {
      heading: "Sens littéral ≠ sens voulu : ironie, sarcasme, exagération et understatement",
      dialogueLede: "Au bureau, un lundi matin difficile :",
      dialogue: [
        {who:"them", en:"The Wi-Fi's down, the coffee machine's broken and we've got a meeting in five minutes.", fr:"Le Wi-Fi ne marche pas, la machine à café est cassée et on a une réunion dans cinq minutes."},
        {who:"you", en:"Great. Just great. What a wonderful start to the week!", fr:"Génial. Vraiment génial. Quel merveilleux début de semaine ! (sarcastique)"}
      ],
      ruleHtml: "🎭 Quatre procédés à repérer : <b>irony / sarcasm</b> = dire le contraire de ce qu'on pense (« Great. Just great. » face à une catastrophe) ; <b>exaggeration</b> = grossir la réalité (« I've been waiting for ages! ») ; <b>understatement</b> = minimiser (« It's not ideal » pour un vrai désastre) ; <b>tongue-in-cheek</b> = dire quelque chose au second degré. Les indices : la <b>situation</b>, le <b>ton plat ou appuyé</b>, et les mots trop positifs pour le contexte (brilliant, perfect, lovely, fantastic).",
      whyLabel: "Secret English — Literal meaning ≠ intended meaning",
      whyText: "Face à « <b>Great. Just great.</b> », la bonne question n'est pas « que veulent dire ces mots ? » mais « <b>est-ce que la situation est vraiment géniale ?</b> ». Si ce n'est pas le cas, le locuteur est sarcastique. Même logique avec l'understatement britannique : « <b>not bad</b> » peut vouloir dire « excellent », et « <b>a bit of a problem</b> » peut signifier « un gros problème ». Pour vérifier sans vexer, tu peux toujours demander : « <b>Are you being serious?</b> » ou « <b>Was that sarcastic?</b> »"
    },
    REVIEW: [
      { q:"“Why don't we ___ a taxi?”", opts:["take","taking"], correct:0, fb:"« Why don't we » + base verbale : c'est une suggestion. (rappel B1.10)" },
      { q:"Laquelle de ces phrases est correcte ?", opts:["I suggest you to call them.","I suggest calling them."], correct:1, fb:"« suggest » + -ing, ou « suggest that we call ». (rappel B1.10)" },
      { q:"Comment dit-on « un inconvénient » ?", opts:["A drawback","A backdraw"], correct:0, fb:"« A drawback » = un inconvénient. (rappel B1.10)" },
      { q:"« We can rule out the train » veut dire :", opts:["On peut écarter l'option du train","On doit absolument prendre le train"], correct:0, fb:"« To rule out » = écarter une option. (rappel B1.10)" },
      { q:"“If we ___ the bus, we'll save money.”", opts:["will take","take"], correct:1, fb:"Premier conditionnel : « If + présent, will… ». (rappel B1.10)" }
    ],
    CULTURE_NOTE: {
      icon: "🎭",
      title: "Note culturelle — l'humour britannique, ou l'art de ne pas dire ce qu'on pense",
      html: "L'humour britannique repose beaucoup sur trois ingrédients : l'<b>understatement</b> (minimiser : parler d'« un petit contretemps » pour une vraie catastrophe), le <b>deadpan</b> (dire une chose absurde avec un visage totalement sérieux) et l'<b>autodérision</b>. Des séries comme <b>Fawlty Towers</b>, <b>The Office</b> (la version britannique) ou les sketches de <b>Monty Python</b> en sont de bons exemples : les personnages y disent rarement ce qu'ils ressentent vraiment, et le comique naît de ce décalage. L'humour américain est souvent plus direct et plus explicite. Conseil pratique : quand un anglophone te dit quelque chose d'étrangement positif dans une situation pénible, souris — il te tend souvent une perche pour rire ensemble."
    },
    NEXT_PREVIEW: "B1.12 (B1 Real-Life Mission) : la mission finale du niveau B1 — une journée fictive entièrement en anglais, du réveil au soir, où tu mobilises tout le B1 (te présenter, raconter, converser, travailler, voyager, donner ton avis, exprimer tes émotions, résoudre un problème).",
    META: { vocabTitle:"Histoires, films et culture (B1.11)", lectureTitle:"Une série très britannique", bilanTitle:"Bravo, tu sais maintenant parler d'un film ou d'une série et repérer l'ironie, le sarcasme et l'understatement !", pronLabel:"Résumer une intrigue au présent, et sens littéral vs sens voulu", todayLede:"parler de films, de séries et d'histoires, et comprendre l'humour, l'ironie, le sarcasme et l'understatement — s'appuie sur B1.10, B1.2 (raconter) et B1.7 (donner son avis)" }
  };

  // B1.12 — B1 Real-Life Mission — mission de synthèse du niveau B1 : mobilise B1.1 à B1.11 (et révise B1.11)
  LESSONS_EXT[38] = {
    code: "B1.12", level: "B1",
    VOCAB: [
      {block:"Le matin : premiers imprévus", en:"To oversleep", ipa:"/tə ˌəʊvəˈsliːp/", fr:"Ne pas se réveiller, dormir trop longtemps", note:"Passé irrégulier : « I overslept this morning. » = je ne me suis pas réveillé(e) ce matin."},
      {block:"Le matin : premiers imprévus", en:"To be running late", ipa:"/tə bi ˈrʌnɪŋ leɪt/", fr:"Être en retard (en ce moment)", note:"Plus naturel que « I am late » pour prévenir : « Sorry, I'm running late — I'll be there in ten minutes. »"},
      {block:"Le matin : premiers imprévus", en:"Commute", ipa:"/kəˈmjuːt/", fr:"Trajet domicile-travail", note:"« My commute takes forty minutes. » Aussi verbe : « I commute by train. »"},
      {block:"Le matin : premiers imprévus", en:"To miss", ipa:"/tə mɪs/", fr:"Rater ; manquer à quelqu'un", note:"« I missed the bus. » = j'ai raté le bus. Piège : « I miss you » = TU me manques (l'ordre est inversé par rapport au français)."},
      {block:"Le matin : premiers imprévus", en:"To catch up on", ipa:"/tə kætʃ ˈʌp ɒn/", fr:"Rattraper (du retard sur quelque chose)", note:"« I need to catch up on my emails. » = je dois rattraper mon retard dans mes mails."},
      {block:"Au travail : gérer la journée", en:"To be in charge of", ipa:"/tə bi ɪn ˈtʃɑːdʒ əv/", fr:"Être responsable de, s'occuper de", note:"« I'm in charge of the new project. » — suivi d'un nom ou d'un verbe en -ing."},
      {block:"Au travail : gérer la journée", en:"Mix-up", ipa:"/ˈmɪks ʌp/", fr:"Confusion, malentendu, erreur", note:"« There's been a mix-up with the booking. » = il y a eu une erreur de réservation. Le verbe : « to mix up »."},
      {block:"Au travail : gérer la journée", en:"To double-check", ipa:"/tə ˌdʌbəl ˈtʃɛk/", fr:"Revérifier, vérifier deux fois", note:"« Could you double-check the time of the meeting? »"},
      {block:"Au travail : gérer la journée", en:"To follow up", ipa:"/tə ˌfɒləʊ ˈʌp/", fr:"Relancer, faire un suivi", note:"« I'll follow up with an email. » = je t'envoie un mail pour faire le point (rappel B1.5)."},
      {block:"Au travail : gérer la journée", en:"Update", ipa:"/ˈʌpdeɪt/", fr:"Point, nouvelles, mise à jour", note:"« Can you give me a quick update? » = tu peux me faire un petit point ? Accent sur la 1re syllabe pour le nom, sur la 2e pour le verbe (/ʌpˈdeɪt/)."},
      {block:"Au travail : gérer la journée", en:"To apologise for", ipa:"/tə əˈpɒlədʒaɪz fɔː/", fr:"S'excuser de", note:"« I apologise for the delay. » (formel). US : « apologize ». Suivi d'un nom ou d'un -ing, jamais « apologise to be late »."},
      {block:"Anglais de survie : ne jamais rester bloqué", en:"It's a kind of…", ipa:"/ɪts ə ˈkaɪnd əv/", fr:"C'est une sorte de…", note:"Pour décrire un mot qu'on ne connaît pas : « It's a kind of big spoon for soup. » (= a ladle)."},
      {block:"Anglais de survie : ne jamais rester bloqué", en:"The thing you use to…", ipa:"/ðə θɪŋ juː juːz tə/", fr:"Le truc qui sert à…", note:"« the thing you use to open bottles » — la paraphrase sauve presque toutes les conversations."},
      {block:"Anglais de survie : ne jamais rester bloqué", en:"What's the word for…?", ipa:"/wɒts ðə ˈwɜːd fɔː/", fr:"Comment dit-on… ? Quel est le mot pour… ?", note:"« What's the word for the person who fixes pipes? » — les anglophones aident volontiers."},
      {block:"Anglais de survie : ne jamais rester bloqué", en:"Could you say that again?", ipa:"/kʊd juː ˈseɪ ðæt əˈɡɛn/", fr:"Pourriez-vous répéter ?", note:"Plus naturel que « Can you repeat? ». Variante : « Sorry, could you speak a bit more slowly? »"},
      {block:"Anglais de survie : ne jamais rester bloqué", en:"What I mean is…", ipa:"/wɒt aɪ ˈmiːn ɪz/", fr:"Ce que je veux dire, c'est que…", note:"Pour reformuler quand on n'a pas été compris(e). Rappel B1.3 : « What do you mean by…? »"},
      {block:"Le soir : raconter sa journée", en:"To catch up with", ipa:"/tə kætʃ ˈʌp wɪð/", fr:"Prendre des nouvelles de, revoir (quelqu'un)", note:"« I caught up with an old friend. » Ne pas confondre : « catch up WITH » (une personne) / « catch up ON » (une tâche)."},
      {block:"Le soir : raconter sa journée", en:"To unwind", ipa:"/tə ʌnˈwaɪnd/", fr:"Décompresser, se détendre", note:"« I watched a film to unwind. » Passé irrégulier : « unwound » /ʌnˈwaʊnd/."},
      {block:"Le soir : raconter sa journée", en:"It turned out that…", ipa:"/ɪt ˈtɜːnd aʊt ðət/", fr:"Il s'est avéré que…, finalement…", note:"Parfait pour la chute d'un récit : « It turned out that the meeting had been cancelled. »"},
      {block:"Le soir : raconter sa journée", en:"Overall", ipa:"/ˌəʊvərˈɔːl/", fr:"Dans l'ensemble, globalement", note:"« Overall, it was a good day. » — pour conclure et donner un bilan."},
      {block:"Le soir : raconter sa journée", en:"To look back on", ipa:"/tə lʊk ˈbæk ɒn/", fr:"Repenser à, faire le bilan de", note:"« Looking back on it, it was actually quite funny. » = avec le recul, c'était plutôt drôle."},
      {block:"Verbes clés (B1.12)", en:"To cope with", ipa:"/tə ˈkəʊp wɪð/", fr:"Faire face à, s'en sortir avec", note:"« I coped with the situation quite well. » Toujours suivi de « with » avant le nom."},
      {block:"Verbes clés (B1.12)", en:"To handle", ipa:"/tə ˈhændəl/", fr:"Gérer (une situation, une personne)", note:"« She handled the problem really well. » Sans préposition : jamais « handle with »."},
      {block:"Verbes clés (B1.12)", en:"To get by", ipa:"/tə ɡɛt ˈbaɪ/", fr:"Se débrouiller", note:"« My English is good enough to get by. » = mon anglais suffit pour me débrouiller — l'esprit même du B1."},
      {block:"Verbes clés (B1.12)", en:"To make the most of", ipa:"/tə meɪk ðə ˈməʊst əv/", fr:"Profiter au maximum de", note:"« Let's make the most of the sunshine. » = profitons du soleil au maximum."},
      {block:"Verbes clés (B1.12)", en:"To stay calm", ipa:"/tə steɪ ˈkɑːm/", fr:"Garder son calme", note:"Le « l » de « calm » ne se prononce pas. US : /kɑːm/ ou /kɑːlm/."}
    ],
    MEM_WORDS: [1, 6, 11, 18, 21, 23],
    MINI_CHECKS: [
      { q:"Tu préviens un collègue que tu arriveras avec 10 minutes de retard. Le plus naturel :", opts:["I'm running late, I'll be there in ten minutes.","I am in late of ten minutes.","I will have a delay of ten minutes."], correct:0, fb:"« I'm running late » est la formule naturelle pour prévenir d'un retard en cours." },
      { q:"“I've got a hundred emails to catch up ___.”", opts:["with","on","for"], correct:1, fb:"« catch up ON » + une tâche ; « catch up WITH » + une personne." },
      { q:"Tu ne connais pas le mot « louche » en anglais. Tu dis :", opts:["I don't know. Sorry.","It's a kind of big spoon for serving soup.","It's a louche."], correct:1, fb:"L'anglais de survie : décrire avec « It's a kind of… » ou « the thing you use to… » plutôt que de s'arrêter." },
      { q:"« It turned out that the meeting had been cancelled » veut dire :", opts:["La réunion a été déplacée","Il s'est avéré que la réunion avait été annulée","La réunion a mal tourné"], correct:1, fb:"« It turned out that… » = il s'est avéré que… — parfait pour la chute d'un récit." }
    ],
    ROUNDS: [
      { bank:["morning","this","overslept","I","."], answer:"i overslept this morning .", display:"I overslept this morning.", fr:"Je ne me suis pas réveillé(e) ce matin." },
      { bank:["late","running","I'm","sorry","."], answer:"sorry i'm running late .", display:"Sorry, I'm running late.", fr:"Désolé(e), je suis en retard." },
      { bank:["booking","the","with","mix-up","a","been","There's","."], answer:"there's been a mix-up with the booking .", display:"There's been a mix-up with the booking.", fr:"Il y a eu une erreur avec la réservation." },
      { bank:["time","the","double-check","you","Could","?"], answer:"could you double-check the time ?", display:"Could you double-check the time?", fr:"Pourriez-vous revérifier l'heure ?" },
      { bank:["email","an","with","up","follow","I'll","."], answer:"i'll follow up with an email .", display:"I'll follow up with an email.", fr:"Je ferai un suivi par mail." },
      { bank:["again","that","say","you","Could","?"], answer:"could you say that again ?", display:"Could you say that again?", fr:"Pourriez-vous répéter ?" },
      { bank:["cancelled","been","had","it","that","out","turned","It","."], answer:"it turned out that it had been cancelled .", display:"It turned out that it had been cancelled.", fr:"Il s'est avéré que ça avait été annulé." },
      { bank:["well","quite","situation","the","with","coped","I","."], answer:"i coped with the situation quite well .", display:"I coped with the situation quite well.", fr:"J'ai plutôt bien géré la situation." },
      { bank:["friend","old","an","with","up","caught","I","."], answer:"i caught up with an old friend .", display:"I caught up with an old friend.", fr:"J'ai pris des nouvelles d'un vieil ami." },
      { bank:["day","good","a","was","it","Overall","."], answer:"overall it was a good day .", display:"Overall, it was a good day.", fr:"Dans l'ensemble, c'était une bonne journée." }
    ],
    QUIZ: [
      { cat:"ecrit", q:"“I ___ in Lyon since 2019.” — situation qui continue (B1.1).", opts:["live","have lived","lived"], correct:1, why:"Present Perfect + « since » pour une situation commencée dans le passé et toujours vraie." },
      { cat:"ecrit", q:"“I ___ (wait) for the bus when my phone rang.” (B1.2)", opts:["waited","have waited","was waiting"], correct:2, why:"Past Continuous pour l'action longue en arrière-plan, interrompue par une action courte au Past Simple." },
      { cat:"ecrit", q:"Question indirecte polie (B1.3) : « Could you tell me where ___ ? »", opts:["the station is","is the station","does the station be"], correct:0, why:"Dans une question indirecte, on garde l'ordre sujet + verbe : « where the station is »." },
      { cat:"ecrit", q:"Demande polie dans un magasin (B1.4) :", opts:["I want another size.","Would it be possible to try another size?","Give me another size."], correct:1, why:"« Would it be possible to…? » est une demande polie ; « I want » paraît brusque en anglais." },
      { cat:"ecrit", q:"“You ___ wear a suit, but you can if you want.” — pas d'obligation (B1.5).", opts:["mustn't","don't have to","shouldn't"], correct:1, why:"« don't have to » = ce n'est pas obligatoire ; « mustn't » = c'est interdit." },
      { cat:"ecrit", q:"“I've booked a table. We ___ at eight.” — rendez-vous organisé (B1.6).", opts:["are meeting","will meet maybe","meet usually"], correct:0, why:"Present Continuous pour un projet déjà organisé dans le futur." },
      { cat:"ecrit", q:"“I was really disappointed ___ the result.” (B1.8)", opts:["of","with","at the"], correct:1, why:"« disappointed with/by » + une chose ; jamais « disappointed of »." },
      { cat:"ecrit", q:"Version neutre de « gotta go, ttyl » (B1.9) :", opts:["I've got to go, I'll talk to you later.","I go now, talk later you.","I must going, speak you soon."], correct:0, why:"« gotta » = « (I've) got to » ; « ttyl » = « talk to you later »." },
      { cat:"ecrit", q:"Proposer une solution (B1.10) : « What if we ___ the meeting to Friday? »", opts:["moving","moved","to move"], correct:1, why:"« What if we » + présent ou prétérit : « What if we moved… » est une suggestion prudente." },
      { cat:"ecrit", q:"Un Britannique trempé par l'orage dit « It's a bit damp today ». C'est (B1.11) :", opts:["Une exagération","Une erreur","Un understatement"], correct:2, why:"Minimiser volontairement une situation extrême = understatement, très typique de l'humour britannique." },
      { cat:"oral", audio:"Sorry, I'm running late. The train was cancelled, but I'll be there in twenty minutes.", q:"Écoute : pourquoi la personne est-elle en retard ?", opts:["Elle ne s'est pas réveillée","Son train a été annulé","Elle s'est perdue","Elle a oublié le rendez-vous"], correct:1, why:"« The train was cancelled » ; « I'll be there in twenty minutes »." },
      { cat:"oral", audio:"There's been a mix-up with your booking, but we can offer you a larger room at no extra cost.", q:"Écoute : que propose-t-on au client ?", opts:["Un remboursement","Une chambre plus grande sans supplément","Un autre hôtel","Une réduction sur le petit-déjeuner"], correct:1, why:"« a larger room at no extra cost » = une chambre plus grande sans frais supplémentaires." },
      { cat:"oral", audio:"I don't know the word, but it's the thing you use to open a bottle of wine.", q:"Écoute : de quel objet parle la personne ?", opts:["Un décapsuleur","Un verre à vin","Une carafe","Un tire-bouchon"], correct:3, why:"« the thing you use to open a bottle of wine » = a corkscrew, un tire-bouchon — l'anglais de survie en action." },
      { cat:"oral", audio:"Overall, it was a long day, but looking back on it, I handled everything quite well.", q:"Écoute : quel bilan la personne fait-elle de sa journée ?", opts:["Longue, mais elle a plutôt bien tout géré","Courte et reposante","Catastrophique du début à la fin","Elle ne s'en souvient pas"], correct:0, why:"« a long day » + « I handled everything quite well » = elle a bien géré malgré tout." },
      { cat:"comprehension", passage:"“Hi Mr Clarke, I apologise for the confusion this morning. It turned out that the meeting room had been double-booked. I've moved our meeting to 3 p.m. in room B. I'll follow up with the updated slides by midday. Best regards, Sam”", q:"D'après ce mail, que s'est-il passé ce matin ?", opts:["La salle de réunion avait été réservée deux fois","Mr Clarke était en retard","Les diapositives étaient perdues","La réunion a été annulée définitivement"], correct:0, why:"« It turned out that the meeting room had been double-booked » — Past Perfect et registre formel (apologise, Best regards)." },
      { cat:"comprehension", passage:"“After work I caught up with Jess at a café. She thinks working from home is the future, but I'm not so sure. In my view, you lose the little conversations that help a team work well. We agreed to disagree and ordered another coffee.”", q:"D'après le texte, quelle est l'opinion de la narratrice sur le télétravail ?", opts:["Elle pense que c'est l'avenir","Elle n'a pas d'avis","Elle doute : on perd les petits échanges utiles à l'équipe","Elle est totalement contre le travail au bureau"], correct:2, why:"« I'm not so sure. In my view, you lose the little conversations… » (rappel B1.7 : donner son avis, être en désaccord poliment)." },
      { cat:"comprehension", passage:"“(rappel) I used to hate speaking English on the phone. I'd panic and hang up! But I'm used to it now, because I have to call clients every day. It's become much easier.”", q:"D'après le texte (rappel B1.1), quelle est la situation actuelle de la personne ?", opts:["Elle déteste toujours téléphoner en anglais","Elle a l'habitude maintenant, c'est devenu plus facile","Elle ne téléphone plus jamais","Elle raccroche toujours"], correct:1, why:"« I used to hate… » = habitude passée disparue ; « I'm used to it now » = j'en ai l'habitude maintenant (rappel B1.1)." },
      { cat:"comprehension", passage:"“(rappel) ‘You're the new neighbour, aren't you?’ ‘Yes, I moved in last week.’ ‘Really? Welcome! If you need anything, just knock.’ ‘That's so kind of you. I was actually wondering where the nearest bakery is.’”", q:"D'après le dialogue (rappel B1.3), que cherche le nouveau voisin ?", opts:["Un supermarché","La boulangerie la plus proche","La gare","Un médecin"], correct:1, why:"« I was actually wondering where the nearest bakery is » — question indirecte ; « aren't you? » est un question tag (rappel B1.3)." }
    ],
    PRON_VERBS: [
      {en:"Sorry, I'm running late. I'll be there in ten minutes.", fr:"Désolé(e), je suis en retard. J'arrive dans dix minutes."},
      {en:"There's been a mix-up with the booking.", fr:"Il y a eu une erreur avec la réservation."},
      {en:"I don't know the word, but it's a kind of…", fr:"Je ne connais pas le mot, mais c'est une sorte de…"},
      {en:"Could you say that again, a bit more slowly?", fr:"Pourriez-vous répéter, un peu plus lentement ?"},
      {en:"It turned out that the meeting had been cancelled.", fr:"Il s'est avéré que la réunion avait été annulée."},
      {en:"Overall, I handled everything quite well.", fr:"Dans l'ensemble, j'ai plutôt bien tout géré."}
    ],
    READING: [
      "Yesterday was my first full day in English, and it started badly: I overslept and missed my bus.",
      "I sent a quick message to my manager to say I was running late, and luckily she was very understanding.",
      "When I finally arrived, it turned out that there had been a mix-up with the meeting room.",
      "Instead of panicking, I suggested that we move the meeting to the café downstairs, and everyone agreed.",
      "During the meeting, I didn't know the word for a technical tool, so I described it as the thing you use to measure walls.",
      "A colleague smiled and said the word, and I felt surprisingly proud of myself.",
      "At lunch, we had a friendly debate about working from home, and I managed to explain my point of view clearly.",
      "In the evening, I caught up with an old friend, who joked that my day sounded like a relaxing holiday.",
      "I laughed, because I understood that she was being ironic, and we spent an hour telling each other stories.",
      "Looking back on it, I realised that I can now cope with a whole day in English — and even enjoy it."
    ],
    GLOSS: [
      {en:"understanding", fr:"compréhensif, compréhensive"},
      {en:"downstairs", fr:"en bas, au rez-de-chaussée"},
      {en:"to measure", fr:"mesurer"},
      {en:"surprisingly", fr:"étonnamment"},
      {en:"proud of", fr:"fier / fière de"}
    ],
    GRAMMAR1: {
      heading: "La boîte à outils du B1 : choisir le bon temps au bon moment",
      lede: "Au niveau B1, la vraie difficulté n'est plus de conjuguer, mais de CHOISIR le temps qui correspond à ce que tu veux dire. Voici les quatre grands usages que tu as travaillés tout au long du B1.",
      conj: [["Habitude, vérité générale →","Present Simple","I commute by train every day."],["Bilan, expérience, durée jusqu'à maintenant →","Present Perfect","I've worked here for two years."],["Raconter un événement →","Past Simple + Past Continuous + Past Perfect","I was waiting when I realised I had lost my ticket."],["Parler de l'avenir →","going to / will / Present Continuous","I'm meeting Jess tonight. I'll call you later."]],
      ruleHtml: "🧭 Repère les <b>signaux</b> : <b>every day, usually</b> → Present Simple ; <b>for, since, ever, already, yet</b> → Present Perfect ; <b>yesterday, last week, ago</b> → Past Simple ; <b>while, when</b> + action en cours → Past Continuous ; <b>by the time, already</b> + passé → Past Perfect ; un projet organisé → <b>Present Continuous</b>, une intention → <b>going to</b>, une décision sur le moment → <b>will</b>.",
      dialogueLede: "Un ami te demande comment se passe ta nouvelle vie en anglais :",
      dialogue: [
        {who:"them", en:"So, how's it going? Have you got used to working in English?", fr:"Alors, comment ça se passe ? Tu t'es habitué(e) à travailler en anglais ?"},
        {who:"you", en:"I have! I used to panic on the phone, but yesterday I handled a difficult call on my own.", fr:"Oui ! Avant, je paniquais au téléphone, mais hier j'ai géré un appel difficile tout(e) seul(e)."}
      ],
      whyLabel: "Pourquoi réviser les temps dans une mission finale ?",
      whyText: "Parce qu'une vraie journée en anglais mélange tout : tu te présentes (<b>Present Simple / Present Perfect</b>), tu racontes un imprévu (<b>temps du récit</b>), tu organises la suite (<b>futurs</b>) et tu proposes des solutions (<b>could, what if, conditionnels</b>). Être B1, ce n'est pas connaître chaque règle par cœur : c'est passer de l'une à l'autre <b>sans t'arrêter</b>, et te faire comprendre même quand tu hésites."
    },
    GRAMMAR2: {
      heading: "Adapter son registre : formel, neutre, informel",
      dialogueLede: "Le même message, adressé à deux personnes différentes :",
      dialogue: [
        {who:"you", en:"Dear Mr Clarke, I apologise for the delay. Would it be possible to reschedule our meeting?", fr:"Monsieur Clarke, je vous prie de m'excuser pour le retard. Serait-il possible de reporter notre réunion ?"},
        {who:"you", en:"Hey Jess, sorry, running late! Can we meet at 7 instead?", fr:"Salut Jess, désolée, je suis en retard ! On peut se voir à 19 h plutôt ?"}
      ],
      ruleHtml: "🎚️ Trois registres, un même contenu : <b>formel</b> (client, administration) → phrases complètes, <b>I apologise</b>, <b>Would it be possible…?</b>, <b>Best regards</b> ; <b>neutre</b> (collègue, inconnu) → <b>Sorry for the delay</b>, <b>Could we…?</b>, <b>Thanks</b> ; <b>informel</b> (ami) → phrases raccourcies, <b>running late</b>, <b>gonna</b>, <b>BTW</b>. Règle d'or du B1.9 : en cas de doute, choisis le <b>neutre</b>.",
      whyLabel: "Secret English — être compris plutôt qu'être parfait",
      whyText: "Le vrai objectif du B1, c'est l'autonomie : « <b>I can function in English</b> ». Une petite erreur de grammaire gêne rarement un anglophone ; en revanche, un <b>mauvais registre</b> (un « Hey! » à un client, un « I want » au restaurant) ou un <b>silence</b> parce qu'il manque un mot peuvent bloquer l'échange. Donc : adapte ton ton à ton interlocuteur, et si un mot te manque, <b>contourne-le</b> (« It's a kind of… », « What I mean is… ») au lieu de t'arrêter."
    },
    REVIEW: [
      { q:"“The film ___ in Scotland in the 1920s.”", opts:["is set","sets"], correct:0, fb:"« to be set in » = se dérouler à/en. (rappel B1.11)" },
      { q:"Face à une panne générale, ton collègue dit « Great. Just great. » Il est :", opts:["Sincèrement ravi","Sarcastique"], correct:1, fb:"Sens littéral ≠ sens voulu : la situation montre qu'il pense l'inverse. (rappel B1.11)" },
      { q:"Laquelle de ces phrases est correcte ?", opts:["I'd recommend watching it.","I recommend you to watch it."], correct:0, fb:"« recommend » + -ing ; jamais « recommend you to ». (rappel B1.11)" },
      { q:"« The ending was really moving » veut dire :", opts:["La fin était très mouvementée","La fin était très émouvante"], correct:1, fb:"« moving » = émouvant (faux ami). (rappel B1.11)" },
      { q:"« It's a bit far-fetched » veut dire :", opts:["C'est un peu tiré par les cheveux","C'est un peu trop long"], correct:0, fb:"« far-fetched » = peu crédible. (rappel B1.11)" }
    ],
    CULTURE_NOTE: {
      icon: "🛟",
      title: "Note culturelle — l'anglais de survie : ne jamais laisser tomber la conversation",
      html: "Les anglophones, surtout dans les grandes villes où l'on croise des dizaines d'accents, sont très habitués à parler avec des non-natifs. Ce qu'ils apprécient le plus n'est pas un anglais parfait, mais quelqu'un qui <b>continue d'essayer</b>. Quelques réflexes : <b>paraphraser</b> un mot inconnu (« It's a kind of… », « the thing you use to… ») ; <b>demander de l'aide</b> sans gêne (« What's the word for…? ») ; <b>vérifier</b> qu'on a compris (« So you mean… ? ») ; et <b>ralentir l'échange</b> poliment (« Sorry, could you say that again? »). Les natifs le font eux-mêmes en permanence — c'est une compétence de conversation, pas un aveu de faiblesse."
    },
    NEXT_PREVIEW: "Tu as terminé les 12 paliers du niveau B1 ! Prochaine étape : B2.1 (Argumentation) — construire une argumentation complète (thèse, raison, exemple, contre-argument, conclusion) et anticiper l'objection avec des connecteurs avancés comme however, nevertheless, whereas, therefore ou provided that.",
    META: { vocabTitle:"Une journée en anglais (B1.12)", lectureTitle:"Ma première journée entièrement en anglais", bilanTitle:"Bravo, tu as vécu une journée entière en anglais : le niveau B1 est à ta portée !", pronLabel:"La boîte à outils du B1 : bon temps, bon registre, anglais de survie", todayLede:"vivre une journée fictive entièrement en anglais en mobilisant tout le B1 (se présenter, raconter, converser, travailler, voyager, donner son avis, résoudre un problème) — mission finale du niveau B1" }
  };
})(window.LESSONS_EXT);
