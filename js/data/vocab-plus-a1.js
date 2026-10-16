// The Roots — A1 : vocabulaire complémentaire (≈ 95 mots par leçon, 10 pages) pour atteindre un lexique riche à la fin de A1.
// Format compact : P(titre, icône, "mot=sens; mot=sens; …", astuce, ["phrase=traduction", …]). La question de contrôle est générée.
const P = (title, icon, w, tip, ex) => {
  const words = w.split(";").map((x) => x.trim()).filter(Boolean).map((x) => x.split("=").map((y) => y.trim()));
  const examples = ex.map((x) => x.split("=").map((y) => y.trim()));
  const fr = words.map((x) => x[1]);
  const others = fr.slice(1).filter((f) => f !== fr[0]);
  return { kind: "words", title, icon, words, tip, examples, q: [`« ${words[0][0]} » veut dire…`, [fr[0], others[0], others[Math.floor(others.length / 2)]], 0] };
};
export const VOCAB_PLUS_A1 = {};

/* ===== A1.1 — Mon identité ===== */
VOCAB_PLUS_A1[1] = [
  P("Les formulaires", "📝", "first name=prénom; surname=nom de famille; full name=nom complet; date of birth=date de naissance; address=adresse; postcode=code postal; email address=adresse e-mail; phone number=numéro de téléphone; signature=signature; form=formulaire",
    "Sur un formulaire britannique : “first name” (prénom) et “surname” ou “last name” (nom de famille).", ["Please write your full name.=Écrivez votre nom complet, s'il vous plaît.", "What is your postcode?=Quel est votre code postal ?"]),
  P("Les documents", "🪪", "passport=passeport; ID card=carte d'identité; driving licence=permis de conduire; visa=visa; ticket=billet; card=carte; certificate=certificat; photo=photo; document=document; number=numéro",
    "“Licence” (nom) s'écrit avec c en anglais britannique ; “license” (verbe) avec s.", ["Here is my passport.=Voici mon passeport.", "I need my ID card.=J'ai besoin de ma carte d'identité."]),
  P("Les pays", "🌍", "France=la France; Spain=l'Espagne; Italy=l'Italie; Germany=l'Allemagne; Portugal=le Portugal; Brazil=le Brésil; Morocco=le Maroc; Senegal=le Sénégal; Canada=le Canada; Japan=le Japon",
    "Les noms de pays prennent une majuscule en anglais, comme les nationalités et les langues.", ["I'm from Portugal.=Je viens du Portugal.", "She lives in Canada.=Elle habite au Canada."]),
  P("Les nationalités", "🏳️", "French=français(e); Spanish=espagnol(e); Italian=italien(ne); German=allemand(e); Portuguese=portugais(e); Brazilian=brésilien(ne); Moroccan=marocain(e); Senegalese=sénégalais(e); Canadian=canadien(ne); Japanese=japonais(e)",
    "Pas de féminin en anglais : “He is French. She is French.”", ["He is Brazilian.=Il est brésilien.", "We are Italian.=Nous sommes italiens."]),
  P("Les langues", "🗣️", "English=anglais; French=français; Spanish=espagnol; Arabic=arabe; Chinese=chinois; Russian=russe; Portuguese=portugais; German=allemand; language=langue; mother tongue=langue maternelle",
    "On dit “I speak English” (sans article). “Mother tongue” = langue maternelle.", ["I speak French and English.=Je parle français et anglais.", "Her mother tongue is Arabic.=Sa langue maternelle est l'arabe."]),
  P("Les nombres de 20 à 100", "🔢", "twenty=vingt; thirty=trente; forty=quarante; fifty=cinquante; sixty=soixante; seventy=soixante-dix; eighty=quatre-vingts; ninety=quatre-vingt-dix; hundred=cent; twenty-one=vingt et un",
    "Attention : thirteen (13) / thirty (30), fourteen (14) / forty (40) : on n'écrit pas “fourty”.", ["I am thirty-five years old.=J'ai trente-cinq ans.", "It costs a hundred pounds.=Cela coûte cent livres."]),
  P("Les mois et les dates", "📅", "January=janvier; February=février; March=mars; April=avril; May=mai; June=juin; July=juillet; August=août; September=septembre; October=octobre; November=novembre; December=décembre",
    "Les mois prennent une majuscule. Date : “the fifth of May” ou “May the fifth”.", ["My birthday is in June.=Mon anniversaire est en juin.", "I was born in March.=Je suis né(e) en mars."]),
  P("Décrire son visage", "🙂", "hair=cheveux; eyes=yeux; nose=nez; mouth=bouche; face=visage; blond=blond; dark=brun / foncé; curly=bouclé; straight=raide; beard=barbe",
    "“Hair” est singulier en anglais : “Her hair is long.” (pas “are”).", ["He has dark curly hair.=Il a des cheveux bruns et bouclés.", "She has blue eyes.=Elle a les yeux bleus."]),
  P("Les adjectifs de personnalité", "😊", "kind=gentil; funny=drôle; shy=timide; clever=intelligent; friendly=sympathique; polite=poli; serious=sérieux; happy=heureux; tired=fatigué; lazy=paresseux",
    "“Funny” = drôle. Pour « amusant » aussi : “fun”.", ["My teacher is very kind.=Mon professeur est très gentil.", "He is shy but friendly.=Il est timide mais sympathique."]),
  P("Les questions de base", "❓", "who=qui; what=quoi / que; where=où; when=quand; why=pourquoi; how=comment; which=quel; how old=quel âge; how many=combien (nombre); how much=combien (quantité)",
    "Les mots interrogatifs se placent en début de phrase : “Where are you from?”", ["How old is your sister?=Quel âge a ta sœur ?", "Why are you here?=Pourquoi es-tu ici ?"]),
];

/* ===== A1.2 — Ma famille ===== */
VOCAB_PLUS_A1[2] = [
  P("La famille proche (suite)", "👨‍👩‍👧", "parents=parents; grandparents=grands-parents; grandchildren=petits-enfants; husband=mari; wife=épouse; twins=jumeaux; baby=bébé; child=enfant; children=enfants; relatives=famille / proches",
    "“Children” est le pluriel irrégulier de “child”. “Parents” = père et mère (pas « les parents » au sens large : “relatives”).", ["My parents live in Lyon.=Mes parents habitent à Lyon.", "They have twin daughters.=Ils ont des filles jumelles."]),
  P("Les liens par alliance", "💍", "mother-in-law=belle-mère (de son conjoint); father-in-law=beau-père; son-in-law=gendre; daughter-in-law=belle-fille; stepfather=beau-père (remarié); stepmother=belle-mère (remariée); half-brother=demi-frère; half-sister=demi-sœur; godfather=parrain; godmother=marraine",
    "“-in-law” = lien par mariage : brother-in-law (beau-frère), sister-in-law (belle-sœur).", ["My mother-in-law is very nice.=Ma belle-mère est très gentille.", "He is my half-brother.=C'est mon demi-frère."]),
  P("Les âges de la vie", "👶", "baby=bébé; toddler=tout-petit; teenager=adolescent; adult=adulte; elderly=âgé; young=jeune; old=vieux; retired=retraité; born=né; to grow up=grandir",
    "“Old” se dit pour une personne âgée ET pour l'âge : “He is old.” / “He is ten years old.”", ["She is a teenager.=Elle est adolescente.", "My grandfather is retired.=Mon grand-père est retraité."]),
  P("L'état civil", "💒", "single=célibataire; married=marié; divorced=divorcé; widowed=veuf / veuve; engaged=fiancé; partner=conjoint / partenaire; boyfriend=petit ami; girlfriend=petite amie; wedding=mariage; couple=couple",
    "“Partner” est neutre : il s'applique à une femme comme à un homme.", ["They are married.=Ils sont mariés.", "She is single.=Elle est célibataire."]),
  P("Les pièces de la maison", "🏠", "kitchen=cuisine; bedroom=chambre; bathroom=salle de bain; living room=salon; dining room=salle à manger; hall=entrée; toilet=toilettes; garage=garage; attic=grenier; cellar=cave",
    "“Living room” est le salon. “Bathroom” a une baignoire ou une douche ; “toilet” = WC.", ["The kitchen is big.=La cuisine est grande.", "My bedroom is upstairs.=Ma chambre est à l'étage."]),
  P("Les meubles", "🛋️", "sofa=canapé; armchair=fauteuil; table=table; chair=chaise; bed=lit; wardrobe=armoire; shelf=étagère; desk=bureau; lamp=lampe; carpet=tapis",
    "“Desk” = bureau (meuble). “Office” = bureau (pièce de travail).", ["The sofa is very comfortable.=Le canapé est très confortable.", "There is a lamp on the desk.=Il y a une lampe sur le bureau."]),
  P("Les objets de la maison", "🔑", "door=porte; window=fenêtre; wall=mur; floor=sol; ceiling=plafond; stairs=escaliers; key=clé; mirror=miroir; clock=horloge; picture=tableau / image",
    "“Stairs” est toujours au pluriel : “The stairs are steep.”", ["Close the door, please.=Ferme la porte, s'il te plaît.", "The clock is on the wall.=L'horloge est sur le mur."]),
  P("Les animaux de compagnie", "🐶", "dog=chien; cat=chat; rabbit=lapin; hamster=hamster; bird=oiseau; fish=poisson; horse=cheval; mouse=souris; turtle=tortue; pet=animal de compagnie",
    "“Fish” ne change pas au pluriel : one fish, two fish.", ["We have a dog and two cats.=Nous avons un chien et deux chats.", "My rabbit is white.=Mon lapin est blanc."]),
  P("Les tâches familiales", "🧹", "cook=cuisiner; clean=nettoyer; wash=laver; tidy=ranger; help=aider; share=partager; look after=s'occuper de; take care of=prendre soin de; play with=jouer avec; wake up=se réveiller",
    "“Look after” = s'occuper de. “Look for” = chercher. Un petit mot, un autre sens.", ["I look after my little brother.=Je m'occupe de mon petit frère.", "She helps her mother in the kitchen.=Elle aide sa mère à la cuisine."]),
  P("Décrire sa famille", "👪", "big=grand / nombreux; small=petit; close=proche; noisy=bruyant; quiet=calme; generous=généreux; strict=sévère; proud=fier; similar=semblable; different=différent",
    "Pour une famille : “a big family” = une famille nombreuse.", ["We are a big family.=Nous sommes une famille nombreuse.", "My brother is very different from me.=Mon frère est très différent de moi."]),
];

