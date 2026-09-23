// The Roots — "Bonjour" qui change de langue à CHAQUE connexion, et petite
// phrase sur les langues et les frontières (demande d'Ashley du 23/09,
// inspirée de l'écran d'accueil d'une autre appli : "Bienvenue ! Il est
// l'heure de…"). Utilisé sur l'écran de connexion (auth-menu.js), sur le
// formulaire de connexion/reconnexion (login.js) et sur l'écran Face ID.
//
// Un compteur gardé dans le téléphone (localStorage) avance d'un cran à
// chaque affichage : on ne voit donc jamais deux fois de suite le même
// bonjour. Si le stockage est indisponible, on tire au hasard.

const GREETINGS = [
  { text: "Bonjour", lang: "français" },
  { text: "Hello", lang: "anglais" },
  { text: "¡Hola!", lang: "espagnol" },
  { text: "Olá", lang: "portugais" },
  { text: "Ciao", lang: "italien" },
  { text: "Hallo", lang: "allemand" },
  { text: "Mbote", lang: "lingala" },
  { text: "Jambo", lang: "swahili" },
  { text: "As-salām ʿalaykum", lang: "arabe" },
  { text: "Konnichiwa", lang: "japonais" },
  { text: "Nǐ hǎo", lang: "chinois" },
  { text: "Namaste", lang: "hindi" },
  { text: "Merhaba", lang: "turc" },
  { text: "Privet", lang: "russe" },
  { text: "Hej", lang: "suédois" },
  { text: "Dzień dobry", lang: "polonais" },
  { text: "Sawubona", lang: "zoulou" },
  { text: "Kia ora", lang: "maori" },
  { text: "Aloha", lang: "hawaïen" },
  { text: "Shalom", lang: "hébreu" },
  { text: "Goedendag", lang: "néerlandais" },
  { text: "Yassou", lang: "grec" },
  { text: "Salama", lang: "malgache" },
  { text: "Annyeong", lang: "coréen" },
];

const TAGLINES = {
  fr: [
    "Les langues n'ont pas de frontières — toi non plus.",
    "Chaque mot appris, c'est une frontière en moins.",
    "Une langue de plus, c'est un monde de plus.",
    "Parle, et les frontières s'effacent.",
    "Le monde entier tient dans quelques mots bien choisis.",
    "Apprendre une langue, c'est ouvrir une porte sur l'autre.",
  ],
  en: [
    "Languages have no borders — and neither do you.",
    "Every word you learn is one border less.",
    "One more language, one more world.",
    "Speak, and borders fade away.",
    "The whole world fits in a few well-chosen words.",
    "Learning a language opens a door to others.",
  ],
  es: [
    "Los idiomas no tienen fronteras — tú tampoco.",
    "Cada palabra aprendida es una frontera menos.",
    "Un idioma más, un mundo más.",
    "Habla, y las fronteras desaparecen.",
    "El mundo entero cabe en unas pocas palabras bien elegidas.",
    "Aprender un idioma es abrir una puerta al otro.",
  ],
  pt: [
    "As línguas não têm fronteiras — e tu também não.",
    "Cada palavra aprendida é uma fronteira a menos.",
    "Mais uma língua, mais um mundo.",
    "Fala, e as fronteiras desaparecem.",
    "O mundo inteiro cabe em poucas palavras bem escolhidas.",
    "Aprender uma língua é abrir uma porta ao outro.",
  ],
};

const COUNTER_KEY = "the_roots_greeting_counter";
let cachedForThisScreen = null;

// Avance le compteur UNE fois par connexion (et non à chaque écran : le
// menu puis le formulaire affichent le même bonjour).
export function nextGreeting() {
  if (cachedForThisScreen) return cachedForThisScreen;
  let n;
  try {
    n = parseInt(localStorage.getItem(COUNTER_KEY) || "0", 10) || 0;
    localStorage.setItem(COUNTER_KEY, String(n + 1));
  } catch (e) {
    n = Math.floor(Math.random() * 1000);
  }
  cachedForThisScreen = { n, greeting: GREETINGS[n % GREETINGS.length] };
  return cachedForThisScreen;
}

export function greetingHtml(uiLang) {
  const { n, greeting } = nextGreeting();
  const lines = TAGLINES[uiLang] || TAGLINES.fr;
  const tagline = lines[n % lines.length];
  return `
    <div class="hello-block">
      <div class="hello-word">${greeting.text} !</div>
      <div class="hello-lang">« bonjour » en ${greeting.lang}</div>
      <div class="hello-tagline">${tagline}</div>
    </div>
  `;
}
