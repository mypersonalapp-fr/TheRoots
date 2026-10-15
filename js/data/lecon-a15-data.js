// The Roots — A1.5 « Likes and Preferences » : contenu texte complet. Mêmes formats qu'A1.1–A1.4. À relire par un natif.
// Images à fournir : lesson/scene-a15-*.webp et city/a15-m1..m6.webp.
import { balanceAll } from "./balance.js";
const names = (a) => a.map((n) => ({ v: n, label: n }));

export const VOCAB_A15 = [
  { kind: "greetings", title: "Dire ce qu'on aime", icon: "❤️",
    tip: "“I like…” = j'aime bien. “I love…” = j'adore. Après like / love, on peut mettre un nom ou un verbe en -ing.",
    examples: [["I like music.", "J'aime la musique."], ["I love dancing.", "J'adore danser."], ["What do you like?", "Qu'est-ce que tu aimes ?"]],
    practice: "Écoute et répète la phrase.", say: "I like music and I love dancing." },
  { kind: "words", title: "Aimer et ne pas aimer", icon: "👍", scene: ["scene-a15-feelings", "Des enfants qui montrent pouce en haut / en bas"],
    words: [["like", "aimer bien"], ["love", "adorer"], ["hate", "détester"], ["don't mind", "ça m'est égal"], ["favourite", "préféré(e)"], ["prefer", "préférer"]],
    tip: "“Favourite” = préféré. “My favourite colour is blue.” (Aux États-Unis : “favorite”.)",
    examples: [["I hate waiting.", "Je déteste attendre."], ["My favourite food is pizza.", "Mon plat préféré est la pizza."]],
    q: ["“Hate” veut dire…", ["détester", "adorer", "préférer"], 0] },
  { kind: "words", title: "Les loisirs", icon: "🎨", scene: ["scene-a15-hobbies", "Une chambre avec livres, guitare et ballon"],
    words: [["reading", "lire"], ["cooking", "cuisiner"], ["dancing", "danser"], ["singing", "chanter"], ["travelling", "voyager"], ["drawing", "dessiner"]],
    tip: "Après like / love / hate, on ajoute -ing : “I like reading.” Pas “I like read”.",
    examples: [["She loves cooking.", "Elle adore cuisiner."], ["We like travelling.", "Nous aimons voyager."]],
    q: ["“Cooking” veut dire…", ["cuisiner", "dessiner", "chanter"], 0] },
  { kind: "words", title: "Le sport et la musique", icon: "🎵", scene: ["scene-a15-sport-music", "Un terrain de sport et un concert d'enfants"],
    words: [["football", "football"], ["swimming", "natation"], ["running", "courir"], ["pop / rock / jazz", "pop / rock / jazz"], ["guitar", "guitare"], ["concert", "concert"]],
    tip: "On dit “play the guitar”, “play football”, mais “go swimming”, “go running”.",
    examples: [["I play the guitar.", "Je joue de la guitare."], ["He goes running on Sundays.", "Il va courir le dimanche."]],
    q: ["On dit…", ["play the guitar", "go the guitar", "do the guitar"], 0] },
  { kind: "words", title: "Donner son opinion", icon: "💭", scene: ["scene-a15-opinions", "Une classe qui lève la main pour voter"],
    words: [["interesting", "intéressant"], ["boring", "ennuyeux"], ["fun", "amusant"], ["difficult", "difficile"], ["easy", "facile"], ["great / terrible", "génial / terrible"]],
    tip: "“Boring” = ennuyeux (la chose). “Bored” = qui s'ennuie (la personne).",
    examples: [["This film is great!", "Ce film est génial !"], ["English is easy for me.", "L'anglais est facile pour moi."]],
    q: ["“Boring” veut dire…", ["ennuyeux", "amusant", "facile"], 0] },
  { kind: "words", title: "Poser des questions de goûts", icon: "🗣️", scene: ["scene-a15-ask", "Deux amis qui discutent à une table"],
    words: [["Do you like…?", "Tu aimes… ?"], ["What's your favourite…?", "Quel est ton… préféré ?"], ["Me too!", "Moi aussi !"], ["Me neither.", "Moi non plus."], ["Really?", "Vraiment ?"], ["I prefer… to…", "Je préfère… à…"]],
    tip: "“Me too” répond à une phrase positive. “Me neither” répond à une phrase négative.",
    examples: [["I like pizza. — Me too!", "J'aime la pizza. — Moi aussi !"], ["I don't like fish. — Me neither.", "Je n'aime pas le poisson. — Moi non plus."]],
    q: ["« Moi non plus » se dit…", ["Me neither.", "Me too.", "Really?"], 0] },
];

