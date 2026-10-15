// The Roots — A1.4 « Transport / Directions » : contenu texte complet. Mêmes formats qu'A1.1–A1.3. À relire par un natif.
// Images à fournir : lesson/scene-a14-*.webp et city/a14-m1..m6.webp.
import { balanceAll } from "./balance.js";
const names = (a) => a.map((n) => ({ v: n, label: n }));

export const VOCAB_A14 = [
  { kind: "greetings", title: "Demander son chemin", icon: "🧭",
    tip: "Pour être poli : “Excuse me” avant de poser une question. “How do I get to…?” = Comment aller à… ?",
    examples: [["Excuse me, where is the station?", "Excusez-moi, où est la gare ?"], ["How do I get to the park?", "Comment aller au parc ?"], ["Thank you very much!", "Merci beaucoup !"]],
    practice: "Écoute et répète la phrase.", say: "Excuse me, how do I get to the station?" },
  { kind: "words", title: "Les moyens de transport", icon: "🚌", scene: ["scene-a14-transport", "Une rue avec bus, vélo, taxi et tramway"],
    words: [["bus", "bus"], ["train", "train"], ["car", "voiture"], ["bike", "vélo"], ["taxi", "taxi"], ["on foot", "à pied"]],
    tip: "On dit “by bus / by train / by car / by bike”, mais “on foot” (à pied), sans “by”.",
    examples: [["I go to school by bus.", "Je vais à l'école en bus."], ["She goes to work on foot.", "Elle va au travail à pied."]],
    q: ["« À pied » se dit…", ["by foot", "on foot", "in foot"], 1] },
  { kind: "words", title: "Les lieux dans la ville", icon: "🏙️", scene: ["scene-a14-city", "Une place avec gare, pont et feux"],
    words: [["station", "gare / station"], ["bus stop", "arrêt de bus"], ["street", "rue"], ["corner", "coin de rue"], ["traffic lights", "feux de circulation"], ["bridge", "pont"]],
    tip: "“Road” = route ; “street” = rue en ville ; “square” = place.",
    examples: [["The bus stop is in this street.", "L'arrêt de bus est dans cette rue."], ["Turn left at the traffic lights.", "Tournez à gauche aux feux."]],
    q: ["“Traffic lights” veut dire…", ["feux", "pont", "coin de rue"], 0] },
  { kind: "words", title: "Les directions", icon: "↩️", scene: ["scene-a14-directions", "Un carrefour avec flèches vierges"],
    words: [["turn left", "tourner à gauche"], ["turn right", "tourner à droite"], ["go straight on", "continuer tout droit"], ["take the first street", "prendre la première rue"], ["cross the road", "traverser la route"], ["stop", "s'arrêter"]],
    tip: "“Go straight on” = tout droit. “Straight” se prononce « stréït ».",
    examples: [["Go straight on, then turn right.", "Allez tout droit, puis tournez à droite."], ["Cross the bridge.", "Traversez le pont."]],
    q: ["“Turn left” veut dire…", ["tourner à gauche", "tourner à droite", "tout droit"], 0] },
  { kind: "words", title: "Où se trouve… ?", icon: "📍", scene: ["scene-a14-places", "Un plan avec magasin, banque et école"],
    words: [["next to", "à côté de"], ["opposite", "en face de"], ["between", "entre"], ["in front of", "devant"], ["behind", "derrière"], ["near / far", "près / loin"]],
    tip: "“Opposite” = en face (de l'autre côté de la rue). “Next to” = juste à côté.",
    examples: [["The bank is next to the school.", "La banque est à côté de l'école."], ["The café is opposite the station.", "Le café est en face de la gare."]],
    q: ["“Opposite” veut dire…", ["en face de", "derrière", "près de"], 0] },
  { kind: "words", title: "Au guichet", icon: "🎫", scene: ["scene-a14-ticket", "Un guichet de gare et un ticket vierge"],
    words: [["ticket", "billet"], ["single / return", "aller simple / aller-retour"], ["platform", "quai"], ["timetable", "horaires"], ["late", "en retard"], ["on time", "à l'heure"]],
    tip: "“A return ticket” = un aller-retour. “A single ticket” = un aller simple.",
    examples: [["A return ticket to London, please.", "Un aller-retour pour Londres, s'il vous plaît."], ["The train is on time.", "Le train est à l'heure."]],
    q: ["“Return ticket” veut dire…", ["aller-retour", "aller simple", "quai"], 0] },
  { kind: "words", title: "Les trajets", icon: "🗺️", scene: ["scene-a14-trip", "Un enfant avec un plan de ville"],
    words: [["first / then / after that", "d'abord / ensuite / après"], ["at the end of the street", "au bout de la rue"], ["go past", "passer devant"], ["it takes ten minutes", "ça prend dix minutes"], ["map", "plan / carte"], ["on the left / on the right", "à gauche / à droite"]],
    tip: "Pour expliquer un trajet : “First… Then… After that…”. Simple et clair.",
    examples: [["First go straight on. Then turn left.", "D'abord tout droit. Ensuite à gauche."], ["It takes ten minutes on foot.", "Ça prend dix minutes à pied."]],
    q: ["“Then” veut dire…", ["ensuite", "d'abord", "loin"], 0] },
];

