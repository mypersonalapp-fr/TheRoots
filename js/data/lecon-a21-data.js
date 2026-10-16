// The Roots — A2.1 « Daily Routine (in depth) » : contenu texte complet. Mêmes formats qu'A1.x.
// Notion : Present Simple (habitudes) vs Present Continuous (maintenant / temporaire). À relire par un natif.
// Images à fournir : lesson/scene-a21-*.webp et city/a21-m1..m6.webp.
import { balanceAll } from "./balance.js";
const names = (a) => a.map((n) => ({ v: n, label: n }));

export const VOCAB_A21 = [
  { kind: "greetings", title: "Décrire sa journée", icon: "📅",
    tip: "Pour une habitude : “I get up at seven every day.” Pour ce qui se passe en ce moment : “I'm getting dressed right now.” Deux temps, deux situations.",
    examples: [["I get up at seven every day.", "Je me lève à sept heures tous les jours."], ["I'm having breakfast right now.", "Je suis en train de prendre mon petit-déjeuner."], ["What do you usually do after work?", "Que fais-tu d'habitude après le travail ?"]],
    practice: "Écoute et répète la phrase.", say: "I usually get up at seven, but today I'm getting up late." },
  { kind: "words", title: "Le matin", icon: "🌅", scene: ["scene-a21-morning", "Une famille qui se réveille et se prépare"],
    words: [["wake up", "se réveiller"], ["get up", "se lever"], ["get dressed", "s'habiller"], ["brush my teeth", "me brosser les dents"], ["have a shower", "prendre une douche"], ["have breakfast", "prendre le petit-déjeuner"]],
    tip: "“Wake up” = ouvrir les yeux ; “get up” = quitter le lit. On dit “have breakfast”, “have a shower” (pas “take” en anglais britannique).",
    examples: [["I wake up at six but I get up at half past six.", "Je me réveille à six heures mais me lève à six heures et demie."], ["She has a shower before breakfast.", "Elle prend une douche avant le petit-déjeuner."]],
    q: ["“Get dressed” veut dire…", ["s'habiller", "se lever", "se doucher"], 0] },
  { kind: "words", title: "Aller au travail ou à l'école", icon: "🚌", scene: ["scene-a21-commute", "Des gens qui prennent le bus et le métro à l'heure de pointe"],
    words: [["commute", "faire le trajet domicile-travail"], ["catch the bus", "prendre le bus"], ["traffic", "circulation"], ["be late", "être en retard"], ["be on time", "être à l'heure"], ["arrive", "arriver"]],
    tip: "“Commute” est à la fois un verbe (je fais le trajet) et un nom (a long commute = un long trajet).",
    examples: [["My commute takes forty minutes.", "Mon trajet dure quarante minutes."], ["He is never late for school.", "Il n'est jamais en retard à l'école."]],
    q: ["“Traffic” veut dire…", ["circulation", "retard", "arrivée"], 0] },
  { kind: "words", title: "Pendant la journée", icon: "🕛", scene: ["scene-a21-day", "Une personne au bureau qui déjeune, puis fait des courses"],
    words: [["have a break", "faire une pause"], ["have lunch", "déjeuner"], ["run errands", "faire des courses / démarches"], ["do the shopping", "faire les courses"], ["meet a friend", "retrouver un ami"], ["finish work", "finir le travail"]],
    tip: "“Run errands” = faire de petites tâches à l'extérieur (poste, pharmacie, banque…).",
    examples: [["I have a break at eleven.", "Je fais une pause à onze heures."], ["On Saturdays I run errands.", "Le samedi je fais mes démarches."]],
    q: ["“Run errands” veut dire…", ["faire des démarches", "courir vite", "faire du sport"], 0] },
  { kind: "words", title: "Le soir", icon: "🌙", scene: ["scene-a21-evening", "Un salon avec un dîner, la télé et un livre"],
    words: [["cook dinner", "préparer le dîner"], ["do the housework", "faire le ménage"], ["relax", "se détendre"], ["watch TV", "regarder la télé"], ["check my emails", "vérifier mes e-mails"], ["go to bed", "aller se coucher"]],
    tip: "“Go to bed” = aller se coucher. “Go to sleep” = s'endormir. Ce n'est pas la même chose.",
    examples: [["I relax on the sofa after dinner.", "Je me détends sur le canapé après le dîner."], ["He goes to bed at eleven.", "Il se couche à onze heures."]],
    q: ["“Relax” veut dire…", ["se détendre", "se coucher", "cuisiner"], 0] },
  { kind: "words", title: "La fréquence", icon: "🔁", scene: ["scene-a21-frequency", "Un calendrier avec des cases colorées selon la fréquence"],
    words: [["always", "toujours"], ["usually", "d'habitude"], ["often", "souvent"], ["sometimes", "parfois"], ["rarely", "rarement"], ["never", "jamais"]],
    tip: "Always / usually / often / sometimes / rarely / never se placent AVANT le verbe : “I usually walk.” Mais APRÈS “be” : “I am always tired.”",
    examples: [["She is always on time.", "Elle est toujours à l'heure."], ["We rarely eat out.", "Nous mangeons rarement dehors."]],
    q: ["“Rarely” veut dire…", ["rarement", "souvent", "toujours"], 0] },
  { kind: "words", title: "Maintenant ou d'habitude ?", icon: "⏱️", scene: ["scene-a21-now", "Une horloge, un calendrier et une personne qui travaille"],
    words: [["right now", "en ce moment précis"], ["at the moment", "en ce moment"], ["today", "aujourd'hui"], ["this week", "cette semaine"], ["every day", "tous les jours"], ["on Mondays", "le lundi"]],
    tip: "Right now / at the moment / today / this week → souvent Present Continuous. Every day / on Mondays → Present Simple.",
    examples: [["I'm working from home this week.", "Je télétravaille cette semaine."], ["I work in the office on Mondays.", "Je travaille au bureau le lundi."]],
    q: ["“Every day” va avec…", ["Present Simple", "Present Continuous", "Past Simple"], 0] },
];

