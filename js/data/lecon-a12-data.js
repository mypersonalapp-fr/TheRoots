// The Roots — A1.2 « Family » : Vocabulaire (7 pages) + Grammaire (6 pages). Même format qu'A1.1.
// À relire par un anglophone natif (fin de projet). q = [question, choix, bonne réponse, explication]

import { balanceAll } from "./balance.js";

export const VOCAB_A12 = [
  { kind: "greetings", title: "Présenter ma famille", icon: "👨‍👩‍👧",
    tip: "Pour présenter quelqu'un : “This is my…” (voici mon / ma…).",
    examples: [["This is my family.", "Voici ma famille."], ["This is my mother, Anna.", "Voici ma mère, Anna."], ["I have a big family.", "J'ai une grande famille."]],
    practice: "Écoute et répète la phrase.", say: "This is my family." },
  { kind: "words", title: "La famille proche", icon: "🏠", scene: ["scene-a12-close", "Un salon : « This is my family »"],
    words: [["mother / mum", "mère / maman"], ["father / dad", "père / papa"], ["brother", "frère"], ["sister", "sœur"], ["parents", "parents"], ["child / children", "enfant / enfants"]],
    tip: "“Parents” = père et mère. Attention : en anglais, “parents” ne veut PAS dire « famille ».",
    examples: [["My brother is ten.", "Mon frère a dix ans."], ["I have two sisters.", "J'ai deux sœurs."]],
    q: ["“Sister” veut dire…", ["sœur", "frère", "mère"], 0] },
  { kind: "words", title: "La famille élargie", icon: "🌳", scene: ["scene-a12-extended", "Un repas : grands-parents, oncle, cousins"],
    words: [["grandmother / grandma", "grand-mère / mamie"], ["grandfather / grandpa", "grand-père / papi"], ["uncle", "oncle"], ["aunt", "tante"], ["cousin", "cousin(e)"], ["grandchildren", "petits-enfants"]],
    tip: "“Cousin” est le même mot pour un garçon et une fille.",
    examples: [["My uncle lives in London.", "Mon oncle habite à Londres."], ["She is my cousin.", "C'est ma cousine."]],
    q: ["“Aunt” veut dire…", ["oncle", "tante", "cousine"], 1] },
  { kind: "words", title: "Mariage et relations", icon: "💍", scene: ["scene-a12-couple", "Un mariage : « He is my husband »"],
    words: [["husband", "mari"], ["wife", "épouse"], ["son", "fils"], ["daughter", "fille"], ["baby", "bébé"], ["married / single", "marié(e) / célibataire"]],
    tip: "“Daughter” = fille (ma fille). “Girl” = fille (une petite fille). Ne les mélange pas.",
    examples: [["She is married.", "Elle est mariée."], ["I have one son and one daughter.", "J'ai un fils et une fille."]],
    q: ["“Husband” veut dire…", ["mari", "fils", "oncle"], 0] },
  { kind: "words", title: "Les âges et les métiers", icon: "💼", scene: ["scene-a12-jobs", "Photos de famille : « What does he do? »"],
    words: [["teacher", "enseignant(e)"], ["doctor", "médecin"], ["nurse", "infirmier(ère)"], ["driver", "chauffeur"], ["engineer", "ingénieur(e)"], ["retired", "retraité(e)"]],
    tip: "Pour le métier : “What does he do?” (Que fait-il dans la vie ?) → “He is a teacher.” (a / an devant le métier).",
    examples: [["My father is a doctor.", "Mon père est médecin."], ["My grandma is retired.", "Ma grand-mère est retraitée."]],
    q: ["“She is a nurse.” → elle est…", ["infirmière", "médecin", "retraitée"], 0] },
  { kind: "words", title: "Décrire un proche", icon: "🙂", scene: ["scene-a12-describe", "Portraits : grand, petit, jeune, âgé"],
    words: [["tall / short", "grand / petit"], ["young / old", "jeune / âgé"], ["kind", "gentil"], ["funny", "drôle"], ["strong", "fort"], ["happy", "heureux"]],
    tip: "L'adjectif ne change jamais : “a kind man”, “kind women”. Pas de -s, pas de féminin.",
    examples: [["My dad is tall and funny.", "Mon père est grand et drôle."], ["My sisters are kind.", "Mes sœurs sont gentilles."]],
    q: ["“Funny” veut dire…", ["drôle", "fort", "âgé"], 0] },
  { kind: "words", title: "La maison familiale", icon: "🛋️", scene: ["scene-a12-house", "La maison : chaque pièce, chaque personne"],
    words: [["house", "maison"], ["living room", "salon"], ["kitchen", "cuisine"], ["bedroom", "chambre"], ["bathroom", "salle de bain"], ["garden", "jardin"]],
    tip: "“At home” = à la maison. On dit “I am at home”, sans “the”.",
    examples: [["My mum is in the kitchen.", "Ma mère est dans la cuisine."], ["We live in a big house.", "Nous habitons dans une grande maison."]],
    q: ["“Bedroom” veut dire…", ["chambre", "cuisine", "jardin"], 0] },
];

