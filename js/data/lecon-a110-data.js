// The Roots — A1.10 « Work and Study » : contenu texte complet. Mêmes formats qu'A1.1–A1.9. À relire par un natif.
// Images à fournir : lesson/scene-a110-*.webp et city/a110-m1..m6.webp.
import { balanceAll } from "./balance.js";
const names = (a) => a.map((n) => ({ v: n, label: n }));

export const VOCAB_A110 = [
  { kind: "greetings", title: "Parler de son travail", icon: "💼",
    tip: "Pour demander le métier : “What do you do?” (Que faites-vous dans la vie ?). Réponse : “I'm a teacher.” (avec a / an).",
    examples: [["What do you do?", "Que faites-vous dans la vie ?"], ["I'm a nurse.", "Je suis infirmière."], ["I work in a hospital.", "Je travaille dans un hôpital."]],
    practice: "Écoute et répète la phrase.", say: "I'm a teacher and I work in a school." },
  { kind: "words", title: "Les métiers", icon: "👩‍⚕️", scene: ["scene-a110-jobs", "Des personnes de métiers variés en uniforme"],
    words: [["teacher", "professeur"], ["doctor", "médecin"], ["engineer", "ingénieur"], ["nurse", "infirmier(ère)"], ["driver", "chauffeur"], ["boss", "patron"]],
    tip: "Devant un métier, on met “a” (a teacher) ou “an” devant une voyelle (an engineer).",
    examples: [["She is a doctor.", "Elle est médecin."], ["He is an engineer.", "Il est ingénieur."]],
    q: ["“Boss” veut dire…", ["patron", "collègue", "élève"], 0] },
  { kind: "words", title: "Les lieux de travail", icon: "🏢", scene: ["scene-a110-workplaces", "Un bureau, une usine et un hôpital côte à côte"],
    words: [["office", "bureau"], ["factory", "usine"], ["hospital", "hôpital"], ["shop", "magasin"], ["colleague", "collègue"], ["company", "entreprise"]],
    tip: "“Work” = travailler et aussi “le travail”. “A job” = un emploi (on dit “a job”, pas “a work”).",
    examples: [["I work in an office.", "Je travaille dans un bureau."], ["My colleague is nice.", "Mon collègue est sympa."]],
    q: ["“Factory” veut dire…", ["usine", "bureau", "magasin"], 0] },
  { kind: "words", title: "À l'école", icon: "🏫", scene: ["scene-a110-school", "Une salle de classe avec bureaux et tableau vide"],
    words: [["school", "école"], ["university", "université"], ["subject", "matière"], ["class", "cours / classe"], ["homework", "devoirs"], ["exam", "examen"]],
    tip: "“Homework” est indénombrable : “I have homework” (pas “homeworks”).",
    examples: [["I have an exam on Friday.", "J'ai un examen vendredi."], ["My favourite subject is science.", "Ma matière préférée est la science."]],
    q: ["“Homework” veut dire…", ["devoirs", "examen", "classe"], 0] },
  { kind: "words", title: "Les matières", icon: "📚", scene: ["scene-a110-subjects", "Des livres, une calculatrice, un globe, un tube à essai"],
    words: [["maths", "maths"], ["history", "histoire"], ["science", "sciences"], ["English", "anglais"], ["art", "arts plastiques"], ["PE", "sport (EPS)"]],
    tip: "“Maths” (UK) / “math” (US). Les noms de langues prennent une majuscule : English, French.",
    examples: [["I study English and maths.", "J'étudie l'anglais et les maths."], ["I like history.", "J'aime l'histoire."]],
    q: ["“PE” veut dire…", ["sport (EPS)", "physique", "poésie"], 0] },
  { kind: "words", title: "La journée de travail", icon: "⏰", scene: ["scene-a110-day", "Une horloge, une réunion, une pause café"],
    words: [["start work", "commencer le travail"], ["finish work", "finir le travail"], ["meeting", "réunion"], ["break", "pause"], ["lunch", "déjeuner"], ["timetable", "emploi du temps"]],
    tip: "“I start work at nine” : pas de “the” devant work ici.",
    examples: [["I finish work at five.", "Je finis le travail à cinq heures."], ["We have a meeting at ten.", "Nous avons une réunion à dix heures."]],
    q: ["“Break” veut dire…", ["pause", "réunion", "bureau"], 0] },
  { kind: "words", title: "Les études", icon: "🎓", scene: ["scene-a110-study", "Un étudiant avec un diplôme et une pile de livres"],
    words: [["student", "étudiant / élève"], ["degree", "diplôme"], ["lesson", "leçon"], ["teacher", "professeur"], ["study", "étudier"], ["learn", "apprendre"]],
    tip: "“Student” est utilisé pour l'école et l'université. “Pupil” = élève (plus jeune).",
    examples: [["I'm a student at university.", "Je suis étudiant à l'université."], ["I study biology.", "J'étudie la biologie."]],
    q: ["“Degree” veut dire…", ["diplôme", "devoir", "emploi du temps"], 0] },
];

