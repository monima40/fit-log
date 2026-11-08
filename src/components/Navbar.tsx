

"use client";
import { useState, useEffect } from "react";

import Image from "next/image";
import Link from "next/link";

const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false);
  
    const [planCount, setPlanCount] = useState(0);
const [savedCount, setSavedCount] = useState(0);

useEffect(() => {
  const update = () => {
    setPlanCount(JSON.parse(localStorage.getItem("fitlog-plan") || "[]").length);
    setSavedCount(JSON.parse(localStorage.getItem("fitlog-saved") || "[]").length);
  };
  update();
  window.addEventListener("fitlog-update", update);
  return () => window.removeEventListener("fitlog-update", update);
}, []);


  return (
    <nav className="sticky top-0 z-50  w-full border-b border-[#21242b] bg-[#0b0d10]">
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
          <a
            href="/#library"
            className="rounded-full bg-[#171d0c] px-6 py-3 font-bold text-[#c5ff00]"
          >
            Workouts
          </a>

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
            {/* <span className="font-semibold text-gray-300">Plan</span>
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#c5ff00] font-bold text-black">
              {planCount}
            </span> */}
            <Link
  href="/my-plan?tab=plan"
  className="flex items-center gap-3"
>
  <span className="font-semibold text-gray-300">Plan</span>
  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#c5ff00] font-bold text-black">
    {planCount}
  </span>
</Link>
          </div>

          <div className="flex items-center gap-3">
            {/* <span className="font-semibold text-gray-400">Saved</span>
            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-700 font-bold text-gray-300">
              {savedCount}
            </span> */}

            <Link
  href="/my-plan?tab=saved"
  className="flex items-center gap-3"
>
  <span className="font-semibold text-gray-400">Saved</span>
  <span className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-700 font-bold text-gray-300">
    {savedCount}
  </span>
</Link>
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

      <a  href="/#library" className="block py-2 text-white">
        Workouts
      </a>

      <Link href="/my-plan" className="block py-2 text-white">
        My Plan
      </Link>

      <hr className="my-2 border-gray-700" />

      {/* <p className="py-2 text-gray-300">{planCount}</p>
      <p className="py-2 text-gray-300">{savedCount}</p> */}
      <Link href="/my-plan?tab=plan" className="block py-2 text-gray-300">Plan {planCount}</Link>
<Link href="/my-plan?tab=saved" className="block py-2 text-gray-300">Saved {savedCount}</Link>

    </div>
  )}
</div>
      </div>
      
    </nav>
  );
};

export default Navbar;