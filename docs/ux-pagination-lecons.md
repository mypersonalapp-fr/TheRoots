# The Roots — contrat UX : pagination plutôt que défilement interminable

Statut : spécification à implémenter et tester sur la branche de travail ; **pas encore activée**.

## Décision produit
L'apprenant progresse par **écrans courts**, non par une longue page verticale. Le moteur conserve ses étapes pédagogiques et ses validations, mais chaque étape trop haute est découpée en pages internes.

## Comportement attendu
- Une page contient un bloc cohérent : une explication courte, un exemple ou un exercice (éventuellement plusieurs questions courtes).
- Boutons fixes « Précédent » / « Suivant » ; indicateur « Page 2 sur 5 » et progression globale du palier distincte.
- Ne pas avancer automatiquement après une réponse ; conserver la correction et permettre de la lire.
- Le bouton « Continuer » de l'étape pédagogique n'est accessible qu'après la dernière page et les validations obligatoires.
- Ne jamais couper une question, ses choix et son retour de correction entre deux pages.
- Éviter le défilement de la page entière ; autoriser exceptionnellement un défilement local pour un texte de lecture, avec hauteur limitée et signalement clair.
- Sauvegarder l'étape, la page et les réponses ; un retour en arrière ne doit pas effacer le travail.
- Navigation clavier, lecteurs d'écran, zones tactiles suffisamment grandes, focus visible, prise en compte des préférences de mouvement réduit.
- Sur petits écrans et avec texte agrandi, recalculer le découpage ; ne jamais masquer du contenu sous les commandes.

## Direction visuelle
- En-tête compact : The Roots, A1.1, compétence et progression.
- Carte de contenu centrale lisible, respirante, typographie hiérarchisée, largeur maîtrisée.
- Pied de navigation stable et clairement séparé.
- Maximum indicatif de 1 notion + 1 exemple + 1 interaction par écran ; le contenu prime sur une limite arbitraire de caractères.
- Animations de transition discrètes, désactivables via prefers-reduced-motion.

## Architecture d'implémentation
1. Identifier les rendus de `lessons.html` et distinguer écrans statiques, exercices, formulaires et examens.
2. Ajouter une couche de pagination au **niveau des blocs pédagogiques structurés**, pas en découpant arbitrairement le HTML après rendu.
3. Conserver les écouteurs, réponses et états du moteur lors du changement de page.
4. Intégrer la navigation aux boutons existants sans modifier les règles de réussite.
5. Vérifier le responsive sur iPhone petit écran, iPhone standard, tablette et ordinateur.

## Critères d'acceptation
- Aucune leçon A1.1 ne nécessite un défilement vertical interminable pour passer à la notion suivante.
- Aucun texte, option ou bouton n'est tronqué, y compris avec zoom texte à 200 %.
- Le nombre de pages est visible, la progression sauvegardée, et la validation reste fiable.
- Les examens, corrections, reprises et missions continuent de fonctionner.
- `main` reste intacte avant revue de la branche.
