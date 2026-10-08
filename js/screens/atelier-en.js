// The Roots — « Atelier de grammaire anglaise » (25/09). Un grand chapitre
// autonome, indépendant de « Mes cours », pour les blocages typiques des
// francophones en espagnol : les temps, les verbes pronominaux, ser/estar,
// por/para, les pronoms, la prononciation… Beaucoup d'exercices, et
// surtout le POURQUOI de chaque règle.
//
// Quatre vues, toutes dans cet écran :
//  - Accueil : chapitres rangés par groupe (Les temps · Les verbes ·
//    Structures · Prononciation · Pièges) + progression, et deux outils :
//    🔎 Décodeur de verbes, 📖 Textes annotés.
//  - Leçon : pourquoi → règle → ligne du temps → tableau → exemples 🔊 →
//    pièges, puis les exercices un par un (QCM en 2 essais comme le reste
//    de l'appli, phrase à trous tolérante aux accents, répétition au micro),
//    score, « Refaire », « Leçon suivante ».
//  - Décodeur : on tape une forme (« serán ») → infinitif, temps, personne,
//    traduction, expliqués « racine + terminaison ».
//  - Textes annotés : chaque mot se touche (nature, info, traduction).
//
// Contenu : js/data/atelier-es.js (ATELIER_EN = { chapters, decoder, texts },
// format décrit dans .staging/es/ATELIER-FORMAT.md). Le contenu pédagogique
// reste en français, quelle que soit la langue de l'interface (même logique
// que l'Aide & FAQ et les programmes). Progression : localStorage uniquement
// (clé the_roots_atelier_en_v1), pas de backend. Chaque réponse alimente
// aussi les jauges Grammaire / Prononciation de l'espagnol (recordSkill).

import { ATELIER_EN } from "../data/atelier-en.js?v=20261008a";
import { recordSkill } from "../data/progress.js?v=20260930a";

const PROGRESS_KEY = "the_roots_atelier_en_v1";

const GROUPS = [
  { id: "temps", label: "Les temps", icon: "⏱️" },
  { id: "verbes", label: "Les verbes", icon: "🔁" },
  { id: "structures", label: "Structures", icon: "🧱" },
  { id: "prononciation", label: "Prononciation", icon: "👄" },
  { id: "pieges", label: "Pièges", icon: "🪤" },
];

const DECODER_EXAMPLES = ["serán", "hablaremos", "fui", "tendré", "comían", "estoy hablando", "he comido", "voy a salir"];

const ACCENT_KEYS = ["’"];

// ---------- petites aides ----------