export const GRAMMAR_A12 = [
  { title: "Les possessifs", icon: "🔑",
    table: [["I → my", "my mother", "ma mère"], ["you → your", "your brother", "ton frère"], ["he → his", "his sister", "sa sœur (à lui)"], ["she → her", "her father", "son père (à elle)"], ["we → our", "our house", "notre maison"], ["they → their", "their children", "leurs enfants"]],
    examples: [["His mother is a nurse.", "Sa mère (à lui) est infirmière."], ["Her mother is a nurse.", "Sa mère (à elle) est infirmière."]],
    qs: [["Lily is a girl. ___ brother is Tom.", ["His", "Her", "Their"], 1, "Lily = she → her."], ["We love ___ house.", ["our", "we", "us"], 0, "we → our."]] },
  { title: "Le génitif ’s", icon: "🅢",
    table: [["Anna’s mother", "la mère d'Anna", "’s après le nom"], ["my father’s car", "la voiture de mon père", "’s aussi avec “my father”"], ["the children’s room", "la chambre des enfants", "pluriel irrégulier : ’s"], ["my parents’ house", "la maison de mes parents", "pluriel en -s : ’ seulement"]],
    examples: [["This is Tom’s sister.", "C'est la sœur de Tom."], ["It is my grandma’s kitchen.", "C'est la cuisine de ma grand-mère."]],
    qs: [["This is ___ bag. (Tom)", ["Tom’s", "Toms", "of Tom"], 0, "Possesseur + ’s. Jamais “of” pour une personne."]] },
  { title: "Les pluriels", icon: "➕",
    table: [["brother → brothers", "+ s", "règle générale"], ["family → families", "y → ies", "consonne + y"], ["child → children", "irrégulier", "à retenir"], ["man → men / woman → women", "irrégulier", "à retenir"], ["baby → babies", "y → ies", "consonne + y"]],
    examples: [["I have two brothers.", "J'ai deux frères."], ["There are three babies.", "Il y a trois bébés."]],
    qs: [["Two ___ (child)", ["childs", "children", "childes"], 1, "child → children."]] },
  { title: "There is / There are", icon: "📍",
    table: [["There is", "+ singulier", "There is a garden."], ["There are", "+ pluriel", "There are two bedrooms."], ["There isn’t / aren’t", "négation", "There isn’t a pool."], ["Is there…? / Are there…?", "question", "Are there children?"]],
    examples: [["There are five people in my family.", "Il y a cinq personnes dans ma famille."], ["Is there a kitchen? — Yes, there is.", "Y a-t-il une cuisine ? — Oui."]],
    qs: [["There ___ three bedrooms.", ["is", "are", "am"], 1, "Pluriel → are."]] },
  { title: "Les questions : have, how many, who", icon: "❓",
    table: [["How many…?", "Combien de… ?", "How many brothers do you have?"], ["Who…?", "Qui ?", "Who is she?"], ["Do you have…?", "As-tu… ?", "Do you have a sister?"], ["Does he have…?", "A-t-il… ?", "Does he have a cousin?"]],
    examples: [["How many sisters do you have? — I have two.", "Combien de sœurs as-tu ? — J'en ai deux."], ["Who is he? — He is my uncle.", "Qui est-ce ? — C'est mon oncle."]],
    qs: [["___ many cousins do you have?", ["How", "What", "Who"], 0, "How many = combien."], ["___ she have a brother?", ["Do", "Does", "Is"], 1, "she → Does."]] },
  { title: "Décrire avec be + adjectif", icon: "🎨",
    table: [["He is tall.", "Il est grand.", "be + adjectif"], ["They are kind.", "Ils sont gentils.", "adjectif invariable"], ["She is a kind woman.", "C'est une femme gentille.", "adjectif avant le nom"], ["He is a doctor.", "Il est médecin.", "a / an + métier"]],
    examples: [["My mother is a kind nurse.", "Ma mère est une infirmière gentille."], ["My brothers are tall.", "Mes frères sont grands."]],
    qs: [["My sisters ___ funny.", ["is", "are", "has"], 1, "Pluriel → are."], ["He is ___ engineer.", ["a", "an", "the"], 1, "engineer commence par une voyelle → an."]] },
];