export const GRAMMAR_A14 = [
  { title: "L'impératif", icon: "☝️",
    table: [["Turn left.", "Tournez à gauche.", "verbe seul"], ["Go straight on.", "Allez tout droit.", "pas de sujet"], ["Don't turn right.", "Ne tournez pas à droite.", "Don't + verbe"], ["Please take the bus.", "Prenez le bus, s'il vous plaît.", "+ please = poli"]],
    examples: [["Take the second street on the left.", "Prenez la deuxième rue à gauche."], ["Don't cross here.", "Ne traversez pas ici."]],
    qs: [["___ left at the corner.", ["Turn", "Turns", "Turning"], 0, "Impératif = verbe de base."], ["___ cross the road here. (interdit)", ["Don't", "Doesn't", "Not"], 0, "Don't + verbe."]] },
  { title: "Les prépositions de lieu", icon: "📌",
    table: [["next to", "à côté de", "The shop is next to the bank."], ["opposite", "en face de", "The café is opposite the school."], ["between", "entre", "The bank is between the shop and the café."], ["in front of / behind", "devant / derrière", "The bus is in front of the station."]],
    examples: [["The park is near my house.", "Le parc est près de chez moi."], ["The station is far from here.", "La gare est loin d'ici."]],
    qs: [["The bank is ___ the school and the shop. (entre)", ["between", "behind", "far"], 0, "between = entre deux."], ["The café is ___ the station. (en face)", ["opposite", "next", "near of"], 0, "opposite."]] },
  { title: "Les questions de direction", icon: "❓",
    table: [["Where is…?", "Où est… ?", "Where is the station?"], ["How do I get to…?", "Comment aller à… ?", "How do I get to the park?"], ["Is there a … near here?", "Y a-t-il un… près d'ici ?", "Is there a bank near here?"], ["How far is it?", "C'est à quelle distance ?", ""]],
    examples: [["Excuse me, where is the nearest bus stop?", "Excusez-moi, où est l'arrêt de bus le plus proche ?"], ["How do I get to the station?", "Comment aller à la gare ?"]],
    qs: [["___ do I get to the park?", ["How", "What", "Who"], 0, "How do I get to…"], ["___ there a bank near here?", ["Is", "Are", "Do"], 0, "Is there + singulier."]] },
  { title: "To go et to take", icon: "🚆",
    table: [["I go / you go", "je vais / tu vas", "I go by bus."], ["he / she goes", "il / elle va", "She goes by train."], ["I take / he takes", "je prends / il prend", "He takes the bus."], ["by + transport", "en bus, en train…", "by bike, by car"]],
    examples: [["I go to school by bike.", "Je vais à l'école à vélo."], ["She takes the train every day.", "Elle prend le train tous les jours."]],
    qs: [["He ___ the bus to work.", ["take", "takes", "taking"], 1, "he → takes."], ["I go to work ___ bike.", ["by", "on", "in"], 0, "by bike."]] },
  { title: "Ordonner un trajet", icon: "🔢",
    table: [["First", "D'abord", "First, go straight on."], ["Then", "Ensuite", "Then, turn left."], ["After that", "Après cela", "After that, cross the bridge."], ["Finally", "Enfin", "Finally, you see the station."]],
    examples: [["First turn right. Then go straight on.", "D'abord à droite. Ensuite tout droit."], ["Finally, the station is on your left.", "Enfin, la gare est sur votre gauche."]],
    qs: [["___ turn left. After that, go straight on.", ["First", "Finally", "Opposite"], 0, "First = d'abord."]] },
  { title: "Là-bas et ici", icon: "👈",
    table: [["here / there", "ici / là-bas", "The station is there."], ["on the left / right", "à gauche / à droite", "It is on the right."], ["at the end of…", "au bout de…", "At the end of the street."], ["it takes + temps", "ça prend + temps", "It takes five minutes."]],
    examples: [["It is on your left.", "C'est sur votre gauche."], ["It takes ten minutes by bus.", "Ça prend dix minutes en bus."]],
    qs: [["The bank is ___ your right.", ["on", "in", "at"], 0, "on the right."], ["It ___ five minutes on foot.", ["takes", "take", "taking"], 0, "it takes."]] },
];

