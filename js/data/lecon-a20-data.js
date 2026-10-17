// The Roots — A2.0 « Passerelle A1 → A2 » : leçon transversale entre A1 et A2. Mêmes formats qu'A1.x / A2.1.
// But : réviser les RÈGLES des temps vus en A1 (présent simple, présent continu, going to, be / have got, would like)
// et les VERBES de base de A1, puis expliquer pourquoi cette transition évite les lacunes avant le passé (A2.2).
// Contenu à relire par un natif. Pas d'image à fournir (utilise les visuels génériques de la ville).
import { balanceAll } from "./balance.js";
const names = (a) => a.map((n) => ({ v: n, label: n }));
// La bonne réponse est écrite en premier ; balanceAll() la répartit ensuite sur les positions.
const Q = (s, ok, a, b, ex) => (ex ? [s, [ok, a, b], 0, ex] : [s, [ok, a, b], 0]);
// Q&R : chaque question a UNE explication par choix (ordre : bonne réponse, faux 1, faux 2) ; balanceAll() les réordonne avec les choix.
const E = (s, ok, a, b, eo, ea, eb) => [s, [ok, a, b], 0, [eo, ea, eb]];
const T = (title, text, qs) => ({ title, text, q: qs.map((x) => Q(...x)) });
const A = (script, qs) => ({ script, q: qs.map((x) => Q(...x)) });

export const VOCAB_A20 = [
  { kind: "greetings", title: "Pourquoi cette passerelle ?", icon: "🌉",
    tip: "En A1 tu as appris à parler du présent et du futur proche : habitudes (“I get up at seven”), maintenant (“I'm cooking”), projets (“I'm going to travel”). Le niveau A2 ajoute le PASSÉ (“I got up at seven yesterday”). Un passé solide s'appuie sur des verbes et des règles de base sûrs : si “she go” ou “I am work” te échappe encore, l'erreur se répétera au passé. Cette leçon vérifie tout, une fois, pour ne laisser aucune lacune.",
    examples: [["I get up at seven every day.", "Je me lève à sept heures tous les jours."], ["I'm cooking dinner now.", "Je prépare le dîner en ce moment."], ["We're going to visit Rome next week.", "Nous allons visiter Rome la semaine prochaine."]],
    practice: "Écoute et répète la phrase.", say: "Before the past, I check my present." },
  { kind: "words", title: "Les 12 verbes de base", icon: "🔑",
    words: [["be", "être"], ["have", "avoir"], ["do", "faire"], ["go", "aller"], ["take", "prendre"], ["make", "fabriquer / faire"], ["get", "obtenir / devenir"], ["like", "aimer"], ["want", "vouloir"], ["live", "habiter"], ["work", "travailler"], ["play", "jouer"]],
    tip: "Ce sont les verbes les plus utilisés. Attention : “be”, “have”, “do” et “go” changeront de forme au passé (A2.2) : on les maîtrise d'abord au présent.",
    examples: [["I am a student and I have two sisters.", "Je suis étudiant et j'ai deux sœurs."], ["She lives in Paris and works in a bank.", "Elle habite à Paris et travaille dans une banque."]],
    q: E("« Aller » se dit…", "go", "take", "get", "Go = aller (I go to school).", "Take = prendre.", "Get = obtenir / devenir.") },
  { kind: "words", title: "Les verbes du quotidien", icon: "🏠",
    words: [["eat", "manger"], ["drink", "boire"], ["read", "lire"], ["watch", "regarder"], ["listen", "écouter"], ["study", "étudier"], ["cook", "cuisiner"], ["walk", "marcher"], ["call", "appeler"], ["meet", "rencontrer"]],
    tip: "À la 3e personne du singulier, on ajoute -s : he eats, she reads. Cas spéciaux : study → studies, watch → watches.",
    examples: [["He studies English every evening.", "Il étudie l'anglais tous les soirs."], ["They meet their friends on Saturday.", "Ils retrouvent leurs amis le samedi."]],
    q: E("« Écouter » se dit…", "listen", "watch", "read", "Listen = écouter (listen to music).", "Watch = regarder.", "Read = lire.") },
  { kind: "words", title: "Les verbes de la ville et du voyage", icon: "🧳",
    words: [["turn", "tourner"], ["cross", "traverser"], ["buy", "acheter"], ["pay", "payer"], ["try", "essayer"], ["leave", "partir / quitter"], ["arrive", "arriver"], ["stay", "rester"], ["book", "réserver"], ["wait", "attendre"]],
    tip: "Les verbes en consonne + y changent à la 3e personne : try → tries. “Leave” (partir) deviendra “left” au passé : tu le verras en A2.2.",
    examples: [["The train arrives at nine.", "Le train arrive à neuf heures."], ["She tries a jacket on.", "Elle essaie une veste."]],
    q: E("« Réserver » se dit…", "book", "buy", "pay", "Book = réserver (book a room).", "Buy = acheter.", "Pay = payer.") },
  { kind: "words", title: "Les repères de temps", icon: "🕒",
    words: [["every day", "tous les jours"], ["now", "maintenant"], ["at the moment", "en ce moment"], ["today", "aujourd'hui"], ["tomorrow", "demain"], ["next week", "la semaine prochaine"], ["yesterday", "hier"], ["last week", "la semaine dernière"]],
    tip: "“Every day” → présent simple. “Now / at the moment” → présent continu. “Tomorrow / next week” → going to. “Yesterday / last week” annoncent le passé : c'est le sujet de A2.2.",
    examples: [["I work every day, but I'm not working now.", "Je travaille tous les jours, mais pas maintenant."], ["We're going to leave tomorrow.", "Nous allons partir demain."]],
    q: E("« En ce moment » se dit…", "at the moment", "every day", "next week", "At the moment = en ce moment (présent continu).", "Every day = tous les jours (présent simple).", "Next week = la semaine prochaine (going to).") },
];

