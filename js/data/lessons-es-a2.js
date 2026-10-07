// The Roots — ESPAGNOL : niveau A2 (A2.1 à A2.12, leçons 213 à 224).
// Chargé par lessons.html APRÈS lessons-es.js (utilise ses helpers __esB, __esIdx, __esR).
// Même format que les leçons A1 (200 à 212). Règles : tú ET usted, le pourquoi de chaque règle,
// aucune notion avant son heure. Sources : /parts/NNN.js, assemblées par build-a2.sh.
window.LESSONS_ES = window.LESSONS_ES || {};
var LESSONS_ES = window.LESSONS_ES;


// A2.1 — Ayer, la semana pasada : raconter au passé (pretérito indefinido régulier) — leçon 213
(function(){
function blk(name, rows){
  var v = __esB(name, rows);
  v.forEach(function(o, i){ o.emo = rows[i][4]; o.ex = [rows[i][5], rows[i][6]]; });
  return v;
}
// ligne = [terme, API, français, note, emoji, exemple ES, exemple FR]
var V = [].concat(
 blk("Les marqueurs du passé : placer l'action dans le temps", [
  ["ayer","/aˈʝeɾ/","hier","Le mot qui ferme la journée : si tu dis « ayer », l'action est finie. Dérivés : ayer por la mañana / por la tarde / por la noche. y = « yé » : a-YER, accent sur la dernière syllabe.","⏪","Ayer cené con mis padres.","Hier, j'ai dîné avec mes parents."],
  ["anteayer","/anteaˈʝeɾ/","avant-hier","Littéralement « avant-hier » (ante + ayer). On entend aussi « antes de ayer » (plus rare).","⏮️","Anteayer llamé a mi abuela.","Avant-hier, j'ai appelé ma grand-mère."],
  ["anoche","/aˈnotʃe/","hier soir, cette nuit (la nuit dernière)","Un seul mot pour « hier soir » ET « la nuit dernière ». ch = tch : a-NO-tche. On dit aussi « ayer por la noche ».","🌙","Anoche escuché música.","Hier soir, j'ai écouté de la musique."],
  ["la semana pasada","/la seˈmana paˈsaða/","la semaine dernière","« pasada » s'accorde avec le nom : la semana pasada (fém.), el mes pasado, el año pasado (masc.). Ces expressions ferment la période : indefinido obligatoire.","📅","La semana pasada viajé a Sevilla.","La semaine dernière, j'ai voyagé à Séville."],
  ["el mes pasado","/el mes paˈsaðo/","le mois dernier","Masculin : el mes pasado. Le d de pasado est très doux entre voyelles.","🗓️","El mes pasado terminé mi curso.","Le mois dernier, j'ai terminé mon cours."],
  ["el año pasado","/el ˈaɲo paˈsaðo/","l'année dernière","ñ = « gn » : A-gno. Sans « el » : « el año pasado » est un bloc.","📆","El año pasado visité Lisboa.","L'année dernière, j'ai visité Lisbonne."],
  ["el lunes pasado","/el ˈlunes paˈsaðo/","lundi dernier","Même schéma avec tous les jours : el martes pasado, el sábado pasado. Les jours sont masculins et sans majuscule.","🔙","El lunes pasado recibí una carta.","Lundi dernier, j'ai reçu une lettre."],
  ["el fin de semana pasado","/el fin de seˈmana paˈsaðo/","le week-end dernier","« fin de semana » est masculin : el fin de semana, donc « pasado ». Piège : on ne dit pas « la fin de semana ».","🏖️","El fin de semana pasado salí con mis amigos.","Le week-end dernier, je suis sorti avec mes amis."],
  ["hace dos días","/ˈaθe ðos ˈðias/","il y a deux jours","hace + durée = « il y a » + durée. Le verbe est au passé : « Llegué hace dos días ». Piège : en français « il y a » ; en espagnol, c'est « hace » (hacer, impersonnel, comme la météo en A1.11).","⏳","Llegué hace dos días.","Je suis arrivé il y a deux jours."],
  ["el otro día","/el ˈotɾo ˈdia/","l'autre jour","Une action récente mais floue : « el otro día » ne dit pas quel jour exactement.","🤷","El otro día hablé con tu hermana.","L'autre jour, j'ai parlé avec ta sœur."],
  ["en 2020","/en ðos ˈmil ˈbeinte/","en 2020","Les années se lisent comme un nombre : « dos mil veinte ». On dit « en 2020 » ou « en el año 2020 ». Pas de « de ».","🔢","Terminé la universidad en 2019.","J'ai terminé l'université en 2019."]
 ]),
 blk("Raconter dans l'ordre", [
  ["primero","/pɾiˈmeɾo/","d'abord","Ouvre un récit : « Primero… luego… después… por fin ». Invariable.","1️⃣","Primero abrí la puerta.","D'abord, j'ai ouvert la porte."],
  ["luego","/ˈlweɣo/","ensuite, puis","Synonyme de « después » dans un récit. ue = « oué » : LOUÉ-go.","2️⃣","Luego salí de casa.","Ensuite, je suis sorti de la maison."],
  ["después","/desˈpwes/","après, ensuite","Accent écrit sur la dernière syllabe : des-PUÉS. Peut aussi être suivi de « de » + nom : después de la cena.","➡️","Después cenamos juntos.","Après, nous avons dîné ensemble."],
  ["entonces","/enˈtonθes/","alors, à ce moment-là","Pour enchaîner une conséquence ou un moment précis du récit. z / c devant e = th (Espagne).","⚡","Llegó el tren y entonces subimos.","Le train est arrivé et alors nous sommes montés."],
  ["por fin","/poɾ ˈfin/","enfin (après une attente)","Le soulagement : « enfin, ça y est ! » « Al final » = à la fin (sans l'idée d'attente).","🎉","Por fin llegó el verano.","L'été est enfin arrivé."],
  ["al final","/al fiˈnal/","à la fin, finalement","Pour conclure un récit : « Al final compré el libro ».","🏁","Al final no compré nada.","Finalement, je n'ai rien acheté."],
  ["al día siguiente","/al ˈdia siˈɣjente/","le lendemain","Un seul bloc : « al día siguiente ». Dans un récit au passé, on ne dit pas « mañana » mais « al día siguiente ».","🌅","Al día siguiente escribí un mensaje.","Le lendemain, j'ai écrit un message."]
 ]),
 blk("Verbes en -AR : au passé simple (1/2)", [
  ["hablar","/aˈβlaɾ/","parler","hablé · hablaste · habló · hablamos · hablasteis · hablaron. Attention à l'accent : hablo (je parle) ≠ habló (il a parlé).","🗣️","Ayer hablé con mi jefe.","Hier, j'ai parlé avec mon chef."],
  ["comprar","/komˈpɾaɾ/","acheter","compré · compraste · compró · compramos · comprasteis · compraron. Régulier : on remplace -ar par les terminaisons du passé.","🛒","Compré pan y fruta.","J'ai acheté du pain et des fruits."],
  ["llamar","/ʝaˈmaɾ/","appeler, téléphoner","llamé · llamaste · llamó · llamamos · llamasteis · llamaron. Ne confonds pas avec « llamarse » (s'appeler, A1.1) : ici, « llamar » = téléphoner.","📞","Mi madre llamó anoche.","Ma mère a appelé hier soir."],
  ["cenar","/θeˈnaɾ/","dîner","cené · cenaste · cenó · cenamos… En Espagne, on dîne tard : vers 21-22 h.","🍽️","Cenamos a las diez.","Nous avons dîné à dix heures."],
  ["viajar","/bjaˈxaɾ/","voyager","viajé · viajaste · viajó · viajamos… j = « r » rauque : bia-KHAR. v = b.","✈️","El año pasado viajé a Madrid.","L'année dernière, j'ai voyagé à Madrid."],
  ["visitar","/bisiˈtaɾ/","visiter, rendre visite à","visité · visitaste · visitó… Devant une personne, on ajoute « a » : « visité a mi abuela » ; devant un lieu, pas de « a » : « visité el museo ».","🏛️","Visitó el museo con su hijo.","Il a visité le musée avec son fils."],
  ["terminar","/teɾmiˈnaɾ/","terminer, finir","terminé · terminaste · terminó… Verbe très utile pour le travail et les études.","✅","Terminé el trabajo a las seis.","J'ai terminé le travail à six heures."],
  ["preparar","/pɾepaˈɾaɾ/","préparer","preparé · preparaste · preparó… r simple entre voyelles : un seul « tap ».","🥘","Preparó la cena para todos.","Elle a préparé le dîner pour tous."],
  ["cocinar","/koθiˈnaɾ/","cuisiner","cociné · cocinaste · cocinó… c devant i = th (Espagne), s (Amérique latine).","👩‍🍳","Mi padre cocinó pescado.","Mon père a cuisiné du poisson."],
  ["escuchar","/eskuˈtʃaɾ/","écouter","escuché · escuchaste · escuchó… « escuchar » = écouter ; « oír » = entendre.","🎧","Escuchamos música toda la tarde.","Nous avons écouté de la musique tout l'après-midi."],
  ["regalar","/reɣaˈlaɾ/","offrir (un cadeau)","regalé · regalaste · regaló… « un regalo » = un cadeau. On dit « regalar algo a alguien ».","🎁","Le regalé un libro a Ana.","J'ai offert un livre à Ana."],
  ["cantar","/kanˈtaɾ/","chanter","canté · cantaste · cantó… « Cantó » avec accent : sans accent, « canto » = je chante.","🎤","Marta cantó muy bien.","Marta a très bien chanté."],
  ["bailar","/baiˈlaɾ/","danser","bailé · bailaste · bailó… ai = « aï » : bai-LAR.","💃","Bailamos toda la noche.","Nous avons dansé toute la nuit."],
  ["trabajar","/tɾaβaˈxaɾ/","travailler","trabajé · trabajaste · trabajó… Verbe déjà connu au présent : seule la terminaison change.","💼","El sábado trabajé en casa.","Samedi, j'ai travaillé à la maison."]
 ]),
 blk("Verbes en -ER / -IR : une seule série de terminaisons (2/2)", [
  ["comer","/koˈmeɾ/","manger","comí · comiste · comió · comimos · comisteis · comieron. Piège : nosotros « comemos » (présent) ≠ « comimos » (passé).","🍴","Ayer comí paella.","Hier, j'ai mangé de la paella."],
  ["beber","/beˈβeɾ/","boire","bebí · bebiste · bebió · bebimos · bebisteis · bebieron. b et v se prononcent pareil.","🥤","Bebieron agua toda la noche.","Ils ont bu de l'eau toute la nuit."],
  ["aprender","/apɾenˈdeɾ/","apprendre","aprendí · aprendiste · aprendió… « aprender a + infinitif » = apprendre à.","📚","Aprendí español en Madrid.","J'ai appris l'espagnol à Madrid."],
  ["vender","/benˈdeɾ/","vendre","vendí · vendiste · vendió · vendimos · vendisteis · vendieron.","🏷️","Vendió su coche el año pasado.","Il a vendu sa voiture l'année dernière."],
  ["correr","/koˈreɾ/","courir","corrí · corriste · corrió… rr = r roulé : ko-RRER.","🏃","El domingo corrí una hora.","Dimanche, j'ai couru une heure."],
  ["vivir","/biˈβiɾ/","habiter, vivre","viví · viviste · vivió · vivimos · vivisteis · vivieron. Au passé, « viví en Lyon » = j'ai habité à Lyon (c'est fini).","🏠","Viví dos años en Lyon.","J'ai habité deux ans à Lyon."],
  ["escribir","/eskɾiˈβiɾ/","écrire","escribí · escribiste · escribió… Même terminaisons que « comer » : -í, -iste, -ió, -imos, -isteis, -ieron.","✍️","Escribí un mensaje a mi jefe.","J'ai écrit un message à mon chef."],
  ["abrir","/aˈβɾiɾ/","ouvrir","abrí · abriste · abrió · abrimos · abristeis · abrieron.","🚪","Abrió la puerta y salió.","Il a ouvert la porte et il est sorti."],
  ["recibir","/reθiˈβiɾ/","recevoir","recibí · recibiste · recibió · recibimos · recibisteis · recibieron. Sens : recevoir (une lettre, un message, un invité).","📬","Recibí una carta el lunes.","J'ai reçu une lettre lundi."],
  ["salir","/saˈliɾ/","sortir, partir","salí · saliste · salió · salimos · salisteis · salieron. Régulier au passé, même s'il est irrégulier au présent (salgo).","🚶","Salí de casa a las siete.","Je suis sorti de la maison à sept heures."],
  ["decidir","/deθiˈðiɾ/","décider","decidí · decidiste · decidió… « decidir + infinitif » : « Decidí viajar ».","🤔","Decidió comprar un coche.","Il a décidé d'acheter une voiture."],
  ["subir","/suˈβiɾ/","monter","subí · subiste · subió · subimos… Pour « descendre » : bajar (-ar).","⬆️","Subimos al tren a las ocho.","Nous sommes montés dans le train à huit heures."]
 ]),
 blk("Orthographe de « yo » : garder le même son", [
  ["llegar → llegué","/ʝeˈɣaɾ · ʝeˈɣe/","arriver → je suis arrivé","g + é donnerait le son « kh » : on ajoute u pour garder le g dur : llegué (gué = gué). Les autres personnes sont normales : llegaste, llegó…","🛬","Llegué a las nueve.","Je suis arrivé à neuf heures."],
  ["buscar → busqué","/busˈkaɾ · busˈke/","chercher → j'ai cherché","c + é donnerait « th » : on écrit qu pour garder le son k : busqué. Même règle : tocar → toqué, sacar → saqué.","🔍","Busqué mi libro toda la tarde.","J'ai cherché mon livre tout l'après-midi."],
  ["pagar → pagué","/paˈɣaɾ · paˈɣe/","payer → j'ai payé","Même règle que llegar : g + u + é. Les autres personnes : pagaste, pagó…","💶","Pagué la cuenta.","J'ai payé l'addition."],
  ["empezar → empecé","/empeˈθaɾ · empeˈθe/","commencer → j'ai commencé","z devant e ne s'écrit presque jamais : z → c devant e. Les autres personnes : empezaste, empezó… (ici e → ie ne joue pas au passé).","🚦","Empecé a trabajar a las ocho.","J'ai commencé à travailler à huit heures."]
 ]),
 blk("Les choses et les gens d'une histoire", [
  ["la cena","/la ˈθena/","le dîner","Féminin : la cena. « Cenar » (dîner) vient de là. En Espagne, la cena est le repas du soir, souvent léger.","🍝","La cena empezó a las diez.","Le dîner a commencé à dix heures."],
  ["el regalo","/el reˈɣalo/","le cadeau","Masculin. « Regalar » = offrir. Piège : « regalo » ressemble à « régal » mais veut dire « cadeau ».","🎀","Le compré un regalo a mi madre.","J'ai acheté un cadeau pour ma mère."],
  ["el mensaje","/el menˈsaxe/","le message","Masculin, comme tous les mots en -aje : el mensaje, el viaje, el paisaje. j = « kh ».","💬","Recibí tu mensaje ayer.","J'ai reçu ton message hier."],
  ["la película","/la peˈlikula/","le film","Féminin. Accent sur le i : pe-LÍ-cu-la (accent écrit obligatoire : la voix tombe sur l'antépénultième syllabe).","🎬","La película empezó a las nueve.","Le film a commencé à neuf heures."],
  ["el concierto","/el konˈθjeɾto/","le concert","ie = « yé » : con-THIER-to. Masculin.","🎶","El concierto empezó a las nueve.","Le concert a commencé à neuf heures."],
  ["el museo","/el muˈseo/","le musée","Masculin. Deux voyelles qui ne forment pas de diphtongue : mu-SÉ-o.","🖼️","Visitamos el museo.","Nous avons visité le musée."],
  ["el vecino / la vecina","/el beˈθino · la beˈθina/","le voisin / la voisine","Masculin ou féminin selon la personne : el vecino (un homme), la vecina (une femme). Pluriel : los vecinos (un groupe, même mixte).","🏘️","Los vecinos llamaron a la puerta.","Les voisins ont frappé à la porte."]
 ]),
 blk("Poser la question et nier au passé", [
  ["¿Qué comiste ayer? / ¿Qué comió usted ayer?","/ke koˈmiste aˈʝeɾ · ke koˈmjo usˈteð/","Qu'as-tu mangé hier ? / Qu'avez-vous mangé hier ?","Tú : comiste (-iste). Usted : comió (forme de él/ella). Ne confonds pas : « comiste » = tu ; « comió » = il, elle ou vous de politesse.","❓","¿Qué comió usted anoche?","Qu'avez-vous mangé hier soir ?"],
  ["¿Cuándo llegaste? / ¿Cuándo llegó usted?","/ˈkwando ʝeˈɣaste · ˈkwando ʝeˈɣo usˈteð/","Quand es-tu arrivé ? / Quand êtes-vous arrivé ?","La question est la même qu'au présent : seul le verbe change. Le sujet « usted » peut suivre le verbe : « llegó usted ».","🕒","¿Cuándo llegó usted a Madrid?","Quand êtes-vous arrivé à Madrid ?"],
  ["¿Con quién hablaste?","/kon ˈkjen aˈβlaste/","Avec qui as-tu parlé ?","« con quién » (avec qui) : accent sur quién dans une question. Réponse : « Hablé con mi madre ».","👥","¿Con quién hablaste anoche?","Avec qui as-tu parlé hier soir ?"],
  ["no … nada","/no … ˈnaða/","ne … rien","« no » se place avant le verbe, « nada » après : « No compré nada ». Double négation obligatoire en espagnol si « nada » suit le verbe.","🚫","No compré nada.","Je n'ai rien acheté."],
  ["no … nadie","/no … ˈnaðje/","ne … personne","Même schéma : « No llamó nadie » = personne n'a appelé. ie = « yé » : NA-dyé.","🙅","Anoche no llamó nadie.","Hier soir, personne n'a appelé."]
 ])
);

LESSONS_ES[213] = {
 code:"A2.1", level:"A2",
 VOCAB: V,
 MEM_WORDS: __esIdx(V, ["ayer","anoche","la semana pasada","hace dos días","por fin","hablar","comer","vivir","llegar → llegué","no … nada"]),
 MINI_CHECKS: [
  {q:"Comment dit-on « Hier, j'ai dîné avec mes amis » ?", opts:["Ayer cené con mis amigos.","Ayer ceno con mis amigos."], correct:0, fb:"« Ayer » ferme la journée : il faut le passé simple (indefinido) : cené. « Ceno » est le présent."},
  {q:"Quelle forme veut dire « il a mangé » ?", opts:["comí","comió","comiste"], correct:1, fb:"él / ella / usted → -ió : comió. « Comí » = j'ai mangé ; « comiste » = tu as mangé."},
  {q:"« Tu as parlé avec elle hier soir » :", opts:["Anoche hablé con ella.","Anoche hablaste con ella.","Anoche habló con ella."], correct:1, fb:"tú → -aste : hablaste. -é = yo ; -ó = él, ella, usted."},
  {q:"Quelle phrase dit « Il a parlé avec sa mère » ?", opts:["Hablo con su madre.","Habló con su madre."], correct:1, fb:"L'accent écrit change le sens : hablo = je parle (présent) ; habló = il a parlé (passé)."},
  {q:"« Hablamos » peut être…", opts:["seulement le présent","le présent OU le passé : le contexte décide"], correct:1, fb:"Pour les verbes en -ar, nosotros est identique au présent et au passé : « Hablamos cada día » / « Ayer hablamos ». C'est « ayer » qui donne le temps."},
  {q:"« Je suis arrivé à neuf heures » :", opts:["Llegé a las nueve.","Llegué a las nueve.","Llegí a las nueve."], correct:1, fb:"llegar → llegué : on ajoute u pour garder le son « g » dur. « llegé » se lirait « llekhé »."},
  {q:"Comment dit-on « il y a deux jours » ?", opts:["dos días hace","hace dos días","antes dos días"], correct:1, fb:"« hace » + durée = il y a. « Llegué hace dos días » = je suis arrivé il y a deux jours."},
  {q:"« Ils ont mangé » :", opts:["comeron","comieron","comaron"], correct:1, fb:"ellos / ustedes → -ieron pour les verbes en -er / -ir : comieron, vivieron, escribieron."}
 ],
 ROUNDS: [
  __esR("Ayer cené con mis padres.","Hier, j'ai dîné avec mes parents."),
  __esR("Anoche escuché música.","Hier soir, j'ai écouté de la musique."),
  __esR("El año pasado viajé a Madrid.","L'année dernière, j'ai voyagé à Madrid."),
  __esR("¿Qué comiste ayer?","Qu'as-tu mangé hier ?"),
  __esR("Compré pan y fruta en el mercado.","J'ai acheté du pain et des fruits au marché."),
  __esR("Hablamos por teléfono hace dos días.","Nous avons parlé au téléphone il y a deux jours."),
  __esR("Mi hermana llegó a las ocho.","Ma sœur est arrivée à huit heures."),
  __esR("No compré nada.","Je n'ai rien acheté."),
  __esR("¿Cuándo llegó usted a Madrid?","Quand êtes-vous arrivé à Madrid ?"),
  __esR("Primero abrí la puerta y luego salí.","D'abord j'ai ouvert la porte, puis je suis sorti."),
  __esR("Mis amigos llamaron anoche.","Mes amis ont appelé hier soir."),
  __esR("El lunes pasado recibí una carta.","Lundi dernier, j'ai reçu une lettre."),
  __esR("¿Con quién hablaste ayer?","Avec qui as-tu parlé hier ?")
 ],
 QUIZ: [
  {cat:"ecrit", q:"« Hier, j'ai acheté du pain. »", opts:["Ayer compro pan.","Ayer compré pan.","Ayer comprí pan."], correct:1, why:"-ar → -é à la 1re personne : compré. « Compro » est le présent ; « comprí » mélange les terminaisons -ar et -ir."},
  {cat:"ecrit", q:"Tú ___ con ella anoche. (hablar)", opts:["hablé","habló","hablaste"], correct:2, why:"tú → -aste : hablaste. -é = yo ; -ó = él, ella, usted."},
  {cat:"ecrit", q:"Mi madre ___ la cena. (cocinar)", opts:["cocinó","cocino","cocinaron"], correct:0, why:"Sujet singulier (mi madre) → forme de él / ella : cocinó, avec l'accent écrit. « Cocino » = je cuisine."},
  {cat:"ecrit", q:"Ellos ___ su coche el año pasado. (vender)", opts:["vendaron","vendió","vendieron"], correct:2, why:"ellos → -ieron pour -er / -ir : vendieron. « Vendaron » mélange les terminaisons -ar."},
  {cat:"ecrit", q:"Yo ___ a las nueve. (llegar)", opts:["llegé","llegó","llegué"], correct:2, why:"g + é → gu + é pour garder le son dur : llegué. « llegó » est la forme de él / ella."},
  {cat:"ecrit", q:"Quelle phrase est au passé ?", opts:["Escribe una carta.","Va a escribir una carta.","Escribió una carta."], correct:2, why:"« Escribió » (accent sur la fin) = il a écrit : passé. « Escribe » = présent ; « va a escribir » = futur proche."},
  {cat:"ecrit", q:"Usted ___ en Lyon dos años. (vivir)", opts:["vivo","vivió","viví"], correct:1, why:"usted se conjugue comme él / ella : vivió. « Viví » = j'ai vécu (yo)."},
  {cat:"ecrit", q:"« Nous avons mangé au restaurant. »", opts:["Comemos en un restaurante.","Comamos en un restaurante.","Comimos en un restaurante."], correct:2, why:"nosotros passé de -er : comimos. « Comemos » = présent ; « comamos » est une autre forme (on le verra plus tard)."},
  {cat:"ecrit", q:"Quel mot place l'action dans le passé ?", opts:["mañana","anoche","ahora"], correct:1, why:"« Anoche » = hier soir : l'action est finie. « Mañana » = demain, « ahora » = maintenant."},
  {cat:"ecrit", q:"¿Cuándo ___ el tren? (llegar, él)", opts:["llegaron","llegué","llegó"], correct:2, why:"Le sujet est « el tren » (singulier) → llegó. « Llegaron » serait pour plusieurs trains."},
  {cat:"ecrit", q:"« Il y a trois jours, j'ai écrit un message. »", opts:["Hace tres días escribió un mensaje.","Hace tres días escribí un mensaje.","Hace tres días escribo un mensaje."], correct:1, why:"yo → escribí. « hace tres días » demande un verbe au passé, pas au présent."},
  {cat:"ecrit", q:"Mis vecinos ___ una carta. (recibir)", opts:["recibió","recibieron","recibimos"], correct:1, why:"Vecinos = pluriel (ellos) → recibieron. « Recibimos » = nous."},
  {cat:"ecrit", q:"Yo ___ mi libro en casa. (buscar)", opts:["busqué","buscé","buscí"], correct:0, why:"buscar → busqué : c + é devient qu + é pour garder le son « k »."},
  {cat:"ecrit", q:"À un client âgé : « ¿ ___ usted el mensaje ? » (recibir)", opts:["Recibí","Recibiste","Recibió"], correct:2, why:"Vouvoiement : usted → forme de él / ella : recibió. « Recibiste » = tú (tutoiement)."},
  {cat:"oral", audio:"Ayer cené con mi hermana.", q:"Écoute : quand a lieu l'action ?", opts:["Demain","Hier","Maintenant"], correct:1, why:"« Ayer » = hier. « Cené » (accent sur la fin) = j'ai dîné : passé."},
  {cat:"oral", audio:"Habló con su madre por teléfono.", q:"Écoute : qui a parlé ?", opts:["Moi","Nous","Lui ou elle"], correct:2, why:"« Habló » (-ó) = él / ella / usted. Moi serait « hablé » ; nous « hablamos »."},
  {cat:"oral", audio:"Hablaste con el profesor ayer.", q:"Écoute : à quelle personne est le verbe ?", opts:["Tu (tú)","Je (yo)","Ils (ellos)"], correct:0, why:"« -aste » = tú. C'est la forme de tutoiement : « hablaste »."},
  {cat:"oral", audio:"Comimos pescado el sábado.", q:"Écoute : qui a mangé du poisson ?", opts:["Eux","Moi","Nous"], correct:2, why:"« -imos » = nosotros : comimos. Pour « eux » on aurait entendu « comieron »."},
  {cat:"oral", audio:"Mis padres llegaron anoche.", q:"Écoute : qui est arrivé ?", opts:["Mes parents","Mon père","Moi"], correct:0, why:"« Mis padres » (pluriel) + « llegaron » (-aron) : mes parents sont arrivés hier soir."},
  {cat:"comprehension", passage:"Laura: ¿Qué tal el fin de semana, Pedro? — Pedro: Muy bien. El sábado visité a mi abuela y comimos juntos. El domingo escribí un correo a mi jefe y salí a correr. — Laura: ¡Qué bien! Yo no salí. Trabajé todo el domingo.", q:"Que fait Pedro le samedi ?", opts:["Il rend visite à sa grand-mère","Il court","Il écrit à son chef"], correct:0, why:"« El sábado visité a mi abuela » : visiter une personne se dit avec « a »."},
  {cat:"comprehension", passage:"Laura: ¿Qué tal el fin de semana, Pedro? — Pedro: Muy bien. El sábado visité a mi abuela y comimos juntos. El domingo escribí un correo a mi jefe y salí a correr. — Laura: ¡Qué bien! Yo no salí. Trabajé todo el domingo.", q:"Que fait Pedro le dimanche ?", opts:["Il travaille toute la journée","Il écrit un e-mail et va courir","Il mange chez sa grand-mère"], correct:1, why:"« Escribí un correo… y salí a correr » : il a écrit un e-mail puis il est sorti courir."},
  {cat:"comprehension", passage:"Laura: ¿Qué tal el fin de semana, Pedro? — Pedro: Muy bien. El sábado visité a mi abuela y comimos juntos. El domingo escribí un correo a mi jefe y salí a correr. — Laura: ¡Qué bien! Yo no salí. Trabajé todo el domingo.", q:"Que dit Laura de son dimanche ?", opts:["Elle est sortie","Elle a travaillé","Elle a écrit un e-mail"], correct:1, why:"« Yo no salí. Trabajé todo el domingo » : elle n'est pas sortie, elle a travaillé."},
  {cat:"comprehension", passage:"Señora Vega: Buenos días, señor Díaz. ¿Cuándo llegó usted a Madrid? — Señor Díaz: Llegué anoche, a las diez. Viajé en tren. — Señora Vega: ¿Cenó usted en el tren? — Señor Díaz: No, cené en casa de mi hermano.", q:"Quand M. Díaz est-il arrivé à Madrid ?", opts:["Hier soir","Ce matin","Le week-end dernier"], correct:0, why:"« Llegué anoche, a las diez » = je suis arrivé hier soir, à dix heures."},
  {cat:"comprehension", passage:"Señora Vega: Buenos días, señor Díaz. ¿Cuándo llegó usted a Madrid? — Señor Díaz: Llegué anoche, a las diez. Viajé en tren. — Señora Vega: ¿Cenó usted en el tren? — Señor Díaz: No, cené en casa de mi hermano.", q:"Où M. Díaz a-t-il dîné ?", opts:["Dans le train","Au restaurant","Chez son frère"], correct:2, why:"« Cené en casa de mi hermano » : il a dîné chez son frère. Le vouvoiement (usted, señor) montre une conversation formelle."}
 ],
 PRON_VERBS: [
  {en:"hablo · habló", fr:"je parle · il a parlé (accent écrit : ha-BLÓ, la voix tombe sur la dernière syllabe)"},
  {en:"comí · comió", fr:"j'ai mangé · il a mangé (co-MÍ, co-MIÓ : une seule syllabe pour ió)"},
  {en:"Ayer hablé con mi madre.", fr:"Hier, j'ai parlé avec ma mère. (y = yé : a-YER ; accent sur ha-BLÉ)"},
  {en:"Llegué a las nueve.", fr:"Je suis arrivé à neuf heures. (gu devant é = g dur : ye-GUÉ)"},
  {en:"Busqué mi libro.", fr:"J'ai cherché mon livre. (qu = k : bus-KÉ)"},
  {en:"Empecé a trabajar.", fr:"J'ai commencé à travailler. (c = th en Espagne : em-pe-THÉ)"},
  {en:"Hablaron anoche.", fr:"Ils ont parlé hier soir. (-aron : ha-BLA-ron ; a-NO-tche)"},
  {en:"Comieron pescado.", fr:"Ils ont mangé du poisson. (ie = yé : co-MIÉ-ron ; sc = sk : pes-KA-do)"},
  {en:"¿Qué comiste ayer?", fr:"Qu'as-tu mangé hier ? (qué avec accent ; co-MIS-te : accent sur MIS)"},
  {en:"¿Cuándo llegó usted?", fr:"Quand êtes-vous arrivé ? (KUAN-do ; ye-GÓ : la voix monte sur la question)"}
 ],
 READING: [
  "El sábado pasado, Lucía organizó una cena en su casa.",
  "Compró pescado y verduras en el mercado y cocinó toda la tarde.",
  "Sus amigos llegaron a las ocho y le regalaron flores.",
  "Todos cenaron, bebieron vino y hablaron de sus vacaciones.",
  "Pablo tocó la guitarra y Marta cantó una canción.",
  "Los vecinos escucharon la música y llamaron a la puerta.",
  "—Perdone, señora, ¿empezó la fiesta hace mucho? —preguntó el vecino.",
  "—No, empezó hace una hora. ¿Quiere entrar? —contestó Lucía.",
  "El vecino entró, comió un poco de pescado y salió a las doce.",
  "Al día siguiente, Lucía escribió un mensaje a todos: «¡Gracias!»"
 ],
 GLOSS: [
  {en:"organizó", fr:"il / elle a organisé (organizar, passé simple, 3e personne)"},
  {en:"las verduras", fr:"les légumes (féminin pluriel)"},
  {en:"las flores", fr:"les fleurs (pluriel de la flor)"},
  {en:"tocar la guitarra", fr:"jouer de la guitare (tocar = toucher ET jouer d'un instrument)"},
  {en:"una canción", fr:"une chanson (féminin, accent écrit sur la fin)"},
  {en:"preguntó / contestó", fr:"il a demandé / elle a répondu (passé simple, verbes en -ar)"},
  {en:"¿Quiere entrar?", fr:"Voulez-vous entrer ? (quiere : politesse, forme usted de querer)"},
  {en:"una hora", fr:"une heure (durée) ; « hace una hora » = il y a une heure"}
 ],
 GRAMMAR1: {
  heading:"Le pretérito indefinido régulier : -AR, -ER, -IR",
  lede:"Jusqu'ici, tu as parlé au présent et au futur proche. Pour raconter ce qui est fini, l'espagnol a un temps à lui : le pretérito indefinido (le passé simple espagnol, on dit aussi « el pretérito »). Bonne nouvelle : il est régulier pour presque tous les verbes que tu connais, et les verbes en -ER et en -IR ont exactement les mêmes terminaisons.",
  conj:[
   ["yo →","hablé · comí · viví","Ayer hablé con mi madre. Comí en casa. Viví dos años en Lyon."],
   ["tú →","hablaste · comiste · viviste","¿Con quién hablaste? ¿Qué comiste ayer? ¿Dónde viviste antes?"],
   ["él, ella, usted →","habló · comió · vivió","Habló con su jefe. ¿Qué comió usted anoche? Vivió en Madrid."],
   ["nosotros/as →","hablamos · comimos · vivimos","Hablamos por teléfono. Comimos juntos. Vivimos aquí tres años."],
   ["vosotros/as →","hablasteis · comisteis · vivisteis","¿Hablasteis con ella? ¿Comisteis en el restaurante? ¿Vivisteis en París?"],
   ["ellos, ellas, ustedes →","hablaron · comieron · vivieron","Hablaron anoche. ¿Qué comieron ustedes? Vivieron en Bogotá."]
  ],
  ruleHtml:"📖 <b>1. Quand l'utiliser : pour une action TERMINÉE, située à un moment précis du passé.</b> Si tu peux dire quand (ayer, el lunes pasado, en 2019, hace dos días) ou si l'action est un fait complet (« Terminé el trabajo »), tu prends l'indefinido. Pourquoi « indefinido » ? Parce qu'il ne dit rien sur la durée ni sur la répétition : il dit seulement « c'est fait ». C'est un événement, comme un point sur une ligne du temps.<br><br>🧩 <b>2. Les terminaisons.</b> On enlève -ar / -er / -ir et on ajoute :<br>• <b>-AR</b> : -é · -aste · -ó · -amos · -asteis · -aron (hablar → hablé, hablaste, habló…)<br>• <b>-ER et -IR (identiques !)</b> : -í · -iste · -ió · -imos · -isteis · -ieron (comer → comí… ; vivir → viví…)<br>Plus simple qu'au présent : au présent, -ER et -IR avaient des terminaisons différentes à nosotros et vosotros ; au passé, la série est unique. Retiens : <b>-é / -í</b> pour yo, <b>-ste</b> pour tú, <b>-ó / -ió</b> pour él, <b>-mos</b> pour nosotros, <b>-ron</b> pour ellos.<br><br>✍️ <b>3. L'accent écrit n'est pas décoratif.</b> Aux formes yo et él, la voix tombe sur la dernière syllabe : <b>hablé, habló, comí, comió, viví, vivió</b>. La règle : un mot qui finit par une voyelle, -n ou -s et dont la dernière syllabe est accentuée prend un accent écrit. Résultat utile : « hablo » (je parle) et « habló » (il a parlé) ne se confondent plus à l'écrit. À l'inverse, « hablaron » ou « comieron » n'ont pas d'accent écrit : la voix tombe sur l'avant-dernière syllabe (ha-BLA-ron, co-MIE-ron).<br><br>🔁 <b>4. Nosotros : -ar et -ir sont les mêmes qu'au présent.</b> « Hablamos » et « vivimos » sont identiques au présent et au passé ; seul le contexte tranche : « Hablamos cada día » (présent) / « Ayer hablamos » (passé). Pour -er, la différence est visible : comemos (présent) ≠ comimos (passé).<br><br>👥 <b>5. Tutoiement ET vouvoiement.</b> tú → <b>¿Qué comiste? ¿Cuándo llegaste?</b> · usted → <b>¿Qué comió usted? ¿Cuándo llegó usted?</b> (usted = forme de él / ella ; ustedes = forme de ellos / ellas). Pluriel amical : <b>vosotros</b> (Espagne : hablasteis, comisteis) ; en Amérique latine : <b>ustedes</b> (hablaron, comieron).<br><br>⚠️ <b>6. Pronoms et négation : même place qu'au présent.</b> Le pronom se met avant le verbe : <b>Me llamó anoche.</b> (il m'a appelé hier soir). La négation aussi : <b>No compré nada.</b><br><br>🚧 <b>7. Ce qui n'est pas encore là.</b> ser, ir, estar, tener, hacer… ont un passé irrégulier. Pour l'instant, tu racontes avec des verbes réguliers (hablar, comer, vivir, salir, escribir…) ; les irréguliers arrivent au palier suivant (A2.2).",
  dialogueLede:"Deux amis parlent de leur week-end (tutoiement) :",
  dialogue:[
   {who:"them", en:"¡Hola, Luis! ¿Qué tal el fin de semana?", fr:"Salut, Luis ! Comment s'est passé le week-end ?"},
   {who:"you", en:"Muy bien. El sábado cené con unos amigos y el domingo salí a correr. ¿Y tú?", fr:"Très bien. Samedi, j'ai dîné avec des amis et dimanche, je suis sorti courir. Et toi ?"},
   {who:"them", en:"Yo trabajé el sábado, pero el domingo comí con mis padres.", fr:"Moi, j'ai travaillé samedi, mais dimanche j'ai mangé avec mes parents."},
   {who:"you", en:"¿Y qué comisteis?", fr:"Et qu'avez-vous mangé ?"},
   {who:"them", en:"Mi madre cocinó pescado y yo compré el pan.", fr:"Ma mère a cuisiné du poisson et moi, j'ai acheté le pain."},
   {who:"you", en:"¡Qué bien! ¿Hablaste con tu hermana?", fr:"Super ! Tu as parlé avec ta sœur ?"},
   {who:"them", en:"Sí, llamó anoche y hablamos una hora.", fr:"Oui, elle a appelé hier soir et nous avons parlé une heure."}
  ],
  whyLabel:"Pourquoi une seule série de terminaisons pour -ER et -IR ?",
  whyText:"Au présent, les familles -er et -ir ne se distinguent qu'à nosotros et vosotros (comemos / vivimos, coméis / vivís). Au passé simple, elles partagent les mêmes terminaisons à toutes les personnes : <b>-í / -iste / -ió / -imos / -isteis / -ieron</b>. Le résultat : trois familles au présent (-ar, -er, -ir), seulement <b>deux séries</b> au passé simple (-ar d'un côté, -er / -ir de l'autre). Astuce : retiens la mélodie « -é, -aste, -ó, -amos, -asteis, -aron » et « -í, -iste, -ió, -imos, -isteis, -ieron ». Dernier point : le français distingue « j'ai mangé » (passé composé) et « je mangeai » (passé simple, littéraire). En espagnol, l'indefinido est le temps de la conversation de tous les jours pour dire ce qui est fini — surtout en Amérique latine. Retiens simplement : fini + moment précis = indefinido."
 },
 GRAMMAR2: {
  heading:"Quand l'utiliser : les marqueurs de temps, hace + durée, l'orthographe de « yo »",
  dialogueLede:"À l'hôtel, la réceptionniste et un client (vouvoiement) :",
  dialogue:[
   {who:"them", en:"Buenos días, señor Díaz. ¿Cuándo llegó usted a Madrid?", fr:"Bonjour, monsieur Díaz. Quand êtes-vous arrivé à Madrid ?"},
   {who:"you", en:"Llegué anoche, a las diez. Viajé en tren.", fr:"Je suis arrivé hier soir, à dix heures. J'ai voyagé en train."},
   {who:"them", en:"¿Cenó usted en el tren?", fr:"Avez-vous dîné dans le train ?"},
   {who:"you", en:"No, cené en casa de mi hermano. Hace dos días llamé al hotel.", fr:"Non, j'ai dîné chez mon frère. Il y a deux jours, j'ai appelé l'hôtel."},
   {who:"them", en:"Sí, hablamos por teléfono. ¿Recibió usted nuestro mensaje?", fr:"Oui, nous avons parlé au téléphone. Avez-vous reçu notre message ?"},
   {who:"you", en:"Sí, lo recibí el lunes. Muchas gracias.", fr:"Oui, je l'ai reçu lundi. Merci beaucoup."}
  ],
  ruleHtml:"⏱️ <b>1. Les marqueurs qui « ferment » le temps.</b> Ces mots disent : la période est terminée → indefinido. <b>ayer, anteayer, anoche, la semana pasada, el mes pasado, el año pasado, el lunes pasado, el fin de semana pasado, el otro día, en 2019, hace dos días</b>. Exemples : <b>Ayer comí paella. El año pasado viví en Lyon.</b><br><br>⏳ <b>2. « hace » + durée = « il y a ».</b> <b>Llegué hace dos horas. Hablamos hace una semana.</b> Pourquoi « hace » ? C'est le verbe hacer à la 3e personne, impersonnel, comme dans « hace calor » (A1.11). Le verbe de la phrase est au passé : <i>« Llego hace dos horas »</i> ne dit pas « je suis arrivé il y a deux heures » ; il faut « Llegué hace dos horas ».<br><br>🔤 <b>3. L'orthographe de « yo » : garder le même SON.</b> Devant -é, certaines lettres changeraient de son. On corrige l'orthographe pour garder le son de l'infinitif :<br>• <b>-car → -qué</b> : buscar → busqué, tocar → toqué, sacar → saqué<br>• <b>-gar → -gué</b> : llegar → llegué, pagar → pagué, jugar → jugué<br>• <b>-zar → -cé</b> : empezar → empecé, organizar → organicé, almorzar → almorcé<br>Seule la forme <b>yo</b> change : llegaste, llegó, llegamos s'écrivent normalement.<br><br>➡️ <b>4. Enchaîner un récit.</b> <b>primero, luego, después, entonces, por fin, al final, al día siguiente</b>. Exemple : <b>Primero abrí la puerta, luego salí y por fin llegué a casa.</b> Dans un récit au passé, « al día siguiente » (le lendemain) remplace « mañana » (demain).<br><br>👥 <b>5. Poser la question : tú ET usted.</b> tú → <b>¿Cuándo llegaste? ¿Recibiste el mensaje?</b> · usted → <b>¿Cuándo llegó usted? ¿Recibió usted el mensaje?</b> Avec un inconnu, un client ou un supérieur, pense toujours à la forme de politesse.<br><br>🚫 <b>6. Nier au passé.</b> <b>No compré nada. No llamó nadie. Nunca viajé a Japón.</b> Avec « nada » ou « nadie » après le verbe, il faut « no » avant : c'est la double négation espagnole, obligatoire. Avec « nunca » avant le verbe, on n'ajoute pas « no » : <i>Nunca viajé</i> = <i>No viajé nunca</i>.<br><br>🔀 <b>7. Trois temps, trois repères.</b> <b>Hoy trabajo</b> (présent), <b>mañana voy a trabajar</b> (futur proche), <b>ayer trabajé</b> (passé simple). Le marqueur de temps te dit quelle forme choisir : fais le réflexe « mot de temps → temps du verbe ».",
  whyLabel:"Pourquoi les marqueurs de temps sont-ils si importants ?",
  whyText:"En français, « j'ai parlé » (passé composé) suffit : on comprend le passé grâce à l'auxiliaire. En espagnol, la forme du verbe change complètement (hablo / habló), donc il faut choisir. Et l'espagnol a d'autres passés, que tu découvriras dans les paliers suivants. Le réflexe qui t'évite de te tromper : repère d'abord le <b>mot de temps</b> de la phrase (ayer, la semana pasada, hace dos días, el año pasado…) et choisis la forme qui lui correspond. Si le mot de temps dit « fini et daté », tu prends l'indefinido. Cette méthode marche aussi pour poser des questions : « ¿Cuándo llegaste? » appelle une réponse avec un marqueur (« Llegué ayer »). Entraîne-toi à produire des paires : « Hoy… / Ayer… ». Dans quelques semaines, ce réflexe sera automatique."
 },
 REVIEW: [
  {q:"« J'ai faim, ___ je vais manger. »", opts:["así que","porque"], correct:0, fb:"« así que » introduit la conséquence : j'ai faim, donc je vais manger. « porque » donnerait la cause. (rappel A1.12)"},
  {q:"Au revoir à un client (formel) :", opts:["Que tengas un buen día.","Que tenga un buen día."], correct:1, fb:"Usted → « que tenga ». Tú → « que tengas ». (rappel A1.12)"},
  {q:"Pour demander poliment son aide à un inconnu :", opts:["¿Me ayudas?","¿Podría ayudarme?"], correct:1, fb:"« ¿Podría…? » est la formule la plus polie : à apprendre en bloc. (rappel A1.12)"},
  {q:"« Pourquoi ? » (question) :", opts:["¿Porque?","¿Por qué?"], correct:1, fb:"Question : « por qué » en deux mots avec accent sur qué. Réponse : « porque » en un mot. (rappel A1.12)"},
  {q:"« Parce que » :", opts:["porque","por qué"], correct:0, fb:"« porque » = parce que : un mot, sans accent. (rappel A1.12)"}
 ],
 DRILLS: [
  {type:"fill", text:"Ayer yo ___ con mi madre por teléfono. (hablar)", answers:["hablé","Hablé"], why:"yo → -é : hablé. Attention à l'accent : « hable » (sans accent) est une autre forme."},
  {type:"fill", text:"¿Qué ___ tú anoche? (cenar)", answers:["cenaste","Cenaste"], why:"tú → -aste : cenaste."},
  {type:"fill", text:"Mi hermana ___ a las ocho. (llegar)", answers:["llegó","Llegó"], why:"ella → -ó : llegó, avec l'accent écrit."},
  {type:"fill", text:"Nosotros ___ en un restaurante el sábado. (comer)", answers:["comimos","Comimos"], why:"nosotros passé de -er : comimos (présent : comemos)."},
  {type:"fill", text:"Mis amigos ___ el año pasado a Madrid. (viajar)", answers:["viajaron","Viajaron"], why:"ellos → -aron : viajaron."},
  {type:"fill", text:"Vosotros ___ un mensaje a Pedro. (escribir)", answers:["escribisteis","Escribisteis"], why:"vosotros → -isteis pour -er / -ir : escribisteis (Espagne). En Amérique latine : ustedes escribieron."},
  {type:"fill", text:"Usted ___ la puerta, ¿verdad? (abrir)", answers:["abrió","Abrió"], why:"usted se conjugue comme él / ella : abrió, accent écrit."},
  {type:"fill", text:"Yo ___ de casa a las siete. (salir)", answers:["salí","Salí"], why:"salir est régulier au passé : salí (yo), saliste, salió… (au présent : salgo)."},
  {type:"fill", text:"Yo ___ mi libro en casa. (buscar)", answers:["busqué","Busqué"], why:"c + é → qu + é : busqué (pour garder le son k)."},
  {type:"fill", text:"Yo ___ a las nueve. (llegar)", answers:["llegué","Llegué"], why:"g + é → gu + é : llegué."},
  {type:"fill", text:"Yo ___ la cuenta. (pagar)", answers:["pagué","Pagué"], why:"pagar → pagué : même règle que llegué."},
  {type:"fill", text:"Ayer yo ___ a estudiar a las ocho. (empezar)", answers:["empecé","Empecé"], why:"z + é → c + é : empecé. Les autres personnes : empezaste, empezó…"},
  {type:"fill", text:"Ellos ___ una carta. (recibir)", answers:["recibieron","Recibieron"], why:"ellos → -ieron : recibieron."},
  {type:"fill", text:"El jefe ___ comprar un coche. (decidir)", answers:["decidió","Decidió"], why:"él → -ió : decidió. « decidir + infinitif » : decidió comprar."},
  {type:"fill", text:"Tú ___ mucho en la universidad. (aprender)", answers:["aprendiste","Aprendiste"], why:"tú → -iste pour -er : aprendiste."},
  {type:"fill", text:"Ayer yo no ___ nada. (comprar)", answers:["compré","Compré"], why:"yo → compré. La double négation : « no… nada »."},
  {type:"choice", q:"Quel mot est un marqueur du passé ?", opts:["siempre","mañana","anteayer"], correct:2, why:"« Anteayer » = avant-hier : période terminée. « Mañana » est le futur ; « siempre » exprime l'habitude."},
  {type:"choice", q:"« Il y a deux jours » :", opts:["en dos días","hace dos días"], correct:1, why:"« hace dos días » + verbe au passé. « en dos días » = dans deux jours (futur)."},
  {type:"choice", q:"Quelle forme est au présent ?", opts:["hablo","habló"], correct:0, why:"hablo (yo) = je parle ; habló = il a parlé. L'accent écrit change tout."},
  {type:"choice", q:"Pour demander poliment à une cliente :", opts:["¿Cuándo llegaste?","¿Cuándo llegó usted?"], correct:1, why:"Cliente = usted : « ¿Cuándo llegó usted? ». « llegaste » est le tutoiement."},
  {type:"choice", q:"Orthographe correcte :", opts:["llegé","llegué"], correct:1, why:"g + é → gu + é : llegué (on garde le son g dur)."},
  {type:"choice", q:"Lequel est correct ?", opts:["No llamó nadie.","No llamó alguien."], correct:0, why:"Après « no » + verbe, on utilise « nadie » : double négation obligatoire."},
  {type:"choice", q:"« Ayer hablamos » : le verbe est…", opts:["au passé","au présent"], correct:0, why:"Le mot « ayer » donne le temps : passé. Sans marqueur, « hablamos » peut être présent."},
  {type:"choice", q:"« Le lendemain » dans un récit au passé :", opts:["mañana","al día siguiente"], correct:1, why:"Dans un récit au passé, on dit « al día siguiente ». « Mañana » est le lendemain du moment présent."}
 ],
 ANNOTATED: {
  title:"Quatre phrases au passé",
  intro:"Quatre phrases pour t'entraîner à reconnaître le passé simple régulier. Touche chaque mot pour voir sa nature et sa traduction.",
  sentences:[
   {fr:"Hier, j'ai parlé avec ma mère.", tokens:[
    {w:"Ayer", tag:"adverbe", info:"marqueur de temps", fr:"hier", tip:"Il ferme la journée : le verbe est au passé simple."},
    {w:"hablé", tag:"verbe", info:"hablar · passé simple · yo", fr:"j'ai parlé", tip:"-ar → -é à la 1re personne. Accent écrit sur la fin."},
    {w:"con", tag:"préposition", fr:"avec"},
    {w:"mi", tag:"déterminant", info:"possessif · fém. sing.", fr:"ma", tip:"mi s'écrit sans accent et ne change pas au féminin."},
    {w:"madre", tag:"nom", info:"fém. sing.", fr:"mère"}
   ]},
   {fr:"Mes amis ont mangé et ont bu.", tokens:[
    {w:"Mis", tag:"déterminant", info:"possessif · plur.", fr:"mes", tip:"mis = mes ; mi = mon / ma."},
    {w:"amigos", tag:"nom", info:"masc. plur.", fr:"amis"},
    {w:"comieron", tag:"verbe", info:"comer · passé simple · ellos", fr:"ont mangé", tip:"-er → -ieron à ellos."},
    {w:"y", tag:"conjonction", fr:"et"},
    {w:"bebieron", tag:"verbe", info:"beber · passé simple · ellos", fr:"ont bu", tip:"Même terminaison : -ieron."}
   ]},
   {fr:"Quand êtes-vous arrivé à Madrid ?", tokens:[
    {w:"¿Cuándo", tag:"adverbe", info:"interrogatif", fr:"quand", tip:"Accent écrit : question."},
    {w:"llegó", tag:"verbe", info:"llegar · passé simple · usted", fr:"êtes-vous arrivé", tip:"usted se conjugue comme él / ella : llegó."},
    {w:"usted", tag:"pronom sujet", info:"politesse", fr:"vous", tip:"Il suit ici le verbe, comme en français : llegó usted."},
    {w:"a", tag:"préposition", fr:"à"},
    {w:"Madrid?", tag:"nom propre", fr:"Madrid"}
   ]},
   {fr:"Hier soir, je n'ai rien acheté.", tokens:[
    {w:"Anoche", tag:"adverbe", info:"marqueur de temps", fr:"hier soir", tip:"Un seul mot pour « hier soir »."},
    {w:"no", tag:"adverbe", info:"négation", fr:"ne… pas", tip:"« no » avant le verbe."},
    {w:"compré", tag:"verbe", info:"comprar · passé simple · yo", fr:"j'ai acheté", tip:"-ar → -é."},
    {w:"nada", tag:"pronom", info:"indéfini négatif", fr:"rien", tip:"Après le verbe : double négation avec « no »."}
   ]}
  ]
 },
 CULTURE_NOTE: {icon:"🕰️", title:"Culture, expressions de récit et fiche récap de A2.1",
  html:"<b>🗣️ Culture : le passé qu'on entend partout</b> En Amérique latine, on emploie le pretérito indefinido pour presque tout ce qui est fini, même « ce matin » ou « il y a cinq minutes ». En Espagne, pour parler d'aujourd'hui, on utilise souvent un autre passé que tu verras au palier A2.3. Dans les deux cas, pour une date passée (ayer, el año pasado), l'indefinido est le bon choix.<br><br><b>🧰 Cinq expressions de temps du quotidien</b><br>1. <b>hace poco</b> = il y a peu de temps (« Llegué hace poco »).<br>2. <b>hace mucho</b> = il y a longtemps.<br>3. <b>hace un rato</b> = il y a un moment (« Hablamos hace un rato »).<br>4. <b>el otro día</b> = l'autre jour.<br>5. <b>de un día para otro</b> = d'un jour à l'autre, du jour au lendemain.<br><br><b>📋 Fiche récap A2.1</b><br>• Quand : action <b>finie</b> et <b>datée</b> → indefinido.<br>• <b>-AR</b> : é · aste · ó · amos · asteis · aron.<br>• <b>-ER / -IR</b> : í · iste · ió · imos · isteis · ieron.<br>• Accent écrit : hablé / habló, comí / comió, viví / vivió.<br>• yo : -car → -qué, -gar → -gué, -zar → -cé.<br>• Marqueurs : ayer, anteayer, anoche, la semana pasada, hace dos días, en 2019.<br>• Tú ET usted : ¿Cuándo llegaste? / ¿Cuándo llegó usted?"},
 NEXT_PREVIEW:"A2.2 (Pretérito indefinido irrégulier) : les verbes qu'on emploie tous les jours — ser, ir, estar, tener, hacer, poder, decir, ver, dar — pour dire « Ayer fui al cine », « Estuve en casa », « Hice la cena », « Tuve mucho trabajo »…",
 META:{vocabTitle:"Ayer, la semana pasada : raconter au passé (A2.1)", lectureTitle:"La cena de Lucía", bilanTitle:"Bravo, tu sais raconter ce qui s'est passé !", pronLabel:"Accent final (hablo / habló) et sons gu, qu, c de llegué, busqué, empecé", todayLede:"raconter une action terminée avec le pretérito indefinido régulier (-AR, -ER, -IR), la placer dans le temps (ayer, la semana pasada, hace dos días) et poser la question en tutoiement ET en vouvoiement"}
};
})();


