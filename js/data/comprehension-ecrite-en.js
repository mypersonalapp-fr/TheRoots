// The Roots — Compréhension écrite (Anglais, niveau A1).
//
// Les 25 textes fournis par Ashley le 19/09 (voir claude/contenu-comprehension-
// ecrite-a1-textes.md dans le projet Claude), avec 2 questions à RÉPONSE
// LIBRE par texte (et non un QCM — précision d'Ashley le 19/09 au soir :
// elle veut que l'apprenant écrive sa propre réponse "avec sa main et sa
// puissance créative", pas choisir dans une phrase déjà construite).
//
// Chaque question a une petite liste "accepted" de mots/expressions clés
// acceptés : la réponse de l'apprenant est comparée à cette liste (recherche
// souple, insensible à la casse et aux accents) pour juger si le fond est
// compris. Ce n'est pas une IA qui "comprend" la réponse — l'appli n'a pas
// de backend/IA branché — mais ça permet une vraie zone de texte libre avec
// une correction automatique raisonnable, combinée à une vraie vérification
// orthographe/grammaire (LanguageTool, voir comprehension.js) sur ce que
// l'apprenant a écrit.

export const COMPREHENSION_ECRITE_EN = [
  { id: 1, title: "My Family", body: "My name is Emma. I am twenty-four years old. I live in a small apartment with my family. I have one brother and one sister. My brother is fifteen and my sister is ten. My mother works in a school and my father works in a shop. We have a small dog called Max. At the weekend, we like spending time together. On Saturday, we usually have lunch at home. In the afternoon, we sometimes go to the park. On Sunday, we visit my grandmother. I love my family because we laugh a lot and help each other.",
    questions: [
      { q: "How old is Emma?", accepted: ["twenty-four", "24"] },
      { q: "What do they do on Sunday?", accepted: ["visit", "grandmother", "grandma"] },
    ] },
  { id: 2, title: "My Daily Routine", body: "I get up at seven o'clock every morning. First, I take a shower and get dressed. Then I have breakfast. I usually eat bread, fruit and yogurt, and I drink a glass of milk. At eight o'clock, I leave home and go to work by bus. I work from nine to five. At lunch, I eat with my colleagues. When I come home, I cook dinner and relax for a little while. In the evening, I sometimes watch television or read a book. I usually go to bed at eleven o'clock.",
    questions: [
      { q: "What time does the writer get up?", accepted: ["seven", "7"] },
      { q: "How does the writer go to work?", accepted: ["bus"] },
    ] },
  { id: 3, title: "My House", body: "I live in a small house near the city centre. My house has two bedrooms, a bathroom, a kitchen and a living room. My bedroom is my favourite room. It has a big window, a bed and a desk. There are some books on the desk. The kitchen is next to the living room. We have a small table where we eat breakfast. Behind the house, there is a garden. In the garden, there are flowers and a tree. I like my house because it is quiet and comfortable.",
    questions: [
      { q: "How many bedrooms does the house have?", accepted: ["two", "2"] },
      { q: "What is behind the house?", accepted: ["garden"] },
    ] },
  { id: 4, title: "At the Supermarket", body: "Today is Saturday and I need to go to the supermarket. I have a short shopping list. I need milk, eggs, bread, apples, rice and chicken. The supermarket is near my home, so I walk there. First, I take a basket. I find the fruit and vegetables. Then I go to the dairy section for the milk and eggs. The bread is near the entrance. Finally, I buy the chicken and rice. At the checkout, I pay by card. I put everything in my bags and walk home.",
    questions: [
      { q: "What day does the writer go shopping?", accepted: ["saturday"] },
      { q: "How does the writer pay?", accepted: ["card"] },
    ] },
  { id: 5, title: "My Best Friend", body: "My best friend's name is Lucas. We met at school when we were ten years old. Now we are both twenty-five. Lucas is tall and has short black hair. He is funny and friendly. We have many things in common. We both like music, football and travelling. We often meet on Saturday afternoon. Sometimes we go to a café and talk for two hours. Sometimes we watch a film at my house. Lucas is a good friend because he always listens to me and helps me when I have a problem.",
    questions: [
      { q: "Where did they meet?", accepted: ["school"] },
      { q: "When do they usually meet?", accepted: ["saturday afternoon", "saturday"] },
    ] },
  { id: 6, title: "A Day at School", body: "Anna is a student. She goes to school from Monday to Friday. Her classes start at eight thirty in the morning. On Monday, she has English, mathematics and science. Her favourite subject is English because she likes learning new words. At twelve o'clock, she has lunch with her friends. In the afternoon, she has history and art. School finishes at four o'clock. After school, Anna goes home. She does her homework before dinner. In the evening, she prepares her school bag for the next day.",
    questions: [
      { q: "What is Anna's favourite subject?", accepted: ["english"] },
      { q: "What time does school finish?", accepted: ["four", "4"] },
    ] },
  { id: 7, title: "My Favourite Food", body: "My favourite food is pasta. I like it because it is easy to cook and very tasty. I usually make pasta with tomato sauce and vegetables. Sometimes I add chicken. My mother makes a delicious pasta dish with mushrooms. I also like pizza, rice and soup. For breakfast, I prefer bread and fruit. I do not drink coffee, but I like tea. I drink a lot of water during the day. At the weekend, I sometimes go to an Italian restaurant with my friends and order pasta.",
    questions: [
      { q: "What is the writer's favourite food?", accepted: ["pasta"] },
      { q: "Does the writer drink coffee?", accepted: ["no", "doesn't drink coffee", "does not drink coffee"] },
    ] },
  { id: 8, title: "The Weather Today", body: "Today the weather is very nice. It is sunny and warm. The sky is blue and there are only a few clouds. I want to go outside, so I put on a T-shirt and jeans. I take my sunglasses with me. In the afternoon, the weather changes. It becomes cloudy and windy. I go home before it starts to rain. In the evening, it is cold. Tomorrow, I want to check the weather before I leave home. I hope it is sunny again because I have plans to go to the park.",
    questions: [
      { q: "What is the weather like in the morning?", accepted: ["sunny", "warm"] },
      { q: "What happens in the afternoon?", accepted: ["cloudy", "windy"] },
    ] },
  { id: 9, title: "My Weekend", body: "I usually have a quiet weekend. On Saturday morning, I clean my apartment and do the shopping. In the afternoon, I meet my friends. We often have coffee together. On Saturday evening, I sometimes go to the cinema. On Sunday morning, I stay at home and have a late breakfast. In the afternoon, I call my parents. We talk about our week. In the evening, I prepare my clothes and my bag for Monday. I like weekends because I can rest and spend time with people I love.",
    questions: [
      { q: "What does the writer do on Saturday morning?", accepted: ["clean", "shopping", "cleans", "shop"] },
      { q: "Who does the writer call on Sunday afternoon?", accepted: ["parents"] },
    ] },
  { id: 10, title: "A Trip to Paris", body: "Last Saturday, I went to Paris with my sister. We took the train in the morning. First, we visited the Eiffel Tower. We took many photos. Then we walked along the Seine. At lunchtime, we ate sandwiches in a small café. In the afternoon, we visited a museum. The museum was very big, so we spent three hours there. In the evening, we walked around the city and looked at the lights. We were tired when we went home, but we had a wonderful day.",
    questions: [
      { q: "How did they travel to Paris?", accepted: ["train"] },
      { q: "What did they visit first?", accepted: ["eiffel tower", "eiffel"] },
    ] },
  { id: 11, title: "My Job", body: "I work in an office in the city. I start work at nine o'clock. My job is to help people and organise documents. I use a computer every day. I also answer emails and speak to my colleagues. I have a lunch break at one o'clock. I usually bring my lunch from home. My work finishes at five thirty. I like my job because I work with nice people. Some days are very busy, but other days are quiet. When I finish work, I go home by train.",
    questions: [
      { q: "What time does the writer start work?", accepted: ["nine", "9"] },
      { q: "How does the writer go home?", accepted: ["train"] },
    ] },
  { id: 12, title: "My Morning", body: "My morning starts at six thirty. My alarm rings and I get out of bed. I open the window and make my bed. Then I go to the bathroom. After my shower, I get dressed. I go to the kitchen and prepare breakfast. I usually eat cereal and a banana. I also drink a glass of milk. Before leaving home, I check my phone and my bag. I leave at seven thirty. The bus stop is five minutes from my house. I arrive at work at eight thirty.",
    questions: [
      { q: "What does the writer eat for breakfast?", accepted: ["cereal", "banana"] },
      { q: "What time does the writer leave home?", accepted: ["seven thirty", "7:30", "half past seven"] },
    ] },
  { id: 13, title: "At the Restaurant", body: "It is Friday evening and Sarah goes to a restaurant with her friend Tom. They sit at a table near the window. The waiter gives them the menu. Sarah orders vegetable soup and chicken with rice. Tom orders a salad and a pizza. They both drink water. The food arrives after fifteen minutes. They enjoy their meal and talk about their plans for the weekend. After dinner, they order two coffees. The bill is thirty-five euros. Tom pays the bill and Sarah thanks him.",
    questions: [
      { q: "What does Sarah order?", accepted: ["soup", "chicken", "vegetable soup"] },
      { q: "Who pays the bill?", accepted: ["tom"] },
    ] },
  { id: 14, title: "My Hobbies", body: "I have several hobbies. My favourite hobby is reading. I like reading books in the evening before I go to bed. I also enjoy listening to music. My favourite music is pop music. At the weekend, I sometimes play tennis with my brother. I am not very good at tennis, but it is fun. I also like taking photos when I travel. I have many photos of cities, buildings and nature. My hobbies help me relax after a busy week.",
    questions: [
      { q: "What is the writer's favourite hobby?", accepted: ["reading"] },
      { q: "Who does the writer play tennis with?", accepted: ["brother"] },
    ] },
  { id: 15, title: "A New Neighbour", body: "There is a new person in my building. Her name is Maria. She moved into the apartment next to mine last week. Maria is from Spain, but she lives in France now. She is friendly and speaks French and Spanish. Yesterday, we met in the lift. We talked for a few minutes. Maria told me that she works in a hospital. She likes the neighbourhood because there are many shops and a nice park. I invited her for coffee next Saturday. She said yes.",
    questions: [
      { q: "Where is Maria from?", accepted: ["spain"] },
      { q: "Where does Maria work?", accepted: ["hospital"] },
    ] },
  { id: 16, title: "Going to the Doctor", body: "John does not feel well today. He has a headache and a sore throat. He calls his doctor in the morning. The doctor has an appointment at ten thirty. John goes to the doctor's office by bus. The doctor asks him some questions and checks his temperature. John does not have a fever. The doctor tells him to rest and drink plenty of water. John goes to the pharmacy after the appointment. Then he goes home and stays in bed for the afternoon.",
    questions: [
      { q: "What symptoms does John have?", accepted: ["headache", "sore throat"] },
      { q: "Where does John go after the appointment?", accepted: ["pharmacy"] },
    ] },
  { id: 17, title: "My Favourite Place", body: "My favourite place is the local park. It is ten minutes from my house. The park is large and green. There are many trees, flowers and benches. There is also a small lake with ducks. I often go there after work. Sometimes I walk around the lake. Sometimes I sit on a bench and read. At the weekend, many families come to the park. Children play and ride their bikes. I like this place because it is peaceful and I can forget about work for a while.",
    questions: [
      { q: "How far is the park from home?", accepted: ["ten minutes", "10 minutes"] },
      { q: "What is in the park besides trees and flowers?", accepted: ["lake", "ducks"] },
    ] },
  { id: 18, title: "A Birthday Party", body: "Yesterday was my sister's birthday. She was twenty years old. We had a small party at home. My parents prepared food and drinks. I decorated the living room with balloons. At seven o'clock, our friends arrived. We listened to music, talked and played games. My sister received some nice presents. At eight thirty, we brought the birthday cake. It was chocolate cake with strawberries. Everyone sang 'Happy Birthday'. We ate the cake and took photos. The party finished at eleven o'clock. We had a great evening.",
    questions: [
      { q: "How old did the sister turn?", accepted: ["twenty", "20"] },
      { q: "What kind of cake did they have?", accepted: ["chocolate", "strawberries"] },
    ] },
  { id: 19, title: "My Clothes", body: "I usually wear comfortable clothes. For work, I often wear black trousers, a white shirt and comfortable shoes. When the weather is cold, I wear a coat and a scarf. At the weekend, I prefer jeans and a T-shirt. I have many pairs of shoes, but my favourite pair is white trainers. I like simple colours such as black, white, blue and grey. I do not like very bright clothes. Before I leave home, I always look in the mirror to check my clothes.",
    questions: [
      { q: "What does the writer wear for work?", accepted: ["black trousers", "white shirt", "trousers"] },
      { q: "What is the writer's favourite pair of shoes?", accepted: ["white trainers", "trainers"] },
    ] },
  { id: 20, title: "The Bus to Work", body: "Every morning, I take the number 24 bus to work. The bus stop is near my home. I usually wait for about five minutes. The bus is often full in the morning. I usually stand near the door. The journey takes about thirty minutes. I listen to music on my phone during the journey. Sometimes I read a book. There are many people on the bus: students, workers and older people. I get off at the city centre and walk for five minutes to my office.",
    questions: [
      { q: "Which bus does the writer take?", accepted: ["24", "twenty-four", "number 24"] },
      { q: "How long is the journey?", accepted: ["thirty minutes", "30 minutes"] },
    ] },
  { id: 21, title: "My Holiday", body: "Last summer, I went on holiday to Spain with my family. We stayed in a small hotel near the beach. Every morning, we had breakfast at the hotel. Then we went to the beach. The weather was hot and sunny. We swam in the sea and played games on the sand. In the evening, we visited different restaurants. We ate fish, vegetables and rice. One day, we visited a beautiful old town. I took many photos. It was a relaxing holiday and I would like to go back one day.",
    questions: [
      { q: "Where did the family go on holiday?", accepted: ["spain"] },
      { q: "Where did they stay?", accepted: ["hotel"] },
    ] },
  { id: 22, title: "My Phone", body: "I use my phone every day. I use it to call my family and friends. I also send messages and emails. In the morning, I use my phone as an alarm clock. During the day, I sometimes use it to check the weather or find a place on a map. I like taking photos with my phone. In the evening, I listen to music or watch short videos. I try not to use my phone too much before bed because I want to sleep well.",
    questions: [
      { q: "What does the writer use the phone for in the morning?", accepted: ["alarm", "alarm clock"] },
      { q: "Why does the writer avoid the phone before bed?", accepted: ["sleep", "sleep well"] },
    ] },
  { id: 23, title: "At the Train Station", body: "Today I am travelling to Lyon. My train leaves at nine fifteen. I arrive at the station at eight thirty because I want to have enough time. I look at the information board and find my train. It leaves from platform six. I buy a bottle of water and wait near the platform. At nine o'clock, the train arrives. I find my seat near the window and put my bag above my seat. The train leaves on time. I look outside and enjoy the journey.",
    questions: [
      { q: "What time does the train leave?", accepted: ["nine fifteen", "9:15"] },
      { q: "Which platform does the train leave from?", accepted: ["six", "platform six", "6"] },
    ] },
  { id: 24, title: "Helping a Friend", body: "My friend Lisa has a busy week. She has a lot of work and no time to go shopping. I want to help her. On Saturday morning, I go to the supermarket for her. She gives me a list of things she needs: vegetables, fruit, bread, milk and pasta. I buy everything and take the bags to her house. Lisa is very happy. In the afternoon, we have a cup of tea together. I like helping my friends when they need me.",
    questions: [
      { q: "Why does the writer go shopping for Lisa?", accepted: ["busy", "work"] },
      { q: "What do they do in the afternoon?", accepted: ["tea", "cup of tea"] },
    ] },
  { id: 25, title: "My Goals", body: "I have some simple goals for this year. First, I want to improve my English. I want to learn new words and speak English more often. I also want to read one book every month. Another goal is to do more sport. I want to walk more and exercise three times a week. I also want to spend more time with my family. At the end of the year, I want to look back and see my progress. I know that small steps can help me reach my goals.",
    questions: [
      { q: "How often does the writer want to exercise?", accepted: ["three times a week", "3 times a week"] },
      { q: "How many books does the writer want to read per month?", accepted: ["one", "1"] },
    ] },
];
