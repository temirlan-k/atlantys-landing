import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <div className="bg-white mt-64">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h1 className="text-5xl tracking-tight font-bold sm:text-5xl md:text-7xl">
            <span className="text-sub_color">Управляй интеллектом</span> <br /> сокращай затраты,
            <br /> <span>ускоряй процессы</span>
          </h1>
          <p className="mt-2 text-base leading-8 font-light font-monaBlackWide  text-main_color  sm:mt-4">
            Наши ИИ-решения идеально подходят для компаний, столкнувшихся с высокими затратами на{' '}
            <br />
            зарплаты, текучкой кадров и излишними рутинными процессами -{' '}
            <span className="text-sub_color">
              это приводит к <br /> потере клиентов
            </span>
          </p>
          <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-center">
            <div className="rounded-md shadow">
              <Link
                href="/waitlist"
                className="w-full flex items-center justify-center border border-transparent text-xs font-medium rounded-md text-white bg-sub_color p-3 "
              >
                Join the waitlist
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