export const GRAMMAR_A21 = [
  { title: "Present Simple : les habitudes", icon: "🔁",
    table: [["I get up at seven.", "Je me lève à sept heures.", "habitude"], ["She works in a bank.", "Elle travaille dans une banque.", "he / she / it → -s"], ["He watches TV.", "Il regarde la télé.", "watch → watches"], ["The train leaves at 8am.", "Le train part à 8 h.", "horaire fixe"]],
    examples: [["I walk to work every day.", "Je vais au travail à pied tous les jours."], ["Water boils at 100 degrees.", "L'eau bout à 100 degrés."]],
    qs: [["She ___ to school by bus.", ["goes", "go", "going"], 0, "she → goes."], ["He ___ TV every evening.", ["watches", "watch", "watchs"], 0, "watch → watches."]] },
  { title: "Les adverbes de fréquence", icon: "📊",
    table: [["always (100 %)", "toujours", "I always have breakfast."], ["usually / often", "d'habitude / souvent", "She usually walks."], ["sometimes", "parfois", "We sometimes eat out."], ["rarely / never", "rarement / jamais", "He never runs."]],
    examples: [["I am always tired on Mondays.", "Je suis toujours fatigué le lundi."], ["They often go to the cinema.", "Ils vont souvent au cinéma."]],
    qs: [["I ___ eat meat. (jamais)", ["never", "ever", "none"], 0, "never = jamais."], ["She is ___ late. (rarement)", ["rarely", "rare", "rareful"], 0, "Après be : rarely."]] },
  { title: "Present Continuous : maintenant", icon: "⏳",
    table: [["I am reading.", "Je suis en train de lire.", "am + -ing"], ["She is cooking now.", "Elle cuisine en ce moment.", "is + -ing"], ["They are waiting.", "Ils attendent.", "are + -ing"], ["He is running.", "Il court.", "run → running"]],
    examples: [["I'm having lunch right now.", "Je déjeune en ce moment."], ["We're staying with friends this week.", "Nous logeons chez des amis cette semaine."]],
    qs: [["Look! It ___ raining.", ["is", "are", "does"], 0, "it → is."], ["I am ___ a letter. (write)", ["writing", "writeing", "write"], 0, "write → writing."]] },
  { title: "Simple ou Continuous : comment choisir ?", icon: "⚖️",
    table: [["every day, always, usually", "Present Simple", "habitude"], ["right now, at the moment, today", "Present Continuous", "en cours"], ["I live in Paris.", "Present Simple", "situation stable"], ["I'm living with a friend this month.", "Present Continuous", "situation temporaire"]],
    examples: [["I usually drink tea, but today I'm drinking coffee.", "D'habitude je bois du thé, mais aujourd'hui je bois du café."], ["She works in a shop. She is working today.", "Elle travaille dans un magasin. Elle travaille aujourd'hui."]],
    qs: [["I ___ a shower every morning.", ["have", "am having", "having"], 0, "every morning → Present Simple."], ["Be quiet! The baby ___.", ["is sleeping", "sleeps", "sleep"], 0, "Maintenant → Continuous."]] },
  { title: "Questions et négations", icon: "❓",
    table: [["Do you get up early?", "Tu te lèves tôt ?", "Do / Does + base"], ["I don't work on Sundays.", "Je ne travaille pas le dimanche.", "don't / doesn't"], ["Are you working now?", "Tu travailles en ce moment ?", "Am / Is / Are + sujet + -ing"], ["She isn't cooking.", "Elle ne cuisine pas.", "isn't + -ing"]],
    examples: [["What do you usually do on Saturday?", "Que fais-tu d'habitude le samedi ?"], ["What are you doing now?", "Que fais-tu en ce moment ?"]],
    qs: [["___ she work on Saturdays?", ["Does", "Is", "Do"], 0, "Habitude + she → Does."], ["___ you reading now?", ["Are", "Do", "Does"], 0, "Maintenant → Are."]] },
  { title: "Les verbes qu'on met rarement en -ing", icon: "🧠",
    table: [["I know the answer.", "Je connais la réponse.", "pas “I am knowing”"], ["She wants a coffee.", "Elle veut un café.", "pas “is wanting”"], ["I like this song.", "J'aime cette chanson.", "pas “am liking”"], ["He has a car.", "Il a une voiture.", "have = posséder → Simple"]],
    examples: [["I need help right now.", "J'ai besoin d'aide en ce moment."], ["We love this place.", "Nous adorons cet endroit."]],
    qs: [["I ___ the answer. (know)", ["know", "am knowing", "knowing"], 0, "know : pas de -ing."], ["She ___ a new phone. (want)", ["wants", "is wanting", "want"], 0, "want : Simple."]] },
];

