// The Roots — A2.0 « Passerelle A1 → A2 » : leçon transversale entre A1 et A2. Mêmes formats qu'A1.x / A2.1.
// But : réviser les RÈGLES des temps vus en A1 (présent simple, présent continu, going to, be / have got, would like)
// et les VERBES de base de A1, puis expliquer pourquoi cette transition évite les lacunes avant le passé (A2.2).
// Contenu à relire par un natif. Pas d'image à fournir (utilise les visuels génériques de la ville).
import { balanceAll } from "./balance.js";
const names = (a) => a.map((n) => ({ v: n, label: n }));
// La bonne réponse est écrite en premier ; balanceAll() la répartit ensuite sur les positions.
const Q = (s, ok, a, b, ex) => (ex ? [s, [ok, a, b], 0, ex] : [s, [ok, a, b], 0]);
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
    q: ["« Aller » se dit…", ["go", "take", "get"], 0] },
  { kind: "words", title: "Les verbes du quotidien", icon: "🏠",
    words: [["eat", "manger"], ["drink", "boire"], ["read", "lire"], ["watch", "regarder"], ["listen", "écouter"], ["study", "étudier"], ["cook", "cuisiner"], ["walk", "marcher"], ["call", "appeler"], ["meet", "rencontrer"]],
    tip: "À la 3e personne du singulier, on ajoute -s : he eats, she reads. Cas spéciaux : study → studies, watch → watches.",
    examples: [["He studies English every evening.", "Il étudie l'anglais tous les soirs."], ["They meet their friends on Saturday.", "Ils retrouvent leurs amis le samedi."]],
    q: ["« Écouter » se dit…", ["listen", "watch", "read"], 0] },
  { kind: "words", title: "Les verbes de la ville et du voyage", icon: "🧳",
    words: [["turn", "tourner"], ["cross", "traverser"], ["buy", "acheter"], ["pay", "payer"], ["try", "essayer"], ["leave", "partir / quitter"], ["arrive", "arriver"], ["stay", "rester"], ["book", "réserver"], ["wait", "attendre"]],
    tip: "Les verbes en consonne + y changent à la 3e personne : try → tries. “Leave” (partir) deviendra “left” au passé : tu le verras en A2.2.",
    examples: [["The train arrives at nine.", "Le train arrive à neuf heures."], ["She tries a jacket on.", "Elle essaie une veste."]],
    q: ["« Réserver » se dit…", ["book", "buy", "pay"], 0] },
  { kind: "words", title: "Les repères de temps", icon: "🕒",
    words: [["every day", "tous les jours"], ["now", "maintenant"], ["at the moment", "en ce moment"], ["today", "aujourd'hui"], ["tomorrow", "demain"], ["next week", "la semaine prochaine"], ["yesterday", "hier"], ["last week", "la semaine dernière"]],
    tip: "“Every day” → présent simple. “Now / at the moment” → présent continu. “Tomorrow / next week” → going to. “Yesterday / last week” annoncent le passé : c'est le sujet de A2.2.",
    examples: [["I work every day, but I'm not working now.", "Je travaille tous les jours, mais pas maintenant."], ["We're going to leave tomorrow.", "Nous allons partir demain."]],
    q: ["« En ce moment » se dit…", ["at the moment", "every day", "next week"], 0] },
];