export const GRAMMAR_A110 = [
  { title: "Présent simple : mes routines", icon: "🔁",
    table: [["I work", "je travaille", "I / you / we / they + verbe"], ["You study", "tu étudies", "verbe de base"], ["We start at nine", "nous commençons à neuf heures", "verbe de base"], ["They finish at five", "ils finissent à cinq heures", "verbe de base"]],
    examples: [["I work in an office.", "Je travaille dans un bureau."], ["We study English.", "Nous étudions l'anglais."]],
    qs: [["I ___ in a shop.", ["work", "works", "working"], 0, "I + verbe de base."], ["They ___ at nine.", ["start", "starts", "starting"], 0, "They start."]] },
  { title: "Présent simple : he / she / it", icon: "➕",
    table: [["She works", "elle travaille", "+ s"], ["He studies", "il étudie", "y → ies"], ["She finishes", "elle finit", "-sh → +es"], ["He has a meeting", "il a une réunion", "have → has"]],
    examples: [["He works in a hospital.", "Il travaille dans un hôpital."], ["She studies maths.", "Elle étudie les maths."]],
    qs: [["She ___ in a school.", ["works", "work", "working"], 0, "She works."], ["He ___ at six. (finish)", ["finishes", "finish", "finishs"], 0, "finish → finishes."]] },
  { title: "Questions : What do you do?", icon: "❓",
    table: [["What do you do?", "Que faites-vous ?", "métier"], ["Where do you work?", "Où travaillez-vous ?", "lieu"], ["What are you studying?", "Qu'étudiez-vous ?", "présent continu"], ["What does she do?", "Que fait-elle ?", "does + she"]],
    examples: [["Where do you work? — In a hospital.", "Où travaillez-vous ? — Dans un hôpital."], ["What does he do? — He's a driver.", "Que fait-il ? — Il est chauffeur."]],
    qs: [["What ___ you do?", ["do", "does", "are"], 0, "What do you do?"], ["Where ___ she work?", ["does", "do", "is"], 0, "does + she."]] },
  { title: "Négation : don't / doesn't", icon: "🚫",
    table: [["I don't work on Sunday.", "Je ne travaille pas le dimanche.", "don't + verbe"], ["She doesn't work here.", "Elle ne travaille pas ici.", "doesn't + verbe"], ["We don't have homework.", "Nous n'avons pas de devoirs.", ""], ["He doesn't study maths.", "Il n'étudie pas les maths.", "pas de -s après doesn't"]],
    examples: [["I don't start at eight.", "Je ne commence pas à huit heures."], ["He doesn't like exams.", "Il n'aime pas les examens."]],
    qs: [["She ___ work on Sunday.", ["doesn't", "don't", "isn't"], 0, "She doesn't."], ["They ___ study history.", ["don't", "doesn't", "aren't"], 0, "They don't."]] },
  { title: "Prépositions de temps : at / on / in", icon: "📆",
    table: [["at nine / at noon / at night", "à neuf heures / à midi / la nuit", "AT + heure"], ["on Monday / on Friday", "le lundi / le vendredi", "ON + jour"], ["in the morning / in July", "le matin / en juillet", "IN + moment / mois"], ["on Monday morning", "lundi matin", "on + jour + moment"]],
    examples: [["I start at nine.", "Je commence à neuf heures."], ["We have an exam on Friday.", "Nous avons un examen vendredi."]],
    qs: [["I work ___ Monday.", ["on", "at", "in"], 0, "on + jour."], ["I finish ___ five.", ["at", "on", "in"], 0, "at + heure."]] },
  { title: "Travailler in / at / from", icon: "🏠",
    table: [["I work from home.", "Je travaille de chez moi.", ""], ["I work in an office.", "Je travaille dans un bureau.", "in + lieu fermé"], ["I work at a bank.", "Je travaille dans une banque.", "at + entreprise"], ["I study at university.", "J'étudie à l'université.", "at + école"]],
    examples: [["She works at a bank.", "Elle travaille dans une banque."], ["He studies at school.", "Il étudie à l'école."]],
    qs: [["I work ___ a bank.", ["at", "on", "to"], 0, "at a bank."], ["She works ___ an office.", ["in", "on", "at the"], 0, "in an office."]] },
];

