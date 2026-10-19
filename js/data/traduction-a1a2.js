// The Roots — exercices de TRADUCTION (écrit) pour A1.6 → A2.7 : un texte anglais à traduire en français (EN→FR)
// et un texte français à traduire en anglais (FR→EN) par leçon. Même format que les expressions « plus » : 4 phrases, 4 critères.
// Les textes sont inventés pour la leçon (message, avis, annonce, chanson, article…). À relire par un natif.
const TR = (title, dir, rows) => ({
  title, icon: "🔁", trad: dir,
  prompts: rows.map((r) => (dir === "fr" ? "Traduis en français : « " : "Traduis en anglais : « ") + r[0] + " »"),
  model: rows.map((r) => r[1]).join(" "),
  checks: rows.map((r, i) => [`Phrase ${i + 1}`, r[2]]),
});

const A1 = {
  6: [
    TR("Traduire : un avis sur un restaurant", "fr", [
      ["The pizza is very good.", "La pizza est très bonne.", "pizza.*(bonne|excellente|d.licieuse|super|g.niale)|(bonne|excellente|d.licieuse|super|g.niale).*pizza"],
      ["The waiter is kind.", "Le serveur est gentil.", "(serveur|gar.on).*(gentil|aimable|sympa)|(gentil|aimable|sympa).*(serveur|gar.on)"],
      ["The price is not expensive.", "Le prix n'est pas cher.", "(prix|tarif).*(pas (cher|.lev)|abordable|raisonnable)|(pas cher|abordable|raisonnable).*(prix|tarif)"],
      ["I love this restaurant.", "J'adore ce restaurant.", "(adore|aime).*restaurant"]]),
    TR("Traduire : au restaurant", "en", [
      ["Je voudrais une soupe et de l'eau.", "I would like a soup and some water.", "(i.d like|i would like|i want).*(soup|water)"],
      ["Je n'aime pas les oignons.", "I don't like onions.", "(don.t|do not) like.*onion"],
      ["Combien coûte le menu ?", "How much is the menu?", "how much.*(menu|is it|does)"],
      ["Merci beaucoup.", "Thank you very much.", "thank(s| you).*(much|a lot)|thanks a lot"]]),
  ],
  7: [
    TR("Traduire : une petite annonce", "fr", [
      ["I sell a red bag.", "Je vends un sac rouge.", "vend.*sac.*rouge|sac rouge"],
      ["It is new and cheap.", "Il est neuf et pas cher.", "(neuf|nouveau).*(pas cher|bon march)|(pas cher|bon march).*(neuf|nouveau)"],
      ["It costs ten euros.", "Il coûte dix euros.", "(co.te|prix).*(dix|10).*euro"],
      ["Call me after six.", "Appelez-moi après six heures.", "appel.*(apr.s).*(six|18|dix-huit)"]]),
    TR("Traduire : au magasin", "en", [
      ["Je voudrais cette chemise bleue.", "I would like this blue shirt.", "(i.d like|i would like|i want).*shirt"],
      ["Elle est trop grande.", "It is too big.", "too (big|large)"],
      ["Avez-vous une taille plus petite ?", "Do you have a smaller size?", "do you have.*(smaller|small)"],
      ["Combien ça coûte ?", "How much is it?", "how much (is|does|are)"]]),
  ],
  8: [
    TR("Traduire : une carte postale", "fr", [
      ["Hello from Bath!", "Bonjour de Bath !", "(bonjour|salut|coucou).*bath"],
      ["The city is small and beautiful.", "La ville est petite et belle.", "ville.*petite.*(belle|jolie|magnifique)"],
      ["I am walking near the river now.", "Je me promène près de la rivière maintenant.", "(prom|march|balad).*(pr.s|le long).*(rivi|fleuve)"],
      ["See you soon!", "À bientôt !", "bient.t|a plus|plus tard"]]),
    TR("Traduire : se repérer en ville", "en", [
      ["Où est la bibliothèque ?", "Where is the library?", "where is.*library"],
      ["Elle est près du parc.", "It is near the park.", "(near|next to|close to).*park"],
      ["Je suis perdu.", "I am lost.", "(i am|i.m) lost"],
      ["Pouvez-vous répéter, s'il vous plaît ?", "Can you repeat that, please?", "(can|could) you (repeat|say it again|say that again)"]]),
  ],
  9: [
    TR("Traduire : un message d'hôtel", "fr", [
      ["Your room is on the second floor.", "Votre chambre est au deuxième étage.", "chambre.*(deuxi|troisi|2|3|second)"],
      ["Breakfast is at seven.", "Le petit-déjeuner est à sept heures.", "petit.d.jeuner.*(sept|7)"],
      ["The bus to the airport leaves at nine.", "Le bus pour l'aéroport part à neuf heures.", "(bus|car|navette).*(a.roport).*(part|d.part).*(neuf|9)"],
      ["Have a good trip!", "Bon voyage !", "bon voyage|bonne route|bon s.jour"]]),
    TR("Traduire : voyager", "en", [
      ["Je vais voyager à Rome demain.", "I am going to travel to Rome tomorrow.", "(going to|will) (travel|go|fly).*rome"],
      ["Je voudrais un billet pour Londres.", "I would like a ticket to London.", "(i.d like|i would like|i want).*ticket.*london"],
      ["À quelle heure part le train ?", "What time does the train leave?", "what time.*train.*(leave|go|depart)|when does the train leave"],
      ["Mon bagage est petit.", "My bag is small.", "(bag|luggage|suitcase).*small|small.*(bag|luggage|suitcase)"]]),
  ],
  10: [
    TR("Traduire : une présentation", "fr", [
      ["My name is Sara.", "Je m'appelle Sara.", "(m.appelle|mon nom est|mon pr.nom est).*sara"],
      ["I work in a hospital.", "Je travaille dans un hôpital.", "travaill.*pital"],
      ["I start at eight and I finish at five.", "Je commence à huit heures et je finis à cinq heures.", "(commence|d.bute).*(huit|8).*(finis|termine|fini).*(cinq|5)"],
      ["I like my job.", "J'aime mon travail.", "(aime|adore).*(travail|m.tier|boulot|emploi)"]]),
    TR("Traduire : au bureau", "en", [
      ["Je travaille dans un bureau.", "I work in an office.", "(i work|i.m working).*office"],
      ["Mon collègue s'appelle Tom.", "My colleague is called Tom.", "(colleague|coworker).*tom"],
      ["Nous avons une réunion à dix heures.", "We have a meeting at ten.", "(have|there is).*meeting.*(ten|10)"],
      ["J'étudie l'anglais le soir.", "I study English in the evening.", "(study|learn).*english.*(evening|night)"]]),
  ],
  11: [
    TR("Traduire : les paroles d'une chanson", "fr", [
      ["Rain on my window, sun in my heart.", "De la pluie sur ma fenêtre, du soleil dans mon cœur.", "pluie.*fen.tre.*soleil"],
      ["It's cold today, but we are together.", "Il fait froid aujourd'hui, mais nous sommes ensemble.", "froid.*ensemble"],
      ["Tomorrow is Monday, but today is ours.", "Demain, c'est lundi, mais aujourd'hui est à nous.", "demain.*lundi.*aujourd"],
      ["Winter is here, and I am happy.", "L'hiver est là, et je suis heureux.", "hiver.*(heureux|heureuse|content)"]]),
    TR("Traduire : le temps et l'heure", "en", [
      ["Il fait chaud aujourd'hui.", "It is hot today.", "(hot|warm).*today|today.*(hot|warm)"],
      ["Il pleut en hiver.", "It rains in winter.", "(rains|rainy|is raining).*winter|winter.*rain"],
      ["Quelle heure est-il ?", "What time is it?", "what time is it|what.s the time"],
      ["Il est trois heures et demie.", "It is half past three.", "half past three|three thirty|3.30"]]),
  ],
  12: [
    TR("Traduire : un message à un ami", "fr", [
      ["Hi Ben!", "Salut Ben !", "(salut|bonjour|coucou).*ben"],
      ["Thank you for the invitation.", "Merci pour l'invitation.", "merci.*invitation"],
      ["I'm sorry, but I can't come because I'm working.", "Je suis désolée, mais je ne peux pas venir parce que je travaille.", "(sol|navr|pardon|excuse).*(peux pas|impossible).*venir|ne peux pas venir"],
      ["Can we meet on Sunday?", "Peut-on se voir dimanche ?", "dimanche.*(voir|rencontrer|retrouver)|(voir|rencontrer|retrouver).*dimanche"]]),
    TR("Traduire : politesse", "en", [
      ["Bonjour, comment allez-vous ?", "Hello, how are you?", "(hello|hi|good (morning|afternoon)).*how are you"],
      ["Très bien, merci, et vous ?", "Very well, thank you, and you?", "(very well|fine|great|good).*thank.*(and you|you\\?)"],
      ["Excusez-moi, pouvez-vous m'aider ?", "Excuse me, can you help me?", "excuse me.*(can|could) you help"],
      ["À bientôt !", "See you soon!", "see you (soon|later)|bye"]]),
  ],
};