const G = (title, icon, qs) => ({ title, icon, qa: true, examples: [], table: [], qs });

export const GRAMMAR_A20 = [
  G("À quoi sert chaque temps ?", "🧭", [
    E("“I ___ at seven every day.” (habitude)", "get up", "am getting up", "getting up", "Habitude (every day) → présent simple : I get up.", "Le présent continu parle de ce qui se passe maintenant, pas d'une habitude.", "Il manque am / is / are : “getting up” seul n'est pas un verbe conjugué."),
    E("“Look! It ___.” (maintenant)", "is raining", "rains", "rain", "“Look!” = maintenant → présent continu : is + -ing.", "“rains” (présent simple) dit un fait général, pas ce qui se passe sous tes yeux.", "Après “it”, le verbe prend -s ou is + -ing : “rain” seul est incorrect."),
    E("“Next week we ___ visit Rome.” (projet)", "are going to", "go to", "do going to", "Projet proche → be going to + verbe.", "“go to” n'exprime pas un projet : il faudrait un verbe après.", "“do going to” n'existe pas : on utilise am / is / are going to."),
    E("Quel mot annonce une HABITUDE ?", "every day", "now", "tomorrow", "“Every day” (tous les jours) → présent simple.", "“Now” (maintenant) annonce le présent continu.", "“Tomorrow” (demain) annonce going to."),
  ]),
  G("Présent simple : la règle complète", "🔁", [
    E("She ___ in a bank.", "works", "work", "is work", "he / she / it + verbe + -s : she works.", "Avec she, il faut le -s : “work” va avec I / you / we / they.", "“is work” mélange be et un verbe : on dit simplement “works”."),
    E("He ___ eat meat. (négatif)", "doesn't", "don't", "isn't", "he / she / it → doesn't + verbe de base.", "“don't” va avec I / you / we / they.", "“isn't” va avec -ing ou un adjectif, pas avec “eat”."),
    E("___ she live in London?", "Does", "Do", "Is", "Question avec she → Does + sujet + verbe de base.", "“Do” va avec I / you / we / they.", "“Is” s'utilise avec be, pas avec le verbe “live”."),
    E("My brother ___ English at school.", "studies", "studys", "study", "consonne + y → -ies : study → studies.", "Après une consonne, y devient -ies : on n'écrit pas “studys”.", "Avec “my brother” (3e personne), il faut la terminaison : studies."),
  ]),
  G("Présent continu : la règle complète", "⏳", [
    E("They ___ for the bus.", "are waiting", "is waiting", "waits", "they → are + verbe en -ing.", "“is” va avec he / she / it.", "“waits” est un présent simple : ici on parle de maintenant."),
    E("I'm ___ a letter. (write)", "writing", "writeing", "write", "On enlève le -e final avant -ing : write → writing.", "Verbe en -e : on supprime le e, donc pas “writeing”.", "Après I'm, il faut -ing : “write” seul est incorrect."),
    E("She ___ cooking now. (négatif)", "isn't", "doesn't", "don't", "Présent continu négatif : isn't + -ing.", "“doesn't” s'utilise avec le verbe de base, pas avec -ing.", "“don't” va avec I / you / we / they et le verbe de base."),
    E("___ you reading now?", "Are", "Do", "Does", "Question au présent continu : Are + sujet + -ing.", "“Do” va avec le verbe de base : Do you read … ?", "“Does” va avec he / she / it et le verbe de base."),
  ]),
  G("Les verbes qui n'aiment pas le -ing", "🚫", [
    E("I ___ the answer. (know)", "know", "am knowing", "knowing", "“know” est un verbe d'état : pas de -ing.", "On ne dit pas “am knowing” : savoir = état, pas action.", "“knowing” seul n'est pas conjugué."),
    E("She ___ a coffee. (want)", "wants", "is wanting", "want", "“want” : présent simple, avec -s pour she.", "“want” (vouloir) est un état : jamais “is wanting”.", "Avec she, il faut le -s : “wants”."),
    E("We ___ music. (love)", "love", "are loving", "loves", "“love” est un verbe d'état : présent simple.", "On dit “we love”, pas “are loving”, pour un goût.", "“loves” est pour he / she / it, pas pour we."),
  ]),
  G("Be et have got : révision", "🧩", [
    E("She ___ got two cats.", "has", "have", "is", "she → has got (possession).", "“have got” va avec I / you / we / they.", "“is got” n'existe pas : on garde have / has got."),
    E("I ___ a student.", "am", "have", "do", "Identité / métier → be : I am.", "“have” exprime la possession, pas le métier.", "“do” est un auxiliaire de questions et négations, pas un verbe d'état ici."),
    E("___ there a park near here?", "Is", "Are", "Do", "“a park” est singulier → Is there … ?", "“Are there” demande un pluriel : parks.", "“Do there” n'existe pas : on inverse is / are."),
    E("I ___ got a car. (négatif)", "haven't", "hasn't", "don't", "I → haven't got.", "“hasn't got” va avec he / she / it.", "“don't got” n'est pas la forme standard avec have got."),
  ]),
  G("Going to et would like", "🚀", [
    E("I'm going ___ buy a ticket.", "to", "for", "at", "going to + verbe de base.", "“for” ne s'emploie pas ici : le projet se dit going to.", "“at” indique un lieu ou une heure, pas un projet."),
    E("She ___ going to leave. (négatif)", "isn't", "doesn't", "don't", "Négatif de going to : isn't going to.", "“doesn't” n'est pas utilisé avec be going to.", "“don't” non plus : il faut be + not."),
    E("I ___ a coffee, please. (poli)", "'d like", "'m like", "like to", "I'd like = je voudrais (demande polie).", "“I'm like” a un autre sens (c'est comme).", "“like to” seul n'est pas une demande polie."),
    E("___ you going to stay?", "Are", "Do", "Does", "Question avec going to : Are you going to … ?", "“Do” est inutile : be s'inverse directement.", "“Does” non plus : c'est le verbe be qui passe devant."),
  ]),
  G("Choisir le bon temps", "🎯", [
    E("“Right now I ___ to work.”", "am walking", "walk", "walks", "Right now → présent continu.", "“walk” dit une habitude, pas ce qui se passe maintenant.", "“walks” est pour he / she / it et pour une habitude."),
    E("“Every day I ___ to work.”", "walk", "am walking", "am going to walk", "Every day → présent simple.", "Le présent continu parle de maintenant, pas de “tous les jours”.", "Going to parle d'un projet, pas d'une habitude."),
    E("“Tomorrow I ___ walk.”", "am going to", "am", "walking", "Tomorrow + projet → be going to.", "“am walk” : il manque le -ing ou going to.", "“walking” seul n'est pas conjugué."),
    E("Quel mot annonce le PASSÉ ?", "yesterday", "tomorrow", "now", "Yesterday = hier → c'est le passé (A2.2).", "Tomorrow = demain → futur.", "Now = maintenant → présent."),
  ]),
  // Ce qui t'attend en A2 : questions d'éveil (on découvre, on n'apprend pas tout) — chaque réponse est expliquée.
  G("Ce qui t'attend en A2 (1/6) : routine et passé", "🔭", [
    E("Quelle phrase parle d'une ROUTINE ?", "I get up at seven every day.", "I'm getting up now.", "I got up at seven yesterday.", "Every day = habitude, présent simple (A2.1).", "Now = en ce moment : présent continu.", "Yesterday = hier : c'est le passé, que tu verras en A2.2."),
    E("“Yesterday I ___ to the cinema.”", "went", "go", "going", "“went” est le passé de “go” : tu le verras en A2.2.", "“go” est le présent : avec yesterday, il faut le passé.", "“going” seul n'est pas conjugué."),
    E("“We ___ pizza last night.”", "ate", "eat", "eating", "“ate” est le passé de “eat” (verbe irrégulier, A2.2).", "“eat” est le présent : last night annonce le passé.", "“eating” seul n'est pas conjugué."),
    E("“I used to play football.” veut dire…", "Avant, je jouais au foot.", "Je joue au foot en ce moment.", "Je vais jouer au foot.", "“Used to” = une habitude du passé qui n'existe plus (A2.2).", "En ce moment se dirait : I'm playing.", "Un projet se dirait : I'm going to play."),
  ]),
  G("Ce qui t'attend en A2 (2/6) : pendant que et projets", "🔭", [
    E("“I was cooking when the phone rang.” veut dire…", "Je cuisinais quand le téléphone a sonné.", "Je vais cuisiner.", "Je cuisine tous les jours.", "“was cooking” = action en cours dans le passé (A2.3).", "Un projet se dirait : I'm going to cook.", "Une habitude se dirait : I cook every day."),
    E("“while” veut dire…", "pendant que", "avant", "après", "“While” relie deux actions simultanées (A2.3).", "Avant se dit before.", "Après se dit after."),
    E("“I'm going to study medicine.” exprime…", "un projet", "une habitude", "un souvenir", "Be going to = projet (A2.4, tu l'as déjà vu).", "Une habitude utiliserait le présent simple.", "Un souvenir utiliserait le passé."),
    E("“I'm meeting Tom at six tonight.” exprime…", "un rendez-vous prévu", "une habitude", "un souvenir", "Présent continu + heure = arrangement déjà prévu (A2.4).", "Une habitude aurait “every …”.", "Un souvenir serait au passé."),
  ]),
  G("Ce qui t'attend en A2 (3/6) : comparer et santé", "🔭", [
    E("“It's the ___ day of the year.” (chaud)", "hottest", "most hot", "hotter", "Superlatif court : hot → the hottest (A2.5).", "“most hot” n'existe pas pour un adjectif court.", "“hotter” compare deux choses, il ne dit pas « le plus »."),
    E("“He is as tall as his brother.” veut dire…", "Il est aussi grand que son frère.", "Il est plus grand que son frère.", "Il est moins grand que son frère.", "As … as = aussi … que (A2.5).", "Plus grand se dit taller than.", "Moins grand se dit not as tall as."),
    E("“I have a headache.” veut dire…", "J'ai mal à la tête.", "J'ai faim.", "J'ai froid.", "Headache = mal de tête (A2.6, la santé).", "Avoir faim = be hungry.", "Avoir froid = be cold."),
    E("“You should rest.” veut dire…", "Tu devrais te reposer.", "Tu dois payer.", "Tu es en retard.", "“Should” donne un conseil (A2.6).", "Payer se dirait : You must pay.", "En retard se dirait : You are late."),
  ]),
  G("Ce qui t'attend en A2 (4/6) : météo et logement", "🔭", [
    E("“It's going to rain tomorrow.” veut dire…", "Il va pleuvoir demain.", "Il pleut maintenant.", "Il pleuvait hier.", "Going to + tomorrow = prévision proche (A2.7).", "Maintenant se dirait : It's raining.", "Hier se dirait : It rained yesterday."),
    E("“The forecast says it will be sunny.” — “will” indique…", "une prévision pour plus tard", "un souvenir", "une habitude", "“Will” annonce une prévision (A2.7).", "Un souvenir serait au passé : It was sunny.", "Une habitude : It is usually sunny."),
    E("“There's a big garden behind the house.” — garden =", "jardin", "garage", "grenier", "Garden = jardin (A2.8, logement).", "Garage = garage, un autre mot.", "Grenier = attic."),
    E("“I live in a flat near the station.” — flat =", "appartement", "maison", "chambre", "Flat = appartement en anglais britannique (A2.8).", "Maison = house.", "Chambre = bedroom."),
  ]),
  G("Ce qui t'attend en A2 (5/6) : téléphone et sorties", "🔭", [
    E("“Can I speak to Anna, please?” veut dire…", "Puis-je parler à Anna ?", "Je suis Anna.", "Anna est partie.", "Formule de base au téléphone (A2.9).", "Se présenter se dit : This is Anna.", "Anna est partie se dirait : Anna has left."),
    E("“Hold on, please.” veut dire…", "Ne quittez pas, s'il vous plaît.", "Au revoir.", "Répétez, s'il vous plaît.", "Hold on = attendre au téléphone (A2.9).", "Au revoir se dit : Goodbye.", "Répéter se dit : Could you repeat that?"),
    E("“Would you like to come to the cinema?” est…", "une invitation", "un refus", "un horaire", "Would you like to … ? = inviter (A2.10).", "Un refus : I'm sorry, I can't.", "Un horaire : The film starts at eight."),
    E("“I'm sorry, I can't make it.” veut dire…", "Désolé, je ne peux pas venir.", "Désolé, je suis en retard.", "Désolé, j'arrive.", "Can't make it = ne pas pouvoir venir (A2.10).", "En retard se dit : I'm late.", "J'arrive se dit : I'm on my way."),
  ]),
  G("Ce qui t'attend en A2 (6/6) : opinions et voyage", "🔭", [
    E("“In my opinion, it's a great idea.” — in my opinion =", "à mon avis", "par contre", "par exemple", "In my opinion = à mon avis (A2.11).", "Par contre = however.", "Par exemple = for example."),
    E("“I'm really excited about the trip.” — excited =", "enthousiaste", "fatigué", "inquiet", "Excited = enthousiaste (A2.11, sentiments).", "Fatigué = tired.", "Inquiet = worried."),
    E("“My flight was cancelled.” veut dire…", "Mon vol a été annulé.", "Mon vol est retardé.", "J'ai réservé mon vol.", "Was cancelled = passé passif : un imprévu en voyage (A2.12).", "Retardé se dit : was delayed.", "Réserver se dit : book."),
    E("“I lost my passport.” veut dire…", "J'ai perdu mon passeport.", "J'ai trouvé mon passeport.", "J'ai oublié mon passeport.", "“Lost” est le passé de lose (A2.12).", "Trouvé se dit : found.", "Oublié se dit : forgot."),
  ]),
];