export const READING_A110 = [
  { who: "Anna", text: "Hi! I'm Anna. I'm a nurse. I work in a hospital. I start work at seven in the morning and I finish at three. I like my colleagues. They are very kind. I wear a blue uniform. After work I go home and I cook dinner for my family. On Sunday I don't work, so I visit my mother.",
    fr: "Anna est infirmière, elle travaille de sept heures à quinze heures et aime ses collègues.  Elle porte un uniforme bleu, cuisine pour sa famille et rend visite à sa mère le dimanche.",
    qs: [["What does Anna do?", ["She's a nurse", "She's a teacher", "She's a driver"], 0, "A nurse."], ["When does she finish?", ["At three", "At seven", "At five"], 0, "At three."]] },
  { who: "Tom", text: "Hello! I'm Tom. I'm a student. I study history at university. I have classes on Monday, Tuesday and Thursday. I don't have classes on Friday. I do my homework in the library. I live with two friends near the university. We cook together in the evening. On Saturday I play football.",
    fr: "Tom étudie l'histoire à l'université ; pas de cours le vendredi.  Il vit avec deux amis et ils cuisinent ensemble ; le samedi il joue au foot.",
    qs: [["What does Tom study?", ["History", "Maths", "Art"], 0, "History."], ["Does he have classes on Friday?", ["No", "Yes", "Sometimes"], 0, "No."]] },
  { who: "Mr Lee", text: "My name is Mr Lee. I'm a maths teacher. I work in a big school. I start at eight and I finish at four. In the morning I teach and in the afternoon I check homework. My students are friendly. I like my job because I help young people. At home I read and I listen to music.",
    fr: "M. Lee est professeur de maths ; il enseigne le matin et corrige l'après-midi.  Ses élèves sont sympathiques ; il aime aider les jeunes ; chez lui il lit et écoute de la musique.",
    qs: [["What does Mr Lee teach?", ["Maths", "English", "Science"], 0, "Maths."], ["What does he do in the afternoon?", ["Checks homework", "Has lunch", "Goes home"], 0, "Checks homework."]] },
  { who: "Carla", text: "I'm Carla. I work in an office. I start work at nine. We have a meeting on Monday morning. I have lunch at one. I finish at half past five. My office is big and bright. My colleagues are very nice. After work I go to the gym.",
    fr: "Carla travaille dans un bureau, réunion le lundi matin, finit à 17h30.  Son bureau est grand et lumineux, ses collègues sont gentils ; après le travail elle va à la salle de sport.",
    qs: [["When is the meeting?", ["On Monday morning", "On Friday", "At night"], 0, "Monday morning."], ["When does the speaker finish?", ["At half past five", "At five", "At six"], 0, "17:30."]] },
  { who: "Ben", text: "Hi, I'm Ben. I'm an engineer. I work in a factory. My boss is Mrs Green. I don't work on Saturday or Sunday. I like my job. My colleagues are friendly. I take the bus to the factory every day. At home I play with my children.",
    fr: "Ben est ingénieur en usine, ne travaille pas le week-end et aime son travail.  Ses collègues sont aimables ; il prend le bus ; chez lui il joue avec ses enfants.",
    qs: [["Where does Ben work?", ["In a factory", "In a shop", "In a school"], 0, "Factory."], ["Does he work on Sunday?", ["No", "Yes", "Sometimes"], 0, "No."]] },
];

