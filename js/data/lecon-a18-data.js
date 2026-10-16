// The Roots — A1.8 « Getting Around » : contenu texte complet. Mêmes formats qu'A1.1–A1.7. À relire par un natif.
// Images à fournir : lesson/scene-a18-*.webp et city/a18-m1..m6.webp.
import { balanceAll } from "./balance.js";
const names = (a) => a.map((n) => ({ v: n, label: n }));

export const VOCAB_A18 = [
  { kind: "greetings", title: "Se repérer en ville", icon: "📍",
    tip: "Quand on cherche un lieu : “I'm looking for…” (Je cherche…). Quand on est perdu : “I'm lost.”",
    examples: [["Excuse me, I'm looking for the library.", "Excusez-moi, je cherche la bibliothèque."], ["I'm lost. Can you help me?", "Je suis perdu(e). Pouvez-vous m'aider ?"], ["Thank you for your help!", "Merci pour votre aide !"]],
    practice: "Écoute et répète la phrase.", say: "Excuse me, I'm looking for the library." },
  { kind: "words", title: "Les lieux de la ville", icon: "🏛️", scene: ["scene-a18-places", "Une rue avec bibliothèque, banque, pharmacie, poste"],
    words: [["library", "bibliothèque"], ["hospital", "hôpital"], ["pharmacy", "pharmacie"], ["bank", "banque"], ["post office", "bureau de poste"], ["gym", "salle de sport"]],
    tip: "Attention : “library” = bibliothèque (pas librairie, qui se dit “bookshop”).",
    examples: [["The pharmacy is next to the bank.", "La pharmacie est à côté de la banque."], ["I go to the gym on Mondays.", "Je vais à la salle de sport le lundi."]],
    q: ["“Library” veut dire…", ["bibliothèque", "librairie", "bureau de poste"], 0] },
  { kind: "words", title: "Prendre les transports", icon: "🚆", scene: ["scene-a18-transport", "Un quai de gare avec voyageurs qui montent"],
    words: [["get on", "monter dans"], ["get off", "descendre de"], ["change trains", "changer de train"], ["miss the bus", "rater le bus"], ["catch the bus", "attraper le bus"], ["stop / station", "arrêt / gare"]],
    tip: "On dit “get on the bus / the train” et “get off the bus / the train”.",
    examples: [["Get off at the next stop.", "Descendez au prochain arrêt."], ["I miss the bus every morning!", "Je rate le bus tous les matins !"]],
    q: ["« Descendre du bus » se dit…", ["get off the bus", "get on the bus", "miss the bus"], 0] },
  { kind: "words", title: "Être perdu", icon: "🧭", scene: ["scene-a18-lost", "Un enfant perdu avec un plan, carrefour"],
    words: [["lost", "perdu"], ["wrong way", "mauvaise direction"], ["right way", "bonne direction"], ["map", "plan / carte"], ["street sign", "panneau de rue"], ["help", "aider / aide"]],
    tip: "“I'm lost” = je suis perdu. “I'm going the wrong way” = je vais dans la mauvaise direction.",
    examples: [["Is this the right way to the station?", "Est-ce le bon chemin pour la gare ?"], ["No, you're going the wrong way.", "Non, vous allez dans la mauvaise direction."]],
    q: ["“Lost” veut dire…", ["perdu", "trouvé", "loin"], 0] },
  { kind: "words", title: "Demander de répéter", icon: "🗣️", scene: ["scene-a18-repeat", "Deux personnes qui discutent, une écoute attentivement"],
    words: [["Could you repeat that?", "Pouvez-vous répéter ?"], ["I don't understand.", "Je ne comprends pas."], ["Speak slowly, please.", "Parlez lentement, s'il vous plaît."], ["What does … mean?", "Que veut dire … ?"], ["Sorry?", "Pardon ?"], ["I see!", "Je vois ! / Compris !"]],
    tip: "“Sorry?” (avec une intonation montante) demande de répéter, sans dire « désolé ».",
    examples: [["Could you repeat that, please?", "Pouvez-vous répéter, s'il vous plaît ?"], ["I don't understand. Speak slowly, please.", "Je ne comprends pas. Parlez lentement, s'il vous plaît."]],
    q: ["« Pouvez-vous répéter ? »", ["Could you repeat that?", "Could you repair that?", "Can I repeat?"], 0] },
  { kind: "words", title: "Distance et durée", icon: "⏱️", scene: ["scene-a18-distance", "Un panneau fléché vierge et une horloge"],
    words: [["Is it far?", "C'est loin ?"], ["It's near.", "C'est près."], ["a long way", "un long trajet"], ["five minutes away", "à cinq minutes"], ["on the left", "à gauche"], ["on the right", "à droite"]],
    tip: "“It's five minutes away” = c'est à cinq minutes d'ici.",
    examples: [["The bank is five minutes away.", "La banque est à cinq minutes."], ["Is the station far from here?", "La gare est loin d'ici ?"]],
    q: ["“Five minutes away” veut dire…", ["à cinq minutes", "il y a cinq minutes", "pendant cinq minutes"], 0] },
  { kind: "words", title: "Guider un touriste", icon: "🧳", scene: ["scene-a18-tourist", "Un touriste avec un sac qui demande son chemin"],
    words: [["tourist", "touriste"], ["tourist office", "office de tourisme"], ["sightseeing", "visite touristique"], ["landmark", "monument / repère"], ["this way", "par ici"], ["follow me", "suivez-moi"]],
    tip: "“Follow me!” = suivez-moi. “This way, please.” = par ici, s'il vous plaît.",
    examples: [["This way, please. Follow me!", "Par ici, s'il vous plaît. Suivez-moi !"], ["The tourist office is near the park.", "L'office de tourisme est près du parc."]],
    q: ["“Follow me” veut dire…", ["suivez-moi", "arrêtez-vous", "tournez"], 0] },
];

