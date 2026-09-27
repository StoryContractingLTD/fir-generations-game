// =====================================================================
// The Generation Game: settings
// This is the only file you should need to edit by hand.
// =====================================================================
window.GG_CONFIG = {

  // ---- Supabase (same project as the Decision Game) ----
  supabaseUrl: "https://jffkqiguoibyoidmyzkt.supabase.co",
  supabaseKey: "sb_publishable_pKLwYTaF-gnRCUJvOKzCjQ_1hR7TLq8",

  // ---- The address phones use to join (the QR code is built from this) ----
  joinUrl: "https://storycontractingltd.github.io/fir-generations-game/phone.html",

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

  // ---- Voting time per question, in seconds ----
  votingSeconds: 60,

  // ---- Sounds (in assets/audio). A missing file is simply skipped. ----
  sounds: {
    joinLoop:     "join-loop.mp3",
    question:     "question.mp3",
    votingOpen:   "voting-open.mp3",
    votingMusic:  "voting-music.mp3",   // loops while pairs vote
    countdown:    "countdown.mp3",      // last 5 seconds (beeps if missing)
    votingClosed: "voting-closed.mp3",
    votesIn:      "votes-in.mp3",       // Max: "The votes are in!"
    timesUp:      "times-up.mp3",       // Max: "Time's up!"
    reveal:       "reveal.mp3",
    cheer:        "cheer.mp3",          // on every reveal
    scoreboard:   "scoreboard.mp3",
    winner:       "winner.mp3",         // Max announces the winner
    showEnd:      "show-end.mp3",       // music under Max, then up loud
    applause:     "applause.wav"        // big finish
    // Round stings are round1.mp3 to round4.mp3.
    // Max's voice for each question is q01.mp3 to q14.mp3, and q01-reveal.mp3 to q14-reveal.mp3.
  }
};