export const READING_A21 = [
  { who: "Marta", text: "Hi! I'm Marta and I work in a hospital. I usually get up at six and I catch the bus at seven. My commute takes forty minutes. I always have a break at noon and I have lunch with my colleagues. Today is different: I'm working from home because my bus company is on strike, so I'm writing this message in my kitchen.",
    fr: "Marta travaille à l'hôpital. D'habitude elle se lève à six heures et prend le bus à sept heures. Aujourd'hui elle télétravaille à cause d'une grève.",
    qs: [["How long is Marta's commute?", ["Forty minutes", "Four minutes", "One hour"], 0, "Her commute takes forty minutes."], ["Why is she working from home today?", ["The buses are on strike", "She is ill", "She is on holiday"], 0, "Her bus company is on strike."]] },
  { who: "Tom", text: "I'm Tom and I'm a student. I usually study in the library, but this week I'm studying at home because the library is closed. Every morning I wake up at eight, I have a quick breakfast and I start work at nine. I rarely go out on weekdays. At the moment I'm preparing for my exams, so I never watch TV before ten at night.",
    fr: "Tom est étudiant. D'habitude il étudie à la bibliothèque, mais cette semaine il étudie chez lui. Il prépare ses examens.",
    qs: [["Where does Tom usually study?", ["In the library", "At home", "At school"], 0, "Usually: in the library."], ["Why is he studying at home this week?", ["The library is closed", "He is lazy", "It is cold"], 0, "The library is closed."]] },
  { who: "Anna", text: "My name is Anna and I'm a nurse. On Mondays and Tuesdays I work at night, so I sleep in the day. I usually cook dinner for my children at six, then I leave for work at eight. Right now it is three o'clock in the afternoon and I'm running errands: I'm buying medicine at the pharmacy and I'm posting a parcel.",
    fr: "Anna est infirmière. Le lundi et le mardi elle travaille de nuit. En ce moment, à 15 h, elle fait des courses.",
    qs: [["When does Anna work at night?", ["On Mondays and Tuesdays", "Every day", "At weekends"], 0, "Mondays and Tuesdays."], ["What is she doing right now?", ["Running errands", "Cooking dinner", "Sleeping"], 0, "She's running errands."]] },
  { who: "Omar", text: "I'm Omar. I'm a taxi driver and I often finish work late. I usually have dinner at ten, and then I relax with a book. Tonight is special: it's my daughter's birthday, so I'm not working. We're sitting in the garden, my wife is cooking and the children are playing football. I'm feeling very happy.",
    fr: "Omar est chauffeur de taxi. D'habitude il dîne à vingt-deux heures. Ce soir c'est l'anniversaire de sa fille, il ne travaille pas.",
    qs: [["When does Omar usually have dinner?", ["At ten", "At six", "At noon"], 0, "At ten."], ["Why is he not working tonight?", ["It is his daughter's birthday", "He is ill", "He is on holiday"], 0, "His daughter's birthday."]] },
  { who: "Lucy", text: "Hello! I'm Lucy and I live in a small flat in London. I don't have a car, so I cycle to work every day. It usually takes me twenty minutes, but today it's raining, so I'm taking the bus. I'm sitting next to the window and I'm listening to music. I'm never late because I always leave home early.",
    fr: "Lucy habite à Londres et va au travail à vélo. Aujourd'hui il pleut, alors elle prend le bus.",
    qs: [["How does Lucy usually go to work?", ["By bike", "By bus", "By car"], 0, "She cycles every day."], ["Why is she on the bus today?", ["It is raining", "Her bike is broken", "She is late"], 0, "It's raining."]] },
];

