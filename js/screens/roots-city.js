// The Roots — « Roots City » : 6 missions de consolidation par leçon (entraînement, non noté dans les 40 points).
// Missions/données de A1.1 par défaut ; les autres leçons passent { missions, data } à createCity.
// Le texte est de vrai texte (pas dans les images) : cliquable, lisible, corrigeable.

import { createVoice } from "./voice.js?v=20261016f";
import { balanceAll } from "../data/balance.js?v=20261016f";
const V = "20261016f";
const img = (p) => `assets/img/${p}.webp?v=${V}`;

const DEF_MISSIONS = [
  { id: "m1", ic: "👂", title: "Trouve la bonne personne", sub: "Écoute la description, touche la bonne personne.", hero: "city/m1" },
  { id: "m2", ic: "🪪", title: "Complète les fiches d’identité", sub: "Écoute et remplis nom, âge et nationalité.", hero: "city/m2" },
  { id: "m3", ic: "💬", title: "Construis le dialogue", sub: "Remets les mots dans l’ordre.", hero: "city/m3" },
  { id: "m4", ic: "🛂", title: "Passeport international", sub: "Associe chaque pays à sa nationalité.", hero: "city/m4" },
  { id: "m5", ic: "🕵️", portrait: true, title: "Portrait-robot", sub: "Find the person : cheveux, yeux, vêtements.", hero: "city/m5" },
  { id: "m6", ic: "🎉", title: "Le grand rassemblement", sub: "Présente un personnage en anglais.", hero: "city/m6" },
];

const TILE = (i) => ({ v: String(i), img: img(`city/t${i}`) });
const M1 = [
  ["She has long curly brown hair and a pink hoodie.", "1"],
  ["He has short black hair and a green hoodie.", "3"],
  ["She has long straight black hair and a white top.", "4"],
  ["He has blond hair and a yellow hoodie.", "5"],
  ["She has curly black hair and a purple hoodie.", "2"],
  ["He has curly dark hair and a red hoodie.", "0"],
].map(([say, a]) => ({ say, groups: [{ label: "Who is it?", answer: a, opts: [0, 1, 2, 3, 4, 5].map(TILE), tiles: true }] }));

const names = (arr) => arr.map((n) => ({ v: n, label: n }));
const ages = (arr) => arr.map((n) => ({ v: String(n), label: String(n) }));
const NATS = [["French", "🇫🇷"], ["American", "🇺🇸"], ["Spanish", "🇪🇸"], ["Brazilian", "🇧🇷"], ["British", "🇬🇧"]].map(([n, f]) => ({ v: n, label: `${f} ${n}` }));
const M2 = [
  { say: "Hello! My name is Sofia. I am twelve years old. I am Spanish.", groups: [{ label: "Name", answer: "Sofia", opts: names(["Emma", "Sofia", "Mia", "Chloe"]) }, { label: "Age", answer: "12", opts: ages([10, 11, 12, 13]) }, { label: "Nationality", answer: "Spanish", opts: NATS }] },
  { say: "Hi! I'm Noah. I'm eleven. I'm from the United States. I'm American.", groups: [{ label: "Name", answer: "Noah", opts: names(["Noah", "Lucas", "Liam", "Adam"]) }, { label: "Age", answer: "11", opts: ages([10, 11, 12, 13]) }, { label: "Nationality", answer: "American", opts: NATS }] },
  { say: "Good morning. My name is Mia. I'm ten. I'm Brazilian.", groups: [{ label: "Name", answer: "Mia", opts: names(["Maya", "Lily", "Mia", "Anna"]) }, { label: "Age", answer: "10", opts: ages([10, 11, 12, 13]) }, { label: "Nationality", answer: "Brazilian", opts: NATS }] },
];

const M3 = [
  { prompt: "Demande à quelqu’un d’où il vient.", answer: ["Where", "are", "you", "from", "?"], bank: ["you", "from", "are", "Where", "?"] },
  { prompt: "Réponds : « Je suis de France. »", answer: ["I'm", "from", "France", "."], bank: ["France", "from", "I'm", "."] },
  { prompt: "Demande son prénom.", answer: ["What", "is", "your", "name", "?"], bank: ["name", "is", "are", "What", "your", "?"] },
  { prompt: "Demande son âge.", answer: ["How", "old", "are", "you", "?"], bank: ["are", "How", "you", "?", "old"] },
  { prompt: "Réponds : « J’ai douze ans. »", answer: ["I'm", "twelve", "years", "old", "."], bank: ["old", "I'm", ".", "years", "twelve"] },
];

