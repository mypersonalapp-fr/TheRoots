// The Roots — décor animé "Royaume-Uni" : drapeau qui flotte, Big Ben (aiguilles
// qui tournent), Tower Bridge (travée qui s'ouvre/se ferme). Illustré en SVG +
// animé en CSS (voir css/backgrounds.css) — léger, pas de vidéo/image réelle.

export function ukBackgroundSVG() {
  return `
  <svg viewBox="0 0 1100 420" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <!-- ciel très pâle -->
    <rect x="0" y="0" width="1100" height="420" fill="#ffffff"/>
    <!-- sol / Tamise stylisée -->
    <rect x="0" y="392" width="1100" height="28" fill="#eaf1fb"/>

    <!-- Drapeau britannique, en haut à gauche, sur un mât -->
    <g transform="translate(60,40)">
      <rect x="0" y="0" width="6" height="130" fill="#c7ccd4"/>
      <g class="uk-flag">
        <rect x="6" y="6" width="120" height="76" fill="#1b3a93"/>
        <rect x="6" y="6" width="120" height="76" fill="none"/>
        <polygon points="6,6 126,82 126,6" fill="#ffffff" opacity="0.001"/>
        <line x1="6" y1="6" x2="126" y2="82" stroke="#ffffff" stroke-width="14"/>
        <line x1="6" y1="82" x2="126" y2="6" stroke="#ffffff" stroke-width="14"/>
        <line x1="6" y1="6" x2="126" y2="82" stroke="#e0432f" stroke-width="6"/>
        <line x1="6" y1="82" x2="126" y2="6" stroke="#e0432f" stroke-width="6"/>
        <rect x="52" y="6" width="28" height="76" fill="#ffffff"/>
        <rect x="6" y="32" width="120" height="24" fill="#ffffff"/>
        <rect x="60" y="6" width="12" height="76" fill="#e0432f"/>
        <rect x="6" y="38" width="120" height="12" fill="#e0432f"/>
      </g>
    </g>

    <!-- Big Ben -->
    <g transform="translate(300,60)">
      <rect x="-34" y="0" width="68" height="332" fill="#e7e2d6"/>
      <rect x="-34" y="0" width="68" height="332" fill="#efece3" opacity="0.5"/>
      <!-- horloge -->
      <circle cx="0" cy="70" r="46" fill="#faf7ee" stroke="#c7a23a" stroke-width="6"/>
      <g class="uk-hand-min" transform="translate(0,70)">
        <line x1="0" y1="0" x2="0" y2="-34" stroke="#1b1d22" stroke-width="3" stroke-linecap="round"/>
      </g>
      <g class="uk-hand-hour" transform="translate(0,70)">
        <line x1="0" y1="0" x2="0" y2="-22" stroke="#1b1d22" stroke-width="4" stroke-linecap="round"/>
      </g>
      <circle cx="0" cy="70" r="3.5" fill="#1b1d22"/>
      <!-- flèche du clocher -->
      <polygon points="-34,0 0,-58 34,0" fill="#c7a23a"/>
    </g>

    <!-- Tower Bridge, à droite -->
    <g transform="translate(560,150)">
      <!-- tours -->
      <rect x="0" y="0" width="42" height="242" fill="#8fa6c9"/>
      <rect x="380" y="0" width="42" height="242" fill="#8fa6c9"/>
      <polygon points="0,0 21,-30 42,0" fill="#6f88ae"/>
      <polygon points="380,0 401,-30 422,0" fill="#6f88ae"/>
      <!-- passerelle haute -->
      <rect x="42" y="46" width="338" height="14" fill="#6f88ae"/>
      <!-- travée basse, deux moitiés qui s'ouvrent -->
      <g class="uk-bridge-leaf-left" transform="translate(42,196)">
        <rect x="0" y="0" width="190" height="16" fill="#3f5b86"/>
      </g>
      <g class="uk-bridge-leaf-right" transform="translate(422,196)">
        <rect x="-190" y="0" width="190" height="16" fill="#3f5b86"/>
      </g>
    </g>
  </svg>`;
}
