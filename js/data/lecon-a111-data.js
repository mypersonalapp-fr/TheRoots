// The Roots — A1.11 « Time and Weather » : contenu texte complet. Mêmes formats qu'A1.1–A1.10. À relire par un natif.
// Images à fournir : lesson/scene-a111-*.webp et city/a111-m1..m6.webp.
import { balanceAll } from "./balance.js";
const names = (a) => a.map((n) => ({ v: n, label: n }));

export const VOCAB_A111 = [
  { kind: "greetings", title: "Parler du temps", icon: "🌦️",
    tip: "Pour demander la météo : “What's the weather like?”. Réponse : “It's sunny.” (on utilise toujours “it”).",
    examples: [["What's the weather like?", "Quel temps fait-il ?"], ["It's sunny today.", "Il fait beau aujourd'hui."], ["It's raining.", "Il pleut."]],
    practice: "Écoute et répète la phrase.", say: "It's sunny and warm today." },
  { kind: "words", title: "La météo", icon: "☀️", scene: ["scene-a111-weather", "Soleil, pluie, nuages et vent dans quatre cases"],
    words: [["sunny", "ensoleillé"], ["rainy", "pluvieux"], ["cloudy", "nuageux"], ["windy", "venteux"], ["snowy", "neigeux"], ["foggy", "brumeux"]],
    tip: "Ces mots viennent des noms : sun → sunny, rain → rainy, cloud → cloudy, wind → windy.",
    examples: [["It's cloudy today.", "Il y a des nuages aujourd'hui."], ["It's windy in the evening.", "Il y a du vent le soir."]],
    q: ["“Cloudy” veut dire…", ["nuageux", "ensoleillé", "neigeux"], 0] },
  { kind: "words", title: "La température", icon: "🌡️", scene: ["scene-a111-temperature", "Un thermomètre entre un bonhomme de neige et un soleil"],
    words: [["hot", "très chaud"], ["warm", "doux / chaud"], ["cool", "frais"], ["cold", "froid"], ["degrees", "degrés"], ["freezing", "glacial"]],
    tip: "“It's twenty degrees” = Il fait vingt degrés. On parle en Celsius au Royaume-Uni et en Fahrenheit aux États-Unis.",
    examples: [["It's very hot in July.", "Il fait très chaud en juillet."], ["It's ten degrees.", "Il fait dix degrés."]],
    q: ["“Cold” veut dire…", ["froid", "chaud", "doux"], 0] },
  { kind: "words", title: "Les moments de la journée", icon: "🌅", scene: ["scene-a111-day-parts", "Le lever du soleil, midi, le soir et la nuit"],
    words: [["morning", "matin"], ["afternoon", "après-midi"], ["evening", "soir"], ["night", "nuit"], ["early", "tôt"], ["late", "tard"]],
    tip: "On dit “in the morning / afternoon / evening” mais “at night”.",
    examples: [["I wake up early.", "Je me réveille tôt."], ["We go to bed late.", "Nous nous couchons tard."]],
    q: ["“Late” veut dire…", ["tard", "tôt", "soir"], 0] },
  { kind: "words", title: "Hier, aujourd'hui, demain", icon: "📅", scene: ["scene-a111-calendar", "Un calendrier avec trois jours entourés"],
    words: [["yesterday", "hier"], ["today", "aujourd'hui"], ["tomorrow", "demain"], ["next week", "la semaine prochaine"], ["last month", "le mois dernier"], ["weekend", "week-end"]],
    tip: "“Next” = prochain, “last” = dernier : next week, last month, last year.",
    examples: [["Tomorrow is Saturday.", "Demain, c'est samedi."], ["We travel next week.", "Nous voyageons la semaine prochaine."]],
    q: ["“Yesterday” veut dire…", ["hier", "demain", "aujourd'hui"], 0] },
  { kind: "words", title: "Les saisons et les mois", icon: "🍂", scene: ["scene-a111-seasons", "Quatre arbres : printemps, été, automne, hiver"],
    words: [["spring", "printemps"], ["summer", "été"], ["autumn", "automne"], ["winter", "hiver"], ["January", "janvier"], ["December", "décembre"]],
    tip: "Les mois prennent une majuscule en anglais : January, February… Les saisons s'écrivent avec une minuscule.",
    examples: [["It snows in winter.", "Il neige en hiver."], ["My birthday is in July.", "Mon anniversaire est en juillet."]],
    q: ["“Autumn” veut dire…", ["automne", "été", "printemps"], 0] },
  { kind: "words", title: "Dire l'heure", icon: "🕒", scene: ["scene-a111-clock", "Une grande horloge et une montre"],
    words: [["o'clock", "pile (heure)"], ["half past", "et demie"], ["quarter past", "et quart"], ["quarter to", "moins le quart"], ["noon", "midi"], ["midnight", "minuit"]],
    tip: "3:00 = three o'clock. 3:30 = half past three. 3:15 = quarter past three. 3:45 = quarter to four.",
    examples: [["It's half past two.", "Il est deux heures et demie."], ["It's quarter to six.", "Il est six heures moins le quart."]],
    q: ["“Quarter past four” =", ["4h15", "4h45", "4h30"], 0] },
];