export const GRAMMAR_A15 = [
  { title: "Like / love / hate + -ing", icon: "🔤",
    table: [["I like reading.", "J'aime lire.", "like + -ing"], ["She loves dancing.", "Elle adore danser.", "love + -ing"], ["They hate waiting.", "Ils détestent attendre.", "hate + -ing"], ["I don't mind cooking.", "Cuisiner m'est égal.", "don't mind + -ing"]],
    examples: [["I like swimming.", "J'aime nager."], ["He doesn't like running.", "Il n'aime pas courir."]],
    qs: [["I like ___ . (read)", ["read", "reading", "to reading"], 1, "like + -ing."], ["She loves ___ . (dance)", ["dancing", "dance", "dances"], 0, "love + -ing."]] },
  { title: "Do you like… ? (questions)", icon: "❓",
    table: [["Do you like music?", "Tu aimes la musique ?", "Do + sujet + verbe"], ["Does she like cooking?", "Elle aime cuisiner ?", "Does pour he / she"], ["What do you like?", "Qu'est-ce que tu aimes ?", ""], ["Why do you like it?", "Pourquoi tu l'aimes ?", ""]],
    examples: [["Do you like pizza? — Yes, I do.", "Tu aimes la pizza ? — Oui."], ["Does he like football? — No, he doesn't.", "Il aime le foot ? — Non."]],
    qs: [["___ you like jazz?", ["Do", "Does", "Are"], 0, "you → Do."], ["___ he like swimming?", ["Do", "Does", "Is"], 1, "he → Does."]] },
  { title: "Réponses courtes", icon: "✅",
    table: [["Yes, I do.", "Oui.", "Do you like…? → Yes, I do."], ["No, I don't.", "Non.", "No, I don't."], ["Yes, she does.", "Oui, elle.", "Does she…? → Yes, she does."], ["No, he doesn't.", "Non, lui.", "No, he doesn't."]],
    examples: [["Do you like tea? — No, I don't.", "Tu aimes le thé ? — Non."], ["Does she like cats? — Yes, she does.", "Elle aime les chats ? — Oui."]],
    qs: [["Do you like cats? — Yes, I ___.", ["do", "does", "like"], 0, "Yes, I do."], ["Does he like fish? — No, he ___.", ["don't", "doesn't", "isn't"], 1, "No, he doesn't."]] },
  { title: "What's your favourite… ?", icon: "⭐",
    table: [["What's your favourite colour?", "Quelle est ta couleur préférée ?", "favourite = préféré"], ["My favourite … is …", "Mon … préféré est …", "My favourite food is pizza."], ["What's his / her favourite…?", "Quel est son … préféré ?", ""], ["Who's your favourite singer?", "Qui est ton chanteur préféré ?", ""]],
    examples: [["My favourite sport is football.", "Mon sport préféré est le football."], ["Her favourite song is “Happy”.", "Sa chanson préférée est « Happy »."]],
    qs: [["What's your ___ colour?", ["favourite", "favourites", "like"], 0, "favourite."]] },
  { title: "Préférer", icon: "⚖️",
    table: [["I prefer tea.", "Je préfère le thé.", "prefer + nom"], ["I prefer reading to watching TV.", "Je préfère lire à regarder la télé.", "prefer A to B"], ["She prefers dancing.", "Elle préfère danser.", "he / she → prefers"], ["I'd rather stay home.", "Je préférerais rester.", "I'd rather + verbe"]],
    examples: [["He prefers football to tennis.", "Il préfère le foot au tennis."], ["I'd rather have a tea.", "Je préférerais un thé."]],
    qs: [["She ___ cooking.", ["prefer", "prefers", "preferring"], 1, "she → prefers."], ["I prefer tea ___ coffee.", ["to", "than", "of"], 0, "prefer A to B."]] },
  { title: "Moi aussi / Moi non plus", icon: "🤝",
    table: [["I like pop. — Me too!", "Moi aussi !", "phrase positive"], ["I don't like fish. — Me neither.", "Moi non plus.", "phrase négative"], ["I love dancing. — So do I.", "Moi aussi.", "so do I"], ["I hate waiting. — Really? I don't.", "Vraiment ? Pas moi.", ""]],
    examples: [["I like jazz. — Me too!", "J'aime le jazz. — Moi aussi !"], ["I don't like rain. — Me neither.", "Je n'aime pas la pluie. — Moi non plus."]],
    qs: [["I don't like cold weather. — Me ___.", ["neither", "too", "so"], 0, "Négatif → neither."], ["I love music. — Me ___!", ["too", "neither", "not"], 0, "Positif → too."]] },
];

