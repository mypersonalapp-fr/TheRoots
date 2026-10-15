// The Roots — A1.12 « Social English » : contenu texte complet (palier de synthèse A1). Mêmes formats qu'A1.1–A1.11. À relire par un natif.
// Images à fournir : lesson/scene-a112-*.webp et city/a112-m1..m6.webp.
import { balanceAll } from "./balance.js";
const names = (a) => a.map((n) => ({ v: n, label: n }));

export const VOCAB_A112 = [
  { kind: "greetings", title: "Commencer une conversation", icon: "👋",
    tip: "“How are you?” est une formule : on répond “Fine, thanks. And you?”. “How's it going?” est plus familier.",
    examples: [["Hello! How are you?", "Bonjour ! Comment vas-tu ?"], ["Fine, thanks. And you?", "Bien, merci. Et toi ?"], ["How's it going?", "Comment ça va ?"]],
    practice: "Écoute et répète la phrase.", say: "Hi! How are you? Fine, thanks. And you?" },
  { kind: "words", title: "Saluer selon le moment", icon: "🌞", scene: ["scene-a112-greetings", "Quatre personnes qui se saluent : matin, après-midi, soir, au revoir"],
    words: [["Good morning", "Bonjour (matin)"], ["Good afternoon", "Bonjour (après-midi)"], ["Good evening", "Bonsoir"], ["Good night", "Bonne nuit"], ["Goodbye", "Au revoir"], ["See you soon", "À bientôt"]],
    tip: "“Good night” se dit seulement pour partir se coucher ou quitter quelqu'un le soir. Pour arriver le soir : “Good evening”.",
    examples: [["Good morning, Mrs Brown!", "Bonjour, Mme Brown !"], ["See you soon, Tom!", "À bientôt, Tom !"]],
    q: ["“Good evening” veut dire…", ["Bonsoir", "Bonne nuit", "Bonjour"], 0] },
  { kind: "words", title: "Merci, pardon, s'il vous plaît", icon: "🙏", scene: ["scene-a112-polite", "Une personne qui tend un cadeau, une qui s'excuse, une qui remercie"],
    words: [["please", "s'il vous plaît"], ["thank you", "merci"], ["you're welcome", "de rien"], ["sorry", "désolé"], ["excuse me", "excusez-moi"], ["no problem", "pas de souci"]],
    tip: "“Sorry” = s'excuser après une erreur. “Excuse me” = attirer l'attention ou passer devant quelqu'un.",
    examples: [["Thank you very much!", "Merci beaucoup !"], ["Excuse me, where is the station?", "Excusez-moi, où est la gare ?"]],
    q: ["“You're welcome” est la réponse à…", ["Thank you", "Sorry", "Hello"], 0] },
  { kind: "words", title: "Demander poliment", icon: "💬", scene: ["scene-a112-requests", "Une personne qui demande un stylo, une autre qui demande de l'aide"],
    words: [["Could you…?", "Pourriez-vous… ?"], ["Can I…?", "Puis-je… ?"], ["Can you help me?", "Pouvez-vous m'aider ?"], ["Would you like…?", "Voulez-vous… ?"], ["Sure!", "Bien sûr !"], ["Of course", "Bien sûr / évidemment"]],
    tip: "“Could you…?” est plus poli que “Can you…?”. Ajoute “please” pour être encore plus poli.",
    examples: [["Could you open the window, please?", "Pourriez-vous ouvrir la fenêtre, s'il vous plaît ?"], ["Can I sit here?", "Puis-je m'asseoir ici ?"]],
    q: ["La forme la plus polie est…", ["Could you…?", "Give me…", "I want…"], 0] },
  { kind: "words", title: "Prendre des nouvelles", icon: "😊", scene: ["scene-a112-news", "Deux amis qui se retrouvent dans la rue"],
    words: [["How's it going?", "Comment ça va ?"], ["What's new?", "Quoi de neuf ?"], ["Long time no see", "Ça fait longtemps"], ["Not bad", "Pas mal"], ["Great!", "Super !"], ["Have a good day", "Bonne journée"]],
    tip: "Avec des amis : “Long time no see!” = “Ça fait un bail !”. Réponse simple : “Not bad, thanks.”",
    examples: [["Long time no see! How are you?", "Ça fait longtemps ! Comment vas-tu ?"], ["Have a good day!", "Bonne journée !"]],
    q: ["“What's new?” veut dire…", ["Quoi de neuf ?", "Comment tu t'appelles ?", "Où vas-tu ?"], 0] },
  { kind: "words", title: "Les connecteurs", icon: "🔗", scene: ["scene-a112-connectors", "Quatre panneaux vides reliés par des flèches"],
    words: [["and", "et"], ["but", "mais"], ["so", "donc"], ["because", "parce que"], ["or", "ou"], ["also", "aussi"]],
    tip: "“Because” explique la raison : “I'm tired because I work a lot.” “So” donne la conséquence : “I'm tired, so I sleep.”",
    examples: [["I like tea, but I don't like coffee.", "J'aime le thé, mais pas le café."], ["I'm hungry because I don't eat.", "J'ai faim parce que je ne mange pas."]],
    q: ["“Because” veut dire…", ["parce que", "donc", "mais"], 0] },
  { kind: "words", title: "Finir une conversation", icon: "👋", scene: ["scene-a112-goodbye", "Deux amis qui se disent au revoir devant une porte"],
    words: [["I have to go", "je dois partir"], ["Nice to meet you", "enchanté"], ["See you tomorrow", "à demain"], ["Take care", "prends soin de toi"], ["Say hello to…", "salue… de ma part"], ["Talk to you later", "à plus tard"]],
    tip: "“Nice to meet you” se dit à la première rencontre. Avant de partir : “It was nice to meet you.”",
    examples: [["I have to go. See you tomorrow!", "Je dois partir. À demain !"], ["Say hello to your sister.", "Salue ta sœur de ma part."]],
    q: ["“I have to go” veut dire…", ["je dois partir", "je veux manger", "je suis perdu"], 0] },
];