export const READING_A12 = [
  { who: "Tom", text: "Hi! I'm Tom. I have a big family. I have two sisters and one brother. My father is a doctor and my mother is a teacher. We live in a house with a garden. On Sundays we eat lunch together.",
    fr: "Tom a une grande famille : deux sœurs, un frère, un père médecin et une mère enseignante. Ils habitent une maison avec jardin.  Le dimanche, ils déjeunent ensemble.",
    qs: [["How many sisters does Tom have?", ["One", "Two", "Three"], 1, "Two sisters and one brother."], ["What is Tom's father's job?", ["Teacher", "Doctor", "Nurse"], 1, "My father is a doctor."]] },
  { who: "Lily", text: "Hello! My name is Lily. My grandmother is seventy. She is retired and she is very kind. My grandfather is funny. They live in London, near our house. I like their big garden.",
    fr: "Lily a une grand-mère retraitée et gentille, un grand-père drôle ; ils habitent près de chez elle à Londres.  Elle aime leur grand jardin.",
    qs: [["Is Lily's grandmother retired?", ["Yes", "No", "We don't know"], 0, "She is retired."], ["Where do her grandparents live?", ["Paris", "London", "Madrid"], 1, "They live in London."]] },
  { who: "Sara", text: "Hi, I'm Sara. This is my husband, Paul. He is tall and strong. We have a baby daughter. Her name is Mia. She is one year old. She is very happy. We love our little family.",
    fr: "Sara présente son mari Paul, grand et fort, et leur bébé Mia, un an, très heureuse.  Ils adorent leur petite famille.",
    qs: [["Who is Mia?", ["Sara's sister", "Sara's daughter", "Sara's mother"], 1, "We have a baby daughter, Mia."], ["How old is Mia?", ["One", "Two", "Ten"], 0, "She is one year old."]] },
  { who: "Omar", text: "Good morning! I'm Omar. My uncle is an engineer. My aunt is a nurse. They have three children. My cousins are young: they are five, seven and nine. They are funny. We play together in the park.",
    fr: "Omar a un oncle ingénieur, une tante infirmière et trois jeunes cousins de 5, 7 et 9 ans.  Ils jouent ensemble au parc.",
    qs: [["What is Omar's aunt's job?", ["Nurse", "Engineer", "Driver"], 0, "My aunt is a nurse."], ["How many cousins does Omar have?", ["Two", "Three", "Nine"], 1, "They have three children."]] },
  { who: "Nina", text: "Hello! I'm Nina. In my house there are four bedrooms, a kitchen and a living room. There isn't a garden. My brother's room is small. My parents' room is big. I like my room because it is quiet.",
    fr: "Dans la maison de Nina : quatre chambres, une cuisine, un salon, pas de jardin ; la chambre de son frère est petite, celle de ses parents grande.  Elle aime sa chambre car elle est calme.",
    qs: [["How many bedrooms are there?", ["Two", "Four", "Five"], 1, "Four bedrooms."], ["Is there a garden?", ["Yes", "No", "We don't know"], 1, "There isn't a garden."]] },
];

