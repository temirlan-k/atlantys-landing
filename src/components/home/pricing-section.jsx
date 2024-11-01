'use client';
import React, { useState } from 'react';
const pricingPlans = [
  {
    id: 'startup',
    title: 'Анализ',
    description: 'For smaller companies and startups, posting up to 2 jobs per month.',
    priceMonthly: '£0',
    priceAnnual: '£0',
    features: [
      'ATS access',
      'Chrome Extension access',
      '2 job posts per month',
      '100 talent outreach credits',
      '500 candidate screening credits',
    ],
  },
  {
    id: 'unlimited',
    title: 'ИИ-ассистент',
    description: 'For larger companies or consultancies, posting multiple jobs per month.',
    priceMonthly: '£0',
    priceAnnual: '£0',
    features: [
      'ATS access',
      'Chrome Extension access',
      'Unlimited job posts',
      '1000 prospect/talent outreach credits',
      'Unlimited candidate screening',
      '9-5 phone support',
    ],
  },
];

const PricingCards = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <div id="price" className="flex flex-col mt-10 items-center">
      <div className="flex justify-center items-stretch p-10 space-x-5">
        {pricingPlans.map((plan) => (
          <div
            key={plan.id}
            className="flex flex-col p-10 w-[350px] bg-white border-gray-300 border rounded-lg transform transition-all duration-300"
          >
            <div className="mb-4">
              <h2 className="text-xl font-bold">{plan.title}</h2>
              <p className="text-sm text-gray-500">{plan.description}</p>
            </div>
            <div className="text-center text-3xl font-bold my-4">
              {isAnnual ? plan.priceAnnual : plan.priceMonthly}
              <span className="text-base font-normal text-gray-500">
                / {isAnnual ? 'year' : 'month'}
              </span>
            </div>
            <button className="mt-6 bg-[#021D73] text-white  py-2  rounded transition-colors">
              Начните экономить прямо сейчас
            </button>
            <ul className="flex-grow space-y-2 mt-5">
              {plan.features.map((feature, index) => (
                <li key={index} className="text-base text-gray-700 flex items-center">
                  <span className="mr-2">✔</span> {feature}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingCards;
