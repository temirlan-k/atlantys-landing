import React from 'react';
import { motion } from 'framer-motion';

const icons = [
  { id: 1, label: 'Pinecone' },
  { id: 2, label: 'AltTable' },
  { id: 3, label: 'OpenAI' },
  { id: 4, label: 'Llama' },
  { id: 5, label: 'Gigachat' },
  { id: 6, label: 'Python' },
  { id: 7, label: 'Yandex GPT' },
  { id: 8, label: 'Qwen LLM' },
];

const AnimatedIconSection = () => {
  return (
    <div className="relative w-[400px] h-[400px] mx-auto bg-gradient-to-b from-[#0f0f0f] to-[#181818] rounded-full flex items-center justify-center">
      {/* Central Icon with pulsing animation */}
      <motion.div
        className="absolute w-20 h-20 bg-gray-800 rounded-full flex items-center justify-center text-white font-bold"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        Logo
      </motion.div>

      {/* Icons positioned around the central icon */}
      {icons.map((icon, index) => (
        <motion.div
          key={icon.id}
          className="absolute bg-white text-gray-800 text-center p-3 rounded-lg shadow-lg font-semibold text-sm"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: index * 0.1, duration: 0.5 }}
          style={{
            transform: `rotate(${index * (360 / icons.length)}deg) translate(150px) rotate(-${index * (360 / icons.length)}deg)`,
          }}
        >
          {icon.label}
        </motion.div>
      ))}
    </div>
  );
};

export default AnimatedIconSection;
