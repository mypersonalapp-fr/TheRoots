// The Roots — Compréhension orale et écrite : espace d'immersion libre,
// indépendant de la progression par palier (voir comp_indep_note). Un
// sélecteur de LANGUE (anglais/espagnol/portugais) s'ajoute maintenant au-
// dessus du sélecteur de niveau — chaque langue a son propre contenu et sa
// propre progression, complètement indépendants. Contenu réel aujourd'hui,
// uniquement en anglais : niveau A1 — 25 textes de lecture (affichage
// progressif, un par un, questions + correction — voir
// COMPREHENSION_ECRITE_EN) et 5 vidéos fournies par Ashley (voir
// COMPREHENSION_ORALE_EN) ; niveau A2 — 8 extraits de films fournis par
// Ashley (voir COMPREHENSION_ORALE_A2_EN), pas encore de textes de lecture.
// Espagnol et portugais n'ont pas encore de contenu ici (seul le programme
// par palier existe pour l'espagnol A1, dans "Mes cours") : sélectionner ces
// langues affiche "bientôt disponible", sans jamais planter. Toute
// combinaison langue/niveau sans contenu, dans l'une ou l'autre section,
// affiche ce même message.

import { store } from "../data/store.js?v=20260930a";
import { t } from "../data/i18n.js?v=20260930a";
import { recordSkill } from "../data/progress.js?v=20260930a";
import { COMPREHENSION_ECRITE_EN } from "../data/comprehension-ecrite-en.js?v=20260930a";
import { COMPREHENSION_ECRITE_A2_EN } from "../data/comprehension-ecrite-a2-en.js?v=20260930a";
import { COMPREHENSION_ORALE_EN } from "../data/comprehension-orale-en.js?v=20260930a";
import { COMPREHENSION_ORALE_A2_EN } from "../data/comprehension-orale-a2-en.js?v=20260930a";
import { COMPREHENSION_ECRITE_B1_EN } from "../data/comprehension-ecrite-b1-en.js?v=20261001a";
import { COMPREHENSION_ECRITE_B2_EN } from "../data/comprehension-ecrite-b2-en.js?v=20261001a";
import { COMPREHENSION_ORALE_B1_EN } from "../data/comprehension-orale-dialogues-b1-en.js?v=20261001a";
import { COMPREHENSION_ORALE_B2_EN } from "../data/comprehension-orale-dialogues-b2-en.js?v=20261001a";

const LEVELS = ["A1", "A2", "B1", "B2", "C1", "C2"];
const LANG_FLAGS = { en: "🇬🇧", es: "🇪🇸", pt: "🇵🇹" };

// Codes acceptés par LanguageTool (orthographe/grammaire) selon la langue
// apprise sélectionnée — l'anglais utilisait "en-US" en dur avant que
// l'espagnol/le portugais existent ici.
const LANGUAGETOOL_LANG = { en: "en-US", es: "es", pt: "pt-PT" };

// Contenu disponible par LANGUE puis par niveau (anglais uniquement pour
// l'instant) — une langue ou un niveau absent de l'une de ces deux tables
// affiche "bientôt disponible" pour la section correspondante, même si
// l'autre section (ou l'autre langue) a du contenu.
const ORAL_BY_LANG = {
  en: { A1: COMPREHENSION_ORALE_EN, A2: COMPREHENSION_ORALE_A2_EN },
};
const ECRITE_BY_LANG = {
  en: { A1: COMPREHENSION_ECRITE_EN, A2: COMPREHENSION_ECRITE_A2_EN, B1: COMPREHENSION_ECRITE_B1_EN, B2: COMPREHENSION_ECRITE_B2_EN },
};
const DIALOGS_BY_LANG = {
  en: { B1: COMPREHENSION_ORALE_B1_EN, B2: COMPREHENSION_ORALE_B2_EN },
};

