// The Roots — A1.6 « Food and Drinks » : contenu texte complet. Mêmes formats qu'A1.1–A1.5. À relire par un natif.
// Images à fournir : lesson/scene-a16-*.webp et city/a16-m1..m6.webp.
import { balanceAll } from "./balance.js";
const names = (a) => a.map((n) => ({ v: n, label: n }));

export const VOCAB_A16 = [
  { kind: "greetings", title: "Parler de ce qu'on mange", icon: "🍽️",
    tip: "“I eat…” = je mange. “I drink…” = je bois. “I have…” s'emploie aussi pour un repas : “I have breakfast.”",
    examples: [["I eat bread for breakfast.", "Je mange du pain au petit-déjeuner."], ["I drink water every day.", "Je bois de l'eau tous les jours."], ["What do you eat?", "Qu'est-ce que tu manges ?"]],
    practice: "Écoute et répète la phrase.", say: "I eat bread and I drink juice for breakfast." },
  { kind: "words", title: "Les aliments", icon: "🥖", scene: ["scene-a16-food", "Une table avec pain, riz, viande, poisson, légumes"],
    words: [["bread", "pain"], ["rice", "riz"], ["meat", "viande"], ["fish", "poisson"], ["vegetables", "légumes"], ["fruit", "fruits"]],
    tip: "“Fruit” et “bread” ne prennent pas de -s : “some fruit”, “some bread”.",
    examples: [["I like fish and rice.", "J'aime le poisson et le riz."], ["We eat vegetables every day.", "Nous mangeons des légumes tous les jours."]],
    q: ["“Vegetables” veut dire…", ["légumes", "fruits", "viande"], 0] },
  { kind: "words", title: "Les boissons", icon: "🥤", scene: ["scene-a16-drinks", "Un comptoir avec eau, café, thé, jus"],
    words: [["water", "eau"], ["coffee", "café"], ["tea", "thé"], ["juice", "jus"], ["milk", "lait"], ["lemonade", "limonade"]],
    tip: "“Coffee” se prononce « kofi ». On dit “a cup of tea” / “a glass of water”.",
    examples: [["I drink tea in the morning.", "Je bois du thé le matin."], ["A glass of milk, please.", "Un verre de lait, s'il vous plaît."]],
    q: ["“Juice” veut dire…", ["jus", "lait", "thé"], 0] },
  { kind: "words", title: "Les repas", icon: "🍳", scene: ["scene-a16-meals", "Trois tables : petit-déj, déjeuner, dîner"],
    words: [["breakfast", "petit-déjeuner"], ["lunch", "déjeuner"], ["dinner", "dîner"], ["snack", "goûter / en-cas"], ["hungry", "avoir faim"], ["thirsty", "avoir soif"]],
    tip: "On dit “I have breakfast” (sans “the”). Et “I am hungry” (pas “I have hunger”).",
    examples: [["I have lunch at noon.", "Je déjeune à midi."], ["I am hungry!", "J'ai faim !"]],
    q: ["« J'ai faim » se dit…", ["I am hungry.", "I have hunger.", "I am hunger."], 0] },
  { kind: "words", title: "Les quantités", icon: "🥛", scene: ["scene-a16-quantity", "Verre, morceau de gâteau, bol, assiette"],
    words: [["some", "du / de la / des"], ["a lot of", "beaucoup de"], ["a little", "un peu"], ["a piece of", "un morceau de"], ["a glass of", "un verre de"], ["a bottle of", "une bouteille de"]],
    tip: "On ne dit pas “a bread” : on dit “a piece of bread” ou “some bread”.",
    examples: [["I want a glass of water.", "Je veux un verre d'eau."], ["She eats a lot of fruit.", "Elle mange beaucoup de fruits."]],
    q: ["“A piece of cake” veut dire…", ["un morceau de gâteau", "un verre de gâteau", "du gâteau"], 0] },
  { kind: "words", title: "Au restaurant", icon: "🍕", scene: ["scene-a16-restaurant", "Un serveur et une table dans un restaurant"],
    words: [["menu", "carte"], ["waiter / waitress", "serveur / serveuse"], ["a table for two", "une table pour deux"], ["Can I have…?", "Puis-je avoir… ?"], ["I'd like…", "Je voudrais…"], ["the bill, please", "l'addition, s'il vous plaît"]],
    tip: "“I'd like…” est plus poli que “I want…”. “I'd” = “I would”.",
    examples: [["I'd like a pizza, please.", "Je voudrais une pizza, s'il vous plaît."], ["The bill, please.", "L'addition, s'il vous plaît."]],
    q: ["Pour être poli, on dit…", ["I'd like a tea.", "I want a tea.", "Give me tea."], 0] },
  { kind: "words", title: "Goûts et saveurs", icon: "😋", scene: ["scene-a16-taste", "Des enfants qui goûtent des plats"],
    words: [["delicious", "délicieux"], ["sweet", "sucré"], ["salty", "salé"], ["hot / cold", "chaud / froid"], ["fresh", "frais"], ["spicy", "épicé"]],
    tip: "“Delicious” = très bon. “It tastes good” = ça a bon goût.",
    examples: [["This soup is hot and delicious.", "Cette soupe est chaude et délicieuse."], ["I don't like spicy food.", "Je n'aime pas la nourriture épicée."]],
    q: ["“Salty” veut dire…", ["salé", "sucré", "épicé"], 0] },
];

