'use client';

import Link from 'next/link';
import { IoSearchOutline, IoCartOutline } from 'react-icons/io5';
import Image from 'next/image';
import { titleFont } from '@/config/fonts';
import { useUIStore } from '@/store/index';

export const TopMenu = () => {
  const openSideMenu = useUIStore((state) => state.openSideMenu);

  return (
    <>
      <div className="h-40 w-full bg-green-900 bg-opacity-70">
        <nav className="flex px-5 justify-between items-center w-full">
          {/* Logo */}

          <div>
            <Link href="/" className="font-bold text-white">
              <span>Lupulos Rio Negro</span>
              <br />
              <span>Patagonia Argentina</span>
            </Link>
          </div>

          {/* Center Menu */}
          <div className="hidden sm:block  text-white">
            <Link
              className="m-2 p-2 rounded-md transition-all hover:bg-gray-900"
              href="/gender/lupulos"
            >
              Lupulos
            </Link>
          </div>

          {/* Search, Cart, Menu */}
          <div className="flex items-center  text-white">
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
    </>
  );
};