export const READING_A20 = [
  { who: "Lina", text: "Hi! I'm Lina. I live in Lyon and I work in a bank. Every day I get up at seven and I walk to work. Today is different: I'm working at home because the bus is on strike. Tomorrow I'm going to visit my sister in Paris. She has got two children.",
    fr: "Lina habite à Lyon et travaille dans une banque. D'habitude elle va au travail à pied. Aujourd'hui elle travaille chez elle. Demain elle va voir sa sœur à Paris.",
    qs: [E("How does Lina usually go to work?", "She walks", "She takes the bus", "She drives", "“Every day I … walk to work” : habitude au présent simple.", "Le bus est en grève aujourd'hui, mais ce n'est pas son habitude.", "Elle ne parle jamais de voiture."),
      E("What is she going to do tomorrow?", "Visit her sister", "Work at home", "Go to the bank", "“Tomorrow I'm going to visit my sister” : projet avec going to.", "Elle travaille à la maison aujourd'hui, pas demain.", "Elle va à la banque d'habitude, pas demain.")] },
  { who: "Omar", text: "I'm Omar and I'm a student. I study English and I like music. I don't watch TV in the evening. Right now I'm waiting for the train to Oxford. I'd like to find a seat near the window. I'm going to arrive at ten.",
    fr: "Omar est étudiant. Il attend le train pour Oxford. Il voudrait une place près de la fenêtre. Il va arriver à dix heures.",
    qs: [E("What is Omar doing now?", "Waiting for a train", "Watching TV", "Studying", "“Right now I'm waiting” : présent continu = maintenant.", "Il ne regarde pas la télé le soir (I don't watch TV).", "Il étudie en général (présent simple), pas maintenant."),
      E("What would he like?", "A seat near the window", "A ticket", "A coffee", "“I'd like to find a seat near the window” : demande polie.", "Le billet n'est pas mentionné.", "Le café n'est pas mentionné.")] },
  { who: "Sara", text: "My name is Sara. I have got a brother and a sister. My brother lives in London and my sister works in Madrid. There are four people in my family. At the moment I'm cooking dinner. I know the recipe by heart, so it's easy.",
    fr: "Sara a un frère et une sœur. En ce moment elle prépare le dîner. Elle connaît la recette par cœur.",
    qs: [E("How many people are there in her family?", "Four", "Two", "Six", "Le texte dit : “There are four people in my family.”", "Deux, c'est seulement son frère et sa sœur.", "Le texte ne parle pas de six personnes."),
      E("What is Sara doing at the moment?", "Cooking dinner", "Working in Madrid", "Visiting London", "“At the moment I'm cooking” : présent continu.", "Sa sœur travaille à Madrid, pas Sara.", "Son frère habite à Londres, elle ne s'y trouve pas.")] },
  { who: "Ben", text: "I'm Ben. I play football every Saturday and I never miss a game. This week I'm not playing because I'm ill. I'm staying in bed and I'm reading a book. Next week I'm going to play again. I want to score a goal!",
    fr: "Ben joue au football tous les samedis. Cette semaine il est malade et il lit. La semaine prochaine il va rejouer.",
    qs: [E("When does Ben usually play football?", "Every Saturday", "Every day", "Next week", "“Every Saturday” : habitude au présent simple.", "Le texte dit “every Saturday”, pas tous les jours.", "Next week = la semaine prochaine : un projet, pas l'habitude."),
      E("Why isn't he playing this week?", "He is ill", "He is busy", "He is on holiday", "“Because I'm ill” = parce que je suis malade.", "Il ne parle pas d'être occupé.", "Il reste au lit, pas en vacances.")] },
];

