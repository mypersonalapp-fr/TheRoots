// The Roots — Test de niveau initial : version révisée, plus proche de ce
// qui se fait ailleurs (paliers progressifs A1 → A2 → B1, avec plusieurs
// formats de question — pas juste du QCM). On avance de palier en palier
// tant qu'on réussit ; le test s'arrête dès qu'un palier n'est pas atteint
// (ou qu'on a validé le plus haut palier proposé). Le score obtenu est
// gardé comme "niveau d'entrée" même si, pour l'instant, seules les leçons
// A1 existent dans l'application.

import { store } from "../data/store.js";

const TEST_MAX_MINUTES = 10;
const PASS_RATIO = 0.7; // il faut 70% dans un palier pour débloquer le suivant

function speak(text) {
  try {
    if (!window.speechSynthesis) return;
    const u = new SpeechSynthesisUtterance(text);
    u.lang = "en-GB";
    u.rate = 0.92;
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
      <div class="app-topbar"><div class="title">Test de niveau</div></div>
      <div class="app-body">
        <div class="card lt-intro">
          <div class="lt-eyebrow">Avant de commencer — ${langLabel}</div>
          <h2>On détermine ton niveau de départ</h2>
          <p class="lt-lede">Le test avance par paliers (A1 → A2 → B1) : tu continues tant que tu réussis, et il s'arrête dès qu'un palier n'est pas validé — comme ça, il reflète vraiment ton niveau, pas juste une série de questions au hasard.</p>
          <div class="lt-facts">
            <div class="lt-fact"><span class="lt-fact-n">⏱️ ${TEST_MAX_MINUTES} min max</span><span>Il peut s'arrêter avant, selon ton niveau</span></div>
            <div class="lt-fact"><span class="lt-fact-n">📝 QCM, écoute, texte à trous, lecture</span><span>Plusieurs formats, comme dans une vraie leçon</span></div>
            <div class="lt-fact"><span class="lt-fact-n">🎯 Palier par palier</span><span>70% dans un palier pour débloquer le suivant</span></div>
          </div>
          <p class="lt-lede">Réponds du mieux que tu peux, sans chercher les réponses ailleurs. Ton score de départ reste gardé en mémoire pour que tu puisses te comparer plus tard, une fois que tu auras progressé.</p>
          <button class="btn btn-primary" id="ltStart" style="width:100%;margin-top:8px">C'est parti →</button>
        </div>
      </div>
    `;
    el.querySelector("#ltStart").addEventListener("click", startTier);
  }

  function startTier() {
    clearInterval(timerId);
    timerId = setInterval(() => {
      timeLeft--;
      const t = el.querySelector("#ltTimer");
      if (t) t.textContent = formatTime(timeLeft);
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
      <div class="app-topbar"><div class="title">Test de niveau</div></div>
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
      <div class="app-topbar"><div class="title">Test de niveau</div></div>
      <div class="app-body">
        <div class="card lt-result">
          <div class="lt-badge">Palier ${highestLevel} validé ✓</div>
          <h2 style="margin:10px 0">On continue un peu plus loin ?</h2>
          <p class="lt-lede">Tu peux t'arrêter ici et garder ${highestLevel}, ou continuer avec des questions un peu plus difficiles (${nextTier.id}) pour voir jusqu'où tu vas.</p>
          <button class="btn btn-primary" id="ltContinue" style="width:100%;margin-top:8px">Continuer vers ${nextTier.id} →</button>
          <button class="btn btn-ghost" id="ltStopHere" style="width:100%;margin-top:8px">M'arrêter à ${highestLevel}</button>
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
      <div class="app-topbar"><div class="title">Résultat</div></div>
      <div class="app-body">
        <div class="card lt-result">
          <div class="lt-eyebrow">${langLabel}</div>
          <div class="lt-badge">Niveau d'entrée : ${finalLevel}</div>
          ${maxedOut
            ? `<p class="lt-lede">Bravo, tu as validé le palier le plus élevé de ce test ! Les leçons ${finalLevel} et au-delà sont en cours de construction — en attendant, commence par les leçons A1 pour garder la main, ton niveau d'entrée reste enregistré pour comparaison plus tard.</p>`
            : finalLevel === "A1"
              ? `<p class="lt-lede">On te place en niveau Débutant (A1) — le point de départ idéal pour construire des bases solides.</p>`
              : `<p class="lt-lede">Bien joué ! Ton niveau d'entrée est ${finalLevel}. Les leçons ${finalLevel} arrivent bientôt — en attendant, commence par les leçons A1 pour consolider, ton score de départ reste gardé pour te comparer plus tard.</p>`
          }
          <button class="btn btn-primary" id="ltGo" style="width:100%;margin-top:8px">Commencer mes leçons →</button>
        </div>
      </div>
    `;
    el.querySelector("#ltGo").addEventListener("click", () => { leave(); onDone(); });
  }
}