export const LISTENING_A12 = [
  { title: "My family", text: "This is my family. This is my mother, Anna. She is a nurse. This is my father, Ben. He is a driver. I have one brother. His name is Max.",
    qs: [["What is the mother's job?", ["Nurse", "Teacher", "Doctor"], 0, "She is a nurse."], ["What is the brother's name?", ["Ben", "Max", "Tom"], 1, "His name is Max."]] },
  { title: "At the door", text: "Who is he? He is my uncle. Does he live here? No, he doesn't. He lives in Manchester. Is he married? Yes, he is. He has two children.",
    qs: [["Who is he?", ["The speaker’s uncle", "The speaker’s brother", "The speaker’s father"], 0, "He is my uncle."], ["Where does he live?", ["London", "Manchester", "Paris"], 1, "In Manchester."], ["How many children does he have?", ["One", "Two", "Three"], 1, "Two children."]] },
  { title: "Grandma's birthday", text: "Today is my grandmother's birthday. She is seventy-five. The whole family is here: my parents, my aunt, my uncle and my cousins. We are in the garden.",
    qs: [["How old is grandma?", ["Seventy", "Seventy-five", "Eighty"], 1, "Seventy-five."], ["Where is the family?", ["In the kitchen", "In the garden", "At school"], 1, "In the garden."]] },
  { title: "How many?", text: "How many brothers do you have? I have two brothers and one sister. And you? I don't have brothers. I have three sisters.",
    qs: [["How many brothers does the first speaker have?", ["One", "Two", "Three"], 1, "Two brothers."], ["How many sisters does the second speaker have?", ["One", "Two", "Three"], 2, "Three sisters."]] },
  { title: "The new house", text: "Our new house is big. There are three bedrooms and a big kitchen. There is a living room too. My bedroom is next to my sister's bedroom. There isn't a garden.",
    qs: [["How many bedrooms are there?", ["Two", "Three", "Four"], 1, "Three bedrooms."], ["Is there a garden?", ["Yes", "No", "We don't know"], 1, "There isn't a garden."]] },
  { title: "Who is who?", text: "My father is tall and funny. My mother is short and kind. My grandfather is old but strong. My little sister is a baby. She is very happy.",
    qs: [["Who is funny?", ["The father", "The mother", "The baby"], 0, "My father is tall and funny."], ["Who is a baby?", ["The sister", "The mother", "The grandfather"], 0, "My little sister is a baby."]] },
  { title: "Jobs in the family", text: "My dad is an engineer. My mum is a doctor. My grandma is retired. My uncle is a teacher. My aunt is a driver.",
    qs: [["What is the mum's job?", ["Doctor", "Driver", "Teacher"], 0, "My mum is a doctor."], ["Who is retired?", ["Grandma", "Uncle", "Dad"], 0, "My grandma is retired."]] },
  { title: "Family photo", text: "Look at this photo. This is my husband and these are our children: our son Leo and our daughter Zoe. Leo is nine and Zoe is six. They are my parents' grandchildren.",
    qs: [["How old is Leo?", ["Six", "Nine", "Twelve"], 1, "Leo is nine."], ["Who is Zoe?", ["The daughter", "The wife", "The aunt"], 0, "Our daughter Zoe."]] },
];