export const READING_A15 = [
  { who: "Emma", text: "Hi! I'm Emma. I love reading and I like drawing. I hate cooking because it's boring. My favourite colour is purple. I don't mind running. I also like animals. I have a small cat.",
    fr: "Emma adore lire, aime dessiner, déteste cuisiner. Sa couleur préférée est le violet.  Elle aime aussi les animaux et a un petit chat.",
    qs: [["What does Emma love?", ["Reading", "Cooking", "Running"], 0, "I love reading."], ["What is her favourite colour?", ["Purple", "Blue", "Red"], 0, "Purple."]] },
  { who: "Sam", text: "Hello! I'm Sam. I like football and swimming. I prefer football to tennis. I don't like jazz, but I love pop music. My favourite singer is Adele. I play football with my friends every Saturday.",
    fr: "Sam aime le football et la natation ; il préfère le foot au tennis ; il aime la pop.  Il joue au foot avec ses amis le samedi.",
    qs: [["What does Sam prefer?", ["Football", "Tennis", "Swimming"], 0, "He prefers football to tennis."], ["Does he like jazz?", ["Yes", "No", "We don't know"], 1, "He doesn't like jazz."]] },
  { who: "Lily", text: "I'm Lily. Do you like music? I do! I play the guitar and I sing. I go to a concert every month. I think concerts are great and very fun. My friends like my songs and they clap.",
    fr: "Lily joue de la guitare, chante, va à un concert chaque mois.  Ses amis aiment ses chansons et applaudissent.",
    qs: [["What does Lily play?", ["The guitar", "The piano", "Football"], 0, "The guitar."], ["How often does she go to concerts?", ["Every month", "Every day", "Never"], 0, "Every month."]] },
  { who: "Omar", text: "Hi! I'm Omar. I love travelling. I like visiting new cities and meeting people. I prefer trains to planes. I don't like waiting at airports. It is boring. I take a lot of photos of the places I visit.",
    fr: "Omar adore voyager, préfère le train à l'avion et n'aime pas attendre aux aéroports.  Il prend beaucoup de photos des lieux qu'il visite.",
    qs: [["What does Omar prefer?", ["Trains", "Planes", "Cars"], 0, "He prefers trains to planes."], ["Why doesn't he like airports?", ["Waiting is boring", "They are far", "They are cheap"], 0, "Waiting is boring."]] },
  { who: "Nina", text: "Hello, I'm Nina. Do I like cooking? Yes, I do! I cook every Sunday. My favourite food is pasta. My brother doesn't like pasta, he prefers rice. I also like desserts, but I don't like coffee.",
    fr: "Nina adore cuisiner le dimanche ; sa nourriture préférée est les pâtes ; son frère préfère le riz.  Elle aime aussi les desserts mais pas le café.",
    qs: [["When does Nina cook?", ["Every Sunday", "Every day", "Never"], 0, "Every Sunday."], ["What does her brother prefer?", ["Rice", "Pasta", "Pizza"], 0, "He prefers rice."]] },
];