/* ===== A1.3 — Mes amis ===== */
VOCAB_PLUS_A1[3] = [
  P("Les amis et les connaissances", "🧑‍🤝‍🧑", "friend=ami; best friend=meilleur ami; classmate=camarade de classe; neighbour=voisin; colleague=collègue; roommate=colocataire; pen pal=correspondant; stranger=inconnu; boy=garçon; girl=fille",
    "“Neighbour” s'écrit avec -our en anglais britannique, -or en américain (neighbor).", ["She is my best friend.=C'est ma meilleure amie.", "My neighbour is very friendly.=Mon voisin est très sympathique."]),
  P("Les loisirs entre amis", "🎮", "play video games=jouer aux jeux vidéo; watch a film=regarder un film; go to the cinema=aller au cinéma; go shopping=faire du shopping; go for a walk=faire une promenade; have a picnic=pique-niquer; ride a bike=faire du vélo; play cards=jouer aux cartes; have a barbecue=faire un barbecue; chat=discuter",
    "On dit “go + -ing” pour beaucoup de loisirs : go shopping, go swimming, go running.", ["We go to the cinema on Fridays.=Nous allons au cinéma le vendredi.", "They chat for hours.=Ils discutent pendant des heures."]),
  P("Les sentiments", "💛", "love=aimer / amour; like=aimer bien; miss=manquer à; trust=faire confiance; worry=s'inquiéter; laugh=rire; smile=sourire; cry=pleurer; hug=serrer dans ses bras; argue=se disputer",
    "“I miss you” = tu me manques (litt. « je te manque »).", ["I miss my friends.=Mes amis me manquent.", "We laugh a lot together.=Nous rions beaucoup ensemble."]),
  P("Les messages et les appels", "📱", "phone=téléphone; mobile=portable; call=appeler; text=envoyer un SMS; message=message; email=e-mail; send=envoyer; reply=répondre; ring=sonner; battery=batterie",
    "“Mobile” en anglais britannique, “cell phone” en américain.", ["I'll text you later.=Je t'enverrai un SMS plus tard.", "My phone is ringing.=Mon téléphone sonne."]),
  P("Inviter et accepter", "🎉", "invite=inviter; invitation=invitation; party=fête; birthday=anniversaire; gift=cadeau; guest=invité; welcome=bienvenue; come in=entrer; sit down=s'asseoir; enjoy=profiter",
    "“Party” = fête. “Come in!” = entre ! / entrez !", ["You are invited to my party.=Tu es invité à ma fête.", "Welcome! Come in and sit down.=Bienvenue ! Entre et assieds-toi."]),
  P("Refuser poliment", "🙏", "sorry=désolé; busy=occupé; maybe=peut-être; another time=une autre fois; I can't=je ne peux pas; I'm afraid=je crains; thanks anyway=merci quand même; next week=la semaine prochaine; unfortunately=malheureusement; I'd love to=j'aimerais bien",
    "Pour refuser avec gentillesse : “I'd love to, but I can't.”", ["Sorry, I'm busy tonight.=Désolé, je suis occupé ce soir.", "Maybe next week?=Peut-être la semaine prochaine ?"]),
  P("Se mettre d'accord", "🤝", "agree=être d'accord; disagree=ne pas être d'accord; of course=bien sûr; sure=bien sûr; OK=d'accord; fine=très bien; perfect=parfait; no problem=pas de problème; why not=pourquoi pas; let's go=allons-y",
    "“I agree” se dit sans « être » : on ne dit pas “I am agree”.", ["I agree with you.=Je suis d'accord avec toi.", "Why not? Let's go!=Pourquoi pas ? Allons-y !"]),
  P("Les lieux de rencontre", "📍", "café=café; park=parc; cinema=cinéma; library=bibliothèque; school=école; playground=aire de jeux; beach=plage; gym=salle de sport; restaurant=restaurant; shopping centre=centre commercial",
    "Pour proposer un lieu : “Let's meet at the café.”", ["Let's meet at the park.=Retrouvons-nous au parc.", "We study in the library.=Nous étudions à la bibliothèque."]),
  P("Les moments de la semaine", "🗓️", "Monday=lundi; Tuesday=mardi; Wednesday=mercredi; Thursday=jeudi; Friday=vendredi; Saturday=samedi; Sunday=dimanche; weekend=week-end; weekday=jour de semaine; tomorrow=demain",
    "Les jours prennent une majuscule. “On Monday” = lundi ; “on Mondays” = tous les lundis.", ["See you on Friday!=À vendredi !", "I'm free at the weekend.=Je suis libre ce week-end."]),
  P("Les qualités d'un ami", "🌟", "honest=honnête; loyal=fidèle; helpful=serviable; patient=patient; cheerful=joyeux; creative=créatif; brave=courageux; calm=calme; fair=juste; reliable=fiable",
    "Pour féliciter : “You are a great friend!” = tu es un super ami !", ["He is honest and loyal.=Il est honnête et fidèle.", "She is always helpful.=Elle est toujours serviable."]),
];