export const GRAMMAR_A16 = [
  { title: "Dénombrable ou indénombrable", icon: "🔢",
    table: [["an apple / two apples", "dénombrable", "on peut compter"], ["water, bread, rice", "indénombrable", "pas de -s, pas de “a”"], ["a glass of water", "quantité", "unité de mesure"], ["some bread", "du pain", "some + indénombrable"]],
    examples: [["I eat an apple.", "Je mange une pomme."], ["I drink some water.", "Je bois de l'eau."]],
    qs: [["I have ___ apple.", ["an", "some", "a lot"], 0, "apple = dénombrable → an."], ["I drink ___ water.", ["a", "some", "an"], 1, "water est indénombrable → some."]] },
  { title: "Some et any", icon: "➕",
    table: [["some", "phrases affirmatives", "I have some bread."], ["any", "phrases négatives", "I don't have any milk."], ["any", "questions", "Do you have any fruit?"], ["some", "offre / demande", "Would you like some tea?"]],
    examples: [["There is some juice.", "Il y a du jus."], ["There isn't any rice.", "Il n'y a pas de riz."]],
    qs: [["I don't have ___ bread.", ["some", "any", "a"], 1, "Négatif → any."], ["I have ___ milk.", ["some", "any", "an"], 0, "Affirmatif → some."]] },
  { title: "I'd like et I want", icon: "🙏",
    table: [["I'd like a tea.", "Je voudrais un thé.", "poli"], ["I want a tea.", "Je veux un thé.", "direct (enfants / amis)"], ["Can I have a coffee?", "Puis-je avoir un café ?", "poli aussi"], ["Would you like some water?", "Voulez-vous de l'eau ?", "pour proposer"]],
    examples: [["I'd like a pizza, please.", "Je voudrais une pizza, s'il vous plaît."], ["Would you like some tea?", "Voulez-vous du thé ?"]],
    qs: [["Au restaurant, c'est plus poli :", ["I'd like a pizza.", "I want a pizza.", "Give me pizza."], 0, "I'd like = poli."]] },
  { title: "Beaucoup, un peu, pas assez", icon: "⚖️",
    table: [["a lot of", "beaucoup de", "I eat a lot of fruit."], ["a little", "un peu (indénombrable)", "a little milk"], ["a few", "quelques (dénombrable)", "a few apples"], ["not much / not many", "pas beaucoup", "I don't eat much meat."]],
    examples: [["She drinks a lot of water.", "Elle boit beaucoup d'eau."], ["I have a few apples.", "J'ai quelques pommes."]],
    qs: [["I have ___ apples. (quelques)", ["a few", "a little", "much"], 0, "apples = dénombrable → a few."], ["I want ___ milk. (un peu)", ["a little", "a few", "many"], 0, "milk = indénombrable → a little."]] },
  { title: "Like / love / hate + nourriture", icon: "❤️",
    table: [["I like pizza.", "J'aime la pizza.", "like + nom"], ["I love eating fruit.", "J'adore manger des fruits.", "love + -ing"], ["She hates fish.", "Elle déteste le poisson.", "he/she + s"], ["Do you like rice?", "Tu aimes le riz ?", "Do you like…?"]],
    examples: [["I like drinking tea.", "J'aime boire du thé."], ["He doesn't like spicy food.", "Il n'aime pas la nourriture épicée."]],
    qs: [["He ___ fish. (hate)", ["hate", "hates", "hating"], 1, "he → hates."], ["I love ___ tea. (drink)", ["drinking", "drink", "to drinks"], 0, "love + -ing."]] },
  { title: "Commander", icon: "🧾",
    table: [["I'd like…, please.", "Je voudrais…, s'il vous plaît.", "commander"], ["Can I have…?", "Puis-je avoir… ?", "demander"], ["That's all, thanks.", "C'est tout, merci.", "terminer"], ["The bill, please.", "L'addition, s'il vous plaît.", "payer"]],
    examples: [["Can I have a coffee, please?", "Puis-je avoir un café, s'il vous plaît ?"], ["That's all, thank you.", "C'est tout, merci."]],
    qs: [["___ I have a glass of water?", ["Can", "Do", "Am"], 0, "Can I have…?"], ["The ___, please. (l'addition)", ["bill", "menu", "table"], 0, "The bill, please."]] },
];