export const LISTENING_A15 = [
  { title: "What do you like?", text: "What do you like? I like music and dancing. Do you like sport? Yes, I do. I love football.",
    qs: [["What does the second speaker like?", ["Music and dancing", "Cooking", "Reading"], 0, "Music and dancing."], ["Does the second speaker love sport?", ["Yes", "No", "We don't know"], 0, "Yes, football."]] },
  { title: "Favourite colour", text: "What's your favourite colour? Blue. And my brother's favourite colour is green. We both like red too.",
    qs: [["What is the speaker’s favourite colour?", ["Blue", "Green", "Red"], 0, "Blue."], ["What is the speaker’s brother’s favourite colour?", ["Blue", "Green", "Red"], 1, "Green."]] },
  { title: "Me too", text: "I like pizza. Me too! I don't like fish. Me neither. I love chocolate. So do I!",
    qs: [["Do they like fish?", ["Yes", "No", "One yes, one no"], 1, "Both don't."], ["What do they both love?", ["Chocolate", "Pizza", "Fish"], 0, "Chocolate."]] },
  { title: "At the café", text: "Do you like tea? No, I don't. I prefer coffee. Really? I prefer tea. OK, one tea and one coffee, please.",
    qs: [["What does the first speaker prefer?", ["Coffee", "Tea", "Water"], 0, "Coffee."], ["What do they order?", ["Tea and coffee", "Two teas", "Two coffees"], 0, "One tea, one coffee."]] },
  { title: "A new film", text: "Do you like films? Yes, I do. This film is great! I think it is very funny. I don't like scary films. They are terrible.",
    qs: [["What does the second speaker think of the film?", ["Great and funny", "Boring", "Scary"], 0, "Great and funny."], ["What doesn’t the second speaker like?", ["Scary films", "Funny films", "Music"], 0, "Scary films."]] },
  { title: "My hobbies", text: "I love drawing. I like reading too. I don't like cooking. I hate running. My favourite hobby is dancing.",
    qs: [["What does the speaker hate?", ["Running", "Dancing", "Drawing"], 0, "Running."], ["What is the speaker’s favourite hobby?", ["Dancing", "Reading", "Drawing"], 0, "Dancing."]] },
  { title: "Football or tennis?", text: "Do you prefer football or tennis? I prefer football. I think tennis is difficult. Football is easy and fun.",
    qs: [["What does the second speaker prefer?", ["Football", "Tennis", "Swimming"], 0, "Football."], ["What does the second speaker think of tennis?", ["Difficult", "Easy", "Fun"], 0, "Difficult."]] },
  { title: "At a concert", text: "I love this concert! The music is great. Do you like the guitar? Yes, I do. It's my favourite instrument.",
    qs: [["What is the speaker’s favourite instrument?", ["The guitar", "The piano", "The drums"], 0, "The guitar."], ["What does the speaker think of the music?", ["Great", "Boring", "Terrible"], 0, "Great."]] },
];