export const GRAMMAR_A112 = [
  { title: "Revoir : to be et to have", icon: "🧱",
    table: [["I am / you are / she is", "je suis / tu es / elle est", "to be"], ["I'm not / he isn't", "je ne suis pas / il n'est pas", "négatif"], ["I have / she has", "j'ai / elle a", "to have"], ["Are you ready? Yes, I am.", "Es-tu prêt ? Oui.", "question courte"]],
    examples: [["I'm Anna and I'm from France.", "Je suis Anna et je viens de France."], ["She has two brothers.", "Elle a deux frères."]],
    qs: [["She ___ a teacher.", ["is", "are", "am"], 0, "She is."], ["He ___ two sisters.", ["has", "have", "is"], 0, "He has."]] },
  { title: "Revoir : les questions", icon: "❓",
    table: [["Who is she?", "Qui est-elle ?", "who"], ["Where do you live?", "Où habites-tu ?", "where + do"], ["What time does it start?", "À quelle heure ça commence ?", "what time + does"], ["How much is it?", "Combien ça coûte ?", "how much"]],
    examples: [["Where are you from?", "D'où viens-tu ?"], ["What do you like?", "Qu'aimes-tu ?"]],
    qs: [["Where ___ she live?", ["does", "do", "is"], 0, "does + she."], ["___ old are you?", ["How", "What", "Who"], 0, "How old."]] },
  { title: "Revoir : le présent simple et continu", icon: "🔁",
    table: [["I work every day.", "Je travaille tous les jours.", "habitude"], ["I'm working now.", "Je travaille en ce moment.", "maintenant"], ["She doesn't like coffee.", "Elle n'aime pas le café.", "doesn't"], ["Are you studying?", "Étudies-tu (maintenant) ?", "Are + -ing"]],
    examples: [["He plays football on Sunday.", "Il joue au football le dimanche."], ["They're watching TV now.", "Ils regardent la télé maintenant."]],
    qs: [["I ___ English every day. (study)", ["study", "am studying", "studies"], 0, "Habitude."], ["Look! He ___ now. (run)", ["is running", "runs", "run"], 0, "Maintenant."]] },
  { title: "Les formules polies", icon: "🙏",
    table: [["Could you help me, please?", "Pourriez-vous m'aider, s'il vous plaît ?", "Could you + verbe"], ["Can I have a glass of water?", "Puis-je avoir un verre d'eau ?", "Can I + verbe"], ["I'd like a coffee, please.", "Je voudrais un café.", "would like"], ["Would you like some tea?", "Voulez-vous du thé ?", "proposer"]],
    examples: [["Could you repeat that, please?", "Pourriez-vous répéter, s'il vous plaît ?"], ["Can I sit here?", "Puis-je m'asseoir ici ?"]],
    qs: [["___ you open the door, please?", ["Could", "Do", "Are"], 0, "Could you."], ["___ I come in?", ["Can", "Do", "Am"], 0, "Can I."]] },
  { title: "Les connecteurs : and, but, so, because", icon: "🔗",
    table: [["I like tea and coffee.", "J'aime le thé et le café.", "and = addition"], ["I like tea, but not coffee.", "J'aime le thé, mais pas le café.", "but = contraste"], ["I'm tired, so I sleep.", "Je suis fatigué, donc je dors.", "so = conséquence"], ["I sleep because I'm tired.", "Je dors parce que je suis fatigué.", "because = raison"]],
    examples: [["She is kind and funny.", "Elle est gentille et drôle."], ["I'm late because the bus is late.", "Je suis en retard parce que le bus est en retard."]],
    qs: [["I'm cold, ___ I wear a coat.", ["so", "because", "but"], 0, "so = conséquence."], ["I stay home ___ it's raining.", ["because", "so", "but"], 0, "because = raison."]] },
  { title: "Réemploi : going to et would like", icon: "🔮",
    table: [["I'm going to travel.", "Je vais voyager.", "projet"], ["Are you going to come?", "Vas-tu venir ?", "question"], ["I'd like a room.", "Je voudrais une chambre.", "demande polie"], ["Would you like a coffee?", "Voulez-vous un café ?", "proposition"]],
    examples: [["I'm going to call you tomorrow.", "Je vais t'appeler demain."], ["I'd like to meet your friends.", "Je voudrais rencontrer tes amis."]],
    qs: [["She ___ to call you tomorrow.", ["is going", "go", "goes"], 0, "is going to."], ["I ___ like a glass of water.", ["would", "do", "am"], 0, "would like."]] },
];