/* ===== A1.4 — Transports et directions ===== */
VOCAB_PLUS_A1[4] = [
  P("Les véhicules", "🚗", "car=voiture; lorry=camion; van=camionnette; motorbike=moto; scooter=trottinette / scooter; tram=tramway; underground=métro (Londres); ferry=ferry; helicopter=hélicoptère; ambulance=ambulance",
    "“Underground” ou “tube” à Londres ; “subway” en américain.", ["I go to work by tram.=Je vais au travail en tram.", "The ferry leaves at nine.=Le ferry part à neuf heures."]),
  P("Dans la rue", "🛣️", "road=route; pavement=trottoir; zebra crossing=passage piéton; roundabout=rond-point; crossroads=carrefour; junction=intersection; car park=parking; petrol station=station-service; motorway=autoroute; street lamp=lampadaire",
    "“Pavement” (britannique) = trottoir ; “sidewalk” en américain.", ["Turn left at the roundabout.=Tournez à gauche au rond-point.", "The car park is behind the station.=Le parking est derrière la gare."]),
  P("Les verbes de déplacement", "🚶", "walk=marcher; run=courir; drive=conduire; ride=monter (vélo, cheval); fly=voler / prendre l'avion; arrive=arriver; leave=partir; return=revenir; follow=suivre; wait=attendre",
    "“Drive” une voiture, “ride” un vélo ou un cheval.", ["We wait for the bus.=Nous attendons le bus.", "She arrives at six.=Elle arrive à six heures."]),
  P("Les panneaux", "🚦", "stop=stop; danger=danger; exit=sortie; entrance=entrée; no entry=sens interdit; no parking=stationnement interdit; speed limit=limitation de vitesse; one way=sens unique; slow=lent / ralentir; open=ouvert",
    "“Exit” = sortie ; “way out” aussi. “Entrance” = entrée.", ["The exit is on the right.=La sortie est à droite.", "No parking here.=Interdiction de stationner ici."]),
  P("Les gares et les arrêts", "🚉", "ticket office=guichet; ticket machine=distributeur de billets; waiting room=salle d'attente; passenger=passager; driver=conducteur; fare=tarif; season ticket=abonnement; delay=retard; route=ligne / itinéraire; stop=arrêt",
    "“Fare” = prix du trajet ; “price” = prix d'un article.", ["The fare is two pounds.=Le trajet coûte deux livres.", "There is a delay of ten minutes.=Il y a dix minutes de retard."]),
  P("Les nombres ordinaux", "🥇", "first=premier; second=deuxième; third=troisième; fourth=quatrième; fifth=cinquième; sixth=sixième; last=dernier; next=prochain; previous=précédent; half=moitié",
    "Ordinaux : on ajoute -th (fourth, fifth) sauf first, second, third.", ["Take the second street on the left.=Prenez la deuxième rue à gauche.", "The next bus is at ten.=Le prochain bus est à dix heures."]),
  P("Les points de repère", "🏛️", "church=église; castle=château; museum=musée; statue=statue; fountain=fontaine; tower=tour; square=place; market=marché; harbour=port; town hall=mairie",
    "“Square” = place (de ville) ET carré.", ["The museum is in the main square.=Le musée est sur la place principale.", "There is a fountain near the church.=Il y a une fontaine près de l'église."]),
  P("Les prépositions de lieu", "📌", "above=au-dessus; below=en dessous; under=sous; over=par-dessus; inside=à l'intérieur; outside=à l'extérieur; along=le long de; across=de l'autre côté; through=à travers; towards=vers",
    "“Across” = de l'autre côté de ; “through” = à travers.", ["The bank is across the street.=La banque est de l'autre côté de la rue.", "Walk along the river.=Marchez le long de la rivière."]),
  P("Les distances", "📏", "metre=mètre; kilometre=kilomètre; mile=mile; minute=minute; hour=heure; close=proche; distance=distance; direct=direct; nearby=à proximité; faraway=lointain",
    "1 mile ≈ 1,6 km. Les Britanniques mesurent en miles.", ["It's two kilometres from here.=C'est à deux kilomètres d'ici.", "The station is nearby.=La gare est à proximité."]),
  P("Les problèmes de transport", "⚠️", "traffic jam=embouteillage; accident=accident; strike=grève; cancelled=annulé; broken down=en panne; full=complet; crowded=bondé; empty=vide; rush hour=heure de pointe; detour=déviation",
    "“Traffic” ne prend pas de -s : “The traffic is bad.”", ["The train is cancelled.=Le train est annulé.", "There is a lot of traffic at rush hour.=Il y a beaucoup de circulation aux heures de pointe."]),
];

/* ===== A1.5 — Mes goûts ===== */
VOCAB_PLUS_A1[5] = [
  P("Les sports (suite)", "⚽", "tennis=tennis; basketball=basket; rugby=rugby; cycling=cyclisme; skiing=ski; golf=golf; boxing=boxe; volleyball=volley; athletics=athlétisme; yoga=yoga",
    "On dit “play” pour les sports de balle, “do” pour yoga/judo, “go” pour -ing.", ["I play tennis on Sundays.=Je joue au tennis le dimanche.", "She does yoga every morning.=Elle fait du yoga tous les matins."]),
  P("Les instruments", "🎹", "piano=piano; violin=violon; drums=batterie; flute=flûte; trumpet=trompette; saxophone=saxophone; band=groupe; song=chanson; singer=chanteur; lyrics=paroles",
    "On dit “play the piano” (avec the) pour un instrument.", ["He plays the drums in a band.=Il joue de la batterie dans un groupe.", "I love this song.=J'adore cette chanson."]),
  P("Les films et la télé", "🎬", "film=film; series=série; comedy=comédie; horror=film d'horreur; cartoon=dessin animé; documentary=documentaire; actor=acteur; actress=actrice; channel=chaîne; episode=épisode",
    "“Series” est identique au singulier et au pluriel.", ["I like comedies.=J'aime les comédies.", "We watch a series every night.=Nous regardons une série chaque soir."]),
  P("Les lectures", "📚", "book=livre; novel=roman; comic=bande dessinée; magazine=magazine; newspaper=journal; poem=poème; story=histoire; author=auteur; page=page; chapter=chapitre",
    "“Library” = bibliothèque ; “bookshop” = librairie (faux ami).", ["I read a novel every month.=Je lis un roman par mois.", "This chapter is very short.=Ce chapitre est très court."]),
  P("Les activités créatives", "🎨", "paint=peindre; draw=dessiner; photograph=photographier; knit=tricoter; sew=coudre; write=écrire; build=construire; make=fabriquer; collect=collectionner; bake=faire de la pâtisserie",
    "“Make” = fabriquer ; “do” = faire une activité : make a cake, do homework.", ["I like painting.=J'aime peindre.", "He collects old coins.=Il collectionne de vieilles pièces."]),
  P("La nature", "🌳", "tree=arbre; flower=fleur; forest=forêt; mountain=montagne; river=rivière; lake=lac; sea=mer; garden=jardin; hill=colline; field=champ",
    "“River” se jette dans la mer ; “stream” = ruisseau.", ["We walk in the forest.=Nous marchons dans la forêt.", "There is a lake near my house.=Il y a un lac près de ma maison."]),
  P("Les jeux", "🎲", "game=jeu; chess=échecs; cards=cartes; puzzle=puzzle; toy=jouet; board game=jeu de société; team=équipe; win=gagner; lose=perdre; match=match",
    "“Win” et “lose” ont chacun un passé irrégulier : won, lost.", ["Our team wins the match.=Notre équipe gagne le match.", "Let's play chess.=Jouons aux échecs."]),
  P("Les adjectifs d'opinion", "💬", "amazing=incroyable; awful=affreux; wonderful=merveilleux; terrible=terrible; boring=ennuyeux; exciting=passionnant; relaxing=relaxant; popular=populaire; strange=étrange; useful=utile",
    "“Boring” = ennuyeux (la chose) ; “bored” = qui s'ennuie (la personne).", ["The film is amazing.=Le film est incroyable.", "I'm bored.=Je m'ennuie."]),
  P("Exprimer ses préférences", "👍", "enjoy=apprécier; adore=adorer; can't stand=ne pas supporter; be keen on=être passionné de; be good at=être bon en; be bad at=être mauvais en; be interested in=s'intéresser à; look forward to=avoir hâte de; dislike=ne pas aimer; fancy=avoir envie de",
    "Après enjoy / can't stand : verbe en -ing : “I enjoy swimming.”", ["I can't stand horror films.=Je ne supporte pas les films d'horreur.", "She is good at drawing.=Elle est douée en dessin."]),
  P("La fréquence", "🔁", "always=toujours; usually=d'habitude; often=souvent; sometimes=parfois; rarely=rarement; never=jamais; every day=tous les jours; once a week=une fois par semaine; twice=deux fois; every weekend=chaque week-end",
    "L'adverbe se place avant le verbe : “I often read.” mais après “be” : “I am often tired.”", ["I always listen to music.=J'écoute toujours de la musique.", "We go swimming once a week.=Nous allons nager une fois par semaine."]),
];

