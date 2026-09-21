// The Roots — Compréhension orale et écrite : espace d'immersion libre,
// indépendant de la progression par palier (voir comp_indep_note). Contenu
// réel pour l'anglais : niveau A1 — 25 textes de lecture (affichage
// progressif, un par un, questions + correction — voir
// COMPREHENSION_ECRITE_EN) et 5 vidéos fournies par Ashley (voir
// COMPREHENSION_ORALE_EN) ; niveau A2 — 8 extraits de films fournis par
// Ashley (voir COMPREHENSION_ORALE_A2_EN), pas encore de textes de lecture.
// Les autres niveaux/langues, et les sections sans contenu à un niveau
// donné, affichent un message "bientôt disponible".

import { store } from "../data/store.js?v=20260920i";
import { t } from "../data/i18n.js?v=20260920i";
import { COMPREHENSION_ECRITE_EN } from "../data/comprehension-ecrite-en.js?v=20260920i";
import { COMPREHENSION_ECRITE_A2_EN } from "../data/comprehension-ecrite-a2-en.js?v=20260920i";
import { COMPREHENSION_ORALE_EN } from "../data/comprehension-orale-en.js?v=20260920i";
import { COMPREHENSION_ORALE_A2_EN } from "../data/comprehension-orale-a2-en.js?v=20260920i";

const LEVELS = ["A1", "A2", "B1", "B2", "C1", "C2"];

// Contenu disponible par niveau (anglais uniquement pour l'instant) — un
// niveau absent de l'une de ces deux tables affiche "bientôt disponible"
// pour la section correspondante, même si l'autre section a du contenu.
const ORAL_BY_LEVEL = { A1: COMPREHENSION_ORALE_EN, A2: COMPREHENSION_ORALE_A2_EN };
const ECRITE_BY_LEVEL = { A1: COMPREHENSION_ECRITE_EN, A2: COMPREHENSION_ECRITE_A2_EN };

// Clé de sauvegarde de la progression en compréhension écrite, PAR NIVEAU :
// les textes A1 et A2 ont chacun leurs propres id (1, 2, 3…), et la
// progression (currentIndex, results) ne doit donc pas être partagée entre
// les deux listes, sinon avancer dans l'A2 dérègle l'A1 (et inversement).
// "en" tout seul est gardé pour l'A1 (clé historique, ne change pas pour ne
// pas perdre la progression déjà enregistrée) ; les autres niveaux utilisent
// "en-<niveau>".
function ecriteStoreKey(level) {
  return level === "A1" ? "en" : `en-${level}`;
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
  return significantWords(q.answerSentence).some((w) => answerWords.has(w));
}
// Vraie vérification orthographe/grammaire (LanguageTool, API publique
// gratuite, sans clé — même outil que pour l'expression écrite).
async function checkSpelling(text) {
  const res = await fetch("https://api.languagetool.org/v2/check", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({ text, language: "en-US" }).toString(),
  });
  if (!res.ok) throw new Error("languagetool_network");
  const data = await res.json();
  return data.matches || [];
}

