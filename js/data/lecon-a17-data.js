// The Roots — A1.7 « Shopping » : contenu texte complet. Mêmes formats qu'A1.1–A1.6. À relire par un natif.
// Images à fournir : lesson/scene-a17-*.webp et city/a17-m1..m6.webp.
import { balanceAll } from "./balance.js";
const names = (a) => a.map((n) => ({ v: n, label: n }));

export const VOCAB_A17 = [
  { kind: "greetings", title: "Faire les magasins", icon: "🛍️",
    tip: "“Can I help you?” est la phrase du vendeur. Réponse simple : “I'm just looking, thanks.” (Je regarde, merci.)",
    examples: [["Can I help you?", "Puis-je vous aider ?"], ["I'm just looking, thanks.", "Je regarde, merci."], ["I'd like a blue shirt, please.", "Je voudrais une chemise bleue, s'il vous plaît."]],
    practice: "Écoute et répète la phrase.", say: "Hello! I'd like a blue shirt, please." },
  { kind: "words", title: "Les vêtements", icon: "👕", scene: ["scene-a17-clothes", "Un magasin de vêtements : chemise, robe, veste"],
    words: [["shirt", "chemise"], ["trousers", "pantalon"], ["dress", "robe"], ["jacket", "veste"], ["shoes", "chaussures"], ["bag", "sac"]],
    tip: "“Trousers” et “shoes” sont toujours au pluriel : “These trousers are blue.”",
    examples: [["I like this dress.", "J'aime cette robe."], ["These shoes are new.", "Ces chaussures sont neuves."]],
    q: ["“Jacket” veut dire…", ["veste", "robe", "sac"], 0] },
  { kind: "words", title: "Les couleurs et les tailles", icon: "🎨", scene: ["scene-a17-sizes", "Des vêtements de couleurs et tailles différentes"],
    words: [["size", "taille"], ["small / medium / large", "petit / moyen / grand"], ["too big", "trop grand"], ["too small", "trop petit"], ["colour", "couleur"], ["Do you have it in…?", "Vous l'avez en… ?"]],
    tip: "“Size” = taille d'un vêtement. “Height” = taille d'une personne.",
    examples: [["It's too small. Do you have a larger size?", "C'est trop petit. Vous avez une taille au-dessus ?"], ["Do you have it in blue?", "Vous l'avez en bleu ?"]],
    q: ["« Trop grand » se dit…", ["too big", "too small", "too much"], 0] },
  { kind: "words", title: "Les prix", icon: "💶", scene: ["scene-a17-prices", "Des étiquettes de prix vierges sur des articles"],
    words: [["price", "prix"], ["cheap", "bon marché"], ["expensive", "cher"], ["How much is it?", "Combien ça coûte ?"], ["pound / euro / dollar", "livre / euro / dollar"], ["on sale", "en solde"]],
    tip: "“Expensive” = cher (qui coûte beaucoup). “Cheap” = pas cher. Attention : “dear” existe mais se dit moins.",
    examples: [["How much is this jacket?", "Combien coûte cette veste ?"], ["It's twenty pounds.", "Ça coûte vingt livres."]],
    q: ["“Expensive” veut dire…", ["cher", "bon marché", "en solde"], 0] },
  { kind: "words", title: "Payer", icon: "💳", scene: ["scene-a17-pay", "Une caisse avec carte et espèces"],
    words: [["pay", "payer"], ["cash", "espèces"], ["card", "carte"], ["receipt", "ticket de caisse"], ["change", "monnaie"], ["till / checkout", "caisse"]],
    tip: "“Can I pay by card?” = Puis-je payer par carte ? “By cash” = en espèces.",
    examples: [["Can I pay by card?", "Puis-je payer par carte ?"], ["Here is your receipt.", "Voici votre ticket."]],
    q: ["“Cash” veut dire…", ["espèces", "carte", "monnaie"], 0] },
  { kind: "words", title: "Essayer et choisir", icon: "🪞", scene: ["scene-a17-fitting", "Un enfant devant un miroir de cabine d'essayage"],
    words: [["try on", "essayer"], ["fitting room", "cabine d'essayage"], ["fit", "aller (taille)"], ["I'll take it", "Je le prends"], ["I don't like it", "Je ne l'aime pas"], ["another one", "un autre"]],
    tip: "“Try on” = essayer un vêtement. “Try” seul = essayer / goûter quelque chose.",
    examples: [["Can I try it on?", "Puis-je l'essayer ?"], ["It fits well. I'll take it!", "Ça me va bien. Je le prends !"]],
    q: ["« Je le prends » se dit…", ["I'll take it.", "I try it.", "I make it."], 0] },
  { kind: "words", title: "Les magasins", icon: "🏬", scene: ["scene-a17-shops", "Une rue commerçante avec boutiques"],
    words: [["shop / store", "magasin"], ["supermarket", "supermarché"], ["market", "marché"], ["bakery", "boulangerie"], ["shopping centre", "centre commercial"], ["open / closed", "ouvert / fermé"]],
    tip: "“Shop” est britannique, “store” est américain. Les deux se comprennent.",
    examples: [["The shop is open.", "Le magasin est ouvert."], ["I go to the market on Saturdays.", "Je vais au marché le samedi."]],
    q: ["“Closed” veut dire…", ["fermé", "ouvert", "cher"], 0] },
];

