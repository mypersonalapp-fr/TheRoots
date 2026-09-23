// The Roots — My World › Royaume-Uni : « Explorer ce pays » (6 situations)
// et « Je pars bientôt · Mode Survie » (7 jours). Validé sur maquette le 23/09.
// Photos : vraies photos gratuites Pexels (crédit affiché), choisies d'après
// leur description — à valider par Ashley. Pour en changer une : remplacer
// "id" (numéro à la fin de l'adresse de la page Pexels) et "by".

export const UK_PHOTOS = {
 "avion": {
  "id": 3943950,
  "by": "Anna Shvets",
  "alt": "Passenger using self-service check-in kiosk at airport for convenient travel experience.",
  "caption": "Une voyageuse fait son enregistrement à une borne libre-service de l'aéroport."
 },
 "hotel": {
  "id": 7820311,
  "by": "Mikhail Nilov",
  "alt": "Businesswoman checking into a hotel at a stylish reception desk, engaging with staff.",
  "caption": "Une cliente parle à la réceptionniste pour s'enregistrer à l'hôtel."
 },
 "supermarche": {
  "id": 4199585,
  "by": "Jack Sparrow",
  "alt": "A couple using smartphone payment at a supermarket checkout with a pineapple and paper bag.",
  "caption": "Un couple paie ses courses avec un téléphone à la caisse du supermarché."
 },
 "vetements": {
  "id": 5424930,
  "by": "Arina Krasnikova",
  "alt": "Two women trying on stylish trench coats in a modern clothing store setting.",
  "caption": "Deux femmes essaient des trench-coats dans une boutique de vêtements."
 },
 "train": {
  "id": 35682867,
  "by": "Sergei Gussev",
  "alt": "Passengers boarding a Eurostar train at St Pancras International Station under iconic arched roof.",
  "caption": "Des voyageurs montent dans un train à la gare de St Pancras, à Londres."
 },
 "musee": {
  "id": 13540378,
  "by": "Andrea De Santis",
  "alt": "Explore the vast blue whale skeleton in London's iconic Natural History Museum, a must-see for tourists.",
  "caption": "Des visiteurs admirent le squelette de baleine bleue au Natural History Museum de Londres."
 },
 "j1": {
  "id": 12903034,
  "by": "Mizuno K",
  "alt": "Friendly businesswoman in a blue shirt shaking hands during meeting, radiating professionalism and approachability.",
  "caption": "Une femme souriante serre la main d'une personne pour la saluer."
 },
 "j2": {
  "id": 29253498,
  "by": "Matheus Bertelli",
  "alt": "Red double decker bus on a bustling London street. Iconic city transport scene.",
  "caption": "Un bus rouge à impériale roule dans une rue animée de Londres."
 },
 "j3": {
  "id": 7820321,
  "by": "Mikhail Nilov",
  "alt": "A hotel receptionist hands a key card to a guest over the counter, with documents visible.",
  "caption": "La réceptionniste remet la carte-clé de la chambre à un client."
 },
 "j4": {
  "id": 4921263,
  "by": "RDNE Stock project",
  "alt": "Two customers enjoy a lively interaction with a barista at a modern café counter, creating a warm and inviting atmosphere.",
  "caption": "Deux clients passent commande au comptoir d'un café et discutent avec le barista."
 },
 "j5": {
  "id": 11316617,
  "by": "Towfiqu barbhuiya",
  "alt": "A hand tapping a credit card on a payment terminal for a contactless transaction.",
  "caption": "Une main pose une carte bancaire sur le terminal pour payer sans contact."
 },
 "j6": {
  "id": 3776776,
  "by": "Andrea Piacquadio",
  "alt": "Female traveler in warm clothes standing on street with map and looking away at dusk",
  "caption": "Une voyageuse, un plan à la main, cherche son chemin dans une rue de la ville."
 },
 "j7": {
  "id": 8657372,
  "by": "cottonbro studio",
  "alt": "A pharmacist helps a senior adult woman with medication choices in a pharmacy setting.",
  "caption": "Un pharmacien conseille une cliente âgée sur ses médicaments."
 }
};