export const GRAMMAR_A111 = [
  { title: "Quelle heure est-il ?", icon: "🕒",
    table: [["What time is it?", "Quelle heure est-il ?", "question"], ["It's seven o'clock.", "Il est sept heures.", "It's + heure"], ["It's quarter past seven.", "Il est sept heures et quart.", ""], ["It's half past seven.", "Il est sept heures et demie.", ""]],
    examples: [["It's ten o'clock.", "Il est dix heures."], ["It's quarter to eight.", "Il est huit heures moins le quart."]],
    qs: [["What time ___ it?", ["is", "are", "does"], 0, "What time is it?"], ["3:30 = ___ three.", ["half past", "quarter to", "o'clock"], 0, "half past three."]] },
  { title: "It impersonnel : la météo", icon: "🌤️",
    table: [["It's sunny.", "Il fait soleil.", "It's + adjectif"], ["It's cold.", "Il fait froid.", ""], ["It's raining.", "Il pleut.", "It's + verbe-ing"], ["It's snowing.", "Il neige.", ""]],
    examples: [["It's hot today.", "Il fait chaud aujourd'hui."], ["It's raining in London.", "Il pleut à Londres."]],
    qs: [["___ cold today.", ["It's", "He's", "They're"], 0, "It's cold."], ["It's ___ now. (rain)", ["raining", "rains", "rain"], 0, "It's raining."]] },
  { title: "Questions sur la météo", icon: "❓",
    table: [["What's the weather like?", "Quel temps fait-il ?", "question générale"], ["Is it sunny?", "Fait-il beau ?", "Is it + adjectif"], ["Is it raining?", "Pleut-il ?", "Is it + verbe-ing"], ["How is the weather?", "Comment est le temps ?", ""]],
    examples: [["What's the weather like in Paris?", "Quel temps fait-il à Paris ?"], ["Is it cold in winter?", "Fait-il froid en hiver ?"]],
    qs: [["What's the ___ like?", ["weather", "whether", "time"], 0, "weather."], ["___ it raining?", ["Is", "Does", "Are"], 0, "Is it raining?"]] },
  { title: "At / on / in : le temps", icon: "📆",
    table: [["at six / at noon / at night", "à six heures / à midi / la nuit", "AT + heure"], ["on Monday / on 5th May", "le lundi / le 5 mai", "ON + jour, date"], ["in July / in winter / in 2026", "en juillet / en hiver / en 2026", "IN + mois, saison, année"], ["in the morning", "le matin", "IN + moment"]],
    examples: [["I wake up at seven.", "Je me réveille à sept heures."], ["It snows in winter.", "Il neige en hiver."]],
    qs: [["My birthday is ___ July.", ["in", "on", "at"], 0, "in July."], ["The class is ___ Tuesday.", ["on", "in", "at"], 0, "on Tuesday."]] },
  { title: "Présent simple ou continu ?", icon: "🔁",
    table: [["It rains a lot in April.", "Il pleut beaucoup en avril.", "habitude → simple"], ["It's raining now.", "Il pleut maintenant.", "en ce moment → continu"], ["always, usually, often", "toujours, d'habitude, souvent", "indices du simple"], ["now, today, at the moment", "maintenant, aujourd'hui, en ce moment", "indices du continu"]],
    examples: [["It snows in January.", "Il neige en janvier."], ["It's snowing today.", "Il neige aujourd'hui."]],
    qs: [["It ___ a lot in winter. (rain)", ["rains", "is raining", "rain"], 0, "Habitude → présent simple."], ["Look! It ___ now. (snow)", ["is snowing", "snows", "snow"], 0, "Maintenant → continu."]] },
  { title: "Hier, aujourd'hui, demain : les repères", icon: "⏳",
    table: [["yesterday", "hier", "passé : “it was cold”"], ["today / now", "aujourd'hui / maintenant", "présent"], ["tomorrow / next week", "demain / la semaine prochaine", "futur"], ["It's going to rain tomorrow.", "Il va pleuvoir demain.", "going to"]],
    examples: [["Tomorrow it's going to be sunny.", "Demain il va faire beau."], ["Next week it's going to be cold.", "La semaine prochaine, il va faire froid."]],
    qs: [["It's ___ to rain tomorrow.", ["going", "go", "goes"], 0, "going to."], ["The opposite of “yesterday” is…", ["tomorrow", "today", "last week"], 0, "tomorrow."]] },
];

