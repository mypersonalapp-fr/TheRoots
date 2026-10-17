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
};