/* ===== A1.6 — Manger et boire ===== */
VOCAB_PLUS_A1[6] = [
  P("Les fruits", "🍎", "apple=pomme; banana=banane; orange=orange; strawberry=fraise; grape=raisin; lemon=citron; pear=poire; peach=pêche; cherry=cerise; pineapple=ananas",
    "“Grape” = un grain de raisin ; “grapes” = du raisin.", ["I eat an apple every day.=Je mange une pomme tous les jours.", "She likes strawberries.=Elle aime les fraises."]),
  P("Les légumes", "🥕", "carrot=carotte; potato=pomme de terre; tomato=tomate; onion=oignon; garlic=ail; cucumber=concombre; salad=salade; mushroom=champignon; pepper=poivron / poivre; cabbage=chou",
    "“Pepper” = poivre ET poivron. Le contexte aide.", ["I want a tomato salad.=Je veux une salade de tomates.", "The soup has onions and garlic.=La soupe contient des oignons et de l'ail."]),
  P("Viandes et poissons", "🍗", "chicken=poulet; beef=bœuf; pork=porc; lamb=agneau; sausage=saucisse; ham=jambon; salmon=saumon; tuna=thon; prawn=crevette; egg=œuf",
    "En anglais, la viande a un autre nom que l'animal : pig → pork, cow → beef.", ["We have chicken for dinner.=Nous mangeons du poulet ce soir.", "I don't eat pork.=Je ne mange pas de porc."]),
  P("Produits laitiers et épicerie", "🧀", "cheese=fromage; butter=beurre; yoghurt=yaourt; cream=crème; pasta=pâtes; flour=farine; sugar=sucre; salt=sel; oil=huile; soup=soupe",
    "“Pasta”, “cheese”, “butter” sont indénombrables : pas de -s.", ["Can I have some cheese?=Puis-je avoir du fromage ?", "There is no sugar.=Il n'y a pas de sucre."]),
  P("Desserts et snacks", "🍰", "cake=gâteau; biscuit=biscuit; chocolate=chocolat; ice cream=glace; sweets=bonbons; pie=tarte; pancake=crêpe; crisps=chips; sandwich=sandwich; chips=frites",
    "Britannique : “crisps” = chips, “chips” = frites. En américain : chips / fries.", ["I'd like an ice cream.=Je voudrais une glace.", "She eats chocolate cake.=Elle mange du gâteau au chocolat."]),
  P("Autres boissons", "🥤", "beer=bière; wine=vin; hot chocolate=chocolat chaud; cola=cola; smoothie=smoothie; mineral water=eau minérale; orange juice=jus d'orange; cup of tea=tasse de thé; iced tea=thé glacé; sparkling water=eau gazeuse",
    "On dit “a cup of tea” mais “a glass of water”.", ["A glass of water, please.=Un verre d'eau, s'il vous plaît.", "I'd like a hot chocolate.=Je voudrais un chocolat chaud."]),
  P("La cuisine : ustensiles", "🍳", "plate=assiette; bowl=bol; cup=tasse; glass=verre; knife=couteau; fork=fourchette; spoon=cuillère; pan=poêle / casserole; oven=four; fridge=frigo",
    "“Fridge” est la forme courte de “refrigerator”.", ["Put the plates on the table.=Mets les assiettes sur la table.", "The milk is in the fridge.=Le lait est dans le frigo."]),
  P("Les verbes de cuisine", "👩‍🍳", "cook=cuisiner; boil=faire bouillir; fry=faire frire; bake=faire cuire au four; cut=couper; mix=mélanger; add=ajouter; pour=verser; peel=éplucher; taste=goûter",
    "“Taste” = goûter / avoir du goût : “It tastes good.”", ["Cut the onions.=Coupe les oignons.", "Add some salt.=Ajoute un peu de sel."]),
  P("Les régimes", "🥗", "vegetarian=végétarien; vegan=végétalien; healthy=sain; diet=régime; allergic=allergique; gluten-free=sans gluten; organic=bio; fat=gras; sugar-free=sans sucre; homemade=fait maison",
    "“Diet” = régime alimentaire ; “regime” existe mais désigne un gouvernement.", ["I'm vegetarian.=Je suis végétarien.", "This cake is homemade.=Ce gâteau est fait maison."]),
  P("Au supermarché", "🛒", "basket=panier; trolley=chariot; bag=sac; shelf=rayon; aisle=allée; queue=file d'attente; offer=promotion; fresh=frais; frozen=surgelé; weight=poids",
    "“Queue” = file d'attente (britannique) ; “line” en américain.", ["I need a trolley.=J'ai besoin d'un chariot.", "Frozen food is on the left.=Les surgelés sont à gauche."]),
];

/* ===== A1.7 — Faire les achats ===== */
VOCAB_PLUS_A1[7] = [
  P("Les vêtements (suite)", "👕", "T-shirt=T-shirt; jeans=jean; skirt=jupe; coat=manteau; jumper=pull; socks=chaussettes; shorts=short; suit=costume; scarf=écharpe; hat=chapeau",
    "“Jeans”, “trousers”, “shorts” sont toujours pluriels : “a pair of jeans”.", ["I need a warm coat.=J'ai besoin d'un manteau chaud.", "He wears a suit to work.=Il porte un costume pour travailler."]),
  P("Les accessoires", "👜", "belt=ceinture; gloves=gants; sunglasses=lunettes de soleil; watch=montre; ring=bague; necklace=collier; umbrella=parapluie; wallet=portefeuille; purse=porte-monnaie; handbag=sac à main",
    "“Wallet” = portefeuille (billets, cartes) ; “purse” = porte-monnaie (britannique), sac à main (américain).", ["I lost my wallet.=J'ai perdu mon portefeuille.", "Take an umbrella.=Prends un parapluie."]),
  P("Les couleurs", "🎨", "red=rouge; blue=bleu; green=vert; yellow=jaune; black=noir; white=blanc; grey=gris; pink=rose; brown=marron; purple=violet",
    "La couleur se place avant le nom : “a red dress”.", ["I like the blue shirt.=J'aime la chemise bleue.", "She has a black bag.=Elle a un sac noir."]),
  P("Les matières et les motifs", "🧵", "cotton=coton; wool=laine; leather=cuir; silk=soie; plastic=plastique; plain=uni; striped=rayé; checked=à carreaux; soft=doux; comfortable=confortable",
    "“Made of” = fait en : “It is made of leather.”", ["This jumper is made of wool.=Ce pull est en laine.", "I prefer plain shirts.=Je préfère les chemises unies."]),
  P("Les magasins (suite)", "🏬", "butcher's=boucherie; chemist's=pharmacie; florist's=fleuriste; bookshop=librairie; newsagent's=marchand de journaux; department store=grand magasin; clothes shop=magasin de vêtements; shoe shop=magasin de chaussures; greengrocer's=primeur; online shop=boutique en ligne",
    "Au Royaume-Uni on dit “at the butcher's” (avec 's).", ["I'm going to the chemist's.=Je vais à la pharmacie.", "She buys flowers at the florist's.=Elle achète des fleurs chez le fleuriste."]),
  P("Acheter et vendre", "💳", "buy=acheter; sell=vendre; spend=dépenser; save=économiser; cost=coûter; pay for=payer; order=commander; deliver=livrer; return=rendre; refund=remboursement",
    "“Cost” ne change pas au passé : cost – cost – cost.", ["How much does it cost?=Combien ça coûte ?", "I want a refund.=Je voudrais un remboursement."]),
  P("Les remises", "🏷️", "discount=réduction; sale=soldes; bargain=bonne affaire; special offer=offre spéciale; half price=moitié prix; free=gratuit; expensive=cher; cheap=bon marché; worth it=ça vaut le coup; voucher=bon d'achat",
    "“Free” = gratuit ET libre. “On sale” = en solde.", ["It's half price today.=C'est à moitié prix aujourd'hui.", "This is a real bargain!=C'est une vraie bonne affaire !"]),
  P("Les cadeaux", "🎁", "present=cadeau; gift shop=boutique de souvenirs; souvenir=souvenir; card=carte; wrap=emballer; perfume=parfum; jewellery=bijoux; toy=jouet; chocolates=chocolats; flowers=fleurs",
    "“Present” = cadeau ET présent. “Gift” aussi = cadeau.", ["I bought a present for my mum.=J'ai acheté un cadeau pour ma mère.", "Can you wrap it, please?=Pouvez-vous l'emballer, s'il vous plaît ?"]),
  P("Chez le vendeur", "🙋", "customer=client; shop assistant=vendeur; manager=responsable; bag=sac; basket=panier; label=étiquette; stock=stock; available=disponible; sold out=épuisé; opening hours=horaires d'ouverture",
    "“Sold out” = épuisé. “Out of stock” = en rupture de stock.", ["Is this available in blue?=Est-ce disponible en bleu ?", "Sorry, it's sold out.=Désolé, c'est épuisé."]),
  P("Les formules de politesse en magasin", "😊", "Can I help you?=Puis-je vous aider ?; Just looking.=Je regarde seulement.; Anything else?=Autre chose ?; That's all.=C'est tout.; Here you are.=Voilà.; How would you like to pay?=Comment souhaitez-vous payer ?; Do you take cards?=Acceptez-vous les cartes ?; Keep the change.=Gardez la monnaie.; Have a nice day.=Bonne journée.; Thanks, bye.=Merci, au revoir.",
    "“Just looking, thanks.” est la réponse classique de celui qui regarde.", ["Just looking, thanks.=Je regarde seulement, merci.", "That's all, thank you.=C'est tout, merci."]),
];