export const READING_A111 = [
  { who: "Zoe", text: "Hi! I'm Zoe. Today it's sunny and warm. It's twenty-two degrees. I'm at the park with my friends. We play football. Tomorrow it's going to rain, so we are going to stay at home.",
    fr: "Zoé profite du soleil au parc ; demain il va pleuvoir.",
    qs: [["What's the weather like today?", ["Sunny and warm", "Cold and rainy", "Snowy"], 0, "Sunny and warm."], ["What about tomorrow?", ["It's going to rain", "It's going to snow", "It's going to be hot"], 0, "Rain."]] },
  { who: "Jack", text: "I'm Jack. I wake up early, at six o'clock. In winter it's very cold and dark. I have breakfast at half past six. I leave home at seven and I take the bus.",
    fr: "Jack se lève à six heures ; l'hiver, il fait froid et nuit.",
    qs: [["When does Jack wake up?", ["At six", "At seven", "At eight"], 0, "Six o'clock."], ["How is winter?", ["Cold and dark", "Hot", "Sunny"], 0, "Cold and dark."]] },
  { who: "Mia", text: "I'm Mia. In summer I love the beach. It's hot, about thirty degrees. In the evening we eat outside. In winter I stay at home and drink hot chocolate.",
    fr: "Mia aime l'été à la plage et l'hiver à la maison avec un chocolat chaud.",
    qs: [["What does she love in summer?", ["The beach", "The snow", "The school"], 0, "The beach."], ["What does she do in winter?", ["Stays home", "Goes to the beach", "Travels"], 0, "Stays home."]] },
  { who: "Leo", text: "Hello, I'm Leo. My school starts at quarter to nine. Lunch is at twelve. I finish at four. On Saturday I sleep late. I get up at ten.",
    fr: "Léo : école à 8h45, déjeuner à midi, fin à 16h ; le samedi il dort tard.",
    qs: [["When does school start?", ["Quarter to nine", "Quarter past nine", "Nine o'clock"], 0, "8:45."], ["When does he get up on Saturday?", ["At ten", "At six", "At eight"], 0, "Ten."]] },
  { who: "Rita", text: "I'm Rita. Yesterday it was cold, but today it's warm and windy. Tomorrow is Friday. Next week is a holiday, so I'm going to travel to the mountains.",
    fr: "Rita : hier froid, aujourd'hui doux et venteux ; la semaine prochaine, vacances à la montagne.",
    qs: [["What's the weather like today?", ["Warm and windy", "Cold", "Snowy"], 0, "Warm and windy."], ["What is Rita going to do next week?", ["Travel to the mountains", "Stay at school", "Go to the beach"], 0, "Mountains."]] },
];