// A2.2 — Fui, estuve, tuve, hice : le pretérito indefinido irrégulier — leçon 214
(function(){
function blk(name, rows){
  var v = __esB(name, rows);
  v.forEach(function(o, i){ o.emo = rows[i][4]; o.ex = [rows[i][5], rows[i][6]]; });
  return v;
}
// ligne = [terme, API, français, note, emoji, exemple ES, exemple FR]
var V = [].concat(
 blk("Ser et ir : une seule forme au passé", [
  ["ir (aller) → fui","/iɾ · fwi/","aller → je suis allé","fui · fuiste · fue · fuimos · fuisteis · fueron. Toujours « a » après : « fui a Madrid ». Pas d'accent écrit : fui et fue se prononcent en une seule syllabe.","🚶","El año pasado fui a Madrid.","L'année dernière, je suis allé à Madrid."],
  ["ser (être) → fui","/seɾ · fwi/","être → j'ai été, je fus","Exactement les mêmes formes que ir ! « fue » = il fut / il a été. C'est le contexte qui décide : « fue a Madrid » (ir + a) ≠ « fue un día genial » (ser).","🔁","La fiesta fue genial.","La fête a été géniale."],
  ["¿Cómo fue?","/ˈkomo fwe/","Comment c'était ? Comment ça s'est passé ?","Question clé pour demander l'avis de quelqu'un sur un événement passé. Réponses : « Fue genial », « Fue horrible », « Fue muy interesante ». Même question avec tú et usted : « ¿Cómo fue su viaje? ».","🎤","¿Cómo fue el viaje?","Comment s'est passé le voyage ?"],
  ["¿Adónde fuiste? / ¿Adónde fue usted?","/aˈðonde ˈfwiste · aˈðonde ˈfwe usˈteð/","Où es-tu allé ? / Où êtes-vous allé ?","Tú : fuiste (-iste). Usted : fue (forme de él / ella). « ¿Adónde? » = vers où, en un mot avec accent.","🧭","¿Adónde fue usted el sábado?","Où êtes-vous allé samedi ?"]
 ]),
 blk("Dar et ver : les terminaisons sans accent", [
  ["dar → di","/daɾ · di/","donner → j'ai donné","di · diste · dio · dimos · disteis · dieron. Ce sont les terminaisons de -er / -ir, SANS accent : di et dio n'ont qu'une syllabe (un mot d'une syllabe ne prend pas d'accent).","🎁","Ella me dio las llaves.","Elle m'a donné les clés."],
  ["ver → vi","/beɾ · bi/","voir → j'ai vu","vi · viste · vio · vimos · visteis · vieron. Même modèle que dar. « Ver una película » = regarder un film. v = b.","👀","Vimos una película muy buena.","Nous avons vu un très bon film."]
 ]),
 blk("Les verbes à radical irrégulier : terminaisons -e, -iste, -o… sans accent", [
  ["estar → estuve","/esˈtaɾ · esˈtuβe/","être (lieu, état) → j'ai été","estuve · estuviste · estuvo · estuvimos · estuvisteis · estuvieron. Radical estuv-. Les terminaisons -e et -o n'ont PAS d'accent (la voix tombe sur estu-). Pour dire où on est resté : « Estuve en casa ».","📍","Estuve en casa todo el día.","J'ai été à la maison toute la journée."],
  ["tener → tuve","/teˈneɾ · ˈtuβe/","avoir → j'ai eu","tuve · tuviste · tuvo · tuvimos · tuvisteis · tuvieron. Radical tuv-. « Tuve mucho trabajo » = j'ai eu beaucoup de travail.","🎒","Tuvimos mucho trabajo.","Nous avons eu beaucoup de travail."],
  ["poder → pude","/poˈðeɾ · ˈpuðe/","pouvoir → j'ai pu","pude · pudiste · pudo · pudimos · pudisteis · pudieron. Radical pud-. Au passé, « pude » veut dire « j'ai pu et je l'ai fait » ; « no pude » = je n'ai pas réussi.","💪","No pude llegar a tiempo.","Je n'ai pas pu arriver à l'heure."],
  ["poner → puse","/poˈneɾ · ˈpuse/","mettre → j'ai mis","puse · pusiste · puso · pusimos · pusisteis · pusieron. Radical pus-.","📌","Puse el libro en la mesa.","J'ai mis le livre sur la table."],
  ["saber → supe","/saˈβeɾ · ˈsupe/","savoir → j'ai appris, j'ai su","supe · supiste · supo · supimos · supisteis · supieron. Radical sup-. Au passé, « supe » = j'ai appris (une nouvelle) : « Supe la noticia ayer ».","💡","Supe la noticia ayer.","J'ai appris la nouvelle hier."],
  ["querer → quise","/keˈɾeɾ · ˈkise/","vouloir → j'ai voulu","quise · quisiste · quiso · quisimos · quisisteis · quisieron. Radical quis-. « No quise » = j'ai refusé.","❤️","Marta quiso cenar fuera.","Marta a voulu dîner dehors."],
  ["venir → vine","/beˈniɾ · ˈbine/","venir → je suis venu","vine · viniste · vino · vinimos · vinisteis · vinieron. Radical vin-.","🏃","Mis padres vinieron a mi casa.","Mes parents sont venus chez moi."],
  ["hacer → hice","/aˈθeɾ · ˈiθe/","faire → j'ai fait","hice · hiciste · hizo · hicimos · hicisteis · hicieron. Radical hic-, mais « hizo » s'écrit avec z : « hico » se lirait « iko ». La lettre change pour garder le son th.","🛠️","Hice la cena para mis amigos.","J'ai préparé le dîner pour mes amis."],
  ["decir → dije","/deˈθiɾ · ˈdixe/","dire → j'ai dit","dije · dijiste · dijo · dijimos · dijisteis · dijeron. Radical dij-. Après j, -ieron devient -eron : dijeron (jamais « dijieron »).","💬","Ellos dijeron que sí.","Ils ont dit que oui."],
  ["traer → traje","/tɾaˈeɾ · ˈtɾaxe/","apporter → j'ai apporté","traje · trajiste · trajo · trajimos · trajisteis · trajeron. Même règle que decir : trajeron.","🛍️","Traje el pan.","J'ai apporté le pain."],
  ["hay → hubo","/aj · ˈuβo/","il y a → il y a eu","« hubo » est le passé de « hay » : il ne change pas, que le nom soit singulier ou pluriel. « Hubo una fiesta » / « Hubo muchos problemas ».","🎉","Ayer hubo una fiesta en mi calle.","Hier, il y a eu une fête dans ma rue."]
 ]),
 blk("Pedir, dormir… : une voyelle qui change à la 3e personne", [
  ["pedir → pidió","/peˈðiɾ · piˈðjo/","demander, commander → il a demandé","pedí · pediste · pidió · pedimos · pedisteis · pidieron. Seules les 3es personnes changent : e → i. Au restaurant, « pedir » = commander.","🍽️","Pedí un café con leche.","J'ai commandé un café au lait."],
  ["servir → sirvió","/seɾˈβiɾ · siɾˈβjo/","servir","serví · serviste · sirvió · servimos · servisteis · sirvieron. Même changement e → i à él / ellos.","🍷","El camarero sirvió el café.","Le serveur a servi le café."],
  ["seguir → siguió","/seˈɣiɾ · siˈɣjo/","suivre, continuer","seguí · seguiste · siguió · seguimos · seguisteis · siguieron. Tu connais déjà « sigue todo recto » (A1.4).","➡️","Siguió todo recto.","Il a continué tout droit."],
  ["preferir → prefirió","/pɾefeˈɾiɾ · pɾefiˈɾjo/","préférer","preferí · preferiste · prefirió · preferimos · preferisteis · prefirieron. e → i à él / ellos (au présent, c'était e → ie).","⭐","Mi hermana prefirió una ensalada.","Ma sœur a préféré une salade."],
  ["dormir → durmió","/doɾˈmiɾ · duɾˈmjo/","dormir","dormí · dormiste · durmió · dormimos · dormisteis · durmieron. o → u à él / ellos.","😴","El niño durmió diez horas.","L'enfant a dormi dix heures."],
  ["divertirse → se divirtió","/diβeɾˈtiɾse · se diβiɾˈtjo/","s'amuser → il s'est amusé","me divertí · te divertiste · se divirtió · nos divertimos · os divertisteis · se divirtieron. Verbe pronominal : le pronom se place avant le verbe, comme en A1.7.","🎊","Nos divertimos mucho en la fiesta.","Nous nous sommes beaucoup amusés à la fête."]
 ]),
 blk("Leer, oír : le i entre deux voyelles devient y", [
  ["leer → leyó","/leˈeɾ · leˈʝo/","lire → il a lu","leí · leíste · leyó · leímos · leísteis · leyeron. Un i entre deux voyelles devient y à él / ellos. Accent écrit sur leí, leíste, leímos, leísteis (le i se prononce seul).","📖","Leí un libro muy interesante.","J'ai lu un livre très intéressant."],
  ["oír → oyó","/oˈiɾ · oˈʝo/","entendre → il a entendu","oí · oíste · oyó · oímos · oísteis · oyeron. Même règle que leer.","👂","Oí un ruido en la calle.","J'ai entendu un bruit dans la rue."]
 ]),
 blk("Un week-end, des vacances", [
  ["el cine","/el ˈθine/","le cinéma","Masculin. « Ir al cine » : al = a + el.","🎬","Ayer fui al cine con Ana.","Hier, je suis allé au cinéma avec Ana."],
  ["la playa","/la ˈplaʝa/","la plage","ll et y se prononcent « y ». « Ir a la playa ».","🏖️","Fuimos a la playa el domingo.","Nous sommes allés à la plage dimanche."],
  ["la montaña","/la monˈtaɲa/","la montagne","ñ = gn : mon-TA-gna.","⛰️","Estuvimos una semana en la montaña.","Nous avons passé une semaine à la montagne."],
  ["las vacaciones","/las bakaˈθjones/","les vacances","Toujours au pluriel en espagnol. « De vacaciones » = en vacances.","🏝️","Fui de vacaciones a Cádiz.","Je suis parti en vacances à Cadix."],
  ["el viaje","/el ˈbjaxe/","le voyage","Masculin (comme tous les mots en -aje). « ¡Buen viaje! » = bon voyage.","🧳","¿Cómo fue el viaje?","Comment s'est passé le voyage ?"],
  ["el partido","/el paɾˈtiðo/","le match","Masculin. « Un partido de fútbol ».","⚽","Vimos un partido de fútbol.","Nous avons vu un match de football."],
  ["el parque","/el ˈpaɾke/","le parc","qu = k : PAR-ke.","🌳","Fuimos al parque con los niños.","Nous sommes allés au parc avec les enfants."],
  ["pasarlo bien / mal","/paˈsaɾlo ˈβjen/","passer un bon / mauvais moment","« Lo pasé bien » = je me suis bien amusé. Le « lo » ne change pas. Avec usted : « ¿Lo pasó bien? ».","😄","Lo pasamos muy bien.","Nous avons passé un très bon moment."]
 ]),
 blk("Réagir et donner son avis (registre informel)", [
  ["¡Qué guay! / ¡Qué chévere!","/ke ɡwaj · ke ˈtʃeβeɾe/","Génial ! Super !","Informel, entre amis. « Guay » : Espagne. « Chévere » : Colombie, Venezuela, Pérou. Avec un supérieur, dis plutôt « ¡Qué bien! ».","🤩","¡Qué guay! ¿Y qué hicisteis?","Génial ! Et qu'avez-vous fait ?"],
  ["fue genial / fue horrible","/fwe xeˈnial · fwe oˈriβle/","c'était génial / c'était horrible","« fue » (ser) sert à juger un événement terminé. Genial et horrible ne changent pas au féminin ; au pluriel : geniales, horribles.","👍","La fiesta fue genial.","La fête a été géniale."],
  ["fue un desastre","/fwe un deˈsastɾe/","c'était un désastre","Expression très courante et un peu familière : « ¡Fue un desastre! ».","🌪️","El viaje fue un desastre.","Le voyage a été un désastre."]
 ]),
 blk("Poser les questions du passé : tú ET usted", [
  ["¿Qué hiciste? / ¿Qué hizo usted?","/ke iˈθiste · ke ˈiθo usˈteð/","Qu'as-tu fait ? / Qu'avez-vous fait ?","Tú : hiciste. Usted : hizo (forme de él / ella). La question de base pour demander le week-end de quelqu'un.","❓","¿Qué hizo usted el domingo?","Qu'avez-vous fait dimanche ?"],
  ["¿Dónde estuviste? / ¿Dónde estuvo usted?","/ˈdonde esˈtuβiste · ˈdonde esˈtuβo usˈteð/","Où as-tu été ? / Où avez-vous été ?","estar au passé pour un lieu où l'on est resté. « ¿Dónde estuviste ayer? » demande où tu étais, pas où tu es allé.","🗺️","¿Dónde estuvo usted ayer?","Où avez-vous été hier ?"],
  ["¿Pudiste…? / ¿Pudo usted…?","/puˈðiste · ˈpuðo/","As-tu pu… ? / Avez-vous pu… ?","Pour demander si l'action a réussi : « ¿Pudiste llegar? ». Réponses : « Sí, pude » / « No, no pude ».","🙋","¿Pudo usted llegar a tiempo?","Avez-vous pu arriver à l'heure ?"]
 ]),
 blk("Prononciation et orthographe des irréguliers", [
  ["fue · vio · dio · fui · vi · di","/fwe · bjo · djo/","pas d'accent écrit","Ces formes n'ont qu'une syllabe : jamais d'accent (« fué » et « dió » sont des fautes). C'est la règle des mots d'une seule syllabe.","✍️","Dio las llaves y vio la ciudad.","Il a donné les clés et il a vu la ville."],
  ["hizo · hice","/ˈiθo · ˈiθe/","z devant o, c devant e","La h est muette. Le son reste « th » (Espagne) : on écrit z devant o (hizo) et c devant e (hice).","🔤","Hice la cena y él puso la mesa.","J'ai fait le dîner et lui a mis la table."],
  ["dijeron · trajeron","/diˈxeɾon · tɾaˈxeɾon/","j rauque, pas de i","Après le radical en j (dij-, traj-), la terminaison est -eron, jamais -ieron.","🔊","Dijeron que vinieron en tren.","Ils ont dit qu'ils sont venus en train."]
 ])
);

LESSONS_ES[214] = {
 code:"A2.2", level:"A2",
 VOCAB: V,
 MEM_WORDS: __esIdx(V, ["ir (aller) → fui","¿Cómo fue?","tener → tuve","hacer → hice","decir → dije","hay → hubo","pedir → pidió","leer → leyó","la playa","las vacaciones"]),
 MINI_CHECKS: [
  {q:"« Je suis allé à Madrid » se dit :", opts:["Voy a Madrid.","Fui a Madrid.","Fue a Madrid."], correct:1, fb:"ir au passé simple : fui (yo), fuiste (tú), fue (él / usted). « Voy » est le présent."},
  {q:"« fue » peut venir de quels verbes ?", opts:["de ser seulement","de ir seulement","de ser ET de ir"], correct:2, fb:"Au passé simple, ser et ir ont les mêmes formes : fui, fuiste, fue, fuimos, fuisteis, fueron. Le contexte décide."},
  {q:"« J'ai préparé le dîner » :", opts:["Hice la cena.","Hací la cena.","Hizo la cena."], correct:0, fb:"hacer → hice (yo). « Hizo » = il / elle / usted a fait."},
  {q:"« Il a fait » (hacer) :", opts:["hice","hizo","hace"], correct:1, fb:"él → hizo, avec z : la lettre change pour garder le son th (« hico » se lirait « iko »)."},
  {q:"« Nous avons eu beaucoup de travail » :", opts:["Tenimos mucho trabajo.","Tuvimos mucho trabajo.","Tuvamos mucho trabajo."], correct:1, fb:"tener → tuv- + imos : tuvimos. Les irréguliers ont un radical spécial (tuv-) et des terminaisons sans accent."},
  {q:"« Ils ont dit » :", opts:["dijieron","dicieron","dijeron"], correct:2, fb:"decir → dij- ; après le j, on écrit -eron : dijeron."},
  {q:"« Il a commandé un café » (pedir) :", opts:["pedió","pidió","pidó"], correct:1, fb:"pedir → pidió : à la 3e personne, e devient i. Yo : pedí ; tú : pediste."},
  {q:"« Il a lu » (leer) :", opts:["leió","leó","leyó"], correct:2, fb:"Un i entre deux voyelles devient y : leyó, leyeron."}
 ],
 ROUNDS: [
  __esR("El año pasado fui a Madrid.","L'année dernière, je suis allé à Madrid."),
  __esR("Ayer estuve en casa todo el día.","Hier, j'ai été à la maison toute la journée."),
  __esR("Hice la cena para mis amigos.","J'ai préparé le dîner pour mes amis."),
  __esR("Mi hermana tuvo mucho trabajo.","Ma sœur a eu beaucoup de travail."),
  __esR("¿Adónde fuiste el sábado?","Où es-tu allé samedi ?"),
  __esR("Vimos una película muy buena.","Nous avons vu un très bon film."),
  __esR("¿Qué hizo usted el domingo?","Qu'avez-vous fait dimanche ?"),
  __esR("Mis padres vinieron a mi casa.","Mes parents sont venus chez moi."),
  __esR("Pudimos llegar a las nueve.","Nous avons pu arriver à neuf heures."),
  __esR("Pedí un café con leche.","J'ai commandé un café au lait."),
  __esR("Mi hijo durmió diez horas.","Mon fils a dormi dix heures."),
  __esR("Leí un libro muy interesante.","J'ai lu un livre très intéressant."),
  __esR("La fiesta fue muy bonita.","La fête a été très belle.")
 ],
 QUIZ: [
  {cat:"ecrit", q:"« Hier, je suis allé au cinéma. »", opts:["Ayer fue al cine.","Ayer fui al cine.","Ayer voy al cine."], correct:1, why:"yo → fui. « Fue » est la forme de él / ella / usted ; « voy » est le présent."},
  {cat:"ecrit", q:"Mi hermana ___ en Sevilla el año pasado. (estar)", opts:["estuvo","estuve","estuvieron"], correct:0, why:"Sujet singulier (mi hermana) → estuvo, sans accent : la voix tombe sur estu-."},
  {cat:"ecrit", q:"Nosotros ___ mucho trabajo. (tener)", opts:["tenimos","tuvimos","tuvemos"], correct:1, why:"tener → tuv- + imos : tuvimos. « Tenimos » mélange le présent et le passé."},
  {cat:"ecrit", q:"Ellos ___ que sí. (decir)", opts:["dijeron","dijieron","dicieron"], correct:0, why:"decir → dij- + eron (jamais ieron après j) : dijeron."},
  {cat:"ecrit", q:"Yo ___ una película ayer. (ver)", opts:["vió","vi","vio"], correct:1, why:"ver → vi (yo). « Vio » = él. Jamais d'accent sur vi ou vio : un seul son vocalique."},
  {cat:"ecrit", q:"¿Qué ___ tú el domingo? (hacer)", opts:["hizo","hiciste","hice"], correct:1, why:"tú → hiciste. « Hizo » = él / usted ; « hice » = yo."},
  {cat:"ecrit", q:"Usted ___ muy rápido. (venir)", opts:["vine","vino","viniste"], correct:1, why:"usted = forme de él / ella : vino. « Vine » = yo ; « viniste » = tú."},
  {cat:"ecrit", q:"Mi madre ___ un café. (pedir)", opts:["pedió","pidió","pidieron"], correct:1, why:"3e personne : e → i : pidió. « Pedió » n'existe pas."},
  {cat:"ecrit", q:"El niño ___ diez horas. (dormir)", opts:["durmieron","dormió","durmió"], correct:2, why:"él → durmió (o → u à la 3e personne). « Durmieron » est pour plusieurs enfants."},
  {cat:"ecrit", q:"Yo ___ una carta. (leer)", opts:["leyó","leí","leyeron"], correct:1, why:"yo → leí, avec accent écrit. À la 3e personne, i → y : leyó, leyeron."},
  {cat:"ecrit", q:"Quels verbes ont la même forme « fue » au passé simple ?", opts:["ser et ir","dar et ver","hacer et poder"], correct:0, why:"Ser et ir : fui, fuiste, fue, fuimos, fuisteis, fueron. Le contexte indique le verbe."},
  {cat:"ecrit", q:"« Il y a eu une fête. »", opts:["Hay una fiesta.","Hubo una fiesta.","Hizo una fiesta."], correct:1, why:"hubo = il y a eu (passé de hay). « Hizo una fiesta » = il a organisé une fête."},
  {cat:"ecrit", q:"À un client âgé : « ¿Adónde ___ usted ayer ? »", opts:["fuiste","fui","fue"], correct:2, why:"Vouvoiement : usted → forme de él : fue. « Fuiste » = tú ; « fui » = yo."},
  {cat:"ecrit", q:"« Nous avons pu venir. »", opts:["Podimos venir.","Pudimos venir.","Pusimos venir."], correct:1, why:"poder → pud- + imos : pudimos. « Pusimos » vient de poner (nous avons mis)."},
  {cat:"oral", audio:"Ayer fuimos a la playa.", q:"Écoute : qui est allé à la plage ?", opts:["Moi","Nous","Eux"], correct:1, why:"« fuimos » = nosotros (-imos). Moi serait « fui » ; eux « fueron »."},
  {cat:"oral", audio:"Mi hermana estuvo en Sevilla.", q:"Écoute : où était sa sœur ?", opts:["À Séville","À Madrid","À la maison"], correct:0, why:"« estuvo en Sevilla » = elle a été à Séville."},
  {cat:"oral", audio:"Hicieron la cena juntos.", q:"Écoute : qu'ont-ils fait ?", opts:["Ils ont mangé au restaurant","Ils ont préparé le dîner","Ils ont fait une promenade"], correct:1, why:"« hicieron la cena » = ils ont fait le dîner (préparé). « Juntos » = ensemble."},
  {cat:"oral", audio:"¿Qué hizo usted el sábado?", q:"Écoute : à qui s'adresse la question ?", opts:["À un ami proche","À quelqu'un qu'on vouvoie","À un enfant"], correct:1, why:"« hizo usted » : usted indique le vouvoiement. Avec un ami, on dirait « ¿Qué hiciste? »."},
  {cat:"oral", audio:"Pidieron dos cafés.", q:"Écoute : qu'ont-ils commandé ?", opts:["Deux thés","Deux cafés","Deux jus"], correct:1, why:"« pidieron » (pedir, ellos) + « dos cafés » : ils ont commandé deux cafés."},
  {cat:"comprehension", passage:"Ana: ¿Adónde fuiste de vacaciones? — Luis: Fui a Cádiz con mi familia. Estuvimos una semana en la playa. — Ana: ¿Y qué hicisteis? — Luis: Dormimos mucho, comimos pescado y mi hijo jugó en la playa todos los días. — Ana: ¡Qué bien! Yo no pude viajar. Tuve mucho trabajo.", q:"Où Luis est-il allé en vacances ?", opts:["À Cadix","À Séville","À Madrid"], correct:0, why:"« Fui a Cádiz » = je suis allé à Cadix."},
  {cat:"comprehension", passage:"Ana: ¿Adónde fuiste de vacaciones? — Luis: Fui a Cádiz con mi familia. Estuvimos una semana en la playa. — Ana: ¿Y qué hicisteis? — Luis: Dormimos mucho, comimos pescado y mi hijo jugó en la playa todos los días. — Ana: ¡Qué bien! Yo no pude viajar. Tuve mucho trabajo.", q:"Combien de temps sont-ils restés ?", opts:["Un week-end","Une semaine","Un mois"], correct:1, why:"« Estuvimos una semana » = nous avons passé une semaine."},
  {cat:"comprehension", passage:"Ana: ¿Adónde fuiste de vacaciones? — Luis: Fui a Cádiz con mi familia. Estuvimos una semana en la playa. — Ana: ¿Y qué hicisteis? — Luis: Dormimos mucho, comimos pescado y mi hijo jugó en la playa todos los días. — Ana: ¡Qué bien! Yo no pude viajar. Tuve mucho trabajo.", q:"Pourquoi Ana n'a-t-elle pas voyagé ?", opts:["Elle n'a pas voulu","Elle a eu beaucoup de travail","Elle est tombée malade"], correct:1, why:"« Tuve mucho trabajo » = j'ai eu beaucoup de travail ; « no pude viajar » = je n'ai pas pu voyager."},
  {cat:"comprehension", passage:"Camarero: Buenas noches. ¿Qué pidió usted? — Cliente: Pedí pescado. Mi mujer pidió una ensalada. — Camarero: Lo siento, hubo un problema en la cocina. — Cliente: No pasa nada.", q:"Qu'a commandé la femme du client ?", opts:["Du poisson","Une salade","Un café"], correct:1, why:"« Mi mujer pidió una ensalada » : sa femme a commandé une salade."},
  {cat:"comprehension", passage:"Camarero: Buenas noches. ¿Qué pidió usted? — Cliente: Pedí pescado. Mi mujer pidió una ensalada. — Camarero: Lo siento, hubo un problema en la cocina. — Cliente: No pasa nada.", q:"Qu'est-ce qui s'est passé en cuisine ?", opts:["Il y a eu un problème","Il y a eu une fête","Il y a eu un concert"], correct:0, why:"« Hubo un problema en la cocina » : il y a eu un problème. Le camarero dit « usted » : conversation formelle."}
 ],
 PRON_VERBS: [
  {en:"fui · fue", fr:"je suis allé · il est allé (une syllabe chacun : FWI, FWE ; pas d'accent écrit)"},
  {en:"vi · vio · di · dio", fr:"j'ai vu · il a vu · j'ai donné · il a donné (une syllabe : BI, BIO, DI, DIO)"},
  {en:"hice · hizo", fr:"j'ai fait · il a fait (h muette : I-the, I-tho ; z et c = th en Espagne)"},
  {en:"estuve · estuvo", fr:"j'ai été · il a été (es-TU-be, es-TU-bo : la voix tombe sur TU, pas d'accent)"},
  {en:"tuvimos mucho trabajo", fr:"nous avons eu beaucoup de travail (tu-BI-mos ; v = b)"},
  {en:"dijeron que sí", fr:"ils ont dit que oui (di-KHE-ron : j = r rauque)"},
  {en:"pidió · pidieron", fr:"il a demandé · ils ont demandé (pi-DIÓ avec accent écrit ; pi-DIE-ron sans accent)"},
  {en:"leí · leyó", fr:"j'ai lu · il a lu (le-Í avec accent ; le-YÓ : y = yé)"},
  {en:"¿Adónde fuiste?", fr:"Où es-tu allé ? (a-DON-de ; FWIS-te ; la voix redescend)"},
  {en:"Hubo una fiesta.", fr:"Il y a eu une fête. (h muette : U-bo ; v = b)"}
 ],
 READING: [
  "El verano pasado, Marta y su hermana fueron a Sevilla.",
  "Viajaron en tren y llegaron por la tarde.",
  "En el hotel, la recepcionista les dio las llaves.",
  "Tuvieron una habitación muy bonita con vistas a la plaza.",
  "El primer día, hicieron una visita al museo y vieron la ciudad.",
  "Por la noche, Marta quiso cenar fuera: pidió pescado y su hermana prefirió una ensalada.",
  "Dos días después, fueron a Cádiz y estuvieron en la playa toda la tarde.",
  "Durmieron bien y se divirtieron mucho.",
  "—¿Cómo fue el viaje? —preguntó su madre por teléfono.",
  "—¡Fue genial! —contestó Marta—. ¡Lo pasamos muy bien!"
 ],
 GLOSS: [
  {en:"les dio las llaves", fr:"leur a donné les clés (dio = dar, passé simple ; « les » = à elles)"},
  {en:"la habitación", fr:"la chambre (d'hôtel ou de maison)"},
  {en:"con vistas a", fr:"avec vue sur"},
  {en:"fuera", fr:"dehors, à l'extérieur (cenar fuera = dîner au restaurant)"},
  {en:"se divirtieron", fr:"elles se sont amusées (divertirse, passé simple, ellas)"},
  {en:"toda la tarde", fr:"tout l'après-midi (todo / toda s'accorde avec le nom)"},
  {en:"¡Lo pasamos muy bien!", fr:"Nous avons passé un très bon moment !"},
  {en:"genial", fr:"génial (invariable au féminin ; au pluriel : geniales)"}
 ],
 GRAMMAR1: {
  heading:"Le pretérito indefinido irrégulier : ser / ir, dar / ver et les radicaux irréguliers",
  lede:"Au palier précédent, tu as vu les verbes réguliers. Les verbes les plus fréquents de la langue (ir, estar, tener, hacer, decir…) sont irréguliers au passé simple. Bonne nouvelle : ils suivent presque tous le même modèle, donc tu n'apprends pas des dizaines de formes isolées, mais quelques familles.",
  conj:[
   ["yo →","fui · estuve · tuve · hice · dije · pude","Fui a Madrid. Estuve en casa. Tuve trabajo. Hice la cena. Dije que sí. Pude llegar."],
   ["tú →","fuiste · estuviste · tuviste · hiciste · dijiste · pudiste","¿Adónde fuiste? ¿Dónde estuviste? ¿Qué hiciste? ¿Qué dijiste? ¿Pudiste llegar?"],
   ["él, ella, usted →","fue · estuvo · tuvo · hizo · dijo · pudo","¿Adónde fue usted? Estuvo en casa. ¿Qué hizo usted? Dijo que no. Pudo venir."],
   ["nosotros/as →","fuimos · estuvimos · tuvimos · hicimos · dijimos · pudimos","Fuimos al cine. Estuvimos allí. Tuvimos suerte. Hicimos la cena. Pudimos llegar."],
   ["vosotros/as →","fuisteis · estuvisteis · tuvisteis · hicisteis · dijisteis · pudisteis","¿Adónde fuisteis? ¿Qué hicisteis? ¿Dónde estuvisteis? ¿Pudisteis venir?"],
   ["ellos, ellas, ustedes →","fueron · estuvieron · tuvieron · hicieron · dijeron · pudieron","Fueron a Sevilla. Estuvieron una semana. Hicieron una visita. Dijeron que sí."]
  ],
  ruleHtml:"📖 <b>1. Pourquoi des irréguliers ?</b> Les verbes qu'on emploie le plus souvent ont gardé, au fil des siècles, un ancien radical (tuv-, estuv-, hic-…). On les apprend comme des mots courts, mais on n'apprend pas cent règles : on apprend <b>une série de terminaisons</b> et <b>quelques radicaux</b>.<br><br>🔁 <b>2. SER et IR : une seule forme.</b> <b>fui · fuiste · fue · fuimos · fuisteis · fueron</b>. C'est le sens de la phrase qui te dit le verbe : <i>Fui a Madrid</i> (avec « a » + lieu : ir) ; <i>La fiesta fue genial</i> (jugement : ser). Pas d'accent écrit sur fui, fue : un seul son vocalique.<br><br>👀 <b>3. DAR et VER : les terminaisons de -ER / -IR, sans accent.</b> <b>di · diste · dio · dimos · disteis · dieron</b> et <b>vi · viste · vio · vimos · visteis · vieron</b>. Les formes <b>di, dio, vi, vio</b> n'ont qu'une syllabe : on n'écrit jamais d'accent.<br><br>🧩 <b>4. Les radicaux irréguliers : un nouveau radical + les terminaisons -e · -iste · -o · -imos · -isteis · -ieron.</b> Retiens la liste :<br>• <b>estar</b> → estuv- · <b>tener</b> → tuv- · <b>poder</b> → pud- · <b>poner</b> → pus- · <b>saber</b> → sup- · <b>querer</b> → quis- · <b>venir</b> → vin- · <b>hacer</b> → hic- · <b>decir</b> → dij- · <b>traer</b> → traj-<br>Les terminaisons <b>-e</b> et <b>-o</b> n'ont <b>aucun accent écrit</b> (<i>tuve, tuvo</i>) : la voix tombe sur le radical, pas sur la fin. C'est la grande différence avec les réguliers (hablé, habló).<br><br>⚠️ <b>5. Deux détails d'orthographe.</b> • <b>hacer</b> : <b>hice, hiciste, hizo</b>. À la 3e personne, c devient z : « hico » se lirait « iko ». • <b>decir, traer</b> (radical en j) : <b>dijeron, trajeron</b>, jamais « -ieron » : le j absorbe le i.<br><br>👥 <b>6. Tutoiement ET vouvoiement.</b> tú → <b>¿Adónde fuiste? ¿Qué hiciste? ¿Dónde estuviste?</b> · usted → <b>¿Adónde fue usted? ¿Qué hizo usted? ¿Dónde estuvo usted?</b> (usted = forme de él / ella ; ustedes = forme de ellos / ellas). Pluriel amical : <b>vosotros</b> (Espagne : fuisteis, hicisteis) ; en Amérique latine : <b>ustedes</b> (fueron, hicieron).<br><br>🎉 <b>7. « hay » devient « hubo ».</b> Pour dire « il y a eu » : <b>hubo</b>, invariable : <i>Hubo una fiesta. Hubo muchos problemas.</i>",
  dialogueLede:"Deux amis parlent de leurs vacances (tutoiement) :",
  dialogue:[
   {who:"them", en:"¡Hola, Ana! ¿Adónde fuiste de vacaciones?", fr:"Salut, Ana ! Où es-tu allée en vacances ?"},
   {who:"you", en:"Fui a Cádiz con mi familia. Estuvimos una semana en la playa. ¿Y tú?", fr:"Je suis allée à Cadix avec ma famille. Nous avons passé une semaine à la plage. Et toi ?"},
   {who:"them", en:"Yo no pude viajar. Tuve mucho trabajo.", fr:"Moi, je n'ai pas pu voyager. J'ai eu beaucoup de travail."},
   {who:"you", en:"¡Qué pena! ¿Qué hiciste entonces?", fr:"Quel dommage ! Qu'as-tu fait alors ?"},
   {who:"them", en:"Fui al cine, vi dos películas y hice una fiesta en casa.", fr:"Je suis allé au cinéma, j'ai vu deux films et j'ai fait une fête chez moi."},
   {who:"you", en:"¡Qué guay! ¿Cómo fue la fiesta?", fr:"Génial ! Comment était la fête ?"},
   {who:"them", en:"¡Fue genial! Vinieron todos mis amigos y lo pasamos muy bien.", fr:"C'était génial ! Tous mes amis sont venus et nous avons passé un très bon moment."}
  ],
  whyLabel:"Pourquoi les terminaisons des irréguliers n'ont-elles pas d'accent ?",
  whyText:"Dans les verbes réguliers, la voix tombe sur la fin : <b>hablé, habló</b>. Dans les irréguliers, le radical est « fort » : la voix tombe sur lui, au milieu du mot : <b>TU-ve, TU-vo, ES-TU-vo, HI-zo</b>. Une voix qui tombe sur le radical n'a pas besoin d'accent écrit : la règle de l'accent (un mot terminé par une voyelle, -n ou -s et accentué sur la dernière syllabe prend un accent) ne s'applique donc pas. Voilà pourquoi on dit parfois que ces verbes ont un « passé fort ». Retiens la méthode : régulier = accent sur la fin (hablé) ; irrégulier = radical spécial, aucun accent (tuve). Pour les mémoriser, utilise la phrase « Ayer estuve, tuve, hice… » à voix haute : le rythme aide. Et n'oublie pas la grande règle du palier précédent : marqueur de temps → temps du verbe. Ici : <b>ayer, la semana pasada, el año pasado</b> → passé simple."
 },
 GRAMMAR2: {
  heading:"Pedir, dormir, leer : les petits changements de la 3e personne, et poser les questions",
  dialogueLede:"Au restaurant, un serveur et une cliente (vouvoiement) :",
  dialogue:[
   {who:"them", en:"Buenas noches, señora. ¿Qué pidió usted anoche?", fr:"Bonsoir, madame. Qu'avez-vous commandé hier soir ?"},
   {who:"you", en:"Pedí pescado, y mi marido pidió una ensalada.", fr:"J'ai commandé du poisson, et mon mari a commandé une salade."},
   {who:"them", en:"¿Y cómo fue la cena?", fr:"Et comment était le dîner ?"},
   {who:"you", en:"Fue muy buena, gracias. Pero hubo un problema con la cuenta.", fr:"Très bien, merci. Mais il y a eu un problème avec l'addition."},
   {who:"them", en:"Lo siento mucho. ¿Pudo usted hablar con el jefe?", fr:"Je suis désolé. Avez-vous pu parler avec le chef ?"},
   {who:"you", en:"Sí, hablé con él y todo fue bien. Que tenga un buen día.", fr:"Oui, j'ai parlé avec lui et tout s'est bien passé. Passez une bonne journée."}
  ],
  ruleHtml:"🔤 <b>1. Les verbes en -IR qui changent de voyelle : seulement à la 3e personne.</b> Au présent, tu connais <i>pedir → pido</i> et <i>dormir → duermo</i>. Au passé simple, le changement ne touche que <b>él / ella / usted</b> et <b>ellos / ellas / ustedes</b> :<br>• e → i : <b>pedir</b> (pedí, pediste, <b>pidió</b>, pedimos, pedisteis, <b>pidieron</b>) · servir (sirvió) · seguir (siguió) · preferir (prefirió) · repetir (repitió) · divertirse (se divirtió)<br>• o → u : <b>dormir</b> (dormí, dormiste, <b>durmió</b>, dormimos, dormisteis, <b>durmieron</b>) · morir (murió)<br>Pourquoi ? Les terminaisons -ió / -ieron sont « faibles » : elles ferment la voyelle du radical. À yo, tú, nosotros, vosotros, la voyelle ne bouge pas.<br><br>🔤 <b>2. LEER, OÍR : le i devient y.</b> Un i entre deux voyelles s'écrit y : <b>leí, leíste, leyó, leímos, leísteis, leyeron</b> ; <b>oí, oíste, oyó, oímos, oísteis, oyeron</b>. Accent écrit sur leí, leíste, leímos, leísteis : le i se prononce seul (le-Í). Même règle pour caer (cayó) et creer (creyó).<br><br>🧠 <b>3. FUE : ser ou ir ?</b> Regarde ce qui suit. <b>fue + a + lieu</b> → ir : <i>Fue a Madrid.</i> <b>fue + adjectif ou nom</b> → ser : <i>Fue un día genial. La fiesta fue muy bonita.</i> Pour juger un événement terminé, on dit <b>fue</b> : « ¿Cómo fue el viaje? — Fue genial ».<br><br>❓ <b>4. Les questions du passé : tú ET usted.</b> tú → <b>¿Qué hiciste? ¿Dónde estuviste? ¿Pudiste venir?</b> · usted → <b>¿Qué hizo usted? ¿Dónde estuvo usted? ¿Pudo usted venir?</b> Avec un inconnu, un client, un supérieur : toujours usted.<br><br>🎯 <b>5. « pude » et « quise » : le sens change au passé.</b> <b>pude</b> = j'ai pu (et j'ai réussi) ; <b>no pude</b> = je n'y suis pas arrivé. <b>quise</b> = j'ai voulu (et j'ai essayé) ; <b>no quise</b> = j'ai refusé. <b>supe</b> = j'ai appris. Ces nuances n'existent pas pareil en français : elles font partie de l'espagnol de tous les jours.<br><br>🎉 <b>6. « hubo » : une seule forme.</b> <i>Hubo una fiesta. Hubo dos accidentes. ¿Hubo problemas?</i> Pas de pluriel : « hubieron » est une faute fréquente.<br><br>🗣️ <b>7. Réagir en informel.</b> Entre amis : <b>¡Qué guay!</b> (Espagne), <b>¡Qué chévere!</b> (Colombie), <b>fue genial</b>, <b>fue una pasada</b> (c'était incroyable), <b>fue un desastre</b>. Avec un supérieur ou un client : <b>¡Qué bien!</b> et <b>fue muy interesante</b>.",
  whyLabel:"Pourquoi ces petits changements existent-ils ?",
  whyText:"Les verbes en -ir comme pedir, dormir, servir changent déjà de voyelle au présent (pido, duermo). Au passé simple, ils ne le font qu'aux personnes dont la terminaison commence par i + voyelle (-ió, -ieron) : cette terminaison oblige la voyelle du radical à se fermer (e → i, o → u). C'est un mécanisme unique : une fois repéré, il s'applique à une trentaine de verbes. Même logique pour leer et oír : le i entre deux voyelles devient y (leyó, oyó). Retiens donc : « 3e personne = voyelle qui se ferme ». Si tu hésites, demande-toi : est-ce que la terminaison est -ió ou -ieron ? Si oui, vérifie le radical. Cette méthode est plus utile que de mémoriser verbe par verbe."
 },
 REVIEW: [
  {q:"« Hier, j'ai parlé avec ma mère » :", opts:["Ayer hablo con mi madre.","Ayer hablé con mi madre."], correct:1, fb:"Marqueur « ayer » → passé simple : hablé (yo). « Hablo » est le présent. (rappel A2.1)"},
  {q:"« Il a mangé » :", opts:["comió","comí"], correct:0, fb:"él / ella / usted → -ió : comió. « Comí » = yo. (rappel A2.1)"},
  {q:"« Il y a deux jours » :", opts:["en dos días","hace dos días"], correct:1, fb:"« hace » + durée = il y a. « en dos días » = dans deux jours. (rappel A2.1)"},
  {q:"« Je suis arrivé à neuf heures » :", opts:["Llegé a las nueve.","Llegué a las nueve."], correct:1, fb:"g + é → gu + é : llegué. (rappel A2.1)"},
  {q:"Vouvoiement : « ¿Cuándo ___ usted ? » (llegar)", opts:["llegó","llegaste"], correct:0, fb:"usted se conjugue comme él / ella : llegó. (rappel A2.1)"}
 ],
 DRILLS: [
  {type:"fill", text:"Ayer yo ___ al cine. (ir)", answers:["fui","Fui"], why:"ir → fui (yo). Aucun accent : un seul son vocalique."},
  {type:"fill", text:"Mi hermana ___ en Madrid. (estar)", answers:["estuvo","Estuvo"], why:"estar → estuv- + o : estuvo, sans accent."},
  {type:"fill", text:"Nosotros ___ mucho trabajo. (tener)", answers:["tuvimos","Tuvimos"], why:"tener → tuv- + imos : tuvimos."},
  {type:"fill", text:"¿Qué ___ tú el domingo? (hacer)", answers:["hiciste","Hiciste"], why:"hacer → hic- + iste : hiciste."},
  {type:"fill", text:"Ellos ___ que no. (decir)", answers:["dijeron","Dijeron"], why:"decir → dij- + eron (pas de i après j) : dijeron."},
  {type:"fill", text:"Usted ___ a la oficina. (venir)", answers:["vino","Vino"], why:"venir → vin- + o : vino. Usted se conjugue comme él."},
  {type:"fill", text:"Yo no ___ llegar a tiempo. (poder)", answers:["pude","Pude"], why:"poder → pud- + e : pude (« j'ai pu »)."},
  {type:"fill", text:"Vosotros ___ una película. (ver)", answers:["visteis","Visteis"], why:"ver → vi- + steis : visteis (Espagne). En Amérique latine : ustedes vieron."},
  {type:"fill", text:"Ella me ___ las llaves. (dar)", answers:["dio","Dio"], why:"dar → dio, sans accent (un seul son vocalique)."},
  {type:"fill", text:"Mis padres ___ a casa ayer. (venir)", answers:["vinieron","Vinieron"], why:"venir → vin- + ieron : vinieron."},
  {type:"fill", text:"Yo ___ un café con leche. (pedir)", answers:["pedí","Pedí"], why:"yo → pedí (régulier à yo, avec accent). Le i n'apparaît qu'à la 3e personne : pidió."},
  {type:"fill", text:"El niño ___ diez horas. (dormir)", answers:["durmió","Durmió"], why:"dormir → durmió : o → u à la 3e personne."},
  {type:"fill", text:"Ellos ___ dos cafés. (pedir)", answers:["pidieron","Pidieron"], why:"pedir → pidieron : e → i à la 3e personne du pluriel."},
  {type:"fill", text:"Yo ___ un libro muy interesante. (leer)", answers:["leí","Leí"], why:"leer → leí, avec accent écrit sur le i."},
  {type:"fill", text:"Ayer ___ una fiesta en mi calle. (haber)", answers:["hubo","Hubo"], why:"hubo = il y a eu : une seule forme."},
  {type:"fill", text:"Nosotros ___ a la playa. (ir)", answers:["fuimos","Fuimos"], why:"ir → fuimos (nosotros)."},
  {type:"choice", q:"Quels verbes ont la même forme « fue » ?", opts:["ser et ir","estar et tener","hacer et decir"], correct:0, why:"Ser et ir : fui, fuiste, fue, fuimos, fuisteis, fueron."},
  {type:"choice", q:"« Il a fait » :", opts:["hico","hizo"], correct:1, why:"hacer → hizo : z devant o pour garder le son th."},
  {type:"choice", q:"« Ils ont dit » :", opts:["dijeron","dijieron"], correct:0, why:"Après le j, -eron : dijeron."},
  {type:"choice", q:"« Dar » à la 3e personne du singulier :", opts:["dió","dio"], correct:1, why:"dio : un seul son vocalique, donc pas d'accent."},
  {type:"choice", q:"Pour dire « j'ai pu » :", opts:["pude","puedí"], correct:0, why:"poder → pud- + e : pude. « puedí » mélange le présent et le passé."},
  {type:"choice", q:"À une cliente (usted) :", opts:["¿Qué hizo usted?","¿Qué hiciste?"], correct:0, why:"Cliente = usted : « ¿Qué hizo usted? ». « Hiciste » est le tutoiement."},
  {type:"choice", q:"Quelle forme est correcte ?", opts:["Estuvo en Madrid.","Estuvó en Madrid."], correct:0, why:"estuvo n'a pas d'accent : la voix tombe sur estu-."},
  {type:"choice", q:"« Il y a eu un problème » :", opts:["Hubo un problema.","Hizo un problema."], correct:0, why:"hubo = il y a eu. « Hizo » vient de hacer."}
 ],
 ANNOTATED: {
  title:"Quatre phrases au passé irrégulier",
  intro:"Quatre phrases pour reconnaître les verbes irréguliers du passé simple. Touche chaque mot pour voir sa nature et sa traduction.",
  sentences:[
   {fr:"Hier, je suis allé au cinéma.", tokens:[
    {w:"Ayer", tag:"adverbe", info:"marqueur de temps", fr:"hier", tip:"Il ferme la journée : passé simple."},
    {w:"fui", tag:"verbe", info:"ir · passé simple · yo", fr:"je suis allé", tip:"Pas d'accent : un seul son vocalique. Identique à ser (fui)."},
    {w:"al", tag:"contraction", info:"a + el", fr:"au", tip:"a + el = al, toujours."},
    {w:"cine", tag:"nom", info:"masc. sing.", fr:"cinéma"}
   ]},
   {fr:"Ma sœur a eu beaucoup de travail.", tokens:[
    {w:"Mi", tag:"déterminant", info:"possessif · sing.", fr:"ma"},
    {w:"hermana", tag:"nom", info:"fém. sing.", fr:"sœur"},
    {w:"tuvo", tag:"verbe", info:"tener · passé simple · ella", fr:"a eu", tip:"Radical tuv- + o : aucun accent."},
    {w:"mucho", tag:"déterminant", info:"quantité · masc. sing.", fr:"beaucoup de"},
    {w:"trabajo", tag:"nom", info:"masc. sing.", fr:"travail"}
   ]},
   {fr:"Qu'avez-vous fait samedi ?", tokens:[
    {w:"¿Qué", tag:"pronom interrogatif", fr:"que, quoi", tip:"Accent écrit : question."},
    {w:"hizo", tag:"verbe", info:"hacer · passé simple · usted", fr:"avez-vous fait", tip:"c devient z devant o : hizo."},
    {w:"usted", tag:"pronom sujet", info:"politesse", fr:"vous"},
    {w:"el", tag:"article", info:"défini · masc. sing.", fr:"le"},
    {w:"sábado?", tag:"nom", info:"masc. sing.", fr:"samedi", tip:"Les jours sont masculins et s'écrivent sans majuscule."}
   ]},
   {fr:"Ils ont demandé deux cafés.", tokens:[
    {w:"Pidieron", tag:"verbe", info:"pedir · passé simple · ellos", fr:"ont demandé", tip:"e → i à la 3e personne : pidieron."},
    {w:"dos", tag:"nombre", fr:"deux"},
    {w:"cafés", tag:"nom", info:"masc. plur.", fr:"cafés", tip:"café prend un -s au pluriel ; l'accent reste."}
   ]}
  ]
 },
 CULTURE_NOTE: {icon:"🏖️", title:"Culture, expressions informelles et fiche récap de A2.2",
  html:"<b>🏖️ Culture : les vacances en Espagne</b> Beaucoup d'Espagnols prennent leurs congés en août ; les villes se vident et la côte se remplit. Au retour, la question de politesse est : « ¿Qué tal las vacaciones? ». Et on répond avec un jugement : « Fueron geniales », « Lo pasé muy bien », « Fueron cortas » (elles ont été courtes).<br><br><b>🗣️ Dix expressions informelles pour raconter</b><br>1. <b>¡Qué guay!</b> = génial (Espagne). <b>¡Qué chévere!</b> (Colombie, Venezuela).<br>2. <b>Fue una pasada</b> = c'était incroyable (Espagne, familier).<br>3. <b>Me lo pasé bomba</b> = je me suis éclaté (Espagne, très familier).<br>4. <b>Fue un rollo</b> = c'était ennuyeux (Espagne, familier).<br>5. <b>Fue un desastre</b> = c'était un désastre.<br>6. <b>Estuve de fiesta</b> = j'ai fait la fête.<br>7. <b>Fue genial</b> = c'était génial (neutre).<br>8. <b>No pude más</b> = je n'en pouvais plus.<br>9. <b>Hubo mucho lío</b> = il y a eu beaucoup de pagaille.<br>10. <b>Lo pasé fatal</b> = j'ai passé un mauvais moment.<br>Avec un supérieur, choisis les expressions neutres : fue genial, fue interesante, fue un desastre.<br><br><b>📋 Fiche récap A2.2</b><br>• <b>ir / ser</b> : fui · fuiste · fue · fuimos · fuisteis · fueron.<br>• <b>dar</b> : di · diste · dio… <b>ver</b> : vi · viste · vio… (pas d'accent).<br>• Radicaux : estuv- · tuv- · pud- · pus- · sup- · quis- · vin- · hic- · dij- · traj- + <b>-e · -iste · -o · -imos · -isteis · -ieron</b>.<br>• <b>hizo</b> (z) ; <b>dijeron</b>, <b>trajeron</b> (pas de i).<br>• 3e personne : pidió, durmió, prefirió, siguió ; leyó, oyó.<br>• hay → <b>hubo</b>.<br>• Tú ET usted : ¿Qué hiciste? / ¿Qué hizo usted?"},
 NEXT_PREVIEW:"A2.3 (Pretérito perfecto) : un autre passé, très présent en Espagne pour parler d'aujourd'hui et de ce qui compte maintenant : « He comido », « Hemos visitado », « ¿Has visto…? », avec hoy, esta semana, ya et todavía no.",
 META:{vocabTitle:"Fui, estuve, tuve, hice : le passé simple irrégulier (A2.2)", lectureTitle:"Unas vacaciones en Sevilla", bilanTitle:"Bravo, tu racontes tes voyages et ton week-end !", pronLabel:"Pas d'accent sur fue / vio / dio, z = th dans hizo, j dans dijeron", todayLede:"raconter avec les passés irréguliers les plus fréquents (ir / ser, estar, tener, hacer, decir, poder, ver, dar, venir), changer la voyelle à la 3e personne (pidió, durmió, leyó) et poser les questions du passé en tutoiement ET en vouvoiement"}
};
})();