export const LISTENING_A20 = [
  { title: "A normal day", text: "I get up at seven every day. I have breakfast at half past seven and I go to school by bus. I never eat lunch at home.",
    qs: [E("What time does the speaker get up?", "Seven", "Six", "Eight", "“I get up at seven every day.”", "Six n'est pas dit : c'est sept heures.", "Huit n'est pas dit : c'est sept heures."),
      E("How does the speaker go to school?", "By bus", "On foot", "By car", "“I go to school by bus.”", "Il ne dit pas qu'il marche.", "Il ne parle pas de voiture.")] },
  { title: "On the phone", text: "Hello, Anna. What are you doing? I'm waiting for the bus at the moment. Are you going to be late? No, I'm going to arrive at nine.",
    qs: [E("What is Anna doing?", "Waiting for the bus", "Cooking", "Working", "“I'm waiting for the bus at the moment.”", "Rien n'indique qu'elle cuisine.", "Elle attend un bus, elle ne travaille pas."),
      E("When is she going to arrive?", "At nine", "At eight", "At ten", "“I'm going to arrive at nine.”", "Huit heures n'est pas citée.", "Dix heures n'est pas citée.")] },
  { title: "Questions", text: "Does she work in London? No, she doesn't. She works in Oxford. Is she working today? Yes, she is. She's working at home.",
    qs: [E("Where does she work?", "In Oxford", "In London", "At home only", "“She works in Oxford” : présent simple.", "Réponse à la question : non, elle ne travaille pas à Londres.", "Elle travaille chez elle aujourd'hui seulement."),
      E("Is she working today?", "Yes, at home", "No, she is ill", "No, she is on holiday", "“Yes, she is. She's working at home.”", "Le texte dit oui, pas qu'elle est malade.", "Le texte dit oui, pas qu'elle est en vacances.")] },
  { title: "At the café", text: "Good morning. Would you like a coffee or a tea? I'd like a tea, please. Are you going to have a sandwich too? Yes, I'd like a cheese sandwich.",
    qs: [E("What does the customer order to drink?", "A tea", "A coffee", "Water", "“I'd like a tea, please.”", "Le café était proposé mais refusé.", "L'eau n'est pas mentionnée."),
      E("What sandwich does the customer choose?", "Cheese", "Ham", "Chicken", "“I'd like a cheese sandwich.”", "Le jambon n'est pas mentionné.", "Le poulet n'est pas mentionné.")] },
];

