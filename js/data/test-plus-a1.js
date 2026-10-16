// The Roots — A1.2 à A1.12 : banque de test complémentaire pour atteindre le niveau de A1.1
// (40 questions de grammaire, 8 textes de lecture, 8 audios par leçon). Format : la bonne réponse est écrite en premier,
// balanceAll() la répartit ensuite sur les positions 1/2/3 comme dans les autres fichiers de données.
import { balanceAll } from "./balance.js";

const g = (stem, ok, w1, w2) => [stem, [ok, w1, w2], 0];
const q = (stem, ok, w1, w2) => [stem, [ok, w1, w2], 0];
const t = (title, text, qs) => ({ title, text, q: qs.map((x) => q(...x)) });
const a = (script, qs) => ({ script, q: qs.map((x) => q(...x)) });

export const TEST_PLUS_A1 = {
  2: {
    gram: [
      g("My sister ___ two children.", "has", "have", "is"), g("These are my ___. (child)", "children", "childs", "childrens"),
      g("The book is ___. (Tom)", "Tom’s", "Toms", "of Tom"), g("There ___ three bedrooms in the house.", "are", "is", "has"),
      g("How many brothers ___ you have?", "do", "does", "are"), g("___ your mother a nurse?", "Is", "Are", "Does"),
      g("My uncle ___ in London.", "lives", "live", "living"), g("She is ___ aunt.", "my", "me", "I"),
      g("I have a brother. ___ name is Leo.", "His", "Her", "Their"), g("He ___ got a cousin in Paris.", "has", "have", "is"),
    ],
    texts: [
      t("My cousin", "My cousin Nina is twelve. She lives in Lyon with her parents. She has a little brother. His name is Paul. He is five.", [["How old is Nina?", "Twelve", "Five", "Fifteen"], ["Where does Nina live?", "In Lyon", "In Paris", "In London"], ["How old is Paul?", "Five", "Twelve", "Ten"]]),
      t("Grandpa’s house", "My grandparents have a big house. There are four bedrooms and a garden. My grandfather is retired. My grandmother is a good cook.", [["How many bedrooms are there?", "Four", "Two", "Six"], ["Who is retired?", "The grandfather", "The grandmother", "The father"], ["What is the grandmother good at?", "Cooking", "Driving", "Singing"]]),
      t("A big family", "I have two brothers and one sister. My brothers are Tom and Jack. My sister is Emma. My father is a driver and my mother is a nurse.", [["How many brothers does the speaker have?", "Two", "One", "Three"], ["Who is Emma?", "The speaker’s sister", "The speaker’s mother", "The speaker’s cousin"], ["What is the mother’s job?", "Nurse", "Driver", "Teacher"]]),
    ],
    audios: [
      a("This is my aunt Clara. She is thirty-five. She is a doctor. She has two sons.", [["What is Clara’s job?", "Doctor", "Nurse", "Teacher"], ["How many sons does she have?", "Two", "One", "Three"]]),
      a("Who is the woman in the photo? She is my mother. And the man? He is my uncle Mark. He is my mother’s brother.", [["Who is Mark?", "The speaker’s uncle", "The speaker’s father", "The speaker’s brother"], ["Whose brother is Mark?", "The speaker’s mother’s", "The speaker’s father’s", "The speaker’s sister’s"]]),
      a("Do you have any brothers or sisters? Yes, I have one sister. She is eight years old. What is her name? Her name is Lily.", [["How old is the sister?", "Eight", "Six", "Ten"], ["What is her name?", "Lily", "Emma", "Anna"]]),
    ],
  },
  3: {
    gram: [
      g("My friend ___ football on Sundays.", "plays", "play", "playing"), g("We ___ like horror films.", "don’t", "doesn’t", "isn’t"),
      g("___ she go to the gym?", "Does", "Do", "Is"), g("Je ne bois jamais de café : I ___ drink coffee.", "never", "always", "often"),
      g("Can you help ___?", "me", "I", "my"), g("This is Tom. I like ___.", "him", "he", "his"),
      g("We play tennis. Do you want to play with ___?", "us", "we", "our"), g("He ___ his homework every night.", "does", "do", "doing"),
      g("___ you like pizza?", "Do", "Does", "Are"), g("Anna doesn’t ___ sport.", "play", "plays", "playing"),
    ],
    texts: [
      t("My friend Leo", "Leo is my friend. We are classmates. We often play video games after school. He doesn’t like football. He loves music.", [["What do they often do after school?", "Play video games", "Play football", "Do homework"], ["What doesn’t Leo like?", "Football", "Music", "Games"], ["What does Leo love?", "Music", "Football", "Maths"]]),
      t("A message", "Hi Sara! Do you want to see a film on Friday? Let’s meet at the cinema at seven. Call me! Mia", [["What does Mia want to do?", "See a film", "Play tennis", "Have lunch"], ["When do they go?", "On Friday", "On Monday", "On Sunday"], ["What time do they meet?", "At seven", "At six", "At eight"]]),
      t("The neighbour", "My neighbour Mr Lee is very kind. He always says hello. Sometimes he helps me with my bag. I never see him on Sundays.", [["What does Mr Lee always do?", "Says hello", "Helps with the bag", "Plays music"], ["How often does he help with the bag?", "Sometimes", "Always", "Never"], ["When does the speaker never see him?", "On Sundays", "On Mondays", "On Fridays"]]),
    ],
    audios: [
      a("Hi Tom! This is my friend Jenny. Nice to meet you, Jenny! Nice to meet you too. Do you play tennis? Yes, I play every Saturday.", [["Who is Jenny?", "A friend of the speaker", "Tom’s sister", "A teacher"], ["When does Jenny play tennis?", "Every Saturday", "Every Sunday", "Every day"]]),
      a("Do you want to have a coffee after class? I’m sorry, I can’t. I have a meeting. OK, no problem. See you tomorrow!", [["Why can’t the second speaker come?", "A meeting", "Homework", "A film"], ["When do they see each other?", "Tomorrow", "Tonight", "On Friday"]]),
      a("How do you know Paul? We are colleagues. We work in the same office. We often have lunch together.", [["How do they know each other?", "Colleagues", "Neighbours", "Classmates"], ["What do they often do together?", "Have lunch", "Play football", "Watch films"]]),
    ],
  },
  4: {
    gram: [
      g("___ left at the traffic lights.", "Turn", "Turns", "Turning"), g("The bank is ___ the post office and the school.", "between", "behind", "at"),
      g("Go ___ on for two hundred metres.", "straight", "right", "near"), g("The station is ___ the cinema. (en face)", "opposite", "between", "in"),
      g("How do I ___ to the museum?", "get", "go", "take"), g("I ___ the bus to work.", "take", "make", "do"),
      g("Where ___ the nearest pharmacy?", "is", "are", "does"), g("___ the bridge and turn right.", "Cross", "Crosses", "Crossing"),
      g("The park is ___ the library. (derrière)", "behind", "before", "between"), g("She ___ to school by bike.", "goes", "go", "going"),
    ],
    texts: [
      t("Asking the way", "Excuse me, where is the station? Go straight on. Turn left at the traffic lights. The station is on the right, opposite the bank.", [["Where does the person turn left?", "At the traffic lights", "At the bridge", "At the corner"], ["Where is the station?", "Opposite the bank", "Next to the school", "Behind the park"], ["What do you do first?", "Go straight on", "Turn left", "Cross the bridge"]]),
      t("My trip to work", "I go to work by train. I take the half past seven train. It takes forty minutes. Then I walk for ten minutes to my office.", [["How does the speaker go to work?", "By train", "By bus", "By car"], ["How long is the train trip?", "Forty minutes", "Ten minutes", "Seven minutes"], ["How does the speaker get from the station to the office?", "On foot", "By taxi", "By bike"]]),
      t("At the ticket office", "A return ticket to Oxford, please. That is twelve pounds. Which platform? Platform three. The train leaves at ten past nine.", [["Where does the person go?", "Oxford", "London", "Bath"], ["Which platform is it?", "Three", "Two", "Five"], ["What time does the train leave?", "Ten past nine", "Nine o’clock", "Half past nine"]]),
    ],
    audios: [
      a("Excuse me, is there a bank near here? Yes, go straight on and turn right. It’s next to the supermarket.", [["Where is the bank?", "Next to the supermarket", "Opposite the school", "Behind the station"], ["What do you do first?", "Go straight on", "Turn right", "Turn left"]]),
      a("Which bus goes to the airport? Number twenty. How long does it take? About thirty minutes.", [["Which bus goes to the airport?", "Number twenty", "Number twelve", "Number two"], ["How long does the trip take?", "About thirty minutes", "About fifteen minutes", "About an hour"]]),
      a("Is the museum far? No, it’s five minutes on foot. Turn left at the corner. Thank you!", [["How far is the museum?", "Five minutes on foot", "Five minutes by bus", "Ten minutes by car"], ["Where do you turn left?", "At the corner", "At the bridge", "At the lights"]]),
    ],
  },
  5: {
    gram: [
      g("She likes ___ books.", "reading", "read", "reads"), g("He hates ___ early.", "getting up", "get up", "gets up"),
      g("___ you like tea?", "Do", "Does", "Are"), g("Do you like fish? — Yes, I ___.", "do", "am", "like"),
      g("Does she like jazz? — No, she ___.", "doesn’t", "isn’t", "don’t"), g("What’s your ___ colour?", "favourite", "favour", "favourites"),
      g("I prefer tea ___ coffee.", "to", "than", "at"), g("I don’t mind ___.", "waiting", "wait", "to waiting"),
      g("I like jazz. — ___ do I.", "So", "Neither", "Too"), g("I don’t like fish. — ___ do I.", "Neither", "So", "Too"),
    ],
    texts: [
      t("My hobbies", "I love cooking and I like listening to music. I don’t like running. My favourite sport is swimming. I swim twice a week.", [["What doesn’t the speaker like?", "Running", "Cooking", "Music"], ["What is the favourite sport?", "Swimming", "Running", "Tennis"], ["What does the speaker like listening to?", "Music", "The radio", "Podcasts"]]),
      t("Two friends", "Tom likes football but Ben prefers basketball. They both love pizza. Ben hates getting up early, but Tom doesn’t mind.", [["What does Ben prefer?", "Basketball", "Football", "Tennis"], ["What do both boys love?", "Pizza", "Pasta", "Burgers"], ["Who hates getting up early?", "Ben", "Tom", "Both boys"]]),
      t("Weekend plans", "On Saturday I like going to the market. I enjoy buying fruit. On Sunday I prefer staying at home and watching films. My favourite film is a comedy.", [["Where does the speaker like going on Saturday?", "To the market", "To the park", "To the cinema"], ["What does the speaker prefer on Sunday?", "Staying at home", "Going out", "Shopping"], ["What is the favourite film?", "A comedy", "A thriller", "A cartoon"]]),
    ],
    audios: [
      a("Do you like spicy food? No, I don’t. I prefer sweet food. Me too! I love chocolate.", [["What does the second speaker prefer?", "Sweet food", "Spicy food", "Salty food"], ["What does the first speaker love?", "Chocolate", "Cheese", "Fruit"]]),
      a("What’s your favourite sport? I love tennis. Do you play it? Yes, I play every weekend.", [["What is the favourite sport?", "Tennis", "Football", "Golf"], ["How often does the speaker play?", "Every weekend", "Every day", "Never"]]),
      a("I like reading, but I hate watching TV. Really? I prefer TV to books. What about you? I don’t mind either.", [["What does the first speaker hate?", "Watching TV", "Reading", "Cooking"], ["What does the second speaker prefer?", "TV", "Books", "Music"]]),
    ],
  },
  6: {
    gram: [
      g("I’d like ___ water, please.", "some", "any", "an"), g("Do we have ___ milk?", "any", "some", "a"),
      g("There isn’t ___ bread.", "any", "some", "an"), g("___ I have a coffee, please?", "Can", "Do", "Am"),
      g("A glass ___ juice.", "of", "from", "with"), g("I’d like the ___, please. (l’addition)", "bill", "note", "price"),
      g("I ___ some fruit every day.", "eat", "eats", "eating"), g("How ___ sugar do you want?", "much", "many", "some"),
      g("How ___ eggs do you need?", "many", "much", "some"), g("A table ___ two, please.", "for", "to", "at"),
    ],
    texts: [
      t("Breakfast", "I have breakfast at seven. I eat bread with butter and I drink a cup of tea. My brother prefers cereal with milk. He drinks orange juice.", [["What does the speaker drink?", "Tea", "Coffee", "Juice"], ["What does the brother prefer?", "Cereal with milk", "Bread with butter", "Eggs"], ["What does the brother drink?", "Orange juice", "Tea", "Water"]]),
      t("At the restaurant", "A table for two, please. Here is the menu. I’d like the chicken with rice, please. And for me, a salad and some water. The bill, please.", [["How many people are in the group?", "Two", "Three", "Four"], ["What does the first person order?", "Chicken with rice", "A salad", "Fish"], ["What does the second person order?", "A salad and water", "Chicken", "Soup"]]),
      t("Shopping for dinner", "I need some vegetables, some rice and a little oil. We don’t have any eggs. I buy a loaf of bread too.", [["What does the speaker need?", "Vegetables, rice and oil", "Fish and cheese", "Fruit and milk"], ["What don’t they have?", "Eggs", "Rice", "Bread"], ["What else does the speaker buy?", "A loaf of bread", "A bottle of water", "A cake"]]),
    ],
    audios: [
      a("Would you like some tea? Yes, please. With milk or lemon? With lemon, please.", [["What drink does the customer choose?", "Tea", "Coffee", "Water"], ["What goes with the drink?", "Lemon", "Milk", "Sugar"]]),
      a("Can I have a sandwich, please? Cheese or ham? Ham, please. Anything to drink? A glass of water.", [["Which sandwich does the customer choose?", "Ham", "Cheese", "Chicken"], ["What does the customer drink?", "Water", "Juice", "Tea"]]),
      a("Do we have any milk? No, we don’t. We need some. And some bread too. OK, I’m going to the shop.", [["What don’t they have?", "Milk", "Bread", "Eggs"], ["Where is the speaker going?", "To the shop", "To school", "To work"]]),
    ],
  },
  7: {
    gram: [
      g("This shirt is ___ than that one. (cheap)", "cheaper", "more cheap", "cheapest"), g("This bag is ___ than that bag. (expensive)", "more expensive", "expensiver", "most expensive"),
      g("How ___ is this jacket?", "much", "many", "long"), g("Do you have this ___ blue?", "in", "on", "at"),
      g("Those shoes ___ too big.", "are", "is", "am"), g("Can I try it ___?", "on", "in", "at"),
      g("It’s too ___. I need a bigger size.", "small", "big", "long"), g("I’ll ___ it.", "take", "make", "do"),
      g("How much ___ these socks?", "are", "is", "does"), g("The red dress is ___ than the green one. (big)", "bigger", "more big", "biggest"),
    ],
    texts: [
      t("At the clothes shop", "Hello! I’m looking for a jacket. What size are you? Medium. This blue jacket is thirty pounds. Can I try it on? Of course. It’s too big. Do you have a smaller size?", [["What is the customer looking for?", "A jacket", "A dress", "Shoes"], ["How much is the blue jacket?", "Thirty pounds", "Twenty pounds", "Fifty pounds"], ["What is the problem?", "It’s too big", "It’s too small", "It’s too expensive"]]),
      t("Two bags", "The brown bag is twenty pounds. The black bag is fifteen pounds. The black bag is cheaper, but the brown bag is bigger. I take the black bag. I pay by card.", [["Which bag is cheaper?", "The black bag", "The brown bag", "Both bags"], ["Which bag is bigger?", "The brown bag", "The black bag", "Neither"], ["How does the speaker pay?", "By card", "In cash", "By phone"]]),
      t("The receipt", "I buy two T-shirts and a belt. The T-shirts are ten pounds each and the belt is eight pounds. That is twenty-eight pounds. I give the cashier thirty pounds. She gives me my change and a receipt.", [["What does the speaker buy?", "Two T-shirts and a belt", "Two belts and a hat", "A coat and shoes"], ["How much is the total?", "Twenty-eight pounds", "Thirty pounds", "Eighteen pounds"], ["What does the cashier give?", "Change and a receipt", "A bag", "A card"]]),
    ],
    audios: [
      a("How much are these shoes? They are forty pounds. That’s too expensive. These are cheaper, thirty pounds. OK, I’ll take them.", [["How much are the first shoes?", "Forty pounds", "Thirty pounds", "Fourteen pounds"], ["What does the customer decide?", "To buy the cheaper shoes", "Not to buy", "To buy the expensive shoes"]]),
      a("Do you have this dress in red? Yes, we do. What size? Size ten. Here you are. Can I try it on? Yes, the changing rooms are over there.", [["What colour is the dress?", "Red", "Blue", "Green"], ["Where can she try it on?", "In the changing rooms", "At the cash desk", "Outside"]]),
      a("Can I pay by card? Sorry, cash only. Oh, no problem. I have cash. That’s fifteen pounds, please.", [["Can the customer pay by card?", "No", "Yes", "We don’t know"], ["How much is it?", "Fifteen pounds", "Fifty pounds", "Five pounds"]]),
    ],
  },
  8: {
    gram: [
      g("I ___ looking for the station.", "am", "is", "are"), g("She ___ going to the bank.", "is", "are", "am"),
      g("They ___ waiting for the bus.", "are", "is", "am"), g("___ you going to the park?", "Are", "Is", "Do"),
      g("He isn’t ___ the bus.", "taking", "takes", "take"), g("First, go straight. ___, turn left.", "Then", "Before", "Never"),
      g("Sorry, could you ___ that?", "repeat", "repeating", "repeats"), g("I don’t ___. Can you speak slowly?", "understand", "understanding", "understands"),
      g("I ___ the bus every morning. (habitude)", "take", "am taking", "takes"), g("Look! The bus ___.", "is coming", "comes", "come"),
    ],
    texts: [
      t("Lost in town", "Excuse me, I’m lost. I’m looking for the library. Is it far? No, it’s about five minutes away. Go straight, then turn left after the bank.", [["What is the person looking for?", "The library", "The bank", "The station"], ["How far is it?", "Five minutes away", "Fifteen minutes away", "One hour away"], ["Where do you turn left?", "After the bank", "After the school", "After the park"]]),
      t("The wrong bus", "I’m waiting at the bus stop. The number ten bus is arriving. Oh no, I need the number twelve! I’m going the wrong way. I get off at the next stop and change buses.", [["Which bus arrives?", "Number ten", "Number twelve", "Number two"], ["Which bus does the speaker need?", "Number twelve", "Number ten", "Number twenty"], ["What does the speaker do?", "Gets off and changes buses", "Goes home", "Takes a taxi"]]),
      t("A tourist", "A tourist is asking for help. She isn’t speaking English very well. I’m showing her the map. The museum is on the left, opposite the post office.", [["Who is asking for help?", "A tourist", "A teacher", "A driver"], ["What is the speaker showing her?", "The map", "A ticket", "A book"], ["Where is the museum?", "Opposite the post office", "Behind the station", "Next to the bank"]]),
    ],
    audios: [
      a("Excuse me, could you repeat that, please? Of course. Go straight on, then turn right. Thank you very much.", [["What does the first speaker want?", "The directions again", "A taxi", "A map"], ["Where does the second speaker say to turn?", "Right", "Left", "Back"]]),
      a("Does this train stop at Bath? No, you need to change at Reading. Which platform? Platform four. Thanks!", [["Where do you change?", "At Reading", "At Bath", "At Oxford"], ["Which platform is it?", "Four", "Two", "Five"]]),
      a("I’m sorry, I’m late. I’m walking to the station now. The bus is not coming. Don’t worry, the train leaves at six.", [["How is the speaker travelling now?", "On foot", "By bus", "By taxi"], ["When does the train leave?", "At six", "At five", "At seven"]]),
    ],
  },
  9: {
    gram: [
      g("I’m ___ to book a hotel.", "going", "go", "goes"), g("She ___ going to fly to Rome.", "is", "are", "does"),
      g("We ___ going to take the train.", "are", "is", "do"), g("They aren’t going ___ stay long.", "to", "for", "at"),
      g("___ you going to visit the museum?", "Are", "Do", "Is"), g("I’d like a ___ ticket. (aller-retour)", "return", "come back", "twice"),
      g("What time does the flight ___?", "leave", "leaves", "leaving"), g("Is breakfast ___?", "included", "include", "including"),
      g("Could I have the ___, please? (la clé)", "key", "lock", "door"), g("My flight is ___. I wait two hours. (retardé)", "delayed", "late done", "slow"),
    ],
    texts: [
      t("Holiday plans", "We are going to visit Spain in July. We are going to stay in a small hotel near the beach. We are going to fly from London and the flight takes two hours.", [["When are they going?", "In July", "In June", "In May"], ["Where are they going to stay?", "In a hotel near the beach", "In a campsite", "With friends"], ["How long is the flight?", "Two hours", "Four hours", "One hour"]]),
      t("At the hotel", "Good evening. I have a reservation. What is your name? Anna Smith. Yes, a single room for three nights. Breakfast is included. Here is your key. Your room is on the second floor.", [["What kind of room is it?", "A single room", "A double room", "A family room"], ["How many nights?", "Three", "Two", "Five"], ["Where is the room?", "On the second floor", "On the first floor", "On the third floor"]]),
      t("At the airport", "I’m at the airport. My flight to Berlin leaves at ten past eleven from gate twelve. I have one suitcase and a small bag. I show my passport and my boarding pass.", [["Where is the flight going?", "Berlin", "Paris", "Rome"], ["Which gate is it?", "Twelve", "Fourteen", "Two"], ["What does the speaker show?", "Passport and boarding pass", "A ticket and a map", "A hotel key"]]),
    ],
    audios: [
      a("I’d like a one-way ticket to Manchester, please. Today or tomorrow? Tomorrow morning. That’s twenty-five pounds.", [["What kind of ticket does the customer want?", "One-way", "Return", "Weekly"], ["When does the customer travel?", "Tomorrow morning", "Today", "Tomorrow evening"]]),
      a("What time does the train arrive in York? At half past four. And is there a restaurant on the train? Yes, there is.", [["What time does the train arrive?", "Half past four", "Quarter past four", "Half past five"], ["Is there a restaurant on the train?", "Yes", "No", "We don’t know"]]),
      a("I’m going to book a room for two nights. Single or double? Double, please. Is there Wi-Fi? Yes, it’s free.", [["How many nights?", "Two", "Three", "One"], ["What about the Wi-Fi?", "It’s free", "It costs five pounds", "There isn’t any"]]),
    ],
  },
  10: {
    gram: [
      g("She ___ in a bank.", "works", "work", "working"), g("I ___ at nine o’clock.", "start", "starts", "starting"),
      g("He doesn’t ___ on Sundays.", "work", "works", "working"), g("What ___ you do?", "do", "does", "are"),
      g("Where ___ she work?", "does", "do", "is"), g("The meeting is ___ Monday.", "on", "at", "in"),
      g("I start work ___ eight o’clock.", "at", "on", "in"), g("I study maths ___ the morning.", "in", "on", "at"),
      g("My brother is ___ engineer.", "an", "a", "the"), g("We have lunch ___ noon.", "at", "on", "in"),
    ],
    texts: [
      t("My job", "I’m a nurse. I work in a hospital. I start at seven in the morning and I finish at three. I don’t work on weekends. I like my job.", [["Where does the speaker work?", "In a hospital", "In a school", "In a bank"], ["When does the speaker finish?", "At three", "At five", "At seven"], ["Does the speaker work on weekends?", "No", "Yes", "Sometimes"]]),
      t("A student’s day", "Sara is a student at university. She studies English and history. Her classes start at nine. She has lunch at one. On Fridays she doesn’t have classes.", [["What does Sara study?", "English and history", "Maths and art", "Science and music"], ["What time do the classes start?", "Nine", "Eight", "Ten"], ["When does she not have classes?", "On Fridays", "On Mondays", "On Sundays"]]),
      t("An email", "Hello, the meeting is on Tuesday at ten in room four. Please bring your timetable. We finish at noon. Thank you, Mr Green.", [["When is the meeting?", "On Tuesday at ten", "On Monday at ten", "On Tuesday at two"], ["Which room is it?", "Room four", "Room ten", "Room two"], ["What do you bring?", "Your timetable", "Your passport", "Your lunch"]]),
    ],
    audios: [
      a("What do you do? I’m a teacher. Where do you work? In a primary school near my house.", [["What is the speaker’s job?", "Teacher", "Doctor", "Driver"], ["Where does the speaker work?", "In a primary school", "In a hospital", "In an office"]]),
      a("When is your break? At eleven o’clock. And lunch? At half past twelve. Great, see you in the canteen.", [["When is the break?", "At eleven", "At ten", "At twelve"], ["When is lunch?", "At half past twelve", "At one", "At noon"]]),
      a("Do you work or study? I study law at university. How many hours a week? About twenty hours of lessons.", [["What does the speaker study?", "Law", "Art", "Medicine"], ["How many hours of lessons are there?", "About twenty", "About ten", "About fifty"]]),
    ],
  },
  11: {
    gram: [
      g("It’s ___ o’clock.", "seven", "seventh", "sevens"), g("It’s half ___ ten. (9 h 30)", "past", "to", "after"),
      g("It’s quarter ___ eight. (7 h 45)", "to", "past", "at"), g("What’s the weather ___ today?", "like", "likes", "liking"),
      g("It ___ a lot in April.", "rains", "rain", "raining"), g("Look! It ___.", "is snowing", "snows", "snow"),
      g("I get up ___ the morning.", "in", "on", "at"), g("The film starts ___ Friday.", "on", "in", "at"),
      g("I go to bed ___ night.", "at", "in", "on"), g("My birthday is ___ July.", "in", "on", "at"),
    ],
    texts: [
      t("Weather report", "Today is sunny and warm in the south. In the north it is cloudy and windy. Tomorrow it is going to rain in the whole country. The temperature is twenty degrees in London.", [["What’s the weather like in the south?", "Sunny and warm", "Cold and snowy", "Rainy and windy"], ["What is the weather going to be tomorrow?", "Rain", "Snow", "Sun"], ["How warm is London?", "Twenty degrees", "Ten degrees", "Thirty degrees"]]),
      t("My day", "I get up at seven. I have breakfast at half past seven. School starts at quarter to nine. I have lunch at twelve and I go home at four. I go to bed at ten.", [["What time does the speaker get up?", "At seven", "At six", "At eight"], ["When does school start?", "Quarter to nine", "Quarter past nine", "Nine o’clock"], ["When does the speaker go home?", "At four", "At five", "At three"]]),
      t("Seasons", "In winter it is cold and it snows in my town. In spring it is rainy. In summer it is hot and sunny. My favourite season is autumn, because it is warm and the trees are red and yellow.", [["What happens in winter?", "It snows", "It is hot", "It is rainy"], ["What is the weather like in summer?", "Hot and sunny", "Cold and windy", "Rainy"], ["What is the favourite season?", "Autumn", "Summer", "Spring"]]),
    ],
    audios: [
      a("What time is it? It’s quarter past three. Oh no, I’m late! The film starts at half past three.", [["What time is it?", "Quarter past three", "Quarter to three", "Half past three"], ["When does the film start?", "Half past three", "Three o’clock", "Four o’clock"]]),
      a("What’s the weather like today? It’s cold and windy. Is it going to rain? No, but it’s going to snow tomorrow.", [["What is the weather like today?", "Cold and windy", "Hot and sunny", "Warm and rainy"], ["What is going to happen tomorrow?", "Snow", "Rain", "Sun"]]),
      a("What is the date today? It’s the tenth of March. And when is the exam? Next Monday at nine in the morning.", [["What is today’s date?", "The tenth of March", "The ninth of March", "The twelfth of March"], ["When is the exam?", "Next Monday at nine", "Next Tuesday at nine", "Next Monday at ten"]]),
    ],
  },
  12: {
    gram: [
      g("___ you tell me the time, please?", "Could", "Do", "Are"), g("Thank you! — You’re ___.", "welcome", "please", "sorry"),
      g("___ me, where is the station?", "Excuse", "Excuses", "Sorry"), g("I’m tired, ___ I’m going to bed.", "so", "but", "because"),
      g("I like tea, ___ I don’t like coffee.", "but", "so", "because"), g("I stay home ___ it’s raining.", "because", "so", "but"),
      g("How ___? — Fine, thanks.", "are you", "you are", "do you"), g("Nice to ___ you!", "meet", "see", "know"),
      g("See you ___!", "soon", "very", "good"), g("___ I open the window?", "Can", "Am", "Do"),
    ],
    texts: [
      t("At a party", "Hi, I’m Jack. Nice to meet you! I’m Laura. Are you a friend of Tom? Yes, we work together. And you? I’m his neighbour. How’s it going? Great, thanks. The music is good!", [["How does Jack know Tom?", "They work together", "They are neighbours", "They are cousins"], ["How does Laura know Tom?", "She is his neighbour", "She is his sister", "She works with him"], ["What is good at the party?", "The music", "The food", "The weather"]]),
      t("A thank-you note", "Dear Anna, thank you for the lovely dinner. The food was great, but the dessert was my favourite. I’m sorry I left early, because I was tired. See you soon! Emma", [["What does Emma thank Anna for?", "The dinner", "The gift", "The film"], ["What was Emma’s favourite?", "The dessert", "The salad", "The bread"], ["Why did Emma leave early?", "She was tired", "She was ill", "She was late"]]),
      t("On the phone", "Hello, could I speak to Mr Brown, please? I’m sorry, he isn’t here. Can I take a message? Yes, please. Could you ask him to call me? My name is Sam. Of course. Thank you. Goodbye!", [["Who does Sam want to speak to?", "Mr Brown", "Mr Green", "Mrs Brown"], ["Is Mr Brown there?", "No", "Yes", "We don’t know"], ["What does Sam ask?", "To call him", "To send an email", "To come tomorrow"]]),
    ],
    audios: [
      a("Hello! How are you? I’m fine, thanks. And you? Very well, thank you. Have a good day! You too!", [["How is the first speaker?", "Very well", "Tired", "Sad"], ["What do they say at the end?", "Have a good day", "Good night", "Happy birthday"]]),
      a("Excuse me, could you help me? Of course. Can you take a photo of us? Sure. Smile! Thank you very much! You’re welcome.", [["What does the first speaker want?", "A photo", "Directions", "The time"], ["What does the second speaker say at the end?", "You’re welcome", "I’m sorry", "See you soon"]]),
      a("I’m sorry I’m late. That’s OK. The bus was slow because of the rain. Don’t worry. Let’s start!", [["Why is the speaker late?", "The bus was slow", "He was ill", "He forgot"], ["What does the other person say?", "Don’t worry", "You’re late again", "Be quiet"]]),
    ],
  },
};
balanceAll(TEST_PLUS_A1);