export const LISTENING_A110 = [
  { title: "What do you do?", text: "What do you do? I'm a doctor. Where do you work? I work in a hospital. Do you like your job? Yes, I love it.",
    qs: [["What is the second speaker’s job?", ["Doctor", "Teacher", "Driver"], 0, "Doctor."], ["Where does the second speaker work?", ["In a hospital", "In a school", "In a shop"], 0, "Hospital."]] },
  { title: "A student", text: "I'm a student. I study English and history. I have classes in the morning. In the afternoon I do my homework.",
    qs: [["What does the speaker study?", ["English and history", "Maths and art", "Science"], 0, "English and history."], ["When does the speaker do homework?", ["In the afternoon", "In the morning", "At night"], 0, "Afternoon."]] },
  { title: "Work hours", text: "I start work at nine. I have a break at eleven. I have lunch at one. I finish work at half past five.",
    qs: [["When is the break?", ["At eleven", "At nine", "At one"], 0, "11:00."], ["When does the speaker finish?", ["At half past five", "At five", "At six"], 0, "17:30."]] },
  { title: "The timetable", text: "On Monday I have maths and English. On Tuesday I have history and art. On Friday I have PE and science.",
    qs: [["What does the speaker have on Tuesday?", ["History and art", "Maths and English", "PE and science"], 0, "History and art."], ["When is PE?", ["On Friday", "On Monday", "On Tuesday"], 0, "Friday."]] },
  { title: "A meeting", text: "We have a meeting on Wednesday at ten. Is it in the office? No, it is in room four. Who is coming? My boss and two colleagues.",
    qs: [["When is the meeting?", ["On Wednesday at ten", "On Monday", "On Friday at two"], 0, "Wednesday 10."], ["Where is it?", ["In room four", "In the office", "At home"], 0, "Room four."]] },
  { title: "Where do you work?", text: "Where do you work? I work at a bank. Do you like it? It is OK. My colleagues are nice, but the work is long.",
    qs: [["Where does the second speaker work?", ["At a bank", "At a school", "At home"], 0, "A bank."], ["What is nice?", ["The colleagues", "The hours", "The boss"], 0, "Colleagues."]] },
  { title: "An exam", text: "I have an exam on Friday. It is a maths exam. I study every evening. I don't watch TV this week. I want a good result.",
    qs: [["What exam is it?", ["Maths", "English", "History"], 0, "Maths."], ["What does the speaker not do this week?", ["Watch TV", "Study", "Eat"], 0, "No TV."]] },
  { title: "My teacher", text: "My teacher is Mrs Brown. She teaches science. She is kind and funny. She doesn't give a lot of homework.",
    qs: [["What does Mrs Brown teach?", ["Science", "Maths", "Art"], 0, "Science."], ["What is she like?", ["Kind and funny", "Strict and tired", "Shy"], 0, "Kind and funny."]] },
];