// A2.3 — He comido, hemos visitado : le pretérito perfecto — leçon 215
(function(){
function blk(name, rows){
  var v = __esB(name, rows);
  v.forEach(function(o, i){ o.emo = rows[i][4]; o.ex = [rows[i][5], rows[i][6]]; });
  return v;
}
// ligne = [terme, API, français, note, emoji, exemple ES, exemple FR]
var V = [].concat(
 blk("Haber au présent : l'auxiliaire", [
  ["he · has · ha","/e · as · a/","j'ai · tu as · il a, vous avez","Auxiliaire « haber » : he (yo), has (tú), ha (él / ella / usted). La h est muette. Avec usted : « ¿Ha comido usted? ».","🔑","¿Has comido ya?","As-tu déjà mangé ?"],
  ["hemos · habéis · han","/ˈemos · aˈβejs · an/","nous avons · vous avez · ils ont","hemos (nosotros), habéis (vosotros, Espagne), han (ellos / ellas / ustedes). Attention : habéis porte un accent écrit.","🔑","Hemos llegado a casa.","Nous sommes arrivés à la maison."],
  ["he comido","/e koˈmiðo/","j'ai mangé","haber + participe passé. Le participe ne change JAMAIS (pas de féminin, pas de pluriel) : « ella ha comido », « ellas han comido ».","🍽️","Hoy he comido muy bien.","Aujourd'hui j'ai très bien mangé."],
  ["tener ≠ haber","/teˈneɾ · aˈβeɾ/","avoir (posséder) ≠ avoir (auxiliaire)","« Tengo un coche » (je possède). « He comprado un coche » (j'ai acheté). Pour le passé composé, c'est TOUJOURS haber.","⚖️","Tengo hambre y no he comido.","J'ai faim et je n'ai pas mangé."]
 ]),
 blk("Le participe passé régulier : -ado, -ido", [
  ["hablar → hablado","/aˈβlaɾ · aˈβlaðo/","parlé","Verbes en -AR : radical + ado. « He hablado con mi jefe ».","🗣️","He hablado con mi jefe.","J'ai parlé avec mon chef."],
  ["comer → comido","/koˈmeɾ · koˈmiðo/","mangé","Verbes en -ER : radical + ido.","🍴","Hemos comido paella.","Nous avons mangé de la paella."],
  ["vivir → vivido","/biˈβiɾ · biˈβiðo/","vécu","Verbes en -IR : radical + ido, comme -ER.","🏡","He vivido en Lyon.","J'ai vécu à Lyon."],
  ["terminar → terminado","/teɾmiˈnaɾ · teɾmiˈnaðo/","terminé","Avec « ya » (déjà) : « Ya he terminado ».","🏁","Ya he terminado el trabajo.","J'ai déjà terminé le travail."],
  ["comprar → comprado","/komˈpɾaɾ · komˈpɾaðo/","acheté","Participe en -ado.","🛒","Hemos comprado pan.","Nous avons acheté du pain."],
  ["perder → perdido","/peɾˈðeɾ · peɾˈðiðo/","perdu","Participe en -ido. « He perdido las llaves ».","🔍","He perdido las llaves.","J'ai perdu les clés."],
  ["olvidar → olvidado","/olβiˈðaɾ · olβiˈðaðo/","oublié","« Me he olvidado del paraguas » (oublié) est très courant ; « He olvidado el paraguas » aussi.","☔","He olvidado el paraguas.","J'ai oublié le parapluie."],
  ["leer → leído","/leˈeɾ · leˈiðo/","lu","Accent écrit sur le í : le i se prononce seul (le-Í-do). Même règle : traído (traer), oído (oír), caído (caer).","📖","He leído tu mensaje.","J'ai lu ton message."]
 ]),
 blk("Les participes irréguliers (à apprendre par cœur)", [
  ["hacer → hecho","/aˈθeɾ · ˈetʃo/","fait","« He hecho la cena ». ch = tch.","🛠️","¿Qué has hecho hoy?","Qu'as-tu fait aujourd'hui ?"],
  ["decir → dicho","/deˈθiɾ · ˈditʃo/","dit","« Me ha dicho que sí ».","💬","Mi jefa ha dicho que sí.","Ma cheffe a dit que oui."],
  ["ver → visto","/beɾ · ˈbisto/","vu","« He visto a Ana ». Pas d'accent.","👀","¿Has visto mi móvil?","As-tu vu mon portable ?"],
  ["poner → puesto","/poˈneɾ · ˈpwesto/","mis","« He puesto la mesa » = j'ai mis la table.","📌","Hemos puesto la mesa.","Nous avons mis la table."],
  ["escribir → escrito","/eskɾiˈβiɾ · eskɾiˈto/","écrit","« He escrito un correo ».","✍️","He escrito un correo.","J'ai écrit un e-mail."],
  ["abrir → abierto","/aˈβɾiɾ · aˈβjeɾto/","ouvert","« Han abierto la tienda ».","🚪","Han abierto una tienda nueva.","Ils ont ouvert un nouveau magasin."],
  ["volver → vuelto","/bolˈβeɾ · ˈbwelto/","revenu","« He vuelto a casa » = je suis rentré.","↩️","Hoy he vuelto muy tarde.","Aujourd'hui je suis rentré très tard."],
  ["romper → roto","/romˈpeɾ · ˈroto/","cassé","« He roto el vaso ».","💥","He roto un vaso.","J'ai cassé un verre."]
 ]),
 blk("Les marqueurs du perfecto : le temps « pas encore fini »", [
  ["hoy","/oj/","aujourd'hui","La journée n'est pas finie : perfecto. « Hoy he trabajado mucho ».","📅","Hoy he trabajado mucho.","Aujourd'hui j'ai beaucoup travaillé."],
  ["esta mañana · esta tarde","/ˈesta maˈɲana/","ce matin · cet après-midi","Même idée : le moment actuel est encore en cours.","🌅","Esta mañana he desayunado fruta.","Ce matin j'ai pris des fruits au petit-déjeuner."],
  ["esta semana · este mes · este año","/ˈesta seˈmana/","cette semaine · ce mois · cette année","Avec « esta / este » : perfecto.","🗓️","Esta semana hemos viajado mucho.","Cette semaine nous avons beaucoup voyagé."],
  ["ya","/ʝa/","déjà","« Ya he comido » = j'ai déjà mangé.","✅","Ya he hablado con ella.","J'ai déjà parlé avec elle."],
  ["todavía no · aún no","/toðaˈβia no/","pas encore","« Todavía no he llegado » = je ne suis pas encore arrivé. Le « no » va avant « he ».","⏳","Todavía no he comido.","Je n'ai pas encore mangé."],
  ["alguna vez · nunca","/alˈɣuna beθ · ˈnuŋka/","un jour, déjà · jamais","« ¿Has estado alguna vez en Perú? » — « No, nunca he estado ». Avec nunca, pas de « no » avant.","🌎","Nunca he comido paella.","Je n'ai jamais mangé de paella."],
  ["últimamente","/ˈultimaˈmente/","dernièrement","Pour parler d'une période récente qui se prolonge.","🔄","Últimamente he dormido poco.","Dernièrement j'ai peu dormi."],
  ["hace un rato","/aθe un ˈrato/","il y a un moment","Un moment très proche : perfecto courant.","🕒","Ha llamado hace un rato.","Il a appelé il y a un moment."]
 ]),
 blk("Situations du quotidien", [
  ["el mensaje","/el menˈsaxe/","le message","Masculin (mots en -aje).","💌","He leído tu mensaje.","J'ai lu ton message."],
  ["la reunión","/la reuˈnjon/","la réunion","Féminin ; pluriel : reuniones (sans accent).","👥","Hoy hemos tenido una reunión.","Aujourd'hui nous avons eu une réunion."],
  ["el pasaporte","/el pasaˈpoɾte/","le passeport","Masculin.","🛂","¿Has traído el pasaporte?","As-tu apporté le passeport ?"],
  ["la maleta","/la maˈleta/","la valise","Féminin.","🧳","Todavía no he hecho la maleta.","Je n'ai pas encore fait la valise."],
  ["pagar → pagado","/paˈɣaɾ · paˈɣaðo/","payé","Participe en -ado. « Ya he pagado la cuenta ».","💳","Ya hemos pagado la cuenta.","Nous avons déjà payé l'addition."],
  ["llegar → llegado","/ʎeˈɣaɾ · ʎeˈɣaðo/","arrivé","« Hemos llegado » = nous sommes arrivés. En espagnol, TOUJOURS haber (jamais « ser »).","🛬","Ya han llegado mis padres.","Mes parents sont déjà arrivés."],
  ["salir → salido","/saˈliɾ · saˈliðo/","sorti","« He salido de la oficina » = je suis sorti du bureau.","🚪","Esta noche hemos salido a cenar.","Ce soir nous sommes sortis dîner."]
 ]),
 blk("Poser les questions : tú ET usted", [
  ["¿Has terminado? / ¿Ha terminado usted?","/as teɾmiˈnaðo · a teɾmiˈnaðo usˈteð/","As-tu fini ? / Avez-vous fini ?","Tú : has. Usted : ha (comme él / ella). Même participe.","❓","¿Ha terminado usted el informe?","Avez-vous terminé le rapport ?"],
  ["¿Has estado alguna vez en…? / ¿Ha estado usted alguna vez en…?","/as esˈtaðo alˈɣuna beθ/","As-tu déjà été à… ? / Avez-vous déjà été à… ?","Question clé pour parler d'expériences de vie.","✈️","¿Ha estado usted alguna vez en México?","Avez-vous déjà été au Mexique ?"],
  ["¿Qué has hecho hoy? / ¿Qué ha hecho usted hoy?","/ke as ˈetʃo oj/","Qu'as-tu fait aujourd'hui ? / Qu'avez-vous fait aujourd'hui ?","Pour demander la journée de quelqu'un. Réponse : « He trabajado, he comido… ».","🎤","¿Qué ha hecho usted esta mañana?","Qu'avez-vous fait ce matin ?"]
 ]),
 blk("Registre informel et prononciation", [
  ["¡Ya está!","/ʝa esˈta/","Voilà ! C'est fait !","Très courant, entre amis comme au travail : « ¡Ya está! » = c'est réglé.","✔️","¡Ya está! He terminado.","Voilà ! J'ai terminé."],
  ["¡No me digas!","/no me ˈðiɣas/","Sans blague ! Pas possible !","Informel. Avec un supérieur : « ¿De verdad? ».","😮","—Han despedido a Luis. —¡No me digas!","— Luis a été licencié. — Sans blague !"],
  ["he · ha · hemos","/e · a · ˈemos/","h muette","La h ne se prononce jamais : « he » = « é », « ha » = « a ». Ne confonds pas « ha » (haber) avec « a » (préposition) : « Ha llegado a casa ».","🔇","Ha llegado a casa a las nueve.","Il est arrivé à la maison à neuf heures."]
 ])
);

LESSONS_ES[215] = {
 code:"A2.3", level:"A2",
 VOCAB: V,
 MEM_WORDS: __esIdx(V, ["he · has · ha","hemos · habéis · han","hacer → hecho","ver → visto","escribir → escrito","hoy","ya","todavía no · aún no","alguna vez · nunca","¡Ya está!"]),
 MINI_CHECKS: [
  {q:"« J'ai mangé » se dit :", opts:["Tengo comido.","He comido.","Hay comido."], correct:1, fb:"Passé composé = haber + participe : he comido. « Tengo » est pour posséder."},
  {q:"« Elle a mangé » (ella) :", opts:["ha comido","han comido","has comido"], correct:0, fb:"ella → ha. « Han » = ils / elles ; « has » = tú."},
  {q:"Le participe passé après « haber » :", opts:["s'accorde avec le sujet","ne change jamais","prend -s au pluriel"], correct:1, fb:"« Ellas han comido », pas « comidas ». Avec haber, le participe est invariable."},
  {q:"Le participe de hablar :", opts:["hablado","hablido","hablando"], correct:0, fb:"-AR → -ado : hablado. « Hablando » est le gérondif (en parlant)."},
  {q:"Le participe de hacer :", opts:["hacido","hecho","hizo"], correct:1, fb:"hacer → hecho (irrégulier). « Hizo » est le passé simple."},
  {q:"« Aujourd'hui, j'ai beaucoup travaillé » :", opts:["Hoy trabajé mucho.","Hoy he trabajado mucho."], correct:1, fb:"« Hoy » : la journée n'est pas finie → perfecto : he trabajado."},
  {q:"« Je n'ai pas encore mangé » :", opts:["Todavía no he comido.","No he todavía comido.","He no comido todavía."], correct:0, fb:"« todavía no » + he + participe. Rien ne s'intercale entre he et comido."},
  {q:"« ¿___ usted terminado ? » (vouvoiement)", opts:["Has","Ha","Han"], correct:1, fb:"usted se conjugue comme él / ella : ha."}
 ],
 ROUNDS: [
  __esR("Hoy he comido muy bien.","Aujourd'hui j'ai très bien mangé."),
  __esR("¿Has visto mi móvil?","As-tu vu mon portable ?"),
  __esR("Todavía no he llegado.","Je ne suis pas encore arrivé."),
  __esR("Hemos comprado pan.","Nous avons acheté du pain."),
  __esR("¿Ha terminado usted el informe?","Avez-vous terminé le rapport ?"),
  __esR("Esta semana hemos viajado mucho.","Cette semaine nous avons beaucoup voyagé."),
  __esR("Nunca he comido paella.","Je n'ai jamais mangé de paella."),
  __esR("Ya he hecho la maleta.","J'ai déjà fait la valise."),
  __esR("Mi jefa ha dicho que sí.","Ma cheffe a dit que oui."),
  __esR("¿Has estado alguna vez en México?","As-tu déjà été au Mexique ?"),
  __esR("Hoy he vuelto muy tarde.","Aujourd'hui je suis rentré très tard."),
  __esR("Ya han llegado mis padres.","Mes parents sont déjà arrivés."),
  __esR("He leído tu mensaje.","J'ai lu ton message.")
 ],
 QUIZ: [
  {cat:"ecrit", q:"« Aujourd'hui, nous avons parlé avec le chef. »", opts:["Hoy hablamos con el jefe.","Hoy hemos hablado con el jefe.","Hoy hemos hablamos con el jefe."], correct:1, why:"hoy → perfecto : hemos + hablado. « Hemos hablamos » mélange auxiliaire et présent."},
  {cat:"ecrit", q:"Yo ___ comido paella. (haber)", opts:["he","ha","hemos"], correct:0, why:"yo → he. « Ha » = él / ella / usted."},
  {cat:"ecrit", q:"Ellos ya ___ llegado. (haber)", opts:["ha","han","has"], correct:1, why:"ellos → han. Le participe llegado ne change pas."},
  {cat:"ecrit", q:"Participe passé de « ver » :", opts:["visto","vido","viso"], correct:0, why:"ver → visto (irrégulier)."},
  {cat:"ecrit", q:"Participe passé de « escribir » :", opts:["escribido","escrito","escribado"], correct:1, why:"escribir → escrito (irrégulier). Comme descubrir → descubierto."},
  {cat:"ecrit", q:"Participe passé de « abrir » :", opts:["abrido","abrado","abierto"], correct:2, why:"abrir → abierto (irrégulier)."},
  {cat:"ecrit", q:"« Je n'ai pas encore terminé. »", opts:["Todavía no he terminado.","No todavía he terminado.","Todavía he no terminado."], correct:0, why:"todavía no + he + participe : l'ordre est fixe."},
  {cat:"ecrit", q:"« Je n'ai jamais mangé de paella. »", opts:["No nunca he comido paella.","Nunca he comido paella.","He nunca comido paella."], correct:1, why:"« Nunca » avant le verbe suffit : pas de « no » en plus."},
  {cat:"ecrit", q:"À une cliente : « ¿___ usted comido ya ? »", opts:["Has","Ha","He"], correct:1, why:"Vouvoiement : usted → ha. « Has » est pour tú."},
  {cat:"ecrit", q:"Esta semana nosotros ___ mucho. (trabajar, perfecto)", opts:["hemos trabajado","trabajamos","hemos trabajamos"], correct:0, why:"« esta semana » est encore en cours : perfecto. hemos + trabajado."},
  {cat:"ecrit", q:"Mi hermana ___ el pasaporte. (perder, perfecto)", opts:["han perdido","ha perdido","ha perdida"], correct:1, why:"ella → ha + perdido. Le participe ne s'accorde pas (pas de « perdida »)."},
  {cat:"ecrit", q:"« Tu as vu ce film ? » (tú)", opts:["¿Has visto esta película?","¿Has visado esta película?","¿Has ver esta película?"], correct:0, why:"haber + visto. « Ver » est l'infinitif, « visado » n'est pas le participe de ver."},
  {cat:"ecrit", q:"« Ils ont ouvert le magasin. »", opts:["Han abrido la tienda.","Han abierto la tienda.","Han abierta la tienda."], correct:1, why:"abrir → abierto, et le participe est invariable."},
  {cat:"ecrit", q:"« Il est arrivé » (llegar) :", opts:["Es llegado.","Ha llegado.","Tiene llegado."], correct:1, why:"En espagnol, tous les verbes prennent haber au passé composé (pas d'« être »)."},
  {cat:"oral", audio:"Hoy he comido en casa.", q:"Écoute : où a-t-il mangé ?", opts:["Au restaurant","À la maison","Au bureau"], correct:1, why:"« he comido en casa » = j'ai mangé à la maison."},
  {cat:"oral", audio:"Todavía no hemos llegado.", q:"Écoute : sont-ils arrivés ?", opts:["Oui","Pas encore","Ils sont partis"], correct:1, why:"« Todavía no » = pas encore."},
  {cat:"oral", audio:"¿Ha terminado usted el informe?", q:"Écoute : la question est :", opts:["Au tutoiement","Au vouvoiement","À plusieurs amis"], correct:1, why:"« ha ... usted » : vouvoiement. Au tutoiement : « ¿Has terminado el informe? »."},
  {cat:"oral", audio:"Nunca he estado en Perú.", q:"Écoute : qu'est-ce qu'elle dit ?", opts:["Elle est déjà allée au Pérou","Elle n'est jamais allée au Pérou","Elle ira au Pérou"], correct:1, why:"« Nunca he estado » = je n'ai jamais été."},
  {cat:"oral", audio:"Mis padres han vuelto esta mañana.", q:"Écoute : quand sont-ils rentrés ?", opts:["Hier","Ce matin","Cette semaine"], correct:1, why:"« esta mañana » = ce matin."},
  {cat:"comprehension", passage:"Luis: ¿Has terminado el informe? — Marta: Todavía no. Esta mañana he tenido una reunión y he escrito tres correos. — Luis: ¿Has hablado con el jefe? — Marta: Sí, ya he hablado con él. Ha dicho que mañana está bien.", q:"Marta a-t-elle terminé le rapport ?", opts:["Oui","Pas encore","Elle ne sait pas"], correct:1, why:"« Todavía no » = pas encore."},
  {cat:"comprehension", passage:"Luis: ¿Has terminado el informe? — Marta: Todavía no. Esta mañana he tenido una reunión y he escrito tres correos. — Luis: ¿Has hablado con el jefe? — Marta: Sí, ya he hablado con él. Ha dicho que mañana está bien.", q:"Qu'a-t-elle fait ce matin ?", opts:["Elle a voyagé","Une réunion et trois e-mails","Elle a dormi"], correct:1, why:"« he tenido una reunión y he escrito tres correos »."},
  {cat:"comprehension", passage:"Luis: ¿Has terminado el informe? — Marta: Todavía no. Esta mañana he tenido una reunión y he escrito tres correos. — Luis: ¿Has hablado con el jefe? — Marta: Sí, ya he hablado con él. Ha dicho que mañana está bien.", q:"Pour quand le chef est-il d'accord ?", opts:["Aujourd'hui","Demain","La semaine prochaine"], correct:1, why:"« mañana está bien » = demain, c'est bon."},
  {cat:"comprehension", passage:"Cliente: Buenos días. ¿Ha llegado mi paquete? — Empleado: Un momento, señora. Sí, ha llegado esta mañana, pero todavía no lo hemos abierto. — Cliente: No importa, lo abro en casa.", q:"Quand le colis est-il arrivé ?", opts:["Ce matin","Hier","Pas encore arrivé"], correct:0, why:"« ha llegado esta mañana »."},
  {cat:"comprehension", passage:"Cliente: Buenos días. ¿Ha llegado mi paquete? — Empleado: Un momento, señora. Sí, ha llegado esta mañana, pero todavía no lo hemos abierto. — Cliente: No importa, lo abro en casa.", q:"L'employé s'adresse à la cliente :", opts:["Au tutoiement","Au vouvoiement","À un enfant"], correct:1, why:"« señora » et « ¿Ha llegado…? » : registre formel, usted."}
 ],
 PRON_VERBS: [
  {en:"he · ha", fr:"j'ai · il a (h muette : É, A ; ne confonds pas ha (verbe) et a (à))"},
  {en:"hemos · han", fr:"nous avons · ils ont (É-mos, AN)"},
  {en:"he comido", fr:"j'ai mangé (e ko-MI-do ; la voix tombe sur MI)"},
  {en:"he hablado", fr:"j'ai parlé (e a-BLA-do ; le d entre deux voyelles est très doux)"},
  {en:"he leído", fr:"j'ai lu (e le-Í-do : le i porte l'accent)"},
  {en:"he hecho", fr:"j'ai fait (e É-tcho : h muette, ch = tch)"},
  {en:"ha dicho", fr:"il a dit (a DI-tcho)"},
  {en:"¿Has visto…?", fr:"As-tu vu… ? (as BIS-to ; v = b)"},
  {en:"Todavía no he llegado.", fr:"Je ne suis pas encore arrivé. (to-da-VÍ-a no e ye-GA-do)"},
  {en:"¡Ya está!", fr:"Voilà ! (ya es-TÁ ; y = yé)"}
 ],
 READING: [
  "Hoy ha sido un día muy largo para Marta.",
  "Esta mañana se ha levantado a las seis y ha desayunado rápido.",
  "Ha llegado a la oficina a las ocho y ha tenido una reunión con su jefe.",
  "Después ha escrito cinco correos y ha hablado con dos clientes.",
  "A las dos, ha comido con su compañera Ana en un restaurante pequeño.",
  "—¿Has terminado el informe? —ha preguntado Ana.",
  "—Todavía no —ha contestado Marta—, pero ya he hecho casi todo.",
  "Por la tarde, ha vuelto a la oficina y ha terminado el informe.",
  "Esta noche no ha cocinado: ha pedido una pizza y ha visto una película.",
  "—¡Ya está! —ha dicho Marta—. Hoy he trabajado mucho. Mañana descanso."
 ],
 GLOSS: [
  {en:"se ha levantado", fr:"elle s'est levée (verbe pronominal : le pronom se place avant haber)"},
  {en:"ha sido", fr:"a été (participe de ser : sido)"},
  {en:"rápido", fr:"vite, rapide"},
  {en:"casi todo", fr:"presque tout"},
  {en:"ha vuelto", fr:"est revenue (volver → vuelto)"},
  {en:"ha pedido una pizza", fr:"a commandé une pizza"},
  {en:"mañana descanso", fr:"demain je me repose (présent pour un futur proche)"},
  {en:"¡Ya está!", fr:"Voilà ! C'est fait !"}
 ],
 GRAMMAR1: {
  heading:"Le pretérito perfecto : haber + participe passé",
  lede:"Le pretérito perfecto sert à parler du passé qui touche encore le présent : ce que tu as fait aujourd'hui, cette semaine, ou ce que tu as déjà vécu. Il se forme avec deux éléments : le verbe haber au présent + le participe passé. Rien d'autre à apprendre : ce temps est le plus simple des passés.",
  conj:[
   ["yo →","he comido · he hablado · he vivido","He comido paella. He hablado con ella. He vivido en Lyon."],
   ["tú →","has comido · has hablado · has vivido","¿Has comido ya? ¿Has hablado con él? ¿Dónde has vivido?"],
   ["él, ella, usted →","ha comido · ha hablado · ha vivido","¿Ha comido usted? Ella ha hablado con el jefe. Él ha vivido aquí."],
   ["nosotros/as →","hemos comido · hemos hablado · hemos vivido","Hemos comido en casa. Hemos hablado mucho."],
   ["vosotros/as →","habéis comido · habéis hablado · habéis vivido","¿Habéis comido? ¿Habéis hablado con el profesor?"],
   ["ellos, ellas, ustedes →","han comido · han hablado · han vivido","Han comido pronto. ¿Han hablado ustedes con el jefe?"]
  ],
  ruleHtml:"📖 <b>1. La formule.</b> <b>haber (présent) + participe passé</b>. <i>He comido. Hemos llegado. Han vuelto.</i> « Haber » est ici un simple auxiliaire : il ne veut pas dire « posséder » (c'est tener).<br><br>🔑 <b>2. L'auxiliaire haber au présent.</b> <b>he · has · ha · hemos · habéis · han</b>. La h est muette : <i>he</i> se dit « é ». Avec usted : <b>ha</b> (comme él / ella) ; avec ustedes : <b>han</b>.<br><br>🧩 <b>3. Le participe régulier.</b> -AR → <b>-ado</b> (hablado, terminado) ; -ER / -IR → <b>-ido</b> (comido, vivido, perdido). Attention à l'accent sur -ído quand le radical finit par une voyelle : <b>leído, traído, oído, caído</b>.<br><br>⚠️ <b>4. Les participes irréguliers (à apprendre par cœur).</b> <b>hacer → hecho</b> · <b>decir → dicho</b> · <b>ver → visto</b> · <b>poner → puesto</b> · <b>escribir → escrito</b> · <b>abrir → abierto</b> · <b>volver → vuelto</b> · <b>romper → roto</b>. Tous les composés suivent le même modèle (descubrir → descubierto, componer → compuesto).<br><br>🚫 <b>5. Deux règles d'or.</b> (a) Le participe ne s'accorde <b>jamais</b> : <i>ella ha comido, ellas han comido</i>. (b) <b>Rien ne s'intercale</b> entre haber et le participe : <i>Todavía no he comido</i>, <i>Ya he terminado</i> (le « no » et les pronoms vont avant « he »).<br><br>📅 <b>6. Les marqueurs du perfecto.</b> <b>hoy, esta mañana, esta semana, este mes, este año, ya, todavía no, últimamente, alguna vez, nunca</b>. Ils pointent un temps « pas encore fini » ou une expérience de vie.<br><br>👥 <b>7. Tutoiement ET vouvoiement.</b> tú → <b>¿Has terminado? ¿Qué has hecho hoy?</b> · usted → <b>¿Ha terminado usted? ¿Qué ha hecho usted hoy?</b> Pour inviter amicalement : <b>¿Has comido?</b> ; pour un client : <b>¿Ha comido ya, señora?</b>",
  dialogueLede:"Deux collègues parlent de leur journée (tutoiement) :",
  dialogue:[
   {who:"them", en:"¡Hola, Marta! ¿Qué has hecho hoy?", fr:"Salut, Marta ! Qu'as-tu fait aujourd'hui ?"},
   {who:"you", en:"He tenido una reunión y he escrito tres correos. ¿Y tú?", fr:"J'ai eu une réunion et j'ai écrit trois e-mails. Et toi ?"},
   {who:"them", en:"Yo he hablado con dos clientes. Todavía no he comido.", fr:"Moi, j'ai parlé avec deux clients. Je n'ai pas encore mangé."},
   {who:"you", en:"¿Has terminado el informe?", fr:"As-tu terminé le rapport ?"},
   {who:"them", en:"Casi. Ya he hecho la mitad.", fr:"Presque. J'ai déjà fait la moitié."},
   {who:"you", en:"¡Ya está! Vamos a comer.", fr:"Voilà ! Allons manger."}
  ],
  whyLabel:"Pourquoi un passé « composé » en espagnol ?",
  whyText:"Les langues romanes ont créé ce passé avec « avoir » + participe pour dire « j'ai fini quelque chose, et le résultat compte maintenant ». Le français l'a gardé comme passé principal (j'ai mangé) ; en Espagne, il a pris un rôle plus précis : il décrit les actions d'une période qui n'est pas terminée (aujourd'hui, cette semaine, cette année) et les expériences de vie (¿Has estado alguna vez en Perú?). Voilà pourquoi tu dois regarder le marqueur de temps : si le moment est fini (ayer, el año pasado), tu utilises le passé simple (A2.1, A2.2) ; s'il est encore ouvert (hoy, esta semana), tu utilises le perfecto. Autre piège : l'espagnol n'a pas de « être » auxiliaire : même pour « il est arrivé » on dit « ha llegado ». Un seul auxiliaire, donc beaucoup moins d'erreurs possibles qu'en français."
 },
 GRAMMAR2: {
  heading:"Perfecto ou indefinido ? Les marqueurs, l'Espagne et l'Amérique latine",
  dialogueLede:"À la réception d'un hôtel, une cliente et l'employé (vouvoiement) :",
  dialogue:[
   {who:"them", en:"Buenos días, señora. ¿Ha dormido bien?", fr:"Bonjour, madame. Avez-vous bien dormi ?"},
   {who:"you", en:"Sí, gracias. Pero todavía no he desayunado.", fr:"Oui, merci. Mais je n'ai pas encore pris mon petit-déjeuner."},
   {who:"them", en:"El desayuno está abierto hasta las once. ¿Ha visto usted el comedor?", fr:"Le petit-déjeuner est ouvert jusqu'à onze heures. Avez-vous vu la salle à manger ?"},
   {who:"you", en:"No, nunca he estado en este hotel. Ayer llegué muy tarde.", fr:"Non, je ne suis jamais venue dans cet hôtel. Hier, je suis arrivée très tard."},
   {who:"them", en:"Entonces, ¡bienvenida! ¿Ha pedido ya un taxi?", fr:"Alors, bienvenue ! Avez-vous déjà demandé un taxi ?"}
  ],
  ruleHtml:"⚖️ <b>1. Le critère : le temps est-il fini ou ouvert ?</b> <b>Ouvert</b> (hoy, esta semana, este año, ya, todavía no, alguna vez, nunca) → <b>perfecto</b> : <i>Hoy he trabajado.</i> <b>Fermé</b> (ayer, anoche, la semana pasada, el año pasado, hace dos días) → <b>indefinido</b> : <i>Ayer trabajé.</i> Tu peux même avoir les deux dans une seule phrase : <i>Hoy he comido pronto, pero ayer comí tarde.</i><br><br>🔍 <b>2. Les expériences de vie.</b> « ¿Has estado alguna vez en Perú? — Sí, he estado dos veces. / No, nunca he estado. » On ne dit pas quand : c'est un bilan de la vie jusqu'à maintenant. Si on précise la date, on passe au passé simple : « Estuve en Perú en 2019 ».<br><br>🌎 <b>3. Espagne ≠ Amérique latine.</b> En <b>Espagne</b>, le perfecto est très courant pour « aujourd'hui » : <i>Hoy he comido a las dos.</i> En <b>Amérique latine</b> (Mexique, Argentine, Colombie…), on préfère souvent le passé simple : <i>Hoy comí a las dos.</i> Les deux sont corrects ; choisis la norme du pays où tu parles. Dans le doute, utilise le perfecto avec « hoy » : tout le monde le comprend.<br><br>🔤 <b>4. Place des mots.</b> Négation et adverbes avant haber : <i>No he comido. Todavía no he terminado. Ya he llegado. Nunca he estado.</i> Réflexifs avant haber : <i>Me he levantado a las siete. Se ha duchado.</i> Jamais de mot entre haber et le participe.<br><br>🗣️ <b>5. Tutoiement ET vouvoiement.</b> tú → <b>¿Has comido ya? ¿Dónde has estado?</b> · usted → <b>¿Ha comido ya? ¿Dónde ha estado usted?</b> Avec un client : <b>¿Ha tenido un buen viaje, señor?</b> (Avez-vous fait bon voyage ?)<br><br>🎉 <b>6. Informel.</b> <b>¡Ya está!</b> (voilà, c'est fait), <b>¡No me digas!</b> (sans blague), <b>¿Has visto lo que ha pasado?</b> (tu as vu ce qui s'est passé ?), <b>¡Qué fuerte!</b> (c'est fort ! / incroyable).",
  whyLabel:"Comment choisir sans réfléchir une heure ?",
  whyText:"Pose-toi une seule question : « le moment dont je parle est-il terminé ou pas ? ». Hoy, esta semana, este mes, este año : tu es encore dedans, donc perfecto. Ayer, anoche, el lunes pasado, en 2020 : tu es dehors, donc passé simple. Pour une expérience sans date (alguna vez, nunca, ya, todavía no), c'est le perfecto. Ce critère de « temps ouvert / temps fermé » marche à 90 %. Les 10 % restants dépendent de la région (Espagne : plus de perfecto ; Amérique latine : plus de passé simple). Entraîne-toi à voix haute avec des paires : « Hoy he comido / Ayer comí », « Esta semana he trabajado / La semana pasada trabajé » : le cerveau retient mieux les contrastes que les règles."
 },
 REVIEW: [
  {q:"« Hier, je suis allé au cinéma » :", opts:["Ayer fui al cine.","Ayer fue al cine."], correct:0, fb:"yo → fui. « Fue » = él / usted. (rappel A2.2)"},
  {q:"« Ils ont dit que oui » :", opts:["dijieron","dijeron"], correct:1, fb:"Après le j, -eron : dijeron. (rappel A2.2)"},
  {q:"« Il a fait la cuisine » :", opts:["hico","hizo"], correct:1, fb:"hacer → hizo (z devant o). (rappel A2.2)"},
  {q:"« Il y a eu une fête » :", opts:["Hubo una fiesta.","Hay una fiesta."], correct:0, fb:"hubo = il y a eu. (rappel A2.2)"},
  {q:"Vouvoiement : « ¿Qué ___ usted ayer ? » (hacer)", opts:["hizo","hiciste"], correct:0, fb:"usted → forme de él : hizo. (rappel A2.2)"}
 ],
 DRILLS: [
  {type:"fill", text:"Hoy yo ___ comido paella. (haber)", answers:["he","He"], why:"yo → he."},
  {type:"fill", text:"¿Tú ___ visto mi móvil? (haber)", answers:["has","Has"], why:"tú → has."},
  {type:"fill", text:"Mi jefa ___ dicho que sí. (haber)", answers:["ha","Ha"], why:"ella → ha."},
  {type:"fill", text:"Nosotros ___ llegado a casa. (haber)", answers:["hemos","Hemos"], why:"nosotros → hemos."},
  {type:"fill", text:"Ellos ___ vuelto tarde. (haber)", answers:["han","Han"], why:"ellos → han."},
  {type:"fill", text:"Ya he ___ el trabajo. (terminar)", answers:["terminado","Terminado"], why:"-AR → -ado : terminado."},
  {type:"fill", text:"Hoy hemos ___ en casa. (comer)", answers:["comido","Comido"], why:"-ER → -ido : comido."},
  {type:"fill", text:"¿Has ___ mi mensaje? (leer)", answers:["leído","Leído"], why:"leer → leído, avec accent sur le í."},
  {type:"fill", text:"He ___ la cena. (hacer)", answers:["hecho","Hecho"], why:"hacer → hecho."},
  {type:"fill", text:"Mi madre ha ___ que sí. (decir)", answers:["dicho","Dicho"], why:"decir → dicho."},
  {type:"fill", text:"¿Has ___ esta película? (ver)", answers:["visto","Visto"], why:"ver → visto."},
  {type:"fill", text:"Hoy he ___ un correo. (escribir)", answers:["escrito","Escrito"], why:"escribir → escrito."},
  {type:"fill", text:"Han ___ una tienda nueva. (abrir)", answers:["abierto","Abierto"], why:"abrir → abierto."},
  {type:"fill", text:"He ___ el vaso. (romper)", answers:["roto","Roto"], why:"romper → roto."},
  {type:"fill", text:"Todavía ___ he comido. (négation)", answers:["no","No"], why:"todavía no + he + participe."},
  {type:"fill", text:"Esta semana hemos ___ mucho. (viajar)", answers:["viajado","Viajado"], why:"-AR → -ado : viajado."},
  {type:"fill", text:"¿Ha ___ usted el informe? (terminar)", answers:["terminado","Terminado"], why:"usted → ha + terminado."},
  {type:"fill", text:"Mis padres ya han ___ . (llegar)", answers:["llegado","Llegado"], why:"llegar → llegado."},
  {type:"choice", q:"Quel temps avec « hoy » ?", opts:["perfecto : he comido","passé simple : comí"], correct:0, why:"Hoy = temps encore ouvert → perfecto (en Espagne)."},
  {type:"choice", q:"Quel temps avec « ayer » ?", opts:["he comido","comí"], correct:1, why:"Ayer = temps fermé → passé simple."},
  {type:"choice", q:"Le participe est-il variable ?", opts:["Non, jamais avec haber","Oui, comme un adjectif"], correct:0, why:"« Ellas han comido », jamais « comidas »."},
  {type:"choice", q:"« Je n'ai jamais été à Lima » :", opts:["Nunca he estado en Lima.","No nunca he estado en Lima."], correct:0, why:"Nunca avant le verbe, sans « no »."},
  {type:"choice", q:"À un client (usted) :", opts:["¿Ha comido ya?","¿Has comido ya?"], correct:0, why:"Client = usted → ha."},
  {type:"choice", q:"Le participe de « volver » :", opts:["volvido","vuelto"], correct:1, why:"volver → vuelto (irrégulier)."},
  {type:"choice", q:"Auxiliaire pour « il est arrivé » :", opts:["Es llegado.","Ha llegado."], correct:1, why:"Toujours haber, jamais ser."}
 ],
 ANNOTATED: {
  title:"Quatre phrases au pretérito perfecto",
  intro:"Quatre phrases pour reconnaître haber + participe. Touche chaque mot pour voir sa nature et sa traduction.",
  sentences:[
   {fr:"Aujourd'hui, j'ai beaucoup travaillé.", tokens:[
    {w:"Hoy", tag:"adverbe", info:"marqueur de temps", fr:"aujourd'hui", tip:"Temps encore ouvert : perfecto."},
    {w:"he", tag:"verbe", info:"haber · présent · yo", fr:"j'ai", tip:"Auxiliaire. La h est muette."},
    {w:"trabajado", tag:"verbe", info:"participe passé", fr:"travaillé", tip:"-AR → -ado."},
    {w:"mucho", tag:"adverbe", info:"quantité", fr:"beaucoup"}
   ]},
   {fr:"Je n'ai pas encore mangé.", tokens:[
    {w:"Todavía", tag:"adverbe", fr:"encore", tip:"« todavía no » = pas encore."},
    {w:"no", tag:"adverbe", info:"négation", fr:"pas", tip:"Il va avant « he »."},
    {w:"he", tag:"verbe", info:"haber · présent · yo", fr:"j'ai"},
    {w:"comido", tag:"verbe", info:"participe passé", fr:"mangé", tip:"-ER → -ido."}
   ]},
   {fr:"Avez-vous fini le rapport ?", tokens:[
    {w:"¿Ha", tag:"verbe", info:"haber · présent · usted", fr:"avez-vous", tip:"Usted = forme de él / ella."},
    {w:"terminado", tag:"verbe", info:"participe passé", fr:"terminé"},
    {w:"usted", tag:"pronom sujet", info:"politesse", fr:"vous"},
    {w:"el", tag:"article", info:"défini · masc. sing.", fr:"le"},
    {w:"informe?", tag:"nom", info:"masc. sing.", fr:"rapport"}
   ]},
   {fr:"Il a écrit un e-mail.", tokens:[
    {w:"Ha", tag:"verbe", info:"haber · présent · él", fr:"a", tip:"« Ha » (verbe) ≠ « a » (préposition)."},
    {w:"escrito", tag:"verbe", info:"participe irrégulier", fr:"écrit", tip:"escribir → escrito."},
    {w:"un", tag:"article", info:"indéfini · masc. sing.", fr:"un"},
    {w:"correo", tag:"nom", info:"masc. sing.", fr:"e-mail, courrier"}
   ]}
  ]
 },
 CULTURE_NOTE: {icon:"🗓️", title:"Culture, langage informel et fiche récap de A2.3",
  html:"<b>🗓️ Culture : la journée espagnole</b> En Espagne, on déjeune vers 14 h et on dîne vers 21 h. La question de tous les jours : « ¿Has comido ya? ». Au travail, on dit souvent « ¿Ya has terminado? » ou « ¿Has visto mi correo? ». En Amérique latine, la même question est souvent au passé simple : « ¿Ya comiste? ».<br><br><b>🗣️ Dix expressions informelles pour parler de la journée</b><br>1. <b>¡Ya está!</b> = voilà, c'est fait.<br>2. <b>¡No me digas!</b> = sans blague.<br>3. <b>¿Has visto lo que ha pasado?</b> = tu as vu ce qui s'est passé ?<br>4. <b>¡Qué fuerte!</b> = c'est dingue (Espagne).<br>5. <b>Estoy hecho polvo</b> = je suis crevé (Espagne, familier).<br>6. <b>He tenido un día horrible</b> = j'ai eu une journée horrible.<br>7. <b>He quedado con…</b> = j'ai rendez-vous avec… (informel).<br>8. <b>Me ha costado</b> = ça m'a coûté de la peine.<br>9. <b>Hoy no he parado</b> = je n'ai pas arrêté aujourd'hui.<br>10. <b>¡Menudo día!</b> = quelle journée !<br>Avec un supérieur : choisis « He tenido un día muy intenso » et « Ya he terminado ».<br><br><b>📋 Fiche récap A2.3</b><br>• <b>haber</b> : he · has · ha · hemos · habéis · han + participe.<br>• Participes : -ado (-AR) · -ido (-ER / -IR) ; leído, traído (accent).<br>• Irréguliers : hecho · dicho · visto · puesto · escrito · abierto · vuelto · roto.<br>• Marqueurs : hoy · esta semana · este año · ya · todavía no · alguna vez · nunca.<br>• Participe invariable ; rien entre haber et le participe.<br>• Tú ET usted : ¿Has terminado? / ¿Ha terminado usted?"},
 NEXT_PREVIEW:"A2.4 (Futuro simple) : parler de demain et de tes projets : « Mañana trabajaré », « Iremos a Madrid », « Tendré tiempo », avec ir a + infinitif, et le futur pour exprimer une probabilité.",
 META:{vocabTitle:"He comido, hemos visitado : le pretérito perfecto (A2.3)", lectureTitle:"Un día largo en la oficina", bilanTitle:"Bravo, tu racontes ta journée !", pronLabel:"h muette dans he / ha / hemos, accent dans leído, ch dans hecho", todayLede:"raconter ce que tu as fait aujourd'hui avec haber + participe, utiliser les marqueurs (hoy, ya, todavía no, nunca), distinguer perfecto et indefinido, et poser les questions en tutoiement ET en vouvoiement"}
};
})();