export const LISTENING_A21 = [
  { title: "Every day", text: "I get up at seven every day. I have a shower and I have breakfast at half past seven. Then I catch the bus to work. I arrive at nine.",
    qs: [["What time does the speaker get up?", ["Seven", "Six", "Nine"], 0, "At seven."], ["What does the speaker do at half past seven?", ["Has breakfast", "Catches the bus", "Arrives at work"], 0, "Breakfast."]] },
  { title: "Right now", text: "Hello, Sam. What are you doing? I'm cooking dinner at the moment. Can I call you back in ten minutes? Of course.",
    qs: [["What is the speaker doing now?", ["Cooking dinner", "Watching TV", "Sleeping"], 0, "Cooking dinner."], ["When will they call back?", ["In ten minutes", "Tomorrow", "In an hour"], 0, "In ten minutes."]] },
  { title: "Usually and today", text: "I usually walk to school, but today it's raining, so I'm taking the bus. It's full of people. I'm standing near the door.",
    qs: [["How does the speaker usually go to school?", ["On foot", "By bus", "By bike"], 0, "He walks."], ["Why is he on the bus today?", ["It is raining", "He is late", "He is tired"], 0, "It's raining."]] },
  { title: "Never late", text: "Do you ever arrive late? No, never. I always leave home at eight, and I'm always at my desk at nine. And you? I'm often late. The traffic is terrible.",
    qs: [["Does the first speaker arrive late?", ["Never", "Often", "Sometimes"], 0, "Never."], ["Why is the second speaker often late?", ["The traffic", "The bus", "The weather"], 0, "The traffic."]] },
  { title: "This week", text: "My sister usually works in an office, but this week she's working at home. She's using my laptop because hers is broken. I'm sitting next to her and I'm reading.",
    qs: [["Where does the sister usually work?", ["In an office", "At home", "In a shop"], 0, "In an office."], ["Why is she using the speaker's laptop?", ["Hers is broken", "It is bigger", "It is faster"], 0, "Her laptop is broken."]] },
  { title: "An evening", text: "I usually relax on the sofa after dinner. I watch TV or I read a book. Tonight I'm tidying the flat because my friends are coming at eight.",
    qs: [["What does the speaker usually do after dinner?", ["Relaxes", "Cleans", "Goes out"], 0, "Relaxes."], ["Why is the speaker tidying tonight?", ["Friends are coming", "A party is over", "The flat is dirty"], 0, "Friends are coming."]] },
  { title: "Weekend", text: "At weekends I don't get up early. I sleep until ten and then I have a long breakfast. Today is Saturday and I'm having breakfast in bed. It's great!",
    qs: [["What time does the speaker sleep until at weekends?", ["Ten", "Seven", "Noon"], 0, "Until ten."], ["Where is the speaker having breakfast today?", ["In bed", "In a café", "In the garden"], 0, "In bed."]] },
  { title: "On the phone", text: "Hi Mum, I'm at the supermarket. I'm buying milk and bread. Do you want anything else? Yes, please, some eggs. OK, see you soon.",
    qs: [["Where is the speaker?", ["At the supermarket", "At home", "At school"], 0, "Supermarket."], ["What does Mum want?", ["Eggs", "Milk", "Bread"], 0, "Some eggs."]] },
];

