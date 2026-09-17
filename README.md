# The Roots — la racine des langues

Application d'apprentissage des langues (anglais pour commencer, puis
français, portugais, espagnol...). Suivi de progression, leçons interactives,
test de niveau, compréhension orale/écrite, groupes de lecture à venir.

## Lancer l'application en local

Aucune installation n'est nécessaire (pas de build, pas de dépendances) :
c'est du HTML/CSS/JavaScript pur (ES modules).

```bash
python3 -m http.server 8000
```

Puis ouvrir http://localhost:8000 dans le navigateur.

## Structure du projet

- `index.html` — point d'entrée (démarrage → connexion → application)
- `lessons.html` — moteur des leçons 1 à 4 (anglais, niveau A1)
- `css/` — styles (tokens de marque, fonds animés, écrans)
- `js/` — logique de l'application (écrans, données locales)
- `assets/img/` — illustrations et icône de l'application

## État actuel

Prototype fonctionnel : démarrage, connexion, coquille à 5 onglets
(Accueil, Mes cours, Compréhension orale, Compréhension écrite, Paramètres),
test de niveau initial, leçons 1 à 4 en anglais britannique/américain (A1).
Pas encore de backend : les données sont stockées localement (localStorage).
