// The Roots — A1 : sujets d'expression supplémentaires (parler / écrire), pour arriver à 6 sujets par leçon.
// T(titre, icône, modèle, [[consigne FR, libellé court, mots-clés EN séparés par |], …×4])
const T = (title, icon, model, rows, img) => ({
  title, icon, model, img,
  prompts: rows.map((r) => r[0]),
  checks: rows.map((r) => [r[1], `\\b(${r[2]})\\b`]),
});

export const EXPRESSION_PLUS_A1 = {
  1: [
    T("Ton adresse et ton téléphone", "📍", "I live in Paris. My phone number is zero six, one two, three four, five six. My birthday is on May tenth. I am from France.", [
      ["Dis où tu habites.", "Où tu habites", "live|lives|from|in"], ["Dis ton numéro de téléphone.", "Ton téléphone", "phone|number|mobile"],
      ["Dis ton anniversaire.", "Ton anniversaire", "birthday|born|january|february|march|april|may|june|july|august|september|october|november|december"], ["Dis ton pays.", "Ton pays", "france|french|from|country|belgium|spain|italy|canada"]]),
    T("Décris ton visage", "🙂", "I have brown hair. I have dark eyes. I am tall. I am friendly and funny.", [
      ["Dis la couleur de tes cheveux.", "Cheveux", "hair|brown|black|blond|blonde|red"], ["Dis la couleur de tes yeux.", "Yeux", "eyes|eye|brown|blue|green|dark"],
      ["Dis si tu es grand(e) ou petit(e).", "Taille", "tall|short|small|big"], ["Dis un trait de ta personnalité.", "Personnalité", "kind|friendly|funny|shy|nice|clever|quiet|happy"]]),
    T("Remplis un formulaire à voix haute", "📝", "My first name is Anna. My last name is Smith. I am twenty-five. I am French. I speak French and English.", [
      ["Dis ton prénom et ton nom.", "Prénom et nom", "name|first|last|surname"], ["Dis ton âge.", "Âge", "years|old|twenty|thirty|forty|fifty|ten|eleven|twelve|thirteen|fourteen|fifteen|sixteen|seventeen|eighteen|nineteen"],
      ["Dis ta nationalité.", "Nationalité", "french|english|british|american|spanish|italian|german|portuguese|congolese|african|belgian|canadian"], ["Dis les langues que tu parles.", "Langues", "speak|language|languages|french|english"]]),
    T("Compte et dis une date", "📅", "My favourite month is June. My birthday is on the fifth of March. Twenty, thirty, forty, fifty. There are thirty people in my class.", [
      ["Dis ton mois préféré.", "Mois préféré", "january|february|march|april|may|june|july|august|september|october|november|december|month"], ["Dis ton anniversaire.", "Anniversaire", "birthday|born|fifth|first|second|third|tenth"],
      ["Compte de 20 à 50 par dizaines.", "Les dizaines", "twenty|thirty|forty|fifty"], ["Dis combien de personnes il y a autour de toi.", "Nombre de personnes", "there are|people|persons|students|colleagues"]]),
  ],
  2: [
    T("Décris un membre de ta famille", "👨‍👩‍👧", "My brother is Paul. He is twenty. He is a student. He likes football. He lives in Lyon.", [
      ["Dis son prénom.", "Son prénom", "is|name|brother|sister|mother|father|uncle|aunt|cousin"], ["Dis son âge.", "Son âge", "years|old|twenty|thirty|forty|fifty|ten|eleven|twelve|fifteen|sixteen|eighteen"],
      ["Dis son métier ou ses études.", "Son métier", "student|teacher|nurse|doctor|works|work|job|engineer|driver|retired"], ["Dis ce qu'il / elle aime.", "Ce qu'il aime", "likes|loves|enjoys|plays|football|music"]]),
    T("Ta pièce préférée", "🛋️", "My favourite room is the kitchen. There is a big table and a window. The walls are yellow. I eat and cook there.", [
      ["Dis quelle pièce tu préfères.", "Pièce préférée", "kitchen|bedroom|living room|bathroom|garden|room|dining"], ["Dis ce qu'il y a dedans.", "Ce qu'il y a", "there is|there are|table|bed|sofa|window|chair|tv"],
      ["Dis la couleur des murs.", "Couleur", "yellow|white|blue|green|red|grey|pink|orange|colour|color"], ["Dis ce que tu y fais.", "Ce que tu y fais", "eat|cook|sleep|read|watch|play|relax|study|work"]]),
    T("Ton animal", "🐶", "I have a dog. His name is Max. He is brown and he is three. He eats meat.", [
      ["Dis si tu as un animal.", "Ton animal", "dog|cat|fish|bird|rabbit|hamster|pet|have|don't have"], ["Dis son nom.", "Son nom", "name|called"],
      ["Dis sa couleur ou son âge.", "Couleur ou âge", "brown|black|white|grey|years|old|big|small|young"], ["Dis ce qu'il mange.", "Ce qu'il mange", "eats|eat|food|meat|fish|likes"]]),
    T("Un repas en famille", "🍽️", "My parents and my sister are at the table. We eat chicken and rice. My father cooks. It is a nice moment.", [
      ["Dis qui est à table.", "Qui est là", "parents|sister|brother|mother|father|family|grandmother|grandfather|we"], ["Dis ce que vous mangez.", "Ce que vous mangez", "eat|chicken|rice|pasta|fish|soup|bread|salad|meat"],
      ["Dis qui cuisine.", "Qui cuisine", "cooks|cook|cooking|makes|prepares"], ["Dis si c'est un bon moment.", "Ton avis", "nice|good|great|happy|lovely|fun|love"]]),
  ],
  3: [
    T("Décris ton meilleur ami", "🧑‍🤝‍🧑", "My best friend is Sara. She is funny and kind. We play tennis at the park and we watch films together.", [
      ["Dis comment il / elle s'appelle.", "Son nom", "friend|name|is|called"], ["Dis comment il / elle est.", "Comment il est", "funny|kind|nice|friendly|clever|shy|quiet|happy|tall"],
      ["Dis ce que vous faites ensemble.", "Ce que vous faites", "together|play|watch|go|walk|talk|study|cook|eat"], ["Dis où vous vous voyez.", "Où", "at|in|park|school|cafe|home|house|cinema|work"]]),
    T("Accepte une invitation", "🎉", "Thank you! Yes, I would love to come. What time is the party? Where is it?", [
      ["Dis merci.", "Merci", "thank|thanks"], ["Dis oui avec plaisir.", "Oui avec plaisir", "yes|love|great|sure|please|happy"],
      ["Demande l'heure.", "L'heure", "time|when|what time"], ["Demande où.", "Le lieu", "where|place|address"]]),
    T("Refuse poliment", "🙏", "I'm sorry, I can't come. I have homework. Can we meet on Saturday?", [
      ["Dis que tu es désolé(e).", "Désolé", "sorry|afraid"], ["Dis que tu ne peux pas.", "Tu ne peux pas", "can't|cannot|can not|not able"],
      ["Donne une raison.", "Une raison", "because|have|homework|work|busy|tired|ill|family|doctor"], ["Propose un autre jour.", "Un autre jour", "monday|tuesday|wednesday|thursday|friday|saturday|sunday|tomorrow|next|meet"]]),
    T("Un message à un ami", "💬", "Hi Tom! How are you? Do you want to go to the cinema? See you soon!", [
      ["Dis bonjour.", "Bonjour", "hi|hello|hey|dear"], ["Demande comment il va.", "Comment ça va", "how are you|how's it going|how are things"],
      ["Propose une activité.", "Une activité", "do you want|would you like|let's|shall we|cinema|park|coffee|walk|film"], ["Dis au revoir.", "Au revoir", "see you|bye|goodbye|take care|soon"]]),
  ],
  4: [
    T("Où est… ?", "🗺️", "Excuse me, where is the station? Is it far? Thank you. Can you repeat, please?", [
      ["Attire l'attention poliment.", "Excuse me", "excuse me|sorry|hello|pardon"], ["Demande où est la gare.", "Où est", "where is|where's"],
      ["Demande si c'est loin.", "C'est loin ?", "far|near|close|minutes"], ["Remercie ou demande de répéter.", "Merci / répéter", "thank|thanks|repeat|again|slowly"]]),
    T("Comment tu vas au travail ?", "🚌", "I take the bus. It takes twenty minutes. I leave at eight. I get off at the school.", [
      ["Dis quel transport tu prends.", "Transport", "bus|train|metro|tram|bike|car|walk|take|taxi"], ["Dis combien de temps ça dure.", "La durée", "minutes|hour|takes|take|long"],
      ["Dis à quelle heure tu pars.", "L'heure", "leave|o'clock|at|am|pm|eight|seven|nine"], ["Dis où tu descends.", "Où tu descends", "get off|school|work|station|stop|arrive"]]),
    T("Décris ton quartier", "🏘️", "There is a park near my house. It is quiet. The bus stop is next to the bakery. I like my neighbourhood.", [
      ["Dis ce qu'il y a près de chez toi.", "Près de chez toi", "there is|there are|near|park|shop|school|bakery|supermarket"], ["Dis s'il est calme.", "Calme ou non", "quiet|noisy|calm|busy|peaceful"],
      ["Dis où est l'arrêt de bus.", "L'arrêt de bus", "bus stop|station|next to|opposite|behind|near"], ["Dis ce que tu aimes.", "Ce que tu aimes", "like|love|enjoy|nice"]]),
    T("Aide un touriste", "🧭", "Go straight. Turn left. The museum is on the right, next to the bank.", [
      ["Dis « tout droit ».", "Tout droit", "straight|go on|continue"], ["Dis « tourne à gauche ».", "À gauche", "left"],
      ["Dis « c'est à droite ».", "À droite", "right"], ["Dis « à côté de… ».", "À côté de", "next to|near|opposite|behind|in front of"]]),
  ],
  5: [
    T("Ton sport", "🏊", "I like swimming. I swim every Saturday. I go with my sister. It is fun.", [
      ["Dis quel sport tu aimes.", "Ton sport", "swimming|football|tennis|running|dancing|basketball|cycling|yoga|sport|like|love"], ["Dis si tu en fais souvent.", "Fréquence", "every|often|sometimes|always|usually|week|day|saturday|sunday"],
      ["Dis avec qui.", "Avec qui", "with|friend|sister|brother|team|alone"], ["Dis pourquoi tu l'aimes.", "Pourquoi", "fun|good|healthy|relaxing|because|great"]]),
    T("Ta musique", "🎵", "I like pop music. My favourite singer is Adele. I listen to music in the evening. I don't like rock.", [
      ["Dis quel style tu aimes.", "Ton style", "pop|rock|jazz|rap|classical|music|gospel|reggae"], ["Dis ton chanteur préféré.", "Ton chanteur", "singer|favourite|favorite|band|artist"],
      ["Dis quand tu écoutes.", "Quand", "listen|morning|evening|night|work|bus|home|every"], ["Dis ce que tu n'aimes pas.", "Ce que tu n'aimes pas", "don't like|do not like|hate|not"]]),
    T("Films et séries", "🎬", "I like comedies. My favourite film is Frozen. It is funny. What is your favourite film?", [
      ["Dis ce que tu regardes.", "Ce que tu regardes", "comedy|comedies|films|film|series|movies|watch|cartoons|drama"], ["Dis ton film préféré.", "Ton film préféré", "favourite|favorite|film|movie|series"],
      ["Dis s'il est drôle ou triste.", "Ton avis", "funny|sad|exciting|boring|scary|good|great|interesting"], ["Demande à ton ami.", "Ta question", "what|do you|your favourite|your favorite"]]),
    T("Ton week-end idéal", "🌞", "I like reading on Saturday. I don't like cleaning. I go to the park with my friends.", [
      ["Dis ce que tu aimes faire.", "Ce que tu aimes", "like|love|enjoy|reading|watching|walking|playing"], ["Dis ce que tu n'aimes pas faire.", "Ce que tu n'aimes pas", "don't like|do not like|hate|cleaning"],
      ["Dis où tu vas.", "Où tu vas", "go|park|cinema|beach|home|church|shop|friends"], ["Dis avec qui.", "Avec qui", "with|friends|family|sister|brother|alone|mother|father"]]),
  ],
  6: [
    T("Au marché", "🍎", "How much are the apples? One kilo of apples, please. Two, please. Thank you.", [
      ["Demande le prix.", "Le prix", "how much|price|cost"], ["Demande un kilo de pommes.", "Un kilo", "kilo|kg|apples|bananas|tomatoes|oranges"],
      ["Dis combien tu veux.", "La quantité", "one|two|three|four|five|half|some|a kilo|bottle|packet"], ["Remercie.", "Merci", "thank|thanks|please"]]),
    T("Ton plat préféré", "🍝", "My favourite dish is pasta. There is cheese and tomato. My mother cooks it. I eat it every week.", [
      ["Dis ton plat préféré.", "Ton plat", "favourite|favorite|dish|pasta|rice|pizza|chicken|soup|salad"], ["Dis ce qu'il y a dedans.", "Ingrédients", "there is|there are|cheese|tomato|meat|chicken|vegetables|rice|egg|onion"],
      ["Dis qui le cuisine.", "Qui cuisine", "cooks|cook|makes|mother|father|i cook|restaurant"], ["Dis si tu en manges souvent.", "Fréquence", "every|often|sometimes|week|day|always|usually"]]),
    T("Ce que tu ne manges pas", "🚫", "I don't eat fish. I don't like onions. I drink water and tea. Can I have some water, please?", [
      ["Dis ce que tu ne manges pas.", "Ce que tu ne manges pas", "don't eat|do not eat|no|don't like|do not like"], ["Dis un aliment que tu n'aimes pas.", "Un aliment", "fish|onions|meat|cheese|eggs|milk|mushrooms|tomatoes|fruit"],
      ["Dis ce que tu bois.", "Ce que tu bois", "drink|water|tea|coffee|juice|milk"], ["Demande de l'eau poliment.", "Poliment", "can i have|could i have|please|water"]]),
    T("Fais les courses", "🛒", "I need bread, eggs and milk. Two bottles of milk and a box of eggs. Where is the milk? It is ten euros.", [
      ["Dis ce qu'il te faut.", "Ce qu'il te faut", "need|bread|eggs|milk|rice|apples|butter|cheese"], ["Dis les quantités.", "Quantités", "two|three|bottle|bottles|packet|kilo|some|box|bag"],
      ["Demande où est un produit.", "Où est", "where is|where are|where's"], ["Dis combien tu paies.", "Le total", "euros|euro|ten|twenty|how much|total"]]),
  ],
  7: [
    T("Essaye un vêtement", "👕", "Can I try this jacket on? I am a medium. It is too big. Do you have a smaller size?", [
      ["Dis que tu veux essayer.", "Essayer", "try|can i|could i"], ["Dis ta taille.", "Ta taille", "small|medium|large|size|am a|i'm a"],
      ["Dis que c'est trop grand ou petit.", "Trop grand / petit", "too big|too small|too large|too short|too long|too tight"], ["Demande une autre taille.", "Une autre taille", "do you have|bigger|smaller|another|other size"]]),
    T("Dis ce que tu portes", "👗", "I am wearing a blue sweater. I am wearing black trousers and white shoes. I like wearing jeans.", [
      ["Dis la couleur de ton haut.", "Ton haut", "sweater|shirt|t-shirt|jacket|top|blouse|dress|hoodie|blue|red|green|black|white"], ["Dis ton pantalon ou ta jupe.", "Pantalon / jupe", "trousers|jeans|skirt|shorts|pants|black|blue"],
      ["Dis tes chaussures.", "Chaussures", "shoes|trainers|boots|sandals|sneakers"], ["Dis ce que tu aimes porter.", "Ce que tu aimes", "like|love|prefer|wearing|wear"]]),
    T("Négocie un prix", "💶", "How much is it? It is expensive. Is there a discount? OK, I'll take it.", [
      ["Demande le prix.", "Le prix", "how much|price|cost"], ["Dis que c'est cher.", "C'est cher", "expensive|too much|cheap|a lot"],
      ["Demande une réduction.", "Une réduction", "discount|sale|cheaper|reduction|offer"], ["Dis que tu le prends.", "Tu le prends", "take it|i'll take|i will take|buy"]]),
    T("Choisis un cadeau", "🎁", "It is for my mother. I choose a scarf. It is twenty euros. She likes red.", [
      ["Dis pour qui.", "Pour qui", "for|mother|father|friend|sister|brother|son|daughter"], ["Dis ce que tu choisis.", "Le cadeau", "choose|scarf|bag|book|perfume|shirt|gift|present|buy"],
      ["Dis le prix.", "Le prix", "euros|euro|twenty|ten|thirty|fifty|price"], ["Dis pourquoi.", "Pourquoi", "likes|loves|because|favourite|red|blue|nice"]]),
  ],
  8: [
    T("Décris l'image : les étudiants en classe", "🖼️", "There are four students in a classroom. A girl is writing in a notebook. A boy is reading a book. There is a teacher near the board. I can see a clock and some bags.", [
      ["Dis combien de personnes tu vois.", "Combien", "there are|there is|four|three|five|two|students|people"], ["Dis ce que font les personnes.", "Ce qu'ils font", "is (writing|reading|talking|listening|smiling|sitting)|are (writing|reading|talking|listening|smiling|sitting)"],
      ["Dis où ils sont.", "Où", "classroom|school|in the|at the|room"], ["Dis ce que tu vois autour.", "Autour", "i can see|there is|there are|board|clock|bags|books|window|table"]], "describe-a18-classroom"),
    T("Décris l'image : au parc", "🌳", "There are three friends in a park. A girl is running. A boy is sitting on a bench with a book. There is a big tree and a lake behind them. It is sunny.", [
      ["Dis qui est sur l'image.", "Qui", "friends|girl|boy|children|people|there are|there is"], ["Dis ce que font les personnes.", "Ce qu'ils font", "is (running|sitting|playing|reading|walking|laughing)|are (running|sitting|playing|reading|walking|laughing)"],
      ["Dis où ils sont.", "Où", "park|garden|bench|tree|lake|outside|in the|on the"], ["Dis quel temps il fait.", "Le temps", "sunny|warm|nice|weather|blue sky|cloudy|it is|it's"]], "describe-a18-park"),
    T("Décris l'image : à la bibliothèque", "📚", "Two students are in a library. They are looking at a laptop and they are smiling. There are many books on the shelves. The girl has long hair and wears a yellow sweater.", [
      ["Dis qui est sur l'image.", "Qui", "students|girl|boy|two|people|there are|there is"], ["Dis ce qu'ils font.", "Ce qu'ils font", "is (looking|reading|studying|smiling|working|talking)|are (looking|reading|studying|smiling|working|talking)"],
      ["Dis ce qu'il y a.", "Ce qu'il y a", "books|shelves|laptop|computer|table|chairs|there are|there is"], ["Décris une personne.", "Une personne", "hair|wears|sweater|jacket|glasses|tall|short|has|long|dark|blond|brown"]], "describe-a18-library"),
    T("Décris ta ville", "🏙️", "I live in Lille. There is a big square and many shops. It is not very big. I like the cafés.", [
      ["Dis le nom de ta ville.", "Ta ville", "live|city|town|village|in"], ["Dis ce qu'il y a.", "Ce qu'il y a", "there is|there are|square|shops|park|station|museum|school"],
      ["Dis si elle est grande ou petite.", "Grande ou petite", "big|small|large|little|quiet|busy"], ["Dis ce que tu aimes.", "Ce que tu aimes", "like|love|enjoy|nice|favourite"]]),
    T("Demande un renseignement", "ℹ️", "Hello, excuse me. Where is the pharmacy? What time does it open? Thank you very much.", [
      ["Dis bonjour poliment.", "Bonjour", "hello|hi|good morning|excuse me|sorry"], ["Demande où est la pharmacie.", "Où est", "where is|where's|pharmacy|bank|post office|station"],
      ["Demande l'heure d'ouverture.", "Ouverture", "open|opens|close|closes|what time"], ["Remercie.", "Merci", "thank|thanks"]]),
    T("Demande de l'aide", "🆘", "I need help, please. I am in front of the station. My name is Anna. My friend is ill.", [
      ["Dis que tu as besoin d'aide.", "Besoin d'aide", "help|need"], ["Dis où tu es.", "Où tu es", "in front of|next to|near|at|station|street|square"],
      ["Donne ton nom.", "Ton nom", "name|i am|i'm"], ["Dis ce qui se passe.", "Le problème", "ill|lost|problem|hurt|sick|lost my|missing|wrong"]]),
    T("Ton quartier idéal", "🌳", "My ideal neighbourhood has a park and a library. It is quiet. The shops are near my house. I like it because it is green.", [
      ["Dis ce qu'il y a dans ton quartier idéal.", "Ce qu'il y a", "park|library|shops|school|cafe|has|there is|there are"], ["Dis s'il est calme.", "Calme", "quiet|calm|peaceful|safe|busy"],
      ["Dis où sont les magasins.", "Les magasins", "near|next to|close|shops|market|supermarket"], ["Dis pourquoi tu l'aimes.", "Pourquoi", "because|like|love|green|nice|beautiful"]]),
  ],
  9: [
    T("Décris l'image : à la gare", "🚉", "There are many travellers at the station. A woman is carrying a suitcase. A man is buying a ticket. A train is arriving. I think they are going on holiday.", [
      ["Dis où sont les personnes.", "Où", "station|train|platform|in the|at the"],
      ["Dis ce que font deux personnes.", "Ce qu'ils font", "is (carrying|buying|waiting|walking|reading)|are (carrying|buying|waiting|walking|reading)"],
      ["Dis ce que tu vois autour.", "Autour", "suitcase|ticket|train|bag|clock|there is|there are|i can see"],
      ["Dis où ils vont, à ton avis.", "À ton avis", "going|travelling|holiday|trip|think|maybe"]], "describe-a19-station"),
    T("Décris l'image : à l'aéroport", "✈️", "We are at the airport. A family is waiting at the gate. The little boy is looking at a plane. There are many suitcases. They are going to travel tomorrow.", [
      ["Dis où sont les personnes.", "Où", "airport|gate|plane|in the|at the"],
      ["Dis ce que fait la famille.", "Ce qu'ils font", "is (waiting|looking|sitting|carrying|holding)|are (waiting|looking|sitting|carrying|holding)"],
      ["Dis ce que tu vois.", "Ce que tu vois", "plane|suitcases|window|bags|passport|there is|there are|i can see"],
      ["Dis ce qu'ils vont faire.", "Ce qu'ils vont faire", "going to|will|travel|fly|tomorrow|next"]], "describe-a19-airport"),
    T("Réserve un billet", "🎫", "I'd like a ticket to London. For Friday. For two people. How much is it?", [
      ["Dis où tu vas.", "Destination", "ticket|to|london|paris|madrid|rome|want|like"], ["Dis quand.", "Quand", "monday|tuesday|wednesday|thursday|friday|saturday|sunday|tomorrow|today|next"],
      ["Dis pour combien de personnes.", "Combien de personnes", "one|two|three|four|people|person|adult|adults"], ["Demande le prix.", "Le prix", "how much|price|cost"]]),
    T("À l'aéroport", "✈️", "I have one suitcase. I am going to Rome. Which gate is it? My flight is at ten o'clock.", [
      ["Dis que tu as une valise.", "Ta valise", "suitcase|bag|luggage|baggage"], ["Dis ta destination.", "Destination", "going to|flying to|to|rome|london|paris|madrid"],
      ["Demande la porte d'embarquement.", "La porte", "gate|which gate|where is"], ["Dis l'heure du vol.", "L'heure du vol", "flight|o'clock|at|am|pm|ten|eight|nine"]]),
    T("Tes vacances de rêve", "🏝️", "I want to go to Spain. I go with my family. We swim and visit museums. We stay for ten days.", [
      ["Dis où tu veux aller.", "Où", "want|go|spain|italy|japan|beach|mountain|island|paris"], ["Dis avec qui.", "Avec qui", "with|family|friends|husband|wife|alone|sister|brother"],
      ["Dis ce que tu fais là-bas.", "Ce que tu fais", "swim|visit|walk|eat|relax|see|museum|beach|shopping"], ["Dis combien de jours.", "Combien de jours", "days|day|week|weeks|ten|five|seven|two"]]),
    T("Un problème en voyage", "🧳", "I lost my bag. It is black. I left it on the train. Can you help me, please?", [
      ["Dis ce que tu as perdu.", "Ce que tu as perdu", "lost|bag|passport|ticket|phone|suitcase|wallet"], ["Dis comment c'est.", "Description", "black|blue|red|big|small|brown|green"],
      ["Dis où tu l'as laissé.", "Où", "train|bus|hotel|airport|taxi|restaurant|left|in|on"], ["Demande de l'aide.", "De l'aide", "help|can you|could you|please"]]),
  ],
  10: [
    T("Décris l'image : au bureau", "💼", "There are three colleagues in an office. A man is using a computer. A woman is talking on the phone. They work in a big, bright room. I think they are busy.", [
      ["Dis qui est sur l'image.", "Qui", "colleagues|man|woman|people|there are|there is"],
      ["Dis ce que font les personnes.", "Ce qu'ils font", "is (using|talking|working|writing|typing)|are (using|talking|working|writing|typing)"],
      ["Dis où ils sont.", "Où", "office|room|desk|work|in a|in the"],
      ["Dis ce que tu vois sur le bureau.", "Sur le bureau", "computer|phone|desk|papers|notebook|coffee|there is|there are"]], "describe-a110-office"),
    T("Décris l'image : à l'université", "🎓", "Some students are on a campus. Two girls are studying on the grass. A boy is carrying many books. They are happy because it is a nice day.", [
      ["Dis qui est sur l'image.", "Qui", "students|girls|boy|people|there are|there is"],
      ["Dis ce que font les étudiants.", "Ce qu'ils font", "is (studying|carrying|reading|walking|sitting)|are (studying|carrying|reading|walking|sitting)"],
      ["Dis où ils sont.", "Où", "campus|university|grass|garden|outside|in the|on the"],
      ["Dis comment ils se sentent.", "Comment", "happy|smiling|tired|nice|because|good"]], "describe-a110-university"),
    T("Présente un collègue", "🧑‍💼", "This is Marie. She is a teacher. She works in a school. She teaches English.", [
      ["Dis son prénom.", "Son prénom", "this is|name|is"], ["Dis son métier.", "Son métier", "teacher|nurse|doctor|engineer|driver|student|manager|secretary|cook|works"],
      ["Dis où il / elle travaille.", "Où il travaille", "works|in|at|school|office|hospital|shop|restaurant"], ["Dis ce qu'il / elle fait.", "Ce qu'il fait", "teaches|helps|cooks|drives|answers|writes|makes|sells"]]),
    T("Ta matière préférée", "📚", "My favourite subject is English. It is interesting. I have it on Monday. I don't like maths.", [
      ["Dis ta matière préférée.", "Matière préférée", "favourite|favorite|subject|english|maths|history|science|geography|music|art"], ["Dis pourquoi.", "Pourquoi", "interesting|fun|easy|useful|because|great"],
      ["Dis quel jour tu l'as.", "Quel jour", "monday|tuesday|wednesday|thursday|friday|on|every"], ["Dis celle que tu n'aimes pas.", "Celle que tu n'aimes pas", "don't like|do not like|hate|difficult|boring"]]),
    T("Au bureau", "🖥️", "I work in an office. I start at nine. I answer emails and phone calls. I finish at five.", [
      ["Dis où tu travailles.", "Où", "work|office|shop|school|hospital|company|home"], ["Dis à quelle heure tu commences.", "Début", "start|begin|nine|eight|seven|o'clock"],
      ["Dis ce que tu fais.", "Ce que tu fais", "answer|write|emails|calls|meetings|customers|computer|teach|help"], ["Dis à quelle heure tu finis.", "Fin", "finish|end|five|six|four|o'clock"]]),
    T("Cherche un emploi", "📄", "I want a job as a receptionist. I can use a computer. I speak French and English. I can start on Monday.", [
      ["Dis le poste que tu veux.", "Le poste", "job|want|as a|receptionist|assistant|teacher|cook|driver|seller"], ["Dis ce que tu sais faire.", "Ce que tu sais faire", "can|computer|drive|cook|write|speak|use"],
      ["Dis les langues que tu parles.", "Langues", "speak|french|english|spanish|language"], ["Dis quand tu peux commencer.", "Quand", "start|monday|tomorrow|next|week|month|from"]]),
  ],
  11: [
    T("Décris l'image : un jour de pluie", "🌧️", "It is a rainy day. People are walking in the street with umbrellas. A girl is wearing a yellow raincoat. The sky is grey and the ground is wet.", [
      ["Dis quel temps il fait.", "Le temps", "rainy|raining|rain|grey|cloudy|wet|weather|it is|it's"],
      ["Dis ce que font les gens.", "Ce qu'ils font", "is (walking|wearing|holding|running)|are (walking|wearing|holding|running)"],
      ["Dis ce que portent les personnes.", "Les vêtements", "umbrella|raincoat|boots|coat|jacket|wearing|wears"],
      ["Décris le ciel ou le sol.", "Le décor", "sky|ground|street|grey|wet|clouds"]], "describe-a111-rain"),
    T("Décris l'image : à la plage", "🏖️", "It is a hot, sunny day at the beach. A family is sitting under an umbrella. Two children are playing in the sand. The sea is blue and calm.", [
      ["Dis quel temps il fait.", "Le temps", "hot|sunny|warm|summer|blue sky|weather|it is|it's"],
      ["Dis ce que font les personnes.", "Ce qu'ils font", "is (sitting|playing|swimming|walking)|are (sitting|playing|swimming|walking)"],
      ["Dis ce que tu vois.", "Ce que tu vois", "sea|sand|umbrella|beach|towel|ball|there is|there are|i can see"],
      ["Dis quelle saison, à ton avis.", "La saison", "summer|spring|holiday|season|think|maybe"]], "describe-a111-beach"),
    T("Quelle heure est-il ?", "🕒", "It is half past six. I have lunch at noon. I go to bed at ten. What time is it, please?", [
      ["Dis l'heure qu'il est.", "L'heure", "it is|it's|o'clock|half past|quarter|past|to"], ["Dis à quelle heure tu manges.", "Repas", "lunch|dinner|breakfast|noon|eat|at"],
      ["Dis à quelle heure tu te couches.", "Coucher", "bed|sleep|go to bed|ten|eleven|nine"], ["Demande l'heure.", "Ta question", "what time|time is it|the time"]]),
    T("Les saisons", "🍂", "My favourite season is summer. It is hot and sunny. I go to the beach. It is in July and August.", [
      ["Dis ta saison préférée.", "Saison préférée", "season|spring|summer|autumn|winter|favourite|favorite"], ["Dis quel temps il fait.", "Le temps", "hot|cold|sunny|rainy|windy|warm|cloudy|snow"],
      ["Dis ce que tu fais.", "Ce que tu fais", "go|beach|park|walk|swim|play|stay|read"], ["Dis quels mois.", "Les mois", "january|february|march|april|may|june|july|august|september|october|november|december"]]),
    T("Hier, aujourd'hui, demain", "📆", "Today is Friday. Today I work. Tomorrow I visit my sister. Tomorrow it is rainy.", [
      ["Dis quel jour on est.", "Aujourd'hui", "today|monday|tuesday|wednesday|thursday|friday|saturday|sunday"], ["Dis ce que tu fais aujourd'hui.", "Ce que tu fais", "work|study|stay|go|visit|cook|clean|today"],
      ["Dis ce que tu fais demain.", "Demain", "tomorrow|visit|go|meet|will"], ["Dis le temps de demain.", "Météo de demain", "rainy|sunny|cold|hot|windy|cloudy|snow|weather"]]),
    T("Un week-end selon la météo", "🌦️", "If it rains, I stay at home. If it is sunny, I go to the park. It is cold in winter. I wear a coat.", [
      ["Dis ce que tu fais s'il pleut.", "S'il pleut", "rains|rain|rainy|stay|home|read|watch"], ["Dis ce que tu fais s'il fait beau.", "S'il fait beau", "sunny|park|beach|walk|go|out"],
      ["Dis s'il fait froid en hiver.", "L'hiver", "cold|winter|snow|freezing"], ["Dis ce que tu portes.", "Ce que tu portes", "wear|coat|jacket|scarf|hat|t-shirt|sweater"]]),
  ],
  12: [
    T("Décris l'image : au café", "☕", "Three friends are at a café. They are talking and laughing. There are two cups of coffee and a cake on the table. I think they are good friends.", [
      ["Dis qui est sur l'image.", "Qui", "friends|three|girls|boys|people|there are"],
      ["Dis ce qu'ils font.", "Ce qu'ils font", "are (talking|laughing|drinking|eating|sitting)|is (talking|laughing|drinking|eating|sitting)"],
      ["Dis ce qu'il y a sur la table.", "Sur la table", "cup|coffee|cake|table|glass|there is|there are"],
      ["Dis ce qu'ils pensent ou ressentent.", "Émotions", "happy|laughing|friends|think|good|funny|smiling"]], "describe-a112-cafe"),
    T("Décris l'image : au marché", "🛒", "This is a market. A woman is selling fruit and vegetables. A man is asking about the price. There are apples, tomatoes and bread on the stall. It is busy.", [
      ["Dis où sont les personnes.", "Où", "market|stall|street|in the|at the"],
      ["Dis ce que font les personnes.", "Ce qu'ils font", "is (selling|asking|buying|paying|talking)|are (selling|asking|buying|paying|talking)"],
      ["Dis ce qu'on peut acheter.", "Les produits", "apples|tomatoes|bread|fruit|vegetables|cheese|there is|there are"],
      ["Dis comment est l'ambiance.", "L'ambiance", "busy|noisy|crowded|colourful|nice|lively"]], "describe-a112-market"),
    T("Salue selon le moment", "🌞", "Good morning! Good evening! How are you? I'm fine, thank you.", [
      ["Dis bonjour le matin.", "Le matin", "good morning|morning|hello|hi"], ["Dis bonsoir.", "Le soir", "good evening|evening|good afternoon|afternoon"],
      ["Demande comment ça va.", "Comment ça va", "how are you|how's it going|how are things"], ["Réponds poliment.", "Ta réponse", "fine|good|well|great|thank"]]),
    T("Remercie et excuse-toi", "🙏", "Thank you for the gift. I'm sorry I'm late. It's OK. You're welcome.", [
      ["Dis merci pour un cadeau.", "Merci", "thank|thanks|gift|present"], ["Excuse-toi d'être en retard.", "Excuse", "sorry|late|excuse|apologise|apologize"],
      ["Dis que ce n'est pas grave.", "Pas grave", "it's ok|it's okay|no problem|never mind|don't worry|it is ok"], ["Dis « de rien ».", "De rien", "you're welcome|you are welcome|no problem|not at all"]]),
    T("Demande poliment", "💬", "Can I have a pen, please? Could you help me? Could you repeat that, please? Thank you.", [
      ["Demande un stylo.", "Un objet", "can i have|could i have|pen|book|water|please"], ["Demande de l'aide.", "De l'aide", "help|can you help|could you help"],
      ["Demande de répéter.", "Répéter", "repeat|again|slowly|say that"], ["Remercie.", "Merci", "thank|thanks"]]),
    T("Termine la conversation", "👋", "I have to go now. It was nice to talk to you. See you soon! Have a good evening!", [
      ["Dis que tu dois partir.", "Tu pars", "have to go|must go|got to go|go now|leave"], ["Dis que c'était sympa.", "C'était sympa", "nice|great|good|lovely|pleasure"],
      ["Dis « à bientôt ».", "À bientôt", "see you|bye|goodbye|soon|later|tomorrow"], ["Souhaite une bonne soirée.", "Souhait", "have a|good evening|good night|good day|good weekend|take care"]]),
  ],
};