export const READING_A16 = [
  { who: "Emma", text: "Hi! I'm Emma. For breakfast I eat bread and I drink a glass of milk. For lunch I have rice and vegetables. I don't like fish. For dinner I eat some fruit.",
    fr: "Emma mange du pain et boit du lait au petit-déjeuner, du riz et des légumes au déjeuner, et des fruits au dîner. Elle n'aime pas le poisson.",
    qs: [["What does Emma drink for breakfast?", ["Milk", "Tea", "Juice"], 0, "A glass of milk."], ["Does she like fish?", ["Yes", "No", "We don't know"], 1, "She doesn't like fish."]] },
  { who: "Sam", text: "Hello! I'm Sam. I love pizza! I eat pizza every Friday with my friends. We drink lemonade. I don't like spicy food, so I never eat spicy pizza.",
    fr: "Sam adore la pizza et en mange chaque vendredi. Il n'aime pas l'épicé.",
    qs: [["When does Sam eat pizza?", ["Every Friday", "Every day", "Never"], 0, "Every Friday."], ["What does he drink?", ["Lemonade", "Water", "Coffee"], 0, "Lemonade."]] },
  { who: "Lily", text: "I'm Lily. I'm at a restaurant with my mum. The waiter says: 'Hello! Here is the menu.' I say: 'I'd like a soup, please.' My mum says: 'Can I have a tea?'",
    fr: "Lily et sa mère sont au restaurant. Lily commande une soupe, sa mère un thé.",
    qs: [["What does Lily order?", ["A soup", "A pizza", "A tea"], 0, "A soup."], ["What does her mum want?", ["A tea", "A coffee", "A juice"], 0, "A tea."]] },
  { who: "Omar", text: "Hi! I'm Omar. I'm very hungry! I have a piece of bread and some cheese. I don't have any milk. I drink a glass of water. Then I eat a lot of fruit.",
    fr: "Omar a très faim : pain, fromage, eau et beaucoup de fruits. Pas de lait.",
    qs: [["Is Omar hungry?", ["Yes", "No", "We don't know"], 0, "He is very hungry."], ["Does he have milk?", ["Yes", "No", "A little"], 1, "He doesn't have any milk."]] },
  { who: "Nina", text: "Hello! I'm Nina. My favourite meal is dinner. I eat chicken and rice with a lot of vegetables. It is delicious. I drink some tea after dinner.",
    fr: "Nina préfère le dîner : poulet, riz, légumes. Elle boit du thé ensuite.",
    qs: [["What is Nina's favourite meal?", ["Dinner", "Lunch", "Breakfast"], 0, "Dinner."], ["What does she drink after dinner?", ["Tea", "Water", "Milk"], 0, "Some tea."]] },
];

