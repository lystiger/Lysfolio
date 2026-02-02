import React, { useState } from 'react';
import { motion } from 'framer-motion';

const FlipCard: React.FC = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="perspective-1000 w-80 h-48 mx-auto">
      <motion.div
        className="relative w-full h-full cursor-pointer"
        style={{ transformStyle: 'preserve-3d' }}
        whileHover={{ rotateY: 180 }}
        whileTap={{ scale: 0.95 }}
        transition={{
          type: 'spring',
          stiffness: 300,
          damping: 12,
        }}
        onHoverStart={() => setIsFlipped(true)}
        onHoverEnd={() => setIsFlipped(false)}
      >
        {/* Front Side */}
        <motion.div
          className="absolute inset-0 w-full h-full backface-hidden rounded-lg bg-gradient-to-br from-indigo-neon to-purple-500 p-6 flex flex-col justify-center items-center text-white shadow-lg"
          style={{ backfaceVisibility: 'hidden' }}
        >
          <h3 className="text-2xl font-bold mb-2">Quick Facts</h3>
          <div className="text-center space-y-1">
            <p><strong>Name:</strong> Lystiger</p>
            <p><strong>Age:</strong> 21</p>
            <p><strong>Phone:</strong> +1 (123) 456-7890</p>
            <p><strong>Address:</strong> Ho Chi Minh City, Vietnam</p>
            <p><strong>Nationality:</strong> Vietnamese</p>
          </div>
        </motion.div>

        {/* Back Side */}
        <motion.div
          className="absolute inset-0 w-full h-full backface-hidden rounded-lg bg-obsidian p-6 flex flex-col justify-center items-center text-white shadow-lg"
          style={{
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
          }}
        >
          <h3 className="text-2xl font-bold mb-2">Personal Side</h3>
          <div className="text-center space-y-1">
            <p><strong>Relation Status:</strong> Single</p>
            <p><strong>Hobbies:</strong> Coding, AI Research, Gaming</p>
          </div>
        </motion.div>

        {/* Glow Border Effect */}
        {isFlipped && (
          <motion.div
            className="absolute inset-0 rounded-lg border border-indigo-neon/50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          />
        )}
      </motion.div>
    </div>
  );
};

export default FlipCard;