export const EXERCISES_A21 = [
  { title: "Vocabulaire — La routine", help: "Choisis le sens correct.",
    qs: [["get dressed", ["s'habiller", "se lever", "se doucher"], 0, "Get dressed."], ["commute", ["trajet domicile-travail", "retard", "pause"], 0, "Commute."], ["run errands", ["faire des démarches", "courir", "faire du sport"], 0, "Run errands."], ["rarely", ["rarement", "souvent", "toujours"], 0, "Rarely."], ["go to bed", ["aller se coucher", "s'endormir", "se réveiller"], 0, "Go to bed."], ["right now", ["en ce moment précis", "tous les jours", "jamais"], 0, "Right now."]] },
  { title: "Present Simple", help: "Habitudes et horaires.",
    qs: [["She ___ at seven every day.", ["gets up", "get up", "is getting up"], 0, "Every day → Simple."], ["I ___ coffee every morning.", ["drink", "am drinking", "drinks"], 0, "Habitude."], ["He ___ to work by train.", ["goes", "go", "going"], 0, "he → goes."], ["The shop ___ at nine.", ["opens", "is opening", "open"], 0, "Horaire fixe."], ["We ___ lunch at noon.", ["have", "has", "are having"], 0, "Habitude."]] },
  { title: "Present Continuous", help: "En ce moment.",
    qs: [["Look! The children ___.", ["are playing", "play", "plays"], 0, "Look! → maintenant."], ["I ___ a book right now.", ["am reading", "read", "reads"], 0, "Right now."], ["She ___ lunch at the moment.", ["is having", "has", "have"], 0, "At the moment."], ["They ___ for the bus.", ["are waiting", "waits", "wait"], 0, "En cours."], ["He ___ on the phone.", ["is talking", "talk", "talks"], 0, "En cours."]] },
  { title: "Simple ou Continuous ?", help: "Choisis le bon temps.",
    qs: [["I usually ___ tea, but today I'm drinking coffee.", ["drink", "am drinking", "drinks"], 0, "Usually → Simple."], ["Shh! She ___.", ["is sleeping", "sleeps", "sleep"], 0, "Maintenant."], ["He ___ in a bank. (métier)", ["works", "is working", "work"], 0, "Situation stable."], ["This week I ___ at home.", ["am working", "work", "works"], 0, "Cette semaine."], ["Water ___ at 100 degrees.", ["boils", "is boiling", "boil"], 0, "Vérité générale."]] },
  { title: "Fréquence", help: "Place de always, never…",
    qs: [["I ___ late. (jamais)", ["am never", "never am", "am ever"], 0, "Après be : never."], ["She ___ goes to the gym. (souvent)", ["often", "ever", "much"], 0, "Often + verbe."], ["We ___ eat out. (rarement)", ["rarely", "rare", "rarelys"], 0, "Rarely."], ["They are ___ happy. (toujours)", ["always", "ever", "never"], 0, "Always."], ["I ___ watch TV on Sundays. (parfois)", ["sometimes", "sometime", "some times"], 0, "Sometimes."]] },
  { title: "Mise en situation", help: "Que dire ?",
    qs: [["Friend calls. You are cooking. You say:", ["I'm cooking now.", "I cook now.", "I cooking."], 0, "En cours."], ["You describe your habit:", ["I get up at six.", "I am getting up at six every day.", "I getting up."], 0, "Habitude."], ["You ask about someone's routine:", ["What do you usually do?", "What are you usually doing?", "What you do usually?"], 0, "Usually → Simple."], ["You ask what he is doing now:", ["What are you doing?", "What do you do?", "What you doing?"], 0, "Maintenant."], ["Say you never watch TV:", ["I never watch TV.", "I watch never TV.", "I am never watching TV."], 0, "Never + verbe."]] },
];

