// The Roots — écran affiché à l'ouverture de l'application : l'image
// d'Ashley (assets/img/splash-bg.jpg) remplit tout l'écran (téléphone ou
// tablette, portrait ou paysage), quitte à recadrer légèrement les bords —
// aucun bouton n'est dessiné dans cette image, rien à réaligner.

export function renderSplash(root, onDone) {
  const el = document.createElement("div");
  el.className = "screen splash-screen";
  root.appendChild(el);

  const bg = document.createElement("img");
  bg.className = "screen-cover-bg bg-img-light";
  bg.src = "assets/img/splash-bg.jpg";
  bg.alt = "The Roots — apprends, parle, voyage";
  el.appendChild(bg);

  const bgDark = document.createElement("img");
  bgDark.className = "screen-cover-bg bg-img-dark";
  bgDark.src = "assets/img/splash-bg-dark.jpg";
  bgDark.alt = "";
  bgDark.setAttribute("aria-hidden", "true");
  el.appendChild(bgDark);

  // Petites bulles de salutations qui apparaissent une à une dans le haut
  // de l'écran, façon "Hello / Bonjour / Hola..." de l'icône de l'appli.
  const greetings = [
    { text: "Hello", cls: "splash-greeting-1" },
    { text: "Bonjour", cls: "splash-greeting-2" },
    { text: "Hola", cls: "splash-greeting-3" },
    { text: "Ciao", cls: "splash-greeting-4" },
    { text: "Hallo", cls: "splash-greeting-5" },
  ];
  greetings.forEach(g => {
    const b = document.createElement("span");
    b.className = "splash-greeting " + g.cls;
    b.textContent = g.text;
    el.appendChild(b);
  });

  requestAnimationFrame(() => el.classList.add("splash-in"));

  setTimeout(() => {
    el.classList.add("splash-fade-out");
    setTimeout(() => { el.remove(); onDone(); }, 350);
  }, 2650);
}