export const LISTENING_A111 = [
  { title: "What time is it?", text: "Excuse me, what time is it? It's half past three. Thank you. The bus is at four, so we have time.",
    qs: [["What time is it?", ["Half past three", "Three o'clock", "Four o'clock"], 0, "3:30."], ["When is the bus?", ["At four", "At three", "At five"], 0, "Four."]] },
  { title: "Weather report", text: "Good morning. Today it's cloudy in the north. In the south it's sunny and warm. It's twenty degrees. Tomorrow it's going to rain.",
    qs: [["South of the country:", ["Sunny and warm", "Cloudy", "Rainy"], 0, "Sunny and warm."], ["Tomorrow:", ["Rain", "Sun", "Snow"], 0, "Rain."]] },
  { title: "A cold day", text: "It's freezing today. It's minus two degrees. It's snowing in the mountains. Take a hat and a scarf.",
    qs: [["How cold is it?", ["Minus two degrees", "Two degrees", "Twelve degrees"], 0, "-2."], ["What is the weather in the mountains?", ["Snowing", "Raining", "Sunny"], 0, "Snowing."]] },
  { title: "The morning", text: "I get up at seven. I have breakfast at half past seven. I leave home at eight. In the morning I work. In the afternoon I have meetings.",
    qs: [["When does the speaker get up?", ["At seven", "At eight", "At six"], 0, "Seven."], ["What does the speaker do in the afternoon?", ["Has meetings", "Works alone", "Sleeps"], 0, "Meetings."]] },
  { title: "Plans for the weekend", text: "What are you doing this weekend? On Saturday it's going to be sunny, so I'm going to go to the beach. On Sunday it's going to rain, so I'm going to read at home.",
    qs: [["What is the second speaker doing on Saturday?", ["Going to the beach", "Reading at home", "Working"], 0, "Beach."], ["Why does the second speaker read on Sunday?", ["It's going to rain", "She is tired", "It's cold"], 0, "Rain."]] },
  { title: "Dates", text: "When is your birthday? It's on the fifth of May. And yours? It's in December. Winter is my favourite season.",
    qs: [["When is the second speaker's birthday?", ["On the fifth of May", "In December", "In July"], 0, "5 May."], ["When is the first speaker's birthday?", ["In December", "On the fifth of May", "In July"], 0, "December."]] },
  { title: "Yesterday and today", text: "Yesterday it was rainy and cold. Today it's sunny but windy. I'm wearing a coat. Tomorrow we are going to have a picnic.",
    qs: [["Yesterday was…", ["Rainy and cold", "Hot", "Snowy"], 0, "Rainy and cold."], ["Tomorrow they…", ["Have a picnic", "Go to work", "Stay home"], 0, "Picnic."]] },
  { title: "School time", text: "School starts at quarter to nine. We have a break at half past ten. Lunch is at twelve. School finishes at four. On Wednesday we finish at one.",
    qs: [["When does school start?", ["Quarter to nine", "Nine", "Quarter past nine"], 0, "8:45."], ["When do they finish on Wednesday?", ["At one", "At four", "At noon"], 0, "13:00."]] },
];