export const EXERCISES_A110 = [
  { title: "Vocabulaire — Travail et études", help: "Choisis le sens correct.",
    qs: [["colleague", ["collègue", "patron", "élève"], 0, "Colleague."], ["factory", ["usine", "bureau", "école"], 0, "Factory."], ["subject", ["matière", "devoir", "diplôme"], 0, "Subject."], ["homework", ["devoirs", "examen", "pause"], 0, "Homework."], ["timetable", ["emploi du temps", "réunion", "bureau"], 0, "Timetable."], ["degree", ["diplôme", "classe", "leçon"], 0, "Degree."]] },
  { title: "Présent simple (I, you, we, they)", help: "Verbe de base.",
    qs: [["I ___ in an office.", ["work", "works", "working"], 0, "I work."], ["We ___ English.", ["study", "studies", "studying"], 0, "We study."], ["They ___ at nine.", ["start", "starts", "starting"], 0, "They start."], ["You ___ lunch at one.", ["have", "has", "having"], 0, "You have."], ["I ___ at five.", ["finish", "finishes", "finishing"], 0, "I finish."]] },
  { title: "Présent simple (he, she)", help: "Ajoute -s / -es / -ies.",
    qs: [["She ___ in a school.", ["works", "work", "working"], 0, "She works."], ["He ___ history. (study)", ["studies", "studys", "study"], 0, "study → studies."], ["She ___ at six. (finish)", ["finishes", "finishs", "finish"], 0, "finishes."], ["He ___ a meeting at ten. (have)", ["has", "have", "haves"], 0, "has."], ["My boss ___ at eight. (start)", ["starts", "start", "starting"], 0, "starts."]] },
  { title: "Questions", help: "do / does.",
    qs: [["What ___ you do?", ["do", "does", "are"], 0, "do."], ["Where ___ she work?", ["does", "do", "is"], 0, "does."], ["What time ___ you start?", ["do", "does", "are"], 0, "do."], ["___ he like his job?", ["Does", "Do", "Is"], 0, "Does he."], ["Where ___ they study?", ["do", "does", "is"], 0, "do."]] },
  { title: "Négation", help: "don't / doesn't.",
    qs: [["I ___ work on Sunday.", ["don't", "doesn't", "isn't"], 0, "I don't."], ["She ___ study maths.", ["doesn't", "don't", "isn't"], 0, "She doesn't."], ["We ___ have homework.", ["don't", "doesn't", "aren't"], 0, "We don't."], ["He ___ start at seven.", ["doesn't", "don't", "isn't"], 0, "He doesn't."], ["They ___ work here.", ["don't", "doesn't", "isn't"], 0, "They don't."]] },
  { title: "At / on / in", help: "Choisis la préposition de temps.",
    qs: [["I start ___ nine.", ["at", "on", "in"], 0, "at nine."], ["The exam is ___ Friday.", ["on", "at", "in"], 0, "on Friday."], ["I study ___ the evening.", ["in", "on", "at"], 0, "in the evening."], ["We have a meeting ___ Monday morning.", ["on", "at", "in"], 0, "on Monday morning."], ["I don't work ___ night.", ["at", "in", "on"], 0, "at night."]] },
  { title: "Mise en situation", help: "Au travail et à l'école.",
    qs: [["Someone asks your job:", ["I'm a teacher.", "I teacher.", "I'm teach."], 0, "I'm a teacher."], ["You ask where she works:", ["Where does she work?", "Where she works?", "Where do she work?"], 0, "does she work."], ["You say your start time:", ["I start at nine.", "I start on nine.", "I starts at nine."], 0, "at nine."], ["You say you have no homework:", ["I don't have homework.", "I no have homework.", "I haven't homeworks."], 0, "don't have."], ["You say your subject:", ["I study history.", "I studies history.", "I am study history."], 0, "I study."]] },
];