// Clé de sauvegarde de la progression en compréhension écrite, PAR LANGUE ET
// PAR NIVEAU : les textes de chaque langue/niveau ont leurs propres id (1,
// 2, 3…), et la progression (currentIndex, results) ne doit donc pas être
// partagée entre deux listes différentes, sinon avancer dans l'une dérègle
// l'autre. "en" tout seul est gardé pour l'anglais A1 (clé historique, ne
// change pas pour ne pas perdre la progression déjà enregistrée) ; toutes
// les autres combinaisons utilisent "<langue>-<niveau>".
function ecriteStoreKey(langCode, level) {
  if (langCode === "en" && level === "A1") return "en";
  return `${langCode}-${level}`;
}

// Réponse libre à une question de compréhension : l'apprenant écrit sa
// propre réponse (pas un QCM — demande explicite d'Ashley le 19/09 au soir :
// "sa main et sa puissance créative"). On juge le FOND en cherchant un des
// mots/expressions clés attendus dans la réponse (recherche souple, sans
// tenir compte des accents/majuscules/ponctuation) — pas une IA qui
// comprendrait vraiment la phrase, mais une vraie zone de texte libre avec
// une correction automatique raisonnable pour un niveau A1.
function normalizeAnswer(s) {
  return (s || "")
    .toLowerCase()
    .normalize("NFD").replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9 ]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}
// Mots-outils ignorés quand on compare la réponse au mot-à-mot du texte —
// volontairement SANS les mots de nombre (twenty, one, two…), qui sont
// souvent la réponse elle-même (âge, heure, quantité...).
const STOPWORDS = new Set(["the", "a", "an", "is", "are", "was", "were", "am", "be", "been", "being", "in", "on", "at", "to", "of", "and", "or", "but", "so", "because", "i", "we", "they", "he", "she", "it", "you", "my", "his", "her", "their", "our", "your", "do", "does", "did", "has", "have", "had", "with", "for", "this", "that", "these", "those", "from", "by", "as", "not", "there", "here", "also", "very", "some", "any"]);
function significantWords(s) {
  return normalizeAnswer(s).split(" ").filter((w) => w.length >= 3 && !STOPWORDS.has(w));
}
function contentMatches(answer, q) {
  const norm = normalizeAnswer(answer);
  if (!norm) return false;
  // 1) correspondance directe avec les mots-clés attendus (la plus fiable).
  if (q.accepted.some((a) => norm.includes(normalizeAnswer(a)))) return true;
  // 2) sinon, on vérifie que la réponse reprend au moins un mot important de
  // la phrase du texte qui contient la réponse — à ce niveau, l'apprenant
  // ne peut de toute façon construire sa phrase qu'avec des mots déjà vus
  // dans le texte qu'il est en train de lire.
  const answerWords = new Set(significantWords(answer));
  const sw = significantWords(q.answerSentence);
  const hits = sw.filter((w) => answerWords.has(w)).length;
  // Phrases longues (B1/B2) : au moins 2 mots importants en commun.
  return sw.length >= 9 ? hits >= 2 : hits >= 1;
}
// Vraie vérification orthographe/grammaire (LanguageTool, API publique
// gratuite, sans clé — même outil que pour l'expression écrite), dans la
// langue apprise sélectionnée (ltLang, ex. "en-US"/"es"/"pt-PT").
async function checkSpelling(text, ltLang) {
  const res = await fetch("https://api.languagetool.org/v2/check", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({ text, language: ltLang || "en-US" }).toString(),
  });
  if (!res.ok) throw new Error("languagetool_network");
  const data = await res.json();
  return data.matches || [];
}

// ---------- Contenu : cases (mosaïque) ----------
// Lecture : A1/A2 = séries de 5 textes ; B1/B2 = un palier (6 textes) par case.
function writtenGroups(texts) {
  if (texts[0] && texts[0].palier) {
    const out = [];
    texts.forEach((x) => {
      let g = out.find((o) => o.code === x.palier);
      if (!g) { g = { code: x.palier, title: x.palierTitle, items: [] }; out.push(g); }
      g.items.push(x);
    });
    return out;
  }
  const out = [];
  for (let i = 0; i < texts.length; i += 5) {
    const items = texts.slice(i, i + 5);
    out.push({ code: `${i + 1}–${i + items.length}`, title: `Série ${out.length + 1}`, items });
  }
  return out;
}

