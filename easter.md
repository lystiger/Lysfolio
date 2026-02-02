# Task: Hidden Easter Egg Logic

## Feature Specs
* **Trigger:** 15, 38, 52 consecutive clicks on the main Profile Card.
* **Warning Phase:** From click 1 to 9, the card should perform a "micro-shake" animation using Framer Motion to signal something is wrong.
* **The "Pop":** At click 15, an absolute-positioned `div` should burst out of the center with a picture from public/15thclick.png.
* **Warning Phase 2nd:** From click 27 to 37, the card should perform a "micro-shake" animation using Framer Motion to signal something is wrong.
* **The "Pop" 2nd:** At click 38, an absolute-positioned `div` should burst out of the center with a picture from public/38thclick.png.
* **Warning Phase 3rd:** From click 41 to 51, the card should perform a "micro-shake" animation using Framer Motion to signal something is wrong.
* **The "Pop" 3rd:** At click 52, an absolute-positioned `div` should burst out of the center with a picture from public/52ndclick.png.

## Visual Requirements
* **Image:** Use image inside public folder.
* **Overlay:** When the image pops up, blur the rest of the background (`backdrop-blur-md`) and darken it to focus on the secret.
* **Sound (Optional):** Trigger a "System Error" or "Glitch" sound effect using `use-sound` in public/glitch.mp3.

## AI Instructions
1. Wrap the existing `FlipCard` in a state-managed container.
2. Ensure the click count resets if the user doesn't click for 3 seconds (cool-down logic).
3. Add a "Close" button on the pop-up image so the user isn't stuck.
4. Specific
To make it feel like a real hack, change the text color of your card to Red as the clicks increase.
Phase	Pop Target	Shake Duration	Yellow Alert (Warning)	Red Alert (Danger)
1st	15	  1 → 9	       6 — 8	                        9 — 10
2nd	38	 27 → 37	  28 — 33	                       34 — 37
3rd	52	 41 → 51	  44 — 48	                       49 — 51
5. The libraries needed is imported, framer-motion, lucide-react, use-sound so AI just need to implement