export const EXPRESSION_A110 = [
  { title: "Mon travail ou mes études", icon: "💼",
    prompts: ["Dis ton métier ou ce que tu étudies.", "Dis où tu travailles ou étudies.", "Dis à quelle heure tu commences.", "Dis à quelle heure tu finis."],
    model: "I'm a teacher. I work in a school. I start at eight. I finish at four.",
    checks: [["Métier / études", "i'?m (a|an)\\s+\\w+|i study\\s+\\w+"], ["Lieu", "i (work|study) (in|at)\\s+(a|an|the)?\\s*\\w+"], ["Début", "i start( work| school| classes)? at\\s+\\w+"], ["Fin", "i finish( work| school| classes)? at\\s+\\w+"]] },
  { title: "Ma journée type", icon: "📅",
    prompts: ["Dis ce que tu fais le matin.", "Dis ce que tu fais à midi.", "Dis ce que tu fais l'après-midi.", "Dis un jour où tu ne travailles pas."],
    model: "In the morning I work. At noon I have lunch. In the afternoon I have a meeting. I don't work on Sunday.",
    checks: [["Matin", "in the morning,? i\\s+\\w+"], ["Midi", "(at noon|at one|at twelve),? i\\s+\\w+"], ["Après-midi", "in the afternoon,? i\\s+\\w+"], ["Jour libre", "i (don'?t|do not) (work|study|have)\\s*\\w*\\s*(on|at)?\\s*\\w+"]] },
];

export const TEST_TEXTS_A110 = [
  { title: "Anna l'infirmière", text: "I'm Anna. I'm a nurse. I work in a hospital. I start work at seven and I finish at three. I like my colleagues. I wear a blue uniform. After work I go home and I cook dinner for my family. On Sunday I don't work, so I visit my mother.", q: [["What is her job?", ["Nurse", "Teacher", "Driver"], 0], ["Where does she work?", ["In a hospital", "In a school", "In a shop"], 0], ["When does she finish?", ["At three", "At seven", "At five"], 0]] },
  { title: "Tom l'étudiant", text: "I'm Tom. I'm a student. I study history at university. I have classes on Monday and Tuesday. I don't have classes on Friday. I live with two friends near the university. We cook together in the evening. On Saturday I play football.", q: [["What does he study?", ["History", "Maths", "Art"], 0], ["Where?", ["At university", "At school", "At home"], 0], ["Classes on Friday?", ["No", "Yes", "Not stated"], 0]] },
  { title: "Le professeur", text: "Mr Lee is a maths teacher. He works in a big school. He starts at eight and finishes at four. He checks homework in the afternoon.", q: [["What does he teach?", ["Maths", "English", "Science"], 0], ["When does he start?", ["At eight", "At nine", "At four"], 0], ["In the afternoon he…", ["checks homework", "has an exam", "goes home"], 0]] },
  { title: "Au bureau", text: "I work in an office. I start at nine. We have a meeting on Monday morning. I have lunch at one. I finish at half past five. My office is big and bright. My colleagues are very nice. After work I go to the gym.", q: [["Where does the speaker work?", ["In an office", "In a factory", "At home"], 0], ["When is the meeting?", ["On Monday morning", "On Friday", "At night"], 0], ["When does the speaker finish?", ["Half past five", "Five", "Six"], 0]] },
  { title: "L'ingénieur", text: "I'm Ben. I'm an engineer. I work in a factory. My boss is Mrs Green. I don't work on Saturday or Sunday. My colleagues are friendly. I take the bus to the factory every day. At home I play with my children.", q: [["What is his job?", ["Engineer", "Doctor", "Student"], 0], ["Who is his boss?", ["Mrs Green", "Mr Lee", "Anna"], 0], ["Does he work on Sunday?", ["No", "Yes", "Sometimes"], 0]] },
];

export const TEST_AUDIOS_A110 = [
  { script: "What do you do? I'm a doctor. Where do you work? I work in a hospital. Do you like your job? Yes, I love it.", q: [["What is the second speaker’s job?", ["Doctor", "Teacher", "Driver"], 0], ["Where does the second speaker work?", ["In a hospital", "In a school", "In a shop"], 0]] },
  { script: "I start work at nine. I have a break at eleven. I have lunch at one. I finish work at half past five.", q: [["When is the break?", ["Eleven", "Nine", "One"], 0], ["When does the speaker finish?", ["Half past five", "Five", "Six"], 0]] },
  { script: "On Monday I have maths and English. On Tuesday I have history and art. On Friday I have PE and science.", q: [["Tuesday:", ["History and art", "Maths and English", "PE and science"], 0], ["PE is on…", ["Friday", "Monday", "Tuesday"], 0]] },
  { script: "We have a meeting on Wednesday at ten. It is in room four. My boss and two colleagues are coming.", q: [["When is the meeting?", ["Wednesday at ten", "Monday", "Friday"], 0], ["Where?", ["Room four", "The office", "At home"], 0]] },
  { script: "I have an exam on Friday. It is a maths exam. I study every evening. I don't watch TV this week.", q: [["Which exam?", ["Maths", "English", "History"], 0], ["What does the speaker not do?", ["Watch TV", "Study", "Eat"], 0]] },
];