export const READING_A112 = [
  { who: "Sara", text: "Hi! I'm Sara. I meet my friend Tom at the café. 'Hello, Tom! Long time no see! How are you?' 'Not bad, thanks. And you?' 'Great! Let's have a coffee.'",
    fr: "Sara retrouve Tom au café et ils prennent un café.",
    qs: [["Where do they meet?", ["At the café", "At school", "At the airport"], 0, "At the café."], ["How is Tom?", ["Not bad", "Very sad", "Tired"], 0, "Not bad."]] },
  { who: "Ben", text: "Hello, I'm Ben. I'm at a new school. I say: 'Good morning! I'm Ben. Nice to meet you.' The teacher says: 'Welcome, Ben! Could you sit here, please?'",
    fr: "Ben se présente à son nouveau professeur, qui l'invite à s'asseoir.",
    qs: [["What does Ben say first?", ["Good morning", "Good night", "Goodbye"], 0, "Good morning."], ["What does the teacher ask?", ["To sit here", "To leave", "To write"], 0, "Sit here."]] },
  { who: "Lina", text: "I'm Lina. I'm late for the bus. 'Excuse me, can I sit here?' 'Of course.' 'Thank you!' 'You're welcome.' I'm happy because the bus is warm.",
    fr: "Lina demande poliment de s'asseoir dans le bus et remercie.",
    qs: [["What does Lina ask?", ["Can I sit here?", "Where is the bus?", "What time is it?"], 0, "Can I sit here."], ["Why is the speaker happy?", ["The bus is warm", "She is early", "She is on holiday"], 0, "The bus is warm."]] },
  { who: "Max", text: "Hi, I'm Max. I have to go now. 'See you tomorrow, Anna! Say hello to your mother.' 'Thanks, Max. Have a good evening!' 'You too! Bye!'",
    fr: "Max dit au revoir à Anna et salue sa mère.",
    qs: [["What does Max say to Anna?", ["See you tomorrow", "Good morning", "Nice to meet you"], 0, "See you tomorrow."], ["Who does he say hello to?", ["Her mother", "Her teacher", "Her friend"], 0, "Her mother."]] },
  { who: "Eva", text: "I'm Eva. Today I send a message to my friend: 'Hi Zoe! I'm sorry, I can't come on Saturday because I have an exam. But I'm free on Sunday. Are you going to be at home? Eva.'",
    fr: "Eva s'excuse par message : examen samedi, libre dimanche.",
    qs: [["Why can't Eva come on Saturday?", ["She has an exam", "She is on holiday", "She is ill"], 0, "Exam."], ["When is she free?", ["On Sunday", "On Friday", "On Monday"], 0, "Sunday."]] },
];