export const READING_A14 = [
  { who: "Tom", text: "Hi! I'm Tom. I go to school by bus. The bus stop is next to my house. I take the number 12. It takes fifteen minutes. My best friend goes to school on foot.",
    fr: "Tom prend le bus 12 pour aller à l'école (15 minutes). Son meilleur ami y va à pied.",
    qs: [["How does Tom go to school?", ["By bus", "By bike", "On foot"], 0, "By bus."], ["How long does it take?", ["Five minutes", "Fifteen minutes", "An hour"], 1, "Fifteen minutes."]] },
  { who: "Lily", text: "Excuse me! Where is the station? Go straight on. Turn left at the traffic lights. The station is opposite the bank. Thank you very much!",
    fr: "Lily demande la gare : tout droit, à gauche aux feux, en face de la banque.",
    qs: [["Where do you turn left?", ["At the bridge", "At the traffic lights", "At the school"], 1, "At the traffic lights."], ["Where is the station?", ["Opposite the bank", "Next to the school", "Behind the park"], 0, "Opposite the bank."]] },
  { who: "Sara", text: "I live in a small town. I never take the bus. I always go to work by bike. The road is short and the weather is nice. It takes ten minutes.",
    fr: "Sara va toujours au travail à vélo (10 minutes).",
    qs: [["How does Sara go to work?", ["By bike", "By bus", "By car"], 0, "By bike."], ["Does she take the bus?", ["Yes", "No", "Sometimes"], 1, "She never takes the bus."]] },
  { who: "Omar", text: "Today I want to go to the cinema. First, I take the train. Then I walk to the corner. After that, I turn right. The cinema is between a café and a bank.",
    fr: "Omar prend le train, marche jusqu'au coin, tourne à droite ; le cinéma est entre un café et une banque.",
    qs: [["What does Omar take first?", ["The train", "The bus", "A taxi"], 0, "First, I take the train."], ["Where is the cinema?", ["Between a café and a bank", "Opposite the school", "Next to the station"], 0, "Between a café and a bank."]] },
  { who: "Nina", text: "I am at the station. The train is late. I look at the timetable. A single ticket to London is ten pounds. I buy a return ticket because I come back tonight.",
    fr: "Nina est à la gare ; le train a du retard ; elle achète un aller-retour pour Londres.",
    qs: [["Is the train on time?", ["Yes", "No", "We don't know"], 1, "The train is late."], ["Which ticket does Nina buy?", ["A single ticket", "A return ticket", "A bus ticket"], 1, "She buys a return ticket."]] },
];