export const GRAMMAR_A18 = [
  { title: "Le présent continu : formation", icon: "🔄",
    table: [["I am looking", "je suis en train de chercher", "am / is / are + -ing"], ["He / she is going", "il / elle est en train d'aller", "is + -ing"], ["We are walking", "nous marchons", "are + -ing"], ["run → running", "doublement de la consonne", "swim → swimming"]],
    examples: [["I am looking for the station.", "Je cherche la gare."], ["She is walking to the park.", "Elle marche vers le parc."]],
    qs: [["I ___ for the bank. (look)", ["am looking", "look", "looks"], 0, "I + am + -ing."], ["They ___ to school. (walk)", ["are walking", "is walking", "walks"], 0, "They + are + -ing."]] },
  { title: "Présent continu : négation et questions", icon: "❓",
    table: [["I'm not going", "je ne vais pas", "am not + -ing"], ["She isn't walking", "elle ne marche pas", "isn't + -ing"], ["Are you looking for…?", "Vous cherchez… ?", "Are + sujet + -ing"], ["Where are you going?", "Où allez-vous ?", "Where + are + -ing"]],
    examples: [["Where are you going?", "Où allez-vous ?"], ["I'm not going home. I'm going to the park.", "Je ne rentre pas. Je vais au parc."]],
    qs: [["___ you going to the station?", ["Are", "Do", "Is"], 0, "Are you going…?"], ["He ___ walking. (négatif)", ["isn't", "aren't", "doesn't"], 0, "He isn't walking."]] },
  { title: "Présent simple ou continu ?", icon: "⚖️",
    table: [["I go to school every day.", "habitude", "présent simple"], ["I'm going to school now.", "maintenant", "présent continu"], ["always, every day, often", "indices du simple", ""], ["now, at the moment, today", "indices du continu", ""]],
    examples: [["She takes the bus every day.", "Elle prend le bus tous les jours."], ["She is taking the bus now.", "Elle prend le bus en ce moment."]],
    qs: [["I ___ the bus every morning.", ["take", "am taking", "takes"], 0, "Habitude → simple."], ["Look! The bus ___.", ["is coming", "comes", "come"], 0, "En ce moment → continu."]] },
  { title: "Un trajet plus long", icon: "🪜",
    table: [["First, …", "D'abord, …", "First, go straight on."], ["Then, …", "Ensuite, …", "Then, turn left."], ["After that, …", "Après cela, …", "After that, cross the bridge."], ["Finally, …", "Enfin, …", "Finally, you see the station."]],
    examples: [["First, take the bus. Then, get off at the market.", "D'abord, prenez le bus. Ensuite, descendez au marché."], ["After that, walk for five minutes.", "Après cela, marchez cinq minutes."]],
    qs: [["___, go straight on. Then, turn right.", ["First", "Finally", "Opposite"], 0, "First = d'abord."]] },
  { title: "Questions de clarification", icon: "🤔",
    table: [["Could you repeat that?", "Pouvez-vous répéter ?", "poli"], ["What does … mean?", "Que veut dire … ?", ""], ["Is it far from here?", "C'est loin d'ici ?", ""], ["Do you mean…?", "Vous voulez dire… ?", "vérifier"]],
    examples: [["Do you mean the red bus?", "Vous voulez dire le bus rouge ?"], ["What does “opposite” mean?", "Que veut dire « opposite » ?"]],
    qs: [["___ you repeat that, please?", ["Could", "Do", "Are"], 0, "Could you…?"], ["What ___ “lost” mean?", ["does", "do", "is"], 0, "What does … mean?"]] },
  { title: "Il y a / There is dans la ville", icon: "📌",
    table: [["There is a bank near here.", "Il y a une banque près d'ici.", "singulier"], ["There are two shops.", "Il y a deux magasins.", "pluriel"], ["Is there a pharmacy near here?", "Y a-t-il une pharmacie ?", "question"], ["Yes, there is. / No, there isn't.", "Oui / Non.", "réponse courte"]],
    examples: [["Is there a bank near here? — Yes, there is.", "Y a-t-il une banque près d'ici ? — Oui."], ["There aren't any shops here.", "Il n'y a aucun magasin ici."]],
    qs: [["___ there a hospital near here?", ["Is", "Are", "Do"], 0, "Is there…?"], ["There ___ two banks.", ["are", "is", "am"], 0, "Pluriel → are."]] },
];

