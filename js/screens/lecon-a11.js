// The Roots — leçon A1.1 « Mon identité » : Introduction → Menu → Vocabulaire.
// Intégrée au vrai routage : ouverte depuis Mes cours (mes-cours.js) avec
// renderLessonA11(root, { onExit }), même schéma que l'onboarding.
// Maquettes de référence : 06 / 07 / 08 / 09 (dossier de transmission).
// Hors leçons : fonds d'origine The Roots (jour/nuit). Ici : cartes illustrées,
// personnage choisi dans Paramètres (settings.avatarGender / avatarIndex).

import { store } from "../data/store.js?v=20260930a";
import { EXPRESSION_PLUS_A1 } from "../data/expression-plus-a1.js?v=20261019b4";
import { withExtraQs } from "../data/extra-qs.js?v=20261019b4";
import { UNLOCK_ALL_PREVIEW } from "../data/dev-config.js?v=20261019b4";
import { retakeLocked, rtSeries } from "../data/bulletin-a1.js?v=20261019b4";
import { runRattrapage } from "./rattrapage.js?v=20261019b4";
import { AI_RELAY_URL } from "../data/ai-config.js?v=20260930a";
import { createCity } from "./roots-city.js?v=20261019b4";
import { balanceAll } from "../data/balance.js?v=20261019b4";
import { MUST_A1 } from "../data/dialogues-a1-must.js?v=20261019b4";
import { REGISTERS_A1 } from "../data/dialogues-a1-registers.js?v=20261019b4";
import { plusPages } from "../data/vocab-plus-a1.js?v=20261019b4";
import { buildPractice, mountPractice } from "./practice.js?v=20261019b4";
import { createVoice } from "./voice.js?v=20261019b4";
import { SITUATIONS_A1 } from "../data/situations-a1.js?v=20261019b4";
import { DIALOGUES_A1 } from "../data/dialogues-a1.js?v=20261019b4";
import { DIALOGUES_A1_REST } from "../data/dialogues-a1-rest.js?v=20261019b4";
import { SITUATIONS_A2 } from "../data/situations-a2.js?v=20261019b4";
import { DIALOGUES_A2 } from "../data/dialogues-a2.js?v=20261019b4";
import { GRAMMAR_PAGES, READING_PAGES, LISTENING_PAGES, EXERCISE_PAGES, EXPRESSION_PAGES, TRANSV_DAYS, TEST_TEXTS, TEST_AUDIOS, TEST_GRAMMAR } from "../data/lecon-a11-data.js?v=20261019b4";

let PROGRESS_KEY = "the_roots_a11_lesson_v1"; // fixé à chaque ouverture de leçon (renderLesson)
const GIRLS = 9;
const BOYS = 9;

/* ---------- contenu ---------- */
const GREETINGS = [
  ["Hello!", "Bonjour !"],
  ["Hi!", "Salut !"],
  ["Good morning!", "Bonjour (le matin)"],
  ["Good afternoon!", "Bonjour (l’après-midi)"],
  ["Good evening!", "Bonsoir !"],
  ["Goodbye!", "Au revoir !"],
];

// Pages 2 à 5 : mots d'identité du cahier des charges A1.1.
// q = [question, choix, index de la bonne réponse]
const IC_IMG = { vocab:1, grammar:1, reading:1, listening:1, speaking:1, exercises:1, transversal:1, test:1 };
const icImg = (id, fb) => IC_IMG[id] ? `<img class="lc-ic-img" src="assets/img/lesson/ic-${id}.webp?v=20261019b4" alt="" width="28" height="28" onerror="if(!this.dataset.r){this.dataset.r=1;this.src=this.src.split('?')[0]+'?r='+Date.now();}else{this.replaceWith(document.createTextNode('${fb}'));}"/>` : fb;
const SCENES = [["scene-greeting","Hello! Nice to meet you."],["scene-friends","Hi! How are you?"],["scene-goodbye","Goodbye! See you tomorrow!"]];

