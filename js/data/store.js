// The Roots — "store" de données simulées (pas de backend pour l'instant).
// Tout est gardé en local (localStorage) le temps que l'app fonctionne
// entièrement ; ce fichier est le seul à remplacer quand un vrai backend
// (comptes partagés entre appareils, PDF stockés côté serveur, etc.) sera
// branché — le reste de l'app ne parlera qu'à ces fonctions.
//
// Modèle des langues : un seul "groupe" par langue (Anglais, Espagnol,
// Portugais), avec ses variantes régionales (britannique/américain,
// colombien/Espagne, brésilien/Europe). Un seul test de niveau par groupe
// (pas un par variante) ; une fois le niveau obtenu, l'utilisateur choisit
// quelle variante suivre comme cours (selectedVariant).

const KEY = "the_roots_store_v1";

function defaultData() {
  return {
    session: null, // { email }
    faceId: { enabled: false, credentialId: null, declined: false },
    // "Rester connecté sans mot de passe" (24/09, demandé par Ashley) : si
    // activé, jusqu'à quelle date (timestamp ms) l'appli peut sauter
    // l'écran "Reconnecte-toi" à une vraie réouverture, sans pour autant
    // activer Face ID. Indépendant de Face ID — les deux peuvent être actifs
    // en même temps, Face ID prenant alors le dessus (voir app.js).
    passwordSkip: { enabled: false, until: null },
    settings: {
      theme: "light",
      interfaceLang: "fr",
      preferredVoiceURI: null, // voix choisie dans Paramètres > Réglages généraux > Voix
      // Langue apprise principale (en/es/pt) — demandée une seule fois, à la
      // toute première connexion (voir js/screens/choose-language.js et
      // app.js), modifiable ensuite dans Paramètres. Sert à personnaliser la
      // date/l'heure affichées sur l'Accueil (voir dashboard.js) : null tant
      // que la question n'a pas encore été posée.
      primaryLearningLang: null,
      langs: [
        {
          code: "en", label: "Anglais",
          variants: [
            { code: "en-gb", label: "Britannique" },
            { code: "en-us", label: "Américain" },
          ],
          selectedVariant: null,
          level: null, progress: 0, leveled: false, entryLevel: null, entryDate: null,
        },
        {
          code: "es", label: "Espagnol",
          variants: [
            { code: "es-co", label: "Colombien" },
            { code: "es-es", label: "Espagne" },
          ],
          selectedVariant: null,
          level: null, progress: 0, leveled: false, entryLevel: null, entryDate: null,
        },
        {
          code: "pt", label: "Portugais",
          variants: [
            { code: "pt-br", label: "Brésilien" },
            { code: "pt-pt", label: "Europe" },
          ],
          selectedVariant: null,
          level: null, progress: 0, leveled: false, entryLevel: null, entryDate: null,
        },
      ],
    },
  };
}

// Reprend un ancien format "une entrée par variante" (en-gb / en-us / es-co /
// es-es / pt-br / pt-pt séparément) et le fusionne dans le nouveau format
// groupé, sans perdre un niveau déjà obtenu sur une variante.
function migrateLangsToGroups(oldLangs, groups) {
  if (!Array.isArray(oldLangs) || !oldLangs.length) return groups;
  const alreadyGrouped = oldLangs.every((l) => Array.isArray(l.variants));
  if (alreadyGrouped) return oldLangs;

  const leveledByGroup = {};
  oldLangs.forEach((l) => {
    if (!l.leveled) return;
    const groupCode = (l.code || "").split("-")[0];
    if (!leveledByGroup[groupCode]) leveledByGroup[groupCode] = l;
  });

  return groups.map((g) => {
    const found = leveledByGroup[g.code];
    if (!found) return g;
    return {
      ...g,
      leveled: true,
      level: found.level,
      progress: found.progress || 0,
      entryLevel: found.entryLevel || found.level,
      entryDate: found.entryDate || null,
      selectedVariant: found.code && found.code.includes("-") ? found.code : g.selectedVariant,
    };
  });
}

