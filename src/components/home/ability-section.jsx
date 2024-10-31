'use client';
import React from 'react';
import Image from 'next/image';

const AbilitySection = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center p-10 md:p-20 space-y-12 md:space-y-0">
      <div className="space-y-8">
        <h2 className="text-5xl font-bold text-center w-full">Каждый ИИ - ассистент умеет</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mx-auto w-full max-w-4xl">
          <div className="bg-[#6F9CEB] shadow-lg rounded-xl p-6 opacity-80 hover:opacity-100 transition-opacity duration-300">
            <Image src="/assets/dialog.gif" alt="description" width={50} height={50} />
            <h3 className="text-2xl font-semibold text-white">Вести полноценные диалоги</h3>
            <p className="text-lg text-white mt-2">В текстовом и голосами виде</p>
          </div>

          <div className="bg-[#6F9CEB] shadow-lg rounded-xl p-6 opacity-80 hover:opacity-100 transition-opacity duration-300">
            <Image src="/assets/gif.gif" alt="description" width={50} height={50} />
            <h3 className="text-2xl font-semibold text-white">
              Читать документы и распознавать изображении
            </h3>
            <p className="text-lg text-white mt-2">в разных форматах</p>
          </div>

          <div className="bg-[#6F9CEB] relative shadow-lg rounded-xl p-6 opacity-80 hover:opacity-100 transition-opacity duration-300">
            <Image src="/assets/product.gif" alt="description" width={50} height={50} />
            <h3 className="text-2xl font-semibold text-white mt-4">Использовать всю информацию</h3>
            <p className="text-lg text-white mt-2">О продуктах и услугах вашей компании.</p>
          </div>

          <div className="bg-[#6F9CEB] relative shadow-lg rounded-xl p-6 opacity-80 hover:opacity-100 transition-opacity duration-300">
            <Image
              src="/assets/message.gif"
              className="absolute top-2"
              alt="description"
              width={50}
              height={50}
            />
            <h3 className="text-2xl mt-10 font-semibold text-white">Общаться через мессенджеры</h3>
            <p className="text-lg text-white mt-2">Поддержка WhatsApp, Telegram.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AbilitySection;
