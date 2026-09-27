// =====================================================================
// The Generation Game: question set v2 (FIR Culture Workshop, Session 2)
// Swap this file to make the scenarios version later.
//
// Each question:  text, options (A to D, or A and B for true or false),
// answer, reveal, partner (Ask your partner), room (Max's room prompt),
// emoji (shown big on screen), revealImages, edge and note (director only).
// =====================================================================
window.GG_GAME = {
  title: "The Generation Game",

  rounds: [
    { label: "Round 1", title: "Meet the Generations", sound: "round1.mp3", questions: [1, 2, 3],
      note: "Level playing field. Straight after the intro video, while the image is fresh." },
    { label: "Round 2", title: "Then and Now", sound: "round2.mp3", questions: [4, 5, 6, 7, 8, 9],
      note: "The edges alternate, so every pair gets a question in its favour. After each edge question, Max asks any pair who knew it for certain: \"How did you know?\" One volunteer answer, then move on." },
    { label: "Round 3", title: "Plot Twist", sound: "round3.mp3", questions: [10, 11, 12, 13],
      note: "The assumptions round. Every wrong answer is a tempting one." },
    { label: "The Final Question", title: "Grand Finale", sound: "round4.mp3", questions: [14],
      note: "The evidence question. Busts the \"younger want development, older want stability\" myth." }
  ],

  questions: {
    1: {
      edge: "Fresh from the video",
      text: "At the end of the video you met the next two generations: born 2010 to 2024, and born 2025 onwards. What are they called?",
      options: { A: "Generation Z2 and Generation Next", B: "Generation Omega and Generation Zero", C: "Generation AI and Generation Glass", D: "Generation Alpha and Generation Beta" },
      answer: "D",
      reveal: "Alpha and Beta. Having run out of alphabet at Z, the naming started again with the Greek one. Someone born today is Generation Beta.",
      partner: "What do you think will be normal at work by the time Generation Beta arrives?",
      revealImages: ["gen-alpha.png", "gen-beta.png"],
      note: "These dates follow the McCrindle convention. Pew, which the other date questions use, ends Generation Z in 2012, so the bands overlap. That overlap is the set-up for Q3."
    },
    2: {
      edge: "Level",
      text: "Which label usually comes between Baby Boomers and Millennials?",
      options: { A: "Generation Z", B: "Generation X", C: "Silent Generation", D: "Generation Alpha" },
      answer: "B",
      reveal: "Generation X. The confidence builder: the answer was on screen in the video."
    },
    3: {
      edge: "Level",
      text: "Who officially decides where one generation ends and the next begins?",
      options: { A: "An international agreement", B: "The UK government", C: "Nobody. Different researchers draw the lines differently", D: "The Oxford English Dictionary" },
      answer: "C",
      reveal: "Nobody. The lines are conventions, and different sources draw them in different places. That is exactly why a label can tell us very little about the person in front of us."
    },
    4: {
      edge: "Older edge",
      text: "Before February 1971, how many pennies were in a shilling?",
      options: { A: "10", B: "20", C: "100", D: "12" },
      answer: "D",
      reveal: "Twelve, and 240 to the pound. On Decimal Day the whole country relearned its money overnight. Big workplace change is not new, and some colleagues have lived through a lot of it.",
      room: "Did any pair know that for certain? How did you know?"
    },
    5: {
      edge: "Younger edge",
      text: "A colleague says the new rota is \"mid\". What do they mean?",
      options: { A: "Average, nothing special", B: "Brilliant", C: "Sorted", D: "It is the middle shift" },
      answer: "A",
      reveal: "Average. The same words can mean different things to different people, so it is worth checking before you react.",
      room: "Did any pair know that for certain? How did you know?"
    },
    6: {
      edge: "Older edge, fun",
      text: "Why would someone put a pencil in a cassette?",
      options: { A: "To label it", B: "To clean the tape", C: "To wind the tape back without draining the batteries", D: "To mark a favourite song" },
      answer: "C",
      reveal: "To save the batteries. Making do with what you have is a skill that transfers.",
      room: "Did any pair know that for certain? How did you know?"
    },
    7: {
      edge: "Younger edge",
      text: "In a group chat, someone replies to your joke with a skull emoji. What do they mean?",
      emoji: "\uD83D\uDC80",
      options: { A: "\"That is so funny\"", B: "\"I am offended\"", C: "\"That idea is dead\"", D: "\"That is a safety risk\"" },
      answer: "A",
      reveal: "It means \"I am dead\", as in dying of laughter. Messages can land very differently depending on who is reading them.",
      room: "Did any pair know that for certain? How did you know?",
      note: "The skull emoji is shown on screen."
    },
    8: {
      edge: "Middle edge",
      text: "With dial-up internet at home, what could you not do while you were online?",
      options: { A: "Watch TV", B: "Boil the kettle", C: "Use the printer", D: "Use the home phone" },
      answer: "D",
      reveal: "Use the phone. The internet and the landline shared the same line.",
      partner: "What is a tool or way of working you have had to unlearn?",
      note: "Edge question: Max can also ask any pair who knew it for certain how they knew."
    },
    9: {
      edge: "Leveller",
      text: "Microsoft Teams launched in 2017. Who at Story has had to learn it on the job?",
      options: { A: "Mostly younger colleagues", B: "Pretty much everyone", C: "Mostly older colleagues", D: "Only office staff" },
      answer: "B",
      reveal: "Pretty much everyone. Everyone has been the beginner.",
      partner: "What have you had to learn at work in the last year?"
    },
    10: {
      edge: "Assumption",
      text: "A new site-reporting app is coming. Pat (61) and Leah (23) both offer to help colleagues learn it. Who should lead?",
      options: { A: "Leah: she grew up with smartphones", B: "Pat: she knows the work the app is for", C: "Split it: Leah does the app, Pat does the work", D: "Whoever has actually used it, and explains it well" },
      answer: "D",
      reveal: "Growing up with phones does not mean knowing a work system, and years in the job do not rule anyone out. Researchers call the \"digital native\" idea a myth. C feels fair, but it hands out the roles by age before anyone has checked.",
      partner: "Who has taught you something useful at work? Were you surprised it was them?",
      note: "Source for the digital native point: Kirschner and De Bruyckere (2017), The myths of the digital native and the multitasker, Teaching and Teacher Education. Option C is the one to discuss: it is the most tempting and still decides by age."
    },
    11: {
      edge: "Leveller",
      text: "You reply with a thumbs-up to a colleague\u2019s long message. How will it land?",
      emoji: "\uD83D\uDC4D",
      options: { A: "Warmly; everyone reads it the same way", B: "As rude; everyone reads it that way", C: "It depends on who is reading it", D: "As a formal sign-off" },
      answer: "C",
      reveal: "Some people read it as friendly, some as curt. The fix is not guessing; it is agreeing how your team communicates.",
      note: "This ties Q5 and Q7 back to the workplace. The thumbs-up emoji is shown on screen."
    },
    12: {
      edge: "Assumption",
      text: "Sam (46, new apprentice) and Alex (22, four years in the job) join your project. What is the best first move?",
      options: { A: "Ask each of them what they have done before on this kind of work", B: "Pair Sam with Alex so Alex can mentor", C: "Give Sam the full induction and Alex the short one", D: "Give them identical inductions to keep it fair" },
      answer: "A",
      reveal: "Ask. The other three all sound sensible, which is the point. An apprentice is not automatically young, and a young colleague is not automatically new. An apprenticeship is a route in at any age, and Sam may bring years of experience from another industry.",
      partner: "Have you ever been assumed to know more, or less, than you did?",
      note: "Do not describe Sam as early careers. Apprenticeship is about the route into the role, not age or career stage."
    },
    13: {
      edge: "True or false",
      text: "True or false: in the UK, your employer can make you retire once you reach 65.",
      options: { A: "True", B: "False" },
      answer: "B",
      reveal: "False. The default retirement age was scrapped in 2011. An employer can only set a compulsory retirement age if it can objectively justify it, which is rare. People are working longer, which is one reason more generations share the same team.",
      note: "This is a general legal point, not advice on any individual case."
    },
    14: {
      edge: "Evidence",
      text: "Researchers combined 20 studies of nearly 20,000 workers, comparing generations on job satisfaction, commitment and plans to leave. What did they find?",
      options: { A: "Big differences between generations", B: "Almost no difference between generations", C: "Generation Z were the least committed", D: "Baby Boomers were the most satisfied" },
      answer: "B",
      reveal: "Almost none. The small gaps they found, like older workers being a little more satisfied and less likely to leave, were better explained by age and time in the job than by generation. The label tells you very little. Asking tells you a lot.",
      partner: "Did either of you expect bigger differences? Why?",
      note: "Source: Costanza, Badger, Fraser, Severt and Gade (2012), Generational differences in work-related attitudes: a meta-analysis, Journal of Business and Psychology. 20 studies, 19,961 workers."
    }
  }
};
