// The Roots — « Bibliothèque » : 12 livres à lire en anglais pour les niveaux A1 et A2,
// mélange de romans jeunesse, de policiers, de classiques et de contes (choix de Claude
// le 01/10, à valider par Ashley). Les niveaux sont indicatifs : pour les classiques, il
// existe des éditions simplifiées (« graded readers » : Penguin Readers, Oxford Bookworms,
// Cambridge English Readers) à chercher en priorité. Case « Lu » mémorisée sur l'appareil.

import { store } from "../data/store.js?v=20260930a";

const BOOKS = [
  { id: "gruffalo", t: "The Gruffalo", a: "Julia Donaldson", g: "Album jeunesse", lv: "A1", e: "🐭", d: "Une petite souris se promène dans la forêt et invente un monstre pour échapper aux animaux qui veulent la manger. Des rimes, des phrases courtes et très répétitives." },
  { id: "caterpillar", t: "The Very Hungry Caterpillar", a: "Eric Carle", g: "Album jeunesse", lv: "A1", e: "🐛", d: "Une chenille mange de plus en plus de nourriture, jour après jour, avant de devenir un papillon. Parfait pour les jours de la semaine, les nombres et la nourriture." },
  { id: "esio", t: "Esio Trot", a: "Roald Dahl", g: "Humour jeunesse", lv: "A1", e: "🐢", d: "Un vieux monsieur timide veut séduire sa voisine grâce à sa tortue. Très court, drôle, avec un petit tour de magie des mots." },
  { id: "fox", t: "Fantastic Mr Fox", a: "Roald Dahl", g: "Aventure jeunesse", lv: "A2", e: "🦊", d: "Trois fermiers cruels essaient de capturer un renard malin. Il creuse, il ruse et il nourrit toute sa famille. Court et rythmé." },
  { id: "charlotte", t: "Charlotte's Web", a: "E. B. White", g: "Classique jeunesse", lv: "A2", e: "🕷️", d: "Un petit cochon est sauvé de la boucherie par son amie l'araignée Charlotte, qui tisse des mots dans sa toile. Une belle histoire d'amitié." },
  { id: "wimpy", t: "Diary of a Wimpy Kid", a: "Jeff Kinney", g: "Roman illustré, humour", lv: "A2", e: "📓", d: "Le journal d'un collégien qui veut devenir populaire. Phrases courtes, dessins partout, langue du quotidien et beaucoup d'humour." },
  { id: "five", t: "Five on a Treasure Island", a: "Enid Blyton", g: "Enquête jeunesse", lv: "A2", e: "🏝️", d: "Quatre enfants et un chien trouvent une épave sur une île et découvrent un trésor, avec des bandits à leurs trousses." },
  { id: "oz", t: "The Wonderful Wizard of Oz", a: "L. Frank Baum", g: "Fantastique, classique", lv: "A2", e: "🌪️", d: "Dorothy est emportée par une tornade au pays d'Oz et suit la route de briques jaunes pour rentrer chez elle. Chercher une édition simplifiée." },
  { id: "alice", t: "Alice's Adventures in Wonderland", a: "Lewis Carroll", g: "Fantastique, classique", lv: "A2", e: "🐇", d: "Alice suit un lapin blanc et tombe dans un monde absurde. Chercher une édition simplifiée : l'original est difficile." },
  { id: "garden", t: "The Secret Garden", a: "Frances Hodgson Burnett", g: "Classique jeunesse", lv: "A2", e: "🌷", d: "Mary, une petite fille triste, découvre un jardin fermé depuis des années et lui redonne vie. Chercher une édition simplifiée." },
  { id: "sherlock", t: "Sherlock Holmes (nouvelles)", a: "Arthur Conan Doyle", g: "Policier", lv: "A2", e: "🔍", d: "Le célèbre détective et son ami le docteur Watson résolvent des mystères à Londres. Les éditions simplifiées de « The Speckled Band » ou « The Red-Headed League » sont idéales." },
  { id: "orient", t: "Murder on the Orient Express", a: "Agatha Christie", g: "Policier", lv: "A2", e: "🚂", d: "Un meurtre dans un train bloqué par la neige : tous les voyageurs sont suspects. Hercule Poirot mène l'enquête. Édition simplifiée conseillée." },
];

const KEY = "the_roots_books_read_v1";
function readSet() { try { return JSON.parse(localStorage.getItem(KEY) || "[]") || []; } catch (e) { return []; } }
function writeSet(a) { try { localStorage.setItem(KEY, JSON.stringify(a)); } catch (e) { /* stockage indisponible */ } }
const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

export function renderBibliotheque(container) {
  store.get();
  let level = "A1";
  let open = null;

  function paint() {
    const read = readSet();
    const list = BOOKS.filter((b) => b.lv === level);
    const book = open ? BOOKS.find((b) => b.id === open) : null;
    container.innerHTML = `
      <div class="dash-greeting" style="padding:4px 0 6px">12 livres à lire en anglais, de la jeunesse au policier. Les niveaux sont indicatifs.</div>
      <div class="level-chip-row" id="bkLevels">
        ${["A1", "A2"].map((l) => `<button class="level-chip${l === level ? " active" : ""}" data-lv="${l}">${l} · ${BOOKS.filter((b) => b.lv === l).length} livres</button>`).join("")}
      </div>
      ${book ? `
        <div class="card" style="margin-bottom:12px">
          <button class="comp-back" data-act="close" style="margin-bottom:10px">‹ Retour aux livres</button>
          <div class="book-emo book-emo-big">${book.e}</div>
          <div style="font-weight:800;font-size:17px;margin-top:6px">${esc(book.t)}</div>
          <div style="font-size:13px;color:var(--ink-soft)">${esc(book.a)} · ${esc(book.g)} · ${book.lv}</div>
          <p style="font-size:14px;line-height:1.5;margin:10px 0">${esc(book.d)}</p>
          <button class="btn btn-primary" data-act="toggle" data-id="${book.id}" style="width:100%">${read.includes(book.id) ? "✓ Lu — retirer" : "Marquer comme lu"}</button>
        </div>` : `
        <div class="comp-mos book-mos">
          ${list.map((b, i) => `<button class="comp-tile comp-t${i % 4}${read.includes(b.id) ? " done" : ""}" data-act="open" data-id="${b.id}"><span class="book-emo">${b.e}</span><b style="font-size:14px">${read.includes(b.id) ? "✓ " : ""}${esc(b.t)}</b><span>${esc(b.a)}<br>${esc(b.g)}</span></button>`).join("")}
        </div>
        <p class="comp-hint">Pour les classiques, cherche l'édition simplifiée (Penguin Readers, Oxford Bookworms, Cambridge English Readers).</p>`}
    `;
  }
  container.addEventListener("click", (e) => {
    const lv = e.target.closest("[data-lv]");
    if (lv) { level = lv.dataset.lv; open = null; paint(); return; }
    const b = e.target.closest("[data-act]");
    if (!b) return;
    if (b.dataset.act === "open") { open = b.dataset.id; paint(); }
    else if (b.dataset.act === "close") { open = null; paint(); }
    else if (b.dataset.act === "toggle") {
      const r = readSet(); const i = r.indexOf(b.dataset.id);
      if (i >= 0) r.splice(i, 1); else r.push(b.dataset.id);
      writeSet(r); paint();
    }
  });
  paint();
}