export const LISTENING_A112 = [
  { title: "Greeting a friend", text: "Hi, Mark! How are you? I'm fine, thanks. And you? Not bad. What's new? I have a new job!",
    qs: [["How is the first speaker?", ["Fine", "Tired", "Sad"], 0, "Fine."], ["What's new?", ["A new job", "A new house", "A new car"], 0, "New job."]] },
  { title: "In a shop", text: "Excuse me, could you help me, please? Of course. I'd like a blue T-shirt. Here you are. Thank you. You're welcome.",
    qs: [["What does the customer want?", ["A blue T-shirt", "A red hat", "Shoes"], 0, "Blue T-shirt."], ["The answer to thank you:", ["You're welcome", "Sorry", "Goodbye"], 0, "You're welcome."]] },
  { title: "Introducing", text: "Hello! My name is Paul. Nice to meet you. Nice to meet you too, Paul. I'm Lucy. Are you a student? No, I'm a teacher.",
    qs: [["What is Lucy's friend called?", ["Paul", "Mark", "Tom"], 0, "Paul."], ["What is Paul?", ["A teacher", "A student", "A doctor"], 0, "A teacher."]] },
  { title: "Sorry!", text: "Oh, sorry! No problem. I'm late because the bus is late. It's OK. Please sit down. Thank you.",
    qs: [["Why is the speaker late?", ["The bus is late", "She is ill", "She forgets"], 0, "Bus late."], ["The answer to sorry:", ["No problem", "Goodbye", "Good morning"], 0, "No problem."]] },
  { title: "On the phone", text: "Hello? Hi, it's Anna. Can I speak to Tom, please? Sorry, he isn't here. Could you ask him to call me? Sure!",
    qs: [["Who is calling?", ["Anna", "Tom", "Lucy"], 0, "Anna."], ["What does she ask?", ["To ask Tom to call", "To buy bread", "To come now"], 0, "Call back."]] },
  { title: "Making a plan", text: "Would you like to go to the cinema on Saturday? Sorry, I can't, but I'm free on Sunday. OK, see you on Sunday at six.",
    qs: [["Why is Saturday impossible?", ["The second speaker can't come", "The cinema is closed", "It's raining"], 0, "She can't."], ["When do they meet?", ["Sunday at six", "Saturday at six", "Sunday at ten"], 0, "Sunday 6."]] },
  { title: "Leaving", text: "I have to go now. OK, see you tomorrow! Say hello to your family. Thanks! Have a good evening. You too! Bye!",
    qs: [["What does the first speaker say before leaving?", ["I have to go", "I want a coffee", "I am hungry"], 0, "I have to go."], ["See you…", ["tomorrow", "next year", "on Sunday"], 0, "Tomorrow."]] },
  { title: "Reasons", text: "Why are you late? Because my bike is broken. So how do you come? I come on foot. I'm tired, but happy.",
    qs: [["Why is the second speaker late?", ["A broken bike", "He is ill", "He forgets"], 0, "Broken bike."], ["How does the second speaker come?", ["On foot", "By bus", "By car"], 0, "On foot."]] },
];

