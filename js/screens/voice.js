// The Roots — enregistrement de la voix de l'élève : transcription (si le navigateur sait) + réécoute de sa propre voix.
// createVoice({ lang, onState, onText, onDone, onError }) → { start, stop, play, hasAudio, supported }
const SR = typeof window !== "undefined" ? (window.SpeechRecognition || window.webkitSpeechRecognition) : null;
export const voiceSupported = () => !!(SR || (typeof MediaRecorder !== "undefined" && navigator.mediaDevices && navigator.mediaDevices.getUserMedia));

export function createVoice({ lang = "en-GB", maxMs = 12000, onState = () => {}, onText = () => {}, onDone = () => {}, onError = () => {} } = {}) {
  let rec = null, sr = null, stream = null, chunks = [], url = null, active = false, pending = 0, alts = [], timer = null, kill = null, finished = false, audio = null;
  const canRec = typeof MediaRecorder !== "undefined" && navigator.mediaDevices && navigator.mediaDevices.getUserMedia;
  function done() {
    if (finished) return; finished = true; active = false; clearTimeout(timer); clearTimeout(kill);
    if (stream) { stream.getTracks().forEach((t) => t.stop()); stream = null; }
    onState("idle"); onDone({ alts, url });
  }
  const part = () => { pending--; if (pending <= 0) done(); };
  async function start() {
    if (active) return;
    active = true; finished = false; alts = []; chunks = []; pending = 0;
    if (url) { URL.revokeObjectURL(url); url = null; }
    onState("listening");
    if (canRec) {
      try {
        stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        rec = new MediaRecorder(stream);
        rec.ondataavailable = (e) => { if (e.data && e.data.size) chunks.push(e.data); };
        rec.onstop = () => { if (chunks.length) url = URL.createObjectURL(new Blob(chunks, { type: rec.mimeType || "audio/mp4" })); part(); };
        rec.start(); pending++;
      } catch (e) { rec = null; onError("denied"); }
    }
    if (SR) {
      try {
        sr = new SR(); sr.lang = lang; sr.interimResults = true; sr.maxAlternatives = 3;
        sr.onresult = (e) => {
          const last = e.results[e.results.length - 1];
          const a = [...last].map((x) => x.transcript);
          if (last.isFinal) alts = a;
          onText(a[0] || "", !!last.isFinal);
        };
        sr.onerror = () => {};
        sr.onend = () => { stop(); part(); };
        sr.start(); pending++;
      } catch (e) { sr = null; }
    }
    if (pending === 0) { onError("unavailable"); done(); return; }
    timer = setTimeout(stop, maxMs);
  }
  function stop() {
    if (!active) return;
    try { if (rec && rec.state !== "inactive") rec.stop(); } catch (e) { /* déjà arrêté */ }
    try { if (sr) sr.stop(); } catch (e) { /* déjà arrêté */ }
    kill = setTimeout(() => { pending = 0; done(); }, 2500);
  }
  function play() { if (!url) return; try { if (audio) audio.pause(); audio = new Audio(url); audio.play(); } catch (e) { onError("play"); } }
  return { start, stop, play, hasAudio: () => !!url, supported: voiceSupported() };
}
