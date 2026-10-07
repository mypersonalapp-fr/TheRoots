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


// A2.5 — Cuando era niño… : le pretérito imperfecto — leçon 217
(function(){
function blk(name, rows){
  var v = __esB(name, rows);
  v.forEach(function(o, i){ o.emo = rows[i][4]; o.ex = [rows[i][5], rows[i][6]]; });
  return v;
}
var V = [].concat(
 blk("Les marqueurs de l'habitude passée", [
  ["antes","/ˈantes/","avant, autrefois","Annonce une habitude ou une situation du passé qui a changé : « Antes vivía en Lyon ».","⏪","Antes vivía en Lyon.","Avant, j'habitais à Lyon."],
  ["de niño / de niña","/de ˈniɲo/","enfant (quand j'étais enfant)","« De niño » (garçon), « de niña » (fille). Même idée : « cuando era niño ».","🧒","De niña jugaba en el parque.","Petite, je jouais dans le parc."],
  ["cuando era niño","/ˈkwando eˈɾa ˈniɲo/","quand j'étais enfant","era = imparfait de ser. Au féminin : « cuando era niña ».","👶","Cuando era niño, vivía en Madrid.","Quand j'étais enfant, je vivais à Madrid."],
  ["todos los días","/ˈtoðos los ˈdias/","tous les jours","Marqueur d'habitude : imparfait au passé.","🔁","Todos los días caminaba al colegio.","Tous les jours je marchais jusqu'à l'école."],
  ["siempre · a menudo","/ˈsjempɾe · a meˈnuðo/","toujours · souvent","« A menudo » = souvent. Habitude répétée.","♾️","Siempre comíamos juntos.","Nous mangions toujours ensemble."],
  ["normalmente","/noɾmalˈmente/","normalement, d'habitude","Adverbe en -mente.","📏","Normalmente cenábamos a las nueve.","D'habitude nous dînions à neuf heures."],
  ["los domingos","/los doˈmingos/","le dimanche (chaque dimanche)","Pluriel + « los » : tous les dimanches.","🗓️","Los domingos comíamos en casa de mi abuela.","Le dimanche nous mangions chez ma grand-mère."],
  ["mientras","/ˈmjentɾas/","pendant que","Deux actions simultanées : « Mientras cocinaba, escuchaba música ».","⏳","Mientras cocinaba, escuchaba música.","Pendant que je cuisinais, j'écoutais de la musique."]
 ]),
 blk("L'imparfait régulier : -aba et -ía", [
  ["hablar → hablaba","/aˈβlaɾ · aˈβlaβa/","je parlais","-AR : radical + aba · abas · aba · ábamos · abais · aban. Accent seulement sur nosotros : hablábamos.","🗣️","Hablaba con mi madre cada día.","Je parlais avec ma mère chaque jour."],
  ["comer → comía","/koˈmeɾ · koˈmia/","je mangeais","-ER / -IR : radical + ía · ías · ía · íamos · íais · ían. Le í a toujours un accent.","🍴","Comía en casa de mi abuela.","Je mangeais chez ma grand-mère."],
  ["vivir → vivía","/biˈβiɾ · biˈβia/","je vivais, j'habitais","Mêmes terminaisons que comer. « Vivíamos en Lyon ».","🏡","Vivíamos cerca del mar.","Nous vivions près de la mer."],
  ["jugar → jugaba","/xuˈɣaɾ · xuˈɣaβa/","je jouais","L'imparfait garde le radical : pas de changement u → ue (jugaba, pas « juegaba »).","⚽","Jugaba al fútbol con mis primos.","Je jouais au foot avec mes cousins."],
  ["dormir → dormía","/doɾˈmiɾ · doɾˈmia/","je dormais","Pas de changement de voyelle à l'imparfait : dormía, pedía, prefería.","😴","Dormía ocho horas.","Je dormais huit heures."],
  ["tener → tenía","/teˈneɾ · teˈnia/","j'avais","« Tenía diez años » = j'avais dix ans. L'âge au passé se dit à l'imparfait.","🎂","Tenía diez años.","J'avais dix ans."],
  ["trabajar → trabajaba","/tɾaβaˈxaɾ/","je travaillais","-AR régulier.","💼","Mi padre trabajaba en un banco.","Mon père travaillait dans une banque."],
  ["ayudar → ayudaba","/aʝuˈðaɾ · aʝuˈðaβa/","j'aidais","-AR régulier. « Ayudaba a mi madre ».","🤝","Ayudaba a mi madre en la cocina.","J'aidais ma mère dans la cuisine."]
 ]),
 blk("Les trois irréguliers : ser, ir, ver", [
  ["ser → era","/seɾ · ˈeɾa/","être → j'étais","era · eras · era · éramos · erais · eran. Pour décrire : « Era alto », « Era un día frío ».","🪞","Mi abuela era muy simpática.","Ma grand-mère était très sympathique."],
  ["ir → iba","/iɾ · ˈiβa/","aller → j'allais","iba · ibas · iba · íbamos · ibais · iban. « Iba a la playa cada verano ».","🚶","Íbamos a la playa en verano.","Nous allions à la plage en été."],
  ["ver → veía","/beɾ · beˈia/","voir → je voyais","veía · veías · veía · veíamos · veíais · veían. Accent sur le í.","📺","Veíamos la tele juntos.","Nous regardions la télé ensemble."],
  ["eran las ocho","/ˈeɾan las ˈoʧo/","il était huit heures","L'heure au passé : « Era la una » (une heure), « Eran las ocho » (pluriel à partir de deux heures).","🕗","Eran las ocho cuando llegué.","Il était huit heures quand je suis arrivé."]
 ]),
 blk("Décrire : personnes, lieux, temps", [
  ["alto · bajo","/ˈalto · ˈbaxo/","grand · petit (taille)","S'accorde : alta, alto, bajas.","📏","Mi abuelo era alto.","Mon grand-père était grand."],
  ["joven · mayor","/ˈxoβen · maˈʝoɾ/","jeune · âgé","« Joven » est invariable au genre. « Mayor » = plus âgé.","🧓","Mi abuela ya era mayor.","Ma grand-mère était déjà âgée."],
  ["hacía frío · hacía calor","/aˈθia ˈfɾio/","il faisait froid · chaud","hacer à l'imparfait pour décrire le temps : hacía (jamais « hizo » pour un décor).","🌡️","Hacía mucho calor.","Il faisait très chaud."],
  ["llovía","/ʎoˈβia/","il pleuvait","llover à l'imparfait : llovía.","🌧️","Llovía y no salimos.","Il pleuvait et nous ne sommes pas sortis."],
  ["el colegio","/el koˈlexjo/","l'école (primaire / collège)","Masculin. « Ir al colegio ».","🏫","Iba al colegio en autobús.","J'allais à l'école en bus."],
  ["el pueblo","/el ˈpweβlo/","le village","Masculin. « Un pueblo pequeño ».","🏘️","Vivíamos en un pueblo pequeño.","Nous vivions dans un petit village."],
  ["los abuelos","/los aˈβwelos/","les grands-parents","« Abuelo » + « abuela » = abuelos.","👵","Mis abuelos tenían un jardín.","Mes grands-parents avaient un jardin."],
  ["el jardín","/el xaɾˈðin/","le jardin","Masculin ; pluriel : jardines.","🌷","Jugábamos en el jardín.","Nous jouions dans le jardin."],
  ["la piscina","/la pisˈθina/","la piscine","Féminin. « Había una piscina » = il y avait une piscine (hay → había).","🏊","No había piscina en el hotel.","Il n'y avait pas de piscine à l'hôtel."],
  ["la habitación","/la aβitaˈθjon/","la chambre","Féminin ; pluriel : habitaciones (sans accent).","🛏️","El hotel tenía veinte habitaciones.","L'hôtel avait vingt chambres."],
  ["la época","/la ˈepoka/","l'époque","Féminin, malgré la terminaison en -a… et le mot se prononce É-po-ca.","⏳","Era otra época.","C'était une autre époque."]
 ]),
 blk("Les verbes d'état d'esprit à l'imparfait", [
  ["querer → quería","/keˈɾeɾ · keˈɾia/","vouloir → je voulais","quería · querías · quería… Aussi imparfait de politesse : « Quería un café ».","💭","Quería un café con leche.","Je voudrais un café au lait."],
  ["poder → podía","/poˈðeɾ · poˈðia/","pouvoir → je pouvais","podía · podías · podía… « ¿Podía ayudarme? » = pourriez-vous m'aider ?","💪","No podía dormir.","Je ne pouvais pas dormir."],
  ["saber → sabía","/saˈβeɾ · saˈβia/","savoir → je savais","sabía · sabías · sabía…","💡","No sabía la respuesta.","Je ne savais pas la réponse."],
  ["pensar → pensaba","/penˈsaɾ · penˈsaβa/","penser → je pensais","Pas de diphtongue à l'imparfait : pensaba (au présent : pienso).","🤔","Pensaba en mi familia.","Je pensais à ma famille."],
  ["había","/aˈβia/","il y avait","Imparfait de hay : « había », invariable (singulier et pluriel).","📌","Había mucha gente en la calle.","Il y avait beaucoup de monde dans la rue."]
 ]),
 blk("Poser les questions : tú ET usted", [
  ["¿Dónde vivías? / ¿Dónde vivía usted?","/ˈdonde biˈβias/","Où habitais-tu ? / Où habitiez-vous ?","Tú : vivías. Usted : vivía (même forme que yo et él).","🏠","¿Dónde vivía usted de niño?","Où habitiez-vous enfant ?"],
  ["¿Cómo era…?","/ˈkomo ˈeɾa/","Comment était… ?","Pour faire décrire une personne ou un lieu.","🎤","¿Cómo era su pueblo?","Comment était votre village ?"],
  ["¿Qué hacías…? / ¿Qué hacía usted…?","/ke aˈθias/","Que faisais-tu… ? / Que faisiez-vous… ?","hacer → hacía (tú : hacías).","❓","¿Qué hacía usted los domingos?","Que faisiez-vous le dimanche ?"]
 ]),
 blk("Informel et prononciation", [
  ["¡Qué tiempos aquellos!","/ke ˈtjempos aˈkeʎos/","Quel bon vieux temps !","Nostalgique, entre amis ou en famille.","🥹","¡Qué tiempos aquellos!","Quel bon vieux temps !"],
  ["Antes todo era mejor.","/ˈantes ˈtoðo eˈɾa meˈxoɾ/","Avant, tout était mieux.","Phrase typique des conversations nostalgiques.","😌","Antes todo era más fácil.","Avant, tout était plus facile."],
  ["-aba · -ía","/ˈaβa · ˈia/","b douce, í accentué","Dans -aba, le b se prononce très doux (entre deux voyelles). Dans -ía, la voix tombe sur le í : co-MÍ-a.","🔊","Comía y hablaba con mi madre.","Je mangeais et je parlais avec ma mère."]
 ])
);

LESSONS_ES[217] = {
 code:"A2.5", level:"A2",
 VOCAB: V,
 MEM_WORDS: __esIdx(V, ["antes","cuando era niño","todos los días","hablar → hablaba","comer → comía","ser → era","ir → iba","ver → veía","hacía frío · hacía calor","¡Qué tiempos aquellos!"]),
 MINI_CHECKS: [
  {q:"« Je parlais » :", opts:["hablé","hablaba","hablaré"], correct:1, fb:"-AR + aba : hablaba. « Hablé » est le passé simple ; « hablaré » le futur."},
  {q:"« Je mangeais » :", opts:["comía","comaba","comé"], correct:0, fb:"-ER → -ía : comía, avec accent sur le í."},
  {q:"Les trois verbes irréguliers de l'imparfait :", opts:["ser, ir, ver","ser, estar, tener","ir, hacer, decir"], correct:0, fb:"era, iba, veía. Tous les autres verbes sont réguliers."},
  {q:"« Quand j'étais enfant » :", opts:["cuando fui niño","cuando era niño"], correct:1, fb:"Une période longue et habituelle : imparfait, era."},
  {q:"« J'avais dix ans » :", opts:["Tuve diez años.","Tenía diez años."], correct:1, fb:"L'âge au passé : imparfait, tenía."},
  {q:"« Il faisait froid » :", opts:["Hacía frío.","Hizo frío."], correct:0, fb:"La météo en toile de fond : imparfait, hacía."},
  {q:"« Nous allions à la plage » :", opts:["Íbamos a la playa.","Fuimos a la playa."], correct:0, fb:"Habitude : íbamos. « Fuimos » = nous y sommes allés (une fois)."},
  {q:"« ¿Dónde ___ usted de niño ? » (vivir)", opts:["vivía","vivías"], correct:0, fb:"usted → vivía (même forme que yo)."}
 ],
 ROUNDS: [
  __esR("Cuando era niño, vivía en Madrid.","Quand j'étais enfant, je vivais à Madrid."),
  __esR("Todos los días caminaba al colegio.","Tous les jours je marchais jusqu'à l'école."),
  __esR("Mi abuela era muy simpática.","Ma grand-mère était très sympathique."),
  __esR("Los domingos comíamos juntos.","Le dimanche nous mangions ensemble."),
  __esR("Hacía mucho calor.","Il faisait très chaud."),
  __esR("Íbamos a la playa en verano.","Nous allions à la plage en été."),
  __esR("¿Dónde vivía usted de niño?","Où habitiez-vous enfant ?"),
  __esR("Veíamos la tele con mis padres.","Nous regardions la télé avec mes parents."),
  __esR("Tenía diez años.","J'avais dix ans."),
  __esR("Mientras cocinaba, escuchaba música.","Pendant que je cuisinais, j'écoutais de la musique."),
  __esR("Eran las ocho de la mañana.","Il était huit heures du matin."),
  __esR("Jugábamos en el jardín.","Nous jouions dans le jardin."),
  __esR("¡Qué tiempos aquellos!","Quel bon vieux temps !")
 ],
 QUIZ: [
  {cat:"ecrit", q:"« Quand j'étais petite, je jouais au parc. »", opts:["De niña jugué en el parque.","De niña jugaba en el parque.","De niña jugo en el parque."], correct:1, why:"Habitude longue : imparfait, jugaba."},
  {cat:"ecrit", q:"Todos los días yo ___ al colegio. (ir)", opts:["fui","iba","voy"], correct:1, why:"Habitude passée : iba."},
  {cat:"ecrit", q:"Mi abuela ___ muy simpática. (ser)", opts:["fue","era","es"], correct:1, why:"Description : era."},
  {cat:"ecrit", q:"Nosotros ___ en un pueblo. (vivir)", opts:["vivíamos","vivimos","vivíanos"], correct:0, why:"vivir → vivíamos (í accentué)."},
  {cat:"ecrit", q:"Ellos ___ la tele cada noche. (ver)", opts:["vieron","veían","vían"], correct:1, why:"ver → veían (habitude)."},
  {cat:"ecrit", q:"Nosotros ___ en el jardín. (jugar)", opts:["jugábamos","jugamos","juegábamos"], correct:0, why:"Radical conservé : jugábamos (accent sur nosotros)."},
  {cat:"ecrit", q:"« Il était huit heures. »", opts:["Era las ocho.","Eran las ocho.","Fue las ocho."], correct:1, why:"À partir de deux heures : pluriel, eran."},
  {cat:"ecrit", q:"« Il faisait froid. »", opts:["Hacía frío.","Hizo frío.","Hace frío."], correct:0, why:"Décor : imparfait, hacía."},
  {cat:"ecrit", q:"Vouvoiement : « ¿Qué ___ usted los domingos ? » (hacer)", opts:["hacía","hacías","hizo"], correct:0, why:"usted → hacía."},
  {cat:"ecrit", q:"Tú ___ ocho horas. (dormir)", opts:["dormías","durmías","dormiste"], correct:0, why:"Pas de changement de voyelle à l'imparfait : dormías."},
  {cat:"ecrit", q:"Mi madre ___ en un banco. (trabajar)", opts:["trabajó","trabajaba","trabajará"], correct:1, why:"Situation habituelle : trabajaba."},
  {cat:"ecrit", q:"« J'avais dix ans. »", opts:["Tuve diez años.","Tenía diez años.","Tengo diez años."], correct:1, why:"Âge au passé : tenía."},
  {cat:"ecrit", q:"Vosotros ___ al fútbol. (jugar)", opts:["jugabais","jugaban","jugábais"], correct:0, why:"vosotros → -abais, sans accent."},
  {cat:"ecrit", q:"« Pendant que je cuisinais, j'écoutais de la musique. »", opts:["Mientras cocinaba, escuchaba música.","Mientras cociné, escuché música.","Mientras cocinaré, escucharé música."], correct:0, why:"Deux actions simultanées d'arrière-plan : imparfait."},
  {cat:"oral", audio:"Cuando era niña, vivía en un pueblo.", q:"Écoute : où vivait-elle ?", opts:["Dans une ville","Dans un village","À la plage"], correct:1, why:"« un pueblo » = un village."},
  {cat:"oral", audio:"Los domingos comíamos en casa de mi abuela.", q:"Écoute : où mangeaient-ils le dimanche ?", opts:["Chez la grand-mère","Au restaurant","Chez des amis"], correct:0, why:"« en casa de mi abuela »."},
  {cat:"oral", audio:"Hacía mucho frío.", q:"Écoute : quel temps ?", opts:["Il faisait froid","Il faisait chaud","Il pleuvait"], correct:0, why:"« hacía frío » = il faisait froid."},
  {cat:"oral", audio:"¿Dónde vivía usted de niño?", q:"Écoute : la question s'adresse à :", opts:["Un ami proche","Quelqu'un qu'on vouvoie","Un enfant"], correct:1, why:"« usted » : vouvoiement."},
  {cat:"oral", audio:"Íbamos a la playa cada verano.", q:"Écoute : quand allaient-ils à la plage ?", opts:["Chaque hiver","Chaque été","Jamais"], correct:1, why:"« cada verano » = chaque été."},
  {cat:"comprehension", passage:"Luis: Cuando era niño, vivía en un pueblo pequeño. Mi abuelo tenía un jardín y yo jugaba allí todos los días. Los domingos comíamos todos juntos. — Ana: ¡Qué bonito! Yo vivía en una ciudad y no tenía jardín. — Luis: ¡Qué tiempos aquellos!", q:"Où vivait Luis enfant ?", opts:["Dans un petit village","Dans une grande ville","À la plage"], correct:0, why:"« un pueblo pequeño »."},
  {cat:"comprehension", passage:"Luis: Cuando era niño, vivía en un pueblo pequeño. Mi abuelo tenía un jardín y yo jugaba allí todos los días. Los domingos comíamos todos juntos. — Ana: ¡Qué bonito! Yo vivía en una ciudad y no tenía jardín. — Luis: ¡Qué tiempos aquellos!", q:"Qu'avait son grand-père ?", opts:["Un jardin","Un bateau","Une voiture"], correct:0, why:"« tenía un jardín »."},
  {cat:"comprehension", passage:"Luis: Cuando era niño, vivía en un pueblo pequeño. Mi abuelo tenía un jardín y yo jugaba allí todos los días. Los domingos comíamos todos juntos. — Ana: ¡Qué bonito! Yo vivía en una ciudad y no tenía jardín. — Luis: ¡Qué tiempos aquellos!", q:"Qu'est-ce qui manquait à Ana ?", opts:["Un jardin","Des amis","Une maison"], correct:0, why:"« no tenía jardín »."},
  {cat:"comprehension", passage:"Cliente: Buenas tardes. ¿Cómo era el hotel hace diez años? — Recepcionista: Era más pequeño, señor. Tenía veinte habitaciones y no había piscina. — Cliente: ¿Y dónde desayunaban los clientes? — Recepcionista: En el jardín, si hacía buen tiempo.", q:"Combien de chambres avait l'hôtel ?", opts:["Dix","Vingt","Trente"], correct:1, why:"« veinte habitaciones »."},
  {cat:"comprehension", passage:"Cliente: Buenas tardes. ¿Cómo era el hotel hace diez años? — Recepcionista: Era más pequeño, señor. Tenía veinte habitaciones y no había piscina. — Cliente: ¿Y dónde desayunaban los clientes? — Recepcionista: En el jardín, si hacía buen tiempo.", q:"Où prenait-on le petit-déjeuner ?", opts:["Au jardin","À la piscine","Au restaurant"], correct:0, why:"« En el jardín, si hacía buen tiempo »."}
 ],
 PRON_VERBS: [
  {en:"hablaba · hablabas", fr:"je parlais · tu parlais (a-BLA-ba, a-BLA-bas ; b très doux)"},
  {en:"hablábamos", fr:"nous parlions (a-BLÁ-ba-mos : accent écrit)"},
  {en:"comía · comías", fr:"je mangeais · tu mangeais (ko-MÍ-a : le í est accentué)"},
  {en:"vivíamos", fr:"nous vivions (bi-BÍ-a-mos)"},
  {en:"era · eran", fr:"j'étais · ils étaient (É-ra, É-ran)"},
  {en:"iba · íbamos", fr:"j'allais · nous allions (I-ba, Í-ba-mos ; i-ba : b doux)"},
  {en:"veía · veíamos", fr:"je voyais · nous voyions (be-Í-a)"},
  {en:"hacía frío", fr:"il faisait froid (a-ZÍ-a ; h muette)"},
  {en:"Eran las ocho.", fr:"Il était huit heures. (É-ran las O-cho)"},
  {en:"¡Qué tiempos aquellos!", fr:"Quel bon vieux temps ! (ke TIEM-pos a-KE-yos)"}
 ],
 READING: [
  "Cuando Marta era niña, vivía en un pueblo pequeño cerca del mar.",
  "Su casa tenía un jardín grande y sus abuelos vivían muy cerca.",
  "Todos los días iba al colegio andando con su hermano.",
  "Por la tarde, jugaban en el jardín mientras su abuela cocinaba.",
  "Los domingos, toda la familia comía junta y después veían la tele.",
  "En verano, hacía mucho calor y todos iban a la playa.",
  "Su abuelo era alto, simpático y siempre contaba historias.",
  "Un día, cuando tenía diez años, llovía mucho y no podían salir.",
  "—¡Qué tiempos aquellos! —dice Marta hoy.",
  "—Antes todo era más sencillo —contesta su hermano."
 ],
 GLOSS: [
  {en:"andando", fr:"à pied (gérondif de andar : en marchant)"},
  {en:"contaba historias", fr:"racontait des histoires (contar → contaba, imparfait)"},
  {en:"más sencillo", fr:"plus simple"},
  {en:"cerca del mar", fr:"près de la mer"},
  {en:"toda la familia", fr:"toute la famille"},
  {en:"no podían salir", fr:"ils ne pouvaient pas sortir (poder → podían, imparfait)"},
  {en:"hoy", fr:"aujourd'hui (le narrateur parle de maintenant : présent « dice »)"},
  {en:"¡Qué tiempos aquellos!", fr:"Quel bon vieux temps !"}
 ],
 GRAMMAR1: {
  heading:"Le pretérito imperfecto : -aba, -ía et les trois irréguliers",
  lede:"Le passé simple raconte ce qui s'est passé. L'imparfait décrit comment c'était : les habitudes, le décor, l'âge, la météo. C'est le temps du souvenir. Il est très régulier : seulement trois verbes irréguliers (ser, ir, ver).",
  conj:[
   ["yo →","hablaba · comía · vivía","Hablaba con mi madre. Comía en casa. Vivía en Madrid."],
   ["tú →","hablabas · comías · vivías","¿Dónde vivías? ¿Qué hacías los domingos?"],
   ["él, ella, usted →","hablaba · comía · vivía","¿Dónde vivía usted? Mi abuela cocinaba mucho."],
   ["nosotros/as →","hablábamos · comíamos · vivíamos","Hablábamos mucho. Comíamos juntos."],
   ["vosotros/as →","hablabais · comíais · vivíais","¿Dónde vivíais? ¿A qué jugabais?"],
   ["ellos, ellas, ustedes →","hablaban · comían · vivían","Mis abuelos vivían cerca. ¿Dónde vivían ustedes?"]
  ],
  ruleHtml:"📖 <b>1. Les terminaisons.</b> <b>-AR → -aba · -abas · -aba · -ábamos · -abais · -aban</b>. <b>-ER / -IR → -ía · -ías · -ía · -íamos · -íais · -ían</b>. Accent écrit : sur <b>-ábamos</b> et sur tous les <b>-ía</b>.<br><br>🧩 <b>2. Rien ne change dans le radical.</b> <i>jugar → jugaba</i> (pas « juegaba »), <i>dormir → dormía</i>, <i>pedir → pedía</i>, <i>tener → tenía</i>, <i>hacer → hacía</i>, <i>poder → podía</i>. Les irrégularités du présent et du passé simple disparaissent.<br><br>⚠️ <b>3. Trois irréguliers seulement.</b> <b>ser</b> : era · eras · era · éramos · erais · eran. <b>ir</b> : iba · ibas · iba · íbamos · ibais · iban. <b>ver</b> : veía · veías · veía · veíamos · veíais · veían.<br><br>🔁 <b>4. Quand l'utiliser ?</b> (a) <b>L'habitude</b> : <i>Todos los días caminaba al colegio.</i> (b) <b>La description</b> : <i>Mi abuela era muy simpática.</i> (c) <b>L'âge et l'heure</b> : <i>Tenía diez años. Eran las ocho.</i> (d) <b>La météo / le décor</b> : <i>Hacía frío. Llovía.</i> (e) <b>Deux actions parallèles</b> : <i>Mientras cocinaba, escuchaba música.</i><br><br>📅 <b>5. Les marqueurs.</b> <b>antes · de niño · cuando era niño · todos los días · siempre · a menudo · normalmente · los domingos · mientras</b>.<br><br>⏰ <b>6. L'heure.</b> <b>Era la una</b> (une heure) ; <b>Eran las dos, las tres…</b> (à partir de deux).<br><br>👥 <b>7. Tutoiement ET vouvoiement.</b> tú → <b>¿Dónde vivías? ¿Cómo era tu pueblo?</b> · usted → <b>¿Dónde vivía usted? ¿Cómo era su pueblo?</b> Attention : yo, él et usted ont la même forme à l'imparfait (vivía) ; le pronom ou le contexte lève le doute.",
  dialogueLede:"Deux amis parlent de leur enfance (tutoiement) :",
  dialogue:[
   {who:"them", en:"¿Dónde vivías cuando eras niña?", fr:"Où habitais-tu quand tu étais petite ?"},
   {who:"you", en:"Vivía en un pueblo cerca del mar. Mis abuelos tenían un jardín grande.", fr:"J'habitais dans un village près de la mer. Mes grands-parents avaient un grand jardin."},
   {who:"them", en:"¿Qué hacías los domingos?", fr:"Que faisais-tu le dimanche ?"},
   {who:"you", en:"Comíamos todos juntos y después jugaba en el jardín. ¿Y tú?", fr:"Nous mangions tous ensemble puis je jouais dans le jardin. Et toi ?"},
   {who:"them", en:"Yo vivía en una ciudad. Iba al colegio en autobús.", fr:"Moi, je vivais en ville. J'allais à l'école en bus."},
   {who:"you", en:"¡Qué tiempos aquellos!", fr:"Quel bon vieux temps !"}
  ],
  whyLabel:"Pourquoi un deuxième passé ?",
  whyText:"Imagine un film : le passé simple est l'action (quelqu'un entre, quelqu'un parle), l'imparfait est le décor (la pièce était sombre, il pleuvait, il avait dix ans). L'imparfait « imparfait » veut dire « inachevé » : on ne dit ni quand ça a commencé ni quand ça a fini, on décrit la durée ou la répétition. C'est pourquoi les mots comme « siempre », « todos los días », « antes » l'appellent : ils parlent d'un temps qui se répète. Au contraire, « ayer », « una vez », « de repente » appellent le passé simple. Dans la prochaine leçon, tu apprendras à les combiner dans une même histoire. Pour l'instant, retiens trois questions : est-ce une habitude ? est-ce une description ? est-ce l'âge ou l'heure ? Si oui, imparfait."
 },
 GRAMMAR2: {
  heading:"Raconter ses souvenirs : habitudes, décor et politesse",
  dialogueLede:"Un client interroge une employée âgée (vouvoiement) :",
  dialogue:[
   {who:"them", en:"Buenas tardes, señora. ¿Dónde trabajaba usted antes?", fr:"Bonjour, madame. Où travailliez-vous avant ?"},
   {who:"you", en:"Trabajaba en un banco. Entraba a las ocho y salía a las cuatro.", fr:"Je travaillais dans une banque. J'entrais à huit heures et je sortais à seize heures."},
   {who:"them", en:"¿Le gustaba su trabajo?", fr:"Aimiez-vous votre travail ?"},
   {who:"you", en:"Sí, mucho. Mis compañeros eran muy simpáticos.", fr:"Oui, beaucoup. Mes collègues étaient très sympathiques."},
   {who:"them", en:"¿Y cómo era un día normal?", fr:"Et comment était une journée normale ?"},
   {who:"you", en:"Normalmente llegaba, tomaba un café y empezaba a trabajar.", fr:"En général j'arrivais, je prenais un café et je commençais à travailler."}
  ],
  ruleHtml:"🧠 <b>1. Trois situations typiques.</b> <b>Avant et maintenant</b> : <i>Antes vivía en Lyon, ahora vivo en París.</i> <b>Une enfance</b> : <i>De niña iba a la playa cada verano.</i> <b>Un travail passé</b> : <i>Trabajaba en un banco.</i><br><br>🔍 <b>2. Le même verbe, deux sens.</b> <b>era</b> (description) ≠ <b>fue</b> (événement fini) : <i>Era un día frío</i> (décor) / <i>Fue un día genial</i> (jugement final). Tu retrouveras ce contraste dans A2.6.<br><br>🔤 <b>3. Les verbes d'état d'esprit à l'imparfait.</b> <b>quería</b> (je voulais), <b>podía</b> (je pouvais), <b>tenía que</b> (je devais), <b>sabía</b> (je savais), <b>pensaba</b> (je pensais). Ils parlent d'une situation, pas d'un résultat.<br><br>🙏 <b>4. Imparfait de politesse.</b> « Quería un café » = je voulais / je voudrais un café (plus doux que « Quiero »). « ¿Podía ayudarme? » est plus poli que « ¿Puede ayudarme? ». Tu l'entendras souvent au comptoir.<br><br>👥 <b>5. Tutoiement ET vouvoiement.</b> tú → <b>¿Dónde trabajabas? ¿Te gustaba?</b> · usted → <b>¿Dónde trabajaba usted? ¿Le gustaba?</b> (« le gustaba » est expliqué en A2.8 ; pour l'instant, reconnais-le comme une question courante).<br><br>🗣️ <b>6. Informel.</b> <b>Antes todo era mejor</b>, <b>¡Qué tiempos aquellos!</b>, <b>Era un pelmazo</b> (c'était un casse-pieds, familier), <b>De pequeño era un trasto</b> (enfant, j'étais un petit diable).",
  whyLabel:"Pourquoi « quería » est-il plus poli que « quiero » ?",
  whyText:"Le présent « quiero » est direct : je veux, maintenant. L'imparfait « quería » met le désir dans un passé flou : « je voulais un café (quand je suis entré) ». Il crée une distance polie, comme le « je voulais » français. Les serveurs et vendeurs espagnols l'entendent tous les jours : « Quería un café con leche, por favor ». Pour ne pas te tromper, retiens : imparfait de politesse avec querer, poder et un autre verbe à l'infinitif (« ¿Podía ayudarme? »). Dans A2.11, tu verras le conditionnel, qui est encore plus poli (« Querría un café », « ¿Podría ayudarme? »)."
 },
 REVIEW: [
  {q:"« Demain nous mangerons ensemble » :", opts:["Mañana comeremos juntos.","Mañana comimos juntos."], correct:0, fb:"Futur : comeremos. (rappel A2.4)"},
  {q:"« S'il pleut, nous resterons » :", opts:["Si llueve, nos quedaremos.","Si lloverá, nos quedaremos."], correct:0, fb:"Après si : présent. (rappel A2.4)"},
  {q:"« Je ferai les courses » :", opts:["Haré la compra.","Hacré la compra."], correct:0, fb:"hacer → har-. (rappel A2.4)"},
  {q:"« Je vais voyager » :", opts:["Voy a viajar.","Voy viajar."], correct:0, fb:"ir a + infinitif. (rappel A2.4)"},
  {q:"Vouvoiement : « ¿___ usted ayudarme ? » (poder, futur)", opts:["Podrá","Podrás"], correct:0, fb:"usted → podrá. (rappel A2.4)"}
 ],
 DRILLS: [
  {type:"fill", text:"Yo ___ con mi madre. (hablar, imparfait)", answers:["hablaba","Hablaba"], why:"-AR + aba."},
  {type:"fill", text:"Tú ___ en Madrid. (vivir)", answers:["vivías","Vivías"], why:"-IR + ías."},
  {type:"fill", text:"Mi abuela ___ muy bien. (cocinar)", answers:["cocinaba","Cocinaba"], why:"-AR + aba."},
  {type:"fill", text:"Nosotros ___ en el jardín. (jugar)", answers:["jugábamos","Jugábamos"], why:"-ábamos, accent écrit."},
  {type:"fill", text:"Vosotros ___ en casa. (comer)", answers:["comíais","Comíais"], why:"-íais."},
  {type:"fill", text:"Ellos ___ cerca. (vivir)", answers:["vivían","Vivían"], why:"-ían."},
  {type:"fill", text:"Yo ___ diez años. (tener)", answers:["tenía","Tenía"], why:"tener → tenía."},
  {type:"fill", text:"Mi abuelo ___ alto. (ser)", answers:["era","Era"], why:"ser → era."},
  {type:"fill", text:"Nosotros ___ a la playa. (ir)", answers:["íbamos","Íbamos"], why:"ir → íbamos."},
  {type:"fill", text:"Ellos ___ la tele. (ver)", answers:["veían","Veían"], why:"ver → veían."},
  {type:"fill", text:"___ las ocho. (ser, imparfait)", answers:["Eran","eran"], why:"Heures à partir de 2 : pluriel, eran."},
  {type:"fill", text:"___ mucho frío. (hacer)", answers:["Hacía","hacía"], why:"hacer → hacía."},
  {type:"fill", text:"Yo ___ ocho horas. (dormir)", answers:["dormía","Dormía"], why:"Pas de changement de voyelle."},
  {type:"fill", text:"Mi padre ___ en un banco. (trabajar)", answers:["trabajaba","Trabajaba"], why:"-AR + aba."},
  {type:"fill", text:"Yo ___ ayudar. (querer, politesse)", answers:["quería","Quería"], why:"querer → quería."},
  {type:"fill", text:"Mientras yo ___, él escuchaba música. (cocinar)", answers:["cocinaba","Cocinaba"], why:"Action parallèle : imparfait."},
  {type:"fill", text:"Usted ___ en un banco. (trabajar)", answers:["trabajaba","Trabajaba"], why:"usted → trabajaba."},
  {type:"fill", text:"Tú ___ al colegio. (ir)", answers:["ibas","Ibas"], why:"ir → ibas."},
  {type:"choice", q:"Pour une habitude passée :", opts:["imparfait","passé simple"], correct:0, why:"Todos los días caminaba…"},
  {type:"choice", q:"Pour l'âge au passé :", opts:["Tenía diez años.","Tuve diez años."], correct:0, why:"L'âge est une description : imparfait."},
  {type:"choice", q:"Combien de verbes irréguliers à l'imparfait ?", opts:["Trois (ser, ir, ver)","Dix"], correct:0, why:"era, iba, veía."},
  {type:"choice", q:"« Il était une heure » :", opts:["Era la una.","Eran la una."], correct:0, why:"Une heure : singulier."},
  {type:"choice", q:"Avec usted :", opts:["¿Dónde vivía usted?","¿Dónde vivías usted?"], correct:0, why:"usted → forme de él : vivía."},
  {type:"choice", q:"L'imparfait de jugar :", opts:["jugaba","juegaba"], correct:0, why:"Le radical ne change pas."}
 ],
 ANNOTATED: {
  title:"Quatre phrases à l'imparfait",
  intro:"Quatre phrases pour reconnaître l'imparfait. Touche chaque mot pour voir sa nature et sa traduction.",
  sentences:[
   {fr:"Quand j'étais enfant, je vivais dans un village.", tokens:[
    {w:"Cuando", tag:"conjonction", fr:"quand"},
    {w:"era", tag:"verbe", info:"ser · imparfait · yo", fr:"j'étais", tip:"Irrégulier : era."},
    {w:"niño", tag:"nom", info:"masc. sing.", fr:"enfant"},
    {w:"vivía", tag:"verbe", info:"vivir · imparfait · yo", fr:"je vivais", tip:"-ía : accent sur le í."},
    {w:"en un pueblo", tag:"locution", fr:"dans un village"}
   ]},
   {fr:"Tous les jours, je marchais jusqu'à l'école.", tokens:[
    {w:"Todos los días", tag:"locution", info:"marqueur d'habitude", fr:"tous les jours"},
    {w:"caminaba", tag:"verbe", info:"caminar · imparfait · yo", fr:"je marchais"},
    {w:"al", tag:"contraction", info:"a + el", fr:"à l'"},
    {w:"colegio", tag:"nom", info:"masc. sing.", fr:"école"}
   ]},
   {fr:"Il faisait froid et il pleuvait.", tokens:[
    {w:"Hacía", tag:"verbe", info:"hacer · imparfait", fr:"il faisait", tip:"Décor météo."},
    {w:"frío", tag:"nom", info:"masc. sing.", fr:"froid"},
    {w:"y", tag:"conjonction", fr:"et"},
    {w:"llovía", tag:"verbe", info:"llover · imparfait", fr:"il pleuvait"}
   ]},
   {fr:"Où travailliez-vous avant ?", tokens:[
    {w:"¿Dónde", tag:"adverbe", fr:"où"},
    {w:"trabajaba", tag:"verbe", info:"trabajar · imparfait · usted", fr:"travailliez"},
    {w:"usted", tag:"pronom sujet", info:"politesse", fr:"vous"},
    {w:"antes?", tag:"adverbe", info:"marqueur", fr:"avant"}
   ]}
  ]
 },
 CULTURE_NOTE: {icon:"⏪", title:"Culture, langage informel et fiche récap de A2.5",
  html:"<b>⏪ Culture : les souvenirs de famille</b> En Espagne et en Amérique latine, les repas du dimanche chez les grands-parents sont une institution. Raconter son enfance commence presque toujours par « Cuando yo era niño… » ou « De pequeño… ».<br><br><b>🗣️ Dix expressions informelles pour le souvenir</b><br>1. <b>¡Qué tiempos aquellos!</b> = quel bon vieux temps !<br>2. <b>Antes todo era mejor</b> = avant, tout était mieux.<br>3. <b>De pequeño era un trasto</b> = petit, j'étais un petit diable.<br>4. <b>Hace una eternidad</b> = ça fait une éternité.<br>5. <b>Era otra época</b> = c'était une autre époque.<br>6. <b>Me acuerdo como si fuera ayer</b> = je m'en souviens comme si c'était hier.<br>7. <b>Éramos pobres pero felices</b> = nous étions pauvres mais heureux.<br>8. <b>Éramos unos críos</b> = nous étions des gamins (Espagne).<br>9. <b>Se me hace raro</b> = ça me paraît bizarre.<br>10. <b>Eso era antes</b> = ça, c'était avant.<br>Avec un supérieur : « Antes trabajaba en otra empresa ».<br><br><b>📋 Fiche récap A2.5</b><br>• <b>-AR</b> : -aba · -abas · -aba · -ábamos · -abais · -aban.<br>• <b>-ER / -IR</b> : -ía · -ías · -ía · -íamos · -íais · -ían.<br>• <b>Irréguliers</b> : era · iba · veía.<br>• <b>Emplois</b> : habitude, description, âge, heure, météo, actions parallèles.<br>• <b>Marqueurs</b> : antes · de niño · todos los días · siempre · mientras.<br>• <b>Tú ET usted</b> : ¿Dónde vivías? / ¿Dónde vivía usted?"},
 NEXT_PREVIEW:"A2.6 (Imparfait ou passé simple ?) : raconter une histoire complète en combinant le décor (imparfait) et l'événement (passé simple) : « Llovía cuando llegué ».",
 META:{vocabTitle:"Cuando era niño… : le pretérito imperfecto (A2.5)", lectureTitle:"Una infancia junto al mar", bilanTitle:"Bravo, tu racontes ton enfance !", pronLabel:"Accent sur -ábamos et sur tous les -ía, b douce dans -aba", todayLede:"décrire le passé avec l'imparfait (habitudes, âge, heure, météo), reconnaître era / iba / veía, utiliser l'imparfait de politesse et poser les questions en tutoiement ET en vouvoiement"}
};
})();


// A2.6 — Llovía cuando llegué : imparfait + passé simple — leçon 218
(function(){
function blk(name, rows){
  var v = __esB(name, rows);
  v.forEach(function(o, i){ o.emo = rows[i][4]; o.ex = [rows[i][5], rows[i][6]]; });
  return v;
}
var V = [].concat(
 blk("Les connecteurs du récit : l'événement qui arrive", [
  ["de repente","/de reˈpente/","soudain","Annonce un événement imprévu : passé simple. « De repente, sonó el teléfono ».","⚡","De repente, sonó el teléfono.","Soudain, le téléphone a sonné."],
  ["un día","/un ˈdia/","un jour","Un moment précis : passé simple. « Un día conocí a Ana ».","📍","Un día conocí a Ana.","Un jour j'ai rencontré Ana."],
  ["una vez","/ˈuna beθ/","une fois","Une fois : passé simple. Différent de « a menudo » (imparfait).","1️⃣","Una vez perdí las llaves.","Une fois j'ai perdu mes clés."],
  ["entonces","/enˈtonθes/","alors, à ce moment-là","Enchaîne deux événements : « Entonces salí ».","➡️","Entonces abrí la puerta.","Alors j'ai ouvert la porte."],
  ["cuando","/ˈkwando/","quand, lorsque","Relie un événement à un décor : « Llovía cuando llegué ».","🔗","Dormía cuando sonó el teléfono.","Je dormais quand le téléphone a sonné."],
  ["al final","/al fiˈnal/","à la fin, finalement","Clôt l'histoire. « Al final, no fuimos ».","🏁","Al final, no salimos.","Finalement, nous ne sommes pas sortis."],
  ["primero · después · por último","/pɾiˈmeɾo · desˈpwes/","d'abord · ensuite · enfin","Ordre du récit. Chaque étape = passé simple.","🔢","Primero comí, después salí.","D'abord j'ai mangé, ensuite je suis sorti."],
  ["ese día","/ˈese ˈdia/","ce jour-là","« Ese día » pointe un jour précis. « Ese día llovía » (décor) / « Ese día llegué tarde » (événement).","📅","Ese día llovía mucho.","Ce jour-là, il pleuvait beaucoup."]
 ]),
 blk("Le décor : ce qui durait déjà", [
  ["llovía cuando…","/ʎoˈβia ˈkwando/","il pleuvait quand…","Décor (imparfait) + événement (passé simple).","🌧️","Llovía cuando llegué a casa.","Il pleuvait quand je suis arrivé à la maison."],
  ["estaba cansado/a","/esˈtaβa kanˈsaðo/","j'étais fatigué","estar à l'imparfait : estaba, estabas, estaba… État du moment.","😮‍💨","Estaba muy cansada.","J'étais très fatiguée."],
  ["estaba + gérondif","/esˈtaβa/","j'étais en train de…","Action en cours dans le passé. Gérondif : -AR → -ando, -ER / -IR → -iendo : « Estaba cocinando ».","🍳","Estaba cocinando cuando llamó Ana.","J'étais en train de cuisiner quand Ana a appelé."],
  ["cocinando · comiendo · durmiendo","/koθiˈnando · koˈmjendo/","en cuisinant · en mangeant · en dormant","Gérondif : jamais d'accord. Dormir → durmiendo (o → u).","🔁","Comía viendo la tele.","Je mangeais en regardant la télé."],
  ["sonar → sonó","/soˈnaɾ · soˈno/","sonner → a sonné","« Sonó el teléfono » = le téléphone a sonné (une fois). « Sonaba » = il sonnait (en continu).","📞","Sonó el teléfono a las ocho.","Le téléphone a sonné à huit heures."],
  ["la llamada","/la ʎaˈmaða/","l'appel","Féminin. « Recibí una llamada » = j'ai reçu un appel.","☎️","Recibí una llamada importante.","J'ai reçu un appel important."],
  ["el ruido","/el ˈrwiðo/","le bruit","Masculin. « Oí un ruido ».","🔊","Oí un ruido en la calle.","J'ai entendu un bruit dans la rue."],
  ["había mucha gente","/aˈβia ˈmutʃa ˈxente/","il y avait beaucoup de monde","« Gente » est singulier : « mucha gente ». Había = hay au passé (décor).","👥","Había mucha gente en la plaza.","Il y avait beaucoup de monde sur la place."]
 ]),
 blk("Événements : verbes du récit", [
  ["caerse → me caí","/kaˈeɾse · me kaˈi/","tomber → je suis tombé","me caí · te caíste · se cayó · nos caímos · se cayeron. i → y à la 3e personne (comme leer).","🤕","Me caí en la calle.","Je suis tombé dans la rue."],
  ["romperse → se rompió","/romˈpeɾse/","se casser","Pronominal : « El vaso se rompió » = le verre s'est cassé.","💥","El vaso se rompió.","Le verre s'est cassé."],
  ["entrar → entré","/enˈtɾaɾ · enˈtɾe/","entrer → je suis entré","« Entré en la tienda ». Verbe régulier.","🚪","Entré en la tienda.","Je suis entré dans le magasin."],
  ["perder → perdí","/peɾˈðeɾ · peɾˈði/","perdre → j'ai perdu","« Perdí el tren » = j'ai raté le train.","🚂","Perdí el tren de las ocho.","J'ai raté le train de huit heures."],
  ["el accidente","/el akθiˈðente/","l'accident","Masculin. « Hubo un accidente » = il y a eu un accident.","🚑","Hubo un accidente en la calle.","Il y a eu un accident dans la rue."],
  ["el susto","/el ˈsusto/","la peur, le sursaut","« ¡Qué susto! » = quelle frayeur !","😱","¡Qué susto me llevé!","Quelle frayeur j'ai eue !"],
  ["llamar → llamó","/ʎaˈmaɾ · ʎaˈmo/","appeler → il a appelé","« Ana llamó a las diez ». Régulier.","📲","Ana llamó a las diez.","Ana a appelé à dix heures."]
 ]),
 blk("Les verbes qui changent de sens", [
  ["saber : sabía / supe","/saˈβeɾ · saˈβia · ˈsupe/","savoir / apprendre","Imparfait : « sabía » = je savais. Passé simple : « supe » = j'ai appris, j'ai su (à ce moment-là).","💡","Ayer supe la noticia.","Hier j'ai appris la nouvelle."],
  ["conocer : conocía / conocí","/konoˈθeɾ · konoˈθia · konoˈθi/","connaître / rencontrer","« Conocía a Ana » = je connaissais Ana. « Conocí a Ana en 2019 » = j'ai fait sa connaissance.","🤝","Conocí a Luis en una fiesta.","J'ai rencontré Luis lors d'une fête."],
  ["querer : quería / quise","/keˈɾia · ˈkise/","vouloir / essayer, refuser","« Quería salir » = j'avais envie de sortir. « Quise salir » = j'ai essayé. « No quise » = j'ai refusé.","🎯","No quise ir a la fiesta.","Je n'ai pas voulu aller à la fête."],
  ["poder : podía / pude","/poˈðia · ˈpuðe/","pouvoir / réussir","« Podía » = j'étais capable. « Pude » = j'ai réussi. « No pude » = je n'y suis pas arrivé.","🏆","Por fin pude hablar con él.","Enfin, j'ai pu lui parler."],
  ["tener que → tuve que","/teˈneɾ ke · ˈtuβe ke/","devoir → j'ai dû","« Tuve que salir » = j'ai dû sortir (et je l'ai fait). « Tenía que salir » = je devais (situation).","⚠️","Tuve que salir temprano.","J'ai dû partir tôt."]
 ]),
 blk("Détails d'une scène", [
  ["el golpe","/el ˈɡolpe/","le coup, le choc","« Oí un golpe en la puerta » = j'ai entendu un coup à la porte.","🚪","Oí un golpe en la puerta.","J'ai entendu un coup à la porte."],
  ["el pasillo","/el paˈsiʎo/","le couloir","Masculin ; ll = y.","🛤️","Había un ruido en el pasillo.","Il y avait un bruit dans le couloir."],
  ["el suelo","/el ˈswelo/","le sol, par terre","« En el suelo » = par terre.","🧱","El vaso estaba en el suelo.","Le verre était par terre."],
  ["la ventana","/la benˈtana/","la fenêtre","Féminin. « Mirar por la ventana ».","🪟","Miré por la ventana.","J'ai regardé par la fenêtre."],
  ["el viento","/el ˈbjento/","le vent","Masculin. « Hacía viento » = il y avait du vent.","💨","Era solo el viento.","Ce n'était que le vent."],
  ["nadie","/ˈnaðje/","personne","« No había nadie » = il n'y avait personne (double négation).","🚫","No había nadie en casa.","Il n'y avait personne à la maison."],
  ["coger → cogió","/koˈxeɾ · koˈxjo/","prendre → il a pris","« Cogió el abrigo ». En Amérique latine, évite « coger » (autre sens) et dis « tomar ».","🧥","Cogió el abrigo y salió.","Il a pris son manteau et il est sorti."]
 ]),
 blk("Poser les questions : tú ET usted", [
  ["¿Qué pasó?","/ke paˈso/","Que s'est-il passé ?","pasar → pasó (él). Réponse : récit au passé simple.","🎤","¿Qué pasó ayer?","Que s'est-il passé hier ?"],
  ["¿Qué estabas haciendo?","/ke esˈtaβas aˈθjendo/","Que faisais-tu (à ce moment-là) ?","Avec usted : « ¿Qué estaba haciendo usted? ». Gérondif de hacer : haciendo.","❓","¿Qué estaba haciendo usted?","Que faisiez-vous à ce moment-là ?"],
  ["¿Cómo fue?","/ˈkomo fwe/","Comment ça s'est passé ?","Jugement final : passé simple. Si tu décris le décor : « ¿Cómo era? ».","🗣️","¿Cómo fue el accidente?","Comment s'est passé l'accident ?"]
 ]),
 blk("Informel et prononciation", [
  ["¡Qué fuerte!","/ke ˈfweɾte/","C'est dingue !","Espagne, informel. Réaction à une histoire.","😮","—Perdí el tren. —¡Qué fuerte!","— J'ai raté le train. — C'est dingue !"],
  ["¡No me lo puedo creer!","/no me lo ˈpweðo kɾeˈeɾ/","Je n'arrive pas à y croire !","Formule d'étonnement informelle.","🤯","¡No me lo puedo creer!","Je n'arrive pas à y croire !"],
  ["sonó · llamó · entré","/soˈno · ʎaˈmo/","accent final du passé simple","Au passé simple, l'accent est sur la fin (sonó, llamó, entré). À l'imparfait, il tombe ailleurs (sonaba, llamaba, entraba).","🔊","Sonaba el teléfono y entré.","Le téléphone sonnait et je suis entré."]
 ])
);

LESSONS_ES[218] = {
 code:"A2.6", level:"A2",
 VOCAB: V,
 MEM_WORDS: __esIdx(V, ["de repente","un día","cuando","llovía cuando…","estaba + gérondif","sonar → sonó","caerse → me caí","saber : sabía / supe","conocer : conocía / conocí","¡Qué fuerte!"]),
 MINI_CHECKS: [
  {q:"Le décor (ce qui durait) se met :", opts:["à l'imparfait","au passé simple"], correct:0, fb:"Décor, description, habitude : imparfait."},
  {q:"L'événement (ce qui arrive) se met :", opts:["à l'imparfait","au passé simple"], correct:1, fb:"Événement ponctuel : passé simple."},
  {q:"« Il pleuvait quand je suis arrivé » :", opts:["Llovía cuando llegué.","Llovió cuando llegaba."], correct:0, fb:"Décor (llovía) + événement (llegué)."},
  {q:"« Soudain, le téléphone a sonné » :", opts:["De repente, sonaba el teléfono.","De repente, sonó el teléfono."], correct:1, fb:"« De repente » annonce un événement : passé simple."},
  {q:"« J'ai rencontré Ana » :", opts:["Conocía a Ana.","Conocí a Ana."], correct:1, fb:"conocí = j'ai fait sa connaissance ; conocía = je la connaissais."},
  {q:"« J'étais en train de cuisiner » :", opts:["Estaba cocinando.","Estuve cocinando."], correct:0, fb:"estaba + gérondif : action en cours. Gérondif de cocinar : cocinando."},
  {q:"Le gérondif de comer :", opts:["comiendo","comando","comendo"], correct:0, fb:"-ER / -IR → -iendo."},
  {q:"« Je suis tombé » :", opts:["Me caí.","Me caía."], correct:0, fb:"Événement : me caí."}
 ],
 ROUNDS: [
  __esR("Llovía cuando llegué a casa.","Il pleuvait quand je suis arrivé à la maison."),
  __esR("De repente, sonó el teléfono.","Soudain, le téléphone a sonné."),
  __esR("Dormía cuando llamó Ana.","Je dormais quand Ana a appelé."),
  __esR("Estaba cocinando cuando oí un ruido.","J'étais en train de cuisiner quand j'ai entendu un bruit."),
  __esR("Un día conocí a Luis en una fiesta.","Un jour j'ai rencontré Luis lors d'une fête."),
  __esR("Había mucha gente en la plaza.","Il y avait beaucoup de monde sur la place."),
  __esR("Ayer supe la noticia.","Hier j'ai appris la nouvelle."),
  __esR("Me caí en la calle.","Je suis tombé dans la rue."),
  __esR("¿Qué estaba haciendo usted?","Que faisiez-vous à ce moment-là ?"),
  __esR("Perdí el tren de las ocho.","J'ai raté le train de huit heures."),
  __esR("Hacía frío y entré en la tienda.","Il faisait froid et je suis entré dans le magasin."),
  __esR("Al final, no salimos.","Finalement, nous ne sommes pas sortis."),
  __esR("¡No me lo puedo creer!","Je n'arrive pas à y croire !")
 ],
 QUIZ: [
  {cat:"ecrit", q:"« Il pleuvait quand je suis sorti. »", opts:["Llovía cuando salí.","Llovió cuando salía.","Llovía cuando salía."], correct:0, why:"Décor : llovía. Événement : salí."},
  {cat:"ecrit", q:"Yo ___ cuando sonó el teléfono. (dormir)", opts:["dormí","dormía","duermo"], correct:1, why:"Action en cours quand l'événement arrive : imparfait."},
  {cat:"ecrit", q:"De repente, ___ un ruido. (oír, yo)", opts:["oía","oí","oigo"], correct:1, why:"« De repente » : événement, passé simple."},
  {cat:"ecrit", q:"Ese día ___ mucho frío. (hacer)", opts:["hizo","hacía","hace"], correct:1, why:"Décor météo : hacía."},
  {cat:"ecrit", q:"Ayer yo ___ la noticia. (saber : j'ai appris)", opts:["sabía","supe","sé"], correct:1, why:"supe = j'ai appris, à un moment précis."},
  {cat:"ecrit", q:"Antes yo ___ a Luis. (conocer : je connaissais)", opts:["conocí","conocía","conozco"], correct:1, why:"Situation passée : conocía."},
  {cat:"ecrit", q:"Mi hermana ___ en la calle. (caerse)", opts:["se cayó","se caía","se cae"], correct:0, why:"Événement : se cayó (i → y)."},
  {cat:"ecrit", q:"Estaba ___ cuando llamó Ana. (cocinar)", opts:["cocinado","cocinando","cocinar"], correct:1, why:"estaba + gérondif : cocinando."},
  {cat:"ecrit", q:"Estábamos ___ cuando llegó. (comer)", opts:["comiendo","comando","comendo"], correct:0, why:"-ER → -iendo : comiendo."},
  {cat:"ecrit", q:"« Il y avait beaucoup de monde. »", opts:["Hubo mucha gente.","Había mucha gente.","Hay mucha gente."], correct:1, why:"Décor : había (invariable)."},
  {cat:"ecrit", q:"« Je n'ai pas pu arriver à l'heure. »", opts:["No podía llegar a tiempo.","No pude llegar a tiempo."], correct:1, why:"Résultat négatif ponctuel : pude."},
  {cat:"ecrit", q:"Vouvoiement : « ¿Qué ___ usted cuando llegué ? » (estar haciendo)", opts:["estaba haciendo","estabas haciendo","estuvo haciendo"], correct:0, why:"usted → estaba."},
  {cat:"ecrit", q:"« Un jour, j'ai perdu mes clés. »", opts:["Un día perdía las llaves.","Un día perdí las llaves."], correct:1, why:"« Un día » : événement, passé simple."},
  {cat:"ecrit", q:"Todos los veranos nosotros ___ a la playa. (ir)", opts:["fuimos","íbamos"], correct:1, why:"Habitude : íbamos."},
  {cat:"oral", audio:"Llovía cuando llegué.", q:"Écoute : quel est l'événement ?", opts:["Il pleuvait","Il est arrivé","Il est parti"], correct:1, why:"« llegué » est l'événement ; « llovía » est le décor."},
  {cat:"oral", audio:"Estaba cocinando cuando sonó el teléfono.", q:"Écoute : que faisait-il ?", opts:["Il dormait","Il cuisinait","Il mangeait"], correct:1, why:"« estaba cocinando »."},
  {cat:"oral", audio:"Ayer conocí a una chica muy simpática.", q:"Écoute : qu'a-t-il fait ?", opts:["Il a rencontré une fille","Il a perdu ses clés","Il a voyagé"], correct:0, why:"« conocí » = j'ai rencontré."},
  {cat:"oral", audio:"De repente, hubo un ruido.", q:"Écoute : que s'est-il passé ?", opts:["Il a plu","Il y a eu un bruit","Il a fait chaud"], correct:1, why:"« De repente, hubo un ruido »."},
  {cat:"oral", audio:"¿Qué estaba haciendo usted?", q:"Écoute : la question est :", opts:["Au tutoiement","Au vouvoiement","À un enfant"], correct:1, why:"« usted » : vouvoiement."},
  {cat:"comprehension", passage:"Ana: ¿Qué pasó ayer? — Luis: Estaba en casa y hacía mucho frío. Cocinaba cuando, de repente, sonó el teléfono. Era mi hermana. Me dijo que había un accidente en su calle. Entonces salí corriendo.", q:"Que faisait Luis quand le téléphone a sonné ?", opts:["Il cuisinait","Il dormait","Il lisait"], correct:0, why:"« Cocinaba cuando sonó el teléfono »."},
  {cat:"comprehension", passage:"Ana: ¿Qué pasó ayer? — Luis: Estaba en casa y hacía mucho frío. Cocinaba cuando, de repente, sonó el teléfono. Era mi hermana. Me dijo que había un accidente en su calle. Entonces salí corriendo.", q:"Qui appelait ?", opts:["Sa sœur","Un ami","Le chef"], correct:0, why:"« Era mi hermana »."},
  {cat:"comprehension", passage:"Ana: ¿Qué pasó ayer? — Luis: Estaba en casa y hacía mucho frío. Cocinaba cuando, de repente, sonó el teléfono. Era mi hermana. Me dijo que había un accidente en su calle. Entonces salí corriendo.", q:"Qu'a fait Luis ensuite ?", opts:["Il est sorti en courant","Il s'est rendormi","Il a mangé"], correct:0, why:"« salí corriendo »."},
  {cat:"comprehension", passage:"Policía: Buenas noches, señora. ¿Qué estaba haciendo usted cuando oyó el ruido? — Señora: Veía la tele. Entonces oí un golpe en la puerta y me levanté. — Policía: ¿Había alguien? — Señora: No, no había nadie.", q:"Que faisait la dame ?", opts:["Elle regardait la télé","Elle dormait","Elle cuisinait"], correct:0, why:"« Veía la tele »."},
  {cat:"comprehension", passage:"Policía: Buenas noches, señora. ¿Qué estaba haciendo usted cuando oyó el ruido? — Señora: Veía la tele. Entonces oí un golpe en la puerta y me levanté. — Policía: ¿Había alguien? — Señora: No, no había nadie.", q:"Le policier s'adresse à la dame :", opts:["Au tutoiement","Au vouvoiement","À un enfant"], correct:1, why:"« señora » et « usted » : vouvoiement."}
 ],
 PRON_VERBS: [
  {en:"llegué · llegaba", fr:"je suis arrivé · j'arrivais (ye-GUÉ, ye-GA-ba : g dur devant é)"},
  {en:"sonó · sonaba", fr:"il a sonné · il sonnait (so-NÓ, so-NA-ba)"},
  {en:"entré · entraba", fr:"je suis entré · j'entrais (en-TRÉ, en-TRA-ba)"},
  {en:"estaba cocinando", fr:"j'étais en train de cuisiner (es-TA-ba ko-si-NAN-do)"},
  {en:"comiendo · durmiendo", fr:"en mangeant · en dormant (ko-MIEN-do, dur-MIEN-do)"},
  {en:"me caí · se cayó", fr:"je suis tombé · il est tombé (me ka-Í, se ka-YÓ)"},
  {en:"supe · sabía", fr:"j'ai appris · je savais (SU-pe, sa-BÍ-a)"},
  {en:"conocí · conocía", fr:"j'ai rencontré · je connaissais (ko-no-SÍ, ko-no-SÍ-a)"},
  {en:"De repente…", fr:"Soudain… (de re-PEN-te)"},
  {en:"¡Qué fuerte!", fr:"C'est dingue ! (ke FUER-te)"}
 ],
 READING: [
  "Ese sábado hacía mucho frío y llovía en toda la ciudad.",
  "Marta estaba en casa y preparaba la cena cuando, de repente, sonó el teléfono.",
  "Era su hermana, que estaba muy nerviosa.",
  "—Había un accidente en mi calle y no podía salir —dijo su hermana.",
  "Marta dejó la cena, cogió su abrigo y salió a la calle.",
  "Cuando llegó, había mucha gente y la policía ya estaba allí.",
  "Su hermana lloraba, pero no tenía nada grave.",
  "Entonces Marta la abrazó y las dos entraron en casa.",
  "Después cenaron juntas y hablaron hasta las once.",
  "—¡Qué susto! —dijo Marta—. Al final, todo salió bien."
 ],
 GLOSS: [
  {en:"preparaba la cena", fr:"préparait le dîner (imparfait : action en cours)"},
  {en:"nerviosa", fr:"nerveuse, inquiète"},
  {en:"dejó · cogió", fr:"elle a laissé · elle a pris (passé simple)"},
  {en:"el abrigo", fr:"le manteau"},
  {en:"lloraba", fr:"pleurait (imparfait : elle pleurait en continu)"},
  {en:"nada grave", fr:"rien de grave"},
  {en:"la abrazó", fr:"l'a serrée dans ses bras (« la » = elle, objet : voir A2.8)"},
  {en:"salió bien", fr:"s'est bien passé"}
 ],
 GRAMMAR1: {
  heading:"Imparfait ou passé simple ? Le décor et l'événement",
  lede:"Dans une histoire, il y a deux plans : le décor (ce qui durait déjà) et l'événement (ce qui arrive, ce qui interrompt). L'imparfait dessine le décor ; le passé simple fait avancer l'histoire. Cette leçon te donne la méthode pour choisir à chaque fois.",
  conj:[
   ["yo →","llovía · llegué","Llovía cuando llegué. Dormía cuando llamó Ana."],
   ["tú →","estabas · llegaste","¿Qué hacías cuando llegué? ¿Cuándo llegaste?"],
   ["él, ella, usted →","había · sonó","Había mucha gente. De repente, sonó el teléfono."],
   ["nosotros/as →","cenábamos · salimos","Cenábamos cuando salimos."],
   ["vosotros/as →","estabais · llegasteis","¿Dónde estabais cuando llegasteis?"],
   ["ellos, ellas, ustedes →","jugaban · entraron","Jugaban cuando entraron los padres."]
  ],
  ruleHtml:"🎬 <b>1. La méthode du film.</b> Le <b>décor</b> = imparfait : <i>Hacía frío. Llovía. Ana tenía diez años. Había mucha gente.</i> L'<b>événement</b> = passé simple : <i>Llegué. Sonó el teléfono. Me caí.</i> L'événement <b>interrompt</b> le décor : <i>Dormía cuando sonó el teléfono.</i><br><br>🔑 <b>2. Les mots-signaux.</b> <b>Imparfait</b> : antes, siempre, todos los días, a menudo, mientras, cuando era niño. <b>Passé simple</b> : de repente, un día, una vez, ayer, entonces, anoche, a las ocho. Ce sont des repères, pas des lois : le sens décide.<br><br>🔄 <b>3. Deux actions successives = deux passés simples.</b> <i>Entré, vi a Ana y la saludé.</i> <b>Deux actions parallèles = deux imparfaits.</b> <i>Mientras yo cocinaba, él veía la tele.</i><br><br>🍳 <b>4. Estaba + gérondif.</b> Pour insister sur « en train de » : <b>estaba cocinando</b>. Gérondif : <b>-AR → -ando</b>, <b>-ER / -IR → -iendo</b> (comiendo, viviendo). Irréguliers : dormir → <b>durmiendo</b>, pedir → <b>pidiendo</b>, leer → <b>leyendo</b>. Avec le gérondif, tu choisis souvent entre « Cocinaba » et « Estaba cocinando » : les deux sont corrects.<br><br>⚠️ <b>5. Les verbes qui changent de sens.</b> <b>saber</b> : sabía (je savais) / supe (j'ai appris). <b>conocer</b> : conocía (je connaissais) / conocí (j'ai rencontré). <b>querer</b> : quería (j'avais envie) / quise (j'ai essayé) / no quise (j'ai refusé). <b>poder</b> : podía (j'étais capable) / pude (j'ai réussi) / no pude (je n'y suis pas arrivé). <b>tener que</b> : tenía que (je devais) / tuve que (j'ai dû, et je l'ai fait).<br><br>🧭 <b>6. « Había » et « hubo ».</b> <b>Había</b> décrit : <i>Había mucha gente.</i> <b>Hubo</b> raconte : <i>Hubo un accidente.</i> De même : « Era un día frío » (décor) / « Fue un día genial » (jugement final).<br><br>👥 <b>7. Tutoiement ET vouvoiement.</b> tú → <b>¿Qué hacías cuando llegué? ¿Qué pasó?</b> · usted → <b>¿Qué hacía usted cuando llegué? ¿Qué estaba haciendo usted?</b>",
  dialogueLede:"Deux amis racontent une soirée (tutoiement) :",
  dialogue:[
   {who:"them", en:"¿Qué pasó ayer? Te llamé y no contestaste.", fr:"Que s'est-il passé hier ? Je t'ai appelé et tu n'as pas répondu."},
   {who:"you", en:"Dormía cuando llamaste. Estaba muy cansada.", fr:"Je dormais quand tu as appelé. J'étais très fatiguée."},
   {who:"them", en:"¿Y cuándo te despertaste?", fr:"Et quand t'es-tu réveillée ?"},
   {who:"you", en:"De repente, oí un ruido. Entonces me levanté y miré por la ventana.", fr:"Soudain, j'ai entendu un bruit. Alors je me suis levée et j'ai regardé par la fenêtre."},
   {who:"them", en:"¿Y qué viste?", fr:"Et qu'as-tu vu ?"},
   {who:"you", en:"Nada. Era el viento. ¡Qué susto!", fr:"Rien. C'était le vent. Quelle frayeur !"}
  ],
  whyLabel:"Pourquoi ce choix est-il si important ?",
  whyText:"Le français fait la même chose (« il pleuvait quand je suis arrivé »), donc tu as déjà le réflexe. Le piège vient des verbes d'état d'esprit : « conocí » ne veut pas dire « je connaissais » mais « j'ai rencontré » ; « supe » = « j'ai appris ». Chaque fois que le verbe parle d'un début (je l'ai rencontré, j'ai appris, j'ai voulu essayer), l'espagnol passe au passé simple. Quand il parle de la durée d'un état, il garde l'imparfait. Une astuce simple pour t'entraîner : transforme ta phrase en film. Si tu vois une scène fixe (la plage, la pluie, la pièce), c'est l'imparfait. Si quelque chose bouge ou arrive dans la scène (un cri, un appel, une chute), c'est le passé simple. Raconte ta dernière sortie à voix haute : tu verras que ton cerveau fait déjà ce tri."
 },
 GRAMMAR2: {
  heading:"Raconter une histoire complète : début, déroulement, fin",
  dialogueLede:"Un client raconte un problème à la réception (vouvoiement) :",
  dialogue:[
   {who:"them", en:"Buenos días, señor. ¿Qué pasó anoche?", fr:"Bonjour, monsieur. Que s'est-il passé hier soir ?"},
   {who:"you", en:"Dormía cuando oí un ruido muy fuerte en el pasillo.", fr:"Je dormais quand j'ai entendu un bruit très fort dans le couloir."},
   {who:"them", en:"¿Qué hizo usted entonces?", fr:"Qu'avez-vous fait alors ?"},
   {who:"you", en:"Abrí la puerta, pero no había nadie. Un vaso se rompió en el suelo.", fr:"J'ai ouvert la porte, mais il n'y avait personne. Un verre s'est cassé par terre."},
   {who:"them", en:"Lo siento mucho. ¿Pudo usted dormir después?", fr:"Je suis désolé. Avez-vous pu dormir après ?"},
   {who:"you", en:"Al final, sí. Dormí hasta las ocho.", fr:"Finalement, oui. J'ai dormi jusqu'à huit heures."}
  ],
  ruleHtml:"🧱 <b>1. Le plan d'un récit.</b> <b>Début</b> (décor, imparfait) : <i>Eran las ocho y llovía.</i> <b>Déroulement</b> (événements, passé simple) : <i>Entré, vi… y salí.</i> <b>Fin</b> : <i>Al final, todo salió bien.</i> Chaque phrase peut mélanger les deux temps.<br><br>🔗 <b>2. Les connecteurs.</b> <b>primero · luego · después · entonces · de repente · por fin · al final</b>. Ils annoncent un événement : passé simple.<br><br>⏱️ <b>3. La durée précise.</b> Si tu donnes une durée limitée avec un début et une fin, passé simple : <i>Viví tres años en Lyon.</i> <i>Dormí hasta las ocho.</i> Si tu parles d'une habitude sans limite, imparfait : <i>Vivía en Lyon.</i><br><br>🔄 <b>4. Une même phrase, deux sens.</b> <i>Era médico.</i> (il était médecin, c'était son métier) / <i>Fue médico</i> (il l'a été, c'est fini, comme un bilan). <i>Estaba cansado</i> (état du moment) / <i>Estuve cansado todo el día</i> (une période fermée).<br><br>🗣️ <b>5. Réagir à une histoire.</b> <b>¡Qué fuerte!</b> (c'est dingue), <b>¡No me lo puedo creer!</b> (je n'y crois pas), <b>¿En serio?</b> (vraiment ?), <b>¡Qué susto!</b> (quelle frayeur !). Avec un supérieur : <b>Lo siento mucho</b>, <b>Qué situación tan difícil</b>.<br><br>👥 <b>6. Tutoiement ET vouvoiement.</b> tú → <b>¿Qué pasó? ¿Qué hiciste después?</b> · usted → <b>¿Qué pasó? ¿Qué hizo usted después?</b> Pour demander poliment des détails : <b>¿Podría contarme lo que pasó?</b> (conditionnel : A2.11).",
  whyLabel:"Comment ne plus hésiter ?",
  whyText:"Pose-toi trois questions dans l'ordre. 1) Est-ce que j'ai un mot-signal clair (de repente, un día, ayer = passé simple ; siempre, antes, todos los días = imparfait) ? 2) Est-ce que le verbe décrit une scène (météo, âge, heure, état, nombre de personnes) ? Imparfait. 3) Est-ce que quelque chose commence, finit ou se produit une seule fois ? Passé simple. Dans 90 % des cas, la réponse est immédiate. Pour les 10 % restants (conocer, saber, querer, poder), mémorise les paires en gras et dis-les à voix haute : « conocía / conocí », « sabía / supe ». Ta mémoire retient mieux les paires que les règles."
 },
 REVIEW: [
  {q:"« Quand j'étais enfant, je vivais à Madrid » :", opts:["Cuando era niño, vivía en Madrid.","Cuando fui niño, viví en Madrid."], correct:0, fb:"Période longue : imparfait. (rappel A2.5)"},
  {q:"« J'avais dix ans » :", opts:["Tenía diez años.","Tuve diez años."], correct:0, fb:"L'âge est une description. (rappel A2.5)"},
  {q:"« Nous allions à la plage » (habitude) :", opts:["Íbamos a la playa.","Fuimos a la playa."], correct:0, fb:"Habitude : íbamos. (rappel A2.5)"},
  {q:"« Il faisait froid » :", opts:["Hacía frío.","Hizo frío."], correct:0, fb:"Décor : hacía. (rappel A2.5)"},
  {q:"Vouvoiement : « ¿Dónde ___ usted de niño ? » (vivir)", opts:["vivía","vivías"], correct:0, fb:"usted → vivía. (rappel A2.5)"}
 ],
 DRILLS: [
  {type:"fill", text:"Yo ___ cuando sonó el teléfono. (dormir, imparfait)", answers:["dormía","Dormía"], why:"Action en cours : imparfait."},
  {type:"fill", text:"De repente, ___ el teléfono. (sonar, passé simple)", answers:["sonó","Sonó"], why:"Événement : sonó."},
  {type:"fill", text:"Ese día ___ mucho. (llover, imparfait)", answers:["llovía","Llovía"], why:"Décor : llovía."},
  {type:"fill", text:"Un día yo ___ a Ana. (conocer, rencontrer)", answers:["conocí","Conocí"], why:"conocí = j'ai rencontré."},
  {type:"fill", text:"Ayer ___ la noticia. (saber : j'ai appris)", answers:["supe","Supe"], why:"supe = j'ai appris."},
  {type:"fill", text:"Yo ___ a Luis desde niño. (conocer : je connaissais)", answers:["conocía","Conocía"], why:"Situation durable : conocía."},
  {type:"fill", text:"___ mucha gente en la plaza. (haber, imparfait)", answers:["Había","había"], why:"Décor : había."},
  {type:"fill", text:"___ un accidente en la calle. (haber, passé simple)", answers:["Hubo","hubo"], why:"Événement : hubo."},
  {type:"fill", text:"Estaba ___ cuando llamó. (comer)", answers:["comiendo","Comiendo"], why:"-ER → -iendo."},
  {type:"fill", text:"Estábamos ___ cuando llegó. (cocinar)", answers:["cocinando","Cocinando"], why:"-AR → -ando."},
  {type:"fill", text:"Mi hermana ___ en la calle. (caerse)", answers:["se cayó","Se cayó"], why:"se cayó (i → y)."},
  {type:"fill", text:"Yo ___ el tren. (perder, passé simple)", answers:["perdí","Perdí"], why:"perder → perdí."},
  {type:"fill", text:"Nosotros ___ en la tienda. (entrar, passé simple)", answers:["entramos","Entramos"], why:"nosotros → entramos."},
  {type:"fill", text:"Yo no ___ llegar. (poder : je n'y suis pas arrivé)", answers:["pude","Pude"], why:"pude = réussi / pas réussi."},
  {type:"fill", text:"Yo ___ salir temprano. (tener que : j'ai dû)", answers:["tuve que","Tuve que"], why:"tuve que = j'ai dû."},
  {type:"fill", text:"Mientras yo cocinaba, él ___ la tele. (ver, imparfait)", answers:["veía","Veía"], why:"Action parallèle : veía."},
  {type:"fill", text:"¿Qué ___ usted cuando llegué? (hacer, imparfait)", answers:["hacía","Hacía"], why:"usted → hacía."},
  {type:"fill", text:"Ese día yo ___ cansada. (estar, imparfait)", answers:["estaba","Estaba"], why:"État du moment : estaba."},
  {type:"choice", q:"« De repente » est suivi de :", opts:["passé simple","imparfait"], correct:0, why:"Événement soudain : passé simple."},
  {type:"choice", q:"« Siempre » appelle :", opts:["imparfait","passé simple"], correct:0, why:"Habitude : imparfait."},
  {type:"choice", q:"« J'ai rencontré Ana » :", opts:["Conocí a Ana.","Conocía a Ana."], correct:0, why:"Début de connaissance : passé simple."},
  {type:"choice", q:"« Il y avait beaucoup de monde » :", opts:["Había mucha gente.","Hubo mucha gente."], correct:0, why:"Décor : había."},
  {type:"choice", q:"« Il dormait quand je suis arrivé » :", opts:["Dormía cuando llegué.","Dormí cuando llegaba."], correct:0, why:"Décor + événement."},
  {type:"choice", q:"Gérondif de dormir :", opts:["durmiendo","dormiendo"], correct:0, why:"o → u."},
  {type:"choice", q:"Avec usted :", opts:["¿Qué estaba haciendo usted?","¿Qué estabas haciendo usted?"], correct:0, why:"usted → estaba."}
 ],
 ANNOTATED: {
  title:"Quatre phrases de récit",
  intro:"Quatre phrases qui mélangent décor et événement. Touche chaque mot pour voir sa nature et sa traduction.",
  sentences:[
   {fr:"Il pleuvait quand je suis arrivé.", tokens:[
    {w:"Llovía", tag:"verbe", info:"llover · imparfait", fr:"il pleuvait", tip:"Décor."},
    {w:"cuando", tag:"conjonction", fr:"quand"},
    {w:"llegué", tag:"verbe", info:"llegar · passé simple · yo", fr:"je suis arrivé", tip:"g → gu devant é. Événement."}
   ]},
   {fr:"Soudain, le téléphone a sonné.", tokens:[
    {w:"De repente", tag:"locution", info:"signal d'événement", fr:"soudain"},
    {w:"sonó", tag:"verbe", info:"sonar · passé simple", fr:"a sonné", tip:"Accent final."},
    {w:"el", tag:"article", info:"défini · masc. sing.", fr:"le"},
    {w:"teléfono", tag:"nom", info:"masc. sing.", fr:"téléphone"}
   ]},
   {fr:"J'étais en train de cuisiner.", tokens:[
    {w:"Estaba", tag:"verbe", info:"estar · imparfait · yo", fr:"j'étais"},
    {w:"cocinando", tag:"verbe", info:"gérondif", fr:"en train de cuisiner", tip:"-AR → -ando."}
   ]},
   {fr:"Qu'avez-vous fait alors ?", tokens:[
    {w:"¿Qué", tag:"pronom interrogatif", fr:"que"},
    {w:"hizo", tag:"verbe", info:"hacer · passé simple · usted", fr:"avez-vous fait"},
    {w:"usted", tag:"pronom sujet", info:"politesse", fr:"vous"},
    {w:"entonces?", tag:"adverbe", info:"enchaînement", fr:"alors"}
   ]}
  ]
 },
 CULTURE_NOTE: {icon:"🎬", title:"Culture, langage informel et fiche récap de A2.6",
  html:"<b>🎬 Culture : raconter une anecdote</b> Les Espagnols adorent raconter des anécdotes : « Te cuento… » (je te raconte). Le récit suit souvent le même schéma : décor, imprévu, réaction, fin. Les formules de début : « Resulta que… » (il se trouve que…), « Pues, estaba yo… » (alors, j'étais en train de…).<br><br><b>🗣️ Dix expressions pour raconter</b><br>1. <b>Resulta que…</b> = il se trouve que…<br>2. <b>Total, que…</b> = bref…<br>3. <b>Y de repente…</b> = et soudain…<br>4. <b>¿Y qué pasó?</b> = et alors, que s'est-il passé ?<br>5. <b>¡No me lo puedo creer!</b> = je n'y crois pas.<br>6. <b>¡Qué fuerte!</b> = c'est dingue.<br>7. <b>Lo mejor fue que…</b> = le meilleur, c'est que…<br>8. <b>Al final, nada</b> = au final, rien.<br>9. <b>Menudo susto</b> = quelle frayeur.<br>10. <b>Y colorín colorado…</b> = et c'est la fin de l'histoire (conte).<br>Avec un supérieur : « Permítame contarle lo que pasó ».<br><br><b>📋 Fiche récap A2.6</b><br>• <b>Imparfait</b> = décor : llovía, había, era, tenía, estaba.<br>• <b>Passé simple</b> = événement : sonó, llegué, entré.<br>• <b>Signaux</b> : siempre, antes (imp.) / de repente, un día, ayer (p. simple).<br>• <b>Gérondif</b> : -ando, -iendo ; estaba cocinando.<br>• <b>Changent de sens</b> : sabía / supe · conocía / conocí · quería / quise · podía / pude.<br>• <b>Tú ET usted</b> : ¿Qué hacías? / ¿Qué hacía usted?"},
 NEXT_PREVIEW:"A2.7 (Comparer) : comparer des personnes, des objets, des lieux : « más grande que », « tan rápido como », « el más bonito », et les comparatifs irréguliers (mejor, peor).",
 META:{vocabTitle:"Llovía cuando llegué : imparfait + passé simple (A2.6)", lectureTitle:"Un sábado de lluvia", bilanTitle:"Bravo, tu racontes de vraies histoires !", pronLabel:"Accent final du passé simple (sonó, entré), -aba à l'imparfait, gérondif -ando / -iendo", todayLede:"combiner décor (imparfait) et événement (passé simple) dans un même récit, utiliser estaba + gérondif, distinguer sabía / supe, conocía / conocí, et poser les questions en tutoiement ET en vouvoiement"}
};
})();


// A2.7 — Más grande que, tan rápido como : comparer — leçon 219
(function(){
function blk(name, rows){
  var v = __esB(name, rows);
  v.forEach(function(o, i){ o.emo = rows[i][4]; o.ex = [rows[i][5], rows[i][6]]; });
  return v;
}
var V = [].concat(
 blk("Comparer : plus, moins, aussi", [
  ["más … que","/mas ke/","plus … que","Supériorité : « Madrid es más grande que Lyon ». Le adjectif ne change pas à cause de « más », mais il s'accorde avec le sujet.","➕","Mi casa es más grande que la tuya.","Ma maison est plus grande que la tienne."],
  ["menos … que","/ˈmenos ke/","moins … que","Infériorité : « El tren es menos rápido que el avión ».","➖","El tren es menos caro que el avión.","Le train est moins cher que l'avion."],
  ["tan … como","/tan ˈkomo/","aussi … que","Égalité avec un adjectif ou un adverbe : « tan rápido como ». « Tan » ne change jamais.","🟰","Mi hermana es tan alta como yo.","Ma sœur est aussi grande que moi."],
  ["tanto/a/os/as … como","/ˈtanto ˈkomo/","autant de … que","Égalité avec un nom : s'accorde avec le nom. « Tengo tantos libros como tú ».","⚖️","Tengo tantos amigos como tú.","J'ai autant d'amis que toi."],
  ["más de · menos de","/mas ðe/","plus de · moins de (chiffre)","Devant un chiffre : « más de diez », pas « que ». « Había más de cien personas ».","🔢","Había más de cien personas.","Il y avait plus de cent personnes."],
  ["igual de … que","/iˈɣwal ðe/","tout aussi … que","Équivalent de « tan … como » : « Es igual de caro que el otro ».","🪞","Es igual de caro que el otro.","C'est tout aussi cher que l'autre."],
  ["mucho más · bastante más","/ˈmutʃo mas/","beaucoup plus · nettement plus","Pour renforcer : « mucho más rápido ». Jamais « muy más ».","⬆️","Es mucho más barato.","C'est beaucoup moins cher."],
  ["un poco más","/un ˈpoko mas/","un peu plus","Atténue : « un poco más grande ».","↗️","Es un poco más caro.","C'est un peu plus cher."]
 ]),
 blk("Adjectifs pour comparer", [
  ["caro · barato","/ˈkaɾo · baˈɾato/","cher · bon marché","S'accordent : cara, baratas.","💶","El coche es más caro que la moto.","La voiture est plus chère que la moto."],
  ["rápido · lento","/ˈrapiðo · ˈlento/","rapide · lent","Adverbes : « rápido » ou « rápidamente ».","⚡","El tren es más rápido que el autobús.","Le train est plus rapide que le bus."],
  ["grande · pequeño","/ˈɡɾande · peˈkeɲo/","grand · petit","« Grande » invariable au genre ; pluriel : grandes.","📐","Mi barrio es más pequeño que el tuyo.","Mon quartier est plus petit que le tien."],
  ["fácil · difícil","/ˈfaθil · diˈfiθil/","facile · difficile","Invariables au genre ; pluriel : fáciles, difíciles.","🧩","El español es más fácil que el ruso.","L'espagnol est plus facile que le russe."],
  ["cómodo · incómodo","/ˈkomoðo · inˈkomoðo/","confortable · inconfortable","S'accordent.","🛋️","La cama es muy cómoda.","Le lit est très confortable."],
  ["tranquilo · ruidoso","/tɾanˈkilo · rwiˈðoso/","calme · bruyant","Pour comparer des lieux : « un barrio más tranquilo ».","🤫","El campo es más tranquilo que la ciudad.","La campagne est plus calme que la ville."],
  ["antiguo · moderno","/anˈtiɣwo · moˈðeɾno/","ancien · moderne","S'accordent.","🏛️","Mi casa es más antigua que la tuya.","Ma maison est plus ancienne que la tienne."],
  ["peligroso · seguro","/peliˈɣɾoso · seˈɣuɾo/","dangereux · sûr","S'accordent.","⚠️","El avión es muy seguro.","L'avion est très sûr."]
 ]),
 blk("Comparatifs irréguliers (à connaître par cœur)", [
  ["bueno → mejor","/ˈbweno · meˈxoɾ/","bon → meilleur","Jamais « más bueno » pour la qualité. Pluriel : mejores. Même forme au masculin et au féminin.","👍","Este restaurante es mejor que el otro.","Ce restaurant est meilleur que l'autre."],
  ["malo → peor","/ˈmalo · peˈoɾ/","mauvais → pire","Pluriel : peores. « Peor » est aussi l'adverbe : « Canta peor ».","👎","Hoy el tiempo es peor que ayer.","Aujourd'hui le temps est pire qu'hier."],
  ["grande → mayor","/ˈɡɾande · maˈʝoɾ/","grand → plus âgé","Pour l'âge : « mi hermana mayor » = ma grande sœur. Pour la taille, on garde « más grande ».","👵","Mi hermano es mayor que yo.","Mon frère est plus âgé que moi."],
  ["pequeño → menor","/peˈkeɲo · meˈnoɾ/","petit → plus jeune","Pour l'âge : « mi hermano menor » = mon petit frère.","👶","Mi hermana es menor que yo.","Ma sœur est plus jeune que moi."],
  ["bien → mejor · mal → peor","/bjen · meˈxoɾ/","bien → mieux · mal → pire","Adverbes : « Hablo mejor español que antes ».","🗣️","Hablo mejor que antes.","Je parle mieux qu'avant."],
  ["mucho → más · poco → menos","/ˈmutʃo · mas/","beaucoup → plus · peu → moins","Après un verbe : « Trabajo más que tú ».","📊","Trabajo más que mi hermano.","Je travaille plus que mon frère."]
 ]),
 blk("Le superlatif : le plus, le moins", [
  ["el más … de","/el mas ðe/","le plus … de","« Es el más grande de la ciudad ». Après le superlatif, on dit « de » (jamais « que »).","🏆","Es el restaurante más caro de la ciudad.","C'est le restaurant le plus cher de la ville."],
  ["el menos … de","/el ˈmenos ðe/","le moins … de","« Es el menos caro de todos ».","🥉","Es el hotel menos caro de la zona.","C'est l'hôtel le moins cher de la zone."],
  ["el mejor · la peor","/el meˈxoɾ/","le meilleur · la pire","Avec l'article. Pluriel : los mejores, las peores.","🥇","Es el mejor restaurante de Madrid.","C'est le meilleur restaurant de Madrid."],
  ["-ísimo","/ˈisimo/","très, très… (superlatif absolu)","« Muy caro » → « carísimo ». « Grande » → « grandísimo ». S'accorde : carísima, carísimos.","💥","Esta casa es carísima.","Cette maison est hors de prix."],
  ["lo mejor · lo peor","/lo meˈxoɾ/","le mieux, le meilleur (chose)","Neutre : « Lo mejor es viajar en tren ».","💡","Lo mejor es viajar en tren.","Le mieux est de voyager en train."]
 ]),
 blk("Lieux et transports pour comparer", [
  ["la ciudad · el campo","/la θjuˈðað · el ˈkampo/","la ville · la campagne","Féminin · masculin.","🏙️","Prefiero el campo a la ciudad.","Je préfère la campagne à la ville."],
  ["el precio","/el ˈpɾeθjo/","le prix","Masculin. « Un precio bajo / alto ».","🏷️","El precio es muy alto.","Le prix est très élevé."],
  ["el barrio","/el ˈbarjo/","le quartier","Masculin.","🏘️","Vivo en un barrio tranquilo.","Je vis dans un quartier calme."],
  ["el tren · el avión · el autobús","/el tɾen · el aˈβjon/","le train · l'avion · le bus","Tous masculins. Pluriel : trenes, aviones, autobuses.","🚆","El avión es más rápido que el tren.","L'avion est plus rapide que le train."],
  ["el trabajo · el sueldo","/el tɾaˈβaxo · el ˈsweldo/","le travail · le salaire","Masculins.","💼","Mi trabajo es más interesante.","Mon travail est plus intéressant."],
  ["la naturaleza","/la natuɾaˈleθa/","la nature","Féminin. « Cerca de la naturaleza » = près de la nature.","🌿","Prefiero vivir cerca de la naturaleza.","Je préfère vivre près de la nature."],
  ["preferir","/pɾefeˈɾiɾ/","préférer","Diphtongue : prefiero, prefieres, prefiere. « Prefiero el té al café » (à, jamais « que »).","⭐","Prefiero el tren al avión.","Je préfère le train à l'avion."]
 ]),
 blk("Poser les questions : tú ET usted", [
  ["¿Cuál es más barato?","/kwal es mas baˈɾato/","Lequel est moins cher ?","« Cuál » pour choisir entre plusieurs.","❓","¿Cuál es más barato, el tren o el autobús?","Lequel est moins cher, le train ou le bus ?"],
  ["¿Cuál prefieres? / ¿Cuál prefiere usted?","/kwal pɾeˈfjeɾes/","Lequel préfères-tu ? / Lequel préférez-vous ?","tú → prefieres ; usted → prefiere.","🙋","¿Cuál prefiere usted?","Lequel préférez-vous ?"],
  ["¿Es mejor … o …?","/es meˈxoɾ o/","Vaut-il mieux … ou … ?","Pour demander un conseil.","🧭","¿Es mejor ir en tren o en coche?","Vaut-il mieux y aller en train ou en voiture ?"]
 ]),
 blk("Informel et prononciation", [
  ["¡Mucho mejor!","/ˈmutʃo meˈxoɾ/","Beaucoup mieux !","Réaction courante.","🙌","¡Mucho mejor así!","Beaucoup mieux comme ça !"],
  ["es lo mejor","/es lo meˈxoɾ/","c'est le top","Informel : « Es lo mejor » = c'est ce qu'il y a de mieux.","🌟","El café de aquí es lo mejor.","Le café d'ici, c'est le top."],
  ["j de mejor · mayor","/meˈxoɾ · maˈʝoɾ/","j rauque, y","« Mejor » : j rauque (comme le ch allemand). « Mayor » : y comme dans « yo ».","🔊","Mi hermano mayor vive mejor.","Mon grand frère vit mieux."]
 ])
);

LESSONS_ES[219] = {
 code:"A2.7", level:"A2",
 VOCAB: V,
 MEM_WORDS: __esIdx(V, ["más … que","menos … que","tan … como","tanto/a/os/as … como","bueno → mejor","malo → peor","grande → mayor","el más … de","-ísimo","¡Mucho mejor!"]),
 MINI_CHECKS: [
  {q:"« Plus grand que » :", opts:["más grande que","más grande de","tan grande que"], correct:0, fb:"más + adjectif + que."},
  {q:"« Aussi rapide que » :", opts:["tan rápido como","tan rápido que","tanto rápido como"], correct:0, fb:"tan + adjectif + como."},
  {q:"« Autant de livres que toi » :", opts:["tantos libros como tú","tan libros como tú"], correct:0, fb:"Devant un nom : tanto/a/os/as, qui s'accorde."},
  {q:"« Meilleur » :", opts:["más bueno","mejor"], correct:1, fb:"bueno → mejor (jamais « más bueno » pour la qualité)."},
  {q:"« Plus de dix personnes » :", opts:["más de diez personas","más que diez personas"], correct:0, fb:"Devant un chiffre : más de."},
  {q:"« Le plus grand de la ville » :", opts:["el más grande de la ciudad","el más grande que la ciudad"], correct:0, fb:"Après le superlatif : de."},
  {q:"« Mon frère est plus âgé que moi » :", opts:["Mi hermano es más mayor que yo.","Mi hermano es mayor que yo."], correct:1, fb:"mayor est déjà un comparatif : pas de « más »."},
  {q:"« Cher » avec -ísimo :", opts:["carísimo","caríssimo","muy carísimo"], correct:0, fb:"caro → carísimo : on retire la voyelle finale et on ajoute -ísimo (rico → riquísimo : c devient qu)."}
 ],
 ROUNDS: [
  __esR("Mi casa es más grande que la tuya.","Ma maison est plus grande que la tienne."),
  __esR("El tren es menos caro que el avión.","Le train est moins cher que l'avion."),
  __esR("Mi hermana es tan alta como yo.","Ma sœur est aussi grande que moi."),
  __esR("Tengo tantos amigos como tú.","J'ai autant d'amis que toi."),
  __esR("Este restaurante es mejor que el otro.","Ce restaurant est meilleur que l'autre."),
  __esR("Es el hotel más caro de la ciudad.","C'est l'hôtel le plus cher de la ville."),
  __esR("Había más de cien personas.","Il y avait plus de cent personnes."),
  __esR("Mi hermano mayor trabaja más que yo.","Mon grand frère travaille plus que moi."),
  __esR("El campo es más tranquilo que la ciudad.","La campagne est plus calme que la ville."),
  __esR("¿Cuál prefiere usted?","Lequel préférez-vous ?"),
  __esR("Lo mejor es viajar en tren.","Le mieux est de voyager en train."),
  __esR("Esta casa es carísima.","Cette maison est hors de prix."),
  __esR("Prefiero el tren al avión.","Je préfère le train à l'avion.")
 ],
 QUIZ: [
  {cat:"ecrit", q:"« Mon quartier est plus calme que le tien. »", opts:["Mi barrio es más tranquilo de el tuyo.", "Mi barrio es más tranquilo que el tuyo.", "Mi barrio es tan tranquilo que el tuyo."], correct:1, why:"más + adjectif + que."},
  {cat:"ecrit", q:"El tren es ___ rápido como el coche. (égalité)", opts:["tanto", "más", "tan"], correct:2, why:"tan + adjectif + como."},
  {cat:"ecrit", q:"Tengo ___ libros como tú. (égalité)", opts:["tan","tantos","tanto"], correct:1, why:"libros : masculin pluriel → tantos."},
  {cat:"ecrit", q:"Esta comida es ___ que la de ayer. (bueno)", opts:["más buena","mejor","más mejor"], correct:1, why:"bueno → mejor."},
  {cat:"ecrit", q:"El tiempo de hoy es ___ que ayer. (malo)", opts:["más malo", "peor", "más peor"], correct:1, why:"malo → peor."},
  {cat:"ecrit", q:"Mi hermana es ___ que yo. (plus âgée)", opts:["más mayor","mayor","más grande"], correct:1, why:"mayor pour l'âge, sans « más »."},
  {cat:"ecrit", q:"Es la ciudad más grande ___ país. (superlatif)", opts:["que el","del","como el"], correct:1, why:"Après le superlatif : de (de + el = del)."},
  {cat:"ecrit", q:"Había ___ de cien personas. (plus)", opts:["mas", "más que", "más"], correct:2, why:"Devant un chiffre : más de."},
  {cat:"ecrit", q:"Cette maison est très chère : « Esta casa es ___ ».", opts:["muy carísima", "carísima", "más carísima"], correct:1, why:"-ísimo remplace « muy » : carísima."},
  {cat:"ecrit", q:"Pour demander à un client : « ¿Cuál ___ usted ? » (preferir)", opts:["prefieres","prefiere","prefiero"], correct:1, why:"usted → prefiere (e → ie)."},
  {cat:"ecrit", q:"Je préfère le train à l'avion : « Prefiero el tren ___ avión. »", opts:["que el","al","de el"], correct:1, why:"preferir A : a + el = al."},
  {cat:"ecrit", q:"« Il travaille moins que moi. »", opts:["Trabaja menos de yo.", "Trabaja tan que yo.", "Trabaja menos que yo."], correct:2, why:"menos + que + pronom."},
  {cat:"ecrit", q:"« Mon grand frère » :", opts:["mi hermano mayor","mi hermano más grande","mi hermano grande más"], correct:0, why:"L'âge : mayor."},
  {cat:"ecrit", q:"« Il parle mieux qu'avant. »", opts:["Habla mejor que antes.","Habla más bien que antes.","Habla más bueno que antes."], correct:0, why:"L'adverbe bien → mejor."},
  {cat:"oral", audio:"El tren es más rápido que el autobús.", q:"Écoute : quel est le plus rapide ?", opts:["Le train","Le bus","Les deux pareil"], correct:0, why:"« más rápido que » : le train."},
  {cat:"oral", audio:"Mi casa es tan grande como la tuya.", q:"Écoute : les deux maisons sont :", opts:["De même taille","Différentes","Petites"], correct:0, why:"« tan… como » = égalité."},
  {cat:"oral", audio:"Es el hotel más caro de la ciudad.", q:"Écoute : comment est l'hôtel ?", opts:["Le plus cher","Le moins cher","Gratuit"], correct:0, why:"« el más caro de la ciudad »."},
  {cat:"oral", audio:"¿Cuál prefiere usted?", q:"Écoute : la question est au :", opts:["Tutoiement","Vouvoiement","Pluriel amical"], correct:1, why:"« prefiere usted »."},
  {cat:"oral", audio:"Mi hermano mayor trabaja más que yo.", q:"Écoute : qui travaille le plus ?", opts:["Le frère","Moi","Personne"], correct:0, why:"« más que yo »."},
  {cat:"comprehension", passage:"Ana: ¿Vamos a Sevilla en tren o en avión? — Luis: El avión es más rápido, pero el tren es más barato y más cómodo. — Ana: Entonces prefiero el tren. ¿Cuánto tarda? — Luis: Unas tres horas. Es el viaje más tranquilo.", q:"Quel transport est le plus rapide ?", opts:["L'avion","Le train","Le bus"], correct:0, why:"« El avión es más rápido »."},
  {cat:"comprehension", passage:"Ana: ¿Vamos a Sevilla en tren o en avión? — Luis: El avión es más rápido, pero el tren es más barato y más cómodo. — Ana: Entonces prefiero el tren. ¿Cuánto tarda? — Luis: Unas tres horas. Es el viaje más tranquilo.", q:"Pourquoi Ana choisit-elle le train ?", opts:["Il est moins cher et plus confortable","Il est plus rapide","Il est plus dangereux"], correct:0, why:"« más barato y más cómodo »."},
  {cat:"comprehension", passage:"Ana: ¿Vamos a Sevilla en tren o en avión? — Luis: El avión es más rápido, pero el tren es más barato y más cómodo. — Ana: Entonces prefiero el tren. ¿Cuánto tarda? — Luis: Unas tres horas. Es el viaje más tranquilo.", q:"Combien de temps dure le trajet en train ?", opts:["Une heure","Environ trois heures","Dix heures"], correct:1, why:"« Unas tres horas »."},
  {cat:"comprehension", passage:"Cliente: Buenas tardes. ¿Cuál es el mejor hotel de la ciudad? — Recepcionista: El Hotel Sol, señora. Es más caro que los otros, pero también es el más cómodo. El Hotel Mar es más barato, aunque es más ruidoso. — Cliente: Prefiero un hotel tranquilo.", q:"Quel hôtel est le plus confortable ?", opts:["Le Hotel Sol","Le Hotel Mar","Aucun"], correct:0, why:"« El Hotel Sol… el más cómodo »."},
  {cat:"comprehension", passage:"Cliente: Buenas tardes. ¿Cuál es el mejor hotel de la ciudad? — Recepcionista: El Hotel Sol, señora. Es más caro que los otros, pero también es el más cómodo. El Hotel Mar es más barato, aunque es más ruidoso. — Cliente: Prefiero un hotel tranquilo.", q:"La cliente est vouvoyée :", opts:["Oui, avec « señora »","Non, tutoyée","On ne sait pas"], correct:0, why:"« señora » : registre formel."}
 ],
 PRON_VERBS: [
  {en:"más … que", fr:"plus … que (mas ke)"},
  {en:"tan … como", fr:"aussi … que (tan KO-mo)"},
  {en:"tantos como", fr:"autant que (TAN-tos KO-mo)"},
  {en:"mejor · peor", fr:"meilleur · pire (me-JOR, pe-OR ; j rauque)"},
  {en:"mayor · menor", fr:"plus âgé · plus jeune (ma-YOR, me-NOR)"},
  {en:"el más grande", fr:"le plus grand (el mas GRAN-de)"},
  {en:"carísimo", fr:"très cher (ka-RÍ-si-mo : accent sur le í)"},
  {en:"Es mucho más barato.", fr:"C'est beaucoup moins cher. (es MU-cho mas ba-RA-to)"},
  {en:"¿Cuál prefiere usted?", fr:"Lequel préférez-vous ? (kwal pre-FIE-re us-TED)"},
  {en:"Lo mejor es…", fr:"Le mieux est de… (lo me-JOR es)"}
 ],
 READING: [
  "Marta tiene que elegir entre dos pisos.",
  "El primero está en el centro de la ciudad y es más moderno.",
  "El segundo está en un barrio más tranquilo, pero es menos cómodo.",
  "El piso del centro es más caro que el otro, aunque es más pequeño.",
  "—El barrio del centro es más ruidoso —dice su hermana.",
  "—Sí, pero tiene tantas tiendas como un centro comercial —contesta Marta.",
  "Al final, Marta prefiere el piso del barrio tranquilo.",
  "Es el más barato y tiene un jardín grandísimo.",
  "—Lo mejor es vivir cerca de la naturaleza —dice Marta.",
  "—Pues yo prefiero la ciudad —responde su hermana—, pero tu piso es genial."
 ],
 GLOSS: [
  {en:"elegir entre", fr:"choisir entre"},
  {en:"el piso", fr:"l'appartement (Espagne) ; en Amérique latine : el departamento"},
  {en:"el centro comercial", fr:"le centre commercial"},
  {en:"aunque", fr:"bien que, même si"},
  {en:"grandísimo", fr:"immense (grande + ísimo)"},
  {en:"la naturaleza", fr:"la nature"},
  {en:"el más barato", fr:"le moins cher (le plus bon marché)"},
  {en:"pues", fr:"eh bien (mot de liaison oral)"}
 ],
 GRAMMAR1: {
  heading:"Comparer : más… que, menos… que, tan… como et les irréguliers",
  lede:"Comparer, c'est choisir : quel hôtel, quel train, quel travail. En espagnol, il y a trois structures simples (plus, moins, aussi) et quatre irréguliers à connaître. Rien de plus.",
  conj:[
   ["Supériorité →","más + adjectif + que","Mi casa es más grande que la tuya."],
   ["Infériorité →","menos + adjectif + que","El tren es menos caro que el avión."],
   ["Égalité (adjectif) →","tan + adjectif + como","Mi hermana es tan alta como yo."],
   ["Égalité (nom) →","tanto/a/os/as + nom + como","Tengo tantos amigos como tú."],
   ["Devant un chiffre →","más de · menos de","Había más de cien personas."],
   ["Après un verbe →","verbe + más / menos que","Trabajo más que tú. Hablo menos que él."]
  ],
  ruleHtml:"📏 <b>1. Les trois structures.</b> <b>más… que</b> (plus), <b>menos… que</b> (moins), <b>tan… como</b> (aussi). <i>Es más caro que el otro. Es menos caro que el otro. Es tan caro como el otro.</i> L'adjectif s'accorde avec le sujet : <i>Mi casa es más grande, mis casas son más grandes.</i><br><br>🔢 <b>2. Avec un nom.</b> <b>tanto/a/os/as + nom + como</b> : <i>Tengo tantos libros como tú. Hay tanta gente como ayer.</i> « Tanto » s'accorde avec le nom, « tan » ne change jamais.<br><br>⚠️ <b>3. Les quatre irréguliers.</b> <b>bueno → mejor</b> · <b>malo → peor</b> · <b>grande → mayor</b> (âge) · <b>pequeño → menor</b> (âge). Ces quatre mots n'ont PAS de « más ». <i>Es mejor que el otro. Mi hermano mayor.</i> Pour la taille, on garde « más grande / más pequeño ».<br><br>🗣️ <b>4. Les adverbes.</b> <b>bien → mejor</b>, <b>mal → peor</b>, <b>mucho → más</b>, <b>poco → menos</b>. <i>Habla mejor que antes. Trabajo más que tú.</i><br><br>💪 <b>5. Renforcer.</b> <b>mucho más</b>, <b>bastante más</b>, <b>un poco más</b>. Jamais « muy más ». <i>Es mucho más barato.</i><br><br>🏆 <b>6. Le superlatif.</b> <b>el / la / los / las + más / menos + adjectif + de</b>. <i>Es el hotel más caro de la ciudad.</i> Avec les irréguliers : <b>el mejor, la peor, los mejores</b>. Après le superlatif : <b>de</b>, jamais « que ».<br><br>💥 <b>7. Le superlatif absolu : -ísimo.</b> <i>caro → carísimo, grande → grandísimo, fácil → facilísimo, rico → riquísimo.</i> Il s'accorde : <i>carísima, carísimos</i>. Plus fort que « muy caro ».<br><br>👥 <b>8. Tutoiement ET vouvoiement.</b> tú → <b>¿Cuál prefieres? ¿Cuál es mejor?</b> · usted → <b>¿Cuál prefiere usted? ¿Cuál le parece mejor?</b> (« le parece » : A2.8).",
  dialogueLede:"Deux amis choisissent un moyen de transport (tutoiement) :",
  dialogue:[
   {who:"them", en:"¿Vamos a Sevilla en tren o en avión?", fr:"On va à Séville en train ou en avion ?"},
   {who:"you", en:"El avión es más rápido, pero el tren es más barato.", fr:"L'avion est plus rapide, mais le train est moins cher."},
   {who:"them", en:"¿Y cuál es más cómodo?", fr:"Et lequel est plus confortable ?"},
   {who:"you", en:"El tren, claro. Tiene tanto espacio como un salón.", fr:"Le train, bien sûr. Il y a autant d'espace que dans un salon."},
   {who:"them", en:"Entonces prefiero el tren. Es lo mejor para viajar tranquilos.", fr:"Alors je préfère le train. C'est le mieux pour voyager tranquillement."},
   {who:"you", en:"¡Mucho mejor!", fr:"Beaucoup mieux !"}
  ],
  whyLabel:"Pourquoi « que » mais aussi « de » ?",
  whyText:"« Más… que » compare deux éléments entre eux : A est plus grand QUE B. Le superlatif ne compare plus deux éléments, il situe un élément dans un groupe : le plus grand DE la ville. C'est pourquoi « de » apparaît. Et devant un chiffre, « de » aussi : on ne compare pas deux personnes, on donne une quantité (plus DE cent). Pour ne plus te tromper, pose la question : est-ce que je compare deux choses (que), un groupe (de) ou un chiffre (de) ? Pour les comparatifs irréguliers, rappelle-toi qu'en français aussi on ne dit pas « plus bon » mais « meilleur » : l'espagnol suit la même logique, avec les mêmes quatre mots."
 },
 GRAMMAR2: {
  heading:"Choisir, conseiller, recommander : les structures de la vie courante",
  dialogueLede:"Un client demande conseil à une conseillère (vouvoiement) :",
  dialogue:[
   {who:"them", en:"Buenas tardes, señor. ¿En qué puedo ayudarle?", fr:"Bonjour, monsieur. En quoi puis-je vous aider ?"},
   {who:"you", en:"Busco un hotel tranquilo. ¿Cuál es el mejor de la zona?", fr:"Je cherche un hôtel calme. Lequel est le meilleur de la zone ?"},
   {who:"them", en:"El Hotel Sol es más caro, pero también es el más cómodo.", fr:"L'Hôtel Sol est plus cher, mais c'est aussi le plus confortable."},
   {who:"you", en:"¿Y el Hotel Mar?", fr:"Et l'Hôtel Mar ?"},
   {who:"them", en:"Es más barato, pero más ruidoso. ¿Cuál prefiere usted?", fr:"Il est moins cher, mais plus bruyant. Lequel préférez-vous ?"},
   {who:"you", en:"Prefiero el tranquilo, aunque sea más caro.", fr:"Je préfère le calme, même s'il est plus cher."}
  ],
  ruleHtml:"🔍 <b>1. Choisir.</b> <b>¿Cuál prefieres / prefiere usted?</b> <b>Prefiero el tren al avión.</b> (preferir A : à, jamais « que »). <b>Es mejor ir en tren.</b> <b>Lo mejor es…</b> (le mieux est de…).<br><br>🎯 <b>2. « Lo » + comparatif.</b> <b>lo mejor, lo peor, lo más importante, lo más difícil</b> : tu parles d'une chose abstraite. <i>Lo más difícil es el vocabulario.</i><br><br>🔁 <b>3. Comparer deux actions.</b> <b>Es más fácil hablar que escribir.</b> (infinitif + que + infinitif). <b>Viajar en tren es más cómodo que conducir.</b><br><br>🛍️ <b>4. Les prix et les chiffres.</b> <b>más de cien euros</b> (plus de cent euros), <b>menos de cinco</b> (moins de cinq). Pour un prix précis, tu ne compares pas, tu donnes un nombre : <i>Cuesta 30 euros.</i><br><br>🌍 <b>5. Différences régionales.</b> <b>piso</b> (Espagne) ≠ <b>departamento</b> (Amérique latine) pour « appartement » ; <b>coche</b> (Espagne) ≠ <b>carro / auto</b> (Amérique latine) pour « voiture ». Les comparatifs sont les mêmes partout.<br><br>🗣️ <b>6. Informel.</b> <b>Es lo mejor</b> (c'est le top), <b>¡Mucho mejor!</b> (beaucoup mieux !), <b>Está carísimo</b> (c'est hors de prix), <b>No hay color</b> (il n'y a pas photo), <b>Es mucho mejor que nada</b> (c'est toujours mieux que rien).<br><br>👥 <b>7. Tutoiement ET vouvoiement.</b> tú → <b>¿Cuál prefieres? ¿Cuál te gusta más?</b> · usted → <b>¿Cuál prefiere usted? ¿Cuál le gusta más?</b> (A2.8).",
  whyLabel:"Comment éviter les erreurs fréquentes ?",
  whyText:"Trois erreurs reviennent presque toujours. 1) « más mejor » : mejor contient déjà « plus bon », on ne rajoute rien. 2) « más mayor » : même raison pour mayor. 3) « más que diez » : devant un chiffre, c'est « más de diez ». Fais-toi une petite fiche avec ces trois phrases, relis-la deux fois par jour pendant une semaine : l'automatisme viendra tout seul. Autre astuce : quand tu regardes deux objets, dis tout haut une phrase de comparaison (« Este es más barato que aquel »). Dix phrases par jour suffisent."
 },
 REVIEW: [
  {q:"« Il dormait quand j'ai appelé » :", opts:["Dormía cuando llamé.","Dormí cuando llamaba."], correct:0, fb:"Décor + événement. (rappel A2.6)"},
  {q:"« Soudain, il a sonné » :", opts:["De repente, sonó.","De repente, sonaba."], correct:0, fb:"« De repente » : passé simple. (rappel A2.6)"},
  {q:"« J'ai rencontré Ana » :", opts:["Conocí a Ana.","Conocía a Ana."], correct:0, fb:"Début de connaissance. (rappel A2.6)"},
  {q:"« J'étais en train de manger » :", opts:["Estaba comiendo.","Estuve comido."], correct:0, fb:"estaba + gérondif. (rappel A2.6)"},
  {q:"« Il y avait beaucoup de monde » :", opts:["Había mucha gente.","Hubo mucha gente."], correct:0, fb:"Décor : había. (rappel A2.6)"}
 ],
 DRILLS: [
  {type:"fill", text:"Mi casa es ___ grande que la tuya. (plus)", answers:["más","Más"], why:"más + adjectif + que."},
  {type:"fill", text:"El tren es ___ caro que el avión. (moins)", answers:["menos","Menos"], why:"menos + adjectif + que."},
  {type:"fill", text:"Mi hermana es ___ alta como yo. (aussi)", answers:["tan","Tan"], why:"tan + adjectif + como."},
  {type:"fill", text:"Tengo ___ amigos como tú. (autant de)", answers:["tantos","Tantos"], why:"amigos masc. pl. → tantos."},
  {type:"fill", text:"Hay ___ gente como ayer. (autant de)", answers:["tanta","Tanta"], why:"gente fém. sing. → tanta."},
  {type:"fill", text:"Este vino es ___ que el otro. (bueno)", answers:["mejor","Mejor"], why:"bueno → mejor."},
  {type:"fill", text:"El tiempo es ___ que ayer. (malo)", answers:["peor","Peor"], why:"malo → peor."},
  {type:"fill", text:"Mi hermano ___ vive en Lyon. (plus âgé)", answers:["mayor","Mayor"], why:"hermano mayor."},
  {type:"fill", text:"Es el hotel más caro ___ ciudad. (de la)", answers:["de la","De la"], why:"Après le superlatif : de."},
  {type:"fill", text:"Había más ___ cien personas. (de)", answers:["de","De"], why:"Devant un chiffre : de."},
  {type:"fill", text:"Esta casa es ___ . (très chère, -ísimo)", answers:["carísima","Carísima"], why:"caro → carísimo ; fém. : carísima."},
  {type:"fill", text:"Prefiero el tren ___ avión. (à l')", answers:["al","Al"], why:"a + el = al."},
  {type:"fill", text:"Trabajo ___ que mi hermano. (plus)", answers:["más","Más"], why:"Après un verbe : más que."},
  {type:"fill", text:"Habla ___ que antes. (mieux)", answers:["mejor","Mejor"], why:"bien → mejor."},
  {type:"fill", text:"Es ___ mejor que el otro. (beaucoup)", answers:["mucho","Mucho"], why:"mucho mejor ; jamais « muy »."},
  {type:"fill", text:"¿Cuál ___ usted? (preferir)", answers:["prefiere","Prefiere"], why:"usted → prefiere."},
  {type:"fill", text:"Es el ___ restaurante de Madrid. (meilleur)", answers:["mejor","Mejor"], why:"el mejor."},
  {type:"fill", text:"Lo ___ es viajar en tren. (le mieux)", answers:["mejor","Mejor"], why:"lo mejor."},
  {type:"choice", q:"« Plus âgé » :", opts:["mayor","más mayor"], correct:0, why:"mayor contient déjà « plus »."},
  {type:"choice", q:"« Meilleur » :", opts:["mejor","más bueno"], correct:0, why:"bueno → mejor."},
  {type:"choice", q:"« Plus de cent » :", opts:["más de cien","más que cien"], correct:0, why:"Chiffre : de."},
  {type:"choice", q:"« Le plus cher de la ville » :", opts:["el más caro de la ciudad","el más caro que la ciudad"], correct:0, why:"Superlatif : de."},
  {type:"choice", q:"« Aussi grand que » :", opts:["tan grande como","tan grande que"], correct:0, why:"tan… como."},
  {type:"choice", q:"Avec un nom féminin pluriel :", opts:["tantas","tantos"], correct:0, why:"tantas casas."},
  {type:"choice", q:"À un client :", opts:["¿Cuál prefiere usted?","¿Cuál prefieres usted?"], correct:0, why:"usted → prefiere."}
 ],
 ANNOTATED: {
  title:"Quatre phrases de comparaison",
  intro:"Quatre phrases pour reconnaître les structures de comparaison. Touche chaque mot pour voir sa nature et sa traduction.",
  sentences:[
   {fr:"Ma maison est plus grande que la tienne.", tokens:[
    {w:"Mi", tag:"déterminant", info:"possessif", fr:"ma"},
    {w:"casa", tag:"nom", info:"fém. sing.", fr:"maison"},
    {w:"es", tag:"verbe", info:"ser · présent", fr:"est"},
    {w:"más", tag:"adverbe", info:"comparatif", fr:"plus"},
    {w:"grande", tag:"adjectif", info:"invariable au genre", fr:"grande"},
    {w:"que", tag:"conjonction", info:"second terme", fr:"que"},
    {w:"la tuya", tag:"pronom", fr:"la tienne"}
   ]},
   {fr:"Ma sœur est aussi grande que moi.", tokens:[
    {w:"Mi hermana", tag:"nom", fr:"ma sœur"},
    {w:"es", tag:"verbe", fr:"est"},
    {w:"tan", tag:"adverbe", info:"égalité", fr:"aussi", tip:"Invariable."},
    {w:"alta", tag:"adjectif", info:"fém. sing.", fr:"grande"},
    {w:"como", tag:"conjonction", fr:"que"},
    {w:"yo", tag:"pronom sujet", fr:"moi"}
   ]},
   {fr:"C'est le restaurant le plus cher de la ville.", tokens:[
    {w:"Es", tag:"verbe", fr:"c'est"},
    {w:"el", tag:"article", info:"défini", fr:"le"},
    {w:"restaurante", tag:"nom", info:"masc. sing.", fr:"restaurant"},
    {w:"más caro", tag:"locution", info:"superlatif", fr:"le plus cher"},
    {w:"de", tag:"préposition", fr:"de", tip:"Après un superlatif : de."},
    {w:"la ciudad", tag:"nom", fr:"la ville"}
   ]},
   {fr:"Lequel préférez-vous ?", tokens:[
    {w:"¿Cuál", tag:"pronom interrogatif", fr:"lequel"},
    {w:"prefiere", tag:"verbe", info:"preferir · présent · usted", fr:"préférez"},
    {w:"usted?", tag:"pronom sujet", info:"politesse", fr:"vous"}
   ]}
  ]
 },
 CULTURE_NOTE: {icon:"⚖️", title:"Culture, langage informel et fiche récap de A2.7",
  html:"<b>⚖️ Culture : comparer sans blesser</b> En espagnol, on compare souvent avec douceur : « Es un poco más caro, pero vale la pena » (il est un peu plus cher, mais ça vaut le coup). Pour critiquer, on adoucit : « No es tan bueno como esperaba » (il n'est pas aussi bon que je l'espérais).<br><br><b>🗣️ Dix expressions informelles pour comparer</b><br>1. <b>Es lo mejor</b> = c'est le top.<br>2. <b>No hay color</b> = il n'y a pas photo.<br>3. <b>Está carísimo</b> = c'est hors de prix.<br>4. <b>Mejor imposible</b> = on ne peut pas faire mieux.<br>5. <b>Cada vez mejor</b> = de mieux en mieux.<br>6. <b>Más vale tarde que nunca</b> = mieux vaut tard que jamais.<br>7. <b>Es más de lo mismo</b> = c'est du pareil au même.<br>8. <b>Menos mal</b> = heureusement.<br>9. <b>Cuanto más… más…</b> = plus… plus…<br>10. <b>Ni mejor ni peor</b> = ni mieux ni pire.<br>Avec un supérieur : « Esta opción me parece más adecuada ».<br><br><b>📋 Fiche récap A2.7</b><br>• <b>más / menos + adj + que</b> · <b>tan + adj + como</b> · <b>tanto/a/os/as + nom + como</b>.<br>• <b>más de + chiffre</b>.<br>• <b>mejor · peor · mayor · menor</b> (pas de « más »).<br>• <b>el más… de</b> (superlatif) · <b>-ísimo</b>.<br>• <b>lo mejor / lo peor</b>.<br>• <b>Tú ET usted</b> : ¿Cuál prefieres? / ¿Cuál prefiere usted?"},
 NEXT_PREVIEW:"A2.8 (Pronoms) : remplacer les noms pour ne plus se répéter : « Lo veo », « La llamo », « Le doy el libro », « Me gusta », « Te encanta ».",
 META:{vocabTitle:"Más grande que, tan rápido como : comparer (A2.7)", lectureTitle:"¿Qué piso elegir?", bilanTitle:"Bravo, tu compares comme un natif !", pronLabel:"j rauque dans mejor, y dans mayor, accent dans carísimo", todayLede:"comparer avec más / menos / tan… como, utiliser mejor / peor / mayor / menor, former le superlatif (el más… de, -ísimo) et conseiller en tutoiement ET en vouvoiement"}
};
})();


// A2.8 — Lo veo, le doy, me gusta : les pronoms COD / COI — leçon 220
(function(){
function blk(name, rows){
  var v = __esB(name, rows);
  v.forEach(function(o, i){ o.emo = rows[i][4]; o.ex = [rows[i][5], rows[i][6]]; });
  return v;
}
var V = [].concat(
 blk("COD : lo, la, los, las (le complément direct)", [
  ["lo","/lo/","le, l' (masc.) · cela","Remplace un nom masculin singulier : « Veo el coche → Lo veo ». Avec usted (homme) : « Lo llamo » = je vous appelle.","👉","¿El libro? Lo leo hoy.","Le livre ? Je le lis aujourd'hui."],
  ["la","/la/","la, l' (fém.)","Remplace un nom féminin singulier : « Veo la casa → La veo ». Avec usted (femme) : « La llamo ».","👉","¿La película? La vi ayer.","Le film ? Je l'ai vu hier."],
  ["los · las","/los · las/","les (masc. · fém.)","Pluriels : « Compro los libros → Los compro », « Compro las flores → Las compro ».","👉","Compro las flores y las pongo en casa.","J'achète les fleurs et je les mets à la maison."],
  ["Lo veo · La veo","/lo ˈbeo/","je le vois · je la vois","Le pronom se place AVANT le verbe conjugué. Jamais après (comme en français).","👀","Lo veo todos los días.","Je le vois tous les jours."],
  ["No lo sé","/no lo se/","je ne le sais pas","La négation se place avant le pronom : « No lo sé », pas « Lo no sé ».","🚫","No lo sé, lo siento.","Je ne le sais pas, désolé."],
  ["Te veo","/te ˈbeo/","je te vois","me, te, nos, os : mêmes formes en COD et COI.","👀","Te veo mañana.","Je te vois demain."],
  ["Lo he visto","/lo e ˈbisto/","je l'ai vu","Avec le perfecto : le pronom va avant « he ». « Ya lo he hecho » (je l'ai déjà fait).","✅","Ya lo he hecho.","Je l'ai déjà fait."],
  ["a + personne","/a/","« a » devant une personne COD","« Veo a Ana » mais « Veo la casa ». Avec le pronom : « La veo ».","🧑","Conocí a Ana en una fiesta.","J'ai rencontré Ana lors d'une fête."]
 ]),
 blk("COI : me, te, le, nos, os, les (à qui ?)", [
  ["me · te · le","/me · te · le/","à moi · à toi · à lui, à elle, à vous","« Le doy el libro » = je lui donne le livre. Avec usted : « Le doy el libro » = je vous donne le livre.","🎁","Te doy mi número.","Je te donne mon numéro."],
  ["nos · os · les","/nos · os · les/","à nous · à vous (Espagne) · à eux, à elles, à vous (pl.)","« Les doy las llaves » = je leur donne les clés ; avec ustedes : je vous donne.","🎁","Les enseño la casa.","Je leur montre la maison."],
  ["dar → doy","/daɾ · doj/","donner → je donne","doy · das · da · damos · dais · dan. Verbe très fréquent avec COI.","🤲","Te doy las llaves.","Je te donne les clés."],
  ["decir → digo","/deˈθiɾ · ˈdiɣo/","dire → je dis","digo · dices · dice · decimos · decís · dicen. « Te digo la verdad ».","💬","Te digo la verdad.","Je te dis la vérité."],
  ["llamar","/ʎaˈmaɾ/","appeler","COD : « La llamo » (je l'appelle). « Te llamo » (je t'appelle).","📞","Te llamo mañana.","Je t'appelle demain."],
  ["enviar → envío","/enˈbjaɾ · enˈbio/","envoyer → j'envoie","envío · envías · envía… (accent sur le í). « Te envío un mensaje ».","📨","Te envío el documento.","Je t'envoie le document."],
  ["explicar","/eksplikaɾ/","expliquer","« Te explico la regla » = je t'explique la règle.","📚","Les explico la lección.","Je leur explique la leçon."],
  ["escribir","/eskɾiˈβiɾ/","écrire","« Te escribo un correo » = je t'écris un e-mail.","✍️","Te escribo esta noche.","Je t'écris ce soir."]
 ]),
 blk("Deux pronoms : se lo, se la", [
  ["le + lo → se lo","/se lo/","(à lui) le","Quand « le » précède « lo / la / los / las », il devient « se ». « Le doy el libro → Se lo doy ».","🔁","Se lo doy mañana.","Je le lui donne demain."],
  ["se la · se los · se las","/se la/","(à lui) la · les","« Le explico la regla → Se la explico ». Le COI vient en premier, le COD ensuite.","🔁","Se la explico ahora.","Je la lui explique maintenant."],
  ["me lo · te lo · nos lo","/me lo/","me le · te le · nous le","Pas de changement avec me, te, nos : « Me lo das » (tu me le donnes).","🔁","Te lo envío hoy.","Je te l'envoie aujourd'hui."],
  ["¿Me lo das?","/me lo das/","Tu me le donnes ?","Demande courante entre amis. Avec usted : « ¿Me lo da? ».","🙏","¿Me lo da, por favor?","Pouvez-vous me le donner, s'il vous plaît ?"],
  ["Dímelo","/ˈdimelo/","Dis-le-moi","Impératif + pronoms : collés au verbe, avec un accent pour garder la syllabe forte. « Dímelo », « Dámelo ».","⚡","Dímelo ahora.","Dis-le-moi maintenant."],
  ["Voy a hacerlo","/boj a aˈθeɾlo/","Je vais le faire","Avec un infinitif, le pronom peut se coller derrière : « Voy a hacerlo » = « Lo voy a hacer ».","🔧","Voy a hacerlo mañana.","Je vais le faire demain."],
  ["Estoy leyéndolo","/esˈtoj leˈʝendolo/","Je suis en train de le lire","Avec le gérondif : pronom collé derrière, accent sur le e : leyéndolo.","📖","Estoy leyéndolo ahora.","Je suis en train de le lire."]
 ]),
 blk("Gustar et les verbes comme gustar", [
  ["me gusta · me gustan","/me ˈɡusta/","j'aime (ça me plaît)","Le sujet est la chose qui plaît : « Me gusta el café » (singulier), « Me gustan los coches » (pluriel).","❤️","Me gustan los libros.","J'aime les livres."],
  ["te gusta · le gusta","/te ˈɡusta/","tu aimes · il / elle aime · vous aimez","« ¿Le gusta el café? » = aimez-vous le café ? (usted).","❤️","¿Le gusta el café, señor?","Aimez-vous le café, monsieur ?"],
  ["nos gusta · les gusta","/nos ˈɡusta/","nous aimons · ils aiment","« Les gustan los niños ».","❤️","A mis padres les gusta viajar.","Mes parents aiment voyager."],
  ["encantar","/eŋkanˈtaɾ/","adorer","Même structure : « Me encanta el chocolate ».","😍","Me encanta el chocolate.","J'adore le chocolat."],
  ["interesar","/inteɾeˈsaɾ/","intéresser","« Me interesa la historia ».","📚","Me interesa la historia.","L'histoire m'intéresse."],
  ["molestar","/molesˈtaɾ/","déranger, gêner","« ¿Le molesta el ruido? » = le bruit vous dérange-t-il ?","🔇","¿Le molesta si abro la ventana?","Cela vous dérange-t-il si j'ouvre la fenêtre ?"],
  ["a mí · a ti · a él","/a mi/","moi · toi · lui (insistance)","« A mí me gusta, ¿y a ti? » Préposition « a » + pronom tonique : a mí, a ti, a él / ella / usted, a nosotros, a vosotros, a ellos.","💬","A mí me gusta, ¿y a ti?","Moi j'aime, et toi ?"],
  ["también · tampoco","/tamˈbjen · tamˈpoko/","aussi · non plus","« A mí también » (moi aussi), « A mí tampoco » (moi non plus).","🤝","—Me gusta. —A mí también.","— J'aime. — Moi aussi."]
 ]),
 blk("Poser les questions : tú ET usted", [
  ["¿Lo conoces? / ¿Lo conoce usted?","/lo koˈnoθes/","Tu le connais ? / Vous le connaissez ?","conocer → conozco, conoces, conoce.","❓","¿Lo conoce usted?","Vous le connaissez ?"],
  ["¿Te gusta? / ¿Le gusta?","/te ˈɡusta/","Ça te plaît ? / Ça vous plaît ?","Question de base pour donner son avis.","❓","¿Le gusta la ciudad?","La ville vous plaît-elle ?"],
  ["¿Me ayudas? / ¿Me ayuda usted?","/me aˈʝuðas/","Tu m'aides ? / Vous m'aidez ?","Courant pour demander un service.","🙏","¿Me ayuda, por favor?","Pouvez-vous m'aider, s'il vous plaît ?"]
 ]),
 blk("Au magasin et au restaurant", [
  ["el regalo","/el reˈɣalo/","le cadeau","Masculin malgré le -o… et « regalar » = offrir : « Te regalo un libro ».","🎁","Busco un regalo para mi hermana.","Je cherche un cadeau pour ma sœur."],
  ["recomendar → recomiendo","/rekomenˈdaɾ · rekoˈmjendo/","recommander","Diphtongue e → ie : recomiendo, recomiendas, recomienda. « Se lo recomiendo » = je vous le recommande.","👍","Te recomiendo este libro.","Je te recommande ce livre."],
  ["prestar","/pɾesˈtaɾ/","prêter","« Te presto el libro ». Attention : « pedir prestado » = emprunter.","🔄","¿Me prestas tu libro?","Tu me prêtes ton livre ?"],
  ["el bolso","/el ˈbolso/","le sac à main","Masculin. En Amérique latine : la cartera.","👜","Me llevo este bolso.","Je prends ce sac."],
  ["la especialidad","/la espeθjaliˈðað/","la spécialité","Féminin. « La especialidad de la casa » = la spécialité de la maison.","🍲","La sopa es la especialidad de la casa.","La soupe est la spécialité de la maison."]
 ]),
 blk("Informel et prononciation", [
  ["¿Me lo cuentas?","/me lo ˈkwentas/","Tu me racontes ?","Informel : curiosité entre amis.","👂","¿Me lo cuentas todo?","Tu me racontes tout ?"],
  ["Ni idea","/ni iˈðea/","Aucune idée","Informel : « ¿Lo sabes? — Ni idea ».","🤷","—¿Lo sabes? —Ni idea.","— Tu le sais ? — Aucune idée."],
  ["me, te, se, lo","/me te se lo/","voyelles courtes","Ces petits mots ne portent jamais d'accent et se prononcent collés au verbe : « te-lo-DOY » (te lo doy).","🔊","Te lo doy.","Je te le donne."]
 ])
);

LESSONS_ES[220] = {
 code:"A2.8", level:"A2",
 VOCAB: V,
 MEM_WORDS: __esIdx(V, ["lo","la","los · las","me · te · le","nos · os · les","le + lo → se lo","me gusta · me gustan","a mí · a ti · a él","también · tampoco","Ni idea"]),
 MINI_CHECKS: [
  {q:"« Je le vois » (le livre) :", opts:["Lo veo.","Veo lo.","Le veo."], correct:0, fb:"COD masculin : lo, avant le verbe."},
  {q:"« Je la vois » (la maison) :", opts:["La veo.","Lo veo.","Les veo."], correct:0, fb:"COD féminin : la."},
  {q:"« Je lui donne le livre » :", opts:["Le doy el libro.","Lo doy el libro."], correct:0, fb:"COI (à qui ?) : le."},
  {q:"« Je le lui donne » :", opts:["Le lo doy.","Se lo doy."], correct:1, fb:"le + lo → se lo (jamais « le lo »)."},
  {q:"« J'aime les livres » :", opts:["Me gusta los libros.","Me gustan los libros."], correct:1, fb:"Le sujet (los libros) est pluriel : gustan."},
  {q:"« Moi aussi » (après « Me gusta ») :", opts:["A mí también.","Yo también me."], correct:0, fb:"A mí también."},
  {q:"« Je ne le sais pas » :", opts:["Lo no sé.","No lo sé."], correct:1, fb:"La négation avant le pronom."},
  {q:"Vouvoiement : « ¿___ gusta el café ? »", opts:["Le","Te"], correct:0, fb:"usted → le."}
 ],
 ROUNDS: [
  __esR("Lo veo todos los días.","Je le vois tous les jours."),
  __esR("La película la vi ayer.","Le film, je l'ai vu hier."),
  __esR("Te doy mi número.","Je te donne mon numéro."),
  __esR("Se lo doy mañana.","Je le lui donne demain."),
  __esR("Me gustan los libros.","J'aime les livres."),
  __esR("¿Le gusta el café, señor?","Aimez-vous le café, monsieur ?"),
  __esR("A mí me gusta, ¿y a ti?","Moi j'aime, et toi ?"),
  __esR("No lo sé, lo siento.","Je ne le sais pas, désolé."),
  __esR("¿Me ayuda, por favor?","Pouvez-vous m'aider, s'il vous plaît ?"),
  __esR("Ya lo he hecho.","Je l'ai déjà fait."),
  __esR("Voy a hacerlo mañana.","Je vais le faire demain."),
  __esR("A mis padres les gusta viajar.","Mes parents aiment voyager."),
  __esR("Dímelo ahora.","Dis-le-moi maintenant.")
 ],
 QUIZ: [
  {cat:"ecrit", q:"« Je vois la maison → je ___ vois. »", opts:["lo","la","le"], correct:1, why:"la casa : féminin singulier → la."},
  {cat:"ecrit", q:"« Compro los libros → ___ compro. »", opts:["Las","Lo","Los"], correct:2, why:"los libros : masculin pluriel → los."},
  {cat:"ecrit", q:"« Je te donne les clés. » → « ___ doy las llaves. »", opts:["Lo", "Te", "La"], correct:1, why:"COI : te."},
  {cat:"ecrit", q:"« Je le lui explique. » → « ___ explico. »", opts:["Le lo","Se lo","Lo se"], correct:1, why:"le + lo → se lo."},
  {cat:"ecrit", q:"A mí me ___ los coches. (gustar)", opts:["gusta","gustan","gusto"], correct:1, why:"los coches : pluriel → gustan."},
  {cat:"ecrit", q:"A ella le ___ el café. (gustar)", opts:["gustan", "gustas", "gusta"], correct:2, why:"el café : singulier → gusta."},
  {cat:"ecrit", q:"Vouvoiement : « ¿___ gusta la ciudad, señora ? »", opts:["Te","Le","Me"], correct:1, why:"usted → le."},
  {cat:"ecrit", q:"« Moi non plus. » (après « No me gusta »)", opts:["A mí también.","A mí tampoco.","Yo también no."], correct:1, why:"tampoco après une négation."},
  {cat:"ecrit", q:"« Je ne le sais pas. »", opts:["Lo no sé.", "No lo sé.", "No sé lo."], correct:1, why:"no + pronom + verbe."},
  {cat:"ecrit", q:"« Je l'ai déjà vu. » (el libro)", opts:["Ya he lo visto.", "Ya he visto lo.", "Ya lo he visto."], correct:2, why:"Le pronom se place avant haber."},
  {cat:"ecrit", q:"« Je vais le faire. »", opts:["Voy a lo hacer.", "Voy a hacerlo.", "Lo voy hacer."], correct:1, why:"Voy a hacerlo (collé) ou Lo voy a hacer (avant)."},
  {cat:"ecrit", q:"« Donne-le-moi » :", opts:["Dame lo.", "Me lo da.", "Dámelo."], correct:2, why:"Impératif + pronoms collés : dámelo."},
  {cat:"ecrit", q:"« À mes parents, ça leur plaît de voyager » :", opts:["A mis padres le gusta viajar.", "A mis padres les gusta viajar."], correct:1, why:"Pluriel : les. Le sujet (viajar) est singulier : gusta."},
  {cat:"ecrit", q:"« J'adore le chocolat. »", opts:["Me encanta el chocolate.","Encanto el chocolate."], correct:0, why:"Même structure que gustar."},
  {cat:"oral", audio:"Lo veo todos los días.", q:"Écoute : qui voit-il tous les jours ?", opts:["Un homme ou un objet masculin","Une femme","Personne"], correct:0, why:"« lo » = masculin."},
  {cat:"oral", audio:"Se lo doy mañana.", q:"Écoute : quand le donne-t-il ?", opts:["Demain","Hier","Aujourd'hui"], correct:0, why:"« mañana »."},
  {cat:"oral", audio:"A mí me gusta el café.", q:"Écoute : qu'aime-t-il ?", opts:["Le café","Le thé","Le vin"], correct:0, why:"« me gusta el café »."},
  {cat:"oral", audio:"¿Le gusta la ciudad, señora?", q:"Écoute : la question est au :", opts:["Tutoiement","Vouvoiement","Pluriel"], correct:1, why:"« le gusta » + « señora » : vouvoiement."},
  {cat:"oral", audio:"A mí tampoco me gusta.", q:"Écoute : que dit-il ?", opts:["Moi non plus, je n'aime pas","Moi aussi, j'aime","Je ne sais pas"], correct:0, why:"« tampoco » = non plus."},
  {cat:"comprehension", passage:"Ana: ¿Conoces a Luis? — Marta: Sí, lo conocí en una fiesta. Es muy simpático. ¿Le has dicho algo? — Ana: Sí, le envié un mensaje ayer, pero todavía no me ha contestado. — Marta: Llámalo. A mí me encanta hablar con él.", q:"Comment Marta a-t-elle connu Luis ?", opts:["Lors d'une fête","Au travail","À l'école"], correct:0, why:"« lo conocí en una fiesta »."},
  {cat:"comprehension", passage:"Ana: ¿Conoces a Luis? — Marta: Sí, lo conocí en una fiesta. Es muy simpático. ¿Le has dicho algo? — Ana: Sí, le envié un mensaje ayer, pero todavía no me ha contestado. — Marta: Llámalo. A mí me encanta hablar con él.", q:"Qu'a fait Ana hier ?", opts:["Elle a envoyé un message à Luis","Elle a appelé Luis","Elle a vu Luis"], correct:0, why:"« le envié un mensaje »."},
  {cat:"comprehension", passage:"Ana: ¿Conoces a Luis? — Marta: Sí, lo conocí en una fiesta. Es muy simpático. ¿Le has dicho algo? — Ana: Sí, le envié un mensaje ayer, pero todavía no me ha contestado. — Marta: Llámalo. A mí me encanta hablar con él.", q:"Que conseille Marta ?", opts:["De l'appeler","D'attendre","De l'oublier"], correct:0, why:"« Llámalo » : appelle-le."},
  {cat:"comprehension", passage:"Camarero: Buenas noches, señor. ¿Le gusta el pescado? — Cliente: Sí, me encanta. ¿Y la sopa? — Camarero: Se la recomiendo. Es la especialidad de la casa. — Cliente: Entonces la pido.", q:"Qu'aime le client ?", opts:["Le poisson","La viande","Les desserts"], correct:0, why:"« me encanta » le poisson."},
  {cat:"comprehension", passage:"Camarero: Buenas noches, señor. ¿Le gusta el pescado? — Cliente: Sí, me encanta. ¿Y la sopa? — Camarero: Se la recomiendo. Es la especialidad de la casa. — Cliente: Entonces la pido.", q:"Que fait le client avec la soupe ?", opts:["Il la commande","Il la refuse","Il la prépare"], correct:0, why:"« la pido » = je la commande."}
 ],
 PRON_VERBS: [
  {en:"lo veo · la veo", fr:"je le vois · je la vois (lo BE-o, la BE-o)"},
  {en:"te lo doy", fr:"je te le donne (te lo DOI : un seul souffle)"},
  {en:"se lo doy", fr:"je le lui donne (se lo DOI)"},
  {en:"me gusta · me gustan", fr:"j'aime (singulier · pluriel) (me GUS-ta, me GUS-tan)"},
  {en:"le gusta · les gustan", fr:"il aime · ils aiment (le GUS-ta, les GUS-tan)"},
  {en:"a mí también", fr:"moi aussi (a MÍ tam-BIEN : accent sur mí)"},
  {en:"a mí tampoco", fr:"moi non plus (a MÍ tam-PO-ko)"},
  {en:"dímelo · dámelo", fr:"dis-le-moi · donne-le-moi (DÍ-me-lo, DÁ-me-lo : accent écrit)"},
  {en:"voy a hacerlo", fr:"je vais le faire (boy a a-SER-lo)"},
  {en:"ni idea", fr:"aucune idée (ni i-DE-a)"}
 ],
 READING: [
  "Marta tiene una amiga nueva que se llama Elena.",
  "La conoció en un curso de español y ahora la ve todas las semanas.",
  "Elena es muy simpática y a Marta le encanta hablar con ella.",
  "—¿Te gusta el café? —le pregunta Marta.",
  "—Me encanta, pero no lo tomo por la noche —contesta Elena.",
  "El sábado, Marta le envía un mensaje: «¿Quedamos mañana?»",
  "Elena lo lee enseguida y le contesta que sí.",
  "Por la tarde, Marta le presta un libro y se lo da en la cafetería.",
  "—Lo leo esta semana y te lo devuelvo el lunes —dice Elena.",
  "—Perfecto. Y si me necesitas, llámame cuando quieras."
 ],
 GLOSS: [
  {en:"la conoció", fr:"l'a rencontrée (la = Elena ; conocer au passé simple)"},
  {en:"quedar", fr:"se donner rendez-vous (« ¿Quedamos mañana? »)"},
  {en:"prestar", fr:"prêter (le presta un libro = lui prête un livre)"},
  {en:"se lo da", fr:"le lui donne (le + lo → se lo)"},
  {en:"devolver → devuelvo", fr:"rendre (o → ue au présent)"},
  {en:"enseguida", fr:"tout de suite"},
  {en:"llámame", fr:"appelle-moi (impératif + pronom collé)"},
  {en:"cuando quieras", fr:"quand tu voudras"}
 ],
 GRAMMAR1: {
  heading:"Les pronoms COD et COI : lo, la, los, las et me, te, le…",
  lede:"Pour ne plus te répéter (« Je vois le livre, je lis le livre, j'achète le livre »), tu remplaces le nom par un pronom. L'espagnol en a deux familles : COD (lo, la, los, las) et COI (le, les, + me, te, nos, os). Leur place est fixe : avant le verbe conjugué.",
  conj:[
   ["1re personne →","me (moi) · nos (nous)","Me llama. Nos ve."],
   ["2e personne →","te (toi) · os (vous, Espagne)","Te veo. Os llamo."],
   ["COD 3e pers. →","lo · la · los · las","Lo veo. La compro. Los leo. Las pongo."],
   ["COI 3e pers. →","le · les","Le doy el libro. Les explico la regla."],
   ["Usted / ustedes →","lo, la / le (COD · COI) · los, las / les","Lo llamo (señor). Le doy la llave (señor)."],
   ["Deux pronoms →","COI + COD ; le / les + lo → se lo","Se lo doy. Te lo envío. Me la explica."]
  ],
  ruleHtml:"📖 <b>1. COD : « quoi ? » ou « qui ? ».</b> <b>lo</b> (masc.), <b>la</b> (fém.), <b>los</b> (masc. pl.), <b>las</b> (fém. pl.). <i>Veo el libro → Lo veo. Veo la casa → La veo. Compro los libros → Los compro. Compro las flores → Las compro.</i><br><br>📖 <b>2. COI : « à qui ? ».</b> <b>me, te, le, nos, os, les</b>. <i>Te doy las llaves. Le explico la regla. Les envío un mensaje.</i><br><br>📍 <b>3. Où mettre le pronom ?</b> • <b>Avant le verbe conjugué</b> : <i>Lo veo. No lo sé. Ya lo he hecho.</i> • <b>Collé à l'infinitif ou au gérondif</b> : <i>Voy a hacerlo</i> (= <i>Lo voy a hacer</i>) ; <i>Estoy leyéndolo</i> (= <i>Lo estoy leyendo</i>). • <b>Collé à l'impératif affirmatif</b> : <i>Dímelo. Dámelo. Llámalo.</i> (accent écrit pour garder la syllabe forte). • <b>Avant l'impératif négatif</b> : <i>No me lo digas.</i><br><br>🔁 <b>4. Deux pronoms : le COI vient en premier.</b> <b>me lo · te lo · se lo · nos lo · os lo</b>. <i>Te lo envío.</i> Et <b>le / les + lo / la / los / las → se</b> : <i>Le doy el libro → Se lo doy.</i> (jamais « le lo »).<br><br>❤️ <b>5. Gustar et les verbes comme gustar.</b> Ici, c'est la chose qui plaît : <i>Me gusta el café</i> (le café me plaît), <i>Me gustan los libros</i>. Même fonctionnement : <b>encantar</b> (adorer), <b>interesar</b>, <b>molestar</b>, <b>importar</b>. Formes : <b>me · te · le · nos · os · les + gusta / gustan</b>.<br><br>💬 <b>6. L'insistance : a mí, a ti, a él…</b> <i>A mí me gusta, ¿y a ti?</i> Réponses : <b>A mí también</b> (moi aussi) / <b>A mí tampoco</b> (moi non plus).<br><br>👥 <b>7. Tutoiement ET vouvoiement.</b> tú → <b>¿Te gusta? ¿Me ayudas? ¿Lo conoces?</b> · usted → <b>¿Le gusta? ¿Me ayuda usted? ¿Lo conoce usted?</b> Avec usted, « le » et « lo / la » désignent la personne à qui tu parles.",
  dialogueLede:"Deux amies parlent d'un ami commun (tutoiement) :",
  dialogue:[
   {who:"them", en:"¿Conoces a Luis?", fr:"Tu connais Luis ?"},
   {who:"you", en:"Sí, lo conocí en una fiesta. Es muy simpático.", fr:"Oui, je l'ai rencontré lors d'une fête. Il est très sympathique."},
   {who:"them", en:"¿Le has dicho algo?", fr:"Tu lui as dit quelque chose ?"},
   {who:"you", en:"Le envié un mensaje ayer, pero todavía no me ha contestado.", fr:"Je lui ai envoyé un message hier, mais il ne m'a pas encore répondu."},
   {who:"them", en:"Llámalo. A mí me encanta hablar con él.", fr:"Appelle-le. Moi, j'adore parler avec lui."},
   {who:"you", en:"A mí también. Lo llamo esta noche.", fr:"Moi aussi. Je l'appelle ce soir."}
  ],
  whyLabel:"Pourquoi « le lo » devient-il « se lo » ?",
  whyText:"Dire « le lo doy » est possible à écrire mais difficile à prononcer : deux « l » qui se suivent. L'espagnol a donc remplacé « le » par « se » devant lo / la / los / las. Ce « se » n'est pas le réfléchi : il signifie « à lui, à elle, à vous, à eux ». La règle utile : le COI passe toujours avant le COD, et seul « le / les » change en « se ». Pour gustar, retiens que le verbe s'accorde avec ce qui plaît, pas avec celui qui aime : « Me gustan los libros » = les livres me plaisent. Pour ne plus te tromper, dis à voix haute : « Me gusta el café, me gustan los cafés ». Les automatismes viennent en deux jours."
 },
 GRAMMAR2: {
  heading:"Utiliser les pronoms dans la vie courante : service, poli, informel",
  dialogueLede:"Une cliente et un vendeur (vouvoiement) :",
  dialogue:[
   {who:"them", en:"Buenas tardes, señora. ¿En qué puedo ayudarla?", fr:"Bonjour, madame. En quoi puis-je vous aider ?"},
   {who:"you", en:"Busco un regalo para mi hermana. ¿Me ayuda a elegirlo?", fr:"Je cherche un cadeau pour ma sœur. Pouvez-vous m'aider à le choisir ?"},
   {who:"them", en:"Claro. ¿Le gustan los libros?", fr:"Bien sûr. Aime-t-elle les livres ?"},
   {who:"you", en:"Sí, le encantan. Pero ya los tiene casi todos.", fr:"Oui, elle adore ça. Mais elle les a déjà presque tous."},
   {who:"them", en:"Entonces le recomiendo este bolso. Se lo envuelvo ahora mismo.", fr:"Alors je vous recommande ce sac. Je vous l'emballe tout de suite."},
   {who:"you", en:"Perfecto, me lo llevo.", fr:"Parfait, je le prends."}
  ],
  ruleHtml:"🛍️ <b>1. Au magasin.</b> <b>Me lo llevo</b> (je le prends), <b>Se lo envuelvo</b> (je vous l'emballe), <b>¿Me lo puede enseñar?</b> (pouvez-vous me le montrer ?), <b>Se la recomiendo</b> (je vous la recommande).<br><br>🙏 <b>2. Demander un service.</b> tú → <b>¿Me ayudas? ¿Me lo das? ¿Me lo explicas?</b> · usted → <b>¿Me ayuda? ¿Me lo da? ¿Me lo explica?</b> Ajoute « por favor ».<br><br>⚠️ <b>3. « a » devant une personne.</b> COD de personne : <i>Veo a Ana. Llamo a mi madre. Conozco a Luis.</i> Avec le pronom, plus de « a » : <i>La veo. La llamo. Lo conozco.</i> (COI : toujours « a » + nom : <i>Doy el libro a Ana → Le doy el libro a Ana</i>).<br><br>🔄 <b>4. Le doublon.</b> Avec un COI nom, on garde souvent le pronom : <i>Le doy el libro a Ana. Les explico la regla a los alumnos.</i> Le pronom « le / les » est presque obligatoire.<br><br>🌍 <b>5. Différences régionales.</b> Pour le COD masculin personne, l'Espagne dit souvent « <b>le</b> » (<i>Le veo</i>) : c'est le « leísmo », toléré. En Amérique latine : <b>lo</b> (<i>Lo veo</i>). Toi, choisis « lo » : il est correct partout.<br><br>🗣️ <b>6. Informel.</b> <b>Ni idea</b> (aucune idée), <b>¿Me lo cuentas?</b> (tu me racontes ?), <b>Te lo juro</b> (je te le jure), <b>Ya te lo dije</b> (je te l'ai déjà dit), <b>Me da igual</b> (ça m'est égal), <b>Me da pena</b> (ça me fait de la peine).<br><br>👥 <b>7. Tutoiement ET vouvoiement.</b> tú → <b>¿Te gusta? ¿Me lo prestas?</b> · usted → <b>¿Le gusta? ¿Me lo presta?</b>",
  whyLabel:"Comment ne pas se perdre avec les pronoms ?",
  whyText:"Applique toujours le même ordre mental : 1) Qui reçoit ? (COI : me, te, le, nos, os, les). 2) Quoi ? (COD : lo, la, los, las). 3) COI d'abord, COD ensuite : « Te lo doy ». 4) Si les deux commencent par « l », « le » devient « se » : « Se lo doy ». 5) Place tout avant le verbe conjugué, ou collé à l'infinitif, au gérondif et à l'impératif affirmatif. Entraîne-toi avec des phrases de la vie réelle : « ¿Me lo das? Te lo doy. Se lo doy. ». Dix répétitions par jour pendant une semaine, et la mécanique devient un réflexe."
 },
 REVIEW: [
  {q:"« Plus grand que » :", opts:["más grande que","más grande de"], correct:0, fb:"más… que. (rappel A2.7)"},
  {q:"« Aussi rapide que » :", opts:["tan rápido como","tan rápido que"], correct:0, fb:"tan… como. (rappel A2.7)"},
  {q:"« Meilleur » :", opts:["mejor","más bueno"], correct:0, fb:"bueno → mejor. (rappel A2.7)"},
  {q:"« Le plus grand de la ville » :", opts:["el más grande de la ciudad","el más grande que la ciudad"], correct:0, fb:"Après superlatif : de. (rappel A2.7)"},
  {q:"« Plus de dix » :", opts:["más de diez","más que diez"], correct:0, fb:"Devant un chiffre : de. (rappel A2.7)"}
 ],
 DRILLS: [
  {type:"fill", text:"Veo el libro → ___ veo. (lo/la)", answers:["Lo","lo"], why:"el libro : masculin → lo."},
  {type:"fill", text:"Veo la casa → ___ veo. (lo/la)", answers:["La","la"], why:"la casa : féminin → la."},
  {type:"fill", text:"Compro los libros → ___ compro.", answers:["Los","los"], why:"los libros → los."},
  {type:"fill", text:"Compro las flores → ___ compro.", answers:["Las","las"], why:"las flores → las."},
  {type:"fill", text:"___ doy las llaves. (à toi)", answers:["Te","te"], why:"COI : te."},
  {type:"fill", text:"___ doy el libro a Ana. (à elle)", answers:["Le","le"], why:"COI : le."},
  {type:"fill", text:"Les explico la regla → ___ la explico. (le + la)", answers:["Se","se"], why:"le / les + la → se la."},
  {type:"fill", text:"Te doy el libro → ___ ___ doy. (te + lo)", answers:["Te lo","te lo"], why:"COI puis COD : te lo."},
  {type:"fill", text:"A mí ___ gusta el café.", answers:["me","Me"], why:"A mí → me."},
  {type:"fill", text:"A ti ___ gustan los libros.", answers:["te","Te"], why:"A ti → te."},
  {type:"fill", text:"A ella ___ gusta viajar.", answers:["le","Le"], why:"A ella → le."},
  {type:"fill", text:"A nosotros ___ gusta el mar.", answers:["nos","Nos"], why:"nosotros → nos."},
  {type:"fill", text:"A ellos ___ gustan los coches.", answers:["les","Les"], why:"ellos → les."},
  {type:"fill", text:"Me ___ los libros. (gustar)", answers:["gustan","Gustan"], why:"Pluriel : gustan."},
  {type:"fill", text:"Me ___ el chocolate. (encantar)", answers:["encanta","Encanta"], why:"Singulier : encanta."},
  {type:"fill", text:"Vouvoiement : ¿___ gusta el café, señor? (usted)", answers:["Le","le"], why:"usted → le."},
  {type:"fill", text:"No ___ sé. (je ne le sais pas)", answers:["lo","Lo"], why:"no + pronom + verbe."},
  {type:"fill", text:"Ya ___ he hecho. (je l'ai fait)", answers:["lo","Lo"], why:"Pronom avant haber."},
  {type:"choice", q:"« Je le lui donne » :", opts:["Se lo doy.","Le lo doy."], correct:0, why:"le + lo → se lo."},
  {type:"choice", q:"« Je vais le faire » :", opts:["Voy a hacerlo.","Voy a lo hacer."], correct:0, why:"Pronom collé à l'infinitif."},
  {type:"choice", q:"« Donne-le-moi » :", opts:["Dámelo.","Me lo da."], correct:0, why:"Impératif + pronoms collés."},
  {type:"choice", q:"« Moi non plus » :", opts:["A mí tampoco.","A mí también."], correct:0, why:"tampoco après négation."},
  {type:"choice", q:"Veo ___ Ana. (COD de personne)", opts:["a","—"], correct:0, why:"« a » devant une personne : Veo a Ana."},
  {type:"choice", q:"Avec usted :", opts:["¿Me lo da?","¿Me lo das?"], correct:0, why:"usted → da."},
  {type:"choice", q:"Pour un COD masculin personne, forme correcte partout :", opts:["lo","le"], correct:0, why:"« lo » est correct en Espagne comme en Amérique latine."}
 ],
 ANNOTATED: {
  title:"Quatre phrases avec pronoms",
  intro:"Quatre phrases pour reconnaître les pronoms. Touche chaque mot pour voir sa nature et sa traduction.",
  sentences:[
   {fr:"Je le vois tous les jours.", tokens:[
    {w:"Lo", tag:"pronom", info:"COD masc. sing.", fr:"le", tip:"Avant le verbe."},
    {w:"veo", tag:"verbe", info:"ver · présent · yo", fr:"je vois"},
    {w:"todos los días", tag:"locution", fr:"tous les jours"}
   ]},
   {fr:"Je te donne les clés.", tokens:[
    {w:"Te", tag:"pronom", info:"COI · 2e pers.", fr:"à toi"},
    {w:"doy", tag:"verbe", info:"dar · présent · yo", fr:"je donne"},
    {w:"las llaves", tag:"nom", fr:"les clés"}
   ]},
   {fr:"Je le lui donne demain.", tokens:[
    {w:"Se", tag:"pronom", info:"COI (= le)", fr:"à lui", tip:"le + lo → se lo."},
    {w:"lo", tag:"pronom", info:"COD masc.", fr:"le"},
    {w:"doy", tag:"verbe", fr:"je donne"},
    {w:"mañana", tag:"adverbe", fr:"demain"}
   ]},
   {fr:"Aimez-vous le café ?", tokens:[
    {w:"¿Le", tag:"pronom", info:"COI · usted", fr:"à vous"},
    {w:"gusta", tag:"verbe", info:"gustar · présent", fr:"plaît"},
    {w:"el café?", tag:"nom", info:"sujet du verbe", fr:"le café"}
   ]}
  ]
 },
 CULTURE_NOTE: {icon:"🔗", title:"Culture, langage informel et fiche récap de A2.8",
  html:"<b>🔗 Culture : « tú » et « usted » avec les pronoms</b> Les pronoms aident à rester poli sans effort : « Se lo recomiendo » (je vous le recommande), « ¿Le importa si…? » (cela vous dérange-t-il si… ?), « ¿Me permite? » (vous permettez ?). Entre amis, on dit plus simplement « Te lo recomiendo », « ¿Te importa si…? ».<br><br><b>🗣️ Dix expressions informelles avec pronoms</b><br>1. <b>Ni idea</b> = aucune idée.<br>2. <b>Te lo juro</b> = je te le jure.<br>3. <b>Ya te lo dije</b> = je te l'ai déjà dit.<br>4. <b>¿Me lo cuentas?</b> = tu me racontes ?<br>5. <b>Me da igual</b> = ça m'est égal.<br>6. <b>Me da pena</b> = ça me fait de la peine.<br>7. <b>Me apetece</b> = j'ai envie de (Espagne).<br>8. <b>Me suena</b> = ça me dit quelque chose.<br>9. <b>Me lo imaginaba</b> = je m'en doutais.<br>10. <b>Eso te pasa por…</b> = c'est bien fait pour toi.<br>Avec un supérieur : « Se lo agradezco mucho » (je vous en remercie).<br><br><b>📋 Fiche récap A2.8</b><br>• <b>COD</b> : lo · la · los · las.<br>• <b>COI</b> : me · te · le · nos · os · les.<br>• <b>Place</b> : avant le verbe conjugué ; collé à l'infinitif, au gérondif et à l'impératif.<br>• <b>Deux pronoms</b> : COI + COD ; le / les + lo → <b>se lo</b>.<br>• <b>Gustar</b> : me gusta / me gustan ; a mí también / tampoco.<br>• <b>Tú ET usted</b> : ¿Te gusta? / ¿Le gusta?"},
 NEXT_PREVIEW:"A2.9 (Ville, voyage, impératif) : demander son chemin, acheter un billet, donner des ordres polis : « Gire a la derecha », « Siga todo recto », « Perdone, ¿dónde está…? ».",
 META:{vocabTitle:"Lo veo, le doy, me gusta : les pronoms COD / COI (A2.8)", lectureTitle:"Una amiga nueva", bilanTitle:"Bravo, tu ne te répètes plus !", pronLabel:"Pronoms collés au verbe : te-lo-DOY, accent dans dímelo, a MÍ también", todayLede:"remplacer les noms par lo / la / los / las et me / te / le, utiliser gustar et ses cousins, enchaîner deux pronoms (se lo doy) et rester poli avec usted"}
};
})();


// A2.9 — Gire a la derecha : ville, voyage, impératif — leçon 221
(function(){
function blk(name, rows){
  var v = __esB(name, rows);
  v.forEach(function(o, i){ o.emo = rows[i][4]; o.ex = [rows[i][5], rows[i][6]]; });
  return v;
}
var V = [].concat(
 blk("Demander son chemin", [
  ["Perdone, ¿dónde está…?","/peɾˈðone ˈdonde esˈta/","Excusez-moi, où est… ?","« Perdone » (usted) pour un inconnu, « Perdona » (tú) pour un jeune ou un ami. Plus poli que « Oye ».","🧭","Perdone, ¿dónde está la estación?","Excusez-moi, où est la gare ?"],
  ["¿Cómo llego a…?","/ˈkomo ˈʎeɣo a/","Comment j'arrive à… ?","llegar → llego (yo). « ¿Cómo llego a la plaza? ».","🗺️","¿Cómo llego al museo?","Comment j'arrive au musée ?"],
  ["¿Hay … cerca de aquí?","/aj ˈθeɾka ðe aˈki/","Y a-t-il… près d'ici ?","« Hay » pour demander l'existence : « ¿Hay un banco cerca de aquí? ».","📍","¿Hay una farmacia cerca de aquí?","Y a-t-il une pharmacie près d'ici ?"],
  ["a la derecha · a la izquierda","/a la ðeˈɾetʃa/","à droite · à gauche","Toujours avec « a la ».","↔️","Gire a la derecha.","Tournez à droite."],
  ["todo recto · derecho","/ˈtoðo ˈrekto/","tout droit","« Siga todo recto » (usted), « Sigue todo recto » (tú). En Amérique latine : « derecho ».","⬆️","Siga todo recto hasta la plaza.","Continuez tout droit jusqu'à la place."],
  ["la esquina","/la esˈkina/","le coin de la rue","« En la esquina » = au coin.","📐","El banco está en la esquina.","La banque est au coin."],
  ["el semáforo","/el semˈaforo/","le feu (de circulation)","Masculin. Accent sur le a : se-MÁ-fo-ro.","🚦","Gire en el segundo semáforo.","Tournez au deuxième feu."],
  ["la rotonda","/la roˈtonda/","le rond-point","Féminin. En Amérique latine : la glorieta.","🔄","Tome la tercera salida de la rotonda.","Prenez la troisième sortie du rond-point."]
 ]),
 blk("Se situer : cerca, lejos, enfrente…", [
  ["cerca de · lejos de","/ˈθeɾka ðe · ˈlexos ðe/","près de · loin de","« Cerca de aquí » (près d'ici), « lejos de la estación ».","📏","Mi casa está cerca de la estación.","Ma maison est près de la gare."],
  ["enfrente de · al lado de","/enˈfɾente ðe · al ˈlaðo ðe/","en face de · à côté de","« Al lado del banco » = à côté de la banque (de + el = del).","↔️","La farmacia está al lado del banco.","La pharmacie est à côté de la banque."],
  ["entre … y …","/ˈentɾe/","entre … et …","« Entre el banco y la tienda ».","↔️","Está entre el banco y la tienda.","C'est entre la banque et le magasin."],
  ["detrás de · delante de","/deˈtɾas ðe · deˈlante ðe/","derrière · devant","« Detrás de la iglesia ».","🔙","El parque está detrás del museo.","Le parc est derrière le musée."],
  ["la calle · la avenida","/la ˈkaʎe · la aβeˈniða/","la rue · l'avenue","Féminins.","🛣️","Vivo en la calle Mayor.","J'habite rue Mayor."],
  ["la plaza","/la ˈplaθa/","la place","Féminin.","⛲","La plaza está a dos minutos.","La place est à deux minutes."],
  ["la primera · la segunda calle","/la piɾˈmeɾa/","la première · la deuxième rue","Ordinaux féminins devant calle : primera, segunda, tercera. Masculin : el primero, el segundo.","1️⃣","Tome la segunda calle a la izquierda.","Prenez la deuxième rue à gauche."],
  ["a cinco minutos","/a ˈθinko miˈnutos/","à cinq minutes","« A cinco minutos andando » = à cinq minutes à pied.","⏱️","Está a diez minutos andando.","C'est à dix minutes à pied."]
 ]),
 blk("L'impératif de politesse : usted", [
  ["gire","/ˈxiɾe/","tournez","girar → gire (usted). Terminaison : -AR → -e. « Gire a la derecha ».","🔃","Gire a la izquierda.","Tournez à gauche."],
  ["siga","/ˈsiɣa/","continuez, suivez","seguir → siga (radical sig-). « Siga todo recto ».","➡️","Siga por esta calle.","Continuez par cette rue."],
  ["cruce","/ˈkɾuθe/","traversez","cruzar → cruce (z devant a/o, c devant e). « Cruce la plaza ».","🚶","Cruce la plaza y gire.","Traversez la place et tournez."],
  ["tome","/ˈtome/","prenez","tomar → tome. « Tome la primera calle ».","🛤️","Tome la primera calle a la derecha.","Prenez la première rue à droite."],
  ["baje · suba","/ˈbaxe · ˈsuβa/","descendez · montez","bajar → baje ; subir → suba. -ER / -IR → -a.","↕️","Suba por esta calle.","Montez par cette rue."],
  ["coma · escriba","/ˈkoma · eskɾiβa/","mangez · écrivez","Pour usted : -AR → -e ; -ER / -IR → -a. L'inverse du présent (hablas → hable ; comes → coma).","🔁","Escriba su nombre aquí.","Écrivez votre nom ici."],
  ["espere · pase · mire","/esˈpeɾe · ˈpase · ˈmiɾe/","attendez · entrez · regardez","« Pase » = entrez (ou passez). « Espere un momento » = attendez un instant.","🙏","Espere un momento, por favor.","Attendez un instant, s'il vous plaît."],
  ["por favor","/poɾ faˈβoɾ/","s'il vous plaît","Obligatoire avec un impératif : « Gire, por favor ».","🙏","Siga recto, por favor.","Continuez tout droit, s'il vous plaît."]
 ]),
 blk("L'impératif entre amis : tú", [
  ["gira · sigue · cruza","/ˈxiɾa · ˈsiɣe · ˈkɾuθa/","tourne · continue · traverse","Impératif tú = 3e personne du présent : él gira → gira. « Sigue » (e → i comme siguen).","👉","Gira a la derecha y sigue recto.","Tourne à droite et continue tout droit."],
  ["ven · ve · sal · haz","/ben · be · sal · aθ/","viens · va · sors · fais","Irréguliers du tú : ven (venir), ve (ir), sal (salir), haz (hacer), di (decir), pon (poner), ten (tener), sé (ser).","⚡","Ven aquí y haz la tarea.","Viens ici et fais le devoir."],
  ["di · pon · ten · sé","/di · pon · ten · se/","dis · mets · aie · sois","Ces cinq-là sont à connaître par cœur.","⚡","Di la verdad y sé amable.","Dis la vérité et sois aimable."],
  ["no gires · no comas","/no ˈxiɾes · no ˈkomas/","ne tourne pas · ne mange pas","Négatif tú : « no » + forme de usted avec -s. « No hables », « No comas », « No vayas ».","🚫","No comas tan rápido.","Ne mange pas si vite."],
  ["no gire · no coma","/no ˈxiɾe/","ne tournez pas · ne mangez pas","Négatif usted = la même forme que l'affirmatif : « No gire », « No pase ».","🚫","No pase por esa calle.","Ne passez pas par cette rue."],
  ["¡Cuidado! · ¡Ojo!","/kwiˈðaðo · ˈoxo/","Attention !","« ¡Cuidado con el escalón! ». « ¡Ojo! » est plus informel.","⚠️","¡Cuidado con el semáforo!","Attention au feu !"]
 ]),
 blk("Voyage et transports", [
  ["el billete · el boleto","/el biˈʎete/","le billet","Espagne : billete. Amérique latine : boleto.","🎫","Quiero un billete para Sevilla.","Je voudrais un billet pour Séville."],
  ["ida · ida y vuelta","/ˈiða i ˈbwelta/","aller simple · aller-retour","« Un billete de ida y vuelta, por favor ».","↔️","Dos billetes de ida y vuelta.","Deux billets aller-retour."],
  ["la estación · la parada","/la estaˈθjon · la paˈɾaða/","la gare · l'arrêt","Parada = arrêt de bus ou de métro.","🚉","La parada está al lado del banco.","L'arrêt est à côté de la banque."],
  ["el andén · la vía","/el anˈden · la ˈbia/","le quai · la voie","« Andén 3 » = quai 3.","🛤️","El tren sale del andén tres.","Le train part du quai 3."],
  ["el horario · el retraso","/el oˈɾaɾjo · el reˈtɾaso/","l'horaire · le retard","« Hay un retraso de diez minutos » = il y a dix minutes de retard.","⏰","El tren lleva diez minutos de retraso.","Le train a dix minutes de retard."],
  ["la salida · la llegada","/la saˈliða · la ʎeˈɣaða/","le départ · l'arrivée","« La salida » sert aussi pour « la sortie ».","🛫","La llegada es a las diez.","L'arrivée est à dix heures."],
  ["el equipaje · la maleta","/el ekiˈpaxe/","les bagages · la valise","« Equipaje » est singulier.","🧳","Mi equipaje está en el andén.","Mes bagages sont sur le quai."],
  ["reservar","/reseɾˈβaɾ/","réserver","« Quiero reservar una habitación ». Régulier.","📝","Quiero reservar un billete.","Je voudrais réserver un billet."]
 ]),
 blk("Poser les questions : tú ET usted", [
  ["¿A qué hora sale el tren?","/a ke ˈoɾa ˈsale/","À quelle heure part le train ?","salir → sale. « ¿A qué hora llega? » = à quelle heure arrive-t-il ?","🕐","¿A qué hora sale el próximo tren?","À quelle heure part le prochain train ?"],
  ["¿Cuánto cuesta el billete?","/ˈkwanto ˈkwesta/","Combien coûte le billet ?","costar → cuesta (o → ue).","💶","¿Cuánto cuesta el billete de ida y vuelta?","Combien coûte le billet aller-retour ?"],
  ["¿Me puede decir…? / ¿Me puedes decir…?","/me ˈpwede ðeˈθiɾ/","Pouvez-vous me dire… ? / Peux-tu me dire… ?","Usted : puede. Tú : puedes. Formule de politesse très courante.","🙏","¿Me puede decir dónde está la estación?","Pouvez-vous me dire où est la gare ?"]
 ]),
 blk("Informel et prononciation", [
  ["¡Vamos!","/ˈbamos/","Allons-y !","Impératif de ir à nosotros. « ¡Vamos! » = on y va.","🏃","¡Vamos, que perdemos el tren!","Allons-y, on va rater le train !"],
  ["¡Anda!","/ˈanda/","Allez ! Ça alors !","Informel : encouragement ou surprise.","😮","¡Anda, mira eso!","Ça alors, regarde ça !"],
  ["g de gire · j de baje","/ˈxiɾe · ˈbaxe/","j rauque","« Gi » et « je » se prononcent avec le j rauque : gire = HI-re.","🔊","Gire por esta calle.","Tournez par cette rue."]
 ])
);

LESSONS_ES[221] = {
 code:"A2.9", level:"A2",
 VOCAB: V,
 MEM_WORDS: __esIdx(V, ["Perdone, ¿dónde está…?","a la derecha · a la izquierda","todo recto · derecho","cerca de · lejos de","gire","siga","gira · sigue · cruza","ven · ve · sal · haz","el billete · el boleto","¡Vamos!"]),
 MINI_CHECKS: [
  {q:"« Tournez à droite » (usted) :", opts:["Gire a la derecha.","Gira a la derecha."], correct:0, fb:"usted → gire (-AR → -e). Tú : gira."},
  {q:"« Continue tout droit » (tú) :", opts:["Sigue todo recto.","Siga todo recto."], correct:0, fb:"tú → sigue. Usted : siga."},
  {q:"« Mangez » (usted) :", opts:["Coma","Come"], correct:0, fb:"-ER → -a pour usted : coma. Come = tú."},
  {q:"« Viens ici » (tú) :", opts:["Ven aquí.","Viene aquí."], correct:0, fb:"venir → ven (irrégulier)."},
  {q:"« Ne mange pas » (tú) :", opts:["No comas.","No come."], correct:0, fb:"Négatif tú : no + forme -s : no comas."},
  {q:"« Près de la gare » :", opts:["cerca de la estación","cerca la estación"], correct:0, fb:"cerca DE."},
  {q:"« À côté de la banque » :", opts:["al lado del banco","al lado de el banco"], correct:0, fb:"de + el = del."},
  {q:"« Où est la gare ? » (poli) :", opts:["Perdone, ¿dónde está la estación?","Oye, ¿dónde estás la estación?"], correct:0, fb:"Perdone + está (estar = lieu)."}
 ],
 ROUNDS: [
  __esR("Perdone, ¿dónde está la estación?","Excusez-moi, où est la gare ?"),
  __esR("Siga todo recto hasta la plaza.","Continuez tout droit jusqu'à la place."),
  __esR("Gire a la derecha, por favor.","Tournez à droite, s'il vous plaît."),
  __esR("Tome la segunda calle a la izquierda.","Prenez la deuxième rue à gauche."),
  __esR("La farmacia está al lado del banco.","La pharmacie est à côté de la banque."),
  __esR("¿Hay un banco cerca de aquí?","Y a-t-il une banque près d'ici ?"),
  __esR("¿A qué hora sale el próximo tren?","À quelle heure part le prochain train ?"),
  __esR("Dos billetes de ida y vuelta, por favor.","Deux billets aller-retour, s'il vous plaît."),
  __esR("Ven aquí y haz la tarea.","Viens ici et fais le devoir."),
  __esR("No comas tan rápido.","Ne mange pas si vite."),
  __esR("¿Me puede decir dónde está el museo?","Pouvez-vous me dire où est le musée ?"),
  __esR("Está a diez minutos andando.","C'est à dix minutes à pied."),
  __esR("¡Vamos, que perdemos el tren!","Allons-y, on va rater le train !")
 ],
 QUIZ: [
  {cat:"ecrit", q:"« Tournez à gauche » (usted) :", opts:["Gira a la izquierda.","Gire a la izquierda.","Girar a la izquierda."], correct:1, why:"usted → gire."},
  {cat:"ecrit", q:"« Prends la première rue » (tú) :", opts:["Tome la primera calle.", "Toma la primera calle.", "Tomas la primera calle."], correct:1, why:"tú → toma."},
  {cat:"ecrit", q:"« Écrivez votre nom » (usted) :", opts:["Escribe su nombre.","Escriba su nombre.","Escribir su nombre."], correct:1, why:"-IR → -a : escriba."},
  {cat:"ecrit", q:"« Fais-le » (tú) :", opts:["Hace lo.","Haz.","Hazlo."], correct:2, why:"hacer → haz ; avec le pronom : hazlo."},
  {cat:"ecrit", q:"« Dis la vérité » (tú) :", opts:["Dice la verdad.", "Dí la verdad.", "Di la verdad."], correct:2, why:"decir → di (sans accent)."},
  {cat:"ecrit", q:"« Ne tournez pas » (usted) :", opts:["No gira.","No gire.","No gires."], correct:1, why:"Négatif usted : no gire."},
  {cat:"ecrit", q:"« Ne parle pas » (tú) :", opts:["No habla.", "No hables.", "No hable."], correct:1, why:"Négatif tú : no hables."},
  {cat:"ecrit", q:"« À côté du parc » :", opts:["al lado de el parque", "a lado del parque", "al lado del parque"], correct:2, why:"al lado DEL parque."},
  {cat:"ecrit", q:"« Y a-t-il une pharmacie près d'ici ? »", opts:["¿Es una farmacia cerca de aquí?", "¿Hay una farmacia cerca de aquí?", "¿Tiene una farmacia cerca?"], correct:1, why:"hay = existence."},
  {cat:"ecrit", q:"« Un aller-retour pour Madrid » :", opts:["Un billete de ida a Madrid y vuelta.", "Un billete ida vuelta Madrid.", "Un billete de ida y vuelta a Madrid."], correct:2, why:"de ida y vuelta."},
  {cat:"ecrit", q:"À un passant âgé : « Perdone, ¿me ___ decir dónde está el banco ? »", opts:["puedes","puede","puedo"], correct:1, why:"usted → puede."},
  {cat:"ecrit", q:"À un ami : « ¿Me ___ decir dónde está el banco ? »", opts:["puede","puedes","puedo"], correct:1, why:"tú → puedes."},
  {cat:"ecrit", q:"« Sois aimable » (tú) :", opts:["Es amable.", "Sé amable.", "Sea amable."], correct:1, why:"ser → sé (tú)."},
  {cat:"ecrit", q:"« Descendez à la deuxième station » (usted) :", opts:["Baja en la segunda estación.", "Bajar en la segunda estación.", "Baje en la segunda estación."], correct:2, why:"bajar → baje."},
  {cat:"oral", audio:"Siga todo recto y gire a la derecha.", q:"Écoute : que doit-on faire à la fin ?", opts:["Tourner à droite","Tourner à gauche","S'arrêter"], correct:0, why:"« gire a la derecha »."},
  {cat:"oral", audio:"La estación está cerca de aquí.", q:"Écoute : la gare est :", opts:["Près","Loin","Fermée"], correct:0, why:"« cerca »."},
  {cat:"oral", audio:"¿A qué hora sale el tren?", q:"Écoute : que demande-t-il ?", opts:["L'heure du départ","Le prix","Le quai"], correct:0, why:"« a qué hora sale »."},
  {cat:"oral", audio:"Perdone, ¿me puede decir dónde está el banco?", q:"Écoute : le ton est :", opts:["Poli (usted)","Familier (tú)","Impoli"], correct:0, why:"« Perdone », « me puede »."},
  {cat:"oral", audio:"No comas tan rápido.", q:"Écoute : à qui parle-t-il ?", opts:["À un ami (tú)","À un inconnu (usted)","À un groupe"], correct:0, why:"« comas » : négatif tú."},
  {cat:"comprehension", passage:"Turista: Perdone, ¿dónde está la estación? — Señora: Siga todo recto hasta el semáforo. Luego gire a la derecha y tome la segunda calle. La estación está enfrente del banco. — Turista: ¿Está lejos? — Señora: No, está a diez minutos andando.", q:"Où doit-on tourner au feu ?", opts:["À droite","À gauche","Tout droit"], correct:0, why:"« gire a la derecha »."},
  {cat:"comprehension", passage:"Turista: Perdone, ¿dónde está la estación? — Señora: Siga todo recto hasta el semáforo. Luego gire a la derecha y tome la segunda calle. La estación está enfrente del banco. — Turista: ¿Está lejos? — Señora: No, está a diez minutos andando.", q:"La gare est en face de :", opts:["La banque","La pharmacie","Le parc"], correct:0, why:"« enfrente del banco »."},
  {cat:"comprehension", passage:"Turista: Perdone, ¿dónde está la estación? — Señora: Siga todo recto hasta el semáforo. Luego gire a la derecha y tome la segunda calle. La estación está enfrente del banco. — Turista: ¿Está lejos? — Señora: No, está a diez minutos andando.", q:"Combien de temps à pied ?", opts:["10 minutes","20 minutes","1 heure"], correct:0, why:"« diez minutos »."},
  {cat:"comprehension", passage:"Empleado: Buenos días. ¿En qué puedo ayudarle? — Cliente: Quiero un billete de ida y vuelta a Sevilla para mañana. — Empleado: El tren sale a las nueve y llega a las doce. Cuesta cincuenta euros. — Cliente: Perfecto. ¿Hay algún retraso? — Empleado: No, hoy todo va bien.", q:"Quel billet le client veut-il ?", opts:["Un aller-retour pour Séville","Un aller simple pour Madrid","Un billet de bus"], correct:0, why:"« ida y vuelta a Sevilla »."},
  {cat:"comprehension", passage:"Empleado: Buenos días. ¿En qué puedo ayudarle? — Cliente: Quiero un billete de ida y vuelta a Sevilla para mañana. — Empleado: El tren sale a las nueve y llega a las doce. Cuesta cincuenta euros. — Cliente: Perfecto. ¿Hay algún retraso? — Empleado: No, hoy todo va bien.", q:"À quelle heure arrive le train ?", opts:["À douze heures","À neuf heures","À cinq heures"], correct:0, why:"« llega a las doce »."}
 ],
 PRON_VERBS: [
  {en:"gire · gira", fr:"tournez · tourne (HI-re, HI-ra : g = j rauque devant i)"},
  {en:"siga · sigue", fr:"continuez · continue (SI-ga, SI-gue)"},
  {en:"cruce", fr:"traversez (KRU-the en Espagne)"},
  {en:"baje · suba", fr:"descendez · montez (BA-je, SU-ba)"},
  {en:"ven · ve · sal · haz", fr:"viens · va · sors · fais (ben, be, sal, ath)"},
  {en:"Perdone, ¿dónde está…?", fr:"Excusez-moi, où est… ? (per-DO-ne, DON-de es-TA)"},
  {en:"a la derecha", fr:"à droite (a la de-RE-cha)"},
  {en:"todo recto", fr:"tout droit (TO-do REK-to)"},
  {en:"¿A qué hora sale el tren?", fr:"À quelle heure part le train ? (a ke O-ra SA-le el tren)"},
  {en:"¡Vamos!", fr:"Allons-y ! (BA-mos)"}
 ],
 READING: [
  "Marta llega a Sevilla en tren y no conoce la ciudad.",
  "En la estación, pregunta a un empleado: «Perdone, ¿dónde está el hotel Sol?»",
  "—Salga de la estación y gire a la izquierda —responde el empleado.",
  "—Siga todo recto hasta la plaza y cruce el puente.",
  "—Después tome la segunda calle a la derecha. El hotel está al lado de un banco.",
  "Marta camina diez minutos y se pierde.",
  "Entonces pregunta a una chica: «Perdona, ¿me puedes ayudar?»",
  "—Claro. Mira, gira en la esquina, sigue recto y ya lo ves —contesta la chica.",
  "Por fin, Marta llega al hotel y reserva una habitación.",
  "—¡Qué bien! —dice—. Mañana quiero visitar el centro."
 ],
 GLOSS: [
  {en:"el puente", fr:"le pont"},
  {en:"se pierde", fr:"elle se perd (perderse, e → ie au présent)"},
  {en:"salga de", fr:"sortez de (salir → salga, usted)"},
  {en:"Perdona", fr:"Excuse-moi (tú) ≠ Perdone (usted)"},
  {en:"mira", fr:"regarde (impératif tú de mirar)"},
  {en:"ya lo ves", fr:"tu le vois déjà"},
  {en:"por fin", fr:"enfin"},
  {en:"el centro", fr:"le centre-ville"}
 ],
 GRAMMAR1: {
  heading:"L'impératif : usted (poli), tú (amical) et la négation",
  lede:"Pour demander ou donner un chemin, un conseil, un ordre poli, tu utilises l'impératif. En espagnol, il existe deux versions : usted (formelle, courante dans la rue et au travail) et tú (entre amis). La clé : avec usted, les terminaisons s'inversent (-AR → -e, -ER / -IR → -a).",
  conj:[
   ["usted (-AR) →","hable · gire · tome · cruce","Gire a la derecha. Tome la segunda calle. Cruce la plaza."],
   ["usted (-ER / -IR) →","coma · escriba · suba · baje","Escriba su nombre. Suba por esta calle. Baje en la segunda."],
   ["tú affirmatif →","= él du présent : habla · come · escribe","Habla más despacio. Come algo. Escribe tu nombre."],
   ["tú irréguliers →","ven · ve · sal · haz · di · pon · ten · sé","Ven aquí. Ve a casa. Sal ahora. Haz la tarea."],
   ["tú négatif →","no + -es (-AR) / -as (-ER, -IR)","No hables. No comas. No escribas."],
   ["usted négatif →","no + forme usted","No gire. No pase. No coma."]
  ],
  ruleHtml:"🎩 <b>1. Usted : on inverse la voyelle.</b> Au présent, -AR a un « a » (hablas, habla) et -ER / -IR un « e » ou « i ». À l'impératif usted, c'est l'inverse : <b>-AR → -e</b> (<i>hable, gire, tome, cruce, pague</i>) et <b>-ER / -IR → -a</b> (<i>coma, escriba, suba, baje, abra</i>). Ajoute <b>por favor</b>. Les petits changements d'orthographe gardent le son : <i>cruzar → cruce, pagar → pague, buscar → busque</i>.<br><br>🔑 <b>2. Les verbes à radical irrégulier.</b> <b>seguir → siga</b>, <b>salir → salga</b>, <b>venir → venga</b>, <b>hacer → haga</b>, <b>poner → ponga</b>, <b>decir → diga</b>, <b>tener → tenga</b>, <b>pedir → pida</b>. Retiens : le radical de <b>yo</b> au présent (sigo, salgo, vengo, hago, pongo, digo, tengo) + terminaison inversée (a).<br><br>🤝 <b>3. Tú affirmatif = la forme « él ».</b> <i>Habla, come, escribe, gira, sigue, cruza.</i> Huit irréguliers à connaître : <b>ven · ve · sal · haz · di · pon · ten · sé</b>.<br><br>🚫 <b>4. Le négatif.</b> <b>tú</b> : <i>no hables, no comas, no vengas, no hagas</i> (forme -s de la liste usted). <b>usted</b> : <i>no hable, no coma, no gire</i>. Le négatif tú n'est PAS la forme de l'affirmatif.<br><br>📎 <b>5. Les pronoms.</b> Ils se collent à l'affirmatif (avec accent si besoin) : <i>Dímelo, hazlo, siéntese, llámeme.</i> Ils se placent avant au négatif : <i>No me lo digas. No lo haga.</i><br><br>🗺️ <b>6. Donner un chemin.</b> <b>Siga todo recto · gire a la derecha / izquierda · tome la primera / segunda calle · cruce la plaza · suba / baje por esta calle · al final de la calle · en la esquina · en el semáforo</b>.<br><br>👥 <b>7. Tutoiement ET vouvoiement.</b> tú → <b>Perdona, ¿me puedes ayudar? Gira, sigue, cruza.</b> · usted → <b>Perdone, ¿me puede ayudar? Gire, siga, cruce.</b> Dans la rue avec un inconnu, utilise usted.",
  dialogueLede:"Une touriste demande son chemin (vouvoiement) :",
  dialogue:[
   {who:"you", en:"Perdone, ¿dónde está la estación?", fr:"Excusez-moi, où est la gare ?"},
   {who:"them", en:"Siga todo recto hasta el semáforo.", fr:"Continuez tout droit jusqu'au feu."},
   {who:"you", en:"¿Y luego?", fr:"Et ensuite ?"},
   {who:"them", en:"Gire a la derecha y tome la segunda calle.", fr:"Tournez à droite et prenez la deuxième rue."},
   {who:"you", en:"¿Está lejos?", fr:"C'est loin ?"},
   {who:"them", en:"No, está a diez minutos andando.", fr:"Non, c'est à dix minutes à pied."}
  ],
  whyLabel:"Pourquoi les voyelles s'inversent-elles ?",
  whyText:"L'impératif usted vient du mode subjonctif, un mode qui signale « ordre, souhait, conseil ». Ce mode a une particularité : il prend la voyelle opposée à celle du présent. Les verbes en -AR (a au présent) prennent un -e ; les verbes en -ER / -IR (e / i au présent) prennent un -a. Cette « inversion » est le signal du subjonctif : tu la retrouveras partout. L'avantage : une seule règle, et elle s'applique aussi au négatif tú. Une astuce de mémoire : « hablAR → hablE » et « comER → comA » : chaque verbe prend la voyelle de l'autre famille."
 },
 GRAMMAR2: {
  heading:"Voyager : acheter un billet, se repérer, négocier",
  dialogueLede:"Au guichet d'une gare (vouvoiement) :",
  dialogue:[
   {who:"them", en:"Buenos días. ¿En qué puedo ayudarle?", fr:"Bonjour. En quoi puis-je vous aider ?"},
   {who:"you", en:"Quiero un billete de ida y vuelta a Sevilla para mañana.", fr:"Je voudrais un billet aller-retour pour Séville pour demain."},
   {who:"them", en:"El tren sale a las nueve. ¿Quiere ventanilla o pasillo?", fr:"Le train part à neuf heures. Voulez-vous côté fenêtre ou couloir ?"},
   {who:"you", en:"Ventanilla, por favor. ¿Cuánto cuesta?", fr:"Côté fenêtre, s'il vous plaît. Combien ça coûte ?"},
   {who:"them", en:"Cincuenta euros. Pague en la caja, por favor.", fr:"Cinquante euros. Payez à la caisse, s'il vous plaît."},
   {who:"you", en:"Gracias. ¿De qué andén sale?", fr:"Merci. De quel quai part-il ?"}
  ],
  ruleHtml:"🎫 <b>1. Acheter un billet.</b> <b>Quiero / Quería un billete de ida (y vuelta) a…</b> · <b>¿A qué hora sale / llega…?</b> · <b>¿Cuánto cuesta?</b> · <b>¿De qué andén sale?</b> · <b>¿Hay algún retraso?</b>. Pour être poli, utilise « por favor » et « gracias ».<br><br>🧳 <b>2. Les consignes du personnel.</b> Tu les entends à l'impératif usted : <b>Pase por aquí</b> (passez par ici), <b>Espere un momento</b>, <b>Pague en la caja</b>, <b>Enseñe su billete</b> (montrez votre billet), <b>Suba al tren</b>, <b>Baje en la próxima</b>.<br><br>🗺️ <b>3. Se repérer.</b> <b>Estoy perdido/a</b> (je suis perdu), <b>No sé dónde estoy</b>, <b>¿Dónde estamos en el mapa?</b>, <b>¿Es por aquí?</b> (est-ce par ici ?).<br><br>🚦 <b>4. Tú dans la vie réelle.</b> Entre amis : <b>Mira, ven, vamos, espera, ¡date prisa!</b> (dépêche-toi). Avec le négatif : <b>No te preocupes</b> (ne t'inquiète pas), <b>No llegues tarde</b>.<br><br>⚠️ <b>5. Estar ou ser ?</b> Pour un lieu : <b>está</b> (« ¿Dónde está la estación? »). Pour une description : <b>es</b> (« La estación es grande »). Pour un événement : <b>es</b> (« El concierto es en el parque »).<br><br>🌍 <b>6. Différences régionales.</b> <b>billete</b> (Espagne) / <b>boleto</b> (Amérique latine) ; <b>autobús</b> / <b>colectivo, guagua, camión</b> selon le pays ; <b>recto</b> / <b>derecho</b> ; <b>rotonda</b> / <b>glorieta</b>.<br><br>🗣️ <b>7. Informel.</b> <b>¡Vamos!</b>, <b>¡Anda!</b>, <b>¡Ojo!</b>, <b>¡Date prisa!</b>, <b>Tranqui</b> (calme-toi, familier).<br><br>👥 <b>8. Tutoiement ET vouvoiement.</b> tú → <b>¿Me puedes ayudar? Ven conmigo.</b> · usted → <b>¿Me puede ayudar? Venga conmigo.</b>",
  whyLabel:"Quand dire tú et quand dire usted dans la rue ?",
  whyText:"Dans la rue, on tutoie facilement les jeunes et les touristes, mais on vouvoie les personnes âgées, les commerçants et les agents. En cas de doute, « usted » est plus sûr : personne ne s'offusque d'être trop poli. À l'inverse, un « tú » trop familier peut surprendre. Un bon repère : suis le registre de ton interlocuteur ; s'il te tutoie, tu peux le tutoyer. Et pour l'impératif, rappelle-toi la règle clé : usted = voyelle inversée (hable, coma) ; tú = forme él (habla, come)."
 },
 REVIEW: [
  {q:"« Je le vois » (el libro) :", opts:["Lo veo.","Le veo."], correct:0, fb:"COD masc. : lo. (rappel A2.8)"},
  {q:"« Je lui donne le livre » :", opts:["Le doy el libro.","Lo doy el libro."], correct:0, fb:"COI : le. (rappel A2.8)"},
  {q:"« Je le lui donne » :", opts:["Se lo doy.","Le lo doy."], correct:0, fb:"le + lo → se lo. (rappel A2.8)"},
  {q:"« J'aime les livres » :", opts:["Me gustan los libros.","Me gusta los libros."], correct:0, fb:"Pluriel : gustan. (rappel A2.8)"},
  {q:"« Moi aussi » :", opts:["A mí también.","A mí tampoco."], correct:0, fb:"Accord positif : también. (rappel A2.8)"}
 ],
 DRILLS: [
  {type:"fill", text:"___ a la derecha, por favor. (girar, usted)", answers:["Gire","gire"], why:"-AR → -e."},
  {type:"fill", text:"___ todo recto. (seguir, usted)", answers:["Siga","siga"], why:"seguir → siga."},
  {type:"fill", text:"___ la plaza. (cruzar, usted)", answers:["Cruce","cruce"], why:"z → c devant e."},
  {type:"fill", text:"___ la primera calle. (tomar, usted)", answers:["Tome","tome"], why:"-AR → -e."},
  {type:"fill", text:"___ su nombre aquí. (escribir, usted)", answers:["Escriba","escriba"], why:"-IR → -a."},
  {type:"fill", text:"___ un momento. (esperar, usted)", answers:["Espere","espere"], why:"-AR → -e."},
  {type:"fill", text:"___ en la segunda. (bajar, usted)", answers:["Baje","baje"], why:"bajar → baje."},
  {type:"fill", text:"___ aquí. (venir, tú)", answers:["Ven","ven"], why:"venir → ven."},
  {type:"fill", text:"___ la tarea. (hacer, tú)", answers:["Haz","haz"], why:"hacer → haz."},
  {type:"fill", text:"___ la verdad. (decir, tú)", answers:["Di","di"], why:"decir → di."},
  {type:"fill", text:"___ amable. (ser, tú)", answers:["Sé","sé"], why:"ser → sé."},
  {type:"fill", text:"___ a casa. (ir, tú)", answers:["Ve","ve"], why:"ir → ve."},
  {type:"fill", text:"No ___ tan rápido. (comer, tú)", answers:["comas","Comas"], why:"Négatif tú : -as."},
  {type:"fill", text:"No ___ tanto. (hablar, tú)", answers:["hables","Hables"], why:"Négatif tú : -es."},
  {type:"fill", text:"No ___ por esa calle. (pasar, usted)", answers:["pase","Pase"], why:"Négatif usted : pase."},
  {type:"fill", text:"___ en la esquina. (girar, tú)", answers:["Gira","gira"], why:"tú → gira."},
  {type:"fill", text:"___ recto. (seguir, tú)", answers:["Sigue","sigue"], why:"tú → sigue."},
  {type:"fill", text:"La farmacia está al lado ___ banco. (de + el)", answers:["del","Del"], why:"de + el = del."},
  {type:"choice", q:"Usted, -AR :", opts:["-e (gire)","-a (gira)"], correct:0, why:"Voyelle inversée."},
  {type:"choice", q:"Usted, -ER :", opts:["-a (coma)","-e (come)"], correct:0, why:"Voyelle inversée."},
  {type:"choice", q:"Tú affirmatif de « hablar » :", opts:["habla","hable"], correct:0, why:"= forme él."},
  {type:"choice", q:"Négatif tú :", opts:["No hables","No habla"], correct:0, why:"Forme avec -s."},
  {type:"choice", q:"À un passant âgé :", opts:["Perdone","Perdona"], correct:0, why:"usted → perdone."},
  {type:"choice", q:"« Billet » en Amérique latine :", opts:["boleto","billete"], correct:0, why:"billete = Espagne."},
  {type:"choice", q:"Pour dire « où est la gare ? » :", opts:["¿Dónde está la estación?","¿Dónde es la estación?"], correct:0, why:"Lieu : estar."}
 ],
 ANNOTATED: {
  title:"Quatre phrases pour s'orienter",
  intro:"Quatre phrases pour reconnaître l'impératif. Touche chaque mot pour voir sa nature et sa traduction.",
  sentences:[
   {fr:"Excusez-moi, où est la gare ?", tokens:[
    {w:"Perdone", tag:"verbe", info:"perdonar · impératif · usted", fr:"excusez-moi", tip:"-AR → -e."},
    {w:"¿dónde", tag:"adverbe", fr:"où"},
    {w:"está", tag:"verbe", info:"estar · présent", fr:"est"},
    {w:"la estación?", tag:"nom", info:"fém. sing.", fr:"la gare"}
   ]},
   {fr:"Continuez tout droit.", tokens:[
    {w:"Siga", tag:"verbe", info:"seguir · impératif · usted", fr:"continuez", tip:"Radical sig- (comme yo sigo)."},
    {w:"todo recto", tag:"locution", fr:"tout droit"}
   ]},
   {fr:"Tournez à droite et prenez la deuxième rue.", tokens:[
    {w:"Gire", tag:"verbe", info:"girar · impératif · usted", fr:"tournez"},
    {w:"a la derecha", tag:"locution", fr:"à droite"},
    {w:"y", tag:"conjonction", fr:"et"},
    {w:"tome", tag:"verbe", info:"tomar · impératif · usted", fr:"prenez"},
    {w:"la segunda calle", tag:"nom", info:"fém. sing.", fr:"la deuxième rue"}
   ]},
   {fr:"Ne mange pas si vite.", tokens:[
    {w:"No", tag:"adverbe", info:"négation", fr:"ne… pas"},
    {w:"comas", tag:"verbe", info:"comer · impératif négatif · tú", fr:"mange", tip:"Négatif tú : -as."},
    {w:"tan", tag:"adverbe", fr:"si"},
    {w:"rápido", tag:"adverbe", fr:"vite"}
   ]}
  ]
 },
 CULTURE_NOTE: {icon:"🗺️", title:"Culture, langage informel et fiche récap de A2.9",
  html:"<b>🗺️ Culture : demander son chemin</b> En Espagne et en Amérique latine, on s'adresse volontiers aux passants ; ils expliquent longuement et avec les mains. On dit « Perdone » en s'approchant, et on termine par « Muchas gracias, que tenga un buen día ». Les distances se donnent en minutes à pied (« a diez minutos »).<br><br><b>🗣️ Dix expressions informelles pour se déplacer</b><br>1. <b>¡Vamos!</b> = allons-y !<br>2. <b>¡Anda!</b> = ça alors / allez !<br>3. <b>¡Ojo!</b> = attention !<br>4. <b>¡Date prisa!</b> = dépêche-toi !<br>5. <b>Estoy perdido/a</b> = je suis perdu(e).<br>6. <b>Está a tiro de piedra</b> = c'est à deux pas.<br>7. <b>Está en el quinto pino</b> = c'est au bout du monde (familier).<br>8. <b>Ya casi estamos</b> = on y est presque.<br>9. <b>Tranqui</b> = tranquille.<br>10. <b>Cuando quieras</b> = quand tu veux.<br>Avec un supérieur : « Disculpe, ¿me puede indicar el camino? ».<br><br><b>📋 Fiche récap A2.9</b><br>• <b>Usted</b> : -AR → -e ; -ER / -IR → -a (gire, coma, escriba).<br>• <b>Irréguliers usted</b> : siga · salga · venga · haga · ponga · diga · tenga.<br>• <b>Tú</b> : = él ; ven · ve · sal · haz · di · pon · ten · sé.<br>• <b>Négatif</b> : tú → -es / -as ; usted → forme usted.<br>• <b>Chemin</b> : todo recto · a la derecha / izquierda · la segunda calle · cerca de · al lado de.<br>• <b>Billets</b> : ida y vuelta · andén · retraso."},
 NEXT_PREVIEW:"A2.10 (Santé et corps) : parler de sa santé chez le médecin : « Me duele la cabeza », « Tengo fiebre », « Hace dos días que… », « desde hace… ».",
 META:{vocabTitle:"Gire a la derecha : ville, voyage, impératif (A2.9)", lectureTitle:"Marta llega a Sevilla", bilanTitle:"Bravo, tu ne te perds plus !", pronLabel:"g = j devant e / i (gire, baje), accent dans semáforo, a QUÉ hora", todayLede:"demander et comprendre un chemin, utiliser l'impératif usted et tú (affirmatif et négatif), acheter un billet de train et rester poli en tutoiement ET en vouvoiement"}
};
})();


// A2.10 — Me duele la cabeza : santé et corps — leçon 222
(function(){
function blk(name, rows){
  var v = __esB(name, rows);
  v.forEach(function(o, i){ o.emo = rows[i][4]; o.ex = [rows[i][5], rows[i][6]]; });
  return v;
}
var V = [].concat(
 blk("Le corps", [
  ["la cabeza","/la kaˈβeθa/","la tête","Féminin. « Me duele la cabeza » = j'ai mal à la tête.","🧠","Me duele la cabeza.","J'ai mal à la tête."],
  ["la garganta","/la ɣaɾˈɣanta/","la gorge","Féminin. « Me duele la garganta ».","🗣️","Me duele la garganta.","J'ai mal à la gorge."],
  ["el estómago · la barriga","/el esˈtomaɣo/","l'estomac · le ventre","« Me duele el estómago » = j'ai mal au ventre.","🤢","Me duele el estómago.","J'ai mal à l'estomac."],
  ["la espalda","/la esˈpalda/","le dos","Féminin. « Me duele la espalda ».","🧍","Me duele la espalda.","J'ai mal au dos."],
  ["la mano · el pie","/la ˈmano · el pje/","la main · le pied","« Mano » est féminin malgré le -o. Pluriel : las manos, los pies.","✋","Me duelen los pies.","J'ai mal aux pieds."],
  ["la pierna · el brazo","/la ˈpjeɾna · el ˈbɾaθo/","la jambe · le bras","Pierna féminin, brazo masculin.","🦵","Me duele la pierna.","J'ai mal à la jambe."],
  ["el ojo · el oído","/el ˈoxo · el oˈiðo/","l'œil · l'oreille (interne)","« Los ojos » (yeux). « Me duele el oído » = j'ai mal à l'oreille (à l'intérieur).","👁️","Me duelen los ojos.","J'ai mal aux yeux."],
  ["el diente · la muela","/el ˈdjente · la ˈmwela/","la dent · la molaire","« Me duele una muela » = j'ai mal à une dent (du fond).","🦷","Me duele una muela.","J'ai mal à une dent."]
 ]),
 blk("Doler : j'ai mal à…", [
  ["me duele · me duelen","/me ˈdwele · me ˈdwelen/","j'ai mal à (sing. · pl.)","doler fonctionne comme gustar : on accorde avec la partie du corps. « Me duele la cabeza », « Me duelen los pies ».","🤕","Me duelen las piernas.","J'ai mal aux jambes."],
  ["te duele · le duele","/te ˈdwele · le ˈdwele/","tu as mal · il / elle a mal · vous avez mal","« ¿Qué le duele, señor? » = où avez-vous mal ? (usted).","🤕","¿Le duele la cabeza, señora?","Avez-vous mal à la tête, madame ?"],
  ["¿Dónde te duele?","/ˈdonde te ˈdwele/","Où as-tu mal ?","Avec usted : « ¿Dónde le duele? ». Réponse : « Me duele aquí ».","❓","¿Dónde le duele?","Où avez-vous mal ?"],
  ["Me duele mucho","/me ˈdwele ˈmutʃo/","J'ai très mal","« Mucho » après le verbe, jamais « muy ». « Me duele un poco » = j'ai un peu mal.","😖","Me duele mucho aquí.","J'ai très mal ici."],
  ["tengo dolor de…","/ˈtengo doˈloɾ ðe/","j'ai mal à… (autre construction)","« Tengo dolor de cabeza » = j'ai mal à la tête. « Dolor » = nom masculin.","🤕","Tengo dolor de cabeza.","J'ai mal à la tête."]
 ]),
 blk("Symptômes et maladies", [
  ["tener fiebre","/teˈneɾ ˈfjeβɾe/","avoir de la fièvre","« Tengo fiebre » : fiebre n'a pas d'article.","🌡️","Tengo fiebre desde ayer.","J'ai de la fièvre depuis hier."],
  ["tener tos · tener frío","/teˈneɾ tos/","tousser · avoir froid","« Tengo tos » (j'ai de la toux). « Tengo frío / calor / hambre / sueño ».","😷","Tengo tos y mucha fiebre.","J'ai de la toux et beaucoup de fièvre."],
  ["estar resfriado · la gripe","/esˈtaɾ resfɾiˈaðo · la ˈɡɾipe/","être enrhumé · la grippe","« Estoy resfriado/a ». La gripe = grippe.","🤧","Estoy resfriada.","Je suis enrhumée."],
  ["estar enfermo/a","/esˈtaɾ enˈfeɾmo/","être malade","Ser enfermo = être un malade chronique ; estar enfermo = être malade en ce moment.","🛌","Mi hijo está enfermo.","Mon fils est malade."],
  ["sentirse mal / bien","/senˈtiɾse mal/","se sentir mal / bien","Pronominal : me siento (e → ie). « Me siento mal ».","😕","Me siento mal desde esta mañana.","Je me sens mal depuis ce matin."],
  ["estar mareado/a","/esˈtaɾ maɾeˈaðo/","avoir la tête qui tourne","Très courant. « Estoy mareado ».","😵","Estoy un poco mareado.","J'ai un peu la tête qui tourne."],
  ["tener alergia","/teˈneɾ aˈlexja/","être allergique","« Tengo alergia al polen » (al = a + el).","🤧","Tengo alergia al polen.","Je suis allergique au pollen."],
  ["cansado/a · agotado/a","/kanˈsaðo · aɣoˈtaðo/","fatigué · épuisé","« Estoy agotado » = je suis épuisé.","😮‍💨","Estoy agotado después del viaje.","Je suis épuisé après le voyage."]
 ]),
 blk("Chez le médecin et à la pharmacie", [
  ["el médico · la médica","/el ˈmeðiko/","le médecin","Accent sur le é. « El médico » ou « la médica ».","👨‍⚕️","Tengo cita con el médico.","J'ai rendez-vous chez le médecin."],
  ["la cita","/la ˈθita/","le rendez-vous (médical)","« Pedir cita » = prendre rendez-vous. « Tengo cita a las diez ».","📅","Quiero pedir una cita.","Je voudrais prendre rendez-vous."],
  ["la receta","/la reˈθeta/","l'ordonnance","« El médico me da una receta ».","📋","Necesito una receta.","J'ai besoin d'une ordonnance."],
  ["el medicamento · la pastilla","/el meðikaˈmento · la pasˈtiʎa/","le médicament · le comprimé","« Una pastilla cada ocho horas ».","💊","Tome una pastilla por la mañana.","Prenez un comprimé le matin."],
  ["la farmacia · el farmacéutico","/la faɾˈmaθja/","la pharmacie · le pharmacien","« ¿Hay una farmacia de guardia? » = y a-t-il une pharmacie de garde ?","🏥","Voy a la farmacia.","Je vais à la pharmacie."],
  ["urgencias","/uɾˈxenθjas/","les urgences","Toujours au pluriel. « Voy a urgencias ».","🚑","Fui a urgencias anoche.","Je suis allé aux urgences hier soir."],
  ["el seguro · la tarjeta sanitaria","/el seˈɣuɾo/","l'assurance · la carte vitale (équivalent)","« Tiene seguro médico ».","🪪","¿Tiene seguro médico?","Avez-vous une assurance médicale ?"],
  ["descansar · beber · tomar","/deskanˈsaɾ/","se reposer · boire · prendre","À l'impératif usted : descanse, beba, tome. Conseils du médecin.","🛏️","Descanse y beba mucha agua.","Reposez-vous et buvez beaucoup d'eau."]
 ]),
 blk("Depuis, durée et fréquence", [
  ["desde hace…","/ˈdesðe ˈaθe/","depuis… (durée)","« Tengo fiebre desde hace dos días » = j'ai de la fièvre depuis deux jours. Présent + desde hace + durée.","⏱️","Me duele desde hace tres días.","J'ai mal depuis trois jours."],
  ["hace … que","/ˈaθe ke/","cela fait… que","« Hace dos días que tengo tos » : même sens, ordre inversé.","⏱️","Hace dos días que no como bien.","Cela fait deux jours que je ne mange pas bien."],
  ["desde ayer · desde el lunes","/ˈdesðe aˈʝeɾ/","depuis hier · depuis lundi","« Desde » + point de départ ; « desde hace » + durée.","📅","Estoy enfermo desde el lunes.","Je suis malade depuis lundi."],
  ["una vez al día","/ˈuna beθ al ˈdia/","une fois par jour","Fréquence : « dos veces al día », « tres veces por semana ».","🔢","Tome una pastilla dos veces al día.","Prenez un comprimé deux fois par jour."],
  ["cada ocho horas","/ˈkaða ˈotʃo ˈoɾas/","toutes les huit heures","« Cada » + durée = toutes les… « cada día » = chaque jour.","⏰","Tome esto cada ocho horas.","Prenez ça toutes les huit heures."],
  ["antes de · después de comer","/ˈantes ðe/","avant · après de manger","Avec infinitif : « Antes de comer, después de dormir ».","🍽️","Tómelo después de comer.","Prenez-le après avoir mangé."]
 ]),
 blk("Devoir, conseil, obligation", [
  ["deber + infinitif","/deˈβeɾ/","devoir (conseil)","« Debe descansar » = vous devez vous reposer. Plus doux que « tener que ».","📝","Debe beber mucha agua.","Vous devez boire beaucoup d'eau."],
  ["tener que + infinitif","/teˈneɾ ke/","devoir (nécessité)","« Tengo que ir al médico ».","⚠️","Tengo que ir al médico.","Je dois aller chez le médecin."],
  ["hay que + infinitif","/aj ke/","il faut (général)","Invariable : « Hay que descansar ».","📌","Hay que beber mucha agua.","Il faut boire beaucoup d'eau."],
  ["es mejor + infinitif","/es meˈxoɾ/","il vaut mieux","« Es mejor quedarse en casa ».","💡","Es mejor quedarse en casa.","Il vaut mieux rester à la maison."],
  ["no se preocupe","/no se pɾeoˈkupe/","ne vous inquiétez pas (usted)","Tú : « No te preocupes ». Très courant chez le médecin.","🙏","No se preocupe, no es grave.","Ne vous inquiétez pas, ce n'est pas grave."]
 ]),
 blk("Poser les questions : tú ET usted", [
  ["¿Qué te pasa? / ¿Qué le pasa?","/ke te ˈpasa/","Qu'est-ce que tu as ? / Qu'avez-vous ?","pasar → pasa. Question d'ouverture chez le médecin.","❓","¿Qué le pasa, señor?","Qu'avez-vous, monsieur ?"],
  ["¿Desde cuándo…?","/ˈdesðe ˈkwando/","Depuis quand… ?","« ¿Desde cuándo tiene fiebre? » = depuis quand avez-vous de la fièvre ?","❓","¿Desde cuándo le duele?","Depuis quand avez-vous mal ?"],
  ["¿Cómo se siente? / ¿Cómo te sientes?","/ˈkomo se ˈsjente/","Comment vous sentez-vous ? / Comment te sens-tu ?","sentirse : te sientes, se siente.","❓","¿Cómo se siente hoy?","Comment vous sentez-vous aujourd'hui ?"]
 ]),
 blk("Informel et prononciation", [
  ["Estoy hecho polvo","/esˈtoj ˈetʃo ˈpolβo/","Je suis crevé","Familier. « Polvo » = poussière.","😴","Estoy hecho polvo.","Je suis crevé."],
  ["Estoy fatal","/esˈtoj faˈtal/","Je me sens très mal","Familier, très courant.","😩","Estoy fatal desde ayer.","Je me sens très mal depuis hier."],
  ["¡Que te mejores!","/ke te meˈxoɾes/","Rétablis-toi vite !","Souhait entre amis. Avec usted : « ¡Que se mejore! ».","🌟","¡Que te mejores pronto!","Rétablis-toi vite !"],
  ["duele · duelen","/ˈdwele · ˈdwelen/","diphtongue ue","Diphtongue « ue » : une seule syllabe, dwe-le. Comme dans puedo, cuesta.","🔊","Me duelen los ojos.","J'ai mal aux yeux."]
 ])
);

LESSONS_ES[222] = {
 code:"A2.10", level:"A2",
 VOCAB: V,
 MEM_WORDS: __esIdx(V, ["la cabeza","la espalda","me duele · me duelen","tener fiebre","estar enfermo/a","la cita","la receta","desde hace…","una vez al día","¡Que te mejores!"]),
 MINI_CHECKS: [
  {q:"« J'ai mal à la tête » :", opts:["Me duele la cabeza.","Tengo duele cabeza."], correct:0, fb:"me duele + partie du corps."},
  {q:"« J'ai mal aux pieds » :", opts:["Me duelen los pies.","Me duele los pies."], correct:0, fb:"Pluriel : duelen."},
  {q:"« J'ai de la fièvre depuis deux jours » :", opts:["Tengo fiebre desde hace dos días.","Tengo fiebre hace dos días."], correct:0, fb:"desde hace + durée."},
  {q:"« Où avez-vous mal ? » (usted) :", opts:["¿Dónde le duele?","¿Dónde te duele?"], correct:0, fb:"usted → le."},
  {q:"« Deux fois par jour » :", opts:["dos veces al día","dos veces el día"], correct:0, fb:"al día = par jour."},
  {q:"« Toutes les huit heures » :", opts:["cada ocho horas","todas ocho horas"], correct:0, fb:"cada + durée."},
  {q:"« Je suis malade » (en ce moment) :", opts:["Estoy enfermo.","Soy enfermo."], correct:0, fb:"estar pour un état."},
  {q:"« Reposez-vous » (usted) :", opts:["Descanse.","Descansa."], correct:0, fb:"-AR → -e : descanse."}
 ],
 ROUNDS: [
  __esR("Me duele la cabeza desde ayer.","J'ai mal à la tête depuis hier."),
  __esR("¿Dónde le duele, señora?","Où avez-vous mal, madame ?"),
  __esR("Tengo fiebre desde hace dos días.","J'ai de la fièvre depuis deux jours."),
  __esR("Me duelen los pies.","J'ai mal aux pieds."),
  __esR("Quiero pedir una cita con el médico.","Je voudrais prendre rendez-vous chez le médecin."),
  __esR("Tome una pastilla cada ocho horas.","Prenez un comprimé toutes les huit heures."),
  __esR("Descanse y beba mucha agua.","Reposez-vous et buvez beaucoup d'eau."),
  __esR("No se preocupe, no es grave.","Ne vous inquiétez pas, ce n'est pas grave."),
  __esR("Estoy resfriada y tengo tos.","Je suis enrhumée et j'ai de la toux."),
  __esR("¿Desde cuándo le duele?","Depuis quand avez-vous mal ?"),
  __esR("Necesito una receta para este medicamento.","J'ai besoin d'une ordonnance pour ce médicament."),
  __esR("Tengo alergia al polen.","Je suis allergique au pollen."),
  __esR("¡Que te mejores pronto!","Rétablis-toi vite !")
 ],
 QUIZ: [
  {cat:"ecrit", q:"« J'ai mal au dos. »", opts:["Me duelen la espalda.", "Me duele la espalda.", "Tengo duele la espalda."], correct:1, why:"espalda singulier : duele."},
  {cat:"ecrit", q:"A mí me ___ los ojos. (doler)", opts:["duele","duelen","duelo"], correct:1, why:"los ojos : pluriel → duelen."},
  {cat:"ecrit", q:"Vouvoiement : « ¿Qué ___ duele ? »", opts:["te","le","me"], correct:1, why:"usted → le."},
  {cat:"ecrit", q:"Tengo tos ___ hace tres días.", opts:["hace", "en", "desde"], correct:2, why:"« desde hace » + durée."},
  {cat:"ecrit", q:"Estoy enfermo ___ el lunes.", opts:["desde hace", "desde", "hace"], correct:1, why:"« desde » + point de départ (le lundi)."},
  {cat:"ecrit", q:"Tome una pastilla ___ al día. (deux fois)", opts:["dos vez", "dos veces el", "dos veces"], correct:2, why:"dos veces al día."},
  {cat:"ecrit", q:"« Il faut boire beaucoup d'eau. »", opts:["Tiene que beber mucha agua.", "Hay que beber mucha agua."], correct:1, why:"hay que + infinitif = il faut (général)."},
  {cat:"ecrit", q:"« Vous devez vous reposer. » (usted)", opts:["Debes descansar.", "Debe descansar."], correct:1, why:"usted → debe."},
  {cat:"ecrit", q:"« Je me sens mal. »", opts:["Me sinto mal.", "Me siento mal."], correct:1, why:"sentirse → me siento (e → ie)."},
  {cat:"ecrit", q:"« Ne vous inquiétez pas » (usted) :", opts:["No te preocupes.", "No se preocupe."], correct:1, why:"usted → no se preocupe."},
  {cat:"ecrit", q:"« Prenez ce médicament » (usted) :", opts:["Toma este medicamento.", "Tome este medicamento."], correct:1, why:"usted → tome."},
  {cat:"ecrit", q:"« Je suis allergique au pollen. »", opts:["Soy alergia al polen.", "Tengo alergia al polen."], correct:1, why:"tener alergia."},
  {cat:"ecrit", q:"« Cela fait deux jours que je tousse. »", opts:["Desde dos días tengo tos.", "Hace dos días que tengo tos."], correct:1, why:"hace + durée + que + présent."},
  {cat:"ecrit", q:"« Où as-tu mal ? » (tú)", opts:["¿Dónde le duele?", "¿Dónde te duele?"], correct:1, why:"tú → te."},
  {cat:"oral", audio:"Me duele la garganta desde ayer.", q:"Écoute : où a-t-il mal ?", opts:["À la gorge","À la tête","Au dos"], correct:0, why:"« la garganta »."},
  {cat:"oral", audio:"Tengo fiebre desde hace tres días.", q:"Écoute : depuis quand ?", opts:["Trois jours","Un jour","Une semaine"], correct:0, why:"« tres días »."},
  {cat:"oral", audio:"Tome una pastilla cada ocho horas.", q:"Écoute : à quelle fréquence ?", opts:["Toutes les huit heures","Une fois par jour","Toutes les deux heures"], correct:0, why:"« cada ocho horas »."},
  {cat:"oral", audio:"¿Qué le pasa, señor?", q:"Écoute : le ton est :", opts:["Poli (usted)","Familier (tú)","Autoritaire"], correct:0, why:"« le pasa, señor »."},
  {cat:"oral", audio:"Me duelen los pies.", q:"Écoute : qu'est-ce qui fait mal ?", opts:["Les pieds","Les mains","Les yeux"], correct:0, why:"« los pies »."},
  {cat:"comprehension", passage:"Médico: Buenos días. ¿Qué le pasa? — Paciente: Me duele la cabeza y tengo fiebre desde hace dos días. — Médico: ¿Tiene tos? — Paciente: Un poco. — Médico: Es una gripe. Descanse, beba mucha agua y tome una pastilla cada ocho horas.", q:"Depuis quand a-t-il de la fièvre ?", opts:["Deux jours","Une semaine","Un jour"], correct:0, why:"« desde hace dos días »."},
  {cat:"comprehension", passage:"Médico: Buenos días. ¿Qué le pasa? — Paciente: Me duele la cabeza y tengo fiebre desde hace dos días. — Médico: ¿Tiene tos? — Paciente: Un poco. — Médico: Es una gripe. Descanse, beba mucha agua y tome una pastilla cada ocho horas.", q:"Quel est le diagnostic ?", opts:["Une grippe","Une allergie","Une fracture"], correct:0, why:"« Es una gripe »."},
  {cat:"comprehension", passage:"Médico: Buenos días. ¿Qué le pasa? — Paciente: Me duele la cabeza y tengo fiebre desde hace dos días. — Médico: ¿Tiene tos? — Paciente: Un poco. — Médico: Es una gripe. Descanse, beba mucha agua y tome una pastilla cada ocho horas.", q:"Combien de fois prendre le comprimé ?", opts:["Toutes les huit heures","Une fois par jour","Une fois par semaine"], correct:0, why:"« cada ocho horas »."},
  {cat:"comprehension", passage:"Ana: ¿Qué te pasa? Tienes mala cara. — Luis: Estoy hecho polvo. Me duele la espalda y no duermo bien. — Ana: ¿Desde cuándo? — Luis: Desde el lunes. — Ana: Pide cita con el médico. ¡Que te mejores pronto!", q:"Où Luis a-t-il mal ?", opts:["Au dos","À la gorge","Aux yeux"], correct:0, why:"« me duele la espalda »."},
  {cat:"comprehension", passage:"Ana: ¿Qué te pasa? Tienes mala cara. — Luis: Estoy hecho polvo. Me duele la espalda y no duermo bien. — Ana: ¿Desde cuándo? — Luis: Desde el lunes. — Ana: Pide cita con el médico. ¡Que te mejores pronto!", q:"Que lui conseille Ana ?", opts:["De prendre rendez-vous","De partir en voyage","De travailler plus"], correct:0, why:"« Pide cita »."}
 ],
 PRON_VERBS: [
  {en:"me duele · me duelen", fr:"j'ai mal (singulier · pluriel) (me DUE-le, me DUE-len ; ue = une syllabe)"},
  {en:"la cabeza", fr:"la tête (ka-BE-tha en Espagne)"},
  {en:"la garganta", fr:"la gorge (gar-GAN-ta)"},
  {en:"la espalda", fr:"le dos (es-PAL-da)"},
  {en:"tengo fiebre", fr:"j'ai de la fièvre (TEN-go FIE-bre)"},
  {en:"desde hace dos días", fr:"depuis deux jours (DES-de A-the dos DÍ-as)"},
  {en:"una pastilla", fr:"un comprimé (PAS-TI-ya)"},
  {en:"cada ocho horas", fr:"toutes les huit heures (KA-da O-tcho O-ras)"},
  {en:"No se preocupe.", fr:"Ne vous inquiétez pas. (no se pre-o-KU-pe)"},
  {en:"¡Que te mejores!", fr:"Rétablis-toi ! (ke te me-HO-res)"}
 ],
 READING: [
  "Marta se despierta con dolor de cabeza y no se siente bien.",
  "Tiene fiebre desde ayer y le duele la garganta.",
  "Por eso, llama a la clínica y pide una cita con el médico.",
  "—Buenos días. ¿Qué le pasa? —pregunta la médica.",
  "—Me duele mucho la cabeza y tengo tos desde hace dos días —contesta Marta.",
  "La médica la examina y dice: «Es un resfriado fuerte.»",
  "—Descanse en casa, beba mucha agua y tome una pastilla cada ocho horas.",
  "—¿Tengo que volver? —pregunta Marta.",
  "—Solo si no mejora en tres días. No se preocupe, no es grave.",
  "Por la tarde, Marta compra el medicamento en la farmacia y se acuesta temprano."
 ],
 GLOSS: [
  {en:"se despierta", fr:"elle se réveille (despertarse, e → ie)"},
  {en:"la clínica", fr:"la clinique, le cabinet"},
  {en:"la examina", fr:"l'examine (« la » = Marta, COD)"},
  {en:"un resfriado fuerte", fr:"un gros rhume"},
  {en:"mejorar", fr:"aller mieux (« si no mejora » = si ça ne s'améliore pas)"},
  {en:"grave", fr:"grave (invariable au genre)"},
  {en:"se acuesta", fr:"elle se couche (acostarse, o → ue)"},
  {en:"temprano", fr:"tôt"}
 ],
 GRAMMAR1: {
  heading:"Doler, tener et la durée : parler de sa santé",
  lede:"Chez le médecin, tu as besoin de trois choses : dire où tu as mal (doler), dire ce que tu as (tener + symptôme), et dire depuis quand (desde hace). Les trois structures sont simples et se réutilisent partout.",
  conj:[
   ["Où as-tu mal ? →","me / te / le + duele / duelen","Me duele la cabeza. Me duelen los pies."],
   ["Symptôme →","tener + nom (sans article)","Tengo fiebre. Tengo tos. Tengo alergia."],
   ["État →","estar + adjectif","Estoy enfermo. Estoy resfriada. Estoy mareado."],
   ["Depuis →","présent + desde hace + durée","Tengo fiebre desde hace dos días."],
   ["Fréquence →","X veces al día · cada X horas","Dos veces al día. Cada ocho horas."],
   ["Conseil →","debe / hay que / es mejor + infinitif","Debe descansar. Hay que beber agua."]
  ],
  ruleHtml:"🤕 <b>1. DOLER : comme gustar.</b> Le sujet est ce qui fait mal : <b>me duele</b> la cabeza (singulier), <b>me duelen</b> los pies (pluriel). <i>te duele, le duele, nos duele, os duele, les duele.</i> Doler fait une diphtongue (o → ue) : <b>duele</b>. Pour demander : <b>¿Dónde te duele? / ¿Dónde le duele?</b><br><br>🌡️ <b>2. TENER + symptôme (sans article).</b> <b>tengo fiebre, tengo tos, tengo alergia, tengo dolor de cabeza, tengo náuseas</b>. Pas de « un » ni de « la » devant fiebre ou tos.<br><br>🛌 <b>3. ESTAR + état.</b> <b>estoy enfermo/a, estoy resfriado/a, estoy mareado/a, estoy cansado/a, estoy agotado/a</b>. L'adjectif s'accorde. « Ser enfermo » est rare : estar pour l'état du moment.<br><br>⏱️ <b>4. Depuis : desde / desde hace / hace… que.</b> <b>desde hace + durée</b> : <i>Tengo tos desde hace dos días.</i> <b>desde + date ou moment</b> : <i>Tengo tos desde el lunes / desde ayer.</i> <b>Hace + durée + que + présent</b> : <i>Hace dos días que tengo tos.</i> Le verbe reste au <b>présent</b>, parce que la douleur continue maintenant.<br><br>🔢 <b>5. Fréquence.</b> <b>una vez al día</b> · <b>dos veces por semana</b> · <b>cada ocho horas</b> · <b>cada día</b> · <b>antes de comer / después de comer</b>.<br><br>📝 <b>6. Conseils et obligations.</b> <b>deber + infinitif</b> (conseil poli : <i>Debe descansar</i>), <b>tener que + infinitif</b> (nécessité : <i>Tengo que ir al médico</i>), <b>hay que + infinitif</b> (général : <i>Hay que beber agua</i>), <b>es mejor + infinitif</b>. À l'impératif usted : <b>descanse, beba, tome, no coma, no fume</b>.<br><br>👥 <b>7. Tutoiement ET vouvoiement.</b> tú → <b>¿Qué te pasa? ¿Dónde te duele? ¿Cómo te sientes?</b> · usted → <b>¿Qué le pasa? ¿Dónde le duele? ¿Cómo se siente?</b> Chez le médecin, on te vouvoie presque toujours.",
  dialogueLede:"Chez le médecin (vouvoiement) :",
  dialogue:[
   {who:"them", en:"Buenos días. ¿Qué le pasa?", fr:"Bonjour. Qu'avez-vous ?"},
   {who:"you", en:"Me duele la cabeza y tengo fiebre desde hace dos días.", fr:"J'ai mal à la tête et de la fièvre depuis deux jours."},
   {who:"them", en:"¿Tiene tos?", fr:"Avez-vous de la toux ?"},
   {who:"you", en:"Sí, un poco. Y me duele la garganta.", fr:"Oui, un peu. Et j'ai mal à la gorge."},
   {who:"them", en:"Es una gripe. Descanse y tome una pastilla cada ocho horas.", fr:"C'est une grippe. Reposez-vous et prenez un comprimé toutes les huit heures."},
   {who:"you", en:"Gracias, doctora.", fr:"Merci, docteur."}
  ],
  whyLabel:"Pourquoi le présent avec « desde hace » ?",
  whyText:"En français, « Je tousse depuis deux jours » est au présent, parce que la toux continue. L'espagnol fait pareil : « Tengo tos desde hace dos días ». Si on utilisait le passé, on dirait que c'est fini. L'idée est simple : tant que la situation dure, le présent est le bon temps. Pour doler, imagine toujours que la partie du corps est le sujet : « La cabeza me duele », « Los pies me duelen ». C'est la même logique que gustar. Une fois que tu vois cela, tu n'hésites plus entre duele et duelen."
 },
 GRAMMAR2: {
  heading:"À la pharmacie, aux urgences et au téléphone",
  dialogueLede:"À la pharmacie (vouvoiement) :",
  dialogue:[
   {who:"them", en:"Buenas tardes. ¿En qué puedo ayudarle?", fr:"Bonjour. En quoi puis-je vous aider ?"},
   {who:"you", en:"Tengo tos y me duele la garganta. ¿Qué me recomienda?", fr:"J'ai de la toux et j'ai mal à la gorge. Que me recommandez-vous ?"},
   {who:"them", en:"Le recomiendo este jarabe. Tome una cucharada tres veces al día.", fr:"Je vous recommande ce sirop. Prenez une cuillère trois fois par jour."},
   {who:"you", en:"¿Necesito receta?", fr:"Ai-je besoin d'une ordonnance ?"},
   {who:"them", en:"No, no es necesario. Son ocho euros.", fr:"Non, ce n'est pas nécessaire. Cela fait huit euros."},
   {who:"you", en:"Gracias. Que tenga un buen día.", fr:"Merci. Bonne journée."}
  ],
  ruleHtml:"📞 <b>1. Prendre rendez-vous.</b> <b>Quiero pedir una cita con el médico.</b> · <b>¿Tiene hora libre para hoy?</b> · <b>Es urgente.</b> · <b>Mi número es…</b> Au téléphone, le standard répond : <b>Dígame</b> (je vous écoute).<br><br>🏥 <b>2. Aux urgences.</b> <b>Necesito un médico.</b> · <b>Me duele mucho aquí.</b> · <b>Es mi hijo.</b> · <b>Tengo alergia a la penicilina.</b> · <b>No puedo respirar.</b> (je ne peux pas respirer). <b>¡Llame a una ambulancia!</b> (appelez une ambulance).<br><br>💊 <b>3. À la pharmacie.</b> <b>¿Qué me recomienda?</b> · <b>¿Necesito receta?</b> · <b>¿Cuántas veces al día?</b> · <b>¿Tiene algo para la tos / el dolor de cabeza / la fiebre?</b> En Espagne, on peut parler de ses symptômes directement au pharmacien.<br><br>🧾 <b>4. Poser des questions précises.</b> <b>¿Es grave?</b> · <b>¿Es contagioso?</b> · <b>¿Cuánto tiempo tengo que descansar?</b> · <b>¿Puedo trabajar?</b> · <b>¿Puedo beber alcohol con este medicamento?</b> (le médicament = el medicamento).<br><br>🛌 <b>5. Verbes pronominaux utiles.</b> <b>despertarse (e → ie), acostarse (o → ue), levantarse, sentirse (e → ie), cuidarse</b> (prendre soin de soi) : <i>Me acuesto temprano. Cuídese mucho.</i><br><br>🌍 <b>6. Différences régionales.</b> Amérique latine : <b>el doctor</b> (le médecin), <b>la droguería / botica</b> (pharmacie, selon le pays), <b>consultorio</b> (cabinet). Espagne : <b>el médico, la farmacia, el centro de salud</b>.<br><br>🗣️ <b>7. Informel.</b> <b>Estoy hecho polvo</b>, <b>Estoy fatal</b>, <b>Me siento como nuevo</b> (je me sens comme neuf), <b>Tengo un resfriado de aúpa</b> (un gros rhume), <b>¡Que te mejores!</b>.<br><br>👥 <b>8. Tutoiement ET vouvoiement.</b> tú → <b>¿Qué te pasa? Cuídate mucho.</b> · usted → <b>¿Qué le pasa? Cuídese mucho.</b>",
  whyLabel:"Comment ne pas paniquer chez le médecin ?",
  whyText:"Prépare à l'avance trois phrases : « Me duele… », « Tengo… desde hace… », « Soy alérgico a… ». Avec ces trois phrases, tu peux décrire presque tous les cas courants. Ensuite, comprends les consignes : l'impératif usted (descanse, beba, tome) et les fréquences (dos veces al día, cada ocho horas). Si tu ne comprends pas, dis : « ¿Puede repetir, por favor? » ou « Más despacio, por favor ». Les médecins parlent souvent vite, mais ils répètent volontiers. Entraîne-toi à voix haute en décrivant un petit rhume imaginaire : tu verras que les structures sortent toutes seules."
 },
 REVIEW: [
  {q:"« Tournez à droite » (usted) :", opts:["Gire a la derecha.","Gira a la derecha."], correct:0, fb:"usted → gire. (rappel A2.9)"},
  {q:"« Continue tout droit » (tú) :", opts:["Sigue todo recto.","Siga todo recto."], correct:0, fb:"tú → sigue. (rappel A2.9)"},
  {q:"« Viens ici » (tú) :", opts:["Ven aquí.","Viene aquí."], correct:0, fb:"venir → ven. (rappel A2.9)"},
  {q:"« Ne mange pas » (tú) :", opts:["No comas.","No come."], correct:0, fb:"Négatif tú : -as. (rappel A2.9)"},
  {q:"« À côté de la banque » :", opts:["al lado del banco","al lado de el banco"], correct:0, fb:"de + el = del. (rappel A2.9)"}
 ],
 DRILLS: [
  {type:"fill", text:"Me ___ la cabeza. (doler)", answers:["duele","Duele"], why:"cabeza : singulier."},
  {type:"fill", text:"Me ___ los pies. (doler)", answers:["duelen","Duelen"], why:"pies : pluriel."},
  {type:"fill", text:"¿Dónde ___ duele, señora? (usted)", answers:["le","Le"], why:"usted → le."},
  {type:"fill", text:"¿Dónde ___ duele? (tú)", answers:["te","Te"], why:"tú → te."},
  {type:"fill", text:"Tengo ___ desde ayer. (fièvre)", answers:["fiebre","Fiebre"], why:"tener fiebre."},
  {type:"fill", text:"Tengo tos ___ hace dos días.", answers:["desde","Desde"], why:"desde hace."},
  {type:"fill", text:"Tengo tos desde ___ lunes.", answers:["el","El"], why:"desde el lunes."},
  {type:"fill", text:"___ dos días que tengo fiebre.", answers:["Hace","hace"], why:"hace + durée + que."},
  {type:"fill", text:"Una pastilla ___ ocho horas.", answers:["cada","Cada"], why:"cada + durée."},
  {type:"fill", text:"Dos ___ al día. (fois)", answers:["veces","Veces"], why:"vez → veces."},
  {type:"fill", text:"___ que beber agua. (il faut)", answers:["Hay","hay"], why:"hay que."},
  {type:"fill", text:"Usted ___ descansar. (deber)", answers:["debe","Debe"], why:"usted → debe."},
  {type:"fill", text:"Yo ___ que ir al médico. (tener)", answers:["tengo","Tengo"], why:"tener que."},
  {type:"fill", text:"___ en casa. (descansar, usted)", answers:["Descanse","descanse"], why:"-AR → -e."},
  {type:"fill", text:"___ mucha agua. (beber, usted)", answers:["Beba","beba"], why:"-ER → -a."},
  {type:"fill", text:"No se ___ . (preocupar, usted)", answers:["preocupe","Preocupe"], why:"-AR → -e."},
  {type:"fill", text:"Yo ___ mal. (sentirse)", answers:["me siento","Me siento"], why:"sentirse → me siento."},
  {type:"fill", text:"¿Cómo ___ usted? (sentirse)", answers:["se siente","Se siente"], why:"usted → se siente."},
  {type:"choice", q:"« J'ai mal au dos » :", opts:["Me duele la espalda.","Me duelen la espalda."], correct:0, why:"espalda : singulier."},
  {type:"choice", q:"« Je suis enrhumée » :", opts:["Estoy resfriada.","Soy resfriada."], correct:0, why:"estar."},
  {type:"choice", q:"Après « desde hace », le verbe est au :", opts:["présent","passé simple"], correct:0, why:"La douleur dure encore."},
  {type:"choice", q:"« Il vaut mieux se reposer » :", opts:["Es mejor descansar.","Es mejor descanso."], correct:0, why:"Infinitif après es mejor."},
  {type:"choice", q:"Pour un médicament :", opts:["Tome una pastilla.","Come una pastilla."], correct:0, why:"tomar un medicamento."},
  {type:"choice", q:"À un ami malade :", opts:["¡Que te mejores!","¡Que se mejore!"], correct:0, why:"tú : te mejores."},
  {type:"choice", q:"À un patient âgé :", opts:["¡Que se mejore!","¡Que te mejores!"], correct:0, why:"usted : se mejore."}
 ],
 ANNOTATED: {
  title:"Quatre phrases chez le médecin",
  intro:"Quatre phrases pour décrire sa santé. Touche chaque mot pour voir sa nature et sa traduction.",
  sentences:[
   {fr:"J'ai mal à la tête.", tokens:[
    {w:"Me", tag:"pronom", info:"COI · 1re pers.", fr:"me"},
    {w:"duele", tag:"verbe", info:"doler · présent", fr:"fait mal", tip:"Diphtongue o → ue."},
    {w:"la cabeza", tag:"nom", info:"fém. sing. · sujet", fr:"la tête"}
   ]},
   {fr:"J'ai de la fièvre depuis deux jours.", tokens:[
    {w:"Tengo", tag:"verbe", info:"tener · présent · yo", fr:"j'ai"},
    {w:"fiebre", tag:"nom", info:"fém. sing.", fr:"fièvre", tip:"Sans article."},
    {w:"desde hace", tag:"locution", info:"durée", fr:"depuis"},
    {w:"dos días", tag:"nom", info:"masc. plur.", fr:"deux jours"}
   ]},
   {fr:"Où avez-vous mal ?", tokens:[
    {w:"¿Dónde", tag:"adverbe", fr:"où"},
    {w:"le", tag:"pronom", info:"COI · usted", fr:"vous"},
    {w:"duele?", tag:"verbe", info:"doler · présent", fr:"fait mal"}
   ]},
   {fr:"Prenez un comprimé toutes les huit heures.", tokens:[
    {w:"Tome", tag:"verbe", info:"tomar · impératif · usted", fr:"prenez"},
    {w:"una pastilla", tag:"nom", info:"fém. sing.", fr:"un comprimé"},
    {w:"cada ocho horas", tag:"locution", info:"fréquence", fr:"toutes les huit heures"}
   ]}
  ]
 },
 CULTURE_NOTE: {icon:"🩺", title:"Culture, langage informel et fiche récap de A2.10",
  html:"<b>🩺 Culture : se soigner en Espagne et en Amérique latine</b> En Espagne, le système public (<i>la Seguridad Social</i>) donne une <i>tarjeta sanitaria</i> et on commence par le <i>centro de salud</i>. Les pharmaciens conseillent volontiers sans ordonnance pour les petits maux. En Amérique latine, le fonctionnement varie beaucoup selon le pays : cliniques privées, consultorios, droguerías.<br><br><b>🗣️ Dix expressions informelles sur la santé</b><br>1. <b>Estoy hecho polvo</b> = je suis crevé.<br>2. <b>Estoy fatal</b> = je me sens très mal.<br>3. <b>Tengo mala cara</b> = j'ai mauvaise mine.<br>4. <b>Me duele un montón</b> = j'ai super mal (Espagne).<br>5. <b>Estoy como nuevo</b> = je suis comme neuf.<br>6. <b>No doy más</b> = je n'en peux plus.<br>7. <b>Me estoy muriendo de sueño</b> = je tombe de sommeil.<br>8. <b>Tengo un resfriado de aúpa</b> = j'ai un gros rhume.<br>9. <b>¡Que te mejores!</b> = rétablis-toi vite !<br>10. <b>Cuídate</b> = prends soin de toi.<br>Avec un médecin : « Me siento mal desde hace dos días ».<br><br><b>📋 Fiche récap A2.10</b><br>• <b>Doler</b> : me duele / me duelen + partie du corps.<br>• <b>Tener</b> + symptôme sans article : fiebre, tos, alergia.<br>• <b>Estar</b> + état : enfermo, resfriado, mareado.<br>• <b>Depuis</b> : desde hace + durée ; desde + date ; hace… que.<br>• <b>Fréquence</b> : dos veces al día · cada ocho horas.<br>• <b>Conseils</b> : debe + inf. · hay que + inf. · impératif usted (descanse, beba, tome).<br>• <b>Tú ET usted</b> : ¿Dónde te duele? / ¿Dónde le duele?"},
 NEXT_PREVIEW:"A2.11 (Le conditionnel) : exprimer la politesse, le rêve et le conseil : « Me gustaría… », « Podría ayudarme », « Yo que tú, iría al médico ».",
 META:{vocabTitle:"Me duele la cabeza : santé et corps (A2.10)", lectureTitle:"Un día enferma", bilanTitle:"Bravo, tu sais te soigner en espagnol !", pronLabel:"Diphtongue ue dans duele / duelen, accent dans médico", todayLede:"décrire où tu as mal (doler), dire ce que tu as (tener, estar), indiquer la durée (desde hace) et la fréquence, comprendre les conseils du médecin et parler en tutoiement ET en vouvoiement"}
};
})();


// A2.11 — Me gustaría, podría : le conditionnel — leçon 223
(function(){
function blk(name, rows){
  var v = __esB(name, rows);
  v.forEach(function(o, i){ o.emo = rows[i][4]; o.ex = [rows[i][5], rows[i][6]]; });
  return v;
}
var V = [].concat(
 blk("Former le conditionnel : infinitif + -ía", [
  ["hablaría","/aβlaˈɾia/","je parlerais","Infinitif + terminaisons de l'imparfait des verbes en -ER : ía · ías · ía · íamos · íais · ían. Même base que le futur.","🗣️","Hablaría con el jefe.","Je parlerais avec le chef."],
  ["comería","/komeˈɾia/","je mangerais","comer + ía. Pour les -AR, -ER et -IR, les terminaisons sont identiques.","🍴","Comería algo ligero.","Je mangerais quelque chose de léger."],
  ["viviría","/biβiˈɾia/","je vivrais","vivir + ía. Accent écrit sur le í de la terminaison.","🏡","Viviría en el campo.","Je vivrais à la campagne."],
  ["serías · estarías","/seˈɾias · estaˈɾias/","tu serais · tu serais (lieu)","Ser et estar sont réguliers.","🧍","Serías muy feliz allí.","Tu serais très heureux là-bas."],
  ["¿Hablaría usted…?","/aβlaˈɾia usˈteð/","Parleriez-vous… ?","Usted → même forme que yo et él : hablaría. Contexte ou pronom précise.","🎩","¿Viviría usted en Perú?","Vivriez-vous au Pérou ?"],
  ["hablaríamos · hablarían","/aβlaˈɾiamos/","nous parlerions · ils parleraient","Accent sur le í dans toute la série.","👥","Hablaríamos mañana.","Nous parlerions demain."]
 ]),
 blk("Les irréguliers : les mêmes radicaux que le futur", [
  ["tener → tendría","/teˈneɾ · tenˈdɾia/","j'aurais","Même radical que le futur (tendré) + ía.","🎒","Tendría más tiempo.","J'aurais plus de temps."],
  ["poder → podría","/poˈðeɾ · poˈðɾia/","je pourrais","Très courant en politesse : « ¿Podría ayudarme? ».","🙏","¿Podría ayudarme, por favor?","Pourriez-vous m'aider, s'il vous plaît ?"],
  ["querer → querría","/keˈɾeɾ · keˈria/","je voudrais","Politesse plus soutenue que « quiero ». Sinon « Me gustaría ».","💭","Querría un café con leche.","Je voudrais un café au lait."],
  ["saber → sabría","/saˈβeɾ · saˈβɾia/","je saurais","« No sabría decirle » = je ne saurais vous dire.","💡","No sabría qué hacer.","Je ne saurais pas quoi faire."],
  ["venir → vendría","/beˈniɾ · benˈdɾia/","je viendrais","Même radical que vendré.","🏃","Vendría con gusto.","Je viendrais avec plaisir."],
  ["salir → saldría","/saˈliɾ · salˈdɾia/","je sortirais","saldr- + ía.","🚪","Saldría contigo.","Je sortirais avec toi."],
  ["hacer → haría","/aˈθeɾ · aˈɾia/","je ferais","har- + ía. Pas de « ce » dans la conjugaison.","🛠️","Yo haría lo mismo.","Moi je ferais pareil."],
  ["decir → diría","/deˈθiɾ · diˈɾia/","je dirais","dir- + ía.","💬","Te diría la verdad.","Je te dirais la vérité."],
  ["poner → pondría · haber → habría","/ponˈdɾia · aˈβɾia/","je mettrais · il y aurait","« Habría muchos problemas » = il y aurait beaucoup de problèmes.","📌","Habría mucha gente.","Il y aurait beaucoup de monde."]
 ]),
 blk("La politesse : demander, proposer", [
  ["¿Podría + infinitif?","/poˈðɾia/","Pourriez-vous… ?","Plus poli que « ¿Puede…? ». Avec tú : « ¿Podrías…? ».","🙏","¿Podría decirme la hora?","Pourriez-vous me dire l'heure ?"],
  ["¿Le importaría + infinitif?","/le imponˈtaɾia/","Cela vous dérangerait-il de… ?","Avec tú : « ¿Te importaría…? ». Réponse polie : « No, para nada » (pas du tout).","🙏","¿Le importaría esperar un momento?","Cela vous dérangerait-il d'attendre un instant ?"],
  ["me gustaría · me encantaría","/me ɣustaˈɾia/","j'aimerais · j'adorerais","Souhait poli ou rêve. « Me gustaría reservar una mesa ».","🌟","Me gustaría reservar una mesa.","J'aimerais réserver une table."],
  ["querría","/keˈɾia/","je voudrais","Polite, très courant au restaurant. « Querría un café ».","☕","Querría una mesa para dos.","Je voudrais une table pour deux."],
  ["¿Sería posible…?","/seˈɾia poˈsiβle/","Serait-il possible de… ?","« ¿Sería posible cambiar de habitación? » (serait-il possible de changer de chambre ?).","🙋","¿Sería posible pagar con tarjeta?","Serait-il possible de payer par carte ?"],
  ["no me importaría","/no me imponˈtaɾia/","cela ne me dérangerait pas","Réponse ouverte et aimable.","🙂","No me importaría esperar.","Cela ne me dérangerait pas d'attendre."]
 ]),
 blk("Le conseil : yo que tú, deberías", [
  ["yo que tú + conditionnel","/ʝo ke tu/","à ta place, je…","« Yo que tú, iría al médico » = à ta place, j'irais chez le médecin. Avec usted : « Yo que usted, iría… ».","💡","Yo que tú, descansaría.","À ta place, je me reposerais."],
  ["deberías + infinitif","/deβeˈɾias/","tu devrais","Conseil amical. Avec usted : « debería ».","📝","Deberías dormir más.","Tu devrais dormir plus."],
  ["podrías + infinitif","/poðɾias/","tu pourrais","Suggestion : « Podrías llamarlo ».","🔄","Podrías pedir cita.","Tu pourrais prendre rendez-vous."],
  ["le recomendaría","/le rekomendaˈɾia/","je vous recommanderais","Conseil poli de professionnel.","👍","Le recomendaría descansar.","Je vous recommanderais de vous reposer."],
  ["sería mejor","/seˈɾia meˈxoɾ/","il vaudrait mieux","« Sería mejor esperar » = il vaudrait mieux attendre.","🧭","Sería mejor esperar un poco.","Il vaudrait mieux attendre un peu."]
 ]),
 blk("Rêver, supposer, rapporter", [
  ["me encantaría viajar","/me eŋkantaˈɾia/","j'adorerais voyager","Souhait fort.","✈️","Me encantaría viajar a Japón.","J'adorerais voyager au Japon."],
  ["¿Qué harías?","/ke aˈɾias/","Que ferais-tu ?","Avec usted : « ¿Qué haría usted? ». Question d'hypothèse.","❓","¿Qué haría usted en mi lugar?","Que feriez-vous à ma place ?"],
  ["dijo que vendría","/ˈdixo ke benˈdɾia/","il a dit qu'il viendrait","Le conditionnel exprime le futur dans le passé : « Dijo que llegaría tarde ».","🗣️","Ana dijo que llegaría tarde.","Ana a dit qu'elle arriverait en retard."],
  ["serían las diez","/seˈɾian las ðjes/","il devait être dix heures","Probabilité dans le passé : « Serían las diez cuando llegué ».","🤔","Serían las diez cuando llegué.","Il devait être dix heures quand je suis arrivé."],
  ["tendría treinta años","/tenˈdɾia ˈtɾeinta/","il devait avoir trente ans","Supposition passée : même idée que le futur de probabilité.","🧓","Tendría unos treinta años.","Il devait avoir une trentaine d'années."]
 ]),
 blk("Poser les questions : tú ET usted", [
  ["¿Podrías ayudarme? / ¿Podría ayudarme?","/poˈðɾias aʝuˈðaɾme/","Pourrais-tu m'aider ? / Pourriez-vous m'aider ?","Tú : -ías. Usted : -ía.","❓","¿Podría ayudarme con esto?","Pourriez-vous m'aider avec ça ?"],
  ["¿Te gustaría…? / ¿Le gustaría…?","/te ɣustaˈɾia/","Aimerais-tu… ? / Aimeriez-vous… ?","Invitation polie : « ¿Le gustaría tomar algo? ».","❓","¿Le gustaría un café?","Aimeriez-vous un café ?"],
  ["¿Qué recomendaría?","/ke rekomendaˈɾia/","Que recommanderiez-vous ?","« ¿Qué me recomendaría? » : demande de conseil.","❓","¿Qué me recomendaría usted?","Que me recommanderiez-vous ?"]
 ]),
 blk("Formules de service", [
  ["con mucho gusto","/kon ˈmutʃo ˈɣusto/","avec plaisir","Réponse polie à une demande. Universel.","😊","—¿Me ayuda? —Con mucho gusto.","— Vous m'aidez ? — Avec plaisir."],
  ["para nada","/ˈpaɾa ˈnaða/","pas du tout","Réponse à « ¿Le importa? » : « Para nada » = cela ne me dérange pas du tout.","🙂","—¿Le importa? —Para nada.","— Cela vous dérange ? — Pas du tout."],
  ["enseguida","/enseˈɣiða/","tout de suite","Un mot (pas « en seguida »). Typique du service.","⚡","Enseguida le traigo el café.","Je vous apporte le café tout de suite."],
  ["el placer","/el plaˈθeɾ/","le plaisir","« Sería un placer » = ce serait un plaisir.","🎉","Sería un placer ayudarle.","Ce serait un plaisir de vous aider."],
  ["tener razón","/teˈneɾ raˈθon/","avoir raison","« Tienes razón » (tú), « Tiene razón » (usted).","✅","Tienes razón.","Tu as raison."]
 ]),
 blk("Informel et prononciation", [
  ["¿Te apetecería…?","/te apeteθeˈɾia/","Ça te dirait de… ?","Espagne, informel. « ¿Te apetecería un café? ».","☕","¿Te apetecería un café?","Ça te dirait un café ?"],
  ["Sería genial","/seˈɾia xeˈnial/","Ce serait génial","Réaction positive entre amis.","🤩","Sería genial verte.","Ce serait génial de te voir."],
  ["-ía · -ías","/ˈia · ˈias/","accent sur le í","Dans -ría : har-RÍ-a ; le í se prononce seul. Ne confonds pas avec « -ia » sans accent.","🔊","Me gustaría ir.","J'aimerais y aller."]
 ])
);

LESSONS_ES[223] = {
 code:"A2.11", level:"A2",
 VOCAB: V,
 MEM_WORDS: __esIdx(V, ["hablaría","tener → tendría","poder → podría","¿Podría + infinitif?","me gustaría · me encantaría","¿Le importaría + infinitif?","yo que tú + conditionnel","deberías + infinitif","dijo que vendría","¿Te apetecería…?"]),
 MINI_CHECKS: [
  {q:"« Je voudrais un café » (poli) :", opts:["Querría un café.","Quiero un café."], correct:0, fb:"Querría / Me gustaría = plus poli que quiero."},
  {q:"« Pourriez-vous m'aider ? » :", opts:["¿Podría ayudarme?","¿Puede ayudarme?"], correct:0, fb:"Conditionnel = encore plus poli."},
  {q:"Le conditionnel se forme avec :", opts:["l'infinitif + -ía","le radical + -aba","haber + participe"], correct:0, fb:"hablar + ía = hablaría."},
  {q:"« Je ferais » :", opts:["haría","hacería","haceré"], correct:0, fb:"hacer → har- + ía."},
  {q:"« Je pourrais » :", opts:["podría","podería","puedería"], correct:0, fb:"poder → podr- + ía."},
  {q:"« À ta place, j'irais » :", opts:["Yo que tú, iría.","Yo que tú, voy."], correct:0, fb:"yo que tú + conditionnel."},
  {q:"« Tu devrais dormir » :", opts:["Deberías dormir.","Debes durmiendo."], correct:0, fb:"deber au conditionnel : deberías."},
  {q:"« Ana a dit qu'elle viendrait » :", opts:["Ana dijo que vendría.","Ana dijo que vendrá."], correct:0, fb:"Futur dans le passé : conditionnel."}
 ],
 ROUNDS: [
  __esR("¿Podría ayudarme, por favor?","Pourriez-vous m'aider, s'il vous plaît ?"),
  __esR("Me gustaría reservar una mesa.","J'aimerais réserver une table."),
  __esR("Querría un café con leche.","Je voudrais un café au lait."),
  __esR("Yo que tú, iría al médico.","À ta place, j'irais chez le médecin."),
  __esR("Deberías dormir más.","Tu devrais dormir plus."),
  __esR("¿Le importaría esperar un momento?","Cela vous dérangerait-il d'attendre un instant ?"),
  __esR("Ana dijo que llegaría tarde.","Ana a dit qu'elle arriverait en retard."),
  __esR("Me encantaría viajar a Japón.","J'adorerais voyager au Japon."),
  __esR("¿Sería posible pagar con tarjeta?","Serait-il possible de payer par carte ?"),
  __esR("¿Qué haría usted en mi lugar?","Que feriez-vous à ma place ?"),
  __esR("Sería mejor esperar un poco.","Il vaudrait mieux attendre un peu."),
  __esR("Le recomendaría descansar.","Je vous recommanderais de vous reposer."),
  __esR("¿Te apetecería un café?","Ça te dirait un café ?")
 ],
 QUIZ: [
  {cat:"ecrit", q:"« J'aimerais voyager. »", opts:["Me gusta viajaría.", "Me gustaría viajar.", "Me gustaré viajar."], correct:1, why:"gustar → gustaría."},
  {cat:"ecrit", q:"¿___ ayudarme, señor? (poder, usted)", opts:["Podrías","Podría","Podré"], correct:1, why:"usted → podría."},
  {cat:"ecrit", q:"¿___ ayudarme? (poder, tú)", opts:["Podría","Podrías","Podré"], correct:1, why:"tú → podrías."},
  {cat:"ecrit", q:"Yo ___ lo mismo. (hacer)", opts:["hacería", "haré", "haría"], correct:2, why:"har- + ía."},
  {cat:"ecrit", q:"Yo ___ contigo. (salir)", opts:["saliría", "saldría", "saldré"], correct:1, why:"saldr- + ía."},
  {cat:"ecrit", q:"Ellos ___ con gusto. (venir)", opts:["venirían", "vendrán", "vendrían"], correct:2, why:"vendr- + ían."},
  {cat:"ecrit", q:"Nosotros ___ más tiempo. (tener)", opts:["tendremos", "tendríamos", "teníamos"], correct:1, why:"tendr- + íamos."},
  {cat:"ecrit", q:"Yo que tú, ___ al médico. (ir)", opts:["iba", "voy", "iría"], correct:2, why:"ir → iría."},
  {cat:"ecrit", q:"« Il a dit qu'il viendrait. »", opts:["Dijo que vendrá.", "Dijo que vendría.", "Dijo que venía."], correct:1, why:"Futur dans le passé : conditionnel."},
  {cat:"ecrit", q:"Au restaurant (poli) : « ___ una mesa para dos. »", opts:["Quería", "Quiero", "Querría"], correct:2, why:"Querría = je voudrais (très poli)."},
  {cat:"ecrit", q:"« Il vaudrait mieux attendre. »", opts:["Es mejor esperaría.", "Sería mejor esperar.", "Fue mejor esperar."], correct:1, why:"sería mejor + infinitif."},
  {cat:"ecrit", q:"« Que feriez-vous ? » (usted)", opts:["¿Qué harías usted?", "¿Qué hará usted?", "¿Qué haría usted?"], correct:2, why:"usted → haría."},
  {cat:"ecrit", q:"« Cela vous dérangerait-il ? » (usted)", opts:["¿Te importaría?", "¿Le importaría?", "¿Le importa?"], correct:1, why:"usted → le importaría."},
  {cat:"ecrit", q:"« Tu devrais appeler » (tú) :", opts:["Debería llamar.", "Debes llamara.", "Deberías llamar."], correct:2, why:"tú → deberías."},
  {cat:"oral", audio:"Me gustaría reservar una mesa.", q:"Écoute : que veut-il ?", opts:["Réserver une table","Payer l'addition","Partir"], correct:0, why:"« reservar una mesa »."},
  {cat:"oral", audio:"¿Podría ayudarme, por favor?", q:"Écoute : la demande est :", opts:["Polie","Familière","Agressive"], correct:0, why:"« podría » + « por favor »."},
  {cat:"oral", audio:"Yo que tú, descansaría.", q:"Écoute : que conseille-t-il ?", opts:["De se reposer","De travailler","De voyager"], correct:0, why:"« descansaría »."},
  {cat:"oral", audio:"Ana dijo que llegaría tarde.", q:"Écoute : qu'a dit Ana ?", opts:["Qu'elle arriverait en retard","Qu'elle est déjà arrivée","Qu'elle ne viendra pas"], correct:0, why:"« llegaría tarde »."},
  {cat:"oral", audio:"¿Qué haría usted en mi lugar?", q:"Écoute : la question est au :", opts:["Vouvoiement","Tutoiement","Pluriel amical"], correct:0, why:"« haría usted »."},
  {cat:"comprehension", passage:"Cliente: Buenas noches. Querría una mesa para dos, por favor. — Camarero: Lo siento, ahora no hay. ¿Le importaría esperar diez minutos? — Cliente: No, no me importaría. — Camarero: Sería mejor esperar fuera. Hay un banco en la puerta.", q:"Que veut le client ?", opts:["Une table pour deux","Une table pour quatre","Un café"], correct:0, why:"« una mesa para dos »."},
  {cat:"comprehension", passage:"Cliente: Buenas noches. Querría una mesa para dos, por favor. — Camarero: Lo siento, ahora no hay. ¿Le importaría esperar diez minutos? — Cliente: No, no me importaría. — Camarero: Sería mejor esperar fuera. Hay un banco en la puerta.", q:"Combien de temps faut-il attendre ?", opts:["Dix minutes","Une heure","Cinq minutes"], correct:0, why:"« diez minutos »."},
  {cat:"comprehension", passage:"Cliente: Buenas noches. Querría una mesa para dos, por favor. — Camarero: Lo siento, ahora no hay. ¿Le importaría esperar diez minutos? — Cliente: No, no me importaría. — Camarero: Sería mejor esperar fuera. Hay un banco en la puerta.", q:"Où le serveur conseille-t-il d'attendre ?", opts:["Dehors","À l'intérieur","Au bar"], correct:0, why:"« esperar fuera »."},
  {cat:"comprehension", passage:"Ana: Estoy muy cansada. No duermo bien desde hace una semana. — Luis: Yo que tú, iría al médico. También deberías dormir ocho horas y no tomar café por la noche. — Ana: Tienes razón. Pediré cita mañana. — Luis: Gracias por el consejo. ¡Que te mejores!", q:"Que conseille Luis ?", opts:["D'aller chez le médecin","De voyager","De changer de travail"], correct:0, why:"« iría al médico »."},
  {cat:"comprehension", passage:"Ana: Estoy muy cansada. No duermo bien desde hace una semana. — Luis: Yo que tú, iría al médico. También deberías dormir ocho horas y no tomar café por la noche. — Ana: Tienes razón. Pediré cita mañana. — Luis: Gracias por el consejo. ¡Que te mejores!", q:"Que fera Ana demain ?", opts:["Elle prendra rendez-vous","Elle ira à la plage","Elle travaillera plus"], correct:0, why:"« Pediré cita mañana »."}
 ],
 PRON_VERBS: [
  {en:"me gustaría", fr:"j'aimerais (me gus-ta-RÍ-a : accent sur le í)"},
  {en:"podría · podrías", fr:"je pourrais · tu pourrais (po-DRÍ-a, po-DRÍ-as)"},
  {en:"querría", fr:"je voudrais (ke-RRÍ-a : rr roulé)"},
  {en:"haría · diría", fr:"je ferais · je dirais (a-RÍ-a, di-RÍ-a ; h muette)"},
  {en:"tendría · vendría", fr:"j'aurais · je viendrais (ten-DRÍ-a, ben-DRÍ-a)"},
  {en:"saldría", fr:"je sortirais (sal-DRÍ-a)"},
  {en:"sería mejor", fr:"il vaudrait mieux (se-RÍ-a me-JOR)"},
  {en:"¿Le importaría esperar?", fr:"Cela vous dérangerait d'attendre ? (le im-por-ta-RÍ-a es-pe-RAR)"},
  {en:"Yo que tú, iría.", fr:"À ta place, j'irais. (yo ke tu i-RÍ-a)"},
  {en:"Sería genial.", fr:"Ce serait génial. (se-RÍ-a he-NIAL)"}
 ],
 READING: [
  "Marta sueña con un viaje a Perú y habla con su amiga Elena.",
  "—Me encantaría ir a Machu Picchu —dice Marta—. ¿Te gustaría venir conmigo?",
  "—Claro. Me gustaría mucho, pero tendría que pedir vacaciones.",
  "—Yo que tú, hablaría con el jefe esta semana —le aconseja Marta.",
  "—Sí, creo que me daría dos semanas. Podríamos viajar en agosto.",
  "—¿Qué haríamos allí? —pregunta Marta.",
  "—Visitaríamos Lima, subiríamos a Machu Picchu y comeríamos pescado.",
  "—¡Sería genial! —responde Marta—. Deberíamos reservar los billetes pronto.",
  "—Tienes razón. Sería mejor comprar el billete hoy: mañana costaría más.",
  "Las dos amigas sonríen: ya están viajando con la imaginación."
 ],
 GLOSS: [
  {en:"soñar con", fr:"rêver de (o → ue : sueña)"},
  {en:"aconseja", fr:"conseille (aconsejar)"},
  {en:"tendría que + infinitif", fr:"il faudrait que je… (je devrais)"},
  {en:"nos daría dos semanas", fr:"me donnerait deux semaines"},
  {en:"Podríamos", fr:"Nous pourrions"},
  {en:"con la imaginación", fr:"par l'imagination"},
  {en:"sonreír → sonríen", fr:"sourire"},
  {en:"mañana costaría más", fr:"demain ça coûterait plus"}
 ],
 GRAMMAR1: {
  heading:"Le conditionnel : politesse, conseil, rêve",
  lede:"Le conditionnel est le temps de la politesse et du rêve. Tu le connais déjà en français : « je voudrais », « pourriez-vous », « j'aimerais ». En espagnol, il suit exactement le même radical que le futur, avec des terminaisons d'imparfait en -ía.",
  conj:[
   ["yo →","hablaría · comería · viviría","Hablaría con él. Comería algo. Viviría allí."],
   ["tú →","hablarías · comerías · vivirías","¿Podrías ayudarme? Deberías dormir."],
   ["él, ella, usted →","hablaría · comería · viviría","¿Podría ayudarme usted? Ella viviría en Lima."],
   ["nosotros/as →","hablaríamos · comeríamos · viviríamos","Hablaríamos mañana. Viviríamos cerca."],
   ["vosotros/as →","hablaríais · comeríais · viviríais","¿Vendríais con nosotros?"],
   ["ellos, ellas, ustedes →","hablarían · comerían · vivirían","¿Les importaría esperar? Mis padres vendrían."]
  ],
  ruleHtml:"📖 <b>1. La formule.</b> <b>infinitif + ía · ías · ía · íamos · íais · ían</b>. <i>hablaría, comería, viviría.</i> Accent écrit sur le <b>í</b> à toutes les personnes.<br><br>⚠️ <b>2. Les irréguliers : même radical que le futur.</b> <b>tener → tendría</b> · <b>poder → podría</b> · <b>saber → sabría</b> · <b>querer → querría</b> · <b>venir → vendría</b> · <b>poner → pondría</b> · <b>salir → saldría</b> · <b>haber → habría</b> · <b>hacer → haría</b> · <b>decir → diría</b>. Si tu connais le futur (A2.4), tu connais déjà le conditionnel.<br><br>🙏 <b>3. La politesse.</b> <b>¿Podría ayudarme? ¿Podría decirme la hora? ¿Le importaría esperar? Querría una mesa. Me gustaría reservar. ¿Sería posible…?</b> Le conditionnel adoucit la demande : on ne donne pas un ordre, on propose.<br><br>💡 <b>4. Le conseil.</b> <b>Yo que tú + conditionnel</b> (à ta place) : <i>Yo que tú, iría.</i> <b>deberías / debería + infinitif</b> : <i>Deberías dormir.</i> <b>podrías + infinitif</b> : <i>Podrías pedir cita.</i> <b>sería mejor + infinitif</b> : <i>Sería mejor esperar.</i><br><br>🌟 <b>5. Le rêve.</b> <b>Me encantaría viajar. Me gustaría vivir en Perú. ¿Qué harías tú?</b> Sans « si » pour l'instant : tu poses des souhaits simples.<br><br>🗣️ <b>6. Le futur dans le passé.</b> Après un verbe au passé, le futur devient conditionnel : <i>Dijo que vendría</i> (il a dit qu'il viendrait) ; <i>Pensaba que llegaría tarde</i> (je pensais qu'il arriverait tard).<br><br>🤔 <b>7. Supposition dans le passé.</b> <i>Serían las diez.</i> (il devait être dix heures) · <i>Tendría treinta años.</i> (il devait avoir trente ans). Même idée que le futur de probabilité (A2.4), mais pour le passé.<br><br>👥 <b>8. Tutoiement ET vouvoiement.</b> tú → <b>¿Podrías ayudarme? ¿Te gustaría un café?</b> · usted → <b>¿Podría ayudarme? ¿Le gustaría un café?</b> Au travail et avec des inconnus, le conditionnel avec usted est la norme de politesse.",
  dialogueLede:"Une cliente demande un service (vouvoiement) :",
  dialogue:[
   {who:"you", en:"Buenos días. ¿Podría ayudarme, por favor?", fr:"Bonjour. Pourriez-vous m'aider, s'il vous plaît ?"},
   {who:"them", en:"Claro, dígame. ¿Qué necesita?", fr:"Bien sûr, dites-moi. De quoi avez-vous besoin ?"},
   {who:"you", en:"Querría cambiar mi habitación. ¿Sería posible?", fr:"Je voudrais changer de chambre. Serait-ce possible ?"},
   {who:"them", en:"Por supuesto. ¿Le gustaría una habitación con vistas al mar?", fr:"Bien sûr. Aimeriez-vous une chambre avec vue sur la mer ?"},
   {who:"you", en:"Me encantaría. ¿Le importaría traer mis maletas?", fr:"J'adorerais. Cela vous dérangerait-il d'apporter mes valises ?"},
   {who:"them", en:"Para nada. Enseguida.", fr:"Pas du tout. Tout de suite."}
  ],
  whyLabel:"Pourquoi le conditionnel est-il si poli ?",
  whyText:"Le conditionnel crée une distance : au lieu de dire « Je veux », on dit « Je voudrais », comme si le désir dépendait d'une condition. L'autre personne se sent libre de répondre non. C'est la même logique que l'imparfait de politesse (« Quería »), mais plus fort. En espagnol professionnel, tu l'entendras tout le temps : « ¿Podría decirme…? », « Querría saber… », « Me gustaría… ». Pour fabriquer le conditionnel sans effort, pense au futur : si tu sais dire « podré », « tendré », « haré », tu sais dire « podría », « tendría », « haría ». Une seule base, deux terminaisons."
 },
 GRAMMAR2: {
  heading:"Conseiller, proposer, refuser poliment",
  dialogueLede:"Deux collègues parlent d'un problème (tutoiement puis vouvoiement) :",
  dialogue:[
   {who:"them", en:"Estoy muy cansado. No sé qué hacer.", fr:"Je suis très fatigué. Je ne sais pas quoi faire."},
   {who:"you", en:"Yo que tú, pediría unos días de vacaciones.", fr:"À ta place, je demanderais quelques jours de vacances."},
   {who:"them", en:"Tienes razón. ¿Qué harías tú en mi lugar?", fr:"Tu as raison. Que ferais-tu à ma place ?"},
   {who:"you", en:"Hablaría con el jefe y le diría la verdad.", fr:"Je parlerais au chef et je lui dirais la vérité."},
   {who:"them", en:"Mañana hablaré con él. ¿Podría usted acompañarme, señora Martínez?", fr:"Demain je lui parlerai. Pourriez-vous m'accompagner, madame Martínez ?"},
   {who:"you", en:"Con mucho gusto. Sería un placer.", fr:"Avec plaisir. Ce serait un plaisir."}
  ],
  ruleHtml:"🤝 <b>1. Donner un conseil.</b> Du plus direct au plus doux : <b>Haz esto.</b> (ordre) → <b>Deberías hacer esto.</b> (conseil) → <b>Yo que tú, haría esto.</b> (suggestion amicale) → <b>Le recomendaría hacer esto.</b> (conseil de professionnel, usted).<br><br>❓ <b>2. Proposer.</b> <b>¿Te gustaría…? ¿Le gustaría…? ¿Y si…?</b> (et si… ?) <b>¿Qué te parece si…?</b> (qu'en penses-tu si… ?) <b>Podríamos + infinitif</b> (nous pourrions) : <i>Podríamos cenar juntos.</i><br><br>🙅 <b>3. Refuser poliment.</b> <b>Me encantaría, pero no puedo.</b> <b>Sería un placer, pero tengo otro compromiso.</b> <b>Lo siento mucho, pero no podría.</b> On ne dit jamais « No » sec : on adoucit.<br><br>✅ <b>4. Accepter.</b> <b>Con mucho gusto. Me encantaría. Sería genial. Por supuesto.</b><br><br>🌍 <b>5. Régions.</b> En Espagne : <b>¿Te apetecería…?</b> (ça te dirait ?). En Amérique latine : <b>¿Te provocaría…?</b> (Colombie, Venezuela) ou <b>¿Te gustaría…?</b>. <b>Con mucho gusto</b> est universel.<br><br>🗣️ <b>6. Informel.</b> <b>Sería genial, ¡Qué ganas!, Yo me apuntaría, Por mí encantado, Me da igual, No me importaría</b> (cela ne me dérangerait pas), <b>Cuando quieras</b> (quand tu veux).<br><br>👥 <b>7. Tutoiement ET vouvoiement.</b> tú → <b>¿Podrías? ¿Te importaría? Yo que tú…</b> · usted → <b>¿Podría? ¿Le importaría? Yo que usted…</b> Le conditionnel est indispensable pour le vouvoiement professionnel.",
  whyLabel:"Comment ne plus mélanger futur et conditionnel ?",
  whyText:"Le futur a des terminaisons accentuées et différentes à chaque personne (é, ás, á, emos, éis, án). Le conditionnel a toujours la même terminaison -ía avec un petit « i » en plus (ía, ías, ía, íamos, íais, ían). Pour choisir : parle-t-on d'un fait futur certain (« Mañana iré »)? → futur. D'une proposition, d'une politesse ou d'un souhait (« Me gustaría ir »)? → conditionnel. Et après un verbe au passé, le futur devient conditionnel : « Dijo que iría ». Entraîne-toi en transformant dix phrases au futur en phrases au conditionnel poli : « Hablaré con él » → « Hablaría con él »."
 },
 REVIEW: [
  {q:"« J'ai mal à la tête » :", opts:["Me duele la cabeza.","Me duelen la cabeza."], correct:0, fb:"cabeza : singulier. (rappel A2.10)"},
  {q:"« Depuis deux jours » :", opts:["desde hace dos días","desde dos días"], correct:0, fb:"desde hace + durée. (rappel A2.10)"},
  {q:"« Deux fois par jour » :", opts:["dos veces al día","dos veces el día"], correct:0, fb:"al día. (rappel A2.10)"},
  {q:"« Il faut boire de l'eau » :", opts:["Hay que beber agua.","Hay beber agua."], correct:0, fb:"hay que + infinitif. (rappel A2.10)"},
  {q:"Vouvoiement : « ¿Dónde ___ duele ? »", opts:["le","te"], correct:0, fb:"usted → le. (rappel A2.10)"}
 ],
 DRILLS: [
  {type:"fill", text:"Yo ___ con él. (hablar, conditionnel)", answers:["hablaría","Hablaría"], why:"hablar + ía."},
  {type:"fill", text:"Tú ___ más. (dormir)", answers:["dormirías","Dormirías"], why:"dormir + ías."},
  {type:"fill", text:"Ella ___ en Lima. (vivir)", answers:["viviría","Viviría"], why:"vivir + ía."},
  {type:"fill", text:"Nosotros ___ juntos. (comer)", answers:["comeríamos","Comeríamos"], why:"comer + íamos."},
  {type:"fill", text:"Ellos ___ mañana. (venir)", answers:["vendrían","Vendrían"], why:"vendr- + ían."},
  {type:"fill", text:"Yo ___ más tiempo. (tener)", answers:["tendría","Tendría"], why:"tendr- + ía."},
  {type:"fill", text:"¿___ usted ayudarme? (poder)", answers:["Podría","podría"], why:"podr- + ía."},
  {type:"fill", text:"¿___ ayudarme? (poder, tú)", answers:["Podrías","podrías"], why:"podr- + ías."},
  {type:"fill", text:"Yo ___ lo mismo. (hacer)", answers:["haría","Haría"], why:"har- + ía."},
  {type:"fill", text:"Te ___ la verdad. (decir)", answers:["diría","Diría"], why:"dir- + ía."},
  {type:"fill", text:"Yo ___ contigo. (salir)", answers:["saldría","Saldría"], why:"saldr- + ía."},
  {type:"fill", text:"___ una mesa para dos. (querer, poli)", answers:["Querría","querría"], why:"querr- + ía."},
  {type:"fill", text:"Me ___ viajar. (gustar)", answers:["gustaría","Gustaría"], why:"gustar + ía."},
  {type:"fill", text:"Me ___ ir a Perú. (encantar)", answers:["encantaría","Encantaría"], why:"encantar + ía."},
  {type:"fill", text:"¿Le ___ esperar? (importar)", answers:["importaría","Importaría"], why:"importar + ía."},
  {type:"fill", text:"Yo que tú, ___ al médico. (ir)", answers:["iría","Iría"], why:"ir + ía."},
  {type:"fill", text:"___ mejor esperar. (ser)", answers:["Sería","sería"], why:"ser + ía."},
  {type:"fill", text:"Dijo que ___ tarde. (llegar)", answers:["llegaría","Llegaría"], why:"Futur dans le passé."},
  {type:"choice", q:"Plus poli :", opts:["¿Podría ayudarme?","¿Puede ayudarme?"], correct:0, why:"Le conditionnel adoucit."},
  {type:"choice", q:"Le conditionnel se forme sur :", opts:["l'infinitif","le radical du passé"], correct:0, why:"infinitif + ía."},
  {type:"choice", q:"« Je ferais » :", opts:["haría","hacería"], correct:0, why:"Radical har-."},
  {type:"choice", q:"« Tu devrais » :", opts:["deberías","debes"], correct:0, why:"Conseil poli."},
  {type:"choice", q:"À ta place, … :", opts:["Yo que tú…","Yo como tú…"], correct:0, why:"Yo que tú."},
  {type:"choice", q:"Avec usted :", opts:["¿Le importaría?","¿Te importaría?"], correct:0, why:"usted → le."},
  {type:"choice", q:"« Il a dit qu'il viendrait » :", opts:["Dijo que vendría.","Dijo que viene."], correct:0, why:"Futur dans le passé."}
 ],
 ANNOTATED: {
  title:"Quatre phrases de politesse",
  intro:"Quatre phrases pour reconnaître le conditionnel. Touche chaque mot pour voir sa nature et sa traduction.",
  sentences:[
   {fr:"Pourriez-vous m'aider, s'il vous plaît ?", tokens:[
    {w:"¿Podría", tag:"verbe", info:"poder · conditionnel · usted", fr:"pourriez-vous", tip:"podr- + ía."},
    {w:"ayudarme,", tag:"verbe", info:"infinitif + me", fr:"m'aider"},
    {w:"por favor?", tag:"locution", fr:"s'il vous plaît"}
   ]},
   {fr:"J'aimerais réserver une table.", tokens:[
    {w:"Me", tag:"pronom", info:"COI", fr:"me"},
    {w:"gustaría", tag:"verbe", info:"gustar · conditionnel", fr:"plairait", tip:"Me gustaría = j'aimerais."},
    {w:"reservar", tag:"verbe", info:"infinitif", fr:"réserver"},
    {w:"una mesa", tag:"nom", info:"fém. sing.", fr:"une table"}
   ]},
   {fr:"À ta place, j'irais chez le médecin.", tokens:[
    {w:"Yo que tú", tag:"locution", info:"conseil", fr:"à ta place"},
    {w:"iría", tag:"verbe", info:"ir · conditionnel · yo", fr:"j'irais"},
    {w:"al médico", tag:"nom", fr:"chez le médecin"}
   ]},
   {fr:"Ana a dit qu'elle arriverait en retard.", tokens:[
    {w:"Ana", tag:"nom propre", fr:"Ana"},
    {w:"dijo", tag:"verbe", info:"decir · passé simple", fr:"a dit"},
    {w:"que", tag:"conjonction", fr:"que"},
    {w:"llegaría", tag:"verbe", info:"llegar · conditionnel", fr:"arriverait", tip:"Futur dans le passé."},
    {w:"tarde", tag:"adverbe", fr:"en retard"}
   ]}
  ]
 },
 CULTURE_NOTE: {icon:"💭", title:"Culture, langage informel et fiche récap de A2.11",
  html:"<b>💭 Culture : la politesse espagnole</b> Dans le monde hispanophone, la politesse passe par les mots d'adoucissement : « por favor », « si no le importa », « si fuera tan amable » (si vous étiez aussi aimable). Le conditionnel est le temps clé du service et du travail. À l'inverse, entre amis, on peut utiliser le présent : « ¿Me pasas el agua? ».<br><br><b>🗣️ Dix expressions informelles avec le conditionnel</b><br>1. <b>Sería genial</b> = ce serait génial.<br>2. <b>Me encantaría</b> = j'adorerais.<br>3. <b>Yo me apuntaría</b> = moi je serais partant.<br>4. <b>Yo que tú…</b> = à ta place…<br>5. <b>Daría lo que fuera por…</b> = je donnerais n'importe quoi pour…<br>6. <b>No me importaría</b> = cela ne me dérangerait pas.<br>7. <b>Sería capaz de todo</b> = il serait capable de tout.<br>8. <b>Habría que verlo</b> = il faudrait voir.<br>9. <b>¿Qué harías sin mí?</b> = que ferais-tu sans moi ?<br>10. <b>Te diría que sí</b> = je te dirais que oui.<br>Avec un supérieur : « ¿Le importaría que hablemos mañana? ».<br><br><b>📋 Fiche récap A2.11</b><br>• <b>Conditionnel</b> : infinitif + ía · ías · ía · íamos · íais · ían.<br>• <b>Irréguliers</b> (comme le futur) : tendría · podría · sabría · querría · vendría · pondría · saldría · habría · haría · diría.<br>• <b>Politesse</b> : ¿Podría…? · Me gustaría… · Querría… · ¿Le importaría…?<br>• <b>Conseil</b> : yo que tú + cond. · deberías + inf. · sería mejor + inf.<br>• <b>Futur dans le passé</b> : Dijo que vendría.<br>• <b>Tú ET usted</b> : ¿Podrías? / ¿Podría usted?"},
 NEXT_PREVIEW:"A2.12 (Synthèse A2) : un grand bilan du niveau A2 : tous les temps ensemble (passé simple, imparfait, perfecto, futur, conditionnel), l'impératif, les pronoms et la comparaison, à travers une histoire complète.",
 META:{vocabTitle:"Me gustaría, podría : le conditionnel (A2.11)", lectureTitle:"Un viaje soñado", bilanTitle:"Bravo, tu parles avec politesse !", pronLabel:"Accent sur le í de -ía, rr de querría, h muette dans haría", todayLede:"former le conditionnel, demander poliment, conseiller (yo que tú, deberías), rêver (me encantaría) et rapporter le futur dans le passé, en tutoiement ET en vouvoiement"}
};
})();


// A2.12 — Bilan A2 : tous les temps ensemble — leçon 224
(function(){
function blk(name, rows){
  var v = __esB(name, rows);
  v.forEach(function(o, i){ o.emo = rows[i][4]; o.ex = [rows[i][5], rows[i][6]]; });
  return v;
}
var V = [].concat(
 blk("Relier les idées : les connecteurs du A2", [
  ["porque · por eso","/ˈpoɾke · poɾ ˈeso/","parce que · c'est pourquoi","« Porque » donne la cause, « por eso » la conséquence : « Estaba enfermo, por eso no vine ».","🔗","No vine porque estaba enfermo.","Je ne suis pas venu parce que j'étais malade."],
  ["pero · sin embargo","/ˈpeɾo · sin emˈbaɾɣo/","mais · pourtant","« Sin embargo » est plus formel, au début d'une phrase.","↔️","Es caro, pero es muy bueno.","C'est cher, mais c'est très bon."],
  ["además","/aðeˈmas/","en plus, de plus","Ajoute un argument : « Además, es barato ».","➕","Es barato y, además, está cerca.","C'est bon marché et, en plus, c'est près."],
  ["aunque","/ˈauŋke/","bien que, même si","« Aunque llueve, salgo » (le fait est réel : présent de l'indicatif).","🌦️","Aunque está cansado, trabaja.","Bien qu'il soit fatigué, il travaille."],
  ["por lo tanto","/poɾ lo ˈtanto/","donc, par conséquent","Formel : « No hay tiempo; por lo tanto, cancelamos ».","➡️","No hay tiempo; por lo tanto, nos vamos.","Il n'y a pas le temps ; donc nous partons."],
  ["mientras tanto","/ˈmjentɾas ˈtanto/","pendant ce temps","Relie deux actions simultanées.","⏳","Mientras tanto, él esperaba.","Pendant ce temps, il attendait."],
  ["al principio · al final","/al pɾinˈθipjo/","au début · à la fin","Pour structurer un récit.","🎬","Al principio, tenía miedo.","Au début, j'avais peur."],
  ["por un lado · por otro lado","/poɾ un ˈlaðo/","d'un côté · de l'autre","Compare deux points de vue.","⚖️","Por un lado es caro; por otro, es cómodo.","D'un côté c'est cher ; de l'autre, c'est confortable."]
 ]),
 blk("Donner son avis, être d'accord", [
  ["creo que · me parece que","/ˈkɾeo ke · me paˈɾeθe ke/","je crois que · il me semble que","« Creo que + indicatif » : « Creo que es mejor ».","💭","Creo que es una buena idea.","Je crois que c'est une bonne idée."],
  ["en mi opinión","/en mi opiˈnjon/","à mon avis","Formule neutre et polie.","🗣️","En mi opinión, el tren es mejor.","À mon avis, le train est mieux."],
  ["estoy de acuerdo","/esˈtoj ðe aˈkweɾðo/","je suis d'accord","Négatif : « No estoy de acuerdo ».","👍","Estoy de acuerdo contigo.","Je suis d'accord avec toi."],
  ["tienes razón · tiene razón","/ˈtjenes raˈθon/","tu as raison · vous avez raison","Tú / usted. « No tienes razón » = tu as tort.","✅","Tiene razón, señora.","Vous avez raison, madame."],
  ["depende","/deˈpende/","ça dépend","Réponse très courante.","🤷","—¿Es caro? —Depende.","— C'est cher ? — Ça dépend."],
  ["por supuesto · claro","/poɾ suˈpwesto · ˈklaɾo/","bien sûr · évidemment","« Claro » est informel, « por supuesto » plus formel.","✅","—¿Vienes? —¡Claro!","— Tu viens ? — Bien sûr !"],
  ["quizás · tal vez","/kiˈθas · tal beθ/","peut-être","« Quizás vendrá mañana ».","🤔","Quizás vaya mañana.","Peut-être que j'irai demain."],
  ["en cambio","/en ˈkambjo/","en revanche","Oppose deux faits : « Madrid es grande; en cambio, mi pueblo es pequeño ».","⚖️","Madrid es grande; en cambio, Lyon es más pequeña.","Madrid est grande ; en revanche, Lyon est plus petite."]
 ]),
 blk("Famille, travail, vie quotidienne (révision)", [
  ["la familia · los parientes","/la faˈmilja/","la famille · les proches","Famille au sens large.","👨‍👩‍👧","Mi familia vive en Lyon.","Ma famille vit à Lyon."],
  ["el trabajo · la empresa","/el tɾaˈβaxo · la emˈpɾesa/","le travail · l'entreprise","Féminin : la empresa.","🏢","Trabajo en una empresa grande.","Je travaille dans une grande entreprise."],
  ["el jefe · la jefa","/el ˈxefe/","le chef · la cheffe","Masculin et féminin.","👔","La jefa llegó tarde.","La cheffe est arrivée en retard."],
  ["el compañero · la compañera","/el kompaˈɲeɾo/","le collègue · le camarade","« Compañero de trabajo » = collègue.","🤝","Mi compañera es muy simpática.","Ma collègue est très sympathique."],
  ["la reunión · la cita","/la reuˈnjon/","la réunion · le rendez-vous","« Cita » = rendez-vous (médecin, personnel).","📅","Tengo una reunión a las diez.","J'ai une réunion à dix heures."],
  ["el fin de semana","/el fin ðe seˈmana/","le week-end","Masculin.","🗓️","El fin de semana fui a la playa.","Ce week-end je suis allé à la plage."],
  ["el viaje · las vacaciones","/el ˈbjaxe/","le voyage · les vacances","Révision A2.2.","🧳","Las vacaciones fueron geniales.","Les vacances ont été géniales."],
  ["la experiencia","/la ekspeˈɾjenθja/","l'expérience","Féminin. « Tengo experiencia » = j'ai de l'expérience.","🌟","Fue una experiencia inolvidable.","Ce fut une expérience inoubliable."]
 ]),
 blk("Résumer : les temps du A2 en une phrase", [
  ["ayer + passé simple","/aˈʝeɾ/","hier + passé simple","Événement fini : « Ayer fui al cine ».","1️⃣","Ayer comí con Ana.","Hier j'ai mangé avec Ana."],
  ["hoy + perfecto","/oj/","aujourd'hui + perfecto","Temps ouvert : « Hoy he trabajado mucho ».","2️⃣","Hoy he trabajado mucho.","Aujourd'hui j'ai beaucoup travaillé."],
  ["antes + imparfait","/ˈantes/","avant + imparfait","Habitude passée : « Antes vivía en Lyon ».","3️⃣","Antes vivía en Madrid.","Avant, j'habitais à Madrid."],
  ["mañana + futur","/maˈɲana/","demain + futur","Projet : « Mañana iré a Madrid ».","4️⃣","Mañana viajaré a Perú.","Demain je voyagerai au Pérou."],
  ["¿podría + infinitif?","/poˈðɾia/","pourriez-vous… ?","Politesse : conditionnel.","5️⃣","¿Podría ayudarme?","Pourriez-vous m'aider ?"],
  ["gire · siga · tome","/ˈxiɾe/","tournez · continuez · prenez","Impératif usted.","6️⃣","Siga todo recto, por favor.","Continuez tout droit, s'il vous plaît."],
  ["lo · la · se lo","/lo la se lo/","pronoms COD / COI","Ne te répète pas.","7️⃣","Se lo doy mañana.","Je le lui donne demain."],
  ["más… que · tan… como","/mas ke/","comparer","Choisir et comparer.","8️⃣","Es más barato que el otro.","C'est moins cher que l'autre."]
 ]),
 blk("Poser les questions : tú ET usted", [
  ["¿Qué hiciste? / ¿Qué hizo usted?","/ke iˈθiste/","Qu'as-tu fait ? / Qu'avez-vous fait ?","Passé simple.","❓","¿Qué hizo usted el domingo?","Que faisiez-vous dimanche ?"],
  ["¿Qué has hecho hoy? / ¿Qué ha hecho usted hoy?","/ke as ˈetʃo oj/","Qu'as-tu fait aujourd'hui ? / Qu'avez-vous fait aujourd'hui ?","Perfecto.","❓","¿Qué ha hecho usted esta mañana?","Qu'avez-vous fait ce matin ?"],
  ["¿Dónde vivías? / ¿Dónde vivía usted?","/ˈdonde biˈβias/","Où habitais-tu ? / Où habitiez-vous ?","Imparfait.","❓","¿Dónde vivía usted de niño?","Où habitiez-vous enfant ?"],
  ["¿Qué vas a hacer? / ¿Qué va a hacer usted?","/ke βas a aˈθeɾ/","Que vas-tu faire ? / Que ferez-vous ?","Futur proche.","❓","¿Qué va a hacer usted mañana?","Que ferez-vous demain ?"],
  ["¿Podrías ayudarme? / ¿Podría ayudarme?","/poˈðɾias aʝuˈðaɾme/","Pourrais-tu m'aider ? / Pourriez-vous m'aider ?","Conditionnel de politesse.","❓","¿Podría usted ayudarme?","Pourriez-vous m'aider ?"]
 ]),
 blk("Informel et prononciation", [
  ["¡Qué fuerte!","/ke ˈfweɾte/","C'est dingue !","Réaction à une histoire.","😮","¡Qué fuerte!","C'est dingue !"],
  ["¡Ya está!","/ʝa esˈta/","Voilà, c'est fait !","Fin d'une tâche.","✔️","¡Ya está!","Voilà !"],
  ["¡Lo has conseguido!","/lo as konseˈɣiðo/","Tu y es arrivé !","Félicitations : conseguir → conseguido.","🏆","¡Lo has conseguido!","Tu y es arrivé !"],
  ["-ó · -ía · -é","/ˈo · ˈia · ˈe/","accents de fin de mot","Passé simple : accent sur la fin (habló, llegué). Imparfait : accent sur le í (comía). Futur : accent sur la fin (hablaré). Conditionnel : accent sur le í (hablaría).","🔊","Habló, comía, hablaré, hablaría.","Il a parlé, je mangeais, je parlerai, je parlerais."]
 ])
);

LESSONS_ES[224] = {
 code:"A2.12", level:"A2",
 VOCAB: V,
 MEM_WORDS: __esIdx(V, ["porque · por eso","pero · sin embargo","creo que · me parece que","estoy de acuerdo","depende","ayer + passé simple","hoy + perfecto","antes + imparfait","mañana + futur","¡Lo has conseguido!"]),
 MINI_CHECKS: [
  {q:"« Hier, j'ai mangé » :", opts:["Ayer comí.","Ayer he comido."], correct:0, fb:"ayer → passé simple."},
  {q:"« Aujourd'hui, j'ai mangé » :", opts:["Hoy he comido.","Hoy comí."], correct:0, fb:"hoy → perfecto (Espagne)."},
  {q:"« Quand j'étais petit, je jouais » :", opts:["De niño jugaba.","De niño jugué."], correct:0, fb:"Habitude : imparfait."},
  {q:"« Demain je partirai » :", opts:["Mañana saldré.","Mañana salía."], correct:0, fb:"Futur : saldré."},
  {q:"« Pourriez-vous m'aider ? » :", opts:["¿Podría ayudarme?","¿Podrá ayudarme?"], correct:0, fb:"Conditionnel de politesse."},
  {q:"« Tournez à droite » (usted) :", opts:["Gire a la derecha.","Gira a la derecha."], correct:0, fb:"usted → gire."},
  {q:"« Je le lui donne » :", opts:["Se lo doy.","Le lo doy."], correct:0, fb:"le + lo → se lo."},
  {q:"« Plus grand que » :", opts:["más grande que","más grande de"], correct:0, fb:"más… que."}
 ],
 ROUNDS: [
  __esR("Ayer fui al cine con mis amigos.","Hier je suis allé au cinéma avec mes amis."),
  __esR("Hoy he trabajado mucho.","Aujourd'hui j'ai beaucoup travaillé."),
  __esR("Cuando era niño, vivía en Madrid.","Quand j'étais enfant, je vivais à Madrid."),
  __esR("Llovía cuando llegué a casa.","Il pleuvait quand je suis arrivé à la maison."),
  __esR("Mañana viajaré a Perú.","Demain je voyagerai au Pérou."),
  __esR("Me gustaría reservar una mesa.","J'aimerais réserver une table."),
  __esR("Siga todo recto y gire a la derecha.","Continuez tout droit et tournez à droite."),
  __esR("Se lo doy mañana.","Je le lui donne demain."),
  __esR("Es más barato que el otro.","C'est moins cher que l'autre."),
  __esR("Me duele la cabeza desde ayer.","J'ai mal à la tête depuis hier."),
  __esR("Creo que es una buena idea.","Je crois que c'est une bonne idée."),
  __esR("Tiene razón, señora.","Vous avez raison, madame."),
  __esR("¡Lo has conseguido!","Tu y es arrivé !")
 ],
 QUIZ: [
  {cat:"ecrit", q:"« La semaine dernière, nous avons voyagé. »", opts:["La semana pasada hemos viajado.", "La semana pasada viajamos.", "La semana pasada viajábamos."], correct:1, why:"Temps fermé : passé simple."},
  {cat:"ecrit", q:"« Cette semaine, nous avons voyagé. »", opts:["Esta semana viajamos.", "Esta semana viajaríamos.", "Esta semana hemos viajado."], correct:2, why:"Temps ouvert : perfecto."},
  {cat:"ecrit", q:"« Il dormait quand j'ai appelé. »", opts:["Dormí cuando llamaba.", "Dormía cuando llamé.", "Dormiría cuando llamé."], correct:1, why:"Décor + événement."},
  {cat:"ecrit", q:"« À ta place, je le dirais. »", opts:["Yo que tú, lo digo.", "Yo que tú, lo dije.", "Yo que tú, lo diría."], correct:2, why:"Yo que tú + conditionnel."},
  {cat:"ecrit", q:"« Prenez ce comprimé » (usted) :", opts:["Toma esta pastilla.", "Tome esta pastilla.", "Tomar esta pastilla."], correct:1, why:"usted → tome."},
  {cat:"ecrit", q:"« Il est plus rapide que moi. »", opts:["Es más rápido de yo.", "Es tan rápido que yo.", "Es más rápido que yo."], correct:2, why:"más… que."},
  {cat:"ecrit", q:"« Ça me plaît beaucoup. » (el libro)", opts:["Me gustan mucho.", "Me gusta mucho.", "Gusto mucho."], correct:1, why:"el libro : singulier."},
  {cat:"ecrit", q:"« Je n'ai pas encore mangé. »", opts:["No todavía comí.", "Todavía no comeré.", "Todavía no he comido."], correct:2, why:"todavía no + perfecto."},
  {cat:"ecrit", q:"« Il m'a dit qu'il viendrait. »", opts:["Me dijo que vendrá.", "Me dijo que vendría.", "Me dijo que viene."], correct:1, why:"Futur dans le passé : conditionnel."},
  {cat:"ecrit", q:"« Je suis d'accord avec vous. » (usted)", opts:["Soy de acuerdo con usted.", "Estoy acuerdo con usted.", "Estoy de acuerdo con usted."], correct:2, why:"estar de acuerdo."},
  {cat:"ecrit", q:"« Je ne suis pas venu parce que j'étais malade. »", opts:["No vine porque estuve enfermo.", "No vine porque estaba enfermo.", "No venía porque estaba enfermo."], correct:1, why:"vine (événement) + estaba (état)."},
  {cat:"ecrit", q:"« Ils ont dit que oui. »", opts:["Dijieron que sí.", "Dicieron que sí.", "Dijeron que sí."], correct:2, why:"dijeron."},
  {cat:"ecrit", q:"« Où avez-vous mal ? » (usted)", opts:["¿Dónde te duele?", "¿Dónde le duele?", "¿Dónde duele usted?"], correct:1, why:"usted → le."},
  {cat:"ecrit", q:"« Elle l'a vu hier. » (el coche)", opts:["Ayer lo veía.", "Ayer lo ha visto.", "Ayer lo vio."], correct:2, why:"ayer → passé simple ; lo = COD."},
  {cat:"oral", audio:"Ayer llovía y no salimos.", q:"Écoute : pourquoi ne sont-ils pas sortis ?", opts:["Il pleuvait","Il faisait chaud","Ils étaient malades"], correct:0, why:"« llovía »."},
  {cat:"oral", audio:"Mañana tendremos una reunión importante.", q:"Écoute : quand ?", opts:["Demain","Hier","La semaine dernière"], correct:0, why:"« mañana »."},
  {cat:"oral", audio:"¿Podría decirme dónde está la estación?", q:"Écoute : le ton est :", opts:["Poli","Familier","Impatient"], correct:0, why:"« podría »."},
  {cat:"oral", audio:"Me duele la espalda desde hace tres días.", q:"Écoute : depuis quand ?", opts:["Trois jours","Une semaine","Hier"], correct:0, why:"« tres días »."},
  {cat:"oral", audio:"Se lo doy mañana, señor.", q:"Écoute : qui parle à qui ?", opts:["Un employé à un client","Un enfant à un ami","Deux amis"], correct:0, why:"« señor », « se lo »."},
  {cat:"comprehension", passage:"Marta: Cuando era niña, vivía en un pueblo pequeño. Un día, mientras jugaba en el jardín, oí un ruido y vi a un perro enorme. Me asusté, pero era muy simpático. Hoy trabajo en una empresa en Madrid y el año que viene viajaré a Perú. Me gustaría vivir allí algún día.", q:"Où vivait Marta enfant ?", opts:["Dans un petit village","À Madrid","Au Pérou"], correct:0, why:"« un pueblo pequeño »."},
  {cat:"comprehension", passage:"Marta: Cuando era niña, vivía en un pueblo pequeño. Un día, mientras jugaba en el jardín, oí un ruido y vi a un perro enorme. Me asusté, pero era muy simpático. Hoy trabajo en una empresa en Madrid y el año que viene viajaré a Perú. Me gustaría vivir allí algún día.", q:"Qu'a vu Marta un jour ?", opts:["Un énorme chien","Un voleur","Un oiseau"], correct:0, why:"« un perro enorme »."},
  {cat:"comprehension", passage:"Marta: Cuando era niña, vivía en un pueblo pequeño. Un día, mientras jugaba en el jardín, oí un ruido y vi a un perro enorme. Me asusté, pero era muy simpático. Hoy trabajo en una empresa en Madrid y el año que viene viajaré a Perú. Me gustaría vivir allí algún día.", q:"Que fera Marta l'année prochaine ?", opts:["Voyager au Pérou","Changer de travail","Déménager à Lyon"], correct:0, why:"« viajaré a Perú »."},
  {cat:"comprehension", passage:"Cliente: Buenas tardes. Ayer compré este libro, pero tiene una página rota. ¿Podría cambiármelo? — Empleada: Claro, señor. Lo siento mucho. ¿Tiene el recibo? — Cliente: Sí, aquí está. — Empleada: Perfecto. Se lo cambio ahora mismo.", q:"Quand le client a-t-il acheté le livre ?", opts:["Hier","Aujourd'hui","La semaine dernière"], correct:0, why:"« Ayer compré »."},
  {cat:"comprehension", passage:"Cliente: Buenas tardes. Ayer compré este libro, pero tiene una página rota. ¿Podría cambiármelo? — Empleada: Claro, señor. Lo siento mucho. ¿Tiene el recibo? — Cliente: Sí, aquí está. — Empleada: Perfecto. Se lo cambio ahora mismo.", q:"Quel est le problème ?", opts:["Une page déchirée","Le prix","La couleur"], correct:0, why:"« una página rota »."}
 ],
 PRON_VERBS: [
  {en:"habló · llegué", fr:"il a parlé · je suis arrivé (a-BLÓ, ye-GUÉ : accent final)"},
  {en:"comía · vivía", fr:"je mangeais · je vivais (ko-MÍ-a, bi-BÍ-a)"},
  {en:"he comido · ha dicho", fr:"j'ai mangé · il a dit (e ko-MI-do, a DI-tcho)"},
  {en:"hablaré · tendrá", fr:"je parlerai · il aura (a-bla-RÉ, ten-DRÁ)"},
  {en:"hablaría · podría", fr:"je parlerais · je pourrais (a-bla-RÍ-a, po-DRÍ-a)"},
  {en:"gire · siga", fr:"tournez · continuez (HI-re, SI-ga)"},
  {en:"se lo doy", fr:"je le lui donne (se lo DOI)"},
  {en:"más que · tan como", fr:"plus que · aussi que"},
  {en:"me duele", fr:"j'ai mal (me DUE-le)"},
  {en:"¡Lo has conseguido!", fr:"Tu y es arrivé ! (lo as kon-se-GUI-do)"}
 ],
 READING: [
  "Marta tiene treinta años y vive en Madrid desde hace cinco.",
  "Cuando era niña, vivía en un pueblo pequeño junto al mar.",
  "El año pasado cambió de trabajo y ahora trabaja en una empresa de viajes.",
  "Hoy ha tenido una reunión importante y ha hablado con tres clientes.",
  "Mañana tendrá un día más tranquilo, pero el lunes viajará a Lima.",
  "—¿Podría usted enviarme el billete? —le pregunta un cliente.",
  "—Por supuesto, señor. Se lo envío esta tarde —contesta Marta.",
  "Le gustaría vivir en Perú: sería más barato que Madrid y el clima sería más agradable.",
  "—Yo que tú, lo intentaría —le dice su hermana—. ¡Te encantaría!",
  "Marta sonríe. Tiene claro que algún día lo hará."
 ],
 GLOSS: [
  {en:"desde hace cinco años", fr:"depuis cinq ans (présent + desde hace)"},
  {en:"junto al mar", fr:"au bord de la mer"},
  {en:"cambió de trabajo", fr:"a changé de travail (passé simple)"},
  {en:"el clima", fr:"le climat"},
  {en:"sería más barato", fr:"ce serait moins cher (conditionnel)"},
  {en:"lo intentaría", fr:"j'essaierais (conditionnel)"},
  {en:"tiene claro", fr:"elle est sûre (de ce qu'elle veut)"},
  {en:"algún día", fr:"un jour (dans le futur)"}
 ],
 GRAMMAR1: {
  heading:"Le bilan A2 : choisir le bon temps à chaque fois",
  lede:"Tu as maintenant cinq temps (passé simple, imparfait, perfecto, futur, conditionnel), l'impératif, les pronoms et la comparaison. Cette leçon n'ajoute rien : elle t'apprend à les combiner et à choisir en quelques secondes.",
  conj:[
   ["Passé simple →","hablé · comí · viví (régulier) ; fui · tuve · hice (irrégulier)","Ayer fui al cine. El año pasado viajé a Perú."],
   ["Imparfait →","hablaba · comía · vivía ; era · iba · veía","Antes vivía en Lyon. Cuando era niño, jugaba."],
   ["Perfecto →","he · has · ha · hemos · han + participe","Hoy he trabajado. ¿Has comido ya?"],
   ["Futur →","infinitif + é · ás · á ; tendré · haré · podré","Mañana iré. La semana que viene tendré tiempo."],
   ["Conditionnel →","infinitif + ía ; tendría · haría · podría","¿Podría ayudarme? Me gustaría viajar."],
   ["Impératif →","usted : gire · coma ; tú : gira · come","Gire a la derecha. Come algo."]
  ],
  ruleHtml:"🧭 <b>1. Le test en trois questions.</b> Pour choisir le temps, pose-toi dans l'ordre : <b>(a) Quand ?</b> hier / l'année dernière → passé simple ; aujourd'hui / cette semaine → perfecto ; avant / chaque jour → imparfait ; demain → futur ; peut-être / poli → conditionnel. <b>(b) Quoi ?</b> un événement → passé simple ; un décor → imparfait. <b>(c) À qui ?</b> usted ou tú.<br><br>🔁 <b>2. Les cinq temps en un coup d'œil.</b> • <b>Passé simple</b> : événement fini (<i>llegué, comió, fue</i>). • <b>Imparfait</b> : décor, habitude (<i>llovía, vivía, era</i>). • <b>Perfecto</b> : passé qui touche le présent (<i>he comido, ha llegado</i>). • <b>Futur</b> : projet, promesse, supposition (<i>iré, estará</i>). • <b>Conditionnel</b> : politesse, conseil, rêve (<i>podría, iría, me gustaría</i>).<br><br>📝 <b>3. Les marqueurs de temps.</b> <b>Passé simple</b> : ayer, anoche, la semana pasada, el año pasado, hace dos días, de repente. <b>Imparfait</b> : antes, siempre, de niño, todos los días, mientras. <b>Perfecto</b> : hoy, esta semana, ya, todavía no, alguna vez, nunca. <b>Futur</b> : mañana, pasado mañana, la semana que viene, dentro de. <b>Conditionnel</b> : sería, me gustaría, yo que tú.<br><br>🎩 <b>4. Tutoiement ET vouvoiement : le tableau récap.</b> <b>Présent</b> : ¿Hablas? / ¿Habla usted? <b>Passé simple</b> : ¿Qué hiciste? / ¿Qué hizo usted? <b>Imparfait</b> : ¿Dónde vivías? / ¿Dónde vivía usted? <b>Perfecto</b> : ¿Has terminado? / ¿Ha terminado usted? <b>Futur</b> : ¿Qué harás? / ¿Qué hará usted? <b>Conditionnel</b> : ¿Podrías ayudarme? / ¿Podría ayudarme? <b>Impératif</b> : Gira / Gire. <b>Pronoms</b> : te / le.<br><br>🔗 <b>5. Les connecteurs.</b> <b>porque, por eso, pero, sin embargo, además, aunque, por lo tanto, mientras tanto, al principio, al final</b>. Un récit A2 réussi utilise au moins quatre connecteurs.<br><br>💬 <b>6. Donner son avis.</b> <b>Creo que… · Me parece que… · En mi opinión… · Estoy de acuerdo · No estoy de acuerdo · Depende.</b> Avec « creo que », tu mets l'indicatif : <i>Creo que es mejor.</i><br><br>🌟 <b>7. Les trois automatismes A2.</b> (1) Regarde toujours le marqueur de temps. (2) Choisis tú ou usted avant de conjuguer. (3) Relis tes accents : -ó, -é, -ía, -ería.",
  dialogueLede:"Une entrevue d'embauche (vouvoiement) :",
  dialogue:[
   {who:"them", en:"Buenos días. Cuénteme: ¿dónde trabajaba antes?", fr:"Bonjour. Racontez-moi : où travailliez-vous avant ?"},
   {who:"you", en:"Trabajaba en un banco en Lyon, pero el año pasado me mudé a Madrid.", fr:"Je travaillais dans une banque à Lyon, mais l'an dernier j'ai déménagé à Madrid."},
   {who:"them", en:"¿Qué ha hecho desde entonces?", fr:"Qu'avez-vous fait depuis ?"},
   {who:"you", en:"He trabajado en una agencia de viajes y he aprendido mucho español.", fr:"J'ai travaillé dans une agence de voyages et j'ai beaucoup appris d'espagnol."},
   {who:"them", en:"¿Qué le gustaría hacer en esta empresa?", fr:"Que souhaiteriez-vous faire dans cette entreprise ?"},
   {who:"you", en:"Me gustaría organizar viajes. Creo que tengo experiencia y que podría ayudarles.", fr:"J'aimerais organiser des voyages. Je crois avoir de l'expérience et pouvoir vous aider."}
  ],
  whyLabel:"Pourquoi ce bilan est-il le plus important ?",
  whyText:"Le niveau A2 n'est pas une accumulation de règles : c'est la capacité de parler du passé, du présent et du futur dans la même conversation. Un interlocuteur espagnol te juge sur trois choses : comprends-tu quand ça s'est passé ? es-tu poli ? es-tu naturel ? Si tu appliques la méthode des trois questions, tu réponds aux trois. Et c'est aussi la base du niveau B1 : le subjonctif (qui prolonge l'impératif usted), les hypothèses (« si » + subjonctif) et le récit complexe. Chaque temps de A2 est une brique de B1. Prends le temps de revoir le tableau de la leçon une dernière fois, puis passe à l'examen final A2."
 },
 GRAMMAR2: {
  heading:"Raconter, décrire et argumenter : le récit A2 complet",
  dialogueLede:"Deux amies comparent leurs vacances (tutoiement) :",
  dialogue:[
   {who:"them", en:"¿Qué tal tus vacaciones? ¿Adónde fuiste?", fr:"Comment étaient tes vacances ? Où es-tu allée ?"},
   {who:"you", en:"Fui a Sevilla. Antes siempre iba a la playa, pero este año quise ver otra ciudad.", fr:"Je suis allée à Séville. Avant j'allais toujours à la plage, mais cette année j'ai voulu voir une autre ville."},
   {who:"them", en:"¿Y cómo fue? ¿Es más bonita que Madrid?", fr:"Et comment c'était ? C'est plus beau que Madrid ?"},
   {who:"you", en:"Creo que sí, aunque hacía mucho calor. Visitamos el Alcázar y comimos tapas todos los días.", fr:"Je crois que oui, même s'il faisait très chaud. Nous avons visité l'Alcázar et mangé des tapas tous les jours."},
   {who:"them", en:"¡Qué guay! El año que viene me gustaría ir. ¿Me recomendarías un hotel?", fr:"Génial ! L'année prochaine j'aimerais y aller. Tu me recommanderais un hôtel ?"},
   {who:"you", en:"Claro. Te lo envío esta noche.", fr:"Bien sûr. Je te l'envoie ce soir."}
  ],
  ruleHtml:"🎞️ <b>1. Le plan d'un récit A2 en quatre temps.</b> <b>Cadre</b> (imparfait) : <i>Antes siempre iba a la playa.</i> → <b>Événement</b> (passé simple) : <i>Este año fui a Sevilla.</i> → <b>Bilan</b> (perfecto ou passé simple) : <i>Ha sido genial / Fue genial.</i> → <b>Projet</b> (futur ou conditionnel) : <i>Volveré / Me gustaría volver.</i><br><br>🗣️ <b>2. Les connecteurs de structure.</b> <b>Al principio… luego… después… al final.</b> <b>Primero… segundo… por último.</b> <b>Por un lado… por otro lado.</b> <b>Además… sin embargo… por eso.</b><br><br>💬 <b>3. Les tournures d'opinion.</b> <b>Creo que es mejor.</b> <b>Me parece que sí.</b> <b>En mi opinión…</b> <b>Estoy de acuerdo / No estoy de acuerdo.</b> <b>Depende.</b> Pour nuancer : <b>más o menos</b> (plus ou moins), <b>bastante</b> (assez), <b>un poco</b> (un peu).<br><br>🔄 <b>4. Revoir les erreurs typiques.</b> (a) « Hoy comí » en Espagne → préfère « Hoy he comido ». (b) « Ayer he comido » → faux : « Ayer comí ». (c) « Si lloverá » → faux : « Si llueve ». (d) « Más mejor » → « mucho mejor ». (e) « Me gusta los libros » → « Me gustan ». (f) « Le lo doy » → « Se lo doy ». (g) « Dijieron » → « Dijeron ».<br><br>🎩 <b>5. Registres.</b> Avec un supérieur : <b>usted + conditionnel + por favor</b> (<i>¿Podría enviarme el documento, por favor?</i>). Avec un ami : <b>tú + présent</b> (<i>¿Me lo envías?</i>). Avec un inconnu : <b>perdone + usted</b>.<br><br>🌍 <b>6. Les variantes.</b> <b>vosotros</b> (Espagne) / <b>ustedes</b> (Amérique latine) ; <b>perfecto</b> (Espagne) / <b>passé simple</b> (Amérique latine) ; <b>billete / boleto</b> ; <b>piso / departamento</b> ; <b>coche / carro</b>. Les deux sont corrects : choisis ton pays cible.<br><br>👥 <b>7. Tutoiement ET vouvoiement.</b> Récapitulatif : tú → <b>¿Qué hiciste? ¿Dónde vivías? ¿Me ayudas?</b> · usted → <b>¿Qué hizo usted? ¿Dónde vivía usted? ¿Me ayuda usted?</b>",
  whyLabel:"Comment progresser maintenant ?",
  whyText:"Après A2, la progression se fait par la pratique, pas par de nouvelles règles. Trois exercices : (1) Chaque soir, raconte ta journée en cinq phrases (perfecto) et ton week-end précédent en cinq phrases (passé simple). (2) Une fois par semaine, décris un souvenir d'enfance (imparfait). (3) Chaque jour, formule une demande polie (conditionnel) à voix haute. Quinze minutes par jour suffisent pour transformer ces règles en réflexes. Ton prochain objectif : le subjonctif et les hypothèses, qui forment le cœur du B1."
 },
 REVIEW: [
  {q:"« Pourriez-vous m'aider ? » :", opts:["¿Podría ayudarme?","¿Puede ayudarme?"], correct:0, fb:"Conditionnel : plus poli. (rappel A2.11)"},
  {q:"« J'aimerais voyager » :", opts:["Me gustaría viajar.","Me gusta viajaría."], correct:0, fb:"gustar → gustaría. (rappel A2.11)"},
  {q:"« À ta place, j'irais » :", opts:["Yo que tú, iría.","Yo que tú, voy."], correct:0, fb:"yo que tú + cond. (rappel A2.11)"},
  {q:"« Tu devrais dormir » :", opts:["Deberías dormir.","Debes dormirías."], correct:0, fb:"deberías. (rappel A2.11)"},
  {q:"« Il a dit qu'il viendrait » :", opts:["Dijo que vendría.","Dijo que vendrá."], correct:0, fb:"Futur dans le passé. (rappel A2.11)"}
 ],
 DRILLS: [
  {type:"fill", text:"Ayer yo ___ al cine. (ir)", answers:["fui","Fui"], why:"Passé simple : fui."},
  {type:"fill", text:"Hoy yo ___ mucho. (trabajar, perfecto)", answers:["he trabajado","He trabajado"], why:"hoy → he trabajado."},
  {type:"fill", text:"Antes yo ___ en Lyon. (vivir)", answers:["vivía","Vivía"], why:"Habitude : vivía."},
  {type:"fill", text:"Mañana yo ___ a Madrid. (ir, futur)", answers:["iré","Iré"], why:"ir → iré."},
  {type:"fill", text:"Yo ___ viajar. (gustar, cond.)", answers:["me gustaría","Me gustaría"], why:"Me gustaría."},
  {type:"fill", text:"___ a la derecha. (girar, usted)", answers:["Gire","gire"], why:"usted → gire."},
  {type:"fill", text:"___ doy mañana. (le + lo)", answers:["Se lo","se lo"], why:"se lo."},
  {type:"fill", text:"Es ___ barato que el otro. (plus)", answers:["más","Más"], why:"más… que."},
  {type:"fill", text:"Me ___ la cabeza. (doler)", answers:["duele","Duele"], why:"cabeza : singulier."},
  {type:"fill", text:"Tengo tos ___ hace dos días.", answers:["desde","Desde"], why:"desde hace."},
  {type:"fill", text:"Cuando ___ niño, vivía en Madrid. (ser)", answers:["era","Era"], why:"ser → era."},
  {type:"fill", text:"De repente, ___ el teléfono. (sonar)", answers:["sonó","Sonó"], why:"Événement."},
  {type:"fill", text:"Ellos ___ que sí. (decir, passé simple)", answers:["dijeron","Dijeron"], why:"dijeron."},
  {type:"fill", text:"¿Qué ___ usted ayer? (hacer)", answers:["hizo","Hizo"], why:"usted → hizo."},
  {type:"fill", text:"Mi hermano es ___ que yo. (plus âgé)", answers:["mayor","Mayor"], why:"mayor."},
  {type:"fill", text:"___ razón, señora. (tener)", answers:["Tiene","tiene"], why:"usted → tiene."},
  {type:"fill", text:"Estoy ___ acuerdo contigo. (de)", answers:["de","De"], why:"estar de acuerdo."},
  {type:"fill", text:"Ya ___ he hecho. (le)", answers:["lo","Lo"], why:"COD : lo."},
  {type:"choice", q:"« Hier » appelle :", opts:["passé simple","perfecto"], correct:0, why:"Temps fermé."},
  {type:"choice", q:"« Aujourd'hui » (Espagne) appelle :", opts:["perfecto","imparfait"], correct:0, why:"Temps ouvert."},
  {type:"choice", q:"« Siempre » appelle :", opts:["imparfait","passé simple"], correct:0, why:"Habitude."},
  {type:"choice", q:"Pour être poli :", opts:["¿Podría ayudarme?","¿Puedes ayudarme?"], correct:0, why:"Conditionnel + usted."},
  {type:"choice", q:"« Demain » appelle :", opts:["futur","conditionnel"], correct:0, why:"Projet."},
  {type:"choice", q:"Usted, -AR :", opts:["-e","-a"], correct:0, why:"gire."},
  {type:"choice", q:"« Meilleur » :", opts:["mejor","más bueno"], correct:0, why:"bueno → mejor."}
 ],
 ANNOTATED: {
  title:"Quatre phrases, quatre temps",
  intro:"Quatre phrases pour reconnaître le bon temps. Touche chaque mot pour voir sa nature et sa traduction.",
  sentences:[
   {fr:"Hier, je suis allé au cinéma.", tokens:[
    {w:"Ayer", tag:"adverbe", info:"marqueur", fr:"hier"},
    {w:"fui", tag:"verbe", info:"ir · passé simple", fr:"suis allé"},
    {w:"al cine", tag:"locution", fr:"au cinéma"}
   ]},
   {fr:"Quand j'étais enfant, je vivais à Madrid.", tokens:[
    {w:"Cuando era niño", tag:"locution", info:"marqueur d'habitude", fr:"quand j'étais enfant"},
    {w:"vivía", tag:"verbe", info:"vivir · imparfait", fr:"vivais"},
    {w:"en Madrid", tag:"locution", fr:"à Madrid"}
   ]},
   {fr:"Aujourd'hui, j'ai beaucoup travaillé.", tokens:[
    {w:"Hoy", tag:"adverbe", info:"marqueur", fr:"aujourd'hui"},
    {w:"he trabajado", tag:"verbe", info:"perfecto", fr:"j'ai travaillé"},
    {w:"mucho", tag:"adverbe", fr:"beaucoup"}
   ]},
   {fr:"Pourriez-vous m'aider, s'il vous plaît ?", tokens:[
    {w:"¿Podría", tag:"verbe", info:"poder · conditionnel", fr:"pourriez"},
    {w:"ayudarme,", tag:"verbe", info:"infinitif + me", fr:"m'aider"},
    {w:"por favor?", tag:"locution", fr:"s'il vous plaît"}
   ]}
  ]
 },
 CULTURE_NOTE: {icon:"🌍", title:"Culture, langage informel et fiche récap de A2.12",
  html:"<b>🌍 Culture : deux mondes, une langue</b> L'espagnol compte plus de 480 millions de locuteurs. Les différences (vosotros / ustedes, perfecto / passé simple, vocabulaire) ne t'empêcheront jamais d'être compris : choisis un pays cible et reste cohérent.<br><br><b>🗣️ Dix expressions informelles pour conclure une conversation</b><br>1. <b>¡Lo has conseguido!</b> = tu y es arrivé !<br>2. <b>¡Qué fuerte!</b> = c'est dingue !<br>3. <b>¡Ya está!</b> = c'est fait !<br>4. <b>Depende</b> = ça dépend.<br>5. <b>Más o menos</b> = plus ou moins.<br>6. <b>Qué bien se está aquí</b> = qu'on est bien ici.<br>7. <b>Ya hablaremos</b> = on en reparlera.<br>8. <b>Hasta la próxima</b> = à la prochaine.<br>9. <b>Cuídate mucho</b> = prends soin de toi.<br>10. <b>¡Que vaya bien!</b> = bonne continuation !<br>Avec un supérieur : « Que tenga un buen día ».<br><br><b>📋 Fiche récap A2</b><br>• <b>A2.1</b> passé simple régulier · <b>A2.2</b> irréguliers · <b>A2.3</b> perfecto · <b>A2.4</b> futur · <b>A2.5</b> imparfait · <b>A2.6</b> imparfait + passé simple · <b>A2.7</b> comparer · <b>A2.8</b> pronoms · <b>A2.9</b> impératif et ville · <b>A2.10</b> santé · <b>A2.11</b> conditionnel · <b>A2.12</b> bilan.<br>• <b>Méthode</b> : marqueur de temps → temps ; décor → imparfait ; événement → passé simple ; poli → conditionnel ; tú ou usted avant de conjuguer."},
 NEXT_PREVIEW:"Examen final A2 et Contrôle général A1 + A2 : tu valides tout le niveau pour débloquer le B1 (subjonctif, hypothèses, récit complexe).",
 META:{vocabTitle:"Bilan A2 : tous les temps ensemble (A2.12)", lectureTitle:"Marta, une vie en trois temps", bilanTitle:"Bravo, tu as terminé le niveau A2 !", pronLabel:"Accents de fin : -ó, -é, -ía, -ería ; diphtongues ue / ie", todayLede:"combiner passé simple, imparfait, perfecto, futur et conditionnel dans un même récit, choisir entre tú et usted, relier les idées avec des connecteurs et donner son opinion"}
};
})();


// A2.0 — Bases transversales A2 : marqueurs de temps, connecteurs, carte des temps, questions — leçon 228
(function(){
function blk(name, rows){
  var v = __esB(name, rows);
  v.forEach(function(o, i){ o.emo = rows[i][4]; o.ex = [rows[i][5], rows[i][6]]; });
  return v;
}
// ligne = [terme, API, français, note, emoji, exemple ES, exemple FR]
var V = [].concat(
 blk("Marqueurs de temps : passé", [
  ["ayer","/aˈʝeɾ/","hier","Ferme la journée : l'action est finie. y = « yé » : a-YER.","⏪","Ayer trabajé mucho.","Hier, j'ai beaucoup travaillé."],
  ["anoche","/aˈnotʃe/","hier soir, cette nuit","Un seul mot pour « hier soir ». ch = tch : a-NO-tche.","🌙","Anoche dormí bien.","Hier soir, j'ai bien dormi."],
  ["la semana pasada","/la seˈmana paˈsaða/","la semaine dernière","« pasada » s'accorde : el mes pasado, el año pasado.","📅","La semana pasada viajé.","La semaine dernière, j'ai voyagé."],
  ["hace dos días","/ˈaθe ðos ˈðias/","il y a deux jours","hace + durée = il y a. Le verbe reste au passé.","⏳","Llegué hace dos días.","Je suis arrivé il y a deux jours."],
  ["ya","/ʝa/","déjà","« Ya he comido » = j'ai déjà mangé. Dans une question : « ¿Ya comiste? » = tu as déjà mangé ?","✅","Ya terminé el trabajo.","J'ai déjà terminé le travail."],
  ["todavía no","/toðaˈβia no/","pas encore","« Todavía no llegó » = il n'est pas encore arrivé. Sans « no », todavía = encore, toujours.","⌛","Todavía no comí.","Je n'ai pas encore mangé."]
 ]),
 blk("Marqueurs de temps : futur et fréquence", [
  ["mañana","/maˈɲana/","demain","Attention : « la mañana » (fém.) = le matin ; « mañana » seul = demain.","🌅","Mañana voy a trabajar.","Demain, je vais travailler."],
  ["pasado mañana","/paˈsaðo maˈɲana/","après-demain","Littéralement « passé demain ». Bloc fixe.","⏭️","Pasado mañana viajo a Lyon.","Après-demain, je voyage à Lyon."],
  ["el próximo mes","/el ˈpɾoksimo mes/","le mois prochain","« próximo » s'accorde : la próxima semana, el próximo año. Accent écrit sur pró.","🗓️","El próximo mes viajo.","Le mois prochain, je voyage."],
  ["dentro de una semana","/ˈdentɾo ðe ˈuna seˈmana/","dans une semaine","dentro de + durée = « dans » + durée (à partir de maintenant). Pas « en ».","⏩","Llego dentro de una hora.","J'arrive dans une heure."],
  ["siempre","/ˈsjempɾe/","toujours","Fréquence maximale : 100 %. ie = « yé ».","♾️","Siempre cenamos tarde.","Nous dînons toujours tard."],
  ["a veces","/a ˈβeθes/","parfois","Deux mots : « a veces ». Piège : pas « aveces ».","🔀","A veces salgo a correr.","Parfois, je sors courir."],
  ["nunca","/ˈnunka/","jamais","Avant le verbe : « Nunca viajo ». Après : « No viajo nunca ». Pas de double sens.","🚫","Nunca bebo café.","Je ne bois jamais de café."]
 ]),
 blk("Connecteurs de récit", [
  ["primero","/pɾiˈmeɾo/","d'abord","Ouvre un récit. Invariable.","1️⃣","Primero abro la puerta.","D'abord, j'ouvre la porte."],
  ["luego","/ˈlweɣo/","ensuite, puis","ue = « oué » : LOUÉ-go.","2️⃣","Luego salgo de casa.","Ensuite, je sors de la maison."],
  ["después","/desˈpwes/","après","Accent sur la fin : des-PUÉS.","➡️","Después cenamos.","Après, nous dînons."],
  ["entonces","/enˈtonθes/","alors, à ce moment-là","Enchaîne une conséquence ou un moment du récit.","⚡","Llovía y entonces entré.","Il pleuvait et alors je suis entré."],
  ["por eso","/poɾ ˈeso/","c'est pourquoi","Donne la conséquence : « Estoy cansado, por eso me voy ».","🔗","Tengo prisa, por eso me voy.","Je suis pressé, c'est pourquoi je pars."],
  ["pero","/ˈpeɾo/","mais","Oppose deux idées.","↔️","Quiero ir, pero no puedo.","Je veux y aller, mais je ne peux pas."],
  ["porque","/ˈpoɾke/","parce que","Un mot, sans accent : réponse à « ¿Por qué? ».","💡","Me quedo porque llueve.","Je reste parce qu'il pleut."],
  ["cuando","/ˈkwando/","quand (conjonction)","Sans accent dans une phrase ; avec accent (¿cuándo?) dans une question.","🕒","Cuando llego, cocino.","Quand j'arrive, je cuisine."],
  ["mientras","/ˈmjentɾas/","pendant que","Deux actions en même temps.","🔄","Canto mientras cocino.","Je chante pendant que je cuisine."],
  ["al final","/al fiˈnal/","à la fin, finalement","Conclut un récit.","🏁","Al final compré el libro.","Finalement, j'ai acheté le livre."]
 ]),
 blk("Interrogatifs accentués", [
  ["¿qué?","/ke/","quoi ? que ?","Accent écrit dans une question : ¿Qué haces? Sans accent, « que » relie deux idées.","❓","¿Qué haces mañana?","Que fais-tu demain ?"],
  ["¿quién?","/kjen/","qui ?","Pluriel : ¿quiénes? « ¿Con quién hablas? »","👤","¿Quién llamó?","Qui a appelé ?"],
  ["¿cuándo?","/ˈkwando/","quand ?","Question sur le moment.","⏰","¿Cuándo llegas?","Quand arrives-tu ?"],
  ["¿dónde? · ¿adónde?","/ˈdonde · aˈðonde/","où ? · vers où ?","¿Dónde estás? (lieu) · ¿Adónde vas? (direction).","📍","¿Adónde vas mañana?","Où vas-tu demain ?"],
  ["¿cómo?","/ˈkomo/","comment ?","Manière ou état : ¿Cómo estás?","🤔","¿Cómo vienes?","Comment viens-tu ?"],
  ["¿por qué?","/poɾ ˈke/","pourquoi ?","Deux mots avec accent. Réponse : porque (un mot).","🙋","¿Por qué no vienes?","Pourquoi ne viens-tu pas ?"],
  ["¿cuánto? · ¿cuántos?","/ˈkwanto · ˈkwantos/","combien ?","S'accorde : ¿cuántas horas? ¿cuánta gente?","🔢","¿Cuántos días te quedas?","Combien de jours restes-tu ?"]
 ]),
 blk("Participes et formes irrégulières à reconnaître", [
  ["hecho","/ˈetʃo/","fait (hacer)","Participe passé irrégulier de hacer. h muet.","🛠️","He hecho la cena.","J'ai fait le dîner."],
  ["dicho","/ˈditʃo/","dit (decir)","Participe de decir.","💬","Me ha dicho la verdad.","Il m'a dit la vérité."],
  ["visto","/ˈbisto/","vu (ver)","Participe de ver. v = b.","👀","¿Has visto la película?","As-tu vu le film ?"],
  ["escrito","/eskɾiˈto/","écrit (escribir)","Participe irrégulier de escribir.","✍️","He escrito un mensaje.","J'ai écrit un message."],
  ["fui","/fwi/","je suis allé / je fus","Même forme pour ir et ser au passé. Le contexte décide : « Fui al cine ».","🎬","Ayer fui al mercado.","Hier, je suis allé au marché."],
  ["hice","/ˈiθe/","j'ai fait","Passé de hacer (yo). Repérage seulement.","🧰","Ayer hice la compra.","Hier, j'ai fait les courses."],
  ["tuve","/ˈtuβe/","j'ai eu","Passé de tener (yo).","🖐️","Tuve mucho trabajo.","J'ai eu beaucoup de travail."],
  ["estuve","/esˈtuβe/","j'ai été (lieu, état)","Passé de estar (yo).","🏠","Estuve en casa.","J'ai été à la maison."]
 ]),
 blk("Poser une question : tú et usted", [
  ["¿Qué hiciste ayer? / ¿Qué hizo usted ayer?","/ke iˈθiste aˈʝeɾ · ke ˈiθo usˈteð aˈʝeɾ/","Qu'as-tu fait hier ? / Qu'avez-vous fait hier ?","Tú → hiciste ; usted → hizo. Repérage de la forme : le détail vient en A2.2.","📝","¿Qué hizo usted anoche?","Qu'avez-vous fait hier soir ?"],
  ["¿Adónde vas a ir? / ¿Adónde va a ir usted?","/aˈðonde bas a iɾ · aˈðonde ba a iɾ usˈteð/","Où vas-tu aller ? / Où allez-vous aller ?","voy a + infinitif = futur proche : vas a ir (tú), va a ir (usted).","🧭","¿Adónde va a ir usted?","Où allez-vous aller ?"],
  ["¿Cuándo llegaste? / ¿Cuándo llegó usted?","/ˈkwando ʝeˈɣaste · ˈkwando ʝeˈɣo usˈteð/","Quand es-tu arrivé ? / Quand êtes-vous arrivé ?","Question au passé : même ordre qu'au présent.","🛬","¿Cuándo llegó usted?","Quand êtes-vous arrivé ?"]
 ])
);

LESSONS_ES[228] = {
 code:"A2.0", level:"A2",
 VOCAB: V,
 MEM_WORDS: __esIdx(V, ["ayer","anoche","hace dos días","dentro de una semana","siempre","por eso","mientras","¿por qué?","hecho","¿Cuándo llegaste? / ¿Cuándo llegó usted?"]),
 MINI_CHECKS: [
  {q:"Quel mot place l'action dans le passé ?", opts:["mañana","anoche","siempre"], correct:1, fb:"« Anoche » = hier soir : période terminée. « Mañana » est le futur ; « siempre » exprime l'habitude."},
  {q:"« Dans une semaine » se dit…", opts:["hace una semana","dentro de una semana"], correct:1, fb:"« dentro de » = dans (futur). « hace » = il y a (passé)."},
  {q:"« Pourquoi ? » (question) :", opts:["¿Por qué?","¿Porque?","¿Por que?"], correct:0, fb:"Question : « por qué », deux mots, accent sur qué. Réponse : « porque » en un mot."},
  {q:"Quel connecteur ouvre un récit ?", opts:["al final","primero","mientras"], correct:1, fb:"« Primero » = d'abord. « Al final » conclut ; « mientras » = pendant que."},
  {q:"Pour demander à un client où il va :", opts:["¿Adónde vas?","¿Adónde va usted?"], correct:1, fb:"Client = usted : « ¿Adónde va usted? ». « ¿Adónde vas? » = tutoiement."},
  {q:"Quelle phrase annonce un projet proche ?", opts:["Voy a viajar mañana.","Viajé ayer."], correct:0, fb:"« voy a + infinitif » = futur proche. « Viajé » = passé."},
  {q:"« Je n'ai pas encore mangé » :", opts:["Todavía no comí.","Ya comí."], correct:0, fb:"« todavía no » = pas encore. « ya » = déjà."},
  {q:"« Hecho » est le participe de…", opts:["hacer","decir","ver"], correct:0, fb:"hacer → hecho ; decir → dicho ; ver → visto."}
 ],
 ROUNDS: [
  __esR("Ayer trabajé mucho.","Hier, j'ai beaucoup travaillé."),
  __esR("Anoche dormí bien.","Hier soir, j'ai bien dormi."),
  __esR("Mañana voy a viajar.","Demain, je vais voyager."),
  __esR("Llego dentro de una hora.","J'arrive dans une heure."),
  __esR("Llegué hace dos días.","Je suis arrivé il y a deux jours."),
  __esR("¿Qué hiciste ayer?","Qu'as-tu fait hier ?"),
  __esR("¿Adónde vas a ir?","Où vas-tu aller ?"),
  __esR("¿Cuándo llegó usted?","Quand êtes-vous arrivé ?"),
  __esR("Primero abro la puerta y luego salgo.","D'abord j'ouvre la porte, puis je sors."),
  __esR("Tengo prisa, por eso me voy.","Je suis pressé, c'est pourquoi je pars."),
  __esR("Canto mientras cocino.","Je chante pendant que je cuisine."),
  __esR("Todavía no comí.","Je n'ai pas encore mangé."),
  __esR("¿Por qué no vienes?","Pourquoi ne viens-tu pas ?")
 ],
 QUIZ: [
  {cat:"ecrit", q:"« Hier, j'ai travaillé. »", opts:["Mañana trabajo.","Ayer trabajé.","Siempre trabajo."], correct:1, why:"« Ayer » demande un verbe au passé : trabajé. « Mañana » = futur ; « siempre » = habitude."},
  {cat:"ecrit", q:"« Dans deux jours, je pars. »", opts:["Hace dos días salgo.","Dentro de dos días salgo.","Ayer salgo."], correct:1, why:"« dentro de dos días » = dans deux jours. « hace » regarde vers le passé."},
  {cat:"ecrit", q:"¿ ___ vas mañana ? (direction)", opts:["Dónde","Adónde","Cuándo"], correct:1, why:"Direction (aller vers) : ¿adónde? Lieu fixe : ¿dónde estás?"},
  {cat:"ecrit", q:"— ¿ ___ no vienes ? — ___ estoy cansado.", opts:["Porque / Por qué","Por qué / Porque","Por qué / Por qué"], correct:1, why:"Question : por qué (deux mots, accent). Réponse : porque (un mot)."},
  {cat:"ecrit", q:"À une cliente : « ¿ ___ llegó ___ ? »", opts:["Cuando / tú", "Cuándo / usted", "Cuándo / vosotros"], correct:1, why:"Question = cuándo avec accent ; cliente = usted."},
  {cat:"ecrit", q:"Quelle phrase est un futur proche ?", opts:["Voy a comer.","Comí.","Como siempre."], correct:0, why:"voy a + infinitif = futur proche. « Comí » = passé, « como » = présent."},
  {cat:"ecrit", q:"Pour dire « jamais » avant le verbe :", opts:["Nunca viajo.","No nunca viajo.","Nunca no viajo."], correct:0, why:"« Nunca » avant le verbe : pas de « no ». Après : « No viajo nunca »."},
  {cat:"ecrit", q:"« Ensuite » dans un récit :", opts:["luego","pero","porque"], correct:0, why:"« luego » = ensuite. « pero » oppose, « porque » donne la cause."},
  {cat:"ecrit", q:"Quelle forme est un participe irrégulier ?", opts:["hablado","hecho","comido"], correct:1, why:"hacer → hecho (irrégulier). hablado et comido suivent la règle."},
  {cat:"ecrit", q:"« Qui a appelé ? »", opts:["¿Quién llamó?","¿Qué llamó?","¿Cuándo llamó?"], correct:0, why:"« quién » = qui (personne). « qué » = quoi."},
  {cat:"ecrit", q:"Je veux rester, ___ je dois partir.", opts:["porque","pero","mientras"], correct:1, why:"« pero » oppose deux idées : je veux rester, mais je dois partir."},
  {cat:"ecrit", q:"« Je n'ai pas encore terminé » :", opts:["Ya terminé.","Todavía no terminé.","Nunca terminé."], correct:1, why:"« todavía no » = pas encore."},
  {cat:"ecrit", q:"À un ami : « Combien de jours restes-tu ? »", opts:["¿Cuántos días te quedas?","¿Cuántas días te quedas?","¿Cuánto días te quedas?"], correct:0, why:"« día » est masculin : ¿cuántos días? Le mot s'accorde avec le nom."},
  {cat:"ecrit", q:"« Hace tres días » regarde vers…", opts:["le futur","le passé"], correct:1, why:"« hace » + durée = il y a : passé. Futur = dentro de."},
  {cat:"oral", audio:"Ayer fui al mercado.", q:"Écoute : quand a lieu l'action ?", opts:["Demain","Maintenant","Hier"], correct:2, why:"« Ayer » = hier."},
  {cat:"oral", audio:"Mañana voy a viajar a Madrid.", q:"Écoute : que va faire la personne ?", opts:["Voyager à Madrid","Rentrer chez elle","Appeler Madrid"], correct:0, why:"« voy a viajar » = je vais voyager : futur proche."},
  {cat:"oral", audio:"¿Cuándo llegó usted?", q:"Écoute : on s'adresse à quelqu'un en…", opts:["tutoiement","vouvoiement"], correct:1, why:"« llegó usted » : vouvoiement (usted)."},
  {cat:"oral", audio:"Llego dentro de una hora.", q:"Écoute : quand arrive la personne ?", opts:["Il y a une heure","Dans une heure","Demain"], correct:1, why:"« dentro de una hora » = dans une heure."},
  {cat:"oral", audio:"Primero abro la puerta y luego salgo.", q:"Écoute : que fait la personne en premier ?", opts:["Elle sort","Elle ouvre la porte","Elle part en voyage"], correct:1, why:"« Primero abro la puerta » : d'abord elle ouvre la porte."},
  {cat:"comprehension", passage:"Ana: ¿Qué hiciste ayer, Luis? — Luis: Ayer trabajé por la mañana y por la tarde fui al cine. — Ana: ¿Y mañana? — Luis: Mañana voy a viajar a Sevilla. Llego dentro de tres horas.", q:"Que fait Luis hier après-midi ?", opts:["Il va au cinéma","Il travaille","Il voyage"], correct:0, why:"« Por la tarde fui al cine » : hier après-midi, il est allé au cinéma."},
  {cat:"comprehension", passage:"Ana: ¿Qué hiciste ayer, Luis? — Luis: Ayer trabajé por la mañana y por la tarde fui al cine. — Ana: ¿Y mañana? — Luis: Mañana voy a viajar a Sevilla. Llego dentro de tres horas.", q:"Où va Luis demain ?", opts:["À Séville","Au cinéma","À Madrid"], correct:0, why:"« Voy a viajar a Sevilla »."},
  {cat:"comprehension", passage:"Ana: ¿Qué hiciste ayer, Luis? — Luis: Ayer trabajé por la mañana y por la tarde fui al cine. — Ana: ¿Y mañana? — Luis: Mañana voy a viajar a Sevilla. Llego dentro de tres horas.", q:"Quand arrive-t-il ?", opts:["Il y a trois heures","Dans trois heures","Hier"], correct:1, why:"« dentro de tres horas » = dans trois heures."},
  {cat:"comprehension", passage:"Señora Vega: ¿Adónde va a ir usted este fin de semana? — Señor Díaz: Voy a ir a Toledo, pero todavía no compré el billete. — Señora Vega: ¿Por qué no lo compra hoy? — Señor Díaz: Porque hoy trabajo hasta tarde.", q:"Où va M. Díaz ?", opts:["À Tolède","À Séville","Chez lui"], correct:0, why:"« Voy a ir a Toledo »."},
  {cat:"comprehension", passage:"Señora Vega: ¿Adónde va a ir usted este fin de semana? — Señor Díaz: Voy a ir a Toledo, pero todavía no compré el billete. — Señora Vega: ¿Por qué no lo compra hoy? — Señor Díaz: Porque hoy trabajo hasta tarde.", q:"Pourquoi n'a-t-il pas acheté son billet ?", opts:["Il travaille tard aujourd'hui","Il est malade","Il n'a pas d'argent"], correct:0, why:"« Porque hoy trabajo hasta tarde » : réponse en « porque » à « ¿Por qué? »."}
 ],
 PRON_VERBS: [
  {en:"ayer · hoy · mañana", fr:"hier · aujourd'hui · demain (a-YER, OY, ma-ÑA-na)"},
  {en:"anoche", fr:"hier soir (a-NO-tche : ch = tch)"},
  {en:"dentro de una semana", fr:"dans une semaine (DEN-tro ; se-MA-na)"},
  {en:"¿Qué hiciste ayer?", fr:"Qu'as-tu fait hier ? (ke i-THIS-te a-YER)"},
  {en:"¿Adónde vas a ir?", fr:"Où vas-tu aller ? (a-DON-de ; accent sur DON)"},
  {en:"¿Cuándo llegaste?", fr:"Quand es-tu arrivé ? (KUAN-do ; ye-GAS-te)"},
  {en:"¿Cuánto cuesta?", fr:"Combien ça coûte ? (KUAN-to KUES-ta)"},
  {en:"¿Por qué no vienes?", fr:"Pourquoi ne viens-tu pas ? (por KÉ no BIÉ-nes)"},
  {en:"Porque estoy cansado.", fr:"Parce que je suis fatigué. (POR-ke : un mot, accent sur POR)"},
  {en:"Primero, luego, después", fr:"d'abord, ensuite, après (pri-ME-ro, LUÉ-go, des-PUÉS)"}
 ],
 READING: [
  "Hoy es lunes y hago planes para la semana.",
  "Ayer descansé en casa y anoche cené con mi madre.",
  "Mañana voy a trabajar y pasado mañana voy a viajar a Sevilla.",
  "Siempre viajo en tren porque es cómodo.",
  "Primero compro el billete y luego preparo la maleta.",
  "A veces llamo a mi hermana mientras espero el tren.",
  "—Perdone, señor, ¿adónde va usted? —preguntó la empleada.",
  "—Voy a Sevilla. ¿Cuándo sale el tren? —contestó el señor.",
  "—Sale dentro de una hora, pero todavía no abrió la puerta.",
  "Al final, el señor entró al tren y escribió un mensaje a su familia."
 ],
 GLOSS: [
  {en:"hacer planes", fr:"faire des projets"},
  {en:"descansar", fr:"se reposer (descansé = je me suis reposé)"},
  {en:"la maleta", fr:"la valise (féminin)"},
  {en:"cómodo", fr:"confortable, pratique"},
  {en:"esperar", fr:"attendre (aussi : espérer)"},
  {en:"la empleada", fr:"l'employée (féminin ; l'employé = el empleado)"},
  {en:"el billete", fr:"le billet (de transport)"},
  {en:"salir", fr:"sortir, partir (le train sale = le train part)"}
 ],
 GRAMMAR1: {
  heading:"La carte des temps A2 : à quoi sert chaque temps",
  lede:"Avant de les apprendre un par un, regarde la carte d'ensemble. En A2 tu rencontres huit façons de parler du temps. Aujourd'hui, on ne les conjugue pas : on apprend à choisir le bon selon le message. Le détail de chaque temps arrive dans les paliers A2.1 et suivants.",
  conj:[
   ["présent →","trabajo · como · vivo","Hoy trabajo. Siempre como a las dos. Vivo en París."],
   ["estoy + gérondif →","estoy trabajando · estás comiendo","Ahora estoy trabajando. ¿Qué estás haciendo? Usted está comiendo."],
   ["voy a + infinitif →","voy a trabajar · vas a comer","Mañana voy a viajar. ¿Adónde vas a ir? ¿Va a venir usted?"],
   ["passé daté →","trabajé · comiste · vivió","Ayer trabajé. ¿Qué comiste anoche? ¿Cuándo llegó usted?"],
   ["passé du lien avec maintenant / décor →","he trabajado · trabajaba","Hoy he trabajado mucho. Antes trabajaba en un banco."],
   ["futur et conditionnel →","trabajaré · trabajaría","Mañana trabajaré. ¿Podría ayudarme, por favor?"]
  ],
  ruleHtml:"🗺️ <b>1. La carte des temps A2.</b> Chaque temps répond à une question : <i>quand ? combien de temps ? avec quel lien au présent ?</i><br>• <b>Présent</b> : habitudes et vérités (« Trabajo en París »).<br>• <b>estoy + gérondif</b> : ce qui se passe en ce moment (« Estoy comiendo »).<br>• <b>voy a + infinitif</b> : projet proche (« Voy a viajar »).<br>• <b>Indefinido</b> : action finie et datée (« Ayer trabajé »).<br>• <b>Perfecto</b> : action passée liée à aujourd'hui (« Hoy he trabajado »).<br>• <b>Imperfecto</b> : décor, habitude passée, description (« Antes trabajaba en un banco »).<br>• <b>Futur</b> : prévision, promesse (« Mañana trabajaré »).<br>• <b>Conditionnel</b> : politesse, hypothèse (« ¿Podría ayudarme? »).<br>Rassure-toi : tu connais déjà le présent, estar + gérondif et ir a. Les cinq autres arrivent un par un, avec le pourquoi de chaque règle.<br><br>⏱️ <b>2. Le mot de temps choisit le temps.</b> Réflexe : repère d'abord le marqueur. <b>ayer, anoche, hace dos días, la semana pasada</b> → passé daté. <b>mañana, el próximo mes, dentro de una semana</b> → futur. <b>siempre, a veces, nunca</b> → présent d'habitude. <b>ya, todavía no</b> → lien avec maintenant. Piège : « hace » regarde en arrière (hace dos días = il y a deux jours) ; « dentro de » regarde en avant (dans deux jours).<br><br>🔗 <b>3. Les connecteurs de récit.</b> <b>Primero</b> (d'abord), <b>luego / después</b> (ensuite), <b>entonces</b> (alors), <b>por eso</b> (c'est pourquoi), <b>pero</b> (mais), <b>porque</b> (parce que), <b>cuando</b> (quand), <b>mientras</b> (pendant que), <b>al final</b> (à la fin). Exemple : <b>Primero abro la puerta, luego salgo y al final cierro con llave.</b> Pourquoi les apprendre maintenant ? Parce que tous les textes de A2 enchaînent des idées : sans connecteurs, tu parles par phrases isolées.<br><br>🔤 <b>4. Participes et passés irréguliers : simple repérage.</b> Certains verbes très fréquents ont une forme à part : <b>hacer → hecho / hice</b>, <b>decir → dicho</b>, <b>ver → visto</b>, <b>escribir → escrito</b>, <b>ir → fui</b>, <b>tener → tuve</b>, <b>estar → estuve</b>. Aujourd'hui, tu dois seulement les reconnaître à l'oreille et à l'écrit. Pas de conjugaison complète : elle viendra en A2.2.<br><br>👥 <b>5. Tú ET usted.</b> tú → <b>¿Qué hiciste? ¿Cuándo llegaste? ¿Adónde vas?</b> · usted → <b>¿Qué hizo usted? ¿Cuándo llegó usted? ¿Adónde va usted?</b> Avec un client, un supérieur ou un inconnu âgé, choisis usted. Pluriel : ustedes partout en Amérique latine ; vosotros en Espagne entre amis.",
  dialogueLede:"Deux amis parlent de leurs projets (tutoiement) :",
  dialogue:[
   {who:"them", en:"¡Hola, Marta! ¿Qué hiciste ayer?", fr:"Salut, Marta ! Qu'as-tu fait hier ?"},
   {who:"you", en:"Ayer trabajé y anoche cené con mi madre. ¿Y tú?", fr:"Hier, j'ai travaillé et hier soir, j'ai dîné avec ma mère. Et toi ?"},
   {who:"them", en:"Yo descansé. Mañana voy a viajar a Sevilla.", fr:"Moi, je me suis reposé. Demain, je vais voyager à Séville."},
   {who:"you", en:"¿Adónde vas a ir exactamente?", fr:"Où vas-tu aller exactement ?"},
   {who:"them", en:"Voy a Sevilla, pero todavía no compré el billete.", fr:"Je vais à Séville, mais je n'ai pas encore acheté le billet."},
   {who:"you", en:"¿Por qué no lo compras hoy?", fr:"Pourquoi ne l'achètes-tu pas aujourd'hui ?"},
   {who:"them", en:"Porque hoy trabajo hasta tarde. Pero lo compro luego.", fr:"Parce qu'aujourd'hui je travaille tard. Mais je l'achète ensuite."}
  ],
  whyLabel:"Pourquoi regarder la carte avant d'apprendre chaque temps ?",
  whyText:"En français, tu as déjà un passé composé, un imparfait, un futur, un conditionnel : tu connais l'idée de ces temps. Ce qui change en espagnol, ce sont les formes et quelques emplois. En voyant la carte d'abord, tu sais <b>pourquoi</b> chaque temps existe avant d'apprendre <b>comment</b> le former. C'est plus rapide : tu ne te demandes plus « quel temps ? » à chaque phrase, tu te demandes « quel message ? ». Dans les paliers suivants, chaque temps aura sa place sur cette carte."
 },
 GRAMMAR2: {
  heading:"Poser une question : accents, ordre des mots, tú ET usted",
  dialogueLede:"À la gare, une employée et un client (vouvoiement) :",
  dialogue:[
   {who:"them", en:"Buenos días, señor. ¿Adónde va usted?", fr:"Bonjour, monsieur. Où allez-vous ?"},
   {who:"you", en:"Voy a Sevilla. ¿Cuándo sale el tren?", fr:"Je vais à Séville. Quand part le train ?"},
   {who:"them", en:"Sale dentro de una hora. ¿Cuándo compró usted el billete?", fr:"Il part dans une heure. Quand avez-vous acheté le billet ?"},
   {who:"you", en:"Ayer. Pero todavía no sé el número del tren.", fr:"Hier. Mais je ne sais pas encore le numéro du train."},
   {who:"them", en:"Es el tren veinte. ¿Cuántas maletas lleva usted?", fr:"C'est le train vingt. Combien de valises avez-vous ?"},
   {who:"you", en:"Dos. Muchas gracias, señora.", fr:"Deux. Merci beaucoup, madame."}
  ],
  ruleHtml:"❓ <b>1. Les interrogatifs portent un accent écrit.</b> <b>qué, quién, cuándo, dónde / adónde, cómo, cuánto, por qué</b>. Dans une phrase affirmative, les mêmes mots perdent l'accent : <i>cuando llego, cocino</i> ; <i>donde vivo</i>. L'accent signale la question. Pour « pourquoi » : <b>¿Por qué?</b> (question) et <b>porque</b> (réponse).<br><br>🔀 <b>2. L'ordre des mots.</b> Interrogatif + verbe + sujet, avec ¿ au début et ? à la fin : <b>¿Qué hiciste ayer? ¿Adónde vas a ir? ¿Cuándo llegaste?</b> Le sujet, s'il est exprimé, vient après le verbe : <b>¿Cuándo llegó usted?</b> Pourquoi ? En espagnol, on n'a pas de « est-ce que » : l'ordre et l'intonation suffisent.<br><br>🕰️ <b>3. Le même schéma pour le passé et le futur.</b> Passé : <b>¿Qué hiciste ayer?</b> (tu as fait) · Futur proche : <b>¿Qué vas a hacer mañana?</b> · Présent : <b>¿Qué haces hoy?</b> Seul le verbe change ; l'interrogatif et l'ordre restent identiques. Aujourd'hui, repère les formes ; elles seront détaillées dans les paliers suivants.<br><br>👥 <b>4. Tú ET usted.</b> tú → <b>¿Qué hiciste? ¿Adónde vas a ir? ¿Cuándo llegaste?</b> · usted → <b>¿Qué hizo usted? ¿Adónde va a ir usted? ¿Cuándo llegó usted?</b> Le verbe de usted a la forme de él / ella. Au pluriel, ustedes (forme de ellos).<br><br>🔢 <b>5. « Combien » s'accorde.</b> <b>¿Cuánto? ¿Cuánta? ¿Cuántos? ¿Cuántas?</b> suivent le nom : ¿cuántas horas? ¿cuántos días? Sans nom, ¿cuánto? seul : ¿cuánto cuesta?<br><br>🚫 <b>6. Nier et répondre.</b> <b>Nunca viajo / No viajo nunca.</b> <b>Todavía no llegué.</b> <b>Ya llegué.</b> Avec « no » après le verbe, on met « no » avant : double négation.<br><br>🧭 <b>7. Habitudes.</b> <b>siempre</b> (toujours) · <b>a veces</b> (parfois) · <b>nunca</b> (jamais) se placent souvent avant le verbe : <b>Siempre cenamos tarde.</b>",
  whyLabel:"Pourquoi l'accent change-t-il le sens ?",
  whyText:"L'espagnol écrit l'accent pour distinguer des mots qui se prononcent presque pareil : <b>que / qué</b>, <b>cuando / cuándo</b>, <b>porque / por qué</b>. Dans une question, le mot porte une intensité vocale plus forte ; l'accent écrit la rend visible. Une astuce : si tu peux traduire par « quoi / quand / où », mets l'accent. Si le mot relie deux idées (« je reste parce que… »), pas d'accent. Ce petit réflexe te sauvera dans tous les paliers suivants."
 },
 REVIEW: [
  {q:"« Parce que » :", opts:["porque","por qué"], correct:0, fb:"« porque » = parce que : un mot, sans accent. (rappel A1.12)"},
  {q:"Au revoir à un client (formel) :", opts:["Que tengas un buen día.","Que tenga un buen día."], correct:1, fb:"Usted → « que tenga ». Tú → « que tengas ». (rappel A1.12)"},
  {q:"Pour demander poliment son aide à un inconnu :", opts:["¿Me ayudas?","¿Podría ayudarme?"], correct:1, fb:"« ¿Podría…? » est la formule la plus polie. (rappel A1.12)"},
  {q:"Tu marches sur le pied de quelqu'un :", opts:["¡De nada!","¡Perdón!"], correct:1, fb:"« ¡Perdón! » s'excuse immédiatement. (rappel A1.12)"},
  {q:"« Je vais à la gare » :", opts:["Yo voy a la estación.","Yo soy a la estación."], correct:0, fb:"ir : voy, vas, va… Pour aller quelque part : ir + a. (rappel A1.12)"}
 ],
 DRILLS: [
  {type:"fill", text:"¿ ___ vas a ir mañana? (où, direction)", answers:["Adónde","adónde"], why:"Direction : adónde, avec accent."},
  {type:"fill", text:"¿ ___ llegaste? (quand)", answers:["Cuándo","cuándo"], why:"Quand en question : cuándo, avec accent."},
  {type:"fill", text:"¿ ___ hiciste ayer? (quoi)", answers:["Qué","qué"], why:"qué avec accent : question."},
  {type:"fill", text:"¿ ___ llamó? (qui)", answers:["Quién","quién"], why:"quién = qui."},
  {type:"fill", text:"¿ ___ estás? (comment)", answers:["Cómo","cómo"], why:"cómo avec accent."},
  {type:"fill", text:"— ¿Por qué no vienes? — ___ estoy cansado.", answers:["Porque","porque"], why:"Réponse : porque, un mot sans accent."},
  {type:"fill", text:"___ dos días llegué a Madrid. (il y a)", answers:["Hace","hace"], why:"hace + durée = il y a."},
  {type:"fill", text:"Llego ___ de una hora. (dans)", answers:["dentro","Dentro"], why:"dentro de + durée = dans (futur)."},
  {type:"fill", text:"___ abro la puerta y luego salgo. (d'abord)", answers:["Primero","primero"], why:"primero = d'abord."},
  {type:"fill", text:"Canto ___ cocino. (pendant que)", answers:["mientras","Mientras"], why:"mientras = pendant que."},
  {type:"fill", text:"Tengo prisa, ___ me voy. (c'est pourquoi)", answers:["por eso","Por eso"], why:"por eso = c'est pourquoi."},
  {type:"fill", text:"Quiero ir, ___ no puedo. (mais)", answers:["pero","Pero"], why:"pero oppose deux idées."},
  {type:"fill", text:"Mañana ___ a viajar. (yo, aller)", answers:["voy","Voy"], why:"voy a + infinitif."},
  {type:"fill", text:"¿Adónde ___ usted? (ir, vouvoiement)", answers:["va","Va"], why:"usted → forme de él / ella : va."},
  {type:"fill", text:"Ya ___ el trabajo. (déjà fini, yo, terminar au passé)", answers:["terminé","Terminé"], why:"Repérage : terminé = j'ai terminé."},
  {type:"fill", text:"Todavía ___ llegó el tren. (pas encore)", answers:["no"], why:"todavía no = pas encore."},
  {type:"fill", text:"___ viajo en tren. (toujours)", answers:["Siempre","siempre"], why:"siempre = toujours."},
  {type:"fill", text:"___ salgo a correr. (parfois)", answers:["A veces","a veces"], why:"a veces = parfois."},
  {type:"fill", text:"___ bebo café. (jamais)", answers:["Nunca","nunca"], why:"nunca avant le verbe : pas de no."},
  {type:"fill", text:"¿ ___ días te quedas? (combien)", answers:["Cuántos","cuántos"], why:"días = masculin pluriel : cuántos."},
  {type:"choice", q:"Quel mot est du futur ?", opts:["ayer","mañana","anoche"], correct:1, why:"mañana = demain."},
  {type:"choice", q:"« Il y a trois jours » :", opts:["dentro de tres días","hace tres días"], correct:1, why:"hace = passé ; dentro de = futur."},
  {type:"choice", q:"Quel interrogatif correct ?", opts:["¿Cuando llegaste?","¿Cuándo llegaste?"], correct:1, why:"Question : accent sur cuándo."},
  {type:"choice", q:"À un client :", opts:["¿Adónde vas?","¿Adónde va usted?"], correct:1, why:"Client = usted."},
  {type:"choice", q:"Participe de hacer :", opts:["hacido","hecho"], correct:1, why:"hacer → hecho (irrégulier)."},
  {type:"choice", q:"« Ensuite » dans un récit :", opts:["luego","pero"], correct:0, why:"luego = ensuite."}
 ],
 ANNOTATED: {
  title:"Quatre phrases de la carte des temps",
  intro:"Quatre phrases pour t'entraîner à repérer le marqueur de temps et l'interrogatif. Touche chaque mot pour voir sa nature et sa traduction.",
  sentences:[
   {fr:"Qu'as-tu fait hier ?", tokens:[
    {w:"¿Qué", tag:"pronom interrogatif", info:"interrogatif", fr:"que", tip:"Accent écrit : question."},
    {w:"hiciste", tag:"verbe", info:"hacer · passé · tú", fr:"as fait", tip:"Forme de tú, simple repérage."},
    {w:"ayer?", tag:"adverbe", info:"marqueur de temps", fr:"hier", tip:"Il place l'action dans le passé."}
   ]},
   {fr:"Où vas-tu aller demain ?", tokens:[
    {w:"¿Adónde", tag:"adverbe", info:"interrogatif · direction", fr:"vers où", tip:"Direction : adónde."},
    {w:"vas", tag:"verbe", info:"ir · présent · tú", fr:"vas", tip:"voy a + infinitif = futur proche."},
    {w:"a", tag:"préposition", fr:"à"},
    {w:"ir", tag:"verbe", info:"infinitif", fr:"aller"},
    {w:"mañana?", tag:"adverbe", info:"marqueur de temps", fr:"demain"}
   ]},
   {fr:"Quand êtes-vous arrivé ?", tokens:[
    {w:"¿Cuándo", tag:"adverbe", info:"interrogatif", fr:"quand", tip:"Accent écrit."},
    {w:"llegó", tag:"verbe", info:"llegar · passé · usted", fr:"êtes arrivé", tip:"usted = forme de él / ella."},
    {w:"usted?", tag:"pronom sujet", info:"politesse", fr:"vous"}
   ]},
   {fr:"Je reste parce qu'il pleut.", tokens:[
    {w:"Me", tag:"pronom réfléchi", fr:"me"},
    {w:"quedo", tag:"verbe", info:"quedarse · présent · yo", fr:"reste"},
    {w:"porque", tag:"conjonction", fr:"parce que", tip:"Un mot, sans accent."},
    {w:"llueve", tag:"verbe", info:"llover · présent", fr:"il pleut"}
   ]}
  ]
 },
 CULTURE_NOTE: {icon:"🗣️", title:"Culture, expressions informelles et fiche récap de A2.0",
  html:"<b>🗣️ Culture : on parle de ses projets avec des petits mots</b> En Espagne comme en Amérique latine, personne ne dit « dans trois jours » de façon rigide : on dit « un día de estos » (un de ces jours), « a ver » (on verra), « luego te llamo » (je t'appelle tout à l'heure). Ces expressions sont informelles : avec un client, passe à une formule plus claire (« Le llamaré mañana »).<br><br><b>🧰 Dix expressions informelles</b><br>1. <b>¡Qué va!</b> = mais non ! (démenti)<br>2. <b>¡Ni hablar!</b> = pas question !<br>3. <b>¿Qué tal?</b> = ça va ?<br>4. <b>¡Venga!</b> = allez !<br>5. <b>Vale.</b> = d'accord, OK.<br>6. <b>Un rato</b> = un moment (« espera un rato »).<br>7. <b>Hace poco</b> = il y a peu.<br>8. <b>De repente</b> = tout à coup.<br>9. <b>A ver</b> = voyons.<br>10. <b>Ahora mismo</b> = tout de suite.<br><br><b>📋 Fiche récap A2.0</b><br>• Marqueurs passé : ayer, anoche, hace dos días, la semana pasada.<br>• Marqueurs futur : mañana, el próximo mes, dentro de una semana.<br>• Fréquence : siempre, a veces, nunca.<br>• Connecteurs : primero, luego, después, entonces, por eso, pero, porque, cuando, mientras, al final.<br>• Interrogatifs : qué, quién, cuándo, dónde / adónde, cómo, cuánto, por qué.<br>• Carte des temps : présent · estoy + gérondif · voy a · indefinido · perfecto · imperfecto · futur · conditionnel.<br>• Tú ET usted : ¿Cuándo llegaste? / ¿Cuándo llegó usted?"},
 NEXT_PREVIEW:"A2.1 (Pretérito indefinido régulier) : tu vas apprendre à raconter ce qui est fini et daté — « Ayer hablé con mi madre », « Comimos paella », « Viví dos años en Lyon » — avec les terminaisons -AR, -ER et -IR.",
 META:{vocabTitle:"Bases transversales A2 : temps, connecteurs, questions (A2.0)", lectureTitle:"Un voyage à Séville", bilanTitle:"Bravo, tu as la carte des temps A2 !", pronLabel:"Accents des interrogatifs (qué, cuándo, adónde) et sons ch, ll, ñ", todayLede:"placer une action dans le temps (ayer, hace dos días, dentro de una semana), relier des idées avec les connecteurs de récit, repérer la carte des temps A2 et poser des questions en tutoiement ET en vouvoiement"}
};
})();

