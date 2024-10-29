'use client';
import React from 'react';
import { motion } from 'framer-motion';

const AbilitySection = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center p-10 md:p-20 space-y-12 md:space-y-0">
      <div className="md:w-1/2 space-y-8">
        <h2 className="text-5xl font-bold text-center ">
          Наши ИИ ассистенты умеют
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-[#6F9CEB] shadow-lg rounded-xl p-6">
            <h3 className="text-2xl font-semibold text-white">Вести полноценные диалоги</h3>
            <p className="text-lg text-white mt-2">Как текстом, так и голосом.</p>
          </div>

          <div className="bg-[#6F9CEB] shadow-lg rounded-xl p-6">
            <h3 className="text-2xl font-semibold text-white">Читать документы</h3>
            <p className="text-lg text-white mt-2">И распознавать изображении в разных форматах.</p>
          </div>

          <div className="bg-[#6F9CEB] shadow-lg rounded-xl p-6">
            <h3 className="text-2xl font-semibold text-white">Иметь полную информацию</h3>
            <p className="text-lg text-white mt-2">О продуктах и услугах вашей компании.</p>
          </div>

          <div className="bg-[#6F9CEB] shadow-lg rounded-xl p-6">
            <h3 className="text-2xl font-semibold text-white">Общаться через мессенджеры</h3>
            <p className="text-lg text-white mt-2">Поддержка WhatsApp, Telegram.</p>
          </div>
        </div>

        {/* Learn More Button */}
        <button className="bg-sub_color text-white py-4 px-8 rounded-lg font-semibold text-xl hover:bg-blue-700 transition-colors">
          Узнать больше
        </button>
      </div>
    </div>
  );
};

export default AbilitySection;