export const READING_A18 = [
  { who: "Emma", text: "Hi! I'm Emma. I'm looking for the library. I'm lost. A woman says: 'Go straight on. Turn left at the bank. The library is on your right.' It's five minutes away. Thank you! I walk to the library and I find it easily. I'm happy now.",
    fr: "Emma est perdue et cherche la bibliothèque. Une femme lui explique le chemin : à cinq minutes.  Elle marche, trouve facilement la bibliothèque et est contente.",
    qs: [["What is Emma looking for?", ["The library", "The bank", "The hospital"], 0, "The library."], ["How far is it?", ["Five minutes away", "One hour", "Very far"], 0, "Five minutes."]] },
  { who: "Sam", text: "Hello! I'm Sam. I'm going to the station. I take the number 8 bus. I get off at the market. Then I walk for ten minutes. I never miss the bus because I'm always early. The bus is clean and not full. I sit near the window and look at the streets.",
    fr: "Sam prend le bus 8, descend au marché et marche dix minutes. Il est toujours en avance.  Le bus est propre ; il s'assoit près de la fenêtre.",
    qs: [["Where does Sam get off?", ["At the market", "At the bank", "At the park"], 0, "At the market."], ["Does he miss the bus?", ["No, never", "Yes, always", "Sometimes"], 0, "He never misses it."]] },
  { who: "Lily", text: "I'm Lily. I'm a tourist in London. I don't understand the map. I ask a man: 'Excuse me, could you repeat that? Speak slowly, please.' He smiles. 'Of course!' Now I understand the map. I say: 'Thank you very much!' and I go to the museum.",
    fr: "Lily, touriste à Londres, demande qu'on lui répète lentement les explications.  Maintenant elle comprend ; elle remercie et va au musée.",
    qs: [["Where is Lily?", ["In London", "In Paris", "At home"], 0, "In London."], ["What does Lily ask?", ["To repeat slowly", "For money", "For a taxi"], 0, "Repeat, speak slowly."]] },
  { who: "Omar", text: "Hi, I'm Omar. I'm on the bus to the hospital. I'm going the wrong way! The hospital is in the other direction. I get off and change buses at the next stop. The next bus is on time. I'm a little tired, but I'm not angry.",
    fr: "Omar se trompe de direction et change de bus à l'arrêt suivant pour aller à l'hôpital.  Le bus suivant est à l'heure ; Omar est un peu fatigué mais pas fâché.",
    qs: [["Where is Omar going?", ["To the hospital", "To the park", "To school"], 0, "To the hospital."], ["What is the problem?", ["He is going the wrong way", "The bus is late", "He is lost in the park"], 0, "Wrong way."]] },
  { who: "Nina", text: "Hello! I'm Nina. I work at the tourist office. Every day, I help tourists. I say: 'This way, please. Follow me!' The post office is near the park. The pharmacy is opposite the bank. The tourists are happy and say thank you. I love my job.",
    fr: "Nina travaille à l'office de tourisme et guide les touristes : poste près du parc, pharmacie en face de la banque.  Les touristes remercient Nina ; elle adore son travail.",
    qs: [["Where does Nina work?", ["At the tourist office", "At the bank", "At the library"], 0, "Tourist office."], ["Where is the pharmacy?", ["Opposite the bank", "Next to the park", "Behind the post office"], 0, "Opposite the bank."]] },
];