export const TEST_GRAMMAR_A110 = [
  ["I ___ in an office.", ["work", "works", "working"], 0], ["We ___ English.", ["study", "studies", "studying"], 0], ["They ___ at nine.", ["start", "starts", "starting"], 0], ["You ___ lunch at one.", ["have", "has", "having"], 0],
  ["She ___ in a school.", ["works", "work", "working"], 0], ["He ___ history. (study)", ["studies", "studys", "study"], 0], ["She ___ at six. (finish)", ["finishes", "finishs", "finish"], 0], ["He ___ a meeting. (have)", ["has", "have", "haves"], 0],
  ["What ___ you do?", ["do", "does", "are"], 0], ["Where ___ she work?", ["does", "do", "is"], 0], ["___ he like his job?", ["Does", "Do", "Is"], 0], ["Where ___ they study?", ["do", "does", "is"], 0],
  ["I ___ work on Sunday.", ["don't", "doesn't", "isn't"], 0], ["She ___ study maths.", ["doesn't", "don't", "isn't"], 0], ["We ___ have homework.", ["don't", "doesn't", "aren't"], 0], ["He ___ start at seven.", ["doesn't", "don't", "isn't"], 0],
  ["I start ___ nine.", ["at", "on", "in"], 0], ["The exam is ___ Friday.", ["on", "at", "in"], 0], ["I study ___ the evening.", ["in", "on", "at"], 0], ["I don't work ___ night.", ["at", "in", "on"], 0],
  ["“Colleague” means…", ["collègue", "patron", "élève"], 0], ["“Factory” means…", ["usine", "bureau", "école"], 0], ["“Homework” means…", ["devoirs", "examen", "pause"], 0], ["“Timetable” means…", ["emploi du temps", "réunion", "bureau"], 0],
  ["I work ___ a bank.", ["at", "on", "to"], 0], ["She works ___ an office.", ["in", "on", "at the"], 0], ["You ask someone's job:", ["What do you do?", "What you do?", "What are you do?"], 0], ["I'm ___ engineer.", ["an", "a", "the"], 0],
  ["My ___ is Mrs Green. (patron)", ["boss", "class", "break"], 0], ["I have ___ homework.", ["some", "a", "two"], 0],
];

export const MISSIONS_A110 = [
  { id: "m1", ic: "💼", title: "Quel métier ?", sub: "Écoute et choisis le métier.", hero: "city/a110-m1" },
  { id: "m2", ic: "🏫", title: "À l'école", sub: "Écoute et choisis la bonne réponse.", hero: "city/a110-m2" },
  { id: "m3", ic: "💬", title: "Construis la phrase", sub: "Remets les mots dans l'ordre.", hero: "city/a110-m3" },
  { id: "m4", ic: "🔁", title: "Présent simple", sub: "Choisis la bonne forme du verbe.", hero: "city/a110-m4" },
  { id: "m5", ic: "⏰", title: "Mon planning", sub: "Choisis la bonne phrase.", hero: "city/a110-m5" },
  { id: "m6", ic: "🌟", title: "Ma journée type", sub: "Présente ta journée en anglais.", hero: "city/a110-m6" },
];