export const LISTENING_A16 = [
  { title: "Breakfast", text: "What do you have for breakfast? I have bread and a glass of milk. And you? I have an apple and some tea.",
    qs: [["What does the second speaker drink?", ["Milk", "Tea", "Juice"], 0, "A glass of milk."], ["What does the first speaker have?", ["An apple and tea", "Bread and milk", "Rice"], 0, "An apple and some tea."]] },
  { title: "At the restaurant", text: "Hello! A table for two, please. Here is the menu. I'd like a soup, please. And I'd like a pizza. Anything to drink? Water, please.",
    qs: [["How many people?", ["Two", "Three", "One"], 0, "A table for two."], ["What do they drink?", ["Water", "Juice", "Tea"], 0, "Water."]] },
  { title: "Can I have…?", text: "Can I have a coffee, please? Of course. Anything else? Yes, a piece of cake, please. That's all, thank you.",
    qs: [["What does the customer order to drink?", ["A coffee", "A tea", "Water"], 0, "A coffee."], ["What else does she order?", ["A piece of cake", "A pizza", "A soup"], 0, "A piece of cake."]] },
  { title: "Some or any?", text: "Do you have any milk? No, I don't. But I have some juice. OK, I'd like a glass of juice, please.",
    qs: [["Does the second speaker have milk?", ["No", "Yes", "A little"], 0, "No, I don't."], ["What does the first speaker choose?", ["Juice", "Milk", "Water"], 0, "A glass of juice."]] },
  { title: "Favourite food", text: "My favourite food is pasta. I eat it every Sunday. I love it with a lot of cheese. My brother hates cheese. He prefers rice.",
    qs: [["When does the speaker eat pasta?", ["Every Sunday", "Every day", "Never"], 0, "Every Sunday."], ["What does the speaker’s brother prefer?", ["Rice", "Pasta", "Pizza"], 0, "He prefers rice."]] },
  { title: "I'm thirsty", text: "I am very thirsty! Do you want some water? Yes, please. Or a lemonade? No, water is fine. Here is a glass of water.",
    qs: [["Is the first speaker thirsty?", ["Yes", "No", "A little"], 0, "Very thirsty."], ["What does the first speaker drink?", ["Water", "Lemonade", "Tea"], 0, "Water."]] },
  { title: "Spicy food", text: "Is this food spicy? Yes, a little. I don't like spicy food. Then I'd like the fish, please. It is not spicy. It is fresh and delicious.",
    qs: [["Does the customer like spicy food?", ["No", "Yes", "Sometimes"], 0, "He doesn't like it."], ["What does the customer choose?", ["The fish", "The soup", "The pizza"], 0, "The fish."]] },
  { title: "The bill", text: "The bill, please. Of course. That is twelve pounds. Here you are. Thank you very much. Have a nice day!",
    qs: [["What does the customer ask for?", ["The bill", "The menu", "A table"], 0, "The bill."], ["How much is it?", ["Twelve pounds", "Two pounds", "Twenty pounds"], 0, "Twelve pounds."]] },
];

