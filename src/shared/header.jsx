import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50  shadow-sm">
      <div className="container mx-auto flex justify-around items-center px-6">
        <div className="flex items-center gap-8">
          <Image src="/logo.png" alt="Company Logo" width={150} height={10} />
          <div className="hidden md:flex gap-20 font-semibold text-base">
            <Link
              href="/pricing"
              className=" transition duration-150 ease-in-out"
            >
              ИИ-ассистенты
            </Link>
            <Link
              href="/demo"
              className=" transition duration-150 ease-in-out"
            >
              Кейсы
            </Link>
            <Link href="/contact" className=" transition duration-150 ease-in-out">
              Цены
            </Link>
          </div>
        </div>

        <div className="flex items-center gap-20">
          <Link
            href="/waitlist"
            className="px-6 py-2 text-white rounded-lg  bg-[#021D73] transition duration-150 ease-in-out"
          >
            Попробовать
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
