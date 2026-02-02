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
      navigator.vibrate([40, 20, 20]); // Vibrate pattern
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
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 20,
        mass: 1,
        velocity: 0,
        restDelta: 0.001,
        restSpeed: 0.001,
        scale: {
          type: 'spring',
          stiffness: 400,
          damping: 20,
          mass: 1,
          velocity: 0,
          restDelta: 0.001,
          restSpeed: 0.001,
          duration: 0.2,
          ease: 'easeOut',
          from: 0.8,
          to: 1.05,
        },
      },
    },
    exit: {
      opacity: 0,
      y: -20,
      filter: 'blur(4px)',
      transition: {
        duration: 0.3,
        ease: 'easeIn',
      },
    },
  };

  return (
    <div className="relative inline-block h-10 overflow-hidden font-mono text-2xl font-bold w-[400px]"> {/* Fixed width for stable layout */}
      <AnimatePresence mode="wait">
        <motion.span
          key={index}
          variants={textVariants}
          initial="enter"
          animate="center"
          exit="exit"
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