export const EXERCISES_A16 = [
  { title: "Vocabulaire — Nourriture et boissons", help: "Choisis le sens correct.",
    qs: [["rice", ["riz", "pain", "viande"], 0, "Rice."], ["breakfast", ["petit-déjeuner", "déjeuner", "dîner"], 0, "Breakfast."], ["thirsty", ["avoir soif", "avoir faim", "avoir chaud"], 0, "Thirsty."], ["a glass of milk", ["un verre de lait", "une bouteille de lait", "du lait"], 0, "Glass."], ["delicious", ["délicieux", "salé", "froid"], 0, "Delicious."], ["the bill", ["l'addition", "la carte", "la table"], 0, "Bill."]] },
  { title: "Dénombrable / indénombrable", help: "a, an, some.",
    qs: [["I eat ___ apple.", ["an", "some", "a lot"], 0, "an apple."], ["I drink ___ water.", ["some", "an", "a"], 0, "some water."], ["I have ___ bread.", ["some", "an", "a few"], 0, "some bread."], ["She eats ___ banana.", ["a", "some", "an"], 0, "a banana."], ["We have ___ rice.", ["some", "a", "an"], 0, "some rice."]] },
  { title: "Some / any", help: "some = +, any = − et ?",
    qs: [["I have ___ milk.", ["some", "any", "a"], 0, "Affirmatif."], ["I don't have ___ juice.", ["any", "some", "an"], 0, "Négatif."], ["Do you have ___ bread?", ["any", "some", "a"], 0, "Question."], ["There isn't ___ rice.", ["any", "some", "an"], 0, "Négatif."], ["There is ___ tea.", ["some", "any", "a"], 0, "Affirmatif."]] },
  { title: "Quantités", help: "a lot of, a little, a few.",
    qs: [["I eat ___ fruit. (beaucoup)", ["a lot of", "a few", "many"], 0, "a lot of."], ["I have ___ apples. (quelques)", ["a few", "a little", "much"], 0, "a few."], ["I want ___ milk. (un peu)", ["a little", "a few", "many"], 0, "a little."], ["A ___ of water.", ["glass", "piece", "plate"], 0, "A glass."], ["A ___ of cake.", ["piece", "glass", "bottle"], 0, "A piece."]] },
  { title: "Commander", help: "I'd like, Can I have…",
    qs: [["___ like a tea, please.", ["I'd", "I", "I'm"], 0, "I'd like."], ["___ I have a coffee?", ["Can", "Do", "Am"], 0, "Can I have."], ["A table ___ two.", ["for", "of", "at"], 0, "A table for two."], ["That's ___ , thank you.", ["all", "every", "some"], 0, "That's all."], ["« L'addition, s'il vous plaît »", ["The bill, please.", "The menu, please.", "A table, please."], 0, "The bill."]] },
  { title: "Goûts", help: "like / love / hate.",
    qs: [["He ___ fish. (hate)", ["hates", "hate", "hating"], 0, "he → hates."], ["I love ___ tea. (drink)", ["drinking", "drink", "to drinks"], 0, "love + -ing."], ["Do you ___ rice?", ["like", "likes", "liking"], 0, "Do you like."], ["She doesn't ___ spicy food.", ["like", "likes", "liking"], 0, "doesn't + base."], ["It is very ___. (délicieux)", ["delicious", "salty", "cold"], 0, "Delicious."]] },
  { title: "Mise en situation", help: "Repas et restaurant.",
    qs: [["You are hungry. You say:", ["I am hungry.", "I have hunger.", "I am hunger."], 0, "I am hungry."], ["You want a polite order:", ["I'd like a pizza, please.", "Give pizza.", "I want pizza now."], 0, "Poli."], ["Soup is…", ["hot", "cold", "fresh"], 0, "Hot (en général)."], ["You have no milk:", ["I don't have any milk.", "I don't have some milk.", "I haven't a milk."], 0, "any."], ["Breakfast is…", ["the morning meal", "the evening meal", "a snack"], 0, "Matin."]] },
];