export const LISTENING_A18 = [
  { title: "Excuse me", text: "Excuse me, I'm looking for the pharmacy. Go straight on. Turn right at the traffic lights. It is next to the bank. Is it far? No, it's two minutes away.",
    qs: [["What is the first speaker looking for?", ["The pharmacy", "The bank", "The library"], 0, "The pharmacy."], ["Where is it?", ["Next to the bank", "Opposite the school", "At the station"], 0, "Next to the bank."]] },
  { title: "I'm lost", text: "I'm lost. Can you help me? Where do you want to go? To the station. This is the wrong way. Turn around and go straight on.",
    qs: [["Where does the first speaker want to go?", ["To the station", "To the park", "To the hospital"], 0, "To the station."], ["What is the problem?", ["The first speaker is going the wrong way", "The station is closed", "The first speaker has no ticket"], 0, "Wrong way."]] },
  { title: "Could you repeat?", text: "Take the bus number five. Sorry? Could you repeat that? Of course. Take the bus number five. Get off at the library.",
    qs: [["Which bus?", ["Number five", "Number fifteen", "Number fifty"], 0, "Number five."], ["Where do you get off?", ["At the library", "At the bank", "At the market"], 0, "Library."]] },
  { title: "At the bus stop", text: "Is this the bus to the hospital? No, it isn't. You need the number twelve. Where is it? It's coming now! Thank you!",
    qs: [["Which bus does the first speaker need?", ["Number twelve", "Number two", "Number twenty"], 0, "Twelve."], ["Where does the first speaker go?", ["To the hospital", "To the market", "To school"], 0, "Hospital."]] },
  { title: "Change trains", text: "I'm going to Manchester. You need to change trains at Leeds. Then take the train to Manchester. How long does it take? About two hours.",
    qs: [["Where must you change trains?", ["At Leeds", "At Manchester", "At London"], 0, "Leeds."], ["How long does it take?", ["About two hours", "About ten minutes", "All day"], 0, "Two hours."]] },
  { title: "Tourist information", text: "Hello! I'm a tourist. Where is the tourist office? It's near the park. Follow me, please. This way. Thank you very much!",
    qs: [["Where is the tourist office?", ["Near the park", "Near the bank", "At the station"], 0, "Near the park."], ["What does the second speaker say?", ["Follow me", "Stop", "Go away"], 0, "Follow me."]] },
  { title: "I don't understand", text: "I don't understand. What does 'opposite' mean? It means 'in front of, on the other side'. Ah, I see! The bank is opposite the school.",
    qs: [["What does the first speaker not understand?", ["The word 'opposite'", "The word 'bank'", "The word 'school'"], 0, "Opposite."], ["Where is the bank?", ["Opposite the school", "Next to the school", "Far from the school"], 0, "Opposite the school."]] },
  { title: "Missing the bus", text: "Oh no! The bus is leaving without me! Don't worry. The next bus is in ten minutes. OK. I'm waiting here. Let's have a coffee.",
    qs: [["What happens to the first speaker?", ["He misses the bus", "He is lost", "He loses a ticket"], 0, "Misses the bus."], ["When is the next bus?", ["In ten minutes", "In an hour", "Tomorrow"], 0, "Ten minutes."]] },
];

