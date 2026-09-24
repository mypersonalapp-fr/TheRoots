// The Roots — "crédits" de Conversation IA.
//
// Règle voulue par Ashley (23/09) :
// - chaque leçon RÉUSSIE débloque UNE conversation avec l'IA sur le thème
//   de cette leçon (enregistrée par lessons.html, écran Bilan) ;
// - on peut en utiliser au maximum 3 par jour (AI_MAX_PER_DAY) ;
// - une conversation débloquée mais pas utilisée reste en réserve : si on
//   finit une leçon lundi sans discuter, puis une autre mardi, on a 2
//   conversations disponibles mardi (cumul).
// Une conversation "de bienvenue" (se présenter) est offerte une fois, pour
// pouvoir essayer tout de suite.
//
// Stocké dans le téléphone (localStorage "the_roots_ai_v1"). NB : même clé
// et même format écrits directement par lessons.html (fichier séparé, qui
// ne peut pas importer ce module) — garder les deux cohérents.

import { AI_MAX_PER_DAY } from "./ai-config.js?v=20260924g";

const KEY = "the_roots_ai_v1";

function todayStr(d = new Date()) {
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${d.getFullYear()}-${m}-${day}`;
}

function load() {
  try {
    const raw = JSON.parse(localStorage.getItem(KEY) || "null");
    if (raw && Array.isArray(raw.credits)) return { credits: raw.credits, active: raw.active || null, welcomeGiven: !!raw.welcomeGiven };
  } catch (e) { /* données illisibles : on repart de zéro */ }
  return { credits: [], active: null, welcomeGiven: false };
}

function save(data) {
  try { localStorage.setItem(KEY, JSON.stringify(data)); } catch (e) { /* stockage indisponible */ }
}

export const aiCredits = {
  get() {
    const data = load();
    if (!data.welcomeGiven) {
      data.welcomeGiven = true;
      data.credits.push({
        id: "welcome", lang: null, level: null,
        topic: "Faire connaissance",
        lede: "se présenter : prénom, pays, ville, métier, goûts",
        earnedAt: todayStr(), usedAt: null,
      });
      save(data);
    }
    return data;
  },
  available() {
    return this.get().credits.filter((c) => !c.usedAt);
  },
  usedToday() {
    const today = todayStr();
    return this.get().credits.filter((c) => c.usedAt === today).length;
  },
  remainingToday() {
    return Math.max(0, AI_MAX_PER_DAY - this.usedToday());
  },
  // Démarre une conversation : consomme le crédit (si la limite du jour le
  // permet) et crée la conversation "active" (gardée si on quitte l'écran).
  start(creditId, { lang, variant, level }) {
    const data = this.get();
    if (data.active && !data.active.ended) return { ok: false, reason: "active" };
    if (this.remainingToday() <= 0) return { ok: false, reason: "daily_limit" };
    const credit = data.credits.find((c) => c.id === creditId && !c.usedAt);
    if (!credit) return { ok: false, reason: "no_credit" };
    credit.usedAt = todayStr();
    data.active = {
      creditId, topic: credit.topic, lede: credit.lede,
      lang: credit.lang || lang, variant, level: level || credit.level || "A1",
      messages: [], ended: false, feedback: null, startedAt: todayStr(),
    };
    save(data);
    return { ok: true, active: data.active };
  },
  active() {
    return this.get().active;
  },
  updateActive(patch) {
    const data = this.get();
    if (!data.active) return null;
    Object.assign(data.active, patch);
    save(data);
    return data.active;
  },
  closeActive() {
    const data = this.get();
    data.active = null;
    save(data);
  },
};