export const EXPRESSION_A16 = [
  { title: "Mes repas", icon: "🍳",
    prompts: ["Dis ce que tu manges au petit-déjeuner.", "Dis ce que tu bois.", "Dis ce que tu aimes.", "Dis ce que tu n'aimes pas."],
    model: "For breakfast I eat bread and I drink milk. I like fruit. I don't like fish.",
    checks: [["Le petit-déjeuner", "(for )?breakfast.*\\b(eat|have)\\b|\\bi (eat|have)\\s+\\w+"], ["Ce que tu bois", "\\bi drink\\s+\\w+"], ["Ce que tu aimes", "\\bi (really )?(like|love)\\s+\\w+"], ["Ce que tu n'aimes pas", "\\bi (don't|do not) like\\s+\\w+|\\bi hate\\s+\\w+"]] },
  { title: "Commande au restaurant", icon: "🍕",
    prompts: ["Demande une table.", "Commande un plat.", "Commande une boisson.", "Demande l'addition."],
    model: "A table for two, please. I'd like a pizza, please. Can I have a glass of water? The bill, please.",
    checks: [["Une table", "a table for \\w+"], ["Un plat", "i'?d like\\s+(a|an|some)\\s+\\w+"], ["Une boisson", "can i have\\s+(a|an|some)\\s+\\w+|(a )?glass of \\w+"], ["L'addition", "the bill"]] },
];

export const TEST_TEXTS_A16 = [
  { title: "Emma", text: "For breakfast I eat bread and I drink a glass of milk. For lunch I have rice and vegetables. I don't like fish. For dinner I eat some fruit.", q: [["What does she drink for breakfast?", ["Milk", "Tea", "Juice"], 0], ["Does she like fish?", ["Yes", "No", "Not stated"], 1], ["What does she eat for dinner?", ["Fruit", "Rice", "Bread"], 0]] },
  { title: "Sam", text: "I love pizza! I eat it every Friday with my friends. We drink lemonade. I don't like spicy food.", q: [["When does he eat pizza?", ["Every Friday", "Every day", "Never"], 0], ["What do they drink?", ["Lemonade", "Water", "Coffee"], 0], ["Does he like spicy food?", ["Yes", "No", "Not stated"], 1]] },
  { title: "Au restaurant", text: "I'm at a restaurant with my mum. I say: 'I'd like a soup, please.' My mum says: 'Can I have a tea?'", q: [["Where are they?", ["At a restaurant", "At school", "At home"], 0], ["What does the speaker order?", ["A soup", "A tea", "A pizza"], 0], ["What does the mum order?", ["A tea", "A soup", "A coffee"], 0]] },
  { title: "Omar a faim", text: "I'm very hungry! I have a piece of bread and some cheese. I don't have any milk. I drink a glass of water.", q: [["Is he hungry?", ["Yes", "No", "A little"], 0], ["Does he have milk?", ["Yes", "No", "A lot"], 1], ["What does he drink?", ["Water", "Juice", "Tea"], 0]] },
  { title: "Nina", text: "My favourite meal is dinner. I eat chicken and rice with a lot of vegetables. It is delicious. I drink some tea after dinner.", q: [["Her favourite meal:", ["Dinner", "Lunch", "Breakfast"], 0], ["What does she eat?", ["Chicken and rice", "Fish", "Pizza"], 0], ["What does she drink after dinner?", ["Tea", "Water", "Milk"], 0]] },
];

export const TEST_AUDIOS_A16 = [
  { script: "What do you have for breakfast? I have bread and a glass of milk. And you? I have an apple and some tea.", q: [["What does the second speaker drink?", ["Milk", "Tea", "Juice"], 0], ["What does the first speaker have?", ["An apple and tea", "Bread and milk", "Rice"], 0]] },
  { script: "A table for two, please. Here is the menu. I'd like a soup, please. And water, please.", q: [["How many people?", ["Two", "Three", "One"], 0], ["What does the customer drink?", ["Water", "Juice", "Tea"], 0]] },
  { script: "Can I have a coffee, please? Of course. Anything else? Yes, a piece of cake. That's all, thank you.", q: [["Drink ordered:", ["Coffee", "Tea", "Water"], 0], ["Food ordered:", ["Cake", "Pizza", "Soup"], 0]] },
  { script: "Do you have any milk? No, I don't. But I have some juice. OK, I'd like a glass of juice, please.", q: [["Does the second speaker have milk?", ["No", "Yes", "A little"], 0], ["What does the first speaker choose?", ["Juice", "Milk", "Water"], 0]] },
  { script: "The bill, please. That is twelve pounds. Here you are. Thank you very much.", q: [["What does the customer ask for?", ["The bill", "The menu", "A table"], 0], ["How much is it?", ["Twelve pounds", "Two pounds", "Twenty pounds"], 0]] },
];

