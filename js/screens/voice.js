// The Roots — enregistrement de la voix de l'élève : transcription (si le navigateur sait) + réécoute de sa propre voix.
// createVoice({ lang, onState, onText, onDone, onError }) → { start, stop, play, hasAudio, supported }
const SR = typeof window !== "undefined" ? (window.SpeechRecognition || window.webkitSpeechRecognition) : null;
// Sur iPhone/iPad, transcrire et enregistrer en même temps se gêne : on enregistre seulement (la réécoute est le but).
const IOS = typeof navigator !== "undefined" && (/iP(hone|ad|od)/.test(navigator.userAgent) || (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1));
const pickMime = () => { try { return ["audio/mp4", "audio/webm;codecs=opus", "audio/webm"].find((t) => MediaRecorder.isTypeSupported(t)) || ""; } catch (e) { return ""; } };
export const voiceSupported = () => !!(SR || (typeof MediaRecorder !== "undefined" && navigator.mediaDevices && navigator.mediaDevices.getUserMedia));

export function createVoice({ lang = "en-GB", maxMs = 12000, onState = () => {}, onText = () => {}, onDone = () => {}, onError = () => {} } = {}) {
  let ctx = null, gateTimer = null, rawStream = null;
  let rec = null, sr = null, stream = null, chunks = [], url = null, active = false, pending = 0, alts = [], timer = null, kill = null, finished = false, audio = null;
  const canRec = typeof MediaRecorder !== "undefined" && navigator.mediaDevices && navigator.mediaDevices.getUserMedia;
  // Réduction du bruit ambiant : filtres voix + calibrage du bruit de fond + porte (le fond est atténué quand tu ne parles pas) + arrêt auto après le silence
  const rms = (an, buf) => { an.getFloatTimeDomainData(buf); let s = 0; for (let i = 0; i < buf.length; i++) s += buf[i] * buf[i]; return Math.sqrt(s / buf.length); };
  async function cleanChain(raw) {
    const AC = typeof window !== "undefined" && (window.AudioContext || window.webkitAudioContext);
    if (!AC) return raw;
    ctx = new AC(); if (ctx.state === "suspended") await ctx.resume();
    const src = ctx.createMediaStreamSource(raw);
    const hp = ctx.createBiquadFilter(); hp.type = "highpass"; hp.frequency.value = 130;
    const lp = ctx.createBiquadFilter(); lp.type = "lowpass"; lp.frequency.value = 6000;
    const an = ctx.createAnalyser(); an.fftSize = 1024;
    const gate = ctx.createGain(); gate.gain.value = 0.1;
    const comp = ctx.createDynamicsCompressor();
    const dest = ctx.createMediaStreamDestination();
    src.connect(hp); hp.connect(lp); lp.connect(an); lp.connect(gate); gate.connect(comp); comp.connect(dest);
    const buf = new Float32Array(an.fftSize);
    // calibrage : 0,6 s de bruit de fond avant de laisser passer la voix
    const samples = []; for (let i = 0; i < 12; i++) { await new Promise((r) => setTimeout(r, 50)); samples.push(rms(an, buf)); }
    samples.sort((a, b) => a - b);
    const ambient = samples[Math.floor(samples.length * 0.8)] || 0;
    const thr = Math.max(0.012, ambient * 2.4);
    let last = 0, heard = false, t0 = Date.now();
    gateTimer = setInterval(() => {
      const lv = rms(an, buf), now = Date.now(), t = ctx ? ctx.currentTime : 0;
      if (!ctx) return;
      if (lv > thr) { gate.gain.setTargetAtTime(1, t, 0.015); last = now; heard = true; }
      else if (now - last > 300) gate.gain.setTargetAtTime(0.08, t, 0.12);
      if (heard && now - last > 1600 && now - t0 > 1500) stop();   // tu as fini de parler
    }, 40);
    return dest.stream;
  }
  function done() {
    if (finished) return; finished = true; active = false; clearTimeout(timer); clearTimeout(kill);
    clearInterval(gateTimer); gateTimer = null;
    if (stream) { stream.getTracks().forEach((t) => t.stop()); stream = null; }
    if (rawStream) { rawStream.getTracks().forEach((t) => t.stop()); rawStream = null; }
    if (ctx) { try { ctx.close(); } catch (e) { /* déjà fermé */ } ctx = null; }
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
        rawStream = await navigator.mediaDevices.getUserMedia({ audio: { echoCancellation: true, noiseSuppression: true, autoGainControl: true, channelCount: 1 } });
        stream = rawStream;
        try { stream = await cleanChain(rawStream); } catch (e) { stream = rawStream; clearInterval(gateTimer); }
        if (finished) return;
        const mt = pickMime(); rec = mt ? new MediaRecorder(stream, { mimeType: mt }) : new MediaRecorder(stream);
        rec.ondataavailable = (e) => { if (e.data && e.data.size) chunks.push(e.data); };
        rec.onstop = () => { if (chunks.length) url = URL.createObjectURL(new Blob(chunks, { type: rec.mimeType || "audio/mp4" })); part(); };
        rec.start(); pending++;
      } catch (e) { rec = null; onError("denied"); }
    }
    const wantSR = SR && !(IOS && canRec && rec);
    if (wantSR) {
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
  function play() { if (!url) return; try { if (audio) audio.pause(); audio = new Audio(url); const pr = audio.play(); if (pr && pr.catch) pr.catch(() => onError("play")); } catch (e) { onError("play"); } }
  return { start, stop, play, hasAudio: () => !!url, supported: voiceSupported(), transcribes: () => !!sr };
}