export const EXERCISES_A12 = [
  { title: "Vocabulaire — La famille", help: "Choisis le sens correct.",
    qs: [["grandfather", ["grand-père", "oncle", "frère"], 0, "Grandfather = grand-père."], ["aunt", ["cousine", "tante", "sœur"], 1, "Aunt = tante."], ["husband", ["fils", "mari", "père"], 1, "Husband = mari."], ["children", ["enfants", "parents", "cousins"], 0, "Child → children."], ["retired", ["fatigué", "retraité", "marié"], 1, "Retired = retraité(e)."], ["kitchen", ["chambre", "cuisine", "salon"], 1, "Kitchen = cuisine."]] },
  { title: "Possessifs", help: "Choisis le bon possessif.",
    qs: [["Tom is a boy. ___ sister is Lily.", ["His", "Her", "Their"], 0, "Tom = he → his."], ["Anna is a girl. ___ father is a doctor.", ["His", "Her", "Our"], 1, "Anna = she → her."], ["We love ___ grandma.", ["our", "we", "their"], 0, "we → our."], ["They live in ___ house.", ["them", "their", "they"], 1, "they → their."], ["I love ___ family.", ["my", "me", "I"], 0, "I → my."]] },
  { title: "’s et pluriels", help: "Génitif et pluriels.",
    qs: [["This is ___ car. (my father)", ["my father’s", "my fathers", "of my father"], 0, "Possesseur + ’s."], ["Two ___ (baby)", ["babys", "babies", "baby"], 1, "baby → babies."], ["Three ___ (child)", ["childs", "children", "childrens"], 1, "child → children."], ["The ___ room is small. (children)", ["children’s", "childrens’", "child’s"], 0, "Pluriel irrégulier → ’s."], ["Two ___ (sister)", ["sisters", "sisteres", "sisterys"], 0, "+ s."]] },
  { title: "There is / There are", help: "Complète avec is ou are.",
    qs: [["There ___ a garden.", ["is", "are", "am"], 0, "Singulier → is."], ["There ___ two bedrooms.", ["is", "are", "have"], 1, "Pluriel → are."], ["___ there a kitchen? — Yes, there is.", ["Is", "Are", "Do"], 0, "Is there… ?"], ["There ___ any children. (non)", ["aren’t", "isn’t", "don’t"], 0, "any children → pluriel → aren’t."], ["___ there three bedrooms?", ["Is", "Are", "Does"], 1, "Are there… ?"]] },
  { title: "Questions sur la famille", help: "Choisis la bonne question.",
    qs: [["___ many brothers do you have?", ["How", "What", "Who"], 0, "How many = combien."], ["___ is she? — She is my aunt.", ["Who", "Where", "How"], 0, "Who = qui."], ["___ he have a sister?", ["Do", "Does", "Is"], 1, "he → Does."], ["___ you have cousins?", ["Do", "Does", "Are"], 0, "you → Do."], ["What does your mother do? —", ["She is a nurse.", "She is kind.", "She is in London."], 0, "What does… do = métier."]] },
  { title: "Décrire un proche", help: "be + adjectif, a / an.",
    qs: [["My brothers ___ tall.", ["is", "are", "has"], 1, "Pluriel → are."], ["She is ___ engineer.", ["a", "an", "the"], 1, "Voyelle → an."], ["He is ___ doctor.", ["a", "an", "—"], 0, "a doctor."], ["My sisters are ___.", ["kinds", "kind", "a kind"], 1, "Adjectif invariable."], ["Mon père est drôle :", ["My father funny is.", "My father is funny.", "My father are funny."], 1, "Sujet + is + adjectif."]] },
  { title: "Mise en situation", help: "Famille, maison, métiers.",
    qs: [["Your mother’s mother is your…", ["aunt", "grandmother", "cousin"], 1, "Grandmother."], ["Your uncle’s son is your…", ["brother", "cousin", "grandson"], 1, "Cousin."], ["Where do you cook?", ["bedroom", "kitchen", "garden"], 1, "Kitchen."], ["A person who helps sick people in a hospital:", ["driver", "nurse", "engineer"], 1, "Nurse."], ["“Single” means…", ["marié", "célibataire", "retraité"], 1, "Single = célibataire."]] },
];

