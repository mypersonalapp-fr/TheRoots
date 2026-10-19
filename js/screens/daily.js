// The Roots Daily — actualités et mails à lire en anglais, questions SANS QCM (réponse tapée).
// Contenu dans js/data/the-roots-daily-en.js. Progression locale (localStorage, try/catch).

import { DAILY_ITEMS } from "../data/the-roots-daily-en.js?v=20261019a3";

const KEY = "the_roots_daily_v1";
const LEVELS = ["A1", "A2", "B1", "B2", "C1", "C2"];
const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
const norm = (s) => String(s).toLowerCase().replace(/[’‘]/g, "'").replace(/\s+/g, " ").trim();
const rx = (p) => { try { return new RegExp(p, "i"); } catch (e) { return /$^/; } };

function load() { try { return JSON.parse(localStorage.getItem(KEY) || "{}") || {}; } catch (e) { return {}; } }
function save(d) { try { localStorage.setItem(KEY, JSON.stringify(d)); } catch (e) { /* indisponible */ } }
const day = (d) => (d || new Date()).toISOString().slice(0, 10);

function streak(days) {
  const set = new Set(days || []); let n = 0; const d = new Date();
  if (!set.has(day(d))) d.setDate(d.getDate() - 1);
  while (set.has(day(d))) { n++; d.setDate(d.getDate() - 1); }
  return n;
}

// Retourne {ok, detail[]} pour une réponse.
function grade(q, v) {
  const a = norm(v);
  if (!a) return { ok: false, empty: true };
  if (q.k === "tf") {
    const val = /^(true|vrai)\b/.test(a) ? true : /^(false|faux)\b/.test(a) ? false : null;
    if (val === null) return { ok: false, msg: "Commence par « True » ou « False »." };
    if (val !== q.a) return { ok: false };
    if (q.why && !rx(q.why).test(a.replace(/^(true|false|vrai|faux)\b[\s,.:;-]*/, ""))) return { ok: false, msg: "Bon début. Justifie avec les mots du texte." };
    return { ok: true };
  }
  if (q.k === "reply") {
    const detail = q.checks.map(([l, p]) => [l, rx(p).test(a)]);
    return { ok: detail.every((x) => x[1]) && a.split(" ").length >= 3, detail };
  }
  return { ok: (q.ok || []).some((p) => rx(p).test(a)) };
}

function wrapGlossary(text, glossary) {
  let html = esc(text);
  (glossary || []).forEach(([en], i) => {
    const re = new RegExp("\\b(" + en.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + ")\\b", "i");
    html = html.replace(re, `<button class="dl-w" data-gi="${i}">$1</button>`);
  });
  return html;
}