export const GRAMMAR_A17 = [
  { title: "This / that / these / those", icon: "👉",
    table: [["this", "ceci (près, singulier)", "this shirt"], ["that", "cela (loin, singulier)", "that bag"], ["these", "ceux-ci (près, pluriel)", "these shoes"], ["those", "ceux-là (loin, pluriel)", "those trousers"]],
    examples: [["I like this dress.", "J'aime cette robe."], ["Those shoes are expensive.", "Ces chaussures-là sont chères."]],
    qs: [["___ shoes are blue. (près)", ["These", "This", "That"], 0, "Pluriel + près = these."], ["I like ___ bag over there.", ["that", "this", "these"], 0, "Loin + singulier = that."]] },
  { title: "Le comparatif (court)", icon: "📏",
    table: [["big → bigger", "+ er", "doublement de la consonne"], ["small → smaller", "+ er", "mot court"], ["cheap → cheaper", "+ er", "mot court"], ["…than", "que", "bigger than"]],
    examples: [["This jacket is bigger than that one.", "Cette veste est plus grande que celle-là."], ["The shirt is cheaper than the dress.", "La chemise est moins chère que la robe."]],
    qs: [["This bag is ___ than that bag. (small)", ["smaller", "more small", "smallest"], 0, "small → smaller."], ["The coat is ___ the jacket. (cheap)", ["cheaper than", "more cheap", "cheap than"], 0, "cheaper than."]] },
  { title: "Le comparatif (long)", icon: "💎",
    table: [["expensive", "more expensive", "more + adjectif long"], ["beautiful", "more beautiful", ""], ["good → better", "irrégulier", "à retenir"], ["bad → worse", "irrégulier", "à retenir"]],
    examples: [["The dress is more expensive than the shirt.", "La robe est plus chère que la chemise."], ["This bag is better than that one.", "Ce sac est meilleur que celui-là."]],
    qs: [["The coat is ___ the shirt. (expensive)", ["more expensive than", "expensiver than", "most expensive"], 0, "more + long adjectif."], ["This one is ___. (good)", ["better", "gooder", "more good"], 0, "good → better."]] },
  { title: "How much is it?", icon: "💰",
    table: [["How much is it?", "Combien ça coûte ? (singulier)", "How much is this bag?"], ["How much are they?", "Combien ils coûtent ? (pluriel)", "How much are these shoes?"], ["It's ten pounds.", "Ça coûte dix livres.", ""], ["They're twenty euros.", "Ils coûtent vingt euros.", ""]],
    examples: [["How much is this jacket? — It's forty pounds.", "Combien coûte cette veste ? — Quarante livres."], ["How much are these shoes? — They're fifty euros.", "Combien coûtent ces chaussures ? — Cinquante euros."]],
    qs: [["How much ___ these shoes?", ["are", "is", "am"], 0, "Pluriel → are."], ["How much ___ this bag?", ["is", "are", "do"], 0, "Singulier → is."]] },
  { title: "Do you have… ?", icon: "🔎",
    table: [["Do you have this in blue?", "Vous l'avez en bleu ?", "Do you have…?"], ["Do you have a larger size?", "Vous avez une taille au-dessus ?", ""], ["Yes, we do. / No, we don't.", "Oui / Non.", "réponse courte"], ["Can I try it on?", "Puis-je l'essayer ?", "Can I…?"]],
    examples: [["Do you have these shoes in size 38?", "Vous avez ces chaussures en 38 ?"], ["Yes, we do.", "Oui, nous en avons."]],
    qs: [["___ you have this in red?", ["Do", "Does", "Are"], 0, "you → Do."], ["Can I ___ it on?", ["try", "tries", "trying"], 0, "Can I + base."]] },
  { title: "Trop et assez", icon: "⚖️",
    table: [["too big", "trop grand", "too + adjectif"], ["too expensive", "trop cher", ""], ["not big enough", "pas assez grand", "not + adjectif + enough"], ["just right", "parfait", "ni trop, ni trop peu"]],
    examples: [["This shirt is too small.", "Cette chemise est trop petite."], ["It isn't big enough.", "Ce n'est pas assez grand."]],
    qs: [["It costs 200 pounds. It is ___ expensive.", ["too", "enough", "very much"], 0, "too expensive."], ["The bag is ___. (pas assez grand)", ["not big enough", "not enough big", "too not big"], 0, "not big enough."]] },
];