export const EXPRESSION_A12 = [
  { title: "Présente ta famille", icon: "👨‍👩‍👧",
    prompts: ["Dis combien de frères et sœurs tu as.", "Présente ta mère ou ton père.", "Dis son métier.", "Dis comment il / elle est."],
    model: "I have two sisters. This is my mother. She is a nurse. She is kind and funny.",
    checks: [["Frères et sœurs", "\\bi (have|don't have|do not have)\\b.*\\b(brother|sister|brothers|sisters)\\b"], ["Ta mère / ton père", "this is my (mother|mum|father|dad|parents)"], ["Son métier", "(he|she) is an? \\w+|(he|she)'s an? \\w+"], ["Comment il / elle est", "(he|she) is \\w+( and \\w+)?|(he|she)'s \\w+"]] },
  { title: "Décris ta maison", icon: "🏠",
    prompts: ["Dis combien de chambres il y a.", "Dis s'il y a un jardin.", "Dis où est ta mère.", "Dis où tu habites."],
    model: "There are three bedrooms. There is a garden. My mother is in the kitchen. I live in Paris.",
    checks: [["Les chambres", "there (are|is) \\w+ bedrooms?"], ["Le jardin", "there (is|isn't|is not) a garden"], ["Où est ta mère", "my (mother|mum|father|dad) is in the \\w+"], ["Où tu habites", "i live in \\w+"]] },
];

export const TEST_TEXTS_A12 = [
  { title: "La famille de Tom", text: "Hi! I'm Tom. I have two sisters and one brother. My father is a doctor. My mother is a teacher. We live in a house with a garden.", q: [["How many sisters does Tom have?", ["One", "Two", "Three"], 1], ["What is Tom's mother's job?", ["Teacher", "Doctor", "Nurse"], 0], ["Is there a garden?", ["Yes", "No", "Not stated"], 0]] },
  { title: "Les grands-parents de Lily", text: "My name is Lily. My grandmother is seventy and retired. My grandfather is funny. They live near our house in London. I like their big garden.", q: [["Who is retired?", ["Her grandmother", "Her mother", "Her aunt"], 0], ["Where do they live?", ["Paris", "London", "Madrid"], 1], ["How old is her grandmother?", ["Sixty", "Seventy", "Eighty"], 1]] },
  { title: "Sara et Mia", text: "I'm Sara. This is my husband, Paul. We have a baby daughter, Mia. She is one year old and very happy. We love our little family.", q: [["Who is Paul?", ["Her husband", "Her brother", "Her father"], 0], ["Who is Mia?", ["Their daughter", "Their sister", "Their mother"], 0], ["How old is Mia?", ["One", "Two", "Three"], 0]] },
  { title: "Les cousins d'Omar", text: "I'm Omar. My uncle is an engineer and my aunt is a nurse. They have three children. My cousins are five, seven and nine. We play together in the park.", q: [["What is his uncle's job?", ["Engineer", "Nurse", "Driver"], 0], ["How many cousins are there?", ["Two", "Three", "Nine"], 1], ["Who is a nurse?", ["His aunt", "His uncle", "His father"], 0]] },
  { title: "La maison de Nina", text: "There are four bedrooms in my house, a kitchen and a living room. There isn't a garden. My brother's room is small. My room is next to the kitchen. I like my house.", q: [["How many bedrooms are there?", ["Two", "Four", "Five"], 1], ["Is there a garden?", ["Yes", "No", "Not stated"], 1], ["Whose room is small?", ["Her brother's", "Her mother's", "Her sister's"], 0]] },
];

