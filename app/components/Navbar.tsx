"use client";

import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <header className="absolute left-0 top-0 z-50 w-full">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-5">
        {/* Logo */}
        <a href="/" className="shrink-0">
          <img
            src="/logo-white.png"
            alt="LakeDayz"
            className={
              isHome
                ? "h-40 w-40 object-contain md:h-32 md:w-32"
                : "h-24 w-24 object-contain md:h-24 md:w-24"
            }
          />
        </a>

        {/* Desktop navigation */}
        <nav className="hidden items-center gap-8 text-sm font-semibold text-white md:flex">
          <a href="/marinas" className="transition hover:text-cyan-300">
            Marinas
          </a>

          <a href="/boat-rentals" className="transition hover:text-cyan-300">
            Categories
          </a>

          <a href="/businesses" className="transition hover:text-cyan-300">
            Businesses
          </a>

          <a href="/events" className="transition hover:text-cyan-300">
            Events
          </a>
        </nav>

        {/* List business button */}
        <a
          href="/businesses"
          className="rounded-full bg-cyan-500 px-5 py-3 text-sm font-black text-white shadow-lg transition hover:bg-cyan-400 md:px-7 md:py-3"
        >
          List Your Business
        </a>
      </div>
    </header>
  );
}