export const EXERCISES_A20 = [
  { title: "Vocabulaire — Les verbes de base", help: "Choisis le sens correct.",
    qs: [E("get up", "se lever", "se coucher", "se laver", "Get up = quitter le lit.", "Se coucher = go to bed.", "Se laver = wash."),
      E("wait", "attendre", "arriver", "partir", "Wait = attendre.", "Arriver = arrive.", "Partir = leave."),
      E("leave", "partir", "rester", "arriver", "Leave = partir / quitter.", "Rester = stay.", "Arriver = arrive."),
      E("book", "réserver", "acheter", "payer", "Book = réserver (a room, a table).", "Acheter = buy.", "Payer = pay.")] },
  { title: "Présent simple", help: "Habitudes, faits, négation et question.",
    qs: [E("The train ___ at nine.", "leaves", "leave", "is leave", "Horaire fixe, it → leaves.", "Avec it, il faut le -s.", "On ne mélange pas be et le verbe."),
      E("I ___ coffee every morning.", "drink", "drinks", "am drinking", "Habitude avec I → drink.", "Le -s est pour he / she / it.", "Every morning = habitude, donc pas -ing."),
      E("___ you live in Paris?", "Do", "Does", "Are", "Question avec you → Do.", "Does va avec he / she / it.", "Are va avec -ing ou un adjectif, pas avec “live”."),
      E("He ___ eat meat. (négatif)", "doesn't", "don't", "isn't", "he → doesn't.", "don't va avec I / you / we / they.", "isn't va avec -ing ou un adjectif.")] },
  { title: "Présent continu", help: "Am / is / are + -ing.",
    qs: [E("I ___ a letter now.", "am writing", "write", "writes", "Now → am + -ing.", "“write” = habitude, pas maintenant.", "“writes” = habitude et he / she / it."),
      E("They ___ for the bus.", "are waiting", "is waiting", "waits", "they → are + -ing.", "is va avec he / she / it.", "waits = présent simple, pas maintenant."),
      E("What ___ you doing?", "are", "do", "does", "Question avec doing → are.", "do ne va pas avec -ing.", "does ne va pas avec -ing."),
      E("Shh! The baby ___.", "is sleeping", "sleeps", "sleep", "Shh = maintenant → is sleeping.", "sleeps dirait une habitude.", "baby = 3e personne : sleep est incorrect.")] },
  { title: "Going to et would like", help: "Projets et demandes polies.",
    qs: [E("I ___ going to buy a ticket.", "am", "is", "do", "I → am going to.", "is va avec he / she / it.", "do n'est pas utilisé avec going to."),
      E("She ___ going to leave. (négatif)", "isn't", "doesn't", "don't", "isn't going to.", "doesn't n'est pas utilisé avec be going to.", "don't non plus."),
      E("___ you going to stay?", "Are", "Do", "Does", "Are you going to … ?", "Do est inutile ici.", "Does est inutile ici."),
      E("Would you like ___ tea?", "some", "a", "an", "Some devant un indénombrable : some tea.", "“a tea” se dit pour une tasse précise.", "an s'utilise devant une voyelle.")] },
  { title: "Be et have got", help: "Révision des bases.",
    qs: [E("He ___ twenty years old.", "is", "has", "have", "L'âge se dit avec be : He is twenty.", "En anglais, on n'utilise pas has pour l'âge.", "Have non plus pour l'âge."),
      E("She ___ got a sister.", "has", "have", "is", "she → has got.", "have va avec I / you / we / they.", "is got n'existe pas."),
      E("They ___ students.", "are", "is", "have", "they → are.", "is va avec he / she / it.", "have exprime la possession."),
      E("I ___ got a car. (négatif)", "haven't", "hasn't", "don't", "I → haven't got.", "hasn't va avec he / she / it.", "don't got n'est pas la forme standard.")] },
  { title: "Choisir le bon temps", help: "Habitude, maintenant ou projet ?",
    qs: [E("Every day I ___ to work.", "walk", "am walking", "am going to walk", "Every day → présent simple.", "Continu = maintenant.", "Going to = projet."),
      E("Right now I ___ to work.", "am walking", "walk", "walks", "Right now → continu.", "walk = habitude.", "walks = he / she / it."),
      E("Tomorrow I ___ walk to work.", "am going to", "am walk", "walking", "Tomorrow → going to.", "am walk : forme incorrecte.", "walking seul n'est pas conjugué."),
      E("I ___ the answer. (know)", "know", "am knowing", "knows", "know : verbe d'état, pas de -ing.", "On ne dit pas am knowing.", "knows : seulement he / she / it.")] },
];

