import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { XCircle } from 'lucide-react';
import { createPortal } from 'react-dom';
import useSound from 'use-sound';

const FlipCard: React.FC = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [clicks, setClicks] = useState(0);
  const [popupImg, setPopupImg] = useState<string | null>(null);
  const timerRef = useRef<number | null>(null);
  const glowTimerRef = useRef<number | null>(null);
  const [forceGlow, setForceGlow] = useState(false);
  const [popupLocked, setPopupLocked] = useState(false);
  const popupTimerRef = useRef<number | null>(null);

  // Sound Effect
  const [playGlitch] = useSound('/glitch.mp3', { volume: 0.5 });

  // Cool-down logic
  const handleCardClick = () => {
    setClicks((prev) => prev + 1);

    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      setClicks(0);
    }, 3000);
  };

  // Prevent scrolling when popup is active
  useEffect(() => {
    if (popupImg) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [popupImg]);

  // Triggers for popups
  useEffect(() => {
    if (clicks === 5) {
      setPopupImg('/15thclick.png');
      playGlitch();
      setForceGlow(true);
      if (glowTimerRef.current) window.clearTimeout(glowTimerRef.current);
      glowTimerRef.current = window.setTimeout(() => setForceGlow(false), 2000);
      setPopupLocked(true);
      if (popupTimerRef.current) window.clearTimeout(popupTimerRef.current);
      popupTimerRef.current = window.setTimeout(() => setPopupLocked(false), 2000);
    } else if (clicks === 12) {
      setPopupImg('/38thclick.png');
      playGlitch();
      setForceGlow(true);
      if (glowTimerRef.current) window.clearTimeout(glowTimerRef.current);
      glowTimerRef.current = window.setTimeout(() => setForceGlow(false), 2000);
      setPopupLocked(true);
      if (popupTimerRef.current) window.clearTimeout(popupTimerRef.current);
      popupTimerRef.current = window.setTimeout(() => setPopupLocked(false), 2000);
    } else if (clicks === 20) {
      setPopupImg('/52ndclick.png');
      playGlitch();
      setForceGlow(true);
      if (glowTimerRef.current) window.clearTimeout(glowTimerRef.current);
      glowTimerRef.current = window.setTimeout(() => setForceGlow(false), 2000);
      setPopupLocked(true);
      if (popupTimerRef.current) window.clearTimeout(popupTimerRef.current);
      popupTimerRef.current = window.setTimeout(() => setPopupLocked(false), 2000);
    }
  }, [clicks, playGlitch]);

  useEffect(() => {
    return () => {
      if (glowTimerRef.current) {
        window.clearTimeout(glowTimerRef.current);
      }
      if (popupTimerRef.current) {
        window.clearTimeout(popupTimerRef.current);
      }
    };
  }, []);

  // Color and shake calculations
  const getCardStyle = () => {
    let colorClass = 'text-white';
    let isShaking = false;
    let isGlowing = false;

    if (clicks >= 1 && clicks <= 5) {
      if (clicks >= 1 && clicks <= 9) isShaking = true;
      if (clicks >= 6 && clicks <= 8) colorClass = 'text-yellow-500';
      if (clicks >= 9 && clicks <= 10) colorClass = 'text-red-500';
    } else if (clicks > 5 && clicks <= 12) {
      if (clicks >= 27 && clicks <= 37) isShaking = true;
      if (clicks >= 28 && clicks <= 33) colorClass = 'text-yellow-500';
      if (clicks >= 34 && clicks <= 37) colorClass = 'text-red-500';
    } else if (clicks > 12 && clicks <= 20) {
      if (clicks >= 41 && clicks <= 51) isShaking = true;
      if (clicks >= 44 && clicks <= 48) colorClass = 'text-yellow-500';
      if (clicks >= 49 && clicks <= 51) colorClass = 'text-red-500';
    }

    if ([3, 4, 10, 11, 18, 19].includes(clicks)) {
      isGlowing = true;
    }

    return { colorClass, isShaking, isGlowing };
  };

  const { colorClass, isShaking, isGlowing } = getCardStyle();

  return (
    <div className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-none sm:w-3/4 md:w-1/2 lg:w-1/2 h-80 sm:h-96 mx-auto" style={{ perspective: '1000px' }}>
      <motion.div
        className="relative w-full h-full cursor-pointer"
        style={{ transformStyle: 'preserve-3d' }}
        whileHover={{ rotateY: 180 }}
        whileTap={{ scale: 0.95 }}
        animate={isShaking ? { x: [-2, 2, -2, 2, 0], y: [1, -1, 1, -1, 0] } : {}}
        transition={{
          type: 'spring',
          stiffness: 300,
          damping: 12,
        }}
        onHoverStart={() => setIsFlipped(true)}
        onHoverEnd={() => setIsFlipped(false)}
        onClick={handleCardClick}
      >
        {/* Front Side */}
        <motion.div
          className={`absolute inset-0 w-full h-full backface-hidden rounded-lg bg-slate-900/40 backdrop-blur-xl border border-white/10 shadow-2xl p-6 flex flex-col justify-center items-center ${colorClass}`}
          style={{ backfaceVisibility: 'hidden' }}
        >
          <h3 className="text-xl sm:text-2xl font-bold mb-3">Quick Facts</h3>
          <div className="text-center space-y-1 text-sm sm:text-base">
            <p><strong>Name:</strong> Hung Anh Do</p>
            <p><strong>Age:</strong> 21</p>
            <p><strong>Phone:</strong> +98 (925)58 619</p>
            <p><strong>Address:</strong> Ha Noi City, Vietnam</p>
            <p><strong>Nationality:</strong> Vietnamese</p>
          </div>
        </motion.div>

        {/* Back Side */}
        <motion.div
          className="absolute inset-0 w-full h-full backface-hidden rounded-lg bg-white/5 backdrop-blur-2xl text-white shadow-2xl p-6 flex flex-col justify-center items-center"
          style={{
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
          }}
        >
          <h3 className="text-xl sm:text-2xl font-bold mb-3">Personal Side</h3>
          <div className="text-center space-y-1 text-sm sm:text-base">
            <p><strong>Relation Status:</strong> In luv</p>
            <p><strong>Hobbies:</strong> Coding, AI Research, Gaming</p>
          </div>
        </motion.div>

        {/* Glow Border Effect */}
        {(isFlipped || isGlowing || forceGlow) && (
          <motion.div
            className="absolute inset-0 rounded-lg border border-indigo-neon/50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          />
        )}
      </motion.div>

      {/* Easter Egg Overlay */}
      {createPortal(
        <AnimatePresence>
          {popupImg && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm"
              onClick={() => {
                if (popupLocked) return;
                setPopupImg(null);
              }}
            >
              <motion.div
                initial={{ scale: 0.5, rotate: -10 }}
                animate={{ scale: 1, rotate: 0 }}
                exit={{ scale: 0.5, opacity: 0 }}
                className="relative max-w-sm w-full p-4"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={popupImg}
                  alt="Secret Unlocked"
                  className="rounded-xl border-2 border-white/20 shadow-[0_0_50px_rgba(255,255,255,0.2)]"
                />
                <button
                  onClick={() => {
                    if (popupLocked) return;
                    setPopupImg(null);
                  }}
                  className="absolute top-2 right-2 text-white hover:text-red-500 transition-colors bg-black/50 rounded-full p-1"
                >
                  <XCircle size={24} />
                </button>
                <p className="text-center text-white font-mono mt-4 animate-pulse">
                  CRITICAL_ERROR: UNKNOWN_FILE_ACCESSED
                </p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </div>
  );
};

export default FlipCard;