export const EXERCISES_A18 = [
  { title: "Vocabulaire — Lieux et déplacements", help: "Choisis le sens correct.",
    qs: [["library", ["bibliothèque", "librairie", "banque"], 0, "Library."], ["pharmacy", ["pharmacie", "hôpital", "poste"], 0, "Pharmacy."], ["lost", ["perdu", "loin", "fermé"], 0, "Lost."], ["get off", ["descendre", "monter", "rater"], 0, "Get off."], ["miss the bus", ["rater le bus", "prendre le bus", "attendre le bus"], 0, "Miss."], ["tourist", ["touriste", "voyageur", "guide"], 0, "Tourist."]] },
  { title: "Présent continu", help: "am / is / are + -ing.",
    qs: [["I ___ for the bank. (look)", ["am looking", "look", "looks"], 0, "I am looking."], ["She ___ to the park. (walk)", ["is walking", "walk", "are walking"], 0, "She is walking."], ["They ___ the bus. (wait for)", ["are waiting for", "waits for", "is waiting for"], 0, "They are waiting."], ["We ___ lost. (not be)", ["aren't", "isn't", "don't"], 0, "We aren't lost."], ["He ___ a map. (use)", ["is using", "using", "are using"], 0, "He is using."]] },
  { title: "Questions au présent continu", help: "Where are you going?",
    qs: [["Where ___ you going?", ["are", "do", "is"], 0, "Are you going."], ["___ she walking to school?", ["Is", "Are", "Does"], 0, "Is she walking."], ["What ___ you looking for?", ["are", "is", "do"], 0, "Are you looking for."], ["___ they waiting?", ["Are", "Is", "Do"], 0, "Are they waiting."], ["Are you lost? — Yes, I ___.", ["am", "do", "are"], 0, "Yes, I am."]] },
  { title: "Simple ou continu ?", help: "Habitude ou maintenant ?",
    qs: [["I ___ to school every day.", ["go", "am going", "going"], 0, "Habitude."], ["Look! The bus ___.", ["is coming", "comes", "come"], 0, "En ce moment."], ["She often ___ the train.", ["takes", "is taking", "take"], 0, "Habitude."], ["We ___ now. (walk)", ["are walking", "walk", "walks"], 0, "Maintenant."], ["He ___ at the moment. (wait)", ["is waiting", "waits", "wait"], 0, "Maintenant."]] },
  { title: "Un trajet", help: "first, then, after that, finally.",
    qs: [["___ , go straight on.", ["First", "Finally", "Opposite"], 0, "First."], ["First turn left. ___ turn right.", ["Then", "Opposite", "Far"], 0, "Then."], ["___ that, cross the bridge.", ["After", "Before", "Next"], 0, "After that."], ["___ , you see the station.", ["Finally", "First", "Between"], 0, "Finally."], ["Get ___ at the next stop.", ["off", "on", "of"], 0, "Get off."]] },
  { title: "Clarifier", help: "Could you repeat?",
    qs: [["___ you repeat that, please?", ["Could", "Do", "Are"], 0, "Could you."], ["I don't ___ .", ["understand", "understands", "understanding"], 0, "I don't understand."], ["What does “wrong” ___ ?", ["mean", "means", "meaning"], 0, "What does … mean."], ["Speak ___ , please.", ["slowly", "slow", "slowest"], 0, "Slowly."], ["« Pardon ? »", ["Sorry?", "Thank?", "Please?"], 0, "Sorry?"]] },
  { title: "Mise en situation", help: "En ville.",
    qs: [["You need medicine:", ["the pharmacy", "the library", "the post office"], 0, "Pharmacy."], ["You want to send a letter:", ["the post office", "the gym", "the bank"], 0, "Post office."], ["You are going in the wrong direction:", ["I'm going the wrong way.", "I'm going the right way.", "I'm going far."], 0, "Wrong way."], ["You didn't hear:", ["Could you repeat that?", "Could you buy that?", "Could you open that?"], 0, "Repeat."], ["You want to guide someone:", ["Follow me, please.", "Wait here, bus.", "Go me."], 0, "Follow me."]] },
];

