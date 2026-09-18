// The Roots — "store" de données simulées (pas de backend pour l'instant).
// Tout est gardé en local (localStorage) le temps que l'app fonctionne
// entièrement ; ce fichier est le seul à remplacer quand un vrai backend
// (comptes partagés entre appareils, PDF stockés côté serveur, etc.) sera
// branché — le reste de l'app ne parlera qu'à ces fonctions.

const KEY = "the_roots_store_v1";

function defaultData() {
  return {
    session: null, // { email }
    faceId: { enabled: false, credentialId: null },
    settings: {
      theme: "light",
      interfaceLang: "fr",
      langs: [
        { code: "en-gb", label: "Anglais (britannique)", level: null, progress: 0, leveled: false, entryLevel: null, entryDate: null },
        { code: "en-us", label: "Anglais (américain)", level: null, progress: 0, leveled: false, entryLevel: null, entryDate: null },
        { code: "es", label: "Espagnol", level: null, progress: 0, leveled: false, entryLevel: null, entryDate: null },
        { code: "pt", label: "Portugais", level: null, progress: 0, leveled: false, entryLevel: null, entryDate: null },
      ],
    },
  };
}

function load() {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return defaultData();
    const parsed = JSON.parse(raw);
    const defaults = defaultData();
    const merged = { ...defaults, ...parsed };

    // Migration : si de nouvelles langues ont été ajoutées à l'appli depuis
    // la création du compte (ex. espagnol/portugais ajoutés après coup), on
    // les ajoute à la liste sans toucher à la progression déjà enregistrée
    // pour les langues déjà suivies.
    const existingLangs = parsed.settings?.langs || defaults.settings.langs;
    const existingCodes = new Set(existingLangs.map((l) => l.code));
    const missingLangs = defaults.settings.langs.filter((l) => !existingCodes.has(l.code));
    merged.settings = {
      ...defaults.settings,
      ...(parsed.settings || {}),
      langs: [...existingLangs, ...missingLangs],
    };
    return merged;
  } catch (e) {
    return defaultData();
  }
}

function save(data) {
  try {
    localStorage.setItem(KEY, JSON.stringify(data));
  } catch (e) {
    /* stockage indisponible (navigation privée, etc.) — on continue sans persister */
  }
}

export const store = {
  get() {
    return load();
  },
  login(email, password) {
    const data = load();
    data.session = { email, password: password || "" };
    save(data);
    return data.session;
  },
  // Modification du compte depuis Paramètres > Sécurité (email et/ou mot de
  // passe). Simulé en local (pas de backend) : suffisant pour le prototype.
  updateAccount(patch) {
    const data = load();
    if (!data.session) return null;
    data.session = { ...data.session, ...patch };
    save(data);
    return data.session;
  },
  logout() {
    const data = load();
    data.session = null;
    save(data);
  },
  isLoggedIn() {
    return !!load().session;
  },
  // Face ID / Touch ID pour reverrouiller l'accès à l'appli sur cet
  // appareil (voir js/data/webauthn.js) — rien à voir avec un vrai compte
  // en ligne, juste un verrou local en plus du mot de passe.
  getFaceId() {
    return load().faceId;
  },
  enableFaceId(credentialId) {
    const data = load();
    data.faceId = { enabled: true, credentialId };
    save(data);
    return data.faceId;
  },
  disableFaceId() {
    const data = load();
    data.faceId = { enabled: false, credentialId: null };
    save(data);
    return data.faceId;
  },
  updateSettings(patch) {
    const data = load();
    data.settings = { ...data.settings, ...patch };
    save(data);
    return data.settings;
  },
  // Enregistre le résultat du test de niveau initial pour une langue :
  // niveau attribué (palier CECR atteint), et marque la langue comme
  // "leveled" pour débloquer les leçons. "entryLevel"/"entryDate" ne sont
  // écrits qu'une seule fois (le tout premier test) et ne bougent plus
  // ensuite — c'est la référence gardée pour se comparer plus tard, même
  // si "level" (le niveau courant) évolue avec la progression.
  setPlacementResult(code, { level, entryLevel, entryDate }) {
    const data = load();
    data.settings.langs = data.settings.langs.map((l) => {
      if (l.code !== code) return l;
      return {
        ...l,
        leveled: true,
        level,
        progress: l.progress || 0,
        entryLevel: l.entryLevel || entryLevel || level,
        entryDate: l.entryDate || entryDate || new Date().toISOString(),
      };
    });
    save(data);
    return data.settings;
  },
  getLang(code) {
    return load().settings.langs.find((l) => l.code === code) || null;
  },
};
