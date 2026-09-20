// The Roots — Compréhension écrite (Anglais, niveau A2).
//
// Les 20 textes fournis par Ashley le 19/09 (documents authentiques courts :
// carte postale, petite annonce, recette, e-mail professionnel, article,
// programme de cinéma, article de blog, offre d'emploi, conversation,
// notice de médicament, faire-part, brochure, article santé, avis de
// livraison, fiche produit, météo, annonce d'objet perdu, horoscope, règles
// de tri, entretien d'embauche), avec 3 questions à RÉPONSE LIBRE par texte
// — même principe que pour l'A1 (voir comprehension-ecrite-en.js) :
// - "accepted" : quelques mots/expressions clés attendus (correspondance
//   directe, la plus fiable) ;
// - "answerSentence" : la phrase du texte qui contient la réponse, utilisée
//   en secours (voir comprehension.js/contentMatches) — si la réponse de
//   l'apprenant partage au moins un mot important de cette phrase, elle est
//   acceptée, même si ce n'est pas un des mots-clés pré-listés.
// La vérification orthographe/grammaire (LanguageTool) reste séparée, voir
// comprehension.js.
//
// Les corps de texte ("body") contiennent un peu de mise en forme HTML
// simple (<strong>, <br>, <ul>/<li>, <ol>/<li>) pour rester lisibles quand
// le document d'origine est une carte, un e-mail, une recette ou une liste
// à puces, plutôt qu'un simple paragraphe comme en A1.