export const EXPRESSION_A20 = [
  { title: "Ma routine d'aujourd'hui", icon: "📅",
    prompts: ["Dis ce que tu fais d'habitude le matin.", "Dis ce que tu fais en ce moment.", "Dis ce que tu vas faire demain.", "Dis une chose que tu ne fais jamais."],
    model: "I usually get up at seven. At the moment I'm writing a message. Tomorrow I'm going to visit my sister. I never watch TV in the morning.",
    checks: [["Une habitude", "\\bi (usually |always |often )?(get up|wake up|have|go|walk|work|eat|drink)\\b"], ["En ce moment", "\\b(at the moment|right now|now)\\b.*\\b(i'm|i am)\\s+\\w+ing|\\b(i'm|i am)\\s+\\w+ing.*\\b(at the moment|right now|now)\\b"], ["Demain", "\\btomorrow\\b.*\\b(i'm|i am) going to\\b|\\b(i'm|i am) going to\\b.*\\btomorrow\\b"], ["Jamais", "\\bi (never|rarely)\\s+\\w+"]] },
  { title: "Moi et ma famille", icon: "👨‍👩‍👧",
    prompts: ["Dis où tu habites.", "Dis combien de frères et sœurs tu as.", "Dis où travaille ou étudie une personne de ta famille.", "Dis ce que tu voudrais faire ce week-end."],
    model: "I live in Paris. I have got two sisters. My brother works in a hospital. I'd like to go to the cinema this weekend.",
    checks: [["Où tu habites", "\\bi live (in|at)\\b"], ["Frères et sœurs", "\\bi (have|'ve) (got )?\\w+ (brother|sister|brothers|sisters)\\b"], ["Une personne de la famille", "\\b(my|he|she)\\b.*\\b(works?|studies|study)\\b"], ["Un souhait", "\\bi'?d like (to )?\\w+|\\bi would like (to )?\\w+"]] },
];

export const TEST_TEXTS_A20 = [
  T("Lina", "I live in Lyon and I work in a bank. Every day I walk to work. Today is different: I'm working at home because the bus is on strike. Tomorrow I'm going to visit my sister in Paris.", [["How does Lina usually go to work?", "She walks", "She takes the bus", "She drives"], ["Why is she at home today?", "The bus is on strike", "She is ill", "It is Sunday"], ["What is she going to do tomorrow?", "Visit her sister", "Go to the bank", "Stay at home"]]),
  T("Omar", "I'm a student and I study English. Right now I'm waiting for the train to Oxford. I'd like a seat near the window. I'm going to arrive at ten.", [["What does Omar study?", "English", "Maths", "Music"], ["What is he doing now?", "Waiting for a train", "Buying a ticket", "Sleeping"], ["What time is he going to arrive?", "Ten", "Nine", "Eleven"]]),
  T("Sara", "I have got a brother and a sister. My brother lives in London and my sister works in Madrid. At the moment I'm cooking dinner. I know the recipe by heart.", [["Where does her sister work?", "In Madrid", "In London", "In Paris"], ["What is she doing at the moment?", "Cooking dinner", "Visiting London", "Watching TV"], ["How many brothers has she got?", "One", "Two", "None"]]),
  T("Ben", "I play football every Saturday. This week I'm not playing because I'm ill. I'm staying in bed and reading a book. Next week I'm going to play again.", [["When does he usually play?", "Every Saturday", "Every day", "On Sunday"], ["What is he doing this week?", "Reading in bed", "Playing football", "Travelling"], ["When is he going to play again?", "Next week", "Tomorrow", "This weekend"]]),
  T("A message", "Hi Tom! I'm at the station. The train doesn't leave until six, so I'm having a coffee. I'm going to call you at five. Would you like to meet me at the park? Anna", [["Where is Anna?", "At the station", "At the park", "At home"], ["What is she having?", "A coffee", "A sandwich", "Lunch"], ["What does she ask Tom?", "To meet at the park", "To call at six", "To come to the station"]]),
  T("At the hotel", "Good evening. I'd like to book a room for two nights, please. A single room or a double room? A single room. Breakfast is at eight. Are you going to have breakfast here? Yes, I am.", [["How many nights is the room for?", "Two", "One", "Three"], ["What kind of room does the guest want?", "A single room", "A double room", "A family room"], ["Is the guest going to have breakfast at the hotel?", "Yes", "No", "We don't know"]]),
  T("My neighbour", "My neighbour Mr Lee is a teacher. He teaches maths at the local school. He doesn't drive: he cycles to work every day. This morning he isn't cycling because it's raining. He is taking the bus.", [["What is Mr Lee's job?", "Teacher", "Driver", "Doctor"], ["How does he usually go to work?", "By bike", "By bus", "By car"], ["Why is he taking the bus today?", "It's raining", "He is ill", "His bike is old"]]),
  T("Weekend plans", "This weekend I'm going to relax. On Saturday I'm going to see a film with my friends. On Sunday I'd like to cook a big lunch for my family. We usually eat together on Sundays.", [["What is she going to do on Saturday?", "See a film", "Cook lunch", "Visit her aunt"], ["What would she like to do on Sunday?", "Cook a big lunch", "See a film", "Go shopping"], ["When does her family usually eat together?", "On Sundays", "On Saturdays", "Every day"]]),
];