const rxTest = (re, txt) => new RegExp(re, "i").test(String(txt || "").replace(/[’‘`´]/g, "'").replace(/\s+/g, " "));

// ── Conseil de l'IA (facultatif, ne compte JAMAIS dans la note) ─────────────
const ADVICE_KEY = "the_roots_a11_advice_v1", ADVICE_MAX_PER_DAY = 5;
function adviceLeft() {
  try {
    const d = new Date().toISOString().slice(0, 10), v = JSON.parse(localStorage.getItem(ADVICE_KEY) || "{}");
    return ADVICE_MAX_PER_DAY - (v.d === d ? v.n || 0 : 0);
  } catch (e) { return ADVICE_MAX_PER_DAY; }
}
function adviceUsed() {
  try {
    const d = new Date().toISOString().slice(0, 10), v = JSON.parse(localStorage.getItem(ADVICE_KEY) || "{}");
    localStorage.setItem(ADVICE_KEY, JSON.stringify({ d, n: (v.d === d ? v.n || 0 : 0) + 1 }));
  } catch (e) { /* stockage indisponible */ }
}
async function fetchAdvice(text, topic, lede) {
  if (!/^https:\/\//.test(AI_RELAY_URL || "")) throw new Error("not_configured");
  const ctrl = new AbortController(), timer = setTimeout(() => ctrl.abort(), 25000);
  try {
    const res = await fetch(AI_RELAY_URL, { method: "POST", headers: { "Content-Type": "application/json" }, signal: ctrl.signal,
      body: JSON.stringify({ mode: "feedback", lang: "en", variant: "en-gb", level: "A1", topic: topic || "Se présenter en anglais (A1.1)",
        lede: lede || "Prénom, âge, pays, goûts. Réponds avec bienveillance.", messages: [{ role: "user", text: String(text).slice(0, 1200) }] }) });
    const j = await res.json().catch(() => ({}));
    if (res.status === 429 || j.error === "quota_exceeded") throw new Error("quota");
    if (!res.ok || !j.text) throw new Error("relay");
    return String(j.text);
  } finally { clearTimeout(timer); }
}

const VOCAB_PAGES = [
  {
    kind: "greetings", title: "Les salutations",
    tip: "En anglais, on utilise souvent “Hi” et “Hello” dans la vie de tous les jours.",
    examples: [
      ["Hello! My name is {name}.", "Bonjour ! Je m’appelle {name}."],
      ["Hi! How are you?", "Salut ! Ça va ?"],
      ["Goodbye! See you tomorrow!", "Au revoir ! À demain !"],
    ],
    practice: "Écoute et répète la phrase.", say: "Hello! My name is {name}.",
  },
  {
    kind: "words", title: "Mon nom", scene: ["scene-name", "Remplir un formulaire : « What is your name? »"],
    words: [["first name", "prénom"], ["last name", "nom de famille"], ["nickname", "surnom"], ["age", "âge"]],
    tip: "Le “first name” est le prénom ; le “last name” (ou “surname”) est le nom de famille.",
    examples: [["My first name is {name}.", "Mon prénom est {name}."], ["What is your last name?", "Quel est ton nom de famille ?"]],
    q: ["“Last name” veut dire…", ["prénom", "nom de famille", "surnom"], 1],
  },
  {
    kind: "words", title: "Naissance et lieu", scene: ["scene-birth", "Montrer d’où l’on vient : « I was born in… »"],
    words: [["date of birth", "date de naissance"], ["place of birth", "lieu de naissance"], ["country", "pays"], ["city", "ville"]],
    tip: "On dit “I was born in…” pour donner son lieu de naissance.",
    examples: [["My country is France.", "Mon pays est la France."], ["I live in Paris.", "J’habite à Paris."]],
    q: ["“City” veut dire…", ["pays", "ville", "adresse"], 1],
  },
  {
    kind: "words", title: "Nationalité et résidence", scene: ["scene-nationality", "Les drapeaux : « What is your nationality? »"], icon: "🌍",
    words: [["nationality", "nationalité"], ["address", "adresse"], ["phone number", "numéro de téléphone"], ["email", "adresse e-mail"]],
    tip: "“Nationality” se termine souvent par -ish, -an ou -ese : British, Canadian, Chinese.",
    examples: [["What is your nationality?", "Quelle est ta nationalité ?"], ["What is your address?", "Quelle est ton adresse ?"]],
    q: ["“Address” veut dire…", ["adresse", "âge", "poids"], 0],
  },
  {
    kind: "words", title: "Les nombres", scene: ["scene-numbers", "Compter : « one, two, three… »"], icon: "🔢",
    words: [["one, two, three", "un, deux, trois"], ["ten", "dix"], ["fifteen", "quinze"], ["twenty", "vingt"], ["thirty", "trente"], ["a hundred", "cent"]],
    tip: "Attention : “fifteen” = 15 mais “fifty” = 50 ; “thirteen” = 13 mais “thirty” = 30.",
    examples: [["I am twenty-two years old.", "J’ai vingt-deux ans."], ["My phone number is oh seven, one two…", "Mon numéro est le 07 12…"]],
    q: ["“Fifty” veut dire…", ["15", "50", "5"], 1],
  },
  {
    kind: "words", title: "Apparence physique", scene: ["scene-describe", "Décrire une personne : « He has curly brown hair. »"], icon: "📏",
    words: [["height", "taille"], ["weight", "poids"], ["shoe size", "pointure"], ["skin colour", "couleur de peau"], ["eye colour", "couleur des yeux"], ["hair colour", "couleur des cheveux"]],
    tip: "Pour la taille : “I am one metre seventy.” Pour les yeux : “I have blue eyes.”",
    examples: [["I am one metre seventy.", "Je mesure 1,70 m."], ["My shoe size is thirty-nine.", "Je chausse du 39."], ["She has long brown hair.", "Elle a de longs cheveux châtains."]],
    q: ["“Shoe size” veut dire…", ["pointure", "taille", "poids"], 0],
  },
  {
    kind: "words", title: "Le corps", scene: ["scene-body", "Les parties du corps : « head, arms, legs, feet »"], icon: "🧍",
    words: [["head", "tête"], ["eye", "œil"], ["hand", "main"], ["arm", "bras"], ["leg", "jambe"], ["foot (feet)", "pied (pieds)"]],
    tip: "Pluriels irréguliers : one foot → two feet ; one tooth → two teeth.",
    examples: [["I have two arms and two legs.", "J’ai deux bras et deux jambes."], ["Her hands are small.", "Ses mains sont petites."]],
    q: ["“Leg” veut dire…", ["bras", "jambe", "main"], 1],
  },
  {
    kind: "words", title: "Décrire et présenter",
    words: [["eye colour", "couleur des yeux"], ["student", "étudiant(e)"], ["teacher", "enseignant(e)"], ["job", "métier"]],
    tip: "“I am a student” : on met “a” devant un métier ou un statut.",
    examples: [["I am a student.", "Je suis étudiant(e)."], ["She is a teacher.", "Elle est enseignante."]],
    q: ["“Teacher” veut dire…", ["étudiant(e)", "métier", "enseignant(e)"], 2],
  },
];

const LEARN_GOALS = [
  "Te présenter",
  "Poser et répondre à des questions simples",
  "Décrire ta nationalité, ton âge et ta famille",
  "Parler de ce que tu aimes",
  "Comprendre et présenter une autre personne",
];

const MENU = [
  { n: 1, id: "vocab", icon: "📖", title: "Vocabulaire", sub: "Mots essentiels", ready: true },
  { n: 2, id: "grammar", icon: "⚙️", title: "Grammaire", sub: "Règles simples", ready: true },
  { n: 3, id: "reading", icon: "📚", title: "Lecture", sub: "Compréhension écrite", ready: true },
  { n: 4, id: "listening", icon: "🎧", title: "Écoute", sub: "Compréhension orale", ready: true },
  { n: 5, id: "speaking", icon: "🎤", title: "Expression", sub: "Parler et écrire", ready: true },
  { n: 5.5, id: "dialogue", icon: "💬", title: "Conversation", sub: "Réponds en anglais à un personnage", ready: true },
  { n: 5.6, id: "write", icon: "✍️", title: "Écrire en anglais", sub: "Dictée et phrases à toi", ready: true },
  { section: "S’entraîner et progresser" },
  { n: 6, id: "exercises", icon: "🧩", title: "Exercices", sub: "Corrections et rattrapage", ready: true },
  { n: 7, id: "city", icon: "🏙️", title: "Roots City", sub: "6 missions pour t’entraîner (non noté)", ready: true },
  { n: 8, id: "transversal", icon: "🌱", title: "Transversale", sub: "Foundations : couleurs, nombres, dates, heure", ready: true },
  { n: 9, id: "test", icon: "🏆", title: "Test de fin de leçon", sub: "Valide tes acquis", ready: true },
];

/* ---------- état / préférences ---------- */
function loadProgress() {
  try { return JSON.parse(localStorage.getItem(PROGRESS_KEY) || "{}"); } catch (e) { return {}; }
}
function saveProgress(p) {
  try { localStorage.setItem(PROGRESS_KEY, JSON.stringify(p)); } catch (e) { /* stockage indisponible */ }
}

export function currentCharacter() {
  const s = store.get().settings;
  const gender = s.avatarGender === "boy" ? "boy" : "girl";
  const max = gender === "boy" ? BOYS : GIRLS;
  const idx = Math.min(Math.max(Number(s.avatarIndex) || 0, 0), max - 1);
  const name = gender === "boy" ? "Lucas" : "Emma", key = name.toLowerCase();

  const hasFull = true; // les 18 personnages ont une version en pied
  // Emma et Lucas (n°1) ont une version en pied (introduction) et une version « réussite ».
  return { gender, idx, src: `assets/img/characters/${gender}-${idx + 1}.webp`, name,
    full: hasFull ? (idx === 0 ? `assets/img/characters/${key}-intro.webp` : `assets/img/characters/${gender}-${idx + 1}-intro.webp`) : null,
    win: idx === 0 ? `assets/img/characters/${key}-win.webp` : (hasFull ? `assets/img/characters/${gender}-${idx + 1}-intro.webp` : null) };
}

/* ---------- audio (Safari iPhone : speak() appelé directement dans le clic) ---------- */
function pickVoice() {
  try {
    const voices = window.speechSynthesis.getVoices();
    const pref = store.get().settings.preferredVoiceURI;
    return (pref && voices.find((v) => `${v.name}|${v.lang}` === pref))
      || voices.find((v) => /^en[-_]GB/i.test(v.lang))
      || voices.find((v) => /^en/i.test(v.lang)) || null;
  } catch (e) { return null; }
}
let speedMul = 1;
function speak(text) {
  if (!window.speechSynthesis || !text) return false;
  try {
    const u = new SpeechSynthesisUtterance(text.replace(/<[^>]+>/g, ""));
    const v = pickVoice();
    if (v) { u.voice = v; u.lang = v.lang; } else { u.lang = "en-GB"; }
    u.rate = 0.9 * speedMul;
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(u);
    return true;
  } catch (e) { return false; }
}

const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const ico = (src, cls = "") => `<img class="lc-ava ${cls}" src="${src}" alt="" loading="lazy"/>`;
const spk = (text, label) => `<button type="button" class="lc-spk" data-say="${esc(text)}" aria-label="Écouter : ${esc(label || text)}">🔊</button>`;

/* ---------- rendu ---------- */
export function renderLesson(root, B, { onExit } = {}) {
  PROGRESS_KEY = B.progressKey;
  const HEAD = B.head;
  const prog = loadProgress();
  let screen = "intro"; // intro | menu | vocab
  let page = 0;
  const answered = {}; // page → true une fois le mini-quiz réussi (ou vu)

  const el = document.createElement("div");
  el.className = "screen lc-screen";
  root.innerHTML = "";
  root.appendChild(el);
  // Mode vérification : aucun blocage (voir UNLOCK_ALL_PREVIEW dans dev-config.js).
  if (UNLOCK_ALL_PREVIEW) {
    new MutationObserver(() => { const n = el.querySelector("#lcNext"); if (n && n.disabled) n.disabled = false; })
      .observe(el, { subtree: true, childList: true, attributes: true, attributeFilter: ["disabled"] });
  }

  // Ajoute sous la zone d'écriture un bouton « Obtenir un conseil » (IA) — jamais noté.
  function mountAdvice(getText) {
    const ta = el.querySelector("#lcTa"); if (!ta) return;
    const card = ta.closest("section") || ta.parentElement;
    const box = document.createElement("details"); box.className = "lc-advice";
    box.innerHTML = `<summary class="lc-advice-sum">💡 Conseil d’une IA (facultatif)</summary><p class="lc-advice-info">💡 Conseil facultatif d’une IA (Google Gemini). Ton texte est envoyé à Google pour l’obtenir. Il ne change pas ta note.</p>
      <button type="button" class="lc-sec-btn lc-advice-btn">💡 Obtenir un conseil</button><div class="lc-advice-out" aria-live="polite"></div>`;
    card.appendChild(box);
    const btn = box.querySelector(".lc-advice-btn"), out = box.querySelector(".lc-advice-out");
    btn.onclick = async () => {
      const txt = (getText() || "").trim();
      if (txt.length < 15) { out.textContent = "Écris d’abord au moins une phrase en anglais."; return; }
      if (adviceLeft() <= 0) { out.textContent = "Tu as utilisé tes " + ADVICE_MAX_PER_DAY + " conseils du jour. Reviens demain !"; return; }
      btn.disabled = true; out.textContent = "L’IA lit ton texte…";
      try { const r = await fetchAdvice(txt, B.adviceTopic, B.adviceLede); adviceUsed(); out.textContent = r; out.classList.add("on"); }
      catch (e) { out.classList.remove("on"); out.textContent = e.message === "quota" ? "Le service de conseils est très demandé. Réessaie un peu plus tard." : e.message === "not_configured" ? "Les conseils de l’IA ne sont pas encore activés." : "Impossible d’obtenir un conseil pour l’instant (connexion ?). Ta note n’est pas affectée."; }
      finally { btn.disabled = false; }
    };
  }

  function frame(headTitle, counter, inner, foot) {
    const pct = counter ? Math.round((counter.cur / counter.total) * 100) : 0;
    el.innerHTML = `
      <img class="screen-cover-bg bg-img-light" src="assets/img/shell-bg.jpg" alt="" aria-hidden="true"/>
      <img class="screen-cover-bg bg-img-dark" src="assets/img/shell-bg-dark.jpg" alt="" aria-hidden="true"/>
      <img class="screen-cover-bg bg-img-landscape" src="assets/img/shell-bg-landscape.jpg" alt="" aria-hidden="true"/>
      <img class="screen-cover-bg bg-img-landscape-dark" src="assets/img/shell-bg-landscape-dark.jpg" alt="" aria-hidden="true"/>
      <div class="lc-wrap">
        <header class="lc-head">
          <button type="button" class="lc-back" id="lcBack">← Retour</button>
          <div class="lc-head-title">${esc(headTitle)}</div>
          ${counter ? `<div class="lc-count" aria-label="Page ${counter.cur} sur ${counter.total}">${counter.cur}/${counter.total}</div>` : `<div class="lc-count lc-count-ghost"></div>`}
        </header>
        ${counter ? `<div class="lc-bar" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${pct}"><div style="width:${pct}%"></div></div>` : ""}
        <main class="lc-main">${inner}</main>
        ${foot || ""}
      </div>`;
    el.querySelectorAll("[data-say]").forEach((b) => b.addEventListener("click", () => {
      if (!speak(b.dataset.say)) toast("Audio indisponible sur cet appareil");
      b.classList.add("lc-spk-on"); setTimeout(() => b.classList.remove("lc-spk-on"), 900);
    }));
    el.querySelectorAll("[data-recap]").forEach((b) => b.addEventListener("click", () => openRecap(b.dataset.recap, b.dataset.kind === "audio")));
  }

  // « Revoir le texte » / « Réécouter » : le texte ou l'audio reste accessible depuis les pages de questions (sans changer la mise en page).
  function openRecap(txt, audio) {
    const s = document.createElement("div"); s.className = "lc-recap-sheet";
    s.innerHTML = `<div class="lc-recap-card" role="dialog" aria-label="${audio ? "Réécouter l’audio" : "Revoir le texte"}">${audio
      ? `<p class="lc-lead">Écoute encore l’audio.</p><div class="lc-player"><button type="button" class="lc-play" data-r="say" aria-label="Écouter l’audio">▶</button><span class="lc-wave" aria-hidden="true"></span></div>`
      : `<p class="lc-text">${esc(txt)}</p><div class="lc-actions"><button type="button" class="lc-chip" data-r="say">🔊 Écouter</button></div>`}
      <button type="button" class="lc-cta lc-recap-close" data-r="close">Fermer</button></div>`;
    s.addEventListener("click", (e) => {
      const r = e.target.closest("[data-r]");
      if (r && r.dataset.r === "say") { if (!speak(txt)) toast("Audio indisponible sur cet appareil"); return; }
      if (e.target === s || (r && r.dataset.r === "close")) s.remove();
    });
    el.appendChild(s);
  }

  function toast(msg) {
    const t = document.createElement("div");
    t.className = "lc-toast"; t.textContent = msg; el.appendChild(t);
    setTimeout(() => t.remove(), 1800);
  }

  const city = createCity({ el, frame, esc, speak, toast, back: () => showMenu(), missions: B.city && B.city.missions, data: B.city && B.city.data,
    getStars: () => prog.city || {},
    setStar: (k, v) => { prog.city = Object.assign({}, prog.city, { [k]: Math.max(v, (prog.city || {})[k] || 0) }); saveProgress(prog); } });

  function showIntro() {
    screen = "intro";
    const c = currentCharacter();
    frame(HEAD, { cur: 1, total: 8 }, `
      <section class="lc-hero">
        <div class="lc-bubble">${esc(B.bubble || "Hello!")}</div>
        ${c.full ? `<img class="lc-hero-full" src="${c.full}" alt="Personnage ${c.name}"/>` : `<img class="lc-hero-img" src="${c.src}" alt="Personnage ${c.name}"/>`}
      </section>
      <section class="lc-card lc-intro">
        <div class="lc-level">${esc(B.code)}</div>
        <h1>${esc(B.titleFr)}</h1>
        <p class="lc-lead">Dans cette leçon, tu vas apprendre à :</p>
        <ul class="lc-goals">${B.goals.map((g) => `<li><span class="lc-check">✓</span>${esc(g)}</li>`).join("")}</ul>
        <button type="button" class="lc-cta" id="lcStart">Commencer la leçon →</button>
      </section>`);
    el.querySelector("#lcBack").onclick = () => onExit && onExit();
    el.querySelector("#lcStart").onclick = showMenu;
  }

  function showMenu() {
    screen = "menu";
    const done = prog.done || {};
    let nn = 0;
    const rows = MENU.filter((m) => (m.id !== "transversal" || B.transv) && (m.id !== "dialogue" || DLG) && (m.id !== "write" || SIT)).map((m) => m.section
      ? `<h2 class="lc-sec">${esc(m.section)}</h2>`
      : `<button type="button" class="lc-row ${m.ready ? "" : "lc-row-soon"}" data-act="${m.id}" ${m.ready ? "" : 'aria-disabled="true"'}>
          <span class="lc-num">${++nn}</span><span class="lc-ic">${icImg(m.id, m.icon)}</span>
          <span class="lc-txt"><b>${esc(m.title)}</b><small>${esc(m.ready ? m.sub + ((prog.scores || {})[m.id] ? " · " + prog.scores[m.id] : "") : m.sub + " · bientôt")}</small></span>
          <span class="lc-go">${done[m.id] ? "✓" : "›"}</span>
        </button>`).join("");
    frame(HEAD, { cur: 1, total: 8 }, `<section class="lc-card lc-menu">${rows}</section>`);
    el.querySelector("#lcBack").onclick = showIntro;
    el.querySelectorAll(".lc-row").forEach((b) => b.addEventListener("click", () => {
      if (b.dataset.act === "vocab") { page = 0; showVocab(); }
      else if (b.dataset.act === "speaking") { page = 0; showSpeak(); }
      else if (b.dataset.act === "dialogue") { showDialogueList(); }
      else if (b.dataset.act === "write") { showWriteList(); }
      else if (b.dataset.act === "city") { city.start(); }
      else if (b.dataset.act === "transversal") { showTransvList(); }
      else if (b.dataset.act === "test") { startTest(); }
      else if (ACT[b.dataset.act]) { page = 0; showAct(b.dataset.act); }
      else toast("Cette activité arrive bientôt");
    }));
  }

  // Une scène dont l'image est absente n'occupe aucune place : la pagination se calcule sans elle (pas de vide).
  const hasScene = (p) => !!p.scene && !(B._noScene && B._noScene[p.scene[0]]);
  // Étapes du vocabulaire : chaque page de mots = écran(s) de 5 mots max, puis UN écran d'exercices. Rien à faire défiler.
  function vocabSteps() {
    const S = [];
    B.vocab.forEach((p0, pi) => {
      // La page d'ouverture (salutations / personnes) suit le même format que les autres pages de mots.
      const p = p0.kind === "greetings" ? Object.assign({}, p0, { kind: "words", icon: "👥", words: (B.greetings && B.greetings.length ? B.greetings : p0.examples).map((x) => x.slice(0, 2)), examples: p0.examples }) : p0;
      B.vocab[pi] = p;
      // Écrans équilibrés (jamais un mot seul) : 6 mots max par écran, 4 si l'image de la scène est affichée en entier (16:9).
      const L = p.words.length, cap = (B._cap || (B._cap = {}))[pi] || (hasScene(p) ? 7 : 10), nc = Math.max(1, Math.ceil(L / cap)), base = Math.floor(L / nc), extra = L % nc, ch = [];
      for (let i = 0, k = 0; k < nc; k++) { const sz = base + (k < extra ? 1 : 0); ch.push(p.words.slice(i, i + sz)); i += sz; }
      ch.forEach((w, ci) => S.push({ t: "words", p, pi, words: w, ci, n: ch.length, last: ci === ch.length - 1 }));
      S.push({ t: "prac", p, pi });
    });
    return S;
  }
  // remplit le vide d'une page de leçon : lignes de mots / réponses plus aérées, puis image
  function fillRows() {
    const m = el.querySelector(".lc-main"), f = el.querySelector(".lc-foot"); if (!m || !f) return;
    const cards0 = m.querySelectorAll(":scope > .lc-card"), c0x = cards0[cards0.length - 1];
    const reset = () => { if (!c0x) return; c0x.style.minHeight = c0x.style.display = c0x.style.flexDirection = c0x.style.justifyContent = ""; c0x.querySelectorAll(":scope > ul.lc-list").forEach((u) => { u.style.flex = u.style.alignContent = ""; }); c0x.querySelectorAll("li, .lc-choice").forEach((x) => { x.style.paddingTop = x.style.paddingBottom = ""; }); };
    reset();
    if (!m.dataset.fr) { m.dataset.fr = "1"; m.querySelectorAll("img").forEach((im) => { if (!im.complete) im.addEventListener("load", fillRows, { once: true }); }); setTimeout(fillRows, 500); }
    const reserve = m.querySelector(".lc-qb, .lc-fb") ? 70 : 24;
    const gap = () => Math.floor(f.getBoundingClientRect().top - m.lastElementChild.getBoundingClientRect().bottom - reserve);
    let L = gap(); if (L < 24) return;
    const cards = m.querySelectorAll(":scope > .lc-card"), c = cards[cards.length - 1]; if (!c) return;
    const lis = c.querySelectorAll(":scope > ul > li, :scope ul.lc-words > li"); 
    if (lis.length) { const pad = Math.min(26, Math.floor(L / (2 * lis.length))); if (pad > 1) lis.forEach((li) => { li.style.paddingTop = (parseFloat(getComputedStyle(li).paddingTop) + pad) + "px"; li.style.paddingBottom = (parseFloat(getComputedStyle(li).paddingBottom) + pad) + "px"; }); L = gap(); }
    const chs = c.querySelectorAll(".lc-choice");
    if (chs.length && L > 16) { const pad = Math.min(10, Math.floor(L / (2 * chs.length))); if (pad > 1) chs.forEach((b) => { b.style.paddingTop = (parseFloat(getComputedStyle(b).paddingTop) + pad) + "px"; b.style.paddingBottom = (parseFloat(getComputedStyle(b).paddingBottom) + pad) + "px"; }); L = gap(); }
    if (L > 40) {
      c.style.minHeight = Math.round(c.getBoundingClientRect().height + L - 10) + "px"; c.style.display = "flex"; c.style.flexDirection = "column";
      const ul = c.querySelector(":scope > ul.lc-list"); // titre en haut, lignes réparties dessous : pas de blanc flottant autour du titre
      if (ul && !c.querySelector(":scope > .lc-h3")) { c.style.minHeight = ""; c.style.display = c.style.flexDirection = ""; } // carte courte : elle garde sa hauteur naturelle, sans vide intérieur
      else c.style.justifyContent = "space-evenly";
    }
    if (m.scrollHeight > m.clientHeight + 2 || m.lastElementChild.getBoundingClientRect().bottom > f.getBoundingClientRect().top - 6) reset();
  }
  // Fixe le nombre de mots par écran AVANT l'affichage : on mesure en secret le 1er et le dernier écran de la section,
  // pour que le compteur (1/3, 2/3, 3/3) soit juste dès le premier écran et qu'aucune page ne soit redécoupée ensuite.
  function probeVocab(pi) {
    (B._probed || (B._probed = {}))[pi] = 1;
    const keep = page; B._probing = 1;
    try {
      for (let guard = 0; guard < 9; guard++) {
        B._steps = null; const steps = vocabSteps();
        const idx = steps.map((x, i) => (x.t === "words" && x.pi === pi ? i : -1)).filter((i) => i >= 0);
        let over = false;
        for (const i of [idx[0], idx[idx.length - 1]]) { page = i; B._over = false; showVocab(); if (B._over) { over = true; break; } }
        const cur = B._cap[pi] || (hasScene(B.vocab[pi]) ? 7 : 10);
        if (!over || cur <= 2) break;
        B._cap[pi] = cur - 1;
      }
    } finally { B._probing = 0; B._steps = null; page = keep; }
  }
  function showVocab() {
    screen = "vocab";
    let steps = B._steps || (B._steps = vocabSteps());
    let st = steps[page];
    if (!B._probing && st.t === "words" && st.ci === 0 && !(B._probed && B._probed[st.pi])) { probeVocab(st.pi); steps = B._steps || (B._steps = vocabSteps()); st = steps[page]; }
    const p = st.p;
    const total = steps.length;
    const c = currentCharacter();
    const sub = (s) => s.replace(/\{name\}/g, c.name);
    const lastStep = page === total - 1;
    let body = "", btn = lastStep ? "Terminer ✓" : "Suivant →", hint = "", bubble = "Écoute et répète !", stationNow = 0;

    if (st.t === "greet") {
      body = `
        <section class="lc-card">
          <h2 class="lc-h2">👥 ${esc(p.title)}</h2>
          <div class="lc-greet">
            <div class="lc-greet-hero">${B.greetings ? `<div class="lc-bubble lc-bubble-sm">Hello!</div>` : ""}<img src="${c.src}" alt=""/></div>
            <ul class="lc-list">${(B.greetings || p.examples).map(([en, fr], i) => `
              <li>${ico(`assets/img/characters/${i % 2 ? "boy" : "girl"}-${(i % 2 ? (i % BOYS) : (i % GIRLS)) + 1}.webp`, "lc-ava-sm")}
              <span class="lc-w"><b>${esc(en)}</b><small>${esc(fr)}</small></span>${spk(en)}</li>`).join("")}</ul>
          </div>
          ${B.scenes ? `<h3 class="lc-h3">En situation</h3>
          <div class="lc-scenes">${B.scenes.map(([f, t]) => `<figure><img src="assets/img/lesson/${f}.webp?v=20261019b4" alt="" loading="lazy" onerror="this.closest('figure').remove()"/><figcaption>${esc(t)}</figcaption></figure>`).join("")}</div>` : ""}
          <div class="lc-tip"><span>💡</span><div><b>Astuce</b><p>${esc(p.tip)}</p></div></div>
        </section>`;

      if (!(p.kind === "greetings" && !B.greetings)) body += `
        <section class="lc-card lc-ctx">
          <h2 class="lc-h2 lc-h2-ctx">💬 Exemples en contexte</h2>
          <ul class="lc-list">${p.examples.map(([en, fr]) => `
            <li>${ico(c.src, "lc-ava-sm")}<span class="lc-w"><b>${esc(sub(en))}</b><small>${esc(sub(fr))}</small></span>${spk(sub(en))}</li>`).join("")}</ul>
        </section>`;
      body += `
        <section class="lc-card lc-prac">
          <h2 class="lc-h2 lc-h2-prac">✏️ À toi de pratiquer !</h2>
          <p class="lc-q">1. ${esc(p.practice)}</p>
          <div class="lc-player"><button type="button" class="lc-play" data-say="${esc(sub(p.say))}" aria-label="Écouter la phrase">▶</button>
            <span class="lc-wave" aria-hidden="true"></span><span class="lc-speed">1x</span></div>
        </section>`;
    } else if (st.t === "words") {
      stationNow = 0;
      btn = st.last ? "Exercices ✏️" : "Suite →";
      if (st.last) hint = `<p class="lc-nexthint">👉 Page suivante : les exercices</p>`;
      body = `
        <section class="lc-card">
          <h2 class="lc-h2">${p.icon || "📖"} ${esc(p.title)}${st.n > 1 ? ` <span class="lc-part">${st.ci + 1}/${st.n}</span>` : ""}</h2>
          ${hasScene(p) && st.ci === 0 ? `<div class="lc-scenes lc-scene-sm"><figure><img src="assets/img/lesson/${p.scene[0]}.webp?v=20261019b4" alt="" loading="lazy" onerror="this.closest('figure').remove()"/></figure></div>` : ""}
          <ul class="lc-list lc-vl">${st.words.map(([en, fr]) => `
            <li><span class="lc-w"><b>${esc(en)}</b><small>${esc(fr)}</small></span>${spk(en)}</li>`).join("")}</ul>
          ${st.last ? `<h3 class="lc-h3 lc-h3s">💬 En contexte</h3>
          <ul class="lc-list lc-vl">${p.examples.map(([en, fr]) => `
            <li><span class="lc-w"><b>${esc(sub(en))}</b><small>${esc(sub(fr))}</small></span>${spk(sub(en))}</li>`).join("")}</ul>
          <details class="lc-tipd"><summary>💡 Astuce</summary><p>${esc(p.tip)}</p></details>` : ""}
        </section>`;
    } else {
      stationNow = 1; bubble = "À toi de jouer !";
      btn = lastStep ? "Terminer ✓" : "Suivant →";
      body = `
        <section class="lc-card lc-prac">
          <div id="lcPrac" class="pr-host"></div>
        </section>`;
    }

    const needsAnswer = st.t === "prac" && !answered[page];
    const foot = `
      <footer class="lc-foot">
        <button type="button" class="lc-sec-btn" id="lcPrev">← Précédent</button>
        <button type="button" class="lc-cta lc-next" id="lcNext" ${needsAnswer ? "disabled" : ""}>${btn}</button>
      </footer>`;
    const guide = st.t === "greet" ? `<div class="lc-vocab-head"><span class="lc-vh-ic">📖</span><div><h1>Vocabulaire</h1><p>Écoute et répète les mots.</p></div></div>`
      : `<div class="lc-guide">${ico(c.src, "lc-ava-md")}<div class="lc-gbub">${bubble}</div>
         <div class="lc-path" aria-hidden="true"><i class="${stationNow > 0 ? "d" : "c"}"></i><u></u><i class="${stationNow > 0 ? "c" : ""}"></i></div></div>`;

    frame(HEAD, { cur: page + 1, total }, `${guide}${body}${hint}`, foot);
    el.querySelector(".lc-main").scrollTop = 0;
    if (st.t === "words" && hasScene(p) && st.ci === 0) { // image absente : on repagine sans elle
      const im = el.querySelector(".lc-scene-sm img"), myPage = page;
      if (im) im.addEventListener("error", () => { (B._noScene || (B._noScene = {}))[p.scene[0]] = 1; delete B._cap[st.pi]; B._steps = null; if (page === myPage) showVocab(); }, { once: true });
    }
    if (st.t === "words") { // ça dépasse ? on réduit le nombre de mots de cette page et on redessine
      const mn = el.querySelector(".lc-main"), ft = el.querySelector(".lc-foot"), le = mn.lastElementChild;
      const over = !!(le && ft && (le.getBoundingClientRect().bottom > ft.getBoundingClientRect().top - 6 || mn.scrollHeight > mn.clientHeight + 2));
      if (B._probing) { B._over = over; return; }
      if (over) {
        const cur = B._cap[st.pi] || (hasScene(p) ? 7 : 10);
        if (cur > 2) { B._cap[st.pi] = cur - 1; B._steps = null; showVocab(); return; }
      }
    }

    fillRows();
    el.querySelector("#lcBack").onclick = showMenu;
    el.querySelector("#lcPrev").onclick = () => { if (page === 0) showMenu(); else { page--; showVocab(); } };
    el.querySelector("#lcNext").onclick = () => {
      if (!lastStep) { page++; showVocab(); return; }
      prog.done = Object.assign({}, prog.done, { vocab: true });
      saveProgress(prog);
      showMenu();
    };
    const host = el.querySelector("#lcPrac");
    if (host) mountPractice(host, buildPractice(p, sub), {
      speak, startAt: answered[page] ? 99 : 0, scene: p.scene && p.scene[0], icon: p.icon,
      onDone: () => { answered[page] = true; const n = el.querySelector("#lcNext"); if (n) n.disabled = false; },
    });
  }

  /* ----- Grammaire / Lecture / Écoute : pages à questions obligatoires ----- */
  // Au moins 3 questions par page (phrases à compléter générées depuis le texte) : plus d'écran avec une seule question et du vide.
  const vocW = (B.vocab || []).flatMap((v) => (v.words || []).map((w) => String(w[0]).trim())).filter((w) => !/\s/.test(w));
  const aug = (kind, pages) => (pages || []).map((p) => Object.assign({}, p, { qsPool: withExtraQs(kind, Object.assign({}, p, { examples: (p.examples || []).filter((e) => !/\{/.test(e[0])) }), vocW, 5) }));
  const ACT = {
    grammar: { icon: "⚙️", title: "Grammaire", sub: B.grammarSub, pages: aug("grammar", B.grammar) },
    reading: { icon: "📚", title: "Lecture", sub: "Lis le texte puis réponds aux questions.", pages: aug("reading", B.reading) },
    listening: { icon: "🎧", title: "Écoute", sub: "Écoute l’audio puis réponds aux questions.", pages: aug("listening", B.listening) },
    transversal: { icon: "🌱", title: "Transversale", sub: "", pages: [] },
    exercises: { icon: "🧩", title: "Exercices", sub: "Réponds : la correction s’affiche, tu peux réessayer.", pages: B.exercises },
  };
  const READERS = { Emma: "girl-1", Lucas: "boy-2", Maya: "girl-2", Alex: "boy-5", Noah: "boy-3" };
  const readerAva = (who) => { if (READERS[who]) return READERS[who]; let h = 0; for (const ch of String(who)) h = (h * 31 + ch.charCodeAt(0)) >>> 0; return `${h % 2 ? "boy" : "girl"}-${(h >>> 1) % 9 + 1}`; };
  const firstTry = {}; // "exercices:page:question" → réussi du premier coup ?
  const okQ = {}; // "activité:page" → { indexQuestion: true }

  // Étapes d'une activité : même principe que le vocabulaire — écrans courts (contenu), puis écrans de questions. Rien à faire défiler.
  const chunkEven = (arr, cap) => {
    const L = arr.length, nc = Math.max(1, Math.ceil(L / cap)), base = Math.floor(L / nc), extra = L % nc, out = [];
    for (let i = 0, k = 0; k < nc; k++) { const sz = base + (k < extra ? 1 : 0); out.push(arr.slice(i, i + sz)); i += sz; }
    return out;
  };
  const noMerge = new Set(), gLvl = {}, qCap = {}, noHint = new Set(), kwMax = {}; // écrans qui ne tiennent pas en un seul : on les redécoupe
  function actSteps(id, A) {
    const S = [];
    A.pages.forEach((p, pi) => {
      const mergeT = !noMerge.has(id + ":t" + pi);
      if (id === "grammar") {
        const lv = gLvl[id + ":g" + pi] || 0, R = p.table;
        if (p.qa) { /* page 100 % questions-réponses : pas de tableau, les règles sont dans les explications */ }
        else if (lv === 0) S.push({ t: "gall", p, pi, rows: R, ex: true });
        else if (lv === 1) S.push({ t: "gall", p, pi, rows: R, ex: false }); // règles seules ; exemples avec la 1re question
        else {
          const ch = chunkEven(R, 4);
          ch.forEach((rows, ci) => S.push({ t: "gtab", p, pi, rows, ci, n: ch.length }));
          S.push({ t: "gex", p, pi });
        }
      } else if (id === "transversal" && p.kind === "words") {
        const ch = chunkEven(p.words, 6);
        ch.forEach((words, ci) => S.push({ t: "twords", p, pi, words, ci, n: ch.length }));
      } else if (p.kind === "write") S.push({ t: "twrite", p, pi });
      const hasText = id === "reading" || id === "listening" || (id === "exercises" && (p.passage || p.audio));
      if (hasText && (!mergeT || !p.qs.length)) S.push({ t: "text", p, pi });
      const special = (hasText && mergeT) || (id === "grammar" && (gLvl[id + ":g" + pi] || 0) === 1);
      if (p.qsPool) { // nombre de questions choisi pour que chaque écran soit plein (pas de question seule)
        let n = Math.max(p.qs.length, 3); const pool = p.qsPool;
        if (special ? n % 2 === 0 : n % 2 === 1) n += 1;
        n = Math.min(n, pool.length); if (special ? n % 2 === 0 : n % 2 === 1) n = Math.max(n - 1, 1);
        p = Object.assign({}, p, { qs: pool.slice(0, Math.max(n, 1)) });
      }
      if (p.qs.length) {
        const all = p.qs.map((_, i) => i), wt = hasText && mergeT;
        const qc = qCap[id + ":" + pi] || 2;
        const wex = id === "grammar" && (gLvl[id + ":g" + pi] || 0) === 1;
        const ch = wt || wex ? [all.slice(0, 1), ...chunkEven(all.slice(1), qc)].filter((x) => x.length) : chunkEven(all, qc);
        ch.forEach((ix, ci) => S.push({ t: "qs", p, pi, ix, ci, n: ch.length, withText: wt && ci === 0, withEx: wex && ci === 0 }));
      }
    });
    return S;
  }
  function showAct(id) {
    screen = id;
    const A = ACT[id], steps = actSteps(id, A), total = steps.length;
    if (page >= total) page = total - 1;
    const st = steps[page], p = st.p, key = id + (id === "transversal" ? ":d" + tday : "") + ":" + st.pi, exit = id === "transversal" ? showTransvList : showMenu;
    const c = currentCharacter();
    const sub = (x) => x.replace(/\{name\}/g, c.name);
    const li = (en, fr) => `<li><span class="lc-w"><b>${esc(sub(en))}</b><small>${esc(sub(fr))}</small></span>${spk(sub(en))}</li>`;
    let body = "", hint = "", btn = "Suivant →", bubble = "À toi de jouer !", station = 1;
    const nxt = steps[page + 1], toQ = st.t !== "qs" && nxt && nxt.t === "qs" && nxt.pi === st.pi;
    if (toQ && !(st.t === "gall" && !st.ex)) { btn = id === "reading" || id === "listening" ? "Questions ✏️" : "Exercices ✏️"; if (!noHint.has(id + st.pi)) hint = `<p class="lc-nexthint">👉 Page suivante : ${id === "reading" || id === "listening" ? "les questions" : "les exercices"}</p>`; }

    const exBody = () => `<section class="lc-card lc-ctx"><h2 class="lc-h2 lc-h2-ctx">💡 Exemples</h2><ul class="lc-list lc-vl">${p.examples.map(([en, fr]) => li(en, fr)).join("")}</ul></section>`;
    let textBody = "";
    if (st.t === "text" || st.withText) {
      if (id === "reading") {
        bubble = "Lis le texte !";
        textBody = `<section class="lc-card"><h2 class="lc-h2">${ico(`assets/img/characters/${readerAva(p.who)}.webp`)} ${esc(p.who)}</h2>
          <p class="lc-text">${esc(p.text)}</p>
          <div class="lc-actions"><button type="button" class="lc-chip" data-say="${esc(p.text)}">🔊 Écouter</button><button type="button" class="lc-chip" id="lcTr" aria-expanded="false">Voir la traduction</button></div>
          <p class="lc-tr" id="lcTrText" hidden>${esc(p.fr)}</p></section>`;
      } else if (id === "listening") {
        bubble = "Écoute bien !";
        textBody = `<section class="lc-card"><h2 class="lc-h2">🎧 ${esc(p.title)}</h2>
          <div class="lc-player"><button type="button" class="lc-play" data-say="${esc(p.text)}" aria-label="Écouter l’audio">▶</button>
            <span class="lc-wave" aria-hidden="true"></span><button type="button" class="lc-speed" id="lcSpeed" aria-label="Vitesse de lecture">${speedMul === 1 ? "1x" : "0.75x"}</button></div>
          <div class="lc-actions"><button type="button" class="lc-chip" id="lcTr" aria-expanded="false">Afficher la transcription</button></div>
          <p class="lc-tr" id="lcTrText" hidden>${esc(p.text)}</p></section>`;
      } else {
        bubble = "Lis et écoute !";
        textBody = `<section class="lc-card"><h2 class="lc-h2">🧩 ${esc(p.title)}</h2><p class="lc-lead">${esc(p.help || "")}</p>
          ${p.passage ? `<p class="lc-text">${esc(p.passage)}</p><div class="lc-actions"><button type="button" class="lc-chip" data-say="${esc(p.passage)}">🔊 Écouter</button></div>` : ""}
          ${p.audio ? `<div class="lc-player"><button type="button" class="lc-play" data-say="${esc(p.audio)}" aria-label="Écouter l’audio">▶</button><span class="lc-wave" aria-hidden="true"></span><button type="button" class="lc-speed" id="lcSpeed" aria-label="Vitesse de lecture">${speedMul === 1 ? "1x" : "0.75x"}</button></div>` : ""}</section>`;
      }
    }
    // Écran de lecture un peu vide : on ajoute « Mots du texte » (vocabulaire de la leçon repéré dans le texte)
    let kwBody = "";
    if (st.t === "text" && id === "reading" && (kwMax[key] ?? 4) >= 2) {
      const tx = " " + String(p.text).toLowerCase().replace(/[^a-z0-9'’ -]/g, " ") + " ", seen = new Set();
      const kw = (B.vocab || []).flatMap((v) => (v.words || [])).filter(([en]) => { const e = String(en).toLowerCase().trim(); if (seen.has(e) || e.length < 3) return false; seen.add(e); return new RegExp(" " + e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + "(s|es)? ").test(tx); })
        .sort((a, b) => b[0].length - a[0].length).slice(0, kwMax[key] ?? 4);
      if (kw.length >= 2) kwBody = `<section class="lc-card lc-ctx lc-kw"><h2 class="lc-h2 lc-h2-ctx">🔑 Mots du texte</h2><ul class="lc-list lc-vl">${kw.map(([en, fr]) => li(en, fr)).join("")}</ul></section>`;
    }
    if (st.t === "gall") {
      station = 0; bubble = "Retiens la règle !";
      body = `<section class="lc-card"><h2 class="lc-h2">${p.icon} ${esc(p.title)}${st.n > 1 ? ` <span class="lc-part">${st.ci + 1}/${st.n}</span>` : ""}</h2>
        <ul class="lc-list lc-vl lc-rules">${st.rows.map(([a, b, f]) => `<li><span class="lc-w"><b>${esc(a)}</b><span class="lc-form">${esc(b)}</span><small>${esc(f)}</small></span></li>`).join("")}</ul></section>${st.ex ? exBody() : ""}`;
    } else if (st.t === "gtab") {
      station = 0; bubble = "Retiens la règle !";
      body = `<section class="lc-card"><h2 class="lc-h2">${p.icon} ${esc(p.title)}${st.n > 1 ? ` <span class="lc-part">${st.ci + 1}/${st.n}</span>` : ""}</h2>
        <ul class="lc-list lc-vl lc-rules">${st.rows.map(([a, b, f]) => `<li><span class="lc-w"><b>${esc(a)}</b><span class="lc-form">${esc(b)}</span><small>${esc(f)}</small></span></li>`).join("")}</ul></section>`;
    } else if (st.t === "gex") {
      station = 0; bubble = "Écoute et répète !";
      body = `<section class="lc-card lc-ctx"><h2 class="lc-h2 lc-h2-ctx">💡 Exemples</h2><ul class="lc-list lc-vl">${p.examples.map(([en, fr]) => li(en, fr)).join("")}</ul></section>`;
    } else if (st.t === "twords") {
      station = 0; bubble = "Écoute et répète !";
      body = `<section class="lc-card"><h2 class="lc-h2">🔊 ${esc(p.title)}${st.n > 1 ? ` <span class="lc-part">${st.ci + 1}/${st.n}</span>` : ""}</h2>${st.ci === 0 && p.goal ? `<p class="lc-lead">${esc(p.goal)}</p>` : ""}<ul class="lc-list lc-vl">${st.words.map(([en, fr]) => li(en, fr)).join("")}</ul></section>`;
    } else if (st.t === "twrite") {
      station = 0; bubble = "Écris en anglais !";
      body = `<section class="lc-card"><h2 class="lc-h2">✍️ Expression écrite</h2><p class="lc-lead">${esc(p.prompt)}</p><textarea id="lcTa" class="lc-ta" rows="5" aria-label="Ta réponse en anglais">${esc(writeTx[key] || "")}</textarea><p class="lc-small">Écris en anglais (au moins une phrase).</p></section>`;
    } else if (st.t === "text") {
      station = 0; body = textBody + kwBody;
    } else {
      const lbl = id === "grammar" || id === "exercises" || id === "transversal" ? "À toi de pratiquer !" : "Questions";
      body = `${st.withText ? textBody : ""}${st.withEx ? exBody() : ""}<section class="lc-card lc-prac"><h2 class="lc-h2 lc-h2-prac${(id === "reading" || id === "listening") && !st.withText && p.text ? " lc-h2-row" : ""}"><span>✏️ ${lbl}${st.n > 1 ? ` <span class="lc-part">${st.ci + 1}/${st.n}</span>` : ""}</span>${(id === "reading" || id === "listening") && !st.withText && p.text ? `<button type="button" class="lc-chip lc-recap" data-recap="${esc(p.text)}" data-kind="${id === "listening" ? "audio" : "text"}">${id === "listening" ? "🎧 Réécouter" : "📖 Revoir le texte"}</button>` : ""}</h2>
        ${st.ci === 0 && id === "exercises" && !(p.passage || p.audio) ? `<p class="lc-lead">${esc(p.title)}${p.help ? " — " + esc(p.help) : ""}</p>` : ""}
        ${st.ix.map((qi, k) => { const q = p.qs[qi]; return `<div class="lc-qb" data-qi="${qi}"><p class="lc-q">${qi + 1}. ${esc(q[0])}</p>
        <div class="lc-choices" role="group">${q[1].map((o, i) => `<button type="button" class="lc-choice" data-qi="${qi}" data-i="${i}">${esc(o)}</button>`).join("")}</div>
        <p class="lc-fb" aria-live="polite"></p></div>`; }).join("")}</section>`;
    }

    const last = page === total - 1;
    if (last) btn = "Terminer ✓";
    const foot = `<footer class="lc-foot"><button type="button" class="lc-sec-btn" id="lcPrev">← Précédent</button>
      <button type="button" class="lc-cta lc-next" id="lcNext" disabled>${btn}</button></footer>`;
    const guide = `<div class="lc-guide">${ico(c.src, "lc-ava-md")}<div class="lc-gbub">${esc(bubble)}</div>
      <div class="lc-path" aria-hidden="true"><i class="${station > 0 ? "d" : "c"}"></i><u></u><i class="${station > 0 ? "c" : ""}"></i></div></div>`;
    frame(HEAD, { cur: page + 1, total }, `${guide}${body}${hint}`, foot);
    el.querySelector(".lc-main").scrollTop = 0;
    {
      const mn = el.querySelector(".lc-main"), ft = el.querySelector(".lc-foot"), lastEl = mn.lastElementChild;
      if (lastEl && ft && (lastEl.getBoundingClientRect().bottom > ft.getBoundingClientRect().top - 6 || mn.scrollHeight > mn.clientHeight + 2)) {
        const gk = id + ":g" + st.pi;
        if (kwBody) { kwMax[key] = (kwMax[key] ?? 4) - 1; showAct(id); return; }
        if (hint && !noHint.has(id + st.pi)) { noHint.add(id + st.pi); showAct(id); return; }
        if (st.t === "gall" && (gLvl[gk] || 0) < 2) { gLvl[gk] = (gLvl[gk] || 0) + 1; showAct(id); return; }
        if (st.t === "qs" && st.withEx) { gLvl[id + ":g" + st.pi] = 2; showAct(id); return; }
        if (st.t === "qs" && !st.withText && st.ix.length > 1) { qCap[id + ":" + st.pi] = 1; showAct(id); return; }
        const k = st.withText ? id + ":t" + st.pi : null;
        if (k && !noMerge.has(k)) { noMerge.add(k); showAct(id); return; }
      }
    }

    fillRows();
    const next = el.querySelector("#lcNext");
    const refresh = () => {
      if (st.t === "qs") next.disabled = !st.ix.every((qi) => (okQ[key] || {})[qi]);
      else if (st.t === "twrite") next.disabled = (writeTx[key] || "").trim().length < 15;
      else next.disabled = false;
    };
    const xp = (q, i) => (Array.isArray(q[3]) ? q[3][i] : q[3]) || "";
    const mark = (qi, withMsg) => {
      const q = p.qs[qi], box = el.querySelector(`.lc-qb[data-qi="${qi}"]`);
      if (!box) return;
      box.querySelectorAll(".lc-choice").forEach((x) => { x.disabled = true; x.classList.toggle("lc-right", Number(x.dataset.i) === q[2]); });
      const fb = box.querySelector(".lc-fb"); fb.className = "lc-fb lc-fb-ok"; fb.textContent = withMsg ? "Bravo ! " + xp(q, q[2]) : "✓ " + xp(q, q[2]);
    };
    Object.keys(okQ[key] || {}).forEach((qi) => mark(Number(qi), false));
    refresh();

    el.querySelector("#lcBack").onclick = exit;
    el.querySelector("#lcPrev").onclick = () => { if (page === 0) exit(); else { page--; showAct(id); } };
    const wta = el.querySelector("#lcTa"); if (wta) { wta.addEventListener("input", () => { writeTx[key] = wta.value; refresh(); }); mountAdvice(() => wta.value); }
    next.onclick = () => {
      if (!last) { page++; showAct(id); return; }
      if (id === "transversal") {
        prog.transv = Object.assign({}, prog.transv, { [tday]: true });
        const n = Object.keys(prog.transv).length;
        prog.scores = Object.assign({}, prog.scores, { transversal: `${n}/7 jours` });
        if (n >= 7) prog.done = Object.assign({}, prog.done, { transversal: true });
        saveProgress(prog); showTransvList(); return;
      }
      prog.done = Object.assign({}, prog.done, { [id]: true });
      if (id === "exercises") {
        let sc = 0, tot = 0;
        B.exercises.forEach((pg, k) => pg.qs.forEach((_, qi) => { tot++; if (firstTry[`exercises:${k}:${qi}`] === true) sc++; }));
        prog.scores = Object.assign({}, prog.scores, { exercises: `${sc}/${tot}` });
      }
      saveProgress(prog); showMenu();
    };
    el.querySelectorAll(".lc-choice").forEach((b) => b.addEventListener("click", () => {
      const qi = Number(b.dataset.qi), q = p.qs[qi], ftKey = `${key}:${qi}`;
      el.querySelectorAll(`.lc-qb[data-qi="${qi}"] .lc-choice`).forEach((x) => x.classList.remove("lc-wrong"));
      if (Number(b.dataset.i) === q[2]) { if (firstTry[ftKey] === undefined) firstTry[ftKey] = true; okQ[key] = Object.assign({}, okQ[key], { [qi]: true }); mark(qi, true); refresh(); }
      else { firstTry[ftKey] = false; b.classList.add("lc-wrong"); const fb = b.closest(".lc-qb").querySelector(".lc-fb"); fb.className = "lc-fb lc-fb-ko"; fb.textContent = Array.isArray(q[3]) ? "Pas tout à fait — " + xp(q, Number(b.dataset.i)) + " Réessaie." : id === "exercises" ? "Pas tout à fait — " + (q[3] || "") + " Réessaie." : "Pas tout à fait, réessaie."; }
    }));
    const tr = el.querySelector("#lcTr");
    if (tr) tr.onclick = () => { const t = el.querySelector("#lcTrText"); t.hidden = !t.hidden; tr.setAttribute("aria-expanded", String(!t.hidden)); };
    const sp = el.querySelector("#lcSpeed");
    if (sp) sp.onclick = () => { speedMul = speedMul === 1 ? 0.75 : 1; sp.textContent = speedMul === 1 ? "1x" : "0.75x"; };
  }

  /* ----- Expression : parler ou écrire (validation si ≥ 3 éléments repérés) ----- */
  const spkState = { tab: "write", text: {}, heard: {}, said: {}, ok: {} };
  function showSpeak() {
    screen = "speaking";
    const tab = spkState.tab;
    // Les exercices de traduction (p.trad) s'écrivent seulement : ils n'apparaissent pas dans l'onglet « Parler ».
    const EXL = tab === "speak" ? B.expression.filter((x) => !x.trad) : B.expression;
    const p = EXL[page], total = EXL.length, c = currentCharacter();
    const sub = (x) => x.replace(/\{name\}/g, c.name);
    const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
    const txt = (tab === "write" ? spkState.text[page] : spkState.heard[page]) || "";
    const TRS = (spkState.trad = spkState.trad || {});
    // Page « Traduction » : une phrase = une carte, chaque phrase est vérifiée séparément (mots-clés, sans accents).
    const normT = (t) => String(t || "").toLowerCase().replace(/œ/g, "oe").replace(/æ/g, "ae").normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]+/g, " ").trim();
    const rowOk = (r, txt) => { const n = " " + normT(txt) + " "; return normT(txt).length >= Math.max(4, normT(r.model).length * 0.5) && r.keys.every((g) => g.some((x) => n.includes(normT(x)))); };
    const trSt = (d) => (TRS[page + d] = TRS[page + d] || { text: {}, res: {}, tries: {}, rev: {} });
    const trCount = (pt) => { const st = trSt(pt.dir); return pt.rows.filter((_, i) => st.res[i] || st.rev[i]).length; };
    const trDone = (pt) => trCount(pt) >= Math.ceil(pt.rows.length * 0.8);
    const curDir = TRS.dir || "fr";
    const trBody = () => { const pt = p.parts.find((x) => x.dir === curDir) || p.parts[0], st = trSt(pt.dir), fr = pt.dir === "fr";
      return `<section class="lc-card"><h2 class="lc-h2">🔁 Traduction</h2>
      <div class="lc-seg">${p.parts.map((x) => `<button type="button" class="${x.dir === pt.dir ? "on" : ""}" data-dir="${x.dir}"><span class="lc-pill">${x.dir === "fr" ? "EN" : "FR"}</span>→<span class="lc-pill fr">${x.dir === "fr" ? "FR" : "EN"}</span> <b>${trCount(x)}/${x.rows.length}</b>${trDone(x) ? " <i>✓</i>" : ""}</button>`).join("")}</div>
      <p class="lc-trad-t">${esc(pt.title)} · traduis phrase par phrase</p>
      ${pt.rows.map((r, i) => { const ok = st.res[i], rev = st.rev[i], ko = st.res[i] === false, tr = st.tries[i] || 0;
        return `<div class="lc-ph ${ok ? "ok" : ko ? "ko" : ""}"><span class="lc-n">${i + 1}</span><div class="lc-ph-b"><p>${esc(r.src)}</p>
          <textarea data-i="${i}" rows="2" placeholder="${fr ? "Ta traduction en français…" : "Ta traduction en anglais…"}" aria-label="${fr ? "Traduction en français" : "Traduction en anglais"} de la phrase ${i + 1}" ${ok ? "readonly" : ""}>${esc(st.text[i] || "")}</textarea>
          ${ko && !rev ? `<small class="lc-ko">Pas tout à fait : relis et corrige.</small>${tr >= 2 ? ` <button type="button" class="lc-see" data-i="${i}">Voir la correction</button>` : ""}` : ""}
          ${ok || rev ? `<small class="lc-mo">${rev && !ok ? "Correction" : "Modèle"} : <b>${esc(r.model)}</b></small>` : ""}</div>
          <span class="lc-st">${ok ? "✅" : rev ? "💡" : ko ? "❌" : ""}</span></div>`; }).join("")}
      <button type="button" class="lc-cta lc-trad-ok">Valider</button>
      <p class="lc-trad-msg" aria-live="polite">${trDone(pt) ? "Série réussie : bravo !" : `${trCount(pt)}/${pt.rows.length} phrases justes. Objectif : ${Math.ceil(pt.rows.length * 0.8)}.`}</p></section>`; };
    const body = p.trad ? trBody() : `<section class="lc-card"><h2 class="lc-h2">${p.icon} ${esc(p.title)}</h2>
      ${p.img ? `<figure class="lc-pic"><img src="assets/img/lesson/${p.img}.webp?v=20261019b4" alt="Image à décrire" onerror="this.closest('figure').remove()"/></figure>` : ""}
      <div class="lc-tabs" role="tablist">
        ${`<button type="button" class="lc-tab ${tab === "speak" ? "on" : ""}" data-tab="speak" role="tab" aria-selected="${tab === "speak"}">🎤 Parler</button>`}
        <button type="button" class="lc-tab ${tab === "write" ? "on" : ""}" data-tab="write" role="tab" aria-selected="${tab === "write"}">✍️ Écrire</button></div>
      <ol class="lc-prompts">${p.prompts.map((x) => `<li>${esc(x)}</li>`).join("")}</ol>
      <div class="lc-model"><span class="lc-w"><small>Modèle</small><b>${esc(sub(p.model))}</b></span>${spk(sub(p.model))}</div>
      ${tab === "write"
        ? `<textarea id="lcTa" class="lc-ta" rows="4" placeholder="Écris en anglais…" aria-label="Ta réponse en anglais">${esc(txt)}</textarea>`
        : `<div class="lc-mic">${(SR || window.MediaRecorder) ? `<button type="button" class="lc-micbtn" id="lcMic" aria-label="Appuie et parle">🎙️</button><p class="lc-small">Appuie, parle en anglais, puis appuie sur ⏹ pour terminer.</p>` : `<p class="lc-small">La reconnaissance vocale n’est pas disponible sur cet appareil : dis ta réponse à voix haute, puis coche la case.</p>`}
            <p class="lc-heard" id="lcHeard">${esc(txt)}</p>
            <button type="button" class="lc-sec-btn" id="lcReplay" ${spkState.url && spkState.url[page] ? "" : "hidden"}>▶ Me réécouter</button>
            <label class="lc-said"><input type="checkbox" id="lcSaid" ${spkState.said[page] ? "checked" : ""}/> J’ai dit ma réponse à voix haute</label></div>`}
      <ul class="lc-checks lc-chips" id="lcChecks" aria-live="polite"></ul></section>`;
    const last = page === total - 1;
    const foot = `<footer class="lc-foot"><button type="button" class="lc-sec-btn" id="lcPrev">← Précédent</button>
      <button type="button" class="lc-cta lc-next" id="lcNext" disabled>${last ? "Terminer ✓" : "Suivant →"}</button></footer>`;
    frame(HEAD, { cur: page + 1, total }, body, foot);
    el.querySelector(".lc-main").scrollTop = 0;

    const next = el.querySelector("#lcNext");
    const normalPaint = () => {
      const cur = (tab === "write" ? spkState.text[page] : spkState.heard[page]) || "";
      const res = p.checks.map(([l, re]) => [l, rxTest(re, cur)]);
      el.querySelector("#lcChecks").innerHTML = res.map(([l, ok]) => `<li class="${ok ? "on" : ""}"><span>${ok ? "✓" : "○"}</span>${esc(l)}</li>`).join("");
      if (res.filter((r) => r[1]).length >= 3 || (tab === "speak" && spkState.said[page])) spkState.ok[tab + page] = true;
      next.disabled = !spkState.ok[tab + page];
    };
    // Page de traduction : on passe à la suite quand les deux séries (EN→FR et FR→EN) sont réussies.
    const tradPaint = () => { next.disabled = !p.parts.every(trDone); };
    const paint = p.trad ? tradPaint : normalPaint;
    if (p.trad) {
      const keep = (fn) => { const m = el.querySelector(".lc-main"), y = m ? m.scrollTop : 0; fn(); const m2 = el.querySelector(".lc-main"); if (m2) m2.scrollTop = y; };
      const pt = p.parts.find((x) => x.dir === curDir) || p.parts[0], st = trSt(pt.dir);
      el.querySelectorAll(".lc-seg button").forEach((b) => (b.onclick = () => { TRS.dir = b.dataset.dir; showSpeak(); }));
      el.querySelectorAll(".lc-ph textarea").forEach((ta) => ta.addEventListener("input", () => { st.text[ta.dataset.i] = ta.value; if (st.res[ta.dataset.i] === false) { delete st.res[ta.dataset.i]; } }));
      el.querySelectorAll(".lc-see").forEach((b) => (b.onclick = () => keep(() => {
        st.rev[b.dataset.i] = true;
        if (trDone(pt)) { prog.trad = Object.assign({}, prog.trad, { [pt.dir]: Object.assign({ ok: 0, tot: pt.rows.length }, (prog.trad || {})[pt.dir], { done: true }) }); saveProgress(prog); }
        showSpeak(); })));
      el.querySelector(".lc-trad-ok").onclick = () => keep(() => {
        let n = 0;
        pt.rows.forEach((r, i) => { const t = (st.text[i] || "").trim(); if (!t || st.res[i]) return; n++; st.res[i] = rowOk(r, t); st.tries[i] = (st.tries[i] || 0) + 1; });
        if (!n) { toast("Écris au moins une traduction avant de valider"); return; }
        // Livret de notes : on garde, par sens, le meilleur nombre de phrases justes (les corrections vues ne comptent pas dans la note).
        const good = pt.rows.filter((_, i) => st.res[i]).length, old = (prog.trad || {})[pt.dir] || {};
        prog.trad = Object.assign({}, prog.trad, { [pt.dir]: { ok: Math.max(good, old.ok || 0), tot: pt.rows.length, done: !!old.done || trDone(pt), at: new Date().toISOString().slice(0, 10) } });
        saveProgress(prog);
        showSpeak();
      });
    }
    paint();
    { const mn = el.querySelector(".lc-main"); if (mn.scrollHeight > mn.clientHeight + 2) mn.classList.add("lc-tight"); }
    el.querySelectorAll(".lc-tab").forEach((b) => b.addEventListener("click", () => { spkState.tab = b.dataset.tab; showSpeak(); }));
    const ta = el.querySelector("#lcTa");
    if (ta) { ta.addEventListener("input", () => { spkState.text[page] = ta.value; paint(); }); mountAdvice(() => ta.value); }
    const said = el.querySelector("#lcSaid");
    if (said) said.addEventListener("change", () => { spkState.said[page] = said.checked; paint(); });
    const mic = el.querySelector("#lcMic");
    if (mic) {
      spkState.url = spkState.url || {};
      let on = false;
      const V = createVoice({
        onState: (st) => { on = st === "listening"; mic.textContent = on ? "⏹" : "🎙️"; mic.classList.toggle("lc-mic-on", on); },
        onText: (t) => { spkState.heard[page] = t; const h = el.querySelector("#lcHeard"); if (h) h.textContent = t; },
        onDone: ({ alts, url }) => {
          if (alts && alts[0]) spkState.heard[page] = alts[0];
          if (url) { spkState.url[page] = url; const r = el.querySelector("#lcReplay"); if (r) r.hidden = false; }
          const h = el.querySelector("#lcHeard"); if (h) h.textContent = spkState.heard[page] || "";
          paint();
        },
        onError: (c) => toast(c === "denied" ? "Micro refusé : autorise-le dans les réglages" : "Micro indisponible sur cet appareil"),
      });
      mic.onclick = () => (on ? V.stop() : V.start());
      const rp = el.querySelector("#lcReplay");
      if (rp) rp.onclick = () => { try { new Audio(spkState.url[page]).play(); } catch (e) { toast("Lecture impossible"); } };
    }
    el.querySelector("#lcBack").onclick = showMenu;
    el.querySelector("#lcPrev").onclick = () => { if (page === 0) showMenu(); else { page--; showSpeak(); } };
    next.onclick = () => {
      if (!last) { page++; showSpeak(); return; }
      // Fin d'une série (6 sujets) : on propose l'autre mode (Parler ↔ Écrire) avant de revenir au menu.
      spkState.modeDone = Object.assign({}, spkState.modeDone, { [tab]: true });
      const other = tab === "speak" ? "write" : "speak";
      if (!spkState.modeDone[other]) {
        spkState.tab = other; page = 0;
        toast(other === "write" ? "Parler : terminé ! Maintenant, écris les mêmes sujets." : "Écrire : terminé ! Maintenant, parle sur les mêmes sujets.");
        showSpeak(); return;
      }
      prog.done = Object.assign({}, prog.done, { speaking: true }); saveProgress(prog); showMenu();
    };
  }

  /* ----- Conversation : le personnage parle, l'élève répond en anglais ----- */
  const dlgState = { done: {} };
  const sceneHero = (k) => { const sl = (B.vocab || []).filter((x) => x.scene).map((x) => x.scene).concat(B.scenes || []), sc = sl[k % Math.max(1, sl.length)]; return sc ? `<div class="lc-scenes lc-scene-sm lc-exhero"><figure><img src="assets/img/lesson/${sc[0]}.webp?v=20261019b4" alt="" loading="lazy" onerror="this.closest('.lc-exhero').remove()"/></figure></div>` : ""; };
  function showDialogueList() {
    screen = "dialogue";
    const done = prog.dialogues || {};
    const rows = DLG.map((d, i) => `<button type="button" class="lc-row" data-dlg="${i}">
      <span class="lc-num">${i + 1}</span><span class="lc-ic">${d.icon}</span>
      <span class="lc-txt"><b>${esc(d.title)}</b><small>${esc(d.scene)}</small></span><span class="lc-go">${done[i] ? "✓" : "›"}</span></button>`).join("");
    frame(HEAD, null, `<div class="lc-vocab-head"><span class="lc-vh-ic">💬</span><div><h1>Conversation</h1><p>Le personnage parle. Tu réponds en anglais.</p></div></div>${sceneHero(3)}<section class="lc-card lc-menu">${rows}</section>`);
    fillSpace();
    el.querySelector("#lcBack").onclick = showMenu;
    el.querySelectorAll("[data-dlg]").forEach((b) => b.addEventListener("click", () => runDialogue(Number(b.dataset.dlg))));
  }
  function runDialogue(di) {
    screen = "dialogue";
    const D = DLG[di];
    const log = [];            // {who:"npc"|"me", text, tag?}
    let turn = 0, tries = 0, helped = false;
    const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
    let recOn = false, vUrl = null, recTimer = null;
    const V = createVoice({
      onState: (st) => {
        recOn = st === "listening"; const m = el.querySelector("#dlgMic"); if (m) m.textContent = recOn ? "⏹ Terminer" : "🎙️ Parler";
        clearInterval(recTimer); const rb = el.querySelector("#dlgRec");
        if (recOn) { const t0 = Date.now(); const tick = () => { const s = Math.floor((Date.now() - t0) / 1000); if (rb) rb.innerHTML = `<span class="lc-recdot"></span> Enregistrement… ${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")} — parle en anglais, puis appuie sur « ⏹ Terminer »`; }; if (rb) rb.hidden = false; tick(); recTimer = setInterval(tick, 500); }
        else if (rb) { if (vUrl) rb.innerHTML = "✅ Enregistré. Appuie sur « ▶ Me réécouter », puis compare avec « 🔊 Modèle »."; else rb.hidden = true; }
      },
      onText: (t) => { const ta = el.querySelector("#dlgIn"); if (ta && t) ta.value = t; },
      onDone: ({ alts, url }) => {
        const ta = el.querySelector("#dlgIn"); if (ta && alts && alts[0]) ta.value = alts[0];
        if (url) { vUrl = url; const r = el.querySelector("#dlgReplay"); if (r) r.hidden = false; const md = el.querySelector("#dlgModel"); if (md) md.hidden = false; const rb = el.querySelector("#dlgRec"); if (rb) { rb.hidden = false; rb.innerHTML = "✅ Enregistré. Appuie sur « ▶ Me réécouter », puis compare avec « 🔊 Modèle »." + (alts && alts[0] ? "" : " <small>(Sur iPhone, l’appli ne comprend pas ta voix : écris aussi ta réponse pour être corrigé.)</small>"); } }
        const mm = el.querySelector("#dlgMsg"); if (!(alts && alts[0]) && url && ta) { ta.placeholder = "Tape ta réponse (l’appli ne transcrit pas ta voix ici), puis réécoute-toi."; }
      },
      onError: (c) => toast(c === "denied" ? "Micro refusé : autorise-le dans les réglages" : c === "play" ? "Lecture impossible : vérifie le volume et le mode silencieux" : "Micro indisponible sur cet appareil"),
    });
    const norm = (t) => String(t || "").replace(/[’‘`´]/g, "'").replace(/\s+/g, " ").trim();
    const matches = (T, txt) => { const n = norm(txt); const mu = MUST_A1[`${String(B.code).replace("A1.", "")}.${di}.${turn}`]; return T.ok.some((re) => new RegExp(re, "i").test(n)) && (!mu || new RegExp(mu, "i").test(n)); };
    let fplan = null, fi = 0;
    function drawEnd() {
      const msgHtml = (m) => `<div class="lc-chat ${m.who}"><span>${esc(m.text)}</span>${m.who === "npc" ? spk(m.text) : ""}${m.tag ? `<em>${esc(m.tag)}</em>` : ""}${m.reg ? `<small class="lc-alt"><b>Formel :</b> ${esc(m.reg[0])} ${spk(m.reg[0])}<br><b>Informel :</b> ${esc(m.reg[1])} ${spk(m.reg[1])}</small>` : ""}</div>`;
      const pairs = []; for (let i = 0; i < log.length; i += 2) pairs.push(log.slice(i, i + 2).map(msgHtml).join(""));
      const extras = `<p class="lc-small">Conversation terminée. ✓ = ta réponse contient les bons éléments. L’appli ne vérifie pas toute la grammaire : compare avec les versions « Formel » et « Informel » sous chaque réponse.</p><div class="lc-advice"><p class="lc-advice-info">💡 Conseil facultatif d’une IA (Google Gemini). Tes réponses sont envoyées à Google. Ne change pas ta note.</p><button type="button" class="lc-sec-btn" id="dlgAdv">💡 Faire corriger mes réponses</button><div class="lc-advice-out" id="dlgAdvOut" aria-live="polite"></div></div>`;
      const mk = (a, z, lastPage) => `<section class="lc-card">${a === 0 ? `<h2 class=\"lc-h2\">${D.icon} ${esc(D.title)}</h2>` : ""}<div class="lc-chatbox lc-chatfull">${pairs.slice(a, z).join("")}</div>${lastPage ? extras : ""}</section>`;
      const foot = (i, n) => `<footer class="lc-foot">${i > 0 ? '<button type="button" class="lc-sec-btn" id="dlgPrev">← Précédent</button>' : ""}${i < n - 1 ? '<button type="button" class="lc-cta lc-next" id="dlgNextP">Suivant →</button>' : '<button type="button" class="lc-cta" id="dlgEnd">Terminer ✓</button>'}</footer>`;
      const cnt = { cur: D.turns.length, total: D.turns.length };
      const fits = () => { const m = el.querySelector(".lc-main"), f = el.querySelector(".lc-foot"); return m.scrollHeight <= m.clientHeight + 2 && (!f || m.lastElementChild.getBoundingClientRect().bottom <= f.getBoundingClientRect().top - 10); };
      if (!fplan) {
        fplan = []; let a = 0;
        while (a < pairs.length) {
          let z = pairs.length;
          for (;;) { frame(HEAD, cnt, mk(a, z, z === pairs.length), foot(0, 2)); if (fits() || z - a <= 1) break; z--; }
          fplan.push([a, z]); a = z;
        }
      }
      fi = Math.min(fi, fplan.length - 1);
      const [a, z] = fplan[fi];
      frame(HEAD, cnt, mk(a, z, z === pairs.length), foot(fi, fplan.length));
      fillSpace();
      el.querySelector("#lcBack").onclick = showDialogueList;
      const pv = el.querySelector("#dlgPrev"); if (pv) pv.onclick = () => { fi--; drawEnd(); };
      const nx = el.querySelector("#dlgNextP"); if (nx) nx.onclick = () => { fi++; drawEnd(); };
      const ab = el.querySelector("#dlgAdv"), ao = el.querySelector("#dlgAdvOut");
      if (ab) ab.onclick = async () => {
        if (adviceLeft() <= 0) { ao.textContent = "Tu as utilisé tes " + ADVICE_MAX_PER_DAY + " conseils du jour. Reviens demain !"; return; }
        ab.disabled = true; ao.textContent = "L’IA lit tes réponses…";
        const txt = log.map((m) => (m.who === "npc" ? "Friend: " : "Learner: ") + m.text).join("\n");
        try { const r = await fetchAdvice("Corrige UNIQUEMENT les phrases du Learner (grammaire, mots, majuscules), une par une, avec la version corrigée.\n" + txt, D.title, "Dialogue débutant A1. Sois précis et bref."); adviceUsed(); ao.textContent = r; ao.classList.add("on"); }
        catch (e) { ao.textContent = e.message === "quota" ? "Service très demandé. Réessaie plus tard." : e.message === "not_configured" ? "Les conseils de l’IA ne sont pas encore activés." : "Impossible d’obtenir un conseil pour l’instant."; }
        finally { ab.disabled = false; }
      };
      const de = el.querySelector("#dlgEnd"); if (de) de.onclick = () => {
        prog.dialogues = Object.assign({}, prog.dialogues, { [di]: true });
        if (DLG.every((_, i) => (prog.dialogues || {})[i])) prog.done = Object.assign({}, prog.done, { dialogue: true });
        saveProgress(prog); showDialogueList();
      };
    }
    function draw(msg, noReg) {
      if (turn >= D.turns.length) { drawEnd(); return; }
      const T = D.turns[turn], finished = false;
      const chat = log.slice(-2).map((m) => `<div class="lc-chat ${m.who}"><span>${esc(m.text)}</span>${m.who === "npc" ? spk(m.text) : ""}${m.tag ? `<em>${esc(m.tag)}</em>` : ""}${m.reg && !noReg ? `<small class="lc-alt"><b>Formel :</b> ${esc(m.reg[0])} ${spk(m.reg[0])}<br><b>Informel :</b> ${esc(m.reg[1])} ${spk(m.reg[1])}</small>` : ""}</div>`).join("")
        + (!finished ? `<div class="lc-chat npc"><span>${esc(T.npc)}</span>${spk(T.npc)}</div>` : "");
      const input = finished ? `<p class="lc-small">Conversation terminée. ✓ = ta réponse contient les bons éléments. L’appli ne vérifie pas toute la grammaire : compare avec les versions « Formel » et « Informel » sous chaque réponse.</p><div class="lc-advice"><p class="lc-advice-info">💡 Conseil facultatif d’une IA (Google Gemini). Tes réponses sont envoyées à Google. Ne change pas ta note.</p><button type="button" class="lc-sec-btn" id="dlgAdv">💡 Faire corriger mes réponses</button><div class="lc-advice-out" id="dlgAdvOut" aria-live="polite"></div></div>` : `
        <textarea id="dlgIn" class="lc-ta" rows="2" placeholder="Écris ta réponse en anglais…" aria-label="Ta réponse en anglais"></textarea>
        ${msg ? `<p class="lc-small" id="dlgMsg" aria-live="polite">${msg}</p>` : ""}
        <p class="lc-rec" id="dlgRec" aria-live="polite" ${recOn ? "" : "hidden"}></p>
        <div class="lc-dlg-actions">${(SR || window.MediaRecorder) ? `<button type="button" class="lc-sec-btn" id="dlgMic">${recOn ? "⏹ Terminer" : "🎙️ Parler"}</button><button type="button" class="lc-sec-btn" id="dlgReplay" ${vUrl ? "" : "hidden"}>▶ Me réécouter</button><button type="button" class="lc-sec-btn" id="dlgModel" ${vUrl ? "" : "hidden"} data-say="${esc(T.model)}">🔊 Modèle</button>` : ""}
        <button type="button" class="lc-sec-btn" id="dlgHelp">💡 Aide</button>
        <button type="button" class="lc-cta" id="dlgSend">Répondre</button></div>`;
      frame(HEAD, { cur: Math.min(turn + 1, D.turns.length), total: D.turns.length },
        `<section class="lc-card"><h2 class="lc-h2">${D.icon} ${esc(D.title)}</h2><p class="lc-small">${esc(D.scene)}</p><div class="lc-chatbox">${chat}</div>${input}</section>`,
        finished ? `<footer class="lc-foot"><button type="button" class="lc-cta" id="dlgEnd">Terminer ✓</button></footer>` : "");
      { const mn = el.querySelector(".lc-main"); if (!noReg && mn.scrollHeight > mn.clientHeight + 2) { draw(msg, true); return; } }
      el.querySelector("#lcBack").onclick = showDialogueList;
      fillSpace();
      const cb = el.querySelector(".lc-chatbox"); if (cb) cb.scrollTop = cb.scrollHeight;
      if (finished) {
        const ab = el.querySelector("#dlgAdv"), ao = el.querySelector("#dlgAdvOut");
        ab.onclick = async () => {
          if (adviceLeft() <= 0) { ao.textContent = "Tu as utilisé tes " + ADVICE_MAX_PER_DAY + " conseils du jour. Reviens demain !"; return; }
          ab.disabled = true; ao.textContent = "L’IA lit tes réponses…";
          const txt = log.map((m) => (m.who === "npc" ? "Friend: " : "Learner: ") + m.text).join("\n");
          try { const r = await fetchAdvice("Corrige UNIQUEMENT les phrases du Learner (grammaire, mots, majuscules), une par une, avec la version corrigée.\n" + txt, D.title, "Dialogue débutant A1. Sois précis et bref."); adviceUsed(); ao.textContent = r; ao.classList.add("on"); }
          catch (e) { ao.textContent = e.message === "quota" ? "Service très demandé. Réessaie plus tard." : e.message === "not_configured" ? "Les conseils de l’IA ne sont pas encore activés." : "Impossible d’obtenir un conseil pour l’instant."; }
          finally { ab.disabled = false; }
        };
        el.querySelector("#dlgEnd").onclick = () => {
          prog.dialogues = Object.assign({}, prog.dialogues, { [di]: true });
          if (DLG.every((_, i) => (prog.dialogues || {})[i])) prog.done = Object.assign({}, prog.done, { dialogue: true });
          saveProgress(prog); showDialogueList();
        };
        return;
      }
      const ta = el.querySelector("#dlgIn");
      const send = () => {
        const v = norm(ta.value); if (!v) return;
        const nw = v.split(/\s+/).length;
        if (matches(T, v) && (nw >= 2 || /\b(bye|goodbye|yes|no|thanks|thank you|sorry|please)\b/i.test(v))) { log.push({ who: "npc", text: T.npc }); log.push({ who: "me", text: v, tag: helped ? "avec aide" : "✓", model: T.model, reg: REGISTERS_A1[`${String(B.code).replace("A1.","")}.${di}.${turn}`] }); turn++; tries = 0; helped = false; vUrl = null; draw(); }
        else { tries++; draw(tries >= 2 ? `Pas tout à fait. Essaie comme ceci : « ${esc(T.model)} »` : `Pas tout à fait. ${T.hint ? esc(T.hint) : "Réessaie."}`); el.querySelector("#dlgIn").value = v; }
      };
      el.querySelector("#dlgSend").onclick = send;
      ta.addEventListener("keydown", (e) => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); send(); } });
      el.querySelector("#dlgHelp").onclick = () => { helped = true; draw(`Modèle : « ${esc(T.model)} » — recopie-le ou change des mots.`); };
      const mic = el.querySelector("#dlgMic");
      if (mic) mic.onclick = () => (recOn ? V.stop() : (vUrl = null, V.start()));
      const rp = el.querySelector("#dlgReplay"); if (rp) rp.onclick = () => V.play();
      ta.focus();
    }
    draw();
  }

  /* ----- Écrire en anglais : dictée + « dis-le en anglais » (production libre, sans traduire) ----- */
  const CONTR = [[/\bi am\b/g, "i'm"], [/\byou are\b/g, "you're"], [/\bhe is\b/g, "he's"], [/\bshe is\b/g, "she's"], [/\bit is\b/g, "it's"], [/\bwe are\b/g, "we're"], [/\bthey are\b/g, "they're"], [/\bdo not\b/g, "don't"], [/\bdoes not\b/g, "doesn't"], [/\bis not\b/g, "isn't"], [/\bare not\b/g, "aren't"], [/\bcannot\b/g, "can't"], [/\bwhat is\b/g, "what's"], [/\bthat is\b/g, "that's"]];
  const dnorm = (t) => { let x = String(t || "").toLowerCase().replace(/[’‘`´]/g, "'").replace(/[^a-z0-9' ]+/g, " ").replace(/\s+/g, " ").trim(); CONTR.forEach(([r, v]) => { x = x.replace(r, v); }); return x; };
  function dictSentences() {
    const out = [];
    (B.reading || []).forEach((r) => {
      const ss = String(r.text || "").split(/(?<=[.!?])\s+/).map((x) => x.trim()).filter((x) => !/["'’]\s*$|[:]/.test(x) || true);
      const ok = ss.filter((x) => { const n = x.split(/\s+/).length; return n >= 4 && n <= 9 && !/\d|“|”|"/.test(x) && !/^(hi|hello|good morning)\b/i.test(x); });
      if (ok.length) out.push(ok[Math.min(ok.length - 1, 1)]); else { const any = ss.filter((x) => x.split(/\s+/).length >= 3 && x.split(/\s+/).length <= 9 && !/“|”|"/.test(x)); if (any.length) out.push(any[0]); }
    });
    return out.slice(0, 5);
  }
  function showWriteList() {
    screen = "write";
    const done = prog.writes || {};
    const rows = [["dict", "🎧", "Dictée", "Écoute la phrase et écris-la"], ["sit", "💬", "Dis-le en anglais", "Une situation : écris ce que tu dirais"]].map(([k, ic, t, sub], i) => `<button type="button" class="lc-row" data-wr="${k}">
      <span class="lc-num">${i + 1}</span><span class="lc-ic">${ic}</span><span class="lc-txt"><b>${esc(t)}</b><small>${esc(sub)}</small></span><span class="lc-go">${done[k] ? (k === "dict" && prog.dict ? "✓ " + prog.dict.ok + "/" + prog.dict.tot : "✓") : "›"}</span></button>`).join("");
    frame(HEAD, null, `<div class="lc-vocab-head"><span class="lc-vh-ic">✍️</span><div><h1>Écrire en anglais</h1><p>Écris toi-même, sans choix de réponses.</p></div></div>${sceneHero(5)}<section class="lc-card lc-menu">${rows}</section>`);
    fillSpace();
    el.querySelector("#lcBack").onclick = showMenu;
    el.querySelectorAll("[data-wr]").forEach((b) => b.addEventListener("click", () => runWrite(b.dataset.wr)));
  }
  function runWrite(kind) {
    screen = "write";
    const items = kind === "dict"
      ? dictSentences().map((t) => ({ kind, text: t, model: t }))
      : SIT.map((x) => Object.assign({ kind }, x));
    let i = 0, tries = 0, first = 0, shown = false;
    const scImg = (k) => { const sl = (B.vocab || []).filter((x) => x.scene).map((x) => x.scene).concat(B.scenes || []), sc = sl[k % Math.max(1, sl.length)]; return sc ? `<div class="lc-scenes lc-scene-sm lc-exhero"><figure><img src="assets/img/lesson/${sc[0]}.webp?v=20261019b4" alt="" loading="lazy" onerror="this.closest('.lc-exhero').remove()"/></figure></div>` : ""; };
    function draw(msg) {
      if (i >= items.length) {
        prog.writes = Object.assign({}, prog.writes, { [kind]: true });
        // Livret de notes : la dictée garde son meilleur nombre de phrases justes du premier coup.
        if (kind === "dict") { const o = prog.dict || {}; prog.dict = { ok: Math.max(first, o.ok || 0), tot: items.length, last: first, at: new Date().toISOString().slice(0, 10) }; }
        saveProgress(prog);
        frame(HEAD, { cur: items.length, total: items.length }, `<section class="lc-card"><h2 class="lc-h2">🎉 Bravo !</h2><p>${first} réponse${first > 1 ? "s" : ""} juste${first > 1 ? "s" : ""} du premier coup sur ${items.length}.</p></section>`,
          `<footer class="lc-foot"><button type="button" class="lc-cta" id="wrEnd">Terminer ✓</button></footer>`);
        el.querySelector("#lcBack").onclick = showWriteList; el.querySelector("#wrEnd").onclick = showWriteList; return;
      }
      const it = items[i];
      const top = kind === "dict"
        ? `<p class="lc-ask">🎧 Écoute la phrase, puis écris-la en anglais.</p><div class="lc-actions"><button type="button" class="lc-chip" data-say="${esc(it.text)}">🔊 Écouter</button></div>`
        : `<p class="lc-ask">${it.icon} ${esc(it.cue)}</p>${shown ? `<p class="lc-small">💡 ${esc(it.hint)}</p>` : ""}`;
      frame(HEAD, { cur: i + 1, total: items.length }, `${scImg(i)}<section class="lc-card"><h2 class="lc-h2">${kind === "dict" ? "🎧 Dictée" : "💬 Dis-le en anglais"}</h2>${top}
        <textarea id="wrIn" class="lc-ta" rows="2" placeholder="Écris en anglais…" aria-label="Ta réponse en anglais" autocapitalize="sentences" autocomplete="off" spellcheck="false"></textarea>
        ${msg ? `<p class="lc-small" aria-live="polite">${msg}</p>` : ""}
        <div class="lc-dlg-actions">${kind === "sit" ? `<button type="button" class="lc-sec-btn" id="wrHint">💡 Aide</button>` : ""}<button type="button" class="lc-cta" id="wrSend">Vérifier</button></div></section>`);
      fillSpace();
      el.querySelector("#lcBack").onclick = showWriteList;
      const ta = el.querySelector("#wrIn");
      const next = () => { i++; tries = 0; shown = false; draw(); };
      const send = () => {
        const v = ta.value.trim(); if (!v) return;
        let good, score = 0;
        if (kind === "dict") { const a = dnorm(v).split(" "), b = dnorm(it.text).split(" "); good = a.join(" ") === b.join(" "); score = b.filter((w, k) => a[k] === w).length + "/" + b.length; }
        else good = it.ok.some((r) => new RegExp(r, "i").test(v.replace(/[’‘`´]/g, "'")));
        if (good) { if (tries === 0) first++; frame2(true, v, it); }
        else { tries++; draw(kind === "dict" ? (tries >= 2 ? `${score} mots justes. Voici la phrase : « ${esc(it.text)} »` : `${score} mots justes. Réécoute et vérifie chaque mot.`) : (tries >= 2 ? `Pas tout à fait. Essaie comme ceci : « ${esc(it.model)} »` : "Pas tout à fait. Relis la situation et réessaie."));
          const t2 = el.querySelector("#wrIn"); if (t2) t2.value = v; }
      };
      function frame2(ok, v, it2) {
        frame(HEAD, { cur: i + 1, total: items.length }, `${scImg(i)}<section class="lc-card"><h2 class="lc-h2">✅ Bien !</h2><div class="lc-chat me"><span>${esc(v)}</span></div><p class="lc-small">Modèle : « ${esc(it2.model)} »</p>${spk(it2.model)}</section>`,
          `<footer class="lc-foot"><button type="button" class="lc-cta" id="wrNext">${i + 1 >= items.length ? "Terminer ✓" : "Suivant →"}</button></footer>`);
        fillSpace(); el.querySelector("#lcBack").onclick = showWriteList; el.querySelector("#wrNext").onclick = next;
      }
      el.querySelector("#wrSend").onclick = send;
      ta.addEventListener("keydown", (e) => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); send(); } });
      const h = el.querySelector("#wrHint"); if (h) h.onclick = () => { shown = true; const cur = ta.value; draw(tries >= 1 ? `Modèle : « ${esc(it.model)} »` : ""); el.querySelector("#wrIn").value = cur; };
      ta.focus();
    }
    draw();
  }

  /* ----- Transversale : 7 jours (mots → entraînement → expression écrite) ----- */
  const writeTx = {};
  let tday = 0;
  function dayPages(d) {
    const D = B.transv[d];
    return [
      { kind: "words", title: D.title, goal: D.goal, words: D.words, qs: [] },
      { kind: "practice", title: "Entraînement", qs: D.qs },
      { kind: "write", title: "Expression écrite", prompt: D.writing, qs: [] },
    ];
  }
  function showTransvList() {
    screen = "transversal";
    const done = prog.transv || {};
    const rows = B.transv.map((D, i) => `<button type="button" class="lc-row" data-day="${i}">
      <span class="lc-num">${i + 1}</span><span class="lc-ic">${icImg("transversal","🌱")}</span>
      <span class="lc-txt"><b>${esc(D.title)}</b><small>${esc(D.goal)}</small></span><span class="lc-go">${done[i] ? "✓" : "›"}</span></button>`).join("");
    frame(HEAD, null, `<div class="lc-vocab-head"><span class="lc-vh-ic">🌱</span><div><h1>Transversale</h1><p>7 jours pour ancrer les acquis.</p></div></div><section class="lc-card lc-menu">${rows}</section>`);
    el.querySelector("#lcBack").onclick = showMenu;
    el.querySelectorAll("[data-day]").forEach((b) => b.addEventListener("click", () => {
      tday = Number(b.dataset.day); page = 0; ACT.transversal.pages = dayPages(tday); ACT.transversal.sub = B.transv[tday].title; showAct("transversal");
    }));
  }

  /* ----- Test de fin de leçon : 40 points (7,5 + 7,5 lecture/écoute, 10 grammaire, 7,5 + 7,5 expression) ----- */
  let T = null; // état du test en cours
  const POOL = (B.testPool || B.expression).filter((x) => !x.trad), DEFW = B.expression[B.testW || 0], DEFO = B.expression[B.testO || 0];
  let EW = DEFW, EO = DEFO; // sujets d'expression du test en cours (changent à chaque passage, voir startTest)
  const isA2 = String(B.code || "").startsWith("A2.");
  const SIT = (!B.exam && (isA2 ? SITUATIONS_A2[B.code] : SITUATIONS_A1[String(B.code || "").replace("A1.", "")])) || null;
  const DLG = (!B.exam && (isA2 ? DIALOGUES_A2[B.code] : Object.assign({}, DIALOGUES_A1_REST, DIALOGUES_A1)[String(B.code || "").replace("A1.", "")])) || null;
  const leave = () => (B.exam ? (onExit && onExit()) : showMenu());
  const RID = B.exam ? "EXAM-A1" : B.code;
  const retakeBlocked = () => !UNLOCK_ALL_PREVIEW && retakeLocked(prog, RID);
  // Après un échec, le test est fermé tant qu'une série de rattrapage n'est pas terminée (voir bulletin-a1.js : retakeLocked).
  function showRetakeLock() {
    screen = "retake-lock";
    const last = ((prog.testHist || []).slice(-1)[0]) || null, sc = (prog.scores || {}).test || (last ? last.total + "/40" : "");
    frame(B.exam ? "Grand contrôle A1" : "Test de fin de leçon", null, `
      <section class="lc-hero">${c0().win ? `<img class="lc-hero-full" src="${c0().win}" alt=""/>` : `<img class="lc-hero-img lc-hero-sm" src="${c0().src}" alt=""/>`}</section>
      <section class="lc-card lc-intro"><h1>Une petite série d'abord</h1>
        <p class="lc-lead">Ta dernière note : ${esc(sc)}. Il faut 32/40 pour valider. Fais une série de 5 questions corrigées (environ 5 minutes) : le test se rouvre ensuite.</p>
        <button type="button" class="lc-cta" id="lcRt">Faire ma série de rattrapage</button>
        <button type="button" class="lc-sec-btn" id="lcToMenu" style="width:100%;margin-top:10px">${B.exam ? "Retour à Mes cours" : "Retour aux leçons"}</button></section>`);
    el.querySelector("#lcBack").onclick = leave;
    el.querySelector("#lcToMenu").onclick = leave;
    el.querySelector("#lcRt").onclick = () => runRattrapage(el, RID, { onBack: leave, onRetest: startTest, backLabel: B.exam ? "Retour à Mes cours" : "Retour aux leçons" });
  }
  function startTest() {
    if (retakeBlocked()) return showRetakeLock();
    const attempt = prog.testAttempts || 0;
    let seed = attempt * 7919 + 13;
    const rnd = () => { seed = (seed * 1103515245 + 12345) % 2147483648; return seed / 2147483648; };
    const ids = B.testGrammar.map((_, i) => i);
    for (let i = ids.length - 1; i > 0; i--) { const j = Math.floor(rnd() * (i + 1)); [ids[i], ids[j]] = [ids[j], ids[i]]; }
    // Après un rattrapage, le contrôle n'est plus le même : on évite les textes, audios et questions déjà vus aux essais précédents
    // (d'abord tout ce qui a déjà été vu ; si la banque est épuisée, au moins ceux du dernier essai).
    const H = (prog.testHist || []).filter((x) => x.used), seenAll = (k) => new Set(H.flatMap((x) => x.used[k])), seenLast = (k) => new Set(H.length ? H[H.length - 1].used[k] : []);
    const pickIdx = (len, from, k) => { const a = seenAll(k), l = seenLast(k); for (const bad of [a, l, new Set()]) for (let d = 0; d < len; d++) { const i = (from + d) % len; if (!bad.has(i)) return i; } return from % len; };
    const ti = pickIdx(B.testTexts.length, attempt, "t"), ai = pickIdx(B.testAudios.length, attempt + 1, "a");
    const ga = seenAll("g"), gl = seenLast("g");
    const gram = [...ids.filter((i) => !ga.has(i)), ...ids.filter((i) => ga.has(i) && !gl.has(i)), ...ids.filter((i) => gl.has(i))].slice(0, 10);
    // Sujets d'expression écrite et orale : eux aussi changent (on prend des pages d'expression pas encore utilisées).
    const ea = seenAll("e"), el2 = seenLast("e"), fresh = (bad, not) => { for (let d = 0; d < POOL.length; d++) { const i = (attempt * 2 + d) % POOL.length; if (!bad.has(i) && i !== not) return i; } return -1; };
    let wi = POOL.indexOf(DEFW), oi = POOL.indexOf(DEFO);
    if (H.length) { wi = [fresh(ea, -1), fresh(el2, -1), POOL.indexOf(DEFW)].find((x) => x >= 0); oi = [fresh(new Set([...ea, wi]), wi), fresh(new Set([...el2, wi]), wi), POOL.indexOf(DEFO)].find((x) => x >= 0); }
    EW = POOL[wi]; EO = POOL[oi];
    const wDef = EW === DEFW, oDef = EO === DEFO;
    T = { wi, oi, wt: wDef ? B.testWriteTitle : EW.title, wl: wDef ? B.testWriteLead : `Écris 4 phrases : ${EW.prompts.join(" ")}`, wimg: EW.img || "", ot: oDef ? B.testOralTitle : EO.title, ol: oDef ? B.testOralLead : EO.prompts.join(" "), oimg: EO.img || "", attempt, ti, ai, text: B.testTexts[ti], audio: B.testAudios[ai], gram, ans: {}, written: "", heard: "", oral: EO.checks.map(() => false), p: 0 };
    showTest();
  }
  // remplit le vide restant : image plus grande, puis la dernière carte s'étire et répartit son contenu
  function fillSpace() {
    const m = el.querySelector(".lc-main"), f = el.querySelector(".lc-foot"); if (!m) return;
    const gap = () => { const l = m.lastElementChild; return Math.floor((f ? f.getBoundingClientRect().top : m.getBoundingClientRect().bottom - 8) - l.getBoundingClientRect().bottom - 26); };
    let L = gap(); if (L < 24) return;
    const im = el.querySelector(".lc-exhero img");
    if (im) { const h0 = im.getBoundingClientRect().height, add = Math.min(L * 0.6, 110); im.style.aspectRatio = "auto"; im.style.objectFit = "cover"; im.style.height = Math.round(h0 + add) + "px"; L = gap(); }
    const tx = el.querySelector("#lcTa, #wrIn"); if (tx && L > 8) { tx.style.height = Math.round(tx.getBoundingClientRect().height + L) + "px"; L = gap(); }
    const cards = el.querySelectorAll(".lc-main > .lc-card"), c = cards[cards.length - 1];
    if (c && L > 8) { c.style.minHeight = Math.round(c.getBoundingClientRect().height + L) + "px"; c.style.display = "flex"; c.style.flexDirection = "column"; c.style.justifyContent = "space-evenly"; }
  }
  function showTest() {
    screen = "test";
    const total = 6, p = T.p;
    T.plan = T.plan || {};
    const Q = (key, q, n) => `<div class="lc-qb"><p class="lc-q">${n}. ${esc(q[0])}</p><div class="lc-choices" role="group">${q[1].map((o, i) => `<button type="button" class="lc-choice ${T.ans[key] === i ? "lc-sel" : ""}" data-k="${key}" data-i="${i}">${esc(o)}</button>`).join("")}</div></div>`;
    const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
    const exImg = (n) => `<div class="lc-scenes lc-scene-sm lc-exhero"><figure><img src="assets/img/lesson/exam-a1-${n}.webp?v=20261019b4" alt="" loading="lazy" onerror="this.closest('.lc-exhero').remove()"/></figure></div>`;
    // la page est découpée en blocs ; on remplit chaque écran au maximum, sans défilement
    const bl = []; let head = "", hero = "";
    if (p === 0) {
      head = "Compréhension écrite · 7,5 pts"; hero = exImg("reading");
      bl.push({ k: "x", h: `<section class="lc-card"><h2 class="lc-h2">📚 ${esc(T.text.title)}</h2><p class="lc-text">${esc(T.text.text)}</p></section>` });
      T.text.q.forEach((q, i) => bl.push({ k: "q", h: Q("r" + i, q, i + 1), keys: ["r" + i] }));
    } else if (p === 1) {
      head = "Compréhension orale · 7,5 pts"; hero = exImg("listening");
      bl.push({ k: "x", h: `<section class="lc-card"><h2 class="lc-h2">🎧 Écoute</h2><div class="lc-player"><button type="button" class="lc-play" data-say="${esc(T.audio.script)}" aria-label="Écouter l’audio">▶</button><span class="lc-wave" aria-hidden="true"></span><button type="button" class="lc-speed" id="lcSpeed">${speedMul === 1 ? "1x" : "0.75x"}</button></div></section>` });
      T.audio.q.forEach((q, i) => bl.push({ k: "q", h: Q("l" + i, q, i + 1), keys: ["l" + i] }));
    } else if (p === 2 || p === 3) {
      head = "Grammaire, verbes, vocabulaire · 10 pts";
      T.gram.slice((p - 2) * 5, (p - 2) * 5 + 5).forEach((id, i) => bl.push({ k: "q", h: Q("g" + id, B.testGrammar[id], (p - 2) * 5 + i + 1), keys: ["g" + id] }));
    } else if (p === 4) {
      head = "Expression écrite · 7,5 pts"; hero = exImg("writing");
      bl.push({ k: "x", h: `<section class="lc-card"><h2 class="lc-h2">✍️ ${esc(T.wt)}</h2><p class="lc-lead">${esc(T.wl)}</p>${T.wimg ? `<figure class="lc-pic"><img src="assets/img/lesson/${T.wimg}.webp?v=20261019b4" alt="Image à décrire" onerror="this.closest('figure').remove()"/></figure>` : ""}<textarea id="lcTa" class="lc-ta" rows="5" aria-label="Ta présentation en anglais">${esc(T.written)}</textarea></section>`, ta: true });
    } else {
      head = "Expression orale · 7,5 pts"; hero = exImg("speaking");
      bl.push({ k: "x", h: `<section class="lc-card"><h2 class="lc-h2">🎤 ${esc(T.ot)}</h2><p class="lc-lead">${esc(T.ol)} Puis coche ce que tu as réellement dit (auto-évaluation).</p>
        ${SR ? `<div class="lc-mic"><button type="button" class="lc-micbtn" id="lcMic" aria-label="Appuie et parle">🎙️</button><p class="lc-heard" id="lcHeard">${esc(T.heard)}</p></div>` : ""}${T.oimg ? `<figure class="lc-pic"><img src="assets/img/lesson/${T.oimg}.webp?v=20261019b4" alt="Image à décrire" onerror="this.closest('figure').remove()"/></figure>` : ""}</section>` });
      EO.checks.forEach(([l], i) => bl.push({ k: "c", h: `<li><label><input type="checkbox" data-o="${i}" ${T.oral[i] ? "checked" : ""}/> ${esc(l)}</label></li>` }));
    }
    const last = p === total - 1;
    const foot = `<footer class="lc-foot"><button type="button" class="lc-sec-btn" id="lcPrev">← Précédent</button><button type="button" class="lc-cta lc-next" id="lcNext" disabled>${last ? "Voir mon résultat" : "Suivant →"}</button></footer>`;
    const build = (a, z, first, tight, meas) => {
      let html = first ? `${tight === 2 ? "" : tight === 1 ? hero.replace("lc-exhero", "lc-exhero lc-exs") : hero}<div class="lc-vocab-head"><span class="lc-vh-ic">🏆</span><div><h1>${B.exam ? "Grand contrôle A1" : "Test de fin"}</h1><p>${esc(head)}</p></div></div>` : "";
      if (!first && p < 2) { const rt = p === 0 ? T.text.text : T.audio.script; html += `<div class="lc-recap-row"><button type="button" class="lc-chip lc-recap" data-recap="${esc(rt)}" data-kind="${p === 0 ? "text" : "audio"}">${p === 0 ? "📖 Revoir le texte" : "🎧 Réécouter"}</button></div>`; }
      for (let i = a; i < z;) {
        const k = bl[i].k;
        if (k === "x") { html += (tight === 2 ? bl[i].h.replace('rows="5"', 'rows="3"') : bl[i].h) + (meas && bl[i].ta ? '<div style="height:52px"></div>' : ""); i++; continue; }
        let j = i; while (j < z && bl[j].k === k) j++;
        const inner = bl.slice(i, j).map((x) => x.h).join("");
        html += k === "q" ? `<section class="lc-card lc-prac">${inner}</section>` : `<section class="lc-card"><ul class="lc-checks lc-checks-in">${inner}</ul></section>`;
        i = j;
      }
      return html;
    };
    const ttl = B.exam ? "Grand contrôle A1" : "Test de fin de leçon";
    const draw = (a, z, tight, meas) => frame(ttl, { cur: p + 1, total }, build(a, z, a === 0, tight, meas), foot);
    const fits = () => { const m = el.querySelector(".lc-main"); return m.scrollHeight <= m.clientHeight + 2; };
    if (!T.plan[p]) {
      const plan = []; let a = 0;
      while (a < bl.length) {
        let best = null;
        for (const tier of (a === 0 && hero) || bl.some((x) => x.ta) ? [0, 1, 2] : [0]) {
          let z = bl.length;
          for (;;) { draw(a, z, tier, true); if (fits() || z - a <= 1) break; z--; }
          const ok = fits();
          if (!best || (ok && (!best.ok || z > best.z))) best = { z, tier, ok };
          if (ok && z === bl.length) break;
        }
        plan.push([a, best.z, best.tier]); a = best.z;
      }
      T.plan[p] = plan;
    }
    const plan = T.plan[p], s = T.s === "last" ? plan.length - 1 : Math.min(T.s || 0, plan.length - 1);
    T.s = s;
    const [pa, pz, ptight] = plan[s];
    draw(pa, pz, ptight);
    const keys = bl.slice(pa, pz).flatMap((x) => x.keys || []);
    el.querySelector(".lc-main").scrollTop = 0;
    const next = el.querySelector("#lcNext");
    const refresh = () => {
      if (p <= 3) next.disabled = !keys.every((k) => T.ans[k] !== undefined);
      else if (p === 4) next.disabled = T.written.trim().length < 15;
      else next.disabled = s === plan.length - 1 && !T.oral.some(Boolean);
    };
    refresh();
    el.querySelectorAll(".lc-choice").forEach((b) => b.addEventListener("click", () => {
      T.ans[b.dataset.k] = Number(b.dataset.i);
      el.querySelectorAll(`.lc-choice[data-k="${b.dataset.k}"]`).forEach((x) => x.classList.toggle("lc-sel", x === b));
      refresh();
    }));
    const ta = el.querySelector("#lcTa"); if (ta) { ta.addEventListener("input", () => { T.written = ta.value; refresh(); }); mountAdvice(() => ta.value); }
    fillSpace();
    el.querySelectorAll("[data-o]").forEach((b) => b.addEventListener("change", () => { T.oral[Number(b.dataset.o)] = b.checked; refresh(); }));
    const sp = el.querySelector("#lcSpeed"); if (sp) sp.onclick = () => { speedMul = speedMul === 1 ? 0.75 : 1; sp.textContent = speedMul === 1 ? "1x" : "0.75x"; };
    const mic = el.querySelector("#lcMic");
    if (mic) mic.addEventListener("click", () => {
      try {
        const r = new SR(); r.lang = "en-GB"; r.interimResults = false; mic.classList.add("lc-mic-on");
        r.onresult = (e) => {
          T.heard = Array.from(e.results).map((x) => x[0].transcript).join(" "); el.querySelector("#lcHeard").textContent = T.heard;
          EO.checks.forEach(([, re], i) => { if (rxTest(re, T.heard)) { T.oral[i] = true; const cb = el.querySelector(`[data-o="${i}"]`); if (cb) cb.checked = true; } });
          refresh();
        };
        r.onerror = () => toast("Micro indisponible ou refusé"); r.onend = () => mic.classList.remove("lc-mic-on"); r.start();
      } catch (e) { toast("Micro indisponible sur cet appareil"); }
    });
    el.querySelector("#lcBack").onclick = leave;
    el.querySelector("#lcPrev").onclick = () => { if (s > 0) { T.s = s - 1; showTest(); } else if (p === 0) leave(); else { T.p--; T.s = "last"; showTest(); } };
    next.onclick = () => { if (s < plan.length - 1) { T.s = s + 1; showTest(); } else if (!last) { T.p++; T.s = 0; showTest(); } else showTestResult(); };
  }
  function showTestResult() {
    screen = "test-result";
    const cnt = (list, pre) => list.reduce((n, q, i) => n + (T.ans[pre + i] === q[2] ? 1 : 0), 0);
    const r = cnt(T.text.q, "r"), l = cnt(T.audio.q, "l");
    const g = T.gram.reduce((n, id) => n + (T.ans["g" + id] === B.testGrammar[id][2] ? 1 : 0), 0);
    const w = EW.checks.filter(([, re]) => rxTest(re, T.written)).length / EW.checks.length * 7.5;
    const o = T.oral.filter(Boolean).length / EO.checks.length * 7.5;
    const pts = [r / Math.max(1, T.text.q.length) * 7.5, l / Math.max(1, T.audio.q.length) * 7.5, g, w, o];
    const sum = Math.round(pts.reduce((a, b) => a + b, 0));
    const passed = sum >= 32;
    const fmt = (n) => String(Math.round(n * 10) / 10).replace(".", ",");
    prog.testAttempts = (T.attempt || 0) + 1;
    // Sans pénalité : repasser le test ne fait jamais baisser la meilleure note ni ne retire une leçon validée.
    const prevBest = parseInt(((prog.scores || {}).test || "").split("/")[0], 10), keep = Number.isFinite(prevBest) && prevBest > sum;
    prog.scores = Object.assign({}, prog.scores, { test: `${keep ? prevBest : sum}/40` });
    const gapsRec = [
      ...T.text.q.map((q, i) => ["Lecture", "r" + i, q]), ...T.audio.q.map((q, i) => ["Écoute", "l" + i, q]), ...T.gram.map((id) => ["Grammaire", "g" + id, B.testGrammar[id]]),
    ].filter(([, k, q]) => T.ans[k] !== q[2]).map(([sk, , q]) => ({ sk, q: String(q[0]).slice(0, 90) })).slice(0, 12);
    prog.testHist = (prog.testHist || []).concat([{ d: new Date().toISOString().slice(0, 10), total: sum, passed, t: Date.now(), rt: rtSeries(RID), used: { t: [T.ti], a: [T.ai], g: T.gram.slice(), e: [T.wi, T.oi] }, pts: pts.map((x) => Math.round(x * 10) / 10), gaps: gapsRec }]).slice(-20);
    if (passed) prog.done = Object.assign({}, prog.done, { test: true });
    saveProgress(prog);
    const wrong = [
      ...T.text.q.map((q, i) => ["r" + i, q]), ...T.audio.q.map((q, i) => ["l" + i, q]), ...T.gram.map((id) => ["g" + id, B.testGrammar[id]]),
    ].filter(([k, q]) => T.ans[k] !== q[2]).map(([k, q]) => `<li><b>${esc(q[0])}</b><small>Ta réponse : ${esc(q[1][T.ans[k]] ?? "—")} · Bonne réponse : ${esc(q[1][q[2]])}</small></li>`).join("");
    frame(B.exam ? "Grand contrôle A1" : "Test de fin de leçon", null, `
      <section class="lc-hero">${c0().win ? `<img class="lc-hero-full" src="${c0().win}" alt=""/>` : `<img class="lc-hero-img lc-hero-sm" src="${c0().src}" alt=""/>`}</section>
      <section class="lc-card lc-intro"><h1>${passed ? (B.exam ? "Niveau A1 validé !" : "Leçon terminée !") : (prog.done || {}).test ? "Déjà validée" : "Presque !"}</h1>
        <p class="lc-lead">${passed ? `Bravo ! Tu as validé ${HEAD}.` : (prog.done || {}).test ? "Cette note ne change rien : ta leçon reste validée." : "Il faut 32/40 pour valider. Revois les points manqués et réessaie."}</p>
        <table class="lc-table"><tbody>
          <tr><td>Compréhension écrite</td><td class="lc-form">${fmt(pts[0])} / 7,5</td></tr>
          <tr><td>Compréhension orale</td><td class="lc-form">${fmt(pts[1])} / 7,5</td></tr>
          <tr><td>Grammaire, vocabulaire</td><td class="lc-form">${fmt(pts[2])} / 10</td></tr>
          <tr><td>Expression écrite</td><td class="lc-form">${fmt(pts[3])} / 7,5</td></tr>
          <tr><td>Expression orale (auto-éval.)</td><td class="lc-form">${fmt(pts[4])} / 7,5</td></tr>
          <tr><td><b>Total</b></td><td class="lc-form"><b>${sum} / 40</b></td></tr></tbody></table>
        ${wrong ? `<details class="lc-det"><summary>Revoir mes réponses (${wrong.split("</li>").length - 1})</summary><ul class="lc-list lc-wronglist">${wrong}</ul></details>` : ""}
        ${keep ? `<p class="lc-lead" style="margin-top:10px">Aucune pénalité : ta meilleure note reste ${prevBest} / 40.</p>` : ""}
        ${!passed && retakeBlocked() ? `<button type="button" class="lc-cta" id="lcRtFirst" style="margin-top:12px">Faire ma série de rattrapage (5 questions)</button>` : `<button type="button" class="lc-cta" id="lcAgain" style="margin-top:12px">Refaire une nouvelle version</button>`}
        <button type="button" class="lc-sec-btn" id="lcToMenu" style="width:100%;margin-top:10px">${B.exam ? "Retour à Mes cours" : "Retour aux leçons"}</button></section>`);
    el.querySelector("#lcBack").onclick = leave;
    el.querySelector("#lcToMenu").onclick = leave;
    const ag = el.querySelector("#lcAgain"); if (ag) ag.onclick = startTest;
    const rf = el.querySelector("#lcRtFirst"); if (rf) rf.onclick = () => runRattrapage(el, RID, { onBack: leave, onRetest: startTest, backLabel: B.exam ? "Retour à Mes cours" : "Retour aux leçons" });
  }
  const c0 = () => currentCharacter();

  if (B.exam) startTest(); else showIntro();
}

/* ---------- lot de données de la leçon A1.1 (les autres leçons viennent de js/data/lecons-a1.js) ---------- */
balanceAll({ VOCAB_PAGES, GRAMMAR_PAGES, READING_PAGES, LISTENING_PAGES, EXERCISE_PAGES, TRANSV_DAYS, TEST_TEXTS, TEST_AUDIOS, TEST_GRAMMAR });

/* Allègement A1.1 : les possessifs (A1.2) et do/does (A1.3) ne sont plus enseignés ici. */
const DROP_GRAMMAR = ["Questions et possessifs", "To do : questions et réponses courtes"];
const DROP_TEST_G = [/^___ he live in Paris\?/, /^Where ___ you live\?/, /^___ she have a brother\?/, /^___ you have a phone\?/, /^He ___ not like coffee/, /^Does she live in Rome/, /^What is ___ nationality\?/];
const GRAMMAR_LIGHT = GRAMMAR_PAGES.filter((g) => !DROP_GRAMMAR.includes(g.title));
const TEST_GRAMMAR_LIGHT = TEST_GRAMMAR.filter((q) => !DROP_TEST_G.some((r) => r.test(q[0])));
const EXERCISES_LIGHT = EXERCISE_PAGES.map((pg) => {
  if (pg.title === "Grammaire — Be, have, do") return Object.assign({}, pg, { title: "Grammaire — Be et have", qs: pg.qs.filter((q) => !/^___ you live in London\?|^He ___ not have a car/.test(q[0])) });
  if (pg.title === "Grammaire — This/that et do/does") return Object.assign({}, pg, { title: "Grammaire — This/that", qs: pg.qs.slice(0, 2).concat([
    ["___ is my bag. (loin, un seul)", ["This", "That", "These"], 1, "Loin + un seul : That."],
    ["___ are my friends. (près, plusieurs)", ["Those", "That", "These"], 2, "Près + plusieurs : These."],
    ["___ is my book. (près, un seul)", ["That", "Those", "This"], 2, "Près + un seul : This."]]) });
  return pg;
});

export const BUNDLE_A11 = {
  code: "A1.1", head: "A1.1 – Mon identité", titleFr: "Mon identité", progressKey: "the_roots_a11_lesson_v1",
  goals: LEARN_GOALS, vocab: [...VOCAB_PAGES, ...plusPages(1, new Set(VOCAB_PAGES.flatMap((p) => (p.words || []).map((w) => String(w[0]).toLowerCase()))))], greetings: GREETINGS, scenes: SCENES,
  grammar: GRAMMAR_LIGHT, grammarSub: "Be, have, this/that et les questions.",
  reading: READING_PAGES, listening: LISTENING_PAGES, exercises: EXERCISES_LIGHT, expression: [...EXPRESSION_PAGES, ...(EXPRESSION_PLUS_A1[1] || [])], transv: TRANSV_DAYS,
  testTexts: TEST_TEXTS, testAudios: TEST_AUDIOS, testGrammar: TEST_GRAMMAR_LIGHT, testW: 0, testO: 0,
  testWriteTitle: "Présente-toi en anglais", testWriteLead: "Écris au moins 4 phrases : ton prénom, ton âge, d’où tu viens, ce que tu aimes.",
  testOralTitle: "Dis ta présentation", testOralLead: "Présente-toi à voix haute en anglais.",
  city: null,
};

export function renderLessonA11(root, opts) { return renderLesson(root, BUNDLE_A11, opts); }