export const LISTENING_A14 = [
  { title: "Excuse me", text: "Excuse me, where is the bus stop? It is next to the school. Is it far? No, it is near. Thank you!",
    qs: [["What does he look for?", ["The bus stop", "The station", "The bank"], 0, "The bus stop."], ["Is it far?", ["Yes", "No", "We don't know"], 1, "It is near."]] },
  { title: "Turn left", text: "Go straight on. Turn left at the corner. Then take the second street on the right. The park is at the end of the street.",
    qs: [["Where do you turn left?", ["At the corner", "At the bridge", "At the station"], 0, "At the corner."], ["Where is the park?", ["At the end of the street", "Next to the bank", "Opposite the school"], 0, "At the end of the street."]] },
  { title: "At the ticket office", text: "A return ticket to Manchester, please. That is twenty pounds. Which platform? Platform three. The train leaves at ten.",
    qs: [["Which ticket does he want?", ["Return", "Single", "Bus"], 0, "A return ticket."], ["Which platform?", ["Two", "Three", "Five"], 1, "Platform three."]] },
  { title: "By bike", text: "I go to school by bike. It takes ten minutes. My sister goes by bus. It takes twenty minutes. My father goes by car.",
    qs: [["How does the sister go?", ["By bus", "By bike", "On foot"], 0, "By bus."], ["How long by bike?", ["Ten minutes", "Twenty minutes", "An hour"], 0, "Ten minutes."]] },
  { title: "Where is the bank?", text: "The bank is opposite the station. The café is between the bank and the school. The supermarket is far from here.",
    qs: [["Where is the bank?", ["Opposite the station", "Next to the school", "Far from here"], 0, "Opposite the station."], ["What is far from here?", ["The supermarket", "The café", "The bank"], 0, "The supermarket."]] },
  { title: "The train is late", text: "Attention, please. The train to London is late. It leaves at half past five. Please wait on platform two.",
    qs: [["Is the train on time?", ["Yes", "No", "We don't know"], 1, "It is late."], ["Which platform?", ["One", "Two", "Three"], 1, "Platform two."]] },
  { title: "Don't turn right", text: "Don't turn right. Go straight on. The station is on your left, opposite the bridge. It takes five minutes on foot.",
    qs: [["What must you not do?", ["Turn right", "Go straight on", "Cross the bridge"], 0, "Don't turn right."], ["How long on foot?", ["Five minutes", "Fifteen minutes", "An hour"], 0, "Five minutes."]] },
  { title: "A taxi", text: "Hello! A taxi to the airport, please. It takes thirty minutes. Is it expensive? About forty pounds. OK, let's go!",
    qs: [["Where does he go?", ["The airport", "The station", "The park"], 0, "The airport."], ["How long does it take?", ["Thirty minutes", "Ten minutes", "An hour"], 0, "Thirty minutes."]] },
];