export const EXERCISES_A15 = [
  { title: "Vocabulaire — Goûts et loisirs", help: "Choisis le sens correct.",
    qs: [["hate", ["détester", "adorer", "préférer"], 0, "Hate."], ["favourite", ["préféré", "difficile", "ennuyeux"], 0, "Favourite."], ["boring", ["ennuyeux", "amusant", "facile"], 0, "Boring."], ["cooking", ["cuisiner", "chanter", "voyager"], 0, "Cooking."], ["Me too!", ["Moi aussi !", "Moi non plus.", "Vraiment ?"], 0, "Me too."], ["I don't mind.", ["Ça m'est égal.", "Je déteste.", "J'adore."], 0, "Don't mind."]] },
  { title: "Verbe + -ing", help: "like / love / hate + -ing.",
    qs: [["I like ___ . (read)", ["reading", "read", "to reading"], 0, "like + -ing."], ["She loves ___ . (dance)", ["dancing", "dance", "dances"], 0, "love + -ing."], ["They hate ___ . (wait)", ["waiting", "wait", "waits"], 0, "hate + -ing."], ["He likes ___ . (swim)", ["swimming", "swiming", "swim"], 0, "swim → swimming."], ["We love ___ . (cook)", ["cooking", "cook", "cooks"], 0, "cooking."]] },
  { title: "Questions de goûts", help: "Do / Does + like.",
    qs: [["___ you like jazz?", ["Do", "Does", "Are"], 0, "you → Do."], ["___ she like cats?", ["Do", "Does", "Is"], 1, "she → Does."], ["What ___ you like?", ["do", "does", "are"], 0, "What do you like?"], ["Does he like fish? — Yes, he ___.", ["does", "do", "likes"], 0, "Yes, he does."], ["Do you like tea? — No, I ___.", ["don't", "doesn't", "not"], 0, "No, I don't."]] },
  { title: "Favourite et prefer", help: "favourite, prefer.",
    qs: [["What's your ___ food?", ["favourite", "favourites", "like"], 0, "Favourite."], ["I ___ tea to coffee.", ["prefer", "prefers", "preferring"], 0, "I prefer."], ["She ___ football.", ["prefer", "prefers", "like prefer"], 1, "she → prefers."], ["I prefer tea ___ coffee.", ["to", "than", "at"], 0, "prefer A to B."], ["My ___ sport is swimming.", ["favourite", "like", "prefer"], 0, "Favourite."]] },
  { title: "Opinions", help: "great, boring, easy…",
    qs: [["This film is ___. (génial)", ["great", "boring", "difficult"], 0, "Great."], ["Maths is ___. (difficile)", ["difficult", "easy", "fun"], 0, "Difficult."], ["It is not hard. It is ___.", ["easy", "difficult", "terrible"], 0, "Easy."], ["I don't like it. It is ___.", ["boring", "great", "fun"], 0, "Boring."], ["The match is very ___. (amusant)", ["fun", "boring", "terrible"], 0, "Fun."]] },
  { title: "Moi aussi / moi non plus", help: "Me too / Me neither.",
    qs: [["I like pizza. — Me ___!", ["too", "neither", "not"], 0, "Positif → too."], ["I don't like rain. — Me ___.", ["neither", "too", "so"], 0, "Négatif → neither."], ["I love dancing. — ___ do I!", ["So", "Neither", "Too"], 0, "So do I."], ["I hate waiting. — Me ___.", ["too", "neither", "not"], 0, "Positif (hate) → too."], ["I don't mind. — Me ___.", ["neither", "too", "so"], 0, "Négatif → neither."]] },
  { title: "Mise en situation", help: "Goûts et préférences.",
    qs: [["You love music. You say:", ["I love music.", "I hate music.", "I don't mind music."], 0, "Love."], ["You don't care about tea. You say:", ["I don't mind tea.", "I love tea.", "I hate tea."], 0, "Don't mind."], ["You ask your friend about sport:", ["Do you like sport?", "You like sport?", "Does you like sport?"], 0, "Do you like…?"], ["You prefer tea (not coffee):", ["I prefer tea to coffee.", "I prefer coffee to tea.", "I prefer tea than coffee."], 0, "Prefer A to B."], ["Your friend says “I love football.” You agree:", ["Me too!", "Me neither.", "Really? No."], 0, "Me too."]] },
];

