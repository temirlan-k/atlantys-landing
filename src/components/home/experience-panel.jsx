import Image from 'next/image';
import React from 'react';

const StatsCard = ({ percentage, description, label }) => {
  return (
    <div className="bg-gradient-to-bl w-1/3  bg-sub_color text-white p-6 rounded-xl shadow-lg">
      <div className="flex justify-between items-center mb-4">
        <p className="text-xl font-light">{description}</p>
        <Image
          src="https://randomuser.me/api/portraits/women/90.jpg"
          alt=""
          width={100}
          height={100}
          className="rounded-full"
        />
      </div>
      <div className="text-center">
        <p className="text-[60px] font-bold mb-2">{percentage}</p>
      </div>
      <p className="text-base font-light">к скорости реагирования на обратную связь от клиентов</p>
    </div>
  );
};

const ExperiencePanel = () => {
  return (
    <div className="p-5 flex flex-col justify-center items-center mt-10 mb-10 ">
      <h2 className="text-4xl font-bold text-main_color mb-6">
        Be inspired by the experience of our customers
      </h2>
      <div className="flex gap-10 mt-5 justify-center">
        <StatsCard
          percentage="+60%"
          description="Внедрение единой системы сервисных исследований"
        />
        <StatsCard
          percentage="+15%"
          description="Оркестратор персональных предложений рост конверсии по актуальным предложениям банка"
        />
      </div>
    </div>
  );
};

export default ExperiencePanel;