/* ===== A1.8 — Se repérer en ville ===== */
VOCAB_PLUS_A1[8] = [
  P("Les bâtiments publics", "🏢", "police station=commissariat; fire station=caserne de pompiers; town hall=mairie; court=tribunal; embassy=ambassade; university=université; school=école; theatre=théâtre; stadium=stade; swimming pool=piscine",
    "“Theatre” (britannique) / “theater” (américain).", ["The police station is near the bank.=Le commissariat est près de la banque.", "The stadium is very big.=Le stade est très grand."]),
  P("Les commerces et services", "🏪", "hairdresser's=coiffeur; bakery=boulangerie; dentist=dentiste; supermarket=supermarché; launderette=laverie; travel agency=agence de voyages; estate agent=agent immobilier; garage=garage; petrol station=station-service; cash machine=distributeur",
    "“Cash machine” ou “ATM”.", ["I need a cash machine.=J'ai besoin d'un distributeur.", "The hairdresser's is closed.=Le coiffeur est fermé."]),
  P("Les lieux de loisirs", "🎡", "zoo=zoo; theme park=parc d'attractions; art gallery=galerie d'art; nightclub=boîte de nuit; museum=musée; cinema=cinéma; sports centre=centre sportif; skate park=skatepark; bowling alley=bowling; ice rink=patinoire",
    "“Gallery” = galerie d'art ; pas un centre commercial.", ["Let's go to the zoo.=Allons au zoo.", "There is an ice rink in winter.=Il y a une patinoire en hiver."]),
  P("Les logements", "🏘️", "flat=appartement; house=maison; block of flats=immeuble; floor=étage; ground floor=rez-de-chaussée; lift=ascenseur; garden=jardin; balcony=balcon; neighbourhood=quartier; suburb=banlieue",
    "“Flat” (britannique) = appartement ; “apartment” (américain).", ["I live on the second floor.=J'habite au deuxième étage.", "There is a lift in the building.=Il y a un ascenseur dans l'immeuble."]),
  P("Les verbes d'orientation", "🧭", "turn=tourner; cross=traverser; continue=continuer; pass=passer devant; reach=atteindre; find=trouver; look for=chercher; ask=demander; show=montrer; point=montrer du doigt",
    "“Go past” = passer devant : “Go past the bank.”", ["Cross the bridge and turn right.=Traversez le pont et tournez à droite.", "Can you show me on the map?=Pouvez-vous me montrer sur la carte ?"]),
  P("Les points cardinaux", "🧭", "north=nord; south=sud; east=est; west=ouest; northeast=nord-est; centre=centre; top=haut; bottom=bas; side=côté; corner=coin",
    "“North, south, east, west” sont aussi des adjectifs : “the north of France”.", ["The beach is in the south.=La plage est dans le sud.", "The shop is on the corner.=Le magasin est au coin."]),
  P("Les expressions de lieu", "📍", "here=ici; there=là; everywhere=partout; somewhere=quelque part; nowhere=nulle part; upstairs=à l'étage; downstairs=en bas; abroad=à l'étranger; at home=à la maison; at the end=au bout",
    "“Upstairs / downstairs” s'emploient sans préposition : “She is upstairs.”", ["My room is upstairs.=Ma chambre est à l'étage.", "I can't find my keys anywhere.=Je ne trouve mes clés nulle part."]),
  P("Les urgences", "🚑", "help=au secours; emergency=urgence; police=police; fire=feu / incendie; doctor=médecin; hospital=hôpital; ambulance=ambulance; accident=accident; danger=danger; safe=en sécurité",
    "Numéro d'urgence au Royaume-Uni : 999 (112 en Europe).", ["Call an ambulance!=Appelez une ambulance !", "Is it safe here?=Est-ce sûr ici ?"]),
  P("Les infos pratiques", "ℹ️", "toilets=toilettes; cash=espèces; cashpoint=distributeur; Wi-Fi=Wi-Fi; charger=chargeur; map=plan; guide=guide; leaflet=dépliant; information=information; opening time=heure d'ouverture",
    "“Information” est indénombrable : “some information”, jamais “informations”.", ["Where are the toilets?=Où sont les toilettes ?", "Do you have a map of the city?=Avez-vous un plan de la ville ?"]),
  P("Le quartier idéal", "🌆", "quiet=calme; busy=animé; noisy=bruyant; safe=sûr; clean=propre; dirty=sale; modern=moderne; old=ancien; pretty=joli; ugly=laid",
    "“Pretty” = joli ; “pretty good” = plutôt bien (familier).", ["My street is very quiet.=Ma rue est très calme.", "It's a pretty old town.=C'est une ville assez ancienne."]),
];

/* ===== A1.9 — Voyager ===== */
VOCAB_PLUS_A1[9] = [
  P("Les types de voyage", "🧳", "holiday=vacances; trip=voyage (court); journey=trajet; tour=visite guidée; cruise=croisière; weekend break=court séjour; business trip=voyage d'affaires; honeymoon=voyage de noces; excursion=sortie; adventure=aventure",
    "“Holiday” (britannique) = vacances ; “vacation” (américain).", ["We are on holiday in Spain.=Nous sommes en vacances en Espagne.", "It was a long journey.=Ce fut un long trajet."]),
  P("Les hébergements", "🏨", "hostel=auberge de jeunesse; campsite=camping; tent=tente; guest house=chambre d'hôtes; apartment=appartement; villa=villa; cabin=chalet; resort=station / complexe; bed and breakfast=chambre d'hôtes avec petit déjeuner; cottage=petite maison de campagne",
    "“B&B” = bed and breakfast.", ["We stay at a campsite.=Nous séjournons dans un camping.", "I booked a cottage.=J'ai réservé un cottage."]),
  P("À la plage", "🏖️", "sand=sable; wave=vague; sun=soleil; towel=serviette; swimsuit=maillot de bain; sun cream=crème solaire; shell=coquillage; island=île; coast=côte; deckchair=transat",
    "“Sun cream” (britannique) = crème solaire ; “sunscreen” (américain).", ["Don't forget your sun cream.=N'oublie pas ta crème solaire.", "The waves are big today.=Les vagues sont grandes aujourd'hui."]),
  P("À la montagne", "⛰️", "snow=neige; ski lift=remontée mécanique; path=sentier; view=vue; map=carte; cable car=téléphérique; rucksack=sac à dos; boots=chaussures de marche; cliff=falaise; valley=vallée",
    "“Rucksack” = sac à dos (britannique) ; “backpack” (américain).", ["The view is beautiful.=La vue est magnifique.", "Take warm clothes and boots.=Prends des vêtements chauds et des chaussures de marche."]),
  P("En ville : tourisme", "📸", "monument=monument; guided tour=visite guidée; ticket=billet; queue=file; crowd=foule; photo=photo; camera=appareil photo; souvenir shop=boutique de souvenirs; sights=curiosités; postcard=carte postale",
    "“Sights” = les curiosités à voir : “see the sights”.", ["We take a lot of photos.=Nous prenons beaucoup de photos.", "I send a postcard to my aunt.=J'envoie une carte postale à ma tante."]),
  P("Les documents de voyage", "🛂", "passport control=contrôle des passeports; customs=douane; visa=visa; insurance=assurance; boarding card=carte d'embarquement; itinerary=itinéraire; booking=réservation; confirmation=confirmation; currency=monnaie; exchange rate=taux de change",
    "“Customs” (douane) est toujours pluriel.", ["Show your passport at customs.=Montrez votre passeport à la douane.", "I have a booking for two nights.=J'ai une réservation pour deux nuits."]),
  P("Dans l'avion", "✈️", "plane=avion; pilot=pilote; cabin crew=personnel de bord; seat belt=ceinture; window seat=place côté hublot; aisle seat=place côté couloir; take off=décoller; land=atterrir; turbulence=turbulence; announcement=annonce",
    "“Take off” = décoller (avion) ET enlever (vêtement).", ["The plane takes off at noon.=L'avion décolle à midi.", "Fasten your seat belt.=Attachez votre ceinture."]),
  P("À l'hôtel (suite)", "🛎️", "single room=chambre simple; double room=chambre double; twin beds=lits jumeaux; bill=note; lift=ascenseur; pool=piscine; towel=serviette; air conditioning=climatisation; complaint=réclamation; checkout time=heure de départ",
    "“Twin beds” = deux lits séparés ; “double bed” = un grand lit.", ["Is there air conditioning?=Y a-t-il la climatisation ?", "Checkout time is eleven.=L'heure de départ est onze heures."]),
  P("Les verbes du voyage", "🧭", "pack=faire ses valises; unpack=défaire ses valises; visit=visiter; explore=explorer; rent=louer; stay=séjourner; enjoy=profiter; relax=se détendre; miss=rater; forget=oublier",
    "“Visit” = visiter un lieu OU rendre visite à quelqu'un.", ["I pack my suitcase tonight.=Je fais ma valise ce soir.", "We rent a car in Italy.=Nous louons une voiture en Italie."]),
  P("Les souvenirs de voyage", "📷", "wonderful=merveilleux; unforgettable=inoubliable; tired=fatigué; delicious=délicieux; beautiful=magnifique; crowded=bondé; expensive=cher; friendly=accueillant; local=local; traditional=traditionnel",
    "“Local” = du pays / du coin : “local food”.", ["The food was delicious.=La nourriture était délicieuse.", "People were very friendly.=Les gens étaient très accueillants."]),
];

