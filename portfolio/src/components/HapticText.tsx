import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface HapticTextProps {
  phrases: { text: string; color: string }[];
  interval?: number; // Interval in milliseconds for rotation
}

const HapticText: React.FC<HapticTextProps> = ({ phrases, interval = 3000 }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const rotateText = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % phrases.length);
    }, interval);

    return () => clearInterval(rotateText);
  }, [phrases, interval]);

  useEffect(() => {
    // Haptic Feedback
    if ('vibrate' in navigator) {
      try {
        navigator.vibrate([40, 20, 20]); // Vibrate pattern
      } catch (error) {
        // Silently handle vibration blocking
      }
    }
  }, [index]); // Trigger vibration on index change

  const currentPhrase = phrases[index];

  const textVariants = {
    enter: {
      opacity: 0,
      y: 20,
      scale: 0.8,
    },
    center: {
      opacity: 1,
      y: 0,
      scale: 1,
    },
    exit: {
      opacity: 0,
      y: -20,
      filter: 'blur(4px)',
      transition: {
        duration: 0.3,
        ease: 'easeIn' as any,
      },
    },
  };

  return (
    <div className="relative inline-block h-9 sm:h-10 overflow-hidden font-mono text-base sm:text-lg font-semibold w-[260px] sm:w-[320px] md:w-[380px]"> {/* Responsive width for stable layout */}
      <AnimatePresence mode="wait">
        <motion.span
          key={index}
          variants={textVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            type: 'spring',
            stiffness: 400,
            damping: 20,
            mass: 1,
            velocity: 0,
            restDelta: 0.001,
            restSpeed: 0.001,
          }}
          className="absolute whitespace-nowrap text-center w-full"
          style={{ color: currentPhrase.color }}
        >
          {currentPhrase.text}
        </motion.span>
      </AnimatePresence>
    </div>
  );
};

export default HapticText;