// A2 : mêmes sujets supplémentaires (A2.1)
export const EXPRESSION_PLUS_A2 = {
  0: [
    T("Décris l'image : la cuisine", "🍳", "In this picture, a family is cooking dinner. The father is cutting vegetables and the mother is stirring a pot. Usually they cook together on Sundays. They are going to eat at seven.", [
      ["Dis ce que font les personnes en ce moment.", "En ce moment", "is (cutting|stirring|cooking|chopping|helping)|are (cutting|stirring|cooking|chopping|helping)"],
      ["Dis ce qu'ils font d'habitude.", "D'habitude", "usually|often|always|every|on sundays|cook together"],
      ["Dis ce que tu vois dans la cuisine.", "La cuisine", "pot|knife|vegetables|table|oven|kitchen|there is|there are"],
      ["Dis ce qu'ils vont faire ensuite.", "Ensuite", "going to|will|eat|dinner|at seven|later"]], "describe-a20-kitchen"),
    T("Décris l'image : une rue animée", "🏙️", "The street is very busy. A man is running for the bus, but a woman is walking slowly. A boy is eating ice cream. Every day many people take this street to go to work.", [
      ["Dis ce que font trois personnes.", "Trois personnes", "is (running|walking|eating|waiting|talking)|are (running|walking|eating|waiting|talking)"],
      ["Compare deux personnes.", "Comparer", "but|while|and|slowly|quickly|faster|slower"],
      ["Dis ce que les gens font chaque jour.", "Chaque jour", "every day|usually|often|always|take|go to work"],
      ["Dis où ça se passe.", "Où", "street|city|town|bus stop|in the|on the"]], "describe-a20-street"),
  ],
  1: [
    T("Décris l'image : le matin", "🌅", "In the morning, the girl brushes her teeth and has breakfast. Right now she is putting on her shoes. She usually leaves at eight. She never misses the bus.", [
      ["Dis ce que fait la fille d'habitude.", "Habitude", "brushes|has breakfast|usually|every morning|always|gets up|leaves"],
      ["Dis ce qu'elle fait en ce moment.", "En ce moment", "is (putting|brushing|eating|wearing|getting)|right now|now"],
      ["Dis à quelle heure elle part.", "L'heure", "at (seven|eight|nine)|leaves|o'clock|half past"],
      ["Utilise un adverbe de fréquence.", "Fréquence", "always|never|usually|often|sometimes"]], "describe-a21-morning"),
    T("Décris l'image : le soir", "🌙", "In the evening, the family is at home. The mother cooks, the son reads a book and the father watches TV. They often eat together at half past seven. Tonight they are going to watch a film.", [
      ["Dis ce que fait chaque personne.", "Chaque personne", "cooks|reads|watches|is (cooking|reading|watching)|are (cooking|reading|watching)"],
      ["Dis ce qu'ils font souvent le soir.", "Souvent", "often|usually|always|every evening|eat together"],
      ["Dis ce qu'il y a dans la pièce.", "La pièce", "sofa|lamp|table|tv|book|there is|there are"],
      ["Dis ce qu'ils vont faire ce soir.", "Ce soir", "going to|tonight|will|this evening|watch a film"]], "describe-a21-evening"),
    T("Ton week-end habituel", "🌤️", "I usually get up late on Saturday. I often meet my friends. We always have lunch together. I never work on Sunday.", [
      ["Dis à quelle heure tu te lèves le week-end.", "Le lever", "get up|wake up|late|early|o'clock|at"], ["Dis ce que tu fais souvent.", "Ce que tu fais souvent", "often|usually|meet|go|visit|play|watch|clean"],
      ["Dis ce que tu fais toujours.", "Toujours", "always|every"], ["Dis ce que tu ne fais jamais.", "Jamais", "never|rarely"]]),
    T("Ton trajet quotidien", "🚆", "I take the train to work. It takes forty minutes. On the train I read or listen to music. I am never late.", [
      ["Dis comment tu vas au travail ou à l'école.", "Le moyen", "take|go|walk|cycle|drive|train|bus|metro|car|bike"], ["Dis combien de temps ça prend.", "La durée", "takes|minutes|hour|long"],
      ["Dis ce que tu fais pendant le trajet.", "Pendant le trajet", "read|listen|sleep|work|watch|talk|music|phone"], ["Dis si tu es souvent en retard.", "Retard", "late|never|sometimes|often|on time"]]),
    T("Que fais-tu en ce moment ?", "⏱️", "I am at home. I am studying English. My son is playing in his room. It is raining outside.", [
      ["Dis où tu es.", "Où tu es", "i am at|i'm at|i am in|i'm in|home|work|office|school"], ["Dis ce que tu fais maintenant.", "Ce que tu fais", "i am \\w+ing|i'm \\w+ing|studying|working|reading|cooking|watching"],
      ["Dis ce que fait quelqu'un près de toi.", "Quelqu'un d'autre", "is \\w+ing|are \\w+ing|playing|sleeping|cooking|working"], ["Dis le temps dehors.", "Le temps", "raining|sunny|cold|hot|snowing|windy|cloudy|weather"]]),
    T("Ta routine du soir", "🌙", "I get home at six. I cook dinner and we eat at seven. After dinner I watch TV. I go to bed at ten thirty.", [
      ["Dis à quelle heure tu rentres.", "Le retour", "get home|come home|arrive|home|o'clock|at"], ["Dis ce que tu manges.", "Le dîner", "dinner|eat|cook|supper|meal"],
      ["Dis ce que tu fais avant de dormir.", "Avant de dormir", "watch|read|relax|shower|talk|tv|phone|book"], ["Dis à quelle heure tu te couches.", "Le coucher", "go to bed|sleep|bed|ten|eleven|nine"]]),
  ],
};
