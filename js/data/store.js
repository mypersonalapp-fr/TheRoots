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
    faceId: { enabled: false, credentialId: null },
    settings: {
      theme: "light",
      interfaceLang: "fr",
      preferredVoiceURI: null, // voix choisie dans Paramètres > Réglages généraux > Voix
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
  // Enregistre le résultat du test de niveau initial pour un GROUPE de
  // langue (ex. "en" pour anglais, tous accents confondus) — un seul test
  // par groupe, pas un par variante régionale. "entryLevel"/"entryDate" ne
  // sont écrits qu'une seule fois (le tout premier test) et ne bougent plus
  // ensuite — c'est la référence gardée pour se comparer plus tard, même
  // si "level" (le niveau actuel) évolue avec la progression.
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
};