export const TEST_AUDIOS_A20 = [
  A("I get up at seven every day. I have breakfast at half past seven and I go to school by bus.", [["What time does the speaker get up?", "Seven", "Six", "Eight"], ["How does the speaker go to school?", "By bus", "On foot", "By car"]]),
  A("Hello, Anna. What are you doing? I'm waiting for the bus at the moment. I'm going to arrive at nine.", [["What is Anna doing?", "Waiting for the bus", "Cooking", "Working"], ["When is she going to arrive?", "At nine", "At eight", "At ten"]]),
  A("Does she work in London? No, she doesn't. She works in Oxford. But today she's working at home.", [["Where does she work?", "In Oxford", "In London", "At home only"], ["Where is she today?", "At home", "In Oxford", "In London"]]),
  A("Would you like a coffee or a tea? I'd like a tea, please. And a cheese sandwich.", [["What does the customer drink?", "Tea", "Coffee", "Water"], ["What sandwich does the customer choose?", "Cheese", "Ham", "Chicken"]]),
  A("I have got two brothers. They live in Manchester. My mother is a nurse and my father is a driver.", [["How many brothers has the speaker got?", "Two", "One", "Three"], ["What is the father's job?", "Driver", "Nurse", "Teacher"]]),
  A("We are not working today. We're going to the beach because the weather is sunny. We're going to take the train at ten.", [["Where are they going?", "To the beach", "To work", "To the museum"], ["What time are they going to take the train?", "At ten", "At nine", "At eleven"]]),
  A("Excuse me, is there a bank near here? Yes, go straight on and turn left. It's next to the supermarket.", [["What is the person looking for?", "A bank", "A supermarket", "A station"], ["Where is it?", "Next to the supermarket", "Opposite the school", "Behind the station"]]),
  A("I don't eat meat, but I eat fish. I'm having fish today because I'm very hungry. I know a good restaurant near here.", [["What doesn't the speaker eat?", "Meat", "Fish", "Bread"], ["What is the speaker having today?", "Fish", "Meat", "Nothing"]]),
];

const g = (s, ok, a, b) => Q(s, ok, a, b);
export const TEST_GRAMMAR_A20 = [
  g("She ___ to school by bus every day.", "goes", "go", "is go"), g("I ___ coffee every morning.", "drink", "am drinking", "drinks"),
  g("Look! It ___ raining.", "is", "does", "has"), g("I'm ___ a letter right now. (write)", "writing", "writeing", "write"),
  g("He ___ TV in the evening. (watch)", "watches", "watch", "watchs"), g("___ she work on Saturdays?", "Does", "Is", "Do"),
  g("___ you reading now?", "Are", "Do", "Does"), g("Shh! The baby ___.", "is sleeping", "sleeps", "sleep"),
  g("I ___ the answer. (know)", "know", "am knowing", "knowing"), g("She ___ a new phone. (want)", "wants", "is wanting", "want"),
  g("The train ___ at eight.", "leaves", "leave", "is leave"), g("They ___ for the bus now.", "are waiting", "wait", "waits"),
  g("What ___ you usually do on Saturday?", "do", "are", "does"), g("What ___ you doing now?", "are", "do", "does"),
  g("I ___ work on Sundays. (négatif)", "don't", "doesn't", "am not"), g("She ___ cooking at the moment. (négatif)", "isn't", "doesn't", "don't"),
  g("He ___ twenty years old.", "is", "has", "have"), g("She ___ got a sister.", "has", "have", "is"),
  g("___ there a park near here?", "Is", "Are", "Do"), g("I ___ got a car. (négatif)", "haven't", "hasn't", "don't"),
  g("I'm ___ to buy a ticket.", "going", "go", "goes"), g("She ___ going to call him.", "is", "are", "does"),
  g("They ___ going to travel next week.", "are", "is", "do"), g("___ you going to stay at home?", "Are", "Do", "Is"),
  g("I ___ a coffee, please. (poli)", "'d like", "like to", "am like"), g("Would you like ___ tea?", "some", "a", "an"),
  g("Tomorrow I ___ visit my aunt.", "am going to", "am visit", "visiting"), g("Every Sunday we ___ lunch together.", "have", "are having", "having"),
  g("Right now we ___ lunch.", "are having", "have", "has"), g("My sister ___ in a hospital.", "works", "work", "is work"),
  g("We ___ to the cinema on Fridays.", "go", "goes", "going"), g("He ___ his homework now.", "is doing", "does", "do"),
  g("She doesn't ___ meat.", "eat", "eats", "eating"), g("Does he ___ English?", "study", "studies", "studying"),
  g("There ___ two books on the table.", "are", "is", "has"), g("How many brothers ___ you have?", "do", "does", "are"),
  g("I usually ___ tea, but today I'm drinking coffee.", "drink", "am drinking", "drinks"), g("He is ___ late. (jamais)", "never", "ever", "none"),
  g("Next week we ___ going to move house.", "are", "is", "do"), g("______ she live in London? (question)", "Does", "Do", "Is"),
];