export const READING_A17 = [
  { who: "Emma", text: "Hi! I'm Emma. I'm at a clothes shop. I like this blue dress. How much is it? It's thirty pounds. It's too small. Do you have a bigger size? Yes, we do. I'll take it! The shop assistant is very kind. I pay by card and I say thank you.",
    fr: "Emma essaie une robe bleue à 30 livres ; trop petite, elle prend la taille au-dessus.  La vendeuse est très gentille ; Emma paie par carte et remercie.",
    qs: [["How much is the dress?", ["Thirty pounds", "Thirteen pounds", "Fifty pounds"], 0, "Thirty pounds."], ["What is the problem with the first dress?", ["It's too small", "It's too big", "It's too expensive"], 0, "Too small."]] },
  { who: "Sam", text: "Hello! I'm Sam. I want new shoes. These black shoes are cheaper than those white shoes. But the white shoes are nicer. I can't decide. I try on both pairs. My sister likes the white shoes. I look at the prices again.",
    fr: "Sam hésite entre des chaussures noires bon marché et des blanches plus jolies.  Sa sœur aime les blanches ; il regarde encore les prix.",
    qs: [["Which shoes are cheaper?", ["The black shoes", "The white shoes", "The red shoes"], 0, "The black shoes."], ["What does Sam do?", ["He tries on both pairs", "He leaves", "He buys nothing"], 0, "He tries on both."]] },
  { who: "Lily", text: "I'm Lily. I go to the market on Saturdays. I buy fruit and vegetables. The market is cheaper than the supermarket. I pay in cash. I always take a bag. My mum likes the fresh fish. The seller is friendly and he says hello.",
    fr: "Lily va au marché le samedi : c'est moins cher que le supermarché ; elle paie en espèces.  Sa mère aime le poisson frais ; le vendeur est aimable.",
    qs: [["When does Lily go to the market?", ["On Saturdays", "On Sundays", "Every day"], 0, "On Saturdays."], ["How does she pay?", ["In cash", "By card", "She doesn't pay"], 0, "In cash."]] },
  { who: "Omar", text: "Hi, I'm Omar. I'm at the checkout. The total is twenty-five euros. Can I pay by card? Yes, of course. Here is your receipt. Thank you, goodbye! The cashier is polite. I put the receipt in my pocket and go home.",
    fr: "Omar paie 25 euros par carte et reçoit son ticket.  La caissière est polie ; il range le ticket dans sa poche.",
    qs: [["How much is the total?", ["Twenty-five euros", "Fifteen euros", "Fifty euros"], 0, "Twenty-five."], ["How does he pay?", ["By card", "In cash", "He doesn't pay"], 0, "By card."]] },
  { who: "Nina", text: "Hello! I'm Nina. I like shopping. I often go to the shopping centre with my friends. We try on clothes. Today I buy a jacket. It is on sale. It is half price! My friend buys a bag and a hat. They are cheap. We are very happy.",
    fr: "Nina aime faire les boutiques avec ses amies ; aujourd'hui elle achète une veste en solde à moitié prix.  Son amie achète un sac et un chapeau, pas chers ; elles sont ravies.",
    qs: [["What does Nina buy?", ["A jacket", "A dress", "Shoes"], 0, "A jacket."], ["Why is it cheap?", ["It is on sale", "It is old", "It is small"], 0, "On sale."]] },
];