export const EXERCISES_A14 = [
  { title: "Vocabulaire — Transports et lieux", help: "Choisis le sens correct.",
    qs: [["bus stop", ["arrêt de bus", "gare", "pont"], 0, "Bus stop."], ["bridge", ["rue", "pont", "feux"], 1, "Bridge = pont."], ["traffic lights", ["feux", "coin de rue", "quai"], 0, "Traffic lights."], ["on foot", ["à pied", "à vélo", "en bus"], 0, "On foot."], ["platform", ["billet", "quai", "horaire"], 1, "Platform = quai."], ["return ticket", ["aller-retour", "aller simple", "horaire"], 0, "Return."]] },
  { title: "Directions", help: "turn, go, cross…",
    qs: [["« Tournez à gauche »", ["Turn left", "Turn right", "Go straight on"], 0, "Turn left."], ["« Tout droit »", ["Go straight on", "Turn left", "Cross"], 0, "Go straight on."], ["« Traversez le pont »", ["Cross the bridge", "Turn the bridge", "Take the bridge"], 0, "Cross the bridge."], ["« Ne tournez pas à droite »", ["Don't turn right", "Not turn right", "Doesn't turn right"], 0, "Don't + verbe."], ["« Prenez la deuxième rue »", ["Take the second street", "Turn the second street", "Go second street"], 0, "Take."]] },
  { title: "Prépositions de lieu", help: "next to, opposite, between…",
    qs: [["The bank is ___ the school. (à côté)", ["next to", "opposite of", "behind of"], 0, "next to."], ["The café is ___ the station. (en face)", ["opposite", "between", "near of"], 0, "opposite."], ["The shop is ___ the bank and the café. (entre)", ["between", "next", "behind"], 0, "between."], ["The bus is ___ the station. (devant)", ["in front of", "behind of", "between"], 0, "in front of."], ["The supermarket is ___. (loin)", ["far", "near", "next"], 0, "far."]] },
  { title: "Questions", help: "Where / How do I get…?",
    qs: [["___ is the station?", ["Where", "How", "Who"], 0, "Where is…"], ["___ do I get to the park?", ["How", "Where", "What"], 0, "How do I get to…"], ["Is ___ a bank near here?", ["there", "it", "they"], 0, "Is there…"], ["Excuse me, ___ the nearest bus stop?", ["where is", "where are", "how is"], 0, "Where is…"], ["How ___ is it?", ["far", "near", "next"], 0, "How far."]] },
  { title: "To go / to take", help: "by + transport.",
    qs: [["I go to school ___ bus.", ["by", "on", "in"], 0, "by bus."], ["She goes to work ___ foot.", ["on", "by", "in"], 0, "on foot."], ["He ___ the train.", ["take", "takes", "taking"], 1, "he → takes."], ["We ___ to school by bike.", ["go", "goes", "going"], 0, "we → go."], ["It ___ ten minutes.", ["take", "takes", "taking"], 1, "it → takes."]] },
  { title: "Ordonner un trajet", help: "first, then, after that.",
    qs: [["___ , go straight on.", ["First", "Finally", "Between"], 0, "First = d'abord."], ["First go straight. ___ turn left.", ["Then", "Opposite", "Far"], 0, "Then = ensuite."], ["___ the station is on your right.", ["Finally", "First", "Opposite"], 0, "Finally = enfin."], ["Turn left ___ the corner.", ["at", "in", "by"], 0, "at the corner."], ["The bank is ___ the end of the street.", ["at", "on", "by"], 0, "at the end."]] },
  { title: "Mise en situation", help: "Ville et transports.",
    qs: [["You want to go to London and come back:", ["a return ticket", "a single ticket", "a timetable"], 0, "Return."], ["You see this at the corner and must stop:", ["traffic lights", "a bridge", "a map"], 0, "Traffic lights."], ["The train is not on time:", ["It is late.", "It is early.", "It is far."], 0, "Late."], ["A short way:", ["It takes five minutes.", "It takes five hours.", "It is far."], 0, "Short."], ["To find a place:", ["a map", "a ticket", "a platform"], 0, "Map."]] },
];