const NAT_Q = [
  ["🇧🇷", "Brazil", "Brazilian", ["French", "Brazilian", "Spanish", "American"]],
  ["🇫🇷", "France", "French", ["British", "Chinese", "French", "Spanish"]],
  ["🇪🇸", "Spain", "Spanish", ["Spanish", "Brazilian", "American", "French"]],
  ["🇬🇧", "the United Kingdom", "British", ["American", "British", "Japanese", "Spanish"]],
  ["🇨🇳", "China", "Chinese", ["Japanese", "French", "Chinese", "British"]],
  ["🇯🇵", "Japan", "Japanese", ["Chinese", "Spanish", "American", "Japanese"]],
];
const M4 = NAT_Q.map(([flag, country, nat, opts]) => ({ say: `I'm from ${country}.`, flag, country, groups: [{ label: "Nationality", answer: nat, opts: names(opts) }] }));

const K = (id, label) => ({ v: id, label, img: img(`city/k-${id}`) });
const G5 = (a) => [
  { label: "Hair", answer: a[0], cols: 5, opts: [K("h0", "long wavy brown hair"), K("h1", "long straight dark hair"), K("h2", "curly black hair"), K("h3", "short black hair"), K("h4", "long wavy blond hair"), K("h5", "long wavy black hair"), K("h6", "black hair with a fringe"), K("h7", "two buns"), K("h8", "medium brown hair")] },
  { label: "Eyes", answer: a[1], cols: 4, opts: [K("e0", "brown eyes"), K("e1", "blue eyes"), K("e2", "green eyes"), K("e3", "grey eyes")] },
  { label: "Hoodie", answer: a[2], cols: 4, opts: [K("t0", "a red hoodie"), K("t1", "a pink hoodie"), K("t2", "a purple hoodie"), K("t3", "a green hoodie")] },
  { label: "Trousers", answer: a[3], cols: 4, opts: [K("p0", "light jeans"), K("p1", "blue jeans"), K("p2", "black trousers"), K("p3", "beige trousers")] },
  { label: "Shoes", answer: a[4], cols: 4, opts: [K("s0", "white trainers"), K("s1", "black trainers"), K("s2", "pink trainers"), K("s3", "red trainers")] },
];
const M5 = [
  { say: "She has long straight dark hair, brown eyes, a red hoodie, blue jeans and white trainers.", groups: G5(["h1", "e0", "t0", "p1", "s0"]) },
  { say: "She has long wavy blond hair, green eyes, a purple hoodie, beige trousers and black trainers.", groups: G5(["h4", "e2", "t2", "p3", "s1"]) },
  { say: "She has two buns, blue eyes, a green hoodie, black trousers and pink trainers.", groups: G5(["h7", "e1", "t3", "p2", "s2"]) },
];

const M6 = [
  { prompt: "Présente ce personnage.", card: [["Name", "Lucas"], ["Nationality", "French"], ["Eyes", "Brown"]], answer: ["This is", "Lucas.", "He is", "French.", "He has", "brown eyes."], bank: ["He has", "French.", "She is", "This is", "brown eyes.", "Lucas.", "He is", "She has"] },
  { prompt: "Présente ce personnage.", card: [["Name", "Maya"], ["Nationality", "British"], ["Eyes", "Green"]], answer: ["This is", "Maya.", "She is", "British.", "She has", "green eyes."], bank: ["green eyes.", "He is", "This is", "She has", "Maya.", "British.", "She is", "He has"] },
];

const DEF_DATA = { m1: M1, m2: M2, m4: M4, m5: M5, m3: M3, m6: M6 };
balanceAll(DEF_DATA);