// Une étape = ce que dit la personne en face ("say", lu à voix haute) + sa
// traduction ("fr", donnée seulement en indice) + la bonne réponse ("ok") +
// 2 réponses fausses ["texte", "pourquoi c'est faux"]. Les indices sont
// progressifs et calculés tout seuls : 1) le sens de la phrase entendue,
// 2) le début de la bonne réponse, 3) la bonne réponse.
// "surprises" = questions imprévues : UNE est glissée au hasard à chaque
// partie, à un endroit différent (on ne peut pas apprendre par cœur).
export const UK_SITUATIONS = [
  {
    id: "avion", icon: "✈️", title: "À l'aéroport et dans l'avion", who: "Agent d'enregistrement, puis hôtesse de l'air",
    intro: "Tu pars pour Londres. Enregistrement, siège, puis à bord.",
    steps: [
      { say: "Good morning. Where are you flying to today?", fr: "Bonjour. Où partez-vous aujourd'hui ?", ok: "To London, please.",
        bad: [["I am flying yesterday.", "« yesterday » = hier : on te parle d'aujourd'hui."], ["Yes, I do.", "On te demande une destination, pas oui/non."]] },
      { say: "Can I see your passport, please?", fr: "Puis-je voir votre passeport ?", ok: "Here you are.",
        bad: [["Yes, you can see.", "Traduction mot à mot : en anglais on tend le document en disant « Here you are »."], ["I have got a passport blue.", "L'adjectif se place avant le nom (a blue passport), et ce n'est pas la question."]] },
      { say: "Do you have any bags to check in?", fr: "Avez-vous des bagages à enregistrer ?", ok: "Yes, just one suitcase.",
        bad: [["No, I am a bag.", "« I am a bag » = je suis un sac !"], ["Check in is good.", "Ne répond pas à la question."]] },
      { say: "Would you like a window or an aisle seat?", fr: "Voulez-vous un siège côté hublot ou côté couloir ?", ok: "A window seat, please.",
        bad: [["I like the windows.", "« J'aime les fenêtres » : ce n'est pas un choix de siège."], ["Yes, please.", "On te propose deux choix : il faut en choisir un."]] },
      { say: "Would you like something to drink?", fr: "Voulez-vous quelque chose à boire ?", ok: "A glass of water, please.",
        bad: [["I would like drinking.", "Après « would like » : un nom ou « to + verbe » (I'd like a drink)."], ["No drink me.", "Phrase incorrecte : « No, thank you. »"]] },
      { say: "Please fasten your seatbelt.", fr: "Veuillez attacher votre ceinture.", ok: "Sure, no problem.",
        bad: [["Fasten? Yes, it's fast.", "« fasten » (attacher) n'a rien à voir avec « fast » (rapide)."], ["I am fastening yesterday.", "Présent continu + « yesterday » : impossible."]] },
    ],
    surprises: [
      { say: "Did you pack your bag yourself?", fr: "Avez-vous fait votre valise vous-même ?", ok: "Yes, I did.",
        bad: [["Yes, I do.", "La question est au passé (Did…?) : on répond « Yes, I did »."], ["No, it's my bag.", "Contradictoire : « non, c'est mon sac »."]] },
      { say: "I'm sorry, your flight is delayed by two hours.", fr: "Désolé, votre vol a deux heures de retard.", ok: "Oh no! Where can I wait?",
        bad: [["Thank you, it's perfect.", "Un retard n'est pas une bonne nouvelle !"], ["Delayed is very good.", "« delayed » = retardé."]] },
      { say: "Is this your first time in the UK?", fr: "C'est la première fois que vous venez au Royaume-Uni ?", ok: "Yes, it is!",
        bad: [["Yes, I am first.", "« Je suis premier » : ce n'est pas la question."], ["It is my time.", "Phrase qui ne veut rien dire ici."]] },
    ],
  },
  {
    id: "hotel", icon: "🏨", title: "À l'hôtel", who: "Réceptionniste",
    intro: "Tu arrives à ton hôtel à Londres, ta valise à la main.",
    steps: [
      { say: "Good evening, welcome to the hotel. How can I help you?", fr: "Bonsoir, bienvenue à l'hôtel. Comment puis-je vous aider ?", ok: "Hello, I have a reservation.",
        bad: [["Hello, I have a room.", "Tu n'as pas encore la chambre : tu as une réservation."], ["I help you.", "C'est la réceptionniste qui t'aide."]] },
      { say: "What name is it under?", fr: "À quel nom est la réservation ?", ok: "It's under Martin. M-A-R-T-I-N.",
        bad: [["My name is under.", "Traduction mot à mot qui ne veut rien dire."], ["It's under the table.", "« under the table » = sous la table !"]] },
      { say: "Lovely. You're staying for three nights, is that right?", fr: "Parfait. Vous restez trois nuits, c'est bien ça ?", ok: "Yes, that's right.",
        bad: [["Yes, it's right night.", "Phrase incorrecte."], ["No, I stay.", "« Non, je reste » : contradictoire."]] },
      { say: "Here's your key card. Your room is on the fourth floor.", fr: "Voici votre carte-clé. Votre chambre est au 4e étage.", ok: "Thank you. Where is the lift?",
        bad: [["Thanks, I am the fourth.", "« Je suis le quatrième » : ce n'est pas le sens."], ["Where are you room?", "« your room », et c'est TA chambre."]] },
      { say: "Is there anything else I can do for you?", fr: "Puis-je faire autre chose pour vous ?", ok: "Yes, what's the Wi-Fi password?",
        bad: [["Yes, I want Wi-Fi code, give.", "Trop brusque : les Britanniques tiennent beaucoup à « please »."], ["No, anything.", "On dit « No, nothing, thanks. »"]] },
      { say: "Enjoy your stay!", fr: "Bon séjour !", ok: "Thanks, have a nice evening!",
        bad: [["You too enjoy.", "Phrase incorrecte."], ["Yes, I stay.", "Ne répond pas au souhait."]] },
    ],
    surprises: [
      { say: "I'm afraid your room isn't ready yet. Could you come back at 3 pm?", fr: "Je crains que votre chambre ne soit pas encore prête. Pourriez-vous revenir à 15 h ?", ok: "No problem. Can I leave my bags here?",
        bad: [["Yes, I am ready.", "C'est la chambre qui n'est pas prête."], ["Afraid? Why?", "« I'm afraid » = « je crains que » (formule polie), pas « j'ai peur »."]] },
      { say: "Could I have a credit card for any extras?", fr: "Puis-je avoir une carte bancaire pour les extras ?", ok: "Of course, here you are.",
        bad: [["I don't have extra.", "On te demande une carte en garantie."], ["Yes, it's credit.", "Ne veut rien dire ici."]] },
      { say: "Would you like a wake-up call tomorrow?", fr: "Voulez-vous qu'on vous réveille demain ?", ok: "Yes, at seven o'clock, please.",
        bad: [["I wake up call.", "Phrase incorrecte."], ["Yes, seven hours.", "« seven hours » = une durée de 7 heures, pas « à 7 h »."]] },
    ],
  },
  {
    id: "supermarche", icon: "🛒", title: "Au supermarché", who: "Employé, puis caissière",
    intro: "Tu fais quelques courses pour ton pique-nique.",
    steps: [
      { say: "Hi, are you looking for something?", fr: "Bonjour, vous cherchez quelque chose ?", ok: "Yes, where can I find the milk?",
        bad: [["Yes, I look milk.", "« look for » = chercher : I'm looking for milk."], ["Yes, I'm looking you.", "« je vous regarde » !"]] },
      { say: "It's in aisle five, next to the cheese.", fr: "C'est dans l'allée 5, à côté du fromage.", ok: "Thanks a lot!",
        bad: [["Five cheese, thank.", "Phrase incorrecte."], ["Next to you?", "« next to the cheese » = à côté du fromage."]] },
      { say: "Hiya! Do you need a bag?", fr: "Salut ! Il vous faut un sac ?", ok: "No, thanks. I've got my own.",
        bad: [["Yes, I am a bag.", "« je suis un sac » !"], ["No, I need not bag.", "Phrase incorrecte : « No, I don't need a bag. »"]] },
      { say: "That's twelve pounds fifty, please.", fr: "Ça fait 12,50 £, s'il vous plaît.", ok: "Can I pay by card?",
        bad: [["I pay with twelve.", "Phrase incorrecte."], ["Twelve pounds fifteen?", "« fifty » = 50 ; « fifteen » = 15 : écoute bien la fin du mot."]] },
      { say: "Yes, just tap your card on the machine.", fr: "Oui, posez simplement votre carte sur le terminal.", ok: "Okay, done!",
        bad: [["I tap you.", "Tu poses ta carte, pas la caissière !"], ["Where is the tap water?", "« tap water » = eau du robinet."]] },
      { say: "Would you like your receipt?", fr: "Voulez-vous votre ticket ?", ok: "No, thanks. Have a nice day!",
        bad: [["No, I'm not receipt.", "Phrase incorrecte."], ["Yes, the receipt is good day.", "Phrase qui ne veut rien dire."]] },
    ],
    surprises: [
      { say: "Have you got a loyalty card?", fr: "Avez-vous une carte de fidélité ?", ok: "No, I haven't.",
        bad: [["No, I don't got.", "Avec « have you got » : « No, I haven't »."], ["Yes, I have loyal.", "Phrase incorrecte."]] },
      { say: "Sorry, the card machine isn't working. Have you got cash?", fr: "Désolée, le terminal ne marche pas. Avez-vous du liquide ?", ok: "Yes, here's a twenty-pound note.",
        bad: [["Yes, it's working.", "Elle vient de dire que ça ne marche pas."], ["Cash is working?", "Phrase qui ne veut rien dire."]] },
      { say: "Can I see some ID for the wine, please?", fr: "Puis-je voir une pièce d'identité pour le vin ?", ok: "Sure, here's my passport.",
        bad: [["Wine is ID?", "« ID » = pièce d'identité."], ["No, it's for me.", "Au Royaume-Uni on peut te demander ta pièce d'identité pour l'alcool, même adulte."]] },
    ],
  },
  {
    id: "vetements", icon: "👗", title: "Dans un magasin de vêtements", who: "Vendeuse",
    intro: "Tu repères un manteau qui te plaît.",
    steps: [
      { say: "Hello! Can I help you?", fr: "Bonjour ! Je peux vous aider ?", ok: "I'm just looking, thanks.",
        bad: [["No, I'm help.", "Phrase incorrecte."], ["I look just.", "Ordre des mots : « I'm just looking »."]] },
      { say: "Would you like to try it on?", fr: "Voulez-vous l'essayer ?", ok: "Yes, please. Where are the changing rooms?",
        bad: [["Yes, I try on me.", "Phrase incorrecte."], ["No, I like on.", "Ne veut rien dire."]] },
      { say: "How does it fit?", fr: "Il vous va comment ?", ok: "It's a bit too small.",
        bad: [["It fits me very tall.", "Phrase incorrecte."], ["It's fit.", "« fit » ici = en forme / musclé !"]] },
      { say: "Do you need a different size?", fr: "Il vous faut une autre taille ?", ok: "Yes, have you got it in a medium?",
        bad: [["Yes, it's big me.", "Phrase incorrecte."], ["Yes, I need a size different.", "L'adjectif se place avant le nom : a different size."]] },
      { say: "Good news, this one is on sale. Twenty per cent off.", fr: "Bonne nouvelle, il est en promotion : -20 %.", ok: "Great! How much is it now?",
        bad: [["Twenty is off?", "« 20 % off » = 20 % de réduction."], ["How many it cost?", "Pour un prix : « How much is it? »"]] },
      { say: "It's thirty-two pounds.", fr: "Il fait 32 £.", ok: "Perfect, I'll take it.",
        bad: [["I take him.", "Pour un objet : « it », pas « him »."], ["Perfect, I'm taking yesterday.", "« yesterday » = hier !"]] },
    ],
    surprises: [
      { say: "We've only got it in black. Is that okay?", fr: "On ne l'a qu'en noir. Ça vous va ?", ok: "Yes, black is fine.",
        bad: [["Yes, I'm black fine.", "Phrase incorrecte."], ["Okay, I'm got black.", "Phrase incorrecte."]] },
      { say: "Would you like a bag for that?", fr: "Voulez-vous un sac pour ça ?", ok: "No, thanks. It's fine.",
        bad: [["No, I'm a bag.", "« je suis un sac » !"], ["Yes, for that is.", "Phrase incorrecte."]] },
      { say: "Keep your receipt if you want to bring it back.", fr: "Gardez votre ticket si vous voulez le rapporter.", ok: "Okay, thanks for telling me.",
        bad: [["I bring you back.", "« je vous ramène » !"], ["Receipt is keeping.", "Phrase incorrecte."]] },
    ],
  },
  {
    id: "train", icon: "🚆", title: "À la gare", who: "Guichetier, voyageur, contrôleur",
    intro: "Tu prends le train pour une journée à Oxford.",
    steps: [
      { say: "Hi, where are you travelling to?", fr: "Bonjour, où allez-vous ?", ok: "A return ticket to Oxford, please.",
        bad: [["I travel to Oxford yesterday.", "« yesterday » = hier."], ["A ticket for return Oxford.", "Ordre des mots : « a return ticket to Oxford »."]] },
      { say: "Are you coming back today?", fr: "Vous revenez aujourd'hui ?", ok: "Yes, this evening.",
        bad: [["Yes, I come back tomorrow today.", "Contradictoire."], ["Back is today.", "Phrase incorrecte."]] },
      { say: "That's twenty-eight pounds. Have you got a railcard?", fr: "Ça fait 28 £. Avez-vous une carte de réduction ?", ok: "No, I haven't.",
        bad: [["No, I don't have got.", "Avec « have you got » : « No, I haven't »."], ["Yes, rail.", "Phrase incomplète."]] },
      { say: "The next train leaves at ten fifteen from platform nine.", fr: "Le prochain train part à 10 h 15, quai 9.", ok: "Sorry, which platform?",
        bad: [["Platform is ten fifteen?", "10 h 15, c'est l'heure ; le quai, c'est 9."], ["I leave you.", "« je vous quitte » !"]] },
      { say: "Excuse me, is this the train to Oxford?", fr: "Excusez-moi, c'est bien le train pour Oxford ?", ok: "Yes, I think so.",
        bad: [["Yes, I am Oxford.", "« je suis Oxford » !"], ["Yes, is.", "Il faut un sujet : « Yes, it is. »"]] },
      { say: "Tickets, please!", fr: "Billets, s'il vous plaît !", ok: "Here you are.",
        bad: [["Yes, tickets!", "Tu tends ton billet : « Here you are »."], ["I'm a ticket.", "« je suis un billet » !"]] },
    ],
    surprises: [
      { say: "I'm afraid this train is cancelled. Please take the next one.", fr: "Désolé, ce train est annulé. Prenez le suivant.", ok: "Oh no! When is the next train?",
        bad: [["Great, thanks!", "Une annulation n'est pas une bonne nouvelle."], ["Cancelled is next?", "Phrase incorrecte."]] },
      { say: "You need to change at Reading.", fr: "Vous devez changer à Reading (ville, prononcée « Redding »).", ok: "Sorry, where do I change?",
        bad: [["I'm reading a book.", "Piège : « Reading » est ici une ville."], ["Change my money?", "« change » = changer de train."]] },
      { say: "Mind the gap between the train and the platform.", fr: "Attention à l'espace entre le train et le quai.", ok: "Okay, thanks!",
        bad: [["What is the gap? A shop?", "« mind the gap » = attention à la marche / à l'espace."], ["I mind you.", "Phrase incorrecte."]] },
    ],
  },
  {
    id: "musee", icon: "🏛️", title: "Au musée", who: "Accueil, puis gardien",
    intro: "Tu visites un grand musée londonien (beaucoup sont gratuits !).",
    steps: [
      { say: "Good morning! Entry to the museum is free.", fr: "Bonjour ! L'entrée du musée est gratuite.", ok: "Oh, great! Do I need a ticket?",
        bad: [["Free? How much does it cost?", "« free » = gratuit : ça ne coûte rien."], ["Good morning, I'm free.", "« je suis libre » : pas le sens ici."]] },
      { say: "No, but there's a special exhibition for fifteen pounds.", fr: "Non, mais il y a une exposition spéciale à 15 £.", ok: "What is it about?",
        bad: [["Where is about?", "Phrase incorrecte."], ["I exhibit fifteen.", "Ne veut rien dire."]] },
      { say: "It's about dinosaurs.", fr: "Elle porte sur les dinosaures.", ok: "Sounds great! One ticket, please.",
        bad: [["Dinosaurs are ticket.", "Phrase incorrecte."], ["I sound great.", "« Sounds great » : c'est l'idée qui a l'air géniale."]] },
      { say: "Would you like an audio guide? It's available in French.", fr: "Voulez-vous un audioguide ? Il existe en français.", ok: "Yes, please. In French.",
        bad: [["Yes, I audio.", "Phrase incorrecte."], ["French is guide?", "Phrase incorrecte."]] },
      { say: "Sorry, no flash photography, please.", fr: "Désolé, pas de photo au flash, s'il vous plaît.", ok: "Oh, sorry! I didn't know.",
        bad: [["Yes, flash please.", "Contraire de la consigne !"], ["I don't flash.", "Phrase incorrecte."]] },
      { say: "The museum closes in fifteen minutes.", fr: "Le musée ferme dans 15 minutes.", ok: "Thanks. Where is the gift shop?",
        bad: [["Fifteen closes?", "Phrase incorrecte."], ["I close in fifteen.", "« je ferme dans quinze » !"]] },
    ],
    surprises: [
      { say: "Could you leave your big bag in the cloakroom?", fr: "Pourriez-vous laisser votre grand sac au vestiaire ?", ok: "Of course. Where is it?",
        bad: [["No, it's my bag.", "Refus impoli : c'est une règle du musée."], ["Cloak? I don't have one.", "« cloakroom » = vestiaire."]] },
      { say: "Are you a student? There's a discount.", fr: "Êtes-vous étudiant(e) ? Il y a une réduction.", ok: "No, I'm not, but thanks!",
        bad: [["No, I'm not student discount.", "Phrase incorrecte."], ["Yes, I'm counting.", "« je compte » : rien à voir."]] },
      { say: "Excuse me, the toilets on this floor are closed.", fr: "Excusez-moi, les toilettes de cet étage sont fermées.", ok: "Okay. Where are the other toilets?",
        bad: [["Okay, I close.", "Phrase incorrecte."], ["Toilets is floor?", "Phrase incorrecte."]] },
    ],
  },
];