export const EXPRESSION_A14 = [
  { title: "Explique un trajet", icon: "🗺️",
    prompts: ["Dis par où commencer.", "Dis où tourner.", "Dis où se trouve le lieu.", "Dis combien de temps ça prend."],
    model: "First go straight on. Then turn left at the corner. The station is opposite the bank. It takes five minutes.",
    checks: [["Commencer", "first,? (go|take|turn)\\b"], ["Où tourner", "turn (left|right)"], ["Où se trouve le lieu", "(is|are) (next to|opposite|between|behind|near|in front of)\\b"], ["La durée", "it takes \\w+( \\w+)? (minutes?|hours?)"]] },
  { title: "Demande ton chemin", icon: "🙋",
    prompts: ["Commence poliment.", "Demande où est un lieu.", "Demande si c'est loin.", "Remercie."],
    model: "Excuse me, where is the station? Is it far? Thank you very much!",
    checks: [["Politesse", "excuse me"], ["Où est le lieu", "where is (the )?\\w+|how do i get to"], ["Loin ?", "is it (far|near)|how far"], ["Merci", "thank(s| you)"]] },
];

export const TEST_TEXTS_A14 = [
  { title: "L'école de Tom", text: "I go to school by bus. The bus stop is next to my house. I take the number 12. It takes fifteen minutes.", q: [["How does he go to school?", ["By bus", "By bike", "On foot"], 0], ["Where is the bus stop?", ["Next to his house", "Opposite the school", "At the station"], 0], ["How long does it take?", ["Five minutes", "Fifteen minutes", "An hour"], 1]] },
  { title: "La gare", text: "Go straight on. Turn left at the traffic lights. The station is opposite the bank.", q: [["Where do you turn left?", ["At the traffic lights", "At the bridge", "At the school"], 0], ["Where is the station?", ["Opposite the bank", "Next to the park", "Behind the school"], 0], ["First, what do you do?", ["Go straight on", "Turn right", "Cross the bridge"], 0]] },
  { title: "À vélo", text: "I never take the bus. I always go to work by bike. The road is short. It takes ten minutes.", q: [["How does she go to work?", ["By bike", "By bus", "By car"], 0], ["Does she take the bus?", ["Yes", "No", "Sometimes"], 1], ["How long does it take?", ["Ten minutes", "Twenty minutes", "An hour"], 0]] },
  { title: "Le cinéma", text: "First, I take the train. Then I walk to the corner. After that, I turn right. The cinema is between a café and a bank.", q: [["What does he take first?", ["The train", "The bus", "A taxi"], 0], ["Where does he turn?", ["Right", "Left", "He doesn't turn"], 0], ["Where is the cinema?", ["Between a café and a bank", "Opposite the school", "Next to the park"], 0]] },
  { title: "À la gare", text: "The train is late. I look at the timetable. I buy a return ticket because I come back tonight.", q: [["Is the train on time?", ["Yes", "No", "Not stated"], 1], ["What does he look at?", ["The timetable", "A map", "A ticket"], 0], ["Which ticket?", ["A return ticket", "A single ticket", "A bus ticket"], 0]] },
];

export const TEST_AUDIOS_A14 = [
  { script: "Excuse me, where is the bus stop? It is next to the school. Is it far? No, it is near. Thank you!", q: [["What does he look for?", ["The bus stop", "The station", "The bank"], 0], ["Is it far?", ["Yes", "No", "Unknown"], 1]] },
  { script: "Go straight on. Turn left at the corner. Then take the second street on the right. The park is at the end of the street.", q: [["Where do you turn left?", ["At the corner", "At the bridge", "At the station"], 0], ["Where is the park?", ["At the end of the street", "Next to the bank", "Opposite the school"], 0]] },
  { script: "A return ticket to Manchester, please. That is twenty pounds. Which platform? Platform three. The train leaves at ten.", q: [["Which ticket?", ["Return", "Single", "Bus"], 0], ["Which platform?", ["Two", "Three", "Five"], 1]] },
  { script: "The bank is opposite the station. The café is between the bank and the school. The supermarket is far from here.", q: [["Where is the bank?", ["Opposite the station", "Next to the school", "Far"], 0], ["What is far?", ["The supermarket", "The café", "The bank"], 0]] },
  { script: "Don't turn right. Go straight on. The station is on your left. It takes five minutes on foot.", q: [["What must you not do?", ["Turn right", "Go straight", "Cross"], 0], ["How long on foot?", ["Five minutes", "Fifteen minutes", "An hour"], 0]] },
];