export const EXERCISES_A112 = [
  { title: "Vocabulaire — Salutations", help: "Choisis le sens correct.",
    qs: [["Good evening", ["Bonsoir", "Bonjour", "Bonne nuit"], 0, "Good evening."], ["You're welcome", ["De rien", "Merci", "Pardon"], 0, "You're welcome."], ["Long time no see", ["Ça fait longtemps", "À demain", "Bonne journée"], 0, "Long time no see."], ["Take care", ["Prends soin de toi", "À bientôt", "Excuse-moi"], 0, "Take care."], ["because", ["parce que", "donc", "mais"], 0, "Because."], ["See you soon", ["À bientôt", "Bonsoir", "Merci"], 0, "See you soon."]] },
  { title: "Salutations selon le moment", help: "Choisis la bonne salutation.",
    qs: [["8h00 du matin:", ["Good morning", "Good evening", "Good night"], 0, "Morning."], ["15h00:", ["Good afternoon", "Good morning", "Good night"], 0, "Afternoon."], ["19h00 en arrivant:", ["Good evening", "Good morning", "Goodbye"], 0, "Evening."], ["Tu vas te coucher:", ["Good night", "Good morning", "Good afternoon"], 0, "Good night."], ["Tu pars:", ["Goodbye", "Hello", "Good morning"], 0, "Goodbye."]] },
  { title: "Formules polies", help: "Could you / Can I / Would you like.",
    qs: [["___ you help me, please?", ["Could", "Do", "Are"], 0, "Could you."], ["___ I sit here?", ["Can", "Do", "Am"], 0, "Can I."], ["___ you like a coffee?", ["Would", "Do", "Are"], 0, "Would you like."], ["Thank you! — ___", ["You're welcome.", "Sorry.", "Hello."], 0, "You're welcome."], ["Sorry! — ___", ["No problem.", "Thank you.", "Good morning."], 0, "No problem."]] },
  { title: "Connecteurs", help: "and / but / so / because.",
    qs: [["I like tea ___ coffee.", ["and", "but", "so"], 0, "Addition."], ["I like tea, ___ I don't like coffee.", ["but", "and", "so"], 0, "Contraste."], ["I'm tired, ___ I sleep.", ["so", "because", "but"], 0, "Conséquence."], ["I sleep ___ I'm tired.", ["because", "so", "but"], 0, "Raison."], ["She is kind ___ funny.", ["and", "but", "because"], 0, "Addition."]] },
  { title: "Questions A1", help: "Choisis la bonne question.",
    qs: [["Tu demandes le prénom:", ["What's your name?", "Who your name?", "What name you?"], 0, "What's your name?"], ["Tu demandes où il habite:", ["Where does he live?", "Where he lives?", "Where do he live?"], 0, "does he live."], ["Tu demandes l'heure:", ["What time is it?", "What hour is it?", "Which time is?"], 0, "What time is it?"], ["Tu demandes le prix:", ["How much is it?", "How many is it?", "What price is?"], 0, "How much."], ["Tu demandes la météo:", ["What's the weather like?", "How is weather do?", "What weather is?"], 0, "What's the weather like?"]] },
  { title: "Présent et projets", help: "Simple, continu, going to.",
    qs: [["I ___ English every day.", ["study", "am studying", "studies"], 0, "Habitude."], ["She ___ TV now.", ["is watching", "watches", "watch"], 0, "Maintenant."], ["We ___ to travel next week.", ["are going", "go", "goes"], 0, "going to."], ["He ___ like coffee. (négatif)", ["doesn't", "don't", "isn't"], 0, "doesn't."], ["I ___ like a room, please.", ["would", "do", "am"], 0, "would like."]] },
  { title: "Mise en situation", help: "Conversation du quotidien.",
    qs: [["Tu rencontres quelqu'un:", ["Nice to meet you.", "I meet you nice.", "Meeting you nice."], 0, "Nice to meet you."], ["Tu veux partir:", ["I have to go.", "I must to go.", "I go have."], 0, "I have to go."], ["Tu t'excuses:", ["I'm sorry.", "I'm sorry to.", "Sorry I am."], 0, "I'm sorry."], ["Tu demandes de l'aide:", ["Could you help me, please?", "Help me you could?", "Could help you me?"], 0, "Could you…"], ["Tu dis au revoir à un ami:", ["See you tomorrow!", "See you yesterday!", "Good morning!"], 0, "See you tomorrow."]] },
];