// A2.4 — Mañana trabajaré, iremos : le futuro simple et ir a — leçon 216
(function(){
function blk(name, rows){
  var v = __esB(name, rows);
  v.forEach(function(o, i){ o.emo = rows[i][4]; o.ex = [rows[i][5], rows[i][6]]; });
  return v;
}
// ligne = [terme, API, français, note, emoji, exemple ES, exemple FR]
var V = [].concat(
 blk("Marqueurs du futur", [
  ["mañana","/maˈɲana/","demain","Accent sur la première syllabe : ma-ÑA-na (« mañana » = demain, et aussi « matin » : « por la mañana »).","📅","Mañana trabajaré desde casa.","Demain je travaillerai de chez moi."],
  ["pasado mañana","/paˈsaðo maˈɲana/","après-demain","Littéralement « demain passé ».","📆","Pasado mañana viajaremos.","Après-demain nous voyagerons."],
  ["la semana que viene","/la seˈmana ke ˈbjene/","la semaine prochaine","Aussi : « la semana próxima ». Avec « el mes que viene », « el año que viene ».","🗓️","La semana que viene tendré vacaciones.","La semaine prochaine j'aurai des vacances."],
  ["el próximo mes","/el ˈpɾoksimo mes/","le mois prochain","« próximo / próxima » s'accorde : el próximo año, la próxima semana.","➡️","El próximo mes iré a Madrid.","Le mois prochain j'irai à Madrid."],
  ["dentro de…","/ˈdentɾo ðe/","dans… (durée)","« Dentro de dos días » = dans deux jours. Ne confonds pas avec « hace dos días » (il y a deux jours).","⏱️","Dentro de una hora saldremos.","Dans une heure nous partirons."],
  ["luego · después","/ˈlweɣo · desˈpwes/","ensuite · après","Pour enchaîner : « Primero… luego… después… ».","➡️","Luego comeremos en casa.","Ensuite nous mangerons à la maison."]
 ]),
 blk("Le futur régulier : l'infinitif + les terminaisons", [
  ["hablaré","/aβlaˈɾe/","je parlerai","Infinitif + é : hablar + é. Accent écrit sur la dernière syllabe (sauf nosotros : hablaremos).","🗣️","Mañana hablaré con el jefe.","Demain je parlerai avec le chef."],
  ["comeremos","/komeˈɾemos/","nous mangerons","comer + emos. Mêmes terminaisons pour -AR, -ER, -IR.","🍴","Comeremos a las dos.","Nous mangerons à deux heures."],
  ["vivirán","/biβiˈɾan/","ils vivront","vivir + án. Accent écrit : -án.","🏡","Mis padres vivirán en Madrid.","Mes parents vivront à Madrid."],
  ["viajaré","/bjaxaˈɾe/","je voyagerai","viajar + é. Aucun changement de radical : l'infinitif entier reste.","✈️","El año que viene viajaré mucho.","L'année prochaine je voyagerai beaucoup."],
  ["serás · estarás","/seˈɾas · estaˈɾas/","tu seras · tu seras (lieu)","Ser et estar sont réguliers au futur : serás, estarás.","🧍","¿Dónde estarás mañana?","Où seras-tu demain ?"],
  ["¿Hablará usted…?","/aβlaˈɾa usˈteð/","Parlerez-vous… ?","Usted → forme de él / ella : hablará. Courtois : « ¿Podrá ayudarme? ».","🎩","¿Llegará usted mañana?","Arriverez-vous demain ?"]
 ]),
 blk("Les futurs irréguliers : un radical raccourci", [
  ["tener → tendré","/teˈneɾ · tenˈdɾe/","avoir → j'aurai","tendré · tendrás · tendrá · tendremos · tendréis · tendrán. Le e disparaît et un d apparaît.","🎒","Mañana tendré tiempo.","Demain j'aurai du temps."],
  ["poder → podré","/poˈðeɾ · poˈðɾe/","pouvoir → je pourrai","podré · podrás · podrá… Le e disparaît.","💪","Mañana podré llegar.","Demain je pourrai arriver."],
  ["saber → sabré","/saˈβeɾ · saˈβɾe/","savoir → je saurai","sabré · sabrás · sabrá…","💡","El lunes sabré más.","Lundi j'en saurai plus."],
  ["querer → querré","/keˈɾeɾ · keˈreɾe/","vouloir → je voudrai","querré · querrás · querrá… rr = r roulé.","❤️","Luego querrás descansar.","Ensuite tu voudras te reposer."],
  ["venir → vendré","/beˈniɾ · benˈdɾe/","venir → je viendrai","vendré · vendrás · vendrá…","🏃","Mi hermana vendrá mañana.","Ma sœur viendra demain."],
  ["poner → pondré","/poˈneɾ · ponˈdɾe/","mettre → je mettrai","pondré · pondrás · pondrá…","📌","Pondré la mesa.","Je mettrai la table."],
  ["salir → saldré","/saˈliɾ · salˈdɾe/","sortir → je sortirai","saldré · saldrás · saldrá…","🚪","Saldré a las ocho.","Je sortirai à huit heures."],
  ["hacer → haré","/aˈθeɾ · aˈɾe/","faire → je ferai","haré · harás · hará · haremos · haréis · harán. Le « ce » disparaît : ha-ré.","🛠️","Mañana haré la compra.","Demain je ferai les courses."],
  ["decir → diré","/deˈθiɾ · diˈɾe/","dire → je dirai","diré · dirás · dirá… Le « ce » disparaît.","💬","Te diré la verdad.","Je te dirai la vérité."],
  ["haber → habrá","/aˈβeɾ · aˈβɾa/","il y aura","« Habrá una reunión » = il y aura une réunion. Invariable.","📌","Mañana habrá una reunión.","Demain il y aura une réunion."]
 ]),
 blk("Ir a + infinitif : le futur proche", [
  ["voy a + infinitif","/boj a/","je vais (faire)","voy · vas · va · vamos · vais · van + a + infinitif. Comme en français : « Voy a trabajar ».","🎯","Voy a viajar a Perú.","Je vais voyager au Pérou."],
  ["¿Qué vas a hacer?","/ke βas a aˈθeɾ/","Que vas-tu faire ?","Question de base pour les projets. Avec usted : « ¿Qué va a hacer usted? ».","❓","¿Qué va a hacer usted el sábado?","Que ferez-vous samedi ?"],
  ["pensar + infinitif","/penˈsaɾ/","avoir l'intention de","« Pienso viajar en agosto ». Verbe à diphtongue (e → ie) : pienso, piensas, piensa.","💭","Pienso viajar en agosto.","J'ai l'intention de voyager en août."]
 ]),
 blk("Condition et probabilité", [
  ["si + présent, futur","/si/","si… (condition)","« Si llueve, nos quedaremos en casa. » Après « si », on met le PRÉSENT, jamais le futur.","☔","Si hace sol, iremos a la playa.","S'il fait soleil, nous irons à la plage."],
  ["llover → lloverá","/ʎoˈβeɾ · ʎoβeˈɾa/","pleuvoir → il pleuvra","« Mañana lloverá » = demain il pleuvra. « Hace sol » = il fait soleil.","🌧️","Mañana lloverá en el norte.","Demain il pleuvra dans le nord."],
  ["será · estará","/seˈɾa · estaˈɾa/","ce sera · il sera (probablement)","Le futur peut exprimer une probabilité au PRÉSENT : « Serán las diez » = il doit être dix heures.","🤔","Estará en casa.","Il doit être à la maison."],
  ["quizás · tal vez","/kiˈθas · tal beθ/","peut-être","Avec le futur ou le présent : « Quizás vendrá ».","🤷","Quizás vendrá mañana.","Peut-être qu'il viendra demain."],
  ["seguramente","/seɣuɾaˈmente/","sûrement","« Seguramente lloverá » = il pleuvra sûrement.","✅","Seguramente llegarán tarde.","Ils arriveront sûrement en retard."]
 ]),
 blk("Projets, informel et usted", [
  ["Ya veremos","/ʝa beˈɾemos/","On verra bien","Informel, très courant : une façon de ne pas s'engager.","🤞","—¿Vienes? —Ya veremos.","— Tu viens ? — On verra."],
  ["¡Ya verás!","/ʝa beˈɾas/","Tu verras !","Informel, entre amis, pour promettre ou menacer gentiment.","😉","¡Ya verás qué bien!","Tu verras comme ce sera bien !"],
  ["¿Podrá ayudarme?","/poˈðɾa aʝuˈðaɾme/","Pourrez-vous m'aider ?","Politesse avec usted : futur de poder. Plus courtois que « ¿Puede ayudarme? ».","🙏","¿Podrá usted ayudarme mañana?","Pourrez-vous m'aider demain ?"],
  ["Me gustaría…","/me ɣustaˈɾia/","J'aimerais…","Annonce du conditionnel (A2.11). Pour l'instant, retiens-le comme une formule de politesse.","🌟","Me gustaría viajar a Perú.","J'aimerais voyager au Pérou."],
  ["el plan","/el plan/","le projet, le plan","Masculin. « Tengo un plan para mañana ».","🗺️","Mañana tengo un plan genial.","Demain j'ai un super projet."],
  ["ojalá","/oxaˈla/","pourvu que, j'espère que","Mot d'origine arabe (« si Dieu le veut »). Très courant pour exprimer un souhait : « Ojalá venga ». Retiens-le tel quel pour l'instant.","🙏","¡Ojalá haga sol mañana!","Pourvu qu'il fasse soleil demain !"],
  ["si Dios quiere","/si ðjos ˈkjeɾe/","si Dieu le veut","Expression de prudence très répandue, même chez des non-croyants : on ne promet pas fermement.","🤲","Iremos mañana, si Dios quiere.","Nous irons demain, si Dieu le veut."],
  ["quedarse","/keˈðaɾse/","rester","Verbe pronominal (comme levantarse) : me quedo, te quedas, se queda. Futur : me quedaré, nos quedaremos.","🛋️","Mañana me quedaré en casa.","Demain je resterai à la maison."],
  ["el vuelo","/el ˈbwelo/","le vol (avion)","Masculin. « Un vuelo barato » = un vol pas cher.","🛫","El vuelo saldrá a las diez.","Le vol partira à dix heures."]
 ]),
 blk("Prononciation du futur", [
  ["hablaré · hablarás · hablará","/aβlaˈɾe/","accent final","Les terminaisons sont accentuées : ha-bla-RÉ, ha-bla-RÁS, ha-bla-RÁ. Sauf hablaremos (ha-bla-RE-mos).","🔊","Hablará con el jefe.","Il parlera avec le chef."],
  ["hará · dirá","/aˈɾa · diˈɾa/","h muette","hacer au futur : hará, haré. Ne confonds pas hará (il fera) et ha (il a).","🔇","Mañana hará calor.","Demain il fera chaud."]
 ])
);

LESSONS_ES[216] = {
 code:"A2.4", level:"A2",
 VOCAB: V,
 MEM_WORDS: __esIdx(V, ["mañana","la semana que viene","dentro de…","tener → tendré","hacer → haré","decir → diré","voy a + infinitif","si + présent, futur","será · estará","Ya veremos"]),
 MINI_CHECKS: [
  {q:"« Demain je parlerai » :", opts:["Mañana hablo.","Mañana hablaré.","Mañana hablé."], correct:1, fb:"Futur = infinitif + é : hablaré. « Hablé » est le passé simple."},
  {q:"Le futur régulier se forme avec :", opts:["le radical + terminaisons","l'infinitif + terminaisons","haber + participe"], correct:1, fb:"On garde l'infinitif entier : hablar + é, comer + é, vivir + é."},
  {q:"« Nous mangerons » :", opts:["comeremos","comimos","comemos"], correct:0, fb:"comer + emos : comeremos. « Comimos » est le passé simple."},
  {q:"« J'aurai du temps » :", opts:["Tenré tiempo.","Tendré tiempo.","Tengaré tiempo."], correct:1, fb:"tener → tendr- + é. Un d apparaît entre le n et le r."},
  {q:"« Je ferai les courses » :", opts:["Hacré la compra.","Haré la compra.","Hizé la compra."], correct:1, fb:"hacer → har- + é : haré. Le « ce » disparaît."},
  {q:"« Je vais voyager » :", opts:["Voy a viajar.","Voy viajar.","Va a viajar."], correct:0, fb:"ir a + infinitif : voy a viajar. La préposition « a » est obligatoire."},
  {q:"« S'il pleut, nous resterons » :", opts:["Si lloverá, nos quedaremos.","Si llueve, nos quedaremos."], correct:1, fb:"Après « si », on utilise le présent : si llueve, jamais « si lloverá »."},
  {q:"« ¿Qué ___ usted mañana ? » (vouvoiement, hacer)", opts:["hará","harás","haré"], correct:0, fb:"usted → forme de él : hará. « Harás » = tú."}
 ],
 ROUNDS: [
  __esR("Mañana hablaré con el jefe.","Demain je parlerai avec le chef."),
  __esR("La semana que viene tendré vacaciones.","La semaine prochaine j'aurai des vacances."),
  __esR("Pasado mañana viajaremos a Madrid.","Après-demain nous voyagerons à Madrid."),
  __esR("¿Qué vas a hacer el sábado?","Que vas-tu faire samedi ?"),
  __esR("Si llueve, nos quedaremos en casa.","S'il pleut, nous resterons à la maison."),
  __esR("Mi hermana vendrá mañana.","Ma sœur viendra demain."),
  __esR("¿Podrá usted ayudarme?","Pourrez-vous m'aider ?"),
  __esR("Saldré a las ocho.","Je sortirai à huit heures."),
  __esR("Dentro de una hora llegaremos.","Dans une heure nous arriverons."),
  __esR("Mañana habrá una reunión.","Demain il y aura une réunion."),
  __esR("Voy a viajar a Perú.","Je vais voyager au Pérou."),
  __esR("Estará en casa.","Il doit être à la maison."),
  __esR("Ya veremos.","On verra bien.")
 ],
 QUIZ: [
  {cat:"ecrit", q:"« Demain nous mangerons à la maison. »", opts:["Mañana comimos en casa.","Mañana comeremos en casa.","Mañana comeré en casa."], correct:1, why:"nosotros → comeremos (comer + emos). « Comeré » = yo."},
  {cat:"ecrit", q:"Yo ___ el lunes. (llegar, futur)", opts:["llegaré","llegué","llegado"], correct:0, why:"llegar + é : llegaré. « Llegué » = passé ; « llegado » = participe."},
  {cat:"ecrit", q:"Ellos ___ a Madrid. (viajar, futur)", opts:["viajará","viajarán","viajaran"], correct:1, why:"ellos → -án : viajarán, avec accent écrit."},
  {cat:"ecrit", q:"Mañana yo ___ tiempo. (tener, futur)", opts:["tenré","tendré","teneré"], correct:1, why:"tener → tendr- + é."},
  {cat:"ecrit", q:"Mi hermana ___ mañana. (venir, futur)", opts:["vendrá","vendrán","vendré"], correct:0, why:"ella → vendrá (vendr- + á)."},
  {cat:"ecrit", q:"Nosotros ___ la compra. (hacer, futur)", opts:["haremos","hacemos","hicimos"], correct:0, why:"hacer → har- + emos : haremos."},
  {cat:"ecrit", q:"Tú ___ la verdad. (decir, futur)", opts:["dices","dirás","dijiste"], correct:1, why:"decir → dir- + ás : dirás."},
  {cat:"ecrit", q:"Si ___ sol, iremos a la playa. (hacer)", opts:["hará","haga","hace"], correct:2, why:"Après « si » : présent, hace. Le futur est dans la deuxième partie (iremos)."},
  {cat:"ecrit", q:"À un client (usted) : « ¿___ usted mañana ? » (llegar)", opts:["Llegarás","Llegará","Llegaré"], correct:1, why:"Vouvoiement : usted → llegará. « Llegarás » = tú."},
  {cat:"ecrit", q:"« Je vais manger » :", opts:["Voy a comer.","Voy comer.","Voy de comer."], correct:0, why:"ir a + infinitif : voy a comer."},
  {cat:"ecrit", q:"« Il y aura une fête. »", opts:["Habrá una fiesta.","Hubo una fiesta.","Hay una fiestas."], correct:0, why:"habrá = il y aura. « Hubo » = il y a eu."},
  {cat:"ecrit", q:"« Il doit être à la maison » (probabilité) :", opts:["Está en casa.","Estará en casa.","Estuvo en casa."], correct:1, why:"Le futur peut exprimer une supposition : estará = il doit être."},
  {cat:"ecrit", q:"« Dans deux jours » :", opts:["hace dos días","dentro de dos días","en dos día"], correct:1, why:"« dentro de » + durée = dans. « Hace dos días » = il y a deux jours."},
  {cat:"ecrit", q:"« Ils sortiront à huit heures. »", opts:["Saldrán a las ocho.","Saldrá a las ocho.","Salirán a las ocho."], correct:0, why:"salir → saldr- + án : saldrán."},
  {cat:"oral", audio:"Mañana viajaré a Madrid.", q:"Écoute : où ira-t-il ?", opts:["À Madrid","À Séville","À Lima"], correct:0, why:"« viajaré a Madrid » = je voyagerai à Madrid."},
  {cat:"oral", audio:"La semana que viene tendremos una reunión.", q:"Écoute : quand est la réunion ?", opts:["Demain","La semaine prochaine","Hier"], correct:1, why:"« la semana que viene » = la semaine prochaine."},
  {cat:"oral", audio:"¿Qué va a hacer usted el sábado?", q:"Écoute : la question est au :", opts:["Tutoiement","Vouvoiement","Pluriel amical"], correct:1, why:"« va a hacer usted » : vouvoiement."},
  {cat:"oral", audio:"Si llueve, nos quedaremos en casa.", q:"Écoute : que feront-ils s'il pleut ?", opts:["Aller à la plage","Rester à la maison","Voyager"], correct:1, why:"« nos quedaremos en casa » = nous resterons à la maison."},
  {cat:"oral", audio:"Mi madre vendrá pasado mañana.", q:"Écoute : quand viendra sa mère ?", opts:["Demain","Après-demain","Dans une heure"], correct:1, why:"« pasado mañana » = après-demain."},
  {cat:"comprehension", passage:"Ana: ¿Qué vas a hacer este fin de semana? — Luis: El sábado iré a la playa con mi familia. Si llueve, nos quedaremos en casa. El domingo comeremos con mis padres. — Ana: ¡Qué guay! Yo trabajaré el sábado, pero el domingo estaré libre. — Luis: ¡Ven con nosotros! — Ana: Ya veremos.", q:"Que fera Luis samedi ?", opts:["Il ira à la plage","Il travaillera","Il voyagera"], correct:0, why:"« El sábado iré a la playa »."},
  {cat:"comprehension", passage:"Ana: ¿Qué vas a hacer este fin de semana? — Luis: El sábado iré a la playa con mi familia. Si llueve, nos quedaremos en casa. El domingo comeremos con mis padres. — Ana: ¡Qué guay! Yo trabajaré el sábado, pero el domingo estaré libre. — Luis: ¡Ven con nosotros! — Ana: Ya veremos.", q:"Que fera Ana samedi ?", opts:["Elle ira à la plage","Elle travaillera","Elle sera libre"], correct:1, why:"« Yo trabajaré el sábado »."},
  {cat:"comprehension", passage:"Ana: ¿Qué vas a hacer este fin de semana? — Luis: El sábado iré a la playa con mi familia. Si llueve, nos quedaremos en casa. El domingo comeremos con mis padres. — Ana: ¡Qué guay! Yo trabajaré el sábado, pero el domingo estaré libre. — Luis: ¡Ven con nosotros! — Ana: Ya veremos.", q:"Que répond Ana à l'invitation ?", opts:["Oui, avec plaisir","On verra","Non, jamais"], correct:1, why:"« Ya veremos » = on verra : ni oui ni non."},
  {cat:"comprehension", passage:"Recepcionista: Buenos días, señor. El jefe llegará a las diez. ¿Podrá esperar un momento? — Cliente: Sí, no hay problema. ¿Habrá café? — Recepcionista: Claro, enseguida traeré café.", q:"Quand le chef arrivera-t-il ?", opts:["À neuf heures","À dix heures","À onze heures"], correct:1, why:"« llegará a las diez »."},
  {cat:"comprehension", passage:"Recepcionista: Buenos días, señor. El jefe llegará a las diez. ¿Podrá esperar un momento? — Cliente: Sí, no hay problema. ¿Habrá café? — Recepcionista: Claro, enseguida traeré café.", q:"La réceptionniste s'adresse au client :", opts:["Au tutoiement","Au vouvoiement","À un enfant"], correct:1, why:"« señor » et « ¿Podrá esperar…? » : vouvoiement."}
 ],
 PRON_VERBS: [
  {en:"hablaré · hablarás", fr:"je parlerai · tu parleras (ha-bla-RÉ, ha-bla-RÁS : accent sur la fin)"},
  {en:"hablaremos", fr:"nous parlerons (ha-bla-RE-mos : pas d'accent écrit)"},
  {en:"vivirán", fr:"ils vivront (bi-bi-RÁN)"},
  {en:"tendré · tendrá", fr:"j'aurai · il aura (ten-DRÉ, ten-DRÁ)"},
  {en:"haré · hará", fr:"je ferai · il fera (a-RÉ, a-RÁ ; h muette)"},
  {en:"diré · dirás", fr:"je dirai · tu diras (di-RÉ, di-RÁS)"},
  {en:"querré", fr:"je voudrai (ke-RRÉ : rr roulé)"},
  {en:"saldremos", fr:"nous sortirons (sal-DRE-mos)"},
  {en:"Voy a viajar.", fr:"Je vais voyager. (boy a bia-JAR ; v = b)"},
  {en:"Si llueve, iremos.", fr:"S'il pleut, nous irons. (si YUE-be, i-RE-mos ; ll = y)"}
 ],
 READING: [
  "Marta tiene un plan para el verano.",
  "La semana que viene hablará con su jefe y pedirá dos semanas de vacaciones.",
  "Si el jefe dice que sí, viajará a Perú con su hermana en agosto.",
  "Primero irán a Lima, donde comerán pescado y visitarán el museo.",
  "Después viajarán a Cusco y subirán a Machu Picchu.",
  "—¿Qué vais a hacer allí? —le preguntará su madre por teléfono.",
  "—Haremos muchas fotos y conoceremos a gente nueva —contestará Marta.",
  "Si llueve, se quedarán en el hotel y leerán un libro.",
  "—Seguramente lo pasaréis muy bien —dirá su madre.",
  "—¡Ya verás qué viaje, mamá! —responderá Marta."
 ],
 GLOSS: [
  {en:"un plan para el verano", fr:"un projet pour l'été"},
  {en:"pedirá", fr:"elle demandera (pedir au futur : pedir + á)"},
  {en:"subirán", fr:"ils monteront, ils grimperont"},
  {en:"haremos muchas fotos", fr:"nous prendrons beaucoup de photos (hacer fotos)"},
  {en:"conoceremos a gente nueva", fr:"nous ferons la connaissance de gens nouveaux (« a » devant une personne)"},
  {en:"se quedarán", fr:"ils resteront (quedarse, pronominal)"},
  {en:"seguramente", fr:"sûrement"},
  {en:"¡Ya verás!", fr:"Tu verras ! (informel)"}
 ],
 GRAMMAR1: {
  heading:"Le futuro simple : l'infinitif + é, ás, á, emos, éis, án",
  lede:"Pour parler de demain, tu as deux outils : le futur proche (ir a + infinitif), que tu connais, et le futur simple, plus écrit et plus formel, qui se forme en ajoutant des terminaisons à l'infinitif. Les verbes -AR, -ER, -IR ont les mêmes terminaisons : une seule table à apprendre.",
  conj:[
   ["yo →","hablaré · comeré · viviré","Mañana hablaré con el jefe. Comeré en casa. Viviré en Madrid."],
   ["tú →","hablarás · comerás · vivirás","¿Dónde comerás mañana? ¿Cuándo hablarás con ella?"],
   ["él, ella, usted →","hablará · comerá · vivirá","¿Hablará usted con el jefe? Ella comerá tarde."],
   ["nosotros/as →","hablaremos · comeremos · viviremos","Hablaremos mañana. Comeremos juntos."],
   ["vosotros/as →","hablaréis · comeréis · viviréis","¿Hablaréis con el profesor? ¿Dónde comeréis?"],
   ["ellos, ellas, ustedes →","hablarán · comerán · vivirán","Mis padres vivirán aquí. ¿Comerán ustedes con nosotros?"]
  ],
  ruleHtml:"📖 <b>1. La formule.</b> <b>infinitif + é · ás · á · emos · éis · án</b>. On ne retire rien à l'infinitif : <i>hablar → hablaré, comer → comeré, vivir → viviré</i>. Tous les verbes réguliers suivent la même table.<br><br>🔤 <b>2. Les accents.</b> Cinq formes sur six ont un accent écrit sur la dernière syllabe : <b>hablaré, hablarás, hablará, hablaréis, hablarán</b>. Seule <b>hablaremos</b> n'en a pas. Pour savoir où mettre l'accent, rappelle-toi : la voix tombe toujours sur la terminaison (ha-bla-RÉ).<br><br>⚠️ <b>3. Les irréguliers : un radical raccourci + les mêmes terminaisons.</b> Les terminaisons ne changent pas, seul le radical change :<br>• <b>tener</b> → tendr- · <b>poder</b> → podr- · <b>saber</b> → sabr- · <b>querer</b> → querr- · <b>venir</b> → vendr- · <b>poner</b> → pondr- · <b>salir</b> → saldr- · <b>haber</b> → habr- (habrá = il y aura)<br>• <b>hacer</b> → <b>har-</b> · <b>decir</b> → <b>dir-</b><br>Exemples : <i>tendré, podrás, sabrá, querremos, vendréis, pondrán, saldré, haré, diré, habrá.</i><br><br>🎯 <b>4. Ir a + infinitif.</b> <b>voy · vas · va · vamos · vais · van + a + infinitif</b>. Pour un projet proche et sûr : <i>Voy a viajar. ¿Qué vas a hacer? ¿Qué va a hacer usted?</i> Dans la vie courante, on l'emploie plus que le futur simple. Le futur simple est plus formel (travail, écrit, promesses).<br><br>☔ <b>5. Si + présent, futur.</b> <i>Si llueve, nos quedaremos en casa. Si tengo tiempo, te llamaré.</i> Après « si », jamais de futur : on met le présent.<br><br>🤔 <b>6. Le futur de probabilité.</b> Le futur peut parler du présent pour supposer : <i>Estará en casa</i> (il doit être à la maison) ; <i>Serán las diez</i> (il doit être dix heures) ; <i>Tendrá treinta años</i> (il doit avoir trente ans). Avec <b>quizás</b>, <b>tal vez</b>, <b>seguramente</b>, tu exprimes le même doute.<br><br>👥 <b>7. Tutoiement ET vouvoiement.</b> tú → <b>¿Qué harás mañana? ¿Podrás venir?</b> · usted → <b>¿Qué hará usted mañana? ¿Podrá venir?</b> Le futur sert beaucoup à la politesse : <b>¿Podrá ayudarme?</b> est plus courtois que « ¿Puede ayudarme? ».",
  dialogueLede:"Deux amis parlent de leurs projets (tutoiement) :",
  dialogue:[
   {who:"them", en:"¿Qué vas a hacer este fin de semana?", fr:"Que vas-tu faire ce week-end ?"},
   {who:"you", en:"El sábado iré a la playa con mi familia. Si llueve, nos quedaremos en casa.", fr:"Samedi j'irai à la plage avec ma famille. S'il pleut, nous resterons à la maison."},
   {who:"them", en:"¡Qué guay! Yo trabajaré el sábado, pero el domingo estaré libre.", fr:"Génial ! Moi, je travaillerai samedi, mais dimanche je serai libre."},
   {who:"you", en:"¡Ven con nosotros el domingo! Comeremos con mis padres.", fr:"Viens avec nous dimanche ! Nous mangerons avec mes parents."},
   {who:"them", en:"Ya veremos. Te diré algo mañana.", fr:"On verra. Je te dirai quelque chose demain."}
  ],
  whyLabel:"Pourquoi l'infinitif + des terminaisons ?",
  whyText:"Le futur espagnol vient du latin populaire : « hablar he » (j'ai à parler) s'est soudé en « hablaré ». Les terminaisons é, ás, á, emos, éis, án sont en réalité les formes de haber (he, has, ha, hemos, habéis, han) collées à l'infinitif. C'est pourquoi on garde l'infinitif entier. Et c'est pourquoi les irréguliers raccourcissent : « tener he » → « tendré » (le e tombe, un d apparaît pour faciliter la prononciation). Une fois que tu as compris ce mécanisme, tu vois que la table est toujours la même. Autre avantage : cette terminaison est toujours accentuée, donc tu entends clairement le futur à l'oral. En pratique, parle de demain avec « ir a » dans la conversation, et utilise le futur simple pour les promesses (« Te llamaré »), les prévisions (« Mañana lloverá »), les suppositions (« Estará en casa ») et la politesse (« ¿Podrá ayudarme? »)."
 },
 GRAMMAR2: {
  heading:"Parler de ses projets : demain, dans… , si… et la politesse",
  dialogueLede:"Un client et une conseillère de voyage (vouvoiement) :",
  dialogue:[
   {who:"them", en:"Buenos días, señor. ¿Qué va a hacer usted este verano?", fr:"Bonjour, monsieur. Que ferez-vous cet été ?"},
   {who:"you", en:"Pienso viajar a Perú en agosto. ¿Habrá vuelos baratos?", fr:"J'ai l'intention de voyager au Pérou en août. Y aura-t-il des vols pas chers ?"},
   {who:"them", en:"Seguramente. Si reserva hoy, tendrá un buen precio.", fr:"Sûrement. Si vous réservez aujourd'hui, vous aurez un bon prix."},
   {who:"you", en:"¿Podrá usted enviar la información mañana?", fr:"Pourrez-vous envoyer l'information demain ?"},
   {who:"them", en:"Por supuesto. Enviaré la información por correo.", fr:"Bien sûr. J'enverrai l'information par e-mail."}
  ],
  ruleHtml:"📆 <b>1. Les marqueurs du futur.</b> <b>mañana · pasado mañana · la semana que viene · el próximo mes · el año que viene · dentro de + durée · luego · después</b>. Ils annoncent le futur : <i>Dentro de dos días saldré.</i> Attention : « dentro de dos días » = dans deux jours ; « hace dos días » = il y a deux jours.<br><br>🔁 <b>2. Futur simple ou ir a ?</b> • <b>ir a</b> : projet proche, sûr, conversation : <i>Voy a llamar a Ana.</i> • <b>futur simple</b> : promesse, prévision, texte plus formel, supposition : <i>Te llamaré. Mañana lloverá. Estará en casa.</i> Les deux sont corrects ; en cas de doute, <b>ir a</b> est le plus sûr.<br><br>☔ <b>3. Condition : si + présent, futur.</b> <i>Si hace sol, iremos a la playa. Si tengo tiempo, haré la compra.</i> Le « si » est sans accent (« sí » = oui).<br><br>🤷 <b>4. Doute et probabilité.</b> <b>quizás · tal vez · seguramente</b>. <i>Quizás vendrá. Seguramente llegarán tarde.</i> Le futur de probabilité répond à « ¿Dónde está? » par <i>Estará en casa</i>.<br><br>🙏 <b>5. La politesse avec le futur (usted).</b> <b>¿Podrá ayudarme? ¿Podrá esperar un momento? ¿Hará el favor de esperar?</b> Ces formes sont plus courtoises que le présent. Avec un ami : <b>¿Puedes ayudarme?</b>.<br><br>💭 <b>6. Exprimer une intention.</b> <b>pensar + infinitif</b> (j'ai l'intention de) : <i>Pienso viajar en agosto.</i> <b>Me gustaría + infinitif</b> (j'aimerais) : <i>Me gustaría visitar Perú.</i> (le conditionnel sera étudié en A2.11).<br><br>🗣️ <b>7. Informel.</b> <b>Ya veremos</b> (on verra), <b>¡Ya verás!</b> (tu verras), <b>¿Te apuntas?</b> (tu viens avec nous ?), <b>Vale, quedamos</b> (d'accord, on se retrouve).",
  whyLabel:"Comment éviter l'erreur « si + futur » ?",
  whyText:"Le français dit « s'il pleut, nous resterons » : présent après « si ». L'espagnol fait pareil : « si llueve, nos quedaremos ». L'erreur typique chez les apprenants est de dire « si lloverá » parce qu'ils pensent « futur ». Retiens la méthode : « si » est une porte vers la condition, pas vers le temps. Après « si », tu écris le temps de ta propre phrase en français : présent. La deuxième partie, la conséquence, prend le futur. Pour t'entraîner, complète à voix haute : « Si tengo tiempo… », « Si hace sol… », « Si estoy cansado… » en changeant la conséquence chaque fois. Cinq répétitions suffisent pour créer l'automatisme. Et n'oublie pas la différence : « si » (sans accent) = si ; « sí » (avec accent) = oui."
 },
 REVIEW: [
  {q:"« Aujourd'hui, j'ai mangé à la maison » :", opts:["Hoy he comido en casa.","Hoy comeré en casa."], correct:0, fb:"hoy → perfecto : he comido. (rappel A2.3)"},
  {q:"Participe passé de « hacer » :", opts:["hacido","hecho"], correct:1, fb:"hacer → hecho. (rappel A2.3)"},
  {q:"« Je n'ai pas encore terminé » :", opts:["Todavía no he terminado.","No he todavía terminado."], correct:0, fb:"todavía no + he + participe. (rappel A2.3)"},
  {q:"Le participe passé s'accorde-t-il ?", opts:["Non, jamais avec haber","Oui, comme un adjectif"], correct:0, fb:"Après haber, le participe est invariable. (rappel A2.3)"},
  {q:"Vouvoiement : « ¿___ usted terminado ? »", opts:["Ha","Has"], correct:0, fb:"usted → ha. (rappel A2.3)"}
 ],
 DRILLS: [
  {type:"fill", text:"Mañana yo ___ con el jefe. (hablar)", answers:["hablaré","Hablaré"], why:"hablar + é : hablaré."},
  {type:"fill", text:"Tú ___ mañana en casa. (estar)", answers:["estarás","Estarás"], why:"estar + ás : estarás."},
  {type:"fill", text:"Ella ___ en Madrid. (vivir)", answers:["vivirá","Vivirá"], why:"vivir + á : vivirá."},
  {type:"fill", text:"Nosotros ___ a las dos. (comer)", answers:["comeremos","Comeremos"], why:"comer + emos : comeremos."},
  {type:"fill", text:"Vosotros ___ pronto. (llegar)", answers:["llegaréis","Llegaréis"], why:"llegar + éis : llegaréis."},
  {type:"fill", text:"Ellos ___ a Perú. (viajar)", answers:["viajarán","Viajarán"], why:"viajar + án : viajarán."},
  {type:"fill", text:"Mañana yo ___ tiempo. (tener)", answers:["tendré","Tendré"], why:"tener → tendr- + é."},
  {type:"fill", text:"Mañana ellos no ___ venir. (poder)", answers:["podrán","Podrán"], why:"poder → podr- + án."},
  {type:"fill", text:"Mi hermana ___ mañana. (venir)", answers:["vendrá","Vendrá"], why:"venir → vendr- + á."},
  {type:"fill", text:"Yo ___ a las ocho. (salir)", answers:["saldré","Saldré"], why:"salir → saldr- + é."},
  {type:"fill", text:"Mañana ___ la compra. (yo, hacer)", answers:["haré","Haré"], why:"hacer → har- + é."},
  {type:"fill", text:"Tú me ___ la verdad. (decir)", answers:["dirás","Dirás"], why:"decir → dir- + ás."},
  {type:"fill", text:"Mañana ___ una reunión. (haber)", answers:["habrá","Habrá"], why:"haber → habr- + á : habrá (invariable)."},
  {type:"fill", text:"Yo ___ a viajar. (ir a)", answers:["voy","Voy"], why:"ir → voy (yo)."},
  {type:"fill", text:"¿Qué ___ a hacer tú? (ir)", answers:["vas","Vas"], why:"ir → vas (tú)."},
  {type:"fill", text:"Nosotros ___ a comer. (ir a)", answers:["vamos","Vamos"], why:"ir → vamos (nosotros)."},
  {type:"fill", text:"Si ___ sol, iremos a la playa. (hacer)", answers:["hace","Hace"], why:"Après « si » : présent, hace."},
  {type:"fill", text:"Si llueve, nos ___ en casa. (quedar, futur)", answers:["quedaremos","Quedaremos"], why:"nosotros → quedaremos."},
  {type:"fill", text:"¿Qué ___ usted mañana? (hacer, futur)", answers:["hará","Hará"], why:"usted → hará."},
  {type:"fill", text:"¿___ usted ayudarme? (poder, futur)", answers:["Podrá","podrá"], why:"usted → podrá : forme courtoise."},
  {type:"choice", q:"Futur de « hablar » (yo) :", opts:["hablaré","hablé"], correct:0, why:"infinitif + é : hablaré."},
  {type:"choice", q:"« Dans deux jours » :", opts:["dentro de dos días","hace dos días"], correct:0, why:"dentro de + durée = dans."},
  {type:"choice", q:"« Il doit être à la maison » :", opts:["Estará en casa.","Estuvo en casa."], correct:0, why:"Futur de probabilité : estará."},
  {type:"choice", q:"Après « si », on met :", opts:["le présent","le futur"], correct:0, why:"Si llueve, nos quedaremos : présent après si."},
  {type:"choice", q:"« Il y aura une fête » :", opts:["Habrá una fiesta.","Hubo una fiesta."], correct:0, why:"habrá = il y aura ; hubo = il y a eu."}
 ],
 ANNOTATED: {
  title:"Quatre phrases au futur",
  intro:"Quatre phrases pour reconnaître le futur simple, ir a et la condition. Touche chaque mot pour voir sa nature et sa traduction.",
  sentences:[
   {fr:"Demain je parlerai avec le chef.", tokens:[
    {w:"Mañana", tag:"adverbe", info:"marqueur de temps", fr:"demain", tip:"Annonce le futur."},
    {w:"hablaré", tag:"verbe", info:"hablar · futur · yo", fr:"je parlerai", tip:"Infinitif hablar + é, accent sur la fin."},
    {w:"con", tag:"préposition", fr:"avec"},
    {w:"el", tag:"article", info:"défini · masc. sing.", fr:"le"},
    {w:"jefe", tag:"nom", info:"masc. sing.", fr:"chef"}
   ]},
   {fr:"Je vais voyager à Lima.", tokens:[
    {w:"Voy", tag:"verbe", info:"ir · présent · yo", fr:"je vais"},
    {w:"a", tag:"préposition", fr:"à", tip:"Obligatoire avant l'infinitif."},
    {w:"viajar", tag:"verbe", info:"infinitif", fr:"voyager"},
    {w:"a", tag:"préposition", fr:"à"},
    {w:"Lima", tag:"nom propre", fr:"Lima"}
   ]},
   {fr:"S'il pleut, nous resterons à la maison.", tokens:[
    {w:"Si", tag:"conjonction", info:"condition", fr:"si", tip:"Sans accent : condition."},
    {w:"llueve", tag:"verbe", info:"llover · présent", fr:"il pleut", tip:"Après « si » : présent."},
    {w:"nos", tag:"pronom", info:"réfléchi · nosotros", fr:"nous"},
    {w:"quedaremos", tag:"verbe", info:"quedar · futur · nosotros", fr:"resterons", tip:"quedar + emos."},
    {w:"en casa", tag:"locution", fr:"à la maison"}
   ]},
   {fr:"Pourrez-vous m'aider ?", tokens:[
    {w:"¿Podrá", tag:"verbe", info:"poder · futur · usted", fr:"pourrez-vous", tip:"Radical irrégulier podr- ; forme de politesse."},
    {w:"usted", tag:"pronom sujet", info:"politesse", fr:"vous"},
    {w:"ayudarme?", tag:"verbe", info:"infinitif + me", fr:"m'aider"}
   ]}
  ]
 },
 CULTURE_NOTE: {icon:"🔮", title:"Culture, langage informel et fiche récap de A2.4",
  html:"<b>🔮 Culture : parler de l'avenir avec prudence</b> En espagnol, on promet rarement « fermement » à l'oral : on dit « Ya veremos », « Si Dios quiere » (si Dieu le veut) ou « Ojalá » (pourvu que). C'est une manière polie de laisser une porte ouverte. Au travail, le futur sert à confirmer : « Enviaré el informe mañana » (j'enverrai le rapport demain).<br><br><b>🗣️ Dix expressions informelles pour parler de projets</b><br>1. <b>Ya veremos</b> = on verra.<br>2. <b>¡Ya verás!</b> = tu verras !<br>3. <b>¿Te apuntas?</b> = tu viens avec nous ? (Espagne)<br>4. <b>Vale, quedamos</b> = d'accord, on se retrouve.<br>5. <b>Ojalá</b> = pourvu que.<br>6. <b>Si Dios quiere</b> = si Dieu le veut.<br>7. <b>Ni hablar</b> = pas question.<br>8. <b>¡Qué ganas!</b> = j'ai trop hâte !<br>9. <b>Ya lo sabrás</b> = tu le sauras bien assez tôt.<br>10. <b>Sobre la marcha</b> = on verra au fur et à mesure.<br>Avec un supérieur : « Confirmaré la reunión mañana ».<br><br><b>📋 Fiche récap A2.4</b><br>• <b>Futur</b> : infinitif + é · ás · á · emos · éis · án.<br>• <b>Irréguliers</b> : tendr- · podr- · sabr- · querr- · vendr- · pondr- · saldr- · habr- · har- · dir-.<br>• <b>Ir a</b> : voy · vas · va · vamos · vais · van + a + infinitif.<br>• <b>Si + présent, futur.</b><br>• <b>Probabilité</b> : estará · serán · tendrá.<br>• <b>Marqueurs</b> : mañana · la semana que viene · dentro de · el próximo mes.<br>• <b>Tú ET usted</b> : ¿Qué harás? / ¿Qué hará usted?"},
 NEXT_PREVIEW:"A2.5 (Pretérito imperfecto) : décrire le passé et les habitudes : « Cuando era niño, vivía en Lyon », « Todos los días caminaba al colegio ». Un passé pour décrire, qui se combine avec le passé simple.",
 META:{vocabTitle:"Mañana trabajaré, iremos : le futuro simple (A2.4)", lectureTitle:"Un viaje a Perú", bilanTitle:"Bravo, tu parles de l'avenir !", pronLabel:"Accent final dans hablaré / hablará, h muette dans haré, rr de querré", todayLede:"parler de demain avec le futur simple et ir a + infinitif, formuler une condition (si + présent), exprimer une probabilité, et rester poli avec usted"}
};
})();