export const LISTENING_A17 = [
  { title: "Can I help you?", text: "Hello! Can I help you? Yes, please. I'd like a blue shirt. What size? Medium. Here you are. Thank you.",
    qs: [["What does the customer want?", ["A blue shirt", "A red dress", "Shoes"], 0, "A blue shirt."], ["What size?", ["Medium", "Small", "Large"], 0, "Medium."]] },
  { title: "How much?", text: "How much is this bag? It's twenty pounds. Oh, that is too expensive. How much are those? They are ten pounds. OK, I'll take them.",
    qs: [["How much is the first bag?", ["Twenty pounds", "Ten pounds", "Two pounds"], 0, "Twenty."], ["What does the customer decide?", ["To buy the cheaper bags", "Not to buy", "To buy the expensive bag"], 0, "I'll take them."]] },
  { title: "Too big", text: "How is it? It's too big. Do you have a smaller size? Yes, we do. Here is a small one. It fits well, thank you.",
    qs: [["What is the problem?", ["It's too big", "It's too small", "It's too expensive"], 0, "Too big."], ["Does the small one fit?", ["Yes", "No", "We don't know"], 0, "It fits well."]] },
  { title: "Pay by card", text: "That is thirty euros, please. Can I pay by card? Of course. Here is your receipt. Have a nice day!",
    qs: [["How much is it?", ["Thirty euros", "Thirteen euros", "Three euros"], 0, "Thirty."], ["How does the customer pay?", ["By card", "In cash", "By phone"], 0, "By card."]] },
  { title: "Colour", text: "Do you have this in red? I'm sorry, we don't. But we have it in blue and green. I prefer green. OK, I'll take the green one.",
    qs: [["Do they have red?", ["No", "Yes", "A little"], 0, "We don't."], ["What does the customer buy?", ["The green one", "The blue one", "The red one"], 0, "Green."]] },
  { title: "On sale", text: "This jacket is on sale. It is half price. It was forty pounds. Now it is twenty. That is great! I'll take it.",
    qs: [["How much is the jacket now?", ["Twenty pounds", "Forty pounds", "Ten pounds"], 0, "Twenty."], ["Why is it cheap?", ["It is on sale", "It is old", "It is small"], 0, "On sale."]] },
  { title: "The fitting room", text: "Can I try on these trousers? Of course. The fitting room is over there. They are too long. Do you have a shorter size?",
    qs: [["What does the customer want to try on?", ["Trousers", "A dress", "Shoes"], 0, "Trousers."], ["What is the problem?", ["They are too long", "They are too short", "They are too expensive"], 0, "Too long."]] },
  { title: "At the supermarket", text: "Excuse me, where is the bread? It is next to the milk. Thank you. And the checkout? It is over there. We close in ten minutes.",
    qs: [["What does the customer look for?", ["The bread", "The milk", "The checkout"], 0, "The bread."], ["Where is it?", ["Next to the milk", "Opposite the door", "Far away"], 0, "Next to the milk."]] },
];

