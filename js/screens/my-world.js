// The Roots — onglet "My World" : un globe terrestre lumineux qui flotte au
// milieu de l'écran et tourne lentement (on peut le faire pivoter du doigt),
// en mode jour ou nuit (interrupteur ☀️ / 🌙). Sur le globe, un point
// lumineux par pays où l'on parle officiellement une des langues de
// l'appli : doré = anglais, corail = espagnol, vert = portugais (+ la
// France en point de départ). Toucher un point fait tourner le globe
// jusqu'au pays et ouvre sa fiche.
//
// Ce fichier est autonome : il injecte lui-même son style (une seule fois)
// et charge à la demande ses 2 bibliothèques de dessin (d3 et topojson,
// depuis cdnjs) + la carte du monde (Natural Earth, via Datamaps) — rien
// n'est chargé tant qu'on n'ouvre pas l'onglet. Images de fond :
// assets/img/myworld-day.jpg et assets/img/myworld-night.jpg.
//
// NB : le même code sert aussi à la maquette publiée (page "My World") —
// si on le modifie ici, penser à régénérer la maquette.

const LIBS = [
  ["d3", "https://cdnjs.cloudflare.com/ajax/libs/d3/7.9.0/d3.min.js"],
  ["topojson", "https://cdnjs.cloudflare.com/ajax/libs/topojson/3.0.2/topojson.min.js"],
];
const WORLD_SOURCES = [
  "https://cdnjs.cloudflare.com/ajax/libs/datamaps/0.5.9/datamaps.world.min.js",
  "https://cdn.jsdelivr.net/npm/datamaps@0.5.9/dist/datamaps.world.min.js",
];

// ---------- Les 7 grandes destinations de l'appli ----------
const MAIN = [
  { id:"fr", lang:"fr", flag:"🇫🇷", country:"France", city:"Paris", title:"Ta langue", hello:"Bonjour !", home:true, ll:[2.35,48.86],
    sub:"Ton point de départ. Toutes les langues de The Roots s'apprennent depuis le français." },
  { id:"gb", lang:"en", flag:"🇬🇧", country:"Royaume-Uni", city:"Londres", title:"Anglais britannique", hello:"Hello!", ll:[-0.13,51.51],
    sub:"Big Ben, le Tube, l'afternoon tea… Explore l'anglais tel qu'on le parle à Londres." },
  { id:"us", lang:"en", flag:"🇺🇸", country:"États-Unis", city:"New York", title:"Anglais américain", hello:"Hi there!", ll:[-74.0,40.71],
    sub:"L'accent, les expressions et la culture américaine, de New York à la Californie." },
  { id:"es", lang:"es", flag:"🇪🇸", country:"Espagne", city:"Madrid", title:"Espagnol d'Espagne", hello:"¡Hola!", ll:[-3.70,40.42],
    sub:"Tapas, siesta et « vosotros » : l'espagnol de la péninsule." },
  { id:"co", lang:"es", flag:"🇨🇴", country:"Colombie", city:"Bogotá", title:"Espagnol colombien", hello:"¿Qué más?", ll:[-74.07,4.71],
    sub:"Un espagnol réputé clair et chaleureux — « ¿Qué más? » veut dire « ça va ? »." },
  { id:"pt", lang:"pt", flag:"🇵🇹", country:"Portugal", city:"Lisbonne", title:"Portugais européen", hello:"Olá! Tudo bem?", ll:[-9.14,38.72],
    sub:"Fado, pastéis de nata et les voyelles « avalées » du portugais de Lisbonne." },
  { id:"br", lang:"pt", flag:"🇧🇷", country:"Brésil", city:"Rio de Janeiro", title:"Portugais brésilien", hello:"Oi! Tudo bom?", ll:[-43.17,-22.91],
    sub:"Plus chantant, plus ouvert : le portugais du Brésil, de Rio à São Paulo." },
];