export const MISSIONS_A20 = [
  { id: "m1", ic: "🧭", title: "Quel temps ?", sub: "Habitude, maintenant ou projet ?", hero: "city/m1" },
  { id: "m2", ic: "🔑", title: "Les verbes de base", sub: "Associe le verbe à son sens.", hero: "city/m2" },
  { id: "m3", ic: "💬", title: "Construis la phrase", sub: "Remets les mots dans l'ordre.", hero: "city/m3" },
  { id: "m4", ic: "⚖️", title: "Simple ou continu ?", sub: "Choisis la bonne forme du verbe.", hero: "city/m4" },
  { id: "m5", ic: "🚀", title: "Going to ou would like ?", sub: "Choisis la bonne expression.", hero: "city/m1" },
  { id: "m6", ic: "🌉", title: "Prêt pour le passé ?", sub: "Vérifie tes bases avant A2.1.", hero: "city/m2" },
];

const pick = (say, label, a, o) => ({ say, groups: [{ label, answer: a, opts: names(o) }] });
export const DATA_A20 = {
  m1: [
    pick("I get up at seven every day.", "Temps", "habitude", ["habitude", "maintenant", "projet"]),
    pick("I'm having a shower right now.", "Temps", "maintenant", ["maintenant", "habitude", "projet"]),
    pick("We're going to visit Rome next week.", "Temps", "projet", ["projet", "habitude", "maintenant"]),
    pick("She usually takes the bus.", "Temps", "habitude", ["habitude", "maintenant", "projet"]),
    pick("Look! He is running.", "Temps", "maintenant", ["maintenant", "habitude", "projet"]),
  ],
  m2: [
    pick("go", "Sens", "aller", ["aller", "prendre", "avoir"]),
    pick("take", "Sens", "prendre", ["prendre", "aller", "faire"]),
    pick("live", "Sens", "habiter", ["habiter", "travailler", "jouer"]),
    pick("wait", "Sens", "attendre", ["attendre", "arriver", "partir"]),
    pick("book", "Sens", "réserver", ["réserver", "acheter", "payer"]),
  ],
  m3: [
    { prompt: "Dis : « Je me lève à sept heures tous les jours. »", answer: ["I", "get up", "at seven", "every day", "."], bank: ["at seven", "I", "get up", "every day", "."] },
    { prompt: "Dis : « Elle prend le bus en ce moment. »", answer: ["She", "is taking", "the bus", "right now", "."], bank: ["the bus", "She", "is taking", "right now", "."] },
    { prompt: "Demande : « Tu travailles le samedi ? »", answer: ["Do", "you", "work", "on Saturdays", "?"], bank: ["work", "on Saturdays", "Do", "you", "?"] },
    { prompt: "Dis : « Nous allons visiter Rome demain. »", answer: ["We", "are going to", "visit", "Rome", "tomorrow", "."], bank: ["Rome", "We", "visit", "are going to", "tomorrow", "."] },
    { prompt: "Dis : « Il ne mange pas de viande. »", answer: ["He", "doesn't", "eat", "meat", "."], bank: ["meat", "He", "eat", "doesn't", "."] },
  ],
  m4: [
    pick("Every morning I ___ coffee.", "Verbe", "drink", ["drink", "am drinking"]),
    pick("Shh! She ___ now.", "Verbe", "is sleeping", ["is sleeping", "sleeps"]),
    pick("He ___ in a bank. (métier)", "Verbe", "works", ["works", "is working"]),
    pick("This week we ___ at home.", "Verbe", "are working", ["are working", "work"]),
    pick("I ___ the answer. (know)", "Verbe", "know", ["know", "am knowing"]),
  ],
  m5: [
    pick("I ___ visit my aunt tomorrow.", "Expression", "am going to", ["am going to", "would like", "am"]),
    pick("I ___ a tea, please. (poli)", "Expression", "'d like", ["'d like", "am going to", "like to"]),
    pick("She ___ call him tonight. (projet)", "Expression", "is going to", ["is going to", "would like", "are going to"]),
    pick("___ you going to stay?", "Expression", "Are", ["Are", "Do", "Does"]),
    pick("Would you ___ some water?", "Expression", "like", ["like", "likes", "liking"]),
  ],
  m6: [
    { prompt: "Compare ta routine et aujourd'hui.", card: [["Usually", "bus"], ["Today", "walking"], ["Why", "sunny"]], answer: ["I usually", "take the bus.", "Today I'm", "walking", "because", "it's sunny."], bank: ["take the bus.", "I usually", "walking", "Today I'm", "because", "it's sunny.", "I am", "rainy."] },
    { prompt: "Parle de ton projet.", card: [["Tomorrow", "visit"], ["Who", "my aunt"], ["Where", "Paris"]], answer: ["Tomorrow", "I'm going to", "visit", "my aunt", "in Paris", "."], bank: ["visit", "Tomorrow", "I'm going to", "my aunt", "in Paris", ".", "I visit", "yesterday"] },
  ],
};

balanceAll({ VOCAB_A20, GRAMMAR_A20, READING_A20, LISTENING_A20, EXERCISES_A20, EXPRESSION_A20, TEST_TEXTS_A20, TEST_AUDIOS_A20, TEST_GRAMMAR_A20, MISSIONS_A20, DATA_A20 });