export const EXERCISES_A111 = [
  { title: "Vocabulaire — Météo et temps", help: "Choisis le sens correct.",
    qs: [["cloudy", ["nuageux", "ensoleillé", "venteux"], 0, "Cloudy."], ["freezing", ["glacial", "doux", "chaud"], 0, "Freezing."], ["tomorrow", ["demain", "hier", "aujourd'hui"], 0, "Tomorrow."], ["winter", ["hiver", "été", "printemps"], 0, "Winter."], ["early", ["tôt", "tard", "soir"], 0, "Early."], ["noon", ["midi", "minuit", "matin"], 0, "Noon."]] },
  { title: "L'heure", help: "Écris l'heure en anglais.",
    qs: [["2:00", ["two o'clock", "half past two", "quarter to two"], 0, "o'clock."], ["5:30", ["half past five", "quarter past five", "five o'clock"], 0, "half past."], ["7:15", ["quarter past seven", "quarter to seven", "half past seven"], 0, "quarter past."], ["9:45", ["quarter to ten", "quarter past nine", "half past nine"], 0, "quarter to ten."], ["12:00", ["noon", "midnight", "morning"], 0, "noon."]] },
  { title: "It's… (météo)", help: "It + adjectif ou verbe-ing.",
    qs: [["___ sunny today.", ["It's", "He's", "I'm"], 0, "It's."], ["It's ___ now. (rain)", ["raining", "rains", "rain"], 0, "raining."], ["It's ___ in January. (cold)", ["cold", "coldly", "colds"], 0, "cold."], ["What's the ___ like?", ["weather", "time", "season"], 0, "weather."], ["___ it snowing?", ["Is", "Does", "Are"], 0, "Is it."]] },
  { title: "At / on / in", help: "Préposition de temps.",
    qs: [["I get up ___ seven.", ["at", "on", "in"], 0, "at seven."], ["My birthday is ___ May.", ["in", "on", "at"], 0, "in May."], ["The party is ___ Saturday.", ["on", "in", "at"], 0, "on Saturday."], ["I read ___ the evening.", ["in", "on", "at"], 0, "in the evening."], ["It's cold ___ night.", ["at", "in", "on"], 0, "at night."]] },
  { title: "Simple ou continu ?", help: "Habitude ou maintenant ?",
    qs: [["It ___ a lot in autumn. (rain)", ["rains", "is raining", "rain"], 0, "Habitude."], ["Look! It ___ now. (snow)", ["is snowing", "snows", "snow"], 0, "Maintenant."], ["I usually ___ at seven. (get up)", ["get up", "am getting up", "gets up"], 0, "usually → simple."], ["She ___ now. (run)", ["is running", "runs", "run"], 0, "now → continu."], ["It ___ in winter. (snow)", ["snows", "is snowing", "snow"], 0, "Fait général."]] },
  { title: "Demain, hier, la semaine prochaine", help: "Repères de temps.",
    qs: [["The day before today:", ["yesterday", "tomorrow", "next week"], 0, "yesterday."], ["The day after today:", ["tomorrow", "yesterday", "last month"], 0, "tomorrow."], ["It's ___ to rain tomorrow.", ["going", "go", "goes"], 0, "going to."], ["We travel ___ week.", ["next", "after", "tomorrow"], 0, "next week."], ["I was ill ___ month.", ["last", "next", "tomorrow"], 0, "last month."]] },
  { title: "Mise en situation", help: "Au quotidien.",
    qs: [["You ask the time:", ["What time is it?", "What hour is?", "How time is it?"], 0, "What time is it?"], ["You ask about the weather:", ["What's the weather like?", "How is the weather do?", "What weather does?"], 0, "What's the weather like?"], ["It's 6:30:", ["It's half past six.", "It's six and half.", "It's half to six."], 0, "half past."], ["You say it rains now:", ["It's raining.", "It rains now.", "It is rain."], 0, "It's raining."], ["You say your birthday:", ["My birthday is in July.", "My birthday is at July.", "My birthday is on July."], 0, "in July."]] },
];

export const EXPRESSION_A111 = [
  { title: "La météo du jour", icon: "🌤️",
    prompts: ["Dis quel temps il fait aujourd'hui.", "Dis la température.", "Dis quel temps il fera demain.", "Dis ta saison préférée."],
    model: "It's sunny today. It's twenty degrees. Tomorrow it's going to rain. My favourite season is summer.",
    checks: [["Aujourd'hui", "it'?s\\s+(sunny|rainy|cloudy|windy|snowy|cold|hot|warm|cool|raining|snowing)"], ["Température", "it'?s\\s+\\w+\\s+degrees|\\w+\\s+degrees"], ["Demain", "tomorrow,? it'?s going to\\s+\\w+"], ["Saison", "(my )?favou?rite season is\\s+(spring|summer|autumn|winter)"]] },
  { title: "Mon emploi du temps", icon: "🕒",
    prompts: ["Dis à quelle heure tu te lèves.", "Dis à quelle heure tu manges à midi.", "Dis ce que tu fais le soir.", "Dis ton plan pour la semaine prochaine."],
    model: "I get up at seven. I have lunch at noon. In the evening I read. Next week I'm going to travel.",
    checks: [["Lever", "i (get up|wake up) at\\s+\\w+"], ["Déjeuner", "i have lunch (at|around)\\s+\\w+"], ["Soir", "in the evening,? i\\s+\\w+"], ["Semaine prochaine", "next week,? i'?m going to\\s+\\w+"]] },
];