export const EXPRESSION_A18 = [
  { title: "Guide un touriste", icon: "🧳",
    prompts: ["Dis par où commencer.", "Dis où tourner.", "Dis où se trouve le lieu.", "Dis si c'est loin."],
    model: "First, go straight on. Then turn left at the bank. The library is on your right. It's five minutes away.",
    checks: [["Commencer", "first,? (go|take|turn)\\b"], ["Où tourner", "turn (left|right)"], ["Où se trouve le lieu", "(is|are) (on your (left|right)|next to|opposite|between|near|behind)\\b"], ["Distance", "(it'?s|it is) \\w+( \\w+)? (minutes? away|far|near)"]] },
  { title: "Je suis perdu(e)", icon: "🙋",
    prompts: ["Dis que tu es perdu(e).", "Dis ce que tu cherches.", "Demande de répéter.", "Remercie."],
    model: "Excuse me, I'm lost. I'm looking for the station. Could you repeat that, please? Thank you very much!",
    checks: [["Perdu(e)", "i'?m lost|i am lost"], ["Ce que tu cherches", "i'?m looking for (the|a|an)\\s+\\w+|where is (the|a)\\s+\\w+"], ["Répéter", "could you repeat|sorry\\?|speak slowly"], ["Merci", "thank(s| you)"]] },
];

export const TEST_TEXTS_A18 = [
  { title: "La bibliothèque", text: "I'm Emma. I'm looking for the library. I'm lost. A woman says: 'Go straight on. Turn left at the bank. The library is on your right.' It's five minutes away. I walk to the library and I find it easily. I'm happy now.", q: [["What is she looking for?", ["The library", "The bank", "The hospital"], 0], ["Where is the library?", ["On the right", "On the left", "Opposite the bank"], 0], ["How far is it?", ["Five minutes", "One hour", "Very far"], 0]] },
  { title: "Le bus de Sam", text: "I'm going to the station. I take the number 8 bus. I get off at the market. Then I walk for ten minutes. I never miss the bus. The bus is clean and not full. I sit near the window and look at the streets.", q: [["Which bus?", ["Number 8", "Number 18", "Number 80"], 0], ["Where does he get off?", ["At the market", "At the bank", "At the park"], 0], ["Does he miss the bus?", ["Never", "Always", "Sometimes"], 0]] },
  { title: "La touriste", text: "I'm a tourist in London. I don't understand the map. I ask a man: 'Could you repeat that? Speak slowly, please.' He smiles. Now I understand the map. I say: 'Thank you very much!' and I go to the museum.", q: [["Where is she?", ["In London", "In Paris", "At home"], 0], ["What does she ask?", ["To repeat slowly", "For a taxi", "For money"], 0], ["Does the man help?", ["Yes", "No", "Not stated"], 0]] },
  { title: "Le mauvais bus", text: "I'm on the bus to the hospital. I'm going the wrong way! I get off and change buses at the next stop. The next bus is on time. I'm a little tired, but I'm not angry.", q: [["Where does the speaker go?", ["To the hospital", "To the park", "To school"], 0], ["What is the problem?", ["Wrong way", "No money", "Late"], 0], ["What does the speaker do?", ["Changes buses", "Walks home", "Takes a taxi"], 0]] },
  { title: "L'office de tourisme", text: "I work at the tourist office. I say: 'This way, please. Follow me!' The post office is near the park. The pharmacy is opposite the bank. The tourists are happy and say thank you. I love my job.", q: [["Where does the speaker work?", ["At the tourist office", "At the bank", "At the library"], 0], ["Where is the post office?", ["Near the park", "Opposite the bank", "Behind the school"], 0], ["Where is the pharmacy?", ["Opposite the bank", "Near the park", "Next to the library"], 0]] },
];

