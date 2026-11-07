
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="main-container w-full py-6 bg-black border-t border-[#21242b]">
      <div className="flex w-full flex-col items-center justify-between gap-3 sm:flex-row">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/assets/logo.png"
            alt="FitLog Logo"
            width={28}
            height={28}
            className="h-7 w-7 object-contain"
          />
          <span className="text-lg font-bold text-white">
            FITLOG
          </span>
        </Link>

        {/* Copyright */}
        <p className="text-center text-sm text-gray-400 sm:text-right">
          © 2026 FitLog — Workout Library. Train hard, log honest.
        </p>

      </div>
    </footer>
  );
}