export const EXPRESSION_A112 = [
  { title: "Un message à un ami", icon: "✉️",
    prompts: ["Dis bonjour et demande des nouvelles.", "Dis que tu es désolé(e) et pourquoi.", "Propose un plan.", "Termine le message."],
    model: "Hi Zoe! How are you? I'm sorry, I can't come on Saturday because I have an exam. Would you like to go to the cinema on Sunday? See you soon!",
    checks: [["Salutation", "(hi|hello|hey)\\b.*how are you|how are you"], ["Excuse + raison", "(i'?m )?sorry.*because"], ["Proposition", "would you like to\\s+\\w+|can we\\s+\\w+|let'?s\\s+\\w+"], ["Fin", "see you (soon|tomorrow|on \\w+)|have a (good|nice) (day|evening|weekend)|take care|bye"]] },
  { title: "Une conversation complète", icon: "🗣️",
    prompts: ["Salue et présente-toi.", "Demande poliment quelque chose.", "Dis ce que tu aimes avec 'and' ou 'but'.", "Dis au revoir."],
    model: "Hello! I'm Anna. Could you help me, please? I like tea, but I don't like coffee. I have to go. Goodbye!",
    checks: [["Présentation", "(hello|hi|good (morning|afternoon|evening))\\b.*(i'?m|my name is)\\s+\\w+"], ["Demande polie", "could you\\s+\\w+|can i\\s+\\w+|would you like"], ["Connecteur", "\\b(and|but|so|because)\\b"], ["Au revoir", "goodbye|bye|see you|i have to go|take care"]] },
];

export const TEST_TEXTS_A112 = [
  { title: "Au café", text: "We are at the café. Hello, Tom! Long time no see! How are you? Not bad, thanks. And you? Great! Let's have a coffee.", q: [["Where are they?", ["At the café", "At school", "At the airport"], 0], ["How is Tom?", ["Not bad", "Very sad", "Tired"], 0], ["What do they decide?", ["To have a coffee", "To go home", "To study"], 0]] },
  { title: "Nouvelle école", text: "Good morning! I'm Ben. Nice to meet you. Welcome, Ben! Could you sit here, please? Of course. Thank you.", q: [["Who is new?", ["Ben", "The teacher", "Tom"], 0], ["What does the teacher ask?", ["To sit here", "To leave", "To write"], 0], ["Ben's answer:", ["Of course", "No", "Sorry"], 0]] },
  { title: "Dans le bus", text: "Excuse me, can I sit here? Of course. Thank you! You're welcome. I'm happy because the bus is warm.", q: [["What does the speaker ask?", ["To sit", "The time", "The price"], 0], ["Answer to thank you:", ["You're welcome", "No problem", "Sorry"], 0], ["Why is the speaker happy?", ["The bus is warm", "She is early", "She is on holiday"], 0]] },
  { title: "Au revoir", text: "I have to go now. See you tomorrow, Anna! Say hello to your mother. Thanks, Max. Have a good evening! You too! Bye!", q: [["Who goes?", ["Max", "Anna", "The mother"], 0], ["See you…", ["tomorrow", "next week", "on Sunday"], 0], ["Who does Max greet?", ["Anna's mother", "Anna's teacher", "Anna's friend"], 0]] },
  { title: "Le message", text: "Hi Zoe! I'm sorry, I can't come on Saturday because I have an exam. But I'm free on Sunday. Are you going to be at home?", q: [["Why can't the writer come?", ["The writer has an exam", "The writer is on holiday", "The writer is ill"], 0], ["When is the writer free?", ["On Sunday", "On Friday", "On Monday"], 0], ["Who is the message for?", ["Zoe", "Eva", "Tom"], 0]] },
];

export const TEST_AUDIOS_A112 = [
  { script: "Hi, Mark! How are you? I'm fine, thanks. And you? Not bad. What's new? I have a new job!", q: [["How is the first speaker?", ["Fine", "Tired", "Sad"], 0], ["What's new?", ["A new job", "A new house", "A new car"], 0]] },
  { script: "Excuse me, could you help me, please? Of course. I'd like a blue T-shirt. Here you are. Thank you. You're welcome.", q: [["What does the customer want?", ["A blue T-shirt", "A red hat", "Shoes"], 0], ["Answer to thank you:", ["You're welcome", "Sorry", "Goodbye"], 0]] },
  { script: "Oh, sorry! No problem. I'm late because the bus is late. It's OK. Please sit down. Thank you.", q: [["Why is the speaker late?", ["The bus is late", "She is ill", "She forgets"], 0], ["Answer to sorry:", ["No problem", "Goodbye", "Good morning"], 0]] },
  { script: "Would you like to go to the cinema on Saturday? Sorry, I can't, but I'm free on Sunday. OK, see you on Sunday at six.", q: [["Saturday:", ["The second speaker can't come", "The cinema is closed", "It's raining"], 0], ["They meet:", ["Sunday at six", "Saturday at six", "Sunday at ten"], 0]] },
  { script: "I have to go now. OK, see you tomorrow! Say hello to your family. Thanks! Have a good evening. You too! Bye!", q: [["The first speaker says:", ["I have to go", "I want a coffee", "I am hungry"], 0], ["See you…", ["tomorrow", "next year", "on Sunday"], 0]] },
];