export const TEST_AUDIOS_A18 = [
  { script: "Excuse me, I'm looking for the pharmacy. Go straight on. Turn right at the traffic lights. It is next to the bank. It's two minutes away.", q: [["What is the first speaker looking for?", ["The pharmacy", "The bank", "The library"], 0], ["Where is it?", ["Next to the bank", "Opposite the school", "At the station"], 0]] },
  { script: "I'm lost. Can you help me? Where do you want to go? To the station. This is the wrong way. Turn around and go straight on.", q: [["Where does the first speaker want to go?", ["To the station", "To the park", "To the hospital"], 0], ["What is the problem?", ["Wrong way", "No ticket", "Closed station"], 0]] },
  { script: "Take the bus number five. Sorry? Could you repeat that? Of course. Take the bus number five. Get off at the library.", q: [["Which bus?", ["Number five", "Number fifteen", "Number fifty"], 0], ["Where do you get off?", ["At the library", "At the bank", "At the market"], 0]] },
  { script: "I'm going to Manchester. You need to change trains at Leeds. How long does it take? About two hours.", q: [["Where do you change trains?", ["At Leeds", "At Manchester", "At London"], 0], ["How long?", ["Two hours", "Ten minutes", "All day"], 0]] },
  { script: "Where is the tourist office? It's near the park. Follow me, please. This way. Thank you very much!", q: [["Where is it?", ["Near the park", "Near the bank", "At the station"], 0], ["What does the second speaker say?", ["Follow me", "Stop", "Go away"], 0]] },
];

export const TEST_GRAMMAR_A18 = [
  ["I ___ for the bank. (look)", ["am looking", "look", "looks"], 0], ["She ___ to the park. (walk)", ["is walking", "walk", "are walking"], 0], ["They ___ the bus. (wait for)", ["are waiting for", "waits for", "is waiting for"], 0], ["He ___ a map. (use)", ["is using", "using", "are using"], 0],
  ["Where ___ you going?", ["are", "do", "is"], 0], ["___ she walking to school?", ["Is", "Are", "Does"], 0], ["___ they waiting?", ["Are", "Is", "Do"], 0], ["We ___ lost. (négatif)", ["aren't", "isn't", "don't"], 0],
  ["I ___ to school every day.", ["go", "am going", "going"], 0], ["Look! The bus ___.", ["is coming", "comes", "come"], 0], ["She often ___ the train.", ["takes", "is taking", "take"], 0], ["He ___ at the moment. (wait)", ["is waiting", "waits", "wait"], 0],
  ["___ , go straight on. (d'abord)", ["First", "Finally", "Opposite"], 0], ["First turn left. ___ turn right.", ["Then", "Opposite", "Far"], 0], ["Get ___ at the next stop.", ["off", "on", "of"], 0], ["___ you repeat that, please?", ["Could", "Do", "Are"], 0],
  ["What does “wrong” ___ ?", ["mean", "means", "meaning"], 0], ["Speak ___ , please.", ["slowly", "slow", "slowest"], 0], ["“Library” means…", ["bibliothèque", "librairie", "banque"], 0], ["“Lost” means…", ["perdu", "loin", "fermé"], 0],
  ["“Get off” means…", ["descendre", "monter", "rater"], 0], ["“Miss the bus” means…", ["rater le bus", "prendre le bus", "attendre le bus"], 0], ["You need medicine:", ["the pharmacy", "the library", "the post office"], 0], ["You want to send a letter:", ["the post office", "the gym", "the bank"], 0],
  ["___ there a bank near here?", ["Is", "Are", "Do"], 0], ["There ___ two shops.", ["are", "is", "am"], 0], ["I'm ___ . (run)", ["running", "runing", "runs"], 0], ["He is ___ a coffee now. (have)", ["having", "haves", "have"], 0],
  ["You didn't hear. You say:", ["Could you repeat that?", "Could you open that?", "Could you buy that?"], 0], ["I'm not ___ to the park. (go)", ["going", "go", "goes"], 0],
];

export const MISSIONS_A18 = [
  { id: "m1", ic: "🏛️", title: "Quel lieu ?", sub: "Écoute et choisis le bon lieu.", hero: "city/a18-m1" },
  { id: "m2", ic: "🧭", title: "Suis le guide", sub: "Écoute et choisis la bonne direction.", hero: "city/a18-m2" },
  { id: "m3", ic: "💬", title: "Construis la phrase", sub: "Remets les mots dans l'ordre.", hero: "city/a18-m3" },
  { id: "m4", ic: "🔄", title: "Simple ou continu ?", sub: "Choisis le bon temps.", hero: "city/a18-m4" },
  { id: "m5", ic: "🙋", title: "Je suis perdu(e)", sub: "Choisis la bonne phrase.", hero: "city/a18-m5" },
  { id: "m6", ic: "🧳", title: "Le grand guide", sub: "Guide un touriste en anglais.", hero: "city/a18-m6" },
];

