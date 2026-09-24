// The Roots — My World › fiche pays (Royaume-Uni pour l'instant) :
// « Explorer ce pays » = 6 situations de voyage jouées comme un dialogue
// (on entend la personne en face, on choisit sa réponse, indices progressifs,
// une question imprévue glissée au hasard à chaque partie) ;
// « Je pars bientôt · Mode Survie » = 7 jours, 6 phrases indispensables par
// jour + un petit quiz. Les autres pays affichent « Bientôt » (voir my-world.js).

import { UK_SITUATIONS, UK_SURVIVAL, UK_PHOTOS } from "../data/explore-uk.js?v=20260924g";
import { recordSkill } from "../data/progress.js?v=20260924g";
import { CREATOR_MODE } from "../data/dev-config.js?v=20260924g";

const K_EXPLORE = "the_roots_explore_v1";
const K_SURVIVAL = "the_roots_survival_v1";
const DAY = 24 * 3600 * 1000;

function lsGet(k, d) { try { const v = JSON.parse(localStorage.getItem(k) || "null"); return v == null ? d : v; } catch (e) { return d; } }
function lsSet(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) { /* rien */ } }
function esc(s) { return String(s == null ? "" : s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c])); }
function shuffle(a) { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; }
function pxUrl(id, w = 800) { return `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}`; }
function photoHtml(p, h = 170) {
  if (!p) return "";
  return `<figure class="ct-fig" style="--h:${h}px"><img src="${pxUrl(p.id)}" alt="${esc(p.alt)}" loading="lazy" onerror="this.parentNode.classList.add('missing')"><span class="ct-fig-fallback">🖼️ Photo indisponible</span><figcaption>Photo : ${esc(p.by)} · Pexels</figcaption></figure>`;
}

// Voix anglaise britannique (même logique que le reste de l'appli : voix
// choisie dans Paramètres si elle est anglaise, sinon une voix en-GB).
function speak(text) {
  try {
    const synth = window.speechSynthesis; if (!synth) return;
    synth.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.lang = "en-GB"; u.rate = 0.92;
    const voices = synth.getVoices() || [];
    let uri = null; try { uri = JSON.parse(localStorage.getItem("the_roots_store_v1") || "{}").settings?.preferredVoiceURI || null; } catch (e) { /* rien */ }
    const chosen = (uri && voices.find((v) => v.voiceURI === uri && /^en/i.test(v.lang))) || voices.find((v) => v.lang === "en-GB") || voices.find((v) => /^en/i.test(v.lang));
    if (chosen) { u.voice = chosen; u.lang = chosen.lang; }
    synth.speak(u);
  } catch (e) { /* synthèse indisponible */ }
}
const Rec = window.SpeechRecognition || window.webkitSpeechRecognition;

injectCss();