export const EXPRESSION_A15 = [
  { title: "Ma fiche de préférences", icon: "⭐",
    prompts: ["Dis ce que tu aimes.", "Dis ce que tu n'aimes pas.", "Dis ta couleur ou nourriture préférée.", "Dis ce que tu préfères."],
    model: "I like reading. I don't like cooking. My favourite colour is blue. I prefer tea to coffee.",
    checks: [["Ce que tu aimes", "\\bi (really )?(like|love|enjoy)\\s+\\w+"], ["Ce que tu n'aimes pas", "\\bi (don't|do not) (like|mind)\\s+\\w+|\\bi hate\\s+\\w+"], ["Ton favori", "my favou?rite \\w+ is\\s+\\w+"], ["Ta préférence", "\\bi prefer\\s+\\w+|\\bi'd rather\\s+\\w+"]] },
  { title: "Interroge un ami", icon: "🗣️",
    prompts: ["Demande ce qu'il aime.", "Demande son favori.", "Demande ce qu'il préfère.", "Réagis avec « moi aussi »."],
    model: "Do you like music? What's your favourite colour? Do you prefer tea or coffee? Me too!",
    checks: [["Demander ce qu'il aime", "do you like\\s+\\w+|what do you like"], ["Son favori", "what'?s your favou?rite \\w+|what is your favou?rite \\w+"], ["Ce qu'il préfère", "do you prefer\\s+\\w+"], ["Moi aussi", "me too|me neither|so do i"]] },
];

export const TEST_TEXTS_A15 = [
  { title: "Emma", text: "I love reading and I like drawing. I hate cooking because it's boring. My favourite colour is purple.", q: [["What does she love?", ["Reading", "Cooking", "Running"], 0], ["What does she hate?", ["Cooking", "Drawing", "Reading"], 0], ["Her favourite colour:", ["Purple", "Blue", "Red"], 0]] },
  { title: "Sam", text: "I like football and swimming. I prefer football to tennis. I don't like jazz, but I love pop. My favourite singer is Adele.", q: [["What does he prefer?", ["Football", "Tennis", "Swimming"], 0], ["Does he like jazz?", ["Yes", "No", "Not stated"], 1], ["Who is his favourite singer?", ["Adele", "Sam", "Emma"], 0]] },
  { title: "Lily", text: "I play the guitar and I sing. I go to a concert every month. I think concerts are great and fun.", q: [["What does she play?", ["The guitar", "The piano", "Football"], 0], ["How often does she go to a concert?", ["Every month", "Every day", "Never"], 0], ["What does she think of concerts?", ["Great and fun", "Boring", "Terrible"], 0]] },
  { title: "Omar", text: "I love travelling. I prefer trains to planes. I don't like waiting at airports. It is boring.", q: [["What does he love?", ["Travelling", "Cooking", "Dancing"], 0], ["What does he prefer?", ["Trains", "Planes", "Cars"], 0], ["Why doesn't he like airports?", ["Waiting is boring", "They are far", "They are small"], 0]] },
  { title: "Nina", text: "I love cooking. I cook every Sunday. My favourite food is pasta. My brother doesn't like pasta, he prefers rice.", q: [["When does she cook?", ["Every Sunday", "Every day", "Never"], 0], ["Her favourite food:", ["Pasta", "Rice", "Pizza"], 0], ["What does her brother prefer?", ["Rice", "Pasta", "Fish"], 0]] },
];

export const TEST_AUDIOS_A15 = [
  { script: "What do you like? I like music and dancing. Do you like sport? Yes, I do. I love football.", q: [["What does the second speaker like?", ["Music and dancing", "Cooking", "Reading"], 0], ["Does the second speaker like sport?", ["Yes", "No", "Unknown"], 0]] },
  { script: "What's your favourite colour? Blue. And my brother's favourite colour is green.", q: [["The speaker’s favourite colour:", ["Blue", "Green", "Red"], 0], ["The speaker’s brother’s favourite colour:", ["Blue", "Green", "Red"], 1]] },
  { script: "I like pizza. Me too! I don't like fish. Me neither. I love chocolate. So do I!", q: [["Do they like fish?", ["Yes", "No", "One yes"], 1], ["What do they both love?", ["Chocolate", "Pizza", "Fish"], 0]] },
  { script: "Do you like tea? No, I don't. I prefer coffee. Really? I prefer tea.", q: [["What does the first speaker prefer?", ["Coffee", "Tea", "Water"], 0], ["What does the second speaker prefer?", ["Coffee", "Tea", "Water"], 1]] },
  { script: "Do you prefer football or tennis? I prefer football. I think tennis is difficult.", q: [["What does the second speaker prefer?", ["Football", "Tennis", "Swimming"], 0], ["What does the second speaker think of tennis?", ["Difficult", "Easy", "Fun"], 0]] },
];

