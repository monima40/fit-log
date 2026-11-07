

"use client";
import { useState } from "react";

import Image from "next/image";
import Link from "next/link";

const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full border-b border-[#21242b] bg-[#0b0d10]">
      <div className="main-container flex h-[80px] items-center justify-between px-6">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/assets/logo.png"
            alt="FitLog"
            width={28}
            height={28}
          />
          <span className="text-3xl font-extrabold text-white">
            FITLOG
          </span>
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/"
            className="rounded-full bg-[#171d0c] px-6 py-3 font-bold text-[#c5ff00]"
          >
            Workouts
          </Link>

          <Link
            href="/my-plan"
            className="px-3 py-3 font-semibold text-gray-400 hover:text-white"
          >
            My Plan
          </Link>
        </div>

        {/* Right Side */}
        <div className="hidden md:flex items-center gap-8">

          <div className="flex items-center gap-3">
            <span className="font-semibold text-gray-300">Plan</span>
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#c5ff00] font-bold text-black">
              0
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span className="font-semibold text-gray-400">Saved</span>
            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-700 font-bold text-gray-300">
              0
            </span>
          </div>

        </div>


        <div className="relative md:hidden">
  <button
    onClick={() => setMenuOpen(!menuOpen)}
    className="text-white text-2xl"
  >
    ☰
  </button>

  {menuOpen && (
    <div className="absolute right-0 top-10 z-50 w-44 rounded-lg border border-gray-700 bg-[#15181d] p-4 shadow-lg">

      <Link href="/" className="block py-2 text-white">
        Workouts
      </Link>

      <Link href="/my-plan" className="block py-2 text-white">
        My Plan
      </Link>

      <hr className="my-2 border-gray-700" />

      <p className="py-2 text-gray-300">Plan 0</p>
      <p className="py-2 text-gray-300">Saved 0</p>

    </div>
  )}
</div>
      </div>
      
    </nav>
  );
};

export default Navbar;