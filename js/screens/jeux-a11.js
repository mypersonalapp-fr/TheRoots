// The Roots — matière « Jeux » : 8 jeux qui piochent dans le vocabulaire de la leçon, difficulté selon le niveau (A1/A2…).
// createGames({ el, frame, esc, speak, toast, setScreen, back, words, scenes, level, prog, save })
// words = [{en, fr, sc}]  (sc = nom de l'image de scène de la page, facultatif) ; level 0 = A1, 1 = A2, 2 = B1+.
const shuffle = (a) => { const r = a.slice(); for (let i = r.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [r[i], r[j]] = [r[j], r[i]]; } return r; };
const pick = (a, n) => shuffle(a).slice(0, n);
const norm = (s) => String(s || "").toLowerCase().replace(/[’']/g, "'").trim();
const onlyLetters = (s) => /^[a-z]+$/i.test(s);

export function createGames(ctx) {
  const { el, frame, esc, speak, toast, setScreen, back, level, prog, save } = ctx;
  const HEAD = ctx.head;
  const LV = Math.min(2, Math.max(0, level || 0));
  // Mots utilisables (dédoublonnés) : paires anglais / français.
  const seen = new Set();
  const W = (ctx.words || []).filter((w) => w.en && w.fr && !seen.has(norm(w.en)) && seen.add(norm(w.en)));
  const singles = W.filter((w) => onlyLetters(w.en));
  const G = (prog.games = prog.games || {});
  const mark = (id, score) => { const o = G[id] || {}; G[id] = { done: true, best: Math.max(o.best || 0, score || 0) }; try { save(); } catch (e) { /* ignore */ } };
  let timer = null;
  const stop = () => { if (timer) { clearInterval(timer); clearTimeout(timer); timer = null; } };

  const LIST = [
    { id: "hunt", t: "Mots Mêlés", s: "Trouve Les Mots", em: "🔎", c: "#8B5CF6", need: () => singles.filter((w) => w.en.length <= 8).length >= 4, run: hunt },
    { id: "bee", t: "Spelling Bee", s: "Forme Des Mots", em: "🐝", c: "#F59E0B", need: () => beeSet() !== null, run: bee },
    { id: "memory", t: "Memory", s: "Anglais ↔ Français", em: "🃏", c: "#EF476F", need: () => W.length >= 6, run: memory },
    { id: "speed", t: "Speed Match", s: "Vrai Ou Faux", em: "⚡", c: "#2F80ED", need: () => W.length >= 6, run: speed },
    { id: "bubbles", t: "Bulles", s: "Éclate La Bonne", em: "🫧", c: "#0891B2", need: () => W.length >= 6, run: bubbles },
    { id: "race", t: "Course De Mots", s: "Avance Plus Vite", em: "🏁", c: "#22A06B", need: () => W.length >= 6, run: race },
    { id: "hang", t: "Pendu", s: "Devine Lettre Par Lettre", em: "🎯", c: "#D946EF", need: () => singles.filter((w) => w.en.length >= 4).length >= 3, run: hang },
    { id: "ear", t: "Écoute Et Touche", s: "Touche La Bonne Image", em: "👂", c: "#B7791F", need: () => W.length >= 4, run: ear },
  ];

  const shell = (title, c, body, onBack) => {
    stop();
    setScreen("games");
    frame(HEAD, null, `<div class="jx-title" style="--c:${c}"><b>${esc(title)}</b></div>${body}`);
    el.querySelector("#lcBack").onclick = onBack || hub;
  };
  const end = (id, c, title, score, msg, again) => {
    mark(id, score);
    shell(title, c, `<section class="lc-card jx-end"><div class="jx-big">🎉</div><h2>${esc(msg)}</h2><p class="jx-score">Score : <b>${score}</b> · Record : <b>${(G[id] || {}).best || score}</b></p>
      <button type="button" class="lc-cta" id="jxAgain">Rejouer</button><button type="button" class="lc-sec-btn" id="jxHub" style="width:100%;margin-top:10px">Tous Les Jeux</button></section>`);
    el.querySelector("#jxAgain").onclick = again; el.querySelector("#jxHub").onclick = hub;
  };

  function hub() {
    stop();
    setScreen("games");
    const tiles = LIST.map((g, i) => { const off = !g.need(); const d = G[g.id]; return `<button type="button" class="lc-tile ${off ? "lc-tile-off" : ""}" data-g="${g.id}" style="--c:${g.c}">
      <span class="lc-tn">${i + 1}</span><span class="lc-tic"><span class="lc-ph-ic">${g.em}</span></span><b>${esc(g.t)}</b><small>${esc(off ? "Pas Assez De Mots" : g.s)}</small>${d && d.done ? `<span class="lc-tdone">✓</span>` : ""}</button>`; }).join("");
    frame(HEAD, null, `<section class="lc-mosaic lc-fit jx-hub" style="--rows:4">${tiles}</section>`);
    el.querySelector("#lcBack").onclick = back;
    el.querySelectorAll("[data-g]").forEach((b) => b.addEventListener("click", () => { const g = LIST.find((x) => x.id === b.dataset.g); if (!g.need()) return toast("Pas assez de mots pour ce jeu dans cette leçon"); g.run(); }));
  }

  /* ---------- 1. Mots mêlés ---------- */
  function hunt() {
    const N = [6, 8, 10][LV], MAXW = [5, 7, 8][LV];
    const pool = pick(singles.filter((w) => w.en.length <= N), MAXW);
    const dirs = [[0, 1], [1, 0]]; if (LV >= 1) dirs.push([1, 1]); if (LV >= 2) dirs.push([0, -1], [-1, 0], [-1, -1]);
    const grid = Array.from({ length: N }, () => Array(N).fill("")); const placed = [];
    pool.forEach((w) => {
      const word = w.en.toUpperCase();
      for (let t = 0; t < 80; t++) {
        const d = dirs[Math.floor(Math.random() * dirs.length)], r = Math.floor(Math.random() * N), c = Math.floor(Math.random() * N);
        const er = r + d[0] * (word.length - 1), ec = c + d[1] * (word.length - 1);
        if (er < 0 || er >= N || ec < 0 || ec >= N) continue;
        let ok = true; for (let k = 0; k < word.length; k++) { const v = grid[r + d[0] * k][c + d[1] * k]; if (v && v !== word[k]) { ok = false; break; } }
        if (!ok) continue;
        for (let k = 0; k < word.length; k++) grid[r + d[0] * k][c + d[1] * k] = word[k];
        placed.push({ w, word, cells: Array.from({ length: word.length }, (_, k) => [r + d[0] * k, c + d[1] * k]), found: false }); break;
      }
    });
    const AB = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; for (let r = 0; r < N; r++) for (let c = 0; c < N; c++) if (!grid[r][c]) grid[r][c] = AB[Math.floor(Math.random() * 26)];
    let start = null; const got = new Set();
    function draw() {
      const cells = grid.map((row, r) => row.map((ch, c) => `<button type="button" class="jx-cell ${got.has(r + "," + c) ? "on" : ""} ${start && start[0] === r && start[1] === c ? "sel" : ""}" data-r="${r}" data-c="${c}">${ch}</button>`).join("")).join("");
      shell("Mots Mêlés", "#8B5CF6", `<section class="lc-card"><div class="jx-grid" style="grid-template-columns:repeat(${N},1fr)">${cells}</div></section>
        <section class="lc-card"><div class="jx-h">Mots À Trouver · ${placed.filter((p) => p.found).length}/${placed.length}</div><div class="jx-chips">${placed.map((p) => `<span class="jx-chip ${p.found ? "ok" : ""}">${esc(p.word)}<small> ${esc(p.w.fr)}</small></span>`).join("")}</div><p class="jx-tip">Cherche ces mots anglais dans la grille. Touche la première lettre, puis la dernière.</p></section>`);
      el.querySelectorAll(".jx-cell").forEach((b) => b.addEventListener("click", () => {
        const r = +b.dataset.r, c = +b.dataset.c;
        if (!start) { start = [r, c]; draw(); return; }
        const s = start; start = null;
        const hit = placed.find((p) => !p.found && ((p.cells[0][0] === s[0] && p.cells[0][1] === s[1] && p.cells[p.cells.length - 1][0] === r && p.cells[p.cells.length - 1][1] === c) || (p.cells[p.cells.length - 1][0] === s[0] && p.cells[p.cells.length - 1][1] === s[1] && p.cells[0][0] === r && p.cells[0][1] === c)));
        if (hit) { hit.found = true; hit.cells.forEach(([a, b2]) => got.add(a + "," + b2)); speak(hit.w.en); if (placed.every((p) => p.found)) { draw(); setTimeout(() => end("hunt", "#8B5CF6", "Mots Mêlés", placed.length * 10, "Tous les mots sont trouvés !", hunt), 700); return; } }
        draw();
      }));
    }
    draw();
  }

  /* ---------- 2. Spelling Bee ---------- */
  function beeSet() {
    const cand = singles.filter((w) => w.en.length >= 5 && w.en.length <= 9);
    let best = null;
    cand.forEach((b) => {
      const L = b.en.toLowerCase().split(""), has = (w) => { const pool = L.slice(); for (const ch of w) { const i = pool.indexOf(ch); if (i < 0) return false; pool.splice(i, 1); } return true; };
      const found = singles.filter((w) => w.en.length >= 3 && has(w.en.toLowerCase()));
      if (found.length >= 3 && (!best || found.length > best.found.length)) best = { base: b, found, letters: L };
    });
    return best;
  }
  function bee() {
    const S = beeSet(); const letters = shuffle(S.letters); const got = []; let cur = "";
    const norm2 = (s) => s.toLowerCase();
    function draw(msg) {
      shell("Spelling Bee", "#F59E0B", `<section class="lc-card"><div class="jx-h">Forme Des Mots Avec Ces Lettres · ${got.length}/${S.found.length}</div>
        <div class="jx-letters">${letters.map((l, i) => `<button type="button" class="jx-key" data-i="${i}">${l.toUpperCase()}</button>`).join("")}</div>
        <div class="jx-word">${esc(cur.toUpperCase()) || "&nbsp;"}</div>${msg ? `<p class="jx-msg">${esc(msg)}</p>` : ""}
        <div class="jx-row"><button type="button" class="lc-sec-btn" id="jxDel">⌫ Effacer</button><button type="button" class="lc-cta" id="jxOk">Valider</button></div></section>
        <section class="lc-card"><div class="jx-h">Mots Trouvés</div><div class="jx-chips">${got.length ? got.map((w) => `<span class="jx-chip ok">${esc(w.en)} = ${esc(w.fr)}</span>`).join("") : `<span class="jx-tip">Aucun pour l’instant. Indice : un mot de la leçon.</span>`}</div></section>`);
      const used = []; el.querySelectorAll(".jx-key").forEach((b) => b.addEventListener("click", () => { cur += letters[+b.dataset.i]; b.disabled = true; used.push(b); el.querySelector(".jx-word").textContent = cur.toUpperCase(); }));
      el.querySelector("#jxDel").onclick = () => { cur = ""; draw(); };
      el.querySelector("#jxOk").onclick = () => {
        const w = S.found.find((x) => norm2(x.en) === norm2(cur));
        if (!w) { cur = ""; return draw("Ce mot n’est pas dans la leçon, essaie encore."); }
        if (got.includes(w)) { cur = ""; return draw("Déjà trouvé !"); }
        got.push(w); speak(w.en); cur = "";
        if (got.length === S.found.length) return end("bee", "#F59E0B", "Spelling Bee", got.length * 10, "Tu as trouvé tous les mots !", bee);
        draw("Bravo !");
      };
    }
    draw();
  }

  /* ---------- 3. Memory ---------- */
  function memory() {
    const n = [6, 8, 8][LV]; const pairs = pick(W, n); let cards = shuffle(pairs.flatMap((p, i) => [{ k: i, t: p.en, en: 1 }, { k: i, t: p.fr }]));
    let open = [], found = 0, moves = 0, lock = false;
    const cols = n === 6 ? 3 : 4;
    function draw() {
      shell("Memory", "#EF476F", `<section class="lc-card"><div class="jx-grid jx-mem" style="grid-template-columns:repeat(${cols},1fr)">${cards.map((c, i) => `<button type="button" class="jx-card ${c.up || c.ok ? "up" : ""} ${c.ok ? "ok" : ""}" data-i="${i}"><span>${c.up || c.ok ? esc(c.t) : "?"}</span></button>`).join("")}</div></section>
        <section class="lc-card jx-stat">Coups : <b>${moves}</b> · Paires : <b>${found}/${n}</b></section>`);
      el.querySelectorAll(".jx-card").forEach((b) => b.addEventListener("click", () => {
        const c = cards[+b.dataset.i]; if (lock || c.up || c.ok) return;
        c.up = true; if (c.en) speak(c.t); open.push(c); draw();
        if (open.length === 2) {
          moves++; lock = true;
          setTimeout(() => {
            if (open[0].k === open[1].k) { open.forEach((x) => { x.ok = true; x.up = false; }); found++; } else open.forEach((x) => { x.up = false; });
            open = []; lock = false;
            if (found === n) return end("memory", "#EF476F", "Memory", Math.max(10, n * 20 - moves * 5), `Terminé en ${moves} coups !`, memory);
            draw();
          }, 800);
        }
      }));
    }
    draw();
  }

  /* ---------- 4. Speed Match ---------- */
  function speed() {
    let left = [60, 45, 30][LV], score = 0, combo = 0, cur = null, over = false;
    const next = () => { const w = W[Math.floor(Math.random() * W.length)]; const truth = Math.random() < 0.5; const other = W.filter((x) => x !== w); cur = { w, truth, shown: truth ? w.fr : other[Math.floor(Math.random() * other.length)].fr }; };
    const best = () => (G.speed && G.speed.best) || 0;
    function draw() {
      shell("Speed Match", "#2F80ED", `<div class="jx-stats"><div class="lc-card"><small>Temps</small><b id="jxT">${left}</b></div><div class="lc-card"><small>Score</small><b id="jxS">${score}</b></div><div class="lc-card"><small>Record</small><b>${best()}</b></div></div>
        <section class="lc-card jx-q"><div class="jx-bigw">${esc(cur.w.en)}</div><div class="jx-eq">= ${esc(cur.shown)} ?</div>${combo >= 3 ? `<div class="jx-combo">🔥 Combo ×${combo}</div>` : ""}</section>
        <div class="jx-row"><button type="button" class="jx-no" id="jxNo">✗ Faux</button><button type="button" class="jx-yes" id="jxYes">✓ Vrai</button></div>`);
      const ans = (v) => { if (over) return; if (v === cur.truth) { combo++; score += 10 + Math.min(combo, 10); } else { combo = 0; score = Math.max(0, score - 5); } next(); draw(); };
      el.querySelector("#jxNo").onclick = () => ans(false); el.querySelector("#jxYes").onclick = () => ans(true);
      if (!timer) timer = setInterval(() => { left--; const t = el.querySelector("#jxT"); if (t) t.textContent = left; if (left <= 0) { over = true; stop(); end("speed", "#2F80ED", "Speed Match", score, "Temps écoulé !", speed); } }, 1000);
    }
    next(); draw();
  }

  /* ---------- 5. Bulles ---------- */
  function bubbles() {
    const NB = [3, 5, 6][LV], ROUNDS = 10; let r = 0, lives = 3, score = 0;
    function round() {
      if (r >= ROUNDS || lives <= 0) return end("bubbles", "#0891B2", "Bulles", score, lives <= 0 ? "Plus de vies, bravo quand même !" : "Toutes les bulles sont passées !", bubbles);
      const w = W[Math.floor(Math.random() * W.length)], opts = shuffle([w].concat(pick(W.filter((x) => x !== w), NB - 1)));
      shell("Bulles", "#0891B2", `<section class="lc-card jx-q"><small>Éclate La Traduction De</small><div class="jx-bigw">${esc(w.en)}</div><div>${"❤️".repeat(lives)}${"🤍".repeat(3 - lives)} · Score ${score}</div></section>
        <section class="jx-sea">${opts.map((o, i) => `<button type="button" class="jx-bubble" data-i="${i}" style="left:${6 + (i * 88) / NB}%;animation-delay:${(i * 0.5) % 2}s;animation-duration:${3.2 + (i % 3) * 0.7}s">${esc(o.fr)}</button>`).join("")}</section>`);
      speak(w.en);
      el.querySelectorAll(".jx-bubble").forEach((b) => b.addEventListener("click", () => { if (opts[+b.dataset.i] === w) { score += 10; } else lives--; r++; round(); }));
    }
    round();
  }

  /* ---------- 6. Course de mots ---------- */
  function race() {
    const GOAL = 10; let me = 0, bot = 0, rev = LV >= 1; const speedMs = [4500, 3500, 2600][LV];
    function q() {
      if (me >= GOAL || bot >= GOAL) return end("race", "#22A06B", "Course De Mots", me * 10, me >= GOAL ? "Tu as gagné la course !" : "L’adversaire a gagné. Retente !", race);
      const w = W[Math.floor(Math.random() * W.length)], opts = shuffle([w].concat(pick(W.filter((x) => x !== w), 3))), flip = rev && Math.random() < 0.5;
      shell("Course De Mots", "#22A06B", `<section class="lc-card"><div class="jx-track"><span style="left:${(me / GOAL) * 88}%">🧑</span><span style="left:${(bot / GOAL) * 88}%;top:30px">🤖</span><em>🏁</em></div></section>
        <section class="lc-card jx-q"><div class="jx-bigw">${esc(flip ? w.fr : w.en)}</div></section>
        <section class="jx-opts">${opts.map((o, i) => `<button type="button" class="jx-opt" data-i="${i}">${esc(flip ? o.en : o.fr)}</button>`).join("")}</section>`);
      if (!flip) speak(w.en);
      timer = setTimeout(() => { timer = null; bot++; q(); }, speedMs);
      el.querySelectorAll(".jx-opt").forEach((b) => b.addEventListener("click", () => { stop(); if (opts[+b.dataset.i] === w) me++; else bot++; q(); }));
    }
    q();
  }

  /* ---------- 7. Pendu ---------- */
  function hang() {
    const [mn, mx] = [[4, 5], [5, 8], [6, 12]][LV]; let cand = singles.filter((w) => w.en.length >= mn && w.en.length <= mx); if (!cand.length) cand = singles.filter((w) => w.en.length >= 4);
    const w = cand[Math.floor(Math.random() * cand.length)], word = w.en.toUpperCase(); const tried = new Set(); let lives = 6;
    const faces = ["😀", "🙂", "😐", "😟", "😨", "😱", "💀"];
    function draw() {
      const shown = word.split("").map((ch) => (tried.has(ch) ? ch : "_")).join(" ");
      const won = word.split("").every((ch) => tried.has(ch));
      shell("Pendu", "#D946EF", `<section class="lc-card jx-face"><div class="jx-bigface">${faces[6 - lives]}</div><div>${"❤️".repeat(lives)}${"🤍".repeat(6 - lives)}</div><small>${LV === 0 ? "Indice : " + esc(w.fr) : "Indice : un mot de la leçon"}</small></section>
        <section class="lc-card jx-hword">${shown}</section>
        <section class="jx-kb">${"ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").map((l) => `<button type="button" class="jx-key ${tried.has(l) ? (word.includes(l) ? "good" : "bad") : ""}" data-l="${l}" ${tried.has(l) ? "disabled" : ""}>${l}</button>`).join("")}</section>`);
      el.querySelectorAll("[data-l]").forEach((b) => b.addEventListener("click", () => { tried.add(b.dataset.l); if (!word.includes(b.dataset.l)) lives--; const nowWon = word.split("").every((ch) => tried.has(ch)); if (nowWon) { speak(w.en); end("hang", "#D946EF", "Pendu", 10 + lives * 5, `Bravo : « ${w.en} » = ${w.fr}`, hang); } else if (lives <= 0) end("hang", "#D946EF", "Pendu", 0, `C’était « ${w.en} » = ${w.fr}`, hang); else draw(); }));
      void won;
    }
    draw();
  }

  /* ---------- 8. Écoute et touche ---------- */
  function ear() {
    const NO = [4, 4, 6][LV], ROUNDS = 8; let r = 0, score = 0;
    const withImg = W.filter((w) => w.sc);
    const poolW = withImg.length >= NO ? withImg : W;
    function round() {
      if (r >= ROUNDS) return end("ear", "#B7791F", "Écoute Et Touche", score, "Bien écouté !", ear);
      const w = poolW[Math.floor(Math.random() * poolW.length)], opts = shuffle([w].concat(pick(poolW.filter((x) => x !== w && (!w.sc || x.sc !== w.sc)), NO - 1)));
      const card = (o) => (o.sc ? `<img src="assets/img/lesson/${esc(o.sc)}.webp" alt="" data-fr="${esc(o.fr)}"/>` : `<span>${esc(o.fr)}</span>`);
      shell("Écoute Et Touche", "#B7791F", `<section class="lc-card jx-q"><button type="button" class="jx-play" id="jxPlay">🔊 Écouter</button><small>Touche ce que tu entends · ${r + 1}/${ROUNDS}</small></section>
        <section class="jx-opts jx-img" style="grid-template-columns:repeat(2,1fr)">${opts.map((o, i) => `<button type="button" class="jx-opt" data-i="${i}">${card(o)}</button>`).join("")}</section>`);
      el.querySelectorAll("img[data-fr]").forEach((im) => im.addEventListener("error", () => { const sp = document.createElement("span"); sp.textContent = im.dataset.fr; im.replaceWith(sp); }));
      speak(w.en); el.querySelector("#jxPlay").onclick = () => speak(w.en);
      el.querySelectorAll(".jx-opt").forEach((b) => b.addEventListener("click", () => { if (opts[+b.dataset.i] === w) { score += 10; b.classList.add("good"); } else b.classList.add("bad"); r++; setTimeout(round, 500); }));
    }
    round();
  }

  return { open: hub };
}
