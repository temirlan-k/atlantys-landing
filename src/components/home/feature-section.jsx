import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const FeatureSection = () => {
  return (
    <div className="bg-white mt-64">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h1 className="text-5xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-7xl">
            Remove human bias. <br /> Save hours per day. <br /> Join the future.
          </h1>
          <p className="mt-2 text-base leading-8 font-light  sm:mt-4">
            If you're tired of your expensive, legacy ATS, or tired of spending hours every day <br/>
            going CV-blind, then our brand new ATS might just be exactly what you're looking for. <br/>
            Equally, if you're a brand new startup that doesn't have the budget for a recruiter, or <br/>
            the time to do it all on your own, check out our AI Hiring Manager, Hermes.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