export const GRAMMAR_A20 = [
  { title: "À quoi sert chaque temps ?", icon: "🧭",
    table: [["Présent simple", "habitudes, faits, horaires", "I get up at seven."], ["Présent continu", "ce qui se passe maintenant", "I'm cooking."], ["Going to", "projets proches", "I'm going to travel."], ["Would like", "demander poliment", "I'd like a coffee."]],
    examples: [["She works in a bank. Today she's working at home.", "Elle travaille dans une banque. Aujourd'hui elle télétravaille."], ["We're going to eat out tonight.", "Nous allons dîner dehors ce soir."]],
    qs: [["“I ___ at seven every day.” (habitude)", ["get up", "am getting up", "get up am"], 0, "Habitude → présent simple."], ["“Look! It ___.” (maintenant)", ["is raining", "rains", "rain"], 0, "Maintenant → présent continu."]] },
  { title: "Présent simple : la règle complète", icon: "🔁",
    table: [["I / you / we / they work", "forme de base", "I work in a bank."], ["he / she / it works", "+ -s", "She works in a bank."], ["I don't work / She doesn't work", "négation : don't / doesn't + base", "He doesn't work."], ["Do you work? / Does she work?", "question : do / does + sujet + base", "Does he work?"]],
    examples: [["He doesn't eat meat.", "Il ne mange pas de viande."], ["Does she live in London?", "Habite-t-elle à Londres ?"]],
    qs: [["She ___ in London.", ["lives", "live", "living"], 0, "she → lives."], ["He ___ eat fish.", ["doesn't", "don't", "isn't"], 0, "he → doesn't."]] },
  { title: "Présent continu : la règle complète", icon: "⏳",
    table: [["I am reading", "am + -ing", "I'm reading."], ["He / she / it is reading", "is + -ing", "She's cooking."], ["We / you / they are reading", "are + -ing", "They're waiting."], ["Négation et question", "isn't / aren't ; Are you … ?", "Is he sleeping?"]],
    examples: [["I'm not working today.", "Je ne travaille pas aujourd'hui."], ["What are you doing?", "Que fais-tu ?"]],
    qs: [["They ___ for the bus.", ["are waiting", "waits", "is waiting"], 0, "they → are + -ing."], ["I'm ___ a letter. (write)", ["writing", "writeing", "write"], 0, "write → writing (on enlève le e)."]] },
  { title: "Les verbes qui n'aiment pas le -ing", icon: "🚫",
    table: [["know", "savoir / connaître", "I know the answer."], ["want", "vouloir", "She wants a coffee."], ["like / love / hate", "aimer / adorer / détester", "We love music."], ["need / have (posséder)", "avoir besoin / posséder", "I need help."]],
    examples: [["I know him. (pas “I'm knowing”)", "Je le connais."], ["He wants a new phone.", "Il veut un nouveau téléphone."]],
    qs: [["I ___ the answer.", ["know", "am knowing", "knowing"], 0, "know : pas de -ing."], ["She ___ a coffee.", ["wants", "is wanting", "want"], 0, "want : pas de -ing."]] },
  { title: "Be et have got : révision", icon: "🧩",
    table: [["I am / you are / he is", "be : être", "He is tall."], ["I have got / she has got", "avoir (famille, objets)", "She has got a sister."], ["There is / There are", "il y a", "There are two beds."], ["Négation : isn't, haven't got", "ne … pas", "I haven't got a car."]],
    examples: [["I'm twenty and I've got a brother.", "J'ai vingt ans et j'ai un frère."], ["Is there a bank near here?", "Y a-t-il une banque près d'ici ?"]],
    qs: [["She ___ got two cats.", ["has", "have", "is"], 0, "she → has got."], ["___ there a park?", ["Is", "Are", "Do"], 0, "a park → Is there."]] },
  { title: "Going to et would like", icon: "🚀",
    table: [["I'm going to + base", "projet proche", "I'm going to call him."], ["She isn't going to come", "négation", "He isn't going to wait."], ["Are you going to … ?", "question", "Are you going to stay?"], ["I'd like + nom / to + base", "demande polie", "I'd like to book a room."]],
    examples: [["We're going to visit Rome next week.", "Nous allons visiter Rome la semaine prochaine."], ["Would you like some tea?", "Voudrais-tu du thé ?"]],
    qs: [["I'm going ___ buy a ticket.", ["to", "for", "at"], 0, "going to + verbe."], ["I ___ a coffee, please.", ["'d like", "like to", "am like"], 0, "Demande polie : I'd like."]] },
  { title: "Choisir le bon temps", icon: "🎯",
    table: [["every day / usually / never", "présent simple", "I usually walk."], ["now / at the moment / today", "présent continu", "I'm walking now."], ["tomorrow / next week / tonight", "going to", "I'm going to walk."], ["yesterday / last week", "passé (A2.2, bientôt !)", "→ la suite du cours."]],
    examples: [["He plays tennis every Sunday.", "Il joue au tennis tous les dimanches."], ["He is playing tennis now.", "Il joue au tennis en ce moment."]],
    qs: [["“Tomorrow I ___ visit my aunt.”", ["'m going to", "visit am", "am visit"], 0, "Demain → going to."], ["“She ___ TV every evening.”", ["watches", "is watching", "watching"], 0, "every evening → présent simple."]] },
];