function load() {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return defaultData();
    const parsed = JSON.parse(raw);
    const defaults = defaultData();
    const merged = { ...defaults, ...parsed };

    const rawExistingLangs = parsed.settings?.langs || defaults.settings.langs;
    const groupedLangs = migrateLangsToGroups(rawExistingLangs, defaults.settings.langs);
    const existingCodes = new Set(groupedLangs.map((l) => l.code));
    const missingLangs = defaults.settings.langs.filter((l) => !existingCodes.has(l.code));

    merged.settings = {
      ...defaults.settings,
      ...(parsed.settings || {}),
      langs: [...groupedLangs, ...missingLangs],
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
    data.faceId = { enabled: false, credentialId: null, declined: data.faceId?.declined || false };
    save(data);
    return data.faceId;
  },
  // L'apprenti a répondu "Plus tard" à la proposition Face ID (voir
  // login.js) — on ne la reproposera plus à chaque connexion, seulement
  // depuis Paramètres > Sécurité si l'apprenti veut l'activer plus tard.
  declineFaceIdOffer() {
    const data = load();
    data.faceId = { ...data.faceId, declined: true };
    save(data);
    return data.faceId;
  },
  // "Rester connecté sans mot de passe" pendant N jours (par défaut 30,
  // voir Paramètres > Sécurité) : au bout de N jours, la date "until" est
  // dépassée et l'appli redemande une reconnexion normale (voir app.js).
  getPasswordSkip() {
    return load().passwordSkip || { enabled: false, until: null };
  },
  enablePasswordSkip(days = 30) {
    const data = load();
    data.passwordSkip = { enabled: true, until: Date.now() + days * 24 * 3600 * 1000 };
    save(data);
    return data.passwordSkip;
  },
  disablePasswordSkip() {
    const data = load();
    data.passwordSkip = { enabled: false, until: null };
    save(data);
    return data.passwordSkip;
  },
  updateSettings(patch) {
    const data = load();
    data.settings = { ...data.settings, ...patch };
    save(data);
    return data.settings;
  },
  // Langue apprise principale — posée une seule fois (voir choose-language.js
  // et app.js), rappelable ensuite depuis Paramètres.
  setPrimaryLearningLang(code) {
    const data = load();
    data.settings.primaryLearningLang = code;
    save(data);
    return data.settings;
  },
  // Enregistre le résultat du test de niveau initial pour un GROUPE de
  // langue (ex. "en" pour anglais, tous accents confondus) — un seul test
  // par groupe, pas un par variante régionale. "entryLevel"/"entryDate" ne
  // sont écrits qu'une seule fois (le tout premier test) et ne bougent plus
  // ensuite — c'est la référence gardée pour se comparer plus tard, même
  // si "level" (le niveau actuel) évolue avec la progression.
  setPlacementResult(code, { level, entryLevel, entryDate, resetEntry = false }) {
    const data = load();
    data.settings.langs = data.settings.langs.map((l) => {
      if (l.code !== code) return l;
      return {
        ...l,
        leveled: true,
        level,
        progress: l.progress || 0,
        // resetEntry (mode créatrice, voir dev-config.js) : un nouveau
        // passage du test remplace aussi le niveau d'entrée.
        entryLevel: resetEntry ? (entryLevel || level) : (l.entryLevel || entryLevel || level),
        entryDate: resetEntry ? (entryDate || new Date().toISOString()) : (l.entryDate || entryDate || new Date().toISOString()),
      };
    });
    save(data);
    return data.settings;
  },
  // Choix du "cours" suivi une fois le niveau obtenu pour le groupe (ex.
  // britannique ou américain pour l'anglais) — pas besoin de repasser un
  // test, c'est juste la variante de contenu suivie.
  selectVariant(groupCode, variantCode) {
    const data = load();
    data.settings.langs = data.settings.langs.map((l) => (
      l.code === groupCode ? { ...l, selectedVariant: variantCode } : l
    ));
    save(data);
    return data.settings;
  },
  getLang(code) {
    return load().settings.langs.find((l) => l.code === code) || null;
  },
  // Progression dans les espaces libres "Compréhension" (écrite/orale) —
  // indépendants des paliers de cours. On garde, par langue et par type
  // (ecrite/orale), l'index du prochain contenu à débloquer et le résultat
  // de chaque contenu déjà fait (pour ne pas re-proposer/re-corriger).
  getCompProgress(kind, langCode) {
    const data = load();
    const store_ = (data.settings.compProgress || {})[kind] || {};
    return store_[langCode] || { currentIndex: 0, results: {} };
  },
  setCompProgress(kind, langCode, patch) {
    const data = load();
    const compProgress = data.settings.compProgress || {};
    const forKind = compProgress[kind] || {};
    const current = forKind[langCode] || { currentIndex: 0, results: {} };
    forKind[langCode] = { ...current, ...patch };
    compProgress[kind] = forKind;
    data.settings.compProgress = compProgress;
    save(data);
    return forKind[langCode];
  },
};