const A2 = {
  0: [
    TR("Traduire : mon emploi du temps", "fr", [
      ["I usually get up at seven.", "D'habitude, je me lève à sept heures.", "(habitude|habituellement|g.n.ral|normalement).*(l.ve).*(sept|7)|(me l.ve).*(sept|7)"],
      ["Today I'm working at home.", "Aujourd'hui, je travaille à la maison.", "aujourd.*travaill.*(maison|domicile)"],
      ["Tomorrow I'm going to visit my sister.", "Demain, je vais rendre visite à ma sœur.", "demain.*(vais|visite|voir).*(s.ur|soeur)"],
      ["I'd like to learn English.", "J'aimerais apprendre l'anglais.", "(aimerais|voudrais|veux).*apprendre.*anglais"]]),
    TR("Traduire : habitudes et projets", "en", [
      ["D'habitude, je prends le bus.", "I usually take the bus.", "(usually|normally|always).*take the bus|take the bus.*usually"],
      ["Maintenant, je lis un livre.", "Now I am reading a book.", "(now|at the moment).*(reading)"],
      ["Demain, je vais voyager.", "Tomorrow I am going to travel.", "tomorrow.*(going to|will).*(travel|fly|go)"],
      ["J'aimerais parler anglais.", "I would like to speak English.", "(i.d like|i would like|i want).*(speak|talk).*english"]]),
  ],
  1: [
    TR("Traduire : un journal de bord", "fr", [
      ["I always get up early, but today I'm sleeping late.", "Je me lève toujours tôt, mais aujourd'hui je dors tard.", "(l.ve.*toujours|toujours.*l.ve).*t.t.*aujourd.*dor.*tard"],
      ["I never watch TV in the morning.", "Je ne regarde jamais la télé le matin.", "(ne regarde (jamais|pas)).*(t.l).*matin"],
      ["Now I'm making breakfast.", "Maintenant, je prépare le petit-déjeuner.", "maintenant.*(pr.pare|fais).*petit.d.jeuner"],
      ["My neighbour is cooking too.", "Mon voisin cuisine aussi.", "voisin.*(cuisine|pr.pare|fait la cuisine).*aussi"]]),
    TR("Traduire : travail et habitudes", "en", [
      ["Je vais au travail en train.", "I go to work by train.", "(go|travel|commute).*work.*train"],
      ["Ces jours-ci, je travaille à la maison.", "These days I work at home.", "(these days|nowadays|at the moment).*(work).*home"],
      ["Je ne mange jamais le matin.", "I never eat in the morning.", "never (eat|have).*morning"],
      ["Il fait ses devoirs en ce moment.", "He is doing his homework at the moment.", "(is|.s) doing.*homework"]]),
  ],
  2: [
    TR("Traduire : un souvenir d'enfance", "fr", [
      ["When I was a child, I used to live near the sea.", "Quand j'étais enfant, j'habitais près de la mer.", "quand.*(enfant|petit).*(habitais|vivais).*mer"],
      ["We played on the beach every day.", "Nous jouions sur la plage tous les jours.", "(jouions|jouait|avons jou).*plage.*(tous les jours|chaque jour)"],
      ["Last summer I visited my old town.", "L'été dernier, j'ai visité ma vieille ville.", "dernier.*(visit|retourn)|(visit|retourn).*dernier"],
      ["It was different.", "Elle était différente.", "diff.rente?|chang"]]),
    TR("Traduire : le passé", "en", [
      ["Hier, je suis allé au marché.", "Yesterday I went to the market.", "yesterday.*went.*market"],
      ["Quand j'étais petit, j'avais un chien.", "When I was little, I had a dog.", "(when i was|as a child).*(had|used to have).*dog"],
      ["Nous avons mangé une pizza.", "We ate a pizza.", "(we ate|we had|we.ve eaten).*pizza"],
      ["Elle n'a pas aimé le film.", "She didn't like the film.", "(didn.t|did not) like.*(film|movie)"]]),
  ],
  3: [
    TR("Traduire : un article de presse", "fr", [
      ["At eight o'clock, the power went out while everybody was having dinner.", "À huit heures, le courant a été coupé pendant que tout le monde dînait.", "(courant|lectricit).*(pendant que|alors que).*(d.n|repas|manger)"],
      ["The children were playing when the lights went off.", "Les enfants jouaient quand les lumières se sont éteintes.", "enfants.*jou.*(lumi|courant).*(teint|coup)"],
      ["A neighbour called the police.", "Un voisin a appelé la police.", "voisin.*(appel|t.l.phon).*police"],
      ["Nobody was hurt.", "Personne n'a été blessé.", "personne.*bless"]]),
    TR("Traduire : deux actions", "en", [
      ["Je lisais quand le téléphone a sonné.", "I was reading when the phone rang.", "(was|were) reading.*when.*phone.*rang"],
      ["Pendant que nous mangions, il pleuvait.", "While we were eating, it was raining.", "while we were eating.*(was raining|raining)"],
      ["Il dormait quand je suis arrivé.", "He was sleeping when I arrived.", "(was sleeping|was asleep).*when i (arrived|got)"],
      ["Que faisais-tu hier soir ?", "What were you doing last night?", "what were you doing.*(last night|yesterday evening)"]]),
  ],
  4: [
    TR("Traduire : une invitation", "fr", [
      ["We are going to have a party on Saturday.", "Nous allons faire une fête samedi.", "(allons|va).*(f.te|soir.e).*samedi"],
      ["I will bring some cake.", "J'apporterai un gâteau.", "(apporter|apporte).*g.teau"],
      ["The party starts at seven, and it will finish at midnight.", "La fête commence à sept heures et finira à minuit.", "(commence|d.bute).*(sept|7).*minuit"],
      ["I hope you can come!", "J'espère que tu pourras venir !", "esp.re.*(venir|viendr|pourr)"]]),
    TR("Traduire : projets et réservation", "en", [
      ["Je vais réserver une chambre pour deux nuits.", "I am going to book a room for two nights.", "(going to|will) (book|reserve).*room.*(two nights|2 nights)"],
      ["Demain, je prends le train de huit heures.", "Tomorrow I am taking the eight o'clock train.", "tomorrow.*(taking|take|catching|catch).*train"],
      ["Je pense qu'il fera beau.", "I think it will be sunny.", "i think (it will|it.ll) be (sunny|nice|fine|good)"],
      ["Nous allons visiter Londres.", "We are going to visit London.", "(we are|we.re) going to (visit|see).*london"]]),
  ],
  5: [
    TR("Traduire : un avis sur un produit", "fr", [
      ["This phone is cheaper than the other one.", "Ce téléphone est moins cher que l'autre.", "moins cher.*(l.autre|celui)"],
      ["It is not as fast.", "Il n'est pas aussi rapide.", "pas (aussi|si|autant) rapide"],
      ["The screen is bigger and the battery is the best.", "L'écran est plus grand et la batterie est la meilleure.", "cran.*plus grand.*batterie.*meilleur"],
      ["I prefer this one.", "Je préfère celui-ci.", "pr.f.re.*(celui|ce)"]]),
    TR("Traduire : comparer", "en", [
      ["Cette ville est plus grande que la mienne.", "This city is bigger than mine.", "(bigger|larger) than (mine|my)"],
      ["C'est le meilleur restaurant du quartier.", "It is the best restaurant in the area.", "the best restaurant"],
      ["Ce sac est aussi cher que celui-là.", "This bag is as expensive as that one.", "as expensive as"],
      ["Je préfère le train à l'avion.", "I prefer the train to the plane.", "prefer.*train.*(to|than).*(plane|flying|airplane)"]]),
  ],
  6: [
    TR("Traduire : un conseil santé", "fr", [
      ["If you have a cold, you should rest and drink a lot of water.", "Si tu as un rhume, tu devrais te reposer et boire beaucoup d'eau.", "rhume.*(devrais|devriez).*repos.*boire.*beaucoup"],
      ["You shouldn't go to work with a fever.", "Tu ne devrais pas aller travailler avec de la fièvre.", "(ne devrais pas|ne devriez pas).*travailler.*fi.vre"],
      ["You have to take your medicine twice a day.", "Tu dois prendre ton médicament deux fois par jour.", "(dois|devez|faut).*prendre.*(dicament|traitement).*deux fois"],
      ["See a doctor if you don't feel better.", "Va voir un médecin si tu ne te sens pas mieux.", "(decin|docteur).*(si tu ne|si vous ne).*(mieux|bien)"]]),
    TR("Traduire : médecin et règles", "en", [
      ["Tu devrais voir un médecin.", "You should see a doctor.", "should see a doctor"],
      ["Je dois prendre ce médicament trois fois par jour.", "I have to take this medicine three times a day.", "(have to|must).*take.*(medicine|tablet|pill).*three times"],
      ["Il ne doit pas fumer ici.", "He mustn't smoke here.", "(mustn.t|must not|can.t).*smoke"],
      ["Qu'est-ce que je dois faire ?", "What should I do?", "what (should|do|must) i (do|have to do)"]]),
  ],
  7: [
    TR("Traduire : les paroles d'une chanson", "fr", [
      ["If the sun comes out tomorrow, I will dance in the street.", "Si le soleil se montre demain, je danserai dans la rue.", "soleil.*demain.*dans.*rue"],
      ["If the rain comes down, I will sing with you.", "Si la pluie tombe, je chanterai avec toi.", "pluie.*chant.*avec (toi|vous)"],
      ["The wind will carry our song across the sea.", "Le vent portera notre chanson au-dessus de la mer.", "vent.*(portera|emportera|transportera).*chanson.*mer"],
      ["Maybe the storm will pass, and we will still be here.", "Peut-être que l'orage passera, et nous serons encore là.", "peut-.tre.*(orage|temp.te).*pass.*encore"]]),
    TR("Traduire : le bulletin météo", "en", [
      ["Demain, il fera beau et chaud.", "Tomorrow will be sunny and warm.", "tomorrow.*(will be|it will be).*(sunny|nice|warm|hot)"],
      ["S'il pleut, nous resterons à la maison.", "If it rains, we will stay at home.", "if it rains.*(we.ll|we will) stay (at )?home"],
      ["Il ne neigera pas ce week-end.", "It won't snow this weekend.", "(won.t|will not) snow.*weekend|weekend.*(won.t|will not) snow"],
      ["Il y aura peut-être de l'orage.", "There might be a storm.", "(might|may|could|will probably).*storm|storm.*might"]]),
  ],
};

export const TRADUCTION_A1 = A1;
export const TRADUCTION_A2 = A2;