export const TEST_TEXTS_A111 = [
  { title: "Un jour de soleil", text: "Today it's sunny and warm. It's twenty-two degrees. I'm at the park with my friends. Tomorrow it's going to rain, so we are going to stay at home.", q: [["What's the weather like today?", ["Sunny and warm", "Rainy", "Snowy"], 0], ["How many degrees?", ["Twenty-two", "Twelve", "Two"], 0], ["Tomorrow:", ["Rain", "Sun", "Snow"], 0]] },
  { title: "Le réveil", text: "I wake up early, at six o'clock. In winter it's very cold and dark. I have breakfast at half past six. I leave home at seven.", q: [["When does the speaker wake up?", ["At six", "At seven", "At eight"], 0], ["How is winter?", ["Cold and dark", "Hot", "Sunny"], 0], ["When does the speaker leave?", ["At seven", "At six", "At half past six"], 0]] },
  { title: "L'été", text: "In summer I love the beach. It's hot, about thirty degrees. In the evening we eat outside. In winter I stay at home and drink hot chocolate.", q: [["Where does the speaker go in summer?", ["The beach", "The mountains", "School"], 0], ["How hot is it?", ["About thirty", "About ten", "About twenty"], 0], ["In winter the speaker…", ["stays at home", "travels", "swims"], 0]] },
  { title: "L'école de Léo", text: "My school starts at quarter to nine. Lunch is at twelve. I finish at four. On Saturday I sleep late. I get up at ten.", q: [["School starts at…", ["8:45", "9:15", "9:00"], 0], ["Lunch is at…", ["Twelve", "One", "Four"], 0], ["On Saturday he…", ["sleeps late", "goes to school", "works"], 0]] },
  { title: "Hier et demain", text: "Yesterday it was cold, but today it's warm and windy. Tomorrow is Friday. Next week is a holiday, so I'm going to travel to the mountains.", q: [["Today is…", ["Warm and windy", "Cold", "Snowy"], 0], ["Tomorrow is…", ["Friday", "Monday", "Sunday"], 0], ["Next week the speaker…", ["travels", "works", "studies"], 0]] },
];

export const TEST_AUDIOS_A111 = [
  { script: "Excuse me, what time is it? It's half past three. Thank you. The bus is at four, so we have time.", q: [["What time is it?", ["Half past three", "Three o'clock", "Four"], 0], ["When is the bus?", ["At four", "At three", "At five"], 0]] },
  { script: "Good morning. Today it's cloudy in the north. In the south it's sunny and warm. It's twenty degrees. Tomorrow it's going to rain.", q: [["South:", ["Sunny and warm", "Cloudy", "Rainy"], 0], ["Tomorrow:", ["Rain", "Sun", "Snow"], 0]] },
  { script: "It's freezing today. It's minus two degrees. It's snowing in the mountains. Take a hat and a scarf.", q: [["Temperature:", ["Minus two", "Two", "Twelve"], 0], ["Mountains:", ["Snowing", "Raining", "Sunny"], 0]] },
  { script: "I get up at seven. I have breakfast at half past seven. I leave home at eight. In the afternoon I have meetings.", q: [["Get up:", ["Seven", "Eight", "Six"], 0], ["Afternoon:", ["Meetings", "Sleep", "Beach"], 0]] },
  { script: "School starts at quarter to nine. We have a break at half past ten. Lunch is at twelve. On Wednesday we finish at one.", q: [["Start:", ["Quarter to nine", "Nine", "Quarter past nine"], 0], ["Wednesday finish:", ["One", "Four", "Noon"], 0]] },
];