// ---------- Tous les autres pays où la langue est OFFICIELLE ----------
// [code pays, nom, capitale, [lon, lat], précision, salutation locale]
const OTHERS = {
  en: [
    ["IE","Irlande","Dublin",[-6.26,53.35],"avec l'irlandais (gaélique)","Hiya!"],
    ["MT","Malte","La Valette",[14.51,35.90],"avec le maltais"],
    ["CA","Canada","Ottawa",[-75.70,45.42],"avec le français"],
    ["JM","Jamaïque","Kingston",[-76.79,18.02],"on y parle aussi le patois jamaïcain","Wah gwaan!"],
    ["BS","Bahamas","Nassau",[-77.35,25.05],""],
    ["BZ","Belize","Belmopan",[-88.77,17.25],"seul pays d'Amérique centrale où l'anglais est officiel"],
    ["GY","Guyana","Georgetown",[-58.16,6.80],"seul pays anglophone d'Amérique du Sud"],
    ["TT","Trinité-et-Tobago","Port-d'Espagne",[-61.51,10.66],""],
    ["BB","Barbade","Bridgetown",[-59.61,13.10],""],
    ["AG","Antigua-et-Barbuda","Saint John's",[-61.85,17.12],""],
    ["KN","Saint-Christophe-et-Niévès","Basseterre",[-62.73,17.30],""],
    ["DM","Dominique","Roseau",[-61.39,15.30],""],
    ["LC","Sainte-Lucie","Castries",[-60.99,14.01],""],
    ["VC","Saint-Vincent-et-les-Grenadines","Kingstown",[-61.23,13.16],""],
    ["GD","Grenade","Saint-Georges",[-61.75,12.06],""],
    ["NG","Nigeria","Abuja",[7.49,9.06],"plus de 500 langues parlées dans le pays","How far?"],
    ["GH","Ghana","Accra",[-0.19,5.60],""],
    ["SL","Sierra Leone","Freetown",[-13.23,8.48],""],
    ["LR","Liberia","Monrovia",[-10.80,6.30],""],
    ["GM","Gambie","Banjul",[-16.58,13.45],""],
    ["CM","Cameroun","Yaoundé",[11.50,3.85],"avec le français"],
    ["KE","Kenya","Nairobi",[36.82,-1.29],"avec le swahili","Jambo! / Hello!"],
    ["UG","Ouganda","Kampala",[32.58,0.35],"avec le swahili"],
    ["TZ","Tanzanie","Dodoma",[35.74,-6.16],"avec le swahili","Jambo! / Hello!"],
    ["RW","Rwanda","Kigali",[30.06,-1.95],"avec le kinyarwanda, le français et le swahili"],
    ["SS","Soudan du Sud","Djouba",[31.58,4.85],""],
    ["ZM","Zambie","Lusaka",[28.32,-15.39],""],
    ["MW","Malawi","Lilongwe",[33.79,-13.97],"avec le chichewa"],
    ["ZW","Zimbabwe","Harare",[31.05,-17.83],"parmi 16 langues officielles"],
    ["BW","Botswana","Gaborone",[25.91,-24.65],"avec le setswana"],
    ["NA","Namibie","Windhoek",[17.08,-22.56],""],
    ["ZA","Afrique du Sud","Pretoria",[28.19,-25.75],"parmi 12 langues officielles","Howzit!"],
    ["LS","Lesotho","Maseru",[27.48,-29.31],"avec le sesotho"],
    ["SZ","Eswatini","Mbabane",[31.14,-26.31],"avec le swati"],
    ["MU","Maurice","Port-Louis",[57.50,-20.16],"langue du Parlement ; le français et le créole sont partout"],
    ["SC","Seychelles","Victoria",[55.45,-4.62],"avec le français et le créole seychellois"],
    ["IN","Inde","New Delhi",[77.21,28.61],"avec l'hindi — et 22 langues reconnues","Namaste! / Hello!"],
    ["PK","Pakistan","Islamabad",[73.05,33.68],"avec l'ourdou"],
    ["PH","Philippines","Manille",[120.98,14.60],"avec le filipino"],
    ["SG","Singapour","Singapour",[103.82,1.35],"avec le malais, le mandarin et le tamoul","Hello lah!"],
    ["AU","Australie","Canberra",[149.13,-35.28],"langue nationale de fait","G'day!"],
    ["NZ","Nouvelle-Zélande","Wellington",[174.78,-41.29],"avec le maori (et la langue des signes)","Kia ora!"],
    ["PG","Papouasie-Nouvelle-Guinée","Port Moresby",[147.18,-9.44],"avec le tok pisin et le hiri motu"],
    ["FJ","Fidji","Suva",[178.44,-18.14],"avec le fidjien et l'hindi fidjien","Bula!"],
    ["SB","Îles Salomon","Honiara",[159.95,-9.43],""],
    ["VU","Vanuatu","Port-Vila",[168.32,-17.73],"avec le français et le bichelamar"],
    ["WS","Samoa","Apia",[-171.76,-13.83],"avec le samoan","Talofa!"],
    ["TO","Tonga","Nuku'alofa",[-175.20,-21.14],"avec le tongien"],
    ["KI","Kiribati","Tarawa",[173.03,1.45],"avec le gilbertin"],
    ["TV","Tuvalu","Funafuti",[179.19,-8.52],"avec le tuvaluan"],
    ["NR","Nauru","Yaren",[166.92,-0.55],"avec le nauruan"],
    ["MH","Îles Marshall","Majuro",[171.38,7.09],"avec le marshallais"],
    ["FM","Micronésie","Palikir",[158.16,6.92],""],
    ["PW","Palaos","Ngerulmud",[134.62,7.50],"avec le paluan"],
  ],
  es: [
    ["MX","Mexique","Mexico",[-99.13,19.43],"le pays qui compte le plus d'hispanophones au monde","¿Qué onda?"],
    ["GT","Guatemala","Guatemala",[-90.51,14.64],"avec une vingtaine de langues mayas"],
    ["HN","Honduras","Tegucigalpa",[-87.21,14.07],""],
    ["SV","Salvador","San Salvador",[-89.19,13.69],""],
    ["NI","Nicaragua","Managua",[-86.25,12.13],""],
    ["CR","Costa Rica","San José",[-84.09,9.93],"« Pura vida » y sert à la fois de bonjour, merci et ça va","¡Pura vida!"],
    ["PA","Panama","Panama",[-79.52,8.98],""],
    ["CU","Cuba","La Havane",[-82.37,23.11],"","¿Qué bolá?"],
    ["DO","République dominicaine","Saint-Domingue",[-69.93,18.49],"","¿Qué lo que?"],
    ["PR","Porto Rico","San Juan",[-66.11,18.47],"avec l'anglais (territoire des États-Unis)","¡Wepa!"],
    ["VE","Venezuela","Caracas",[-66.90,10.49],"","¡Épale!"],
    ["EC","Équateur","Quito",[-78.47,-0.18],"avec le kichwa et le shuar pour les échanges interculturels"],
    ["PE","Pérou","Lima",[-77.04,-12.05],"avec le quechua et l'aymara"],
    ["BO","Bolivie","Sucre",[-65.26,-19.04],"parmi 37 langues officielles"],
    ["CL","Chili","Santiago",[-70.67,-33.45],"un espagnol rapide, plein d'expressions locales","¿Cachai?"],
    ["AR","Argentine","Buenos Aires",[-58.38,-34.60],"on y dit « vos » à la place de « tú »","¡Che, hola!"],
    ["UY","Uruguay","Montevideo",[-56.16,-34.90],""],
    ["PY","Paraguay","Asunción",[-57.58,-25.26],"avec le guarani, parlé par presque tout le pays"],
    ["GQ","Guinée équatoriale","Malabo",[8.78,3.75],"seul pays hispanophone d'Afrique — avec le français et le portugais"],
  ],
  pt: [
    ["AO","Angola","Luanda",[13.23,-8.84],"",""],
    ["MZ","Mozambique","Maputo",[32.59,-25.97],""],
    ["CV","Cap-Vert","Praia",[-23.51,14.93],"le créole cap-verdien y est la langue de tous les jours"],
    ["GW","Guinée-Bissau","Bissau",[-15.60,11.86],"le créole de Guinée y est très parlé"],
    ["ST","Sao Tomé-et-Principe","São Tomé",[6.73,0.34],""],
    ["TL","Timor oriental","Dili",[125.57,-8.56],"avec le tétoum — seul pays lusophone d'Asie"],
  ],
};

const LANG_INFO = {
  en: { label: "Anglais", noun: "l'anglais", hello: "Hello!", count: 0 },
  es: { label: "Espagnol", noun: "l'espagnol", hello: "¡Hola!", count: 0 },
  pt: { label: "Portugais", noun: "le portugais", hello: "Olá!", count: 0 },
};

const flagOf = (iso) => String.fromCodePoint(...iso.split("").map((c) => 0x1F1E6 + c.charCodeAt(0) - 65));