const pick = (say, label, a, o) => ({ say, groups: [{ label, answer: a, opts: names(o) }] });
export const DATA_A110 = {
  m1: [
    pick("She helps sick people in a hospital.", "What is her job?", "nurse", ["nurse", "driver", "teacher", "engineer"]),
    pick("He teaches maths in a school.", "What is his job?", "teacher", ["teacher", "doctor", "boss", "driver"]),
    pick("He drives a bus.", "What is his job?", "driver", ["driver", "engineer", "nurse", "student"]),
    pick("She builds machines in a factory.", "What is her job?", "engineer", ["engineer", "teacher", "doctor", "nurse"]),
    pick("He studies at university.", "What is he?", "student", ["student", "boss", "driver", "colleague"]),
  ],
  m2: [
    pick("I have an exam on Friday.", "When is it?", "Friday", ["Friday", "Monday", "Sunday"]),
    pick("My favourite subject is history.", "Favourite subject:", "history", ["history", "maths", "art"]),
    pick("I do my homework in the library.", "Where?", "in the library", ["in the library", "at the office", "on the bus"]),
    pick("We have PE on Tuesday.", "On Tuesday:", "PE", ["PE", "maths", "science"]),
  ],
  m3: [
    { prompt: "Dis : « Je suis professeur. »", answer: ["I'm", "a", "teacher", "."], bank: ["teacher", "a", "I'm", "."] },
    { prompt: "Dis : « Je travaille dans un bureau. »", answer: ["I", "work", "in", "an", "office", "."], bank: ["office", "an", "I", "in", "work", "."] },
    { prompt: "Demande : « Où travaillez-vous ? »", answer: ["Where", "do", "you", "work", "?"], bank: ["work", "do", "Where", "you", "?"] },
    { prompt: "Dis : « Elle commence à neuf heures. »", answer: ["She", "starts", "at", "nine", "."], bank: ["nine", "at", "She", "starts", "."] },
    { prompt: "Dis : « Il ne travaille pas le dimanche. »", answer: ["He", "doesn't", "work", "on", "Sunday", "."], bank: ["Sunday", "on", "He", "work", "doesn't", "."] },
  ],
  m4: [
    pick("She ___ in a hospital.", "Form", "works", ["works", "work", "working"]),
    pick("They ___ English at school.", "Form", "study", ["study", "studies", "studying"]),
    pick("He ___ work at six.", "Form", "finishes", ["finishes", "finish", "finishs"]),
    pick("___ she work on Sunday?", "Form", "Does", ["Does", "Do", "Is"]),
  ],
  m5: [
    pick("Tu commences à neuf heures.", "Say", "I start at nine.", ["I start at nine.", "I start on nine.", "I starts at nine."]),
    pick("Tu as une réunion lundi matin.", "Say", "I have a meeting on Monday morning.", ["I have a meeting on Monday morning.", "I have meeting in Monday.", "I am meeting Monday at."]),
    pick("Tu demandes le métier de quelqu'un.", "Say", "What do you do?", ["What do you do?", "What you do?", "What are you do?"]),
    pick("Tu dis que tu ne travailles pas le dimanche.", "Say", "I don't work on Sunday.", ["I don't work on Sunday.", "I no work Sunday.", "I doesn't work in Sunday."]),
  ],
  m6: [
    { prompt: "Présente ta journée.", card: [["Job", "teacher"], ["Place", "school"], ["Start", "8"]], answer: ["I'm a teacher.", "I work in a school.", "I start at eight."], bank: ["I'm a teacher.", "I'm a doctor.", "I work in a school.", "I work in a shop.", "I start at eight.", "I start at ten."] },
    { prompt: "Présente son travail.", card: [["Job", "nurse"], ["Place", "hospital"], ["Finish", "3"]], answer: ["She is a nurse.", "She works in a hospital.", "She finishes at three."], bank: ["She is a nurse.", "She is a driver.", "She works in a hospital.", "She works in a bank.", "She finishes at three.", "She finishes at ten."] },
  ],
};

balanceAll({ VOCAB_A110, GRAMMAR_A110, READING_A110, LISTENING_A110, EXERCISES_A110, EXPRESSION_A110, TEST_TEXTS_A110, TEST_AUDIOS_A110, TEST_GRAMMAR_A110, DATA_A110 });
