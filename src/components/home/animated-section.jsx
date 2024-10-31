'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const icons = [
  { id: 1, src: '/assets/icons/pinecone.svg', label: 'Pinecone', position: 'top-4 left-1/4' },
  { id: 2, src: '/assets/icons/aitable.ai_.svg', label: 'Altable', position: 'top-4 right-1/4' },
  { id: 3, src: '/assets/icons/python.png', label: 'Python', position: 'top-20 left-4' },
  { id: 4, src: '/assets/icons/openai.png', label: 'OpenAI', position: 'top-1/4 right-4' },
  { id: 5, src: '/assets/icons/gigachat.png', label: 'Gigachat', position: 'bottom-1/4 left-4' },
  { id: 6, src: '/assets/icons/qwenllm.png', label: 'Qwen LLM', position: 'bottom-4 left-1/4' },
  {
    id: 7,
    src: '/assets/icons/yandexgpt.png',
    label: 'Yandex GPT',
    position: 'bottom-4 right-1/4',
  },
  { id: 8, src: '/assets/icons/llama.png', label: 'Llama', position: 'bottom-20 right-4' },
];

const TechStack = () => {
  return (
    <div className="flex justify-center mb-10 relative">
     

      <div className="relative border-2 rounded-3xl h-96 w-full max-w-3xl py-16 flex justify-center items-center">
        <div className="absolute text-center px-4">
          <p className="text-lg font-semibold leading-tight">
            Каждый инструмент — шаг к оптимизации вашего бизнеса
          </p>
          <p className="text-sm text-gray-300 mt-2">
            по середине с разных сторон иконки инструментов, стеков и интеграции
          </p>
        </div>

        {icons.map((icon) => (
          <motion.div
            key={icon.id}
            className={`absolute ${icon.position} flex flex-col items-center`}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: icon.id * 0.1 }}
            whileHover={{ scale: 1.1 }}
          >
            <Image
              src={icon.src}
              alt={icon.label}
              width={50}
              height={50}
              className="rounded-2xl bg-[#6F9CEB] p-2"
            />
            <p className="text-sm">{icon.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;