export const TEST_GRAMMAR_A15 = [
  ["I like ___ . (read)", ["reading", "read", "to reading"], 0], ["She loves ___ . (dance)", ["dancing", "dance", "dances"], 0], ["They hate ___ . (wait)", ["waiting", "wait", "waits"], 0], ["___ you like jazz?", ["Do", "Does", "Are"], 0],
  ["___ she like cats?", ["Do", "Does", "Is"], 1], ["Does he like fish? — Yes, he ___.", ["does", "do", "likes"], 0], ["Do you like tea? — No, I ___.", ["don't", "doesn't", "not"], 0], ["What's your ___ colour?", ["favourite", "favourites", "like"], 0],
  ["She ___ cooking.", ["prefer", "prefers", "preferring"], 1], ["I prefer tea ___ coffee.", ["to", "than", "at"], 0], ["This film is ___. (génial)", ["great", "boring", "difficult"], 0], ["I like pizza. — Me ___!", ["too", "neither", "not"], 0],
  ["I don't like rain. — Me ___.", ["neither", "too", "so"], 0], ["I love dancing. — ___ do I!", ["So", "Neither", "Too"], 0], ["He ___ football. (like)", ["likes", "like", "liking"], 0], ["I ___ like fish. (négatif)", ["don't", "doesn't", "not"], 0],
  ["“Boring” means…", ["ennuyeux", "amusant", "facile"], 0], ["“Favourite” means…", ["préféré", "difficile", "ennuyeux"], 0], ["He ___ like cooking. (négatif)", ["doesn't", "don't", "isn't"], 0], ["I'd ___ stay home.", ["rather", "prefer", "like"], 0],
  ["What ___ you like?", ["do", "does", "are"], 0], ["Maths is not easy. It is ___.", ["difficult", "great", "fun"], 0], ["We love ___ . (travel)", ["travelling", "travel", "travels"], 0], ["I play ___ guitar.", ["the", "a", "—"], 0],
  ["He goes ___ on Sundays. (courir)", ["running", "run", "runs"], 0], ["Do you prefer tea ___ coffee?", ["or", "and", "to"], 0], ["She ___ music a lot.", ["loves", "love", "loving"], 0], ["I don't ___ waiting. (ça m'est égal)", ["mind", "like", "hate"], 0],
  ["Who's your favourite ___ ? (chanteur)", ["singer", "sing", "song"], 0], ["My brother ___ pasta. (déteste)", ["hates", "hate", "hating"], 0],
];

export const MISSIONS_A15 = [
  { id: "m1", ic: "👍", title: "J'aime / je n'aime pas", sub: "Écoute et choisis ce que la personne pense.", hero: "city/a15-m1" },
  { id: "m2", ic: "🎨", title: "Quel loisir ?", sub: "Écoute et trouve le loisir.", hero: "city/a15-m2" },
  { id: "m3", ic: "💬", title: "Construis la phrase", sub: "Remets les mots dans l'ordre.", hero: "city/a15-m3" },
  { id: "m4", ic: "🤝", title: "Moi aussi ?", sub: "Réponds avec Me too / Me neither.", hero: "city/a15-m4" },
  { id: "m5", ic: "⭐", title: "Mon favori", sub: "Choisis la bonne question ou réponse.", hero: "city/a15-m5" },
  { id: "m6", ic: "🎉", title: "La grande fête des goûts", sub: "Présente tes préférences en anglais.", hero: "city/a15-m6" },
];

