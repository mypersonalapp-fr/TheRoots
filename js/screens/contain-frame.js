// The Roots — petit utilitaire partagé : affiche une image d'Ashley EN
// ENTIER, jamais coupée, quelle que soit la forme de l'écran (téléphone,
// tablette...). On calcule un cadre aux proportions exactes de l'image
// (comme "contain"), centré, et on y place l'image + les éventuels
// boutons — leurs positions en % restent alignées avec l'image parce que
// le cadre a exactement ses proportions, jamais étiré ni rogné.

export function mountContainFrame(container, aspectW, aspectH, innerHTML) {
  const frame = document.createElement("div");
  frame.className = "contain-frame";
  frame.innerHTML = innerHTML;
  container.appendChild(frame);

  function resize() {
    const cw = container.clientWidth;
    const ch = container.clientHeight;
    const targetAspect = aspectW / aspectH;
    let w, h;
    if (cw / ch > targetAspect) {
      h = ch; w = ch * targetAspect;
    } else {
      w = cw; h = cw / targetAspect;
    }
    frame.style.width = w + "px";
    frame.style.height = h + "px";
  }
  resize();
  window.addEventListener("resize", resize);

  return { frame, destroy: () => window.removeEventListener("resize", resize) };
}
