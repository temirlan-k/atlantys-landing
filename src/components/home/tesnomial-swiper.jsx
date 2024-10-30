'use client';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const data = [
  {
    title: 'бухгалтерии',
    description:
      'Автоматизирует ведение бухгалтерского учета, управляет финансами и оптимизирует расчеты.',
    bigPhoto: '/assets/Бухгалтер.png',
  },
  {
    title: 'юриспруденции',
    description:
      'Упрощает создание и управление юридическими документами, помогает соблюдать законодательные нормы.',
    bigPhoto: '/assets/Юрист.png',
  },
  {
    title: 'образовании',
    description:
      'Помогает разработать индивидуализированные учебные программы и автоматизирует учебный процесс.',
    bigPhoto: '/assets/Образование.png',
  },
  {
    title: 'аналитике',
    description:
      'Обрабатывает большие объемы данных, предоставляет аналитические отчеты и помогает принимать обоснованные решения.',
    bigPhoto: '/assets/Аналитик.png',
  },
  {
    title: 'продажах',
    description:
      'Автоматизирует продажи, управляет клиентской базой и улучшает взаимодействие с клиентами.',
    bigPhoto: '/assets/Продажник.png',
  },
  {
    title: 'маркетинге',
    description:
      'Анализирует рыночные тенденции, управляет маркетинговыми кампаниями и оптимизирует рекламные стратегии.',
    bigPhoto: '/assets/Маркетолог.png',
  },
  {
    title: 'рекрутинге',
    description: 'Автоматизирует процесс найма, анализирует резюме и помогает в подборе идеальных кандидатов.',
    bigPhoto: '/assets/Маркетолог.png', // Replace with another existing image
  },
];

const AnimatedTelecomSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const { title, description, bigPhoto } = data[currentIndex];

  return (
    <div className="">
 

      <div className="flex items-center p-10 ">
        <div>
          <h1 className="text-3xl md:text-5xl font-bold mb-4 w-1/2">ИИ-ассистент</h1>
          <motion.div
            className="md:w-1/2 text-center md:text-left"
            key={title} // Key to trigger Framer Motion re-animation
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-3xl md:text-5xl font-bold mb-4">В {title}</h1>

            {/* Description with animation */}
            <motion.p
              key={description}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 1 }}
              className="text-lg md:text-xl"
            >
              {description}
            </motion.p>
          </motion.div>
        </div>
        {/* Image Section with Animated Background */}
        <div className="relative md:w-1/2 flex justify-center">
          {/* Animated Background Blue Div (Moving with Image) */}
          <motion.div
            className="absolute  w-3/4  h-full rounded-3xl bg-gradient-to-r"
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 0.3, x: 0 }}
            exit={{ opacity: 0, x: -200 }}
            transition={{ duration: 1 }}
            style={{
              backgroundImage: 'linear-gradient(180deg, #FFD700, #F6AE2D)',
            }}
          />

          {/* Big Photo with Right to Left Animation */}
          <motion.img
            src={bigPhoto}
            alt="Big AI Agent"
            className="w-80 mt-5 h-80 object-cover rounded-lg relative z-10" // Ensure the image is above the background
            key={bigPhoto} // Key to trigger re-animation
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -200 }}
            transition={{ duration: 1 }}
          />
        </div>
      </div>
    </div>
  );
};

export default AnimatedTelecomSection;
