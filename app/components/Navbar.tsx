"use client";

import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <header className="absolute top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto flex items-start justify-between px-6 pt-4">
        <a href="/">
          <img
            src="/logo-white.png"
            alt="LakeDayz"
            className={
              isHome
                ? "h-36 w-36 object-contain"
                : "h-24 w-24 object-contain -mt-8"
            }
          />
        </a>

        <nav className="hidden md:flex gap-8 text-white font-medium">
          <a href="/marinas">Marinas</a>
          <a href="/categories">Categories</a>
          <a href="/businesses">Businesses</a>
          <a href="/events">Events</a>
        </nav>

        <button className="rounded-full bg-cyan-500 px-5 py-2 text-white font-semibold hover:bg-cyan-400 transition">
          List Your Business
        </button>
      </div>
    </header>
  );
}