// Mode Survie : 7 jours avant le départ, 6 phrases par jour.
// "say" = prononciation approchée pour un francophone (aide, pas de l'API).
export const UK_SURVIVAL = [
  { day: 1, title: "Politesse et premiers mots", photo: "j1", tip: "Au Royaume-Uni, « please », « thank you » et « sorry » s'entendent partout : on les dit beaucoup plus qu'en France.",
    phrases: [
      ["Hello! Nice to meet you.", "Bonjour ! Enchanté(e).", "hè-lo-ou ! naïss tou mit you"],
      ["Excuse me…", "Excusez-moi… (pour attirer l'attention)", "ex-kiouz mi"],
      ["Sorry, I don't understand.", "Désolé(e), je ne comprends pas.", "so-ri, aï dount eune-deur-stannd"],
      ["Could you speak more slowly, please?", "Pourriez-vous parler plus lentement ?", "koud you spik mor slo-ou-li, pliz"],
      ["I'm French. I speak a little English.", "Je suis français(e). Je parle un peu anglais.", "aïm frènch. aï spik e li-teul inng-glich"],
      ["Thanks a lot! / Cheers!", "Merci beaucoup ! / Merci (familier)", "fènks e lot ! / tchirz"],
    ] },
  { day: 2, title: "Transports : bus, métro, train", photo: "j2", tip: "À Londres, dans le bus et le métro (« the Tube »), on paie en posant sa carte bancaire sans contact sur le lecteur.",
    phrases: [
      ["A single to Victoria, please.", "Un aller simple pour Victoria, s'il vous plaît.", "e sinng-geul tou vic-to-ri-a, pliz"],
      ["Which line goes to King's Cross?", "Quelle ligne va à King's Cross ?", "witch laïn go-ouz tou kinngz cross"],
      ["Does this bus go to Oxford Street?", "Ce bus va-t-il à Oxford Street ?", "daz dis bass go-ou tou ox-feurd strit"],
      ["Where is the nearest Tube station?", "Où est la station de métro la plus proche ?", "wèr iz de ni-rest tioub stè-cheunn"],
      ["Can I pay by card?", "Je peux payer par carte ?", "kann aï pè baï kard"],
      ["Could you tell me when to get off?", "Pouvez-vous me dire quand descendre ?", "koud you tèl mi wènn tou guèt of"],
    ] },
  { day: 3, title: "À l'hôtel", photo: "j3", tip: "« First floor » = 1er étage ; le rez-de-chaussée se dit « ground floor ».",
    phrases: [
      ["I have a booking under the name Martin.", "J'ai une réservation au nom de Martin.", "aï hav e bou-kinng eun-deur de nèïm mar-tinn"],
      ["What time is check-out?", "À quelle heure faut-il libérer la chambre ?", "wot taïm iz tchèk-aout"],
      ["Is breakfast included?", "Le petit-déjeuner est-il compris ?", "iz brèk-feust inn-klou-did"],
      ["The shower doesn't work.", "La douche ne marche pas.", "de chaou-eur da-zeunt weurk"],
      ["Could I have another towel, please?", "Pourrais-je avoir une autre serviette ?", "koud aï hav e-na-deur taou-eul, pliz"],
      ["Can I leave my luggage here?", "Je peux laisser mes bagages ici ?", "kann aï liv maï la-guidj hir"],
    ] },
  { day: 4, title: "Au café, au pub, au restaurant", photo: "j4", tip: "Au pub, on commande et on paie directement au bar : personne ne vient prendre la commande à table.",
    phrases: [
      ["Can I have a coffee, please?", "Je peux avoir un café, s'il vous plaît ?", "kann aï hav e ko-fi, pliz"],
      ["A table for two, please.", "Une table pour deux, s'il vous plaît.", "e tè-beul for tou, pliz"],
      ["What do you recommend?", "Qu'est-ce que vous me conseillez ?", "wot dou you rè-ko-mennd"],
      ["I'm allergic to nuts.", "Je suis allergique aux fruits à coque.", "aïm a-leur-djik tou nats"],
      ["Could we have the bill, please?", "Pourrait-on avoir l'addition ?", "koud wi hav de bil, pliz"],
      ["Is service included?", "Le service est-il compris ?", "iz seur-viss inn-klou-did"],
    ] },
  { day: 5, title: "Faire ses achats et payer", photo: "j5", tip: "Les prix se lisent « twelve pounds fifty » (12,50 £). Le « p » (pence) se dit « pi ».",
    phrases: [
      ["How much is this?", "Combien ça coûte ?", "haou match iz dis"],
      ["I'm just looking, thanks.", "Je regarde seulement, merci.", "aïm djast lou-kinng, fènks"],
      ["Have you got this in a bigger size?", "Vous l'avez dans une taille au-dessus ?", "hav you got dis inn e bi-gueur saïz"],
      ["Do you take contactless?", "Vous acceptez le sans contact ?", "dou you tèïk konn-takt-less"],
      ["Could I have a receipt, please?", "Pourrais-je avoir un ticket de caisse ?", "koud aï hav e ri-sit, pliz"],
      ["Where can I find the toilets?", "Où sont les toilettes ?", "wèr kann aï faïnd de toï-lets"],
    ] },
  { day: 6, title: "Demander son chemin", photo: "j6", tip: "Les Londoniens disent souvent la distance en minutes : « It's a ten-minute walk ».",
    phrases: [
      ["Excuse me, how do I get to the British Museum?", "Excusez-moi, comment aller au British Museum ?", "ex-kiouz mi, haou dou aï guèt tou de bri-tich miou-zi-eum"],
      ["Is it far from here?", "C'est loin d'ici ?", "iz it far from hir"],
      ["Is it within walking distance?", "On peut y aller à pied ?", "iz it wi-dinn wo-kinng dis-tanns"],
      ["Turn left, then go straight on.", "Tournez à gauche, puis allez tout droit.", "teurn lèft, dèn go-ou strèït onn"],
      ["It's on the corner.", "C'est au coin de la rue.", "its onn de kor-neur"],
      ["Could you show me on the map?", "Pouvez-vous me montrer sur le plan ?", "koud you cho-ou mi onn de map"],
    ] },
  { day: 7, title: "Urgences et imprévus", photo: "j7", tip: "Numéro d'urgence au Royaume-Uni : 999 (ou 112). Pour un souci de santé non urgent : 111, ou demande conseil au pharmacien (« chemist »).",
    phrases: [
      ["Can you help me, please?", "Pouvez-vous m'aider, s'il vous plaît ?", "kann you hèlp mi, pliz"],
      ["I've lost my passport.", "J'ai perdu mon passeport.", "aïv lost maï pass-port"],
      ["Where is the nearest pharmacy?", "Où est la pharmacie la plus proche ?", "wèr iz de ni-rest far-ma-si"],
      ["I need a doctor.", "J'ai besoin d'un médecin.", "aï nid e dok-teur"],
      ["My phone has been stolen.", "On m'a volé mon téléphone.", "maï fo-oun haz binn sto-o-leun"],
      ["I missed my train. What can I do?", "J'ai raté mon train. Que puis-je faire ?", "aï mist maï trèïn. wot kann aï dou"],
    ] },
];