export const EXPRESSION_A21 = [
  { title: "Ma journée type", icon: "📅",
    prompts: ["Dis à quelle heure tu te lèves.", "Dis comment tu vas au travail ou à l'école.", "Dis ce que tu fais le soir.", "Dis une chose que tu ne fais jamais."],
    model: "I usually get up at seven. I go to work by bus. In the evening I cook dinner and I relax. I never watch TV before ten.",
    checks: [["L'heure du réveil", "\\bi (usually |always |often )?(get up|wake up)\\b.*\\b(at )?\\w+"], ["Le trajet", "\\bi (usually |always |often )?(go|walk|cycle|drive|take|catch)\\b.*\\b(to|by)\\b"], ["Le soir", "\\bi (usually |often |always )?(cook|relax|watch|read|have dinner|go to bed)\\b"], ["Jamais", "\\bi (never|rarely)\\s+\\w+"]] },
  { title: "Aujourd'hui, c'est différent", icon: "🔄",
    prompts: ["Dis ce que tu fais d'habitude.", "Dis ce que tu fais aujourd'hui.", "Dis où tu es en ce moment.", "Dis pourquoi c'est différent."],
    model: "I usually work in the office. Today I'm working from home. I'm sitting in my kitchen. It's different because the bus is on strike.",
    checks: [["Ce que tu fais d'habitude", "\\bi usually\\s+\\w+"], ["Aujourd'hui", "\\b(today|this week|at the moment|right now)\\b.*\\b(i'm|i am)\\s+\\w+ing|\\b(i'm|i am)\\s+\\w+ing.*\\b(today|this week|at the moment|right now)\\b"], ["Où tu es", "\\b(i'm|i am)\\s+(sitting|standing|working|staying|living)\\b|\\bi'm\\s+(at|in)\\b"], ["Pourquoi", "\\bbecause\\b|\\bso\\b"]] },
];

export const TEST_TEXTS_A21 = [
  { title: "Marta", text: "I work in a hospital and I usually get up at six. I catch the bus at seven and my commute takes forty minutes. I always have lunch with my colleagues at noon. Today is different: I'm working from home because my bus company is on strike, so I'm writing from my kitchen.", q: [["What time does she usually get up?", ["Six", "Seven", "Noon"], 0], ["How long is her commute?", ["Forty minutes", "Four minutes", "One hour"], 0], ["Why is she at home today?", ["The buses are on strike", "She is ill", "It is a holiday"], 0]] },
  { title: "Tom", text: "I'm a student and I usually study in the library. This week I'm studying at home because the library is closed. Every morning I wake up at eight, I have a quick breakfast and I start work at nine. I rarely go out on weekdays and I never watch TV before ten at night.", q: [["Where does he usually study?", ["In the library", "At home", "At a café"], 0], ["When does he wake up?", ["At eight", "At nine", "At ten"], 0], ["Does he watch TV before ten?", ["No, never", "Yes, always", "Sometimes"], 0]] },
  { title: "Anna", text: "I'm a nurse. On Mondays and Tuesdays I work at night, so I sleep in the day. I usually cook dinner for my children at six, then I leave for work at eight. Right now it's three in the afternoon and I'm running errands: I'm buying medicine at the pharmacy.", q: [["When does she work at night?", ["Monday and Tuesday", "Every day", "At weekends"], 0], ["What time does she usually cook dinner?", ["Six", "Eight", "Three"], 0], ["What is she doing now?", ["Running errands", "Sleeping", "Cooking"], 0]] },
  { title: "Omar", text: "I'm a taxi driver and I often finish work late. I usually have dinner at ten and then I relax with a book. Tonight is special: it's my daughter's birthday, so I'm not working. We're sitting in the garden, my wife is cooking and the children are playing football.", q: [["What is Omar's job?", ["Taxi driver", "Teacher", "Nurse"], 0], ["Why is tonight special?", ["It's his daughter's birthday", "It's his birthday", "He is on holiday"], 0], ["What are the children doing?", ["Playing football", "Cooking", "Reading"], 0]] },
  { title: "Lucy", text: "I live in a small flat in London. I don't have a car, so I cycle to work every day. It usually takes me twenty minutes, but today it's raining, so I'm taking the bus. I'm sitting next to the window and I'm listening to music. I'm never late because I always leave home early.", q: [["How does she usually go to work?", ["By bike", "By bus", "By car"], 0], ["Why is she on the bus today?", ["It is raining", "She is late", "Her bike is broken"], 0], ["What is she doing on the bus?", ["Listening to music", "Reading", "Sleeping"], 0]] },
];