export const TEST_GRAMMAR_A111 = [
  ["What time ___ it?", ["is", "are", "does"], 0], ["3:30 = ___ three.", ["half past", "quarter to", "o'clock"], 0], ["7:15 = ___ seven.", ["quarter past", "quarter to", "half past"], 0], ["8:45 = ___ nine.", ["quarter to", "quarter past", "half past"], 0],
  ["___ cold today.", ["It's", "He's", "They're"], 0], ["It's ___ now. (rain)", ["raining", "rains", "rain"], 0], ["___ it snowing?", ["Is", "Does", "Are"], 0], ["What's the ___ like?", ["weather", "whether", "time"], 0],
  ["My birthday is ___ July.", ["in", "on", "at"], 0], ["The class is ___ Tuesday.", ["on", "in", "at"], 0], ["I get up ___ seven.", ["at", "on", "in"], 0], ["It's cold ___ night.", ["at", "in", "on"], 0],
  ["It ___ a lot in winter. (rain)", ["rains", "is raining", "rain"], 0], ["Look! It ___ now. (snow)", ["is snowing", "snows", "snow"], 0], ["I usually ___ at seven. (get up)", ["get up", "am getting up", "gets up"], 0], ["She ___ now. (run)", ["is running", "runs", "run"], 0],
  ["It's ___ to rain tomorrow.", ["going", "go", "goes"], 0], ["The day after today:", ["tomorrow", "yesterday", "last week"], 0], ["We travel ___ week.", ["next", "after", "tomorrow"], 0], ["I was ill ___ month.", ["last", "next", "tomorrow"], 0],
  ["“Cloudy” means…", ["nuageux", "ensoleillé", "venteux"], 0], ["“Freezing” means…", ["glacial", "doux", "chaud"], 0], ["“Autumn” means…", ["automne", "été", "printemps"], 0], ["“Early” means…", ["tôt", "tard", "soir"], 0],
  ["You ask the time:", ["What time is it?", "What hour is?", "How time is it?"], 0], ["You ask the weather:", ["What's the weather like?", "How is the weather do?", "What weather does?"], 0], ["6:30:", ["It's half past six.", "It's six and half.", "It's half to six."], 0], ["I read ___ the evening.", ["in", "on", "at"], 0],
  ["It ___ in winter. (snow)", ["snows", "is snowing", "snow"], 0], ["“Yesterday” means…", ["hier", "demain", "aujourd'hui"], 0],
];

export const MISSIONS_A111 = [
  { id: "m1", ic: "🌦️", title: "Quel temps ?", sub: "Écoute et choisis la météo.", hero: "city/a111-m1" },
  { id: "m2", ic: "🕒", title: "Quelle heure ?", sub: "Écoute et choisis l'heure.", hero: "city/a111-m2" },
  { id: "m3", ic: "💬", title: "Construis la phrase", sub: "Remets les mots dans l'ordre.", hero: "city/a111-m3" },
  { id: "m4", ic: "📆", title: "At, on, in", sub: "Choisis la bonne préposition.", hero: "city/a111-m4" },
  { id: "m5", ic: "🧭", title: "Mon planning", sub: "Choisis la bonne phrase.", hero: "city/a111-m5" },
  { id: "m6", ic: "🌍", title: "Météo de la semaine", sub: "Présente le temps et tes plans.", hero: "city/a111-m6" },
];