export const TEST_GRAMMAR_A14 = [
  ["___ left at the corner.", ["Turn", "Turns", "Turning"], 0], ["___ cross the road here. (interdit)", ["Don't", "Doesn't", "Not"], 0], ["The bank is ___ the school and the shop.", ["between", "behind", "far"], 0], ["The café is ___ the station. (en face)", ["opposite", "next", "near of"], 0],
  ["___ do I get to the park?", ["How", "What", "Who"], 0], ["___ there a bank near here?", ["Is", "Are", "Do"], 0], ["He ___ the bus to work.", ["take", "takes", "taking"], 1], ["I go to work ___ bike.", ["by", "on", "in"], 0],
  ["She goes to school ___ foot.", ["on", "by", "in"], 0], ["___ , go straight on. (d'abord)", ["First", "Finally", "Between"], 0], ["First go straight. ___ turn left.", ["Then", "Opposite", "Far"], 0], ["The bank is ___ your right.", ["on", "in", "at"], 0],
  ["It ___ five minutes on foot.", ["takes", "take", "taking"], 0], ["“Platform” means…", ["quai", "billet", "gare"], 0], ["“Return ticket” means…", ["aller-retour", "aller simple", "horaire"], 0], ["The bus is ___ the station. (devant)", ["in front of", "behind of", "between"], 0],
  ["The supermarket is ___. (loin)", ["far", "near", "next"], 0], ["Excuse me, ___ the nearest bus stop?", ["where is", "where are", "how is"], 0], ["Turn left ___ the corner.", ["at", "in", "by"], 0], ["We ___ to school by bike.", ["go", "goes", "going"], 0],
  ["Take ___ second street on the left.", ["the", "a", "an"], 0], ["The train is not on time:", ["It is late.", "It is early.", "It is far."], 0], ["You need this to find a place:", ["a map", "a platform", "a ticket"], 0], ["How ___ is the station?", ["far", "near", "next"], 0],
  ["Cross ___ bridge.", ["the", "a", "an"], 0], ["The cinema is ___ a café and a bank.", ["between", "behind", "near of"], 0], ["Go ___ on. (tout droit)", ["straight", "right", "left"], 0], ["I take the train ___ day.", ["every", "all", "any"], 0],
  ["Don't ___ here.", ["stop", "stops", "stopping"], 0], ["The station is ___ here. (loin)", ["far from", "near of", "next"], 0],
];

export const MISSIONS_A14 = [
  { id: "m1", ic: "🚌", title: "Quel transport ?", sub: "Écoute et choisis le bon transport.", hero: "city/a14-m1" },
  { id: "m2", ic: "🧭", title: "Suis la direction", sub: "Écoute et choisis où aller.", hero: "city/a14-m2" },
  { id: "m3", ic: "💬", title: "Construis la phrase", sub: "Remets les mots dans l'ordre.", hero: "city/a14-m3" },
  { id: "m4", ic: "📍", title: "Où se trouve… ?", sub: "Choisis la bonne préposition.", hero: "city/a14-m4" },
  { id: "m5", ic: "🎫", title: "Au guichet", sub: "Achète le bon billet.", hero: "city/a14-m5" },
  { id: "m6", ic: "🗺️", title: "Le grand trajet", sub: "Explique un trajet en anglais.", hero: "city/a14-m6" },
];