export const EXERCISES_A17 = [
  { title: "Vocabulaire — Magasins et vêtements", help: "Choisis le sens correct.",
    qs: [["shirt", ["chemise", "pantalon", "robe"], 0, "Shirt."], ["trousers", ["pantalon", "chaussures", "veste"], 0, "Trousers."], ["cheap", ["bon marché", "cher", "grand"], 0, "Cheap."], ["receipt", ["ticket de caisse", "monnaie", "carte"], 0, "Receipt."], ["try on", ["essayer", "payer", "choisir"], 0, "Try on."], ["closed", ["fermé", "ouvert", "cher"], 0, "Closed."]] },
  { title: "This / that / these / those", help: "près ou loin, singulier ou pluriel.",
    qs: [["___ shoes here are new.", ["These", "This", "That"], 0, "Pluriel + près."], ["___ bag over there is big.", ["That", "These", "Those"], 0, "Singulier + loin."], ["___ jacket (dans ma main) is red.", ["This", "That", "Those"], 0, "Singulier + près."], ["___ trousers over there are long.", ["Those", "That", "These"], 0, "Pluriel + loin."], ["I like ___ dress here.", ["this", "these", "those"], 0, "This."]] },
  { title: "Comparatifs", help: "-er / more…",
    qs: [["This bag is ___ than that bag. (big)", ["bigger", "more big", "biggest"], 0, "bigger."], ["The dress is ___ than the shirt. (expensive)", ["more expensive", "expensiver", "most expensive"], 0, "more expensive."], ["The shirt is ___ than the dress. (cheap)", ["cheaper", "more cheap", "cheapest"], 0, "cheaper."], ["This one is ___ than that one. (good)", ["better", "gooder", "more good"], 0, "better."], ["It is ___ than I think. (small)", ["smaller", "more small", "smallest"], 0, "smaller."]] },
  { title: "Prix", help: "How much is / are…",
    qs: [["How much ___ this bag?", ["is", "are", "do"], 0, "Singulier."], ["How much ___ these shoes?", ["are", "is", "does"], 0, "Pluriel."], ["It ___ ten pounds.", ["is", "are", "has"], 0, "It is."], ["They ___ twenty euros.", ["are", "is", "have"], 0, "They are."], ["« Combien ça coûte ? »", ["How much is it?", "How many is it?", "What price it?"], 0, "How much."]] },
  { title: "Do you have… ? Can I… ?", help: "Poser des questions en magasin.",
    qs: [["___ you have this in blue?", ["Do", "Does", "Are"], 0, "Do you have."], ["Can I ___ it on?", ["try", "tries", "trying"], 0, "Can I try."], ["Do you have a bigger ___?", ["size", "price", "bag"], 0, "Size."], ["Yes, we ___.", ["do", "does", "have"], 0, "Yes, we do."], ["Can I pay ___ card?", ["by", "in", "with the"], 0, "By card."]] },
  { title: "Trop et assez", help: "too, enough.",
    qs: [["It is ___ small for me.", ["too", "enough", "very much"], 0, "Too small."], ["It isn't big ___.", ["enough", "too", "much"], 0, "Not big enough."], ["It costs 500 pounds. It is ___ expensive.", ["too", "enough", "a little"], 0, "Too."], ["The size is ___. (parfait)", ["just right", "too right", "right too"], 0, "Just right."], ["It is not ___. (assez bon marché)", ["cheap enough", "enough cheap", "too cheap"], 0, "Cheap enough."]] },
  { title: "Mise en situation", help: "Au magasin.",
    qs: [["You want to pay with your card:", ["Can I pay by card?", "I pay card you?", "Card pay can I?"], 0, "Can I pay by card?"], ["You like the jacket and buy it:", ["I'll take it.", "I try it.", "I make it."], 0, "I'll take it."], ["It is too small:", ["Do you have a bigger size?", "Do you have a small size?", "Do you have a cheap size?"], 0, "Bigger."], ["It is half price:", ["It is on sale.", "It is cheap and big.", "It is closed."], 0, "On sale."], ["The shop is not open:", ["It is closed.", "It is cheap.", "It is small."], 0, "Closed."]] },
];

export const EXPRESSION_A17 = [
  { title: "Ma liste d'achats", icon: "📝",
    prompts: ["Dis ce que tu veux acheter.", "Dis la couleur.", "Dis ta taille.", "Demande le prix."],
    model: "I'd like a blue shirt, please. I'm size medium. How much is it?",
    checks: [["Ce que tu veux", "\\bi'?d like (a|an|some)\\s+\\w+|\\bi want (a|an|some)\\s+\\w+"], ["La couleur", "\\b(red|blue|green|black|white|yellow|pink|purple|orange|brown|grey|gray)\\b"], ["Ta taille", "\\b(size\\s+\\w+|small|medium|large)\\b"], ["Le prix", "how much (is|are)\\s+\\w+"]] },
  { title: "Au magasin (jeu de rôle)", icon: "🛍️",
    prompts: ["Demande à essayer.", "Dis si c'est trop grand ou trop petit.", "Choisis : « je le prends ».", "Demande à payer par carte."],
    model: "Can I try it on, please? It isn't too small. I'll take it. Can I pay by card?",
    checks: [["Essayer", "can i try (it|them|this|these) on"], ["Trop grand / petit", "too (big|small|long|short|expensive)"], ["Je le prends", "i'?ll take (it|them|this|these)"], ["Payer par carte", "can i pay by (card|cash)"]] },
];

