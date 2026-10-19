// The Roots — A2 : « Dis-le en anglais » (même format que situations-a1.js). Clés : "A2.0", "A2.1"…
const S = (icon, cue, hint, ok, model) => ({ icon, cue, hint, ok: [ok], model });
export const SITUATIONS_A2 = {
  "A2.0": [
    S("📅", "Say what you usually do every day.", "Dis une habitude.", "\\bi (usually |always |often )?\\w+", "I usually get up at seven."),
    S("⏳", "Say what you are doing right now.", "Dis ce que tu fais maintenant.", "\\b(i'm|i am)\\s+\\w+ing\\b", "I'm studying English."),
    S("🚀", "Say what you are going to do tomorrow.", "Dis un projet pour demain.", "\\b(i'm|i am) going to\\s+\\w+", "I'm going to visit my sister."),
  ],
  "A2.1": [
    S("🚌", "Say how you usually go to work or school.", "Dis ton trajet habituel.", "\\bi (usually |always |often )?(walk|take|catch|drive|cycle|go)\\b", "I usually take the bus."),
    S("🔄", "Say what you are doing today that is different.", "Dis ce qui est différent aujourd'hui.", "\\b(today|this week)\\b.*\\b(i'm|i am)\\s+\\w+ing\\b|\\b(i'm|i am)\\s+\\w+ing\\b.*\\b(today|this week)\\b", "Today I'm working from home."),
    S("📊", "Say one thing you never do.", "Utilise « never ».", "\\bi (never|rarely)\\s+\\w+", "I never watch TV in the morning."),
  ],
  "A2.2": [
    S("✈️", "Say where you went on your last holiday.", "Dis où tu es allé(e) (Past Simple).", "\\bi (went|travelled|traveled|visited|flew|drove)\\b", "I went to Spain last summer."),
    S("🧸", "Say one thing you used to do as a child.", "Utilise « used to ».", "\\bi used to\\s+\\w+", "I used to play outside every day."),
    S("❌", "Say one thing you didn't do yesterday.", "Utilise « didn't ».", "\\bi (didn.t|did not)\\s+\\w+", "I didn't watch TV yesterday."),
  ],
  "A2.3": [
    S("📞", "Say what you were doing when the phone rang.", "Utilise « was + -ing ».", "\\bi was\\s+\\w+ing\\b", "I was cooking when the phone rang."),
    S("🔄", "Say two things that happened at the same time.", "Utilise « while ».", "\\bwhile\\b.*\\b(was|were)\\s+\\w+ing\\b", "While I was reading, he was watching TV."),
    S("🌧️", "Say what happened suddenly while you were out.", "Utilise « when » et le Past Simple.", "\\b(was|were)\\s+\\w+ing\\b.*\\bwhen\\b|\\bwhen\\b.*\\b(was|were)\\s+\\w+ing\\b", "We were walking when it started to rain."),
  ],
  "A2.4": [
    S("🗓️", "Say one thing you are going to do next weekend.", "Utilise « going to ».", "\\b(i.m|i am) going to\\s+\\w+", "I'm going to visit my parents."),
    S("🤝", "Offer to help someone right now.", "Utilise « I'll ».", "\\bi.ll\\s+\\w+|\\bi will\\s+\\w+", "I'll carry your bag."),
    S("🏨", "Book a table or a room.", "Commence par « I'd like to… ».", "\\bi.d like to (book|reserve|have)\\b|\\bi would like to (book|reserve|have)\\b", "I'd like to book a table for two."),
  ],
  "A2.5": [
    S("📏", "Compare two things you own.", "Utilise « -er than » ou « more … than ».", "\\b(\\w+er|more \\w+|less \\w+) than\\b", "My new phone is faster than my old one."),
    S("🥇", "Say what the best thing in your town is.", "Utilise « the best » ou « the most … ».", "\\bthe (best|most \\w+|\\w+est)\\b", "The best place in my town is the park."),
    S("⚖️", "Say what you prefer and why.", "Commence par « I prefer… because… ».", "\\bi (prefer|.d rather)\\b.*\\bbecause\\b|\\bbecause\\b.*\\bi (prefer|.d rather)\\b", "I prefer tea because it's lighter."),
  ],
  "A2.6": [
    S("🤒", "Tell a friend where it hurts.", "Utilise « My … hurts » ou « I have a … ».", "\\b(my \\w+ (hurts?|aches?)|i have a \\w+)\\b", "My head hurts."),
    S("💡", "Give advice to a friend with a cold.", "Utilise « You should… ».", "\\byou should\\b", "You should stay in bed."),
    S("⚠️", "Say a rule at the hospital.", "Utilise « You mustn't… » ou « You have to… ».", "\\byou (mustn.t|have to|must)\\b", "You mustn't use your phone here."),
  ],
  "A2.7": [
    S("🔮", "Say what the weather will be like tomorrow.", "Utilise « It will… ».", "\\bit will\\b|\\bit.ll\\b", "It will rain tomorrow."),
    S("☔", "Say what you will do if it rains.", "Utilise « If it rains, I will… ».", "\\bif it (rains|snows|is)\\b.*\\b(will|.ll)\\b", "If it rains, I will stay at home."),
    S("🌥️", "Say something that might happen.", "Utilise « might ».", "\\bmight\\b", "It might snow tonight."),
  ],
  "A2.8": [
    S("🏠", "Say what there is in your living room.", "Utilise « There is… » ou « There are… ».", "\\bthere (is|are)\\b|\\bthere.s\\b", "There is a sofa and a lamp."),
    S("📍", "Say where the bakery is.", "Utilise « next to », « opposite » ou « between ».", "\\b(next to|opposite|between|near|behind|in front of)\\b", "The bakery is next to the pharmacy."),
    S("🚫", "Say there are no shops in your street.", "Utilise « There aren't any… ».", "\\bthere (aren.t|isn.t|are no|is no)\\b", "There aren't any shops in my street."),
  ],
};
