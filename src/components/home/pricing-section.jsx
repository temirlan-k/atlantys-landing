'use client';
import React, { useState } from 'react';
const pricingPlans = [
  {
    id: 'startup',
    title: 'Startup',
    description: 'For smaller companies and startups, posting up to 2 jobs per month.',
    priceMonthly: '£39',
    priceAnnual: '£390', // Assuming 2 months free on annual payment
    features: [
      'ATS access',
      'Chrome Extension access',
      '2 job posts per month',
      '100 talent outreach credits',
      '500 candidate screening credits',
    ],
    mostPopular: false,
  },
  {
    id: 'unlimited',
    title: 'Unlimited',
    description: 'For larger companies or consultancies, posting multiple jobs per month.',
    priceMonthly: '£99',
    priceAnnual: '£990',
    features: [
      'ATS access',
      'Chrome Extension access',
      'Unlimited job posts',
      '1000 prospect/talent outreach credits',
      'Unlimited candidate screening',
      '9-5 phone support',
    ],
    mostPopular: true,
  },
  {
    id: 'hermes',
    title: 'Hermes',
    description:
      'Hermes creates and posts your job across all your favourite job sites, sources candidates faster and more effectively than a human can, then ranks all the applicants.',
    priceMonthly: '£399',
    priceAnnual: '£3990',
    features: [
      'Everything in Unlimited',
      'Direct integration with calendar',
      'AI-driven candidate ranking',
      'Priority 24/7 support',
    ],
    mostPopular: false,
  },
];

const PricingCards = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <div id="price" className="flex flex-col mt-10 items-center">
      <div className="flex gap-3 mb-4 border-2 p-1 rounded-full">
        <button
          onClick={() => setIsAnnual(false)}
          className={`px-4 py-2 rounded-full ${
            !isAnnual ? ' bg-emerald-500 text-white' : 'bg-gray-200 text-gray-800'
          }`}
        >
          Monthly
        </button>
        <button
          onClick={() => setIsAnnual(true)}
          className={`px-4 py-2 rounded-full ${
            isAnnual ? 'bg-emerald-500 text-white' : 'bg-gray-200 text-gray-800'
          }`}
        >
          Annually
        </button>
      </div>
      <div className="flex justify-center items-center  p-10 ">
        {pricingPlans.map((plan) => (
          <div
            key={plan.id}
            className={`flex flex-col p-10 w-[350px] bg-white border-gray-300 border rounded-lg transform transition-all duration-300 ${
              plan.mostPopular ? 'scale-105 z-30 ' : 'scale-100'
            }`}
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
            <button className="mt-6  bg-emerald-500 text-white py-2 rounded hover:bg-green-600 transition-colors">
              Start saving money now
            </button>
            <ul className="flex-grow space-y-2 mt-5">
              {plan.features.map((feature, index) => (
                <li key={index} className="text-base text-gray-700 flex items-center">
                  <span className="mr-2">✔</span> {feature}
                </li>
              ))}
            </ul>

            {plan.mostPopular && (
              <div className="absolute top-2 right-2 bg-blue-500 text-white py-1 px-3 rounded-full text-xs">
                Most Popular
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingCards;