export const TEST_TEXTS_A17 = [
  { title: "La robe d'Emma", text: "I like this blue dress. How much is it? It's thirty pounds. It's too small. Do you have a bigger size? Yes, we do. I'll take it! The shop assistant is very kind. I pay by card and I say thank you.", q: [["How much is the dress?", ["Thirty pounds", "Thirteen pounds", "Fifty pounds"], 0], ["What is the problem?", ["Too small", "Too big", "Too expensive"], 0], ["What does she do?", ["She buys the bigger size", "She leaves", "She buys nothing"], 0]] },
  { title: "Les chaussures de Sam", text: "These black shoes are cheaper than those white shoes. But the white shoes are nicer. I try on both pairs. My sister likes the white shoes. I look at the prices again.", q: [["Which shoes are cheaper?", ["Black", "White", "Red"], 0], ["Which shoes are nicer?", ["White", "Black", "Both"], 0], ["What does he do?", ["Tries on both pairs", "Leaves", "Pays"], 0]] },
  { title: "Le marché", text: "I go to the market on Saturdays. I buy fruit and vegetables. The market is cheaper than the supermarket. I pay in cash. My mum likes the fresh fish. The seller is friendly and he says hello.", q: [["When does the speaker go?", ["On Saturdays", "On Sundays", "Every day"], 0], ["Which is cheaper?", ["The market", "The supermarket", "The same"], 0], ["How does the speaker pay?", ["In cash", "By card", "Not stated"], 0]] },
  { title: "À la caisse", text: "The total is twenty-five euros. Can I pay by card? Yes, of course. Here is your receipt. Thank you, goodbye! The cashier is polite. I put the receipt in my pocket and go home.", q: [["What is the total?", ["Twenty-five euros", "Fifteen euros", "Fifty euros"], 0], ["How does the speaker pay?", ["By card", "In cash", "Not stated"], 0], ["What does the speaker get?", ["A receipt", "A bag", "Change"], 0]] },
  { title: "Les soldes", text: "I often go to the shopping centre with my friends. We try on clothes. Today I buy a jacket. It is on sale. It is half price! My friend buys a bag and a hat. They are cheap. We are very happy.", q: [["Where does the speaker go?", ["The shopping centre", "The market", "A café"], 0], ["What does the speaker buy?", ["A jacket", "A dress", "Shoes"], 0], ["Why is it cheap?", ["It is on sale", "It is old", "It is small"], 0]] },
];

export const TEST_AUDIOS_A17 = [
  { script: "Hello! Can I help you? Yes, please. I'd like a blue shirt. What size? Medium. Here you are. Thank you.", q: [["What does the customer want?", ["A blue shirt", "A red dress", "Shoes"], 0], ["What size?", ["Medium", "Small", "Large"], 0]] },
  { script: "How much is this bag? It's twenty pounds. That is too expensive. How much are those? They are ten pounds. OK, I'll take them.", q: [["First bag price:", ["Twenty pounds", "Ten pounds", "Two pounds"], 0], ["What does the customer decide?", ["Buy the cheaper bags", "Not to buy", "Buy the expensive one"], 0]] },
  { script: "It's too big. Do you have a smaller size? Yes, we do. Here is a small one. It fits well, thank you.", q: [["What is the problem?", ["Too big", "Too small", "Too expensive"], 0], ["Does the small one fit?", ["Yes", "No", "Unknown"], 0]] },
  { script: "That is thirty euros, please. Can I pay by card? Of course. Here is your receipt.", q: [["How much?", ["Thirty euros", "Thirteen euros", "Three euros"], 0], ["How does the customer pay?", ["By card", "In cash", "By phone"], 0]] },
  { script: "Do you have this in red? I'm sorry, we don't. But we have it in blue and green. I'll take the green one.", q: [["Do they have red?", ["No", "Yes", "A little"], 0], ["What does the customer buy?", ["The green one", "The blue one", "The red one"], 0]] },
];