export const TEST_GRAMMAR_A16 = [
  ["I eat ___ apple.", ["an", "some", "a lot"], 0], ["I drink ___ water.", ["some", "an", "a"], 0], ["I have ___ bread.", ["some", "an", "a few"], 0], ["She eats ___ banana.", ["a", "some", "an"], 0],
  ["I have ___ milk.", ["some", "any", "a"], 0], ["I don't have ___ juice.", ["any", "some", "an"], 0], ["Do you have ___ bread?", ["any", "some", "a"], 0], ["There isn't ___ rice.", ["any", "some", "an"], 0],
  ["I eat ___ fruit. (beaucoup)", ["a lot of", "a few", "many"], 0], ["I have ___ apples. (quelques)", ["a few", "a little", "much"], 0], ["I want ___ milk. (un peu)", ["a little", "a few", "many"], 0], ["A ___ of water.", ["glass", "piece", "plate"], 0],
  ["___ like a tea, please.", ["I'd", "I", "I'm"], 0], ["___ I have a coffee?", ["Can", "Do", "Am"], 0], ["A table ___ two.", ["for", "of", "at"], 0], ["That's ___ , thank you.", ["all", "every", "some"], 0],
  ["He ___ fish. (hate)", ["hates", "hate", "hating"], 0], ["I love ___ tea. (drink)", ["drinking", "drink", "to drinks"], 0], ["Do you ___ rice?", ["like", "likes", "liking"], 0], ["She doesn't ___ spicy food.", ["like", "likes", "liking"], 0],
  ["“Breakfast” means…", ["petit-déjeuner", "déjeuner", "dîner"], 0], ["“Thirsty” means…", ["avoir soif", "avoir faim", "avoir froid"], 0], ["“The bill” means…", ["l'addition", "la carte", "la table"], 0], ["“Delicious” means…", ["délicieux", "salé", "froid"], 0],
  ["Would you like ___ tea?", ["some", "any", "an"], 0], ["I'm hungry. I want ___ bread.", ["some", "an", "a few"], 0], ["Pour être poli :", ["I'd like a pizza.", "I want pizza now.", "Give pizza."], 0], ["She ___ a lot of water.", ["drinks", "drink", "drinking"], 0],
  ["There ___ some milk.", ["is", "are", "am"], 0], ["There ___ some apples.", ["are", "is", "am"], 0],
];

export const MISSIONS_A16 = [
  { id: "m1", ic: "🍎", title: "Qu'est-ce que c'est ?", sub: "Écoute et choisis l'aliment ou la boisson.", hero: "city/a16-m1" },
  { id: "m2", ic: "🍽️", title: "Quel repas ?", sub: "Écoute et trouve le repas.", hero: "city/a16-m2" },
  { id: "m3", ic: "💬", title: "Construis la phrase", sub: "Remets les mots dans l'ordre.", hero: "city/a16-m3" },
  { id: "m4", ic: "➕", title: "Some ou any ?", sub: "Choisis le bon mot.", hero: "city/a16-m4" },
  { id: "m5", ic: "🧾", title: "Au restaurant", sub: "Choisis la bonne phrase pour commander.", hero: "city/a16-m5" },
  { id: "m6", ic: "🎉", title: "Le grand banquet", sub: "Commande un repas complet en anglais.", hero: "city/a16-m6" },
];

