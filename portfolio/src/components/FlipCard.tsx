import React, { useState } from 'react';
import { motion } from 'framer-motion';

const FlipCard: React.FC = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="w-[35%] h-64 mx-auto" style={{ perspective: '1000px' }}>
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
          className="absolute inset-0 w-full h-full backface-hidden rounded-lg bg-slate-900/40 backdrop-blur-xl border border-white/10 text-white shadow-2xl p-6 flex flex-col justify-center items-center"
          style={{ backfaceVisibility: 'hidden' }}
        >
          <h3 className="text-2xl font-bold mb-4">Quick Facts</h3>
          <div className="text-center space-y-2">
            <p><strong>Name:</strong> Hung Anh Do</p>
            <p><strong>Age:</strong> 21</p>
            <p><strong>Phone:</strong> +98 (925)58 619</p>
            <p><strong>Address:</strong> Ha Noi City, Vietnam</p>
            <p><strong>Nationality:</strong> Vietnamese</p>
          </div>
        </motion.div>

        {/* Back Side */}
        <motion.div
          className="absolute inset-0 w-full h-full backface-hidden rounded-lg bg-bg-white/5 backdrop-blur-2xl text-white shadow-2xl p-6 flex flex-col justify-center items-center"
          style={{
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
          }}
        >
          <h3 className="text-2xl font-bold mb-4">Personal Side</h3>
          <div className="text-center space-y-2">
            <p><strong>Relation Status:</strong> In luv</p>
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