function buildPlaces() {
  const minor = [];
  Object.entries(OTHERS).forEach(([lang, rows]) => rows.forEach(([iso, country, city, ll, extra, hello]) => {
    const info = LANG_INFO[lang];
    const note = extra ? (/^(avec|parmi)/.test(extra) ? " " + extra : " — " + extra) : "";
    minor.push({
      id: iso.toLowerCase(), lang, flag: flagOf(iso), country, city, ll, minor: true,
      title: `${info.label} · langue officielle`, hello: hello || info.hello,
      sub: `${info.noun.charAt(0).toUpperCase() + info.noun.slice(1)} y est langue officielle${note}.`,
    });
  }));
  const all = MAIN.concat(minor);
  // Nombre de pays par langue (grands points inclus). La Guinée équatoriale
  // a aussi le portugais pour langue officielle : comptée des deux côtés.
  LANG_INFO.en.count = all.filter((p) => p.lang === "en").length;
  LANG_INFO.es.count = all.filter((p) => p.lang === "es").length;
  LANG_INFO.pt.count = all.filter((p) => p.lang === "pt").length + 1;
  return all;
}

// Grandes villes (lon, lat, intensité) pour les "lumières de la nuit".
const CITIES = [
  [-74,40.7,1],[-118.2,34,1],[-87.6,41.9,.9],[-95.4,29.8,.8],[-80.2,25.8,.8],[-122.4,37.8,.8],[-122.3,47.6,.7],[-77,38.9,.8],[-71.1,42.4,.8],[-84.4,33.7,.8],
  [-96.8,32.8,.8],[-112.1,33.4,.7],[-104.9,39.7,.6],[-93.3,45,.6],[-90.2,38.6,.6],[-83,42.3,.7],[-75.2,40,.8],[-79.4,43.7,.8],[-73.6,45.5,.7],[-123.1,49.3,.6],
  [-114.1,51,.5],[-99.1,19.4,1],[-103.3,20.7,.7],[-100.3,25.7,.7],[-90.5,14.6,.5],[-84.1,9.9,.4],[-79.5,9,.4],[-82.4,23.1,.5],[-69.9,18.5,.5],[-66.1,18.4,.4],
  [-74.1,4.7,.8],[-75.6,6.2,.6],[-66.9,10.5,.6],[-78.5,-.2,.5],[-77,-12,.8],[-68.1,-16.5,.5],[-70.7,-33.4,.8],[-58.4,-34.6,1],[-56.2,-34.9,.5],[-46.6,-23.5,1],
  [-43.2,-22.9,.9],[-47.9,-15.8,.6],[-38.5,-13,.6],[-34.9,-8.1,.6],[-38.5,-3.7,.6],[-60,-3.1,.4],[-49.3,-25.4,.6],[-51.2,-30,.6],[-43.9,-19.9,.7],
  [-0.1,51.5,1],[2.35,48.9,1],[-3.7,40.4,.9],[2.2,41.4,.8],[-9.1,38.7,.7],[-8.6,41.2,.6],[12.5,41.9,.8],[9.2,45.5,.9],[14.3,40.9,.6],[13.4,52.5,.9],
  [10,53.6,.7],[11.6,48.1,.7],[8.7,50.1,.7],[6.8,51.2,.8],[4.9,52.4,.8],[4.4,50.8,.7],[16.4,48.2,.7],[14.4,50.1,.6],[19,47.5,.6],[21,52.2,.7],
  [18.1,59.3,.6],[10.8,59.9,.5],[12.6,55.7,.6],[24.9,60.2,.5],[26.1,44.4,.6],[23.3,42.7,.5],[23.7,38,.7],[28.9,41,1],[32.9,39.9,.6],[37.6,55.8,1],
  [30.3,59.9,.8],[30.5,50.5,.7],[27.6,53.9,.5],[-2.2,53.5,.7],[-1.9,52.5,.7],[-3.2,55.9,.5],[-6.3,53.3,.6],[5.4,43.3,.6],[4.8,45.8,.6],[-1.6,47.2,.5],
  [31.2,30,1],[29.9,31.2,.6],[3.1,36.8,.6],[10.2,36.8,.5],[-7.6,33.6,.7],[-6.8,34,.5],[3.4,6.5,.9],[7.5,9.1,.6],[-0.2,5.6,.6],[-4,5.3,.6],
  [-17.4,14.7,.5],[36.8,-1.3,.6],[38.7,9,.6],[32.6,.3,.5],[39.3,-6.8,.5],[28,-26.2,.8],[18.4,-33.9,.6],[31,-29.9,.5],[15.3,-4.3,.7],[13.2,-8.8,.5],
  [35.2,31.8,.6],[44.4,33.3,.7],[46.7,24.7,.7],[39.2,21.5,.6],[55.3,25.3,.8],[51.4,35.7,.9],[59.6,36.3,.5],[67,24.9,.9],[74.3,31.5,.8],[73,33.7,.5],
  [77.2,28.6,1],[72.9,19.1,1],[88.4,22.6,.9],[80.3,13.1,.8],[77.6,13,.8],[78.5,17.4,.8],[72.6,23,.7],[75.8,26.9,.6],[80.9,26.8,.6],[90.4,23.8,.9],
  [85.3,27.7,.4],[79.9,6.9,.5],[96.2,16.8,.6],[100.5,13.8,.9],[106.7,10.8,.8],[105.8,21,.7],[101.7,3.1,.8],[103.8,1.35,.8],[106.8,-6.2,1],[112.8,-7.3,.7],
  [110.4,-7,.6],[120.98,14.6,.9],[116.4,39.9,1],[121.5,31.2,1],[113.3,23.1,1],[114.1,22.5,.9],[104.1,30.7,.8],[106.5,29.6,.8],[108.9,34.3,.7],[114.3,30.6,.8],
  [117.2,39.1,.8],[118.8,32.1,.7],[120.2,30.3,.7],[126.6,45.8,.6],[123.4,41.8,.7],[113.6,34.8,.7],[117,36.7,.6],[121.6,25,.8],[126.98,37.6,1],[129.1,35.2,.7],
  [139.7,35.7,1],[135.5,34.7,.9],[136.9,35.2,.7],[130.4,33.6,.6],[141.4,43.1,.5],[151.2,-33.9,.8],[145,-37.8,.8],[153,-27.5,.6],[115.9,-32,.6],[174.8,-36.8,.5],
  [69.3,41.3,.5],[76.9,43.3,.5],[71.4,51.2,.4],[60.6,56.8,.5],[82.9,55,.5],[104.3,52.3,.4],[131.9,43.1,.4],[49.1,55.8,.5],[44,56.3,.5],[39.7,47.2,.5],
];