/* ===== A1.10 — Travail et études ===== */
VOCAB_PLUS_A1[10] = [
  P("Les métiers (suite)", "👷", "lawyer=avocat; farmer=agriculteur; cook=cuisinier; waiter=serveur; electrician=électricien; plumber=plombier; mechanic=mécanicien; pilot=pilote; police officer=policier; firefighter=pompier",
    "Beaucoup de métiers n'ont pas de féminin : “doctor”, “teacher”, “lawyer”.", ["My father is a farmer.=Mon père est agriculteur.", "She wants to be a pilot.=Elle veut devenir pilote."]),
  P("Les métiers : suite", "👩‍💼", "secretary=secrétaire; accountant=comptable; architect=architecte; journalist=journaliste; artist=artiste; scientist=scientifique; dentist=dentiste; vet=vétérinaire; cleaner=agent d'entretien; shop assistant=vendeur",
    "On dit “a vet” pour vétérinaire (pas de rapport avec « vétéran »).", ["She is an accountant.=Elle est comptable.", "He is a journalist.=Il est journaliste."]),
  P("Le bureau", "🖥️", "computer=ordinateur; printer=imprimante; screen=écran; keyboard=clavier; mouse=souris; file=dossier; email=e-mail; phone=téléphone; paper=papier; pen=stylo",
    "“Mouse” = souris d'ordinateur ET animal.", ["I send an email to my boss.=J'envoie un e-mail à mon patron.", "The printer is broken.=L'imprimante est en panne."]),
  P("Les tâches professionnelles", "📋", "answer=répondre; write=écrire; send=envoyer; print=imprimer; organise=organiser; plan=planifier; meet=rencontrer; speak=parler; work=travailler; train=se former",
    "“Work” = travailler et travail (indénombrable) : “a lot of work”.", ["I answer emails every morning.=Je réponds aux e-mails chaque matin.", "We meet clients on Monday.=Nous rencontrons des clients le lundi."]),
  P("Les horaires et les contrats", "⏰", "full-time=temps plein; part-time=temps partiel; salary=salaire; holiday=congé; contract=contrat; interview=entretien; CV=CV; job=emploi; unemployed=au chômage; overtime=heures supplémentaires",
    "“CV” en britannique ; “résumé” en américain.", ["I work part-time.=Je travaille à temps partiel.", "I have a job interview tomorrow.=J'ai un entretien d'embauche demain."]),
  P("L'école : objets", "🎒", "pencil=crayon; rubber=gomme; ruler=règle; notebook=cahier; textbook=manuel; bag=cartable; board=tableau; desk=pupitre; calculator=calculatrice; dictionary=dictionnaire",
    "“Rubber” (britannique) = gomme ; en américain “eraser”.", ["I need a pencil and a rubber.=J'ai besoin d'un crayon et d'une gomme.", "Open your textbook.=Ouvrez votre manuel."]),
  P("Les consignes de classe", "🧑‍🏫", "listen=écouter; repeat=répéter; read=lire; write=écrire; open=ouvrir; close=fermer; look at=regarder; sit down=s'asseoir; stand up=se lever; raise your hand=lever la main",
    "Les consignes sont à l'impératif : verbe seul, sans “you”.", ["Listen and repeat.=Écoutez et répétez.", "Raise your hand.=Levez la main."]),
  P("Les matières (suite)", "📖", "geography=géographie; biology=biologie; chemistry=chimie; physics=physique; music=musique; computing=informatique; French=français; literature=littérature; economics=économie; drama=théâtre",
    "Les matières scolaires n'ont pas d'article : “I like history.”", ["I'm good at geography.=Je suis bon en géographie.", "We have music on Tuesdays.=Nous avons musique le mardi."]),
  P("Les examens", "📝", "test=contrôle; mark=note; result=résultat; pass=réussir; fail=échouer; revise=réviser; practise=s'entraîner; mistake=erreur; correct=correct; question=question",
    "“Pass an exam” = réussir un examen (pas « passer »). « Passer un examen » = take an exam.", ["I take the exam on Friday.=Je passe l'examen vendredi.", "She passed her test.=Elle a réussi son contrôle."]),
  P("Les qualités professionnelles", "🏆", "hard-working=travailleur; organised=organisé; motivated=motivé; experienced=expérimenté; skilled=qualifié; punctual=ponctuel; creative=créatif; independent=autonome; team player=qui a l'esprit d'équipe; ambitious=ambitieux",
    "“Experienced” = qui a de l'expérience ; “experiment” = expérience scientifique.", ["He is very hard-working.=Il est très travailleur.", "She is organised and punctual.=Elle est organisée et ponctuelle."]),
];

/* ===== A1.11 — Le temps et la météo ===== */
VOCAB_PLUS_A1[11] = [
  P("Phénomènes météo", "⛈️", "storm=orage; thunder=tonnerre; lightning=éclair; rain=pluie; snow=neige; ice=glace; wind=vent; fog=brouillard; sunshine=soleil; rainbow=arc-en-ciel",
    "“Storm” = tempête / orage. “Thunder” = le bruit, “lightning” = la lumière.", ["There is a big storm tonight.=Il y a un gros orage ce soir.", "I love the sunshine.=J'adore le soleil."]),
  P("Décrire le temps", "🌤️", "dry=sec; wet=humide / mouillé; humid=humide; stormy=orageux; icy=verglacé; mild=doux; bright=lumineux; dark=sombre; clear=dégagé; heavy rain=forte pluie",
    "“It's raining” = il pleut. Pour le temps, on utilise “it”.", ["It's a dry day.=C'est une journée sèche.", "It's mild for December.=Il fait doux pour décembre."]),
  P("Les vêtements selon la météo", "🧥", "raincoat=imperméable; boots=bottes; umbrella=parapluie; gloves=gants; scarf=écharpe; hat=bonnet / chapeau; sunglasses=lunettes de soleil; sandals=sandales; shorts=short; warm clothes=vêtements chauds",
    "“Wear” = porter (un vêtement) : “Wear a raincoat.”", ["Take your umbrella.=Prends ton parapluie.", "I wear sandals in summer.=Je porte des sandales en été."]),
  P("Les mois (suite)", "🗓️", "February=février; March=mars; April=avril; May=mai; June=juin; July=juillet; August=août; September=septembre; October=octobre; November=novembre; December=décembre",
    "Les mois ne prennent pas de “the” : “in April”.", ["My birthday is in April.=Mon anniversaire est en avril.", "School starts in September.=L'école commence en septembre."]),
  P("Les jours et le temps", "📆", "Monday=lundi; Tuesday=mardi; Wednesday=mercredi; Thursday=jeudi; Friday=vendredi; Saturday=samedi; Sunday=dimanche; week=semaine; month=mois; year=an",
    "“On” + jour (on Monday) ; “in” + mois ou saison (in May, in summer).", ["I work on Monday.=Je travaille lundi.", "We go away for a week.=Nous partons pour une semaine."]),
  P("Les unités de temps", "⌛", "second=seconde; minute=minute; hour=heure; day=jour; weekend=week-end; decade=décennie; century=siècle; moment=moment; time=temps / fois; date=date",
    "“Time” = temps (durée) ET fois : “three times”.", ["Wait a second!=Attends une seconde !", "What is the date today?=Quelle est la date aujourd'hui ?"]),
  P("Les expressions de temps", "⏰", "now=maintenant; soon=bientôt; later=plus tard; already=déjà; just=juste; still=encore / toujours; again=encore une fois; at the moment=en ce moment; these days=ces jours-ci; at night=la nuit",
    "“At night” (la nuit) mais “in the morning / afternoon / evening”.", ["I'm busy at the moment.=Je suis occupé en ce moment.", "See you soon!=À bientôt !"]),
  P("L'heure précise", "🕒", "twenty past=et vingt; twenty to=moins vingt; five past=et cinq; ten to=moins dix; a.m.=du matin; p.m.=de l'après-midi / du soir; watch=montre; clock=horloge; alarm=réveil; time zone=fuseau horaire",
    "On dit “past” de 1 à 30 minutes et “to” de 31 à 59.", ["It's twenty past five.=Il est cinq heures vingt.", "My alarm rings at seven.=Mon réveil sonne à sept heures."]),
  P("Le climat et la nature", "🌍", "climate=climat; weather forecast=météo; temperature=température; season=saison; sun=soleil; moon=lune; star=étoile; sky=ciel; cloud=nuage; air=air",
    "“Weather” (météo du jour) ≠ “climate” (climat d'une région).", ["What's the weather forecast?=Quelle est la météo ?", "The sky is full of stars.=Le ciel est plein d'étoiles."]),
  P("Les fêtes et les vacances", "🎄", "Christmas=Noël; Easter=Pâques; New Year=Nouvel An; birthday=anniversaire; holiday=jour férié / vacances; festival=festival; party=fête; celebrate=fêter; fireworks=feux d'artifice; gift=cadeau",
    "“Merry Christmas!” et “Happy New Year!” : deux souhaits à connaître.", ["Merry Christmas!=Joyeux Noël !", "We celebrate New Year with fireworks.=Nous fêtons le Nouvel An avec des feux d'artifice."]),
];

