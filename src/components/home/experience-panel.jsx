import Image from 'next/image';
import React from 'react';

const StatsCard = ({ percentage, description, label }) => {
  return (
    <div className="flex items-center bg-blue-500 text-white p-4 rounded-lg shadow-md">
      <div className="mr-4">
        <Image src={'https://randomuser.me/api/portraits/women/90.jpg'} alt='' width={150} height={150} />
      </div>
      <div>
        <p className="text-xl font-bold">{percentage}</p>
        <p className="text-sm">{description}</p>
      </div>
    </div>
  );
};

const ExperiencePanel = () => {
  return (
    <div className="p-5 bg-gray-100">
      <h2 className="text-3xl font-semibold mb-4">Вдохновитесь опытом наших клиентов</h2>
      <div className="grid grid-cols-2 gap-4">
        <StatsCard
          percentage="+60%"
          description="Внедрение единой системы сервисных исследований к скорости реагирования на обратную связь от клиентов"
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