const CSS = `
.mw{ position:absolute; inset:0; overflow:hidden; font-family:"Manrope","Avenir Next","Segoe UI",system-ui,sans-serif; color:#13201f; --mw-top:64px; }
.mw-bg{ position:absolute; inset:0; width:100%; height:100%; object-fit:cover; object-position:50% 100%; transition:opacity 1.4s ease; }
.mw-bg-night{ opacity:0; }
.mw.night .mw-bg-night{ opacity:1; }
.mw.night .mw-bg-day{ opacity:0; }
.mw-veil{ position:absolute; inset:0 0 auto 0; height:170px; background:linear-gradient(to bottom, rgba(255,255,255,.28), transparent); pointer-events:none; transition:background 1.4s ease; }
.mw.night .mw-veil{ background:linear-gradient(to bottom, rgba(4,10,30,.5), transparent); }
.mw-daynight{ position:absolute; z-index:5; top:calc(var(--mw-top) + 2px); right:16px; width:74px; height:38px; border-radius:999px;
  border:1px solid rgba(255,255,255,.6); background:rgba(255,255,255,.55); backdrop-filter:blur(10px); -webkit-backdrop-filter:blur(10px);
  cursor:pointer; padding:0; display:flex; align-items:center; justify-content:space-between; font-size:16px; box-shadow:0 4px 12px rgba(20,20,30,.12); transition:background 1s ease; }
.mw-daynight .ico{ width:36px; text-align:center; position:relative; z-index:1; }
.mw-daynight .knob{ position:absolute; top:3px; left:3px; width:30px; height:30px; border-radius:50%; background:#fff; box-shadow:0 2px 6px rgba(0,0,0,.18);
  transition:transform .45s cubic-bezier(.3,.8,.3,1), background .6s ease; }
.mw.night .mw-daynight{ background:rgba(20,32,70,.6); border-color:rgba(160,190,255,.35); }
.mw.night .mw-daynight .knob{ transform:translateX(36px); background:#dfe8ff; box-shadow:0 0 14px rgba(170,200,255,.8); }
.mw-stage{ position:absolute; left:0; right:0; top:calc(var(--mw-top) + 44px); bottom:290px; display:flex; align-items:center; justify-content:center; }
.mw-floater{ position:relative; animation:mw-float 6.5s ease-in-out infinite; }
@keyframes mw-float{ 0%,100%{ transform:translateY(0); } 50%{ transform:translateY(-12px); } }
.mw-halo{ position:absolute; inset:-18%; border-radius:50%; pointer-events:none; background:radial-gradient(circle, rgba(255,244,214,.55) 0%, rgba(255,244,214,.18) 45%, transparent 68%);
  transition:background 1.4s ease; animation:mw-breathe 6.5s ease-in-out infinite; }
.mw.night .mw-halo{ background:radial-gradient(circle, rgba(120,170,255,.45) 0%, rgba(80,130,255,.16) 45%, transparent 68%); }
@keyframes mw-breathe{ 0%,100%{ opacity:.85; } 50%{ opacity:1; } }
.mw canvas{ display:block; position:relative; touch-action:none; cursor:grab; border-radius:50%; }
.mw canvas:active{ cursor:grabbing; }
.mw-ground{ position:absolute; left:50%; bottom:-14%; width:62%; height:9%; transform:translateX(-50%); border-radius:50%;
  background:radial-gradient(ellipse, rgba(30,40,60,.35), transparent 70%); filter:blur(6px); animation:mw-ground 6.5s ease-in-out infinite; transition:background 1.4s ease; pointer-events:none; }
.mw.night .mw-ground{ background:radial-gradient(ellipse, rgba(130,180,255,.55), transparent 70%); }
@keyframes mw-ground{ 0%,100%{ transform:translateX(-50%) scale(1); opacity:.9; } 50%{ transform:translateX(-50%) scale(.82); opacity:.6; } }
.mw-markers{ position:absolute; inset:0; pointer-events:none; }
.mw-marker{ position:absolute; width:26px; height:26px; margin:-13px 0 0 -13px; border:none; background:none; padding:0; pointer-events:auto; cursor:pointer; transition:opacity .25s ease;
  --core:#fff4d6; --glow:255,200,90; }
.mw-marker[data-lang="es"]{ --core:#ffe4dd; --glow:255,105,85; }
.mw-marker[data-lang="pt"]{ --core:#dcffe9; --glow:50,215,135; }
.mw-marker[data-lang="fr"]{ --core:#ffffff; --glow:120,190,255; }
.mw-marker .dot{ position:absolute; left:50%; top:50%; width:8px; height:8px; margin:-4px 0 0 -4px; border-radius:50%; background:var(--core);
  box-shadow:0 0 6px 2px rgba(var(--glow),.95), 0 0 16px 4px rgba(var(--glow),.5); transition:transform .25s ease; }
.mw-marker .ring{ position:absolute; left:50%; top:50%; width:8px; height:8px; margin:-4px 0 0 -4px; border-radius:50%; border:1.5px solid rgba(var(--glow),.9); animation:mw-pulse 2.4s ease-out infinite; }
@keyframes mw-pulse{ 0%{ transform:scale(1); opacity:.9; } 100%{ transform:scale(3.4); opacity:0; } }
.mw-marker .flag{ position:absolute; left:50%; bottom:100%; transform:translate(-50%, 4px); font-size:20px; line-height:1; opacity:0; transition:opacity .25s ease, transform .25s ease; filter:drop-shadow(0 2px 4px rgba(0,0,0,.35)); }
.mw-marker.active .flag{ opacity:1; transform:translate(-50%, -2px); }
.mw-marker.active .dot{ transform:scale(1.35); }
.mw-marker.hidden{ opacity:0; pointer-events:none; }
.mw-marker.minor{ width:20px; height:20px; margin:-10px 0 0 -10px; }
.mw-marker.minor .ring{ display:none; }
.mw-marker.minor .dot{ width:5px; height:5px; margin:-2.5px 0 0 -2.5px; box-shadow:0 0 4px 1px rgba(var(--glow),.95), 0 0 10px 3px rgba(var(--glow),.45);
  animation:mw-twinkle 3s ease-in-out infinite; animation-delay:var(--tw,0s); }
.mw-marker.minor.active .ring{ display:block; }
@keyframes mw-twinkle{ 0%,100%{ opacity:1; } 50%{ opacity:.45; } }
.mw-hint{ position:absolute; left:0; right:0; bottom:264px; padding:0 16px; text-align:center; font-size:12.5px; font-weight:700; color:rgba(19,32,31,.78);
  text-shadow:0 1px 6px rgba(255,255,255,.75); transition:color 1.2s ease, opacity .6s ease; pointer-events:none; }
.mw.night .mw-hint{ color:rgba(225,235,255,.88); text-shadow:0 1px 8px rgba(0,0,0,.6); }
.mw-dock{ position:absolute; left:0; right:0; bottom:0; z-index:4; padding:0 16px calc(16px + env(safe-area-inset-bottom, 0px)); }
.mw-chips{ display:flex; gap:8px; overflow-x:auto; padding:2px 2px 8px; scrollbar-width:none; }
.mw-chips::-webkit-scrollbar{ display:none; }
.mw-chip{ flex:0 0 auto; display:flex; align-items:center; gap:6px; font-family:inherit; font-weight:800; font-size:12.5px; padding:8px 12px; border-radius:999px;
  border:1px solid rgba(255,255,255,.6); background:rgba(255,255,255,.6); backdrop-filter:blur(10px); -webkit-backdrop-filter:blur(10px); color:#3f4d4b; cursor:pointer; }
.mw-chip.active{ background:#1b3c39; border-color:#1b3c39; color:#fff; }
.mw.night .mw-chip{ background:rgba(18,30,64,.55); border-color:rgba(160,190,255,.28); color:#dfe8ff; }
.mw.night .mw-chip.active{ background:#dfe8ff; color:#10204a; border-color:#dfe8ff; }
.mw-chip .sw{ width:9px; height:9px; border-radius:50%; background:rgb(var(--glow)); box-shadow:0 0 6px rgba(var(--glow),.9); }
.mw-chip.toggle{ --glow:255,200,90; }
.mw-chip.toggle[data-lang="es"]{ --glow:255,105,85; }
.mw-chip.toggle[data-lang="pt"]{ --glow:50,215,135; }
.mw-chip.toggle.off{ opacity:.5; }
.mw-chip.toggle.off .sw{ background:transparent; box-shadow:inset 0 0 0 1.5px rgb(var(--glow)); }
.mw-card{ border-radius:22px; padding:14px 16px; background:rgba(255,255,255,.45); border:1px solid rgba(255,255,255,.6);
  backdrop-filter:blur(14px) saturate(1.15); -webkit-backdrop-filter:blur(14px) saturate(1.15); box-shadow:0 10px 26px rgba(20,20,30,.12);
  transition:background 1.2s ease, color 1.2s ease, border-color 1.2s ease; }
.mw.night .mw-card{ background:rgba(10,18,44,.58); border-color:rgba(160,190,255,.22); color:#eef3ff; }
.mw-card-row{ display:flex; align-items:center; gap:12px; }
.mw-card .big-flag{ font-size:30px; line-height:1; }
.mw-card .k{ font-size:11px; font-weight:800; letter-spacing:.06em; text-transform:uppercase; color:#3f4d4b; }
.mw.night .mw-card .k{ color:#9fb3dc; }
.mw-card .name{ font-weight:800; font-size:16px; margin-top:1px; }
.mw-card .hello{ margin-left:auto; font-weight:800; font-size:15px; color:#1b3c39; text-align:right; }
.mw.night .mw-card .hello{ color:#ffd98a; }
.mw-card .sub{ font-size:12.5px; color:#3f4d4b; margin-top:8px; line-height:1.45; }
.mw.night .mw-card .sub{ color:#b9c7e6; }
.mw-card .cta{ margin-top:10px; width:100%; border:none; border-radius:14px; padding:11px 14px; font-family:inherit; font-weight:800; font-size:14px;
  background:#e2a13d; color:#fff; cursor:pointer; box-shadow:0 6px 14px rgba(226,161,61,.35); }
.mw-cta-row{ display:flex; gap:8px; }
.mw-cta-row .cta{ flex:1; font-size:13px; padding:11px 8px; }
.mw-card .cta.cta-2{ background:#1b3c39; box-shadow:0 6px 14px rgba(27,60,57,.3); }
.mw-toast{ position:absolute; left:50%; top:calc(var(--mw-top) + 50px); z-index:12; transform:translate(-50%, -10px); background:rgba(19,32,31,.9); color:#fff;
  font-size:13px; font-weight:700; padding:9px 14px; border-radius:12px; opacity:0; pointer-events:none; transition:opacity .25s ease, transform .25s ease;
  width:max-content; max-width:calc(100% - 32px); text-align:center; }
.mw-toast.show{ opacity:1; transform:translate(-50%, 0); }
.mw-daynight:focus-visible, .mw-chip:focus-visible, .mw-marker:focus-visible, .mw-card .cta:focus-visible{ outline:2px solid #e2a13d; outline-offset:2px; }
@media (prefers-reduced-motion: reduce){ .mw-floater, .mw-halo, .mw-ground, .mw-marker .ring, .mw-marker.minor .dot{ animation:none; } }
@media (min-width: 720px){ .mw-dock{ max-width:560px; margin:0 auto; } }
`;