const pick = (say, label, a, o) => ({ say, groups: [{ label, answer: a, opts: names(o) }] });
export const DATA_A14 = {
  m1: [
    pick("I go to school with my bike.", "Transport", "bike", ["bike", "bus", "train", "taxi"]),
    pick("I take the number 12. It stops at the bus stop.", "Transport", "bus", ["bus", "plane", "bike", "car"]),
    pick("It runs on rails and stops at the station.", "Transport", "train", ["train", "bus", "taxi", "bike"]),
    pick("I walk to work. I don't take a vehicle.", "Transport", "on foot", ["on foot", "by car", "by bus", "by taxi"]),
    pick("It is yellow in New York and you pay at the end.", "Transport", "taxi", ["taxi", "bus", "train", "bike"]),
  ],
  m2: [
    pick("Go straight on and turn left at the corner.", "First", "Go straight on", ["Go straight on", "Turn right", "Cross the bridge"]),
    pick("Turn right. Then the bank is on your left.", "Bank is…", "on your left", ["on your left", "on your right", "far"]),
    pick("Cross the bridge. The station is opposite.", "Station is…", "opposite", ["opposite", "behind", "next to"]),
    pick("Take the second street on the right.", "Which street?", "second on the right", ["second on the right", "first on the left", "third on the right"]),
  ],
  m3: [
    { prompt: "Dis : « Tournez à gauche. »", answer: ["Turn", "left", "."], bank: ["left", "Turn", "."] },
    { prompt: "Demande : « Où est la gare ? »", answer: ["Where", "is", "the", "station", "?"], bank: ["station", "is", "Where", "the", "?"] },
    { prompt: "Dis : « Allez tout droit. »", answer: ["Go", "straight", "on", "."], bank: ["on", "Go", "straight", "."] },
    { prompt: "Dis : « La banque est en face de la gare. »", answer: ["The", "bank", "is", "opposite", "the", "station", "."], bank: ["bank", "the", "is", "The", "station", "opposite", "."] },
    { prompt: "Dis : « Ça prend dix minutes à pied. »", answer: ["It", "takes", "ten", "minutes", "on", "foot", "."], bank: ["minutes", "on", "It", "ten", "takes", "foot", "."] },
  ],
  m4: [
    pick("The bank is ___ the school. (à côté)", "Preposition", "next to", ["next to", "opposite", "between", "behind"]),
    pick("The café is ___ the station. (en face)", "Preposition", "opposite", ["opposite", "next to", "behind", "between"]),
    pick("The shop is ___ the bank and the café. (entre)", "Preposition", "between", ["between", "in front of", "far", "behind"]),
    pick("The bus is ___ the station. (devant)", "Preposition", "in front of", ["in front of", "behind", "between", "opposite"]),
  ],
  m5: [
    pick("A ticket to go and come back.", "Ticket", "return", ["return", "single", "platform"]),
    pick("A ticket for one way only.", "Ticket", "single", ["single", "return", "timetable"]),
    pick("Where you wait for the train.", "Word", "platform", ["platform", "ticket", "street"]),
    pick("It shows the times of trains.", "Word", "timetable", ["timetable", "map", "platform"]),
  ],
  m6: [
    { prompt: "Explique le trajet.", card: [["First", "straight on"], ["Then", "turn left"], ["Place", "station"]], answer: ["First,", "go straight on.", "Then,", "turn left.", "The station", "is there."], bank: ["go straight on.", "turn right.", "First,", "Then,", "turn left.", "The station", "is there.", "is far."] },
    { prompt: "Explique le trajet.", card: [["First", "cross the bridge"], ["Then", "turn right"], ["Place", "park"]], answer: ["First,", "cross the bridge.", "Then,", "turn right.", "The park", "is there."], bank: ["cross the bridge.", "turn left.", "First,", "Then,", "turn right.", "The park", "is there.", "is far."] },
  ],
};

balanceAll({ VOCAB_A14, GRAMMAR_A14, READING_A14, LISTENING_A14, EXERCISES_A14, EXPRESSION_A14, TEST_TEXTS_A14, TEST_AUDIOS_A14, TEST_GRAMMAR_A14, MISSIONS_A14, DATA_A14 });
