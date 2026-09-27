// =====================================================================
// The Generation Game: settings
// This is the only file you should need to edit by hand.
// =====================================================================
window.GG_CONFIG = {

  // ---- Supabase (same project as the Decision Game) ----
  supabaseUrl: "https://jffkqiguoibyoidmyzkt.supabase.co",
  supabaseKey: "sb_publishable_pKLwYTaF-gnRCUJvOKzCjQ_1hR7TLq8",

  // ---- The address phones use to join (the QR code is built from this) ----
  joinUrl: "https://storycontractingltd.github.io/fir-generation-game/phone.html",

  // ---- Vimeo intro video ----
  vimeoId: "1230682140",
  vimeoHash: "d4b388bbf9",

  // ---- Images (in assets/images) ----
  images: {
    screen:     "gameshow-screen.png",
    logo:       "logo.png",
    maxWelcome: "max-sparkles.png",
    maxQuestion:"max-sparkles.png",
    maxCorrect: "max-sparkles.png",
    maxScores:  "max-sparkles.png",
    maxWinner:  "max-sparkles.png"
  },

  // ---- Sounds (in assets/audio). A missing file is simply skipped. ----
  sounds: {
    joinLoop:     "join-loop.mp3",
    question:     "question.mp3",
    votingOpen:   "voting-open.mp3",
    countdown:    "countdown.mp3",
    votingClosed: "voting-closed.mp3",
    reveal:       "reveal.mp3",
    scoreboard:   "scoreboard.mp3",
    winner:       "winner.mp3"
    // Round stings are round1.mp3 to round4.mp3.
    // Max's voice for each question is q01.mp3 to q14.mp3, and q01-reveal.mp3 to q14-reveal.mp3.
  }
};