function esc(s) {
  return String(s == null ? "" : s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
}
function stripTags(s) { return String(s == null ? "" : s).replace(/<[^>]*>/g, ""); }
function stripAcc(s) { return String(s || "").normalize("NFD").replace(/[̀-ͯ]/g, "").normalize("NFC"); }
// Comparaison « tolérante » d'une réponse tapée : casse, espaces, apostrophes,
// ponctuation d'ouverture/fermeture (¿ ¡ . ! ? …) ignorées — PAS les accents
// (gérés à part pour pouvoir dire « presque ! »).
function normAns(s) {
  return String(s || "")
    .normalize("NFC")
    .toLowerCase()
    .replace(/[’`´]/g, "'")
    .replace(/^[\s¡¿"«“(]+/, "")
    .replace(/[\s.!?…;:,"»”)]+$/, "")
    .replace(/\s+/g, " ")
    .trim();
}
function normWords(s) {
  return stripAcc(String(s || "").toLowerCase()).replace(/[^a-z0-9ñ' ]+/g, " ").replace(/\s+/g, " ").trim();
}
function levenshtein(a, b) {
  if (a === b) return 0;
  if (!a.length) return b.length;
  if (!b.length) return a.length;
  let prev = Array.from({ length: b.length + 1 }, (_, i) => i);
  for (let i = 1; i <= a.length; i++) {
    const cur = [i];
    for (let j = 1; j <= b.length; j++) {
      cur[j] = Math.min(prev[j] + 1, cur[j - 1] + 1, prev[j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
    }
    prev = cur;
  }
  return prev[b.length];
}
// Score de ressemblance simple (0 à 1) entre la phrase attendue et ce que le
// micro a compris : distance d'édition sur les lettres, sans accents ni
// ponctuation (le micro ne rend de toute façon pas toujours les accents).
function similarity(expected, heard) {
  const a = normWords(expected), b = normWords(heard);
  if (!a || !b) return 0;
  return Math.max(0, 1 - levenshtein(a, b) / Math.max(a.length, b.length));
}

function loadProgress() {
  try {
    const p = JSON.parse(localStorage.getItem(PROGRESS_KEY) || "null");
    if (p && typeof p === "object") return { lessons: p.lessons || {}, texts: p.texts || {}, last: p.last || null };
  } catch (e) { /* stockage indisponible ou abîmé : on repart de zéro */ }
  return { lessons: {}, texts: {}, last: null };
}
function saveProgress(p) {
  try { localStorage.setItem(PROGRESS_KEY, JSON.stringify(p)); } catch (e) { /* stockage indisponible */ }
}
function lessonKey(ch, l) { return ch.id + "/" + l.id; }

// ---------- voix ----------

function englishVoice() {
  try {
    const voices = window.speechSynthesis.getVoices() || [];
    return voices.find((v) => /^en[-_]GB/i.test(v.lang)) || voices.find((v) => /^en\b|^en[-_]/i.test(v.lang)) || null;
  } catch (e) { return null; }
}
function speakEs(text, rate) {
  if (!window.speechSynthesis) return;
  const toSay = stripTags(text).trim();
  if (!toSay) return;
  try {
    const u = new SpeechSynthesisUtterance(toSay);
    const v = englishVoice();
    if (v) u.voice = v;
    u.lang = v ? v.lang : "en-GB";
    u.rate = rate || 0.9;
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(u);
  } catch (e) { /* synthèse vocale indisponible */ }
}
function stopSpeech() {
  try { window.speechSynthesis && window.speechSynthesis.cancel(); } catch (e) { /* rien */ }
}

// ---------- décodeur ----------

const GROUP_ENDINGS = { ar: ["ar"], er: ["er"], ir: ["ir"], "er-ir": ["er", "ir"], all: ["ar", "er", "ir"] };
// Le futur et le conditionnel se collent à l'INFINITIF ENTIER (hablar + é),
// les autres temps à la racine (habl + o).
const ON_INFINITIVE = new Set(["futuro", "condicional"]);

function cleanWord(w) {
  return String(w || "").normalize("NFC").toLowerCase().replace(/^[¡¿"«“(.,;:!?]+|[.,;:!?"»”)]+$/g, "").trim();
}

function decodeWord(raw, decoder) {
  const w = cleanWord(raw);
  const out = { word: w, irregular: [], regular: [], infinitive: false, accentHint: null };
  if (!w || !decoder) return out;
  const irr = decoder.irregulars || [];
  let hits = irr.filter((r) => cleanWord(r.form) === w);
  if (!hits.length) {
    hits = irr.filter((r) => stripAcc(cleanWord(r.form)) === stripAcc(w));
    if (hits.length) out.accentHint = hits[0].form;
  }
  out.irregular = hits;
  if (/(ar|er|ir|ír)(se)?$/.test(w) && w.length > 3) out.infinitive = true;
  if (hits.length) return out;

  const endings = (decoder.endings || []).slice().sort((a, b) => cleanWord(b.ending).length - cleanWord(a.ending).length);
  const merged = new Map();
  endings.forEach((e) => {
    const end = cleanWord(e.ending);
    if (!end) return;
    let loose = false;
    if (!w.endsWith(end)) {
      if (stripAcc(w).endsWith(stripAcc(end))) loose = true; else return;
    }
    const stem = w.slice(0, w.length - end.length);
    if (stripAcc(stem).length < 2) return;
    const groups = GROUP_ENDINGS[e.group] || GROUP_ENDINGS.all;
    let infinitives;
    let onInf = false;
    if (ON_INFINITIVE.has(e.tense)) {
      const m = stripAcc(stem).match(/(ar|er|ir)$/);
      if (!m || !groups.includes(m[1])) return; // racine irrégulière (tendr-, har-…) : seulement via la liste
      infinitives = [stem.replace(/ír$/, "ir")];
      onInf = true;
    } else {
      infinitives = groups.map((g) => stem + g);
    }
    const key = e.tense + "|" + e.person + "|" + stem;
    const prev = merged.get(key);
    if (prev) {
      infinitives.forEach((i) => { if (!prev.infinitives.includes(i)) prev.infinitives.push(i); });
      prev.loose = prev.loose && loose;
      return;
    }
    const fixed = loose ? stem + e.ending : null;
    merged.set(key, { e, stem, end: loose ? e.ending : end, infinitives, onInf, loose, fixed });
  });
  // Filtre anti-bruit : une racine ne finit jamais par une voyelle accentuée (comí-an), et si un futur /
  // conditionnel colle à l'infinitif, on écarte les lectures « hablar-er » d'un présent.
  const cands = Array.from(merged.values());
  const hasInf = cands.some((c) => c.onInf);
  out.regular = cands.filter((c) => !/[áéíóú]$/.test(c.stem))
    .filter((c) => !(hasInf && !c.onInf && /(ar|er|ir)$/.test(stripAcc(c.stem))));
  out.regular = out.regular
    .sort((a, b) => (a.loose - b.loose) || (cleanWord(b.e.ending).length - cleanWord(a.e.ending).length))
    .slice(0, 6);
  return out;
}

// ---------- natures des mots (textes annotés) ----------

const POS_LABELS = ["verbe", "nom", "nom propre", "pronom", "article", "déterminant", "adjectif", "adverbe", "préposition", "conjonction", "interjection"];
function posSlug(pos) { return stripAcc(String(pos || "")).toLowerCase().replace(/[^a-z]/g, ""); }

// =====================================================================

export function renderAtelierEn(container) {
  const DATA = ATELIER_EN || { chapters: [], decoder: null, texts: [] };
  const chapters = Array.isArray(DATA.chapters) ? DATA.chapters : [];
  const texts = Array.isArray(DATA.texts) ? DATA.texts : [];
  const decoder = DATA.decoder || null;

  let progress = loadProgress();
  let view = "home";          // home | chapter | lesson | decoder | texts | text
  let chIdx = 0, lIdx = 0, textIdx = 0;
  let decoderInput = "";
  let lesson = null;          // état de la leçon en cours
  let reading = null;         // état du texte en cours
  let recognition = null;
  let lastInput = null;       // dernier champ touché (clavier d'accents)
  let say = [];               // textes à lire, référencés par index (data-say)

  const MicRec = window.SpeechRecognition || window.webkitSpeechRecognition || null;

  function stopRecognition() {
    if (recognition) { try { recognition.abort(); } catch (e) { /* rien */ } recognition = null; }
  }
  function go(v) {
    stopSpeech(); stopRecognition();
    view = v;
    paint();
    container.scrollTop = 0;
  }
  function sayBtn(text, cls, label) {
    say.push(text);
    return `<button class="${cls || "ates-say"}" data-say="${say.length - 1}" aria-label="Écouter">${label || "🔊"}</button>`;
  }
  function backBtn(label, target) {
    return `<button class="settings-back ates-back" data-go="${target}">‹ ${esc(label)}</button>`;
  }

  // ---------- rendu général ----------

  function paint() {
    say = [];
    let html = "";
    if (view === "home") html = homeHtml();
    else if (view === "chapter") html = chapterHtml();
    else if (view === "lesson") html = lessonHtml();
    else if (view === "decoder") html = decoderHtml();
    else if (view === "texts") html = textsHtml();
    else if (view === "text") html = textHtml();
    container.innerHTML = `<div class="ates">${html}</div>`;
    wire();
  }

  function chapterStats(ch) {
    const total = (ch.lessons || []).length;
    const done = (ch.lessons || []).filter((l) => progress.lessons[lessonKey(ch, l)] && progress.lessons[lessonKey(ch, l)].done).length;
    return { done, total };
  }

  // ---------- accueil ----------

  function homeHtml() {
    const allLessons = chapters.reduce((n, c) => n + (c.lessons || []).length, 0);
    const allDone = chapters.reduce((n, c) => n + chapterStats(c).done, 0);
    const pct = allLessons ? Math.round((allDone / allLessons) * 100) : 0;
    const last = progress.last;
    let resume = "";
    if (last) {
      const ci = chapters.findIndex((c) => c.id === last.ch);
      const li = ci >= 0 ? (chapters[ci].lessons || []).findIndex((l) => l.id === last.l) : -1;
      if (li >= 0) resume = `<button class="btn btn-primary ates-wide" data-open-lesson="${ci}:${li}">▶ Reprendre : ${esc(stripTags(chapters[ci].lessons[li].title))}</button>`;
    }
    const groups = GROUPS.map((g) => {
      const list = chapters.map((c, i) => ({ c, i })).filter((x) => x.c.group === g.id);
      if (!list.length) return "";
      return `
        <div class="dash-box">
          <h3>${g.icon} ${esc(g.label)}</h3>
          <div class="ates-chlist">
            ${list.map(({ c, i }) => {
              const s = chapterStats(c);
              const p = s.total ? Math.round((s.done / s.total) * 100) : 0;
              return `
              <button class="card ates-chcard" data-chapter="${i}">
                <span class="ates-chicon">${c.icon || "📘"}</span>
                <span class="ates-chbody">
                  <span class="ates-chtitle">${esc(stripTags(c.title))} ${c.level ? `<span class="ates-level">${esc(c.level)}</span>` : ""}</span>
                  <span class="ates-chmeta">${s.done} / ${s.total} leçon${s.total > 1 ? "s" : ""} ${s.total && s.done === s.total ? "✅" : ""}</span>
                  <span class="dash-progress-bar"><span class="dash-progress-fill" style="width:${p}%;display:block"></span></span>
                </span>
                <span class="ates-chev">›</span>
              </button>`;
            }).join("")}
          </div>
        </div>`;
    }).join("");
    return `
      <div class="card ates-hero">
        <div class="ates-hero-title">🇬🇧 Atelier de grammaire anglaise</div>
        <div class="ates-hero-sub">Tous les temps, en registre formel et informel… On comprend <b>pourquoi</b>, puis on s'entraîne beaucoup — à l'écrit et à voix haute.</div>
        <div class="ates-hero-prog"><span>${allDone} / ${allLessons} leçons terminées</span><span>${pct} %</span></div>
        <div class="dash-progress-bar"><div class="dash-progress-fill" style="width:${pct}%"></div></div>
      </div>
      ${resume}
      ${groups || `<div class="card ates-muted" style="margin-top:14px">Le contenu de l'atelier arrive très bientôt.</div>`}
    `;
  }

  // ---------- chapitre ----------

  function chapterHtml() {
    const ch = chapters[chIdx];
    if (!ch) return backBtn("Atelier", "home");
    return `
      ${backBtn("Atelier", "home")}
      <div class="card ates-hero">
        <div class="ates-hero-title">${ch.icon || ""} ${esc(stripTags(ch.title))} ${ch.level ? `<span class="ates-level">${esc(ch.level)}</span>` : ""}</div>
        <div class="ates-hero-sub">${ch.intro || ""}</div>
      </div>
      <div class="ates-lessonlist">
        ${(ch.lessons || []).map((l, i) => {
          const p = progress.lessons[lessonKey(ch, l)];
          const n = (l.exercises || []).length;
          return `
          <button class="card ates-lessonrow" data-lesson="${i}">
            <span class="ates-lnum ${p && p.done ? "done" : ""}">${p && p.done ? "✓" : i + 1}</span>
            <span class="ates-chbody">
              <span class="ates-chtitle">${esc(stripTags(l.title))}</span>
              <span class="ates-chmeta">${l.reg ? (l.reg === "formal" ? "🎩 Formel" : "💬 Informel") + " · " : ""}${n} exercice${n > 1 ? "s" : ""}${p && p.done ? ` · meilleur score ${p.best} / ${p.total}` : ""}</span>
            </span>
            <span class="ates-chev">›</span>
          </button>`;
        }).join("")}
      </div>
    `;
  }

  // ---------- leçon ----------

  function startLesson(ci, li, phase) {
    chIdx = ci; lIdx = li;
    const ch = chapters[ci], l = ch && ch.lessons[li];
    if (!l) return go("home");
    lesson = { phase: phase || "learn", idx: 0, results: [], ex: null };
    progress.last = { ch: ch.id, l: l.id };
    saveProgress(progress);
    go("lesson");
  }
  function curLesson() { const ch = chapters[chIdx]; return ch ? (ch.lessons || [])[lIdx] : null; }

  function tableHtml(tb) {
    if (!tb || !Array.isArray(tb.rows)) return "";
    return `
      <div class="ates-tablewrap">
        <table class="ates-table">
          ${tb.caption ? `<caption>${tb.caption}</caption>` : ""}
          ${tb.headers ? `<thead><tr>${tb.headers.map((h) => `<th>${h}</th>`).join("")}</tr></thead>` : ""}
          <tbody>${tb.rows.map((r) => `<tr>${r.map((c, i) => `<td${i === 1 ? ' class="ates-form"' : ""}>${c}</td>`).join("")}</tr>`).join("")}</tbody>
        </table>
      </div>`;
  }

  function learnHtml(l, compact) {
    return `
      ${!compact && l.why ? `<div class="ates-why"><div class="ates-why-label">💡 Pourquoi ?</div><div>${l.why}</div></div>` : ""}
      ${l.rule ? `<div class="card ates-block"><div class="ates-block-title">📏 La règle</div><div class="ates-text">${l.rule}</div></div>` : ""}
      ${l.timeline ? `<div class="card ates-block"><div class="ates-block-title">🕒 Sur la ligne du temps</div><pre class="ates-timeline">${esc(stripTags(l.timeline))}</pre></div>` : ""}
      ${l.table ? `<div class="card ates-block"><div class="ates-block-title">🧩 Conjugaison</div>${tableHtml(l.table)}<div class="ates-note">En couleur : la terminaison, c'est elle qui dit <b>qui</b> fait l'action et <b>quand</b>.</div></div>` : ""}
      ${!compact && Array.isArray(l.examples) && l.examples.length ? `
        <div class="card ates-block"><div class="ates-block-title">🗣️ Exemples</div>
          ${l.examples.map((x) => `
            <div class="ates-example">
              ${sayBtn(x.en)}
              <div class="ates-ex-body">
                <div class="ates-es">${x.en}</div>
                <div class="ates-fr">${x.fr || ""}</div>
                ${x.note ? `<div class="ates-note">${x.note}</div>` : ""}
              </div>
            </div>`).join("")}
        </div>` : ""}
      ${!compact && Array.isArray(l.pitfalls) && l.pitfalls.length ? `
        <div class="card ates-block"><div class="ates-block-title">⚠️ Les pièges des francophones</div>
          ${l.pitfalls.map((p) => `
            <div class="ates-pitfall">
              <div class="ates-wrong">❌ ${p.wrong}</div>
              <div class="ates-right">✅ ${p.right}</div>
              ${p.why ? `<div class="ates-pwhy">💡 ${p.why}</div>` : ""}
            </div>`).join("")}
        </div>` : ""}
    `;
  }

  function lessonHtml() {
    const ch = chapters[chIdx], l = curLesson();
    if (!l) return backBtn("Atelier", "home");
    const exs = l.exercises || [];
    const head = `
      ${backBtn(stripTags(ch.title), "chapter")}
      <div class="ates-lesson-kicker">${ch.icon || ""} ${esc(stripTags(ch.title))} · leçon ${lIdx + 1} / ${ch.lessons.length}</div>
      <h2 class="ates-h2">${esc(stripTags(l.title))}</h2>`;
    if (lesson.phase === "learn") {
      return `${head}
        ${learnHtml(l, false)}
        ${exs.length ? `<button class="btn btn-primary ates-wide" id="atesStart">✏️ C'est parti : ${exs.length} exercice${exs.length > 1 ? "s" : ""}</button>` : `<button class="btn btn-primary ates-wide" id="atesFinishNoEx">✓ J'ai compris</button>`}`;
    }
    if (lesson.phase === "done") return head + resultHtml(l);
    // phase "ex"
    const x = exs[lesson.idx];
    const pct = Math.round((lesson.idx / exs.length) * 100);
    return `${head}
      <div class="ates-exhead"><span>Exercice ${lesson.idx + 1} / ${exs.length}</span><span>${lesson.results.filter((r) => r === 1).length} ✓</span></div>
      <div class="dash-progress-bar"><div class="dash-progress-fill" style="width:${pct}%"></div></div>
      <details class="ates-review"><summary>📘 Revoir la règle</summary>${learnHtml(l, true)}</details>
      <div class="card ates-excard" id="atesEx">${exerciseHtml(x)}</div>`;
  }

  function whyHtml(x, ok) {
    const st = lesson.ex;
    let msg = "";
    if (ok === "accent") msg = `<div class="ates-fb ates-fb-accent">🟡 Presque ! Attention à l'accent : <b>${esc(st.fixed || "")}</b></div>`;
    else if (ok) msg = `<div class="ates-fb ates-fb-ok">✅ ${st.attempts > 1 ? "Oui, c'est ça (au 2e essai)." : "Bravo, c'est juste !"}</div>`;
    else msg = `<div class="ates-fb ates-fb-bad">❌ La bonne réponse : <b>${st.correctText || ""}</b></div>`;
    return `${msg}${x.why ? `<div class="ates-exwhy">💡 ${x.why}</div>` : ""}
      <button class="btn btn-primary ates-wide" id="atesNext">${lesson.idx + 1 < (curLesson().exercises || []).length ? "Suivant →" : "Voir mon score"}</button>`;
  }

  function exerciseHtml(x) {
    if (!x) return "";
    if (!lesson.ex) lesson.ex = { attempts: 0, resolved: false, wrong: [], values: [], heard: null, sim: null, listening: false, micError: null, self: false };
    const st = lesson.ex;
    if (x.type === "mcq") {
      return `
        <div class="ates-extype">Choisis la bonne réponse</div>
        <div class="lt-qtext ates-q">${x.q}</div>
        <div class="lt-opts">
          ${x.opts.map((o, i) => {
            let cls = "lt-opt";
            if (st.resolved && i === x.correct) cls += " correct";
            else if (st.wrong.includes(i)) cls += " incorrect";
            return `<button class="${cls}" data-opt="${i}" ${st.resolved || st.wrong.includes(i) ? "disabled" : ""}>${o}</button>`;
          }).join("")}
        </div>
        ${!st.resolved && st.wrong.length ? `<div class="ates-fb ates-fb-bad">Pas tout à fait — réessaie.</div>` : ""}
        ${st.resolved ? whyHtml(x, st.ok) : ""}`;
    }
    if (x.type === "fill") {
      const parts = String(x.text || "").split("___");
      let h = 0;
      const sentence = parts.map((p, i) => {
        if (i === parts.length - 1) return p;
        const k = h++;
        const v = st.values[k] || "";
        const mark = st.holeMarks ? st.holeMarks[k] : "";
        return `${p}<input type="text" class="ates-hole ${mark ? "ates-hole-" + mark : ""}" data-hole="${k}" value="${esc(v)}" ${st.resolved ? "disabled" : ""} autocapitalize="none" autocomplete="off" autocorrect="off" spellcheck="false" enterkeyhint="done" aria-label="Trou ${k + 1}" style="width:${Math.max(5, Math.min(14, (holesOf(x)[k] || [""])[0].length + 2))}ch"/>`;
      }).join("");
      return `
        <div class="ates-extype">Complète${h > 1 ? " les trous" : ""}</div>
        <div class="ates-fill">${sentence}</div>
        ${!st.resolved ? `
          <div class="ates-accents">${ACCENT_KEYS.map((a) => `<button class="ates-acc" data-acc="${a}" tabindex="-1">${a}</button>`).join("")}</div>
          ${st.attempts ? `<div class="ates-fb ates-fb-bad">Pas tout à fait — réessaie.</div>` : ""}
          <button class="btn btn-primary ates-wide" id="atesCheck">Vérifier</button>` : whyHtml(x, st.ok)}`;
    }
    if (x.type === "speak") {
      const heardWords = st.heard ? new Set(normWords(st.heard).split(" ")) : null;
      const target = heardWords
        ? String(x.en).split(/\s+/).map((w) => `<span class="${heardWords.has(normWords(w)) ? "ates-w-ok" : "ates-w-miss"}">${esc(w)}</span>`).join(" ")
        : esc(x.en);
      const pct = st.sim == null ? null : Math.round(st.sim * 100);
      const verdict = pct == null ? "" : pct >= 85 ? "Excellent ! 🎉" : pct >= 60 ? "Pas mal ! Encore une fois pour être parfait(e) ?" : "Réécoute et réessaie, doucement.";
      const noMic = !MicRec || ["not-allowed", "service-not-allowed", "audio-capture", "network"].includes(st.micError);
      return `
        <div class="ates-extype">Écoute, puis répète à voix haute</div>
        <div class="ates-speak-es">${target}</div>
        <div class="ates-fr">${x.fr || ""}</div>
        <div class="ates-speak-btns">
          ${sayBtn(x.en, "btn btn-ghost ates-sbtn", "🔊 Écouter")}
          ${sayBtn(x.en, "btn btn-ghost ates-sbtn", "🐢 Lentement")}
          ${MicRec ? `<button class="btn btn-primary ates-sbtn" id="atesMic">${st.listening ? "⏹ J'ai fini" : st.heard ? "🎤 Réessayer" : "🎤 Répéter"}</button>` : ""}
        </div>
        ${st.listening ? `<div class="ates-note ates-listening">🎙️ Je t'écoute… parle maintenant.</div>` : ""}
        ${st.heard != null ? `
          <div class="ates-heard">Le micro a compris : « <b>${esc(st.heard)}</b> »</div>
          <div class="ates-simrow"><div class="ates-simbar"><div style="width:${pct}%" class="${pct >= 60 ? "ok" : "ko"}"></div></div><b>${pct} %</b></div>
          <div class="ates-note">${verdict}</div>` : ""}
        ${st.micError && st.micError !== "aborted" ? `<div class="ates-note">${st.micError === "no-speech" ? "Je n'ai rien entendu — rapproche-toi du micro et réessaie." : "Le micro n'est pas disponible ici. Répète la phrase à voix haute, puis continue."}</div>` : ""}
        ${!MicRec ? `<div class="ates-note">Ton navigateur ne permet pas la reconnaissance vocale ici : écoute, répète à voix haute, puis continue.</div>` : ""}
        <div class="ates-speak-btns">
          ${noMic || (st.micError && st.heard == null) ? `<button class="btn btn-ghost ates-sbtn" id="atesSelf">✅ Je l'ai répété</button>` : ""}
          ${st.heard != null ? `<button class="btn btn-primary ates-sbtn" id="atesNextSpeak">${lesson.idx + 1 < (curLesson().exercises || []).length ? "Continuer →" : "Voir mon score"}</button>` : ""}
        </div>
        <div class="ates-note ates-honest">Le micro ne « note » que ce qu'il a compris : un mot mal compris vient souvent d'un son à travailler (la jota, le r roulé, les voyelles bien nettes).</div>`;
    }
    return `<div class="ates-muted">Exercice inconnu.</div><button class="btn btn-primary ates-wide" id="atesNext">Suivant →</button>`;
  }

  function holesOf(x) {
    const a = Array.isArray(x.answers) ? x.answers : [];
    return Array.isArray(a[0]) ? a : [a];
  }

  function resultHtml(l) {
    const total = lesson.results.length;
    const score = lesson.results.reduce((s, r) => s + r, 0);
    const pct = total ? Math.round((score / total) * 100) : 100;
    const msg = pct >= 90 ? "Magnifique ! Tu maîtrises. 🌟" : pct >= 70 ? "Très bien ! Encore un petit tour et ce sera automatique." : pct >= 50 ? "C'est en bonne voie. Relis le « pourquoi » et refais la leçon." : "Pas de panique : c'est justement en refaisant qu'on retient. Relis la règle et recommence.";
    const next = nextLessonRef();
    return `
      <div class="card lt-result ates-result">
        <div class="lt-badge">Leçon terminée</div>
        <div class="lt-score">${score}<span class="lt-score-of"> / ${total}</span></div>
        <div class="ates-note" style="font-size:14px">${msg}</div>
      </div>
      <button class="btn btn-ghost ates-wide" id="atesRedo">↻ Refaire</button>
      ${next ? `<button class="btn btn-primary ates-wide" data-open-lesson="${next[0]}:${next[1]}">Leçon suivante →</button>` : ""}
      <button class="btn btn-ghost ates-wide" data-go="chapter">Retour au chapitre</button>`;
  }

  function nextLessonRef() {
    const ch = chapters[chIdx];
    if (ch && lIdx + 1 < (ch.lessons || []).length) return [chIdx, lIdx + 1];
    for (let c = chIdx + 1; c < chapters.length; c++) if ((chapters[c].lessons || []).length) return [c, 0];
    return null;
  }

  function finishLesson() {
    const ch = chapters[chIdx], l = curLesson();
    const total = lesson.results.length;
    const score = lesson.results.reduce((s, r) => s + r, 0);
    const k = lessonKey(ch, l);
    const prev = progress.lessons[k];
    progress.lessons[k] = { done: true, best: Math.max(prev && prev.best != null ? prev.best : 0, score), total, lastScore: score, at: Date.now() };
    const nx = nextLessonRef();
    progress.last = nx ? { ch: chapters[nx[0]].id, l: chapters[nx[0]].lessons[nx[1]].id } : null;
    saveProgress(progress);
    lesson.phase = "done";
    paint();
    container.scrollTop = 0;
  }

  function nextExercise() {
    stopSpeech(); stopRecognition();
    const exs = curLesson().exercises || [];
    lesson.idx++;
    lesson.ex = null;
    if (lesson.idx >= exs.length) return finishLesson();
    paint();
    const card = container.querySelector("#atesEx");
    if (card && card.scrollIntoView) { try { container.scrollTop = Math.max(0, card.offsetTop - 120); } catch (e) { /* rien */ } }
  }

  function resolveExercise(point, skill) {
    const st = lesson.ex;
    st.resolved = true;
    lesson.results[lesson.idx] = point;
    try { recordSkill("en", skill, point); } catch (e) { /* jauges indisponibles */ }
  }

  function checkMcq(i) {
    const x = curLesson().exercises[lesson.idx], st = lesson.ex;
    if (st.resolved) return;
    st.attempts++;
    if (i === x.correct) { st.ok = true; resolveExercise(st.attempts === 1 ? 1 : 0, "gr"); }
    else {
      st.wrong.push(i);
      if (st.attempts >= 2) { st.ok = false; st.correctText = x.opts[x.correct]; resolveExercise(0, "gr"); }
    }
    paintExercise();
  }

  function checkFill() {
    const x = curLesson().exercises[lesson.idx], st = lesson.ex;
    if (st.resolved) return;
    container.querySelectorAll(".ates-hole").forEach((inp) => { st.values[Number(inp.dataset.hole)] = inp.value; });
    const holes = holesOf(x);
    if (holes.some((_, k) => !normAns(st.values[k]))) {
      const empty = container.querySelector(".ates-hole[value='']") || Array.from(container.querySelectorAll(".ates-hole")).find((i) => !i.value.trim());
      if (empty) empty.focus();
      return;
    }
    let allExact = true, allOk = true;
    const fixedParts = [];
    st.holeMarks = holes.map((acc, k) => {
      const v = normAns(st.values[k]);
      const exact = acc.find((a) => normAns(a) === v);
      if (exact != null) { fixedParts.push(exact); return "ok"; }
      const loose = acc.find((a) => stripAcc(normAns(a)) === stripAcc(v));
      if (loose != null) { allExact = false; fixedParts.push(loose); return "accent"; }
      allExact = false; allOk = false; fixedParts.push(acc[0]); return "bad";
    });
    st.attempts++;
    if (allOk) {
      st.ok = allExact ? true : "accent";
      st.fixed = fixedParts.join(" · ");
      resolveExercise(st.attempts === 1 ? 1 : 0, "gr");
    } else if (st.attempts >= 2) {
      st.ok = false;
      st.correctText = esc(holes.map((a) => a[0]).join(" · "));
      resolveExercise(0, "gr");
    }
    paintExercise();
  }

  function startMic() {
    const x = curLesson().exercises[lesson.idx], st = lesson.ex;
    if (!MicRec) return;
    if (st.listening) { try { recognition && recognition.stop(); } catch (e) { /* rien */ } return; }
    stopSpeech();
    let got = false;
    try {
      recognition = new MicRec();
      recognition.lang = "en-GB";
      recognition.interimResults = false;
      recognition.maxAlternatives = 3;
      recognition.onresult = (e) => {
        got = true;
        const alts = [];
        const res = e.results && e.results[0];
        if (res) for (let i = 0; i < res.length; i++) alts.push(res[i].transcript || "");
        let best = alts[0] || "", bestSim = similarity(x.en, best);
        alts.forEach((a) => { const s = similarity(x.en, a); if (s > bestSim) { best = a; bestSim = s; } });
        st.heard = best.trim();
        st.sim = bestSim;
        st.best = Math.max(st.best || 0, bestSim);
        st.micError = null;
      };
      recognition.onerror = (e) => { st.micError = (e && e.error) || "error"; };
      recognition.onend = () => {
        st.listening = false;
        recognition = null;
        if (!got && !st.micError) st.micError = "no-speech";
        if (lesson && lesson.ex === st && view === "lesson") paintExercise();
      };
      st.listening = true;
      st.micError = null;
      recognition.start();
    } catch (e) {
      st.listening = false;
      st.micError = "not-allowed";
    }
    paintExercise();
  }

  function finishSpeak(self) {
    const st = lesson.ex;
    if (!st.resolved) {
      const point = self ? 1 : ((st.best || 0) >= 0.6 ? 1 : 0);
      resolveExercise(point, "pr");
    }
    nextExercise();
  }

  // Repeint uniquement la carte de l'exercice (garde la position de défilement).
  function paintExercise() {
    const card = container.querySelector("#atesEx");
    if (!card || view !== "lesson" || lesson.phase !== "ex") return paint();
    say = [];
    const x = curLesson().exercises[lesson.idx];
    card.innerHTML = exerciseHtml(x);
    // les compteurs de l'en-tête (✓) changent aussi
    const head = container.querySelector(".ates-exhead span:last-child");
    if (head) head.textContent = lesson.results.filter((r) => r === 1).length + " ✓";
    wireExercise(card);
    const fb = card.querySelector("#atesNext, #atesNextSpeak");
    if (fb && fb.scrollIntoView && lesson.ex.resolved) { try { fb.scrollIntoView({ block: "nearest", behavior: "smooth" }); } catch (e) { /* rien */ } }
  }

  function wireExercise(root) {
    root.querySelectorAll("[data-say]").forEach((b) => b.addEventListener("click", () => speakEs(say[Number(b.dataset.say)], /Lentement/.test(b.textContent) ? 0.65 : 0.9)));
    root.querySelectorAll("[data-opt]").forEach((b) => b.addEventListener("click", () => checkMcq(Number(b.dataset.opt))));
    root.querySelectorAll(".ates-hole").forEach((inp) => {
      inp.addEventListener("focus", () => { lastInput = inp; });
      inp.addEventListener("input", () => { lesson.ex.values[Number(inp.dataset.hole)] = inp.value; });
      inp.addEventListener("keydown", (e) => { if (e.key === "Enter") { e.preventDefault(); checkFill(); } });
    });
    root.querySelectorAll("[data-acc]").forEach((b) => {
      b.addEventListener("mousedown", (e) => e.preventDefault());
      b.addEventListener("click", () => {
        const inp = lastInput && root.contains(lastInput) ? lastInput : root.querySelector(".ates-hole");
        if (!inp) return;
        const s = inp.selectionStart != null ? inp.selectionStart : inp.value.length;
        const e2 = inp.selectionEnd != null ? inp.selectionEnd : s;
        inp.value = inp.value.slice(0, s) + b.dataset.acc + inp.value.slice(e2);
        lesson.ex.values[Number(inp.dataset.hole)] = inp.value;
        inp.focus();
        try { inp.setSelectionRange(s + 1, s + 1); } catch (e) { /* rien */ }
      });
    });
    const chk = root.querySelector("#atesCheck"); if (chk) chk.addEventListener("click", checkFill);
    const nxt = root.querySelector("#atesNext"); if (nxt) nxt.addEventListener("click", nextExercise);
    const mic = root.querySelector("#atesMic"); if (mic) mic.addEventListener("click", startMic);
    const self = root.querySelector("#atesSelf"); if (self) self.addEventListener("click", () => finishSpeak(true));
    const ns = root.querySelector("#atesNextSpeak"); if (ns) ns.addEventListener("click", () => finishSpeak(false));
  }

  // ---------- décodeur ----------

  function decoderHtml() {
    return `
      ${backBtn("Atelier", "home")}
      <div class="card ates-hero">
        <div class="ates-hero-title">🔎 Décodeur de verbes</div>
        <div class="ates-hero-sub">Tape une forme que tu ne reconnais pas (ex. <b>serán</b>) : je te dis de quel verbe elle vient, à quel temps, et qui fait l'action. Pas besoin des accents.</div>
      </div>
      <form class="ates-decform" id="atesDecForm" autocomplete="off">
        <input type="text" id="atesDecInput" value="${esc(decoderInput)}" placeholder="ex. hablaremos" autocapitalize="none" autocorrect="off" spellcheck="false" enterkeyhint="search"/>
        <button class="btn btn-primary" type="submit">Décoder</button>
      </form>
      <div class="ates-chips">${DECODER_EXAMPLES.map((w) => `<button class="lt-chip" data-dec="${esc(w)}">${esc(w)}</button>`).join("")}</div>
      <div id="atesDecOut">${decoderInput ? decodeResultsHtml(decoderInput) : ""}</div>`;
  }

  function tenseLabel(k) { return (decoder && decoder.tenses && decoder.tenses[k]) || k; }

  function decodeResultsHtml(input) {
    const words = String(input).trim().split(/\s+/).filter(Boolean).slice(0, 6);
    if (!words.length) return "";
    const multi = words.length > 1;
    return `
      ${multi ? `<div class="ates-note">Plusieurs mots : je les décode un par un (ex. <b>he</b> + <b>hablado</b>, <b>voy</b> + <b>a</b> + <b>comer</b>).</div>` : ""}
      ${words.map((w) => wordResultHtml(decodeWord(w, decoder), multi)).join("")}`;
  }

  function wordResultHtml(r, multi) {
    if (!r.word) return "";
    const blocks = [];
    if (r.accentHint) blocks.push(`<div class="ates-fb ates-fb-accent">🟡 Avec l'accent, ça s'écrit <b>${esc(r.accentHint)}</b>.</div>`);
    r.irregular.forEach((it) => {
      blocks.push(`
        <div class="ates-decres">
          <div class="ates-decform-big">${esc(it.form)}</div>
          <div class="ates-decgrid">
            <span>Verbe</span><b>${esc(it.infinitive)}</b>
            <span>Temps</span><b>${esc(tenseLabel(it.tense))}</b>
            <span>Personne</span><b>${esc(it.person)}</b>
            <span>Sens</span><b>${esc(it.fr)}</b>
          </div>
          <div class="ates-note">⚡ Forme <b>irrégulière</b> : elle ne suit pas « racine + terminaison » — à apprendre telle quelle.</div>
          ${sayBtn(it.form, "ates-say ates-say-right")}
        </div>`);
    });
    if (!r.irregular.length) {
      r.regular.forEach((m) => {
        const infs = m.infinitives;
        blocks.push(`
          <div class="ates-decres">
            <div class="ates-decform-big">${m.loose ? esc(m.fixed) : `<span class="ates-root">${esc(m.stem)}</span><span class="ates-end">${esc(m.end)}</span>`}</div>
            ${m.loose ? `<div class="ates-fb ates-fb-accent">🟡 Avec l'accent : <b>${esc(m.fixed)}</b></div>` : ""}
            <div class="ates-explain">${m.onInf
              ? `<b>${esc(m.stem)}</b> (l'infinitif entier) + <b class="ates-endc">${esc(m.end)}</b> — au ${esc(tenseLabel(m.e.tense).toLowerCase())}, on colle la terminaison à l'infinitif.`
              : `racine <b>${esc(m.stem)}-</b> + terminaison <b class="ates-endc">-${esc(m.end)}</b>`}</div>
            <div class="ates-decgrid">
              <span>Verbe probable</span><b>${infs.map(esc).join(" / ")}${infs.length > 1 ? ` <span class="ates-muted">(vérifie lequel existe au dictionnaire)</span>` : ""}</b>
              <span>Temps</span><b>${esc(tenseLabel(m.e.tense))}</b>
              <span>Personne</span><b>${esc(m.e.person)}</b>
              <span>Sens</span><b>${esc(m.e.fr)}</b>
            </div>
            ${m.e.example ? `<div class="ates-note">Modèle : ${esc(m.e.example)}</div>` : ""}
            ${sayBtn(m.loose ? m.fixed : r.word, "ates-say ates-say-right")}
          </div>`);
      });
    }
    if (r.infinitive && !r.irregular.length) {
      blocks.push(`<div class="ates-decres"><div class="ates-decform-big">${esc(r.word)}</div><div class="ates-explain">Ça ressemble à un <b>infinitif</b> (la forme du dictionnaire, en -ar / -er / -ir${/se$/.test(r.word) ? ", avec « se » collé : verbe pronominal" : ""}).</div></div>`);
    }
    if (!blocks.length) {
      blocks.push(`<div class="ates-decres"><div class="ates-decform-big">${esc(r.word)}</div><div class="ates-note">Je ne reconnais pas cette forme. Vérifie l'orthographe — ou ce n'est peut-être pas un verbe (un nom, un petit mot comme « a », « de », « que »…).</div></div>`);
    }
    return `<div class="card ates-decword">${multi ? `<div class="ates-block-title">« ${esc(r.word)} »</div>` : ""}${blocks.join("")}</div>`;
  }

  function runDecoder(value) {
    decoderInput = String(value || "").trim();
    const out = container.querySelector("#atesDecOut");
    say = [];
    if (out) {
      out.innerHTML = decoderInput ? decodeResultsHtml(decoderInput) : "";
      out.querySelectorAll("[data-say]").forEach((b) => b.addEventListener("click", () => speakEs(say[Number(b.dataset.say)])));
    }
  }

  // ---------- textes annotés ----------

  function textsHtml() {
    return `
      ${backBtn("Atelier", "home")}
      <div class="card ates-hero">
        <div class="ates-hero-title">📖 Textes annotés</div>
        <div class="ates-hero-sub">De petits textes où <b>chaque mot se touche</b> : tu vois si c'est un verbe, un nom, un pronom… avec son sens. Idéal pour repérer les temps « en vrai ».</div>
      </div>
      <div class="ates-lessonlist">
        ${texts.map((t, i) => {
          const p = progress.texts[t.id];
          return `
          <button class="card ates-lessonrow" data-text="${i}">
            <span class="ates-lnum ${p && p.done ? "done" : ""}">${p && p.done ? "✓" : "📄"}</span>
            <span class="ates-chbody">
              <span class="ates-chtitle">${esc(stripTags(t.title))} ${t.level ? `<span class="ates-level">${esc(t.level)}</span>` : ""}</span>
              <span class="ates-chmeta">${esc(stripTags(t.intro || "")).slice(0, 90)}${p && p.done && p.total ? ` · ${p.score} / ${p.total}` : ""}</span>
            </span>
            <span class="ates-chev">›</span>
          </button>`;
        }).join("")}
      </div>`;
  }

  function tokenSpaced(tokens) {
    return tokens.map((tk, i) => {
      const prev = tokens[i - 1];
      const noSpaceBefore = i === 0 || (tk.pos === "ponct" && /^[.,!?;:)»”…]/.test(tk.w)) || (prev && prev.pos === "ponct" && /[¡¿(«“]$/.test(prev.w));
      return { tk, space: !noSpaceBefore };
    });
  }

  function textHtml() {
    const t = texts[textIdx];
    if (!t) return backBtn("Textes", "texts");
    if (!reading || reading.id !== t.id) reading = { id: t.id, sel: null, showTr: false, q: {} };
    const sents = Array.isArray(t.sentences) ? t.sentences : [];
    const used = new Set();
    sents.forEach((s) => s.forEach((tk) => { if (tk.pos && tk.pos !== "ponct") used.add(tk.pos); }));
    const legend = POS_LABELS.filter((p) => used.has(p)).concat(Array.from(used).filter((p) => !POS_LABELS.includes(p)));
    const qs = Array.isArray(t.questions) ? t.questions : [];
    return `
      ${backBtn("Textes", "texts")}
      <h2 class="ates-h2">${esc(stripTags(t.title))} ${t.level ? `<span class="ates-level">${esc(t.level)}</span>` : ""}</h2>
      ${t.intro ? `<div class="ates-note" style="margin-bottom:10px">${t.intro}</div>` : ""}
      <div class="ates-legend">${legend.map((p) => `<span class="ates-pos ates-pos-${posSlug(p)}">${esc(p)}</span>`).join("")}</div>
      <div class="card ates-reader">
        ${sents.map((s, si) => `
          <div class="ates-sent">
            ${sayBtn(s.map((tk) => tk.w).join(" ").replace(/\s+([.,!?;:])/g, "$1").replace(/([¡¿])\s+/g, "$1"), "ates-say ates-say-sm")}
            <div class="ates-sent-words">${tokenSpaced(s).map(({ tk, space }, wi) => `${space ? " " : ""}${tk.pos === "ponct" ? `<span class="ates-punct">${esc(tk.w)}</span>` : `<button class="ates-word ates-c-${posSlug(tk.pos)}${reading.sel === si + ":" + wi ? " sel" : ""}" data-w="${si}:${wi}">${esc(tk.w)}</button>`}`).join("")}</div>
          </div>`).join("")}
      </div>
      <div class="ates-wordpanel" id="atesWordPanel">${wordPanelHtml(t)}</div>
      <button class="btn btn-ghost ates-wide" id="atesTr">${reading.showTr ? "Masquer la traduction" : "Afficher la traduction"}</button>
      ${reading.showTr ? `<div class="card ates-block ates-text">${esc(t.translation || "")}</div>` : ""}
      ${qs.length ? `
        <div class="dash-box"><h3>❓ As-tu compris ?</h3>
          ${qs.map((q, qi) => textQuestionHtml(q, qi)).join("")}
          <div id="atesTextScore">${textScoreHtml(t)}</div>
        </div>` : ""}`;
  }

  function wordPanelHtml(t) {
    if (!reading.sel) return `<div class="ates-muted">👆 Touche un mot du texte pour voir ce que c'est.</div>`;
    const [si, wi] = reading.sel.split(":").map(Number);
    const tk = (t.sentences[si] || [])[wi];
    if (!tk) return "";
    return `
      <div class="ates-wp-head">
        <b class="ates-wp-word">${esc(tk.w)}</b>
        <span class="ates-pos ates-pos-${posSlug(tk.pos)}">${esc(tk.pos || "")}</span>
        ${sayBtn(tk.w, "ates-say ates-say-sm")}
      </div>
      ${tk.fr ? `<div class="ates-wp-fr">= ${esc(tk.fr)}</div>` : ""}
      ${tk.info ? `<div class="ates-note">${esc(tk.info)}</div>` : ""}`;
  }

  function textQuestionHtml(q, qi) {
    const st = reading.q[qi] || { wrong: [], resolved: false };
    return `
      <div class="card ates-block" data-tq="${qi}">
        <div class="ates-q"><b>${qi + 1}.</b> ${q.q}</div>
        <div class="lt-opts">
          ${q.opts.map((o, i) => {
            let cls = "lt-opt";
            if (st.resolved && i === q.correct) cls += " correct";
            else if (st.wrong.includes(i)) cls += " incorrect";
            return `<button class="${cls}" data-tqo="${qi}:${i}" ${st.resolved || st.wrong.includes(i) ? "disabled" : ""}>${o}</button>`;
          }).join("")}
        </div>
        ${!st.resolved && st.wrong.length ? `<div class="ates-fb ates-fb-bad">Pas tout à fait — réessaie.</div>` : ""}
        ${st.resolved ? `<div class="ates-fb ${st.point ? "ates-fb-ok" : "ates-fb-bad"}">${st.point ? "✅ Bravo !" : st.wrong.length >= 2 ? "❌ La bonne réponse est en vert." : "✅ Oui (au 2e essai)."}</div>${q.why ? `<div class="ates-exwhy">💡 ${q.why}</div>` : ""}` : ""}
      </div>`;
  }

  function textScoreHtml(t) {
    const qs = t.questions || [];
    const done = qs.filter((_, i) => reading.q[i] && reading.q[i].resolved).length;
    if (!qs.length || done < qs.length) return "";
    const score = qs.reduce((s, _, i) => s + (reading.q[i].point || 0), 0);
    return `<div class="card lt-result ates-result"><div class="lt-badge">Texte terminé</div><div class="lt-score">${score}<span class="lt-score-of"> / ${qs.length}</span></div></div>`;
  }

  function answerTextQ(qi, i) {
    const t = texts[textIdx], q = t.questions[qi];
    const st = reading.q[qi] || (reading.q[qi] = { wrong: [], resolved: false, attempts: 0 });
    if (st.resolved) return;
    st.attempts = (st.attempts || 0) + 1;
    if (i === q.correct) { st.resolved = true; st.point = st.attempts === 1 ? 1 : 0; }
    else { st.wrong.push(i); if (st.attempts >= 2) { st.resolved = true; st.point = 0; } }
    if (st.resolved) { try { recordSkill("en", "ce", st.point); } catch (e) { /* rien */ } }
    const card = container.querySelector(`[data-tq="${qi}"]`);
    if (card) {
      card.outerHTML = textQuestionHtml(q, qi);
      const fresh = container.querySelector(`[data-tq="${qi}"]`);
      fresh.querySelectorAll("[data-tqo]").forEach(wireTqo);
    }
    const qs = t.questions || [];
    if (qs.every((_, k) => reading.q[k] && reading.q[k].resolved)) {
      const score = qs.reduce((s, _, k) => s + (reading.q[k].point || 0), 0);
      const prev = progress.texts[t.id];
      progress.texts[t.id] = { done: true, score: Math.max(score, prev && prev.score || 0), total: qs.length, at: Date.now() };
      saveProgress(progress);
      const sc = container.querySelector("#atesTextScore");
      if (sc) sc.innerHTML = textScoreHtml(t);
    }
  }
  function wireTqo(b) {
    b.addEventListener("click", () => { const [qi, i] = b.dataset.tqo.split(":").map(Number); answerTextQ(qi, i); });
  }

  // ---------- branchements ----------

  function wire() {
    const root = container.querySelector(".ates");
    root.querySelectorAll("[data-go]").forEach((b) => b.addEventListener("click", () => {
      if (b.dataset.go === "chapter") lesson = null;
      go(b.dataset.go);
    }));
    root.querySelectorAll("[data-chapter]").forEach((b) => b.addEventListener("click", () => { chIdx = Number(b.dataset.chapter); go("chapter"); }));
    root.querySelectorAll("[data-lesson]").forEach((b) => b.addEventListener("click", () => startLesson(chIdx, Number(b.dataset.lesson))));
    root.querySelectorAll("[data-open-lesson]").forEach((b) => b.addEventListener("click", () => {
      const [ci, li] = b.dataset.openLesson.split(":").map(Number);
      startLesson(ci, li);
    }));
    root.querySelectorAll("[data-text]").forEach((b) => b.addEventListener("click", () => { textIdx = Number(b.dataset.text); reading = null; go("text"); }));

    if (view === "lesson" && lesson) {
      const s = root.querySelector("#atesStart");
      if (s) s.addEventListener("click", () => { lesson.phase = "ex"; lesson.idx = 0; lesson.results = []; lesson.ex = null; stopSpeech(); paint(); container.scrollTop = 0; });
      const f = root.querySelector("#atesFinishNoEx");
      if (f) f.addEventListener("click", finishLesson);
      const r = root.querySelector("#atesRedo");
      if (r) r.addEventListener("click", () => startLesson(chIdx, lIdx, "ex"));
      // boutons 🔊 de la partie « apprendre » + la carte d'exercice
      root.querySelectorAll(".ates-example [data-say]").forEach((b) => b.addEventListener("click", () => speakEs(say[Number(b.dataset.say)])));
      const card = root.querySelector("#atesEx");
      if (card) wireExercise(card);
    }

    if (view === "decoder") {
      const form = root.querySelector("#atesDecForm");
      const input = root.querySelector("#atesDecInput");
      form.addEventListener("submit", (e) => { e.preventDefault(); runDecoder(input.value); input.blur(); });
      root.querySelectorAll("[data-dec]").forEach((b) => b.addEventListener("click", () => { input.value = b.dataset.dec; runDecoder(b.dataset.dec); }));
      root.querySelectorAll("#atesDecOut [data-say]").forEach((b) => b.addEventListener("click", () => speakEs(say[Number(b.dataset.say)])));
    }

    if (view === "text") {
      const t = texts[textIdx];
      root.querySelectorAll(".ates-sent > [data-say]").forEach((b) => b.addEventListener("click", () => speakEs(say[Number(b.dataset.say)], 0.85)));
      const panel = root.querySelector("#atesWordPanel");
      const wirePanel = () => panel.querySelectorAll("[data-say]").forEach((b) => b.addEventListener("click", () => speakEs(say[Number(b.dataset.say)])));
      wirePanel();
      root.querySelectorAll("[data-w]").forEach((b) => b.addEventListener("click", () => {
        root.querySelectorAll(".ates-word.sel").forEach((x) => x.classList.remove("sel"));
        b.classList.add("sel");
        reading.sel = b.dataset.w;
        panel.innerHTML = wordPanelHtml(t);
        wirePanel();
      }));
      const tr = root.querySelector("#atesTr");
      if (tr) tr.addEventListener("click", () => { const top = container.scrollTop; reading.showTr = !reading.showTr; paint(); container.scrollTop = top; });
      root.querySelectorAll("[data-tqo]").forEach(wireTqo);
    }
  }

  paint();
}