export const READING_A20 = [
  { who: "Lina", text: "Hi! I'm Lina. I live in Lyon and I work in a bank. Every day I get up at seven and I walk to work. Today is different: I'm working at home because the bus is on strike. Tomorrow I'm going to visit my sister in Paris. She has got two children.",
    fr: "Lina habite à Lyon et travaille dans une banque. D'habitude elle va au travail à pied. Aujourd'hui elle travaille chez elle. Demain elle va voir sa sœur à Paris.",
    qs: [["How does Lina usually go to work?", ["She walks", "She takes the bus", "She drives"], 0, "She walks to work."], ["What is she going to do tomorrow?", ["Visit her sister", "Work at home", "Go to the bank"], 0, "Going to visit her sister."]] },
  { who: "Omar", text: "I'm Omar and I'm a student. I study English and I like music. I don't watch TV in the evening. Right now I'm waiting for the train to Oxford. I'd like to find a seat near the window. I'm going to arrive at ten.",
    fr: "Omar est étudiant. Il attend le train pour Oxford. Il voudrait une place près de la fenêtre. Il va arriver à dix heures.",
    qs: [["What is Omar doing now?", ["Waiting for a train", "Watching TV", "Studying"], 0, "He's waiting for the train."], ["What would he like?", ["A seat near the window", "A ticket", "A coffee"], 0, "He'd like a seat near the window."]] },
  { who: "Sara", text: "My name is Sara. I have got a brother and a sister. My brother lives in London and my sister works in Madrid. There are four people in my family. At the moment I'm cooking dinner. I know the recipe by heart, so it's easy.",
    fr: "Sara a un frère et une sœur. En ce moment elle prépare le dîner. Elle connaît la recette par cœur.",
    qs: [["How many people are there in her family?", ["Four", "Two", "Six"], 0, "There are four people."], ["What is Sara doing at the moment?", ["Cooking dinner", "Working in Madrid", "Visiting London"], 0, "She's cooking dinner."]] },
  { who: "Ben", text: "I'm Ben. I play football every Saturday and I never miss a game. This week I'm not playing because I'm ill. I'm staying in bed and I'm reading a book. Next week I'm going to play again. I want to score a goal!",
    fr: "Ben joue au football tous les samedis. Cette semaine il est malade et il lit. La semaine prochaine il va rejouer.",
    qs: [["When does Ben usually play football?", ["Every Saturday", "Every day", "Next week"], 0, "Every Saturday."], ["Why isn't he playing this week?", ["He is ill", "He is busy", "He is on holiday"], 0, "He's ill."]] },
];

export const LISTENING_A20 = [
  { title: "A normal day", text: "I get up at seven every day. I have breakfast at half past seven and I go to school by bus. I never eat lunch at home.",
    qs: [["What time does the speaker get up?", ["Seven", "Six", "Eight"], 0, "At seven."], ["How does the speaker go to school?", ["By bus", "On foot", "By car"], 0, "By bus."]] },
  { title: "On the phone", text: "Hello, Anna. What are you doing? I'm waiting for the bus at the moment. Are you going to be late? No, I'm going to arrive at nine.",
    qs: [["What is Anna doing?", ["Waiting for the bus", "Cooking", "Working"], 0, "She's waiting for the bus."], ["When is she going to arrive?", ["At nine", "At eight", "At ten"], 0, "At nine."]] },
  { title: "Questions", text: "Does she work in London? No, she doesn't. She works in Oxford. Is she working today? Yes, she is. She's working at home.",
    qs: [["Where does she work?", ["In Oxford", "In London", "At home only"], 0, "In Oxford."], ["Is she working today?", ["Yes, at home", "No, she is ill", "No, she is on holiday"], 0, "Yes, she is working at home."]] },
  { title: "At the café", text: "Good morning. Would you like a coffee or a tea? I'd like a tea, please. Are you going to have a sandwich too? Yes, I'd like a cheese sandwich.",
    qs: [["What does the customer order to drink?", ["A tea", "A coffee", "Water"], 0, "A tea."], ["What sandwich does the customer choose?", ["Cheese", "Ham", "Chicken"], 0, "A cheese sandwich."]] },
];