export function createCity({ el, frame, esc, speak, toast, back, getStars, setStar, missions, data }) {
  const MISSIONS = missions || DEF_MISSIONS, DATA = data || DEF_DATA;
  const bindBack = (fn) => { el.querySelector("#lcBack").onclick = fn; };
  const hero = (m) => `<div class="rc-hero ${m.portrait ? "rc-m5" : ""}"><img src="${img(m.hero)}" alt="" onerror="this.parentElement.remove()"/>${m.portrait ? `<span class="rc-chalk">Portrait-robot</span><span class="rc-post">Find<br>the person</span>` : ""}</div>`;
  const play = (t) => `<button type="button" class="rc-listen" data-say="${esc(t)}">🔊 Écouter</button>`;
  const starsTxt = (n) => "⭐".repeat(n) + "☆".repeat(3 - n);

  /* ---- carte de la ville ---- */
  function start() {
    const st = getStars();
    const rows = MISSIONS.map((m, i) => `<button type="button" class="lc-row" data-m="${i}">
      <span class="lc-num">${i + 1}</span><span class="lc-ic rc-ic">${m.ic}</span>
      <span class="lc-txt"><b>${esc(m.title)}</b><small>${esc(m.sub)}</small></span><span class="lc-go${st[m.id] ? " lc-go-stars" : ""}">${st[m.id] ? starsTxt(st[m.id]) : "›"}</span></button>`).join("");
    const tot = MISSIONS.reduce((s, m) => s + (st[m.id] || 0), 0);
    frame("Roots City", null, `<div class="lc-vocab-head"><span class="lc-vh-ic">🏙️</span><div><h1>Roots City</h1><p>6 missions pour t’entraîner. Non noté : ta note officielle reste celle du test.</p></div></div>
      <section class="lc-card lc-menu">${rows}</section><p class="rc-total">${tot} / 18 ⭐</p>`);
    bindBack(back);
    el.querySelectorAll("[data-m]").forEach((b) => b.addEventListener("click", () => run(Number(b.dataset.m))));
  }

  function run(i) {
    const m = MISSIONS[i], steps = DATA[m.id];
    const S = { i, n: 0, errors: 0 };
    (steps[0].answer && steps[0].bank ? build : choose)(m, steps, S);
  }

  const head = (m, S, steps) => ({ cur: S.n + 1, total: steps.length });

  /* ---- missions à choix (1, 2, 4, 5) ---- */
  function choose(m, steps, S) {
    const step = steps[S.n], pick = {}; let checked = false, first = true;
    
    const lead = step.flag
      ? `<div class="rc-flag">${step.flag}</div><p class="rc-say">“I’m from ${esc(step.country)}.”</p><p class="rc-ask">What is his or her nationality?</p>`
      : `${play(step.say)}`;
    const sum = () => `<div class="rc-sum"><h3 class="lc-h3">Portrait</h3>${step.groups.map((g, gi) => { const o = g.opts.find((x) => x.v === pick[gi]); return `<div class="rc-sumrow">${o ? `<img src="${o.img}" alt=""/><span>${esc(o.label)}</span>` : `<i class="rc-empty"></i><span class="rc-muted">${esc(g.label)} …</span>`}</div>`; }).join("")}</div>`;
    const paint = () => {
      const y0 = first ? 0 : (el.querySelector(".lc-main") || {}).scrollTop || 0;
      const groups = step.groups.map((g, gi) => `<div class="rc-group"><h3 class="lc-h3">${esc(g.label)}</h3><div class="rc-opts ${g.tiles || g.cols ? "rc-tiles" : ""}" style="--c:${g.cols || 3}">${g.opts.map((o) => {
        const sel = pick[gi] === o.v, ok = checked && o.v === g.answer, ko = checked && sel && o.v !== g.answer;
        return `<button type="button" class="rc-opt ${sel ? "sel" : ""} ${ok ? "ok" : ""} ${ko ? "ko" : ""}" data-g="${gi}" data-v="${esc(o.v)}" ${checked ? "disabled" : ""}>${o.img ? `<img src="${o.img}" alt="${esc(o.img && o.label ? o.label : "Character " + (Number(o.v) + 1))}"/>` : ""}${o.label && !o.img ? `<span>${esc(o.label)}</span>` : ""}</button>`;
      }).join("")}</div></div>`).join("");
      const allSet = step.groups.every((g, gi) => pick[gi] != null);
      const extra = "";
      frame(`Mission ${S.i + 1}/6`, head(m, S, steps), `${hero(m)}<section class="lc-card rc-card"><h2 class="lc-h2">${m.ic} ${esc(m.title)}</h2>${extra}<div class="rc-lead">${lead}</div>${groups}${m.portrait ? sum() : ""}
        <div class="rc-fb" aria-live="polite">${checked ? (S.last ? "✅ Bien joué !" : "Pas tout à fait — regarde les bonnes réponses en vert.") : ""}</div>
        <button type="button" class="lc-next rc-go" id="rcGo" ${!checked && !allSet ? "disabled" : ""}>${checked ? (S.n + 1 >= steps.length ? "Terminer" : "Suivant ›") : "Valider"}</button></section>`);
      first = false; { const mn = el.querySelector(".lc-main"); if (mn) mn.scrollTop = y0; }
      bindBack(start);
      el.querySelectorAll(".rc-opt").forEach((b) => b.addEventListener("click", () => { pick[b.dataset.g] = b.dataset.v; paint(); }));
      el.querySelector("#rcGo").onclick = () => {
        if (!checked) {
          const wrong = step.groups.filter((g, gi) => pick[gi] !== g.answer).length;
          S.errors += wrong; S.last = wrong === 0; checked = true; paint();
        } else if (S.n + 1 >= steps.length) finish(m, S, steps);
        else { S.n++; S.last = false; choose(m, steps, S); }
      };
          };
    paint();
  }

  /* ---- missions de construction (3, 6) ---- */
  function build(m, steps, S) {
    const t = steps[S.n]; let placed = []; let checked = false, good = false, vmsg = "", listening = false, first = true;
    const target = t.answer.join(" ").replace(/ ([?.])/g, "$1");
    const norm = (s) => s.toLowerCase().replace(/[^a-z']+/g, " ").trim().split(/\s+/).filter(Boolean);
    let vstate = "idle", interim = "", vurl = false;
    const V = createVoice({
      onState: (st) => { vstate = st; if (st === "listening") { interim = ""; vmsg = ""; } paint(); },
      onText: (txt) => { interim = txt; const e = el.querySelector("#rcInterim"); if (e) e.textContent = txt ? `« ${txt} »` : ""; },
      onDone: ({ alts }) => {
        vurl = V.hasAudio();
        if (alts && alts.length) {
          const exp = norm(target), best = Math.max(...alts.map((a) => { const w = norm(a); return exp.filter((x) => w.includes(x)).length / exp.length; }));
          vmsg = best >= 0.8 ? `🌟 Great ! J’ai compris : « ${alts[0]} »` : `J’ai compris : « ${alts[0]} ». Réécoute le modèle et réessaie.`;
        } else vmsg = vurl ? (V.transcribes() ? "Je n’ai pas bien compris. Réécoute-toi, puis réessaie." : "✅ Enregistré ! Appuie sur ▶ Me réécouter, puis compare avec le modèle 🔊.") : "Je n’ai rien entendu. Réessaie un peu plus fort.";
        paint();
      },
      onError: (c) => { if (c === "denied") vmsg = "Micro refusé : autorise-le dans les réglages du navigateur, ou dis la phrase sans enregistrer."; else if (c === "unavailable") vmsg = "Micro indisponible sur cet appareil."; else if (c === "play") vmsg = "Lecture impossible : vérifie le volume et que le mode silencieux est coupé."; paint(); },
    });
    const voice = () => !t.card || !checked ? "" : `<div class="rc-voice"><p class="rc-ask">🎤 Maintenant, dis-le à voix haute !</p><p class="rc-say">“${esc(target)}”</p>${V.supported ? (vstate === "listening"
      ? `<button type="button" class="rc-listen rc-stop" id="rcStop">⏹ Terminer</button><p class="rc-heard" id="rcInterim" aria-live="polite">${interim ? `« ${esc(interim)} »` : "Je t’écoute…"}</p>`
      : `<div class="rc-vbtns"><button type="button" class="rc-listen" id="rcMic">${vurl || vmsg ? "🎤 Réessayer" : "🎤 Enregistrer"}</button>${vurl ? `<button type="button" class="rc-listen rc-replay" id="rcReplay">▶ Me réécouter</button>` : ""}</div>`)
      : `<button type="button" class="rc-listen" id="rcSaid">✔ Je l’ai dit à voix haute</button>`}<p class="rc-vmsg" aria-live="polite">${esc(vmsg)}</p><p class="rc-muted">Entraînement : ça ne change pas tes étoiles.</p></div>`;
    const startMic = () => { vurl = false; V.start(); };
    const paint = () => {
      const y0 = first ? 0 : (el.querySelector(".lc-main") || {}).scrollTop || 0;
      const used = new Set(placed);
      const bank = t.bank.map((w, k) => `<button type="button" class="rc-tok ${used.has(k) ? "used" : ""}" data-k="${k}" ${used.has(k) || checked ? "disabled" : ""}>${esc(w)}</button>`).join("");
      const slots = placed.map((k, p) => `<button type="button" class="rc-tok in" data-p="${p}" ${checked ? "disabled" : ""}>${esc(t.bank[k])}</button>`).join("") || `<span class="rc-ph">Touche les mots dans l’ordre</span>`;
      const card = t.card ? `<div class="rc-sheet">${t.card.map(([a, b]) => `<div><small>${esc(a)}</small><b>${esc(b)}</b></div>`).join("")}</div>` : "";
      frame(`Mission ${S.i + 1}/6`, head(m, S, steps), `${hero(m)}<section class="lc-card rc-card"><h2 class="lc-h2">${m.ic} ${esc(m.title)}</h2><p class="rc-ask">${esc(t.prompt)}</p>${card}
        <div class="rc-slots ${checked ? (good ? "ok" : "ko") : ""}">${slots}</div><div class="rc-bank">${bank}</div>
        <div class="rc-fb" aria-live="polite">${checked ? (good ? "✅ Parfait !" : `Pas tout à fait. Réponse : <b>${esc(t.answer.join(" ").replace(/ ([?.])/g, "$1"))}</b>`) : ""}</div>
        ${checked ? play(target) : ""}${voice()}
        <button type="button" class="lc-next rc-go" id="rcGo" ${!checked && placed.length === 0 ? "disabled" : ""}>${checked ? (S.n + 1 >= steps.length ? "Terminer" : "Suivant ›") : "Valider"}</button></section>`);
      first = false; { const mn = el.querySelector(".lc-main"); if (mn) mn.scrollTop = y0; }
      bindBack(start);
      el.querySelectorAll("[data-k]").forEach((b) => b.addEventListener("click", () => { placed.push(Number(b.dataset.k)); paint(); }));
      el.querySelectorAll("[data-p]").forEach((b) => b.addEventListener("click", () => { placed.splice(Number(b.dataset.p), 1); paint(); }));
      const mic = el.querySelector("#rcMic"); if (mic) mic.onclick = startMic;
      const stp = el.querySelector("#rcStop"); if (stp) stp.onclick = () => V.stop();
      const rpl = el.querySelector("#rcReplay"); if (rpl) rpl.onclick = () => V.play();
      const said = el.querySelector("#rcSaid"); if (said) said.onclick = () => { vmsg = "👍 Bravo, continue à t’entraîner !"; paint(); };
      el.querySelector("#rcGo").onclick = () => {
        if (!checked) {
          good = placed.map((k) => t.bank[k]).join("|") === t.answer.join("|");
          if (!good) S.errors++; checked = true; paint();
        } else if (S.n + 1 >= steps.length) finish(m, S, steps);
        else { S.n++; build(m, steps, S); }
      };
    };
    paint();
  }

  function finish(m, S, steps) {
    const stars = S.errors === 0 ? 3 : S.errors <= Math.ceil(steps.length / 2) ? 2 : 1;
    setStar(m.id, stars);
    frame(`Mission ${S.i + 1}/6`, null, `${hero(m)}<section class="lc-card rc-card rc-end"><h2 class="lc-h2">🎉 Mission terminée !</h2><p class="rc-stars">${starsTxt(stars)}</p>
      <p>${S.errors === 0 ? "Sans aucune erreur, bravo !" : `${S.errors} erreur${S.errors > 1 ? "s" : ""}. Recommence pour viser 3 étoiles.`}</p>
      <button type="button" class="lc-next rc-go" id="rcAgain">Rejouer</button><button type="button" class="lc-sec-btn" id="rcMap">Retour à Roots City</button></section>`);
    bindBack(start);
    el.querySelector("#rcAgain").onclick = () => run(S.i);
    el.querySelector("#rcMap").onclick = start;
  }

  return { start };
}