export const TEST_GRAMMAR_A112 = [
  ["She ___ a teacher.", ["is", "are", "am"], 0], ["He ___ two sisters.", ["has", "have", "is"], 0], ["Where ___ she live?", ["does", "do", "is"], 0], ["___ old are you?", ["How", "What", "Who"], 0],
  ["I ___ English every day. (study)", ["study", "am studying", "studies"], 0], ["Look! He ___ now. (run)", ["is running", "runs", "run"], 0], ["He ___ like coffee. (négatif)", ["doesn't", "don't", "isn't"], 0], ["Are you studying? — Yes, I ___.", ["am", "do", "are"], 0],
  ["___ you open the door, please?", ["Could", "Do", "Are"], 0], ["___ I come in?", ["Can", "Do", "Am"], 0], ["___ you like a coffee?", ["Would", "Do", "Are"], 0], ["I ___ like a room, please.", ["would", "do", "am"], 0],
  ["I'm cold, ___ I wear a coat.", ["so", "because", "but"], 0], ["I stay home ___ it's raining.", ["because", "so", "but"], 0], ["I like tea, ___ I don't like coffee.", ["but", "and", "so"], 0], ["She is kind ___ funny.", ["and", "but", "because"], 0],
  ["She ___ to call you tomorrow.", ["is going", "go", "goes"], 0], ["We ___ to travel next week.", ["are going", "go", "goes"], 0], ["Thank you! — ___", ["You're welcome.", "Sorry.", "Hello."], 0], ["Sorry! — ___", ["No problem.", "Thank you.", "Good morning."], 0],
  ["19h00 en arrivant:", ["Good evening", "Good morning", "Goodbye"], 0], ["Tu vas te coucher:", ["Good night", "Good morning", "Good afternoon"], 0], ["“Long time no see” means…", ["ça fait longtemps", "à demain", "bonne journée"], 0], ["“Take care” means…", ["prends soin de toi", "à bientôt", "excuse-moi"], 0],
  ["You meet someone:", ["Nice to meet you.", "I meet you nice.", "Meeting you nice."], 0], ["You want to leave:", ["I have to go.", "I must to go.", "I go have."], 0], ["You ask the time:", ["What time is it?", "What hour is it?", "Which time is?"], 0], ["You ask the price:", ["How much is it?", "How many is it?", "What price is?"], 0],
  ["You say goodbye to a friend:", ["See you tomorrow!", "See you yesterday!", "Good morning!"], 0], ["“Because” means…", ["parce que", "donc", "mais"], 0],
];

export const MISSIONS_A112 = [
  { id: "m1", ic: "👋", title: "Bonjour, au revoir", sub: "Choisis la bonne salutation.", hero: "city/a112-m1" },
  { id: "m2", ic: "🙏", title: "Politesse", sub: "Écoute et choisis la bonne réponse.", hero: "city/a112-m2" },
  { id: "m3", ic: "💬", title: "Construis la phrase", sub: "Remets les mots dans l'ordre.", hero: "city/a112-m3" },
  { id: "m4", ic: "🔗", title: "Connecteurs", sub: "Choisis and, but, so ou because.", hero: "city/a112-m4" },
  { id: "m5", ic: "🗣️", title: "Conversation", sub: "Choisis la bonne phrase.", hero: "city/a112-m5" },
  { id: "m6", ic: "🏆", title: "Le grand dialogue", sub: "Construis une conversation complète.", hero: "city/a112-m6" },
];

