
import Link from "next/link";

export default function NotFound() {
  return (
    <section className="main-container flex min-h-[70vh] flex-col items-center justify-center bg-black px-4 text-center">

      <p className="mb-4 text-xs font-bold tracking-widest text-[#c5ff00]">
        PAGE NOT FOUND
      </p>

      <h1 className="text-8xl font-extrabold text-[#c5ff00] md:text-9xl">
        404
      </h1>

      <h2 className="mt-4 text-3xl font-extrabold text-white md:text-4xl">
        OOPS! WRONG TURN.
      </h2>

      <p className="mt-4 max-w-md text-sm leading-relaxed text-gray-400">
        The page you're looking for doesn't exist or may have moved.
      </p>

      <Link
        href="/"
        className="btn-primary mt-7"
      >
        BACK TO HOME
      </Link>

    </section>
  );
}