export const TEST_AUDIOS_A21 = [
  { script: "I get up at seven every day. I have a shower and I have breakfast at half past seven. Then I catch the bus to work and I arrive at nine.", q: [["What time does the speaker have breakfast?", ["Half past seven", "Seven", "Nine"], 0], ["What time does the speaker arrive at work?", ["Nine", "Seven", "Half past seven"], 0]] },
  { script: "Hello, Sam. What are you doing? I'm cooking dinner at the moment. Can I call you back in ten minutes? Of course.", q: [["What is Sam doing?", ["Cooking dinner", "Watching TV", "Sleeping"], 0], ["When will the caller phone again?", ["In ten minutes", "Tomorrow", "In an hour"], 0]] },
  { script: "I usually walk to school, but today it's raining, so I'm taking the bus. It's full of people and I'm standing near the door.", q: [["How does the speaker usually go to school?", ["On foot", "By bus", "By car"], 0], ["Where is the speaker standing?", ["Near the door", "At the back", "Outside"], 0]] },
  { script: "My sister usually works in an office, but this week she's working at home. She's using my laptop because hers is broken.", q: [["Where is the sister working this week?", ["At home", "In an office", "In a shop"], 0], ["Why is she using the laptop?", ["Hers is broken", "It is new", "It is cheap"], 0]] },
  { script: "At weekends I don't get up early. I sleep until ten and then I have a long breakfast. Today is Saturday and I'm having breakfast in bed.", q: [["What time does the speaker get up at weekends?", ["About ten", "Seven", "Six"], 0], ["Where is the speaker having breakfast today?", ["In bed", "In the garden", "In a café"], 0]] },
];

export const TEST_GRAMMAR_A21 = [
  ["She ___ to school by bus every day.", ["goes", "go", "is going"], 0], ["I ___ coffee every morning.", ["drink", "am drinking", "drinking"], 0], ["Look! It ___ raining.", ["is", "does", "has"], 0], ["I'm ___ a letter right now. (write)", ["writing", "writeing", "write"], 0],
  ["He ___ TV in the evening. (watch)", ["watches", "watch", "watchs"], 0], ["I ___ late. (jamais)", ["am never", "never am", "do never"], 0], ["___ she work on Saturdays?", ["Does", "Is", "Do"], 0], ["___ you reading now?", ["Are", "Do", "Does"], 0],
  ["Shh! The baby ___.", ["is sleeping", "sleeps", "sleep"], 0], ["I usually ___ tea, but today I'm drinking coffee.", ["drink", "am drinking", "drinks"], 0], ["I ___ the answer. (know)", ["know", "am knowing", "knowing"], 0], ["She ___ a new phone. (want)", ["wants", "is wanting", "want"], 0],
  ["The train ___ at eight.", ["leaves", "is leaving", "leave"], 0], ["They ___ for the bus now.", ["are waiting", "wait", "waits"], 0], ["We ___ eat out. (rarement)", ["rarely", "rare", "rarelys"], 0], ["What ___ you usually do on Saturday?", ["do", "are", "does"], 0],
  ["What ___ you doing now?", ["are", "do", "does"], 0], ["I ___ work on Sundays. (négatif)", ["don't", "doesn't", "am not"], 0], ["She ___ cooking at the moment. (négatif)", ["isn't", "doesn't", "don't"], 0], ["This week I ___ at home.", ["am working", "work", "works"], 0],
  ["Water ___ at 100 degrees.", ["boils", "is boiling", "boil"], 0], ["He ___ in a bank. (métier)", ["works", "is working", "work"], 0], ["“Commute” means…", ["trajet domicile-travail", "retard", "pause"], 0], ["“Get dressed” means…", ["s'habiller", "se lever", "se doucher"], 0],
  ["“Run errands” means…", ["faire des démarches", "courir", "faire du sport"], 0], ["We ___ lunch at noon every day.", ["have", "are having", "has"], 0], ["I ___ to music at the moment.", ["am listening", "listen", "listens"], 0], ["She is ___ on time. (toujours)", ["always", "ever", "never"], 0],
  ["He ___ go to the gym. (souvent)", ["often", "ever", "much"], 0], ["I'm ___ with a friend this month.", ["staying", "stay", "stays"], 0],
];

export const MISSIONS_A21 = [
  { id: "m1", ic: "⏱️", title: "Habitude ou maintenant ?", sub: "Écoute et choisis le bon temps.", hero: "city/a21-m1" },
  { id: "m2", ic: "📅", title: "Ma journée", sub: "Écoute et trouve l'activité.", hero: "city/a21-m2" },
  { id: "m3", ic: "💬", title: "Construis la phrase", sub: "Remets les mots dans l'ordre.", hero: "city/a21-m3" },
  { id: "m4", ic: "⚖️", title: "Simple ou Continuous ?", sub: "Choisis la bonne forme du verbe.", hero: "city/a21-m4" },
  { id: "m5", ic: "🔁", title: "Combien de fois ?", sub: "Choisis le bon adverbe de fréquence.", hero: "city/a21-m5" },
  { id: "m6", ic: "🌟", title: "Une journée différente", sub: "Compare ta routine et aujourd'hui.", hero: "city/a21-m6" },
];