export const TEST_AUDIOS_A12 = [
  { script: "This is my family. My mother is a nurse. My father is a driver. I have one brother. His name is Max.", q: [["What is the father's job?", ["Driver", "Nurse", "Doctor"], 0], ["What is the brother's name?", ["Ben", "Max", "Tom"], 1], ["How many brothers does the speaker have?", ["One", "Two", "Three"], 0]] },
  { script: "Who is he? He is my uncle. He lives in Manchester. He is married and he has two children.", q: [["Who is he?", ["The speaker’s uncle", "The speaker’s father", "The speaker’s cousin"], 0], ["Where does he live?", ["London", "Manchester", "Paris"], 1], ["How many children does he have?", ["One", "Two", "Three"], 1]] },
  { script: "Today is my grandmother's birthday. She is seventy-five. The family is in the garden.", q: [["How old is she?", ["Seventy", "Seventy-five", "Eighty"], 1], ["Where is the family?", ["In the garden", "In the kitchen", "At school"], 0]] },
  { script: "Our new house is big. There are three bedrooms and a big kitchen. There isn't a garden.", q: [["How many bedrooms are there?", ["Two", "Three", "Four"], 1], ["Is there a garden?", ["Yes", "No", "Unknown"], 1]] },
  { script: "My dad is tall and funny. My mum is short and kind. My little sister is a baby. She is very happy.", q: [["Who is funny?", ["The dad", "The mum", "The baby"], 0], ["Who is a baby?", ["The sister", "The mum", "The dad"], 0]] },
];

export const TEST_GRAMMAR_A12 = [
  ["Anna is a girl. ___ brother is Tom.", ["His", "Her", "Their"], 1], ["We love ___ grandma.", ["our", "we", "us"], 0], ["They live in ___ house.", ["their", "them", "they"], 0], ["I love ___ family.", ["my", "me", "I"], 0],
  ["Tom is a boy. ___ sister is Lily.", ["His", "Her", "Our"], 0], ["This is ___ car. (my father)", ["my father’s", "my fathers", "of my father"], 0], ["Two ___ (baby)", ["babys", "babies", "babyes"], 1], ["Three ___ (child)", ["childs", "children", "childes"], 1],
  ["The ___ room is small. (children)", ["children’s", "childrens’", "childs"], 0], ["Two ___ (brother)", ["brothers", "brotheres", "brotherys"], 0], ["There ___ a garden.", ["is", "are", "have"], 0], ["There ___ two bedrooms.", ["is", "are", "has"], 1],
  ["___ there a kitchen?", ["Is", "Are", "Do"], 0], ["___ there three bedrooms?", ["Is", "Are", "Does"], 1], ["There ___ a pool. (non)", ["isn’t", "aren’t", "don’t"], 0], ["___ many cousins do you have?", ["How", "What", "Who"], 0],
  ["___ is she? — She is my aunt.", ["Who", "Where", "How"], 0], ["___ he have a sister?", ["Do", "Does", "Is"], 1], ["___ you have brothers?", ["Do", "Does", "Are"], 0], ["My sisters ___ tall.", ["is", "are", "has"], 1],
  ["She is ___ engineer.", ["a", "an", "the"], 1], ["He is ___ doctor.", ["a", "an", "—"], 0], ["My brothers are ___.", ["kinds", "kind", "a kind"], 1], ["My father ___ a teacher.", ["is", "are", "am"], 0],
  ["Your mother’s mother is your ___.", ["aunt", "grandmother", "cousin"], 1], ["Your uncle’s son is your ___.", ["brother", "cousin", "grandson"], 1], ["Where do you cook?", ["In the bedroom", "In the kitchen", "In the garden"], 1], ["“Single” means…", ["marié", "célibataire", "retraité"], 1],
  ["My parents’ house is ___.", ["big", "bigs", "a big"], 0], ["She ___ two brothers.", ["have", "has", "is"], 1],
];

balanceAll({ VOCAB_A12, GRAMMAR_A12, READING_A12, LISTENING_A12, EXERCISES_A12, EXPRESSION_A12, TEST_TEXTS_A12, TEST_AUDIOS_A12, TEST_GRAMMAR_A12 });