const pick = (say, label, a, o) => ({ say, groups: [{ label, answer: a, opts: names(o) }] });
export const DATA_A18 = {
  m1: [
    pick("I need medicine. I'm going to the…", "Place", "pharmacy", ["pharmacy", "library", "gym", "bank"]),
    pick("I want to borrow a book. I'm going to the…", "Place", "library", ["library", "pharmacy", "hospital", "bank"]),
    pick("I want to send a letter. I'm going to the…", "Place", "post office", ["post office", "gym", "library", "hospital"]),
    pick("I'm ill. I need a doctor. I'm going to the…", "Place", "hospital", ["hospital", "bank", "gym", "post office"]),
    pick("I want to do sport. I'm going to the…", "Place", "gym", ["gym", "bank", "library", "pharmacy"]),
  ],
  m2: [
    pick("Go straight on. Turn left at the bank.", "Turn…", "left", ["left", "right", "back"]),
    pick("Take the second street on the right.", "Turn…", "right", ["right", "left", "straight"]),
    pick("Get off the bus at the market.", "Where?", "at the market", ["at the market", "at the bank", "at the park"]),
    pick("Change trains at Leeds.", "Where?", "at Leeds", ["at Leeds", "at London", "at Paris"]),
  ],
  m3: [
    { prompt: "Dis : « Je cherche la gare. »", answer: ["I'm", "looking", "for", "the", "station", "."], bank: ["looking", "station", "I'm", "the", "for", "."] },
    { prompt: "Demande : « Où allez-vous ? »", answer: ["Where", "are", "you", "going", "?"], bank: ["going", "are", "Where", "you", "?"] },
    { prompt: "Dis : « Je suis perdu. »", answer: ["I'm", "lost", "."], bank: ["lost", "I'm", "."] },
    { prompt: "Demande : « Pouvez-vous répéter ? »", answer: ["Could", "you", "repeat", "that", "?"], bank: ["repeat", "you", "Could", "that", "?"] },
    { prompt: "Dis : « C'est à cinq minutes. »", answer: ["It's", "five", "minutes", "away", "."], bank: ["minutes", "away", "It's", "five", "."] },
  ],
  m4: [
    pick("I go to school every day.", "Tense", "present simple", ["present simple", "present continuous"]),
    pick("Look! The bus is coming.", "Tense", "present continuous", ["present continuous", "present simple"]),
    pick("She is walking to the station now.", "Tense", "present continuous", ["present continuous", "present simple"]),
    pick("He often takes the bus.", "Tense", "present simple", ["present simple", "present continuous"]),
  ],
  m5: [
    pick("Tu es perdu(e). Tu dis :", "Say", "Excuse me, I'm lost.", ["Excuse me, I'm lost.", "Excuse me, I'm far.", "Excuse me, I'm closed."]),
    pick("Tu n'as pas compris. Tu dis :", "Say", "Could you repeat that?", ["Could you repeat that?", "Could you open that?", "Could you pay that?"]),
    pick("Tu veux savoir si c'est loin :", "Say", "Is it far?", ["Is it far?", "Is it open?", "Is it free?"]),
    pick("Tu remercies :", "Say", "Thank you for your help!", ["Thank you for your help!", "Thank you for your bus!", "Thank you my help!"]),
  ],
  m6: [
    { prompt: "Guide le touriste.", card: [["First", "straight on"], ["Then", "turn left"], ["Place", "library"]], answer: ["First,", "go straight on.", "Then,", "turn left.", "The library", "is on your right."], bank: ["go straight on.", "turn right.", "First,", "Then,", "turn left.", "The library", "is on your right.", "is far."] },
    { prompt: "Guide le touriste.", card: [["First", "take the bus"], ["Then", "get off at the market"], ["Place", "park"]], answer: ["First,", "take the bus.", "Then,", "get off at the market.", "The park", "is near."], bank: ["take the bus.", "take the train.", "First,", "Then,", "get off at the market.", "The park", "is near.", "is far."] },
  ],
};

balanceAll({ VOCAB_A18, GRAMMAR_A18, READING_A18, LISTENING_A18, EXERCISES_A18, EXPRESSION_A18, TEST_TEXTS_A18, TEST_AUDIOS_A18, TEST_GRAMMAR_A18, DATA_A18 });
