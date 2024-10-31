'use client';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
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
    description:
      'Автоматизирует процесс найма, анализирует резюме и помогает в подборе идеальных кандидатов.',
    bigPhoto: '/assets/рекрутер.png',
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
    <div className="p-10 flex items-center justify-center">
      <div className="flex flex-col md:flex-row justify-center items-center w-full  space-y-6 md:space-y-0">
        {/* Left Section with Title and Description */}
        <div className=" flex w-1/2 flex-col space-y-4">
          <div className="flex items-center space-x-3">
            <h2 className="text-3xl  md:text- font-bold">ИИ-ассистент</h2>
            <motion.h1
              className="text-3xl  font-bold"
              key={title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 1 }}
            >
              в {title}
            </motion.h1>
          </div>
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

          <Link
            href="/waitlist"
            className=" w-40  flex items-center justify-center border border-transparent text-xs font-medium rounded-md text-white hover:bg-[#F6AE2D] bg-[#021D73] p-3 "
          >
            Подробнее
          </Link>
        </div>

        <div className="relative p-4 flex justify-center">
          <motion.div
            className="absolute w-full h-full rounded-3xl bg-gradient-to-r"
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 0.3, x: 0 }}
            exit={{ opacity: 0, x: -200 }}
            transition={{ duration: 1 }}
            style={{
              backgroundImage: 'linear-gradient(360deg,  #F9CB76, #F6AE2D)',
            }}
          />

          <motion.img
            src={bigPhoto}
            alt="Big AI Agent"
            className="w-80 mt-5 h-80 object-cover rounded-lg relative z-10"
            key={bigPhoto}
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
