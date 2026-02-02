import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const CustomCursor: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState('default');

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener('mousemove', mouseMove);

    return () => {
      window.removeEventListener('mousemove', mouseMove);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 8,
      y: mousePosition.y - 8,
      backgroundColor: 'rgba(255, 255, 255, 0.5)',
      height: 16,
      width: 16,
    },
    text: {
      x: mousePosition.x - 24,
      y: mousePosition.y - 24,
      backgroundColor: 'rgba(255, 255, 255, 0.8)',
      height: 48,
      width: 48,
      mixBlendMode: 'difference',
    },
  };

  const textEnter = () => setCursorVariant('text');
  const textLeave = () => setCursorVariant('default');

  // Attach event listeners to all interactive elements
  useEffect(() => {
    document.querySelectorAll('a, button, input, textarea, .group').forEach((el) => {
      el.addEventListener('mouseenter', textEnter);
      el.addEventListener('mouseleave', textLeave);
    });

    return () => {
      document.querySelectorAll('a, button, input, textarea, .group').forEach((el) => {
        el.removeEventListener('mouseenter', textEnter);
        el.removeEventListener('mouseleave', textLeave);
      });
    };
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 rounded-full pointer-events-none z-[9999]"
      variants={variants}
      animate={cursorVariant}
      transition={{ type: 'spring', stiffness: 500, damping: 30 }}
    />
  );
};

export default CustomCursor;