export const EXERCISES_A20 = [
  { title: "Vocabulaire — Les verbes de base", help: "Choisis le sens correct.",
    qs: [["get up", ["se lever", "se coucher", "se laver"], 0, "Get up."], ["wait", ["attendre", "arriver", "partir"], 0, "Wait."], ["leave", ["partir", "rester", "arriver"], 0, "Leave."], ["book", ["réserver", "acheter", "payer"], 0, "Book."], ["listen", ["écouter", "regarder", "lire"], 0, "Listen."], ["stay", ["rester", "tourner", "traverser"], 0, "Stay."]] },
  { title: "Présent simple", help: "Habitudes, faits, négation et question.",
    qs: [["She ___ in a bank.", ["works", "work", "working"], 0, "she → works."], ["I ___ coffee every morning.", ["drink", "drinks", "am drinking"], 0, "Habitude."], ["He ___ eat meat.", ["doesn't", "don't", "isn't"], 0, "he → doesn't."], ["___ you live in Paris?", ["Do", "Does", "Are"], 0, "you → Do."], ["The train ___ at nine.", ["leaves", "leave", "is leave"], 0, "it → leaves."]] },
  { title: "Présent continu", help: "Am / is / are + -ing.",
    qs: [["I ___ a letter now.", ["am writing", "write", "writes"], 0, "Maintenant."], ["They ___ for the bus.", ["are waiting", "is waiting", "waits"], 0, "they → are."], ["She ___ cooking. (négatif)", ["isn't", "doesn't", "don't"], 0, "isn't + -ing."], ["What ___ you doing?", ["are", "do", "does"], 0, "are + -ing."], ["Shh! The baby ___.", ["is sleeping", "sleeps", "sleep"], 0, "Maintenant."]] },
  { title: "Going to et would like", help: "Projets et demandes polies.",
    qs: [["I ___ going to buy a ticket.", ["am", "is", "do"], 0, "I am going to."], ["She ___ going to leave. (négatif)", ["isn't", "doesn't", "don't"], 0, "isn't going to."], ["___ you going to stay?", ["Are", "Do", "Does"], 0, "Are you going to."], ["I ___ a room, please.", ["'d like", "like to", "am like"], 0, "I'd like."], ["Would you like ___ tea?", ["some", "a", "an"], 0, "some tea."]] },
  { title: "Be et have got", help: "Révision des bases.",
    qs: [["He ___ twenty years old.", ["is", "has", "have"], 0, "Âge → be."], ["She ___ got a sister.", ["has", "have", "is"], 0, "she → has got."], ["They ___ students.", ["are", "is", "have"], 0, "they → are."], ["___ there a park near here?", ["Is", "Are", "Does"], 0, "a park → Is there."], ["I ___ got a car. (négatif)", ["haven't", "hasn't", "don't"], 0, "I → haven't got."]] },
  { title: "Choisir le bon temps", help: "Habitude, maintenant ou projet ?",
    qs: [["Every day I ___ to work.", ["walk", "am walking", "am going to walk"], 0, "Every day → simple."], ["Right now I ___ to work.", ["am walking", "walk", "walks"], 0, "Right now → continu."], ["Tomorrow I ___ walk to work.", ["am going to", "am walk", "walking"], 0, "Tomorrow → going to."], ["I ___ the answer. (know)", ["know", "am knowing", "knows"], 0, "know : pas de -ing."]] },
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
