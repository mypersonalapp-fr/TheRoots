// The Roots — Test de niveau initial : version révisée, plus proche de ce
// qui se fait ailleurs (paliers progressifs A1 → A2 → B1, avec plusieurs
// formats de question — pas juste du QCM). On avance de palier en palier
// tant qu'on réussit ; le test s'arrête dès qu'un palier n'est pas atteint
// (ou qu'on a validé le plus haut palier proposé). Le score obtenu est
// gardé comme "niveau d'entrée" même si, pour l'instant, seules les leçons
// A1 existent dans l'application.
//
// Habillage (intro, écrans de résultat, boutons) traduit selon la langue de
// l'interface via i18n.js — les QUESTIONS elles-mêmes (tableau TIERS)
// restent en français volontairement : tester l'anglais dans une autre
// langue d'interface ne changerait rien aux questions.

import { store } from "../data/store.js?v=20260920b";
import { t } from "../data/i18n.js?v=20260920b";

const TEST_MAX_MINUTES = 10;
const PASS_RATIO = 0.7; // il faut 70% dans un palier pour débloquer le suivant

function speak(text) {
  try {
    if (!window.speechSynthesis) return;
    const u = new SpeechSynthesisUtterance(text);
    u.lang = "en-GB";
    u.rate = 0.92;
    const { settings } = store.get();
    const preferred = settings.preferredVoiceURI;
    if (preferred) {
      const [name, voiceLang] = preferred.split("|");
      const match = window.speechSynthesis.getVoices().find((v) => v.name === name && v.lang === voiceLang);
      if (match) { u.voice = match; u.lang = match.lang; }
    }
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(u);
  } catch (e) { /* pas grave si la synthèse vocale n'est pas dispo */ }
}

// ---- Paliers : chaque palier mélange QCM, écoute, texte à trous et
// compréhension de lecture — comme un vrai test de placement plutôt qu'une
// simple liste de questions de vocabulaire. ----
const TIERS = [
  {
    id: "A1",
    label: "Palier A1 — les bases",
    questions: [
      { type: "mcq", q: "Comment dit-on « Bonjour » (à toute heure) ?", opts: ["Goodbye", "Hello", "Sorry", "Please"], correct: 1 },
      { type: "mcq", q: "Complète : “I ___ from France.”", opts: ["is", "are", "am", "be"], correct: 2 },
      { type: "listening", audio: "Thank you", q: "Écoute : que dit-on ?", opts: ["Merci", "Désolé", "S'il te plaît", "Au revoir"], correct: 0 },
      { type: "mcq", q: "Comment dit-on « Tante » ?", opts: ["Uncle", "Aunt", "Cousin", "Niece"], correct: 1 },
      { type: "cloze", q: "Complète avec le bon mot : “She ___ my sister.”", accept: ["is"] },
      { type: "reading", passage: "“Hello! My name is Emma. I am from London. I have one sister.”", q: "D'où vient Emma ?", opts: ["Paris", "Londres", "Madrid"], correct: 1 },
    ],
  },
  {
    id: "A2",
    label: "Palier A2 — un peu plus loin",
    questions: [
      { type: "mcq", q: "Complète : “Yesterday, I ___ to the cinema.”", opts: ["go", "went", "goes", "going"], correct: 1 },
      { type: "mcq", q: "Quel est le comparatif de « big » ?", opts: ["more big", "bigger", "biggest", "most big"], correct: 1 },
      { type: "listening", audio: "She doesn't like vegetables.", q: "Écoute : qu'exprime cette phrase ?", opts: ["Un goût", "Une action passée", "Une question", "Un ordre"], correct: 0 },
      { type: "cloze", q: "Complète : “There ___ two cats in the garden.”", accept: ["are"] },
      { type: "mcq", q: "Comment dit-on « la semaine dernière » ?", opts: ["Next week", "Last week", "This week", "Every week"], correct: 1 },
      { type: "reading", passage: "“Last weekend, Tom went to the beach with his family. They swam in the sea and ate ice cream.”", q: "Qu'ont-ils fait à la plage ?", opts: ["Ils ont fait du vélo", "Ils ont nagé", "Ils ont dormi"], correct: 1 },
    ],
  },
  {
    id: "B1",
    label: "Palier B1 — pour aller plus loin",
    questions: [
      { type: "mcq", q: "Complète : “I ___ never ___ sushi before.”", opts: ["have / eaten", "has / eat", "did / eat", "am / eating"], correct: 0 },
      { type: "mcq", q: "Choisis la forme correcte : “If I ___ more time, I would travel more.”", opts: ["have", "had", "has", "will have"], correct: 1 },
      { type: "listening", audio: "Although it was raining, we decided to go for a walk.", q: "Écoute : que signifie « although » ici ?", opts: ["Parce que", "Bien que", "Ensuite", "Donc"], correct: 1 },
      { type: "cloze", q: "Complète : “By the time she arrived, the meeting had already ___.” (verbe « start »)", accept: ["started"] },
      { type: "order", bank: ["been", "have", "I", "waiting", "for", "an hour"], answer: "i have been waiting for an hour", display: "I have been waiting for an hour." },
      { type: "reading", passage: "“Marc said he'd finish the report by Friday, but judging by how stressed he looked in the meeting, I wouldn't count on it.”", q: "D'après le ton du texte, la narratrice pense que Marc...", opts: ["...finira sûrement à temps", "...risque de ne pas finir à temps", "...a déjà fini"], correct: 1 },
    ],
  },
];

