// The Roots — fonds "mosaïque de drapeaux" en couleurs réelles (pas des
// illustrations pâles) : anglophones (Royaume-Uni, États-Unis), hispanique
// (Espagne), européens (Portugal, France). Utilisé derrière l'écran
// d'authentification et la page d'accueil.

function flagUK() {
  return `
  <svg viewBox="0 0 90 60" xmlns="http://www.w3.org/2000/svg">
    <rect width="90" height="60" fill="#00247d"/>
    <line x1="0" y1="0" x2="90" y2="60" stroke="#ffffff" stroke-width="12"/>
    <line x1="90" y1="0" x2="0" y2="60" stroke="#ffffff" stroke-width="12"/>
    <line x1="0" y1="0" x2="90" y2="60" stroke="#cf142b" stroke-width="5"/>
    <line x1="90" y1="0" x2="0" y2="60" stroke="#cf142b" stroke-width="5"/>
    <rect x="37" y="0" width="16" height="60" fill="#ffffff"/>
    <rect x="0" y="24" width="90" height="12" fill="#ffffff"/>
    <rect x="40.5" y="0" width="9" height="60" fill="#cf142b"/>
    <rect x="0" y="27" width="90" height="6" fill="#cf142b"/>
  </svg>`;
}

function flagUS() {
  const stripes = Array.from({ length: 13 }, (_, i) =>
    `<rect x="0" y="${i * (60/13)}" width="90" height="${60/13}" fill="${i % 2 === 0 ? '#b31942' : '#ffffff'}"/>`
  ).join("");
  const stars = Array.from({ length: 12 }, (_, i) => {
    const row = Math.floor(i / 4), col = i % 4;
    return `<circle cx="${6 + col * 8}" cy="${5 + row * 7}" r="1.3" fill="#ffffff"/>`;
  }).join("");
  return `
  <svg viewBox="0 0 90 60" xmlns="http://www.w3.org/2000/svg">
    ${stripes}
    <rect x="0" y="0" width="38" height="32" fill="#0a3161"/>
    ${stars}
  </svg>`;
}

function flagSpain() {
  return `
  <svg viewBox="0 0 90 60" xmlns="http://www.w3.org/2000/svg">
    <rect width="90" height="15" fill="#aa151b"/>
    <rect y="15" width="90" height="30" fill="#f1bf00"/>
    <rect y="45" width="90" height="15" fill="#aa151b"/>
    <circle cx="30" cy="30" r="7" fill="#aa151b" opacity="0.85"/>
  </svg>`;
}

function flagPortugal() {
  return `
  <svg viewBox="0 0 90 60" xmlns="http://www.w3.org/2000/svg">
    <rect width="36" height="60" fill="#046a38"/>
    <rect x="36" width="54" height="60" fill="#da291c"/>
    <circle cx="36" cy="30" r="10" fill="#f4c300" stroke="#ffffff" stroke-width="1.5"/>
  </svg>`;
}

function flagFrance() {
  return `
  <svg viewBox="0 0 90 60" xmlns="http://www.w3.org/2000/svg">
    <rect width="30" height="60" fill="#0055a4"/>
    <rect x="30" width="30" height="60" fill="#ffffff"/>
    <rect x="60" width="30" height="60" fill="#ef4135"/>
  </svg>`;
}

const FLAGS = { uk: flagUK, us: flagUS, es: flagSpain, pt: flagPortugal, fr: flagFrance };
export const FLAG_NAMES = { uk: "Royaume-Uni", us: "États-Unis", es: "Espagne", pt: "Portugal", fr: "France" };

/**
 * Affiche un seul drapeau à la fois, en petit, qui flotte doucement,
 * puis laisse place au suivant (fondu), en boucle.
 * codes : tableau parmi "uk","us","es","pt","fr"
 * Retourne une fonction stop() à appeler quand l'écran est quitté.
 */
export function mountFlagCarousel(container, codes, opts = {}) {
  const holdMs = opts.interval || 2200;
  container.innerHTML = `<div class="flag-carousel"><div class="flag-carousel-flag" id="fcFlag"></div></div>`;
  const flagEl = container.querySelector("#fcFlag");

  let i = 0;
  function show(idx) {
    flagEl.classList.remove("flag-in");
    void flagEl.offsetWidth; // relance la transition
    flagEl.innerHTML = FLAGS[codes[idx]] ? FLAGS[codes[idx]]() : "";
    flagEl.classList.add("flag-in");
  }
  show(i);
  const timer = setInterval(() => {
    i = (i + 1) % codes.length;
    show(i);
  }, holdMs);

  return function stop() { clearInterval(timer); };
}