const pick = (say, label, a, o) => ({ say, groups: [{ label, answer: a, opts: names(o) }] });
export const DATA_A15 = {
  m1: [
    pick("I love dancing. It is great!", "Feeling", "love", ["love", "hate", "don't mind"]),
    pick("I hate waiting. It is boring.", "Feeling", "hate", ["hate", "love", "like"]),
    pick("Cooking? I don't mind.", "Feeling", "don't mind", ["don't mind", "hate", "love"]),
    pick("I like swimming. It's fun.", "Feeling", "like", ["like", "hate", "don't mind"]),
    pick("I really love this song!", "Feeling", "love", ["love", "hate", "don't mind"]),
  ],
  m2: [
    pick("I play the guitar and I sing.", "Hobby", "music", ["music", "cooking", "drawing", "running"]),
    pick("I make pasta every Sunday.", "Hobby", "cooking", ["cooking", "dancing", "reading", "swimming"]),
    pick("I go to the pool.", "Hobby", "swimming", ["swimming", "cooking", "drawing", "singing"]),
    pick("I read a book every night.", "Hobby", "reading", ["reading", "running", "cooking", "dancing"]),
    pick("I draw with colours.", "Hobby", "drawing", ["drawing", "cooking", "swimming", "singing"]),
  ],
  m3: [
    { prompt: "Dis : « J'aime lire. »", answer: ["I", "like", "reading", "."], bank: ["reading", "I", "like", "."] },
    { prompt: "Dis : « Elle déteste cuisiner. »", answer: ["She", "hates", "cooking", "."], bank: ["hates", "cooking", "She", "."] },
    { prompt: "Demande : « Tu aimes la musique ? »", answer: ["Do", "you", "like", "music", "?"], bank: ["like", "music", "Do", "you", "?"] },
    { prompt: "Demande : « Quelle est ta couleur préférée ? »", answer: ["What's", "your", "favourite", "colour", "?"], bank: ["colour", "your", "What's", "favourite", "?"] },
    { prompt: "Dis : « Je préfère le thé au café. »", answer: ["I", "prefer", "tea", "to", "coffee", "."], bank: ["tea", "to", "I", "coffee", "prefer", "."] },
  ],
  m4: [
    pick("I like pizza.", "You say", "Me too!", ["Me too!", "Me neither."]),
    pick("I don't like fish.", "You say", "Me neither.", ["Me neither.", "Me too!"]),
    pick("I love football.", "You say", "Me too!", ["Me too!", "Me neither."]),
    pick("I don't like rain.", "You say", "Me neither.", ["Me neither.", "Me too!"]),
  ],
  m5: [
    pick("You ask: « Tu aimes le chocolat ? »", "Question", "Do you like chocolate?", ["Do you like chocolate?", "You like chocolate?", "Does you like chocolate?"]),
    pick("You ask: « Quel est ton sport préféré ? »", "Question", "What's your favourite sport?", ["What's your favourite sport?", "What is your like sport?", "Which sport you favourite?"]),
    pick("Do you like cats? — ", "Answer", "Yes, I do.", ["Yes, I do.", "Yes, I like.", "Yes, I does."]),
    pick("Does he like tea? — ", "Answer", "No, he doesn't.", ["No, he doesn't.", "No, he don't.", "No, he isn't."]),
  ],
  m6: [
    { prompt: "Présente tes goûts.", card: [["Like", "music"], ["Hate", "waiting"], ["Favourite", "blue"]], answer: ["I like", "music.", "I hate", "waiting.", "My favourite colour", "is blue."], bank: ["music.", "waiting.", "I like", "I hate", "is blue.", "My favourite colour", "I love", "is red."] },
    { prompt: "Présente ses goûts.", card: [["Name", "Anna"], ["Love", "dancing"], ["Prefer", "tea"]], answer: ["Anna", "loves dancing.", "She", "prefers tea.", "She doesn't", "like coffee."], bank: ["loves dancing.", "Anna", "She", "prefers tea.", "She doesn't", "like coffee.", "He", "love dancing."] },
  ],
};

balanceAll({ VOCAB_A15, GRAMMAR_A15, READING_A15, LISTENING_A15, EXERCISES_A15, EXPRESSION_A15, TEST_TEXTS_A15, TEST_AUDIOS_A15, TEST_GRAMMAR_A15, MISSIONS_A15, DATA_A15 });
