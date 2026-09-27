# The Generation Game

Gameshow for the FIR Culture Workshop (Session 2). Built on the same pattern as the FIR Live Decision Game.

| File | What it is |
|---|---|
| index.html | Director control panel (Scott's laptop) |
| stage.html | Big screen (opened from the control panel) |
| phone.html | One phone per pair (the QR code points here) |
| config.js | Supabase details, join address, Vimeo video, image and sound names. The only file to edit by hand. |
| content/questions.js | The 14 questions, answers, reveals and prompts. Swap this for the scenarios version. |
| supabase/schema.sql | Run once in the Supabase SQL Editor. Adds the gg_ tables. |
| assets/ | Images and sounds |

Live address: https://storycontractingltd.github.io/fir-generations-game/

## On the day

1. Open the control panel, press **New session**.
2. Press **Open big screen**, drag it onto the projector, click **Click to start the show**.
3. Pairs scan the QR code and join.
4. Use the big **Next** button to run the show. **5-second cue** is available while voting is open.

Sounds that are not in assets/audio are simply skipped. To add one later, save it with the name listed in config.js.