export function renderComprehension(container) {
  const { settings } = store.get();
  const lang = settings.interfaceLang;
  let selectedLevel = "A1";

  // État éphémère de la lecture en cours (pas persisté — repart à zéro si on
  // quitte l'onglet, seule la progression texte-par-texte est sauvegardée).
  let showQuestions = false;
  let answers = {};
  let graded = false;
  let grading = false;
  let gradeResults = null; // rempli après correction : [{ contentOk, spellingIssues }, ...]

  let selectedVideoId = null;
  let oralChecking = false;
  let oralCheckIssues = null; // rempli après correction (LanguageTool) — null = pas encore vérifié

  function paint() {
    const ecriteProgress = store.getCompProgress("ecrite", ecriteStoreKey(selectedLevel));
    const oraleProgress = store.getCompProgress("orale", "en");
    const oralVideos = ORAL_BY_LEVEL[selectedLevel] || null;
    const ecriteTexts = ECRITE_BY_LEVEL[selectedLevel] || null;

    container.innerHTML = `
      <div class="dash-greeting" style="padding:4px 0 6px">${t("comp_intro", lang)}</div>
      <div class="card" style="font-size:12.5px;color:var(--ink-soft);margin-bottom:12px">${t("comp_indep_note", lang)}</div>

      <div class="level-chip-row" id="compLevels">
        ${LEVELS.map((l) => `<button class="level-chip${l === selectedLevel ? " active" : ""}" data-level="${l}">${l}</button>`).join("")}
      </div>

      ${!oralVideos && !ecriteTexts ? `
        <div class="card-3d"><div class="card" style="color:var(--ink-soft);font-size:13px">${t("prog_not_ready", lang)}</div></div>
      ` : `
        <div class="card-3d" style="margin-bottom:14px">
          <div class="immersion-card" style="margin-bottom:0">
            <div class="immersion-icon">🎧</div>
            <div>
              <div class="immersion-title">${t("comp_oral_title", lang)}</div>
              <div class="immersion-note">${t("comp_oral_desc", lang)}</div>
            </div>
          </div>
          ${oralVideos ? oralHtml(oraleProgress, oralVideos) : `<div class="card" style="margin-top:14px;color:var(--ink-soft);font-size:13px">${t("prog_not_ready", lang)}</div>`}
        </div>

        <div class="card-3d">
          <div class="immersion-card" style="margin-bottom:0">
            <div class="immersion-icon">📖</div>
            <div>
              <div class="immersion-title">${t("comp_written_title", lang)}</div>
              <div class="immersion-note">${t("comp_written_desc", lang)}</div>
            </div>
          </div>
          ${ecriteTexts ? ecriteHtml(ecriteProgress, ecriteTexts) : `<div class="card" style="margin-top:14px;color:var(--ink-soft);font-size:13px">${t("prog_not_ready", lang)}</div>`}
        </div>
      `}
    `;

    container.querySelector("#compLevels").addEventListener("click", (e) => {
      const chip = e.target.closest(".level-chip");
      if (!chip) return;
      selectedLevel = chip.dataset.level;
      showQuestions = false; answers = {}; graded = false; gradeResults = null;
      selectedVideoId = null; oralCheckIssues = null;
      paint();
    });

    if (oralVideos) wireOral(oraleProgress);
    if (ecriteTexts) wireEcrite(ecriteProgress, ecriteTexts);
  }

  // ---------- Compréhension orale ----------

  function oralHtml(progress, videos) {
    const savedSummaries = progress.results || {};
    return `
      <div style="margin-top:14px;font-weight:700;font-size:13px">${t("comp_orale_pick_video", lang)}</div>
      <div style="display:flex;gap:8px;flex-wrap:wrap;margin-top:8px" id="oralPicker">
        ${videos.map((v) => `<button class="lt-opt" data-video="${v.videoId}" style="padding:8px 12px;font-size:13px">${v.title}</button>`).join("")}
      </div>
      ${selectedVideoId ? oralPlayerHtml(videos.find((v) => v.videoId === selectedVideoId), savedSummaries) : ""}
    `;
  }

  function oralPlayerHtml(video, savedSummaries) {
    if (!video) return "";
    const saved = savedSummaries[video.videoId] || "";
    return `
      <div class="card-media" style="margin-top:14px;aspect-ratio:16/9;padding:0;overflow:hidden">
        <iframe src="https://www.youtube.com/embed/${video.videoId}" title="${video.title}" style="width:100%;height:100%;border:0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
      <textarea class="translate-area" id="oralSummary" placeholder="${t("comp_orale_summary_placeholder", lang)}" style="min-height:90px;margin-top:10px">${saved}</textarea>
      <button class="btn btn-primary" id="oralSaveBtn" style="width:100%;margin-top:8px" ${oralChecking ? "disabled" : ""}>${oralChecking ? t("expr_ecrite_checking", lang) : t("comp_summary_btn", lang)}</button>
      ${oralCheckIssues !== null ? `
        <div class="card" style="margin-top:8px">
          ${oralCheckIssues.length === 0 ? `
            <div style="font-size:13px;color:var(--accent);font-weight:700">${t("expr_ecrite_no_issues", lang)}</div>
          ` : `
            <ul style="margin:0;padding-left:16px;font-size:12.5px;color:var(--ink-soft)">
              ${oralCheckIssues.slice(0, 6).map((m) => `<li style="margin-bottom:4px">${m.message}${m.replacements && m.replacements[0] ? ` → <strong>${m.replacements[0].value}</strong>` : ""}</li>`).join("")}
            </ul>
          `}
        </div>
      ` : ""}
      <div id="oralSaveMsg" style="font-size:12px;color:var(--accent);margin-top:6px"></div>
    `;
  }

  function wireOral(progress) {
    const picker = container.querySelector("#oralPicker");
    if (picker) picker.addEventListener("click", (e) => {
      const b = e.target.closest("button[data-video]");
      if (!b) return;
      selectedVideoId = b.dataset.video;
      oralCheckIssues = null;
      paint();
    });
    const saveBtn = container.querySelector("#oralSaveBtn");
    if (saveBtn) saveBtn.addEventListener("click", async () => {
      const text = container.querySelector("#oralSummary").value;
      const results = { ...(progress.results || {}), [selectedVideoId]: text };
      store.setCompProgress("orale", "en", { results });
      if (!text.trim()) { oralCheckIssues = null; paint(); return; }
      oralChecking = true;
      paint();
      let issues = [];
      try { issues = await checkSpelling(text); } catch (e) { /* correcteur indisponible — le résumé reste quand même enregistré */ }
      oralChecking = false;
      oralCheckIssues = issues;
      paint();
    });
  }

  // ---------- Compréhension écrite ----------

  function ecriteHtml(progress, texts) {
    const idx = progress.currentIndex || 0;
    if (idx >= texts.length) {
      return `
        <div class="card" style="margin-top:14px">${t("comp_ecrite_all_done", lang)}</div>
        <button class="btn btn-ghost" id="ecriteRestartBtn" style="width:100%;margin-top:10px">${t("comp_ecrite_restart", lang)}</button>
      `;
    }
    const text = texts[idx];
    return `
      <div style="font-size:12px;color:var(--ink-soft);margin-top:14px">${t("comp_ecrite_progress", lang, { n: idx + 1, total: texts.length })}</div>
      <div style="font-weight:800;margin-top:4px">${text.title}</div>
      <div class="lt-passage" style="margin-top:8px">${text.body}</div>
      ${!showQuestions ? `
        <button class="btn btn-primary" id="ecriteReadBtn" style="width:100%;margin-top:12px">${t("comp_ecrite_read_btn", lang)}</button>
      ` : questionsHtml(text)}
    `;
  }

  function questionsHtml(text) {
    const correctCount = graded ? gradeResults.filter((r) => r.contentOk && r.spellingIssues.length === 0).length : 0;
    return `
      <div style="margin-top:14px">
        ${text.questions.map((q, i) => {
          const result = graded ? gradeResults[i] : null;
          const isGood = result && result.contentOk && result.spellingIssues.length === 0;
          return `
          <div class="card" style="margin-top:10px">
            <div style="font-weight:700;font-size:13px">${t("comp_ecrite_question_label", lang, { n: i + 1 })} — ${q.q}</div>
            <input type="text" class="translate-lang-select" id="ecriteAnswer${i}" data-q="${i}" value="${(answers[i] || "").replace(/"/g, "&quot;")}" placeholder="${t("comp_ecrite_answer_placeholder", lang)}" style="width:100%;box-sizing:border-box;margin-top:8px" ${graded ? "disabled" : ""} autocapitalize="none"/>
            ${graded ? `
              <div style="font-size:12px;margin-top:6px;color:${isGood ? "var(--accent)" : "var(--pop)"}">${isGood ? t("comp_ecrite_correct", lang) : t("comp_ecrite_incorrect", lang)}</div>
              ${!result.contentOk ? `<div style="font-size:12px;color:var(--ink-soft);margin-top:2px">${t("comp_ecrite_correction_answer", lang, { answer: q.accepted[0] })}</div>` : ""}
              ${result.spellingIssues.length ? `
                <ul style="margin:4px 0 0;padding-left:16px;font-size:12px;color:var(--ink-soft)">
                  ${result.spellingIssues.slice(0, 3).map((m) => `<li>${m.message}${m.replacements && m.replacements[0] ? ` → <strong>${m.replacements[0].value}</strong>` : ""}</li>`).join("")}
                </ul>
              ` : ""}
            ` : ""}
          </div>
        `;
        }).join("")}
      </div>
      ${!graded ? `
        <button class="btn btn-primary" id="ecriteSubmitBtn" style="width:100%;margin-top:12px" ${grading ? "disabled" : ""}>${grading ? t("expr_ecrite_checking", lang) : t("comp_ecrite_submit_btn", lang)}</button>
      ` : `
        <div class="card" style="margin-top:12px">
          <div style="font-weight:800">${t("comp_ecrite_correction_title", lang)}</div>
          <div style="font-size:13px;margin-top:4px">${t("comp_ecrite_score", lang, { score: correctCount, total: text.questions.length })}</div>
        </div>
        <button class="btn btn-primary" id="ecriteNextBtn" style="width:100%;margin-top:12px">${t("comp_ecrite_next_btn", lang)}</button>
      `}
    `;
  }

  function wireEcrite(progress, texts) {
    const readBtn = container.querySelector("#ecriteReadBtn");
    if (readBtn) readBtn.addEventListener("click", () => { showQuestions = true; paint(); });

    const restartBtn = container.querySelector("#ecriteRestartBtn");
    if (restartBtn) restartBtn.addEventListener("click", () => {
      store.setCompProgress("ecrite", ecriteStoreKey(selectedLevel), { currentIndex: 0, results: {} });
      showQuestions = false; answers = {}; graded = false; gradeResults = null;
      paint();
    });

    if (showQuestions) {
      container.querySelectorAll("input[data-q]").forEach((input) => {
        if (graded) return;
        input.addEventListener("input", (e) => { answers[Number(e.target.dataset.q)] = e.target.value; });
      });

      const submitBtn = container.querySelector("#ecriteSubmitBtn");
      if (submitBtn) submitBtn.addEventListener("click", async () => {
        grading = true;
        paint();
        const idx = progress.currentIndex || 0;
        const text = texts[idx];
        // Corrige chaque réponse : le fond (mots-clés attendus) + une vraie
        // vérification orthographe/grammaire (LanguageTool), en parallèle.
        gradeResults = await Promise.all(text.questions.map(async (q, i) => {
          const answer = answers[i] || "";
          const contentOk = contentMatches(answer, q);
          let spellingIssues = [];
          if (answer.trim()) {
            try { spellingIssues = await checkSpelling(answer); } catch (e) { /* correcteur indisponible — on garde juste le jugement de fond */ }
          }
          return { contentOk, spellingIssues };
        }));
        grading = false;
        graded = true;
        const correctCount = gradeResults.filter((r) => r.contentOk && r.spellingIssues.length === 0).length;
        const results = { ...(progress.results || {}), [text.id]: { correct: correctCount, total: text.questions.length } };
        store.setCompProgress("ecrite", ecriteStoreKey(selectedLevel), { results });
        paint();
      });
      const nextBtn = container.querySelector("#ecriteNextBtn");
      if (nextBtn) nextBtn.addEventListener("click", () => {
        const idx = (progress.currentIndex || 0) + 1;
        store.setCompProgress("ecrite", ecriteStoreKey(selectedLevel), { currentIndex: idx });
        showQuestions = false; answers = {}; graded = false; gradeResults = null;
        paint();
      });
    }
  }

  paint();
}
