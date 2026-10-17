// The Roots Daily — actualités et mails à lire en anglais, questions SANS QCM (réponse tapée).
// Contenu dans js/data/the-roots-daily-en.js. Progression locale (localStorage, try/catch).

import { DAILY_ITEMS } from "../data/the-roots-daily-en.js?v=20261018c7";

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

  function items() { return DAILY_ITEMS.filter((x) => x.level === level && x.type === type).sort((a, b) => b.date.localeCompare(a.date)); }
  const fmt = (d) => { try { return new Date(d + "T12:00:00").toLocaleDateString("en-GB", { weekday: "short", day: "numeric", month: "short" }); } catch (e) { return d; } };

  function card(x, big) {
    const d = state.done[x.id];
    return `<button class="dl-card${big ? " dl-big" : ""}" data-open="${x.id}">
      ${x.img ? `<img class="dl-img" src="${esc(x.img)}" alt="" loading="lazy" onerror="this.remove()">` : ""}
      <span class="dl-meta">${x.type === "mail" ? "✉️ Mail" : "📰 " + esc(x.tag || "News")} · ${fmt(x.date)} · ${x.minutes} min${x.demo ? " · <i>Exemple de mise en page</i>" : ""}</span>
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
      ${L.length ? `<div class="dl-sec">À la une</div>${card(L[0], true)}${L.length > 1 ? `<div class="dl-sec">Archives</div>${L.slice(1).map((x) => card(x)).join("")}` : ""}`
        : `<div class="card dl-empty"><div style="font-size:38px">${type === "mail" ? "✉️" : "📰"}</div><b>Les premiers ${type === "mail" ? "mails" : "articles"} ${level} arrivent bientôt.</b><span>Reviens vite, ou essaie un autre niveau.</span></div>`}`;
  }

  function qBlock(x, q, i) {
    const d = state.done[x.id];
    const label = { short: "Réponse courte", gap: "Complète", tf: "Vrai ou faux ? Justifie", reply: "Écris ta réponse" }[q.k];
    const field = q.k === "reply" || q.k === "tf"
      ? `<textarea class="dl-in" rows="${q.k === "reply" ? 3 : 2}" data-q="${i}" placeholder="${q.k === "tf" ? "True / False, because…" : "Write in English…"}" autocapitalize="sentences" spellcheck="false"></textarea>`
      : `<input class="dl-in" data-q="${i}" type="text" placeholder="Type your answer…" autocomplete="off" autocapitalize="none" spellcheck="false">`;
    return `<div class="card dl-q" data-qb="${i}">
      <div class="dl-ql">${i + 1}. ${label}</div><div class="dl-qt">${esc(q.q)}</div>
      ${field}
      <div class="dl-fb" data-fb="${i}"></div>
      <div class="dl-actions"><button class="btn btn-primary" data-check="${i}">Vérifier</button>${q.hint ? `<button class="dl-link" data-hint="${i}">Indice</button>` : ""}<button class="dl-link" data-model="${i}">Réponse modèle</button></div>
    </div>`;
  }

  function reader(x) {
    const mail = x.mail ? `<div class="dl-mailhead"><div><span>De</span> ${esc(x.mail.from)}</div><div><span>À</span> ${esc(x.mail.to)}</div><div><span>Objet</span> <b>${esc(x.mail.subject)}</b></div><div><span>Date</span> ${fmt(x.date)}</div></div>` : "";
    return `<button class="comp-back" data-back="1">‹ Retour</button>
      <article class="card dl-art">
        ${x.img ? `<img class="dl-img" src="${esc(x.img)}" alt="" onerror="this.remove()">` : ""}
        ${x.mail ? "" : `<div class="dl-meta">📰 ${esc(x.tag || "News")} · ${fmt(x.date)} · ${x.minutes} min</div><h2 class="dl-h">${esc(x.title)}</h2>`}
        ${mail}
        <div class="dl-body">${x.body.map((p) => `<p>${wrapGlossary(p, x.glossary)}</p>`).join("")}</div>
        <div class="dl-tip" id="dlTip">Touche un mot souligné pour sa traduction.</div>
      </article>
      <div class="dl-sec">Questions</div>
      ${x.questions.map((q, i) => qBlock(x, q, i)).join("")}
      <div class="card dl-score" id="dlScore" hidden></div>`;
  }

  function paint() {
    const x = openId && DAILY_ITEMS.find((i) => i.id === openId);
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

  container.addEventListener("click", (e) => {
    const t = e.target;
    const lv = t.closest("[data-lv]"); if (lv) { level = lv.dataset.lv; paint(); return; }
    const ty = t.closest("[data-type]"); if (ty) { type = ty.dataset.type; paint(); return; }
    const op = t.closest("[data-open]"); if (op) { openId = op.dataset.open; Object.keys(results).forEach((k) => delete results[k]); paint(); container.scrollTop = 0; return; }
    if (t.closest("[data-back]")) { openId = null; paint(); return; }
    const x = openId && DAILY_ITEMS.find((i) => i.id === openId);
    if (!x) return;
    const g = t.closest(".dl-w");
    if (g) { const [en, fr] = x.glossary[+g.dataset.gi]; container.querySelector("#dlTip").innerHTML = `<b>${esc(en)}</b> = ${esc(fr)}`; return; }
    const ck = t.closest("[data-check]");
    if (ck) {
      const i = +ck.dataset.check, q = x.questions[i];
      const v = container.querySelector(`[data-q="${i}"]`).value;
      const r = grade(q, v); const fb = container.querySelector(`[data-fb="${i}"]`);
      if (r.empty) { fb.className = "dl-fb"; fb.textContent = "Écris ta réponse d'abord."; return; }
      results[i] = r.ok;
      fb.className = "dl-fb " + (r.ok ? "ok" : "ko");
      fb.innerHTML = (r.ok ? "✓ Bonne réponse" : "✗ Pas encore") + (r.msg ? `<br>${esc(r.msg)}` : "") +
        (r.detail ? "<ul>" + r.detail.map(([l, o]) => `<li>${o ? "✓" : "✗"} ${esc(l)}</li>`).join("") + "</ul>" : "");
      finish(x); return;
    }
    const h = t.closest("[data-hint]");
    if (h) { const i = +h.dataset.hint; const fb = container.querySelector(`[data-fb="${i}"]`); fb.className = "dl-fb"; fb.textContent = "💡 " + x.questions[i].hint; return; }
    const m = t.closest("[data-model]");
    if (m) { const i = +m.dataset.model; const fb = container.querySelector(`[data-fb="${i}"]`); fb.className = "dl-fb"; fb.innerHTML = "Modèle : <b>" + esc(x.questions[i].model) + "</b>"; }
  });
  paint();
}