export function renderDaily(container) {
  let level = "A1", type = "news", openId = null, tip = null;
  const state = load();
  state.done = state.done || {}; state.days = state.days || [];

  function items() { return DAILY_ITEMS.filter((x) => x.level === level && x.type === type).sort((a, b) => (a.n || 0) - (b.n || 0) || String(a.date).localeCompare(String(b.date))); }
  const nn = (n) => ("0" + n).slice(-2);
  const fmt = (d) => { if (!d) return ""; try { return new Date(d + "T12:00:00").toLocaleDateString("en-GB", { weekday: "short", day: "numeric", month: "short" }); } catch (e) { return d; } };

  function card(x, big) {
    const d = state.done[x.id];
    return `<button class="dl-card${big ? " dl-big" : ""}" data-open="${x.id}">
      ${x.img && x.img.hero ? `<img class="dl-img" src="${esc(x.img.hero)}" alt="" loading="lazy" onerror="this.remove()">` : ""}
      <span class="dl-meta">${x.type === "mail" ? "✉️ Mail" : "📰 N° " + nn(x.n) + " · " + esc(x.tag || "News")}${x.date ? " · " + fmt(x.date) : ""} · ${x.minutes} min${x.demo ? " · <i>Exemple de mise en page</i>" : ""}</span>
      <b class="dl-title">${esc(x.title)}</b>
      <span class="dl-state">${d ? `✓ ${d.score}/${d.total}` : `${x.questions.length} questions`}</span>
    </button>`;
  }

  function list() {
    const L = items(); const total = Object.keys(state.done).length;
    return `
      <div class="dl-head"><div><b>The Roots Daily</b><span>${fmt(day())}</span></div><div class="dl-stats">🔥 ${streak(state.days)} j · ✓ ${total}</div></div>
      <div class="level-chip-row" id="dlLv">${LEVELS.map((l) => `<button class="level-chip${l === level ? " active" : ""}" data-lv="${l}">${l}</button>`).join("")}</div>
      <div class="dl-seg"><button class="${type === "news" ? "on" : ""}" data-type="news">📰 Actualités</button><button class="${type === "mail" ? "on" : ""}" data-type="mail">✉️ Mails</button></div>
      ${L.length ? `<div class="dl-sec">Commence ici</div>${card(L[0], true)}${L.length > 1 ? `<div class="dl-sec">Numéros suivants</div>${L.slice(1).map((x) => card(x)).join("")}` : ""}`
        : `<div class="card dl-empty"><div style="font-size:38px">${type === "mail" ? "✉️" : "📰"}</div><b>Les premiers ${type === "mail" ? "mails" : "articles"} ${level} arrivent bientôt.</b><span>Reviens vite, ou essaie un autre niveau.</span></div>`}`;
  }

  function qBlock(x, q, i) {
    const d = state.done[x.id];
    const label = { short: "Réponse courte", gap: "Complète", tf: "Vrai ou faux ? Justifie", reply: "Écris ta réponse" }[q.k];
    const field = q.k === "reply" || q.k === "tf"
      ? `<textarea class="dl-in" rows="${q.k === "reply" ? 3 : 2}" data-q="${i}" placeholder="${q.k === "tf" ? "True / False, because…" : "Write in English…"}" autocapitalize="sentences" spellcheck="false">${esc(vals[i] || "")}</textarea>`
      : `<input class="dl-in" data-q="${i}" type="text" value="${esc(vals[i] || "")}" placeholder="Type your answer…" autocomplete="off" autocapitalize="none" spellcheck="false">`;
    return `<div class="card dl-q" data-qb="${i}">
      <div class="dl-ql">${i + 1}. ${label}</div><div class="dl-qt">${esc(q.q)}</div>
      ${field}
      <div class="dl-fb${fbs[i] ? " " + fbs[i].c : ""}" data-fb="${i}">${fbs[i] ? fbs[i].h : ""}</div>
      <div class="dl-actions"><button class="btn btn-primary" data-check="${i}">Vérifier</button>${q.hint ? `<button class="dl-link" data-hint="${i}">Indice</button>` : ""}<button class="dl-link" data-model="${i}">Réponse modèle</button></div>
    </div>`;
  }

  const im = (src, cls) => src ? `<div class="${cls}"><img src="${esc(src)}" alt="" loading="lazy" onerror="this.parentNode.remove()"></div>` : "";
  const story = (k, o, src) => `<article class="dp-story">${im(src, "dp-thumb")}<div class="dp-kicker">${k}</div><h3>${esc(o.t)}</h3><p>${esc(o.p)}</p></article>`;
  function paper(x, pg) {
    const today = new Date().toLocaleDateString("en-US", { weekday: "long", year: "numeric", month: "long", day: "numeric" });
    return `<div class="dp" data-page="${pg || "1"}">
      <div class="dp-r5"></div><div class="dp-mast">The Roots Daily</div><div class="dp-r3"></div><div class="dp-gap"></div><div class="dp-r1"></div>
      <div class="dp-dateline"><span>Level ${x.level}</span><span class="dp-today">${esc(today)}</span><span>${x.minutes} min read</span></div>
      <div class="dp-r1"></div>
      <div class="dp-grid">
        <article class="dp-lead"><div><div class="dp-kicker">${esc(x.tag)} · N° ${nn(x.n)}</div><h2>${esc(x.title)}</h2></div>
          <p class="dp-stand">${esc(x.stand)}</p>
          <figure>${im(x.img.hero, "dp-shot")}<figcaption>${esc(x.cap)}</figcaption></figure>
          <div class="dp-cols">${x.body.map((p) => `<p>${wrapGlossary(p, x.glossary)}</p>`).join("")}</div>
        </article>
        <div class="dp-vr"></div>
        <aside class="dp-side">${story("Food", x.food, x.img.food)}<div class="dp-rs"></div>${story("City", x.city, x.img.city)}<div class="dp-rs"></div>${story("Weather", x.wx, x.img.wx)}</aside>
      </div>
      <nav class="dp-issues" aria-label="Issues">${DAILY_ITEMS.filter((i) => i.type === "news" && i.level === x.level).sort((a, b) => a.n - b.n).map((i) => `<button data-open="${i.id}"${i.id === x.id ? ' aria-current="true"' : ""}>${nn(i.n)}</button>`).join("")}</nav>
      <div class="dp-tip" id="dlTip">Touche un mot souligné pour sa traduction.</div>
    </div>`;
  }
  let step = 0, sheet = false;
  const vals = {}, fbs = {};
  const stepsOf = (x) => (x.type === "news" ? ["read", "rub"] : ["read"]).concat(x.questions.map((_, i) => i));
  const isLand = () => matchMedia("(orientation: landscape)").matches;
  function mailCard(x) {
    return `<article class="card dl-art"><div class="dl-mailhead"><div><span>From</span> ${esc(x.mail.from)}</div><div><span>To</span> ${esc(x.mail.to)}</div><div><span>Subject</span> <b>${esc(x.mail.subject)}</b></div><div><span>Date</span> ${fmt(x.date)}</div></div>
      <div class="dl-body">${x.body.map((p) => `<p>${wrapGlossary(p, x.glossary)}</p>`).join("")}</div>
      <div class="dl-tip" id="dlTip">Touche un mot souligné pour sa traduction.</div></article>`;
  }
  function reader(x) {
    const S = stepsOf(x), cur = S[step], nq = x.questions.length;
    let body, foot;
    if (cur === "read" || cur === "rub") {
      body = x.type === "news" ? paper(x, cur === "rub" ? "2" : "1") : mailCard(x);
      const nxt = x.type === "news" && cur === "read" && !isLand() ? "Rubriques ›" : `${nq} questions ›`;
      foot = `<button class="fl-btn" ${cur === "read" ? 'data-back="1"' : 'data-fl="-1"'}>${cur === "read" ? "‹ Numéros" : "‹ Article"}</button><button class="fl-btn am" data-fl="1">${nxt}</button>`;
    } else {
      const q = x.questions[cur], done = Object.keys(results).length >= nq, sc = x.questions.filter((_, i) => results[i]).length;
      body = `<div class="fl-qh"><span>Question ${cur + 1} / ${nq}</span><button class="fl-rev" data-sheet="1">📖 Revoir le texte</button></div>
        <div class="fl-prog"><i style="width:${((cur + 1) / nq) * 100}%"></i></div>
        ${qBlock(x, q, cur)}
        <div class="card dl-score" id="dlScore" ${done ? "" : "hidden"}>${done ? `<b>${sc}/${nq}</b> ${sc === nq ? "Parfait !" : "Relis le texte et corrige tes réponses."}` : ""}</div>`;
      foot = `<button class="fl-btn" data-fl="-1">‹</button>` + (cur === nq - 1 ? `<button class="fl-btn" data-back="1">Terminer</button>` : `<button class="fl-btn am" data-fl="1">Question suivante ›</button>`);
    }
    const text = x.type === "news" ? x.body.map((p) => `<p>${wrapGlossary(p, x.glossary)}</p>`).join("") : x.body.map((p) => `<p>${esc(p)}</p>`).join("");
    return `<div class="fl">${body}<div class="fl-foot">${foot}</div></div>
      <div class="fl-veil${sheet ? " on" : ""}" data-sheet="0"></div>
      <div class="fl-sheet${sheet ? " open" : ""}"><div class="fl-grab"></div><div class="fl-sh"><b>Le texte</b><button class="fl-btn" data-sheet="0">Fermer</button></div><div class="fl-sc">${text}</div></div>`;
  }
  function go(d) {
    const x = DAILY_ITEMS.find((i) => i.id === openId); if (!x) return;
    const S = stepsOf(x); let n = step + d;
    if (S[n] === "rub" && isLand()) n += d;
    step = Math.max(0, Math.min(S.length - 1, n)); sheet = false; paint(); container.scrollTop = 0;
    const sc = container.closest(".app-body"); if (sc) sc.scrollTop = 0;
  }

  function paint() {
    const x = openId && DAILY_ITEMS.find((i) => i.id === openId);
    container.classList.toggle("dl-flow", !!x);
    container.innerHTML = `<div class="dl-wrap">${x ? reader(x) : list()}</div>`;
  }

  const results = {};
  function finish(x) {
    const total = x.questions.length;
    const score = x.questions.filter((_, i) => results[i]).length;
    const box = container.querySelector("#dlScore");
    if (Object.keys(results).length < total) { box.hidden = true; return; }
    state.done[x.id] = { score: Math.max(score, (state.done[x.id] || {}).score || 0), total, date: day() };
    if (!state.days.includes(day())) state.days.push(day());
    save(state);
    box.hidden = false;
    box.innerHTML = `<b>${score}/${total}</b> ${score === total ? "Parfait !" : "Relis le texte et corrige tes réponses."}`;
  }

  function setFb(el, i, c, h) { fbs[i] = { c, h }; el.className = "dl-fb" + (c ? " " + c : ""); el.innerHTML = h; }
  let sx = null;
  container.addEventListener("touchstart", (e) => { sx = e.target.closest(".dp") ? e.touches[0].clientX : null; }, { passive: true });
  container.addEventListener("touchend", (e) => {
    if (sx === null || !openId || isLand()) return;
    const dx = e.changedTouches[0].clientX - sx; sx = null;
    const x = DAILY_ITEMS.find((i) => i.id === openId), cur = x && stepsOf(x)[step];
    if (Math.abs(dx) > 60 && (cur === "read" || cur === "rub")) { if (dx < 0 && cur === "read") go(1); else if (dx > 0 && cur === "rub") go(-1); }
  });
  container.addEventListener("input", (e) => { const f = e.target.closest("[data-q]"); if (f) vals[+f.dataset.q] = f.value; });
  container.addEventListener("click", (e) => {
    const t = e.target;
    const lv = t.closest("[data-lv]"); if (lv) { level = lv.dataset.lv; paint(); return; }
    const ty = t.closest("[data-type]"); if (ty) { type = ty.dataset.type; paint(); return; }
    const op = t.closest("[data-open]"); if (op) { openId = op.dataset.open; [results, vals, fbs].forEach((o) => Object.keys(o).forEach((k) => delete o[k])); step = 0; sheet = false; paint(); container.scrollTop = 0; return; }
    if (t.closest("[data-back]")) { openId = null; step = 0; sheet = false; paint(); return; }
    const fl = t.closest("[data-fl]"); if (fl) { go(+fl.dataset.fl); return; }
    const sh = t.closest("[data-sheet]"); if (sh) { sheet = sh.dataset.sheet === "1"; paint(); return; }
    const x = openId && DAILY_ITEMS.find((i) => i.id === openId);
    if (!x) return;
    const g = t.closest(".dl-w");
    if (g) { const [en, fr] = x.glossary[+g.dataset.gi]; container.querySelector("#dlTip").innerHTML = `<b>${esc(en)}</b> = ${esc(fr)}`; return; }
    const ck = t.closest("[data-check]");
    if (ck) {
      const i = +ck.dataset.check, q = x.questions[i];
      const v = container.querySelector(`[data-q="${i}"]`).value;
      const r = grade(q, v); const fb = container.querySelector(`[data-fb="${i}"]`);
      if (r.empty) { setFb(fb, i, "", "Écris ta réponse d'abord."); return; }
      results[i] = r.ok;
      setFb(fb, i, r.ok ? "ok" : "ko", (r.ok ? "✓ Bonne réponse" : "✗ Pas encore") + (r.msg ? `<br>${esc(r.msg)}` : "") +
        (r.detail ? "<ul>" + r.detail.map(([l, o]) => `<li>${o ? "✓" : "✗"} ${esc(l)}</li>`).join("") + "</ul>" : ""));
      finish(x); return;
    }
    const h = t.closest("[data-hint]");
    if (h) { const i = +h.dataset.hint; setFb(container.querySelector(`[data-fb="${i}"]`), i, "", "💡 " + esc(x.questions[i].hint)); return; }
    const m = t.closest("[data-model]");
    if (m) { const i = +m.dataset.model; setFb(container.querySelector(`[data-fb="${i}"]`), i, "", "Modèle : <b>" + esc(x.questions[i].model) + "</b>"); }
  });
  paint();
}