export const TEST_GRAMMAR_A17 = [
  ["___ shoes here are new.", ["These", "This", "That"], 0], ["___ bag over there is big.", ["That", "These", "Those"], 0], ["___ trousers over there are long.", ["Those", "That", "These"], 0], ["I like ___ dress here.", ["this", "these", "those"], 0],
  ["This bag is ___ than that bag. (big)", ["bigger", "more big", "biggest"], 0], ["The dress is ___ than the shirt. (expensive)", ["more expensive", "expensiver", "most expensive"], 0], ["This one is ___ than that one. (good)", ["better", "gooder", "more good"], 0], ["The shirt is ___ than the dress. (cheap)", ["cheaper", "more cheap", "cheapest"], 0],
  ["How much ___ this bag?", ["is", "are", "do"], 0], ["How much ___ these shoes?", ["are", "is", "does"], 0], ["It ___ ten pounds.", ["is", "are", "has"], 0], ["They ___ twenty euros.", ["are", "is", "have"], 0],
  ["___ you have this in blue?", ["Do", "Does", "Are"], 0], ["Can I ___ it on?", ["try", "tries", "trying"], 0], ["Can I pay ___ card?", ["by", "in", "with the"], 0], ["Yes, we ___.", ["do", "does", "have"], 0],
  ["It is ___ small for me.", ["too", "enough", "very much"], 0], ["It isn't big ___.", ["enough", "too", "much"], 0], ["“Cheap” means…", ["bon marché", "cher", "grand"], 0], ["“Receipt” means…", ["ticket de caisse", "monnaie", "carte"], 0],
  ["“Closed” means…", ["fermé", "ouvert", "cher"], 0], ["“Try on” means…", ["essayer", "payer", "choisir"], 0], ["You like it and buy it:", ["I'll take it.", "I try it.", "I make it."], 0], ["It is half price:", ["It is on sale.", "It is closed.", "It is small."], 0],
  ["The jacket is too ___. (trop grande)", ["big", "bigger", "much"], 0], ["These trousers ___ new.", ["are", "is", "am"], 0], ["Do you have a ___ size?", ["bigger", "more big", "biggest"], 0], ["I'd like ___ blue shirt.", ["a", "an", "some"], 0],
  ["That is ___ expensive. (trop)", ["too", "enough", "much"], 0], ["She ___ shopping on Saturdays.", ["goes", "go", "going"], 0],
];

export const MISSIONS_A17 = [
  { id: "m1", ic: "👕", title: "Quel vêtement ?", sub: "Écoute et choisis le bon article.", hero: "city/a17-m1" },
  { id: "m2", ic: "💶", title: "Combien ça coûte ?", sub: "Écoute et choisis le bon prix.", hero: "city/a17-m2" },
  { id: "m3", ic: "💬", title: "Construis la phrase", sub: "Remets les mots dans l'ordre.", hero: "city/a17-m3" },
  { id: "m4", ic: "📏", title: "Plus grand, plus cher…", sub: "Choisis le bon comparatif.", hero: "city/a17-m4" },
  { id: "m5", ic: "💳", title: "À la caisse", sub: "Choisis la bonne phrase pour payer.", hero: "city/a17-m5" },
  { id: "m6", ic: "🛍️", title: "Le grand magasin", sub: "Achète un article en anglais.", hero: "city/a17-m6" },
];