export const COMPREHENSION_ECRITE_A2_EN = [
  { id: 1, title: "A Holiday Postcard",
    body: "Hi Sarah,<br>We arrived safely in London! The hotel is very nice and our room has a great view of the street. Yesterday, we visited the British Museum and in the evening, we had fish and chips at a traditional pub. Tomorrow, we are going to take a red double-decker bus tour. The weather is cool and sunny. See you soon!<br>Love,<br>Mark",
    questions: [
      { q: "Where are Mark and Sarah staying?", accepted: ["hotel", "london"], answerSentence: "The hotel is very nice and our room has a great view of the street." },
      { q: "What did they do yesterday evening?", accepted: ["fish and chips", "pub"], answerSentence: "in the evening, we had fish and chips at a traditional pub." },
      { q: "What are they planning to do tomorrow?", accepted: ["bus tour", "double-decker"], answerSentence: "Tomorrow, we are going to take a red double-decker bus tour." },
    ] },
  { id: 2, title: "A Flat Rental Advertisement",
    body: "For Rent – Furnished Studio Apartment in Manchester<br>A bright and quiet 30 sqm studio on the 2nd floor with a lift. Close to the city centre and the university.<br>Includes a small kitchen (fridge, microwave, stove), private bathroom, and free Wi-Fi.<br>Rent: £700 per month (bills included). Available from next month.<br>Call 07700 900123 after 5 PM.",
    questions: [
      { q: "How big is the apartment?", accepted: ["30 sqm", "30"], answerSentence: "A bright and quiet 30 sqm studio on the 2nd floor with a lift." },
      { q: "What is included in the monthly rent of £700?", accepted: ["bills", "bills included"], answerSentence: "Rent: £700 per month (bills included)." },
      { q: "When can potential tenants call?", accepted: ["after 5 pm", "after 5"], answerSentence: "Call 07700 900123 after 5 PM." },
    ] },
  { id: 3, title: "A Quick Pancake Recipe",
    body: "<strong>Easy American Pancakes (Serves 4)</strong><br><strong>Ingredients:</strong><ul><li>200g flour</li><li>1 tablespoon sugar</li><li>1 teaspoon baking powder</li><li>1 egg</li><li>250ml milk</li></ul><strong>Instructions:</strong><ol><li>Mix the flour, sugar, and baking powder in a large bowl.</li><li>In a separate cup, beat the egg and mix it with the milk.</li><li>Pour the liquid into the dry ingredients and stir until smooth.</li><li>Cook small portions in a hot pan with a little butter until golden brown.</li></ol>",
    questions: [
      { q: "How many people does this recipe serve?", accepted: ["four", "4"], answerSentence: "Easy American Pancakes (Serves 4)" },
      { q: "What should you mix in a separate cup?", accepted: ["egg", "milk"], answerSentence: "In a separate cup, beat the egg and mix it with the milk." },
      { q: "What do you put in the pan before cooking the pancakes?", accepted: ["butter"], answerSentence: "Cook small portions in a hot pan with a little butter until golden brown." },
    ] },
  { id: 4, title: "A Professional Email",
    body: "<strong>From:</strong> david.smith@company.co.uk<br><strong>To:</strong> marketing.team@company.co.uk<br><strong>Subject:</strong> Team Meeting on Thursday<br><br>Dear team,<br>Just a quick reminder that our monthly meeting will take place this Thursday at 10:00 AM in Meeting Room B (second floor).<br>Main topics: Review of last month's sales and preparation for the upcoming summer campaign. Please bring your notes and updated reports.<br>Best regards,<br>David Smith",
    questions: [
      { q: "When is the team meeting scheduled?", accepted: ["thursday", "10:00 am"], answerSentence: "our monthly meeting will take place this Thursday at 10:00 AM in Meeting Room B (second floor)." },
      { q: "Where will the meeting take place?", accepted: ["meeting room b", "second floor"], answerSentence: "our monthly meeting will take place this Thursday at 10:00 AM in Meeting Room B (second floor)." },
      { q: "What are the two main topics on the agenda?", accepted: ["sales", "summer campaign"], answerSentence: "Main topics: Review of last month's sales and preparation for the upcoming summer campaign." },
    ] },
  { id: 5, title: "A Dog's Best Rescue",
    body: "<strong>BRISTOL – A Dog's Best Rescue</strong><br>Yesterday afternoon, a black labrador named Charlie became a local hero. While walking by a local river with his owner, Charlie jumped into the water and safely brought back a smartphone that had accidentally fallen in. The owner was very happy because all her photos were on it. Spectators clapped for the clever dog, proving once again that dogs are truly man's best friend!",
    questions: [
      { q: "What is the name of the dog?", accepted: ["charlie"], answerSentence: "a black labrador named Charlie became a local hero." },
      { q: "What object did the dog rescue from the river?", accepted: ["smartphone", "phone"], answerSentence: "Charlie jumped into the water and safely brought back a smartphone that had accidentally fallen in." },
      { q: "Why was the owner especially happy?", accepted: ["photos"], answerSentence: "The owner was very happy because all her photos were on it." },
    ] },
  { id: 6, title: "A Cinema Schedule",
    body: "<strong>Grand Cinema – Schedule for Friday</strong><ul><li>\"The Great Adventure\" (Family Comedy): 2:00 PM, 6:30 PM, 9:00 PM.</li><li>\"Mystery in Edinburgh\" (Crime Thriller): 4:15 PM, 8:45 PM.</li><li>\"Space Explorers\" (Animated Movie): 11:00 AM, 3:15 PM.</li></ul>Ticket prices: Adult £10 / Student £7.50 / Children under 12 £5.",
    questions: [
      { q: "Which film is an animated movie?", accepted: ["space explorers"], answerSentence: "\"Space Explorers\" (Animated Movie): 11:00 AM, 3:15 PM." },
      { q: "How much does a student ticket cost?", accepted: ["7.50", "£7.50"], answerSentence: "Ticket prices: Adult £10 / Student £7.50 / Children under 12 £5." },
      { q: "At what times can you watch \"Mystery in Edinburgh\"?", accepted: ["4:15", "8:45"], answerSentence: "\"Mystery in Edinburgh\" (Crime Thriller): 4:15 PM, 8:45 PM." },
    ] },
  { id: 7, title: "A Travel Blog Post",
    body: "Hello fellow travelers!<br>Today I want to share my weekend trip to Oxford. It is a stunning university city with amazing architecture. I loved walking through the old college courtyards and visiting the famous Bodleian Library. If you ever visit Oxford, I strongly recommend renting a traditional wooden boat (a punt) to go down the river. It is a wonderful and relaxing experience!",
    questions: [
      { q: "Which city is the blog post about?", accepted: ["oxford"], answerSentence: "Today I want to share my weekend trip to Oxford." },
      { q: "Name one historic place the author visited.", accepted: ["bodleian library", "college courtyards"], answerSentence: "I loved walking through the old college courtyards and visiting the famous Bodleian Library." },
      { q: "What activity does the author recommend trying on the river?", accepted: ["punt", "wooden boat"], answerSentence: "I strongly recommend renting a traditional wooden boat (a punt) to go down the river." },
    ] },
  { id: 8, title: "A Simple Job Offer",
    body: "<strong>Wanted: Part-time Barista</strong><br>The \"Morning Cup\" cafe in downtown Liverpool is looking for a friendly and energetic barista to work every weekend (Saturday and Sunday).<br>Requirements: 6 months of customer service experience, basic knowledge of coffee making, and good conversational skills.<br>Hours: 8:00 AM to 2:00 PM.<br>Send your CV to jobs@morningcup.co.uk",
    questions: [
      { q: "What days of the week does this job require?", accepted: ["saturday and sunday", "weekend"], answerSentence: "looking for a friendly and energetic barista to work every weekend (Saturday and Sunday)." },
      { q: "What working hours are listed?", accepted: ["8:00 am to 2:00 pm"], answerSentence: "Hours: 8:00 AM to 2:00 PM." },
      { q: "How should interested candidates apply?", accepted: ["send your cv", "cv"], answerSentence: "Send your CV to jobs@morningcup.co.uk" },
    ] },
  { id: 9, title: "Making Weekend Plans",
    body: "<strong>Emma:</strong> Hey guys! Do you want to come over to my place this Saturday for a movie night? I will order some pizzas.<br><strong>Liam:</strong> Sounds awesome! Count me in. What time should I arrive?<br><strong>Emma:</strong> Around 7:30 PM works for me.<br><strong>Chloe:</strong> Oh, I'd love to, but I'm visiting my grandparents this weekend. Have fun without me!",
    questions: [
      { q: "What event is Emma organizing?", accepted: ["movie night"], answerSentence: "Do you want to come over to my place this Saturday for a movie night?" },
      { q: "Who is able to attend the gathering?", accepted: ["liam"], answerSentence: "Sounds awesome! Count me in." },
      { q: "Why can't Chloe come?", accepted: ["grandparents"], answerSentence: "I'm visiting my grandparents this weekend." },
    ] },
  { id: 10, title: "Medicine Instructions",
    body: "<strong>\"CoughRelief\" Syrup – Usage Guidelines</strong><ul><li>Purpose: Temporary relief of dry coughs and sore throats.</li><li>Dosage: Adults and teenagers over 12: 2 teaspoons, 3 times a day. Children aged 6 to 12: 1 teaspoon, twice a day.</li><li>Warnings: Do not use for more than 5 days without consulting a doctor. Store in a cool, dry place away from children.</li></ul>",
    questions: [
      { q: "What is the syrup used for?", accepted: ["dry coughs", "sore throats"], answerSentence: "Purpose: Temporary relief of dry coughs and sore throats." },
      { q: "How much should a teenager take?", accepted: ["2 teaspoons"], answerSentence: "Adults and teenagers over 12: 2 teaspoons, 3 times a day." },
      { q: "What is the maximum number of days you should use it without a doctor's advice?", accepted: ["5", "five"], answerSentence: "Do not use for more than 5 days without consulting a doctor." },
    ] },
  { id: 11, title: "A Wedding Invitation",
    body: "Dear friends and family,<br>We are thrilled to invite you to celebrate our wedding on Saturday, August 15th.<br>The wedding ceremony will take place at St. Luke's Church at 2:00 PM, followed by a reception dinner at Green Valley Farm at 6:00 PM.<br>Please let us know if you can make it by July 1st.<br>Best wishes,<br>Jessica and Thomas",
    questions: [
      { q: "When is the wedding taking place?", accepted: ["august 15", "august 15th"], answerSentence: "We are thrilled to invite you to celebrate our wedding on Saturday, August 15th." },
      { q: "Where will the ceremony be held?", accepted: ["st. luke's church", "church"], answerSentence: "The wedding ceremony will take place at St. Luke's Church at 2:00 PM, followed by a reception dinner at Green Valley Farm at 6:00 PM." },
      { q: "What is the deadline to reply?", accepted: ["july 1", "july 1st"], answerSentence: "Please let us know if you can make it by July 1st." },
    ] },
  { id: 12, title: "Museum Information",
    body: "<strong>National Science Museum</strong><br>Opening Hours: Tuesday to Sunday from 10:00 AM to 5:00 PM (Closed on Mondays).<br>Admission Fees:<ul><li>General Admission: £15</li><li>Concession (Students and seniors over 65): £10</li><li>Children under 10: Free</li></ul>Address: 45 Museum Road, London.",
    questions: [
      { q: "On which day is the museum closed?", accepted: ["monday", "mondays"], answerSentence: "Opening Hours: Tuesday to Sunday from 10:00 AM to 5:00 PM (Closed on Mondays)." },
      { q: "How much does a student pay to enter?", accepted: ["10", "£10"], answerSentence: "Concession (Students and seniors over 65): £10" },
      { q: "Do young children under 10 have to pay?", accepted: ["no", "free"], answerSentence: "Children under 10: Free" },
    ] },
  { id: 13, title: "Why Cycling is Good for You",
    body: "<strong>Why Cycling is Good for You</strong><br>Cycling is a fantastic way to stay healthy while helping the environment. Riding a bike for just 20 minutes a day can improve your heart health, boost your mood, and build leg strength. You don't need an expensive bike or a gym membership—even riding to work or school a few times a week makes a big difference to your daily fitness level!",
    questions: [
      { q: "How many minutes of daily cycling does the article suggest?", accepted: ["20", "20 minutes"], answerSentence: "Riding a bike for just 20 minutes a day can improve your heart health, boost your mood, and build leg strength." },
      { q: "Mention two health benefits listed in the text.", accepted: ["heart health", "mood", "leg strength"], answerSentence: "Riding a bike for just 20 minutes a day can improve your heart health, boost your mood, and build leg strength." },
      { q: "What simple way can people incorporate cycling into their routine?", accepted: ["riding to work or school", "ride to work"], answerSentence: "even riding to work or school a few times a week makes a big difference to your daily fitness level!" },
    ] },
  { id: 14, title: "A Delivery Notice",
    body: "<strong>Parcel Delivery Notice</strong><br>Dear Customer,<br>We tried to deliver your package today at 10:30 AM, but no one was home.<br>Your package is now ready for pick-up tomorrow after 1:00 PM at the Central Post Office (14 Market Street).<br>Please bring this notice and a valid photo ID to collect your item.<br>Delivery Agent, Robert.",
    questions: [
      { q: "Why wasn't the package delivered?", accepted: ["no one was home"], answerSentence: "We tried to deliver your package today at 10:30 AM, but no one was home." },
      { q: "Where can the customer pick it up?", accepted: ["central post office", "post office"], answerSentence: "Your package is now ready for pick-up tomorrow after 1:00 PM at the Central Post Office (14 Market Street)." },
      { q: "What two things must the customer bring to the post office?", accepted: ["notice", "photo id"], answerSentence: "Please bring this notice and a valid photo ID to collect your item." },
    ] },
  { id: 15, title: "An Online Shopping Product Description",
    body: "<strong>Wireless Bluetooth Earbuds</strong><ul><li>Battery Life: Up to 6 hours of continuous playback (plus 18 extra hours with the charging case).</li><li>Features: Sweat-resistant design, built-in microphone for hands-free phone calls, touch controls.</li><li>Colors: Matte Black, Pearl White, Rose Gold.</li><li>Price: £29.99 (Free standard shipping on all orders).</li></ul>",
    questions: [
      { q: "What is the total maximum battery life including the charging case?", accepted: ["24", "24 hours"], answerSentence: "Battery Life: Up to 6 hours of continuous playback (plus 18 extra hours with the charging case)." },
      { q: "Which colors are available for the earbuds?", accepted: ["matte black", "pearl white", "rose gold"], answerSentence: "Colors: Matte Black, Pearl White, Rose Gold." },
      { q: "How much do you have to pay for shipping?", accepted: ["free"], answerSentence: "Price: £29.99 (Free standard shipping on all orders)." },
    ] },
  { id: 16, title: "A Weekend Weather Forecast",
    body: "<strong>Weather Update for Scotland</strong><br>Saturday: The weekend starts off bright with plenty of sunshine across most areas. Temperatures will reach a pleasant 20°C in Edinburgh and Glasgow. A great day to be outside!<br>Sunday: Conditions will change quickly. Heavy rain and strong winds are expected to arrive from the west by midday. Make sure to pack your umbrellas if you are going out.",
    questions: [
      { q: "What will the weather be like on Saturday?", accepted: ["bright", "sunshine", "sunny"], answerSentence: "The weekend starts off bright with plenty of sunshine across most areas." },
      { q: "What temperature is expected in Glasgow on Saturday?", accepted: ["20", "20°c"], answerSentence: "Temperatures will reach a pleasant 20°C in Edinburgh and Glasgow." },
      { q: "What kind of weather is predicted for Sunday afternoon?", accepted: ["heavy rain", "strong winds"], answerSentence: "Heavy rain and strong winds are expected to arrive from the west by midday." },
    ] },
  { id: 17, title: "A Lost Item Post",
    body: "<strong>Author:</strong> Nick99<br><strong>Subject:</strong> Lost keys near the central park playground<br>Hello neighbors,<br>Yesterday afternoon around 3:00 PM, I lost a set of keys with a blue leather keychain near the central park playground. If anyone happens to find them, please reply to this post or hand them in to the park's information office. There is a small cash reward!",
    questions: [
      { q: "What did Nick lose?", accepted: ["keys", "set of keys"], answerSentence: "I lost a set of keys with a blue leather keychain near the central park playground." },
      { q: "Where did he likely lose them?", accepted: ["central park playground", "playground"], answerSentence: "I lost a set of keys with a blue leather keychain near the central park playground." },
      { q: "How can someone return them to him?", accepted: ["reply to this post", "hand them in"], answerSentence: "please reply to this post or hand them in to the park's information office." },
    ] },
  { id: 18, title: "A Weekly Horoscope",
    body: "<strong>Gemini – Your Weekly Horoscope</strong><br><strong>Career:</strong> Exciting new challenges are heading your way. Don't be afraid to share your creative ideas during Thursday's meeting—your manager will be very supportive.<br><strong>Love:</strong> A peaceful and relaxed period. If you are in a relationship, you will enjoy cozy evenings together. Single? A fun casual outing with friends could bring a nice surprise.<br><strong>Health:</strong> Remember to get enough sleep and cut down on screen time before bed.",
    questions: [
      { q: "When should Geminis share their creative ideas at work?", accepted: ["thursday"], answerSentence: "Don't be afraid to share your creative ideas during Thursday's meeting—your manager will be very supportive." },
      { q: "What is predicted for single Geminis?", accepted: ["fun casual outing", "surprise"], answerSentence: "Single? A fun casual outing with friends could bring a nice surprise." },
      { q: "What health tip does the horoscope give for bedtime?", accepted: ["sleep", "screen time"], answerSentence: "Remember to get enough sleep and cut down on screen time before bed." },
    ] },
  { id: 19, title: "Neighborhood Recycling Guidelines",
    body: "<strong>Local Recycling Rules</strong><ul><li>Green Bin: Glass bottles and jars only (please remove caps and corks).</li><li>Blue Bin: Paper, cardboard boxes, newspapers, and magazines (do not pack tightly, place loosely).</li><li>Black Bin: General household waste and non-recyclable items (food scraps, broken items).</li></ul>",
    questions: [
      { q: "What item goes into the green bin?", accepted: ["glass", "glass bottles and jars"], answerSentence: "Green Bin: Glass bottles and jars only (please remove caps and corks)." },
      { q: "Should you remove bottle caps before recycling glass?", accepted: ["yes", "remove caps"], answerSentence: "Green Bin: Glass bottles and jars only (please remove caps and corks)." },
      { q: "Where should you throw food scraps?", accepted: ["black bin"], answerSentence: "Black Bin: General household waste and non-recyclable items (food scraps, broken items)." },
    ] },
  { id: 20, title: "A Mini Job Interview",
    body: "<strong>Manager:</strong> Good morning, thanks for coming in for the shop assistant position. Could you tell me about your previous work?<br><strong>Candidate:</strong> Good morning. Yes, I worked for one year in a bookstore in Bristol. My duties included organizing shelves, advising customers on book choices, and handling the cash register.<br><strong>Manager:</strong> That sounds great. And why do you want to work in our music shop?<br><strong>Candidate:</strong> I have a huge passion for music, and I love talking to people. I am looking for a part-time job that matches my interests.",
    questions: [
      { q: "What was the candidate's previous job?", accepted: ["bookstore"], answerSentence: "I worked for one year in a bookstore in Bristol." },
      { q: "Where is the candidate applying to work now?", accepted: ["music shop"], answerSentence: "why do you want to work in our music shop?" },
      { q: "Why does the candidate want this new job?", accepted: ["passion for music", "love talking to people"], answerSentence: "I have a huge passion for music, and I love talking to people." },
    ] },
];