const esc = (s) => String(s == null ? "" : s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

// ---------- Voix de synthèse (dialogues) ----------
const FEM = /female|samantha|karen|serena|moira|tessa|fiona|victoria|susan|kate|zira|hazel|libby|sonia|jenny|aria|martha|allison|ava|nicky/i;
function pickVoice(speakers, idx) {
  if (!("speechSynthesis" in window)) return null;
  const vs = speechSynthesis.getVoices().filter((v) => /^en/i.test(v.lang));
  if (!vs.length) return null;
  const sp = speakers[idx];
  const sameGender = speakers.map((s, i) => [s, i]).filter(([s]) => s.voice === sp.voice).map(([, i]) => i);
  const nth = sameGender.indexOf(idx);
  const fs = vs.filter((v) => FEM.test(v.name)), ms = vs.filter((v) => !FEM.test(v.name));
  const pool = sp.voice === "f" ? (fs.length ? fs : vs) : (ms.length ? ms : vs);
  return pool[nth % pool.length];
}
function say(speakers, idx, text, rate) {
  if (!("speechSynthesis" in window)) return;
  try {
    speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    const v = pickVoice(speakers, idx);
    if (v) u.voice = v;
    u.lang = (v && v.lang) || "en-GB";
    u.rate = rate || 0.95;
    u.pitch = speakers[idx].voice === "f" ? 1.12 : 0.88;
    speechSynthesis.speak(u);
  } catch (e) { /* synthèse indisponible : les sous-titres restent affichables */ }
}
function stopSay() { try { if ("speechSynthesis" in window) speechSynthesis.cancel(); } catch (e) { /* rien */ } }

export function renderComprehension(container) {
  const { settings } = store.get();
  const lang = settings.interfaceLang;
  let selectedLang = settings.primaryLearningLang || "en";
  let selectedLevel = "A1";
  let tab = "r"; // "r" lecture, "o" écoute

  // Lecture en cours (non persistée, sauf les résultats par texte)
  let rd = null; // { g, i, answers, graded, grading, results }
  // Écoute : vidéo (A1/A2) ou dialogue (B1/B2)
  let selectedVideoId = null;
  let oralChecking = false;
  let oralCheckIssues = null;
  let dl = null; // état d'un dialogue

  const ecriteTexts = () => (ECRITE_BY_LANG[selectedLang] || {})[selectedLevel] || null;
  const oralVideos = () => (ORAL_BY_LANG[selectedLang] || {})[selectedLevel] || null;
  const oralDialogs = () => (DIALOGS_BY_LANG[selectedLang] || {})[selectedLevel] || null;
  const ecriteKey = () => ecriteStoreKey(selectedLang, selectedLevel);

  function resetView() { rd = null; selectedVideoId = null; oralCheckIssues = null; dl = null; stopSay(); }

  function paint() {
    const notReady = `<div class="card" style="margin-top:14px;color:var(--ink-soft);font-size:13px">${t("prog_not_ready", lang)}</div>`;
    let body;
    if (tab === "r") body = rd ? readHtml() : gridWritten(notReady);
    else if (dl) body = dialogHtml();
    else if (selectedVideoId) body = videoHtml();
    else body = gridOral(notReady);
    const inRun = (tab === "r" && rd) || (tab === "o" && (dl || selectedVideoId));
    container.innerHTML = `
      ${inRun ? "" : `
      <div class="dash-greeting" style="padding:4px 0 6px">${t("comp_intro", lang)}</div>
      <div class="card" style="font-size:12.5px;color:var(--ink-soft);margin-bottom:12px">${t("comp_indep_note", lang)}</div>
      <div class="level-chip-row lang-chip-row" id="compLangs">
        ${settings.langs.map((l) => `<button class="level-chip${l.code === selectedLang ? " active" : ""}" data-lang="${l.code}">${LANG_FLAGS[l.code] || ""} ${l.label}</button>`).join("")}
      </div>
      <div class="level-chip-row" id="compLevels">
        ${LEVELS.map((l) => `<button class="level-chip${l === selectedLevel ? " active" : ""}" data-level="${l}">${l}</button>`).join("")}
      </div>
      <div class="level-chip-row" id="compTabs">
        <button class="level-chip${tab === "r" ? " active" : ""}" data-tab="r">📖 Lecture</button>
        <button class="level-chip${tab === "o" ? " active" : ""}" data-tab="o">🎧 Écoute</button>
      </div>`}
      ${body}
    `;
  }

  // ---------- Cases ----------
  function tileHtml(i, big, small, done, act, extra) {
    return `<button class="comp-tile comp-t${i % 4}${done ? " done" : ""}" data-act="${act}" ${extra}><b>${done ? "✓ " : ""}${big}</b><span>${small}</span></button>`;
  }

  function gridWritten(notReady) {
    const texts = ecriteTexts();
    if (!texts) return notReady;
    const res = store.getCompProgress("ecrite", ecriteKey()).results || {};
    const groups = writtenGroups(texts);
    return `
      <div class="comp-hint">Une case par palier. Touche une case pour lire ses textes un par un.</div>
      <div class="comp-mos">${groups.map((g, i) => {
        const n = g.items.filter((x) => res[x.id]).length;
        return tileHtml(i, esc(g.code), `${esc(g.title)}<br>${n} / ${g.items.length}`, n === g.items.length, "open-group", `data-g="${i}"`);
      }).join("")}</div>`;
  }

  function gridOral(notReady) {
    const dlgs = oralDialogs();
    const vids = oralVideos();
    const saved = store.getCompProgress("orale", selectedLang).results || {};
    if (dlgs) {
      return `
        <div class="comp-hint">Dialogues du quotidien avec voix de synthèse. Tu joues l'un des personnages : 3 ou 4 fois, tu choisis ta réponse.</div>
        <div class="comp-mos">${dlgs.map((d, i) => {
          const r = saved[`${selectedLevel}-d${d.id}`];
          return tileHtml(i, "🎧", `${esc(d.topicFr)}<br>${r ? `${r.score} / ${r.total}` : esc(d.title)}`, !!r, "open-dlg", `data-d="${d.id}"`);
        }).join("")}</div>`;
    }
    if (vids) {
      return `
        <div class="comp-hint">${t("comp_oral_desc", lang)}</div>
        <div class="comp-mos">${vids.map((v, i) => tileHtml(i, "▶", esc(v.title), !!saved[v.videoId], "open-video", `data-video="${v.videoId}"`)).join("")}</div>`;
    }
    return notReady;
  }

  // ---------- Lecture : pile de cartes ----------
  function openGroup(gi) {
    const groups = writtenGroups(ecriteTexts());
    const g = groups[gi];
    const res = store.getCompProgress("ecrite", ecriteKey()).results || {};
    let i = g.items.findIndex((x) => !res[x.id]);
    if (i < 0) i = 0;
    rd = { g, gi, i, answers: {}, graded: false, grading: false, results: null };
  }

  function readHtml() {
    const { g, i } = rd;
    const x = g.items[i];
    const last = i === g.items.length - 1;
    const correctCount = rd.graded ? rd.results.filter((r) => r.contentOk && r.spellingIssues.length === 0).length : 0;
    return `
      <div class="comp-top"><button class="top-back comp-back" data-act="back">‹ Retour aux cases</button><span class="comp-hint" style="margin:0">${esc(g.code)} · carte ${i + 1} sur ${g.items.length}</span></div>
      <div class="comp-bar"><i style="width:${((i + 1) / g.items.length) * 100}%"></i></div>
      <div class="comp-sheet comp-t${(rd.gi + i) % 4}">
        <h3>${esc(x.title)}</h3>
        <div class="lt-passage">${x.body}</div>
        ${x.questions.map((q, k) => {
          const r = rd.graded ? rd.results[k] : null;
          const good = r && r.contentOk && r.spellingIssues.length === 0;
          return `
          <div style="margin-top:12px">
            <div style="font-weight:700;font-size:13px">${esc(q.q)}</div>
            <input type="text" class="translate-lang-select" data-q="${k}" value="${esc(rd.answers[k] || "")}" placeholder="${t("comp_ecrite_answer_placeholder", lang)}" style="width:100%;box-sizing:border-box;margin-top:8px" ${rd.graded ? "disabled" : ""} autocapitalize="none"/>
            ${r ? `
              <div style="font-size:12px;margin-top:6px;color:${good ? "var(--accent)" : "var(--pop)"}">${good ? t("comp_ecrite_correct", lang) : t("comp_ecrite_incorrect", lang)}</div>
              ${!r.contentOk ? `<div style="font-size:12px;color:var(--ink-soft);margin-top:2px">${t("comp_ecrite_correction_answer", lang, { answer: esc(q.accepted[0] || q.answerSentence) })}</div>` : ""}
              ${r.spellingIssues.length ? `<ul style="margin:4px 0 0;padding-left:16px;font-size:12px;color:var(--ink-soft)">${r.spellingIssues.slice(0, 3).map((m) => `<li>${esc(m.message)}${m.replacements && m.replacements[0] ? ` → <strong>${esc(m.replacements[0].value)}</strong>` : ""}</li>`).join("")}</ul>` : ""}
            ` : ""}
          </div>`;
        }).join("")}
      </div>
      ${!rd.graded
        ? `<button class="btn btn-primary" data-act="submit" style="width:100%;margin-top:12px" ${rd.grading ? "disabled" : ""}>${rd.grading ? t("expr_ecrite_checking", lang) : t("comp_ecrite_submit_btn", lang)}</button>`
        : `<div class="card" style="margin-top:12px"><div style="font-weight:800">${t("comp_ecrite_correction_title", lang)}</div><div style="font-size:13px;margin-top:4px">${t("comp_ecrite_score", lang, { score: correctCount, total: x.questions.length })}</div></div>`}
      <div class="comp-nav">
        <button class="btn btn-ghost" data-act="prev" ${i === 0 ? "disabled" : ""}>‹ Précédente</button>
        <button class="btn btn-primary" data-act="${last ? "finish" : "next"}">${last ? "Terminer" : "Suivante ›"}</button>
      </div>`;
  }

  async function submitRead() {
    const x = rd.g.items[rd.i];
    rd.grading = true; paint();
    const results = await Promise.all(x.questions.map(async (q, k) => {
      const answer = rd.answers[k] || "";
      const contentOk = contentMatches(answer, q);
      let spellingIssues = [];
      if (answer.trim()) {
        try { spellingIssues = await checkSpelling(answer, LANGUAGETOOL_LANG[selectedLang]); } catch (e) { /* correcteur indisponible */ }
      }
      return { contentOk, spellingIssues };
    }));
    rd.grading = false; rd.graded = true; rd.results = results;
    results.forEach((r) => recordSkill(selectedLang, "ce", r.contentOk ? 1 : 0));
    const correct = results.filter((r) => r.contentOk && r.spellingIssues.length === 0).length;
    const prev = store.getCompProgress("ecrite", ecriteKey()).results || {};
    store.setCompProgress("ecrite", ecriteKey(), { results: { ...prev, [x.id]: { correct, total: x.questions.length } } });
    paint();
  }

  function goCard(delta) {
    const n = rd.i + delta;
    if (n < 0 || n >= rd.g.items.length) return;
    rd.i = n; rd.answers = {}; rd.graded = false; rd.results = null; paint();
  }

  // ---------- Écoute : vidéos (A1/A2) ----------
  function videoHtml() {
    const video = oralVideos().find((v) => v.videoId === selectedVideoId);
    const saved = (store.getCompProgress("orale", selectedLang).results || {})[selectedVideoId];
    const savedText = typeof saved === "string" ? saved : "";
    return `
      <div class="comp-top"><button class="top-back comp-back" data-act="back">‹ Retour aux cases</button><span class="comp-hint" style="margin:0">${esc(video.title)}</span></div>
      <div class="card-media" style="margin-top:6px;aspect-ratio:16/9;padding:0;overflow:hidden">
        <iframe src="https://www.youtube.com/embed/${video.videoId}" title="${esc(video.title)}" style="width:100%;height:100%;border:0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
      <textarea class="translate-area" id="oralSummary" placeholder="${t("comp_orale_summary_placeholder", lang)}" style="min-height:90px;margin-top:10px">${esc(savedText)}</textarea>
      <button class="btn btn-primary" data-act="save-summary" style="width:100%;margin-top:8px" ${oralChecking ? "disabled" : ""}>${oralChecking ? t("expr_ecrite_checking", lang) : t("comp_summary_btn", lang)}</button>
      ${oralCheckIssues !== null ? `<div class="card" style="margin-top:8px">${oralCheckIssues.length === 0
        ? `<div style="font-size:13px;color:var(--accent);font-weight:700">${t("expr_ecrite_no_issues", lang)}</div>`
        : `<ul style="margin:0;padding-left:16px;font-size:12.5px;color:var(--ink-soft)">${oralCheckIssues.slice(0, 6).map((m) => `<li style="margin-bottom:4px">${esc(m.message)}${m.replacements && m.replacements[0] ? ` → <strong>${esc(m.replacements[0].value)}</strong>` : ""}</li>`).join("")}</ul>`}</div>` : ""}`;
  }

  async function saveSummary() {
    const text = container.querySelector("#oralSummary").value;
    const prev = store.getCompProgress("orale", selectedLang).results || {};
    store.setCompProgress("orale", selectedLang, { results: { ...prev, [selectedVideoId]: text } });
    if (!text.trim()) { oralCheckIssues = null; paint(); return; }
    oralChecking = true; paint();
    let issues = [];
    try { issues = await checkSpelling(text, LANGUAGETOOL_LANG[selectedLang]); } catch (e) { /* le résumé reste enregistré */ }
    oralChecking = false; oralCheckIssues = issues; paint();
  }

  // ---------- Écoute : dialogues interactifs (B1/B2) ----------
  const hasTTS = "speechSynthesis" in window;
  function startDialog(id) {
    const d = oralDialogs().find((x) => x.id === id);
    dl = { d, phase: "intro", i: 0, chosen: {}, wrong: {}, subs: !hasTTS, qi: 0, picked: null, score: 0, qdone: [] };
    paint();
  }
  const rate = () => (selectedLevel === "B2" ? 1 : 0.92);
  function speakLine(k) {
    const line = dl.d.lines[k];
    if (!line) return;
    if (line.choice) {
      if (dl.chosen[k] != null) say(dl.d.speakers, line.choice.s, line.choice.options[dl.chosen[k]].t, rate());
    } else say(dl.d.speakers, line.s, line.t, rate());
  }
  function lineBubble(k) {
    const line = dl.d.lines[k];
    const spk = line.choice ? line.choice.s : line.s;
    const txt = line.choice ? line.choice.options[dl.chosen[k]].t : line.t;
    const me = spk === (dl.d.lines.find((l) => l.choice) || { choice: { s: 1 } }).choice.s;
    return `<div class="dlg-bub ${me ? "me" : ""}"><div class="dlg-who">${esc(dl.d.speakers[spk].name)}</div>
      <button class="dlg-say" data-act="say" data-k="${k}">🔊 Réécouter</button>
      ${dl.subs ? `<div class="dlg-txt">${esc(txt)}</div>` : ""}</div>`;
  }
  function dialogHtml() {
    const d = dl.d;
    const top = `<div class="comp-top"><button class="top-back comp-back" data-act="back">‹ Retour aux cases</button><span class="comp-hint" style="margin:0">${esc(d.title)} · ${selectedLevel}</span></div>`;
    if (dl.phase === "intro") {
      return `${top}<div class="card"><div style="font-weight:800">${esc(d.title)}</div>
        <p style="font-size:13.5px;margin:6px 0">${esc(d.situationFr)}</p>
        <p style="font-size:12.5px;color:var(--ink-soft);margin:0">Personnages : ${d.speakers.map((s) => esc(s.name)).join(", ")}. Écoute chaque réplique, puis réponds quand c'est ton tour. ${hasTTS ? "" : "Ton appareil n'a pas de voix de synthèse : le texte s'affiche."}</p>
        <button class="btn btn-primary" data-act="dlg-start" style="width:100%;margin-top:12px">▶ Commencer</button></div>`;
    }
    if (dl.phase === "play") {
      const lines = d.lines;
      let h = `${top}<label class="comp-subs"><input type="checkbox" data-act="subs" ${dl.subs ? "checked" : ""}/> Afficher le texte (sous-titres)</label><div class="dlg-chat">`;
      for (let k = 0; k <= dl.i; k++) {
        const line = lines[k];
        if (line.choice && dl.chosen[k] == null) {
          h += `<div class="card" style="margin-block:8px"><div style="font-weight:800;font-size:13.5px">${esc(line.choice.promptFr)}</div>
            ${line.choice.options.map((o, j) => `<button class="dlg-opt${dl.wrong[`${k}-${j}`] ? " no" : ""}" data-act="pick" data-j="${j}">${esc(o.t)}${dl.wrong[`${k}-${j}`] ? `<div class="dlg-why">${esc(o.whyFr)}</div>` : ""}</button>`).join("")}</div>`;
        } else {
          h += lineBubble(k);
          if (line.choice) h += `<div class="dlg-why" style="margin:-2px 0 6px 6px">✓ ${esc(line.choice.options[dl.chosen[k]].whyFr)}</div>`;
        }
      }
      h += `</div>`;
      const cur = lines[dl.i];
      const blocked = cur.choice && dl.chosen[dl.i] == null;
      if (!blocked) {
        h += dl.i < lines.length - 1
          ? `<button class="btn btn-primary" data-act="dlg-next" style="width:100%;margin-top:10px">Suite ▶</button>`
          : `<button class="btn btn-primary" data-act="dlg-quiz" style="width:100%;margin-top:10px">Passer aux questions</button>`;
      }
      return h;
    }
    if (dl.phase === "quiz") {
      const q = d.questions[dl.qi];
      const done = dl.picked != null;
      return `${top}<div class="comp-bar"><i style="width:${((dl.qi + 1) / d.questions.length) * 100}%"></i></div>
        <div class="card"><div class="comp-hint" style="margin:0">Question ${dl.qi + 1} sur ${d.questions.length}</div>
        <div style="font-weight:800;margin:6px 0">${esc(q.q)}</div>
        ${q.opts.map((o, j) => `<button class="dlg-opt${done && j === q.correct ? " ok" : ""}${done && j === dl.picked && j !== q.correct ? " no" : ""}" data-act="answer" data-j="${j}" ${done ? "disabled" : ""}>${esc(o)}</button>`).join("")}
        ${done ? `<div class="dlg-why" style="margin-top:8px">${esc(q.whyFr)}</div>
          <button class="btn btn-primary" data-act="qnext" style="width:100%;margin-top:10px">${dl.qi < d.questions.length - 1 ? "Question suivante" : "Voir mon résultat"}</button>` : ""}</div>`;
    }
    // fin
    return `${top}<div class="card"><div style="font-weight:800;font-size:17px">Résultat : ${dl.score} / ${d.questions.length}</div>
      <div style="font-weight:700;margin-top:12px">Expressions à retenir</div>
      <ul style="margin:6px 0 0;padding-left:18px;font-size:13.5px">${d.expressions.map((e) => `<li><strong>${esc(e.en)}</strong> — ${esc(e.fr)}</li>`).join("")}</ul>
      <details style="margin-top:12px"><summary style="font-weight:700;cursor:pointer">Transcription complète</summary>
        <div style="margin-top:8px;font-size:13px">${d.lines.map((l, k) => { const s = l.choice ? l.choice.s : l.s; const tx = l.choice ? (l.choice.options.find((o) => o.ok) || l.choice.options[0]).t : l.t; return `<p style="margin:0 0 6px"><strong>${esc(d.speakers[s].name)} :</strong> ${esc(tx)}</p>`; }).join("")}</div></details>
      <button class="btn btn-primary" data-act="dlg-again" style="width:100%;margin-top:12px">Refaire ce dialogue</button></div>`;
  }

  function dlgNext() {
    stopSay();
    dl.i += 1;
    paint();
    speakLine(dl.i);
  }

  // ---------- Événements (délégation : un seul écouteur) ----------
  container.addEventListener("click", async (e) => {
    const chip = e.target.closest(".level-chip");
    if (chip && chip.dataset.lang) { selectedLang = chip.dataset.lang; resetView(); paint(); return; }
    if (chip && chip.dataset.level) { selectedLevel = chip.dataset.level; resetView(); paint(); return; }
    if (chip && chip.dataset.tab) { tab = chip.dataset.tab; resetView(); paint(); return; }
    const b = e.target.closest("[data-act]");
    if (!b || b.tagName === "INPUT") return;
    const act = b.dataset.act;
    if (act === "open-group") { openGroup(Number(b.dataset.g)); paint(); }
    else if (act === "open-video") { selectedVideoId = b.dataset.video; oralCheckIssues = null; paint(); }
    else if (act === "open-dlg") startDialog(Number(b.dataset.d));
    else if (act === "back") { resetView(); paint(); }
    else if (act === "submit") submitRead();
    else if (act === "next") goCard(1);
    else if (act === "prev") goCard(-1);
    else if (act === "finish") { resetView(); paint(); }
    else if (act === "save-summary") saveSummary();
    else if (act === "dlg-start") { dl.phase = "play"; dl.i = 0; paint(); speakLine(0); }
    else if (act === "dlg-next") dlgNext();
    else if (act === "say") speakLine(Number(b.dataset.k));
    else if (act === "pick") {
      const k = dl.i, j = Number(b.dataset.j), o = dl.d.lines[k].choice.options[j];
      if (o.ok) { dl.chosen[k] = j; paint(); speakLine(k); }
      else { dl.wrong[`${k}-${j}`] = true; paint(); }
    }
    else if (act === "dlg-quiz") { stopSay(); dl.phase = "quiz"; dl.qi = 0; dl.picked = null; dl.score = 0; paint(); }
    else if (act === "answer") {
      const q = dl.d.questions[dl.qi], j = Number(b.dataset.j);
      dl.picked = j;
      const ok = j === q.correct;
      if (ok) dl.score += 1;
      recordSkill(selectedLang, "co", ok ? 1 : 0);
      paint();
    }
    else if (act === "qnext") {
      if (dl.qi < dl.d.questions.length - 1) { dl.qi += 1; dl.picked = null; }
      else {
        dl.phase = "end";
        const prev = store.getCompProgress("orale", selectedLang).results || {};
        const key = `${selectedLevel}-d${dl.d.id}`;
        const best = Math.max(dl.score, (prev[key] && prev[key].score) || 0);
        store.setCompProgress("orale", selectedLang, { results: { ...prev, [key]: { score: best, total: dl.d.questions.length } } });
      }
      paint();
    }
    else if (act === "dlg-again") startDialog(dl.d.id);
  });
  container.addEventListener("change", (e) => {
    if (e.target.dataset && e.target.dataset.act === "subs" && dl) { dl.subs = e.target.checked; paint(); }
  });
  container.addEventListener("input", (e) => {
    if (rd && e.target.dataset && e.target.dataset.q != null && !rd.graded) rd.answers[Number(e.target.dataset.q)] = e.target.value;
  });

  paint();
}