/* ===== A1.12 — Parler avec les autres ===== */
VOCAB_PLUS_A1[12] = [
  P("Prendre la parole", "🗣️", "say=dire; tell=raconter; speak=parler; talk=discuter; ask=demander; answer=répondre; explain=expliquer; repeat=répéter; call=appeler; shout=crier",
    "“Say” + paroles ; “tell” + personne : “tell me”, “say hello”.", ["Can you explain, please?=Pouvez-vous expliquer, s'il vous plaît ?", "He tells me a story.=Il me raconte une histoire."]),
  P("S'excuser", "😔", "apologise=s'excuser; mistake=erreur; my fault=ma faute; forgive=pardonner; I didn't mean to=je ne l'ai pas fait exprès; I'm so sorry=je suis vraiment désolé; never mind=ce n'est pas grave; don't worry=ne t'inquiète pas; it's OK=ce n'est rien; too bad=dommage",
    "“Sorry” seul = pardon. “I'm sorry for…” + -ing / nom : “I'm sorry for being late.”", ["I'm so sorry I'm late.=Je suis vraiment désolé d'être en retard.", "Don't worry, it's OK.=Ne t'inquiète pas, ce n'est rien."]),
  P("Remercier et féliciter", "🎉", "thanks a lot=merci beaucoup; that's kind=c'est gentil; congratulations=félicitations; well done=bravo; good luck=bonne chance; cheers=merci / santé; I appreciate it=j'apprécie; happy birthday=joyeux anniversaire; great job=beau travail; all the best=meilleurs vœux",
    "“Cheers” = santé ET merci (familier, Royaume-Uni).", ["Well done! You passed!=Bravo ! Tu as réussi !", "Thanks a lot for your help.=Merci beaucoup pour ton aide."]),
  P("Au téléphone", "📞", "hello=allô / bonjour; speaking=c'est moi (à l'appareil); hold on=ne quittez pas; wrong number=mauvais numéro; call back=rappeler; leave a message=laisser un message; busy=occupé; line=ligne; voicemail=messagerie; hang up=raccrocher",
    "“Who's calling?” = qui est à l'appareil ?", ["Hold on, please.=Ne quittez pas, s'il vous plaît.", "I'll call you back later.=Je vous rappellerai plus tard."]),
  P("Exprimer son accord ou son doute", "🤔", "right=exact; exactly=exactement; probably=probablement; definitely=certainement; perhaps=peut-être; I think so=je pense que oui; I don't think so=je ne pense pas; I'm not sure=je ne suis pas sûr; really=vraiment; absolutely=absolument",
    "“I think so” / “I don't think so” remplacent « je pense que oui / non ».", ["I'm not sure about that.=Je n'en suis pas sûr.", "Definitely! See you there.=Certainement ! On se voit là-bas."]),
  P("Les réactions", "😮", "wow=waouh; oh no=oh non; poor you=pauvre de toi; really=vraiment; that's great=c'est super; that's a pity=c'est dommage; how nice=comme c'est gentil; what a surprise=quelle surprise; no way=pas possible; lucky you=quelle chance",
    "“What a…!” + nom pour exclamer : “What a surprise!”", ["Wow, that's great news!=Waouh, c'est une super nouvelle !", "Oh no, what happened?=Oh non, qu'est-il arrivé ?"]),
  P("Demander de l'aide", "🆘", "need=avoir besoin de; help=aider; problem=problème; show=montrer; explain=expliquer; spell=épeler; write down=noter; repeat=répéter; understand=comprendre; mean=signifier",
    "Pour faire épeler : “How do you spell it?”", ["How do you spell your name?=Comment épelez-vous votre nom ?", "What does this word mean?=Que signifie ce mot ?"]),
  P("Les pronoms et les mots courts", "🔤", "this=ceci / ce; that=cela / ce; these=ces (proches); those=ces (loin); something=quelque chose; nothing=rien; everything=tout; someone=quelqu'un; everyone=tout le monde; anything=quoi que ce soit",
    "“This / these” = proche ; “that / those” = loin.", ["I need something to drink.=J'ai besoin de quelque chose à boire.", "Everyone is here.=Tout le monde est là."]),
  P("Les connecteurs (suite)", "🔗", "then=ensuite; after that=après cela; first=d'abord; finally=finalement; however=cependant; for example=par exemple; too=aussi; both=les deux; also=aussi; except=sauf",
    "“Too” se place à la fin : “Me too.” ; “also” avant le verbe.", ["First, I wake up. Then, I have breakfast.=D'abord, je me réveille. Ensuite, je prends mon petit-déjeuner.", "I like tea and coffee, too.=J'aime le thé et le café aussi."]),
  P("Prendre congé", "👋", "see you later=à tout à l'heure; see you next week=à la semaine prochaine; have a good weekend=bon week-end; safe journey=bon voyage; take care=prends soin de toi; give my love to=embrasse de ma part; speak soon=à bientôt; bye for now=au revoir pour l'instant; good night=bonne nuit; it was nice talking=c'était sympa de parler",
    "“Bye for now” = à bientôt (familier).", ["Have a good weekend!=Bon week-end !", "It was nice talking to you.=C'était sympa de parler avec toi."]),
];


/* ===== Pages complémentaires (compléter chaque leçon à ≥ 95 mots) ===== */
const X = (n, ...pages) => VOCAB_PLUS_A1[n].push(...pages);
X(2, P("Les sentiments familiaux", "❤️", "proud=fier; jealous=jaloux; angry=en colère; worried=inquiet; lonely=seul; surprised=surpris; excited=enthousiaste; nervous=nerveux; sad=triste; relaxed=détendu", "On dit “I'm worried about…” = je m'inquiète pour.", ["I'm proud of my sister.=Je suis fier de ma sœur.", "He is nervous today.=Il est nerveux aujourd'hui."]),
  P("Le repas en famille", "🍽️", "set the table=mettre la table; clear the table=débarrasser; supper=dîner; leftovers=restes; recipe=recette; guest=invité; napkin=serviette de table; tablecloth=nappe; jug=carafe; tray=plateau", "“Supper” = repas léger du soir (familier).", ["Dinner is ready!=Le dîner est prêt !", "I set the table every evening.=Je mets la table chaque soir."]));