const pick = (say, label, a, o) => ({ say, groups: [{ label, answer: a, opts: names(o) }] });
export const DATA_A16 = {
  m1: [
    pick("It is white. You drink it. It comes from a cow.", "What is it?", "milk", ["milk", "tea", "juice", "rice"]),
    pick("You eat it with butter or jam. You make sandwiches with it.", "What is it?", "bread", ["bread", "fish", "water", "fruit"]),
    pick("It is hot. You drink it in the morning. It is brown.", "What is it?", "coffee", ["coffee", "juice", "lemonade", "milk"]),
    pick("It is small and white. You eat it with fish or chicken.", "What is it?", "rice", ["rice", "bread", "fruit", "tea"]),
    pick("It is red or green. You eat it. It is a fruit.", "What is it?", "apple", ["apple", "fish", "milk", "bread"]),
  ],
  m2: [
    pick("I eat bread and drink milk at 7 a.m.", "Meal", "breakfast", ["breakfast", "lunch", "dinner"]),
    pick("I eat rice and vegetables at noon.", "Meal", "lunch", ["lunch", "breakfast", "dinner"]),
    pick("I eat chicken at 8 p.m. with my family.", "Meal", "dinner", ["dinner", "breakfast", "lunch"]),
    pick("I eat a small apple at 4 p.m.", "Meal", "snack", ["snack", "dinner", "breakfast"]),
  ],
  m3: [
    { prompt: "Dis : « J'aime le poisson. »", answer: ["I", "like", "fish", "."], bank: ["fish", "I", "like", "."] },
    { prompt: "Dis : « Je voudrais un thé. »", answer: ["I'd", "like", "a", "tea", "."], bank: ["tea", "a", "I'd", "like", "."] },
    { prompt: "Demande : « Puis-je avoir un café ? »", answer: ["Can", "I", "have", "a", "coffee", "?"], bank: ["have", "coffee", "Can", "I", "a", "?"] },
    { prompt: "Dis : « Je n'ai pas de lait. »", answer: ["I", "don't", "have", "any", "milk", "."], bank: ["milk", "any", "I", "don't", "have", "."] },
    { prompt: "Dis : « Une table pour deux. »", answer: ["A", "table", "for", "two", "."], bank: ["for", "table", "A", "two", "."] },
  ],
  m4: [
    pick("I have ___ bread.", "Word", "some", ["some", "any", "an"]),
    pick("I don't have ___ juice.", "Word", "any", ["any", "some", "an"]),
    pick("Do you have ___ milk?", "Word", "any", ["any", "some", "a"]),
    pick("Would you like ___ tea?", "Word", "some", ["some", "any", "an"]),
    pick("There isn't ___ rice.", "Word", "any", ["any", "some", "an"]),
  ],
  m5: [
    pick("Tu veux une table pour deux personnes.", "Say", "A table for two, please.", ["A table for two, please.", "Table two give me.", "I table for two."]),
    pick("Tu veux commander une pizza poliment.", "Say", "I'd like a pizza, please.", ["I'd like a pizza, please.", "Give me pizza.", "I want pizza now."]),
    pick("Tu veux un verre d'eau.", "Say", "Can I have a glass of water?", ["Can I have a glass of water?", "I can water glass?", "Do I have water?"]),
    pick("Tu veux payer.", "Say", "The bill, please.", ["The bill, please.", "The menu, please.", "A table, please."]),
  ],
  m6: [
    { prompt: "Commande ton repas.", card: [["Food", "pizza"], ["Drink", "water"], ["Then", "bill"]], answer: ["I'd like", "a pizza,", "please.", "Can I have", "a glass of water?", "The bill, please."], bank: ["a pizza,", "a soup,", "I'd like", "please.", "Can I have", "a glass of water?", "The bill, please.", "The menu, please."] },
    { prompt: "Commande ton repas.", card: [["Food", "soup"], ["Drink", "tea"], ["Then", "bill"]], answer: ["I'd like", "a soup,", "please.", "Can I have", "a tea?", "The bill, please."], bank: ["a soup,", "a pizza,", "I'd like", "please.", "Can I have", "a tea?", "The bill, please.", "A table for two."] },
  ],
};

balanceAll({ VOCAB_A16, GRAMMAR_A16, READING_A16, LISTENING_A16, EXERCISES_A16, EXPRESSION_A16, TEST_TEXTS_A16, TEST_AUDIOS_A16, TEST_GRAMMAR_A16, MISSIONS_A16, DATA_A16 });