export function renderLevelTest(root, { langCode, langLabel, onDone }) {
  const { settings } = store.get();
  const lang = settings.interfaceLang;
  const el = document.createElement("div");
  el.className = "screen level-test-screen";
  root.appendChild(el);

  // Le fond (image n°4 : globe/drapeaux + villes) doit rester visible derrière
  // le test, comme partout ailleurs dans l'appli. On masque juste la barre du
  // haut (qui porte le bouton menu) et le corps de la coquille pendant le test
  // (ils afficheraient sinon un titre/menu en double par-dessus), et on les
  // remet dès qu'on quitte le test. Le panneau de menu (nav-drawer) est fermé
  // par défaut donc rien d'autre à masquer.
  const shellTopbar = root.querySelector(".app-shell > .app-topbar");
  const shellBody = root.querySelector(".app-shell > .app-body");
  if (shellTopbar) shellTopbar.style.display = "none";
  if (shellBody) shellBody.style.display = "none";

  function leave() {
    window.speechSynthesis && window.speechSynthesis.cancel();
    if (shellTopbar) shellTopbar.style.display = "";
    if (shellBody) shellBody.style.display = "";
    el.remove();
  }

  let tierIdx = 0, qIdx = 0, tierCorrect = 0, highestLevel = null;
  let timeLeft = TEST_MAX_MINUTES * 60, timerId = null;
  let orderPicked = [];

  renderIntro();

  function renderIntro() {
    el.innerHTML = `
      <div class="app-topbar"><div class="title">${t("lt_title", lang)}</div></div>
      <div class="app-body">
        <div class="card lt-intro">
          <div class="lt-eyebrow">${t("lt_before_start", lang, { lang: langLabel })}</div>
          <h2>${t("lt_h2", lang)}</h2>
          <p class="lt-lede">${t("lt_lede1", lang)}</p>
          <div class="lt-facts">
            <div class="lt-fact"><span class="lt-fact-n">${t("lt_fact_time", lang, { min: TEST_MAX_MINUTES })}</span><span>${t("lt_fact_time_desc", lang)}</span></div>
            <div class="lt-fact"><span class="lt-fact-n">${t("lt_fact_formats", lang)}</span><span>${t("lt_fact_formats_desc", lang)}</span></div>
            <div class="lt-fact"><span class="lt-fact-n">${t("lt_fact_tier", lang)}</span><span>${t("lt_fact_tier_desc", lang)}</span></div>
          </div>
          <p class="lt-lede">${t("lt_lede2", lang)}</p>
          <button class="btn btn-primary" id="ltStart" style="width:100%;margin-top:8px">${t("lt_start_btn", lang)}</button>
        </div>
      </div>
    `;
    el.querySelector("#ltStart").addEventListener("click", startTier);
  }

  function startTier() {
    clearInterval(timerId);
    timerId = setInterval(() => {
      timeLeft--;
      const timerEl = el.querySelector("#ltTimer");
      if (timerEl) timerEl.textContent = formatTime(timeLeft);
      if (timeLeft <= 0) { clearInterval(timerId); finish(); }
    }, 1000);
    qIdx = 0; tierCorrect = 0; orderPicked = [];
    paintQuestion();
  }

  function formatTime(s) {
    const m = Math.floor(s / 60), r = s % 60;
    return `${m}:${String(r).padStart(2, "0")}`;
  }

  function currentTier() { return TIERS[tierIdx]; }
  function currentQuestion() { return currentTier().questions[qIdx]; }

  function shellFor(bodyHtml) {
    const tier = currentTier();
    return `
      <div class="app-topbar"><div class="title">${t("lt_title", lang)}</div></div>
      <div class="app-body">
        <div class="card lt-quiz">
          <div class="lt-quiz-top">
            <span class="lt-progress">${tier.label} · ${qIdx + 1}/${tier.questions.length}</span>
            <span class="lt-timer" id="ltTimer">${formatTime(timeLeft)}</span>
          </div>
          ${bodyHtml}
        </div>
      </div>
    `;
  }

  function paintQuestion() {
    const item = currentQuestion();

    if (item.type === "mcq" || item.type === "listening") {
      el.innerHTML = shellFor(`
        ${item.type === "listening" ? `
          <button class="q-audio-btn-lt" id="ltPlay">🔊 Écouter</button>
        ` : ""}
        <div class="lt-qtext">${item.q}</div>
        <div class="lt-opts">
          ${item.opts.map((o, i) => `<button class="lt-opt" data-i="${i}">${o}</button>`).join("")}
        </div>
      `);
      if (item.type === "listening") {
        const playBtn = el.querySelector("#ltPlay");
        const playIt = () => speak(item.audio);
        playBtn.addEventListener("click", playIt);
        setTimeout(playIt, 300);
      }
      el.querySelectorAll(".lt-opt").forEach((btn) => {
        btn.addEventListener("click", () => {
          const i = Number(btn.dataset.i);
          el.querySelectorAll(".lt-opt").forEach((b) => (b.disabled = true));
          if (i === item.correct) { btn.classList.add("correct"); tierCorrect++; }
          else {
            btn.classList.add("incorrect");
            el.querySelectorAll(".lt-opt")[item.correct].classList.add("correct");
          }
          advanceAfter();
        });
      });
    }

    else if (item.type === "cloze") {
      el.innerHTML = shellFor(`
        <div class="lt-qtext">${item.q}</div>
        <input type="text" id="ltClozeInput" class="lt-cloze-input" placeholder="Ta réponse…" autocomplete="off" autocapitalize="off" spellcheck="false"/>
        <button class="btn btn-primary" id="ltClozeCheck" style="width:100%;margin-top:12px">Valider</button>
        <div id="ltClozeFb" class="lt-cloze-fb"></div>
      `);
      const input = el.querySelector("#ltClozeInput");
      input.focus();
      const check = () => {
        el.querySelector("#ltClozeCheck").disabled = true;
        input.disabled = true;
        const val = input.value.trim().toLowerCase();
        const ok = item.accept.includes(val);
        const fb = el.querySelector("#ltClozeFb");
        if (ok) { tierCorrect++; fb.innerHTML = `<span class="lt-ok">✓ Correct !</span>`; }
        else { fb.innerHTML = `<span class="lt-bad">✗ Réponse attendue : « ${item.accept[0]} »</span>`; }
        advanceAfter();
      };
      el.querySelector("#ltClozeCheck").addEventListener("click", check);
      input.addEventListener("keydown", (e) => { if (e.key === "Enter") check(); });
    }

    else if (item.type === "reading") {
      el.innerHTML = shellFor(`
        <div class="lt-passage">${item.passage}</div>
        <div class="lt-qtext">${item.q}</div>
        <div class="lt-opts">
          ${item.opts.map((o, i) => `<button class="lt-opt" data-i="${i}">${o}</button>`).join("")}
        </div>
      `);
      el.querySelectorAll(".lt-opt").forEach((btn) => {
        btn.addEventListener("click", () => {
          const i = Number(btn.dataset.i);
          el.querySelectorAll(".lt-opt").forEach((b) => (b.disabled = true));
          if (i === item.correct) { btn.classList.add("correct"); tierCorrect++; }
          else {
            btn.classList.add("incorrect");
            el.querySelectorAll(".lt-opt")[item.correct].classList.add("correct");
          }
          advanceAfter();
        });
      });
    }

    else if (item.type === "order") {
      orderPicked = [];
      const bank = item.bank.slice().sort(() => Math.random() - 0.5);
      el.innerHTML = shellFor(`
        <div class="lt-qtext">Remets les mots dans le bon ordre :</div>
        <div class="lt-order-answer" id="ltOrderAnswer"></div>
        <div class="lt-order-bank" id="ltOrderBank">
          ${bank.map((w) => `<button class="lt-chip" data-w="${w}">${w}</button>`).join("")}
        </div>
        <button class="btn btn-primary" id="ltOrderCheck" style="width:100%;margin-top:12px" disabled>Valider</button>
      `);
      const answerEl = el.querySelector("#ltOrderAnswer");
      const checkBtn = el.querySelector("#ltOrderCheck");
      el.querySelectorAll("#ltOrderBank .lt-chip").forEach((chip) => {
        chip.addEventListener("click", () => {
          orderPicked.push(chip.dataset.w);
          chip.disabled = true;
          answerEl.innerHTML = orderPicked.map((w) => `<span class="lt-chip lt-chip-answer">${w}</span>`).join(" ");
          checkBtn.disabled = orderPicked.length !== item.bank.length;
        });
      });
      checkBtn.addEventListener("click", () => {
        checkBtn.disabled = true;
        const ok = orderPicked.join(" ").toLowerCase() === item.answer;
        if (ok) { tierCorrect++; answerEl.classList.add("lt-ok-bg"); }
        else { answerEl.classList.add("lt-bad-bg"); answerEl.insertAdjacentHTML("afterend", `<div class="lt-cloze-fb"><span class="lt-bad">Réponse attendue : « ${item.display} »</span></div>`); }
        advanceAfter();
      });
    }
  }

  function advanceAfter() {
    setTimeout(() => {
      qIdx++;
      if (qIdx < currentTier().questions.length) { paintQuestion(); return; }
      // fin du palier
      const ratio = tierCorrect / currentTier().questions.length;
      if (ratio >= PASS_RATIO) {
        highestLevel = currentTier().id;
        if (tierIdx + 1 < TIERS.length) { tierIdx++; renderTierUp(); }
        else { finish(true); }
      } else {
        finish(false);
      }
    }, 700);
  }

  function renderTierUp() {
    clearInterval(timerId);
    const nextTier = currentTier();
    el.innerHTML = `
      <div class="app-topbar"><div class="title">${t("lt_title", lang)}</div></div>
      <div class="app-body">
        <div class="card lt-result">
          <div class="lt-badge">${t("lt_badge_validated", lang, { level: highestLevel })}</div>
          <h2 style="margin:10px 0">${t("lt_tierup_h2", lang)}</h2>
          <p class="lt-lede">${t("lt_tierup_lede", lang, { level: highestLevel, next: nextTier.id })}</p>
          <button class="btn btn-primary" id="ltContinue" style="width:100%;margin-top:8px">${t("lt_continue_btn", lang, { next: nextTier.id })}</button>
          <button class="btn btn-ghost" id="ltStopHere" style="width:100%;margin-top:8px">${t("lt_stop_btn", lang, { level: highestLevel })}</button>
        </div>
      </div>
    `;
    el.querySelector("#ltContinue").addEventListener("click", startTier);
    el.querySelector("#ltStopHere").addEventListener("click", () => finish(false));
  }

  function finish() {
    clearInterval(timerId);
    window.speechSynthesis && window.speechSynthesis.cancel();
    const finalLevel = highestLevel || TIERS[0].id; // plancher : Débutant A1
    const maxedOut = finalLevel === TIERS[TIERS.length - 1].id;

    store.setPlacementResult(langCode, { score: null, level: finalLevel, entryLevel: finalLevel, entryDate: new Date().toISOString() });

    el.innerHTML = `
      <div class="app-topbar"><div class="title">${t("lt_title_result", lang)}</div></div>
      <div class="app-body">
        <div class="card lt-result">
          <div class="lt-eyebrow">${langLabel}</div>
          <div class="lt-badge">${t("lt_badge_entry", lang, { level: finalLevel })}</div>
          ${maxedOut
            ? `<p class="lt-lede">${t("lt_result_maxed", lang, { level: finalLevel })}</p>`
            : finalLevel === "A1"
              ? `<p class="lt-lede">${t("lt_result_a1", lang)}</p>`
              : `<p class="lt-lede">${t("lt_result_other", lang, { level: finalLevel })}</p>`
          }
          <button class="btn btn-primary" id="ltGo" style="width:100%;margin-top:8px">${t("lt_go_btn", lang)}</button>
        </div>
      </div>
    `;
    el.querySelector("#ltGo").addEventListener("click", () => { leave(); onDone(); });
  }
}