X(3, P("Les réseaux et le numérique", "💻", "online=en ligne; website=site web; app=application; password=mot de passe; profile=profil; follow=suivre; share=partager; post=publication; screen=écran; video call=appel vidéo", "“App” est la forme courte de “application”.", ["I share photos online.=Je partage des photos en ligne.", "We talk by video call.=Nous parlons en appel vidéo."]));
X(7, P("Les tailles et formes", "📐", "tight=serré; loose=ample; long=long; short=court; wide=large; narrow=étroit; heavy=lourd; light=léger; fashionable=à la mode; old-fashioned=démodé", "“Tight” = serré ; “light” = léger ET clair.", ["These shoes are too tight.=Ces chaussures sont trop serrées.", "I like loose trousers.=J'aime les pantalons amples."]));
X(8, P("Les rues et les bâtiments", "🏙️", "skyscraper=gratte-ciel; bench=banc; bin=poubelle; lamp post=réverbère; fence=clôture; gate=portail; pond=étang; path=chemin; tunnel=tunnel; harbour=port", "“Bin” (britannique) = poubelle ; “trash can” en américain.", ["There is a bench in the park.=Il y a un banc dans le parc.", "Put it in the bin.=Mets-le à la poubelle."]),
  P("Les métiers de la ville", "👮", "postman=facteur; bus driver=conducteur de bus; shopkeeper=commerçant; street cleaner=balayeur; traffic warden=agent de la circulation; taxi driver=chauffeur de taxi; guide=guide; baker=boulanger; butcher=boucher; mayor=maire", "“Postman” est aussi dit “postal worker”.", ["The postman comes at ten.=Le facteur vient à dix heures.", "The baker opens early.=Le boulanger ouvre tôt."]));
X(9, P("Les problèmes en voyage", "😰", "lost=perdu; late=en retard; stolen=volé; broken=cassé; ill=malade; sunburnt=brûlé par le soleil; homesick=qui a le mal du pays; jet lag=décalage horaire; strike=grève; queue=file", "“Jet lag” = décalage horaire dû à l'avion.", ["I have jet lag.=J'ai le décalage horaire.", "My bag was stolen.=Mon sac a été volé."]));
X(10, P("Les lieux d'études", "🏫", "classroom=salle de classe; playground=cour de récréation; canteen=cantine; laboratory=laboratoire; library=bibliothèque; staff room=salle des profs; hall=salle; campus=campus; gym=gymnase; corridor=couloir", "“Canteen” = cantine scolaire ou d'entreprise.", ["We eat in the canteen.=Nous mangeons à la cantine.", "The lab is on the first floor.=Le laboratoire est au premier étage."]),
  P("La vie d'entreprise", "🏭", "customer=client; product=produit; manager=directeur; team=équipe; project=projet; deadline=date limite; report=rapport; presentation=présentation; boss=patron; employee=employé", "“Deadline” = date limite à respecter.", ["The deadline is Friday.=La date limite est vendredi.", "Our team has a new project.=Notre équipe a un nouveau projet."]));
X(11, P("Les saisons et la nature", "🍂", "leaves=feuilles; blossom=fleurs (d'arbre); harvest=récolte; frost=gel; heatwave=canicule; puddle=flaque; drought=sécheresse; flood=inondation; breeze=brise; shade=ombre", "“Leaves” = pluriel de “leaf”.", ["The leaves fall in autumn.=Les feuilles tombent en automne.", "There is a heatwave this week.=Il y a une canicule cette semaine."]),
  P("Les activités selon la météo", "⛷️", "go skiing=faire du ski; build a snowman=faire un bonhomme de neige; sunbathe=bronzer; have a picnic=pique-niquer; stay inside=rester à l'intérieur; go for a swim=aller nager; fly a kite=faire voler un cerf-volant; play in the snow=jouer dans la neige; wear a coat=porter un manteau; walk in the rain=marcher sous la pluie", "Beau temps → “go outside” ; mauvais temps → “stay inside”.", ["We go skiing in winter.=Nous faisons du ski en hiver.", "Let's stay inside today.=Restons à l'intérieur aujourd'hui."]),
  P("La météo : questions", "❓", "What's the weather like?=Quel temps fait-il ?; Is it going to rain?=Va-t-il pleuvoir ?; How cold is it?=Quel froid fait-il ?; What's the temperature?=Quelle est la température ?; It's freezing!=Il gèle !; It's boiling!=Il fait une chaleur de plomb !; It's pouring.=Il pleut à verse.; It's drizzling.=Il bruine.; Nice weather!=Beau temps !; Horrible weather!=Sale temps !", "“What's the weather like?” est LA question à connaître.", ["What's the weather like today?=Quel temps fait-il aujourd'hui ?", "It's pouring outside.=Il pleut à verse dehors."]),
  P("Les points du calendrier", "🗒️", "calendar=calendrier; diary=agenda; appointment=rendez-vous; deadline=échéance; schedule=emploi du temps; birthday=anniversaire; holiday=congé; bank holiday=jour férié; leap year=année bissextile; anniversary=anniversaire (de mariage)", "“Anniversary” = anniversaire d'un événement ; “birthday” = anniversaire de naissance.", ["I have an appointment on Monday.=J'ai un rendez-vous lundi.", "It's our wedding anniversary.=C'est l'anniversaire de notre mariage."]));
X(12, P("Les petites réponses", "💬", "yes please=oui, s'il vous plaît; no thanks=non merci; I see=je vois; got it=compris; exactly=exactement; sort of=en quelque sorte; of course not=bien sûr que non; I hope so=je l'espère; that's right=c'est exact; fair enough=d'accord", "“Fair enough” = d'accord, c'est raisonnable.", ["Yes please, I'd love a coffee.=Oui, s'il vous plaît, j'aimerais un café.", "Got it, thanks.=Compris, merci."]));


X(9, P("Les envies de voyage", "🌴", "dream=rêve; plan=projet; abroad=à l'étranger; foreign=étranger; culture=culture; tradition=tradition; adventurous=aventureux; peaceful=paisible", "“Foreign” = étranger (pays, langue) ; “stranger” = inconnu.", ["I dream of a trip to Japan.=Je rêve d'un voyage au Japon.", "I love foreign cultures.=J'adore les cultures étrangères."]));
X(10, P("Chercher un emploi", "🔎", "apply=postuler; advert=annonce; vacancy=poste vacant; candidate=candidat; employer=employeur; hire=embaucher; retire=prendre sa retraite; promotion=promotion", "“Apply for a job” = postuler à un emploi.", ["I apply for a job in a bank.=Je postule pour un emploi dans une banque.", "There is a vacancy at the school.=Il y a un poste vacant à l'école."]));
X(11, P("Les heures de la journée", "🌅", "dawn=aube; sunrise=lever du soleil; sunset=coucher du soleil; midday=midi; dusk=crépuscule; tonight=ce soir; overnight=pendant la nuit; daily=quotidien", "“Tonight” = ce soir ; “last night” = hier soir.", ["The sunset is beautiful.=Le coucher du soleil est magnifique.", "See you tonight!=À ce soir !"]));
X(12, P("Les conseils polis", "🙂", "you should=tu devrais; why don't you=pourquoi ne pas; let's=faisons; shall we=si on; would you mind=cela vous dérangerait-il; may I=puis-je; I suggest=je suggère; be careful=fais attention", "“Let's + verbe” propose quelque chose à plusieurs.", ["Let's have lunch together.=Déjeunons ensemble.", "May I sit here?=Puis-je m'asseoir ici ?"]));

/* Déduplication : un mot (en) n'apparaît qu'une fois par leçon, et n'est pas répété d'une leçon à l'autre ;
   les mots déjà présents dans le vocabulaire de base sont retirés (core = tableau de mots EN en minuscules). */
export function plusPages(n, coreSeen = new Set()) {
  const seen = new Set(coreSeen);
  for (let k = 1; k < n; k++) for (const p of VOCAB_PLUS_A1[k] || []) for (const w of p.words) seen.add(w[0].toLowerCase());
  const out = [];
  for (const p of VOCAB_PLUS_A1[n] || []) {
    const words = p.words.filter((w) => { const k = w[0].toLowerCase(); if (seen.has(k)) return false; seen.add(k); return true; });
    if (words.length >= 4) out.push({ ...p, words, q: [`« ${words[0][0]} » veut dire…`, [words[0][1], words[1][1], words[2][1]], 0] });
  }
  return out;
}
