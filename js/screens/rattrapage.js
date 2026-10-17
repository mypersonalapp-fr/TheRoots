// The Roots — série de rattrapage (5 questions corrigées) : utilisée depuis le livret ET depuis l'écran de verrouillage du test.
// id = code de leçon ("A1.3", "A2.1") ou "EXAM-A1" pour le Grand contrôle (questions tirées des 12 leçons).
import { bulletinA1, pickRattrapage, rtLoad, rtSave } from "../data/bulletin-a1.js?v=20261018c6";
import { loadBundle } from "../data/lecons-a1.js?v=20261018c6";
import { loadBundleA2 } from "../data/lecons-a2.js?v=20261018c6";

const esc = (x) => String(x).replace(/&/g, "&amp;").replace(/</g, "&lt;");

export async function runRattrapage(container, id, { onBack, onRetest, backLabel = "Retour au livret" } = {}) {
  const isExam = id === "EXAM-A1", lv = id.startsWith("A2") ? "A2" : "A1", B = bulletinA1(lv);
  const g = B.gaps.find((x) => x.id === id), n = isExam ? 0 : g ? g.n : Number(id.split(".")[1]);
  let exercises;
  if (isExam) { exercises = []; for (let k = 1; k <= 12; k++) exercises = exercises.concat((await loadBundle(k)).exercises); }
  else exercises = (lv === "A2" ? await loadBundleA2(n) : await loadBundle(n)).exercises;
  const att = (rtLoad()[id] || {}).series || 0;
  const items = pickRattrapage(exercises, g ? g.weak : [], att + n);
  const label = isExam ? "Grand contrôle A1" : g ? g.code : "";
  let i = 0, firstOk = 0, tried = false;
  const draw = () => {
    if (i >= items.length) {
      rtSave(id, firstOk, items.length);
      container.innerHTML = `<button class="settings-back" id="rtBack">${backLabel}</button><div class="card bl-card"><h3 class="bl-h">Série terminée</h3><div class="bl-big">${firstOk} / ${items.length}</div><p class="bl-soft">${firstOk >= 4 ? "Très bien : la notion est solide. Le test est de nouveau ouvert." : "Relis les explications : le test est de nouveau ouvert, et tu peux aussi refaire une série."}</p><button type="button" class="lc-cta bl-cta" id="rtRetest">Repasser le test ${label}</button><button type="button" class="lc-sec-btn bl-cta" id="rtAgain">Refaire une série</button></div>`;
      container.querySelector("#rtBack").onclick = () => onBack && onBack();
      container.querySelector("#rtAgain").onclick = () => runRattrapage(container, id, { onBack, onRetest, backLabel });
      container.querySelector("#rtRetest").onclick = () => onRetest && onRetest();
      return;
    }
    const { page, q } = items[i]; tried = false;
    container.innerHTML = `<button class="settings-back" id="rtBack">Quitter</button><div class="card bl-card"><div class="bl-soft">Exercices en plus · ${label} · ${i + 1} / ${items.length}</div><div class="bl-bar"><i style="width:${Math.round(i / items.length * 100)}%;background:#2fa35e"></i></div><div class="bl-soft">${esc(page)}</div><h3 class="bl-h">${esc(q[0])}</h3>${q[1].map((c, k) => `<button type="button" class="lc-choice" data-k="${k}">${esc(c)}</button>`).join("")}<div class="bl-fb" id="rtFb" aria-live="polite"></div><button type="button" class="lc-cta bl-cta" id="rtNext" style="display:none">${i + 1 < items.length ? "Question suivante" : "Voir mon résultat"}</button></div>`;
    container.querySelector("#rtBack").onclick = () => onBack && onBack();
    const fb = container.querySelector("#rtFb");
    container.querySelectorAll(".lc-choice").forEach((b) => b.addEventListener("click", () => {
      if (b.classList.contains("lc-right")) return;
      const ok = Number(b.dataset.k) === q[2];
      if (ok) { if (!tried) firstOk++; b.classList.add("lc-right"); fb.className = "bl-fb bl-fb-ok"; fb.textContent = "Bravo ! " + (q[3] || ""); container.querySelector("#rtNext").style.display = ""; container.querySelectorAll(".lc-choice").forEach((x) => (x.disabled = true)); }
      else { tried = true; b.classList.add("lc-wrong"); b.disabled = true; fb.className = "bl-fb bl-fb-ko"; fb.textContent = "Pas tout à fait — " + (q[3] || "") + " Réessaie."; }
    }));
    container.querySelector("#rtNext").onclick = () => { i++; draw(); };
  };
  draw();
}