export function renderCountry(container, { countryId = "gb", mode = "home", onBack } = {}) {
  if (countryId !== "gb") {
    container.innerHTML = `<button class="settings-back" id="ctBack">‹ Retour au globe</button><div class="card" style="margin-top:12px">Bientôt : l'exploration de ce pays arrive après le Royaume-Uni.</div>`;
    container.querySelector("#ctBack").addEventListener("click", () => onBack && onBack());
    return;
  }
  let view = mode; // home | explore | play | survie | day
  let play = null; // partie en cours
  let dayNo = null;
  paint();

  function top(label, back) {
    return `<button class="settings-back" id="ctBack">‹ ${label}</button>`;
  }
  function wireBack(fn) { container.querySelector("#ctBack").addEventListener("click", fn); }
  function paint() {
    container.scrollTop = 0;
    try { window.speechSynthesis && window.speechSynthesis.cancel(); } catch (e) { /* rien */ }
    if (view === "explore") return paintExplore();
    if (view === "play") return paintPlay();
    if (view === "survie") return paintSurvie();
    if (view === "day") return paintDay();
    return paintHome();
  }

  // ---------- Accueil du pays ----------
  function paintHome() {
    container.innerHTML = `
      ${top("Retour au globe")}
      <div class="card ct-hero">
        <div class="ct-hero-flag">🇬🇧</div>
        <div><div class="ct-k">Anglais britannique</div><div class="ct-title">Royaume-Uni · Londres</div>
        <div class="ct-sub">Entraîne-toi aux situations d'un vrai séjour, ou prépare un départ proche.</div></div>
      </div>
      <button class="card ct-big" data-go="explore">
        ${photoHtml(UK_PHOTOS.train, 130)}
        <div class="ct-big-t">🧭 Explorer ce pays</div>
        <div class="ct-big-s">6 situations : avion, hôtel, supermarché, vêtements, train, musée — avec des questions imprévues.</div>
      </button>
      <button class="card ct-big" data-go="survie">
        ${photoHtml(UK_PHOTOS.j2, 130)}
        <div class="ct-big-t">🧳 Je pars bientôt · Mode Survie</div>
        <div class="ct-big-s">7 jours, 6 phrases indispensables par jour, pour être prêt(e) le jour du départ.</div>
      </button>`;
    wireBack(() => onBack && onBack());
    container.querySelectorAll("[data-go]").forEach((b) => b.addEventListener("click", () => { view = b.dataset.go; paint(); }));
  }

  // ---------- Explorer : liste des situations ----------
  function paintExplore() {
    const rec = (lsGet(K_EXPLORE, {}).gb) || {};
    container.innerHTML = `
      ${top("Royaume-Uni")}
      <div class="ct-h">🧭 Explorer le Royaume-Uni</div>
      <p class="ct-lede">Tu entends la personne en face, tu choisis ta réponse. Besoin d'aide ? Les indices arrivent un par un. Attention : une question imprévue se glisse à chaque partie !</p>
      <div class="ct-grid">
        ${UK_SITUATIONS.map((s) => {
          const r = rec[s.id];
          return `<button class="card ct-sit" data-sit="${s.id}">
            ${photoHtml(UK_PHOTOS[s.id], 96)}
            <div class="ct-sit-t">${s.icon} ${s.title}</div>
            <div class="ct-sit-s">${r ? `Meilleur score : ${r.best}/${r.total}` : "Pas encore joué"}</div>
          </button>`;
        }).join("")}
      </div>`;
    wireBack(() => { view = "home"; paint(); });
    container.querySelectorAll("[data-sit]").forEach((b) => b.addEventListener("click", () => startPlay(b.dataset.sit)));
  }

  function startPlay(id) {
    const s = UK_SITUATIONS.find((x) => x.id === id);
    const steps = s.steps.map((x) => ({ ...x }));
    const surprise = s.surprises[Math.floor(Math.random() * s.surprises.length)];
    const pos = 1 + Math.floor(Math.random() * (steps.length - 1));
    steps.splice(pos, 0, { ...surprise, surprise: true });
    play = { s, steps, idx: 0, score: 0, hints: 0, showText: false, answered: null, tries: 0, log: [] };
    view = "play"; paint();
  }

  function paintPlay() {
    const P = play, st = P.steps[P.idx];
    if (!st) return paintPlayEnd();
    if (!st._opts) st._opts = shuffle([[st.ok, null]].concat(st.bad));
    const pct = Math.round((P.idx / P.steps.length) * 100);
    const starter = st.ok.split(" ").slice(0, 2).join(" ");
    container.innerHTML = `
      ${top("Situations")}
      <div class="ct-play-head"><span>${P.s.icon} ${P.s.title}</span><span>${P.idx + 1} / ${P.steps.length}</span></div>
      <div class="ct-bar"><div style="width:${pct}%"></div></div>
      ${P.idx === 0 ? `<div class="ct-scene">${photoHtml(UK_PHOTOS[P.s.id], 150)}<p class="ct-lede">${P.s.intro}</p></div>` : ""}
      <div class="card ct-bubble${st.surprise ? " surprise" : ""}">
        <div class="ct-who">${st.surprise ? "⚡ Question imprévue · " : ""}${P.s.who}</div>
        <button class="ct-listen" id="ctListen">🔊 Écouter</button>
        ${P.showText || P.answered ? `<div class="ct-say">« ${esc(st.say)} »</div>` : `<button class="ct-link" id="ctShowText">👁 Voir la phrase</button>`}
      </div>
      <div class="ct-hints">
        ${P.hints >= 1 ? `<div class="ct-hint">💡 On te dit : <i>${esc(st.fr)}</i></div>` : ""}
        ${P.hints >= 2 ? `<div class="ct-hint">💡 Ta réponse commence par : <b>${esc(starter)}…</b></div>` : ""}
        ${P.hints >= 3 ? `<div class="ct-hint">💡 La réponse : <b>${esc(st.ok)}</b></div>` : ""}
      </div>
      <div class="ct-opts">
        ${st._opts.map(([t, why], i) => {
          let cls = "";
          if (P.answered) { if (why === null) cls = " ok"; else if (P.answered.picked === i) cls = " ko"; }
          return `<button class="ct-opt${cls}" data-opt="${i}" ${P.answered ? "disabled" : ""}>${esc(t)}</button>`;
        }).join("")}
      </div>
      <div id="ctFeedback">${P.answered ? feedbackHtml(st) : ""}</div>
      <div class="ct-actions">
        ${P.answered ? `<button class="btn btn-primary" id="ctNext" style="width:100%">${P.idx === P.steps.length - 1 ? "Voir mon bilan" : "Suite"}</button>`
          : `<button class="btn btn-ghost" id="ctHint" ${P.hints >= 3 ? "disabled" : ""}>💡 Un indice (${3 - P.hints})</button>`}
      </div>`;
    wireBack(() => { view = "explore"; paint(); });
    container.querySelector("#ctListen").addEventListener("click", () => speak(st.say));
    const showT = container.querySelector("#ctShowText");
    if (showT) showT.addEventListener("click", () => { P.showText = true; paint(); });
    const hintB = container.querySelector("#ctHint");
    if (hintB) hintB.addEventListener("click", () => { P.hints = Math.min(3, P.hints + 1); paint(); });
    container.querySelectorAll("[data-opt]").forEach((b) => b.addEventListener("click", () => {
      const i = +b.dataset.opt, [t, why] = st._opts[i];
      P.tries++;
      if (why === null) {
        const first = P.tries === 1 && P.hints < 3;
        if (first) P.score++;
        recordSkill("en", "co", first ? 1 : 0);
        P.log.push({ say: st.say, ok: st.ok, first });
        P.answered = { picked: i, right: true };
        speak(t);
      } else {
        P.answered = { picked: i, right: false, why };
        P.log.push({ say: st.say, ok: st.ok, first: false });
        recordSkill("en", "co", 0);
      }
      paint();
    }));
    const next = container.querySelector("#ctNext");
    if (next) next.addEventListener("click", () => {
      P.idx++; P.hints = 0; P.showText = false; P.answered = null; P.tries = 0; paint();
      if (P.steps[P.idx]) setTimeout(() => speak(P.steps[P.idx].say), 250);
    });
    if (P.idx === 0 && !P.answered && !P._started) { P._started = true; setTimeout(() => speak(st.say), 350); }
  }
  function feedbackHtml(st) {
    const a = play.answered;
    if (a.right) return `<div class="ct-fb ok">✓ Bien répondu ! <button class="ct-link" data-say="${esc(st.ok)}">🔊 Réécouter</button></div>`;
    return `<div class="ct-fb ko">✗ ${esc(a.why)}<br>La bonne réponse : <b>${esc(st.ok)}</b> <button class="ct-link" data-say="${esc(st.ok)}">🔊</button></div>`;
  }
  function paintPlayEnd() {
    const P = play, total = P.steps.length;
    const all = lsGet(K_EXPLORE, {}); const gb = all.gb || {};
    const prev = gb[P.s.id] || { best: 0, total, plays: 0 };
    gb[P.s.id] = { best: Math.max(prev.best, P.score), total, plays: (prev.plays || 0) + 1, at: Date.now() };
    all.gb = gb; lsSet(K_EXPLORE, all);
    const pct = Math.round((P.score / total) * 100);
    container.innerHTML = `
      ${top("Situations")}
      <div class="card ct-end">
        <div class="ct-end-score">${P.score} / ${total}</div>
        <div class="ct-end-t">${pct >= 85 ? "Tu t'en sortirais très bien sur place ! 🇬🇧" : pct >= 60 ? "Bien joué, encore une partie pour être à l'aise." : "C'est en rejouant que ça rentre : les questions changent à chaque fois."}</div>
      </div>
      <div class="ct-h" style="font-size:15px">Les phrases à retenir</div>
      <div class="card">${P.log.map((l) => `
        <div class="ct-rev"><span>${l.first ? "✓" : "↺"}</span><div><div class="ct-rev-q">${esc(l.say)}</div>
        <button class="ct-link" data-say="${esc(l.ok)}">🔊 ${esc(l.ok)}</button></div></div>`).join("")}</div>
      <button class="btn btn-primary" id="ctAgain" style="width:100%;margin-top:12px">🔁 Rejouer (autre imprévu)</button>
      <button class="btn btn-ghost" id="ctList" style="width:100%;margin-top:8px">Choisir une autre situation</button>`;
    wireBack(() => { view = "explore"; paint(); });
    container.querySelector("#ctAgain").addEventListener("click", () => startPlay(P.s.id));
    container.querySelector("#ctList").addEventListener("click", () => { view = "explore"; paint(); });
  }

  // ---------- Mode Survie ----------
  function survState() { const a = lsGet(K_SURVIVAL, {}); return a.gb || { done: [], departure: null }; }
  function saveSurv(s) { const a = lsGet(K_SURVIVAL, {}); a.gb = s; lsSet(K_SURVIVAL, a); }
  function paintSurvie() {
    const S = survState();
    const daysLeft = S.departure ? Math.ceil((new Date(S.departure + "T12:00:00") - Date.now()) / DAY) : null;
    const next = UK_SURVIVAL.find((d) => S.done.indexOf(d.day) < 0);
    container.innerHTML = `
      ${top("Royaume-Uni")}
      <div class="ct-h">🧳 Je pars bientôt · Mode Survie</div>
      <p class="ct-lede">Un jour = 6 phrases indispensables (écoute, répète) puis un petit quiz. 7 jours et tu as l'essentiel pour ton séjour.</p>
      <div class="card ct-dep">
        <label for="ctDep">📅 Mon départ :</label>
        <input type="date" id="ctDep" value="${S.departure || ""}">
        <div class="ct-sub">${daysLeft == null ? "Indique ta date pour avoir un compte à rebours." : daysLeft > 0 ? `Départ dans <b>${daysLeft} jour${daysLeft > 1 ? "s" : ""}</b>${daysLeft < 7 - S.done.length ? " : fais 2 jours de programme par jour pour tout voir !" : "."}` : daysLeft === 0 ? "C'est le grand jour, bon voyage ! 🇬🇧" : "Ton séjour a commencé : garde ces phrases sous la main."}</div>
      </div>
      <div class="ct-days">
        ${UK_SURVIVAL.map((d) => {
          const done = S.done.indexOf(d.day) >= 0;
          const open = CREATOR_MODE || done || d.day === 1 || S.done.indexOf(d.day - 1) >= 0;
          return `<button class="card ct-day${done ? " done" : ""}${next && next.day === d.day ? " next" : ""}" data-day="${d.day}" ${open ? "" : "disabled"}>
            <span class="ct-day-n">${done ? "✓" : open ? "J" + d.day : "🔒"}</span>
            <span><span class="ct-day-t">Jour ${d.day} · ${d.title}</span><span class="ct-day-s">${done ? "Fait" : open ? "6 phrases + quiz" : "Termine le jour précédent"}</span></span>
          </button>`;
        }).join("")}
      </div>
      ${S.done.length === 7 ? `<div class="card ct-fb ok" style="margin-top:10px">🎉 Programme terminé : tu es prêt(e) pour le Royaume-Uni ! Tu peux refaire n'importe quel jour.</div>` : ""}`;
    wireBack(() => { view = "home"; paint(); });
    container.querySelector("#ctDep").addEventListener("change", (e) => { const s = survState(); s.departure = e.target.value || null; saveSurv(s); paint(); });
    container.querySelectorAll("[data-day]").forEach((b) => b.addEventListener("click", () => { dayNo = +b.dataset.day; dayState = null; view = "day"; paint(); }));
  }

  let dayState = null;
  function paintDay() {
    const d = UK_SURVIVAL.find((x) => x.day === dayNo);
    if (!dayState) {
      // Quiz : 2 questions « comment dit-on ? » + 2 questions à l'oreille.
      const pick = shuffle(d.phrases).slice(0, 4);
      dayState = { phase: "learn", said: {}, quiz: pick.map((p, i) => {
        const others = shuffle(d.phrases.filter((x) => x !== p)).slice(0, 2);
        return i < 2
          ? { type: "say", q: `Comment dire : « ${p[1]} » ?`, opts: shuffle([p[0], ...others.map((o) => o[0])]), ok: p[0] }
          : { type: "ear", q: "Écoute, puis choisis le sens.", audio: p[0], opts: shuffle([p[1], ...others.map((o) => o[1])]), ok: p[1] };
      }), qi: 0, score: 0, picked: null };
    }
    const D = dayState;
    if (D.phase === "learn") {
      container.innerHTML = `
        ${top("Mode Survie")}
        <div class="ct-h">Jour ${d.day} · ${d.title}</div>
        ${photoHtml(UK_PHOTOS[d.photo], 150)}
        <div class="card ct-tip">🇬🇧 ${esc(d.tip)}</div>
        <div class="ct-phrases">
          ${d.phrases.map((p, i) => `
            <div class="card ct-ph">
              <div class="ct-ph-en">${esc(p[0])}</div>
              <div class="ct-ph-fr">${esc(p[1])}</div>
              <div class="ct-ph-say">≈ ${esc(p[2])}</div>
              <div class="ct-ph-act">
                <button class="btn btn-ghost" data-say="${esc(p[0])}">🔊 Écouter</button>
                ${Rec ? `<button class="btn btn-ghost" data-rep="${i}">🎤 Je répète</button>` : ""}
                <span class="ct-ph-res" id="rep${i}">${D.said[i] ? D.said[i] : ""}</span>
              </div>
            </div>`).join("")}
        </div>
        <button class="btn btn-primary" id="ctQuiz" style="width:100%;margin-top:12px">Passer au quiz (4 questions)</button>`;
      wireBack(() => { view = "survie"; paint(); });
      container.querySelector("#ctQuiz").addEventListener("click", () => { D.phase = "quiz"; paint(); });
      container.querySelectorAll("[data-rep]").forEach((b) => b.addEventListener("click", () => repeat(d.phrases[+b.dataset.rep][0], +b.dataset.rep, b)));
      return;
    }
    if (D.qi >= D.quiz.length) {
      const passed = D.score >= 3;
      if (passed && !D.saved) { D.saved = true; const s = survState(); if (s.done.indexOf(d.day) < 0) s.done.push(d.day); saveSurv(s); }
      container.innerHTML = `
        ${top("Mode Survie")}
        <div class="card ct-end"><div class="ct-end-score">${D.score} / 4</div>
        <div class="ct-end-t">${passed ? `Jour ${d.day} validé ! ${d.day < 7 ? "Le jour suivant est ouvert." : "Tu as fini tout le programme 🎉"}` : "Il faut 3 bonnes réponses sur 4 : relis les 6 phrases et réessaie."}</div></div>
        <button class="btn btn-primary" id="ctDone" style="width:100%;margin-top:12px">${passed ? "Retour aux 7 jours" : "Revoir les phrases"}</button>`;
      wireBack(() => { view = "survie"; paint(); });
      container.querySelector("#ctDone").addEventListener("click", () => { if (passed) { view = "survie"; } else { dayState = null; } paint(); });
      return;
    }
    const Q = D.quiz[D.qi];
    container.innerHTML = `
      ${top("Mode Survie")}
      <div class="ct-play-head"><span>Jour ${d.day} · quiz</span><span>${D.qi + 1} / 4</span></div>
      <div class="card ct-bubble"><div class="ct-say" style="font-style:normal">${esc(Q.q)}</div>
        ${Q.type === "ear" ? `<button class="ct-listen" data-say="${esc(Q.audio)}">🔊 Écouter</button>` : ""}</div>
      <div class="ct-opts">${Q.opts.map((o, i) => {
        let cls = ""; if (D.picked != null) { if (o === Q.ok) cls = " ok"; else if (D.picked === i) cls = " ko"; }
        return `<button class="ct-opt${cls}" data-q="${i}" ${D.picked != null ? "disabled" : ""}>${esc(o)}</button>`;
      }).join("")}</div>
      ${D.picked != null ? `<button class="btn btn-primary" id="ctQNext" style="width:100%;margin-top:12px">Suite</button>` : ""}`;
    wireBack(() => { D.phase = "learn"; D.qi = 0; D.score = 0; D.picked = null; paint(); });
    if (Q.type === "ear" && D.picked == null && !Q._played) { Q._played = true; setTimeout(() => speak(Q.audio), 300); }
    container.querySelectorAll("[data-q]").forEach((b) => b.addEventListener("click", () => {
      D.picked = +b.dataset.q; const good = Q.opts[D.picked] === Q.ok;
      if (good) D.score++;
      recordSkill("en", Q.type === "ear" ? "co" : "vo", good ? 1 : 0);
      paint();
    }));
    const qn = container.querySelector("#ctQNext");
    if (qn) qn.addEventListener("click", () => { D.qi++; D.picked = null; paint(); });
  }

  // « Je répète » : ce que le micro a compris, comparé à la phrase.
  function repeat(target, i, btn) {
    try {
      window.speechSynthesis && window.speechSynthesis.cancel();
      const r = new Rec(); r.lang = "en-GB"; r.interimResults = false; r.maxAlternatives = 1;
      btn.textContent = "🎙️ Je t'écoute…";
      r.onresult = (e) => {
        const said = e.results[0][0].transcript.toLowerCase();
        const words = target.toLowerCase().replace(/[^a-z' ]/g, " ").split(/\s+/).filter(Boolean);
        const hit = words.filter((w) => said.indexOf(w) >= 0).length / (words.length || 1);
        recordSkill("en", "pr", hit);
        const msg = hit >= 0.8 ? "✓ Très bien !" : hit >= 0.5 ? "≈ Presque : réécoute et recommence." : "↺ Réessaie en articulant.";
        if (dayState) dayState.said[i] = msg;
        const el = container.querySelector("#rep" + i); if (el) el.textContent = msg + ` (compris : « ${said} »)`;
      };
      r.onend = () => { btn.textContent = "🎤 Je répète"; };
      r.onerror = () => { btn.textContent = "🎤 Je répète"; };
      r.start();
    } catch (e) { btn.textContent = "🎤 Je répète"; }
  }

  // 🔊 des boutons data-say (réécouter, phrases à retenir…)
  container.onclick = (e) => {
    const b = e.target.closest && e.target.closest("[data-say]");
    if (b) speak(b.getAttribute("data-say"));
  };
}

function injectCss() {
  if (document.getElementById("ct-css")) return;
  const st = document.createElement("style");
  st.id = "ct-css";
  st.textContent = `
  .ct-fig{ position:relative; margin:0; border-radius:14px; overflow:hidden; background:var(--surface-soft); }
  .ct-fig img{ display:block; width:100%; height:var(--h,170px); object-fit:cover; }
  .ct-fig figcaption{ position:absolute; right:6px; bottom:6px; font-size:10px; color:#fff; background:rgba(0,0,0,.45); padding:2px 6px; border-radius:6px; }
  .ct-fig-fallback{ display:none; padding:34px 10px; text-align:center; font-size:12px; color:var(--ink-soft); }
  .ct-fig.missing img{ display:none; } .ct-fig.missing .ct-fig-fallback{ display:block; }
  .ct-hero{ display:flex; gap:12px; align-items:center; margin-top:10px; }
  .ct-hero-flag{ font-size:40px; }
  .ct-k{ font-size:11px; font-weight:800; text-transform:uppercase; letter-spacing:.05em; color:var(--accent); }
  .ct-title{ font-weight:800; font-size:18px; }
  .ct-sub{ font-size:12.5px; color:var(--ink-soft); line-height:1.4; margin-top:3px; }
  .ct-big{ display:block; width:100%; text-align:left; border:none; cursor:pointer; font-family:var(--font-main); color:var(--ink); margin-top:12px; padding:10px 10px 12px; }
  .ct-big-t{ font-weight:800; font-size:16px; margin:10px 4px 2px; }
  .ct-big-s{ font-size:12.5px; color:var(--ink-soft); margin:0 4px; line-height:1.4; }
  .ct-h{ font-weight:800; font-size:18px; margin:12px 2px 4px; text-shadow:0 1px 4px rgba(255,255,255,.5); }
  .ct-lede{ font-size:13px; color:var(--ink); line-height:1.45; margin:4px 2px 10px; }
  .ct-grid{ display:grid; grid-template-columns:repeat(2,minmax(0,1fr)); gap:10px; }
  .ct-sit{ display:flex; flex-direction:column; gap:4px; text-align:left; border:none; cursor:pointer; font-family:var(--font-main); color:var(--ink); padding:8px; }
  .ct-sit-t{ font-weight:800; font-size:13px; line-height:1.25; margin-top:4px; }
  .ct-sit-s{ font-size:11px; color:var(--ink-soft); }
  .ct-play-head{ display:flex; justify-content:space-between; font-size:12.5px; font-weight:800; margin:12px 2px 6px; }
  .ct-bar{ height:6px; border-radius:4px; background:var(--surface-soft); overflow:hidden; }
  .ct-bar div{ height:100%; background:var(--accent); }
  .ct-scene{ margin-top:10px; }
  .ct-bubble{ margin-top:12px; display:flex; flex-direction:column; gap:8px; }
  .ct-bubble.surprise{ border:2px solid var(--accent); }
  .ct-who{ font-size:11px; font-weight:800; text-transform:uppercase; letter-spacing:.05em; color:var(--ink-soft); }
  .ct-listen{ align-self:flex-start; font-family:var(--font-main); font-weight:800; font-size:15px; border:none; border-radius:999px; padding:9px 16px; background:var(--brand-teal); color:#fff; cursor:pointer; }
  .ct-say{ font-size:16px; font-weight:700; font-style:italic; line-height:1.4; }
  .ct-link{ background:none; border:none; padding:0; font-family:var(--font-main); font-weight:700; color:var(--accent); cursor:pointer; font-size:13px; text-align:left; }
  .ct-hints{ display:flex; flex-direction:column; gap:6px; margin-top:8px; }
  .ct-hint{ font-size:13px; background:var(--surface); border-left:3px solid var(--accent); border-radius:10px; padding:8px 12px; box-shadow:var(--shadow-card); }
  .ct-opts{ display:flex; flex-direction:column; gap:8px; margin-top:10px; }
  .ct-opt{ text-align:left; font-family:var(--font-main); font-size:14.5px; font-weight:700; padding:13px 14px; border-radius:14px; border:1px solid var(--border); background:var(--surface); color:var(--ink); cursor:pointer; }
  .ct-opt.ok{ border-color:var(--success); background:rgba(47,163,94,.12); }
  .ct-opt.ko{ border-color:var(--pop); background:var(--pop-soft); }
  .ct-fb{ margin-top:10px; font-size:13.5px; line-height:1.45; border-radius:12px; padding:10px 12px; }
  .ct-fb.ok{ background:rgba(47,163,94,.12); } .ct-fb.ko{ background:var(--pop-soft); }
  .ct-actions{ margin-top:12px; }
  .ct-end{ text-align:center; margin-top:12px; }
  .ct-end-score{ font-size:34px; font-weight:800; color:var(--brand-teal); }
  .ct-end-t{ font-size:14px; margin-top:4px; }
  .ct-rev{ display:flex; gap:10px; padding:8px 0; border-top:1px solid var(--border); font-size:13px; }
  .ct-rev:first-child{ border-top:none; }
  .ct-rev-q{ color:var(--ink-soft); font-style:italic; margin-bottom:2px; }
  .ct-dep{ display:flex; flex-wrap:wrap; align-items:center; gap:8px; font-size:13.5px; font-weight:700; }
  .ct-dep input{ font-family:var(--font-main); font-size:14px; padding:6px 8px; border-radius:10px; border:1px solid var(--border); background:var(--surface-soft); color:var(--ink); }
  .ct-dep .ct-sub{ width:100%; font-weight:500; }
  .ct-days{ display:flex; flex-direction:column; gap:8px; margin-top:10px; }
  .ct-day{ display:flex; align-items:center; gap:12px; text-align:left; border:none; cursor:pointer; font-family:var(--font-main); color:var(--ink); padding:10px 12px; }
  .ct-day:disabled{ opacity:.55; cursor:default; }
  .ct-day.next{ border:2px solid var(--accent); }
  .ct-day-n{ width:36px; height:36px; border-radius:50%; display:flex; align-items:center; justify-content:center; font-weight:800; font-size:13px; background:var(--surface-soft); flex-shrink:0; }
  .ct-day.done .ct-day-n{ background:var(--success); color:#fff; }
  .ct-day-t{ display:block; font-weight:800; font-size:14px; } .ct-day-s{ display:block; font-size:11.5px; color:var(--ink-soft); }
  .ct-tip{ margin-top:10px; font-size:13px; line-height:1.45; }
  .ct-phrases{ display:flex; flex-direction:column; gap:8px; margin-top:10px; }
  .ct-ph-en{ font-weight:800; font-size:15px; } .ct-ph-fr{ font-size:13px; color:var(--ink-soft); margin-top:2px; }
  .ct-ph-say{ font-size:12px; color:var(--accent); margin-top:3px; font-style:italic; }
  .ct-ph-act{ display:flex; flex-wrap:wrap; align-items:center; gap:8px; margin-top:8px; }
  .ct-ph-act .btn{ padding:7px 12px; font-size:12.5px; }
  .ct-ph-res{ font-size:12px; color:var(--ink-soft); }
  `;
  document.head.appendChild(st);
}
