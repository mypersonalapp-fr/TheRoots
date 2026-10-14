// The Roots — leçon A1.1 « Mon identité » : Introduction → Menu → Vocabulaire.
// Intégrée au vrai routage : ouverte depuis Mes cours (mes-cours.js) avec
// renderLessonA11(root, { onExit }), même schéma que l'onboarding.
// Maquettes de référence : 06 / 07 / 08 / 09 (dossier de transmission).
// Hors leçons : fonds d'origine The Roots (jour/nuit). Ici : cartes illustrées,
// personnage choisi dans Paramètres (settings.avatarGender / avatarIndex).

import { store } from "../data/store.js?v=20260930a";
import { GRAMMAR_PAGES, READING_PAGES, LISTENING_PAGES } from "../data/lecon-a11-data.js?v=20261014b";

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
  { n: 5, id: "speaking", icon: "🎤", title: "Expression", sub: "Parler et écrire" },
  { section: "S’entraîner et progresser" },
  { n: 6, id: "exercises", icon: "🧩", title: "Exercices", sub: "Corrections et rattrapage" },
  { n: 7, id: "transversal", icon: "🌱", title: "Transversale", sub: "Pratique quotidienne" },
  { n: 8, id: "test", icon: "🏆", title: "Test de fin de leçon", sub: "Valide tes acquis" },
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
          <span class="lc-txt"><b>${esc(m.title)}</b><small>${esc(m.ready ? m.sub : m.sub + " · bientôt")}</small></span>
          <span class="lc-go">${done[m.id] ? "✓" : "›"}</span>
        </button>`).join("");
    frame("A1.1 – Mon identité", { cur: 1, total: 8 }, `<section class="lc-card lc-menu">${rows}</section>`);
    el.querySelector("#lcBack").onclick = showIntro;
    el.querySelectorAll(".lc-row").forEach((b) => b.addEventListener("click", () => {
      if (b.dataset.act === "vocab") { page = 0; showVocab(); }
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
  };
  const READERS = { Emma: "girl-1", Lucas: "boy-2", Maya: "girl-2", Alex: "boy-5" };
  const okQ = {}; // "activité:page" → { indexQuestion: true }

  function showAct(id) {
    screen = id;
    const A = ACT[id], p = A.pages[page], total = A.pages.length, key = id + ":" + page;
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
    } else {
      body = `<section class="lc-card"><h2 class="lc-h2">🎧 ${esc(p.title)}</h2>
        <div class="lc-player"><button type="button" class="lc-play" data-say="${esc(p.text)}" aria-label="Écouter l’audio">▶</button>
          <span class="lc-wave" aria-hidden="true"></span><button type="button" class="lc-speed" id="lcSpeed" aria-label="Vitesse de lecture">${speedMul === 1 ? "1x" : "0.75x"}</button></div>
        <div class="lc-actions"><button type="button" class="lc-chip" id="lcTr" aria-expanded="false">Afficher la transcription</button></div>
        <p class="lc-tr" id="lcTrText" hidden>${esc(p.text)}</p></section>`;
    }
    body += `<section class="lc-card lc-prac"><h2 class="lc-h2 lc-h2-prac">✏️ ${id === "grammar" ? "À toi de pratiquer !" : "Questions"}</h2>
      ${p.qs.map((q, qi) => `<div class="lc-qb" data-qi="${qi}"><p class="lc-q">${qi + 1}. ${esc(q[0])}</p>
        <div class="lc-choices" role="group">${q[1].map((o, i) => `<button type="button" class="lc-choice" data-qi="${qi}" data-i="${i}">${esc(o)}</button>`).join("")}</div>
        <p class="lc-fb" aria-live="polite"></p></div>`).join("")}</section>`;

    const last = page === total - 1;
    const foot = `<footer class="lc-foot"><button type="button" class="lc-sec-btn" id="lcPrev">← Précédent</button>
      <button type="button" class="lc-cta lc-next" id="lcNext" disabled>${last ? "Terminer ✓" : "Suivant →"}</button></footer>`;
    frame("A1.1 – Mon identité", { cur: page + 1, total }, `<div class="lc-vocab-head"><span class="lc-vh-ic">${A.icon}</span><div><h1>${esc(A.title)}</h1><p>${esc(A.sub)}</p></div></div>${body}`, foot);
    el.querySelector(".lc-main").scrollTop = 0;

    const next = el.querySelector("#lcNext");
    const refresh = () => { next.disabled = !p.qs.every((_, qi) => (okQ[key] || {})[qi]); };
    const mark = (qi, withMsg) => {
      const q = p.qs[qi], box = el.querySelector(`.lc-qb[data-qi="${qi}"]`);
      box.querySelectorAll(".lc-choice").forEach((x) => { x.disabled = true; x.classList.toggle("lc-right", Number(x.dataset.i) === q[2]); });
      const fb = box.querySelector(".lc-fb"); fb.className = "lc-fb lc-fb-ok"; fb.textContent = withMsg ? "Bravo ! " + (q[3] || "") : "✓ " + (q[3] || "");
    };
    Object.keys(okQ[key] || {}).forEach((qi) => mark(Number(qi), false));
    refresh();

    el.querySelector("#lcBack").onclick = showMenu;
    el.querySelector("#lcPrev").onclick = () => { if (page === 0) showMenu(); else { page--; showAct(id); } };
    next.onclick = () => {
      if (!last) { page++; showAct(id); return; }
      prog.done = Object.assign({}, prog.done, { [id]: true }); saveProgress(prog); showMenu();
    };
    el.querySelectorAll(".lc-choice").forEach((b) => b.addEventListener("click", () => {
      const qi = Number(b.dataset.qi), q = p.qs[qi];
      el.querySelectorAll(`.lc-qb[data-qi="${qi}"] .lc-choice`).forEach((x) => x.classList.remove("lc-wrong"));
      if (Number(b.dataset.i) === q[2]) { okQ[key] = Object.assign({}, okQ[key], { [qi]: true }); mark(qi, true); refresh(); }
      else { b.classList.add("lc-wrong"); const fb = b.closest(".lc-qb").querySelector(".lc-fb"); fb.className = "lc-fb lc-fb-ko"; fb.textContent = "Pas tout à fait, réessaie."; }
    }));
    const tr = el.querySelector("#lcTr");
    if (tr) tr.onclick = () => { const t = el.querySelector("#lcTrText"); t.hidden = !t.hidden; tr.setAttribute("aria-expanded", String(!t.hidden)); };
    const sp = el.querySelector("#lcSpeed");
    if (sp) sp.onclick = () => { speedMul = speedMul === 1 ? 0.75 : 1; sp.textContent = speedMul === 1 ? "1x" : "0.75x"; };
  }

  showIntro();
}
