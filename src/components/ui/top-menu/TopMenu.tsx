'use client';

import Link from 'next/link';
import { IoSearchOutline, IoCartOutline } from 'react-icons/io5';
import Image from 'next/image';
import { titleFont } from '@/config/fonts';
import { useUIStore } from '@/store/index';

export const TopMenu = () => {
  const openSideMenu = useUIStore((state) => state.openSideMenu);

  return (
    <div className="h-auto w-full bg-green-900 bg-opacity-70">
      <nav className="flex items-center justify-between px-5 w-full">
        {/* Logo and Brand Name */}
        <div className="flex items-center">
          <Image
            className="p-3"
            src="/imgs/logo-transparente.png"
            alt="Rio Negro"
            width={220}
            height={220}
          />
          <div className="ml-4">
            <Link href="/" className={`font-bold text-white ${titleFont}`}>
              <span>Lúpulos Río Negro</span>
              <br />
              <span>Patagonia Argentina</span>
            </Link>
          </div>
        </div>

        {/* Center Menu Links */}
        <div className="flex items-center justify-center text-white space-x-8">
          <Link
            className="text-lg font-semibold transition-all hover:bg-gray-900 p-2 rounded-md"
            href="/gender/lupulos"
          >
            Lúpulos
          </Link>
          <Link
            className="text-lg font-semibold transition-all hover:bg-gray-900 p-2 rounded-md"
            href="#"
          >
            Nosotros
          </Link>
          <Link
            className="text-lg font-semibold transition-all hover:bg-gray-900 p-2 rounded-md"
            href="#"
          >
            Contacto
          </Link>
        </div>

        {/* Right Menu: Search, Cart, Menu Button */}
        <div className="flex items-center text-white space-x-4">
          <Link href="/search" className="mx-2">
            <IoSearchOutline className="w-5 h-5" />
          </Link>

          <Link href="/cart" className="mx-2">
            <div className="relative">
              <span className="absolute text-xs px-1 rounded-full font-bold -top-2 -right-2 bg-blue-700 text-white">
                3
              </span>
              <IoCartOutline className="w-5 h-5" />
            </div>
          </Link>

          <button
            onClick={openSideMenu}
            className="m-2 p-2 rounded-md transition-all hover:bg-gray-100"
          >
            Menú
          </button>
        </div>
      </nav>
    </div>
  );
};