const pick = (say, label, a, o) => ({ say, groups: [{ label, answer: a, opts: names(o) }] });
export const DATA_A111 = {
  m1: [
    pick("Look! Water falls from the sky.", "What's the weather?", "It's raining.", ["It's raining.", "It's snowing.", "It's sunny.", "It's windy."]),
    pick("I can see the sun and there are no clouds.", "What's the weather?", "It's sunny.", ["It's sunny.", "It's cloudy.", "It's foggy.", "It's snowing."]),
    pick("White snow falls and it is very cold.", "What's the weather?", "It's snowing.", ["It's snowing.", "It's raining.", "It's hot.", "It's windy."]),
    pick("The wind is strong and my hat flies away.", "What's the weather?", "It's windy.", ["It's windy.", "It's sunny.", "It's foggy.", "It's warm."]),
    pick("The sky is grey with many clouds.", "What's the weather?", "It's cloudy.", ["It's cloudy.", "It's sunny.", "It's hot.", "It's snowing."]),
  ],
  m2: [
    pick("It's three o'clock.", "The time is…", "3:00", ["3:00", "3:30", "2:45"]),
    pick("It's half past six.", "The time is…", "6:30", ["6:30", "6:15", "5:30"]),
    pick("It's quarter past eight.", "The time is…", "8:15", ["8:15", "8:45", "7:15"]),
    pick("It's quarter to ten.", "The time is…", "9:45", ["9:45", "10:15", "10:45"]),
  ],
  m3: [
    { prompt: "Demande : « Quelle heure est-il ? »", answer: ["What", "time", "is", "it", "?"], bank: ["it", "time", "What", "is", "?"] },
    { prompt: "Demande : « Quel temps fait-il ? »", answer: ["What's", "the", "weather", "like", "?"], bank: ["like", "weather", "What's", "the", "?"] },
    { prompt: "Dis : « Il pleut aujourd'hui. »", answer: ["It's", "raining", "today", "."], bank: ["today", "raining", "It's", "."] },
    { prompt: "Dis : « Mon anniversaire est en juillet. »", answer: ["My", "birthday", "is", "in", "July", "."], bank: ["July", "in", "My", "is", "birthday", "."] },
    { prompt: "Dis : « Demain il va neiger. »", answer: ["Tomorrow", "it's", "going", "to", "snow", "."], bank: ["snow", "to", "Tomorrow", "going", "it's", "."] },
  ],
  m4: [
    pick("My birthday is ___ May.", "Preposition", "in", ["in", "on", "at"]),
    pick("The film starts ___ eight.", "Preposition", "at", ["at", "on", "in"]),
    pick("We have a test ___ Monday.", "Preposition", "on", ["on", "in", "at"]),
    pick("It's cold ___ winter.", "Preposition", "in", ["in", "on", "at"]),
  ],
  m5: [
    pick("Tu te lèves à sept heures.", "Say", "I get up at seven.", ["I get up at seven.", "I get up on seven.", "I gets up at seven."]),
    pick("Tu dis qu'il neige maintenant.", "Say", "It's snowing now.", ["It's snowing now.", "It snows now.", "It's snow now."]),
    pick("Tu demandes la météo.", "Say", "What's the weather like?", ["What's the weather like?", "What weather it is?", "How weather is?"]),
    pick("Tu dis ton plan pour la semaine prochaine.", "Say", "Next week I'm going to travel.", ["Next week I'm going to travel.", "Next week I travel to going.", "I going next week travel."]),
  ],
  m6: [
    { prompt: "Présente la météo de demain.", card: [["Day", "Tomorrow"], ["Weather", "rain"], ["Plan", "museum"]], answer: ["Tomorrow", "it's going to rain.", "I'm going to", "visit a museum."], bank: ["Tomorrow", "it's going to rain.", "it's going to be hot.", "I'm going to", "visit a museum.", "go to the beach.", "Today"] },
    { prompt: "Présente ton samedi.", card: [["Weather", "sunny"], ["Time", "10"], ["Plan", "beach"]], answer: ["On Saturday", "it's going to be sunny.", "At ten", "I'm going to the beach."], bank: ["On Saturday", "it's going to be sunny.", "it's going to rain.", "At ten", "At two", "I'm going to the beach.", "I'm going to work."] },
  ],
};

balanceAll({ VOCAB_A111, GRAMMAR_A111, READING_A111, LISTENING_A111, EXERCISES_A111, EXPRESSION_A111, TEST_TEXTS_A111, TEST_AUDIOS_A111, TEST_GRAMMAR_A111, DATA_A111 });
