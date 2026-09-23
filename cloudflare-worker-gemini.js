// THE ROOTS — Relais "Conversation IA" vers Google Gemini (Cloudflare Worker)
//
// Même principe que cloudflare-worker-deepl.js : ce petit programme tourne
// sur les serveurs de Cloudflare (gratuit), PAS dans l'appli. La clé Gemini
// reste ici, jamais visible depuis le téléphone ni sur GitHub (un dépôt
// GitHub Pages est public : une clé collée dans le code de l'appli serait
// lisible par n'importe qui, et Google la désactive d'ailleurs
// automatiquement quand il la repère sur GitHub).
//
// Ashley : ce fichier se colle tel quel dans l'éditeur Cloudflare Worker.
// Réglages à faire dans Cloudflare (Settings → Variables and Secrets) :
//   - GEMINI_API_KEY  (type "Secret")  : la clé créée sur aistudio.google.com
//   - GEMINI_MODEL    (facultatif)     : par défaut "gemini-3.1-flash-lite"
//   - ALLOWED_ORIGIN  (facultatif)     : par défaut ton adresse GitHub Pages
//
// Le relais construit LUI-MÊME les consignes données à l'IA (professeur de
// langue, réponses courtes, corrections en français) : quelqu'un qui
// trouverait l'adresse du relais ne peut donc pas s'en servir comme d'un
// ChatGPT gratuit pour autre chose. Les messages sont aussi limités en
// nombre et en longueur pour garder un coût quasi nul.

const DEFAULT_MODEL = "gemini-3.1-flash-lite";
const DEFAULT_ORIGIN = "https://mypersonalapp-fr.github.io";
const MAX_MESSAGES = 40;      // historique envoyé à l'IA (messages)
const MAX_CHARS = 1200;       // longueur max d'un message
const MAX_OUTPUT_TOKENS = 1024;

const LANG_NAMES = { en: "English", es: "Spanish", pt: "European Portuguese (from Portugal)" };
const VARIANT_NAMES = {
  "en-gb": "British English", "en-us": "American English",
  "es-es": "Spanish from Spain", "es-co": "Colombian Spanish",
  "pt-pt": "European Portuguese (from Portugal)", "pt-br": "Brazilian Portuguese",
};

function systemPrompt({ lang, variant, level, topic, lede, mode }) {
  const target = VARIANT_NAMES[variant] || LANG_NAMES[lang] || LANG_NAMES.en;
  const lvl = /^(A1|A2|B1|B2|C1|C2)$/.test(level || "") ? level : "A1";
  const base = `You are a warm, patient language tutor inside the app "The Roots". The learner is a French speaker learning ${target}, level ${lvl} (CEFR).
Today's conversation practises the lesson: "${String(topic || "free conversation").slice(0, 120)}"${lede ? ` (goal: ${String(lede).slice(0, 240)})` : ""}.
Rules:
- Always write in ${target}, using vocabulary and grammar suited to level ${lvl}. Keep each reply short (1 to 3 sentences) and end with ONE simple question to keep the conversation going.
- Stay on the lesson topic and everyday life. Politely refuse anything unrelated to learning this language.
- If the learner made a mistake, first answer naturally, then add one line starting with "💡" written in FRENCH that shows the corrected sentence and a very short explanation. Correct at most 2 mistakes per message. No "💡" line if there is no mistake.
- Some learner messages come from the microphone and include a note like [micro: confiance 0.55]. You cannot hear the audio: you only see what speech recognition understood. If a word looks wrong or unexpected, or the confidence is below 0.7, say in the "💡" line (in French) which word was probably mispronounced and give a simple French pronunciation tip.
- If the learner writes in French, gently reply in ${target} and give them the sentence they could have said.`;
  if (mode === "feedback") {
    return base + `
NOW the conversation is over. Write a short report IN FRENCH (max 10 lines): 1) ce qui était bien, 2) les 3 erreurs les plus importantes avec la bonne phrase, 3) 3 mots ou expressions utiles à retenir (en ${target} avec traduction), 4) si des messages venaient du micro : les mots à retravailler à l'oral. Be encouraging.`;
  }
  if (mode === "start") {
    return base + `
Start the conversation yourself: greet the learner in ${target} and ask a first simple question about the lesson topic.`;
  }
  return base;
}

function json(obj, status, cors) {
  return new Response(JSON.stringify(obj), { status, headers: { ...cors, "Content-Type": "application/json" } });
}

export default {
  async fetch(request, env) {
    const allowed = env.ALLOWED_ORIGIN || DEFAULT_ORIGIN;
    const origin = request.headers.get("Origin") || "";
    const cors = {
      "Access-Control-Allow-Origin": allowed === "*" ? "*" : allowed,
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
      "Vary": "Origin",
    };
    if (request.method === "OPTIONS") return new Response(null, { headers: cors });
    if (request.method !== "POST") return json({ error: "method_not_allowed" }, 405, cors);
    if (allowed !== "*" && origin && origin !== allowed) return json({ error: "origin_not_allowed" }, 403, cors);
    if (!env.GEMINI_API_KEY) return json({ error: "missing_api_key_config" }, 500, cors);

    let body;
    try { body = await request.json(); } catch (e) { return json({ error: "invalid_json" }, 400, cors); }
    const { lang, variant, level, topic, lede, mode } = body || {};
    const messages = Array.isArray(body && body.messages) ? body.messages.slice(-MAX_MESSAGES) : [];

    const contents = messages
      .filter((m) => m && typeof m.text === "string" && m.text.trim())
      .map((m) => ({ role: m.role === "model" ? "model" : "user", parts: [{ text: m.text.slice(0, MAX_CHARS) }] }));
    // Gemini exige que la conversation commence par un message "user".
    if (!contents.length || contents[0].role !== "user") {
      contents.unshift({ role: "user", parts: [{ text: mode === "start" ? "(The learner opens the conversation.)" : "(Continue.)" }] });
    }
    if (mode === "feedback") {
      contents.push({ role: "user", parts: [{ text: "(Fin de la conversation : fais-moi mon bilan en français.)" }] });
    }

    const model = env.GEMINI_MODEL || DEFAULT_MODEL;
    const url = `https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(model)}:generateContent`;
    let res;
    try {
      res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json", "x-goog-api-key": env.GEMINI_API_KEY },
        body: JSON.stringify({
          system_instruction: { parts: [{ text: systemPrompt({ lang, variant, level, topic, lede, mode }) }] },
          contents,
          generationConfig: { temperature: 0.7, maxOutputTokens: MAX_OUTPUT_TOKENS },
        }),
      });
    } catch (e) {
      return json({ error: "gemini_unreachable" }, 502, cors);
    }
    if (res.status === 429) return json({ error: "quota_exceeded" }, 429, cors);
    if (!res.ok) {
      let detail = "";
      try { detail = (await res.json())?.error?.message || ""; } catch (e) { /* rien */ }
      return json({ error: "gemini_error", status: res.status, detail: detail.slice(0, 300) }, 502, cors);
    }
    const data = await res.json();
    const parts = data?.candidates?.[0]?.content?.parts || [];
    const text = parts.filter((p) => !p.thought).map((p) => p.text || "").join("").trim();
    if (!text) return json({ error: "empty_reply" }, 502, cors);
    return json({ text }, 200, cors);
  },
};
