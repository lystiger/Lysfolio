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
6. Example code:

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { XCircle } from "lucide-react";
import useSound from "use-sound";

const MultiStageEasterEgg = () => {
  const [clicks, setClicks] = useState(0);
  const [popupImg, setPopupImg] = useState(null); // Stores the path to the current image
  const timerRef = useRef(null);

  // Sound Effect (Optional - add your glitch.mp3 to public/sounds)
  const [playGlitch] = useSound('/sounds/glitch.mp3', { volume: 0.5 });

  // 1. COOL-DOWN LOGIC
  const handleCardClick = () => {
    setClicks((prev) => prev + 1);

    // Reset the 3-second timer every time user clicks
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      setClicks(0); 
    }, 3000);
  };

  // 2. MATH & TRIGGERS
  useEffect(() => {
    if (clicks === 15) {
      setPopupImg("/15thclick.png");
      playGlitch();
    } else if (clicks === 38) {
      setPopupImg("/38thclick.png");
      playGlitch();
    } else if (clicks === 52) {
      setPopupImg("/52ndclick.png");
      playGlitch();
    }
  }, [clicks, playGlitch]);

  // 3. COLOR & SHAKE CALCULATIONS
  const getCardStyle = () => {
    let colorClass = "text-white";
    let isShaking = false;

    // Phase 1 (Target 15)
    if (clicks >= 1 && clicks <= 15) {
      if (clicks >= 1 && clicks <= 9) isShaking = true;
      if (clicks >= 6 && clicks <= 8) colorClass = "text-yellow-500";
      if (clicks >= 9 && clicks <= 10) colorClass = "text-red-500";
    }
    // Phase 2 (Target 38)
    else if (clicks > 15 && clicks <= 38) {
      if (clicks >= 27 && clicks <= 37) isShaking = true;
      if (clicks >= 16 && clicks <= 21) colorClass = "text-white";
      if (clicks >= 28 && clicks <= 33) colorClass = "text-yellow-500"; // Scaled math
      if (clicks >= 34 && clicks <= 37) colorClass = "text-red-500";    // Scaled math
    }
    // Phase 3 (Target 52)
    else if (clicks > 38 && clicks <= 52) {
      if (clicks >= 41 && clicks <= 51) isShaking = true;
      if (clicks >= 39 && clicks <= 43) colorClass = "text-white";
      if (clicks >= 44 && clicks <= 48) colorClass = "text-yellow-500"; // Scaled math
      if (clicks >= 49 && clicks <= 51) colorClass = "text-red-500";    // Scaled math
    }

    return { colorClass, isShaking };
  };

  const { colorClass, isShaking } = getCardStyle();

  return (
    <div className="relative flex justify-center items-center py-20">
      {/* THE MAIN CARD */}
      <motion.div
        onClick={handleCardClick}
        animate={isShaking ? { x: [-2, 2, -2, 2, 0], y: [1, -1, 1, -1, 0] } : {}}
        transition={{ repeat: Infinity, duration: 0.1 }}
        className={`w-80 h-96 rounded-2xl bg-slate-900/80 backdrop-blur-md border border-white/10 flex flex-col items-center justify-center cursor-pointer shadow-2xl transition-colors duration-300 ${colorClass}`}
      >
        <h2 className="text-2xl font-bold tracking-widest uppercase">System Status</h2>
        <p className="mt-2 font-mono text-sm">Integrity: {100 - (clicks * 2)}%</p>
        <p className="mt-10 opacity-50 text-xs">Access Attempts: {clicks}</p>
      </motion.div>

      {/* EASTER EGG OVERLAY */}
      <AnimatePresence>
        {popupImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-md"
          >
            <motion.div 
              initial={{ scale: 0.5, rotate: -10 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0.5, opacity: 0 }}
              className="relative max-w-lg w-full p-4"
            >
              <button 
                onClick={() => setPopupImg(null)}
                className="absolute -top-10 right-0 text-white hover:text-red-500 transition-colors"
              >
                <XCircle size={32} />
              </button>
              <img 
                src={popupImg} 
                alt="Secret Unlocked" 
                className="rounded-xl border-2 border-white/20 shadow-[0_0_50px_rgba(255,255,255,0.2)]"
              />
              <p className="text-center text-white font-mono mt-4 animate-pulse">
                CRITICAL_ERROR: UNKNOWN_FILE_ACCESSED
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MultiStageEasterEgg;