const pick = (say, label, a, o) => ({ say, groups: [{ label, answer: a, opts: names(o) }] });
export const DATA_A112 = {
  m1: [
    pick("It is 8 o'clock in the morning.", "Say", "Good morning", ["Good morning", "Good evening", "Good night"]),
    pick("It is 7 o'clock in the evening, you arrive.", "Say", "Good evening", ["Good evening", "Good morning", "Goodbye"]),
    pick("You leave a friend.", "Say", "Goodbye", ["Goodbye", "Hello", "Good morning"]),
    pick("You go to bed.", "Say", "Good night", ["Good night", "Good afternoon", "Hello"]),
    pick("You see a friend after a long time.", "Say", "Long time no see!", ["Long time no see!", "See you soon!", "Good night!"]),
  ],
  m2: [
    pick("Thank you very much!", "Answer", "You're welcome.", ["You're welcome.", "Sorry.", "Good morning."]),
    pick("I'm sorry, I'm late!", "Answer", "No problem.", ["No problem.", "Thank you.", "Goodbye."]),
    pick("Could you help me, please?", "Answer", "Of course.", ["Of course.", "You're welcome.", "Good night."]),
    pick("Nice to meet you.", "Answer", "Nice to meet you too.", ["Nice to meet you too.", "You're welcome.", "See you."]),
  ],
  m3: [
    { prompt: "Dis : « Pourriez-vous m'aider, s'il vous plaît ? »", answer: ["Could", "you", "help", "me", ",", "please", "?"], bank: ["help", "you", "Could", "please", "me", ",", "?"] },
    { prompt: "Dis : « Je dois partir. »", answer: ["I", "have", "to", "go", "."], bank: ["go", "to", "I", "have", "."] },
    { prompt: "Dis : « Enchanté de vous rencontrer. »", answer: ["Nice", "to", "meet", "you", "."], bank: ["meet", "to", "Nice", "you", "."] },
    { prompt: "Demande : « Quoi de neuf ? »", answer: ["What's", "new", "?"], bank: ["new", "What's", "?"] },
    { prompt: "Dis : « À demain ! »", answer: ["See", "you", "tomorrow", "!"], bank: ["tomorrow", "you", "See", "!"] },
  ],
  m4: [
    pick("I like tea ___ coffee.", "Connector", "and", ["and", "but", "so"]),
    pick("I like tea, ___ I don't like coffee.", "Connector", "but", ["but", "and", "because"]),
    pick("I'm tired, ___ I go to bed.", "Connector", "so", ["so", "because", "but"]),
    pick("I stay home ___ it's raining.", "Connector", "because", ["because", "so", "and"]),
  ],
  m5: [
    pick("Tu demandes poliment un verre d'eau.", "Say", "Could I have a glass of water, please?", ["Could I have a glass of water, please?", "Give me water now.", "I want water you."]),
    pick("Tu rencontres quelqu'un.", "Say", "Hello! Nice to meet you.", ["Hello! Nice to meet you.", "Hello! I meet you nice.", "Hi! Meeting nice you."]),
    pick("Tu veux quitter la conversation.", "Say", "I have to go. See you soon!", ["I have to go. See you soon!", "I must go to see.", "Go I have, soon see."]),
    pick("Tu t'excuses pour ton retard.", "Say", "I'm sorry I'm late.", ["I'm sorry I'm late.", "Sorry I late am.", "I'm late sorry am."]),
  ],
  m6: [
    { prompt: "Fais un dialogue d'accueil.", card: [["Greeting", "Hello"], ["Need", "help"], ["End", "bye"]], answer: ["Hello!", "Could you help me, please?", "Of course.", "Thank you. Goodbye!"], bank: ["Hello!", "Could you help me, please?", "Of course.", "Thank you. Goodbye!", "Good night!", "I want help now."] },
    { prompt: "Fais un message à un ami.", card: [["Hello", "Zoe"], ["Reason", "exam"], ["Plan", "Sunday"]], answer: ["Hi Zoe!", "I'm sorry, I can't come on Saturday", "because I have an exam.", "Are you free on Sunday?"], bank: ["Hi Zoe!", "I'm sorry, I can't come on Saturday", "because I have an exam.", "Are you free on Sunday?", "so I have a pizza.", "Good evening, Tom!"] },
  ],
};

balanceAll({ VOCAB_A112, GRAMMAR_A112, READING_A112, LISTENING_A112, EXERCISES_A112, EXPRESSION_A112, TEST_TEXTS_A112, TEST_AUDIOS_A112, TEST_GRAMMAR_A112, DATA_A112 });