const pick = (say, label, a, o) => ({ say, groups: [{ label, answer: a, opts: names(o) }] });
export const DATA_A17 = {
  m1: [
    pick("You wear it on your feet. It is a pair of…", "What is it?", "shoes", ["shoes", "shirt", "jacket", "bag"]),
    pick("It is long. You wear it on your legs.", "What is it?", "trousers", ["trousers", "dress", "shoes", "bag"]),
    pick("You put your things in it. You carry it.", "What is it?", "bag", ["bag", "shirt", "dress", "shoes"]),
    pick("It is warm. You wear it over your clothes.", "What is it?", "jacket", ["jacket", "shirt", "shoes", "bag"]),
    pick("It is a long piece of clothing for girls and women.", "What is it?", "dress", ["dress", "trousers", "shirt", "bag"]),
  ],
  m2: [
    pick("How much is this shirt? — It's ten pounds.", "Price", "10 pounds", ["10 pounds", "20 pounds", "13 pounds"]),
    pick("How much are the shoes? — They're forty euros.", "Price", "40 euros", ["40 euros", "14 euros", "50 euros"]),
    pick("The bag is fifteen dollars.", "Price", "15 dollars", ["15 dollars", "50 dollars", "5 dollars"]),
    pick("The jacket is on sale. It's only twenty pounds.", "Price", "20 pounds", ["20 pounds", "12 pounds", "200 pounds"]),
  ],
  m3: [
    { prompt: "Demande : « Combien ça coûte ? »", answer: ["How", "much", "is", "it", "?"], bank: ["much", "is", "How", "it", "?"] },
    { prompt: "Dis : « Je voudrais cette robe. »", answer: ["I'd", "like", "this", "dress", "."], bank: ["dress", "this", "I'd", "like", "."] },
    { prompt: "Demande : « Puis-je l'essayer ? »", answer: ["Can", "I", "try", "it", "on", "?"], bank: ["try", "on", "Can", "it", "I", "?"] },
    { prompt: "Dis : « C'est trop petit. »", answer: ["It's", "too", "small", "."], bank: ["small", "too", "It's", "."] },
    { prompt: "Dis : « Je le prends. »", answer: ["I'll", "take", "it", "."], bank: ["take", "I'll", "it", "."] },
  ],
  m4: [
    pick("The coat is 100 pounds. The shirt is 20 pounds. The coat is ___ the shirt.", "Comparative", "more expensive than", ["more expensive than", "cheaper than", "smaller than"]),
    pick("A small bag and a big bag. The big bag is ___.", "Comparative", "bigger", ["bigger", "smaller", "cheaper"]),
    pick("The market costs less than the shop. The market is ___.", "Comparative", "cheaper", ["cheaper", "more expensive", "bigger"]),
    pick("This shirt fits. That one is too small. This is ___.", "Comparative", "better", ["better", "worse", "smaller"]),
  ],
  m5: [
    pick("Tu veux payer par carte.", "Say", "Can I pay by card?", ["Can I pay by card?", "I card pay?", "Do I card?"]),
    pick("Tu veux le ticket.", "Say", "Can I have a receipt, please?", ["Can I have a receipt, please?", "I receipt want.", "Give receipt me."]),
    pick("Tu aimes l'article.", "Say", "I'll take it.", ["I'll take it.", "I make it.", "I try it."]),
    pick("Le vendeur dit « Can I help you? ». Tu regardes seulement.", "Say", "I'm just looking, thanks.", ["I'm just looking, thanks.", "I'm just buying, thanks.", "I'm just closed, thanks."]),
  ],
  m6: [
    { prompt: "Achète ton article.", card: [["Item", "blue shirt"], ["Size", "medium"], ["Pay", "card"]], answer: ["I'd like", "a blue shirt,", "size medium,", "please.", "Can I pay", "by card?"], bank: ["a blue shirt,", "a red dress,", "I'd like", "size medium,", "please.", "Can I pay", "by card?", "in cash?"] },
    { prompt: "Achète ton article.", card: [["Item", "black shoes"], ["Size", "38"], ["Pay", "cash"]], answer: ["I'd like", "these black shoes,", "size 38,", "please.", "Can I pay", "in cash?"], bank: ["these black shoes,", "that red bag,", "I'd like", "size 38,", "please.", "Can I pay", "in cash?", "by card?"] },
  ],
};

balanceAll({ VOCAB_A17, GRAMMAR_A17, READING_A17, LISTENING_A17, EXERCISES_A17, EXPRESSION_A17, TEST_TEXTS_A17, TEST_AUDIOS_A17, TEST_GRAMMAR_A17, DATA_A17 });
