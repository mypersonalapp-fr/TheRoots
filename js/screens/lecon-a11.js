// The Roots — leçon A1.1 « Mon identité » : Introduction → Menu → Vocabulaire.
// Intégrée au vrai routage : ouverte depuis Mes cours (mes-cours.js) avec
// renderLessonA11(root, { onExit }), même schéma que l'onboarding.
// Maquettes de référence : 06 / 07 / 08 / 09 (dossier de transmission).
// Hors leçons : fonds d'origine The Roots (jour/nuit). Ici : cartes illustrées,
// personnage choisi dans Paramètres (settings.avatarGender / avatarIndex).

import { store } from "../data/store.js?v=20260930a";
import { GRAMMAR_PAGES, READING_PAGES, LISTENING_PAGES, EXERCISE_PAGES, EXPRESSION_PAGES, TRANSV_DAYS, TEST_TEXTS, TEST_AUDIOS, TEST_GRAMMAR } from "../data/lecon-a11-data.js?v=20261014d";

const PROGRESS_KEY = "the_roots_a11_lesson_v1";
const GIRLS = 8;
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
    kind: "words", title: "Mon nom",
    words: [["first name", "prénom"], ["last name", "nom de famille"], ["nickname", "surnom"], ["age", "âge"]],
    tip: "Le “first name” est le prénom ; le “last name” (ou “surname”) est le nom de famille.",
    examples: [["My first name is {name}.", "Mon prénom est {name}."], ["What is your last name?", "Quel est ton nom de famille ?"]],
    q: ["“Last name” veut dire…", ["prénom", "nom de famille", "surnom"], 1],
  },
  {
    kind: "words", title: "Naissance et lieu",
    words: [["date of birth", "date de naissance"], ["place of birth", "lieu de naissance"], ["country", "pays"], ["city", "ville"]],
    tip: "On dit “I was born in…” pour donner son lieu de naissance.",
    examples: [["My country is France.", "Mon pays est la France."], ["My city is Paris.", "Ma ville est Paris."]],
    q: ["“City” veut dire…", ["pays", "ville", "adresse"], 1],
  },
  {
    kind: "words", title: "Origine et adresse",
    words: [["nationality", "nationalité"], ["address", "adresse"], ["height", "taille"], ["weight", "poids"]],
    tip: "“Nationality” se termine souvent par -ish, -an ou -ese : British, Canadian, Chinese.",
    examples: [["What is your nationality?", "Quelle est ta nationalité ?"], ["What is your address?", "Quelle est ton adresse ?"]],
    q: ["“Address” veut dire…", ["adresse", "âge", "poids"], 0],
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
  { section: "S’entraîner et progresser" },
  { n: 6, id: "exercises", icon: "🧩", title: "Exercices", sub: "Corrections et rattrapage", ready: true },
  { n: 7, id: "transversal", icon: "🌱", title: "Transversale", sub: "Pratique quotidienne", ready: true },
  { n: 8, id: "test", icon: "🏆", title: "Test de fin de leçon", sub: "Valide tes acquis", ready: true },
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
  return { gender, idx, src: `assets/img/characters/${gender}-${idx + 1}.png`, name: gender === "boy" ? "Lucas" : "Emma" };
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
export function renderLessonA11(root, { onExit } = {}) {
  const prog = loadProgress();
  let screen = "intro"; // intro | menu | vocab
  let page = 0;
  const answered = {}; // page → true une fois le mini-quiz réussi (ou vu)

  const el = document.createElement("div");
  el.className = "screen lc-screen";
  root.innerHTML = "";
  root.appendChild(el);

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
  }

  function toast(msg) {
    const t = document.createElement("div");
    t.className = "lc-toast"; t.textContent = msg; el.appendChild(t);
    setTimeout(() => t.remove(), 1800);
  }

  function showIntro() {
    screen = "intro";
    const c = currentCharacter();
    frame("A1.1 – Mon identité", { cur: 1, total: 8 }, `
      <section class="lc-hero">
        <div class="lc-bubble">Hello!</div>
        <img class="lc-hero-img" src="${c.src}" alt="Personnage ${c.name}"/>
      </section>
      <section class="lc-card lc-intro">
        <div class="lc-level">A1.1</div>
        <h1>Mon identité</h1>
        <p class="lc-lead">Dans cette leçon, tu vas apprendre à :</p>
        <ul class="lc-goals">${LEARN_GOALS.map((g) => `<li><span class="lc-check">✓</span>${esc(g)}</li>`).join("")}</ul>
        <button type="button" class="lc-cta" id="lcStart">Commencer la leçon →</button>
      </section>`);
    el.querySelector("#lcBack").onclick = () => onExit && onExit();
    el.querySelector("#lcStart").onclick = showMenu;
  }

  function showMenu() {
    screen = "menu";
    const done = prog.done || {};
    const rows = MENU.map((m) => m.section
      ? `<h2 class="lc-sec">${esc(m.section)}</h2>`
      : `<button type="button" class="lc-row ${m.ready ? "" : "lc-row-soon"}" data-act="${m.id}" ${m.ready ? "" : 'aria-disabled="true"'}>
          <span class="lc-num">${m.n}</span><span class="lc-ic">${m.icon}</span>
          <span class="lc-txt"><b>${esc(m.title)}</b><small>${esc(m.ready ? m.sub + ((prog.scores || {})[m.id] ? " · " + prog.scores[m.id] : "") : m.sub + " · bientôt")}</small></span>
          <span class="lc-go">${done[m.id] ? "✓" : "›"}</span>
        </button>`).join("");
    frame("A1.1 – Mon identité", { cur: 1, total: 8 }, `<section class="lc-card lc-menu">${rows}</section>`);
    el.querySelector("#lcBack").onclick = showIntro;
    el.querySelectorAll(".lc-row").forEach((b) => b.addEventListener("click", () => {
      if (b.dataset.act === "vocab") { page = 0; showVocab(); }
      else if (b.dataset.act === "speaking") { page = 0; showSpeak(); }
      else if (b.dataset.act === "transversal") { showTransvList(); }
      else if (b.dataset.act === "test") { startTest(); }
      else if (ACT[b.dataset.act]) { page = 0; showAct(b.dataset.act); }
      else toast("Cette activité arrive bientôt");
    }));
  }

  function showVocab() {
    screen = "vocab";
    const p = VOCAB_PAGES[page];
    const total = VOCAB_PAGES.length;
    const c = currentCharacter();
    const sub = (s) => s.replace(/\{name\}/g, c.name);
    let body = "";

    if (p.kind === "greetings") {
      body = `
        <section class="lc-card">
          <h2 class="lc-h2">👥 ${esc(p.title)}</h2>
          <div class="lc-greet">
            <div class="lc-greet-hero"><div class="lc-bubble lc-bubble-sm">Hello!</div><img src="${c.src}" alt=""/></div>
            <ul class="lc-list">${GREETINGS.map(([en, fr], i) => `
              <li>${ico(`assets/img/characters/${i % 2 ? "boy" : "girl"}-${(i % 2 ? (i % BOYS) : (i % GIRLS)) + 1}.png`, "lc-ava-sm")}
              <span class="lc-w"><b>${esc(en)}</b><small>${esc(fr)}</small></span>${spk(en)}</li>`).join("")}</ul>
          </div>
          <div class="lc-tip"><span>💡</span><div><b>Astuce</b><p>${esc(p.tip)}</p></div></div>
        </section>`;
    } else {
      body = `
        <section class="lc-card">
          <h2 class="lc-h2">${["", "🪪", "🌍", "📍", "🎓"][page] || "📖"} ${esc(p.title)}</h2>
          <ul class="lc-list">${p.words.map(([en, fr]) => `
            <li>${ico(c.src, "lc-ava-sm")}<span class="lc-w"><b>${esc(en)}</b><small>${esc(fr)}</small></span>${spk(en)}</li>`).join("")}</ul>
          <div class="lc-tip"><span>💡</span><div><b>Astuce</b><p>${esc(p.tip)}</p></div></div>
        </section>`;
    }

    body += `
      <section class="lc-card lc-ctx">
        <h2 class="lc-h2 lc-h2-ctx">💬 Exemples en contexte</h2>
        <ul class="lc-list">${p.examples.map(([en, fr]) => `
          <li>${ico(c.src, "lc-ava-sm")}<span class="lc-w"><b>${esc(sub(en))}</b><small>${esc(sub(fr))}</small></span>${spk(sub(en))}</li>`).join("")}</ul>
      </section>`;

    if (p.kind === "greetings") {
      body += `
        <section class="lc-card lc-prac">
          <h2 class="lc-h2 lc-h2-prac">✏️ À toi de pratiquer !</h2>
          <p class="lc-q">1. ${esc(p.practice)}</p>
          <div class="lc-player"><button type="button" class="lc-play" data-say="${esc(sub(p.say))}" aria-label="Écouter la phrase">▶</button>
            <span class="lc-wave" aria-hidden="true"></span><span class="lc-speed">1x</span></div>
        </section>`;
    } else {
      body += `
        <section class="lc-card lc-prac">
          <h2 class="lc-h2 lc-h2-prac">✏️ À toi de pratiquer !</h2>
          <p class="lc-q">1. ${esc(p.q[0])}</p>
          <div class="lc-choices" role="group">${p.q[1].map((o, i) => `<button type="button" class="lc-choice" data-i="${i}">${esc(o)}</button>`).join("")}</div>
          <p class="lc-fb" id="lcFb" aria-live="polite"></p>
        </section>`;
    }

    const last = page === total - 1;
    const needsAnswer = p.kind !== "greetings" && !answered[page];
    const foot = `
      <footer class="lc-foot">
        <button type="button" class="lc-sec-btn" id="lcPrev" ${page === 0 ? "" : ""}>← Précédent</button>
        <button type="button" class="lc-cta lc-next" id="lcNext" ${needsAnswer ? "disabled" : ""}>${last ? "Terminer ✓" : "Suivant →"}</button>
      </footer>`;

    frame("A1.1 – Mon identité", { cur: page + 1, total }, `<div class="lc-vocab-head"><span class="lc-vh-ic">📖</span><div><h1>Vocabulaire</h1><p>Écoute et répète les mots.</p></div></div>${body}`, foot);
    el.querySelector(".lc-main").scrollTop = 0;

    el.querySelector("#lcBack").onclick = showMenu;
    el.querySelector("#lcPrev").onclick = () => { if (page === 0) showMenu(); else { page--; showVocab(); } };
    el.querySelector("#lcNext").onclick = () => {
      if (!last) { page++; showVocab(); return; }
      prog.done = Object.assign({}, prog.done, { vocab: true });
      saveProgress(prog);
      showMenu();
    };
    el.querySelectorAll(".lc-choice").forEach((b) => b.addEventListener("click", () => {
      const ok = Number(b.dataset.i) === p.q[2];
      const fb = el.querySelector("#lcFb");
      el.querySelectorAll(".lc-choice").forEach((x) => x.classList.remove("lc-wrong"));
      if (ok) {
        answered[page] = true;
        el.querySelectorAll(".lc-choice").forEach((x) => { x.disabled = true; x.classList.toggle("lc-right", Number(x.dataset.i) === p.q[2]); });
        fb.textContent = "Bravo ! Bonne réponse."; fb.className = "lc-fb lc-fb-ok";
        el.querySelector("#lcNext").disabled = false;
      } else {
        b.classList.add("lc-wrong");
        fb.textContent = "Pas tout à fait, réessaie."; fb.className = "lc-fb lc-fb-ko";
      }
    }));
    if (answered[page]) { // retour sur une page déjà réussie : état conservé
      el.querySelectorAll(".lc-choice").forEach((x) => { x.disabled = true; x.classList.toggle("lc-right", Number(x.dataset.i) === p.q[2]); });
    }
  }

  /* ----- Grammaire / Lecture / Écoute : pages à questions obligatoires ----- */
  const ACT = {
    grammar: { icon: "⚙️", title: "Grammaire", sub: "Le verbe to be, to have et les questions.", pages: GRAMMAR_PAGES },
    reading: { icon: "📚", title: "Lecture", sub: "Lis le texte puis réponds aux questions.", pages: READING_PAGES },
    listening: { icon: "🎧", title: "Écoute", sub: "Écoute l’audio puis réponds aux questions.", pages: LISTENING_PAGES },
    transversal: { icon: "🌱", title: "Transversale", sub: "", pages: [] },
    exercises: { icon: "🧩", title: "Exercices", sub: "Réponds : la correction s’affiche, tu peux réessayer.", pages: EXERCISE_PAGES },
  };
  const READERS = { Emma: "girl-1", Lucas: "boy-2", Maya: "girl-2", Alex: "boy-5" };
  const firstTry = {}; // "exercices:page:question" → réussi du premier coup ?
  const okQ = {}; // "activité:page" → { indexQuestion: true }

  function showAct(id) {
    screen = id;
    const A = ACT[id], p = A.pages[page], total = A.pages.length, key = id + (id === "transversal" ? ":d" + tday : "") + ":" + page, exit = id === "transversal" ? showTransvList : showMenu;
    const c = currentCharacter();
    const sub = (x) => x.replace(/\{name\}/g, c.name);
    let body = "";
    if (id === "grammar") {
      body = `<section class="lc-card"><h2 class="lc-h2">${p.icon} ${esc(p.title)}</h2>
        <table class="lc-table"><tbody>${p.table.map(([a, b, f]) => `<tr><td><b>${esc(a)}</b></td><td class="lc-form">${esc(b)}</td><td>${esc(f)}</td></tr>`).join("")}</tbody></table></section>
        <section class="lc-card lc-ctx"><h2 class="lc-h2 lc-h2-ctx">💡 Exemples</h2><ul class="lc-list">${p.examples.map(([en, fr]) => `
          <li>${ico(c.src, "lc-ava-sm")}<span class="lc-w"><b>${esc(sub(en))}</b><small>${esc(sub(fr))}</small></span>${spk(sub(en))}</li>`).join("")}</ul></section>`;
    } else if (id === "reading") {
      body = `<section class="lc-card"><h2 class="lc-h2">${ico(`assets/img/characters/${READERS[p.who]}.png`)} ${esc(p.who)}</h2>
        <p class="lc-text">${esc(p.text)}</p>
        <div class="lc-actions"><button type="button" class="lc-chip" data-say="${esc(p.text)}">🔊 Écouter</button><button type="button" class="lc-chip" id="lcTr" aria-expanded="false">Voir la traduction</button></div>
        <p class="lc-tr" id="lcTrText" hidden>${esc(p.fr)}</p></section>`;
    } else if (id === "listening") {
      body = `<section class="lc-card"><h2 class="lc-h2">🎧 ${esc(p.title)}</h2>
        <div class="lc-player"><button type="button" class="lc-play" data-say="${esc(p.text)}" aria-label="Écouter l’audio">▶</button>
          <span class="lc-wave" aria-hidden="true"></span><button type="button" class="lc-speed" id="lcSpeed" aria-label="Vitesse de lecture">${speedMul === 1 ? "1x" : "0.75x"}</button></div>
        <div class="lc-actions"><button type="button" class="lc-chip" id="lcTr" aria-expanded="false">Afficher la transcription</button></div>
        <p class="lc-tr" id="lcTrText" hidden>${esc(p.text)}</p></section>`;
    } else if (id === "transversal") {
      if (p.kind === "words") body = `<section class="lc-card"><h2 class="lc-h2">🔊 Écoute et répète</h2><p class="lc-lead">${esc(p.title)} — ${esc(p.goal)}</p><ul class="lc-list">${p.words.map(([en, fr]) => `<li>${ico(c.src, "lc-ava-sm")}<span class="lc-w"><b>${esc(en)}</b><small>${esc(fr)}</small></span>${spk(en)}</li>`).join("")}</ul></section>`;
      else if (p.kind === "write") body = `<section class="lc-card"><h2 class="lc-h2">✍️ Expression écrite</h2><p class="lc-lead">${esc(p.prompt)}</p><textarea id="lcTa" class="lc-ta" rows="5" aria-label="Ta réponse en anglais">${esc(writeTx[key] || "")}</textarea><p class="lc-small">Écris en anglais (au moins une phrase).</p></section>`;
    } else {
      body = `<section class="lc-card"><h2 class="lc-h2">🧩 ${esc(p.title)}</h2><p class="lc-lead">${esc(p.help)}</p>
        ${p.passage ? `<p class="lc-text">${esc(p.passage)}</p><div class="lc-actions"><button type="button" class="lc-chip" data-say="${esc(p.passage)}">🔊 Écouter</button></div>` : ""}
        ${p.audio ? `<div class="lc-player"><button type="button" class="lc-play" data-say="${esc(p.audio)}" aria-label="Écouter l’audio">▶</button><span class="lc-wave" aria-hidden="true"></span><button type="button" class="lc-speed" id="lcSpeed" aria-label="Vitesse de lecture">${speedMul === 1 ? "1x" : "0.75x"}</button></div>` : ""}</section>`;
    }
    if (p.qs.length) body += `<section class="lc-card lc-prac"><h2 class="lc-h2 lc-h2-prac">✏️ ${id === "grammar" || id === "exercises" ? "À toi de pratiquer !" : "Questions"}</h2>
      ${p.qs.map((q, qi) => `<div class="lc-qb" data-qi="${qi}"><p class="lc-q">${qi + 1}. ${esc(q[0])}</p>
        <div class="lc-choices" role="group">${q[1].map((o, i) => `<button type="button" class="lc-choice" data-qi="${qi}" data-i="${i}">${esc(o)}</button>`).join("")}</div>
        <p class="lc-fb" aria-live="polite"></p></div>`).join("")}</section>`;

    const last = page === total - 1;
    const foot = `<footer class="lc-foot"><button type="button" class="lc-sec-btn" id="lcPrev">← Précédent</button>
      <button type="button" class="lc-cta lc-next" id="lcNext" disabled>${last ? "Terminer ✓" : "Suivant →"}</button></footer>`;
    frame("A1.1 – Mon identité", { cur: page + 1, total }, `<div class="lc-vocab-head"><span class="lc-vh-ic">${A.icon}</span><div><h1>${esc(A.title)}</h1><p>${esc(A.sub)}</p></div></div>${body}`, foot);
    el.querySelector(".lc-main").scrollTop = 0;

    const next = el.querySelector("#lcNext");
    const refresh = () => { next.disabled = !p.qs.every((_, qi) => (okQ[key] || {})[qi]) || (p.kind === "write" && (writeTx[key] || "").trim().length < 15); };
    const mark = (qi, withMsg) => {
      const q = p.qs[qi], box = el.querySelector(`.lc-qb[data-qi="${qi}"]`);
      box.querySelectorAll(".lc-choice").forEach((x) => { x.disabled = true; x.classList.toggle("lc-right", Number(x.dataset.i) === q[2]); });
      const fb = box.querySelector(".lc-fb"); fb.className = "lc-fb lc-fb-ok"; fb.textContent = withMsg ? "Bravo ! " + (q[3] || "") : "✓ " + (q[3] || "");
    };
    Object.keys(okQ[key] || {}).forEach((qi) => mark(Number(qi), false));
    refresh();

    el.querySelector("#lcBack").onclick = exit;
    el.querySelector("#lcPrev").onclick = () => { if (page === 0) exit(); else { page--; showAct(id); } };
    const wta = el.querySelector("#lcTa"); if (wta) wta.addEventListener("input", () => { writeTx[key] = wta.value; refresh(); });
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
        EXERCISE_PAGES.forEach((pg, k) => pg.qs.forEach((_, qi) => { tot++; if (firstTry[`exercises:${k}:${qi}`] === true) sc++; }));
        prog.scores = Object.assign({}, prog.scores, { exercises: `${sc}/${tot}` });
      }
      saveProgress(prog); showMenu();
    };
    el.querySelectorAll(".lc-choice").forEach((b) => b.addEventListener("click", () => {
      const qi = Number(b.dataset.qi), q = p.qs[qi], ftKey = `${key}:${qi}`;
      el.querySelectorAll(`.lc-qb[data-qi="${qi}"] .lc-choice`).forEach((x) => x.classList.remove("lc-wrong"));
      if (Number(b.dataset.i) === q[2]) { if (firstTry[ftKey] === undefined) firstTry[ftKey] = true; okQ[key] = Object.assign({}, okQ[key], { [qi]: true }); mark(qi, true); refresh(); }
      else { firstTry[ftKey] = false; b.classList.add("lc-wrong"); const fb = b.closest(".lc-qb").querySelector(".lc-fb"); fb.className = "lc-fb lc-fb-ko"; fb.textContent = id === "exercises" ? "Pas tout à fait — " + (q[3] || "") + " Réessaie." : "Pas tout à fait, réessaie."; }
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
    const p = EXPRESSION_PAGES[page], total = EXPRESSION_PAGES.length, c = currentCharacter();
    const sub = (x) => x.replace(/\{name\}/g, c.name);
    const tab = spkState.tab;
    const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
    const txt = (tab === "write" ? spkState.text[page] : spkState.heard[page]) || "";
    const body = `<section class="lc-card"><h2 class="lc-h2">${p.icon} ${esc(p.title)}</h2>
      <div class="lc-tabs" role="tablist">
        <button type="button" class="lc-tab ${tab === "speak" ? "on" : ""}" data-tab="speak" role="tab" aria-selected="${tab === "speak"}">🎤 Parler</button>
        <button type="button" class="lc-tab ${tab === "write" ? "on" : ""}" data-tab="write" role="tab" aria-selected="${tab === "write"}">✍️ Écrire</button></div>
      <ol class="lc-prompts">${p.prompts.map((x) => `<li>${esc(x)}</li>`).join("")}</ol>
      <div class="lc-model"><span class="lc-w"><small>Modèle</small><b>${esc(sub(p.model))}</b></span>${spk(sub(p.model))}</div>
      ${tab === "write"
        ? `<textarea id="lcTa" class="lc-ta" rows="4" placeholder="Écris en anglais…" aria-label="Ta réponse en anglais">${esc(txt)}</textarea>`
        : `<div class="lc-mic">${SR ? `<button type="button" class="lc-micbtn" id="lcMic" aria-label="Appuie et parle">🎙️</button><p class="lc-small">Appuie et parle en anglais.</p>` : `<p class="lc-small">La reconnaissance vocale n’est pas disponible sur cet appareil : dis ta réponse à voix haute, puis coche la case.</p>`}
            <p class="lc-heard" id="lcHeard">${esc(txt)}</p>
            <label class="lc-said"><input type="checkbox" id="lcSaid" ${spkState.said[page] ? "checked" : ""}/> J’ai dit ma réponse à voix haute</label></div>`}
      <ul class="lc-checks" id="lcChecks" aria-live="polite"></ul></section>`;
    const last = page === total - 1;
    const foot = `<footer class="lc-foot"><button type="button" class="lc-sec-btn" id="lcPrev">← Précédent</button>
      <button type="button" class="lc-cta lc-next" id="lcNext" disabled>${last ? "Terminer ✓" : "Suivant →"}</button></footer>`;
    frame("A1.1 – Mon identité", { cur: page + 1, total }, `<div class="lc-vocab-head"><span class="lc-vh-ic">🎤</span><div><h1>Expression</h1><p>Parle et écris.</p></div></div>${body}`, foot);
    el.querySelector(".lc-main").scrollTop = 0;

    const next = el.querySelector("#lcNext");
    const paint = () => {
      const cur = (tab === "write" ? spkState.text[page] : spkState.heard[page]) || "";
      const res = p.checks.map(([l, re]) => [l, new RegExp(re, "i").test(cur)]);
      el.querySelector("#lcChecks").innerHTML = res.map(([l, ok]) => `<li class="${ok ? "on" : ""}"><span>${ok ? "✓" : "○"}</span>${esc(l)}</li>`).join("");
      if (res.filter((r) => r[1]).length >= 3 || (tab === "speak" && spkState.said[page])) spkState.ok[page] = true;
      next.disabled = !spkState.ok[page];
    };
    paint();
    el.querySelectorAll(".lc-tab").forEach((b) => b.addEventListener("click", () => { spkState.tab = b.dataset.tab; showSpeak(); }));
    const ta = el.querySelector("#lcTa");
    if (ta) ta.addEventListener("input", () => { spkState.text[page] = ta.value; paint(); });
    const said = el.querySelector("#lcSaid");
    if (said) said.addEventListener("change", () => { spkState.said[page] = said.checked; paint(); });
    const mic = el.querySelector("#lcMic");
    if (mic) mic.addEventListener("click", () => {
      try {
        const r = new SR(); r.lang = "en-GB"; r.interimResults = false;
        mic.classList.add("lc-mic-on");
        r.onresult = (e) => { spkState.heard[page] = Array.from(e.results).map((x) => x[0].transcript).join(" "); el.querySelector("#lcHeard").textContent = spkState.heard[page]; paint(); };
        r.onerror = () => toast("Micro indisponible ou refusé");
        r.onend = () => mic.classList.remove("lc-mic-on");
        r.start();
      } catch (e) { toast("Micro indisponible sur cet appareil"); }
    });
    el.querySelector("#lcBack").onclick = showMenu;
    el.querySelector("#lcPrev").onclick = () => { if (page === 0) showMenu(); else { page--; showSpeak(); } };
    next.onclick = () => {
      if (!last) { page++; showSpeak(); return; }
      prog.done = Object.assign({}, prog.done, { speaking: true }); saveProgress(prog); showMenu();
    };
  }

  /* ----- Transversale : 7 jours (mots → entraînement → expression écrite) ----- */
  const writeTx = {};
  let tday = 0;
  function dayPages(d) {
    const D = TRANSV_DAYS[d];
    return [
      { kind: "words", title: D.title, goal: D.goal, words: D.words, qs: [] },
      { kind: "practice", title: "Entraînement", qs: D.qs },
      { kind: "write", title: "Expression écrite", prompt: D.writing, qs: [] },
    ];
  }
  function showTransvList() {
    screen = "transversal";
    const done = prog.transv || {};
    const rows = TRANSV_DAYS.map((D, i) => `<button type="button" class="lc-row" data-day="${i}">
      <span class="lc-num">${i + 1}</span><span class="lc-ic">🌱</span>
      <span class="lc-txt"><b>${esc(D.title)}</b><small>${esc(D.goal)}</small></span><span class="lc-go">${done[i] ? "✓" : "›"}</span></button>`).join("");
    frame("A1.1 – Mon identité", null, `<div class="lc-vocab-head"><span class="lc-vh-ic">🌱</span><div><h1>Transversale</h1><p>7 jours pour ancrer les acquis.</p></div></div><section class="lc-card lc-menu">${rows}</section>`);
    el.querySelector("#lcBack").onclick = showMenu;
    el.querySelectorAll("[data-day]").forEach((b) => b.addEventListener("click", () => {
      tday = Number(b.dataset.day); page = 0; ACT.transversal.pages = dayPages(tday); ACT.transversal.sub = TRANSV_DAYS[tday].title; showAct("transversal");
    }));
  }

  /* ----- Test de fin de leçon : 40 points (7,5 + 7,5 lecture/écoute, 10 grammaire, 7,5 + 7,5 expression) ----- */
  let T = null; // état du test en cours
  function startTest() {
    const attempt = prog.testAttempts || 0;
    let seed = attempt * 7919 + 13;
    const rnd = () => { seed = (seed * 1103515245 + 12345) % 2147483648; return seed / 2147483648; };
    const ids = TEST_GRAMMAR.map((_, i) => i);
    for (let i = ids.length - 1; i > 0; i--) { const j = Math.floor(rnd() * (i + 1)); [ids[i], ids[j]] = [ids[j], ids[i]]; }
    T = { attempt, text: TEST_TEXTS[attempt % TEST_TEXTS.length], audio: TEST_AUDIOS[(attempt + 1) % TEST_AUDIOS.length], gram: ids.slice(0, 10), ans: {}, written: "", heard: "", oral: [false, false, false, false], p: 0 };
    showTest();
  }
  function showTest() {
    screen = "test";
    const total = 6, p = T.p, c = currentCharacter();
    const Q = (key, q, n) => `<div class="lc-qb"><p class="lc-q">${n}. ${esc(q[0])}</p><div class="lc-choices" role="group">${q[1].map((o, i) => `<button type="button" class="lc-choice ${T.ans[key] === i ? "lc-sel" : ""}" data-k="${key}" data-i="${i}">${esc(o)}</button>`).join("")}</div></div>`;
    let body = "", keys = [], head = "";
    const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (p === 0) {
      keys = T.text.q.map((_, i) => "r" + i); head = "Compréhension écrite · 7,5 pts";
      body = `<section class="lc-card"><h2 class="lc-h2">📚 ${esc(T.text.title)}</h2><p class="lc-text">${esc(T.text.text)}</p></section><section class="lc-card lc-prac">${T.text.q.map((q, i) => Q("r" + i, q, i + 1)).join("")}</section>`;
    } else if (p === 1) {
      keys = T.audio.q.map((_, i) => "l" + i); head = "Compréhension orale · 7,5 pts";
      body = `<section class="lc-card"><h2 class="lc-h2">🎧 Écoute</h2><div class="lc-player"><button type="button" class="lc-play" data-say="${esc(T.audio.script)}" aria-label="Écouter l’audio">▶</button><span class="lc-wave" aria-hidden="true"></span><button type="button" class="lc-speed" id="lcSpeed">${speedMul === 1 ? "1x" : "0.75x"}</button></div></section><section class="lc-card lc-prac">${T.audio.q.map((q, i) => Q("l" + i, q, i + 1)).join("")}</section>`;
    } else if (p === 2 || p === 3) {
      const part = T.gram.slice((p - 2) * 5, (p - 2) * 5 + 5); keys = part.map((id) => "g" + id); head = "Grammaire, verbes, vocabulaire · 10 pts";
      body = `<section class="lc-card lc-prac">${part.map((id, i) => Q("g" + id, TEST_GRAMMAR[id], (p - 2) * 5 + i + 1)).join("")}</section>`;
    } else if (p === 4) {
      head = "Expression écrite · 7,5 pts";
      body = `<section class="lc-card"><h2 class="lc-h2">✍️ Présente-toi en anglais</h2><p class="lc-lead">Écris au moins 4 phrases : ton prénom, ton âge, d’où tu viens, ce que tu aimes.</p><textarea id="lcTa" class="lc-ta" rows="5" aria-label="Ta présentation en anglais">${esc(T.written)}</textarea></section>`;
    } else {
      head = "Expression orale · 7,5 pts";
      body = `<section class="lc-card"><h2 class="lc-h2">🎤 Dis ta présentation</h2><p class="lc-lead">Présente-toi à voix haute en anglais, puis coche ce que tu as réellement dit (auto-évaluation).</p>
        ${SR ? `<div class="lc-mic"><button type="button" class="lc-micbtn" id="lcMic" aria-label="Appuie et parle">🎙️</button><p class="lc-heard" id="lcHeard">${esc(T.heard)}</p></div>` : ""}
        <ul class="lc-checks lc-checks-in">${EXPRESSION_PAGES[0].checks.map(([l], i) => `<li><label><input type="checkbox" data-o="${i}" ${T.oral[i] ? "checked" : ""}/> ${esc(l)}</label></li>`).join("")}</ul></section>`;
    }
    const last = p === total - 1;
    const foot = `<footer class="lc-foot"><button type="button" class="lc-sec-btn" id="lcPrev">← Précédent</button><button type="button" class="lc-cta lc-next" id="lcNext" disabled>${last ? "Voir mon résultat" : "Suivant →"}</button></footer>`;
    frame("Test de fin de leçon", { cur: p + 1, total }, `<div class="lc-vocab-head"><span class="lc-vh-ic">🏆</span><div><h1>Test de fin</h1><p>${esc(head)}</p></div></div>${body}`, foot);
    el.querySelector(".lc-main").scrollTop = 0;
    const next = el.querySelector("#lcNext");
    const refresh = () => {
      if (p <= 3) next.disabled = !keys.every((k) => T.ans[k] !== undefined);
      else if (p === 4) next.disabled = T.written.trim().length < 15;
      else next.disabled = !T.oral.some(Boolean);
    };
    refresh();
    el.querySelectorAll(".lc-choice").forEach((b) => b.addEventListener("click", () => {
      T.ans[b.dataset.k] = Number(b.dataset.i);
      el.querySelectorAll(`.lc-choice[data-k="${b.dataset.k}"]`).forEach((x) => x.classList.toggle("lc-sel", x === b));
      refresh();
    }));
    const ta = el.querySelector("#lcTa"); if (ta) ta.addEventListener("input", () => { T.written = ta.value; refresh(); });
    el.querySelectorAll("[data-o]").forEach((b) => b.addEventListener("change", () => { T.oral[Number(b.dataset.o)] = b.checked; refresh(); }));
    const sp = el.querySelector("#lcSpeed"); if (sp) sp.onclick = () => { speedMul = speedMul === 1 ? 0.75 : 1; sp.textContent = speedMul === 1 ? "1x" : "0.75x"; };
    const mic = el.querySelector("#lcMic");
    if (mic) mic.addEventListener("click", () => {
      try {
        const r = new SR(); r.lang = "en-GB"; r.interimResults = false; mic.classList.add("lc-mic-on");
        r.onresult = (e) => {
          T.heard = Array.from(e.results).map((x) => x[0].transcript).join(" "); el.querySelector("#lcHeard").textContent = T.heard;
          EXPRESSION_PAGES[0].checks.forEach(([, re], i) => { if (new RegExp(re, "i").test(T.heard)) { T.oral[i] = true; const cb = el.querySelector(`[data-o="${i}"]`); if (cb) cb.checked = true; } });
          refresh();
        };
        r.onerror = () => toast("Micro indisponible ou refusé"); r.onend = () => mic.classList.remove("lc-mic-on"); r.start();
      } catch (e) { toast("Micro indisponible sur cet appareil"); }
    });
    el.querySelector("#lcBack").onclick = showMenu;
    el.querySelector("#lcPrev").onclick = () => { if (p === 0) showMenu(); else { T.p--; showTest(); } };
    next.onclick = () => { if (!last) { T.p++; showTest(); } else showTestResult(); };
  }
  function showTestResult() {
    screen = "test-result";
    const cnt = (list, pre) => list.reduce((n, q, i) => n + (T.ans[pre + i] === q[2] ? 1 : 0), 0);
    const r = cnt(T.text.q, "r"), l = cnt(T.audio.q, "l");
    const g = T.gram.reduce((n, id) => n + (T.ans["g" + id] === TEST_GRAMMAR[id][2] ? 1 : 0), 0);
    const w = EXPRESSION_PAGES[0].checks.filter(([, re]) => new RegExp(re, "i").test(T.written)).length / 4 * 7.5;
    const o = T.oral.filter(Boolean).length / 4 * 7.5;
    const pts = [r / 3 * 7.5, l / 3 * 7.5, g, w, o];
    const sum = Math.round(pts.reduce((a, b) => a + b, 0));
    const passed = sum >= 32;
    const fmt = (n) => String(Math.round(n * 10) / 10).replace(".", ",");
    prog.testAttempts = (T.attempt || 0) + 1;
    prog.scores = Object.assign({}, prog.scores, { test: `${sum}/40` });
    prog.testHist = (prog.testHist || []).concat([{ d: new Date().toISOString().slice(0, 10), total: sum, passed }]).slice(-20);
    if (passed) prog.done = Object.assign({}, prog.done, { test: true });
    saveProgress(prog);
    const wrong = [
      ...T.text.q.map((q, i) => ["r" + i, q]), ...T.audio.q.map((q, i) => ["l" + i, q]), ...T.gram.map((id) => ["g" + id, TEST_GRAMMAR[id]]),
    ].filter(([k, q]) => T.ans[k] !== q[2]).map(([k, q]) => `<li><b>${esc(q[0])}</b><small>Ta réponse : ${esc(q[1][T.ans[k]] ?? "—")} · Bonne réponse : ${esc(q[1][q[2]])}</small></li>`).join("");
    frame("Test de fin de leçon", null, `
      <section class="lc-hero"><img class="lc-hero-img lc-hero-sm" src="${c0().src}" alt=""/></section>
      <section class="lc-card lc-intro"><h1>${passed ? "Leçon terminée !" : "Presque !"}</h1>
        <p class="lc-lead">${passed ? "Bravo ! Tu as validé A1.1 – Mon identité." : "Il faut 32/40 pour valider. Revois les points manqués et réessaie."}</p>
        <table class="lc-table"><tbody>
          <tr><td>Compréhension écrite</td><td class="lc-form">${fmt(pts[0])} / 7,5</td></tr>
          <tr><td>Compréhension orale</td><td class="lc-form">${fmt(pts[1])} / 7,5</td></tr>
          <tr><td>Grammaire, vocabulaire</td><td class="lc-form">${fmt(pts[2])} / 10</td></tr>
          <tr><td>Expression écrite</td><td class="lc-form">${fmt(pts[3])} / 7,5</td></tr>
          <tr><td>Expression orale (auto-éval.)</td><td class="lc-form">${fmt(pts[4])} / 7,5</td></tr>
          <tr><td><b>Total</b></td><td class="lc-form"><b>${sum} / 40</b></td></tr></tbody></table>
        ${wrong ? `<details class="lc-det"><summary>Revoir mes réponses (${wrong.split("</li>").length - 1})</summary><ul class="lc-list lc-wronglist">${wrong}</ul></details>` : ""}
        <button type="button" class="lc-cta" id="lcAgain" style="margin-top:12px">Refaire une nouvelle version</button>
        <button type="button" class="lc-sec-btn" id="lcToMenu" style="width:100%;margin-top:10px">Retour aux leçons</button></section>`);
    el.querySelector("#lcBack").onclick = showMenu;
    el.querySelector("#lcToMenu").onclick = showMenu;
    el.querySelector("#lcAgain").onclick = startTest;
  }
  const c0 = () => currentCharacter();

  showIntro();
}