function injectCss() {
  if (document.getElementById("mw-style")) return;
  const st = document.createElement("style");
  st.id = "mw-style";
  st.textContent = CSS;
  document.head.appendChild(st);
}

function loadScript(src) {
  return new Promise((res, rej) => {
    const s = document.createElement("script");
    s.src = src; s.onload = res; s.onerror = rej;
    document.head.appendChild(s);
  });
}

async function ensureLibs() {
  for (const [name, src] of LIBS) if (!window[name]) await loadScript(src);
}

let worldTopoPromise = null;
function loadWorld() {
  if (!worldTopoPromise) {
    worldTopoPromise = (async () => {
      if (window.Datamap && window.Datamap.prototype.worldTopo) return window.Datamap.prototype.worldTopo;
      for (const src of WORLD_SOURCES) {
        try {
          await loadScript(src);
          if (window.Datamap && window.Datamap.prototype.worldTopo) return window.Datamap.prototype.worldTopo;
        } catch (e) { /* source suivante */ }
      }
      return null;
    })();
  }
  return worldTopoPromise;
}

// Monte "My World" dans "host". Options :
// - topOffset : hauteur (px) de la barre du haut de l'appli au-dessus ;
// - imgDay / imgNight : chemins des 2 images de fond ;
// - onNightChange(bool) : prévenu à chaque passage jour/nuit (pour que la
//   barre du haut de l'appli change aussi de couleur).
export async function mountMyWorld(host, { topOffset = 64, imgDay = "assets/img/myworld-day.jpg", imgNight = "assets/img/myworld-night.jpg", onNightChange, onExplore } = {}) {
  injectCss();
  const PLACES = buildPlaces();
  const root = document.createElement("div");
  root.className = "mw";
  root.style.setProperty("--mw-top", topOffset + "px");
  root.innerHTML = `
    <img class="mw-bg mw-bg-day" src="${imgDay}" alt="">
    <img class="mw-bg mw-bg-night" src="${imgNight}" alt="">
    <div class="mw-veil"></div>
    <button class="mw-daynight" aria-label="Passer en mode nuit" aria-pressed="false"><span class="knob"></span><span class="ico">☀️</span><span class="ico">🌙</span></button>
    <div class="mw-stage">
      <div class="mw-floater">
        <div class="mw-halo"></div>
        <canvas aria-label="Globe terrestre à faire tourner du doigt"></canvas>
        <div class="mw-markers"></div>
        <div class="mw-ground"></div>
      </div>
    </div>
    <div class="mw-hint">Fais tourner le globe · touche un point lumineux</div>
    <div class="mw-dock">
      <div class="mw-chips" aria-label="Langues et pays"></div>
      <div class="mw-card"></div>
    </div>
    <div class="mw-toast" role="status"></div>
  `;
  host.appendChild(root);

  const $ = (sel) => root.querySelector(sel);
  const canvas = $("canvas"), ctx = canvas.getContext("2d");
  const markersEl = $(".mw-markers"), chipsEl = $(".mw-chips"), cardEl = $(".mw-card");
  const dockEl = $(".mw-dock"), stageEl = $(".mw-stage"), hintEl = $(".mw-hint"), toastEl = $(".mw-toast");
  const modeBtn = $(".mw-daynight");
  const reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  let toastTimer;
  function toast(msg) {
    toastEl.textContent = msg; toastEl.classList.add("show");
    clearTimeout(toastTimer); toastTimer = setTimeout(() => toastEl.classList.remove("show"), 2800);
  }

  // Jour / nuit : l'ambiance suit l'heure, l'interrupteur la change.
  let night = false;
  function setNight(on) {
    night = on;
    root.classList.toggle("night", on);
    modeBtn.setAttribute("aria-pressed", on);
    modeBtn.setAttribute("aria-label", on ? "Passer en mode jour" : "Passer en mode nuit");
    if (onNightChange) onNightChange(on);
  }
  modeBtn.addEventListener("click", () => setNight(!night));
  const hr = new Date().getHours();
  setNight(hr >= 20 || hr < 7);

  try { await ensureLibs(); } catch (e) {
    cardEl.innerHTML = `<div class="sub" style="margin:0">Le globe a besoin d'une connexion internet pour se dessiner. Reviens sur l'onglet dès que tu es connectée.</div>`;
    return () => root.remove();
  }
  const d3 = window.d3, topojson = window.topojson;

  let size = 300, r = 140, dpr = 1;
  let rot = [-10, -32];
  let vel = 0, dragging = false, lastX = 0, lastY = 0, lastMoveT = 0, idleSince = 0;
  let nightT = night ? 1 : 0;
  let land = null, countries = null, borders = null, lights = [];
  let selected = "gb", tween = null, alive = true;
  const show = { en: true, es: true, pt: true };

  const projection = d3.geoOrthographic().clipAngle(90).precision(0.6);
  const path = d3.geoPath(projection, ctx);
  const graticule = d3.geoGraticule10();
  const equator = { type: "LineString", coordinates: d3.range(-180, 181, 3).map((x) => [x, 0]) };

  const spark = document.createElement("canvas");
  spark.width = spark.height = 32;
  {
    const s = spark.getContext("2d");
    const g = s.createRadialGradient(16, 16, 0, 16, 16, 16);
    g.addColorStop(0, "rgba(255,246,220,1)"); g.addColorStop(0.25, "rgba(255,214,140,.75)"); g.addColorStop(1, "rgba(255,180,80,0)");
    s.fillStyle = g; s.fillRect(0, 0, 32, 32);
  }

  function resize() {
    if (!alive) return;
    const dh = dockEl.offsetHeight;
    stageEl.style.bottom = (dh + 34) + "px";
    hintEl.style.bottom = (dh + 8) + "px";
    const st = stageEl.getBoundingClientRect();
    size = Math.round(Math.max(180, Math.min(st.width * 0.82, st.height * 0.86, 460)));
    dpr = Math.min(window.devicePixelRatio || 1, 2.5);
    canvas.width = size * dpr; canvas.height = size * dpr;
    canvas.style.width = size + "px"; canvas.style.height = size + "px";
    r = size / 2 - 2;
    projection.scale(r).translate([size / 2, size / 2]);
  }

  const hash = (s) => { let h = 0; for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) | 0; return Math.abs(h); };
  const DAY_LAND = ["#cdb57f", "#a9bd8b", "#8fb59c", "#d6a877", "#bfae8c", "#9fbba2", "#d2bf95", "#b7c48f"];

  function drawDay(alpha) {
    ctx.globalAlpha = alpha;
    const cx = size / 2, cy = size / 2;
    let g = ctx.createRadialGradient(cx - r * .35, cy - r * .4, r * .05, cx, cy, r);
    g.addColorStop(0, "#4f9fe0"); g.addColorStop(.45, "#1f64a8"); g.addColorStop(1, "#0a2d57");
    ctx.beginPath(); path({ type: "Sphere" }); ctx.fillStyle = g; ctx.fill();
    ctx.beginPath(); path(graticule); ctx.strokeStyle = "rgba(255,255,255,.10)"; ctx.lineWidth = .6; ctx.stroke();
    if (countries) {
      for (const f of countries.features) {
        ctx.beginPath(); path(f);
        const nm = String(f.id || (f.properties && f.properties.name) || "");
        ctx.fillStyle = (f.id === "ATA" || nm === "Antarctica") ? "#eef3f6" : DAY_LAND[hash(nm) % DAY_LAND.length];
        ctx.fill();
      }
      ctx.beginPath(); path(borders); ctx.strokeStyle = "rgba(255,255,255,.55)"; ctx.lineWidth = .5; ctx.stroke();
      ctx.beginPath(); path(land); ctx.strokeStyle = "rgba(10,40,70,.35)"; ctx.lineWidth = .7; ctx.stroke();
    }
    g = ctx.createRadialGradient(cx - r * .42, cy - r * .48, 0, cx - r * .42, cy - r * .48, r * .9);
    g.addColorStop(0, "rgba(255,255,255,.38)"); g.addColorStop(.5, "rgba(255,255,255,.06)"); g.addColorStop(1, "rgba(255,255,255,0)");
    ctx.beginPath(); path({ type: "Sphere" }); ctx.fillStyle = g; ctx.fill();
    g = ctx.createRadialGradient(cx, cy, r * .62, cx, cy, r);
    g.addColorStop(0, "rgba(4,18,40,0)"); g.addColorStop(1, "rgba(4,18,40,.5)");
    ctx.fillStyle = g; ctx.fill();
    ctx.beginPath(); path({ type: "Sphere" }); ctx.strokeStyle = "rgba(190,225,255,.9)"; ctx.lineWidth = 1.4; ctx.stroke();
    ctx.globalAlpha = 1;
  }

  function drawNight(alpha) {
    ctx.globalAlpha = alpha;
    const cx = size / 2, cy = size / 2;
    let g = ctx.createRadialGradient(cx, cy + r * .15, r * .05, cx, cy, r);
    g.addColorStop(0, "#1a3a78"); g.addColorStop(.55, "#0b1d44"); g.addColorStop(1, "#040a1c");
    ctx.beginPath(); path({ type: "Sphere" }); ctx.fillStyle = g; ctx.fill();
    ctx.beginPath(); path(graticule); ctx.strokeStyle = "rgba(140,180,255,.08)"; ctx.lineWidth = .6; ctx.stroke();
    if (land) {
      ctx.beginPath(); path(land); ctx.fillStyle = "#15325f"; ctx.fill();
      ctx.strokeStyle = "rgba(140,195,255,.16)"; ctx.lineWidth = 3.2; ctx.stroke();
      ctx.strokeStyle = "rgba(190,225,255,.75)"; ctx.lineWidth = .8; ctx.stroke();
      ctx.beginPath(); path(borders); ctx.strokeStyle = "rgba(160,200,255,.18)"; ctx.lineWidth = .45; ctx.stroke();
    }
    const center = [-rot[0], -rot[1]];
    ctx.globalCompositeOperation = "lighter";
    for (const p of lights) {
      if (d3.geoDistance(p.ll, center) > 1.52) continue;
      const xy = projection(p.ll);
      if (!xy) continue;
      const s = (p.w * 11 + 3) * (size / 320);
      ctx.globalAlpha = alpha * (p.w > .35 ? .95 : .45);
      ctx.drawImage(spark, xy[0] - s / 2, xy[1] - s / 2, s, s);
    }
    ctx.globalCompositeOperation = "source-over";
    ctx.globalAlpha = alpha;
    ctx.beginPath(); path(equator);
    ctx.strokeStyle = "rgba(130,190,255,.22)"; ctx.lineWidth = 7; ctx.stroke();
    ctx.strokeStyle = "rgba(200,230,255,.55)"; ctx.lineWidth = 2.4; ctx.stroke();
    ctx.strokeStyle = "rgba(255,255,255,.95)"; ctx.lineWidth = .9; ctx.stroke();
    g = ctx.createRadialGradient(cx, cy, r * .55, cx, cy, r);
    g.addColorStop(0, "rgba(90,150,255,0)"); g.addColorStop(1, "rgba(110,170,255,.28)");
    ctx.beginPath(); path({ type: "Sphere" }); ctx.fillStyle = g; ctx.fill();
    ctx.strokeStyle = "rgba(170,210,255,.85)"; ctx.lineWidth = 1.2; ctx.stroke();
    ctx.globalAlpha = 1;
  }

  // ---------- Marqueurs ----------
  const markerEls = {};
  PLACES.forEach((p, i) => {
    const b = document.createElement("button");
    b.className = "mw-marker" + (p.minor ? " minor" : "");
    b.dataset.lang = p.lang;
    b.setAttribute("aria-label", p.country);
    if (p.minor) b.style.setProperty("--tw", (i * 0.37 % 3).toFixed(2) + "s");
    b.innerHTML = `<span class="ring"></span><span class="dot"></span><span class="flag">${p.flag}</span>`;
    b.addEventListener("click", (e) => { e.stopPropagation(); select(p.id, true); });
    markersEl.appendChild(b);
    markerEls[p.id] = b;
  });
  function placeMarkers() {
    const center = [-rot[0], -rot[1]];
    for (const p of PLACES) {
      const el = markerEls[p.id];
      const visible = (!p.minor || show[p.lang] || p.id === selected) && d3.geoDistance(p.ll, center) < Math.PI / 2 - 0.12;
      el.classList.toggle("hidden", !visible);
      if (!visible) continue;
      const xy = projection(p.ll);
      el.style.left = xy[0] + "px"; el.style.top = xy[1] + "px";
    }
  }

  // ---------- Puces : 3 interrupteurs de langue + les 7 destinations ----------
  chipsEl.innerHTML =
    ["en", "es", "pt"].map((l) => `<button class="mw-chip toggle" data-lang="${l}" data-toggle="${l}" aria-pressed="true"><span class="sw"></span>${LANG_INFO[l].label} · ${LANG_INFO[l].count}</button>`).join("") +
    MAIN.map((p) => `<button class="mw-chip" data-id="${p.id}">${p.flag} ${p.country}</button>`).join("");
  chipsEl.addEventListener("click", (e) => {
    const c = e.target.closest(".mw-chip"); if (!c) return;
    if (c.dataset.toggle) {
      const l = c.dataset.toggle;
      show[l] = !show[l];
      c.classList.toggle("off", !show[l]); c.setAttribute("aria-pressed", show[l]);
      toast(show[l] ? `${LANG_INFO[l].noun.charAt(0).toUpperCase() + LANG_INFO[l].noun.slice(1)} est langue officielle dans ${LANG_INFO[l].count} pays : un point lumineux pour chacun.` : `Pays où l'on parle ${LANG_INFO[l].noun} masqués.`);
      return;
    }
    select(c.dataset.id, true);
  });

  function select(id, fly) {
    selected = id;
    const p = PLACES.find((x) => x.id === id);
    chipsEl.querySelectorAll(".mw-chip[data-id]").forEach((c) => c.classList.toggle("active", c.dataset.id === id));
    Object.entries(markerEls).forEach(([k, el]) => el.classList.toggle("active", k === id));
    cardEl.innerHTML = `
      <div class="mw-card-row">
        <span class="big-flag">${p.flag}</span>
        <div>
          <div class="k">${p.title}</div>
          <div class="name">${p.country} · ${p.city}</div>
        </div>
        <div class="hello">${p.hello}</div>
      </div>
      <div class="sub">${p.sub}</div>
      ${p.id === "gb" && onExplore
        ? `<div class="mw-cta-row"><button class="cta" data-mode="explore">🧭 Explorer ce pays</button><button class="cta cta-2" data-mode="survie">🧳 Je pars bientôt · Survie</button></div>`
        : `<button class="cta">${p.home ? "Choisir une langue à explorer" : "Explorer ce pays · bientôt"}</button>`}`;
    // Royaume-Uni ouvert en premier (validé le 23/09) ; les autres pays suivront.
    cardEl.querySelectorAll(".cta").forEach((b) => b.addEventListener("click", () => {
      if (b.dataset.mode && onExplore) { onExplore(p.id, b.dataset.mode); return; }
      if (p.home) { select("gb", true); return; }
      toast("Bientôt : ce pays s'ouvrira après le Royaume-Uni 🇬🇧");
    }));
    const chip = chipsEl.querySelector(`[data-id="${id}"]`);
    if (chip && chip.scrollIntoView) chip.scrollIntoView({ inline: "center", block: "nearest", behavior: reduceMotion ? "auto" : "smooth" });
    if (fly) flyTo(p.ll);
  }

  function flyTo(ll) {
    const from = rot.slice();
    let toL = -ll[0];
    while (toL - from[0] > 180) toL -= 360;
    while (toL - from[0] < -180) toL += 360;
    const to = [toL, Math.max(-60, Math.min(60, -ll[1] + 8))];
    vel = 0; idleSince = performance.now() + 2500;
    tween = { from, to, t0: performance.now(), dur: reduceMotion ? 1 : 1100 };
  }

  // ---------- Faire tourner du doigt ----------
  canvas.addEventListener("pointerdown", (e) => {
    dragging = true; tween = null; vel = 0;
    lastX = e.clientX; lastY = e.clientY; lastMoveT = performance.now();
    try { canvas.setPointerCapture(e.pointerId); } catch (err) { /* rien */ }
    hintEl.style.opacity = "0";
  });
  canvas.addEventListener("pointermove", (e) => {
    if (!dragging) return;
    const k = 80 / r;
    const dx = e.clientX - lastX, dy = e.clientY - lastY, now = performance.now();
    rot[0] += dx * k;
    rot[1] = Math.max(-70, Math.min(70, rot[1] - dy * k));
    vel = (dx * k) / Math.max(8, now - lastMoveT) * 16;
    lastX = e.clientX; lastY = e.clientY; lastMoveT = now;
  });
  const endDrag = () => { if (!dragging) return; dragging = false; idleSince = performance.now(); };
  canvas.addEventListener("pointerup", endDrag);
  canvas.addEventListener("pointercancel", endDrag);

  // ---------- Boucle d'animation (s'arrête seule quand on quitte l'onglet) ----------
  let lastT = performance.now();
  function frame(t) {
    if (!alive || !root.isConnected) { destroy(); return; }
    const dt = Math.min(64, t - lastT); lastT = t;
    const target = night ? 1 : 0;
    if (nightT !== target) nightT = Math.abs(target - nightT) < .02 ? target : nightT + (target - nightT) * Math.min(1, dt / 350);
    if (tween) {
      const u = Math.min(1, (t - tween.t0) / tween.dur);
      const e = u < .5 ? 4 * u * u * u : 1 - Math.pow(-2 * u + 2, 3) / 2;
      rot = [tween.from[0] + (tween.to[0] - tween.from[0]) * e, tween.from[1] + (tween.to[1] - tween.from[1]) * e];
      if (u >= 1) tween = null;
    } else if (!dragging) {
      if (Math.abs(vel) > .02) { rot[0] += vel; vel *= .94; }
      else if (!reduceMotion && t > idleSince + 2500) rot[0] += dt * 0.006;
    }
    projection.rotate(rot);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, size, size);
    if (nightT < 1) drawDay(1);
    if (nightT > 0) drawNight(nightT);
    placeMarkers();
    requestAnimationFrame(frame);
  }

  const onResize = () => resize();
  window.addEventListener("resize", onResize);
  const ro = window.ResizeObserver ? new ResizeObserver(onResize) : null;
  if (ro) ro.observe(dockEl);
  function destroy() {
    if (!alive) return;
    alive = false;
    window.removeEventListener("resize", onResize);
    if (ro) ro.disconnect();
    root.remove();
  }

  select("gb", false);
  resize();
  requestAnimationFrame(frame);

  // Carte du monde : chargée en arrière-plan, le globe s'affiche déjà sans.
  loadWorld().then((topo) => {
    if (!topo || !alive) return;
    const obj = topo.objects.world || topo.objects.countries || Object.values(topo.objects)[0];
    countries = topojson.feature(topo, obj);
    land = topojson.merge(topo, obj.geometries);
    borders = topojson.mesh(topo, obj, (a, b) => a !== b);
    const rnd = d3.randomLcg(42);
    const pts = [];
    for (const [lon, lat, w] of CITIES) {
      pts.push({ ll: [lon, lat], w });
      const n = Math.round(w * 5);
      for (let i = 0; i < n; i++) pts.push({ ll: [lon + (rnd() - .5) * 3.2 * w, lat + (rnd() - .5) * 2.4 * w], w: .15 + rnd() * .25 });
    }
    let tries = 0;
    while (tries++ < 1400) {
      const lon = rnd() * 360 - 180, lat = Math.asin(2 * rnd() - 1) * 180 / Math.PI;
      if (lat < -55 || lat > 70) continue;
      if (d3.geoContains(land, [lon, lat])) pts.push({ ll: [lon, lat], w: .08 + rnd() * .12 });
    }
    lights = pts;
  });

  return destroy;
}
