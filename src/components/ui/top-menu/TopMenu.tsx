'use client';

import Link from 'next/link';
import { IoSearchOutline, IoCartOutline } from 'react-icons/io5';

import { titleFont } from '@/config/fonts';
import { useUIStore } from '@/store';

import Image from 'next/image';

export const TopMenu = () => {
  const openSideMenu = useUIStore((state) => state.openSideMenu);
  return (
    <nav className="flex px-5 justify-between items-center w-full bg-green-900 opacity-30 -z-10">
      {/* Logo */}
      <Image
        src="/imgs/logo-transparente.png"
        alt="Lupulos Rio Negro"
        priority="hight"
        width={200}
        height={200}
      />
      <div>
        <Link href="/">
          <span
            className={`${titleFont.className} antialiased -mx-10 font-bold text-white`}
          >
            Lupulos Rio Negro
            <br />
            Patagonia Argentina
          </span>
        </Link>
      </div>
      {/* Center Menu */}
      <div className="hidden sm:block">
        <Link
          className="m-2 p-2 raunded-md transition-all  text-white hover:bg-gray-900"
          href="/category/men"
        >
          Lupulos
        </Link>
        <Link
          className="m-2 p-2 raunded-md transition-all  text-white hover:bg-gray-900"
          href="/category/women"
        >
          Cervezas
        </Link>
        <Link
          className="m-2 p-2 raunded-md transition-all  text-white hover:bg-gray-900"
          href="/category/kid"
        >
          Nosotros
        </Link>
        <Link
          className="m-2 p-2 raunded-md transition-all  text-white hover:bg-gray-900"
          href="/category/contacto"
        >
          Contacto
        </Link>
      </div>
      {/*Search, Cart, Menu*/}
      <div className="flex items-center">
        <Link href="/search" className="mx-2  text-white">
          <IoSearchOutline className="w-5 h-5  text-white" />
        </Link>
        <Link href="/cart" className="mx-2">
          <div className="relative">
            <span className="absolute text-xs rounded-full px-1 font-bold -top-2 -right-2 bg-blue-700 text-white">
              3
            </span>

            <IoCartOutline className="w-5 h-5  text-white" />
          </div>
        </Link>
        <button
          onClick={openSideMenu}
          className="m-2 p-2 rounded-md transition-all  text-white hover:bg-gray-100"
        >
          Menú
        </button>
      </div>
    </nav>
  );
};
