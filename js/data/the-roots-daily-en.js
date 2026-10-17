// The Roots Daily — contenu (actualités et mails). Fichier à remplir avec le contenu d'Ashley.
// Schéma d'un élément :
// {
//   id: "n-2026-10-20-01",            // unique, jamais modifié
//   type: "news" | "mail",
//   level: "A1" | "A2" | "B1" | "B2" | "C1" | "C2",
//   date: "2026-10-20",               // AAAA-MM-JJ
//   title: "…",  tag: "Météo",        // titre + rubrique (news) ; pour un mail, title = objet
//   img: "assets/img/daily/xxx.webp", // optionnel
//   minutes: 2,                       // temps de lecture
//   body: ["paragraphe 1", "paragraphe 2"],
//   mail: { from: "Anna <anna@…>", to: "You", subject: "…" },   // seulement si type "mail"
//   glossary: [["word", "mot"], …],   // mots touchables dans le texte
//   questions: [ … ]                  // jamais de QCM, voir les 4 types ci-dessous
// }
// Types de questions (q = consigne, model = réponse modèle, hint = indice facultatif) :
//   { k:"short", q, ok:["regex",…], model, hint }            réponse courte tapée ; ok = au moins une regex (insensible à la casse)
//   { k:"gap",   q:"The match is on ___ .", ok:[…], model }    phrase à compléter
//   { k:"tf",    q:"affirmation", a:true|false, why:"regex", model }   Vrai/Faux tapé ("true"/"false") + justification demandée
//   { k:"reply", q, checks:[["libellé","regex"],…], model }    rédiger une réponse ; chaque check = un élément attendu
export const DAILY_ITEMS = [
  {
    id: "demo-news", demo: true, type: "news", level: "A1", date: "2026-01-01",
    title: "Exemple : A rainy day in London", tag: "Exemple", minutes: 1,
    body: ["It is rainy in London today. Many people have umbrellas.", "The buses are full. The children are happy because school is closed."],
    glossary: [["rainy", "pluvieux"], ["umbrellas", "parapluies"], ["closed", "fermé"]],
    questions: [
      { k: "short", q: "What is the weather in London today?", ok: ["rain"], model: "It is rainy.", hint: "Un mot du texte." },
      { k: "gap", q: "The children are happy because ___ is closed.", ok: ["^school$"], model: "school" },
      { k: "tf", q: "The buses are empty.", a: false, why: "full", model: "False. The buses are full." },
      { k: "reply", q: "Écris 2 phrases : quel temps fait-il chez toi ?", checks: [["Une phrase sur la météo", "\\b(sunny|rainy|cold|hot|windy|cloudy|raining|snowing)\\b"], ["Un verbe « is » ou « it's »", "\\b(is|it's)\\b"]], model: "It is sunny. It is hot." },
    ],
  },
  {
    id: "demo-mail", demo: true, type: "mail", level: "A1", date: "2026-01-01",
    title: "Exemple : Party on Saturday", tag: "Mail", minutes: 1,
    mail: { from: "Anna <anna@example.com>", to: "You", subject: "Party on Saturday" },
    body: ["Hi!", "I have a party on Saturday at 7 pm. Can you come? Please bring a cake.", "Anna"],
    glossary: [["bring", "apporter"], ["cake", "gâteau"]],
    questions: [
      { k: "short", q: "What time is the party?", ok: ["7|seven"], model: "At 7 pm." },
      { k: "reply", q: "Réponds à Anna : dis que tu viens et propose un cadeau ou un plat.", checks: [["Tu acceptes (yes, I can come…)", "\\b(yes|sure|i can|i'll come|i will come)\\b"], ["Tu proposes quelque chose", "\\b(bring|cake|gift|present|drink|salad)\\b"]], model: "Hi Anna! Yes, I can come. I'll bring a cake. See you!" },
    ],
  },
];