const pick = (say, label, a, o) => ({ say, groups: [{ label, answer: a, opts: names(o) }] });
export const DATA_A21 = {
  m1: [
    pick("I get up at seven every day.", "Temps", "habitude", ["habitude", "maintenant"]),
    pick("I'm having a shower right now.", "Temps", "maintenant", ["maintenant", "habitude"]),
    pick("She usually takes the bus.", "Temps", "habitude", ["habitude", "maintenant"]),
    pick("Look! He is running.", "Temps", "maintenant", ["maintenant", "habitude"]),
    pick("They always have lunch at noon.", "Temps", "habitude", ["habitude", "maintenant"]),
  ],
  m2: [
    pick("I brush my teeth and I have a shower.", "Moment", "morning", ["morning", "evening", "lunch time", "commute"]),
    pick("I catch the bus and I listen to music.", "Moment", "commute", ["commute", "morning", "evening", "lunch time"]),
    pick("I have a sandwich with my colleagues.", "Moment", "lunch time", ["lunch time", "evening", "morning", "commute"]),
    pick("I cook dinner and I relax on the sofa.", "Moment", "evening", ["evening", "morning", "commute", "lunch time"]),
    pick("I finish work and I run errands.", "Moment", "afternoon", ["afternoon", "morning", "evening", "commute"]),
  ],
  m3: [
    { prompt: "Dis : « Je me lève à sept heures tous les jours. »", answer: ["I", "get up", "at seven", "every day", "."], bank: ["at seven", "I", "get up", "every day", "."] },
    { prompt: "Dis : « Elle prend le bus en ce moment. »", answer: ["She", "is taking", "the bus", "right now", "."], bank: ["the bus", "She", "is taking", "right now", "."] },
    { prompt: "Demande : « Que fais-tu en ce moment ? »", answer: ["What", "are", "you", "doing", "now", "?"], bank: ["doing", "you", "What", "are", "now", "?"] },
    { prompt: "Dis : « Je ne regarde jamais la télé. »", answer: ["I", "never", "watch", "TV", "."], bank: ["watch", "TV", "I", "never", "."] },
    { prompt: "Demande : « Tu travailles le samedi ? »", answer: ["Do", "you", "work", "on Saturdays", "?"], bank: ["work", "on Saturdays", "Do", "you", "?"] },
  ],
  m4: [
    pick("Every morning I ___ coffee.", "Verb", "drink", ["drink", "am drinking"]),
    pick("Shh! She ___ now.", "Verb", "is sleeping", ["is sleeping", "sleeps"]),
    pick("He ___ in a bank. (métier)", "Verb", "works", ["works", "is working"]),
    pick("This week we ___ at home.", "Verb", "are working", ["are working", "work"]),
    pick("I ___ the answer. (know)", "Verb", "know", ["know", "am knowing"]),
  ],
  m5: [
    pick("I ___ get up before six. (100 %)", "Adverb", "always", ["always", "never", "sometimes"]),
    pick("She ___ watches TV. (0 %)", "Adverb", "never", ["never", "always", "often"]),
    pick("We ___ eat out. (1 fois par mois)", "Adverb", "rarely", ["rarely", "always", "usually"]),
    pick("He ___ goes to the gym. (3 fois par semaine)", "Adverb", "often", ["often", "never", "rarely"]),
    pick("I ___ walk to work. (2 jours sur 5)", "Adverb", "sometimes", ["sometimes", "always", "never"]),
  ],
  m6: [
    { prompt: "Compare ta routine et aujourd'hui.", card: [["Usually", "bus"], ["Today", "walking"], ["Why", "sunny"]], answer: ["I usually", "take the bus.", "Today I'm", "walking", "because", "it's sunny."], bank: ["take the bus.", "I usually", "walking", "Today I'm", "because", "it's sunny.", "I am", "rainy."] },
    { prompt: "Compare sa routine et aujourd'hui.", card: [["Name", "Anna"], ["Usually", "office"], ["Today", "home"]], answer: ["Anna", "usually works", "in the office.", "Today she's", "working", "at home."], bank: ["usually works", "Anna", "in the office.", "Today she's", "working", "at home.", "work", "He"] },
  ],
};

balanceAll({ VOCAB_A21, GRAMMAR_A21, READING_A21, LISTENING_A21, EXERCISES_A21, EXPRESSION_A21, TEST_TEXTS_A21, TEST_AUDIOS_A21, TEST_GRAMMAR_A21, MISSIONS_A21, DATA_A21 });
