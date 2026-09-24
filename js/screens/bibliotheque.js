// The Roots — "Bibliothèque" (nouveau, validé sur maquette le 23/09) :
// une liste de livres à lire, proposés par niveau (A1, A2, B1...). Le
// contenu (quels livres, où ils sont stockés, lien externe ou lecture
// dans l'appli) n'est pas encore défini avec Ashley — cet écran affiche
// donc pour l'instant un message d'attente clair plutôt que du contenu
// inventé, en gardant la place déjà prête dans le menu (Ressources).

import { store } from "../data/store.js?v=20260924j";
import { t } from "../data/i18n.js?v=20260924j";

export function renderBibliotheque(container) {
  const { settings } = store.get();
  const lang = settings.interfaceLang;
  container.innerHTML = `
    <div class="card" style="text-align:center;padding:40px 20px">
      <div style="font-size:32px;margin-bottom:10px">📖</div>
      <div style="font-weight:800;font-size:16px">${t("biblio_title", lang)}</div>
      <div style="color:var(--ink-soft);margin-top:8px;font-size:14px">${t("biblio_note", lang)}</div>
    </div>
  `;
}
